import { shuffle, norm, noAccent, tidy } from './utils.js';

const KIND = { mc: 'Chọn đáp án đúng', fill: 'Điền vào chỗ trống', order: 'Sắp xếp thành câu' };

// 4 câu từ vựng sinh tự động + tối đa 12 bài tập lấy ngẫu nhiên, trộn lẫn
export function buildQuiz(u, zh) {
  const vs = shuffle(u.vocab);
  const label = x => zh ? `${x.w} · ${x.ipa}` : x.w;
  const four = v => shuffle([v, ...shuffle(vs.filter(x => x !== v && x.vi !== v.vi && x.w !== v.w)).slice(0, 3)]);
  const vq = [];
  vs.slice(0, 2).forEach(v => {
    const o = four(v);
    vq.push({ type: 'mc', kind: 'Từ này nghĩa là gì?', q: v.w, sub: zh ? v.ipa : '', say: v.w, options: o.map(x => x.vi), answer: o.indexOf(v) });
  });
  { const v = vs[2], o = four(v); vq.push({ type: 'mc', kind: 'Chọn từ đúng', q: v.vi, options: o.map(label), answer: o.indexOf(v) }); }
  { const v = vs[3], o = four(v); vq.push({ type: 'listen', kind: 'Nghe và chọn từ bạn nghe được', say: v.w, options: o.map(label), answer: o.indexOf(v) }); }
  const ex = shuffle(u.exercises).slice(0, 12).map(e => ({ ...e, kind: KIND[e.type] }));
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

export function checkFill(q, value) {
  const got = norm(value), acc = q.answer.map(norm);
  if (acc.includes(got)) return { ok: true };
  if (acc.map(noAccent).includes(noAccent(got))) return { ok: true, note: 'Đúng rồi, nhưng nhớ viết đủ dấu nhé.' };
  return { ok: false };
}

export const checkOrder = (q, picked) => norm(picked.map(k => q.words[k]).join(' ')) === norm(q.answer);
