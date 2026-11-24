import { useEffect, useMemo, useRef, useState } from 'react';
import { Alert, App, Avatar, Button, Card, Flex, Progress, Result, Segmented, Space, Switch, Tag, Typography } from 'antd';
import { AimOutlined, AudioOutlined, LeftOutlined, ReloadOutlined, RightOutlined, SoundOutlined, SwapOutlined, TeamOutlined } from '@ant-design/icons';
import { COURSES } from '../lib/courses.js';
import { addXp, update, useProgress } from '../lib/store.js';
import { SPEAK_PASS, bestMatch, finishRec, getSR, listen, speak, stopRec, stopSpeaking } from '../lib/speech.js';
import { pct, splitUnits } from '../lib/utils.js';
import { ChatLine, MarkedText, Pinyin } from '../components/common.jsx';
import { motion } from 'framer-motion';
import { play } from '../lib/sfx.js';
import { sparkle } from '../lib/celebrate.js';
import { EASE } from '../components/motion.jsx';

const { Title, Text, Paragraph } = Typography;

function speakItems(u) {
  const seen = new Set();
  return [...u.dialogue, ...u.grammar.examples].filter(x => !seen.has(x.t) && seen.add(x.t));
}

function verdict(score) {
  if (score >= SPEAK_PASS) return { type: 'success', text: score === 100 ? 'Hoàn hảo!' : 'Tốt lắm!' };
  if (score >= 50) return { type: 'warning', text: 'Gần được rồi, thử lại nhé!' };
  return { type: 'error', text: 'Chưa khớp. Nghe lại mẫu rồi nói chậm, rõ hơn nhé.' };
}

function SpeakFeedback({ r }) {
  const v = verdict(r.score);
  return (
    <motion.div style={{ width: '100%' }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, ease: EASE }}>
    <Alert type={v.type} showIcon style={{ width: '100%' }}
      message={<b>{r.score}% · {v.text}</b>}
      description={<>{r.heard ? <>Máy nghe được: “{r.heard}”</> : 'Không nghe được gì.'}{r.score < 100 && ' Những từ gạch đỏ là chỗ chưa rõ.'}</>} />
    </motion.div>
  );
}

function MicButton({ listening, onClick }) {
  return (
    <div className="mic-wrap">
      {listening && [0, 1, 2].map(k => <span key={k} className="mic-ring" style={{ animationDelay: `${k * 0.5}s` }} />)}
      <Button type="primary" danger={listening} shape="circle" className={'mic' + (listening ? ' on' : '')}
        icon={<AudioOutlined />} onClick={onClick} disabled={!getSR()} aria-label={listening ? 'Dừng' : 'Bấm để nói'} />
    </div>
  );
}

// Hook dùng chung: bấm micro, nghe, chấm điểm
function useMic(lang, onResult) {
  const { message } = App.useApp();
  const [listening, setListening] = useState(false);
  const [interim, setInterim] = useState('');
  useEffect(() => () => stopRec(), []);
  const start = target => {
    if (listening) return finishRec();
    setListening(true); setInterim('');
    listen(COURSES[lang].tts, {
      onInterim: setInterim,
      onError: m => message.warning(m),
      onDone: cands => {
        setListening(false); setInterim('');
        const best = bestMatch(target, cands);
        if (best) {
          play(best.score >= SPEAK_PASS ? 'correct' : best.score >= 50 ? 'pop' : 'wrong');
          if (best.score === 100) sparkle(0.5, 0.45);
        }
        onResult(best);
      }
    });
  };
  const cancel = () => { stopRec(); setListening(false); setInterim(''); };
  return { listening, interim, start, cancel };
}

function SentenceMode({ u, lang }) {
  const p = useProgress();
  const items = useMemo(() => speakItems(u), [u]);
  const [i, setI] = useState(0);
  const [hide, setHide] = useState(false);
  const [res, setRes] = useState({});
  const at = useRef(0);
  const mic = useMic(lang, best => {
    const k = at.current;
    if (!best) return;
    setRes(s => ({ ...s, [k]: best }));
    if (best.score >= SPEAK_PASS) {
      update(d => {
        const done = d.spoken[u.id] || (d.spoken[u.id] = []);
        if (!done.includes(k)) { done.push(k); addXp(d, 5); }
      });
    }
  });
  const it = items[i], r = res[i], passed = new Set(p.spoken[u.id] || []);
  const tag = COURSES[lang].tts;
  const goTo = k => { mic.cancel(); setI(k); };
  const hidden = hide && !r;

  return (
    <Flex vertical gap={16}>
      <Flex justify="space-between" align="center" wrap gap={12}>
        <Flex vertical gap={4}>
          <Text type="secondary">Câu {i + 1}/{items.length} · đã nói đạt {passed.size} câu</Text>
          <Progress steps={items.length} size={[14, 8]} percent={pct(passed.size, items.length)} showInfo={false} />
        </Flex>
        <Space><Switch checked={hide} onChange={setHide} /><Text>Ẩn câu: nghe rồi nhắc lại</Text></Space>
      </Flex>

      <Card>
        <Flex vertical align="center" gap={12} className="speak-box">
          {it.s && <Text type="secondary">{it.s}:</Text>}
          <div className={'speak-sentence' + (hidden ? ' blur' : '')}><MarkedText text={it.t} result={r} /></div>
          <Pinyin text={it.py} blur={hidden} />
          <Text type="secondary">{it.vi}</Text>
          <Space wrap style={{ justifyContent: 'center' }}>
            <Button icon={<SoundOutlined />} onClick={() => speak(it.t, tag)}>Nghe mẫu</Button>
            <Button icon={<SoundOutlined />} onClick={() => speak(it.t, tag, { rate: 0.6 })}>Nghe chậm</Button>
          </Space>
          <MicButton listening={mic.listening} onClick={() => { at.current = i; setRes(s => { const n = { ...s }; delete n[i]; return n; }); mic.start(it.t); }} />
          <Text type="secondary">{mic.listening ? 'Đang nghe… đọc to câu trên rồi dừng lại' : 'Bấm micro rồi đọc to câu trên'}</Text>
          {mic.interim && <Text italic>“{mic.interim}”</Text>}
          {r && <SpeakFeedback r={r} />}
        </Flex>
      </Card>

      <Flex justify="space-between">
        <Button size="large" disabled={!i} icon={<LeftOutlined />} onClick={() => goTo(i - 1)}>Câu trước</Button>
        <Button size="large" type={r && r.score >= SPEAK_PASS ? 'primary' : 'default'} disabled={i === items.length - 1} onClick={() => goTo(i + 1)}>
          Câu tiếp <RightOutlined />
        </Button>
      </Flex>
    </Flex>
  );
}

function RolePlay({ u, lang }) {
  const tag = COURSES[lang].tts;
  const who = [...new Set(u.dialogue.map(l => l.s))];
  const [role, setRole] = useState(null);
  const [hideText, setHideText] = useState(false);
  const [i, setI] = useState(0);
  const [res, setRes] = useState({});
  const at = useRef(0);
  const bottom = useRef(null);
  const mic = useMic(lang, best => { if (best) setRes(s => ({ ...s, [at.current]: best })); });

  const end = i >= u.dialogue.length;
  const cur = u.dialogue[i];
  const botTurn = role && !end && cur.s !== role;

  // Lượt của máy: đọc câu rồi tự chuyển lượt
  useEffect(() => {
    if (!botTurn) return;
    let alive = true;
    const t = setTimeout(() => speak(cur.t, tag, { onend: () => alive && setTimeout(() => alive && setI(x => (x === i ? x + 1 : x)), 350) }), 300);
    return () => { alive = false; clearTimeout(t); };
  }, [botTurn, i]);
  useEffect(() => () => stopSpeaking(), []);
  useEffect(() => { if (role) bottom.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); }, [i, res, role]);

  const restart = r => { mic.cancel(); stopSpeaking(); setRole(r); setI(0); setRes({}); };

  if (!role) {
    return (
      <Card>
        <Flex vertical align="center" gap={12} style={{ textAlign: 'center', padding: '8px 0' }}>
          <div style={{ fontSize: 44 }}>🎭</div>
          <Title level={4} style={{ margin: 0 }}>Nhập vai hội thoại</Title>
          <Paragraph type="secondary" style={{ maxWidth: 520 }}>
            Bạn đóng một nhân vật, máy đọc lời nhân vật còn lại. Đến lượt bạn thì bấm micro và nói.
            Nghĩa tiếng Việt luôn hiện để bạn biết cần nói gì.
          </Paragraph>
          <Space><Switch checked={hideText} onChange={setHideText} /><Text>Ẩn câu gốc (khó hơn)</Text></Space>
          <Text strong style={{ marginTop: 8 }}>Bạn muốn đóng vai ai?</Text>
          <Flex gap={12} wrap justify="center">
            {who.map(s => (
              <Button key={s} size="large" onClick={() => restart(s)} icon={<Avatar size="small">{[...s][0]}</Avatar>}>{s}</Button>
            ))}
          </Flex>
        </Flex>
      </Card>
    );
  }

  const shown = end ? u.dialogue : u.dialogue.slice(0, i + 1);
  const scores = Object.values(res).map(r => r.score);
  const avg = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
  const mineNow = !end && !botTurn, r = res[i];

  return (
    <Flex vertical gap={16}>
      <Card>
        <div className="chat">
          {shown.map((l, k) => {
            const mine = l.s === role, rk = res[k];
            return (
              <ChatLine key={k} l={l} lang={lang} right={mine} highlight={mine && k === i && !end}
                blur={mine && !rk && hideText} textNode={mine ? <MarkedText text={l.t} result={rk} /> : null}>
                {mine && rk && <Tag color={rk.score >= SPEAK_PASS ? 'success' : 'warning'} bordered={false} style={{ marginTop: 6 }}>{rk.skipped ? 'Bỏ qua' : rk.score + '%'}</Tag>}
              </ChatLine>
            );
          })}
        </div>
        <div ref={bottom} />
      </Card>

      {end && (
        <Card>
          <Result status={avg >= SPEAK_PASS ? 'success' : 'info'}
            title={`Điểm nói trung bình: ${avg}%`}
            subTitle={avg >= SPEAK_PASS ? `Bạn nhập vai ${role} rất tốt!` : 'Luyện thêm vài lần nữa là sẽ trôi chảy hơn.'}
            extra={[
              <Button key="again" type="primary" size="large" icon={<ReloadOutlined />} onClick={() => restart(role)}>Nhập vai lại</Button>,
              <Button key="swap" size="large" icon={<SwapOutlined />} onClick={() => restart(null)}>Đổi vai</Button>
            ]} />
        </Card>
      )}

      {botTurn && (
        <Flex justify="center" align="center" gap={12}>
          <Text type="secondary"><SoundOutlined /> {cur.s} đang nói…</Text>
          <Button onClick={() => { stopSpeaking(); setI(i + 1); }}>Tiếp</Button>
        </Flex>
      )}

      {mineNow && (
        <Card>
          <Flex vertical align="center" gap={10}>
            <Text strong>Đến lượt bạn: hãy nói “{cur.vi}”</Text>
            <MicButton listening={mic.listening} onClick={() => { at.current = i; mic.start(cur.t); }} />
            {mic.interim && <Text italic>“{mic.interim}”</Text>}
            {r && <SpeakFeedback r={r} />}
            <Space wrap style={{ justifyContent: 'center' }}>
              <Button icon={<SoundOutlined />} onClick={() => speak(cur.t, tag, { rate: 0.8 })}>Nghe gợi ý</Button>
              {r
                ? <Button type="primary" onClick={() => setI(i + 1)}>Tiếp tục <RightOutlined /></Button>
                : <Button onClick={() => { mic.cancel(); setRes(s => ({ ...s, [i]: { heard: '', score: 0, skipped: true, ok: splitUnits(cur.t).map(() => false) } })); setI(i + 1); }}>Bỏ qua</Button>}
            </Space>
          </Flex>
        </Card>
      )}
    </Flex>
  );
}

export default function SpeakStep({ u, lang }) {
  const [mode, setMode] = useState('sent');
  return (
    <Flex vertical gap={16}>
      {!getSR() && (
        <Alert type="info" showIcon
          message="Để luyện nói, hãy mở trang bằng Google Chrome hoặc Microsoft Edge"
          description="Trình duyệt bạn đang dùng chưa nghe được giọng nói. Bạn vẫn có thể nghe mẫu và tập đọc theo." />
      )}
      <Segmented block size="large" value={mode} onChange={v => { stopRec(); stopSpeaking(); setMode(v); }} options={[
        { label: 'Luyện từng câu', value: 'sent', icon: <AimOutlined /> },
        { label: 'Nhập vai', value: 'role', icon: <TeamOutlined /> }
      ]} />
      {mode === 'sent' ? <SentenceMode u={u} lang={lang} /> : <RolePlay u={u} lang={lang} />}
    </Flex>
  );
}
