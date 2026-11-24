// Đăng ký khoá học. Các file dữ liệu gọi addLevels(lang, levels) theo thứ tự thẻ <script>.
window.COURSES = {
  en: {
    id: 'en', name: 'Tiếng Anh', native: 'English', flag: '🇬🇧', tts: 'en-US',
    tagline: 'Ngôn ngữ toàn cầu cho học tập, công việc và du lịch.',
    levels: []
  },
  es: {
    id: 'es', name: 'Tiếng Tây Ban Nha', native: 'Español', flag: '🇪🇸', tts: 'es-ES',
    tagline: 'Ngôn ngữ của hơn 20 quốc gia, dễ phát âm, dễ bắt đầu.',
    levels: []
  },
  zh: {
    id: 'zh', name: 'Tiếng Trung', native: '中文', flag: '🇨🇳', tts: 'zh-CN', noSpace: true,
    tagline: 'Hơn 1 tỷ người nói. Người Việt có lợi thế nhờ âm Hán Việt.',
    levels: []
  }
};

window.addLevels = function (lang, levels) {
  window.COURSES[lang].levels.push(...levels);
};
