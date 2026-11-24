export const shuffle = a => {
  a = [...a];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; }
  return a;
};

export const dayStr = (offset = 0) => { const d = new Date(); d.setDate(d.getDate() + offset); return d.toLocaleDateString('sv'); };
export const today = () => dayStr(0);
export const pct = (a, b) => b ? Math.round(a / b * 100) : 0;

export const norm = s => String(s).toLowerCase().replace(/[’`]/g, "'").replace(/[.!?¡¿,;:"，。？！、：；“”]/g, '').replace(/\s+/g, ' ').trim();
export const noAccent = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '');

// Chữ Hán: tách từng chữ (giữ nguyên cụm số), bỏ khoảng trắng khi hiển thị
export const CJK_RE = /^[㐀-鿿，。？！、：；“”]/;
export const splitUnits = s => String(s).match(/[零一二三四五六七八九十两百]{2,}|[㐀-鿿]|[^\s㐀-鿿]+/g) || [];
export const tidy = s => String(s).replace(/([㐀-鿿，。？！、：；“”])\s+(?=[㐀-鿿，。？！、：；“”])/g, '$1');
