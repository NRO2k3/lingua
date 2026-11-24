(() => {
  'use strict';

  const $app = document.getElementById('app');
  const COURSES = window.COURSES;
  const STORE = 'lingua-progress-v1';
  const PASS = 0.7;                       // điểm tối thiểu để mở bài tiếp theo
  const SRS_DAYS = [1, 2, 4, 7, 15, 30];  // khoảng cách ôn theo hộp Leitner

  // ---------- Lưu tiến độ ----------
  const defaults = () => ({ units: {}, xp: 0, streak: { last: null, count: 0 }, srs: {}, free: {}, spoken: {}, theme: null });
  let P = load();
  function load() {
    try { return Object.assign(defaults(), JSON.parse(localStorage.getItem(STORE)) || {}); }
    catch { return defaults(); }
  }
  function save() { try { localStorage.setItem(STORE, JSON.stringify(P)); } catch { /* chế độ riêng tư */ } }

  // ---------- Tiện ích ----------
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const dayStr = (offset = 0) => { const d = new Date(); d.setDate(d.getDate() + offset); return d.toLocaleDateString('sv'); };
  const today = () => dayStr(0);
  const norm = s => String(s).toLowerCase().replace(/[’`]/g, "'").replace(/[.!?¡¿,;:"，。？！、：；“”]/g, '').replace(/\s+/g, ' ').trim();
  // Chữ Hán: tách từng chữ, bỏ khoảng trắng khi hiển thị
  const CJK_RE = /^[\u3400-\u9fff，。？！、：；“”]/;
  const splitUnits = s => String(s).match(/[零一二三四五六七八九十两百]{2,}|[\u3400-\u9fff]|[^\s\u3400-\u9fff]+/g) || [];
  const tidy = s => String(s).replace(/([\u3400-\u9fff，。？！、：；“”])\s+(?=[\u3400-\u9fff，。？！、：；“”])/g, '$1');
  const isZh = () => !!(curLang && COURSES[curLang].noSpace);
  const pyLine = (py, extra = '') => py ? `<div class="py ${extra}">${esc(py)}</div>` : '';
  const noAccent = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '');
  const pct = (a, b) => b ? Math.round(a / b * 100) : 0;

  function toast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg; t.classList.add('show');
    clearTimeout(toast.timer); toast.timer = setTimeout(() => t.classList.remove('show'), msg.length > 60 ? 5000 : 2200);
  }

  // ---------- Phát âm ----------
  let curLang = null;
  function pickVoice(tag) {
    const voices = speechSynthesis.getVoices();
    const t = tag.toLowerCase();
    return voices.find(v => v.lang.toLowerCase().replace('_', '-') === t)
      || voices.find(v => v.lang.toLowerCase().startsWith(t.slice(0, 2)));
  }
  function utter(text, tag, pitch = 1, rate = 0.9) {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = tag; u.rate = rate; u.pitch = pitch;
    const v = pickVoice(tag); if (v) u.voice = v;
    return u;
  }
  function speak(text, tag = curLang && COURSES[curLang].tts, rate = 0.9, onend = null) {
    if (!('speechSynthesis' in window)) { toast('Trình duyệt không hỗ trợ phát âm'); return onend && onend(); }
    speechSynthesis.cancel();
    const u = utter(text, tag, 1, rate);
    if (onend) u.onend = u.onerror = onend;
    speechSynthesis.speak(u);
  }
  function speakAll(lines, tag) {
    if (!('speechSynthesis' in window)) return toast('Trình duyệt không hỗ trợ phát âm');
    speechSynthesis.cancel();
    const who = [...new Set(lines.map(l => l.s))];
    lines.forEach(l => speechSynthesis.speak(utter(l.t, tag, who.indexOf(l.s) % 2 ? 0.8 : 1.1)));
  }
  if ('speechSynthesis' in window) speechSynthesis.getVoices();
  const sayBtn = text => `<button class="speak" data-say="${esc(text)}" title="Nghe phát âm">🔊</button>`;

  // ---------- Dữ liệu khoá học ----------
  function units(lang) {
    const out = [];
    COURSES[lang].levels.forEach(level => level.units.forEach(u => out.push({ ...u, level })));
    return out;
  }
  const isDone = id => !!(P.units[id] && P.units[id].done);
  function unlocked(lang, idx) {
    if (P.free[lang] || idx === 0) return true;
    return isDone(units(lang)[idx - 1].id);
  }
  function nextUnit(lang) { return units(lang).find(u => !isDone(u.id)); }
  function langProgress(lang) {
    const all = units(lang); const done = all.filter(u => isDone(u.id)).length;
    return { done, total: all.length, pct: pct(done, all.length) };
  }
  function srsDue(lang) {
    const t = today();
    return Object.entries(P.srs).filter(([k, v]) => k.startsWith(lang + '|') && v.due <= t);
  }
  const learnedCount = lang => Object.keys(P.srs).filter(k => !lang || k.startsWith(lang + '|')).length;
  function wordFromKey(key) {
    const [lang, uid, i] = key.split('|');
    const u = units(lang).find(x => x.id === uid);
    return u && u.vocab[+i];
  }

  function touchStreak() {
    const t = today(), s = P.streak;
    if (s.last === t) return;
    s.count = s.last === dayStr(-1) ? s.count + 1 : 1;
    s.last = t;
  }

  // ---------- Thanh trên cùng ----------
  function renderStats() {
    const alive = P.streak.last === today() || P.streak.last === dayStr(-1);
    const due = Object.values(P.srs).filter(v => v.due <= today()).length;
    document.getElementById('stats').innerHTML = `
      <span title="Chuỗi ngày học">🔥 ${alive ? P.streak.count : 0}</span>
      <span title="Điểm kinh nghiệm">⭐ ${P.xp}</span>
      <span title="Từ đã học · cần ôn hôm nay">🧠 ${learnedCount()}${due ? ` · ${due} ôn` : ''}</span>`;
  }

  // ---------- Trang chủ ----------
  function renderHome() {
    curLang = null;
    const cards = Object.values(COURSES).map(c => {
      const pr = langProgress(c.id), nx = nextUnit(c.id);
      const level = !pr.total ? '—' : nx ? nx.level.id : 'Hoàn thành';
      return `
        <a class="card lang-card" href="#/c/${c.id}" style="--lang:var(--${c.id})">
          <div class="flag">${c.flag}</div>
          <div><h2>${c.name}</h2><p class="muted">${esc(c.tagline)}</p></div>
          <div class="row"><span>Trình độ hiện tại: <b>${level}</b></span><span>${pr.done}/${pr.total} bài</span></div>
          <div class="bar"><i style="width:${pr.pct}%"></i></div>
          <div class="row"><span>${!pr.total ? 'Đang cập nhật bài học' : nx ? 'Tiếp theo: ' + esc(nx.title) : '🎉 Đã xong lộ trình'}</span><span>🧠 ${srsDue(c.id).length} cần ôn</span></div>
        </a>`;
    }).join('');

    $app.innerHTML = `
      <section class="hero">
        <h1>Học ngoại ngữ theo lộ trình rõ ràng</h1>
        <p>Đi từ con số 0 đến trung cấp: A1 → B2 theo khung CEFR (tiếng Trung: HSK 1 → 4). Mỗi bài gồm từ vựng có phát âm, ngữ pháp giải thích bằng tiếng Việt, hội thoại mẫu, luyện nói có chấm điểm và bài kiểm tra. Đạt ${PASS * 100}% để mở khoá bài tiếp theo.</p>
      </section>
      <div class="lang-grid">${cards}</div>
      <section class="how">
        <div class="card"><b>1 · Từ vựng</b><span class="muted">10 từ mỗi bài, nghe phát âm, luyện flashcard.</span></div>
        <div class="card"><b>2 · Ngữ pháp</b><span class="muted">Một chủ điểm, giải thích dễ hiểu, bảng & ví dụ.</span></div>
        <div class="card"><b>3 · Hội thoại</b><span class="muted">Đoạn hội thoại dùng lại từ và ngữ pháp vừa học.</span></div>
        <div class="card"><b>4 · Luyện nói</b><span class="muted">Nói vào micro, chấm từng từ; nhập vai hội thoại với máy.</span></div>
        <div class="card"><b>5 · Kiểm tra</b><span class="muted">12 câu: trắc nghiệm, điền từ, sắp xếp câu, nghe.</span></div>
        <div class="card"><b>6 · Ôn tập</b><span class="muted">Từ đã học quay lại đúng lúc sắp quên (lặp lại ngắt quãng).</span></div>
      </section>`;
  }

  // ---------- Lộ trình ----------
  function renderRoadmap(lang) {
    curLang = lang;
    const c = COURSES[lang], all = units(lang);
    if (!all.length) { $app.innerHTML = `<a class="back" href="#/">← Trang chủ</a><div class="card empty">Chưa có dữ liệu bài học.</div>`; return; }
    const pr = langProgress(lang), nx = nextUnit(lang), due = srsDue(lang).length;
    let idx = 0;
    const levels = c.levels.map(level => {
      const ids = level.units.map(u => u.id);
      const done = ids.filter(isDone).length;
      const state = done === ids.length ? 'done' : (nx && ids.includes(nx.id) ? 'active' : '');
      const cards = level.units.map(u => {
        const i = idx++, open = unlocked(lang, i), d = isDone(u.id), best = P.units[u.id]?.best;
        const cls = d ? 'done' : !open ? 'locked' : nx && nx.id === u.id ? 'next' : '';
        const sub = d ? `✓ Hoàn thành · ${best}%` : !open ? '🔒 Hoàn thành bài trước để mở' : best != null ? `Tốt nhất ${best}% · chưa đạt` : 'Chưa học';
        return `<a class="unit ${cls}" href="#/c/${lang}/u/${u.id}">
            <span class="ico">${u.icon || '📘'}</span>
            <span><span class="u-title">${i + 1}. ${esc(u.title)}</span><br><span class="u-sub">${sub}</span></span>
          </a>`;
      }).join('');
      return `<section class="level ${state}">
          <span class="level-dot"></span>
          <div class="level-head"><span class="code">${level.id}</span><h2>${esc(level.title)}</h2></div>
          <p class="muted">${esc(level.desc)}</p>
          <div class="level-meta"><div class="bar"><i style="width:${pct(done, ids.length)}%"></i></div><span class="pill">${done}/${ids.length} bài</span></div>
          <div class="units">${cards}</div>
        </section>`;
    }).join('');

    $app.style.setProperty('--lang', `var(--${lang})`);
    $app.innerHTML = `
      <a class="back" href="#/">← Trang chủ</a>
      <div class="road-head">
        <div>
          <h1>${c.flag} Lộ trình ${c.name}</h1>
          <p class="muted">${pr.done}/${pr.total} bài · ${pr.pct}% lộ trình · ${learnedCount(lang)} từ đã học</p>
        </div>
        <div class="road-actions">
          ${nx ? `<a class="btn" href="#/c/${lang}/u/${nx.id}">▶ Học tiếp: ${esc(nx.title)}</a>` : ''}
          <a class="btn ghost" href="#/c/${lang}/review">🧠 Ôn tập${due ? ` (${due})` : ''}</a>
          <label class="toggle"><input type="checkbox" id="freeMode" ${P.free[lang] ? 'checked' : ''}> Học tự do (mở khoá tất cả)</label>
        </div>
      </div>
      ${levels}`;
    document.getElementById('freeMode').onchange = e => { P.free[lang] = e.target.checked; save(); renderRoadmap(lang); };
  }

  // ---------- Bài học ----------
  let L = null; // trạng thái bài đang học
  const STEPS = [['Từ vựng', '10 từ'], ['Ngữ pháp', 'chủ điểm'], ['Hội thoại', 'nghe & đọc'], ['Luyện nói', 'nói & nhập vai'], ['Kiểm tra', '12 câu']];

  function renderLesson(lang, uid) {
    curLang = lang;
    const all = units(lang), idx = all.findIndex(u => u.id === uid), u = all[idx];
    if (!u) return go(`#/c/${lang}`);
    if (!unlocked(lang, idx)) { toast('Hãy hoàn thành bài trước để mở bài này'); return go(`#/c/${lang}`); }
    if (!L || L.uid !== uid) L = { uid, step: 0, view: 'list', fi: 0, flipped: false, hideVi: false, quiz: null, sp: null, rp: null };
    $app.style.setProperty('--lang', `var(--${lang})`);

    const tabs = STEPS.map(([t, s], i) => `<button data-step="${i}" class="${L.step === i ? 'on' : ''}">${i + 1}. ${t}<small>${s}</small></button>`).join('');
    const body = [stepVocab, stepGrammar, stepDialogue, stepSpeak, stepQuiz][L.step](u, lang, idx);
    const nav = L.step < STEPS.length - 1 ? `<div class="step-nav">
        ${L.step > 0 ? `<button class="btn ghost" data-step="${L.step - 1}">← ${STEPS[L.step - 1][0]}</button>` : '<span></span>'}
        <button class="btn" data-step="${L.step + 1}">${STEPS[L.step + 1][0]} →</button></div>` : '';

    $app.innerHTML = `
      <a class="back" href="#/c/${lang}">← Lộ trình ${COURSES[lang].name}</a>
      <div class="lesson-head">
        <span class="ico">${u.icon || '📘'}</span>
        <div><span class="pill">${u.level.id} · Bài ${idx + 1}</span><h1>${esc(u.title)}</h1><p class="muted">🎯 ${esc(u.goal)}</p></div>
      </div>
      <div class="steps">${tabs}</div>
      <div id="stepBody">${body}</div>
      ${nav}`;
    bindLesson(u, lang, idx);
  }

  function stepVocab(u) {
    const sw = `<div class="view-switch">
      <button class="btn sm ${L.view === 'list' ? '' : 'ghost'}" data-view="list">Danh sách</button>
      <button class="btn sm ${L.view === 'flash' ? '' : 'ghost'}" data-view="flash">Flashcard</button></div>`;
    if (L.view === 'flash') {
      const v = u.vocab[L.fi];
      return sw + `<div class="flash-wrap">
        <div class="flash ${L.flipped ? 'flipped' : ''}" id="flash"><div class="flash-inner">
          <div class="flash-face"><div class="big">${esc(v.w)}</div><div class="muted">${esc(v.ipa)}</div><div class="muted">Bấm để lật</div></div>
          <div class="flash-face back"><div class="big" style="color:var(--lang)">${esc(v.vi)}</div>${v.hv ? `<div class="hv">Hán Việt: ${esc(v.hv)}</div>` : ''}<div>${esc(v.ex)}</div>${pyLine(v.exPy)}<div class="muted">${esc(v.exVi)}</div></div>
        </div></div>
        <div style="display:flex;gap:10px;align-items:center">
          <button class="btn ghost sm" data-fi="-1">←</button>${sayBtn(v.w)}
          <span class="muted">${L.fi + 1}/${u.vocab.length}</span>
          <button class="btn ghost sm" data-fi="1">→</button>
        </div></div>`;
    }
    return sw + `<div class="vocab-list">${u.vocab.map(v => `
      <div class="card vocab">${sayBtn(v.w)}
        <div><span class="w">${esc(v.w)}</span><span class="ipa">${esc(v.ipa)}</span>${v.hv ? `<span class="hv">${esc(v.hv)}</span>` : ''}
          <div class="vi">${esc(v.vi)}</div>
          <div class="ex">${esc(v.ex)} ${pyLine(v.exPy)}<i>${esc(v.exVi)}</i></div></div>
      </div>`).join('')}</div>`;
  }

  function stepGrammar(u) {
    const g = u.grammar;
    const table = g.table && g.table.length ? `<div class="table-wrap"><table class="gtable">
      <tr>${g.table[0].map(h => `<th>${esc(h)}</th>`).join('')}</tr>
      ${g.table.slice(1).map(r => `<tr>${r.map(c => `<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</table></div>` : '';
    return `<div class="card grammar-explain">
      <h2>${esc(g.title)}</h2>
      ${g.explain.map(p => `<p>${esc(p)}</p>`).join('')}
      ${table}
      <h3>Ví dụ</h3>
      ${g.examples.map(e => `<div class="example">${sayBtn(e.t)}<div>${esc(e.t)}${pyLine(e.py)}<i>${esc(e.vi)}</i></div></div>`).join('')}
      ${g.tip ? `<div class="tip">💡 ${esc(g.tip)}</div>` : ''}
    </div>`;
  }

  function stepDialogue(u) {
    const who = [...new Set(u.dialogue.map(l => l.s))];
    return `<div style="display:flex;gap:10px;margin-bottom:16px;flex-wrap:wrap">
        <button class="btn sm" id="playAll">▶ Nghe cả đoạn</button>
        <button class="btn sm ghost" id="toggleVi">${L.hideVi ? 'Hiện' : 'Ẩn'} bản dịch</button></div>
      <div class="dialogue ${L.hideVi ? 'hide-vi' : ''}">${u.dialogue.map(l => `
        <div class="line ${who.indexOf(l.s) % 2 ? 'right' : ''}">${sayBtn(l.t)}
          <div class="bubble"><span class="who">${esc(l.s)}</span><div>${esc(l.t)}</div>${pyLine(l.py)}<i>${esc(l.vi)}</i></div></div>`).join('')}
      </div>`;
  }

  function bindLesson(u, lang, idx) {
    $app.querySelectorAll('[data-step]').forEach(b => b.onclick = () => { L.step = +b.dataset.step; stopRec(); if (L.step === 4) L.quiz = null; renderLesson(lang, u.id); scrollTo(0, 0); });
    $app.querySelectorAll('[data-view]').forEach(b => b.onclick = () => { L.view = b.dataset.view; L.flipped = false; renderLesson(lang, u.id); });
    $app.querySelectorAll('[data-fi]').forEach(b => b.onclick = () => {
      L.fi = (L.fi + +b.dataset.fi + u.vocab.length) % u.vocab.length; L.flipped = false; renderLesson(lang, u.id);
    });
    const fl = document.getElementById('flash');
    if (fl) fl.onclick = () => { L.flipped = !L.flipped; fl.classList.toggle('flipped'); };
    const pa = document.getElementById('playAll');
    if (pa) pa.onclick = () => speakAll(u.dialogue, COURSES[lang].tts);
    const tv = document.getElementById('toggleVi');
    if (tv) tv.onclick = () => { L.hideVi = !L.hideVi; renderLesson(lang, u.id); };
    if (L.step === 3) bindSpeak(u, lang);
    if (L.step === 4) bindQuiz(u, lang, idx);
  }

  // ---------- Luyện nói ----------
  const SPEAK_PASS = 80;
  const getSR = () => window.SpeechRecognition || window.webkitSpeechRecognition;
  let rec = null;
  function stopRec() {
    if (!rec) return;
    rec.onresult = rec.onend = rec.onerror = null;
    try { rec.abort(); } catch { /* đã dừng */ }
    rec = null;
  }

  // Nghe một lượt nói; trả về các phương án nhận dạng khi kết thúc (mảng rỗng nếu không nghe được)
  function listen(tag, { onInterim, onDone }) {
    const SR = getSR();
    stopRec();
    if ('speechSynthesis' in window) speechSynthesis.cancel();
    rec = new SR();
    rec.lang = tag; rec.interimResults = true; rec.maxAlternatives = 3; rec.continuous = false;
    let finals = [];
    rec.onresult = e => {
      const rs = [...e.results];
      onInterim && onInterim(rs.map(r => r[0].transcript).join(' '));
      if (rs.every(r => r.isFinal)) finals = [0, 1, 2].map(k => rs.map(r => r[Math.min(k, r.length - 1)].transcript).join(' ').trim());
    };
    rec.onerror = e => toast({
      'not-allowed': 'Bạn cần cho phép trình duyệt dùng micro',
      'no-speech': 'Không nghe thấy gì, thử lại nhé',
      'network': 'Không kết nối được dịch vụ nhận dạng giọng nói. Brave/Chromium không hỗ trợ — hãy dùng Google Chrome hoặc Edge (và kiểm tra mạng)',
      'service-not-allowed': 'Trình duyệt này chặn nhận dạng giọng nói — hãy dùng Google Chrome hoặc Edge',
      'audio-capture': 'Không tìm thấy micro'
    }[e.error] || 'Lỗi micro: ' + e.error);
    rec.onend = () => { rec = null; onDone(finals); };
    rec.start();
  }

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
  // 22 → "20 2" để khớp cả "twenty-two" lẫn "22"
  const splitNum = t => /^\d+$/.test(t) && +t > 20 && +t < 100 && +t % 10 ? [String(+t - +t % 10), String(+t % 10)] : [t];

  // 二十一 → 21, 一百 → 100 (để khớp khi máy nhận dạng trả về chữ số)
  function zhToNum(s) {
    const d = { 零: 0, 一: 1, 二: 2, 两: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9 };
    let total = 0, cur = 0;
    for (const c of s) {
      if (c === '十' || c === '百') { total += (cur || 1) * (c === '十' ? 10 : 100); cur = 0; }
      else cur = d[c];
    }
    return total + cur;
  }

  // Một từ viết → các token so sánh (bỏ dấu câu/dấu thanh, tách từ viết tắt, số → chữ số)
  function spTokens(word) {
    word = word.replace(/[零一二三四五六七八九十两百]{2,}|[十百]/g, m => ` ${zhToNum(m)} `);
    const w = noAccent(word.toLowerCase().replace(/[’`]/g, "'")).replace(/-/g, ' ')
      .replace(/[^a-z0-9'\u3400-\u9fff ]/g, '').replace(/([\u3400-\u9fff])/g, ' $1 ').trim();
    return w.split(/\s+/).filter(Boolean)
      .flatMap(t => (Object.hasOwn(CONTRACT, t) ? CONTRACT[t] : t).split(' '))
      .map(t => Object.hasOwn(NUMS, t) ? String(NUMS[t]) : t.replace(/'/g, ''))
      .flatMap(splitNum)
      .filter(Boolean);
  }

  // So khớp câu mẫu với câu nghe được (dãy con chung dài nhất), đánh dấu từng từ của câu mẫu
  function compareSpeech(target, heard) {
    const words = splitUnits(target);
    const T = [];
    words.forEach((w, wi) => spTokens(w).forEach(t => T.push({ t, wi })));
    const H = heard.split(/\s+/).flatMap(spTokens);
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
  const bestMatch = (target, cands) => cands.filter(Boolean)
    .map(h => ({ heard: h, ...compareSpeech(target, h) }))
    .sort((a, b) => b.score - a.score)[0];

  const markWords = (text, r) => splitUnits(text).map((w, k, us) =>
    (k && !CJK_RE.test(us[k - 1]) && !CJK_RE.test(w) ? ' ' : '')
    + (r ? `<span class="${r.ok[k] ? 'w-ok' : 'w-miss'}">${esc(w)}</span>` : esc(w))).join('');
  const verdict = s => s >= SPEAK_PASS ? ['ok', s === 100 ? 'Hoàn hảo!' : 'Tốt lắm!']
    : s >= 50 ? ['mid', 'Gần được rồi, thử lại nhé'] : ['no', 'Chưa khớp — nghe lại mẫu rồi nói chậm, rõ hơn'];

  function speakItems(u) {
    const seen = new Set();
    return [...u.dialogue, ...u.grammar.examples].filter(x => !seen.has(x.t) && seen.add(x.t));
  }
  function markSpoken(uid, i) {
    const done = P.spoken[uid] || (P.spoken[uid] = []);
    if (done.includes(i)) return;
    done.push(i); P.xp += 5; touchStreak(); save(); renderStats();
  }

  function stepSpeak(u) {
    if (!L.sp) L.sp = { mode: 'sent', i: 0, hide: false, res: {}, listening: false };
    const S = L.sp;
    const tabs = `<div class="view-switch">
        <button class="btn sm ${S.mode === 'sent' ? '' : 'ghost'}" data-spmode="sent">🎯 Từng câu</button>
        <button class="btn sm ${S.mode === 'role' ? '' : 'ghost'}" data-spmode="role">🎭 Nhập vai</button></div>`;
    const warn = getSR() ? '' : `<div class="tip" style="margin:0 0 16px">⚠️ Trình duyệt này không hỗ trợ nhận dạng giọng nói. Hãy mở bằng <b>Chrome</b> hoặc <b>Edge</b>. Bạn vẫn có thể nghe mẫu và tập nhại theo.</div>`;
    return warn + tabs + (S.mode === 'role' ? roleplayView(u) : sentenceView(u));
  }

  function sentenceView(u) {
    const S = L.sp, items = speakItems(u), it = items[S.i], r = S.res[S.i];
    const passed = new Set(P.spoken[u.id] || []), v = r && verdict(r.score);
    return `
      <div class="speak-top">
        <span class="muted">Câu ${S.i + 1}/${items.length} · đã đạt ${passed.size}/${items.length}</span>
        <label class="toggle"><input type="checkbox" id="spHide" ${S.hide ? 'checked' : ''}> Ẩn câu (nghe rồi nhắc lại)</label>
      </div>
      <div class="dots">${items.map((_, k) => `<button class="dot ${k === S.i ? 'cur' : ''} ${passed.has(k) ? 'pass' : ''}" data-sp="${k}" title="Câu ${k + 1}"></button>`).join('')}</div>
      <div class="card speak-card">
        ${it.s ? `<div class="muted">${esc(it.s)}</div>` : ''}
        <div class="sp-sentence ${S.hide && !r ? 'blur' : ''}">${markWords(it.t, r)}</div>
        ${pyLine(it.py, S.hide && !r ? 'blur' : '')}
        <div class="muted">${esc(it.vi)}</div>
        <div class="sp-row">
          <button class="btn ghost sm" id="spListen">🔊 Nghe mẫu</button>
          <button class="btn ghost sm" id="spSlow">🐢 Nghe chậm</button>
        </div>
        <button class="mic ${S.listening ? 'on' : ''}" id="spMic" ${getSR() ? '' : 'disabled'} title="Bấm để nói">🎤</button>
        <div class="muted">${S.listening ? 'Đang nghe… đọc to câu trên rồi dừng lại' : 'Bấm micro rồi đọc to câu trên'}</div>
        <div class="heard" id="spHeard">${r ? `Bạn nói: “${esc(r.heard)}”` : ''}</div>
        ${r ? `<div class="feedback ${v[0]}"><b>${r.score}% · ${v[1]}</b>${r.score < 100 ? '<span class="muted">Từ gạch đỏ là từ chưa nghe rõ.</span>' : ''}</div>` : ''}
        <div class="sp-row">
          <button class="btn ghost sm" data-sp="${S.i - 1}" ${S.i ? '' : 'disabled'}>← Câu trước</button>
          <button class="btn sm" data-sp="${S.i + 1}" ${S.i < items.length - 1 ? '' : 'disabled'}>Câu tiếp →</button>
        </div>
      </div>`;
  }

  function roleplayView(u) {
    const who = [...new Set(u.dialogue.map(l => l.s))];
    const R = L.rp;
    if (!R) {
      return `<div class="card speak-card">
        <div style="font-size:2.4rem">🎭</div>
        <h2>Nhập vai hội thoại</h2>
        <p class="muted">Bạn đóng một nhân vật. Máy đọc lời nhân vật còn lại, đến lượt bạn thì bấm micro và nói. Gợi ý tiếng Việt luôn hiện; câu gốc có thể ẩn để luyện phản xạ.</p>
        <label class="toggle"><input type="checkbox" id="rpHide" ${L.sp.rpHide ? 'checked' : ''}> Ẩn câu gốc (khó hơn)</label>
        <div class="sp-row">${who.map(s => `<button class="btn" data-role="${esc(s)}">Tôi là ${esc(s)}</button>`).join('')}</div>
      </div>`;
    }
    const lines = u.dialogue.slice(0, R.i + 1).map((l, k) => {
      const mine = l.s === R.role, cur = k === R.i, r = R.res[k];
      const hidden = mine && !r && L.sp.rpHide;
      return `<div class="line ${mine ? 'right' : ''}">
          <div class="bubble ${cur && mine ? 'turn' : ''}"><span class="who">${esc(l.s)}${mine ? ' (bạn)' : ''}</span>
            <div class="${hidden ? 'blur' : ''}">${mine ? markWords(l.t, r) : esc(l.t)}</div>${pyLine(l.py, hidden ? 'blur' : '')}<i>${esc(l.vi)}</i>
            ${r ? `<span class="pill ${r.score >= SPEAK_PASS ? 'pill-ok' : 'pill-no'}">${r.score}%</span>` : ''}</div>
          ${mine ? '' : sayBtn(l.t)}</div>`;
    }).join('');
    const end = R.i >= u.dialogue.length;
    const cur = u.dialogue[R.i];
    let ctrl = '';
    if (end) {
      const sc = Object.values(R.res).map(r => r.score), avg = sc.length ? Math.round(sc.reduce((a, b) => a + b, 0) / sc.length) : 0;
      ctrl = `<div class="card result"><div class="score" style="color:${avg >= SPEAK_PASS ? 'var(--good)' : 'var(--warn)'}">${avg}%</div>
        <p>Điểm trung bình phần nói của bạn trong vai ${esc(R.role)}.</p>
        <div class="actions"><button class="btn" id="rpAgain">↻ Nhập vai lại</button><button class="btn ghost" id="rpSwap">Đổi vai</button></div></div>`;
    } else if (cur.s === R.role) {
      const r = R.res[R.i];
      ctrl = `<div class="rp-ctrl">
        <button class="mic ${L.sp.listening ? 'on' : ''}" id="rpMic" ${getSR() ? '' : 'disabled'}>🎤</button>
        <div class="muted">${L.sp.listening ? 'Đang nghe…' : r ? '' : 'Đến lượt bạn — bấm micro và nói'}</div>
        <div class="heard" id="spHeard">${r ? `Bạn nói: “${esc(r.heard)}”` : ''}</div>
        <div class="sp-row">
          <button class="btn ghost sm" id="rpHint">🔊 Nghe gợi ý</button>
          ${r ? `<button class="btn sm ${r.score >= SPEAK_PASS ? 'good' : ''}" id="rpNext">Tiếp tục →</button>` : `<button class="btn ghost sm" id="rpSkip">Bỏ qua</button>`}
        </div></div>`;
    } else {
      ctrl = `<div class="rp-ctrl"><span class="muted">🔊 ${esc(cur.s)} đang nói…</span><button class="btn ghost sm" id="rpGo">Tiếp ›</button></div>`;
    }
    return `<div class="dialogue rp">${lines}</div>${ctrl}`;
  }

  function bindSpeak(u, lang) {
    const S = L.sp, tag = COURSES[lang].tts;
    const rerender = () => renderLesson(lang, u.id);
    const heard = () => document.getElementById('spHeard');
    $app.querySelectorAll('[data-spmode]').forEach(b => b.onclick = () => { stopRec(); speechSynthesis.cancel(); S.listening = false; S.mode = b.dataset.spmode; L.rp = null; rerender(); });

    if (S.mode === 'sent') {
      const items = speakItems(u), it = items[S.i];
      $app.querySelectorAll('[data-sp]').forEach(b => b.onclick = () => { stopRec(); S.listening = false; S.i = +b.dataset.sp; rerender(); });
      document.getElementById('spHide').onchange = e => { S.hide = e.target.checked; rerender(); };
      document.getElementById('spListen').onclick = () => speak(it.t, tag);
      document.getElementById('spSlow').onclick = () => speak(it.t, tag, 0.6);
      document.getElementById('spMic').onclick = () => {
        if (S.listening) { rec && rec.stop(); return; }
        S.listening = true; delete S.res[S.i];
        listen(tag, {
          onInterim: t => { const h = heard(); if (h) h.textContent = '… ' + t; },
          onDone: cands => {
            S.listening = false;
            const best = bestMatch(it.t, cands);
            if (best) { S.res[S.i] = best; if (best.score >= SPEAK_PASS) markSpoken(u.id, S.i); }
            rerender();
          }
        });
        rerender();
      };
      return;
    }

    // Nhập vai
    const hide = document.getElementById('rpHide');
    if (hide) hide.onchange = e => { S.rpHide = e.target.checked; };
    $app.querySelectorAll('[data-role]').forEach(b => b.onclick = () => { L.rp = { role: b.dataset.role, i: 0, res: {} }; rerender(); });
    const R = L.rp; if (!R) return;
    const advance = () => { R.i++; rerender(); };
    const again = document.getElementById('rpAgain');
    if (again) again.onclick = () => { L.rp = { role: R.role, i: 0, res: {} }; rerender(); };
    const swap = document.getElementById('rpSwap');
    if (swap) swap.onclick = () => { L.rp = null; rerender(); };
    const cur = u.dialogue[R.i];
    if (!cur) return;
    if (cur.s !== R.role) {
      // lượt của máy: đọc rồi tự chuyển lượt
      const at = R.i;
      const go = () => { if (L.rp === R && R.i === at && L.step === 3) advance(); };
      document.getElementById('rpGo').onclick = () => { speechSynthesis.cancel(); go(); };
      speak(cur.t, tag, 0.9, () => setTimeout(go, 350));
      return;
    }
    document.getElementById('rpHint').onclick = () => speak(cur.t, tag, 0.8);
    const nx = document.getElementById('rpNext'); if (nx) nx.onclick = advance;
    const sk = document.getElementById('rpSkip'); if (sk) sk.onclick = () => { R.res[R.i] = { heard: '(bỏ qua)', score: 0, ok: splitUnits(cur.t).map(() => false) }; advance(); };
    document.getElementById('rpMic').onclick = () => {
      if (S.listening) { rec && rec.stop(); return; }
      S.listening = true; delete R.res[R.i];
      listen(tag, {
        onInterim: t => { const h = heard(); if (h) h.textContent = '… ' + t; },
        onDone: cands => {
          S.listening = false;
          const best = bestMatch(cur.t, cands);
          if (best) R.res[R.i] = best;
          rerender();
        }
      });
      rerender();
    };
    const box = $app.querySelector('.rp .line:last-child');
    if (box) box.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }

  // ---------- Kiểm tra ----------
  function rightText(q) {
    if (q.type === 'fill') {
      const py = isZh() && q.answer.find(a => /[a-z]/i.test(a));
      return q.answer[0] + (py ? ' · ' + py : '');
    }
    if (q.type === 'order') return tidy(q.answer);
    return q.options[q.answer];
  }

  function buildQuiz(u) {
    const vs = shuffle(u.vocab.map((v, i) => ({ ...v, i })));
    const zh = isZh(), label = x => zh ? `${x.w} · ${x.ipa}` : x.w;
    const four = v => shuffle([v, ...shuffle(vs.filter(x => x !== v && x.vi !== v.vi && x.w !== v.w)).slice(0, 3)]);
    const vq = [];
    vs.slice(0, 2).forEach(v => { const o = four(v); vq.push({ type: 'mc', kind: 'Nghĩa của từ', q: v.w, sub: zh ? v.ipa : '', say: v.w, options: o.map(x => x.vi), answer: o.indexOf(v) }); });
    { const v = vs[2], o = four(v); vq.push({ type: 'mc', kind: 'Chọn từ đúng', q: v.vi, options: o.map(label), answer: o.indexOf(v) }); }
    { const v = vs[3], o = four(v); vq.push({ type: 'listen', kind: 'Nghe và chọn', say: v.w, options: o.map(label), answer: o.indexOf(v) }); }
    const ex = u.exercises.map(e => ({ ...e, kind: { mc: 'Chọn đáp án đúng', fill: 'Điền vào chỗ trống', order: 'Sắp xếp thành câu' }[e.type] }));
    const qs = shuffle([...vq, ...ex]).map(q => q.type === 'order' ? { ...q, words: shuffle(q.words) } : q);
    return { qs, i: 0, correct: 0, answered: null, picked: [], wrongs: [], finished: false };
  }

  function stepQuiz(u, lang, idx) {
    if (!L.quiz) L.quiz = buildQuiz(u);
    const Q = L.quiz;
    if (Q.finished) return quizResult(u, lang, idx);
    const q = Q.qs[Q.i], A = Q.answered;
    let body = '';
    const blank = s => esc(s).replace('___', '<b style="color:var(--lang)">____</b>');

    if (q.type === 'mc' || q.type === 'listen') {
      const opts = q.options.map((o, i) => {
        let cls = '';
        if (A) cls = i === q.answer ? 'right' : i === A.choice ? 'wrong' : '';
        return `<button class="opt ${cls}" data-opt="${i}" ${A ? 'disabled' : ''}>${i + 1}. ${esc(o)}</button>`;
      }).join('');
      body = q.type === 'listen'
        ? `<button class="listen-btn" data-say="${esc(q.say)}">🔊</button><div class="options">${opts}</div>`
        : `<div class="q-text">${blank(q.q)} ${q.say ? sayBtn(q.say) : ''}${pyLine(q.sub)}</div><div class="options">${opts}</div>`;
    } else if (q.type === 'fill') {
      body = `<div class="q-text">${blank(q.q)}</div>
        <input class="fill-input" id="fillIn" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${q.hint ? 'Gợi ý: ' + esc(q.hint) : 'Nhập đáp án…'}${isZh() ? ' — gõ chữ Hán hoặc pinyin' : ''}" value="${A ? esc(A.value) : ''}" ${A ? 'disabled' : ''}>
        ${A ? '' : `<div class="quiz-foot"><button class="btn" id="checkBtn">Kiểm tra</button></div>`}`;
    } else if (q.type === 'order') {
      const picked = Q.picked;
      body = `<div class="q-text">${esc(q.vi)}</div>
        <div class="order-answer">${picked.map((w, k) => `<button class="chip" data-unpick="${k}" ${A ? 'disabled' : ''}>${esc(q.words[w])}</button>`).join('')}</div>
        <div class="order-bank">${q.words.map((w, k) => `<button class="chip ${picked.includes(k) ? 'used' : ''}" data-pick="${k}" ${A ? 'disabled' : ''}>${esc(w)}</button>`).join('')}</div>
        ${A ? '' : `<div class="quiz-foot"><button class="btn" id="checkBtn" ${picked.length ? '' : 'disabled'}>Kiểm tra</button></div>`}`;
    }

    let fb = '';
    if (A) {
      const right = rightText(q);
      fb = `<div class="feedback ${A.ok ? 'ok' : 'no'}">
          <b>${A.ok ? (A.note ? '✓ Gần đúng!' : '✓ Chính xác!') : '✗ Chưa đúng'}</b>
          ${A.note ? `<div>${esc(A.note)}</div>` : ''}
          ${!A.ok || A.note ? `<div>Đáp án: <b style="display:inline">${esc(right)}</b></div>` : ''}
          ${q.explain ? `<div class="muted">${esc(q.explain)}</div>` : ''}
        </div>
        <div class="quiz-foot"><button class="btn ${A.ok ? 'good' : ''}" id="nextBtn">${Q.i + 1 < Q.qs.length ? 'Tiếp tục' : 'Xem kết quả'} ↵</button></div>`;
    }

    return `<div class="quiz">
      <div class="quiz-top"><div class="bar"><i style="width:${pct(Q.i + (A ? 1 : 0), Q.qs.length)}%"></i></div><span class="pill">${Q.i + 1}/${Q.qs.length}</span></div>
      <div class="q-kind">${q.kind}</div>
      ${body}${fb}
    </div>`;
  }

  function bindQuiz(u, lang, idx) {
    const Q = L.quiz; if (Q.finished) return bindResult(u, lang, idx);
    const q = Q.qs[Q.i];
    const rerender = () => renderLesson(lang, u.id);
    const answer = (ok, extra = {}) => {
      Q.answered = { ok, ...extra };
      if (ok) Q.correct++; else Q.wrongs.push(q);
      rerender();
      if (q.type === 'listen' || q.say) speak(q.say);
    };

    $app.querySelectorAll('[data-opt]').forEach(b => b.onclick = () => answer(+b.dataset.opt === q.answer, { choice: +b.dataset.opt }));
    $app.querySelectorAll('[data-pick]').forEach(b => b.onclick = () => { Q.picked.push(+b.dataset.pick); rerender(); });
    $app.querySelectorAll('[data-unpick]').forEach(b => b.onclick = () => { Q.picked.splice(+b.dataset.unpick, 1); rerender(); });

    const fill = document.getElementById('fillIn');
    const check = document.getElementById('checkBtn');
    const doCheck = () => {
      if (q.type === 'fill') {
        const val = fill.value; if (!val.trim()) return fill.focus();
        const got = norm(val), acc = q.answer.map(norm);
        if (acc.includes(got)) return answer(true, { value: val });
        if (acc.map(noAccent).includes(noAccent(got))) return answer(true, { value: val, note: 'Đúng từ nhưng thiếu/sai dấu — chú ý viết dấu nhé.' });
        return answer(false, { value: val });
      }
      if (q.type === 'order') {
        const got = Q.picked.map(k => q.words[k]).join(' ');
        answer(norm(got) === norm(q.answer));
      }
    };
    if (check) check.onclick = doCheck;
    if (fill && !Q.answered) { fill.focus(); fill.onkeydown = e => { if (e.key === 'Enter') doCheck(); }; }

    const nb = document.getElementById('nextBtn');
    if (nb) {
      nb.onclick = () => {
        Q.i++; Q.answered = null; Q.picked = [];
        if (Q.i >= Q.qs.length) finishQuiz(u, lang);
        rerender();
      };
      nb.focus();
    }
    if (q.type === 'listen' && !Q.answered && Q.autoplayed !== Q.i) { Q.autoplayed = Q.i; setTimeout(() => speak(q.say), 250); }
  }

  function finishQuiz(u, lang) {
    const Q = L.quiz; Q.finished = true;
    const score = pct(Q.correct, Q.qs.length), passed = score >= PASS * 100;
    const rec = P.units[u.id] || {};
    const firstPass = passed && !rec.done;
    P.units[u.id] = { done: rec.done || passed, best: Math.max(rec.best || 0, score), date: today() };
    const gained = Q.correct * 10 + (firstPass ? 50 : 0);
    P.xp += gained;
    if (passed) {
      u.vocab.forEach((v, i) => {
        const key = `${lang}|${u.id}|${i}`;
        if (!P.srs[key]) P.srs[key] = { box: 0, due: dayStr(1) };
      });
    }
    touchStreak(); save(); renderStats();
    Q.summary = { score, passed, gained, firstPass };
  }

  function quizResult(u, lang, idx) {
    const Q = L.quiz, S = Q.summary, nx = units(lang)[idx + 1];
    const wrongs = Q.wrongs.map(q => {
      const right = rightText(q);
      const ask = q.type === 'listen' ? '🔊 ' + q.say : q.type === 'order' ? q.vi : q.q;
      return `<div class="example"><div>${esc(ask)}<i>→ ${esc(right)}</i></div></div>`;
    }).join('');
    return `<div class="quiz"><div class="card result">
        <div style="font-size:3rem">${S.passed ? '🎉' : '💪'}</div>
        <div class="score" style="color:${S.passed ? 'var(--good)' : 'var(--bad)'}">${S.score}%</div>
        <p>${Q.correct}/${Q.qs.length} câu đúng · +${S.gained} XP</p>
        <p class="muted">${S.passed
          ? (S.firstPass ? `Bạn đã hoàn thành bài! ${u.vocab.length} từ mới được thêm vào lịch ôn tập.` : 'Làm tốt lắm!')
          : `Cần đạt ${PASS * 100}% để mở bài tiếp theo. Xem lại từ vựng và ngữ pháp rồi thử lại nhé.`}</p>
        <div class="actions">
          ${S.passed && nx ? `<a class="btn" href="#/c/${lang}/u/${nx.id}">Bài tiếp theo →</a>` : ''}
          <button class="btn ${S.passed ? 'ghost' : ''}" id="retry">↻ Làm lại</button>
          <a class="btn ghost" href="#/c/${lang}">Về lộ trình</a>
        </div>
      </div>
      ${wrongs ? `<div class="card" style="margin-top:16px"><h3>Câu cần xem lại</h3>${wrongs}</div>` : ''}
    </div>`;
  }
  function bindResult(u, lang) {
    document.getElementById('retry').onclick = () => { L.quiz = null; renderLesson(lang, u.id); };
  }

  // ---------- Ôn tập (lặp lại ngắt quãng) ----------
  let R = null;
  function renderReview(lang) {
    curLang = lang;
    $app.style.setProperty('--lang', `var(--${lang})`);
    if (!R || R.lang !== lang) {
      const due = shuffle(srsDue(lang).map(([k]) => k)).slice(0, 20);
      R = { lang, queue: due, flipped: false, done: 0, extra: false };
    }
    const back = `<a class="back" href="#/c/${lang}">← Lộ trình ${COURSES[lang].name}</a>`;
    if (!R.queue.length) {
      const total = learnedCount(lang);
      $app.innerHTML = back + `<div class="card empty">
        <div style="font-size:3rem">${R.done ? '✅' : '🧠'}</div>
        <h2>${R.done ? `Đã ôn xong ${R.done} thẻ!` : 'Không có từ nào cần ôn hôm nay'}</h2>
        <p class="muted">${total ? `Bạn đã học ${total} từ. Các từ sẽ quay lại theo lịch 1 → 2 → 4 → 7 → 15 → 30 ngày.` : 'Hoàn thành bài học đầu tiên để bắt đầu ôn tập.'}</p>
        <div class="actions" style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
          ${total ? `<button class="btn ghost" id="extra">Ôn thêm 10 từ ngẫu nhiên</button>` : ''}
          <a class="btn" href="#/c/${lang}">Về lộ trình</a></div></div>`;
      const ex = document.getElementById('extra');
      if (ex) ex.onclick = () => {
        R.queue = shuffle(Object.keys(P.srs).filter(k => k.startsWith(lang + '|'))).slice(0, 10); R.extra = true; R.done = 0; renderReview(lang);
      };
      return;
    }
    const key = R.queue[0], v = wordFromKey(key);
    if (!v) { delete P.srs[key]; save(); R.queue.shift(); return renderReview(lang); }
    $app.innerHTML = back + `
      <h1>🧠 Ôn tập</h1><p class="muted">Còn ${R.queue.length} thẻ · nhớ lại nghĩa rồi lật thẻ để kiểm tra.</p>
      <div class="flash-wrap">
        <div class="flash ${R.flipped ? 'flipped' : ''}" id="flash"><div class="flash-inner">
          <div class="flash-face"><div class="big">${esc(v.w)}</div><div class="muted">${esc(v.ipa)}</div><div class="muted">Bấm để lật</div></div>
          <div class="flash-face back"><div class="big" style="color:var(--lang)">${esc(v.vi)}</div>${v.hv ? `<div class="hv">Hán Việt: ${esc(v.hv)}</div>` : ''}<div>${esc(v.ex)}</div>${pyLine(v.exPy)}<div class="muted">${esc(v.exVi)}</div></div>
        </div></div>
        ${sayBtn(v.w)}
        ${R.flipped ? `<div style="display:flex;gap:10px">
          <button class="btn bad" data-grade="0">✗ Chưa nhớ</button>
          <button class="btn good" data-grade="1">✓ Đã nhớ</button>
        </div>` : ''}
      </div>`;
    document.getElementById('flash').onclick = () => { R.flipped = !R.flipped; renderReview(lang); };
    $app.querySelectorAll('[data-grade]').forEach(b => b.onclick = () => {
      const s = P.srs[key];
      if (+b.dataset.grade) { s.box = Math.min(s.box + 1, SRS_DAYS.length - 1); s.due = dayStr(SRS_DAYS[s.box]); R.queue.shift(); R.done++; P.xp += 2; }
      else { s.box = 0; s.due = today(); R.queue.push(R.queue.shift()); }
      R.flipped = false; touchStreak(); save(); renderStats(); renderReview(lang);
    });
    if (!R.flipped) speak(v.w);
  }

  // ---------- Điều hướng ----------
  function go(hash) { location.hash = hash; }
  function route() {
    stopRec();
    if ('speechSynthesis' in window) speechSynthesis.cancel();
    const parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
    $app.style.removeProperty('--lang');
    if (parts[0] === 'c' && COURSES[parts[1]]) {
      if (parts[2] === 'u' && parts[3]) renderLesson(parts[1], parts[3]);
      else if (parts[2] === 'review') { if (R && R.lang === parts[1] && !R.queue.length) R = null; renderReview(parts[1]); }
      else renderRoadmap(parts[1]);
    } else renderHome();
    renderStats();
  }

  // Nút phát âm dùng chung
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-say]');
    if (b) { e.stopPropagation(); speak(b.dataset.say); }
  }, true);

  // Phím tắt trong bài kiểm tra: 1–4 chọn đáp án, Enter để tiếp tục
  document.addEventListener('keydown', e => {
    if (e.target.tagName === 'INPUT') return;
    if (e.key >= '1' && e.key <= '4') { const b = $app.querySelector(`[data-opt="${+e.key - 1}"]:not(:disabled)`); if (b) b.click(); }
    if (e.key === 'Enter' && document.activeElement.tagName !== 'BUTTON') {
      const b = document.getElementById('nextBtn') || document.getElementById('checkBtn');
      if (b && !b.disabled) b.click();
    }
  });

  // Giao diện sáng/tối
  function applyTheme() { if (P.theme) document.documentElement.dataset.theme = P.theme; }
  document.getElementById('themeBtn').onclick = () => {
    const dark = P.theme ? P.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    P.theme = dark ? 'light' : 'dark'; save(); applyTheme();
  };

  applyTheme();
  window.addEventListener('hashchange', () => { route(); scrollTo(0, 0); });
  route();
})();
