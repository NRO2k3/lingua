import { Button, Progress } from 'antd';
import {
  AudioOutlined, BarChartOutlined, BookOutlined, BulbOutlined, CheckCircleFilled, FireFilled, HistoryOutlined,
  MessageOutlined, PlayCircleFilled, ReadOutlined, RightOutlined, TrophyOutlined
} from '@ant-design/icons';
import { COURSES, LANGS, LEVEL_NAME, allUnits } from '../lib/courses.js';
import { DAILY_GOAL, dailyXp, isDone, langProgress, nextUnit, srsDue, srsKeys, streakNow, useProgress } from '../lib/store.js';
import { pct } from '../lib/utils.js';
import { LangTheme } from '../components/common.jsx';
import { CountUp, Item, Stagger } from '../components/motion.jsx';
import '../styles/home.css';

function greeting() {
  const h = new Date().getHours();
  return h < 11 ? 'Chào buổi sáng' : h < 18 ? 'Chào buổi chiều' : 'Chào buổi tối';
}

// Thanh tiến độ tự vẽ (màu theo ngôn ngữ qua --primary)
function Bar({ value, label, thin }) {
  return (
    <div className={'h-bar' + (thin ? ' thin' : '')} role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={value} aria-label={label}>
      <div className="h-bar-fill" style={{ width: `${value}%` }} />
    </div>
  );
}

const started = (p, lang) => allUnits(lang).some(u => p.units[u.id]) || srsKeys(p, lang).length > 0;

/* ---------- Người đang học ---------- */

function ContinueHero({ lang }) {
  const p = useProgress();
  const c = COURSES[lang], nx = nextUnit(p, lang);

  if (!nx) {
    return (
      <LangTheme lang={lang}>
        <section className="h-hero" aria-label="Học tiếp">
          <div className="h-hero-top">
            <div className="h-hero-icon" aria-hidden>🎉</div>
            <div className="h-hero-text">
              <div className="h-eyebrow">{c.flag} {c.name}</div>
              <h2 className="h-hero-title">Bạn đã hoàn thành cả lộ trình!</h2>
              <div className="h-meta">Ôn từ mỗi ngày để không quên, hoặc thử một ngôn ngữ mới bên dưới.</div>
            </div>
          </div>
          <div className="h-hero-actions">
            <Button type="primary" size="large" className="btn-3d h-cta" icon={<HistoryOutlined />} href={`#/c/${lang}/review`}>Ôn từ vựng</Button>
            <a className="h-link" href={`#/c/${lang}`}>Xem lộ trình</a>
          </div>
        </section>
      </LangTheme>
    );
  }

  const level = nx.level, inLevel = level.units;
  const pos = inLevel.findIndex(u => u.id === nx.id) + 1;
  const lvDone = inLevel.filter(u => isDone(p, u.id)).length;
  const lvPct = pct(lvDone, inLevel.length);
  const tried = p.units[nx.id];

  return (
    <LangTheme lang={lang}>
      <section className="h-hero" aria-label="Học tiếp">
        <div className="h-hero-top">
          <div className="h-hero-icon" aria-hidden>{nx.icon}</div>
          <div className="h-hero-text">
            <div className="h-eyebrow">{c.flag} {c.name}</div>
            <h2 className="h-hero-title">{nx.title}</h2>
            <div className="h-meta">
              <span className="h-pill">{level.id}</span>
              <span>{LEVEL_NAME[level.id] || level.id}</span>
              <span className="h-dot" aria-hidden>·</span>
              <span>Bài {pos}/{inLevel.length}</span>
            </div>
          </div>
        </div>

        <div className="h-hero-progress">
          <div className="h-progress-row">
            <span>Tiến độ cấp {level.id}</span>
            <b>{lvDone}/{inLevel.length} bài</b>
          </div>
          <Bar value={lvPct} label={`Tiến độ cấp ${level.id}`} />
          {tried && !tried.done && tried.best > 0 && (
            <div className="h-note">Lần trước bạn đạt {tried.best}%, cần 70% để hoàn thành bài.</div>
          )}
        </div>

        <div className="h-hero-actions">
          <Button type="primary" size="large" className="btn-3d h-cta" icon={<PlayCircleFilled />} href={`#/c/${lang}/u/${nx.id}`}>
            {tried ? 'Học tiếp' : 'Bắt đầu bài'}
          </Button>
          <a className="h-link" href={`#/c/${lang}`}>Xem lộ trình</a>
          <a className="h-link" href={`#/c/${lang}/words`}><BookOutlined /> Kho từ</a>
        </div>
      </section>
    </LangTheme>
  );
}

function TodayPanel({ lang }) {
  const p = useProgress();
  const daily = dailyXp(p), streak = streakNow(p);
  const reached = daily >= DAILY_GOAL;
  // Ưu tiên ôn ngôn ngữ đang học, nếu không có thì ngôn ngữ có nhiều từ đến hạn nhất
  const dueBy = LANGS.map(l => [l, srsDue(p, l).length]).sort((a, b) => (b[0] === lang) - (a[0] === lang) || b[1] - a[1]);
  const [dueLang, due] = dueBy.find(([, n]) => n > 0) || [lang, 0];

  return (
    <section className="h-today" aria-label="Hôm nay">
      <div className="h-today-head">Hôm nay</div>
      <div className="h-today-body">
        <Progress type="circle" size={96} strokeWidth={9} percent={pct(daily, DAILY_GOAL)}
          className={'h-ring-prog' + (reached ? ' reached' : '')}
          format={() => (
            <span className="h-ring">
              <b><CountUp value={Math.min(daily, DAILY_GOAL)} /></b>
              <small>/{DAILY_GOAL} điểm</small>
            </span>
          )} />
        <div className="h-today-stats">
          <div className="h-goal">
            {reached
              ? <><CheckCircleFilled className="h-ok" /> Đã đạt mục tiêu!</>
              : <>Còn <b>{DAILY_GOAL - daily}</b> điểm để đạt mục tiêu</>}
          </div>
          <div className={'h-streak' + (streak ? ' on' : '')}>
            <FireFilled className="h-fire" />
            <span>{streak ? <><b>{streak}</b> ngày liên tiếp</> : 'Học hôm nay để bắt đầu chuỗi ngày'}</span>
          </div>
        </div>
      </div>
      {due > 0
        ? <Button size="large" block className="btn-3d h-review" icon={<HistoryOutlined />} href={`#/c/${dueLang}/review`}>
            Ôn {due} từ {COURSES[dueLang].flag}
          </Button>
        : <div className="h-review-empty"><CheckCircleFilled className="h-ok" /> Không có từ cần ôn hôm nay</div>}
      <a className="h-link h-stats-link" href="#/stats"><BarChartOutlined /> Xem bạn đã tiến bộ thế nào</a>
    </section>
  );
}

function LangChip({ lang }) {
  const p = useProgress();
  const c = COURSES[lang], pr = langProgress(p, lang);
  const isStarted = started(p, lang);
  return (
    <LangTheme lang={lang}>
      <a className="h-chip" href={`#/c/${lang}`} aria-label={`${c.name}: ${isStarted ? `hoàn thành ${pr.pct}%` : 'chưa bắt đầu'}`}>
        <span className="h-chip-flag" aria-hidden>{c.flag}</span>
        <span className="h-chip-main">
          <span className="h-chip-name">{c.name}</span>
          {isStarted
            ? <span className="h-chip-prog"><Bar value={pr.pct} thin label={`Tiến độ ${c.name}`} /><span>{pr.pct}%</span></span>
            : <span className="h-chip-sub">Chưa bắt đầu</span>}
        </span>
        <RightOutlined className="h-chip-arrow" aria-hidden />
      </a>
    </LangTheme>
  );
}

/* ---------- Người mới ---------- */

const PICK_NOTE = {
  en: 'Dùng cho học tập, công việc và du lịch khắp thế giới.',
  es: 'Phát âm dễ, hơn 20 quốc gia sử dụng.',
  zh: 'Người Việt có lợi thế nhờ âm Hán Việt.'
};

function LangPick({ lang }) {
  const c = COURSES[lang];
  return (
    <LangTheme lang={lang}>
      <article className="h-pick">
        <div className="h-pick-flag" aria-hidden>{c.flag}</div>
        <div className="h-pick-text">
          <h3 className="h-pick-name">{c.name}</h3>
          <div className="h-pick-native">{c.native}</div>
          <p className="h-pick-note">{PICK_NOTE[lang] || c.tagline}</p>
        </div>
        <div className="h-pick-actions">
          <Button type="primary" size="large" block className="btn-3d h-pick-btn" href={`#/c/${lang}`}>Học {c.name}</Button>
          <a className="h-link h-pick-alt" href={`#/c/${lang}/placement`}><span>Đã biết một chút?</span> <u>Kiểm tra xếp lớp</u></a>
        </div>
      </article>
    </LangTheme>
  );
}

const HOW = [
  { title: 'Từ vựng', icon: <BookOutlined /> },
  { title: 'Ngữ pháp', icon: <BulbOutlined /> },
  { title: 'Hội thoại', icon: <MessageOutlined /> },
  { title: 'Đọc hiểu', icon: <ReadOutlined /> },
  { title: 'Luyện nói', icon: <AudioOutlined /> },
  { title: 'Kiểm tra', icon: <TrophyOutlined /> }
];

function HowItWorks() {
  return (
    <section className="h-how" aria-label="Cách học">
      <h2 className="h-section-title">Mỗi bài gồm 6 bước ngắn</h2>
      <p className="h-section-sub">Mỗi bước khoảng 5 phút, học lúc nào cũng được. Đạt 70% ở bước kiểm tra là hoàn thành bài.</p>
      <ol className="h-how-list">
        {HOW.map((s, i) => (
          <li key={s.title} className="h-how-item">
            <span className="h-how-icon" aria-hidden>{s.icon}</span>
            <span className="h-how-label"><small>{i + 1}</small>{s.title}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ---------- Trang chủ ---------- */

export default function Home() {
  const p = useProgress();
  const startedLangs = LANGS.filter(l => started(p, l));
  const current = p.lastLang && COURSES[p.lastLang] && startedLangs.includes(p.lastLang) ? p.lastLang : startedLangs[0];

  if (!current) {
    return (
      <Stagger className="h-root h-new">
        <Item className="h-head">
          <h1 className="h-title">Chào mừng bạn đến với Lingua <span className="wave">👋</span></h1>
          <p className="h-sub">Bạn muốn học ngôn ngữ nào? Mỗi ngày một bài ngắn, đều đặn là sẽ giỏi.</p>
        </Item>
        <Item className="h-picks">
          {LANGS.map(l => <LangPick key={l} lang={l} />)}
        </Item>
        <Item><HowItWorks /></Item>
      </Stagger>
    );
  }

  const others = LANGS.filter(l => l !== current);
  return (
    <Stagger className="h-root">
      <Item className="h-head">
        <h1 className="h-title">{greeting()} <span className="wave">👋</span></h1>
        <p className="h-sub">Mỗi ngày một bài ngắn, đều đặn là sẽ giỏi.</p>
      </Item>
      <Item className="h-main">
        <ContinueHero lang={current} />
        <TodayPanel lang={current} />
      </Item>
      {others.length > 0 && (
        <Item>
          <section aria-label="Ngôn ngữ khác">
            <h2 className="h-section-title">Ngôn ngữ khác</h2>
            <div className="h-langs">{others.map(l => <LangChip key={l} lang={l} />)}</div>
          </section>
        </Item>
      )}
    </Stagger>
  );
}
