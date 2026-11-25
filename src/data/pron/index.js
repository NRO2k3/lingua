// Phần phát âm nền tảng của từng ngôn ngữ (trang #/c/<lang>/pron)
import en from './en.js';
import es from './es.js';
import zh from './zh.js';

export const PRON = { en, es, zh };

// Câu mời học phát âm trên trang lộ trình, khi người học chưa xong bài nào
export const PRON_PITCH = {
  en: 'Âm cuối, đuôi -s/-ed, âm th, nguyên âm dài/ngắn và trọng âm — sửa 5 lỗi này là người nghe hiểu bạn ngay.',
  es: 'Đọc đúng bảng chữ cái, r/rr, j, c/z, ñ và trọng âm — tiếng Tây Ban Nha "viết sao đọc vậy", học một lần dùng mãi.',
  zh: 'Học 4 thanh điệu và pinyin trước bài 1 — nền móng để đọc đúng mọi từ về sau.'
};
