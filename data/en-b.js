// Tiếng Anh — Trung cấp (B1, B2)
addLevels('en', [
  {
    id: 'B1',
    title: 'Trung cấp 1',
    desc: 'Kể về trải nghiệm, công việc, sức khoẻ; kể chuyện trong quá khứ, nêu ý kiến, so sánh và nói về điều kiện thực tế.',
    units: [
      // ───────────────────────── B1-1 ─────────────────────────
      {
        id: 'en-b1-1',
        icon: '✈️',
        title: 'Du lịch',
        goal: 'Kể về những nơi đã từng đến, hỏi người khác về trải nghiệm du lịch bằng thì hiện tại hoàn thành.',
        vocab: [
          { w: 'destination', ipa: '/ˌdɛstəˈneɪʃən/', vi: 'điểm đến', ex: 'Da Nang is a popular destination for tourists.', exVi: 'Đà Nẵng là điểm đến được nhiều du khách yêu thích.' },
          { w: 'passport', ipa: '/ˈpæspɔrt/', vi: 'hộ chiếu', ex: "I've lost my passport!", exVi: 'Tôi làm mất hộ chiếu rồi!' },
          { w: 'luggage', ipa: '/ˈlʌɡɪdʒ/', vi: 'hành lý', ex: 'How much luggage can I take on the plane?', exVi: 'Tôi được mang bao nhiêu hành lý lên máy bay?' },
          { w: 'souvenir', ipa: '/ˌsuvəˈnɪr/', vi: 'quà lưu niệm', ex: 'She bought a small souvenir for her mother.', exVi: 'Cô ấy mua một món quà lưu niệm nhỏ cho mẹ.' },
          { w: 'itinerary', ipa: '/aɪˈtɪnəˌrɛri/', vi: 'lịch trình chuyến đi', ex: 'Our itinerary includes three days in Hoi An.', exVi: 'Lịch trình của chúng tôi gồm ba ngày ở Hội An.' },
          { w: 'abroad', ipa: '/əˈbrɔd/', vi: 'ở nước ngoài, ra nước ngoài', ex: 'Have you ever traveled abroad?', exVi: 'Bạn đã bao giờ đi nước ngoài chưa?' },
          { w: 'sightseeing', ipa: '/ˈsaɪtˌsiɪŋ/', vi: 'việc tham quan, ngắm cảnh', ex: 'We went sightseeing all day.', exVi: 'Chúng tôi đi tham quan cả ngày.' },
          { w: 'accommodation', ipa: '/əˌkɑməˈdeɪʃən/', vi: 'chỗ ở (khách sạn, nhà nghỉ…)', ex: 'The price includes flights and accommodation.', exVi: 'Giá đã bao gồm vé máy bay và chỗ ở.' },
          { w: 'delay', ipa: '/dɪˈleɪ/', vi: 'sự trì hoãn; làm chậm trễ', ex: 'Our flight has been delayed for two hours.', exVi: 'Chuyến bay của chúng tôi đã bị hoãn hai tiếng.' },
          { w: 'book', ipa: '/bʊk/', vi: 'đặt (vé, phòng)', ex: "I've already booked a hotel room.", exVi: 'Tôi đã đặt phòng khách sạn rồi.' }
        ],
        grammar: {
          title: 'Thì hiện tại hoàn thành: have/has + V3 (ever, never, already, yet, just)',
          explain: [
            'Thì hiện tại hoàn thành dùng để nói về trải nghiệm trong đời mà KHÔNG nêu thời điểm cụ thể ("tôi đã từng…"), hoặc hành động vừa xảy ra/đã xảy ra mà kết quả còn liên quan đến hiện tại.',
            'Cấu trúc: I/you/we/they + have + V3; he/she/it + has + V3. Phủ định: haven\'t/hasn\'t + V3. Câu hỏi: Have/Has + chủ ngữ + V3?',
            'Ever (đã bao giờ) dùng trong câu hỏi: "Have you ever…?". Never (chưa bao giờ) mang nghĩa phủ định nên đi với have/has ở dạng khẳng định: "I have never…" (không nói "I haven\'t never").',
            'Already (rồi) thường đứng giữa have và V3 trong câu khẳng định; yet (chưa/chưa…à) đứng cuối câu phủ định và câu hỏi; just (vừa mới) đứng giữa have và V3.'
          ],
          table: [
            ['Dạng câu', 'Cấu trúc', 'Ví dụ'],
            ['Khẳng định', 'S + have/has + V3', 'She has visited Japan.'],
            ['Phủ định', "S + haven't/hasn't + V3", "We haven't booked the hotel yet."],
            ['Câu hỏi', 'Have/Has + S + (ever) + V3?', 'Have you ever been to Paris?'],
            ['Never', 'S + have/has + never + V3', 'I have never flown before.']
          ],
          examples: [
            { t: 'Have you ever been to Singapore?', vi: 'Bạn đã bao giờ đến Singapore chưa?' },
            { t: "I've never tried street food in Bangkok.", vi: 'Tôi chưa bao giờ ăn thử đồ ăn đường phố ở Bangkok.' },
            { t: 'They have just arrived at the airport.', vi: 'Họ vừa mới đến sân bay.' },
            { t: "Has she packed her luggage yet?", vi: 'Cô ấy đã xếp hành lý chưa?' }
          ],
          tip: 'Khi đã nói rõ thời gian trong quá khứ (yesterday, last year, in 2019…) thì phải dùng quá khứ đơn, không dùng hiện tại hoàn thành. "been to" = đã đến rồi về; "gone to" = đã đi và chưa về.'
        },
        dialogue: [
          { s: 'Linh', t: 'Have you ever traveled abroad, Tom?', vi: 'Tom ơi, bạn đã bao giờ đi nước ngoài chưa?' },
          { s: 'Tom', t: "Yes, I've been to Thailand and Japan. What about you?", vi: 'Rồi, mình đã đến Thái Lan và Nhật Bản. Còn bạn thì sao?' },
          { s: 'Linh', t: "I've never been abroad, but I've booked a trip to Korea for next month!", vi: 'Mình chưa bao giờ ra nước ngoài, nhưng mình đã đặt một chuyến đi Hàn Quốc vào tháng sau!' },
          { s: 'Tom', t: "That's great! Have you planned your itinerary yet?", vi: 'Tuyệt quá! Bạn đã lên lịch trình chưa?' },
          { s: 'Linh', t: "Not yet. I've only found accommodation in Seoul.", vi: 'Chưa. Mình mới chỉ tìm được chỗ ở tại Seoul thôi.' },
          { s: 'Tom', t: "Don't forget to go sightseeing in Busan. It's a beautiful destination.", vi: 'Đừng quên đi tham quan Busan nhé. Đó là một điểm đến rất đẹp.' }
        ],
        exercises: [
          { type: 'mc', q: 'Have you ever ___ to Vietnam?', options: ['go', 'went', 'been', 'going'], answer: 2,
            explain: 'Hỏi về trải nghiệm: Have you ever been to…? (been là V3 của be, mang nghĩa "đã từng đến").' },
          { type: 'mc', q: 'She ___ never seen the sea.', options: ['have', 'has', 'is', 'did'], answer: 1,
            explain: 'Chủ ngữ she đi với has; never đứng giữa has và V3.' },
          { type: 'mc', q: 'Which word means "hành lý"?', options: ['souvenir', 'luggage', 'itinerary', 'destination'], answer: 1,
            explain: 'Luggage = hành lý. Souvenir = quà lưu niệm, itinerary = lịch trình, destination = điểm đến.' },
          { type: 'fill', q: 'We have already ___ our tickets. (book)', answer: ['booked'], hint: 'V3 của book',
            explain: 'have + V3: book → booked.' },
          { type: 'fill', q: "I haven't packed my bags ___.", answer: ['yet'], hint: 'chưa (cuối câu phủ định)',
            explain: 'Yet đứng cuối câu phủ định và câu hỏi ở thì hiện tại hoàn thành.' },
          { type: 'fill', q: 'He has ___ eaten sushi. He wants to try it.', answer: ['never'], hint: 'chưa bao giờ',
            explain: 'Never = chưa bao giờ, đi với has ở dạng khẳng định.' },
          { type: 'order', vi: 'Bạn đã bao giờ đi nước ngoài chưa?', words: ['traveled', 'ever', 'Have', 'abroad?', 'you'],
            answer: 'Have you ever traveled abroad?' },
          { type: 'order', vi: 'Chuyến bay của chúng tôi vừa bị hoãn.', words: ['just', 'flight', 'has', 'delayed', 'Our', 'been'],
            answer: 'Our flight has just been delayed' }
        ]
      },
      // ───────────────────────── B1-2 ─────────────────────────
      {
        id: 'en-b1-2',
        icon: '💼',
        title: 'Công việc & phỏng vấn',
        goal: 'Giới thiệu kinh nghiệm làm việc trong buổi phỏng vấn, phân biệt hiện tại hoàn thành và quá khứ đơn, dùng đúng for/since.',
        vocab: [
          { w: 'interview', ipa: '/ˈɪntərˌvju/', vi: 'buổi phỏng vấn; phỏng vấn', ex: 'I have a job interview tomorrow morning.', exVi: 'Sáng mai tôi có một buổi phỏng vấn xin việc.' },
          { w: 'experience', ipa: '/ɪkˈspɪriəns/', vi: 'kinh nghiệm', ex: 'She has five years of experience in marketing.', exVi: 'Cô ấy có năm năm kinh nghiệm trong ngành marketing.' },
          { w: 'colleague', ipa: '/ˈkɑliɡ/', vi: 'đồng nghiệp', ex: 'My colleagues are friendly and helpful.', exVi: 'Đồng nghiệp của tôi thân thiện và hay giúp đỡ.' },
          { w: 'salary', ipa: '/ˈsæləri/', vi: 'lương (theo tháng/năm)', ex: 'The salary for this position is quite high.', exVi: 'Mức lương cho vị trí này khá cao.' },
          { w: 'apply for', ipa: '/əˈplaɪ fɔr/', vi: 'nộp đơn xin (việc, học bổng)', ex: 'I applied for the job last week.', exVi: 'Tôi đã nộp đơn xin việc đó tuần trước.' },
          { w: 'résumé', ipa: '/ˈrɛzəˌmeɪ/', vi: 'sơ yếu lý lịch, CV', ex: 'Please send your résumé by email.', exVi: 'Vui lòng gửi CV của bạn qua email.' },
          { w: 'candidate', ipa: '/ˈkændɪˌdeɪt/', vi: 'ứng viên', ex: 'There are ten candidates for this job.', exVi: 'Có mười ứng viên cho công việc này.' },
          { w: 'promotion', ipa: '/prəˈmoʊʃən/', vi: 'sự thăng chức', ex: 'He got a promotion last year.', exVi: 'Anh ấy được thăng chức năm ngoái.' },
          { w: 'responsibility', ipa: '/rɪˌspɑnsəˈbɪləti/', vi: 'trách nhiệm, nhiệm vụ', ex: 'My main responsibility is managing the team.', exVi: 'Nhiệm vụ chính của tôi là quản lý nhóm.' },
          { w: 'deadline', ipa: '/ˈdɛdˌlaɪn/', vi: 'hạn chót', ex: 'The deadline for this report is Friday.', exVi: 'Hạn chót của bản báo cáo này là thứ Sáu.' }
        ],
        grammar: {
          title: 'Hiện tại hoàn thành vs quá khứ đơn; for và since',
          explain: [
            'Quá khứ đơn (V2/V-ed) dùng cho hành động đã kết thúc tại một thời điểm xác định trong quá khứ: yesterday, last year, in 2020, two years ago, when I was a student…',
            'Hiện tại hoàn thành (have/has + V3) dùng cho hành động bắt đầu trong quá khứ và còn kéo dài đến hiện tại, hoặc trải nghiệm không nêu thời điểm. Câu hỏi "How long…?" thường dùng hiện tại hoàn thành.',
            'For + một khoảng thời gian (for three years, for a long time, for six months). Since + mốc thời gian bắt đầu (since 2019, since Monday, since I graduated).',
            'Sau since có thể là một mệnh đề ở quá khứ đơn: "I have worked here since I moved to Hanoi."'
          ],
          table: [
            ['Thì', 'Dùng khi', 'Ví dụ'],
            ['Quá khứ đơn', 'Thời điểm cụ thể, đã kết thúc', 'I worked at a bank in 2018.'],
            ['Hiện tại hoàn thành', 'Kéo dài đến nay / không rõ thời điểm', 'I have worked here for five years.'],
            ['for', '+ khoảng thời gian', 'for two months, for ten years'],
            ['since', '+ mốc thời gian', 'since 2020, since last summer']
          ],
          examples: [
            { t: 'I have worked as a designer since 2019.', vi: 'Tôi làm nhà thiết kế từ năm 2019 (đến nay).' },
            { t: 'She worked for a bank for three years, then she quit.', vi: 'Cô ấy làm cho một ngân hàng ba năm, rồi nghỉ việc.' },
            { t: 'How long have you known your manager?', vi: 'Bạn quen quản lý của mình được bao lâu rồi?' },
            { t: 'He got a promotion two months ago.', vi: 'Anh ấy được thăng chức hai tháng trước.' }
          ],
          tip: 'Người Việt hay nói "I work here for three years" theo kiểu dịch "tôi làm ở đây ba năm". Đúng phải là "I have worked here for three years." Và không dùng hiện tại hoàn thành với "ago": nói "I started two years ago", không nói "I have started two years ago".'
        },
        dialogue: [
          { s: 'Interviewer', t: 'Tell me about your experience. How long have you worked in sales?', vi: 'Hãy kể về kinh nghiệm của bạn. Bạn đã làm trong ngành bán hàng bao lâu rồi?' },
          { s: 'Nam', t: "I've worked in sales for four years. I started at a small company in 2020.", vi: 'Tôi đã làm bán hàng được bốn năm. Tôi bắt đầu ở một công ty nhỏ vào năm 2020.' },
          { s: 'Interviewer', t: 'And where do you work now?', vi: 'Còn hiện giờ bạn làm ở đâu?' },
          { s: 'Nam', t: "I've been at Sun Electronics since 2022. I got a promotion last year.", vi: 'Tôi làm ở Sun Electronics từ năm 2022. Năm ngoái tôi được thăng chức.' },
          { s: 'Interviewer', t: 'What are your main responsibilities?', vi: 'Nhiệm vụ chính của bạn là gì?' },
          { s: 'Nam', t: 'I manage a team of five and make sure we meet every deadline.', vi: 'Tôi quản lý một nhóm năm người và đảm bảo chúng tôi kịp mọi hạn chót.' }
        ],
        exercises: [
          { type: 'mc', q: 'I ___ for this company since 2021.', options: ['work', 'worked', 'have worked', 'am working'], answer: 2,
            explain: 'Since 2021 → hành động kéo dài đến hiện tại → hiện tại hoàn thành: have worked.' },
          { type: 'mc', q: 'She ___ her job two years ago.', options: ['has left', 'left', 'leaves', 'has leaving'], answer: 1,
            explain: '"two years ago" là thời điểm xác định trong quá khứ → quá khứ đơn: left.' },
          { type: 'mc', q: 'A person who is applying for a job is a ___.', options: ['colleague', 'candidate', 'salary', 'deadline'], answer: 1,
            explain: 'Candidate = ứng viên.' },
          { type: 'fill', q: 'He has been a teacher ___ ten years.', answer: ['for'], hint: 'for hay since?',
            explain: '"ten years" là khoảng thời gian → for.' },
          { type: 'fill', q: "We've known each other ___ we were at university.", answer: ['since'], hint: 'for hay since?',
            explain: 'Sau since có thể là một mệnh đề chỉ mốc thời gian bắt đầu.' },
          { type: 'fill', q: 'Last month I ___ for a job at a bank. (apply)', answer: ['applied'], hint: 'quá khứ đơn',
            explain: '"Last month" → quá khứ đơn: applied.' },
          { type: 'order', vi: 'Bạn đã làm việc ở đây bao lâu rồi?', words: ['here?', 'have', 'How', 'worked', 'long', 'you'],
            answer: 'How long have you worked here?' },
          { type: 'order', vi: 'Cô ấy đã được thăng chức năm ngoái.', words: ['a', 'last', 'She', 'promotion', 'got', 'year'],
            answer: 'She got a promotion last year' }
        ]
      },
      // ───────────────────────── B1-3 ─────────────────────────
      {
        id: 'en-b1-3',
        icon: '🩺',
        title: 'Sức khoẻ',
        goal: 'Mô tả triệu chứng, đưa lời khuyên và nói về sự bắt buộc với should, must, have to.',
        vocab: [
          { w: 'symptom', ipa: '/ˈsɪmptəm/', vi: 'triệu chứng', ex: 'What are your symptoms?', exVi: 'Bạn có những triệu chứng gì?' },
          { w: 'headache', ipa: '/ˈhɛdˌeɪk/', vi: 'đau đầu', ex: "I've had a headache since this morning.", exVi: 'Tôi bị đau đầu từ sáng đến giờ.' },
          { w: 'fever', ipa: '/ˈfivər/', vi: 'sốt', ex: 'The child has a high fever.', exVi: 'Đứa bé bị sốt cao.' },
          { w: 'sore throat', ipa: '/ˌsɔr ˈθroʊt/', vi: 'đau họng', ex: 'I have a sore throat and a cough.', exVi: 'Tôi bị đau họng và ho.' },
          { w: 'prescription', ipa: '/prɪˈskrɪpʃən/', vi: 'đơn thuốc', ex: 'You need a prescription to buy this medicine.', exVi: 'Bạn cần đơn thuốc để mua loại thuốc này.' },
          { w: 'appointment', ipa: '/əˈpɔɪntmənt/', vi: 'cuộc hẹn (với bác sĩ…)', ex: "I've made an appointment with the dentist.", exVi: 'Tôi đã đặt lịch hẹn với nha sĩ.' },
          { w: 'medicine', ipa: '/ˈmɛdəsən/', vi: 'thuốc', ex: 'Take this medicine twice a day.', exVi: 'Uống thuốc này hai lần một ngày.' },
          { w: 'recover', ipa: '/rɪˈkʌvər/', vi: 'hồi phục', ex: 'She recovered quickly after the operation.', exVi: 'Cô ấy hồi phục nhanh sau ca phẫu thuật.' },
          { w: 'injury', ipa: '/ˈɪndʒəri/', vi: 'chấn thương', ex: 'He has a knee injury from playing football.', exVi: 'Anh ấy bị chấn thương đầu gối do đá bóng.' },
          { w: 'healthy', ipa: '/ˈhɛlθi/', vi: 'khoẻ mạnh, tốt cho sức khoẻ', ex: 'Eating vegetables keeps you healthy.', exVi: 'Ăn rau giúp bạn khoẻ mạnh.' }
        ],
        grammar: {
          title: 'Should / must / have to (và mustn\'t, don\'t have to)',
          explain: [
            'Should + V (nên): đưa ra lời khuyên. Phủ định shouldn\'t (không nên). Ví dụ: "You should drink more water."',
            'Must + V (phải): bắt buộc mạnh, thường do người nói thấy cần thiết, hoặc trong quy định, biển báo. Have to + V (phải): bắt buộc do hoàn cảnh/quy định bên ngoài. He/she/it dùng has to.',
            'Mustn\'t (không được phép) ≠ don\'t have to (không cần, không bắt buộc). "You mustn\'t smoke here" = cấm hút thuốc; "You don\'t have to come" = bạn không cần đến cũng được.',
            'Must không có dạng quá khứ; khi nói "đã phải" dùng had to: "I had to stay in bed for three days."'
          ],
          table: [
            ['Động từ', 'Nghĩa', 'Ví dụ'],
            ['should / shouldn\'t', 'nên / không nên', 'You should see a doctor.'],
            ['must', 'phải (người nói thấy cần)', 'I must stop smoking.'],
            ['have to / has to', 'phải (do quy định, hoàn cảnh)', 'She has to take medicine every day.'],
            ["mustn't", 'không được phép', "You mustn't eat before the test."],
            ["don't have to", 'không cần', "You don't have to pay. It's free."]
          ],
          examples: [
            { t: 'You should get some rest and drink warm water.', vi: 'Bạn nên nghỉ ngơi và uống nước ấm.' },
            { t: 'Patients must turn off their phones in this room.', vi: 'Bệnh nhân phải tắt điện thoại trong phòng này.' },
            { t: 'He has to wear a cast for six weeks.', vi: 'Anh ấy phải bó bột trong sáu tuần.' },
            { t: "You don't have to make an appointment. Just come in.", vi: 'Bạn không cần đặt lịch hẹn. Cứ đến thẳng.' },
            { t: 'I had to stay home because I had a fever.', vi: 'Tôi đã phải ở nhà vì bị sốt.' }
          ],
          tip: 'Sau should/must luôn là động từ nguyên mẫu không "to": nói "You should rest", không nói "You should to rest". Nhưng have to thì luôn có "to".'
        },
        dialogue: [
          { s: 'Doctor', t: 'Good morning. What are your symptoms?', vi: 'Chào buổi sáng. Anh có những triệu chứng gì?' },
          { s: 'Huy', t: "I have a sore throat and a headache. I think I have a fever too.", vi: 'Tôi bị đau họng và đau đầu. Tôi nghĩ tôi cũng bị sốt nữa.' },
          { s: 'Doctor', t: "Let me check... Yes, it's 38.5 degrees. You have the flu.", vi: 'Để tôi kiểm tra… Đúng rồi, 38,5 độ. Anh bị cúm.' },
          { s: 'Huy', t: 'Do I have to stay at home?', vi: 'Tôi có phải ở nhà không?' },
          { s: 'Doctor', t: "Yes, you should rest for two or three days. You mustn't go to work with a fever.", vi: 'Có, anh nên nghỉ ngơi hai ba ngày. Anh không được đi làm khi đang sốt.' },
          { s: 'Huy', t: 'Do I need a prescription?', vi: 'Tôi có cần đơn thuốc không?' },
          { s: 'Doctor', t: "No, you don't have to buy anything special. Just take this medicine after meals.", vi: 'Không, anh không cần mua gì đặc biệt. Chỉ cần uống thuốc này sau bữa ăn.' }
        ],
        exercises: [
          { type: 'mc', q: 'You look tired. You ___ go to bed early.', options: ['should', 'mustn\'t', 'don\'t have to', 'has to'], answer: 0,
            explain: 'Đưa lời khuyên → should.' },
          { type: 'mc', q: "It's free. You ___ pay for the check-up.", options: ["mustn't", "don't have to", 'must', 'should'], answer: 1,
            explain: "Don't have to = không cần. Mustn't = cấm, không hợp nghĩa ở đây." },
          { type: 'mc', q: 'Yesterday I ___ go to the hospital for a test.', options: ['must', 'have to', 'had to', 'should'], answer: 2,
            explain: 'Quá khứ của must/have to là had to.' },
          { type: 'fill', q: 'She ___ to take this medicine every morning.', answer: ['has'], hint: 'have to với she',
            explain: 'Chủ ngữ she → has to.' },
          { type: 'fill', q: 'You ___ smoke in the hospital. It is not allowed.', answer: ["mustn't", 'must not'], hint: 'không được phép',
            explain: "Mustn't = cấm, không được phép." },
          { type: 'fill', q: 'You need a ___ from the doctor to buy this medicine.', answer: ['prescription'], hint: 'đơn thuốc',
            explain: 'Prescription = đơn thuốc.' },
          { type: 'order', vi: 'Bạn nên đi khám bác sĩ.', words: ['see', 'should', 'a', 'You', 'doctor'],
            answer: 'You should see a doctor' },
          { type: 'order', vi: 'Tôi có phải đặt lịch hẹn không?', words: ['an', 'Do', 'make', 'I', 'to', 'appointment?', 'have'],
            answer: 'Do I have to make an appointment?' }
        ]
      },
      // ───────────────────────── B1-4 ─────────────────────────
      {
        id: 'en-b1-4',
        icon: '📖',
        title: 'Kể chuyện',
        goal: 'Kể lại một sự việc trong quá khứ: mô tả bối cảnh bằng quá khứ tiếp diễn và hành động xen vào bằng quá khứ đơn với when/while.',
        vocab: [
          { w: 'suddenly', ipa: '/ˈsʌdənli/', vi: 'đột nhiên', ex: 'Suddenly, the lights went out.', exVi: 'Đột nhiên đèn tắt phụt.' },
          { w: 'happen', ipa: '/ˈhæpən/', vi: 'xảy ra', ex: 'What happened last night?', exVi: 'Tối qua đã xảy ra chuyện gì?' },
          { w: 'accident', ipa: '/ˈæksədənt/', vi: 'tai nạn', ex: 'I saw an accident on my way to work.', exVi: 'Tôi thấy một vụ tai nạn trên đường đi làm.' },
          { w: 'noise', ipa: '/nɔɪz/', vi: 'tiếng động, tiếng ồn', ex: 'We heard a strange noise outside.', exVi: 'Chúng tôi nghe thấy một tiếng động lạ bên ngoài.' },
          { w: 'scared', ipa: '/skɛrd/', vi: 'sợ hãi', ex: 'The little girl was scared of the dark.', exVi: 'Cô bé sợ bóng tối.' },
          { w: 'notice', ipa: '/ˈnoʊtɪs/', vi: 'để ý, nhận thấy', ex: "I didn't notice the man behind me.", exVi: 'Tôi không để ý người đàn ông phía sau mình.' },
          { w: 'realize', ipa: '/ˈriəˌlaɪz/', vi: 'nhận ra', ex: 'Then I realized I had no money.', exVi: 'Lúc đó tôi nhận ra mình không có tiền.' },
          { w: 'storm', ipa: '/stɔrm/', vi: 'cơn bão, giông', ex: 'The storm lasted all night.', exVi: 'Cơn bão kéo dài cả đêm.' },
          { w: 'strange', ipa: '/streɪndʒ/', vi: 'lạ, kỳ lạ', ex: 'Something strange happened to me yesterday.', exVi: 'Hôm qua có chuyện kỳ lạ xảy ra với tôi.' },
          { w: 'witness', ipa: '/ˈwɪtnəs/', vi: 'nhân chứng; chứng kiến', ex: 'Did anyone witness the accident?', exVi: 'Có ai chứng kiến vụ tai nạn không?' }
        ],
        grammar: {
          title: 'Quá khứ tiếp diễn (was/were + V-ing) với when / while',
          explain: [
            'Quá khứ tiếp diễn diễn tả hành động đang diễn ra tại một thời điểm trong quá khứ: "At 8 p.m. yesterday, I was watching TV." Cấu trúc: I/he/she/it + was + V-ing; you/we/they + were + V-ing.',
            'Khi một hành động đang diễn ra (quá khứ tiếp diễn) thì một hành động khác xen vào (quá khứ đơn), ta thường dùng when trước hành động ngắn: "I was cooking when the phone rang."',
            'While (trong khi) thường đứng trước hành động kéo dài (quá khứ tiếp diễn): "While I was cooking, the phone rang." Hai hành động cùng kéo dài song song: "While I was reading, my sister was playing games."',
            'Khi mệnh đề when/while đứng đầu câu, đặt dấu phẩy ngăn cách hai mệnh đề.'
          ],
          table: [
            ['Mẫu câu', 'Ý nghĩa', 'Ví dụ'],
            ['was/were + V-ing … when + V2', 'đang làm thì việc khác xen vào', 'I was walking home when it started to rain.'],
            ['While + was/were + V-ing, … V2', 'trong khi đang làm thì…', 'While she was driving, she saw an accident.'],
            ['While … V-ing, … V-ing', 'hai việc song song', 'While I was studying, he was sleeping.']
          ],
          examples: [
            { t: 'We were having dinner when the lights went out.', vi: 'Chúng tôi đang ăn tối thì mất điện.' },
            { t: 'While I was waiting for the bus, I met an old friend.', vi: 'Trong lúc đang đợi xe buýt, tôi gặp một người bạn cũ.' },
            { t: 'It was raining heavily and the wind was blowing.', vi: 'Trời đang mưa to và gió đang thổi.' },
            { t: 'What were you doing at 10 o\'clock last night?', vi: 'Lúc 10 giờ tối qua bạn đang làm gì?' }
          ],
          tip: 'Một số động từ chỉ trạng thái (know, like, want, believe…) thường không dùng ở dạng tiếp diễn: nói "I knew him", không nói "I was knowing him".'
        },
        dialogue: [
          { s: 'Mai', t: 'You look scared. What happened?', vi: 'Trông cậu có vẻ sợ. Có chuyện gì vậy?' },
          { s: 'Ben', t: 'I saw an accident while I was riding to work this morning.', vi: 'Sáng nay trong lúc đang đi xe đến chỗ làm, tớ thấy một vụ tai nạn.' },
          { s: 'Mai', t: 'Oh no! What were you doing when it happened?', vi: 'Ôi không! Lúc nó xảy ra cậu đang làm gì?' },
          { s: 'Ben', t: 'I was waiting at the traffic lights. Suddenly, I heard a loud noise.', vi: 'Tớ đang đợi đèn đỏ. Đột nhiên tớ nghe một tiếng động lớn.' },
          { s: 'Mai', t: 'Was anyone hurt?', vi: 'Có ai bị thương không?' },
          { s: 'Ben', t: 'A man fell off his motorbike, but he was OK. The police asked me to be a witness.', vi: 'Một người đàn ông ngã xe máy nhưng không sao. Cảnh sát nhờ tớ làm nhân chứng.' }
        ],
        exercises: [
          { type: 'mc', q: 'I ___ a shower when the phone rang.', options: ['took', 'was taking', 'were taking', 'am taking'], answer: 1,
            explain: 'Hành động đang diễn ra (I → was + V-ing) thì có việc khác xen vào.' },
          { type: 'mc', q: '___ they were playing football, it started to rain.', options: ['When', 'While', 'During', 'Since'], answer: 1,
            explain: 'While đứng trước hành động kéo dài (were playing).' },
          { type: 'mc', q: 'Which word means "đột nhiên"?', options: ['strange', 'suddenly', 'scared', 'notice'], answer: 1,
            explain: 'Suddenly = đột nhiên.' },
          { type: 'fill', q: 'We were sleeping when the storm ___. (begin)', answer: ['began'], hint: 'quá khứ đơn',
            explain: 'Hành động ngắn xen vào → quá khứ đơn: begin → began.' },
          { type: 'fill', q: 'While my parents ___ watching TV, I was doing my homework.', answer: ['were'], hint: 'was hay were?',
            explain: 'My parents (số nhiều) → were + V-ing.' },
          { type: 'fill', q: 'She was crossing the street ___ she saw the accident.', answer: ['when'], hint: 'when hay while?',
            explain: 'When đứng trước hành động ngắn xen vào (saw).' },
          { type: 'order', vi: 'Tôi đang đọc sách thì nghe thấy một tiếng động lạ.', words: ['I', 'strange', 'reading', 'a', 'when', 'was', 'heard', 'noise', 'I'],
            answer: 'I was reading when I heard a strange noise' },
          { type: 'order', vi: 'Lúc đó bạn đang làm gì?', words: ['you', 'were', 'What', 'then?', 'doing'],
            answer: 'What were you doing then?' }
        ]
      },
      // ───────────────────────── B1-5 ─────────────────────────
      {
        id: 'en-b1-5',
        icon: '⚖️',
        title: 'Ý kiến & so sánh',
        goal: 'Nêu ý kiến, đồng ý/không đồng ý và so sánh các lựa chọn bằng so sánh hơn, so sánh nhất và as…as.',
        vocab: [
          { w: 'opinion', ipa: '/əˈpɪnjən/', vi: 'ý kiến, quan điểm', ex: 'In my opinion, the train is better than the bus.', exVi: 'Theo tôi, tàu hoả tốt hơn xe buýt.' },
          { w: 'agree', ipa: '/əˈɡri/', vi: 'đồng ý', ex: 'I agree with you completely.', exVi: 'Tôi hoàn toàn đồng ý với bạn.' },
          { w: 'prefer', ipa: '/prɪˈfɜr/', vi: 'thích hơn', ex: 'I prefer tea to coffee.', exVi: 'Tôi thích trà hơn cà phê.' },
          { w: 'affordable', ipa: '/əˈfɔrdəbəl/', vi: 'giá phải chăng', ex: 'This phone is more affordable than that one.', exVi: 'Điện thoại này giá phải chăng hơn cái kia.' },
          { w: 'convenient', ipa: '/kənˈvinjənt/', vi: 'tiện lợi', ex: 'Online shopping is very convenient.', exVi: 'Mua sắm trực tuyến rất tiện lợi.' },
          { w: 'crowded', ipa: '/ˈkraʊdɪd/', vi: 'đông đúc', ex: 'The market is crowded on weekends.', exVi: 'Chợ đông đúc vào cuối tuần.' },
          { w: 'reliable', ipa: '/rɪˈlaɪəbəl/', vi: 'đáng tin cậy, bền', ex: 'This is the most reliable car in its class.', exVi: 'Đây là chiếc xe đáng tin cậy nhất trong phân khúc.' },
          { w: 'comfortable', ipa: '/ˈkʌmftərbəl/', vi: 'thoải mái, dễ chịu', ex: 'These shoes are more comfortable than mine.', exVi: 'Đôi giày này thoải mái hơn đôi của tôi.' },
          { w: 'advantage', ipa: '/ədˈvæntɪdʒ/', vi: 'ưu điểm, lợi thế', ex: 'The main advantage of the city is the jobs.', exVi: 'Ưu điểm chính của thành phố là có nhiều việc làm.' },
          { w: 'disadvantage', ipa: '/ˌdɪsədˈvæntɪdʒ/', vi: 'nhược điểm, bất lợi', ex: 'One disadvantage of living here is the noise.', exVi: 'Một nhược điểm của việc sống ở đây là tiếng ồn.' }
        ],
        grammar: {
          title: 'So sánh hơn, so sánh nhất và as … as',
          explain: [
            'Tính từ ngắn (1 âm tiết, hoặc 2 âm tiết tận cùng -y): thêm -er để so sánh hơn và the …-est để so sánh nhất: cheap → cheaper → the cheapest; easy → easier → the easiest. Tính từ dài: more … / the most …: more expensive, the most comfortable.',
            'So sánh hơn dùng "than": "Hanoi is colder than Ho Chi Minh City in winter." So sánh nhất luôn có "the" và thường đi với in/of: "the tallest building in Vietnam".',
            'Bất quy tắc: good → better → the best; bad → worse → the worst; far → farther/further → the farthest/furthest.',
            'So sánh bằng: as + tính từ + as ("bằng"); not as … as ("không bằng"): "The bus is not as fast as the train."'
          ],
          table: [
            ['Tính từ', 'So sánh hơn', 'So sánh nhất'],
            ['cheap', 'cheaper than', 'the cheapest'],
            ['big', 'bigger than', 'the biggest'],
            ['busy', 'busier than', 'the busiest'],
            ['convenient', 'more convenient than', 'the most convenient'],
            ['good / bad', 'better / worse than', 'the best / the worst']
          ],
          examples: [
            { t: 'The train is more comfortable than the bus.', vi: 'Tàu hoả thoải mái hơn xe buýt.' },
            { t: 'This is the most crowded street in the city.', vi: 'Đây là con phố đông đúc nhất thành phố.' },
            { t: 'My new phone is as good as the old one.', vi: 'Điện thoại mới của tôi tốt bằng cái cũ.' },
            { t: 'Living in the countryside is not as expensive as living in the city.', vi: 'Sống ở nông thôn không đắt đỏ bằng sống ở thành phố.' }
          ],
          tip: 'Không dùng "more" cùng với đuôi -er: nói "cheaper", không nói "more cheaper". Nhân đôi phụ âm cuối với tính từ ngắn kiểu phụ âm–nguyên âm–phụ âm: big → bigger, hot → hotter.'
        },
        dialogue: [
          { s: 'Lan', t: "Should we take the bus or the train to Hue? What's your opinion?", vi: 'Mình nên đi xe khách hay tàu hoả ra Huế? Ý cậu thế nào?' },
          { s: 'David', t: 'I prefer the train. It\'s more comfortable than the bus.', vi: 'Mình thích tàu hơn. Nó thoải mái hơn xe khách.' },
          { s: 'Lan', t: "I agree, but the bus is cheaper and it's faster too.", vi: 'Mình đồng ý, nhưng xe khách rẻ hơn và cũng nhanh hơn.' },
          { s: 'David', t: "That's true. But the train is the most reliable option. It's never late.", vi: 'Đúng vậy. Nhưng tàu là lựa chọn đáng tin cậy nhất. Nó không bao giờ trễ.' },
          { s: 'Lan', t: "Well, the bus isn't as crowded as the train during holidays.", vi: 'Ừm, dịp lễ thì xe khách không đông bằng tàu.' },
          { s: 'David', t: "OK, each has advantages and disadvantages. Let's check the prices first.", vi: 'Được rồi, mỗi cái đều có ưu và nhược điểm. Mình xem giá trước đã.' }
        ],
        exercises: [
          { type: 'mc', q: 'This hotel is ___ than the one we stayed at last year.', options: ['more comfortable', 'comfortabler', 'most comfortable', 'as comfortable'], answer: 0,
            explain: 'Comfortable là tính từ dài → more comfortable than.' },
          { type: 'mc', q: 'It was ___ day of my life!', options: ['the better', 'the best', 'best', 'the goodest'], answer: 1,
            explain: 'Good → better → the best (bất quy tắc).' },
          { type: 'mc', q: 'My brother is not as ___ as me.', options: ['taller', 'tallest', 'tall', 'more tall'], answer: 2,
            explain: 'As … as dùng tính từ nguyên mẫu: as tall as.' },
          { type: 'fill', q: 'Ho Chi Minh City is ___ than Da Lat. (hot)', answer: ['hotter'], hint: 'so sánh hơn',
            explain: 'Hot → hotter (nhân đôi t).' },
          { type: 'fill', q: 'This is the ___ affordable phone in the shop.', answer: ['most'], hint: 'so sánh nhất của tính từ dài',
            explain: 'Affordable là tính từ dài → the most affordable.' },
          { type: 'fill', q: 'Traffic today is ___ than yesterday. (bad)', answer: ['worse'], hint: 'bất quy tắc',
            explain: 'Bad → worse → the worst.' },
          { type: 'order', vi: 'Theo tôi, tàu hoả tiện lợi hơn.', words: ['opinion,', 'more', 'In', 'train', 'is', 'my', 'convenient', 'the'],
            answer: 'In my opinion, the train is more convenient' },
          { type: 'order', vi: 'Xe khách không nhanh bằng máy bay.', words: ['as', 'bus', 'fast', 'The', 'plane', "isn't", 'as', 'the'],
            answer: "The bus isn't as fast as the plane" }
        ]
      },
      // ───────────────────────── B1-6 ─────────────────────────
      {
        id: 'en-b1-6',
        icon: '🌦️',
        title: 'Điều kiện thực tế',
        goal: 'Nói về sự thật hiển nhiên và những khả năng có thể xảy ra trong tương lai bằng câu điều kiện loại 0 và loại 1.',
        vocab: [
          { w: 'unless', ipa: '/ənˈlɛs/', vi: 'trừ khi, nếu không', ex: "You'll miss the bus unless you hurry.", exVi: 'Bạn sẽ lỡ xe buýt nếu không nhanh lên.' },
          { w: 'as soon as', ipa: '/æz ˈsun æz/', vi: 'ngay khi', ex: "I'll call you as soon as I arrive.", exVi: 'Tôi sẽ gọi cho bạn ngay khi tôi đến nơi.' },
          { w: 'forecast', ipa: '/ˈfɔrˌkæst/', vi: 'dự báo', ex: 'The weather forecast says it will rain.', exVi: 'Dự báo thời tiết nói trời sẽ mưa.' },
          { w: 'cancel', ipa: '/ˈkænsəl/', vi: 'huỷ', ex: 'They canceled the concert because of the storm.', exVi: 'Họ đã huỷ buổi hoà nhạc vì cơn bão.' },
          { w: 'miss', ipa: '/mɪs/', vi: 'lỡ, bỏ lỡ', ex: "Hurry up or we'll miss the train.", exVi: 'Nhanh lên kẻo chúng ta lỡ tàu.' },
          { w: 'boil', ipa: '/bɔɪl/', vi: 'sôi, đun sôi', ex: 'Water boils at 100 degrees Celsius.', exVi: 'Nước sôi ở 100 độ C.' },
          { w: 'freeze', ipa: '/friz/', vi: 'đóng băng', ex: 'Water freezes at 0 degrees Celsius.', exVi: 'Nước đóng băng ở 0 độ C.' },
          { w: 'umbrella', ipa: '/ʌmˈbrɛlə/', vi: 'cái ô, dù', ex: "Take an umbrella. It's going to rain.", exVi: 'Mang ô theo nhé. Trời sắp mưa đấy.' },
          { w: 'probably', ipa: '/ˈprɑbəbli/', vi: 'có lẽ, có khả năng', ex: "If it rains, we'll probably stay home.", exVi: 'Nếu trời mưa, có lẽ chúng tôi sẽ ở nhà.' },
          { w: 'outdoor', ipa: '/ˈaʊtˌdɔr/', vi: 'ngoài trời', ex: 'We love outdoor activities in summer.', exVi: 'Chúng tôi thích các hoạt động ngoài trời vào mùa hè.' }
        ],
        grammar: {
          title: 'Câu điều kiện loại 0 và loại 1; unless',
          explain: [
            'Loại 0 (sự thật, quy luật, thói quen luôn đúng): If + hiện tại đơn, hiện tại đơn. Ví dụ: "If you heat ice, it melts." Có thể thay if bằng when mà nghĩa gần như không đổi.',
            'Loại 1 (điều có thể xảy ra trong tương lai): If + hiện tại đơn, will/can/may + V. Ví dụ: "If it rains tomorrow, we will cancel the picnic." Mệnh đề chính cũng có thể là câu mệnh lệnh: "If you see Tom, tell him to call me."',
            'Không dùng will trong mệnh đề if, dù nghĩa là tương lai: nói "If it rains tomorrow…", không nói "If it will rain tomorrow…". Quy tắc này cũng áp dụng sau when, as soon as, before, after, until khi nói về tương lai.',
            'Unless = if … not (trừ khi / nếu không): "Unless you study, you will fail" = "If you don\'t study, you will fail."'
          ],
          table: [
            ['Loại', 'Mệnh đề if', 'Mệnh đề chính', 'Ví dụ'],
            ['0', 'If + hiện tại đơn', 'hiện tại đơn', 'If you mix red and blue, you get purple.'],
            ['1', 'If + hiện tại đơn', 'will / can / may + V', "If you hurry, you'll catch the bus."],
            ['1 (unless)', 'Unless + hiện tại đơn', 'will + V', "Unless it stops raining, we'll stay home."]
          ],
          examples: [
            { t: 'If you heat water to 100°C, it boils.', vi: 'Nếu đun nước đến 100°C, nước sẽ sôi.' },
            { t: "If the forecast is right, it'll be sunny tomorrow.", vi: 'Nếu dự báo đúng thì ngày mai trời sẽ nắng.' },
            { t: "We'll miss the flight unless we leave now.", vi: 'Chúng ta sẽ lỡ chuyến bay nếu không đi ngay bây giờ.' },
            { t: "I'll text you as soon as I get home.", vi: 'Tôi sẽ nhắn tin cho bạn ngay khi về đến nhà.' }
          ],
          tip: 'Khi mệnh đề if đứng đầu câu, dùng dấu phẩy: "If it rains, we\'ll stay home." Khi mệnh đề chính đứng trước thì không cần dấu phẩy: "We\'ll stay home if it rains."'
        },
        dialogue: [
          { s: 'Hoa', t: 'Are we still going on the picnic tomorrow?', vi: 'Mai mình vẫn đi dã ngoại chứ?' },
          { s: 'Jack', t: "I'm not sure. The forecast says there will be a storm.", vi: 'Mình không chắc. Dự báo nói sẽ có bão.' },
          { s: 'Hoa', t: "If it rains, we'll cancel it and watch a movie instead.", vi: 'Nếu trời mưa, mình sẽ huỷ và đi xem phim thay vào đó.' },
          { s: 'Jack', t: "Good idea. But if it's sunny, we'll go to the lake.", vi: 'Ý hay đấy. Nhưng nếu trời nắng thì mình sẽ ra hồ.' },
          { s: 'Hoa', t: "OK. I'll call you as soon as I check the weather in the morning.", vi: 'Được. Sáng mai xem thời tiết xong là mình gọi cậu ngay.' },
          { s: 'Jack', t: "Great. And bring an umbrella unless you want to get wet!", vi: 'Tuyệt. Và mang ô theo nhé, trừ khi cậu muốn bị ướt!' }
        ],
        exercises: [
          { type: 'mc', q: 'If you ___ ice, it melts.', options: ['heat', 'will heat', 'heated', 'heating'], answer: 0,
            explain: 'Loại 0 (sự thật): If + hiện tại đơn, hiện tại đơn.' },
          { type: 'mc', q: "If it ___ tomorrow, we'll stay at home.", options: ['will rain', 'rains', 'rained', 'raining'], answer: 1,
            explain: 'Không dùng will trong mệnh đề if: If it rains…' },
          { type: 'mc', q: "You'll be late ___ you leave now.", options: ['if', 'unless', 'when', 'as soon as'], answer: 1,
            explain: 'Unless = if not: bạn sẽ trễ nếu không đi ngay.' },
          { type: 'fill', q: 'If you study hard, you ___ pass the exam.', answer: ['will', "'ll"], hint: 'loại 1',
            explain: 'Loại 1: mệnh đề chính dùng will + V.' },
          { type: 'fill', q: 'Water ___ at 0 degrees Celsius. (freeze)', answer: ['freezes'], hint: 'sự thật hiển nhiên',
            explain: 'Sự thật khoa học → hiện tại đơn: freezes.' },
          { type: 'fill', q: "I'll call you as soon as I ___ at the hotel. (arrive)", answer: ['arrive'], hint: 'sau as soon as',
            explain: 'Sau as soon as nói về tương lai vẫn dùng hiện tại đơn.' },
          { type: 'order', vi: 'Nếu trời mưa, chúng tôi sẽ huỷ chuyến đi.', words: ['we', 'it', 'the', "will", 'If', 'cancel', 'rains,', 'trip'],
            answer: 'If it rains, we will cancel the trip' },
          { type: 'order', vi: 'Bạn sẽ lỡ xe buýt trừ khi bạn nhanh lên.', words: ['unless', 'the', "You'll", 'hurry', 'miss', 'bus', 'you'],
            answer: "You'll miss the bus unless you hurry" }
        ]
      }
    ]
  },
  {
    id: 'B2',
    title: 'Trung cấp 2',
    desc: 'Nói về giả định và tiếc nuối, đọc hiểu tin tức, thuật lại lời nói, mô tả chi tiết bằng mệnh đề quan hệ và viết email trang trọng.',
    units: [
      // ───────────────────────── B2-1 ─────────────────────────
      {
        id: 'en-b2-1',
        icon: '💭',
        title: 'Giả định & ước muốn',
        goal: 'Nói về tình huống không có thật ở hiện tại và quá khứ, bày tỏ ước muốn và sự tiếc nuối với câu điều kiện loại 2, loại 3 và wish.',
        vocab: [
          { w: 'regret', ipa: '/rɪˈɡrɛt/', vi: 'hối tiếc; sự hối tiếc', ex: 'I regret not studying harder at school.', exVi: 'Tôi hối tiếc vì hồi đi học không chăm chỉ hơn.' },
          { w: 'opportunity', ipa: '/ˌɑpərˈtunəti/', vi: 'cơ hội', ex: 'It was a great opportunity to work abroad.', exVi: 'Đó là một cơ hội tuyệt vời để làm việc ở nước ngoài.' },
          { w: 'afford', ipa: '/əˈfɔrd/', vi: 'có đủ khả năng (chi trả)', ex: "We can't afford a new car right now.", exVi: 'Hiện giờ chúng tôi không đủ tiền mua xe mới.' },
          { w: 'lottery', ipa: '/ˈlɑtəri/', vi: 'xổ số', ex: 'If I won the lottery, I would travel the world.', exVi: 'Nếu trúng xổ số, tôi sẽ đi du lịch vòng quanh thế giới.' },
          { w: 'imagine', ipa: '/ɪˈmædʒɪn/', vi: 'tưởng tượng', ex: 'Imagine you could live anywhere.', exVi: 'Hãy tưởng tượng bạn có thể sống ở bất cứ đâu.' },
          { w: 'decision', ipa: '/dɪˈsɪʒən/', vi: 'quyết định', ex: 'Moving to Da Nang was the best decision of my life.', exVi: 'Chuyển đến Đà Nẵng là quyết định đúng đắn nhất đời tôi.' },
          { w: 'career', ipa: '/kəˈrɪr/', vi: 'sự nghiệp', ex: 'She wants a career in medicine.', exVi: 'Cô ấy muốn theo sự nghiệp y khoa.' },
          { w: 'consequence', ipa: '/ˈkɑnsəkwɛns/', vi: 'hậu quả', ex: 'Think about the consequences before you act.', exVi: 'Hãy nghĩ đến hậu quả trước khi hành động.' },
          { w: 'hesitate', ipa: '/ˈhɛzəˌteɪt/', vi: 'do dự, lưỡng lự', ex: "Don't hesitate to ask for help.", exVi: 'Đừng ngần ngại nhờ giúp đỡ.' },
          { w: 'situation', ipa: '/ˌsɪtʃuˈeɪʃən/', vi: 'tình huống, hoàn cảnh', ex: 'What would you do in my situation?', exVi: 'Nếu ở trong hoàn cảnh của tôi, bạn sẽ làm gì?' }
        ],
        grammar: {
          title: 'Câu điều kiện loại 2, loại 3 và wish',
          explain: [
            'Loại 2 (không có thật/khó xảy ra ở hiện tại hoặc tương lai): If + quá khứ đơn, would/could + V. Ví dụ: "If I had more time, I would learn Japanese" (thực tế tôi không có nhiều thời gian). Với to be, dùng were cho mọi ngôi: "If I were you, I would accept the offer."',
            'Loại 3 (không có thật trong quá khứ, thường để tiếc nuối): If + had + V3, would have + V3. Ví dụ: "If I had left earlier, I wouldn\'t have missed the train" (thực tế tôi đã đi muộn và lỡ tàu).',
            'Wish + quá khứ đơn: ước điều trái với hiện tại ("I wish I lived near the sea"). Wish + had + V3: tiếc nuối điều đã xảy ra trong quá khứ ("I wish I had studied harder"). Wish + could + V: ước có khả năng làm gì.',
            'Wish + someone + would + V: mong ai đó thay đổi hành vi (thường là phàn nàn): "I wish my neighbors would turn down the music."'
          ],
          table: [
            ['Cấu trúc', 'Ý nghĩa', 'Ví dụ'],
            ['If + V2, would + V', 'không có thật ở hiện tại', 'If I were rich, I would buy a house.'],
            ['If + had V3, would have V3', 'không có thật ở quá khứ', 'If she had asked, I would have helped.'],
            ['wish + V2 / were', 'ước cho hiện tại', 'I wish I were taller.'],
            ['wish + had V3', 'tiếc nuối quá khứ', "I wish I hadn't said that."]
          ],
          examples: [
            { t: 'If I won the lottery, I would quit my job.', vi: 'Nếu trúng xổ số, tôi sẽ nghỉ việc.' },
            { t: 'If I were you, I wouldn\'t hesitate.', vi: 'Nếu tôi là bạn, tôi sẽ không do dự.' },
            { t: "If we had booked earlier, we would have got cheaper tickets.", vi: 'Nếu chúng ta đặt sớm hơn thì đã mua được vé rẻ hơn rồi.' },
            { t: 'I wish I could speak English fluently.', vi: 'Ước gì tôi nói được tiếng Anh trôi chảy.' },
            { t: "She wishes she hadn't missed that opportunity.", vi: 'Cô ấy tiếc là đã bỏ lỡ cơ hội đó.' }
          ],
          tip: 'Mẹo nhớ: lùi một thì so với thực tế. Thực tế hiện tại → dùng quá khứ đơn (loại 2, wish); thực tế quá khứ → dùng quá khứ hoàn thành (loại 3, wish + had V3). Không dùng would trong mệnh đề if.'
        },
        dialogue: [
          { s: 'Thu', t: 'What would you do if you won the lottery?', vi: 'Nếu trúng xổ số, cậu sẽ làm gì?' },
          { s: 'Mark', t: "I'd travel around the world. But honestly, I wish I had a better job.", vi: 'Mình sẽ đi du lịch vòng quanh thế giới. Nhưng thật lòng thì mình ước có một công việc tốt hơn.' },
          { s: 'Thu', t: "Didn't you get a job offer in Singapore last year?", vi: 'Năm ngoái cậu chẳng được mời làm việc ở Singapore à?' },
          { s: 'Mark', t: 'Yes, but I hesitated and said no. I really regret that decision.', vi: 'Ừ, nhưng mình do dự rồi từ chối. Mình thật sự hối tiếc quyết định đó.' },
          { s: 'Thu', t: 'If you had accepted, your career would have been very different.', vi: 'Nếu cậu nhận lời thì sự nghiệp của cậu đã khác hẳn rồi.' },
          { s: 'Mark', t: "I know. If I were in that situation again, I wouldn't hesitate.", vi: 'Mình biết. Nếu gặp lại tình huống đó, mình sẽ không do dự nữa.' }
        ],
        exercises: [
          { type: 'mc', q: 'If I ___ you, I would talk to her.', options: ['am', 'was being', 'were', 'had been'], answer: 2,
            explain: 'Loại 2, lời khuyên: If I were you…' },
          { type: 'mc', q: 'If she had studied harder, she ___ the exam.', options: ['would pass', 'would have passed', 'will pass', 'passed'], answer: 1,
            explain: 'Loại 3: If + had V3, would have + V3.' },
          { type: 'mc', q: 'I wish I ___ more free time. I am always busy.', options: ['have', 'had', 'will have', 'am having'], answer: 1,
            explain: 'Ước trái với hiện tại → wish + quá khứ đơn.' },
          { type: 'fill', q: 'If I had enough money, I ___ buy a new laptop.', answer: ['would', "'d"], hint: 'loại 2',
            explain: 'Loại 2: mệnh đề chính dùng would + V.' },
          { type: 'fill', q: "I wish I ___ said that to him. Now he's angry.", answer: ["hadn't", 'had not'], hint: 'tiếc điều đã làm',
            explain: 'Tiếc nuối quá khứ → wish + had (not) + V3.' },
          { type: 'fill', q: "If we had left earlier, we wouldn't ___ missed the train.", answer: ['have'], hint: 'loại 3',
            explain: 'Loại 3: would (not) have + V3 → wouldn\'t have missed.' },
          { type: 'order', vi: 'Bạn sẽ làm gì nếu bạn là tôi?', words: ['if', 'you', 'What', 'me?', 'would', 'were', 'do', 'you'],
            answer: 'What would you do if you were me?' },
          { type: 'order', vi: 'Ước gì tôi đã nhận lời mời làm việc đó.', words: ['the', 'I', 'had', 'wish', 'accepted', 'offer', 'job', 'I'],
            answer: 'I wish I had accepted the job offer' }
        ]
      },
      // ───────────────────────── B2-2 ─────────────────────────
      {
        id: 'en-b2-2',
        icon: '📰',
        title: 'Tin tức',
        goal: 'Đọc hiểu và đưa tin bằng câu bị động ở các thì thường gặp.',
        vocab: [
          { w: 'headline', ipa: '/ˈhɛdˌlaɪn/', vi: 'tiêu đề bài báo', ex: 'The news was in all the headlines.', exVi: 'Tin này xuất hiện trên tiêu đề mọi tờ báo.' },
          { w: 'journalist', ipa: '/ˈdʒɜrnəlɪst/', vi: 'nhà báo', ex: 'The journalist interviewed several witnesses.', exVi: 'Nhà báo đã phỏng vấn vài nhân chứng.' },
          { w: 'report', ipa: '/rɪˈpɔrt/', vi: 'đưa tin; bản tin, báo cáo', ex: 'The fire was reported at 6 a.m.', exVi: 'Vụ cháy được báo tin lúc 6 giờ sáng.' },
          { w: 'arrest', ipa: '/əˈrɛst/', vi: 'bắt giữ', ex: 'Two men have been arrested.', exVi: 'Hai người đàn ông đã bị bắt giữ.' },
          { w: 'investigate', ipa: '/ɪnˈvɛstəˌɡeɪt/', vi: 'điều tra', ex: 'The case is being investigated by the police.', exVi: 'Vụ việc đang được cảnh sát điều tra.' },
          { w: 'announce', ipa: '/əˈnaʊns/', vi: 'thông báo, công bố', ex: 'The results will be announced tomorrow.', exVi: 'Kết quả sẽ được công bố vào ngày mai.' },
          { w: 'damage', ipa: '/ˈdæmɪdʒ/', vi: 'làm hư hại; thiệt hại', ex: 'Many houses were damaged by the flood.', exVi: 'Nhiều ngôi nhà bị hư hại do lũ.' },
          { w: 'injure', ipa: '/ˈɪndʒər/', vi: 'làm bị thương', ex: 'Three people were injured in the crash.', exVi: 'Ba người bị thương trong vụ va chạm.' },
          { w: 'government', ipa: '/ˈɡʌvərnmənt/', vi: 'chính phủ', ex: 'A new law was passed by the government.', exVi: 'Một đạo luật mới đã được chính phủ thông qua.' },
          { w: 'release', ipa: '/rɪˈlis/', vi: 'phát hành; thả ra', ex: 'The new film will be released in December.', exVi: 'Bộ phim mới sẽ được phát hành vào tháng Mười Hai.' }
        ],
        grammar: {
          title: 'Câu bị động ở các thì: be + V3',
          explain: [
            'Câu bị động dùng khi ta quan tâm đến sự việc/đối tượng chịu tác động hơn là người làm, hoặc khi không biết/không cần nói ai làm. Đây là cấu trúc rất phổ biến trong tin tức.',
            'Công thức chung: be (chia theo thì) + V3. Chỉ có "be" thay đổi theo thì, còn động từ chính luôn ở dạng V3.',
            'Muốn nêu người/vật thực hiện hành động, dùng by: "The bridge was built by a Japanese company." Nếu người làm không quan trọng (by people, by someone) thì bỏ đi.',
            'Chuyển chủ động → bị động: tân ngữ của câu chủ động thành chủ ngữ, động từ thành be + V3: "Police arrested the man" → "The man was arrested (by police)."'
          ],
          table: [
            ['Thì', 'Bị động', 'Ví dụ'],
            ['Hiện tại đơn', 'am/is/are + V3', 'English is spoken here.'],
            ['Hiện tại tiếp diễn', 'am/is/are + being + V3', 'The road is being repaired.'],
            ['Quá khứ đơn', 'was/were + V3', 'The thief was arrested yesterday.'],
            ['Hiện tại hoàn thành', 'has/have + been + V3', 'Ten people have been injured.'],
            ['Tương lai đơn', 'will + be + V3', 'The results will be announced soon.'],
            ['Động từ khuyết thiếu', 'can/must/should + be + V3', 'Plastic can be recycled.']
          ],
          examples: [
            { t: 'Thousands of homes were damaged by the storm.', vi: 'Hàng nghìn ngôi nhà bị cơn bão làm hư hại.' },
            { t: 'The cause of the fire is still being investigated.', vi: 'Nguyên nhân vụ cháy vẫn đang được điều tra.' },
            { t: 'A new hospital has been built in the city center.', vi: 'Một bệnh viện mới đã được xây ở trung tâm thành phố.' },
            { t: 'The winners will be announced next week.', vi: 'Người thắng cuộc sẽ được công bố vào tuần tới.' }
          ],
          tip: 'Đừng quên "be": người Việt hay viết "The house built in 1990" (thiếu was). Đúng là "The house was built in 1990." Ngoài ra, nội động từ như happen, arrive, die không có dạng bị động: nói "The accident happened", không nói "was happened".'
        },
        dialogue: [
          { s: 'Anchor', t: 'Good evening. Here is the main news. A strong storm hit the coast last night.', vi: 'Chào buổi tối. Sau đây là tin chính. Một cơn bão mạnh đã đổ bộ vào bờ biển đêm qua.' },
          { s: 'Reporter', t: 'Yes. Hundreds of houses were damaged and twelve people were injured.', vi: 'Vâng. Hàng trăm ngôi nhà bị hư hại và mười hai người bị thương.' },
          { s: 'Anchor', t: 'Have the injured been taken to hospital?', vi: 'Những người bị thương đã được đưa đến bệnh viện chưa?' },
          { s: 'Reporter', t: 'Yes, they have all been taken to the provincial hospital. Roads are being cleared now.', vi: 'Rồi, tất cả đã được đưa đến bệnh viện tỉnh. Hiện các tuyến đường đang được dọn dẹp.' },
          { s: 'Anchor', t: 'What has the government said?', vi: 'Chính phủ đã nói gì?' },
          { s: 'Reporter', t: 'It has been announced that emergency money will be sent to the area tomorrow.', vi: 'Đã có thông báo rằng tiền hỗ trợ khẩn cấp sẽ được gửi đến khu vực này vào ngày mai.' }
        ],
        exercises: [
          { type: 'mc', q: 'The thief ___ by the police yesterday.', options: ['arrested', 'was arrested', 'has arrested', 'is arresting'], answer: 1,
            explain: 'Bị động quá khứ đơn: was + V3 (yesterday).' },
          { type: 'mc', q: 'The new bridge ___ at the moment.', options: ['is building', 'is being built', 'was built', 'has built'], answer: 1,
            explain: 'Bị động hiện tại tiếp diễn: is being + V3.' },
          { type: 'mc', q: 'A person who writes news for a newspaper is a ___.', options: ['headline', 'journalist', 'witness', 'government'], answer: 1,
            explain: 'Journalist = nhà báo.' },
          { type: 'fill', q: 'Three people have ___ injured in the accident.', answer: ['been'], hint: 'hiện tại hoàn thành bị động',
            explain: 'has/have + been + V3.' },
          { type: 'fill', q: 'The results will be ___ next Monday. (announce)', answer: ['announced'], hint: 'V3',
            explain: 'will be + V3: announced.' },
          { type: 'fill', q: 'English ___ spoken in many countries.', answer: ['is'], hint: 'hiện tại đơn bị động',
            explain: 'Bị động hiện tại đơn: is + V3.' },
          { type: 'order', vi: 'Vụ việc đang được cảnh sát điều tra.', words: ['by', 'being', 'The', 'police', 'investigated', 'is', 'case', 'the'],
            answer: 'The case is being investigated by the police' },
          { type: 'order', vi: 'Nhiều ngôi nhà bị lũ làm hư hại.', words: ['the', 'houses', 'damaged', 'Many', 'by', 'were', 'flood'],
            answer: 'Many houses were damaged by the flood' }
        ]
      },
      // ───────────────────────── B2-3 ─────────────────────────
      {
        id: 'en-b2-3',
        icon: '🗣️',
        title: 'Kể lại lời nói',
        goal: 'Thuật lại lời nói, câu hỏi và yêu cầu của người khác bằng câu tường thuật, lùi thì và đổi đại từ, trạng từ cho đúng.',
        vocab: [
          { w: 'claim', ipa: '/kleɪm/', vi: 'khẳng định, tuyên bố (chưa chắc đúng)', ex: 'He claimed that he had never met her.', exVi: 'Anh ta khẳng định rằng chưa bao giờ gặp cô ấy.' },
          { w: 'admit', ipa: '/ədˈmɪt/', vi: 'thừa nhận', ex: 'She admitted that she was wrong.', exVi: 'Cô ấy thừa nhận rằng mình đã sai.' },
          { w: 'deny', ipa: '/dɪˈnaɪ/', vi: 'phủ nhận', ex: 'He denied taking the money.', exVi: 'Anh ta phủ nhận việc lấy tiền.' },
          { w: 'explain', ipa: '/ɪkˈspleɪn/', vi: 'giải thích', ex: 'She explained that the train was late.', exVi: 'Cô ấy giải thích rằng tàu bị trễ.' },
          { w: 'mention', ipa: '/ˈmɛnʃən/', vi: 'đề cập, nhắc đến', ex: 'He mentioned that he was moving to Hanoi.', exVi: 'Anh ấy có nhắc rằng anh ấy sắp chuyển ra Hà Nội.' },
          { w: 'promise', ipa: '/ˈprɑmɪs/', vi: 'hứa; lời hứa', ex: 'She promised to call me back.', exVi: 'Cô ấy hứa sẽ gọi lại cho tôi.' },
          { w: 'suggest', ipa: '/səɡˈdʒɛst/', vi: 'gợi ý, đề xuất', ex: 'My friend suggested going to the beach.', exVi: 'Bạn tôi gợi ý đi biển.' },
          { w: 'insist', ipa: '/ɪnˈsɪst/', vi: 'khăng khăng, nhất quyết', ex: 'He insisted on paying for dinner.', exVi: 'Anh ấy nhất quyết trả tiền bữa tối.' },
          { w: 'rumor', ipa: '/ˈrumər/', vi: 'tin đồn', ex: "There's a rumor that the company will close.", exVi: 'Có tin đồn rằng công ty sẽ đóng cửa.' },
          { w: 'gossip', ipa: '/ˈɡɑsɪp/', vi: 'chuyện ngồi lê đôi mách; buôn chuyện', ex: "Don't believe office gossip.", exVi: 'Đừng tin chuyện buôn dưa lê ở văn phòng.' }
        ],
        grammar: {
          title: 'Câu tường thuật (reported speech)',
          explain: [
            'Khi thuật lại lời ai đó bằng động từ ở quá khứ (said, told, asked…), ta thường lùi thì một bậc: hiện tại đơn → quá khứ đơn; hiện tại tiếp diễn → quá khứ tiếp diễn; hiện tại hoàn thành và quá khứ đơn → quá khứ hoàn thành; will → would; can → could.',
            'Đổi đại từ và trạng từ cho phù hợp: I → he/she, my → his/her; now → then; today → that day; tomorrow → the next day / the following day; yesterday → the day before; here → there; this → that.',
            'Câu hỏi: dùng asked + if/whether (câu hỏi yes/no) hoặc asked + từ để hỏi, và đưa về trật tự câu khẳng định (không đảo trợ động từ): "Where do you live?" → She asked me where I lived.',
            'Mệnh lệnh, yêu cầu: told/asked + người + (not) to V: "Don\'t be late!" → He told us not to be late. Lưu ý: say (something) nhưng tell + người: said that…, told me that…'
          ],
          table: [
            ['Lời nói trực tiếp', 'Câu tường thuật'],
            ['"I am tired."', 'She said (that) she was tired.'],
            ['"I will call you tomorrow."', 'He said he would call me the next day.'],
            ['"I have finished."', 'She said she had finished.'],
            ['"Do you like coffee?"', 'He asked me if I liked coffee.'],
            ['"Where are you going?"', 'She asked me where I was going.'],
            ['"Please close the door."', 'He asked me to close the door.']
          ],
          examples: [
            { t: 'Lan said that she was moving to Da Nang.', vi: 'Lan nói rằng cô ấy sắp chuyển vào Đà Nẵng.' },
            { t: 'He told me he had lost his phone the day before.', vi: 'Anh ấy kể với tôi rằng hôm trước anh ấy làm mất điện thoại.' },
            { t: 'The manager asked whether we could work on Saturday.', vi: 'Quản lý hỏi liệu chúng tôi có thể làm việc vào thứ Bảy không.' },
            { t: 'My mother told me not to stay out late.', vi: 'Mẹ dặn tôi đừng đi chơi về muộn.' }
          ],
          tip: 'Lỗi thường gặp: "She asked me where did I live." Đúng phải là "She asked me where I lived." Ngoài ra, "He said me…" là sai; dùng "He told me…" hoặc "He said to me…".'
        },
        dialogue: [
          { s: 'Hà', t: 'Did you talk to Peter today? What did he say?', vi: 'Hôm nay cậu nói chuyện với Peter chưa? Cậu ấy nói gì?' },
          { s: 'Sam', t: 'He said he was going to leave the company.', vi: 'Cậu ấy nói là sắp nghỉ việc ở công ty.' },
          { s: 'Hà', t: "Really? I heard a rumor, but I didn't believe it. Did he explain why?", vi: 'Thật à? Mình có nghe tin đồn nhưng không tin. Cậu ấy có giải thích tại sao không?' },
          { s: 'Sam', t: 'He mentioned that he had found a better job in Singapore.', vi: 'Cậu ấy có nhắc rằng đã tìm được một công việc tốt hơn ở Singapore.' },
          { s: 'Hà', t: 'Did you ask him when he would leave?', vi: 'Cậu có hỏi cậu ấy khi nào nghỉ không?' },
          { s: 'Sam', t: "Yes. He told me he would leave next month, and he asked me not to tell anyone. Oops!", vi: 'Có. Cậu ấy bảo tháng sau sẽ nghỉ, và dặn mình đừng nói với ai. Ối!' }
        ],
        exercises: [
          { type: 'mc', q: '"I am hungry," she said. → She said that she ___ hungry.', options: ['is', 'was', 'has been', 'will be'], answer: 1,
            explain: 'Lùi thì: am → was.' },
          { type: 'mc', q: '"Where do you work?" he asked. → He asked me where ___.', options: ['do I work', 'I worked', 'did I work', 'I work did'], answer: 1,
            explain: 'Câu hỏi tường thuật dùng trật tự khẳng định và lùi thì: where I worked.' },
          { type: 'mc', q: 'He ___ me that he had finished the report.', options: ['said', 'told', 'asked', 'spoke'], answer: 1,
            explain: 'Tell + người + that…; say không đi trực tiếp với tân ngữ chỉ người.' },
          { type: 'fill', q: '"I will help you." → He said he ___ help me.', answer: ['would'], hint: 'lùi thì của will',
            explain: 'Will → would.' },
          { type: 'fill', q: '"Are you ready?" → She asked me ___ I was ready.', answer: ['if', 'whether'], hint: 'câu hỏi yes/no',
            explain: 'Câu hỏi yes/no tường thuật dùng if hoặc whether.' },
          { type: 'fill', q: '"Don\'t touch it!" → The teacher told us not ___ touch it.', answer: ['to'], hint: 'told + người + (not) to V',
            explain: 'Mệnh lệnh phủ định: told someone not to V.' },
          { type: 'order', vi: 'Cô ấy hỏi tôi tôi sống ở đâu.', words: ['me', 'lived', 'She', 'I', 'where', 'asked'],
            answer: 'She asked me where I lived' },
          { type: 'order', vi: 'Anh ấy bảo tôi gọi lại cho anh ấy vào ngày hôm sau.', words: ['day', 'him', 'He', 'call', 'to', 'next', 'told', 'me', 'the'],
            answer: 'He told me to call him the next day' }
        ]
      },
      // ───────────────────────── B2-4 ─────────────────────────
      {
        id: 'en-b2-4',
        icon: '🌍',
        title: 'Môi trường & xã hội',
        goal: 'Thảo luận các vấn đề môi trường và xã hội, mô tả người, vật, nơi chốn chi tiết hơn bằng mệnh đề quan hệ.',
        vocab: [
          { w: 'pollution', ipa: '/pəˈluʃən/', vi: 'sự ô nhiễm', ex: 'Air pollution is a big problem in Hanoi.', exVi: 'Ô nhiễm không khí là vấn đề lớn ở Hà Nội.' },
          { w: 'climate change', ipa: '/ˈklaɪmət ˌtʃeɪndʒ/', vi: 'biến đổi khí hậu', ex: 'Climate change affects everyone.', exVi: 'Biến đổi khí hậu ảnh hưởng đến tất cả mọi người.' },
          { w: 'recycle', ipa: '/riˈsaɪkəl/', vi: 'tái chế', ex: 'We should recycle plastic bottles.', exVi: 'Chúng ta nên tái chế chai nhựa.' },
          { w: 'renewable', ipa: '/rɪˈnuəbəl/', vi: 'có thể tái tạo', ex: 'Solar power is a renewable energy source.', exVi: 'Năng lượng mặt trời là nguồn năng lượng tái tạo.' },
          { w: 'emissions', ipa: '/ɪˈmɪʃənz/', vi: 'khí thải', ex: 'Cars produce a lot of emissions.', exVi: 'Ô tô thải ra rất nhiều khí thải.' },
          { w: 'volunteer', ipa: '/ˌvɑlənˈtɪr/', vi: 'tình nguyện viên; tình nguyện', ex: 'She volunteers at a local school.', exVi: 'Cô ấy làm tình nguyện ở một trường học địa phương.' },
          { w: 'charity', ipa: '/ˈtʃærəti/', vi: 'tổ chức từ thiện; việc từ thiện', ex: 'They gave money to a children\'s charity.', exVi: 'Họ quyên tiền cho một tổ chức từ thiện vì trẻ em.' },
          { w: 'poverty', ipa: '/ˈpɑvərti/', vi: 'sự nghèo đói', ex: 'Education can help reduce poverty.', exVi: 'Giáo dục có thể giúp giảm nghèo.' },
          { w: 'community', ipa: '/kəˈmjunəti/', vi: 'cộng đồng', ex: 'The whole community helped clean the beach.', exVi: 'Cả cộng đồng cùng nhau dọn sạch bãi biển.' },
          { w: 'sustainable', ipa: '/səˈsteɪnəbəl/', vi: 'bền vững', ex: 'We need a more sustainable way of living.', exVi: 'Chúng ta cần một lối sống bền vững hơn.' }
        ],
        grammar: {
          title: 'Mệnh đề quan hệ: who / which / that / whose / where',
          explain: [
            'Mệnh đề quan hệ bổ sung thông tin cho danh từ đứng trước. Who dùng cho người; which dùng cho vật, sự việc; that dùng được cho cả người và vật (trong mệnh đề xác định); whose (của người/vật đó) thay cho tính từ sở hữu; where dùng cho nơi chốn.',
            'Mệnh đề quan hệ xác định (không có dấu phẩy) cho biết ta đang nói về ai/cái gì: "The man who lives next door is a doctor." Khi đại từ quan hệ làm tân ngữ, có thể lược bỏ: "The book (that) I bought is great."',
            'Mệnh đề quan hệ không xác định (có dấu phẩy) chỉ thêm thông tin phụ về người/vật đã rõ: "Hanoi, which is the capital of Vietnam, has many lakes." Trong loại này KHÔNG dùng that và không được lược bỏ đại từ.',
            'Where = in/at which: "This is the village where I grew up" = "the village (which) I grew up in".'
          ],
          table: [
            ['Đại từ', 'Dùng cho', 'Ví dụ'],
            ['who', 'người', 'People who recycle help the planet.'],
            ['which', 'vật, sự việc', 'Plastic which is thrown away pollutes the sea.'],
            ['that', 'người hoặc vật (xác định)', 'This is the charity that helped us.'],
            ['whose', 'sở hữu', 'She is the volunteer whose idea won the prize.'],
            ['where', 'nơi chốn', 'This is the beach where we collected rubbish.']
          ],
          examples: [
            { t: 'Volunteers are people who work without pay.', vi: 'Tình nguyện viên là những người làm việc không lương.' },
            { t: 'Solar energy, which is renewable, is becoming cheaper.', vi: 'Năng lượng mặt trời, vốn là năng lượng tái tạo, đang ngày càng rẻ hơn.' },
            { t: 'That is the factory whose emissions polluted the river.', vi: 'Đó là nhà máy có khí thải đã làm ô nhiễm dòng sông.' },
            { t: 'I visited a village where there is no clean water.', vi: 'Tôi đã đến thăm một ngôi làng nơi không có nước sạch.' }
          ],
          tip: 'Không lặp lại đại từ trong mệnh đề quan hệ: nói "the man who I met", không nói "the man who I met him". Và không dùng "that" sau dấu phẩy.'
        },
        dialogue: [
          { s: 'Vy', t: "I joined a group that cleans beaches every weekend. Do you want to come?", vi: 'Mình tham gia một nhóm dọn biển mỗi cuối tuần. Cậu muốn đi cùng không?' },
          { s: 'Leo', t: "Sure! Is it the group whose leader was on TV last week?", vi: 'Có chứ! Có phải nhóm có trưởng nhóm lên tivi tuần trước không?' },
          { s: 'Vy', t: "Yes! She's a woman who really cares about the community.", vi: 'Đúng rồi! Chị ấy là người thực sự quan tâm đến cộng đồng.' },
          { s: 'Leo', t: 'Where do you usually go?', vi: 'Các cậu thường đi đâu?' },
          { s: 'Vy', t: "To a small beach where a lot of plastic washes up. We recycle everything which we collect.", vi: 'Đến một bãi biển nhỏ, nơi rất nhiều rác nhựa dạt vào. Bọn mình tái chế mọi thứ thu gom được.' },
          { s: 'Leo', t: "Great. I think small actions like that are the start of a more sustainable future.", vi: 'Tuyệt. Mình nghĩ những hành động nhỏ như vậy là khởi đầu cho một tương lai bền vững hơn.' }
        ],
        exercises: [
          { type: 'mc', q: 'The woman ___ runs this charity is my aunt.', options: ['which', 'who', 'whose', 'where'], answer: 1,
            explain: 'Thay cho người, làm chủ ngữ → who.' },
          { type: 'mc', q: 'This is the town ___ I was born.', options: ['which', 'that', 'where', 'who'], answer: 2,
            explain: 'Nơi chốn (I was born in the town) → where.' },
          { type: 'mc', q: 'Hanoi, ___ is the capital, has serious air pollution.', options: ['that', 'which', 'who', 'where'], answer: 1,
            explain: 'Mệnh đề không xác định (có dấu phẩy) dùng which, không dùng that.' },
          { type: 'fill', q: 'He is the volunteer ___ car was used to carry the rubbish.', answer: ['whose'], hint: 'sở hữu',
            explain: 'Whose car = xe của người đó.' },
          { type: 'fill', q: 'Plastic bags are something ___ we should stop using.', answer: ['that', 'which'], hint: 'vật',
            explain: 'Thay cho vật → that/which (trong mệnh đề xác định).' },
          { type: 'fill', q: 'Energy which comes from the sun or wind is called ___ energy.', answer: ['renewable'], hint: 'có thể tái tạo',
            explain: 'Renewable energy = năng lượng tái tạo.' },
          { type: 'order', vi: 'Những người tái chế đang giúp bảo vệ hành tinh.', words: ['recycle', 'helping', 'People', 'planet', 'are', 'who', 'the'],
            answer: 'People who recycle are helping the planet' },
          { type: 'order', vi: 'Đây là ngôi làng nơi tôi lớn lên.', words: ['the', 'is', 'grew', 'This', 'where', 'up', 'village', 'I'],
            answer: 'This is the village where I grew up' }
        ]
      },
      // ───────────────────────── B2-5 ─────────────────────────
      {
        id: 'en-b2-5',
        icon: '💻',
        title: 'Công nghệ',
        goal: 'Nói về thói quen dùng công nghệ, chọn đúng to V hay V-ing sau động từ, phân biệt used to và be used to.',
        vocab: [
          { w: 'device', ipa: '/dɪˈvaɪs/', vi: 'thiết bị', ex: 'How many devices do you use every day?', exVi: 'Mỗi ngày bạn dùng bao nhiêu thiết bị?' },
          { w: 'download', ipa: '/ˈdaʊnˌloʊd/', vi: 'tải xuống', ex: 'You can download the app for free.', exVi: 'Bạn có thể tải ứng dụng miễn phí.' },
          { w: 'update', ipa: '/ʌpˈdeɪt/', vi: 'cập nhật', ex: "Don't forget to update your software.", exVi: 'Đừng quên cập nhật phần mềm của bạn.' },
          { w: 'password', ipa: '/ˈpæsˌwɜrd/', vi: 'mật khẩu', ex: 'Choose a strong password.', exVi: 'Hãy chọn một mật khẩu mạnh.' },
          { w: 'battery', ipa: '/ˈbætəri/', vi: 'pin', ex: 'My phone battery dies quickly.', exVi: 'Pin điện thoại của tôi nhanh hết.' },
          { w: 'screen', ipa: '/skrin/', vi: 'màn hình', ex: 'Kids spend too much time in front of a screen.', exVi: 'Trẻ em dành quá nhiều thời gian trước màn hình.' },
          { w: 'artificial intelligence', ipa: '/ˌɑrtəˈfɪʃəl ɪnˈtɛlədʒəns/', vi: 'trí tuệ nhân tạo (AI)', ex: 'Artificial intelligence is changing many jobs.', exVi: 'Trí tuệ nhân tạo đang thay đổi nhiều ngành nghề.' },
          { w: 'addicted to', ipa: '/əˈdɪktɪd tu/', vi: 'nghiện', ex: 'Many teenagers are addicted to social media.', exVi: 'Nhiều thanh thiếu niên nghiện mạng xã hội.' },
          { w: 'privacy', ipa: '/ˈpraɪvəsi/', vi: 'sự riêng tư', ex: 'Online privacy is very important.', exVi: 'Quyền riêng tư trên mạng rất quan trọng.' },
          { w: 'install', ipa: '/ɪnˈstɔl/', vi: 'cài đặt', ex: 'I installed a new app yesterday.', exVi: 'Hôm qua tôi đã cài một ứng dụng mới.' }
        ],
        grammar: {
          title: 'Động từ + to V / V-ing; used to và be used to',
          explain: [
            'Một số động từ theo sau bởi to V: want, decide, plan, hope, agree, refuse, promise, manage, afford, learn, need. Ví dụ: "I decided to buy a new laptop."',
            'Một số động từ theo sau bởi V-ing: enjoy, avoid, finish, mind, keep, suggest, consider, practice, give up, can\'t stand. Ví dụ: "I enjoy playing online games." Sau giới từ cũng luôn dùng V-ing: "I\'m good at fixing computers."',
            'Một số động từ đi được với cả hai nhưng khác nghĩa: stop to V (dừng lại để làm gì) / stop V-ing (thôi làm gì); remember/forget to V (nhớ/quên phải làm) / remember/forget V-ing (nhớ/quên đã làm); try to V (cố gắng) / try V-ing (thử làm).',
            'Used to + V: thói quen/trạng thái trong quá khứ nay không còn ("I used to play games every night"). Be used to + V-ing/danh từ: đã quen với ("I\'m used to working on a laptop"). Get used to + V-ing: dần quen với.'
          ],
          table: [
            ['Cấu trúc', 'Nghĩa', 'Ví dụ'],
            ['want / decide / hope + to V', 'muốn / quyết định / hy vọng làm', 'She decided to delete the app.'],
            ['enjoy / avoid / finish + V-ing', 'thích / tránh / hoàn thành việc', 'I avoid using my phone at night.'],
            ['used to + V', 'đã từng (nay không còn)', 'We used to send letters.'],
            ['be used to + V-ing', 'quen với', 'I am used to typing fast.'],
            ['get used to + V-ing', 'dần quen với', "You'll get used to using the new system."]
          ],
          examples: [
            { t: 'I stopped using social media for a month.', vi: 'Tôi đã ngừng dùng mạng xã hội một tháng.' },
            { t: "Remember to update your password regularly.", vi: 'Nhớ cập nhật mật khẩu thường xuyên nhé.' },
            { t: 'My grandfather used to listen to the radio every evening.', vi: 'Ông tôi ngày xưa tối nào cũng nghe đài.' },
            { t: "She isn't used to working from home yet.", vi: 'Cô ấy vẫn chưa quen làm việc ở nhà.' }
          ],
          tip: '"Be used to" có "to" là giới từ, nên sau nó là V-ing: "I\'m used to getting up early", không nói "I\'m used to get up early". Phủ định/câu hỏi của used to: didn\'t use to, Did you use to…? (bỏ d).'
        },
        dialogue: [
          { s: 'Grandma', t: 'When I was young, we used to write letters. Now everyone just sends messages!', vi: 'Hồi bà còn trẻ, mọi người hay viết thư. Bây giờ ai cũng chỉ nhắn tin!' },
          { s: 'Khoa', t: "I know, Grandma. Do you want to learn to video call? It's easy.", vi: 'Cháu biết mà bà. Bà có muốn học gọi video không? Dễ lắm ạ.' },
          { s: 'Grandma', t: "I'm not used to using smartphones. The screen is so small!", vi: 'Bà không quen dùng điện thoại thông minh. Màn hình nhỏ quá!' },
          { s: 'Khoa', t: "Don't worry. You'll get used to it. Let me install the app for you.", vi: 'Bà đừng lo. Bà sẽ quen thôi. Để cháu cài ứng dụng cho bà.' },
          { s: 'Grandma', t: 'All right. But I refuse to spend all day looking at a screen like you!', vi: 'Được rồi. Nhưng bà nhất định không ngồi cả ngày nhìn màn hình như cháu đâu nhé!' },
          { s: 'Khoa', t: "Ha ha, fair enough. I'm trying to stop checking my phone so often.", vi: 'Ha ha, cũng phải ạ. Cháu cũng đang cố bớt xem điện thoại thường xuyên.' }
        ],
        exercises: [
          { type: 'mc', q: 'I enjoy ___ new apps.', options: ['to try', 'trying', 'try', 'tried'], answer: 1,
            explain: 'Enjoy + V-ing.' },
          { type: 'mc', q: 'We decided ___ a new laptop for the office.', options: ['buying', 'to buy', 'buy', 'bought'], answer: 1,
            explain: 'Decide + to V.' },
          { type: 'mc', q: 'I ___ play video games every day, but now I rarely do.', options: ['am used to', 'used to', 'get used to', 'use to'], answer: 1,
            explain: 'Thói quen trong quá khứ nay không còn → used to + V.' },
          { type: 'fill', q: "She's used to ___ on a computer all day. (work)", answer: ['working'], hint: 'be used to + ?',
            explain: 'Be used to + V-ing.' },
          { type: 'fill', q: "Please remember ___ your phone before you leave. (charge)", answer: ['to charge'], hint: 'nhớ phải làm',
            explain: 'Remember to V = nhớ phải làm việc gì (chưa làm).' },
          { type: 'fill', q: 'Many young people are ___ to their phones.', answer: ['addicted'], hint: 'nghiện',
            explain: 'Be addicted to = nghiện.' },
          { type: 'order', vi: 'Tôi đang cố tránh dùng điện thoại vào ban đêm.', words: ['at', 'phone', 'trying', 'my', 'using', "I'm", 'avoid', 'night', 'to'],
            answer: "I'm trying to avoid using my phone at night" },
          { type: 'order', vi: 'Hồi trước bạn có hay chơi điện tử không?', words: ['video', 'you', 'play', 'use', 'Did', 'games?', 'to'],
            answer: 'Did you use to play video games?' }
        ]
      },
      // ───────────────────────── B2-6 ─────────────────────────
      {
        id: 'en-b2-6',
        icon: '✉️',
        title: 'Giao tiếp trang trọng & email',
        goal: 'Viết email công việc lịch sự, dùng cách diễn đạt trang trọng và các từ nối (however, therefore, although…) để liên kết ý.',
        vocab: [
          { w: 'regarding', ipa: '/rɪˈɡɑrdɪŋ/', vi: 'về việc, liên quan đến', ex: 'I am writing regarding your order.', exVi: 'Tôi viết thư này về đơn hàng của quý khách.' },
          { w: 'inquiry', ipa: '/ɪnˈkwaɪəri/', vi: 'yêu cầu thông tin, câu hỏi', ex: 'Thank you for your inquiry.', exVi: 'Cảm ơn quý khách đã liên hệ hỏi thông tin.' },
          { w: 'attach', ipa: '/əˈtætʃ/', vi: 'đính kèm', ex: 'Please find my CV attached.', exVi: 'Xin gửi kèm CV của tôi.' },
          { w: 'request', ipa: '/rɪˈkwɛst/', vi: 'yêu cầu, đề nghị', ex: 'We have received your request.', exVi: 'Chúng tôi đã nhận được yêu cầu của bạn.' },
          { w: 'confirm', ipa: '/kənˈfɜrm/', vi: 'xác nhận', ex: 'Could you confirm the meeting time?', exVi: 'Anh/chị có thể xác nhận giờ họp được không?' },
          { w: 'available', ipa: '/əˈveɪləbəl/', vi: 'rảnh, có sẵn', ex: 'Are you available on Tuesday afternoon?', exVi: 'Chiều thứ Ba anh/chị có rảnh không?' },
          { w: 'appreciate', ipa: '/əˈpriʃiˌeɪt/', vi: 'trân trọng, cảm kích', ex: 'I would appreciate your help.', exVi: 'Tôi rất cảm kích nếu được anh/chị giúp đỡ.' },
          { w: 'inconvenience', ipa: '/ˌɪnkənˈvinjəns/', vi: 'sự bất tiện', ex: 'We apologize for any inconvenience.', exVi: 'Chúng tôi xin lỗi vì mọi sự bất tiện.' },
          { w: 'sincerely', ipa: '/sɪnˈsɪrli/', vi: 'chân thành (dùng cuối thư: Sincerely,)', ex: 'Sincerely, Nguyen Van An', exVi: 'Trân trọng, Nguyễn Văn An' },
          { w: 'furthermore', ipa: '/ˈfɜrðərˌmɔr/', vi: 'hơn nữa, ngoài ra', ex: 'The hotel is cheap. Furthermore, it is near the beach.', exVi: 'Khách sạn rẻ. Hơn nữa, nó lại gần biển.' }
        ],
        grammar: {
          title: 'Ngôn ngữ trang trọng và từ nối (linking words)',
          explain: [
            'Trong email công việc, dùng cách nói lịch sự, gián tiếp: I would like to… (thay cho I want to…), Could you please…? / Would you mind + V-ing? (thay cho câu mệnh lệnh), I am writing to… (mở đầu nêu mục đích), I look forward to hearing from you (kết thư). Tránh viết tắt (I am thay cho I\'m) và từ lóng.',
            'Từ nối chỉ sự đối lập: however (tuy nhiên) thường đứng đầu câu mới và có dấu phẩy sau; although/even though + mệnh đề (mặc dù); despite/in spite of + danh từ hoặc V-ing.',
            'Từ nối chỉ kết quả: therefore, as a result, consequently (vì vậy, do đó). Bổ sung ý: moreover, furthermore, in addition (hơn nữa). Nguyên nhân: because + mệnh đề; due to / because of + danh từ.',
            'Lưu ý: although và but không dùng cùng nhau trong một câu. Nói "Although it was late, we continued", không nói "Although it was late, but we continued".'
          ],
          table: [
            ['Chức năng', 'Từ nối', 'Ví dụ'],
            ['Đối lập', 'however, although, despite', 'Although the price is high, the quality is excellent.'],
            ['Kết quả', 'therefore, as a result', 'The flight was canceled. Therefore, the meeting was postponed.'],
            ['Bổ sung', 'moreover, furthermore, in addition', 'In addition, we offer free delivery.'],
            ['Nguyên nhân', 'because, due to', 'The delay was due to bad weather.'],
            ['Trang trọng', 'I would like to… / Could you…?', 'I would like to request a refund.']
          ],
          examples: [
            { t: 'I am writing to apply for the position of marketing assistant.', vi: 'Tôi viết thư này để ứng tuyển vị trí trợ lý marketing.' },
            { t: 'The product arrived on time. However, it was damaged.', vi: 'Sản phẩm đến đúng hạn. Tuy nhiên, nó bị hư hỏng.' },
            { t: 'Despite the heavy rain, the event was a success.', vi: 'Mặc dù mưa lớn, sự kiện vẫn thành công.' },
            { t: 'I would appreciate it if you could reply by Friday.', vi: 'Tôi rất cảm kích nếu anh/chị có thể trả lời trước thứ Sáu.' },
            { t: 'We have received many complaints; therefore, we are changing our policy.', vi: 'Chúng tôi đã nhận nhiều phàn nàn; vì vậy, chúng tôi đang thay đổi chính sách.' }
          ],
          tip: 'Mở đầu email trang trọng: "Dear Mr./Ms. + họ," (Dear Ms. Smith,) hoặc "Dear Sir or Madam," khi không biết tên. Kết thúc: "Sincerely," / "Best regards," rồi ký tên. Không dùng "Hi" hay "Thanks!" trong thư rất trang trọng.'
        },
        dialogue: [
          { s: 'Ms. Hạnh', t: 'Good morning, Mr. Brown. I am calling regarding the email I sent yesterday.', vi: 'Chào ông Brown. Tôi gọi về email tôi đã gửi hôm qua.' },
          { s: 'Mr. Brown', t: 'Yes, I received it. Thank you for your inquiry. However, I have not had time to read the attachment yet.', vi: 'Vâng, tôi đã nhận được. Cảm ơn chị đã liên hệ. Tuy nhiên, tôi chưa có thời gian đọc tài liệu đính kèm.' },
          { s: 'Ms. Hạnh', t: 'No problem. Would you be available for a short meeting on Thursday?', vi: 'Không sao ạ. Thứ Năm ông có rảnh cho một cuộc họp ngắn không?' },
          { s: 'Mr. Brown', t: 'Although my schedule is quite busy, I could meet at 3 p.m.', vi: 'Mặc dù lịch của tôi khá kín, tôi có thể gặp lúc 3 giờ chiều.' },
          { s: 'Ms. Hạnh', t: 'Excellent. I will send you an email to confirm the time.', vi: 'Tuyệt vời. Tôi sẽ gửi email để xác nhận thời gian.' },
          { s: 'Mr. Brown', t: 'Thank you. I look forward to meeting you.', vi: 'Cảm ơn chị. Tôi rất mong được gặp chị.' }
        ],
        exercises: [
          { type: 'mc', q: '___ it was raining, the meeting went ahead.', options: ['Despite', 'However', 'Although', 'Therefore'], answer: 2,
            explain: 'Although + mệnh đề (it was raining). Despite phải đi với danh từ/V-ing.' },
          { type: 'mc', q: 'The office will be closed on Monday. ___, all orders will be delayed.', options: ['Although', 'Therefore', 'Despite', 'Because'], answer: 1,
            explain: 'Câu sau là kết quả của câu trước → Therefore.' },
          { type: 'mc', q: 'Which sentence is the most formal?', options: ['I want a refund.', 'Give me my money back.', 'I would like to request a refund.', 'Refund, please!'], answer: 2,
            explain: '"I would like to request…" là cách nói lịch sự, trang trọng nhất.' },
          { type: 'fill', q: '___ the bad weather, the flight left on time.', answer: ['despite', 'in spite of'], hint: '+ danh từ',
            explain: 'Despite / In spite of + danh từ (the bad weather).' },
          { type: 'fill', q: 'Please find the report ___ to this email.', answer: ['attached'], hint: 'đính kèm',
            explain: 'Please find … attached = Xin gửi kèm…' },
          { type: 'fill', q: 'We apologize for any ___ this may cause.', answer: ['inconvenience'], hint: 'sự bất tiện',
            explain: 'Câu xin lỗi trang trọng quen thuộc: apologize for any inconvenience.' },
          { type: 'order', vi: 'Tôi rất mong nhận được hồi âm của ông/bà.', words: ['from', 'forward', 'I', 'you', 'look', 'hearing', 'to'],
            answer: 'I look forward to hearing from you' },
          { type: 'order', vi: 'Tôi viết thư này về đơn hàng của quý khách.', words: ['regarding', 'am', 'order', 'I', 'your', 'writing'],
            answer: 'I am writing regarding your order' }
        ]
      }
    ]
  }
]);
