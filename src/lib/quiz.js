import { shuffle, norm, noAccent, tidy } from './utils.js';
import { hasAnyVoice, ttsAvailable } from './speech.js';

const KIND = { mc: 'Chọn đáp án đúng', fill: 'Điền vào chỗ trống', order: 'Sắp xếp thành câu' };

// Xáo thứ tự phương án (dữ liệu gốc hay để đáp án đúng ở A/B) và cập nhật lại chỉ số đáp án
export function shuffleOptions(q) {
  const order = shuffle(q.options.map((_, i) => i));
  return { ...q, options: order.map(i => q.options[i]), answer: order.indexOf(q.answer) };
}

// Nghĩa chính: phần trước dấu ";" — hai từ cùng nghĩa chính không được làm phương án của nhau
const mainSense = v => norm(String(v.vi).split(';')[0].replace(/\(.*?\)/g, ''));

// 4 câu từ vựng sinh tự động + tối đa 12 bài tập lấy ngẫu nhiên, trộn lẫn.
// tag (vd 'es-ES'): nếu trình duyệt không đọc được ngôn ngữ này thì câu nghe đổi thành câu chọn từ
export function buildQuiz(u, zh, tag) {
  const canListen = tag ? ttsAvailable(tag) : hasAnyVoice();
  const vs = shuffle(u.vocab);
  const label = x => zh ? `${x.w} · ${x.ipa}` : x.w;
  const four = v => shuffle([v, ...shuffle(vs.filter(x => x !== v && x.w !== v.w && mainSense(x) !== mainSense(v))).slice(0, 3)]);
  const vq = [];
  vs.slice(0, 2).forEach(v => {
    const o = four(v);
    vq.push({ type: 'mc', kind: 'Từ này nghĩa là gì?', q: v.w, sub: zh ? v.ipa : '', say: v.w, options: o.map(x => x.vi), answer: o.indexOf(v) });
  });
  { const v = vs[2], o = four(v); vq.push({ type: 'mc', kind: 'Chọn từ đúng', q: v.vi, options: o.map(label), answer: o.indexOf(v) }); }
  { const v = vs[3], o = four(v); vq.push(canListen
    ? { type: 'listen', kind: 'Nghe và chọn từ bạn nghe được', say: v.w, vi: v.vi, options: o.map(label), answer: o.indexOf(v) }
    : { type: 'mc', kind: 'Chọn từ đúng', q: v.vi, options: o.map(label), answer: o.indexOf(v) }); }
  const ex = shuffle(u.exercises).slice(0, 12).map(e => ({ ...(e.type === 'mc' ? shuffleOptions(e) : e), kind: KIND[e.type] }));
  return shuffle([...vq, ...ex]).map(q => q.type === 'order' ? { ...q, words: shuffle(q.words) } : q);
}

export function rightText(q, zh) {
  if (q.type === 'fill') {
    const py = zh && q.answer.find(a => /[a-z]/i.test(a));
    return q.answer[0] + (py ? ' · ' + py : '');
  }
  if (q.type === 'order') return tidy(q.answer);
  return q.options[q.answer];
}

// Pinyin gõ tay: bỏ dấu cách/nháy, chấp nhận v hoặc u thay cho ü ("nver" = nǚ'ér)
const pinyinKey = s => noAccent(norm(s)).replace(/[\s']/g, '').replace(/[vü]/g, 'u');

export function checkFill(q, value, zh = false) {
  const got = norm(value), acc = q.answer.map(norm);
  if (acc.includes(got)) return { ok: true };
  if (zh && /[a-z]/i.test(got) && q.answer.some(a => /[a-z]/i.test(a) && pinyinKey(a) === pinyinKey(got))) return { ok: true };
  if (acc.map(noAccent).includes(noAccent(got))) return { ok: true, note: 'Đúng rồi, nhưng nhớ viết đủ dấu nhé.' };
  return { ok: false };
}

// Câu sắp xếp: chấp nhận câu chuẩn (answer) và các trật tự khác cũng đúng (alt)
export const checkOrder = (q, picked) => {
  const got = norm(picked.map(k => q.words[k]).join(' '));
  return [q.answer, ...(q.alt || [])].some(a => norm(a) === got);
};
