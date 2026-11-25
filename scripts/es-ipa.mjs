// Sinh gợi ý đọc (trường ipa) cho mọi từ vựng tiếng Tây Ban Nha từ chính tả: node scripts/es-ipa.mjs [--check]
// Quy ước (giải thích cho người học ở bài es-a1-1):
//   âm tiết VIẾT HOA = trọng âm (không dùng dấu thanh tiếng Việt vì tiếng TBN không có thanh điệu)
//   θ = c (trước e, i) và z: đầu lưỡi giữa hai hàm răng, thổi hơi;  rr = r rung (rr và r đầu từ / sau n, l, s)
//   kh = j, g (trước e, i);  gi = ll, y;  s cuối âm tiết giữ là s (không đổi thành t), l cuối giữ là l (không đổi thành n)
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const STRONG = 'aeoáéóíú', VOW = 'aeiouáéíóúü';
const CLUSTER = /^(?:[pbcfgdtk][lr]|ch)$/;
const VI = { a: 'a', e: 'ê', i: 'i', o: 'ô', u: 'u' };
const plain = c => c.normalize('NFD')[0];

// Tách chữ thành đơn vị âm: phụ âm (kể cả ch, ll, rr, qu, gu, x→ks) và nguyên âm
function units(word) {
  const w = word.toLowerCase(), out = [];
  for (let i = 0; i < w.length; i++) {
    const c = w[i], n = w[i + 1] || '', n2 = w[i + 2] || '';
    if (c === 'c' && n === 'h') { out.push({ c: 'ch' }); i++; }
    else if (c === 'l' && n === 'l') { out.push({ c: 'll' }); i++; }
    else if (c === 'r' && n === 'r') { out.push({ c: 'rr' }); i++; }
    else if (c === 'q' && n === 'u') { out.push({ c: 'k' }); i++; }
    else if (c === 'g' && n === 'u' && /[eéií]/.test(n2)) { out.push({ c: 'gh' }); i++; }
    else if (c === 'h') continue;
    else if (c === 'x') out.push(...(i ? [{ c: 'k' }, { c: 's' }] : [{ c: 's' }]));
    else if (c === 'y' && !VOW.includes(n)) out.push({ v: 'i', y: true });
    else if (VOW.includes(c)) out.push({ v: c === 'ü' ? 'u' : c });
    else if (/[a-zñ]/.test(c)) out.push({ c });
  }
  return out;
}

function syllables(word) {
  const u = units(word), syl = [];
  // gom nguyên âm liền nhau thành nhân; hai nguyên âm mạnh → tách
  const groups = [];
  for (let i = 0; i < u.length;) {
    if (!u[i].v) { groups.push({ c: u[i].c }); i++; continue; }
    let nuc = [u[i]]; i++;
    while (i < u.length && u[i].v) {
      const prev = nuc[nuc.length - 1].v, cur = u[i].v;
      const strong = x => STRONG.includes(x);
      if (strong(prev) && strong(cur)) break;
      if (/[íú]/.test(cur) && nuc.some(x => strong(x.v))) break;
      if (/[íú]/.test(prev) && strong(cur)) break;
      nuc.push(u[i]); i++;
    }
    groups.push({ v: nuc });
  }
  let cur = { on: [], nuc: null, co: [] };
  const vIdx = groups.map((g, k) => g.v ? k : -1).filter(k => k >= 0);
  if (!vIdx.length) return [{ on: groups.map(g => g.c), nuc: [], co: [] }];
  let k = 0;
  for (let j = 0; j < vIdx.length; j++) {
    const vi = vIdx[j], next = vIdx[j + 1];
    const s = { on: [], nuc: groups[vi].v, co: [] };
    if (j === 0) s.on = groups.slice(0, vi).map(g => g.c);
    else s.on = syl.pendingOnset;
    if (next === undefined) s.co = groups.slice(vi + 1).map(g => g.c);
    else {
      const cons = groups.slice(vi + 1, next).map(g => g.c);
      let split = cons.length <= 1 ? 0 : cons.length === 2 ? (CLUSTER.test(cons.join('')) && cons.join('') !== 'tl' && cons.join('') !== 'dl' ? 0 : 1)
        : CLUSTER.test(cons.slice(-2).join('')) ? cons.length - 2 : cons.length - 1;
      s.co = cons.slice(0, split); syl.pendingOnset = cons.slice(split);
    }
    syl.push(s);
  }
  return syl;
}

function stressIndex(word, syl) {
  const acc = syl.findIndex(s => s.nuc.some(x => /[áéíóú]/.test(x.v)));
  if (acc >= 0) return acc;
  if (syl.length < 2) return 0;
  const last = syl[syl.length - 1];
  const endsVowel = !last.co.length && !last.nuc[last.nuc.length - 1].y;
  return endsVowel || (last.co.length === 1 && /^[ns]$/.test(last.co[0])) ? syl.length - 2 : syl.length - 1;
}

const ONSET = { b: 'b', v: 'b', ch: 'ch', d: 'đ', f: 'ph', j: 'kh', ll: 'gi', y: 'gi', l: 'l', m: 'm', n: 'n', ñ: 'nh', p: 'p', s: 'x', t: 't', z: 'θ', w: 'u', gh: 'gh', rr: 'rr', r: 'r' };
const CODA = { d: 'đ', z: 'θ', j: 'kh', k: 'c', c: 'c', f: 'ph', v: 'b', ll: 'l', y: 'i' };

// Trả về các mảnh [chuỗi, có phải phần mang trọng âm]
function render(s, first, prevCoda) {
  const vs = s.nuc.map(x => plain(x.v));
  const front = vs.length > 0 && /[cg]/.test(s.on[s.on.length - 1] || '') && vs[0] !== 'u' ? vs[0] : '';
  const on = s.on.map((c, k) => {
    const last = k === s.on.length - 1;
    if (c === 'c') return last && /[ei]/.test(front) ? 'θ' : 'c';
    if (c === 'k') return last && /[ei]/.test(vs[0]) ? 'k' : 'c';
    if (c === 'g') return last && /[ei]/.test(front) ? 'kh' : 'g';
    if (c === 'r') return (first && k === 0) || (k === 0 && /^(n|l|s)$/.test(prevCoda)) ? 'rr' : 'r';
    return ONSET[c] ?? c;
  }).join('');
  // nhân: i + nguyên âm mạnh → tách "i-…"; u + nguyên âm → oa / uê / uô / ui (sau c → qu…)
  let pre = '', main = vs.slice();
  if (vs.length > 1 && vs[0] === 'i') { pre = 'i'; main = vs.slice(1); }
  let nuc;
  if (main.length > 1 && main[0] === 'u') {
    const rest = main.slice(1).map(v => VI[v]).join('').replace(/^êi$/, 'êi');
    nuc = (rest[0] === 'a' ? 'o' : 'u') + rest;
  } else nuc = main.map(v => VI[v]).join('');
  if (nuc === 'ii') nuc = 'i';
  const co = s.co.map(c => CODA[c] ?? ONSET[c] ?? c).join('').replace(/^x$/, 's').replace(/x$/, 's');
  let onStr = on;
  if (!pre && /c$/.test(onStr) && /^u[aêôi]/.test(nuc) && nuc.length > 1) { onStr = onStr.slice(0, -1) + 'q'; nuc = nuc.replace(/^o/, 'u'); }
  if (/gi$/.test(onStr) && (pre === 'i' || /^i/.test(nuc))) { if (pre) pre = ''; else if (nuc.length > 1 || co) nuc = nuc.slice(1) || nuc; }
  if (/gi$/.test(onStr) && nuc === 'i') nuc = '';
  if (pre) return [[onStr + pre, false], [nuc + co, true]];
  return [[onStr + nuc + co, true]];
}

export function hintWord(word) {
  const syl = syllables(word);
  if (!syl.length || !syl[0].nuc.length) return word.toLowerCase();
  const st = syl.length > 1 ? stressIndex(word, syl) : -1;
  const parts = [];
  syl.forEach((s, k) => {
    const pieces = render(s, k === 0, k ? syl[k - 1].co.join('') : '');
    for (const [txt, main] of pieces) parts.push(k === st && main ? txt.toUpperCase().replace(/Θ/g, 'θ') : txt);
  });
  return parts.join('-');
}

export function hint(text) {
  return text.replace(/[¿?¡!.]/g, '').replace(/[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+/g, w => hintWord(w)).replace(/\s+/g, ' ').trim();
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const root = resolve(dirname(fileURLToPath(import.meta.url)), '../src/data') + '/';
  const files = ['es-a.js', 'es-b.js', ...readdirSync(root + 'ext').filter(f => f.startsWith('es-')).map(f => 'ext/' + f),
    ...readdirSync(root + 'more').filter(f => f.startsWith('es-')).map(f => 'more/' + f)];
  const RE = /(\bw: )(['"])((?:\\.|(?!\2).)*)\2(, ipa: )(['"])((?:\\.|(?!\5).)*)\5/g;
  let changed = 0, total = 0;
  for (const f of files) {
    const src = readFileSync(root + f, 'utf8');
    const out = src.replace(RE, (m, a, q, w, b, q2, old) => {
      total++;
      const h = hint(w.replace(/\\(.)/g, '$1'));
      if (h !== old) changed++;
      return `${a}${q}${w}${q}${b}'${h}'`;
    });
    if (out !== src && !process.argv.includes('--check')) writeFileSync(root + f, out);
  }
  console.log(`${total} từ, ${changed} gợi ý ${process.argv.includes('--check') ? 'cần cập nhật' : 'đã cập nhật'}`);
}
