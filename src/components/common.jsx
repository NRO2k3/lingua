import { Avatar, Button, ConfigProvider, Tag, Tooltip, theme } from 'antd';
import { SoundOutlined } from '@ant-design/icons';
import { COURSES, LANG_UI } from '../lib/courses.js';
import { speak } from '../lib/speech.js';
import { CJK_RE, splitUnits } from '../lib/utils.js';

// Đưa token của Ant Design ra biến CSS cho các phần tự vẽ (thẻ lật, bong bóng chat…)
export function TokenVars({ children, className }) {
  const { token } = theme.useToken();
  const vars = {
    '--primary': token.colorPrimary, '--primary-bg': token.colorPrimaryBg, '--primary-border': token.colorPrimaryBorder,
    '--success': token.colorSuccess, '--success-bg': token.colorSuccessBg, '--success-border': token.colorSuccessBorder,
    '--error': token.colorError, '--error-bg': token.colorErrorBg, '--error-border': token.colorErrorBorder,
    '--warning': token.colorWarning, '--border': token.colorBorderSecondary, '--border-strong': token.colorBorder,
    '--bg': token.colorBgContainer, '--bg-layout': token.colorBgLayout, '--fill': token.colorFillTertiary,
    '--fill-2': token.colorFillSecondary, '--text': token.colorText, '--text-2': token.colorTextSecondary,
    '--text-3': token.colorTextTertiary, '--radius': token.borderRadiusLG + 'px', '--shadow': token.boxShadowTertiary
  };
  return <div className={className} style={vars}>{children}</div>;
}

// Mỗi ngôn ngữ dùng màu chủ đạo riêng
export function LangTheme({ lang, children }) {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: LANG_UI[lang].color, colorLink: LANG_UI[lang].color } }}>
      <TokenVars>{children}</TokenVars>
    </ConfigProvider>
  );
}

export function SoundButton({ text, lang, type = 'text', size = 'middle', rate }) {
  return (
    <Tooltip title="Nghe phát âm">
      <Button shape="circle" type={type} size={size} icon={<SoundOutlined />} aria-label="Nghe phát âm"
        onClick={e => { e.stopPropagation(); speak(text, COURSES[lang].tts, { rate }); }} />
    </Tooltip>
  );
}

export const Pinyin = ({ text, blur }) => text ? <div className={'pinyin' + (blur ? ' blur' : '')}>{text}</div> : null;

export const HanViet = ({ text }) => text
  ? <Tooltip title="Âm Hán Việt"><Tag color="gold" bordered={false} style={{ marginInlineEnd: 0 }}>{text}</Tag></Tooltip>
  : null;

export function WithBlank({ text }) {
  const parts = String(text).split('___');
  return parts.map((s, k) => <span key={k}>{k > 0 && <span className="blank">&nbsp;</span>}{s}</span>);
}

// Câu mẫu, tô xanh/đỏ từng từ sau khi chấm phát âm
export function MarkedText({ text, result }) {
  const us = splitUnits(text);
  return us.map((w, k) => (
    <span key={k}>
      {k > 0 && !CJK_RE.test(us[k - 1]) && !CJK_RE.test(w) ? ' ' : ''}
      <span className={result ? (result.ok[k] ? 'w-ok' : 'w-miss') : undefined}
        style={result ? { animationDelay: `${k * 70}ms` } : undefined}>{w}</span>
    </span>
  ));
}

export function Flashcard({ v, lang, flipped, onFlip }) {
  return (
    <div className={'flash' + (flipped ? ' flipped' : '')} onClick={onFlip} role="button" tabIndex={0}
      aria-label="Lật thẻ" onKeyDown={e => { if (e.key === 'Enter') onFlip(); }}>
      <div className="flash-inner">
        <div className="flash-face">
          <div className="flash-word">{v.w}</div>
          <div className="flash-sub">{v.ipa}</div>
          <SoundButton text={v.w} lang={lang} type="default" size="large" />
          <div className="flash-hint">Chạm để xem nghĩa</div>
        </div>
        <div className="flash-face flash-back">
          <div className="flash-mean">{v.vi}</div>
          <HanViet text={v.hv} />
          <div className="flash-ex">{v.ex}</div>
          <Pinyin text={v.exPy} />
          <div className="flash-sub">{v.exVi}</div>
        </div>
      </div>
    </div>
  );
}

export function ChatLine({ l, right, lang, showVi = true, highlight, textNode, blur, children }) {
  return (
    <div className={'chat-line' + (right ? ' right' : '')}>
      <Avatar style={{ background: right ? 'var(--primary)' : '#8c8c8c', flex: 'none' }}>{[...l.s][0]}</Avatar>
      <div className={'bubble' + (highlight ? ' turn' : '')}>
        <div className="bubble-who">{l.s}</div>
        <div className={'bubble-text' + (blur ? ' blur' : '')}>{textNode || l.t}</div>
        <Pinyin text={l.py} blur={blur} />
        {showVi && <div className="bubble-vi">{l.vi}</div>}
        {children}
      </div>
      <SoundButton text={l.t} lang={lang} />
    </div>
  );
}

// Logo Lingua: chữ L trên nền tím bo góc, chấm vàng = đích đến của lộ trình
export function LinguaMark({ size = 34 }) {
  return (
    <svg className="brand-mark" width={size} height={size} viewBox="0 0 72 72" aria-hidden="true">
      <rect width="72" height="72" rx="18" fill="#534AB7" />
      <path d="M25 18v30h21" fill="none" stroke="#fff" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="51" cy="22" r="6.5" fill="#FAC775" />
    </svg>
  );
}
