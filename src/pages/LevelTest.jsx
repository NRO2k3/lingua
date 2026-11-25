import { useEffect, useRef, useState } from 'react';
import { Breadcrumb, Button, Card, Flex, Input, List, Progress, Result, Tag, Typography } from 'antd';
import {
  ArrowRightOutlined, CheckCircleFilled, CloseCircleFilled, CompassOutlined, FireFilled, PlayCircleFilled,
  ReloadOutlined, SoundFilled
} from '@ant-design/icons';
import { AnimatePresence, motion } from 'framer-motion';
import { COURSES, LEVEL_NAME, allUnits } from '../lib/courses.js';
import { addXp, getProgress, isDone, update, useProgress } from '../lib/store.js';
import { speak } from '../lib/speech.js';
import { play } from '../lib/sfx.js';
import { celebrate } from '../lib/celebrate.js';
import { buildQuiz, checkFill, checkOrder, rightText, shuffleOptions } from '../lib/quiz.js';
import { pct, shuffle, today } from '../lib/utils.js';
import { LangTheme, Pinyin, SoundButton, WithBlank } from '../components/common.jsx';
import { CountFromZero, EASE, FadeIn } from '../components/motion.jsx';

const { Title, Text } = Typography;
const PRAISE = ['Chính xác!', 'Tuyệt vời!', 'Giỏi lắm!', 'Đúng rồi!', 'Xuất sắc!'];
const KIND = { mc: 'Chọn đáp án đúng', fill: 'Điền vào chỗ trống', order: 'Sắp xếp thành câu' };

export const LEVEL_PASS = 0.8;     // bài kiểm tra cuối cấp: đúng từ 80% là vượt cấp
const PLACE_PER_LEVEL = 7;         // xếp lớp: số câu mỗi cấp
const PLACE_MAX_WRONG = 2;         // sai quá số này ở một cấp thì dừng, cấp đó là chỗ nên bắt đầu học

// ---------- Sinh câu hỏi ----------

const prepEx = e => {
  const q = e.type === 'mc' ? shuffleOptions(e) : e;
  return { ...q, kind: KIND[e.type], ...(e.type === 'order' ? { words: shuffle(e.words) } : {}) };
};

// Gộp từ vựng cả cấp, bỏ từ trùng
const levelVocab = level => {
  const seen = new Set();
  return shuffle(level.units.flatMap(u => u.vocab)).filter(v => !seen.has(v.w) && seen.add(v.w));
};

// 4 câu từ vựng (2 hỏi nghĩa, 1 chọn từ, 1 nghe) từ một nhóm từ, phương án nhiễu lấy trong cùng nhóm
const vocabQs = (vocab, zh) => buildQuiz({ vocab, exercises: [] }, zh)
  .map(q => ({ ...q, cat: q.type === 'listen' ? 'Nghe' : 'Từ vựng' }));

// n bài tập, mỗi bài lấy từ một unit khác nhau trước khi quay vòng lại
function pickExercises(units, n) {
  const pools = shuffle(units).map(u => shuffle(u.exercises));
  const out = [];
  for (let r = 0; out.length < n && pools.some(p => p.length > r); r++) {
    for (const p of pools) if (p[r] && out.length < n) out.push(prepEx(p[r]));
  }
  return out.map(q => ({ ...q, cat: 'Ngữ pháp' }));
}

// Xếp lớp: 7 câu mỗi cấp (3 từ vựng + 4 bài tập), đi từ cấp thấp lên cao
function buildPlacement(c, zh) {
  return c.levels.flatMap(level => {
    const vq = vocabQs(levelVocab(level), zh).filter(q => q.type === 'mc').slice(0, 3);
    const ex = pickExercises(level.units, PLACE_PER_LEVEL - vq.length);
    return shuffle([...vq, ...ex]).map(q => ({ ...q, lv: level.id }));
  });
}

// Cuối cấp: 6 từ vựng + 3 nghe + 12 bài tập (2 mỗi bài) + 4 đọc hiểu = 25 câu
function buildLevelTest(level, zh) {
  const vocab = levelVocab(level), size = Math.floor(vocab.length / 3);
  const vq = [0, 1, 2].flatMap(k => {
    const qs = vocabQs(vocab.slice(k * size, (k + 1) * size), zh);
    return [...qs.filter(q => q.type === 'mc').slice(0, 2), ...qs.filter(q => q.type === 'listen')];
  });
  const rq = shuffle(level.units.filter(u => u.reading?.questions?.length)).slice(0, 4).map(u => {
    const r = u.reading, q = shuffleOptions(shuffle(r.questions)[0]);
    return { ...q, type: 'mc', kind: 'Đọc rồi trả lời', cat: 'Đọc hiểu', reading: { title: r.title, titleVi: r.titleVi, text: r.text, py: r.py } };
  });
  const ex = pickExercises(level.units, 25 - vq.length - rq.length);
  return shuffle([...vq, ...ex, ...rq]);
}

// ---------- Giao diện làm bài (cùng phong cách với bài kiểm tra trong bài học) ----------

function BottomSheet({ ans, q, zh, i, last, canCheck, showCheck, onCheck, onNext, nextRef }) {
  const tone = ans ? (ans.ok ? 'ok' : 'no') : 'idle';
  if (!ans && !showCheck) return null;
  return (
    <motion.div className={'sheet ' + tone} initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 420, damping: 34 }}>
      <div className="sheet-inner">
        {ans ? (
          <Flex gap={14} align="center" style={{ flex: 1, minWidth: 0 }}>
            <motion.span className="sheet-icon" initial={{ scale: 0, rotate: -30 }} animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 15, delay: 0.05 }}>
              {ans.ok ? <CheckCircleFilled /> : <CloseCircleFilled />}
            </motion.span>
            <div style={{ minWidth: 0 }}>
              <div className="sheet-title">
                {ans.ok ? (ans.note ? 'Gần đúng!' : PRAISE[i % PRAISE.length]) : ans.skip ? 'Không sao, xem đáp án nhé' : 'Chưa đúng rồi'}
              </div>
              {ans.note && <div className="sheet-text">{ans.note}</div>}
              {(!ans.ok || ans.note) && <div className="sheet-text">Đáp án đúng: <b>{rightText(q, zh)}</b></div>}
              {q.explain && <div className="sheet-text sheet-explain">{q.explain}</div>}
            </div>
          </Flex>
        ) : <span />}
        {ans
          ? <Button ref={nextRef} type="primary" size="large" className={'sheet-btn ' + tone} onClick={onNext}>
              {last ? 'Xem kết quả' : 'Tiếp tục'} <ArrowRightOutlined />
            </Button>
          : <Button type="primary" size="large" className="sheet-btn" disabled={!canCheck} onClick={onCheck}>Kiểm tra</Button>}
      </div>
    </motion.div>
  );
}

function Passage({ r }) {
  return (
    <div className="lt-passage">
      <Text strong>{r.title}</Text>{r.titleVi && <Text type="secondary"> · {r.titleVi}</Text>}
      {r.text.map((t, k) => (
        <div key={k} className="lt-passage-p">
          {t}
          {r.py && <Pinyin text={r.py[k]} />}
        </div>
      ))}
    </div>
  );
}

// Làm lần lượt các câu; shouldStop(log) = true thì kết thúc sớm. onDone nhận log [{ q, ok }]
function TestRunner({ lang, qs, shouldStop = () => false, onDone, allowSkip, tagOf }) {
  const zh = !!COURSES[lang].noSpace, tag = COURSES[lang].tts;
  const [i, setI] = useState(0);
  const [log, setLog] = useState([]);
  const [combo, setCombo] = useState(0);
  const [ans, setAns] = useState(null);
  const [fill, setFill] = useState('');
  const [picked, setPicked] = useState([]);
  const nextBtn = useRef(null);
  const sayTimer = useRef(null);
  useEffect(() => () => clearTimeout(sayTimer.current), []);
  const q = qs[i];
  const last = i + 1 >= qs.length || (!!ans && shouldStop(log));

  const answer = (ok, extra = {}) => {
    if (ans) return;
    setAns({ ok, ...extra });
    setLog(l => [...l, { q, ok }]);
    play(ok ? 'correct' : 'wrong');
    setCombo(c => ok ? c + 1 : 0);
    if (q.say) sayTimer.current = setTimeout(() => speak(q.say, tag), 350);
  };

  const next = () => {
    clearTimeout(sayTimer.current);
    if (last) { onDone(log); window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    setI(i + 1); setAns(null); setFill(''); setPicked([]);
  };

  const check = () => {
    if (q.type === 'fill') { if (fill.trim()) { const r = checkFill(q, fill, zh); answer(r.ok, { note: r.note }); } }
    else if (q.type === 'order') { if (picked.length) answer(checkOrder(q, picked)); }
  };

  // Câu nghe: tự phát âm khi mở câu
  useEffect(() => {
    if (q.type !== 'listen') return;
    const t = setTimeout(() => speak(q.say, tag), 450);
    return () => clearTimeout(t);
  }, [i]);

  useEffect(() => {
    if (!ans) return;
    const t = setTimeout(() => nextBtn.current?.focus(), 60);
    return () => clearTimeout(t);
  }, [ans]);

  // Phím tắt: 1–4 chọn đáp án, Enter để kiểm tra / tiếp tục
  useEffect(() => {
    const h = e => {
      if (e.target.tagName === 'INPUT') return;
      const isMc = q.type === 'mc' || q.type === 'listen';
      if (isMc && !ans && /^[1-4]$/.test(e.key) && +e.key <= q.options.length) answer(+e.key - 1 === q.answer, { choice: +e.key - 1 });
      else if (e.key === 'Enter' && !e.repeat && !e.isComposing && document.activeElement?.tagName !== 'BUTTON') {
        e.preventDefault();
        if (ans) next(); else check();
      }
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  });

  const isMc = q.type === 'mc' || q.type === 'listen';
  const canCheck = q.type === 'fill' ? !!fill.trim() : picked.length > 0;
  const pick = k => { play('tap'); setPicked([...picked, k]); };
  const unpick = j => { play('tap'); setPicked(picked.filter((_, x) => x !== j)); };

  return (
    <div className="quiz">
      <Flex align="center" gap={12} style={{ marginBottom: 16 }}>
        <Progress percent={pct(i + (ans ? 1 : 0), qs.length)} showInfo={false} strokeColor="var(--success)" style={{ flex: 1, margin: 0 }} />
        <AnimatePresence>
          {combo >= 3 && (
            <motion.span key={combo} className="combo" initial={{ scale: 0.4, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.4, opacity: 0 }} transition={{ type: 'spring', stiffness: 500, damping: 18 }}>
              <FireFilled /> {combo}
            </motion.span>
          )}
        </AnimatePresence>
        <Text type="secondary">{i + 1}/{qs.length}</Text>
      </Flex>

      <motion.div key={i} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, ease: EASE }}>
        <Card>
          <Flex align="center" justify="space-between" gap={8} wrap>
            <Text type="secondary" className="q-kind">{q.kind}</Text>
            {tagOf && <Tag bordered={false} style={{ marginInlineEnd: 0 }}>{tagOf(q)}</Tag>}
          </Flex>

          {q.reading && <Passage r={q.reading} />}

          {q.type === 'listen' ? (
            <Flex justify="center" style={{ margin: '20px 0 24px' }}>
              <Button type="primary" shape="circle" className="listen-btn" icon={<SoundFilled />} onClick={() => speak(q.say, tag)} aria-label="Nghe lại" />
            </Flex>
          ) : (
            <div className={'q-text' + (q.reading ? ' lt-q-sm' : '')}>
              <Flex align="center" gap={8} wrap>
                <span><WithBlank text={q.type === 'order' ? q.vi : q.q} /></span>
                {q.say && q.type === 'mc' && <SoundButton text={q.say} lang={lang} />}
              </Flex>
              <Pinyin text={q.sub} />
              {q.type === 'fill' && q.hint && <Text type="secondary" className="q-hint">Gợi ý: {q.hint}</Text>}
            </div>
          )}

          {isMc && (
            <Flex vertical gap={10}>
              {q.options.map((o, k) => {
                const cls = ans ? (k === q.answer ? ' right' + (ans.ok ? ' pop' : '') : k === ans.choice ? ' wrong shake' : ' dim') : '';
                return (
                  <motion.button key={k} className={'opt' + cls} disabled={!!ans} onClick={() => answer(k === q.answer, { choice: k })}
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 * k + 0.1, duration: 0.3, ease: EASE }}
                    whileTap={ans ? undefined : { scale: 0.97 }}>
                    <span className="opt-key">{k + 1}</span>
                    <span className="opt-text">{o}</span>
                    {ans && k === q.answer && <CheckCircleFilled className="opt-icon" />}
                    {ans && k === ans.choice && k !== q.answer && <CloseCircleFilled className="opt-icon" />}
                  </motion.button>
                );
              })}
            </Flex>
          )}

          {q.type === 'fill' && (
            <div className={ans && !ans.ok ? 'shake' : ''}>
              <Input size="large" autoFocus value={fill} disabled={!!ans} status={ans && !ans.ok ? 'error' : ''}
                onChange={e => setFill(e.target.value)} onPressEnter={e => { if (e.nativeEvent.isComposing || e.repeat) return; e.preventDefault(); check(); }} autoComplete="off" spellCheck={false}
                placeholder={zh ? 'Gõ chữ Hán hoặc pinyin (không dấu cũng được)' : 'Gõ đáp án của bạn'} />
            </div>
          )}

          {q.type === 'order' && (
            <>
              <div className={'order-answer' + (ans ? (ans.ok ? ' ok pop' : ' no shake') : '')}>
                <AnimatePresence initial={false}>
                  {picked.map((k, j) => (
                    <motion.button layout key={k} className="chip" disabled={!!ans} onClick={() => unpick(j)}
                      initial={{ opacity: 0, scale: 0.6, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.6 }}
                      transition={{ type: 'spring', stiffness: 600, damping: 30 }}>
                      {q.words[k]}
                    </motion.button>
                  ))}
                </AnimatePresence>
                {!picked.length && <Text type="secondary">Chạm vào các từ bên dưới theo đúng thứ tự</Text>}
              </div>
              <Flex wrap gap={8}>
                {q.words.map((w, k) => (
                  <motion.button key={k} className={'chip' + (picked.includes(k) ? ' used' : '')} disabled={!!ans || picked.includes(k)}
                    onClick={() => pick(k)} whileTap={{ scale: 0.92 }}>{w}</motion.button>
                ))}
              </Flex>
            </>
          )}

          {allowSkip && !ans && (
            <Flex justify="center" style={{ marginTop: 14 }}>
              <Button type="link" onClick={() => answer(false, { skip: true })}>Mình chưa biết câu này</Button>
            </Flex>
          )}
        </Card>
      </motion.div>

      {isMc && !ans && <Text type="secondary" className="kbd-hint">Mẹo: bấm phím 1–4 để chọn nhanh</Text>}
      <div className="sheet-spacer" />
      <BottomSheet key={i + (ans ? '-a' : '-q')} ans={ans} q={q} zh={zh} i={i} last={last}
        canCheck={canCheck} showCheck={!isMc} onCheck={check} onNext={next} nextRef={nextBtn} />
    </div>
  );
}

// ---------- Khung trang ----------

function Intro({ icon, title, lines, onStart, startText = 'Bắt đầu' }) {
  return (
    <FadeIn>
      <Card className="lt-intro">
        <Flex vertical align="center" gap={14} style={{ textAlign: 'center' }}>
          <div className="lesson-icon">{icon}</div>
          <Title level={3} style={{ margin: 0 }}>{title}</Title>
          <ul className="lt-points">{lines.map((l, k) => <li key={k}>{l}</li>)}</ul>
          <Button type="primary" size="large" className="lt-start" icon={<PlayCircleFilled />} onClick={() => { play('tap'); onStart(); }}>{startText}</Button>
        </Flex>
      </Card>
    </FadeIn>
  );
}

function Crumbs({ lang, title }) {
  const c = COURSES[lang];
  return <Breadcrumb items={[{ title: <a href="#/">Trang chủ</a> }, { title: <a href={`#/c/${lang}`}>{c.name}</a> }, { title }]} />;
}

function Wrongs({ log, zh }) {
  const wrongs = log.filter(x => !x.ok).map(x => x.q);
  if (!wrongs.length) return null;
  return (
    <FadeIn delay={0.3}>
      <Card title="Các câu cần xem lại">
        <List dataSource={wrongs} renderItem={q => (
          <List.Item>
            <List.Item.Meta
              avatar={<CloseCircleFilled style={{ color: 'var(--error)', fontSize: 18 }} />}
              title={q.type === 'listen' ? `🔊 ${q.say}` : q.type === 'order' ? q.vi : <WithBlank text={q.q} />}
              description={<>Đáp án: <Text strong>{rightText(q, zh)}</Text>{q.explain && <><br />{q.explain}</>}</>} />
          </List.Item>
        )} />
      </Card>
    </FadeIn>
  );
}

// Vòng điểm chạy từ 0 + âm thanh, pháo giấy khi đạt
function useResultRing(score, passed) {
  const [ring, setRing] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setRing(score), 150);
    const c = passed ? setTimeout(celebrate, 250) : null;
    play(passed ? 'complete' : 'pop');
    return () => { clearTimeout(t); clearTimeout(c); };
  }, []);
  return ring;
}

// Bài đầu tiên chưa xong của một cấp (hoặc bài đầu cấp)
const startUnit = (p, lang, levelId) => {
  const us = allUnits(lang).filter(u => u.level.id === levelId);
  return us.find(u => !isDone(p, u.id)) || us[0];
};

const setLevel = (lang, id) => update(d => { d.level = { ...(d.level || {}), [lang]: id }; });

// ---------- Kiểm tra xếp lớp ----------

function placementSummary(c, qs, log) {
  const rows = c.levels.map(level => {
    const total = qs.filter(q => q.lv === level.id).length;
    const items = log.filter(x => x.q.lv === level.id), ok = items.filter(x => x.ok).length;
    return { level, total, asked: items.length, ok, mastered: items.length === total && total - ok <= PLACE_MAX_WRONG };
  });
  const weak = rows.findIndex(r => !r.mastered);
  const rec = weak < 0 ? rows.at(-1) : rows[weak];
  const name = r => `${r.level.id} — ${LEVEL_NAME[r.level.id]}`;
  let why;
  if (weak < 0) why = `Bạn trả lời vững cả ${rows.length} cấp! Hãy học ở cấp cao nhất ${name(rec)}, và thử bài kiểm tra cuối cấp để khẳng định trình độ.`;
  else if (weak === 0) why = `Ở phần ${rec.level.id} bạn đúng ${rec.ok}/${rec.asked} câu. Bắt đầu từ đầu sẽ giúp bạn có nền tảng thật chắc — tiến bộ sẽ nhanh lắm đấy!`;
  else why = `Bạn đã vững ${rows.slice(0, weak).map(r => r.level.id).join(', ')}. Từ phần ${rec.level.id} các câu bắt đầu khó hơn với bạn (đúng ${rec.ok}/${rec.asked}) — học từ đây là vừa sức nhất.`;
  return { rows, rec, why };
}

function PlacementResult({ lang, qs, log, onRetry }) {
  const p = useProgress();
  const c = COURSES[lang], zh = !!c.noSpace;
  const { rows, rec, why } = placementSummary(c, qs, log);
  const id = rec.level.id, isSet = p.level?.[lang] === id;
  const correct = log.filter(x => x.ok).length;
  const ring = useResultRing(pct(rows.indexOf(rec) + 1, rows.length), true);
  const start = () => { setLevel(lang, id); location.hash = `#/c/${lang}/u/${startUnit(getProgress(), lang, id).id}`; };

  return (
    <Flex vertical gap={16}>
      <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45, ease: EASE }}>
        <Card className="result-card lt-result">
          <Result
            icon={<Progress type="circle" percent={ring} size={132} strokeWidth={8}
              format={() => <span className="ring-text"><b>{id}</b><small>{correct}/{log.length} câu đúng</small></span>} />}
            title={<>Trình độ gợi ý: {LEVEL_NAME[id]} ({id})</>}
            subTitle={<div className="lt-why">{why}</div>}
            extra={[
              <Button key="set" size="large" type={isSet ? 'default' : 'primary'} icon={isSet ? <CheckCircleFilled /> : <CompassOutlined />}
                disabled={isSet} onClick={() => { setLevel(lang, id); play('xp'); }}>
                {isSet ? 'Đã đặt trình độ này' : 'Đặt trình độ này'}
              </Button>,
              <Button key="go" size="large" type={isSet ? 'primary' : 'default'} onClick={start}>Bắt đầu học <ArrowRightOutlined /></Button>,
              <Button key="retry" size="large" icon={<ReloadOutlined />} onClick={onRetry}>Làm lại</Button>,
              <Button key="road" size="large" href={`#/c/${lang}`}>Về lộ trình</Button>
            ]} />
        </Card>
      </motion.div>
      <FadeIn delay={0.2}>
        <Card title="Kết quả từng cấp">
          <Flex vertical gap={14}>
            {rows.map(r => (
              <div key={r.level.id}>
                <Flex align="center" justify="space-between" gap={8} wrap>
                  <Text strong>{r.level.id} · {LEVEL_NAME[r.level.id]}</Text>
                  {r.mastered ? <Tag color="success" bordered={false}>Vững</Tag>
                    : r.asked ? <Tag color="warning" bordered={false}>Nên học</Tag>
                    : <Tag bordered={false}>Chưa tới</Tag>}
                </Flex>
                <Progress percent={pct(r.ok, r.total)} size="small" status={r.mastered ? 'success' : 'normal'}
                  format={() => `${r.ok}/${r.total}`} />
              </div>
            ))}
          </Flex>
          <Text type="secondary" style={{ display: 'block', marginTop: 12, fontSize: 13 }}>
            Đây chỉ là gợi ý. Bạn vẫn có thể mở bất kỳ bài nào và đổi trình độ bất cứ lúc nào trên trang lộ trình.
          </Text>
        </Card>
      </FadeIn>
      <Wrongs log={log} zh={zh} />
    </Flex>
  );
}

export function PlacementTest({ lang }) {
  const c = COURSES[lang], zh = !!c.noSpace;
  const [qs, setQs] = useState(null);
  const [log, setLog] = useState(null);
  const [run, setRun] = useState(0);
  const begin = () => { setQs(buildPlacement(c, zh)); setLog(null); setRun(r => r + 1); };

  // Sai quá nhiều ở cấp vừa làm → dừng
  const shouldStop = l => {
    const lv = l.at(-1)?.q.lv;
    return l.filter(x => x.q.lv === lv && !x.ok).length > PLACE_MAX_WRONG;
  };
  const first = c.levels[0].id, lastId = c.levels.at(-1).id;

  return (
    <LangTheme lang={lang}>
      <Flex vertical gap={20}>
        <Crumbs lang={lang} title="Kiểm tra xếp lớp" />
        {!qs ? (
          <Intro icon="🧭" title={`Kiểm tra xếp lớp ${c.name}`} onStart={begin} lines={[
            `Khoảng ${PLACE_PER_LEVEL * c.levels.length} câu, đi từ dễ (${first}) tới khó (${lastId}). Mất chừng 5–8 phút.`,
            'Không biết thì bấm “Mình chưa biết câu này” — đừng đoán bừa để kết quả chính xác hơn.',
            'Bài tự dừng khi các câu bắt đầu khó với bạn, rồi gợi ý trình độ phù hợp để học.'
          ]} />
        ) : log ? (
          <PlacementResult lang={lang} qs={qs} log={log} onRetry={begin} />
        ) : (
          <TestRunner key={run} lang={lang} qs={qs} shouldStop={shouldStop} onDone={setLog} allowSkip
            tagOf={q => `${q.lv} · ${LEVEL_NAME[q.lv]}`} />
        )}
      </Flex>
    </LangTheme>
  );
}

// ---------- Kiểm tra cuối cấp ----------

const CATS = ['Từ vựng', 'Nghe', 'Ngữ pháp', 'Đọc hiểu'];

function LevelResult({ lang, level, log, summary, onRetry }) {
  const c = COURSES[lang], zh = !!c.noSpace;
  const { score, passed, gained, firstPass } = summary;
  const correct = log.filter(x => x.ok).length;
  const ring = useResultRing(score, passed);
  const nextLevel = c.levels[c.levels.indexOf(level) + 1];
  const nu = nextLevel && startUnit(getProgress(), lang, nextLevel.id);

  return (
    <Flex vertical gap={16}>
      <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45, ease: EASE }}>
        <Card className="result-card lt-result">
          <Result
            icon={<Progress type="circle" percent={ring} size={132} strokeWidth={8} status={passed ? 'success' : 'normal'}
              format={() => <span className="ring-text"><b><CountFromZero value={score} />%</b><small>{correct}/{log.length} câu</small></span>} />}
            title={passed ? (firstPass ? `Bạn đã vượt cấp ${level.id}! 🏆` : 'Vẫn vững như lần trước! 👏') : 'Gần được rồi! 💪'}
            subTitle={<>
              <span className="xp-pill">+<CountFromZero value={gained} delay={0.5} /> điểm</span>
              <div style={{ marginTop: 8 }}>
                {passed
                  ? (nextLevel ? `Bạn đã sẵn sàng cho cấp ${nextLevel.id} — ${LEVEL_NAME[nextLevel.id]}.` : 'Bạn đã hoàn thành cấp cao nhất của lộ trình. Thật đáng nể!')
                  : `Cần đúng từ ${LEVEL_PASS * 100}% để vượt cấp. Ôn lại những phần còn yếu bên dưới rồi thử lại nhé.`}
              </div>
            </>}
            extra={[
              passed && nu && <Button key="next" type="primary" size="large" href={`#/c/${lang}/u/${nu.id}`}
                onClick={() => setLevel(lang, nextLevel.id)}>Học cấp {nextLevel.id} <ArrowRightOutlined /></Button>,
              !passed && <Button key="retry" type="primary" size="large" icon={<ReloadOutlined />} onClick={onRetry}>Làm lại</Button>,
              <Button key="road" size="large" href={`#/c/${lang}`}>Về lộ trình</Button>
            ].filter(Boolean)} />
        </Card>
      </motion.div>
      <FadeIn delay={0.2}>
        <Card title="Kết quả theo kỹ năng">
          <Flex vertical gap={10}>
            {CATS.map(cat => {
              const items = log.filter(x => x.q.cat === cat);
              if (!items.length) return null;
              const ok = items.filter(x => x.ok).length;
              return (
                <div key={cat}>
                  <Text strong>{cat}</Text>
                  <Progress percent={pct(ok, items.length)} size="small" status={ok / items.length >= LEVEL_PASS ? 'success' : 'normal'}
                    format={() => `${ok}/${items.length}`} />
                </div>
              );
            })}
          </Flex>
        </Card>
      </FadeIn>
      <Wrongs log={log} zh={zh} />
    </Flex>
  );
}

export default function LevelTest({ lang, levelId }) {
  const p = useProgress();
  const c = COURSES[lang], zh = !!c.noSpace;
  const level = c.levels.find(l => l.id === levelId);
  const [qs, setQs] = useState(null);
  const [res, setRes] = useState(null);
  const [run, setRun] = useState(0);

  if (!level) {
    return (
      <Result status="404" title="Không tìm thấy cấp độ này"
        extra={<Button type="primary" href={`#/c/${lang}`}>Về lộ trình</Button>} />
    );
  }

  const begin = () => { setQs(buildLevelTest(level, zh)); setRes(null); setRun(r => r + 1); };
  const best = p.levelTests?.[lang]?.[level.id]?.best;

  const finish = log => {
    const correct = log.filter(x => x.ok).length;
    const score = pct(correct, log.length), passed = score >= LEVEL_PASS * 100;
    const prev = getProgress().levelTests?.[lang]?.[level.id];
    const firstPass = passed && !prev;
    const gained = correct * 10 + (firstPass ? 100 : 0);
    update(d => {
      d.levelTests ||= {};
      if (passed) d.levelTests[lang] = { ...(d.levelTests[lang] || {}), [level.id]: { best: Math.max(prev?.best || 0, score), date: today() } };
      addXp(d, gained);
    });
    setRes({ log, summary: { score, passed, gained, firstPass } });
  };

  return (
    <LangTheme lang={lang}>
      <Flex vertical gap={20}>
        <Crumbs lang={lang} title={`Kiểm tra cuối cấp ${level.id}`} />
        {!qs ? (
          <Intro icon="🏆" title={`Kiểm tra cuối cấp ${level.id} · ${LEVEL_NAME[level.id]}`} onStart={begin}
            startText={best != null ? 'Làm lại bài kiểm tra' : 'Bắt đầu'} lines={[
              `25 câu tổng hợp cả ${level.units.length} bài của cấp: từ vựng, nghe, ngữ pháp và đọc hiểu.`,
              `Đúng từ ${LEVEL_PASS * 100}% trở lên là vượt cấp và nhận huy hiệu trên lộ trình.`,
              best != null ? `Bạn đã vượt cấp này với ${best}%. Làm lại để ôn tập hoặc nâng điểm nhé!` : 'Mất chừng 10 phút. Bật loa để làm phần nghe.'
            ]} />
        ) : res ? (
          <LevelResult lang={lang} level={level} log={res.log} summary={res.summary} onRetry={begin} />
        ) : (
          <TestRunner key={run} lang={lang} qs={qs} onDone={finish} tagOf={q => q.cat} />
        )}
      </Flex>
    </LangTheme>
  );
}
