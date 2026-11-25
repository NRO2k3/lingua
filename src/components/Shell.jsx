// Khung điều hướng chung (app shell), tham chiếu Duolingo:
import { LinguaMark } from './common.jsx';
//  ≥1100px  thanh bên trái đầy đủ (240px)
//  768–1099 thanh bên chỉ icon (80px) + tooltip
//  <768px   thanh tab cố định ở đáy
// Chế độ tập trung (bài học, kiểm tra xếp lớp, kiểm tra cuối cấp, bài luyện phát âm): ẩn thanh bên/thanh tab/header.
// Trang con biết trạng thái qua useShell() hoặc class `shell-focus` / thuộc tính data-focus trên `.shell`.
import { createContext, useContext, useEffect, useState } from 'react';
import { Dropdown, Layout, Tooltip } from 'antd';
import {
  AudioFilled, AudioOutlined, BarChartOutlined, BookFilled, BookOutlined, CheckOutlined, DownOutlined,
  HomeFilled, HomeOutlined, ProfileFilled, ProfileOutlined, ThunderboltFilled, ThunderboltOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';
import { COURSES, LANGS } from '../lib/courses.js';
import { srsDue, update, useProgress } from '../lib/store.js';
import { EASE } from './motion.jsx';
import '../styles/shell.css';

export const DEFAULT_LANG = 'en';

// Route dạng mảng (vd ['c','en','u','en-a1-1']) có phải màn cần tập trung không
export function isFocusRoute(route) {
  const [c, lang, kind, id] = route;
  if (c !== 'c' || !Object.hasOwn(COURSES, lang)) return false;
  return (kind === 'u' && !!id) || kind === 'placement' || (kind === 'level' && !!id) || (kind === 'pron' && !!id);
}

// Mục điều hướng đang mở
function activeKey(route) {
  const [c, lang, kind] = route;
  if (c === 'stats') return 'stats';
  if (c !== 'c' || !Object.hasOwn(COURSES, lang)) return 'home';
  if (kind === 'review' || kind === 'words' || kind === 'pron') return kind;
  return 'learn';
}

const ShellContext = createContext({ focus: false, lang: DEFAULT_LANG, active: 'home' });
export const useShell = () => useContext(ShellContext);

function useMedia(query) {
  const [ok, setOk] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const f = e => setOk(e.matches);
    setOk(mq.matches);
    mq.addEventListener('change', f);
    return () => mq.removeEventListener('change', f);
  }, [query]);
  return ok;
}

function navItems(lang, due) {
  return [
    { key: 'learn', label: 'Học', href: `#/c/${lang}`, icon: BookOutlined, iconOn: BookFilled },
    { key: 'review', label: 'Ôn tập', href: `#/c/${lang}/review`, icon: ThunderboltOutlined, iconOn: ThunderboltFilled, badge: due,
      aria: due ? `Ôn tập, ${due} từ đến hạn` : 'Ôn tập' },
    { key: 'words', label: 'Kho từ', href: `#/c/${lang}/words`, icon: ProfileOutlined, iconOn: ProfileFilled },
    { key: 'pron', label: 'Phát âm', href: `#/c/${lang}/pron`, icon: AudioOutlined, iconOn: AudioFilled },
    { key: 'stats', label: 'Thống kê', href: '#/stats', icon: BarChartOutlined, iconOn: BarChartOutlined },
    { key: 'home', label: 'Trang chủ', href: '#/', icon: HomeOutlined, iconOn: HomeFilled, sideOnly: true }
  ];
}

const badgeText = n => (n > 99 ? '99+' : String(n));

function switchLang(l) {
  update(d => { d.lastLang = l; });
  location.hash = `#/c/${l}`;
}

// Bộ chọn ngôn ngữ đang học. variant: 'side' (thanh bên) | 'header' (đầu trang trên điện thoại)
export function LangPicker({ variant = 'side', collapsed = false }) {
  const { lang } = useShell();
  const c = COURSES[lang];
  const items = LANGS.map(l => ({
    key: l,
    label: (
      <span className="lang-opt">
        <span className="lang-opt-flag" aria-hidden>{COURSES[l].flag}</span>
        <span className="lang-opt-name">{COURSES[l].name}</span>
        {l === lang && <CheckOutlined className="lang-opt-check" />}
      </span>
    )
  }));
  const compact = variant === 'header' || collapsed;
  const btn = (
    <button type="button" className={'lang-pick' + (compact ? ' compact' : '') + ' ' + variant}
      aria-label={`Đang học ${c.name}. Đổi ngôn ngữ`} aria-haspopup="menu">
      <span className="lang-pick-flag" aria-hidden>{c.flag}</span>
      {!compact && <span className="lang-pick-name">{c.name}</span>}
      {!compact && <DownOutlined className="lang-pick-caret" />}
    </button>
  );
  return (
    <Dropdown trigger={['click']} placement={variant === 'header' ? 'bottomLeft' : collapsed ? 'bottomLeft' : 'bottom'}
      menu={{ items, selectable: true, selectedKeys: [lang], onClick: ({ key }) => switchLang(key) }}>
      {collapsed
        ? <Tooltip title={`Đang học: ${c.name}`} placement="right">{btn}</Tooltip>
        : btn}
    </Dropdown>
  );
}

function NavLink({ item, active, collapsed, layoutId }) {
  const on = item.key === active;
  const Icon = on ? item.iconOn : item.icon;
  const link = (
    <a href={item.href} className={'snav-item' + (on ? ' is-active' : '')} aria-current={on ? 'page' : undefined}
      aria-label={item.aria || item.label}>
      {on && <motion.span layoutId={layoutId} className="snav-hl" transition={{ duration: 0.2, ease: EASE }} />}
      <span className="snav-icon" aria-hidden><Icon /></span>
      <span className="snav-label" aria-hidden>{item.label}</span>
      {!!item.badge && <span className="snav-badge" aria-hidden>{badgeText(item.badge)}</span>}
    </a>
  );
  return collapsed ? <Tooltip title={item.aria || item.label} placement="right">{link}</Tooltip> : link;
}

function SideNav({ items, active }) {
  const collapsed = useMedia('(min-width: 768px) and (max-width: 1099.98px)');
  return (
    <nav className="snav" aria-label="Điều hướng chính">
      <a href="#/" className="brand snav-brand" aria-label="Lingua – Trang chủ">
        <LinguaMark /><span className="snav-brand-name brand-word">Lingua</span>
      </a>
      <LangPicker variant="side" collapsed={collapsed} />
      <ul className="snav-list">
        {items.map(it => (
          <li key={it.key}><NavLink item={it} active={active} collapsed={collapsed} layoutId="snav-hl" /></li>
        ))}
      </ul>
    </nav>
  );
}

function TabBar({ items, active }) {
  return (
    <nav className="tabbar" aria-label="Điều hướng chính">
      {items.filter(it => !it.sideOnly).map(it => {
        const on = it.key === active;
        const Icon = on ? it.iconOn : it.icon;
        return (
          <a key={it.key} href={it.href} className={'tab-item' + (on ? ' is-active' : '')}
            aria-current={on ? 'page' : undefined} aria-label={it.aria || it.label}>
            <span className="tab-icon" aria-hidden>
              {on && <motion.span layoutId="tab-hl" className="tab-hl" transition={{ duration: 0.2, ease: EASE }} />}
              <Icon />
              {!!it.badge && <span className="tab-badge">{badgeText(it.badge)}</span>}
            </span>
            <span className="tab-label" aria-hidden>{it.label}</span>
          </a>
        );
      })}
    </nav>
  );
}

// header: phần tử Header (vẫn được gắn trong chế độ tập trung để giữ hiệu ứng điểm/âm thanh, chỉ bị ẩn bằng CSS)
export default function Shell({ route, header, children }) {
  const p = useProgress();
  const focus = isFocusRoute(route);
  const routeLang = route[0] === 'c' && Object.hasOwn(COURSES, route[1]) ? route[1] : null;
  const lang = routeLang || (p.lastLang && COURSES[p.lastLang] ? p.lastLang : DEFAULT_LANG);
  const active = activeKey(route);
  const items = navItems(lang, srsDue(p, lang).length);

  return (
    <ShellContext.Provider value={{ focus, lang, active }}>
      <div className={'shell' + (focus ? ' shell-focus' : '')} data-focus={focus ? '' : undefined}>
        {!focus && <SideNav items={items} active={active} />}
        <Layout className="app shell-main">
          {header}
          {children}
        </Layout>
        {!focus && <TabBar items={items} active={active} />}
      </div>
    </ShellContext.Provider>
  );
}
