import { useMemo, useState } from 'react';
import { Alert, Button, Card, Flex, Space, Switch, Tag, Typography } from 'antd';
import { CheckCircleFilled, CloseCircleFilled, PlayCircleOutlined, ReadOutlined, ReloadOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { COURSES } from '../lib/courses.js';
import { speakAll } from '../lib/speech.js';
import { play } from '../lib/sfx.js';
import { shuffleOptions } from '../lib/quiz.js';
import { logAnswer } from '../lib/store.js';
import { Pinyin, SoundButton } from '../components/common.jsx';
import { EASE } from '../components/motion.jsx';

const { Title, Text, Paragraph } = Typography;

function Question({ q, k, chosen, onChoose }) {
  const done = chosen != null;
  return (
    <div className="rq">
      <Text strong className="rq-title">{k + 1}. {q.q}</Text>
      <Flex vertical gap={8}>
        {q.options.map((o, j) => {
          const cls = done ? (j === q.answer ? ' right' : j === chosen ? ' wrong shake' : ' dim') : '';
          return (
            <button key={j} className={'opt opt-sm' + cls} disabled={done} onClick={() => onChoose(j)}>
              <span className="opt-key">{String.fromCharCode(65 + j)}</span>
              <span className="opt-text">{o}</span>
              {done && j === q.answer && <CheckCircleFilled className="opt-icon" />}
              {done && j === chosen && j !== q.answer && <CloseCircleFilled className="opt-icon" />}
            </button>
          );
        })}
      </Flex>
      {done && q.explain && (
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, ease: EASE }}>
          <Text type="secondary" className="rq-explain">{chosen === q.answer ? '✓ ' : '✗ '}{q.explain}</Text>
        </motion.div>
      )}
    </div>
  );
}

export default function ReadingStep({ u, lang }) {
  const r0 = u.reading;
  // Xáo phương án một lần khi mở bài đọc
  const r = useMemo(() => ({ ...r0, questions: r0.questions.map(shuffleOptions) }), [r0]);
  const tts = COURSES[lang].tts;
  const [showVi, setShowVi] = useState(false);
  const [answers, setAnswers] = useState({});
  const total = r.questions.length;
  const doneCount = Object.keys(answers).length;
  const correct = r.questions.filter((q, k) => answers[k] === q.answer).length;

  const choose = (k, j) => {
    play(j === r.questions[k].answer ? 'correct' : 'wrong');
    logAnswer({ lang, uid: u.id, type: 'read', ok: j === r.questions[k].answer, q: r.questions[k] });
    setAnswers(a => ({ ...a, [k]: j }));
  };

  return (
    <Flex vertical gap={16}>
      <Flex justify="space-between" align="center" wrap gap={12}>
        <Button type="primary" icon={<PlayCircleOutlined />}
          onClick={() => speakAll(r.text.map(t => ({ s: '', t })), tts)}>Nghe cả bài</Button>
        <Space><Switch checked={showVi} onChange={setShowVi} /><Text>Hiện bản dịch</Text></Space>
      </Flex>

      <Card className="reading-card">
        <Tag icon={<ReadOutlined />} bordered={false} color="processing">Bài đọc</Tag>
        <Title level={3} style={{ margin: '8px 0 2px' }}>{r.title}</Title>
        <Text type="secondary">{r.titleVi}</Text>
        <div className="reading-body">
          {r.text.map((t, k) => (
            <div key={k} className="reading-p">
              <Flex gap={8} align="start">
                <SoundButton text={t} lang={lang} size="small" />
                <div style={{ flex: 1 }}>
                  <Paragraph className="reading-text">{t}</Paragraph>
                  {r.py && <Pinyin text={r.py[k]} />}
                  {showVi && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} transition={{ duration: 0.25 }}>
                      <Text type="secondary" italic>{r.vi[k]}</Text>
                    </motion.div>
                  )}
                </div>
              </Flex>
            </div>
          ))}
        </div>
      </Card>

      <Card title="Câu hỏi đọc hiểu" extra={doneCount > 0 && <Text type="secondary">{correct}/{total} đúng</Text>}>
        <Flex vertical gap={20}>
          {r.questions.map((q, k) => <Question key={k} q={q} k={k} chosen={answers[k]} onChoose={j => choose(k, j)} />)}
        </Flex>
        {doneCount === total && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, ease: EASE }}>
            <Alert style={{ marginTop: 20 }} showIcon type={correct === total ? 'success' : correct >= total / 2 ? 'info' : 'warning'}
              message={correct === total ? 'Bạn hiểu bài đọc rất tốt! 🎉' : `Bạn trả lời đúng ${correct}/${total} câu`}
              description={correct === total ? null : 'Bật "Hiện bản dịch" để đọc lại những chỗ chưa rõ rồi thử lại.'}
              action={correct < total && <Button size="small" icon={<ReloadOutlined />} onClick={() => setAnswers({})}>Làm lại</Button>} />
          </motion.div>
        )}
      </Card>
    </Flex>
  );
}
