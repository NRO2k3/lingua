// Bài mới chèn vào lộ trình tiếng Trung – HSK3 (xem cuối src/data/SCHEMA.md)
export default [
  // ───────────────────────── HSK3-2b: Nhịp sống: 才 / 就 và 一…就… ─────────────────────────
  {
    after: 'zh-hsk3-2',
    unit: {
      id: 'zh-hsk3-2b',
      icon: '⏰',
      title: 'Nhịp sống hằng ngày',
      goal: 'Kể về giờ giấc sinh hoạt, nói việc gì xảy ra sớm hay muộn hơn dự kiến với 就 / 才, và nối hai việc liền nhau bằng 一…就….',
      vocab: [
        { w: '才', ipa: 'cái', hv: 'tài', vi: 'mới (muộn, chậm hơn dự kiến); mới chỉ', ex: '他十点才起床。', exPy: 'Tā shí diǎn cái qǐchuáng.', exVi: 'Mười giờ anh ấy mới dậy.' },
        { w: '就', ipa: 'jiù', hv: 'tựu', vi: 'đã, liền (sớm, nhanh hơn dự kiến)', ex: '我六点就起床了。', exPy: 'Wǒ liù diǎn jiù qǐchuáng le.', exVi: 'Sáu giờ tôi đã dậy rồi.' },
        { w: '闹钟', ipa: 'nàozhōng', hv: 'náo chung', vi: 'đồng hồ báo thức', ex: '闹钟一响，我就起床。', exPy: 'Nàozhōng yì xiǎng, wǒ jiù qǐchuáng.', exVi: 'Chuông báo thức vừa reo là tôi dậy.' },
        { w: '洗澡', ipa: 'xǐzǎo', hv: 'tẩy táo', vi: 'tắm', ex: '我一回家就洗澡。', exPy: 'Wǒ yì huíjiā jiù xǐzǎo.', exVi: 'Về đến nhà là tôi đi tắm ngay.' },
        { w: '刷牙', ipa: 'shuāyá', hv: 'xoát nha', vi: 'đánh răng', ex: '睡觉以前别忘了刷牙。', exPy: 'Shuìjiào yǐqián bié wàngle shuāyá.', exVi: 'Trước khi ngủ đừng quên đánh răng.' },
        { w: '总是', ipa: 'zǒngshì', hv: 'tổng thị', vi: 'lúc nào cũng, luôn luôn', ex: '他总是最后一个到办公室。', exPy: 'Tā zǒngshì zuìhòu yí ge dào bàngōngshì.', exVi: 'Anh ấy lúc nào cũng là người cuối cùng đến văn phòng.' },
        { w: '经常', ipa: 'jīngcháng', hv: 'kinh thường', vi: 'thường xuyên', ex: '她经常去食堂吃午饭。', exPy: 'Tā jīngcháng qù shítáng chī wǔfàn.', exVi: 'Cô ấy thường xuyên ăn trưa ở nhà ăn.' },
        { w: '平时', ipa: 'píngshí', hv: 'bình thời', vi: 'ngày thường, bình thường', ex: '我平时七点起床，周末九点才起。', exPy: 'Wǒ píngshí qī diǎn qǐchuáng, zhōumò jiǔ diǎn cái qǐ.', exVi: 'Ngày thường tôi dậy lúc bảy giờ, cuối tuần chín giờ mới dậy.' },
        { w: '习惯', ipa: 'xíguàn', hv: 'tập quán', vi: 'thói quen; quen (với)', ex: '我习惯早上喝一杯咖啡。', exPy: 'Wǒ xíguàn zǎoshang hē yì bēi kāfēi.', exVi: 'Tôi quen uống một cốc cà phê vào buổi sáng.' },
        { w: '一会儿', ipa: 'yíhuìr', hv: 'nhất hội nhi', vi: 'một lát, một chốc', ex: '你等一会儿，我马上就来。', exPy: 'Nǐ děng yíhuìr, wǒ mǎshàng jiù lái.', exVi: 'Bạn đợi một lát, tôi đến ngay.' },
        { w: '马上', ipa: 'mǎshàng', hv: 'mã thượng', vi: 'ngay, lập tức', ex: '会议马上就要开始了。', exPy: 'Huìyì mǎshàng jiù yào kāishǐ le.', exVi: 'Cuộc họp sắp bắt đầu ngay rồi.' },
        { w: '醒', ipa: 'xǐng', hv: 'tỉnh', vi: 'tỉnh giấc, thức dậy', ex: '我今天五点就醒了。', exPy: 'Wǒ jīntiān wǔ diǎn jiù xǐng le.', exVi: 'Hôm nay năm giờ tôi đã tỉnh giấc rồi.' },
        { w: '准时', ipa: 'zhǔnshí', hv: 'chuẩn thời', vi: 'đúng giờ', ex: '他每天都准时上班。', exPy: 'Tā měi tiān dōu zhǔnshí shàngbān.', exVi: 'Ngày nào anh ấy cũng đi làm đúng giờ.' },
        { w: '食堂', ipa: 'shítáng', hv: 'thực đường', vi: 'nhà ăn, căng tin', ex: '一下课，学生们就去食堂吃饭。', exPy: 'Yí xiàkè, xuéshengmen jiù qù shítáng chīfàn.', exVi: 'Vừa tan học, học sinh liền đi nhà ăn ăn cơm.' },
        { w: '晚', ipa: 'wǎn', hv: 'vãn', vi: 'muộn, trễ', ex: '对不起，我来晚了。', exPy: 'Duìbuqǐ, wǒ lái wǎn le.', exVi: 'Xin lỗi, tôi đến muộn.' },
        { w: '早', ipa: 'zǎo', hv: 'tảo', vi: 'sớm', ex: '你怎么来得这么早？', exPy: 'Nǐ zěnme lái de zhème zǎo?', exVi: 'Sao bạn đến sớm thế?' },
        { w: '堵车', ipa: 'dǔchē', hv: 'đổ xa', vi: 'tắc đường, kẹt xe', ex: '路上堵车，我八点半才到公司。', exPy: 'Lù shang dǔchē, wǒ bā diǎn bàn cái dào gōngsī.', exVi: 'Trên đường kẹt xe, tám rưỡi tôi mới đến công ty.' },
        { w: '加班', ipa: 'jiābān', hv: 'gia ban', vi: 'làm thêm giờ, tăng ca', ex: '昨天他加班加到十一点。', exPy: 'Zuótiān tā jiābān jiādào shíyī diǎn.', exVi: 'Hôm qua anh ấy tăng ca đến mười một giờ.' },
        { w: '睡', ipa: 'shuì', hv: 'thuỵ', vi: 'ngủ', ex: '我昨天十二点才睡。', exPy: "Wǒ zuótiān shí'èr diǎn cái shuì.", exVi: 'Hôm qua mười hai giờ tôi mới ngủ.' },
        { w: '来得及', ipa: 'láidejí', hv: 'lai đắc cập', vi: 'kịp, còn kịp', ex: '别着急，现在走还来得及。', exPy: 'Bié zháojí, xiànzài zǒu hái láidejí.', exVi: 'Đừng vội, bây giờ đi vẫn còn kịp.' }
      ],
      grammar: {
        title: '才 / 就 với thời gian, số lượng và 一…就…',
        explain: [
          '就 (tựu) đứng trước động từ, cho thấy người nói thấy việc xảy ra SỚM, NHANH hoặc DỄ hơn dự kiến; câu thường có 了 ở cuối: 他六点就起床了 (sáu giờ đã dậy rồi — sớm).',
          '才 (tài) cũng đứng trước động từ nhưng nghĩa ngược lại: việc xảy ra MUỘN, CHẬM hoặc KHÓ hơn dự kiến, giống chữ "mới" trong tiếng Việt: 他十点才起床 (mười giờ mới dậy — muộn). Câu có 才 KHÔNG thêm 了 ở cuối.',
          'Với số lượng: 才 + số lượng = "mới chỉ, chỉ có" (ít hơn mong đợi): 我才睡了五个小时 (tôi mới ngủ có năm tiếng). Số lượng + 就 = "chỉ cần … là": 走路十分钟就到 (đi bộ mười phút là tới).',
          '一 + V1，(chủ ngữ) + 就 + V2 = "vừa … là …" hoặc "hễ … là …": hai việc nối nhau ngay lập tức, hoặc cứ A xảy ra thì B xảy ra: 我一下班就回家 (vừa tan làm là về nhà); 他一有时间就看书 (hễ có thời gian là đọc sách). 一 và 就 đều đứng SAU chủ ngữ, TRƯỚC động từ.'
        ],
        table: [
          ['Mẫu', 'Ví dụ', 'Nghĩa'],
          ['Thời gian + 就 + V + 了', '我七点就到了。', 'Bảy giờ tôi đã đến rồi (sớm).'],
          ['Thời gian + 才 + V', '他九点才到。', 'Chín giờ anh ấy mới đến (muộn).'],
          ['才 + số lượng', '我才睡了四个小时。', 'Tôi mới ngủ có bốn tiếng.'],
          ['Số lượng + 就 + V', '坐地铁二十分钟就到。', 'Đi tàu điện ngầm hai mươi phút là tới.'],
          ['一 + V1，就 + V2', '我一到家就洗澡。', 'Về đến nhà là tôi tắm ngay.']
        ],
        examples: [
          { t: '今天堵车，我九点才到公司。', py: 'Jīntiān dǔchē, wǒ jiǔ diǎn cái dào gōngsī.', vi: 'Hôm nay kẹt xe, chín giờ tôi mới đến công ty.' },
          { t: '会议九点开始，他八点半就来了。', py: 'Huìyì jiǔ diǎn kāishǐ, tā bā diǎn bàn jiù lái le.', vi: 'Cuộc họp chín giờ bắt đầu, anh ấy tám rưỡi đã đến rồi.' },
          { t: '闹钟响了三次，我才醒。', py: 'Nàozhōng xiǎngle sān cì, wǒ cái xǐng.', vi: 'Chuông báo thức reo ba lần tôi mới tỉnh.' },
          { t: '他一下班就去食堂吃饭。', py: 'Tā yí xiàbān jiù qù shítáng chīfàn.', vi: 'Anh ấy vừa tan làm là đi nhà ăn ăn cơm.' },
          { t: '她一有时间就看书。', py: 'Tā yì yǒu shíjiān jiù kàn shū.', vi: 'Hễ có thời gian là cô ấy đọc sách.' }
        ],
        tip: 'Người Việt hay thêm 了 vào câu có 才 vì dịch "mới… rồi": ✗ 他十点才起床了 → ✓ 他十点才起床. Ngược lại, câu có 就 chỉ việc xảy ra sớm thường cần 了: 他六点就起床了. Với 一…就…, đừng đặt 一 trước chủ ngữ hay bỏ 就: ✗ 一我回家，洗澡 → ✓ 我一回家就洗澡. Lưu ý pinyin: 一 trước thanh 4 đọc yí (一下班 yí xiàbān), trước thanh 1, 2, 3 đọc yì (一回家 yì huíjiā).'
      },
      dialogue: [
        { s: '李华', t: '王明，你怎么九点半才来？会议九点就开始了。', py: 'Wáng Míng, nǐ zěnme jiǔ diǎn bàn cái lái? Huìyì jiǔ diǎn jiù kāishǐ le.', vi: 'Vương Minh, sao chín rưỡi cậu mới đến? Cuộc họp bắt đầu từ chín giờ rồi.' },
        { s: '王明', t: '别提了！闹钟没响，我八点才醒。', py: 'Bié tí le! Nàozhōng méi xiǎng, wǒ bā diǎn cái xǐng.', vi: 'Đừng nhắc nữa! Báo thức không reo, tám giờ mình mới tỉnh.' },
        { s: '李华', t: '你昨天晚上几点睡的？', py: 'Nǐ zuótiān wǎnshang jǐ diǎn shuì de?', vi: 'Tối qua cậu mấy giờ ngủ?' },
        { s: '王明', t: '昨天加班，我十二点才回家，一回家就睡了。', py: "Zuótiān jiābān, wǒ shí'èr diǎn cái huíjiā, yì huíjiā jiù shuì le.", vi: 'Hôm qua tăng ca, mười hai giờ mình mới về nhà, về đến nhà là ngủ luôn.' },
        { s: '李华', t: '路上也堵车吧？我平时七点就出门，所以总是很准时。', py: 'Lù shang yě dǔchē ba? Wǒ píngshí qī diǎn jiù chūmén, suǒyǐ zǒngshì hěn zhǔnshí.', vi: 'Trên đường cũng kẹt xe nhỉ? Ngày thường mình bảy giờ đã ra khỏi nhà, nên lúc nào cũng đúng giờ.' },
        { s: '王明', t: '你真早！我得改改我的习惯了。', py: 'Nǐ zhēn zǎo! Wǒ děi gǎigai wǒ de xíguàn le.', vi: 'Cậu sớm thật! Mình phải sửa thói quen của mình thôi.' },
        { s: '李华', t: '快去会议室吧，现在去还来得及。', py: 'Kuài qù huìyìshì ba, xiànzài qù hái láidejí.', vi: 'Mau đến phòng họp đi, giờ đi vẫn còn kịp.' },
        { s: '王明', t: '好，我马上就去！', py: 'Hǎo, wǒ mǎshàng jiù qù!', vi: 'Được, mình đi ngay!' }
      ],
      exercises: [
        { type: 'mc', q: '今天堵车，我九点___到公司。（Hôm nay kẹt xe, chín giờ tôi mới đến công ty.）', options: ['就', '才', '又'], answer: 1, explain: 'Đến muộn hơn dự kiến → 才 (mới).' },
        { type: 'mc', q: '他六点___起床了，真早！（Sáu giờ anh ấy đã dậy rồi, sớm thật!）', options: ['就', '才', '再'], answer: 0, explain: 'Việc xảy ra sớm hơn dự kiến → 就, cuối câu có 了.' },
        { type: 'mc', q: 'Câu nào đúng?', options: ['他十一点才睡了。', '他十一点才睡。', '他才十一点睡了。'], answer: 1, explain: 'Câu có 才 không thêm 了 ở cuối; 才 đứng sau thời gian, trước động từ.' },
        { type: 'mc', q: 'Câu nào nghĩa là "Vừa tan làm là anh ấy về nhà"?', options: ['一他下班，就回家。', '他下班一就回家。', '他一下班就回家。'], answer: 2, explain: '一 và 就 đều đứng sau chủ ngữ, trước động từ: 他一下班就回家.' },
        { type: 'mc', q: '"堵车" nghĩa là gì?', options: ['tăng ca', 'đúng giờ', 'kẹt xe'], answer: 2, explain: '堵车 (đổ xa) = xe bị chặn lại, tức là tắc đường.' },
        { type: 'mc', q: 'Trong câu "我才睡了四个小时。", 才 nghĩa là:', options: ['mới chỉ (ít)', 'đã (sớm)', 'lại (lần nữa)'], answer: 0, explain: '才 + số lượng = mới chỉ, chỉ có (ít hơn mong đợi).' },
        { type: 'fill', q: '我一到家___洗澡。（Về đến nhà là tôi tắm ngay.）', answer: ['就', 'jiù', 'jiu'], hint: 'jiù – liền, là', explain: 'Cặp 一…就… nối hai việc liền nhau.' },
        { type: 'fill', q: '闹钟响了三次，他___醒。（Chuông reo ba lần anh ấy mới tỉnh.）', answer: ['才', 'cái', 'cai'], hint: 'cái – mới (muộn)', explain: 'Tỉnh muộn, khó khăn → 才, không có 了 cuối câu.' },
        { type: 'fill', q: '睡觉以前别忘了___。（Trước khi ngủ đừng quên đánh răng.）', answer: ['刷牙', 'shuāyá', 'shuaya', 'shua ya'], hint: 'shuāyá – đánh răng', explain: '刷牙 (xoát nha) = đánh răng.' },
        { type: 'fill', q: '别着急，现在走还___。（Đừng vội, bây giờ đi vẫn còn kịp.）', answer: ['来得及', 'láidejí', 'laideji', 'lai de ji'], hint: 'láidejí – kịp', explain: '来得及 = còn kịp; ngược lại là 来不及 (không kịp).' },
        { type: 'fill', q: '他每天都___上班，从来不迟到。（Ngày nào anh ấy cũng đi làm đúng giờ, chưa bao giờ đến muộn.）', answer: ['准时', 'zhǔnshí', 'zhunshi', 'zhun shi'], hint: 'zhǔnshí – đúng giờ', explain: '准时 (chuẩn thời) = đúng giờ.' },
        { type: 'order', vi: 'Vừa tan làm là tôi về nhà.', words: ['就', '下班', '我', '回家', '一'], answer: '我 一 下班 就 回家' },
        { type: 'order', vi: 'Mười giờ anh ấy mới dậy.', words: ['才', '起床', '他', '十点'], answer: '他 十点 才 起床', alt: ['十点 他 才 起床'] },
        { type: 'order', vi: 'Sáu giờ tôi đã tỉnh rồi.', words: ['醒了', '六点', '就', '我'], answer: '我 六点 就 醒了', alt: ['六点 我 就 醒了'] },
        { type: 'order', vi: 'Ngày thường cô ấy hay ăn cơm ở nhà ăn.', words: ['在食堂', '她', '吃饭', '平时', '经常'], answer: '她 平时 经常 在食堂 吃饭', alt: ['平时 她 经常 在食堂 吃饭'] },
        { type: 'order', vi: 'Hôm qua tôi tăng ca đến mười giờ.', words: ['加到', '我', '十点', '昨天', '加班'], answer: '我 昨天 加班 加到 十点', alt: ['昨天 我 加班 加到 十点'] }
      ],
      reading: {
        title: '小张的早上',
        titleVi: 'Buổi sáng của Tiểu Trương',
        text: [
          '小张在一家公司工作。他家离公司很远，坐地铁要一个小时，所以他每天六点就起床了。闹钟一响，他就马上起来，刷牙、洗澡，七点就出门了。',
          '可是昨天不一样。前天晚上他加班，十二点才回家，一回家就睡了。第二天早上闹钟响了好几次，他都没听见，八点才醒。他没吃早饭就跑出了门。',
          '那天路上又堵车，他九点半才到公司，会议已经开始了。经理没有批评他，只问：“你平时总是很准时，今天怎么这么晚？”小张说：“对不起，以后我一定早点儿睡。”从那天起，他每天晚上十一点以前就睡觉了。'
        ],
        py: [
          'Xiǎo Zhāng zài yì jiā gōngsī gōngzuò. Tā jiā lí gōngsī hěn yuǎn, zuò dìtiě yào yí ge xiǎoshí, suǒyǐ tā měi tiān liù diǎn jiù qǐchuáng le. Nàozhōng yì xiǎng, tā jiù mǎshàng qǐlai, shuāyá, xǐzǎo, qī diǎn jiù chūmén le.',
          "Kěshì zuótiān bù yíyàng. Qiántiān wǎnshang tā jiābān, shí'èr diǎn cái huíjiā, yì huíjiā jiù shuì le. Dì-èr tiān zǎoshang nàozhōng xiǎngle hǎo jǐ cì, tā dōu méi tīngjiàn, bā diǎn cái xǐng. Tā méi chī zǎofàn jiù pǎochūle mén.",
          'Nà tiān lù shang yòu dǔchē, tā jiǔ diǎn bàn cái dào gōngsī, huìyì yǐjīng kāishǐ le. Jīnglǐ méiyǒu pīpíng tā, zhǐ wèn: “Nǐ píngshí zǒngshì hěn zhǔnshí, jīntiān zěnme zhème wǎn?” Xiǎo Zhāng shuō: “Duìbuqǐ, yǐhòu wǒ yídìng zǎo diǎnr shuì.” Cóng nà tiān qǐ, tā měi tiān wǎnshang shíyī diǎn yǐqián jiù shuìjiào le.'
        ],
        vi: [
          'Tiểu Trương làm việc ở một công ty. Nhà anh ấy cách công ty rất xa, đi tàu điện ngầm mất một tiếng, nên ngày nào sáu giờ anh ấy cũng đã dậy. Chuông báo thức vừa reo là anh ấy dậy ngay, đánh răng, tắm rửa, bảy giờ đã ra khỏi nhà.',
          'Nhưng hôm qua thì khác. Tối hôm trước anh ấy tăng ca, mười hai giờ mới về nhà, về đến nhà là ngủ luôn. Sáng hôm sau chuông báo thức reo mấy lần anh ấy đều không nghe thấy, tám giờ mới tỉnh. Anh ấy không kịp ăn sáng đã chạy ra khỏi nhà.',
          'Hôm đó trên đường lại kẹt xe, chín rưỡi anh ấy mới đến công ty, cuộc họp đã bắt đầu rồi. Giám đốc không phê bình anh ấy, chỉ hỏi: “Ngày thường cậu lúc nào cũng đúng giờ, sao hôm nay muộn thế?” Tiểu Trương nói: “Xin lỗi, sau này tôi nhất định sẽ ngủ sớm hơn.” Từ hôm đó, tối nào chưa đến mười một giờ anh ấy cũng đã đi ngủ.'
        ],
        questions: [
          { q: 'Ngày thường Tiểu Trương dậy lúc mấy giờ?', options: ['5 giờ', '6 giờ', '7 giờ', '8 giờ'], answer: 1, explain: '所以他每天六点就起床了 — ngày nào sáu giờ cũng đã dậy.' },
          { q: 'Vì sao hôm qua Tiểu Trương dậy muộn?', options: ['Tối hôm trước tăng ca, 12 giờ mới về nhà', 'Đồng hồ báo thức bị hỏng', 'Anh ấy bị ốm', 'Anh ấy quên đặt báo thức'], answer: 0, explain: '前天晚上他加班，十二点才回家 — tối hôm trước tăng ca, mười hai giờ mới về.' },
          { q: 'Hôm qua mấy giờ Tiểu Trương đến công ty?', options: ['8 giờ', '9 giờ', '9 rưỡi', '10 giờ'], answer: 2, explain: '他九点半才到公司 — chín rưỡi mới đến công ty.' },
          { q: 'Giám đốc đã làm gì?', options: ['Phê bình anh ấy rất nặng', 'Bảo anh ấy về nhà nghỉ', 'Bắt anh ấy tăng ca', 'Không phê bình, chỉ hỏi sao hôm nay đến muộn'], answer: 3, explain: '经理没有批评他，只问：“…今天怎么这么晚？”' }
        ]
      }
    }
  },

  // ───────────────────────── HSK3-3b: Căn phòng: 着 & câu tồn hiện, 除了…以外 ─────────────────────────
  {
    after: 'zh-hsk3-3',
    unit: {
      id: 'zh-hsk3-3b',
      icon: '🛋️',
      title: 'Miêu tả căn phòng',
      goal: 'Miêu tả căn phòng và đồ đạc bằng V + 着 và câu tồn hiện (墙上挂着…), nói "ngoài… ra còn / trừ… ra đều" với 除了…以外.',
      vocab: [
        { w: '墙', ipa: 'qiáng', hv: 'tường', vi: 'bức tường', ex: '墙上挂着一张地图。', exPy: 'Qiáng shang guàzhe yì zhāng dìtú.', exVi: 'Trên tường treo một tấm bản đồ.' },
        { w: '挂', ipa: 'guà', hv: 'quải', vi: 'treo; cúp (máy)', ex: '我把照片挂在墙上了。', exPy: 'Wǒ bǎ zhàopiàn guà zài qiáng shang le.', exVi: 'Tôi treo ảnh lên tường rồi.' },
        { w: '躺', ipa: 'tǎng', hv: 'thảng', vi: 'nằm', ex: '他在床上躺着看书。', exPy: 'Tā zài chuáng shang tǎngzhe kàn shū.', exVi: 'Anh ấy nằm trên giường đọc sách.' },
        { w: '沙发', ipa: 'shāfā', hv: '', vi: 'ghế sô-pha', ex: '房间里摆着一个新沙发。', exPy: 'Fángjiān li bǎizhe yí ge xīn shāfā.', exVi: 'Trong phòng kê một chiếc sô-pha mới.' },
        { w: '花', ipa: 'huā', hv: 'hoa', vi: 'hoa; tiêu (tiền, thời gian)', ex: '桌子上放着一瓶花。', exPy: 'Zhuōzi shang fàngzhe yì píng huā.', exVi: 'Trên bàn đặt một lọ hoa.' },
        { w: '窗户', ipa: 'chuānghu', hv: 'song hộ', vi: 'cửa sổ', ex: '窗户开着，房间里很凉快。', exPy: 'Chuānghu kāizhe, fángjiān li hěn liángkuai.', exVi: 'Cửa sổ đang mở, trong phòng rất mát.' },
        { w: '灯', ipa: 'dēng', hv: 'đăng', vi: 'đèn', ex: '他的房间还亮着灯。', exPy: 'Tā de fángjiān hái liàngzhe dēng.', exVi: 'Phòng anh ấy vẫn còn sáng đèn.' },
        { w: '冰箱', ipa: 'bīngxiāng', hv: 'băng tương', vi: 'tủ lạnh', ex: '冰箱里除了牛奶以外，还有很多水果。', exPy: 'Bīngxiāng li chúle niúnǎi yǐwài, hái yǒu hěn duō shuǐguǒ.', exVi: 'Trong tủ lạnh ngoài sữa ra còn có nhiều hoa quả.' },
        { w: '空调', ipa: 'kōngtiáo', hv: 'không điều', vi: 'máy điều hoà', ex: '天太热了，快把空调打开吧。', exPy: 'Tiān tài rè le, kuài bǎ kōngtiáo dǎkāi ba.', exVi: 'Trời nóng quá, mau bật điều hoà lên đi.' },
        { w: '干净', ipa: 'gānjìng', hv: 'can tịnh', vi: 'sạch sẽ', ex: '他的房间总是很干净。', exPy: 'Tā de fángjiān zǒngshì hěn gānjìng.', exVi: 'Phòng anh ấy lúc nào cũng sạch sẽ.' },
        { w: '画儿', ipa: 'huàr', hv: 'hoạ nhi', vi: 'bức tranh', ex: '这张画儿是我妹妹画的。', exPy: 'Zhè zhāng huàr shì wǒ mèimei huà de.', exVi: 'Bức tranh này là em gái tôi vẽ.' },
        { w: '书架', ipa: 'shūjià', hv: 'thư giá', vi: 'giá sách', ex: '书架上摆着很多中文书。', exPy: 'Shūjià shang bǎizhe hěn duō Zhōngwén shū.', exVi: 'Trên giá sách bày rất nhiều sách tiếng Trung.' },
        { w: '门', ipa: 'mén', hv: 'môn', vi: 'cửa ra vào; cổng', ex: '门关着，他可能不在家。', exPy: 'Mén guānzhe, tā kěnéng bú zài jiā.', exVi: 'Cửa đang đóng, có lẽ anh ấy không ở nhà.' },
        { w: '摆', ipa: 'bǎi', hv: 'bãi', vi: 'bày, xếp', ex: '桌子上摆着几张照片。', exPy: 'Zhuōzi shang bǎizhe jǐ zhāng zhàopiàn.', exVi: 'Trên bàn bày mấy tấm ảnh.' },
        { w: '镜子', ipa: 'jìngzi', hv: 'kính tử', vi: 'cái gương', ex: '洗手间的墙上挂着一面镜子。', exPy: 'Xǐshǒujiān de qiáng shang guàzhe yí miàn jìngzi.', exVi: 'Trên tường nhà vệ sinh treo một chiếc gương.' },
        { w: '整齐', ipa: 'zhěngqí', hv: 'chỉnh tề', vi: 'ngăn nắp, gọn gàng', ex: '他的书放得很整齐。', exPy: 'Tā de shū fàng de hěn zhěngqí.', exVi: 'Sách của anh ấy xếp rất ngăn nắp.' },
        { w: '洗手间', ipa: 'xǐshǒujiān', hv: 'tẩy thủ gian', vi: 'nhà vệ sinh', ex: '请问，洗手间在哪儿？', exPy: 'Qǐngwèn, xǐshǒujiān zài nǎr?', exVi: 'Xin hỏi, nhà vệ sinh ở đâu?' },
        { w: '除了', ipa: 'chúle', hv: 'trừ liễu', vi: 'trừ; ngoài (đứng đầu cụm 除了…以外)', ex: '除了小王以外，大家都来了。', exPy: 'Chúle Xiǎo Wáng yǐwài, dàjiā dōu lái le.', exVi: 'Trừ Tiểu Vương ra, mọi người đều đến rồi.' },
        { w: '以外', ipa: 'yǐwài', hv: 'dĩ ngoại', vi: '… ra (cuối cụm 除了…以外); bên ngoài', ex: '除了汉语以外，他还会说英语。', exPy: 'Chúle Hànyǔ yǐwài, tā hái huì shuō Yīngyǔ.', exVi: 'Ngoài tiếng Trung ra, anh ấy còn biết nói tiếng Anh.' },
        { w: '站', ipa: 'zhàn', hv: 'trạm', vi: 'đứng; trạm, bến', ex: '门口站着一个人。', exPy: 'Ménkǒu zhànzhe yí ge rén.', exVi: 'Trước cửa có một người đang đứng.' }
      ],
      grammar: {
        title: '着 chỉ trạng thái, câu tồn hiện và 除了…以外',
        explain: [
          'Ở bài trước ta đã gặp V + 着 chỉ trạng thái kéo dài. Bài này dùng 着 để MIÊU TẢ cảnh vật: 门开着 (cửa đang mở), 灯亮着 (đèn đang sáng), 他在沙发上躺着 (anh ấy đang nằm trên sô-pha). Phủ định: 没(有) + V + 着: 门没开着.',
          'Câu tồn hiện (tồn tại – xuất hiện) dùng để tả ở đâu có gì: Nơi chốn + V着 + số lượng + danh từ: 墙上挂着一张画儿 (trên tường treo một bức tranh). Nơi chốn đứng đầu câu, KHÔNG có 在 phía trước, và phải có từ chỉ vị trí (上, 里, 旁边…). Danh từ sau động từ thường là thứ chưa xác định (一张画儿, 很多书).',
          'So với 有: 墙上有一张画儿 chỉ nói "có", còn 墙上挂着一张画儿 cho biết thêm vật đó tồn tại ở trạng thái nào (treo, bày, đặt, đứng…). Các động từ hay dùng: 挂, 放, 摆, 站, 坐, 躺, 写.',
          '除了 A 以外，还/也 … = ngoài A ra còn … (cộng thêm): 除了沙发以外，还有一张床. 除了 A 以外，都 … = trừ A ra thì đều … (loại trừ): 除了他以外，我们都去了. Trong khẩu ngữ có thể lược 以外: 除了他，….'
        ],
        table: [
          ['Mẫu', 'Ví dụ', 'Nghĩa'],
          ['N + V着', '窗户开着。', 'Cửa sổ đang mở.'],
          ['Nơi chốn + V着 + số lượng + N', '桌子上放着一本书。', 'Trên bàn đặt một cuốn sách.'],
          ['除了 A 以外，还/也 …', '除了沙发以外，还有一张床。', 'Ngoài sô-pha ra còn có một cái giường.'],
          ['除了 A 以外，都 …', '除了他以外，大家都来了。', 'Trừ anh ấy ra, mọi người đều đến.']
        ],
        examples: [
          { t: '墙上挂着一面大镜子。', py: 'Qiáng shang guàzhe yí miàn dà jìngzi.', vi: 'Trên tường treo một chiếc gương lớn.' },
          { t: '书架上摆着很多照片。', py: 'Shūjià shang bǎizhe hěn duō zhàopiàn.', vi: 'Trên giá sách bày rất nhiều ảnh.' },
          { t: '他在沙发上躺着看电视。', py: 'Tā zài shāfā shang tǎngzhe kàn diànshì.', vi: 'Anh ấy nằm trên sô-pha xem tivi.' },
          { t: '除了冰箱以外，房间里还有空调。', py: 'Chúle bīngxiāng yǐwài, fángjiān li hái yǒu kōngtiáo.', vi: 'Ngoài tủ lạnh ra, trong phòng còn có điều hoà.' },
          { t: '除了洗手间以外，每个房间都有窗户。', py: 'Chúle xǐshǒujiān yǐwài, měi ge fángjiān dōu yǒu chuānghu.', vi: 'Trừ nhà vệ sinh ra, phòng nào cũng có cửa sổ.' }
        ],
        tip: 'Người Việt hay dịch "Trên tường treo…" thành ✗ 在墙上挂着一张画儿 — câu tồn hiện bắt đầu thẳng bằng nơi chốn, bỏ 在: 墙上挂着一张画儿. Nơi chốn phải có từ phương vị: ✗ 墙挂着… → 墙上挂着…. Và đừng nhầm hai nghĩa của 除了…以外: đi với 还/也 là "ngoài ra còn", đi với 都 là "trừ ra".'
      },
      dialogue: [
        { s: '王明', t: '你的房间真干净！墙上挂着的这张画儿是你画的吗？', py: 'Nǐ de fángjiān zhēn gānjìng! Qiáng shang guàzhe de zhè zhāng huàr shì nǐ huà de ma?', vi: 'Phòng cậu sạch thật! Bức tranh treo trên tường này là cậu vẽ à?' },
        { s: '李华', t: '不是，是我姐姐画的。你看，书架上还摆着她的照片。', py: 'Bú shì, shì wǒ jiějie huà de. Nǐ kàn, shūjià shang hái bǎizhe tā de zhàopiàn.', vi: 'Không phải, là chị mình vẽ. Cậu xem, trên giá sách còn bày ảnh của chị ấy nữa.' },
        { s: '王明', t: '这个房间除了床以外，还有沙发和空调，真不错。', py: 'Zhège fángjiān chúle chuáng yǐwài, hái yǒu shāfā hé kōngtiáo, zhēn búcuò.', vi: 'Phòng này ngoài giường ra còn có sô-pha và điều hoà, tốt thật đấy.' },
        { s: '李华', t: '对，冰箱也是新的。除了洗手间小一点儿以外，别的都很好。', py: 'Duì, bīngxiāng yě shì xīn de. Chúle xǐshǒujiān xiǎo yìdiǎnr yǐwài, bié de dōu hěn hǎo.', vi: 'Ừ, tủ lạnh cũng mới. Trừ nhà vệ sinh hơi nhỏ ra, những cái khác đều rất tốt.' },
        { s: '王明', t: '窗户怎么开着？外面很热。', py: 'Chuānghu zěnme kāizhe? Wàimiàn hěn rè.', vi: 'Sao cửa sổ lại đang mở? Bên ngoài nóng lắm.' },
        { s: '李华', t: '我刚打扫完房间。没关系，我把窗户关上，开空调吧。', py: 'Wǒ gāng dǎsǎo wán fángjiān. Méi guānxi, wǒ bǎ chuānghu guānshang, kāi kōngtiáo ba.', vi: 'Mình vừa dọn phòng xong. Không sao, mình đóng cửa sổ lại rồi bật điều hoà nhé.' },
        { s: '王明', t: '好啊。你的东西放得真整齐，我的房间可乱了！', py: 'Hǎo a. Nǐ de dōngxi fàng de zhēn zhěngqí, wǒ de fángjiān kě luàn le!', vi: 'Được đấy. Đồ của cậu xếp ngăn nắp thật, phòng mình thì bừa lắm!' },
        { s: '李华', t: '哈哈，那下次我去你那儿帮你整理！', py: 'Hāha, nà xià cì wǒ qù nǐ nàr bāng nǐ zhěnglǐ!', vi: 'Haha, vậy lần sau mình qua chỗ cậu giúp cậu dọn dẹp!' }
      ],
      exercises: [
        { type: 'mc', q: '墙上___一张画儿。（Trên tường treo một bức tranh.）', options: ['挂着', '挂了着', '在挂'], answer: 0, explain: 'Câu tồn hiện: Nơi chốn + V着 + số lượng + danh từ.' },
        { type: 'mc', q: 'Câu nào đúng?', options: ['在桌子上放着一本书。', '桌子放着一本书。', '桌子上放着一本书。'], answer: 2, explain: 'Câu tồn hiện bắt đầu bằng nơi chốn (có 上), không có 在 phía trước.' },
        { type: 'mc', q: '除了小王以外，大家___来了。（Trừ Tiểu Vương ra, mọi người đều đến rồi.）', options: ['还', '都', '也'], answer: 1, explain: 'Nghĩa loại trừ "trừ… ra đều…" → 除了…以外，都….' },
        { type: 'mc', q: '除了英语以外，他___会说汉语。（Ngoài tiếng Anh ra, anh ấy còn biết nói tiếng Trung.）', options: ['都', '还', '就'], answer: 1, explain: 'Nghĩa cộng thêm "ngoài… ra còn…" → 除了…以外，还….' },
        { type: 'mc', q: '"窗户" nghĩa là gì?', options: ['cửa sổ', 'cửa ra vào', 'bức tường'], answer: 0, explain: '窗户 (song hộ) = cửa sổ; cửa ra vào là 门.' },
        { type: 'mc', q: 'Câu "门开着。" nghĩa là:', options: ['Cửa vừa mở xong.', 'Hãy mở cửa ra.', 'Cửa đang mở (để nguyên như vậy).'], answer: 2, explain: 'V + 着 chỉ trạng thái đang kéo dài.' },
        { type: 'fill', q: '门口___着一个人。（Trước cửa có một người đang đứng.）', answer: ['站', 'zhàn', 'zhan'], hint: 'zhàn – đứng', explain: 'Câu tồn hiện: 门口 + 站着 + 一个人.' },
        { type: 'fill', q: '他在沙发上___着看电视。（Anh ấy nằm trên sô-pha xem tivi.）', answer: ['躺', 'tǎng', 'tang'], hint: 'tǎng – nằm', explain: '躺着看电视 = nằm (trong trạng thái nằm) xem tivi.' },
        { type: 'fill', q: '___汉语以外，他还学日语。（Ngoài tiếng Trung ra, anh ấy còn học tiếng Nhật.）', answer: ['除了', 'chúle', 'chule', 'chu le'], hint: 'chúle – ngoài… ra', explain: 'Cặp 除了…以外，还… = ngoài… ra còn….' },
        { type: 'fill', q: '书架上___着很多中文书。（Trên giá sách bày rất nhiều sách tiếng Trung.）', answer: ['摆', 'bǎi', 'bai', '放', 'fàng', 'fang'], hint: 'bǎi – bày, xếp', explain: '摆着 / 放着 đều dùng được trong câu tồn hiện.' },
        { type: 'fill', q: '天太热了，开一下___吧。（Trời nóng quá, bật điều hoà lên đi.）', answer: ['空调', 'kōngtiáo', 'kongtiao', 'kong tiao'], hint: 'kōngtiáo – máy điều hoà', explain: '空调 (không điều) = máy điều hoà nhiệt độ.' },
        { type: 'order', vi: 'Trên tường treo một chiếc gương.', words: ['一面', '挂着', '墙上', '镜子'], answer: '墙上 挂着 一面 镜子' },
        { type: 'order', vi: 'Trên bàn đặt một lọ hoa.', words: ['放着', '一瓶花', '桌子上'], answer: '桌子上 放着 一瓶花' },
        { type: 'order', vi: 'Trừ anh ấy ra, chúng tôi đều đi rồi.', words: ['都', '以外，', '除了', '我们', '他', '去了'], answer: '除了 他 以外， 我们 都 去了' },
        { type: 'order', vi: 'Đèn trong phòng anh ấy vẫn đang sáng.', words: ['还', '他房间的', '亮着', '灯'], answer: '他房间的 灯 还 亮着' },
        { type: 'order', vi: 'Phòng của anh ấy vừa sạch sẽ vừa ngăn nắp.', words: ['又干净', '他的', '又整齐', '房间'], answer: '他的 房间 又干净 又整齐', alt: ['他的 房间 又整齐 又干净'] }
      ],
      reading: {
        title: '我的小房间',
        titleVi: 'Căn phòng nhỏ của tôi',
        text: [
          '上个月我搬进了学校旁边的一个小房间。房间不大，可是很干净。一进门，左边是洗手间，右边摆着一个书架，书架上放着很多中文书和几张照片。',
          '窗户旁边放着一张床和一个小沙发。累了的时候，我就在沙发上躺着听音乐。墙上挂着一张中国地图，还挂着一张画儿，是我妹妹送给我的。晚上，我常常开着窗户看书。',
          '除了床和沙发以外，房间里还有一个小冰箱和一台空调。夏天外面很热，可是房间里一点儿也不热。朋友们来玩儿的时候都说：“你的房间真整齐！”我听了很高兴。'
        ],
        py: [
          'Shàng ge yuè wǒ bān jìnle xuéxiào pángbiān de yí ge xiǎo fángjiān. Fángjiān bú dà, kěshì hěn gānjìng. Yí jìn mén, zuǒbian shì xǐshǒujiān, yòubian bǎizhe yí ge shūjià, shūjià shang fàngzhe hěn duō Zhōngwén shū hé jǐ zhāng zhàopiàn.',
          'Chuānghu pángbiān fàngzhe yì zhāng chuáng hé yí ge xiǎo shāfā. Lèile de shíhou, wǒ jiù zài shāfā shang tǎngzhe tīng yīnyuè. Qiáng shang guàzhe yì zhāng Zhōngguó dìtú, hái guàzhe yì zhāng huàr, shì wǒ mèimei sòng gěi wǒ de. Wǎnshang, wǒ chángcháng kāizhe chuānghu kàn shū.',
          'Chúle chuáng hé shāfā yǐwài, fángjiān li hái yǒu yí ge xiǎo bīngxiāng hé yì tái kōngtiáo. Xiàtiān wàimiàn hěn rè, kěshì fángjiān li yìdiǎnr yě bú rè. Péngyoumen lái wánr de shíhou dōu shuō: “Nǐ de fángjiān zhēn zhěngqí!” Wǒ tīngle hěn gāoxìng.'
        ],
        vi: [
          'Tháng trước tôi dọn vào một căn phòng nhỏ cạnh trường. Phòng không lớn nhưng rất sạch sẽ. Vừa bước vào cửa, bên trái là nhà vệ sinh, bên phải kê một giá sách, trên giá đặt rất nhiều sách tiếng Trung và mấy tấm ảnh.',
          'Cạnh cửa sổ đặt một chiếc giường và một chiếc sô-pha nhỏ. Lúc mệt, tôi nằm trên sô-pha nghe nhạc. Trên tường treo một tấm bản đồ Trung Quốc, còn treo một bức tranh do em gái tặng tôi. Buổi tối, tôi thường mở cửa sổ ngồi đọc sách.',
          'Ngoài giường và sô-pha ra, trong phòng còn có một chiếc tủ lạnh nhỏ và một chiếc điều hoà. Mùa hè bên ngoài rất nóng, nhưng trong phòng chẳng nóng chút nào. Bạn bè đến chơi đều nói: “Phòng cậu ngăn nắp thật!” Tôi nghe mà rất vui.'
        ],
        questions: [
          { q: 'Vừa bước vào cửa, bên phải có gì?', options: ['Nhà vệ sinh', 'Một giá sách', 'Một chiếc giường', 'Tủ lạnh'], answer: 1, explain: '右边摆着一个书架 — bên phải kê một giá sách.' },
          { q: 'Lúc mệt, "tôi" thường làm gì?', options: ['Nằm trên sô-pha nghe nhạc', 'Ngủ trên giường', 'Đọc sách tiếng Trung', 'Đi dạo'], answer: 0, explain: '累了的时候，我就在沙发上躺着听音乐。' },
          { q: 'Bức tranh trên tường là ai tặng?', options: ['Mẹ', 'Bạn cùng lớp', 'Em gái', 'Thầy giáo'], answer: 2, explain: '还挂着一张画儿，是我妹妹送给我的。' },
          { q: 'Ngoài giường và sô-pha, trong phòng còn có gì?', options: ['Tivi và máy giặt', 'Bàn và ghế', 'Điều hoà và đèn bàn', 'Tủ lạnh nhỏ và điều hoà'], answer: 3, explain: '除了床和沙发以外，房间里还有一个小冰箱和一台空调。' }
        ]
      }
    }
  },

  // ───────────────────────── HSK3-4b: Chuyển nhà: bổ ngữ xu hướng ─────────────────────────
  {
    after: 'zh-hsk3-4',
    unit: {
      id: 'zh-hsk3-4b',
      icon: '📦',
      title: 'Chuyển nhà',
      goal: 'Nói hướng di chuyển của người và đồ vật (lên, xuống, vào, ra, về) bằng bổ ngữ xu hướng đơn và kép, đặt đúng vị trí tân ngữ.',
      vocab: [
        { w: '搬家', ipa: 'bānjiā', hv: 'ban gia', vi: 'chuyển nhà', ex: '我们下个星期搬家。', exPy: 'Wǒmen xià ge xīngqī bānjiā.', exVi: 'Tuần sau chúng tôi chuyển nhà.' },
        { w: '搬', ipa: 'bān', hv: 'ban', vi: 'bê, khiêng (đồ nặng); dời', ex: '请把这张桌子搬进来。', exPy: 'Qǐng bǎ zhè zhāng zhuōzi bān jìnlai.', exVi: 'Làm ơn khiêng cái bàn này vào đây.' },
        { w: '拿', ipa: 'ná', hv: 'nã', vi: 'cầm, lấy', ex: '你出去的时候，把这些书拿出去吧。', exPy: 'Nǐ chūqu de shíhou, bǎ zhèxiē shū ná chūqu ba.', exVi: 'Lúc bạn ra ngoài thì mang mấy cuốn sách này ra luôn nhé.' },
        { w: '楼', ipa: 'lóu', hv: 'lâu', vi: 'toà nhà; lầu', ex: '我家住在五楼。', exPy: 'Wǒ jiā zhù zài wǔ lóu.', exVi: 'Nhà tôi ở tầng năm.' },
        { w: '层', ipa: 'céng', hv: 'tầng', vi: 'tầng, lớp (lượng từ)', ex: '这座楼一共有二十层。', exPy: 'Zhè zuò lóu yígòng yǒu èrshí céng.', exVi: 'Toà nhà này có tất cả hai mươi tầng.' },
        { w: '电梯', ipa: 'diàntī', hv: 'điện thê', vi: 'thang máy', ex: '电梯坏了，我们只好走上去。', exPy: 'Diàntī huài le, wǒmen zhǐhǎo zǒu shàngqu.', exVi: 'Thang máy hỏng rồi, chúng tôi đành đi bộ lên.' },
        { w: '箱子', ipa: 'xiāngzi', hv: 'tương tử', vi: 'thùng, hòm', ex: '这个箱子里都是书。', exPy: 'Zhège xiāngzi li dōu shì shū.', exVi: 'Trong thùng này toàn là sách.' },
        { w: '进', ipa: 'jìn', hv: 'tiến', vi: 'vào', ex: '外面冷，快进来吧！', exPy: 'Wàimiàn lěng, kuài jìnlai ba!', exVi: 'Ngoài trời lạnh, mau vào đi!' },
        { w: '出', ipa: 'chū', hv: 'xuất', vi: 'ra', ex: '他从房间里走出来了。', exPy: 'Tā cóng fángjiān li zǒu chūlai le.', exVi: 'Anh ấy từ trong phòng đi ra.' },
        { w: '回', ipa: 'huí', hv: 'hồi', vi: 'về, trở về', ex: '你什么时候回来？', exPy: 'Nǐ shénme shíhou huílai?', exVi: 'Khi nào bạn về?' },
        { w: '起来', ipa: 'qǐlai', hv: 'khởi lai', vi: 'dậy, đứng lên; (sau động từ) bắt đầu…', ex: '大家听了都笑起来了。', exPy: 'Dàjiā tīngle dōu xiào qǐlai le.', exVi: 'Mọi người nghe xong đều bật cười.' },
        { w: '下去', ipa: 'xiàqu', hv: 'hạ khứ', vi: 'xuống (đi); (sau động từ) tiếp tục…', ex: '你说下去，我在听。', exPy: 'Nǐ shuō xiàqu, wǒ zài tīng.', exVi: 'Bạn nói tiếp đi, tôi đang nghe.' },
        { w: '放', ipa: 'fàng', hv: 'phóng', vi: 'đặt, để', ex: '把箱子放下来休息一下吧。', exPy: 'Bǎ xiāngzi fàng xiàlai xiūxi yíxià ba.', exVi: 'Đặt thùng xuống nghỉ một chút đi.' },
        { w: '带', ipa: 'dài', hv: 'đới', vi: 'mang theo, đem', ex: '明天别忘了带一把伞来。', exPy: 'Míngtiān bié wàngle dài yì bǎ sǎn lai.', exVi: 'Mai đừng quên mang một chiếc ô đến.' },
        { w: '邻居', ipa: 'línjū', hv: 'lân cư', vi: 'hàng xóm (mở rộng)', ex: '我们的新邻居很热情。', exPy: 'Wǒmen de xīn línjū hěn rèqíng.', exVi: 'Hàng xóm mới của chúng tôi rất nhiệt tình.' },
        { w: '帮忙', ipa: 'bāngmáng', hv: 'bang mang', vi: 'giúp một tay', ex: '搬家的时候，朋友们都来帮忙了。', exPy: 'Bānjiā de shíhou, péngyoumen dōu lái bāngmáng le.', exVi: 'Lúc chuyển nhà, bạn bè đều đến giúp một tay.' },
        { w: '门口', ipa: 'ménkǒu', hv: 'môn khẩu', vi: 'trước cửa, cửa ra vào', ex: '搬家公司的车停在楼门口。', exPy: 'Bānjiā gōngsī de chē tíng zài lóu ménkǒu.', exVi: 'Xe của công ty chuyển nhà đỗ trước cửa toà nhà.' },
        { w: '重', ipa: 'zhòng', hv: 'trọng', vi: 'nặng', ex: '这个箱子很重，我们一起搬上去吧。', exPy: 'Zhège xiāngzi hěn zhòng, wǒmen yìqǐ bān shàngqu ba.', exVi: 'Cái thùng này rất nặng, chúng ta cùng khiêng lên nhé.' },
        { w: '轻', ipa: 'qīng', hv: 'khinh', vi: 'nhẹ', ex: '这个包很轻，你拿上去吧。', exPy: 'Zhège bāo hěn qīng, nǐ ná shàngqu ba.', exVi: 'Cái túi này nhẹ, bạn cầm lên đi.' },
        { w: '楼梯', ipa: 'lóutī', hv: 'lâu thê', vi: 'cầu thang', ex: '他从楼梯上跑下来了。', exPy: 'Tā cóng lóutī shang pǎo xiàlai le.', exVi: 'Anh ấy chạy từ trên cầu thang xuống.' }
      ],
      grammar: {
        title: 'Bổ ngữ xu hướng đơn và kép (来/去, 上来, 出去, 回去…)',
        explain: [
          'Bổ ngữ xu hướng đứng sau động từ để chỉ hướng di chuyển. Bổ ngữ đơn: V + 来 (hướng VỀ phía người nói) / V + 去 (hướng RA XA người nói). Người nói ở trên lầu gọi xuống: 上来吧！ (lên đây đi); người nói ở dưới: 上去吧！ (lên đó đi). 来/去 ở vị trí bổ ngữ đọc nhẹ (thanh nhẹ).',
          'Bổ ngữ kép: V + 上/下/进/出/回/过/起 + 来/去: 走进来 (đi vào đây), 跑出去 (chạy ra ngoài), 搬上去 (khiêng lên), 拿回来 (mang về). Phần đầu chỉ hướng (lên, xuống, vào, ra, về, qua, dậy), phần sau 来/去 cho biết so với vị trí người nói.',
          'Vị trí tân ngữ: tân ngữ chỉ NƠI CHỐN luôn đặt trước 来/去: 进教室来, 回家去, 走上楼去 (✗ 回去家). Tân ngữ chỉ SỰ VẬT có thể đặt trước hoặc sau 来/去: 拿一本书来 = 拿来一本书. Muốn nhấn mạnh việc xử lý một vật cụ thể thì dùng câu 把 đã học: 把箱子搬上去.',
          'Nghĩa mở rộng hay gặp: V + 起来 = bắt đầu và tiếp diễn (笑起来, 下起雨来), hoặc nhận xét "trông / nghe có vẻ" (看起来很重); V + 下去 = tiếp tục (说下去, 坚持下去).'
        ],
        table: [
          ['Bổ ngữ', 'Ví dụ', 'Nghĩa'],
          ['V + 来 / 去', '他进来了。/ 他出去了。', 'Anh ấy vào (đây) rồi. / Anh ấy ra ngoài rồi.'],
          ['V + 上/下 + 来/去', '把箱子搬上去。', 'Khiêng thùng lên trên đó.'],
          ['V + 进/出 + 来/去', '他从房间里走出来。', 'Anh ấy từ trong phòng đi ra.'],
          ['V + 回 + nơi chốn + 来/去', '我明天回北京去。', 'Mai tôi về Bắc Kinh.'],
          ['V + 起来', '大家都笑起来了。', 'Mọi người đều bật cười.'],
          ['V + 下去', '请你说下去。', 'Mời bạn nói tiếp.']
        ],
        examples: [
          { t: '外面下雨了，快进来吧！', py: 'Wàimiàn xià yǔ le, kuài jìnlai ba!', vi: 'Ngoài trời mưa rồi, mau vào đây đi!' },
          { t: '我们把沙发搬上去吧。', py: 'Wǒmen bǎ shāfā bān shàngqu ba.', vi: 'Chúng ta khiêng sô-pha lên đi.' },
          { t: '你出去的时候，带一把伞去。', py: 'Nǐ chūqu de shíhou, dài yì bǎ sǎn qu.', vi: 'Lúc ra ngoài, bạn mang theo một chiếc ô.' },
          { t: '他走进教室来了。', py: 'Tā zǒu jìn jiàoshì lai le.', vi: 'Anh ấy đi vào lớp học.' },
          { t: '这个箱子看起来很重。', py: 'Zhège xiāngzi kàn qǐlai hěn zhòng.', vi: 'Cái thùng này trông có vẻ nặng.' }
        ],
        tip: 'Tiếng Việt nói "về nhà", "vào lớp" nên người Việt hay viết ✗ 回去家, ✗ 进来教室. Nhớ: nơi chốn chen GIỮA, 来/去 đứng cuối: 回家去, 进教室来. Ngoài ra hãy chọn 来/去 theo vị trí người nói: đang ở trong nhà gọi bạn ngoài cửa thì nói 进来 (vào đây), không nói 进去.'
      },
      dialogue: [
        { s: '王明', t: '李华，我到你楼下了。搬家公司的车也来了。', py: 'Lǐ Huá, wǒ dào nǐ lóu xià le. Bānjiā gōngsī de chē yě lái le.', vi: 'Lý Hoa, mình tới dưới nhà cậu rồi. Xe công ty chuyển nhà cũng đến rồi.' },
        { s: '李华', t: '太好了！你上来吧，我在五楼。', py: 'Tài hǎo le! Nǐ shànglai ba, wǒ zài wǔ lóu.', vi: 'Tốt quá! Cậu lên đây đi, mình ở tầng năm.' },
        { s: '王明', t: '电梯能用吗？还是走楼梯上去？', py: 'Diàntī néng yòng ma? Háishi zǒu lóutī shàngqu?', vi: 'Thang máy dùng được không? Hay là đi cầu thang lên?' },
        { s: '李华', t: '电梯坏了，你只好走上来了。不好意思！', py: 'Diàntī huài le, nǐ zhǐhǎo zǒu shànglai le. Bù hǎoyìsi!', vi: 'Thang máy hỏng rồi, cậu đành đi bộ lên vậy. Ngại quá!' },
        { s: '王明', t: '没关系。这些箱子都要搬下去吗？', py: 'Méi guānxi. Zhèxiē xiāngzi dōu yào bān xiàqu ma?', vi: 'Không sao. Mấy cái thùng này đều phải khiêng xuống à?' },
        { s: '李华', t: '对。这个箱子很重，我们一起搬下去吧。那个很轻，我自己拿下去。', py: 'Duì. Zhège xiāngzi hěn zhòng, wǒmen yìqǐ bān xiàqu ba. Nàge hěn qīng, wǒ zìjǐ ná xiàqu.', vi: 'Ừ. Thùng này nặng lắm, chúng mình cùng khiêng xuống nhé. Cái kia nhẹ, mình tự mang xuống.' },
        { s: '王明', t: '好。你看，你的邻居也出来帮忙了！', py: 'Hǎo. Nǐ kàn, nǐ de línjū yě chūlai bāngmáng le!', vi: 'Được. Cậu xem, hàng xóm của cậu cũng ra giúp một tay rồi kìa!' },
        { s: '李华', t: '是啊，搬完以后，我请大家吃饭！', py: 'Shì a, bānwán yǐhòu, wǒ qǐng dàjiā chīfàn!', vi: 'Đúng thế, chuyển xong mình mời mọi người đi ăn!' }
      ],
      exercises: [
        { type: 'mc', q: 'Bạn đang ở tầng 5, gọi bạn mình ở dưới lên. Bạn nói:', options: ['你上去吧！', '你上来吧！', '你下来吧！'], answer: 1, explain: 'Hướng về phía người nói (lên chỗ mình) → 上来.' },
        { type: 'mc', q: 'Câu nào đúng?', options: ['他回家去了。', '他回去家了。', '他家回去了。'], answer: 0, explain: 'Tân ngữ nơi chốn đặt giữa 回 và 去: 回家去.' },
        { type: 'mc', q: 'Bạn đang ở trong lớp, thầy giáo đứng ngoài cửa. Bạn mời thầy vào:', options: ['老师，请进去！', '老师，请出来！', '老师，请进来！'], answer: 2, explain: 'Thầy đi vào phía người nói → 进来.' },
        { type: 'mc', q: '大家听了他的话，都笑___了。（Mọi người nghe anh ấy nói đều bật cười.）', options: ['下去', '起来', '出去'], answer: 1, explain: 'V + 起来 = bắt đầu (cười, mưa, nói…).' },
        { type: 'mc', q: '"楼梯" nghĩa là gì?', options: ['cầu thang', 'thang máy', 'tầng lầu'], answer: 0, explain: '楼梯 (lâu thê) = cầu thang; thang máy là 电梯.' },
        { type: 'mc', q: '你的故事真有意思，请说___。（Câu chuyện của bạn thú vị quá, kể tiếp đi.）', options: ['起来', '上来', '下去'], answer: 2, explain: 'V + 下去 = tiếp tục làm.' },
        { type: 'fill', q: '这个箱子很___，我们一起搬吧。（Cái thùng này rất nặng, chúng ta cùng khiêng nhé.）', answer: ['重', 'zhòng', 'zhong'], hint: 'zhòng – nặng', explain: '重 (trọng) = nặng; trái nghĩa là 轻 (nhẹ).' },
        { type: 'fill', q: '外面冷，快进___吧！（Ngoài trời lạnh, mau vào đây đi!）', answer: ['来', 'lái', 'lai'], hint: 'lai – hướng về phía người nói', explain: 'Người nói ở trong nhà, người kia đi vào phía mình → 进来.' },
        { type: 'fill', q: '电梯坏了，我们只好走___上去。（Thang máy hỏng rồi, chúng tôi đành đi cầu thang lên.）', answer: ['楼梯', 'lóutī', 'louti', 'lou ti'], hint: 'lóutī – cầu thang', explain: '走楼梯上去 = đi cầu thang lên.' },
        { type: 'fill', q: '我们下个月___家。（Tháng sau chúng tôi chuyển nhà.）', answer: ['搬', 'bān', 'ban'], hint: 'bān – dời, chuyển', explain: '搬家 = chuyển nhà.' },
        { type: 'fill', q: '出去的时候，别忘了___一把伞去。（Lúc ra ngoài đừng quên mang theo một chiếc ô.）', answer: ['带', 'dài', 'dai'], hint: 'dài – mang theo', explain: '带 + đồ vật + 去 = mang theo thứ gì đi.' },
        { type: 'order', vi: 'Chúng ta khiêng cái thùng lên đi.', words: ['搬上去', '把', '我们', '吧', '箱子'], answer: '我们 把 箱子 搬上去 吧' },
        { type: 'order', vi: 'Anh ấy từ trong phòng đi ra.', words: ['走出来了', '他', '房间里', '从'], answer: '他 从 房间里 走出来了' },
        { type: 'order', vi: 'Ngày mai tôi về nhà.', words: ['回', '我', '去', '家', '明天'], answer: '我 明天 回 家 去', alt: ['明天 我 回 家 去'] },
        { type: 'order', vi: 'Cái thùng này trông có vẻ rất nặng.', words: ['看起来', '这个', '很重', '箱子'], answer: '这个 箱子 看起来 很重' },
        { type: 'order', vi: 'Hàng xóm đều ra giúp một tay.', words: ['帮忙', '邻居们', '出来', '都'], answer: '邻居们 都 出来 帮忙' }
      ],
      reading: {
        title: '搬家',
        titleVi: 'Chuyển nhà',
        text: [
          '上个星期六我搬家了。新家在一座二十层的楼里，我住在十二层。那天早上，搬家公司的车八点就开到了楼门口。',
          '工人们把箱子一个一个地搬下车来，再坐电梯搬上去。可是搬了一会儿，电梯突然坏了，大家只好走楼梯。重的箱子两个人一起搬，轻的我自己拿上去。',
          '这时候，住在对面的邻居走出来说：“我来帮忙吧！”他帮我们搬了一个多小时。搬完以后，我请他进来喝茶。他看起来四十多岁，非常热情。他说：“以后有什么问题，就来找我。”',
          '晚上，我一个人坐在新家里，看着那么多箱子，虽然很累，但是心里很高兴。'
        ],
        py: [
          'Shàng ge xīngqīliù wǒ bānjiā le. Xīn jiā zài yí zuò èrshí céng de lóu li, wǒ zhù zài shí\'èr céng. Nà tiān zǎoshang, bānjiā gōngsī de chē bā diǎn jiù kāidàole lóu ménkǒu.',
          'Gōngrénmen bǎ xiāngzi yí ge yí ge de bān xià chē lai, zài zuò diàntī bān shàngqu. Kěshì bānle yíhuìr, diàntī tūrán huài le, dàjiā zhǐhǎo zǒu lóutī. Zhòng de xiāngzi liǎng ge rén yìqǐ bān, qīng de wǒ zìjǐ ná shàngqu.',
          'Zhè shíhou, zhù zài duìmiàn de línjū zǒu chūlai shuō: “Wǒ lái bāngmáng ba!” Tā bāng wǒmen bānle yí ge duō xiǎoshí. Bānwán yǐhòu, wǒ qǐng tā jìnlai hē chá. Tā kàn qǐlai sìshí duō suì, fēicháng rèqíng. Tā shuō: “Yǐhòu yǒu shénme wèntí, jiù lái zhǎo wǒ.”',
          'Wǎnshang, wǒ yí ge rén zuò zài xīn jiā li, kànzhe nàme duō xiāngzi, suīrán hěn lèi, dànshì xīnli hěn gāoxìng.'
        ],
        vi: [
          'Thứ bảy tuần trước tôi chuyển nhà. Nhà mới ở trong một toà nhà hai mươi tầng, tôi ở tầng mười hai. Sáng hôm đó, xe của công ty chuyển nhà tám giờ đã đến trước cửa toà nhà.',
          'Các công nhân khiêng từng thùng một xuống xe, rồi đi thang máy mang lên. Nhưng khiêng được một lúc thì thang máy đột nhiên hỏng, mọi người đành đi cầu thang. Thùng nặng thì hai người cùng khiêng, thùng nhẹ thì tôi tự mang lên.',
          'Lúc đó, người hàng xóm ở đối diện bước ra nói: “Để tôi giúp một tay!” Anh ấy giúp chúng tôi khiêng hơn một tiếng. Chuyển xong, tôi mời anh ấy vào uống trà. Anh ấy trông chừng hơn bốn mươi tuổi, rất nhiệt tình. Anh ấy nói: “Sau này có chuyện gì thì cứ tìm tôi.”',
          'Buổi tối, tôi ngồi một mình trong nhà mới, nhìn bao nhiêu là thùng, tuy rất mệt nhưng trong lòng rất vui.'
        ],
        questions: [
          { q: 'Nhà mới của "tôi" ở tầng mấy?', options: ['Tầng 2', 'Tầng 12', 'Tầng 20', 'Tầng 10'], answer: 1, explain: '我住在十二层 — tôi ở tầng mười hai.' },
          { q: 'Vì sao mọi người phải đi cầu thang?', options: ['Thang máy đột nhiên bị hỏng', 'Thang máy quá nhỏ', 'Đồ đạc quá nặng', 'Toà nhà không có thang máy'], answer: 0, explain: '电梯突然坏了，大家只好走楼梯。' },
          { q: 'Người hàng xóm đã làm gì?', options: ['Phàn nàn vì ồn ào', 'Cho mượn xe', 'Giúp khiêng đồ hơn một tiếng', 'Mời "tôi" sang nhà ăn cơm'], answer: 2, explain: '他帮我们搬了一个多小时。' },
          { q: 'Buổi tối "tôi" cảm thấy thế nào?', options: ['Buồn vì nhớ nhà cũ', 'Tức giận', 'Mệt và muốn chuyển đi', 'Mệt nhưng rất vui'], answer: 3, explain: '虽然很累，但是心里很高兴。' }
        ]
      }
    }
  },

  // zh-hsk3-5b: Quê hương đổi thay (越来越, 越A越B, 又/再/还)
  {
    after: 'zh-hsk3-5',
    unit: {
      id: 'zh-hsk3-5b',
      icon: '📈',
      title: 'Quê hương đổi thay',
      goal: 'Kể về sự thay đổi của nơi mình sống, nói "càng ngày càng…", "càng… càng…" và phân biệt 又 / 再 / 还 khi nói về việc lặp lại.',
      vocab: [
        { w: '越来越', ipa: 'yuèláiyuè', hv: 'việt lai việt', vi: 'càng ngày càng', ex: '天气越来越热了。', exPy: 'Tiānqì yuèláiyuè rè le.', exVi: 'Thời tiết càng ngày càng nóng.' },
        { w: '又', ipa: 'yòu', hv: 'hựu', vi: 'lại (việc đã lặp lại)', ex: '他今天又迟到了。', exPy: 'Tā jīntiān yòu chídào le.', exVi: 'Hôm nay anh ấy lại đến muộn.' },
        { w: '再', ipa: 'zài', hv: 'tái', vi: 'lại, nữa (việc sẽ lặp lại)', ex: '这个电影很好看，我想再看一次。', exPy: 'Zhège diànyǐng hěn hǎokàn, wǒ xiǎng zài kàn yí cì.', exVi: 'Bộ phim này rất hay, tôi muốn xem lại một lần nữa.' },
        { w: '变', ipa: 'biàn', hv: 'biến', vi: 'trở nên; đổi khác', ex: '他变得越来越安静了。', exPy: 'Tā biàn de yuèláiyuè ānjìng le.', exVi: 'Anh ấy trở nên ngày càng trầm lặng.' },
        { w: '变化', ipa: 'biànhuà', hv: 'biến hoá', vi: 'sự thay đổi; biến đổi', ex: '这几年我的家乡变化很大。', exPy: 'Zhè jǐ nián wǒ de jiāxiāng biànhuà hěn dà.', exVi: 'Mấy năm nay quê tôi thay đổi rất nhiều.' },
        { w: '进步', ipa: 'jìnbù', hv: 'tiến bộ', vi: 'tiến bộ', ex: '你的汉语进步得真快！', exPy: 'Nǐ de Hànyǔ jìnbù de zhēn kuài!', exVi: 'Tiếng Trung của bạn tiến bộ nhanh thật!' },
        { w: '提高', ipa: 'tígāo', hv: 'đề cao', vi: 'nâng cao', ex: '多听多说，才能提高汉语水平。', exPy: 'Duō tīng duō shuō, cái néng tígāo Hànyǔ shuǐpíng.', exVi: 'Nghe nhiều nói nhiều mới nâng cao được trình độ tiếng Trung.' },
        { w: '发展', ipa: 'fāzhǎn', hv: 'phát triển', vi: 'phát triển', ex: '这个城市发展得很快。', exPy: 'Zhège chéngshì fāzhǎn de hěn kuài.', exVi: 'Thành phố này phát triển rất nhanh.' },
        { w: '以前', ipa: 'yǐqián', hv: 'dĩ tiền', vi: 'trước đây, trước kia', ex: '以前这里没有地铁。', exPy: 'Yǐqián zhèli méiyǒu dìtiě.', exVi: 'Trước đây ở đây không có tàu điện ngầm.' },
        { w: '老人', ipa: 'lǎorén', hv: 'lão nhân', vi: 'người già', ex: '公园里有很多老人在锻炼。', exPy: 'Gōngyuán li yǒu hěn duō lǎorén zài duànliàn.', exVi: 'Trong công viên có nhiều người già đang tập thể dục.' },
        { w: '汽车', ipa: 'qìchē', hv: 'khí xa', vi: 'ô tô, xe hơi', ex: '街上的汽车越来越多。', exPy: 'Jiē shang de qìchē yuèláiyuè duō.', exVi: 'Ô tô trên phố càng ngày càng nhiều.' },
        { w: '空气', ipa: 'kōngqì', hv: 'không khí', vi: 'không khí', ex: '下雨以后，空气好多了。', exPy: 'Xià yǔ yǐhòu, kōngqì hǎo duō le.', exVi: 'Sau khi mưa, không khí dễ chịu hơn nhiều.' },
        { w: '新鲜', ipa: 'xīnxiān', hv: 'tân tiên', vi: 'tươi, trong lành', ex: '早上的菜最新鲜。', exPy: 'Zǎoshang de cài zuì xīnxiān.', exVi: 'Rau buổi sáng là tươi nhất.' },
        { w: '交通', ipa: 'jiāotōng', hv: 'giao thông', vi: 'giao thông', ex: '现在的交通比以前方便多了。', exPy: 'Xiànzài de jiāotōng bǐ yǐqián fāngbiàn duō le.', exVi: 'Giao thông bây giờ tiện hơn trước nhiều.' },
        { w: '生活', ipa: 'shēnghuó', hv: 'sinh hoạt', vi: 'cuộc sống; sống', ex: '大家的生活越来越好了。', exPy: 'Dàjiā de shēnghuó yuèláiyuè hǎo le.', exVi: 'Cuộc sống của mọi người càng ngày càng tốt.' },
        { w: '建', ipa: 'jiàn', hv: 'kiến', vi: 'xây, xây dựng', ex: '我家旁边新建了一个公园。', exPy: 'Wǒ jiā pángbiān xīn jiànle yí ge gōngyuán.', exVi: 'Cạnh nhà tôi mới xây một công viên.' },
        { w: '街道', ipa: 'jiēdào', hv: 'nhai đạo', vi: 'đường phố', ex: '晚上的街道很热闹。', exPy: 'Wǎnshang de jiēdào hěn rènao.', exVi: 'Đường phố buổi tối rất nhộn nhịp.' },
        { w: '人口', ipa: 'rénkǒu', hv: 'nhân khẩu', vi: 'dân số', ex: '这个城市的人口越来越多。', exPy: 'Zhège chéngshì de rénkǒu yuèláiyuè duō.', exVi: 'Dân số thành phố này càng ngày càng đông.' },
        { w: '增加', ipa: 'zēngjiā', hv: 'tăng gia', vi: 'tăng thêm, gia tăng', ex: '今年学汉语的人增加了很多。', exPy: 'Jīnnián xué Hànyǔ de rén zēngjiāle hěn duō.', exVi: 'Năm nay số người học tiếng Trung tăng lên nhiều.' },
        { w: '农村', ipa: 'nóngcūn', hv: 'nông thôn', vi: 'nông thôn', ex: '我爷爷奶奶住在农村。', exPy: 'Wǒ yéye nǎinai zhù zài nóngcūn.', exVi: 'Ông bà tôi sống ở nông thôn.' }
      ],
      grammar: {
        title: '越来越, 越A越B và 又 / 再 / 还',
        explain: [
          '越来越 + tính từ / động từ tâm lý = càng ngày càng…: 天气越来越冷了。我越来越喜欢这个城市。Bản thân 越来越 đã chỉ mức độ tăng dần, nên KHÔNG thêm 很, 非常, 太 sau nó. Cuối câu thường có 了 vì đang nói về sự thay đổi.',
          '越 A 越 B = càng A càng B (B thay đổi theo A): 雨越下越大 (mưa càng lúc càng to), 汉语越学越有意思. Nếu hai vế có chủ ngữ khác nhau thì mỗi chủ ngữ đứng trước 越 của nó: 你越说，他越生气.',
          '又 yòu = lại, dùng cho việc lặp lại ĐÃ xảy ra (thường có 了): 他又迟到了. 再 zài = lại, nữa, dùng cho việc lặp lại SẼ xảy ra hoặc trong lời đề nghị, yêu cầu: 明天再来吧, 请再说一遍.',
          '还 hái = vẫn, vẫn còn (tình trạng chưa đổi): 他还住在农村. Khi nói ý định làm lại trong tương lai hay dùng 还 + 想 / 要 (+ 再): 我还想再去一次. Hỏi "còn… nữa không" cũng dùng 还: 你明年还来吗？'
        ],
        table: [
          ['Mẫu', 'Ví dụ', 'Nghĩa'],
          ['越来越 + Adj', '空气越来越好了。', 'Không khí càng ngày càng tốt.'],
          ['越 A 越 B', '这本书我越看越喜欢。', 'Cuốn sách này tôi càng đọc càng thích.'],
          ['又 + V + 了 (đã lặp lại)', '他又去上海了。', 'Anh ấy lại đi Thượng Hải rồi.'],
          ['再 + V (sẽ lặp lại)', '我们明年再来。', 'Sang năm chúng tôi lại đến.'],
          ['还 + 想 / 要 + V', '我还想再吃一碗。', 'Tôi vẫn muốn ăn thêm một bát nữa.']
        ],
        examples: [
          { t: '这几年，我们这儿的交通越来越方便了。', py: 'Zhè jǐ nián, wǒmen zhèr de jiāotōng yuèláiyuè fāngbiàn le.', vi: 'Mấy năm nay giao thông chỗ chúng tôi càng ngày càng thuận tiện.' },
          { t: '雨越下越大，我们明天再去吧。', py: 'Yǔ yuè xià yuè dà, wǒmen míngtiān zài qù ba.', vi: 'Mưa càng lúc càng to, để mai chúng ta hãy đi.' },
          { t: '上个星期他来过，今天又来了。', py: 'Shàng ge xīngqī tā láiguo, jīntiān yòu lái le.', vi: 'Tuần trước anh ấy đã đến, hôm nay lại đến nữa.' },
          { t: '我爷爷还住在农村，他不想搬到城市。', py: 'Wǒ yéye hái zhù zài nóngcūn, tā bù xiǎng bāndào chéngshì.', vi: 'Ông tôi vẫn sống ở nông thôn, ông không muốn chuyển lên thành phố.' },
          { t: '人越多，空气越不好。', py: 'Rén yuè duō, kōngqì yuè bù hǎo.', vi: 'Người càng đông, không khí càng kém.' }
        ],
        tip: 'Lỗi hay gặp: ✗ 天气越来越很冷 (thừa 很) → 天气越来越冷了; ✗ 昨天我再去了一次 (việc đã xảy ra phải dùng 又) → 昨天我又去了一次; ✗ 明天我又来 (việc chưa xảy ra dùng 再) → 明天我再来. Cẩn thận bẫy Hán Việt: 生活 (sinh hoạt) nghĩa là "cuộc sống", không phải "sinh hoạt tập thể"; 提高 (đề cao) nghĩa là "nâng cao" (提高水平 = nâng cao trình độ), không phải "đề cao, coi trọng".'
      },
      dialogue: [
        { s: '小林', t: '奶奶，我回来了！咱们村的变化真大啊！', py: 'Nǎinai, wǒ huílai le! Zánmen cūn de biànhuà zhēn dà a!', vi: 'Bà ơi, cháu về rồi! Làng mình thay đổi nhiều quá!' },
        { s: '奶奶', t: '是啊，这几年村里的生活越来越好了。新建了学校，路也修好了。', py: 'Shì a, zhè jǐ nián cūn li de shēnghuó yuèláiyuè hǎo le. Xīn jiànle xuéxiào, lù yě xiūhǎo le.', vi: 'Ừ, mấy năm nay cuộc sống trong làng càng ngày càng tốt. Xây mới trường học, đường cũng sửa xong rồi.' },
        { s: '小林', t: '以前我回家要坐五个小时汽车，现在坐高铁两个小时就到了。', py: 'Yǐqián wǒ huí jiā yào zuò wǔ ge xiǎoshí qìchē, xiànzài zuò gāotiě liǎng ge xiǎoshí jiù dào le.', vi: 'Trước đây cháu về nhà phải đi ô tô năm tiếng, giờ đi tàu cao tốc hai tiếng là tới.' },
        { s: '奶奶', t: '交通方便了，来村里玩儿的人也增加了。上个月你表哥又回来了一次。', py: 'Jiāotōng fāngbiàn le, lái cūn li wánr de rén yě zēngjiā le. Shàng ge yuè nǐ biǎogē yòu huílaile yí cì.', vi: 'Giao thông tiện rồi, người về làng chơi cũng đông thêm. Tháng trước anh họ cháu lại về một lần nữa.' },
        { s: '小林', t: '他春节刚回来过，怎么又回来了？', py: 'Tā Chūnjié gāng huílaiguo, zěnme yòu huílai le?', vi: 'Anh ấy vừa về hồi Tết mà, sao lại về nữa ạ?' },
        { s: '奶奶', t: '他说这里的空气新鲜，越住越舒服，下个月还要再来。', py: 'Tā shuō zhèli de kōngqì xīnxiān, yuè zhù yuè shūfu, xià ge yuè hái yào zài lái.', vi: 'Nó bảo không khí ở đây trong lành, càng ở càng thấy dễ chịu, tháng sau còn muốn về nữa.' },
        { s: '小林', t: '我也是，在城市里越住越累。这次我要多住几天。', py: 'Wǒ yě shì, zài chéngshì li yuè zhù yuè lèi. Zhè cì wǒ yào duō zhù jǐ tiān.', vi: 'Cháu cũng vậy, ở thành phố càng ở càng mệt. Lần này cháu sẽ ở thêm mấy ngày.' },
        { s: '奶奶', t: '好啊！明天奶奶带你去看看新建的公园。', py: 'Hǎo a! Míngtiān nǎinai dài nǐ qù kànkan xīn jiàn de gōngyuán.', vi: 'Tốt quá! Mai bà dẫn cháu đi xem công viên mới xây.' }
      ],
      exercises: [
        { type: 'mc', q: '天气___冷了，你多穿点儿衣服吧。', options: ['越来越', '又', '再'], answer: 0, explain: '越来越 + tính từ = càng ngày càng…: 越来越冷了.' },
        { type: 'mc', q: 'Câu nào đúng?', options: ['我的汉语越来越很好了。', '我的汉语越来越好了。', '我的汉语很越来越好了。'], answer: 1, explain: 'Sau 越来越 không thêm 很 / 非常.' },
        { type: 'mc', q: '他昨天迟到了，今天___迟到了。', options: ['再', '还', '又'], answer: 2, explain: 'Việc lặp lại đã xảy ra (có 了) → dùng 又.' },
        { type: 'mc', q: '这个问题我没听懂，请您___说一遍。', options: ['又', '再', '越'], answer: 1, explain: 'Lời đề nghị làm lại (chưa xảy ra) → dùng 再.' },
        { type: 'mc', q: '"生活" nghĩa là gì?', options: ['cuộc sống', 'sinh hoạt tập thể', 'sinh viên'], answer: 0, explain: '生活 (sinh hoạt) = cuộc sống; đừng hiểu theo nghĩa "sinh hoạt tập thể" của tiếng Việt.' },
        { type: 'mc', q: '我爷爷八十岁了，___住在农村，不想搬到城市。', options: ['又', '再', '还'], answer: 2, explain: '还 = vẫn, vẫn còn: tình trạng không thay đổi.' },
        { type: 'fill', q: '这几年，我们这儿的___很大。（Mấy năm nay, chỗ chúng tôi thay đổi rất nhiều.）', answer: ['变化', 'biànhuà', 'bianhua'], hint: 'biànhuà – sự thay đổi', explain: '变化很大 = thay đổi rất nhiều.' },
        { type: 'fill', q: '这本书我越看___喜欢。（Cuốn sách này tôi càng đọc càng thích.）', answer: ['越', 'yuè', 'yue'], hint: 'yuè – càng', explain: 'Mẫu 越 A 越 B = càng A càng B.' },
        { type: 'fill', q: '你的汉语___得真快！（Tiếng Trung của bạn tiến bộ nhanh thật!）', answer: ['进步', 'jìnbù', 'jinbu'], hint: 'jìnbù – tiến bộ', explain: '进步得很快 = tiến bộ rất nhanh.' },
        { type: 'fill', q: '多听多说，才能___汉语水平。（Nghe nhiều nói nhiều mới nâng cao được trình độ tiếng Trung.）', answer: ['提高', 'tígāo', 'tigao'], hint: 'tígāo – nâng cao', explain: '提高水平 = nâng cao trình độ.' },
        { type: 'fill', q: '农村的空气很___。（Không khí ở nông thôn rất trong lành.）', answer: ['新鲜', 'xīnxiān', 'xinxian'], hint: 'xīnxiān – tươi, trong lành', explain: '空气新鲜 = không khí trong lành.' },
        { type: 'order', vi: 'Giao thông càng ngày càng thuận tiện.', words: ['方便了', '越来越', '交通'], answer: '交通 越来越 方便了' },
        { type: 'order', vi: 'Mưa càng lúc càng to.', words: ['越大', '雨', '越下'], answer: '雨 越下 越大' },
        { type: 'order', vi: 'Ngày mai chúng ta lại đến nhé.', words: ['再来', '明天', '吧', '我们'], answer: '我们 明天 再来 吧', alt: ['明天 我们 再来 吧'] },
        { type: 'order', vi: 'Dân số thành phố này càng ngày càng đông.', words: ['人口', '越来越', '这个城市的', '多'], answer: '这个城市的 人口 越来越 多' },
        { type: 'order', vi: 'Hôm qua anh ấy lại đi Thượng Hải rồi.', words: ['又', '上海了', '去', '他', '昨天'], answer: '他 昨天 又 去 上海了', alt: ['昨天 他 又 去 上海了'] }
      ],
      reading: {
        title: '我的家乡变了',
        titleVi: 'Quê tôi đã đổi thay',
        text: [
          '我的家乡是一个小农村。十年以前，那里的交通很不方便，没有公共汽车，去城市要走两个小时的路。村里的年轻人越来越少，很多人都去城市工作了，只有老人和孩子留在家里。',
          '这几年，家乡的变化越来越大。村里新建了一条公路，每天都有公共汽车去城市。很多年轻人又回来了，有的开饭店，有的在网上卖水果。村里的人口增加了，大家的生活也越来越好。',
          '上个月我回家，奶奶高兴地说：“这里的空气新鲜，水果也好吃，城市里的人越来越喜欢来我们这儿玩儿。”我觉得家乡越变越漂亮了。明年春节，我还想再带朋友回来看看。'
        ],
        py: [
          'Wǒ de jiāxiāng shì yí ge xiǎo nóngcūn. Shí nián yǐqián, nàli de jiāotōng hěn bù fāngbiàn, méiyǒu gōnggòng qìchē, qù chéngshì yào zǒu liǎng ge xiǎoshí de lù. Cūn li de niánqīngrén yuèláiyuè shǎo, hěn duō rén dōu qù chéngshì gōngzuò le, zhǐyǒu lǎorén hé háizi liú zài jiā li.',
          'Zhè jǐ nián, jiāxiāng de biànhuà yuèláiyuè dà. Cūn li xīn jiànle yì tiáo gōnglù, měi tiān dōu yǒu gōnggòng qìchē qù chéngshì. Hěn duō niánqīngrén yòu huílai le, yǒude kāi fàndiàn, yǒude zài wǎngshang mài shuǐguǒ. Cūn li de rénkǒu zēngjiā le, dàjiā de shēnghuó yě yuèláiyuè hǎo.',
          'Shàng ge yuè wǒ huí jiā, nǎinai gāoxìng de shuō: “Zhèli de kōngqì xīnxiān, shuǐguǒ yě hǎochī, chéngshì li de rén yuèláiyuè xǐhuan lái wǒmen zhèr wánr.” Wǒ juéde jiāxiāng yuè biàn yuè piàoliang le. Míngnián Chūnjié, wǒ hái xiǎng zài dài péngyou huílai kànkan.'
        ],
        vi: [
          'Quê tôi là một vùng nông thôn nhỏ. Mười năm trước, giao thông ở đó rất bất tiện, không có xe buýt, lên thành phố phải đi bộ hai tiếng đồng hồ. Thanh niên trong làng càng ngày càng ít, nhiều người đã lên thành phố làm việc, chỉ có người già và trẻ con ở lại nhà.',
          'Mấy năm nay, quê tôi thay đổi càng ngày càng nhiều. Trong làng mới xây một con đường lớn, ngày nào cũng có xe buýt lên thành phố. Nhiều người trẻ lại quay về, có người mở quán ăn, có người bán hoa quả trên mạng. Dân số trong làng tăng lên, cuộc sống của mọi người cũng càng ngày càng tốt.',
          'Tháng trước tôi về nhà, bà vui vẻ nói: “Không khí ở đây trong lành, hoa quả cũng ngon, người thành phố càng ngày càng thích về chỗ chúng ta chơi.” Tôi thấy quê mình càng đổi càng đẹp. Tết năm sau, tôi vẫn muốn lại dẫn bạn bè về thăm.'
        ],
        questions: [
          { q: 'Mười năm trước, vì sao lên thành phố rất bất tiện?', options: ['Không có xe buýt, phải đi bộ hai tiếng', 'Đường hay bị tắc', 'Vé tàu quá đắt', 'Trời hay mưa'], answer: 0, explain: '没有公共汽车，去城市要走两个小时的路.' },
          { q: 'Mấy năm gần đây, nhiều người trẻ đã làm gì?', options: ['Lên thành phố làm việc', 'Quay về quê, mở quán ăn hoặc bán hoa quả trên mạng', 'Ra nước ngoài du học', 'Đi xây trường học'], answer: 1, explain: '很多年轻人又回来了，有的开饭店，有的在网上卖水果.' },
          { q: 'Câu nào ĐÚNG theo bài?', options: ['Dân số trong làng giảm đi', 'Trong làng chỉ còn người già', 'Người thành phố ngày càng thích về làng chơi', 'Làng vẫn chưa có đường lớn'], answer: 2, explain: '城市里的人越来越喜欢来我们这儿玩儿.' },
          { q: 'Tết năm sau tác giả muốn làm gì?', options: ['Ở lại thành phố', 'Đón bà lên thành phố', 'Mở một quán ăn', 'Lại dẫn bạn bè về thăm quê'], answer: 3, explain: '明年春节，我还想再带朋友回来看看.' }
        ]
      }
    }
  },

  // zh-hsk3-6b: Nhờ vả & sự cố trong nhà (câu kiêm ngữ 让/请/叫, câu bị động 被)
  {
    after: 'zh-hsk3-6',
    unit: {
      id: 'zh-hsk3-6b',
      icon: '🙏',
      title: 'Nhờ vả & sự cố trong nhà',
      goal: 'Nhờ người khác làm giúp, kể lại ai bảo ai làm gì (让 / 请 / 叫) và kể sự cố đã xảy ra bằng câu bị động 被.',
      vocab: [
        { w: '让', ipa: 'ràng', hv: 'nhượng', vi: 'bảo, để cho (ai làm gì)', ex: '妈妈让我早点儿回家。', exPy: 'Māma ràng wǒ zǎo diǎnr huí jiā.', exVi: 'Mẹ bảo tôi về nhà sớm một chút.' },
        { w: '请', ipa: 'qǐng', hv: 'thỉnh', vi: 'mời; nhờ (lịch sự)', ex: '周末我想请你吃饭。', exPy: 'Zhōumò wǒ xiǎng qǐng nǐ chī fàn.', exVi: 'Cuối tuần tôi muốn mời bạn ăn cơm.' },
        { w: '帮', ipa: 'bāng', hv: 'bang', vi: 'giúp (ai làm việc gì)', ex: '你能帮我拿一下吗？', exPy: 'Nǐ néng bāng wǒ ná yíxià ma?', exVi: 'Bạn cầm giúp tôi một chút được không?' },
        { w: '修', ipa: 'xiū', hv: 'tu', vi: 'sửa', ex: '师傅明天来修空调。', exPy: 'Shīfu míngtiān lái xiū kōngtiáo.', exVi: 'Ngày mai thợ đến sửa điều hoà.' },
        { w: '坏', ipa: 'huài', hv: 'hoại', vi: 'hỏng; xấu', ex: '我的手机坏了。', exPy: 'Wǒ de shǒujī huài le.', exVi: 'Điện thoại của tôi hỏng rồi.' },
        { w: '破', ipa: 'pò', hv: 'phá', vi: 'vỡ; rách', ex: '窗户的玻璃破了。', exPy: 'Chuānghu de bōli pò le.', exVi: 'Kính cửa sổ vỡ rồi.' },
        { w: '掉', ipa: 'diào', hv: 'điệu', vi: 'rơi; mất', ex: '我的钥匙掉在地上了。', exPy: 'Wǒ de yàoshi diào zài dìshang le.', exVi: 'Chìa khoá của tôi rơi xuống đất rồi.' },
        { w: '弄', ipa: 'nòng', hv: 'lộng', vi: 'làm (cho), nghịch', ex: '谁把我的电脑弄坏了？', exPy: 'Shéi bǎ wǒ de diànnǎo nònghuài le?', exVi: 'Ai làm hỏng máy tính của tôi vậy?' },
        { w: '照顾', ipa: 'zhàogu', hv: 'chiếu cố', vi: 'chăm sóc', ex: '我不在家的时候，请你帮我照顾一下我的猫。', exPy: 'Wǒ bú zài jiā de shíhou, qǐng nǐ bāng wǒ zhàogu yíxià wǒ de māo.', exVi: 'Lúc tôi không có nhà, nhờ bạn chăm giúp con mèo của tôi.' },
        { w: '打扫', ipa: 'dǎsǎo', hv: 'đả tảo', vi: 'quét dọn', ex: '周末我们一起打扫房间吧。', exPy: 'Zhōumò wǒmen yìqǐ dǎsǎo fángjiān ba.', exVi: 'Cuối tuần chúng ta cùng dọn phòng nhé.' },
        { w: '钱包', ipa: 'qiánbāo', hv: 'tiền bao', vi: 'ví tiền', ex: '我的钱包掉在出租车上了。', exPy: 'Wǒ de qiánbāo diào zài chūzūchē shang le.', exVi: 'Ví của tôi rơi trên xe taxi rồi.' },
        { w: '吹', ipa: 'chuī', hv: 'xuy', vi: 'thổi', ex: '外面风很大，我的帽子被吹走了。', exPy: 'Wàimiàn fēng hěn dà, wǒ de màozi bèi chuīzǒu le.', exVi: 'Bên ngoài gió to, mũ của tôi bị thổi bay mất.' },
        { w: '树', ipa: 'shù', hv: 'thụ', vi: 'cây', ex: '楼下那棵树被大风吹倒了。', exPy: 'Lóu xià nà kē shù bèi dàfēng chuīdǎo le.', exVi: 'Cái cây dưới nhà bị gió to thổi đổ rồi.' },
        { w: '被', ipa: 'bèi', hv: 'bị', vi: 'bị, được (bị động)', ex: '那件衣服被我洗坏了。', exPy: 'Nà jiàn yīfu bèi wǒ xǐhuài le.', exVi: 'Chiếc áo đó bị tôi giặt hỏng rồi.' },
        { w: '小心', ipa: 'xiǎoxīn', hv: 'tiểu tâm', vi: 'cẩn thận', ex: '小心！地上有水。', exPy: 'Xiǎoxīn! Dìshang yǒu shuǐ.', exVi: 'Cẩn thận! Dưới sàn có nước.' },
        { w: '洗衣机', ipa: 'xǐyījī', hv: 'tẩy y cơ', vi: 'máy giặt', ex: '洗衣机又坏了。', exPy: 'Xǐyījī yòu huài le.', exVi: 'Máy giặt lại hỏng rồi.' },
        { w: '帮助', ipa: 'bāngzhù', hv: 'bang trợ', vi: 'giúp đỡ; sự giúp đỡ', ex: '谢谢你的帮助！', exPy: 'Xièxie nǐ de bāngzhù!', exVi: 'Cảm ơn sự giúp đỡ của bạn!' },
        { w: '房东', ipa: 'fángdōng', hv: 'phòng đông', vi: 'chủ nhà (cho thuê)', ex: '房东让我们每个月五号交房租。', exPy: 'Fángdōng ràng wǒmen měi ge yuè wǔ hào jiāo fángzū.', exVi: 'Chủ nhà bảo chúng tôi nộp tiền nhà vào ngày mùng 5 hằng tháng.' },
        { w: '关', ipa: 'guān', hv: 'quan', vi: 'đóng; tắt', ex: '出门以前别忘了关窗户。', exPy: 'Chūmén yǐqián bié wàngle guān chuānghu.', exVi: 'Trước khi ra khỏi nhà đừng quên đóng cửa sổ.' },
        { w: '着急', ipa: 'zháojí', hv: 'trước cấp', vi: 'sốt ruột, cuống', ex: '别着急，我马上来帮你。', exPy: 'Bié zháojí, wǒ mǎshàng lái bāng nǐ.', exVi: 'Đừng cuống, tôi đến giúp bạn ngay.' }
      ],
      grammar: {
        title: 'Câu kiêm ngữ 让 / 请 / 叫 và câu bị động 被',
        explain: [
          'Câu kiêm ngữ: A + 让 / 叫 / 请 + B + động từ (+ tân ngữ). B vừa là tân ngữ của 让 / 叫 / 请, vừa là chủ ngữ của động từ phía sau: 妈妈让我去买菜 (mẹ bảo tôi đi mua rau). 让 = bảo, để cho (trung tính); 叫 = bảo, gọi (khẩu ngữ, hơi ra lệnh); 请 = mời, nhờ (lịch sự).',
          'Phủ định đặt TRƯỚC 让 / 叫, không đặt trước động từ phía sau: 爸爸不让我玩儿手机 (bố không cho tôi chơi điện thoại); 老师没叫我回答 (thầy không gọi tôi trả lời).',
          'Câu bị động: Đối tượng chịu tác động + 被 (+ người/vật gây ra) + động từ + thành phần khác. Động từ sau 被 không đứng trơ trọi mà phải kèm 了, bổ ngữ kết quả hoặc xu hướng: 树被风吹倒了, 钱包被人拿走了. Phủ định: 没被 + …: 我的车没被吹坏.',
          'Trong khẩu ngữ, 让 và 叫 cũng làm dấu bị động (khi đó phải nêu người gây ra): 我的自行车叫人骑走了. Phân biệt theo nghĩa: 我让他修电脑 (tôi BẢO anh ấy sửa máy tính) ≠ 电脑让他弄坏了 (máy tính BỊ anh ấy làm hỏng). Bài HSK4 "Tin tức" sẽ ôn lại và mở rộng câu 被.'
        ],
        table: [
          ['Mẫu', 'Ví dụ', 'Nghĩa'],
          ['A + 让 / 叫 + B + V', '房东让我们关好窗户。', 'Chủ nhà bảo chúng tôi đóng kỹ cửa sổ.'],
          ['A + 请 + B + V', '我想请你帮我照顾小狗。', 'Tôi muốn nhờ bạn chăm giúp con chó nhỏ.'],
          ['A + 不 / 没 + 让 + B + V', '妈妈不让我一个人出去。', 'Mẹ không cho tôi ra ngoài một mình.'],
          ['A + 被 + (B) + V + …', '树被大风吹倒了。', 'Cái cây bị gió to thổi đổ rồi.'],
          ['A + 没被 + V + …', '我的车没被吹坏。', 'Xe của tôi không bị gió thổi hỏng.']
        ],
        examples: [
          { t: '老师叫我们明天早点儿来。', py: 'Lǎoshī jiào wǒmen míngtiān zǎo diǎnr lái.', vi: 'Thầy bảo chúng tôi ngày mai đến sớm một chút.' },
          { t: '我请邻居帮我照顾一下我的猫。', py: 'Wǒ qǐng línjū bāng wǒ zhàogu yíxià wǒ de māo.', vi: 'Tôi nhờ hàng xóm chăm giúp con mèo của tôi.' },
          { t: '窗户被大风吹坏了，房东马上叫人来修。', py: 'Chuānghu bèi dàfēng chuīhuài le, fángdōng mǎshàng jiào rén lái xiū.', vi: 'Cửa sổ bị gió to thổi hỏng, chủ nhà lập tức gọi người đến sửa.' },
          { t: '我的钱包掉在出租车上，被司机送回来了。', py: 'Wǒ de qiánbāo diào zài chūzūchē shang, bèi sījī sòng huílai le.', vi: 'Ví của tôi rơi trên taxi, được tài xế mang trả lại.' },
          { t: '爸爸不让我玩儿太长时间电脑。', py: 'Bàba bú ràng wǒ wánr tài cháng shíjiān diànnǎo.', vi: 'Bố không cho tôi chơi máy tính quá lâu.' }
        ],
        tip: 'Lỗi hay gặp: ✗ 妈妈让我不去 khi muốn nói "mẹ không cho tôi đi" → 妈妈不让我去; ✗ 衣服被洗 (động từ đứng trơ) → 衣服被我洗坏了; ✗ 手机叫弄坏了 (dùng 叫 / 让 bị động phải nêu người gây ra) → 手机叫弟弟弄坏了. Bẫy Hán Việt: 照顾 (chiếu cố) nghĩa là "chăm sóc", không phải "chiếu cố, nâng đỡ" như tiếng Việt; 小心 (tiểu tâm) là "cẩn thận", không phải "hẹp hòi".'
      },
      dialogue: [
        { s: '小林', t: '喂，王阿姨，我是小林。不好意思，又麻烦您了。', py: 'Wéi, Wáng āyí, wǒ shì Xiǎo Lín. Bù hǎoyìsi, yòu máfan nín le.', vi: 'Alô, cô Vương ạ, cháu là Tiểu Lâm. Ngại quá, cháu lại làm phiền cô rồi.' },
        { s: '王阿姨', t: '别着急，慢慢说。发生什么事了？', py: 'Bié zháojí, mànmàn shuō. Fāshēng shénme shì le?', vi: 'Đừng cuống, cứ từ từ nói. Có chuyện gì thế?' },
        { s: '小林', t: '昨天晚上风太大，阳台的窗户被吹破了，地上都是水。', py: 'Zuótiān wǎnshang fēng tài dà, yángtái de chuānghu bèi chuīpò le, dìshang dōu shì shuǐ.', vi: 'Tối qua gió to quá, cửa sổ ban công bị gió thổi vỡ, dưới sàn toàn là nước.' },
        { s: '王阿姨', t: '你没受伤吧？小心点儿，别用手拿玻璃。', py: 'Nǐ méi shòushāng ba? Xiǎoxīn diǎnr, bié yòng shǒu ná bōli.', vi: 'Cháu không bị thương chứ? Cẩn thận nhé, đừng cầm kính bằng tay.' },
        { s: '小林', t: '我没事。还有，洗衣机又不动了。您能不能叫师傅来修一下？', py: 'Wǒ méi shì. Hái yǒu, xǐyījī yòu bú dòng le. Nín néng bu néng jiào shīfu lái xiū yíxià?', vi: 'Cháu không sao. Còn nữa, máy giặt lại không chạy rồi. Cô có thể gọi thợ đến sửa giúp không ạ?' },
        { s: '王阿姨', t: '没问题，我下午就让师傅过去。你在家等他吧。', py: 'Méi wèntí, wǒ xiàwǔ jiù ràng shīfu guòqu. Nǐ zài jiā děng tā ba.', vi: 'Không vấn đề gì, chiều nay cô bảo thợ qua ngay. Cháu ở nhà đợi anh ấy nhé.' },
        { s: '小林', t: '太好了！楼下那棵大树也被风吹倒了，您知道吗？', py: 'Tài hǎo le! Lóu xià nà kē dà shù yě bèi fēng chuīdǎo le, nín zhīdào ma?', vi: 'Tốt quá! Cái cây to dưới nhà cũng bị gió thổi đổ rồi, cô biết chưa ạ?' },
        { s: '王阿姨', t: '知道，我已经请人去打扫了。以后刮大风的时候，记得关好窗户。', py: 'Zhīdào, wǒ yǐjīng qǐng rén qù dǎsǎo le. Yǐhòu guā dàfēng de shíhou, jìde guānhǎo chuānghu.', vi: 'Cô biết rồi, cô đã nhờ người đi dọn. Sau này lúc có gió to, nhớ đóng kỹ cửa sổ nhé.' }
      ],
      exercises: [
        { type: 'mc', q: '妈妈___我早点儿回家。（Mẹ bảo tôi về nhà sớm.）', options: ['让', '被', '把'], answer: 0, explain: 'A + 让 + B + V: mẹ (A) bảo tôi (B) về nhà.' },
        { type: 'mc', q: 'Câu nào nghĩa là "Bố không cho tôi chơi điện thoại"?', options: ['爸爸让我不玩儿手机。', '爸爸不让我玩儿手机。', '爸爸让不我玩儿手机。'], answer: 1, explain: 'Phủ định đặt trước 让: 不让 + B + V.' },
        { type: 'mc', q: '楼下的树___大风吹倒了。', options: ['请', '把', '被'], answer: 2, explain: 'Cái cây chịu tác động của gió → câu bị động: 树被大风吹倒了.' },
        { type: 'mc', q: 'Câu nào đúng?', options: ['我的钱包被拿。', '我的钱包被人拿走了。', '我的钱包被拿人走了。'], answer: 1, explain: 'Động từ sau 被 phải kèm thành phần khác (走了); người gây ra đứng ngay sau 被.' },
        { type: 'mc', q: '"照顾" nghĩa là gì?', options: ['chăm sóc', 'nâng đỡ, ưu ái', 'quét dọn'], answer: 0, explain: '照顾 (chiếu cố) = chăm sóc: 照顾孩子, 照顾老人.' },
        { type: 'mc', q: 'Câu nào có 让 mang nghĩa BỊ ĐỘNG?', options: ['老师让我们读课文。', '房东让我关窗户。', '我的自行车让人骑走了。'], answer: 2, explain: 'Xe đạp bị người ta đạp đi mất → 让 = 被 (bị động khẩu ngữ). Hai câu kia là "bảo ai làm gì".' },
        { type: 'fill', q: '周末我想___你吃饭。（Cuối tuần tôi muốn mời bạn ăn cơm.）', answer: ['请', 'qǐng', 'qing'], hint: 'qǐng – mời', explain: '请 + người + V = mời ai làm gì.' },
        { type: 'fill', q: '我的手机___在地上了。（Điện thoại của tôi rơi xuống đất rồi.）', answer: ['掉', 'diào', 'diao'], hint: 'diào – rơi', explain: '掉在地上 = rơi xuống đất.' },
        { type: 'fill', q: '周末我们一起___房间吧。（Cuối tuần chúng ta cùng dọn phòng nhé.）', answer: ['打扫', 'dǎsǎo', 'dasao'], hint: 'dǎsǎo – quét dọn', explain: '打扫房间 = dọn phòng.' },
        { type: 'fill', q: '___！地上有水。（Cẩn thận! Dưới sàn có nước.）', answer: ['小心', 'xiǎoxīn', 'xiaoxin'], hint: 'xiǎoxīn – cẩn thận', explain: '小心 (tiểu tâm) = cẩn thận.' },
        { type: 'fill', q: '那件衣服___我洗坏了。（Chiếc áo đó bị tôi giặt hỏng rồi.）', answer: ['被', 'bèi', 'bei', '让', 'ràng', 'rang', '叫', 'jiào', 'jiao'], hint: 'bèi – bị', explain: 'Câu bị động: A + 被 + người + V + kết quả (洗坏了).' },
        { type: 'order', vi: 'Chủ nhà bảo chúng tôi đóng cửa sổ.', words: ['关', '我们', '房东', '让', '窗户'], answer: '房东 让 我们 关 窗户' },
        { type: 'order', vi: 'Cái cây bị gió thổi đổ rồi.', words: ['吹倒了', '风', '被', '树'], answer: '树 被 风 吹倒了' },
        { type: 'order', vi: 'Tôi nhờ hàng xóm chăm sóc con mèo.', words: ['照顾', '我', '邻居', '猫', '请'], answer: '我 请 邻居 照顾 猫' },
        { type: 'order', vi: 'Mẹ không cho tôi ra ngoài một mình.', words: ['一个人', '不让', '妈妈', '出去', '我'], answer: '妈妈 不让 我 一个人 出去' },
        { type: 'order', vi: 'Máy tính bị em trai làm hỏng rồi.', words: ['弄坏了', '弟弟', '电脑', '被'], answer: '电脑 被 弟弟 弄坏了' }
      ],
      reading: {
        title: '倒霉的一天',
        titleVi: 'Một ngày xui xẻo',
        text: [
          '上个星期五真是倒霉的一天。早上我出门的时候，外面刮着大风，我的帽子被风吹走了。我去追帽子，结果手机掉在地上，摔坏了。',
          '到了公司，经理让我马上写一个报告。我很着急，可是电脑也坏了。同事小王说：“别着急，我帮你修。”他修了半个小时，终于修好了。我请他中午吃饭，谢谢他的帮助。',
          '晚上回到家，我发现阳台的窗户没关，雨水把地弄得很脏。我只好打扫了一个小时，累得饭都不想吃了。睡觉以前，我对自己说：“明天出门以前，一定要关好窗户，也要小心一点儿！”'
        ],
        py: [
          'Shàng ge xīngqīwǔ zhēn shì dǎoméi de yì tiān. Zǎoshang wǒ chūmén de shíhou, wàimiàn guāzhe dàfēng, wǒ de màozi bèi fēng chuīzǒu le. Wǒ qù zhuī màozi, jiéguǒ shǒujī diào zài dìshang, shuāihuài le.',
          'Dàole gōngsī, jīnglǐ ràng wǒ mǎshàng xiě yí ge bàogào. Wǒ hěn zháojí, kěshì diànnǎo yě huài le. Tóngshì Xiǎo Wáng shuō: “Bié zháojí, wǒ bāng nǐ xiū.” Tā xiūle bàn ge xiǎoshí, zhōngyú xiūhǎo le. Wǒ qǐng tā zhōngwǔ chī fàn, xièxie tā de bāngzhù.',
          'Wǎnshang huídào jiā, wǒ fāxiàn yángtái de chuānghu méi guān, yǔshuǐ bǎ dì nòng de hěn zāng. Wǒ zhǐhǎo dǎsǎole yí ge xiǎoshí, lèi de fàn dōu bù xiǎng chī le. Shuìjiào yǐqián, wǒ duì zìjǐ shuō: “Míngtiān chūmén yǐqián, yídìng yào guānhǎo chuānghu, yě yào xiǎoxīn yìdiǎnr!”'
        ],
        vi: [
          'Thứ Sáu tuần trước thật là một ngày xui xẻo. Buổi sáng lúc tôi ra khỏi nhà, bên ngoài đang có gió to, mũ của tôi bị gió thổi bay mất. Tôi chạy đuổi theo mũ, kết quả điện thoại rơi xuống đất, vỡ hỏng luôn.',
          'Đến công ty, giám đốc bảo tôi viết ngay một bản báo cáo. Tôi rất sốt ruột, nhưng máy tính cũng hỏng. Đồng nghiệp Tiểu Vương nói: “Đừng cuống, mình sửa giúp cậu.” Cậu ấy sửa nửa tiếng, cuối cùng cũng sửa xong. Tôi mời cậu ấy ăn trưa để cảm ơn sự giúp đỡ.',
          'Buổi tối về đến nhà, tôi phát hiện cửa sổ ban công chưa đóng, nước mưa làm sàn nhà bẩn hết. Tôi đành phải dọn dẹp một tiếng đồng hồ, mệt đến mức chẳng muốn ăn cơm nữa. Trước khi đi ngủ, tôi tự nhủ: “Ngày mai trước khi ra khỏi nhà, nhất định phải đóng kỹ cửa sổ, và phải cẩn thận hơn một chút!”'
        ],
        questions: [
          { q: 'Sáng thứ Sáu, chuyện gì đã xảy ra với chiếc mũ?', options: ['Bị gió thổi bay mất', 'Bị rơi xuống nước', 'Bị người ta lấy mất', 'Bị bỏ quên ở công ty'], answer: 0, explain: '我的帽子被风吹走了.' },
          { q: 'Ai đã giúp tác giả sửa máy tính?', options: ['Giám đốc', 'Chủ nhà', 'Đồng nghiệp Tiểu Vương', 'Thợ sửa máy'], answer: 2, explain: '同事小王说：“别着急，我帮你修。”' },
          { q: 'Vì sao buổi tối tác giả phải dọn dẹp một tiếng?', options: ['Vì chủ nhà bảo dọn', 'Vì cửa sổ ban công không đóng, nước mưa làm sàn bẩn', 'Vì có khách đến chơi', 'Vì máy giặt bị hỏng'], answer: 1, explain: '阳台的窗户没关，雨水把地弄得很脏.' },
          { q: 'Tác giả tự nhắc mình điều gì?', options: ['Mua điện thoại mới', 'Không đi làm nữa', 'Mời đồng nghiệp ăn tối', 'Trước khi ra khỏi nhà phải đóng kỹ cửa sổ, cẩn thận hơn'], answer: 3, explain: '明天出门以前，一定要关好窗户，也要小心一点儿.' }
        ]
      }
    }
  }
];
