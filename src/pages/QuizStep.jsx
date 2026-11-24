import { useEffect, useRef, useState } from 'react';
import { Alert, Button, Card, Flex, Input, List, Progress, Result, Typography } from 'antd';
import { ArrowRightOutlined, BookOutlined, CheckCircleFilled, CloseCircleFilled, ReloadOutlined, SoundFilled } from '@ant-design/icons';
import { COURSES, allUnits } from '../lib/courses.js';
import { PASS, addXp, getProgress, update } from '../lib/store.js';
import { speak } from '../lib/speech.js';
import { buildQuiz, checkFill, checkOrder, rightText } from '../lib/quiz.js';
import { dayStr, pct, today } from '../lib/utils.js';
import { Pinyin, SoundButton, WithBlank } from '../components/common.jsx';

const { Text, Title } = Typography;
const PRAISE = ['Chính xác!', 'Tuyệt vời!', 'Giỏi lắm!', 'Đúng rồi!'];

function QuizResult({ u, lang, idx, summary, correct, total, wrongs, onRetry, onGoStep }) {
  const zh = !!COURSES[lang].noSpace;
  const nx = allUnits(lang)[idx + 1];
  const { score, passed, gained, firstPass } = summary;
  return (
    <Flex vertical gap={16}>
      <Card>
        <Result
          icon={<Progress type="circle" percent={score} size={128} status={passed ? 'success' : 'normal'}
            format={() => <span className="ring-text"><b>{score}%</b><small>{correct}/{total} câu</small></span>} />}
          title={passed ? (firstPass ? 'Hoàn thành bài học! 🎉' : 'Làm tốt lắm! 👏') : 'Gần được rồi! 💪'}
          subTitle={passed
            ? `+${gained} điểm${firstPass ? ` · ${u.vocab.length} từ mới đã được thêm vào danh sách ôn tập` : ''}`
            : `+${gained} điểm · Cần đúng từ ${PASS * 100}% để mở bài tiếp theo. Xem lại bài rồi thử lại nhé.`}
          extra={[
            passed && nx && <Button key="next" type="primary" size="large" href={`#/c/${lang}/u/${nx.id}`}>Học bài tiếp theo <ArrowRightOutlined /></Button>,
            !passed && <Button key="review" type="primary" size="large" icon={<BookOutlined />} onClick={() => onGoStep(0)}>Xem lại từ vựng</Button>,
            <Button key="retry" size="large" icon={<ReloadOutlined />} onClick={onRetry}>Làm lại</Button>,
            <Button key="road" size="large" href={`#/c/${lang}`}>Về lộ trình</Button>
          ].filter(Boolean)} />
      </Card>
      {wrongs.length > 0 && (
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
      )}
    </Flex>
  );
}

export default function QuizStep({ u, lang, idx, onGoStep }) {
  const zh = !!COURSES[lang].noSpace, tag = COURSES[lang].tts;
  const [qs, setQs] = useState(() => buildQuiz(u, zh));
  const [i, setI] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrongs, setWrongs] = useState([]);
  const [ans, setAns] = useState(null);
  const [fill, setFill] = useState('');
  const [picked, setPicked] = useState([]);
  const [summary, setSummary] = useState(null);
  const nextBtn = useRef(null);
  const q = qs[i];

  const restart = () => {
    setQs(buildQuiz(u, zh)); setI(0); setCorrect(0); setWrongs([]);
    setAns(null); setFill(''); setPicked([]); setSummary(null);
  };

  const answer = (ok, extra = {}) => {
    if (ans) return;
    setAns({ ok, ...extra });
    if (ok) setCorrect(c => c + 1); else setWrongs(w => [...w, q]);
    if (q.say) speak(q.say, tag);
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
    if (i + 1 >= qs.length) return finish();
    setI(i + 1); setAns(null); setFill(''); setPicked([]);
  };

  const check = () => {
    if (q.type === 'fill') { if (fill.trim()) { const r = checkFill(q, fill); answer(r.ok, { note: r.note }); } }
    else if (q.type === 'order') { if (picked.length) answer(checkOrder(q, picked)); }
  };

  // Câu nghe: tự phát âm khi mở câu
  useEffect(() => {
    if (summary || !q || q.type !== 'listen') return;
    const t = setTimeout(() => speak(q.say, tag), 300);
    return () => clearTimeout(t);
  }, [i, summary]);

  useEffect(() => { if (ans) nextBtn.current?.focus(); }, [ans]);

  // Phím tắt: 1–4 chọn đáp án, Enter để kiểm tra / tiếp tục
  useEffect(() => {
    const h = e => {
      if (summary || e.target.tagName === 'INPUT') return;
      const isMc = q.type === 'mc' || q.type === 'listen';
      if (isMc && !ans && /^[1-4]$/.test(e.key) && +e.key <= q.options.length) answer(+e.key - 1 === q.answer, { choice: +e.key - 1 });
      else if (e.key === 'Enter' && document.activeElement?.tagName !== 'BUTTON') { if (ans) next(); else check(); }
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

  return (
    <div className="quiz">
      <Flex align="center" gap={12} style={{ marginBottom: 16 }}>
        <Progress percent={pct(i + (ans ? 1 : 0), qs.length)} showInfo={false} style={{ flex: 1, margin: 0 }} />
        <Text type="secondary">{i + 1}/{qs.length}</Text>
      </Flex>

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
              const cls = ans ? (k === q.answer ? ' right' : k === ans.choice ? ' wrong' : ' dim') : '';
              return (
                <button key={k} className={'opt' + cls} disabled={!!ans} onClick={() => answer(k === q.answer, { choice: k })}>
                  <span className="opt-key">{k + 1}</span>
                  <span className="opt-text">{o}</span>
                  {ans && k === q.answer && <CheckCircleFilled className="opt-icon" />}
                  {ans && k === ans.choice && k !== q.answer && <CloseCircleFilled className="opt-icon" />}
                </button>
              );
            })}
          </Flex>
        )}

        {q.type === 'fill' && (
          <Input size="large" autoFocus value={fill} disabled={!!ans} status={ans && !ans.ok ? 'error' : ''}
            onChange={e => setFill(e.target.value)} onPressEnter={check} autoComplete="off" spellCheck={false}
            placeholder={zh ? 'Gõ chữ Hán hoặc pinyin (không dấu cũng được)' : 'Gõ đáp án của bạn'} />
        )}

        {q.type === 'order' && (
          <>
            <div className={'order-answer' + (ans ? (ans.ok ? ' ok' : ' no') : '')}>
              {picked.length
                ? picked.map((k, j) => (
                  <button key={j} className="chip" disabled={!!ans} onClick={() => setPicked(picked.filter((_, x) => x !== j))}>{q.words[k]}</button>
                ))
                : <Text type="secondary">Chạm vào các từ bên dưới theo đúng thứ tự</Text>}
            </div>
            <Flex wrap gap={8}>
              {q.words.map((w, k) => (
                <button key={k} className={'chip' + (picked.includes(k) ? ' used' : '')} disabled={!!ans || picked.includes(k)}
                  onClick={() => setPicked([...picked, k])}>{w}</button>
              ))}
            </Flex>
          </>
        )}

        {ans && (
          <Alert style={{ marginTop: 18 }} type={ans.ok ? 'success' : 'error'} showIcon
            message={<b>{ans.ok ? (ans.note ? 'Gần đúng!' : PRAISE[i % PRAISE.length]) : 'Chưa đúng rồi'}</b>}
            description={(ans.note || !ans.ok || q.explain) && (
              <>
                {ans.note && <div>{ans.note}</div>}
                {(!ans.ok || ans.note) && <div>Đáp án đúng: <Text strong>{rightText(q, zh)}</Text></div>}
                {q.explain && <div>{q.explain}</div>}
              </>
            )} />
        )}
      </Card>

      <Flex justify="flex-end" style={{ marginTop: 16 }}>
        {ans
          ? <Button ref={nextBtn} type="primary" size="large" className="cta" onClick={next}>
              {i + 1 < qs.length ? 'Tiếp tục' : 'Xem kết quả'} <ArrowRightOutlined />
            </Button>
          : !isMc && <Button type="primary" size="large" className="cta" disabled={!canCheck} onClick={check}>Kiểm tra</Button>}
      </Flex>
      {isMc && !ans && <Text type="secondary" className="kbd-hint">Mẹo: bấm phím 1–4 để chọn nhanh</Text>}
    </div>
  );
}
