import { useSyncExternalStore } from 'react';
import { allUnits } from './courses.js';
import { dayStr, today, pct } from './utils.js';

const KEY = 'lingua-progress-v1';
export const PASS = 0.7;                       // điểm tối thiểu để tính là hoàn thành bài
export const DAILY_GOAL = 50;                  // điểm mục tiêu mỗi ngày
export const SRS_DAYS = [1, 2, 4, 7, 15, 30];  // khoảng cách ôn (ngày)

const defaults = () => ({
  units: {}, xp: 0, streak: { last: null, count: 0 }, srs: {}, level: {}, spoken: {},
  theme: null, lastLang: null, daily: { date: null, xp: 0 },
  levelTests: {}                               // bài kiểm tra cuối cấp đã đạt: { [lang]: { [levelId]: { best, date } } }
});

const isObj = x => x && typeof x === 'object' && !Array.isArray(x);

// Đọc tiến độ; trường nào sai kiểu (dữ liệu hỏng / phiên bản cũ) thì dùng giá trị mặc định
function load() {
  const d = defaults();
  let raw;
  try { raw = JSON.parse(localStorage.getItem(KEY)); } catch { return d; }
  if (!isObj(raw)) return d;
  for (const k of Object.keys(d)) {
    const v = raw[k], dv = d[k];
    if (v === undefined) continue;
    if (isObj(dv)) d[k] = isObj(v) ? { ...dv, ...v } : dv;
    else if (typeof dv === 'number') d[k] = Number.isFinite(v) ? v : dv;
    else d[k] = typeof v === 'string' ? v : dv;
  }
  if (!Number.isFinite(d.streak.count)) d.streak.count = 0;
  if (!Number.isFinite(d.daily.xp)) d.daily.xp = 0;
  return d;
}

let P = load();
const subs = new Set();
const notify = () => subs.forEach(f => f());

// Tab khác vừa lưu tiến độ → nạp lại để không ghi đè lên nhau
if (typeof window !== 'undefined') {
  window.addEventListener('storage', e => { if (e.key === KEY) { P = load(); notify(); } });
}

export const getProgress = () => P;
export function useProgress() {
  return useSyncExternalStore(cb => { subs.add(cb); return () => subs.delete(cb); }, () => P);
}

// Cập nhật tiến độ: fn nhận bản sao để sửa
export function update(fn) {
  let base = P;
  try { if (localStorage.getItem(KEY) !== null) base = load(); } catch { /* chế độ riêng tư */ }
  const next = structuredClone(base);
  fn(next);
  P = next;
  try { localStorage.setItem(KEY, JSON.stringify(P)); } catch { /* chế độ riêng tư */ }
  notify();
}

// Bài đã xong từ trước đợt bổ sung nội dung: đưa các từ mới của bài vào ôn tập
export function backfillSrs() {
  const missing = [];
  for (const [uid, rec] of Object.entries(P.units)) {
    if (!rec?.done) continue;
    const lang = uid.split('-')[0];
    const u = allUnits(lang).find(x => x.id === uid);
    u?.vocab.forEach((_, k) => { const key = `${lang}|${uid}|${k}`; if (!P.srs[key]) missing.push(key); });
  }
  if (missing.length) update(d => { missing.forEach(k => { d.srs[k] = { box: 0, due: dayStr(1) }; }); });
}

export function addXp(d, n) {
  d.xp += n;
  if (d.daily.date !== today()) d.daily = { date: today(), xp: 0 };
  d.daily.xp += n;
  const s = d.streak;
  if (s.last !== today()) { s.count = s.last === dayStr(-1) ? s.count + 1 : 1; s.last = today(); }
}

export const streakNow = p => (p.streak.last === today() || p.streak.last === dayStr(-1)) ? p.streak.count : 0;
export const dailyXp = p => p.daily.date === today() ? p.daily.xp : 0;

export const isDone = (p, id) => !!(p.units[id] && p.units[id].done);
// Mọi bài đều mở; người học tự chọn trình độ. "Học tiếp" = bài chưa xong đầu tiên từ trình độ đã chọn
export function nextUnit(p, lang) {
  const all = allUnits(lang), lv = p.level?.[lang];
  const start = Math.max(0, lv ? all.findIndex(u => u.level.id === lv) : 0);
  return all.slice(start).find(u => !isDone(p, u.id)) || all.find(u => !isDone(p, u.id));
}
export function langProgress(p, lang) {
  const all = allUnits(lang), done = all.filter(u => isDone(p, u.id)).length;
  return { done, total: all.length, pct: pct(done, all.length) };
}
export const srsKeys = (p, lang) => Object.keys(p.srs).filter(k => !lang || k.startsWith(lang + '|'));
export const srsDue = (p, lang) => srsKeys(p, lang).filter(k => p.srs[k].due <= today());

// Khoá ôn tập: 'lang|unitId|index' (từ trong bài) hoặc 'lang|bank|từ' (từ thêm từ Kho từ vựng, lưu kèm dữ liệu từ)
export const bankKey = (lang, w) => `${lang}|bank|${w}`;
export function wordFromKey(key) {
  const [lang, uid, i] = key.split('|');
  if (uid === 'bank') return P.srs[key]?.w;
  const u = allUnits(lang).find(x => x.id === uid);
  return u && u.vocab[+i];
}
