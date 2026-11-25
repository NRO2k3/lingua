import { Component, useEffect, useRef, useState } from 'react';
import { App as AntApp, Button, ConfigProvider, Flex, Layout, Progress, Result, Tooltip, theme } from 'antd';
import { BarChartOutlined, FireFilled, MoonOutlined, MutedOutlined, SoundOutlined, StarFilled, SunOutlined } from '@ant-design/icons';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import viVN from 'antd/locale/vi_VN';
import { COURSES } from './lib/courses.js';
import { DAILY_GOAL, backfillSrs, dailyXp, streakNow, update, useProgress } from './lib/store.js';
import { stopRec, stopSpeaking } from './lib/speech.js';
import { pct } from './lib/utils.js';
import { TokenVars } from './components/common.jsx';
import { CountUp, EASE } from './components/motion.jsx';
import { play, useMuted } from './lib/sfx.js';
import { sparkle } from './lib/celebrate.js';
import Home from './pages/Home.jsx';
import Roadmap from './pages/Roadmap.jsx';
import Lesson from './pages/Lesson.jsx';
import Review from './pages/Review.jsx';
import WordBank from './pages/WordBank.jsx';
import Pronunciation from './pages/Pronunciation.jsx';
import LevelTest, { PlacementTest } from './pages/LevelTest.jsx';
import Stats from './pages/Stats.jsx';

const FONT = "'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', "
  + "'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', sans-serif";

function useRoute() {
  const read = () => location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  const [route, setRoute] = useState(read);
  useEffect(() => {
    const onChange = () => { stopRec(); stopSpeaking(); setRoute(read()); window.scrollTo(0, 0); };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return route;
}

function useSystemDark() {
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  const [dark, setDark] = useState(mq.matches);
  useEffect(() => {
    const f = e => setDark(e.matches);
    mq.addEventListener('change', f);
    return () => mq.removeEventListener('change', f);
  }, []);
  return dark;
}

// Khi giá trị tăng: trả về {n, k} trong ~1.2s để hiện hiệu ứng "+n"
function useGain(value) {
  const prev = useRef(value);
  const [gain, setGain] = useState(null);
  useEffect(() => {
    const d = value - prev.current;
    prev.current = value;
    if (d <= 0) return;
    const g = { n: d, k: Date.now() };
    setGain(g);
    const t = setTimeout(() => setGain(x => (x === g ? null : x)), 1200);
    return () => clearTimeout(t);
  }, [value]);
  return gain;
}

function Header({ dark, onToggleTheme }) {
  const p = useProgress();
  const { message } = AntApp.useApp();
  const { token } = theme.useToken();
  const [muted, setMuted] = useMuted();
  const streak = streakNow(p), daily = dailyXp(p);
  const xpGain = useGain(p.xp), streakGain = useGain(streak), dailyGain = useGain(daily);

  useEffect(() => { if (xpGain) play('xp'); }, [xpGain]);
  // Vừa đạt mục tiêu ngày
  useEffect(() => {
    if (dailyGain && daily >= DAILY_GOAL && daily - dailyGain.n < DAILY_GOAL) {
      sparkle(0.85, 0.08);
      message.success({ content: 'Tuyệt vời! Bạn đã đạt mục tiêu hôm nay 🎯', duration: 3 });
    }
  }, [dailyGain]);

  return (
    <Layout.Header className="header">
      <Flex align="center" justify="space-between" className="wrap" style={{ height: '100%' }}>
        <a href="#/" className="brand"><span className="brand-mark">L</span><span>Lingua</span></a>
        <Flex align="center" gap={14} className="header-right">
          <Tooltip title={streak ? `Bạn đã học ${streak} ngày liên tiếp` : 'Học hôm nay để bắt đầu chuỗi ngày học'}>
            <span className="stat">
              <motion.span key={streakGain?.k} className="stat-icon" animate={streakGain ? { scale: [1, 1.5, 1], rotate: [0, -15, 15, 0] } : {}} transition={{ duration: 0.7 }}>
                <FireFilled style={{ color: streak ? '#fa8c16' : token.colorTextQuaternary }} />
              </motion.span>
              {streak}
            </span>
          </Tooltip>
          <Tooltip title={`Mục tiêu hôm nay: ${Math.min(daily, DAILY_GOAL)}/${DAILY_GOAL} điểm`}>
            <span className="stat">
              <Progress type="circle" size={20} strokeWidth={16} percent={pct(daily, DAILY_GOAL)} showInfo={false} />
              <span className="hide-xs"><CountUp value={Math.min(daily, DAILY_GOAL)} />/{DAILY_GOAL}</span>
            </span>
          </Tooltip>
          <Tooltip title="Tổng điểm của bạn">
            <span className="stat xp-stat">
              <motion.span key={xpGain?.k} className="stat-icon" animate={xpGain ? { scale: [1, 1.45, 1], rotate: [0, 20, 0] } : {}} transition={{ duration: 0.6 }}>
                <StarFilled style={{ color: '#faad14' }} />
              </motion.span>
              <CountUp value={p.xp} />
              <AnimatePresence>
                {xpGain && (
                  <motion.span key={xpGain.k} className="xp-fly" initial={{ opacity: 0, y: 6, scale: 0.8 }}
                    animate={{ opacity: 1, y: -14, scale: 1 }} exit={{ opacity: 0, y: -28 }} transition={{ duration: 0.5, ease: EASE }}>
                    +{xpGain.n}
                  </motion.span>
                )}
              </AnimatePresence>
            </span>
          </Tooltip>
          <Tooltip title="Xem thống kê tiến bộ">
            <Button type="text" shape="circle" icon={<BarChartOutlined />} href="#/stats" aria-label="Thống kê" />
          </Tooltip>
          <Tooltip title={muted ? 'Bật âm thanh hiệu ứng' : 'Tắt âm thanh hiệu ứng'}>
            <Button type="text" shape="circle" icon={muted ? <MutedOutlined /> : <SoundOutlined />} onClick={() => setMuted(!muted)} aria-label="Bật/tắt âm thanh" />
          </Tooltip>
          <Tooltip title={dark ? 'Chuyển sang nền sáng' : 'Chuyển sang nền tối'}>
            <Button type="text" shape="circle" icon={dark ? <SunOutlined /> : <MoonOutlined />} onClick={onToggleTheme} aria-label="Đổi nền sáng/tối" />
          </Tooltip>
        </Flex>
      </Flex>
    </Layout.Header>
  );
}

// Lỗi bất ngờ trong một trang: hiện thông báo thay vì trắng màn hình
class ErrorBoundary extends Component {
  state = { error: null };
  static getDerivedStateFromError(error) { return { error }; }
  componentDidCatch(error) { console.error(error); }
  render() {
    if (!this.state.error) return this.props.children;
    return (
      <Result status="warning" title="Có lỗi khi hiển thị trang này"
        subTitle="Bạn thử quay về trang chủ. Nếu lỗi lặp lại, có thể dữ liệu tiến độ trong trình duyệt bị hỏng."
        extra={[
          <Button key="home" type="primary" href="#/" onClick={() => this.setState({ error: null })}>Về trang chủ</Button>,
          <Button key="reset" danger onClick={() => {
            if (window.confirm('Xoá toàn bộ tiến độ học trên trình duyệt này? Không thể hoàn tác.')) {
              try { localStorage.removeItem('lingua-progress-v1'); } catch { /* bỏ qua */ }
              location.hash = '#/'; location.reload();
            }
          }}>Xoá dữ liệu tiến độ</Button>
        ]} />
    );
  }
}

function Page({ route }) {
  const [c, lang, kind, uid] = route;
  if (c === 'stats') return <Stats />;
  if (c !== 'c' || !Object.hasOwn(COURSES, lang)) return <Home />;
  if (kind === 'u' && uid) return <Lesson key={uid} lang={lang} uid={uid} />;
  if (kind === 'review') return <Review key={lang} lang={lang} />;
  if (kind === 'words') return <WordBank key={lang} lang={lang} />;
  if (kind === 'pron') return <Pronunciation key={lang} lang={lang} drill={uid} />;
  if (kind === 'placement') return <PlacementTest key={lang} lang={lang} />;
  if (kind === 'level' && uid) return <LevelTest key={uid} lang={lang} levelId={uid} />;
  return <Roadmap lang={lang} />;
}

export default function App() {
  const p = useProgress();
  const sysDark = useSystemDark();
  const dark = p.theme ? p.theme === 'dark' : sysDark;
  const route = useRoute();

  // Nhớ ngôn ngữ đang học để trang chủ gợi ý "Học tiếp"
  useEffect(() => {
    const lang = route[0] === 'c' && COURSES[route[1]] ? route[1] : null;
    if (lang && p.lastLang !== lang) update(d => { d.lastLang = lang; });
  }, [route.join('/')]);

  useEffect(() => { document.documentElement.style.colorScheme = dark ? 'dark' : 'light'; }, [dark]);
  useEffect(() => { backfillSrs(); }, []);

  return (
    <ConfigProvider
      locale={viVN}
      theme={{
        algorithm: dark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: { colorPrimary: '#1677ff', borderRadius: 10, fontSize: 15, fontFamily: FONT },
        components: {
          Layout: { headerBg: dark ? '#141414' : '#ffffff', headerHeight: 60, headerPadding: '0 16px', bodyBg: dark ? '#000' : '#f5f7fa' },
          Card: { headerFontSize: 17 }
        }
      }}
    >
      <MotionConfig reducedMotion="user">
      <AntApp>
        <TokenVars>
          <Layout className="app">
            <Header dark={dark} onToggleTheme={() => update(d => { d.theme = dark ? 'light' : 'dark'; })} />
            <Layout.Content className="wrap content">
              <motion.div key={route.join('/')} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: EASE }}>
                <ErrorBoundary key={route.join('/')}><Page route={route} /></ErrorBoundary>
              </motion.div>
            </Layout.Content>
            <Layout.Footer className="footer">Lingua · Mỗi ngày một chút, đều đặn là giỏi</Layout.Footer>
          </Layout>
        </TokenVars>
      </AntApp>
      </MotionConfig>
    </ConfigProvider>
  );
}
