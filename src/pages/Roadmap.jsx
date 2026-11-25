import { Badge, Breadcrumb, Button, Card, Col, Divider, Flex, Progress, Row, Segmented, Tag, Typography } from 'antd';
import { BookOutlined, CaretRightFilled, CheckCircleFilled, HistoryOutlined, PlayCircleFilled, SoundOutlined } from '@ant-design/icons';
import { COURSES, LEVEL_NAME } from '../lib/courses.js';
import { isDone, langProgress, nextUnit, srsDue, srsKeys, update, useProgress } from '../lib/store.js';
import { pct } from '../lib/utils.js';
import { LangTheme } from '../components/common.jsx';
import { PRON_PITCH } from '../data/pron/index.js';
import { Item, Stagger } from '../components/motion.jsx';

const { Title, Text } = Typography;

function UnitCard({ lang, u, i, p, isNext }) {
  const done = isDone(p, u.id), best = p.units[u.id]?.best;
  const open = () => { location.hash = `#/c/${lang}/u/${u.id}`; };
  let status;
  if (done) status = <Tag icon={<CheckCircleFilled />} color="success" bordered={false}>Đã xong · {best}%</Tag>;
  else if (best != null) status = <Tag color="warning" bordered={false}>Chưa đạt · {best}%</Tag>;
  else if (isNext) status = <Tag color="processing" bordered={false}>Bài tiếp theo</Tag>;
  else status = <Text type="secondary" style={{ fontSize: 13 }}>Chưa học</Text>;

  return (
    <Card size="small" hoverable onClick={open} role="link" tabIndex={0} aria-label={`Bài ${i + 1}: ${u.title}`}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } }}
      className={'unit-card' + (done ? ' done' : '') + (isNext ? ' next' : '')}>
      <Flex gap={12} align="center">
        <div className="unit-icon">{u.icon || '📘'}</div>
        <Flex vertical gap={2} style={{ flex: 1, minWidth: 0 }}>
          <Text type="secondary" style={{ fontSize: 12 }}>Bài {i + 1}</Text>
          <Text strong className="unit-title">{u.title}</Text>
          <div>{status}</div>
        </Flex>
        {isNext && <Button type="primary" shape="circle" size="large" icon={<CaretRightFilled />} tabIndex={-1} aria-hidden="true" />}
      </Flex>
    </Card>
  );
}

export default function Roadmap({ lang }) {
  const p = useProgress();
  const c = COURSES[lang];
  const pr = langProgress(p, lang), nx = nextUnit(p, lang), due = srsDue(p, lang).length;
  const level = p.level?.[lang];
  const pickLevel = id => {
    update(d => { d.level = { ...(d.level || {}), [lang]: id }; });
    setTimeout(() => document.getElementById('lv-' + id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  };
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
              <Button size="large" icon={<SoundOutlined />} href={`#/c/${lang}/pron`}>Phát âm</Button>
            </Flex>
          </Flex>
          <Divider style={{ margin: '16px 0 12px' }} />
          <Flex vertical gap={8}>
            <Text strong>{level ? 'Trình độ của bạn' : 'Bạn đang ở trình độ nào? Chọn để bắt đầu đúng chỗ'}</Text>
            <Segmented block className="level-pick" value={level || null} onChange={pickLevel}
              options={c.levels.map(l => ({ value: l.id, label: <div className="level-opt"><b>{l.id}</b><span>{LEVEL_NAME[l.id]}</span></div> }))} />
            <Text type="secondary" style={{ fontSize: 13 }}>Bạn có thể mở bất kỳ bài nào. Trình độ chọn ở đây quyết định nút “Học tiếp” đưa bạn tới đâu.</Text>
          </Flex>
        </Card>

        {pr.done === 0 && (
          <Card className="pron-start">
            <Flex gap={16} align="center" wrap>
              <div className="hero-icon">🗣️</div>
              <Flex vertical gap={4} style={{ flex: '1 1 220px', minWidth: 0 }}>
                <Title level={4} style={{ margin: 0 }}>Bắt đầu với phát âm</Title>
                <Text type="secondary">{PRON_PITCH[lang]}</Text>
              </Flex>
              <Button type="primary" size="large" icon={<SoundOutlined />} href={`#/c/${lang}/pron`} className="cta">Học phát âm</Button>
            </Flex>
          </Card>
        )}

        {c.levels.map(level => {
          const ids = level.units.map(u => u.id), done = ids.filter(id => isDone(p, id)).length;
          return (
            <section key={level.id} id={'lv-' + level.id} className="level-section">
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
