// Phần bổ sung bài học tiếng Anh cấp B2: từ vựng mới, bài tập thêm và bài đọc hiểu.
export default {
  'en-b2-1': {
    vocab: [
      { w: 'dilemma', ipa: '/dɪˈlɛmə/', vi: 'tình thế khó xử, thế tiến thoái lưỡng nan', ex: 'I am in a real dilemma: if I took the job, I would have to leave my family.', exVi: 'Tôi đang ở thế khó xử thật sự: nếu nhận công việc đó, tôi sẽ phải xa gia đình.' },
      { w: 'circumstance', ipa: '/ˈsɜrkəmˌstæns/', vi: 'hoàn cảnh, tình huống', ex: 'Under different circumstances, I would have accepted their offer.', exVi: 'Trong hoàn cảnh khác, tôi đã nhận lời đề nghị của họ rồi.' },
      { w: 'outcome', ipa: '/ˈaʊtˌkʌm/', vi: 'kết quả, kết cục', ex: 'If we had prepared better, the outcome would have been different.', exVi: 'Nếu chúng tôi chuẩn bị kỹ hơn thì kết quả đã khác.' },
      { w: 'fate', ipa: '/feɪt/', vi: 'số phận, định mệnh', ex: 'She believes that fate brought them together.', exVi: 'Cô ấy tin rằng số phận đã đưa họ đến với nhau.' },
      { w: 'temptation', ipa: '/tɛmpˈteɪʃən/', vi: 'sự cám dỗ', ex: 'I wish I could resist the temptation to check my phone every five minutes.', exVi: 'Ước gì tôi cưỡng lại được sự cám dỗ xem điện thoại năm phút một lần.' },
      { w: 'impulsive', ipa: '/ɪmˈpʌlsɪv/', vi: 'bốc đồng, hành động theo cảm hứng', ex: "If I hadn't been so impulsive, I wouldn't have spent all my savings.", exVi: 'Nếu tôi không bốc đồng như thế thì đã không tiêu hết tiền tiết kiệm.' },
      { w: 'reconsider', ipa: '/ˌrikənˈsɪdər/', vi: 'xem xét lại, cân nhắc lại', ex: 'I wish you would reconsider your decision.', exVi: 'Tôi mong bạn sẽ cân nhắc lại quyết định của mình.' },
      { w: 'setback', ipa: '/ˈsɛtˌbæk/', vi: 'trở ngại, bước lùi tạm thời', ex: "Losing that job was a setback, but it wasn't the end of the world.", exVi: 'Mất công việc đó là một bước lùi, nhưng đâu phải tận thế.' },
      { w: 'foresee', ipa: '/fɔrˈsi/', vi: 'thấy trước, lường trước', ex: 'If we had foreseen the problem, we would have changed our plans.', exVi: 'Nếu lường trước được vấn đề, chúng tôi đã thay đổi kế hoạch.' },
      { w: 'misfortune', ipa: '/mɪsˈfɔrtʃən/', vi: 'sự không may, vận rủi', ex: 'He had the misfortune to lose his wallet on the first day of the trip.', exVi: 'Anh ấy không may bị mất ví ngay ngày đầu của chuyến đi.' }
    ],
    exercises: [
      { type: 'mc', q: 'If I ___ the problem, I would have changed my plans.', options: ['foresaw', 'had foreseen', 'would foresee', 'have foreseen'], answer: 1,
        explain: 'Điều kiện loại 3 (không có thật ở quá khứ): If + had + V3, … would have + V3.' },
      { type: 'fill', q: 'I wish you ___ reconsider your decision. Please think again.', answer: ['would'], hint: 'wish + ai đó + ___ + V nguyên mẫu',
        explain: 'Wish + somebody + would + V dùng khi mong người khác thay đổi hành động hoặc thái độ.' },
      { type: 'mc', q: 'A situation in which you must choose between two difficult options is a ___.', options: ['setback', 'dilemma', 'fate', 'temptation'], answer: 1,
        explain: 'Dilemma là tình thế phải chọn giữa hai phương án đều khó.' },
      { type: 'fill', q: "If he ___ so impulsive, he wouldn't have bought that expensive car. (not be)", answer: ["hadn't been", 'had not been'], hint: 'had + V3, dạng phủ định',
        explain: "Vế sau là wouldn't have + V3 nên đây là điều kiện loại 3: If + hadn't been." },
      { type: 'mc', q: 'I wish I ___ resist the temptation to eat sweets.', options: ['can', 'could', 'will', 'had'], answer: 1,
        explain: 'Ước điều trái với hiện tại về khả năng: wish + could + V.' },
      { type: 'fill', q: 'Under different ___, I would accept the offer.', answer: ['circumstances'], hint: 'hoàn cảnh (số nhiều)',
        explain: 'Cụm cố định under … circumstances = trong hoàn cảnh …, luôn dùng số nhiều.' },
      { type: 'order', vi: 'Nếu chúng tôi chuẩn bị kỹ hơn thì kết quả đã khác.', words: ['outcome', 'had', 'If', 'been', 'better,', 'different', 'we', 'would', 'the', 'prepared', 'have'],
        answer: 'If we had prepared better, the outcome would have been different' },
      { type: 'order', vi: 'Ước gì tôi không bốc đồng như vậy.', words: ['so', 'were', 'I', 'impulsive', 'wish', 'not', 'I'],
        answer: 'I wish I were not so impulsive' }
    ],
    reading: {
      title: 'A Letter to My Younger Self',
      titleVi: 'Lá thư gửi chính mình thời trẻ',
      text: [
        'Dear twenty-year-old Minh, I am writing to you from the future. I am thirty-five now, and I have learned a few lessons that I wish someone had taught me earlier. Do you remember the dilemma you faced after university? You had to choose between a safe job at a bank and a risky position at a small travel company.',
        'You chose the bank because your parents wanted you to. If you had followed your heart, you would have spent your twenties travelling and writing. I sometimes wonder what the outcome would have been. Maybe I would be a famous writer now, or maybe I would be poor and unhappy. Nobody can foresee the future, and I do not really believe in fate.',
        'Here is my first piece of advice: do not be so impulsive with money. If you had not given in to the temptation to buy that expensive motorbike, you could have saved enough to study abroad. And when you lost your first business, it felt like a terrible misfortune. In fact, it was only a setback. It taught you more than any success.',
        'Finally, I wish you were kinder to yourself. Under different circumstances, you might have made better choices, but you did your best with what you knew. If I were you, I would reconsider one thing: call Grandma more often. Time goes faster than you think. With love, your older self.'
      ],
      vi: [
        'Minh hai mươi tuổi thân mến, tôi viết thư này cho bạn từ tương lai. Giờ tôi đã ba mươi lăm tuổi và đã học được vài bài học mà tôi ước gì có ai dạy mình sớm hơn. Bạn còn nhớ tình thế khó xử sau khi tốt nghiệp đại học không? Bạn phải chọn giữa một công việc ổn định ở ngân hàng và một vị trí nhiều rủi ro ở một công ty du lịch nhỏ.',
        'Bạn đã chọn ngân hàng vì bố mẹ muốn thế. Nếu bạn làm theo trái tim mình, có lẽ bạn đã dành những năm hai mươi để đi du lịch và viết lách. Đôi khi tôi tự hỏi kết cục sẽ ra sao. Có thể giờ tôi đã là một nhà văn nổi tiếng, hoặc cũng có thể tôi nghèo và không hạnh phúc. Không ai lường trước được tương lai, và tôi cũng không thật sự tin vào số phận.',
        'Đây là lời khuyên đầu tiên của tôi: đừng bốc đồng như thế với tiền bạc. Nếu bạn không chiều theo cám dỗ mua chiếc xe máy đắt tiền ấy, bạn đã có thể để dành đủ tiền đi du học. Còn khi bạn thất bại trong lần kinh doanh đầu tiên, bạn tưởng đó là một vận rủi khủng khiếp. Thật ra nó chỉ là một bước lùi tạm thời. Nó dạy bạn nhiều hơn bất kỳ thành công nào.',
        'Cuối cùng, tôi ước bạn tử tế với bản thân hơn. Trong hoàn cảnh khác, có lẽ bạn đã có những lựa chọn tốt hơn, nhưng bạn đã làm hết sức với những gì mình biết. Nếu tôi là bạn, tôi sẽ cân nhắc lại một điều: hãy gọi cho bà thường xuyên hơn. Thời gian trôi nhanh hơn bạn nghĩ. Thương mến, chính bạn của sau này.'
      ],
      questions: [
        { q: 'Mục đích chính của bức thư là gì?', options: ['Khuyên một người bạn nên làm ở ngân hàng', 'Chia sẻ bài học và lời khuyên cho chính mình lúc còn trẻ', 'Kể về một chuyến du lịch vòng quanh thế giới', 'Xin lỗi bố mẹ vì đã chọn sai nghề'], answer: 1,
          explain: 'Người viết (Minh 35 tuổi) gửi thư cho chính mình lúc 20 tuổi để chia sẻ những bài học và lời khuyên.' },
        { q: 'Sau khi tốt nghiệp, Minh đã chọn công việc nào?', options: ['Làm ở một công ty du lịch nhỏ', 'Trở thành nhà văn', 'Làm ở ngân hàng', 'Kinh doanh xe máy'], answer: 2,
          explain: '“You chose the bank because your parents wanted you to.”' },
        { q: 'Theo người viết, lần kinh doanh thất bại đầu tiên thật ra là gì?', options: ['Một vận rủi khủng khiếp không thể vượt qua', 'Một bước lùi tạm thời giúp Minh học được nhiều điều', 'Lỗi của bố mẹ Minh', 'Lý do khiến Minh mua xe máy'], answer: 1,
          explain: '“In fact, it was only a setback. It taught you more than any success.”' },
        { q: 'Lời khuyên “call Grandma more often” ngụ ý điều gì?', options: ['Người viết muốn bà cho thêm tiền', 'Người viết có lẽ tiếc vì đã không dành đủ thời gian cho bà', 'Bà của Minh đang sống ở nước ngoài', 'Minh đã gọi cho bà quá nhiều'], answer: 1,
          explain: 'Câu “Time goes faster than you think” cho thấy người viết tiếc nuối vì thời gian bên bà không còn nhiều hoặc đã qua.' }
      ]
    }
  },

  'en-b2-2': {
    vocab: [
      { w: 'tabloid', ipa: '/ˈtæbˌlɔɪd/', vi: 'báo lá cải', ex: 'The story was first published in a tabloid, so many people did not believe it.', exVi: 'Câu chuyện được đăng đầu tiên trên một tờ báo lá cải nên nhiều người không tin.' },
      { w: 'scandal', ipa: '/ˈskændəl/', vi: 'vụ bê bối', ex: 'The minister resigned after the scandal was revealed.', exVi: 'Vị bộ trưởng đã từ chức sau khi vụ bê bối bị phanh phui.' },
      { w: 'broadcaster', ipa: '/ˈbrɔdˌkæstər/', vi: 'đài phát thanh/truyền hình; phát thanh viên', ex: 'The final will be shown live by the national broadcaster.', exVi: 'Trận chung kết sẽ được đài truyền hình quốc gia phát trực tiếp.' },
      { w: 'editorial', ipa: '/ˌɛdɪˈtɔriəl/', vi: 'bài xã luận', ex: 'An editorial about air pollution was written by the chief editor.', exVi: 'Một bài xã luận về ô nhiễm không khí đã được tổng biên tập viết.' },
      { w: 'correspondent', ipa: '/ˌkɔrəˈspɑndənt/', vi: 'phóng viên (thường trú, chuyên mảng)', ex: 'Our correspondent in Tokyo has been sent to the scene.', exVi: 'Phóng viên thường trú của chúng tôi ở Tokyo đã được cử đến hiện trường.' },
      { w: 'allegation', ipa: '/ˌæləˈɡeɪʃən/', vi: 'lời cáo buộc (chưa được chứng minh)', ex: 'The allegations are being investigated by the police.', exVi: 'Những lời cáo buộc đang được cảnh sát điều tra.' },
      { w: 'evacuate', ipa: '/ɪˈvækjuˌeɪt/', vi: 'sơ tán', ex: 'Hundreds of families were evacuated before the storm hit.', exVi: 'Hàng trăm gia đình đã được sơ tán trước khi bão đổ bộ.' },
      { w: 'outbreak', ipa: '/ˈaʊtˌbreɪk/', vi: 'sự bùng phát (dịch bệnh, chiến tranh)', ex: 'An outbreak of flu has been reported in two schools.', exVi: 'Một đợt bùng phát cúm đã được ghi nhận ở hai trường học.' },
      { w: 'spokesman', ipa: '/ˈspoʊksmən/', vi: 'người phát ngôn', ex: 'A spokesman for the company said that nobody had been injured.', exVi: 'Người phát ngôn của công ty cho biết không ai bị thương.' },
      { w: 'prosecute', ipa: '/ˈprɑsɪˌkjut/', vi: 'truy tố, khởi tố', ex: 'Anyone who breaks this law will be prosecuted.', exVi: 'Bất kỳ ai vi phạm luật này sẽ bị truy tố.' }
    ],
    exercises: [
      { type: 'mc', q: 'Hundreds of people ___ before the storm hit the coast yesterday.', options: ['evacuating', 'were evacuated', 'have evacuated', 'are evacuating'], answer: 1,
        explain: 'Người dân được (người khác) sơ tán, có yesterday → bị động quá khứ đơn: were + V3.' },
      { type: 'fill', q: 'An outbreak of flu ___ been reported in two schools this week.', answer: ['has'], hint: 'bị động hiện tại hoàn thành',
        explain: 'Chủ ngữ số ít an outbreak → has been + V3.' },
      { type: 'mc', q: 'A newspaper that prints shocking stories about famous people is a ___.', options: ['broadcaster', 'tabloid', 'editorial', 'correspondent'], answer: 1,
        explain: 'Tabloid = báo lá cải, chuyên tin giật gân về người nổi tiếng.' },
      { type: 'fill', q: 'The allegations are being ___ by the police. (investigate)', answer: ['investigated'], hint: 'V3',
        explain: 'Bị động hiện tại tiếp diễn: are being + V3.' },
      { type: 'mc', q: 'Anyone who breaks the law will ___.', options: ['prosecute', 'be prosecuted', 'been prosecuted', 'prosecuted'], answer: 1,
        explain: 'Bị động với will: will be + V3.' },
      { type: 'fill', q: 'The minister resigned after the ___ was revealed by a journalist.', answer: ['scandal'], hint: 'vụ bê bối',
        explain: 'Scandal = vụ bê bối; was revealed là bị động quá khứ đơn.' },
      { type: 'order', vi: 'Một phóng viên đã được cử đến hiện trường.', words: ['been', 'scene', 'A', 'sent', 'has', 'the', 'correspondent', 'to'],
        answer: 'A correspondent has been sent to the scene' },
      { type: 'order', vi: 'Bài xã luận được tổng biên tập viết.', words: ['by', 'written', 'The', 'chief', 'was', 'editorial', 'the', 'editor'],
        answer: 'The editorial was written by the chief editor' }
    ],
    reading: {
      title: 'A Busy Night in the Newsroom',
      titleVi: 'Một đêm bận rộn ở toà soạn',
      text: [
        'At 9 p.m. last Friday, the newsroom of a national broadcaster in Hanoi was unusually quiet. Then two big stories arrived at the same time. First, a dam in the central region was damaged by heavy rain, and thousands of people had to be evacuated. Second, a scandal involving a famous businessman was revealed by a popular tabloid.',
        "The editors had to decide quickly which story should be covered first. A correspondent was sent to the flooded area, while a team of journalists was asked to check the allegations against the businessman. According to the tabloid, money had been taken from a children's charity and spent on luxury cars.",
        'By midnight, the first report from the flood zone had been broadcast. More than five thousand residents had been moved to schools and hospitals, and no deaths had been reported. However, doctors warned that an outbreak of disease could happen if clean water was not provided soon.',
        'The second story was more difficult. A spokesman for the businessman said that all the claims were false and that the tabloid would be taken to court. The police announced that the case was being investigated, but nobody has been prosecuted yet. The next morning, an editorial was published reminding readers that a person is innocent until proven guilty. As one senior editor said, “Our job is not to be first. Our job is to be right.”'
      ],
      vi: [
        'Lúc 9 giờ tối thứ Sáu tuần trước, phòng tin của một đài truyền hình quốc gia ở Hà Nội yên ắng một cách lạ thường. Rồi hai tin lớn đến cùng một lúc. Thứ nhất, một con đập ở miền Trung bị mưa lớn làm hư hại, và hàng nghìn người phải được sơ tán. Thứ hai, một vụ bê bối liên quan đến một doanh nhân nổi tiếng bị một tờ báo lá cải được nhiều người đọc phanh phui.',
        'Các biên tập viên phải quyết định thật nhanh tin nào nên được đưa trước. Một phóng viên được cử đến vùng lũ, trong khi một nhóm nhà báo được giao kiểm tra những lời cáo buộc nhắm vào vị doanh nhân. Theo tờ báo lá cải, tiền đã bị lấy từ một quỹ từ thiện cho trẻ em và tiêu vào những chiếc xe sang.',
        'Đến nửa đêm, bản tin đầu tiên từ vùng lũ đã được phát sóng. Hơn năm nghìn người dân đã được chuyển đến trường học và bệnh viện, và chưa có ca tử vong nào được ghi nhận. Tuy nhiên, các bác sĩ cảnh báo dịch bệnh có thể bùng phát nếu không sớm có nước sạch.',
        'Tin thứ hai khó hơn. Người phát ngôn của vị doanh nhân nói rằng mọi cáo buộc đều sai sự thật và tờ báo lá cải sẽ bị kiện ra toà. Cảnh sát thông báo vụ việc đang được điều tra, nhưng đến nay chưa ai bị truy tố. Sáng hôm sau, một bài xã luận được đăng để nhắc độc giả rằng một người vô tội cho đến khi bị chứng minh là có tội. Như một biên tập viên kỳ cựu nói: “Việc của chúng ta không phải là đưa tin đầu tiên. Việc của chúng ta là đưa tin đúng.”'
      ],
      questions: [
        { q: 'Bài đọc chủ yếu nói về điều gì?', options: ['Cách viết một bài xã luận hay', 'Một đêm làm việc bận rộn của toà soạn khi có hai tin lớn', 'Cuộc đời của một doanh nhân nổi tiếng', 'Cách phòng chống lũ lụt ở miền Trung'], answer: 1,
          explain: 'Cả bài kể cách toà soạn xử lý hai tin lớn (lũ lụt và vụ bê bối) trong cùng một đêm.' },
        { q: 'Theo tờ báo lá cải, vị doanh nhân bị cáo buộc làm gì?', options: ['Làm hư hại một con đập', 'Lấy tiền của quỹ từ thiện trẻ em để mua xe sang', 'Bỏ trốn khỏi cảnh sát', 'Mua lại một đài truyền hình'], answer: 1,
          explain: '“Money had been taken from a children\'s charity and spent on luxury cars.”' },
        { q: 'Vì sao các bác sĩ lo lắng?', options: ['Vì nhiều người bị thương nặng', 'Vì bệnh viện bị ngập', 'Vì dịch bệnh có thể bùng phát nếu không sớm có nước sạch', 'Vì trường học thiếu bác sĩ'], answer: 2,
          explain: '“An outbreak of disease could happen if clean water was not provided soon.”' },
        { q: 'Câu nói cuối của biên tập viên kỳ cựu cho thấy toà soạn coi trọng điều gì nhất?', options: ['Đưa tin nhanh hơn đối thủ', 'Sự chính xác của thông tin', 'Số lượng người xem', 'Những câu chuyện gây sốc'], answer: 1,
          explain: '“Our job is not to be first. Our job is to be right.” — đúng quan trọng hơn nhanh.' }
      ]
    }
  },

  'en-b2-3': {
    vocab: [
      { w: 'exaggerate', ipa: '/ɪɡˈzædʒəˌreɪt/', vi: 'phóng đại, nói quá', ex: 'He said he had caught a fish as big as a car, but I think he was exaggerating.', exVi: 'Anh ấy bảo đã câu được con cá to bằng chiếc ô tô, nhưng tôi nghĩ anh ấy nói quá.' },
      { w: 'confess', ipa: '/kənˈfɛs/', vi: 'thú nhận, thú tội', ex: 'She confessed that she had broken the vase.', exVi: 'Cô ấy thú nhận rằng mình đã làm vỡ cái bình.' },
      { w: 'assert', ipa: '/əˈsɜrt/', vi: 'khẳng định chắc chắn', ex: 'The manager asserted that the company was doing well.', exVi: 'Người quản lý khẳng định chắc chắn rằng công ty đang làm ăn tốt.' },
      { w: 'contradict', ipa: '/ˌkɑntrəˈdɪkt/', vi: 'nói ngược lại, mâu thuẫn với', ex: 'His story contradicts what he told us yesterday.', exVi: 'Câu chuyện của anh ta mâu thuẫn với những gì anh ta nói với chúng tôi hôm qua.' },
      { w: 'clarify', ipa: '/ˈklɛrəˌfaɪ/', vi: 'làm rõ, giải thích rõ', ex: 'The teacher asked whether we needed her to clarify anything.', exVi: 'Cô giáo hỏi chúng tôi có cần cô giải thích rõ thêm điều gì không.' },
      { w: 'accusation', ipa: '/ˌækjəˈzeɪʃən/', vi: 'lời buộc tội', ex: 'He denied the accusation that he had cheated in the exam.', exVi: 'Cậu ấy bác bỏ lời buộc tội rằng mình đã gian lận trong kỳ thi.' },
      { w: 'mumble', ipa: '/ˈmʌmbəl/', vi: 'lẩm bẩm, nói lí nhí', ex: 'He mumbled that he was sorry, so I could hardly hear him.', exVi: 'Anh ấy lí nhí nói xin lỗi nên tôi gần như không nghe thấy.' },
      { w: 'overhear', ipa: '/ˌoʊvərˈhɪr/', vi: 'tình cờ nghe được', ex: 'I overheard my boss saying that she was going to quit.', exVi: 'Tôi tình cờ nghe sếp nói rằng chị ấy sắp nghỉ việc.' },
      { w: 'quote', ipa: '/kwoʊt/', vi: 'trích dẫn; lời trích dẫn', ex: 'The newspaper quoted the minister as saying that prices would fall.', exVi: 'Tờ báo trích lời vị bộ trưởng nói rằng giá cả sẽ giảm.' },
      { w: 'misunderstand', ipa: '/ˌmɪsʌndərˈstænd/', vi: 'hiểu lầm, hiểu sai', ex: 'I think you misunderstood what I said.', exVi: 'Tôi nghĩ bạn đã hiểu lầm điều tôi nói.' }
    ],
    exercises: [
      { type: 'mc', q: '"I broke the window," he said. → He confessed that he ___ the window.', options: ['breaks', 'had broken', 'has broken', 'will break'], answer: 1,
        explain: 'Khi tường thuật, quá khứ đơn (broke) lùi thành quá khứ hoàn thành (had broken).' },
      { type: 'fill', q: 'Yesterday I ___ my neighbors saying that they were going to move. (overhear)', answer: ['overheard'], hint: 'V2 của overhear',
        explain: 'Overhear → overheard → overheard. Có yesterday nên dùng quá khứ đơn.' },
      { type: 'mc', q: 'To make something sound bigger or more important than it really is = to ___.', options: ['clarify', 'exaggerate', 'contradict', 'confess'], answer: 1,
        explain: 'Exaggerate = phóng đại, nói quá sự thật.' },
      { type: 'fill', q: '"Can you clarify the rules?" → She asked me ___ I could clarify the rules.', answer: ['if', 'whether'], hint: 'câu hỏi Yes/No tường thuật',
        explain: 'Câu hỏi Yes/No khi tường thuật dùng if/whether + chủ ngữ + động từ (không đảo ngữ).' },
      { type: 'mc', q: 'He denied the ___ that he had cheated in the exam.', options: ['accusation', 'quote', 'mumble', 'dilemma'], answer: 0,
        explain: 'Deny an accusation = bác bỏ lời buộc tội.' },
      { type: 'fill', q: '"I am telling the truth." → He asserted that he ___ telling the truth.', answer: ['was'], hint: 'lùi thì của am',
        explain: 'Hiện tại tiếp diễn (am telling) lùi thành quá khứ tiếp diễn (was telling).' },
      { type: 'order', vi: 'Cô ấy thú nhận rằng cô ấy đã quên sinh nhật tôi.', words: ['forgotten', 'that', 'She', 'birthday', 'had', 'confessed', 'my', 'she'],
        answer: 'She confessed that she had forgotten my birthday' },
      { type: 'order', vi: 'Anh ấy hỏi tôi tại sao tôi đã hiểu lầm anh ấy.', words: ['had', 'me', 'He', 'him', 'why', 'misunderstood', 'asked', 'I'],
        answer: 'He asked me why I had misunderstood him' }
    ],
    reading: {
      title: 'The Office Rumor',
      titleVi: 'Tin đồn ở văn phòng',
      text: [
        'Last month, something funny happened at the small marketing company where I work. On Monday morning, my colleague Hoa overheard our director talking on the phone. She told us later that he had said, quite clearly, that the company would be sold before the end of the year. By lunchtime, the whole office was worried.',
        'Of course, the story grew as it travelled. Tuan asserted that all of us would lose our jobs. Mai contradicted him and claimed that a foreign company had already bought the building. Someone even said that the director was moving to Australia. Everybody was exaggerating, but nobody had actually asked the director what was going on.',
        'Finally, on Wednesday, I decided to clarify the situation. I knocked on his door and asked him whether the company was really being sold. He looked confused at first, then he started laughing. He explained that he had been talking about his old car, not the company. He said he wanted to sell it before the end of the year because it used too much petrol.',
        'At the next meeting, Hoa confessed that she had only heard half of the conversation. She mumbled that she was sorry, and the director told her not to worry. He said that it was easy to misunderstand a phone call. However, he also asked us to check the facts before we repeated anything. Now, whenever someone starts a new rumor, we just quote his words: “Is it the company, or is it the car?”'
      ],
      vi: [
        'Tháng trước, có một chuyện buồn cười xảy ra ở công ty marketing nhỏ nơi tôi làm việc. Sáng thứ Hai, đồng nghiệp của tôi là Hoa tình cờ nghe giám đốc nói chuyện điện thoại. Sau đó chị kể với chúng tôi rằng ông ấy đã nói khá rõ là công ty sẽ bị bán trước cuối năm. Đến giờ ăn trưa, cả văn phòng đều lo lắng.',
        'Tất nhiên, câu chuyện càng truyền đi càng to ra. Tuấn khẳng định chắc chắn rằng tất cả chúng tôi sẽ mất việc. Mai cãi lại và nói rằng một công ty nước ngoài đã mua toà nhà rồi. Thậm chí có người còn nói giám đốc sắp chuyển sang Úc. Ai cũng nói quá lên, nhưng thật ra chưa ai hỏi giám đốc xem chuyện gì đang xảy ra.',
        'Cuối cùng, vào thứ Tư, tôi quyết định làm rõ mọi chuyện. Tôi gõ cửa phòng ông và hỏi có thật là công ty sắp bị bán không. Lúc đầu ông có vẻ bối rối, rồi ông bật cười. Ông giải thích rằng ông đang nói về chiếc xe ô tô cũ của mình chứ không phải công ty. Ông nói ông muốn bán nó trước cuối năm vì nó quá tốn xăng.',
        'Ở cuộc họp tiếp theo, Hoa thú nhận rằng chị chỉ nghe được một nửa cuộc nói chuyện. Chị lí nhí xin lỗi, và giám đốc bảo chị đừng lo. Ông nói rằng nghe điện thoại thì rất dễ hiểu lầm. Tuy vậy, ông cũng yêu cầu chúng tôi kiểm tra sự thật trước khi nhắc lại bất cứ điều gì. Giờ đây, mỗi khi có ai bắt đầu một tin đồn mới, chúng tôi chỉ cần trích lại câu của ông: “Là công ty, hay là cái xe?”'
      ],
      questions: [
        { q: 'Tin đồn trong văn phòng bắt đầu từ đâu?', options: ['Từ một bài báo', 'Từ việc Hoa tình cờ nghe giám đốc nói chuyện điện thoại', 'Từ một email của giám đốc', 'Từ một công ty nước ngoài'], answer: 1,
          explain: '“My colleague Hoa overheard our director talking on the phone.”' },
        { q: 'Thật ra giám đốc muốn bán cái gì?', options: ['Công ty', 'Toà nhà văn phòng', 'Chiếc ô tô cũ của ông', 'Căn nhà ở Úc'], answer: 2,
          explain: '“He had been talking about his old car, not the company.”' },
        { q: 'Sau sự việc, giám đốc yêu cầu nhân viên làm gì?', options: ['Không gọi điện thoại trong giờ làm', 'Kiểm tra sự thật trước khi nhắc lại điều gì', 'Viết thư xin lỗi Hoa', 'Chuẩn bị chuyển sang Úc'], answer: 1,
          explain: '“He also asked us to check the facts before we repeated anything.”' },
        { q: 'Bài học chính của câu chuyện là gì?', options: ['Không nên bán xe cũ', 'Tin đồn dễ lan rộng và bị thổi phồng nếu không ai kiểm tra sự thật', 'Giám đốc nên nói chuyện điện thoại trong phòng kín', 'Không nên tin đồng nghiệp'], answer: 1,
          explain: 'Một câu nghe được nửa vời bị mọi người phóng đại cho đến khi có người hỏi thẳng để làm rõ.' }
      ]
    }
  },

  'en-b2-4': {
    vocab: [
      { w: 'deforestation', ipa: '/diˌfɔrəˈsteɪʃən/', vi: 'nạn phá rừng', ex: 'Deforestation, which destroys the homes of many animals, is a serious problem.', exVi: 'Nạn phá rừng, thứ phá huỷ nơi sống của nhiều loài động vật, là một vấn đề nghiêm trọng.' },
      { w: 'drought', ipa: '/draʊt/', vi: 'hạn hán', ex: 'The Mekong Delta, where much of our rice is grown, suffered a terrible drought last year.', exVi: 'Đồng bằng sông Cửu Long, nơi trồng phần lớn lúa gạo của chúng ta, đã chịu một đợt hạn hán khủng khiếp năm ngoái.' },
      { w: 'toxic', ipa: '/ˈtɑksɪk/', vi: 'độc hại', ex: 'The factory that released toxic waste into the river has been closed.', exVi: 'Nhà máy xả chất thải độc hại ra sông đã bị đóng cửa.' },
      { w: 'carbon footprint', ipa: '/ˈkɑrbən ˈfʊtˌprɪnt/', vi: 'lượng khí carbon thải ra (dấu chân carbon)', ex: 'Flying less is one way to reduce your carbon footprint.', exVi: 'Đi máy bay ít hơn là một cách giảm lượng khí carbon bạn thải ra.' },
      { w: 'species', ipa: '/ˈspiʃiz/', vi: 'loài (động, thực vật)', ex: 'The saola is a species that lives only in Vietnam and Laos.', exVi: 'Sao la là loài chỉ sống ở Việt Nam và Lào.' },
      { w: 'contaminate', ipa: '/kənˈtæməˌneɪt/', vi: 'làm ô nhiễm, làm nhiễm bẩn', ex: 'Chemicals from the farms have contaminated the water that the villagers drink.', exVi: 'Hoá chất từ các trang trại đã làm nhiễm bẩn nguồn nước mà dân làng uống.' },
      { w: 'donation', ipa: '/doʊˈneɪʃən/', vi: 'khoản quyên góp, tiền ủng hộ', ex: 'The donations which we collected were sent to flood victims.', exVi: 'Những khoản quyên góp chúng tôi thu được đã được gửi tới nạn nhân lũ lụt.' },
      { w: 'welfare', ipa: '/ˈwɛlˌfɛr/', vi: 'phúc lợi, sự an sinh', ex: 'The charity works for the welfare of children whose parents are very poor.', exVi: 'Tổ chức từ thiện hoạt động vì phúc lợi của những đứa trẻ có cha mẹ rất nghèo.' },
      { w: 'refugee', ipa: '/ˌrɛfjuˈdʒi/', vi: 'người tị nạn', ex: 'The refugees who arrived last week now have a place to stay.', exVi: 'Những người tị nạn đến tuần trước giờ đã có chỗ ở.' },
      { w: 'urban', ipa: '/ˈɜrbən/', vi: 'thuộc đô thị, thành thị', ex: 'Urban areas, where most people now live, produce the most waste.', exVi: 'Các khu đô thị, nơi phần lớn mọi người đang sống, thải ra nhiều rác nhất.' }
    ],
    exercises: [
      { type: 'mc', q: 'The saola is a ___ that lives only in Vietnam and Laos.', options: ['species', 'donation', 'drought', 'welfare'], answer: 0,
        explain: 'Species = loài. Sao la là một loài động vật quý hiếm.' },
      { type: 'fill', q: 'The factory ___ released toxic waste into the river has been closed.', answer: ['that', 'which'], hint: 'đại từ quan hệ chỉ vật',
        explain: 'The factory là vật → dùng which hoặc that.' },
      { type: 'mc', q: "The Mekong Delta, ___ much of Vietnam's rice is grown, is suffering from drought.", options: ['which', 'who', 'where', 'whose'], answer: 2,
        explain: 'Thay cho nơi chốn (ở đó lúa được trồng) → dùng where.' },
      { type: 'fill', q: 'Flying less is a good way to reduce your carbon ___.', answer: ['footprint'], hint: 'dấu chân',
        explain: 'Carbon footprint = lượng khí carbon một người hay hoạt động thải ra.' },
      { type: 'mc', q: 'We should help the refugees ___ homes were destroyed by the war.', options: ['who', 'whose', 'which', 'where'], answer: 1,
        explain: 'Nhà CỦA những người tị nạn → dùng whose + danh từ.' },
      { type: 'fill', q: 'Chemicals from farms have ___ the water that the villagers drink. (contaminate)', answer: ['contaminated'], hint: 'V3',
        explain: 'Hiện tại hoàn thành: have + V3 (contaminated).' },
      { type: 'order', vi: 'Những khoản quyên góp mà chúng tôi thu được đã được gửi tới nạn nhân lũ lụt.', words: ['were', 'that', 'The', 'victims', 'we', 'sent', 'donations', 'flood', 'collected', 'to'],
        answer: 'The donations that we collected were sent to flood victims' },
      { type: 'order', vi: 'Nạn phá rừng, thứ đe doạ nhiều loài, phải bị ngăn chặn.', words: ['must', 'which', 'Deforestation,', 'stopped', 'many', 'threatens', 'be', 'species,'],
        answer: 'Deforestation, which threatens many species, must be stopped' }
    ],
    reading: {
      title: 'The River That Came Back',
      titleVi: 'Dòng sông hồi sinh',
      text: [
        'Mr. Sau, who is seventy years old, has lived all his life in a small village in the Mekong Delta. When he was a boy, the river that flows past his house was full of fish, and the forest where he played was home to many rare species of birds. “We were poor,” he says, “but nature gave us everything we needed.”',
        'Things began to change in the 1990s. Deforestation, which made room for new farms and roads, destroyed most of the forest. A factory that was built upstream started to release toxic chemicals, which contaminated the water. Then came the droughts. In 2016, the drought was so severe that salt water from the sea entered the rice fields, and many young people left for urban areas to find work.',
        'Today, however, the village is slowly recovering. A group of students whose parents grew up there started a project to plant trees along the river. With donations from local businesses, they also built a small station which tests the water every week. The factory was finally forced to clean up its waste.',
        'Mr. Sau believes that everyone, not only the government, is responsible for the welfare of the environment. He now teaches children how to recycle and how to reduce their carbon footprint. “Climate change creates refugees, not only in faraway countries but also here,” he says. “If we want our grandchildren to stay, we must give them a place worth staying in.”'
      ],
      vi: [
        'Ông Sáu, năm nay bảy mươi tuổi, đã sống cả đời ở một ngôi làng nhỏ thuộc đồng bằng sông Cửu Long. Hồi ông còn bé, con sông chảy qua nhà ông đầy cá, và khu rừng nơi ông chơi đùa là nhà của nhiều loài chim quý hiếm. “Hồi đó chúng tôi nghèo,” ông nói, “nhưng thiên nhiên cho chúng tôi mọi thứ cần thiết.”',
        'Mọi thứ bắt đầu thay đổi vào những năm 1990. Nạn phá rừng, để lấy chỗ cho các trang trại và con đường mới, đã phá huỷ phần lớn khu rừng. Một nhà máy xây ở thượng nguồn bắt đầu xả hoá chất độc hại, làm nhiễm bẩn nguồn nước. Rồi đến những đợt hạn hán. Năm 2016, hạn hán nghiêm trọng đến mức nước mặn từ biển tràn vào ruộng lúa, và nhiều người trẻ bỏ lên thành phố tìm việc.',
        'Tuy vậy, ngày nay ngôi làng đang dần hồi phục. Một nhóm sinh viên có cha mẹ lớn lên ở đây đã khởi động dự án trồng cây dọc bờ sông. Nhờ tiền quyên góp của các doanh nghiệp địa phương, họ còn xây một trạm nhỏ để kiểm tra nước mỗi tuần. Cuối cùng, nhà máy cũng bị buộc phải xử lý chất thải của mình.',
        'Ông Sáu tin rằng mọi người, chứ không chỉ chính phủ, đều có trách nhiệm với sự an lành của môi trường. Giờ ông dạy trẻ em cách tái chế và cách giảm lượng khí carbon thải ra. “Biến đổi khí hậu tạo ra người tị nạn, không chỉ ở những nước xa xôi mà ngay tại đây,” ông nói. “Nếu muốn con cháu ở lại, chúng ta phải cho chúng một nơi đáng để ở lại.”'
      ],
      questions: [
        { q: 'Ý chính của bài đọc là gì?', options: ['Cuộc sống ở thành phố tốt hơn ở nông thôn', 'Một ngôi làng từng bị tàn phá môi trường đang dần hồi phục nhờ cộng đồng', 'Cách trồng lúa ở đồng bằng sông Cửu Long', 'Lịch sử của một nhà máy hoá chất'], answer: 1,
          explain: 'Bài kể môi trường làng bị huỷ hoại ra sao và nay đang hồi phục nhờ sinh viên, doanh nghiệp và người dân.' },
        { q: 'Điều gì đã làm nhiễm bẩn nước sông?', options: ['Nước mặn từ biển', 'Rác của khách du lịch', 'Hoá chất độc hại từ một nhà máy ở thượng nguồn', 'Phân bón từ ruộng lúa'], answer: 2,
          explain: '“A factory that was built upstream started to release toxic chemicals, which contaminated the water.”' },
        { q: 'Nhóm sinh viên đã làm gì cho ngôi làng?', options: ['Xây một nhà máy mới', 'Trồng cây dọc bờ sông và xây trạm kiểm tra nước', 'Đưa cả làng lên thành phố', 'Bán đất cho doanh nghiệp'], answer: 1,
          explain: 'Họ trồng cây dọc sông và nhờ tiền quyên góp đã xây trạm kiểm tra nước hằng tuần.' },
        { q: 'Ông Sáu ngụ ý gì khi nói biến đổi khí hậu tạo ra người tị nạn “ngay tại đây”?', options: ['Có nhiều người nước ngoài đến sống ở làng ông', 'Người trẻ phải rời làng vì môi trường xuống cấp, giống như người tị nạn', 'Làng ông có một trại tị nạn', 'Ông muốn chuyển ra nước ngoài'], answer: 1,
          explain: 'Đoạn 2 cho biết vì hạn hán, nước mặn, nhiều người trẻ phải bỏ làng đi — họ giống như “người tị nạn khí hậu”.' }
      ]
    }
  },

  'en-b2-5': {
    vocab: [
      { w: 'browser', ipa: '/ˈbraʊzər/', vi: 'trình duyệt web', ex: 'I keep forgetting to close the tabs in my browser.', exVi: 'Tôi cứ quên đóng các tab trên trình duyệt.' },
      { w: 'upgrade', ipa: '/ʌpˈɡreɪd/', vi: 'nâng cấp; bản nâng cấp', ex: 'We decided to upgrade all the computers in the office.', exVi: 'Chúng tôi quyết định nâng cấp toàn bộ máy tính trong văn phòng.' },
      { w: 'cybercrime', ipa: '/ˈsaɪbərˌkraɪm/', vi: 'tội phạm mạng', ex: 'Cybercrime is growing because more and more people shop online.', exVi: 'Tội phạm mạng đang gia tăng vì ngày càng nhiều người mua sắm trực tuyến.' },
      { w: 'database', ipa: '/ˈdeɪtəˌbeɪs/', vi: 'cơ sở dữ liệu', ex: 'The hospital keeps all patient records in a database.', exVi: 'Bệnh viện lưu toàn bộ hồ sơ bệnh nhân trong một cơ sở dữ liệu.' },
      { w: 'hardware', ipa: '/ˈhɑrdˌwɛr/', vi: 'phần cứng (máy tính)', ex: 'This game needs better hardware to run smoothly.', exVi: 'Trò chơi này cần phần cứng mạnh hơn để chạy mượt.' },
      { w: 'broadband', ipa: '/ˈbrɔdˌbænd/', vi: 'internet băng thông rộng', ex: 'My grandparents are not used to having broadband at home yet.', exVi: 'Ông bà tôi vẫn chưa quen với việc có internet băng thông rộng ở nhà.' },
      { w: 'virtual reality', ipa: '/ˈvɜrtʃuəl riˈæləti/', vi: 'thực tế ảo', ex: 'I tried playing a game in virtual reality, and I could not stop smiling.', exVi: 'Tôi thử chơi một trò chơi thực tế ảo và không nhịn được cười.' },
      { w: 'antivirus', ipa: '/ˈæntiˌvaɪrəs/', vi: '(phần mềm) diệt virus', ex: 'Remember to install antivirus software on your new laptop.', exVi: 'Nhớ cài phần mềm diệt virus cho chiếc laptop mới nhé.' },
      { w: 'compatible', ipa: '/kəmˈpætəbəl/', vi: 'tương thích', ex: "This charger isn't compatible with my phone.", exVi: 'Cái sạc này không tương thích với điện thoại của tôi.' },
      { w: 'innovation', ipa: '/ˌɪnəˈveɪʃən/', vi: 'sự đổi mới, phát minh mới', ex: 'The smartphone was one of the biggest innovations of the 21st century.', exVi: 'Điện thoại thông minh là một trong những phát minh lớn nhất thế kỷ 21.' }
    ],
    exercises: [
      { type: 'mc', q: 'We decided ___ all the computers in the office.', options: ['upgrading', 'to upgrade', 'upgrade', 'upgraded'], answer: 1,
        explain: 'Decide + to V.' },
      { type: 'fill', q: 'I used to ___ a slow dial-up connection, but now I have broadband. (use)', answer: ['use'], hint: 'used to + ?',
        explain: 'Used to + V nguyên mẫu: thói quen/tình trạng trong quá khứ, nay không còn.' },
      { type: 'mc', q: 'Which word means the physical parts of a computer, such as the keyboard and the screen?', options: ['software', 'hardware', 'browser', 'database'], answer: 1,
        explain: 'Hardware = phần cứng, những bộ phận có thể chạm vào được.' },
      { type: 'fill', q: "My dad isn't used to ___ games in virtual reality. He feels dizzy. (play)", answer: ['playing'], hint: 'be used to + ?',
        explain: 'Be used to + V-ing = quen với việc gì.' },
      { type: 'mc', q: "This charger isn't ___ with my phone, so I can't use it.", options: ['compatible', 'innovative', 'virtual', 'toxic'], answer: 0,
        explain: 'Compatible with = tương thích với.' },
      { type: 'fill', q: "Don't forget ___ antivirus software on your new laptop. (install)", answer: ['to install'], hint: 'forget + ? (việc cần làm)',
        explain: 'Forget + to V = quên làm một việc cần làm; forget + V-ing = quên việc đã làm.' },
      { type: 'order', vi: 'Tội phạm mạng đang trở thành một vấn đề nghiêm trọng.', words: ['serious', 'is', 'Cybercrime', 'a', 'problem', 'becoming'],
        answer: 'Cybercrime is becoming a serious problem' },
      { type: 'order', vi: 'Tôi chưa quen dùng trình duyệt mới này.', words: ['used', 'this', 'I', 'browser', 'not', 'using', 'am', 'to', 'new'],
        answer: 'I am not used to using this new browser' }
    ],
    reading: {
      title: 'Grandma Goes Online',
      titleVi: 'Bà lên mạng',
      text: [
        'My grandmother, Ba, is seventy-eight, and until two years ago she had never touched a computer. She used to write letters by hand and wait weeks for an answer. When my parents suggested getting broadband at her house, she refused to listen. “I don’t need the internet,” she said. “I have a radio and a telephone.”',
        'Everything changed during the pandemic, when she could not visit her friends. I offered to teach her, and she agreed to try. At first, she found it difficult to use a mouse, and she kept closing the browser by mistake. We also had to upgrade her old laptop, because the hardware was too slow and many new apps were not compatible with it.',
        'Now she is completely used to living online. She enjoys watching cooking videos, and she has even started selling her homemade pickles through a small online shop. I built a simple database to keep track of her customers. Last month, I let her try virtual reality at my university. She screamed at first, then she refused to take the headset off!',
        'Of course, there are risks. Older people are often targets of cybercrime, so I made sure to install antivirus software and taught her never to share her passwords. Once, a stranger called and asked her to confirm her bank details. She hung up immediately and called me. For her, the internet is not just another innovation. It is a window to a world she thought she had lost.'
      ],
      vi: [
        'Bà tôi, bà Ba, năm nay bảy mươi tám tuổi, và cho đến hai năm trước bà chưa từng chạm vào máy tính. Bà từng viết thư tay và chờ cả mấy tuần mới có thư hồi âm. Khi bố mẹ tôi gợi ý lắp internet băng thông rộng ở nhà bà, bà nhất quyết không nghe. “Bà không cần internet,” bà nói. “Bà có đài với điện thoại rồi.”',
        'Mọi thứ thay đổi trong đại dịch, khi bà không thể đi thăm bạn bè. Tôi đề nghị dạy bà và bà đồng ý thử. Lúc đầu, bà thấy dùng chuột rất khó, và cứ lỡ tay đóng trình duyệt. Chúng tôi còn phải nâng cấp chiếc laptop cũ của bà, vì phần cứng quá chậm và nhiều ứng dụng mới không tương thích với nó.',
        'Giờ đây bà đã hoàn toàn quen với cuộc sống trên mạng. Bà thích xem video nấu ăn, và thậm chí đã bắt đầu bán dưa muối nhà làm qua một cửa hàng trực tuyến nhỏ. Tôi lập một cơ sở dữ liệu đơn giản để theo dõi khách hàng của bà. Tháng trước, tôi cho bà thử thực tế ảo ở trường đại học của tôi. Lúc đầu bà hét lên, rồi sau đó nhất quyết không chịu tháo kính ra!',
        'Tất nhiên là có rủi ro. Người lớn tuổi thường là mục tiêu của tội phạm mạng, nên tôi đã cài phần mềm diệt virus cẩn thận và dạy bà không bao giờ chia sẻ mật khẩu. Có lần, một người lạ gọi đến và yêu cầu bà xác nhận thông tin ngân hàng. Bà cúp máy ngay và gọi cho tôi. Với bà, internet không chỉ là một phát minh mới. Đó là cánh cửa mở ra thế giới mà bà tưởng mình đã đánh mất.'
      ],
      questions: [
        { q: 'Trước đây bà Ba thường liên lạc với người khác bằng cách nào?', options: ['Viết thư tay và chờ hồi âm', 'Gửi email', 'Dùng mạng xã hội', 'Gọi video'], answer: 0,
          explain: '“She used to write letters by hand and wait weeks for an answer.”' },
        { q: 'Vì sao phải nâng cấp chiếc laptop của bà?', options: ['Vì máy bị nhiễm virus', 'Vì phần cứng quá chậm và nhiều ứng dụng mới không tương thích', 'Vì bà muốn chơi thực tế ảo', 'Vì màn hình bị hỏng'], answer: 1,
          explain: '“The hardware was too slow and many new apps were not compatible with it.”' },
        { q: 'Bà đã làm gì khi có người lạ gọi đến hỏi thông tin ngân hàng?', options: ['Cung cấp thông tin cho họ', 'Cúp máy ngay và gọi cho cháu', 'Báo cảnh sát', 'Tự cài phần mềm diệt virus'], answer: 1,
          explain: '“She hung up immediately and called me.”' },
        { q: 'Câu cuối bài (“a window to a world she thought she had lost”) cho thấy điều gì?', options: ['Bà muốn mua một cái cửa sổ mới', 'Internet giúp bà kết nối lại với cuộc sống và bạn bè mà bà tưởng đã mất', 'Bà vẫn không thích công nghệ', 'Bà sắp đi du lịch nước ngoài'], answer: 1,
          explain: 'Trong đại dịch bà bị cách ly khỏi bạn bè; internet giúp bà kết nối, học hỏi và thậm chí kinh doanh trở lại.' }
      ]
    }
  },

  'en-b2-6': {
    vocab: [
      { w: 'correspondence', ipa: '/ˌkɔrəˈspɑndəns/', vi: 'thư từ trao đổi', ex: 'Please keep a copy of all correspondence with the client.', exVi: 'Vui lòng lưu bản sao toàn bộ thư từ trao đổi với khách hàng.' },
      { w: 'applicant', ipa: '/ˈæplɪkənt/', vi: 'người nộp đơn, ứng viên', ex: 'All applicants will be contacted by the end of the week.', exVi: 'Tất cả ứng viên sẽ được liên hệ trước cuối tuần.' },
      { w: 'postpone', ipa: '/poʊstˈpoʊn/', vi: 'hoãn lại', ex: 'Unfortunately, the meeting has been postponed until next Tuesday.', exVi: 'Rất tiếc, cuộc họp đã được hoãn đến thứ Ba tuần sau.' },
      { w: 'feedback', ipa: '/ˈfidˌbæk/', vi: 'ý kiến phản hồi, góp ý', ex: 'We would appreciate any feedback on our new service.', exVi: 'Chúng tôi rất trân trọng mọi ý kiến phản hồi về dịch vụ mới của mình.' },
      { w: 'client', ipa: '/ˈklaɪənt/', vi: 'khách hàng (sử dụng dịch vụ)', ex: 'I am pleased to inform you that our client has accepted the offer.', exVi: 'Tôi vui mừng thông báo rằng khách hàng của chúng tôi đã chấp nhận đề nghị.' },
      { w: 'promptly', ipa: '/ˈprɑmptli/', vi: 'nhanh chóng, kịp thời', ex: 'Thank you for replying so promptly.', exVi: 'Cảm ơn anh/chị đã phản hồi nhanh chóng như vậy.' },
      { w: 'consult', ipa: '/kənˈsʌlt/', vi: 'hỏi ý kiến, tham khảo', ex: 'Please consult your manager before booking any business trips.', exVi: 'Vui lòng hỏi ý kiến quản lý trước khi đặt bất kỳ chuyến công tác nào.' },
      { w: 'whereas', ipa: '/wɛrˈæz/', vi: 'trong khi (đối lập)', ex: 'The first applicant has a lot of experience, whereas the second one is still a student.', exVi: 'Ứng viên thứ nhất có nhiều kinh nghiệm, trong khi người thứ hai vẫn còn là sinh viên.' },
      { w: 'accordingly', ipa: '/əˈkɔrdɪŋli/', vi: 'do đó; cho phù hợp', ex: 'The cost of materials has risen; accordingly, our prices will increase from May.', exVi: 'Giá nguyên liệu đã tăng; do đó, giá của chúng tôi sẽ tăng từ tháng Năm.' },
      { w: 'additionally', ipa: '/əˈdɪʃənəli/', vi: 'ngoài ra, thêm vào đó', ex: 'Additionally, all staff must attend a short training session.', exVi: 'Ngoài ra, toàn bộ nhân viên phải tham dự một buổi đào tạo ngắn.' }
    ],
    exercises: [
      { type: 'mc', q: 'The first applicant has five years of experience, ___ the second has none.', options: ['whereas', 'therefore', 'furthermore', 'accordingly'], answer: 0,
        explain: 'Hai vế đối lập nhau → dùng whereas (trong khi).' },
      { type: 'fill', q: 'Due to the storm, the conference has been ___ until next month. (postpone)', answer: ['postponed'], hint: 'V3',
        explain: 'Bị động hiện tại hoàn thành: has been + V3 (postponed).' },
      { type: 'mc', q: 'Which sentence is the most formal way to thank someone for a quick reply?', options: ['Thanks for getting back so fast!', 'Thank you for replying so promptly.', 'Cool, you answered quickly.', 'Wow, that was quick!'], answer: 1,
        explain: 'Email trang trọng dùng câu đầy đủ, lịch sự: Thank you for replying so promptly.' },
      { type: 'fill', q: 'Our costs have increased. ___, prices will rise from May.', answer: ['Accordingly', 'Therefore', 'Consequently', 'Thus', 'Hence', 'As a result'], hint: 'do đó (trang trọng)',
        explain: 'Accordingly / Therefore / Consequently / As a result = do đó, chỉ kết quả; đứng đầu câu và có dấu phẩy sau.' },
      { type: 'mc', q: 'We would appreciate any ___ on our new website.', options: ['feedback', 'applicant', 'client', 'correspondence'], answer: 0,
        explain: 'Feedback on something = ý kiến phản hồi về điều gì.' },
      { type: 'fill', q: 'Please ___ your manager before booking any business trips.', answer: ['consult'], hint: 'hỏi ý kiến',
        explain: 'Consult somebody = hỏi ý kiến ai (trang trọng hơn ask).' },
      { type: 'order', vi: 'Ngoài ra, tôi đã đính kèm một bản sao hợp đồng.', words: ['a', 'have', 'Additionally,', 'contract', 'attached', 'of', 'I', 'the', 'copy'],
        answer: 'Additionally, I have attached a copy of the contract' },
      { type: 'order', vi: 'Chúng tôi sẽ nhanh chóng liên hệ với tất cả ứng viên.', words: ['all', 'will', 'promptly', 'We', 'applicants', 'contact'],
        answer: 'We will promptly contact all applicants', alt: ['We will contact all applicants promptly'] }
    ],
    reading: {
      title: 'Postponement of the Product Launch',
      titleVi: 'Thông báo hoãn buổi ra mắt sản phẩm',
      text: [
        'Dear Ms. Nguyen, I am writing regarding the product launch event which was scheduled for 15 March at our Ho Chi Minh City office. Thank you for replying so promptly to our earlier invitation and for confirming that six members of your team would attend. We truly appreciate your interest in our new software.',
        'Unfortunately, I must inform you that the event has been postponed until 5 April. Although we had planned everything carefully, our engineers discovered a serious problem with the new version last week. We have consulted several technical experts, and they have advised us not to launch the product until the problem has been fully solved. We apologize for any inconvenience this may cause your team.',
        'We understand that many of our clients have already made travel arrangements. Accordingly, we will cover the cost of changing any train or flight tickets that were booked for the original date. Please send the receipts to our office, and the money will be returned within ten working days. Additionally, all guests will receive a free three-month upgrade to our premium service.',
        'Furthermore, we would greatly appreciate your feedback on the attached program. The morning session will focus on the main features, whereas the afternoon session will give your staff a chance to try the software themselves. Copies of our previous correspondence are also attached for your reference. If you have any questions, please do not hesitate to contact me. I look forward to seeing you in April. Yours sincerely, Tran Minh Quan, Project Manager'
      ],
      vi: [
        'Kính gửi chị Nguyễn, tôi viết thư này liên quan đến sự kiện ra mắt sản phẩm dự kiến tổ chức ngày 15 tháng 3 tại văn phòng của chúng tôi ở Thành phố Hồ Chí Minh. Cảm ơn chị đã phản hồi nhanh chóng thư mời trước đó và xác nhận sáu thành viên trong nhóm của chị sẽ tham dự. Chúng tôi thật sự trân trọng sự quan tâm của chị đối với phần mềm mới của chúng tôi.',
        'Rất tiếc, tôi phải thông báo rằng sự kiện đã được hoãn đến ngày 5 tháng 4. Mặc dù chúng tôi đã lên kế hoạch kỹ lưỡng, tuần trước các kỹ sư phát hiện một lỗi nghiêm trọng ở phiên bản mới. Chúng tôi đã tham khảo ý kiến của một số chuyên gia kỹ thuật, và họ khuyên chúng tôi không nên ra mắt sản phẩm cho đến khi lỗi được khắc phục hoàn toàn. Chúng tôi xin lỗi vì mọi bất tiện điều này có thể gây ra cho nhóm của chị.',
        'Chúng tôi hiểu rằng nhiều khách hàng đã sắp xếp việc đi lại. Do đó, chúng tôi sẽ chi trả chi phí đổi mọi vé tàu hoặc vé máy bay đã đặt cho ngày cũ. Vui lòng gửi hoá đơn đến văn phòng chúng tôi, và tiền sẽ được hoàn lại trong vòng mười ngày làm việc. Ngoài ra, tất cả khách mời sẽ được nâng cấp miễn phí ba tháng lên gói dịch vụ cao cấp.',
        'Hơn nữa, chúng tôi rất mong nhận được góp ý của chị về chương trình đính kèm. Phiên buổi sáng sẽ tập trung vào các tính năng chính, trong khi phiên buổi chiều sẽ cho nhân viên của chị cơ hội tự dùng thử phần mềm. Bản sao các thư từ trao đổi trước đây cũng được đính kèm để chị tiện tham khảo. Nếu có bất kỳ câu hỏi nào, xin chị đừng ngần ngại liên hệ với tôi. Tôi rất mong được gặp chị vào tháng Tư. Trân trọng, Trần Minh Quân, Quản lý dự án'
      ],
      questions: [
        { q: 'Mục đích chính của email là gì?', options: ['Mời khách hàng mua phần mềm mới', 'Thông báo hoãn sự kiện ra mắt sản phẩm và các hỗ trợ kèm theo', 'Phàn nàn về dịch vụ của khách hàng', 'Tuyển thêm kỹ sư phần mềm'], answer: 1,
          explain: 'Email báo sự kiện bị hoãn đến 5/4, giải thích lý do và nêu các khoản hỗ trợ cho khách.' },
        { q: 'Vì sao sự kiện bị hoãn?', options: ['Vì thời tiết xấu', 'Vì khách hàng không thể đến', 'Vì các kỹ sư phát hiện lỗi nghiêm trọng ở phiên bản mới', 'Vì văn phòng đang sửa chữa'], answer: 2,
          explain: '“Our engineers discovered a serious problem with the new version last week.”' },
        { q: 'Công ty sẽ làm gì cho những khách đã đặt vé tàu, vé máy bay?', options: ['Không hỗ trợ gì', 'Tặng vé máy bay miễn phí cho chuyến sau', 'Chi trả phí đổi vé và hoàn tiền trong mười ngày làm việc', 'Đặt giúp khách khách sạn mới'], answer: 2,
          explain: '“We will cover the cost of changing any train or flight tickets… the money will be returned within ten working days.”' },
        { q: 'Từ giọng văn của email, có thể suy ra người viết muốn điều gì?', options: ['Chấm dứt hợp tác với khách hàng', 'Giữ mối quan hệ tốt với khách hàng dù có sự cố', 'Đổ lỗi cho các kỹ sư', 'Tăng giá phần mềm'], answer: 1,
          explain: 'Người viết cảm ơn, xin lỗi, chi trả chi phí và tặng thêm ưu đãi — tất cả nhằm giữ thiện cảm của khách hàng.' }
      ]
    }
  }
};
