// Tìm từ vựng bị trùng giữa các bài (gốc + bổ sung) của một ngôn ngữ: node scripts/check-dupes.mjs <lang>
import { pathToFileURL, fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { readdirSync } from 'node:fs';
const lang = process.argv[2];
const root = resolve(dirname(fileURLToPath(import.meta.url)), '../src/data') + '/';
globalThis.window = globalThis;
await import(pathToFileURL(root + 'registry.js'));
for (const f of { en: ['en-a', 'en-b'], es: ['es-a', 'es-b'], zh: ['zh-a', 'zh-b'] }[lang]) await import(pathToFileURL(root + f + '.js'));
// Bài mới (src/data/more) chèn vào sau bài `after`
for (const f of readdirSync(root + 'more').filter(f => f.startsWith(lang + '-'))) for (const { after, unit } of (await import(pathToFileURL(root + 'more/' + f))).default)
  for (const l of COURSES[lang].levels) { const k = l.units.findIndex(u => u.id === after); if (k >= 0) l.units.splice(k + 1, 0, unit); }
const where = new Map();
const add = (w, loc) => { const k = w.toLowerCase().trim(); where.set(k, [...(where.get(k) || []), loc]); };
for (const l of COURSES[lang].levels) for (const u of l.units) u.vocab.forEach(v => add(v.w, `${u.id} (${/[a-z]$/.test(u.id) ? 'bài mới' : 'gốc'})`));
for (const f of readdirSync(root + 'ext').filter(f => f.startsWith(lang + '-')).sort()) {
  const ext = (await import(pathToFileURL(root + 'ext/' + f))).default;
  for (const [uid, x] of Object.entries(ext)) (x.vocab || []).forEach(v => add(v.w, `${uid} (bổ sung)`));
}
const dupes = [...where].filter(([, locs]) => locs.length > 1);
console.log(dupes.length ? dupes.map(([w, locs]) => `${w}: ${locs.join(', ')}`).join('\n') : 'Không trùng');
