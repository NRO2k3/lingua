// Bài mới chèn vào lộ trình tiếng Trung – HSK1 (xem cuối src/data/SCHEMA.md)
export default [
  // zh-hsk1-1b: Họ tên, giới tính & đại từ
  {
    after: 'zh-hsk1-1',
    unit: {
      id: 'zh-hsk1-1b',
      icon: '🧑‍🤝‍🧑',
      title: 'Họ tên, giới tính & đại từ',
      goal: 'Xưng hô tôi / bạn / anh ấy / cô ấy, nói họ và hỏi họ lịch sự với 您贵姓, hỏi "ai" với 谁, dùng 很, 也, 和 đúng vị trí.',
      vocab: [
        { w: '我', ipa: 'wǒ', hv: 'ngã', vi: 'tôi, mình, tớ', ex: '我是学生。', exPy: 'Wǒ shì xuésheng.', exVi: 'Tôi là học sinh.' },
        { w: '你', ipa: 'nǐ', hv: 'nễ', vi: 'bạn, anh, chị (ngôi thứ hai)', ex: '你是王老师吗？', exPy: 'Nǐ shì Wáng lǎoshī ma?', exVi: 'Anh có phải thầy Vương không?' },
        { w: '您', ipa: 'nín', hv: 'nâm', vi: 'ngài, ông, bà (ngôi thứ hai, kính trọng)', ex: '您好！您是李先生吗？', exPy: 'Nín hǎo! Nín shì Lǐ xiānsheng ma?', exVi: 'Chào ông! Ông có phải là ông Lý không ạ?' },
        { w: '他', ipa: 'tā', hv: 'tha', vi: 'anh ấy, ông ấy (nam)', ex: '他是我同学。', exPy: 'Tā shì wǒ tóngxué.', exVi: 'Anh ấy là bạn cùng lớp của tôi.' },
        { w: '她', ipa: 'tā', hv: 'tha', vi: 'cô ấy, bà ấy (nữ)', ex: '她叫阮兰。', exPy: 'Tā jiào Ruǎn Lán.', exVi: 'Cô ấy tên là Nguyễn Lan.' },
        { w: '我们', ipa: 'wǒmen', hv: 'ngã môn', vi: 'chúng tôi, chúng ta', ex: '我们是同学。', exPy: 'Wǒmen shì tóngxué.', exVi: 'Chúng tôi là bạn cùng lớp.' },
        { w: '他们', ipa: 'tāmen', hv: 'tha môn', vi: 'họ, các anh ấy', ex: '他们是老师吗？', exPy: 'Tāmen shì lǎoshī ma?', exVi: 'Họ là giáo viên à?' },
        { w: '姓', ipa: 'xìng', hv: 'tính', vi: 'họ; mang họ', ex: '我姓王，叫王明。', exPy: 'Wǒ xìng Wáng, jiào Wáng Míng.', exVi: 'Tôi họ Vương, tên là Vương Minh.' },
        { w: '贵姓', ipa: 'guìxìng', hv: 'quý tính', vi: 'quý danh (hỏi họ một cách lịch sự)', ex: '——您贵姓？——我姓李。', exPy: '— Nín guìxìng? — Wǒ xìng Lǐ.', exVi: '— Ông họ gì ạ? — Tôi họ Lý.' },
        { w: '谁', ipa: 'shéi', hv: 'thuỳ', vi: 'ai', ex: '他是谁？', exPy: 'Tā shì shéi?', exVi: 'Anh ấy là ai?' },
        { w: '男', ipa: 'nán', hv: 'nam', vi: 'nam, đàn ông', ex: '王老师是男老师。', exPy: 'Wáng lǎoshī shì nán lǎoshī.', exVi: 'Thầy Vương là giáo viên nam.' },
        { w: '女', ipa: 'nǚ', hv: 'nữ', vi: 'nữ, phụ nữ', ex: '李老师是女老师吗？', exPy: 'Lǐ lǎoshī shì nǚ lǎoshī ma?', exVi: 'Giáo viên họ Lý là cô giáo à?' },
        { w: '男生', ipa: 'nánshēng', hv: 'nam sinh', vi: 'bạn nam, nam sinh', ex: '王明是男生。', exPy: 'Wáng Míng shì nánshēng.', exVi: 'Vương Minh là bạn nam.' },
        { w: '女生', ipa: 'nǚshēng', hv: 'nữ sinh', vi: 'bạn nữ, nữ sinh', ex: '阮兰是女生，不是男生。', exPy: 'Ruǎn Lán shì nǚshēng, bú shì nánshēng.', exVi: 'Nguyễn Lan là bạn nữ, không phải bạn nam.' },
        { w: '很', ipa: 'hěn', hv: 'ngận', vi: 'rất', ex: '我很高兴。', exPy: 'Wǒ hěn gāoxìng.', exVi: 'Tôi rất vui.' },
        { w: '好', ipa: 'hǎo', hv: 'hảo', vi: 'tốt, khoẻ, hay', ex: '——你好吗？——我很好。', exPy: '— Nǐ hǎo ma? — Wǒ hěn hǎo.', exVi: '— Bạn khoẻ không? — Mình khoẻ.' },
        { w: '也', ipa: 'yě', hv: 'dã', vi: 'cũng', ex: '我也是学生。', exPy: 'Wǒ yě shì xuésheng.', exVi: 'Tôi cũng là học sinh.' },
        { w: '和', ipa: 'hé', hv: 'hoà', vi: 'và, với (nối danh từ)', ex: '我和他是同学。', exPy: 'Wǒ hé tā shì tóngxué.', exVi: 'Tôi và anh ấy là bạn cùng lớp.' },
        { w: '不', ipa: 'bù', hv: 'bất', vi: 'không (phủ định)', ex: '我不是老师。', exPy: 'Wǒ bú shì lǎoshī.', exVi: 'Tôi không phải giáo viên.' },
        { w: '对', ipa: 'duì', hv: 'đối', vi: 'đúng', ex: '——你是阮兰吗？——对，我是阮兰。', exPy: '— Nǐ shì Ruǎn Lán ma? — Duì, wǒ shì Ruǎn Lán.', exVi: '— Bạn là Nguyễn Lan à? — Đúng, mình là Nguyễn Lan.' }
      ],
      grammar: {
        title: 'Hỏi họ với 姓 / 贵姓, hỏi "ai" với 谁, câu tính từ với 很, vị trí của 也 và 和',
        explain: [
          'Đại từ nhân xưng: 我 (tôi), 你 (bạn), 您 (ngài, ông/bà – kính trọng), 他 (anh ấy), 她 (cô ấy). 他 và 她 đều đọc tā, chỉ khác chữ viết. Số nhiều thêm 们: 我们, 你们, 他们, 她们. 您 thường không thêm 们; nói với nhiều người thì dùng 你们 hoặc 大家.',
          'Họ và tên: 姓 + họ (我姓王), 叫 + họ tên đầy đủ (我叫王明). Hỏi họ lịch sự: 您贵姓？ (贵 quý = quý giá) → trả lời 我姓王, KHÔNG nói ✗ 我贵姓王 vì 贵 chỉ dùng để tôn trọng người khác. Hỏi "ai": 谁 shéi: 他是谁？ 男 (nam) và 女 (nữ) đứng trước danh từ chỉ người: 男老师, 女老师, 男生, 女生.',
          'Câu tính từ: Chủ ngữ + 很 + tính từ: 我很好, 我很高兴. KHÔNG dùng 是 trước tính từ (✗ 我是很好). 很 ở đây nhiều khi chỉ để câu tròn ý, nghĩa "rất" khá nhẹ. Phủ định: 不 + tính từ: 我不高兴 (bỏ 很).',
          '也 (cũng) luôn đứng SAU chủ ngữ, TRƯỚC động từ/tính từ: 我也是学生, 他也很好. 和 (và) chỉ nối danh từ hoặc đại từ: 我和他, 王老师和李老师; không dùng 和 để nối hai câu (✗ 我是学生和他是老师).'
        ],
        table: [
          ['Mẫu câu', 'Ví dụ', 'Nghĩa'],
          ['姓 + họ', '我姓李。', 'Tôi họ Lý.'],
          ['您贵姓？', '——您贵姓？——我姓王。', '— Ông họ gì ạ? — Tôi họ Vương.'],
          ['… 是谁？', '她是谁？', 'Cô ấy là ai?'],
          ['Chủ ngữ + 很 + tính từ', '我很高兴。', 'Tôi rất vui.'],
          ['Chủ ngữ + 也 + động từ', '他也是学生。', 'Anh ấy cũng là học sinh.'],
          ['A 和 B', '我和她是同学。', 'Tôi và cô ấy là bạn cùng lớp.']
        ],
        examples: [
          { t: '您贵姓？', py: 'Nín guìxìng?', vi: 'Ông (bà) họ gì ạ?' },
          { t: '我姓阮，叫阮兰。', py: 'Wǒ xìng Ruǎn, jiào Ruǎn Lán.', vi: 'Tôi họ Nguyễn, tên là Nguyễn Lan.' },
          { t: '他是谁？他是我们的老师。', py: 'Tā shì shéi? Tā shì wǒmen de lǎoshī.', vi: 'Anh ấy là ai? Anh ấy là thầy giáo của chúng tôi.' },
          { t: '我很好，他也很好。', py: 'Wǒ hěn hǎo, tā yě hěn hǎo.', vi: 'Tôi khoẻ, anh ấy cũng khoẻ.' },
          { t: '王明和阮兰是同学。', py: 'Wáng Míng hé Ruǎn Lán shì tóngxué.', vi: 'Vương Minh và Nguyễn Lan là bạn cùng lớp.' }
        ],
        tip: 'Ba lỗi người Việt hay mắc: (1) dịch "tôi là rất vui" → ✗ 我是很高兴, đúng là 我很高兴; (2) đặt "cũng" lên đầu câu → ✗ 也我是学生, đúng là 我也是学生; (3) trả lời ✗ 我贵姓王, đúng là 我姓王. 谁 có hai cách đọc shéi và shuí, khẩu ngữ thường đọc shéi.'
      },
      dialogue: [
        { s: '王老师', t: '你好！你是学生吗？', py: 'Nǐ hǎo! Nǐ shì xuésheng ma?', vi: 'Chào em! Em là học sinh à?' },
        { s: 'Lan', t: '对，我是学生。老师，您贵姓？', py: 'Duì, wǒ shì xuésheng. Lǎoshī, nín guìxìng?', vi: 'Dạ đúng ạ, em là học sinh. Thưa thầy, thầy họ gì ạ?' },
        { s: '王老师', t: '我姓王。你叫什么名字？', py: 'Wǒ xìng Wáng. Nǐ jiào shénme míngzi?', vi: 'Thầy họ Vương. Em tên là gì?' },
        { s: 'Lan', t: '我姓阮，叫阮兰。王老师，他是谁？', py: 'Wǒ xìng Ruǎn, jiào Ruǎn Lán. Wáng lǎoshī, tā shì shéi?', vi: 'Em họ Nguyễn, tên là Nguyễn Lan. Thầy Vương ơi, bạn kia là ai ạ?' },
        { s: '王老师', t: '他叫大卫，也是学生。', py: 'Tā jiào Dàwèi, yě shì xuésheng.', vi: 'Bạn ấy tên là David, cũng là học sinh.' },
        { s: 'Lan', t: '他和我是同学吗？', py: 'Tā hé wǒ shì tóngxué ma?', vi: 'Bạn ấy và em là bạn cùng lớp ạ?' },
        { s: '王老师', t: '对，你们是同学。', py: 'Duì, nǐmen shì tóngxué.', vi: 'Đúng vậy, hai em là bạn cùng lớp.' },
        { s: 'Lan', t: '我很高兴！谢谢王老师！', py: 'Wǒ hěn gāoxìng! Xièxie Wáng lǎoshī!', vi: 'Em vui quá! Em cảm ơn thầy Vương ạ!' }
      ],
      exercises: [
        { type: 'mc', q: '您___？（Ông họ gì ạ?）', options: ['贵姓', '姓贵', '叫贵'], answer: 0, explain: 'Hỏi họ lịch sự: 您贵姓？' },
        { type: 'mc', q: 'Câu nào đúng với nghĩa "Tôi rất vui"?', options: ['我是很高兴。', '我很高兴。', '我高兴很。'], answer: 1, explain: 'Trước tính từ không dùng 是: Chủ ngữ + 很 + tính từ.' },
        { type: 'mc', q: 'Câu nào đúng với nghĩa "Tôi cũng là học sinh"?', options: ['也我是学生。', '我是也学生。', '我也是学生。'], answer: 2, explain: '也 đứng sau chủ ngữ, trước động từ 是.' },
        { type: 'fill', q: '他是___？（Anh ấy là ai?）', answer: ['谁', 'shéi', 'shei', 'shuí', 'shui'], hint: 'shéi – ai', explain: '谁 = ai, đứng ở chỗ cần hỏi, không thêm 吗.' },
        { type: 'order', vi: 'Tôi và anh ấy là bạn cùng lớp.', words: ['同学', '和', '我', '是', '他'], answer: '我 和 他 是 同学', alt: ['他 和 我 是 同学'] },
        { type: 'mc', q: '——您贵姓？——___', options: ['我贵姓王。', '我姓王。', '您姓王。'], answer: 1, explain: 'Trả lời bằng 我姓…; 贵 chỉ dùng khi hỏi người khác.' },
        { type: 'fill', q: '我___阮，叫阮兰。（Tôi họ Nguyễn, tên là Nguyễn Lan.）', answer: ['姓', 'xìng', 'xing'], hint: 'xìng – họ', explain: '姓 + họ; 叫 + họ tên đầy đủ.' },
        { type: 'mc', q: '她 nghĩa là gì?', options: ['anh ấy', 'chúng tôi', 'cô ấy'], answer: 2, explain: '她 (bộ 女 – nữ) = cô ấy; 他 = anh ấy. Hai chữ đều đọc tā.' },
        { type: 'order', vi: 'Cô ấy cũng là giáo viên.', words: ['老师', '她', '是', '也'], answer: '她 也 是 老师' },
        { type: 'fill', q: '我很好，他___很好。（Tôi khoẻ, anh ấy cũng khoẻ.）', answer: ['也', 'yě', 'ye'], hint: 'yě – cũng', explain: '也 đứng trước 很好.' },
        { type: 'order', vi: 'Anh ấy là ai?', words: ['谁？', '是', '他'], answer: '他 是 谁？' },
        { type: 'fill', q: '——你是学生吗？——___，我是学生。（Đúng, tôi là học sinh.）', answer: ['对', 'duì', 'dui'], hint: 'duì – đúng', explain: '对 = đúng, dùng để xác nhận.' },
        { type: 'mc', q: 'Câu nào dùng 和 đúng?', options: ['我和她是同学。', '我是学生和他是老师。', '我和很好。'], answer: 0, explain: '和 chỉ nối danh từ/đại từ (我和她), không nối hai câu.' },
        { type: 'fill', q: '王老师是___老师。（Thầy Vương là giáo viên nam.）', answer: ['男', 'nán', 'nan'], hint: 'nán – nam', explain: '男 + danh từ chỉ người: 男老师, 男生.' },
        { type: 'order', vi: 'Chúng tôi không phải giáo viên.', words: ['老师', '不', '我们', '是'], answer: '我们 不 是 老师' },
        { type: 'order', vi: 'Rất vui được làm quen với ông.', words: ['认识', '很', '您', '高兴'], answer: '认识 您 很 高兴' }
      ],
      reading: {
        title: '我和我的同学',
        titleVi: 'Tôi và các bạn cùng lớp',
        text: [
          '我姓阮，叫阮兰，我是学生。',
          '我们的老师姓王，是男老师。王老师很好。',
          '大卫也是学生，他和我是同学。李华是女生，她也是我的同学。',
          '王老师问：“你们好吗？”我们说：“我们很好，谢谢老师！”'
        ],
        py: [
          'Wǒ xìng Ruǎn, jiào Ruǎn Lán, wǒ shì xuésheng.',
          'Wǒmen de lǎoshī xìng Wáng, shì nán lǎoshī. Wáng lǎoshī hěn hǎo.',
          'Dàwèi yě shì xuésheng, tā hé wǒ shì tóngxué. Lǐ Huá shì nǚshēng, tā yě shì wǒ de tóngxué.',
          'Wáng lǎoshī wèn: “Nǐmen hǎo ma?” Wǒmen shuō: “Wǒmen hěn hǎo, xièxie lǎoshī!”'
        ],
        vi: [
          'Tôi họ Nguyễn, tên là Nguyễn Lan, tôi là học sinh.',
          'Giáo viên của chúng tôi họ Vương, là thầy giáo. Thầy Vương rất tốt.',
          'David cũng là học sinh, bạn ấy và tôi là bạn cùng lớp. Lý Hoa là bạn nữ, bạn ấy cũng là bạn cùng lớp của tôi.',
          'Thầy Vương hỏi: “Các em khoẻ không?” Chúng tôi nói: “Chúng em khoẻ ạ, cảm ơn thầy!”'
        ],
        questions: [
          { q: 'Nguyễn Lan họ gì?', options: ['Vương', 'Lý', 'Nguyễn'], answer: 2, explain: '我姓阮 – tôi họ Nguyễn.' },
          { q: 'Giáo viên của các bạn là ai?', options: ['Một thầy giáo họ Vương', 'Một cô giáo họ Lý', 'Một thầy giáo họ Lý'], answer: 0, explain: '我们的老师姓王，是男老师。' },
          { q: 'Lý Hoa là ai?', options: ['Giáo viên', 'Bạn nữ cùng lớp', 'Bạn nam cùng lớp'], answer: 1, explain: '李华是女生，她也是我的同学。' },
          { q: 'Ai cũng là học sinh và là bạn cùng lớp của Lan?', options: ['Thầy Vương', 'David', 'Không có ai'], answer: 1, explain: '大卫也是学生，他和我是同学。' }
        ]
      }
    }
  },

  // zh-hsk1-2b: Học tiếng Trung: nghe, nói, đọc, viết
  {
    after: 'zh-hsk1-2',
    unit: {
      id: 'zh-hsk1-2b',
      icon: '✍️',
      title: 'Học tiếng Trung: nghe, nói, đọc, viết',
      goal: 'Nói về việc học: nghe, nói, đọc, viết; hỏi cách đọc / viết một chữ với 怎么, hỏi "… tiếng Trung nói thế nào?" và "… nghĩa là gì?".',
      vocab: [
        { w: '看', ipa: 'kàn', hv: 'khán', vi: 'xem, nhìn, đọc (thầm)', ex: '我看中文书。', exPy: 'Wǒ kàn Zhōngwén shū.', exVi: 'Tôi đọc sách tiếng Trung.' },
        { w: '听', ipa: 'tīng', hv: 'thính', vi: 'nghe', ex: '请听课文。', exPy: 'Qǐng tīng kèwén.', exVi: 'Mời các bạn nghe bài khoá.' },
        { w: '说', ipa: 'shuō', hv: 'thuyết', vi: 'nói', ex: '他说汉语，不说英语。', exPy: 'Tā shuō Hànyǔ, bù shuō Yīngyǔ.', exVi: 'Anh ấy nói tiếng Trung, không nói tiếng Anh.' },
        { w: '读', ipa: 'dú', hv: 'độc', vi: 'đọc (thành tiếng)', ex: '“您”字怎么读？', exPy: '“Nín” zì zěnme dú?', exVi: 'Chữ “您” đọc thế nào?' },
        { w: '写', ipa: 'xiě', hv: 'tả', vi: 'viết', ex: '你的名字怎么写？', exPy: 'Nǐ de míngzi zěnme xiě?', exVi: 'Tên của bạn viết thế nào?' },
        { w: '学习', ipa: 'xuéxí', hv: 'học tập', vi: 'học, học tập', ex: '我们学习汉语。', exPy: 'Wǒmen xuéxí Hànyǔ.', exVi: 'Chúng tôi học tiếng Trung.' },
        { w: '汉字', ipa: 'Hànzì', hv: 'Hán tự', vi: 'chữ Hán', ex: '汉字很难吗？', exPy: 'Hànzì hěn nán ma?', exVi: 'Chữ Hán có khó không?' },
        { w: '字', ipa: 'zì', hv: 'tự', vi: 'chữ', ex: '老师写字，我们看。', exPy: 'Lǎoshī xiě zì, wǒmen kàn.', exVi: 'Thầy viết chữ, chúng tôi nhìn.' },
        { w: '课', ipa: 'kè', hv: 'khoá', vi: 'bài học, tiết học, môn học', ex: '——汉语课难吗？——不难。', exPy: '— Hànyǔ kè nán ma? — Bù nán.', exVi: '— Môn tiếng Trung có khó không? — Không khó.' },
        { w: '课文', ipa: 'kèwén', hv: 'khoá văn', vi: 'bài khoá, bài đọc', ex: '我们读课文。', exPy: 'Wǒmen dú kèwén.', exVi: 'Chúng tôi đọc bài khoá.' },
        { w: '问', ipa: 'wèn', hv: 'vấn', vi: 'hỏi', ex: '我问你，你是哪国人？', exPy: 'Wǒ wèn nǐ, nǐ shì nǎ guó rén?', exVi: 'Mình hỏi bạn, bạn là người nước nào?' },
        { w: '回答', ipa: 'huídá', hv: 'hồi đáp', vi: 'trả lời', ex: '请回答：你叫什么名字？', exPy: 'Qǐng huídá: Nǐ jiào shénme míngzi?', exVi: 'Hãy trả lời: Bạn tên là gì?' },
        { w: '难', ipa: 'nán', hv: 'nan', vi: 'khó', ex: '汉字很难，汉语不难。', exPy: 'Hànzì hěn nán, Hànyǔ bù nán.', exVi: 'Chữ Hán khó, tiếng Trung (nói) không khó.' },
        { w: '怎么', ipa: 'zěnme', hv: 'chẩm ma', vi: 'thế nào, làm sao (hỏi cách làm)', ex: '“谢谢”用英语怎么说？', exPy: '“Xièxie” yòng Yīngyǔ zěnme shuō?', exVi: '“谢谢” tiếng Anh nói thế nào?' },
        { w: '用', ipa: 'yòng', hv: 'dụng', vi: 'dùng, bằng', ex: '请用中文回答。', exPy: 'Qǐng yòng Zhōngwén huídá.', exVi: 'Hãy trả lời bằng tiếng Trung.' },
        { w: '中文', ipa: 'Zhōngwén', hv: 'Trung văn', vi: 'tiếng Trung, chữ Trung Quốc', ex: '他是美国人，他的中文很好。', exPy: 'Tā shì Měiguórén, tā de Zhōngwén hěn hǎo.', exVi: 'Anh ấy là người Mỹ, tiếng Trung của anh ấy rất giỏi.' },
        { w: '英语', ipa: 'Yīngyǔ', hv: 'Anh ngữ', vi: 'tiếng Anh', ex: '李老师是英语老师。', exPy: 'Lǐ lǎoshī shì Yīngyǔ lǎoshī.', exVi: 'Cô Lý là giáo viên tiếng Anh.' },
        { w: '句子', ipa: 'jùzi', hv: 'cú tử', vi: 'câu (văn)', ex: '请用“很”写一个句子。', exPy: 'Qǐng yòng “hěn” xiě yí gè jùzi.', exVi: 'Hãy dùng “很” viết một câu.' },
        { w: '意思', ipa: 'yìsi', hv: 'ý tứ', vi: 'ý nghĩa, nghĩa', ex: '“再见”是什么意思？', exPy: '“Zàijiàn” shì shénme yìsi?', exVi: '“再见” nghĩa là gì?' },
        { w: '生词', ipa: 'shēngcí', hv: 'sinh từ', vi: 'từ mới', ex: '我们学习生词和课文。', exPy: 'Wǒmen xuéxí shēngcí hé kèwén.', exVi: 'Chúng tôi học từ mới và bài khoá.' }
      ],
      grammar: {
        title: 'Động từ + tân ngữ; hỏi cách làm với 怎么 + động từ; "… 用汉语怎么说？"',
        explain: [
          'Trật tự Chủ ngữ + Động từ + Tân ngữ giống tiếng Việt: 我看书, 我们学习汉语, 老师写汉字. Lưu ý 看 vừa là "xem, nhìn" vừa là "đọc thầm" (看书 = đọc sách), còn 读 là đọc thành tiếng (读课文 = đọc to bài khoá).',
          'Hỏi cách làm: 怎么 + động từ: 怎么读？ (đọc thế nào?), 怎么写？ (viết thế nào?), 怎么说？ (nói thế nào?). 怎么 luôn đứng TRƯỚC động từ. Còn 什么 (cái gì) đứng ở chỗ của tân ngữ: 你看什么？ (bạn xem gì?).',
          'Hai câu "cứu cánh" khi học: "X 用汉语怎么说？" (X tiếng Trung nói thế nào?) và "X 是什么意思？" (X nghĩa là gì?). 用 + ngôn ngữ / công cụ đứng TRƯỚC động từ chính: 用中文写 (viết bằng tiếng Trung), 用英语说 (nói bằng tiếng Anh).',
          'Phủ định: 不 + động từ: 我不说英语. 难 (khó) là tính từ, dùng như câu tính từ đã học: 汉字很难, 汉语难吗？'
        ],
        table: [
          ['Mẫu câu', 'Ví dụ', 'Nghĩa'],
          ['怎么 + động từ？', '“您”字怎么读？', 'Chữ “您” đọc thế nào?'],
          ['… 怎么写？', '你的名字怎么写？', 'Tên bạn viết thế nào?'],
          ['X 用汉语怎么说？', '“cảm ơn”用汉语怎么说？', '“cảm ơn” tiếng Trung nói thế nào?'],
          ['X 是什么意思？', '“再见”是什么意思？', '“再见” nghĩa là gì?'],
          ['用 + ngôn ngữ + động từ', '请用中文回答。', 'Hãy trả lời bằng tiếng Trung.']
        ],
        examples: [
          { t: '我们学习汉语。', py: 'Wǒmen xuéxí Hànyǔ.', vi: 'Chúng tôi học tiếng Trung.' },
          { t: '老师，“学”字怎么写？', py: 'Lǎoshī, “xué” zì zěnme xiě?', vi: 'Thưa cô, chữ “学” viết thế nào ạ?' },
          { t: '“生词”是什么意思？', py: '“Shēngcí” shì shénme yìsi?', vi: '“生词” nghĩa là gì?' },
          { t: '“老师”用英语怎么说？', py: '“Lǎoshī” yòng Yīngyǔ zěnme shuō?', vi: '“老师” tiếng Anh nói thế nào?' },
          { t: '请用中文回答。', py: 'Qǐng yòng Zhōngwén huídá.', vi: 'Hãy trả lời bằng tiếng Trung.' }
        ],
        tip: 'Người Việt quen để từ hỏi ở cuối ("đọc thế nào?") nên hay nói ✗ 读怎么？, ✗ 汉语说怎么？. Trong tiếng Trung 怎么 phải đứng trước động từ: 怎么读？, 用汉语怎么说？. Mẹo nhớ nghĩa nhờ âm Hán Việt: 说 thuyết (thuyết trình), 读 độc (độc giả), 写 tả (miêu tả), 听 thính (thính giả), 看 khán (khán giả).'
      },
      dialogue: [
        { s: 'Lan', t: '李老师，“您”字怎么读？', py: 'Lǐ lǎoshī, “nín” zì zěnme dú?', vi: 'Cô Lý ơi, chữ “您” đọc thế nào ạ?' },
        { s: '李老师', t: '跟我读：您。你看课文，“您”是什么意思？', py: 'Gēn wǒ dú: nín. Nǐ kàn kèwén, “nín” shì shénme yìsi?', vi: 'Em đọc theo cô: nín. Em xem bài khoá, “您” nghĩa là gì?' },
        { s: 'Lan', t: '是“你”的意思，对吗？', py: 'Shì “nǐ” de yìsi, duì ma?', vi: 'Nghĩa là “bạn” (cách nói lịch sự), đúng không ạ?' },
        { s: '李老师', t: '对！请用“您”说一个句子。', py: 'Duì! Qǐng yòng “nín” shuō yí gè jùzi.', vi: 'Đúng! Em hãy dùng “您” nói một câu.' },
        { s: 'Lan', t: '老师，您好！您贵姓？', py: 'Lǎoshī, nín hǎo! Nín guìxìng?', vi: 'Em chào cô ạ! Cô họ gì ạ?' },
        { s: '李老师', t: '很好！我姓李。你们学习汉字，难吗？', py: 'Hěn hǎo! Wǒ xìng Lǐ. Nǐmen xuéxí Hànzì, nán ma?', vi: 'Rất tốt! Cô họ Lý. Các em học chữ Hán có khó không?' },
        { s: 'Lan', t: '汉字很难，写汉字也很难。', py: 'Hànzì hěn nán, xiě Hànzì yě hěn nán.', vi: 'Chữ Hán khó lắm ạ, viết chữ Hán cũng khó.' },
        { s: '李老师', t: '不难！我们读课文，写生词。', py: 'Bù nán! Wǒmen dú kèwén, xiě shēngcí.', vi: 'Không khó đâu! Chúng ta đọc bài khoá, viết từ mới nào.' }
      ],
      exercises: [
        { type: 'mc', q: '“谢”字___读？（Chữ “谢” đọc thế nào?）', options: ['什么', '怎么', '哪'], answer: 1, explain: 'Hỏi cách làm: 怎么 + động từ → 怎么读.' },
        { type: 'mc', q: '“再见”是什么___？（“再见” nghĩa là gì?）', options: ['意思', '句子', '生词'], answer: 0, explain: '… 是什么意思？ = … nghĩa là gì?' },
        { type: 'mc', q: 'Câu nào đúng với nghĩa "Tên bạn viết thế nào?"', options: ['你的名字写怎么？', '怎么你的名字写？', '你的名字怎么写？'], answer: 2, explain: '怎么 đứng ngay trước động từ 写.' },
        { type: 'mc', q: '读 và 看 khác nhau thế nào?', options: ['读: đọc thành tiếng; 看: xem, đọc thầm', '读: viết; 看: nghe', '读: nói; 看: hỏi'], answer: 0, explain: '读课文 = đọc to bài khoá; 看书 = đọc (thầm) sách.' },
        { type: 'mc', q: '听 nghĩa là gì?', options: ['nói', 'nghe', 'viết'], answer: 1, explain: '听 tīng (thính) = nghe, như "thính giả".' },
        { type: 'mc', q: 'Câu nào đúng với nghĩa "Hãy trả lời bằng tiếng Trung"?', options: ['请回答用中文。', '用中文请回答。', '请用中文回答。'], answer: 2, explain: '用 + ngôn ngữ đứng trước động từ chính: 请用中文回答.' },
        { type: 'fill', q: '“cảm ơn”用汉语怎么___？（“cảm ơn” tiếng Trung nói thế nào?）', answer: ['说', 'shuō', 'shuo'], hint: 'shuō – nói', explain: 'Mẫu câu: X 用汉语怎么说？' },
        { type: 'fill', q: '我们___汉语。（Chúng tôi học tiếng Trung.）', answer: ['学习', 'xuéxí', 'xuexi', 'xué xí', 'xue xi', '学', 'xué', 'xue'], hint: 'xuéxí – học, học tập', explain: '学习 (học tập) + môn học: 学习汉语.' },
        { type: 'fill', q: '汉字很___。（Chữ Hán rất khó.）', answer: ['难', 'nán', 'nan'], hint: 'nán – khó', explain: '难 (nan) = khó, dùng sau 很.' },
        { type: 'fill', q: '请___课文。（Mời các bạn nghe bài khoá.）', answer: ['听', 'tīng', 'ting'], hint: 'tīng – nghe', explain: '听 = nghe: 听课文.' },
        { type: 'fill', q: '老师问，学生___。（Thầy hỏi, học sinh trả lời.）', answer: ['回答', 'huídá', 'huida', 'huí dá', 'hui da'], hint: 'huídá – trả lời', explain: '问 (hỏi) – 回答 (trả lời).' },
        { type: 'order', vi: 'Tên của bạn viết thế nào?', words: ['名字', '怎么', '你的', '写？'], answer: '你的 名字 怎么 写？' },
        { type: 'order', vi: '“老师” tiếng Anh nói thế nào?', words: ['英语', '“老师”', '怎么', '用', '说？'], answer: '“老师” 用 英语 怎么 说？' },
        { type: 'order', vi: 'Chúng tôi đọc bài khoá.', words: ['课文', '读', '我们'], answer: '我们 读 课文' },
        { type: 'order', vi: '“生词” nghĩa là gì?', words: ['是', '意思？', '“生词”', '什么'], answer: '“生词” 是 什么 意思？' },
        { type: 'order', vi: 'Anh ấy không nói tiếng Anh.', words: ['英语', '他', '说', '不'], answer: '他 不 说 英语' }
      ],
      reading: {
        title: '我学习汉语',
        titleVi: 'Tôi học tiếng Trung',
        text: [
          '我叫阮兰，是越南人。我学习汉语。',
          '我们的汉语老师姓李。李老师说汉语，也说英语。',
          '我们听课文，读课文，写生词。汉语不难，汉字很难。',
          '我问老师：“汉字怎么写？”老师说：“看我写。”'
        ],
        py: [
          'Wǒ jiào Ruǎn Lán, shì Yuènánrén. Wǒ xuéxí Hànyǔ.',
          'Wǒmen de Hànyǔ lǎoshī xìng Lǐ. Lǐ lǎoshī shuō Hànyǔ, yě shuō Yīngyǔ.',
          'Wǒmen tīng kèwén, dú kèwén, xiě shēngcí. Hànyǔ bù nán, Hànzì hěn nán.',
          'Wǒ wèn lǎoshī: “Hànzì zěnme xiě?” Lǎoshī shuō: “Kàn wǒ xiě.”'
        ],
        vi: [
          'Tôi tên là Nguyễn Lan, là người Việt Nam. Tôi học tiếng Trung.',
          'Giáo viên tiếng Trung của chúng tôi họ Lý. Cô Lý nói tiếng Trung, cũng nói tiếng Anh.',
          'Chúng tôi nghe bài khoá, đọc bài khoá, viết từ mới. Tiếng Trung không khó, chữ Hán thì rất khó.',
          'Tôi hỏi cô: “Chữ Hán viết thế nào ạ?” Cô nói: “Em xem cô viết nhé.”'
        ],
        questions: [
          { q: 'Giáo viên tiếng Trung của Lan họ gì?', options: ['Vương', 'Lý', 'Nguyễn'], answer: 1, explain: '我们的汉语老师姓李。' },
          { q: 'Cô Lý nói những thứ tiếng nào?', options: ['Tiếng Trung và tiếng Anh', 'Chỉ tiếng Trung', 'Tiếng Việt'], answer: 0, explain: '李老师说汉语，也说英语。' },
          { q: 'Theo Lan, cái gì khó?', options: ['Tiếng Trung nói chung', 'Bài khoá', 'Chữ Hán'], answer: 2, explain: '汉语不难，汉字很难。' },
          { q: 'Lan hỏi cô giáo điều gì?', options: ['Chữ Hán viết thế nào', 'Cô họ gì', 'Cô là người nước nào'], answer: 0, explain: '我问老师：“汉字怎么写？”' }
        ]
      }
    }
  },

  // zh-hsk1-4b: Lượng từ: đếm người, xe & đồ vật
  {
    after: 'zh-hsk1-4',
    unit: {
      id: 'zh-hsk1-4b',
      icon: '🧮',
      title: 'Lượng từ: đếm người, xe & đồ vật',
      goal: 'Đếm người, con vật, xe cộ và đồ vật với đúng lượng từ (辆, 条, 双, 张, 位, 只, 家…), hỏi số lượng với 几.',
      vocab: [
        { w: '辆', ipa: 'liàng', hv: 'lượng', vi: 'chiếc (lượng từ cho xe)', ex: '我家有两辆车。', exPy: 'Wǒ jiā yǒu liǎng liàng chē.', exVi: 'Nhà tôi có hai chiếc xe.' },
        { w: '条', ipa: 'tiáo', hv: 'điều', vi: 'cái, con (lượng từ cho vật dài: quần, váy, cá, sông)', ex: '我有一条红色的裤子。', exPy: 'Wǒ yǒu yì tiáo hóngsè de kùzi.', exVi: 'Tôi có một cái quần màu đỏ.' },
        { w: '双', ipa: 'shuāng', hv: 'song', vi: 'đôi (lượng từ cho vật đi thành cặp)', ex: '这双袜子是谁的？', exPy: 'Zhè shuāng wàzi shì shéi de?', exVi: 'Đôi tất này là của ai?' },
        { w: '张', ipa: 'zhāng', hv: 'trương', vi: 'tờ, tấm (lượng từ cho vật phẳng: giấy, vé, giường)', ex: '我有三张票。', exPy: 'Wǒ yǒu sān zhāng piào.', exVi: 'Tôi có ba tấm vé.' },
        { w: '位', ipa: 'wèi', hv: 'vị', vi: 'vị (lượng từ cho người, kính trọng)', ex: '这位是王老师。', exPy: 'Zhè wèi shì Wáng lǎoshī.', exVi: 'Vị này là thầy Vương.' },
        { w: '车', ipa: 'chē', hv: 'xa', vi: 'xe', ex: '那辆车是白色的。', exPy: 'Nà liàng chē shì báisè de.', exVi: 'Chiếc xe kia màu trắng.' },
        { w: '狗', ipa: 'gǒu', hv: 'cẩu', vi: 'con chó', ex: '我家有一只狗。', exPy: 'Wǒ jiā yǒu yì zhī gǒu.', exVi: 'Nhà tôi có một con chó.' },
        { w: '猫', ipa: 'māo', hv: 'miêu', vi: 'con mèo', ex: '那只猫很小。', exPy: 'Nà zhī māo hěn xiǎo.', exVi: 'Con mèo kia rất nhỏ.' },
        { w: '鱼', ipa: 'yú', hv: 'ngư', vi: 'cá', ex: '我有两条鱼。', exPy: 'Wǒ yǒu liǎng tiáo yú.', exVi: 'Tôi có hai con cá.' },
        { w: '床', ipa: 'chuáng', hv: 'sàng', vi: 'giường', ex: '这张床很大。', exPy: 'Zhè zhāng chuáng hěn dà.', exVi: 'Cái giường này rất to.' },
        { w: '票', ipa: 'piào', hv: 'phiếu', vi: 'vé', ex: '你有几张票？', exPy: 'Nǐ yǒu jǐ zhāng piào?', exVi: 'Bạn có mấy tấm vé?' },
        { w: '裤子', ipa: 'kùzi', hv: 'khố tử', vi: 'quần', ex: '这条裤子是新的。', exPy: 'Zhè tiáo kùzi shì xīn de.', exVi: 'Cái quần này là quần mới.' },
        { w: '裙子', ipa: 'qúnzi', hv: 'quần tử', vi: 'váy', ex: '我姐姐有五条裙子。', exPy: 'Wǒ jiějie yǒu wǔ tiáo qúnzi.', exVi: 'Chị gái tôi có năm cái váy.' },
        { w: '纸', ipa: 'zhǐ', hv: 'chỉ', vi: 'giấy', ex: '我没有纸。', exPy: 'Wǒ méiyǒu zhǐ.', exVi: 'Tôi không có giấy.' },
        { w: '电视', ipa: 'diànshì', hv: 'điện thị', vi: 'tivi, truyền hình', ex: '我家没有电视。', exPy: 'Wǒ jiā méiyǒu diànshì.', exVi: 'Nhà tôi không có tivi.' },
        { w: '医院', ipa: 'yīyuàn', hv: 'y viện', vi: 'bệnh viện', ex: '这是一家大医院。', exPy: 'Zhè shì yì jiā dà yīyuàn.', exVi: 'Đây là một bệnh viện lớn.' },
        { w: '客人', ipa: 'kèrén', hv: 'khách nhân', vi: 'khách (đến nhà)', ex: '我家有三位客人。', exPy: 'Wǒ jiā yǒu sān wèi kèrén.', exVi: 'Nhà tôi có ba vị khách.' },
        { w: '河', ipa: 'hé', hv: 'hà', vi: 'sông', ex: '那条河很大。', exPy: 'Nà tiáo hé hěn dà.', exVi: 'Con sông kia rất lớn.' },
        { w: '银行', ipa: 'yínháng', hv: 'ngân hàng', vi: 'ngân hàng', ex: '那是一家中国银行。', exPy: 'Nà shì yì jiā Zhōngguó yínháng.', exVi: 'Kia là một ngân hàng Trung Quốc.' },
        { w: '袜子', ipa: 'wàzi', hv: 'miệt tử', vi: 'tất, vớ', ex: '我有两双袜子。', exPy: 'Wǒ yǒu liǎng shuāng wàzi.', exVi: 'Tôi có hai đôi tất.' }
      ],
      grammar: {
        title: 'Lượng từ: Số / 这 / 那 / 几 + lượng từ + danh từ',
        explain: [
          'Ôn lại: giữa số (hoặc 这, 那, 哪, 几) và danh từ luôn phải có lượng từ: 三本书, 这件衣服, 几个人？. Không nói ✗ 一书, ✗ 三车.',
          'Mỗi lượng từ đi với một nhóm danh từ theo hình dạng hoặc loại: 张 cho vật phẳng (纸, 票, 床, 桌子); 条 cho vật dài, mềm (裤子, 裙子, 鱼, 河, 路); 辆 cho xe; 双 cho vật đi thành đôi (袜子, 鞋); 只 zhī cho nhiều loài động vật (狗, 猫); 家 cho cửa hàng, công ty, bệnh viện, ngân hàng; 口 khi đếm người trong nhà.',
          '位 wèi dùng cho người một cách kính trọng: 三位老师, 这位客人; với bạn bè, người ngang hàng dùng 个. Đếm "hai" trước lượng từ luôn dùng 两: 两辆车, 两张票 (✗ 二辆车).',
          'Hỏi số lượng nhỏ: 几 + lượng từ: 你有几张票？ Nhớ biến điệu của 一: đọc yí trước thanh 4 (一辆 yí liàng, 一位 yí wèi, 一个 yí gè), đọc yì trước thanh 1, 2, 3 (一张 yì zhāng, 一条 yì tiáo, 一本 yì běn).'
        ],
        table: [
          ['Lượng từ', 'Dùng cho', 'Ví dụ'],
          ['个 gè', 'người, đồ vật nói chung', '一个人, 两个苹果'],
          ['本 běn', 'sách, vở', '三本书'],
          ['杯 bēi', 'đồ uống theo cốc', '一杯茶'],
          ['件 jiàn', 'áo, quần áo; sự việc', '一件衣服'],
          ['口 kǒu', 'người trong gia đình', '我家有四口人'],
          ['辆 liàng', 'xe cộ', '两辆车'],
          ['条 tiáo', 'vật dài: quần, váy, cá, sông, đường', '一条裤子, 一条河'],
          ['家 jiā', 'cửa hàng, công ty, bệnh viện, ngân hàng', '一家医院'],
          ['双 shuāng', 'vật đi thành đôi', '一双袜子'],
          ['张 zhāng', 'vật phẳng: giấy, vé, giường, bàn', '两张票, 一张床'],
          ['位 wèi', 'người (kính trọng)', '三位老师'],
          ['只 zhī', 'nhiều loài động vật', '一只狗, 两只猫']
        ],
        examples: [
          { t: '我家有两辆车。', py: 'Wǒ jiā yǒu liǎng liàng chē.', vi: 'Nhà tôi có hai chiếc xe.' },
          { t: '你有几张票？我有三张。', py: 'Nǐ yǒu jǐ zhāng piào? Wǒ yǒu sān zhāng.', vi: 'Bạn có mấy tấm vé? Mình có ba tấm.' },
          { t: '这位是李老师。', py: 'Zhè wèi shì Lǐ lǎoshī.', vi: 'Vị này là cô Lý.' },
          { t: '那条河很大。', py: 'Nà tiáo hé hěn dà.', vi: 'Con sông kia rất lớn.' },
          { t: '我有一只猫和两条鱼。', py: 'Wǒ yǒu yì zhī māo hé liǎng tiáo yú.', vi: 'Tôi có một con mèo và hai con cá.' }
        ],
        tip: 'Đừng dịch từng chữ "con / cái" của tiếng Việt: "con cá" là 一条鱼 nhưng "con chó" là 一只狗; "cái giường" là 一张床 còn "cái cốc" là 一个杯子. Hãy học danh từ kèm lượng từ như một cụm: 一辆车, 一张票, 一双袜子. Lỗi hay gặp: ✗ 两个车 → 两辆车; ✗ 二张票 → 两张票. Chữ 只 ở bài này đọc zhī (con); khi đọc zhǐ nó lại là "chỉ" — sẽ học sau.'
      },
      dialogue: [
        { s: '李华', t: '阮兰，这是我家。请坐！', py: 'Ruǎn Lán, zhè shì wǒ jiā. Qǐng zuò!', vi: 'Lan ơi, đây là nhà mình. Mời bạn ngồi!' },
        { s: 'Lan', t: '谢谢！你家有狗吗？', py: 'Xièxie! Nǐ jiā yǒu gǒu ma?', vi: 'Cảm ơn! Nhà bạn có nuôi chó không?' },
        { s: '李华', t: '有，我家有一只狗和两只猫。', py: 'Yǒu, wǒ jiā yǒu yì zhī gǒu hé liǎng zhī māo.', vi: 'Có, nhà mình có một con chó và hai con mèo.' },
        { s: 'Lan', t: '那两辆车也是你家的吗？', py: 'Nà liǎng liàng chē yě shì nǐ jiā de ma?', vi: 'Hai chiếc xe kia cũng là của nhà bạn à?' },
        { s: '李华', t: '那辆白色的是我家的，那辆红色的不是。', py: 'Nà liàng báisè de shì wǒ jiā de, nà liàng hóngsè de bú shì.', vi: 'Chiếc màu trắng là của nhà mình, chiếc màu đỏ thì không phải.' },
        { s: 'Lan', t: '这位是谁？', py: 'Zhè wèi shì shéi?', vi: 'Vị này là ai thế?' },
        { s: '李华', t: '这位是我家的客人，是我爸爸的老师。', py: 'Zhè wèi shì wǒ jiā de kèrén, shì wǒ bàba de lǎoshī.', vi: 'Vị này là khách của nhà mình, là thầy giáo của bố mình.' },
        { s: 'Lan', t: '您好！认识您很高兴！', py: 'Nín hǎo! Rènshi nín hěn gāoxìng!', vi: 'Cháu chào ông ạ! Rất vui được làm quen với ông!' }
      ],
      exercises: [
        { type: 'mc', q: '我家有两___车。（Nhà tôi có hai chiếc xe.）', options: ['个', '辆', '条'], answer: 1, explain: '辆 là lượng từ cho xe cộ.' },
        { type: 'mc', q: '一___纸（một tờ giấy）', options: ['张', '本', '件'], answer: 0, explain: '张 dùng cho vật phẳng: giấy, vé, giường.' },
        { type: 'mc', q: '一___裤子（một cái quần）', options: ['件', '双', '条'], answer: 2, explain: 'Quần, váy là vật dài → 条.' },
        { type: 'mc', q: 'Câu nào đúng với nghĩa "Tôi có hai tấm vé"?', options: ['我有二张票。', '我有两张票。', '我有两票。'], answer: 1, explain: 'Trước lượng từ dùng 两, và phải có lượng từ 张.' },
        { type: 'mc', q: 'Nói một cách kính trọng "ba thầy cô giáo":', options: ['三个老师', '三口老师', '三位老师'], answer: 2, explain: '位 là lượng từ kính trọng cho người.' },
        { type: 'mc', q: 'Từ nào đi được với 一家？', options: ['医院', '裙子', '鱼'], answer: 0, explain: '家 dùng cho bệnh viện, ngân hàng, cửa hàng: 一家医院.' },
        { type: 'fill', q: '我有一___袜子。（Tôi có một đôi tất.）', answer: ['双', 'shuāng', 'shuang'], hint: 'shuāng – đôi', explain: 'Vật đi thành đôi dùng 双.' },
        { type: 'fill', q: '你有几___票？（Bạn có mấy tấm vé?）', answer: ['张', 'zhāng', 'zhang'], hint: 'zhāng – tờ, tấm', explain: '几 + lượng từ + danh từ; vé dùng 张.' },
        { type: 'fill', q: '这___是王老师。（Vị này là thầy Vương.）', answer: ['位', 'wèi', 'wei'], hint: 'wèi – vị (kính trọng)', explain: '这位 = vị này, cách nói lịch sự.' },
        { type: 'fill', q: '我家有一只___。（Nhà tôi có một con mèo.）', answer: ['猫', 'māo', 'mao'], hint: 'māo – con mèo', explain: '只 zhī là lượng từ cho mèo, chó: 一只猫.' },
        { type: 'fill', q: '那是一家中国___。（Kia là một ngân hàng Trung Quốc.）', answer: ['银行', 'yínháng', 'yinhang', 'yín háng', 'yin hang'], hint: 'yínháng – ngân hàng', explain: '一家银行 – lượng từ 家 cho ngân hàng.' },
        { type: 'order', vi: 'Tôi có hai con cá.', words: ['条', '两', '我', '鱼', '有'], answer: '我 有 两 条 鱼' },
        { type: 'order', vi: 'Cái giường này rất to.', words: ['大', '这', '床', '很', '张'], answer: '这 张 床 很 大' },
        { type: 'order', vi: 'Chiếc xe kia là của bạn à?', words: ['是', '车', '那辆', '你的', '吗？'], answer: '那辆 车 是 你的 吗？' },
        { type: 'order', vi: 'Nhà tôi có ba vị khách.', words: ['客人', '三位', '有', '我家'], answer: '我家 有 三位 客人' },
        { type: 'order', vi: 'Bạn có mấy cái váy?', words: ['几', '裙子？', '有', '条', '你'], answer: '你 有 几 条 裙子？' }
      ],
      reading: {
        title: '我家',
        titleVi: 'Nhà tôi',
        text: [
          '我家有四口人。我们有一只狗，两只猫。',
          '我家有两辆车，一辆是白色的，一辆是红色的。',
          '我有三条裙子和五双袜子。我的床很大。',
          '今天我家有两位客人，他们是我爸爸的老师。'
        ],
        py: [
          'Wǒ jiā yǒu sì kǒu rén. Wǒmen yǒu yì zhī gǒu, liǎng zhī māo.',
          'Wǒ jiā yǒu liǎng liàng chē, yí liàng shì báisè de, yí liàng shì hóngsè de.',
          'Wǒ yǒu sān tiáo qúnzi hé wǔ shuāng wàzi. Wǒ de chuáng hěn dà.',
          'Jīntiān wǒ jiā yǒu liǎng wèi kèrén, tāmen shì wǒ bàba de lǎoshī.'
        ],
        vi: [
          'Nhà tôi có bốn người. Chúng tôi có một con chó, hai con mèo.',
          'Nhà tôi có hai chiếc xe, một chiếc màu trắng, một chiếc màu đỏ.',
          'Tôi có ba cái váy và năm đôi tất. Giường của tôi rất to.',
          'Hôm nay nhà tôi có hai vị khách, họ là thầy giáo của bố tôi.'
        ],
        questions: [
          { q: 'Nhà bạn ấy nuôi những con vật nào?', options: ['Một con chó, hai con mèo', 'Hai con chó, một con mèo', 'Một con mèo, hai con cá'], answer: 0, explain: '我们有一只狗，两只猫。' },
          { q: 'Hai chiếc xe màu gì?', options: ['Đều màu trắng', 'Một trắng, một đỏ', 'Đều màu đỏ'], answer: 1, explain: '一辆是白色的，一辆是红色的。' },
          { q: 'Bạn ấy có mấy đôi tất?', options: ['Ba', 'Hai', 'Năm'], answer: 2, explain: '五双袜子 – năm đôi tất.' },
          { q: 'Hai vị khách là ai?', options: ['Bạn học của bạn ấy', 'Thầy giáo của bố bạn ấy', 'Thầy giáo của bạn ấy'], answer: 1, explain: '他们是我爸爸的老师。' }
        ]
      }
    }
  },

  // zh-hsk1-5b: Đi lại & phương tiện
  {
    after: 'zh-hsk1-5',
    unit: {
      id: 'zh-hsk1-5b',
      icon: '🚌',
      title: 'Đi lại & phương tiện',
      goal: 'Nói mình đi đâu, đi bằng phương tiện gì, hỏi đường đi "bằng cách nào", nói từ đâu đến đâu và nơi nào xa hay gần.',
      vocab: [
        { w: '去', ipa: 'qù', hv: 'khứ', vi: 'đi (tới nơi khác)', ex: '下午我去银行。', exPy: 'Xiàwǔ wǒ qù yínháng.', exVi: 'Buổi chiều tôi đi ngân hàng.' },
        { w: '来', ipa: 'lái', hv: 'lai', vi: 'đến (về phía người nói)', ex: '他今天来我家。', exPy: 'Tā jīntiān lái wǒ jiā.', exVi: 'Hôm nay anh ấy đến nhà tôi.' },
        { w: '坐', ipa: 'zuò', hv: 'toạ', vi: 'ngồi; đi (xe, tàu, máy bay)', ex: '我坐公共汽车去学校。', exPy: 'Wǒ zuò gōnggòng qìchē qù xuéxiào.', exVi: 'Tôi đi xe buýt đến trường.' },
        { w: '开车', ipa: 'kāichē', hv: 'khai xa', vi: 'lái xe (ô tô)', ex: '我爸爸开车去上班。', exPy: 'Wǒ bàba kāichē qù shàngbān.', exVi: 'Bố tôi lái xe đi làm.' },
        { w: '出租车', ipa: 'chūzūchē', hv: 'xuất tô xa', vi: 'xe taxi', ex: '我们坐出租车去医院吧。', exPy: 'Wǒmen zuò chūzūchē qù yīyuàn ba.', exVi: 'Chúng ta đi taxi đến bệnh viện đi.' },
        { w: '公共汽车', ipa: 'gōnggòng qìchē', hv: 'công cộng khí xa', vi: 'xe buýt', ex: '我每天坐公共汽车上班。', exPy: 'Wǒ měitiān zuò gōnggòng qìchē shàngbān.', exVi: 'Hằng ngày tôi đi xe buýt đi làm.' },
        { w: '火车', ipa: 'huǒchē', hv: 'hoả xa', vi: 'tàu hoả', ex: '我坐火车去北京。', exPy: 'Wǒ zuò huǒchē qù Běijīng.', exVi: 'Tôi đi tàu hoả đến Bắc Kinh.' },
        { w: '飞机', ipa: 'fēijī', hv: 'phi cơ', vi: 'máy bay', ex: '他坐飞机来越南。', exPy: 'Tā zuò fēijī lái Yuènán.', exVi: 'Anh ấy đi máy bay sang Việt Nam.' },
        { w: '车站', ipa: 'chēzhàn', hv: 'xa trạm', vi: 'bến xe, nhà ga', ex: '请问，车站在哪儿？', exPy: 'Qǐngwèn, chēzhàn zài nǎr?', exVi: 'Xin hỏi, bến xe ở đâu?' },
        { w: '哪儿', ipa: 'nǎr', hv: '', vi: 'đâu, ở đâu', ex: '你去哪儿？', exPy: 'Nǐ qù nǎr?', exVi: 'Bạn đi đâu thế?' },
        { w: '从', ipa: 'cóng', hv: 'tòng', vi: 'từ (điểm xuất phát)', ex: '我从学校回家。', exPy: 'Wǒ cóng xuéxiào huí jiā.', exVi: 'Tôi từ trường về nhà.' },
        { w: '到', ipa: 'dào', hv: 'đáo', vi: 'tới, đến (một nơi)', ex: '从我家到学校不远。', exPy: 'Cóng wǒ jiā dào xuéxiào bù yuǎn.', exVi: 'Từ nhà tôi đến trường không xa.' },
        { w: '远', ipa: 'yuǎn', hv: 'viễn', vi: 'xa', ex: '医院远不远？', exPy: 'Yīyuàn yuǎn bu yuǎn?', exVi: 'Bệnh viện có xa không?' },
        { w: '离', ipa: 'lí', hv: 'ly', vi: 'cách (khoảng cách)', ex: '我家离学校很远。', exPy: 'Wǒ jiā lí xuéxiào hěn yuǎn.', exVi: 'Nhà tôi cách trường rất xa.' },
        { w: '走路', ipa: 'zǒulù', hv: 'tẩu lộ', vi: 'đi bộ', ex: '我每天走路去上课。', exPy: 'Wǒ měitiān zǒulù qù shàngkè.', exVi: 'Hằng ngày tôi đi bộ đi học.' },
        { w: '上车', ipa: 'shàngchē', hv: 'thượng xa', vi: 'lên xe', ex: '请上车！', exPy: 'Qǐng shàngchē!', exVi: 'Mời lên xe!' },
        { w: '下车', ipa: 'xiàchē', hv: 'hạ xa', vi: 'xuống xe', ex: '我们在哪儿下车？', exPy: 'Wǒmen zài nǎr xiàchē?', exVi: 'Chúng ta xuống xe ở đâu?' },
        { w: '地铁', ipa: 'dìtiě', hv: 'địa thiết', vi: 'tàu điện ngầm', ex: '我坐地铁上班。', exPy: 'Wǒ zuò dìtiě shàngbān.', exVi: 'Tôi đi tàu điện ngầm đi làm.' },
        { w: '慢', ipa: 'màn', hv: 'mạn', vi: 'chậm', ex: '这辆车很慢。', exPy: 'Zhè liàng chē hěn màn.', exVi: 'Chiếc xe này rất chậm.' },
        { w: '骑', ipa: 'qí', hv: 'kỵ', vi: 'cưỡi; đi (xe đạp, xe máy)', ex: '他骑车去学校。', exPy: 'Tā qí chē qù xuéxiào.', exVi: 'Anh ấy đi xe (đạp) đến trường.' }
      ],
      grammar: {
        title: 'Đi đâu, đi bằng gì: 去 / 来, 坐 / 开 / 骑 + phương tiện, 从…到…, 离',
        explain: [
          '去 qù (khứ) = đi, rời khỏi chỗ người nói; 来 lái (lai) = đến, về phía người nói. Nơi chốn đặt NGAY SAU 去 / 来, không cần thêm 到: 我去学校, 你来我家吧 (✗ 我去到学校). Hỏi đi đâu: 你去哪儿？',
          'Phương tiện: 坐 + xe buýt / taxi / tàu / máy bay / tàu điện ngầm (ngồi lên phương tiện, người khác lái); 开车 = tự lái ô tô; 骑 + xe đạp, xe máy (ngồi "cưỡi" lên); đi bộ là 走路. Cụm phương tiện đứng TRƯỚC 去 / 来: 我坐火车去北京 (tôi đi tàu hoả đến Bắc Kinh). Hỏi cách đi: 你怎么去？ — 怎么 + động từ = bằng cách nào.',
          '从 A 到 B = từ A đến B: 从我家到学校. 从 chỉ điểm xuất phát và cũng đứng trước động từ: 我从越南来 (tôi đến từ Việt Nam).',
          'Nói khoảng cách: A 离 B + 很远 / 不远: 我家离学校很远 (nhà tôi cách trường rất xa). Hỏi: 银行离这儿远吗？ / 远不远？'
        ],
        table: [
          ['Mẫu', 'Ví dụ', 'Nghĩa'],
          ['去 / 来 + nơi chốn', '我去银行。你来我家吧。', 'Tôi đi ngân hàng. Bạn đến nhà mình đi.'],
          ['坐 + phương tiện + 去…', '我坐火车去北京。', 'Tôi đi tàu hoả đến Bắc Kinh.'],
          ['开车 / 骑车 / 走路 + 去…', '爸爸开车去上班。', 'Bố lái xe đi làm.'],
          ['怎么 + 去 / 来？', '你怎么去学校？', 'Bạn đến trường bằng cách nào?'],
          ['从 A 到 B', '从我家到学校不远。', 'Từ nhà tôi đến trường không xa.'],
          ['A 离 B + 远 / 不远', '我家离车站很远。', 'Nhà tôi cách bến xe rất xa.']
        ],
        examples: [
          { t: '你去哪儿？——我去银行。', py: 'Nǐ qù nǎr? — Wǒ qù yínháng.', vi: 'Bạn đi đâu? — Tôi đi ngân hàng.' },
          { t: '我坐公共汽车去学校。', py: 'Wǒ zuò gōnggòng qìchē qù xuéxiào.', vi: 'Tôi đi xe buýt đến trường.' },
          { t: '你怎么去北京？——我坐飞机去。', py: 'Nǐ zěnme qù Běijīng? — Wǒ zuò fēijī qù.', vi: 'Bạn đi Bắc Kinh bằng gì? — Tôi đi máy bay.' },
          { t: '从我家到车站不远，我走路去。', py: 'Cóng wǒ jiā dào chēzhàn bù yuǎn, wǒ zǒulù qù.', vi: 'Từ nhà tôi đến bến xe không xa, tôi đi bộ.' },
          { t: '学校离医院很远。', py: 'Xuéxiào lí yīyuàn hěn yuǎn.', vi: 'Trường học cách bệnh viện rất xa.' }
        ],
        tip: 'Người Việt hay nói theo trật tự "đi đến trường bằng xe buýt": ✗ 我去学校坐公共汽车 (câu này lại thành "tôi đến trường để bắt xe buýt"). Phương tiện phải đứng trước: 我坐公共汽车去学校. Đừng nhầm 离 và 从: khoảng cách dùng 离 (我家离学校很远, ✗ 我家从学校很远); điểm xuất phát dùng 从 (我从学校回家). Đi xe buýt, taxi dùng 坐, không dùng ✗ 骑公共汽车.'
      },
      dialogue: [
        { s: '李华', t: '阮兰，你下午去哪儿？', py: 'Ruǎn Lán, nǐ xiàwǔ qù nǎr?', vi: 'Lan ơi, chiều nay bạn đi đâu?' },
        { s: 'Lan', t: '我去银行。银行离学校远吗？', py: 'Wǒ qù yínháng. Yínháng lí xuéxiào yuǎn ma?', vi: 'Mình đi ngân hàng. Ngân hàng có cách trường xa không?' },
        { s: '李华', t: '不远。你怎么去？走路去吗？', py: 'Bù yuǎn. Nǐ zěnme qù? Zǒulù qù ma?', vi: 'Không xa. Bạn đi bằng gì? Đi bộ à?' },
        { s: 'Lan', t: '不，我坐公共汽车去。在哪儿上车？', py: 'Bù, wǒ zuò gōnggòng qìchē qù. Zài nǎr shàngchē?', vi: 'Không, mình đi xe buýt. Lên xe ở đâu nhỉ?' },
        { s: '李华', t: '公共汽车很慢。我下午也去银行，我开车去。你坐我的车吧！', py: 'Gōnggòng qìchē hěn màn. Wǒ xiàwǔ yě qù yínháng, wǒ kāichē qù. Nǐ zuò wǒ de chē ba!', vi: 'Xe buýt chậm lắm. Chiều nay mình cũng đi ngân hàng, mình lái xe đi. Bạn đi xe của mình nhé!' },
        { s: 'Lan', t: '好，谢谢你！我们几点去？', py: 'Hǎo, xièxie nǐ! Wǒmen jǐ diǎn qù?', vi: 'Được, cảm ơn bạn! Mấy giờ chúng mình đi?' },
        { s: '李华', t: '两点。我们从学校去，四点回来。', py: 'Liǎng diǎn. Wǒmen cóng xuéxiào qù, sì diǎn huílai.', vi: 'Hai giờ. Chúng mình đi từ trường, bốn giờ quay về.' },
        { s: 'Lan', t: '好，下午见！', py: 'Hǎo, xiàwǔ jiàn!', vi: 'Được, chiều gặp nhé!' }
      ],
      exercises: [
        { type: 'mc', q: 'Câu nào đúng nghĩa "Tôi đi xe buýt đến trường"?', options: ['我去学校公共汽车坐。', '我坐公共汽车去学校。', '我公共汽车去学校坐。'], answer: 1, explain: 'Phương tiện đứng trước động từ chính: 坐 + 公共汽车 + 去 + 学校.' },
        { type: 'mc', q: '"Lái xe (ô tô)" là:', options: ['开车', '坐车', '上车'], answer: 0, explain: '开车 kāichē = lái xe; 坐车 = đi xe (người khác lái); 上车 = lên xe.' },
        { type: 'mc', q: 'Muốn hỏi "Bạn đi bằng cách nào?", nói:', options: ['你去哪儿？', '你什么去？', '你怎么去？'], answer: 2, explain: '怎么 + động từ hỏi cách thức; 去哪儿 là hỏi đi đâu.' },
        { type: 'mc', q: '我家___学校很远。（Nhà tôi cách trường rất xa.）', options: ['从', '到', '离'], answer: 2, explain: 'Nói khoảng cách dùng A 离 B + 远.' },
        { type: 'mc', q: '下车 nghĩa là:', options: ['lên xe', 'xuống xe', 'lái xe'], answer: 1, explain: '下车 xiàchē = xuống xe; 上车 = lên xe.' },
        { type: 'mc', q: '我___车去学校。（Tôi đạp xe đến trường.）', options: ['骑', '坐', '开'], answer: 0, explain: 'Xe đạp, xe máy dùng 骑 (cưỡi); xe buýt, taxi dùng 坐; ô tô tự lái dùng 开.' },
        { type: 'fill', q: '你___哪儿？（Bạn đi đâu thế?）', answer: ['去', 'qù', 'qu'], hint: 'qù – đi', explain: '去 + nơi chốn: 去哪儿 = đi đâu.' },
        { type: 'fill', q: '___我家到学校不远。（Từ nhà tôi đến trường không xa.）', answer: ['从', 'cóng', 'cong'], hint: 'cóng – từ', explain: '从 A 到 B = từ A đến B.' },
        { type: 'fill', q: '我们坐___去中国。（Chúng tôi đi máy bay sang Trung Quốc.）', answer: ['飞机', 'fēijī', 'feiji', 'fēi jī', 'fei ji'], hint: 'fēijī – máy bay', explain: '坐飞机 = đi máy bay.' },
        { type: 'fill', q: '请问，___在哪儿？（Xin hỏi, bến xe ở đâu?）', answer: ['车站', 'chēzhàn', 'chezhan', 'chē zhàn', 'che zhan'], hint: 'chēzhàn – bến xe', explain: '车站 (xa trạm) = bến xe, nhà ga.' },
        { type: 'fill', q: '你下午___我家吗？（Chiều nay bạn đến nhà mình không?）', answer: ['来', 'lái', 'lai'], hint: 'lái – đến (về phía người nói)', explain: 'Đến chỗ người nói đang ở dùng 来.' },
        { type: 'order', vi: 'Tôi đi tàu hoả đến Bắc Kinh.', words: ['去', '火车', '我', '北京', '坐'], answer: '我 坐 火车 去 北京' },
        { type: 'order', vi: 'Nhà tôi cách trường rất xa.', words: ['很远', '学校', '我家', '离'], answer: '我家 离 学校 很远' },
        { type: 'order', vi: 'Bạn đến bệnh viện bằng cách nào?', words: ['怎么', '医院？', '你', '去'], answer: '你 怎么 去 医院？' },
        { type: 'order', vi: 'Mẹ tôi lái xe đi làm.', words: ['开车', '上班', '我妈妈', '去'], answer: '我妈妈 开车 去 上班' },
        { type: 'order', vi: 'Chúng ta xuống xe ở đâu?', words: ['下车？', '在', '我们', '哪儿'], answer: '我们 在 哪儿 下车？' }
      ],
      reading: {
        title: '我们怎么去',
        titleVi: 'Nhà mình đi bằng gì',
        text: [
          '我家离学校很远。我每天坐公共汽车去学校。公共汽车很慢，我七点上车，八点下车。',
          '我爸爸开车去上班。我妈妈在医院工作，医院离我家不远，她走路去。',
          '我哥哥在北京工作，他坐飞机回家。'
        ],
        py: [
          'Wǒ jiā lí xuéxiào hěn yuǎn. Wǒ měitiān zuò gōnggòng qìchē qù xuéxiào. Gōnggòng qìchē hěn màn, wǒ qī diǎn shàngchē, bā diǎn xiàchē.',
          'Wǒ bàba kāichē qù shàngbān. Wǒ māma zài yīyuàn gōngzuò, yīyuàn lí wǒ jiā bù yuǎn, tā zǒulù qù.',
          'Wǒ gēge zài Běijīng gōngzuò, tā zuò fēijī huí jiā.'
        ],
        vi: [
          'Nhà tôi cách trường rất xa. Hằng ngày tôi đi xe buýt đến trường. Xe buýt rất chậm, tôi lên xe lúc bảy giờ, tám giờ mới xuống xe.',
          'Bố tôi lái xe đi làm. Mẹ tôi làm việc ở bệnh viện, bệnh viện cách nhà tôi không xa, mẹ đi bộ.',
          'Anh trai tôi làm việc ở Bắc Kinh, anh ấy đi máy bay về nhà.'
        ],
        questions: [
          { q: '"Tôi" đến trường bằng gì?', options: ['Đi bộ', 'Xe buýt', 'Ô tô của bố', 'Tàu điện ngầm'], answer: 1, explain: '我每天坐公共汽车去学校 – hằng ngày tôi đi xe buýt đến trường.' },
          { q: '"Tôi" ngồi xe buýt khoảng bao lâu?', options: ['Nửa tiếng', 'Hai tiếng', 'Một tiếng'], answer: 2, explain: '七点上车，八点下车 – lên xe lúc 7 giờ, xuống xe lúc 8 giờ.' },
          { q: 'Mẹ đi làm bằng cách nào?', options: ['Đi bộ', 'Lái xe', 'Xe buýt'], answer: 0, explain: '医院离我家不远，她走路去 – bệnh viện không xa, mẹ đi bộ.' },
          { q: 'Anh trai về nhà bằng phương tiện gì?', options: ['Tàu hoả', 'Taxi', 'Xe buýt', 'Máy bay'], answer: 3, explain: '他坐飞机回家 – anh ấy đi máy bay về nhà.' }
        ]
      }
    }
  },

  // zh-hsk1-6b: Thời tiết & bốn mùa
  {
    after: 'zh-hsk1-6',
    unit: {
      id: 'zh-hsk1-6b',
      icon: '☀️',
      title: 'Thời tiết & bốn mùa',
      goal: 'Hỏi và nói thời tiết hôm nay thế nào, nóng lạnh ra sao, bao nhiêu độ, và nói mình thích mùa nào nhất.',
      vocab: [
        { w: '天气', ipa: 'tiānqì', hv: 'thiên khí', vi: 'thời tiết', ex: '今天天气很好。', exPy: 'Jīntiān tiānqì hěn hǎo.', exVi: 'Hôm nay thời tiết rất đẹp.' },
        { w: '冷', ipa: 'lěng', hv: 'lãnh', vi: 'lạnh', ex: '北京的冬天很冷。', exPy: 'Běijīng de dōngtiān hěn lěng.', exVi: 'Mùa đông Bắc Kinh rất lạnh.' },
        { w: '热', ipa: 'rè', hv: 'nhiệt', vi: 'nóng', ex: '太热了，我想喝水。', exPy: 'Tài rè le, wǒ xiǎng hē shuǐ.', exVi: 'Nóng quá, tôi muốn uống nước.' },
        { w: '下雨', ipa: 'xià yǔ', hv: 'hạ vũ', vi: 'mưa, trời mưa', ex: '北京夏天常常下雨。', exPy: 'Běijīng xiàtiān chángcháng xià yǔ.', exVi: 'Mùa hè Bắc Kinh thường hay mưa.' },
        { w: '下雪', ipa: 'xià xuě', hv: 'hạ tuyết', vi: 'tuyết rơi', ex: '越南不下雪。', exPy: 'Yuènán bú xià xuě.', exVi: 'Việt Nam không có tuyết rơi.' },
        { w: '风', ipa: 'fēng', hv: 'phong', vi: 'gió', ex: '今天风很大。', exPy: 'Jīntiān fēng hěn dà.', exVi: 'Hôm nay gió rất to.' },
        { w: '春天', ipa: 'chūntiān', hv: 'xuân thiên', vi: 'mùa xuân', ex: '春天很暖和。', exPy: 'Chūntiān hěn nuǎnhuo.', exVi: 'Mùa xuân rất ấm áp.' },
        { w: '夏天', ipa: 'xiàtiān', hv: 'hạ thiên', vi: 'mùa hè', ex: '河内的夏天非常热。', exPy: 'Hénèi de xiàtiān fēicháng rè.', exVi: 'Mùa hè ở Hà Nội vô cùng nóng.' },
        { w: '秋天', ipa: 'qiūtiān', hv: 'thu thiên', vi: 'mùa thu', ex: '北京的秋天很凉快。', exPy: 'Běijīng de qiūtiān hěn liángkuai.', exVi: 'Mùa thu Bắc Kinh rất mát mẻ.' },
        { w: '冬天', ipa: 'dōngtiān', hv: 'đông thiên', vi: 'mùa đông', ex: '河内的冬天冷吗？', exPy: 'Hénèi de dōngtiān lěng ma?', exVi: 'Mùa đông ở Hà Nội có lạnh không?' },
        { w: '度', ipa: 'dù', hv: 'độ', vi: 'độ (đơn vị nhiệt độ)', ex: '河内夏天三十八度。', exPy: 'Hénèi xiàtiān sānshíbā dù.', exVi: 'Mùa hè Hà Nội 38 độ.' },
        { w: '怎么样', ipa: 'zěnmeyàng', hv: 'chẩm ma dạng', vi: 'thế nào, ra sao', ex: '北京的天气怎么样？', exPy: 'Běijīng de tiānqì zěnmeyàng?', exVi: 'Thời tiết Bắc Kinh thế nào?' },
        { w: '太', ipa: 'tài', hv: 'thái', vi: 'quá (太…了)', ex: '今天太冷了！', exPy: 'Jīntiān tài lěng le!', exVi: 'Hôm nay lạnh quá!' },
        { w: '非常', ipa: 'fēicháng', hv: 'phi thường', vi: 'vô cùng, rất (mạnh hơn 很)', ex: '今天非常热。', exPy: 'Jīntiān fēicháng rè.', exVi: 'Hôm nay vô cùng nóng.' },
        { w: '最', ipa: 'zuì', hv: 'tối', vi: 'nhất', ex: '我最喜欢秋天。', exPy: 'Wǒ zuì xǐhuan qiūtiān.', exVi: 'Tôi thích mùa thu nhất.' },
        { w: '晴', ipa: 'qíng', hv: 'tình', vi: 'nắng, trời quang', ex: '今天是晴天。', exPy: 'Jīntiān shì qíngtiān.', exVi: 'Hôm nay trời nắng.' },
        { w: '阴', ipa: 'yīn', hv: 'âm', vi: 'râm, âm u', ex: '今天是阴天，不太热。', exPy: 'Jīntiān shì yīntiān, bú tài rè.', exVi: 'Hôm nay trời râm, không nóng lắm.' },
        { w: '凉快', ipa: 'liángkuai', hv: 'lương khoái', vi: 'mát mẻ', ex: '晚上很凉快。', exPy: 'Wǎnshang hěn liángkuai.', exVi: 'Buổi tối rất mát mẻ.' },
        { w: '暖和', ipa: 'nuǎnhuo', hv: 'noãn hoà', vi: 'ấm áp', ex: '今天很暖和，不冷。', exPy: 'Jīntiān hěn nuǎnhuo, bù lěng.', exVi: 'Hôm nay rất ấm áp, không lạnh.' },
        { w: '气温', ipa: 'qìwēn', hv: 'khí ôn', vi: 'nhiệt độ không khí', ex: '今天气温三十度。', exPy: 'Jīntiān qìwēn sānshí dù.', exVi: 'Hôm nay nhiệt độ 30 độ.' }
      ],
      grammar: {
        title: 'Tính từ làm vị ngữ (很 / 非常 / 太…了 / 不太), hỏi 怎么样 và 最',
        explain: [
          'Tính từ tiếng Trung tự làm vị ngữ, KHÔNG cần 是: 今天很冷 (hôm nay lạnh). Câu khẳng định thường thêm 很 cho tròn câu, nghĩa "rất" rất nhẹ. Bỏ 很 thì câu mang ý so sánh: 今天冷，昨天不冷.',
          'Mức độ: 非常 + tính từ = vô cùng, rất (mạnh hơn 很); 太 + tính từ + 了 = …quá! (cảm thán, thường là quá mức): 太热了！; 不太 + tính từ = không… lắm: 不太冷; 不 + tính từ = không…: 不冷.',
          'Hỏi tình hình: … 怎么样？ (thế nào?): 天气怎么样？ — 很好 / 不太好. Cũng có thể hỏi chính phản: 冷不冷？ hoặc thêm 吗: 冷吗？',
          '最 zuì (tối) + tính từ / động từ chỉ tâm lý = nhất: 夏天最热, 我最喜欢春天. Nhiệt độ: số + 度: 三十度; dưới 0 độ: 零下五度. Trời nắng là 晴天, trời râm là 阴天.'
        ],
        table: [
          ['Mức độ', 'Mẫu', 'Ví dụ', 'Nghĩa'],
          ['không', '不 + tính từ', '今天不冷。', 'Hôm nay không lạnh.'],
          ['không… lắm', '不太 + tính từ', '今天不太冷。', 'Hôm nay không lạnh lắm.'],
          ['(bình thường)', '很 + tính từ', '今天很冷。', 'Hôm nay lạnh.'],
          ['vô cùng', '非常 + tính từ', '今天非常冷。', 'Hôm nay vô cùng lạnh.'],
          ['quá!', '太 + tính từ + 了', '今天太冷了！', 'Hôm nay lạnh quá!'],
          ['nhất', '最 + tính từ', '一月最冷。', 'Tháng Một lạnh nhất.']
        ],
        examples: [
          { t: '今天天气怎么样？', py: 'Jīntiān tiānqì zěnmeyàng?', vi: 'Hôm nay thời tiết thế nào?' },
          { t: '今天是晴天，非常热。', py: 'Jīntiān shì qíngtiān, fēicháng rè.', vi: 'Hôm nay trời nắng, vô cùng nóng.' },
          { t: '北京的冬天太冷了！', py: 'Běijīng de dōngtiān tài lěng le!', vi: 'Mùa đông Bắc Kinh lạnh quá!' },
          { t: '河内的冬天不太冷。', py: 'Hénèi de dōngtiān bú tài lěng.', vi: 'Mùa đông Hà Nội không lạnh lắm.' },
          { t: '我最喜欢秋天，秋天很凉快。', py: 'Wǒ zuì xǐhuan qiūtiān, qiūtiān hěn liángkuai.', vi: 'Tôi thích mùa thu nhất, mùa thu rất mát mẻ.' }
        ],
        tip: 'Người Việt hay dịch chữ "thì / là": ✗ 今天是很冷 → 今天很冷. Cảm thán với 太 nhớ có 了 ở cuối: ✗ 今天太热！ → 今天太热了！ Không chồng hai phó từ mức độ: ✗ 很非常冷. Đừng nhầm 不太冷 (không lạnh lắm) với 太冷了 (lạnh quá) — chỉ khác một chữ 不 mà nghĩa gần như ngược nhau.'
      },
      dialogue: [
        { s: 'Lan', t: '李华，北京今天天气怎么样？', py: 'Lǐ Huá, Běijīng jīntiān tiānqì zěnmeyàng?', vi: 'Lý Hoa, hôm nay thời tiết Bắc Kinh thế nào?' },
        { s: '李华', t: '今天是晴天，气温十度。', py: 'Jīntiān shì qíngtiān, qìwēn shí dù.', vi: 'Hôm nay trời nắng, nhiệt độ mười độ.' },
        { s: 'Lan', t: '十度？太冷了！河内今天二十八度。', py: 'Shí dù? Tài lěng le! Hénèi jīntiān èrshíbā dù.', vi: 'Mười độ? Lạnh quá! Hôm nay Hà Nội 28 độ.' },
        { s: '李华', t: '河内的冬天不冷吗？', py: 'Hénèi de dōngtiān bù lěng ma?', vi: 'Mùa đông Hà Nội không lạnh à?' },
        { s: 'Lan', t: '不太冷，有时候很暖和。北京冬天下雪吗？', py: 'Bú tài lěng, yǒu shíhou hěn nuǎnhuo. Běijīng dōngtiān xià xuě ma?', vi: 'Không lạnh lắm, có lúc rất ấm áp. Mùa đông Bắc Kinh có tuyết không?' },
        { s: '李华', t: '下雪。北京的冬天非常冷，风也很大。', py: 'Xià xuě. Běijīng de dōngtiān fēicháng lěng, fēng yě hěn dà.', vi: 'Có tuyết. Mùa đông Bắc Kinh vô cùng lạnh, gió cũng rất to.' },
        { s: 'Lan', t: '你喜欢北京的秋天吗？', py: 'Nǐ xǐhuan Běijīng de qiūtiān ma?', vi: 'Bạn có thích mùa thu Bắc Kinh không?' },
        { s: '李华', t: '喜欢！秋天最好，很凉快，不冷也不热。', py: 'Xǐhuan! Qiūtiān zuì hǎo, hěn liángkuai, bù lěng yě bú rè.', vi: 'Thích chứ! Mùa thu đẹp nhất, rất mát mẻ, không lạnh cũng không nóng.' },
        { s: 'Lan', t: '那我秋天去北京！', py: 'Nà wǒ qiūtiān qù Běijīng!', vi: 'Thế thì mùa thu mình sẽ đi Bắc Kinh!' }
      ],
      exercises: [
        { type: 'mc', q: 'Câu nào đúng nghĩa "Hôm nay lạnh"?', options: ['今天是很冷。', '今天很冷。', '今天冷很。'], answer: 1, explain: 'Tính từ làm vị ngữ, không dùng 是; 很 đứng trước tính từ.' },
        { type: 'mc', q: '夏天 nghĩa là:', options: ['mùa xuân', 'mùa thu', 'mùa hè'], answer: 2, explain: '夏天 xiàtiān (hạ thiên) = mùa hè.' },
        { type: 'mc', q: '"Hôm nay nóng quá!" nói là:', options: ['今天太热了！', '今天太热！', '今天热太了！'], answer: 0, explain: 'Cảm thán: 太 + tính từ + 了.' },
        { type: 'mc', q: '不太冷 nghĩa là:', options: ['rất lạnh', 'không lạnh lắm', 'lạnh quá'], answer: 1, explain: '不太 + tính từ = không… lắm.' },
        { type: 'mc', q: 'Hỏi "Thời tiết thế nào?", câu nào đúng?', options: ['天气什么？', '天气怎么样吗？', '天气怎么样？'], answer: 2, explain: '怎么样 đã là từ để hỏi nên không thêm 吗.' },
        { type: 'mc', q: 'Trời quang, có nắng gọi là:', options: ['晴天', '阴天', '下雨'], answer: 0, explain: '晴天 = trời nắng; 阴天 = trời râm.' },
        { type: 'fill', q: '北京冬天常常下___。（Mùa đông Bắc Kinh thường có tuyết rơi.）', answer: ['雪', 'xuě', 'xue'], hint: 'xuě – tuyết', explain: '下雪 = tuyết rơi; 下雨 = mưa.' },
        { type: 'fill', q: '今天三十五___，太热了！（Hôm nay 35 độ, nóng quá!）', answer: ['度', 'dù', 'du'], hint: 'dù – độ', explain: 'Số + 度 = … độ.' },
        { type: 'fill', q: '我___喜欢秋天。（Tôi thích mùa thu nhất.）', answer: ['最', 'zuì', 'zui'], hint: 'zuì – nhất', explain: '最 đứng trước động từ tâm lý hoặc tính từ.' },
        { type: 'fill', q: '今天天气___？（Thời tiết hôm nay thế nào?）', answer: ['怎么样', 'zěnmeyàng', 'zenmeyang', 'zěnme yàng', 'zenme yang'], hint: 'zěnmeyàng – thế nào', explain: '…怎么样？ hỏi tình hình.' },
        { type: 'fill', q: '秋天很___。（Mùa thu rất mát mẻ.）', answer: ['凉快', 'liángkuai', 'liangkuai', 'liáng kuai', 'liang kuai'], hint: 'liángkuai – mát mẻ', explain: '凉快 = mát mẻ; 暖和 = ấm áp.' },
        { type: 'order', vi: 'Mùa hè Hà Nội rất nóng.', words: ['很热', '河内的', '夏天'], answer: '河内的 夏天 很热' },
        { type: 'order', vi: 'Hôm nay không lạnh lắm.', words: ['冷', '今天', '不太'], answer: '今天 不太 冷' },
        { type: 'order', vi: 'Thời tiết Bắc Kinh thế nào?', words: ['天气', '怎么样？', '北京的'], answer: '北京的 天气 怎么样？' },
        { type: 'order', vi: 'Tôi thích mùa xuân nhất.', words: ['春天', '喜欢', '我', '最'], answer: '我 最 喜欢 春天' },
        { type: 'order', vi: 'Hôm nay trời mưa, gió cũng rất to.', words: ['下雨，', '很大', '也', '风', '今天'], answer: '今天 下雨， 风 也 很大' }
      ],
      reading: {
        title: '河内的天气',
        titleVi: 'Thời tiết Hà Nội',
        text: [
          '我是越南人，我家在河内。河内有春天、夏天、秋天和冬天。',
          '春天很暖和。夏天非常热，常常下雨，气温三十五度。冬天不太冷，不下雪。',
          '我最喜欢秋天。秋天很凉快，天气也很好。你呢？'
        ],
        py: [
          'Wǒ shì Yuènánrén, wǒ jiā zài Hénèi. Hénèi yǒu chūntiān, xiàtiān, qiūtiān hé dōngtiān.',
          'Chūntiān hěn nuǎnhuo. Xiàtiān fēicháng rè, chángcháng xià yǔ, qìwēn sānshíwǔ dù. Dōngtiān bú tài lěng, bú xià xuě.',
          'Wǒ zuì xǐhuan qiūtiān. Qiūtiān hěn liángkuai, tiānqì yě hěn hǎo. Nǐ ne?'
        ],
        vi: [
          'Tôi là người Việt Nam, nhà tôi ở Hà Nội. Hà Nội có mùa xuân, mùa hè, mùa thu và mùa đông.',
          'Mùa xuân rất ấm áp. Mùa hè vô cùng nóng, thường hay mưa, nhiệt độ 35 độ. Mùa đông không lạnh lắm, không có tuyết.',
          'Tôi thích mùa thu nhất. Mùa thu rất mát mẻ, thời tiết cũng rất đẹp. Còn bạn?'
        ],
        questions: [
          { q: 'Người viết sống ở đâu?', options: ['Bắc Kinh', 'Hà Nội', 'TP. Hồ Chí Minh'], answer: 1, explain: '我家在河内 – nhà tôi ở Hà Nội.' },
          { q: 'Mùa hè Hà Nội thế nào?', options: ['Vô cùng nóng, hay mưa', 'Mát mẻ', 'Có tuyết rơi'], answer: 0, explain: '夏天非常热，常常下雨 – mùa hè vô cùng nóng, thường mưa.' },
          { q: 'Mùa đông Hà Nội có tuyết không?', options: ['Có, rất nhiều', 'Thỉnh thoảng có', 'Không có tuyết', 'Hà Nội không có mùa đông'], answer: 2, explain: '冬天不太冷，不下雪 – mùa đông không lạnh lắm, không có tuyết.' },
          { q: 'Người viết thích mùa nào nhất?', options: ['Mùa xuân', 'Mùa hè', 'Mùa đông', 'Mùa thu'], answer: 3, explain: '我最喜欢秋天 – tôi thích mùa thu nhất.' }
        ]
      }
    }
  }
];
