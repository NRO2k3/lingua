// Phần bổ sung bài học tiếng Trung cấp HSK2: 10 từ mới, 8 bài tập, 1 bài đọc cho mỗi unit.
export default {
  // ───────────────────────── HSK2-1: Thời gian & lịch hẹn ─────────────────────────
  'zh-hsk2-1': {
    vocab: [
      { w: '分钟', ipa: 'fēnzhōng', hv: 'phân chung', vi: 'phút (khoảng thời gian)', ex: '从我家到学校要二十分钟。', exPy: 'Cóng wǒ jiā dào xuéxiào yào èrshí fēnzhōng.', exVi: 'Từ nhà tôi đến trường mất hai mươi phút.' },
      { w: '刻', ipa: 'kè', hv: 'khắc', vi: '15 phút (một khắc)', ex: '现在差一刻八点。', exPy: 'Xiànzài chà yí kè bā diǎn.', exVi: 'Bây giờ là tám giờ kém mười lăm.' },
      { w: '上周', ipa: 'shàngzhōu', hv: 'thượng chu', vi: 'tuần trước', ex: '上周我工作很忙。', exPy: 'Shàngzhōu wǒ gōngzuò hěn máng.', exVi: 'Tuần trước tôi làm việc rất bận.' },
      { w: '下周', ipa: 'xiàzhōu', hv: 'hạ chu', vi: 'tuần sau', ex: '下周五是我的生日。', exPy: 'Xiàzhōu wǔ shì wǒ de shēngrì.', exVi: 'Thứ Sáu tuần sau là sinh nhật tôi.' },
      { w: '前年', ipa: 'qiánnián', hv: 'tiền niên', vi: 'năm kia', ex: '前年我在北京学汉语。', exPy: 'Qiánnián wǒ zài Běijīng xué Hànyǔ.', exVi: 'Năm kia tôi học tiếng Trung ở Bắc Kinh.' },
      { w: '手表', ipa: 'shǒubiǎo', hv: 'thủ biểu', vi: 'đồng hồ đeo tay', ex: '你看看手表，现在几点了？', exPy: 'Nǐ kànkan shǒubiǎo, xiànzài jǐ diǎn le?', exVi: 'Bạn xem đồng hồ đi, bây giờ mấy giờ rồi?' },
      { w: '有空儿', ipa: 'yǒu kòngr', hv: '', vi: 'rảnh, có thời gian rảnh', ex: '你星期六有空儿吗？', exPy: 'Nǐ xīngqīliù yǒu kòngr ma?', exVi: 'Thứ Bảy bạn có rảnh không?' },
      { w: '半夜', ipa: 'bànyè', hv: 'bán dạ', vi: 'nửa đêm', ex: '他常常半夜十二点才睡觉。', exPy: "Tā chángcháng bànyè shí'èr diǎn cái shuìjiào.", exVi: 'Anh ấy thường mười hai giờ đêm mới đi ngủ.' },
      { w: '差不多', ipa: 'chàbuduō', hv: 'sai bất đa', vi: 'gần như, khoảng chừng', ex: '现在差不多七点了。', exPy: 'Xiànzài chàbuduō qī diǎn le.', exVi: 'Bây giờ gần bảy giờ rồi.' },
      { w: '刚才', ipa: 'gāngcái', hv: 'cương tài', vi: 'vừa nãy, lúc nãy', ex: '刚才你去哪儿了？', exPy: 'Gāngcái nǐ qù nǎr le?', exVi: 'Vừa nãy bạn đi đâu thế?' }
    ],
    exercises: [
      { type: 'mc', q: '"9 giờ 15" nói thế nào?', options: ['九点一刻', '九点半', '一刻九点'], answer: 0, explain: '一刻 = 15 phút, đứng sau 点: 九点一刻. 九点半 là 9 giờ 30.' },
      { type: 'fill', q: '从这儿到机场要四十___。（Từ đây đến sân bay mất bốn mươi phút.）', answer: ['分钟', 'fēnzhōng', 'fenzhong'], hint: 'fēnzhōng – phút (khoảng thời gian)', explain: '分钟 chỉ khoảng thời gian kéo dài bao lâu; 分 dùng khi nói giờ: 八点十分.' },
      { type: 'mc', q: '"Tuần sau" là:', options: ['上周', '下周', '周末'], answer: 1, explain: '上 = trước, 下 = sau: 上周 là tuần trước, 下周 là tuần sau.' },
      { type: 'order', vi: 'Chiều thứ Bảy bạn có rảnh không?', words: ['有空儿', '星期六', '吗？', '你', '下午'], answer: '你 星期六 下午 有空儿 吗？' },
      { type: 'mc', q: '前年 nghĩa là:', options: ['năm ngoái', 'năm kia', 'năm sau'], answer: 1, explain: '前年 = năm kia. Năm ngoái là 去年, năm sau là 明年.' },
      { type: 'fill', q: '___你说什么？我没听见。（Vừa nãy bạn nói gì? Tôi không nghe thấy.）', answer: ['刚才', 'gāngcái', 'gangcai'], hint: 'gāngcái – vừa nãy', explain: '刚才 = vừa nãy, lúc nãy; đứng đầu câu hoặc ngay sau chủ ngữ.' },
      { type: 'order', vi: 'Lúc ngủ, tôi không xem điện thoại.', words: ['的时候', '手机', '我', '睡觉', '看', '不'], answer: '睡觉 的时候 我 不 看 手机' },
      { type: 'mc', q: '"8 giờ kém 15" là:', options: ['差一刻八点', '八点一刻', '七点半'], answer: 0, explain: '差 = kém: 差一刻八点 = còn 15 phút nữa là 8 giờ.' }
    ],
    reading: {
      title: '下周六的约会',
      titleVi: 'Cuộc hẹn thứ Bảy tuần sau',
      text: [
        '我叫阮兰，是越南留学生。下周六是我的朋友王明的生日。刚才他给我打电话，问我那天有没有空儿。我说上午要上课，下午有空儿。',
        '我们打算下午两点一刻在学校门口见面，然后一起去饭馆吃饭。从学校到饭馆差不多要二十分钟。',
        '王明说，吃饭的时候，大家可以一起唱歌。我很喜欢唱歌，可是不能玩儿到半夜，因为星期天上午我还要工作。'
      ],
      py: [
        'Wǒ jiào Ruǎn Lán, shì Yuènán liúxuéshēng. Xiàzhōu liù shì wǒ de péngyou Wáng Míng de shēngrì. Gāngcái tā gěi wǒ dǎ diànhuà, wèn wǒ nà tiān yǒu méiyǒu kòngr. Wǒ shuō shàngwǔ yào shàngkè, xiàwǔ yǒu kòngr.',
        'Wǒmen dǎsuàn xiàwǔ liǎng diǎn yí kè zài xuéxiào ménkǒu jiànmiàn, ránhòu yìqǐ qù fànguǎn chīfàn. Cóng xuéxiào dào fànguǎn chàbuduō yào èrshí fēnzhōng.',
        'Wáng Míng shuō, chīfàn de shíhou, dàjiā kěyǐ yìqǐ chànggē. Wǒ hěn xǐhuan chànggē, kěshì bù néng wánr dào bànyè, yīnwèi xīngqītiān shàngwǔ wǒ hái yào gōngzuò.'
      ],
      vi: [
        'Tôi tên là Nguyễn Lan, là du học sinh Việt Nam. Thứ Bảy tuần sau là sinh nhật của bạn tôi, Vương Minh. Vừa nãy cậu ấy gọi điện cho tôi, hỏi hôm đó tôi có rảnh không. Tôi nói buổi sáng phải lên lớp, buổi chiều thì rảnh.',
        'Chúng tôi định gặp nhau ở cổng trường lúc hai giờ mười lăm chiều, sau đó cùng đi ăn ở quán. Từ trường đến quán mất khoảng hai mươi phút.',
        'Vương Minh nói, lúc ăn cơm mọi người có thể cùng hát. Tôi rất thích hát, nhưng không thể chơi đến nửa đêm, vì sáng chủ nhật tôi còn phải đi làm.'
      ],
      questions: [
        { q: 'Sinh nhật Vương Minh vào ngày nào?', options: ['Thứ Bảy tuần sau', 'Thứ Bảy tuần trước', 'Chủ nhật tuần sau', 'Hôm nay'], answer: 0, explain: '下周六 = thứ Bảy tuần sau.' },
        { q: 'Hôm đó Lan rảnh vào lúc nào?', options: ['Buổi sáng', 'Buổi chiều', 'Cả ngày', 'Không rảnh lúc nào'], answer: 1, explain: '上午要上课，下午有空儿: sáng phải lên lớp, chiều rảnh.' },
        { q: 'Hai người hẹn gặp nhau lúc mấy giờ?', options: ['2 giờ chiều', '2 giờ 15 chiều', '2 giờ 30 chiều', '2 giờ kém 15 chiều'], answer: 1, explain: '两点一刻 = 2 giờ 15 phút.' },
        { q: 'Vì sao Lan không thể chơi đến nửa đêm?', options: ['Vì cô ấy không thích hát', 'Vì sáng chủ nhật cô ấy còn phải đi làm', 'Vì nhà cô ấy ở xa', 'Vì cô ấy phải học bài'], answer: 1, explain: '因为星期天上午我还要工作: vì sáng chủ nhật còn phải làm việc.' }
      ]
    }
  },

  // ───────────────────────── HSK2-2: Mua sắm ─────────────────────────
  'zh-hsk2-2': {
    vocab: [
      { w: '超市', ipa: 'chāoshì', hv: 'siêu thị', vi: 'siêu thị', ex: '我常常去超市买水果。', exPy: 'Wǒ chángcháng qù chāoshì mǎi shuǐguǒ.', exVi: 'Tôi thường đi siêu thị mua hoa quả.' },
      { w: '顾客', ipa: 'gùkè', hv: 'cố khách', vi: 'khách hàng', ex: '今天商店里的顾客很多。', exPy: 'Jīntiān shāngdiàn lǐ de gùkè hěn duō.', exVi: 'Hôm nay trong cửa hàng có rất nhiều khách.' },
      { w: '一共', ipa: 'yígòng', hv: 'nhất cộng', vi: 'tổng cộng', ex: '这些东西一共多少钱？', exPy: 'Zhèxiē dōngxi yígòng duōshao qián?', exVi: 'Mấy thứ này tổng cộng bao nhiêu tiền?' },
      { w: '斤', ipa: 'jīn', hv: 'cân', vi: 'cân (đơn vị Trung Quốc, = 500 g)', ex: '苹果五块钱一斤。', exPy: 'Píngguǒ wǔ kuài qián yì jīn.', exVi: 'Táo năm tệ một cân.' },
      { w: '信用卡', ipa: 'xìnyòngkǎ', hv: 'tín dụng tạp', vi: 'thẻ tín dụng', ex: '我可以用信用卡吗？', exPy: 'Wǒ kěyǐ yòng xìnyòngkǎ ma?', exVi: 'Tôi có thể dùng thẻ tín dụng không?' },
      { w: '合适', ipa: 'héshì', hv: 'hợp thích', vi: 'vừa, hợp', ex: '这双鞋你穿很合适。', exPy: 'Zhè shuāng xié nǐ chuān hěn héshì.', exVi: 'Đôi giày này bạn đi rất vừa.' },
      { w: '换', ipa: 'huàn', hv: 'hoán', vi: 'đổi, thay', ex: '这件太小了，可以换一件大的吗？', exPy: 'Zhè jiàn tài xiǎo le, kěyǐ huàn yí jiàn dà de ma?', exVi: 'Cái này nhỏ quá, có thể đổi cái to hơn không?' },
      { w: '鞋', ipa: 'xié', hv: 'hài', vi: 'giày', ex: '这双鞋多少钱？', exPy: 'Zhè shuāng xié duōshao qián?', exVi: 'Đôi giày này bao nhiêu tiền?' },
      { w: '颜色', ipa: 'yánsè', hv: 'nhan sắc', vi: 'màu sắc', ex: '你喜欢什么颜色？', exPy: 'Nǐ xǐhuan shénme yánsè?', exVi: 'Bạn thích màu gì?' },
      { w: '大小', ipa: 'dàxiǎo', hv: 'đại tiểu', vi: 'kích cỡ, cỡ', ex: '这件衣服大小正好。', exPy: 'Zhè jiàn yīfu dàxiǎo zhènghǎo.', exVi: 'Cái áo này cỡ vừa khít.' }
    ],
    exercises: [
      { type: 'mc', q: 'Muốn hỏi "tổng cộng bao nhiêu tiền?", nói:', options: ['一共多少钱？', '一共几钱？', '多少一共钱？'], answer: 0, explain: '一共 đứng trước 多少钱; hỏi giá dùng 多少钱, không dùng 几.' },
      { type: 'fill', q: '苹果六块钱一___。（Táo sáu tệ một cân.）', answer: ['斤', 'jīn', 'jin'], hint: 'jīn – cân (500 g)', explain: '斤 là đơn vị cân của Trung Quốc, bằng 500 g. Người Trung Quốc hay nói giá theo mẫu: 六块钱一斤.' },
      { type: 'order', vi: 'Tôi có thể dùng thẻ tín dụng không?', words: ['用', '可以', '吗？', '信用卡', '我'], answer: '我 可以 用 信用卡 吗？' },
      { type: 'mc', q: '这双鞋你穿很___。（Đôi giày này bạn đi rất vừa.）', options: ['合适', '颜色', '顾客'], answer: 0, explain: '合适 = vừa, hợp; 颜色 = màu sắc; 顾客 = khách hàng.' },
      { type: 'fill', q: '这件太小了，可以___一件大的吗？（Cái này nhỏ quá, đổi cái to hơn được không?）', answer: ['换', 'huàn', 'huan'], hint: 'huàn – đổi', explain: '换 = đổi, thay: 换一件大的 = đổi một cái to hơn.' },
      { type: 'mc', q: '三块八毛 là bao nhiêu tiền?', options: ['3,8 tệ', '38 tệ', '0,38 tệ'], answer: 0, explain: '块 = tệ, 毛 = hào (1/10 tệ): 3 tệ 8 hào = 3,8 tệ.' },
      { type: 'order', vi: 'Bạn thích màu gì?', words: ['颜色？', '喜欢', '什么', '你'], answer: '你 喜欢 什么 颜色？' },
      { type: 'mc', q: '"Khách hàng (trong cửa hàng)" là:', options: ['顾客', '司机', '经理'], answer: 0, explain: '顾客 = khách hàng; 司机 = tài xế; 经理 = giám đốc, quản lý.' }
    ],
    reading: {
      title: '在超市买东西',
      titleVi: 'Đi mua đồ ở siêu thị',
      text: [
        '星期天上午，我和妈妈去超市买东西。超市里顾客很多。妈妈买了两斤苹果，八块钱一斤。',
        '然后我们去看鞋。我喜欢一双白色的鞋，可是大小不合适，有点儿小。服务员给我换了一双大的，颜色也很好看。',
        '这双鞋一百六十块，太贵了！妈妈问：“可以便宜一点儿吗？”最后，服务员说一百四十块卖给我们。我们一共花了一百五十六块钱，妈妈用信用卡付了钱。'
      ],
      py: [
        'Xīngqītiān shàngwǔ, wǒ hé māma qù chāoshì mǎi dōngxi. Chāoshì lǐ gùkè hěn duō. Māma mǎi le liǎng jīn píngguǒ, bā kuài qián yì jīn.',
        'Ránhòu wǒmen qù kàn xié. Wǒ xǐhuan yì shuāng báisè de xié, kěshì dàxiǎo bù héshì, yǒudiǎnr xiǎo. Fúwùyuán gěi wǒ huàn le yì shuāng dà de, yánsè yě hěn hǎokàn.',
        'Zhè shuāng xié yìbǎi liùshí kuài, tài guì le! Māma wèn: "Kěyǐ piányi yìdiǎnr ma?" Zuìhòu, fúwùyuán shuō yìbǎi sìshí kuài mài gěi wǒmen. Wǒmen yígòng huā le yìbǎi wǔshíliù kuài qián, māma yòng xìnyòngkǎ fù le qián.'
      ],
      vi: [
        'Sáng chủ nhật, tôi và mẹ đi siêu thị mua đồ. Trong siêu thị có rất nhiều khách. Mẹ mua hai cân táo, tám tệ một cân.',
        'Sau đó chúng tôi đi xem giày. Tôi thích một đôi giày màu trắng, nhưng cỡ không vừa, hơi nhỏ. Nhân viên đổi cho tôi một đôi to hơn, màu cũng rất đẹp.',
        'Đôi giày này 160 tệ, đắt quá! Mẹ hỏi: "Có thể rẻ hơn một chút không?" Cuối cùng, nhân viên nói bán cho chúng tôi 140 tệ. Chúng tôi tiêu tổng cộng 156 tệ, mẹ trả bằng thẻ tín dụng.'
      ],
      questions: [
        { q: 'Hai mẹ con đi siêu thị khi nào?', options: ['Sáng chủ nhật', 'Chiều thứ Bảy', 'Tối chủ nhật', 'Sáng thứ Bảy'], answer: 0, explain: '星期天上午 = sáng chủ nhật.' },
        { q: 'Táo giá bao nhiêu?', options: ['8 tệ một cân', '16 tệ một cân', '2 tệ một cân'], answer: 0, explain: '八块钱一斤 = 8 tệ một cân; mẹ mua 2 cân hết 16 tệ.' },
        { q: 'Vì sao đôi giày trắng đầu tiên không được?', options: ['Màu không đẹp', 'Cỡ không vừa, hơi nhỏ', 'Quá đắt', 'Cửa hàng hết giày trắng'], answer: 1, explain: '大小不合适，有点儿小: cỡ không vừa, hơi nhỏ.' },
        { q: 'Hai mẹ con tiêu tổng cộng bao nhiêu tiền?', options: ['140 tệ', '156 tệ', '160 tệ', '176 tệ'], answer: 1, explain: '一共花了一百五十六块钱: 16 tệ tiền táo + 140 tệ tiền giày = 156 tệ.' }
      ]
    }
  },

  // ───────────────────────── HSK2-3: Nhà cửa & chỉ đường ─────────────────────────
  'zh-hsk2-3': {
    vocab: [
      { w: '对面', ipa: 'duìmiàn', hv: 'đối diện', vi: 'phía đối diện', ex: '银行在超市对面。', exPy: 'Yínháng zài chāoshì duìmiàn.', exVi: 'Ngân hàng ở đối diện siêu thị.' },
      { w: '问路', ipa: 'wènlù', hv: 'vấn lộ', vi: 'hỏi đường', ex: '我不知道怎么走，我们去问路吧。', exPy: 'Wǒ bù zhīdào zěnme zǒu, wǒmen qù wènlù ba.', exVi: 'Tôi không biết đi thế nào, chúng ta đi hỏi đường đi.' },
      { w: '一直', ipa: 'yìzhí', hv: 'nhất trực', vi: 'thẳng; liên tục, suốt', ex: '一直往前走，就到学校了。', exPy: 'Yìzhí wǎng qián zǒu, jiù dào xuéxiào le.', exVi: 'Cứ đi thẳng về phía trước là đến trường.' },
      { w: '公里', ipa: 'gōnglǐ', hv: 'công lý', vi: 'ki-lô-mét, cây số', ex: '我家离公司三公里。', exPy: 'Wǒ jiā lí gōngsī sān gōnglǐ.', exVi: 'Nhà tôi cách công ty ba cây số.' },
      { w: '近', ipa: 'jìn', hv: 'cận', vi: 'gần', ex: '超市离这儿很近。', exPy: 'Chāoshì lí zhèr hěn jìn.', exVi: 'Siêu thị cách đây rất gần.' },
      { w: '街', ipa: 'jiē', hv: 'nhai', vi: 'phố, đường phố', ex: '这条街上有很多饭馆。', exPy: 'Zhè tiáo jiē shang yǒu hěn duō fànguǎn.', exVi: 'Trên con phố này có rất nhiều quán ăn.' },
      { w: '地铁站', ipa: 'dìtiězhàn', hv: 'địa thiết trạm', vi: 'ga tàu điện ngầm', ex: '请问，地铁站在哪儿？', exPy: 'Qǐngwèn, dìtiězhàn zài nǎr?', exVi: 'Xin hỏi, ga tàu điện ngầm ở đâu?' },
      { w: '方向', ipa: 'fāngxiàng', hv: 'phương hướng', vi: 'hướng, phương hướng', ex: '去机场是这个方向吗？', exPy: 'Qù jīchǎng shì zhège fāngxiàng ma?', exVi: 'Đi sân bay là hướng này phải không?' },
      { w: '院子', ipa: 'yuànzi', hv: 'viện tử', vi: 'sân (nhà)', ex: '我家院子里有很多花。', exPy: 'Wǒ jiā yuànzi lǐ yǒu hěn duō huā.', exVi: 'Trong sân nhà tôi có rất nhiều hoa.' },
      { w: '椅子', ipa: 'yǐzi', hv: 'ỷ tử', vi: 'cái ghế', ex: '椅子在桌子旁边。', exPy: 'Yǐzi zài zhuōzi pángbiān.', exVi: 'Cái ghế ở bên cạnh cái bàn.' }
    ],
    exercises: [
      { type: 'mc', q: '"Ngân hàng ở đối diện siêu thị." là:', options: ['银行在超市对面。', '银行对面在超市。', '对面银行在超市。'], answer: 0, explain: 'Mẫu câu: A + 在 + B + phương vị từ: 银行在超市对面.' },
      { type: 'fill', q: '你___往前走，就到地铁站了。（Bạn cứ đi thẳng về phía trước là đến ga tàu điện ngầm.）', answer: ['一直', 'yìzhí', 'yizhi'], hint: 'yìzhí – thẳng, liên tục', explain: '一直往前走 = cứ đi thẳng về phía trước.' },
      { type: 'order', vi: 'Xin hỏi, ga tàu điện ngầm ở đâu?', words: ['在', '地铁站', '请问', '哪儿？'], answer: '请问 地铁站 在 哪儿？' },
      { type: 'mc', q: '近 trái nghĩa với từ nào?', options: ['远', '快', '大'], answer: 0, explain: '近 jìn = gần, 远 yuǎn = xa.' },
      { type: 'fill', q: '我家离学校两___，走路二十分钟。（Nhà tôi cách trường hai cây số, đi bộ hai mươi phút.）', answer: ['公里', 'gōnglǐ', 'gongli'], hint: 'gōnglǐ – ki-lô-mét', explain: 'A 离 B + khoảng cách: 我家离学校两公里. Trước lượng từ/đơn vị đo, số 2 đọc là 两.' },
      { type: 'mc', q: '"Trong sân" nói thế nào?', options: ['院子里', '里院子', '在里院子'], answer: 0, explain: 'Phương vị từ 里 đứng SAU danh từ: 院子里, ngược với tiếng Việt "trong sân".' },
      { type: 'order', vi: 'Đi sân bay là hướng này phải không?', words: ['这个', '去', '是', '机场', '方向', '吗？'], answer: '去 机场 是 这个 方向 吗？' },
      { type: 'mc', q: 'Bạn bị lạc và muốn "hỏi đường". Từ nào đúng?', options: ['问路', '走路', '路口'], answer: 0, explain: '问 = hỏi, 路 = đường: 问路 = hỏi đường; 走路 = đi bộ; 路口 = ngã tư, đầu đường.' }
    ],
    reading: {
      title: '我的新家',
      titleVi: 'Nhà mới của tôi',
      text: [
        '上个月我搬家了。我的新家离学校很近，走路十分钟就到了。家里有三个房间，我的房间在左边，里面有一张桌子和两把椅子。',
        '我家前面有一个小院子，院子里有很多花。我家对面是一个超市，超市旁边有一家饭馆。',
        '去地铁站也很方便：出门以后往右走，然后一直往前走，差不多一公里就到了。昨天有一个人在街上问路，我告诉他地铁站在哪个方向。'
      ],
      py: [
        'Shàng gè yuè wǒ bānjiā le. Wǒ de xīn jiā lí xuéxiào hěn jìn, zǒulù shí fēnzhōng jiù dào le. Jiā lǐ yǒu sān gè fángjiān, wǒ de fángjiān zài zuǒbian, lǐmian yǒu yì zhāng zhuōzi hé liǎng bǎ yǐzi.',
        'Wǒ jiā qiánmian yǒu yí gè xiǎo yuànzi, yuànzi lǐ yǒu hěn duō huā. Wǒ jiā duìmiàn shì yí gè chāoshì, chāoshì pángbiān yǒu yì jiā fànguǎn.',
        'Qù dìtiězhàn yě hěn fāngbiàn: chūmén yǐhòu wǎng yòu zǒu, ránhòu yìzhí wǎng qián zǒu, chàbuduō yì gōnglǐ jiù dào le. Zuótiān yǒu yí gè rén zài jiē shang wènlù, wǒ gàosu tā dìtiězhàn zài nǎge fāngxiàng.'
      ],
      vi: [
        'Tháng trước tôi chuyển nhà. Nhà mới của tôi rất gần trường, đi bộ mười phút là đến. Nhà có ba phòng, phòng của tôi ở bên trái, trong phòng có một cái bàn và hai cái ghế.',
        'Phía trước nhà tôi có một khoảng sân nhỏ, trong sân có rất nhiều hoa. Đối diện nhà tôi là một siêu thị, bên cạnh siêu thị có một quán ăn.',
        'Đi đến ga tàu điện ngầm cũng rất tiện: ra khỏi nhà rẽ phải, sau đó cứ đi thẳng, khoảng một cây số là đến. Hôm qua có một người hỏi đường trên phố, tôi chỉ cho anh ấy ga tàu điện ngầm ở hướng nào.'
      ],
      questions: [
        { q: 'Từ nhà mới đến trường mất bao lâu?', options: ['Đi bộ 10 phút', 'Đi bộ 20 phút', 'Đi tàu điện ngầm 10 phút', 'Đạp xe 10 phút'], answer: 0, explain: '走路十分钟就到了 = đi bộ mười phút là đến.' },
        { q: 'Trong phòng của "tôi" có gì?', options: ['Một cái bàn và hai cái ghế', 'Hai cái bàn và một cái ghế', 'Rất nhiều hoa', 'Ba cái ghế'], answer: 0, explain: '一张桌子和两把椅子 = một cái bàn và hai cái ghế.' },
        { q: 'Đối diện nhà "tôi" là gì?', options: ['Quán ăn', 'Siêu thị', 'Ga tàu điện ngầm', 'Trường học'], answer: 1, explain: '我家对面是一个超市; quán ăn thì ở bên cạnh siêu thị.' },
        { q: 'Từ nhà đi đến ga tàu điện ngầm thế nào?', options: ['Ra khỏi nhà rẽ trái rồi đi thẳng', 'Ra khỏi nhà rẽ phải rồi đi thẳng khoảng 1 km', 'Đi thẳng khoảng 10 km', 'Đi qua siêu thị rồi rẽ trái'], answer: 1, explain: '往右走，然后一直往前走，差不多一公里就到了.' }
      ]
    }
  },

  // ───────────────────────── HSK2-4: Cuối tuần vừa rồi ─────────────────────────
  'zh-hsk2-4': {
    vocab: [
      { w: '参观', ipa: 'cānguān', hv: 'tham quan', vi: 'tham quan', ex: '昨天我们参观了北京大学。', exPy: 'Zuótiān wǒmen cānguān le Běijīng Dàxué.', exVi: 'Hôm qua chúng tôi đã tham quan Đại học Bắc Kinh.' },
      { w: '公园', ipa: 'gōngyuán', hv: 'công viên', vi: 'công viên', ex: '星期天我们去公园了。', exPy: 'Xīngqītiān wǒmen qù gōngyuán le.', exVi: 'Chủ nhật chúng tôi đã đi công viên.' },
      { w: '动物园', ipa: 'dòngwùyuán', hv: 'động vật viên', vi: 'vườn bách thú, sở thú', ex: '你去过北京动物园吗？', exPy: 'Nǐ qù guo Běijīng Dòngwùyuán ma?', exVi: 'Bạn đã từng đến vườn bách thú Bắc Kinh chưa?' },
      { w: '照相', ipa: 'zhàoxiàng', hv: 'chiếu tướng', vi: 'chụp ảnh', ex: '我们在公园里照了很多相。', exPy: 'Wǒmen zài gōngyuán lǐ zhào le hěn duō xiàng.', exVi: 'Chúng tôi đã chụp rất nhiều ảnh trong công viên.' },
      { w: '海边', ipa: 'hǎibiān', hv: 'hải biên', vi: 'bờ biển, bãi biển', ex: '上个周末我们去海边玩儿了。', exPy: 'Shàng gè zhōumò wǒmen qù hǎibiān wánr le.', exVi: 'Cuối tuần trước chúng tôi đi biển chơi.' },
      { w: '有意思', ipa: 'yǒu yìsi', hv: 'hữu ý tứ', vi: 'thú vị, hay', ex: '那个电影很有意思。', exPy: 'Nàge diànyǐng hěn yǒu yìsi.', exVi: 'Bộ phim đó rất hay.' },
      { w: '开心', ipa: 'kāixīn', hv: 'khai tâm', vi: 'vui vẻ, vui', ex: '昨天大家都很开心。', exPy: 'Zuótiān dàjiā dōu hěn kāixīn.', exVi: 'Hôm qua mọi người đều rất vui.' },
      { w: '请客', ipa: 'qǐngkè', hv: 'thỉnh khách', vi: 'mời (ăn uống), đãi', ex: '昨天晚上王明请客，我们吃了饺子。', exPy: 'Zuótiān wǎnshang Wáng Míng qǐngkè, wǒmen chī le jiǎozi.', exVi: 'Tối qua Vương Minh đãi, chúng tôi ăn sủi cảo.' },
      { w: '音乐会', ipa: 'yīnyuèhuì', hv: 'âm nhạc hội', vi: 'buổi hoà nhạc', ex: '我还没听过音乐会。', exPy: 'Wǒ hái méi tīng guo yīnyuèhuì.', exVi: 'Tôi chưa từng đi nghe hoà nhạc.' },
      { w: '做饭', ipa: 'zuòfàn', hv: '', vi: 'nấu cơm, nấu ăn', ex: '星期六晚上我在家做饭了。', exPy: 'Xīngqīliù wǎnshang wǒ zài jiā zuòfàn le.', exVi: 'Tối thứ Bảy tôi ở nhà nấu cơm.' }
    ],
    exercises: [
      { type: 'mc', q: 'Câu nào nghĩa là "Tôi chưa từng đến sở thú."?', options: ['我没去过动物园。', '我不去过动物园。', '我没去了动物园。'], answer: 0, explain: 'Phủ định trải nghiệm: 没 + động từ + 过. Không dùng 不, và 了 không đi với 没.' },
      { type: 'fill', q: '昨天我们___了长城。（Hôm qua chúng tôi đã tham quan Vạn Lý Trường Thành.）', answer: ['参观', 'cānguān', 'canguan'], hint: 'cānguān – tham quan', explain: '参观 = tham quan (nơi chốn, trường học, bảo tàng…); 了 sau động từ chỉ việc đã xong.' },
      { type: 'order', vi: 'Bạn đã từng đi biển chưa?', words: ['去过', '海边', '你', '吗？'], answer: '你 去过 海边 吗？' },
      { type: 'mc', q: '那个电影很___，我看了两次。（Bộ phim đó rất hay, tôi đã xem hai lần.）', options: ['有意思', '开心', '请客'], answer: 0, explain: '有意思 = hay, thú vị (phim, sách, việc…); 开心 nói về cảm xúc vui vẻ của người.' },
      { type: 'fill', q: '我们在公园里照了很多___。（Chúng tôi đã chụp rất nhiều ảnh ở công viên.）', answer: ['相', 'xiàng', 'xiang'], hint: 'xiàng – (照相) chụp ảnh', explain: '照相 là động từ li hợp: 了 và tân ngữ chen vào giữa: 照了很多相.' },
      { type: 'mc', q: '"Hôm qua tôi không nấu cơm." là:', options: ['昨天我没做饭。', '昨天我不做饭了。', '昨天我没做饭了。'], answer: 0, explain: 'Phủ định việc trong quá khứ dùng 没 và bỏ 了.' },
      { type: 'order', vi: 'Mọi người đều rất vui.', words: ['都', '大家', '开心', '很'], answer: '大家 都 很 开心' },
      { type: 'mc', q: '请客 nghĩa là:', options: ['mời ăn uống, đãi khách', 'xin lỗi khách', 'khách mời'], answer: 0, explain: '请客 = mời (ăn uống), trả tiền đãi người khác: 今天我请客！= Hôm nay tôi mời!' }
    ],
    reading: {
      title: '一个快乐的周末',
      titleVi: 'Một cuối tuần vui vẻ',
      text: [
        '上个周末天气很好。星期六上午，我和两个朋友去参观了动物园。我以前没去过那儿，觉得非常有意思。我们在动物园里照了很多相。',
        '星期六晚上，王明请客，我们一起吃了饺子。吃完饭以后，我们还去听了一个音乐会。',
        '星期天我没出门，在家做饭、看书，休息了一天。这个周末我过得很开心！下个周末，我们打算去海边玩儿。'
      ],
      py: [
        'Shàng gè zhōumò tiānqì hěn hǎo. Xīngqīliù shàngwǔ, wǒ hé liǎng gè péngyou qù cānguān le dòngwùyuán. Wǒ yǐqián méi qù guo nàr, juéde fēicháng yǒu yìsi. Wǒmen zài dòngwùyuán lǐ zhào le hěn duō xiàng.',
        'Xīngqīliù wǎnshang, Wáng Míng qǐngkè, wǒmen yìqǐ chī le jiǎozi. Chīwán fàn yǐhòu, wǒmen hái qù tīng le yí gè yīnyuèhuì.',
        'Xīngqītiān wǒ méi chūmén, zài jiā zuòfàn, kàn shū, xiūxi le yì tiān. Zhège zhōumò wǒ guò de hěn kāixīn! Xià gè zhōumò, wǒmen dǎsuàn qù hǎibiān wánr.'
      ],
      vi: [
        'Cuối tuần trước trời rất đẹp. Sáng thứ Bảy, tôi và hai người bạn đi tham quan vườn bách thú. Trước đây tôi chưa từng đến đó, thấy vô cùng thú vị. Chúng tôi chụp rất nhiều ảnh trong vườn bách thú.',
        'Tối thứ Bảy, Vương Minh mời, chúng tôi cùng ăn sủi cảo. Ăn xong, chúng tôi còn đi nghe một buổi hoà nhạc.',
        'Chủ nhật tôi không ra ngoài, ở nhà nấu ăn, đọc sách, nghỉ ngơi cả ngày. Cuối tuần này tôi đã sống rất vui! Cuối tuần sau, chúng tôi định đi biển chơi.'
      ],
      questions: [
        { q: 'Sáng thứ Bảy "tôi" đi đâu?', options: ['Công viên', 'Vườn bách thú', 'Bờ biển', 'Nhà hát'], answer: 1, explain: '去参观了动物园 = đi tham quan vườn bách thú.' },
        { q: 'Trước đây "tôi" đã từng đến đó chưa?', options: ['Đã đến nhiều lần', 'Chưa từng đến', 'Đã đến một lần', 'Bài không nói'], answer: 1, explain: '我以前没去过那儿 = trước đây tôi chưa từng đến đó.' },
        { q: 'Tối thứ Bảy ai mời ăn?', options: ['Vương Minh', 'Nhân vật "tôi"', 'Hai người bạn của "tôi"'], answer: 0, explain: '王明请客 = Vương Minh mời.' },
        { q: 'Chủ nhật "tôi" làm gì?', options: ['Đi biển chơi', 'Ở nhà nấu ăn, đọc sách, nghỉ ngơi', 'Đi nghe hoà nhạc', 'Đi ăn sủi cảo'], answer: 1, explain: '星期天我没出门，在家做饭、看书，休息了一天.' }
      ]
    }
  },

  // ───────────────────────── HSK2-5: Sở thích & thể thao ─────────────────────────
  'zh-hsk2-5': {
    vocab: [
      { w: '体育', ipa: 'tǐyù', hv: 'thể dục', vi: 'thể thao, thể dục', ex: '我很喜欢上体育课。', exPy: 'Wǒ hěn xǐhuan shàng tǐyù kè.', exVi: 'Tôi rất thích giờ thể dục.' },
      { w: '网球', ipa: 'wǎngqiú', hv: 'võng cầu', vi: 'quần vợt, tennis', ex: '你会打网球吗？', exPy: 'Nǐ huì dǎ wǎngqiú ma?', exVi: 'Bạn biết chơi quần vợt không?' },
      { w: '排球', ipa: 'páiqiú', hv: 'bài cầu', vi: 'bóng chuyền', ex: '她排球打得非常好。', exPy: 'Tā páiqiú dǎ de fēicháng hǎo.', exVi: 'Cô ấy chơi bóng chuyền cực giỏi.' },
      { w: '球场', ipa: 'qiúchǎng', hv: 'cầu trường', vi: 'sân bóng', ex: '学校后面有一个大球场。', exPy: 'Xuéxiào hòumian yǒu yí gè dà qiúchǎng.', exVi: 'Phía sau trường có một sân bóng lớn.' },
      { w: '球队', ipa: 'qiúduì', hv: 'cầu đội', vi: 'đội bóng', ex: '我哥哥是学校篮球队的。', exPy: 'Wǒ gēge shì xuéxiào lánqiú duì de.', exVi: 'Anh trai tôi ở trong đội bóng rổ của trường.' },
      { w: '骑车', ipa: 'qíchē', hv: 'kỵ xa', vi: 'đạp xe, đi xe (đạp, máy)', ex: '我每天骑车去学校。', exPy: 'Wǒ měi tiān qíchē qù xuéxiào.', exVi: 'Ngày nào tôi cũng đạp xe đến trường.' },
      { w: '自行车', ipa: 'zìxíngchē', hv: 'tự hành xa', vi: 'xe đạp', ex: '我的自行车是蓝色的。', exPy: 'Wǒ de zìxíngchē shì lánsè de.', exVi: 'Xe đạp của tôi màu xanh lam.' },
      { w: '画', ipa: 'huà', hv: 'hoạ', vi: 'vẽ; bức tranh', ex: '我妹妹画得很好。', exPy: 'Wǒ mèimei huà de hěn hǎo.', exVi: 'Em gái tôi vẽ rất đẹp.' },
      { w: '练习', ipa: 'liànxí', hv: 'luyện tập', vi: 'luyện tập', ex: '他每天下午练习打篮球。', exPy: 'Tā měi tiān xiàwǔ liànxí dǎ lánqiú.', exVi: 'Chiều nào anh ấy cũng tập bóng rổ.' },
      { w: '小说', ipa: 'xiǎoshuō', hv: 'tiểu thuyết', vi: 'tiểu thuyết', ex: '周末我喜欢在家看小说。', exPy: 'Zhōumò wǒ xǐhuan zài jiā kàn xiǎoshuō.', exVi: 'Cuối tuần tôi thích ở nhà đọc tiểu thuyết.' }
    ],
    exercises: [
      { type: 'mc', q: '"Bạn biết chơi quần vợt không?" là:', options: ['你会打网球吗？', '你会踢网球吗？', '你会骑网球吗？'], answer: 0, explain: 'Các môn bóng dùng tay như 网球, 排球, 篮球 đi với 打; bóng đá đi với 踢.' },
      { type: 'fill', q: '我每天___自行车去学校。（Ngày nào tôi cũng đạp xe đạp đến trường.）', answer: ['骑', 'qí', 'qi'], hint: 'qí – cưỡi, đạp (xe)', explain: '骑 dùng cho xe đạp, xe máy, ngựa — những thứ ngồi dạng chân lên.' },
      { type: 'order', vi: 'Em gái tôi vẽ rất đẹp.', words: ['画', '妹妹', '得', '很好', '我'], answer: '我 妹妹 画 得 很好' },
      { type: 'mc', q: 'Câu nào đúng: "Cô ấy chơi bóng chuyền rất giỏi."?', options: ['她排球打得很好。', '她打排球很好得。', '她排球得打很好。'], answer: 0, explain: 'Có tân ngữ thì đưa tân ngữ lên trước: (打)排球 + 打得 + nhận xét → 她排球打得很好.' },
      { type: 'fill', q: '他每天下午都___打篮球，所以打得很好。（Chiều nào anh ấy cũng tập bóng rổ, nên chơi rất giỏi.）', answer: ['练习', 'liànxí', 'lianxi'], hint: 'liànxí – luyện tập', explain: '练习 + hoạt động = tập làm việc gì đó: 练习打篮球, 练习说汉语.' },
      { type: 'mc', q: '今天我生病了，___去游泳。（Hôm nay tôi bị ốm, không thể đi bơi.）', options: ['不能', '不会', '没会'], answer: 0, explain: '能 = có thể (do điều kiện, hoàn cảnh); 会 = biết (do học mà có). Bị ốm là do hoàn cảnh nên dùng 不能.' },
      { type: 'order', vi: 'Trường chúng tôi có một sân bóng lớn.', words: ['一个', '有', '学校', '大', '球场', '我们'], answer: '我们 学校 有 一个 大 球场' },
      { type: 'mc', q: '"Đội bóng" là:', options: ['球队', '球场', '排球'], answer: 0, explain: '球队 = đội bóng; 球场 = sân bóng; 排球 = bóng chuyền.' }
    ],
    reading: {
      title: '我的爱好',
      titleVi: 'Sở thích của tôi',
      text: [
        '我叫王明，是大学生。我非常喜欢体育，篮球、网球、排球我都会打。我篮球打得最好，是学校篮球队的。我们每个星期在学校球场练习三次。',
        '我每天骑自行车去学校，差不多二十分钟。我觉得骑车也是很好的运动。',
        '我的女朋友不太喜欢运动，她喜欢画画儿和看小说。她画得非常漂亮。周末我们常常一起去公园，我跑步，她画画儿。'
      ],
      py: [
        'Wǒ jiào Wáng Míng, shì dàxuéshēng. Wǒ fēicháng xǐhuan tǐyù, lánqiú, wǎngqiú, páiqiú wǒ dōu huì dǎ. Wǒ lánqiú dǎ de zuì hǎo, shì xuéxiào lánqiú duì de. Wǒmen měi gè xīngqī zài xuéxiào qiúchǎng liànxí sān cì.',
        'Wǒ měi tiān qí zìxíngchē qù xuéxiào, chàbuduō èrshí fēnzhōng. Wǒ juéde qíchē yě shì hěn hǎo de yùndòng.',
        'Wǒ de nǚpéngyou bú tài xǐhuan yùndòng, tā xǐhuan huà huàr hé kàn xiǎoshuō. Tā huà de fēicháng piàoliang. Zhōumò wǒmen chángcháng yìqǐ qù gōngyuán, wǒ pǎobù, tā huà huàr.'
      ],
      vi: [
        'Tôi tên là Vương Minh, là sinh viên đại học. Tôi rất thích thể thao, bóng rổ, quần vợt, bóng chuyền tôi đều biết chơi. Tôi chơi bóng rổ giỏi nhất, tôi ở trong đội bóng rổ của trường. Mỗi tuần chúng tôi tập ở sân bóng của trường ba lần.',
        'Ngày nào tôi cũng đạp xe đạp đến trường, mất khoảng hai mươi phút. Tôi thấy đạp xe cũng là một môn vận động rất tốt.',
        'Bạn gái tôi không thích vận động lắm, cô ấy thích vẽ tranh và đọc tiểu thuyết. Cô ấy vẽ rất đẹp. Cuối tuần chúng tôi thường cùng đi công viên, tôi chạy bộ, cô ấy vẽ tranh.'
      ],
      questions: [
        { q: 'Vương Minh chơi môn nào giỏi nhất?', options: ['Bóng rổ', 'Quần vợt', 'Bóng chuyền', 'Bơi lội'], answer: 0, explain: '我篮球打得最好 = tôi chơi bóng rổ giỏi nhất.' },
        { q: 'Mỗi tuần đội bóng của Vương Minh tập mấy lần?', options: ['1 lần', '2 lần', '3 lần', 'Ngày nào cũng tập'], answer: 2, explain: '每个星期……练习三次 = mỗi tuần tập ba lần.' },
        { q: 'Vương Minh đến trường bằng gì?', options: ['Đi bộ', 'Xe đạp', 'Xe buýt', 'Tàu điện ngầm'], answer: 1, explain: '我每天骑自行车去学校 = ngày nào tôi cũng đạp xe đạp đến trường.' },
        { q: 'Bạn gái của Vương Minh thích làm gì?', options: ['Chạy bộ và chơi bóng rổ', 'Vẽ tranh và đọc tiểu thuyết', 'Bơi và hát', 'Đạp xe'], answer: 1, explain: '她喜欢画画儿和看小说 = cô ấy thích vẽ tranh và đọc tiểu thuyết.' }
      ]
    }
  },

  // ───────────────────────── HSK2-6: Kế hoạch tương lai ─────────────────────────
  'zh-hsk2-6': {
    vocab: [
      { w: '计划', ipa: 'jìhuà', hv: 'kế hoạch', vi: 'kế hoạch; lập kế hoạch', ex: '你明年有什么计划？', exPy: 'Nǐ míngnián yǒu shénme jìhuà?', exVi: 'Năm sau bạn có kế hoạch gì?' },
      { w: '假期', ipa: 'jiàqī', hv: 'giả kỳ', vi: 'kỳ nghỉ', ex: '假期我打算去云南旅游。', exPy: 'Jiàqī wǒ dǎsuàn qù Yúnnán lǚyóu.', exVi: 'Kỳ nghỉ tôi định đi du lịch Vân Nam.' },
      { w: '出国', ipa: 'chūguó', hv: 'xuất quốc', vi: 'ra nước ngoài', ex: '她明年要出国学习。', exPy: 'Tā míngnián yào chūguó xuéxí.', exVi: 'Năm sau cô ấy sẽ ra nước ngoài học.' },
      { w: '理想', ipa: 'lǐxiǎng', hv: 'lý tưởng', vi: 'ước mơ, lý tưởng', ex: '我的理想是当一名医生。', exPy: 'Wǒ de lǐxiǎng shì dāng yì míng yīshēng.', exVi: 'Ước mơ của tôi là trở thành bác sĩ.' },
      { w: '也许', ipa: 'yěxǔ', hv: 'dã hứa', vi: 'có lẽ, có thể', ex: '明天也许会下雨。', exPy: 'Míngtiān yěxǔ huì xià yǔ.', exVi: 'Ngày mai có lẽ sẽ mưa.' },
      { w: '一定', ipa: 'yídìng', hv: 'nhất định', vi: 'nhất định, chắc chắn', ex: '我一定会去看你的。', exPy: 'Wǒ yídìng huì qù kàn nǐ de.', exVi: 'Tôi nhất định sẽ đến thăm bạn.' },
      { w: '出发', ipa: 'chūfā', hv: 'xuất phát', vi: 'xuất phát, khởi hành', ex: '我们明天早上七点出发。', exPy: 'Wǒmen míngtiān zǎoshang qī diǎn chūfā.', exVi: 'Bảy giờ sáng mai chúng ta xuất phát.' },
      { w: '回国', ipa: 'huíguó', hv: 'hồi quốc', vi: 'về nước', ex: '他下个月就要回国了。', exPy: 'Tā xià gè yuè jiù yào huíguó le.', exVi: 'Tháng sau anh ấy về nước rồi.' },
      { w: '报名', ipa: 'bàomíng', hv: 'báo danh', vi: 'đăng ký (tên)', ex: '我想报名参加汉语考试。', exPy: 'Wǒ xiǎng bàomíng cānjiā Hànyǔ kǎoshì.', exVi: 'Tôi muốn đăng ký dự thi tiếng Trung.' },
      { w: '学期', ipa: 'xuéqī', hv: 'học kỳ', vi: 'học kỳ', ex: '下个学期我要学两门新课。', exPy: 'Xià gè xuéqī wǒ yào xué liǎng mén xīn kè.', exVi: 'Học kỳ sau tôi sẽ học hai môn mới.' }
    ],
    exercises: [
      { type: 'mc', q: '"Tháng sau anh ấy về nước rồi." là:', options: ['他下个月就要回国了。', '他下个月快要回国了。', '他下个月回国了快要。'], answer: 0, explain: 'Khi câu có thời gian cụ thể (下个月, 明天…) thì dùng 就要…了, không dùng 快要…了.' },
      { type: 'fill', q: '我们明天早上六点___，早点儿睡吧。（Sáu giờ sáng mai chúng ta xuất phát, ngủ sớm đi.）', answer: ['出发', 'chūfā', 'chufa'], hint: 'chūfā – xuất phát', explain: '出发 = xuất phát, khởi hành; thời gian đứng trước động từ: 六点出发.' },
      { type: 'order', vi: 'Kế hoạch của bạn là gì?', words: ['你的', '是', '什么？', '计划'], answer: '你的 计划 是 什么？' },
      { type: 'mc', q: '明天___会下雨，你带伞吧。（Mai có lẽ sẽ mưa, bạn mang ô nhé.）', options: ['也许', '已经', '一共'], answer: 0, explain: '也许 = có lẽ (không chắc chắn), thường đi với 会: 也许会下雨.' },
      { type: 'fill', q: '我的___是当一名老师。（Ước mơ của tôi là trở thành giáo viên.）', answer: ['理想', 'lǐxiǎng', 'lixiang'], hint: 'lǐxiǎng – ước mơ, lý tưởng', explain: '我的理想是… = ước mơ của tôi là…; 当 dāng = làm, trở thành (nghề gì).' },
      { type: 'mc', q: '"Kỳ nghỉ" là:', options: ['假期', '学期', '星期'], answer: 0, explain: '假期 = kỳ nghỉ; 学期 = học kỳ; 星期 = tuần.' },
      { type: 'order', vi: 'Tôi nhất định sẽ đến thăm bạn.', words: ['会', '一定', '我', '你', '看', '去'], answer: '我 一定 会 去 看 你' },
      { type: 'fill', q: '我想___参加下个月的汉语考试。（Tôi muốn đăng ký thi tiếng Trung tháng sau.）', answer: ['报名', 'bàomíng', 'baoming'], hint: 'bàomíng – đăng ký', explain: '报名参加… = đăng ký tham gia…' }
    ],
    reading: {
      title: '我的假期计划',
      titleVi: 'Kế hoạch kỳ nghỉ của tôi',
      text: [
        '我是在中国学习的越南留学生。这个学期快要完了，下个星期就要放假了。假期我有很多计划。',
        '我打算先回国看爸爸妈妈。我下周六早上出发，坐飞机三个小时就到了。在家的时候，我要每天和他们一起吃饭，也想见见老朋友。',
        '回来以后，我要报名参加汉语考试。我的理想是当一名汉语老师，所以一定要好好儿学习。也许以后我会在越南教汉语。'
      ],
      py: [
        'Wǒ shì zài Zhōngguó xuéxí de Yuènán liúxuéshēng. Zhège xuéqī kuàiyào wán le, xià gè xīngqī jiù yào fàngjià le. Jiàqī wǒ yǒu hěn duō jìhuà.',
        'Wǒ dǎsuàn xiān huíguó kàn bàba māma. Wǒ xiàzhōu liù zǎoshang chūfā, zuò fēijī sān gè xiǎoshí jiù dào le. Zài jiā de shíhou, wǒ yào měi tiān hé tāmen yìqǐ chīfàn, yě xiǎng jiànjian lǎo péngyou.',
        'Huílai yǐhòu, wǒ yào bàomíng cānjiā Hànyǔ kǎoshì. Wǒ de lǐxiǎng shì dāng yì míng Hànyǔ lǎoshī, suǒyǐ yídìng yào hǎohāor xuéxí. Yěxǔ yǐhòu wǒ huì zài Yuènán jiāo Hànyǔ.'
      ],
      vi: [
        'Tôi là du học sinh Việt Nam đang học ở Trung Quốc. Học kỳ này sắp kết thúc rồi, tuần sau là được nghỉ. Kỳ nghỉ này tôi có rất nhiều kế hoạch.',
        'Tôi định về nước thăm bố mẹ trước. Sáng thứ Bảy tuần sau tôi xuất phát, đi máy bay ba tiếng là đến. Khi ở nhà, ngày nào tôi cũng sẽ ăn cơm cùng bố mẹ, và cũng muốn gặp lại bạn cũ.',
        'Sau khi quay lại, tôi sẽ đăng ký thi tiếng Trung. Ước mơ của tôi là trở thành giáo viên tiếng Trung, nên nhất định phải học thật chăm. Có lẽ sau này tôi sẽ dạy tiếng Trung ở Việt Nam.'
      ],
      questions: [
        { q: 'Khi nào thì bắt đầu được nghỉ?', options: ['Tuần sau', 'Tháng sau', 'Ngày mai', 'Năm sau'], answer: 0, explain: '下个星期就要放假了 = tuần sau là được nghỉ.' },
        { q: 'Trong kỳ nghỉ, việc đầu tiên nhân vật định làm là gì?', options: ['Đi du lịch Vân Nam', 'Về nước thăm bố mẹ', 'Đăng ký thi tiếng Trung', 'Dạy tiếng Trung'], answer: 1, explain: '我打算先回国看爸爸妈妈: 先 = trước tiên.' },
        { q: 'Đi máy bay về nhà mất bao lâu?', options: ['1 tiếng', '2 tiếng', '3 tiếng', 'Nửa ngày'], answer: 2, explain: '坐飞机三个小时就到了 = đi máy bay ba tiếng là đến.' },
        { q: 'Ước mơ của nhân vật là gì?', options: ['Trở thành bác sĩ', 'Trở thành giáo viên tiếng Trung', 'Đi du lịch khắp nơi', 'Ở lại Trung Quốc làm việc'], answer: 1, explain: '我的理想是当一名汉语老师 = ước mơ của tôi là làm giáo viên tiếng Trung.' }
      ]
    }
  }
};
