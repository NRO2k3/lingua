// Phần bổ sung cho các unit A1 tiếng Anh (xem SCHEMA.md, mục "Phần bổ sung bài học").
export default {
  'en-a1-1': {
    vocab: [
      { w: 'good afternoon', ipa: '/ɡʊd ˌæftərˈnun/', vi: 'chào buổi chiều', ex: 'Good afternoon, Mr. Brown!', exVi: 'Chào buổi chiều, thầy Brown!' },
      { w: 'good night', ipa: '/ɡʊd ˈnaɪt/', vi: 'chúc ngủ ngon; chào (khi chia tay buổi tối)', ex: 'Good night, Mom!', exVi: 'Chúc mẹ ngủ ngon!' },
      { w: 'sorry', ipa: '/ˈsɑri/', vi: 'xin lỗi', ex: 'Sorry, I am not Anna.', exVi: 'Xin lỗi, tôi không phải là Anna.' },
      { w: 'happy', ipa: '/ˈhæpi/', vi: 'vui, hạnh phúc', ex: 'We are happy today.', exVi: 'Hôm nay chúng tôi rất vui.' },
      { w: 'tired', ipa: '/ˈtaɪərd/', vi: 'mệt', ex: 'I am tired, but I am fine.', exVi: 'Tôi mệt, nhưng tôi ổn.' },
      { w: 'teacher', ipa: '/ˈtitʃər/', vi: 'giáo viên, thầy/cô giáo', ex: 'My teacher is from England.', exVi: 'Cô giáo của tôi đến từ nước Anh.' },
      { w: 'student', ipa: '/ˈstudənt/', vi: 'học sinh, sinh viên', ex: 'I am a student.', exVi: 'Tôi là sinh viên.' },
      { w: 'classmate', ipa: '/ˈklæsmeɪt/', vi: 'bạn cùng lớp', ex: 'Tom is my classmate.', exVi: 'Tom là bạn cùng lớp của tôi.' },
      { w: 'neighbor', ipa: '/ˈneɪbər/', vi: 'hàng xóm', ex: 'She is my neighbor.', exVi: 'Cô ấy là hàng xóm của tôi.' },
      { w: 'last name', ipa: '/ˈlæst ˌneɪm/', vi: 'họ (trong họ tên)', ex: 'My last name is Nguyen.', exVi: 'Họ của tôi là Nguyễn.' }
    ],
    exercises: [
      { type: 'mc', q: 'I ___ tired today.', options: ['am', 'is', 'are'], answer: 0,
        explain: 'Chủ ngữ I luôn đi với am.' },
      { type: 'mc', q: 'My classmates ___ very nice.', options: ['is', 'am', 'are'], answer: 2,
        explain: 'My classmates là số nhiều (= they) nên đi với are.' },
      { type: 'fill', q: 'She ___ my neighbor.', answer: ['is'], hint: 'to be',
        explain: 'She đi với is: She is my neighbor (Cô ấy là hàng xóm của tôi).' },
      { type: 'fill', q: 'They ___ happy. They are tired.', answer: ['are not', "aren't"], hint: 'to be, thể phủ định',
        explain: 'Phủ định của they are là they are not (viết tắt: aren\'t).' },
      { type: 'mc', q: 'Buổi tối, trước khi đi ngủ, bạn chào bố mẹ thế nào?', options: ['Good morning!', 'Good afternoon!', 'Good night!'], answer: 2,
        explain: 'Good night dùng khi chia tay buổi tối hoặc chúc ai đó ngủ ngon.' },
      { type: 'fill', q: '___ afternoon, Mr. Brown!', answer: ['Good'], hint: 'chào buổi chiều',
        explain: 'Good afternoon = chào buổi chiều.' },
      { type: 'order', vi: 'Anh ấy là bạn cùng lớp của tôi.', words: ['classmate', 'He', 'my', 'is'],
        answer: 'He is my classmate' },
      { type: 'order', vi: 'Họ của bạn là gì?', words: ['your', 'What', 'name?', 'is', 'last'],
        answer: 'What is your last name?' }
    ],
    reading: {
      title: 'My New Class',
      titleVi: 'Lớp học mới của tôi',
      text: [
        'Hello! My name is Linh. I am a student. I am nineteen years old. Today is my first day at a new English school. I am happy, but I am a little tired.',
        'My teacher is Mr. Brown. He is American. He is very nice. My classmate is Kenji. His last name is Tanaka. He is from Japan.',
        'Mrs. Hoa is my neighbor. She is not a teacher. She is a doctor. It is ten p.m. now. "Good night, Mrs. Hoa!" "Good night, Linh!"'
      ],
      vi: [
        'Xin chào! Tên tôi là Linh. Tôi là sinh viên. Tôi mười chín tuổi. Hôm nay là ngày đầu tiên của tôi ở một trường tiếng Anh mới. Tôi vui, nhưng hơi mệt một chút.',
        'Thầy giáo của tôi là thầy Brown. Thầy là người Mỹ. Thầy rất tốt. Bạn cùng lớp của tôi là Kenji. Họ của bạn ấy là Tanaka. Bạn ấy đến từ Nhật Bản.',
        'Cô Hoa là hàng xóm của tôi. Cô ấy không phải là giáo viên. Cô ấy là bác sĩ. Bây giờ là mười giờ tối. "Chúc cô Hoa ngủ ngon!" "Chúc Linh ngủ ngon!"'
      ],
      questions: [
        { q: 'Linh bao nhiêu tuổi?', options: ['18 tuổi', '19 tuổi', '20 tuổi'], answer: 1,
          explain: 'Bài đọc có câu "I am nineteen years old" (Tôi mười chín tuổi).' },
        { q: 'Thầy Brown là người nước nào?', options: ['Người Nhật', 'Người Việt Nam', 'Người Mỹ'], answer: 2,
          explain: '"He is American" nghĩa là thầy ấy là người Mỹ.' },
        { q: 'Họ của Kenji là gì?', options: ['Tanaka', 'Brown', 'Hoa', 'Linh'], answer: 0,
          explain: '"His last name is Tanaka" (Họ của bạn ấy là Tanaka).' },
        { q: 'Cô Hoa làm nghề gì?', options: ['Giáo viên', 'Bác sĩ', 'Sinh viên'], answer: 1,
          explain: '"She is not a teacher. She is a doctor." Cô Hoa là bác sĩ, không phải giáo viên.' }
      ]
    }
  },

  'en-a1-2': {
    vocab: [
      { w: 'eleven', ipa: '/ɪˈlɛvən/', vi: 'số 11', ex: 'My brother is eleven years old.', exVi: 'Em trai tôi mười một tuổi.' },
      { w: 'fifteen', ipa: '/ˌfɪfˈtin/', vi: 'số 15', ex: 'Are you fifteen? — Yes, I am.', exVi: 'Bạn mười lăm tuổi phải không? — Đúng vậy.' },
      { w: 'forty', ipa: '/ˈfɔrti/', vi: 'số 40', ex: 'My mother is forty.', exVi: 'Mẹ tôi bốn mươi tuổi.' },
      { w: 'fifty', ipa: '/ˈfɪfti/', vi: 'số 50', ex: 'Our teacher is fifty years old.', exVi: 'Thầy giáo của chúng tôi năm mươi tuổi.' },
      { w: 'age', ipa: '/eɪdʒ/', vi: 'tuổi, tuổi tác', ex: 'Age is just a number.', exVi: 'Tuổi tác chỉ là một con số.' },
      { w: 'nationality', ipa: '/ˌnæʃəˈnæləti/', vi: 'quốc tịch', ex: 'What is your nationality? — I am Vietnamese.', exVi: 'Quốc tịch của bạn là gì? — Tôi là người Việt Nam.' },
      { w: 'city', ipa: '/ˈsɪti/', vi: 'thành phố', ex: 'Hanoi is a big city.', exVi: 'Hà Nội là một thành phố lớn.' },
      { w: 'hometown', ipa: '/ˈhoʊmtaʊn/', vi: 'quê nhà, quê hương', ex: 'My hometown is Hue.', exVi: 'Quê tôi ở Huế.' },
      { w: 'language', ipa: '/ˈlæŋɡwɪdʒ/', vi: 'ngôn ngữ, tiếng', ex: 'What language is this? — It is Japanese.', exVi: 'Đây là tiếng gì? — Đó là tiếng Nhật.' },
      { w: 'address', ipa: '/ˈædrɛs/', vi: 'địa chỉ', ex: 'What is your address?', exVi: 'Địa chỉ của bạn là gì?' }
    ],
    exercises: [
      { type: 'mc', q: '___ old are you? — I am forty.', options: ['What', 'How', 'Where'], answer: 1,
        explain: 'Hỏi tuổi dùng How old: How old are you? (Bạn bao nhiêu tuổi?)' },
      { type: 'mc', q: 'What is your ___? — I am Vietnamese.', options: ['nationality', 'hometown', 'age'], answer: 0,
        explain: 'Câu trả lời là quốc tịch (Vietnamese) nên câu hỏi là What is your nationality?' },
      { type: 'fill', q: '___ is your address? — It is 12 Le Loi Street.', answer: ['What'], hint: 'từ để hỏi',
        explain: 'Hỏi địa chỉ: What is your address? (Địa chỉ của bạn là gì?)' },
      { type: 'fill', q: 'Is she fifteen? — Yes, she ___.', answer: ['is'], hint: 'trả lời ngắn',
        explain: 'Trả lời ngắn với to be: Yes, she is. / No, she isn\'t.' },
      { type: 'mc', q: 'Số 50 trong tiếng Anh là gì?', options: ['fifteen', 'fifty', 'five'], answer: 1,
        explain: 'fifty = 50 (nhấn ở đầu: FIF-ty); fifteen = 15 (nhấn ở cuối: fif-TEEN).' },
      { type: 'fill', q: '___ your city big? — Yes, it is.', answer: ['Is'], hint: 'to be đứng đầu câu hỏi',
        explain: 'Câu hỏi Yes/No: đưa to be lên trước chủ ngữ. Your city is big → Is your city big?' },
      { type: 'order', vi: 'Quê của bạn ở đâu?', words: ['hometown?', 'is', 'Where', 'your'],
        answer: 'Where is your hometown?' },
      { type: 'order', vi: 'Ông ấy bốn mươi tuổi.', words: ['old', 'is', 'forty', 'He', 'years'],
        answer: 'He is forty years old' }
    ],
    reading: {
      title: 'My English Class',
      titleVi: 'Lớp tiếng Anh của tôi',
      text: [
        'Hi! I am Nam. I am Vietnamese, and my hometown is Hue. Now I live in a big city, Ho Chi Minh City. I am twenty years old. I am a student in an English class.',
        'My class has eleven students. They are from different countries. Sofia is fifteen. She is from Spain. Her language is Spanish. Mr. Lee is fifty. Where is he from? He is from Korea. His nationality is Korean.',
        'Age is not important in our class. We are all friends!'
      ],
      vi: [
        'Chào bạn! Mình là Nam. Mình là người Việt Nam, quê mình ở Huế. Bây giờ mình sống ở một thành phố lớn, Thành phố Hồ Chí Minh. Mình hai mươi tuổi. Mình là học viên của một lớp tiếng Anh.',
        'Lớp mình có mười một học viên. Họ đến từ nhiều nước khác nhau. Sofia mười lăm tuổi. Bạn ấy đến từ Tây Ban Nha. Ngôn ngữ của bạn ấy là tiếng Tây Ban Nha. Ông Lee năm mươi tuổi. Ông ấy đến từ đâu? Ông ấy đến từ Hàn Quốc. Quốc tịch của ông ấy là Hàn Quốc.',
        'Tuổi tác không quan trọng trong lớp mình. Tất cả chúng mình đều là bạn bè!'
      ],
      questions: [
        { q: 'Quê của Nam ở đâu?', options: ['Hà Nội', 'Huế', 'Thành phố Hồ Chí Minh'], answer: 1,
          explain: '"My hometown is Hue" (Quê mình ở Huế). Nam chỉ đang sống ở TP. Hồ Chí Minh.' },
        { q: 'Lớp của Nam có bao nhiêu học viên?', options: ['15', '50', '11', '20'], answer: 2,
          explain: '"My class has eleven students" — eleven là 11.' },
        { q: 'Sofia nói tiếng gì?', options: ['Tiếng Hàn', 'Tiếng Tây Ban Nha', 'Tiếng Việt', 'Tiếng Anh'], answer: 1,
          explain: '"Her language is Spanish" (Ngôn ngữ của bạn ấy là tiếng Tây Ban Nha).' },
        { q: 'Ông Lee có quốc tịch gì?', options: ['Hàn Quốc', 'Nhật Bản', 'Mỹ'], answer: 0,
          explain: '"His nationality is Korean" (Quốc tịch của ông ấy là Hàn Quốc).' }
      ]
    }
  },

  'en-a1-3': {
    vocab: [
      { w: 'parents', ipa: '/ˈpɛrənts/', vi: 'bố mẹ', ex: 'My parents are teachers.', exVi: 'Bố mẹ tôi là giáo viên.' },
      { w: 'aunt', ipa: '/ænt/', vi: 'cô, dì, bác gái, mợ, thím', ex: 'My aunt is a nurse.', exVi: 'Dì của tôi là y tá.' },
      { w: 'uncle', ipa: '/ˈʌŋkəl/', vi: 'chú, bác trai, cậu, dượng', ex: 'Her uncle is from Da Nang.', exVi: 'Chú của cô ấy đến từ Đà Nẵng.' },
      { w: 'cousin', ipa: '/ˈkʌzən/', vi: 'anh/chị/em họ', ex: "Mai is my aunt's daughter. She is my cousin.", exVi: 'Mai là con gái của dì tôi. Bạn ấy là em họ của tôi.' },
      { w: 'grandmother', ipa: '/ˈɡrænˌmʌðər/', vi: 'bà (nội, ngoại)', ex: 'My grandmother is seventy.', exVi: 'Bà tôi bảy mươi tuổi.' },
      { w: 'grandfather', ipa: '/ˈɡrænˌfɑðər/', vi: 'ông (nội, ngoại)', ex: "My grandfather's name is Ba.", exVi: 'Ông tôi tên là Ba.' },
      { w: 'baby', ipa: '/ˈbeɪbi/', vi: 'em bé', ex: "The baby is my sister's son.", exVi: 'Em bé là con trai của chị tôi.' },
      { w: 'child', ipa: '/tʃaɪld/', vi: 'đứa trẻ, đứa con (số nhiều: children)', ex: 'They have one child.', exVi: 'Họ có một đứa con.' },
      { w: 'pet', ipa: '/pɛt/', vi: 'thú cưng', ex: 'Is this your pet? — Yes, it is my cat.', exVi: 'Đây là thú cưng của bạn à? — Đúng, nó là con mèo của tôi.' },
      { w: 'house', ipa: '/haʊs/', vi: 'ngôi nhà', ex: "This is my grandparents' house.", exVi: 'Đây là nhà của ông bà tôi.' }
    ],
    exercises: [
      { type: 'mc', q: 'This is Lan. ___ uncle is a doctor.', options: ['His', 'Her', 'Its'], answer: 1,
        explain: 'Lan là con gái nên dùng her (của cô ấy): Her uncle = chú của cô ấy.' },
      { type: 'mc', q: "My aunt's son is my ___.", options: ['cousin', 'uncle', 'grandfather'], answer: 0,
        explain: 'Con trai của cô/dì là anh/em họ: cousin.' },
      { type: 'fill', q: 'Tom and Kate are my parents. ___ house is big.', answer: ['Their'], hint: 'tính từ sở hữu của they',
        explain: 'Tom and Kate = they, tính từ sở hữu là their (của họ).' },
      { type: 'fill', q: "My father's mother is my ___.", answer: ['grandmother', 'grandma'], hint: 'bà',
        explain: 'Mẹ của bố là bà nội: grandmother.' },
      { type: 'mc', q: 'We have a cat. ___ name is Mimi.', options: ["It's", 'Its', 'Their'], answer: 1,
        explain: "Its = của nó (con mèo). It's = it is, không dùng ở đây." },
      { type: 'fill', q: 'That baby is ___ child. (của Nam)', answer: ["Nam's"], hint: "thêm 's vào tên",
        explain: "Người sở hữu là một cái tên thì thêm 's: Nam's child = con của Nam." },
      { type: 'order', vi: 'Bố mẹ của Lan là giáo viên.', words: ['teachers', 'are', "Lan's", 'parents'],
        answer: "Lan's parents are teachers" },
      { type: 'order', vi: 'Đây là con của dì tôi.', words: ["aunt's", 'This', 'child', 'my', 'is'],
        answer: "This is my aunt's child" }
    ],
    reading: {
      title: 'My Big Family',
      titleVi: 'Đại gia đình của tôi',
      text: [
        "This is my family photo. My name is An, and I am eight. These are my parents. My father's name is Hung, and my mother's name is Mai. The baby is my little sister, Na.",
        'My grandmother and grandfather live with us in a small house. My aunt and uncle live in Da Nang. Their child, Bao, is my cousin. He is my best friend.',
        'We have a pet, too. It is a cat. Its name is Mimi.'
      ],
      vi: [
        'Đây là ảnh gia đình mình. Mình tên là An, mình tám tuổi. Đây là bố mẹ mình. Bố mình tên là Hùng, còn mẹ mình tên là Mai. Em bé là em gái nhỏ của mình, bé Na.',
        'Ông và bà sống cùng chúng mình trong một ngôi nhà nhỏ. Cô và chú của mình sống ở Đà Nẵng. Con của cô chú, anh Bảo, là anh họ của mình. Anh ấy là bạn thân nhất của mình.',
        'Nhà mình còn có một con thú cưng nữa. Đó là một con mèo. Tên của nó là Mimi.'
      ],
      questions: [
        { q: 'Em bé trong ảnh là ai?', options: ['Chị gái của An', 'Em gái của An', 'Em họ của An'], answer: 1,
          explain: '"The baby is my little sister, Na" — em bé là em gái của An.' },
        { q: 'Ai sống cùng nhà với gia đình An?', options: ['Ông và bà', 'Cô và chú', 'Anh họ Bảo'], answer: 0,
          explain: '"My grandmother and grandfather live with us" — ông bà sống cùng nhà với An. Cô chú sống ở Đà Nẵng.' },
        { q: 'Bảo là ai của An?', options: ['Anh trai', 'Chú', 'Anh họ', 'Bố'], answer: 2,
          explain: '"Their child, Bao, is my cousin" — Bảo là con của cô chú, tức là anh họ của An.' },
        { q: 'Mimi là gì?', options: ['Tên em gái của An', 'Tên con mèo', 'Tên bà của An'], answer: 1,
          explain: '"It is a cat. Its name is Mimi." — Mimi là tên con mèo.' }
      ]
    }
  },

  'en-a1-4': {
    vocab: [
      { w: 'pencil', ipa: '/ˈpɛnsəl/', vi: 'bút chì', ex: 'These pencils are black.', exVi: 'Những cây bút chì này màu đen.' },
      { w: 'notebook', ipa: '/ˈnoʊtbʊk/', vi: 'quyển vở, sổ tay', ex: 'Is that your notebook?', exVi: 'Kia có phải là vở của bạn không?' },
      { w: 'desk', ipa: '/dɛsk/', vi: 'bàn học, bàn làm việc', ex: 'My desk is small.', exVi: 'Bàn học của tôi nhỏ.' },
      { w: 'chair', ipa: '/tʃɛr/', vi: 'cái ghế', ex: 'Those chairs are blue.', exVi: 'Những cái ghế kia màu xanh dương.' },
      { w: 'key', ipa: '/ki/', vi: 'chìa khoá', ex: 'Where is my key?', exVi: 'Chìa khoá của tôi đâu rồi?' },
      { w: 'clock', ipa: '/klɑk/', vi: 'đồng hồ (treo tường, để bàn)', ex: 'That clock is old.', exVi: 'Cái đồng hồ kia cũ rồi.' },
      { w: 'white', ipa: '/waɪt/', vi: 'màu trắng', ex: 'I have a white bag.', exVi: 'Tôi có một cái túi màu trắng.' },
      { w: 'yellow', ipa: '/ˈjɛloʊ/', vi: 'màu vàng', ex: 'This pen is yellow.', exVi: 'Cây bút này màu vàng.' },
      { w: 'brown', ipa: '/braʊn/', vi: 'màu nâu', ex: 'My dog is brown.', exVi: 'Con chó của tôi màu nâu.' },
      { w: 'orange', ipa: '/ˈɔrɪndʒ/', vi: 'quả cam; màu cam', ex: 'This is an orange. It is orange, too.', exVi: 'Đây là một quả cam. Nó cũng có màu cam.' }
    ],
    exercises: [
      { type: 'mc', q: 'I have ___ orange.', options: ['a', 'an', 'two'], answer: 1,
        explain: 'orange bắt đầu bằng nguyên âm /ɔː/ nên dùng an. "two" sai vì sau two phải là danh từ số nhiều (oranges).' },
      { type: 'mc', q: '___ chairs over there are white.', options: ['This', 'That', 'Those'], answer: 2,
        explain: 'chairs là số nhiều, ở xa (over there) nên dùng those.' },
      { type: 'fill', q: 'I have two ___.', answer: ['keys'], hint: 'số nhiều của key',
        explain: 'key kết thúc bằng nguyên âm + y nên chỉ thêm -s: keys.' },
      { type: 'fill', q: 'It is ___ old clock.', answer: ['an'], hint: 'a hay an?',
        explain: 'old bắt đầu bằng nguyên âm /oʊ/ nên dùng an: an old clock.' },
      { type: 'mc', q: 'This ___ my desk.', options: ['is', 'are', 'am'], answer: 0,
        explain: 'this đi với danh từ số ít và is.' },
      { type: 'fill', q: 'That chair is not brown. It is ___.', answer: ['white'], hint: 'màu trắng',
        explain: 'white = màu trắng.' },
      { type: 'order', vi: 'Đây là những cái ghế màu vàng.', words: ['chairs', 'are', 'These', 'yellow'],
        answer: 'These are yellow chairs', alt: ['These chairs are yellow'] },
      { type: 'order', vi: 'Cái đồng hồ kia màu nâu.', words: ['brown', 'clock', 'That', 'is'],
        answer: 'That clock is brown' }
    ],
    reading: {
      title: 'My Desk',
      titleVi: 'Bàn học của tôi',
      text: [
        'This is my room. That is my desk, and this is my chair. The desk is brown. The chair is white.',
        'On the desk, I have a yellow notebook, an orange, and two pencils. These pencils are new. They are red and blue. I also have a small clock. It is black.',
        'Where are my keys? Oh, look! Those keys under the chair are my keys! Now I am happy.'
      ],
      vi: [
        'Đây là phòng của tôi. Kia là bàn học của tôi, còn đây là ghế của tôi. Cái bàn màu nâu. Cái ghế màu trắng.',
        'Trên bàn, tôi có một quyển vở màu vàng, một quả cam và hai cây bút chì. Những cây bút chì này còn mới. Chúng màu đỏ và màu xanh dương. Tôi cũng có một cái đồng hồ nhỏ. Nó màu đen.',
        'Chìa khoá của tôi đâu rồi? Ồ, nhìn kìa! Mấy chiếc chìa khoá dưới ghế kia là của tôi! Giờ thì tôi vui rồi.'
      ],
      questions: [
        { q: 'Cái bàn học màu gì?', options: ['Màu trắng', 'Màu nâu', 'Màu vàng'], answer: 1,
          explain: '"The desk is brown" — cái bàn màu nâu. Màu trắng là cái ghế.' },
        { q: 'Trên bàn có mấy cây bút chì?', options: ['Một', 'Hai', 'Ba'], answer: 1,
          explain: '"...and two pencils" — có hai cây bút chì.' },
        { q: 'Cái đồng hồ màu gì?', options: ['Màu đen', 'Màu trắng', 'Màu cam', 'Màu đỏ'], answer: 0,
          explain: '"I also have a small clock. It is black." — đồng hồ màu đen.' },
        { q: 'Chìa khoá ở đâu?', options: ['Trên bàn', 'Trong túi', 'Dưới ghế'], answer: 2,
          explain: '"Those keys under the chair are my keys!" — chìa khoá ở dưới ghế.' }
      ]
    }
  },

  'en-a1-5': {
    vocab: [
      { w: 'wake up', ipa: '/ˌweɪk ˈʌp/', vi: 'thức dậy, tỉnh giấc', ex: 'I wake up at six.', exVi: 'Tôi thức dậy lúc sáu giờ.' },
      { w: 'brush', ipa: '/brʌʃ/', vi: 'chải; đánh (răng)', ex: 'She brushes her teeth every morning.', exVi: 'Sáng nào cô ấy cũng đánh răng.' },
      { w: 'lunch', ipa: '/lʌntʃ/', vi: 'bữa trưa', ex: 'We have lunch at twelve.', exVi: 'Chúng tôi ăn trưa lúc mười hai giờ.' },
      { w: 'dinner', ipa: '/ˈdɪnər/', vi: 'bữa tối', ex: 'My mother cooks dinner every day.', exVi: 'Ngày nào mẹ tôi cũng nấu bữa tối.' },
      { w: 'homework', ipa: '/ˈhoʊmwɜrk/', vi: 'bài tập về nhà', ex: 'He does his homework in the evening.', exVi: 'Cậu ấy làm bài tập về nhà vào buổi tối.' },
      { w: 'study', ipa: '/ˈstʌdi/', vi: 'học, học tập', ex: 'She studies English every day.', exVi: 'Ngày nào cô ấy cũng học tiếng Anh.' },
      { w: 'cook', ipa: '/kʊk/', vi: 'nấu ăn; đầu bếp', ex: 'I cook dinner on Sundays.', exVi: 'Tôi nấu bữa tối vào các ngày Chủ nhật.' },
      { w: 'walk', ipa: '/wɔk/', vi: 'đi bộ', ex: 'They walk to school.', exVi: 'Họ đi bộ đến trường.' },
      { w: 'often', ipa: '/ˈɔfən/', vi: 'thường, hay', ex: 'I often drink coffee in the morning.', exVi: 'Tôi thường uống cà phê vào buổi sáng.' },
      { w: 'busy', ipa: '/ˈbɪzi/', vi: 'bận, bận rộn', ex: 'My father is busy every day.', exVi: 'Ngày nào bố tôi cũng bận.' }
    ],
    exercises: [
      { type: 'mc', q: 'She ___ up at six every day.', options: ['wake', 'wakes', 'waking'], answer: 1,
        explain: 'Chủ ngữ she ở thì hiện tại đơn: động từ thêm -s → wakes.' },
      { type: 'mc', q: 'My father ___ dinner every evening.', options: ['cook', 'cooks', 'cooking'], answer: 1,
        explain: 'My father = he, nên động từ thêm -s: cooks.' },
      { type: 'fill', q: 'He ___ English in the afternoon.', answer: ['studies'], hint: 'study',
        explain: 'study tận cùng là phụ âm + y nên đổi y → ies khi đi với he: studies.' },
      { type: 'fill', q: 'She ___ her teeth every morning.', answer: ['brushes'], hint: 'brush',
        explain: 'brush tận cùng bằng sh nên thêm -es: brushes.' },
      { type: 'mc', q: '___ you often walk to school? — Yes, I do.', options: ['Do', 'Does', 'Are'], answer: 0,
        explain: 'Câu hỏi thì hiện tại đơn với you: Do + you + động từ nguyên mẫu?' },
      { type: 'fill', q: 'Tom ___ do his homework at night. He does it in the afternoon.', answer: ["doesn't", 'does not'], hint: 'phủ định',
        explain: "Phủ định với he/she/it: doesn't (does not) + động từ nguyên mẫu." },
      { type: 'order', vi: 'Tôi ăn trưa lúc mười hai giờ.', words: ['lunch', 'at', 'I', 'twelve', 'have'],
        answer: 'I have lunch at twelve' },
      { type: 'order', vi: 'Mẹ tôi rất bận vào buổi sáng.', words: ['busy', 'in', 'My', 'very', 'morning', 'is', 'mother', 'the'],
        answer: 'My mother is very busy in the morning', alt: ['in the morning My mother is very busy'] }
    ],
    reading: {
      title: "Mai's Day",
      titleVi: 'Một ngày của Mai',
      text: [
        'Mai is a student. She is very busy. She wakes up at six every morning. She brushes her teeth and has breakfast. Then she walks to school.',
        'She has lunch at school with her friends. In the afternoon, she studies English. She often reads books in the library.',
        "In the evening, Mai cooks dinner with her mother. After dinner, she does her homework. She doesn't watch TV. She goes to bed at ten."
      ],
      vi: [
        'Mai là học sinh. Bạn ấy rất bận. Sáng nào Mai cũng thức dậy lúc sáu giờ. Bạn ấy đánh răng và ăn sáng. Sau đó bạn ấy đi bộ đến trường.',
        'Mai ăn trưa ở trường cùng các bạn. Buổi chiều, bạn ấy học tiếng Anh. Mai thường đọc sách trong thư viện.',
        'Buổi tối, Mai nấu bữa tối cùng mẹ. Sau bữa tối, bạn ấy làm bài tập về nhà. Mai không xem TV. Bạn ấy đi ngủ lúc mười giờ.'
      ],
      questions: [
        { q: 'Mai thức dậy lúc mấy giờ?', options: ['5 giờ', '6 giờ', '7 giờ'], answer: 1,
          explain: '"She wakes up at six every morning" — Mai dậy lúc 6 giờ.' },
        { q: 'Mai đến trường bằng cách nào?', options: ['Đi bộ', 'Đi xe buýt', 'Đi xe máy'], answer: 0,
          explain: '"Then she walks to school" — Mai đi bộ đến trường.' },
        { q: 'Buổi chiều Mai làm gì?', options: ['Nấu ăn', 'Học tiếng Anh', 'Xem TV', 'Đi ngủ'], answer: 1,
          explain: '"In the afternoon, she studies English" — buổi chiều Mai học tiếng Anh.' },
        { q: 'Điều nào KHÔNG đúng về Mai?', options: ['Mai nấu bữa tối với mẹ', 'Mai làm bài tập sau bữa tối', 'Mai xem TV vào buổi tối', 'Mai đi ngủ lúc 10 giờ'], answer: 2,
          explain: '"She doesn\'t watch TV" — Mai không xem TV.' }
      ]
    }
  },

  'en-a1-6': {
    vocab: [
      { w: 'juice', ipa: '/dʒus/', vi: 'nước ép (trái cây)', ex: "I'd like some apple juice, please.", exVi: 'Cho tôi một ít nước ép táo.' },
      { w: 'banana', ipa: '/bəˈnænə/', vi: 'quả chuối', ex: 'I eat a banana every morning.', exVi: 'Sáng nào tôi cũng ăn một quả chuối.' },
      { w: 'fish', ipa: '/fɪʃ/', vi: 'cá', ex: 'Do you have any fish?', exVi: 'Bạn có cá không?' },
      { w: 'meat', ipa: '/mit/', vi: 'thịt', ex: "I don't eat meat.", exVi: 'Tôi không ăn thịt.' },
      { w: 'vegetable', ipa: '/ˈvɛdʒtəbəl/', vi: 'rau, rau củ', ex: 'Vegetables are good for you.', exVi: 'Rau củ tốt cho sức khoẻ của bạn.' },
      { w: 'soup', ipa: '/sup/', vi: 'súp, canh', ex: 'Would you like some soup?', exVi: 'Bạn có muốn ăn một ít súp không?' },
      { w: 'sugar', ipa: '/ˈʃʊɡər/', vi: 'đường', ex: 'Coffee with no sugar, please.', exVi: 'Cho tôi cà phê không đường.' },
      { w: 'cheese', ipa: '/tʃiz/', vi: 'phô mai', ex: "We don't have any cheese.", exVi: 'Chúng tôi không có chút phô mai nào.' },
      { w: 'sandwich', ipa: '/ˈsænwɪtʃ/', vi: 'bánh mì kẹp', ex: "I'd like a chicken sandwich, please.", exVi: 'Cho tôi một cái bánh mì kẹp gà.' },
      { w: 'delicious', ipa: '/dɪˈlɪʃəs/', vi: 'ngon', ex: 'This chicken is delicious!', exVi: 'Món gà này ngon quá!' }
    ],
    exercises: [
      { type: 'mc', q: 'Do you have ___ cheese?', options: ['some', 'any', 'a'], answer: 1,
        explain: 'Câu hỏi thông thường dùng any. cheese không đếm được nên không dùng a.' },
      { type: 'mc', q: "I'd like ___ banana, please.", options: ['a', 'an', 'some'], answer: 0,
        explain: 'banana là danh từ đếm được số ít, bắt đầu bằng phụ âm /b/ nên dùng a.' },
      { type: 'fill', q: "We don't have ___ juice today.", answer: ['any'], hint: 'some hay any?',
        explain: 'Câu phủ định dùng any.' },
      { type: 'fill', q: "I'd like ___ soup, please.", answer: ['some'], hint: 'some hay any?',
        explain: 'Câu khẳng định (gọi món) với danh từ không đếm được dùng some.' },
      { type: 'mc', q: 'Từ nào là danh từ KHÔNG đếm được?', options: ['sandwich', 'banana', 'sugar'], answer: 2,
        explain: 'sugar (đường) không đếm được: không nói "two sugars" khi chỉ đường nói chung. sandwich và banana đếm được.' },
      { type: 'fill', q: '___ you like some cheese? — Yes, please.', answer: ['Would'], hint: 'lời mời lịch sự',
        explain: 'Mời ai đó: Would you like…? (Bạn có muốn… không?)' },
      { type: 'order', vi: 'Tôi muốn một cái bánh mì kẹp cá.', words: ['sandwich', "I'd", 'fish', 'like', 'a'],
        answer: "I'd like a fish sandwich" },
      { type: 'order', vi: 'Món súp này ngon quá.', words: ['delicious', 'soup', 'This', 'is'],
        answer: 'This soup is delicious' }
    ],
    reading: {
      title: 'Lunch at a Cafe',
      titleVi: 'Bữa trưa ở quán cà phê',
      text: [
        'It is Sunday. Lan and her brother Huy are hungry. They go to a small cafe near their house.',
        'The waiter asks, "What would you like?" Lan says, "I\'d like a cheese sandwich and some orange juice, please." Huy wants fish soup, but the cafe doesn\'t have any fish today. So he orders some meat and vegetables.',
        'After lunch, they have a banana and a cup of tea with no sugar. "This food is delicious!" Huy says.'
      ],
      vi: [
        'Hôm nay là Chủ nhật. Lan và em trai Huy đang đói. Hai chị em đến một quán cà phê nhỏ gần nhà.',
        'Người phục vụ hỏi: "Anh chị muốn dùng gì ạ?" Lan nói: "Cho tôi một bánh mì kẹp phô mai và một ít nước cam." Huy muốn ăn súp cá, nhưng hôm nay quán không có cá. Vì vậy cậu ấy gọi một ít thịt và rau.',
        'Sau bữa trưa, hai chị em ăn một quả chuối và uống một tách trà không đường. Huy nói: "Đồ ăn ở đây ngon quá!"'
      ],
      questions: [
        { q: 'Vì sao Lan và Huy đến quán cà phê?', options: ['Vì họ đói', 'Vì họ mệt', 'Vì họ buồn'], answer: 0,
          explain: '"Lan and her brother Huy are hungry" — hai chị em đang đói.' },
        { q: 'Lan gọi món gì?', options: ['Súp cá', 'Bánh mì kẹp phô mai và nước cam', 'Thịt và rau', 'Trà không đường'], answer: 1,
          explain: '"I\'d like a cheese sandwich and some orange juice" — Lan gọi bánh mì kẹp phô mai và nước cam.' },
        { q: 'Vì sao Huy không ăn súp cá?', options: ['Vì cậu ấy không thích cá', 'Vì hôm nay quán không có cá', 'Vì súp cá đắt quá'], answer: 1,
          explain: '"the cafe doesn\'t have any fish today" — hôm nay quán không có cá.' },
        { q: 'Hai chị em uống trà như thế nào?', options: ['Có đường', 'Có sữa', 'Không đường'], answer: 2,
          explain: '"a cup of tea with no sugar" — một tách trà không đường.' }
      ]
    }
  }
};
