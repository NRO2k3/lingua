// Phần bổ sung bài học tiếng Anh cấp B1: từ vựng mới, bài tập thêm và bài đọc hiểu.
export default {
  'en-b1-1': {
    vocab: [
      { w: 'reservation', ipa: '/ˌrɛzərˈveɪʃən/', vi: 'sự đặt chỗ trước', ex: 'I have already made a reservation for two nights.', exVi: 'Tôi đã đặt chỗ trước cho hai đêm rồi.' },
      { w: 'departure', ipa: '/dɪˈpɑrtʃər/', vi: 'sự khởi hành, giờ đi', ex: 'Please arrive at the airport two hours before departure.', exVi: 'Vui lòng có mặt ở sân bay hai tiếng trước giờ khởi hành.' },
      { w: 'arrival', ipa: '/əˈraɪvəl/', vi: 'sự đến nơi, giờ đến', ex: 'Our arrival time has just changed to 9 p.m.', exVi: 'Giờ đến của chúng ta vừa đổi thành 9 giờ tối.' },
      { w: 'visa', ipa: '/ˈvizə/', vi: 'thị thực (visa)', ex: 'Have you applied for your visa yet?', exVi: 'Bạn đã xin visa chưa?' },
      { w: 'currency', ipa: '/ˈkɜrənsi/', vi: 'tiền tệ, đơn vị tiền', ex: 'The local currency in Japan is the yen.', exVi: 'Đơn vị tiền tệ ở Nhật Bản là yên.' },
      { w: 'insurance', ipa: '/ɪnˈʃʊrəns/', vi: 'bảo hiểm', ex: 'You should always buy travel insurance before a long trip.', exVi: 'Bạn luôn nên mua bảo hiểm du lịch trước một chuyến đi dài.' },
      { w: 'hostel', ipa: '/ˈhɑstəl/', vi: 'nhà nghỉ giá rẻ (thường ở phòng chung)', ex: 'We stayed in a cheap hostel near the old town.', exVi: 'Chúng tôi ở một nhà nghỉ giá rẻ gần phố cổ.' },
      { w: 'airline', ipa: '/ˈɛrˌlaɪn/', vi: 'hãng hàng không', ex: 'This airline has never lost my luggage.', exVi: 'Hãng hàng không này chưa bao giờ làm thất lạc hành lý của tôi.' },
      { w: 'guide', ipa: '/ɡaɪd/', vi: 'hướng dẫn viên; dẫn đường', ex: 'Our guide showed us the most famous temples.', exVi: 'Hướng dẫn viên dẫn chúng tôi đi xem những ngôi chùa nổi tiếng nhất.' },
      { w: 'explore', ipa: '/ɪkˈsplɔr/', vi: 'khám phá', ex: 'I have explored many small villages in the north.', exVi: 'Tôi đã khám phá nhiều ngôi làng nhỏ ở miền Bắc.' }
    ],
    exercises: [
      { type: 'mc', q: 'Have you ___ explored the old town of Hoi An?', options: ['yet', 'since', 'ever', 'ago'], answer: 2,
        explain: 'Câu hỏi về trải nghiệm “đã bao giờ…chưa” dùng Have you ever + V3.' },
      { type: 'fill', q: 'I have already made a ___ at a hostel near the beach.', answer: ['reservation', 'booking'], hint: 'sự đặt chỗ trước',
        explain: 'Make a reservation / make a booking = đặt chỗ trước (phòng, bàn, vé).' },
      { type: 'mc', q: 'Which document do you often need to enter another country?', options: ['a visa', 'a currency', 'an airline', 'a departure'], answer: 0,
        explain: 'Visa (thị thực) là giấy tờ cho phép bạn nhập cảnh vào một nước khác.' },
      { type: 'fill', q: 'Has she bought travel ___ yet?', answer: ['insurance'], hint: 'bảo hiểm',
        explain: 'Travel insurance = bảo hiểm du lịch. Yet đứng cuối câu hỏi ở thì hiện tại hoàn thành.' },
      { type: 'mc', q: 'We ___ just changed our money into the local currency.', options: ['has', 'are', 'did', 'have'], answer: 3,
        explain: 'Chủ ngữ we đi với have; just đứng giữa have và V3.' },
      { type: 'fill', q: 'Our guide has ___ us the most beautiful places in the city. (show)', answer: ['shown', 'showed'], hint: 'V3 của show',
        explain: 'Sau has dùng V3: show → showed → shown.' },
      { type: 'order', vi: 'Hãng hàng không đã đổi giờ khởi hành.', words: ['departure', 'The', 'changed', 'time', 'airline', 'the', 'has'],
        answer: 'The airline has changed the departure time' },
      { type: 'order', vi: 'Bạn đã khám phá thành phố chưa?', words: ['explored', 'yet?', 'Have', 'the', 'city', 'you'],
        answer: 'Have you explored the city yet?' }
    ],
    reading: {
      title: 'My First Trip Abroad Alone',
      titleVi: 'Chuyến đi nước ngoài một mình đầu tiên của tôi',
      text: [
        "My name is Linh, and I have just come back from Japan. I have traveled a lot in Vietnam, but I have never gone abroad alone before. So I prepared everything carefully before my departure. I applied for a visa two months early, and I bought travel insurance online.",
        "I didn't want to spend too much money on accommodation, so I made a reservation at a small hostel in Kyoto. It was cheap, clean and full of friendly travelers. On the first evening, I changed some money into the local currency, because many small shops there don't accept cards.",
        "For three days, I explored the city on foot. I joined a free walking tour, and our guide showed us old temples and quiet gardens. I also bought a lot of souvenirs for my family. I have already shown my photos to all my friends!",
        "There was only one problem. On the way home, the airline delayed my flight for five hours, so my arrival in Hanoi was very late. But I wasn't angry at all. In fact, I have already started to write the itinerary for my next trip."
      ],
      vi: [
        'Tên tôi là Linh, và tôi vừa từ Nhật Bản trở về. Tôi đã đi du lịch nhiều nơi ở Việt Nam, nhưng trước đây tôi chưa bao giờ ra nước ngoài một mình. Vì vậy tôi chuẩn bị mọi thứ thật cẩn thận trước khi khởi hành. Tôi xin visa sớm hai tháng và mua bảo hiểm du lịch trên mạng.',
        'Tôi không muốn tốn quá nhiều tiền cho chỗ ở, nên tôi đặt phòng ở một nhà nghỉ giá rẻ nhỏ ở Kyoto. Nơi đó rẻ, sạch sẽ và đầy những du khách thân thiện. Vào buổi tối đầu tiên, tôi đổi một ít tiền sang tiền địa phương, vì nhiều cửa hàng nhỏ ở đó không nhận thẻ.',
        'Trong ba ngày, tôi đi bộ khám phá thành phố. Tôi tham gia một tour đi bộ miễn phí, và hướng dẫn viên dẫn chúng tôi đi xem những ngôi chùa cổ và những khu vườn yên tĩnh. Tôi cũng mua rất nhiều quà lưu niệm cho gia đình. Tôi đã khoe ảnh với tất cả bạn bè rồi!',
        'Chỉ có một vấn đề. Trên đường về, hãng hàng không hoãn chuyến bay của tôi năm tiếng, nên tôi về đến Hà Nội rất muộn. Nhưng tôi không hề tức giận. Thật ra, tôi đã bắt đầu lên lịch trình cho chuyến đi tiếp theo rồi.'
      ],
      questions: [
        { q: 'Linh đã làm gì trước khi khởi hành?', options: ['Đổi tiền sang yên ở Việt Nam', 'Xin visa và mua bảo hiểm du lịch', 'Đặt một khách sạn sang trọng', 'Mua quà lưu niệm cho gia đình'], answer: 1,
          explain: 'Đoạn 1: “I applied for a visa two months early, and I bought travel insurance online.”' },
        { q: 'Vì sao Linh đổi tiền sang tiền địa phương?', options: ['Vì nhà nghỉ yêu cầu trả tiền mặt', 'Vì nhiều cửa hàng nhỏ không nhận thẻ', 'Vì tour đi bộ phải trả phí', 'Vì thẻ của cô bị mất'], answer: 1,
          explain: 'Đoạn 2: “many small shops there don\'t accept cards”.' },
        { q: 'Chuyện gì xảy ra trên đường về?', options: ['Linh bị mất hành lý', 'Linh lỡ chuyến bay', 'Hãng hàng không huỷ chuyến bay', 'Chuyến bay bị hoãn năm tiếng'], answer: 3,
          explain: 'Đoạn 4: “the airline delayed my flight for five hours”.' },
        { q: 'Có thể suy ra điều gì về cảm nhận của Linh sau chuyến đi?', options: ['Cô rất thích chuyến đi và muốn tiếp tục đi du lịch', 'Cô hối hận vì đã đi một mình', 'Cô sẽ không bao giờ đi máy bay nữa', 'Cô thấy Nhật Bản quá đắt đỏ'], answer: 0,
          explain: 'Cô không tức giận vì chuyến bay bị hoãn và đã bắt đầu lên lịch trình cho chuyến đi tiếp theo, chứng tỏ cô rất hài lòng.' }
      ]
    }
  },

  'en-b1-2': {
    vocab: [
      { w: 'application', ipa: '/ˌæplɪˈkeɪʃən/', vi: 'đơn xin (việc, học…)', ex: 'I sent my application last week, but they haven\'t replied yet.', exVi: 'Tôi đã gửi đơn tuần trước nhưng họ vẫn chưa trả lời.' },
      { w: 'vacancy', ipa: '/ˈveɪkənsi/', vi: 'vị trí tuyển dụng còn trống', ex: 'There is a vacancy for a receptionist at the hotel.', exVi: 'Khách sạn đang có một vị trí lễ tân còn trống.' },
      { w: 'hire', ipa: '/haɪər/', vi: 'thuê, tuyển (người)', ex: 'The company hired five new engineers last month.', exVi: 'Tháng trước công ty đã tuyển năm kỹ sư mới.' },
      { w: 'income', ipa: '/ˈɪnˌkʌm/', vi: 'thu nhập', ex: 'Her income has doubled since she changed jobs.', exVi: 'Thu nhập của cô ấy đã tăng gấp đôi kể từ khi đổi việc.' },
      { w: 'profession', ipa: '/prəˈfɛʃən/', vi: 'nghề nghiệp (cần đào tạo chuyên môn)', ex: 'Teaching is a difficult but useful profession.', exVi: 'Dạy học là một nghề khó nhưng có ích.' },
      { w: 'achievement', ipa: '/əˈtʃivmənt/', vi: 'thành tích, thành tựu', ex: 'Finishing the project on time was my biggest achievement.', exVi: 'Hoàn thành dự án đúng hạn là thành tích lớn nhất của tôi.' },
      { w: 'confidence', ipa: '/ˈkɑnfɪdəns/', vi: 'sự tự tin', ex: 'Good preparation gives you confidence in an interview.', exVi: 'Chuẩn bị kỹ giúp bạn tự tin trong buổi phỏng vấn.' },
      { w: 'department', ipa: '/dɪˈpɑrtmənt/', vi: 'phòng, ban (trong công ty)', ex: 'He has worked in the sales department for three years.', exVi: 'Anh ấy đã làm ở phòng kinh doanh được ba năm.' },
      { w: 'experienced', ipa: '/ɪkˈspɪriənst/', vi: 'có kinh nghiệm', ex: 'We are looking for an experienced driver.', exVi: 'Chúng tôi đang tìm một tài xế có kinh nghiệm.' },
      { w: 'employment', ipa: '/ɪmˈplɔɪmənt/', vi: 'việc làm, sự có việc làm', ex: 'She found employment soon after she graduated.', exVi: 'Cô ấy tìm được việc làm ngay sau khi tốt nghiệp.' }
    ],
    exercises: [
      { type: 'mc', q: 'She ___ in the marketing department since 2020.', options: ['worked', 'works', 'has worked', 'is working'], answer: 2,
        explain: 'Since 2020 cho biết hành động bắt đầu trong quá khứ và kéo dài đến nay → hiện tại hoàn thành.' },
      { type: 'fill', q: 'I sent my ___ for the job last Monday.', answer: ['application'], hint: 'đơn xin việc',
        explain: 'Application = đơn xin. Last Monday là thời điểm xác định nên dùng quá khứ đơn sent.' },
      { type: 'mc', q: 'The company ___ ten new workers last year.', options: ['has hired', 'hires', 'have hired', 'hired'], answer: 3,
        explain: 'Last year là thời điểm đã kết thúc → quá khứ đơn hired.' },
      { type: 'fill', q: 'He has been a nurse ___ fifteen years.', answer: ['for'], hint: 'for hay since?',
        explain: 'Fifteen years là một khoảng thời gian → dùng for.' },
      { type: 'mc', q: 'Which word means "vị trí tuyển dụng còn trống"?', options: ['income', 'vacancy', 'profession', 'department'], answer: 1,
        explain: 'Vacancy = vị trí còn trống. Income = thu nhập, profession = nghề, department = phòng ban.' },
      { type: 'fill', q: 'My ___ has increased since I got a promotion.', answer: ['income', 'salary'], hint: 'thu nhập',
        explain: 'Income = thu nhập (salary = lương cũng hợp nghĩa). Since I got a promotion: since + mệnh đề quá khứ đơn.' },
      { type: 'order', vi: 'Tôi đã làm việc ở phòng này được ba năm.', words: ['in', 'have', 'years', 'I', 'department', 'for', 'this', 'worked', 'three'],
        answer: 'I have worked in this department for three years', alt: ['I have worked for three years in this department'] },
      { type: 'order', vi: 'Công ty của bạn đã tuyển được ai chưa?', words: ['anyone', 'company', 'Has', 'yet?', 'hired', 'your'],
        answer: 'Has your company hired anyone yet?' }
    ],
    reading: {
      title: 'From Waitress to Manager',
      titleVi: 'Từ cô phục vụ thành quản lý',
      text: [
        "Mai is twenty-eight, and she has worked in hotels for seven years. Her career started in 2017, when she got a part-time job as a waitress. At that time, she had no experience and very little confidence, and her income was quite low.",
        "In 2019, she saw a vacancy for a receptionist at a big hotel in Da Nang. She sent her application with a short résumé, and the manager invited her to an interview. They hired her the next week. Since then, she has learned a lot from her colleagues.",
        "Mai has worked in three different departments since she joined the hotel. Last year, she got a promotion, and now she has responsibility for a team of twelve people. She says her biggest achievement is not her salary, but the trust of her team.",
        "'Hotels don't only look for experienced people,' Mai explains. 'They want someone who is ready to learn. That is the most important thing in my profession.'"
      ],
      vi: [
        'Mai hai mươi tám tuổi và đã làm việc trong ngành khách sạn được bảy năm. Sự nghiệp của cô bắt đầu năm 2017, khi cô có một công việc bán thời gian làm phục vụ. Lúc đó, cô không có kinh nghiệm, rất thiếu tự tin và thu nhập khá thấp.',
        'Năm 2019, cô thấy một vị trí lễ tân còn trống ở một khách sạn lớn tại Đà Nẵng. Cô gửi đơn kèm một bản sơ yếu lý lịch ngắn, và người quản lý mời cô đến phỏng vấn. Tuần sau đó họ tuyển cô. Từ đó đến nay, cô đã học được rất nhiều từ đồng nghiệp.',
        'Mai đã làm ở ba bộ phận khác nhau kể từ khi vào khách sạn. Năm ngoái, cô được thăng chức, và giờ cô chịu trách nhiệm một nhóm mười hai người. Cô nói thành tích lớn nhất của mình không phải là tiền lương, mà là sự tin tưởng của cả nhóm.',
        '“Các khách sạn không chỉ tìm người có kinh nghiệm,” Mai giải thích. “Họ muốn một người sẵn sàng học hỏi. Đó là điều quan trọng nhất trong nghề của tôi.”'
      ],
      questions: [
        { q: 'Mai bắt đầu đi làm như thế nào?', options: ['Làm lễ tân ở Đà Nẵng từ năm 2017', 'Làm quản lý ngay sau khi tốt nghiệp', 'Làm phục vụ bán thời gian từ năm 2017', 'Làm ở phòng kinh doanh từ năm 2019'], answer: 2,
          explain: 'Đoạn 1: “Her career started in 2017, when she got a part-time job as a waitress.”' },
        { q: 'Mai có được công việc lễ tân bằng cách nào?', options: ['Thấy vị trí trống, gửi đơn và đi phỏng vấn', 'Được một người bạn giới thiệu', 'Được thăng chức từ vị trí phục vụ', 'Khách sạn tự liên hệ mời cô'], answer: 0,
          explain: 'Đoạn 2: cô thấy vacancy, gửi application và résumé, rồi được mời phỏng vấn.' },
        { q: 'Theo Mai, thành tích lớn nhất của cô là gì?', options: ['Mức lương cao', 'Được làm ở ba bộ phận', 'Sự tin tưởng của nhóm', 'Được làm ở khách sạn lớn'], answer: 2,
          explain: 'Đoạn 3: “her biggest achievement is not her salary, but the trust of her team.”' },
        { q: 'Mai có thể sẽ khuyên một người mới đi làm điều gì?', options: ['Đừng lo vì thiếu kinh nghiệm, hãy luôn sẵn sàng học hỏi', 'Chỉ nộp đơn khi đã có nhiều năm kinh nghiệm', 'Hãy chọn công việc có lương cao nhất', 'Nên ở mãi một bộ phận để thành chuyên gia'], answer: 0,
          explain: 'Bản thân Mai bắt đầu khi chưa có kinh nghiệm, và cô cho rằng điều quan trọng nhất là sẵn sàng học hỏi.' }
      ]
    }
  },

  'en-b1-3': {
    vocab: [
      { w: 'cough', ipa: '/kɔf/', vi: 'ho; cơn ho', ex: 'If you have a bad cough, you should stay at home.', exVi: 'Nếu bạn ho nặng thì nên ở nhà.' },
      { w: 'flu', ipa: '/flu/', vi: 'bệnh cúm', ex: 'I had to stay in bed for a week because of the flu.', exVi: 'Tôi đã phải nằm trên giường cả tuần vì bị cúm.' },
      { w: 'pain', ipa: '/peɪn/', vi: 'cơn đau, sự đau', ex: 'Tell the doctor if you feel any pain in your chest.', exVi: 'Hãy báo bác sĩ nếu bạn thấy đau ở ngực.' },
      { w: 'pharmacy', ipa: '/ˈfɑrməsi/', vi: 'hiệu thuốc', ex: 'You can buy this medicine at any pharmacy.', exVi: 'Bạn có thể mua thuốc này ở bất kỳ hiệu thuốc nào.' },
      { w: 'treatment', ipa: '/ˈtritmənt/', vi: 'sự điều trị, cách chữa', ex: 'The treatment for a cold is usually rest and water.', exVi: 'Cách chữa cảm lạnh thường là nghỉ ngơi và uống nước.' },
      { w: 'illness', ipa: '/ˈɪlnəs/', vi: 'bệnh, sự ốm đau', ex: 'He missed two weeks of work because of a serious illness.', exVi: 'Anh ấy nghỉ làm hai tuần vì một căn bệnh nặng.' },
      { w: 'ambulance', ipa: '/ˈæmbjələns/', vi: 'xe cứu thương', ex: 'Call an ambulance! She has hurt her head.', exVi: 'Gọi xe cứu thương đi! Cô ấy bị thương ở đầu.' },
      { w: 'stress', ipa: '/strɛs/', vi: 'sự căng thẳng', ex: 'You should do some exercise to reduce stress.', exVi: 'Bạn nên tập thể dục để giảm căng thẳng.' },
      { w: 'heal', ipa: '/hil/', vi: 'lành lại (vết thương)', ex: 'The cut on my hand healed in a few days.', exVi: 'Vết cắt trên tay tôi lành sau vài ngày.' },
      { w: 'allergic', ipa: '/əˈlɜrdʒɪk/', vi: 'bị dị ứng', ex: 'I\'m allergic to seafood, so I mustn\'t eat shrimp.', exVi: 'Tôi bị dị ứng hải sản nên không được ăn tôm.' }
    ],
    exercises: [
      { type: 'mc', q: 'You have a bad cough. You ___ stay at home and rest.', options: ['mustn\'t', 'don\'t have to', 'has to', 'should'], answer: 3,
        explain: 'Should + V dùng để khuyên: bạn nên ở nhà nghỉ ngơi.' },
      { type: 'fill', q: 'If you are ___ to peanuts, you mustn\'t eat this cake.', answer: ['allergic'], hint: 'bị dị ứng',
        explain: 'Be allergic to something = bị dị ứng với cái gì.' },
      { type: 'mc', q: 'He fell off his bike and can\'t move. Call an ___!', options: ['illness', 'ambulance', 'pharmacy', 'treatment'], answer: 1,
        explain: 'Ambulance = xe cứu thương, gọi khi có người bị thương nặng.' },
      { type: 'fill', q: 'You ___ go to the hospital. You can buy the medicine at a pharmacy.', answer: ['don\'t have to', 'do not have to', 'needn\'t', 'need not', 'don\'t need to', 'do not need to'], hint: 'không cần phải',
        explain: 'Don\'t have to (= don\'t need to) = không bắt buộc, không cần. Khác với mustn\'t = bị cấm.' },
      { type: 'mc', q: 'My grandmother ___ take her pills twice a day.', options: ['have to', 'has to', 'must to', 'should to'], answer: 1,
        explain: 'He/she/it dùng has to. Sau must và should không có to.' },
      { type: 'fill', q: 'Don\'t worry. The cut will ___ in a few days.', answer: ['heal'], hint: 'lành lại',
        explain: 'Heal = lành lại. Sau will dùng động từ nguyên mẫu.' },
      { type: 'order', vi: 'Bạn nên giảm căng thẳng trong công việc.', words: ['reduce', 'at', 'You', 'stress', 'should', 'work'],
        answer: 'You should reduce stress at work' },
      { type: 'order', vi: 'Tôi đã phải nghỉ học vì bị cúm.', words: ['the', 'had', 'school', 'I', 'of', 'to', 'flu', 'because', 'miss'],
        answer: 'I had to miss school because of the flu' }
    ],
    reading: {
      title: 'Is It Just a Cold?',
      titleVi: 'Chỉ là cảm lạnh thôi sao?',
      text: [
        "Last winter, Tuan woke up with a sore throat and a terrible cough. He also had a fever and pain in his arms and legs. At first, he thought it was just a cold, so he went to work as usual.",
        "By the afternoon, he felt much worse. His colleague said, 'You shouldn't stay here. You should see a doctor.' So Tuan made an appointment at a small clinic near his office. After a quick check, the doctor told him that he had the flu, not a cold.",
        "The treatment was simple. 'You don't have to go to the hospital,' the doctor said. 'But you must rest for at least three days, and you have to drink a lot of water.' Then she wrote a prescription. Before he left, she asked him if he was allergic to any medicine.",
        "Tuan bought the medicine at a pharmacy and stayed in bed. A week later, he had fully recovered. Now he knows that a small illness can become serious if you don't take care of yourself."
      ],
      vi: [
        'Mùa đông năm ngoái, Tuấn thức dậy với cổ họng đau rát và cơn ho rất nặng. Anh còn bị sốt và đau ở tay chân. Lúc đầu, anh nghĩ đó chỉ là cảm lạnh, nên vẫn đi làm như thường lệ.',
        'Đến chiều, anh thấy tệ hơn nhiều. Một đồng nghiệp nói: “Anh không nên ở đây. Anh nên đi khám bác sĩ.” Thế là Tuấn đặt lịch khám ở một phòng khám nhỏ gần văn phòng. Sau khi khám nhanh, bác sĩ nói anh bị cúm chứ không phải cảm lạnh.',
        'Cách điều trị khá đơn giản. “Anh không cần phải nhập viện,” bác sĩ nói. “Nhưng anh phải nghỉ ngơi ít nhất ba ngày và phải uống thật nhiều nước.” Rồi bà kê đơn thuốc. Trước khi anh ra về, bà hỏi anh có bị dị ứng với loại thuốc nào không.',
        'Tuấn mua thuốc ở hiệu thuốc và nằm nghỉ trên giường. Một tuần sau, anh đã khỏi hẳn. Giờ anh biết rằng một bệnh nhẹ cũng có thể trở nên nghiêm trọng nếu mình không chăm sóc bản thân.'
      ],
      questions: [
        { q: 'Lúc đầu Tuấn nghĩ mình bị gì?', options: ['Cúm', 'Dị ứng thuốc', 'Đau họng do căng thẳng', 'Cảm lạnh thông thường'], answer: 3,
          explain: 'Đoạn 1: “At first, he thought it was just a cold”.' },
        { q: 'Bác sĩ nói Tuấn KHÔNG cần làm gì?', options: ['Nhập viện', 'Nghỉ ngơi ba ngày', 'Uống nhiều nước', 'Uống thuốc theo đơn'], answer: 0,
          explain: 'Bác sĩ nói “You don\'t have to go to the hospital” – không cần nhập viện.' },
        { q: 'Vì sao bác sĩ hỏi Tuấn có dị ứng thuốc không?', options: ['Vì anh bị dị ứng chứ không phải cúm', 'Vì hiệu thuốc yêu cầu như vậy', 'Để chắc chắn thuốc trong đơn an toàn cho anh', 'Vì anh đã từng bị sốc thuốc'], answer: 2,
          explain: 'Bà hỏi ngay sau khi kê đơn, nên có thể suy ra bà muốn chắc rằng thuốc không gây hại cho anh.' },
        { q: 'Tuấn rút ra bài học gì?', options: ['Không bao giờ nên uống thuốc', 'Phải luôn đến bệnh viện khi bị ho', 'Không nên nghe lời khuyên của đồng nghiệp', 'Bệnh nhẹ cũng có thể nặng thêm nếu không chăm sóc bản thân'], answer: 3,
          explain: 'Đoạn 4: “a small illness can become serious if you don\'t take care of yourself.”' }
      ]
    }
  },

  'en-b1-4': {
    vocab: [
      { w: 'incident', ipa: '/ˈɪnsɪdənt/', vi: 'sự việc, vụ việc (bất thường)', ex: 'The police asked me what I was doing when the incident happened.', exVi: 'Cảnh sát hỏi tôi đang làm gì khi vụ việc xảy ra.' },
      { w: 'crash', ipa: '/kræʃ/', vi: 'đâm, va chạm; vụ va chạm', ex: 'A car crashed into the wall while I was waiting for the bus.', exVi: 'Một chiếc ô tô đâm vào tường khi tôi đang đợi xe buýt.' },
      { w: 'chase', ipa: '/tʃeɪs/', vi: 'đuổi theo', ex: 'The dog was chasing a cat when it ran into the road.', exVi: 'Con chó đang đuổi theo một con mèo thì chạy ra đường.' },
      { w: 'terrified', ipa: '/ˈtɛrəˌfaɪd/', vi: 'vô cùng sợ hãi, khiếp sợ', ex: 'I was terrified when the lights went out.', exVi: 'Tôi sợ chết khiếp khi đèn tắt phụt.' },
      { w: 'shocked', ipa: '/ʃɑkt/', vi: 'bị sốc, bàng hoàng', ex: 'We were shocked when we heard the news.', exVi: 'Chúng tôi bàng hoàng khi nghe tin.' },
      { w: 'silent', ipa: '/ˈsaɪlənt/', vi: 'im lặng, yên ắng', ex: 'The street was silent while everyone was sleeping.', exVi: 'Con phố yên ắng trong khi mọi người đang ngủ.' },
      { w: 'lightning', ipa: '/ˈlaɪtnɪŋ/', vi: 'tia chớp', ex: 'Lightning hit the tree while we were walking home.', exVi: 'Sét đánh trúng cái cây khi chúng tôi đang đi bộ về nhà.' },
      { w: 'thunder', ipa: '/ˈθʌndər/', vi: 'sấm, tiếng sấm', ex: 'The baby woke up when she heard the thunder.', exVi: 'Em bé thức giấc khi nghe tiếng sấm.' },
      { w: 'burglar', ipa: '/ˈbɜrɡlər/', vi: 'kẻ trộm đột nhập nhà', ex: 'A burglar broke in while the family was on holiday.', exVi: 'Một tên trộm đột nhập khi cả nhà đang đi nghỉ.' },
      { w: 'amazing', ipa: '/əˈmeɪzɪŋ/', vi: 'đáng kinh ngạc, tuyệt vời', ex: 'Something amazing happened while I was fishing.', exVi: 'Một chuyện đáng kinh ngạc đã xảy ra khi tôi đang câu cá.' }
    ],
    exercises: [
      { type: 'mc', q: 'We were walking home ___ the lightning hit a tree.', options: ['while', 'when', 'during', 'since'], answer: 1,
        explain: 'When đứng trước hành động ngắn xen vào (quá khứ đơn): the lightning hit.' },
      { type: 'fill', q: 'While we ___ dinner, a burglar broke into the house next door. (have)', answer: ['were having'], hint: 'quá khứ tiếp diễn',
        explain: 'Sau while là hành động đang kéo dài → we were having.' },
      { type: 'mc', q: 'Which word means "tiếng sấm"?', options: ['lightning', 'incident', 'thunder', 'burglar'], answer: 2,
        explain: 'Thunder = sấm (âm thanh); lightning = tia chớp (ánh sáng).' },
      { type: 'fill', q: 'The police ___ the thief when he fell over. (chase)', answer: ['were chasing'], hint: 'quá khứ tiếp diễn',
        explain: 'Hành động đang diễn ra (were chasing) thì hành động ngắn xen vào (fell over).' },
      { type: 'mc', q: 'I was ___ when I saw the car crash into the wall. I couldn\'t move.', options: ['terrified', 'silent', 'amazing', 'strange'], answer: 0,
        explain: 'Terrified = sợ hãi tột độ, hợp với ý “không thể cử động”.' },
      { type: 'fill', q: 'Everyone was ___. Nobody said a word.', answer: ['silent', 'quiet'], hint: 'im lặng',
        explain: 'Silent / quiet = im lặng, không ai nói gì.' },
      { type: 'order', vi: 'Chiếc xe đâm vào cây khi tôi đang đi ngang qua.', words: ['into', 'I', 'The', 'past', 'crashed', 'was', 'a', 'car', 'tree', 'walking', 'while'],
        answer: 'The car crashed into a tree while I was walking past' },
      { type: 'order', vi: 'Bạn đang làm gì khi vụ việc xảy ra?', words: ['incident', 'doing', 'were', 'happened?', 'What', 'the', 'you', 'when'],
        answer: 'What were you doing when the incident happened?' }
    ],
    reading: {
      title: 'The Night of the Storm',
      titleVi: 'Đêm giông bão',
      text: [
        "It was a dark night in July. Outside, a storm was getting stronger. My parents were working late, so I was alone at home. I was watching a film in the living room when the lights suddenly went out.",
        "For a moment, everything was silent. Then I heard thunder, and lightning lit up the garden. While I was looking for a torch in the kitchen, I noticed a strange noise at the back door. Someone was trying to open it! I was terrified. Was it a burglar?",
        "I called my neighbor, Mr. Hai, and asked him to come quickly. A few minutes later, while he was running across the garden with a torch, something crashed into the door again. Then we both saw it: a big wet dog! It was shaking with fear.",
        "I was shocked at first, and then I started to laugh. The poor dog lived down the street, and it ran away because it was scared of the storm. It was an amazing night, and now it's my favorite story to tell."
      ],
      vi: [
        'Đó là một đêm tối trời tháng Bảy. Bên ngoài, cơn bão đang mạnh dần lên. Bố mẹ tôi đang làm việc muộn, nên tôi ở nhà một mình. Tôi đang xem phim ở phòng khách thì đèn đột nhiên tắt phụt.',
        'Trong chốc lát, mọi thứ im lặng. Rồi tôi nghe tiếng sấm, và tia chớp làm sáng rực khu vườn. Trong lúc đang tìm đèn pin trong bếp, tôi để ý thấy một tiếng động lạ ở cửa sau. Ai đó đang cố mở cửa! Tôi sợ chết khiếp. Đó có phải là kẻ trộm không?',
        'Tôi gọi cho hàng xóm, chú Hải, và nhờ chú đến ngay. Vài phút sau, trong lúc chú đang cầm đèn pin chạy băng qua vườn, có thứ gì đó lại đâm sầm vào cửa. Rồi cả hai chúng tôi đều nhìn thấy: một con chó to ướt sũng! Nó đang run lên vì sợ.',
        'Lúc đầu tôi bàng hoàng, rồi tôi bật cười. Con chó tội nghiệp sống ở cuối phố, và nó bỏ chạy vì sợ bão. Đó là một đêm thật đáng nhớ, và giờ nó là câu chuyện tôi thích kể nhất.'
      ],
      questions: [
        { q: 'Người kể đang làm gì khi mất điện?', options: ['Tìm đèn pin trong bếp', 'Gọi điện cho bố mẹ', 'Xem phim ở phòng khách', 'Ngủ trong phòng'], answer: 2,
          explain: 'Đoạn 1: “I was watching a film in the living room when the lights suddenly went out.”' },
        { q: 'Vì sao người kể sợ hãi?', options: ['Nghĩ rằng có kẻ trộm đang cố mở cửa sau', 'Sét đánh trúng nhà', 'Bố mẹ không về nhà', 'Nghe tiếng chó sủa ngoài vườn'], answer: 0,
          explain: 'Đoạn 2: có tiếng động ở cửa sau, “Someone was trying to open it!… Was it a burglar?”' },
        { q: 'Thật ra thứ gì ở cửa sau?', options: ['Chú Hải hàng xóm', 'Một tên trộm', 'Một cành cây gãy', 'Một con chó to bị ướt'], answer: 3,
          explain: 'Đoạn 3: “a big wet dog!”' },
        { q: 'Có thể suy ra vì sao người kể gọi chú Hải?', options: ['Vì chú Hải là cảnh sát', 'Vì đang ở nhà một mình và cần người ở gần giúp', 'Vì chú Hải là chủ của con chó', 'Vì chú Hải gọi cho người kể trước'], answer: 1,
          explain: 'Bố mẹ đi làm muộn, người kể ở nhà một mình và đang sợ, nên gọi người hàng xóm ở gần để giúp.' }
      ]
    }
  },

  'en-b1-5': {
    vocab: [
      { w: 'comparison', ipa: '/kəmˈpærɪsən/', vi: 'sự so sánh', ex: 'In comparison with Hanoi, Da Nang is much less crowded.', exVi: 'So với Hà Nội, Đà Nẵng ít đông đúc hơn nhiều.' },
      { w: 'suppose', ipa: '/səˈpoʊz/', vi: 'cho rằng, nghĩ là', ex: 'I suppose the train is cheaper, but it is slower.', exVi: 'Tôi cho rằng tàu hoả rẻ hơn, nhưng nó chậm hơn.' },
      { w: 'recommend', ipa: '/ˌrɛkəˈmɛnd/', vi: 'giới thiệu, khuyên dùng', ex: 'I recommend this restaurant. It is the best in town.', exVi: 'Tôi giới thiệu nhà hàng này. Nó ngon nhất thị trấn.' },
      { w: 'benefit', ipa: '/ˈbɛnəfɪt/', vi: 'lợi ích', ex: 'The biggest benefit of cycling is that it is good for your health.', exVi: 'Lợi ích lớn nhất của việc đạp xe là nó tốt cho sức khoẻ.' },
      { w: 'option', ipa: '/ˈɑpʃən/', vi: 'lựa chọn, phương án', ex: 'Taking the metro is the fastest option.', exVi: 'Đi tàu điện là lựa chọn nhanh nhất.' },
      { w: 'efficient', ipa: '/ɪˈfɪʃənt/', vi: 'hiệu quả (ít tốn thời gian, công sức)', ex: 'This new machine is more efficient than the old one.', exVi: 'Cái máy mới này hiệu quả hơn cái cũ.' },
      { w: 'effective', ipa: '/ɪˈfɛktɪv/', vi: 'có hiệu quả (đạt kết quả mong muốn)', ex: 'Practicing every day is the most effective way to learn English.', exVi: 'Luyện tập hằng ngày là cách học tiếng Anh hiệu quả nhất.' },
      { w: 'valuable', ipa: '/ˈvæljəbəl/', vi: 'quý giá, có giá trị', ex: 'For me, time is more valuable than money.', exVi: 'Với tôi, thời gian quý hơn tiền bạc.' },
      { w: 'disagree', ipa: '/ˌdɪsəˈɡri/', vi: 'không đồng ý', ex: 'I disagree with you. The bus isn\'t as slow as you think.', exVi: 'Tôi không đồng ý với bạn. Xe buýt không chậm như bạn nghĩ.' },
      { w: 'similar', ipa: '/ˈsɪmələr/', vi: 'giống, tương tự', ex: 'My opinion is similar to yours.', exVi: 'Ý kiến của tôi giống ý kiến của bạn.' }
    ],
    exercises: [
      { type: 'mc', q: 'In my opinion, the train is a ___ option than the bus.', options: ['best', 'better', 'good', 'more good'], answer: 1,
        explain: 'Có than → so sánh hơn. Good là bất quy tắc: good → better → the best.' },
      { type: 'fill', q: 'This new machine is ___ efficient than the old one.', answer: ['more'], hint: 'tính từ dài',
        explain: 'Efficient là tính từ dài nên so sánh hơn dùng more … than.' },
      { type: 'mc', q: 'I ___ with you. I think the old plan was better.', options: ['recommend', 'suppose', 'compare', 'disagree'], answer: 3,
        explain: 'Disagree with somebody = không đồng ý với ai.' },
      { type: 'fill', q: 'Family is the most ___ thing in my life.', answer: ['valuable', 'precious'], hint: 'quý giá',
        explain: 'The most + tính từ dài: the most valuable / the most precious = quý giá nhất.' },
      { type: 'mc', q: 'My phone is ___ to yours, but mine is a little cheaper.', options: ['similar', 'same', 'different', 'like'], answer: 0,
        explain: 'Similar to = giống, tương tự. “The same” phải đi với as: the same as.' },
      { type: 'fill', q: 'For me, online lessons are not as ___ as classroom lessons. I learn less at home.', answer: ['effective'], hint: 'có hiệu quả (đạt kết quả)',
        explain: 'Not as … as = không bằng. Effective nói về việc đạt kết quả; efficient nói về việc ít tốn thời gian, công sức.' },
      { type: 'order', vi: 'Tôi giới thiệu lựa chọn rẻ nhất.', words: ['cheapest', 'recommend', 'the', 'I', 'option'],
        answer: 'I recommend the cheapest option' },
      { type: 'order', vi: 'Lợi ích lớn nhất của xe máy là gì?', words: ['of', 'benefit', 'is', 'biggest', 'What', 'a', 'the', 'motorbike?'],
        answer: 'What is the biggest benefit of a motorbike?' }
    ],
    reading: {
      title: 'Bus or Motorbike?',
      titleVi: 'Xe buýt hay xe máy?',
      text: [
        "Every day, millions of people in Vietnam have to choose how to get to work. Most people prefer motorbikes, but more and more cities now offer buses and metro lines. So which option is better? We asked two office workers for their opinions.",
        "Hoa, 25, takes the bus. 'In my opinion, the bus is the most affordable way to travel,' she says. 'It's also safer than a motorbike, and I can read on the way. Of course, it isn't as fast as a motorbike, and it is often crowded in the morning.'",
        "Nam, 31, disagrees. 'I suppose the bus is cheaper, but a motorbike is much more convenient for me. I can leave home whenever I want, and it's the most efficient way to get through small streets. For me, time is more valuable than money.'",
        "So who is right? When we make a comparison, we can see that each option has its own advantages and disadvantages. If you live near a bus stop, we recommend the bus. If not, a motorbike may still be the best choice."
      ],
      vi: [
        'Mỗi ngày, hàng triệu người ở Việt Nam phải chọn cách đi làm. Đa số mọi người thích xe máy hơn, nhưng ngày càng nhiều thành phố có xe buýt và tàu điện. Vậy lựa chọn nào tốt hơn? Chúng tôi đã hỏi ý kiến của hai nhân viên văn phòng.',
        'Hoa, 25 tuổi, đi xe buýt. “Theo tôi, xe buýt là cách đi lại rẻ nhất,” cô nói. “Nó cũng an toàn hơn xe máy, và tôi có thể đọc sách trên đường đi. Tất nhiên, nó không nhanh bằng xe máy và thường đông đúc vào buổi sáng.”',
        'Nam, 31 tuổi, không đồng ý. “Tôi cho rằng xe buýt rẻ hơn, nhưng với tôi xe máy tiện hơn nhiều. Tôi có thể ra khỏi nhà bất cứ lúc nào, và đó là cách hiệu quả nhất để đi qua những con phố nhỏ. Với tôi, thời gian quý hơn tiền bạc.”',
        'Vậy ai đúng? Khi so sánh, ta thấy mỗi lựa chọn đều có ưu điểm và nhược điểm riêng. Nếu bạn sống gần trạm xe buýt, chúng tôi khuyên bạn đi xe buýt. Nếu không, xe máy có thể vẫn là lựa chọn tốt nhất.'
      ],
      questions: [
        { q: 'Theo Hoa, nhược điểm của xe buýt là gì?', options: ['Đắt hơn xe máy', 'Không an toàn bằng xe máy', 'Không nhanh bằng xe máy và thường đông vào buổi sáng', 'Không thể đọc sách trên xe'], answer: 2,
          explain: 'Đoạn 2: “it isn\'t as fast as a motorbike, and it is often crowded in the morning.”' },
        { q: 'Vì sao Nam chọn xe máy?', options: ['Vì xe máy rẻ hơn xe buýt', 'Vì nhà anh ở gần trạm xe buýt', 'Vì xe máy an toàn hơn', 'Vì tiện hơn và đi qua phố nhỏ hiệu quả hơn'], answer: 3,
          explain: 'Đoạn 3: xe máy “much more convenient” và “the most efficient way to get through small streets”.' },
        { q: 'Câu “For me, time is more valuable than money” cho thấy điều gì về Nam?', options: ['Anh không có nhiều tiền', 'Anh sẵn sàng tốn tiền hơn một chút để tiết kiệm thời gian', 'Anh thường đi làm muộn', 'Anh không thích tiêu tiền'], answer: 1,
          explain: 'Nam thừa nhận xe buýt rẻ hơn nhưng vẫn chọn xe máy vì nhanh và tiện, nghĩa là anh coi trọng thời gian hơn tiền.' },
        { q: 'Kết luận của bài viết là gì?', options: ['Xe buýt luôn tốt hơn xe máy', 'Xe máy luôn tốt hơn xe buýt', 'Mỗi cách đều có ưu nhược điểm, nên chọn tuỳ hoàn cảnh', 'Mọi người nên đi tàu điện'], answer: 2,
          explain: 'Đoạn 4: mỗi lựa chọn có “advantages and disadvantages”, và lời khuyên phụ thuộc vào việc bạn có sống gần trạm xe buýt hay không.' }
      ]
    }
  },

  'en-b1-6': {
    vocab: [
      { w: 'climate', ipa: '/ˈklaɪmət/', vi: 'khí hậu', ex: 'If you live in a hot climate, you need to drink more water.', exVi: 'Nếu sống ở vùng khí hậu nóng, bạn cần uống nhiều nước hơn.' },
      { w: 'melt', ipa: '/mɛlt/', vi: 'tan chảy', ex: 'If you leave ice cream in the sun, it melts.', exVi: 'Nếu để kem dưới nắng, nó sẽ tan chảy.' },
      { w: 'warn', ipa: '/wɔrn/', vi: 'cảnh báo', ex: 'They will warn us if a storm is coming.', exVi: 'Họ sẽ cảnh báo chúng ta nếu bão sắp đến.' },
      { w: 'freezing', ipa: '/ˈfrizɪŋ/', vi: 'lạnh cóng, rét buốt', ex: 'If it\'s freezing tomorrow, I\'ll wear my thick coat.', exVi: 'Nếu mai trời rét buốt, tôi sẽ mặc áo khoác dày.' },
      { w: 'humid', ipa: '/ˈhjumɪd/', vi: 'ẩm, oi ẩm', ex: 'When the air is humid, clothes take a long time to dry.', exVi: 'Khi không khí ẩm, quần áo lâu khô.' },
      { w: 'mild', ipa: '/maɪld/', vi: 'ôn hoà, dễ chịu (thời tiết)', ex: 'The weather in Da Lat is mild all year round.', exVi: 'Thời tiết ở Đà Lạt ôn hoà quanh năm.' },
      { w: 'season', ipa: '/ˈsizən/', vi: 'mùa', ex: 'If you come in the rainy season, bring a raincoat.', exVi: 'Nếu bạn đến vào mùa mưa, hãy mang áo mưa.' },
      { w: 'flood', ipa: '/flʌd/', vi: 'lũ lụt; ngập nước', ex: 'If it rains all night, the streets will flood.', exVi: 'Nếu mưa cả đêm, đường phố sẽ ngập.' },
      { w: 'predict', ipa: '/prɪˈdɪkt/', vi: 'dự đoán', ex: 'The forecast predicts heavy rain this weekend.', exVi: 'Dự báo cho biết cuối tuần này sẽ mưa to.' },
      { w: 'prepare', ipa: '/prɪˈpɛr/', vi: 'chuẩn bị', ex: 'If you prepare well, you won\'t be nervous.', exVi: 'Nếu bạn chuẩn bị kỹ, bạn sẽ không hồi hộp.' }
    ],
    exercises: [
      { type: 'mc', q: 'If you heat chocolate, it ___.', options: ['melts', 'will melted', 'melted', 'melting'], answer: 0,
        explain: 'Sự thật luôn đúng → điều kiện loại 0: If + hiện tại đơn, hiện tại đơn (melts).' },
      { type: 'fill', q: 'If the forecast ___ rain, I will take an umbrella. (predict)', answer: ['predicts'], hint: 'hiện tại đơn',
        explain: 'Mệnh đề if ở loại 1 dùng hiện tại đơn, không dùng will: the forecast predicts.' },
      { type: 'mc', q: 'In Hanoi, it is often ___ in spring, so clothes take a long time to dry.', options: ['freezing', 'mild', 'humid', 'dry'], answer: 2,
        explain: 'Humid = ẩm, nên quần áo lâu khô.' },
      { type: 'fill', q: 'We will go to the beach ___ it rains.', answer: ['unless'], hint: 'trừ khi',
        explain: 'Unless = if … not: chúng ta sẽ đi biển trừ khi trời mưa.' },
      { type: 'mc', q: 'If the river floods, the city ___ people to leave their homes.', options: ['will warn', 'warn', 'warned', 'is warn'], answer: 0,
        explain: 'Loại 1: If + hiện tại đơn, will + V nguyên mẫu.' },
      { type: 'fill', q: 'If you don\'t ___ for the exam, you will feel nervous.', answer: ['prepare'], hint: 'chuẩn bị',
        explain: 'Prepare for something = chuẩn bị cho việc gì. Sau don\'t dùng động từ nguyên mẫu.' },
      { type: 'order', vi: 'Nếu có lũ, chúng tôi sẽ đóng cửa trường.', words: ['will', 'a', 'If', 'school', 'is', 'close', 'there', 'we', 'flood,', 'the'],
        answer: 'If there is a flood, we will close the school' },
      { type: 'order', vi: 'Nếu bạn đến vào mùa mưa, hãy mang áo mưa.', words: ['a', 'rainy', 'come', 'raincoat', 'If', 'the', 'bring', 'season,', 'in', 'you'],
        answer: 'If you come in the rainy season, bring a raincoat' }
    ],
    reading: {
      title: 'Planning a Trip to Sa Pa',
      titleVi: 'Lên kế hoạch đi Sa Pa',
      text: [
        "Sa Pa is a beautiful town in the mountains of northern Vietnam. Its climate is very different from the climate in the cities below. In summer, the weather is mild and pleasant, but in winter it can be freezing. Sometimes it even snows!",
        "If you visit Sa Pa in winter, you will need warm clothes. If you go between June and August, it will probably rain a lot, so pack an umbrella. In the rainy season, the air is also very humid, and clothes don't dry easily.",
        "Before you travel, always check the forecast. Heavy rain can cause floods, and mountain roads can become dangerous. If the experts predict a big storm, the local government will warn visitors, and some bus companies may cancel their trips. Don't go unless the roads are safe.",
        "Most visitors agree that autumn is the best season. If you prepare well, you will enjoy clear skies, cool air and wonderful views of the rice fields. And if you get up early, you will see the morning clouds melt away in the sun."
      ],
      vi: [
        'Sa Pa là một thị trấn xinh đẹp trên vùng núi phía Bắc Việt Nam. Khí hậu ở đây rất khác với khí hậu ở các thành phố dưới xuôi. Mùa hè, thời tiết ôn hoà và dễ chịu, nhưng mùa đông có thể rét buốt. Thỉnh thoảng còn có tuyết rơi!',
        'Nếu bạn đến Sa Pa vào mùa đông, bạn sẽ cần quần áo ấm. Nếu bạn đi từ tháng Sáu đến tháng Tám, có lẽ trời sẽ mưa nhiều, nên hãy mang theo ô. Vào mùa mưa, không khí cũng rất ẩm và quần áo khó khô.',
        'Trước khi đi, hãy luôn xem dự báo thời tiết. Mưa lớn có thể gây lũ, và đường núi có thể trở nên nguy hiểm. Nếu các chuyên gia dự đoán có bão lớn, chính quyền địa phương sẽ cảnh báo du khách, và một số hãng xe có thể huỷ chuyến. Đừng đi trừ khi đường an toàn.',
        'Đa số du khách đồng ý rằng mùa thu là mùa đẹp nhất. Nếu bạn chuẩn bị kỹ, bạn sẽ được tận hưởng bầu trời trong xanh, không khí mát mẻ và cảnh ruộng lúa tuyệt đẹp. Và nếu dậy sớm, bạn sẽ thấy những đám mây buổi sáng tan dần trong nắng.'
      ],
      questions: [
        { q: 'Thời tiết Sa Pa vào mùa hè như thế nào?', options: ['Rét buốt, có tuyết', 'Nóng và khô', 'Có bão suốt mùa', 'Ôn hoà và dễ chịu'], answer: 3,
          explain: 'Đoạn 1: “In summer, the weather is mild and pleasant”.' },
        { q: 'Điều gì xảy ra nếu chuyên gia dự đoán có bão lớn?', options: ['Tất cả khách sạn đóng cửa', 'Chính quyền cảnh báo du khách và một số hãng xe có thể huỷ chuyến', 'Du khách phải rời Sa Pa ngay', 'Đường núi được sửa chữa'], answer: 1,
          explain: 'Đoạn 3: “the local government will warn visitors, and some bus companies may cancel their trips.”' },
        { q: 'Vì sao quần áo khó khô vào mùa mưa ở Sa Pa?', options: ['Vì trời rét buốt', 'Vì không khí rất ẩm', 'Vì không có nắng cả ngày', 'Vì có tuyết rơi'], answer: 1,
          explain: 'Đoạn 2: “the air is also very humid, and clothes don\'t dry easily.”' },
        { q: 'Một du khách muốn ngắm ruộng lúa và tránh mưa, rét. Theo bài, họ nên làm gì?', options: ['Đi vào tháng Bảy và mang ô', 'Đi vào mùa đông và mặc áo ấm', 'Đi bất cứ lúc nào, không cần chuẩn bị', 'Đi vào mùa thu và xem dự báo thời tiết trước'], answer: 3,
          explain: 'Mùa đông thì rét, tháng Sáu–Tám mưa nhiều, còn mùa thu trời trong và có cảnh ruộng lúa đẹp; bài cũng khuyên luôn xem dự báo trước khi đi.' }
      ]
    }
  }
};
