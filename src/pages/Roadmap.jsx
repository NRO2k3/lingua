import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Button, Card, Flex, Popover, Progress, Segmented, Tag, Tooltip, Typography } from 'antd';
import {
  ArrowDownOutlined, ArrowUpOutlined, CaretRightFilled, CheckCircleFilled, CheckOutlined, CompassOutlined,
  DownOutlined, NodeIndexOutlined, PlayCircleFilled, SoundOutlined, TrophyFilled,
  TrophyOutlined, UnorderedListOutlined
} from '@ant-design/icons';
import { AnimatePresence, motion } from 'framer-motion';
import { COURSES, LEVEL_NAME } from '../lib/courses.js';
import { isDone, langProgress, nextUnit, srsKeys, update, useProgress } from '../lib/store.js';
import { pct } from '../lib/utils.js';
import { LangTheme, TokenVars } from '../components/common.jsx';
import { PRON_PITCH } from '../data/pron/index.js';
import { DUR, EASE, Item, Stagger } from '../components/motion.jsx';
import '../styles/roadmap.css';

const { Title, Text } = Typography;
const VIEW_KEY = 'lingua-roadmap-view';
const unitHref = (lang, id) => `#/c/${lang}/u/${id}`;

function readView() {
  try { return localStorage.getItem(VIEW_KEY) === 'list' ? 'list' : 'path'; } catch { return 'path'; }
}
function saveView(v) {
  try { localStorage.setItem(VIEW_KEY, v); } catch { /* chế độ riêng tư */ }
}
const reducedMotion = () => typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

// Trạng thái một bài: done | next | partial | todo
function unitState(p, u, nx) {
  if (nx && nx.id === u.id) return 'next';
  if (isDone(p, u.id)) return 'done';
  if (p.units[u.id]?.best != null) return 'partial';
  return 'todo';
}
const STATE_TEXT = { done: 'đã xong', next: 'bài hiện tại', partial: 'chưa đạt', todo: 'chưa học' };

/* ------------------------------------------------------------------ */
/* Chế độ danh sách: lưới thẻ như cũ                                   */
/* ------------------------------------------------------------------ */
function UnitCard({ lang, u, i, p, isNext, nodeRef }) {
  const done = isDone(p, u.id), best = p.units[u.id]?.best;
  const open = () => { location.hash = unitHref(lang, u.id); };
  let status;
  if (done) status = <Tag icon={<CheckCircleFilled />} color="success" bordered={false}>Đã xong · {best}%</Tag>;
  else if (best != null) status = <Tag color="warning" bordered={false}>Chưa đạt · {best}%</Tag>;
  else if (isNext) status = <Tag color="processing" bordered={false}>Bài tiếp theo</Tag>;
  else status = <Text type="secondary" style={{ fontSize: 13 }}>Chưa học</Text>;

  return (
    <div ref={nodeRef} style={{ height: '100%' }} data-current={isNext || undefined}>
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
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Chế độ con đường: nút tròn zig-zag nối bằng đường cong              */
/* ------------------------------------------------------------------ */
const ROW = 96;        // khoảng cách dọc giữa hai nút
const BUBBLE = 40;     // chỗ cho nhãn "Bắt đầu" phía trên bài hiện tại
const TOP = 56, TROPHY_GAP = 104, BOTTOM = 64;
const AMP = 24;        // độ lệch trái-phải (% chiều rộng đường đi)

function layoutPath(units, nxId, flip) {
  let y = TOP;
  const pts = units.map((u, k) => {
    if (u.id === nxId) y += BUBBLE;
    const x = 50 + (flip ? -1 : 1) * AMP * Math.sin(k * Math.PI / 4);
    const pt = { x, y };
    y += ROW;
    return pt;
  });
  const last = pts[pts.length - 1] || { y: TOP - ROW };
  const trophy = { x: 50, y: last.y + TROPHY_GAP };
  return { pts, trophy, height: trophy.y + BOTTOM };
}

const curve = (a, b) => {
  const m = (b.y - a.y) / 2;
  return `M${a.x} ${a.y} C${a.x} ${a.y + m} ${b.x} ${b.y - m} ${b.x} ${b.y}`;
};

function NodePopover({ lang, u, i, p, level, state, onClose, btnRef }) {
  const best = p.units[u.id]?.best;
  const tried = state === 'done' || best != null;
  return (
    <TokenVars>
      <div className={'pn-pop is-' + state} role="dialog" aria-label={`Bài ${i + 1}: ${u.title}`}>
        <div className="pn-pop-kicker">Bài {i + 1} · {level.id}</div>
        <div className="pn-pop-title">{u.title}</div>
        {u.goal && <p className="pn-pop-goal">{u.goal}</p>}
        <div className="pn-pop-best">
          {state === 'done' && <><CheckCircleFilled className="ok" /> Đã xong · điểm tốt nhất {best}%</>}
          {state !== 'done' && best != null && <>Điểm tốt nhất {best}% · cần 70% để qua bài</>}
          {best == null && state !== 'done' && <>Chưa học bài này</>}
        </div>
        <Button ref={btnRef} type="primary" size="large" block className="btn-3d" href={unitHref(lang, u.id)} onClick={onClose}>
          {tried ? 'Học lại' : 'Bắt đầu'}
        </Button>
      </div>
    </TokenVars>
  );
}

function PathNode({ lang, u, i, p, level, state, pt, side, open, setOpen, nodeRef, bubbleText }) {
  const best = p.units[u.id]?.best;
  const popBtn = useRef(null);
  const close = () => setOpen(null);
  const label = `Bài ${i + 1}: ${u.title} — ${STATE_TEXT[state]}${best != null ? `, điểm tốt nhất ${best}%` : ''}`;
  return (
    <div className={`pn-slot side-${side}`} style={{ left: pt.x + '%', top: pt.y }} ref={nodeRef} data-current={state === 'next' || undefined}>
      {state === 'next' && (
        <div className="pn-bubble" aria-hidden="true">{bubbleText}</div>
      )}
      <Popover trigger="click" placement="bottom" arrow open={open} destroyOnHidden
        onOpenChange={o => setOpen(o ? u.id : null)}
        afterOpenChange={o => { if (o) popBtn.current?.focus({ preventScroll: true }); }}
        classNames={{ root: 'pn-popover' }}
        content={<NodePopover lang={lang} u={u} i={i} p={p} level={level} state={state} onClose={close} btnRef={popBtn} />}>
        <button type="button" data-uid={u.id} className={'pn is-' + state} aria-label={label} aria-haspopup="dialog" aria-expanded={open}>
          {state === 'next' && <span className="pn-ring" aria-hidden="true" />}
          <span className="pn-face" aria-hidden="true">
            <span className="pn-emoji">{u.icon || '📘'}</span>
          </span>
          {state === 'done' && <span className="pn-badge ok" aria-hidden="true"><CheckOutlined /></span>}
          {(state === 'partial' || (state === 'next' && best != null)) && <span className="pn-badge warn" aria-hidden="true">{best}%</span>}
        </button>
      </Popover>
      <span className="pn-cap" aria-hidden="true">{u.title}</span>
    </div>
  );
}

function PathLevel({ lang, level, startIdx, p, nx, flip, setCurrentEl, bubbleText }) {
  const [openId, setOpenId] = useState(null);
  const { pts, trophy, height } = layoutPath(level.units, nx?.id, flip);
  const passed = p.levelTests?.[lang]?.[level.id];
  const states = level.units.map(u => unitState(p, u, nx));
  const all = [...pts, trophy];

  useEffect(() => {
    if (!openId) return;
    const onKey = e => {
      if (e.key !== 'Escape') return;
      document.querySelector(`.pn[data-uid="${openId}"]`)?.focus();
      setOpenId(null);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [openId]);

  return (
    <div className="path" style={{ height }}>
      <svg className="path-svg" viewBox={`0 0 100 ${height}`} preserveAspectRatio="none" width="100%" height={height} aria-hidden="true" focusable="false">
        {all.slice(1).map((b, k) => {
          const a = all[k];
          const lit = states[k] === 'done' && (k + 1 >= states.length ? !!passed || states.every(s => s === 'done') : states[k + 1] === 'done');
          return <path key={k} d={curve(a, b)} className={lit ? 'seg lit' : 'seg'} vectorEffect="non-scaling-stroke" />;
        })}
      </svg>
      {level.units.map((u, k) => (
        <PathNode key={u.id} lang={lang} u={u} i={startIdx + k} p={p} level={level} state={states[k]} pt={pts[k]}
          side={pts[k].x > 50.5 || (Math.abs(pts[k].x - 50) < 0.5 && k % 2) ? 'l' : 'r'}
          open={openId === u.id} setOpen={setOpenId} bubbleText={bubbleText}
          nodeRef={states[k] === 'next' ? setCurrentEl : undefined} />
      ))}
      <div className="pn-slot" style={{ left: trophy.x + '%', top: trophy.y }}>
        <Tooltip title={passed ? `Đã vượt cấp · ${passed.best}%` : 'Làm bài kiểm tra để vượt cấp'}>
          <a className={'pn pn-trophy' + (passed ? ' is-passed' : '')} href={`#/c/${lang}/level/${level.id}`}
            aria-label={`Kiểm tra cuối cấp ${level.id}${passed ? `, đã vượt cấp ${passed.best}%` : ''}`}>
            <span className="pn-face" aria-hidden="true"><TrophyFilled /></span>
          </a>
        </Tooltip>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Khối một cấp độ (tiêu đề + nội dung, thu gọn được ở chế độ con đường) */
/* ------------------------------------------------------------------ */
function LevelBlock({ lang, level, p, isCurrent, open, onToggle, collapsible, children }) {
  const ids = level.units.map(u => u.id), done = ids.filter(id => isDone(p, id)).length;
  const passed = p.levelTests?.[lang]?.[level.id];
  const complete = done === ids.length;
  const tone = isCurrent ? 'current' : complete || passed ? 'done' : 'plain';
  const testBtn = (
    <Button icon={<TrophyOutlined />} href={`#/c/${lang}/level/${level.id}`} className="lv-test level-test-btn">
      {passed ? 'Làm lại bài cuối cấp' : 'Kiểm tra cuối cấp'}
    </Button>
  );
  const bodyId = 'lvb-' + level.id;

  if (collapsible && !open) {
    return (
      <section id={'lv-' + level.id} className={'lv lv-collapsed tone-' + tone}>
        <button type="button" className="lv-row" aria-expanded="false" aria-controls={bodyId} onClick={onToggle}>
          <span className="lv-code">{level.id}</span>
          <span className="lv-row-main">
            <span className="lv-row-name">{LEVEL_NAME[level.id]}</span>
            <span className="lv-row-meta">
              <span className="lv-minibar"><i style={{ width: pct(done, ids.length) + '%' }} /></span>
              {done}/{ids.length} bài
              {passed && <span className="lv-passed"><TrophyFilled /> Đã vượt cấp</span>}
            </span>
          </span>
          {complete && <CheckCircleFilled className="lv-row-ok" aria-label="Hoàn thành" />}
          <DownOutlined className="lv-chev" aria-hidden="true" />
        </button>
      </section>
    );
  }

  return (
    <section id={'lv-' + level.id} className={'lv lv-open tone-' + tone}>
      <header className="lv-band">
        <div className="lv-band-top">
          <div className="lv-band-text">
            <div className="lv-kicker">
              <span className="lv-code">{level.id}</span>
              {isCurrent && <span>Cấp đang học</span>}
              {complete && <Tag color="success" bordered={false}>Hoàn thành</Tag>}
              {passed && <Tag icon={<TrophyFilled />} color="gold" bordered={false}>Đã vượt cấp · {passed.best}%</Tag>}
            </div>
            <h2 className="lv-name">{LEVEL_NAME[level.id]}</h2>
          </div>
          {collapsible && (
            <Tooltip title="Thu gọn">
              <Button type="text" shape="circle" className="lv-collapse" icon={<DownOutlined />} aria-expanded="true"
                aria-controls={bodyId} aria-label={`Thu gọn cấp ${level.id}`} onClick={onToggle} />
            </Tooltip>
          )}
        </div>
        <p className="lv-desc">{level.desc}</p>
        <div className="lv-band-foot">
          <div className="lv-progress">
            <span className="lv-bar"><i style={{ width: pct(done, ids.length) + '%' }} /></span>
            <span className="lv-count">{done}/{ids.length} bài</span>
          </div>
          {testBtn}
        </div>
      </header>
      <div id={bodyId}>{children}</div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Danh sách cấp độ (cột phải trên màn rộng; điểm/chuỗi ngày đã ở thanh bên) */
/* ------------------------------------------------------------------ */
function TodayCard({ lang, p, c, onJump, currentLevel }) {
  return (
    <Flex vertical gap={16}>
      <Card className="rm-card today-levels" size="small">
        <div className="today-title">Các cấp độ</div>
        {c.levels.map(l => {
          const n = l.units.length, d = l.units.filter(u => isDone(p, u.id)).length;
          return (
            <button type="button" key={l.id} className={'tl-row' + (l.id === currentLevel ? ' cur' : '')} onClick={() => onJump(l.id)}>
              <span className="lv-code">{l.id}</span>
              <span className="tl-name">{LEVEL_NAME[l.id]}</span>
              <span className="tl-count">{d}/{n}</span>
              {p.levelTests?.[lang]?.[l.id] && <TrophyFilled className="tl-trophy" aria-label="Đã vượt cấp" />}
            </button>
          );
        })}
      </Card>
    </Flex>
  );
}

/* ------------------------------------------------------------------ */
/* Nút nổi "Về bài hiện tại"                                           */
/* ------------------------------------------------------------------ */
function useOffscreen(el) {
  const [dir, setDir] = useState(null); // null | 'up' | 'down'
  useEffect(() => {
    if (!el || typeof IntersectionObserver === 'undefined') { setDir(null); return; }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setDir(null);
      else setDir(e.boundingClientRect.top < 0 ? 'up' : 'down');
    }, { rootMargin: '-64px 0px -24px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, [el]);
  return dir;
}

function useScrolled(min) {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const f = () => setOn(window.scrollY > min);
    f();
    window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, [min]);
  return on;
}

export default function Roadmap({ lang }) {
  const p = useProgress();
  const c = COURSES[lang];
  const pr = langProgress(p, lang), nx = nextUnit(p, lang);
  const level = p.level?.[lang];
  const curLevel = nx?.level.id || level || c.levels[0].id;
  const [view, setView] = useState(readView);
  const [openLv, setOpenLv] = useState(() => new Set([curLevel]));
  const [currentEl, setCurrentEl] = useState(null);
  const dir = useOffscreen(currentEl);
  const scrolled = useScrolled(160);

  useEffect(() => { setOpenLv(s => (s.has(curLevel) ? s : new Set(s).add(curLevel))); }, [curLevel]);

  const scrollToLevel = id => {
    setTimeout(() => document.getElementById('lv-' + id)?.scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth', block: 'start' }), 60);
  };
  const openLevel = id => setOpenLv(s => new Set(s).add(id));
  const toggleLevel = id => setOpenLv(s => { const n = new Set(s); n.has(id) ? n.delete(id) : n.add(id); return n; });
  const jumpLevel = id => { openLevel(id); scrollToLevel(id); };
  const pickLevel = id => {
    update(d => { d.level = { ...(d.level || {}), [lang]: id }; });
    jumpLevel(id);
  };
  const changeView = v => { setView(v); saveView(v); };
  const goCurrent = () => {
    if (!nx) return;
    const lvId = nx.level.id;
    const run = () => {
      const target = document.querySelector('.rm [data-current]') || document.getElementById('lv-' + lvId);
      target?.scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth', block: 'center' });
      target?.querySelector('button, [role="link"]')?.focus({ preventScroll: true });
    };
    if (view === 'path' && !openLv.has(lvId)) { openLevel(lvId); setTimeout(run, 320); } else run();
  };

  const bubbleText = pr.done || (nx && p.units[nx.id]?.best != null) ? 'Học tiếp' : 'Bắt đầu';
  // Chỉ hiện khi người học đã cuộn trang và bài hiện tại không còn trên màn hình
  const showFab = !!nx && scrolled && (dir != null || (view === 'path' && !openLv.has(nx.level.id)));
  let idx = 0;

  return (
    <LangTheme lang={lang}>
      <div className="rm">
        <div className="rm-grid">
          <div className="rm-main">
            {/* Đầu trang */}
            <Card className="rm-card rm-head">
              <div className="rm-top">
                <div className="rm-id">
                  <Progress type="circle" percent={pr.pct} size={64} strokeWidth={8}
                    format={() => <span className="rm-flag" aria-hidden="true">{c.flag}</span>} />
                  <div className="rm-id-text">
                    <Title level={1} className="rm-title">{c.name}</Title>
                    <Text type="secondary" className="rm-sub">
                      {pr.done}/{pr.total} bài · {srsKeys(p, lang).length} từ đã học
                    </Text>
                  </div>
                </div>
                {nx && (
                  <Button type="primary" size="large" className="btn-3d rm-go" icon={<PlayCircleFilled />} href={unitHref(lang, nx.id)}>
                    {pr.done ? 'Học tiếp' : 'Bắt đầu bài 1'}
                  </Button>
                )}
              </div>
              <div className="rm-level">
                <div className="rm-level-top">
                  <Text strong>{level ? 'Trình độ của bạn' : 'Bạn đang ở trình độ nào?'}</Text>
                  <Button size="small" type={level ? 'default' : 'primary'} ghost={!level} icon={<CompassOutlined />} href={`#/c/${lang}/placement`}>
                    Kiểm tra xếp lớp
                  </Button>
                </div>
                <Segmented block className="level-pick" value={level || null} onChange={pickLevel}
                  options={c.levels.map(l => ({ value: l.id, label: <div className="level-opt"><b>{l.id}</b><span>{LEVEL_NAME[l.id]}</span></div> }))} />
                <Text type="secondary" className="rm-hint">
                  Mọi bài đều mở. Trình độ chọn ở đây quyết định “Học tiếp” đưa bạn tới đâu — chưa chắc thì làm bài kiểm tra xếp lớp.
                </Text>
              </div>
            </Card>

            {pr.done === 0 && (
              <Card className="rm-card pron-start rm-pron">
                <div className="rm-pron-in">
                  <div className="rm-pron-icon" aria-hidden="true">🗣️</div>
                  <div className="rm-pron-text">
                    <div className="rm-pron-title">Bắt đầu với phát âm</div>
                    <Text type="secondary">{PRON_PITCH[lang]}</Text>
                  </div>
                  <Button type="primary" size="large" className="btn-3d rm-pron-btn" icon={<SoundOutlined />} href={`#/c/${lang}/pron`}>Học phát âm</Button>
                </div>
              </Card>
            )}

            <div className="rm-toolbar">
              <h2 className="rm-toolbar-title">Lộ trình</h2>
              <Segmented value={view} onChange={changeView} aria-label="Cách hiển thị lộ trình"
                options={[
                  { value: 'path', label: 'Con đường', icon: <NodeIndexOutlined /> },
                  { value: 'list', label: 'Danh sách', icon: <UnorderedListOutlined /> }
                ]} />
            </div>

            <div className="rm-levels">
              {c.levels.map((lv, li) => {
                const start = idx;
                idx += lv.units.length;
                const isOpen = view === 'list' || openLv.has(lv.id);
                return (
                  <LevelBlock key={lv.id} lang={lang} level={lv} p={p} isCurrent={lv.id === curLevel}
                    open={isOpen} collapsible={view === 'path'} onToggle={() => toggleLevel(lv.id)}>
                    {view === 'path' ? (
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div key="body" className="lv-body" style={{ overflow: 'clip' }} initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28, ease: EASE }}>
                            <PathLevel lang={lang} level={lv} startIdx={start} p={p} nx={nx} flip={li % 2 === 1}
                              setCurrentEl={setCurrentEl} bubbleText={bubbleText} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    ) : (
                      <Stagger className="rm-cards">
                        {lv.units.map((u, k) => (
                          <Item key={u.id} style={{ height: '100%' }}>
                            <UnitCard lang={lang} u={u} i={start + k} p={p} isNext={nx && nx.id === u.id}
                              nodeRef={nx && nx.id === u.id ? setCurrentEl : undefined} />
                          </Item>
                        ))}
                      </Stagger>
                    )}
                  </LevelBlock>
                );
              })}
            </div>
          </div>

          <aside className="rm-aside" aria-label="Các cấp độ">
            <div className="rm-aside-in">
              <TodayCard lang={lang} p={p} c={c} onJump={jumpLevel} currentLevel={curLevel} />
            </div>
          </aside>
        </div>

        {createPortal(
          <TokenVars>
            <AnimatePresence>
              {showFab && (
                <motion.div className="rm-fab" initial={{ opacity: 0, y: 16, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 16, scale: 0.9 }} transition={{ duration: DUR.base, ease: EASE }}>
                  <Button type="primary" size="large" className="btn-3d" onClick={goCurrent}
                    icon={dir === 'up' ? <ArrowUpOutlined /> : <ArrowDownOutlined />}>
                    Về bài hiện tại
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </TokenVars>,
          document.body
        )}
      </div>
    </LangTheme>
  );
}
