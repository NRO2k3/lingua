// Tìm từ vựng bị trùng giữa các bài (gốc + bổ sung) của một ngôn ngữ: node scripts/check-dupes.mjs <lang>
import { pathToFileURL, fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { readdirSync } from 'node:fs';
const lang = process.argv[2];
const root = resolve(dirname(fileURLToPath(import.meta.url)), '../src/data') + '/';
globalThis.window = globalThis;
await import(pathToFileURL(root + 'registry.js'));
for (const f of { en: ['en-a', 'en-b'], es: ['es-a', 'es-b'], zh: ['zh-a', 'zh-b'] }[lang]) await import(pathToFileURL(root + f + '.js'));
const where = new Map();
const add = (w, loc) => { const k = w.toLowerCase().trim(); where.set(k, [...(where.get(k) || []), loc]); };
for (const l of COURSES[lang].levels) for (const u of l.units) u.vocab.forEach(v => add(v.w, `${u.id} (gốc)`));
for (const f of readdirSync(root + 'ext').filter(f => f.startsWith(lang + '-')).sort()) {
  const ext = (await import(pathToFileURL(root + 'ext/' + f))).default;
  for (const [uid, x] of Object.entries(ext)) (x.vocab || []).forEach(v => add(v.w, `${uid} (bổ sung)`));
}
const dupes = [...where].filter(([, locs]) => locs.length > 1);
console.log(dupes.length ? dupes.map(([w, locs]) => `${w}: ${locs.join(', ')}`).join('\n') : 'Không trùng');
