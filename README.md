# Lingua — học tiếng Anh, Tây Ban Nha & Trung theo lộ trình

**Dùng ngay:** https://nro2k3.github.io/lingua/

Web app (Vite + React + Ant Design 5) cho người Việt học tiếng Anh, tiếng Tây Ban Nha (A1 → B2 theo khung CEFR)
và tiếng Trung giản thể (HSK 1 → 4). Tiếng Trung có pinyin, âm Hán Việt, và cho gõ pinyin thay chữ Hán.

## Lộ trình

Mỗi ngôn ngữ có 4 cấp độ, tổng cộng 121 bài (Anh 38, Tây Ban Nha 42, Trung 41), bám theo khung CEFR-J / PCIC / HSK 3.0. Mỗi bài gồm 6 bước:

1. **Từ vựng** — 20 từ (10 từ cốt lõi + 10 từ mở rộng lấy từ danh sách chuẩn của cấp độ), phiên âm, nghĩa,
   câu ví dụ, nghe phát âm, chế độ flashcard
2. **Ngữ pháp** — một chủ điểm, giải thích tiếng Việt, bảng chia, ví dụ, mẹo
3. **Hội thoại** — đoạn hội thoại mẫu, nghe cả đoạn, ẩn/hiện bản dịch
4. **Đọc hiểu** — bài đọc đúng trình độ, nghe từng đoạn, bản dịch, 4 câu hỏi đọc hiểu
5. **Luyện nói** — nói **từng câu** vào micro, web nhận dạng giọng nói và tô xanh/đỏ từng từ (đạt từ 80%);
   hoặc **nhập vai**: bạn đóng một nhân vật, máy đọc lời nhân vật kia, đến lượt bạn thì nói
6. **Kiểm tra** — 16 câu lấy ngẫu nhiên từ 16 bài tập + câu hỏi từ vựng (trắc nghiệm, điền từ, sắp xếp câu, nghe).
   Đạt 70% để mở bài tiếp theo

**Phát âm nền tảng** (`#/c/<lang>/pron`): thanh điệu, pinyin và biến điệu (Trung); âm cuối, -s/-ed, th, nguyên âm dài/ngắn,
trọng âm (Anh); bảng chữ cái, r/rr, j/g, c/z, ll/y, ñ, h câm, trọng âm, -s cuối (Tây Ban Nha). Mỗi phần có thẻ nghe, mẹo cho người Việt,
nói thử bằng micro, và bài luyện nghe chọn đáp án. Dữ liệu ở `src/data/pron/`.

**Kiểm tra xếp lớp** (`#/c/<lang>/placement`): khoảng 28 câu đi từ cấp thấp lên cao, tự dừng khi sai nhiều ở một cấp,
rồi gợi ý trình độ nên bắt đầu. **Kiểm tra cuối cấp** (`#/c/<lang>/level/<cấp>`): 25 câu tổng hợp 6 bài của cấp
(từ vựng, nghe, ngữ pháp, đọc hiểu); đạt 80% được huy hiệu "Đã vượt cấp" trên lộ trình.

**Kho từ vựng** theo cấp độ cho mỗi ngôn ngữ: tìm theo từ / nghĩa / pinyin, thêm vào ôn tập, học thẻ nhanh.
Dữ liệu ở `src/data/bank/*.json`, tạo bằng `python3 scripts/build-bank.py` từ `sources/`.

Từ vựng của bài đã đạt được đưa vào **Ôn tập** (lặp lại ngắt quãng: 1 → 2 → 4 → 7 → 15 → 30 ngày).
Tiến độ, XP, chuỗi ngày học lưu trong `localStorage` của trình duyệt.
Trang **Thống kê** (`#/stats`) cho xem điểm 7/30 ngày, chuỗi ngày dài nhất, số bài xong theo cấp độ, mức ghi nhớ
từ vựng, độ chính xác theo dạng bài và các câu sai gần đây.

Phát âm và nhận dạng giọng nói dùng Web Speech API của trình duyệt. Luyện nói cần **Chrome hoặc Edge**,
quyền dùng micro và kết nối mạng. Firefox chưa hỗ trợ.

## Chạy trên máy

Cần Node.js 18+ (CI dùng Node 22). Cài thư viện:

```bash
npm install
```

Chạy server phát triển:

```bash
npm run dev
```

Build bản tĩnh vào thư mục `dist/`:

```bash
npm run build
```

## Cấu trúc thư mục

```
src/
  main.jsx                 điểm khởi động React
  App.jsx                  khung app, điều hướng, theme Ant Design
  pages/                   Home, Roadmap, Lesson, SpeakStep, Pronunciation, LevelTest (xếp lớp + cuối cấp), Stats
  components/common.jsx    component dùng chung
  lib/
    store.js               tiến độ, XP, ôn tập (localStorage)
    speech.js              phát âm & nhận dạng giọng nói
    quiz.js                sinh câu hỏi kiểm tra
    courses.js             nạp dữ liệu khoá học
    utils.js               hàm tiện ích
  data/*.js                nội dung bài học (en, es, zh)
  data/pron/*.js           phát âm nền tảng của từng ngôn ngữ
  data/SCHEMA.md           mô tả cấu trúc dữ liệu
```

Muốn thêm/sửa bài học: sửa `src/data/*.js` theo [src/data/SCHEMA.md](src/data/SCHEMA.md).

## Deploy

Mỗi lần push lên nhánh `main`, GitHub Actions (`.github/workflows/deploy.yml`) tự build và đăng thư mục `dist/`
lên GitHub Pages. Có thể chạy tay ở tab **Actions** (workflow_dispatch).
Lần đầu cần vào **Settings → Pages** của repo, chọn **Source: GitHub Actions**.

## Nguồn dữ liệu & giấy phép

| Dữ liệu | Nguồn | Giấy phép |
|---|---|---|
| Từ vựng tiếng Anh theo cấp A1–B2 | The CEFR-J Wordlist Version 1.5. Compiled by Yukio Tono, Tokyo University of Foreign Studies. Retrieved from http://www.cefr-j.org/download.html (bản sao: [openlanguageprofiles/olp-en-cefrj](https://github.com/openlanguageprofiles/olp-en-cefrj)) | Dùng miễn phí cho nghiên cứu và thương mại, có trích dẫn |
| Từ vựng HSK 3.0 cấp 1–4 | [drkameleon/complete-hsk-vocabulary](https://github.com/drkameleon/complete-hsk-vocabulary) | MIT |
| Từ thông dụng tiếng Tây Ban Nha | [doozan/spanish_data](https://github.com/doozan/spanish_data) `frequency.csv`, từ [hermitdave/FrequencyWords](https://github.com/hermitdave/FrequencyWords) | CC BY-SA 3.0 — nên `src/data/bank/es.json` cũng phát hành theo CC BY-SA |

Nghĩa tiếng Việt, phiên âm IPA (tiếng Anh), âm Hán Việt và toàn bộ bài học, bài đọc do AI biên soạn
dựa trên các danh sách trên; nên được người dạy kiểm duyệt trước khi dùng chính thức.
Dữ liệu gốc tải về nằm trong `sources/raw/` (không đưa lên git).
