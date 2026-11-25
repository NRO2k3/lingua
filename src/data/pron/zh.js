// Phát âm nền tảng tiếng Trung: thanh điệu, pinyin, biến điệu, các cặp âm dễ nhầm.
// Cấu trúc dữ liệu: xem src/data/SCHEMA.md

const TONE_OPTS = ['Thanh 1 ˉ', 'Thanh 2 ˊ', 'Thanh 3 ˇ', 'Thanh 4 ˋ'];

// [chữ, pinyin, nghĩa, thanh]
const TONE_POOL = [
  ['妈', 'mā', 'mẹ', 1], ['三', 'sān', 'ba (số 3)', 1], ['书', 'shū', 'sách', 1], ['飞', 'fēi', 'bay', 1],
  ['天', 'tiān', 'trời, ngày', 1], ['高', 'gāo', 'cao', 1], ['七', 'qī', 'bảy', 1], ['听', 'tīng', 'nghe', 1],
  ['麻', 'má', 'tê, cây gai', 2], ['人', 'rén', 'người', 2], ['茶', 'chá', 'trà', 2], ['来', 'lái', 'đến', 2],
  ['学', 'xué', 'học', 2], ['十', 'shí', 'mười', 2], ['鱼', 'yú', 'cá', 2], ['白', 'bái', 'trắng', 2],
  ['马', 'mǎ', 'ngựa', 3], ['我', 'wǒ', 'tôi', 3], ['你', 'nǐ', 'bạn', 3], ['五', 'wǔ', 'năm (số 5)', 3],
  ['水', 'shuǐ', 'nước', 3], ['九', 'jiǔ', 'chín', 3], ['买', 'mǎi', 'mua', 3], ['小', 'xiǎo', 'nhỏ', 3],
  ['骂', 'mà', 'mắng', 4], ['是', 'shì', 'là', 4], ['四', 'sì', 'bốn', 4], ['大', 'dà', 'to, lớn', 4],
  ['去', 'qù', 'đi', 4], ['六', 'liù', 'sáu', 4], ['肉', 'ròu', 'thịt', 4], ['卖', 'mài', 'bán', 4]
];

// [chữ, nghĩa, đáp án đúng, ...phương án sai, giải thích]
const PINYIN_POOL = [
  ['知', 'biết', 'zhī', ['zī', 'jī', 'chī'], 'zh uốn lưỡi, khác z (không uốn) và j (lưỡi dẹt).'],
  ['四', 'bốn', 'sì', ['shì', 'xì'], 's không uốn lưỡi; -i sau s đọc gần "ư".'],
  ['是', 'là', 'shì', ['sì', 'xì'], 'sh uốn lưỡi; -i sau sh đọc gần "ư" uốn lưỡi.'],
  ['吃', 'ăn', 'chī', ['cī', 'qī'], 'ch = zh bật hơi, uốn lưỡi.'],
  ['七', 'bảy', 'qī', ['chī', 'jī'], 'q = j bật hơi, lưỡi dẹt, môi cười.'],
  ['西', 'phía tây', 'xī', ['shī', 'sī'], 'x: lưỡi dẹt, môi cười, gần "x" tiếng Việt nhưng mềm hơn.'],
  ['女', 'nữ', 'nǚ', ['nǔ', 'nǐ'], 'ü: nói "i" nhưng tròn môi.'],
  ['绿', 'xanh lá', 'lǜ', ['lù', 'lì'], 'ü: nói "i" nhưng tròn môi.'],
  ['山', 'núi', 'shān', ['sān', 'xiān'], 'sh uốn lưỡi.'],
  ['三', 'ba', 'sān', ['shān', 'sāng'], 's không uốn; -an (âm cuối n), không phải -ang.'],
  ['早', 'sớm', 'zǎo', ['zhǎo', 'cǎo'], 'z = "t" và "x" đọc dính liền, không bật hơi.'],
  ['找', 'tìm', 'zhǎo', ['zǎo', 'jiǎo'], 'zh uốn lưỡi.'],
  ['去', 'đi', 'qù', ['qì', 'chù'], 'Sau j, q, x chữ u thực ra là ü (bỏ hai chấm khi viết).'],
  ['鱼', 'cá', 'yú', ['yí', 'wú'], 'yu = ü: tròn môi như nói "uy".'],
  ['月', 'tháng, trăng', 'yuè', ['yè', 'wèi'], 'yue = üe: bắt đầu bằng ü tròn môi.'],
  ['冷', 'lạnh', 'lěng', ['lǎng', 'lǐng'], '-eng: "e" đọc gần "ơ", âm cuối ng.'],
  ['天', 'trời', 'tiān', ['tān', 'diān'], '-ian đọc gần "iên"; t bật hơi (như "th" tiếng Việt).'],
  ['门', 'cửa', 'mén', ['mán', 'méng'], '-en: "e" gần "ơ", âm cuối n.'],
  ['忙', 'bận', 'máng', ['mán', 'méng'], '-ang: âm cuối ng.'],
  ['热', 'nóng', 'rè', ['lè', 'zhè'], 'r uốn lưỡi, không phải l.'],
  ['菜', 'món ăn, rau', 'cài', ['chài', 'zài'], 'c = z bật hơi, không uốn lưỡi.'],
  ['二', 'hai', 'èr', ['è', 'ài'], 'er: đọc "ơ" rồi cong lưỡi lên.'],
  ['车', 'xe', 'chē', ['qiē', 'zhē'], 'ch bật hơi, uốn lưỡi; -e gần "ưa/ơ".'],
  ['熊', 'con gấu', 'xióng', ['shóng', 'xiáng'], '-iong: "i" lướt + "ung".']
];

export default {
  intro: 'Tiếng Trung có 4 thanh điệu và một thanh nhẹ. Người Việt có lợi thế lớn vì tiếng mẹ đẻ cũng có thanh — '
    + 'chỉ cần "ghép" đúng thanh Việt với thanh Trung. Học phần này trước bài 1 sẽ giúp bạn đọc pinyin chính xác ngay từ đầu.',
  sections: [
    {
      id: 'tones', icon: '🎵', title: 'Bốn thanh điệu và thanh nhẹ',
      summary: 'Nền móng quan trọng nhất: sai thanh là sai nghĩa',
      explain: [
        'Cùng một âm "ma" nhưng đổi thanh thì đổi nghĩa: mā (mẹ), má (gai), mǎ (ngựa), mà (mắng). '
          + 'Dấu thanh viết trên nguyên âm chính của pinyin.',
        'Hình vẽ dưới mỗi thanh cho thấy giọng đi từ thấp (dưới) lên cao (trên) như thế nào. Bấm vào từng thẻ để nghe.',
        'Chú ý: dấu thanh 3 (ˇ) có hình chữ V nhọn, khác dấu trăng (˘) của chữ ă tiếng Việt. Pinyin không có chữ ă, nên thấy "ǎ" là thanh 3 của chữ a.'
      ],
      tones: [
        { n: 1, name: 'Thanh 1', mark: 'ā', chao: [5, 5], vi: 'Giống thanh ngang nhưng CAO hơn và giữ đều như hát một nốt cao.',
          ex: { t: '妈', sub: 'mā', vi: 'mẹ' } },
        { n: 2, name: 'Thanh 2', mark: 'á', chao: [3, 5], vi: 'Giống dấu sắc: giọng đi lên từ giữa lên cao, như khi hỏi lại "Hả?".',
          ex: { t: '麻', sub: 'má', vi: 'tê, gai' } },
        { n: 3, name: 'Thanh 3', mark: 'ǎ', chao: [2, 1, 4], vi: 'Xuống thấp rồi hơi lên — gần dấu hỏi. Khi nói nhanh thường chỉ còn phần trầm thấp, gần dấu nặng kéo dài.',
          ex: { t: '马', sub: 'mǎ', vi: 'ngựa' } },
        { n: 4, name: 'Thanh 4', mark: 'à', chao: [5, 1], vi: 'Từ cao rơi mạnh xuống, ngắn và dứt khoát — như dấu huyền bắt đầu thật cao, cộng sự dứt khoát của dấu nặng.',
          ex: { t: '骂', sub: 'mà', vi: 'mắng' } },
        { n: 0, name: 'Thanh nhẹ', mark: 'a', chao: null, vi: 'Không có dấu. Đọc nhẹ và ngắn, độ cao phụ thuộc chữ đứng trước.',
          ex: { t: '妈妈', sub: 'māma', vi: 'mẹ' } }
      ],
      examples: [
        { t: '妈', sub: 'mā', vi: 'mẹ' }, { t: '麻', sub: 'má', vi: 'tê, gai' },
        { t: '马', sub: 'mǎ', vi: 'ngựa' }, { t: '骂', sub: 'mà', vi: 'mắng' },
        { t: '吗', sub: 'ma', vi: 'không? (trợ từ hỏi)' }, { t: '妈妈骂马吗？', sub: 'Māma mà mǎ ma?', vi: 'Mẹ mắng ngựa à?' }
      ],
      tip: 'Lỗi hay gặp nhất của người Việt: đọc thanh 1 thấp như thanh ngang và đọc thanh 4 thành dấu huyền mềm. '
        + 'Hãy đọc thanh 1 cao hơn giọng nói thường một chút, và thanh 4 rơi xuống thật dứt khoát như đang ra lệnh "Đi!".'
    },
    {
      id: 'initials', icon: '🔤', title: 'Thanh mẫu (phụ âm đầu)',
      summary: '21 phụ âm đầu và cách đọc gần nhất với tiếng Việt',
      explain: [
        'Thanh mẫu là phụ âm đứng đầu âm tiết. Nhiều âm có cặp "không bật hơi / bật hơi": b–p, d–t, g–k, j–q, zh–ch, z–c. '
          + 'Âm bật hơi đọc kèm một luồng hơi mạnh: để tờ giấy trước miệng sẽ thấy giấy rung.',
        'Mỗi thẻ là một chữ ví dụ. Bấm thẻ để nghe.'
      ],
      groups: [
        { label: 'Môi: b p m f', items: [
          { label: 'b', t: '爸', sub: 'bà', vi: 'bố', note: 'gần "b" nhưng nhẹ, không rung cổ' },
          { label: 'p', t: '怕', sub: 'pà', vi: 'sợ', note: '"p" bật hơi mạnh' },
          { label: 'm', t: '妈', sub: 'mā', vi: 'mẹ', note: 'như "m"' },
          { label: 'f', t: '飞', sub: 'fēi', vi: 'bay', note: 'như "ph"' }] },
        { label: 'Đầu lưỡi: d t n l', items: [
          { label: 'd', t: '大', sub: 'dà', vi: 'to', note: 'như "t" tiếng Việt' },
          { label: 't', t: '他', sub: 'tā', vi: 'anh ấy', note: 'như "th" tiếng Việt' },
          { label: 'n', t: '拿', sub: 'ná', vi: 'cầm', note: 'như "n"' },
          { label: 'l', t: '拉', sub: 'lā', vi: 'kéo', note: 'như "l"' }] },
        { label: 'Cuống lưỡi: g k h', items: [
          { label: 'g', t: '哥', sub: 'gē', vi: 'anh trai', note: 'như "c/k" tiếng Việt' },
          { label: 'k', t: '渴', sub: 'kě', vi: 'khát', note: '"k" bật hơi mạnh' },
          { label: 'h', t: '喝', sub: 'hē', vi: 'uống', note: 'gần "kh" tiếng Việt' }] },
        { label: 'Mặt lưỡi: j q x', items: [
          { label: 'j', t: '鸡', sub: 'jī', vi: 'gà', note: 'gần "ch", lưỡi dẹt, môi cười' },
          { label: 'q', t: '七', sub: 'qī', vi: 'bảy', note: 'như j nhưng bật hơi' },
          { label: 'x', t: '西', sub: 'xī', vi: 'tây', note: 'gần "x", lưỡi dẹt, môi cười' }] },
        { label: 'Uốn lưỡi: zh ch sh r', items: [
          { label: 'zh', t: '知', sub: 'zhī', vi: 'biết', note: 'gần "tr" uốn lưỡi' },
          { label: 'ch', t: '吃', sub: 'chī', vi: 'ăn', note: '"tr" uốn lưỡi, bật hơi' },
          { label: 'sh', t: '是', sub: 'shì', vi: 'là', note: 'gần "s" uốn lưỡi' },
          { label: 'r', t: '日', sub: 'rì', vi: 'ngày', note: 'gần "r" uốn lưỡi, không rung' }] },
        { label: 'Đầu lưỡi phẳng: z c s', items: [
          { label: 'z', t: '字', sub: 'zì', vi: 'chữ', note: '"t" + "x" dính liền' },
          { label: 'c', t: '次', sub: 'cì', vi: 'lần', note: 'như z nhưng bật hơi' },
          { label: 's', t: '四', sub: 'sì', vi: 'bốn', note: 'như "x" tiếng Việt' }] },
        { label: 'Bán nguyên âm: y w', items: [
          { label: 'y', t: '一', sub: 'yī', vi: 'một', note: 'như "i"' },
          { label: 'w', t: '五', sub: 'wǔ', vi: 'năm', note: 'như "u"' }] }
      ],
      tip: 'Pinyin không đọc theo chữ quốc ngữ! "d" đọc như "t", "t" như "th", "x" gần "x" nhưng lưỡi dẹt, "h" như "kh". '
        + 'Sau zh, ch, sh, r, z, c, s chữ "i" không đọc là "i" mà gần "ư": 是 shì, 四 sì.'
    },
    {
      id: 'finals', icon: '🅰️', title: 'Vận mẫu (phần vần)',
      summary: 'Các vần chính, chú ý e, ü, ian và -n/-ng',
      explain: [
        'Vận mẫu là phần vần sau phụ âm đầu. Phần lớn đọc khá giống tiếng Việt; dưới đây là các vần chính và những vần cần chú ý.'
      ],
      groups: [
        { label: 'Vần đơn', items: [
          { label: 'a', t: '八', sub: 'bā', vi: 'tám', note: 'như "a"' },
          { label: 'o', t: '我', sub: 'wǒ', vi: 'tôi', note: 'gần "ua/ô"' },
          { label: 'e', t: '饿', sub: 'è', vi: 'đói', note: 'gần "ưa" hoặc "ơ", KHÔNG phải "e"' },
          { label: 'i', t: '一', sub: 'yī', vi: 'một', note: 'như "i"' },
          { label: 'u', t: '五', sub: 'wǔ', vi: 'năm', note: 'như "u"' },
          { label: 'ü', t: '鱼', sub: 'yú', vi: 'cá', note: '"i" tròn môi, gần "uy"' }] },
        { label: 'Vần ghép', items: [
          { label: 'ai', t: '爱', sub: 'ài', vi: 'yêu', note: 'như "ai"' },
          { label: 'ei', t: '黑', sub: 'hēi', vi: 'đen', note: 'như "ây"' },
          { label: 'ao', t: '好', sub: 'hǎo', vi: 'tốt', note: 'như "ao"' },
          { label: 'ou', t: '口', sub: 'kǒu', vi: 'miệng', note: 'như "âu"' },
          { label: 'er', t: '二', sub: 'èr', vi: 'hai', note: '"ơ" rồi cong lưỡi' }] },
        { label: 'Âm cuối -n / -ng', items: [
          { label: 'an', t: '三', sub: 'sān', vi: 'ba', note: 'như "an"' },
          { label: 'ang', t: '忙', sub: 'máng', vi: 'bận', note: 'như "ang"' },
          { label: 'en', t: '门', sub: 'mén', vi: 'cửa', note: 'như "ân"' },
          { label: 'eng', t: '冷', sub: 'lěng', vi: 'lạnh', note: 'như "âng"' },
          { label: 'ong', t: '中', sub: 'zhōng', vi: 'giữa', note: 'như "ung"' }] },
        { label: 'Vần bắt đầu bằng i / u / ü', items: [
          { label: 'ia', t: '家', sub: 'jiā', vi: 'nhà', note: 'như "ia" lướt' },
          { label: 'ie', t: '谢', sub: 'xiè', vi: 'cảm ơn', note: 'như "iê"' },
          { label: 'iao', t: '小', sub: 'xiǎo', vi: 'nhỏ', note: 'như "iao"' },
          { label: 'iu', t: '六', sub: 'liù', vi: 'sáu', note: 'như "iêu"' },
          { label: 'ian', t: '天', sub: 'tiān', vi: 'trời', note: 'như "iên", KHÔNG phải "ian"' },
          { label: 'in', t: '心', sub: 'xīn', vi: 'tim', note: 'như "in"' },
          { label: 'ing', t: '听', sub: 'tīng', vi: 'nghe', note: 'như "inh"' },
          { label: 'ua', t: '花', sub: 'huā', vi: 'hoa', note: 'như "oa"' },
          { label: 'uo', t: '多', sub: 'duō', vi: 'nhiều', note: 'như "ua/uô"' },
          { label: 'ui', t: '对', sub: 'duì', vi: 'đúng', note: 'như "uây"' },
          { label: 'uan', t: '关', sub: 'guān', vi: 'đóng', note: 'như "oan"' },
          { label: 'un', t: '春', sub: 'chūn', vi: 'xuân', note: 'như "uân"' },
          { label: 'üe', t: '月', sub: 'yuè', vi: 'trăng', note: 'ü tròn môi + "ê"' },
          { label: 'ün', t: '云', sub: 'yún', vi: 'mây', note: 'ü tròn môi + "n"' }] }
      ],
      tip: 'Phân biệt -n và -ng giống hệt tiếng Việt (an/ang, in/inh). Chữ "ian" đọc là "iên": 天 tiān đọc gần "thiên" — '
        + 'đúng như âm Hán Việt của nó!'
    },
    {
      id: 'sandhi', icon: '🔀', title: 'Biến điệu: thanh 3 + 3, 不 và 一',
      summary: 'Ba quy tắc đổi thanh khi nói liền',
      explain: [
        'Khi nói liền nhiều chữ, một số thanh tự đổi để dễ nói. Pinyin trong sách thường vẫn viết thanh gốc, nên bạn cần nhớ quy tắc.',
        '① Hai thanh 3 đi liền: chữ đầu đổi thành thanh 2. 你好 viết nǐ hǎo nhưng đọc ní hǎo.',
        '② 不 (bù): đứng trước thanh 4 thì đọc bú. Các trường hợp khác giữ bù.',
        '③ 一 (yī): đứng một mình, đếm số, số thứ tự thì đọc yī. Trước thanh 4 đọc yí; trước thanh 1, 2, 3 đọc yì.'
      ],
      table: [
        ['Quy tắc', 'Viết', 'Đọc thực tế'],
        ['3 + 3 → 2 + 3', 'nǐ hǎo', 'ní hǎo'],
        ['不 + thanh 4', 'bù shì', 'bú shì'],
        ['不 + thanh khác', 'bù hǎo', 'bù hǎo (giữ nguyên)'],
        ['一 + thanh 4', 'yī gè', 'yí gè'],
        ['一 + thanh 1/2/3', 'yī tiān', 'yì tiān'],
        ['一 đếm số / thứ tự', 'dì yī', 'dì yī (giữ nguyên)']
      ],
      groups: [
        { label: 'Thanh 3 + thanh 3', items: [
          { t: '你好', sub: 'nǐ hǎo → ní hǎo', vi: 'xin chào' },
          { t: '很好', sub: 'hěn hǎo → hén hǎo', vi: 'rất tốt' },
          { t: '水果', sub: 'shuǐguǒ → shuíguǒ', vi: 'hoa quả' },
          { t: '可以', sub: 'kěyǐ → kéyǐ', vi: 'có thể' }] },
        { label: 'Biến điệu của 不', items: [
          { t: '不是', sub: 'bú shì', vi: 'không phải' },
          { t: '不对', sub: 'bú duì', vi: 'không đúng' },
          { t: '不好', sub: 'bù hǎo', vi: 'không tốt' },
          { t: '不来', sub: 'bù lái', vi: 'không đến' }] },
        { label: 'Biến điệu của 一', items: [
          { t: '一个', sub: 'yí gè', vi: 'một cái' },
          { t: '一样', sub: 'yíyàng', vi: 'giống nhau' },
          { t: '一天', sub: 'yì tiān', vi: 'một ngày' },
          { t: '一起', sub: 'yìqǐ', vi: 'cùng nhau' },
          { t: '第一', sub: 'dì yī', vi: 'thứ nhất' }] }
      ],
      tip: 'Đừng cố nhớ máy móc: nghe nhiều lần các cụm 你好, 不是, 一个 rồi bắt chước cả cụm. '
        + 'Khi thanh 3 đứng trước thanh khác, chỉ cần đọc phần trầm thấp (gần dấu nặng kéo dài) là tự nhiên nhất.'
    },
    {
      id: 'pairs', icon: '⚖️', title: 'Các cặp âm người Việt hay nhầm',
      summary: 'zh/z, ch/c, sh/s, j/q/x, u/ü',
      explain: [
        'Nghe từng cặp nhiều lần, chú ý vị trí lưỡi: zh, ch, sh uốn đầu lưỡi lên vòm miệng; z, c, s để lưỡi phẳng sau răng; '
          + 'j, q, x để mặt lưỡi dẹt, môi cười.'
      ],
      pairs: [
        { w: [{ t: '知', sub: 'zhī', vi: 'biết' }, { t: '资', sub: 'zī', vi: 'vốn' }], note: 'zh uốn lưỡi — z lưỡi phẳng' },
        { w: [{ t: '找', sub: 'zhǎo', vi: 'tìm' }, { t: '早', sub: 'zǎo', vi: 'sớm' }], note: 'zh — z' },
        { w: [{ t: '出', sub: 'chū', vi: 'ra' }, { t: '粗', sub: 'cū', vi: 'thô' }], note: 'ch — c (cả hai bật hơi)' },
        { w: [{ t: '春', sub: 'chūn', vi: 'xuân' }, { t: '村', sub: 'cūn', vi: 'làng' }], note: 'ch — c' },
        { w: [{ t: '是', sub: 'shì', vi: 'là' }, { t: '四', sub: 'sì', vi: 'bốn' }], note: 'sh — s' },
        { w: [{ t: '山', sub: 'shān', vi: 'núi' }, { t: '三', sub: 'sān', vi: 'ba' }], note: 'sh — s' },
        { w: [{ t: '鸡', sub: 'jī', vi: 'gà' }, { t: '七', sub: 'qī', vi: 'bảy' }, { t: '西', sub: 'xī', vi: 'tây' }], note: 'j không bật hơi — q bật hơi — x xát' },
        { w: [{ t: '女', sub: 'nǚ', vi: 'nữ' }, { t: '努', sub: 'nǔ', vi: 'cố gắng' }], note: 'ü tròn môi như "uy" — u như "u"' },
        { w: [{ t: '绿', sub: 'lǜ', vi: 'xanh lá' }, { t: '路', sub: 'lù', vi: 'đường' }], note: 'ü — u' },
        { w: [{ t: '是', sub: 'shì', vi: 'là' }, { t: '西', sub: 'xī', vi: 'tây' }], note: '-i sau sh đọc gần "ư" — -i sau x đọc "i"' }
      ],
      tip: 'Sau j, q, x, y chữ "u" luôn là ü (viết bỏ hai chấm): 去 qù, 鱼 yú, 学 xué đều tròn môi. '
        + 'Người miền Nam thường lẫn zh/z, ch/c vì tiếng Việt miền Nam cũng không phân biệt "tr/ch" — hãy luyện uốn lưỡi thật rõ.'
    }
  ],
  drills: [
    {
      id: 'tone', icon: '🎵', title: 'Nghe và chọn thanh', round: 20,
      desc: 'Máy đọc một chữ, bạn chọn thanh 1, 2, 3 hay 4.',
      fixed: true,
      pool: TONE_POOL.map(([t, py, vi, n]) => ({
        say: t, options: TONE_OPTS, answer: n - 1, show: `${t} ${py} — ${vi}`
      }))
    },
    {
      id: 'pinyin', icon: '🔤', title: 'Nghe và chọn pinyin đúng', round: 15,
      desc: 'Máy đọc một chữ, bạn chọn cách viết pinyin đúng.',
      pool: PINYIN_POOL.map(([t, vi, right, wrongs, explain]) => ({
        say: t, options: [right, ...wrongs], answer: 0, show: `${t} ${right} — ${vi}`, explain
      }))
    }
  ]
};
