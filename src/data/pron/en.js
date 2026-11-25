// Phát âm nền tảng tiếng Anh: những lỗi người Việt hay mắc nhất. Cấu trúc: xem src/data/SCHEMA.md

// Cặp tối thiểu: [từ, IPA, nghĩa] — máy đọc ngẫu nhiên một từ trong nhóm
const PAIRS = [
  [['ship', '/ʃɪp/', 'con tàu'], ['sheep', '/ʃiːp/', 'con cừu']],
  [['hit', '/hɪt/', 'đánh'], ['heat', '/hiːt/', 'hơi nóng']],
  [['sit', '/sɪt/', 'ngồi'], ['seat', '/siːt/', 'chỗ ngồi']],
  [['fill', '/fɪl/', 'làm đầy'], ['feel', '/fiːl/', 'cảm thấy']],
  [['full', '/fʊl/', 'no, đầy'], ['fool', '/fuːl/', 'kẻ ngốc']],
  [['bad', '/bæd/', 'tồi'], ['bed', '/bed/', 'giường']],
  [['man', '/mæn/', 'đàn ông'], ['men', '/men/', 'những người đàn ông']],
  [['think', '/θɪŋk/', 'nghĩ'], ['sink', '/sɪŋk/', 'bồn rửa']],
  [['three', '/θriː/', 'số ba'], ['tree', '/triː/', 'cái cây']],
  [['mouth', '/maʊθ/', 'miệng'], ['mouse', '/maʊs/', 'con chuột']],
  [['they', '/ðeɪ/', 'họ'], ['day', '/deɪ/', 'ngày']],
  [['then', '/ðen/', 'sau đó'], ['den', '/den/', 'hang thú']],
  [['nine', '/naɪn/', 'số chín'], ['night', '/naɪt/', 'đêm'], ['nice', '/naɪs/', 'tốt, đẹp']],
  [['like', '/laɪk/', 'thích'], ['light', '/laɪt/', 'ánh sáng'], ['line', '/laɪn/', 'đường kẻ']],
  [['rice', '/raɪs/', 'gạo, cơm'], ['right', '/raɪt/', 'đúng'], ['ride', '/raɪd/', 'cưỡi, đi xe']],
  [['bike', '/baɪk/', 'xe đạp'], ['bite', '/baɪt/', 'cắn'], ['buy', '/baɪ/', 'mua']],
  [['card', '/kɑːrd/', 'thẻ'], ['car', '/kɑːr/', 'ô tô']],
  [['cold', '/koʊld/', 'lạnh'], ['coal', '/koʊl/', 'than']],
  [['price', '/praɪs/', 'giá'], ['prize', '/praɪz/', 'giải thưởng']],
  [['five', '/faɪv/', 'số năm'], ['fight', '/faɪt/', 'đánh nhau']],
  [['cat', '/kæt/', 'con mèo'], ['cats', '/kæts/', 'những con mèo']],
  [['book', '/bʊk/', 'quyển sách'], ['books', '/bʊks/', 'những quyển sách']],
  [['work', '/wɜːrk/', 'làm việc'], ['worked', '/wɜːrkt/', 'đã làm việc']],
  [['play', '/pleɪ/', 'chơi'], ['played', '/pleɪd/', 'đã chơi']],
  [['want', '/wɑːnt/', 'muốn'], ['wanted', '/ˈwɑːntɪd/', 'đã muốn']],
  [['see', '/siː/', 'nhìn thấy'], ['she', '/ʃiː/', 'cô ấy']],
  [['sip', '/sɪp/', 'nhấp (một ngụm)'], ['ship', '/ʃɪp/', 'con tàu']],
  [['pen', '/pen/', 'bút'], ['pain', '/peɪn/', 'cơn đau']],
  [['wet', '/wet/', 'ướt'], ['wait', '/weɪt/', 'chờ']]
];

// [động từ -ed, IPA, 0 = /t/, 1 = /d/, 2 = /ɪd/]
const ED = [
  ['stopped', '/stɑːpt/', 0], ['looked', '/lʊkt/', 0], ['washed', '/wɑːʃt/', 0], ['watched', '/wɑːtʃt/', 0],
  ['laughed', '/læft/', 0], ['missed', '/mɪst/', 0], ['played', '/pleɪd/', 1], ['lived', '/lɪvd/', 1],
  ['cleaned', '/kliːnd/', 1], ['called', '/kɔːld/', 1], ['opened', '/ˈoʊpənd/', 1], ['studied', '/ˈstʌdid/', 1],
  ['wanted', '/ˈwɑːntɪd/', 2], ['needed', '/ˈniːdɪd/', 2], ['started', '/ˈstɑːrtɪd/', 2], ['decided', '/dɪˈsaɪdɪd/', 2]
];
const ED_OPTS = ['/t/ — như "t" nhẹ', '/d/ — như "đ" nhẹ', '/ɪd/ — thêm âm "ịt"'];

// [từ, các âm tiết, chỉ số âm tiết nhấn, nghĩa]
const STRESS = [
  ['banana', ['ba', 'na', 'na'], 1, 'quả chuối'], ['computer', ['com', 'pu', 'ter'], 1, 'máy tính'],
  ['teacher', ['tea', 'cher'], 0, 'giáo viên'], ['hotel', ['ho', 'tel'], 1, 'khách sạn'],
  ['photograph', ['pho', 'to', 'graph'], 0, 'bức ảnh'], ['photographer', ['pho', 'to', 'gra', 'pher'], 1, 'thợ ảnh'],
  ['important', ['im', 'por', 'tant'], 1, 'quan trọng'], ['family', ['fa', 'mi', 'ly'], 0, 'gia đình'],
  ['begin', ['be', 'gin'], 1, 'bắt đầu'], ['answer', ['an', 'swer'], 0, 'câu trả lời'],
  ['tomorrow', ['to', 'mor', 'row'], 1, 'ngày mai'], ['vegetable', ['veg', 'e', 'ta', 'ble'], 0, 'rau'],
  ['understand', ['un', 'der', 'stand'], 2, 'hiểu'], ['Vietnamese', ['Viet', 'na', 'mese'], 2, 'người/tiếng Việt']
];
const stressLabel = (syl, k) => syl.map((s, j) => (j === k ? s.toUpperCase() : s)).join('·');

export default {
  intro: 'Người Việt nói tiếng Anh thường bị khó hiểu không phải vì thiếu từ, mà vì bỏ âm cuối và sai trọng âm. '
    + 'Phần này tập trung đúng vào những lỗi đó — sửa được là người nghe hiểu bạn ngay.',
  sections: [
    {
      id: 'final', icon: '🎯', title: 'Âm cuối — lỗi số 1 của người Việt',
      summary: 'Bỏ âm cuối làm like, light, line nghe như nhau',
      explain: [
        'Tiếng Việt chỉ có vài âm cuối và các âm p, t, c ở cuối bị "nuốt" (miệng khép lại nhưng không bật ra). '
          + 'Tiếng Anh thì khác: âm cuối mang nghĩa. "I like it" và "I light it" chỉ khác nhau ở âm cuối.',
        'Những âm cuối tiếng Việt không có — s, z, v, l, ʃ, tʃ, dʒ, ks, nd, lt… — là chỗ người Việt hay bỏ nhất. Bấm nghe và để ý phần cuối từ.'
      ],
      pairs: [
        { w: [{ t: 'like', sub: '/laɪk/', vi: 'thích' }, { t: 'light', sub: '/laɪt/', vi: 'ánh sáng' }, { t: 'line', sub: '/laɪn/', vi: 'đường kẻ' }], note: 'Chỉ khác âm cuối k / t / n' },
        { w: [{ t: 'nine', sub: '/naɪn/', vi: 'số chín' }, { t: 'night', sub: '/naɪt/', vi: 'đêm' }, { t: 'nice', sub: '/naɪs/', vi: 'tốt' }], note: 'n / t / s' },
        { w: [{ t: 'rice', sub: '/raɪs/', vi: 'cơm' }, { t: 'right', sub: '/raɪt/', vi: 'đúng' }, { t: 'ride', sub: '/raɪd/', vi: 'đi xe' }], note: 's / t / d' },
        { w: [{ t: 'card', sub: '/kɑːrd/', vi: 'thẻ' }, { t: 'car', sub: '/kɑːr/', vi: 'ô tô' }], note: 'Có /d/ và không có /d/' },
        { w: [{ t: 'price', sub: '/praɪs/', vi: 'giá' }, { t: 'prize', sub: '/praɪz/', vi: 'giải thưởng' }], note: '/s/ không rung — /z/ rung cổ họng' }
      ],
      examples: [
        { t: 'five', sub: '/faɪv/', vi: 'số năm' }, { t: 'school', sub: '/skuːl/', vi: 'trường học' },
        { t: 'fish', sub: '/fɪʃ/', vi: 'con cá' }, { t: 'watch', sub: '/wɑːtʃ/', vi: 'đồng hồ, xem' },
        { t: 'page', sub: '/peɪdʒ/', vi: 'trang' }, { t: 'box', sub: '/bɑːks/', vi: 'cái hộp' },
        { t: 'friend', sub: '/frend/', vi: 'bạn' }, { t: 'I like it.', sub: '/aɪ laɪ kɪt/', vi: 'Tôi thích nó.' }
      ],
      tip: 'Lúc mới tập, hãy cố tình đọc âm cuối thật rõ, thậm chí hơi "lố": five → "phai-vơ" thật nhẹ, rồi giảm dần phần "ơ". '
        + 'Khi từ sau bắt đầu bằng nguyên âm thì nối âm cuối sang: "like it" → "lai-kít", "an apple" → "ơ-ná-pồ".'
    },
    {
      id: 'ses', icon: '➕', title: 'Đuôi -s / -es',
      summary: 'Ba cách đọc: /s/, /z/, /ɪz/',
      explain: [
        'Đuôi -s xuất hiện ở danh từ số nhiều (cats), động từ ngôi thứ ba (she works) và sở hữu cách (Tom\'s). '
          + 'Bỏ âm này thì người nghe không biết bạn nói một hay nhiều, hiện tại hay không.',
        'Cách đọc phụ thuộc âm cuối của từ gốc:'
      ],
      table: [
        ['Âm cuối từ gốc', 'Đọc -s là', 'Ví dụ'],
        ['p, t, k, f, θ (vô thanh)', '/s/', 'cats, books, stops'],
        ['Nguyên âm và các âm hữu thanh khác', '/z/', 'dogs, pens, plays'],
        ['s, z, ʃ, tʃ, dʒ (âm xuýt)', '/ɪz/ (thêm 1 âm tiết)', 'buses, watches, pages']
      ],
      groups: [
        { label: '/s/', items: [
          { t: 'cats', sub: '/kæts/', vi: 'những con mèo' }, { t: 'books', sub: '/bʊks/', vi: 'những quyển sách' },
          { t: 'stops', sub: '/stɑːps/', vi: 'dừng lại' }, { t: 'laughs', sub: '/læfs/', vi: 'cười' }] },
        { label: '/z/', items: [
          { t: 'dogs', sub: '/dɔːɡz/', vi: 'những con chó' }, { t: 'pens', sub: '/penz/', vi: 'những cây bút' },
          { t: 'plays', sub: '/pleɪz/', vi: 'chơi' }, { t: 'gives', sub: '/ɡɪvz/', vi: 'cho, tặng' }] },
        { label: '/ɪz/', items: [
          { t: 'buses', sub: '/ˈbʌsɪz/', vi: 'xe buýt' }, { t: 'watches', sub: '/ˈwɑːtʃɪz/', vi: 'đồng hồ' },
          { t: 'boxes', sub: '/ˈbɑːksɪz/', vi: 'những cái hộp' }, { t: 'pages', sub: '/ˈpeɪdʒɪz/', vi: 'những trang' }] }
      ],
      tip: 'Mẹo nhớ: chỉ thêm âm tiết "ịz" khi từ gốc tận cùng bằng âm xuýt (s, x, sh, ch, ge). '
        + 'Còn lại -s chỉ là một âm gió rất ngắn dính vào cuối từ, không thêm "ơ": cats là một âm tiết.'
    },
    {
      id: 'ed', icon: '⏪', title: 'Đuôi -ed',
      summary: 'Ba cách đọc: /t/, /d/, /ɪd/',
      explain: [
        'Đuôi -ed của động từ quá khứ cũng có ba cách đọc, tuỳ âm cuối của động từ gốc. '
          + 'Lỗi hay gặp: đọc "worked" thành hai âm tiết "uơ-kết" — thực ra chỉ có một âm tiết /wɜːrkt/.'
      ],
      table: [
        ['Âm cuối động từ', 'Đọc -ed là', 'Ví dụ'],
        ['p, k, s, ʃ, tʃ, f (vô thanh)', '/t/', 'stopped, looked, washed'],
        ['Nguyên âm và âm hữu thanh khác', '/d/', 'played, lived, cleaned'],
        ['t, d', '/ɪd/ (thêm 1 âm tiết)', 'wanted, needed']
      ],
      groups: [
        { label: '/t/', items: ED.filter(x => x[2] === 0).slice(0, 4).map(([t, sub]) => ({ t, sub })) },
        { label: '/d/', items: ED.filter(x => x[2] === 1).slice(0, 4).map(([t, sub]) => ({ t, sub })) },
        { label: '/ɪd/', items: ED.filter(x => x[2] === 2).map(([t, sub]) => ({ t, sub })) }
      ],
      tip: 'Chỉ khi động từ tận cùng bằng âm t hoặc d mới thêm âm tiết "ịt". Các trường hợp khác -ed chỉ là một âm t/d rất nhẹ ở cuối — '
        + 'nhưng đừng bỏ nó, vì đó là dấu hiệu duy nhất cho biết bạn đang nói về quá khứ.'
    },
    {
      id: 'th', icon: '👅', title: 'Âm /θ/ và /ð/ (th)',
      summary: 'Đưa lưỡi ra giữa hai hàm răng',
      explain: [
        'Tiếng Việt không có hai âm này. Người Việt hay thay /θ/ bằng "th" hoặc "t" (think → "thinh") và /ð/ bằng "d/đ" (this → "đít").',
        '/θ/ (vô thanh): đặt đầu lưỡi nhẹ giữa hai hàm răng rồi thổi hơi ra, cổ không rung — think, three, thank. '
          + '/ð/ (hữu thanh): cùng vị trí lưỡi nhưng cổ họng rung — this, that, mother.'
      ],
      groups: [
        { label: '/θ/ — thổi hơi', items: [
          { t: 'think', sub: '/θɪŋk/', vi: 'nghĩ' }, { t: 'three', sub: '/θriː/', vi: 'số ba' },
          { t: 'thank you', sub: '/θæŋk juː/', vi: 'cảm ơn' }, { t: 'mouth', sub: '/maʊθ/', vi: 'miệng' }] },
        { label: '/ð/ — rung cổ', items: [
          { t: 'this', sub: '/ðɪs/', vi: 'cái này' }, { t: 'that', sub: '/ðæt/', vi: 'cái kia' },
          { t: 'mother', sub: '/ˈmʌðər/', vi: 'mẹ' }, { t: 'with', sub: '/wɪð/', vi: 'với' }] }
      ],
      pairs: [
        { w: [{ t: 'think', sub: '/θɪŋk/', vi: 'nghĩ' }, { t: 'sink', sub: '/sɪŋk/', vi: 'bồn rửa' }], note: '/θ/ — /s/' },
        { w: [{ t: 'three', sub: '/θriː/', vi: 'số ba' }, { t: 'tree', sub: '/triː/', vi: 'cái cây' }], note: '/θ/ — /t/' },
        { w: [{ t: 'they', sub: '/ðeɪ/', vi: 'họ' }, { t: 'day', sub: '/deɪ/', vi: 'ngày' }], note: '/ð/ — /d/' }
      ],
      tip: 'Soi gương khi tập: thấy đầu lưỡi thò ra một chút giữa hai hàm răng là đúng. Đặt ngón tay lên cổ họng: /ð/ thấy rung, /θ/ không rung.'
    },
    {
      id: 'vowels', icon: '↔️', title: 'Nguyên âm dài và ngắn',
      summary: 'ship – sheep, full – fool, bad – bed',
      explain: [
        'Tiếng Anh phân biệt nguyên âm dài (có dấu ː) và ngắn. Không chỉ độ dài khác nhau mà khẩu hình cũng khác:',
        '/iː/ (sheep): môi căng như đang cười, kéo dài "iii". /ɪ/ (ship): môi thả lỏng, ngắn, hơi ngả sang "ê". '
          + '/uː/ (fool): môi tròn, kéo dài. /ʊ/ (full): ngắn, môi lỏng. /æ/ (bad): miệng mở to, giữa "a" và "e". /e/ (bed): như "e" tiếng Việt.'
      ],
      pairs: [
        { w: [{ t: 'ship', sub: '/ʃɪp/', vi: 'con tàu' }, { t: 'sheep', sub: '/ʃiːp/', vi: 'con cừu' }], note: '/ɪ/ ngắn — /iː/ dài' },
        { w: [{ t: 'hit', sub: '/hɪt/', vi: 'đánh' }, { t: 'heat', sub: '/hiːt/', vi: 'hơi nóng' }], note: '/ɪ/ — /iː/' },
        { w: [{ t: 'sit', sub: '/sɪt/', vi: 'ngồi' }, { t: 'seat', sub: '/siːt/', vi: 'chỗ ngồi' }], note: '/ɪ/ — /iː/' },
        { w: [{ t: 'full', sub: '/fʊl/', vi: 'no, đầy' }, { t: 'fool', sub: '/fuːl/', vi: 'kẻ ngốc' }], note: '/ʊ/ — /uː/' },
        { w: [{ t: 'bad', sub: '/bæd/', vi: 'tồi' }, { t: 'bed', sub: '/bed/', vi: 'giường' }], note: '/æ/ mở to — /e/' },
        { w: [{ t: 'man', sub: '/mæn/', vi: 'đàn ông' }, { t: 'men', sub: '/men/', vi: 'đàn ông (số nhiều)' }], note: '/æ/ — /e/' }
      ],
      tip: 'Đọc /iː/ như khi chụp ảnh nói "cheese" — miệng cười căng. Đọc /æ/ như "e" nhưng há miệng to như sắp ngáp.'
    },
    {
      id: 'stress', icon: '📢', title: 'Trọng âm từ',
      summary: 'Âm tiết nhấn: to hơn, dài hơn, cao hơn',
      explain: [
        'Tiếng Việt mỗi chữ đọc đều nhau; tiếng Anh thì mỗi từ nhiều âm tiết có một âm tiết được nhấn mạnh. '
          + 'Sai trọng âm khiến người bản ngữ khó hiểu hơn cả sai một âm.',
        'Âm tiết nhấn (in HOA dưới đây) đọc to, dài và cao hơn; các âm tiết còn lại đọc nhẹ, nhanh, nguyên âm thường biến thành /ə/ ("ơ" nhẹ).',
        'Một số từ đổi trọng âm thì đổi loại từ: REcord (danh từ: bản ghi) — reCORD (động từ: ghi lại).'
      ],
      examples: [
        { t: 'banana', sub: 'ba·NA·na', vi: 'quả chuối' }, { t: 'computer', sub: 'com·PU·ter', vi: 'máy tính' },
        { t: 'photograph', sub: 'PHO·to·graph', vi: 'bức ảnh' }, { t: 'photographer', sub: 'pho·TO·gra·pher', vi: 'thợ ảnh' },
        { t: 'hotel', sub: 'ho·TEL', vi: 'khách sạn' }, { t: 'important', sub: 'im·POR·tant', vi: 'quan trọng' },
        { t: 'a record', sub: 'RE·cord (danh từ)', vi: 'bản ghi' }, { t: 'to record', sub: 're·CORD (động từ)', vi: 'ghi lại' }
      ],
      tip: 'Khi học từ mới, luôn ghi nhớ trọng âm cùng với nghĩa (trong IPA, dấu ˈ đứng trước âm tiết nhấn). '
        + 'Tập vỗ tay mạnh ở âm tiết nhấn: ba-NA-na → vỗ nhẹ-MẠNH-nhẹ.'
    },
    {
      id: 'clusters', icon: '🧩', title: 'Cụm phụ âm',
      summary: 'Không chèn "ơ" vào giữa: street, not "sơ-tờ-rít"',
      explain: [
        'Tiếng Anh có nhiều phụ âm đứng liền nhau (str, pl, sk, nd…). Người Việt hay chèn thêm "ơ" làm từ dài ra: '
          + 'school → "sờ-cun", street → "sơ-tờ-rít". Hãy đọc các phụ âm dính liền thành một khối, chỉ một âm tiết.'
      ],
      examples: [
        { t: 'street', sub: '/striːt/', vi: 'đường phố' }, { t: 'school', sub: '/skuːl/', vi: 'trường học' },
        { t: 'spring', sub: '/sprɪŋ/', vi: 'mùa xuân' }, { t: 'play', sub: '/pleɪ/', vi: 'chơi' },
        { t: 'class', sub: '/klæs/', vi: 'lớp học' }, { t: 'friends', sub: '/frendz/', vi: 'những người bạn' },
        { t: 'twelfth', sub: '/twelfθ/', vi: 'thứ mười hai' }, { t: 'asked', sub: '/æskt/', vi: 'đã hỏi' }
      ],
      tip: 'Vỗ tay theo âm tiết: street chỉ một tiếng vỗ. Bắt đầu chậm "s…t…r…eet" rồi nhanh dần cho tới khi các phụ âm dính vào nhau.'
    }
  ],
  drills: [
    {
      id: 'pairs', icon: '👂', title: 'Cặp tối thiểu: nghe và chọn từ', round: 20,
      desc: 'Máy đọc một từ, bạn chọn đúng từ vừa nghe. Các từ chỉ khác nhau một âm.',
      pool: PAIRS.map(g => ({
        options: g.map(x => x[0]), labels: g.map(x => `${x[0]}  ${x[1]}`),
        show: g.map(x => `${x[0]} ${x[1]} — ${x[2]}`).join(' · ')
      }))
    },
    {
      id: 'ed', icon: '⏪', title: 'Đuôi -ed đọc thế nào?', round: 12,
      desc: 'Máy đọc một động từ quá khứ, bạn chọn cách đọc đuôi -ed.',
      fixed: true,
      pool: ED.map(([t, ipa, k]) => ({
        say: t, prompt: t, options: ED_OPTS, answer: k, show: `${t} ${ipa}`,
        explain: ['Gốc tận cùng âm vô thanh → /t/.', 'Gốc tận cùng âm hữu thanh/nguyên âm → /d/.', 'Gốc tận cùng t hoặc d → /ɪd/.'][k]
      }))
    },
    {
      id: 'stress', icon: '📢', title: 'Trọng âm ở đâu?', round: 12,
      desc: 'Nghe một từ và chọn âm tiết được nhấn (viết HOA).',
      fixed: true,
      pool: STRESS.map(([t, syl, k, vi]) => ({
        say: t, prompt: t, options: syl.map((_, j) => stressLabel(syl, j)), answer: k, show: `${stressLabel(syl, k)} — ${vi}`
      }))
    }
  ]
};
