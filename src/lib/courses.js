// Nạp dữ liệu bài học (các file data gọi addLevels theo đúng thứ tự import)
import '../data/registry.js';
import '../data/en-a.js';
import '../data/en-b.js';
import '../data/es-a.js';
import '../data/es-b.js';
import '../data/zh-a.js';
import '../data/zh-b.js';

export const COURSES = window.COURSES;
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
