// Phần bổ sung bài học — Tiếng Trung HSK3 (Trung cấp 1)
export default {
  // ───────────────────────── HSK3-1: Du lịch ─────────────────────────
  'zh-hsk3-1': {
    vocab: [
      { w: '景色', ipa: 'jǐngsè', hv: 'cảnh sắc', vi: 'cảnh sắc, phong cảnh', ex: '这里的景色太美了，我已经拍了很多照片。', exPy: 'Zhèli de jǐngsè tài měi le, wǒ yǐjīng pāile hěn duō zhàopiàn.', exVi: 'Phong cảnh ở đây đẹp quá, tôi đã chụp rất nhiều ảnh rồi.' },
      { w: '旅馆', ipa: 'lǚguǎn', hv: 'lữ quán', vi: 'nhà nghỉ, khách sạn nhỏ', ex: '这家旅馆虽然小，但是很干净。', exPy: 'Zhè jiā lǚguǎn suīrán xiǎo, dànshì hěn gānjìng.', exVi: 'Nhà nghỉ này tuy nhỏ nhưng rất sạch sẽ.' },
      { w: '旅行社', ipa: 'lǚxíngshè', hv: 'lữ hành xã', vi: 'công ty du lịch, hãng lữ hành', ex: '我已经在旅行社报名了。', exPy: 'Wǒ yǐjīng zài lǚxíngshè bàomíng le.', exVi: 'Tôi đã đăng ký ở công ty du lịch rồi.' },
      { w: '行李', ipa: 'xíngli', hv: 'hành lý', vi: 'hành lý', ex: '我的行李还没收拾好呢。', exPy: 'Wǒ de xíngli hái méi shōushi hǎo ne.', exVi: 'Hành lý của tôi vẫn chưa thu xếp xong.' },
      { w: '海关', ipa: 'hǎiguān', hv: 'hải quan', vi: 'hải quan', ex: '过海关的时候要拿出护照。', exPy: 'Guò hǎiguān de shíhou yào náchū hùzhào.', exVi: 'Khi qua hải quan phải lấy hộ chiếu ra.' },
      { w: '路线', ipa: 'lùxiàn', hv: 'lộ tuyến', vi: 'lộ trình, tuyến đường', ex: '我们已经选好旅游路线了。', exPy: 'Wǒmen yǐjīng xuǎnhǎo lǚyóu lùxiàn le.', exVi: 'Chúng tôi đã chọn xong lộ trình du lịch rồi.' },
      { w: '当地', ipa: 'dāngdì', hv: 'đương địa', vi: 'địa phương, tại chỗ', ex: '你吃过当地的小吃吗？', exPy: 'Nǐ chīguo dāngdì de xiǎochī ma?', exVi: 'Bạn đã ăn thử món ăn vặt của địa phương chưa?' },
      { w: '美食', ipa: 'měishí', hv: 'mỹ thực', vi: 'món ngon, ẩm thực', ex: '成都的美食非常有名。', exPy: 'Chéngdū de měishí fēicháng yǒumíng.', exVi: 'Ẩm thực Thành Đô rất nổi tiếng.' },
      { w: '体验', ipa: 'tǐyàn', hv: 'thể nghiệm', vi: 'trải nghiệm', ex: '我想体验一下当地人的生活。', exPy: 'Wǒ xiǎng tǐyàn yíxià dāngdì rén de shēnghuó.', exVi: 'Tôi muốn trải nghiệm cuộc sống của người dân địa phương.' },
      { w: '提前', ipa: 'tíqián', hv: 'đề tiền', vi: 'trước (thời hạn), sớm hơn dự định', ex: '旅游以前最好提前订好机票。', exPy: 'Lǚyóu yǐqián zuìhǎo tíqián dìnghǎo jīpiào.', exVi: 'Trước khi đi du lịch tốt nhất nên đặt vé máy bay trước.' }
    ],
    exercises: [
      { type: 'mc', q: '过___的时候，要拿出护照。', options: ['海关', '景色', '美食'], answer: 0, explain: '过海关 = qua hải quan; lúc đó phải xuất trình hộ chiếu.' },
      { type: 'fill', q: '这里的___太美了，我们拍了很多照片。', answer: ['景色', 'jǐngsè', 'jingse'], hint: 'phong cảnh (jǐngsè)', explain: '景色 (cảnh sắc) = phong cảnh.' },
      { type: 'order', vi: 'Tôi đã từng ăn món ngon của địa phương.', words: ['当地的', '我', '美食', '吃过'], answer: '我 吃过 当地的 美食' },
      { type: 'mc', q: '"提前" nghĩa là:', options: ['trước (thời hạn), sớm hơn', 'sau đó', 'đúng giờ'], answer: 0, explain: '提前 (đề tiền) = làm trước, sớm hơn thời gian dự định: 提前订票 = đặt vé trước.' },
      { type: 'mc', q: '我的行李还没收拾好___。', options: ['了', '呢', '过'], answer: 1, explain: 'Mẫu 还没…呢 = vẫn chưa…; câu phủ định không dùng 了.' },
      { type: 'fill', q: '我们已经选好旅游___了。', answer: ['路线', 'lùxiàn', 'luxian'], hint: 'lộ trình (lùxiàn)', explain: '旅游路线 = lộ trình du lịch.' },
      { type: 'order', vi: 'Chúng tôi đã đặt trước nhà nghỉ rồi.', words: ['提前', '我们', '旅馆了', '订好', '已经'], answer: '我们 已经 提前 订好 旅馆了' },
      { type: 'mc', q: '"Tôi chưa từng trải nghiệm cuộc sống ở nông thôn." nói thế nào?', options: ['我没体验过农村的生活。', '我不体验过农村的生活。', '我没体验过了农村的生活。'], answer: 0, explain: 'Chưa từng = 没 + V + 过, không dùng 不 và không thêm 了.' }
    ],
    reading: {
      title: '第一次去云南',
      titleVi: 'Lần đầu đến Vân Nam',
      text: [
        '去年夏天，我和两个朋友去了一次云南。这是我第一次去中国的南方旅游。出发以前，我们已经找好了一家旅行社，也提前选好了路线，所以一路上都很顺利。',
        '我们先到了昆明，然后去了大理和丽江。那里的景色美极了，天特别蓝，山上还有白雪。我们住在一家小旅馆里，老板是当地人，对我们非常热情，还告诉我们很多好玩儿的地方。',
        '在云南，我吃过很多以前没吃过的美食，也体验了当地人的生活。最有意思的是，我们跟一位老奶奶学了怎么做米线。',
        '现在我已经回来半年了，可是还没把照片整理好呢。朋友们问我还想不想去，我说：“当然想！下次我想去西双版纳。”'
      ],
      py: [
        'Qùnián xiàtiān, wǒ hé liǎng ge péngyou qùle yí cì Yúnnán. Zhè shì wǒ dì-yī cì qù Zhōngguó de nánfāng lǚyóu. Chūfā yǐqián, wǒmen yǐjīng zhǎohǎole yì jiā lǚxíngshè, yě tíqián xuǎnhǎole lùxiàn, suǒyǐ yílùshang dōu hěn shùnlì.',
        'Wǒmen xiān dàole Kūnmíng, ránhòu qùle Dàlǐ hé Lìjiāng. Nàli de jǐngsè měi jí le, tiān tèbié lán, shān shang hái yǒu báixuě. Wǒmen zhù zài yì jiā xiǎo lǚguǎn li, lǎobǎn shì dāngdì rén, duì wǒmen fēicháng rèqíng, hái gàosu wǒmen hěn duō hǎowánr de dìfang.',
        'Zài Yúnnán, wǒ chīguo hěn duō yǐqián méi chīguo de měishí, yě tǐyànle dāngdì rén de shēnghuó. Zuì yǒu yìsi de shì, wǒmen gēn yí wèi lǎo nǎinai xuéle zěnme zuò mǐxiàn.',
        'Xiànzài wǒ yǐjīng huílai bàn nián le, kěshì hái méi bǎ zhàopiàn zhěnglǐ hǎo ne. Péngyoumen wèn wǒ hái xiǎng bu xiǎng qù, wǒ shuō: "Dāngrán xiǎng! Xià cì wǒ xiǎng qù Xīshuāngbǎnnà."'
      ],
      vi: [
        'Mùa hè năm ngoái, tôi cùng hai người bạn đi Vân Nam một chuyến. Đây là lần đầu tiên tôi đi du lịch miền nam Trung Quốc. Trước khi xuất phát, chúng tôi đã tìm được một công ty du lịch, cũng đã chọn lộ trình từ trước, nên suốt chuyến đi đều rất suôn sẻ.',
        'Chúng tôi đến Côn Minh trước, sau đó đi Đại Lý và Lệ Giang. Phong cảnh ở đó đẹp tuyệt vời, trời xanh vô cùng, trên núi còn có tuyết trắng. Chúng tôi ở trong một nhà nghỉ nhỏ, chủ nhà là người địa phương, rất nhiệt tình với chúng tôi, còn chỉ cho chúng tôi nhiều chỗ chơi vui.',
        'Ở Vân Nam, tôi đã ăn nhiều món ngon mà trước đây chưa từng ăn, cũng trải nghiệm cuộc sống của người dân địa phương. Thú vị nhất là chúng tôi đã học một bà cụ cách nấu bún gạo (mixian).',
        'Giờ tôi đã về được nửa năm rồi mà vẫn chưa sắp xếp xong ảnh. Bạn bè hỏi tôi còn muốn đi nữa không, tôi nói: "Tất nhiên là muốn! Lần sau tôi muốn đi Tây Song Bản Nạp."'
      ],
      questions: [
        { q: 'Tác giả đi Vân Nam cùng ai?', options: ['Một mình', 'Cùng hai người bạn', 'Cùng bố mẹ', 'Cùng đồng nghiệp'], answer: 1, explain: 'Câu đầu: 我和两个朋友去了一次云南.' },
        { q: 'Vì sao chuyến đi rất suôn sẻ?', options: ['Vì họ đã tìm công ty du lịch và chọn lộ trình từ trước', 'Vì chủ nhà nghỉ đi cùng họ', 'Vì họ đã từng đến Vân Nam', 'Vì trời không mưa'], answer: 0, explain: '已经找好了一家旅行社，也提前选好了路线，所以一路上都很顺利.' },
        { q: 'Câu nào ĐÚNG về chủ nhà nghỉ?', options: ['Là người Bắc Kinh', 'Là người địa phương, rất nhiệt tình', 'Dạy họ nấu bún gạo', 'Không thích khách du lịch'], answer: 1, explain: '老板是当地人，对我们非常热情. Người dạy nấu bún là một bà cụ.' },
        { q: 'Từ đoạn cuối có thể suy ra điều gì?', options: ['Tác giả không thích chuyến đi', 'Tác giả đã sắp xếp xong toàn bộ ảnh', 'Tác giả rất thích chuyến đi và còn muốn đi du lịch tiếp', 'Tác giả đã từng đến Tây Song Bản Nạp'], answer: 2, explain: 'Khi được hỏi có muốn đi nữa không, tác giả trả lời 当然想 và đã có dự định 下次我想去西双版纳; còn ảnh thì 还没整理好呢.' }
      ]
    }
  },

  // ───────────────────────── HSK3-2: Công việc & phỏng vấn ─────────────────────────
  'zh-hsk3-2': {
    vocab: [
      { w: '工资', ipa: 'gōngzī', hv: 'công tư', vi: 'tiền lương', ex: '这份工作的工资不太高，但是很有意思。', exPy: 'Zhè fèn gōngzuò de gōngzī bú tài gāo, dànshì hěn yǒu yìsi.', exVi: 'Lương của công việc này không cao lắm nhưng rất thú vị.' },
      { w: '老板', ipa: 'lǎobǎn', hv: 'lão bản', vi: 'ông chủ, sếp', ex: '老板正在办公室里打电话呢。', exPy: 'Lǎobǎn zhèngzài bàngōngshì li dǎ diànhuà ne.', exVi: 'Sếp đang gọi điện trong văn phòng.' },
      { w: '职业', ipa: 'zhíyè', hv: 'chức nghiệp', vi: 'nghề nghiệp', ex: '老师是一个很好的职业。', exPy: 'Lǎoshī shì yí ge hěn hǎo de zhíyè.', exVi: 'Giáo viên là một nghề rất tốt.' },
      { w: '专业', ipa: 'zhuānyè', hv: 'chuyên nghiệp', vi: 'chuyên ngành; chuyên nghiệp', ex: '你在大学学的是什么专业？', exPy: 'Nǐ zài dàxué xué de shì shénme zhuānyè?', exVi: 'Ở đại học bạn học chuyên ngành gì?' },
      { w: '能力', ipa: 'nénglì', hv: 'năng lực', vi: 'năng lực, khả năng', ex: '她的工作能力很强。', exPy: 'Tā de gōngzuò nénglì hěn qiáng.', exVi: 'Năng lực làm việc của cô ấy rất giỏi.' },
      { w: '负责', ipa: 'fùzé', hv: 'phụ trách', vi: 'phụ trách, chịu trách nhiệm', ex: '这件事由小王负责。', exPy: 'Zhè jiàn shì yóu Xiǎo Wáng fùzé.', exVi: 'Việc này do Tiểu Vương phụ trách.' },
      { w: '部门', ipa: 'bùmén', hv: 'bộ môn', vi: 'phòng ban, bộ phận', ex: '他在我们部门工作了五年了。', exPy: 'Tā zài wǒmen bùmén gōngzuòle wǔ nián le.', exVi: 'Anh ấy làm ở phòng chúng tôi được năm năm rồi.' },
      { w: '压力', ipa: 'yālì', hv: 'áp lực', vi: 'áp lực', ex: '最近工作压力很大，我常常加班。', exPy: 'Zuìjìn gōngzuò yālì hěn dà, wǒ chángcháng jiābān.', exVi: 'Dạo này áp lực công việc rất lớn, tôi thường xuyên tăng ca.' },
      { w: '文件', ipa: 'wénjiàn', hv: 'văn kiện', vi: 'tài liệu, văn bản; tệp (máy tính)', ex: '她正在复印会议的文件。', exPy: 'Tā zhèngzài fùyìn huìyì de wénjiàn.', exVi: 'Cô ấy đang photo tài liệu cho cuộc họp.' },
      { w: '任务', ipa: 'rènwu', hv: 'nhiệm vụ', vi: 'nhiệm vụ', ex: '经理给了我一个新任务。', exPy: 'Jīnglǐ gěile wǒ yí ge xīn rènwu.', exVi: 'Giám đốc giao cho tôi một nhiệm vụ mới.' }
    ],
    exercises: [
      { type: 'mc', q: '老板___看文件呢，你等一下吧。', options: ['正在', '过', '了'], answer: 0, explain: '正在 + V + 呢 = đang làm gì.' },
      { type: 'fill', q: '我在这个___工作了三年。', answer: ['部门', 'bùmén', 'bumen'], hint: 'phòng ban (bùmén)', explain: '部门 (bộ môn) = phòng ban trong công ty.' },
      { type: 'mc', q: '"工资" nghĩa là:', options: ['tiền lương', 'công việc', 'công ty'], answer: 0, explain: '工资 (công tư) = tiền lương.' },
      { type: 'order', vi: 'Tôi đã làm ở phòng này năm năm rồi.', words: ['这个部门', '我', '五年了', '在', '工作了'], answer: '我 在 这个部门 工作了 五年了' },
      { type: 'mc', q: 'Câu nào đúng?', options: ['最近工作压力很大。', '最近工作压力很多。', '最近工作压力很高。'], answer: 0, explain: '压力 đi với 大 / 小: 压力很大 = áp lực lớn.' },
      { type: 'fill', q: '会议的___我已经复印好了。', answer: ['文件', 'wénjiàn', 'wenjian'], hint: 'tài liệu (wénjiàn)', explain: '文件 = tài liệu, văn bản.' },
      { type: 'order', vi: 'Sếp đang xem CV của bạn.', words: ['你的', '老板', '简历', '正在看'], answer: '老板 正在看 你的 简历' },
      { type: 'mc', q: '这件事由小王___，你去问他吧。', options: ['负责', '能力', '职业'], answer: 0, explain: '由 + người + 负责 = do ai phụ trách.' }
    ],
    reading: {
      title: '我的第一份工作',
      titleVi: 'Công việc đầu tiên của tôi',
      text: [
        '我叫阮明，是越南人。大学的时候我学的是汉语专业。毕业以后，我在河内的一家中国公司找到了工作，到现在已经工作了两年了。',
        '面试那天，我非常紧张。经理问了我很多问题，还让我翻译了一份文件。虽然有点儿难，但是我还是翻译完了。一个星期以后，公司通知我去上班。',
        '现在我在市场部门工作，负责跟中国客人联系。我的工资不算高，工作压力也比较大，有时候晚上还得加班。不过我的同事们都很好，遇到困难的时候，大家总是互相帮助。',
        '写这篇文章的时候，我正坐在办公室里。老板刚给了我一个新任务：下个月跟他一起去上海开会。我觉得这是一个提高能力的好机会。'
      ],
      py: [
        'Wǒ jiào Ruǎn Míng, shì Yuènán rén. Dàxué de shíhou wǒ xué de shì Hànyǔ zhuānyè. Bìyè yǐhòu, wǒ zài Hénèi de yì jiā Zhōngguó gōngsī zhǎodàole gōngzuò, dào xiànzài yǐjīng gōngzuòle liǎng nián le.',
        'Miànshì nà tiān, wǒ fēicháng jǐnzhāng. Jīnglǐ wènle wǒ hěn duō wèntí, hái ràng wǒ fānyìle yí fèn wénjiàn. Suīrán yǒudiǎnr nán, dànshì wǒ háishi fānyì wán le. Yí ge xīngqī yǐhòu, gōngsī tōngzhī wǒ qù shàngbān.',
        'Xiànzài wǒ zài shìchǎng bùmén gōngzuò, fùzé gēn Zhōngguó kèrén liánxì. Wǒ de gōngzī bú suàn gāo, gōngzuò yālì yě bǐjiào dà, yǒu shíhou wǎnshang hái děi jiābān. Búguò wǒ de tóngshìmen dōu hěn hǎo, yùdào kùnnan de shíhou, dàjiā zǒngshì hùxiāng bāngzhù.',
        'Xiě zhè piān wénzhāng de shíhou, wǒ zhèng zuò zài bàngōngshì li. Lǎobǎn gāng gěile wǒ yí ge xīn rènwu: xià ge yuè gēn tā yìqǐ qù Shànghǎi kāihuì. Wǒ juéde zhè shì yí ge tígāo nénglì de hǎo jīhuì.'
      ],
      vi: [
        'Tôi tên là Nguyễn Minh, người Việt Nam. Hồi đại học tôi học chuyên ngành tiếng Trung. Sau khi tốt nghiệp, tôi tìm được việc ở một công ty Trung Quốc tại Hà Nội, đến nay đã làm được hai năm rồi.',
        'Hôm phỏng vấn, tôi vô cùng hồi hộp. Giám đốc hỏi tôi rất nhiều câu, còn bảo tôi dịch một tài liệu. Tuy hơi khó nhưng tôi vẫn dịch xong. Một tuần sau, công ty báo tôi đi làm.',
        'Bây giờ tôi làm ở phòng thị trường, phụ trách liên lạc với khách hàng Trung Quốc. Lương của tôi không tính là cao, áp lực công việc cũng khá lớn, có khi buổi tối còn phải tăng ca. Nhưng đồng nghiệp của tôi đều rất tốt, khi gặp khó khăn mọi người luôn giúp đỡ nhau.',
        'Lúc viết bài này, tôi đang ngồi trong văn phòng. Sếp vừa giao cho tôi một nhiệm vụ mới: tháng sau cùng ông ấy đi Thượng Hải họp. Tôi thấy đây là một cơ hội tốt để nâng cao năng lực.'
      ],
      questions: [
        { q: 'Ở đại học, Minh học chuyên ngành gì?', options: ['Tiếng Anh', 'Tiếng Trung', 'Kinh tế', 'Du lịch'], answer: 1, explain: '我学的是汉语专业.' },
        { q: 'Trong buổi phỏng vấn, giám đốc yêu cầu Minh làm gì?', options: ['Viết CV', 'Dịch một tài liệu', 'Gọi điện cho khách', 'Đi Thượng Hải'], answer: 1, explain: '还让我翻译了一份文件.' },
        { q: 'Câu nào KHÔNG đúng về công việc hiện tại của Minh?', options: ['Lương không cao lắm', 'Đôi khi phải tăng ca', 'Đồng nghiệp hay giúp đỡ nhau', 'Áp lực công việc rất nhỏ'], answer: 3, explain: 'Bài viết 工作压力也比较大 = áp lực khá lớn.' },
        { q: 'Có thể suy ra Minh cảm thấy thế nào về nhiệm vụ mới?', options: ['Lo lắng và muốn từ chối', 'Coi đó là cơ hội tốt để tiến bộ', 'Không quan tâm', 'Không vui vì phải đi xa'], answer: 1, explain: '我觉得这是一个提高能力的好机会 — Minh nhìn nhiệm vụ một cách tích cực.' }
      ]
    }
  },

  // ───────────────────────── HSK3-3: Sức khoẻ ─────────────────────────
  'zh-hsk3-3': {
    vocab: [
      { w: '大夫', ipa: 'dàifu', hv: 'đại phu', vi: 'bác sĩ (khẩu ngữ)', ex: '大夫说我得多休息几天。', exPy: 'Dàifu shuō wǒ děi duō xiūxi jǐ tiān.', exVi: 'Bác sĩ nói tôi phải nghỉ thêm mấy hôm.' },
      { w: '营养', ipa: 'yíngyǎng', hv: 'doanh dưỡng', vi: 'dinh dưỡng', ex: '早饭应该吃得有营养一点儿。', exPy: 'Zǎofàn yīnggāi chī de yǒu yíngyǎng yìdiǎnr.', exVi: 'Bữa sáng nên ăn có dinh dưỡng một chút.' },
      { w: '痛', ipa: 'tòng', hv: 'thống', vi: 'đau, nhức', ex: '我的肚子很痛，得去医院看看。', exPy: 'Wǒ de dùzi hěn tòng, děi qù yīyuàn kànkan.', exVi: 'Bụng tôi đau quá, phải đến bệnh viện khám thôi.' },
      { w: '检查', ipa: 'jiǎnchá', hv: 'kiểm tra', vi: 'kiểm tra, khám (bệnh)', ex: '你应该去医院检查一下身体。', exPy: 'Nǐ yīnggāi qù yīyuàn jiǎnchá yíxià shēntǐ.', exVi: 'Bạn nên đến bệnh viện kiểm tra sức khoẻ.' },
      { w: '散步', ipa: 'sànbù', hv: 'tản bộ', vi: 'đi dạo', ex: '吃完晚饭，我们一边散步一边聊天。', exPy: 'Chīwán wǎnfàn, wǒmen yìbiān sànbù yìbiān liáotiān.', exVi: 'Ăn tối xong, chúng tôi vừa đi dạo vừa trò chuyện.' },
      { w: '预防', ipa: 'yùfáng', hv: 'dự phòng', vi: 'phòng ngừa, phòng bệnh', ex: '多洗手可以预防感冒。', exPy: 'Duō xǐ shǒu kěyǐ yùfáng gǎnmào.', exVi: 'Rửa tay thường xuyên có thể phòng ngừa cảm cúm.' },
      { w: '困', ipa: 'kùn', hv: 'khốn', vi: 'buồn ngủ', ex: '我太困了，得去睡觉了。', exPy: 'Wǒ tài kùn le, děi qù shuìjiào le.', exVi: 'Tôi buồn ngủ quá, phải đi ngủ thôi.' },
      { w: '毛病', ipa: 'máobìng', hv: 'mao bệnh', vi: 'tật xấu; bệnh vặt; trục trặc', ex: '他有一边吃饭一边看手机的毛病。', exPy: 'Tā yǒu yìbiān chīfàn yìbiān kàn shǒujī de máobìng.', exVi: 'Anh ấy có tật vừa ăn cơm vừa xem điện thoại.' },
      { w: '卫生', ipa: 'wèishēng', hv: 'vệ sinh', vi: 'vệ sinh', ex: '饭前洗手是很好的卫生习惯。', exPy: 'Fàn qián xǐ shǒu shì hěn hǎo de wèishēng xíguàn.', exVi: 'Rửa tay trước khi ăn là thói quen vệ sinh rất tốt.' },
      { w: '保持', ipa: 'bǎochí', hv: 'bảo trì', vi: 'giữ, duy trì', ex: '你应该保持好心情。', exPy: 'Nǐ yīnggāi bǎochí hǎo xīnqíng.', exVi: 'Bạn nên giữ tâm trạng vui vẻ.' }
    ],
    exercises: [
      { type: 'mc', q: '我昨天晚上没睡好，现在很___。', options: ['困', '卫生', '营养'], answer: 0, explain: '困 (kùn) = buồn ngủ, hợp với vế "đêm qua ngủ không ngon".' },
      { type: 'fill', q: '多洗手可以___感冒。', answer: ['预防', 'yùfáng', 'yufang'], hint: 'phòng ngừa (yùfáng)', explain: '预防 + bệnh = phòng ngừa bệnh.' },
      { type: 'mc', q: '"大夫" (dàifu) trong khẩu ngữ nghĩa là:', options: ['bác sĩ', 'người lớn', 'chồng'], answer: 0, explain: '大夫 đọc dàifu = bác sĩ. Đừng nhầm với 丈夫 (zhàngfu) = chồng.' },
      { type: 'order', vi: 'Bạn nên đến bệnh viện kiểm tra sức khoẻ.', words: ['检查一下', '你', '身体', '应该', '去医院'], answer: '你 应该 去医院 检查一下 身体' },
      { type: 'mc', q: '你肚子这么痛，___去医院看大夫。', options: ['得', '不用', '一边'], answer: 0, explain: '得 (děi) = phải; bụng đau như vậy thì phải đi khám.' },
      { type: 'fill', q: '吃完晚饭，我们一边___一边聊天。', answer: ['散步', 'sànbù', 'sanbu'], hint: 'đi dạo (sànbù)', explain: '一边散步一边聊天 = vừa đi dạo vừa trò chuyện.' },
      { type: 'order', vi: 'Bạn nên giữ thói quen vệ sinh tốt.', words: ['好的', '你', '卫生习惯', '应该', '保持'], answer: '你 应该 保持 好的 卫生习惯' },
      { type: 'mc', q: '他有一边走路一边看手机的___。', options: ['毛病', '营养', '预防'], answer: 0, explain: '毛病 ở đây = tật xấu, thói quen không tốt.' }
    ],
    reading: {
      title: '小王的新习惯',
      titleVi: 'Thói quen mới của Tiểu Vương',
      text: [
        '小王今年二十八岁，在一家公司工作。以前他每天都很忙，常常不吃早饭，晚上一边看手机一边吃外卖，十二点以后才睡觉。白天他总是很困，有时候头也很痛。',
        '上个月，他去医院检查身体。大夫说：“你的身体没有大问题，不用吃药，但是你的生活习惯有很多毛病。你应该按时吃饭，多吃有营养的东西，晚上得早点儿睡觉。”',
        '从那天开始，小王每天早上都吃一个鸡蛋，喝一杯牛奶。吃完晚饭，他就和妻子一边散步一边聊天。他还很注意卫生，饭前一定洗手，这样可以预防感冒。',
        '现在，小王白天不困了，工作也更认真了。他说：“健康比什么都重要。只要保持好习惯，就不用常常去医院了。”'
      ],
      py: [
        'Xiǎo Wáng jīnnián èrshíbā suì, zài yì jiā gōngsī gōngzuò. Yǐqián tā měi tiān dōu hěn máng, chángcháng bù chī zǎofàn, wǎnshang yìbiān kàn shǒujī yìbiān chī wàimài, shí\'èr diǎn yǐhòu cái shuìjiào. Báitiān tā zǒngshì hěn kùn, yǒu shíhou tóu yě hěn tòng.',
        'Shàng ge yuè, tā qù yīyuàn jiǎnchá shēntǐ. Dàifu shuō: "Nǐ de shēntǐ méiyǒu dà wèntí, búyòng chī yào, dànshì nǐ de shēnghuó xíguàn yǒu hěn duō máobìng. Nǐ yīnggāi ànshí chīfàn, duō chī yǒu yíngyǎng de dōngxi, wǎnshang děi zǎo diǎnr shuìjiào."',
        'Cóng nà tiān kāishǐ, Xiǎo Wáng měi tiān zǎoshang dōu chī yí ge jīdàn, hē yì bēi niúnǎi. Chīwán wǎnfàn, tā jiù hé qīzi yìbiān sànbù yìbiān liáotiān. Tā hái hěn zhùyì wèishēng, fàn qián yídìng xǐ shǒu, zhèyàng kěyǐ yùfáng gǎnmào.',
        'Xiànzài, Xiǎo Wáng báitiān bú kùn le, gōngzuò yě gèng rènzhēn le. Tā shuō: "Jiànkāng bǐ shénme dōu zhòngyào. Zhǐyào bǎochí hǎo xíguàn, jiù búyòng chángcháng qù yīyuàn le."'
      ],
      vi: [
        'Tiểu Vương năm nay hai mươi tám tuổi, làm việc ở một công ty. Trước đây ngày nào anh cũng rất bận, thường không ăn sáng, buổi tối vừa xem điện thoại vừa ăn đồ gọi về, sau mười hai giờ mới đi ngủ. Ban ngày anh lúc nào cũng buồn ngủ, có khi còn đau đầu.',
        'Tháng trước, anh đến bệnh viện kiểm tra sức khoẻ. Bác sĩ nói: "Cơ thể anh không có vấn đề gì lớn, không cần uống thuốc, nhưng thói quen sinh hoạt của anh có nhiều điểm không tốt. Anh nên ăn đúng giờ, ăn nhiều đồ có dinh dưỡng, buổi tối phải ngủ sớm một chút."',
        'Từ hôm đó, sáng nào Tiểu Vương cũng ăn một quả trứng, uống một cốc sữa. Ăn tối xong, anh cùng vợ vừa đi dạo vừa trò chuyện. Anh còn rất chú ý vệ sinh, trước khi ăn nhất định rửa tay, như vậy có thể phòng ngừa cảm cúm.',
        'Bây giờ, ban ngày Tiểu Vương không còn buồn ngủ nữa, làm việc cũng chăm chỉ hơn. Anh nói: "Sức khoẻ quan trọng hơn bất cứ thứ gì. Chỉ cần giữ thói quen tốt thì không cần phải đi bệnh viện thường xuyên nữa."'
      ],
      questions: [
        { q: 'Trước đây Tiểu Vương gặp vấn đề gì?', options: ['Ban ngày hay buồn ngủ, đôi khi đau đầu', 'Bị sốt cao', 'Bị đau chân', 'Ăn sáng quá nhiều'], answer: 0, explain: '白天他总是很困，有时候头也很痛.' },
        { q: 'Bác sĩ nói gì với Tiểu Vương?', options: ['Phải nằm viện', 'Phải uống thuốc mỗi ngày', 'Không cần uống thuốc nhưng phải sửa thói quen sinh hoạt', 'Phải nghỉ việc'], answer: 2, explain: '不用吃药，但是你的生活习惯有很多毛病.' },
        { q: 'Sau bữa tối, Tiểu Vương thường làm gì?', options: ['Vừa xem điện thoại vừa ăn', 'Vừa đi dạo vừa trò chuyện với vợ', 'Đi tập thể hình', 'Đi ngủ ngay'], answer: 1, explain: '他就和妻子一边散步一边聊天.' },
        { q: 'Có thể suy ra nguyên nhân chính khiến Tiểu Vương hay mệt trước đây là gì?', options: ['Anh ấy bị bệnh nặng', 'Thói quen sinh hoạt không tốt: bỏ bữa sáng, ngủ muộn', 'Công việc quá nhàn', 'Anh ấy không chịu uống thuốc'], answer: 1, explain: 'Bác sĩ nói cơ thể không có vấn đề lớn, chỉ có thói quen xấu; sau khi đổi thói quen, anh ấy hết buồn ngủ.' }
      ]
    }
  },

  // ───────────────────────── HSK3-4: Kể chuyện ─────────────────────────
  'zh-hsk3-4': {
    vocab: [
      { w: '从前', ipa: 'cóngqián', hv: 'tùng tiền', vi: 'ngày xưa, trước kia', ex: '从前有一个很聪明的孩子。', exPy: 'Cóngqián yǒu yí ge hěn cōngming de háizi.', exVi: 'Ngày xưa có một đứa trẻ rất thông minh.' },
      { w: '传说', ipa: 'chuánshuō', hv: 'truyền thuyết', vi: 'truyền thuyết; tương truyền', ex: '这是一个关于月亮的传说。', exPy: 'Zhè shì yí ge guānyú yuèliang de chuánshuō.', exVi: 'Đây là một truyền thuyết về mặt trăng.' },
      { w: '终于', ipa: 'zhōngyú', hv: 'chung ư', vi: 'cuối cùng (thì)', ex: '我等了一个小时，他终于来了。', exPy: 'Wǒ děngle yí ge xiǎoshí, tā zhōngyú lái le.', exVi: 'Tôi đợi một tiếng, cuối cùng anh ấy cũng đến.' },
      { w: '结束', ipa: 'jiéshù', hv: 'kết thúc', vi: 'kết thúc', ex: '电影结束以后，我们去吃饭了。', exPy: 'Diànyǐng jiéshù yǐhòu, wǒmen qù chīfàn le.', exVi: 'Phim kết thúc xong, chúng tôi đi ăn.' },
      { w: '经历', ipa: 'jīnglì', hv: 'kinh lịch', vi: 'trải qua; điều đã trải qua', ex: '这是我最难忘的一次经历。', exPy: 'Zhè shì wǒ zuì nánwàng de yí cì jīnglì.', exVi: 'Đây là trải nghiệm khó quên nhất của tôi.' },
      { w: '意外', ipa: 'yìwài', hv: 'ý ngoại', vi: 'bất ngờ; chuyện ngoài ý muốn', ex: '听到这个消息，大家都很意外。', exPy: 'Tīngdào zhège xiāoxi, dàjiā dōu hěn yìwài.', exVi: 'Nghe tin này, mọi người đều rất bất ngờ.' },
      { w: '连忙', ipa: 'liánmáng', hv: 'liên mang', vi: 'vội vàng, vội', ex: '看到老人上车，他连忙站了起来。', exPy: 'Kàndào lǎorén shàng chē, tā liánmáng zhànle qǐlai.', exVi: 'Thấy cụ già lên xe, anh ấy vội đứng dậy.' },
      { w: '害怕', ipa: 'hàipà', hv: 'hại phạ', vi: 'sợ, sợ hãi', ex: '小时候我很害怕一个人在家。', exPy: 'Xiǎoshíhou wǒ hěn hàipà yí ge rén zài jiā.', exVi: 'Hồi nhỏ tôi rất sợ ở nhà một mình.' },
      { w: '奇怪', ipa: 'qíguài', hv: 'kỳ quái', vi: 'lạ, kỳ lạ', ex: '真奇怪，我的钥匙怎么不见了？', exPy: 'Zhēn qíguài, wǒ de yàoshi zěnme bú jiàn le?', exVi: 'Lạ thật, sao chìa khoá của tôi lại biến mất rồi?' },
      { w: '整理', ipa: 'zhěnglǐ', hv: 'chỉnh lý', vi: 'sắp xếp, dọn dẹp', ex: '我把房间整理好了。', exPy: 'Wǒ bǎ fángjiān zhěnglǐ hǎo le.', exVi: 'Tôi đã dọn dẹp phòng gọn gàng rồi.' }
    ],
    exercises: [
      { type: 'mc', q: '我等了很久，他___来了。', options: ['终于', '从前', '连忙'], answer: 0, explain: '终于 = cuối cùng (sau thời gian chờ đợi).' },
      { type: 'fill', q: '我把房间___好了。', answer: ['整理', 'zhěnglǐ', 'zhengli'], hint: 'dọn dẹp (zhěnglǐ)', explain: 'Câu 把: 把房间整理好了 = dọn phòng gọn gàng rồi.' },
      { type: 'order', vi: 'Tôi đã đọc xong câu chuyện truyền thuyết này.', words: ['这个传说', '我', '看完了', '把'], answer: '我 把 这个传说 看完了' },
      { type: 'mc', q: '"连忙" nghĩa là:', options: ['vội vàng', 'chậm rãi', 'cuối cùng'], answer: 0, explain: '连忙 (liên mang) = vội vàng làm ngay.' },
      { type: 'mc', q: '电影已经___了，我们回家吧。', options: ['结束', '害怕', '奇怪'], answer: 0, explain: '结束 = kết thúc: phim đã kết thúc rồi.' },
      { type: 'fill', q: '小时候我很___一个人在家。', answer: ['害怕', 'hàipà', 'haipa'], hint: 'sợ (hàipà)', explain: '害怕 = sợ.' },
      { type: 'order', vi: 'Anh ấy vội vàng cất hộ chiếu cẩn thận.', words: ['护照', '他', '放好了', '把', '连忙'], answer: '他 连忙 把 护照 放好了' },
      { type: 'mc', q: '真___，门怎么开着？', options: ['奇怪', '终于', '从前'], answer: 0, explain: '真奇怪 = lạ thật.' }
    ],
    reading: {
      title: '奇怪的雨伞',
      titleVi: 'Chiếc ô kỳ lạ',
      text: [
        '上个星期五，我经历了一件很奇怪的事。那天下午下大雨，我在公司门口等了很久，终于叫到了一辆出租车。',
        '下车以后，我突然发现我的雨伞不见了。我想：“糟了！这把伞是妈妈送给我的。”我连忙给出租车公司打电话，可是他们说没找到。那天晚上我很难过，觉得伞一定丢了。',
        '第二天早上，我在整理房间的时候，听到有人敲门。打开门一看，是昨天的司机！他说他把我送到家以后，在车里看到了这把伞，就给我送回来了。',
        '我真没想到会有这样的结果，太意外了！我请他喝了一杯咖啡，我们一边喝一边聊，后来成了好朋友。'
      ],
      py: [
        'Shàng ge xīngqīwǔ, wǒ jīnglìle yí jiàn hěn qíguài de shì. Nà tiān xiàwǔ xià dà yǔ, wǒ zài gōngsī ménkǒu děngle hěn jiǔ, zhōngyú jiàodàole yí liàng chūzūchē.',
        'Xià chē yǐhòu, wǒ tūrán fāxiàn wǒ de yǔsǎn bú jiàn le. Wǒ xiǎng: "Zāo le! Zhè bǎ sǎn shì māma sòng gěi wǒ de." Wǒ liánmáng gěi chūzūchē gōngsī dǎ diànhuà, kěshì tāmen shuō méi zhǎodào. Nà tiān wǎnshang wǒ hěn nánguò, juéde sǎn yídìng diū le.',
        'Dì-èr tiān zǎoshang, wǒ zài zhěnglǐ fángjiān de shíhou, tīngdào yǒu rén qiāo mén. Dǎkāi mén yí kàn, shì zuótiān de sījī! Tā shuō tā bǎ wǒ sòngdào jiā yǐhòu, zài chē li kàndàole zhè bǎ sǎn, jiù gěi wǒ sòng huílai le.',
        'Wǒ zhēn méi xiǎngdào huì yǒu zhèyàng de jiéguǒ, tài yìwài le! Wǒ qǐng tā hēle yì bēi kāfēi, wǒmen yìbiān hē yìbiān liáo, hòulái chéngle hǎo péngyou.'
      ],
      vi: [
        'Thứ Sáu tuần trước, tôi đã gặp một chuyện rất lạ. Chiều hôm đó trời mưa to, tôi đứng đợi ở cổng công ty rất lâu, cuối cùng cũng gọi được một chiếc taxi.',
        'Xuống xe xong, tôi bỗng phát hiện chiếc ô của mình không thấy đâu. Tôi nghĩ: "Chết rồi! Chiếc ô này là mẹ tặng mình." Tôi vội gọi điện cho hãng taxi, nhưng họ nói không tìm thấy. Tối hôm đó tôi rất buồn, nghĩ rằng chắc chắn mất ô rồi.',
        'Sáng hôm sau, lúc đang dọn dẹp phòng, tôi nghe có người gõ cửa. Mở cửa ra nhìn thì là bác tài xế hôm qua! Bác nói sau khi đưa tôi về đến nhà, bác thấy chiếc ô này trong xe nên mang trả lại cho tôi.',
        'Tôi thật không ngờ lại có kết quả như vậy, bất ngờ quá! Tôi mời bác uống một cốc cà phê, chúng tôi vừa uống vừa trò chuyện, về sau trở thành bạn tốt.'
      ],
      questions: [
        { q: 'Chuyện xảy ra vào lúc nào?', options: ['Thứ Sáu tuần trước', 'Chủ nhật tuần trước', 'Sáng hôm qua', 'Thứ Sáu tuần này'], answer: 0, explain: 'Câu đầu: 上个星期五.' },
        { q: 'Vì sao tác giả rất buồn khi mất ô?', options: ['Vì chiếc ô rất đắt', 'Vì đó là quà mẹ tặng', 'Vì trời mưa to mà không có ô', 'Vì đó là ô của công ty'], answer: 1, explain: '这把伞是妈妈送给我的.' },
        { q: 'Ai đã mang chiếc ô trả lại?', options: ['Mẹ tác giả', 'Nhân viên hãng taxi', 'Bác tài xế hôm trước', 'Hàng xóm'], answer: 2, explain: '打开门一看，是昨天的司机.' },
        { q: 'Có thể suy ra vì sao bác tài xế biết nhà tác giả?', options: ['Vì bác là hàng xóm', 'Vì hôm trước chính bác đã chở tác giả về nhà', 'Vì hãng taxi cho bác địa chỉ', 'Vì mẹ tác giả gọi điện cho bác'], answer: 1, explain: '他把我送到家以后… — chính bác đã đưa tác giả về tận nhà nên biết địa chỉ.' }
      ]
    }
  },

  // ───────────────────────── HSK3-5: Ý kiến & so sánh ─────────────────────────
  'zh-hsk3-5': {
    vocab: [
      { w: '相比', ipa: 'xiāngbǐ', hv: 'tương tỉ', vi: 'so với', ex: '跟去年相比，今年的东西贵多了。', exPy: 'Gēn qùnián xiāngbǐ, jīnnián de dōngxi guì duō le.', exVi: 'So với năm ngoái, đồ năm nay đắt hơn nhiều.' },
      { w: '区别', ipa: 'qūbié', hv: 'khu biệt', vi: 'sự khác biệt; phân biệt', ex: '这两个词有什么区别？', exPy: 'Zhè liǎng ge cí yǒu shénme qūbié?', exVi: 'Hai từ này khác nhau ở chỗ nào?' },
      { w: '优点', ipa: 'yōudiǎn', hv: 'ưu điểm', vi: 'ưu điểm', ex: '坐地铁的优点是不会堵车。', exPy: 'Zuò dìtiě de yōudiǎn shì bú huì dǔchē.', exVi: 'Ưu điểm của đi tàu điện ngầm là không bị tắc đường.' },
      { w: '缺点', ipa: 'quēdiǎn', hv: 'khuyết điểm', vi: 'nhược điểm, khuyết điểm', ex: '这个手机的缺点是太重了。', exPy: 'Zhège shǒujī de quēdiǎn shì tài zhòng le.', exVi: 'Nhược điểm của chiếc điện thoại này là quá nặng.' },
      { w: '反对', ipa: 'fǎnduì', hv: 'phản đối', vi: 'phản đối', ex: '爸爸反对我一个人去旅游。', exPy: 'Bàba fǎnduì wǒ yí ge rén qù lǚyóu.', exVi: 'Bố phản đối việc tôi đi du lịch một mình.' },
      { w: '同意', ipa: 'tóngyì', hv: 'đồng ý', vi: 'đồng ý', ex: '我同意你的看法。', exPy: 'Wǒ tóngyì nǐ de kànfǎ.', exVi: 'Tôi đồng ý với quan điểm của bạn.' },
      { w: '其实', ipa: 'qíshí', hv: 'kỳ thực', vi: 'thật ra, thực ra', ex: '大家都说汉语很难，其实没有那么难。', exPy: 'Dàjiā dōu shuō Hànyǔ hěn nán, qíshí méiyǒu nàme nán.', exVi: 'Mọi người đều nói tiếng Trung khó, thật ra không khó đến thế.' },
      { w: '适合', ipa: 'shìhé', hv: 'thích hợp', vi: 'phù hợp, hợp với', ex: '我觉得这件衣服很适合你。', exPy: 'Wǒ juéde zhè jiàn yīfu hěn shìhé nǐ.', exVi: 'Tôi thấy bộ quần áo này rất hợp với bạn.' },
      { w: '复杂', ipa: 'fùzá', hv: 'phức tạp', vi: 'phức tạp', ex: '这个问题比我想的复杂多了。', exPy: 'Zhège wèntí bǐ wǒ xiǎng de fùzá duō le.', exVi: 'Vấn đề này phức tạp hơn tôi nghĩ nhiều.' },
      { w: '价格', ipa: 'jiàgé', hv: 'giá cách', vi: 'giá cả', ex: '这两家店的价格差不多一样。', exPy: 'Zhè liǎng jiā diàn de jiàgé chàbuduō yíyàng.', exVi: 'Giá ở hai cửa hàng này gần như nhau.' }
    ],
    exercises: [
      { type: 'mc', q: '我___你的看法，我们就这样做吧。', options: ['同意', '反对', '区别'], answer: 0, explain: 'Vế sau "cứ làm như vậy đi" → 同意 = đồng ý.' },
      { type: 'fill', q: '这两个词有什么___？', answer: ['区别', 'qūbié', 'qubie'], hint: 'khác biệt (qūbié)', explain: '有什么区别 = khác nhau ở chỗ nào.' },
      { type: 'order', vi: 'Vấn đề này phức tạp hơn tôi nghĩ.', words: ['我想的', '这个问题', '复杂', '比'], answer: '这个问题 比 我想的 复杂' },
      { type: 'mc', q: '"其实" nghĩa là:', options: ['thật ra', 'hơn nữa', 'cuối cùng'], answer: 0, explain: '其实 (kỳ thực) = thật ra, dùng để nói điều trái với suy nghĩ thông thường.' },
      { type: 'mc', q: 'Câu nào đúng?', options: ['这件衣服很适合你。', '这件衣服很适合给你。', '这件衣服适合你很。'], answer: 0, explain: '适合 + tân ngữ trực tiếp: 适合你; 很 đứng trước động từ/tính từ.' },
      { type: 'fill', q: '坐地铁的___是不会堵车。', answer: ['优点', 'yōudiǎn', 'youdian'], hint: 'ưu điểm (yōudiǎn)', explain: '优点 = ưu điểm; trái nghĩa 缺点.' },
      { type: 'order', vi: 'Giá ở cửa hàng này không rẻ bằng cửa hàng kia.', words: ['那家', '这家的价格', '便宜', '没有', '那么'], answer: '这家的价格 没有 那家 那么 便宜' },
      { type: 'mc', q: '___去年相比，今年的东西贵多了。', options: ['跟', '比', '最'], answer: 0, explain: 'Mẫu 跟 / 和 + A + 相比 = so với A.' }
    ],
    reading: {
      title: '住在城市还是住在农村？',
      titleVi: 'Sống ở thành phố hay ở nông thôn?',
      text: [
        '最近，我们班讨论了一个问题：住在城市好，还是住在农村好？同学们的看法很不一样。',
        '小李认为城市更好。他说，跟农村相比，城市的交通更方便，工作机会也更多，看病、上学都很容易。不过他也同意，城市的缺点是东西太贵，空气也没有农村那么好。',
        '小张反对他的看法。她觉得农村的生活比城市安静多了，人和人的关系也没有那么复杂。她说：“其实现在农村也有网络，买东西也很方便，房子的价格比城市便宜得多。”',
        '最后老师说：“城市和农村各有优点，也各有缺点。没有最好的，只有最适合自己的。”你觉得呢？'
      ],
      py: [
        'Zuìjìn, wǒmen bān tǎolùnle yí ge wèntí: zhù zài chéngshì hǎo, háishi zhù zài nóngcūn hǎo? Tóngxuémen de kànfǎ hěn bù yíyàng.',
        'Xiǎo Lǐ rènwéi chéngshì gèng hǎo. Tā shuō, gēn nóngcūn xiāngbǐ, chéngshì de jiāotōng gèng fāngbiàn, gōngzuò jīhuì yě gèng duō, kànbìng, shàngxué dōu hěn róngyì. Búguò tā yě tóngyì, chéngshì de quēdiǎn shì dōngxi tài guì, kōngqì yě méiyǒu nóngcūn nàme hǎo.',
        'Xiǎo Zhāng fǎnduì tā de kànfǎ. Tā juéde nóngcūn de shēnghuó bǐ chéngshì ānjìng duō le, rén hé rén de guānxi yě méiyǒu nàme fùzá. Tā shuō: "Qíshí xiànzài nóngcūn yě yǒu wǎngluò, mǎi dōngxi yě hěn fāngbiàn, fángzi de jiàgé bǐ chéngshì piányi de duō."',
        'Zuìhòu lǎoshī shuō: "Chéngshì hé nóngcūn gè yǒu yōudiǎn, yě gè yǒu quēdiǎn. Méiyǒu zuì hǎo de, zhǐyǒu zuì shìhé zìjǐ de." Nǐ juéde ne?'
      ],
      vi: [
        'Gần đây, lớp chúng tôi đã thảo luận một vấn đề: sống ở thành phố tốt hay sống ở nông thôn tốt? Ý kiến của các bạn rất khác nhau.',
        'Tiểu Lý cho rằng thành phố tốt hơn. Cậu ấy nói, so với nông thôn, giao thông ở thành phố tiện hơn, cơ hội việc làm cũng nhiều hơn, đi khám bệnh hay đi học đều rất dễ. Nhưng cậu ấy cũng đồng ý rằng nhược điểm của thành phố là đồ quá đắt, không khí cũng không tốt bằng nông thôn.',
        'Tiểu Trương phản đối ý kiến của cậu ấy. Cô ấy thấy cuộc sống ở nông thôn yên tĩnh hơn thành phố nhiều, quan hệ giữa người với người cũng không phức tạp đến thế. Cô nói: "Thật ra bây giờ nông thôn cũng có mạng, mua sắm cũng rất tiện, giá nhà rẻ hơn thành phố nhiều."',
        'Cuối cùng thầy giáo nói: "Thành phố và nông thôn đều có ưu điểm riêng, cũng có nhược điểm riêng. Không có nơi tốt nhất, chỉ có nơi phù hợp nhất với bản thân." Còn bạn thấy sao?'
      ],
      questions: [
        { q: 'Theo Tiểu Lý, ưu điểm của thành phố là gì?', options: ['Không khí trong lành', 'Giao thông tiện, nhiều cơ hội việc làm', 'Nhà rẻ', 'Yên tĩnh'], answer: 1, explain: '城市的交通更方便，工作机会也更多.' },
        { q: 'Tiểu Lý thừa nhận nhược điểm nào của thành phố?', options: ['Ít trường học', 'Đồ đắt, không khí không tốt bằng nông thôn', 'Không có mạng', 'Khó đi khám bệnh'], answer: 1, explain: '城市的缺点是东西太贵，空气也没有农村那么好.' },
        { q: 'Câu nào ĐÚNG với ý kiến của Tiểu Trương?', options: ['Nông thôn ồn ào hơn thành phố', 'Ở nông thôn không mua sắm được', 'Giá nhà ở nông thôn rẻ hơn thành phố nhiều', 'Quan hệ giữa người với người ở nông thôn phức tạp hơn'], answer: 2, explain: '房子的价格比城市便宜得多.' },
        { q: 'Câu nói cuối của thầy giáo có ý gì?', options: ['Thành phố tốt hơn nông thôn', 'Nông thôn tốt hơn thành phố', 'Nên chọn nơi phù hợp với bản thân mình', 'Cả hai nơi đều không tốt'], answer: 2, explain: '没有最好的，只有最适合自己的 — không có câu trả lời chung, mỗi người chọn nơi hợp với mình.' }
      ]
    }
  },

  // ───────────────────────── HSK3-6: Điều kiện & nguyên nhân ─────────────────────────
  'zh-hsk3-6': {
    vocab: [
      { w: '理由', ipa: 'lǐyóu', hv: 'lý do', vi: 'lý do', ex: '你迟到的理由是什么？', exPy: 'Nǐ chídào de lǐyóu shì shénme?', exVi: 'Lý do bạn đến muộn là gì?' },
      { w: '后果', ipa: 'hòuguǒ', hv: 'hậu quả', vi: 'hậu quả', ex: '如果你不听大夫的话，后果会很严重。', exPy: 'Rúguǒ nǐ bù tīng dàifu de huà, hòuguǒ huì hěn yánzhòng.', exVi: 'Nếu bạn không nghe lời bác sĩ, hậu quả sẽ rất nghiêm trọng.' },
      { w: '解决', ipa: 'jiějué', hv: 'giải quyết', vi: 'giải quyết', ex: '别担心，这个问题我们一定能解决。', exPy: 'Bié dānxīn, zhège wèntí wǒmen yídìng néng jiějué.', exVi: 'Đừng lo, vấn đề này chúng ta nhất định giải quyết được.' },
      { w: '成功', ipa: 'chénggōng', hv: 'thành công', vi: 'thành công', ex: '虽然失败了很多次，但是他最后成功了。', exPy: 'Suīrán shībàile hěn duō cì, dànshì tā zuìhòu chénggōng le.', exVi: 'Tuy thất bại nhiều lần nhưng cuối cùng anh ấy đã thành công.' },
      { w: '不得不', ipa: 'bùdébù', hv: 'bất đắc bất', vi: 'buộc phải, không thể không', ex: '因为下大雨，我们不得不取消比赛。', exPy: 'Yīnwèi xià dà yǔ, wǒmen bùdébù qǔxiāo bǐsài.', exVi: 'Vì mưa to nên chúng tôi buộc phải huỷ trận đấu.' },
      { w: '只好', ipa: 'zhǐhǎo', hv: 'chỉ hảo', vi: 'đành phải', ex: '公共汽车一直不来，我只好走路回家。', exPy: 'Gōnggòng qìchē yìzhí bù lái, wǒ zhǐhǎo zǒulù huí jiā.', exVi: 'Xe buýt mãi không đến, tôi đành đi bộ về nhà.' },
      { w: '造成', ipa: 'zàochéng', hv: 'tạo thành', vi: 'gây ra (thường là điều xấu)', ex: '大雨造成了很多交通事故。', exPy: 'Dà yǔ zàochéngle hěn duō jiāotōng shìgù.', exVi: 'Mưa to đã gây ra nhiều vụ tai nạn giao thông.' },
      { w: '困难', ipa: 'kùnnan', hv: 'khốn nan', vi: 'khó khăn', ex: '如果遇到困难，就来找我。', exPy: 'Rúguǒ yùdào kùnnan, jiù lái zhǎo wǒ.', exVi: 'Nếu gặp khó khăn thì đến tìm tôi.' },
      { w: '只有', ipa: 'zhǐyǒu', hv: 'chỉ hữu', vi: 'chỉ có; chỉ khi (… 才 …)', ex: '只有多练习，才能说好汉语。', exPy: 'Zhǐyǒu duō liànxí, cái néng shuōhǎo Hànyǔ.', exVi: 'Chỉ có luyện tập nhiều thì mới nói giỏi tiếng Trung được.' },
      { w: '及时', ipa: 'jíshí', hv: 'cập thời', vi: 'kịp thời', ex: '因为大夫来得很及时，所以孩子没事。', exPy: 'Yīnwèi dàifu lái de hěn jíshí, suǒyǐ háizi méi shì.', exVi: 'Vì bác sĩ đến rất kịp thời nên đứa bé không sao.' }
    ],
    exercises: [
      { type: 'mc', q: '公共汽车一直不来，我___走路回家。', options: ['只好', '只有', '如果'], answer: 0, explain: '只好 = đành phải (không còn cách nào khác).' },
      { type: 'fill', q: '如果遇到___，就给我打电话。', answer: ['困难', 'kùnnan', 'kunnan'], hint: 'khó khăn (kùnnan)', explain: '遇到困难 = gặp khó khăn; mẫu 如果…就….' },
      { type: 'mc', q: '___多练习，才能说好汉语。', options: ['只有', '虽然', '所以'], answer: 0, explain: '只有…才… = chỉ khi … thì mới ….' },
      { type: 'order', vi: 'Vì mưa to nên chúng tôi buộc phải huỷ trận đấu.', words: ['取消比赛', '因为', '我们', '下大雨，', '不得不'], answer: '因为 下大雨， 我们 不得不 取消比赛' },
      { type: 'mc', q: '"后果" nghĩa là:', options: ['hậu quả', 'lý do', 'thành công'], answer: 0, explain: '后果 (hậu quả) = kết quả xấu do việc gì gây ra.' },
      { type: 'fill', q: '你迟到的___是什么？', answer: ['理由', 'lǐyóu', 'liyou'], hint: 'lý do (lǐyóu)', explain: '理由 = lý do.' },
      { type: 'order', vi: 'Vì bác sĩ đến kịp thời nên đứa bé không sao.', words: ['所以', '因为', '孩子没事', '大夫来得', '很及时，'], answer: '因为 大夫来得 很及时， 所以 孩子没事' },
      { type: 'mc', q: '这个问题太复杂了，我们得想办法___。', options: ['解决', '造成', '成功'], answer: 0, explain: '解决问题 = giải quyết vấn đề.' }
    ],
    reading: {
      title: '小林开咖啡店',
      titleVi: 'Tiểu Lâm mở quán cà phê',
      text: [
        '小林大学毕业以后，决定在家乡开一家咖啡店。家里人都很担心，因为他没有经验，也没有多少钱。可是小林说：“如果不试一试，我以后一定会后悔。”',
        '开店的第一年，他遇到了很多困难。因为店里的咖啡太贵，所以客人很少。有一次水管坏了，店里到处都是水，他不得不关门一个星期。',
        '虽然那时候小林很难过，但是他没有放弃。他认真地想了想客人少的理由，然后把价格降低了，还在店里放了很多书。他说，只有让客人觉得舒服，他们才会再来。',
        '现在，小林的咖啡店已经开了三年了，每天都有很多年轻人来这儿看书、聊天。大家都说他成功了，小林却笑着说：“这只是开始。”'
      ],
      py: [
        'Xiǎo Lín dàxué bìyè yǐhòu, juédìng zài jiāxiāng kāi yì jiā kāfēidiàn. Jiāli rén dōu hěn dānxīn, yīnwèi tā méiyǒu jīngyàn, yě méiyǒu duōshao qián. Kěshì Xiǎo Lín shuō: "Rúguǒ bú shì yi shì, wǒ yǐhòu yídìng huì hòuhuǐ."',
        'Kāi diàn de dì-yī nián, tā yùdàole hěn duō kùnnan. Yīnwèi diàn li de kāfēi tài guì, suǒyǐ kèrén hěn shǎo. Yǒu yí cì shuǐguǎn huài le, diàn li dàochù dōu shì shuǐ, tā bùdébù guān mén yí ge xīngqī.',
        'Suīrán nà shíhou Xiǎo Lín hěn nánguò, dànshì tā méiyǒu fàngqì. Tā rènzhēn de xiǎngle xiǎng kèrén shǎo de lǐyóu, ránhòu bǎ jiàgé jiàngdī le, hái zài diàn li fàngle hěn duō shū. Tā shuō, zhǐyǒu ràng kèrén juéde shūfu, tāmen cái huì zài lái.',
        'Xiànzài, Xiǎo Lín de kāfēidiàn yǐjīng kāile sān nián le, měi tiān dōu yǒu hěn duō niánqīngrén lái zhèr kàn shū, liáotiān. Dàjiā dōu shuō tā chénggōng le, Xiǎo Lín què xiàozhe shuō: "Zhè zhǐ shì kāishǐ."'
      ],
      vi: [
        'Sau khi tốt nghiệp đại học, Tiểu Lâm quyết định mở một quán cà phê ở quê. Người nhà ai cũng lo, vì cậu không có kinh nghiệm, cũng chẳng có bao nhiêu tiền. Nhưng Tiểu Lâm nói: "Nếu không thử một lần, sau này con nhất định sẽ hối hận."',
        'Năm đầu mở quán, cậu gặp rất nhiều khó khăn. Vì cà phê trong quán đắt quá nên khách rất ít. Có lần ống nước bị hỏng, trong quán chỗ nào cũng toàn nước, cậu buộc phải đóng cửa một tuần.',
        'Tuy lúc đó Tiểu Lâm rất buồn nhưng cậu không bỏ cuộc. Cậu nghiêm túc suy nghĩ lý do vì sao ít khách, rồi hạ giá xuống, còn đặt rất nhiều sách trong quán. Cậu nói, chỉ khi làm khách thấy thoải mái thì họ mới quay lại.',
        'Bây giờ quán cà phê của Tiểu Lâm đã mở được ba năm, ngày nào cũng có rất nhiều bạn trẻ đến đây đọc sách, trò chuyện. Ai cũng nói cậu đã thành công, nhưng Tiểu Lâm lại cười nói: "Đây mới chỉ là bắt đầu."'
      ],
      questions: [
        { q: 'Vì sao người nhà lo lắng khi Tiểu Lâm mở quán?', options: ['Vì cậu không có kinh nghiệm và không có nhiều tiền', 'Vì cậu không thích cà phê', 'Vì ở quê không có người trẻ', 'Vì cậu chưa tốt nghiệp'], answer: 0, explain: '因为他没有经验，也没有多少钱.' },
        { q: 'Năm đầu tiên, vì sao quán ít khách?', options: ['Quán quá nhỏ', 'Cà phê quá đắt', 'Quán ở quá xa', 'Quán không có sách'], answer: 1, explain: '因为店里的咖啡太贵，所以客人很少.' },
        { q: 'Khi ống nước bị hỏng, Tiểu Lâm đã phải làm gì?', options: ['Đóng cửa quán một tuần', 'Chuyển quán sang chỗ khác', 'Tăng giá cà phê', 'Bỏ không làm nữa'], answer: 0, explain: '他不得不关门一个星期.' },
        { q: 'Câu "这只是开始" cho thấy điều gì về Tiểu Lâm?', options: ['Cậu muốn đóng quán', 'Cậu khiêm tốn và còn muốn phát triển hơn nữa', 'Quán vẫn chưa có khách', 'Cậu không hài lòng với khách hàng'], answer: 1, explain: 'Dù mọi người khen thành công, cậu nói "đây mới là bắt đầu" — tức không tự mãn và còn có mục tiêu xa hơn.' }
      ]
    }
  }
};
