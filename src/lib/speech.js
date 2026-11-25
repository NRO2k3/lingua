import { noAccent, splitUnits } from './utils.js';

// ---------- Đọc to (máy nói) ----------
const hasTTS = () => typeof window !== 'undefined' && 'speechSynthesis' in window;

// Báo cho giao diện khi trình duyệt không đọc được (không hỗ trợ / không có giọng cho ngôn ngữ)
export const ttsEvents = typeof EventTarget !== 'undefined' ? new EventTarget() : null;
const problem = (kind, tag) => ttsEvents?.dispatchEvent(new CustomEvent('problem', { detail: { kind, tag } }));

// Danh sách giọng nạp không đồng bộ; quá 2,5 giây vẫn rỗng nghĩa là trình duyệt không có giọng đọc
let voicesKnown = false;
if (hasTTS()) {
  const mark = () => { if (speechSynthesis.getVoices().length) voicesKnown = true; };
  mark();
  speechSynthesis.addEventListener?.('voiceschanged', mark);
  setTimeout(() => { voicesKnown = true; }, 2500);
}

// Giọng chất lượng cao (trực tuyến/neural) đọc tự nhiên hơn espeak
const quality = v => (/natural|neural|online/i.test(v.name) ? 3 : 0) + (/google|microsoft|apple|siri/i.test(v.name) ? 2 : 0)
  - (/espeak/i.test(v.name + v.voiceURI) ? 2 : 0) + (v.localService ? 0 : 1);
function pickVoice(tag) {
  const t = tag.toLowerCase(), base = t.slice(0, 2);
  const same = v => v.lang.toLowerCase().replace('_', '-');
  const all = speechSynthesis.getVoices();
  const exact = all.filter(v => same(v) === t);
  const close = exact.length ? exact : all.filter(v => same(v).startsWith(base) || (base === 'zh' && same(v).startsWith('cmn')));
  // Ưu tiên đúng vùng (es-ES), rồi giọng chung không ghi vùng ('es'), rồi chất lượng; tránh giọng Mỹ Latinh cho khoá chuẩn Tây Ban Nha
  const region = v => (same(v) === t ? 4 : same(v) === base ? 2 : 0) + (base === 'es' && /latin|mexic|america/i.test(v.name) ? -1 : 0) + (base === 'zh' && /latin|english|pinyin/i.test(v.name) ? -1 : 0);
  return close.sort((a, b) => (region(b) + quality(b)) - (region(a) + quality(a)))[0];
}
export function ttsAvailable(tag) {
  if (!hasTTS()) return false;
  return !voicesKnown || !!pickVoice(tag);
}

let current = null; // giữ tham chiếu: Chrome có thể bỏ dở câu nói nếu đối tượng bị dọn bộ nhớ
function utter(text, tag, { pitch = 1, rate = 0.9 } = {}) {
  const u = new SpeechSynthesisUtterance(text);
  u.lang = tag; u.rate = rate; u.pitch = pitch;
  const v = pickVoice(tag); if (v) u.voice = v;
  return u;
}
function play(utts) {
  const busy = speechSynthesis.speaking || speechSynthesis.pending;
  speechSynthesis.cancel();
  const go = () => { speechSynthesis.resume(); utts.forEach(u => { current = u; speechSynthesis.speak(u); }); };
  // Chrome bỏ qua lệnh đọc gọi ngay sau cancel(): đợi một nhịp
  busy ? setTimeout(go, 80) : go();
}
export function speak(text, tag, { rate = 0.9, onend } = {}) {
  if (!hasTTS()) { problem('unsupported', tag); return onend && onend(); }
  if (voicesKnown && !pickVoice(tag)) { problem(speechSynthesis.getVoices().length ? 'nolang' : 'novoice', tag); return onend && onend(); }
  const u = utter(text, tag, { rate });
  if (onend) u.onend = u.onerror = onend;
  play([u]);
}
export function speakAll(lines, tag) {
  if (!hasTTS()) return problem('unsupported', tag);
  if (voicesKnown && !pickVoice(tag)) return problem(speechSynthesis.getVoices().length ? 'nolang' : 'novoice', tag);
  const who = [...new Set(lines.map(l => l.s))];
  play(lines.map(l => utter(l.t, tag, { pitch: who.indexOf(l.s) % 2 ? 0.8 : 1.1 })));
}
export const stopSpeaking = () => hasTTS() && speechSynthesis.cancel();

// ---------- Nghe người học nói ----------
export const getSR = () => typeof window !== 'undefined' && (window.SpeechRecognition || window.webkitSpeechRecognition);
let rec = null;
export function stopRec() {
  if (!rec) return;
  rec.onresult = rec.onend = rec.onerror = null;
  try { rec.abort(); } catch { /* đã dừng */ }
  rec = null;
}
export const finishRec = () => rec && rec.stop();

const MIC_ERRORS = {
  'not-allowed': 'Bạn cần cho phép trình duyệt dùng micro.',
  'no-speech': 'Không nghe thấy gì, bạn thử nói lại nhé.',
  'network': 'Không kết nối được dịch vụ nhận giọng nói. Hãy mở bằng Google Chrome và kiểm tra mạng.',
  'service-not-allowed': 'Trình duyệt này chưa hỗ trợ nhận giọng nói. Hãy mở bằng Google Chrome.',
  'audio-capture': 'Không tìm thấy micro.'
};

// Nghe một lượt; onDone nhận các phương án nhận dạng (rỗng nếu không nghe được)
export function listen(tag, { onInterim, onDone, onError }) {
  const SR = getSR();
  stopRec(); stopSpeaking();
  rec = new SR();
  rec.lang = tag; rec.interimResults = true; rec.maxAlternatives = 3; rec.continuous = false;
  let finals = [];
  rec.onresult = e => {
    const rs = [...e.results];
    onInterim && onInterim(rs.map(r => r[0].transcript).join(' '));
    if (rs.every(r => r.isFinal)) finals = [0, 1, 2].map(k => rs.map(r => r[Math.min(k, r.length - 1)].transcript).join(' ').trim());
  };
  rec.onerror = e => onError && e.error !== 'aborted' && onError(MIC_ERRORS[e.error] || 'Micro gặp lỗi, bạn thử lại nhé.');
  rec.onend = () => { rec = null; onDone(finals); };
  rec.start();
}

// ---------- Chấm điểm phát âm ----------
const CONTRACT = {
  "i'm": 'i am', "you're": 'you are', "he's": 'he is', "she's": 'she is', "it's": 'it is', "we're": 'we are',
  "they're": 'they are', "that's": 'that is', "there's": 'there is', "what's": 'what is', "where's": 'where is',
  "who's": 'who is', "how's": 'how is', "let's": 'let us', "i'll": 'i will', "you'll": 'you will', "he'll": 'he will',
  "she'll": 'she will', "we'll": 'we will', "they'll": 'they will', "it'll": 'it will', "i've": 'i have',
  "you've": 'you have', "we've": 'we have', "they've": 'they have', "i'd": 'i would', "you'd": 'you would',
  "he'd": 'he would', "she'd": 'she would', "we'd": 'we would', "they'd": 'they would', "don't": 'do not',
  "doesn't": 'does not', "didn't": 'did not', "isn't": 'is not', "aren't": 'are not', "wasn't": 'was not',
  "weren't": 'were not', "haven't": 'have not', "hasn't": 'has not', "hadn't": 'had not', "won't": 'will not',
  "wouldn't": 'would not', "can't": 'can not', 'cannot': 'can not', "couldn't": 'could not',
  "shouldn't": 'should not', "mustn't": 'must not', 'gonna': 'going to', 'wanna': 'want to'
};
const NUMS = { thirty: 30, forty: 40, fifty: 50, sixty: 60, seventy: 70, eighty: 80, ninety: 90, hundred: 100,
  treinta: 30, cuarenta: 40, cincuenta: 50, sesenta: 60, setenta: 70, ochenta: 80, noventa: 90, cien: 100, un: 1, una: 1 };
['zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty',
  'cero uno dos tres cuatro cinco seis siete ocho nueve diez once doce trece catorce quince dieciseis diecisiete dieciocho diecinueve veinte']
  .forEach(s => s.split(' ').forEach((w, i) => { NUMS[w] = i; }));
'uno dos tres cuatro cinco seis siete ocho nueve'.split(' ').forEach((w, i) => { NUMS['veinti' + w] = 21 + i; });
NUMS.veintiun = 21;
[...'零一二三四五六七八九十'].forEach((c, i) => { NUMS[c] = i; });
NUMS['两'] = 2;
Object.assign(NUMS, { thousand: 1000, mil: 1000, ciento: 100 });
Object.assign(NUMS, { doscientos: 200, trescientos: 300, cuatrocientos: 400, quinientos: 500, seiscientos: 600,
  setecientos: 700, ochocientos: 800, novecientos: 900 });
const NUM_GLUE = new Set(['and', 'y']); // "one hundred and five", "treinta y dos"


// 22 → "20 2" để khớp cả "twenty-two" lẫn "22"
const splitNum = t => /^\d+$/.test(t) && +t > 20 && +t < 100 && +t % 10 ? [String(+t - +t % 10), String(+t % 10)] : [t];

// 二十一 → 21, 一百 → 100, 两千 → 2000, 三万 → 30000
function zhToNum(s) {
  const d = { 零: 0, 一: 1, 二: 2, 两: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9 };
  const unit = { 十: 10, 百: 100, 千: 1000 };
  let total = 0, section = 0, cur = 0;
  for (const c of s) {
    if (unit[c]) { section += (cur || 1) * unit[c]; cur = 0; }
    else if (c === '万') { total += ((section + cur) || 1) * 10000; section = 0; cur = 0; }
    else cur = d[c];
  }
  return total + section + cur;
}

// Gộp các token số liền nhau thành một số: "one hundred" → 100, "ciento veinte" → 120, "twenty two" → 22
function mergeNums(list, get = x => x, make = (n, first) => String(n)) {
  const out = [];
  for (let i = 0; i < list.length;) {
    if (!/^\d+$/.test(get(list[i]))) { out.push(list[i]); i++; continue; }
    const first = list[i];
    let total = 0, cur = 0;
    while (i < list.length) {
      const t = get(list[i]);
      if (NUM_GLUE.has(t) && i + 1 < list.length && /^\d+$/.test(get(list[i + 1])) && i > 0) { i++; continue; }
      if (!/^\d+$/.test(t)) break;
      const n = +t;
      if (n === 100 && cur < 100) cur = (cur || 1) * 100;
      else if (n === 1000) { total += (cur || 1) * 1000; cur = 0; }
      else cur += n;
      i++;
    }
    out.push(make(total + cur, first));
  }
  return out;
}

// Một từ viết → các token so sánh (bỏ dấu câu/dấu thanh, tách từ viết tắt, số → chữ số)
function spTokens(word) {
  word = word.replace(/[零一二三四五六七八九十两百千万]{2,}|[十百千万]/g, m => ` ${zhToNum(m)} `);
  const w = noAccent(word.toLowerCase().replace(/[’`]/g, "'")).replace(/-/g, ' ')
    .replace(/[^a-z0-9'㐀-鿿 ]/g, '').replace(/([㐀-鿿])/g, ' $1 ').trim();
  return w.split(/\s+/).filter(Boolean)
    .flatMap(t => (Object.hasOwn(CONTRACT, t) ? CONTRACT[t] : t).split(' '))
    .map(t => Object.hasOwn(NUMS, t) ? String(NUMS[t]) : t.replace(/'/g, ''))
    .filter(Boolean);
}

// So khớp câu mẫu với câu nghe được (dãy con chung dài nhất), đánh dấu từng từ của câu mẫu
export function compareSpeech(target, heard) {
  const words = splitUnits(target);
  const T0 = [];
  words.forEach((w, wi) => spTokens(w).forEach(t => T0.push({ t, wi })));
  const T = mergeNums(T0, x => x.t, (n, first) => ({ t: String(n), wi: first.wi }))
    .flatMap(x => splitNum(x.t).map(t => ({ t, wi: x.wi })));
  const H = mergeNums(heard.split(/\s+/).flatMap(spTokens)).flatMap(splitNum);
  const n = T.length, m = H.length;
  const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--)
    dp[i][j] = T[i].t === H[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  const hit = new Array(n).fill(false);
  for (let i = 0, j = 0; i < n && j < m;) {
    if (T[i].t === H[j]) { hit[i] = true; i++; j++; }
    else if (dp[i + 1][j] >= dp[i][j + 1]) i++;
    else j++;
  }
  return {
    score: n ? Math.round(hit.filter(Boolean).length / n * 100) : 0,
    ok: words.map((_, wi) => T.every((x, k) => x.wi !== wi || hit[k]))
  };
}

export const bestMatch = (target, cands) => cands.filter(Boolean)
  .map(h => ({ heard: h, ...compareSpeech(target, h) }))
  .sort((a, b) => b.score - a.score)[0];

export const SPEAK_PASS = 80;
