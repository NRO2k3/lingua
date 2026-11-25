import { useEffect, useState } from 'react';
import { Button, Card, Flex, Grid, Progress, Result, Typography } from 'antd';
import { CheckOutlined, CloseOutlined, HistoryOutlined, RetweetOutlined, RocketOutlined } from '@ant-design/icons';
import { COURSES } from '../lib/courses.js';
import { addXp, getProgress, srsDue, srsKeys, SRS_DAYS, update, useProgress, wordFromKey } from '../lib/store.js';
import { speak } from '../lib/speech.js';
import { dayStr, pct, shuffle, today } from '../lib/utils.js';
import { Flashcard, LangTheme } from '../components/common.jsx';
import { AnimatePresence, motion } from 'framer-motion';
import { play } from '../lib/sfx.js';
import { celebrate } from '../lib/celebrate.js';

// Thẻ bay sang phải khi nhớ, sang trái khi chưa nhớ
const cardMotion = {
  enter: { opacity: 0, scale: 0.9, y: 16 },
  center: { opacity: 1, scale: 1, y: 0, x: 0, rotate: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
  exit: dir => ({ opacity: 0, x: dir * 340, rotate: dir * 14, transition: { duration: 0.3, ease: 'easeIn' } })
};

const { Title, Text } = Typography;

// Bỏ các key không còn tìm thấy từ (dữ liệu bài học đã đổi), xoá luôn khỏi lịch ôn
function clean(keys) {
  const bad = keys.filter(k => !wordFromKey(k));
  if (bad.length) update(d => { bad.forEach(k => { delete d.srs[k]; }); });
  return keys.filter(k => wordFromKey(k));
}

// practice = luyện thêm từ chưa đến hạn: không đổi lịch ôn, không cộng điểm
const newSession = (keys, practice = false) => ({ queue: keys, total: keys.length, done: 0, turn: 0, flipped: false, dir: 1, practice });

// Phiên ôn: tối đa 20 từ đến hạn, từ quá hạn lâu nhất trước
function dueQueue(lang) {
  const p = getProgress();
  return clean(shuffle(srsDue(p, lang)).sort((a, b) => p.srs[a].due.localeCompare(p.srs[b].due)).slice(0, 20));
}

export default function Review({ lang }) {
  const p = useProgress();
  const c = COURSES[lang];
  const screens = Grid.useBreakpoint();

  // Hàng đợi tạo khi mở trang
  const [s, setS] = useState(() => newSession(dueQueue(lang)));

  const key = s.queue[0];
  const v = key && wordFromKey(key);

  // Thẻ mới hiện ra: tự đọc từ
  useEffect(() => {
    if (v && !s.flipped) speak(v.w, c.tts);
  }, [key, s.turn]); // eslint-disable-line react-hooks/exhaustive-deps

  const flip = () => { play('flip'); setS(x => ({ ...x, flipped: !x.flipped })); };

  const grade = ok => {
    if (!key) return;
    play(ok ? 'correct' : 'pop');
    if (!s.practice) update(d => {
      const r = d.srs[key];
      if (!r) return;
      if (ok) {
        r.box = Math.min((r.box || 0) + 1, SRS_DAYS.length - 1);
        r.due = dayStr(SRS_DAYS[r.box]);
        addXp(d, 2);
      } else {
        r.box = 0;
        r.due = today();
      }
    });
    setS(x => {
      const [first, ...rest] = x.queue;
      return ok
        ? { ...x, queue: rest, done: x.done + 1, turn: x.turn + 1, flipped: false, dir: 1 }
        : { ...x, queue: [...rest, first], turn: x.turn + 1, flipped: false, dir: -1 };
    });
  };

  // Phím tắt: Cách/Enter lật thẻ, 1 = Chưa nhớ, 2 = Nhớ rồi
  useEffect(() => {
    if (!v) return;
    const onKey = e => {
      const t = e.target;
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if (e.key === ' ' || e.key === 'Enter') {
        // Để nút / thẻ đang được chọn tự xử lý phím của nó, tránh lật hai lần
        if (t && t.closest && t.closest(e.key === ' ' ? 'button, a' : 'button, a, [role="button"]')) return;
        e.preventDefault();
        if (!s.flipped) flip();
      } else if (s.flipped && e.key === '1') grade(false);
      else if (s.flipped && e.key === '2') grade(true);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const learned = srsKeys(p, lang).length;

  // Ôn xong cả phiên: ăn mừng
  const finishedNow = !v && s.done > 0;
  useEffect(() => { if (finishedNow) { play('complete'); celebrate(); } }, [finishedNow]);
  const dueLeft = srsDue(p, lang).length;
  const more = () => setS(newSession(clean(shuffle(srsKeys(getProgress(), lang)).slice(0, 10)), true));
  const nextDue = () => setS(newSession(dueQueue(lang)));


  if (!v) {
    const finished = s.done > 0;
    return (
      <LangTheme lang={lang}>
        <Flex vertical gap={20}>
          <Card>
            <Result
              icon={<div style={{ fontSize: 72, lineHeight: 1 }}>{finished ? '✅' : '🧠'}</div>}
              title={finished ? `Đã ${s.practice ? 'luyện' : 'ôn'} xong ${s.done} từ!` : (dueLeft ? `Còn ${dueLeft} từ cần ôn` : 'Hôm nay không có từ nào cần ôn')}
              subTitle={learned > 0
                ? `Bạn đã học ${learned} từ. Mỗi từ bạn nhớ sẽ tự quay lại để ôn sau ${SRS_DAYS.slice(0, -1).join(', ')} rồi ${SRS_DAYS[SRS_DAYS.length - 1]} ngày, đúng lúc bạn sắp quên. Từ nào chưa nhớ sẽ được ôn lại sớm.`
                : 'Hoàn thành bài học đầu tiên để bắt đầu ôn tập.'}
              extra={
                <Flex wrap gap={12} justify="center">
                  {dueLeft > 0 && (
                    <Button type="primary" size="large" icon={<HistoryOutlined />} onClick={nextDue}>Ôn tiếp {Math.min(dueLeft, 20)} từ đến hạn</Button>
                  )}
                  {dueLeft === 0 && learned > 0 && (
                    <Button size="large" icon={<RetweetOutlined />} onClick={more}>Luyện thêm 10 từ (không tính vào lịch ôn)</Button>
                  )}
                  <Button type={dueLeft ? 'default' : 'primary'} size="large" icon={<RocketOutlined />} href={`#/c/${lang}`}>Về lộ trình</Button>
                </Flex>
              }
            />
          </Card>
        </Flex>
      </LangTheme>
    );
  }

  const btn = { flex: 1, height: 56, fontSize: 17 };

  return (
    <LangTheme lang={lang}>
      <Flex vertical gap={20}>

        <Flex vertical gap={16} style={{ width: '100%', maxWidth: 560, margin: '0 auto' }}>
          <div>
            <Title level={3} style={{ margin: 0 }}><HistoryOutlined /> Ôn từ vựng</Title>
            <Text type="secondary">Nhớ lại nghĩa của từ rồi lật thẻ để kiểm tra</Text>
          </div>

          <div>
            <Flex justify="space-between">
              <Text type="secondary">Đã ôn</Text>
              <Text strong>{s.done} / {s.total} từ</Text>
            </Flex>
            <Progress percent={pct(s.done, s.total)} showInfo={false} />
          </div>

          <Flex justify="center" style={{ minHeight: 260 }}>
            <AnimatePresence mode="popLayout" custom={s.dir}>
              <motion.div key={s.turn} custom={s.dir} variants={cardMotion} initial="enter" animate="center" exit="exit"
                style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Flashcard v={v} lang={lang} flipped={s.flipped} onFlip={flip} />
              </motion.div>
            </AnimatePresence>
          </Flex>

          {!s.flipped ? (
            <Button type="primary" size="large" block style={{ height: 56, fontSize: 17 }} icon={<RetweetOutlined />} onClick={flip}>
              Lật thẻ
            </Button>
          ) : (
            <Flex gap={12}>
              <Button danger size="large" style={btn} icon={<CloseOutlined />} onClick={() => grade(false)}>
                Chưa nhớ
              </Button>
              <Button type="primary" size="large" style={btn} icon={<CheckOutlined />} onClick={() => grade(true)}>
                Nhớ rồi
              </Button>
            </Flex>
          )}

          {screens.md && (
            <Text type="secondary" style={{ textAlign: 'center', fontSize: 13 }}>
              Mẹo: nhấn phím Cách hoặc Enter để lật thẻ · phím 1 = Chưa nhớ · phím 2 = Nhớ rồi
            </Text>
          )}
        </Flex>
      </Flex>
    </LangTheme>
  );
}
