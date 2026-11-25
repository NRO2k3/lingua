import { App, Badge, Breadcrumb, Button, Card, Col, Divider, Flex, Progress, Row, Switch, Tag, Typography } from 'antd';
import { BookOutlined, CaretRightFilled, CheckCircleFilled, HistoryOutlined, LockOutlined, PlayCircleFilled } from '@ant-design/icons';
import { COURSES, LEVEL_NAME } from '../lib/courses.js';
import { isDone, isUnlocked, langProgress, nextUnit, srsDue, srsKeys, update, useProgress } from '../lib/store.js';
import { pct } from '../lib/utils.js';
import { LangTheme } from '../components/common.jsx';
import { Item, Stagger } from '../components/motion.jsx';

const { Title, Text } = Typography;

function UnitCard({ lang, u, i, p, isNext }) {
  const { message } = App.useApp();
  const open = isUnlocked(p, lang, i), done = isDone(p, u.id), best = p.units[u.id]?.best;
  let status;
  if (done) status = <Tag icon={<CheckCircleFilled />} color="success" bordered={false}>Đã xong · {best}%</Tag>;
  else if (!open) status = <Text type="secondary" style={{ fontSize: 13 }}><LockOutlined /> Xong bài trước để mở</Text>;
  else if (best != null) status = <Tag color="warning" bordered={false}>Chưa đạt · {best}%</Tag>;
  else if (isNext) status = <Tag color="processing" bordered={false}>Bài tiếp theo</Tag>;
  else status = <Text type="secondary" style={{ fontSize: 13 }}>Chưa học</Text>;

  const go = () => open
    ? (location.hash = `#/c/${lang}/u/${u.id}`)
    : message.info('Hoàn thành bài trước (đạt từ 70%) để mở bài này nhé.');

  return (
    <Card size="small" hoverable={open} onClick={go}
      className={'unit-card' + (done ? ' done' : '') + (!open ? ' locked' : '') + (isNext ? ' next' : '')}>
      <Flex gap={12} align="center">
        <div className="unit-icon">{u.icon || '📘'}</div>
        <Flex vertical gap={2} style={{ flex: 1, minWidth: 0 }}>
          <Text type="secondary" style={{ fontSize: 12 }}>Bài {i + 1}</Text>
          <Text strong className="unit-title">{u.title}</Text>
          <div>{status}</div>
        </Flex>
        {isNext && <Button type="primary" shape="circle" size="large" icon={<CaretRightFilled />} aria-label="Bắt đầu" />}
      </Flex>
    </Card>
  );
}

export default function Roadmap({ lang }) {
  const p = useProgress();
  const c = COURSES[lang];
  const pr = langProgress(p, lang), nx = nextUnit(p, lang), due = srsDue(p, lang).length;
  let idx = 0;
  return (
    <LangTheme lang={lang}>
      <Flex vertical gap={20}>
        <Breadcrumb items={[{ title: <a href="#/">Trang chủ</a> }, { title: c.name }]} />

        <Card>
          <Flex wrap gap={20} align="center" justify="space-between">
            <Flex gap={16} align="center">
              <Progress type="circle" percent={pr.pct} size={80} format={() => <span style={{ fontSize: 30 }}>{c.flag}</span>} />
              <div>
                <Title level={3} style={{ margin: 0 }}>Lộ trình {c.name}</Title>
                <Text type="secondary">Đã xong {pr.done}/{pr.total} bài · đã học {srsKeys(p, lang).length} từ</Text>
              </div>
            </Flex>
            <Flex gap={10} wrap>
              {nx && <Button type="primary" size="large" icon={<PlayCircleFilled />} href={`#/c/${lang}/u/${nx.id}`}>
                {pr.done ? 'Học tiếp' : 'Bắt đầu bài 1'}
              </Button>}
              <Badge count={due}>
                <Button size="large" icon={<HistoryOutlined />} href={`#/c/${lang}/review`}>Ôn từ vựng</Button>
              </Badge>
              <Button size="large" icon={<BookOutlined />} href={`#/c/${lang}/words`}>Kho từ vựng</Button>
            </Flex>
          </Flex>
          <Divider style={{ margin: '16px 0 12px' }} />
          <Flex align="center" gap={10}>
            <Switch size="small" checked={!!p.free[lang]} onChange={v => update(d => { d.free[lang] = v; })} />
            <Text type="secondary">Mở tất cả bài, nếu bạn đã biết trước một phần kiến thức</Text>
          </Flex>
        </Card>

        {c.levels.map(level => {
          const ids = level.units.map(u => u.id), done = ids.filter(id => isDone(p, id)).length;
          return (
            <section key={level.id}>
              <Flex align="center" gap={8} wrap>
                <Title level={4} style={{ margin: 0 }}>{LEVEL_NAME[level.id]}</Title>
                <Tag bordered={false}>{level.id}</Tag>
                {done === ids.length && <Tag color="success" bordered={false}>Hoàn thành</Tag>}
              </Flex>
              <Text type="secondary" style={{ display: 'block', margin: '4px 0 8px' }}>{level.desc}</Text>
              <Progress percent={pct(done, ids.length)} size="small" format={() => `${done}/${ids.length}`} style={{ maxWidth: 320 }} />
              <Stagger>
                <Row gutter={[12, 12]} style={{ marginTop: 8 }}>
                  {level.units.map(u => {
                    const i = idx++;
                    return (
                      <Col xs={24} sm={12} lg={8} key={u.id}>
                        <Item style={{ height: '100%' }}><UnitCard lang={lang} u={u} i={i} p={p} isNext={nx && nx.id === u.id} /></Item>
                      </Col>
                    );
                  })}
                </Row>
              </Stagger>
            </section>
          );
        })}
      </Flex>
    </LangTheme>
  );
}
