# Lingua — học tiếng Anh, Tây Ban Nha & Trung theo lộ trình

Web tĩnh (HTML/CSS/JS thuần, không cần cài đặt) cho người Việt học tiếng Anh, tiếng Tây Ban Nha (A1 → B2 theo khung CEFR)
và tiếng Trung giản thể (HSK 1 → 4). Tiếng Trung có pinyin, âm Hán Việt, và cho gõ pinyin thay chữ Hán.

## Chạy

Mở thẳng `index.html` bằng trình duyệt, hoặc chạy server tĩnh:

```bash
python3 -m http.server 8765
```

rồi vào http://localhost:8765

## Lộ trình

Mỗi ngôn ngữ có 4 cấp độ × 6 bài = 24 bài. Mỗi bài gồm 5 bước:

1. **Từ vựng** — 10 từ, phiên âm, nghĩa, câu ví dụ, nghe phát âm, chế độ flashcard
2. **Ngữ pháp** — một chủ điểm, giải thích tiếng Việt, bảng chia, ví dụ, mẹo
3. **Hội thoại** — đoạn hội thoại mẫu, nghe cả đoạn, ẩn/hiện bản dịch
4. **Luyện nói** — nói vào micro, web nhận dạng giọng nói và tô xanh/đỏ từng từ (đạt từ 80%).
   Có chế độ ẩn câu để nghe rồi nhắc lại (shadowing), nghe chậm, và **nhập vai**: bạn đóng một nhân vật,
   máy đọc lời nhân vật kia, đến lượt bạn thì nói
5. **Kiểm tra** — 12 câu (trắc nghiệm, điền từ, sắp xếp câu, nghe). Đạt 70% để mở bài tiếp theo

Từ vựng của bài đã đạt được đưa vào **Ôn tập** (lặp lại ngắt quãng: 1 → 2 → 4 → 7 → 15 → 30 ngày).
Tiến độ, XP, chuỗi ngày học lưu trong `localStorage` của trình duyệt.

## Thêm / sửa bài học

Dữ liệu nằm trong `data/*.js`, cấu trúc mô tả ở [data/SCHEMA.md](data/SCHEMA.md).
Phát âm và nhận dạng giọng nói dùng Web Speech API của trình duyệt. Luyện nói cần **Chrome hoặc Edge**,
quyền dùng micro và kết nối mạng (Chrome gửi âm thanh tới máy chủ nhận dạng của Google). Firefox chưa hỗ trợ.
