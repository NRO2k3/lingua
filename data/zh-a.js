// Tiếng Trung (Quan thoại, chữ giản thể) — Level HSK1 & HSK2
// Quy ước pinyin: ghi biến điệu của 不 và 一 theo cách đọc thực tế (不是 bú shì, 一个 yí gè, 一杯 yì bēi);
// 不 trong câu hỏi chính phản đọc nhẹ (hē bu hē). Biến điệu thanh 3 + thanh 3 vẫn ghi thanh gốc (nǐ hǎo).
addLevels('zh', [
  // ===================================================================
  // HSK1
  // ===================================================================
  {
    id: 'HSK1',
    title: 'Sơ cấp 1',
    desc: 'Tương đương A1 (HSK 1): chào hỏi, giới thiệu bản thân và gia đình, đếm số, nói giờ, kể thói quen hằng ngày và gọi đồ ăn bằng những câu ngắn.',
    units: [
      // ───────────────────────── HSK1-1 ─────────────────────────
      {
        id: 'zh-hsk1-1',
        icon: '👋',
        title: 'Chào hỏi & giới thiệu',
        goal: 'Chào hỏi, nói tên mình, hỏi tên người khác, hỏi "có phải…không" với 吗 và hỏi lại với 呢.',
        vocab: [
          { w: '你好', ipa: 'nǐ hǎo', hv: 'nhĩ hảo', vi: 'xin chào', ex: '你好！我叫王明。', exPy: 'Nǐ hǎo! Wǒ jiào Wáng Míng.', exVi: 'Xin chào! Tôi tên là Vương Minh.' },
          { w: '是', ipa: 'shì', hv: 'thị', vi: 'là', ex: '她是李华。', exPy: 'Tā shì Lǐ Huá.', exVi: 'Cô ấy là Lý Hoa.' },
          { w: '叫', ipa: 'jiào', hv: 'khiếu', vi: 'gọi; tên là', ex: '我叫阮兰。', exPy: 'Wǒ jiào Ruǎn Lán.', exVi: 'Tôi tên là Nguyễn Lan.' },
          { w: '什么', ipa: 'shénme', hv: 'thập ma', vi: 'gì, cái gì', ex: '你叫什么名字？', exPy: 'Nǐ jiào shénme míngzi?', exVi: 'Bạn tên là gì?' },
          { w: '名字', ipa: 'míngzi', hv: 'danh tự', vi: 'tên', ex: '他叫什么名字？', exPy: 'Tā jiào shénme míngzi?', exVi: 'Anh ấy tên là gì?' },
          { w: '老师', ipa: 'lǎoshī', hv: 'lão sư', vi: 'giáo viên, thầy / cô', ex: '王老师好！', exPy: 'Wáng lǎoshī hǎo!', exVi: 'Em chào thầy Vương ạ!' },
          { w: '学生', ipa: 'xuésheng', hv: 'học sinh', vi: 'học sinh, sinh viên', ex: '我们都是学生。', exPy: 'Wǒmen dōu shì xuésheng.', exVi: 'Chúng tôi đều là sinh viên.' },
          { w: '谢谢', ipa: 'xièxie', hv: 'tạ tạ', vi: 'cảm ơn', ex: '我很好，谢谢！', exPy: 'Wǒ hěn hǎo, xièxie!', exVi: 'Tôi khoẻ, cảm ơn!' },
          { w: '再见', ipa: 'zàijiàn', hv: 'tái kiến', vi: 'tạm biệt, hẹn gặp lại', ex: '老师，再见！', exPy: 'Lǎoshī, zàijiàn!', exVi: 'Em chào cô ạ! (khi ra về)' },
          { w: '认识', ipa: 'rènshi', hv: 'nhận thức', vi: 'quen biết, làm quen', ex: '认识你很高兴。', exPy: 'Rènshi nǐ hěn gāoxìng.', exVi: 'Rất vui được làm quen với bạn.' }
        ],
        grammar: {
          title: 'Câu với 是, nói tên với 叫, câu hỏi với 吗 và 呢',
          explain: [
            'Đại từ nhân xưng: 我 wǒ (tôi), 你 nǐ (bạn), 您 nín (ngài, ông/bà – lịch sự), 他 tā (anh ấy), 她 tā (cô ấy). Thêm 们 men để chỉ số nhiều: 我们 (chúng tôi), 你们 (các bạn), 他们 (họ). Động từ tiếng Trung không chia theo ngôi, nên 我是, 你是, 他是 đều dùng chung 是 shì (thị = là).',
            'Nói tên: 我叫 + tên (叫 khiếu = gọi). Hỏi tên: 你叫什么名字？ (什么 = gì, 名字 = danh tự, tên).',
            'Câu hỏi có/không: giữ nguyên câu trần thuật, thêm 吗 ma vào cuối: 你是老师。→ 你是老师吗？ Phủ định: đặt 不 bù ngay trước động từ: 我不是老师。 不 đứng trước thanh 4 đọc thành bú: 不是 bú shì.',
            '呢 ne dùng để hỏi lại "còn … thì sao?" sau khi đã nói về mình: 我很好，你呢？ (Mình khoẻ, còn bạn?).'
          ],
          table: [
            ['Mẫu câu', 'Ví dụ', 'Nghĩa'],
            ['A 是 B', '我是学生。', 'Tôi là học sinh.'],
            ['A 不是 B', '他不是老师。', 'Anh ấy không phải giáo viên.'],
            ['Câu + 吗？', '她是老师吗？', 'Cô ấy là giáo viên à?'],
            ['… + 呢？', '我叫李华，你呢？', 'Mình tên Lý Hoa, còn bạn?']
          ],
          examples: [
            { t: '你好！我叫王明。', py: 'Nǐ hǎo! Wǒ jiào Wáng Míng.', vi: 'Xin chào! Tôi tên là Vương Minh.' },
            { t: '你是学生吗？', py: 'Nǐ shì xuésheng ma?', vi: 'Bạn là học sinh phải không?' },
            { t: '我不是老师，我是学生。', py: 'Wǒ bú shì lǎoshī, wǒ shì xuésheng.', vi: 'Tôi không phải giáo viên, tôi là học sinh.' },
            { t: '我很好，你呢？', py: 'Wǒ hěn hǎo, nǐ ne?', vi: 'Tôi khoẻ, còn bạn?' }
          ],
          tip: 'Câu đã có từ để hỏi như 什么 thì KHÔNG thêm 吗: ✗ 你叫什么名字吗？ Trong khoá học này, pinyin ghi theo cách đọc thực tế của 不 và 一 (不是 bú shì, 一个 yí gè), còn 你好 tuy đọc gần như "ní hǎo" vẫn ghi thanh gốc nǐ hǎo như sách giáo khoa.'
        },
        dialogue: [
          { s: '王明', t: '你好！', py: 'Nǐ hǎo!', vi: 'Xin chào!' },
          { s: 'Lan', t: '你好！', py: 'Nǐ hǎo!', vi: 'Chào bạn!' },
          { s: '王明', t: '我叫王明。你叫什么名字？', py: 'Wǒ jiào Wáng Míng. Nǐ jiào shénme míngzi?', vi: 'Mình tên là Vương Minh. Bạn tên là gì?' },
          { s: 'Lan', t: '我叫阮兰。你是老师吗？', py: 'Wǒ jiào Ruǎn Lán. Nǐ shì lǎoshī ma?', vi: 'Mình tên là Nguyễn Lan. Bạn là giáo viên à?' },
          { s: '王明', t: '不是，我是学生。你呢？', py: 'Bú shì, wǒ shì xuésheng. Nǐ ne?', vi: 'Không phải, mình là sinh viên. Còn bạn?' },
          { s: 'Lan', t: '我也是学生。认识你很高兴！', py: 'Wǒ yě shì xuésheng. Rènshi nǐ hěn gāoxìng!', vi: 'Mình cũng là sinh viên. Rất vui được làm quen với bạn!' },
          { s: '王明', t: '我也很高兴。再见！', py: 'Wǒ yě hěn gāoxìng. Zàijiàn!', vi: 'Mình cũng rất vui. Tạm biệt nhé!' },
          { s: 'Lan', t: '再见！', py: 'Zàijiàn!', vi: 'Tạm biệt!' }
        ],
        exercises: [
          { type: 'mc', q: '你是学生___？（Bạn là học sinh à?）', options: ['吗', '呢', '什么'], answer: 0, explain: 'Câu hỏi có/không: thêm 吗 vào cuối câu trần thuật.' },
          { type: 'mc', q: '我很好，你___？（Mình khoẻ, còn bạn?）', options: ['吗', '呢', '是'], answer: 1, explain: '呢 dùng để hỏi lại "còn bạn thì sao?".' },
          { type: 'fill', q: '我___王明。（Tôi tên là Vương Minh.）', answer: ['叫', 'jiào', 'jiao'], hint: 'jiào – gọi, tên là', explain: '叫 + tên = tên là…' },
          { type: 'order', vi: 'Bạn tên là gì?', words: ['什么', '你', '名字？', '叫'], answer: '你 叫 什么 名字？' },
          { type: 'mc', q: 'Câu nào nghĩa là "Tôi không phải giáo viên"?', options: ['我是不老师。', '我不是老师。', '我不老师是。'], answer: 1, explain: '不 đứng ngay trước động từ 是: 不是.' },
          { type: 'fill', q: '他___老师吗？（Anh ấy là giáo viên à?）', answer: ['是', 'shì', 'shi'], hint: 'shì – là', explain: '是 (thị) = là.' },
          { type: 'mc', q: '再见 nghĩa là gì?', options: ['Xin chào', 'Cảm ơn', 'Tạm biệt'], answer: 2, explain: '再见 zàijiàn (tái kiến) = gặp lại, tức là tạm biệt.' },
          { type: 'order', vi: 'Bạn là học sinh phải không?', words: ['学生', '你', '吗？', '是'], answer: '你 是 学生 吗？' }
        ]
      },

      // ───────────────────────── HSK1-2 ─────────────────────────
      {
        id: 'zh-hsk1-2',
        icon: '🔢',
        title: 'Số đếm, tuổi & quốc tịch',
        goal: 'Đếm từ 0 đến 99, hỏi và nói tuổi, hỏi ai đó là người nước nào.',
        vocab: [
          { w: '十', ipa: 'shí', hv: 'thập', vi: 'mười', ex: '我妹妹十岁。', exPy: 'Wǒ mèimei shí suì.', exVi: 'Em gái tôi mười tuổi.' },
          { w: '几', ipa: 'jǐ', hv: 'kỷ', vi: 'mấy (hỏi số nhỏ)', ex: '你儿子几岁？', exPy: 'Nǐ érzi jǐ suì?', exVi: 'Con trai chị mấy tuổi?' },
          { w: '岁', ipa: 'suì', hv: 'tuế', vi: 'tuổi', ex: '我今年二十岁。', exPy: 'Wǒ jīnnián èrshí suì.', exVi: 'Năm nay tôi hai mươi tuổi.' },
          { w: '多大', ipa: 'duō dà', hv: 'đa đại', vi: 'bao nhiêu tuổi (hỏi người lớn, bạn bè)', ex: '你今年多大？', exPy: 'Nǐ jīnnián duō dà?', exVi: 'Năm nay bạn bao nhiêu tuổi?' },
          { w: '今年', ipa: 'jīnnián', hv: 'kim niên', vi: 'năm nay', ex: '王老师今年四十五岁。', exPy: 'Wáng lǎoshī jīnnián sìshíwǔ suì.', exVi: 'Năm nay thầy Vương bốn mươi lăm tuổi.' },
          { w: '人', ipa: 'rén', hv: 'nhân', vi: 'người', ex: '我是越南人。', exPy: 'Wǒ shì Yuènánrén.', exVi: 'Tôi là người Việt Nam.' },
          { w: '哪', ipa: 'nǎ', hv: 'na', vi: 'nào', ex: '你是哪国人？', exPy: 'Nǐ shì nǎ guó rén?', exVi: 'Bạn là người nước nào?' },
          { w: '中国', ipa: 'Zhōngguó', hv: 'Trung Quốc', vi: 'Trung Quốc', ex: '李华是中国人。', exPy: 'Lǐ Huá shì Zhōngguórén.', exVi: 'Lý Hoa là người Trung Quốc.' },
          { w: '越南', ipa: 'Yuènán', hv: 'Việt Nam', vi: 'Việt Nam', ex: '阮兰是越南人。', exPy: 'Ruǎn Lán shì Yuènánrén.', exVi: 'Nguyễn Lan là người Việt Nam.' },
          { w: '美国', ipa: 'Měiguó', hv: 'Mỹ Quốc', vi: 'nước Mỹ', ex: '他是美国人吗？', exPy: 'Tā shì Měiguórén ma?', exVi: 'Anh ấy là người Mỹ à?' }
        ],
        grammar: {
          title: 'Số đếm 0–99, hỏi tuổi với 几 / 多大, hỏi quốc tịch với 哪国人',
          explain: [
            'Số 0–10: 零 líng, 一 yī, 二 èr, 三 sān, 四 sì, 五 wǔ, 六 liù, 七 qī, 八 bā, 九 jiǔ, 十 shí. Âm Hán Việt rất gần: (linh), nhất, nhị, tam, tứ, ngũ, lục, thất, bát, cửu, thập.',
            'Số 11–99 ghép giống hệt tiếng Việt: 十一 (mười một), 二十 (hai mươi), 二十五 (hai mươi lăm), 九十九 (chín mươi chín). Không có chữ "linh, lẻ, mốt, lăm" biến đổi như tiếng Việt: 35 = 三十五, 21 = 二十一.',
            'Nói tuổi: Chủ ngữ + (今年) + số + 岁, KHÔNG cần 是: 我二十岁. Hỏi trẻ em (khoảng dưới 10 tuổi) dùng 几岁？; hỏi người cùng lứa, người lớn dùng 多大？; hỏi người cao tuổi lịch sự dùng 您多大年纪？ (niên kỷ).',
            'Quốc tịch = tên nước + 人: 中国人, 越南人, 美国人. Hỏi: 你是哪国人？ (哪 nǎ = nào, 国 guó = quốc, nước).'
          ],
          table: [
            ['Số', 'Chữ Hán', 'Pinyin'],
            ['0–5', '零 一 二 三 四 五', 'líng yī èr sān sì wǔ'],
            ['6–10', '六 七 八 九 十', 'liù qī bā jiǔ shí'],
            ['11, 12, 19', '十一 十二 十九', "shíyī shí'èr shíjiǔ"],
            ['20, 21, 99', '二十 二十一 九十九', 'èrshí èrshíyī jiǔshíjiǔ']
          ],
          examples: [
            { t: '我今年二十一岁。', py: 'Wǒ jīnnián èrshíyī suì.', vi: 'Năm nay tôi hai mươi mốt tuổi.' },
            { t: '你女儿几岁？', py: "Nǐ nǚ'ér jǐ suì?", vi: 'Con gái anh mấy tuổi?' },
            { t: '你是哪国人？', py: 'Nǐ shì nǎ guó rén?', vi: 'Bạn là người nước nào?' },
            { t: '我不是中国人，我是越南人。', py: 'Wǒ bú shì Zhōngguórén, wǒ shì Yuènánrén.', vi: 'Tôi không phải người Trung Quốc, tôi là người Việt Nam.' }
          ],
          tip: 'Người Việt hay nói ✗ 我是二十岁 vì dịch từng chữ "tôi là…". Khi nói tuổi, bỏ 是: 我二十岁. Ngoài ra, số 2 khi đếm là 二 èr, nhưng đứng trước lượng từ (hai cái, hai người) thì dùng 两 liǎng — sẽ học ở bài sau.'
        },
        dialogue: [
          { s: '李华', t: '你好！你是哪国人？', py: 'Nǐ hǎo! Nǐ shì nǎ guó rén?', vi: 'Chào bạn! Bạn là người nước nào?' },
          { s: 'Lan', t: '我是越南人。你呢？', py: 'Wǒ shì Yuènánrén. Nǐ ne?', vi: 'Mình là người Việt Nam. Còn bạn?' },
          { s: '李华', t: '我是中国人。你今年多大？', py: 'Wǒ shì Zhōngguórén. Nǐ jīnnián duō dà?', vi: 'Mình là người Trung Quốc. Năm nay bạn bao nhiêu tuổi?' },
          { s: 'Lan', t: '我今年二十一岁。你呢？', py: 'Wǒ jīnnián èrshíyī suì. Nǐ ne?', vi: 'Năm nay mình hai mươi mốt tuổi. Còn bạn?' },
          { s: '李华', t: '我二十三岁。他是谁？', py: 'Wǒ èrshísān suì. Tā shì shéi?', vi: 'Mình hai mươi ba tuổi. Anh kia là ai thế?' },
          { s: 'Lan', t: '他叫大卫，是美国人。', py: 'Tā jiào Dàwèi, shì Měiguórén.', vi: 'Anh ấy tên là David, là người Mỹ.' },
          { s: '李华', t: '他多大？', py: 'Tā duō dà?', vi: 'Anh ấy bao nhiêu tuổi?' },
          { s: 'Lan', t: '他三十岁。', py: 'Tā sānshí suì.', vi: 'Anh ấy ba mươi tuổi.' }
        ],
        exercises: [
          { type: 'mc', q: 'Số 25 viết bằng chữ Hán là:', options: ['二五', '二十五', '五十二'], answer: 1, explain: '20 = 二十, thêm 五 → 二十五, ghép giống tiếng Việt.' },
          { type: 'mc', q: 'Hỏi tuổi một bé khoảng 5 tuổi, nên dùng câu nào?', options: ['你几岁？', '你多大年纪？', '你是哪国人？'], answer: 0, explain: '几岁 dùng để hỏi tuổi trẻ nhỏ; 多大年纪 dùng cho người cao tuổi.' },
          { type: 'fill', q: '你是___国人？（Bạn là người nước nào?）', answer: ['哪', 'nǎ', 'na'], hint: 'nǎ – nào', explain: '哪国人 = người nước nào.' },
          { type: 'order', vi: 'Tôi là người Việt Nam.', words: ['越南人', '是', '我'], answer: '我 是 越南人' },
          { type: 'mc', q: 'Câu nào đúng với nghĩa "Tôi 20 tuổi"?', options: ['我是二十岁。', '我二十岁。', '我岁二十。'], answer: 1, explain: 'Nói tuổi không cần 是: Chủ ngữ + số + 岁.' },
          { type: 'fill', q: '我今年十八___。（Năm nay tôi 18 tuổi.）', answer: ['岁', 'suì', 'sui'], hint: 'suì – tuổi', explain: '岁 (tuế) = tuổi, đứng sau con số.' },
          { type: 'mc', q: '九十 là số mấy?', options: ['19', '90', '9'], answer: 1, explain: '九十 = chín mươi; còn 十九 mới là 19.' },
          { type: 'order', vi: 'Năm nay bạn bao nhiêu tuổi?', words: ['多大？', '今年', '你'], answer: '你 今年 多大？' }
        ]
      },

      // ───────────────────────── HSK1-3 ─────────────────────────
      {
        id: 'zh-hsk1-3',
        icon: '👪',
        title: 'Gia đình',
        goal: 'Giới thiệu các thành viên trong gia đình, nói mình có hay không có anh chị em và hỏi nhà ai đó có mấy người.',
        vocab: [
          { w: '爸爸', ipa: 'bàba', hv: '', vi: 'bố, ba', ex: '我爸爸是医生。', exPy: 'Wǒ bàba shì yīshēng.', exVi: 'Bố tôi là bác sĩ.' },
          { w: '妈妈', ipa: 'māma', hv: '', vi: 'mẹ, má', ex: '我妈妈四十八岁。', exPy: 'Wǒ māma sìshíbā suì.', exVi: 'Mẹ tôi bốn mươi tám tuổi.' },
          { w: '哥哥', ipa: 'gēge', hv: 'ca ca', vi: 'anh trai', ex: '我有一个哥哥。', exPy: 'Wǒ yǒu yí gè gēge.', exVi: 'Tôi có một anh trai.' },
          { w: '姐姐', ipa: 'jiějie', hv: '', vi: 'chị gái', ex: '你姐姐多大？', exPy: 'Nǐ jiějie duō dà?', exVi: 'Chị gái bạn bao nhiêu tuổi?' },
          { w: '弟弟', ipa: 'dìdi', hv: 'đệ đệ', vi: 'em trai', ex: '我没有弟弟。', exPy: 'Wǒ méiyǒu dìdi.', exVi: 'Tôi không có em trai.' },
          { w: '妹妹', ipa: 'mèimei', hv: 'muội muội', vi: 'em gái', ex: '我妹妹的名字叫小月。', exPy: 'Wǒ mèimei de míngzi jiào Xiǎoyuè.', exVi: 'Em gái tôi tên là Tiểu Nguyệt.' },
          { w: '家', ipa: 'jiā', hv: 'gia', vi: 'nhà; gia đình', ex: '我爱我的家。', exPy: 'Wǒ ài wǒ de jiā.', exVi: 'Tôi yêu gia đình mình.' },
          { w: '有', ipa: 'yǒu', hv: 'hữu', vi: 'có', ex: '你有哥哥吗？', exPy: 'Nǐ yǒu gēge ma?', exVi: 'Bạn có anh trai không?' },
          { w: '没有', ipa: 'méiyǒu', hv: 'một hữu', vi: 'không có', ex: '他没有姐姐。', exPy: 'Tā méiyǒu jiějie.', exVi: 'Anh ấy không có chị gái.' },
          { w: '口', ipa: 'kǒu', hv: 'khẩu', vi: 'lượng từ đếm người trong nhà (nhân khẩu)', ex: '你家有几口人？', exPy: 'Nǐ jiā yǒu jǐ kǒu rén?', exVi: 'Nhà bạn có mấy người?' }
        ],
        grammar: {
          title: '的 chỉ sở hữu, 有 / 没有, hỏi 几口人',
          explain: [
            '的 de đặt giữa người sở hữu và vật được sở hữu, trật tự NGƯỢC tiếng Việt: 我的名字 = tên của tôi, 老师的书 = sách của thầy. Với người thân, bạn bè, nơi mình thuộc về thì thường bỏ 的: 我妈妈 (mẹ tôi), 我家 (nhà tôi).',
            '有 yǒu (hữu) = có. Phủ định của 有 LUÔN LUÔN là 没有 méiyǒu, không bao giờ dùng ✗ 不有. Câu hỏi: 你有…吗？ hoặc dạng 你有没有…？',
            'Hỏi gia đình có bao nhiêu người: 你家有几口人？ 口 (khẩu = miệng, như "nhân khẩu") là lượng từ đếm người trong nhà. Trả lời: 我家有四口人：爸爸、妈妈、哥哥和我。 (和 hé = và).',
            'Đếm người nói chung dùng lượng từ 个 gè: 一个哥哥, 两个妹妹. Số 2 đứng trước lượng từ phải đọc là 两 liǎng, không dùng 二.'
          ],
          table: [
            ['Mẫu', 'Ví dụ', 'Nghĩa'],
            ['A 的 B', '我的名字', 'tên của tôi'],
            ['A + người thân', '我妈妈', 'mẹ tôi'],
            ['有 / 没有', '我有哥哥。/ 我没有哥哥。', 'Tôi có / không có anh trai.'],
            ['几口人', '你家有几口人？', 'Nhà bạn có mấy người?']
          ],
          examples: [
            { t: '他是我的朋友。', py: 'Tā shì wǒ de péngyou.', vi: 'Anh ấy là bạn của tôi.' },
            { t: '我家有五口人。', py: 'Wǒ jiā yǒu wǔ kǒu rén.', vi: 'Nhà tôi có năm người.' },
            { t: '我有两个姐姐。', py: 'Wǒ yǒu liǎng gè jiějie.', vi: 'Tôi có hai chị gái.' },
            { t: '我没有弟弟，也没有妹妹。', py: 'Wǒ méiyǒu dìdi, yě méiyǒu mèimei.', vi: 'Tôi không có em trai, cũng không có em gái.' }
          ],
          tip: 'Lỗi phổ biến nhất: ✗ 我不有妹妹. Phải nói 我没有妹妹. Và "hai người" không nói ✗ 二个人 mà là 两个人 liǎng gè rén.'
        },
        dialogue: [
          { s: '王明', t: '阮兰，你家有几口人？', py: 'Ruǎn Lán, nǐ jiā yǒu jǐ kǒu rén?', vi: 'Lan ơi, nhà bạn có mấy người?' },
          { s: 'Lan', t: '我家有四口人：爸爸、妈妈、哥哥和我。', py: 'Wǒ jiā yǒu sì kǒu rén: bàba, māma, gēge hé wǒ.', vi: 'Nhà mình có bốn người: bố, mẹ, anh trai và mình.' },
          { s: '王明', t: '你有没有妹妹？', py: 'Nǐ yǒu méiyǒu mèimei?', vi: 'Bạn có em gái không?' },
          { s: 'Lan', t: '没有。你呢？', py: 'Méiyǒu. Nǐ ne?', vi: 'Không có. Còn bạn?' },
          { s: '王明', t: '我家有五口人。我有一个姐姐和一个弟弟。', py: 'Wǒ jiā yǒu wǔ kǒu rén. Wǒ yǒu yí gè jiějie hé yí gè dìdi.', vi: 'Nhà mình có năm người. Mình có một chị gái và một em trai.' },
          { s: 'Lan', t: '你姐姐是学生吗？', py: 'Nǐ jiějie shì xuésheng ma?', vi: 'Chị gái bạn là sinh viên à?' },
          { s: '王明', t: '不是，她是医生。我弟弟是学生。', py: 'Bú shì, tā shì yīshēng. Wǒ dìdi shì xuésheng.', vi: 'Không, chị ấy là bác sĩ. Em trai mình là học sinh.' }
        ],
        exercises: [
          { type: 'mc', q: '"Tôi không có em trai." Chọn câu đúng:', options: ['我不有弟弟。', '我没有弟弟。', '我有没弟弟。'], answer: 1, explain: 'Phủ định của 有 luôn là 没有.' },
          { type: 'fill', q: '你家有几___人？（Nhà bạn có mấy người?）', answer: ['口', 'kǒu', 'kou'], hint: 'kǒu – lượng từ đếm người trong nhà', explain: '几口人 là cách hỏi số người trong gia đình.' },
          { type: 'mc', q: '"Tên của bạn" là:', options: ['名字的你', '你的名字', '你名字的'], answer: 1, explain: 'Người sở hữu + 的 + vật được sở hữu.' },
          { type: 'order', vi: 'Nhà tôi có năm người.', words: ['五', '有', '我家', '口', '人'], answer: '我家 有 五 口 人' },
          { type: 'mc', q: '哥哥 là:', options: ['em trai', 'anh trai', 'chị gái'], answer: 1, explain: '哥哥 gēge (ca ca) = anh trai; 弟弟 = em trai; 姐姐 = chị gái.' },
          { type: 'fill', q: '我有___个妹妹。（Tôi có hai em gái.）', answer: ['两', 'liǎng', 'liang'], hint: 'liǎng – hai (đứng trước lượng từ)', explain: 'Trước lượng từ dùng 两, không dùng 二.' },
          { type: 'mc', q: 'Câu nào nghĩa là "Nhà bạn có mấy người?"', options: ['你家有几口人？', '你家有几个口？', '你家几人有？'], answer: 0, explain: 'Mẫu cố định: …有几口人？' },
          { type: 'order', vi: 'Bạn có anh trai không?', words: ['哥哥', '有', '你', '吗？'], answer: '你 有 哥哥 吗？' }
        ]
      },

      // ───────────────────────── HSK1-4 ─────────────────────────
      {
        id: 'zh-hsk1-4',
        icon: '🎨',
        title: 'Đồ vật & màu sắc',
        goal: 'Gọi tên đồ vật quanh mình, dùng đúng lượng từ, chỉ "cái này / cái kia / cái nào" và nói màu sắc.',
        vocab: [
          { w: '这', ipa: 'zhè', hv: 'giá', vi: 'này, đây', ex: '这是我的书。', exPy: 'Zhè shì wǒ de shū.', exVi: 'Đây là sách của tôi.' },
          { w: '那', ipa: 'nà', hv: 'na', vi: 'kia, đó', ex: '那是什么？', exPy: 'Nà shì shénme?', exVi: 'Kia là cái gì?' },
          { w: '个', ipa: 'gè', hv: 'cá', vi: 'cái, chiếc, người (lượng từ chung)', ex: '我有三个苹果。', exPy: 'Wǒ yǒu sān gè píngguǒ.', exVi: 'Tôi có ba quả táo.' },
          { w: '本', ipa: 'běn', hv: 'bản', vi: 'quyển, cuốn (lượng từ cho sách vở)', ex: '这本书很好。', exPy: 'Zhè běn shū hěn hǎo.', exVi: 'Quyển sách này rất hay.' },
          { w: '书', ipa: 'shū', hv: 'thư', vi: 'sách', ex: '我有两本书。', exPy: 'Wǒ yǒu liǎng běn shū.', exVi: 'Tôi có hai quyển sách.' },
          { w: '杯子', ipa: 'bēizi', hv: 'bôi tử', vi: 'cái cốc, cái ly', ex: '那个杯子是我的。', exPy: 'Nàge bēizi shì wǒ de.', exVi: 'Cái cốc kia là của tôi.' },
          { w: '衣服', ipa: 'yīfu', hv: 'y phục', vi: 'quần áo', ex: '这件衣服很漂亮。', exPy: 'Zhè jiàn yīfu hěn piàoliang.', exVi: 'Chiếc áo này rất đẹp.' },
          { w: '件', ipa: 'jiàn', hv: 'kiện', vi: 'chiếc (lượng từ cho áo, quần áo; việc)', ex: '你有几件衣服？', exPy: 'Nǐ yǒu jǐ jiàn yīfu?', exVi: 'Bạn có mấy bộ quần áo?' },
          { w: '红色', ipa: 'hóngsè', hv: 'hồng sắc', vi: 'màu đỏ', ex: '那件红色的衣服是我妈妈的。', exPy: 'Nà jiàn hóngsè de yīfu shì wǒ māma de.', exVi: 'Chiếc áo màu đỏ kia là của mẹ tôi.' },
          { w: '白色', ipa: 'báisè', hv: 'bạch sắc', vi: 'màu trắng', ex: '这个杯子是白色的。', exPy: 'Zhège bēizi shì báisè de.', exVi: 'Cái cốc này màu trắng.' }
        ],
        grammar: {
          title: 'Lượng từ (个, 本, 杯, 件) và đại từ chỉ định 这 / 那 / 哪',
          explain: [
            'Giống tiếng Việt, tiếng Trung cần lượng từ (cái, quyển, chiếc…) giữa số và danh từ: 三本书 = ba quyển sách. Không nói ✗ 三书.',
            'Lượng từ thông dụng: 个 gè (cái, người – dùng chung nhất), 本 běn (quyển: sách, vở), 杯 bēi (cốc, ly: 一杯水, 一杯茶), 件 jiàn (chiếc: áo, quần áo; việc: 一件事).',
            '这 zhè (này, đây), 那 nà (kia, đó), 哪 nǎ (nào). Đứng một mình làm chủ ngữ: 这是书. Khi đứng trước danh từ thì phải có lượng từ, và "này / kia" đứng TRƯỚC (ngược tiếng Việt): 这本书 (quyển sách này), 那件衣服 (chiếc áo kia), 哪个杯子？ (cái cốc nào?).',
            'Màu sắc: 红色 (đỏ), 白色 (trắng), 黑色 hēisè (đen), 蓝色 lánsè (xanh dương), 绿色 lǜsè (xanh lá), 黄色 huángsè (vàng). Hỏi màu: …是什么颜色？ (颜色 yánsè = màu). Màu đứng trước danh từ: 红色的衣服 hoặc gọn hơn 红衣服.'
          ],
          table: [
            ['Số / chỉ định + lượng từ + danh từ', 'Pinyin', 'Nghĩa'],
            ['一个人', 'yí gè rén', 'một người'],
            ['两本书', 'liǎng běn shū', 'hai quyển sách'],
            ['三杯茶', 'sān bēi chá', 'ba cốc trà'],
            ['这件衣服', 'zhè jiàn yīfu', 'chiếc áo này'],
            ['哪个杯子？', 'nǎge bēizi?', 'cái cốc nào?']
          ],
          examples: [
            { t: '这是什么？', py: 'Zhè shì shénme?', vi: 'Đây là cái gì?' },
            { t: '我有两本中文书。', py: 'Wǒ yǒu liǎng běn Zhōngwén shū.', vi: 'Tôi có hai quyển sách tiếng Trung.' },
            { t: '这杯茶是你的。', py: 'Zhè bēi chá shì nǐ de.', vi: 'Cốc trà này là của bạn.' },
            { t: '那件衣服是什么颜色？', py: 'Nà jiàn yīfu shì shénme yánsè?', vi: 'Chiếc áo kia màu gì?' },
            { t: '你的杯子是哪个？', py: 'Nǐ de bēizi shì nǎge?', vi: 'Cốc của bạn là cái nào?' }
          ],
          tip: 'Nếu quên lượng từ riêng, 个 là lựa chọn "an toàn" nhất, người bản ngữ vẫn hiểu. Chú ý 一 đổi thanh theo chữ sau: yí gè, yí jiàn (trước thanh 4), nhưng yì běn, yì bēi (trước thanh 1, 2, 3).'
        },
        dialogue: [
          { s: '李华', t: '阮兰，这是什么？', py: 'Ruǎn Lán, zhè shì shénme?', vi: 'Lan ơi, đây là cái gì thế?' },
          { s: 'Lan', t: '这是中文书。', py: 'Zhè shì Zhōngwén shū.', vi: 'Đây là sách tiếng Trung.' },
          { s: '李华', t: '这本书是你的吗？', py: 'Zhè běn shū shì nǐ de ma?', vi: 'Quyển sách này là của bạn à?' },
          { s: 'Lan', t: '不是，是王明的。那个白色的杯子是我的。', py: 'Bú shì, shì Wáng Míng de. Nàge báisè de bēizi shì wǒ de.', vi: 'Không phải, của Vương Minh. Cái cốc màu trắng kia mới là của mình.' },
          { s: '李华', t: '那件红色的衣服呢？', py: 'Nà jiàn hóngsè de yīfu ne?', vi: 'Còn chiếc áo màu đỏ kia?' },
          { s: 'Lan', t: '那件衣服也是我的。', py: 'Nà jiàn yīfu yě shì wǒ de.', vi: 'Chiếc áo đó cũng là của mình.' },
          { s: '李华', t: '很漂亮！你有几件红色的衣服？', py: 'Hěn piàoliang! Nǐ yǒu jǐ jiàn hóngsè de yīfu?', vi: 'Đẹp quá! Bạn có mấy chiếc áo màu đỏ?' },
          { s: 'Lan', t: '我有三件。', py: 'Wǒ yǒu sān jiàn.', vi: 'Mình có ba chiếc.' }
        ],
        exercises: [
          { type: 'mc', q: '我有三___书。（Tôi có ba quyển sách.）', options: ['个', '本', '件'], answer: 1, explain: '本 là lượng từ cho sách vở.' },
          { type: 'mc', q: '一___衣服（một chiếc áo）', options: ['件', '杯', '本'], answer: 0, explain: '件 dùng cho quần áo.' },
          { type: 'fill', q: '这___茶是你的。（Cốc trà này là của bạn.）', answer: ['杯', 'bēi', 'bei'], hint: 'bēi – cốc, ly', explain: '杯 vừa là "cốc" vừa là lượng từ: 一杯茶.' },
          { type: 'order', vi: 'Quyển sách này là của tôi.', words: ['是', '这', '书', '我的', '本'], answer: '这 本 书 是 我的' },
          { type: 'mc', q: '"Chiếc áo kia" là:', options: ['衣服那件', '那件衣服', '那衣服件'], answer: 1, explain: 'Chỉ định + lượng từ + danh từ: 那件衣服.' },
          { type: 'mc', q: '白色 là màu gì?', options: ['đỏ', 'trắng', 'đen'], answer: 1, explain: '白 bái (bạch) = trắng.' },
          { type: 'fill', q: '你的杯子是___个？（Cốc của bạn là cái nào?）', answer: ['哪', 'nǎ', 'na'], hint: 'nǎ – nào', explain: '哪个 = cái nào. Phân biệt 哪 nǎ (nào) với 那 nà (kia).' },
          { type: 'order', vi: 'Đây là cái gì?', words: ['是', '这', '什么？'], answer: '这 是 什么？' }
        ]
      },

      // ───────────────────────── HSK1-5 ─────────────────────────
      {
        id: 'zh-hsk1-5',
        icon: '⏰',
        title: 'Thói quen hằng ngày',
        goal: 'Hỏi và nói giờ đơn giản, kể mình làm gì, vào lúc nào và ở đâu trong ngày.',
        vocab: [
          { w: '点', ipa: 'diǎn', hv: 'điểm', vi: 'giờ (khi nói giờ)', ex: '我七点吃早饭。', exPy: 'Wǒ qī diǎn chī zǎofàn.', exVi: 'Tôi ăn sáng lúc bảy giờ.' },
          { w: '现在', ipa: 'xiànzài', hv: 'hiện tại', vi: 'bây giờ', ex: '现在几点？', exPy: 'Xiànzài jǐ diǎn?', exVi: 'Bây giờ là mấy giờ?' },
          { w: '早上', ipa: 'zǎoshang', hv: 'tảo thượng', vi: 'buổi sáng (sớm)', ex: '我早上六点起床。', exPy: 'Wǒ zǎoshang liù diǎn qǐchuáng.', exVi: 'Tôi dậy lúc sáu giờ sáng.' },
          { w: '下午', ipa: 'xiàwǔ', hv: 'hạ ngọ', vi: 'buổi chiều', ex: '他下午在家工作。', exPy: 'Tā xiàwǔ zài jiā gōngzuò.', exVi: 'Buổi chiều anh ấy làm việc ở nhà.' },
          { w: '晚上', ipa: 'wǎnshang', hv: 'vãn thượng', vi: 'buổi tối', ex: '晚上我在家看电视。', exPy: 'Wǎnshang wǒ zài jiā kàn diànshì.', exVi: 'Buổi tối tôi xem tivi ở nhà.' },
          { w: '在', ipa: 'zài', hv: 'tại', vi: 'ở, tại', ex: '我妈妈在医院工作。', exPy: 'Wǒ māma zài yīyuàn gōngzuò.', exVi: 'Mẹ tôi làm việc ở bệnh viện.' },
          { w: '学校', ipa: 'xuéxiào', hv: 'học hiệu', vi: 'trường học', ex: '我们在学校学习汉语。', exPy: 'Wǒmen zài xuéxiào xuéxí Hànyǔ.', exVi: 'Chúng tôi học tiếng Trung ở trường.' },
          { w: '工作', ipa: 'gōngzuò', hv: 'công tác', vi: 'làm việc; công việc', ex: '你在哪儿工作？', exPy: 'Nǐ zài nǎr gōngzuò?', exVi: 'Bạn làm việc ở đâu?' },
          { w: '睡觉', ipa: 'shuìjiào', hv: 'thuỵ giác', vi: 'ngủ, đi ngủ', ex: '我晚上十一点睡觉。', exPy: 'Wǒ wǎnshang shíyī diǎn shuìjiào.', exVi: 'Tôi đi ngủ lúc mười một giờ tối.' },
          { w: '起床', ipa: 'qǐchuáng', hv: 'khởi sàng', vi: 'thức dậy, ra khỏi giường', ex: '你几点起床？', exPy: 'Nǐ jǐ diǎn qǐchuáng?', exVi: 'Bạn dậy lúc mấy giờ?' }
        ],
        grammar: {
          title: 'Trật tự câu: Chủ ngữ + Thời gian + 在 + Nơi chốn + Động từ; nói giờ',
          explain: [
            'Khác tiếng Việt, tiếng Trung đặt thời gian và nơi chốn TRƯỚC động từ. Thứ tự chuẩn: Chủ ngữ + Thời gian + 在 + nơi chốn + Động từ (+ tân ngữ). "Tôi học tiếng Trung ở trường lúc 8 giờ" → 我八点在学校学习汉语。',
            'Từ chỉ thời gian cũng có thể đứng đầu câu, trước chủ ngữ: 晚上我在家看书。 Nhưng không bao giờ đặt sau động từ: ✗ 我学习汉语八点.',
            'Nói giờ: số + 点 (điểm): 八点 = 8 giờ. Hỏi: 现在几点？ Thêm 半 bàn (bán) cho "rưỡi": 七点半 = 7 rưỡi. Muốn rõ sáng / chiều thì đặt buổi trước giờ (lớn trước, nhỏ sau): 早上七点, 下午三点, 晚上十点.',
            '2 giờ nói là 两点 liǎng diǎn, không nói ✗ 二点. Hỏi "ở đâu": 在哪儿 zài nǎr.'
          ],
          table: [
            ['Chủ ngữ', 'Thời gian', '在 + nơi chốn', 'Động từ (+ tân ngữ)'],
            ['我', '八点', '在学校', '学习汉语。'],
            ['妈妈', '下午', '在医院', '工作。'],
            ['他们', '晚上', '在家', '看电视。']
          ],
          examples: [
            { t: '现在两点半。', py: 'Xiànzài liǎng diǎn bàn.', vi: 'Bây giờ là hai giờ rưỡi.' },
            { t: '我早上七点起床。', py: 'Wǒ zǎoshang qī diǎn qǐchuáng.', vi: 'Tôi dậy lúc bảy giờ sáng.' },
            { t: '我爸爸在医院工作。', py: 'Wǒ bàba zài yīyuàn gōngzuò.', vi: 'Bố tôi làm việc ở bệnh viện.' },
            { t: '我们晚上在家吃饭。', py: 'Wǒmen wǎnshang zài jiā chīfàn.', vi: 'Buổi tối chúng tôi ăn cơm ở nhà.' },
            { t: '你几点睡觉？', py: 'Nǐ jǐ diǎn shuìjiào?', vi: 'Bạn đi ngủ lúc mấy giờ?' }
          ],
          tip: 'Mẹo nhớ: "Ai – Khi nào – Ở đâu – Làm gì". Người Việt hay nói theo trật tự tiếng Việt ✗ 我工作在医院; hãy nhớ 在 + nơi chốn đứng trước động từ: 我在医院工作.'
        },
        dialogue: [
          { s: '王明', t: '李华，你每天几点起床？', py: 'Lǐ Huá, nǐ měitiān jǐ diǎn qǐchuáng?', vi: 'Lý Hoa, hằng ngày bạn dậy lúc mấy giờ?' },
          { s: '李华', t: '我早上六点半起床。你呢？', py: 'Wǒ zǎoshang liù diǎn bàn qǐchuáng. Nǐ ne?', vi: 'Mình dậy lúc sáu rưỡi sáng. Còn bạn?' },
          { s: '王明', t: '我七点起床，八点在学校上课。', py: 'Wǒ qī diǎn qǐchuáng, bā diǎn zài xuéxiào shàngkè.', vi: 'Mình dậy lúc bảy giờ, tám giờ lên lớp ở trường.' },
          { s: '李华', t: '你下午在哪儿？', py: 'Nǐ xiàwǔ zài nǎr?', vi: 'Buổi chiều bạn ở đâu?' },
          { s: '王明', t: '下午我在饭店工作。', py: 'Xiàwǔ wǒ zài fàndiàn gōngzuò.', vi: 'Buổi chiều mình làm việc ở nhà hàng.' },
          { s: '李华', t: '晚上呢？', py: 'Wǎnshang ne?', vi: 'Còn buổi tối?' },
          { s: '王明', t: '晚上我在家看书，十一点睡觉。', py: 'Wǎnshang wǒ zài jiā kàn shū, shíyī diǎn shuìjiào.', vi: 'Buổi tối mình đọc sách ở nhà, mười một giờ đi ngủ.' }
        ],
        exercises: [
          { type: 'mc', q: 'Câu nào đúng trật tự?', options: ['我工作在医院。', '我在医院工作。', '我医院在工作。'], answer: 1, explain: '在 + nơi chốn đứng trước động từ.' },
          { type: 'mc', q: '"7 giờ rưỡi" là:', options: ['七点半', '半七点', '七半点'], answer: 0, explain: 'Số + 点 + 半.' },
          { type: 'fill', q: '现在几___？（Bây giờ là mấy giờ?）', answer: ['点', 'diǎn', 'dian'], hint: 'diǎn – giờ', explain: '几点 = mấy giờ.' },
          { type: 'order', vi: 'Anh ấy học ở trường.', words: ['学习', '他', '学校', '在'], answer: '他 在 学校 学习' },
          { type: 'mc', q: '"2 giờ" nói là:', options: ['二点', '两点', '二个点'], answer: 1, explain: 'Khi nói giờ, 2 giờ là 两点.' },
          { type: 'fill', q: '我妈妈___医院工作。（Mẹ tôi làm việc ở bệnh viện.）', answer: ['在', 'zài', 'zai'], hint: 'zài – ở, tại', explain: '在 + nơi chốn + động từ.' },
          { type: 'mc', q: '睡觉 nghĩa là:', options: ['thức dậy', 'làm việc', 'đi ngủ'], answer: 2, explain: '睡觉 shuìjiào (thuỵ giác) = ngủ; 起床 = thức dậy.' },
          { type: 'order', vi: 'Bạn làm việc ở đâu?', words: ['工作？', '你', '在', '哪儿'], answer: '你 在 哪儿 工作？' }
        ]
      },

      // ───────────────────────── HSK1-6 ─────────────────────────
      {
        id: 'zh-hsk1-6',
        icon: '🍜',
        title: 'Đồ ăn & thức uống',
        goal: 'Nói mình muốn ăn uống gì, thích hay không thích món gì, gọi món và hỏi "có… không" bằng câu chính phản.',
        vocab: [
          { w: '想', ipa: 'xiǎng', hv: 'tưởng', vi: 'muốn; nghĩ; nhớ', ex: '我想喝茶。', exPy: 'Wǒ xiǎng hē chá.', exVi: 'Tôi muốn uống trà.' },
          { w: '要', ipa: 'yào', hv: 'yếu', vi: 'muốn, cần (dứt khoát, khi gọi món, mua hàng)', ex: '我要两杯水。', exPy: 'Wǒ yào liǎng bēi shuǐ.', exVi: 'Cho tôi hai cốc nước.' },
          { w: '喜欢', ipa: 'xǐhuan', hv: 'hỉ hoan', vi: 'thích', ex: '我很喜欢中国菜。', exPy: 'Wǒ hěn xǐhuan Zhōngguó cài.', exVi: 'Tôi rất thích món ăn Trung Quốc.' },
          { w: '吃', ipa: 'chī', hv: 'ngật', vi: 'ăn', ex: '你想吃什么？', exPy: 'Nǐ xiǎng chī shénme?', exVi: 'Bạn muốn ăn gì?' },
          { w: '喝', ipa: 'hē', hv: 'hát', vi: 'uống', ex: '你喝不喝咖啡？', exPy: 'Nǐ hē bu hē kāfēi?', exVi: 'Bạn có uống cà phê không?' },
          { w: '米饭', ipa: 'mǐfàn', hv: 'mễ phạn', vi: 'cơm', ex: '中午我吃米饭。', exPy: 'Zhōngwǔ wǒ chī mǐfàn.', exVi: 'Buổi trưa tôi ăn cơm.' },
          { w: '茶', ipa: 'chá', hv: 'trà', vi: 'trà, chè', ex: '中国人很喜欢喝茶。', exPy: 'Zhōngguórén hěn xǐhuan hē chá.', exVi: 'Người Trung Quốc rất thích uống trà.' },
          { w: '水', ipa: 'shuǐ', hv: 'thuỷ', vi: 'nước', ex: '请给我一杯水。', exPy: 'Qǐng gěi wǒ yì bēi shuǐ.', exVi: 'Làm ơn cho tôi một cốc nước.' },
          { w: '苹果', ipa: 'píngguǒ', hv: 'bình quả', vi: 'quả táo', ex: '我想买三个苹果。', exPy: 'Wǒ xiǎng mǎi sān gè píngguǒ.', exVi: 'Tôi muốn mua ba quả táo.' },
          { w: '菜', ipa: 'cài', hv: 'thái', vi: 'món ăn; rau', ex: '这个菜很好吃。', exPy: 'Zhège cài hěn hǎochī.', exVi: 'Món này rất ngon.' }
        ],
        grammar: {
          title: '想 / 要, 喜欢 và câu hỏi chính phản (V不V)',
          explain: [
            '想 xiǎng + động từ: muốn (mong muốn, nhẹ nhàng): 我想吃米饭. 要 yào + động từ / danh từ: muốn, cần — dứt khoát hơn, rất hay dùng khi gọi món, mua hàng: 我要一杯茶. Phủ định "không muốn" thường dùng 不想: 我不想喝 (vì 不要 thường mang nghĩa "đừng").',
            '喜欢 xǐhuan (hỉ hoan) + danh từ / động từ: thích. 我喜欢茶 / 我喜欢喝茶. Thêm 很 để nhấn mạnh: 我很喜欢. Phủ định: 不喜欢.',
            'Câu hỏi chính phản: đặt dạng khẳng định và phủ định của động từ / tính từ cạnh nhau: 你喝不喝茶？ (Bạn có uống trà không?). Nghĩa giống câu với 吗 nhưng KHÔNG thêm 吗 nữa. Với 有 dùng 有没有: 你有没有水？ Chữ 不 ở giữa đọc nhẹ: hē bu hē.',
            'Động từ hai âm tiết có thể rút gọn vế đầu: 你喜不喜欢？ (xǐ bu xǐhuan), 你想不想去？'
          ],
          table: [
            ['Câu với 吗', 'Câu chính phản', 'Nghĩa'],
            ['你喝茶吗？', '你喝不喝茶？', 'Bạn có uống trà không?'],
            ['你想吃米饭吗？', '你想不想吃米饭？', 'Bạn có muốn ăn cơm không?'],
            ['你喜欢苹果吗？', '你喜不喜欢苹果？', 'Bạn có thích táo không?'],
            ['你有水吗？', '你有没有水？', 'Bạn có nước không?']
          ],
          examples: [
            { t: '我想吃中国菜。', py: 'Wǒ xiǎng chī Zhōngguó cài.', vi: 'Tôi muốn ăn món Trung Quốc.' },
            { t: '服务员，我要一杯茶。', py: 'Fúwùyuán, wǒ yào yì bēi chá.', vi: 'Phục vụ ơi, cho tôi một cốc trà.' },
            { t: '你喜不喜欢喝咖啡？', py: 'Nǐ xǐ bu xǐhuan hē kāfēi?', vi: 'Bạn có thích uống cà phê không?' },
            { t: '他不喜欢吃苹果。', py: 'Tā bù xǐhuan chī píngguǒ.', vi: 'Anh ấy không thích ăn táo.' },
            { t: '你要不要米饭？', py: 'Nǐ yào bu yào mǐfàn?', vi: 'Bạn có lấy cơm không?' }
          ],
          tip: 'Không dùng 吗 trong câu chính phản: ✗ 你喝不喝茶吗？ Khi muốn từ chối lịch sự, nói 我不想… hoặc 不用了 (bú yòng le – không cần đâu ạ), tránh nói cụt 不要.'
        },
        dialogue: [
          { s: '服务员', t: '你们好！你们想吃什么？', py: 'Nǐmen hǎo! Nǐmen xiǎng chī shénme?', vi: 'Chào anh chị! Anh chị muốn ăn gì ạ?' },
          { s: '王明', t: '阮兰，你喜不喜欢吃饺子？', py: 'Ruǎn Lán, nǐ xǐ bu xǐhuan chī jiǎozi?', vi: 'Lan ơi, bạn có thích ăn sủi cảo không?' },
          { s: 'Lan', t: '很喜欢！我要饺子和米饭。', py: 'Hěn xǐhuan! Wǒ yào jiǎozi hé mǐfàn.', vi: 'Thích lắm! Mình lấy sủi cảo và cơm.' },
          { s: '王明', t: '我想吃面条。', py: 'Wǒ xiǎng chī miàntiáo.', vi: 'Mình muốn ăn mì.' },
          { s: '服务员', t: '你们喝不喝茶？', py: 'Nǐmen hē bu hē chá?', vi: 'Anh chị có uống trà không ạ?' },
          { s: 'Lan', t: '我不想喝茶，我要一杯水。', py: 'Wǒ bù xiǎng hē chá, wǒ yào yì bēi shuǐ.', vi: 'Tôi không muốn uống trà, cho tôi một cốc nước.' },
          { s: '王明', t: '我要一杯茶，谢谢！', py: 'Wǒ yào yì bēi chá, xièxie!', vi: 'Cho tôi một cốc trà, cảm ơn!' }
        ],
        exercises: [
          { type: 'mc', q: '你喝___喝咖啡？（Bạn có uống cà phê không?）', options: ['不', '没', '吗'], answer: 0, explain: 'Câu chính phản: V + 不 + V.' },
          { type: 'mc', q: 'Câu nào SAI?', options: ['你喝不喝茶？', '你喝茶吗？', '你喝不喝茶吗？'], answer: 2, explain: 'Câu chính phản đã là câu hỏi, không thêm 吗.' },
          { type: 'fill', q: '我很___吃中国菜。（Tôi rất thích ăn món Trung Quốc.）', answer: ['喜欢', 'xǐhuan', 'xihuan'], hint: 'xǐhuan – thích', explain: '喜欢 (hỉ hoan) = thích.' },
          { type: 'order', vi: 'Tôi muốn uống trà.', words: ['喝', '我', '茶', '想'], answer: '我 想 喝 茶' },
          { type: 'mc', q: '"Tôi không muốn ăn táo." Câu đúng:', options: ['我没想吃苹果。', '我不想吃苹果。', '我想吃不苹果。'], answer: 1, explain: 'Phủ định của 想 là 不想, đặt trước động từ.' },
          { type: 'fill', q: '你有___有水？（Bạn có nước không?）', answer: ['没', 'méi', 'mei'], hint: 'méi – phủ định của 有', explain: 'Câu chính phản với 有 là 有没有.' },
          { type: 'mc', q: '米饭 là:', options: ['mì sợi', 'cơm', 'sủi cảo'], answer: 1, explain: '米饭 mǐfàn (mễ phạn) = cơm; mì là 面条, sủi cảo là 饺子.' },
          { type: 'order', vi: 'Bạn có muốn ăn cơm không?', words: ['米饭？', '你', '想不想', '吃'], answer: '你 想不想 吃 米饭？' }
        ]
      }
    ]
  },

  // ===================================================================
  // HSK2
  // ===================================================================
  {
    id: 'HSK2',
    title: 'Sơ cấp 2',
    desc: 'Tương đương A2 (HSK 2): nói ngày giờ và hẹn gặp, mua sắm và mặc cả, hỏi và chỉ đường, kể lại việc đã làm, nói về sở thích và kế hoạch sắp tới.',
    units: [
      // ───────────────────────── HSK2-1 ─────────────────────────
      {
        id: 'zh-hsk2-1',
        icon: '📅',
        title: 'Thời gian & lịch hẹn',
        goal: 'Nói ngày tháng năm, thứ trong tuần, giờ phút chính xác và hẹn gặp ai đó bằng …的时候.',
        vocab: [
          { w: '年', ipa: 'nián', hv: 'niên', vi: 'năm', ex: '一年有十二个月。', exPy: "Yì nián yǒu shí'èr gè yuè.", exVi: 'Một năm có mười hai tháng.' },
          { w: '月', ipa: 'yuè', hv: 'nguyệt', vi: 'tháng', ex: '现在是几月？', exPy: 'Xiànzài shì jǐ yuè?', exVi: 'Bây giờ là tháng mấy?' },
          { w: '号', ipa: 'hào', hv: 'hiệu', vi: 'ngày (trong tháng, văn nói)', ex: '今天几号？', exPy: 'Jīntiān jǐ hào?', exVi: 'Hôm nay ngày mấy?' },
          { w: '星期', ipa: 'xīngqī', hv: 'tinh kỳ', vi: 'tuần; thứ', ex: '今天星期几？', exPy: 'Jīntiān xīngqī jǐ?', exVi: 'Hôm nay thứ mấy?' },
          { w: '分', ipa: 'fēn', hv: 'phân', vi: 'phút', ex: '现在八点十分。', exPy: 'Xiànzài bā diǎn shí fēn.', exVi: 'Bây giờ là tám giờ mười phút.' },
          { w: '半', ipa: 'bàn', hv: 'bán', vi: 'rưỡi; một nửa', ex: '我们七点半见。', exPy: 'Wǒmen qī diǎn bàn jiàn.', exVi: 'Chúng ta gặp nhau lúc bảy rưỡi.' },
          { w: '时候', ipa: 'shíhou', hv: 'thời hậu', vi: 'lúc, khi', ex: '你什么时候有时间？', exPy: 'Nǐ shénme shíhou yǒu shíjiān?', exVi: 'Khi nào bạn có thời gian?' },
          { w: '时间', ipa: 'shíjiān', hv: 'thời gian', vi: 'thời gian', ex: '明天下午我没有时间。', exPy: 'Míngtiān xiàwǔ wǒ méiyǒu shíjiān.', exVi: 'Chiều mai tôi không có thời gian.' },
          { w: '生日', ipa: 'shēngrì', hv: 'sinh nhật', vi: 'sinh nhật', ex: '我的生日是五月十号。', exPy: 'Wǒ de shēngrì shì wǔ yuè shí hào.', exVi: 'Sinh nhật tôi là ngày 10 tháng 5.' },
          { w: '明天', ipa: 'míngtiān', hv: 'minh thiên', vi: 'ngày mai', ex: '明天是星期六。', exPy: 'Míngtiān shì xīngqīliù.', exVi: 'Ngày mai là thứ Bảy.' }
        ],
        grammar: {
          title: 'Ngày tháng năm, giờ phút và …的时候',
          explain: [
            'Thời gian xếp từ LỚN đến NHỎ, ngược với tiếng Việt: năm → tháng → ngày → thứ → buổi → giờ. 2026年5月10号星期天上午九点 = 9 giờ sáng chủ nhật, ngày 10 tháng 5 năm 2026.',
            'Năm đọc từng chữ số: 二〇二六年 èr líng èr liù nián. Tháng = số + 月: 一月 … 十二月. Ngày = số + 号 (khẩu ngữ) hoặc 日 rì (văn viết). Thứ: 星期一 (thứ Hai) … 星期六 (thứ Bảy); chủ nhật là 星期天 hoặc 星期日. Mẹo: số sau 星期 = thứ trong tiếng Việt trừ đi 1.',
            'Giờ phút: 点 (giờ) + 分 (phút): 八点十分 = 8 giờ 10. 半 = rưỡi (30 phút), 一刻 yí kè = 15 phút, 差 chà = kém: 差五分九点 = 9 giờ kém 5.',
            '…的时候 = lúc / khi…: đặt sau một cụm động từ hoặc danh từ, cả cụm đứng trước động từ chính: 吃饭的时候 (lúc ăn cơm), 我在中国的时候 (khi tôi ở Trung Quốc). Hỏi "khi nào": 什么时候？'
          ],
          table: [
            ['Tiếng Trung', 'Pinyin', 'Nghĩa'],
            ['二〇二六年', 'èr líng èr liù nián', 'năm 2026'],
            ['五月十号', 'wǔ yuè shí hào', 'ngày 10 tháng 5'],
            ['星期三', 'xīngqīsān', 'thứ Tư'],
            ['九点一刻', 'jiǔ diǎn yí kè', '9 giờ 15'],
            ['差五分三点', 'chà wǔ fēn sān diǎn', '3 giờ kém 5']
          ],
          examples: [
            { t: '今天几月几号？', py: 'Jīntiān jǐ yuè jǐ hào?', vi: 'Hôm nay là ngày mấy tháng mấy?' },
            { t: '我的生日是三月八号，星期天。', py: 'Wǒ de shēngrì shì sān yuè bā hào, xīngqītiān.', vi: 'Sinh nhật tôi là ngày 8 tháng 3, chủ nhật.' },
            { t: '我们明天下午两点半见吧。', py: 'Wǒmen míngtiān xiàwǔ liǎng diǎn bàn jiàn ba.', vi: 'Hai rưỡi chiều mai chúng ta gặp nhau nhé.' },
            { t: '吃饭的时候，我喜欢看电视。', py: 'Chīfàn de shíhou, wǒ xǐhuan kàn diànshì.', vi: 'Lúc ăn cơm, tôi thích xem tivi.' }
          ],
          tip: 'Hỏi ngày dùng 几号, hỏi thứ dùng 星期几 — câu đã có 几 thì không thêm 吗. Đừng dịch "chủ nhật" thành ✗ 星期七: phải là 星期天 hoặc 星期日.'
        },
        dialogue: [
          { s: '李华', t: '阮兰，你的生日是几月几号？', py: 'Ruǎn Lán, nǐ de shēngrì shì jǐ yuè jǐ hào?', vi: 'Lan ơi, sinh nhật bạn là ngày mấy tháng mấy?' },
          { s: 'Lan', t: '十一月二十号。', py: 'Shíyī yuè èrshí hào.', vi: 'Ngày 20 tháng 11.' },
          { s: '李华', t: '那天是星期几？', py: 'Nà tiān shì xīngqī jǐ?', vi: 'Hôm đó là thứ mấy?' },
          { s: 'Lan', t: '星期五。你那天有时间吗？', py: 'Xīngqīwǔ. Nǐ nà tiān yǒu shíjiān ma?', vi: 'Thứ Sáu. Hôm đó bạn có rảnh không?' },
          { s: '李华', t: '上午我要上课，下午有时间。', py: 'Shàngwǔ wǒ yào shàngkè, xiàwǔ yǒu shíjiān.', vi: 'Buổi sáng mình phải lên lớp, buổi chiều thì rảnh.' },
          { s: 'Lan', t: '那我们下午五点半在学校门口见吧。', py: 'Nà wǒmen xiàwǔ wǔ diǎn bàn zài xuéxiào ménkǒu jiàn ba.', vi: 'Vậy năm rưỡi chiều chúng ta gặp nhau ở cổng trường nhé.' },
          { s: '李华', t: '好的！到时候见！', py: 'Hǎo de! Dào shíhou jiàn!', vi: 'Được! Đến lúc đó gặp nhé!' }
        ],
        exercises: [
          { type: 'mc', q: 'Thứ tự đúng của "9 giờ sáng ngày 5 tháng 3":', options: ['九点上午三月五号', '三月五号上午九点', '五号三月上午九点'], answer: 1, explain: 'Thời gian xếp từ lớn đến nhỏ: tháng → ngày → buổi → giờ.' },
          { type: 'mc', q: '"Chủ nhật" là:', options: ['星期七', '星期天', '星期一'], answer: 1, explain: 'Chủ nhật là 星期天 hoặc 星期日, không có 星期七.' },
          { type: 'fill', q: '今天星期___？（Hôm nay thứ mấy?）', answer: ['几', 'jǐ', 'ji'], hint: 'jǐ – mấy', explain: '星期几 = thứ mấy.' },
          { type: 'order', vi: 'Hôm nay là ngày mấy tháng mấy?', words: ['几号？', '今天', '几月'], answer: '今天 几月 几号？' },
          { type: 'mc', q: '八点半 là:', options: ['8 giờ 30', '8 giờ 15', '7 giờ 30'], answer: 0, explain: '半 = rưỡi, tức 30 phút.' },
          { type: 'fill', q: '吃饭的___，他喜欢看手机。（Lúc ăn cơm, anh ấy thích xem điện thoại.）', answer: ['时候', 'shíhou', 'shihou'], hint: 'shíhou – lúc, khi', explain: '…的时候 = lúc…, khi….' },
          { type: 'mc', q: '星期三 là thứ mấy?', options: ['thứ Ba', 'thứ Tư', 'thứ Năm'], answer: 1, explain: 'Số sau 星期 cộng thêm 1 là thứ trong tiếng Việt: 3 + 1 = thứ Tư.' },
          { type: 'order', vi: 'Khi nào bạn có thời gian?', words: ['时间？', '你', '有', '什么时候'], answer: '你 什么时候 有 时间？' }
        ]
      },

      // ───────────────────────── HSK2-2 ─────────────────────────
      {
        id: 'zh-hsk2-2',
        icon: '🛍️',
        title: 'Mua sắm',
        goal: 'Hỏi giá, nói số tiền bằng 块 / 毛, chê đắt và mặc cả, xin phép thử đồ.',
        vocab: [
          { w: '钱', ipa: 'qián', hv: 'tiền', vi: 'tiền', ex: '这个多少钱？', exPy: 'Zhège duōshao qián?', exVi: 'Cái này bao nhiêu tiền?' },
          { w: '多少', ipa: 'duōshao', hv: 'đa thiểu', vi: 'bao nhiêu', ex: '你们班有多少个学生？', exPy: 'Nǐmen bān yǒu duōshao gè xuésheng?', exVi: 'Lớp các bạn có bao nhiêu học sinh?' },
          { w: '块', ipa: 'kuài', hv: 'khối', vi: 'đồng, tệ (đơn vị tiền, văn nói)', ex: '一杯咖啡二十五块。', exPy: 'Yì bēi kāfēi èrshíwǔ kuài.', exVi: 'Một cốc cà phê hai mươi lăm tệ.' },
          { w: '毛', ipa: 'máo', hv: 'mao', vi: 'hào (1/10 tệ, văn nói)', ex: '一个苹果三块五毛。', exPy: 'Yí gè píngguǒ sān kuài wǔ máo.', exVi: 'Một quả táo ba tệ rưỡi.' },
          { w: '贵', ipa: 'guì', hv: 'quý', vi: 'đắt', ex: '这件衣服太贵了！', exPy: 'Zhè jiàn yīfu tài guì le!', exVi: 'Chiếc áo này đắt quá!' },
          { w: '便宜', ipa: 'piányi', hv: 'tiện nghi', vi: 'rẻ', ex: '可以便宜一点儿吗？', exPy: 'Kěyǐ piányi yìdiǎnr ma?', exVi: 'Bớt một chút được không?' },
          { w: '买', ipa: 'mǎi', hv: 'mãi', vi: 'mua', ex: '我想买一些水果。', exPy: 'Wǒ xiǎng mǎi yìxiē shuǐguǒ.', exVi: 'Tôi muốn mua ít hoa quả.' },
          { w: '卖', ipa: 'mài', hv: 'mại', vi: 'bán', ex: '这家商店卖手机。', exPy: 'Zhè jiā shāngdiàn mài shǒujī.', exVi: 'Cửa hàng này bán điện thoại.' },
          { w: '可以', ipa: 'kěyǐ', hv: 'khả dĩ', vi: 'có thể, được (phép)', ex: '我可以试试吗？', exPy: 'Wǒ kěyǐ shìshi ma?', exVi: 'Tôi thử được không?' },
          { w: '商店', ipa: 'shāngdiàn', hv: 'thương điếm', vi: 'cửa hàng', ex: '商店里人很多。', exPy: 'Shāngdiàn lǐ rén hěn duō.', exVi: 'Trong cửa hàng rất đông người.' }
        ],
        grammar: {
          title: 'Hỏi giá với 多少钱, tiền 块 / 毛, 太…了 và 可以',
          explain: [
            'Hỏi giá: (đồ vật +) 多少钱？ 多少 duōshao dùng hỏi số lượng bất kỳ (thường trên 10), còn 几 dùng cho số nhỏ. Hỏi giá theo đơn vị: 苹果多少钱一斤？ (Táo bao nhiêu tiền một cân? – 斤 jīn = nửa ký).',
            'Tiền Trung Quốc là nhân dân tệ (人民币 rénmínbì). Văn nói dùng 块 kuài (đồng) và 毛 máo (hào, 1 块 = 10 毛); văn viết dùng 元 yuán và 角 jiǎo. ¥15,5 = 十五块五毛, nói gọn 十五块五. ¥2 = 两块. 100 là 一百 yìbǎi, 150 nói gọn 一百五.',
            '太 + tính từ + 了 = …quá!, thường mang ý phàn nàn hoặc cảm thán: 太贵了！ (đắt quá!), 太好了！ (tuyệt quá!). Phủ định nhẹ nhàng: 不太贵 (không đắt lắm) — lúc này không có 了.',
            '可以 kěyǐ (khả dĩ) + động từ: được phép, có thể: 我可以试试吗？ (Tôi thử được không?). Trả lời: 可以 / 不可以, hoặc 不行 bù xíng (không được).'
          ],
          table: [
            ['Giá', 'Cách nói', 'Pinyin'],
            ['¥8.00', '八块', 'bā kuài'],
            ['¥2.50', '两块五(毛)', 'liǎng kuài wǔ (máo)'],
            ['¥0.50', '五毛', 'wǔ máo'],
            ['¥36.00', '三十六块', 'sānshíliù kuài'],
            ['¥150.00', '一百五(十块)', 'yìbǎi wǔ (shí kuài)']
          ],
          examples: [
            { t: '这件衣服多少钱？', py: 'Zhè jiàn yīfu duōshao qián?', vi: 'Chiếc áo này bao nhiêu tiền?' },
            { t: '苹果五块钱一斤。', py: 'Píngguǒ wǔ kuài qián yì jīn.', vi: 'Táo năm tệ một cân.' },
            { t: '太贵了！可以便宜一点儿吗？', py: 'Tài guì le! Kěyǐ piányi yìdiǎnr ma?', vi: 'Đắt quá! Bớt chút được không?' },
            { t: '这个不太贵，我要这个。', py: 'Zhège bú tài guì, wǒ yào zhège.', vi: 'Cái này không đắt lắm, tôi lấy cái này.' }
          ],
          tip: 'Mặc cả ở chợ: 太贵了，便宜一点儿吧！ Câu cảm thán "…quá" cần đủ 太…了, đừng bỏ 了 (✗ 太贵！). Và ¥2 là 两块, không phải ✗ 二块. Cẩn thận: 便宜 đọc piányi nghĩa là "rẻ", khác hẳn nghĩa "tiện nghi" trong tiếng Việt.'
        },
        dialogue: [
          { s: 'Lan', t: '你好！这件衣服多少钱？', py: 'Nǐ hǎo! Zhè jiàn yīfu duōshao qián?', vi: 'Chào chị! Chiếc áo này bao nhiêu tiền ạ?' },
          { s: '售货员', t: '两百块。', py: 'Liǎng bǎi kuài.', vi: 'Hai trăm tệ.' },
          { s: 'Lan', t: '太贵了！可以便宜一点儿吗？', py: 'Tài guì le! Kěyǐ piányi yìdiǎnr ma?', vi: 'Đắt quá! Bớt cho em một chút được không?' },
          { s: '售货员', t: '一百八，可以吗？', py: 'Yìbǎi bā, kěyǐ ma?', vi: 'Một trăm tám mươi, được không?' },
          { s: 'Lan', t: '一百五吧。我可以试试吗？', py: 'Yìbǎi wǔ ba. Wǒ kěyǐ shìshi ma?', vi: 'Một trăm năm mươi thôi. Em thử được không ạ?' },
          { s: '售货员', t: '可以。好吧，一百五卖给你。', py: 'Kěyǐ. Hǎo ba, yìbǎi wǔ mài gěi nǐ.', vi: 'Được. Thôi được, chị bán cho em một trăm năm mươi.' },
          { s: 'Lan', t: '太好了！谢谢！', py: 'Tài hǎo le! Xièxie!', vi: 'Tuyệt quá! Cảm ơn chị!' }
        ],
        exercises: [
          { type: 'mc', q: '"Đắt quá!" là:', options: ['太贵！', '太贵了！', '很贵了！'], answer: 1, explain: 'Mẫu cảm thán: 太 + tính từ + 了.' },
          { type: 'mc', q: '¥3.50 nói là:', options: ['三块五', '三毛五', '五块三'], answer: 0, explain: '3 tệ = 三块, 5 hào = 五毛, nói gọn 三块五.' },
          { type: 'fill', q: '这个苹果多少___？（Quả táo này bao nhiêu tiền?）', answer: ['钱', 'qián', 'qian'], hint: 'qián – tiền', explain: '多少钱 = bao nhiêu tiền.' },
          { type: 'order', vi: 'Tôi thử được không?', words: ['试试', '我', '吗？', '可以'], answer: '我 可以 试试 吗？' },
          { type: 'mc', q: '便宜 nghĩa là:', options: ['đắt', 'rẻ', 'tiện nghi'], answer: 1, explain: 'Tuy âm Hán Việt là "tiện nghi", 便宜 piányi nghĩa là rẻ.' },
          { type: 'fill', q: '这件衣服不___贵。（Chiếc áo này không đắt lắm.）', answer: ['太', 'tài', 'tai'], hint: 'tài – quá, lắm', explain: '不太 + tính từ = không… lắm.' },
          { type: 'mc', q: '1 块 bằng bao nhiêu 毛?', options: ['10', '100', '5'], answer: 0, explain: '1 块 = 10 毛 (giống 1 元 = 10 角).' },
          { type: 'order', vi: 'Cái này bao nhiêu tiền?', words: ['钱？', '这个', '多少'], answer: '这个 多少 钱？' }
        ]
      },

      // ───────────────────────── HSK2-3 ─────────────────────────
      {
        id: 'zh-hsk2-3',
        icon: '🧭',
        title: 'Nhà cửa & chỉ đường',
        goal: 'Nói đồ vật, địa điểm ở đâu bằng 在 và phương vị từ, hỏi đường và chỉ đường đơn giản.',
        vocab: [
          { w: '左边', ipa: 'zuǒbian', hv: 'tả biên', vi: 'bên trái', ex: '我家在学校左边。', exPy: 'Wǒ jiā zài xuéxiào zuǒbian.', exVi: 'Nhà tôi ở bên trái trường học.' },
          { w: '右边', ipa: 'yòubian', hv: 'hữu biên', vi: 'bên phải', ex: '饭店在商店右边。', exPy: 'Fàndiàn zài shāngdiàn yòubian.', exVi: 'Nhà hàng ở bên phải cửa hàng.' },
          { w: '前面', ipa: 'qiánmian', hv: 'tiền diện', vi: 'phía trước', ex: '前面有一个医院。', exPy: 'Qiánmian yǒu yí gè yīyuàn.', exVi: 'Phía trước có một bệnh viện.' },
          { w: '后面', ipa: 'hòumian', hv: 'hậu diện', vi: 'phía sau', ex: '火车站后面有很多饭店。', exPy: 'Huǒchēzhàn hòumian yǒu hěn duō fàndiàn.', exVi: 'Phía sau ga tàu có rất nhiều nhà hàng.' },
          { w: '旁边', ipa: 'pángbiān', hv: 'bàng biên', vi: 'bên cạnh', ex: '我的手机在电脑旁边。', exPy: 'Wǒ de shǒujī zài diànnǎo pángbiān.', exVi: 'Điện thoại của tôi ở cạnh máy tính.' },
          { w: '里', ipa: 'lǐ', hv: 'lý', vi: 'trong', ex: '杯子里有水。', exPy: 'Bēizi lǐ yǒu shuǐ.', exVi: 'Trong cốc có nước.' },
          { w: '往', ipa: 'wǎng', hv: 'vãng', vi: 'về phía, hướng về', ex: '往前走。', exPy: 'Wǎng qián zǒu.', exVi: 'Đi thẳng về phía trước.' },
          { w: '走', ipa: 'zǒu', hv: 'tẩu', vi: 'đi (bộ); rời đi', ex: '到第二个路口往左走。', exPy: 'Dào dì èr gè lùkǒu wǎng zuǒ zǒu.', exVi: 'Đến ngã tư thứ hai thì rẽ trái.' },
          { w: '房间', ipa: 'fángjiān', hv: 'phòng gian', vi: 'phòng', ex: '我的房间不大。', exPy: 'Wǒ de fángjiān bú dà.', exVi: 'Phòng của tôi không to.' },
          { w: '路', ipa: 'lù', hv: 'lộ', vi: 'đường, con đường', ex: '这条路叫什么名字？', exPy: 'Zhè tiáo lù jiào shénme míngzi?', exVi: 'Con đường này tên là gì?' }
        ],
        grammar: {
          title: '在 chỉ vị trí, phương vị từ và 往…走',
          explain: [
            'Người / vật + 在 + nơi chốn (+ phương vị từ): nói ai, cái gì ở đâu. 书在桌子上 (sách ở trên bàn), 我家在学校旁边 (nhà tôi ở cạnh trường). Hỏi: …在哪儿？',
            'Phương vị từ: 上 (trên), 下 (dưới), 里 (trong), 外 (ngoài), 前 (trước), 后 (sau), 左 (trái), 右 (phải), 旁边 (bên cạnh), 中间 (ở giữa). Thêm 边 bian hoặc 面 mian để thành danh từ: 左边, 前面, 里面. Trật tự ngược tiếng Việt: mốc đứng trước, phương vị đứng sau: 学校旁边 = bên cạnh trường.',
            'Nói ở đâu CÓ cái gì: Nơi chốn + 有 + vật: 学校旁边有一个商店 (bên cạnh trường có một cửa hàng). So sánh với 商店在学校旁边 (cửa hàng ở cạnh trường): 在 dùng khi vật đã xác định, 有 dùng để giới thiệu vật mới.',
            'Chỉ đường: 往 wǎng + hướng + 走: 往前走 (đi thẳng), 往左走 / 往右走 (rẽ trái / phải). 一直往前走 = cứ đi thẳng. Hỏi cách đi: 怎么走？'
          ],
          table: [
            ['Mẫu', 'Ví dụ', 'Nghĩa'],
            ['A 在 B + phương vị', '猫在桌子下面。', 'Con mèo ở dưới bàn.'],
            ['B + phương vị + 有 A', '桌子上有一本书。', 'Trên bàn có một quyển sách.'],
            ['往 + hướng + 走', '往右走。', 'Rẽ phải.'],
            ['…在哪儿？', '厕所在哪儿？', 'Nhà vệ sinh ở đâu?']
          ],
          examples: [
            { t: '请问，医院在哪儿？', py: 'Qǐngwèn, yīyuàn zài nǎr?', vi: 'Xin hỏi, bệnh viện ở đâu?' },
            { t: '一直往前走，到路口往左走。', py: 'Yìzhí wǎng qián zǒu, dào lùkǒu wǎng zuǒ zǒu.', vi: 'Cứ đi thẳng, đến ngã tư thì rẽ trái.' },
            { t: '商店在饭店和医院中间。', py: 'Shāngdiàn zài fàndiàn hé yīyuàn zhōngjiān.', vi: 'Cửa hàng ở giữa nhà hàng và bệnh viện.' },
            { t: '我家后面有一个公园。', py: 'Wǒ jiā hòumian yǒu yí gè gōngyuán.', vi: 'Phía sau nhà tôi có một công viên.' },
            { t: '手机在桌子上。', py: 'Shǒujī zài zhuōzi shàng.', vi: 'Điện thoại ở trên bàn.' }
          ],
          tip: 'Người Việt hay nói ✗ 在旁边学校 theo trật tự "ở bên cạnh trường". Trong tiếng Trung, mốc đứng trước, phương vị đứng sau: 在学校旁边. Và đừng dùng 是 thay 在 khi nói vị trí: ✗ 我家是学校旁边.'
        },
        dialogue: [
          { s: 'Lan', t: '李华，你家在哪儿？', py: 'Lǐ Huá, nǐ jiā zài nǎr?', vi: 'Lý Hoa ơi, nhà bạn ở đâu?' },
          { s: '李华', t: '我家在学校后面，离学校不远。', py: 'Wǒ jiā zài xuéxiào hòumian, lí xuéxiào bù yuǎn.', vi: 'Nhà mình ở phía sau trường, cách trường không xa.' },
          { s: 'Lan', t: '我现在在学校门口，怎么走？', py: 'Wǒ xiànzài zài xuéxiào ménkǒu, zěnme zǒu?', vi: 'Mình đang ở cổng trường, đi thế nào?' },
          { s: '李华', t: '你往前走，到路口往右走。', py: 'Nǐ wǎng qián zǒu, dào lùkǒu wǎng yòu zǒu.', vi: 'Bạn đi thẳng, đến ngã tư thì rẽ phải.' },
          { s: 'Lan', t: '往右走以后呢？', py: 'Wǎng yòu zǒu yǐhòu ne?', vi: 'Rẽ phải rồi sao nữa?' },
          { s: '李华', t: '右边有一个商店，我家就在商店旁边。', py: 'Yòubian yǒu yí gè shāngdiàn, wǒ jiā jiù zài shāngdiàn pángbiān.', vi: 'Bên phải có một cửa hàng, nhà mình ở ngay cạnh cửa hàng đó.' },
          { s: 'Lan', t: '好，我知道了。十分钟以后见！', py: 'Hǎo, wǒ zhīdào le. Shí fēnzhōng yǐhòu jiàn!', vi: 'Được, mình biết rồi. Mười phút nữa gặp nhé!' }
        ],
        exercises: [
          { type: 'mc', q: '"Nhà tôi ở cạnh trường học." Câu đúng:', options: ['我家在旁边学校。', '我家在学校旁边。', '我家是学校旁边。'], answer: 1, explain: 'Mốc (学校) đứng trước, phương vị (旁边) đứng sau; dùng 在 chứ không dùng 是.' },
          { type: 'mc', q: '往左走 nghĩa là:', options: ['đi thẳng', 'rẽ trái', 'quay lại'], answer: 1, explain: '往 + 左 + 走 = đi về phía bên trái, tức rẽ trái.' },
          { type: 'fill', q: '医院在___儿？（Bệnh viện ở đâu?）', answer: ['哪', 'nǎ', 'na'], hint: 'nǎ – 哪儿 = ở đâu', explain: '在哪儿 = ở đâu.' },
          { type: 'order', vi: 'Trên bàn có một cái cốc.', words: ['一个', '桌子上', '有', '杯子'], answer: '桌子上 有 一个 杯子' },
          { type: 'mc', q: '前面 là:', options: ['phía sau', 'phía trước', 'bên trái'], answer: 1, explain: '前面 qiánmian (tiền diện) = phía trước; phía sau là 后面.' },
          { type: 'fill', q: '你___前走，到路口往右走。（Bạn đi thẳng, đến ngã tư thì rẽ phải.）', answer: ['往', 'wǎng', 'wang'], hint: 'wǎng – về phía', explain: '往前走 = đi thẳng về phía trước.' },
          { type: 'mc', q: '"Cửa hàng ở bên phải nhà hàng." Câu đúng:', options: ['商店在饭店右边。', '饭店在商店右边。', '商店右边在饭店。'], answer: 0, explain: 'Vật cần định vị (商店) + 在 + mốc (饭店) + phương vị (右边).' },
          { type: 'order', vi: 'Điện thoại ở bên cạnh máy tính.', words: ['在', '旁边', '电脑', '手机'], answer: '手机 在 电脑 旁边' }
        ]
      },

      // ───────────────────────── HSK2-4 ─────────────────────────
      {
        id: 'zh-hsk2-4',
        icon: '🏞️',
        title: 'Cuối tuần vừa rồi',
        goal: 'Kể lại những việc đã làm vào cuối tuần, nói về trải nghiệm "đã từng" và phủ định việc trong quá khứ.',
        vocab: [
          { w: '周末', ipa: 'zhōumò', hv: 'chu mạt', vi: 'cuối tuần', ex: '上个周末你做什么了？', exPy: 'Shàng gè zhōumò nǐ zuò shénme le?', exVi: 'Cuối tuần trước bạn đã làm gì?' },
          { w: '昨天', ipa: 'zuótiān', hv: 'tạc thiên', vi: 'hôm qua', ex: '昨天我去了商店。', exPy: 'Zuótiān wǒ qù le shāngdiàn.', exVi: 'Hôm qua tôi đã đi cửa hàng.' },
          { w: '过', ipa: 'guo', hv: 'quá', vi: 'đã từng (trợ từ chỉ trải nghiệm)', ex: '我去过北京。', exPy: 'Wǒ qù guo Běijīng.', exVi: 'Tôi đã từng đến Bắc Kinh.' },
          { w: '没', ipa: 'méi', hv: 'một', vi: 'không, chưa (phủ định việc đã xảy ra)', ex: '我昨天没去学校。', exPy: 'Wǒ zuótiān méi qù xuéxiào.', exVi: 'Hôm qua tôi không đi học.' },
          { w: '电影', ipa: 'diànyǐng', hv: 'điện ảnh', vi: 'phim (điện ảnh)', ex: '我们看了一个中国电影。', exPy: 'Wǒmen kàn le yí gè Zhōngguó diànyǐng.', exVi: 'Chúng tôi đã xem một bộ phim Trung Quốc.' },
          { w: '一起', ipa: 'yìqǐ', hv: 'nhất khởi', vi: 'cùng nhau', ex: '我们一起去吃饭吧。', exPy: 'Wǒmen yìqǐ qù chīfàn ba.', exVi: 'Chúng mình cùng đi ăn cơm nhé.' },
          { w: '朋友', ipa: 'péngyou', hv: 'bằng hữu', vi: 'bạn, bạn bè', ex: '周末我和朋友去爬山了。', exPy: 'Zhōumò wǒ hé péngyou qù páshān le.', exVi: 'Cuối tuần tôi đã đi leo núi với bạn.' },
          { w: '旅游', ipa: 'lǚyóu', hv: 'lữ du', vi: 'du lịch', ex: '你去中国旅游过吗？', exPy: 'Nǐ qù Zhōngguó lǚyóu guo ma?', exVi: 'Bạn đã từng đi du lịch Trung Quốc chưa?' },
          { w: '爬山', ipa: 'páshān', hv: 'ba sơn', vi: 'leo núi', ex: '我没爬过山。', exPy: 'Wǒ méi pá guo shān.', exVi: 'Tôi chưa từng leo núi.' },
          { w: '已经', ipa: 'yǐjīng', hv: 'dĩ kinh', vi: 'đã (rồi)', ex: '我已经吃饭了。', exPy: 'Wǒ yǐjīng chīfàn le.', exVi: 'Tôi đã ăn cơm rồi.' }
        ],
        grammar: {
          title: '了 chỉ hoàn thành, 过 chỉ trải nghiệm, phủ định quá khứ với 没',
          explain: [
            '了 le đặt sau động từ hoặc cuối câu để cho biết hành động ĐÃ xảy ra / đã hoàn thành: 我买了一本书 (tôi đã mua một quyển sách), 他去学校了 (anh ấy đi học rồi). Khi tân ngữ có số lượng hoặc định ngữ, 了 thường đứng ngay sau động từ: 看了两个电影.',
            '过 guo (quá) đặt sau động từ để nói về TRẢI NGHIỆM — đã từng làm ít nhất một lần: 我去过中国 (tôi từng đến Trung Quốc). Hỏi: 你吃过饺子吗？',
            'Phủ định việc đã xảy ra dùng 没(有) + động từ, và BỎ 了: 我昨天没去学校 (✗ 我昨天没去了学校). Riêng với 过 thì GIỮ 过: 我没去过北京 (tôi chưa từng đến Bắc Kinh).',
            '了 không phải là "thì quá khứ": thói quen trong quá khứ không dùng 了: 以前我每天都喝咖啡 (trước đây ngày nào tôi cũng uống cà phê). Còn 不 dùng cho hiện tại, tương lai hoặc ý muốn: 我不去 (tôi không đi).'
          ],
          table: [
            ['', 'Khẳng định', 'Phủ định', 'Câu hỏi'],
            ['了', '我看了电影。', '我没看电影。', '你看电影了吗？'],
            ['过', '我去过北京。', '我没去过北京。', '你去过北京吗？']
          ],
          examples: [
            { t: '上个周末我和朋友去爬山了。', py: 'Shàng gè zhōumò wǒ hé péngyou qù páshān le.', vi: 'Cuối tuần trước tôi đã đi leo núi với bạn.' },
            { t: '昨天我买了两件衣服。', py: 'Zuótiān wǒ mǎi le liǎng jiàn yīfu.', vi: 'Hôm qua tôi đã mua hai chiếc áo.' },
            { t: '你去过上海吗？', py: 'Nǐ qù guo Shànghǎi ma?', vi: 'Bạn đã từng đến Thượng Hải chưa?' },
            { t: '我没吃过北京烤鸭。', py: 'Wǒ méi chī guo Běijīng kǎoyā.', vi: 'Tôi chưa từng ăn vịt quay Bắc Kinh.' },
            { t: '他昨天没来上课。', py: 'Tā zuótiān méi lái shàngkè.', vi: 'Hôm qua anh ấy không đến lớp.' }
          ],
          tip: 'Lỗi rất hay gặp: dùng 没 mà vẫn giữ 了 (✗ 我没吃了). Nhớ: có 没 thì bỏ 了, nhưng giữ 过. Đừng dùng 不 cho việc đã qua: ✗ 我昨天不去 → 我昨天没去.'
        },
        dialogue: [
          { s: '王明', t: '阮兰，上个周末你做什么了？', py: 'Ruǎn Lán, shàng gè zhōumò nǐ zuò shénme le?', vi: 'Lan ơi, cuối tuần trước bạn đã làm gì?' },
          { s: 'Lan', t: '星期六我和朋友去爬山了。', py: 'Xīngqīliù wǒ hé péngyou qù páshān le.', vi: 'Thứ Bảy mình đi leo núi với bạn.' },
          { s: '王明', t: '你们去了哪儿？', py: 'Nǐmen qù le nǎr?', vi: 'Các bạn đã đi đâu?' },
          { s: 'Lan', t: '香山。你去过香山吗？', py: 'Xiāng Shān. Nǐ qù guo Xiāng Shān ma?', vi: 'Hương Sơn. Bạn đã từng đến Hương Sơn chưa?' },
          { s: '王明', t: '没去过。星期天你也爬山了吗？', py: 'Méi qù guo. Xīngqītiān nǐ yě páshān le ma?', vi: 'Chưa từng đến. Chủ nhật bạn cũng đi leo núi à?' },
          { s: 'Lan', t: '没有，星期天我太累了，在家看了一个电影。', py: 'Méiyǒu, xīngqītiān wǒ tài lèi le, zài jiā kàn le yí gè diànyǐng.', vi: 'Không, chủ nhật mình mệt quá, ở nhà xem một bộ phim.' },
          { s: '王明', t: '下次我们一起去爬山吧！', py: 'Xià cì wǒmen yìqǐ qù páshān ba!', vi: 'Lần sau chúng mình cùng đi leo núi nhé!' }
        ],
        exercises: [
          { type: 'mc', q: '"Hôm qua tôi không đi học." Câu đúng:', options: ['我昨天不去学校。', '我昨天没去学校。', '我昨天没去了学校。'], answer: 1, explain: 'Phủ định việc đã xảy ra dùng 没 và bỏ 了.' },
          { type: 'mc', q: '我___吃过北京烤鸭。（Tôi chưa từng ăn vịt quay Bắc Kinh.）', options: ['不', '没', '了'], answer: 1, explain: 'Phủ định trải nghiệm: 没 + V + 过.' },
          { type: 'fill', q: '你去___中国吗？（Bạn đã từng đến Trung Quốc chưa?）', answer: ['过', 'guò', 'guo'], hint: 'guo – đã từng', explain: 'V + 过 diễn tả trải nghiệm.' },
          { type: 'order', vi: 'Tôi đã mua hai quyển sách.', words: ['两本', '我', '书', '买了'], answer: '我 买了 两本 书' },
          { type: 'mc', q: 'Câu nào nói về TRẢI NGHIỆM (đã từng)?', options: ['我看了这个电影。', '我看过这个电影。', '我在看这个电影。'], answer: 1, explain: '过 nhấn mạnh trải nghiệm; 了 chỉ hành động đã hoàn thành.' },
          { type: 'fill', q: '周末我和朋友去爬山___。（Cuối tuần tôi đã đi leo núi với bạn.）', answer: ['了', 'le'], hint: 'le – trợ từ hoàn thành', explain: '了 cuối câu cho biết sự việc đã xảy ra.' },
          { type: 'mc', q: '已经 nghĩa là:', options: ['đã', 'sẽ', 'đang'], answer: 0, explain: '已经 yǐjīng (dĩ kinh) = đã, thường đi với 了 ở cuối câu.' },
          { type: 'order', vi: 'Bạn đã từng đến Bắc Kinh chưa?', words: ['去过', '你', '吗？', '北京'], answer: '你 去过 北京 吗？' }
        ]
      },

      // ───────────────────────── HSK2-5 ─────────────────────────
      {
        id: 'zh-hsk2-5',
        icon: '⚽',
        title: 'Sở thích & thể thao',
        goal: 'Nói về môn thể thao, sở thích, mình biết / có thể làm gì và nhận xét ai đó làm việc gì giỏi hay không.',
        vocab: [
          { w: '会', ipa: 'huì', hv: 'hội', vi: 'biết (làm gì, nhờ học)', ex: '我会说一点儿汉语。', exPy: 'Wǒ huì shuō yìdiǎnr Hànyǔ.', exVi: 'Tôi biết nói một chút tiếng Trung.' },
          { w: '能', ipa: 'néng', hv: 'năng', vi: 'có thể (đủ khả năng / điều kiện cho phép)', ex: '我今天很忙，不能去跑步。', exPy: 'Wǒ jīntiān hěn máng, bù néng qù pǎobù.', exVi: 'Hôm nay tôi rất bận, không đi chạy bộ được.' },
          { w: '跑步', ipa: 'pǎobù', hv: 'bão bộ', vi: 'chạy bộ', ex: '他每天早上跑步。', exPy: 'Tā měitiān zǎoshang pǎobù.', exVi: 'Sáng nào anh ấy cũng chạy bộ.' },
          { w: '游泳', ipa: 'yóuyǒng', hv: 'du vịnh', vi: 'bơi', ex: '你会游泳吗？', exPy: 'Nǐ huì yóuyǒng ma?', exVi: 'Bạn biết bơi không?' },
          { w: '踢足球', ipa: 'tī zúqiú', hv: 'thích túc cầu', vi: 'đá bóng', ex: '我喜欢踢足球。', exPy: 'Wǒ xǐhuan tī zúqiú.', exVi: 'Tôi thích đá bóng.' },
          { w: '打篮球', ipa: 'dǎ lánqiú', hv: 'đả lam cầu', vi: 'chơi bóng rổ', ex: '王明篮球打得很好。', exPy: 'Wáng Míng lánqiú dǎ de hěn hǎo.', exVi: 'Vương Minh chơi bóng rổ rất giỏi.' },
          { w: '唱歌', ipa: 'chànggē', hv: 'xướng ca', vi: 'hát', ex: '她唱歌唱得很好听。', exPy: 'Tā chànggē chàng de hěn hǎotīng.', exVi: 'Cô ấy hát rất hay.' },
          { w: '跳舞', ipa: 'tiàowǔ', hv: 'khiêu vũ', vi: 'nhảy, khiêu vũ', ex: '我不会跳舞。', exPy: 'Wǒ bú huì tiàowǔ.', exVi: 'Tôi không biết nhảy.' },
          { w: '运动', ipa: 'yùndòng', hv: 'vận động', vi: 'thể thao, vận động', ex: '你喜欢什么运动？', exPy: 'Nǐ xǐhuan shénme yùndòng?', exVi: 'Bạn thích môn thể thao nào?' },
          { w: '快', ipa: 'kuài', hv: 'khoái', vi: 'nhanh', ex: '他跑得很快。', exPy: 'Tā pǎo de hěn kuài.', exVi: 'Anh ấy chạy rất nhanh.' }
        ],
        grammar: {
          title: '会 / 能 và bổ ngữ trạng thái với 得',
          explain: [
            '会 huì + động từ: BIẾT làm gì nhờ học hoặc luyện tập: 我会游泳 (tôi biết bơi), 我会说汉语. Phủ định: 不会 bú huì.',
            '能 néng + động từ: CÓ THỂ — đủ khả năng đạt mức nào đó, hoặc hoàn cảnh cho phép: 我能游一千米 (tôi bơi được 1000 mét), 今天我感冒了，不能游泳 (hôm nay tôi bị cảm, không bơi được). Phủ định: 不能 bù néng.',
            'Bổ ngữ trạng thái: Động từ + 得 de + (很) + tính từ — nhận xét hành động diễn ra thế nào: 他跑得很快 (anh ấy chạy rất nhanh). Phủ định: 跑得不快. Hỏi: 跑得快不快？ hoặc 跑得怎么样？',
            'Nếu động từ có tân ngữ, phải lặp lại động từ hoặc đưa tân ngữ lên trước: 他说汉语说得很好 = 他汉语说得很好. Không nói ✗ 他说汉语得很好.'
          ],
          table: [
            ['Mẫu', 'Ví dụ', 'Nghĩa'],
            ['会 + V', '我会游泳。', 'Tôi biết bơi.'],
            ['能 + V', '我今天不能游泳。', 'Hôm nay tôi không bơi được.'],
            ['V + 得 + Adj', '他跑得很快。', 'Anh ấy chạy rất nhanh.'],
            ['V + O + V + 得 + Adj', '她唱歌唱得很好听。', 'Cô ấy hát rất hay.']
          ],
          examples: [
            { t: '我会打篮球，但是打得不太好。', py: 'Wǒ huì dǎ lánqiú, dànshì dǎ de bú tài hǎo.', vi: 'Tôi biết chơi bóng rổ, nhưng chơi không giỏi lắm.' },
            { t: '李华游泳游得非常快。', py: 'Lǐ Huá yóuyǒng yóu de fēicháng kuài.', vi: 'Lý Hoa bơi cực kỳ nhanh.' },
            { t: '你汉语说得真好！', py: 'Nǐ Hànyǔ shuō de zhēn hǎo!', vi: 'Bạn nói tiếng Trung giỏi thật!' },
            { t: '你跑得快不快？', py: 'Nǐ pǎo de kuài bu kuài?', vi: 'Bạn chạy có nhanh không?' }
          ],
          tip: 'Mẹo phân biệt: 会 ≈ "biết" (kỹ năng đã học), 能 ≈ "có thể / được" (khả năng, hoàn cảnh). Người Việt hay quên lặp động từ: ✗ 他打篮球得很好 → 他打篮球打得很好. Khi được khen 你汉语说得真好！, người Trung thường khiêm tốn đáp 哪里哪里 (nǎli nǎli – đâu có, đâu có).'
        },
        dialogue: [
          { s: '王明', t: '阮兰，你喜欢什么运动？', py: 'Ruǎn Lán, nǐ xǐhuan shénme yùndòng?', vi: 'Lan ơi, bạn thích môn thể thao nào?' },
          { s: 'Lan', t: '我喜欢游泳和跑步。你呢？', py: 'Wǒ xǐhuan yóuyǒng hé pǎobù. Nǐ ne?', vi: 'Mình thích bơi và chạy bộ. Còn bạn?' },
          { s: '王明', t: '我喜欢打篮球。你会打篮球吗？', py: 'Wǒ xǐhuan dǎ lánqiú. Nǐ huì dǎ lánqiú ma?', vi: 'Mình thích chơi bóng rổ. Bạn biết chơi bóng rổ không?' },
          { s: 'Lan', t: '会一点儿，但是打得不好。听说你打得很好！', py: 'Huì yìdiǎnr, dànshì dǎ de bù hǎo. Tīngshuō nǐ dǎ de hěn hǎo!', vi: 'Biết một chút, nhưng chơi không giỏi. Nghe nói bạn chơi giỏi lắm!' },
          { s: '王明', t: '哪里哪里。这个星期六你能来跟我们一起打吗？', py: 'Nǎli nǎli. Zhège xīngqīliù nǐ néng lái gēn wǒmen yìqǐ dǎ ma?', vi: 'Đâu có đâu. Thứ Bảy này bạn có thể đến chơi cùng bọn mình không?' },
          { s: 'Lan', t: '星期六上午不能，我要上课。下午可以。', py: 'Xīngqīliù shàngwǔ bù néng, wǒ yào shàngkè. Xiàwǔ kěyǐ.', vi: 'Sáng thứ Bảy thì không được, mình phải lên lớp. Buổi chiều thì được.' },
          { s: '王明', t: '好，下午三点见！', py: 'Hǎo, xiàwǔ sān diǎn jiàn!', vi: 'Được, ba giờ chiều gặp nhé!' }
        ],
        exercises: [
          { type: 'mc', q: '我___游泳，但是今天很累，不___游。', options: ['会 / 能', '能 / 会', '会 / 会'], answer: 0, explain: 'Biết bơi (kỹ năng) dùng 会; hôm nay không bơi được (hoàn cảnh) dùng 不能.' },
          { type: 'mc', q: '"Anh ấy chạy rất nhanh." Câu đúng:', options: ['他跑很快得。', '他跑得很快。', '他得跑很快。'], answer: 1, explain: 'Động từ + 得 + 很 + tính từ.' },
          { type: 'fill', q: '她唱歌唱___很好听。（Cô ấy hát rất hay.）', answer: ['得', 'de'], hint: 'de – trợ từ nối bổ ngữ trạng thái', explain: 'V + O + V + 得 + tính từ.' },
          { type: 'order', vi: 'Bạn biết bơi không?', words: ['游泳', '你', '吗？', '会'], answer: '你 会 游泳 吗？' },
          { type: 'mc', q: 'Câu nào đúng?', options: ['他说汉语得很好。', '他说汉语说得很好。', '他说得汉语很好。'], answer: 1, explain: 'Có tân ngữ thì lặp lại động từ trước 得.' },
          { type: 'fill', q: '我感冒了，今天不___去跑步。（Tôi bị cảm, hôm nay không đi chạy được.）', answer: ['能', 'néng', 'neng'], hint: 'néng – có thể (hoàn cảnh cho phép)', explain: 'Vì hoàn cảnh (bị cảm) nên dùng 不能.' },
          { type: 'mc', q: '踢足球 là:', options: ['chơi bóng rổ', 'đá bóng', 'bơi lội'], answer: 1, explain: '踢 tī = đá, 足球 zúqiú (túc cầu) = bóng đá.' },
          { type: 'order', vi: 'Anh ấy chơi bóng rổ rất giỏi.', words: ['很好', '他', '打得', '篮球'], answer: '他 篮球 打得 很好' }
        ]
      },

      // ───────────────────────── HSK2-6 ─────────────────────────
      {
        id: 'zh-hsk2-6',
        icon: '✈️',
        title: 'Kế hoạch tương lai',
        goal: 'Nói về dự định và kế hoạch sắp tới, dự đoán việc sẽ xảy ra và nói "sắp… rồi".',
        vocab: [
          { w: '打算', ipa: 'dǎsuàn', hv: 'đả toán', vi: 'dự định; kế hoạch', ex: '明年我打算去中国留学。', exPy: 'Míngnián wǒ dǎsuàn qù Zhōngguó liúxué.', exVi: 'Sang năm tôi dự định đi du học Trung Quốc.' },
          { w: '要', ipa: 'yào', hv: 'yếu', vi: 'sẽ, sắp (kế hoạch chắc chắn)', ex: '下个月我要去上海。', exPy: 'Xià gè yuè wǒ yào qù Shànghǎi.', exVi: 'Tháng sau tôi sẽ đi Thượng Hải.' },
          { w: '会', ipa: 'huì', hv: 'hội', vi: 'sẽ (dự đoán)', ex: '明天会下雨吗？', exPy: 'Míngtiān huì xià yǔ ma?', exVi: 'Ngày mai có mưa không?' },
          { w: '快要…了', ipa: 'kuàiyào…le', hv: 'khoái yếu … liễu', vi: 'sắp… rồi', ex: '快要考试了。', exPy: 'Kuàiyào kǎoshì le.', exVi: 'Sắp thi rồi.' },
          { w: '明年', ipa: 'míngnián', hv: 'minh niên', vi: 'năm sau, sang năm', ex: '明年我会更忙。', exPy: 'Míngnián wǒ huì gèng máng.', exVi: 'Sang năm tôi sẽ bận hơn.' },
          { w: '以后', ipa: 'yǐhòu', hv: 'dĩ hậu', vi: 'sau này; sau khi', ex: '以后我想当老师。', exPy: 'Yǐhòu wǒ xiǎng dāng lǎoshī.', exVi: 'Sau này tôi muốn làm giáo viên.' },
          { w: '准备', ipa: 'zhǔnbèi', hv: 'chuẩn bị', vi: 'chuẩn bị', ex: '我在准备考试。', exPy: 'Wǒ zài zhǔnbèi kǎoshì.', exVi: 'Tôi đang chuẩn bị thi.' },
          { w: '考试', ipa: 'kǎoshì', hv: 'khảo thí', vi: 'thi; kỳ thi', ex: '下个星期一有汉语考试。', exPy: 'Xià gè xīngqīyī yǒu Hànyǔ kǎoshì.', exVi: 'Thứ Hai tuần sau có bài thi tiếng Trung.' },
          { w: '希望', ipa: 'xīwàng', hv: 'hi vọng', vi: 'hi vọng, mong', ex: '希望你明年能来越南。', exPy: 'Xīwàng nǐ míngnián néng lái Yuènán.', exVi: 'Mong là sang năm bạn có thể đến Việt Nam.' },
          { w: '机场', ipa: 'jīchǎng', hv: 'cơ trường', vi: 'sân bay', ex: '我们三点去机场。', exPy: 'Wǒmen sān diǎn qù jīchǎng.', exVi: 'Ba giờ chúng tôi ra sân bay.' }
        ],
        grammar: {
          title: 'Nói về tương lai với 要 / 打算 / 会; mẫu 快要…了',
          explain: [
            'Tiếng Trung không chia thì. Để nói về tương lai, dùng từ chỉ thời gian (明天, 下个月, 明年, 以后…) kết hợp với các động từ năng nguyện dưới đây.',
            '要 yào + V: sẽ, sắp — kế hoạch đã khá chắc chắn: 下个月我要去北京. 打算 dǎsuàn (đả toán) + V: dự định, còn đang tính: 我打算明年学开车. Hỏi: 你打算做什么？ Phủ định: 不打算.',
            '会 huì + V: sẽ — dự đoán một việc có khả năng xảy ra: 明天会下雨 (mai sẽ mưa), 他会来的 (anh ấy sẽ đến thôi). Phủ định: 不会.',
            '快要 + V / tính từ + 了 (cũng nói 快…了, 要…了): sắp… rồi, việc sắp xảy ra trong thời gian ngắn: 快要下雨了 (sắp mưa rồi). Nếu có mốc thời gian cụ thể thì dùng 就要…了, không dùng 快要: 明天就要考试了 (✗ 明天快要考试了).'
          ],
          table: [
            ['Mẫu', 'Ý nghĩa', 'Ví dụ'],
            ['要 + V', 'kế hoạch chắc chắn', '我下个月要去北京。'],
            ['打算 + V', 'dự định', '我打算明年学开车。'],
            ['会 + V', 'dự đoán', '明天会下雨。'],
            ['快要…了', 'sắp… rồi', '快要下雨了。'],
            ['Thời gian + 就要…了', 'sắp… (có mốc cụ thể)', '明天就要考试了。']
          ],
          examples: [
            { t: '这个周末你打算做什么？', py: 'Zhège zhōumò nǐ dǎsuàn zuò shénme?', vi: 'Cuối tuần này bạn định làm gì?' },
            { t: '下个星期我要去机场接妈妈。', py: 'Xià gè xīngqī wǒ yào qù jīchǎng jiē māma.', vi: 'Tuần sau tôi sẽ ra sân bay đón mẹ.' },
            { t: '别担心，你会考得很好的。', py: 'Bié dānxīn, nǐ huì kǎo de hěn hǎo de.', vi: 'Đừng lo, bạn sẽ thi tốt thôi.' },
            { t: '快要过年了，大家都很高兴。', py: 'Kuàiyào guònián le, dàjiā dōu hěn gāoxìng.', vi: 'Sắp Tết rồi, mọi người đều rất vui.' },
            { t: '我快要毕业了。', py: 'Wǒ kuàiyào bìyè le.', vi: 'Tôi sắp tốt nghiệp rồi.' }
          ],
          tip: 'Đừng quên 了 ở cuối mẫu 快要…了. Người Việt hay dịch mọi chữ "sẽ" thành 会; nhưng khi nói về kế hoạch của bản thân, dùng 要 hoặc 打算 thường tự nhiên hơn: 明天我要去上海.'
        },
        dialogue: [
          { s: '李华', t: '阮兰，快要放假了，你打算做什么？', py: 'Ruǎn Lán, kuàiyào fàngjià le, nǐ dǎsuàn zuò shénme?', vi: 'Lan ơi, sắp được nghỉ rồi, bạn định làm gì?' },
          { s: 'Lan', t: '我要回越南看爸爸妈妈。', py: 'Wǒ yào huí Yuènán kàn bàba māma.', vi: 'Mình sẽ về Việt Nam thăm bố mẹ.' },
          { s: '李华', t: '你什么时候走？', py: 'Nǐ shénme shíhou zǒu?', vi: 'Khi nào bạn đi?' },
          { s: 'Lan', t: '下个星期五。你呢？你打算去旅游吗？', py: 'Xià gè xīngqīwǔ. Nǐ ne? Nǐ dǎsuàn qù lǚyóu ma?', vi: 'Thứ Sáu tuần sau. Còn bạn? Bạn có định đi du lịch không?' },
          { s: '李华', t: '我还没想好。可能会去云南。', py: 'Wǒ hái méi xiǎng hǎo. Kěnéng huì qù Yúnnán.', vi: 'Mình chưa nghĩ xong. Có lẽ sẽ đi Vân Nam.' },
          { s: 'Lan', t: '云南很漂亮！以后你也来越南玩儿吧！', py: 'Yúnnán hěn piàoliang! Yǐhòu nǐ yě lái Yuènán wánr ba!', vi: 'Vân Nam đẹp lắm! Sau này bạn cũng sang Việt Nam chơi nhé!' },
          { s: '李华', t: '好啊！希望明年能去。', py: 'Hǎo a! Xīwàng míngnián néng qù.', vi: 'Được thôi! Mong là sang năm đi được.' },
          { s: 'Lan', t: '那我们明年在河内见！', py: 'Nà wǒmen míngnián zài Hénèi jiàn!', vi: 'Vậy sang năm mình gặp nhau ở Hà Nội nhé!' }
        ],
        exercises: [
          { type: 'mc', q: '火车___开了。（Tàu sắp chạy rồi.）', options: ['快要', '会', '打算'], answer: 0, explain: '快要…了 = sắp… rồi.' },
          { type: 'mc', q: '"Ngày mai là thi rồi." Câu đúng:', options: ['明天快要考试了。', '明天就要考试了。', '明天就要考试。'], answer: 1, explain: 'Có mốc thời gian cụ thể (明天) thì dùng 就要…了, và không được bỏ 了.' },
          { type: 'fill', q: '这个周末你___做什么？（Cuối tuần này bạn định làm gì?）', answer: ['打算', 'dǎsuàn', 'dasuan'], hint: 'dǎsuàn – dự định', explain: '打算 + V = dự định làm gì.' },
          { type: 'order', vi: 'Tôi định đi du lịch Trung Quốc.', words: ['打算', '我', '中国', '去', '旅游'], answer: '我 打算 去 中国 旅游' },
          { type: 'mc', q: 'Dự báo "Ngày mai sẽ mưa":', options: ['明天会下雨。', '明天打算下雨。', '明天想下雨。'], answer: 0, explain: '会 dùng để dự đoán; trời mưa không thể "dự định" hay "muốn".' },
          { type: 'fill', q: '快要下雨___，我们回家吧。（Sắp mưa rồi, chúng ta về nhà thôi.）', answer: ['了', 'le'], hint: 'le – cuối mẫu 快要…了', explain: 'Mẫu 快要…了 luôn cần 了 ở cuối.' },
          { type: 'mc', q: '准备 nghĩa là:', options: ['hi vọng', 'chuẩn bị', 'tốt nghiệp'], answer: 1, explain: '准备 zhǔnbèi đọc Hán Việt là "chuẩn bị", nghĩa cũng y như vậy.' },
          { type: 'order', vi: 'Tôi sắp tốt nghiệp rồi.', words: ['毕业', '我', '了', '快要'], answer: '我 快要 毕业 了' }
        ]
      }
    ]
  }
]);
