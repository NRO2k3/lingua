import { useState } from 'react';
import { Alert, App, Button, Card, Col, Flex, List, Result, Row, Segmented, Space, Switch, Table, Tag, Typography } from 'antd';
import {
  ArrowLeftOutlined, ArrowRightOutlined, AudioOutlined, BookOutlined, BulbFilled, BulbOutlined, CloseOutlined, CreditCardOutlined,
  LeftOutlined, MessageOutlined, PlayCircleOutlined, ReadOutlined, RightOutlined, TrophyOutlined, UnorderedListOutlined
} from '@ant-design/icons';
import { COURSES, LEVEL_NAME, findUnit } from '../lib/courses.js';
import { useProgress } from '../lib/store.js';
import { speakAll, stopRec, stopSpeaking } from '../lib/speech.js';
import { ChatLine, Flashcard, HanViet, LangTheme, Pinyin, SoundButton } from '../components/common.jsx';
import SpeakStep from './SpeakStep.jsx';
import QuizStep from './QuizStep.jsx';
import ReadingStep from './ReadingStep.jsx';
import { motion } from 'framer-motion';
import { play } from '../lib/sfx.js';
import { EASE, Item, Stagger } from '../components/motion.jsx';
import '../styles/lesson.css';

const { Title, Text, Paragraph } = Typography;

// Các bước của một bài; bước Đọc hiểu chỉ có khi bài có bài đọc
const stepsFor = u => [
  { title: 'Từ vựng', icon: <BookOutlined />, Body: VocabStep },
  { title: 'Ngữ pháp', icon: <BulbOutlined />, Body: GrammarStep },
  { title: 'Hội thoại', icon: <MessageOutlined />, Body: DialogueStep },
  u.reading && { title: 'Đọc hiểu', icon: <ReadOutlined />, Body: ReadingStep },
  { title: 'Luyện nói', icon: <AudioOutlined />, Body: SpeakStep },
  { title: 'Kiểm tra', icon: <TrophyOutlined />, Body: QuizStep }
].filter(Boolean);

function VocabStep({ u, lang }) {
  const [mode, setMode] = useState('list');
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const move = d => { setI((i + d + u.vocab.length) % u.vocab.length); setFlipped(false); };
  return (
    <Flex vertical gap={16}>
      <Flex justify="space-between" align="center" wrap gap={12}>
        <Text type="secondary">Bấm 🔊 để nghe, rồi đọc to theo. Đọc thành tiếng giúp nhớ lâu hơn.</Text>
        <Segmented value={mode} onChange={setMode} options={[
          { label: 'Danh sách', value: 'list', icon: <UnorderedListOutlined /> },
          { label: 'Thẻ ghi nhớ', value: 'flash', icon: <CreditCardOutlined /> }
        ]} />
      </Flex>
      {mode === 'list' ? (
        <Stagger><Row gutter={[12, 12]}>
          {u.vocab.map((v, k) => (
            <Col xs={24} md={12} key={v.w}>
              <Item style={{ height: '100%' }}><Card size="small" className="vocab-card">
                <Flex gap={12} align="start">
                  <SoundButton text={v.w} lang={lang} type="default" />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <Flex wrap gap={8} align="baseline">
                      <span className="vocab-word">{v.w}</span>
                      <Text type="secondary">{v.ipa}</Text>
                      <HanViet text={v.hv} />
                      {u.coreCount > 0 && k >= u.coreCount && <Tag bordered={false} color="purple" style={{ marginInlineEnd: 0 }}>Mở rộng</Tag>}
                    </Flex>
                    <div className="vocab-mean">{v.vi}</div>
                    <div className="vocab-ex">
                      <Flex gap={4} align="center">
                        <span>{v.ex}</span>
                        <SoundButton text={v.ex} lang={lang} size="small" />
                      </Flex>
                      <Pinyin text={v.exPy} />
                      <Text type="secondary" italic>{v.exVi}</Text>
                    </div>
                  </div>
                </Flex>
              </Card></Item>
            </Col>
          ))}
        </Row></Stagger>
      ) : (
        <Flex vertical align="center" gap={16}>
          <motion.div key={i} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, ease: EASE }} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Flashcard v={u.vocab[i]} lang={lang} flipped={flipped} onFlip={() => { play('flip'); setFlipped(!flipped); }} />
          </motion.div>
          <Flex align="center" gap={16}>
            <Button shape="circle" size="large" icon={<LeftOutlined />} onClick={() => move(-1)} aria-label="Thẻ trước" />
            <Text>{i + 1} / {u.vocab.length}</Text>
            <Button shape="circle" size="large" icon={<RightOutlined />} onClick={() => move(1)} aria-label="Thẻ sau" />
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}

function GrammarStep({ u, lang }) {
  const g = u.grammar;
  const hasTable = g.table && g.table.length > 1;
  return (
    <Card title={<Space><BulbOutlined />{g.title}</Space>}>
      {g.explain.map((t, k) => <Paragraph key={k} className="grammar-p">{t}</Paragraph>)}
      {hasTable && (
        <Table size="small" bordered pagination={false} scroll={{ x: true }} style={{ marginBottom: 20 }}
          columns={g.table[0].map((h, ci) => ({ title: h, dataIndex: String(ci), key: ci }))}
          dataSource={g.table.slice(1).map((r, ri) => ({ key: ri, ...Object.fromEntries(r.map((c, ci) => [String(ci), c])) }))} />
      )}
      <Title level={5}>Ví dụ</Title>
      <List dataSource={g.examples} renderItem={e => (
        <List.Item>
          <Flex gap={12} align="start">
            <SoundButton text={e.t} lang={lang} type="default" />
            <div>
              <div className="ex-text">{e.t}</div>
              <Pinyin text={e.py} />
              <Text type="secondary">{e.vi}</Text>
            </div>
          </Flex>
        </List.Item>
      )} />
      {g.tip && <Alert type="warning" showIcon icon={<BulbFilled />} message="Mẹo nhỏ" description={g.tip} style={{ marginTop: 16 }} />}
    </Card>
  );
}

function DialogueStep({ u, lang }) {
  const [showVi, setShowVi] = useState(true);
  const who = [...new Set(u.dialogue.map(l => l.s))];
  return (
    <Flex vertical gap={16}>
      <Flex justify="space-between" align="center" wrap gap={12}>
        <Button type="primary" className="btn-3d" icon={<PlayCircleOutlined />} onClick={() => speakAll(u.dialogue, COURSES[lang].tts)}>Nghe cả đoạn</Button>
        <Space><Switch checked={showVi} onChange={setShowVi} /><Text>Hiện bản dịch</Text></Space>
      </Flex>
      <Card>
        <div className="chat">
          {u.dialogue.map((l, k) => <ChatLine key={k} l={l} lang={lang} right={who.indexOf(l.s) % 2 === 1} showVi={showVi} />)}
        </div>
      </Card>
    </Flex>
  );
}

// Thanh trên của chế độ tập trung: nút ✕ + thanh tiến độ phân đoạn (mỗi đoạn là một bước, bấm để chuyển)
function LessonBar({ steps, step, onStep, onExit, u, idx }) {
  return (
    <div className="lbar">
      <div className="lbar-inner">
        <Button type="text" className="lbar-x" icon={<CloseOutlined />} onClick={onExit} aria-label="Thoát bài học, về lộ trình" />
        <nav className="lbar-steps" aria-label="Các bước của bài học">
          <ol>
            {steps.map((s, k) => (
              <li key={s.title}>
                <button type="button" className={'seg-btn' + (k < step ? ' done' : k === step ? ' cur' : '')}
                  aria-current={k === step ? 'step' : undefined} aria-label={`Bước ${k + 1}: ${s.title}${k < step ? ' (đã qua)' : ''}`}
                  title={s.title} onClick={() => onStep(k)}>
                  <span className="seg" aria-hidden="true">
                    <span className="seg-fill" />
                    <span className="seg-ico">{s.icon}</span>
                    <span className="seg-lbl">{s.title}</span>
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </nav>
      </div>
      <div className="lbar-meta">
        <span className="lbar-step">Bước {step + 1}/{steps.length} · <b>{steps[step].title}</b></span>
        {step > 0 && <span className="lbar-title">{u.icon || '📘'} Bài {idx + 1}: {u.title}</span>}
      </div>
    </div>
  );
}

export default function Lesson({ lang, uid }) {
  useProgress();
  const { modal } = App.useApp();
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [quizBusy, setQuizBusy] = useState(false);
  const { unit: u, idx } = findUnit(lang, uid);

  if (!u) {
    return <Result status="404" title="Không tìm thấy bài học" extra={<Button type="primary" href={`#/c/${lang}`}>Về lộ trình</Button>} />;
  }

  const go = s => { stopRec(); stopSpeaking(); setDir(s >= step ? 1 : -1); setStep(s); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  // Đang làm dở bài kiểm tra: hỏi trước khi rời (kết quả chỉ được lưu khi làm hết)
  const guard = fn => {
    if (!quizBusy) return fn();
    modal.confirm({
      title: 'Thoát bài kiểm tra?', content: 'Kết quả lần này sẽ không được lưu.',
      okText: 'Thoát', cancelText: 'Làm tiếp', okButtonProps: { danger: true },
      onOk: () => { setQuizBusy(false); fn(); }
    });
  };
  const exit = () => guard(() => { stopRec(); stopSpeaking(); location.hash = `#/c/${lang}`; });
  const STEPS = stepsFor(u);
  const Body = STEPS[step].Body;

  return (
    <LangTheme lang={lang}>
      <div className="lesson-focus">
        <LessonBar steps={STEPS} step={step} u={u} idx={idx} onExit={exit}
          onStep={k => { if (k !== step) guard(() => go(k)); }} />

        <div className="lesson-body">
          {step === 0 && (
            <div className="lesson-head">
              <div className="lesson-icon">{u.icon || '📘'}</div>
              <div>
                <Tag bordered={false}>{LEVEL_NAME[u.level.id]} · {u.level.id}</Tag>
                <Title level={2}>{u.title}</Title>
                <Text type="secondary">🎯 Sau bài này bạn có thể: {u.goal.charAt(0).toLowerCase() + u.goal.slice(1)}</Text>
              </div>
            </div>
          )}

          <motion.div key={step} initial={{ opacity: 0, x: 36 * dir }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: EASE }} style={{ minWidth: 0 }}>
            <Body u={u} lang={lang} idx={idx} onGoStep={go} onBusy={setQuizBusy} />
          </motion.div>

          {step < STEPS.length - 1 && (
            <div className="lesson-foot">
              {step > 0 && (
                <Button size="large" className="btn-3d foot-back" icon={<ArrowLeftOutlined />} onClick={() => go(step - 1)}
                  aria-label={`Quay lại: ${STEPS[step - 1].title}`}>
                  <span className="foot-back-lbl">{STEPS[step - 1].title}</span>
                </Button>
              )}
              <Button type="primary" size="large" className="btn-3d foot-next" onClick={() => go(step + 1)}>
                Tiếp: {STEPS[step + 1].title} <ArrowRightOutlined />
              </Button>
            </div>
          )}
        </div>
      </div>
    </LangTheme>
  );
}
