// Đối chiếu pinyin từ vựng trong bài học tiếng Trung với kho từ HSK (bỏ qua khác biệt thanh điệu/khoảng trắng)
import { pathToFileURL, fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { readdirSync, readFileSync } from 'node:fs';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '../src/data') + '/';
globalThis.window = globalThis;
await import(pathToFileURL(root + 'registry.js'));
for (const f of ['zh-a', 'zh-b']) await import(pathToFileURL(root + f + '.js'));
const bank = new Map(JSON.parse(readFileSync(root + 'bank/zh.json', 'utf8')).map(r => [r[0], r[1]]));
const base = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ü/g, 'v').toLowerCase().replace(/[^a-z]/g, '');
const items = [];
for (const l of COURSES.zh.levels) for (const u of l.units) u.vocab.forEach(v => items.push([u.id + ' (gốc)', v]));
for (const f of readdirSync(root + 'ext').filter(f => f.startsWith('zh-')))
  for (const [uid, x] of Object.entries((await import(pathToFileURL(root + 'ext/' + f))).default)) x.vocab.forEach(v => items.push([uid, v]));
const bad = items.filter(([, v]) => bank.has(v.w) && base(bank.get(v.w)) !== base(v.ipa));
console.log(bad.length ? bad.map(([u, v]) => `${u}: ${v.w} bài="${v.ipa}" kho="${bank.get(v.w)}"`).join('\n') : 'Khớp hết');
console.log(`(đã so ${items.filter(([, v]) => bank.has(v.w)).length}/${items.length} từ có trong kho HSK)`);
