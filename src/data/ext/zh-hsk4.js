// Bổ sung bài học tiếng Trung — HSK4 (từ vựng thêm, bài tập, bài đọc)
export default {
  // ───────────────────────── HSK4-1: Giả định & ước muốn ─────────────────────────
  'zh-hsk4-1': {
    vocab: [
      { w: '未来', ipa: 'wèilái', hv: 'vị lai', vi: 'tương lai', ex: '我对未来充满了希望。', exPy: 'Wǒ duì wèilái chōngmǎnle xīwàng.', exVi: 'Tôi tràn đầy hy vọng vào tương lai.' },
      { w: '追求', ipa: 'zhuīqiú', hv: 'truy cầu', vi: 'theo đuổi', ex: '年轻人应该勇敢地追求自己的梦想。', exPy: 'Niánqīngrén yīnggāi yǒnggǎn de zhuīqiú zìjǐ de mèngxiǎng.', exVi: 'Người trẻ nên dũng cảm theo đuổi ước mơ của mình.' },
      { w: '奋斗', ipa: 'fèndòu', hv: 'phấn đấu', vi: 'phấn đấu, nỗ lực hết mình', ex: '为了将来的生活，他每天都在奋斗。', exPy: 'Wèile jiānglái de shēnghuó, tā měi tiān dōu zài fèndòu.', exVi: 'Vì cuộc sống sau này, ngày nào anh ấy cũng đang phấn đấu.' },
      { w: '期待', ipa: 'qīdài', hv: 'kỳ đãi', vi: 'mong chờ, kỳ vọng', ex: '我很期待下个月的旅行。', exPy: 'Wǒ hěn qīdài xià ge yuè de lǚxíng.', exVi: 'Tôi rất mong chờ chuyến du lịch tháng sau.' },
      { w: '万一', ipa: 'wànyī', hv: 'vạn nhất', vi: 'lỡ như, nhỡ may', ex: '带上伞吧，万一下雨呢？', exPy: 'Dàishang sǎn ba, wànyī xià yǔ ne?', exVi: 'Mang ô theo đi, lỡ trời mưa thì sao?' },
      { w: '哪怕', ipa: 'nǎpà', hv: '', vi: 'cho dù, dù cho (khẩu ngữ)', ex: '哪怕只有一点希望，我也要试一试。', exPy: 'Nǎpà zhǐ yǒu yìdiǎn xīwàng, wǒ yě yào shì yi shì.', exVi: 'Dù chỉ có một chút hy vọng, tôi cũng phải thử một lần.' },
      { w: '勇气', ipa: 'yǒngqì', hv: 'dũng khí', vi: 'lòng can đảm, dũng khí', ex: '我终于有勇气告诉她我的想法了。', exPy: 'Wǒ zhōngyú yǒu yǒngqì gàosu tā wǒ de xiǎngfǎ le.', exVi: 'Cuối cùng tôi cũng có can đảm nói với cô ấy suy nghĩ của mình.' },
      { w: '失败', ipa: 'shībài', hv: 'thất bại', vi: 'thất bại', ex: '失败是成功之母。', exPy: 'Shībài shì chénggōng zhī mǔ.', exVi: 'Thất bại là mẹ thành công.' },
      { w: '想象', ipa: 'xiǎngxiàng', hv: 'tưởng tượng', vi: 'tưởng tượng', ex: '我无法想象没有手机的生活。', exPy: 'Wǒ wúfǎ xiǎngxiàng méiyǒu shǒujī de shēnghuó.', exVi: 'Tôi không thể tưởng tượng cuộc sống không có điện thoại.' },
      { w: '说不定', ipa: 'shuōbudìng', hv: '', vi: 'không chừng, biết đâu', ex: '别着急，说不定他明天就回来了。', exPy: 'Bié zháojí, shuōbudìng tā míngtiān jiù huílai le.', exVi: 'Đừng sốt ruột, biết đâu ngày mai anh ấy đã về rồi.' }
    ],
    exercises: [
      { type: 'mc', q: '___下雨，我们就在家看电影吧。(lỡ như trời mưa)', options: ['即使', '万一', '哪怕'], answer: 1, explain: '万一 = lỡ như, nhỡ may — nói về khả năng nhỏ, thường là điều không mong muốn; vế sau dùng 就.' },
      { type: 'mc', q: '哪怕工作再忙，他___每天锻炼。', options: ['就', '才', '也'], answer: 2, explain: '哪怕…也… giống 即使…也… (cho dù… vẫn…), nhưng mang màu khẩu ngữ hơn.' },
      { type: 'fill', q: '他鼓起___，第一次在大家面前唱歌。', answer: ['勇气', 'yǒngqì', 'yongqi'], hint: 'lòng can đảm (yǒngqì)', explain: '鼓起勇气 = lấy hết can đảm.' },
      { type: 'order', vi: 'Tôi rất mong chờ cuộc sống đại học.', words: ['大学生活', '很', '我', '期待'], answer: '我 很 期待 大学生活' },
      { type: 'mc', q: '"说不定" gần nghĩa nhất với:', options: ['一定', '也许', '从来不'], answer: 1, explain: '说不定 = không chừng, biết đâu — gần nghĩa 也许 / 可能.' },
      { type: 'fill', q: '年轻人应该勇敢地___自己的梦想。', answer: ['追求', 'zhuīqiú', 'zhuiqiu'], hint: 'theo đuổi (zhuīqiú)', explain: '追求梦想 = theo đuổi ước mơ.' },
      { type: 'order', vi: 'Dù có thất bại, tôi cũng không hối hận.', words: ['也', '哪怕', '不后悔', '失败了，', '我'], answer: '哪怕 失败了， 我 也 不后悔', alt: ['我 哪怕 失败了， 也 不后悔'] },
      { type: 'mc', q: '我无法___十年以后的自己是什么样子。', options: ['奋斗', '想象', '期待'], answer: 1, explain: '想象 = tưởng tượng; 奋斗 = phấn đấu; 期待 = mong chờ.' }
    ],
    reading: {
      title: '假如能回到十八岁',
      titleVi: 'Nếu được quay lại tuổi mười tám',
      text: [
        '上个星期，我们班的老师给大家出了一个作文题目：“假如你能回到十八岁，你会做什么？”有的同学说要更努力地学习，有的同学说要多去旅游，看看外面的世界。',
        '我的同桌小林说，要是能回到十八岁，她一定会选择自己喜欢的专业。当时她想学画画，可是父母担心她将来找不到工作，她就放弃了。现在她在银行上班，工资不错，但是每天都过得不太开心。她说：“哪怕那时候失败了，我也不会像现在这么后悔。”',
        '我想了很久。说实话，我很难想象如果当时做了别的选择，现在的生活会是什么样子。十八岁的时候，我胆子很小，连在大家面前说话都会脸红。要是那时候我能多一点儿勇气就好了，说不定我会认识更多的朋友，也会去追求更多的机会。',
        '不过，后来我明白了一个道理：过去的事情已经没办法改变，但是未来还在我们自己手里。即使今天已经不是十八岁，我们也可以继续奋斗。现在，我每天下班以后都去学一个小时的汉语，因为我期待有一天能用汉语和中国朋友聊天。'
      ],
      py: [
        'Shàng ge xīngqī, wǒmen bān de lǎoshī gěi dàjiā chūle yí ge zuòwén tímù: “Jiǎrú nǐ néng huídào shíbā suì, nǐ huì zuò shénme?” Yǒu de tóngxué shuō yào gèng nǔlì de xuéxí, yǒu de tóngxué shuō yào duō qù lǚyóu, kànkan wàimian de shìjiè.',
        'Wǒ de tóngzhuō Xiǎo Lín shuō, yàoshi néng huídào shíbā suì, tā yídìng huì xuǎnzé zìjǐ xǐhuan de zhuānyè. Dāngshí tā xiǎng xué huàhuà, kěshì fùmǔ dānxīn tā jiānglái zhǎo bu dào gōngzuò, tā jiù fàngqì le. Xiànzài tā zài yínháng shàngbān, gōngzī búcuò, dànshì měi tiān dōu guò de bú tài kāixīn. Tā shuō: “Nǎpà nà shíhou shībài le, wǒ yě bú huì xiàng xiànzài zhème hòuhuǐ.”',
        'Wǒ xiǎngle hěn jiǔ. Shuō shíhuà, wǒ hěn nán xiǎngxiàng rúguǒ dāngshí zuòle bié de xuǎnzé, xiànzài de shēnghuó huì shì shénme yàngzi. Shíbā suì de shíhou, wǒ dǎnzi hěn xiǎo, lián zài dàjiā miànqián shuōhuà dōu huì liǎnhóng. Yàoshi nà shíhou wǒ néng duō yìdiǎnr yǒngqì jiù hǎo le, shuōbudìng wǒ huì rènshi gèng duō de péngyou, yě huì qù zhuīqiú gèng duō de jīhuì.',
        'Búguò, hòulái wǒ míngbaile yí ge dàoli: guòqù de shìqing yǐjīng méi bànfǎ gǎibiàn, dànshì wèilái hái zài wǒmen zìjǐ shǒu li. Jíshǐ jīntiān yǐjīng bú shì shíbā suì, wǒmen yě kěyǐ jìxù fèndòu. Xiànzài, wǒ měi tiān xiàbān yǐhòu dōu qù xué yí ge xiǎoshí de Hànyǔ, yīnwèi wǒ qīdài yǒu yì tiān néng yòng Hànyǔ hé Zhōngguó péngyou liáotiān.'
      ],
      vi: [
        'Tuần trước, thầy giáo lớp chúng tôi ra cho cả lớp một đề tập làm văn: “Giả sử bạn được quay lại tuổi mười tám, bạn sẽ làm gì?” Có bạn nói sẽ học hành chăm chỉ hơn, có bạn nói sẽ đi du lịch nhiều hơn để ngắm nhìn thế giới bên ngoài.',
        'Tiểu Lâm, bạn ngồi cùng bàn với tôi, nói rằng nếu được quay lại tuổi mười tám, cô ấy nhất định sẽ chọn ngành mình thích. Hồi đó cô muốn học vẽ, nhưng bố mẹ lo sau này cô không tìm được việc, thế là cô từ bỏ. Bây giờ cô làm ở ngân hàng, lương khá, nhưng ngày nào cũng sống không vui lắm. Cô nói: “Cho dù hồi đó có thất bại, mình cũng sẽ không hối hận như bây giờ.”',
        'Tôi nghĩ rất lâu. Nói thật, tôi khó mà tưởng tượng được nếu hồi đó chọn khác đi thì cuộc sống bây giờ sẽ ra sao. Năm mười tám tuổi, tôi rất nhát, đến nói chuyện trước mặt mọi người cũng đỏ mặt. Giá mà hồi đó tôi can đảm hơn một chút, biết đâu tôi đã quen thêm nhiều bạn bè và cũng dám theo đuổi nhiều cơ hội hơn.',
        'Nhưng về sau tôi hiểu ra một điều: chuyện quá khứ không thể thay đổi được nữa, còn tương lai vẫn nằm trong tay chính chúng ta. Cho dù hôm nay không còn mười tám tuổi, chúng ta vẫn có thể tiếp tục phấn đấu. Giờ đây, mỗi ngày sau giờ làm tôi đều đi học tiếng Trung một tiếng, vì tôi mong một ngày nào đó có thể trò chuyện với bạn bè Trung Quốc bằng tiếng Trung.'
      ],
      questions: [
        { q: 'Đề tập làm văn mà thầy giáo ra là gì?', options: ['Ước mơ lớn nhất của bạn là gì?', 'Nếu được quay lại tuổi mười tám, bạn sẽ làm gì?', 'Bạn muốn đi du lịch ở đâu?', 'Hãy kể về người bạn thân nhất của bạn.'], answer: 1, explain: 'Đoạn 1: 假如你能回到十八岁，你会做什么？' },
        { q: 'Vì sao hồi đó Tiểu Lâm từ bỏ việc học vẽ?', options: ['Cô ấy không còn thích vẽ nữa', 'Cô ấy thi trượt ngành vẽ', 'Bố mẹ lo sau này cô khó tìm được việc', 'Ngân hàng trả lương cao hơn'], answer: 2, explain: 'Đoạn 2: 父母担心她将来找不到工作，她就放弃了。' },
        { q: 'Có thể suy ra tác giả năm mười tám tuổi là người thế nào?', options: ['Khá nhút nhát, thiếu can đảm', 'Rất tự tin, thích phát biểu', 'Đã nói tiếng Trung rất giỏi', 'Có rất nhiều bạn bè'], answer: 0, explain: 'Đoạn 3: 我胆子很小，连在大家面前说话都会脸红；要是…能多一点儿勇气就好了.' },
        { q: 'Ý chính của bài đọc là gì?', options: ['Nên chọn ngành học dễ tìm việc', 'Tuổi mười tám là quãng đời đẹp nhất', 'Làm ở ngân hàng thì không vui', 'Quá khứ không thể đổi, nhưng ta vẫn có thể phấn đấu cho tương lai'], answer: 3, explain: 'Đoạn 4: 过去的事情已经没办法改变，但是未来还在我们自己手里…我们也可以继续奋斗.' }
      ]
    }
  },

  // ───────────────────────── HSK4-2: Tin tức ─────────────────────────
  'zh-hsk4-2': {
    vocab: [
      { w: '采访', ipa: 'cǎifǎng', hv: 'thái phỏng', vi: 'phỏng vấn (báo chí), lấy tin', ex: '这位运动员被很多记者采访过。', exPy: 'Zhè wèi yùndòngyuán bèi hěn duō jìzhě cǎifǎngguo.', exVi: 'Vận động viên này từng được nhiều phóng viên phỏng vấn.' },
      { w: '着火', ipa: 'zháohuǒ', hv: '', vi: 'bốc cháy, bị cháy', ex: '昨天夜里，一家饭店着火了。', exPy: 'Zuótiān yèli, yì jiā fàndiàn zháohuǒ le.', exVi: 'Đêm qua, một nhà hàng bị cháy.' },
      { w: '迅速', ipa: 'xùnsù', hv: 'tấn tốc', vi: 'nhanh chóng, mau lẹ', ex: '警察迅速赶到了现场。', exPy: 'Jǐngchá xùnsù gǎndàole xiànchǎng.', exVi: 'Cảnh sát nhanh chóng có mặt tại hiện trường.' },
      { w: '居民', ipa: 'jūmín', hv: 'cư dân', vi: 'cư dân, người dân sống ở một nơi', ex: '附近的居民都被叫醒了。', exPy: 'Fùjìn de jūmín dōu bèi jiàoxǐng le.', exVi: 'Cư dân quanh đó đều bị đánh thức.' },
      { w: '纷纷', ipa: 'fēnfēn', hv: 'phân phân', vi: 'lần lượt, nhao nhao (nhiều người cùng làm)', ex: '新闻出来以后，网友纷纷发表自己的看法。', exPy: 'Xīnwén chūlai yǐhòu, wǎngyǒu fēnfēn fābiǎo zìjǐ de kànfǎ.', exVi: 'Tin vừa ra, cư dân mạng nhao nhao bày tỏ ý kiến của mình.' },
      { w: '引起', ipa: 'yǐnqǐ', hv: 'dẫn khởi', vi: 'gây ra, khiến (chú ý, tranh luận…)', ex: '这条新闻引起了大家的注意。', exPy: 'Zhè tiáo xīnwén yǐnqǐle dàjiā de zhùyì.', exVi: 'Tin này đã gây sự chú ý của mọi người.' },
      { w: '导致', ipa: 'dǎozhì', hv: 'đạo trí', vi: 'dẫn đến (thường là kết quả xấu)', ex: '司机开车时看手机，导致了这起事故。', exPy: 'Sījī kāichē shí kàn shǒujī, dǎozhìle zhè qǐ shìgù.', exVi: 'Tài xế vừa lái xe vừa xem điện thoại đã dẫn đến vụ tai nạn này.' },
      { w: '政府', ipa: 'zhèngfǔ', hv: 'chính phủ', vi: 'chính phủ, chính quyền', ex: '政府决定在这里建一座新医院。', exPy: 'Zhèngfǔ juédìng zài zhèli jiàn yí zuò xīn yīyuàn.', exVi: 'Chính quyền quyết định xây một bệnh viện mới ở đây.' },
      { w: '伤害', ipa: 'shānghài', hv: 'thương hại', vi: 'làm tổn thương, gây hại', ex: '他的话伤害了很多人。', exPy: 'Tā de huà shānghàile hěn duō rén.', exVi: 'Lời nói của anh ta đã làm tổn thương nhiều người.' },
      { w: '阻止', ipa: 'zǔzhǐ', hv: 'trở chỉ', vi: 'ngăn cản, ngăn chặn', ex: '小偷被一位年轻人阻止了。', exPy: 'Xiǎotōu bèi yí wèi niánqīngrén zǔzhǐ le.', exVi: 'Tên trộm đã bị một thanh niên ngăn lại.' }
    ],
    exercises: [
      { type: 'mc', q: '那个小偷___警察抓住了。', options: ['把', '被', '对'], answer: 1, explain: 'Câu bị động: A + 被 + B (người gây ra) + động từ + thành phần khác: 小偷被警察抓住了。' },
      { type: 'mc', q: '"着火" nghĩa là:', options: ['bốc cháy', 'dập lửa', 'nấu ăn'], answer: 0, explain: '着火 (zháohuǒ) = bốc cháy; chữ 着 ở đây đọc zháo, không đọc zhe.' },
      { type: 'fill', q: '这条新闻___了很多人的注意。', answer: ['引起', 'yǐnqǐ', 'yinqi'], hint: 'gây ra, thu hút (yǐnqǐ)', explain: '引起注意 / 引起讨论 = gây sự chú ý / gây ra tranh luận.' },
      { type: 'order', vi: 'Phóng viên đã nhanh chóng đến hiện trường.', words: ['赶到了', '记者', '现场', '迅速'], answer: '记者 迅速 赶到了 现场' },
      { type: 'mc', q: 'Câu nào đúng ngữ pháp?', options: ['窗户被吹坏风了。', '被窗户风吹坏了。', '窗户被风吹坏了。'], answer: 2, explain: 'Trật tự: 窗户 (bị tác động) + 被 + 风 (tác nhân) + 吹坏了.' },
      { type: 'fill', q: '因为下大雪，很多航班都___取消了。', answer: ['被', 'bèi', 'bei'], hint: 'bị (bèi)', explain: 'Chủ ngữ 航班 chịu tác động, nên dùng 被: 航班被取消了.' },
      { type: 'order', vi: 'Vụ tai nạn này đã khiến hai người bị thương.', words: ['导致', '受伤', '两个人', '这起事故'], answer: '这起事故 导致 两个人 受伤' },
      { type: 'mc', q: '新闻发表以后，网友们___留言，表达自己的看法。', options: ['纷纷', '再三', '普遍'], answer: 0, explain: '纷纷 = nhiều người lần lượt, nhao nhao cùng làm một việc; chủ ngữ phải là số nhiều.' }
    ],
    reading: {
      title: '饭店着火了',
      titleVi: 'Nhà hàng bị cháy',
      text: [
        '昨天晚上九点左右，市中心一家饭店的厨房突然着火了。当时饭店里有三十多位客人正在吃饭。服务员发现以后，马上打电话通知了警察和消防队，并且让客人们迅速离开饭店。',
        '十分钟以后，消防车赶到了现场。火很快就被扑灭了，没有人受伤，但是厨房被烧得很严重，附近几家商店的窗户也被破坏了。不少居民被吵醒了，纷纷走出家门，有的人还用手机拍下了照片和视频。',
        '据记者了解，这次事故是由于厨师离开厨房时忘了关火导致的。记者采访了饭店的经理。经理说：“这次的事故让我们受到了很大的教训。以后我们一定会更加注意安全。”',
        '这条新闻在网上引起了很多人的讨论。有网友认为，饭店应该经常检查厨房的设备；也有网友说，服务员的反应很快，保护了客人的安全。政府有关部门表示，下个月会对全市的饭店进行一次安全检查，防止类似的事故再次发生。'
      ],
      py: [
        'Zuótiān wǎnshang jiǔ diǎn zuǒyòu, shì zhōngxīn yì jiā fàndiàn de chúfáng tūrán zháohuǒ le. Dāngshí fàndiàn li yǒu sānshí duō wèi kèrén zhèngzài chīfàn. Fúwùyuán fāxiàn yǐhòu, mǎshàng dǎ diànhuà tōngzhīle jǐngchá hé xiāofángduì, bìngqiě ràng kèrénmen xùnsù líkāi fàndiàn.',
        'Shí fēnzhōng yǐhòu, xiāofángchē gǎndàole xiànchǎng. Huǒ hěn kuài jiù bèi pūmiè le, méiyǒu rén shòushāng, dànshì chúfáng bèi shāo de hěn yánzhòng, fùjìn jǐ jiā shāngdiàn de chuānghu yě bèi pòhuài le. Bù shǎo jūmín bèi chǎoxǐng le, fēnfēn zǒuchū jiāmén, yǒu de rén hái yòng shǒujī pāixiàle zhàopiàn hé shìpín.',
        'Jù jìzhě liǎojiě, zhè cì shìgù shì yóuyú chúshī líkāi chúfáng shí wàngle guān huǒ dǎozhì de. Jìzhě cǎifǎngle fàndiàn de jīnglǐ. Jīnglǐ shuō: “Zhè cì de shìgù ràng wǒmen shòudàole hěn dà de jiàoxùn. Yǐhòu wǒmen yídìng huì gèngjiā zhùyì ānquán.”',
        'Zhè tiáo xīnwén zài wǎng shang yǐnqǐle hěn duō rén de tǎolùn. Yǒu wǎngyǒu rènwéi, fàndiàn yīnggāi jīngcháng jiǎnchá chúfáng de shèbèi; yě yǒu wǎngyǒu shuō, fúwùyuán de fǎnyìng hěn kuài, bǎohùle kèrén de ānquán. Zhèngfǔ yǒuguān bùmén biǎoshì, xià ge yuè huì duì quán shì de fàndiàn jìnxíng yí cì ānquán jiǎnchá, fángzhǐ lèisì de shìgù zàicì fāshēng.'
      ],
      vi: [
        'Khoảng 9 giờ tối qua, bếp của một nhà hàng ở trung tâm thành phố bất ngờ bốc cháy. Lúc đó trong nhà hàng có hơn ba mươi thực khách đang dùng bữa. Phát hiện ra, nhân viên phục vụ lập tức gọi điện báo cảnh sát và đội cứu hoả, đồng thời hướng dẫn khách nhanh chóng rời khỏi nhà hàng.',
        'Mười phút sau, xe cứu hoả đã có mặt tại hiện trường. Ngọn lửa nhanh chóng được dập tắt, không ai bị thương, nhưng gian bếp bị cháy rất nặng, cửa kính của mấy cửa hàng gần đó cũng bị hư hại. Nhiều cư dân bị đánh thức, lần lượt kéo ra khỏi nhà, có người còn dùng điện thoại chụp ảnh và quay video.',
        'Theo tìm hiểu của phóng viên, vụ việc lần này là do đầu bếp rời bếp mà quên tắt lửa. Phóng viên đã phỏng vấn quản lý nhà hàng. Ông nói: “Sự cố lần này là một bài học lớn cho chúng tôi. Từ nay chúng tôi nhất định sẽ chú ý đến an toàn hơn.”',
        'Tin này đã gây ra nhiều bàn luận trên mạng. Có người cho rằng nhà hàng nên thường xuyên kiểm tra thiết bị trong bếp; cũng có người nói nhân viên phục vụ phản ứng rất nhanh, đã bảo vệ an toàn cho khách. Cơ quan chức năng của chính quyền cho biết tháng sau sẽ tiến hành một đợt kiểm tra an toàn đối với các nhà hàng trong toàn thành phố, để ngăn những sự cố tương tự xảy ra lần nữa.'
      ],
      questions: [
        { q: 'Đám cháy bắt đầu ở đâu?', options: ['Trong một cửa hàng gần nhà hàng', 'Trong bếp của một nhà hàng ở trung tâm thành phố', 'Trong nhà của một cư dân', 'Ở bãi đỗ xe của nhà hàng'], answer: 1, explain: 'Đoạn 1: 市中心一家饭店的厨房突然着火了。' },
        { q: 'Nguyên nhân dẫn đến vụ cháy là gì?', options: ['Đầu bếp rời bếp mà quên tắt lửa', 'Có khách hút thuốc trong nhà hàng', 'Thiết bị điện bị hỏng', 'Có người cố ý phóng hoả'], answer: 0, explain: 'Đoạn 3: 是由于厨师离开厨房时忘了关火导致的。' },
        { q: 'Câu nào ĐÚNG theo bài đọc?', options: ['Có hai thực khách bị thương', 'Xe cứu hoả đến sau một tiếng', 'Không ai bị thương nhưng gian bếp bị cháy nặng', 'Nhà hàng bị chính quyền đóng cửa'], answer: 2, explain: 'Đoạn 2: 没有人受伤，但是厨房被烧得很严重。' },
        { q: 'Có thể suy ra đợt kiểm tra vào tháng sau nhằm mục đích gì?', options: ['Phạt nhà hàng bị cháy', 'Chọn ra nhà hàng ngon nhất thành phố', 'Kiểm tra giấy tờ của phóng viên', 'Phòng ngừa những vụ cháy tương tự ở các nhà hàng khác'], answer: 3, explain: 'Đoạn 4: 对全市的饭店进行一次安全检查，防止类似的事故再次发生。' }
      ]
    }
  },

  // ───────────────────────── HSK4-3: Kể lại lời nói ─────────────────────────
  'zh-hsk4-3': {
    vocab: [
      { w: '误会', ipa: 'wùhuì', hv: 'ngộ hội', vi: 'hiểu lầm; sự hiểu lầm', ex: '你误会我的意思了。', exPy: 'Nǐ wùhuì wǒ de yìsi le.', exVi: 'Bạn hiểu lầm ý tôi rồi.' },
      { w: '承认', ipa: 'chéngrèn', hv: 'thừa nhận', vi: 'thừa nhận', ex: '他终于承认是自己弄错了。', exPy: 'Tā zhōngyú chéngrèn shì zìjǐ nòngcuò le.', exVi: 'Cuối cùng anh ấy cũng thừa nhận là mình đã nhầm.' },
      { w: '议论', ipa: 'yìlùn', hv: 'nghị luận', vi: 'bàn tán, bàn luận', ex: '同事们都在议论新经理的事。', exPy: 'Tóngshìmen dōu zài yìlùn xīn jīnglǐ de shì.', exVi: 'Đồng nghiệp đều đang bàn tán chuyện về giám đốc mới.' },
      { w: '秘密', ipa: 'mìmì', hv: 'bí mật', vi: 'bí mật', ex: '这是我们俩的秘密，你别告诉别人。', exPy: 'Zhè shì wǒmen liǎ de mìmì, nǐ bié gàosu biérén.', exVi: 'Đây là bí mật của hai đứa mình, bạn đừng nói với người khác.' },
      { w: '似乎', ipa: 'sìhū', hv: 'tự hồ', vi: 'dường như, hình như', ex: '他似乎不太相信我说的话。', exPy: 'Tā sìhū bú tài xiāngxìn wǒ shuō de huà.', exVi: 'Anh ấy dường như không tin lắm lời tôi nói.' },
      { w: '竟然', ipa: 'jìngrán', hv: 'cánh nhiên', vi: 'vậy mà, không ngờ', ex: '听说他竟然一个人去了西藏。', exPy: 'Tīngshuō tā jìngrán yí ge rén qùle Xīzàng.', exVi: 'Nghe nói vậy mà anh ấy đi Tây Tạng một mình.' },
      { w: '再三', ipa: 'zàisān', hv: 'tái tam', vi: 'nhiều lần, hết lần này đến lần khác', ex: '妈妈再三提醒我出门要带钥匙。', exPy: 'Māma zàisān tíxǐng wǒ chūmén yào dài yàoshi.', exVi: 'Mẹ nhắc đi nhắc lại rằng ra ngoài phải mang chìa khoá.' },
      { w: '说服', ipa: 'shuōfú', hv: 'thuyết phục', vi: 'thuyết phục', ex: '我终于说服爸爸让我一个人去旅行了。', exPy: 'Wǒ zhōngyú shuōfú bàba ràng wǒ yí ge rén qù lǚxíng le.', exVi: 'Cuối cùng tôi đã thuyết phục được bố cho tôi đi du lịch một mình.' },
      { w: '问候', ipa: 'wènhòu', hv: 'vấn hậu', vi: 'hỏi thăm, gửi lời thăm', ex: '请代我问候你的父母。', exPy: 'Qǐng dài wǒ wènhòu nǐ de fùmǔ.', exVi: 'Nhờ bạn gửi lời hỏi thăm của tôi tới bố mẹ bạn.' },
      { w: '描述', ipa: 'miáoshù', hv: 'miêu thuật', vi: 'miêu tả, mô tả', ex: '你能描述一下那个人的样子吗？', exPy: 'Nǐ néng miáoshù yíxià nàge rén de yàngzi ma?', exVi: 'Bạn có thể mô tả qua dáng vẻ của người đó không?' }
    ],
    exercises: [
      { type: 'mc', q: '他说一定会来，可是他___没来。', options: ['再三', '竟然', '普遍'], answer: 1, explain: '竟然 = vậy mà, không ngờ — diễn tả sự bất ngờ, trái với dự đoán.' },
      { type: 'mc', q: '"他再三提醒我" nghĩa là:', options: ['Anh ấy nhắc tôi nhiều lần', 'Anh ấy chỉ nhắc tôi đúng ba lần', 'Anh ấy quên nhắc tôi'], answer: 0, explain: '再三 = nhiều lần, hết lần này đến lần khác (không phải đúng ba lần).' },
      { type: 'fill', q: '你___我的意思了，我不是这样想的。', answer: ['误会', 'wùhuì', 'wuhui'], hint: 'hiểu lầm (wùhuì)', explain: '误会 + ai đó / 意思 = hiểu lầm.' },
      { type: 'order', vi: 'Anh ấy thừa nhận là mình đã nói sai.', words: ['承认', '说错了', '他', '自己'], answer: '他 承认 自己 说错了' },
      { type: 'mc', q: 'Thuật lại câu: 小王对我说：“我很忙。”', options: ['小王说我很忙。', '小王听说我很忙。', '小王说他很忙。'], answer: 2, explain: 'Khi thuật lại, đổi 我 của người nói thành 他 / 她: 小王说他很忙。' },
      { type: 'fill', q: '请代我___你的父母。', answer: ['问候', 'wènhòu', 'wenhou'], hint: 'gửi lời hỏi thăm (wènhòu)', explain: '代我问候… = cho tôi gửi lời hỏi thăm…' },
      { type: 'order', vi: 'Tôi đã thuyết phục được mẹ rồi.', words: ['说服了', '我', '妈妈', '已经'], answer: '我 已经 说服了 妈妈' },
      { type: 'mc', q: '他___不太高兴，一句话也没说。', options: ['似乎', '再三', '秘密'], answer: 0, explain: '似乎 = dường như — phỏng đoán dựa trên biểu hiện bên ngoài.' }
    ],
    reading: {
      title: '一个小误会',
      titleVi: 'Một hiểu lầm nhỏ',
      text: [
        '上个星期一，我刚到公司，就发现同事们在小声地议论着什么。我问小张发生了什么事，她告诉我：“听说王经理要离开公司了，据说是因为他跟老板吵架了。”我觉得很奇怪，因为上个星期王经理还说要带我们去做一个新项目。',
        '中午吃饭的时候，这个消息已经传遍了整个办公室。有人说王经理要去上海工作，有人说他竟然被老板批评了。大家你一句我一句，描述得好像自己亲眼看见了一样。王经理走进来的时候，大家马上不说话了，他似乎也感觉到了什么。',
        '下午开会时，王经理笑着说：“我听说最近大家对我很关心。我要解释一下：我下个月确实要去上海，不过不是离开公司，而是去那里的分公司工作半年。至于跟老板吵架，那是误会。那天我们只是讨论问题的时候声音大了一点儿。”大家听了都笑了。',
        '会后，小张承认消息是她从别人那儿听来的，自己也没有问清楚。王经理再三提醒大家：“以后听到什么消息，最好先问问本人。”这件事让我明白，传话的人越多，话就越容易变样。'
      ],
      py: [
        'Shàng ge xīngqīyī, wǒ gāng dào gōngsī, jiù fāxiàn tóngshìmen zài xiǎoshēng de yìlùnzhe shénme. Wǒ wèn Xiǎo Zhāng fāshēngle shénme shì, tā gàosu wǒ: “Tīngshuō Wáng jīnglǐ yào líkāi gōngsī le, jùshuō shì yīnwèi tā gēn lǎobǎn chǎojià le.” Wǒ juéde hěn qíguài, yīnwèi shàng ge xīngqī Wáng jīnglǐ hái shuō yào dài wǒmen qù zuò yí ge xīn xiàngmù.',
        'Zhōngwǔ chīfàn de shíhou, zhège xiāoxi yǐjīng chuánbiànle zhěnggè bàngōngshì. Yǒu rén shuō Wáng jīnglǐ yào qù Shànghǎi gōngzuò, yǒu rén shuō tā jìngrán bèi lǎobǎn pīpíng le. Dàjiā nǐ yí jù wǒ yí jù, miáoshù de hǎoxiàng zìjǐ qīnyǎn kànjiànle yíyàng. Wáng jīnglǐ zǒu jìnlai de shíhou, dàjiā mǎshàng bù shuōhuà le, tā sìhū yě gǎnjué dàole shénme.',
        'Xiàwǔ kāihuì shí, Wáng jīnglǐ xiàozhe shuō: “Wǒ tīngshuō zuìjìn dàjiā duì wǒ hěn guānxīn. Wǒ yào jiěshì yíxià: wǒ xià ge yuè quèshí yào qù Shànghǎi, búguò bú shì líkāi gōngsī, ér shì qù nàli de fēngōngsī gōngzuò bàn nián. Zhìyú gēn lǎobǎn chǎojià, nà shì wùhuì. Nà tiān wǒmen zhǐshì tǎolùn wèntí de shíhou shēngyīn dàle yìdiǎnr.” Dàjiā tīngle dōu xiào le.',
        'Huì hòu, Xiǎo Zhāng chéngrèn xiāoxi shì tā cóng biérén nàr tīnglai de, zìjǐ yě méiyǒu wèn qīngchu. Wáng jīnglǐ zàisān tíxǐng dàjiā: “Yǐhòu tīngdào shénme xiāoxi, zuìhǎo xiān wènwen běnrén.” Zhè jiàn shì ràng wǒ míngbai, chuánhuà de rén yuè duō, huà jiù yuè róngyì biànyàng.'
      ],
      vi: [
        'Thứ Hai tuần trước, tôi vừa đến công ty đã thấy đồng nghiệp đang xì xào bàn tán chuyện gì đó. Tôi hỏi Tiểu Trương có chuyện gì, cô ấy bảo tôi: “Nghe nói giám đốc Vương sắp rời công ty, nghe đồn là vì ông ấy cãi nhau với sếp.” Tôi thấy rất lạ, vì tuần trước giám đốc Vương còn nói sẽ dẫn chúng tôi làm một dự án mới.',
        'Đến giờ ăn trưa, tin này đã lan khắp văn phòng. Người thì bảo giám đốc Vương sắp đi Thượng Hải làm việc, người thì bảo vậy mà ông ấy bị sếp phê bình. Mọi người mỗi người một câu, kể lại cứ như chính mắt mình nhìn thấy. Lúc giám đốc Vương bước vào, mọi người lập tức im bặt, hình như ông ấy cũng cảm nhận được điều gì đó.',
        'Buổi họp chiều, giám đốc Vương cười nói: “Tôi nghe nói dạo này mọi người rất quan tâm đến tôi. Tôi xin giải thích một chút: tháng sau tôi đúng là sẽ đi Thượng Hải, nhưng không phải rời công ty mà là sang chi nhánh ở đó làm việc nửa năm. Còn chuyện cãi nhau với sếp thì là hiểu lầm. Hôm đó chúng tôi chỉ bàn công việc nên nói hơi to một chút thôi.” Mọi người nghe xong đều bật cười.',
        'Sau cuộc họp, Tiểu Trương thừa nhận tin đó là cô nghe từ người khác, bản thân cũng không hỏi cho rõ. Giám đốc Vương nhắc đi nhắc lại với mọi người: “Sau này nghe được tin gì, tốt nhất hãy hỏi chính người trong cuộc trước.” Chuyện này giúp tôi hiểu rằng lời nói càng qua nhiều người truyền lại thì càng dễ bị sai lệch.'
      ],
      questions: [
        { q: 'Theo tin đồn ban đầu, vì sao giám đốc Vương sắp rời công ty?', options: ['Vì ông bị ốm', 'Vì ông muốn mở công ty riêng', 'Vì ông cãi nhau với sếp', 'Vì lương quá thấp'], answer: 2, explain: 'Đoạn 1: 据说是因为他跟老板吵架了。' },
        { q: 'Sự thật là tháng sau giám đốc Vương sẽ làm gì?', options: ['Sang chi nhánh ở Thượng Hải làm việc nửa năm', 'Nghỉ việc ở công ty', 'Được thăng chức tổng giám đốc', 'Đi du lịch Thượng Hải'], answer: 0, explain: 'Đoạn 3: 不是离开公司，而是去那里的分公司工作半年。' },
        { q: 'Khi giám đốc Vương bước vào văn phòng, mọi người phản ứng thế nào?', options: ['Vỗ tay chúc mừng ông', 'Hỏi thẳng ông về tin đồn', 'Rủ ông đi ăn trưa', 'Lập tức im lặng'], answer: 3, explain: 'Đoạn 2: 大家马上不说话了。' },
        { q: 'Điều chính mà tác giả rút ra từ chuyện này là gì?', options: ['Không nên cãi nhau với sếp', 'Tin đồn qua càng nhiều người càng dễ bị sai lệch', 'Làm ở chi nhánh tốt hơn ở trụ sở chính', 'Nên đi ăn trưa cùng đồng nghiệp'], answer: 1, explain: 'Đoạn 4: 传话的人越多，话就越容易变样。' }
      ]
    }
  },

  // ───────────────────────── HSK4-4: Môi trường & xã hội ─────────────────────────
  'zh-hsk4-4': {
    vocab: [
      { w: '塑料袋', ipa: 'sùliàodài', hv: 'tố liệu đại', vi: 'túi ni-lông', ex: '去超市买东西时，我自己带包，不用塑料袋。', exPy: 'Qù chāoshì mǎi dōngxi shí, wǒ zìjǐ dài bāo, bú yòng sùliàodài.', exVi: 'Khi đi siêu thị mua đồ, tôi tự mang túi, không dùng túi ni-lông.' },
      { w: '资源', ipa: 'zīyuán', hv: 'tư nguyên', vi: 'tài nguyên', ex: '水是非常宝贵的资源。', exPy: 'Shuǐ shì fēicháng bǎoguì de zīyuán.', exVi: 'Nước là tài nguyên vô cùng quý giá.' },
      { w: '植物', ipa: 'zhíwù', hv: 'thực vật', vi: 'thực vật, cây cối', ex: '很多植物能让空气变得更干净。', exPy: 'Hěn duō zhíwù néng ràng kōngqì biàn de gèng gānjìng.', exVi: 'Nhiều loài cây có thể làm cho không khí sạch hơn.' },
      { w: '趋势', ipa: 'qūshì', hv: 'xu thế', vi: 'xu hướng, xu thế', ex: '城市人口有不断增加的趋势。', exPy: 'Chéngshì rénkǒu yǒu búduàn zēngjiā de qūshì.', exVi: 'Dân số thành thị có xu hướng tăng không ngừng.' },
      { w: '改善', ipa: 'gǎishàn', hv: 'cải thiện', vi: 'cải thiện', ex: '这几年，这里的空气质量改善了不少。', exPy: 'Zhè jǐ nián, zhèli de kōngqì zhìliàng gǎishànle bù shǎo.', exVi: 'Mấy năm nay, chất lượng không khí ở đây đã cải thiện khá nhiều.' },
      { w: '措施', ipa: 'cuòshī', hv: 'thố thi', vi: 'biện pháp', ex: '政府采取了很多措施来减少污染。', exPy: 'Zhèngfǔ cǎiqǔle hěn duō cuòshī lái jiǎnshǎo wūrǎn.', exVi: 'Chính phủ đã áp dụng nhiều biện pháp để giảm ô nhiễm.' },
      { w: '逐渐', ipa: 'zhújiàn', hv: 'trục tiệm', vi: 'dần dần, từng bước', ex: '天气逐渐暖和起来了。', exPy: 'Tiānqì zhújiàn nuǎnhuo qǐlai le.', exVi: 'Thời tiết dần dần ấm lên rồi.' },
      { w: '失业', ipa: 'shīyè', hv: 'thất nghiệp', vi: 'thất nghiệp, mất việc', ex: '工厂关门以后，很多工人失业了。', exPy: 'Gōngchǎng guānmén yǐhòu, hěn duō gōngrén shīyè le.', exVi: 'Sau khi nhà máy đóng cửa, nhiều công nhân bị mất việc.' },
      { w: '企业', ipa: 'qǐyè', hv: 'xí nghiệp', vi: 'doanh nghiệp, công ty', ex: '企业不但要赚钱，而且要保护环境。', exPy: 'Qǐyè búdàn yào zhuànqián, érqiě yào bǎohù huánjìng.', exVi: 'Doanh nghiệp không chỉ phải kiếm tiền mà còn phải bảo vệ môi trường.' },
      { w: '种植', ipa: 'zhòngzhí', hv: 'chủng thực', vi: 'trồng (cây)', ex: '每年春天，学生们都去山上种植树木。', exPy: 'Měi nián chūntiān, xuéshengmen dōu qù shān shang zhòngzhí shùmù.', exVi: 'Mùa xuân hằng năm, học sinh đều lên núi trồng cây.' }
    ],
    exercises: [
      { type: 'mc', q: '用塑料袋___污染环境，___浪费资源。', options: ['虽然…但是…', '不但…而且…', '如果…就…'], answer: 1, explain: '不但 A 而且 B = không những A mà còn B (hai ý cùng chiều, ý sau tăng tiến).' },
      { type: 'fill', q: '水是非常宝贵的___，我们要节约用水。', answer: ['资源', 'zīyuán', 'ziyuan'], hint: 'tài nguyên (zīyuán)', explain: '资源 (tư nguyên) = tài nguyên.' },
      { type: 'mc', q: '"逐渐" gần nghĩa nhất với:', options: ['突然', '马上', '慢慢地'], answer: 2, explain: '逐渐 = dần dần, từng bước — gần nghĩa 慢慢地 / 渐渐.' },
      { type: 'order', vi: 'Đối với doanh nghiệp mà nói, bảo vệ môi trường rất quan trọng.', words: ['来说，', '对', '企业', '很重要', '保护环境'], answer: '对 企业 来说， 保护环境 很重要', alt: ['保护环境 对 企业 来说， 很重要'] },
      { type: 'mc', q: '政府采取了很多___来改善空气质量。', options: ['措施', '趋势', '植物'], answer: 0, explain: '采取措施 = áp dụng biện pháp.' },
      { type: 'fill', q: '工厂关门以后，很多工人都___了。', answer: ['失业', 'shīyè', 'shiye'], hint: 'mất việc (shīyè)', explain: '失业 (thất nghiệp) = mất việc làm.' },
      { type: 'order', vi: 'Người dùng túi ni-lông ngày càng ít.', words: ['越来越少', '用', '的人', '塑料袋'], answer: '用 塑料袋 的人 越来越少' },
      { type: 'mc', q: '"种植" thường đi với tân ngữ nào?', options: ['新闻', '树木、植物', '密码'], answer: 1, explain: '种植 = trồng trọt: 种植树木, 种植花草.' }
    ],
    reading: {
      title: '我们小区的变化',
      titleVi: 'Khu dân cư của chúng tôi đã thay đổi',
      text: [
        '我住的小区有二十多年的历史了。几年前，这里的环境很差：垃圾到处都是，河水又黑又臭，夏天的时候连窗户都不敢开。很多年轻人不愿意住在这儿，纷纷搬到了新的小区。对老人来说，这种环境不但影响心情，而且对身体也不好。',
        '后来，居民们决定一起想办法改善环境。在政府的支持下，小区采取了几项措施：第一，垃圾要分类，每天按时扔；第二，居民们在空地上种植了很多花草和树木；第三，附近的超市不再免费提供塑料袋，鼓励大家自己带购物袋。',
        '刚开始的时候，有些人觉得很麻烦，不愿意配合。可是慢慢地，大家发现小区逐渐变干净了，河水也变清了，周末还有不少人带着孩子来河边散步。现在，参加环保活动的人越来越多，连小学生都会提醒爸爸妈妈节约用水用电。',
        '当然，问题并没有完全解决。小区旁边还有几家小企业，它们的污染仍然比较严重。不过，从整个社会来看，保护环境已经成为一种趋势。我相信，只要每个人都从小事做起，我们的城市一定会越来越美丽。'
      ],
      py: [
        'Wǒ zhù de xiǎoqū yǒu èrshí duō nián de lìshǐ le. Jǐ nián qián, zhèli de huánjìng hěn chà: lājī dàochù dōu shì, héshuǐ yòu hēi yòu chòu, xiàtiān de shíhou lián chuānghu dōu bù gǎn kāi. Hěn duō niánqīngrén bú yuànyì zhù zài zhèr, fēnfēn bāndàole xīn de xiǎoqū. Duì lǎorén lái shuō, zhè zhǒng huánjìng búdàn yǐngxiǎng xīnqíng, érqiě duì shēntǐ yě bù hǎo.',
        'Hòulái, jūmínmen juédìng yìqǐ xiǎng bànfǎ gǎishàn huánjìng. Zài zhèngfǔ de zhīchí xià, xiǎoqū cǎiqǔle jǐ xiàng cuòshī: dì-yī, lājī yào fēnlèi, měi tiān ànshí rēng; dì-èr, jūmínmen zài kòngdì shang zhòngzhíle hěn duō huācǎo hé shùmù; dì-sān, fùjìn de chāoshì bú zài miǎnfèi tígōng sùliàodài, gǔlì dàjiā zìjǐ dài gòuwùdài.',
        'Gāng kāishǐ de shíhou, yǒuxiē rén juéde hěn máfan, bú yuànyì pèihé. Kěshì mànmàn de, dàjiā fāxiàn xiǎoqū zhújiàn biàn gānjìng le, héshuǐ yě biàn qīng le, zhōumò hái yǒu bù shǎo rén dàizhe háizi lái hébiān sànbù. Xiànzài, cānjiā huánbǎo huódòng de rén yuè lái yuè duō, lián xiǎoxuéshēng dōu huì tíxǐng bàba māma jiéyuē yòng shuǐ yòng diàn.',
        'Dāngrán, wèntí bìng méiyǒu wánquán jiějué. Xiǎoqū pángbiān hái yǒu jǐ jiā xiǎo qǐyè, tāmen de wūrǎn réngrán bǐjiào yánzhòng. Búguò, cóng zhěnggè shèhuì lái kàn, bǎohù huánjìng yǐjīng chéngwéi yì zhǒng qūshì. Wǒ xiāngxìn, zhǐyào měi ge rén dōu cóng xiǎoshì zuòqǐ, wǒmen de chéngshì yídìng huì yuè lái yuè měilì.'
      ],
      vi: [
        'Khu dân cư tôi ở đã có hơn hai mươi năm lịch sử. Vài năm trước, môi trường ở đây rất tệ: rác vứt khắp nơi, nước sông vừa đen vừa hôi, mùa hè đến cửa sổ cũng không dám mở. Nhiều người trẻ không muốn sống ở đây, lần lượt chuyển sang các khu mới. Đối với người già, môi trường như vậy không chỉ ảnh hưởng đến tâm trạng mà còn không tốt cho sức khoẻ.',
        'Về sau, cư dân quyết định cùng nhau tìm cách cải thiện môi trường. Với sự hỗ trợ của chính quyền, khu dân cư đã áp dụng mấy biện pháp: thứ nhất, rác phải phân loại và vứt đúng giờ mỗi ngày; thứ hai, cư dân trồng nhiều hoa cỏ và cây xanh trên các khoảnh đất trống; thứ ba, siêu thị gần đó không còn phát túi ni-lông miễn phí, khuyến khích mọi người tự mang túi đi chợ.',
        'Lúc đầu, có người thấy phiền phức, không muốn hợp tác. Nhưng dần dần, mọi người nhận ra khu dân cư sạch sẽ hơn, nước sông cũng trong trở lại, cuối tuần còn có nhiều người dẫn con ra bờ sông đi dạo. Giờ đây, người tham gia các hoạt động bảo vệ môi trường ngày càng đông, đến cả học sinh tiểu học cũng biết nhắc bố mẹ tiết kiệm điện nước.',
        'Tất nhiên, vấn đề vẫn chưa được giải quyết hoàn toàn. Cạnh khu dân cư vẫn còn vài doanh nghiệp nhỏ gây ô nhiễm khá nặng. Tuy vậy, nhìn trên toàn xã hội, bảo vệ môi trường đã trở thành một xu thế. Tôi tin rằng chỉ cần mỗi người bắt đầu từ những việc nhỏ, thành phố của chúng ta nhất định sẽ ngày càng đẹp hơn.'
      ],
      questions: [
        { q: 'Vài năm trước, vì sao nhiều người trẻ chuyển khỏi khu dân cư?', options: ['Vì giá nhà quá cao', 'Vì môi trường ở đó rất tệ', 'Vì không có siêu thị', 'Vì quá xa trung tâm'], answer: 1, explain: 'Đoạn 1: 这里的环境很差…很多年轻人不愿意住在这儿。' },
        { q: 'Biện pháp nào KHÔNG được nhắc đến trong bài?', options: ['Phân loại rác', 'Trồng hoa cỏ và cây xanh', 'Siêu thị không phát túi ni-lông miễn phí', 'Cấm ô tô chạy vào khu dân cư'], answer: 3, explain: 'Đoạn 2 chỉ nêu 3 biện pháp: phân loại rác, trồng cây, không phát túi ni-lông miễn phí.' },
        { q: 'Câu "连小学生都会提醒爸爸妈妈节约用水用电" cho thấy điều gì?', options: ['Ý thức bảo vệ môi trường đã lan rộng, kể cả trẻ nhỏ', 'Học sinh tiểu học rất nghịch ngợm', 'Bố mẹ dùng quá nhiều điện', 'Nhà trường bắt học sinh tiết kiệm'], answer: 0, explain: '连…都 nhấn mạnh: đến cả học sinh tiểu học cũng có ý thức, huống chi người lớn.' },
        { q: 'Thái độ của tác giả về tương lai thế nào?', options: ['Bi quan vì các doanh nghiệp vẫn gây ô nhiễm', 'Không quan tâm', 'Lạc quan, tin rằng thành phố sẽ ngày càng đẹp', 'Muốn chuyển sang khu dân cư khác'], answer: 2, explain: 'Đoạn 4: 我相信…我们的城市一定会越来越美丽。' }
      ]
    }
  },

  // ───────────────────────── HSK4-5: Công nghệ ─────────────────────────
  'zh-hsk4-5': {
    vocab: [
      { w: '充电器', ipa: 'chōngdiànqì', hv: 'sung điện khí', vi: 'cục sạc, bộ sạc', ex: '我忘带充电器了，手机快没电了。', exPy: 'Wǒ wàng dài chōngdiànqì le, shǒujī kuài méi diàn le.', exVi: 'Tôi quên mang sạc, điện thoại sắp hết pin rồi.' },
      { w: '登录', ipa: 'dēnglù', hv: 'đăng lục', vi: 'đăng nhập', ex: '密码错了，我登录不了。', exPy: 'Mìmǎ cuò le, wǒ dēnglù bu liǎo.', exVi: 'Mật khẩu sai, tôi không đăng nhập được.' },
      { w: '复制', ipa: 'fùzhì', hv: 'phục chế', vi: 'sao chép, copy', ex: '你把这个网址复制给我吧。', exPy: 'Nǐ bǎ zhège wǎngzhǐ fùzhì gěi wǒ ba.', exVi: 'Bạn copy địa chỉ web này gửi cho tôi nhé.' },
      { w: '智能', ipa: 'zhìnéng', hv: 'trí năng', vi: 'thông minh (thiết bị); trí tuệ (nhân tạo)', ex: '现在连我奶奶都会用智能手机了。', exPy: 'Xiànzài lián wǒ nǎinai dōu huì yòng zhìnéng shǒujī le.', exVi: 'Bây giờ đến bà tôi cũng biết dùng điện thoại thông minh rồi.' },
      { w: '系统', ipa: 'xìtǒng', hv: 'hệ thống', vi: 'hệ thống; hệ điều hành', ex: '电脑系统出了问题，打不开了。', exPy: 'Diànnǎo xìtǒng chūle wèntí, dǎ bu kāi le.', exVi: 'Hệ điều hành máy tính bị lỗi, không mở lên được nữa.' },
      { w: '程序', ipa: 'chéngxù', hv: 'trình tự', vi: 'chương trình (máy tính); trình tự, thủ tục', ex: '他自己写了一个小程序。', exPy: 'Tā zìjǐ xiěle yí ge xiǎo chéngxù.', exVi: 'Anh ấy tự viết một chương trình nhỏ.' },
      { w: '网址', ipa: 'wǎngzhǐ', hv: 'võng chỉ', vi: 'địa chỉ trang web', ex: '这个网址太长了，我记不住。', exPy: 'Zhège wǎngzhǐ tài cháng le, wǒ jì bu zhù.', exVi: 'Địa chỉ web này dài quá, tôi không nhớ nổi.' },
      { w: '耳机', ipa: 'ěrjī', hv: 'nhĩ cơ', vi: 'tai nghe', ex: '在图书馆看视频要戴耳机。', exPy: 'Zài túshūguǎn kàn shìpín yào dài ěrjī.', exVi: 'Xem video ở thư viện thì phải đeo tai nghe.' },
      { w: '操作', ipa: 'cāozuò', hv: 'thao tác', vi: 'thao tác, vận hành', ex: '这个软件操作起来很简单。', exPy: 'Zhège ruǎnjiàn cāozuò qǐlai hěn jiǎndān.', exVi: 'Phần mềm này thao tác rất đơn giản.' },
      { w: '设置', ipa: 'shèzhì', hv: 'thiết trí', vi: 'cài đặt, thiết lập', ex: '你可以在手机设置里改语言。', exPy: 'Nǐ kěyǐ zài shǒujī shèzhì li gǎi yǔyán.', exVi: 'Bạn có thể đổi ngôn ngữ trong phần cài đặt của điện thoại.' }
    ],
    exercises: [
      { type: 'mc', q: '这个网址太长了，我___。', options: ['记得住不', '记不住', '不记住'], answer: 1, explain: 'Bổ ngữ khả năng dạng phủ định: động từ + 不 + bổ ngữ: 记不住 = không nhớ nổi.' },
      { type: 'fill', q: '密码忘了，我___不了邮箱。', answer: ['登录', 'dēnglù', 'denglu'], hint: 'đăng nhập (dēnglù)', explain: '登录不了 = không đăng nhập được.' },
      { type: 'mc', q: '现在___我奶奶都会用智能手机了。', options: ['连', '被', '把'], answer: 0, explain: '连…都… = ngay cả… cũng… — nhấn mạnh trường hợp ít ai ngờ tới.' },
      { type: 'order', vi: 'Phần mềm này thao tác rất đơn giản.', words: ['操作起来', '这个软件', '简单', '很'], answer: '这个软件 操作起来 很 简单' },
      { type: 'mc', q: '"耳机" là:', options: ['cục sạc', 'màn hình', 'tai nghe'], answer: 2, explain: '耳机 (nhĩ cơ) = tai nghe; 充电器 = cục sạc; 屏幕 = màn hình.' },
      { type: 'fill', q: '我忘带___了，手机快没电了。', answer: ['充电器', 'chōngdiànqì', 'chongdianqi'], hint: 'cục sạc (chōngdiànqì)', explain: '充电器 = bộ sạc; 充电 = sạc điện.' },
      { type: 'order', vi: 'Bạn có thể đổi ngôn ngữ trong phần cài đặt.', words: ['可以', '在设置里', '你', '改语言'], answer: '你 可以 在设置里 改语言', alt: ['在设置里 你 可以 改语言'] },
      { type: 'mc', q: 'Chọn câu đúng cho "Chữ nhỏ quá, tôi nhìn không rõ."', options: ['字太小了，我看不清楚。', '字太小了，我不看清楚。', '字太小了，我看清楚不。'], answer: 0, explain: 'Bổ ngữ khả năng: 看得清楚 / 看不清楚 = nhìn rõ được / không nhìn rõ được.' }
    ],
    reading: {
      title: '教奶奶用智能手机',
      titleVi: 'Dạy bà dùng điện thoại thông minh',
      text: [
        '我奶奶今年七十五岁了。以前她只用一部很旧的老年手机，除了打电话以外，什么功能都没有。去年过生日的时候，我们给她买了一部智能手机，希望她能跟住在国外的姑姑视频聊天。可是奶奶看着手机，皱着眉头说：“这么复杂的东西，我肯定学不会。”',
        '于是，我决定每个周末都去教她。第一次，我先帮她把字体设置得大一点儿，因为屏幕上的字太小，她看不清楚。然后，我教她怎么充电、怎么打开微信。奶奶的记性不太好，刚学的操作，第二天就忘了。我只好把每一步都写在纸上，让她照着做。',
        '一个月以后，奶奶竟然学会了不少东西。她不但会自己登录微信，而且还会用手机拍照、看新闻、听戏曲。有时候她连吃饭的时候都拿着手机，被我爸爸说了好几次。',
        '上个星期，奶奶第一次跟姑姑视频。看到屏幕上的女儿，她高兴得说不出话来。挂了电话以后，她笑着对我说：“原来科技也没那么可怕，只要愿意学，老人也跟得上时代。”我想，对老年人来说，最需要的也许不是更好的手机，而是家人的耐心。'
      ],
      py: [
        'Wǒ nǎinai jīnnián qīshíwǔ suì le. Yǐqián tā zhǐ yòng yí bù hěn jiù de lǎonián shǒujī, chúle dǎ diànhuà yǐwài, shénme gōngnéng dōu méiyǒu. Qùnián guò shēngrì de shíhou, wǒmen gěi tā mǎile yí bù zhìnéng shǒujī, xīwàng tā néng gēn zhù zài guówài de gūgu shìpín liáotiān. Kěshì nǎinai kànzhe shǒujī, zhòuzhe méitóu shuō: “Zhème fùzá de dōngxi, wǒ kěndìng xué bu huì.”',
        'Yúshì, wǒ juédìng měi ge zhōumò dōu qù jiāo tā. Dì-yī cì, wǒ xiān bāng tā bǎ zìtǐ shèzhì de dà yìdiǎnr, yīnwèi píngmù shang de zì tài xiǎo, tā kàn bu qīngchu. Ránhòu, wǒ jiāo tā zěnme chōngdiàn, zěnme dǎkāi Wēixìn. Nǎinai de jìxing bú tài hǎo, gāng xué de cāozuò, dì-èr tiān jiù wàng le. Wǒ zhǐhǎo bǎ měi yí bù dōu xiě zài zhǐ shang, ràng tā zhàozhe zuò.',
        'Yí ge yuè yǐhòu, nǎinai jìngrán xuéhuìle bù shǎo dōngxi. Tā búdàn huì zìjǐ dēnglù Wēixìn, érqiě hái huì yòng shǒujī pāizhào, kàn xīnwén, tīng xìqǔ. Yǒushíhou tā lián chīfàn de shíhou dōu názhe shǒujī, bèi wǒ bàba shuōle hǎo jǐ cì.',
        "Shàng ge xīngqī, nǎinai dì-yī cì gēn gūgu shìpín. Kàndào píngmù shang de nǚ'ér, tā gāoxìng de shuō bu chū huà lai. Guàle diànhuà yǐhòu, tā xiàozhe duì wǒ shuō: “Yuánlái kējì yě méi nàme kěpà, zhǐyào yuànyì xué, lǎorén yě gēn de shàng shídài.” Wǒ xiǎng, duì lǎoniánrén lái shuō, zuì xūyào de yěxǔ bú shì gèng hǎo de shǒujī, ér shì jiārén de nàixīn."
      ],
      vi: [
        'Bà tôi năm nay bảy mươi lăm tuổi. Trước đây bà chỉ dùng một chiếc điện thoại người già rất cũ, ngoài gọi điện ra thì chẳng có chức năng gì. Sinh nhật năm ngoái, cả nhà mua cho bà một chiếc điện thoại thông minh, mong bà có thể gọi video với cô tôi đang sống ở nước ngoài. Nhưng bà nhìn chiếc điện thoại, nhíu mày nói: “Thứ phức tạp thế này, bà chắc chắn học không nổi.”',
        'Thế là tôi quyết định cuối tuần nào cũng sang dạy bà. Lần đầu, tôi chỉnh cỡ chữ to hơn một chút cho bà, vì chữ trên màn hình nhỏ quá, bà nhìn không rõ. Sau đó, tôi dạy bà cách sạc pin và cách mở WeChat. Trí nhớ của bà không tốt lắm, thao tác vừa học xong, hôm sau đã quên. Tôi đành ghi từng bước ra giấy để bà làm theo.',
        'Một tháng sau, không ngờ bà đã học được khá nhiều thứ. Bà không chỉ tự đăng nhập WeChat được mà còn biết dùng điện thoại chụp ảnh, xem tin tức, nghe hí khúc. Có lúc đến bữa ăn bà cũng cầm điện thoại, bị bố tôi nhắc mấy lần.',
        'Tuần trước, lần đầu tiên bà gọi video với cô tôi. Nhìn thấy con gái trên màn hình, bà vui đến mức không nói nên lời. Cúp máy xong, bà cười bảo tôi: “Hoá ra công nghệ cũng không đáng sợ đến thế, chỉ cần chịu học thì người già cũng theo kịp thời đại.” Tôi nghĩ, đối với người cao tuổi, điều cần nhất có lẽ không phải là chiếc điện thoại tốt hơn, mà là sự kiên nhẫn của người thân.'
      ],
      questions: [
        { q: 'Cả nhà mua điện thoại thông minh cho bà chủ yếu để làm gì?', options: ['Để bà đọc báo', 'Để bà gọi video với con gái ở nước ngoài', 'Để bà chơi trò chơi', 'Để bà học tiếng Anh'], answer: 1, explain: 'Đoạn 1: 希望她能跟住在国外的姑姑视频聊天。' },
        { q: 'Vì sao tác giả chỉnh cỡ chữ to hơn cho bà?', options: ['Vì bà muốn tiết kiệm pin', 'Vì bà không biết chữ', 'Vì chữ trên màn hình quá nhỏ, bà nhìn không rõ', 'Vì điện thoại bị hỏng'], answer: 2, explain: 'Đoạn 2: 屏幕上的字太小，她看不清楚。' },
        { q: 'Câu "被我爸爸说了好几次" ngụ ý điều gì?', options: ['Bà dùng điện thoại nhiều đến mức bị bố nhắc nhở', 'Bố khen bà nhiều lần', 'Bố cũng dạy bà dùng điện thoại', 'Bà gọi điện cho bố nhiều lần'], answer: 0, explain: '说 ở đây nghĩa là nhắc nhở, phê bình; bà cầm điện thoại cả khi ăn cơm nên bị bố nhắc.' },
        { q: 'Theo tác giả, điều người cao tuổi cần nhất là gì?', options: ['Chiếc điện thoại đắt tiền hơn', 'Lớp học công nghệ', 'Nhiều bạn bè hơn', 'Sự kiên nhẫn của người thân'], answer: 3, explain: 'Đoạn 4: 最需要的也许不是更好的手机，而是家人的耐心。' }
      ]
    }
  },

  // ───────────────────────── HSK4-6: Giao tiếp trang trọng & email ─────────────────────────
  'zh-hsk4-6': {
    vocab: [
      { w: '申请', ipa: 'shēnqǐng', hv: 'thân thỉnh', vi: 'xin, đăng ký (chính thức)', ex: '我想申请下周五请一天假。', exPy: 'Wǒ xiǎng shēnqǐng xià zhōuwǔ qǐng yì tiān jià.', exVi: 'Tôi muốn xin nghỉ một ngày vào thứ Sáu tuần sau.' },
      { w: '确认', ipa: 'quèrèn', hv: 'xác nhận', vi: 'xác nhận', ex: '收到邮件后，请回复确认。', exPy: 'Shōudào yóujiàn hòu, qǐng huífù quèrèn.', exVi: 'Sau khi nhận được email, vui lòng trả lời xác nhận.' },
      { w: '推迟', ipa: 'tuīchí', hv: 'thôi trì', vi: 'hoãn, lùi lại', ex: '由于天气原因，会议推迟到下周一。', exPy: 'Yóuyú tiānqì yuányīn, huìyì tuīchí dào xià zhōuyī.', exVi: 'Do thời tiết, cuộc họp được lùi sang thứ Hai tuần sau.' },
      { w: '尽快', ipa: 'jǐnkuài', hv: 'tận khoái', vi: 'càng sớm càng tốt, sớm nhất có thể', ex: '请您尽快把资料发给我。', exPy: 'Qǐng nín jǐnkuài bǎ zīliào fā gěi wǒ.', exVi: 'Mong anh/chị gửi tài liệu cho tôi sớm nhất có thể.' },
      { w: '合同', ipa: 'hétong', hv: 'hợp đồng', vi: 'hợp đồng', ex: '双方已经签了合同。', exPy: 'Shuāngfāng yǐjīng qiānle hétong.', exVi: 'Hai bên đã ký hợp đồng.' },
      { w: '资料', ipa: 'zīliào', hv: 'tư liệu', vi: 'tài liệu, tư liệu', ex: '相关资料请见附件。', exPy: 'Xiāngguān zīliào qǐng jiàn fùjiàn.', exVi: 'Tài liệu liên quan vui lòng xem tệp đính kèm.' },
      { w: '汇报', ipa: 'huìbào', hv: 'hối báo', vi: 'báo cáo (lên cấp trên)', ex: '我明天向经理汇报工作。', exPy: 'Wǒ míngtiān xiàng jīnglǐ huìbào gōngzuò.', exVi: 'Ngày mai tôi báo cáo công việc với giám đốc.' },
      { w: '召开', ipa: 'zhàokāi', hv: 'triệu khai', vi: 'tổ chức, triệu tập (cuộc họp, hội nghị)', ex: '公司将于下周三召开年度会议。', exPy: 'Gōngsī jiāng yú xià zhōusān zhàokāi niándù huìyì.', exVi: 'Công ty sẽ tổ chức hội nghị thường niên vào thứ Tư tuần sau.' },
      { w: '出席', ipa: 'chūxí', hv: 'xuất tịch', vi: 'có mặt, tham dự (cuộc họp, buổi lễ)', ex: '很遗憾，我不能出席明天的会议。', exPy: 'Hěn yíhàn, wǒ bù néng chūxí míngtiān de huìyì.', exVi: 'Rất tiếc, tôi không thể tham dự cuộc họp ngày mai.' },
      { w: '是否', ipa: 'shìfǒu', hv: 'thị phủ', vi: 'có … hay không (văn viết)', ex: '请告诉我您是否能参加。', exPy: 'Qǐng gàosu wǒ nín shìfǒu néng cānjiā.', exVi: 'Xin cho tôi biết anh/chị có thể tham gia hay không.' }
    ],
    exercises: [
      { type: 'mc', q: '请问您___方便参加明天的会议？', options: ['多么', '竟然', '是否'], answer: 2, explain: '是否 = có… hay không, dùng trong văn viết, email trang trọng (tương đương 是不是 trong khẩu ngữ).' },
      { type: 'fill', q: '由于天气原因，会议___到下周一。', answer: ['推迟', 'tuīchí', 'tuichi'], hint: 'lùi lại, hoãn (tuīchí)', explain: '推迟到 + thời gian = lùi đến….' },
      { type: 'mc', q: '"出席" thường dùng trong hoàn cảnh nào?', options: ['Tham dự cuộc họp, buổi lễ trang trọng', 'Ra ngoài đi dạo', 'Đi học muộn'], answer: 0, explain: '出席会议 / 出席婚礼 = tham dự cuộc họp / lễ cưới.' },
      { type: 'order', vi: 'Mong anh/chị gửi tài liệu cho tôi sớm nhất có thể.', words: ['把资料', '尽快', '请您', '发给我'], answer: '请您 尽快 把资料 发给我', alt: ['请您 把资料 尽快 发给我'] },
      { type: 'fill', q: '收到邮件后，请回复___。', answer: ['确认', 'quèrèn', 'queren'], hint: 'xác nhận (quèrèn)', explain: '回复确认 = trả lời để xác nhận.' },
      { type: 'mc', q: '我明天要向经理___上个月的工作。', options: ['召开', '汇报', '申请'], answer: 1, explain: '向 + cấp trên + 汇报 = báo cáo với cấp trên.' },
      { type: 'order', vi: 'Công ty sẽ tổ chức cuộc họp vào thứ Tư tuần sau.', words: ['召开', '公司', '下周三', '会议', '将于'], answer: '公司 将于 下周三 召开 会议' },
      { type: 'mc', q: '"合同" nghĩa là:', options: ['hồ sơ xin việc', 'hợp đồng', 'tệp đính kèm'], answer: 1, explain: '合同 (hétong) = hợp đồng; 简历 = hồ sơ xin việc; 附件 = tệp đính kèm.' }
    ],
    reading: {
      title: '关于推迟会议的通知',
      titleVi: 'Thông báo về việc lùi lịch họp',
      text: [
        '尊敬的各位同事：大家好！原定于本周五下午两点召开的季度工作会议，由于总经理临时需要出差，因此决定推迟到下周一上午十点举行，地点不变，仍然在三楼的大会议室。给大家带来不便，我们深表歉意。',
        '这次会议主要有三个内容：第一，各部门经理汇报本季度的工作情况；第二，讨论与新客户签订合同的问题；第三，安排下个季度的培训计划。会议大约需要两个小时，请大家提前做好准备。',
        '会议的相关资料已经放在附件里，请大家在会议前认真阅读。如果您对资料有任何问题，或者有新的建议，欢迎尽快发邮件给我。另外，请需要做汇报的经理在周日晚上以前把材料发给我，方便我提前打印。',
        '最后，麻烦各位在本周四下班以前回复邮件，确认是否能够按时出席。如果因为特殊情况不能参加，请提前向部门经理申请，并安排其他同事代替您参加。感谢大家的理解和支持！祝工作顺利！行政部 李丽'
      ],
      py: [
        'Zūnjìng de gèwèi tóngshì: Dàjiā hǎo! Yuán dìng yú běn zhōuwǔ xiàwǔ liǎng diǎn zhàokāi de jìdù gōngzuò huìyì, yóuyú zǒngjīnglǐ línshí xūyào chūchāi, yīncǐ juédìng tuīchí dào xià zhōuyī shàngwǔ shí diǎn jǔxíng, dìdiǎn bú biàn, réngrán zài sān lóu de dà huìyìshì. Gěi dàjiā dàilai búbiàn, wǒmen shēn biǎo qiànyì.',
        'Zhè cì huìyì zhǔyào yǒu sān ge nèiróng: dì-yī, gè bùmén jīnglǐ huìbào běn jìdù de gōngzuò qíngkuàng; dì-èr, tǎolùn yǔ xīn kèhù qiāndìng hétong de wèntí; dì-sān, ānpái xià ge jìdù de péixùn jìhuà. Huìyì dàyuē xūyào liǎng ge xiǎoshí, qǐng dàjiā tíqián zuòhǎo zhǔnbèi.',
        'Huìyì de xiāngguān zīliào yǐjīng fàng zài fùjiàn li, qǐng dàjiā zài huìyì qián rènzhēn yuèdú. Rúguǒ nín duì zīliào yǒu rènhé wèntí, huòzhě yǒu xīn de jiànyì, huānyíng jǐnkuài fā yóujiàn gěi wǒ. Lìngwài, qǐng xūyào zuò huìbào de jīnglǐ zài zhōurì wǎnshang yǐqián bǎ cáiliào fā gěi wǒ, fāngbiàn wǒ tíqián dǎyìn.',
        'Zuìhòu, máfan gèwèi zài běn zhōusì xiàbān yǐqián huífù yóujiàn, quèrèn shìfǒu nénggòu ànshí chūxí. Rúguǒ yīnwèi tèshū qíngkuàng bù néng cānjiā, qǐng tíqián xiàng bùmén jīnglǐ shēnqǐng, bìng ānpái qítā tóngshì dàitì nín cānjiā. Gǎnxiè dàjiā de lǐjiě hé zhīchí! Zhù gōngzuò shùnlì! Xíngzhèngbù Lǐ Lì'
      ],
      vi: [
        'Kính gửi các anh chị đồng nghiệp: Chào mọi người! Cuộc họp công việc hằng quý dự kiến tổ chức lúc 2 giờ chiều thứ Sáu tuần này, do tổng giám đốc phải đi công tác đột xuất, nên đã quyết định lùi sang 10 giờ sáng thứ Hai tuần sau, địa điểm không đổi, vẫn ở phòng họp lớn tầng ba. Chúng tôi thành thật xin lỗi vì sự bất tiện này.',
        'Cuộc họp lần này có ba nội dung chính: thứ nhất, giám đốc các phòng ban báo cáo tình hình công việc quý này; thứ hai, thảo luận vấn đề ký hợp đồng với khách hàng mới; thứ ba, sắp xếp kế hoạch đào tạo cho quý tới. Cuộc họp kéo dài khoảng hai tiếng, đề nghị mọi người chuẩn bị trước.',
        'Tài liệu liên quan đến cuộc họp đã được đính kèm, mong mọi người đọc kỹ trước khi họp. Nếu anh chị có bất kỳ thắc mắc nào về tài liệu hoặc có đề xuất mới, xin vui lòng gửi email cho tôi càng sớm càng tốt. Ngoài ra, các giám đốc cần báo cáo vui lòng gửi tài liệu cho tôi trước tối Chủ nhật để tôi tiện in trước.',
        'Cuối cùng, phiền mọi người trả lời email trước giờ tan làm thứ Năm tuần này để xác nhận có thể tham dự đúng giờ hay không. Nếu vì lý do đặc biệt không thể tham gia, xin hãy báo xin phép trước với giám đốc phòng mình và sắp xếp đồng nghiệp khác đi họp thay. Cảm ơn sự thông cảm và ủng hộ của mọi người! Chúc mọi người công việc thuận lợi! Phòng Hành chính – Lý Lệ'
      ],
      questions: [
        { q: 'Cuộc họp được lùi sang thời gian nào?', options: ['2 giờ chiều thứ Sáu tuần này', 'Chiều thứ Năm tuần này', '10 giờ sáng thứ Hai tuần sau', 'Chưa xác định'], answer: 2, explain: 'Đoạn 1: 推迟到下周一上午十点举行。' },
        { q: 'Vì sao cuộc họp phải lùi lại?', options: ['Tổng giám đốc phải đi công tác đột xuất', 'Phòng họp đang sửa chữa', 'Khách hàng mới không đến được', 'Tài liệu chưa chuẩn bị xong'], answer: 0, explain: 'Đoạn 1: 由于总经理临时需要出差。' },
        { q: 'Các giám đốc cần báo cáo phải làm gì trước tối Chủ nhật?', options: ['Ký hợp đồng với khách hàng mới', 'Gửi tài liệu cho chị Lý Lệ để in trước', 'Đặt phòng họp', 'Gọi điện cho tổng giám đốc'], answer: 1, explain: 'Đoạn 3: 请需要做汇报的经理在周日晚上以前把材料发给我，方便我提前打印。' },
        { q: 'Mục đích chính của email này là gì?', options: ['Mời khách hàng đến ký hợp đồng', 'Xin nghỉ phép', 'Báo cáo kết quả kinh doanh của quý', 'Thông báo lùi lịch họp và đề nghị xác nhận tham dự'], answer: 3, explain: 'Email thông báo cuộc họp bị lùi, nêu nội dung và đề nghị mọi người trả lời xác nhận 是否能够按时出席.' }
      ]
    }
  }
};
