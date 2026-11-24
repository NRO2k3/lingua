import { useSyncExternalStore } from 'react';

// ---------- Bật/tắt tiếng ----------
const KEY = 'lingua-sfx-muted';
let muted = (() => {
  try { return localStorage.getItem(KEY) === '1'; } catch { return false; }
})();
const subs = new Set();

export const isMuted = () => muted;
export function setMuted(v) {
  v = !!v;
  if (v === muted) return;
  muted = v;
  try { localStorage.setItem(KEY, v ? '1' : '0'); } catch { /* không lưu được thì thôi */ }
  subs.forEach(cb => { try { cb(muted); } catch { /* bỏ qua lỗi của người nghe */ } });
}
// Đăng ký nghe thay đổi; trả về hàm huỷ
export function subscribe(cb) {
  subs.add(cb);
  return () => subs.delete(cb);
}
// Hook React: [muted, setMuted]
export function useMuted() {
  return [useSyncExternalStore(subscribe, isMuted, isMuted), setMuted];
}

// ---------- Âm thanh tổng hợp (Web Audio) ----------
const MASTER = 0.18;
let ctx = null, master = null;

// Tạo AudioContext lười ở lần phát đầu tiên
function getCtx() {
  if (ctx) return ctx;
  const AC = typeof window !== 'undefined' && (window.AudioContext || window.webkitAudioContext);
  if (!AC) return null;
  ctx = new AC();
  master = ctx.createGain();
  master.gain.value = MASTER;
  master.connect(ctx.destination);
  return ctx;
}

// Một nốt: f → f2 (lướt cao độ), envelope tăng nhanh rồi tắt dần mượt về 0.0001
function tone({ f, f2 = f, at = 0, dur = 0.15, type = 'sine', vol = 0.6, attack = 0.008 }) {
  const t = ctx.currentTime + 0.01 + at;
  const osc = ctx.createOscillator(), g = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(f, t);
  if (f2 !== f) osc.frequency.exponentialRampToValueAtTime(f2, t + dur);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(vol, t + attack);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  osc.connect(g).connect(master);
  osc.start(t);
  osc.stop(t + dur + 0.03);
}

// Tiếng "phụt": nhiễu trắng ngắn qua lọc dải, quét tần số xuống
function puff({ dur = 0.09, vol = 0.35, from = 2400, to = 700 }) {
  const t = ctx.currentTime + 0.01;
  const len = Math.ceil(ctx.sampleRate * dur);
  const buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
  const src = ctx.createBufferSource(), bp = ctx.createBiquadFilter(), g = ctx.createGain();
  src.buffer = buf;
  bp.type = 'bandpass'; bp.Q.value = 1.2;
  bp.frequency.setValueAtTime(from, t);
  bp.frequency.exponentialRampToValueAtTime(to, t + dur);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(vol, t + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  src.connect(bp).connect(g).connect(master);
  src.start(t);
  src.stop(t + dur + 0.02);
}

// Tần số các nốt dùng tới
const N = { A3: 220, D4: 293.66, F4: 349.23, C5: 523.25, E5: 659.25, G5: 783.99, C6: 1046.5, E6: 1318.51, A6: 1760 };

const SOUNDS = {
  // Hai nốt đi lên vui tai
  correct: () => {
    tone({ f: N.E6, dur: 0.14, type: 'sine', vol: 0.55 });
    tone({ f: N.E6 / 2, dur: 0.14, type: 'triangle', vol: 0.15 });
    tone({ f: N.A6, at: 0.09, dur: 0.32, type: 'sine', vol: 0.6 });
    tone({ f: N.A6 / 2, at: 0.09, dur: 0.32, type: 'triangle', vol: 0.15 });
  },
  // Hai nốt trầm đi xuống, mềm
  wrong: () => {
    tone({ f: N.F4, f2: N.F4 * 0.97, dur: 0.16, type: 'triangle', vol: 0.5, attack: 0.015 });
    tone({ f: N.D4, f2: N.D4 * 0.92, at: 0.13, dur: 0.34, type: 'triangle', vol: 0.5, attack: 0.015 });
    tone({ f: N.A3, at: 0.13, dur: 0.34, type: 'sine', vol: 0.25, attack: 0.02 });
  },
  // Hợp âm rải đi lên C5–E5–G5–C6, nốt cuối ngân dài
  complete: () => {
    [N.C5, N.E5, N.G5].forEach((f, i) => {
      tone({ f, at: i * 0.1, dur: 0.28, type: 'triangle', vol: 0.45 });
      tone({ f: f * 2, at: i * 0.1, dur: 0.2, type: 'sine', vol: 0.12 });
    });
    tone({ f: N.C6, at: 0.3, dur: 0.85, type: 'triangle', vol: 0.5 });
    tone({ f: N.E6, at: 0.3, dur: 0.85, type: 'sine', vol: 0.18 });
    tone({ f: N.G5, at: 0.3, dur: 0.8, type: 'sine', vol: 0.18 });
  },
  // "Phụt" rất ngắn khi lật thẻ
  flip: () => {
    puff({ dur: 0.09, vol: 0.3 });
    tone({ f: 600, f2: 300, dur: 0.07, type: 'sine', vol: 0.12 });
  },
  // Click rất nhẹ
  tap: () => tone({ f: 1400, f2: 900, dur: 0.045, type: 'sine', vol: 0.3, attack: 0.003 }),
  // "Ting" nhỏ
  xp: () => {
    tone({ f: 2093, dur: 0.35, type: 'sine', vol: 0.3, attack: 0.004 });
    tone({ f: 3136, dur: 0.2, type: 'sine', vol: 0.08, attack: 0.004 });
  },
  // Bong bóng: cao độ vọt lên nhanh
  pop: () => tone({ f: 380, f2: 1200, dur: 0.09, type: 'sine', vol: 0.45, attack: 0.004 })
};

export function play(name) {
  if (muted || !Object.hasOwn(SOUNDS, name)) return;
  try {
    if (!getCtx()) return;
    if (ctx.state === 'suspended') ctx.resume().catch(() => {});
    SOUNDS[name]();
  } catch { /* âm thanh lỗi thì bỏ qua, không ảnh hưởng bài học */ }
}
