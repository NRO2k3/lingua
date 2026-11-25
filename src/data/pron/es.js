// Phát âm nền tảng tiếng Tây Ban Nha (giọng Tây Ban Nha, es-ES). Cấu trúc: xem src/data/SCHEMA.md

// [chữ, tên chữ, từ ví dụ, nghĩa, cách đọc gần nhất với tiếng Việt]
const ABC = [
  ['A', 'a', 'agua', 'nước', '"a"'], ['B', 'be', 'barco', 'tàu', '"b"'], ['C', 'ce', 'casa', 'nhà', '"c"; trước e, i đọc như "th" tiếng Anh'],
  ['D', 'de', 'dedo', 'ngón tay', '"đ"; giữa hai nguyên âm đọc nhẹ'], ['E', 'e', 'España', 'Tây Ban Nha', '"ê"'],
  ['F', 'efe', 'foto', 'ảnh', '"ph"'], ['G', 'ge', 'gato', 'mèo', '"g"; trước e, i đọc "kh"'], ['H', 'hache', 'hola', 'xin chào', 'câm, không đọc'],
  ['I', 'i', 'isla', 'hòn đảo', '"i"'], ['J', 'jota', 'jamón', 'thịt nguội', '"kh"'], ['K', 'ka', 'kilo', 'ki-lô', '"c"'],
  ['L', 'ele', 'luna', 'mặt trăng', '"l"'], ['M', 'eme', 'mesa', 'cái bàn', '"m"'], ['N', 'ene', 'noche', 'đêm', '"n"'],
  ['Ñ', 'eñe', 'niño', 'đứa trẻ', '"nh"'], ['O', 'o', 'ojo', 'mắt', '"ô"'], ['P', 'pe', 'perro', 'chó', '"p" nhẹ, không bật hơi'],
  ['Q', 'cu', 'queso', 'phô mai', 'luôn viết qu, đọc "c"'], ['R', 'erre', 'rosa', 'hoa hồng', 'búng lưỡi / rung lưỡi'],
  ['S', 'ese', 'sol', 'mặt trời', '"x"'], ['T', 'te', 'té', 'trà', '"t", không bật hơi'], ['U', 'u', 'uva', 'nho', '"u"'],
  ['V', 'uve', 'vino', 'rượu vang', 'đọc như "b"'], ['W', 'uve doble', 'wifi', 'wifi', '"u" (từ mượn)'],
  ['X', 'equis', 'taxi', 'taxi', '"ks"'], ['Y', 'ye', 'yo', 'tôi', '"gi"; đứng một mình là "i"'], ['Z', 'zeta', 'zapato', 'giày', 'như "th" tiếng Anh']
];

// Nhóm từ dễ nhầm cho bài nghe: [từ, nghĩa]
const SETS = [
  [['pero', 'nhưng'], ['perro', 'con chó']], [['caro', 'đắt'], ['carro', 'xe đẩy']], [['para', 'để, cho'], ['parra', 'giàn nho']],
  [['coro', 'dàn hợp xướng'], ['corro', 'tôi chạy']], [['cero', 'số không'], ['cerro', 'ngọn đồi']],
  [['pollo', 'thịt gà'], ['polo', 'cực (trái đất)']], [['halla', 'tìm thấy'], ['ala', 'cánh']],
  [['gota', 'giọt'], ['jota', 'chữ J']], [['higo', 'quả sung'], ['hijo', 'con trai']], [['mago', 'pháp sư'], ['majo', 'dễ thương']],
  [['casa', 'ngôi nhà'], ['caza', 'săn bắn']], [['siento', 'tôi cảm thấy'], ['ciento', 'một trăm']], [['sien', 'thái dương'], ['cien', 'một trăm']],
  [['coser', 'khâu vá'], ['cocer', 'nấu, luộc']], [['masa', 'khối bột'], ['maza', 'cái chuỳ']],
  [['cana', 'tóc bạc'], ['caña', 'cây mía']], [['mono', 'con khỉ'], ['moño', 'búi tóc']], [['pena', 'nỗi buồn'], ['peña', 'tảng đá']],
  [['una', 'một'], ['uña', 'móng tay']],
  [['papa', 'khoai tây'], ['papá', 'bố']], [['esta', 'này'], ['está', 'đang ở']], [['hablo', 'tôi nói'], ['habló', 'anh ấy đã nói']],
  [['canto', 'tôi hát'], ['cantó', 'anh ấy đã hát']], [['término', 'thuật ngữ'], ['termino', 'tôi kết thúc'], ['terminó', 'anh ấy đã kết thúc']],
  [['casa', 'ngôi nhà'], ['casas', 'những ngôi nhà']], [['libro', 'quyển sách'], ['libros', 'những quyển sách']],
  [['habla', 'anh ấy nói'], ['hablas', 'bạn nói']], [['come', 'anh ấy ăn'], ['comes', 'bạn ăn']]
];

export default {
  intro: 'Tiếng Tây Ban Nha đọc gần như "viết sao đọc vậy" — tin vui cho người Việt! Chỉ cần nắm cách đọc từng chữ cái '
    + 'và vài âm đặc biệt (r rung, j, c/z) là bạn đọc được hầu hết mọi từ, kể cả từ chưa gặp. App dùng giọng Tây Ban Nha (Tây Ban Nha).',
  sections: [
    {
      id: 'abc', icon: '🔤', title: 'Bảng chữ cái và cách đọc',
      summary: '27 chữ cái, nguyên âm luôn đọc rõ và không đổi',
      explain: [
        'Có 5 nguyên âm a, e, i, o, u — luôn đọc rõ ràng và không đổi dù đứng ở đâu: a = "a", e = "ê", i = "i", o = "ô", u = "u". '
          + 'Không đọc lướt thành "ơ" như tiếng Anh.',
        'Mỗi thẻ gồm chữ cái, tên của chữ và một từ ví dụ. Bấm thẻ để nghe tên chữ rồi đến từ ví dụ.'
      ],
      examples: ABC.map(([label, name, w, vi, note]) => ({ label, t: name, sub: w, vi, note, say: `${name}. ${w}`, mic: w })),
      tip: 'Hai cụm chữ ghép cần nhớ: ch đọc như "ch" tiếng Việt (mucho, noche); ll đọc như y (xem phần ll/y). '
        + 'b và v đọc giống hệt nhau, như "b": vino và bueno cùng phụ âm đầu.'
    },
    {
      id: 'r', icon: '🌀', title: 'R đơn và RR rung',
      summary: 'pero (nhưng) khác perro (con chó)',
      explain: [
        'r đơn ở giữa từ: đầu lưỡi búng nhanh vào lợi trên MỘT lần, gần giống "đ" đọc rất nhanh: pero, caro, hora.',
        'rr, và r ở đầu từ hoặc sau n, l, s: đầu lưỡi rung liên tục nhiều lần "rrr": perro, carro, rojo, Roma, Enrique.'
      ],
      pairs: [
        { w: [{ t: 'pero', vi: 'nhưng' }, { t: 'perro', vi: 'con chó' }], note: 'búng 1 lần — rung nhiều lần' },
        { w: [{ t: 'caro', vi: 'đắt' }, { t: 'carro', vi: 'xe đẩy' }], note: 'r — rr' },
        { w: [{ t: 'cero', vi: 'số không' }, { t: 'cerro', vi: 'ngọn đồi' }], note: 'r — rr' }
      ],
      examples: [
        { t: 'hora', vi: 'giờ' }, { t: 'para', vi: 'để, cho' }, { t: 'rojo', vi: 'màu đỏ' },
        { t: 'Roma', vi: 'thành Rome' }, { t: 'guitarra', vi: 'đàn ghi-ta' }, { t: 'arroz', vi: 'cơm, gạo' }
      ],
      tip: 'Chưa rung được rr cũng đừng lo, rất nhiều người phải tập vài tuần. Cách tập: nói "đờ-đờ-đờ" thật nhanh, '
        + 'thả lỏng lưỡi và thổi hơi mạnh hơn cho tới khi đầu lưỡi tự rung. Trong lúc chờ, hãy cố gắng búng rõ hơn để vẫn phân biệt được pero/perro.'
    },
    {
      id: 'jg', icon: '🔥', title: 'J và G',
      summary: 'j luôn là "kh"; g trước e, i cũng là "kh"',
      explain: [
        'j luôn đọc như "kh" tiếng Việt (có khi mạnh hơn, khàn hơn): jamón, joven, José, hijo.',
        'g trước a, o, u đọc như "g" tiếng Việt: gato, gol, gusta. g trước e, i thì đọc "kh" giống j: gente, girar.',
        'Muốn có âm "g" trước e, i thì viết gue, gui (u câm): guerra, guitarra. Nếu u có hai chấm (ü) thì đọc u: pingüino.'
      ],
      groups: [
        { label: 'Đọc "kh"', items: [
          { t: 'jamón', vi: 'thịt nguội' }, { t: 'hijo', vi: 'con trai' }, { t: 'gente', vi: 'mọi người' }, { t: 'girar', vi: 'quay' }] },
        { label: 'Đọc "g"', items: [
          { t: 'gato', vi: 'con mèo' }, { t: 'amigo', vi: 'bạn' }, { t: 'guerra', vi: 'chiến tranh' }, { t: 'guitarra', vi: 'đàn ghi-ta' }] }
      ],
      pairs: [
        { w: [{ t: 'gota', vi: 'giọt' }, { t: 'jota', vi: 'chữ J' }], note: 'g — j' },
        { w: [{ t: 'higo', vi: 'quả sung' }, { t: 'hijo', vi: 'con trai' }], note: 'g — j' }
      ],
      tip: 'Người Việt có sẵn âm "kh" nên đọc j rất dễ — chỉ cần nhớ đừng đọc j kiểu tiếng Anh ("giây") hay tiếng Pháp.'
    },
    {
      id: 'cz', icon: '🦷', title: 'C, Z và S',
      summary: 'Giọng Tây Ban Nha: ce, ci, z đọc như "th" tiếng Anh',
      explain: [
        'c trước a, o, u đọc "c": casa, cosa, cuna. qu (trước e, i) cũng đọc "c": queso, quiero.',
        'Ở Tây Ban Nha, c trước e, i và chữ z đọc như "th" trong tiếng Anh "think" — đầu lưỡi giữa hai hàm răng: cena, cine, zapato, azul.',
        's luôn đọc như "x" tiếng Việt, không bao giờ đọc như "z": sol, mesa, casa.'
      ],
      pairs: [
        { w: [{ t: 'casa', vi: 'ngôi nhà' }, { t: 'caza', vi: 'săn bắn' }], note: 's — z' },
        { w: [{ t: 'siento', vi: 'tôi cảm thấy' }, { t: 'ciento', vi: 'một trăm' }], note: 's — c' },
        { w: [{ t: 'coser', vi: 'khâu' }, { t: 'cocer', vi: 'nấu' }], note: 's — c' }
      ],
      examples: [
        { t: 'cena', vi: 'bữa tối' }, { t: 'cine', vi: 'rạp phim' }, { t: 'zapato', vi: 'giày' },
        { t: 'azul', vi: 'xanh dương' }, { t: 'queso', vi: 'phô mai' }, { t: 'cerveza', vi: 'bia' }
      ],
      tip: 'Ở Mỹ Latinh (Mexico, Colombia…) c/z đọc giống s — cách đó cũng hoàn toàn đúng, ai cũng hiểu. '
        + 'Chỉ cần chọn một giọng và giữ nhất quán.'
    },
    {
      id: 'lly', icon: '🐔', title: 'LL và Y',
      summary: 'Đọc như "gi" (miền Bắc) hoặc "d" nhẹ',
      explain: [
        'll và y (trước nguyên âm) ngày nay đọc giống nhau, gần "gi" tiếng Việt: llamar, calle, pollo, yo, playa.',
        'y đứng một mình (nghĩa là "và") hoặc ở cuối từ đọc là "i": y, hoy, muy, rey.'
      ],
      examples: [
        { t: 'llamar', vi: 'gọi' }, { t: 'calle', vi: 'đường phố' }, { t: 'pollo', vi: 'thịt gà' },
        { t: 'yo', vi: 'tôi' }, { t: 'playa', vi: 'bãi biển' }, { t: 'muy', vi: 'rất' }
      ],
      pairs: [{ w: [{ t: 'pollo', vi: 'thịt gà' }, { t: 'polo', vi: 'cực trái đất' }], note: 'll — l' }],
      tip: 'Đừng đọc ll thành "l" như mặt chữ. Calle đọc "ca-giê", không phải "ca-lê".'
    },
    {
      id: 'n', icon: '〰️', title: 'Ñ',
      summary: 'Chính là "nh" tiếng Việt',
      explain: ['ñ đọc y hệt "nh" trong tiếng Việt: España ("ét-pa-nha"), niño ("ni-nhô"), mañana ("ma-nha-na").'],
      examples: [
        { t: 'España', vi: 'Tây Ban Nha' }, { t: 'niño', vi: 'đứa trẻ' }, { t: 'mañana', vi: 'ngày mai, buổi sáng' },
        { t: 'año', vi: 'năm' }, { t: 'señor', vi: 'ông' }, { t: 'pequeño', vi: 'nhỏ' }
      ],
      pairs: [
        { w: [{ t: 'cana', vi: 'tóc bạc' }, { t: 'caña', vi: 'cây mía' }], note: 'n — ñ' },
        { w: [{ t: 'una', vi: 'một' }, { t: 'uña', vi: 'móng tay' }], note: 'n — ñ' }
      ],
      tip: 'Đây là lợi thế của người Việt: người Anh, Mỹ phải tập âm này, còn bạn đã có sẵn. Chỉ cần đừng quên dấu ~ khi viết, vì n và ñ là hai từ khác nhau.'
    },
    {
      id: 'h', icon: '🤫', title: 'H câm',
      summary: 'Chữ h không bao giờ được đọc',
      explain: ['h luôn câm: hola đọc "ô-la", hora đọc "ô-ra", ahora đọc "a-ô-ra". Chỉ cụm ch mới có âm ("ch").'],
      examples: [
        { t: 'hola', vi: 'xin chào' }, { t: 'hotel', vi: 'khách sạn' }, { t: 'hablar', vi: 'nói' },
        { t: 'hermano', vi: 'anh em trai' }, { t: 'ahora', vi: 'bây giờ' }, { t: 'mucho', vi: 'nhiều' }
      ],
      tip: 'Người Việt hay đọc h thành "h" như tiếng Việt: "hô-la". Nhớ: âm "h/kh" trong tiếng Tây Ban Nha được viết bằng chữ j, không phải h.'
    },
    {
      id: 'stress', icon: '📢', title: 'Trọng âm và dấu',
      summary: 'Ba quy tắc nhấn và dấu sắc phân biệt nghĩa',
      explain: [
        'Mỗi từ có một âm tiết nhấn (đọc to và dài hơn). Quy tắc rất đều:',
        '① Từ tận cùng bằng nguyên âm, n hoặc s → nhấn âm tiết áp chót: CA-sa, HA-blan, za-PA-tos.',
        '② Tận cùng bằng phụ âm khác (trừ n, s) → nhấn âm tiết cuối: ha-BLAR, ciu-DAD, es-pa-ÑOL.',
        '③ Từ không theo hai quy tắc trên thì có dấu sắc ( ´ ) đánh dấu chỗ nhấn: ca-FÉ, ÁR-bol, te-LÉ-fo-no, can-CIÓN.',
        'Dấu sắc còn phân biệt nghĩa: papa (khoai tây) – papá (bố), esta (này) – está (đang ở), hablo (tôi nói) – habló (anh ấy đã nói).'
      ],
      examples: [
        { t: 'casa', sub: 'CA·sa', vi: 'nhà' }, { t: 'zapatos', sub: 'za·PA·tos', vi: 'đôi giày' },
        { t: 'hablar', sub: 'ha·BLAR', vi: 'nói' }, { t: 'ciudad', sub: 'ciu·DAD', vi: 'thành phố' },
        { t: 'café', sub: 'ca·FÉ', vi: 'cà phê' }, { t: 'teléfono', sub: 'te·LÉ·fo·no', vi: 'điện thoại' }
      ],
      pairs: [
        { w: [{ t: 'papa', sub: 'PA·pa', vi: 'khoai tây' }, { t: 'papá', sub: 'pa·PÁ', vi: 'bố' }], note: 'đổi trọng âm, đổi nghĩa' },
        { w: [{ t: 'hablo', sub: 'HA·blo', vi: 'tôi nói' }, { t: 'habló', sub: 'ha·BLÓ', vi: 'anh ấy đã nói' }], note: 'hiện tại — quá khứ' },
        { w: [{ t: 'término', sub: 'TÉR·mi·no', vi: 'thuật ngữ' }, { t: 'termino', sub: 'ter·MI·no', vi: 'tôi kết thúc' }, { t: 'terminó', sub: 'ter·mi·NÓ', vi: 'đã kết thúc' }], note: 'ba nghĩa, ba trọng âm' }
      ],
      tip: 'Dấu sắc tiếng Tây Ban Nha KHÔNG phải thanh sắc tiếng Việt — nó chỉ cho biết âm tiết nào đọc mạnh hơn, không làm giọng đi lên.'
    },
    {
      id: 'final', icon: '🎯', title: 'Âm cuối -s (và -l, -r, -d)',
      summary: 'Bỏ -s là mất số nhiều và mất ngôi "tú"',
      explain: [
        'Tiếng Việt không có âm cuối s nên người Việt hay bỏ nó. Nhưng trong tiếng Tây Ban Nha -s mang rất nhiều nghĩa: '
          + 'số nhiều (casa → casas), ngôi "bạn" của động từ (habla → hablas).',
        'Tương tự, đọc rõ -l, -r ở cuối từ: hotel, comer, español. -d cuối từ đọc rất nhẹ: ciudad, Madrid.'
      ],
      pairs: [
        { w: [{ t: 'casa', vi: 'ngôi nhà' }, { t: 'casas', vi: 'những ngôi nhà' }], note: 'số ít — số nhiều' },
        { w: [{ t: 'habla', vi: 'anh ấy nói' }, { t: 'hablas', vi: 'bạn nói' }], note: 'él — tú' },
        { w: [{ t: 'come', vi: 'anh ấy ăn' }, { t: 'comes', vi: 'bạn ăn' }], note: 'él — tú' }
      ],
      examples: [
        { t: 'dos', vi: 'hai' }, { t: 'tres', vi: 'ba' }, { t: 'más', vi: 'hơn' },
        { t: 'adiós', vi: 'tạm biệt' }, { t: 'hotel', vi: 'khách sạn' }, { t: 'comer', vi: 'ăn' }
      ],
      tip: 'Kéo dài âm s cuối như tiếng rắn "xxx" lúc mới tập: "tre-xxx". Khi từ sau bắt đầu bằng nguyên âm, nối s sang: "los amigos" → "lô-xa-mi-gốt".'
    }
  ],
  drills: [
    {
      id: 'pairs', icon: '👂', title: 'Nghe và chọn từ', round: 20,
      desc: 'Máy đọc một từ, bạn chọn đúng từ vừa nghe: r/rr, g/j, s/z, n/ñ, trọng âm và -s cuối.',
      pool: SETS.map(g => ({ options: g.map(x => x[0]), show: g.map(x => `${x[0]} — ${x[1]}`).join(' · ') }))
    },
    {
      id: 'abc', icon: '🔤', title: 'Nghe và chọn chữ cái', round: 12,
      desc: 'Máy đọc tên một chữ cái, bạn chọn chữ đúng.',
      pool: [
        ['G', 'J', 'H'], ['J', 'G', 'H'], ['H', 'J', 'A'], ['R', 'L', 'E'], ['L', 'R', 'E'], ['V', 'B', 'U'],
        ['B', 'V', 'P'], ['Z', 'S', 'C'], ['C', 'Z', 'S'], ['S', 'Z', 'C'], ['Ñ', 'N', 'M'], ['Q', 'K', 'U'],
        ['Y', 'I', 'LL'], ['X', 'S', 'Z'], ['E', 'I', 'A'], ['I', 'E', 'Y']
      ].map(([right, ...wrongs]) => {
        const name = right === 'LL' ? 'elle' : ABC.find(a => a[0] === right)[1];
        return { say: name, options: [right, ...wrongs], answer: 0, show: `${right} — đọc là "${name}"` };
      })
    }
  ]
};
