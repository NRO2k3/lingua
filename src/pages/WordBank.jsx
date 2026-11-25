import { useDeferredValue, useEffect, useMemo, useState } from 'react';
import {
  App, Breadcrumb, Button, Card, Col, Empty, Flex, Input, List, Progress, Result, Row, Segmented, Skeleton, Tag, Tooltip, Typography
} from 'antd';
import { BookOutlined, CheckOutlined, CreditCardOutlined, PlusOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { COURSES, LEVEL_NAME } from '../lib/courses.js';
import { bankKey, getProgress, update, useProgress } from '../lib/store.js';
import { play } from '../lib/sfx.js';
import { dayStr, noAccent, pct, shuffle } from '../lib/utils.js';
import { Flashcard, HanViet, LangTheme, SoundButton } from '../components/common.jsx';
import { EASE } from '../components/motion.jsx';

const { Title, Text, Paragraph } = Typography;

const LEVELS = { en: ['A1', 'A2', 'B1', 'B2'], es: ['A1', 'A2', 'B1', 'B2'], zh: ['HSK1', 'HSK2', 'HSK3', 'HSK4'] };

const SOURCES = {
  en: <>Danh sách từ theo cấp độ: <a href="https://www.cefr-j.org/download.html" target="_blank" rel="noreferrer">The CEFR-J Wordlist Version 1.5</a>, Yukio Tono, Tokyo University of Foreign Studies. Phiên âm và nghĩa tiếng Việt do AI biên soạn.</>,
  es: <>Danh sách từ thông dụng: <a href="https://github.com/doozan/spanish_data" target="_blank" rel="noreferrer">doozan/spanish_data</a> (từ <a href="https://github.com/hermitdave/FrequencyWords" target="_blank" rel="noreferrer">FrequencyWords</a>, CC BY-SA 3.0). Cấp độ chia theo mức độ thông dụng; nghĩa tiếng Việt do AI biên soạn, phát hành theo CC BY-SA.</>,
  zh: <>Danh sách từ HSK 3.0 cấp 1–4: <a href="https://github.com/drkameleon/complete-hsk-vocabulary" target="_blank" rel="noreferrer">drkameleon/complete-hsk-vocabulary</a> (MIT). Âm Hán Việt và nghĩa tiếng Việt do AI biên soạn.</>
};

const toWord = (lang, r) => ({ w: r[0], ipa: r[1], vi: r[2], level: r[3], pos: r[4], hv: r[5] || '' });

// Danh sách từ: lọc, tìm, thêm vào ôn tập
function WordList({ lang, words, srs, onAdd }) {
  const [page, setPage] = useState(1);
  useEffect(() => setPage(1), [words]);
  if (!words.length) return <Empty description="Không tìm thấy từ nào" />;
  return (
    <List
      className="bank-list"
      dataSource={words}
      pagination={{ current: page, onChange: p => { setPage(p); window.scrollTo({ top: 0, behavior: 'smooth' }); }, pageSize: 30, showSizeChanger: false, size: 'small', align: 'center' }}
      renderItem={v => {
        const added = !!srs[bankKey(lang, v.w)];
        return (
          <List.Item className="bank-item"
            actions={[
              added
                ? <Tooltip title="Đã có trong danh sách ôn tập" key="a"><Button type="text" icon={<CheckOutlined />} disabled>Đã thêm</Button></Tooltip>
                : <Button key="a" icon={<PlusOutlined />} onClick={() => onAdd(v)}>Ôn tập</Button>
            ]}>
            <Flex gap={12} align="center" style={{ minWidth: 0 }}>
              <SoundButton text={v.w} lang={lang} type="default" />
              <div style={{ minWidth: 0 }}>
                <Flex wrap gap={8} align="baseline">
                  <span className="bank-word">{v.w}</span>
                  {v.ipa && <Text type="secondary">{v.ipa}</Text>}
                  <HanViet text={v.hv} />
                  <Tag bordered={false} style={{ marginInlineEnd: 0 }}>{v.level}</Tag>
                </Flex>
                <div className="bank-mean">{v.vi}</div>
              </div>
            </Flex>
          </List.Item>
        );
      }} />
  );
}

// Học thẻ: lướt qua các từ chưa có trong ôn tập
// Học thẻ: lướt qua các từ (theo cấp đang chọn) chưa có trong ôn tập; mỗi bộ thẻ lấy lại theo tiến độ mới nhất
function CardStudy({ lang, candidates, onKnow, onLearn }) {
  const makeDeck = () => shuffle(candidates.filter(v => !getProgress().srs[bankKey(lang, v.w)])).slice(0, 20);
  const [deck, setDeck] = useState(makeDeck);
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [stats, setStats] = useState({ know: 0, learn: 0 });
  useEffect(() => { setDeck(makeDeck()); setI(0); setFlipped(false); setStats({ know: 0, learn: 0 }); }, [candidates]);

  if (!deck.length) return <Empty description="Bạn đã thêm hết từ của cấp này vào ôn tập 🎉" />;
  if (i >= deck.length) {
    return (
      <Card>
        <Flex vertical align="center" gap={12} style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 48 }}>✅</div>
          <Title level={4} style={{ margin: 0 }}>Xong {deck.length} thẻ!</Title>
          <Text type="secondary">Đã biết {stats.know} từ · Thêm {stats.learn} từ vào danh sách ôn tập</Text>
          <Button type="primary" size="large" onClick={() => { setDeck(makeDeck()); setI(0); setStats({ know: 0, learn: 0 }); }}>Học thẻ tiếp theo</Button>
        </Flex>
      </Card>
    );
  }
  const v = deck[i];
  const next = known => {
    play(known ? 'correct' : 'pop');
    (known ? onKnow : onLearn)(v);
    setStats(s => known ? { ...s, know: s.know + 1 } : { ...s, learn: s.learn + 1 });
    setFlipped(false); setI(i + 1);
  };
  return (
    <Flex vertical gap={16} align="center">
      <Flex style={{ width: '100%', maxWidth: 440 }} align="center" gap={12}>
        <Progress percent={pct(i, deck.length)} showInfo={false} style={{ flex: 1, margin: 0 }} />
        <Text type="secondary">{i + 1}/{deck.length}</Text>
      </Flex>
      <motion.div key={v.w} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25, ease: EASE }}
        style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Flashcard v={v} lang={lang} flipped={flipped} onFlip={() => { play('flip'); setFlipped(!flipped); }} />
      </motion.div>
      {flipped
        ? (
          <Flex gap={12} style={{ width: '100%', maxWidth: 440 }}>
            <Button size="large" style={{ flex: 1, height: 52 }} onClick={() => next(true)}>Đã biết từ này</Button>
            <Button type="primary" size="large" style={{ flex: 1, height: 52 }} icon={<PlusOutlined />} onClick={() => next(false)}>Cần học</Button>
          </Flex>
        )
        : <Button type="primary" size="large" style={{ width: '100%', maxWidth: 440, height: 52 }} onClick={() => { play('flip'); setFlipped(true); }}>Lật thẻ xem nghĩa</Button>}
    </Flex>
  );
}

export default function WordBank({ lang }) {
  const p = useProgress();
  const { message } = App.useApp();
  const c = COURSES[lang];
  const [all, setAll] = useState(null);
  const [loadError, setLoadError] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const [level, setLevel] = useState('all');
  const [mode, setMode] = useState('list');
  const [q, setQ] = useState('');
  const query = useDeferredValue(q);

  useEffect(() => {
    let alive = true;
    setLoadError(false);
    import(`../data/bank/${lang}.json`)
      .then(m => alive && setAll(m.default.map(r => toWord(lang, r))))
      .catch(() => alive && setLoadError(true));
    return () => { alive = false; };
  }, [lang, attempt]);

  const filtered = useMemo(() => {
    if (!all) return [];
    const s = noAccent(query.trim().toLowerCase());
    return all.filter(v => (level === 'all' || v.level === level)
      && (!s || noAccent(v.w.toLowerCase()).includes(s) || noAccent(v.vi.toLowerCase()).includes(s) || noAccent((v.ipa || '').toLowerCase()).replace(/\s/g, '').includes(s.replace(/\s/g, ''))));
  }, [all, level, query]);

  const byLevel = useMemo(() => (all || []).filter(v => level === 'all' || v.level === level), [all, level]);

  const addSrs = (v, box, days) => update(d => {
    const key = bankKey(lang, v.w);
    if (!d.srs[key]) d.srs[key] = { box, due: dayStr(days), w: { w: v.w, ipa: v.ipa, vi: v.vi, hv: v.hv } };
  });
  const onAdd = v => { play('pop'); addSrs(v, 0, 0); message.success({ content: `Đã thêm “${v.w}” vào ôn tập`, duration: 1.5 }); };

  const counts = useMemo(() => {
    const m = {};
    (all || []).forEach(v => { m[v.level] = m[v.level] || { total: 0, added: 0 }; m[v.level].total++; if (p.srs[bankKey(lang, v.w)]) m[v.level].added++; });
    return m;
  }, [all, p.srs]);

  return (
    <LangTheme lang={lang}>
      <Flex vertical gap={20}>
        <Breadcrumb items={[{ title: <a href="#/">Trang chủ</a> }, { title: <a href={`#/c/${lang}`}>{c.name}</a> }, { title: 'Kho từ vựng' }]} />
        <div>
          <Title level={2} style={{ marginBottom: 4 }}><BookOutlined /> Kho từ vựng {c.name}</Title>
          <Text type="secondary">
            {all ? `${all.length.toLocaleString('vi')} từ theo danh sách chuẩn, chia theo cấp độ. ` : ''}
            Bấm “Ôn tập” để đưa từ vào lịch ôn, hoặc dùng chế độ Học thẻ để lướt nhanh.
          </Text>
        </div>

        {loadError ? (
          <Result status="warning" title="Chưa tải được kho từ vựng"
            subTitle="Kiểm tra kết nối mạng rồi thử lại. Nếu trang vừa được cập nhật, hãy tải lại trang."
            extra={[<Button key="retry" type="primary" onClick={() => setAttempt(a => a + 1)}>Thử lại</Button>,
              <Button key="reload" onClick={() => location.reload()}>Tải lại trang</Button>]} />
        ) : !all ? <Card><Skeleton active paragraph={{ rows: 6 }} /></Card> : (
          <>
            <Row gutter={[12, 12]}>
              {LEVELS[lang].map(l => {
                const k = counts[l] || { total: 0, added: 0 };
                return (
                  <Col xs={12} md={6} key={l}>
                    <Card size="small" hoverable className={'level-stat' + (level === l ? ' active' : '')} onClick={() => setLevel(level === l ? 'all' : l)}>
                      <Text type="secondary" style={{ fontSize: 12 }}>{LEVEL_NAME[l]}</Text>
                      <Flex justify="space-between" align="baseline">
                        <Title level={4} style={{ margin: 0 }}>{l}</Title>
                        <Text strong>{k.total.toLocaleString('vi')} từ</Text>
                      </Flex>
                      <Progress percent={pct(k.added, k.total)} size="small" format={() => `${k.added}`} />
                    </Card>
                  </Col>
                );
              })}
            </Row>

            <Flex gap={12} wrap align="center" justify="space-between">
              <Segmented value={level} onChange={setLevel}
                options={[{ label: 'Tất cả', value: 'all' }, ...LEVELS[lang].map(l => ({ label: l, value: l }))]} />
              <Segmented value={mode} onChange={setMode} options={[
                { label: 'Danh sách', value: 'list', icon: <UnorderedListOutlined /> },
                { label: 'Học thẻ', value: 'cards', icon: <CreditCardOutlined /> }
              ]} />
            </Flex>

            {mode === 'list' ? (
              <Card>
                <Input.Search allowClear size="large" placeholder={lang === 'zh' ? 'Tìm chữ Hán, pinyin hoặc nghĩa tiếng Việt…' : 'Tìm từ hoặc nghĩa tiếng Việt…'}
                  value={q} onChange={e => setQ(e.target.value)} style={{ marginBottom: 8 }} />
                <Text type="secondary" style={{ display: 'block', marginBottom: 4 }}>{filtered.length.toLocaleString('vi')} từ</Text>
                <WordList lang={lang} words={filtered} srs={p.srs} onAdd={onAdd} />
              </Card>
            ) : (
              <CardStudy lang={lang} candidates={byLevel} onKnow={v => addSrs(v, 3, 7)} onLearn={v => addSrs(v, 0, 1)} />
            )}

            <Paragraph type="secondary" className="bank-source">Nguồn: {SOURCES[lang]}</Paragraph>
          </>
        )}
      </Flex>
    </LangTheme>
  );
}
