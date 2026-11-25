export default {
  'en-a2-1': {
    vocab: [
      { w: 'calendar', ipa: '/ˈkæləndər/', vi: 'lịch (treo tường, để bàn)', ex: 'I write all my appointments on the calendar.', exVi: 'Tôi ghi tất cả các cuộc hẹn lên lịch.' },
      { w: 'schedule', ipa: '/ˈskedʒuːl/', vi: 'lịch trình, thời gian biểu', ex: 'My schedule is very busy on Monday.', exVi: 'Lịch trình của tôi rất bận vào thứ Hai.' },
      { w: 'midnight', ipa: '/ˈmɪdnaɪt/', vi: 'nửa đêm (12 giờ đêm)', ex: 'The party ends at midnight.', exVi: 'Bữa tiệc kết thúc lúc nửa đêm.' },
      { w: 'noon', ipa: '/nuːn/', vi: 'buổi trưa (12 giờ trưa)', ex: 'Let\'s meet at noon in front of the bank.', exVi: 'Mình gặp nhau lúc 12 giờ trưa trước ngân hàng nhé.' },
      { w: 'lunchtime', ipa: '/ˈlʌntʃtaɪm/', vi: 'giờ ăn trưa', ex: 'I usually call my mom at lunchtime.', exVi: 'Tôi thường gọi cho mẹ vào giờ ăn trưa.' },
      { w: 'weekday', ipa: '/ˈwiːkdeɪ/', vi: 'ngày thường (thứ Hai – thứ Sáu)', ex: 'The shop opens at 8 a.m. on weekdays.', exVi: 'Cửa hàng mở cửa lúc 8 giờ sáng vào các ngày thường.' },
      { w: 'alarm clock', ipa: '/əˈlɑːrm klɑːk/', vi: 'đồng hồ báo thức', ex: 'My alarm clock rings at six o\'clock.', exVi: 'Đồng hồ báo thức của tôi reo lúc sáu giờ.' },
      { w: 'timetable', ipa: '/ˈtaɪmteɪbəl/', vi: 'bảng giờ (tàu, xe); thời khoá biểu', ex: 'Let\'s check the bus timetable first.', exVi: 'Hãy xem bảng giờ xe buýt trước đã.' },
      { w: 'daily', ipa: '/ˈdeɪli/', vi: 'hằng ngày', ex: 'Walking is part of my daily routine.', exVi: 'Đi bộ là một phần trong thói quen hằng ngày của tôi.' },
      { w: 'twice', ipa: '/twaɪs/', vi: 'hai lần', ex: 'I go to the gym twice a week.', exVi: 'Tôi đi tập gym hai lần một tuần.' }
    ],
    exercises: [
      { type: 'mc', q: 'The movie starts ___ midnight.', options: ['in', 'on', 'at'], answer: 2, explain: 'midnight là một thời điểm cụ thể → at midnight.' },
      { type: 'mc', q: 'We have English class ___ weekdays.', options: ['in', 'on', 'at'], answer: 1, explain: 'Ngày trong tuần (kể cả weekdays) dùng on: on weekdays.' },
      { type: 'fill', q: 'Let\'s have lunch together ___ noon.', answer: ['at'], hint: 'giới từ + thời điểm', explain: 'noon (12 giờ trưa) là thời điểm cụ thể → at noon.' },
      { type: 'fill', q: 'I check my email ___ a day: in the morning and in the evening.', answer: ['twice'], hint: 'hai lần', explain: 'Hai lần = twice (twice a day: hai lần một ngày).' },
      { type: 'mc', q: 'What time is it? — It\'s 8:45. It\'s a quarter ___ nine.', options: ['past', 'to', 'at'], answer: 1, explain: '8:45 = chín giờ kém mười lăm → a quarter to nine.' },
      { type: 'mc', q: 'I always write my appointments on my ___ so I don\'t forget them.', options: ['calendar', 'alarm clock', 'lunchtime'], answer: 0, explain: 'Ghi lịch hẹn lên lịch → calendar.' },
      { type: 'order', vi: 'Đồng hồ báo thức của tôi reo lúc 6 giờ.', words: ['rings', 'My', 'at', 'clock', 'alarm', 'six'], answer: 'My alarm clock rings at six' },
      { type: 'order', vi: 'Lịch trình của bạn có trống vào thứ Sáu không?', words: ['schedule', 'Is', 'on', 'your', 'Friday?', 'free'], answer: 'Is your schedule free on Friday?' }
    ],
    reading: {
      title: 'Linh\'s Busy Week',
      titleVi: 'Một tuần bận rộn của Linh',
      text: [
        'Linh is a nurse in Hanoi, and her schedule changes every week. She writes everything on a big calendar in her kitchen. On weekdays, her alarm clock rings at a quarter past five. She starts work at six o\'clock in the morning and has a short break at noon.',
        'This week is different. On Wednesday, she works in the evening and finishes at midnight. On Thursday, she has a dentist appointment at two p.m., so she checks the bus timetable the night before. The bus only comes twice an hour.',
        'Linh is very busy, but she always finds time for her daily walk in the park. On the weekend, she is free, so she is meeting her best friend at lunchtime on Sunday.'
      ],
      vi: [
        'Linh là y tá ở Hà Nội, và lịch làm việc của cô thay đổi mỗi tuần. Cô ghi mọi thứ lên một tờ lịch lớn trong bếp. Vào các ngày thường, đồng hồ báo thức của cô reo lúc năm giờ mười lăm. Cô bắt đầu làm việc lúc sáu giờ sáng và nghỉ giải lao ngắn lúc 12 giờ trưa.',
        'Tuần này thì khác. Vào thứ Tư, cô làm ca tối và kết thúc lúc nửa đêm. Vào thứ Năm, cô có lịch hẹn nha sĩ lúc hai giờ chiều, nên cô xem bảng giờ xe buýt từ tối hôm trước. Xe buýt chỉ có hai chuyến mỗi giờ.',
        'Linh rất bận, nhưng cô luôn dành thời gian cho buổi đi bộ hằng ngày trong công viên. Cuối tuần cô rảnh, nên cô sẽ gặp người bạn thân vào giờ ăn trưa ngày Chủ nhật.'
      ],
      questions: [
        { q: 'Vào ngày thường, đồng hồ báo thức của Linh reo lúc mấy giờ?', options: ['5 giờ', '5 giờ 15', '5 giờ 45', '6 giờ'], answer: 1, explain: '"A quarter past five" = năm giờ mười lăm.' },
        { q: 'Linh ghi lịch làm việc ở đâu?', options: ['Trong điện thoại', 'Trong sổ tay', 'Trên tờ lịch lớn trong bếp', 'Trên bảng ở bệnh viện'], answer: 2, explain: 'Bài đọc: "She writes everything on a big calendar in her kitchen."' },
        { q: 'Vì sao Linh xem bảng giờ xe buýt vào tối thứ Tư?', options: ['Vì cô có hẹn nha sĩ vào thứ Năm', 'Vì cô đi làm muộn', 'Vì cô đi du lịch', 'Vì cô gặp bạn vào Chủ nhật'], answer: 0, explain: 'Cô có lịch hẹn nha sĩ lúc 2 giờ chiều thứ Năm, nên xem bảng giờ từ tối hôm trước.' },
        { q: 'Linh sẽ làm gì vào Chủ nhật?', options: ['Đi làm ca tối', 'Gặp bạn thân vào giờ ăn trưa', 'Đi khám nha sĩ', 'Ở nhà ngủ cả ngày'], answer: 1, explain: '"She is meeting her best friend at lunchtime on Sunday."' }
      ]
    }
  },

  'en-a2-2': {
    vocab: [
      { w: 'receipt', ipa: '/rɪˈsiːt/', vi: 'hoá đơn, biên lai', ex: 'Could I have the receipt, please?', exVi: 'Cho tôi xin hoá đơn được không?' },
      { w: 'bargain', ipa: '/ˈbɑːrɡən/', vi: 'món hời, mua được giá rẻ', ex: 'This jacket was only ten dollars. What a bargain!', exVi: 'Cái áo khoác này chỉ có mười đô. Đúng là món hời!' },
      { w: 'customer', ipa: '/ˈkʌstəmər/', vi: 'khách hàng', ex: 'There are many customers in the store today.', exVi: 'Hôm nay có nhiều khách hàng trong cửa hàng.' },
      { w: 'wallet', ipa: '/ˈwɑːlɪt/', vi: 'ví (đựng tiền)', ex: 'I can\'t find my wallet. Can I pay by phone?', exVi: 'Tôi không tìm thấy ví. Tôi trả bằng điện thoại được không?' },
      { w: 'mall', ipa: '/mɔːl/', vi: 'trung tâm thương mại', ex: 'We often go shopping at the mall on Sunday.', exVi: 'Chúng tôi thường đi mua sắm ở trung tâm thương mại vào Chủ nhật.' },
      { w: 'shop assistant', ipa: '/ˈʃɑːp əˌsɪstənt/', vi: 'nhân viên bán hàng', ex: 'The shop assistant helped me find a bigger size.', exVi: 'Nhân viên bán hàng đã giúp tôi tìm cỡ lớn hơn.' },
      { w: 'sweater', ipa: '/ˈswetər/', vi: 'áo len', ex: 'How much is this red sweater?', exVi: 'Cái áo len đỏ này bao nhiêu tiền?' },
      { w: 'scarf', ipa: '/skɑːrf/', vi: 'khăn quàng cổ', ex: 'She bought a warm scarf for the winter.', exVi: 'Cô ấy đã mua một chiếc khăn quàng ấm cho mùa đông.' },
      { w: 'coin', ipa: '/kɔɪn/', vi: 'đồng xu', ex: 'I only have some coins in my pocket.', exVi: 'Tôi chỉ có vài đồng xu trong túi.' },
      { w: 'cost', ipa: '/kɔːst/', vi: 'có giá, tốn (tiền)', ex: 'These shoes cost fifty dollars.', exVi: 'Đôi giày này có giá năm mươi đô.' }
    ],
    exercises: [
      { type: 'mc', q: '___ does this scarf cost?', options: ['How many', 'How much', 'What much'], answer: 1, explain: 'Hỏi giá dùng How much: How much does it cost?' },
      { type: 'mc', q: 'How ___ coins do you have?', options: ['much', 'many', 'often'], answer: 1, explain: 'coins là danh từ đếm được số nhiều → How many.' },
      { type: 'fill', q: 'How much ___ these sweaters? — They\'re 30 dollars.', answer: ['are'], hint: 'is hay are?', explain: 'these sweaters là số nhiều → How much are…?' },
      { type: 'fill', q: '___ you give me the receipt, please?', answer: ['Could', 'Can', 'Would', 'Will'], hint: 'nhờ lịch sự', explain: 'Nhờ ai làm gì lịch sự: Could you…? / Would you…? (Can you…? / Will you…? cũng được nhưng kém lịch sự hơn).' },
      { type: 'mc', q: 'This sweater is only $5. It\'s a real ___!', options: ['bargain', 'receipt', 'wallet'], answer: 0, explain: 'Mua được giá rất rẻ → a bargain (món hời).' },
      { type: 'mc', q: 'The ___ helped me find my size.', options: ['customer', 'shop assistant', 'mall'], answer: 1, explain: 'Người giúp khách trong cửa hàng là nhân viên bán hàng: shop assistant.' },
      { type: 'order', vi: 'Chiếc khăn quàng này bao nhiêu tiền?', words: ['scarf?', 'How', 'this', 'is', 'much'], answer: 'How much is this scarf?' },
      { type: 'order', vi: 'Bạn có thể giúp tôi tìm ví được không?', words: ['find', 'Could', 'me', 'wallet?', 'you', 'help', 'my'], answer: 'Could you help me find my wallet?' }
    ],
    reading: {
      title: 'A Bargain at the Mall',
      titleVi: 'Món hời ở trung tâm thương mại',
      text: [
        'Minh is at the mall with his sister. He needs a warm sweater for the winter. In the first store, he asks a shop assistant, "How much is this gray sweater?" "It\'s eighty dollars," she answers. That is too expensive for Minh.',
        'In the second store, there is a big sale. Everything is half price, so a nice blue sweater costs only thirty dollars. "What a bargain!" says his sister. Minh asks, "Could I try it on, please?" It is the right size, and he looks great in it.',
        'At the counter, there are a lot of customers. Minh takes some cash out of his wallet and pays. He also buys a soft scarf for his mother. The shop assistant gives him a receipt and some coins as change.'
      ],
      vi: [
        'Minh đang ở trung tâm thương mại cùng chị gái. Anh cần một chiếc áo len ấm cho mùa đông. Ở cửa hàng đầu tiên, anh hỏi nhân viên bán hàng: "Cái áo len màu xám này bao nhiêu tiền?" "Tám mươi đô," cô ấy trả lời. Giá đó quá đắt với Minh.',
        'Ở cửa hàng thứ hai đang có đợt giảm giá lớn. Mọi thứ đều giảm một nửa, nên một chiếc áo len xanh đẹp chỉ có giá ba mươi đô. "Đúng là món hời!" chị anh nói. Minh hỏi: "Tôi mặc thử được không ạ?" Áo vừa cỡ, và anh mặc trông rất đẹp.',
        'Ở quầy thanh toán có rất nhiều khách hàng. Minh lấy ít tiền mặt từ trong ví ra và trả tiền. Anh cũng mua một chiếc khăn quàng mềm cho mẹ. Nhân viên bán hàng đưa anh hoá đơn và vài đồng xu tiền thối.'
      ],
      questions: [
        { q: 'Minh đến trung tâm thương mại để mua gì?', options: ['Một đôi giày', 'Một chiếc áo len ấm', 'Một chiếc ví', 'Một chiếc áo sơ mi'], answer: 1, explain: '"He needs a warm sweater for the winter."' },
        { q: 'Vì sao Minh không mua chiếc áo ở cửa hàng đầu tiên?', options: ['Vì áo không vừa', 'Vì áo quá đắt', 'Vì cửa hàng đóng cửa', 'Vì anh không thích màu xám'], answer: 1, explain: 'Áo giá 80 đô, "That is too expensive for Minh."' },
        { q: 'Chiếc áo len xanh có giá bao nhiêu?', options: ['80 đô', '40 đô', '30 đô', '15 đô'], answer: 2, explain: '"A nice blue sweater costs only thirty dollars."' },
        { q: 'Minh trả tiền bằng cách nào?', options: ['Bằng thẻ tín dụng', 'Bằng điện thoại', 'Bằng tiền mặt', 'Chị gái trả giúp'], answer: 2, explain: '"Minh takes some cash out of his wallet and pays."' }
      ]
    }
  },

  'en-a2-3': {
    vocab: [
      { w: 'apartment', ipa: '/əˈpɑːrtmənt/', vi: 'căn hộ', ex: 'There are two bedrooms in our apartment.', exVi: 'Căn hộ của chúng tôi có hai phòng ngủ.' },
      { w: 'balcony', ipa: '/ˈbælkəni/', vi: 'ban công', ex: 'There are some flowers on the balcony.', exVi: 'Có vài chậu hoa ngoài ban công.' },
      { w: 'armchair', ipa: '/ˈɑːrmtʃer/', vi: 'ghế bành', ex: 'My grandfather is sitting in the armchair.', exVi: 'Ông tôi đang ngồi trên ghế bành.' },
      { w: 'cupboard', ipa: '/ˈkʌbərd/', vi: 'tủ (bát đĩa, đồ dùng)', ex: 'The plates are in the cupboard.', exVi: 'Bát đĩa ở trong tủ.' },
      { w: 'furniture', ipa: '/ˈfɜːrnɪtʃər/', vi: 'đồ đạc, đồ nội thất', ex: 'There isn\'t much furniture in my room.', exVi: 'Trong phòng tôi không có nhiều đồ đạc.' },
      { w: 'upstairs', ipa: '/ˌʌpˈsterz/', vi: 'ở tầng trên, lên tầng', ex: 'The bathroom is upstairs.', exVi: 'Phòng tắm ở tầng trên.' },
      { w: 'downstairs', ipa: '/ˌdaʊnˈsterz/', vi: 'ở tầng dưới, xuống tầng', ex: 'Is there a kitchen downstairs?', exVi: 'Ở tầng dưới có bếp không?' },
      { w: 'opposite', ipa: '/ˈɑːpəzɪt/', vi: 'đối diện; trái ngược', ex: 'The bank is opposite the post office.', exVi: 'Ngân hàng ở đối diện bưu điện.' },
      { w: 'traffic light', ipa: '/ˈtræfɪk laɪt/', vi: 'đèn giao thông', ex: 'Turn right at the traffic light.', exVi: 'Rẽ phải ở chỗ đèn giao thông.' },
      { w: 'entrance', ipa: '/ˈentrəns/', vi: 'lối vào, cổng vào', ex: 'The entrance is next to the café.', exVi: 'Lối vào ở bên cạnh quán cà phê.' }
    ],
    exercises: [
      { type: 'mc', q: 'There ___ a lot of furniture in the living room.', options: ['is', 'are', 'be'], answer: 0, explain: 'furniture là danh từ không đếm được → There is.' },
      { type: 'mc', q: '___ there any armchairs in your house?', options: ['Is', 'Are', 'Do'], answer: 1, explain: 'armchairs số nhiều → Are there any…?' },
      { type: 'fill', q: 'There ___ two bedrooms upstairs.', answer: ['are'], hint: 'is hay are?', explain: 'two bedrooms số nhiều → There are.' },
      { type: 'fill', q: 'Go straight and turn left ___ the traffic light.', answer: ['at'], hint: 'giới từ, chỉ một điểm', explain: 'Rẽ ở một điểm cụ thể dùng at: at the traffic light.' },
      { type: 'mc', q: 'The bank is ___ the school, on the other side of the street.', options: ['opposite', 'upstairs', 'under'], answer: 0, explain: 'Ở phía bên kia đường, đối diện → opposite.' },
      { type: 'mc', q: 'We keep cups and plates in the kitchen ___.', options: ['balcony', 'cupboard', 'entrance'], answer: 1, explain: 'Cốc, đĩa cất trong tủ: cupboard.' },
      { type: 'order', vi: 'Có một ban công nhỏ ở tầng trên.', words: ['a', 'balcony', 'There', 'upstairs', 'small', 'is'], answer: 'There is a small balcony upstairs', alt: ['upstairs There is a small balcony'] },
      { type: 'order', vi: 'Lối vào ở đối diện công viên.', words: ['opposite', 'entrance', 'The', 'park', 'is', 'the'], answer: 'The entrance is opposite the park' }
    ],
    reading: {
      title: 'Welcome to My House',
      titleVi: 'Chào mừng đến nhà mình',
      text: [
        'Hi, I\'m Mai. My family lives in a small house in Da Nang. Downstairs, there is a living room and a kitchen. There isn\'t much furniture in the living room, just a sofa, an old armchair and a TV. In the kitchen, there is a big cupboard for plates and bowls.',
        'Upstairs, there are two bedrooms and a bathroom. My bedroom has a small balcony with flowers. I love sitting there in the evening. My aunt doesn\'t live in a house. She lives in an apartment near the beach.',
        'Do you want to visit me? From the bus stop, go straight and turn left at the traffic light. My house is opposite a small park, next to a coffee shop. The entrance is blue, so you can\'t miss it!'
      ],
      vi: [
        'Chào bạn, mình là Mai. Gia đình mình sống trong một ngôi nhà nhỏ ở Đà Nẵng. Ở tầng dưới có phòng khách và nhà bếp. Phòng khách không có nhiều đồ đạc, chỉ có một bộ sofa, một chiếc ghế bành cũ và một cái TV. Trong bếp có một cái tủ lớn để đựng bát đĩa.',
        'Ở tầng trên có hai phòng ngủ và một phòng tắm. Phòng ngủ của mình có một ban công nhỏ trồng hoa. Mình thích ngồi ở đó vào buổi tối. Dì của mình không sống trong nhà riêng. Dì sống trong một căn hộ gần biển.',
        'Bạn có muốn đến thăm mình không? Từ trạm xe buýt, đi thẳng rồi rẽ trái ở chỗ đèn giao thông. Nhà mình ở đối diện một công viên nhỏ, cạnh một quán cà phê. Cổng vào màu xanh dương, nên bạn không thể nhầm được đâu!'
      ],
      questions: [
        { q: 'Ở tầng dưới nhà Mai có những phòng nào?', options: ['Phòng khách và nhà bếp', 'Hai phòng ngủ và phòng tắm', 'Phòng khách và phòng ngủ', 'Nhà bếp và phòng tắm'], answer: 0, explain: '"Downstairs, there is a living room and a kitchen."' },
        { q: 'Mai thích ngồi ở đâu vào buổi tối?', options: ['Trên ghế bành', 'Ngoài ban công', 'Trong bếp', 'Ở công viên'], answer: 1, explain: 'Phòng cô có ban công nhỏ, "I love sitting there in the evening."' },
        { q: 'Dì của Mai sống ở đâu?', options: ['Cùng nhà với Mai', 'Trong một ngôi nhà ở Hà Nội', 'Trong một căn hộ gần biển', 'Đối diện công viên'], answer: 2, explain: '"She lives in an apartment near the beach."' },
        { q: 'Từ trạm xe buýt đến nhà Mai, bạn phải làm gì?', options: ['Rẽ phải ở đèn giao thông', 'Đi thẳng rồi rẽ trái ở đèn giao thông', 'Đi qua công viên', 'Rẽ trái ở quán cà phê'], answer: 1, explain: '"Go straight and turn left at the traffic light."' }
      ]
    }
  },

  'en-a2-4': {
    vocab: [
      { w: 'barbecue', ipa: '/ˈbɑːrbɪkjuː/', vi: 'tiệc nướng ngoài trời; nướng', ex: 'We had a barbecue in the garden on Sunday.', exVi: 'Chúng tôi đã tổ chức tiệc nướng trong vườn vào Chủ nhật.' },
      { w: 'museum', ipa: '/mjuˈziːəm/', vi: 'bảo tàng', ex: 'We visited the history museum last weekend.', exVi: 'Chúng tôi đã tham quan bảo tàng lịch sử vào cuối tuần trước.' },
      { w: 'exhibition', ipa: '/ˌeksɪˈbɪʃən/', vi: 'cuộc triển lãm', ex: 'I saw a great photo exhibition yesterday.', exVi: 'Hôm qua tôi đã xem một cuộc triển lãm ảnh rất hay.' },
      { w: 'camping', ipa: '/ˈkæmpɪŋ/', vi: 'cắm trại', ex: 'They went camping in the mountains.', exVi: 'Họ đã đi cắm trại trên núi.' },
      { w: 'countryside', ipa: '/ˈkʌntrisaɪd/', vi: 'vùng nông thôn, miền quê', ex: 'My grandparents live in the countryside.', exVi: 'Ông bà tôi sống ở miền quê.' },
      { w: 'seaside', ipa: '/ˈsiːsaɪd/', vi: 'bờ biển, vùng ven biển', ex: 'We spent two days at the seaside.', exVi: 'Chúng tôi đã ở bờ biển hai ngày.' },
      { w: 'relax', ipa: '/rɪˈlæks/', vi: 'thư giãn, nghỉ ngơi', ex: 'I stayed home and relaxed on Saturday.', exVi: 'Thứ Bảy tôi ở nhà và nghỉ ngơi.' },
      { w: 'wedding', ipa: '/ˈwedɪŋ/', vi: 'đám cưới', ex: 'My cousin\'s wedding was on Sunday.', exVi: 'Đám cưới của anh họ tôi diễn ra vào Chủ nhật.' },
      { w: 'invite', ipa: '/ɪnˈvaɪt/', vi: 'mời', ex: 'Nam invited me to his birthday party.', exVi: 'Nam đã mời tôi đến tiệc sinh nhật của cậu ấy.' },
      { w: 'bored', ipa: '/bɔːrd/', vi: 'chán, buồn chán', ex: 'I was bored because it rained all day.', exVi: 'Tôi thấy chán vì trời mưa cả ngày.' }
    ],
    exercises: [
      { type: 'mc', q: 'Last Saturday, my friends ___ me to a barbecue.', options: ['invite', 'invited', 'inviting'], answer: 1, explain: 'Last Saturday → quá khứ đơn; invite tận cùng e chỉ thêm -d: invited.' },
      { type: 'mc', q: '___ you go to the museum yesterday?', options: ['Do', 'Did', 'Were'], answer: 1, explain: 'Câu hỏi quá khứ đơn với động từ thường: Did + chủ ngữ + V nguyên mẫu.' },
      { type: 'fill', q: 'We ___ camping in the countryside last weekend. (go)', answer: ['went'], hint: 'quá khứ bất quy tắc', explain: 'go → went.' },
      { type: 'fill', q: 'I didn\'t ___ to the wedding because I was sick. (go)', answer: ['go'], hint: 'sau didn\'t', explain: 'Sau didn\'t dùng động từ nguyên mẫu: didn\'t go.' },
      { type: 'mc', q: 'The film was very long, and I ___ bored.', options: ['was', 'were', 'am'], answer: 0, explain: 'Chủ ngữ I ở quá khứ dùng was.' },
      { type: 'mc', q: 'They ___ a great time at the seaside two weeks ago.', options: ['have', 'had', 'haved'], answer: 1, explain: 'two weeks ago → quá khứ; have → had (bất quy tắc).' },
      { type: 'order', vi: 'Chúng tôi đã xem một cuộc triển lãm ở bảo tàng.', words: ['an', 'We', 'at', 'exhibition', 'saw', 'the', 'museum'], answer: 'We saw an exhibition at the museum' },
      { type: 'order', vi: 'Bạn đã nghỉ ngơi vào cuối tuần trước phải không?', words: ['relax', 'Did', 'last', 'you', 'weekend?'], answer: 'Did you relax last weekend?' }
    ],
    reading: {
      title: 'A Weekend in the Countryside',
      titleVi: 'Một cuối tuần ở miền quê',
      text: [
        'Last weekend, my friends invited me to go camping in the countryside. We left the city early on Saturday morning and arrived at a small village two hours later. The air was fresh and everything was very quiet. We put up our tent near a lake and had a barbecue in the evening.',
        'On Sunday morning, we visited a small museum about the history of the village. There was an exhibition of old farm tools and photos. My friend Nam was bored, but I found it really interesting.',
        'In the afternoon, we relaxed by the lake and didn\'t use our phones at all. We came home late on Sunday night. I was tired, but it was a wonderful weekend.'
      ],
      vi: [
        'Cuối tuần trước, các bạn mời tôi đi cắm trại ở miền quê. Chúng tôi rời thành phố từ sáng sớm thứ Bảy và đến một ngôi làng nhỏ hai tiếng sau đó. Không khí trong lành và mọi thứ rất yên tĩnh. Chúng tôi dựng lều gần một cái hồ và tổ chức tiệc nướng vào buổi tối.',
        'Sáng Chủ nhật, chúng tôi tham quan một bảo tàng nhỏ về lịch sử của ngôi làng. Ở đó có triển lãm nông cụ và ảnh xưa. Bạn tôi là Nam thấy chán, nhưng tôi lại thấy rất thú vị.',
        'Buổi chiều, chúng tôi thư giãn bên hồ và hoàn toàn không dùng điện thoại. Chúng tôi về nhà muộn vào tối Chủ nhật. Tôi mệt, nhưng đó là một cuối tuần tuyệt vời.'
      ],
      questions: [
        { q: 'Người viết đã đi đâu vào cuối tuần trước?', options: ['Đi biển', 'Đi cắm trại ở miền quê', 'Đi dự đám cưới', 'Ở nhà nghỉ ngơi'], answer: 1, explain: '"My friends invited me to go camping in the countryside."' },
        { q: 'Họ làm gì vào tối thứ Bảy?', options: ['Đi xem triển lãm', 'Đi bơi ở hồ', 'Tổ chức tiệc nướng', 'Về thành phố'], answer: 2, explain: '"We ... had a barbecue in the evening."' },
        { q: 'Nam cảm thấy thế nào khi ở bảo tàng?', options: ['Rất thú vị', 'Buồn chán', 'Mệt mỏi', 'Sợ hãi'], answer: 1, explain: '"My friend Nam was bored."' },
        { q: 'Câu nào ĐÚNG với buổi chiều Chủ nhật?', options: ['Họ chơi điện thoại cả buổi', 'Họ thư giãn bên hồ', 'Họ về nhà sớm', 'Họ đi thăm bảo tàng lần nữa'], answer: 1, explain: '"We relaxed by the lake and didn\'t use our phones at all." Họ về nhà muộn.' }
      ]
    }
  },

  'en-a2-5': {
    vocab: [
      { w: 'badminton', ipa: '/ˈbædmɪntən/', vi: 'cầu lông', ex: 'I often play badminton after work.', exVi: 'Tôi thường chơi cầu lông sau giờ làm.' },
      { w: 'chess', ipa: '/tʃes/', vi: 'cờ vua', ex: 'My grandfather loves playing chess.', exVi: 'Ông tôi rất thích chơi cờ vua.' },
      { w: 'cycling', ipa: '/ˈsaɪklɪŋ/', vi: 'đạp xe', ex: 'We go cycling around the lake on Sundays.', exVi: 'Chúng tôi đạp xe quanh hồ vào các ngày Chủ nhật.' },
      { w: 'hiking', ipa: '/ˈhaɪkɪŋ/', vi: 'đi bộ đường dài, leo núi', ex: 'She enjoys hiking in the mountains.', exVi: 'Cô ấy thích đi bộ đường dài trên núi.' },
      { w: 'table tennis', ipa: '/ˈteɪbəl ˌtenɪs/', vi: 'bóng bàn', ex: 'Do you want to play table tennis with me?', exVi: 'Bạn có muốn chơi bóng bàn với tôi không?' },
      { w: 'photography', ipa: '/fəˈtɑːɡrəfi/', vi: 'nhiếp ảnh, chụp ảnh', ex: 'Photography is my favorite hobby.', exVi: 'Nhiếp ảnh là sở thích yêu thích của tôi.' },
      { w: 'board game', ipa: '/ˈbɔːrd ɡeɪm/', vi: 'trò chơi cờ bàn (board game)', ex: 'We sometimes play board games on rainy days.', exVi: 'Thỉnh thoảng chúng tôi chơi board game vào những ngày mưa.' },
      { w: 'video game', ipa: '/ˈvɪdioʊ ɡeɪm/', vi: 'trò chơi điện tử', ex: 'My brother never stops playing video games.', exVi: 'Em trai tôi chơi trò chơi điện tử không ngừng.' },
      { w: 'competition', ipa: '/ˌkɑːmpəˈtɪʃən/', vi: 'cuộc thi', ex: 'He won a swimming competition last year.', exVi: 'Năm ngoái anh ấy đã thắng một cuộc thi bơi.' },
      { w: 'athlete', ipa: '/ˈæθliːt/', vi: 'vận động viên', ex: 'Athletes usually train every day.', exVi: 'Các vận động viên thường tập luyện mỗi ngày.' }
    ],
    exercises: [
      { type: 'mc', q: 'My dad enjoys ___ chess with me.', options: ['play', 'playing', 'to playing'], answer: 1, explain: 'Sau enjoy dùng V-ing: playing.' },
      { type: 'mc', q: 'We often go ___ on Sunday mornings.', options: ['cycle', 'cycling', 'cycles'], answer: 1, explain: 'go + V-ing cho hoạt động: go cycling.' },
      { type: 'fill', q: 'Do you like ___ in the mountains? (hike)', answer: ['hiking'], hint: 'like + V-ing, bỏ e', explain: 'Sau like dùng V-ing; hike bỏ e câm → hiking.' },
      { type: 'fill', q: 'I ___ table tennis with my friends after school.', answer: ['play'], hint: 'play / go / do?', explain: 'Môn có bóng dùng play: play table tennis.' },
      { type: 'mc', q: 'She ___ plays video games. She thinks they are boring.', options: ['always', 'usually', 'never'], answer: 2, explain: 'Cô ấy thấy chán → không bao giờ chơi: never.' },
      { type: 'mc', q: 'How often ___ you play badminton? — Twice a week.', options: ['do', 'are', 'does'], answer: 0, explain: 'Hỏi tần suất: How often do you + V?' },
      { type: 'order', vi: 'Anh ấy thường tham gia các cuộc thi.', words: ['takes', 'He', 'competitions', 'part', 'often', 'in'], answer: 'He often takes part in competitions' },
      { type: 'order', vi: 'Tôi thích chụp ảnh vào thời gian rảnh.', words: ['love', 'free', 'I', 'photography', 'doing', 'my', 'in', 'time'], answer: 'I love doing photography in my free time' }
    ],
    reading: {
      title: 'My Free Time',
      titleVi: 'Thời gian rảnh của tôi',
      text: [
        'My name is Khoa, and I\'m a university student in Hanoi. In my free time, I love doing sports. I usually go cycling around West Lake on Saturday mornings, and I often play badminton with my roommate after class. I\'m not a great athlete, but I enjoy being active.',
        'When it rains, I stay home and play chess or board games with my family. My little brother loves playing video games, but I don\'t like sitting in front of a screen all day.',
        'My new hobby is photography. I sometimes go hiking in the mountains with my camera and take photos of nature. Next month, there is a photo competition at my university. I hope I can win a prize!'
      ],
      vi: [
        'Mình tên là Khoa, sinh viên đại học ở Hà Nội. Vào thời gian rảnh, mình rất thích chơi thể thao. Mình thường đạp xe quanh Hồ Tây vào sáng thứ Bảy, và hay chơi cầu lông với bạn cùng phòng sau giờ học. Mình không phải vận động viên giỏi, nhưng mình thích vận động.',
        'Khi trời mưa, mình ở nhà chơi cờ vua hoặc board game với gia đình. Em trai mình rất thích chơi trò chơi điện tử, nhưng mình không thích ngồi trước màn hình cả ngày.',
        'Sở thích mới của mình là nhiếp ảnh. Thỉnh thoảng mình đi bộ đường dài lên núi với máy ảnh và chụp ảnh thiên nhiên. Tháng sau, trường mình có một cuộc thi ảnh. Mình hy vọng có thể đoạt giải!'
      ],
      questions: [
        { q: 'Khoa thường làm gì vào sáng thứ Bảy?', options: ['Chơi cầu lông', 'Đạp xe quanh Hồ Tây', 'Chơi cờ vua', 'Đi bộ lên núi'], answer: 1, explain: '"I usually go cycling around West Lake on Saturday mornings."' },
        { q: 'Khi trời mưa, Khoa làm gì?', options: ['Chơi trò chơi điện tử', 'Đi bơi', 'Chơi cờ vua hoặc board game với gia đình', 'Đi chụp ảnh'], answer: 2, explain: '"I stay home and play chess or board games with my family."' },
        { q: 'Vì sao Khoa không thích trò chơi điện tử?', options: ['Vì quá đắt', 'Vì không thích ngồi trước màn hình cả ngày', 'Vì em trai không cho chơi', 'Vì không có máy tính'], answer: 1, explain: '"I don\'t like sitting in front of a screen all day."' },
        { q: 'Sở thích mới của Khoa là gì?', options: ['Nhiếp ảnh', 'Bóng bàn', 'Nấu ăn', 'Chơi đàn guitar'], answer: 0, explain: '"My new hobby is photography."' }
      ]
    }
  },

  'en-a2-6': {
    vocab: [
      { w: 'suitcase', ipa: '/ˈsuːtkeɪs/', vi: 'va li', ex: 'I\'m going to buy a new suitcase for my trip.', exVi: 'Tôi định mua một chiếc va li mới cho chuyến đi.' },
      { w: 'flight', ipa: '/flaɪt/', vi: 'chuyến bay', ex: 'Our flight leaves at 7 a.m. tomorrow.', exVi: 'Chuyến bay của chúng tôi khởi hành lúc 7 giờ sáng mai.' },
      { w: 'guidebook', ipa: '/ˈɡaɪdbʊk/', vi: 'sách hướng dẫn du lịch', ex: 'She is reading a guidebook about Japan.', exVi: 'Cô ấy đang đọc sách hướng dẫn du lịch về Nhật Bản.' },
      { w: 'tour', ipa: '/tʊr/', vi: 'chuyến tham quan, tour', ex: 'We\'re going to take a boat tour of Ha Long Bay.', exVi: 'Chúng tôi sẽ đi tour thuyền tham quan vịnh Hạ Long.' },
      { w: 'tourist', ipa: '/ˈtʊrɪst/', vi: 'khách du lịch', ex: 'Hoi An is full of tourists in the summer.', exVi: 'Hội An đông khách du lịch vào mùa hè.' },
      { w: 'journey', ipa: '/ˈdʒɜːrni/', vi: 'hành trình, chuyến đi', ex: 'The journey from Hanoi to Hue takes about twelve hours by train.', exVi: 'Hành trình từ Hà Nội đến Huế mất khoảng mười hai tiếng bằng tàu hoả.' },
      { w: 'adventure', ipa: '/ədˈventʃər/', vi: 'cuộc phiêu lưu, trải nghiệm mới lạ', ex: 'Traveling alone will be a big adventure.', exVi: 'Đi du lịch một mình sẽ là một cuộc phiêu lưu lớn.' },
      { w: 'pack', ipa: '/pæk/', vi: 'đóng gói, xếp đồ (vào va li)', ex: 'I\'ll pack my bag tonight.', exVi: 'Tối nay tôi sẽ xếp đồ vào túi.' },
      { w: 'someday', ipa: '/ˈsʌmdeɪ/', vi: 'một ngày nào đó', ex: 'Someday I will visit Paris.', exVi: 'Một ngày nào đó tôi sẽ đến thăm Paris.' },
      { w: 'perhaps', ipa: '/pərˈhæps/', vi: 'có lẽ, có thể', ex: 'Perhaps we will go to the beach on Sunday.', exVi: 'Có lẽ Chủ nhật chúng tôi sẽ đi biển.' }
    ],
    exercises: [
      { type: 'mc', q: 'I bought the tickets yesterday. We ___ fly to Bangkok next Friday.', options: ['will', 'are going to', 'going to'], answer: 1, explain: 'Kế hoạch đã quyết định từ trước (đã mua vé) → be going to.' },
      { type: 'mc', q: '"This suitcase is very heavy." — "Don\'t worry. I ___ carry it for you."', options: ['\'ll', '\'m going to', 'am'], answer: 0, explain: 'Đề nghị giúp đỡ, quyết định ngay lúc nói → will (I\'ll).' },
      { type: 'fill', q: 'She is going ___ pack her suitcase tonight.', answer: ['to'], hint: 'be going ___ + V', explain: 'Cấu trúc: be going to + động từ nguyên mẫu.' },
      { type: 'fill', q: 'Look at the storm! Our flight ___ leave on time. (will not, viết tắt)', answer: ['won\'t', 'won’t'], hint: 'will not viết tắt', explain: 'will not viết tắt là won\'t: Our flight won\'t leave on time.' },
      { type: 'mc', q: '___ you going to take a tour of the old town?', options: ['Will', 'Are', 'Do'], answer: 1, explain: 'Câu hỏi với be going to: Are you going to…?' },
      { type: 'mc', q: 'I think the journey ___ long, but it will be fun.', options: ['is going', 'will be', 'be'], answer: 1, explain: 'Dự đoán theo ý kiến cá nhân (I think…) → will be.' },
      { type: 'order', vi: 'Có lẽ chúng tôi sẽ mua một cuốn sách hướng dẫn du lịch.', words: ['will', 'Perhaps', 'a', 'we', 'guidebook', 'buy'], answer: 'Perhaps we will buy a guidebook' },
      { type: 'order', vi: 'Một ngày nào đó tôi sẽ đi du lịch vòng quanh thế giới.', words: ['travel', 'Someday', 'the', 'I', 'world', 'will', 'around'], answer: 'Someday I will travel around the world' }
    ],
    reading: {
      title: 'Plans for the Summer',
      titleVi: 'Kế hoạch cho mùa hè',
      text: [
        'Hoa is going to finish her final exams next week, and she has big plans for the summer. She is going to travel to Thailand with two friends. They already bought their flight tickets, and they booked a cheap hotel in Bangkok.',
        'Hoa is going to pack her suitcase on Friday night. She also bought a guidebook and read about the city. The girls are going to take a boat tour on the river and visit some famous temples. Perhaps they will try street food at a night market, too.',
        'Hoa thinks the journey will be a great adventure. It\'s her first trip abroad, so she is a little nervous. "Don\'t worry," her mother says. "You\'ll have a wonderful time!" Someday, Hoa wants to travel around the world.'
      ],
      vi: [
        'Tuần sau Hoa sẽ thi xong kỳ thi cuối kỳ, và cô có nhiều kế hoạch lớn cho mùa hè. Cô sẽ đi du lịch Thái Lan cùng hai người bạn. Họ đã có vé máy bay rồi, và đã đặt một khách sạn giá rẻ ở Bangkok.',
        'Hoa định xếp đồ vào va li vào tối thứ Sáu. Cô cũng đã mua một cuốn sách hướng dẫn du lịch và đọc về thành phố. Các cô gái định đi tour thuyền trên sông và tham quan vài ngôi chùa nổi tiếng. Có lẽ họ cũng sẽ thử đồ ăn đường phố ở một chợ đêm.',
        'Hoa nghĩ chuyến đi sẽ là một cuộc phiêu lưu tuyệt vời. Đây là lần đầu cô ra nước ngoài, nên cô hơi lo lắng. "Đừng lo," mẹ cô nói. "Con sẽ có khoảng thời gian tuyệt vời!" Một ngày nào đó, Hoa muốn đi du lịch vòng quanh thế giới.'
      ],
      questions: [
        { q: 'Hoa sẽ đi du lịch ở đâu vào mùa hè?', options: ['Nhật Bản', 'Thái Lan', 'Hàn Quốc', 'Đà Nẵng'], answer: 1, explain: '"She is going to travel to Thailand with two friends."' },
        { q: 'Khi nào Hoa định xếp đồ vào va li?', options: ['Tối thứ Sáu', 'Sáng thứ Bảy', 'Tuần sau', 'Sau kỳ thi một tháng'], answer: 0, explain: '"Hoa is going to pack her suitcase on Friday night."' },
        { q: 'Điều nào CHƯA chắc chắn trong kế hoạch của các cô gái?', options: ['Đi tour thuyền trên sông', 'Tham quan chùa', 'Ăn đồ ăn đường phố ở chợ đêm', 'Ở khách sạn giá rẻ'], answer: 2, explain: 'Bài dùng "Perhaps they will try street food" — "perhaps" (có lẽ) cho thấy chưa chắc chắn.' },
        { q: 'Vì sao Hoa hơi lo lắng?', options: ['Vì cô chưa mua vé', 'Vì đây là lần đầu cô ra nước ngoài', 'Vì cô thi không tốt', 'Vì mẹ không cho đi'], answer: 1, explain: '"It\'s her first trip abroad, so she is a little nervous."' }
      ]
    }
  }
};
