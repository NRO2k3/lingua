// Bài mới chèn vào lộ trình tiếng Anh A1 (xem cuối SCHEMA.md)
export default [
  // ───────────────────────── sau A1-4: thời tiết, ngày tháng; câu mệnh lệnh ─────────────────────────
  {
    after: 'en-a1-4',
    unit: {
      id: 'en-a1-4b',
      icon: '☀️',
      title: 'Thời tiết & ngày tháng',
      goal: 'Nói thời tiết hôm nay, hỏi ngày tháng và sinh nhật; đưa ra lời dặn, lời nhắc ngắn bằng câu mệnh lệnh.',
      vocab: [
        { w: 'weather', ipa: '/ˈwɛðɚ/', vi: 'thời tiết', ex: "What's the weather like today?", exVi: 'Thời tiết hôm nay thế nào?' },
        { w: 'sunny', ipa: '/ˈsʌni/', vi: 'nắng, có nắng', ex: "It's sunny. Let's go to the park!", exVi: 'Trời nắng. Mình đi công viên đi!' },
        { w: 'rainy', ipa: '/ˈreɪni/', vi: 'có mưa, mưa nhiều', ex: "It's a rainy day. Take an umbrella!", exVi: 'Hôm nay trời mưa. Mang ô theo nhé!' },
        { w: 'cloudy', ipa: '/ˈklaʊdi/', vi: 'nhiều mây, âm u', ex: "It's cloudy, but it isn't cold.", exVi: 'Trời nhiều mây nhưng không lạnh.' },
        { w: 'windy', ipa: '/ˈwɪndi/', vi: 'có gió, nhiều gió', ex: "It's very windy today. Hold your hat!", exVi: 'Hôm nay gió to lắm. Giữ chặt mũ nhé!' },
        { w: 'hot', ipa: '/hɑt/', vi: 'nóng', ex: "It's hot in Ho Chi Minh City today.", exVi: 'Hôm nay ở Thành phố Hồ Chí Minh trời nóng.' },
        { w: 'cold', ipa: '/koʊld/', vi: 'lạnh', ex: "It's cold. Wear a sweater.", exVi: 'Trời lạnh. Mặc áo len vào.' },
        { w: 'snow', ipa: '/snoʊ/', vi: 'tuyết', ex: "Look at the snow! It's beautiful.", exVi: 'Nhìn tuyết kìa! Đẹp quá.' },
        { w: 'summer', ipa: '/ˈsʌmɚ/', vi: 'mùa hè', ex: 'Summer is my favorite season.', exVi: 'Mùa hè là mùa tôi thích nhất.' },
        { w: 'winter', ipa: '/ˈwɪntɚ/', vi: 'mùa đông', ex: 'Winter in Hanoi is cold.', exVi: 'Mùa đông ở Hà Nội lạnh.' },
        { w: 'month', ipa: '/mʌnθ/', vi: 'tháng', ex: 'There are twelve months in a year.', exVi: 'Một năm có mười hai tháng.' },
        { w: 'January', ipa: '/ˈdʒænjuˌɛri/', vi: 'tháng Một', ex: 'My birthday is in January.', exVi: 'Sinh nhật tôi vào tháng Một.' },
        { w: 'Sunday', ipa: '/ˈsʌndeɪ/', vi: 'Chủ nhật', ex: 'Call me on Sunday.', exVi: 'Gọi cho tôi vào Chủ nhật nhé.' },
        { w: 'week', ipa: '/wik/', vi: 'tuần', ex: 'There are seven days in a week.', exVi: 'Một tuần có bảy ngày.' },
        { w: 'birthday', ipa: '/ˈbɝθdeɪ/', vi: 'sinh nhật', ex: 'Happy birthday, Lan!', exVi: 'Chúc mừng sinh nhật Lan!' },
        { w: 'date', ipa: '/deɪt/', vi: 'ngày (trong tháng)', ex: "What's the date today?", exVi: 'Hôm nay là ngày mấy?' },
        { w: 'today', ipa: '/təˈdeɪ/', vi: 'hôm nay', ex: 'Today is Sunday.', exVi: 'Hôm nay là Chủ nhật.' },
        { w: 'first', ipa: '/fɝst/', vi: 'thứ nhất; ngày mùng một', ex: "January first is New Year's Day.", exVi: 'Ngày mùng một tháng Một là ngày đầu năm mới.' },
        { w: 'second', ipa: '/ˈsɛkənd/', vi: 'thứ hai (số thứ tự)', ex: 'February is the second month of the year.', exVi: 'Tháng Hai là tháng thứ hai trong năm.' },
        { w: 'third', ipa: '/θɝd/', vi: 'thứ ba (số thứ tự)', ex: 'My birthday is on May third.', exVi: 'Sinh nhật tôi vào ngày mùng ba tháng Năm.' }
      ],
      grammar: {
        title: 'Câu mệnh lệnh và đại từ tân ngữ (me, him, her, us, them)',
        explain: [
          'Câu mệnh lệnh dùng để yêu cầu, dặn dò, khuyên hoặc chỉ dẫn. Câu bắt đầu ngay bằng động từ nguyên mẫu, không có chủ ngữ: Open the window. Take your umbrella. Thêm please để lịch sự hơn: Please sit down. / Sit down, please.',
          'Phủ định: Don\'t + động từ nguyên mẫu: Don\'t go out. Don\'t forget your hat. Muốn rủ người khác cùng làm: Let\'s + động từ nguyên mẫu: Let\'s go to the beach!',
          'Đại từ tân ngữ đứng SAU động từ hoặc giới từ (for, with, to…): I → me, you → you, he → him, she → her, it → it, we → us, they → them. Ví dụ: Call me. Help her. This cake is for them.',
          'Ngày tháng dùng số thứ tự: first (1st), second (2nd), third (3rd), fourth (4th), fifth (5th)… Hỏi: What\'s the date today? — It\'s January third. Hỏi sinh nhật: When is your birthday? — It\'s on May 2nd (đọc là "May second"). Trước ngày dùng on, trước tháng dùng in.'
        ],
        table: [
          ['Chủ ngữ', 'Tân ngữ', 'Ví dụ'],
          ['I', 'me', 'Call me tomorrow.'],
          ['you', 'you', 'I can help you.'],
          ['he', 'him', 'Help him, please.'],
          ['she', 'her', 'Give her the book.'],
          ['it', 'it', 'Open it!'],
          ['we', 'us', 'Wait for us!'],
          ['they', 'them', 'Ask them.']
        ],
        examples: [
          { t: "It's cold. Wear your coat!", vi: 'Trời lạnh. Mặc áo khoác vào!' },
          { t: "Don't go out. It's very windy.", vi: 'Đừng ra ngoài. Gió to lắm.' },
          { t: 'My birthday is on January third. Call me!', vi: 'Sinh nhật tôi vào mùng ba tháng Một. Gọi cho tôi nhé!' },
          { t: "Let's go to the beach. It's sunny today.", vi: 'Mình đi biển đi. Hôm nay trời nắng.' },
          { t: 'Look at the snow! Take a photo of it.', vi: 'Nhìn tuyết kìa! Chụp một tấm ảnh đi.' }
        ],
        tip: 'Người Việt hay đặt đại từ chủ ngữ sau động từ: "Help I", "Call she" là sai. Đúng: Help me, Call her. Câu mệnh lệnh cũng không thêm to hay You ở đầu: nói "Close the door", không nói "To close the door". Ngày viết May 3 hoặc May 3rd nhưng luôn đọc là "May third".'
      },
      dialogue: [
        { s: 'Ben', t: "Good morning, Lan! Brr, it's cold today.", vi: 'Chào buổi sáng, Lan! Brr, hôm nay lạnh quá.' },
        { s: 'Lan', t: "Yes, it's cold and windy. Wear your jacket!", vi: 'Ừ, trời lạnh và gió to. Mặc áo khoác vào đi!' },
        { s: 'Ben', t: "OK. What's the date today?", vi: 'Được rồi. Hôm nay là ngày mấy nhỉ?' },
        { s: 'Lan', t: "It's January third. Why?", vi: 'Mùng ba tháng Một. Sao thế?' },
        { s: 'Ben', t: "My sister's birthday is on Sunday. Come to her party with us!", vi: 'Sinh nhật em gái mình vào Chủ nhật. Đến dự tiệc với nhà mình nhé!' },
        { s: 'Lan', t: 'Great! Where is it?', vi: 'Tuyệt! Ở đâu thế?' },
        { s: 'Ben', t: "At our house. Don't be late, and please don't tell her. It's a surprise!", vi: 'Ở nhà mình. Đừng đến muộn, và làm ơn đừng nói với em ấy nhé. Đây là bất ngờ đấy!' },
        { s: 'Lan', t: "Don't worry. Call me on Saturday, OK?", vi: 'Đừng lo. Thứ Bảy gọi cho mình nhé?' },
        { s: 'Ben', t: 'OK. See you on Sunday!', vi: 'Được. Hẹn gặp bạn Chủ nhật!' }
      ],
      exercises: [
        { type: 'mc', q: 'Please help ___. My bag is very heavy.', options: ['I', 'my', 'me'], answer: 2,
          explain: 'Sau động từ help cần đại từ tân ngữ: I → me.' },
        { type: 'mc', q: 'This is Mr. Brown. Say hello to ___.', options: ['he', 'him', 'his'], answer: 1,
          explain: 'Sau giới từ to dùng đại từ tân ngữ: he → him.' },
        { type: 'fill', q: "___ go out. It's very cold and windy.", answer: ["Don't", 'Do not', 'Don’t'], hint: 'phủ định của câu mệnh lệnh',
          explain: "Câu mệnh lệnh phủ định: Don't + động từ nguyên mẫu." },
        { type: 'mc', q: "It's very hot today. ___ some water with you.", options: ['To take', 'Takes', 'Take'], answer: 2,
          explain: 'Câu mệnh lệnh bắt đầu bằng động từ nguyên mẫu: Take…' },
        { type: 'fill', q: 'Look at the children! Take a photo of ___.', answer: ['them'], hint: 'đại từ tân ngữ của they',
          explain: 'They → them. Sau giới từ of dùng tân ngữ them.' },
        { type: 'mc', q: 'Số thứ tự của 3 là:', options: ['three', 'third', 'thirty', 'threeth'], answer: 1,
          explain: 'Ba số thứ tự đặc biệt: first (1st), second (2nd), third (3rd). Không có "threeth".' },
        { type: 'fill', q: 'January is the ___ month of the year.', answer: ['first', '1st'], hint: 'số thứ tự của 1',
          explain: 'Tháng Một là tháng thứ nhất → the first month.' },
        { type: 'mc', q: 'Câu nào nghĩa là "Trời nhiều mây"?', options: ["It's sunny.", "It's windy.", "It's cloudy.", "It's hot."], answer: 2,
          explain: 'cloudy = nhiều mây; sunny = nắng; windy = có gió; hot = nóng.' },
        { type: 'fill', q: "___ go to the beach! It's sunny today.", answer: ["Let's", 'Let us', 'Let’s'], hint: 'rủ cùng làm',
          explain: "Rủ người khác cùng làm: Let's + động từ nguyên mẫu." },
        { type: 'mc', q: 'There are seven days in a ___.', options: ['month', 'year', 'date', 'week'], answer: 3,
          explain: 'Một tuần (week) có bảy ngày.' },
        { type: 'mc', q: '"When is your birthday?" — "It\'s ___ March 8th."', options: ['in', 'at', 'on'], answer: 2,
          explain: 'Trước một ngày cụ thể dùng on: on March 8th. Trước tháng (không có ngày) mới dùng in: in March.' },
        { type: 'fill', q: 'We are at the station. Wait for ___!', answer: ['us'], hint: 'đại từ tân ngữ của we',
          explain: 'We → us.' },
        { type: 'order', vi: 'Đừng quên ô của bạn.', words: ['umbrella', 'forget', "Don't", 'your'], answer: "Don't forget your umbrella" },
        { type: 'order', vi: 'Hôm nay là ngày mấy?', words: ['date', "What's", 'today?', 'the'], answer: "What's the date today?" },
        { type: 'order', vi: 'Sinh nhật tôi vào ngày mùng ba tháng Một.', words: ['is', 'birthday', 'on', 'third', 'My', 'January'], answer: 'My birthday is on January third' },
        { type: 'order', vi: 'Hãy gọi cho tôi vào Chủ nhật nhé.', words: ['me', 'Sunday', 'Call', 'on'], answer: 'Call me on Sunday' }
      ],
      reading: {
        title: 'A Message from Sa Pa',
        titleVi: 'Tin nhắn từ Sa Pa',
        text: [
          'Hi Mai! Greetings from Sa Pa. Today is Sunday, January fifth. The weather here is very cold and cloudy. It is windy, too. There is no snow, but my hands and face are very cold!',
          "Sa Pa is beautiful in winter. Come here with your family in summer. It is not hot, and the mountains are green. Don't forget your camera! My birthday is on January ninth. Call me then, OK? Love, Hoa"
        ],
        vi: [
          'Chào Mai! Gửi lời chào từ Sa Pa. Hôm nay là Chủ nhật, mùng năm tháng Một. Thời tiết ở đây rất lạnh và nhiều mây. Trời cũng có gió nữa. Không có tuyết, nhưng tay và mặt mình lạnh cóng!',
          'Sa Pa mùa đông rất đẹp. Mùa hè bạn hãy đến đây cùng gia đình nhé. Trời không nóng và núi rừng xanh mướt. Đừng quên mang máy ảnh! Sinh nhật mình vào ngày mùng chín tháng Một. Hôm đó gọi cho mình nhé? Thương, Hoa'
        ],
        questions: [
          { q: 'Hoa viết tin nhắn vào ngày nào?', options: ['Thứ Bảy, mùng 5 tháng Một', 'Chủ nhật, mùng 5 tháng Một', 'Chủ nhật, mùng 9 tháng Một', 'Thứ Hai, mùng 1 tháng Một'], answer: 1,
            explain: '"Today is Sunday, January fifth."' },
          { q: 'Thời tiết ở Sa Pa hôm đó thế nào?', options: ['Nắng và nóng', 'Có tuyết rơi nhiều', 'Lạnh, nhiều mây và có gió', 'Mưa to'], answer: 2,
            explain: '"The weather here is very cold and cloudy. It is windy, too."' },
          { q: 'Hoa khuyên Mai đến Sa Pa vào mùa nào?', options: ['Mùa hè', 'Mùa đông', 'Tháng Một', 'Đúng sinh nhật Hoa'], answer: 0,
            explain: '"Come here with your family in summer."' },
          { q: 'Hoa muốn Mai làm gì vào ngày mùng 9 tháng Một?', options: ['Đến Sa Pa', 'Mua máy ảnh', 'Gửi bưu thiếp', 'Gọi điện cho Hoa'], answer: 3,
            explain: '"My birthday is on January ninth. Call me then, OK?"' }
        ]
      }
    }
  },

  // ───────────────────────── sau A1-5: nghề nghiệp; can / can't ─────────────────────────
  {
    after: 'en-a1-5',
    unit: {
      id: 'en-a1-5b',
      icon: '👩‍⚕️',
      title: 'Nghề nghiệp & khả năng',
      goal: 'Nói nghề nghiệp, nơi làm việc của mình và người thân; nói mình có thể hoặc không thể làm gì.',
      vocab: [
        { w: 'job', ipa: '/dʒɑb/', vi: 'công việc, nghề', ex: "What's your job? — I'm a nurse.", exVi: 'Bạn làm nghề gì? — Tôi là y tá.' },
        { w: 'doctor', ipa: '/ˈdɑktɚ/', vi: 'bác sĩ', ex: 'The doctor works in a big hospital.', exVi: 'Vị bác sĩ làm việc ở một bệnh viện lớn.' },
        { w: 'nurse', ipa: '/nɝs/', vi: 'y tá', ex: 'My aunt is a nurse. She is very kind.', exVi: 'Dì tôi là y tá. Dì rất tốt bụng.' },
        { w: 'hospital', ipa: '/ˈhɑspɪtəl/', vi: 'bệnh viện', ex: 'Doctors and nurses work in a hospital.', exVi: 'Bác sĩ và y tá làm việc ở bệnh viện.' },
        { w: 'driver', ipa: '/ˈdraɪvɚ/', vi: 'tài xế, người lái xe', ex: 'The bus driver says hello to everyone.', exVi: 'Bác tài xế xe buýt chào tất cả mọi người.' },
        { w: 'farmer', ipa: '/ˈfɑrmɚ/', vi: 'nông dân', ex: 'My grandfather is a farmer. He grows rice.', exVi: 'Ông tôi là nông dân. Ông trồng lúa.' },
        { w: 'engineer', ipa: '/ˌɛndʒəˈnɪr/', vi: 'kỹ sư', ex: 'She is an engineer at a big company.', exVi: 'Cô ấy là kỹ sư ở một công ty lớn.' },
        { w: 'police officer', ipa: '/pəˈlis ˌɔfəsɚ/', vi: 'cảnh sát', ex: 'Ask the police officer for help.', exVi: 'Hãy nhờ chú cảnh sát giúp đỡ.' },
        { w: 'singer', ipa: '/ˈsɪŋɚ/', vi: 'ca sĩ', ex: 'My favorite singer is from Korea.', exVi: 'Ca sĩ tôi thích nhất đến từ Hàn Quốc.' },
        { w: 'waiter', ipa: '/ˈweɪtɚ/', vi: 'bồi bàn, nhân viên phục vụ', ex: 'The waiter brings us the menu.', exVi: 'Anh phục vụ mang thực đơn đến cho chúng tôi.' },
        { w: 'can', ipa: '/kæn/', vi: 'có thể, biết (làm gì)', ex: 'I can speak English.', exVi: 'Tôi biết nói tiếng Anh.' },
        { w: 'swim', ipa: '/swɪm/', vi: 'bơi', ex: 'Can you swim? — Yes, I can.', exVi: 'Bạn biết bơi không? — Có, tôi biết.' },
        { w: 'sing', ipa: '/sɪŋ/', vi: 'hát', ex: 'She can sing very well.', exVi: 'Cô ấy hát rất hay.' },
        { w: 'dance', ipa: '/dæns/', vi: 'nhảy, múa', ex: "I can't dance, but I can sing.", exVi: 'Tôi không biết nhảy, nhưng tôi biết hát.' },
        { w: 'draw', ipa: '/drɔ/', vi: 'vẽ', ex: 'My son can draw cats and dogs.', exVi: 'Con trai tôi biết vẽ mèo và chó.' },
        { w: 'drive', ipa: '/draɪv/', vi: 'lái (xe)', ex: 'My mother can drive a car.', exVi: 'Mẹ tôi biết lái ô tô.' },
        { w: 'ride a bike', ipa: '/raɪd ə baɪk/', vi: 'đi xe đạp', ex: 'Can your little brother ride a bike?', exVi: 'Em trai bạn biết đi xe đạp chưa?' },
        { w: 'speak', ipa: '/spik/', vi: 'nói (một ngôn ngữ)', ex: 'He can speak three languages.', exVi: 'Anh ấy nói được ba thứ tiếng.' },
        { w: 'well', ipa: '/wɛl/', vi: 'giỏi, tốt (trạng từ)', ex: 'Tom can cook very well.', exVi: 'Tom nấu ăn rất giỏi.' },
        { w: 'fast', ipa: '/fæst/', vi: 'nhanh', ex: 'My dog can run very fast.', exVi: 'Con chó của tôi chạy rất nhanh.' }
      ],
      grammar: {
        title: "Can / can't để nói khả năng",
        explain: [
          'Can + động từ nguyên mẫu = có thể, biết (làm gì). Can giống nhau với MỌI chủ ngữ: I can, she can, they can. Không thêm -s cho can và không có to phía sau: She can swim (không nói "She cans swim" hay "She can to swim").',
          'Phủ định: can\'t (= cannot) + động từ nguyên mẫu: I can\'t drive. Câu hỏi: Can + chủ ngữ + động từ? Can you speak English? Trả lời ngắn: Yes, I can. / No, I can\'t.',
          'Muốn nói làm giỏi đến đâu, thêm trạng từ ở cuối câu: well (giỏi), very well (rất giỏi), a little (một chút), fast (nhanh). Ví dụ: He can sing very well. I can speak English a little.',
          'Nói nghề nghiệp: I am + a/an + nghề (I\'m a nurse. She\'s an engineer). Hỏi nghề: What\'s your job? hoặc What do you do? Nói nơi làm việc: He works in a hospital / on a farm / at a restaurant.'
        ],
        table: [
          ['', 'Cấu trúc', 'Ví dụ'],
          ['Khẳng định', 'S + can + V', 'She can draw.'],
          ['Phủ định', "S + can't + V", "I can't swim."],
          ['Câu hỏi', 'Can + S + V?', 'Can you drive?'],
          ['Trả lời ngắn', "Yes, S + can. / No, S + can't.", "Yes, I can. / No, he can't."]
        ],
        examples: [
          { t: 'My father is a driver. He can drive a bus.', vi: 'Bố tôi là tài xế. Bố biết lái xe buýt.' },
          { t: "I can't sing, but I can dance.", vi: 'Tôi không biết hát, nhưng tôi biết nhảy.' },
          { t: 'Can your sister speak Japanese? — Yes, she can.', vi: 'Chị bạn có nói được tiếng Nhật không? — Có.' },
          { t: 'The waiter can speak English very well.', vi: 'Anh phục vụ nói tiếng Anh rất giỏi.' },
          { t: "Can you ride a bike? — No, I can't.", vi: 'Bạn biết đi xe đạp không? — Không, tôi không biết.' }
        ],
        tip: 'Người Việt hay quên a/an trước nghề nghiệp: nói "She is a nurse", không nói "She is nurse". Khi nói nhanh, can đọc nhẹ /kən/ còn can\'t đọc mạnh và rõ /kænt/, nên hãy nghe trọng âm để phân biệt "I can swim" và "I can\'t swim".'
      },
      dialogue: [
        { s: 'Mr. Lee', t: 'Hi, Linh. We need help at the school festival. Can you sing?', vi: 'Chào Linh. Thầy cần người giúp ở lễ hội của trường. Em biết hát không?' },
        { s: 'Linh', t: 'Yes, I can. I can sing and dance.', vi: 'Dạ có. Em biết hát và nhảy ạ.' },
        { s: 'Mr. Lee', t: 'Great! Can you play the guitar, too?', vi: 'Tuyệt! Em có biết chơi ghi-ta nữa không?' },
        { s: 'Linh', t: "No, I can't. But my brother can. He plays very well.", vi: 'Dạ không. Nhưng anh em thì biết. Anh ấy chơi rất giỏi.' },
        { s: 'Mr. Lee', t: 'Wonderful. We also need a driver. Can your brother drive?', vi: 'Tuyệt vời. Thầy cũng cần một người lái xe. Anh em biết lái xe không?' },
        { s: 'Linh', t: "No, he can't. He's only sixteen. But my father is a bus driver!", vi: 'Dạ không. Anh ấy mới mười sáu tuổi. Nhưng bố em là tài xế xe buýt ạ!' },
        { s: 'Mr. Lee', t: 'Perfect! Can he help us on Sunday?', vi: 'Hoàn hảo! Chủ nhật bố em có giúp thầy được không?' },
        { s: 'Linh', t: "I think he can. He doesn't work on Sundays.", vi: 'Em nghĩ là được ạ. Chủ nhật bố em không đi làm.' },
        { s: 'Mr. Lee', t: "Thank you, Linh. You're a big help!", vi: 'Cảm ơn em, Linh. Em giúp thầy nhiều lắm!' }
      ],
      exercises: [
        { type: 'mc', q: 'She ___ swim very well.', options: ['can', 'cans', 'can to'], answer: 0,
          explain: 'Can giống nhau với mọi chủ ngữ và đi thẳng với động từ nguyên mẫu: She can swim.' },
        { type: 'mc', q: "I ___ drive. I'm only fifteen.", options: ['can', "can't", "don't"], answer: 1,
          explain: "Mười lăm tuổi thì chưa được lái xe → can't (không thể)." },
        { type: 'fill', q: '___ you ride a bike? — Yes, I can.', answer: ['Can'], hint: 'câu hỏi về khả năng',
          explain: 'Câu hỏi với can: Can + chủ ngữ + động từ nguyên mẫu?' },
        { type: 'fill', q: 'My brother can ___ three languages. (speak)', answer: ['speak'], hint: 'sau can',
          explain: 'Sau can dùng động từ nguyên mẫu, không thêm -s: can speak.' },
        { type: 'mc', q: '"Can your mother cook?" — "Yes, ___."', options: ['she cans', 'she is', 'she can', "she can't"], answer: 2,
          explain: 'Trả lời ngắn khẳng định: Yes, she can.' },
        { type: 'mc', q: 'A ___ works in a hospital and helps doctors.', options: ['farmer', 'singer', 'waiter', 'nurse'], answer: 3,
          explain: 'Y tá (nurse) làm ở bệnh viện và giúp bác sĩ.' },
        { type: 'mc', q: 'My uncle grows rice and vegetables. He is a ___.', options: ['driver', 'engineer', 'farmer', 'police officer'], answer: 2,
          explain: 'Người trồng lúa, trồng rau là nông dân (farmer).' },
        { type: 'fill', q: 'She is ___ engineer.', answer: ['an'], hint: 'a hay an?',
          explain: 'engineer bắt đầu bằng nguyên âm /ɛ/ nên dùng an: an engineer.' },
        { type: 'mc', q: 'He can run very ___.', options: ['fastly', 'fast', 'good'], answer: 1,
          explain: 'fast vừa là tính từ vừa là trạng từ; không có "fastly". good là tính từ nên không đứng sau run.' },
        { type: 'fill', q: 'Tom can sing very ___. He is a great singer.', answer: ['well'], hint: 'giỏi (trạng từ)',
          explain: 'Trạng từ của good là well: sing very well.' },
        { type: 'mc', q: '"What\'s your job?" — "___"', options: ['I can swim.', "I'm fine, thanks.", "I'm a waiter.", "It's on Sunday."], answer: 2,
          explain: 'Hỏi nghề nghiệp → trả lời bằng nghề: I\'m a waiter.' },
        { type: 'fill', q: 'I ___ draw, but I can sing. (phủ định của can)', answer: ["can't", 'cannot', 'can not', 'can’t'], hint: 'không thể',
          explain: "Phủ định của can là can't / cannot." },
        { type: 'order', vi: 'Bạn có biết bơi không?', words: ['swim?', 'you', 'Can'], answer: 'Can you swim?' },
        { type: 'order', vi: 'Bố tôi là tài xế xe buýt.', words: ['driver', 'is', 'My', 'a', 'father', 'bus'], answer: 'My father is a bus driver' },
        { type: 'order', vi: 'Cô ấy nói tiếng Anh rất giỏi.', words: ['well', 'can', 'She', 'English', 'very', 'speak'], answer: 'She can speak English very well' },
        { type: 'order', vi: 'Tôi không biết nhảy, nhưng chị tôi thì biết.', words: ["can't", 'I', 'dance,', 'but', 'my', 'can', 'sister'], answer: "I can't dance, but my sister can" }
      ],
      reading: {
        title: 'What Can My Family Do?',
        titleVi: 'Gia đình tôi biết làm gì?',
        text: [
          'There are four people in my family. My father is a police officer. He can run very fast, and he can drive a motorbike and a car. My mother is a doctor. She works in a big hospital. She can speak English and French.',
          "My sister Hanh is a singer. She can sing and dance very well. And me? I am a student. I can draw, but I can't sing. I want to be an engineer."
        ],
        vi: [
          'Gia đình tôi có bốn người. Bố tôi là cảnh sát. Bố chạy rất nhanh, và bố biết lái cả xe máy lẫn ô tô. Mẹ tôi là bác sĩ. Mẹ làm việc ở một bệnh viện lớn. Mẹ nói được tiếng Anh và tiếng Pháp.',
          'Chị gái tôi, Hạnh, là ca sĩ. Chị hát và nhảy rất giỏi. Còn tôi? Tôi là học sinh. Tôi biết vẽ nhưng không biết hát. Tôi muốn trở thành kỹ sư.'
        ],
        questions: [
          { q: 'Bố của người viết làm nghề gì?', options: ['Bác sĩ', 'Cảnh sát', 'Kỹ sư', 'Ca sĩ'], answer: 1,
            explain: '"My father is a police officer."' },
          { q: 'Mẹ người viết nói được những thứ tiếng nào?', options: ['Tiếng Anh và tiếng Pháp', 'Tiếng Anh và tiếng Nhật', 'Chỉ tiếng Việt', 'Tiếng Pháp và tiếng Hàn'], answer: 0,
            explain: '"She can speak English and French."' },
          { q: 'Điều nào ĐÚNG về Hạnh?', options: ['Chị ấy là học sinh', 'Chị ấy biết lái ô tô', 'Chị ấy hát và nhảy rất giỏi', 'Chị ấy làm ở bệnh viện'], answer: 2,
            explain: '"She can sing and dance very well."' },
          { q: 'Người viết muốn làm nghề gì?', options: ['Ca sĩ', 'Cảnh sát', 'Bác sĩ', 'Kỹ sư'], answer: 3,
            explain: '"I want to be an engineer."' }
        ]
      }
    }
  },

  // ───────────────────────── sau A1-6: cơ thể & quần áo; hiện tại tiếp diễn ─────────────────────────
  {
    after: 'en-a1-6',
    unit: {
      id: 'en-a1-6b',
      icon: '👕',
      title: 'Cơ thể & quần áo',
      goal: 'Gọi tên bộ phận cơ thể và quần áo; nói ai đó đang mặc gì, đang làm gì ngay lúc này.',
      vocab: [
        { w: 'body', ipa: '/ˈbɑdi/', vi: 'cơ thể', ex: 'Our body needs water every day.', exVi: 'Cơ thể chúng ta cần nước mỗi ngày.' },
        { w: 'head', ipa: '/hɛd/', vi: 'đầu', ex: 'He is touching his head.', exVi: 'Anh ấy đang sờ lên đầu.' },
        { w: 'hair', ipa: '/hɛr/', vi: 'tóc', ex: 'She has long black hair.', exVi: 'Cô ấy có mái tóc đen dài.' },
        { w: 'eye', ipa: '/aɪ/', vi: 'mắt', ex: 'My baby sister has big brown eyes.', exVi: 'Em gái nhỏ của tôi có đôi mắt nâu to.' },
        { w: 'ear', ipa: '/ɪr/', vi: 'tai', ex: 'A rabbit has long ears.', exVi: 'Con thỏ có đôi tai dài.' },
        { w: 'nose', ipa: '/noʊz/', vi: 'mũi', ex: 'The clown has a big red nose.', exVi: 'Chú hề có cái mũi đỏ to.' },
        { w: 'mouth', ipa: '/maʊθ/', vi: 'miệng', ex: "Don't talk with food in your mouth.", exVi: 'Đừng nói chuyện khi đang ngậm thức ăn trong miệng.' },
        { w: 'hand', ipa: '/hænd/', vi: 'bàn tay', ex: 'Wash your hands before lunch.', exVi: 'Rửa tay trước bữa trưa nhé.' },
        { w: 'leg', ipa: '/lɛɡ/', vi: 'chân, cẳng chân', ex: 'A spider has eight legs.', exVi: 'Con nhện có tám cái chân.' },
        { w: 'foot', ipa: '/fʊt/', vi: 'bàn chân (số nhiều: feet)', ex: "I'm standing on one foot!", exVi: 'Tôi đang đứng bằng một chân!' },
        { w: 'wear', ipa: '/wɛr/', vi: 'mặc, đội, đeo', ex: "I'm wearing a white T-shirt today.", exVi: 'Hôm nay tôi mặc áo phông trắng.' },
        { w: 'T-shirt', ipa: '/ˈtiʃɝt/', vi: 'áo phông', ex: 'This T-shirt is too big for me.', exVi: 'Cái áo phông này quá rộng với tôi.' },
        { w: 'jeans', ipa: '/dʒinz/', vi: 'quần bò, quần jean', ex: 'My jeans are blue.', exVi: 'Quần bò của tôi màu xanh.' },
        { w: 'dress', ipa: '/drɛs/', vi: 'váy liền, đầm', ex: 'She is wearing a beautiful red dress.', exVi: 'Cô ấy đang mặc một chiếc đầm đỏ rất đẹp.' },
        { w: 'jacket', ipa: '/ˈdʒækɪt/', vi: 'áo khoác (ngắn)', ex: "It's windy. Put on your jacket.", exVi: 'Trời gió đấy. Mặc áo khoác vào.' },
        { w: 'hat', ipa: '/hæt/', vi: 'mũ (có vành)', ex: 'He is wearing a big hat in the sun.', exVi: 'Anh ấy đang đội một chiếc mũ rộng vành dưới nắng.' },
        { w: 'skirt', ipa: '/skɝt/', vi: 'chân váy', ex: 'The girls are wearing white shirts and blue skirts.', exVi: 'Các bạn nữ đang mặc áo sơ mi trắng và chân váy xanh.' },
        { w: 'socks', ipa: '/sɑks/', vi: 'tất, vớ', ex: 'Where are my socks?', exVi: 'Tất của tôi đâu rồi?' },
        { w: 'coat', ipa: '/koʊt/', vi: 'áo khoác dài, áo măng tô', ex: "It's very cold. Wear your coat.", exVi: 'Trời rất lạnh. Mặc áo măng tô vào.' },
        { w: 'shorts', ipa: '/ʃɔrts/', vi: 'quần soóc, quần đùi', ex: "It's hot, so I'm wearing shorts.", exVi: 'Trời nóng nên tôi đang mặc quần soóc.' }
      ],
      grammar: {
        title: 'Thì hiện tại tiếp diễn (Present Continuous): am / is / are + V-ing',
        explain: [
          'Thì hiện tại tiếp diễn diễn tả việc ĐANG xảy ra ngay lúc nói, thường đi với now, right now, at the moment, Look!, Listen!. Cấu trúc: am / is / are + động từ thêm -ing. Ví dụ: I am reading. She is wearing a red dress.',
          'Phủ định: am / is / are + not + V-ing (I\'m not sleeping. He isn\'t wearing a hat). Câu hỏi: đưa am / is / are lên đầu câu: Are you working now? — Yes, I am. Với từ để hỏi: What are you doing? What is she wearing?',
          'Cách thêm -ing: thường thêm -ing (wear → wearing, read → reading); tận cùng là e câm thì bỏ e (dance → dancing, ride → riding); một nguyên âm + một phụ âm ở cuối thì gấp đôi phụ âm (swim → swimming, run → running, sit → sitting).',
          'So sánh với hiện tại đơn: hiện tại đơn nói thói quen, việc lặp lại (I wear a uniform every day); hiện tại tiếp diễn nói việc đang diễn ra lúc này (Today I\'m wearing jeans).'
        ],
        table: [
          ['Chủ ngữ', 'Khẳng định', 'Phủ định', 'Câu hỏi'],
          ['I', "I'm wearing", "I'm not wearing", 'Am I wearing…?'],
          ['he / she / it', "She's dancing", "She isn't dancing", 'Is she dancing?'],
          ['you / we / they', "They're running", "They aren't running", 'Are they running?']
        ],
        examples: [
          { t: 'Look! The baby is touching her nose.', vi: 'Nhìn kìa! Em bé đang sờ mũi.' },
          { t: "I'm wearing a jacket because it's cold.", vi: 'Tôi đang mặc áo khoác vì trời lạnh.' },
          { t: "What are you doing? — I'm washing my hands.", vi: 'Bạn đang làm gì thế? — Tôi đang rửa tay.' },
          { t: "He isn't wearing a hat right now.", vi: 'Lúc này anh ấy không đội mũ.' },
          { t: "Are they swimming? — No, they aren't. They're playing on the beach.", vi: 'Họ đang bơi à? — Không. Họ đang chơi trên bãi biển.' }
        ],
        tip: 'Người Việt hay quên am / is / are: "She wearing a dress" là sai, phải nói "She is wearing a dress". Cũng đừng dùng hiện tại tiếp diễn cho thói quen: "I\'m getting up at 6 every day" → "I get up at 6 every day". Lưu ý: jeans, shorts, socks luôn ở số nhiều: My jeans are blue.'
      },
      dialogue: [
        { s: 'Anna', t: "Hi, Minh! I'm at the park. Where are you?", vi: 'Chào Minh! Mình đang ở công viên. Bạn đang ở đâu?' },
        { s: 'Minh', t: "I'm near the lake. I'm sitting on a bench.", vi: 'Mình ở gần hồ. Mình đang ngồi trên một băng ghế.' },
        { s: 'Anna', t: 'There are a lot of people here. What are you wearing?', vi: 'Ở đây đông người quá. Bạn đang mặc gì thế?' },
        { s: 'Minh', t: "I'm wearing a blue jacket, jeans and a black hat.", vi: 'Mình mặc áo khoác xanh, quần bò và đội mũ đen.' },
        { s: 'Anna', t: 'Are you holding a red bag?', vi: 'Bạn có đang cầm một cái túi màu đỏ không?' },
        { s: 'Minh', t: "No, I'm not. Wait… I can see you! You're wearing a yellow dress, right?", vi: 'Không. Khoan đã… Mình thấy bạn rồi! Bạn đang mặc váy vàng phải không?' },
        { s: 'Anna', t: "Yes! And I'm waving my hand now.", vi: 'Đúng rồi! Và mình đang vẫy tay đây.' },
        { s: 'Minh', t: "OK, I'm standing up. Look to your left!", vi: 'Được, mình đang đứng dậy. Nhìn sang bên trái của bạn đi!' },
        { s: 'Anna', t: 'Ah, there you are! Hi!', vi: 'À, bạn đây rồi! Chào!' }
      ],
      exercises: [
        { type: 'mc', q: 'Look! The children ___ in the park.', options: ['play', 'are playing', 'is playing', 'plays'], answer: 1,
          explain: 'Look! cho thấy việc đang xảy ra; children là số nhiều → are playing.' },
        { type: 'mc', q: 'She ___ a red dress today.', options: ['wear', 'wearing', 'is wearing', 'are wearing'], answer: 2,
          explain: 'Việc đang diễn ra hôm nay; she đi với is → is wearing.' },
        { type: 'fill', q: 'I ___ reading a book now. (to be)', answer: ['am'], hint: 'I + ?',
          explain: 'I đi với am: I am reading.' },
        { type: 'fill', q: 'They are ___ in the sea. (swim)', answer: ['swimming'], hint: 'gấp đôi phụ âm cuối',
          explain: 'swim kết thúc bằng một nguyên âm + một phụ âm → gấp đôi m: swimming.' },
        { type: 'mc', q: '___ you wearing a hat? — Yes, I am.', options: ['Do', 'Is', 'Am', 'Are'], answer: 3,
          explain: 'Câu hỏi hiện tại tiếp diễn với you: Are you + V-ing?' },
        { type: 'fill', q: 'He ___ wearing a coat. He is wearing a jacket. (phủ định của is)', answer: ["isn't", 'is not', 'isn’t'], hint: 'is + not',
          explain: "Phủ định: is not (isn't) + V-ing." },
        { type: 'mc', q: 'Every day I ___ a uniform, but today I am wearing jeans.', options: ['am wearing', 'wear', 'wearing', 'wears'], answer: 1,
          explain: 'Every day là thói quen → hiện tại đơn: I wear.' },
        { type: 'mc', q: 'We see with our ___.', options: ['ears', 'hands', 'eyes', 'feet'], answer: 2,
          explain: 'Chúng ta nhìn bằng mắt (eyes).' },
        { type: 'mc', q: 'Số nhiều của foot là:', options: ['feet', 'foots', 'feets', 'footes'], answer: 0,
          explain: 'foot là danh từ bất quy tắc: one foot → two feet.' },
        { type: 'fill', q: "What are you ___? — I'm washing my hands. (do)", answer: ['doing'], hint: 'V-ing',
          explain: 'What are you doing? = Bạn đang làm gì?' },
        { type: 'fill', q: 'She is ___ with her friends. (dance)', answer: ['dancing'], hint: 'bỏ e câm',
          explain: 'dance kết thúc bằng e câm → bỏ e rồi thêm -ing: dancing.' },
        { type: 'mc', q: '"What is he wearing?" — "___"', options: ["He's a driver.", 'Yes, he is.', "He's wearing shorts and a T-shirt.", 'He wear every day.'], answer: 2,
          explain: 'Hỏi đang mặc gì → trả lời bằng hiện tại tiếp diễn: He\'s wearing…' },
        { type: 'order', vi: 'Tôi đang mặc một chiếc áo phông trắng.', words: ['wearing', 'white', "I'm", 'a', 'T-shirt'], answer: "I'm wearing a white T-shirt" },
        { type: 'order', vi: 'Bạn đang làm gì vậy?', words: ['doing?', 'are', 'What', 'you'], answer: 'What are you doing?' },
        { type: 'order', vi: 'Cô ấy không đội mũ.', words: ['wearing', 'She', 'a', "isn't", 'hat'], answer: "She isn't wearing a hat" },
        { type: 'order', vi: 'Hãy rửa tay trước bữa trưa.', words: ['hands', 'Wash', 'lunch', 'your', 'before'], answer: 'Wash your hands before lunch' }
      ],
      reading: {
        title: 'A Photo at the Beach',
        titleVi: 'Bức ảnh ở bãi biển',
        text: [
          'This is a photo of my family at the beach. It is a hot, sunny day. My father is wearing shorts and a big hat. He is reading a book. My mother is wearing a long blue dress and sunglasses.',
          'My little brother is not wearing a T-shirt. He is running and laughing. My sister and I are swimming in the sea. Our grandparents are sitting under a tree. They are eating fruit and talking.'
        ],
        vi: [
          'Đây là bức ảnh gia đình tôi ở bãi biển. Hôm đó là một ngày nắng nóng. Bố tôi mặc quần soóc và đội một chiếc mũ to. Bố đang đọc sách. Mẹ tôi mặc một chiếc đầm dài màu xanh và đeo kính râm.',
          'Em trai tôi không mặc áo phông. Em đang chạy và cười. Chị tôi và tôi đang bơi dưới biển. Ông bà tôi đang ngồi dưới một gốc cây. Ông bà đang ăn trái cây và trò chuyện.'
        ],
        questions: [
          { q: 'Bức ảnh được chụp ở đâu?', options: ['Trong công viên', 'Ở bãi biển', 'Ở nhà ông bà', 'Trên núi'], answer: 1,
            explain: '"This is a photo of my family at the beach."' },
          { q: 'Trong ảnh, bố đang làm gì?', options: ['Đang bơi', 'Đang chạy', 'Đang đọc sách', 'Đang ăn trái cây'], answer: 2,
            explain: '"He is reading a book."' },
          { q: 'Ai đang bơi dưới biển?', options: ['Người viết và chị gái', 'Bố và mẹ', 'Em trai', 'Ông bà'], answer: 0,
            explain: '"My sister and I are swimming in the sea."' },
          { q: 'Điều nào ĐÚNG?', options: ['Mẹ đang mặc quần soóc', 'Trời đang mưa', 'Ông bà đang bơi', 'Em trai không mặc áo phông'], answer: 3,
            explain: '"My little brother is not wearing a T-shirt."' }
        ]
      }
    }
  }
];
