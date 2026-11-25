# Cấu trúc dữ liệu bài học

Mỗi file dữ liệu (`data/en-a.js`, `data/en-b.js`, `data/es-a.js`, `data/es-b.js`) là JavaScript thuần,
gọi đúng một lần:

```js
addLevels('en', [ /* các level */ ]);
```

## Level

```js
{
  id: 'A1',                       // A1 | A2 | B1 | B2
  title: 'Sơ cấp 1',              // tên tiếng Việt
  desc: 'Mô tả ngắn: học xong level này bạn làm được gì.',
  units: [ /* 6 unit */ ]
}
```

## Unit

```js
{
  id: 'en-a1-1',                  // <lang>-<level viết thường>-<số thứ tự>
  icon: '👋',                     // 1 emoji
  title: 'Chào hỏi & giới thiệu', // tiếng Việt
  goal: 'Chào hỏi, nói tên, hỏi thăm sức khoẻ.',  // "Sau bài này bạn có thể..."
  vocab: [                        // đúng 10 từ/cụm từ
    {
      w: 'hello',                 // từ tiếng đích. Danh từ TBN kèm mạo từ: 'el libro'
      ipa: '/həˈloʊ/',            // phiên âm IPA (Anh) hoặc gợi ý đọc kiểu Việt (TBN), vd 'ô-la'
      vi: 'xin chào',             // nghĩa tiếng Việt, ngắn gọn
      ex: 'Hello, my name is Anna.',      // câu ví dụ tiếng đích
      exVi: 'Xin chào, tên tôi là Anna.'  // dịch câu ví dụ
    }
  ],
  grammar: {
    title: 'Động từ to be: am / is / are',
    explain: [                    // 2–4 đoạn giải thích bằng tiếng Việt, dễ hiểu cho người mới
      'Dùng "to be" để nói ai đó là gì, ở đâu, thế nào.',
      'Chủ ngữ I đi với am; he/she/it đi với is; you/we/they đi với are.'
    ],
    table: [                      // tuỳ chọn: bảng chia / mẫu câu. Hàng đầu là tiêu đề.
      ['Chủ ngữ', 'to be', 'Ví dụ'],
      ['I', 'am', 'I am Lan.']
    ],
    examples: [                   // 3–5 câu
      { t: 'She is a doctor.', vi: 'Cô ấy là bác sĩ.' }
    ],
    tip: 'Mẹo/lỗi người Việt hay mắc (tuỳ chọn).'
  },
  dialogue: [                     // hội thoại 4–8 lượt, dùng từ vựng + ngữ pháp của unit
    { s: 'Anna', t: 'Hi! I am Anna.', vi: 'Chào! Mình là Anna.' }
  ],
  exercises: [                    // đúng 8 bài, trộn đủ 3 loại, kiểm tra ngữ pháp + từ vựng của unit
    { type: 'mc', q: 'She ___ a teacher.', options: ['am', 'is', 'are'], answer: 1,
      explain: 'She đi với is.' },                       // answer = chỉ số đáp án đúng (0-based)
    { type: 'fill', q: 'They ___ my friends.', answer: ['are'], hint: 'to be',
      explain: 'They đi với are.' },                     // answer = mảng các đáp án chấp nhận (không phân biệt hoa thường)
    { type: 'order', vi: 'Tên tôi là Tom.', words: ['name', 'My', 'Tom', 'is'],
      answer: 'My name is Tom' }                         // words xáo trộn; answer là câu đúng, không dấu chấm cuối
  ]
}
```

Lưu ý:
- Chỉ trích dẫn bằng nháy đơn trong JS; thoát `\'` khi cần (vd `I\'m`). Có thể dùng nháy kép cho chuỗi chứa nháy đơn.
- Không có dấu phẩy thừa gây lỗi; file phải chạy được bằng `node -e`.
- Câu hỏi `fill` phải có đúng một chỗ `___`.
- Trong `order`, `words` khi ghép theo thứ tự đúng bằng đúng `answer` (tách theo dấu cách). Dấu câu như `?` gắn liền với từ: `'you?'`.
- `order` có thể thêm `alt: ['…', '…']`: các trật tự khác cũng đúng ngữ pháp và cùng nghĩa (dùng đúng các từ trong `words`);
  khi chấm, câu ghép khớp `answer` hoặc bất kỳ câu nào trong `alt` đều tính là đúng.

## Riêng tiếng Trung (`zh`)

- Level dùng id `HSK1`…`HSK4`; unit id `zh-hsk1-1`…
- Chữ giản thể. Vocab: `w` = chữ Hán (vd `'朋友'`), `ipa` = pinyin có dấu thanh (vd `'péngyou'`),
  thêm `hv` = âm Hán Việt (vd `'bằng hữu'`; để `''` nếu không có/không tự nhiên), `ex` = câu chữ Hán,
  thêm `exPy` = pinyin của câu ví dụ.
- `grammar.examples` và `dialogue`: thêm trường `py` (pinyin của câu).
- Câu chữ Hán dùng dấu câu toàn khổ: `，。？！`.
- `fill`: `answer` gồm chữ Hán, pinyin có dấu thanh và pinyin không dấu, vd `['是', 'shì', 'shi']`
  (người học có thể không có bộ gõ tiếng Trung). `hint` nên có pinyin hoặc nghĩa.
- `order`: `words` là các TỪ (không phải từng chữ), `answer` là các từ nối bằng dấu cách theo đúng thứ tự,
  vd `words: ['叫', '我', '大卫']`, `answer: '我 叫 大卫'`. Dấu `？` gắn vào từ cuối: `'吗？'`.

## Phần bổ sung bài học (`src/data/ext/<lang>-<level>.js`)

Mỗi file `export default` một object, khoá là id unit. Nội dung được nối vào unit gốc khi chạy:

```js
export default {
  'en-a1-1': {
    vocab: [ /* đúng 10 từ mới, cùng định dạng vocab ở trên, KHÔNG trùng từ đã có */ ],
    exercises: [ /* đúng 8 bài mc/fill/order, ưu tiên dùng từ mới + ngữ pháp của unit */ ],
    reading: {
      title: 'Tiêu đề bằng ngôn ngữ đích',
      titleVi: 'Tiêu đề tiếng Việt',
      text: ['Đoạn 1…', 'Đoạn 2…'],        // ngôn ngữ đích
      py: ['pinyin đoạn 1', '…'],          // chỉ tiếng Trung, cùng số đoạn với text
      vi: ['Dịch đoạn 1…', '…'],           // cùng số đoạn với text
      questions: [                         // đúng 4 câu đọc hiểu, hỏi bằng tiếng Việt
        { q: 'Câu hỏi?', options: ['…', '…', '…', '…'], answer: 0, explain: 'Vì sao đúng' }
      ]
    }
  }
};
```

Độ dài bài đọc: A1 60–90 từ, A2 90–140, B1 150–220, B2 220–300 (tiếng Trung tính theo chữ:
HSK1 60–100, HSK2 100–160, HSK3 180–260, HSK4 260–360).

## Phát âm nền tảng (`src/data/pron/<lang>.js`)

Trang `#/c/<lang>/pron`. Mỗi file `export default` một object (đăng ký trong `src/data/pron/index.js`):

```js
export default {
  intro: 'Đoạn giới thiệu ngắn',
  sections: [                              // mỗi phần là một mục mở/đóng
    {
      id: 'final', icon: '🎯', title: 'Âm cuối', summary: 'Một dòng tóm tắt',
      explain: ['Đoạn giải thích tiếng Việt…'],
      // các khối tuỳ chọn, hiện theo thứ tự dưới đây:
      tones: [{ n: 1, name: 'Thanh 1', mark: 'ā', chao: [5, 5], vi: 'So sánh với dấu tiếng Việt', ex: { t: '妈', sub: 'mā', vi: 'mẹ' } }],
      table: [['Tiêu đề', '…'], ['hàng', '…']],
      groups: [{ label: 'Nhóm', items: [/* thẻ nghe */] }],
      pairs: [{ w: [/* 2–3 thẻ nghe */], note: 'Khác nhau ở đâu' }],
      examples: [/* thẻ nghe */],
      tip: 'Mẹo cho người Việt'
    }
  ],
  drills: [                                // bài luyện nghe trắc nghiệm
    {
      id: 'pairs', icon: '👂', title: 'Tên bài', desc: 'Mô tả', round: 20,   // số câu mỗi lượt (lấy ngẫu nhiên từ pool)
      fixed: false,                        // true: giữ nguyên thứ tự phương án (vd Thanh 1–4)
      pool: [
        { say: '妈', options: ['…'], answer: 0, show: 'Hiện sau khi trả lời', explain: '…' },
        { options: ['ship', 'sheep'] }     // không có say/answer: máy đọc ngẫu nhiên một phương án, phương án đó là đáp án
      ]
    }
  ]
};
```

Thẻ nghe: `{ t: 'chữ hiển thị', sub: 'pinyin/IPA', vi: 'nghĩa', note: 'mẹo ngắn', label: 'chữ cái/âm', say: 'câu máy đọc (mặc định = t)', mic: 'từ dùng khi nói thử (mặc định = t)' }`.
