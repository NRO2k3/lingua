import { useSyncExternalStore } from 'react';
import { allUnits } from './courses.js';
import { dayStr, today, pct } from './utils.js';

const KEY = 'lingua-progress-v1';
export const PASS = 0.7;                       // điểm tối thiểu để mở bài tiếp theo
export const DAILY_GOAL = 50;                  // điểm mục tiêu mỗi ngày
export const SRS_DAYS = [1, 2, 4, 7, 15, 30];  // khoảng cách ôn (ngày)

const defaults = () => ({
  units: {}, xp: 0, streak: { last: null, count: 0 }, srs: {}, free: {}, spoken: {},
  theme: null, lastLang: null, daily: { date: null, xp: 0 }
});

function load() {
  try { return Object.assign(defaults(), JSON.parse(localStorage.getItem(KEY)) || {}); }
  catch { return defaults(); }
}

let P = load();
const subs = new Set();

export const getProgress = () => P;
export function useProgress() {
  return useSyncExternalStore(cb => { subs.add(cb); return () => subs.delete(cb); }, () => P);
}

// Cập nhật tiến độ: fn nhận bản sao để sửa
export function update(fn) {
  const next = structuredClone(P);
  fn(next);
  P = next;
  try { localStorage.setItem(KEY, JSON.stringify(P)); } catch { /* chế độ riêng tư */ }
  subs.forEach(f => f());
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
export function isUnlocked(p, lang, idx) {
  if (p.free[lang] || idx === 0) return true;
  return isDone(p, allUnits(lang)[idx - 1].id);
}
export const nextUnit = (p, lang) => allUnits(lang).find(u => !isDone(p, u.id));
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
