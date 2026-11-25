// Bài mới chèn vào lộ trình tiếng Anh B1 (xem cuối SCHEMA.md)
export default [
  // ───────────────────────── sau B1-2: học tập; hiện tại hoàn thành tiếp diễn ─────────────────────────
  {
    after: 'en-b1-2',
    unit: {
      id: 'en-b1-2b',
      icon: '🎓',
      title: 'Học tập & thi cử',
      goal: 'Nói về việc học, thi cử, bằng cấp; kể việc mình đã và đang làm liên tục từ trước đến nay.',
      vocab: [
        { w: 'subject', ipa: '/ˈsʌbdʒɪkt/', vi: 'môn học', ex: 'Math has always been my favorite subject.', exVi: 'Toán luôn là môn học tôi thích nhất.' },
        { w: 'exam', ipa: '/ɪɡˈzæm/', vi: 'kỳ thi, bài thi', ex: "I've been preparing for this exam for months.", exVi: 'Tôi đã chuẩn bị cho kỳ thi này hàng tháng trời.' },
        { w: 'grade', ipa: '/ɡreɪd/', vi: 'điểm (số)', ex: 'She got the highest grade in the class.', exVi: 'Cô ấy được điểm cao nhất lớp.' },
        { w: 'course', ipa: '/kɔrs/', vi: 'khoá học', ex: "I've been taking an online English course since January.", exVi: 'Tôi đã theo học một khoá tiếng Anh trực tuyến từ tháng Một.' },
        { w: 'degree', ipa: '/dɪˈɡri/', vi: 'bằng (đại học)', ex: 'She has a degree in economics.', exVi: 'Cô ấy có bằng đại học ngành kinh tế.' },
        { w: 'university', ipa: '/ˌjunɪˈvɜrsəti/', vi: 'trường đại học', ex: 'He has been studying at Hanoi University for two years.', exVi: 'Anh ấy đã học ở Đại học Hà Nội được hai năm.' },
        { w: 'lecture', ipa: '/ˈlɛktʃər/', vi: 'bài giảng (ở đại học)', ex: 'Our first lecture starts at 7:30 a.m.', exVi: 'Bài giảng đầu tiên của chúng tôi bắt đầu lúc 7 giờ 30 sáng.' },
        { w: 'scholarship', ipa: '/ˈskɑlərˌʃɪp/', vi: 'học bổng', ex: 'She won a scholarship to study in Australia.', exVi: 'Cô ấy giành được học bổng du học Úc.' },
        { w: 'graduate', ipa: '/ˈɡrædʒuˌeɪt/', vi: 'tốt nghiệp', ex: 'He graduated from university last year.', exVi: 'Anh ấy tốt nghiệp đại học năm ngoái.' },
        { w: 'revise', ipa: '/rɪˈvaɪz/', vi: 'ôn bài, ôn tập', ex: "I've been revising all day, and I'm so tired.", exVi: 'Tôi ôn bài cả ngày nay và mệt quá rồi.' },
        { w: 'assignment', ipa: '/əˈsaɪnmənt/', vi: 'bài tập (được giao), bài tiểu luận', ex: 'The assignment is due on Friday.', exVi: 'Hạn nộp bài tập là thứ Sáu.' },
        { w: 'semester', ipa: '/səˈmɛstər/', vi: 'học kỳ', ex: 'The new semester starts in September.', exVi: 'Học kỳ mới bắt đầu vào tháng Chín.' },
        { w: 'pass', ipa: '/pæs/', vi: 'thi đỗ, vượt qua (kỳ thi)', ex: 'She studied hard and passed all her exams.', exVi: 'Cô ấy học chăm và đỗ tất cả các kỳ thi.' },
        { w: 'fail', ipa: '/feɪl/', vi: 'thi trượt; thất bại', ex: 'He failed his driving test twice.', exVi: 'Anh ấy thi trượt bằng lái xe hai lần.' },
        { w: 'attend', ipa: '/əˈtɛnd/', vi: 'tham dự, đi học (đều đặn)', ex: 'Students have to attend at least 80% of the classes.', exVi: 'Sinh viên phải đi học ít nhất 80% số buổi.' },
        { w: 'essay', ipa: '/ˈɛseɪ/', vi: 'bài luận', ex: "I've been writing this essay since nine o'clock.", exVi: 'Tôi đã viết bài luận này từ lúc chín giờ.' },
        { w: 'knowledge', ipa: '/ˈnɑlɪdʒ/', vi: 'kiến thức', ex: 'Reading is a great way to improve your knowledge.', exVi: 'Đọc sách là cách tuyệt vời để nâng cao kiến thức.' },
        { w: 'skill', ipa: '/skɪl/', vi: 'kỹ năng', ex: 'Teamwork is an important skill at work.', exVi: 'Làm việc nhóm là một kỹ năng quan trọng trong công việc.' },
        { w: 'tutor', ipa: '/ˈtutər/', vi: 'gia sư', ex: 'My tutor helps me with math twice a week.', exVi: 'Gia sư giúp tôi học toán hai buổi một tuần.' },
        { w: 'certificate', ipa: '/sərˈtɪfɪkət/', vi: 'chứng chỉ, giấy chứng nhận', ex: 'You get a certificate at the end of the course.', exVi: 'Cuối khoá học bạn sẽ nhận được chứng chỉ.' }
      ],
      grammar: {
        title: 'Thì hiện tại hoàn thành tiếp diễn: have / has been + V-ing',
        explain: [
          'Dùng cho việc bắt đầu trong quá khứ, kéo dài LIÊN TỤC đến hiện tại (và có thể vẫn đang tiếp diễn), nhấn mạnh quá trình và khoảng thời gian: I have been studying English for three years. She has been revising since 7 a.m. Hay đi với for, since, all day, all morning, recently, How long…?',
          'Cũng dùng khi ta thấy kết quả ở hiện tại của một hoạt động vừa kéo dài: You look tired. Have you been studying all night? Her eyes are red because she has been crying.',
          'So với hiện tại hoàn thành (have + V3): hiện tại hoàn thành nhấn mạnh KẾT QUẢ, số lượng đã xong (I have written three essays this week); hiện tại hoàn thành tiếp diễn nhấn mạnh QUÁ TRÌNH (I have been writing essays all week). Động từ chỉ trạng thái (know, like, believe, have = sở hữu) không dùng dạng tiếp diễn: I have known her for ten years.',
          'Phủ định: haven\'t / hasn\'t been + V-ing. Câu hỏi: Have / Has + S + been + V-ing? Ví dụ: How long have you been learning English? — For five years. / Since I was ten.'
        ],
        table: [
          ['', 'Cấu trúc', 'Ví dụ'],
          ['Khẳng định', 'S + have / has been + V-ing', 'She has been studying for two hours.'],
          ['Phủ định', "S + haven't / hasn't been + V-ing", "I haven't been sleeping well."],
          ['Câu hỏi', 'Have / Has + S + been + V-ing?', 'How long have you been waiting?'],
          ['HTHT (kết quả)', 'have / has + V3', "I've written two essays."],
          ['HTHTTD (quá trình)', 'have / has been + V-ing', "I've been writing all day."]
        ],
        examples: [
          { t: "I've been learning English for five years.", vi: 'Tôi đã học tiếng Anh được năm năm (và vẫn đang học).' },
          { t: "She has been revising since seven o'clock this morning.", vi: 'Cô ấy đã ôn bài từ bảy giờ sáng nay.' },
          { t: 'How long have you been studying at this university?', vi: 'Bạn học ở trường đại học này bao lâu rồi?' },
          { t: "You look tired. — Yes, I've been writing my essay all night.", vi: 'Trông bạn mệt quá. — Ừ, mình viết bài luận cả đêm.' },
          { t: 'He has taken three exams this week, and he has been studying non-stop.', vi: 'Tuần này anh ấy đã thi ba môn, và anh ấy học không ngừng nghỉ.' }
        ],
        tip: 'Người Việt hay dùng hiện tại đơn hoặc hiện tại tiếp diễn cho việc kéo dài đến nay: "I study English for five years" hay "I am studying English since 2020" đều sai → "I have been studying English for five years / since 2020". Nhớ: for + khoảng thời gian (for two hours), since + mốc thời gian (since Monday, since 2020); không nói "since two hours".'
      },
      dialogue: [
        { s: 'Huy', t: 'Hi, Lan. You look exhausted. What have you been doing?', vi: 'Chào Lan. Trông bạn kiệt sức quá. Bạn đang làm gì thế?' },
        { s: 'Lan', t: "I've been revising for the history exam since six this morning.", vi: 'Mình ôn thi môn lịch sử từ sáu giờ sáng nay.' },
        { s: 'Huy', t: 'Since six? How many chapters have you finished?', vi: 'Từ sáu giờ á? Bạn ôn xong mấy chương rồi?' },
        { s: 'Lan', t: "Only three. I've been reading the same chapter for two hours, and I still don't understand it.", vi: 'Mới được ba. Mình đọc đi đọc lại một chương suốt hai tiếng mà vẫn chưa hiểu.' },
        { s: 'Huy', t: 'Have you asked your tutor for help?', vi: 'Bạn đã nhờ gia sư giúp chưa?' },
        { s: 'Lan', t: "I don't have one. I've been studying alone all semester.", vi: 'Mình không có gia sư. Cả học kỳ nay mình tự học một mình.' },
        { s: 'Huy', t: "I've been attending a study group at the library. Would you like to join us? We meet every evening at seven.", vi: 'Mình đang tham gia một nhóm học ở thư viện. Bạn có muốn vào nhóm không? Bọn mình gặp nhau lúc bảy giờ tối hằng ngày.' },
        { s: 'Lan', t: "That sounds great. Do you think it'll help me pass?", vi: 'Nghe hay đấy. Bạn nghĩ nó sẽ giúp mình thi đỗ chứ?' },
        { s: 'Huy', t: 'Definitely. I failed math last semester, but since I joined the group, my grades have improved a lot.', vi: 'Chắc chắn rồi. Học kỳ trước mình trượt môn toán, nhưng từ khi vào nhóm, điểm của mình đã tiến bộ nhiều.' },
        { s: 'Lan', t: "Then I'll see you there tonight!", vi: 'Vậy tối nay gặp bạn ở đó nhé!' }
      ],
      exercises: [
        { type: 'mc', q: 'I ___ English for five years, and I still love it.', options: ['study', 'am studying', 'have been studying', 'studied'], answer: 2,
          explain: 'Việc bắt đầu từ quá khứ và kéo dài đến nay (for five years) → have been studying.' },
        { type: 'mc', q: "She has been revising ___ seven o'clock this morning.", options: ['for', 'since', 'from', 'during'], answer: 1,
          explain: "Seven o'clock là mốc thời gian → since." },
        { type: 'fill', q: 'How long have you ___ studying at this university?', answer: ['been'], hint: 'have + ___ + V-ing',
          explain: 'Câu hỏi hiện tại hoàn thành tiếp diễn: How long have you been + V-ing?' },
        { type: 'fill', q: 'They have been waiting ___ two hours.', answer: ['for'], hint: 'for hay since?',
          explain: 'Two hours là khoảng thời gian → for.' },
        { type: 'mc', q: 'You look tired. What ___?', options: ['have you been doing', 'do you do', 'did you do', 'are you'], answer: 0,
          explain: 'Hỏi về hoạt động kéo dài vừa qua để lại kết quả (trông mệt) → have you been doing.' },
        { type: 'mc', q: 'I ___ her since we were at primary school.', options: ['have been knowing', 'have known', 'am knowing', 'know'], answer: 1,
          explain: 'know là động từ chỉ trạng thái, không dùng dạng tiếp diễn → have known.' },
        { type: 'fill', q: "He ___ been sleeping well recently. He's worried about his exams. (phủ định)", answer: ["hasn't", 'has not', 'hasn’t'], hint: 'he + ? + been',
          explain: "Phủ định với he: hasn't been + V-ing." },
        { type: 'mc', q: "I have ___ three essays this week. I'm so happy!", options: ['been writing', 'write', 'written', 'writing'], answer: 2,
          explain: 'Nói số lượng đã hoàn thành (three essays) → hiện tại hoàn thành: have written.' },
        { type: 'mc', q: "She got a ___ to study in Japan, so she doesn't have to pay for anything.", options: ['certificate', 'semester', 'lecture', 'scholarship'], answer: 3,
          explain: 'Học bổng (scholarship) giúp người học không phải trả tiền.' },
        { type: 'fill', q: 'She studied hard, so she ___ all her exams.', answer: ['passed'], hint: 'thi đỗ (quá khứ)',
          explain: 'pass an exam = thi đỗ; quá khứ: passed.' },
        { type: 'mc', q: 'My ___ comes to my house twice a week to help me with math.', options: ['tutor', 'lecture', 'subject', 'degree'], answer: 0,
          explain: 'Gia sư (tutor) đến nhà dạy kèm.' },
        { type: 'fill', q: 'He ___ from university in 2022 and found a job soon after. (graduate)', answer: ['graduated'], hint: 'quá khứ đơn',
          explain: 'Có mốc 2022 đã kết thúc → quá khứ đơn: graduated.' },
        { type: 'mc', q: '"How long have you been learning English?" — "___"', options: ['Two hours ago.', 'Yes, I have.', 'Since I was ten.', 'In 2015.'], answer: 2,
          explain: 'How long…? hỏi khoảng thời gian → Since I was ten (từ năm mười tuổi).' },
        { type: 'order', vi: 'Tôi đã ôn bài suốt cả buổi sáng.', words: ['been', 'morning', 'I', 'revising', 'all', 'have'], answer: 'I have been revising all morning' },
        { type: 'order', vi: 'Bạn học ở đây bao lâu rồi?', words: ['long', 'been', 'How', 'you', 'have', 'studying', 'here?'], answer: 'How long have you been studying here?' },
        { type: 'order', vi: 'Cô ấy đã viết bài luận từ lúc chín giờ.', words: ['essay', 'She', 'been', 'nine', 'has', 'since', 'writing', 'her'], answer: 'She has been writing her essay since nine' }
      ],
      reading: {
        title: 'Back to School at Forty-Two',
        titleVi: 'Đi học lại ở tuổi bốn mươi hai',
        text: [
          'Mr. Phong is forty-two years old, and for the past two years he has been studying for a degree in computer science. He has been working as a taxi driver since he was twenty, but he has always dreamed of going to university. When his daughter started her first semester, he decided it was his turn, too.',
          'His life has been very busy since then. He drives his taxi during the day and attends lectures in the evening. He has been sleeping only five or six hours a night, and he often revises for exams at the weekend. "The hardest subject is math," he says. "I failed my first math exam, so I hired a tutor. Now my grades are much better."',
          'His classmates are much younger than him, but they have been very friendly. They often ask him for advice about life, and he asks them for help with new computer skills. Last month, he won a small scholarship for older students.',
          '"Knowledge has no age limit," Mr. Phong says. "I\'ve been learning so much. When I graduate next year, I want to start my own app company."'
        ],
        vi: [
          'Ông Phong bốn mươi hai tuổi, và hai năm qua ông đang theo học lấy bằng đại học ngành khoa học máy tính. Ông làm tài xế taxi từ năm hai mươi tuổi, nhưng ông luôn mơ được vào đại học. Khi con gái ông bắt đầu học kỳ đầu tiên, ông quyết định đã đến lượt mình.',
          'Từ đó cuộc sống của ông rất bận rộn. Ban ngày ông chạy taxi, buổi tối ông lên giảng đường. Gần đây mỗi đêm ông chỉ ngủ năm, sáu tiếng, và thường ôn thi vào cuối tuần. "Môn khó nhất là toán," ông nói. "Tôi trượt bài thi toán đầu tiên, nên tôi đã thuê gia sư. Giờ điểm của tôi tốt hơn nhiều rồi."',
          'Các bạn cùng lớp trẻ hơn ông rất nhiều, nhưng họ luôn rất thân thiện. Họ hay hỏi ông lời khuyên về cuộc sống, còn ông nhờ họ giúp về những kỹ năng máy tính mới. Tháng trước, ông giành được một suất học bổng nhỏ dành cho sinh viên lớn tuổi.',
          '"Học hành không có giới hạn tuổi tác," ông Phong nói. "Tôi đã học được rất nhiều điều. Khi tốt nghiệp vào năm sau, tôi muốn thành lập công ty ứng dụng của riêng mình."'
        ],
        questions: [
          { q: 'Ông Phong làm tài xế taxi từ khi nào?', options: ['Từ hai năm trước', 'Từ năm hai mươi tuổi', 'Từ khi con gái vào đại học', 'Từ năm bốn mươi hai tuổi'], answer: 1,
            explain: '"He has been working as a taxi driver since he was twenty."' },
          { q: 'Điều gì khiến ông quyết định đi học đại học?', options: ['Con gái ông bắt đầu học kỳ đầu tiên ở đại học', 'Ông bị mất việc', 'Ông giành được học bổng', 'Bạn bè khuyên ông'], answer: 0,
            explain: '"When his daughter started her first semester, he decided it was his turn, too."' },
          { q: 'Ông Phong đã làm gì sau khi trượt bài thi toán đầu tiên?', options: ['Bỏ học', 'Nhờ con gái dạy', 'Thuê gia sư', 'Đổi sang ngành khác'], answer: 2,
            explain: '"I failed my first math exam, so I hired a tutor."' },
          { q: 'Câu "Knowledge has no age limit" có nghĩa là gì?', options: ['Người lớn tuổi học chậm hơn', 'Kiến thức máy tính rất khó', 'Chỉ người trẻ nên học đại học', 'Học hành không có giới hạn tuổi tác'], answer: 3,
            explain: 'Ông Phong muốn nói ở tuổi nào cũng có thể học.' }
        ]
      }
    }
  },

  // ───────────────────────── sau B1-3: tiền & ngân hàng; câu hỏi gián tiếp, gọi điện ─────────────────────────
  {
    after: 'en-b1-3',
    unit: {
      id: 'en-b1-3b',
      icon: '💳',
      title: 'Tiền & ngân hàng',
      goal: 'Nói về tài khoản, vay mượn, chi tiêu; gọi điện cho ngân hàng và hỏi thông tin lịch sự bằng câu hỏi gián tiếp.',
      vocab: [
        { w: 'bank account', ipa: '/ˈbæŋk əˌkaʊnt/', vi: 'tài khoản ngân hàng', ex: "I'd like to open a bank account.", exVi: 'Tôi muốn mở một tài khoản ngân hàng.' },
        { w: 'ATM', ipa: '/ˌeɪ ti ˈɛm/', vi: 'cây rút tiền (ATM)', ex: 'Could you tell me where the nearest ATM is?', exVi: 'Bạn có thể cho tôi biết cây ATM gần nhất ở đâu không?' },
        { w: 'balance', ipa: '/ˈbæləns/', vi: 'số dư (tài khoản)', ex: 'I check my balance on the app every week.', exVi: 'Tuần nào tôi cũng xem số dư trên ứng dụng.' },
        { w: 'deposit', ipa: '/dɪˈpɑzɪt/', vi: 'gửi (tiền) vào tài khoản', ex: 'I deposited my salary into my savings account.', exVi: 'Tôi đã gửi tiền lương vào tài khoản tiết kiệm.' },
        { w: 'withdraw', ipa: '/wɪðˈdrɔ/', vi: 'rút (tiền)', ex: 'You can withdraw up to ten million dong a day.', exVi: 'Bạn có thể rút tối đa mười triệu đồng một ngày.' },
        { w: 'transfer', ipa: '/ˈtrænsfər/', vi: 'chuyển khoản; sự chuyển tiền', ex: "I'll transfer the money to you tonight.", exVi: 'Tối nay tôi sẽ chuyển khoản cho bạn.' },
        { w: 'loan', ipa: '/loʊn/', vi: 'khoản vay', ex: 'They took out a loan to buy a house.', exVi: 'Họ vay một khoản để mua nhà.' },
        { w: 'interest rate', ipa: '/ˈɪntrəst ˌreɪt/', vi: 'lãi suất', ex: 'The interest rate on this loan is 8% a year.', exVi: 'Lãi suất của khoản vay này là 8% một năm.' },
        { w: 'savings', ipa: '/ˈseɪvɪŋz/', vi: 'tiền tiết kiệm', ex: 'She spent all her savings on a trip to Europe.', exVi: 'Cô ấy tiêu hết tiền tiết kiệm cho chuyến đi châu Âu.' },
        { w: 'borrow', ipa: '/ˈbɑroʊ/', vi: 'mượn, vay (của ai)', ex: "Can I borrow 200,000 dong? I'll pay you back tomorrow.", exVi: 'Cho mình mượn 200.000 đồng nhé? Mai mình trả.' },
        { w: 'lend', ipa: '/lɛnd/', vi: 'cho mượn, cho vay', ex: 'Could you lend me your calculator?', exVi: 'Bạn cho mình mượn máy tính bỏ túi được không?' },
        { w: 'owe', ipa: '/oʊ/', vi: 'nợ', ex: 'I still owe my brother fifty dollars.', exVi: 'Tôi vẫn còn nợ anh trai năm mươi đô.' },
        { w: 'budget', ipa: '/ˈbʌdʒɪt/', vi: 'ngân sách, khoản chi dự tính', ex: 'We need to plan our monthly budget.', exVi: 'Chúng ta cần lên kế hoạch chi tiêu hằng tháng.' },
        { w: 'bill', ipa: '/bɪl/', vi: 'hoá đơn (điện, nước…)', ex: 'Have you paid the electricity bill?', exVi: 'Bạn đã trả hoá đơn tiền điện chưa?' },
        { w: 'fee', ipa: '/fi/', vi: 'phí, lệ phí', ex: "There is a small fee for using another bank's ATM.", exVi: 'Dùng ATM của ngân hàng khác sẽ mất một khoản phí nhỏ.' },
        { w: 'branch', ipa: '/bræntʃ/', vi: 'chi nhánh', ex: 'Which branch of the bank is open on Saturday?', exVi: 'Chi nhánh nào của ngân hàng mở cửa vào thứ Bảy?' },
        { w: 'hold on', ipa: '/hoʊld ˈɑn/', vi: 'giữ máy, chờ một chút', ex: "Hold on, please. I'll check for you.", exVi: 'Xin giữ máy. Tôi sẽ kiểm tra giúp anh/chị.' },
        { w: 'put through', ipa: '/pʊt ˈθru/', vi: 'nối máy (cho ai)', ex: 'Could you put me through to the loans department?', exVi: 'Bạn có thể nối máy cho tôi đến phòng cho vay không?' },
        { w: 'call back', ipa: '/kɔl ˈbæk/', vi: 'gọi lại', ex: "I'm in a meeting. Can I call you back later?", exVi: 'Tôi đang họp. Lát nữa tôi gọi lại cho bạn được không?' },
        { w: 'leave a message', ipa: '/liv ə ˈmɛsɪdʒ/', vi: 'để lại lời nhắn', ex: "She isn't here. Would you like to leave a message?", exVi: 'Cô ấy không có ở đây. Anh/chị có muốn để lại lời nhắn không?' }
      ],
      grammar: {
        title: 'Câu hỏi gián tiếp: Could you tell me…? / Do you know…?',
        explain: [
          'Câu hỏi gián tiếp lịch sự hơn câu hỏi trực tiếp, hay dùng khi hỏi người lạ hoặc gọi điện cho ngân hàng, cửa hàng, văn phòng. Mở đầu bằng: Could you tell me…? / Can you tell me…? / Do you know…? / I\'d like to know… / I wonder…',
          'Điểm quan trọng nhất: sau phần mở đầu, câu hỏi trở về TRẬT TỰ CÂU KHẲNG ĐỊNH (chủ ngữ + động từ): không đảo ngữ, không dùng do / does / did. Where is the bank? → Could you tell me where the bank is? What time does it open? → Do you know what time it opens?',
          'Câu hỏi Yes/No dùng if hoặc whether: Is the branch open today? → Do you know if the branch is open today? Can I withdraw cash here? → Could you tell me whether I can withdraw cash here?',
          'Dấu câu theo phần mở đầu: Could you tell me… / Do you know… kết thúc bằng dấu hỏi; I\'d like to know… / I wonder… kết thúc bằng dấu chấm. Mẫu câu điện thoại: This is … speaking. / Could I speak to…? / Hold on, please. / I\'ll put you through. / Can I leave a message? / Could you call me back?'
        ],
        table: [
          ['Câu hỏi trực tiếp', 'Câu hỏi gián tiếp'],
          ['Where is the ATM?', 'Could you tell me where the ATM is?'],
          ['What time does the bank close?', 'Do you know what time the bank closes?'],
          ['How much is the fee?', "I'd like to know how much the fee is."],
          ['Is the branch open on Sunday?', 'Do you know if the branch is open on Sunday?'],
          ['Did my transfer arrive?', 'Could you check whether my transfer arrived?']
        ],
        examples: [
          { t: 'Could you tell me what my balance is?', vi: 'Anh/chị có thể cho tôi biết số dư của tôi là bao nhiêu không?' },
          { t: 'Do you know if I can withdraw money at this branch?', vi: 'Bạn có biết tôi có thể rút tiền ở chi nhánh này không?' },
          { t: "I'd like to know how much the interest rate is.", vi: 'Tôi muốn biết lãi suất là bao nhiêu.' },
          { t: "Can you tell me why my card doesn't work?", vi: 'Anh/chị có thể cho tôi biết vì sao thẻ của tôi không dùng được không?' },
          { t: 'I wonder whether the bank will lend us the money.', vi: 'Tôi không biết liệu ngân hàng có cho chúng tôi vay tiền không.' }
        ],
        tip: 'Lỗi rất hay gặp là giữ đảo ngữ trong câu gián tiếp: "Could you tell me where is the bank?" → "Could you tell me where the bank is?"; "Do you know what time does it open?" → "Do you know what time it opens?". Khi nghe máy hay gọi điện, đừng nói "I am Lan": tiếng Anh dùng "This is Lan (speaking)."'
      },
      dialogue: [
        { s: 'Hannah', t: 'Good morning, Green Bank. This is Hannah speaking. How can I help you?', vi: 'Chào buổi sáng, Ngân hàng Green xin nghe. Tôi là Hannah. Tôi có thể giúp gì cho anh/chị?' },
        { s: 'Minh', t: "Hello. I'd like to know why my card doesn't work at the ATM.", vi: 'Xin chào. Tôi muốn biết vì sao thẻ của tôi không dùng được ở cây ATM.' },
        { s: 'Hannah', t: "I'm sorry to hear that. Could you tell me what your account number is?", vi: 'Tôi rất tiếc. Anh có thể cho tôi biết số tài khoản của anh không?' },
        { s: 'Minh', t: "Sure. It's 0-4-5-1-2-9-8-7.", vi: 'Vâng. Số là 0-4-5-1-2-9-8-7.' },
        { s: 'Hannah', t: 'Thank you. Hold on, please… I see. Your card expired last week.', vi: 'Cảm ơn anh. Xin giữ máy… À, thẻ của anh đã hết hạn từ tuần trước.' },
        { s: 'Minh', t: 'Oh! Do you know how long it takes to get a new one?', vi: 'Ồ! Chị có biết làm thẻ mới mất bao lâu không?' },
        { s: 'Hannah', t: 'About five working days. You can pick it up at any branch.', vi: 'Khoảng năm ngày làm việc. Anh có thể nhận thẻ ở bất kỳ chi nhánh nào.' },
        { s: 'Minh', t: "OK. And could you tell me if there's a fee for a new card?", vi: 'Vâng. Chị có thể cho tôi biết làm thẻ mới có mất phí không?' },
        { s: 'Hannah', t: 'There is no fee this time. Would you like me to put you through to the card department?', vi: 'Lần này không mất phí. Anh có muốn tôi nối máy đến phòng thẻ không?' },
        { s: 'Minh', t: "No, thanks. That's all I needed. Thank you for your help!", vi: 'Không cần đâu, cảm ơn chị. Tôi chỉ cần biết vậy thôi. Cảm ơn chị đã giúp!' }
      ],
      exercises: [
        { type: 'mc', q: 'Could you tell me where ___?', options: ['is the ATM', 'the ATM is', 'does the ATM', 'the ATM'], answer: 1,
          explain: 'Câu hỏi gián tiếp dùng trật tự khẳng định: where + the ATM + is.' },
        { type: 'mc', q: 'Do you know what time the bank ___?', options: ['does open', 'open', 'opens', 'do open'], answer: 2,
          explain: 'Bỏ does, động từ chia theo chủ ngữ the bank: what time the bank opens.' },
        { type: 'fill', q: 'Do you know ___ the branch is open on Sunday?', answer: ['if', 'whether'], hint: 'câu hỏi Yes/No gián tiếp',
          explain: 'Câu hỏi Yes/No khi chuyển sang gián tiếp dùng if hoặc whether.' },
        { type: 'mc', q: "I'd like to know how much ___.", options: ['the fee is', 'is the fee', 'does the fee cost', 'is fee'], answer: 0,
          explain: 'Trật tự khẳng định sau phần mở đầu: how much + the fee + is.' },
        { type: 'fill', q: "Can you tell me why my card ___ work? (phủ định, hiện tại đơn)", answer: ["doesn't", 'does not', 'doesn’t'], hint: 'my card + ? + work',
          explain: "Trong câu gián tiếp vẫn dùng doesn't khi động từ ở thể phủ định: why my card doesn't work." },
        { type: 'mc', q: 'Câu nào ĐÚNG?', options: ['Could you tell me what is my balance?', 'Could you tell me what does my balance?', 'Could you tell me my balance is what?', 'Could you tell me what my balance is?'], answer: 3,
          explain: 'Từ để hỏi + chủ ngữ + động từ: what my balance is.' },
        { type: 'mc', q: "Can I ___ some money from you? I'll pay you back tomorrow.", options: ['lend', 'borrow', 'owe', 'transfer'], answer: 1,
          explain: 'borrow from somebody = mượn của ai; lend to somebody = cho ai mượn.' },
        { type: 'fill', q: "My brother ___ me 500,000 dong last week, and I haven't paid him back yet. (lend)", answer: ['lent'], hint: 'quá khứ của lend',
          explain: 'lend → lent → lent.' },
        { type: 'mc', q: 'Bạn muốn biết trong tài khoản còn bao nhiêu tiền. Bạn hỏi về:', options: ['balance', 'loan', 'branch', 'fee'], answer: 0,
          explain: 'balance = số dư tài khoản.' },
        { type: 'mc', q: 'Trên điện thoại, "Xin vui lòng giữ máy" là:', options: ['Hold on, please.', 'Hang up, please.', 'Call back, please.', 'Go on, please.'], answer: 0,
          explain: 'Hold on = giữ máy, chờ một chút; hang up = cúp máy.' },
        { type: 'fill', q: "She isn't in the office right now. Would you like to leave a ___?", answer: ['message'], hint: 'lời nhắn',
          explain: 'leave a message = để lại lời nhắn.' },
        { type: 'mc', q: 'I took out a ___ from the bank to buy a car.', options: ['savings', 'balance', 'loan', 'budget'], answer: 2,
          explain: 'take out a loan = vay một khoản tiền.' },
        { type: 'fill', q: "I'm in a meeting. Can I call you ___ in an hour?", answer: ['back'], hint: 'gọi lại',
          explain: 'call somebody back = gọi lại cho ai.' },
        { type: 'order', vi: 'Bạn có thể cho tôi biết ngân hàng mở cửa lúc mấy giờ không?', words: ['the', 'me', 'bank', 'Could', 'tell', 'what', 'opens?', 'you', 'time'], answer: 'Could you tell me what time the bank opens?' },
        { type: 'order', vi: 'Bạn có biết tôi có thể rút tiền ở đây không?', words: ['know', 'can', 'Do', 'I', 'here?', 'money', 'you', 'if', 'withdraw'], answer: 'Do you know if I can withdraw money here?' },
        { type: 'order', vi: 'Tôi sẽ nối máy cho anh tới phòng cho vay.', words: ['through', 'put', 'to', "I'll", 'you', 'the', 'department', 'loans'], answer: "I'll put you through to the loans department" }
      ],
      reading: {
        title: 'Managing My First Salary',
        titleVi: 'Quản lý đồng lương đầu tiên',
        text: [
          'When Trang got her first job after university, she was excited to have her own salary. But after three months, she realized that she had no savings at all. She also owed her best friend two million dong. "I didn\'t know where all my money was going," she says.',
          "So she decided to make a monthly budget. First, she wrote down all her bills: rent, electricity, water and her phone. Then she opened a second bank account just for savings. Every month, as soon as she gets her salary, she transfers 20% of it to that account. The interest rate isn't very high, but the money is safe and she can't spend it easily.",
          "Trang also stopped using ATMs from other banks, because every withdrawal cost her a fee. When she had questions, she called her bank. \"At first I was shy about asking,\" she says. \"But the staff were really helpful. I just asked things like 'Could you tell me how much this card costs?' and they explained everything.\"",
          'A year later, Trang has paid back her friend and has saved enough for a short trip to Thailand. Her advice? "Know where your money goes. Don\'t borrow if you don\'t need to, and don\'t be afraid to ask questions."'
        ],
        vi: [
          'Khi có công việc đầu tiên sau đại học, Trang rất hào hứng vì có lương riêng. Nhưng sau ba tháng, cô nhận ra mình không có đồng tiết kiệm nào. Cô còn nợ bạn thân hai triệu đồng. "Mình chẳng biết tiền của mình đi đâu hết," cô kể.',
          'Vì thế cô quyết định lập ngân sách hằng tháng. Đầu tiên, cô ghi ra mọi hoá đơn: tiền nhà, tiền điện, tiền nước và tiền điện thoại. Sau đó cô mở thêm một tài khoản ngân hàng chỉ để tiết kiệm. Mỗi tháng, ngay khi nhận lương, cô chuyển 20% vào tài khoản đó. Lãi suất không cao lắm, nhưng tiền được an toàn và cô không dễ tiêu mất.',
          'Trang cũng thôi dùng ATM của ngân hàng khác, vì mỗi lần rút tiền cô đều mất phí. Khi có thắc mắc, cô gọi điện cho ngân hàng. "Lúc đầu mình ngại hỏi lắm," cô nói. "Nhưng nhân viên rất nhiệt tình. Mình chỉ cần hỏi kiểu \'Chị có thể cho em biết làm thẻ này hết bao nhiêu tiền không?\' là họ giải thích hết."',
          'Một năm sau, Trang đã trả xong nợ bạn và tiết kiệm đủ cho một chuyến đi ngắn sang Thái Lan. Lời khuyên của cô? "Hãy biết tiền của mình đi đâu. Đừng vay nếu không cần, và đừng ngại đặt câu hỏi."'
        ],
        questions: [
          { q: 'Sau ba tháng đi làm, Trang nhận ra điều gì?', options: ['Cô không có đồng tiết kiệm nào', 'Cô được tăng lương', 'Ngân hàng tính sai phí', 'Cô cần vay tiền mua nhà'], answer: 0,
            explain: '"After three months, she realized that she had no savings at all."' },
          { q: 'Mỗi tháng Trang làm gì ngay khi nhận lương?', options: ['Trả nợ bạn', 'Rút hết tiền mặt', 'Chuyển 20% vào tài khoản tiết kiệm', 'Trả tiền điện thoại'], answer: 2,
            explain: '"As soon as she gets her salary, she transfers 20% of it to that account."' },
          { q: 'Vì sao Trang thôi dùng ATM của ngân hàng khác?', options: ['Vì ATM hay hỏng', 'Vì mỗi lần rút tiền đều mất phí', 'Vì nhân viên không nhiệt tình', 'Vì cô không có thẻ'], answer: 1,
            explain: '"Every withdrawal cost her a fee."' },
          { q: 'Lời khuyên nào KHÔNG có trong bài?', options: ['Biết tiền của mình đi đâu', 'Đừng vay nếu không cần', 'Đừng ngại đặt câu hỏi', 'Hãy vay ngân hàng để đầu tư'], answer: 3,
            explain: 'Trang khuyên ngược lại: chỉ vay khi thật cần.' }
        ]
      }
    }
  },

  // ───────────────────────── sau B1-4: sự cố, phàn nàn; quá khứ hoàn thành ─────────────────────────
  {
    after: 'en-b1-4',
    unit: {
      id: 'en-b1-4b',
      icon: '🧾',
      title: 'Sự cố & lời phàn nàn',
      goal: 'Kể lại một sự cố theo đúng trình tự trước – sau; phàn nàn lịch sự với khách sạn, cửa hàng và đề nghị cách giải quyết.',
      vocab: [
        { w: 'complain', ipa: '/kəmˈpleɪn/', vi: 'phàn nàn, khiếu nại', ex: 'We complained to the manager about the noise.', exVi: 'Chúng tôi đã phàn nàn với quản lý về tiếng ồn.' },
        { w: 'complaint', ipa: '/kəmˈpleɪnt/', vi: 'lời phàn nàn, đơn khiếu nại', ex: "I'd like to make a complaint.", exVi: 'Tôi muốn khiếu nại.' },
        { w: 'refund', ipa: '/ˈrifʌnd/', vi: 'tiền hoàn lại', ex: 'Can I get a refund for this broken phone?', exVi: 'Tôi có được hoàn tiền cho chiếc điện thoại hỏng này không?' },
        { w: 'replace', ipa: '/rɪˈpleɪs/', vi: 'thay, đổi (cái mới)', ex: 'The shop replaced my faulty headphones.', exVi: 'Cửa hàng đã đổi cho tôi tai nghe mới thay cái bị lỗi.' },
        { w: 'faulty', ipa: '/ˈfɔlti/', vi: 'bị lỗi (do nhà sản xuất)', ex: 'The TV was faulty, so I took it back.', exVi: 'Cái TV bị lỗi nên tôi mang trả lại.' },
        { w: 'broken', ipa: '/ˈbroʊkən/', vi: 'bị vỡ, bị hỏng', ex: 'When I opened the box, the cup was broken.', exVi: 'Khi tôi mở hộp ra thì cái cốc đã bị vỡ.' },
        { w: 'manager', ipa: '/ˈmænɪdʒər/', vi: 'người quản lý', ex: "I'd like to speak to the manager, please.", exVi: 'Tôi muốn nói chuyện với quản lý.' },
        { w: 'staff', ipa: '/stæf/', vi: 'nhân viên (nói chung)', ex: 'The hotel staff were very helpful.', exVi: 'Nhân viên khách sạn rất nhiệt tình.' },
        { w: 'service', ipa: '/ˈsɜrvɪs/', vi: 'dịch vụ, sự phục vụ', ex: 'The food was good, but the service was slow.', exVi: 'Đồ ăn ngon nhưng phục vụ chậm.' },
        { w: 'reception', ipa: '/rɪˈsɛpʃən/', vi: 'quầy lễ tân', ex: 'Please leave your key at reception.', exVi: 'Vui lòng để lại chìa khoá ở quầy lễ tân.' },
        { w: 'guest', ipa: '/ɡɛst/', vi: 'khách (khách sạn, khách mời)', ex: 'The hotel has rooms for 200 guests.', exVi: 'Khách sạn có phòng cho 200 khách.' },
        { w: 'check in', ipa: '/tʃɛk ˈɪn/', vi: 'làm thủ tục nhận phòng / lên máy bay', ex: 'We checked in at three in the afternoon.', exVi: 'Chúng tôi làm thủ tục nhận phòng lúc ba giờ chiều.' },
        { w: 'dirty', ipa: '/ˈdɜrti/', vi: 'bẩn', ex: 'The towels in our room were dirty.', exVi: 'Khăn tắm trong phòng chúng tôi bị bẩn.' },
        { w: 'rude', ipa: '/rud/', vi: 'thô lỗ, bất lịch sự', ex: 'The waiter was very rude to us.', exVi: 'Người phục vụ rất thô lỗ với chúng tôi.' },
        { w: 'polite', ipa: '/pəˈlaɪt/', vi: 'lịch sự', ex: 'Please be polite when you complain.', exVi: 'Hãy lịch sự khi phàn nàn.' },
        { w: 'disappointed', ipa: '/ˌdɪsəˈpɔɪntɪd/', vi: 'thất vọng', ex: 'I was disappointed with the hotel.', exVi: 'Tôi thất vọng về khách sạn đó.' },
        { w: 'satisfied', ipa: '/ˈsætɪsˌfaɪd/', vi: 'hài lòng', ex: 'Are you satisfied with our service?', exVi: 'Quý khách có hài lòng với dịch vụ của chúng tôi không?' },
        { w: 'compensation', ipa: '/ˌkɑmpənˈseɪʃən/', vi: 'tiền / khoản bồi thường', ex: 'The airline offered us compensation for the delay.', exVi: 'Hãng bay đề nghị bồi thường cho chúng tôi vì chuyến bay trễ.' },
        { w: 'warranty', ipa: '/ˈwɔrənti/', vi: '(giấy) bảo hành', ex: 'The laptop is still under warranty.', exVi: 'Chiếc laptop vẫn còn trong thời gian bảo hành.' },
        { w: 'deliver', ipa: '/dɪˈlɪvər/', vi: 'giao (hàng)', ex: 'The shop delivered the wrong sofa.', exVi: 'Cửa hàng giao nhầm ghế sô pha.' }
      ],
      grammar: {
        title: 'Thì quá khứ hoàn thành (Past Perfect): had + V3',
        explain: [
          'Quá khứ hoàn thành diễn tả việc xảy ra TRƯỚC một việc khác (hoặc trước một thời điểm) trong quá khứ. Việc xảy ra trước dùng had + V3, việc xảy ra sau dùng quá khứ đơn: When we arrived at the hotel, they had given our room to someone else.',
          'Cấu trúc giống nhau với mọi chủ ngữ: I / she / they had + V3 (viết tắt I\'d, she\'d). Phủ định: hadn\'t + V3. Câu hỏi: Had + S + V3? Hay đi với when, before, after, by the time, already, just, never … before.',
          'Khi trình tự đã rõ nhờ before / after, có thể dùng quá khứ đơn cho cả hai việc: After I paid (had paid), I noticed the mistake. Nhưng khi không có từ nối, quá khứ hoàn thành cho người nghe biết việc nào xảy ra trước: I opened the box. Someone had already used the phone.',
          'Phàn nàn lịch sự: I\'m afraid there\'s a problem with… / I\'d like to make a complaint about… / I\'m not satisfied with… / I\'d like a refund / a replacement, please. Hãy nói bình tĩnh, kể sự việc cụ thể (quá khứ đơn + quá khứ hoàn thành) và đề nghị cách giải quyết.'
        ],
        table: [
          ['', 'Cấu trúc', 'Ví dụ'],
          ['Khẳng định', 'S + had + V3', 'The film had started when we arrived.'],
          ['Phủ định', "S + hadn't + V3", "I hadn't checked the box before I paid."],
          ['Câu hỏi', 'Had + S + V3?', 'Had they cleaned the room?'],
          ['Phàn nàn', "I'd like to make a complaint about…", "I'd like to make a complaint about my order."]
        ],
        examples: [
          { t: 'When I opened the box, I found that someone had broken the screen.', vi: 'Khi mở hộp, tôi thấy ai đó đã làm vỡ màn hình.' },
          { t: 'By the time the waiter came, we had waited for forty minutes.', vi: 'Đến lúc người phục vụ tới, chúng tôi đã đợi bốn mươi phút.' },
          { t: "I'd ordered a blue shirt, but they delivered a red one.", vi: 'Tôi đã đặt áo màu xanh, nhưng họ lại giao áo màu đỏ.' },
          { t: 'I had never complained about a hotel before that trip.', vi: 'Trước chuyến đi đó tôi chưa từng phàn nàn về khách sạn nào.' },
          { t: "I'm afraid there's a problem with my order. I'd like a refund, please.", vi: 'E là đơn hàng của tôi có vấn đề. Tôi muốn được hoàn tiền.' }
        ],
        tip: 'Người Việt hay dùng quá khứ đơn cho mọi việc trong quá khứ nên người nghe khó biết trình tự: "When I arrived, the train left" (tàu chạy đúng lúc tôi đến) khác hẳn "When I arrived, the train had left" (tôi đến thì tàu đã chạy mất). Khi phàn nàn, câu "You must give me my money back!" nghe rất gắt; hãy nói "I\'d like a refund, please."'
      },
      dialogue: [
        { s: 'Ms. Lien', t: "Excuse me. I'd like to make a complaint about my room.", vi: 'Xin lỗi. Tôi muốn khiếu nại về phòng của tôi.' },
        { s: 'Receptionist', t: "I'm sorry to hear that. What's the problem?", vi: 'Tôi rất tiếc. Có vấn đề gì vậy ạ?' },
        { s: 'Ms. Lien', t: "I had booked a room with a sea view, but you've given me a room above the car park.", vi: 'Tôi đã đặt phòng nhìn ra biển, nhưng các anh lại cho tôi phòng ngay trên bãi đỗ xe.' },
        { s: 'Receptionist', t: "Let me check… You're right. I'm afraid someone had made a mistake with your booking.", vi: 'Để tôi kiểm tra… Chị nói đúng. E là ai đó đã nhầm khi ghi đặt phòng của chị.' },
        { s: 'Ms. Lien', t: "And that's not all. When I checked in, nobody had cleaned the bathroom. The towels were dirty.", vi: 'Chưa hết đâu. Lúc tôi nhận phòng, chưa ai dọn phòng tắm. Khăn tắm thì bẩn.' },
        { s: 'Receptionist', t: "I do apologize. That's not the service we want for our guests.", vi: 'Tôi thành thật xin lỗi. Đó không phải chất lượng dịch vụ chúng tôi muốn dành cho khách.' },
        { s: 'Ms. Lien', t: "I'm really disappointed. I had told my friends that this was the best hotel in town.", vi: 'Tôi thật sự thất vọng. Tôi đã nói với bạn bè rằng đây là khách sạn tốt nhất thành phố.' },
        { s: 'Receptionist', t: "I completely understand. We can move you to a sea-view room right now, and we'll give you a free dinner as compensation.", vi: 'Tôi hoàn toàn hiểu. Chúng tôi có thể chuyển chị sang phòng nhìn ra biển ngay bây giờ, và tặng chị một bữa tối miễn phí để bồi thường.' },
        { s: 'Ms. Lien', t: "Thank you. That's very kind. I'm satisfied with that.", vi: 'Cảm ơn anh. Anh thật chu đáo. Tôi hài lòng với cách đó.' },
        { s: 'Receptionist', t: "You're welcome. Our staff will carry your bags in a few minutes.", vi: 'Không có gì ạ. Vài phút nữa nhân viên sẽ mang hành lý giúp chị.' }
      ],
      exercises: [
        { type: 'mc', q: 'When we arrived at the cinema, the film ___.', options: ['already started', 'had already started', 'has already started', 'was already start'], answer: 1,
          explain: 'Phim bắt đầu TRƯỚC khi chúng tôi đến → had already started.' },
        { type: 'mc', q: "I ___ the box before I paid, so I didn't see the crack.", options: ["hadn't checked", "haven't checked", "don't check", "hadn't check"], answer: 0,
          explain: 'Việc (không) kiểm tra xảy ra trước việc trả tiền → hadn\'t + V3 (checked).' },
        { type: 'fill', q: 'By the time the waiter came, we ___ waited for forty minutes.', answer: ['had', "'d"], hint: 'trợ động từ của quá khứ hoàn thành',
          explain: 'By the time + quá khứ đơn, việc xảy ra trước dùng had + V3.' },
        { type: 'fill', q: 'She was upset because someone ___ her bike. (steal)', answer: ['had stolen'], hint: 'had + V3',
          explain: 'Xe bị lấy trước khi cô ấy buồn → had stolen (steal → stole → stolen).' },
        { type: 'mc', q: 'They ___ never stayed in such an expensive hotel before that trip.', options: ['have', 'has', 'had', 'did'], answer: 2,
          explain: 'never … before + mốc quá khứ (before that trip) → had never stayed.' },
        { type: 'mc', q: 'When I got home, I realized I ___ my keys at the office.', options: ['had left', 'leave', 'have left', 'was leaving'], answer: 0,
          explain: 'Để quên chìa khoá xảy ra trước khi về nhà → had left.' },
        { type: 'mc', q: 'Câu phàn nàn nào lịch sự nhất?', options: ['Give me my money now!', 'You are a terrible shop.', 'Why your service so bad?', "I'm afraid there's a problem. I'd like a refund, please."], answer: 3,
          explain: '"I\'m afraid…" và "I\'d like…, please" giúp lời phàn nàn lịch sự mà vẫn rõ ràng.' },
        { type: 'fill', q: "The laptop stopped working after a week, but it's still under ___, so they'll repair it for free.", answer: ['warranty'], hint: 'bảo hành',
          explain: 'under warranty = còn bảo hành.' },
        { type: 'mc', q: "The waiter didn't say sorry and shouted at us. He was very ___.", options: ['polite', 'rude', 'satisfied', 'faulty'], answer: 1,
          explain: 'Quát khách, không xin lỗi → rude (thô lỗ).' },
        { type: 'mc', q: 'The airline gave us money because our flight was ten hours late. This money is ___.', options: ['compensation', 'a warranty', 'a budget', 'a fee'], answer: 0,
          explain: 'Khoản tiền bù cho thiệt hại, phiền toái là compensation (bồi thường).' },
        { type: 'fill', q: "I'd like to make a ___ about the service in this restaurant.", answer: ['complaint'], hint: 'danh từ của complain',
          explain: 'make a complaint = khiếu nại (complaint là danh từ, complain là động từ).' },
        { type: 'mc', q: 'The shop agreed to ___ my faulty headphones with a new pair.', options: ['complain', 'deliver', 'replace', 'attend'], answer: 2,
          explain: 'replace A with B = thay A bằng B.' },
        { type: 'fill', q: 'Had you ___ the room before you checked in? (see)', answer: ['seen'], hint: 'V3 của see',
          explain: 'Câu hỏi quá khứ hoàn thành: Had + S + V3 (see → saw → seen).' },
        { type: 'order', vi: 'Khi tôi đến ga, tàu của tôi đã chạy mất rồi.', words: ['left', 'I', 'station,', 'When', 'train', 'got', 'had', 'my', 'to', 'the'], answer: 'When I got to the station, my train had left' },
        { type: 'order', vi: 'Tôi muốn khiếu nại về đơn hàng của tôi.', words: ['complaint', "I'd", 'make', 'about', 'like', 'to', 'order', 'a', 'my'], answer: "I'd like to make a complaint about my order" },
        { type: 'order', vi: 'Họ đã giao nhầm ghế sô pha.', words: ['wrong', 'delivered', 'They', 'sofa', 'the'], answer: 'They delivered the wrong sofa' }
      ],
      reading: {
        title: 'A Weekend to Forget',
        titleVi: 'Một cuối tuần đáng quên',
        text: [
          "I don't usually write online reviews, but after last weekend I had to. My husband and I had booked two nights at the Ocean Pearl Hotel for our wedding anniversary. We had seen beautiful photos on its website, and we were very excited.",
          'The problems started as soon as we checked in. The receptionist was rude, and she told us that our sea-view room was not available because they had given it to another guest. Instead, we got a small room above the kitchen. It was noisy, and the bathroom was dirty. Clearly, nobody had cleaned it after the last guests left.',
          "The next morning, we complained to the manager. He was polite and apologized, but he said he couldn't offer us a refund. The only compensation he offered was a free breakfast, and by then we had already eaten at a café across the street.",
          "I'm very disappointed. The hotel is in a great location, but the service is terrible. If you're looking for a relaxing weekend, choose another hotel."
        ],
        vi: [
          'Tôi không hay viết đánh giá trên mạng, nhưng sau cuối tuần vừa rồi thì tôi buộc phải viết. Vợ chồng tôi đã đặt hai đêm ở khách sạn Ocean Pearl để kỷ niệm ngày cưới. Chúng tôi đã xem những bức ảnh rất đẹp trên trang web của khách sạn và rất háo hức.',
          'Rắc rối bắt đầu ngay khi chúng tôi nhận phòng. Cô lễ tân thì thô lỗ, và cô nói với chúng tôi rằng phòng nhìn ra biển không còn vì họ đã giao nó cho một khách khác. Thay vào đó, chúng tôi nhận một phòng nhỏ ngay trên nhà bếp. Phòng ồn ào và phòng tắm thì bẩn. Rõ ràng là chẳng ai dọn sau khi khách trước rời đi.',
          'Sáng hôm sau, chúng tôi phàn nàn với người quản lý. Anh ấy lịch sự và xin lỗi, nhưng nói rằng không thể hoàn tiền cho chúng tôi. Khoản bồi thường duy nhất anh ấy đề nghị là một bữa sáng miễn phí, mà lúc đó chúng tôi đã ăn sáng ở một quán cà phê bên kia đường rồi.',
          'Tôi rất thất vọng. Khách sạn ở vị trí đẹp nhưng dịch vụ thì tệ hại. Nếu bạn muốn có một cuối tuần thư giãn, hãy chọn khách sạn khác.'
        ],
        questions: [
          { q: 'Vì sao hai vợ chồng đặt phòng ở khách sạn này?', options: ['Để kỷ niệm ngày cưới', 'Để đi công tác', 'Vì phòng rẻ', 'Vì bạn bè giới thiệu'], answer: 0,
            explain: '"…for our wedding anniversary."' },
          { q: 'Vì sao họ không được ở phòng nhìn ra biển?', options: ['Vì họ đến muộn', 'Vì khách sạn đã giao phòng đó cho khách khác', 'Vì phòng đang sửa chữa', 'Vì họ chưa trả tiền'], answer: 1,
            explain: '"…because they had given it to another guest."' },
          { q: 'Người quản lý đề nghị bồi thường gì?', options: ['Hoàn tiền', 'Một phòng khác', 'Một bữa sáng miễn phí', 'Một đêm ở miễn phí'], answer: 2,
            explain: '"The only compensation he offered was a free breakfast."' },
          { q: 'Vì sao lời đề nghị đó chẳng có ích gì?', options: ['Vì họ không thích ăn sáng', 'Vì nhà hàng khách sạn đóng cửa', 'Vì người quản lý rất thô lỗ', 'Vì lúc đó họ đã ăn sáng ở quán bên kia đường rồi'], answer: 3,
            explain: '"…by then we had already eaten at a café across the street."' }
        ]
      }
    }
  },

  // ───────────────────────── sau B1-5: thuê nhà; may/might, too/enough, so/such ─────────────────────────
  {
    after: 'en-b1-5',
    unit: {
      id: 'en-b1-5b',
      icon: '🏠',
      title: 'Thuê nhà & cân nhắc lựa chọn',
      goal: 'Đi xem và đánh giá một căn hộ cho thuê; nói về khả năng có thể xảy ra, mức độ "quá… / đủ…" và nhấn mạnh cảm nhận.',
      vocab: [
        { w: 'rent', ipa: '/rɛnt/', vi: 'tiền thuê nhà; thuê', ex: 'The rent is five million dong a month.', exVi: 'Tiền thuê là năm triệu đồng một tháng.' },
        { w: 'landlord', ipa: '/ˈlændˌlɔrd/', vi: 'chủ nhà (cho thuê)', ex: 'Our landlord lives on the ground floor.', exVi: 'Chủ nhà của chúng tôi sống ở tầng trệt.' },
        { w: 'tenant', ipa: '/ˈtɛnənt/', vi: 'người thuê nhà', ex: 'The last tenant left the apartment very clean.', exVi: 'Người thuê trước để lại căn hộ rất sạch sẽ.' },
        { w: 'contract', ipa: '/ˈkɑnˌtrækt/', vi: 'hợp đồng', ex: 'Read the contract carefully before you sign it.', exVi: 'Đọc kỹ hợp đồng trước khi ký.' },
        { w: 'neighborhood', ipa: '/ˈneɪbərˌhʊd/', vi: 'khu phố, khu dân cư', ex: "It's a quiet neighborhood with lots of trees.", exVi: 'Đó là một khu phố yên tĩnh, nhiều cây xanh.' },
        { w: 'location', ipa: '/loʊˈkeɪʃən/', vi: 'vị trí', ex: 'The apartment is small, but the location is perfect.', exVi: 'Căn hộ nhỏ, nhưng vị trí thì tuyệt vời.' },
        { w: 'view', ipa: '/vju/', vi: 'quang cảnh, tầm nhìn', ex: 'The bedroom has a lovely view of the lake.', exVi: 'Phòng ngủ có tầm nhìn tuyệt đẹp ra hồ.' },
        { w: 'spacious', ipa: '/ˈspeɪʃəs/', vi: 'rộng rãi', ex: 'The living room is bright and spacious.', exVi: 'Phòng khách sáng sủa và rộng rãi.' },
        { w: 'tiny', ipa: '/ˈtaɪni/', vi: 'rất nhỏ, tí hon', ex: "The kitchen is tiny. There's no space for a table.", exVi: 'Bếp bé tí. Không có chỗ để bàn.' },
        { w: 'noisy', ipa: '/ˈnɔɪzi/', vi: 'ồn ào', ex: 'The street might be too noisy at night.', exVi: 'Con phố có thể quá ồn vào ban đêm.' },
        { w: 'bright', ipa: '/braɪt/', vi: 'sáng sủa', ex: 'I like bright rooms with big windows.', exVi: 'Tôi thích những căn phòng sáng sủa có cửa sổ lớn.' },
        { w: 'modern', ipa: '/ˈmɑdərn/', vi: 'hiện đại', ex: 'The bathroom is very modern.', exVi: 'Phòng tắm rất hiện đại.' },
        { w: 'furnished', ipa: '/ˈfɜrnɪʃt/', vi: 'có sẵn đồ đạc', ex: 'Is the apartment furnished?', exVi: 'Căn hộ có sẵn đồ đạc không?' },
        { w: 'facilities', ipa: '/fəˈsɪlətiz/', vi: 'tiện ích, cơ sở vật chất', ex: 'The building has great facilities, like a gym and a pool.', exVi: 'Toà nhà có nhiều tiện ích tốt như phòng gym và bể bơi.' },
        { w: 'roommate', ipa: '/ˈrumˌmeɪt/', vi: 'bạn cùng phòng', ex: 'My roommate is from Japan.', exVi: 'Bạn cùng phòng của tôi đến từ Nhật Bản.' },
        { w: 'move in', ipa: '/muv ˈɪn/', vi: 'chuyển đến (ở)', ex: 'When can we move in?', exVi: 'Khi nào chúng tôi có thể chuyển đến?' },
        { w: 'suitable', ipa: '/ˈsutəbəl/', vi: 'phù hợp', ex: "This apartment isn't suitable for a family with children.", exVi: 'Căn hộ này không phù hợp với gia đình có trẻ nhỏ.' },
        { w: 'elevator', ipa: '/ˈɛləˌveɪtər/', vi: 'thang máy', ex: "There's no elevator, so we'll have to carry everything upstairs.", exVi: 'Không có thang máy nên chúng ta sẽ phải mang mọi thứ lên lầu.' },
        { w: 'nearby', ipa: '/ˌnɪrˈbaɪ/', vi: 'gần đây, ở gần', ex: 'Is there a supermarket nearby?', exVi: 'Gần đây có siêu thị không?' },
        { w: 'look around', ipa: '/lʊk əˈraʊnd/', vi: 'đi xem một vòng', ex: 'Can we look around the apartment this weekend?', exVi: 'Cuối tuần này chúng tôi đến xem căn hộ được không?' }
      ],
      grammar: {
        title: 'May / might (khả năng); too / enough; so / such',
        explain: [
          'May / might + động từ nguyên mẫu = có thể, có lẽ (khả năng, không chắc chắn). Might thường ít chắc hơn may một chút, nhưng trong văn nói hai từ gần như dùng thay nhau: The street may be noisy at night. We might move in next month. Phủ định: may not / might not (không viết tắt "mayn\'t"): The landlord might not agree.',
          'Too + tính từ = quá (đến mức không được, không tốt): The rent is too high for us. Tính từ + enough = đủ; not + tính từ + enough = không đủ: The kitchen isn\'t big enough. Enough đứng SAU tính từ nhưng TRƯỚC danh từ: big enough / enough space. Có thể thêm (for somebody) + to V: It\'s too far for me to walk. The room is big enough for two people.',
          'So + tính từ (+ that…) và such + (a/an) + (tính từ) + danh từ (+ that…) = quá … đến nỗi, … đến thế: The view was so beautiful (that) we signed the contract immediately. It was such a beautiful view (that)… They are such friendly neighbors!',
          'Phân biệt: too mang nghĩa tiêu cực, gây cản trở (too small to live in); so chỉ nhấn mạnh mức độ, có thể tích cực (so spacious!). Dùng such trước cụm danh từ, so trước tính từ đứng một mình.'
        ],
        table: [
          ['Cấu trúc', 'Ví dụ', 'Nghĩa'],
          ['may / might + V', 'It might rain later.', 'có lẽ, có thể'],
          ['too + adj (+ to V)', "It's too expensive to rent.", 'quá … (nên không…)'],
          ['adj + enough / enough + N', "It isn't big enough. / There isn't enough space.", '(không) đủ …'],
          ['so + adj (+ that…)', 'The flat is so bright (that) we love it.', 'rất … đến nỗi'],
          ['such (a/an) + adj + N', "It's such a quiet street!", '… đến thế']
        ],
        examples: [
          { t: 'The rent might go up next year.', vi: 'Tiền thuê có thể sẽ tăng vào năm sau.' },
          { t: 'This apartment is too small for a family of four.', vi: 'Căn hộ này quá nhỏ cho một gia đình bốn người.' },
          { t: "The bedroom isn't bright enough. It only has one tiny window.", vi: 'Phòng ngủ không đủ sáng. Nó chỉ có một cửa sổ bé tí.' },
          { t: 'The neighborhood was so quiet that I could hear the birds.', vi: 'Khu phố yên tĩnh đến mức tôi nghe được cả tiếng chim.' },
          { t: "It's such a nice view! Let's take it.", vi: 'Cảnh đẹp quá! Mình thuê căn này đi.' }
        ],
        tip: 'Người Việt hay đặt enough trước tính từ theo kiểu "đủ lớn": "enough big" là sai → "big enough". Đừng dùng too thay cho very khi khen: "This room is too beautiful" nghe như chê (đẹp quá mức) — hãy nói "so beautiful" hoặc "very beautiful". Và a/an đứng SAU such: "such a nice flat", không nói "a such nice flat".'
      },
      dialogue: [
        { s: 'Linh', t: 'So, what do you think of this apartment?', vi: 'Thế cậu thấy căn hộ này thế nào?' },
        { s: 'Mark', t: "It's so bright! And the view of the river is amazing.", vi: 'Sáng sủa quá! Mà view nhìn ra sông thì tuyệt vời.' },
        { s: 'Linh', t: "Yes, but the kitchen is tiny. I don't think it's big enough for both of us.", vi: 'Ừ, nhưng bếp thì bé tí. Mình nghĩ nó không đủ rộng cho cả hai đứa.' },
        { s: 'Mark', t: "True. And there's no elevator. Carrying the shopping up to the sixth floor might be too tiring.", vi: 'Đúng thế. Lại còn không có thang máy. Xách đồ đi chợ lên tầng sáu có khi mệt quá.' },
        { s: 'Linh', t: "What about the rent? It's eight million a month. Is that too expensive for us?", vi: 'Còn tiền thuê thì sao? Tám triệu một tháng. Có đắt quá với bọn mình không?' },
        { s: 'Mark', t: "It's a bit high, but it's furnished, so we don't have to buy anything.", vi: 'Hơi cao, nhưng có sẵn đồ đạc nên bọn mình không phải mua gì cả.' },
        { s: 'Linh', t: 'The landlord seemed friendly. He may agree to a lower price if we sign a one-year contract.', vi: 'Chủ nhà có vẻ dễ tính. Có thể ông ấy đồng ý giảm giá nếu bọn mình ký hợp đồng một năm.' },
        { s: 'Mark', t: "That's such a good idea. Let's ask him.", vi: 'Ý hay đấy. Mình hỏi ông ấy đi.' },
        { s: 'Linh', t: "OK, but let's look around the neighborhood first. It might be noisy at night.", vi: 'Được, nhưng mình đi một vòng quanh khu phố trước đã. Có khi ban đêm ồn ào lắm.' },
        { s: 'Mark', t: 'Good point. We might find a nice café nearby, too!', vi: 'Có lý. Biết đâu lại tìm được quán cà phê xinh xắn gần đây nữa!' }
      ],
      exercises: [
        { type: 'mc', q: 'Take an umbrella. It ___ rain later.', options: ['might', 'must', 'should', "can't"], answer: 0,
          explain: 'Khả năng có thể xảy ra (không chắc) → might.' },
        { type: 'mc', q: "The apartment is ___ expensive for us. We don't have that much money.", options: ['enough', 'too', 'such', 'very much'], answer: 1,
          explain: 'Quá đắt đến mức không thuê được → too expensive.' },
        { type: 'fill', q: "The kitchen isn't big ___ for a table.", answer: ['enough'], hint: 'đủ (đứng sau tính từ)',
          explain: 'Tính từ + enough: big enough.' },
        { type: 'mc', q: 'It was ___ a beautiful view that we signed the contract immediately.', options: ['so', 'too', 'such', 'very'], answer: 2,
          explain: 'Trước cụm danh từ (a beautiful view) dùng such.' },
        { type: 'mc', q: 'The neighborhood was ___ quiet that I could hear the birds.', options: ['such', 'so', 'enough', 'too'], answer: 1,
          explain: 'Trước tính từ đứng một mình (quiet) + that… dùng so.' },
        { type: 'fill', q: 'The landlord ___ not agree to lower the rent. (có lẽ… không)', answer: ['might', 'may'], hint: 'might / may',
          explain: 'Khả năng phủ định: might not / may not + V.' },
        { type: 'mc', q: 'Câu nào ĐÚNG?', options: ['The room is enough big.', 'The room is too enough big.', 'The room enough is big.', 'The room is big enough.'], answer: 3,
          explain: 'enough đứng sau tính từ: big enough.' },
        { type: 'mc', q: 'Câu nào là lời KHEN?', options: ['The view is so beautiful!', 'This room is too small.', 'The street is too noisy.', "There isn't enough light."], answer: 0,
          explain: 'so + tính từ tích cực là lời khen; too và not … enough thường mang ý chê.' },
        { type: 'fill', q: 'They are ___ friendly neighbors! They always help us.', answer: ['such'], hint: 'so hay such?',
          explain: 'Trước cụm danh từ số nhiều (friendly neighbors) dùng such (không có a).' },
        { type: 'mc', q: 'A person who rents an apartment from a landlord is a ___.', options: ['roommate', 'tenant', 'manager', 'guest'], answer: 1,
          explain: 'tenant = người thuê nhà.' },
        { type: 'fill', q: 'Is there a supermarket ___? — Yes, just around the corner.', answer: ['nearby'], hint: 'ở gần đây',
          explain: 'nearby = ở gần đây.' },
        { type: 'mc', q: 'The apartment already has a bed, a sofa and a table. It is ___.', options: ['spacious', 'tiny', 'noisy', 'furnished'], answer: 3,
          explain: 'Có sẵn đồ đạc → furnished.' },
        { type: 'fill', q: 'Read the ___ carefully before you sign it.', answer: ['contract'], hint: 'hợp đồng',
          explain: 'sign a contract = ký hợp đồng.' },
        { type: 'order', vi: 'Tiền thuê nhà có thể sẽ tăng vào năm sau.', words: ['up', 'might', 'next', 'rent', 'The', 'go', 'year'], answer: 'The rent might go up next year' },
        { type: 'order', vi: 'Chỗ đó quá xa để đi bộ.', words: ['far', "It's", 'walk', 'too', 'to'], answer: "It's too far to walk" },
        { type: 'order', vi: 'Đây đúng là một căn hộ rộng rãi!', words: ['spacious', 'such', 'a', 'apartment!', 'This', 'is'], answer: 'This is such a spacious apartment!' }
      ],
      reading: {
        title: 'Finding a Home in Saigon',
        titleVi: 'Tìm nhà ở Sài Gòn',
        text: [
          'Last month, my friend and I started looking for an apartment in Ho Chi Minh City. We visited eight places in two weeks, and I learned a lot about renting.',
          "The first apartment was in a great location, right in the city center. But it was so noisy that we couldn't hear each other. The second one was cheap, but it was tiny and it wasn't bright enough. The third had such a beautiful view of the river that we almost signed the contract immediately. Then we found out that the elevator didn't work and the apartment was on the ninth floor!",
          "In the end, we chose a two-bedroom apartment in a quiet neighborhood. It isn't very modern, but it's spacious and furnished, and there is a market nearby. The rent is a little too high for us now, but the landlord says he might lower it if we stay for two years.",
          "My advice? Don't decide too quickly. Look around the area at different times of day, read the contract carefully, and talk to the other tenants. You might discover problems that the landlord didn't mention."
        ],
        vi: [
          'Tháng trước, tôi và bạn bắt đầu tìm căn hộ ở Thành phố Hồ Chí Minh. Chúng tôi đi xem tám chỗ trong hai tuần, và tôi đã học được rất nhiều điều về chuyện thuê nhà.',
          'Căn đầu tiên có vị trí tuyệt vời, ngay trung tâm thành phố. Nhưng nó ồn đến mức chúng tôi không nghe được nhau nói. Căn thứ hai rẻ, nhưng bé tí và không đủ sáng. Chỉ có đúng một cửa sổ nhỏ. Căn thứ ba có view nhìn ra sông đẹp đến nỗi chúng tôi suýt ký hợp đồng ngay. Rồi chúng tôi phát hiện thang máy bị hỏng mà căn hộ lại ở tầng chín!',
          'Cuối cùng, chúng tôi chọn một căn hộ hai phòng ngủ trong một khu phố yên tĩnh. Nó không hiện đại lắm, nhưng rộng rãi, có sẵn đồ đạc và gần chợ. Tiền thuê hiện hơi cao so với chúng tôi, nhưng chủ nhà nói ông có thể giảm nếu chúng tôi ở hai năm.',
          'Lời khuyên của tôi? Đừng quyết định quá vội. Hãy đi xem quanh khu vực vào những thời điểm khác nhau trong ngày, đọc kỹ hợp đồng và nói chuyện với những người thuê khác. Bạn có thể phát hiện ra những vấn đề mà chủ nhà không hề nhắc tới.'
        ],
        questions: [
          { q: 'Căn hộ đầu tiên có vấn đề gì?', options: ['Quá ồn', 'Quá xa trung tâm', 'Không có cửa sổ', 'Quá đắt'], answer: 0,
            explain: '"It was so noisy that we couldn\'t hear each other."' },
          { q: 'Vì sao họ không thuê căn hộ có view nhìn ra sông?', options: ['Vì hợp đồng quá dài', 'Vì thang máy hỏng mà căn hộ ở tầng chín', 'Vì chủ nhà không thân thiện', 'Vì giá thuê quá cao'], answer: 1,
            explain: '"The elevator didn\'t work and the apartment was on the ninth floor!"' },
          { q: 'Điều nào ĐÚNG về căn hộ họ chọn?', options: ['Rất hiện đại', 'Ở ngay trung tâm thành phố', 'Rộng rãi, có sẵn đồ đạc và gần chợ', 'Tiền thuê rất rẻ'], answer: 2,
            explain: '"It\'s spacious and furnished, and there is a market nearby."' },
          { q: 'Chủ nhà nói gì về tiền thuê?', options: ['Tiền thuê sẽ tăng vào năm sau', 'Họ phải trả trước một năm', 'Không thể thay đổi', 'Ông có thể giảm nếu họ ở hai năm'], answer: 3,
            explain: '"…the landlord says he might lower it if we stay for two years."' }
        ]
      }
    }
  }
];
