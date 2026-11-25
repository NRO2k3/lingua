// Soát lỗi dữ liệu máy móc trên toàn bộ khoá học (gốc + bổ sung): node scripts/check-data.mjs
import { pathToFileURL, fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { readdirSync } from 'node:fs';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '../src/data') + '/';
globalThis.window = globalThis;
await import(pathToFileURL(root + 'registry.js'));
for (const f of ['en-a', 'en-b', 'es-a', 'es-b', 'zh-a', 'zh-b']) await import(pathToFileURL(root + f + '.js'));
const MORE_IDS = new Set();
for (const f of readdirSync(root + 'more')) for (const { after, unit } of (await import(pathToFileURL(root + 'more/' + f))).default) {
  let placed = false;
  for (const c of Object.values(COURSES)) for (const l of c.levels) { const k = l.units.findIndex(u => u.id === after); if (k >= 0) { l.units.splice(k + 1, 0, unit); placed = true; } }
  if (!placed) console.log(`[LỖI] ${f}: không tìm thấy bài after="${after}" cho ${unit.id}`);
  MORE_IDS.add(unit.id);
}
const EXT = {};
for (const f of readdirSync(root + 'ext')) Object.assign(EXT, (await import(pathToFileURL(root + 'ext/' + f))).default);
const norm = s => String(s).toLowerCase().replace(/[’`]/g, "'").replace(/(?<!\d),|,(?!\d)/g, ' ').replace(/[.!?¡¿;:"，。？！、：；“”()（）]/g, '').replace(/\s+/g, ' ').trim();
const issues = [];
const add = (sev, uid, msg) => issues.push(`[${sev}] ${uid}: ${msg}`);
const posCount = { mc: [0, 0, 0, 0, 0], read: [0, 0, 0, 0, 0] };
for (const [lang, c] of Object.entries(COURSES)) for (const l of c.levels) for (const u0 of l.units) {
  const x = EXT[u0.id] || {};
  const vocab = [...u0.vocab, ...(x.vocab || [])], ex = [...u0.exercises, ...(x.exercises || [])];
  // Từ vựng: trùng từ / trùng nghĩa trong cùng bài (gây câu hỏi từ vựng có 2 đáp án)
  const byVi = new Map(), byW = new Map();
  for (const v of vocab) {
    for (const k of ['w', 'vi']) if (!String(v[k] || '').trim()) add('LỖI', u0.id, `vocab thiếu ${k}: ${JSON.stringify(v).slice(0, 80)}`);
    const kv = norm(v.vi), kw = norm(v.w);
    if (byVi.has(kv)) add('LỖI', u0.id, `2 từ cùng nghĩa "${v.vi}": ${byVi.get(kv)} / ${v.w} → câu hỏi từ vựng có thể có 2 đáp án`);
    if (byW.has(kw)) add('LỖI', u0.id, `từ lặp trong bài: ${v.w}`);
    byVi.set(kv, v.w); byW.set(kw, 1);
  }
  // Nghĩa gần trùng (một nghĩa là tiền tố nghĩa kia) – nên xem
  const vis = vocab.map(v => [v.w, norm(v.vi).split(';')[0].trim()]);
  for (let i = 0; i < vis.length; i++) for (let j = i + 1; j < vis.length; j++)
    if (vis[i][1] && vis[i][1] === vis[j][1]) add('NÊN XEM', u0.id, `nghĩa chính giống nhau: ${vis[i][0]} / ${vis[j][0]} (“${vis[i][1]}”)`);
  // Bài tập
  for (const e of ex) {
    if (e.type === 'mc') {
      const o = e.options.map(norm);
      if (new Set(o).size !== o.length) add('LỖI', u0.id, `mc phương án trùng sau chuẩn hoá: ${e.q}`);
      if (e.options.length < 3) add('NÊN XEM', u0.id, `mc chỉ ${e.options.length} phương án: ${e.q}`);
      if (e.options.length <= 4) posCount.mc[e.answer]++;
    }
    if (e.type === 'fill') {
      if (!e.answer.every(a => String(a).trim())) add('LỖI', u0.id, `fill có đáp án rỗng: ${e.q}`);
      if (lang === 'zh' && !e.answer.some(a => /[a-z]/i.test(a))) add('LỖI', u0.id, `fill tiếng Trung thiếu pinyin: ${e.q}`);
    }
    if (e.type === 'order') {
      for (const a of e.alt || []) if ([...e.words].sort().join(' ') !== a.split(' ').sort().join(' ')) add('LỖI', u0.id, `order alt không dùng đúng bộ từ: ${a}`);
      const toks = e.words.map(norm);
      if (new Set(toks).size !== toks.length) add('NÊN XEM', u0.id, `order có từ lặp (${e.answer}) – vẫn chấm đúng nhưng nên kiểm tra`);
      if (e.words.length < 3) add('NÊN XEM', u0.id, `order quá ngắn: ${e.answer}`);
    }
  }
  // Hội thoại: nhập vai cần ít nhất 2 nhân vật
  const speakers = new Set(u0.dialogue.map(d => d.s));
  if (speakers.size < 2) add('LỖI', u0.id, `hội thoại chỉ có ${speakers.size} nhân vật – nhập vai không dùng được`);
  if (speakers.size > 2) add('NÊN XEM', u0.id, `hội thoại có ${speakers.size} nhân vật – nhập vai chia trái/phải xen kẽ`);
  for (const d of u0.dialogue) if (lang === 'zh' && !d.py) add('LỖI', u0.id, `hội thoại thiếu pinyin: ${d.t}`);
  // Bài mới: đủ nội dung như bài đã bổ sung
  if (MORE_IDS.has(u0.id)) {
    if (vocab.length < 15) add('LỖI', u0.id, `bài mới chỉ có ${vocab.length} từ (cần 15–20)`);
    if (ex.length < 12) add('LỖI', u0.id, `bài mới chỉ có ${ex.length} bài tập (cần 12–16)`);
    if (!u0.reading) add('LỖI', u0.id, 'bài mới thiếu reading');
    for (const k of ['title', 'goal', 'grammar', 'dialogue']) if (!u0[k]) add('LỖI', u0.id, `bài mới thiếu ${k}`);
  }
  // Đọc hiểu
  const r = x.reading || u0.reading;
  if (r) {
    for (const q of r.questions) { posCount.read[q.answer]++; if (new Set(q.options.map(norm)).size !== q.options.length) add('LỖI', u0.id, `câu hỏi đọc trùng phương án: ${q.q}`); }
    if (new Set(r.questions.map(q => q.answer)).size === 1) add('NÊN XEM', u0.id, `4 câu đọc hiểu cùng đáp án vị trí ${r.questions[0].answer}`);
  }
}
console.log(issues.length ? issues.join('\n') : 'Không phát hiện lỗi máy móc');
console.log('\nPhân bố vị trí đáp án đúng (A/B/C/D) — trắc nghiệm:', posCount.mc.slice(0, 4).join(' / '), '| đọc hiểu:', posCount.read.slice(0, 4).join(' / '));
