"""Gộp danh sách từ nguồn (sources/work/*.tsv) với bản dịch (sources/work/out/*.tsv)
thành src/data/bank/<lang>.json cho trang Kho từ vựng.

Mỗi từ là một mảng gọn:  en: [từ, ipa, nghĩa, cấp, từ loại]
                          es: [từ có mạo từ, '', nghĩa, cấp, từ loại]
                          zh: [chữ Hán, pinyin, nghĩa, cấp, từ loại, Hán Việt]
Chạy:  python3 scripts/build-bank.py
"""
import glob, json, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
WORK = os.path.join(ROOT, 'sources', 'work')
OUT = os.path.join(ROOT, 'src', 'data', 'bank')


def rows(path, skip_header):
    with open(path, encoding='utf-8') as f:
        lines = [l.rstrip('\n').split('\t') for l in f if l.strip()]
    return lines[1:] if skip_header else lines


# Từ miệt thị / không phù hợp với người học: không đưa vào kho
EXCLUDE = {'en': {'gook'}, 'es': set(), 'zh': set()}


# Cách đọc đúng cho các từ HSK đa âm (nguồn ghi nhiều cách đọc, cách đầu tiên thường là họ/dạng cổ)
PINYIN_FIX = {}
_fix = os.path.join(ROOT, 'sources', 'zh-pinyin-fix.tsv')
if os.path.exists(_fix):
    PINYIN_FIX = dict(l.rstrip('\n').split('\t') for l in open(_fix, encoding='utf-8') if l.strip())


def build(lang):
    words, missing = [], []
    for src in sorted((p for p in glob.glob(f'{WORK}/{lang}-*.tsv') if re.search(r'-\d+\.tsv$', p)), key=lambda p: int(re.search(r'-(\d+)\.tsv$', p)[1])):
        out = os.path.join(WORK, 'out', os.path.basename(src))
        if not os.path.exists(out):
            missing.append(os.path.basename(src))
            continue
        for a, b in zip(rows(src, True), rows(out, False)):
            assert a[0] == b[0], (src, a[0], b[0])
            if a[0] in EXCLUDE[lang]:
                continue
            if lang == 'en':
                words.append([a[0], b[1], b[2], a[2], a[1]])
            elif lang == 'es':
                if b[2].strip() == 'SKIP':
                    continue
                words.append([b[1], '', b[2], a[2], a[1]])
            else:
                hv = b[1] if re.search(r'[^\s-]', b[1]) else ''
                words.append([a[0], PINYIN_FIX.get(a[0], a[1]), b[2], a[3], a[2], hv])
    os.makedirs(OUT, exist_ok=True)
    with open(os.path.join(OUT, f'{lang}.json'), 'w', encoding='utf-8') as f:
        json.dump(words, f, ensure_ascii=False, separators=(',', ':'))
    print(lang, len(words), 'words', ('(thiếu: ' + ', '.join(missing) + ')') if missing else '')


for lang in ('en', 'es', 'zh'):
    build(lang)
