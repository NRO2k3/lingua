// Bài mới chèn vào lộ trình tiếng Trung – HSK4 (xem cuối src/data/SCHEMA.md)
export default [
  // zh-hsk4-1b: Điều kiện: 只要…就, 只有…才, 不管(无论)…都
  {
    after: 'zh-hsk4-1',
    unit: {
      id: 'zh-hsk4-1b',
      icon: '🎯',
      title: 'Thi hùng biện & điều kiện thành công',
      goal: 'Nói về điều kiện đủ (只要…就), điều kiện duy nhất (只有…才) và kết quả không đổi trong mọi trường hợp (不管 / 无论…都) khi bàn chuyện học ngoại ngữ, thi đấu.',
      vocab: [
        { w: '只要', ipa: 'zhǐyào', hv: 'chỉ yếu', vi: 'chỉ cần', ex: '只要每天练习，你的口语就会进步。', exPy: 'Zhǐyào měi tiān liànxí, nǐ de kǒuyǔ jiù huì jìnbù.', exVi: 'Chỉ cần luyện tập mỗi ngày, khẩu ngữ của bạn sẽ tiến bộ.' },
        { w: '不管', ipa: 'bùguǎn', hv: 'bất quản', vi: 'bất kể, dù (khẩu ngữ)', ex: '不管多忙，她都坚持学汉语。', exPy: 'Bùguǎn duō máng, tā dōu jiānchí xué Hànyǔ.', exVi: 'Dù bận đến đâu, cô ấy vẫn kiên trì học tiếng Trung.' },
        { w: '无论', ipa: 'wúlùn', hv: 'vô luận', vi: 'bất luận, dù (trang trọng)', ex: '无论结果怎么样，我们都要认真准备。', exPy: 'Wúlùn jiéguǒ zěnmeyàng, wǒmen dōu yào rènzhēn zhǔnbèi.', exVi: 'Bất luận kết quả thế nào, chúng ta đều phải chuẩn bị nghiêm túc.' },
        { w: '条件', ipa: 'tiáojiàn', hv: 'điều kiện', vi: 'điều kiện', ex: '参加这个比赛有什么条件？', exPy: 'Cānjiā zhège bǐsài yǒu shénme tiáojiàn?', exVi: 'Tham gia cuộc thi này cần điều kiện gì?' },
        { w: '目标', ipa: 'mùbiāo', hv: 'mục tiêu', vi: 'mục tiêu', ex: '我今年的目标是通过汉语四级考试。', exPy: 'Wǒ jīnnián de mùbiāo shì tōngguò Hànyǔ sì jí kǎoshì.', exVi: 'Mục tiêu năm nay của tôi là thi đỗ kỳ thi tiếng Trung cấp 4.' },
        { w: '效果', ipa: 'xiàoguǒ', hv: 'hiệu quả', vi: 'hiệu quả, tác dụng', ex: '这种学习方法效果很好。', exPy: 'Zhè zhǒng xuéxí fāngfǎ xiàoguǒ hěn hǎo.', exVi: 'Phương pháp học này rất hiệu quả.' },
        { w: '水平', ipa: 'shuǐpíng', hv: 'thuỷ bình', vi: 'trình độ, mức độ', ex: '她的汉语水平提高得很快。', exPy: 'Tā de Hànyǔ shuǐpíng tígāo de hěn kuài.', exVi: 'Trình độ tiếng Trung của cô ấy tiến bộ rất nhanh.' },
        { w: '积累', ipa: 'jīlěi', hv: 'tích luỹ', vi: 'tích luỹ', ex: '词汇需要每天一点一点地积累。', exPy: 'Cíhuì xūyào měi tiān yì diǎn yì diǎn de jīlěi.', exVi: 'Từ vựng cần tích luỹ từng chút một mỗi ngày.' },
        { w: '态度', ipa: 'tàidu', hv: 'thái độ', vi: 'thái độ', ex: '学习态度比聪明更重要。', exPy: 'Xuéxí tàidu bǐ cōngming gèng zhòngyào.', exVi: 'Thái độ học tập quan trọng hơn sự thông minh.' },
        { w: '获得', ipa: 'huòdé', hv: 'hoạch đắc', vi: 'giành được, đạt được', ex: '他在比赛中获得了第一名。', exPy: 'Tā zài bǐsài zhōng huòdé le dì yī míng.', exVi: 'Anh ấy giành giải nhất trong cuộc thi.' },
        { w: '结果', ipa: 'jiéguǒ', hv: 'kết quả', vi: 'kết quả', ex: '比赛的结果明天才知道。', exPy: 'Bǐsài de jiéguǒ míngtiān cái zhīdào.', exVi: 'Ngày mai mới biết kết quả cuộc thi.' },
        { w: '正确', ipa: 'zhèngquè', hv: 'chính xác', vi: 'đúng, chính xác', ex: '这个句子的语法不正确。', exPy: 'Zhège jùzi de yǔfǎ bú zhèngquè.', exVi: 'Ngữ pháp của câu này không đúng.' },
        { w: '语法', ipa: 'yǔfǎ', hv: 'ngữ pháp', vi: 'ngữ pháp', ex: '汉语语法其实不太难。', exPy: 'Hànyǔ yǔfǎ qíshí bú tài nán.', exVi: 'Ngữ pháp tiếng Trung thật ra không khó lắm.' },
        { w: '流利', ipa: 'liúlì', hv: 'lưu lợi', vi: 'lưu loát, trôi chảy', ex: '他的汉语说得很流利。', exPy: 'Tā de Hànyǔ shuō de hěn liúlì.', exVi: 'Anh ấy nói tiếng Trung rất lưu loát.' },
        { w: '背', ipa: 'bèi', hv: 'bối', vi: 'học thuộc lòng', ex: '我每天背二十个生词。', exPy: 'Wǒ měi tiān bèi èrshí gè shēngcí.', exVi: 'Mỗi ngày tôi học thuộc hai mươi từ mới.' },
        { w: '赢', ipa: 'yíng', hv: 'doanh', vi: 'thắng', ex: '我们班赢了这场比赛。', exPy: 'Wǒmen bān yíng le zhè chǎng bǐsài.', exVi: 'Lớp chúng tôi đã thắng trận đấu này.' },
        { w: '输', ipa: 'shū', hv: 'thâu', vi: 'thua', ex: '输了也没关系，下次再来。', exPy: 'Shū le yě méi guānxi, xià cì zài lái.', exVi: 'Thua cũng không sao, lần sau lại thử.' },
        { w: '比赛', ipa: 'bǐsài', hv: 'tỉ tái', vi: 'cuộc thi, thi đấu', ex: '我想参加汉语演讲比赛。', exPy: 'Wǒ xiǎng cānjiā Hànyǔ yǎnjiǎng bǐsài.', exVi: 'Tôi muốn tham gia cuộc thi hùng biện tiếng Trung.' },
        { w: '信心', ipa: 'xìnxīn', hv: 'tín tâm', vi: 'sự tự tin, lòng tin', ex: '只要有信心，就能做好。', exPy: 'Zhǐyào yǒu xìnxīn, jiù néng zuò hǎo.', exVi: 'Chỉ cần có tự tin là làm tốt được.' },
        { w: '能够', ipa: 'nénggòu', hv: 'năng cấu', vi: 'có thể, có khả năng', ex: '我希望能够在比赛中得奖。', exPy: 'Wǒ xīwàng nénggòu zài bǐsài zhōng dé jiǎng.', exVi: 'Tôi hy vọng có thể đoạt giải trong cuộc thi.' }
      ],
      grammar: {
        title: '只要…就…, 只有…才…, 不管 / 无论…都…',
        explain: [
          '只要 A，就 B = chỉ cần A thì B. A là điều kiện ĐỦ: có A là đủ để có B (ngoài A có thể còn cách khác). Giọng nhẹ nhàng, khích lệ: 只要每天练习，就能说得流利。',
          '只有 A，才 B = chỉ có A thì mới B. A là điều kiện DUY NHẤT, bắt buộc: thiếu A thì không có B. Giọng nhấn mạnh, nghiêm khắc: 只有多开口，才能提高口语水平。 Cặp cố định: 只要 đi với 就, 只有 đi với 才 — không đổi chéo.',
          '不管 / 无论 + phạm vi lựa chọn，都 (也) + kết quả = bất kể thế nào thì kết quả vẫn vậy. Phạm vi lựa chọn có thể là từ để hỏi (谁, 什么, 怎么样, 多 + tính từ), dạng A 还是 B hoặc A 不 A. 无论 trang trọng, hay dùng trong văn viết; 不管 thiên về khẩu ngữ. 都 / 也 đặt sau chủ ngữ của vế sau.',
          'Sau 不管 / 无论 không dùng một câu trần thuật bình thường: ✗ 不管下雨，我都去。→ ✓ 不管下不下雨，我都去。 Nếu chỉ có một giả định, dùng 即使…也… (bài trước): 即使下雨，我也去。'
        ],
        table: [
          ['Mẫu', 'Ý nghĩa', 'Ví dụ'],
          ['只要 A，就 B', 'chỉ cần A (đủ) là B', '只要你努力，就能赢。'],
          ['只有 A，才 B', 'chỉ có A (bắt buộc) mới B', '只有多练，才能说得流利。'],
          ['不管 / 无论 + từ để hỏi，都 …', 'bất kể … đều …', '不管谁来，我都欢迎。'],
          ['不管 / 无论 + A 还是 B / A 不 A，都 …', 'dù A hay B đều …', '无论输还是赢，都要坚持。']
        ],
        examples: [
          { t: '只要每天背十个生词，一年就能积累三千多个。', py: 'Zhǐyào měi tiān bèi shí gè shēngcí, yì nián jiù néng jīlěi sānqiān duō gè.', vi: 'Chỉ cần mỗi ngày học thuộc mười từ mới, một năm là tích luỹ được hơn ba nghìn từ.' },
          { t: '只有态度认真，才能获得好结果。', py: 'Zhǐyǒu tàidu rènzhēn, cái néng huòdé hǎo jiéguǒ.', vi: 'Chỉ có thái độ nghiêm túc mới đạt được kết quả tốt.' },
          { t: '不管比赛多难，我们都不放弃。', py: 'Bùguǎn bǐsài duō nán, wǒmen dōu bú fàngqì.', vi: 'Dù cuộc thi khó đến đâu, chúng tôi cũng không bỏ cuộc.' },
          { t: '无论输还是赢，这都是一次很好的经验。', py: 'Wúlùn shū háishi yíng, zhè dōu shì yí cì hěn hǎo de jīngyàn.', vi: 'Dù thua hay thắng, đây đều là một trải nghiệm rất tốt.' },
          { t: '不管你去不去，我都要去。', py: 'Bùguǎn nǐ qù bu qù, wǒ dōu yào qù.', vi: 'Bất kể bạn có đi hay không, tôi vẫn đi.' }
        ],
        tip: 'Đừng ghép lệch cặp: ✗ 只要…才… / ✗ 只有…就…. Mẹo nhớ: 只要 "nhẹ" — có là được → 就; 只有 "gắt" — phải có mới được → 才. Sau 不管 / 无论 phải có phạm vi lựa chọn: ✗ 不管天气很冷，他都跑步 → ✓ 不管天气多冷，他都跑步。 Bẫy Hán Việt: 水平 (thuỷ bình) không phải "mặt nước phẳng" mà là "trình độ": 汉语水平 = trình độ tiếng Trung. 工作 (công tác) là "làm việc, công việc", không phải "đi công tác" (đi công tác là 出差): 我明天去工作 = mai tôi đi làm. 东西 (đông tây) là "đồ vật": 买东西 = mua đồ. 比赛 (tỉ tái) là "cuộc thi đấu", không phải "so sánh" (so sánh là 比较).'
      },
      dialogue: [
        { s: '阮兰', t: '李老师，学校的汉语演讲比赛，我能参加吗？', py: 'Lǐ lǎoshī, xuéxiào de Hànyǔ yǎnjiǎng bǐsài, wǒ néng cānjiā ma?', vi: 'Cô Lý ơi, cuộc thi hùng biện tiếng Trung của trường, em tham gia được không ạ?' },
        { s: '李老师', t: '当然可以。只要是留学生，就能报名。', py: 'Dāngrán kěyǐ. Zhǐyào shì liúxuéshēng, jiù néng bàomíng.', vi: 'Tất nhiên là được. Chỉ cần là lưu học sinh là đăng ký được.' },
        { s: '阮兰', t: '可是我的水平不太高，说得也不流利，我怕输。', py: 'Kěshì wǒ de shuǐpíng bú tài gāo, shuō de yě bù liúlì, wǒ pà shū.', vi: 'Nhưng trình độ của em chưa cao, nói cũng chưa lưu loát, em sợ thua.' },
        { s: '李老师', t: '不管输还是赢，都是很好的锻炼。最重要的是态度。', py: 'Bùguǎn shū háishi yíng, dōu shì hěn hǎo de duànliàn. Zuì zhòngyào de shì tàidu.', vi: 'Dù thua hay thắng đều là dịp rèn luyện tốt. Quan trọng nhất là thái độ.' },
        { s: '阮兰', t: '那我应该怎么准备呢？', py: 'Nà wǒ yīnggāi zěnme zhǔnbèi ne?', vi: 'Vậy em nên chuẩn bị thế nào ạ?' },
        { s: '李老师', t: '先把演讲的内容写好，注意语法要正确。然后每天大声读，把它背下来。只有多练，才会有信心。', py: 'Xiān bǎ yǎnjiǎng de nèiróng xiě hǎo, zhùyì yǔfǎ yào zhèngquè. Ránhòu měi tiān dàshēng dú, bǎ tā bèi xiàlai. Zhǐyǒu duō liàn, cái huì yǒu xìnxīn.', vi: 'Trước hết viết xong nội dung bài nói, chú ý ngữ pháp phải đúng. Sau đó mỗi ngày đọc to rồi học thuộc. Chỉ có luyện nhiều mới tự tin được.' },
        { s: '阮兰', t: '好的！我的目标是进前三名。', py: 'Hǎo de! Wǒ de mùbiāo shì jìn qián sān míng.', vi: 'Vâng ạ! Mục tiêu của em là vào top ba.' },
        { s: '李老师', t: '很好！只要你坚持下去，就一定能获得好结果。', py: 'Hěn hǎo! Zhǐyào nǐ jiānchí xiàqu, jiù yídìng néng huòdé hǎo jiéguǒ.', vi: 'Tốt lắm! Chỉ cần em kiên trì, nhất định sẽ đạt kết quả tốt.' }
      ],
      exercises: [
        { type: 'mc', q: '只要你每天练习，___能说得流利。', options: ['才', '就', '都'], answer: 1, explain: '只要 (điều kiện đủ) đi với 就.' },
        { type: 'mc', q: '只有多开口说，___能提高口语水平。', options: ['才', '就', '也'], answer: 0, explain: '只有 (điều kiện duy nhất) đi với 才.' },
        { type: 'mc', q: '不管天气___，他都去跑步。', options: ['很冷', '冷不冷', '冷了'], answer: 1, explain: 'Sau 不管 cần phạm vi lựa chọn: dạng A 不 A (冷不冷) hoặc 多冷; không dùng 很冷.' },
        { type: 'mc', q: 'Câu nào ĐÚNG?', options: ['只要努力，才能成功。', '只有努力，就能成功。', '只有努力，才能成功。', '不管努力，都能成功。'], answer: 2, explain: 'Cặp đúng: 只有…才…. 只要 phải đi với 就; 不管 cần phạm vi lựa chọn.' },
        { type: 'mc', q: '水平 trong 汉语水平 nghĩa là:', options: ['mặt nước phẳng', 'bình thường', 'công bằng', 'trình độ'], answer: 3, explain: 'Bẫy Hán Việt: 水平 (thuỷ bình) = trình độ, mức độ. 汉语水平 = trình độ tiếng Trung.' },
        { type: 'mc', q: '"我明天去工作。" nghĩa là:', options: ['Mai tôi đi làm.', 'Mai tôi đi công tác.', 'Mai tôi đi thi đấu.'], answer: 0, explain: 'Bẫy Hán Việt: 工作 (công tác) = làm việc. "Đi công tác" là 出差.' },
        { type: 'fill', q: '___你有信心，就能做好。（Chỉ cần bạn có tự tin thì sẽ làm tốt.）', answer: ['只要', 'zhǐyào', 'zhiyao', 'zhǐ yào', 'zhi yao'], hint: 'zhǐyào – chỉ cần', explain: 'Vế sau có 就 → dùng 只要.' },
        { type: 'fill', q: '只有多积累词汇，___能说得流利。（Chỉ có tích luỹ nhiều từ vựng mới nói lưu loát được.）', answer: ['才', 'cái', 'cai'], hint: 'cái – mới', explain: '只有 … 才 … = chỉ có … mới ….' },
        { type: 'fill', q: '___结果怎么样，我们都要认真准备。（Bất kể kết quả thế nào, chúng ta đều phải chuẩn bị nghiêm túc.）', answer: ['不管', 'bùguǎn', 'buguan', 'bù guǎn', 'bu guan', '无论', 'wúlùn', 'wulun', 'wú lùn', 'wu lun'], hint: 'bùguǎn / wúlùn – bất kể', explain: '不管 / 无论 + từ để hỏi (怎么样) … 都 ….' },
        { type: 'fill', q: '我们班___了这场比赛，大家都很高兴。（Lớp chúng tôi thắng trận đấu này, mọi người đều rất vui.）', answer: ['赢', 'yíng', 'ying'], hint: 'yíng – thắng', explain: '赢 = thắng, trái nghĩa với 输 (thua).' },
        { type: 'fill', q: '他的汉语说得很___。（Anh ấy nói tiếng Trung rất lưu loát.）', answer: ['流利', 'liúlì', 'liuli', 'liú lì', 'liu li'], hint: 'liúlì – lưu loát', explain: '说得很流利 = nói rất lưu loát (bổ ngữ trạng thái với 得).' },
        { type: 'order', vi: 'Chỉ cần bạn kiên trì thì nhất định sẽ thắng.', words: ['一定', '只要', '能赢', '就', '你坚持，'], answer: '只要 你坚持， 就 一定 能赢' },
        { type: 'order', vi: 'Chỉ có thái độ nghiêm túc mới đạt được kết quả tốt.', words: ['才能', '态度认真，', '获得', '只有', '好结果'], answer: '只有 态度认真， 才能 获得 好结果' },
        { type: 'order', vi: 'Bất kể ai đến, tôi đều hoan nghênh.', words: ['都', '谁来，', '欢迎', '不管', '我'], answer: '不管 谁来， 我 都 欢迎' },
        { type: 'order', vi: 'Dù thắng hay thua, chúng tôi đều không bỏ cuộc.', words: ['输还是赢，', '不', '我们', '无论', '都', '放弃'], answer: '无论 输还是赢， 我们 都 不 放弃' },
        { type: 'order', vi: 'Mục tiêu năm nay của tôi là nâng cao trình độ tiếng Trung.', words: ['提高', '今年的目标', '汉语水平', '是', '我'], answer: '我 今年的目标 是 提高 汉语水平' }
      ],
      reading: {
        title: '我的第一次演讲比赛',
        titleVi: 'Cuộc thi hùng biện đầu tiên của tôi',
        text: [
          '去年秋天，学校举行了汉语演讲比赛。老师说，只要是留学生，就可以报名。那时候我的汉语水平不高，说得也不流利，我很担心会输，所以本来不想参加。',
          '老师对我说：“不管结果怎么样，都是一次很好的锻炼。只有敢开口，才能真正进步。”听了她的话，我有了信心，决定试一试。我想：只有参加了，才知道自己的问题在哪儿。',
          '我给自己定了一个目标：进入前三名。我每天早上背演讲的内容，晚上请中国朋友帮我改语法，看看句子是不是正确。我还把自己的演讲录下来，听听声调对不对。一个月里，我积累了很多新的词语。比赛那天，我非常紧张，可是一开口就不怕了。',
          '最后，我获得了第二名。老师说，这个成绩已经很不错了。虽然没有赢得第一名，但是我明白了：学外语，态度比聪明更重要。无论遇到什么困难，只要坚持下去，就一定会有效果。'
        ],
        py: [
          'Qùnián qiūtiān, xuéxiào jǔxíng le Hànyǔ yǎnjiǎng bǐsài. Lǎoshī shuō, zhǐyào shì liúxuéshēng, jiù kěyǐ bàomíng. Nà shíhou wǒ de Hànyǔ shuǐpíng bù gāo, shuō de yě bù liúlì, wǒ hěn dānxīn huì shū, suǒyǐ běnlái bù xiǎng cānjiā.',
          'Lǎoshī duì wǒ shuō: “Bùguǎn jiéguǒ zěnmeyàng, dōu shì yí cì hěn hǎo de duànliàn. Zhǐyǒu gǎn kāikǒu, cái néng zhēnzhèng jìnbù.” Tīng le tā de huà, wǒ yǒu le xìnxīn, juédìng shì yi shì. Wǒ xiǎng: zhǐyǒu cānjiā le, cái zhīdào zìjǐ de wèntí zài nǎr.',
          'Wǒ gěi zìjǐ dìng le yí gè mùbiāo: jìnrù qián sān míng. Wǒ měi tiān zǎoshang bèi yǎnjiǎng de nèiróng, wǎnshang qǐng Zhōngguó péngyou bāng wǒ gǎi yǔfǎ, kànkan jùzi shì bu shì zhèngquè. Wǒ hái bǎ zìjǐ de yǎnjiǎng lù xiàlai, tīngting shēngdiào duì bu duì. Yí gè yuè li, wǒ jīlěi le hěn duō xīn de cíyǔ. Bǐsài nà tiān, wǒ fēicháng jǐnzhāng, kěshì yì kāikǒu jiù bú pà le.',
          'Zuìhòu, wǒ huòdé le dì èr míng. Lǎoshī shuō, zhège chéngjì yǐjīng hěn búcuò le. Suīrán méiyǒu yíngdé dì yī míng, dànshì wǒ míngbai le: xué wàiyǔ, tàidu bǐ cōngming gèng zhòngyào. Wúlùn yùdào shénme kùnnan, zhǐyào jiānchí xiàqu, jiù yídìng huì yǒu xiàoguǒ.'
        ],
        vi: [
          'Mùa thu năm ngoái, trường tổ chức cuộc thi hùng biện tiếng Trung. Cô giáo nói chỉ cần là lưu học sinh là có thể đăng ký. Hồi đó trình độ tiếng Trung của tôi chưa cao, nói cũng chưa lưu loát, tôi rất lo sẽ thua nên lúc đầu không muốn tham gia.',
          'Cô giáo nói với tôi: “Bất kể kết quả thế nào, đó đều là một lần rèn luyện rất tốt. Chỉ có dám mở miệng mới thật sự tiến bộ được.” Nghe cô nói, tôi có thêm tự tin và quyết định thử một lần. Tôi nghĩ: chỉ có tham gia rồi mới biết vấn đề của mình nằm ở đâu.',
          'Tôi đặt cho mình một mục tiêu: vào top ba. Mỗi sáng tôi học thuộc nội dung bài nói, buổi tối nhờ bạn Trung Quốc sửa ngữ pháp, xem câu có đúng không. Tôi còn ghi âm bài nói của mình, nghe lại xem thanh điệu có đúng không. Trong một tháng, tôi tích luỹ được rất nhiều từ ngữ mới. Hôm thi, tôi cực kỳ hồi hộp, nhưng vừa mở miệng là hết sợ.',
          'Cuối cùng, tôi đạt giải nhì. Cô giáo nói thành tích này đã rất khá rồi. Tuy không giành được giải nhất, nhưng tôi hiểu ra: học ngoại ngữ, thái độ quan trọng hơn thông minh. Bất luận gặp khó khăn gì, chỉ cần kiên trì thì nhất định sẽ có hiệu quả.'
        ],
        questions: [
          { q: 'Lúc đầu vì sao "tôi" không muốn tham gia cuộc thi?', options: ['Vì không phải lưu học sinh', 'Vì trình độ chưa cao, sợ thua', 'Vì quá bận', 'Vì cô giáo không cho'], answer: 1, explain: '我的汉语水平不高，说得也不流利，我很担心会输，所以本来不想参加。' },
          { q: 'Câu nói nào của cô giáo giúp "tôi" có tự tin?', options: ['Dù kết quả thế nào cũng là một lần rèn luyện tốt', 'Chỉ cần đăng ký là sẽ có giải', 'Phải giành giải nhất', 'Nên học thêm từ vựng'], answer: 0, explain: '不管结果怎么样，都是一次很好的锻炼。' },
          { q: 'Mỗi buổi tối "tôi" làm gì để chuẩn bị?', options: ['Học thuộc nội dung bài nói', 'Xem phim Trung Quốc', 'Nhờ bạn Trung Quốc sửa ngữ pháp', 'Viết nhật ký'], answer: 2, explain: '晚上请中国朋友帮我改语法。Học thuộc là việc buổi sáng.' },
          { q: 'Kết quả cuộc thi của "tôi" thế nào?', options: ['Giải nhất', 'Giải ba', 'Không đạt giải', 'Giải nhì'], answer: 3, explain: '最后，我获得了第二名。' }
        ]
      }
    }
  },

  // zh-hsk4-3b: Câu hỏi tu từ & đại từ nghi vấn phiếm chỉ
  {
    after: 'zh-hsk4-3',
    unit: {
      id: 'zh-hsk4-3b',
      icon: '❓',
      title: 'Chuyện ở ký túc xá',
      goal: 'Dùng câu hỏi tu từ (难道…吗, 不是…吗, 哪儿…啊) để khẳng định, trách móc nhẹ; dùng từ để hỏi với nghĩa "bất cứ" (什么都, 谁都, 怎么也) khi góp ý, thương lượng với bạn cùng phòng.',
      vocab: [
        { w: '难道', ipa: 'nándào', hv: 'nan đạo', vi: 'lẽ nào, chẳng lẽ', ex: '难道你不知道明天考试吗？', exPy: 'Nándào nǐ bù zhīdào míngtiān kǎoshì ma?', exVi: 'Lẽ nào bạn không biết mai thi sao?' },
        { w: '到底', ipa: 'dàodǐ', hv: 'đáo để', vi: 'rốt cuộc', ex: '你到底想说什么？', exPy: 'Nǐ dàodǐ xiǎng shuō shénme?', exVi: 'Rốt cuộc bạn muốn nói gì?' },
        { w: '本来', ipa: 'běnlái', hv: 'bản lai', vi: 'vốn dĩ, lúc đầu', ex: '我本来想早点儿睡，可是外面太吵了。', exPy: 'Wǒ běnlái xiǎng zǎo diǎnr shuì, kěshì wàimiàn tài chǎo le.', exVi: 'Lúc đầu tôi định ngủ sớm, nhưng bên ngoài ồn quá.' },
        { w: '原来', ipa: 'yuánlái', hv: 'nguyên lai', vi: 'hoá ra (vỡ lẽ)', ex: '原来是你把灯关了！', exPy: 'Yuánlái shì nǐ bǎ dēng guān le!', exVi: 'Hoá ra là bạn tắt đèn!' },
        { w: '怪', ipa: 'guài', hv: 'quái', vi: 'trách, đổ lỗi', ex: '这件事不能怪他。', exPy: 'Zhè jiàn shì bù néng guài tā.', exVi: 'Chuyện này không thể trách anh ấy.' },
        { w: '吵', ipa: 'chǎo', hv: 'sảo', vi: 'ồn ào; cãi nhau', ex: '别吵了，大家在学习呢！', exPy: 'Bié chǎo le, dàjiā zài xuéxí ne!', exVi: 'Đừng ồn nữa, mọi người đang học mà!' },
        { w: '脏', ipa: 'zāng', hv: 'tạng', vi: 'bẩn', ex: '你的衣服怎么这么脏？', exPy: 'Nǐ de yīfu zěnme zhème zāng?', exVi: 'Quần áo của bạn sao bẩn thế?' },
        { w: '乱', ipa: 'luàn', hv: 'loạn', vi: 'bừa bộn, lộn xộn', ex: '房间太乱了，什么都找不到。', exPy: 'Fángjiān tài luàn le, shénme dōu zhǎo bu dào.', exVi: 'Phòng bừa quá, cái gì cũng không tìm thấy.' },
        { w: '批评', ipa: 'pīpíng', hv: 'phê bình', vi: 'phê bình, chỉ trích', ex: '他上课玩手机，被老师批评了。', exPy: 'Tā shàngkè wán shǒujī, bèi lǎoshī pīpíng le.', exVi: 'Cậu ấy chơi điện thoại trong giờ học nên bị thầy phê bình.' },
        { w: '主动', ipa: 'zhǔdòng', hv: 'chủ động', vi: 'chủ động', ex: '他总是主动打扫房间。', exPy: 'Tā zǒngshì zhǔdòng dǎsǎo fángjiān.', exVi: 'Anh ấy luôn chủ động dọn phòng.' },
        { w: '互相', ipa: 'hùxiāng', hv: 'hỗ tương', vi: 'lẫn nhau', ex: '住在一起，大家应该互相帮助。', exPy: 'Zhù zài yìqǐ, dàjiā yīnggāi hùxiāng bāngzhù.', exVi: 'Sống chung thì mọi người nên giúp đỡ lẫn nhau.' },
        { w: '理解', ipa: 'lǐjiě', hv: 'lý giải', vi: 'hiểu, thông cảm', ex: '我理解你的心情。', exPy: 'Wǒ lǐjiě nǐ de xīnqíng.', exVi: 'Tôi hiểu tâm trạng của bạn.' },
        { w: '规定', ipa: 'guīdìng', hv: 'quy định', vi: 'quy định', ex: '宿舍规定晚上十一点以后不能大声说话。', exPy: 'Sùshè guīdìng wǎnshang shíyī diǎn yǐhòu bù néng dàshēng shuōhuà.', exVi: 'Ký túc xá quy định sau 11 giờ tối không được nói to.' },
        { w: '共同', ipa: 'gòngtóng', hv: 'cộng đồng', vi: 'chung, cùng nhau', ex: '我们有很多共同的爱好。', exPy: 'Wǒmen yǒu hěn duō gòngtóng de àihào.', exVi: 'Chúng tôi có nhiều sở thích chung.' },
        { w: '任何', ipa: 'rènhé', hv: 'nhậm hà', vi: 'bất kỳ', ex: '有任何问题，都可以问我。', exPy: 'Yǒu rènhé wèntí, dōu kěyǐ wèn wǒ.', exVi: 'Có bất kỳ vấn đề gì cũng có thể hỏi tôi.' },
        { w: '一切', ipa: 'yíqiè', hv: 'nhất thiết', vi: 'tất cả, mọi thứ', ex: '一切都准备好了。', exPy: 'Yíqiè dōu zhǔnbèi hǎo le.', exVi: 'Mọi thứ đều đã chuẩn bị xong.' },
        { w: '千万', ipa: 'qiānwàn', hv: 'thiên vạn', vi: 'nhất định (dặn dò)', ex: '你千万别忘了带钥匙。', exPy: 'Nǐ qiānwàn bié wàng le dài yàoshi.', exVi: 'Bạn nhất định đừng quên mang chìa khoá.' },
        { w: '至少', ipa: 'zhìshǎo', hv: 'chí thiểu', vi: 'ít nhất', ex: '每个星期至少打扫一次房间。', exPy: 'Měi gè xīngqī zhìshǎo dǎsǎo yí cì fángjiān.', exVi: 'Mỗi tuần dọn phòng ít nhất một lần.' },
        { w: '意见', ipa: 'yìjiàn', hv: 'ý kiến', vi: 'ý kiến; điều không hài lòng', ex: '你对我有什么意见，可以直接说。', exPy: 'Nǐ duì wǒ yǒu shénme yìjiàn, kěyǐ zhíjiē shuō.', exVi: 'Bạn có gì không hài lòng về tôi thì cứ nói thẳng.' },
        { w: '生气', ipa: 'shēngqì', hv: 'sinh khí', vi: 'tức giận', ex: '别生气了，他不是故意的。', exPy: 'Bié shēngqì le, tā bú shì gùyì de.', exVi: 'Đừng giận nữa, cậu ấy không cố ý đâu.' }
      ],
      grammar: {
        title: 'Câu hỏi tu từ (难道, 不是…吗) & từ để hỏi mang nghĩa "bất cứ" (什么都, 谁都…)',
        explain: [
          'Câu hỏi tu từ (phản vấn) không chờ câu trả lời: người nói dùng hình thức câu hỏi để khẳng định mạnh hơn, thường kèm ngạc nhiên hoặc trách móc. Hỏi phủ định → ý khẳng định; hỏi khẳng định → ý phủ định.',
          '难道…吗？ = lẽ nào… sao? 难道 đứng đầu câu hoặc sau chủ ngữ: 难道你不知道吗？(= bạn phải biết chứ). 不是…吗？ = chẳng phải… sao? (= đúng là…): 你不是说今天打扫吗？(bạn đã nói là hôm nay dọn mà). Ngoài ra: 怎么能…呢？(sao có thể…) và 哪儿…啊？(đâu có…): 我哪儿有时间啊？ = tôi làm gì có thời gian.',
          'Từ để hỏi + 都 / 也 mang nghĩa "bất cứ, tất cả": 什么都 (cái gì cũng), 谁都 (ai cũng), 哪儿都 (đâu cũng), 什么时候都 (lúc nào cũng). Với phủ định: 什么都不想吃 (chẳng muốn ăn gì), 怎么也睡不着 (thế nào cũng không ngủ được). Đây là câu trần thuật, cuối câu không có 吗.',
          'Hô ứng: cùng một từ để hỏi lặp lại ở hai vế, vế sau phụ thuộc vế trước: 想吃什么就吃什么 (thích ăn gì thì ăn nấy), 谁先到谁买票 (ai đến trước người đó mua vé), 哪儿便宜就去哪儿.'
        ],
        table: [
          ['Mẫu', 'Ý thật', 'Ví dụ'],
          ['难道 … 吗？', 'lẽ nào… (= chắc chắn là ngược lại)', '难道你忘了吗？'],
          ['不是 … 吗？', 'chẳng phải… sao (= đúng là…)', '你不是说过吗？'],
          ['怎么能 / 哪儿 … 呢 (啊)？', 'sao có thể / đâu có…', '我哪儿知道啊？'],
          ['什么 / 谁 / 哪儿 + 都 / 也', 'bất cứ cái gì / ai / đâu', '他什么都吃。'],
          ['怎么 + 也 + 不 / 没 …', 'thế nào cũng không…', '我怎么也睡不着。'],
          ['từ để hỏi … 就 … từ để hỏi', '… nào thì … nấy', '想去哪儿就去哪儿。']
        ],
        examples: [
          { t: '难道你不知道宿舍的规定吗？', py: 'Nándào nǐ bù zhīdào sùshè de guīdìng ma?', vi: 'Lẽ nào bạn không biết quy định của ký túc xá?' },
          { t: '你不是说今天打扫房间吗？怎么又出去了？', py: 'Nǐ bú shì shuō jīntiān dǎsǎo fángjiān ma? Zěnme yòu chūqu le?', vi: 'Chẳng phải bạn nói hôm nay dọn phòng sao? Sao lại đi ra ngoài rồi?' },
          { t: '这么晚了，我哪儿有时间做饭啊？', py: 'Zhème wǎn le, wǒ nǎr yǒu shíjiān zuò fàn a?', vi: 'Muộn thế này rồi, tôi làm gì có thời gian nấu cơm?' },
          { t: '他太累了，什么都不想做。', py: 'Tā tài lèi le, shénme dōu bù xiǎng zuò.', vi: 'Anh ấy mệt quá, chẳng muốn làm gì cả.' },
          { t: '外面太吵了，我怎么也睡不着。', py: 'Wàimiàn tài chǎo le, wǒ zěnme yě shuì bu zháo.', vi: 'Bên ngoài ồn quá, tôi thế nào cũng không ngủ được.' }
        ],
        tip: 'Câu hỏi tu từ trông như câu hỏi nhưng ý ngược lại: 难道你不累吗？ = chắc chắn bạn mệt. Câu "bất cứ" phải có 都 / 也: ✗ 我什么不知道 → ✓ 我什么都不知道; và không thêm 吗: ✗ 他谁都认识吗。(khi muốn nói "anh ấy ai cũng quen"). Bẫy Hán Việt: 共同 (cộng đồng) = chung, cùng (共同的爱好 = sở thích chung); "cộng đồng" trong tiếng Việt là 社区 / 群体. 一切 (nhất thiết) = tất cả, mọi thứ, không phải "nhất thiết phải" (= 必须 / 一定). 到底 (đáo để) = rốt cuộc, không phải "đáo để, ghê gớm". 理解 (lý giải) = hiểu, thông cảm, không phải "giải thích" (= 解释). 爱人 (ái nhân) ở đại lục là vợ / chồng, không phải "người yêu" (= 男朋友 / 女朋友).'
      },
      dialogue: [
        { s: '王明', t: '大卫，你到底什么时候打扫房间？', py: 'Dàwèi, nǐ dàodǐ shénme shíhou dǎsǎo fángjiān?', vi: 'David, rốt cuộc bao giờ cậu dọn phòng?' },
        { s: '大卫', t: '我不是上个星期刚打扫过吗？', py: 'Wǒ bú shì shàng ge xīngqī gāng dǎsǎo guo ma?', vi: 'Chẳng phải tuần trước tớ vừa dọn rồi sao?' },
        { s: '王明', t: '可是你看，桌子上又脏又乱，什么东西都有。难道你没看见吗？', py: 'Kěshì nǐ kàn, zhuōzi shang yòu zāng yòu luàn, shénme dōngxi dōu yǒu. Nándào nǐ méi kànjiàn ma?', vi: 'Nhưng cậu nhìn xem, trên bàn vừa bẩn vừa bừa, thứ gì cũng có. Lẽ nào cậu không thấy?' },
        { s: '大卫', t: '这些书不是我的，是你的啊！怎么能都怪我呢？', py: 'Zhèxiē shū bú shì wǒ de, shì nǐ de a! Zěnme néng dōu guài wǒ ne?', vi: 'Mấy cuốn sách này đâu phải của tớ, của cậu mà! Sao có thể trách hết lên tớ được?' },
        { s: '王明', t: '哦，原来是我的……对不起，我本来想昨天整理的。', py: 'Ò, yuánlái shì wǒ de…… Duìbuqǐ, wǒ běnlái xiǎng zuótiān zhěnglǐ de.', vi: 'Ồ, hoá ra là của tớ… Xin lỗi, tớ định hôm qua sắp xếp lại.' },
        { s: '大卫', t: '没关系。还有，你晚上打电话声音太大，我怎么也睡不着。', py: 'Méi guānxi. Hái yǒu, nǐ wǎnshang dǎ diànhuà shēngyīn tài dà, wǒ zěnme yě shuì bu zháo.', vi: 'Không sao. Còn nữa, buổi tối cậu gọi điện to quá, tớ thế nào cũng không ngủ được.' },
        { s: '王明', t: '真的吗？你怎么不早说？有任何意见都可以告诉我。', py: 'Zhēn de ma? Nǐ zěnme bù zǎo shuō? Yǒu rènhé yìjiàn dōu kěyǐ gàosu wǒ.', vi: 'Thật à? Sao cậu không nói sớm? Có góp ý gì cũng cứ bảo tớ.' },
        { s: '大卫', t: '那我们定个共同的规定吧：每个星期至少打扫一次，十一点以后不打电话。', py: 'Nà wǒmen dìng ge gòngtóng de guīdìng ba: měi ge xīngqī zhìshǎo dǎsǎo yí cì, shíyī diǎn yǐhòu bù dǎ diànhuà.', vi: 'Vậy mình đặt quy định chung nhé: mỗi tuần dọn ít nhất một lần, sau 11 giờ không gọi điện.' },
        { s: '王明', t: '好！住在一起，就应该互相理解。', py: 'Hǎo! Zhù zài yìqǐ, jiù yīnggāi hùxiāng lǐjiě.', vi: 'Được! Sống chung thì nên thông cảm cho nhau.' }
      ],
      exercises: [
        { type: 'mc', q: '难道你不知道吗？ có ý gì?', options: ['Bạn không biết à? (hỏi thật)', 'Lẽ nào bạn không biết? (= chắc chắn bạn biết)', 'Bạn có biết gì không?'], answer: 1, explain: 'Câu hỏi tu từ với 难道 + phủ định → ý khẳng định: bạn phải biết chứ.' },
        { type: 'mc', q: '你___说今天打扫吗？怎么又出去了？', options: ['不是', '难道', '到底'], answer: 0, explain: '不是…吗？ = chẳng phải (bạn đã nói)… sao? → nhắc lại điều chắc chắn.' },
        { type: 'mc', q: 'Câu nào nghĩa là "Tôi cái gì cũng không biết"?', options: ['我什么不知道。', '我不知道什么吗？', '我什么都不知道。', '我都什么不知道。'], answer: 2, explain: 'Từ để hỏi + 都 + phủ định: 什么都不知道.' },
        { type: 'mc', q: '一切 (nhất thiết) nghĩa là:', options: ['nhất định phải', 'cắt một nhát', 'duy nhất', 'tất cả, mọi thứ'], answer: 3, explain: 'Bẫy Hán Việt: 一切 = tất cả. "Nhất thiết phải" là 必须 / 一定.' },
        { type: 'mc', q: '我们有共同的爱好。 nghĩa là:', options: ['Chúng tôi có sở thích chung.', 'Chúng tôi thích hoạt động cộng đồng.', 'Chúng tôi yêu cộng đồng.'], answer: 0, explain: 'Bẫy Hán Việt: 共同 (cộng đồng) = chung, cùng.' },
        { type: 'mc', q: '想吃什么就吃什么 nghĩa là:', options: ['Muốn ăn gì không?', 'Không muốn ăn gì cả.', 'Thích ăn gì thì ăn nấy.'], answer: 2, explain: 'Hô ứng: cùng từ để hỏi 什么 ở hai vế → "… gì thì … nấy".' },
        { type: 'fill', q: '___你不认识他吗？他是我们的老师啊！（Lẽ nào bạn không quen anh ấy? Anh ấy là thầy của chúng ta mà!）', answer: ['难道', 'nándào', 'nandao', 'nán dào', 'nan dao'], hint: 'nándào – lẽ nào', explain: '难道…吗？ = lẽ nào… sao?' },
        { type: 'fill', q: '外面太吵了，我怎么___睡不着。（Bên ngoài ồn quá, tôi thế nào cũng không ngủ được.）', answer: ['也', 'yě', 'ye', '都', 'dōu', 'dou'], hint: 'yě – cũng', explain: '怎么也 + phủ định = thế nào cũng không….' },
        { type: 'fill', q: '你___想说什么？说清楚一点儿。（Rốt cuộc bạn muốn nói gì? Nói rõ hơn chút.）', answer: ['到底', 'dàodǐ', 'daodi', 'dào dǐ', 'dao di', '究竟', 'jiūjìng', 'jiujing'], hint: 'dàodǐ – rốt cuộc', explain: '到底 dùng trong câu hỏi để truy hỏi đến cùng.' },
        { type: 'fill', q: '我___想早点儿睡，可是你们太吵了。（Lúc đầu tôi định ngủ sớm, nhưng các bạn ồn quá.）', answer: ['本来', 'běnlái', 'benlai', 'běn lái', 'ben lai', '原来', 'yuánlái', 'yuanlai'], hint: 'běnlái – vốn dĩ, lúc đầu', explain: '本来 = lúc đầu định…, nhưng sau đó khác đi.' },
        { type: 'fill', q: '这个周末你___别忘了交作业。（Cuối tuần này bạn nhất định đừng quên nộp bài tập.）', answer: ['千万', 'qiānwàn', 'qianwan', 'qiān wàn', 'qian wan'], hint: 'qiānwàn – nhất định (dặn)', explain: '千万 + 别 / 不要 = nhất định đừng…, dùng khi dặn dò.' },
        { type: 'order', vi: 'Lẽ nào bạn không mệt sao?', words: ['不累', '难道', '吗？', '你'], answer: '难道 你 不累 吗？', alt: ['你 难道 不累 吗？'] },
        { type: 'order', vi: 'Chẳng phải bạn nói tối nay dọn phòng sao?', words: ['不是', '今晚打扫房间', '说', '吗？', '你'], answer: '你 不是 说 今晚打扫房间 吗？' },
        { type: 'order', vi: 'Anh ấy chẳng muốn làm gì cả.', words: ['什么', '不想做', '都', '他'], answer: '他 什么 都 不想做' },
        { type: 'order', vi: 'Sống chung thì nên thông cảm cho nhau.', words: ['应该', '互相理解', '住在一起，', '就'], answer: '住在一起， 就 应该 互相理解' },
        { type: 'order', vi: 'Mỗi tuần dọn phòng ít nhất một lần.', words: ['至少', '房间', '每个星期', '一次', '打扫'], answer: '每个星期 至少 打扫 一次 房间', alt: ['每个星期 至少 打扫 房间 一次'] }
      ],
      reading: {
        title: '我和我的同屋',
        titleVi: 'Tôi và bạn cùng phòng',
        text: [
          '我来中国留学已经一年了，一直住在学校的宿舍里。我的同屋叫大卫，是美国人。他喜欢运动，我喜欢看书，我们好像没有什么共同点。刚开始的时候，我们常常因为一些小事不高兴。',
          '大卫什么都好，就是不爱打扫。他的衣服到处都是，桌子上又脏又乱。我本来不想说，可是有一天，我怎么也找不到自己的书，终于生气了：“难道你没看见我们的房间有多乱吗？”',
          '大卫也很生气：“你不是每天晚上都打电话吗？声音那么大，我哪儿睡得着啊？”原来，他对我也有意见，只是一直没说。我听了以后，觉得很不好意思。',
          '那天晚上，我们第一次认真地谈了谈，定了两个共同的规定：每个星期至少打扫一次房间；十一点以后谁都不打电话。从那以后，我们互相理解，互相帮助，成了好朋友。现在我明白了，住在一起，有任何问题都应该主动说出来。'
        ],
        py: [
          'Wǒ lái Zhōngguó liúxué yǐjīng yì nián le, yìzhí zhù zài xuéxiào de sùshè li. Wǒ de tóngwū jiào Dàwèi, shì Měiguórén. Tā xǐhuan yùndòng, wǒ xǐhuan kàn shū, wǒmen hǎoxiàng méiyǒu shénme gòngtóng diǎn. Gāng kāishǐ de shíhou, wǒmen chángcháng yīnwèi yìxiē xiǎoshì bù gāoxìng.',
          'Dàwèi shénme dōu hǎo, jiùshì bú ài dǎsǎo. Tā de yīfu dàochù dōu shì, zhuōzi shang yòu zāng yòu luàn. Wǒ běnlái bù xiǎng shuō, kěshì yǒu yì tiān, wǒ zěnme yě zhǎo bu dào zìjǐ de shū, zhōngyú shēngqì le: “Nándào nǐ méi kànjiàn wǒmen de fángjiān yǒu duō luàn ma?”',
          'Dàwèi yě hěn shēngqì: “Nǐ bú shì měi tiān wǎnshang dōu dǎ diànhuà ma? Shēngyīn nàme dà, wǒ nǎr shuì de zháo a?” Yuánlái, tā duì wǒ yě yǒu yìjiàn, zhǐshì yìzhí méi shuō. Wǒ tīng le yǐhòu, juéde hěn bù hǎoyìsi.',
          'Nà tiān wǎnshang, wǒmen dì yī cì rènzhēn de tán le tán, dìng le liǎng gè gòngtóng de guīdìng: měi gè xīngqī zhìshǎo dǎsǎo yí cì fángjiān; shíyī diǎn yǐhòu shéi dōu bù dǎ diànhuà. Cóng nà yǐhòu, wǒmen hùxiāng lǐjiě, hùxiāng bāngzhù, chéng le hǎo péngyou. Xiànzài wǒ míngbai le, zhù zài yìqǐ, yǒu rènhé wèntí dōu yīnggāi zhǔdòng shuō chūlai.'
        ],
        vi: [
          'Tôi sang Trung Quốc du học đã được một năm, luôn ở trong ký túc xá của trường. Bạn cùng phòng của tôi tên là David, người Mỹ. Cậu ấy thích thể thao, tôi thích đọc sách, hình như chúng tôi chẳng có điểm chung nào. Lúc mới đầu, chúng tôi hay không vui vì vài chuyện nhỏ.',
          'David cái gì cũng tốt, chỉ có điều không thích dọn dẹp. Quần áo của cậu ấy vứt khắp nơi, trên bàn vừa bẩn vừa bừa. Lúc đầu tôi không muốn nói, nhưng một hôm tôi tìm thế nào cũng không thấy sách của mình, cuối cùng nổi giận: “Lẽ nào cậu không thấy phòng mình bừa đến mức nào à?”',
          'David cũng rất bực: “Chẳng phải tối nào cậu cũng gọi điện sao? To như thế, tớ ngủ sao nổi?” Hoá ra cậu ấy cũng không hài lòng về tôi, chỉ là chưa bao giờ nói ra. Nghe xong, tôi thấy rất ngại.',
          'Tối hôm đó, lần đầu tiên chúng tôi nói chuyện nghiêm túc với nhau và đặt ra hai quy định chung: mỗi tuần dọn phòng ít nhất một lần; sau 11 giờ không ai gọi điện. Từ đó, chúng tôi thông cảm và giúp đỡ lẫn nhau, trở thành bạn tốt. Giờ tôi hiểu rằng, sống chung thì có bất kỳ vấn đề gì cũng nên chủ động nói ra.'
        ],
        questions: [
          { q: 'Bạn cùng phòng của "tôi" là người nước nào?', options: ['Trung Quốc', 'Anh', 'Mỹ', 'Việt Nam'], answer: 2, explain: '我的同屋叫大卫，是美国人。' },
          { q: 'Vì sao "tôi" nổi giận?', options: ['Vì tìm thế nào cũng không thấy sách của mình', 'Vì David gọi điện quá to', 'Vì David về muộn', 'Vì David mượn sách không trả'], answer: 0, explain: '我怎么也找不到自己的书，终于生气了。' },
          { q: 'David không hài lòng điều gì ở "tôi"?', options: ['Không dọn phòng', 'Tối nào cũng gọi điện quá to', 'Hay về muộn', 'Không chịu giúp đỡ'], answer: 1, explain: '你不是每天晚上都打电话吗？声音那么大，我哪儿睡得着啊？' },
          { q: 'Hai người đặt ra quy định chung gì?', options: ['Ngày nào cũng dọn phòng', 'Không ai được mượn đồ của nhau', 'Mỗi tuần dọn ít nhất một lần, sau 11 giờ không gọi điện', 'Sau 10 giờ phải đi ngủ'], answer: 2, explain: '每个星期至少打扫一次房间；十一点以后谁都不打电话。' }
        ]
      }
    }
  },

  // zh-hsk4-4b: Mua sắm & tiêu dùng: 否则, 甚至, 反而, 于是
  {
    after: 'zh-hsk4-4',
    unit: {
      id: 'zh-hsk4-4b',
      icon: '💳',
      title: 'Mua sắm & tiêu dùng',
      goal: 'Kể và bàn về thói quen mua sắm, tiêu tiền; nối ý bằng 否则 (nếu không thì), 甚至 (thậm chí), 反而 (trái lại) và 于是 (thế là).',
      vocab: [
        { w: '否则', ipa: 'fǒuzé', hv: 'phủ tắc', vi: 'nếu không thì', ex: '买东西前要先想好，否则很容易浪费钱。', exPy: 'Mǎi dōngxi qián yào xiān xiǎng hǎo, fǒuzé hěn róngyì làngfèi qián.', exVi: 'Trước khi mua đồ phải nghĩ kỹ, nếu không rất dễ phí tiền.' },
        { w: '甚至', ipa: 'shènzhì', hv: 'thậm chí', vi: 'thậm chí', ex: '她每天都在网上买东西，甚至半夜也买。', exPy: 'Tā měi tiān dōu zài wǎngshàng mǎi dōngxi, shènzhì bànyè yě mǎi.', exVi: 'Ngày nào cô ấy cũng mua đồ trên mạng, thậm chí nửa đêm cũng mua.' },
        { w: '反而', ipa: "fǎn'ér", hv: 'phản nhi', vi: 'trái lại, ngược lại', ex: '便宜的东西质量不好，反而更浪费钱。', exPy: "Piányi de dōngxi zhìliàng bù hǎo, fǎn'ér gèng làngfèi qián.", exVi: 'Đồ rẻ chất lượng kém, trái lại còn phí tiền hơn.' },
        { w: '于是', ipa: 'yúshì', hv: 'ư thị', vi: 'thế là, vì vậy', ex: '商店在打折，于是我买了两件大衣。', exPy: 'Shāngdiàn zài dǎzhé, yúshì wǒ mǎi le liǎng jiàn dàyī.', exVi: 'Cửa hàng đang giảm giá, thế là tôi mua hai chiếc áo khoác.' },
        { w: '浪费', ipa: 'làngfèi', hv: 'lãng phí', vi: 'lãng phí', ex: '买了不用的东西就是浪费。', exPy: 'Mǎi le bú yòng de dōngxi jiù shì làngfèi.', exVi: 'Mua đồ về không dùng chính là lãng phí.' },
        { w: '省', ipa: 'shěng', hv: 'tỉnh', vi: 'tiết kiệm (tiền, thời gian)', ex: '在网上买书能省不少钱。', exPy: 'Zài wǎngshàng mǎi shū néng shěng bù shǎo qián.', exVi: 'Mua sách trên mạng có thể tiết kiệm được kha khá tiền.' },
        { w: '消费', ipa: 'xiāofèi', hv: 'tiêu phí', vi: 'tiêu dùng, chi tiêu', ex: '年轻人的消费习惯变化很大。', exPy: 'Niánqīngrén de xiāofèi xíguàn biànhuà hěn dà.', exVi: 'Thói quen tiêu dùng của giới trẻ thay đổi rất nhiều.' },
        { w: '打折', ipa: 'dǎzhé', hv: 'đả chiết', vi: 'giảm giá', ex: '这家店在打折，这件衣服只要两百块。', exPy: 'Zhè jiā diàn zài dǎzhé, zhè jiàn yīfu zhǐ yào liǎng bǎi kuài.', exVi: 'Cửa hàng này đang giảm giá, chiếc áo này chỉ còn hai trăm tệ.' },
        { w: '质量', ipa: 'zhìliàng', hv: 'chất lượng', vi: 'chất lượng', ex: '这家店的东西质量很好。', exPy: 'Zhè jiā diàn de dōngxi zhìliàng hěn hǎo.', exVi: 'Đồ của cửa hàng này chất lượng rất tốt.' },
        { w: '广告', ipa: 'guǎnggào', hv: 'quảng cáo', vi: 'quảng cáo', ex: '别太相信广告。', exPy: 'Bié tài xiāngxìn guǎnggào.', exVi: 'Đừng quá tin vào quảng cáo.' },
        { w: '收入', ipa: 'shōurù', hv: 'thu nhập', vi: 'thu nhập', ex: '他的收入不高，所以花钱很小心。', exPy: 'Tā de shōurù bù gāo, suǒyǐ huā qián hěn xiǎoxīn.', exVi: 'Thu nhập của anh ấy không cao nên tiêu tiền rất cẩn thận.' },
        { w: '购物', ipa: 'gòuwù', hv: 'cấu vật', vi: 'mua sắm', ex: '周末很多人去商场购物。', exPy: 'Zhōumò hěn duō rén qù shāngchǎng gòuwù.', exVi: 'Cuối tuần nhiều người đến trung tâm thương mại mua sắm.' },
        { w: '网上', ipa: 'wǎngshàng', hv: 'võng thượng', vi: 'trên mạng', ex: '现在很多人喜欢在网上购物。', exPy: 'Xiànzài hěn duō rén xǐhuan zài wǎngshàng gòuwù.', exVi: 'Bây giờ nhiều người thích mua sắm trên mạng.' },
        { w: '存', ipa: 'cún', hv: 'tồn', vi: 'gửi, để dành (tiền)', ex: '我每个月存一千块钱。', exPy: 'Wǒ měi gè yuè cún yìqiān kuài qián.', exVi: 'Mỗi tháng tôi để dành một nghìn tệ.' },
        { w: '商品', ipa: 'shāngpǐn', hv: 'thương phẩm', vi: 'hàng hoá', ex: '超市里的商品越来越多。', exPy: 'Chāoshì li de shāngpǐn yuè lái yuè duō.', exVi: 'Hàng hoá trong siêu thị ngày càng nhiều.' },
        { w: '付', ipa: 'fù', hv: 'phó', vi: 'trả (tiền)', ex: '你想用现金付还是用手机付？', exPy: 'Nǐ xiǎng yòng xiànjīn fù háishi yòng shǒujī fù?', exVi: 'Bạn muốn trả bằng tiền mặt hay bằng điện thoại?' },
        { w: '退', ipa: 'tuì', hv: 'thoái', vi: 'trả lại (hàng), hoàn', ex: '这双鞋太小了，我想退了。', exPy: 'Zhè shuāng xié tài xiǎo le, wǒ xiǎng tuì le.', exVi: 'Đôi giày này nhỏ quá, tôi muốn trả lại.' },
        { w: '快递', ipa: 'kuàidì', hv: 'khoái đệ', vi: 'chuyển phát nhanh; bưu kiện', ex: '我的快递明天就到。', exPy: 'Wǒ de kuàidì míngtiān jiù dào.', exVi: 'Bưu kiện của tôi ngày mai là đến.' },
        { w: '现金', ipa: 'xiànjīn', hv: 'hiện kim', vi: 'tiền mặt', ex: '现在很少有人用现金。', exPy: 'Xiànzài hěn shǎo yǒu rén yòng xiànjīn.', exVi: 'Bây giờ rất ít người dùng tiền mặt.' },
        { w: '满意', ipa: 'mǎnyì', hv: 'mãn ý', vi: 'hài lòng', ex: '我对这次购物很满意。', exPy: 'Wǒ duì zhè cì gòuwù hěn mǎnyì.', exVi: 'Tôi rất hài lòng với lần mua sắm này.' }
      ],
      grammar: {
        title: '否则, 甚至, 反而, 于是',
        explain: [
          '否则 (nếu không thì): vế trước nêu việc nên làm hoặc điều kiện, vế sau nêu hậu quả nếu không làm: 快点儿付钱，否则就卖完了。 否则 đứng đầu vế sau, hay đi kèm 就 / 会. Khẩu ngữ tương đương 要不然 / 不然.',
          '甚至 (thậm chí): đưa ra trường hợp ở mức cao nhất, bất ngờ nhất; đặt trước phần cần nhấn mạnh, hay kết hợp 连…也 / 都: 他什么都在网上买，甚至连水也在网上买。',
          '反而 (trái lại): kết quả NGƯỢC với điều lẽ ra phải xảy ra. Vế trước thường nêu kỳ vọng, hay dùng mẫu 不但不 / 没 A，反而 B: 打折以后，他不但没省钱，反而花得更多了。 Không dùng 反而 chỉ để nối hai ý trái nhau bình thường (khi đó dùng 但是 / 可是).',
          '于是 (thế là): nối sự việc xảy ra tiếp theo, do sự việc trước dẫn tới. Chỉ dùng để kể chuyện đã xảy ra, không dùng trong câu mệnh lệnh, đề nghị: 广告说很便宜，于是我买了一个。'
        ],
        table: [
          ['Từ', 'Ý nghĩa', 'Mẫu', 'Ví dụ'],
          ['否则', 'nếu không thì', 'A，否则 B', '早点儿买，否则就没有了。'],
          ['甚至', 'thậm chí', '甚至 (连) … 也 / 都', '他甚至连饭都不吃。'],
          ['反而', 'trái lại (ngược kỳ vọng)', '不但不 / 没 A，反而 B', '没省钱，反而花得更多。'],
          ['于是', 'thế là', 'A (đã xảy ra)，于是 B', '打折了，于是我买了。']
        ],
        examples: [
          { t: '网上购物要看清楚，否则很容易买错。', py: 'Wǎngshàng gòuwù yào kàn qīngchu, fǒuzé hěn róngyì mǎi cuò.', vi: 'Mua hàng trên mạng phải xem kỹ, nếu không rất dễ mua nhầm.' },
          { t: '她特别喜欢购物，甚至把一个月的收入都花完了。', py: 'Tā tèbié xǐhuan gòuwù, shènzhì bǎ yí gè yuè de shōurù dōu huā wán le.', vi: 'Cô ấy cực thích mua sắm, thậm chí tiêu hết cả thu nhập một tháng.' },
          { t: '买了很多打折的东西，不但没省钱，反而浪费了更多。', py: "Mǎi le hěn duō dǎzhé de dōngxi, búdàn méi shěng qián, fǎn'ér làngfèi le gèng duō.", vi: 'Mua rất nhiều đồ giảm giá, không những không tiết kiệm được mà còn phí nhiều hơn.' },
          { t: '这家店的质量不错，于是我又买了一件。', py: 'Zhè jiā diàn de zhìliàng búcuò, yúshì wǒ yòu mǎi le yí jiàn.', vi: 'Hàng của tiệm này chất lượng khá, thế là tôi mua thêm một chiếc.' },
          { t: '你最好付现金，否则要多付十块钱。', py: 'Nǐ zuìhǎo fù xiànjīn, fǒuzé yào duō fù shí kuài qián.', vi: 'Bạn nên trả tiền mặt, nếu không phải trả thêm mười tệ.' }
        ],
        tip: '于是 chỉ nối việc đã xảy ra: ✗ 明天下雨，于是你别去了 → ✓ 明天下雨，那你就别去了。 反而 khác 但是: ✗ 他很有钱，反而不买东西 (không có kỳ vọng bị đảo ngược) → ✓ 他很有钱，但是不乱买东西。 Bẫy Hán Việt: 便宜 (tiện nghi) = rẻ, không phải "tiện nghi, đầy đủ tiện nghi"; nhà tiện nghi phải nói 设备很全 / 很方便. 打折 (đả chiết): 打八折 = bán 80% giá, tức GIẢM 20%, không phải giảm 80%! 消费 (tiêu phí) = tiêu dùng, chi tiêu — trung tính, không có nghĩa "phí phạm" (phí phạm là 浪费). 质量 (chất lượng) nghĩa giống tiếng Việt, nhưng trong vật lý còn có nghĩa "khối lượng".'
      },
      dialogue: [
        { s: '王明', t: '李华，你门口怎么有这么多快递？', py: 'Lǐ Huá, nǐ ménkǒu zěnme yǒu zhème duō kuàidì?', vi: 'Lý Hoa, sao trước cửa cậu nhiều bưu kiện thế?' },
        { s: '李华', t: '都是我在网上买的。上个周末打折，于是我一下子买了二十多件商品。', py: 'Dōu shì wǒ zài wǎngshàng mǎi de. Shàng gè zhōumò dǎzhé, yúshì wǒ yíxiàzi mǎi le èrshí duō jiàn shāngpǐn.', vi: 'Toàn là tớ mua trên mạng. Cuối tuần trước giảm giá, thế là tớ mua một lúc hơn hai mươi món.' },
        { s: '王明', t: '二十多件？你的收入不高啊，这些你都需要吗？', py: 'Èrshí duō jiàn? Nǐ de shōurù bù gāo a, zhèxiē nǐ dōu xūyào ma?', vi: 'Hơn hai mươi món? Thu nhập của cậu đâu có cao, mấy thứ này cậu đều cần à?' },
        { s: '李华', t: "说实话，有的我甚至还没打开。我本来想省钱，结果反而花了更多。", py: "Shuō shíhuà, yǒude wǒ shènzhì hái méi dǎkāi. Wǒ běnlái xiǎng shěng qián, jiéguǒ fǎn'ér huā le gèng duō.", vi: 'Nói thật, có món tớ thậm chí còn chưa mở ra. Tớ vốn muốn tiết kiệm, kết quả trái lại còn tiêu nhiều hơn.' },
        { s: '王明', t: '不满意的可以退啊，否则就太浪费了。', py: 'Bù mǎnyì de kěyǐ tuì a, fǒuzé jiù tài làngfèi le.', vi: 'Món nào không ưng thì trả lại đi, nếu không thì phí quá.' },
        { s: '李华', t: '对，那条裙子质量不好，跟广告上的不一样，我明天就退。', py: 'Duì, nà tiáo qúnzi zhìliàng bù hǎo, gēn guǎnggào shang de bù yíyàng, wǒ míngtiān jiù tuì.', vi: 'Đúng rồi, cái váy kia chất lượng kém, không giống trên quảng cáo, mai tớ trả luôn.' },
        { s: '王明', t: '以后买东西前先想想，每个月也存一点儿钱吧。', py: 'Yǐhòu mǎi dōngxi qián xiān xiǎngxiang, měi gè yuè yě cún yìdiǎnr qián ba.', vi: 'Sau này trước khi mua thì nghĩ trước đã, mỗi tháng cũng để dành chút tiền đi.' },
        { s: '李华', t: '你说得对，我要做一个聪明的消费者。', py: 'Nǐ shuō de duì, wǒ yào zuò yí gè cōngming de xiāofèizhě.', vi: 'Cậu nói đúng, tớ phải làm một người tiêu dùng thông minh.' }
      ],
      exercises: [
        { type: 'mc', q: '快点儿付钱，___东西就卖完了。', options: ['否则', '于是', '反而'], answer: 0, explain: '否则 = nếu không thì: không trả tiền nhanh thì hàng sẽ hết.' },
        { type: 'mc', q: '我想省钱，结果不但没省，___花得更多了。', options: ['甚至', '反而', '于是'], answer: 1, explain: 'Kết quả ngược với mong muốn (muốn tiết kiệm → tiêu nhiều hơn): 不但没…，反而….' },
        { type: 'mc', q: '商店在打折，___我买了两件衣服。', options: ['否则', '反而', '于是', '甚至'], answer: 2, explain: '于是 = thế là, nối hành động xảy ra tiếp theo.' },
        { type: 'mc', q: 'Một chiếc áo giá gốc 100 tệ, "打七折". Bây giờ phải trả bao nhiêu?', options: ['30 tệ', '7 tệ', '100 tệ', '70 tệ'], answer: 3, explain: 'Bẫy Hán Việt: 打七折 = bán 70% giá (giảm 30%), nên còn 70 tệ.' },
        { type: 'mc', q: '"这家饭店很便宜。" nghĩa là:', options: ['Nhà hàng này rất rẻ.', 'Nhà hàng này rất tiện nghi.', 'Nhà hàng này rất thuận tiện.'], answer: 0, explain: 'Bẫy Hán Việt: 便宜 (tiện nghi) = rẻ.' },
        { type: 'mc', q: 'Câu nào dùng 于是 SAI?', options: ['天气很好，于是我们去公园了。', '广告说很便宜，于是我买了一个。', '明天要考试，于是你早点儿睡吧！'], answer: 2, explain: '于是 chỉ kể việc đã xảy ra, không dùng trong câu khuyên / mệnh lệnh.' },
        { type: 'fill', q: '她太喜欢购物了，___连吃饭的钱都花了。（Cô ấy quá thích mua sắm, thậm chí tiêu cả tiền ăn cơm.）', answer: ['甚至', 'shènzhì', 'shenzhi', 'shèn zhì', 'shen zhi'], hint: 'shènzhì – thậm chí', explain: '甚至 + 连…都… nhấn mạnh mức cao nhất.' },
        { type: 'fill', q: '你好，可以用___付吗？（Chào bạn, có thể trả bằng tiền mặt không?）', answer: ['现金', 'xiànjīn', 'xianjin', 'xiàn jīn', 'xian jin'], hint: 'xiànjīn – tiền mặt', explain: '现金 (hiện kim) = tiền mặt.' },
        { type: 'fill', q: '这双鞋太大了，我想___了。（Đôi giày này to quá, tôi muốn trả lại.）', answer: ['退', 'tuì', 'tui'], hint: 'tuì – trả lại (hàng)', explain: '退 = trả lại hàng; 退钱 = hoàn tiền.' },
        { type: 'fill', q: '我每个月___一千块钱。（Mỗi tháng tôi để dành một nghìn tệ.）', answer: ['存', 'cún', 'cun'], hint: 'cún – gửi, để dành', explain: '存钱 = gửi tiền, để dành tiền.' },
        { type: 'fill', q: '买了不用的东西，就是___。（Mua đồ về không dùng chính là lãng phí.）', answer: ['浪费', 'làngfèi', 'langfei', 'làng fèi', 'lang fei'], hint: 'làngfèi – lãng phí', explain: '浪费 (lãng phí) — khác với 消费 (tiêu dùng).' },
        { type: 'order', vi: 'Mua đồ trên mạng có thể tiết kiệm được kha khá tiền.', words: ['能省', '在网上', '不少钱', '买东西'], answer: '在网上 买东西 能省 不少钱' },
        { type: 'order', vi: 'Phải xem kỹ chất lượng, nếu không rất dễ mua nhầm.', words: ['否则', '要看清楚质量，', '买错', '很容易'], answer: '要看清楚质量， 否则 很容易 买错' },
        { type: 'order', vi: 'Tôi rất hài lòng với lần mua sắm này.', words: ['很满意', '这次购物', '对', '我'], answer: '我 对 这次购物 很满意' },
        { type: 'order', vi: 'Cửa hàng giảm giá, thế là tôi mua một chiếc váy.', words: ['于是', '我', '商店打折，', '买了一条裙子'], answer: '商店打折， 于是 我 买了一条裙子' },
        { type: 'order', vi: 'Đừng quá tin vào quảng cáo.', words: ['相信', '别', '广告', '太'], answer: '别 太 相信 广告' }
      ],
      reading: {
        title: '我的购物习惯',
        titleVi: 'Thói quen mua sắm của tôi',
        text: [
          '以前我很少在网上购物，觉得网上的商品质量不好，还要等快递。可是去年十一月，网上的东西都打折，广告说“买得越多，省得越多”，于是我也开始在网上买东西了。',
          '一开始，我只买需要的东西。后来，我每天都看打折广告，看到便宜的就想买，甚至半夜也在手机上付钱。快递员几乎每天都来我家。一个月下来，我买了三十多件商品，花的钱比我一个月的收入还多。',
          '我本来以为打折能省钱，结果不但没省，反而浪费了很多。有的衣服不合适，有的质量很差，想退又觉得麻烦，只好放在一边。我数了数，真正每天在用的，只有不到十件。',
          '现在我有了新的习惯：买东西以前先问自己“真的需要吗？”；不满意的商品马上退；每个月先存一部分钱，再花剩下的。半年下来，我已经存了一万多块钱。我发现，聪明的消费不是买得多，而是买得对，否则再便宜也是浪费。'
        ],
        py: [
          'Yǐqián wǒ hěn shǎo zài wǎngshàng gòuwù, juéde wǎngshàng de shāngpǐn zhìliàng bù hǎo, hái yào děng kuàidì. Kěshì qùnián shíyī yuè, wǎngshàng de dōngxi dōu dǎzhé, guǎnggào shuō “mǎi de yuè duō, shěng de yuè duō”, yúshì wǒ yě kāishǐ zài wǎngshàng mǎi dōngxi le.',
          'Yì kāishǐ, wǒ zhǐ mǎi xūyào de dōngxi. Hòulái, wǒ měi tiān dōu kàn dǎzhé guǎnggào, kàndào piányi de jiù xiǎng mǎi, shènzhì bànyè yě zài shǒujī shang fù qián. Kuàidìyuán jīhū měi tiān dōu lái wǒ jiā. Yí gè yuè xiàlai, wǒ mǎi le sānshí duō jiàn shāngpǐn, huā de qián bǐ wǒ yí gè yuè de shōurù hái duō.',
          "Wǒ běnlái yǐwéi dǎzhé néng shěng qián, jiéguǒ búdàn méi shěng, fǎn'ér làngfèi le hěn duō. Yǒude yīfu bù héshì, yǒude zhìliàng hěn chà, xiǎng tuì yòu juéde máfan, zhǐhǎo fàng zài yìbiān. Wǒ shǔ le shǔ, zhēnzhèng měi tiān zài yòng de, zhǐ yǒu bú dào shí jiàn.",
          'Xiànzài wǒ yǒu le xīn de xíguàn: mǎi dōngxi yǐqián xiān wèn zìjǐ “zhēn de xūyào ma?”; bù mǎnyì de shāngpǐn mǎshàng tuì; měi gè yuè xiān cún yí bùfen qián, zài huā shèngxia de. Bàn nián xiàlai, wǒ yǐjīng cún le yíwàn duō kuài qián. Wǒ fāxiàn, cōngming de xiāofèi bú shì mǎi de duō, ér shì mǎi de duì, fǒuzé zài piányi yě shì làngfèi.'
        ],
        vi: [
          'Trước đây tôi rất ít mua sắm trên mạng, vì thấy hàng trên mạng chất lượng không tốt, lại phải chờ giao hàng. Nhưng tháng Mười một năm ngoái, đồ trên mạng đều giảm giá, quảng cáo nói “mua càng nhiều, tiết kiệm càng nhiều”, thế là tôi cũng bắt đầu mua đồ trên mạng.',
          'Lúc đầu, tôi chỉ mua đồ cần thiết. Về sau, ngày nào tôi cũng xem quảng cáo giảm giá, thấy rẻ là muốn mua, thậm chí nửa đêm cũng trả tiền trên điện thoại. Người giao hàng gần như ngày nào cũng đến nhà tôi. Sau một tháng, tôi mua hơn ba mươi món, số tiền tiêu còn nhiều hơn thu nhập một tháng của tôi.',
          'Tôi cứ tưởng giảm giá thì tiết kiệm được tiền, kết quả không những không tiết kiệm mà trái lại còn phí rất nhiều. Có bộ quần áo không vừa, có món chất lượng rất kém, muốn trả lại thì thấy phiền, đành để sang một bên. Tôi đếm thử, những món thật sự dùng hằng ngày chưa đến mười món.',
          'Giờ tôi có thói quen mới: trước khi mua thì tự hỏi “có thật sự cần không?”; hàng không vừa ý thì trả ngay; mỗi tháng để dành một phần tiền trước rồi mới tiêu phần còn lại. Sau nửa năm, tôi đã để dành được hơn mười nghìn tệ. Tôi nhận ra, tiêu dùng thông minh không phải là mua nhiều mà là mua đúng, nếu không thì rẻ mấy cũng là lãng phí.'
        ],
        questions: [
          { q: 'Vì sao trước đây "tôi" ít mua hàng trên mạng?', options: ['Vì không có điện thoại', 'Vì thấy chất lượng không tốt, lại phải chờ giao hàng', 'Vì hàng trên mạng quá đắt', 'Vì không biết cách trả tiền'], answer: 1, explain: '觉得网上的商品质量不好，还要等快递。' },
          { q: 'Sau một tháng, số tiền "tôi" tiêu thế nào?', options: ['Nhiều hơn thu nhập một tháng', 'Bằng một nửa thu nhập', 'Ít hơn trước', 'Đúng bằng thu nhập'], answer: 0, explain: '花的钱比我一个月的收入还多。' },
          { q: 'Vì sao có những món đồ bị để sang một bên?', options: ['Vì quá đẹp, tiếc không dùng', 'Vì là quà tặng', 'Vì không vừa hoặc chất lượng kém, muốn trả lại thì thấy phiền', 'Vì đã cũ'], answer: 2, explain: '有的衣服不合适，有的质量很差，想退又觉得麻烦，只好放在一边。' },
          { q: 'Theo tác giả, tiêu dùng thông minh là gì?', options: ['Mua thật nhiều đồ giảm giá', 'Không bao giờ mua trên mạng', 'Chỉ dùng tiền mặt', 'Không phải mua nhiều mà là mua đúng'], answer: 3, explain: '聪明的消费不是买得多，而是买得对。' }
        ]
      }
    }
  }
];
