import { useEffect, useState } from 'react';
import { App as AntApp, Button, ConfigProvider, Flex, Layout, Progress, Tooltip, theme } from 'antd';
import { FireFilled, MoonOutlined, StarFilled, SunOutlined } from '@ant-design/icons';
import viVN from 'antd/locale/vi_VN';
import { COURSES } from './lib/courses.js';
import { DAILY_GOAL, dailyXp, streakNow, update, useProgress } from './lib/store.js';
import { stopRec, stopSpeaking } from './lib/speech.js';
import { pct } from './lib/utils.js';
import { TokenVars } from './components/common.jsx';
import Home from './pages/Home.jsx';
import Roadmap from './pages/Roadmap.jsx';
import Lesson from './pages/Lesson.jsx';
import Review from './pages/Review.jsx';

const FONT = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', "
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

function Header({ dark, onToggleTheme }) {
  const p = useProgress();
  const { token } = theme.useToken();
  const streak = streakNow(p), daily = dailyXp(p);
  return (
    <Layout.Header className="header">
      <Flex align="center" justify="space-between" className="wrap" style={{ height: '100%' }}>
        <a href="#/" className="brand"><span className="brand-mark">L</span><span>Lingua</span></a>
        <Flex align="center" gap={14}>
          <Tooltip title={streak ? `Bạn đã học ${streak} ngày liên tiếp` : 'Học hôm nay để bắt đầu chuỗi ngày học'}>
            <span className="stat"><FireFilled style={{ color: streak ? '#fa8c16' : token.colorTextQuaternary }} />{streak}</span>
          </Tooltip>
          <Tooltip title={`Mục tiêu hôm nay: ${Math.min(daily, DAILY_GOAL)}/${DAILY_GOAL} điểm`}>
            <span className="stat">
              <Progress type="circle" size={20} strokeWidth={16} percent={pct(daily, DAILY_GOAL)} showInfo={false} />
              <span className="hide-xs">{Math.min(daily, DAILY_GOAL)}/{DAILY_GOAL}</span>
            </span>
          </Tooltip>
          <Tooltip title="Tổng điểm của bạn">
            <span className="stat"><StarFilled style={{ color: '#faad14' }} />{p.xp}</span>
          </Tooltip>
          <Tooltip title={dark ? 'Chuyển sang nền sáng' : 'Chuyển sang nền tối'}>
            <Button type="text" shape="circle" icon={dark ? <SunOutlined /> : <MoonOutlined />} onClick={onToggleTheme} aria-label="Đổi nền sáng/tối" />
          </Tooltip>
        </Flex>
      </Flex>
    </Layout.Header>
  );
}

function Page({ route }) {
  const [c, lang, kind, uid] = route;
  if (c !== 'c' || !COURSES[lang]) return <Home />;
  if (kind === 'u' && uid) return <Lesson key={uid} lang={lang} uid={uid} />;
  if (kind === 'review') return <Review key={lang} lang={lang} />;
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
      <AntApp>
        <TokenVars>
          <Layout className="app">
            <Header dark={dark} onToggleTheme={() => update(d => { d.theme = dark ? 'light' : 'dark'; })} />
            <Layout.Content className="wrap content"><Page route={route} /></Layout.Content>
            <Layout.Footer className="footer">Lingua · Mỗi ngày một chút, đều đặn là giỏi</Layout.Footer>
          </Layout>
        </TokenVars>
      </AntApp>
    </ConfigProvider>
  );
}
