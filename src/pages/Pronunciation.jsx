import { useEffect, useMemo, useRef, useState } from 'react';
import { Alert, App, Breadcrumb, Button, Card, Col, Collapse, ConfigProvider, Flex, Progress, Result, Row, Table, Tag, Typography } from 'antd';
import {
  ArrowRightOutlined, AudioOutlined, BulbFilled, CheckCircleFilled, CloseCircleFilled, FireFilled, LeftOutlined,
  PlayCircleFilled, ReloadOutlined, SoundFilled, SoundOutlined
} from '@ant-design/icons';
import { AnimatePresence, motion } from 'framer-motion';
import { COURSES } from '../lib/courses.js';
import { addXp, update } from '../lib/store.js';
import { SPEAK_PASS, bestMatch, finishRec, getSR, listen, speak, stopRec } from '../lib/speech.js';
import { play } from '../lib/sfx.js';
import { celebrate } from '../lib/celebrate.js';
import { pct, shuffle } from '../lib/utils.js';
import { PRON } from '../data/pron/index.js';
import { LangTheme, SoundButton } from '../components/common.jsx';
import { CountFromZero, EASE, FadeIn, Item, Stagger } from '../components/motion.jsx';

const { Title, Text, Paragraph } = Typography;
const PRAISE = ['Chính xác!', 'Tuyệt vời!', 'Tai thính lắm!', 'Đúng rồi!', 'Xuất sắc!'];
const DRILL_PASS = 70;   // % để tính là đạt bài luyện
const DRILL_XP = 20;     // điểm thưởng cho lần đầu đạt mỗi bài luyện

// Be Vietnam Pro thiếu các chữ có dấu ˇ (ǎ ǐ ǒ ǔ ǚ); chọn sẵn phông dự phòng có dấu ˇ hình chữ V rõ ràng
const PAGE_FONT = "'Be Vietnam Pro', 'Noto Sans', 'DejaVu Sans', 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Arial, "
  + "'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', sans-serif";

const hasTTS = () => typeof window !== 'undefined' && 'speechSynthesis' in window;

// Điểm cao nhất của từng bài luyện, lưu riêng (không đụng tới dữ liệu tiến độ chung)
const BEST_KEY = 'lingua-pron-v1';
function readBest() {
  try {
    const v = JSON.parse(localStorage.getItem(BEST_KEY));
    return v && typeof v === 'object' ? v : {};
  } catch { return {}; }
}
function saveBest(key, score) {
  const all = readBest();
  all[key] = Math.max(all[key] || 0, score);
  try { localStorage.setItem(BEST_KEY, JSON.stringify(all)); } catch { /* chế độ riêng tư */ }
}

// Đọc to một mục; nhớ mục nào đang được đọc để tô sáng
function useSay(lang) {
  const tag = COURSES[lang].tts;
  const [playing, setPlaying] = useState(null);
  const say = (text, key, rate = 0.8) => {
    setPlaying(key);
    speak(text, tag, { rate, onend: () => setPlaying(p => (p === key ? null : p)) });
  };
  return [say, playing];
}

// ---------- Phần học ----------

// Thẻ bấm để nghe: chữ to, phiên âm, nghĩa, mẹo ngắn
function SoundTile({ x, lang, say, playing }) {
  const key = x.t + '|' + (x.say || '');
  const zh = !!COURSES[lang].noSpace;
  return (
    <motion.button type="button" className={'pron-tile' + (playing === key ? ' playing' : '')} whileTap={{ scale: 0.96 }}
      onClick={() => say(x.say || x.t, key)} aria-label={`Nghe: ${x.t}`}>
      <Flex justify="space-between" align="flex-start" gap={6}>
        {x.label ? <span className="pron-label">{x.label}</span> : <span />}
        <SoundFilled className="pron-tile-icon" />
      </Flex>
      <span className={'pron-word' + (zh ? ' zh' : '')}>{x.t}</span>
      {x.sub && <span className="pron-sub">{x.sub}</span>}
      {x.vi && <span className="pron-vi">{x.vi}</span>}
      {x.note && <span className="pron-note">{x.note}</span>}
    </motion.button>
  );
}

function TileGrid({ items, lang, say, playing }) {
  return (
    <div className="pron-grid">
      {items.map((x, k) => <SoundTile key={k} x={x} lang={lang} say={say} playing={playing} />)}
    </div>
  );
}

// Đường cong thanh điệu theo thang 5 bậc (1 = thấp nhất, 5 = cao nhất)
function ToneCurve({ chao }) {
  const W = 96, H = 64, y = l => 56 - (l - 1) * 12;
  const pts = chao ? chao.map((l, k) => [10 + k * (76 / (chao.length - 1)), y(l)]) : null;
  const d = pts && (pts.length === 3
    ? `M${pts[0][0]},${pts[0][1]} Q${pts[1][0]},${pts[1][1] + 14} ${pts[2][0]},${pts[2][1]}`
    : `M${pts[0][0]},${pts[0][1]} L${pts[1][0]},${pts[1][1]}`);
  return (
    <svg className="tone-svg" viewBox={`0 0 ${W} ${H}`} width={W} height={H} aria-hidden="true">
      {[1, 2, 3, 4, 5].map(l => <line key={l} x1="4" x2={W - 4} y1={y(l)} y2={y(l)} className="tone-grid" />)}
      {d ? <>
        <path d={d} className="tone-line" />
        <circle cx={pts[pts.length - 1][0]} cy={pts[pts.length - 1][1]} r="4.5" className="tone-dot" />
      </> : <circle cx={W / 2} cy={y(2.5)} r="6" className="tone-dot" />}
    </svg>
  );
}

function ToneCards({ tones, lang, say, playing }) {
  return (
    <Row gutter={[12, 12]}>
      {tones.map(t => {
        const key = t.ex.t + '|';
        return (
          <Col xs={24} sm={12} lg={8} key={t.n}>
            <motion.button type="button" className={'pron-tile tone-card' + (playing === key ? ' playing' : '')}
              whileTap={{ scale: 0.97 }} onClick={() => say(t.ex.t, key, 0.7)} aria-label={`Nghe ${t.name}: ${t.ex.t}`}>
              <Flex gap={12} align="center">
                <ToneCurve chao={t.chao} />
                <Flex vertical gap={0} style={{ minWidth: 0, flex: 1 }}>
                  <span className="tone-name">{t.name} <span className="tone-mark">{t.mark}</span></span>
                  <span className="pron-word zh">{t.ex.t}<span className="pron-sub">{t.ex.sub}</span></span>
                  <span className="pron-vi">{t.ex.vi}</span>
                </Flex>
                <SoundFilled className="pron-tile-icon" />
              </Flex>
              <span className="pron-note tone-vi">{t.vi}</span>
            </motion.button>
          </Col>
        );
      })}
    </Row>
  );
}

function PairList({ pairs, lang, say, playing }) {
  return (
    <Flex vertical gap={12}>
      {pairs.map((p, k) => (
        <div key={k} className="pron-pair">
          <div className="pron-pair-row" style={{ gridTemplateColumns: `repeat(${p.w.length}, minmax(0, 1fr))` }}>
            {p.w.map((x, j) => <SoundTile key={j} x={x} lang={lang} say={say} playing={playing} />)}
          </div>
          {p.note && <Text type="secondary" className="pron-pair-note">{p.note}</Text>}
        </div>
      ))}
    </Flex>
  );
}

function MicButton({ listening, onClick }) {
  return (
    <div className="mic-wrap">
      {listening && [0, 1, 2].map(k => <span key={k} className="mic-ring" style={{ animationDelay: `${k * 0.5}s` }} />)}
      <Button type="primary" danger={listening} shape="circle" className={'mic' + (listening ? ' on' : '')}
        icon={<AudioOutlined />} onClick={onClick} aria-label={listening ? 'Dừng' : 'Bấm để nói'} />
    </div>
  );
}

// Nói thử: chỉ kiểm tra máy nhận dạng giọng nói có nghe ra đúng từ không
function TryMic({ lang, items }) {
  const { message } = App.useApp();
  const zh = !!COURSES[lang].noSpace;
  const [open, setOpen] = useState(false);
  const [k, setK] = useState(0);
  const [listening, setListening] = useState(false);
  const [interim, setInterim] = useState('');
  const [res, setRes] = useState(null);
  useEffect(() => () => stopRec(), []);
  if (!items.length) return null;
  if (!open) {
    return <Button size="large" icon={<AudioOutlined />} onClick={() => setOpen(true)} className="try-mic-open">Nói thử bằng micro</Button>;
  }
  const x = items[k], target = x.mic || x.t;
  const pickItem = j => { stopRec(); setListening(false); setInterim(''); setRes(null); setK(j); };
  const start = () => {
    if (listening) return finishRec();
    setRes(null); setListening(true); setInterim('');
    listen(COURSES[lang].tts, {
      onInterim: setInterim,
      onError: m => message.warning(m),
      onDone: cands => {
        setListening(false); setInterim('');
        const best = bestMatch(target, cands);
        const ok = !!best && best.score >= SPEAK_PASS;
        play(ok ? 'correct' : best ? 'pop' : 'wrong');
        setRes({ ok, heard: best ? best.heard : '' });
      }
    });
  };
  return (
    <div className="try-mic">
      <Flex vertical gap={10}>
        <div>
          <Text strong>Nói thử</Text>
          <Text type="secondary"> · Chọn một từ, nghe mẫu, rồi bấm micro và đọc to.</Text>
        </div>
        {!getSR() ? (
          <Alert type="info" showIcon message="Trình duyệt này chưa hỗ trợ nhận giọng nói. Hãy mở bằng Google Chrome hoặc Microsoft Edge để nói thử." />
        ) : <>
          <Flex wrap gap={6}>
            {items.map((y, j) => (
              <button key={j} type="button" className={'chip chip-sm' + (j === k ? ' on' : '')} onClick={() => pickItem(j)}>{y.mic || y.t}</button>
            ))}
          </Flex>
          <Flex align="center" justify="center" gap={16} wrap>
            <span className={'pron-word' + (zh ? ' zh' : '')} style={{ fontSize: 28 }}>{target}</span>
            <SoundButton text={target} lang={lang} type="default" size="large" rate={0.8} />
            <MicButton listening={listening} onClick={start} />
          </Flex>
          {listening && <Text type="secondary" style={{ textAlign: 'center' }}>{interim || 'Đang nghe… nói xong bấm micro lần nữa'}</Text>}
          {res && (
            <Alert type={res.ok ? 'success' : 'warning'} showIcon
              message={res.ok ? 'Máy nghe hiểu được! 👍' : 'Máy chưa nghe ra từ này'}
              description={res.heard ? `Máy nghe được: “${res.heard}”` : 'Không nghe được gì, bạn thử nói to và rõ hơn nhé.'} />
          )}
        </>}
        <Text type="secondary" style={{ fontSize: 13 }}>
          Lưu ý: máy chỉ kiểm tra xem nó có <b>nghe hiểu được</b> từ bạn nói hay không — không chấm {zh ? 'thanh điệu' : 'trọng âm'} hay độ chuẩn
          từng âm. {zh && 'Với chữ đơn lẻ, máy có thể nghe thành một chữ khác cùng âm; thử từ hai chữ sẽ chính xác hơn. '}
          Hãy luôn so giọng mình với tiếng mẫu bằng tai.
        </Text>
      </Flex>
    </div>
  );
}

function micItems(s) {
  const all = [
    ...(s.tones || []).map(t => t.ex), ...(s.examples || []),
    ...(s.groups || []).flatMap(g => g.items), ...(s.pairs || []).flatMap(p => p.w)
  ];
  const seen = new Set();
  return all.filter(x => { const t = x.mic || x.t; return !seen.has(t) && seen.add(t); });
}

function SectionBody({ s, lang, say, playing }) {
  const hasTable = s.table && s.table.length > 1;
  return (
    <Flex vertical gap={16}>
      {s.explain.map((t, k) => <Paragraph key={k} className="grammar-p" style={{ margin: 0 }}>{t}</Paragraph>)}
      {s.tones && <ToneCards tones={s.tones} lang={lang} say={say} playing={playing} />}
      {hasTable && (
        <Table size="small" bordered pagination={false} scroll={{ x: true }}
          columns={s.table[0].map((h, ci) => ({ title: h, dataIndex: String(ci), key: ci }))}
          dataSource={s.table.slice(1).map((r, ri) => ({ key: ri, ...Object.fromEntries(r.map((c, ci) => [String(ci), c])) }))} />
      )}
      {s.groups && s.groups.map(g => (
        <div key={g.label}>
          <Text strong className="pron-group">{g.label}</Text>
          <TileGrid items={g.items} lang={lang} say={say} playing={playing} />
        </div>
      ))}
      {s.pairs && <div>
        <Text strong className="pron-group">So sánh: nghe từng từ trong cặp</Text>
        <PairList pairs={s.pairs} lang={lang} say={say} playing={playing} />
      </div>}
      {s.examples && <div>
        {(s.groups || s.tones || s.pairs) && <Text strong className="pron-group">Ví dụ</Text>}
        <TileGrid items={s.examples} lang={lang} say={say} playing={playing} />
      </div>}
      {s.tip && <Alert type="warning" showIcon icon={<BulbFilled />} message="Mẹo cho người Việt" description={s.tip} />}
      <TryMic lang={lang} items={micItems(s)} />
    </Flex>
  );
}

function DrillCard({ lang, d, best }) {
  const passed = best >= DRILL_PASS;
  return (
    <Card size="small" className="unit-card pron-drill-card" hoverable onClick={() => { location.hash = `#/c/${lang}/pron/${d.id}`; }}>
      <Flex gap={12} align="center">
        <div className={'unit-icon' + (passed ? ' ok' : '')}>{d.icon}</div>
        <Flex vertical gap={2} style={{ flex: 1, minWidth: 0 }}>
          <Text strong className="unit-title">{d.title}</Text>
          <Text type="secondary" style={{ fontSize: 13 }}>{d.desc}</Text>
          <div>
            {best != null
              ? <Tag color={passed ? 'success' : 'warning'} bordered={false} icon={passed ? <CheckCircleFilled /> : null}>Cao nhất · {best}%</Tag>
              : <Tag bordered={false}>{Math.min(d.round, d.pool.length)} câu</Tag>}
          </div>
        </Flex>
        <Button type="primary" shape="circle" size="large" icon={<PlayCircleFilled />} tabIndex={-1} aria-hidden="true" />
      </Flex>
    </Card>
  );
}

function Overview({ lang, data }) {
  const c = COURSES[lang];
  const [say, playing] = useSay(lang);
  const best = useMemo(readBest, []);
  const goDrills = () => document.getElementById('pron-drills')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  return (
    <Flex vertical gap={20}>
      <Card>
        <Flex gap={16} align="center" wrap>
          <div className="lesson-icon">🗣️</div>
          <div style={{ flex: '1 1 220px', minWidth: 0 }}>
            <Title level={3} style={{ margin: 0 }}>Phát âm nền tảng</Title>
            <Text type="secondary">{c.flag} {c.name} · {data.sections.length} chủ đề · {data.drills.length} bài luyện nghe</Text>
          </div>
        </Flex>
        <Paragraph className="grammar-p" style={{ margin: '14px 0 16px' }}>{data.intro}</Paragraph>
        <Flex gap={10} wrap>
          <Button type="primary" size="large" icon={<SoundOutlined />} onClick={goDrills}>Luyện nghe ngay</Button>
          <Button size="large" icon={<LeftOutlined />} href={`#/c/${lang}`}>Về lộ trình</Button>
        </Flex>
        {!hasTTS() && (
          <Alert type="warning" showIcon style={{ marginTop: 16 }}
            message="Trình duyệt này không đọc to được. Hãy mở bằng Google Chrome, Edge hoặc Safari để nghe phát âm mẫu." />
        )}
      </Card>

      <div>
        <Title level={4} style={{ margin: '0 0 4px' }}>Học từng phần</Title>
        <Text type="secondary">Bấm vào mỗi phần để mở. Bấm vào thẻ bất kỳ để nghe máy đọc.</Text>
      </div>
      <Collapse className="pron-collapse" size="large" defaultActiveKey={[data.sections[0].id]}
        items={data.sections.map((s, k) => ({
          key: s.id,
          label: (
            <Flex gap={12} align="center">
              <span className="pron-sec-icon">{s.icon}</span>
              <Flex vertical gap={0} style={{ minWidth: 0 }}>
                <Text strong className="pron-sec-title">{k + 1}. {s.title}</Text>
                <Text type="secondary" style={{ fontSize: 13 }}>{s.summary}</Text>
              </Flex>
            </Flex>
          ),
          children: <SectionBody s={s} lang={lang} say={say} playing={playing} />
        }))} />

      <section id="pron-drills" className="level-section">
        <Title level={4} style={{ margin: '0 0 4px' }}>Luyện nghe</Title>
        <Text type="secondary">Mỗi lượt lấy ngẫu nhiên câu hỏi, đạt {DRILL_PASS}% là bạn đã nghe tốt.</Text>
        <Stagger>
          <Row gutter={[12, 12]} style={{ marginTop: 12 }}>
            {data.drills.map(d => (
              <Col xs={24} md={12} key={d.id}>
                <Item style={{ height: '100%' }}><DrillCard lang={lang} d={d} best={best[`${lang}|${d.id}`]} /></Item>
              </Col>
            ))}
          </Row>
        </Stagger>
      </section>
    </Flex>
  );
}

// ---------- Phần luyện tập ----------

// Tạo một lượt: chọn ngẫu nhiên câu, đáp án (nếu chưa định sẵn) và xáo phương án
function buildRound(d) {
  return shuffle(d.pool).slice(0, d.round).map(q => {
    const answer = q.answer ?? Math.floor(Math.random() * q.options.length);
    const order = d.fixed ? q.options.map((_, k) => k) : shuffle(q.options.map((_, k) => k));
    return {
      ...q,
      say: q.say ?? q.options[answer],
      speakOptions: q.say == null,     // phương án chính là từ, cho bấm nghe từng từ sau khi trả lời
      options: order.map(k => q.options[k]),
      labels: q.labels && order.map(k => q.labels[k]),
      answer: order.indexOf(answer)
    };
  });
}

function DrillResult({ lang, d, correct, total, wrongs, firstPass, onRetry }) {
  const score = pct(correct, total), passed = score >= DRILL_PASS;
  const [ring, setRing] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setRing(score), 150);
    const c = passed ? setTimeout(celebrate, 250) : null;
    play(passed ? 'complete' : 'pop');
    return () => { clearTimeout(t); clearTimeout(c); };
  }, []);
  return (
    <Flex vertical gap={16} className="quiz">
      <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45, ease: EASE }}>
        <Card className="result-card">
          <Result
            icon={<Progress type="circle" percent={ring} size={132} strokeWidth={8} status={passed ? 'success' : 'normal'}
              format={() => <span className="ring-text"><b><CountFromZero value={score} />%</b><small>{correct}/{total} câu</small></span>} />}
            title={passed ? (score === 100 ? 'Tai bạn thính quá! 🎧' : 'Làm tốt lắm! 👏') : 'Cố thêm chút nữa! 💪'}
            subTitle={<>
              {firstPass && <span className="xp-pill">+<CountFromZero value={DRILL_XP} delay={0.5} /> điểm</span>}
              <div style={{ marginTop: 8 }}>
                {passed ? 'Bạn đã phân biệt tốt các âm trong bài này.' : 'Hãy mở lại phần học, nghe kỹ từng cặp rồi luyện lại nhé.'}
              </div>
            </>}
            extra={[
              <Button key="retry" type="primary" size="large" icon={<ReloadOutlined />} onClick={onRetry}>Luyện lượt mới</Button>,
              <Button key="back" size="large" href={`#/c/${lang}/pron`}>Về trang phát âm</Button>
            ]} />
        </Card>
      </motion.div>
      {wrongs.length > 0 && (
        <FadeIn delay={0.3}>
          <Card title="Các câu cần nghe lại">
            <Flex vertical gap={8}>
              {wrongs.map((q, k) => (
                <Flex key={k} gap={10} align="center">
                  <CloseCircleFilled style={{ color: 'var(--error)', fontSize: 18, flex: 'none' }} />
                  <Text style={{ flex: 1, minWidth: 0 }}>{q.show}</Text>
                  <SoundButton text={q.say} lang={lang} rate={0.8} />
                </Flex>
              ))}
            </Flex>
          </Card>
        </FadeIn>
      )}
    </Flex>
  );
}

function Drill({ lang, d }) {
  const c = COURSES[lang], tag = c.tts, zh = !!c.noSpace;
  const [qs, setQs] = useState(() => buildRound(d));
  const [i, setI] = useState(0);
  const [ans, setAns] = useState(null);
  const [correct, setCorrect] = useState(0);
  const [combo, setCombo] = useState(0);
  const [wrongs, setWrongs] = useState([]);
  const [done, setDone] = useState(null);
  const nextBtn = useRef(null);
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);
  const q = qs[i];

  const hear = (rate = 0.8) => speak(q.say, tag, { rate });

  // Tự đọc khi mở câu mới
  useEffect(() => {
    if (done) return;
    const t = setTimeout(() => hear(), 450);
    return () => clearTimeout(t);
  }, [i, qs, done]);

  const answer = k => {
    if (ans) return;
    const ok = k === q.answer;
    setAns({ ok, choice: k });
    play(ok ? 'correct' : 'wrong');
    if (ok) { setCorrect(n => n + 1); setCombo(n => n + 1); }
    else { setWrongs(w => [...w, q]); setCombo(0); timer.current = setTimeout(() => hear(0.7), 500); }
  };

  const next = () => {
    clearTimeout(timer.current);
    if (i + 1 < qs.length) { setI(i + 1); setAns(null); return; }
    const score = pct(correct, qs.length), key = `${lang}|${d.id}`;
    const firstPass = score >= DRILL_PASS && !(readBest()[key] >= DRILL_PASS);
    saveBest(key, score);
    if (firstPass) update(p => addXp(p, DRILL_XP));
    setDone({ firstPass });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const restart = () => {
    setQs(buildRound(d)); setI(0); setAns(null); setCorrect(0); setCombo(0); setWrongs([]); setDone(null);
  };

  useEffect(() => {
    if (!ans) return;
    const t = setTimeout(() => nextBtn.current?.focus(), 60);
    return () => clearTimeout(t);
  }, [ans]);

  // Phím tắt: 1–4 chọn, Enter tiếp tục
  useEffect(() => {
    if (done) return;
    const h = e => {
      if (!ans && /^[1-9]$/.test(e.key) && +e.key <= q.options.length) answer(+e.key - 1);
      else if (ans && e.key === 'Enter' && !e.repeat && document.activeElement?.tagName !== 'BUTTON') { e.preventDefault(); next(); }
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  });

  const crumbs = (
    <Breadcrumb items={[{ title: <a href="#/">Trang chủ</a> }, { title: <a href={`#/c/${lang}`}>{c.name}</a> },
      { title: <a href={`#/c/${lang}/pron`}>Phát âm</a> }, { title: d.title }]} />
  );

  if (done) {
    return <Flex vertical gap={16}>{crumbs}
      <DrillResult lang={lang} d={d} correct={correct} total={qs.length} wrongs={wrongs} firstPass={done.firstPass} onRetry={restart} />
    </Flex>;
  }

  return (
    <Flex vertical gap={16}>
      {crumbs}
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
            <Text type="secondary" className="q-kind">{d.title}</Text>
            <Flex vertical align="center" gap={8} style={{ margin: '18px 0 22px' }}>
              <Button type="primary" shape="circle" className="listen-btn" icon={<SoundFilled />} onClick={() => hear()} aria-label="Nghe lại" />
              <Button type="link" onClick={() => hear(0.55)}>🐢 Nghe chậm</Button>
              {q.prompt && <span className={'pron-word' + (zh ? ' zh' : '')} style={{ fontSize: 26 }}>{q.prompt}</span>}
            </Flex>
            <Flex vertical gap={10}>
              {q.options.map((o, k) => {
                const cls = ans ? (k === q.answer ? ' right' + (ans.ok ? ' pop' : '') : k === ans.choice ? ' wrong shake' : ' dim') : '';
                return (
                  <Flex key={k} gap={8} align="center">
                    <motion.button className={'opt' + cls} disabled={!!ans} onClick={() => answer(k)}
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 * k + 0.1, duration: 0.3, ease: EASE }}
                      whileTap={ans ? undefined : { scale: 0.97 }}>
                      <span className="opt-key">{k + 1}</span>
                      <span className={'opt-text' + (zh ? ' py-font' : '') + (zh && !d.fixed ? ' pron-opt-py' : '')}>{q.labels ? q.labels[k] : o}</span>
                      {ans && k === q.answer && <CheckCircleFilled className="opt-icon" />}
                      {ans && k === ans.choice && k !== q.answer && <CloseCircleFilled className="opt-icon" />}
                    </motion.button>
                    {ans && q.speakOptions && <SoundButton text={o} lang={lang} type="default" size="large" rate={0.8} />}
                  </Flex>
                );
              })}
            </Flex>
          </Card>
        </motion.div>
        {!ans && <Text type="secondary" className="kbd-hint">Mẹo: bấm phím 1–{q.options.length} để chọn nhanh</Text>}
        <div className="sheet-spacer" />
      </div>

      {ans && (
        <motion.div key={i} className={'sheet ' + (ans.ok ? 'ok' : 'no')} initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 420, damping: 34 }}>
          <div className="sheet-inner">
            <Flex gap={14} align="center" style={{ flex: 1, minWidth: 0 }}>
              <motion.span className="sheet-icon" initial={{ scale: 0, rotate: -30 }} animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 15, delay: 0.05 }}>
                {ans.ok ? <CheckCircleFilled /> : <CloseCircleFilled />}
              </motion.span>
              <div style={{ minWidth: 0 }}>
                <div className="sheet-title">{ans.ok ? PRAISE[i % PRAISE.length] : 'Chưa đúng rồi'}</div>
                {!ans.ok && <div className="sheet-text">Đáp án: <b>{q.labels ? q.labels[q.answer] : q.options[q.answer]}</b></div>}
                {q.show && <div className="sheet-text">{q.show}</div>}
                {q.explain && <div className="sheet-text sheet-explain">{q.explain}</div>}
              </div>
            </Flex>
            <Button ref={nextBtn} type="primary" size="large" className={'sheet-btn ' + (ans.ok ? 'ok' : 'no')} onClick={next}>
              {i + 1 >= qs.length ? 'Xem kết quả' : 'Tiếp tục'} <ArrowRightOutlined />
            </Button>
          </div>
        </motion.div>
      )}
    </Flex>
  );
}

export default function Pronunciation({ lang, drill }) {
  const data = PRON[lang];
  const d = drill && data.drills.find(x => x.id === drill);
  return (
    <LangTheme lang={lang}>
      <ConfigProvider theme={{ token: { fontFamily: PAGE_FONT } }}>
        {d ? <Drill key={d.id} lang={lang} d={d} /> : <Overview lang={lang} data={data} />}
      </ConfigProvider>
    </LangTheme>
  );
}
