import { useEffect, useRef, useState } from 'react';
import { Button, Card, Flex, Input, List, Progress, Result, Typography } from 'antd';
import { ArrowRightOutlined, BookOutlined, CheckCircleFilled, CloseCircleFilled, FireFilled, ReloadOutlined, SoundFilled } from '@ant-design/icons';
import { AnimatePresence, motion } from 'framer-motion';
import { COURSES, allUnits } from '../lib/courses.js';
import { PASS, addXp, getProgress, logAnswer, update } from '../lib/store.js';
import { speak } from '../lib/speech.js';
import { play } from '../lib/sfx.js';
import { celebrate } from '../lib/celebrate.js';
import { buildQuiz, checkFill, checkOrder, rightText } from '../lib/quiz.js';
import { dayStr, pct, today } from '../lib/utils.js';
import { Pinyin, SoundButton, WithBlank } from '../components/common.jsx';
import { CountFromZero, EASE, FadeIn } from '../components/motion.jsx';

const { Text } = Typography;
const PRAISE = ['Chính xác!', 'Tuyệt vời!', 'Giỏi lắm!', 'Đúng rồi!', 'Xuất sắc!'];

function QuizResult({ u, lang, idx, summary, correct, total, wrongs, onRetry, onGoStep }) {
  const zh = !!COURSES[lang].noSpace;
  const nx = allUnits(lang)[idx + 1];
  const { score, passed, gained, firstPass } = summary;
  const [ring, setRing] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setRing(score), 150);
    const c = passed ? setTimeout(celebrate, 250) : null;
    play(passed ? 'complete' : 'pop');
    return () => { clearTimeout(t); clearTimeout(c); };
  }, []);
  return (
    <Flex vertical gap={16}>
      <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45, ease: EASE }}>
        <Card className="result-card">
          <Result
            icon={<Progress type="circle" percent={ring} size={132} strokeWidth={8} status={passed ? 'success' : 'normal'}
              format={() => <span className="ring-text"><b><CountFromZero value={score} />%</b><small>{correct}/{total} câu</small></span>} />}
            title={passed ? (firstPass ? 'Hoàn thành bài học! 🎉' : 'Làm tốt lắm! 👏') : 'Gần được rồi! 💪'}
            subTitle={<>
              <span className="xp-pill">+<CountFromZero value={gained} delay={0.5} /> điểm</span>
              <div style={{ marginTop: 8 }}>
                {passed
                  ? (firstPass ? `${u.vocab.length} từ mới đã được thêm vào danh sách ôn tập.` : 'Bạn đã nắm vững bài này.')
                  : `Cần đúng từ ${PASS * 100}% để hoàn thành bài này. Nên xem lại bài rồi làm lại trước khi học tiếp.`}
              </div>
            </>}
            extra={[
              passed && nx && <Button key="next" type="primary" size="large" href={`#/c/${lang}/u/${nx.id}`}>Học bài tiếp theo <ArrowRightOutlined /></Button>,
              !passed && <Button key="review" type="primary" size="large" icon={<BookOutlined />} onClick={() => onGoStep(0)}>Xem lại từ vựng</Button>,
              !passed && nx && <Button key="skip" size="large" href={`#/c/${lang}/u/${nx.id}`}>Sang bài tiếp theo</Button>,
              <Button key="retry" size="large" icon={<ReloadOutlined />} onClick={onRetry}>Làm lại</Button>,
              <Button key="road" size="large" href={`#/c/${lang}`}>Về lộ trình</Button>
            ].filter(Boolean)} />
        </Card>
      </motion.div>
      {wrongs.length > 0 && (
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
      )}
    </Flex>
  );
}

// Thanh cố định dưới đáy: nút Kiểm tra, hoặc kết quả đúng/sai + Tiếp tục
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
              <div className="sheet-title">{ans.ok ? (ans.note ? 'Gần đúng!' : PRAISE[i % PRAISE.length]) : 'Chưa đúng rồi'}</div>
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

export default function QuizStep({ u, lang, idx, onGoStep }) {
  const zh = !!COURSES[lang].noSpace, tag = COURSES[lang].tts;
  const [qs, setQs] = useState(() => buildQuiz(u, zh));
  const [i, setI] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [combo, setCombo] = useState(0);
  const [wrongs, setWrongs] = useState([]);
  const [ans, setAns] = useState(null);
  const [fill, setFill] = useState('');
  const [picked, setPicked] = useState([]);
  const [summary, setSummary] = useState(null);
  const nextBtn = useRef(null);
  const sayTimer = useRef(null);
  useEffect(() => () => clearTimeout(sayTimer.current), []);
  const q = qs[i];

  const restart = () => {
    setQs(buildQuiz(u, zh)); setI(0); setCorrect(0); setCombo(0); setWrongs([]);
    setAns(null); setFill(''); setPicked([]); setSummary(null);
  };

  const answer = (ok, extra = {}) => {
    if (ans) return;
    setAns({ ok, ...extra });
    play(ok ? 'correct' : 'wrong');
    logAnswer({ lang, uid: u.id, type: q.type, ok, q });
    if (ok) { setCorrect(c => c + 1); setCombo(c => c + 1); } else { setWrongs(w => [...w, q]); setCombo(0); }
    if (q.say) sayTimer.current = setTimeout(() => speak(q.say, tag), 350);
  };

  const finish = () => {
    const score = pct(correct, qs.length), passed = score >= PASS * 100;
    const before = getProgress().units[u.id] || {};
    const firstPass = passed && !before.done;
    const gained = correct * 10 + (firstPass ? 50 : 0);
    update(d => {
      d.units[u.id] = { done: !!before.done || passed, best: Math.max(before.best || 0, score), date: today() };
      addXp(d, gained);
      if (passed) u.vocab.forEach((v, k) => {
        const key = `${lang}|${u.id}|${k}`;
        if (!d.srs[key]) d.srs[key] = { box: 0, due: dayStr(1) };
      });
    });
    setSummary({ score, passed, gained, firstPass });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const next = () => {
    clearTimeout(sayTimer.current);
    if (i + 1 >= qs.length) return finish();
    setI(i + 1); setAns(null); setFill(''); setPicked([]);
  };

  const check = () => {
    if (q.type === 'fill') { if (fill.trim()) { const r = checkFill(q, fill, zh); answer(r.ok, { note: r.note }); } }
    else if (q.type === 'order') { if (picked.length) answer(checkOrder(q, picked)); }
  };

  // Câu nghe: tự phát âm khi mở câu
  useEffect(() => {
    if (summary || !q || q.type !== 'listen') return;
    const t = setTimeout(() => speak(q.say, tag), 450);
    return () => clearTimeout(t);
  }, [i, summary]);

  useEffect(() => {
    if (!ans) return;
    const t = setTimeout(() => nextBtn.current?.focus(), 60);
    return () => clearTimeout(t);
  }, [ans]);

  // Phím tắt: 1–4 chọn đáp án, Enter để kiểm tra / tiếp tục
  useEffect(() => {
    const h = e => {
      if (summary || e.target.tagName === 'INPUT') return;
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

  if (summary) {
    return <QuizResult u={u} lang={lang} idx={idx} summary={summary} correct={correct} total={qs.length}
      wrongs={wrongs} onRetry={restart} onGoStep={onGoStep} />;
  }

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
            <Text type="secondary" className="q-kind">{q.kind}</Text>

            {q.type === 'listen' ? (
              <Flex justify="center" style={{ margin: '20px 0 24px' }}>
                <Button type="primary" shape="circle" className="listen-btn" icon={<SoundFilled />} onClick={() => speak(q.say, tag)} aria-label="Nghe lại" />
              </Flex>
            ) : (
              <div className="q-text">
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
          </Card>
      </motion.div>

      {isMc && !ans && <Text type="secondary" className="kbd-hint">Mẹo: bấm phím 1–4 để chọn nhanh</Text>}
      <div className="sheet-spacer" />
      <BottomSheet key={i + (ans ? '-a' : '-q')} ans={ans} q={q} zh={zh} i={i} last={i + 1 >= qs.length}
        canCheck={canCheck} showCheck={!isMc} onCheck={check} onNext={next} nextRef={nextBtn} />
    </div>
  );
}
