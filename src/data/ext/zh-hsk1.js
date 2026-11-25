// Phần bổ sung bài học tiếng Trung – HSK1 (xem src/data/SCHEMA.md)
export default {
  // ───────────────────────── HSK1-1: Chào hỏi & giới thiệu ─────────────────────────
  'zh-hsk1-1': {
    vocab: [
      { w: '请问', ipa: 'qǐngwèn', hv: 'thỉnh vấn', vi: 'xin hỏi, cho hỏi', ex: '请问，你叫什么名字？', exPy: 'Qǐngwèn, nǐ jiào shénme míngzi?', exVi: 'Xin hỏi, bạn tên là gì?' },
      { w: '介绍', ipa: 'jièshào', hv: 'giới thiệu', vi: 'giới thiệu', ex: '我介绍一下，这是我同学李华。', exPy: 'Wǒ jièshào yíxià, zhè shì wǒ tóngxué Lǐ Huá.', exVi: 'Để tôi giới thiệu một chút, đây là bạn học của tôi, Lý Hoa.' },
      { w: '高兴', ipa: 'gāoxìng', hv: 'cao hứng', vi: 'vui, vui mừng', ex: '认识你，我很高兴。', exPy: 'Rènshi nǐ, wǒ hěn gāoxìng.', exVi: 'Được quen bạn, tôi rất vui.' },
      { w: '同学', ipa: 'tóngxué', hv: 'đồng học', vi: 'bạn học, bạn cùng lớp', ex: '他是我的同学。', exPy: 'Tā shì wǒ de tóngxué.', exVi: 'Anh ấy là bạn cùng lớp của tôi.' },
      { w: '先生', ipa: 'xiānsheng', hv: 'tiên sinh', vi: 'ông, anh, ngài (gọi nam giới lịch sự)', ex: '王先生，你好！', exPy: 'Wáng xiānsheng, nǐ hǎo!', exVi: 'Chào ông Vương!' },
      { w: '小姐', ipa: 'xiǎojiě', hv: 'tiểu thư', vi: 'cô (họ + 小姐; gọi trống dễ bị hiểu sai)', ex: '李小姐是老师吗？', exPy: 'Lǐ xiǎojiě shì lǎoshī ma?', exVi: 'Cô Lý là giáo viên à?' },
      { w: '不客气', ipa: 'bú kèqi', hv: 'bất khách khí', vi: 'không có gì (đáp lại lời cảm ơn)', ex: '——谢谢！——不客气！', exPy: '— Xièxie! — Bú kèqi!', exVi: '— Cảm ơn! — Không có gì!' },
      { w: '对不起', ipa: 'duìbuqǐ', hv: 'đối bất khởi', vi: 'xin lỗi', ex: '对不起，我不是王老师。', exPy: 'Duìbuqǐ, wǒ bú shì Wáng lǎoshī.', exVi: 'Xin lỗi, tôi không phải thầy Vương.' },
      { w: '没关系', ipa: 'méi guānxi', hv: 'một quan hệ', vi: 'không sao, không có gì (đáp lại lời xin lỗi)', ex: '——对不起！——没关系。', exPy: '— Duìbuqǐ! — Méi guānxi.', exVi: '— Xin lỗi! — Không sao.' },
      { w: '请坐', ipa: 'qǐng zuò', hv: 'thỉnh toạ', vi: 'mời ngồi', ex: '王先生，请坐！', exPy: 'Wáng xiānsheng, qǐng zuò!', exVi: 'Mời ông Vương ngồi!' }
    ],
    exercises: [
      { type: 'mc', q: '——谢谢！——___', options: ['不客气。', '没关系。', '对不起。'], answer: 0, explain: '不客气 (không có gì) dùng để đáp lại lời cảm ơn.' },
      { type: 'mc', q: '——对不起！——___', options: ['不客气。', '没关系。', '再见。'], answer: 1, explain: '没关系 (không sao) dùng để đáp lại lời xin lỗi.' },
      { type: 'fill', q: '___，你是李老师吗？（Xin hỏi, cô có phải cô giáo Lý không?）', answer: ['请问', 'qǐngwèn', 'qingwen'], hint: 'qǐngwèn – xin hỏi', explain: '请问 đặt ở đầu câu để hỏi một cách lịch sự.' },
      { type: 'order', vi: 'Xin hỏi, ông có phải là ông Vương không?', words: ['王先生', '你', '请问，', '是', '吗？'], answer: '请问， 你 是 王先生 吗？' },
      { type: 'mc', q: 'Muốn gọi lịch sự một người đàn ông họ Vương, ta nói:', options: ['王小姐', '王先生', '王同学'], answer: 1, explain: '先生 dùng cho nam giới; họ đứng trước: 王先生. Với phụ nữ, cách gọi trang trọng an toàn nhất là 女士 nǚshì (王女士), còn 小姐 nên đi kèm họ (王小姐).' },
      { type: 'fill', q: '我___一下，这是我的同学李华。（Tôi giới thiệu một chút, đây là bạn học của tôi, Lý Hoa.）', answer: ['介绍', 'jièshào', 'jieshao'], hint: 'jièshào – giới thiệu', explain: '介绍一下 = giới thiệu một chút.' },
      { type: 'order', vi: 'Cô ấy là bạn học của bạn à?', words: ['同学', '她', '你的', '是', '吗？'], answer: '她 是 你的 同学 吗？' },
      { type: 'mc', q: 'Ở nhà hàng tại Trung Quốc đại lục, muốn gọi nhân viên (nữ) một cách lịch sự, nên nói:', options: ['小姐！', '服务员！', '女士们！'], answer: 1, explain: 'Gọi trống 小姐！ ở đại lục ngày nay dễ bị hiểu theo nghĩa xấu (gái làm nghề nhạy cảm), nên ở nhà hàng, cửa hàng hãy gọi 服务员 fúwùyuán (nhân viên phục vụ). Với phụ nữ không quen trong hoàn cảnh trang trọng, dùng 女士 nǚshì (王女士 = bà/chị Vương). 小姐 chỉ an toàn khi đi kèm họ (李小姐) hoặc ở Đài Loan, Hồng Kông.' }
    ],
    reading: {
      title: '新同学',
      titleVi: 'Bạn học mới',
      text: [
        '今天我们班有一个新同学。老师说：“她叫阮兰，是越南人。”',
        '阮兰说：“认识你们很高兴！”我说：“请坐！”她说：“谢谢！”我说：“不客气。”',
        '阮兰问我：“请问，李老师是汉语老师吗？”我说：“对。”'
      ],
      py: [
        'Jīntiān wǒmen bān yǒu yí gè xīn tóngxué. Lǎoshī shuō: “Tā jiào Ruǎn Lán, shì Yuènánrén.”',
        'Ruǎn Lán shuō: “Rènshi nǐmen hěn gāoxìng!” Wǒ shuō: “Qǐng zuò!” Tā shuō: “Xièxie!” Wǒ shuō: “Bú kèqi.”',
        'Ruǎn Lán wèn wǒ: “Qǐngwèn, Lǐ lǎoshī shì Hànyǔ lǎoshī ma?” Wǒ shuō: “Duì.”'
      ],
      vi: [
        'Hôm nay lớp chúng tôi có một bạn học mới. Cô giáo nói: “Bạn ấy tên là Nguyễn Lan, là người Việt Nam.”',
        'Nguyễn Lan nói: “Rất vui được làm quen với các bạn!” Tôi nói: “Mời bạn ngồi!” Bạn ấy nói: “Cảm ơn!” Tôi nói: “Không có gì.”',
        'Nguyễn Lan hỏi tôi: “Cho mình hỏi, cô Lý là giáo viên tiếng Trung à?” Tôi nói: “Đúng rồi.”'
      ],
      questions: [
        { q: 'Bạn học mới tên là gì?', options: ['Lý Hoa', 'Nguyễn Lan', 'Vương Minh', 'Cô Lý'], answer: 1, explain: 'Cô giáo giới thiệu: 她叫阮兰 (bạn ấy tên là Nguyễn Lan).' },
        { q: 'Bạn học mới là người nước nào?', options: ['Trung Quốc', 'Mỹ', 'Việt Nam'], answer: 2, explain: '是越南人 – là người Việt Nam.' },
        { q: 'Khi Nguyễn Lan nói "谢谢", người kể chuyện ("tôi") đáp lại thế nào?', options: ['不客气', '没关系', '对不起', '再见'], answer: 0, explain: '"Tôi" nói 不客气 (không có gì) để đáp lời cảm ơn.' },
        { q: 'Cô Lý dạy môn gì?', options: ['Tiếng Anh', 'Tiếng Trung', 'Tiếng Việt'], answer: 1, explain: 'Lan hỏi cô Lý có phải 汉语老师 (giáo viên tiếng Trung) không, và "tôi" trả lời 对 (đúng).' }
      ]
    }
  },

  // ───────────────────────── HSK1-2: Số đếm, tuổi & quốc tịch ─────────────────────────
  'zh-hsk1-2': {
    vocab: [
      { w: '零', ipa: 'líng', hv: 'linh', vi: 'số không (0); lẻ (trong số như 105)', ex: '我爷爷今年一百零一岁。', exPy: 'Wǒ yéye jīnnián yìbǎi líng yī suì.', exVi: 'Ông nội tôi năm nay một trăm lẻ một tuổi.' },
      { w: '二', ipa: 'èr', hv: 'nhị', vi: 'hai (khi đếm, đọc số)', ex: '我今年二十二岁。', exPy: "Wǒ jīnnián èrshí'èr suì.", exVi: 'Năm nay tôi hai mươi hai tuổi.' },
      { w: '两', ipa: 'liǎng', hv: 'lưỡng', vi: 'hai (dùng trước lượng từ)', ex: '我有两个中国朋友。', exPy: 'Wǒ yǒu liǎng gè Zhōngguó péngyou.', exVi: 'Tôi có hai người bạn Trung Quốc.' },
      { w: '百', ipa: 'bǎi', hv: 'bách', vi: 'trăm', ex: '我们学校有八百个学生。', exPy: 'Wǒmen xuéxiào yǒu bābǎi gè xuésheng.', exVi: 'Trường chúng tôi có tám trăm học sinh.' },
      { w: '国家', ipa: 'guójiā', hv: 'quốc gia', vi: 'đất nước, quốc gia', ex: '你是哪个国家的人？', exPy: 'Nǐ shì nǎge guójiā de rén?', exVi: 'Bạn là người nước nào?' },
      { w: '外国', ipa: 'wàiguó', hv: 'ngoại quốc', vi: 'nước ngoài', ex: '我们班有很多外国学生。', exPy: 'Wǒmen bān yǒu hěn duō wàiguó xuésheng.', exVi: 'Lớp chúng tôi có nhiều sinh viên nước ngoài.' },
      { w: '汉语', ipa: 'Hànyǔ', hv: 'Hán ngữ', vi: 'tiếng Hán, tiếng Trung', ex: '他是美国人，汉语很好。', exPy: 'Tā shì Měiguórén, Hànyǔ hěn hǎo.', exVi: 'Anh ấy là người Mỹ, tiếng Trung rất giỏi.' },
      { w: '北京', ipa: 'Běijīng', hv: 'Bắc Kinh', vi: 'Bắc Kinh', ex: '李华是北京人。', exPy: 'Lǐ Huá shì Běijīngrén.', exVi: 'Lý Hoa là người Bắc Kinh.' },
      { w: '去年', ipa: 'qùnián', hv: 'khứ niên', vi: 'năm ngoái', ex: '去年我十九岁，今年二十岁。', exPy: 'Qùnián wǒ shíjiǔ suì, jīnnián èrshí suì.', exVi: 'Năm ngoái tôi mười chín tuổi, năm nay hai mươi tuổi.' },
      { w: '大学生', ipa: 'dàxuéshēng', hv: 'đại học sinh', vi: 'sinh viên đại học', ex: '我哥哥是大学生。', exPy: 'Wǒ gēge shì dàxuéshēng.', exVi: 'Anh trai tôi là sinh viên đại học.' }
    ],
    exercises: [
      { type: 'mc', q: '我有___个妹妹。（Tôi có hai em gái.）', options: ['二', '两', '十'], answer: 1, explain: 'Trước lượng từ (个, 本, 件…) dùng 两, không dùng 二: 两个妹妹.' },
      { type: 'mc', q: 'Số 102 đọc là:', options: ['一百二', '一百零二', '一零二'], answer: 1, explain: 'Số 0 ở giữa đọc là 零: 一百零二. Còn 一百二 là 120.' },
      { type: 'fill', q: '我今年二十岁，___十九岁。（Năm nay tôi 20 tuổi, năm ngoái 19 tuổi.）', answer: ['去年', 'qùnián', 'qunian'], hint: 'qùnián – năm ngoái', explain: '去年 = năm ngoái, 今年 = năm nay.' },
      { type: 'order', vi: 'Bạn là người nước nào?', words: ['国家', '你', '的', '是', '哪个', '人？'], answer: '你 是 哪个 国家 的 人？' },
      { type: 'fill', q: '李华是___人。（Lý Hoa là người Bắc Kinh.）', answer: ['北京', 'Běijīng', 'beijing'], hint: 'Běijīng – Bắc Kinh', explain: 'Tên nơi chốn + 人 = người ở đó: 北京人, 越南人.' },
      { type: 'mc', q: '外国 nghĩa là gì?', options: ['Nước ngoài', 'Trung Quốc', 'Quê nhà'], answer: 0, explain: '外 = ngoài, 国 = nước: 外国 = nước ngoài; 外国人 = người nước ngoài.' },
      { type: 'order', vi: 'Anh trai tôi là sinh viên đại học.', words: ['大学生', '我', '是', '哥哥'], answer: '我 哥哥 是 大学生' },
      { type: 'mc', q: '他是美国人，___很好。（Anh ấy là người Mỹ, tiếng Trung rất giỏi.）', options: ['汉语', '国家', '北京'], answer: 0, explain: '汉语 Hànyǔ = tiếng Trung.' }
    ],
    reading: {
      title: '我们班的外国同学',
      titleVi: 'Những bạn học nước ngoài trong lớp tôi',
      text: [
        '我叫阮兰，是越南人，今年二十岁。我是北京的大学生，在学校学习汉语。',
        '我们班有十八个学生，都是外国人。大卫是美国人，他今年二十二岁。',
        '李老师是中国人。去年她三十九岁，今年四十岁。她说我们的汉语都很好。'
      ],
      py: [
        'Wǒ jiào Ruǎn Lán, shì Yuènánrén, jīnnián èrshí suì. Wǒ shì Běijīng de dàxuéshēng, zài xuéxiào xuéxí Hànyǔ.',
        "Wǒmen bān yǒu shíbā gè xuésheng, dōu shì wàiguórén. Dàwèi shì Měiguórén, tā jīnnián èrshí'èr suì.",
        'Lǐ lǎoshī shì Zhōngguórén. Qùnián tā sānshíjiǔ suì, jīnnián sìshí suì. Tā shuō wǒmen de Hànyǔ dōu hěn hǎo.'
      ],
      vi: [
        'Tôi tên là Nguyễn Lan, là người Việt Nam, năm nay hai mươi tuổi. Tôi là sinh viên đại học ở Bắc Kinh, học tiếng Trung ở trường.',
        'Lớp chúng tôi có mười tám sinh viên, đều là người nước ngoài. David là người Mỹ, năm nay anh ấy hai mươi hai tuổi.',
        'Cô Lý là người Trung Quốc. Năm ngoái cô ba mươi chín tuổi, năm nay bốn mươi tuổi. Cô nói tiếng Trung của chúng tôi đều rất tốt.'
      ],
      questions: [
        { q: 'Nguyễn Lan năm nay bao nhiêu tuổi?', options: ['18 tuổi', '20 tuổi', '22 tuổi', '40 tuổi'], answer: 1, explain: '今年二十岁 – năm nay hai mươi tuổi.' },
        { q: 'Lớp của Lan có bao nhiêu sinh viên?', options: ['10', '18', '20', '80'], answer: 1, explain: '我们班有十八个学生 – lớp có mười tám sinh viên.' },
        { q: 'David là người nước nào?', options: ['Mỹ', 'Trung Quốc', 'Việt Nam'], answer: 0, explain: '大卫是美国人 – David là người Mỹ.' },
        { q: 'Năm ngoái cô Lý bao nhiêu tuổi?', options: ['39 tuổi', '40 tuổi', '30 tuổi', '49 tuổi'], answer: 0, explain: '去年她三十九岁 – năm ngoái cô ba mươi chín tuổi.' }
      ]
    }
  },

  // ───────────────────────── HSK1-3: Gia đình ─────────────────────────
  'zh-hsk1-3': {
    vocab: [
      { w: '爷爷', ipa: 'yéye', hv: '', vi: 'ông nội', ex: '我爷爷今年八十岁。', exPy: 'Wǒ yéye jīnnián bāshí suì.', exVi: 'Ông nội tôi năm nay tám mươi tuổi.' },
      { w: '奶奶', ipa: 'nǎinai', hv: '', vi: 'bà nội', ex: '奶奶很爱我。', exPy: 'Nǎinai hěn ài wǒ.', exVi: 'Bà nội rất thương tôi.' },
      { w: '儿子', ipa: 'érzi', hv: 'nhi tử', vi: 'con trai', ex: '王老师有一个儿子。', exPy: 'Wáng lǎoshī yǒu yí gè érzi.', exVi: 'Thầy Vương có một cậu con trai.' },
      { w: '女儿', ipa: "nǚ'ér", hv: 'nữ nhi', vi: 'con gái', ex: '她女儿今年五岁。', exPy: "Tā nǚ'ér jīnnián wǔ suì.", exVi: 'Con gái chị ấy năm nay năm tuổi.' },
      { w: '孩子', ipa: 'háizi', hv: 'hài tử', vi: 'đứa trẻ; con (cái)', ex: '你有几个孩子？', exPy: 'Nǐ yǒu jǐ gè háizi?', exVi: 'Anh có mấy đứa con?' },
      { w: '家人', ipa: 'jiārén', hv: 'gia nhân', vi: 'người nhà, người trong gia đình', ex: '我很想我的家人。', exPy: 'Wǒ hěn xiǎng wǒ de jiārén.', exVi: 'Tôi rất nhớ người nhà.' },
      { w: '爱', ipa: 'ài', hv: 'ái', vi: 'yêu, thương', ex: '我爱爸爸妈妈。', exPy: 'Wǒ ài bàba māma.', exVi: 'Tôi yêu bố mẹ.' },
      { w: '都', ipa: 'dōu', hv: 'đô', vi: 'đều, tất cả đều', ex: '我哥哥和姐姐都是老师。', exPy: 'Wǒ gēge hé jiějie dōu shì lǎoshī.', exVi: 'Anh trai và chị gái tôi đều là giáo viên.' },
      { w: '住', ipa: 'zhù', hv: 'trú', vi: 'ở, sống (cư trú)', ex: '你家住在哪儿？', exPy: 'Nǐ jiā zhù zài nǎr?', exVi: 'Nhà bạn ở đâu?' },
      { w: '家里', ipa: 'jiāli', hv: '', vi: 'trong nhà, ở nhà', ex: '我家里有五口人。', exPy: 'Wǒ jiāli yǒu wǔ kǒu rén.', exVi: 'Nhà tôi có năm người.' }
    ],
    exercises: [
      { type: 'mc', q: '爸爸的爸爸是___。', options: ['爷爷', '哥哥', '儿子'], answer: 0, explain: 'Bố của bố là 爷爷 (ông nội).' },
      { type: 'mc', q: '我哥哥和姐姐___是老师。（Anh trai và chị gái tôi đều là giáo viên.）', options: ['也', '都', '很'], answer: 1, explain: '都 (đều) đứng sau chủ ngữ số nhiều, trước động từ: 他们都是老师.' },
      { type: 'fill', q: '王老师有一个___，她今年五岁。（Thầy Vương có một cô con gái, năm nay năm tuổi.）', answer: ['女儿', "nǚ'ér", 'nǚér', "nu'er", 'nuer'], hint: "nǚ'ér – con gái", explain: '女儿 = con gái, 儿子 = con trai.' },
      { type: 'order', vi: 'Nhà bạn ở đâu?', words: ['住', '你', '哪儿？', '家', '在'], answer: '你 家 住 在 哪儿？' },
      { type: 'fill', q: '我___爸爸妈妈。（Tôi yêu bố mẹ.）', answer: ['爱', 'ài', 'ai'], hint: 'ài – yêu', explain: '爱 (ái) = yêu, thương.' },
      { type: 'mc', q: '你有几个孩子？ hỏi điều gì?', options: ['Bạn có mấy anh chị em?', 'Bạn có mấy đứa con?', 'Nhà bạn có mấy người?'], answer: 1, explain: '孩子 = đứa trẻ, con cái; 几个孩子 = mấy đứa con.' },
      { type: 'order', vi: 'Bà nội tôi năm nay tám mươi tuổi.', words: ['八十', '奶奶', '今年', '我', '岁'], answer: '我 奶奶 今年 八十 岁', alt: ['今年 我 奶奶 八十 岁'] },
      { type: 'mc', q: '儿子 nghĩa là gì?', options: ['Con trai', 'Con gái', 'Em trai'], answer: 0, explain: '儿子 érzi = con trai; em trai là 弟弟.' }
    ],
    reading: {
      title: '我的家',
      titleVi: 'Gia đình tôi',
      text: [
        '我叫小月，今年十岁。我家里有六口人：爷爷、奶奶、爸爸、妈妈、哥哥和我。',
        '爸爸是医生，妈妈是老师。爷爷奶奶都七十多岁了。',
        '哥哥是大学生，他住在学校，星期六回家。我们都很爱他。'
      ],
      py: [
        'Wǒ jiào Xiǎoyuè, jīnnián shí suì. Wǒ jiāli yǒu liù kǒu rén: yéye, nǎinai, bàba, māma, gēge hé wǒ.',
        'Bàba shì yīshēng, māma shì lǎoshī. Yéye nǎinai dōu qīshí duō suì le.',
        'Gēge shì dàxuéshēng, tā zhù zài xuéxiào, xīngqīliù huí jiā. Wǒmen dōu hěn ài tā.'
      ],
      vi: [
        'Tôi tên là Tiểu Nguyệt, năm nay mười tuổi. Nhà tôi có sáu người: ông nội, bà nội, bố, mẹ, anh trai và tôi.',
        'Bố là bác sĩ, mẹ là giáo viên. Ông bà nội đều đã hơn bảy mươi tuổi.',
        'Anh trai là sinh viên đại học, anh ở trong trường, thứ Bảy mới về nhà. Cả nhà đều rất thương anh.'
      ],
      questions: [
        { q: 'Nhà Tiểu Nguyệt có mấy người?', options: ['4 người', '5 người', '6 người', '7 người'], answer: 2, explain: '我家里有六口人 – nhà tôi có sáu người.' },
        { q: 'Mẹ của Tiểu Nguyệt làm nghề gì?', options: ['Bác sĩ', 'Giáo viên', 'Sinh viên'], answer: 1, explain: '妈妈是老师 – mẹ là giáo viên; bố mới là bác sĩ.' },
        { q: 'Anh trai của Tiểu Nguyệt sống ở đâu?', options: ['Ở nhà', 'Ở trường', 'Ở nhà ông bà'], answer: 1, explain: '他住在学校 – anh ấy ở trong trường.' },
        { q: 'Khi nào anh trai về nhà?', options: ['Thứ Bảy', 'Chủ nhật', 'Mỗi tối'], answer: 0, explain: '星期六回家 – thứ Bảy về nhà.' }
      ]
    }
  },

  // ───────────────────────── HSK1-4: Đồ vật & màu sắc ─────────────────────────
  'zh-hsk1-4': {
    vocab: [
      { w: '东西', ipa: 'dōngxi', hv: 'đông tây', vi: 'đồ, đồ vật, đồ đạc', ex: '这是什么东西？', exPy: 'Zhè shì shénme dōngxi?', exVi: 'Đây là đồ gì vậy?' },
      { w: '书包', ipa: 'shūbāo', hv: 'thư bao', vi: 'cặp sách', ex: '我的书包是红色的。', exPy: 'Wǒ de shūbāo shì hóngsè de.', exVi: 'Cặp sách của tôi màu đỏ.' },
      { w: '本子', ipa: 'běnzi', hv: 'bản tử', vi: 'quyển vở', ex: '这个本子是白色的。', exPy: 'Zhège běnzi shì báisè de.', exVi: 'Quyển vở này màu trắng.' },
      { w: '手机', ipa: 'shǒujī', hv: 'thủ cơ', vi: 'điện thoại di động', ex: '你的手机是新的吗？', exPy: 'Nǐ de shǒujī shì xīn de ma?', exVi: 'Điện thoại của bạn mới à?' },
      { w: '桌子', ipa: 'zhuōzi', hv: 'trác tử', vi: 'cái bàn', ex: '我的书在桌子上。', exPy: 'Wǒ de shū zài zhuōzi shang.', exVi: 'Sách của tôi ở trên bàn.' },
      { w: '这些', ipa: 'zhèxiē', hv: '', vi: 'những … này', ex: '这些衣服都是我的。', exPy: 'Zhèxiē yīfu dōu shì wǒ de.', exVi: 'Những bộ quần áo này đều là của tôi.' },
      { w: '那些', ipa: 'nàxiē', hv: '', vi: 'những … kia', ex: '那些书是谁的？', exPy: 'Nàxiē shū shì shéi de?', exVi: 'Những quyển sách kia là của ai?' },
      { w: '新', ipa: 'xīn', hv: 'tân', vi: 'mới', ex: '这是我的新书包。', exPy: 'Zhè shì wǒ de xīn shūbāo.', exVi: 'Đây là cặp sách mới của tôi.' },
      { w: '大', ipa: 'dà', hv: 'đại', vi: 'to, lớn', ex: '这个杯子很大。', exPy: 'Zhège bēizi hěn dà.', exVi: 'Cái cốc này rất to.' },
      { w: '小', ipa: 'xiǎo', hv: 'tiểu', vi: 'nhỏ, bé', ex: '那个白色的杯子很小。', exPy: 'Nàge báisè de bēizi hěn xiǎo.', exVi: 'Cái cốc màu trắng kia rất nhỏ.' }
    ],
    exercises: [
      { type: 'mc', q: '___书都是我的。（Những quyển sách này đều là của tôi.）', options: ['这些', '这个', '哪些'], answer: 0, explain: '这些 = những … này (số nhiều); 这个 chỉ một cái.' },
      { type: 'fill', q: '我的书在___上。（Sách của tôi ở trên bàn.）', answer: ['桌子', 'zhuōzi', 'zhuozi'], hint: 'zhuōzi – cái bàn', explain: '桌子上 = trên bàn.' },
      { type: 'mc', q: 'Từ nào trái nghĩa với 大?', options: ['小', '新', '多'], answer: 0, explain: '大 (to) ↔ 小 (nhỏ).' },
      { type: 'order', vi: 'Đây là cặp sách mới của tôi.', words: ['新', '这', '书包', '是', '我的'], answer: '这 是 我的 新 书包' },
      { type: 'mc', q: '手机 là gì?', options: ['Máy tính', 'Điện thoại di động', 'Tivi'], answer: 1, explain: '手 = tay, 机 = máy: 手机 = điện thoại di động.' },
      { type: 'fill', q: '那个杯子很___，这个杯子很小。（Cái cốc kia rất to, cái cốc này rất nhỏ.）', answer: ['大', 'dà', 'da'], hint: 'dà – to', explain: '大 = to, lớn; trái nghĩa là 小.' },
      { type: 'order', vi: 'Những quyển vở kia là của ai?', words: ['本子', '那些', '谁', '是', '的？'], answer: '那些 本子 是 谁 的？' },
      { type: 'mc', q: '这是什么___？（Đây là đồ gì vậy?）', options: ['东西', '这些', '书包'], answer: 0, explain: '东西 dōngxi = đồ vật; 什么东西 = đồ gì.' }
    ],
    reading: {
      title: '我的书包',
      titleVi: 'Chiếc cặp sách của tôi',
      text: [
        '这是我的新书包，是妈妈给我买的。我的书包不大，是白的。',
        '书包里有很多东西：三本书、两个本子、一个杯子和一个手机。',
        '桌子上的那些书不是我的，是我哥哥的。他的书包很大，也是新的。'
      ],
      py: [
        'Zhè shì wǒ de xīn shūbāo, shì māma gěi wǒ mǎi de. Wǒ de shūbāo bú dà, shì bái de.',
        'Shūbāo li yǒu hěn duō dōngxi: sān běn shū, liǎng gè běnzi, yí gè bēizi hé yí gè shǒujī.',
        'Zhuōzi shang de nàxiē shū bú shì wǒ de, shì wǒ gēge de. Tā de shūbāo hěn dà, yě shì xīn de.'
      ],
      vi: [
        'Đây là cặp sách mới của tôi, mẹ mua cho tôi. Cặp của tôi không to, màu trắng.',
        'Trong cặp có rất nhiều đồ: ba quyển sách, hai quyển vở, một cái cốc và một chiếc điện thoại.',
        'Mấy quyển sách trên bàn kia không phải của tôi, mà là của anh trai tôi. Cặp của anh ấy rất to, cũng là cặp mới.'
      ],
      questions: [
        { q: 'Ai mua cặp sách mới cho "tôi"?', options: ['Bố', 'Mẹ', 'Anh trai', 'Bạn học'], answer: 1, explain: '是妈妈给我买的 – mẹ mua cho tôi.' },
        { q: 'Cặp sách của "tôi" màu gì?', options: ['Màu đỏ', 'Màu trắng', 'Màu đen'], answer: 1, explain: '我的书包不大，是白的 – cặp của tôi màu trắng.' },
        { q: 'Trong cặp có mấy quyển vở?', options: ['Một quyển', 'Hai quyển', 'Ba quyển'], answer: 1, explain: '两个本子 – hai quyển vở (ba quyển là sách: 三本书).' },
        { q: 'Những quyển sách trên bàn là của ai?', options: ['Của "tôi"', 'Của mẹ', 'Của anh trai'], answer: 2, explain: '是我哥哥的 – là của anh trai tôi.' }
      ]
    }
  },

  // ───────────────────────── HSK1-5: Thói quen hằng ngày ─────────────────────────
  'zh-hsk1-5': {
    vocab: [
      { w: '上午', ipa: 'shàngwǔ', hv: 'thượng ngọ', vi: 'buổi sáng (trước trưa)', ex: '我上午在学校上课。', exPy: 'Wǒ shàngwǔ zài xuéxiào shàngkè.', exVi: 'Buổi sáng tôi học ở trường.' },
      { w: '中午', ipa: 'zhōngwǔ', hv: 'trung ngọ', vi: 'buổi trưa', ex: '中午你在哪儿吃饭？', exPy: 'Zhōngwǔ nǐ zài nǎr chīfàn?', exVi: 'Buổi trưa bạn ăn cơm ở đâu?' },
      { w: '上班', ipa: 'shàngbān', hv: 'thượng ban', vi: 'đi làm, vào làm', ex: '我爸爸八点上班。', exPy: 'Wǒ bàba bā diǎn shàngbān.', exVi: 'Bố tôi vào làm lúc tám giờ.' },
      { w: '下班', ipa: 'xiàbān', hv: 'hạ ban', vi: 'tan làm', ex: '妈妈下午五点下班。', exPy: 'Māma xiàwǔ wǔ diǎn xiàbān.', exVi: 'Mẹ tan làm lúc năm giờ chiều.' },
      { w: '上课', ipa: 'shàngkè', hv: 'thượng khoá', vi: 'vào học, lên lớp', ex: '我们早上八点上课。', exPy: 'Wǒmen zǎoshang bā diǎn shàngkè.', exVi: 'Chúng tôi vào học lúc tám giờ sáng.' },
      { w: '下课', ipa: 'xiàkè', hv: 'hạ khoá', vi: 'tan học, hết giờ học', ex: '我们十二点下课。', exPy: "Wǒmen shí'èr diǎn xiàkè.", exVi: 'Chúng tôi tan học lúc mười hai giờ.' },
      { w: '早饭', ipa: 'zǎofàn', hv: 'tảo phạn', vi: 'bữa sáng', ex: '你吃早饭了吗？', exPy: 'Nǐ chī zǎofàn le ma?', exVi: 'Bạn ăn sáng chưa?' },
      { w: '回家', ipa: 'huí jiā', hv: 'hồi gia', vi: 'về nhà', ex: '他晚上六点回家。', exPy: 'Tā wǎnshang liù diǎn huí jiā.', exVi: 'Anh ấy về nhà lúc sáu giờ tối.' },
      { w: '常常', ipa: 'chángcháng', hv: 'thường thường', vi: 'thường, thường xuyên', ex: '我常常在家看书。', exPy: 'Wǒ chángcháng zài jiā kàn shū.', exVi: 'Tôi thường đọc sách ở nhà.' },
      { w: '有时候', ipa: 'yǒu shíhou', hv: 'hữu thời hậu', vi: 'có khi, đôi khi', ex: '有时候我中午不吃饭。', exPy: 'Yǒu shíhou wǒ zhōngwǔ bù chīfàn.', exVi: 'Đôi khi buổi trưa tôi không ăn cơm.' }
    ],
    exercises: [
      { type: 'mc', q: 'Câu nào đúng trật tự?', options: ['我在家八点吃早饭。', '我八点在家吃早饭。', '我吃早饭八点在家。'], answer: 1, explain: 'Trật tự: Chủ ngữ + Thời gian + 在 + Nơi chốn + Động từ: 我八点在家吃早饭.' },
      { type: 'fill', q: '爸爸早上八点___，下午五点下班。（Bố vào làm lúc 8 giờ sáng, tan làm lúc 5 giờ chiều.）', answer: ['上班', 'shàngbān', 'shangban'], hint: 'shàngbān – đi làm', explain: '上班 = đi làm, 下班 = tan làm.' },
      { type: 'order', vi: 'Tôi thường đọc sách ở nhà.', words: ['在', '常常', '我', '看', '书', '家'], answer: '我 常常 在 家 看 书' },
      { type: 'mc', q: '下课 nghĩa là gì?', options: ['Vào học', 'Tan học', 'Tan làm'], answer: 1, explain: '上课 = vào học, 下课 = tan học; 下班 mới là tan làm.' },
      { type: 'fill', q: '我___在图书馆看书。（Tôi thường đọc sách ở thư viện.）', answer: ['常常', 'chángcháng', 'changchang'], hint: 'chángcháng – thường xuyên', explain: '常常 đứng sau chủ ngữ, trước 在 + nơi chốn.' },
      { type: 'order', vi: 'Bạn ăn sáng chưa?', words: ['早饭', '你', '了', '吃', '吗？'], answer: '你 吃 早饭 了 吗？', alt: ['你 吃 了 早饭 吗？'] },
      { type: 'mc', q: '有时候 nghĩa là gì?', options: ['Luôn luôn', 'Đôi khi', 'Bây giờ'], answer: 1, explain: '有时候 yǒu shíhou = có khi, đôi khi.' },
      { type: 'mc', q: '他晚上六点___。（Anh ấy về nhà lúc sáu giờ tối.）', options: ['回家', '上课', '上班'], answer: 0, explain: '回家 huí jiā = về nhà.' }
    ],
    reading: {
      title: '我的一天',
      titleVi: 'Một ngày của tôi',
      text: [
        '我是大学生。我早上六点起床，七点吃早饭。上午八点上课，十二点下课。',
        '中午我常常在学校吃饭，有时候回家吃。下午我在图书馆看书。',
        '妈妈晚上六点下班。晚上我们在家吃饭、看电视，我十一点睡觉。'
      ],
      py: [
        "Wǒ shì dàxuéshēng. Wǒ zǎoshang liù diǎn qǐchuáng, qī diǎn chī zǎofàn. Shàngwǔ bā diǎn shàngkè, shí'èr diǎn xiàkè.",
        'Zhōngwǔ wǒ chángcháng zài xuéxiào chīfàn, yǒu shíhou huí jiā chī. Xiàwǔ wǒ zài túshūguǎn kàn shū.',
        'Māma wǎnshang liù diǎn xiàbān. Wǎnshang wǒmen zài jiā chīfàn, kàn diànshì, wǒ shíyī diǎn shuìjiào.'
      ],
      vi: [
        'Tôi là sinh viên đại học. Tôi dậy lúc sáu giờ sáng, bảy giờ ăn sáng. Buổi sáng tám giờ vào học, mười hai giờ tan học.',
        'Buổi trưa tôi thường ăn cơm ở trường, đôi khi về nhà ăn. Buổi chiều tôi đọc sách ở thư viện.',
        'Mẹ tan làm lúc sáu giờ tối. Buổi tối cả nhà ăn cơm, xem tivi ở nhà, mười một giờ tôi đi ngủ.'
      ],
      questions: [
        { q: '"Tôi" ăn sáng lúc mấy giờ?', options: ['6 giờ', '7 giờ', '8 giờ', '12 giờ'], answer: 1, explain: '七点吃早饭 – bảy giờ ăn sáng (sáu giờ là giờ dậy).' },
        { q: '"Tôi" tan học buổi sáng lúc mấy giờ?', options: ['11 giờ', '12 giờ', '8 giờ'], answer: 1, explain: '十二点下课 – mười hai giờ tan học.' },
        { q: 'Buổi chiều "tôi" làm gì?', options: ['Đọc sách ở thư viện', 'Về nhà ngủ', 'Đi làm'], answer: 0, explain: '下午我在图书馆看书 – buổi chiều tôi đọc sách ở thư viện.' },
        { q: 'Mẹ của "tôi" tan làm lúc mấy giờ?', options: ['5 giờ chiều', '6 giờ tối', '11 giờ tối'], answer: 1, explain: '妈妈晚上六点下班 – mẹ tan làm lúc sáu giờ tối.' }
      ]
    }
  },

  // ───────────────────────── HSK1-6: Đồ ăn & thức uống ─────────────────────────
  'zh-hsk1-6': {
    vocab: [
      { w: '面条儿', ipa: 'miàntiáor', hv: 'miến điều', vi: 'mì sợi, mì', ex: '我早上常常吃面条儿。', exPy: 'Wǒ zǎoshang chángcháng chī miàntiáor.', exVi: 'Buổi sáng tôi thường ăn mì.' },
      { w: '面包', ipa: 'miànbāo', hv: 'miến bao', vi: 'bánh mì', ex: '我想吃面包，喝牛奶。', exPy: 'Wǒ xiǎng chī miànbāo, hē niúnǎi.', exVi: 'Tôi muốn ăn bánh mì, uống sữa.' },
      { w: '鸡蛋', ipa: 'jīdàn', hv: 'kê đản', vi: 'trứng gà', ex: '我要两个鸡蛋。', exPy: 'Wǒ yào liǎng gè jīdàn.', exVi: 'Cho tôi hai quả trứng gà.' },
      { w: '牛奶', ipa: 'niúnǎi', hv: 'ngưu nãi', vi: 'sữa bò, sữa', ex: '你喝不喝牛奶？', exPy: 'Nǐ hē bu hē niúnǎi?', exVi: 'Bạn có uống sữa không?' },
      { w: '肉', ipa: 'ròu', hv: 'nhục', vi: 'thịt', ex: '我不喜欢吃肉。', exPy: 'Wǒ bù xǐhuan chī ròu.', exVi: 'Tôi không thích ăn thịt.' },
      { w: '水果', ipa: 'shuǐguǒ', hv: 'thuỷ quả', vi: 'hoa quả, trái cây', ex: '我很喜欢吃水果。', exPy: 'Wǒ hěn xǐhuan chī shuǐguǒ.', exVi: 'Tôi rất thích ăn trái cây.' },
      { w: '饿', ipa: 'è', hv: 'ngạ', vi: 'đói', ex: '我饿了，我们去吃饭吧。', exPy: 'Wǒ è le, wǒmen qù chīfàn ba.', exVi: 'Tôi đói rồi, chúng ta đi ăn cơm thôi.' },
      { w: '渴', ipa: 'kě', hv: 'khát', vi: 'khát', ex: '你渴吗？请喝水。', exPy: 'Nǐ kě ma? Qǐng hē shuǐ.', exVi: 'Bạn có khát không? Mời uống nước.' },
      { w: '好吃', ipa: 'hǎochī', hv: 'hảo ngật', vi: 'ngon (đồ ăn)', ex: '妈妈做的菜很好吃。', exPy: 'Māma zuò de cài hěn hǎochī.', exVi: 'Món mẹ nấu rất ngon.' },
      { w: '饭店', ipa: 'fàndiàn', hv: 'phạn điếm', vi: 'nhà hàng, quán ăn', ex: '这个饭店的面条儿很好吃。', exPy: 'Zhège fàndiàn de miàntiáor hěn hǎochī.', exVi: 'Mì của nhà hàng này rất ngon.' }
    ],
    exercises: [
      { type: 'mc', q: '你喝___喝牛奶？（Bạn có uống sữa không?）', options: ['不', '没', '吗'], answer: 0, explain: 'Câu hỏi chính phản V不V: 喝不喝.' },
      { type: 'fill', q: '我___了，想吃面包。（Tôi đói rồi, muốn ăn bánh mì.）', answer: ['饿', 'è', 'e'], hint: 'è – đói', explain: '饿 = đói, 渴 = khát.' },
      { type: 'mc', q: '"Cho tôi hai quả trứng gà" – câu nào đúng?', options: ['我要两个鸡蛋。', '我要二个鸡蛋。', '我两个要鸡蛋。'], answer: 0, explain: '要 + số lượng + lượng từ + danh từ; trước lượng từ dùng 两, không dùng 二.' },
      { type: 'order', vi: 'Tôi rất thích ăn trái cây.', words: ['喜欢', '水果', '我', '吃', '很'], answer: '我 很 喜欢 吃 水果' },
      { type: 'mc', q: '渴 nghĩa là gì?', options: ['Đói', 'Khát', 'Ngon'], answer: 1, explain: '渴 kě = khát; 饿 è = đói; 好吃 = ngon.' },
      { type: 'fill', q: '这个饭店的菜很___。（Món ăn của nhà hàng này rất ngon.）', answer: ['好吃', 'hǎochī', 'haochi'], hint: 'hǎochī – ngon', explain: '好吃 = ngon (dùng cho đồ ăn).' },
      { type: 'order', vi: 'Bạn có muốn ăn thịt không?', words: ['肉？', '你', '想不想', '吃'], answer: '你 想不想 吃 肉？' },
      { type: 'mc', q: '饭店 là gì?', options: ['Nhà hàng, quán ăn', 'Hiệu sách', 'Bệnh viện'], answer: 0, explain: '饭 = cơm, 店 = cửa hàng: 饭店 = nhà hàng, quán ăn.' }
    ],
    reading: {
      title: '在饭店',
      titleVi: 'Ở nhà hàng',
      text: [
        '今天中午我很饿，我和朋友阮兰去学校前边的饭店吃饭。',
        '我想吃面条儿和肉。阮兰不喜欢吃肉，她要了米饭和鸡蛋。我们都很渴，要了两杯茶。',
        '这个饭店的菜很好吃。阮兰说：“我们明天还来吧！”'
      ],
      py: [
        'Jīntiān zhōngwǔ wǒ hěn è, wǒ hé péngyou Ruǎn Lán qù xuéxiào qiánbian de fàndiàn chīfàn.',
        'Wǒ xiǎng chī miàntiáor hé ròu. Ruǎn Lán bù xǐhuan chī ròu, tā yào le mǐfàn hé jīdàn. Wǒmen dōu hěn kě, yào le liǎng bēi chá.',
        'Zhège fàndiàn de cài hěn hǎochī. Ruǎn Lán shuō: “Wǒmen míngtiān hái lái ba!”'
      ],
      vi: [
        'Trưa nay tôi rất đói, tôi và bạn Nguyễn Lan đến nhà hàng phía trước trường để ăn cơm.',
        'Tôi muốn ăn mì và thịt. Lan không thích ăn thịt, bạn ấy gọi cơm và trứng gà. Chúng tôi đều rất khát, gọi hai cốc trà.',
        'Món ăn ở nhà hàng này rất ngon. Lan nói: “Ngày mai chúng mình lại đến nhé!”'
      ],
      questions: [
        { q: 'Hai người ăn trưa ở đâu?', options: ['Ở nhà', 'Ở nhà hàng phía trước trường', 'Ở nhà hàng cạnh bệnh viện'], answer: 1, explain: '去学校前边的饭店吃饭 – đến nhà hàng phía trước trường ăn cơm.' },
        { q: 'Nguyễn Lan gọi món gì?', options: ['Mì và thịt', 'Cơm và trứng gà', 'Bánh mì và sữa'], answer: 1, explain: '她要了米饭和鸡蛋 – bạn ấy gọi cơm và trứng gà; mì và thịt là món của "tôi".' },
        { q: 'Họ gọi đồ uống gì?', options: ['Hai cốc trà', 'Hai cốc sữa', 'Hai cốc nước', 'Hai cốc cà phê'], answer: 0, explain: '要了两杯茶 – gọi hai cốc trà.' },
        { q: 'Nguyễn Lan muốn ngày mai làm gì?', options: ['Lại đến nhà hàng này', 'Ăn ở nhà', 'Đi mua trái cây'], answer: 0, explain: '我们明天还来吧 – ngày mai chúng mình lại đến nhé.' }
      ]
    }
  }
};
