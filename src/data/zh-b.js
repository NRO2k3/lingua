// Tiếng Trung — Trung cấp (HSK3 ≈ B1, HSK4 ≈ B2)
addLevels('zh', [
  {
    id: 'HSK3',
    title: 'Trung cấp 1',
    desc: 'Tương đương B1. Kể về trải nghiệm, công việc, sức khoẻ; kể lại câu chuyện, so sánh, nêu ý kiến và nói về điều kiện, nguyên nhân.',
    units: [
      // ───────────────────────── HSK3-1 ─────────────────────────
      {
        id: 'zh-hsk3-1',
        icon: '✈️',
        title: 'Du lịch',
        goal: 'Kể về những nơi đã từng đến, nói việc gì đã làm xong hay vẫn chưa làm bằng 过, 已经…了 và 还没…呢.',
        vocab: [
          { w: '旅游', ipa: 'lǚyóu', hv: 'lữ du', vi: 'du lịch', ex: '你喜欢一个人去旅游吗？', exPy: 'Nǐ xǐhuan yí ge rén qù lǚyóu ma?', exVi: 'Bạn có thích đi du lịch một mình không?' },
          { w: '护照', ipa: 'hùzhào', hv: 'hộ chiếu', vi: 'hộ chiếu', ex: '我的护照还没办好呢。', exPy: 'Wǒ de hùzhào hái méi bànhǎo ne.', exVi: 'Hộ chiếu của tôi vẫn chưa làm xong.' },
          { w: '行李箱', ipa: 'xínglixiāng', hv: 'hành lý tương', vi: 'va li', ex: '你的行李箱已经准备好了吗？', exPy: 'Nǐ de xínglixiāng yǐjīng zhǔnbèi hǎo le ma?', exVi: 'Va li của bạn đã chuẩn bị xong chưa?' },
          { w: '机场', ipa: 'jīchǎng', hv: 'cơ trường', vi: 'sân bay', ex: '我们已经到机场了。', exPy: 'Wǒmen yǐjīng dào jīchǎng le.', exVi: 'Chúng tôi đã đến sân bay rồi.' },
          { w: '地图', ipa: 'dìtú', hv: 'địa đồ', vi: 'bản đồ', ex: '你带地图了吗？', exPy: 'Nǐ dài dìtú le ma?', exVi: 'Bạn có mang bản đồ không?' },
          { w: '次', ipa: 'cì', hv: 'thứ', vi: 'lần (lượng từ)', ex: '我去过两次长城。', exPy: 'Wǒ qùguo liǎng cì Chángchéng.', exVi: 'Tôi đã từng đến Vạn Lý Trường Thành hai lần.' },
          { w: '照片', ipa: 'zhàopiàn', hv: 'chiếu phiến', vi: 'bức ảnh', ex: '这是我在长城照的照片。', exPy: 'Zhè shì wǒ zài Chángchéng zhào de zhàopiàn.', exVi: 'Đây là ảnh tôi chụp ở Vạn Lý Trường Thành.' },
          { w: '宾馆', ipa: 'bīnguǎn', hv: 'tân quán', vi: 'khách sạn', ex: '我们已经订好宾馆了。', exPy: 'Wǒmen yǐjīng dìnghǎo bīnguǎn le.', exVi: 'Chúng tôi đã đặt xong khách sạn rồi.' },
          { w: '还', ipa: 'hái', hv: 'hoàn', vi: 'vẫn, còn', ex: '他还没起床呢。', exPy: 'Tā hái méi qǐchuáng ne.', exVi: 'Anh ấy vẫn chưa dậy.' },
          { w: '已经', ipa: 'yǐjīng', hv: 'dĩ kinh', vi: 'đã', ex: '飞机已经起飞了。', exPy: 'Fēijī yǐjīng qǐfēi le.', exVi: 'Máy bay đã cất cánh rồi.' }
        ],
        grammar: {
          title: '过 (kinh nghiệm), 已经…了, 还没…呢',
          explain: [
            'Động từ + 过 (guo, đọc nhẹ) diễn tả kinh nghiệm: đã từng làm việc gì đó trong quá khứ. 我去过北京。= Tôi từng đến Bắc Kinh. Phủ định: 没(有) + động từ + 过: 我没去过北京。Câu hỏi: …过…吗？ hoặc …过…没有？',
            'Số lần đứng sau 过: 去过两次 (từng đi hai lần). Muốn nói "chưa bao giờ" thêm 从来: 我从来没坐过飞机。',
            '已经 (dĩ kinh) + động từ + 了 = đã … rồi, nhấn mạnh việc đã xảy ra hoặc hoàn thành: 我已经吃饭了。',
            '还没(有) + động từ + 呢 = vẫn chưa …, ngụ ý việc đó sẽ làm sau. Trong câu phủ định này KHÔNG dùng 了: nói 我还没吃呢, không nói 我还没吃了.'
          ],
          table: [
            ['Mẫu', 'Ý nghĩa', 'Ví dụ'],
            ['V + 过', 'đã từng', '我吃过北京烤鸭。'],
            ['没 + V + 过', 'chưa từng', '我没坐过飞机。'],
            ['已经 + V + 了', 'đã … rồi', '他已经走了。'],
            ['还没 + V + 呢', 'vẫn chưa', '他还没来呢。']
          ],
          examples: [
            { t: '我去过三次上海。', py: 'Wǒ qùguo sān cì Shànghǎi.', vi: 'Tôi đã từng đến Thượng Hải ba lần.' },
            { t: '你吃过北京烤鸭吗？', py: 'Nǐ chīguo Běijīng kǎoyā ma?', vi: 'Bạn đã từng ăn vịt quay Bắc Kinh chưa?' },
            { t: '我从来没坐过飞机。', py: 'Wǒ cónglái méi zuòguo fēijī.', vi: 'Tôi chưa bao giờ đi máy bay.' },
            { t: '我们已经到宾馆了。', py: 'Wǒmen yǐjīng dào bīnguǎn le.', vi: 'Chúng tôi đã đến khách sạn rồi.' },
            { t: '他还没起床呢。', py: 'Tā hái méi qǐchuáng ne.', vi: 'Anh ấy vẫn chưa dậy.' }
          ],
          tip: 'Người Việt hay gắn 了 vào mọi câu có chữ "đã", kể cả câu phủ định. Nhớ: "chưa từng" dùng 没…过, "vẫn chưa" dùng 还没…呢 — không có 了. Ngoài ra 过 chỉ kinh nghiệm đọc nhẹ (guo), khác với 过 (guò) nghĩa là "đi qua".'
        },
        dialogue: [
          { s: '王明', t: '李华，你去过西安吗？', py: 'Lǐ Huá, nǐ qùguo Xī\'ān ma?', vi: 'Lý Hoa, cậu từng đến Tây An chưa?' },
          { s: '李华', t: '去过，我去过两次。你呢？', py: 'Qùguo, wǒ qùguo liǎng cì. Nǐ ne?', vi: 'Đến rồi, mình đến hai lần rồi. Còn cậu?' },
          { s: '王明', t: '我还没去过呢。下个月我想去旅游。', py: 'Wǒ hái méi qùguo ne. Xià ge yuè wǒ xiǎng qù lǚyóu.', vi: 'Mình vẫn chưa đến bao giờ. Tháng sau mình muốn đi du lịch đó.' },
          { s: '李华', t: '你已经订宾馆了吗？', py: 'Nǐ yǐjīng dìng bīnguǎn le ma?', vi: 'Cậu đặt khách sạn chưa?' },
          { s: '王明', t: '还没订呢，不过机票已经买好了。', py: 'Hái méi dìng ne, búguò jīpiào yǐjīng mǎihǎo le.', vi: 'Vẫn chưa đặt, nhưng vé máy bay thì mua xong rồi.' },
          { s: '李华', t: '那你一定要去看看兵马俑。我给你看看我的照片吧。', py: 'Nà nǐ yídìng yào qù kànkan Bīngmǎyǒng. Wǒ gěi nǐ kànkan wǒ de zhàopiàn ba.', vi: 'Vậy cậu nhất định phải đi xem tượng binh mã. Để mình cho cậu xem ảnh của mình.' }
        ],
        exercises: [
          { type: 'mc', q: '我以前去___两次长城。', options: ['过', '着', '呢'], answer: 0, explain: 'Có 以前 và số lần 两次 → nói kinh nghiệm đã từng, dùng 过.' },
          { type: 'mc', q: 'Câu phủ định đúng của "我吃过烤鸭。" là:', options: ['我不吃过烤鸭。', '我没吃过烤鸭。', '我没吃过了烤鸭。'], answer: 1, explain: 'Phủ định của V + 过 là 没 + V + 过, không dùng 不 và không thêm 了.' },
          { type: 'fill', q: '我还没吃饭___。', answer: ['呢', 'ne'], hint: 'trợ từ cuối câu (ne)', explain: 'Mẫu 还没…呢 = vẫn chưa….' },
          { type: 'order', vi: 'Tôi đã từng đến Bắc Kinh hai lần.', words: ['两次', '我', '北京', '去过'], answer: '我 去过 两次 北京', alt: ['我 去过 北京 两次'] },
          { type: 'mc', q: '飞机___起飞了。', options: ['还', '已经', '没'], answer: 1, explain: '已经…了 = đã … rồi.' },
          { type: 'fill', q: '你去___中国吗？', answer: ['过', 'guo', 'guò'], hint: 'đã từng (guo)', explain: 'Hỏi kinh nghiệm: V + 过 + …吗？' },
          { type: 'order', vi: 'Anh ấy vẫn chưa đến.', words: ['呢', '他', '来', '还没'], answer: '他 还没 来 呢' },
          { type: 'mc', q: '"Tôi vẫn chưa đặt khách sạn." nói thế nào?', options: ['我还没订宾馆了。', '我还没订宾馆呢。', '我已经没订宾馆。'], answer: 1, explain: '还没…呢, không dùng 了 trong câu phủ định.' }
        ]
      },
      // ───────────────────────── HSK3-2 ─────────────────────────
      {
        id: 'zh-hsk3-2',
        icon: '💼',
        title: 'Công việc & phỏng vấn',
        goal: 'Nói về công việc đang làm, mô tả trạng thái bằng 正在 / 着 và nói đã làm việc gì trong bao lâu.',
        vocab: [
          { w: '工作', ipa: 'gōngzuò', hv: 'công tác', vi: 'công việc; làm việc', ex: '他在一家公司工作了三年。', exPy: 'Tā zài yì jiā gōngsī gōngzuòle sān nián.', exVi: 'Anh ấy đã làm việc ở một công ty ba năm.' },
          { w: '面试', ipa: 'miànshì', hv: 'diện thí', vi: 'phỏng vấn', ex: '明天上午我有一个面试。', exPy: 'Míngtiān shàngwǔ wǒ yǒu yí ge miànshì.', exVi: 'Sáng mai tôi có một buổi phỏng vấn.' },
          { w: '经理', ipa: 'jīnglǐ', hv: 'kinh lý', vi: 'giám đốc, quản lý', ex: '经理正在开会呢。', exPy: 'Jīnglǐ zhèngzài kāihuì ne.', exVi: 'Giám đốc đang họp.' },
          { w: '同事', ipa: 'tóngshì', hv: 'đồng sự', vi: 'đồng nghiệp', ex: '我的同事都很热情。', exPy: 'Wǒ de tóngshì dōu hěn rèqíng.', exVi: 'Đồng nghiệp của tôi đều rất nhiệt tình.' },
          { w: '会议', ipa: 'huìyì', hv: 'hội nghị', vi: 'cuộc họp', ex: '会议开了两个小时。', exPy: 'Huìyì kāile liǎng ge xiǎoshí.', exVi: 'Cuộc họp kéo dài hai tiếng.' },
          { w: '经验', ipa: 'jīngyàn', hv: 'kinh nghiệm', vi: 'kinh nghiệm', ex: '你有工作经验吗？', exPy: 'Nǐ yǒu gōngzuò jīngyàn ma?', exVi: 'Bạn có kinh nghiệm làm việc không?' },
          { w: '办公室', ipa: 'bàngōngshì', hv: 'biện công thất', vi: 'văn phòng', ex: '办公室的门开着。', exPy: 'Bàngōngshì de mén kāizhe.', exVi: 'Cửa văn phòng đang mở.' },
          { w: '简历', ipa: 'jiǎnlì', hv: 'giản lịch', vi: 'sơ yếu lý lịch, CV', ex: '我正在写简历。', exPy: 'Wǒ zhèngzài xiě jiǎnlì.', exVi: 'Tôi đang viết CV.' },
          { w: '认真', ipa: 'rènzhēn', hv: 'nhận chân', vi: 'chăm chỉ, nghiêm túc', ex: '她工作很认真。', exPy: 'Tā gōngzuò hěn rènzhēn.', exVi: 'Cô ấy làm việc rất nghiêm túc.' },
          { w: '小时', ipa: 'xiǎoshí', hv: 'tiểu thời', vi: 'giờ, tiếng (đồng hồ)', ex: '我每天工作八个小时。', exPy: 'Wǒ měi tiān gōngzuò bā ge xiǎoshí.', exVi: 'Mỗi ngày tôi làm việc tám tiếng.' }
        ],
        grammar: {
          title: '正在 / 着 và bổ ngữ thời lượng',
          explain: [
            '正在 (chính tại) + động từ (+ 呢) = đang làm gì vào lúc nói. Có thể rút gọn thành 正 hoặc 在: 他正在打电话呢。',
            'Động từ + 着 (zhe) diễn tả trạng thái kéo dài, kết quả của hành động vẫn còn: 门开着 (cửa đang mở), 他穿着西服 (anh ấy đang mặc vest). 着 thiên về trạng thái, còn 正在 thiên về hành động đang diễn ra.',
            'Bổ ngữ thời lượng đứng SAU động từ để nói việc kéo dài bao lâu: 我学了两年 (tôi đã học hai năm). Khi có tân ngữ: lặp lại động từ (学汉语学了两年) hoặc đặt thời lượng trước tân ngữ (学了两年汉语).',
            'Thêm 了 ở cuối câu (学了两年了) nghĩa là việc đó vẫn đang tiếp diễn đến hiện tại.'
          ],
          table: [
            ['Mẫu', 'Ví dụ', 'Nghĩa'],
            ['正在 + V (+ 呢)', '我正在开会呢。', 'Tôi đang họp.'],
            ['V + 着', '门开着。', 'Cửa đang mở.'],
            ['V + 了 + thời lượng', '我工作了三年。', 'Tôi đã làm việc ba năm.'],
            ['V + O + V + 了 + thời lượng', '他学汉语学了两年。', 'Anh ấy học tiếng Trung hai năm.'],
            ['V + 了 + thời lượng + O', '他学了两年汉语。', 'Anh ấy học tiếng Trung hai năm.']
          ],
          examples: [
            { t: '经理正在跟客人谈话。', py: 'Jīnglǐ zhèngzài gēn kèrén tánhuà.', vi: 'Giám đốc đang nói chuyện với khách.' },
            { t: '他穿着一件白衬衫。', py: 'Tā chuānzhe yí jiàn bái chènshān.', vi: 'Anh ấy mặc một chiếc sơ mi trắng.' },
            { t: '我在这家公司工作了五年了。', py: 'Wǒ zài zhè jiā gōngsī gōngzuòle wǔ nián le.', vi: 'Tôi làm ở công ty này được năm năm rồi (vẫn đang làm).' },
            { t: '昨天的会议开了三个小时。', py: 'Zuótiān de huìyì kāile sān ge xiǎoshí.', vi: 'Cuộc họp hôm qua kéo dài ba tiếng.' }
          ],
          tip: 'Người Việt hay đặt thời lượng trước động từ, kiểu 我两年学汉语 — sai. Thời lượng luôn đứng SAU động từ: 我学了两年汉语.'
        },
        dialogue: [
          { s: '张经理', t: '你好，请坐。请先介绍一下你自己。', py: 'Nǐ hǎo, qǐng zuò. Qǐng xiān jièshào yíxià nǐ zìjǐ.', vi: 'Chào cô, mời ngồi. Cô hãy giới thiệu bản thân trước nhé.' },
          { s: '李华', t: '您好！我叫李华，我在一家旅游公司工作了三年。', py: 'Nín hǎo! Wǒ jiào Lǐ Huá, wǒ zài yì jiā lǚyóu gōngsī gōngzuòle sān nián.', vi: 'Chào ông! Tôi tên Lý Hoa, tôi đã làm ở một công ty du lịch ba năm.' },
          { s: '张经理', t: '你学英语学了多长时间？', py: 'Nǐ xué Yīngyǔ xuéle duō cháng shíjiān?', vi: 'Cô học tiếng Anh bao lâu rồi?' },
          { s: '李华', t: '我学了八年英语，现在正在学日语。', py: 'Wǒ xuéle bā nián Yīngyǔ, xiànzài zhèngzài xué Rìyǔ.', vi: 'Tôi học tiếng Anh tám năm, hiện đang học tiếng Nhật.' },
          { s: '张经理', t: '很好。你为什么想来我们公司？', py: 'Hěn hǎo. Nǐ wèishénme xiǎng lái wǒmen gōngsī?', vi: 'Tốt lắm. Vì sao cô muốn đến công ty chúng tôi?' },
          { s: '李华', t: '我觉得这里的工作很有意思，我也想多积累一些经验。', py: 'Wǒ juéde zhèli de gōngzuò hěn yǒu yìsi, wǒ yě xiǎng duō jīlěi yìxiē jīngyàn.', vi: 'Tôi thấy công việc ở đây rất thú vị, tôi cũng muốn tích luỹ thêm kinh nghiệm.' }
        ],
        exercises: [
          { type: 'mc', q: '他___打电话呢，请等一下。', options: ['正在', '着', '过'], answer: 0, explain: '正在 + V + 呢 = đang làm gì.' },
          { type: 'mc', q: '门开___呢，你进来吧。', options: ['过', '着', '完'], answer: 1, explain: 'V + 着 diễn tả trạng thái kéo dài: cửa đang mở.' },
          { type: 'fill', q: '我学了两___汉语。', answer: ['年', 'nián', 'nian'], hint: 'năm (nián)', explain: 'Bổ ngữ thời lượng 两年 đứng sau động từ, trước tân ngữ.' },
          { type: 'order', vi: 'Tôi đã làm việc ở công ty này ba năm.', words: ['三年', '我', '这家公司', '在', '工作了'], answer: '我 在 这家公司 工作了 三年' },
          { type: 'mc', q: 'Câu nào đúng?', options: ['我两个小时看书了。', '我看书看了两个小时。', '我看书两个小时了看。'], answer: 1, explain: 'Có tân ngữ thì lặp động từ: 看书看了两个小时.' },
          { type: 'fill', q: '经理正___开会呢。', answer: ['在', 'zài', 'zai'], hint: 'đang (zài)', explain: '正在 + V + 呢.' },
          { type: 'order', vi: 'Cô ấy mặc một chiếc váy đỏ.', words: ['一条', '她', '红裙子', '穿着'], answer: '她 穿着 一条 红裙子' },
          { type: 'mc', q: '"同事" nghĩa là gì?', options: ['đồng nghiệp', 'giám đốc', 'khách hàng'], answer: 0, explain: '同事 (đồng sự) = người làm cùng chỗ, đồng nghiệp.' }
        ]
      },
      // ───────────────────────── HSK3-3 ─────────────────────────
      {
        id: 'zh-hsk3-3',
        icon: '🩺',
        title: 'Sức khoẻ',
        goal: 'Nói về triệu chứng, khuyên ai đó nên / phải / không cần làm gì, và nói hai việc làm cùng lúc.',
        vocab: [
          { w: '身体', ipa: 'shēntǐ', hv: 'thân thể', vi: 'cơ thể, sức khoẻ', ex: '最近你身体好吗？', exPy: 'Zuìjìn nǐ shēntǐ hǎo ma?', exVi: 'Dạo này bạn có khoẻ không?' },
          { w: '发烧', ipa: 'fāshāo', hv: 'phát thiêu', vi: 'sốt', ex: '孩子发烧了，得去医院。', exPy: 'Háizi fāshāo le, děi qù yīyuàn.', exVi: 'Con bị sốt rồi, phải đi bệnh viện.' },
          { w: '感冒', ipa: 'gǎnmào', hv: 'cảm mạo', vi: 'cảm cúm', ex: '我感冒了，应该多喝水。', exPy: 'Wǒ gǎnmào le, yīnggāi duō hē shuǐ.', exVi: 'Tôi bị cảm rồi, nên uống nhiều nước.' },
          { w: '疼', ipa: 'téng', hv: 'đông', vi: 'đau', ex: '我头疼，不想吃饭。', exPy: 'Wǒ tóu téng, bù xiǎng chīfàn.', exVi: 'Tôi đau đầu, không muốn ăn cơm.' },
          { w: '医生', ipa: 'yīshēng', hv: 'y sinh', vi: 'bác sĩ', ex: '医生说我不用住院。', exPy: 'Yīshēng shuō wǒ búyòng zhùyuàn.', exVi: 'Bác sĩ nói tôi không cần nằm viện.' },
          { w: '药', ipa: 'yào', hv: 'dược', vi: 'thuốc', ex: '这个药一天吃三次。', exPy: 'Zhège yào yì tiān chī sān cì.', exVi: 'Thuốc này mỗi ngày uống ba lần.' },
          { w: '锻炼', ipa: 'duànliàn', hv: 'đoán luyện', vi: 'rèn luyện, tập thể dục', ex: '他每天早上都锻炼身体。', exPy: 'Tā měi tiān zǎoshang dōu duànliàn shēntǐ.', exVi: 'Sáng nào anh ấy cũng tập thể dục.' },
          { w: '健康', ipa: 'jiànkāng', hv: 'kiện khang', vi: 'khoẻ mạnh, sức khoẻ', ex: '祝你身体健康！', exPy: 'Zhù nǐ shēntǐ jiànkāng!', exVi: 'Chúc bạn mạnh khoẻ!' },
          { w: '休息', ipa: 'xiūxi', hv: 'hưu tức', vi: 'nghỉ ngơi', ex: '你应该好好休息。', exPy: 'Nǐ yīnggāi hǎohǎo xiūxi.', exVi: 'Bạn nên nghỉ ngơi cho tử tế.' },
          { w: '注意', ipa: 'zhùyì', hv: 'chú ý', vi: 'chú ý, để ý', ex: '天冷了，注意别感冒。', exPy: 'Tiān lěng le, zhùyì bié gǎnmào.', exVi: 'Trời lạnh rồi, chú ý đừng để bị cảm.' }
        ],
        grammar: {
          title: '应该 / 得 (děi) / 不用 và 一边…一边…',
          explain: [
            '应该 (ưng cai) + động từ = nên làm gì (lời khuyên, điều hợp lý). Phủ định: 不应该 = không nên.',
            '得 đọc là děi khi đứng trước động từ, nghĩa là "phải" (khẩu ngữ, mang tính bắt buộc): 我得走了 = Tôi phải đi rồi. Phủ định của 得 (děi) KHÔNG phải 不得 mà là 不用 (búyòng) = không cần, khỏi phải.',
            '一边 + V1，一边 + V2 = vừa … vừa …: hai hành động diễn ra cùng lúc, thường cùng một chủ ngữ. Văn nói có thể rút gọn thành 边…边….',
            'Lưu ý: chữ 得 còn đọc là de (trợ từ nối bổ ngữ: 跑得很快) — đừng nhầm với děi.'
          ],
          table: [
            ['Từ', 'Nghĩa', 'Ví dụ'],
            ['应该', 'nên', '你应该多喝水。'],
            ['得 (děi)', 'phải', '我得去医院。'],
            ['不用', 'không cần', '你不用吃药。'],
            ['一边…一边…', 'vừa … vừa …', '他一边吃饭一边看手机。']
          ],
          examples: [
            { t: '你感冒了，应该多休息。', py: 'Nǐ gǎnmào le, yīnggāi duō xiūxi.', vi: 'Bạn bị cảm rồi, nên nghỉ ngơi nhiều.' },
            { t: '我发烧了，得去看医生。', py: 'Wǒ fāshāo le, děi qù kàn yīshēng.', vi: 'Tôi bị sốt rồi, phải đi khám bác sĩ.' },
            { t: '医生说你不用吃药，多喝水就行。', py: 'Yīshēng shuō nǐ búyòng chī yào, duō hē shuǐ jiù xíng.', vi: 'Bác sĩ nói bạn không cần uống thuốc, uống nhiều nước là được.' },
            { t: '别一边吃饭一边看手机。', py: 'Bié yìbiān chīfàn yìbiān kàn shǒujī.', vi: 'Đừng vừa ăn cơm vừa xem điện thoại.' }
          ],
          tip: 'Muốn nói "không phải / không cần làm", hãy dùng 不用. Đừng dùng 不得 (rất trang trọng, nghĩa là "không được phép"), cũng đừng dùng 不应该 (= không nên). Ví dụ: 明天你不用来 = Mai bạn không cần đến.'
        },
        dialogue: [
          { s: '张医生', t: '你哪儿不舒服？', py: 'Nǐ nǎr bù shūfu?', vi: 'Anh thấy khó chịu ở đâu?' },
          { s: '王明', t: '我头疼，还有点儿发烧。', py: 'Wǒ tóu téng, hái yǒudiǎnr fāshāo.', vi: 'Tôi đau đầu, còn hơi sốt nữa.' },
          { s: '张医生', t: '是感冒了。你最近工作很累吧？', py: 'Shì gǎnmào le. Nǐ zuìjìn gōngzuò hěn lèi ba?', vi: 'Anh bị cảm rồi. Dạo này anh làm việc mệt lắm phải không?' },
          { s: '王明', t: '对，我经常一边吃饭一边工作。', py: 'Duì, wǒ jīngcháng yìbiān chīfàn yìbiān gōngzuò.', vi: 'Vâng, tôi thường vừa ăn cơm vừa làm việc.' },
          { s: '张医生', t: '这样对身体不好。你应该多休息，多喝水。', py: 'Zhèyàng duì shēntǐ bù hǎo. Nǐ yīnggāi duō xiūxi, duō hē shuǐ.', vi: 'Như vậy không tốt cho sức khoẻ. Anh nên nghỉ ngơi nhiều, uống nhiều nước.' },
          { s: '王明', t: '我得住院吗？', py: 'Wǒ děi zhùyuàn ma?', vi: 'Tôi có phải nằm viện không?' },
          { s: '张医生', t: '不用，吃点儿药就好了。', py: 'Búyòng, chī diǎnr yào jiù hǎo le.', vi: 'Không cần, uống ít thuốc là khỏi.' }
        ],
        exercises: [
          { type: 'mc', q: 'Chữ 得 trong "我得走了。" đọc là:', options: ['de', 'dé', 'děi'], answer: 2, explain: '得 đứng trước động từ, nghĩa "phải" → đọc děi.' },
          { type: 'mc', q: 'Phủ định của "你得去医院。" là:', options: ['你不得去医院。', '你不用去医院。', '你没得去医院。'], answer: 1, explain: 'Phủ định của 得 (děi) là 不用 = không cần.' },
          { type: 'fill', q: '他一边听音乐，___做作业。', answer: ['一边', 'yìbiān', 'yībiān', 'yibian'], hint: 'vừa … vừa … (yìbiān)', explain: 'Cặp 一边…一边… diễn tả hai việc cùng lúc.' },
          { type: 'order', vi: 'Bạn nên nghỉ ngơi nhiều.', words: ['多', '你', '休息', '应该'], answer: '你 应该 多 休息' },
          { type: 'mc', q: '"感冒" nghĩa là:', options: ['đau đầu', 'cảm cúm', 'phát sốt'], answer: 1, explain: '感冒 (cảm mạo) = bị cảm.' },
          { type: 'mc', q: '天冷了，你___多穿点儿衣服。', options: ['应该', '不用', '一边'], answer: 0, explain: 'Lời khuyên: 应该 = nên.' },
          { type: 'fill', q: '我头___，不想吃饭。', answer: ['疼', 'téng', 'teng', '痛', 'tòng', 'tong'], hint: 'đau (téng)', explain: '头疼 / 头痛 = đau đầu.' },
          { type: 'order', vi: 'Anh ấy vừa ăn cơm vừa xem TV.', words: ['一边', '看电视', '他', '吃饭', '一边'], answer: '他 一边 吃饭 一边 看电视' }
        ]
      },
      // ───────────────────────── HSK3-4 ─────────────────────────
      {
        id: 'zh-hsk3-4',
        icon: '📖',
        title: 'Kể chuyện',
        goal: 'Kể lại một sự việc, nói rõ kết quả của hành động bằng bổ ngữ kết quả và câu chữ 把.',
        vocab: [
          { w: '故事', ipa: 'gùshi', hv: 'cố sự', vi: 'câu chuyện', ex: '奶奶给我讲了一个故事。', exPy: 'Nǎinai gěi wǒ jiǎngle yí ge gùshi.', exVi: 'Bà kể cho tôi nghe một câu chuyện.' },
          { w: '讲', ipa: 'jiǎng', hv: 'giảng', vi: 'kể, nói, giảng', ex: '老师讲的我都听懂了。', exPy: 'Lǎoshī jiǎng de wǒ dōu tīngdǒng le.', exVi: 'Những gì thầy giảng tôi đều nghe hiểu cả.' },
          { w: '完', ipa: 'wán', hv: 'hoàn', vi: 'xong, hết', ex: '这本书我看完了。', exPy: 'Zhè běn shū wǒ kànwán le.', exVi: 'Cuốn sách này tôi đọc xong rồi.' },
          { w: '懂', ipa: 'dǒng', hv: 'đổng', vi: 'hiểu', ex: '你听懂了吗？', exPy: 'Nǐ tīngdǒng le ma?', exVi: 'Bạn nghe hiểu chưa?' },
          { w: '忘记', ipa: 'wàngjì', hv: 'vong ký', vi: 'quên', ex: '我忘记他的名字了。', exPy: 'Wǒ wàngjì tā de míngzi le.', exVi: 'Tôi quên tên anh ấy rồi.' },
          { w: '发现', ipa: 'fāxiàn', hv: 'phát hiện', vi: 'phát hiện, nhận ra', ex: '我发现钱包不见了。', exPy: 'Wǒ fāxiàn qiánbāo bú jiàn le.', exVi: 'Tôi phát hiện ví không thấy đâu nữa.' },
          { w: '钥匙', ipa: 'yàoshi', hv: 'thược thi', vi: 'chìa khoá', ex: '我把钥匙放在桌子上了。', exPy: 'Wǒ bǎ yàoshi fàng zài zhuōzi shang le.', exVi: 'Tôi để chìa khoá trên bàn rồi.' },
          { w: '突然', ipa: 'tūrán', hv: 'đột nhiên', vi: 'đột nhiên, bỗng', ex: '突然下起雨来了。', exPy: 'Tūrán xiàqǐ yǔ lái le.', exVi: 'Bỗng nhiên trời đổ mưa.' },
          { w: '找', ipa: 'zhǎo', hv: 'trảo', vi: 'tìm', ex: '我找到我的手机了。', exPy: 'Wǒ zhǎodào wǒ de shǒujī le.', exVi: 'Tôi tìm thấy điện thoại của mình rồi.' },
          { w: '后来', ipa: 'hòulái', hv: 'hậu lai', vi: 'sau đó, về sau', ex: '后来他们成了好朋友。', exPy: 'Hòulái tāmen chéngle hǎo péngyou.', exVi: 'Về sau họ trở thành bạn thân.' }
        ],
        grammar: {
          title: 'Bổ ngữ kết quả (完, 到, 好, 懂) và câu chữ 把',
          explain: [
            'Bổ ngữ kết quả đứng ngay sau động từ, cho biết kết quả của hành động: 看完 (xem xong), 找到 (tìm thấy), 听懂 (nghe hiểu), 做好 (làm xong xuôi).',
            '完 = xong, hết; 到 = đạt được, chạm tới (找到, 买到, 看到); 好 = hoàn tất ổn thoả (准备好, 写好); 懂 = hiểu (听懂, 看懂). Phủ định dùng 没: 我没听懂。',
            'Câu chữ 把: Chủ ngữ + 把 + tân ngữ + động từ + thành phần khác. Dùng khi muốn nói tác động lên một đối tượng cụ thể và kết quả của tác động đó: 我把作业写完了 = Tôi làm xong bài tập rồi.',
            'Động từ trong câu 把 không đứng một mình: phải có bổ ngữ, 了, hoặc 在/给… phía sau. Tân ngữ sau 把 phải là thứ đã xác định (这本书, 钥匙). Phủ định đặt 没 trước 把: 我没把作业写完.'
          ],
          table: [
            ['Mẫu', 'Ví dụ', 'Nghĩa'],
            ['V + 完', '我吃完了。', 'Tôi ăn xong rồi.'],
            ['V + 到', '我找到了。', 'Tôi tìm thấy rồi.'],
            ['V + 好', '饭做好了。', 'Cơm nấu xong rồi.'],
            ['V + 懂', '我看懂了。', 'Tôi đọc hiểu rồi.'],
            ['S + 把 + O + V + kết quả', '他把门关好了。', 'Anh ấy đóng cửa cẩn thận rồi.']
          ],
          examples: [
            { t: '我昨天晚上把这本小说看完了。', py: 'Wǒ zuótiān wǎnshang bǎ zhè běn xiǎoshuō kànwán le.', vi: 'Tối qua tôi đọc xong cuốn tiểu thuyết này rồi.' },
            { t: '我找了半天，终于找到钥匙了。', py: 'Wǒ zhǎole bàntiān, zhōngyú zhǎodào yàoshi le.', vi: 'Tôi tìm mãi, cuối cùng cũng thấy chìa khoá.' },
            { t: '老师说的话你听懂了吗？', py: 'Lǎoshī shuō de huà nǐ tīngdǒng le ma?', vi: 'Lời thầy nói bạn nghe hiểu chưa?' },
            { t: '请把护照放好。', py: 'Qǐng bǎ hùzhào fànghǎo.', vi: 'Hãy cất hộ chiếu cẩn thận.' }
          ],
          tip: 'Không nói 我把饭吃 (thiếu kết quả) hay 我把一本书看完了 (tân ngữ sau 把 phải xác định — nói 这本书). Phủ định bổ ngữ kết quả dùng 没, không dùng 不: 我没听懂, không nói 我不听懂.'
        },
        dialogue: [
          { s: '李华', t: '王明，昨天你怎么没来上课？', py: 'Wáng Míng, zuótiān nǐ zěnme méi lái shàngkè?', vi: 'Vương Minh, sao hôm qua cậu không đến lớp?' },
          { s: '王明', t: '别提了！我早上出门的时候，突然发现钥匙不见了。', py: 'Bié tí le! Wǒ zǎoshang chūmén de shíhou, tūrán fāxiàn yàoshi bú jiàn le.', vi: 'Đừng nhắc nữa! Sáng ra khỏi nhà, mình bỗng phát hiện chìa khoá biến mất.' },
          { s: '李华', t: '后来找到了吗？', py: 'Hòulái zhǎodào le ma?', vi: 'Sau đó tìm thấy không?' },
          { s: '王明', t: '找了一个小时才找到。原来我把钥匙放在冰箱里了！', py: 'Zhǎole yí ge xiǎoshí cái zhǎodào. Yuánlái wǒ bǎ yàoshi fàng zài bīngxiāng li le!', vi: 'Tìm cả tiếng mới thấy. Hoá ra mình để chìa khoá trong tủ lạnh!' },
          { s: '李华', t: '哈哈，真有意思。昨天的作业你写完了吗？', py: 'Hāha, zhēn yǒu yìsi. Zuótiān de zuòyè nǐ xiěwán le ma?', vi: 'Haha, buồn cười thật. Bài tập hôm qua cậu làm xong chưa?' },
          { s: '王明', t: '还没呢，有的题我没看懂。', py: 'Hái méi ne, yǒu de tí wǒ méi kàndǒng.', vi: 'Vẫn chưa, có mấy câu mình đọc không hiểu.' },
          { s: '李华', t: '没关系，我给你讲讲吧。', py: 'Méi guānxi, wǒ gěi nǐ jiǎngjiang ba.', vi: 'Không sao, để mình giảng cho cậu.' }
        ],
        exercises: [
          { type: 'mc', q: '我找了很久，终于找___了。', options: ['完', '到', '懂'], answer: 1, explain: '找到 = tìm thấy (đạt được mục đích).' },
          { type: 'mc', q: 'Câu nào đúng?', options: ['我把饭吃。', '我把饭吃完了。', '我吃完了把饭。'], answer: 1, explain: 'Câu 把: 把 + tân ngữ đứng trước động từ, và sau động từ phải có thành phần khác (kết quả, 了…): 我把饭吃完了.' },
          { type: 'fill', q: '老师的话我没听___。', answer: ['懂', 'dǒng', 'dong'], hint: 'hiểu (dǒng)', explain: '听懂 = nghe hiểu; phủ định: 没听懂.' },
          { type: 'order', vi: 'Tôi đã đọc xong cuốn sách này.', words: ['这本书', '我', '看完了', '把'], answer: '我 把 这本书 看完了' },
          { type: 'mc', q: 'Phủ định đúng của "我听懂了。" là:', options: ['我不听懂。', '我没听懂。', '我没听懂了。'], answer: 1, explain: 'Bổ ngữ kết quả phủ định bằng 没, bỏ 了.' },
          { type: 'mc', q: '晚饭做___了，快来吃吧！', options: ['好', '懂', '到'], answer: 0, explain: '做好 = làm xong xuôi, sẵn sàng.' },
          { type: 'order', vi: 'Anh ấy để chìa khoá trên bàn rồi.', words: ['钥匙', '他', '放在桌子上了', '把'], answer: '他 把 钥匙 放在桌子上了' },
          { type: 'mc', q: '"后来" nghĩa là:', options: ['trước đây', 'sau đó, về sau', 'đột nhiên'], answer: 1, explain: '后来 (hậu lai) = về sau, sau đó (dùng khi kể chuyện quá khứ).' }
        ]
      },
      // ───────────────────────── HSK3-5 ─────────────────────────
      {
        id: 'zh-hsk3-5',
        icon: '⚖️',
        title: 'Ý kiến & so sánh',
        goal: 'So sánh người, vật, nơi chốn và nêu ý kiến cá nhân bằng 我觉得 / 我认为.',
        vocab: [
          { w: '比较', ipa: 'bǐjiào', hv: 'tỉ giảo', vi: 'khá, tương đối; so sánh', ex: '今天比较冷。', exPy: 'Jīntiān bǐjiào lěng.', exVi: 'Hôm nay khá lạnh.' },
          { w: '一样', ipa: 'yíyàng', hv: 'nhất dạng', vi: 'giống nhau', ex: '我的手机跟你的一样。', exPy: 'Wǒ de shǒujī gēn nǐ de yíyàng.', exVi: 'Điện thoại của tôi giống của bạn.' },
          { w: '认为', ipa: 'rènwéi', hv: 'nhận vi', vi: 'cho rằng', ex: '我认为这个办法很好。', exPy: 'Wǒ rènwéi zhège bànfǎ hěn hǎo.', exVi: 'Tôi cho rằng cách này rất hay.' },
          { w: '觉得', ipa: 'juéde', hv: 'giác đắc', vi: 'cảm thấy, thấy rằng', ex: '我觉得汉语不太难。', exPy: 'Wǒ juéde Hànyǔ bú tài nán.', exVi: 'Tôi thấy tiếng Trung không khó lắm.' },
          { w: '方便', ipa: 'fāngbiàn', hv: 'phương tiện', vi: 'tiện lợi', ex: '坐地铁比坐公交车方便。', exPy: 'Zuò dìtiě bǐ zuò gōngjiāochē fāngbiàn.', exVi: 'Đi tàu điện ngầm tiện hơn đi xe buýt.' },
          { w: '安静', ipa: 'ānjìng', hv: 'an tĩnh', vi: 'yên tĩnh', ex: '图书馆里很安静。', exPy: 'Túshūguǎn li hěn ānjìng.', exVi: 'Trong thư viện rất yên tĩnh.' },
          { w: '热闹', ipa: 'rènao', hv: 'nhiệt náo', vi: 'náo nhiệt, nhộn nhịp', ex: '上海比我的老家热闹多了。', exPy: 'Shànghǎi bǐ wǒ de lǎojiā rènao duō le.', exVi: 'Thượng Hải nhộn nhịp hơn quê tôi nhiều.' },
          { w: '便宜', ipa: 'piányi', hv: 'tiện nghi', vi: 'rẻ', ex: '这家店的东西没有那家便宜。', exPy: 'Zhè jiā diàn de dōngxi méiyǒu nà jiā piányi.', exVi: 'Đồ ở cửa hàng này không rẻ bằng cửa hàng kia.' },
          { w: '城市', ipa: 'chéngshì', hv: 'thành thị', vi: 'thành phố', ex: '你最喜欢哪个城市？', exPy: 'Nǐ zuì xǐhuan nǎge chéngshì?', exVi: 'Bạn thích thành phố nào nhất?' },
          { w: '更', ipa: 'gèng', hv: 'cánh', vi: 'hơn, càng', ex: '我觉得秋天更舒服。', exPy: 'Wǒ juéde qiūtiān gèng shūfu.', exVi: 'Tôi thấy mùa thu dễ chịu hơn.' }
        ],
        grammar: {
          title: 'So sánh: 比, 没有…那么, 跟…一样, 最',
          explain: [
            'A 比 B + tính từ = A … hơn B: 今天比昨天冷。Muốn nói hơn nhiều / hơn một chút: thêm 多了 / 一点儿 sau tính từ (冷多了, 冷一点儿), hoặc thêm 更 / 还 trước tính từ. Không dùng 很, 非常 trong câu 比.',
            'A 没有 B (那么) + tính từ = A không … bằng B: 我没有他那么高。Đây là cách phủ định tự nhiên nhất của câu 比.',
            'A 跟 B 一样 (+ tính từ) = A giống B / A … bằng B. Phủ định: 跟…不一样. 最 + tính từ = … nhất.',
            'Nêu ý kiến: 我觉得 (giác đắc — "tôi thấy", nhẹ nhàng, rất hay dùng trong khẩu ngữ) và 我认为 (nhận vi — "tôi cho rằng", trang trọng, khẳng định hơn).'
          ],
          table: [
            ['Mẫu', 'Ví dụ', 'Nghĩa'],
            ['A 比 B + Adj', '哥哥比我高。', 'Anh trai cao hơn tôi.'],
            ['A 没有 B 那么 + Adj', '我没有哥哥那么高。', 'Tôi không cao bằng anh trai.'],
            ['A 跟 B 一样 + Adj', '我跟他一样高。', 'Tôi cao bằng anh ấy.'],
            ['最 + Adj', '他最高。', 'Anh ấy cao nhất.']
          ],
          examples: [
            { t: '坐高铁比坐飞机方便多了。', py: 'Zuò gāotiě bǐ zuò fēijī fāngbiàn duō le.', vi: 'Đi tàu cao tốc tiện hơn đi máy bay nhiều.' },
            { t: '这里没有市中心那么热闹。', py: 'Zhèli méiyǒu shì zhōngxīn nàme rènao.', vi: 'Ở đây không nhộn nhịp bằng trung tâm thành phố.' },
            { t: '我的看法跟你的一样。', py: 'Wǒ de kànfǎ gēn nǐ de yíyàng.', vi: 'Quan điểm của tôi giống của bạn.' },
            { t: '我认为健康是最重要的。', py: 'Wǒ rènwéi jiànkāng shì zuì zhòngyào de.', vi: 'Tôi cho rằng sức khoẻ là quan trọng nhất.' }
          ],
          tip: 'Người Việt hay nói 他比我很高 (dịch từ "anh ấy cao hơn tôi rất nhiều") — sai. Muốn nhấn mạnh hãy nói 他比我高多了 hoặc 他比我高得多. Chú ý thêm: 便宜 có âm Hán Việt "tiện nghi" nhưng nghĩa là "rẻ".'
        },
        dialogue: [
          { s: '王明', t: '张丽，你觉得北京好还是上海好？', py: 'Zhāng Lì, nǐ juéde Běijīng hǎo háishi Shànghǎi hǎo?', vi: 'Trương Lệ, cậu thấy Bắc Kinh hay Thượng Hải tốt hơn?' },
          { s: '张丽', t: '我觉得上海比北京热闹，但是北京的历史更长。', py: 'Wǒ juéde Shànghǎi bǐ Běijīng rènao, dànshì Běijīng de lìshǐ gèng cháng.', vi: 'Mình thấy Thượng Hải nhộn nhịp hơn Bắc Kinh, nhưng lịch sử Bắc Kinh lâu đời hơn.' },
          { s: '王明', t: '上海的东西是不是比北京贵？', py: 'Shànghǎi de dōngxi shì bu shì bǐ Běijīng guì?', vi: 'Đồ ở Thượng Hải có đắt hơn Bắc Kinh không?' },
          { s: '张丽', t: '差不多一样。不过上海的冬天没有北京那么冷。', py: 'Chàbuduō yíyàng. Búguò Shànghǎi de dōngtiān méiyǒu Běijīng nàme lěng.', vi: 'Gần như nhau. Có điều mùa đông Thượng Hải không lạnh bằng Bắc Kinh.' },
          { s: '王明', t: '那你最喜欢哪个城市？', py: 'Nà nǐ zuì xǐhuan nǎge chéngshì?', vi: 'Thế cậu thích thành phố nào nhất?' },
          { s: '张丽', t: '我认为最好的城市是自己的家乡。', py: 'Wǒ rènwéi zuì hǎo de chéngshì shì zìjǐ de jiāxiāng.', vi: 'Mình cho rằng thành phố tốt nhất là quê hương của mình.' }
        ],
        exercises: [
          { type: 'mc', q: '今天___昨天冷。', options: ['比', '跟', '没'], answer: 0, explain: 'A 比 B + tính từ = A … hơn B.' },
          { type: 'mc', q: 'Câu nào đúng?', options: ['他比我很高。', '他比我高多了。', '他比我非常高。'], answer: 1, explain: 'Câu 比 không dùng 很 / 非常; nhấn mạnh bằng 多了 sau tính từ.' },
          { type: 'fill', q: '我的手机跟你的一___。', answer: ['样', 'yàng', 'yang'], hint: 'giống (yàng)', explain: 'A 跟 B 一样 = A giống B.' },
          { type: 'order', vi: 'Tôi không cao bằng anh trai.', words: ['哥哥', '我', '那么高', '没有'], answer: '我 没有 哥哥 那么高' },
          { type: 'mc', q: '"Ở đây không nhộn nhịp bằng trung tâm thành phố." là:', options: ['这里比市中心没有热闹。', '这里没有市中心那么热闹。', '这里跟市中心不热闹。'], answer: 1, explain: 'A 没有 B 那么 + tính từ = A không … bằng B.' },
          { type: 'fill', q: '我___这个办法不错。', answer: ['认为', 'rènwéi', 'renwei', '觉得', 'juéde', 'juede'], hint: 'cho rằng (rènwéi)', explain: '我认为 / 我觉得 dùng để nêu ý kiến.' },
          { type: 'order', vi: 'Bạn thích thành phố nào nhất?', words: ['哪个', '你', '城市？', '最', '喜欢'], answer: '你 最 喜欢 哪个 城市？' },
          { type: 'mc', q: '"便宜" nghĩa là:', options: ['tiện lợi', 'rẻ', 'yên tĩnh'], answer: 1, explain: '便宜 (piányi) = rẻ. Đừng nhầm với 方便 (tiện lợi) dù âm Hán Việt là "tiện nghi".' }
        ]
      },
      // ───────────────────────── HSK3-6 ─────────────────────────
      {
        id: 'zh-hsk3-6',
        icon: '🔗',
        title: 'Điều kiện & nguyên nhân',
        goal: 'Nói về điều kiện, nguyên nhân – kết quả và sự đối lập bằng các cặp liên từ 如果…就, 虽然…但是, 因为…所以.',
        vocab: [
          { w: '如果', ipa: 'rúguǒ', hv: 'như quả', vi: 'nếu', ex: '如果明天下雨，我们就不去了。', exPy: 'Rúguǒ míngtiān xià yǔ, wǒmen jiù bú qù le.', exVi: 'Nếu mai trời mưa thì chúng ta không đi nữa.' },
          { w: '虽然', ipa: 'suīrán', hv: 'tuy nhiên', vi: 'tuy, mặc dù', ex: '虽然很累，但是我很开心。', exPy: 'Suīrán hěn lèi, dànshì wǒ hěn kāixīn.', exVi: 'Tuy rất mệt nhưng tôi rất vui.' },
          { w: '但是', ipa: 'dànshì', hv: 'đãn thị', vi: 'nhưng', ex: '这件衣服很漂亮，但是太贵了。', exPy: 'Zhè jiàn yīfu hěn piàoliang, dànshì tài guì le.', exVi: 'Bộ quần áo này rất đẹp nhưng đắt quá.' },
          { w: '因为', ipa: 'yīnwèi', hv: 'nhân vị', vi: 'vì, bởi vì', ex: '因为堵车，所以我迟到了。', exPy: 'Yīnwèi dǔchē, suǒyǐ wǒ chídào le.', exVi: 'Vì tắc đường nên tôi đến muộn.' },
          { w: '所以', ipa: 'suǒyǐ', hv: 'sở dĩ', vi: 'vì vậy, cho nên', ex: '他生病了，所以没来上课。', exPy: 'Tā shēngbìng le, suǒyǐ méi lái shàngkè.', exVi: 'Cậu ấy bị ốm nên không đến lớp.' },
          { w: '决定', ipa: 'juédìng', hv: 'quyết định', vi: 'quyết định', ex: '我决定明年去中国留学。', exPy: 'Wǒ juédìng míngnián qù Zhōngguó liúxué.', exVi: 'Tôi quyết định sang năm đi Trung Quốc du học.' },
          { w: '担心', ipa: 'dānxīn', hv: 'đảm tâm', vi: 'lo lắng', ex: '别担心，如果有问题就给我打电话。', exPy: 'Bié dānxīn, rúguǒ yǒu wèntí jiù gěi wǒ dǎ diànhuà.', exVi: 'Đừng lo, nếu có vấn đề thì gọi cho tôi.' },
          { w: '迟到', ipa: 'chídào', hv: 'trì đáo', vi: 'đến muộn', ex: '对不起，我迟到了。', exPy: 'Duìbuqǐ, wǒ chídào le.', exVi: 'Xin lỗi, tôi đến muộn.' },
          { w: '机会', ipa: 'jīhuì', hv: 'cơ hội', vi: 'cơ hội', ex: '如果有机会，我想去云南看看。', exPy: 'Rúguǒ yǒu jīhuì, wǒ xiǎng qù Yúnnán kànkan.', exVi: 'Nếu có cơ hội, tôi muốn đi Vân Nam một chuyến.' },
          { w: '努力', ipa: 'nǔlì', hv: 'nỗ lực', vi: 'cố gắng, chăm chỉ', ex: '虽然他很努力，但是成绩不太好。', exPy: 'Suīrán tā hěn nǔlì, dànshì chéngjì bú tài hǎo.', exVi: 'Tuy cậu ấy rất cố gắng nhưng thành tích không tốt lắm.' }
        ],
        grammar: {
          title: '如果…就…, 虽然…但是…, 因为…所以…',
          explain: [
            '如果 (như quả) A，(chủ ngữ) 就 B = Nếu A thì B. 就 đứng SAU chủ ngữ của vế sau, ngay trước động từ: 如果你有时间，我们就一起去。',
            '虽然 (tuy nhiên) A，但是 B = Tuy A nhưng B. Có thể thay 但是 bằng 可是 hoặc 不过. 虽然 đứng trước hoặc sau chủ ngữ đều được: 虽然他很忙… / 他虽然很忙….',
            '因为 (nhân vị) A，所以 (sở dĩ) B = Vì A nên B. Trong khẩu ngữ thường chỉ dùng một trong hai từ: 因为下雨，我没去 hoặc 下雨了，所以我没去.',
            'Giống tiếng Việt (nếu… thì…, tuy… nhưng…, vì… nên…), các cặp này dùng cả hai vế rất tự nhiên — người Việt có lợi thế ở điểm này.'
          ],
          table: [
            ['Cặp từ', 'Nghĩa', 'Ví dụ'],
            ['如果…就…', 'nếu … thì …', '如果下雨，我就不去。'],
            ['虽然…但是…', 'tuy … nhưng …', '虽然很贵，但是很好。'],
            ['因为…所以…', 'vì … nên …', '因为生病，所以没来。']
          ],
          examples: [
            { t: '如果你不舒服，就早点儿回家吧。', py: 'Rúguǒ nǐ bù shūfu, jiù zǎo diǎnr huí jiā ba.', vi: 'Nếu bạn thấy không khoẻ thì về nhà sớm đi.' },
            { t: '虽然汉字很难，但是很有意思。', py: 'Suīrán Hànzì hěn nán, dànshì hěn yǒu yìsi.', vi: 'Tuy chữ Hán khó nhưng rất thú vị.' },
            { t: '因为他很努力，所以考得很好。', py: 'Yīnwèi tā hěn nǔlì, suǒyǐ kǎo de hěn hǎo.', vi: 'Vì cậu ấy rất cố gắng nên thi rất tốt.' },
            { t: '我虽然没去过中国，但是很了解中国文化。', py: 'Wǒ suīrán méi qùguo Zhōngguó, dànshì hěn liǎojiě Zhōngguó wénhuà.', vi: 'Tuy chưa từng đến Trung Quốc nhưng tôi rất hiểu văn hoá Trung Quốc.' }
          ],
          tip: 'Đặt 就 sai chỗ là lỗi rất hay gặp: nói 如果你去，我就去, không nói 如果你去，就我去. 就 luôn đứng sau chủ ngữ, trước động từ.'
        },
        dialogue: [
          { s: '李华', t: '王明，周末我们去爬长城吧！', py: 'Wáng Míng, zhōumò wǒmen qù pá Chángchéng ba!', vi: 'Vương Minh, cuối tuần mình đi leo Vạn Lý Trường Thành đi!' },
          { s: '王明', t: '好啊，但是天气预报说周六可能下雨。', py: 'Hǎo a, dànshì tiānqì yùbào shuō zhōuliù kěnéng xià yǔ.', vi: 'Được đấy, nhưng dự báo thời tiết nói thứ bảy có thể mưa.' },
          { s: '李华', t: '如果周六下雨，我们就周日去。', py: 'Rúguǒ zhōuliù xià yǔ, wǒmen jiù zhōurì qù.', vi: 'Nếu thứ bảy mưa thì mình đi chủ nhật.' },
          { s: '王明', t: '行。不过我有点儿担心，因为我很久没锻炼了。', py: 'Xíng. Búguò wǒ yǒudiǎnr dānxīn, yīnwèi wǒ hěn jiǔ méi duànliàn le.', vi: 'Được. Nhưng mình hơi lo, vì lâu lắm rồi mình không tập thể dục.' },
          { s: '李华', t: '虽然长城很高，但是我们可以慢慢爬。', py: 'Suīrán Chángchéng hěn gāo, dànshì wǒmen kěyǐ mànmàn pá.', vi: 'Tuy Trường Thành cao nhưng mình có thể leo từ từ.' },
          { s: '王明', t: '好，那我决定跟你一起去！', py: 'Hǎo, nà wǒ juédìng gēn nǐ yìqǐ qù!', vi: 'Được, vậy mình quyết định đi cùng cậu!' }
        ],
        exercises: [
          { type: 'mc', q: '___明天不下雨，我们就去公园。', options: ['虽然', '如果', '因为'], answer: 1, explain: 'Vế sau có 就 → điều kiện 如果…就….' },
          { type: 'mc', q: '虽然他很忙，___每天都锻炼。', options: ['所以', '但是', '就'], answer: 1, explain: '虽然…但是… = tuy… nhưng….' },
          { type: 'fill', q: '因为下大雨，___比赛取消了。', answer: ['所以', 'suǒyǐ', 'suoyi'], hint: 'vì vậy (suǒyǐ)', explain: '因为…所以… = vì… nên….' },
          { type: 'order', vi: 'Nếu bạn có thời gian thì chúng ta cùng đi.', words: ['我们', '如果', '一起去', '你', '就', '有时间，'], answer: '如果 你 有时间， 我们 就 一起去', alt: ['你 如果 有时间， 我们 就 一起去'] },
          { type: 'mc', q: 'Câu nào đúng?', options: ['如果你去，就我去。', '如果你去，我就去。', '如果你去，我去就。'], answer: 1, explain: '就 đứng sau chủ ngữ, trước động từ.' },
          { type: 'order', vi: 'Vì cậu ấy bị ốm nên không đến lớp.', words: ['所以', '因为', '他', '生病了，', '没来上课'], answer: '因为 他 生病了， 所以 没来上课', alt: ['他 因为 生病了， 所以 没来上课'] },
          { type: 'mc', q: '"担心" nghĩa là:', options: ['quyết định', 'lo lắng', 'cố gắng'], answer: 1, explain: '担心 (đảm tâm) = lo lắng.' },
          { type: 'mc', q: '他___是中国人，但是汉语说得不太好。', options: ['虽然', '如果', '所以'], answer: 0, explain: 'Vế sau có 但是 → dùng 虽然; 虽然 có thể đứng sau chủ ngữ.' }
        ]
      }
    ]
  },
  {
    id: 'HSK4',
    title: 'Trung cấp 2',
    desc: 'Tương đương B2. Nói về giả định và ước muốn, tin tức, thuật lại lời người khác, vấn đề xã hội, công nghệ và viết email trang trọng.',
    units: [
      // ───────────────────────── HSK4-1 ─────────────────────────
      {
        id: 'zh-hsk4-1',
        icon: '🌠',
        title: 'Giả định & ước muốn',
        goal: 'Nói về tình huống giả định, điều "giá mà", ước mơ và hy vọng bằng 要是 / 假如, 即使…也 và 希望.',
        vocab: [
          { w: '要是', ipa: 'yàoshi', hv: 'yếu thị', vi: 'nếu (khẩu ngữ)', ex: '要是你早点儿告诉我就好了。', exPy: 'Yàoshi nǐ zǎo diǎnr gàosu wǒ jiù hǎo le.', exVi: 'Giá mà bạn nói với tôi sớm hơn thì tốt.' },
          { w: '假如', ipa: 'jiǎrú', hv: 'giả như', vi: 'giả sử, giả như', ex: '假如我是你，我就接受这份工作。', exPy: 'Jiǎrú wǒ shì nǐ, wǒ jiù jiēshòu zhè fèn gōngzuò.', exVi: 'Giả sử tôi là bạn, tôi sẽ nhận công việc này.' },
          { w: '即使', ipa: 'jíshǐ', hv: 'tức sử', vi: 'cho dù, dù cho', ex: '即使很累，他也坚持跑步。', exPy: 'Jíshǐ hěn lèi, tā yě jiānchí pǎobù.', exVi: 'Dù rất mệt, anh ấy vẫn kiên trì chạy bộ.' },
          { w: '希望', ipa: 'xīwàng', hv: 'hy vọng', vi: 'hy vọng, mong', ex: '希望你早日实现梦想。', exPy: 'Xīwàng nǐ zǎorì shíxiàn mèngxiǎng.', exVi: 'Mong bạn sớm thực hiện được ước mơ.' },
          { w: '梦想', ipa: 'mèngxiǎng', hv: 'mộng tưởng', vi: 'ước mơ', ex: '我的梦想是当一名医生。', exPy: 'Wǒ de mèngxiǎng shì dāng yì míng yīshēng.', exVi: 'Ước mơ của tôi là trở thành bác sĩ.' },
          { w: '实现', ipa: 'shíxiàn', hv: 'thực hiện', vi: 'thực hiện, trở thành hiện thực', ex: '只要努力，梦想就能实现。', exPy: 'Zhǐyào nǔlì, mèngxiǎng jiù néng shíxiàn.', exVi: 'Chỉ cần cố gắng, ước mơ sẽ thành hiện thực.' },
          { w: '坚持', ipa: 'jiānchí', hv: 'kiên trì', vi: 'kiên trì, bền bỉ', ex: '学外语一定要坚持。', exPy: 'Xué wàiyǔ yídìng yào jiānchí.', exVi: 'Học ngoại ngữ nhất định phải kiên trì.' },
          { w: '放弃', ipa: 'fàngqì', hv: 'phóng khí', vi: 'từ bỏ', ex: '即使失败了，也不要放弃。', exPy: 'Jíshǐ shībài le, yě bú yào fàngqì.', exVi: 'Cho dù thất bại cũng đừng bỏ cuộc.' },
          { w: '后悔', ipa: 'hòuhuǐ', hv: 'hậu hối', vi: 'hối hận', ex: '要是当时没去，我现在一定会后悔。', exPy: 'Yàoshi dāngshí méi qù, wǒ xiànzài yídìng huì hòuhuǐ.', exVi: 'Nếu hồi đó không đi, giờ tôi chắc chắn sẽ hối hận.' },
          { w: '将来', ipa: 'jiānglái', hv: 'tương lai', vi: 'tương lai, sau này', ex: '将来我想开一家咖啡店。', exPy: 'Jiānglái wǒ xiǎng kāi yì jiā kāfēidiàn.', exVi: 'Sau này tôi muốn mở một quán cà phê.' }
        ],
        grammar: {
          title: '要是 / 假如, 即使…也…, 希望',
          explain: [
            '要是 (yếu thị) và 假如 (giả như) đều nghĩa là "nếu / giả sử", thường đi với 就 ở vế sau. 要是 mang màu khẩu ngữ; 假如 hay dùng cho giả định xa thực tế: 假如我有一百万…',
            '要是…就好了 = giá mà … thì tốt biết mấy: diễn tả ước muốn hoặc tiếc nuối. 要是我会开车就好了 = Giá mà tôi biết lái xe.',
            '即使 (tức sử) A，也 B = Cho dù A thì vẫn B. Vế A là giả định (chưa xảy ra hoặc không chắc), vế B khẳng định kết quả không thay đổi. 也 đứng sau chủ ngữ của vế sau.',
            '希望 (hy vọng) + mệnh đề = mong rằng…: 我希望你能来。Khác với 想 (muốn — ý định của bản thân), 希望 thường hướng tới điều mình mong cho người khác hoặc cho tương lai.'
          ],
          table: [
            ['Mẫu', 'Nghĩa', 'Ví dụ'],
            ['要是 / 假如 … 就 …', 'nếu / giả sử … thì …', '要是下雨，我们就不去。'],
            ['要是 … 就好了', 'giá mà …', '要是我会开车就好了。'],
            ['即使 … 也 …', 'cho dù … vẫn …', '即使下雨，我们也去。'],
            ['希望 + mệnh đề', 'mong rằng …', '希望明天是晴天。']
          ],
          examples: [
            { t: '要是我会说汉语就好了。', py: 'Yàoshi wǒ huì shuō Hànyǔ jiù hǎo le.', vi: 'Giá mà tôi biết nói tiếng Trung.' },
            { t: '假如明天是世界末日，你想做什么？', py: 'Jiǎrú míngtiān shì shìjiè mòrì, nǐ xiǎng zuò shénme?', vi: 'Giả sử ngày mai là tận thế, bạn muốn làm gì?' },
            { t: '即使工作再忙，他也每天给妈妈打电话。', py: 'Jíshǐ gōngzuò zài máng, tā yě měi tiān gěi māma dǎ diànhuà.', vi: 'Dù công việc bận đến đâu, ngày nào anh ấy cũng gọi điện cho mẹ.' },
            { t: '我希望将来能去中国工作。', py: 'Wǒ xīwàng jiānglái néng qù Zhōngguó gōngzuò.', vi: 'Tôi hy vọng sau này có thể sang Trung Quốc làm việc.' }
          ],
          tip: 'Đừng nhầm 即使…也 (cho dù — giả định) với 虽然…但是 (tuy — sự thật đã có). 虽然下雨了 = trời đã mưa thật; 即使下雨 = kể cả nếu trời mưa. Vế sau của 即使 dùng 也, không dùng 但是.'
        },
        dialogue: [
          { s: '王明', t: '李华，你将来有什么打算？', py: 'Lǐ Huá, nǐ jiānglái yǒu shénme dǎsuan?', vi: 'Lý Hoa, sau này cậu có dự định gì?' },
          { s: '李华', t: '我的梦想是开一家自己的咖啡店。', py: 'Wǒ de mèngxiǎng shì kāi yì jiā zìjǐ de kāfēidiàn.', vi: 'Ước mơ của mình là mở một quán cà phê của riêng mình.' },
          { s: '王明', t: '真不错！要是需要帮忙，你就告诉我。', py: 'Zhēn búcuò! Yàoshi xūyào bāngmáng, nǐ jiù gàosu wǒ.', vi: 'Hay quá! Nếu cần giúp gì thì cứ nói với mình.' },
          { s: '李华', t: '谢谢！不过开店要很多钱，我怕失败。', py: 'Xièxie! Búguò kāi diàn yào hěn duō qián, wǒ pà shībài.', vi: 'Cảm ơn! Nhưng mở quán cần nhiều tiền lắm, mình sợ thất bại.' },
          { s: '王明', t: '即使失败了，也是一次很好的经验。假如我是你，我一定会试试。', py: 'Jíshǐ shībài le, yě shì yí cì hěn hǎo de jīngyàn. Jiǎrú wǒ shì nǐ, wǒ yídìng huì shìshi.', vi: 'Cho dù thất bại thì cũng là một trải nghiệm quý. Nếu mình là cậu, mình nhất định sẽ thử.' },
          { s: '李华', t: '你说得对，我不想以后后悔。', py: 'Nǐ shuō de duì, wǒ bù xiǎng yǐhòu hòuhuǐ.', vi: 'Cậu nói đúng, mình không muốn sau này phải hối hận.' },
          { s: '王明', t: '希望你的梦想早日实现！', py: 'Xīwàng nǐ de mèngxiǎng zǎorì shíxiàn!', vi: 'Mong ước mơ của cậu sớm thành hiện thực!' }
        ],
        exercises: [
          { type: 'mc', q: '即使明天下雨，我___去。', options: ['就', '也', '但是'], answer: 1, explain: '即使…也… = cho dù… vẫn….' },
          { type: 'mc', q: '"Giá mà tôi biết lái xe." nói thế nào?', options: ['要是我会开车就好了。', '即使我会开车就好了。', '希望我会开车也好了。'], answer: 0, explain: '要是…就好了 = giá mà… thì tốt.' },
          { type: 'fill', q: '___我是你，我就不会放弃。', answer: ['假如', 'jiǎrú', 'jiaru', '要是', 'yàoshi', 'yaoshi', '如果', 'rúguǒ', 'ruguo'], hint: 'giả sử (jiǎrú)', explain: '假如 / 要是 / 如果 … 就 … đều dùng cho giả định.' },
          { type: 'order', vi: 'Tôi hy vọng bạn có thể đến.', words: ['你', '我', '能来', '希望'], answer: '我 希望 你 能来' },
          { type: 'mc', q: 'Khác biệt giữa 即使 và 虽然 là:', options: ['即使 nói giả định, 虽然 nói sự thật đã có', 'Hai từ hoàn toàn giống nhau', '虽然 nói giả định, 即使 nói sự thật đã có'], answer: 0, explain: '即使下雨 = kể cả nếu mưa; 虽然下雨了 = trời đã mưa thật.' },
          { type: 'order', vi: 'Cho dù rất mệt, anh ấy vẫn kiên trì chạy bộ.', words: ['也', '即使', '坚持跑步', '很累，', '他'], answer: '即使 很累， 他 也 坚持跑步', alt: ['他 即使 很累， 也 坚持跑步'] },
          { type: 'mc', q: '"放弃" nghĩa là:', options: ['kiên trì', 'từ bỏ', 'hối hận'], answer: 1, explain: '放弃 (phóng khí) = buông bỏ, từ bỏ.' },
          { type: 'fill', q: '我的___是当一名老师。', answer: ['梦想', 'mèngxiǎng', 'mengxiang', '理想', 'lǐxiǎng', 'lixiang'], hint: 'ước mơ (mèngxiǎng)', explain: '梦想 (mộng tưởng) = ước mơ; dùng 理想 ở đây cũng đúng.' }
        ]
      },
      // ───────────────────────── HSK4-2 ─────────────────────────
      {
        id: 'zh-hsk4-2',
        icon: '📰',
        title: 'Tin tức',
        goal: 'Hiểu và kể lại tin tức, sự cố bằng câu bị động 被, và 让 / 叫 trong khẩu ngữ.',
        vocab: [
          { w: '新闻', ipa: 'xīnwén', hv: 'tân văn', vi: 'tin tức, thời sự', ex: '你看今天的新闻了吗？', exPy: 'Nǐ kàn jīntiān de xīnwén le ma?', exVi: 'Bạn xem thời sự hôm nay chưa?' },
          { w: '报道', ipa: 'bàodào', hv: 'báo đạo', vi: 'đưa tin; bản tin', ex: '报纸报道了这件事。', exPy: 'Bàozhǐ bàodàole zhè jiàn shì.', exVi: 'Báo chí đã đưa tin về việc này.' },
          { w: '记者', ipa: 'jìzhě', hv: 'ký giả', vi: 'phóng viên, nhà báo', ex: '记者采访了几位市民。', exPy: 'Jìzhě cǎifǎngle jǐ wèi shìmín.', exVi: 'Phóng viên đã phỏng vấn vài người dân.' },
          { w: '发生', ipa: 'fāshēng', hv: 'phát sinh', vi: 'xảy ra', ex: '昨天晚上这里发生了一起交通事故。', exPy: 'Zuótiān wǎnshang zhèli fāshēngle yì qǐ jiāotōng shìgù.', exVi: 'Tối qua ở đây xảy ra một vụ tai nạn giao thông.' },
          { w: '事故', ipa: 'shìgù', hv: 'sự cố', vi: 'tai nạn, sự cố', ex: '幸好事故中没有人受伤。', exPy: 'Xìnghǎo shìgù zhōng méiyǒu rén shòushāng.', exVi: 'May mà trong vụ tai nạn không ai bị thương.' },
          { w: '警察', ipa: 'jǐngchá', hv: 'cảnh sát', vi: 'cảnh sát', ex: '小偷被警察抓住了。', exPy: 'Xiǎotōu bèi jǐngchá zhuāzhù le.', exVi: 'Tên trộm bị cảnh sát bắt rồi.' },
          { w: '被', ipa: 'bèi', hv: 'bị', vi: 'bị, được (bị động)', ex: '我的自行车被人偷了。', exPy: 'Wǒ de zìxíngchē bèi rén tōu le.', exVi: 'Xe đạp của tôi bị người ta lấy trộm rồi.' },
          { w: '破坏', ipa: 'pòhuài', hv: 'phá hoại', vi: 'phá huỷ, làm hư hại', ex: '很多房子被台风破坏了。', exPy: 'Hěn duō fángzi bèi táifēng pòhuài le.', exVi: 'Nhiều ngôi nhà bị bão tàn phá.' },
          { w: '受伤', ipa: 'shòushāng', hv: 'thụ thương', vi: 'bị thương', ex: '他在比赛中受伤了。', exPy: 'Tā zài bǐsài zhōng shòushāng le.', exVi: 'Anh ấy bị thương trong trận đấu.' },
          { w: '通知', ipa: 'tōngzhī', hv: 'thông tri', vi: 'thông báo', ex: '学校通知明天放假。', exPy: 'Xuéxiào tōngzhī míngtiān fàngjià.', exVi: 'Nhà trường thông báo ngày mai được nghỉ.' }
        ],
        grammar: {
          title: 'Câu bị động với 被 (và 让 / 叫)',
          explain: [
            'Cấu trúc: Đối tượng chịu tác động + 被 (+ người/vật gây ra) + động từ + thành phần khác. 我的手机被小偷偷了 = Điện thoại của tôi bị kẻ trộm lấy mất.',
            'Giống câu 把, động từ sau 被 thường không đứng một mình mà kèm 了, bổ ngữ kết quả, 过…: 被打破了, 被抓住了. Người gây ra hành động có thể lược bỏ nếu không rõ hoặc không quan trọng: 我的钱包被偷了.',
            'Phủ định (没) và trợ động từ (会, 能, 可能…) đặt TRƯỚC 被: 他没被批评 (cậu ấy không bị phê bình), 会被发现 (sẽ bị phát hiện).',
            'Trong khẩu ngữ có thể dùng 让 hoặc 叫 thay cho 被, nhưng khi đó BẮT BUỘC nêu người gây ra: 杯子让弟弟打破了 (không nói 杯子让打破了).'
          ],
          table: [
            ['Mẫu', 'Ví dụ', 'Nghĩa'],
            ['A + 被 + B + V + …', '小偷被警察抓住了。', 'Tên trộm bị cảnh sát bắt.'],
            ['A + 被 + V + …', '我的钱包被偷了。', 'Ví của tôi bị trộm.'],
            ['A + 没 + 被 + B + V', '他没被老师批评。', 'Cậu ấy không bị thầy phê bình.'],
            ['A + 让 / 叫 + B + V + …', '蛋糕让弟弟吃完了。', 'Bánh bị em trai ăn hết rồi.']
          ],
          examples: [
            { t: '这个消息很快就被报道了。', py: 'Zhège xiāoxi hěn kuài jiù bèi bàodào le.', vi: 'Tin này nhanh chóng được đưa lên báo.' },
            { t: '他的自行车叫人借走了。', py: 'Tā de zìxíngchē jiào rén jièzǒu le.', vi: 'Xe đạp của anh ấy bị người ta mượn đi rồi.' },
            { t: '那本书让我同事借走了。', py: 'Nà běn shū ràng wǒ tóngshì jièzǒu le.', vi: 'Cuốn sách đó bị đồng nghiệp tôi mượn mất rồi.' },
            { t: '幸好司机没被撞伤。', py: 'Xìnghǎo sījī méi bèi zhuàngshāng.', vi: 'May mà tài xế không bị đâm bị thương.' }
          ],
          tip: 'Âm Hán Việt của 被 là "bị", và theo truyền thống 被 hay dùng cho việc không mong muốn. Ngày nay 被 cũng gặp trong việc tốt (他被选为班长 = cậu ấy được bầu làm lớp trưởng), nhưng đừng dịch máy móc mọi chữ "được": "Tôi được tặng một cuốn sách" nên nói 有人送了我一本书.'
        },
        dialogue: [
          { s: '李华', t: '你看今天的新闻了吗？', py: 'Nǐ kàn jīntiān de xīnwén le ma?', vi: 'Cậu xem thời sự hôm nay chưa?' },
          { s: '王明', t: '还没呢，发生什么事了？', py: 'Hái méi ne, fāshēng shénme shì le?', vi: 'Chưa, có chuyện gì thế?' },
          { s: '李华', t: '昨天晚上市中心发生了一起交通事故，一辆公交车被一辆货车撞了。', py: 'Zuótiān wǎnshang shì zhōngxīn fāshēngle yì qǐ jiāotōng shìgù, yí liàng gōngjiāochē bèi yí liàng huòchē zhuàng le.', vi: 'Tối qua ở trung tâm thành phố xảy ra tai nạn giao thông, một chiếc xe buýt bị một chiếc xe tải đâm.' },
          { s: '王明', t: '天哪！有人受伤吗？', py: 'Tiān na! Yǒu rén shòushāng ma?', vi: 'Trời ơi! Có ai bị thương không?' },
          { s: '李华', t: '有三个人受伤了，已经被送到医院了。', py: 'Yǒu sān ge rén shòushāng le, yǐjīng bèi sòngdào yīyuàn le.', vi: 'Có ba người bị thương, đã được đưa đến bệnh viện rồi.' },
          { s: '王明', t: '那个货车司机呢？', py: 'Nàge huòchē sījī ne?', vi: 'Thế còn tài xế xe tải?' },
          { s: '李华', t: '报道说他被警察带走了。听说他开车的时候在看手机。', py: 'Bàodào shuō tā bèi jǐngchá dàizǒu le. Tīngshuō tā kāichē de shíhou zài kàn shǒujī.', vi: 'Bản tin nói anh ta bị cảnh sát đưa đi rồi. Nghe nói lúc lái xe anh ta đang xem điện thoại.' }
        ],
        exercises: [
          { type: 'mc', q: '我的钱包___小偷偷走了。', options: ['把', '被', '给'], answer: 1, explain: 'Chủ ngữ (钱包) chịu tác động → câu bị động với 被.' },
          { type: 'mc', q: 'Câu nào đúng?', options: ['他被没老师批评。', '他没被老师批评。', '他被老师没批评。'], answer: 1, explain: 'Phủ định 没 đặt trước 被.' },
          { type: 'fill', q: '小偷___警察抓住了。', answer: ['被', 'bèi', 'bei', '让', 'ràng', 'rang', '叫', 'jiào', 'jiao'], hint: 'bị (bèi)', explain: 'A + 被 + B + V + kết quả.' },
          { type: 'order', vi: 'Rất nhiều ngôi nhà bị bão tàn phá.', words: ['台风', '很多房子', '破坏了', '被'], answer: '很多房子 被 台风 破坏了' },
          { type: 'mc', q: 'Câu nào SAI?', options: ['杯子让弟弟打破了。', '杯子被打破了。', '杯子让打破了。'], answer: 2, explain: 'Dùng 让 / 叫 thì bắt buộc nêu người gây ra hành động.' },
          { type: 'order', vi: 'Những người bị thương đã được đưa tới bệnh viện.', words: ['送到', '受伤的人', '医院了', '被', '已经'], answer: '受伤的人 已经 被 送到 医院了' },
          { type: 'mc', q: '"记者" nghĩa là:', options: ['cảnh sát', 'phóng viên', 'tài xế'], answer: 1, explain: '记者 (ký giả) = phóng viên, nhà báo.' },
          { type: 'mc', q: 'Chuyển sang câu bị động: 警察抓住了小偷。', options: ['小偷被警察抓住了。', '警察被小偷抓住了。', '小偷把警察抓住了。'], answer: 0, explain: 'Người chịu tác động (小偷) lên đầu câu, người gây ra (警察) đứng sau 被.' }
        ]
      },
      // ───────────────────────── HSK4-3 ─────────────────────────
      {
        id: 'zh-hsk4-3',
        icon: '💬',
        title: 'Kể lại lời nói',
        goal: 'Thuật lại lời người khác và những tin nghe được bằng 说, 告诉, 听说, 据说.',
        vocab: [
          { w: '告诉', ipa: 'gàosu', hv: 'cáo tố', vi: 'nói cho biết, bảo', ex: '他告诉我他明天不来了。', exPy: 'Tā gàosu wǒ tā míngtiān bù lái le.', exVi: 'Anh ấy bảo tôi mai anh ấy không đến nữa.' },
          { w: '听说', ipa: 'tīngshuō', hv: 'thính thuyết', vi: 'nghe nói', ex: '听说小王要结婚了。', exPy: 'Tīngshuō Xiǎo Wáng yào jiéhūn le.', exVi: 'Nghe nói Tiểu Vương sắp cưới rồi.' },
          { w: '据说', ipa: 'jùshuō', hv: 'cứ thuyết', vi: 'nghe đồn, theo người ta nói', ex: '据说这座桥有五百年的历史。', exPy: 'Jùshuō zhè zuò qiáo yǒu wǔbǎi nián de lìshǐ.', exVi: 'Nghe nói cây cầu này có lịch sử năm trăm năm.' },
          { w: '消息', ipa: 'xiāoxi', hv: 'tiêu tức', vi: 'tin, tin tức', ex: '我有一个好消息要告诉你。', exPy: 'Wǒ yǒu yí ge hǎo xiāoxi yào gàosu nǐ.', exVi: 'Tôi có một tin vui muốn báo cho bạn.' },
          { w: '转告', ipa: 'zhuǎngào', hv: 'chuyển cáo', vi: 'nhắn lại, chuyển lời', ex: '请转告他，明天的会取消了。', exPy: 'Qǐng zhuǎngào tā, míngtiān de huì qǔxiāo le.', exVi: 'Nhờ nhắn với anh ấy là cuộc họp ngày mai huỷ rồi.' },
          { w: '提醒', ipa: 'tíxǐng', hv: 'đề tỉnh', vi: 'nhắc nhở', ex: '妈妈提醒我带雨伞。', exPy: 'Māma tíxǐng wǒ dài yǔsǎn.', exVi: 'Mẹ nhắc tôi mang ô.' },
          { w: '答应', ipa: 'dāying', hv: 'đáp ứng', vi: 'đồng ý, nhận lời', ex: '他答应帮我搬家。', exPy: 'Tā dāying bāng wǒ bānjiā.', exVi: 'Anh ấy nhận lời giúp tôi chuyển nhà.' },
          { w: '解释', ipa: 'jiěshì', hv: 'giải thích', vi: 'giải thích', ex: '老师又解释了一遍。', exPy: 'Lǎoshī yòu jiěshìle yí biàn.', exVi: 'Thầy giáo lại giải thích thêm một lần nữa.' },
          { w: '取消', ipa: 'qǔxiāo', hv: 'thủ tiêu', vi: 'huỷ bỏ', ex: '因为天气不好，航班取消了。', exPy: 'Yīnwèi tiānqì bù hǎo, hángbān qǔxiāo le.', exVi: 'Vì thời tiết xấu nên chuyến bay bị huỷ.' },
          { w: '怀疑', ipa: 'huáiyí', hv: 'hoài nghi', vi: 'nghi ngờ', ex: '我怀疑他说的不是真的。', exPy: 'Wǒ huáiyí tā shuō de bú shì zhēn de.', exVi: 'Tôi nghi những gì anh ta nói không phải sự thật.' }
        ],
        grammar: {
          title: 'Thuật lại lời nói: 说, 告诉, 听说, 据说',
          explain: [
            '说 (thuyết) = nói. Thuật lại: Ai + 说 + nội dung: 他说他明天不来了. Muốn nói "nói với ai" dùng 跟 / 对 + người + 说: 他跟我说… (không nói 他说我…).',
            '告诉 (cáo tố) = cho biết, bảo; người nghe đứng ngay sau: 告诉 + người + nội dung. 她告诉我她换工作了.',
            '听说 = nghe nói; có thể chen nguồn tin vào giữa: 听小李说… (nghe Tiểu Lý nói…). 据说 = theo người ta nói / nghe đồn, trang trọng hơn, nguồn tin chung chung, thường đứng đầu câu và không có chủ ngữ.',
            'Khi trích dẫn gián tiếp, chỉ cần đổi đại từ (và từ chỉ thời gian nếu cần, vd 明天 → 第二天): lời gốc 王明："我很忙。" → 王明说他很忙. Tiếng Trung không phải lùi thì như tiếng Anh.'
          ],
          table: [
            ['Từ', 'Cấu trúc', 'Ví dụ'],
            ['说', 'A + (跟 B) 说 + nội dung', '他跟我说他很忙。'],
            ['告诉', 'A + 告诉 + B + nội dung', '她告诉我她要出国。'],
            ['听说', '听 (A) 说 + nội dung', '听老师说明天考试。'],
            ['据说', '据说 + nội dung', '据说这里以前是一个湖。']
          ],
          examples: [
            { t: '小李跟我说他下个月要去上海出差。', py: 'Xiǎo Lǐ gēn wǒ shuō tā xià ge yuè yào qù Shànghǎi chūchāi.', vi: 'Tiểu Lý nói với tôi tháng sau cậu ấy đi công tác Thượng Hải.' },
            { t: '经理告诉我们会议取消了。', py: 'Jīnglǐ gàosu wǒmen huìyì qǔxiāo le.', vi: 'Giám đốc báo với chúng tôi là cuộc họp bị huỷ.' },
            { t: '听说那家饭馆的菜特别好吃。', py: 'Tīngshuō nà jiā fànguǎn de cài tèbié hǎochī.', vi: 'Nghe nói món ăn ở quán đó rất ngon.' },
            { t: '据说这个城市已经有两千多年的历史了。', py: 'Jùshuō zhège chéngshì yǐjīng yǒu liǎngqiān duō nián de lìshǐ le.', vi: 'Người ta nói thành phố này đã có hơn hai nghìn năm lịch sử.' }
          ],
          tip: 'Người Việt hay nói 他说我… với nghĩa "anh ấy nói với tôi…", nhưng câu này dễ bị hiểu thành "anh ấy nói (về) tôi". Hãy dùng 他跟我说… hoặc 他告诉我…. Và 告诉 không đi với 跟: không nói 他跟我告诉….'
        },
        dialogue: [
          { s: '李华', t: '王明，张经理刚才找你。', py: 'Wáng Míng, Zhāng jīnglǐ gāngcái zhǎo nǐ.', vi: 'Vương Minh, giám đốc Trương vừa tìm cậu đấy.' },
          { s: '王明', t: '他说什么了？', py: 'Tā shuō shénme le?', vi: 'Ông ấy nói gì thế?' },
          { s: '李华', t: '他让我转告你，明天的会议取消了。', py: 'Tā ràng wǒ zhuǎngào nǐ, míngtiān de huìyì qǔxiāo le.', vi: 'Ông ấy nhờ mình nhắn cậu là cuộc họp ngày mai huỷ rồi.' },
          { s: '王明', t: '太好了！他还告诉你什么了吗？', py: 'Tài hǎo le! Tā hái gàosu nǐ shénme le ma?', vi: 'Tốt quá! Ông ấy còn bảo gì nữa không?' },
          { s: '李华', t: '他还提醒你周五以前把报告交给他。', py: 'Tā hái tíxǐng nǐ zhōuwǔ yǐqián bǎ bàogào jiāo gěi tā.', vi: 'Ông ấy còn nhắc cậu nộp báo cáo cho ông ấy trước thứ sáu.' },
          { s: '王明', t: '好的。对了，听说公司要搬到新大楼了，是真的吗？', py: 'Hǎo de. Duì le, tīngshuō gōngsī yào bāndào xīn dàlóu le, shì zhēn de ma?', vi: 'Được rồi. À này, nghe nói công ty sắp chuyển sang toà nhà mới, có thật không?' },
          { s: '李华', t: '我也听同事说了。据说新办公室又大又漂亮。', py: 'Wǒ yě tīng tóngshì shuō le. Jùshuō xīn bàngōngshì yòu dà yòu piàoliang.', vi: 'Mình cũng nghe đồng nghiệp nói rồi. Nghe đồn văn phòng mới vừa rộng vừa đẹp.' }
        ],
        exercises: [
          { type: 'mc', q: '她___我她要出国留学。', options: ['说', '告诉', '听说'], answer: 1, explain: 'Sau chỗ trống là người nghe (我) → dùng 告诉 + người + nội dung.' },
          { type: 'mc', q: 'Câu nào đúng?', options: ['他跟我告诉他很忙。', '他告诉我他很忙。', '他说我他很忙。'], answer: 1, explain: '告诉 + người + nội dung; 告诉 không đi với 跟.' },
          { type: 'fill', q: '___这座桥有五百年的历史了。', answer: ['据说', 'jùshuō', 'jushuo', '听说', 'tīngshuō', 'tingshuo'], hint: 'nghe đồn (jùshuō)', explain: '据说 / 听说 đứng đầu câu để thuật lại thông tin nghe được.' },
          { type: 'order', vi: 'Nghe Tiểu Lý nói ngày mai thi.', words: ['明天', '听', '说', '小李', '考试'], answer: '听 小李 说 明天 考试' },
          { type: 'mc', q: 'Lời gốc 王明："我明天不来。" Thuật lại đúng là:', options: ['王明说我明天不来。', '王明说他明天不来。', '王明说你明天不来。'], answer: 1, explain: 'Trích dẫn gián tiếp: đổi 我 thành 他.' },
          { type: 'order', vi: 'Nhờ nhắn với anh ấy là cuộc họp bị huỷ rồi.', words: ['转告', '请', '会议', '他，', '取消了'], answer: '请 转告 他， 会议 取消了' },
          { type: 'mc', q: '"提醒" nghĩa là:', options: ['nhắc nhở', 'giải thích', 'đồng ý'], answer: 0, explain: '提醒 (đề tỉnh) = nhắc cho nhớ.' },
          { type: 'mc', q: 'Từ nào trang trọng, nguồn tin chung chung, thường đứng đầu câu không cần chủ ngữ?', options: ['告诉', '据说', '答应'], answer: 1, explain: '据说 (cứ thuyết) = theo người ta nói.' }
        ]
      },
      // ───────────────────────── HSK4-4 ─────────────────────────
      {
        id: 'zh-hsk4-4',
        icon: '🌏',
        title: 'Môi trường & xã hội',
        goal: 'Bàn về vấn đề môi trường, xã hội; nói về sự thay đổi dần dần và nêu quan điểm từ góc nhìn của một nhóm người.',
        vocab: [
          { w: '环境', ipa: 'huánjìng', hv: 'hoàn cảnh', vi: 'môi trường', ex: '我们应该保护环境。', exPy: 'Wǒmen yīnggāi bǎohù huánjìng.', exVi: 'Chúng ta nên bảo vệ môi trường.' },
          { w: '保护', ipa: 'bǎohù', hv: 'bảo hộ', vi: 'bảo vệ', ex: '保护动物就是保护我们自己。', exPy: 'Bǎohù dòngwù jiù shì bǎohù wǒmen zìjǐ.', exVi: 'Bảo vệ động vật chính là bảo vệ chính chúng ta.' },
          { w: '污染', ipa: 'wūrǎn', hv: 'ô nhiễm', vi: 'ô nhiễm', ex: '这条河的污染越来越严重。', exPy: 'Zhè tiáo hé de wūrǎn yuè lái yuè yánzhòng.', exVi: 'Ô nhiễm ở con sông này ngày càng nghiêm trọng.' },
          { w: '严重', ipa: 'yánzhòng', hv: 'nghiêm trọng', vi: 'nghiêm trọng', ex: '空气污染问题很严重。', exPy: 'Kōngqì wūrǎn wèntí hěn yánzhòng.', exVi: 'Vấn đề ô nhiễm không khí rất nghiêm trọng.' },
          { w: '垃圾', ipa: 'lājī', hv: '', vi: 'rác', ex: '请把垃圾扔进垃圾桶。', exPy: 'Qǐng bǎ lājī rēngjìn lājītǒng.', exVi: 'Hãy bỏ rác vào thùng rác.' },
          { w: '节约', ipa: 'jiéyuē', hv: 'tiết ước', vi: 'tiết kiệm', ex: '我们要节约用水。', exPy: 'Wǒmen yào jiéyuē yòng shuǐ.', exVi: 'Chúng ta phải tiết kiệm nước.' },
          { w: '社会', ipa: 'shèhuì', hv: 'xã hội', vi: 'xã hội', ex: '社会发展得越来越快。', exPy: 'Shèhuì fāzhǎn de yuè lái yuè kuài.', exVi: 'Xã hội phát triển ngày càng nhanh.' },
          { w: '减少', ipa: 'jiǎnshǎo', hv: 'giảm thiểu', vi: 'giảm bớt', ex: '我们应该减少使用塑料袋。', exPy: 'Wǒmen yīnggāi jiǎnshǎo shǐyòng sùliàodài.', exVi: 'Chúng ta nên hạn chế dùng túi ni lông.' },
          { w: '普遍', ipa: 'pǔbiàn', hv: 'phổ biến', vi: 'phổ biến', ex: '现在网上购物非常普遍。', exPy: 'Xiànzài wǎngshang gòuwù fēicháng pǔbiàn.', exVi: 'Bây giờ mua sắm trực tuyến rất phổ biến.' },
          { w: '影响', ipa: 'yǐngxiǎng', hv: 'ảnh hưởng', vi: 'ảnh hưởng', ex: '污染对健康有很大的影响。', exPy: 'Wūrǎn duì jiànkāng yǒu hěn dà de yǐngxiǎng.', exVi: 'Ô nhiễm ảnh hưởng rất lớn đến sức khoẻ.' }
        ],
        grammar: {
          title: '不但…而且…, 越来越…, 对…来说',
          explain: [
            '不但 (bất đãn) A，而且 (nhi thả) B = Không những A mà còn B. Nếu hai vế cùng chủ ngữ, chủ ngữ đứng trước 不但: 他不但会说汉语，而且说得很好. Nếu khác chủ ngữ, 不但 đứng trước chủ ngữ thứ nhất. Vế sau hay thêm 也 / 还.',
            '越来越 + tính từ / động từ tâm lý = càng ngày càng…: 天气越来越冷, 我越来越喜欢这里. Không thêm 很 / 非常 sau 越来越.',
            '对 + người / nhóm + 来说 = đối với … mà nói: nêu quan điểm từ góc độ của ai đó. 对我来说，健康最重要.',
            'Phân biệt: 对…来说 nêu góc nhìn; còn 对…有影响 / 对…好 nói về tác động lên đối tượng (污染对健康有影响).'
          ],
          table: [
            ['Mẫu', 'Nghĩa', 'Ví dụ'],
            ['不但…而且…', 'không những … mà còn …', '这里不但干净，而且很安静。'],
            ['越来越 + Adj', 'ngày càng …', '污染越来越严重。'],
            ['对…来说', 'đối với … mà nói', '对学生来说，时间很宝贵。']
          ],
          examples: [
            { t: '骑自行车不但能锻炼身体，而且能减少污染。', py: 'Qí zìxíngchē búdàn néng duànliàn shēntǐ, érqiě néng jiǎnshǎo wūrǎn.', vi: 'Đi xe đạp không những rèn luyện sức khoẻ mà còn giảm ô nhiễm.' },
            { t: '城市里的车越来越多了。', py: 'Chéngshì li de chē yuè lái yuè duō le.', vi: 'Xe cộ trong thành phố ngày càng nhiều.' },
            { t: '对年轻人来说，找工作越来越难了。', py: 'Duì niánqīngrén lái shuō, zhǎo gōngzuò yuè lái yuè nán le.', vi: 'Đối với người trẻ, tìm việc ngày càng khó.' },
            { t: '不但年轻人喜欢网上购物，而且老人也开始用手机买东西了。', py: 'Búdàn niánqīngrén xǐhuan wǎngshang gòuwù, érqiě lǎorén yě kāishǐ yòng shǒujī mǎi dōngxi le.', vi: 'Không chỉ người trẻ thích mua sắm trực tuyến, mà người già cũng bắt đầu mua đồ bằng điện thoại.' }
          ],
          tip: 'Lỗi hay gặp: 越来越很冷 — sai, chỉ nói 越来越冷. Với 对…来说 đừng quên 来说 ở cuối: 对我来说, không nói 对我说 (nghĩa là "nói với tôi").'
        },
        dialogue: [
          { s: '王明', t: '你看，这条河以前很干净，现在越来越脏了。', py: 'Nǐ kàn, zhè tiáo hé yǐqián hěn gānjìng, xiànzài yuè lái yuè zāng le.', vi: 'Cậu xem, con sông này trước kia rất sạch, giờ ngày càng bẩn.' },
          { s: '李华', t: '是啊，工厂多了，污染也越来越严重了。', py: 'Shì a, gōngchǎng duō le, wūrǎn yě yuè lái yuè yánzhòng le.', vi: 'Ừ, nhà máy nhiều lên, ô nhiễm cũng ngày càng nghiêm trọng.' },
          { s: '王明', t: '污染不但影响环境，而且影响我们的健康。', py: 'Wūrǎn búdàn yǐngxiǎng huánjìng, érqiě yǐngxiǎng wǒmen de jiànkāng.', vi: 'Ô nhiễm không những ảnh hưởng môi trường mà còn ảnh hưởng sức khoẻ của chúng ta.' },
          { s: '李华', t: '对我们普通人来说，能做的就是从小事开始。', py: 'Duì wǒmen pǔtōngrén lái shuō, néng zuò de jiù shì cóng xiǎoshì kāishǐ.', vi: 'Đối với người bình thường như chúng ta, điều có thể làm là bắt đầu từ việc nhỏ.' },
          { s: '王明', t: '比如节约用水，少用塑料袋。', py: 'Bǐrú jiéyuē yòng shuǐ, shǎo yòng sùliàodài.', vi: 'Ví dụ như tiết kiệm nước, ít dùng túi ni lông.' },
          { s: '李华', t: '对，还要把垃圾分类。现在这种做法越来越普遍了。', py: 'Duì, hái yào bǎ lājī fēnlèi. Xiànzài zhè zhǒng zuòfǎ yuè lái yuè pǔbiàn le.', vi: 'Đúng, còn phải phân loại rác. Bây giờ cách làm này ngày càng phổ biến.' }
        ],
        exercises: [
          { type: 'mc', q: '天气越来越___了。', options: ['冷', '很冷', '非常冷'], answer: 0, explain: 'Sau 越来越 không thêm 很 / 非常.' },
          { type: 'mc', q: '他不但会说汉语，___会说日语。', options: ['但是', '而且还', '所以'], answer: 1, explain: '不但…而且… = không những… mà còn…; vế sau hay thêm 还 / 也.' },
          { type: 'fill', q: '___我来说，家人最重要。', answer: ['对', 'duì', 'dui'], hint: 'đối với (duì)', explain: '对…来说 = đối với … mà nói.' },
          { type: 'order', vi: 'Ô nhiễm không khí ngày càng nghiêm trọng.', words: ['越来越', '空气污染', '严重了'], answer: '空气污染 越来越 严重了' },
          { type: 'mc', q: '"节约" nghĩa là:', options: ['ô nhiễm', 'tiết kiệm', 'bảo vệ'], answer: 1, explain: '节约 (tiết ước) = tiết kiệm.' },
          { type: 'order', vi: 'Đi xe đạp không những rèn luyện sức khoẻ mà còn giảm ô nhiễm.', words: ['而且', '骑自行车', '能减少污染', '不但', '能锻炼身体，'], answer: '骑自行车 不但 能锻炼身体， 而且 能减少污染' },
          { type: 'fill', q: '我们应该___环境。', answer: ['保护', 'bǎohù', 'baohu'], hint: 'bảo vệ (bǎohù)', explain: '保护环境 = bảo vệ môi trường.' },
          { type: 'mc', q: 'Câu nào đúng?', options: ['对学生说来，时间很宝贵。', '对学生来说，时间很宝贵。', '对学生来，时间很宝贵说。'], answer: 1, explain: 'Cấu trúc cố định: 对 + đối tượng + 来说.' }
        ]
      },
      // ───────────────────────── HSK4-5 ─────────────────────────
      {
        id: 'zh-hsk4-5',
        icon: '💻',
        title: 'Công nghệ',
        goal: 'Nói về máy tính, điện thoại, mạng; diễn đạt làm được hay không bằng bổ ngữ khả năng và nhấn mạnh bằng 连…都 / 也.',
        vocab: [
          { w: '电脑', ipa: 'diànnǎo', hv: 'điện não', vi: 'máy tính', ex: '我的电脑太旧了，打不开这个文件。', exPy: 'Wǒ de diànnǎo tài jiù le, dǎ bu kāi zhège wénjiàn.', exVi: 'Máy tính của tôi cũ quá, không mở được tệp này.' },
          { w: '网络', ipa: 'wǎngluò', hv: 'võng lạc', vi: 'mạng (internet)', ex: '这里的网络不太好。', exPy: 'Zhèli de wǎngluò bú tài hǎo.', exVi: 'Mạng ở đây không tốt lắm.' },
          { w: '密码', ipa: 'mìmǎ', hv: 'mật mã', vi: 'mật khẩu', ex: '我忘了邮箱的密码。', exPy: 'Wǒ wàngle yóuxiāng de mìmǎ.', exVi: 'Tôi quên mật khẩu hộp thư rồi.' },
          { w: '软件', ipa: 'ruǎnjiàn', hv: 'nhuyễn kiện', vi: 'phần mềm, ứng dụng', ex: '这个软件连老人都会用。', exPy: 'Zhège ruǎnjiàn lián lǎorén dōu huì yòng.', exVi: 'Ứng dụng này đến người già cũng biết dùng.' },
          { w: '下载', ipa: 'xiàzài', hv: 'hạ tải', vi: 'tải xuống', ex: '你可以在手机上下载这个软件。', exPy: 'Nǐ kěyǐ zài shǒujī shang xiàzài zhège ruǎnjiàn.', exVi: 'Bạn có thể tải ứng dụng này về điện thoại.' },
          { w: '信号', ipa: 'xìnhào', hv: 'tín hiệu', vi: 'tín hiệu, sóng', ex: '山里信号不好，我听不清你说话。', exPy: 'Shān li xìnhào bù hǎo, wǒ tīng bu qīng nǐ shuōhuà.', exVi: 'Trong núi sóng yếu, tôi nghe không rõ bạn nói.' },
          { w: '充电', ipa: 'chōngdiàn', hv: 'sung điện', vi: 'sạc pin', ex: '手机没电了，我得充电。', exPy: 'Shǒujī méi diàn le, wǒ děi chōngdiàn.', exVi: 'Điện thoại hết pin rồi, tôi phải sạc.' },
          { w: '屏幕', ipa: 'píngmù', hv: 'bình mạc', vi: 'màn hình', ex: '屏幕上的字太小了，我看不清楚。', exPy: 'Píngmù shang de zì tài xiǎo le, wǒ kàn bu qīngchu.', exVi: 'Chữ trên màn hình nhỏ quá, tôi nhìn không rõ.' },
          { w: '功能', ipa: 'gōngnéng', hv: 'công năng', vi: 'chức năng', ex: '这个手机的功能很多。', exPy: 'Zhège shǒujī de gōngnéng hěn duō.', exVi: 'Chiếc điện thoại này có nhiều chức năng.' },
          { w: '方法', ipa: 'fāngfǎ', hv: 'phương pháp', vi: 'cách, phương pháp', ex: '你有什么好方法吗？', exPy: 'Nǐ yǒu shénme hǎo fāngfǎ ma?', exVi: 'Bạn có cách nào hay không?' }
        ],
        grammar: {
          title: 'Bổ ngữ khả năng (看得懂 / 听不清) và 连…都 / 也…',
          explain: [
            'Bổ ngữ khả năng: chen 得 (de) hoặc 不 (bu) vào giữa động từ và bổ ngữ kết quả / xu hướng để nói có làm được hay không: 看懂 → 看得懂 (đọc hiểu được) / 看不懂 (đọc không hiểu). 听清 → 听得清 / 听不清.',
            'Câu hỏi: 看得懂吗？ hoặc 看得懂看不懂？ Một số mẫu hay gặp: 买不到 (không mua được), 做不完 (làm không xong), 打不开 (mở không ra), 记不住 (không nhớ nổi).',
            'So với 不能: 不能 thường là không được phép hoặc không thể nói chung; bổ ngữ khả năng nhấn mạnh do điều kiện khách quan hay năng lực mà không đạt kết quả: 太远了，我看不见.',
            '连 (liên) + A + 都 / 也 + … = ngay cả A cũng…, nhấn mạnh trường hợp cực đoan: 这个软件连孩子都会用 (đến trẻ con cũng biết dùng). Hay đi với phủ định: 我连他的名字都不知道.'
          ],
          table: [
            ['Khẳng định', 'Phủ định', 'Nghĩa'],
            ['看得懂', '看不懂', 'đọc hiểu được / đọc không hiểu'],
            ['听得清', '听不清', 'nghe rõ được / nghe không rõ'],
            ['打得开', '打不开', 'mở được / mở không được'],
            ['做得完', '做不完', 'làm xong được / làm không xong']
          ],
          examples: [
            { t: '这个说明书是英文的，你看得懂吗？', py: 'Zhège shuōmíngshū shì Yīngwén de, nǐ kàn de dǒng ma?', vi: 'Sách hướng dẫn này bằng tiếng Anh, bạn đọc hiểu được không?' },
            { t: '信号不好，我听不清你在说什么。', py: 'Xìnhào bù hǎo, wǒ tīng bu qīng nǐ zài shuō shénme.', vi: 'Sóng yếu, tôi nghe không rõ bạn đang nói gì.' },
            { t: '我连自己的密码都忘了。', py: 'Wǒ lián zìjǐ de mìmǎ dōu wàng le.', vi: 'Tôi quên cả mật khẩu của chính mình.' },
            { t: '现在连八十岁的老人也会用手机付钱。', py: 'Xiànzài lián bāshí suì de lǎorén yě huì yòng shǒujī fùqián.', vi: 'Giờ đến cả cụ già tám mươi tuổi cũng biết trả tiền bằng điện thoại.' }
          ],
          tip: 'Câu "Tôi nghe không rõ" là 我听不清, đừng nói 我不听清 hay 我不能听清. Phủ định của bổ ngữ khả năng luôn là chen 不 vào giữa: V + 不 + bổ ngữ.'
        },
        dialogue: [
          { s: '王明', t: '喂？李华，你那边太吵了，我听不清。', py: 'Wéi? Lǐ Huá, nǐ nàbiān tài chǎo le, wǒ tīng bu qīng.', vi: 'Alô? Lý Hoa, chỗ cậu ồn quá, mình nghe không rõ.' },
          { s: '李华', t: '我在地铁里，信号不太好。你现在听得见吗？', py: 'Wǒ zài dìtiě li, xìnhào bú tài hǎo. Nǐ xiànzài tīng de jiàn ma?', vi: 'Mình đang ở trên tàu điện ngầm, sóng không tốt lắm. Giờ cậu nghe thấy không?' },
          { s: '王明', t: '听得见了。我想问你，那个新软件你会用吗？', py: 'Tīng de jiàn le. Wǒ xiǎng wèn nǐ, nàge xīn ruǎnjiàn nǐ huì yòng ma?', vi: 'Nghe thấy rồi. Mình muốn hỏi, cái ứng dụng mới đó cậu biết dùng không?' },
          { s: '李华', t: '会啊，很简单，连我奶奶都会用。', py: 'Huì a, hěn jiǎndān, lián wǒ nǎinai dōu huì yòng.', vi: 'Biết chứ, dễ lắm, đến bà mình cũng biết dùng.' },
          { s: '王明', t: '可是我下载以后打不开，屏幕上的说明我也看不懂。', py: 'Kěshì wǒ xiàzài yǐhòu dǎ bu kāi, píngmù shang de shuōmíng wǒ yě kàn bu dǒng.', vi: 'Nhưng mình tải về rồi mà không mở được, hướng dẫn trên màn hình mình cũng đọc không hiểu.' },
          { s: '李华', t: '可能是你的手机太旧了。晚上我去你家帮你看看吧。', py: 'Kěnéng shì nǐ de shǒujī tài jiù le. Wǎnshang wǒ qù nǐ jiā bāng nǐ kànkan ba.', vi: 'Có lẽ điện thoại cậu cũ quá. Tối mình qua nhà xem giúp cậu nhé.' }
        ],
        exercises: [
          { type: 'mc', q: '黑板上的字太小了，我看___清楚。', options: ['不', '没', '得不'], answer: 0, explain: 'Bổ ngữ khả năng phủ định: V + 不 + bổ ngữ → 看不清楚.' },
          { type: 'mc', q: '"Tôi nghe không rõ." nói thế nào?', options: ['我不听清。', '我听不清。', '我没听得清。'], answer: 1, explain: '听不清 = nghe không rõ (không thể nghe rõ).' },
          { type: 'fill', q: '这个软件很简单，连孩子___会用。', answer: ['都', 'dōu', 'dou', '也', 'yě', 'ye'], hint: 'cũng (dōu)', explain: '连…都 / 也… = ngay cả… cũng….' },
          { type: 'order', vi: 'Bạn đọc hiểu được cuốn sách này không?', words: ['这本书', '看得懂', '你', '吗？'], answer: '你 看得懂 这本书 吗？', alt: ['这本书 你 看得懂 吗？'] },
          { type: 'mc', q: '作业太多了，今天晚上我做___完。', options: ['得', '不', '没'], answer: 1, explain: '做不完 = làm không xong (không thể làm xong).' },
          { type: 'order', vi: 'Tôi quên cả mật khẩu của chính mình rồi.', words: ['都', '我', '忘了', '自己的密码', '连'], answer: '我 连 自己的密码 都 忘了', alt: ['连 自己的密码 我 都 忘了'] },
          { type: 'mc', q: '"下载" nghĩa là:', options: ['tải xuống', 'sạc pin', 'tín hiệu'], answer: 0, explain: '下载 (hạ tải) = tải xuống.' },
          { type: 'fill', q: '手机没电了，我得___电。', answer: ['充', 'chōng', 'chong'], hint: 'sạc (chōng)', explain: '充电 (sung điện) = sạc pin.' }
        ]
      },
      // ───────────────────────── HSK4-6 ─────────────────────────
      {
        id: 'zh-hsk4-6',
        icon: '✉️',
        title: 'Giao tiếp trang trọng & email',
        goal: 'Viết email và giao tiếp lịch sự nơi công sở: xưng hô, nhờ vả, nêu lý do và kết thư đúng chuẩn.',
        vocab: [
          { w: '您', ipa: 'nín', hv: 'nâm', vi: 'ông, bà, ngài (kính trọng của 你)', ex: '您好，请问您贵姓？', exPy: 'Nín hǎo, qǐngwèn nín guìxìng?', exVi: 'Xin chào, xin hỏi quý danh của ông/bà?' },
          { w: '麻烦', ipa: 'máfan', hv: 'ma phiền', vi: 'làm phiền; phiền phức', ex: '麻烦您把文件发给我。', exPy: 'Máfan nín bǎ wénjiàn fā gěi wǒ.', exVi: 'Phiền anh/chị gửi tài liệu cho tôi.' },
          { w: '关于', ipa: 'guānyú', hv: 'quan vu', vi: 'về, liên quan đến', ex: '关于这个问题，我们明天再讨论。', exPy: 'Guānyú zhège wèntí, wǒmen míngtiān zài tǎolùn.', exVi: 'Về vấn đề này, mai chúng ta thảo luận tiếp.' },
          { w: '因此', ipa: 'yīncǐ', hv: 'nhân thử', vi: 'vì thế, do đó', ex: '他工作很认真，因此得到了大家的信任。', exPy: 'Tā gōngzuò hěn rènzhēn, yīncǐ dédàole dàjiā de xìnrèn.', exVi: 'Anh ấy làm việc rất nghiêm túc, vì thế được mọi người tin tưởng.' },
          { w: '由于', ipa: 'yóuyú', hv: 'do vu', vi: 'do, bởi vì', ex: '由于天气原因，航班推迟了。', exPy: 'Yóuyú tiānqì yuányīn, hángbān tuīchí le.', exVi: 'Do thời tiết, chuyến bay bị hoãn.' },
          { w: '附件', ipa: 'fùjiàn', hv: 'phụ kiện', vi: 'tệp đính kèm', ex: '详细内容请看附件。', exPy: 'Xiángxì nèiróng qǐng kàn fùjiàn.', exVi: 'Nội dung chi tiết xin xem tệp đính kèm.' },
          { w: '回复', ipa: 'huífù', hv: 'hồi phục', vi: 'trả lời, hồi âm', ex: '收到邮件后请尽快回复。', exPy: 'Shōudào yóujiàn hòu qǐng jǐnkuài huífù.', exVi: 'Sau khi nhận được thư xin vui lòng hồi âm sớm.' },
          { w: '邮件', ipa: 'yóujiàn', hv: 'bưu kiện', vi: 'thư, email', ex: '我昨天给您发了一封邮件。', exPy: 'Wǒ zuótiān gěi nín fāle yì fēng yóujiàn.', exVi: 'Hôm qua tôi đã gửi cho ông/bà một email.' },
          { w: '感谢', ipa: 'gǎnxiè', hv: 'cảm tạ', vi: 'cảm ơn (trang trọng)', ex: '感谢您的帮助！', exPy: 'Gǎnxiè nín de bāngzhù!', exVi: 'Cảm ơn sự giúp đỡ của ông/bà!' },
          { w: '安排', ipa: 'ānpái', hv: 'an bài', vi: 'sắp xếp, bố trí', ex: '请您安排一下会议时间。', exPy: 'Qǐng nín ānpái yíxià huìyì shíjiān.', exVi: 'Xin ông/bà sắp xếp thời gian họp.' }
        ],
        grammar: {
          title: 'Ngôn ngữ trang trọng: 您, 请, 麻烦您, 关于, 因此 / 由于',
          explain: [
            '您 (nín) là dạng kính trọng của 你, dùng với cấp trên, khách hàng, người lớn tuổi hoặc người mới gặp. Khi nói với nhiều người, thay vì 您们 nên dùng 各位 (các vị) hoặc 大家.',
            '请 + động từ = xin mời / vui lòng; 麻烦您 + động từ = phiền ông/bà…, lời nhờ vả lịch sự, ngụ ý mình làm phiền người khác. Sau lời nhờ thường thêm 谢谢 hoặc 辛苦了.',
            '关于 (quan vu) + vấn đề = về, liên quan đến …, thường đứng đầu câu hoặc làm tiêu đề: 关于下周会议的通知 (Thông báo về cuộc họp tuần sau).',
            '由于 (do vu) = do, bởi vì — trang trọng hơn 因为, đi với 因此 hoặc 所以. 因此 (nhân thử) = vì thế, đứng đầu vế sau. Lưu ý: dùng 由于…因此… hoặc 因为…所以…, tránh 因为…因此….'
          ],
          table: [
            ['Phần thư', 'Mẫu câu', 'Nghĩa'],
            ['Xưng hô', '尊敬的王经理：', 'Kính gửi giám đốc Vương,'],
            ['Chào', '您好！', 'Kính chào ông/bà!'],
            ['Nêu chủ đề', '关于…，…', 'Về việc …'],
            ['Nhờ vả', '麻烦您…', 'Phiền ông/bà …'],
            ['Kết thư', '期待您的回复。', 'Mong nhận được hồi âm của ông/bà.'],
            ['Lời chào cuối', '此致 敬礼！', 'Trân trọng!']
          ],
          examples: [
            { t: '尊敬的张经理：您好！', py: 'Zūnjìng de Zhāng jīnglǐ: Nín hǎo!', vi: 'Kính gửi giám đốc Trương: Kính chào ông!' },
            { t: '关于下周的会议，我想跟您确认一下时间。', py: 'Guānyú xià zhōu de huìyì, wǒ xiǎng gēn nín quèrèn yíxià shíjiān.', vi: 'Về cuộc họp tuần sau, tôi muốn xác nhận lại thời gian với ông.' },
            { t: '由于航班推迟，因此我不能按时参加会议。', py: 'Yóuyú hángbān tuīchí, yīncǐ wǒ bù néng ànshí cānjiā huìyì.', vi: 'Do chuyến bay bị hoãn nên tôi không thể tham dự cuộc họp đúng giờ.' },
            { t: '麻烦您在周五以前回复我，谢谢！', py: 'Máfan nín zài zhōuwǔ yǐqián huífù wǒ, xièxie!', vi: 'Phiền ông/bà hồi âm cho tôi trước thứ sáu, cảm ơn!' }
          ],
          tip: 'Thư trang trọng tiếng Trung mở đầu bằng 尊敬的 + họ + chức danh + dấu hai chấm (：), xuống dòng viết 您好！ Kết thư bằng 此致 (một dòng) và 敬礼！ (dòng dưới), hoặc 祝工作顺利！ Đừng dùng 你 với cấp trên hay khách hàng.'
        },
        dialogue: [
          { s: '李华', t: '王经理，您好！我是市场部的李华。', py: 'Wáng jīnglǐ, nín hǎo! Wǒ shì shìchǎngbù de Lǐ Huá.', vi: 'Chào giám đốc Vương! Tôi là Lý Hoa ở phòng Marketing.' },
          { s: '王经理', t: '你好，小李，有什么事吗？', py: 'Nǐ hǎo, Xiǎo Lǐ, yǒu shénme shì ma?', vi: 'Chào Tiểu Lý, có việc gì thế?' },
          { s: '李华', t: '关于下周的会议，我昨天给您发了一封邮件，不知道您收到了没有。', py: 'Guānyú xià zhōu de huìyì, wǒ zuótiān gěi nín fāle yì fēng yóujiàn, bù zhīdào nín shōudàole méiyǒu.', vi: 'Về cuộc họp tuần sau, hôm qua tôi đã gửi ông một email, không biết ông đã nhận được chưa.' },
          { s: '王经理', t: '收到了。不过由于这两天太忙，因此还没回复。', py: 'Shōudào le. Búguò yóuyú zhè liǎng tiān tài máng, yīncǐ hái méi huífù.', vi: 'Nhận rồi. Có điều mấy hôm nay bận quá nên tôi chưa trả lời.' },
          { s: '李华', t: '没关系。麻烦您看一下附件里的安排，有问题请随时告诉我。', py: 'Méi guānxi. Máfan nín kàn yíxià fùjiàn li de ānpái, yǒu wèntí qǐng suíshí gàosu wǒ.', vi: 'Không sao ạ. Phiền ông xem qua lịch sắp xếp trong tệp đính kèm, có vấn đề gì xin cứ báo tôi.' },
          { s: '王经理', t: '好的，我今天下午回复你。', py: 'Hǎo de, wǒ jīntiān xiàwǔ huífù nǐ.', vi: 'Được, chiều nay tôi sẽ trả lời cô.' },
          { s: '李华', t: '感谢您！那我不打扰您了。', py: 'Gǎnxiè nín! Nà wǒ bù dǎrǎo nín le.', vi: 'Cảm ơn ông! Vậy tôi không làm phiền ông nữa.' }
        ],
        exercises: [
          { type: 'mc', q: '___您帮我看一下这份文件，谢谢！', options: ['麻烦', '关于', '因此'], answer: 0, explain: '麻烦您 + V = phiền ông/bà làm gì (lời nhờ lịch sự).' },
          { type: 'mc', q: '由于天气不好，___航班推迟了。', options: ['但是', '因此', '虽然'], answer: 1, explain: '由于…因此… = do… nên….' },
          { type: 'fill', q: '___下周的会议，请大家准时参加。', answer: ['关于', 'guānyú', 'guanyu'], hint: 'về, liên quan đến (guānyú)', explain: '关于 + vấn đề đứng đầu câu để nêu chủ đề.' },
          { type: 'order', vi: 'Mong nhận được hồi âm của ông/bà.', words: ['回复', '期待', '的', '您'], answer: '期待 您 的 回复' },
          { type: 'mc', q: 'Mở đầu email gửi giám đốc Trương, cách nào phù hợp nhất?', options: ['张经理，你好！', '尊敬的张经理：您好！', '喂，张经理！'], answer: 1, explain: 'Thư trang trọng: 尊敬的 + họ + chức danh + ：, rồi 您好！' },
          { type: 'order', vi: 'Phiền anh/chị gửi tệp đính kèm cho tôi.', words: ['发给我', '麻烦', '附件', '您', '把'], answer: '麻烦 您 把 附件 发给我' },
          { type: 'mc', q: '"由于" gần nghĩa nhất với:', options: ['因为', '所以', '但是'], answer: 0, explain: '由于 (do vu) = 因为 nhưng trang trọng hơn.' },
          { type: 'mc', q: 'Cách kết thư trang trọng truyền thống là:', options: ['此致 敬礼！', '再见了！', '拜拜！'], answer: 0, explain: '此致 (một dòng) + 敬礼！ (dòng dưới) là công thức kết thư trang trọng.' }
        ]
      }
    ]
  }
]);
