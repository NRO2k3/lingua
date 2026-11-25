// Nạp dữ liệu bài học (các file data gọi addLevels theo đúng thứ tự import)
import '../data/registry.js';
import '../data/en-a.js';
import '../data/en-b.js';
import '../data/es-a.js';
import '../data/es-b.js';
import '../data/zh-a.js';
import '../data/zh-b.js';

export const COURSES = window.COURSES;

// Bài mới (src/data/more/*.js): mỗi file export default [{ after: 'id bài đứng trước', unit: {...} }, ...]
// Bài được chèn vào đúng cấp, ngay sau bài `after` (theo thứ tự trong file)
const MORE = Object.values(import.meta.glob('../data/more/*.js', { eager: true, import: 'default' })).flat();
for (const { after, unit } of MORE) {
  for (const c of Object.values(COURSES)) for (const level of c.levels) {
    const k = level.units.findIndex(u => u.id === after);
    if (k >= 0 && !level.units.some(u => u.id === unit.id)) level.units.splice(k + 1, 0, unit);
  }
}

// Phần bổ sung (src/data/ext/*.js): thêm từ, bài tập, bài đọc cho từng unit
const EXT = Object.assign({}, ...Object.values(import.meta.glob('../data/ext/*.js', { eager: true, import: 'default' })));
for (const c of Object.values(COURSES)) for (const level of c.levels) for (const u of level.units) {
  const x = EXT[u.id];
  if (!x) continue;
  u.coreCount = u.vocab.length;
  u.vocab = [...u.vocab, ...(x.vocab || [])];
  u.exercises = [...u.exercises, ...(x.exercises || [])];
  if (x.reading) u.reading = x.reading;
}
export const LANGS = Object.keys(COURSES);

// Màu nhận diện từng ngôn ngữ (theo bảng màu preset của Ant Design)
export const LANG_UI = {
  en: { color: '#1677ff', tag: 'blue' },
  es: { color: '#fa541c', tag: 'volcano' },
  zh: { color: '#f5222d', tag: 'red' }
};

// Tên cấp độ thân thiện với người học; mã CEFR/HSK chỉ hiện phụ
export const LEVEL_NAME = {
  A1: 'Người mới bắt đầu', A2: 'Sơ cấp', B1: 'Trung cấp', B2: 'Trung cấp cao',
  HSK1: 'Người mới bắt đầu', HSK2: 'Sơ cấp', HSK3: 'Trung cấp', HSK4: 'Trung cấp cao'
};

export function allUnits(lang) {
  const out = [];
  COURSES[lang].levels.forEach(level => level.units.forEach(u => out.push({ ...u, level })));
  return out;
}

export function findUnit(lang, uid) {
  const list = allUnits(lang);
  const idx = list.findIndex(u => u.id === uid);
  return { unit: list[idx], idx, list };
}
