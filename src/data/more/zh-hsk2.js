// Bài mới chèn vào lộ trình tiếng Trung – HSK2 (xem cuối src/data/SCHEMA.md)
export default [
  // zh-hsk2-1b: Lớp học & gọi điện thoại
  {
    after: 'zh-hsk2-1',
    unit: {
      id: 'zh-hsk2-1b',
      icon: '🏫',
      title: 'Lớp học & gọi điện thoại',
      goal: 'Nói về việc học ở lớp, mượn sách, nhờ bạn xem giúp; nghe và gọi điện thoại; khuyên nhủ, nhắc nhở bằng 别 / 不要.',
      vocab: [
        { w: '教室', ipa: 'jiàoshì', hv: 'giáo thất', vi: 'phòng học', ex: '教室里有三十个学生。', exPy: 'Jiàoshì li yǒu sānshí gè xuésheng.', exVi: 'Trong phòng học có ba mươi học sinh.' },
        { w: '词典', ipa: 'cídiǎn', hv: 'từ điển', vi: 'từ điển', ex: '你有汉语词典吗？', exPy: 'Nǐ yǒu Hànyǔ cídiǎn ma?', exVi: 'Bạn có từ điển tiếng Trung không?' },
        { w: '复习', ipa: 'fùxí', hv: 'phục tập', vi: 'ôn tập, ôn bài', ex: '我们复习一下生词吧。', exPy: 'Wǒmen fùxí yíxià shēngcí ba.', exVi: 'Chúng ta ôn lại từ mới một chút nhé.' },
        { w: '预习', ipa: 'yùxí', hv: 'dự tập', vi: 'chuẩn bị bài trước', ex: '我每天晚上预习课文。', exPy: 'Wǒ měitiān wǎnshang yùxí kèwén.', exVi: 'Tối nào tôi cũng chuẩn bị trước bài khoá.' },
        { w: '打电话', ipa: 'dǎ diànhuà', hv: 'đả điện thoại', vi: 'gọi điện thoại', ex: '我晚上给妈妈打电话。', exPy: 'Wǒ wǎnshang gěi māma dǎ diànhuà.', exVi: 'Buổi tối tôi gọi điện cho mẹ.' },
        { w: '喂', ipa: 'wèi', hv: 'uy', vi: 'alô (khi gọi điện; khẩu ngữ hay đọc wéi)', ex: '喂，你好！请问李老师在吗？', exPy: 'Wèi, nǐ hǎo! Qǐngwèn Lǐ lǎoshī zài ma?', exVi: 'Alô, xin chào! Xin hỏi cô Lý có ở đó không ạ?' },
        { w: '作业', ipa: 'zuòyè', hv: 'tác nghiệp', vi: 'bài tập về nhà', ex: '今天的作业很多。', exPy: 'Jīntiān de zuòyè hěn duō.', exVi: 'Bài tập về nhà hôm nay rất nhiều.' },
        { w: '黑板', ipa: 'hēibǎn', hv: 'hắc bản', vi: 'bảng đen', ex: '老师在黑板上写字。', exPy: 'Lǎoshī zài hēibǎn shang xiě zì.', exVi: 'Thầy giáo viết chữ lên bảng.' },
        { w: '年级', ipa: 'niánjí', hv: 'niên cấp', vi: 'năm học, khối lớp (năm thứ…)', ex: '我是大学二年级的学生。', exPy: 'Wǒ shì dàxué èr niánjí de xuésheng.', exVi: 'Tôi là sinh viên năm hai.' },
        { w: '班', ipa: 'bān', hv: 'ban', vi: 'lớp (tập thể học sinh)', ex: '我们班有二十个学生。', exPy: 'Wǒmen bān yǒu èrshí gè xuésheng.', exVi: 'Lớp chúng tôi có hai mươi học sinh.' },
        { w: '留学生', ipa: 'liúxuéshēng', hv: 'lưu học sinh', vi: 'du học sinh', ex: '我们班有很多留学生。', exPy: 'Wǒmen bān yǒu hěn duō liúxuéshēng.', exVi: 'Lớp chúng tôi có nhiều du học sinh.' },
        { w: '题', ipa: 'tí', hv: 'đề', vi: 'câu (bài tập), đề', ex: '第五题很难。', exPy: 'Dì-wǔ tí hěn nán.', exVi: 'Câu số 5 rất khó.' },
        { w: '别', ipa: 'bié', hv: 'biệt', vi: 'đừng (khuyên, nhắc)', ex: '上课的时候别说话。', exPy: 'Shàngkè de shíhou bié shuōhuà.', exVi: 'Trong giờ học đừng nói chuyện.' },
        { w: '不要', ipa: 'búyào', hv: 'bất yếu', vi: 'không được (cấm, mạnh hơn 别)', ex: '在图书馆不要打电话。', exPy: 'Zài túshūguǎn búyào dǎ diànhuà.', exVi: 'Ở thư viện không được gọi điện thoại.' },
        { w: '试', ipa: 'shì', hv: 'thí', vi: 'thử', ex: '这个题很难，你试试。', exPy: 'Zhège tí hěn nán, nǐ shìshi.', exVi: 'Câu này khó lắm, bạn thử xem.' },
        { w: '短信', ipa: 'duǎnxìn', hv: 'đoản tín', vi: 'tin nhắn (điện thoại)', ex: '我给你发一个短信吧。', exPy: 'Wǒ gěi nǐ fā yí gè duǎnxìn ba.', exVi: 'Để mình gửi cho bạn một tin nhắn nhé.' },
        { w: '声音', ipa: 'shēngyīn', hv: 'thanh âm', vi: 'âm thanh, giọng nói', ex: '喂？你的声音太小了！', exPy: 'Wèi? Nǐ de shēngyīn tài xiǎo le!', exVi: 'Alô? Giọng bạn nhỏ quá!' },
        { w: '借', ipa: 'jiè', hv: 'tá', vi: 'mượn; cho mượn', ex: '我想借一本书。', exPy: 'Wǒ xiǎng jiè yì běn shū.', exVi: 'Tôi muốn mượn một quyển sách.' },
        { w: '图书馆', ipa: 'túshūguǎn', hv: 'đồ thư quán', vi: 'thư viện', ex: '我下午去图书馆看书。', exPy: 'Wǒ xiàwǔ qù túshūguǎn kàn shū.', exVi: 'Buổi chiều tôi đến thư viện đọc sách.' },
        { w: '忘', ipa: 'wàng', hv: 'vong', vi: 'quên', ex: '明天有考试，别忘了！', exPy: 'Míngtiān yǒu kǎoshì, bié wàng le!', exVi: 'Mai có bài kiểm tra, đừng quên nhé!' }
      ],
      grammar: {
        title: 'Lặp động từ (看看, 试试, 复习复习) và lời khuyên, nhắc nhở với 别 / 不要',
        explain: [
          'Lặp lại động từ làm cho hành động nhẹ nhàng, ngắn, mang ý "thử…, …xem, …một chút": 看看 (xem thử), 试试 (thử xem), 听听 (nghe thử). Động từ một âm tiết lặp kiểu AA hoặc A一A (看一看); động từ hai âm tiết lặp kiểu ABAB: 复习复习, 介绍介绍 (✗ 复复习习). Chữ lặp lại đọc nhẹ: kànkan, shìshi.',
          'Cách nói tương đương: động từ + 一下: 看一下, 复习一下. Nếu việc đã làm rồi thì chen 了 vào giữa: 看了看 (đã xem qua), ✗ 看看了. Không lặp các động từ không chủ ý hoặc chỉ trạng thái như 是, 有, 喜欢, 在.',
          '别 / 不要 + động từ = đừng…, không được… (khuyên, nhắc, cấm). 别 thân mật, hay dùng khi nói chuyện; 不要 nghiêm hơn, hay gặp trong nội quy, biển báo: 图书馆里不要打电话. Lịch sự hơn: 请不要… (xin đừng…).',
          'Thêm 了 cuối câu: 别 / 不要 + V + 了 = thôi đừng… nữa (bảo người ta dừng việc đang làm): 别看手机了！ Câu quen thuộc: 别忘了！ (đừng quên nhé!).'
        ],
        table: [
          ['Mẫu', 'Ví dụ', 'Nghĩa'],
          ['AA / A一A', '你看看。/ 你看一看。', 'Bạn xem thử đi.'],
          ['ABAB', '我们复习复习。', 'Chúng ta ôn lại một chút.'],
          ['V + 一下', '请等一下。', 'Xin đợi một chút.'],
          ['A了A (đã làm)', '他看了看黑板。', 'Anh ấy liếc nhìn lên bảng.'],
          ['别 / 不要 + V', '别说话！/ 不要打电话！', 'Đừng nói chuyện! / Không được gọi điện!'],
          ['别 + V + 了', '别玩手机了！', 'Thôi đừng nghịch điện thoại nữa!']
        ],
        examples: [
          { t: '这件衣服很好看，你试试吧。', py: 'Zhè jiàn yīfu hěn hǎokàn, nǐ shìshi ba.', vi: 'Cái áo này đẹp lắm, bạn mặc thử xem.' },
          { t: '明天考试，我们晚上复习复习。', py: 'Míngtiān kǎoshì, wǒmen wǎnshang fùxí fùxí.', vi: 'Mai thi rồi, tối nay chúng ta ôn bài một chút.' },
          { t: '老师看了看我的作业，说：“很好！”', py: 'Lǎoshī kàn le kàn wǒ de zuòyè, shuō: “Hěn hǎo!”', vi: 'Cô giáo xem qua bài tập của tôi, nói: “Tốt lắm!”' },
          { t: '上课的时候别打电话。', py: 'Shàngkè de shíhou bié dǎ diànhuà.', vi: 'Trong giờ học đừng gọi điện thoại.' },
          { t: '太晚了，别看书了，睡觉吧！', py: 'Tài wǎn le, bié kàn shū le, shuìjiào ba!', vi: 'Muộn quá rồi, thôi đừng đọc sách nữa, đi ngủ đi!' }
        ],
        tip: 'Người Việt hay dùng 不 để ra lệnh "đừng": ✗ 不说话！ — 不 chỉ phủ định, không dùng để cấm. Muốn nói "Đừng nói chuyện!" phải là 别说话！ hoặc 不要说话！ Khi lặp động từ hai âm tiết, lặp cả cụm: ✗ 复复习习 → 复习复习; và việc đã làm là 看了看, ✗ 看看了.'
      },
      dialogue: [
        { s: '大卫', t: '喂，是王明吗？我是大卫。', py: 'Wèi, shì Wáng Míng ma? Wǒ shì Dàwèi.', vi: 'Alô, Vương Minh đấy à? Mình là David.' },
        { s: '王明', t: '大卫，你好！你的声音太小了，你在哪儿？', py: 'Dàwèi, nǐ hǎo! Nǐ de shēngyīn tài xiǎo le, nǐ zài nǎr?', vi: 'Chào David! Giọng bạn nhỏ quá, bạn đang ở đâu thế?' },
        { s: '大卫', t: '我在图书馆。今天的作业很难，第三题怎么做？', py: 'Wǒ zài túshūguǎn. Jīntiān de zuòyè hěn nán, dì-sān tí zěnme zuò?', vi: 'Mình ở thư viện. Bài tập hôm nay khó quá, câu 3 làm thế nào?' },
        { s: '王明', t: '第三题？你看看课文吧。', py: 'Dì-sān tí? Nǐ kànkan kèwén ba.', vi: 'Câu 3 à? Bạn xem lại bài khoá thử đi.' },
        { s: '大卫', t: '我看了看，还是不知道。', py: 'Wǒ kàn le kàn, háishi bù zhīdào.', vi: 'Mình xem qua rồi, vẫn không biết.' },
        { s: '王明', t: '那你借一本词典，试试吧。明天早上八点我们在教室复习复习，怎么样？', py: 'Nà nǐ jiè yì běn cídiǎn, shìshi ba. Míngtiān zǎoshang bā diǎn wǒmen zài jiàoshì fùxí fùxí, zěnmeyàng?', vi: 'Vậy bạn mượn một cuốn từ điển, thử xem. Tám giờ sáng mai chúng mình ôn bài ở lớp một chút, được không?' },
        { s: '大卫', t: '好！谢谢你。', py: 'Hǎo! Xièxie nǐ.', vi: 'Được! Cảm ơn bạn.' },
        { s: '王明', t: '不客气。别忘了预习新课文！', py: 'Bú kèqi. Bié wàng le yùxí xīn kèwén!', vi: 'Không có gì. Đừng quên chuẩn bị bài khoá mới nhé!' }
      ],
      exercises: [
        { type: 'mc', q: '"Ôn tập một chút" lặp động từ thế nào cho đúng?', options: ['复复习习', '复习复习', '复习习'], answer: 1, explain: 'Động từ hai âm tiết lặp kiểu ABAB: 复习复习.' },
        { type: 'mc', q: '"Tôi đã xem qua một chút" là:', options: ['我看了看。', '我看看了。', '我了看看。'], answer: 0, explain: 'Việc đã làm: chen 了 vào giữa → 看了看.' },
        { type: 'mc', q: 'Nhắc bạn "Đừng nói chuyện!" trong lớp:', options: ['不说话！', '没说话！', '别说话！'], answer: 2, explain: '别 + động từ = đừng…; 不 và 没 không dùng để ra lệnh.' },
        { type: 'mc', q: 'Nhấc máy điện thoại, người Trung Quốc thường nói:', options: ['再见！', '喂，你好！', '没关系！'], answer: 1, explain: '喂 = alô, dùng khi nghe / gọi điện.' },
        { type: 'mc', q: 'Nội quy thư viện: 图书馆里___打电话。', options: ['不要', '没有', '不是'], answer: 0, explain: '不要 + động từ = không được… (cấm).' },
        { type: 'mc', q: '留学生 nghĩa là:', options: ['giáo viên', 'học sinh tiểu học', 'du học sinh'], answer: 2, explain: '留学生 liúxuéshēng (lưu học sinh) = du học sinh.' },
        { type: 'fill', q: '喂？你的___太小了！（Alô? Giọng bạn nhỏ quá!）', answer: ['声音', 'shēngyīn', 'shengyin', 'shēng yīn', 'sheng yin'], hint: 'shēngyīn – giọng nói, âm thanh', explain: '声音 (thanh âm) = âm thanh, giọng nói.' },
        { type: 'fill', q: '这件衣服你试___吧。（Bạn mặc thử cái áo này xem.）', answer: ['试', 'shì', 'shi'], hint: 'shì – thử', explain: 'Lặp động từ: 试试 = thử xem.' },
        { type: 'fill', q: '我想去图书馆___一本书。（Tôi muốn đến thư viện mượn một quyển sách.）', answer: ['借', 'jiè', 'jie'], hint: 'jiè – mượn', explain: '借 (tá) = mượn; cho mượn.' },
        { type: 'fill', q: '晚上我给妈妈打___。（Buổi tối tôi gọi điện cho mẹ.）', answer: ['电话', 'diànhuà', 'dianhua', 'diàn huà', 'dian hua'], hint: 'diànhuà – điện thoại', explain: '给 + người + 打电话 = gọi điện cho ai.' },
        { type: 'fill', q: '明天有考试，别___了！（Mai có bài kiểm tra, đừng quên nhé!）', answer: ['忘', 'wàng', 'wang'], hint: 'wàng – quên', explain: '别忘了 = đừng quên nhé.' },
        { type: 'order', vi: 'Chúng ta ôn bài một chút nhé.', words: ['吧', '复习复习', '我们'], answer: '我们 复习复习 吧' },
        { type: 'order', vi: 'Thôi đừng xem điện thoại nữa!', words: ['手机', '别', '了！', '看'], answer: '别 看 手机 了！' },
        { type: 'order', vi: 'Lớp chúng tôi có rất nhiều du học sinh.', words: ['很多', '留学生', '有', '我们班'], answer: '我们班 有 很多 留学生' },
        { type: 'order', vi: 'Thầy giáo viết chữ lên bảng.', words: ['写字', '黑板上', '老师', '在'], answer: '老师 在 黑板上 写字' },
        { type: 'order', vi: 'Tôi xem từ điển của bạn một chút.', words: ['一下', '你的', '看', '我', '词典'], answer: '我 看 一下 你的 词典' }
      ],
      reading: {
        title: '给妈妈打电话',
        titleVi: 'Gọi điện cho mẹ',
        text: [
          '大卫是美国留学生，在北京学习汉语，现在是大学二年级的学生。',
          '每天晚上，大卫在家预习新课文，复习生词，做作业。作业很难的时候，他就看看词典，或者给同学打电话。',
          '星期六晚上，大卫给妈妈打电话。妈妈说：“喂，大卫！你的声音太小了，你在哪儿？”大卫说：“我在图书馆，这儿不要大声说话。我明天再给你打电话吧。”',
          '妈妈说：“别太累了！”'
        ],
        py: [
          'Dàwèi shì Měiguó liúxuéshēng, zài Běijīng xuéxí Hànyǔ, xiànzài shì dàxué èr niánjí de xuésheng.',
          'Měitiān wǎnshang, Dàwèi zài jiā yùxí xīn kèwén, fùxí shēngcí, zuò zuòyè. Zuòyè hěn nán de shíhou, tā jiù kànkan cídiǎn, huòzhě gěi tóngxué dǎ diànhuà.',
          'Xīngqīliù wǎnshang, Dàwèi gěi māma dǎ diànhuà. Māma shuō: “Wèi, Dàwèi! Nǐ de shēngyīn tài xiǎo le, nǐ zài nǎr?” Dàwèi shuō: “Wǒ zài túshūguǎn, zhèr búyào dàshēng shuōhuà. Wǒ míngtiān zài gěi nǐ dǎ diànhuà ba.”',
          'Māma shuō: “Bié tài lèi le!”'
        ],
        vi: [
          'David là du học sinh người Mỹ, học tiếng Trung ở Bắc Kinh, hiện là sinh viên năm hai.',
          'Tối nào David cũng ở nhà chuẩn bị bài khoá mới, ôn từ mới và làm bài tập. Khi bài tập khó, anh ấy xem từ điển hoặc gọi điện cho bạn cùng lớp.',
          'Tối thứ Bảy, David gọi điện cho mẹ. Mẹ nói: “Alô, David! Giọng con nhỏ quá, con đang ở đâu?” David nói: “Con ở thư viện, ở đây không được nói to. Mai con gọi lại cho mẹ nhé.”',
          'Mẹ nói: “Con đừng mệt quá nhé!”'
        ],
        questions: [
          { q: 'David là ai?', options: ['Giáo viên tiếng Trung', 'Du học sinh người Mỹ, sinh viên năm hai', 'Du học sinh người Anh, sinh viên năm nhất', 'Học sinh trung học'], answer: 1, explain: '大卫是美国留学生…现在是大学二年级的学生.' },
          { q: 'Khi bài tập khó, David làm gì?', options: ['Hỏi giáo viên', 'Đi ngủ sớm', 'Xem từ điển hoặc gọi điện cho bạn cùng lớp', 'Bỏ không làm'], answer: 2, explain: '他就看看词典，或者给同学打电话.' },
          { q: 'Vì sao David nói nhỏ khi gọi cho mẹ?', options: ['Vì anh ấy ở thư viện, không được nói to', 'Vì anh ấy bị ốm', 'Vì mẹ đang ngủ'], answer: 0, explain: '我在图书馆，这儿不要大声说话 – ở thư viện không được nói to.' },
          { q: 'Cuối cuộc gọi mẹ dặn David điều gì?', options: ['Nhớ mượn từ điển', 'Gọi lại ngay tối nay', 'Đừng xem điện thoại', 'Đừng mệt quá'], answer: 3, explain: '妈妈说：“别太累了！”' }
        ]
      }
    }
  },

  // zh-hsk2-4b: Gọi món – 了 hoàn thành & 了 thay đổi
  {
    after: 'zh-hsk2-4',
    unit: {
      id: 'zh-hsk2-4b',
      icon: '🥢',
      title: 'Gọi món ở nhà hàng',
      goal: 'Gọi món ở quán ăn, nhận xét mùi vị, nói "no rồi", "không… nữa" và phân biệt hai chữ 了.',
      vocab: [
        { w: '筷子', ipa: 'kuàizi', hv: 'khoái tử', vi: 'đũa', ex: '服务员，请给我一双筷子。', exPy: 'Fúwùyuán, qǐng gěi wǒ yì shuāng kuàizi.', exVi: 'Anh phục vụ ơi, cho tôi một đôi đũa.' },
        { w: '碗', ipa: 'wǎn', hv: 'uyển', vi: 'bát, chén', ex: '我吃了两碗米饭。', exPy: 'Wǒ chī le liǎng wǎn mǐfàn.', exVi: 'Tôi đã ăn hai bát cơm.' },
        { w: '菜单', ipa: 'càidān', hv: 'thái đơn', vi: 'thực đơn', ex: '请给我们看看菜单。', exPy: 'Qǐng gěi wǒmen kànkan càidān.', exVi: 'Cho chúng tôi xem thực đơn với.' },
        { w: '服务员', ipa: 'fúwùyuán', hv: 'phục vụ viên', vi: 'nhân viên phục vụ', ex: '服务员，我们要点菜。', exPy: 'Fúwùyuán, wǒmen yào diǎn cài.', exVi: 'Phục vụ ơi, chúng tôi muốn gọi món.' },
        { w: '点菜', ipa: 'diǎn cài', hv: 'điểm thái', vi: 'gọi món (mở rộng)', ex: '你们点菜了吗？', exPy: 'Nǐmen diǎn cài le ma?', exVi: 'Các bạn gọi món chưa?' },
        { w: '饱', ipa: 'bǎo', hv: 'bão', vi: 'no', ex: '我吃饱了，不吃了。', exPy: 'Wǒ chī bǎo le, bù chī le.', exVi: 'Tôi ăn no rồi, không ăn nữa.' },
        { w: '辣', ipa: 'là', hv: 'lạt', vi: 'cay', ex: '这个菜太辣了！', exPy: 'Zhège cài tài là le!', exVi: 'Món này cay quá!' },
        { w: '甜', ipa: 'tián', hv: 'điềm', vi: 'ngọt', ex: '我不喜欢太甜的东西。', exPy: 'Wǒ bù xǐhuan tài tián de dōngxi.', exVi: 'Tôi không thích đồ quá ngọt.' },
        { w: '酸', ipa: 'suān', hv: 'toan', vi: 'chua', ex: '这个苹果很酸，我不吃了。', exPy: 'Zhège píngguǒ hěn suān, wǒ bù chī le.', exVi: 'Quả táo này chua lắm, tôi không ăn nữa.' },
        { w: '咖啡', ipa: 'kāfēi', hv: '', vi: 'cà phê', ex: '我以前喝咖啡，现在不喝咖啡了。', exPy: 'Wǒ yǐqián hē kāfēi, xiànzài bù hē kāfēi le.', exVi: 'Trước đây tôi uống cà phê, bây giờ không uống nữa.' },
        { w: '啤酒', ipa: 'píjiǔ', hv: '', vi: 'bia', ex: '他喝了一杯啤酒。', exPy: 'Tā hē le yì bēi píjiǔ.', exVi: 'Anh ấy đã uống một cốc bia.' },
        { w: '汤', ipa: 'tāng', hv: 'thang', vi: 'canh, súp', ex: '这里的鸡蛋汤很好喝。', exPy: 'Zhèlǐ de jīdàn tāng hěn hǎohē.', exVi: 'Canh trứng ở đây rất ngon.' },
        { w: '味道', ipa: 'wèidao', hv: 'vị đạo', vi: 'mùi vị, vị', ex: '这个菜的味道怎么样？', exPy: 'Zhège cài de wèidao zěnmeyàng?', exVi: 'Món này vị thế nào?' },
        { w: '饺子', ipa: 'jiǎozi', hv: 'giảo tử', vi: 'sủi cảo, bánh chẻo', ex: '我吃了十个饺子。', exPy: 'Wǒ chī le shí gè jiǎozi.', exVi: 'Tôi đã ăn mười cái sủi cảo.' },
        { w: '包子', ipa: 'bāozi', hv: 'bao tử', vi: 'bánh bao', ex: '早上我吃了两个包子。', exPy: 'Zǎoshang wǒ chī le liǎng gè bāozi.', exVi: 'Sáng nay tôi đã ăn hai cái bánh bao.' },
        { w: '鸡', ipa: 'jī', hv: 'kê', vi: 'gà', ex: '我不吃鸡肉，我想吃鱼。', exPy: 'Wǒ bù chī jīròu, wǒ xiǎng chī yú.', exVi: 'Tôi không ăn thịt gà, tôi muốn ăn cá.' },
        { w: '盘子', ipa: 'pánzi', hv: 'bàn tử', vi: 'đĩa', ex: '盘子里的菜都吃完了。', exPy: 'Pánzi lǐ de cài dōu chī wán le.', exVi: 'Thức ăn trong đĩa đã ăn hết rồi.' },
        { w: '够', ipa: 'gòu', hv: 'cú', vi: 'đủ', ex: '——两个菜够了吗？——够了。', exPy: '— Liǎng gè cài gòu le ma? — Gòu le.', exVi: '— Hai món đủ chưa? — Đủ rồi.' },
        { w: '饭馆', ipa: 'fànguǎn', hv: 'phạn quán', vi: 'quán ăn, quán cơm', ex: '学校旁边有一个小饭馆。', exPy: 'Xuéxiào pángbiān yǒu yí gè xiǎo fànguǎn.', exVi: 'Bên cạnh trường có một quán ăn nhỏ.' },
        { w: '凉', ipa: 'liáng', hv: 'lương', vi: 'nguội, mát', ex: '菜凉了，我们快吃吧。', exPy: 'Cài liáng le, wǒmen kuài chī ba.', exVi: 'Thức ăn nguội rồi, chúng ta ăn nhanh đi.' }
      ],
      grammar: {
        title: '了 sau động từ (hoàn thành) và 了 cuối câu (thay đổi)',
        explain: [
          'Ở bài trước ta đã biết 了 cho biết việc đã xảy ra. Thật ra có HAI chữ 了 với vị trí và nhiệm vụ khác nhau. 了1 đứng NGAY SAU ĐỘNG TỪ, cho biết hành động đã hoàn thành: 我吃了两碗饭 (tôi đã ăn hai bát cơm). Tân ngữ sau 了1 thường có số lượng hoặc định ngữ: 喝了一杯咖啡, 点了三个菜. Nếu tân ngữ trơn (我吃了饭) thì câu nghe như chưa xong, phải nói tiếp: 我吃了饭就去学校.',
          '了2 đứng CUỐI CÂU, báo một TÌNH HUỐNG MỚI, một sự thay đổi so với trước: 我饱了 (lúc nãy đói, giờ no rồi), 菜凉了 (thức ăn nguội rồi), 他是大学生了 (giờ cậu ấy đã là sinh viên). Sau tính từ, 是, 有… chỉ có 了2, vì chúng không phải hành động.',
          '不 + động từ + 了 (cuối câu) = KHÔNG… NỮA, tức là đổi ý định hay thói quen: 我不喝咖啡了 (tôi không uống cà phê nữa), 我吃饱了，不吃了. Đừng lẫn với 没 + động từ = đã không làm (việc trong quá khứ), câu này không có 了: 我没喝咖啡.',
          'Hai chữ 了 có thể cùng xuất hiện: động từ + 了 + số lượng + tân ngữ + 了 = TÍNH ĐẾN BÂY GIỜ đã… (và có thể còn tiếp): 我吃了三个饺子了 (đến giờ tôi đã ăn được ba cái, còn ăn nữa). Còn 我吃了三个饺子 chỉ kể lại một việc đã xong: đã ăn ba cái.'
        ],
        table: [
          ['', 'Vị trí', 'Ý nghĩa', 'Ví dụ'],
          ['了1', 'Ngay sau động từ', 'Hành động đã hoàn thành', '我点了两个菜。'],
          ['了2', 'Cuối câu', 'Tình huống mới, có thay đổi', '我饱了。/ 菜凉了。'],
          ['不 … 了', '不 + động từ + 了 cuối câu', 'Không … nữa', '我不喝啤酒了。'],
          ['了1 + 了2', 'V了 + số lượng + tân ngữ + 了', 'Tính đến giờ đã … (còn tiếp)', '我喝了两杯咖啡了。']
        ],
        examples: [
          { t: '我们点了三个菜，一个汤。', py: 'Wǒmen diǎn le sān gè cài, yí gè tāng.', vi: 'Chúng tôi đã gọi ba món và một bát canh.' },
          { t: '我吃饱了，谢谢！', py: 'Wǒ chī bǎo le, xièxie!', vi: 'Tôi ăn no rồi, cảm ơn!' },
          { t: '饭好了，大家来吃吧！', py: 'Fàn hǎo le, dàjiā lái chī ba!', vi: 'Cơm xong rồi, mọi người lại ăn đi!' },
          { t: '我现在不喝啤酒了。', py: 'Wǒ xiànzài bù hē píjiǔ le.', vi: 'Bây giờ tôi không uống bia nữa.' },
          { t: '他喝了两杯咖啡了，还想喝。', py: 'Tā hē le liǎng bēi kāfēi le, hái xiǎng hē.', vi: 'Anh ấy đã uống hai cốc cà phê rồi, vẫn còn muốn uống.' }
        ],
        tip: 'Người Việt hay gắn 了 vào mọi câu có chữ "đã": ✗ 我昨天很忙了 — tính từ tả tình trạng trong quá khứ không cần 了: 我昨天很忙. Nhớ thêm: ✗ 我没吃了 → 我没吃 (có 没 thì không có 了). Mẹo dịch: 了1 ≈ "đã … (xong)", 了2 ≈ "… rồi" (giờ đã khác trước), 不…了 ≈ "không … nữa".'
      },
      dialogue: [
        { s: '服务员', t: '您好！这是菜单。您要点菜吗？', py: 'Nín hǎo! Zhè shì càidān. Nín yào diǎn cài ma?', vi: 'Chào chị! Đây là thực đơn. Chị gọi món ạ?' },
        { s: 'Lan', t: '我看看……我要一碗鸡蛋汤，十个饺子。', py: 'Wǒ kànkan…… wǒ yào yì wǎn jīdàn tāng, shí gè jiǎozi.', vi: 'Để tôi xem… Cho tôi một bát canh trứng, mười cái sủi cảo.' },
        { s: '服务员', t: '我们的饺子很辣，可以吗？', py: 'Wǒmen de jiǎozi hěn là, kěyǐ ma?', vi: 'Sủi cảo của quán khá cay, được không ạ?' },
        { s: 'Lan', t: '没关系，我喜欢吃辣的。请给我一双筷子。', py: 'Méi guānxi, wǒ xǐhuan chī là de. Qǐng gěi wǒ yì shuāng kuàizi.', vi: 'Không sao, tôi thích ăn cay. Cho tôi một đôi đũa nhé.' },
        { s: '服务员', t: '好的。您的饺子和汤来了，请慢用。', py: 'Hǎo de. Nín de jiǎozi hé tāng lái le, qǐng màn yòng.', vi: 'Vâng. Sủi cảo và canh của chị đây rồi, chị dùng ngon miệng.' },
        { s: 'Lan', t: '谢谢！', py: 'Xièxie!', vi: 'Cảm ơn!' },
        { s: '服务员', t: '菜的味道怎么样？', py: 'Cài de wèidao zěnmeyàng?', vi: 'Món ăn vị thế nào ạ?' },
        { s: 'Lan', t: '很好吃！我已经吃了八个饺子了。', py: 'Hěn hǎochī! Wǒ yǐjīng chī le bā gè jiǎozi le.', vi: 'Ngon lắm! Tôi đã ăn được tám cái rồi.' },
        { s: '服务员', t: '还要别的吗？来一杯咖啡吧？', py: 'Hái yào bié de ma? Lái yì bēi kāfēi ba?', vi: 'Chị dùng thêm gì không ạ? Một cốc cà phê nhé?' },
        { s: 'Lan', t: '不用了，我吃饱了。以前我常常喝咖啡，现在不喝了。', py: 'Bú yòng le, wǒ chī bǎo le. Yǐqián wǒ chángcháng hē kāfēi, xiànzài bù hē le.', vi: 'Thôi khỏi, tôi no rồi. Trước đây tôi hay uống cà phê, giờ không uống nữa.' }
      ],
      exercises: [
        { type: 'mc', q: '我吃___两碗米饭。（Tôi đã ăn hai bát cơm.）', options: ['了', '过', '的'], answer: 0, explain: '了1 đứng ngay sau động từ, báo hành động đã hoàn thành; tân ngữ có số lượng (两碗米饭).' },
        { type: 'mc', q: '"Tôi no rồi." nói thế nào?', options: ['我饱。', '我饱了。', '我了饱。'], answer: 1, explain: '饱 là tính từ; 了2 cuối câu báo tình trạng mới (trước đói, giờ no).' },
        { type: 'mc', q: '我以前喝咖啡，现在___。（…bây giờ không uống nữa.）', options: ['没喝了', '不喝过', '不喝了'], answer: 2, explain: '不 + V + 了 = không … nữa. 没 không đi với 了.' },
        { type: 'mc', q: 'Câu nào có 了 báo một TÌNH HUỐNG MỚI (thay đổi)?', options: ['我买了一本书。', '我点了两个菜。', '他是大学生了。'], answer: 2, explain: '了 cuối câu sau 是大学生 = giờ cậu ấy đã là sinh viên (trước thì chưa). Hai câu kia là 了1 sau động từ.' },
        { type: 'mc', q: '筷子 là gì?', options: ['cái thìa', 'đôi đũa', 'cái bát'], answer: 1, explain: '筷子 kuàizi = đũa; lượng từ là 双: 一双筷子.' },
        { type: 'mc', q: '"我吃了三个饺子了。" nghĩa là:', options: ['Đến giờ tôi đã ăn ba cái sủi cảo (có thể ăn tiếp)', 'Tôi đã ăn ba cái sủi cảo (kể lại, xong rồi)', 'Tôi chưa ăn cái sủi cảo nào'], answer: 0, explain: 'Có cả 了1 và 了2: tính đến bây giờ đã ăn ba cái, việc ăn có thể còn tiếp.' },
        { type: 'mc', q: '这个菜太___了，我不能吃。（Món này cay quá, tôi không ăn được.）', options: ['饱', '够', '辣'], answer: 2, explain: '辣 là = cay; 饱 = no; 够 = đủ.' },
        { type: 'fill', q: '服务员，请给我们看看___。（Phục vụ ơi, cho chúng tôi xem thực đơn.）', answer: ['菜单', 'càidān', 'caidan', 'cài dān', 'cai dan'], hint: 'càidān – thực đơn', explain: '菜单 = thực đơn (菜 món ăn + 单 tờ, danh sách).' },
        { type: 'fill', q: '我吃___了，不吃了。（Tôi ăn no rồi, không ăn nữa.）', answer: ['饱', 'bǎo', 'bao'], hint: 'bǎo – no', explain: '吃饱了 = ăn no rồi; 不吃了 = không ăn nữa.' },
        { type: 'fill', q: '汤___了，你快喝吧。（Canh nguội rồi, bạn uống nhanh đi.）', answer: ['凉', 'liáng', 'liang'], hint: 'liáng – nguội, mát', explain: '凉了 = nguội rồi: 了2 báo sự thay đổi trạng thái.' },
        { type: 'fill', q: '两个菜___吗？（Hai món có đủ không?）', answer: ['够', 'gòu', 'gou'], hint: 'gòu – đủ', explain: '够 = đủ; trả lời: 够了 (đủ rồi) / 不够 (không đủ).' },
        { type: 'fill', q: '我现在___喝啤酒了。（Bây giờ tôi không uống bia nữa.）', answer: ['不', 'bù', 'bu'], hint: 'bù – không', explain: '不 + V + 了 = không … nữa (đổi thói quen). Không dùng 没 ở đây.' },
        { type: 'order', vi: 'Chúng tôi đã gọi ba món.', words: ['三个菜', '我们', '点了'], answer: '我们 点了 三个菜' },
        { type: 'order', vi: 'Hôm qua tôi đã uống hai cốc cà phê.', words: ['两杯', '我', '咖啡', '昨天', '喝了'], answer: '我 昨天 喝了 两杯 咖啡', alt: ['昨天 我 喝了 两杯 咖啡'] },
        { type: 'order', vi: 'Món này vị thế nào?', words: ['味道', '怎么样？', '这个菜的'], answer: '这个菜的 味道 怎么样？' },
        { type: 'order', vi: 'Quán ăn này có bánh bao không?', words: ['有', '吗？', '这个饭馆', '包子'], answer: '这个饭馆 有 包子 吗？' }
      ],
      reading: {
        title: '第一次用筷子',
        titleVi: 'Lần đầu dùng đũa',
        text: [
          '大卫是美国留学生。上个星期六，我和他去学校旁边的小饭馆吃饭。服务员给了我们菜单，我们点了三个菜：一盘鸡、一盘鱼，还有一个鸡蛋汤。',
          '大卫以前没用过筷子，开始的时候他不会用。我教了他十分钟，现在他会用筷子了！',
          '鸡很辣，大卫说：“太辣了！”他喝了两杯啤酒。最后，我们都吃饱了。大卫说：“中国菜的味道真好，下次我请客！”'
        ],
        py: [
          'Dàwèi shì Měiguó liúxuéshēng. Shàng gè xīngqīliù, wǒ hé tā qù xuéxiào pángbiān de xiǎo fànguǎn chīfàn. Fúwùyuán gěi le wǒmen càidān, wǒmen diǎn le sān gè cài: yì pán jī, yì pán yú, hái yǒu yí gè jīdàn tāng.',
          'Dàwèi yǐqián méi yòng guo kuàizi, kāishǐ de shíhou tā bú huì yòng. Wǒ jiāo le tā shí fēnzhōng, xiànzài tā huì yòng kuàizi le!',
          'Jī hěn là, Dàwèi shuō: “Tài là le!” Tā hē le liǎng bēi píjiǔ. Zuìhòu, wǒmen dōu chī bǎo le. Dàwèi shuō: “Zhōngguó cài de wèidao zhēn hǎo, xià cì wǒ qǐngkè!”'
        ],
        vi: [
          'David là du học sinh người Mỹ. Thứ Bảy tuần trước, tôi và cậu ấy đi ăn ở quán ăn nhỏ cạnh trường. Nhân viên phục vụ đưa thực đơn cho chúng tôi, chúng tôi gọi ba món: một đĩa gà, một đĩa cá và một bát canh trứng.',
          'Trước đây David chưa từng dùng đũa, lúc đầu cậu ấy không biết dùng. Tôi dạy cậu ấy mười phút, giờ thì cậu ấy biết dùng đũa rồi!',
          'Món gà rất cay, David nói: “Cay quá!” Cậu ấy uống hai cốc bia. Cuối cùng, chúng tôi đều ăn no. David nói: “Món Trung Quốc ngon thật, lần sau tớ mời!”'
        ],
        questions: [
          { q: 'David là ai?', options: ['Giáo viên người Mỹ', 'Du học sinh người Mỹ', 'Nhân viên phục vụ', 'Bạn cùng lớp người Anh'], answer: 1, explain: '大卫是美国留学生 = David là du học sinh người Mỹ.' },
          { q: 'Họ đã gọi những món gì?', options: ['Gà, cá và canh trứng', 'Sủi cảo và bánh bao', 'Gà và cà phê', 'Cá và sủi cảo'], answer: 0, explain: '我们点了三个菜：一盘鸡、一盘鱼，还有一个鸡蛋汤.' },
          { q: 'Câu 现在他会用筷子了 cho biết điều gì?', options: ['David vẫn chưa biết dùng đũa', 'David đã biết dùng đũa từ lâu', 'Giờ David đã biết dùng đũa (khác với lúc đầu)'], answer: 2, explain: '了 cuối câu báo sự thay đổi: lúc đầu 不会用, bây giờ 会用了.' },
          { q: 'Cuối bữa David nói gì?', options: ['Lần sau tớ mời', 'Tớ chưa no', 'Món ăn không ngon', 'Tớ không uống bia nữa'], answer: 0, explain: '大卫说：“……下次我请客！” = lần sau tớ mời.' }
        ]
      }
    }
  },

  // zh-hsk2-4c: Hỏi chuyện chuyến đi – 是…的
  {
    after: 'zh-hsk2-4b',
    unit: {
      id: 'zh-hsk2-4c',
      icon: '🧳',
      title: 'Hỏi chuyện chuyến đi',
      goal: 'Hỏi và kể chi tiết một việc đã xảy ra: đến lúc nào, bằng gì, với ai, ở đâu, sinh ra và lớn lên ở đâu.',
      vocab: [
        { w: '南方', ipa: 'nánfāng', hv: 'nam phương', vi: 'miền Nam, phương nam', ex: '我家在中国南方。', exPy: 'Wǒ jiā zài Zhōngguó nánfāng.', exVi: 'Nhà tôi ở miền Nam Trung Quốc.' },
        { w: '北方', ipa: 'běifāng', hv: 'bắc phương', vi: 'miền Bắc, phương bắc', ex: '北方的冬天很冷。', exPy: 'Běifāng de dōngtiān hěn lěng.', exVi: 'Mùa đông ở miền Bắc rất lạnh.' },
        { w: '自己', ipa: 'zìjǐ', hv: 'tự kỷ', vi: 'tự mình, bản thân', ex: '这件衣服是我自己做的。', exPy: 'Zhè jiàn yīfu shì wǒ zìjǐ zuò de.', exVi: 'Chiếc áo này là tôi tự may.' },
        { w: '跟', ipa: 'gēn', hv: 'cân', vi: 'với, cùng (ai)', ex: '我是跟朋友一起来的。', exPy: 'Wǒ shì gēn péngyou yìqǐ lái de.', exVi: 'Tôi đến cùng với bạn.' },
        { w: '出生', ipa: 'chūshēng', hv: 'xuất sinh', vi: 'sinh ra, ra đời', ex: '你是哪年出生的？', exPy: 'Nǐ shì nǎ nián chūshēng de?', exVi: 'Bạn sinh năm nào?' },
        { w: '留学', ipa: 'liúxué', hv: 'lưu học', vi: 'du học', ex: '他是去年来中国留学的。', exPy: 'Tā shì qùnián lái Zhōngguó liúxué de.', exVi: 'Anh ấy sang Trung Quốc du học từ năm ngoái.' },
        { w: '接', ipa: 'jiē', hv: 'tiếp', vi: 'đón (người)', ex: '明天我去机场接你。', exPy: 'Míngtiān wǒ qù jīchǎng jiē nǐ.', exVi: 'Ngày mai tôi ra sân bay đón bạn.' },
        { w: '送', ipa: 'sòng', hv: 'tống', vi: 'tặng; đưa, tiễn', ex: '这本书是老师送我的。', exPy: 'Zhè běn shū shì lǎoshī sòng wǒ de.', exVi: 'Quyển sách này là thầy giáo tặng tôi.' },
        { w: '顺利', ipa: 'shùnlì', hv: 'thuận lợi', vi: 'thuận lợi, suôn sẻ', ex: '这次旅游很顺利。', exPy: 'Zhè cì lǚyóu hěn shùnlì.', exVi: 'Chuyến du lịch lần này rất suôn sẻ.' },
        { w: '累', ipa: 'lèi', hv: 'luỵ', vi: 'mệt', ex: '坐了十个小时的车，我很累。', exPy: 'Zuò le shí gè xiǎoshí de chē, wǒ hěn lèi.', exVi: 'Ngồi xe mười tiếng, tôi rất mệt.' },
        { w: '船', ipa: 'chuán', hv: 'thuyền', vi: 'thuyền, tàu thuỷ', ex: '我们是坐船去的。', exPy: 'Wǒmen shì zuò chuán qù de.', exVi: 'Chúng tôi đi bằng tàu thuỷ.' },
        { w: '礼物', ipa: 'lǐwù', hv: 'lễ vật', vi: 'quà, quà tặng', ex: '这是我送你的生日礼物。', exPy: 'Zhè shì wǒ sòng nǐ de shēngrì lǐwù.', exVi: 'Đây là quà sinh nhật tôi tặng bạn.' },
        { w: '家乡', ipa: 'jiāxiāng', hv: 'gia hương', vi: 'quê hương, quê nhà', ex: '我的家乡在越南南方。', exPy: 'Wǒ de jiāxiāng zài Yuènán nánfāng.', exVi: 'Quê tôi ở miền Nam Việt Nam.' },
        { w: '小时候', ipa: 'xiǎoshíhou', hv: 'tiểu thời hậu', vi: 'hồi nhỏ, lúc bé', ex: '小时候我住在北方。', exPy: 'Xiǎoshíhou wǒ zhù zài běifāng.', exVi: 'Hồi nhỏ tôi sống ở miền Bắc.' },
        { w: '当时', ipa: 'dāngshí', hv: 'đương thời', vi: 'lúc đó, khi ấy', ex: '我是二〇二〇年来的，当时我十八岁。', exPy: 'Wǒ shì èr líng èr líng nián lái de, dāngshí wǒ shíbā suì.', exVi: 'Tôi đến vào năm 2020, lúc đó tôi mười tám tuổi.' },
        { w: '刚', ipa: 'gāng', hv: 'cương', vi: 'vừa, vừa mới', ex: '我刚到北京，还不认识路。', exPy: 'Wǒ gāng dào Běijīng, hái bú rènshi lù.', exVi: 'Tôi vừa mới đến Bắc Kinh, chưa biết đường.' },
        { w: '大学', ipa: 'dàxué', hv: 'đại học', vi: 'đại học, trường đại học', ex: '我哥哥在北京上大学。', exPy: 'Wǒ gēge zài Běijīng shàng dàxué.', exVi: 'Anh trai tôi học đại học ở Bắc Kinh.' },
        { w: '小学', ipa: 'xiǎoxué', hv: 'tiểu học', vi: 'trường tiểu học', ex: '我们是小学同学。', exPy: 'Wǒmen shì xiǎoxué tóngxué.', exVi: 'Chúng tôi là bạn học tiểu học.' },
        { w: '中学', ipa: 'zhōngxué', hv: 'trung học', vi: 'trường trung học', ex: '你是在哪儿上的中学？', exPy: 'Nǐ shì zài nǎr shàng de zhōngxué?', exVi: 'Bạn học trung học ở đâu?' },
        { w: '毕业', ipa: 'bìyè', hv: 'tất nghiệp', vi: 'tốt nghiệp', ex: '他是去年大学毕业的。', exPy: 'Tā shì qùnián dàxué bìyè de.', exVi: 'Anh ấy tốt nghiệp đại học năm ngoái.' }
      ],
      grammar: {
        title: 'Câu 是…的: nhấn mạnh thời gian, nơi chốn, cách thức của việc đã xảy ra',
        explain: [
          'Khi người nghe ĐÃ BIẾT một việc đã xảy ra (ai đó đã đến, đã mua…), ta dùng 是…的 để hỏi hoặc nói rõ CHI TIẾT của việc đó: lúc nào, ở đâu, bằng cách nào, với ai, ai làm. Phần được nhấn mạnh đặt ngay sau 是, động từ đặt trước 的: 我是昨天到的 (tôi đến vào hôm qua — chứ không phải hôm khác).',
          'Những chi tiết hay được nhấn mạnh: thời gian (是上个月来的), nơi chốn (是在越南买的), cách thức / phương tiện (是坐船来的), người cùng làm (是跟妈妈一起来的), người làm (是我做的 — chính tôi làm).',
          'Câu khẳng định có thể bỏ 是: 我昨天到的. Nhưng câu phủ định BẮT BUỘC giữ 是: 我不是坐飞机来的 (✗ 我不坐飞机来的, ✗ 我没坐飞机来的). Khi động từ có tân ngữ, tân ngữ thường đặt SAU 的: 我是在北京上的大学, 我是昨天买的票 (cũng có thể nói 票是昨天买的).',
          'Phân biệt với 了: 了 BÁO TIN một việc vừa xảy ra (我妈妈来了！ – mẹ tôi đến rồi!); 是…的 dùng khi việc đó đã biết, để nói chi tiết (她是坐火车来的 – bà đến bằng tàu hoả). Không dùng 了 trong câu 是…的: ✗ 我是昨天到了的.'
        ],
        table: [
          ['Nhấn mạnh', 'Câu hỏi', 'Trả lời'],
          ['Thời gian', '你是什么时候来的？', '我是上个月来的。'],
          ['Nơi chốn', '这件衣服是在哪儿买的？', '是在越南买的。'],
          ['Cách thức', '你是怎么来的？', '我是坐火车来的。'],
          ['Người cùng', '你是跟谁一起来的？', '我是跟妈妈一起来的。'],
          ['Phủ định', '你是坐飞机来的吗？', '不是，我是坐船来的。']
        ],
        examples: [
          { t: '你是什么时候到北京的？', py: 'Nǐ shì shénme shíhou dào Běijīng de?', vi: 'Bạn đến Bắc Kinh lúc nào?' },
          { t: '我是坐地铁来学校的。', py: 'Wǒ shì zuò dìtiě lái xuéxiào de.', vi: 'Tôi đến trường bằng tàu điện ngầm.' },
          { t: '这个礼物是在哪儿买的？', py: 'Zhège lǐwù shì zài nǎr mǎi de?', vi: 'Món quà này mua ở đâu thế?' },
          { t: '我不是一个人来的，是跟同学一起来的。', py: 'Wǒ bú shì yí gè rén lái de, shì gēn tóngxué yìqǐ lái de.', vi: 'Tôi không đến một mình, tôi đến cùng bạn học.' },
          { t: '他是在上海上的大学。', py: 'Tā shì zài Shànghǎi shàng de dàxué.', vi: 'Anh ấy học đại học ở Thượng Hải.' }
        ],
        tip: 'Người Việt hay trả lời câu hỏi 你是什么时候来的？ bằng ✗ 我昨天来了 — câu này chỉ báo tin "tôi đến rồi", không nhấn mạnh "hôm qua". Hãy đáp bằng 是…的: 我是昨天来的. Nhớ thêm: phủ định là 不是…的 (✗ 没…的), và 是…的 chỉ dùng cho việc ĐÃ xảy ra — ✗ 我是明天去的 (việc tương lai: 我明天去).'
      },
      dialogue: [
        { s: '王明', t: '阮兰，你妈妈来中国了吗？', py: 'Ruǎn Lán, nǐ māma lái Zhōngguó le ma?', vi: 'Lan ơi, mẹ bạn sang Trung Quốc chưa?' },
        { s: 'Lan', t: '来了！她是上个星期五到的。', py: 'Lái le! Tā shì shàng gè xīngqīwǔ dào de.', vi: 'Sang rồi! Mẹ mình đến vào thứ Sáu tuần trước.' },
        { s: '王明', t: '她是坐飞机来的吗？', py: 'Tā shì zuò fēijī lái de ma?', vi: 'Bác đi máy bay sang à?' },
        { s: 'Lan', t: '不是坐飞机来的，是坐火车来的。从河内到北京，坐了两天。', py: 'Bú shì zuò fēijī lái de, shì zuò huǒchē lái de. Cóng Hénèi dào Běijīng, zuò le liǎng tiān.', vi: 'Không phải đi máy bay, mẹ đi tàu hoả. Từ Hà Nội đến Bắc Kinh, ngồi mất hai ngày.' },
        { s: '王明', t: '太累了！她是一个人来的吗？', py: 'Tài lèi le! Tā shì yí gè rén lái de ma?', vi: 'Mệt quá nhỉ! Bác đi một mình à?' },
        { s: 'Lan', t: '不是，她是跟我姐姐一起来的。路上很顺利。', py: 'Bú shì, tā shì gēn wǒ jiějie yìqǐ lái de. Lùshang hěn shùnlì.', vi: 'Không, mẹ đi cùng chị gái mình. Dọc đường rất suôn sẻ.' },
        { s: '王明', t: '是你去车站接她们的吗？', py: 'Shì nǐ qù chēzhàn jiē tāmen de ma?', vi: 'Là bạn ra ga đón họ à?' },
        { s: 'Lan', t: '对，是我接的。妈妈还送了你一个礼物，是在我家乡买的。', py: 'Duì, shì wǒ jiē de. Māma hái sòng le nǐ yí gè lǐwù, shì zài wǒ jiāxiāng mǎi de.', vi: 'Đúng, mình đón. Mẹ còn tặng bạn một món quà, mua ở quê mình đấy.' },
        { s: '王明', t: '真的吗？谢谢阿姨！', py: 'Zhēn de ma? Xièxie āyí!', vi: 'Thật à? Cảm ơn bác ạ!' }
      ],
      exercises: [
        { type: 'mc', q: '——你是___来的？——我是坐火车来的。', options: ['什么时候', '怎么', '跟谁'], answer: 1, explain: 'Câu trả lời nói về cách thức (坐火车) → hỏi bằng 怎么: 你是怎么来的？' },
        { type: 'mc', q: '"Tôi không đến bằng máy bay." Câu đúng:', options: ['我不是坐飞机来的。', '我没坐飞机来的。', '我不坐飞机来的。'], answer: 0, explain: 'Phủ định câu 是…的 là 不是…的, phải giữ 是.' },
        { type: 'mc', q: 'Thấy bạn mặc áo mới, bạn muốn hỏi "Mua ở đâu thế?":', options: ['你在哪儿买了？', '你是在哪儿买的？', '你在哪儿买过？'], answer: 1, explain: 'Việc mua đã biết, chỉ hỏi chi tiết nơi chốn → 是…的.' },
        { type: 'mc', q: 'Báo tin "Mẹ tôi đến rồi!" nói thế nào?', options: ['我妈妈是来的！', '我妈妈是来了！', '我妈妈来了！'], answer: 2, explain: 'Báo tin việc mới xảy ra dùng 了; 是…的 dùng khi đã biết việc và hỏi chi tiết.' },
        { type: 'mc', q: '毕业 nghĩa là:', options: ['tốt nghiệp', 'nhập học', 'du học'], answer: 0, explain: '毕业 bìyè (tất nghiệp) = tốt nghiệp: 大学毕业.' },
        { type: 'mc', q: '我是___妈妈一起来的。（Tôi đến cùng với mẹ.）', options: ['给', '在', '跟'], answer: 2, explain: '跟 … 一起 = cùng với …; 是…的 nhấn mạnh người cùng đi.' },
        { type: 'mc', q: 'Câu nào SAI?', options: ['我是昨天到的。', '我昨天到的。', '我是明天到的。'], answer: 2, explain: '是…的 chỉ dùng cho việc đã xảy ra; việc ngày mai nói: 我明天到.' },
        { type: 'fill', q: '你是哪年___的？（Bạn sinh năm nào?）', answer: ['出生', 'chūshēng', 'chusheng', 'chū shēng', 'chu sheng'], hint: 'chūshēng – sinh ra', explain: '出生 = sinh ra; hỏi năm sinh dùng 是…的 vì việc sinh ra đã xảy ra.' },
        { type: 'fill', q: '明天我去机场___你。（Ngày mai tôi ra sân bay đón bạn.）', answer: ['接', 'jiē', 'jie'], hint: 'jiē – đón', explain: '接 = đón; ngược lại 送 = tiễn.' },
        { type: 'fill', q: '这件衣服是我___做的。（Chiếc áo này là tôi tự may.）', answer: ['自己', 'zìjǐ', 'ziji', 'zì jǐ', 'zi ji'], hint: 'zìjǐ – tự mình', explain: '自己 = tự mình; 是…的 nhấn mạnh người làm.' },
        { type: 'fill', q: '我是坐___来的，不是坐飞机来的。（Tôi đến bằng tàu thuỷ, không phải máy bay.）', answer: ['船', 'chuán', 'chuan'], hint: 'chuán – thuyền, tàu thuỷ', explain: '坐船 = đi tàu thuỷ / đi thuyền.' },
        { type: 'fill', q: '我___到北京，还不认识路。（Tôi vừa mới đến Bắc Kinh, chưa biết đường.）', answer: ['刚', 'gāng', 'gang', '刚刚', 'gānggāng', 'ganggang'], hint: 'gāng – vừa mới', explain: '刚 + động từ = vừa mới làm.' },
        { type: 'order', vi: 'Bạn đến lúc nào?', words: ['的？', '是', '你', '什么时候', '来'], answer: '你 是 什么时候 来 的？' },
        { type: 'order', vi: 'Tôi đến cùng với bạn bè.', words: ['一起', '跟', '我', '的', '是', '朋友', '来'], answer: '我 是 跟 朋友 一起 来 的' },
        { type: 'order', vi: 'Món quà này mua ở Việt Nam.', words: ['在越南', '这个礼物', '买的', '是'], answer: '这个礼物 是 在越南 买的' },
        { type: 'order', vi: 'Anh ấy tốt nghiệp đại học năm ngoái.', words: ['大学', '他', '去年', '毕业的', '是'], answer: '他 是 去年 大学 毕业的', alt: ['他 大学 是 去年 毕业的'] }
      ],
      reading: {
        title: '我是怎么来北京的',
        titleVi: 'Tôi đến Bắc Kinh như thế nào',
        text: [
          '我叫阮兰，是越南人，家乡在越南南方。我是去年九月来北京留学的。当时我十九岁，是一个人来的。',
          '我不是坐飞机来的，是坐火车来的。从河内到北京，坐了两天的火车，很累，但是很顺利。我是下午到的，同学李华来车站接了我。',
          '李华是在北方出生的，小时候在上海上的小学，中学和大学都是在北京上的。上个星期，她送了我一个礼物，是她自己做的。'
        ],
        py: [
          'Wǒ jiào Ruǎn Lán, shì Yuènánrén, jiāxiāng zài Yuènán nánfāng. Wǒ shì qùnián jiǔ yuè lái Běijīng liúxué de. Dāngshí wǒ shíjiǔ suì, shì yí gè rén lái de.',
          'Wǒ bú shì zuò fēijī lái de, shì zuò huǒchē lái de. Cóng Hénèi dào Běijīng, zuò le liǎng tiān de huǒchē, hěn lèi, dànshì hěn shùnlì. Wǒ shì xiàwǔ dào de, tóngxué Lǐ Huá lái chēzhàn jiē le wǒ.',
          'Lǐ Huá shì zài běifāng chūshēng de, xiǎoshíhou zài Shànghǎi shàng de xiǎoxué, zhōngxué hé dàxué dōu shì zài Běijīng shàng de. Shàng gè xīngqī, tā sòng le wǒ yí gè lǐwù, shì tā zìjǐ zuò de.'
        ],
        vi: [
          'Tôi tên là Nguyễn Lan, là người Việt Nam, quê ở miền Nam Việt Nam. Tôi sang Bắc Kinh du học vào tháng chín năm ngoái. Lúc đó tôi mười chín tuổi, sang một mình.',
          'Tôi không đi máy bay mà đi tàu hoả. Từ Hà Nội đến Bắc Kinh mất hai ngày ngồi tàu, rất mệt nhưng rất suôn sẻ. Tôi đến nơi vào buổi chiều, bạn học Lý Hoa ra ga đón tôi.',
          'Lý Hoa sinh ra ở miền Bắc, hồi nhỏ học tiểu học ở Thượng Hải, còn trung học và đại học đều học ở Bắc Kinh. Tuần trước, bạn ấy tặng tôi một món quà do chính bạn ấy tự làm.'
        ],
        questions: [
          { q: 'Lan sang Bắc Kinh khi nào?', options: ['Tháng chín năm ngoái', 'Tháng chín năm nay', 'Hồi nhỏ', 'Tuần trước'], answer: 0, explain: '我是去年九月来北京留学的 = tôi sang Bắc Kinh du học vào tháng chín năm ngoái.' },
          { q: 'Lan đến Bắc Kinh bằng phương tiện gì?', options: ['Máy bay', 'Tàu thuỷ', 'Tàu hoả'], answer: 2, explain: '我不是坐飞机来的，是坐火车来的.' },
          { q: 'Ai ra ga đón Lan?', options: ['Mẹ của Lan', 'Lý Hoa', 'Không ai đón cả'], answer: 1, explain: '同学李华来车站接了我.' },
          { q: 'Lý Hoa học tiểu học ở đâu?', options: ['Bắc Kinh', 'Thượng Hải', 'Hà Nội', 'Miền Nam Việt Nam'], answer: 1, explain: '小时候在上海上的小学 = hồi nhỏ học tiểu học ở Thượng Hải.' }
        ]
      }
    }
  },

  // zh-hsk2-5b: Ngoại hình & cơ thể – so sánh với 比
  {
    after: 'zh-hsk2-5',
    unit: {
      id: 'zh-hsk2-5b',
      icon: '🧍',
      title: 'Ngoại hình & cơ thể',
      goal: 'Tả ngoại hình (cao, thấp, béo, gầy, tóc, mắt…), so sánh hai người với 比 / 没有 và nói "hơi…" với 有点儿.',
      vocab: [
        { w: '眼睛', ipa: 'yǎnjing', hv: 'nhãn tình', vi: 'mắt', ex: '她的眼睛很大，很漂亮。', exPy: 'Tā de yǎnjing hěn dà, hěn piàoliang.', exVi: 'Mắt cô ấy to và rất đẹp.' },
        { w: '脚', ipa: 'jiǎo', hv: 'cước', vi: 'bàn chân', ex: '我的脚比你的大。', exPy: 'Wǒ de jiǎo bǐ nǐ de dà.', exVi: 'Bàn chân tôi to hơn của bạn.' },
        { w: '腿', ipa: 'tuǐ', hv: 'thoái', vi: 'chân (cẳng chân, đùi)', ex: '他的腿很长，跑得很快。', exPy: 'Tā de tuǐ hěn cháng, pǎo de hěn kuài.', exVi: 'Chân anh ấy rất dài, chạy rất nhanh.' },
        { w: '头发', ipa: 'tóufa', hv: 'đầu phát', vi: 'tóc', ex: '我妹妹的头发比我的长。', exPy: 'Wǒ mèimei de tóufa bǐ wǒ de cháng.', exVi: 'Tóc em gái tôi dài hơn tóc tôi.' },
        { w: '手', ipa: 'shǒu', hv: 'thủ', vi: 'tay, bàn tay', ex: '吃饭以前要洗手。', exPy: 'Chīfàn yǐqián yào xǐ shǒu.', exVi: 'Trước khi ăn phải rửa tay.' },
        { w: '头', ipa: 'tóu', hv: 'đầu', vi: 'đầu', ex: '我今天有点儿头疼。', exPy: 'Wǒ jīntiān yǒudiǎnr tóu téng.', exVi: 'Hôm nay tôi hơi đau đầu.' },
        { w: '脸', ipa: 'liǎn', hv: 'kiểm', vi: 'mặt, khuôn mặt', ex: '他的脸有点儿红。', exPy: 'Tā de liǎn yǒudiǎnr hóng.', exVi: 'Mặt anh ấy hơi đỏ.' },
        { w: '嘴', ipa: 'zuǐ', hv: 'chuỷ', vi: 'miệng', ex: '这个孩子的嘴很小，眼睛很大。', exPy: 'Zhège háizi de zuǐ hěn xiǎo, yǎnjing hěn dà.', exVi: 'Đứa bé này miệng nhỏ, mắt to.' },
        { w: '个子', ipa: 'gèzi', hv: 'cá tử', vi: 'vóc người, dáng người (chiều cao)', ex: '我哥哥个子很高。', exPy: 'Wǒ gēge gèzi hěn gāo.', exVi: 'Anh trai tôi dáng người rất cao.' },
        { w: '高', ipa: 'gāo', hv: 'cao', vi: 'cao', ex: '他比我高一点儿。', exPy: 'Tā bǐ wǒ gāo yìdiǎnr.', exVi: 'Anh ấy cao hơn tôi một chút.' },
        { w: '矮', ipa: 'ǎi', hv: 'ải', vi: 'thấp, lùn', ex: '我比我弟弟矮。', exPy: 'Wǒ bǐ wǒ dìdi ǎi.', exVi: 'Tôi thấp hơn em trai tôi.' },
        { w: '胖', ipa: 'pàng', hv: 'bàn', vi: 'béo, mập', ex: '我比去年胖了一点儿。', exPy: 'Wǒ bǐ qùnián pàng le yìdiǎnr.', exVi: 'Tôi béo hơn năm ngoái một chút.' },
        { w: '瘦', ipa: 'shòu', hv: 'sấu', vi: 'gầy, ốm (mở rộng)', ex: '她很瘦，比我瘦多了。', exPy: 'Tā hěn shòu, bǐ wǒ shòu duō le.', exVi: 'Cô ấy rất gầy, gầy hơn tôi nhiều.' },
        { w: '长', ipa: 'cháng', hv: 'trường', vi: 'dài', ex: '这条裤子有点儿长。', exPy: 'Zhè tiáo kùzi yǒudiǎnr cháng.', exVi: 'Cái quần này hơi dài.' },
        { w: '短', ipa: 'duǎn', hv: 'đoản', vi: 'ngắn', ex: '我喜欢短头发。', exPy: 'Wǒ xǐhuan duǎn tóufa.', exVi: 'Tôi thích tóc ngắn.' },
        { w: '漂亮', ipa: 'piàoliang', hv: 'phiêu lượng', vi: 'đẹp, xinh', ex: '你的新衣服真漂亮！', exPy: 'Nǐ de xīn yīfu zhēn piàoliang!', exVi: 'Quần áo mới của bạn đẹp thật!' },
        { w: '比', ipa: 'bǐ', hv: 'tỉ', vi: 'so với; hơn (so sánh)', ex: '今天比昨天热。', exPy: 'Jīntiān bǐ zuótiān rè.', exVi: 'Hôm nay nóng hơn hôm qua.' },
        { w: '一点儿', ipa: 'yìdiǎnr', hv: 'nhất điểm nhi', vi: 'một chút, một ít (đứng sau tính từ)', ex: '请说慢一点儿。', exPy: 'Qǐng shuō màn yìdiǎnr.', exVi: 'Làm ơn nói chậm hơn một chút.' },
        { w: '有点儿', ipa: 'yǒudiǎnr', hv: 'hữu điểm nhi', vi: 'hơi, có chút (đứng trước tính từ)', ex: '这个菜有点儿辣。', exPy: 'Zhège cài yǒudiǎnr là.', exVi: 'Món này hơi cay.' },
        { w: '年轻', ipa: 'niánqīng', hv: 'niên khinh', vi: 'trẻ, trẻ tuổi', ex: '我们的老师很年轻。', exPy: 'Wǒmen de lǎoshī hěn niánqīng.', exVi: 'Cô giáo của chúng tôi rất trẻ.' }
      ],
      grammar: {
        title: 'So sánh với 比; phân biệt 有点儿 và 一点儿',
        explain: [
          'Câu so sánh hơn: A + 比 + B + tính từ. 哥哥比我高 (anh trai cao hơn tôi). 比 bǐ (tỉ) = so với; tính từ đứng CUỐI câu và KHÔNG thêm 很, 非常, 太: ✗ 哥哥比我很高.',
          'Muốn nói hơn bao nhiêu, thêm vào SAU tính từ: + 一点儿 (hơn một chút), + 得多 / 多了 (hơn nhiều), + số lượng cụ thể: 我比他大三岁 (tôi hơn anh ấy ba tuổi). Phủ định: A + 没有 + B + tính từ = A không bằng B: 我没有哥哥高 (tôi không cao bằng anh trai).',
          'Hỏi so sánh: A 比 B + tính từ + 吗？ hoặc A 和 B，谁 + tính từ？: 你和你哥哥，谁高？',
          '有点儿 + tính từ = "hơi…", thường dùng cho điều KHÔNG như ý: 这条裤子有点儿长 (cái quần này hơi dài). Còn tính từ + 一点儿 = "…hơn một chút", dùng khi so sánh hoặc đề nghị: 有短一点儿的吗？ (có cái ngắn hơn chút không?), 请说慢一点儿.'
        ],
        table: [
          ['Mẫu', 'Ví dụ', 'Nghĩa'],
          ['A 比 B + tính từ', '我比妹妹高。', 'Tôi cao hơn em gái.'],
          ['A 比 B + tính từ + 一点儿', '她比我胖一点儿。', 'Cô ấy béo hơn tôi một chút.'],
          ['A 比 B + tính từ + 得多 / 多了', '他的头发比我的长得多。', 'Tóc anh ấy dài hơn tóc tôi nhiều.'],
          ['A 比 B + tính từ + số lượng', '哥哥比我大三岁。', 'Anh trai hơn tôi ba tuổi.'],
          ['A 没有 B + tính từ', '我没有哥哥高。', 'Tôi không cao bằng anh trai.'],
          ['有点儿 + tính từ', '这双鞋有点儿小。', 'Đôi giày này hơi chật.']
        ],
        examples: [
          { t: '我比我姐姐矮一点儿。', py: 'Wǒ bǐ wǒ jiějie ǎi yìdiǎnr.', vi: 'Tôi thấp hơn chị gái một chút.' },
          { t: '王老师比李老师年轻得多。', py: 'Wáng lǎoshī bǐ Lǐ lǎoshī niánqīng de duō.', vi: 'Thầy Vương trẻ hơn thầy Lý nhiều.' },
          { t: '你和你哥哥，谁高？', py: 'Nǐ hé nǐ gēge, shéi gāo?', vi: 'Bạn với anh trai bạn, ai cao hơn?' },
          { t: '这件衣服有点儿贵，有便宜一点儿的吗？', py: 'Zhè jiàn yīfu yǒudiǎnr guì, yǒu piányi yìdiǎnr de ma?', vi: 'Cái áo này hơi đắt, có cái nào rẻ hơn chút không?' },
          { t: '我的头发没有她的长。', py: 'Wǒ de tóufa méiyǒu tā de cháng.', vi: 'Tóc tôi không dài bằng tóc cô ấy.' }
        ],
        tip: 'Hai lỗi kinh điển của người Việt: (1) thêm 很 vào câu 比 vì dịch "cao hơn rất nhiều": ✗ 他比我很高 → 他比我高 / 他比我高得多. (2) lẫn 有点儿 và 一点儿: ✗ 我一点儿累 → 我有点儿累 (tôi hơi mệt); ✗ 便宜有点儿吧 → 便宜一点儿吧. Mẹo nhớ: 有点儿 đứng TRƯỚC tính từ (= "hơi"), 一点儿 đứng SAU tính từ (= "…hơn chút"). Các cách so sánh khác (跟…一样, 没有…那么) sẽ học ở HSK3.'
      },
      dialogue: [
        { s: '李华', t: '阮兰，照片上这个人是谁？个子真高！', py: 'Ruǎn Lán, zhàopiàn shang zhège rén shì shéi? Gèzi zhēn gāo!', vi: 'Lan ơi, người trong ảnh này là ai thế? Cao thật!' },
        { s: 'Lan', t: '是我哥哥。他比我高多了，一米八。', py: 'Shì wǒ gēge. Tā bǐ wǒ gāo duō le, yì mǐ bā.', vi: 'Anh trai mình đấy. Anh ấy cao hơn mình nhiều, một mét tám.' },
        { s: '李华', t: '他比你大几岁？', py: 'Tā bǐ nǐ dà jǐ suì?', vi: 'Anh ấy hơn bạn mấy tuổi?' },
        { s: 'Lan', t: '他比我大三岁，今年二十四岁。', py: 'Tā bǐ wǒ dà sān suì, jīnnián èrshísì suì.', vi: 'Anh ấy hơn mình ba tuổi, năm nay hai mươi tư.' },
        { s: '李华', t: '他的眼睛很大，头发有点儿长。', py: 'Tā de yǎnjing hěn dà, tóufa yǒudiǎnr cháng.', vi: 'Mắt anh ấy to, tóc hơi dài.' },
        { s: 'Lan', t: '对，妈妈也说他的头发有点儿长。', py: 'Duì, māma yě shuō tā de tóufa yǒudiǎnr cháng.', vi: 'Đúng thế, mẹ mình cũng bảo tóc anh ấy hơi dài.' },
        { s: '李华', t: '你妹妹呢？她高吗？', py: 'Nǐ mèimei ne? Tā gāo ma?', vi: 'Còn em gái bạn? Em ấy có cao không?' },
        { s: 'Lan', t: '她没有我高，可是她比我漂亮一点儿！', py: 'Tā méiyǒu wǒ gāo, kěshì tā bǐ wǒ piàoliang yìdiǎnr!', vi: 'Em ấy không cao bằng mình, nhưng xinh hơn mình một chút!' }
      ],
      exercises: [
        { type: 'mc', q: '"Anh trai cao hơn tôi." Câu đúng:', options: ['哥哥比我很高。', '哥哥比我高。', '哥哥很比我高。'], answer: 1, explain: 'Câu 比 không thêm 很 trước tính từ: A 比 B + tính từ.' },
        { type: 'mc', q: '我___累，想休息一下。（Tôi hơi mệt, muốn nghỉ một chút.）', options: ['有点儿', '一点儿', '比'], answer: 0, explain: '有点儿 + tính từ = hơi …, thường nói điều không như ý.' },
        { type: 'mc', q: '太贵了，便宜___吧！（Đắt quá, rẻ hơn chút đi!）', options: ['有点儿', '很', '一点儿'], answer: 2, explain: 'Tính từ + 一点儿 dùng khi đề nghị/so sánh: 便宜一点儿.' },
        { type: 'mc', q: '"Tôi không cao bằng anh ấy." Câu đúng:', options: ['我比他不高。', '我不比他很高。', '我没有他高。'], answer: 2, explain: 'Phủ định so sánh: A 没有 B + tính từ.' },
        { type: 'mc', q: '我比他大___。（Tôi hơn anh ấy ba tuổi.）', options: ['三岁', '很多岁', '有点儿'], answer: 0, explain: 'Số lượng chênh lệch đặt sau tính từ: 大三岁.' },
        { type: 'mc', q: '腿 là bộ phận nào?', options: ['Mắt', 'Chân (cẳng chân, đùi)', 'Tay'], answer: 1, explain: '腿 tuǐ = chân (phần cẳng, đùi); bàn chân là 脚 jiǎo.' },
        { type: 'mc', q: 'Từ trái nghĩa với 胖 là:', options: ['瘦', '矮', '短'], answer: 0, explain: '胖 (béo) ↔ 瘦 (gầy); 高 (cao) ↔ 矮 (thấp); 长 (dài) ↔ 短 (ngắn).' },
        { type: 'fill', q: '他___我高一点儿。（Anh ấy cao hơn tôi một chút.）', answer: ['比', 'bǐ', 'bi'], hint: 'bǐ – so với, hơn', explain: 'A 比 B + tính từ + 一点儿.' },
        { type: 'fill', q: '我的头发很短，她的头发很___。（Tóc tôi ngắn, tóc cô ấy dài.）', answer: ['长', 'cháng', 'chang'], hint: 'cháng – dài', explain: '长 (dài) ↔ 短 (ngắn).' },
        { type: 'fill', q: '她的___很大，很漂亮。（Mắt cô ấy to, rất đẹp.）', answer: ['眼睛', 'yǎnjing', 'yanjing', 'yǎn jing', 'yan jing'], hint: 'yǎnjing – mắt', explain: '眼睛 = mắt.' },
        { type: 'fill', q: '我们的老师很___，今年二十五岁。（Cô giáo chúng tôi rất trẻ, năm nay hai mươi lăm tuổi.）', answer: ['年轻', 'niánqīng', 'nianqing', 'nián qīng', 'nian qing'], hint: 'niánqīng – trẻ', explain: '年轻 = trẻ, trẻ tuổi.' },
        { type: 'fill', q: '我哥哥___很高，一米八五。（Anh tôi dáng người rất cao, một mét tám lăm.）', answer: ['个子', 'gèzi', 'gezi', 'gè zi', 'ge zi'], hint: 'gèzi – vóc người', explain: '个子高 = dáng người cao; 个子矮 = dáng người thấp.' },
        { type: 'order', vi: 'Hôm nay nóng hơn hôm qua.', words: ['昨天', '今天', '热', '比'], answer: '今天 比 昨天 热' },
        { type: 'order', vi: 'Cái quần này hơi dài.', words: ['有点儿', '这条裤子', '长'], answer: '这条裤子 有点儿 长' },
        { type: 'order', vi: 'Em gái xinh hơn tôi một chút.', words: ['一点儿', '妹妹', '漂亮', '比我'], answer: '妹妹 比我 漂亮 一点儿' },
        { type: 'order', vi: 'Tôi không cao bằng anh trai.', words: ['没有', '高', '我', '哥哥'], answer: '我 没有 哥哥 高' }
      ],
      reading: {
        title: '去机场接人',
        titleVi: 'Ra sân bay đón người',
        text: [
          '明天我要去机场接中国朋友小美，可是我以前没见过她。我给她打电话，问她：“你高吗？头发长不长？”',
          '小美说：“我个子不高，比你矮一点儿。我有点儿胖，眼睛很大。我的头发很短，比你的短得多。”',
          '她还说：“我妈妈跟我一起来。她比我瘦，头发比我长，也很年轻。”',
          '第二天在机场，我看见一个头发很短的女孩儿，她旁边有一个很瘦的阿姨。就是她们！'
        ],
        py: [
          'Míngtiān wǒ yào qù jīchǎng jiē Zhōngguó péngyou Xiǎoměi, kěshì wǒ yǐqián méi jiàn guo tā. Wǒ gěi tā dǎ diànhuà, wèn tā: “Nǐ gāo ma? Tóufa cháng bu cháng?”',
          'Xiǎoměi shuō: “Wǒ gèzi bù gāo, bǐ nǐ ǎi yìdiǎnr. Wǒ yǒudiǎnr pàng, yǎnjing hěn dà. Wǒ de tóufa hěn duǎn, bǐ nǐ de duǎn de duō.”',
          'Tā hái shuō: “Wǒ māma gēn wǒ yìqǐ lái. Tā bǐ wǒ shòu, tóufa bǐ wǒ cháng, yě hěn niánqīng.”',
          'Dì-èr tiān zài jīchǎng, wǒ kànjiàn yí gè tóufa hěn duǎn de nǚháir, tā pángbiān yǒu yí gè hěn shòu de āyí. Jiù shì tāmen!'
        ],
        vi: [
          'Ngày mai tôi phải ra sân bay đón cô bạn Trung Quốc Tiểu Mỹ, nhưng trước giờ tôi chưa gặp cô ấy. Tôi gọi điện hỏi cô ấy: “Cậu có cao không? Tóc dài hay ngắn?”',
          'Tiểu Mỹ nói: “Tớ không cao, thấp hơn cậu một chút. Tớ hơi béo, mắt to. Tóc tớ rất ngắn, ngắn hơn tóc cậu nhiều.”',
          'Cô ấy còn nói: “Mẹ tớ đi cùng tớ. Mẹ gầy hơn tớ, tóc dài hơn tớ, trông cũng rất trẻ.”',
          'Hôm sau ở sân bay, tôi nhìn thấy một cô gái tóc rất ngắn, bên cạnh có một cô rất gầy. Chính là họ!'
        ],
        questions: [
          { q: 'Trước đây "tôi" đã gặp Tiểu Mỹ chưa?', options: ['Gặp nhiều lần rồi', 'Chưa từng gặp', 'Gặp một lần ở sân bay'], answer: 1, explain: '我以前没见过她 = trước đây tôi chưa từng gặp cô ấy.' },
          { q: 'So với "tôi", Tiểu Mỹ thế nào?', options: ['Thấp hơn một chút', 'Cao hơn một chút', 'Cao bằng nhau', 'Cao hơn nhiều'], answer: 0, explain: '比你矮一点儿 = thấp hơn cậu một chút.' },
          { q: 'Tóc của Tiểu Mỹ thế nào?', options: ['Dài hơn tóc "tôi"', 'Hơi dài', 'Ngắn hơn tóc "tôi" nhiều'], answer: 2, explain: '我的头发很短，比你的短得多.' },
          { q: 'Mẹ của Tiểu Mỹ trông thế nào?', options: ['Béo hơn Tiểu Mỹ', 'Gầy hơn Tiểu Mỹ, tóc dài hơn', 'Tóc ngắn hơn Tiểu Mỹ', 'Thấp và già'], answer: 1, explain: '她比我瘦，头发比我长，也很年轻.' }
        ]
      }
    }
  }
];
