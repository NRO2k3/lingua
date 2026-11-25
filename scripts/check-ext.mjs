// Kiểm tra file bổ sung bài học: node scripts/check-ext.mjs <ext-file> <lang> <levelId>
import { pathToFileURL } from 'node:url';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
const [file, lang, levelId] = process.argv.slice(2);
const root = resolve(dirname(fileURLToPath(import.meta.url)), '../src/data') + '/';
globalThis.window = globalThis;
await import(pathToFileURL(root + 'registry.js'));
for (const f of { en: ['en-a', 'en-b'], es: ['es-a', 'es-b'], zh: ['zh-a', 'zh-b'] }[lang]) await import(pathToFileURL(root + f + '.js'));
const ext = (await import(pathToFileURL(resolve(file)) + '?t=' + Date.now())).default;
const level = COURSES[lang].levels.find(l => l.id === levelId);
const errs = [];
const baseWords = new Set(COURSES[lang].levels.flatMap(l => l.units.flatMap(u => u.vocab.map(v => v.w.toLowerCase()))));
const seen = new Set();
const isZh = lang === 'zh';
for (const u of level.units) {
  const x = ext[u.id];
  if (!x) { errs.push(`thiếu unit ${u.id}`); continue; }
  if (x.vocab?.length !== 10) errs.push(`${u.id}: vocab ${x.vocab?.length} (cần 10)`);
  if (x.exercises?.length !== 8) errs.push(`${u.id}: exercises ${x.exercises?.length} (cần 8)`);
  for (const v of x.vocab || []) {
    for (const k of ['w', 'ipa', 'vi', 'ex', 'exVi', ...(isZh ? ['exPy'] : [])]) if (!v[k]) errs.push(`${u.id}: vocab "${v.w}" thiếu ${k}`);
    if (isZh && v.hv === undefined) errs.push(`${u.id}: vocab "${v.w}" thiếu hv`);
    const key = (v.w || '').toLowerCase();
    if (baseWords.has(key)) errs.push(`${u.id}: "${v.w}" trùng từ đã có trong bài gốc`);
    if (seen.has(key)) errs.push(`${u.id}: "${v.w}" trùng trong file bổ sung`);
    seen.add(key);
  }
  for (const e of x.exercises || []) {
    if (e.type === 'mc' && !(e.answer >= 0 && e.answer < e.options.length)) errs.push(`${u.id}: mc sai answer: ${e.q}`);
    if (e.type === 'mc' && new Set(e.options).size !== e.options.length) errs.push(`${u.id}: mc trùng phương án: ${e.q}`);
    if (e.type === 'fill' && (e.q.split('___').length !== 2 || !Array.isArray(e.answer) || !e.answer.length)) errs.push(`${u.id}: fill lỗi: ${e.q}`);
    if (e.type === 'order' && [...e.words].sort().join(' ') !== e.answer.split(' ').sort().join(' ')) errs.push(`${u.id}: order lỗi: ${e.answer}`);
    if (e.type === 'order') for (const a of e.alt || []) if ([...e.words].sort().join(' ') !== a.split(' ').sort().join(' ')) errs.push(`${u.id}: order alt không dùng đúng bộ từ: ${a}`);
    if (!['mc', 'fill', 'order'].includes(e.type)) errs.push(`${u.id}: type lạ ${e.type}`);
  }
  const r = x.reading;
  if (!r) { errs.push(`${u.id}: thiếu reading`); continue; }
  for (const k of ['title', 'titleVi', 'text', 'vi', 'questions']) if (!r[k]) errs.push(`${u.id}: reading thiếu ${k}`);
  if (r.text && r.vi && r.text.length !== r.vi.length) errs.push(`${u.id}: reading text/vi khác số đoạn`);
  if (isZh && (!r.py || r.py.length !== r.text?.length)) errs.push(`${u.id}: reading py thiếu/khác số đoạn`);
  if (r.questions?.length !== 4) errs.push(`${u.id}: reading cần 4 câu hỏi`);
  for (const q of r.questions || []) if (!(q.answer >= 0 && q.answer < q.options.length)) errs.push(`${u.id}: câu hỏi đọc sai answer: ${q.q}`);
  const len = isZh ? (r.text || []).join('').replace(/[，。？！、：；“”\s]/g, '').length : (r.text || []).join(' ').split(/\s+/).length;
  console.log(`${u.id}: reading ${len} ${isZh ? 'chữ' : 'từ'}`);
}
console.log(errs.length ? 'LỖI:\n' + errs.join('\n') : 'OK');
