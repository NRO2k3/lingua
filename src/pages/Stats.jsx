import { useState } from 'react';
import { Button, Card, Col, Empty, Flex, List, Progress, Row, Segmented, Statistic, Tag, Tooltip, Typography, theme } from 'antd';
import {
  CheckCircleOutlined, FireFilled, HistoryOutlined, PlayCircleFilled, StarFilled, TrophyFilled
} from '@ant-design/icons';
import { COURSES, LANGS, LANG_UI, LEVEL_NAME, allUnits } from '../lib/courses.js';
import { DAILY_GOAL, bestStreak, isDone, langProgress, srsKeys, streakNow, useProgress } from '../lib/store.js';
import { dayStr, pct, today } from '../lib/utils.js';
import { WithBlank } from '../components/common.jsx';
import { Item, Stagger } from '../components/motion.jsx';

const { Title, Text } = Typography;

const TYPES = [
  ['mc', 'Trắc nghiệm'], ['fill', 'Điền từ'], ['order', 'Sắp xếp câu'],
  ['listen', 'Nghe'], ['read', 'Đọc hiểu'], ['speak', 'Nói']
];
const TYPE_NAME = Object.fromEntries(TYPES);

// Mức ghi nhớ gộp từ hộp ôn tập (box 0–5)
const MASTERY = [
  { key: 'new', name: 'Mới học', hint: 'ôn lại sau 1–2 ngày', test: b => b <= 1 },
  { key: 'mid', name: 'Đang nhớ', hint: 'ôn lại sau 4–7 ngày', test: b => b === 2 || b === 3 },
  { key: 'strong', name: 'Nhớ chắc', hint: 'ôn lại sau 15–30 ngày', test: b => b >= 4 }
];
// Thang một màu, nhạt → đậm (nền tối: tối → sáng)
const RAMP = { light: ['#91caff', '#4096ff', '#0958d9'], dark: ['#15417e', '#1668dc', '#65a9f3'] };

const WEEKDAY = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
const WEEKDAY_LONG = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
const toDate = s => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
const dm = s => { const d = toDate(s); return `${d.getDate()}/${d.getMonth() + 1}`; };
const longDay = s => `${WEEKDAY_LONG[toDate(s).getDay()]}, ${dm(s)}`;
const relDay = s => s === today() ? 'Hôm nay' : s === dayStr(-1) ? 'Hôm qua' : dm(s);

function Overview({ p }) {
  const done = LANGS.reduce((n, l) => n + langProgress(p, l).done, 0);
  const total = LANGS.reduce((n, l) => n + langProgress(p, l).total, 0);
  const streak = streakNow(p);
  const tiles = [
    { title: 'Tổng điểm', value: p.xp, icon: <StarFilled style={{ color: '#faad14' }} /> },
    { title: 'Chuỗi hiện tại', value: streak, suffix: 'ngày', icon: <FireFilled style={{ color: streak ? '#fa8c16' : undefined }} /> },
    { title: 'Chuỗi dài nhất', value: bestStreak(p), suffix: 'ngày', icon: <TrophyFilled style={{ color: '#faad14' }} /> },
    { title: 'Bài đã xong', value: done, suffix: `/ ${total}`, icon: <CheckCircleOutlined style={{ color: 'var(--success)' }} /> }
  ];
  return (
    <Row gutter={[12, 12]}>
      {tiles.map(t => (
        <Col xs={12} md={6} key={t.title}>
          <Card size="small" className="stat-tile">
            <Statistic title={<span>{t.icon} {t.title}</span>} value={t.value} suffix={t.suffix} />
          </Card>
        </Col>
      ))}
    </Row>
  );
}

// Biểu đồ cột điểm theo ngày, có vạch mục tiêu
function Activity({ p }) {
  const [n, setN] = useState(7);
  const keys = Array.from({ length: n }, (_, k) => dayStr(k - n + 1));
  const vals = keys.map(k => Math.max(0, Number(p.history[k]) || 0));
  const max = Math.max(DAILY_GOAL, ...vals);
  const sum = vals.reduce((a, b) => a + b, 0);
  const active = vals.filter(v => v > 0).length, hit = vals.filter(v => v >= DAILY_GOAL).length;
  const label = k => n === 7 ? (k === n - 1 ? 'Nay' : WEEKDAY[toDate(keys[k]).getDay()]) : ((n - 1 - k) % 7 === 0 ? (k === n - 1 ? 'Nay' : dm(keys[k])) : '');
  return (
    <Card title="Hoạt động" extra={<Segmented size="small" value={n} onChange={setN}
      options={[{ label: '7 ngày', value: 7 }, { label: '30 ngày', value: 30 }]} />}>
      {sum === 0 ? (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={`Chưa có điểm nào trong ${n} ngày qua. Học một bài để cột đầu tiên mọc lên nhé!`} />
      ) : (
        <>
          <Flex gap="4px 20px" wrap className="act-sum">
            <div><b>{sum}</b><Text type="secondary"> điểm</Text></div>
            <div><b>{active}</b><Text type="secondary">/{n} ngày có học</Text></div>
            <div><b>{hit}</b><Text type="secondary"> ngày đạt mục tiêu</Text></div>
          </Flex>
          <Text type="secondary" className="small goal-key"><span className="goal-swatch" /> Mục tiêu {DAILY_GOAL} điểm/ngày</Text>
          <div className="bars" role="img" aria-label={`Điểm ${n} ngày qua: tổng ${sum} điểm`}>
            <div className="bars-goal" style={{ bottom: `${DAILY_GOAL / max * 100}%` }} />
            {vals.map((v, k) => (
              <Tooltip key={keys[k]} title={`${longDay(keys[k])}: ${v} điểm`}>
                <div className="bar-col">
                  <div className={'bar' + (v ? '' : ' zero') + (k === n - 1 ? ' today' : '')}
                    style={{ height: v ? `max(4px, ${v / max * 100}%)` : undefined }} />
                </div>
              </Tooltip>
            ))}
          </div>
          <div className="bars-x">{vals.map((_, k) => <span key={k}>{label(k)}</span>)}</div>
        </>
      )}
    </Card>
  );
}

function Lessons({ p, lang }) {
  if (lang === 'all') {
    return (
      <Card title="Bài học" style={{ height: '100%' }}>
        <Flex vertical gap={14}>
          {LANGS.map(l => {
            const pr = langProgress(p, l);
            return (
              <div key={l}>
                <Flex justify="space-between"><Text>{COURSES[l].flag} {COURSES[l].name}</Text><Text type="secondary">{pr.done}/{pr.total} bài</Text></Flex>
                <Progress percent={pr.pct} showInfo={false} strokeColor={LANG_UI[l].color} />
              </div>
            );
          })}
        </Flex>
      </Card>
    );
  }
  const units = allUnits(lang);
  return (
    <Card title="Bài học theo cấp độ" style={{ height: '100%' }}>
      <Flex vertical gap={14}>
        {COURSES[lang].levels.map(lv => {
          const us = units.filter(u => u.level.id === lv.id);
          const done = us.filter(u => isDone(p, u.id)).length;
          const tried = us.filter(u => p.units[u.id]);
          const avg = tried.length ? Math.round(tried.reduce((a, u) => a + (p.units[u.id].best || 0), 0) / tried.length) : null;
          return (
            <div key={lv.id}>
              <Flex justify="space-between" gap={8}>
                <Text>{LEVEL_NAME[lv.id]} <Tag bordered={false}>{lv.id}</Tag></Text>
                <Text type="secondary" style={{ whiteSpace: 'nowrap' }}>{done}/{us.length} bài</Text>
              </Flex>
              <Progress percent={pct(done, us.length)} showInfo={false} strokeColor={LANG_UI[lang].color} />
              {avg != null && <Text type="secondary" className="small">Điểm kiểm tra trung bình: {avg}%</Text>}
            </div>
          );
        })}
      </Flex>
    </Card>
  );
}

function Vocab({ p, lang }) {
  const { token } = theme.useToken();
  const ramp = RAMP[token.colorBgBase === '#000' ? 'dark' : 'light'];
  const keys = srsKeys(p, lang === 'all' ? undefined : lang);
  const counts = MASTERY.map(m => keys.filter(k => m.test(p.srs[k].box || 0)).length);
  const t0 = today(), t7 = dayStr(7);
  const dueBy = l => keys.filter(k => k.startsWith(l + '|') && p.srs[k].due <= t0).length;
  const dueToday = keys.filter(k => p.srs[k].due <= t0).length;
  const dueWeek = keys.filter(k => p.srs[k].due > t0 && p.srs[k].due <= t7).length;
  const reviewLang = lang === 'all' ? [...LANGS].sort((a, b) => dueBy(b) - dueBy(a))[0] : lang;
  return (
    <Card title="Từ vựng" style={{ height: '100%' }}>
      {!keys.length ? (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="Chưa có từ nào trong ôn tập. Hoàn thành một bài kiểm tra hoặc thêm từ từ Kho từ vựng nhé." />
      ) : (
        <Flex vertical gap={16}>
          <div>
            <Text>Bạn đang ôn <b>{keys.length}</b> từ</Text>
            <div className="stack-bar" role="img" aria-label={MASTERY.map((m, i) => `${m.name}: ${counts[i]}`).join(', ')}>
              {MASTERY.map((m, i) => counts[i] > 0 && (
                <Tooltip key={m.key} title={`${m.name}: ${counts[i]} từ`}>
                  <div style={{ flexGrow: counts[i], background: ramp[i] }} />
                </Tooltip>
              ))}
            </div>
            <Flex vertical gap={6}>
              {MASTERY.map((m, i) => (
                <Flex key={m.key} align="center" gap={8}>
                  <span className="dot" style={{ background: ramp[i] }} />
                  <Text style={{ flex: 1 }}>{m.name} <Text type="secondary" className="small">· {m.hint}</Text></Text>
                  <Text strong>{counts[i]}</Text>
                </Flex>
              ))}
            </Flex>
          </div>
          <Row gutter={12}>
            <Col span={12}><Statistic title="Cần ôn hôm nay" value={dueToday} suffix="từ" /></Col>
            <Col span={12}><Statistic title="7 ngày tới" value={dueWeek} suffix="từ" /></Col>
          </Row>
          <Button block size="large" type={dueToday ? 'primary' : 'default'} icon={<HistoryOutlined />}
            href={dueToday ? `#/c/${reviewLang}/review` : undefined} disabled={!dueToday}>
            {dueToday ? 'Ôn ngay' : 'Hôm nay không có từ cần ôn 👍'}
          </Button>
        </Flex>
      )}
    </Card>
  );
}

function Accuracy({ answers }) {
  if (!answers.length) {
    return (
      <Card title="Độ chính xác theo dạng bài" style={{ height: '100%' }}>
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Làm bài kiểm tra, câu hỏi đọc hiểu hoặc luyện nói để xem bạn mạnh dạng bài nào." />
      </Card>
    );
  }
  const rows = TYPES.map(([type, name]) => {
    const xs = answers.filter(a => a.type === type), ok = xs.filter(a => a.ok).length;
    return { type, name, n: xs.length, ok, pct: pct(ok, xs.length) };
  });
  const totalOk = answers.filter(a => a.ok).length;
  const weak = rows.filter(r => r.n >= 5).sort((a, b) => a.pct - b.pct)[0];
  return (
    <Card title="Độ chính xác theo dạng bài" style={{ height: '100%' }}>
      <Flex vertical gap={12}>
        <Text>Đúng <b>{pct(totalOk, answers.length)}%</b> trong {answers.length} câu gần nhất</Text>
        {rows.map(r => (
          <div key={r.type}>
            <Flex justify="space-between"><Text>{r.name}</Text>
              <Text type="secondary">{r.n ? <>{r.ok}/{r.n} câu · <Text strong>{r.pct}%</Text></> : 'Chưa có'}</Text></Flex>
            <Progress percent={r.pct} size="small" showInfo={false} />
          </div>
        ))}
        {weak && weak.pct < 80 && <Text type="secondary">💡 Dạng nên luyện thêm: <b>{weak.name}</b></Text>}
      </Flex>
    </Card>
  );
}

function Mistakes({ answers }) {
  const wrong = answers.filter(a => !a.ok).slice(-10).reverse();
  return (
    <Card title="Câu sai gần đây">
      {!wrong.length ? (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={answers.length ? 'Chưa có câu sai nào. Tuyệt vời! 🎉' : 'Những câu bạn trả lời sai sẽ hiện ở đây để xem lại.'} />
      ) : (
        <List className="mistakes" dataSource={wrong} renderItem={a => (
          <List.Item actions={a.uid && COURSES[a.lang] ? [<a key="go" href={`#/c/${a.lang}/u/${a.uid}`}>Xem lại bài</a>] : []}>
            <List.Item.Meta
              title={a.type === 'speak' ? `🎤 “${a.q}”` : a.type === 'listen' ? `🔊 ${a.q}` : <WithBlank text={a.q} />}
              description={<>
                {a.a && <div>Đáp án: <Text strong>{a.a}</Text></div>}
                <Flex gap={6} wrap align="center" style={{ marginTop: 4 }}>
                  <span>{COURSES[a.lang]?.flag}</span>
                  <Tag bordered={false}>{TYPE_NAME[a.type] || a.type}</Tag>
                  <Text type="secondary" className="small">{relDay(a.date)}</Text>
                </Flex>
              </>} />
          </List.Item>
        )} />
      )}
    </Card>
  );
}

export default function Stats() {
  const p = useProgress();
  const [lang, setLang] = useState(() => (p.lastLang && COURSES[p.lastLang] ? p.lastLang : 'all'));
  const fresh = p.xp === 0 && !srsKeys(p).length && !p.answers.length && !Object.keys(p.units).length;
  const answers = lang === 'all' ? p.answers : p.answers.filter(a => a.lang === lang);
  return (
    <Stagger className="stack">
      <Item>
        <Title level={2} style={{ margin: '0 0 4px' }}>Tiến bộ của bạn 📈</Title>
        <Text type="secondary">Nhìn lại chặng đường đã đi để biết nên luyện gì tiếp.</Text>
      </Item>

      <Item><Overview p={p} /></Item>

      {fresh ? (
        <Item>
          <Card>
            <Empty description={<>
              <Title level={4} style={{ marginBottom: 4 }}>Chưa có số liệu nào</Title>
              <Text type="secondary">Học bài đầu tiên, số liệu và biểu đồ của bạn sẽ hiện ở đây.</Text>
            </>}>
              <Button type="primary" size="large" icon={<PlayCircleFilled />} href="#/">Chọn bài học</Button>
            </Empty>
          </Card>
        </Item>
      ) : (
        <>
          <Item><Activity p={p} /></Item>

          <Item>
            <div className="seg-scroll">
              <Segmented value={lang} onChange={setLang} options={[
                { label: 'Tất cả', value: 'all' },
                ...LANGS.map(l => ({ value: l, label: <span>{COURSES[l].flag}<span className="hide-xs"> {COURSES[l].name}</span></span>, title: COURSES[l].name }))
              ]} />
            </div>
          </Item>

          <Item><Row gutter={[16, 16]}>
            <Col xs={24} lg={12}><Lessons p={p} lang={lang} /></Col>
            <Col xs={24} lg={12}><Vocab p={p} lang={lang} /></Col>
            <Col xs={24} lg={12}><Accuracy answers={answers} /></Col>
            <Col xs={24} lg={12}><Mistakes answers={answers} /></Col>
          </Row></Item>
        </>
      )}
    </Stagger>
  );
}
