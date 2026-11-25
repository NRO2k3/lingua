import { Badge, Button, Card, Col, Flex, Progress, Row, Steps, Tag, Tooltip, Typography } from 'antd';
import {
  AudioOutlined, BookOutlined, BulbOutlined, FireFilled, HistoryOutlined, MessageOutlined, PlayCircleFilled, ReadOutlined, TrophyOutlined
} from '@ant-design/icons';
import { COURSES, LANGS, LANG_UI, LEVEL_NAME, allUnits } from '../lib/courses.js';
import { DAILY_GOAL, dailyXp, langProgress, nextUnit, srsDue, srsKeys, streakNow, useProgress } from '../lib/store.js';
import { pct } from '../lib/utils.js';
import { LangTheme } from '../components/common.jsx';
import { CountUp, Item, Stagger } from '../components/motion.jsx';

const { Title, Text, Paragraph } = Typography;

function greeting() {
  const h = new Date().getHours();
  return h < 11 ? 'Chào buổi sáng' : h < 18 ? 'Chào buổi chiều' : 'Chào buổi tối';
}

function ContinueCard({ lang }) {
  const p = useProgress();
  const c = COURSES[lang], nx = nextUnit(p, lang), pr = langProgress(p, lang);
  if (!nx) {
    return (
      <Card className="hero-card">
        <Title level={3}>🎉 Bạn đã hoàn thành lộ trình {c.name}!</Title>
        <Paragraph type="secondary">Hãy tiếp tục ôn từ mỗi ngày để không quên, hoặc thử một ngôn ngữ mới bên dưới.</Paragraph>
        <Button type="primary" size="large" href={`#/c/${lang}/review`} icon={<HistoryOutlined />}>Ôn từ vựng</Button>
      </Card>
    );
  }
  const idx = allUnits(lang).findIndex(u => u.id === nx.id);
  return (
    <LangTheme lang={lang}>
      <Card className="hero-card">
        <Flex gap={20} align="center" wrap>
          <div className="hero-icon">{nx.icon}</div>
          <Flex vertical gap={4} style={{ flex: 1, minWidth: 220 }}>
            <Text type="secondary">{c.flag} Tiếp tục học {c.name}</Text>
            <Title level={3} style={{ margin: 0 }}>{nx.title}</Title>
            <Text type="secondary">Bài {idx + 1} · {LEVEL_NAME[nx.level.id]}</Text>
            <Progress percent={pr.pct} size="small" format={() => `${pr.done}/${pr.total} bài`} style={{ maxWidth: 360, marginTop: 6 }} />
          </Flex>
          <Button type="primary" size="large" icon={<PlayCircleFilled />} href={`#/c/${lang}/u/${nx.id}`} className="cta">
            Học tiếp
          </Button>
        </Flex>
      </Card>
    </LangTheme>
  );
}

function WelcomeCard() {
  return (
    <Card className="hero-card">
      <Title level={3} style={{ marginTop: 0 }}>Bắt đầu hành trình của bạn 🚀</Title>
      <Paragraph type="secondary" style={{ marginBottom: 0 }}>
        Chọn một ngôn ngữ bên dưới. Mỗi bài học mất khoảng 30 phút, chia thành 6 bước ngắn có thể học dần: học từ mới, hiểu ngữ pháp,
        nghe hội thoại, đọc hiểu, tập nói và làm bài kiểm tra ngắn. Bạn tự chọn trình độ của mình
        và có thể học bất kỳ bài nào.
      </Paragraph>
    </Card>
  );
}

function TodayCard() {
  const p = useProgress();
  const daily = dailyXp(p), streak = streakNow(p);
  const dueBy = LANGS.map(l => [l, srsDue(p, l).length]).sort((a, b) => b[1] - a[1]);
  const [dueLang, due] = dueBy[0];
  const reached = daily >= DAILY_GOAL;
  return (
    <Card title="Hôm nay" style={{ height: '100%' }}>
      <Flex align="center" gap={16}>
        <Progress type="circle" size={92} percent={pct(daily, DAILY_GOAL)}
          format={() => <span className="ring-text"><b><CountUp value={Math.min(daily, DAILY_GOAL)} /></b><small>/{DAILY_GOAL} điểm</small></span>} />
        <Flex vertical gap={6}>
          <Text strong>{reached ? 'Đã đạt mục tiêu! 🎯' : 'Mục tiêu mỗi ngày'}</Text>
          <Text type="secondary"><FireFilled style={{ color: streak ? '#fa8c16' : undefined }} /> {streak ? `${streak} ngày liên tiếp` : 'Chưa có chuỗi ngày học'}</Text>
        </Flex>
      </Flex>
      <Badge count={due} offset={[-6, 18]} className="block-badge">
        <Button block size="large" icon={<HistoryOutlined />} style={{ marginTop: 16 }} disabled={!due}
          href={due ? `#/c/${dueLang}/review` : undefined}>
          {due ? `Ôn ${due} từ sắp quên` : 'Chưa có từ cần ôn'}
        </Button>
      </Badge>
    </Card>
  );
}

function LangCard({ lang }) {
  const p = useProgress();
  const c = COURSES[lang], pr = langProgress(p, lang), nx = nextUnit(p, lang);
  const started = pr.done > 0 || !!p.units[allUnits(lang)[0]?.id];
  const level = nx ? nx.level.id : null;
  return (
    <LangTheme lang={lang}>
      <Card hoverable className="lang-card" style={{ borderTopColor: LANG_UI[lang].color }}
        onClick={() => { location.hash = `#/c/${lang}`; }}>
        <Flex vertical gap={10}>
          <Flex align="center" gap={12}>
            <span className="lang-flag">{c.flag}</span>
            <div>
              <Title level={4} style={{ margin: 0 }}>{c.name}</Title>
              <Text type="secondary">{c.native}</Text>
            </div>
          </Flex>
          <Text type="secondary" style={{ minHeight: 44 }}>{c.tagline}</Text>
          <Flex justify="space-between" align="center">
            {level
              ? <Text>Trình độ: <b>{LEVEL_NAME[level]}</b> <Tag bordered={false}>{level}</Tag></Text>
              : <Text strong>🎉 Đã hoàn thành</Text>}
          </Flex>
          <Progress percent={pr.pct} size="small" format={() => `${pr.done}/${pr.total}`} />
          <Flex gap={8}>
            <Button type={started ? 'primary' : 'default'} size="large" style={{ flex: 1 }} href={`#/c/${lang}`} onClick={e => e.stopPropagation()}>
              {started ? 'Xem lộ trình' : 'Bắt đầu học'}
            </Button>
            <Tooltip title="Kho từ vựng theo cấp độ">
              <Button size="large" icon={<BookOutlined />} href={`#/c/${lang}/words`} onClick={e => e.stopPropagation()} aria-label="Kho từ vựng" />
            </Tooltip>
          </Flex>
        </Flex>
      </Card>
    </LangTheme>
  );
}

const HOW = [
  { title: 'Từ vựng', description: '20 từ, có phát âm', icon: <BookOutlined /> },
  { title: 'Ngữ pháp', description: 'Giải thích dễ hiểu', icon: <BulbOutlined /> },
  { title: 'Hội thoại', description: 'Nghe tình huống thật', icon: <MessageOutlined /> },
  { title: 'Đọc hiểu', description: 'Bài đọc + câu hỏi', icon: <ReadOutlined /> },
  { title: 'Luyện nói', description: 'Nói và được chấm điểm', icon: <AudioOutlined /> },
  { title: 'Kiểm tra', description: 'Đạt 70% là hoàn thành', icon: <TrophyOutlined /> }
];

export default function Home() {
  const p = useProgress();
  const last = p.lastLang && COURSES[p.lastLang] ? p.lastLang : null;
  const anyStarted = Object.keys(p.units).length > 0 || srsKeys(p).length > 0;
  return (
    <Stagger className="stack" style={{ '--gap': '28px' }}>
      <Item>
        <Title level={2} style={{ marginBottom: 4 }}>{greeting()} <span className="wave">👋</span></Title>
        <Text type="secondary" style={{ fontSize: 16 }}>Mỗi ngày 15 phút, đều đặn là sẽ giỏi.</Text>
      </Item>

      <Item><Row gutter={[16, 16]}>
        <Col xs={24} lg={16}>{last && anyStarted ? <ContinueCard lang={last} /> : <WelcomeCard />}</Col>
        <Col xs={24} lg={8}><TodayCard /></Col>
      </Row></Item>

      <Item>
        <Title level={4}>{anyStarted ? 'Ngôn ngữ của bạn' : 'Bạn muốn học ngôn ngữ nào?'}</Title>
        <Row gutter={[16, 16]}>
          {LANGS.map(l => <Col xs={24} md={8} key={l}><LangCard lang={l} /></Col>)}
        </Row>
      </Item>

      <Item>
        <Card title="Mỗi bài học gồm 6 bước">
          <Steps current={-1} items={HOW.map(s => ({ ...s, status: 'process' }))} />
        </Card>
      </Item>
    </Stagger>
  );
}
