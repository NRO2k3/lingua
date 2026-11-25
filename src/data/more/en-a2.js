// Bài mới chèn vào lộ trình tiếng Anh A2 (xem cuối SCHEMA.md)
export default [
  // ───────────────────────── sau A2-2: miêu tả người; so sánh hơn / nhất ─────────────────────────
  {
    after: 'en-a2-2',
    unit: {
      id: 'en-a2-2b',
      icon: '🧑',
      title: 'Miêu tả người',
      goal: 'Miêu tả ngoại hình và tính cách, so sánh hai hay nhiều người; xin người khác nhắc lại khi không nghe rõ.',
      vocab: [
        { w: 'tall', ipa: '/tɔl/', vi: 'cao', ex: 'My brother is taller than my father.', exVi: 'Anh trai tôi cao hơn bố tôi.' },
        { w: 'short', ipa: '/ʃɔrt/', vi: 'thấp; ngắn', ex: 'She is short and she has short hair.', exVi: 'Cô ấy thấp và có mái tóc ngắn.' },
        { w: 'thin', ipa: '/θɪn/', vi: 'gầy', ex: 'He is thin because he runs every day.', exVi: 'Anh ấy gầy vì ngày nào cũng chạy bộ.' },
        { w: 'young', ipa: '/jʌŋ/', vi: 'trẻ', ex: 'My aunt is younger than my mother.', exVi: 'Dì tôi trẻ hơn mẹ tôi.' },
        { w: 'handsome', ipa: '/ˈhænsəm/', vi: 'đẹp trai', ex: 'Her husband is very handsome.', exVi: 'Chồng cô ấy rất đẹp trai.' },
        { w: 'pretty', ipa: '/ˈprɪti/', vi: 'xinh xắn', ex: 'What a pretty little girl!', exVi: 'Cô bé xinh quá!' },
        { w: 'curly', ipa: '/ˈkɝli/', vi: 'xoăn', ex: 'Linh has long curly hair.', exVi: 'Linh có mái tóc xoăn dài.' },
        { w: 'straight', ipa: '/streɪt/', vi: 'thẳng', ex: 'My hair is straight and black.', exVi: 'Tóc tôi thẳng và đen.' },
        { w: 'beard', ipa: '/bɪrd/', vi: 'râu (ở cằm, quai nón)', ex: 'My grandfather has a long white beard.', exVi: 'Ông tôi có bộ râu dài màu trắng.' },
        { w: 'glasses', ipa: '/ˈɡlæsɪz/', vi: 'kính (đeo mắt)', ex: 'The man with glasses is my teacher.', exVi: 'Người đàn ông đeo kính là thầy giáo của tôi.' },
        { w: 'friendly', ipa: '/ˈfrɛndli/', vi: 'thân thiện', ex: 'Our new neighbor is very friendly.', exVi: 'Người hàng xóm mới của chúng tôi rất thân thiện.' },
        { w: 'kind', ipa: '/kaɪnd/', vi: 'tốt bụng', ex: 'She is the kindest person in our class.', exVi: 'Cô ấy là người tốt bụng nhất lớp chúng tôi.' },
        { w: 'funny', ipa: '/ˈfʌni/', vi: 'hài hước, vui tính', ex: 'Tom is funnier than his brother.', exVi: 'Tom vui tính hơn anh trai cậu ấy.' },
        { w: 'quiet', ipa: '/ˈkwaɪət/', vi: 'trầm, ít nói; yên tĩnh', ex: 'Mai is quiet, but she is very smart.', exVi: 'Mai ít nói nhưng rất thông minh.' },
        { w: 'shy', ipa: '/ʃaɪ/', vi: 'nhút nhát, ngại ngùng', ex: "He's shy, so he doesn't talk much in class.", exVi: 'Cậu ấy nhút nhát nên không nói nhiều trong lớp.' },
        { w: 'smart', ipa: '/smɑrt/', vi: 'thông minh, sáng dạ', ex: 'She is the smartest student in the school.', exVi: 'Cô ấy là học sinh thông minh nhất trường.' },
        { w: 'lazy', ipa: '/ˈleɪzi/', vi: 'lười biếng', ex: 'My cat is very lazy. It sleeps all day.', exVi: 'Con mèo của tôi rất lười. Nó ngủ cả ngày.' },
        { w: 'hard-working', ipa: '/ˌhɑrdˈwɝkɪŋ/', vi: 'chăm chỉ', ex: 'My parents are very hard-working.', exVi: 'Bố mẹ tôi rất chăm chỉ.' },
        { w: 'look like', ipa: '/ˈlʊk ˌlaɪk/', vi: 'trông giống', ex: 'You look like your mother.', exVi: 'Bạn trông giống mẹ bạn.' },
        { w: 'describe', ipa: '/dɪˈskraɪb/', vi: 'miêu tả', ex: 'Can you describe your best friend?', exVi: 'Bạn có thể miêu tả người bạn thân nhất của mình không?' }
      ],
      grammar: {
        title: 'So sánh hơn và so sánh nhất của tính từ',
        explain: [
          'So sánh hơn (giữa HAI người/vật): tính từ ngắn (1 âm tiết) + -er + than: tall → taller than. Tính từ dài (từ 2 âm tiết, trừ loại tận cùng -y) dùng more + tính từ + than: more handsome than, more hard-working than.',
          'So sánh nhất (từ BA người/vật trở lên): the + tính từ ngắn + -est (the tallest) hoặc the most + tính từ dài (the most handsome). Thường đi với in + nơi/nhóm (in my class, in the world) hoặc of + số lượng (of the three).',
          'Chính tả: tận cùng e chỉ thêm -r / -st (nice → nicer → the nicest); tận cùng phụ âm + y đổi thành -ier / -iest (funny → funnier → the funniest, pretty → prettier); một nguyên âm + một phụ âm thì gấp đôi phụ âm (thin → thinner, big → the biggest). Bất quy tắc: good → better → the best; bad → worse → the worst.',
          'Miêu tả người: to be + tính từ (She is tall and friendly) hoặc have / has + tóc, mắt, râu (He has curly hair and a beard). Hỏi ngoại hình: What does she look like? Hỏi tính cách: What is she like?'
        ],
        table: [
          ['Tính từ', 'So sánh hơn', 'So sánh nhất'],
          ['tall', 'taller than', 'the tallest'],
          ['thin', 'thinner than', 'the thinnest'],
          ['funny', 'funnier than', 'the funniest'],
          ['handsome', 'more handsome than', 'the most handsome'],
          ['good', 'better than', 'the best'],
          ['bad', 'worse than', 'the worst']
        ],
        examples: [
          { t: 'My brother is taller than me.', vi: 'Anh trai tôi cao hơn tôi.' },
          { t: 'Lan is the youngest person in our family.', vi: 'Lan là người nhỏ tuổi nhất trong nhà.' },
          { t: 'Vy is more hard-working than her brother.', vi: 'Vy chăm chỉ hơn em trai cô ấy.' },
          { t: 'This is the best photo of the three.', vi: 'Đây là tấm ảnh đẹp nhất trong ba tấm.' },
          { t: "What does your sister look like? — She's tall and she has curly hair.", vi: 'Chị bạn trông thế nào? — Chị ấy cao và có tóc xoăn.' }
        ],
        tip: 'Người Việt hay dùng cả more lẫn -er: "more taller" là sai, chỉ cần "taller". Nhớ có the trước so sánh nhất: "She is the smartest girl", không nói "She is smartest girl". Khi không nghe rõ, đừng chỉ nói "What?" (nghe cộc lốc): hãy hỏi "Sorry, could you say that again?" hoặc "Could you speak more slowly, please?"'
      },
      dialogue: [
        { s: 'Hoa', t: 'Tuan, can you meet my cousin Jenny at the airport this afternoon?', vi: 'Tuấn ơi, chiều nay cậu ra sân bay đón em họ mình là Jenny được không?' },
        { s: 'Tuan', t: 'Sure. What does she look like?', vi: 'Được chứ. Bạn ấy trông thế nào?' },
        { s: 'Hoa', t: "She's quite tall, taller than me, and she has long curly hair.", vi: 'Em ấy khá cao, cao hơn mình, và có mái tóc xoăn dài.' },
        { s: 'Tuan', t: 'Sorry, could you say that again? The line is bad.', vi: 'Xin lỗi, cậu nói lại được không? Sóng điện thoại kém quá.' },
        { s: 'Hoa', t: "She's tall, with long curly hair. And she wears glasses.", vi: 'Em ấy cao, tóc xoăn dài. Và em ấy đeo kính.' },
        { s: 'Tuan', t: 'OK. Is she older than you?', vi: 'Ừ. Bạn ấy lớn tuổi hơn cậu à?' },
        { s: 'Hoa', t: "No, she's younger. She's twenty-two, the youngest in our family.", vi: 'Không, em ấy nhỏ hơn. Em ấy hai mươi hai tuổi, nhỏ nhất nhà mình.' },
        { s: 'Tuan', t: 'Sorry, could you speak more slowly, please?', vi: 'Xin lỗi, cậu nói chậm hơn chút được không?' },
        { s: 'Hoa', t: "Of course. Don't worry, she's very friendly and funny. And today she's wearing a red jacket.", vi: 'Tất nhiên rồi. Đừng lo, em ấy rất thân thiện và vui tính. Hôm nay em ấy mặc áo khoác đỏ.' },
        { s: 'Tuan', t: 'Got it. A tall girl with curly hair, glasses and a red jacket.', vi: 'Hiểu rồi. Một cô gái cao, tóc xoăn, đeo kính và mặc áo khoác đỏ.' }
      ],
      exercises: [
        { type: 'mc', q: 'My brother is ___ than me.', options: ['tall', 'taller', 'tallest', 'more tall'], answer: 1,
          explain: 'So sánh hơn với tính từ ngắn: tall + -er + than.' },
        { type: 'mc', q: 'She is the ___ student in our class.', options: ['smartest', 'smarter', 'most smart', 'smart'], answer: 0,
          explain: 'So sánh nhất (cả lớp) với tính từ ngắn: the + smart + -est.' },
        { type: 'fill', q: 'Tom is ___ than his brother. (funny)', answer: ['funnier'], hint: 'phụ âm + y → ?',
          explain: 'funny tận cùng phụ âm + y → đổi y thành i rồi thêm -er: funnier.' },
        { type: 'fill', q: 'This is the ___ restaurant in our town. (good)', answer: ['best'], hint: 'bất quy tắc',
          explain: 'good → better → the best.' },
        { type: 'mc', q: 'My grandfather is ___ person in my family.', options: ['older', 'oldest', 'the older', 'the oldest'], answer: 3,
          explain: 'So sánh nhất phải có the: the oldest.' },
        { type: 'fill', q: 'My sister is more hard-working ___ me.', answer: ['than'], hint: 'so sánh hơn',
          explain: 'So sánh hơn luôn đi với than: more hard-working than.' },
        { type: 'mc', q: 'Lan is very ___. She smiles and talks to everyone.', options: ['shy', 'lazy', 'quiet', 'friendly'], answer: 3,
          explain: 'Hay cười và nói chuyện với mọi người → friendly (thân thiện).' },
        { type: 'mc', q: '"What does he look like?" — "___"', options: ["He's tall and he has a beard.", 'He likes music.', "He's a doctor.", "He's fine, thanks."], answer: 0,
          explain: 'What does he look like? hỏi về ngoại hình → trả lời bằng chiều cao, tóc, râu…' },
        { type: 'fill', q: 'He is ___ than his father. (thin)', answer: ['thinner'], hint: 'gấp đôi phụ âm',
          explain: 'thin: một nguyên âm + một phụ âm → gấp đôi n: thinner.' },
        { type: 'mc', q: 'Bạn không nghe rõ người kia nói. Câu nào lịch sự nhất?', options: ['What?', 'Speak again!', 'I not hear you.', 'Sorry, could you say that again?'], answer: 3,
          explain: '"Sorry, could you say that again?" là cách xin nhắc lại lịch sự.' },
        { type: 'mc', q: 'This is ___ movie of the year.', options: ['the most beautiful', 'the beautifulest', 'more beautiful', 'most beautiful'], answer: 0,
          explain: 'beautiful là tính từ dài → the most beautiful.' },
        { type: 'fill', q: 'You ___ like your mother. You have the same eyes.', answer: ['look'], hint: 'trông giống',
          explain: 'look like = trông giống.' },
        { type: 'order', vi: 'Minh cao hơn bố cậu ấy.', words: ['taller', 'Minh', 'than', 'father', 'is', 'his'], answer: 'Minh is taller than his father' },
        { type: 'order', vi: 'Cô ấy là người tốt bụng nhất trong gia đình tôi.', words: ['kindest', 'She', 'in', 'is', 'the', 'family', 'person', 'my'], answer: 'She is the kindest person in my family' },
        { type: 'order', vi: 'Bạn có thể nói chậm hơn không?', words: ['speak', 'Could', 'slowly?', 'you', 'more'], answer: 'Could you speak more slowly?' },
        { type: 'order', vi: 'Bạn trông giống bố bạn.', words: ['look', 'your', 'You', 'father', 'like'], answer: 'You look like your father' }
      ],
      reading: {
        title: 'My Two Best Friends',
        titleVi: 'Hai người bạn thân của tôi',
        text: [
          'I have two best friends, Lan and Vy. They are very different. Lan is tall and thin, and she has long straight hair. Vy is shorter than Lan, and she has short curly hair. She wears big glasses.',
          'Lan is quiet and a little shy, but she is the smartest student in our class. She is also very hard-working. Vy is funnier and friendlier. She talks to everyone, and she can make anyone laugh. But she is lazier than Lan. She never does her homework before Sunday night!',
          'People often ask me, "Who is your best friend?" I can\'t answer that question. Lan is the best person to study with, and Vy is the best person to have fun with. I am lucky to have them both.'
        ],
        vi: [
          'Tôi có hai người bạn thân là Lan và Vy. Hai bạn rất khác nhau. Lan cao và gầy, có mái tóc thẳng dài. Vy thấp hơn Lan, có mái tóc xoăn ngắn. Vy đeo một cặp kính to.',
          'Lan ít nói và hơi nhút nhát, nhưng bạn ấy là học sinh thông minh nhất lớp tôi. Lan cũng rất chăm chỉ. Vy thì vui tính và thân thiện hơn. Bạn ấy nói chuyện với tất cả mọi người và có thể làm bất kỳ ai bật cười. Nhưng Vy lười hơn Lan. Bạn ấy chẳng bao giờ làm bài tập trước tối Chủ nhật!',
          'Mọi người hay hỏi tôi: "Ai là bạn thân nhất của bạn?" Tôi không trả lời được câu đó. Lan là người tuyệt nhất để học cùng, còn Vy là người tuyệt nhất để đi chơi cùng. Tôi thật may mắn khi có cả hai.'
        ],
        questions: [
          { q: 'Ai có mái tóc xoăn ngắn?', options: ['Lan', 'Vy', 'Người viết', 'Cả Lan và Vy'], answer: 1,
            explain: '"Vy is shorter than Lan, and she has short curly hair."' },
          { q: 'Điều nào ĐÚNG về Lan?', options: ['Lan thấp hơn Vy', 'Lan lười hơn Vy', 'Lan ít nói nhưng thông minh nhất lớp', 'Lan đeo kính to'], answer: 2,
            explain: '"Lan is quiet and a little shy, but she is the smartest student in our class."' },
          { q: 'Vì sao người viết nói Vy lười hơn Lan?', options: ['Vì Vy không bao giờ làm bài tập trước tối Chủ nhật', 'Vì Vy ngủ cả ngày', 'Vì Vy không thích nói chuyện', 'Vì Vy hay nghỉ học'], answer: 0,
            explain: '"She never does her homework before Sunday night!"' },
          { q: 'Người viết trả lời thế nào khi được hỏi ai là bạn thân nhất?', options: ['Chọn Lan', 'Chọn Vy', 'Nói rằng mình không có bạn thân', 'Không chọn được vì mỗi bạn tuyệt nhất theo một cách riêng'], answer: 3,
            explain: '"Lan is the best person to study with, and Vy is the best person to have fun with."' }
        ]
      }
    }
  },

  // ───────────────────────── sau A2-4: cảm xúc, xin lỗi; was/were + quá khứ tiếp diễn ─────────────────────────
  {
    after: 'en-a2-4',
    unit: {
      id: 'en-a2-4b',
      icon: '😊',
      title: 'Cảm xúc & lời xin lỗi',
      goal: 'Nói mình đã cảm thấy thế nào, mình đang làm gì vào một lúc trong quá khứ; xin lỗi, giải thích lý do và đáp lại lời xin lỗi.',
      vocab: [
        { w: 'feel', ipa: '/fil/', vi: 'cảm thấy', ex: 'How do you feel today?', exVi: 'Hôm nay bạn cảm thấy thế nào?' },
        { w: 'angry', ipa: '/ˈæŋɡri/', vi: 'tức giận', ex: 'Dad was angry because I came home late.', exVi: 'Bố tức giận vì tôi về nhà muộn.' },
        { w: 'sad', ipa: '/sæd/', vi: 'buồn', ex: 'I was sad at the end of the movie.', exVi: 'Tôi thấy buồn ở đoạn cuối bộ phim.' },
        { w: 'excited', ipa: '/ɪkˈsaɪtɪd/', vi: 'hào hứng, phấn khích', ex: 'The children were excited about the trip.', exVi: 'Bọn trẻ rất háo hức về chuyến đi.' },
        { w: 'nervous', ipa: '/ˈnɝvəs/', vi: 'hồi hộp, căng thẳng', ex: 'I was nervous before my first English test.', exVi: 'Tôi hồi hộp trước bài kiểm tra tiếng Anh đầu tiên.' },
        { w: 'worried', ipa: '/ˈwɝid/', vi: 'lo lắng', ex: "Mom was worried because I didn't answer my phone.", exVi: 'Mẹ lo lắng vì tôi không nghe điện thoại.' },
        { w: 'surprised', ipa: '/sɚˈpraɪzd/', vi: 'ngạc nhiên', ex: 'We were surprised to see snow in Sa Pa.', exVi: 'Chúng tôi ngạc nhiên khi thấy tuyết ở Sa Pa.' },
        { w: 'afraid', ipa: '/əˈfreɪd/', vi: 'sợ', ex: 'My little sister is afraid of dogs.', exVi: 'Em gái tôi sợ chó.' },
        { w: 'lonely', ipa: '/ˈloʊnli/', vi: 'cô đơn', ex: 'He felt lonely in the big city.', exVi: 'Anh ấy thấy cô đơn ở thành phố lớn.' },
        { w: 'proud', ipa: '/praʊd/', vi: 'tự hào', ex: 'My parents were very proud of me.', exVi: 'Bố mẹ tôi rất tự hào về tôi.' },
        { w: 'embarrassed', ipa: '/ɪmˈbɛrəst/', vi: 'ngượng, xấu hổ', ex: 'I was embarrassed when I fell in front of the class.', exVi: 'Tôi xấu hổ khi bị ngã trước cả lớp.' },
        { w: 'calm', ipa: '/kɑm/', vi: 'bình tĩnh', ex: 'Stay calm and listen to me.', exVi: 'Hãy bình tĩnh và nghe tôi nói.' },
        { w: 'apologize', ipa: '/əˈpɑləˌdʒaɪz/', vi: 'xin lỗi (vì lỗi của mình)', ex: 'I want to apologize for my mistake.', exVi: 'Tôi muốn xin lỗi vì lỗi của mình.' },
        { w: 'excuse me', ipa: '/ɪkˈskjuz mi/', vi: 'xin lỗi (cho tôi hỏi / cho tôi đi qua)', ex: 'Excuse me, is this seat free?', exVi: 'Xin lỗi, chỗ này có ai ngồi chưa ạ?' },
        { w: 'mistake', ipa: '/mɪˈsteɪk/', vi: 'lỗi sai, sai lầm', ex: 'Sorry, there is a mistake in your name.', exVi: 'Xin lỗi, tên của bạn bị viết sai.' },
        { w: 'fault', ipa: '/fɔlt/', vi: 'lỗi (thuộc về ai)', ex: "Don't worry. It wasn't your fault.", exVi: 'Đừng lo. Đó không phải lỗi của bạn.' },
        { w: 'forget', ipa: '/fɚˈɡɛt/', vi: 'quên', ex: 'Sorry, I forgot your birthday!', exVi: 'Xin lỗi, mình quên sinh nhật bạn mất rồi!' },
        { w: 'never mind', ipa: '/ˌnɛvɚ ˈmaɪnd/', vi: 'không sao đâu, đừng bận tâm', ex: '"Sorry, I\'m late." — "Never mind."', exVi: '"Xin lỗi, mình đến muộn." — "Không sao đâu."' },
        { w: 'at that time', ipa: '/æt ˈðæt ˌtaɪm/', vi: 'vào lúc đó', ex: 'At that time, I was living in Da Nang.', exVi: 'Vào lúc đó, tôi đang sống ở Đà Nẵng.' },
        { w: 'while', ipa: '/waɪl/', vi: 'trong khi', ex: 'I was cooking while my sister was studying.', exVi: 'Tôi nấu ăn trong khi em gái tôi học bài.' }
      ],
      grammar: {
        title: 'Was / were và thì quá khứ tiếp diễn (was / were + V-ing)',
        explain: [
          'Was / were là quá khứ của to be: I / he / she / it → was; you / we / they → were. Phủ định: wasn\'t / weren\'t. Câu hỏi: Was she…? Were you…? Dùng để nói cảm xúc, trạng thái, nơi chốn trong quá khứ: I was nervous yesterday. Were you at home last night?',
          'Quá khứ tiếp diễn: was / were + V-ing, diễn tả việc ĐANG diễn ra tại một thời điểm trong quá khứ: At 8 p.m. last night, I was watching TV. Hỏi: What were you doing at that time?',
          'Một việc đang diễn ra (quá khứ tiếp diễn) thì một việc ngắn khác xen vào (quá khứ đơn), nối bằng when: I was taking a shower when you called. Hai việc cùng đang diễn ra song song, nối bằng while: I was cooking while he was reading.',
          'Xin lỗi: I\'m sorry (that) + mệnh đề / I\'m sorry for + V-ing / I apologize for… Khi giải thích lý do ta hay dùng quá khứ tiếp diễn: Sorry I didn\'t answer. I was driving. Đáp lại: That\'s OK. / Never mind. / Don\'t worry. / It wasn\'t your fault.'
        ],
        table: [
          ['', 'Khẳng định', 'Phủ định', 'Câu hỏi'],
          ['I / he / she / it', 'was working', "wasn't working", 'Was he working?'],
          ['you / we / they', 'were working', "weren't working", 'Were they working?'],
          ['to be (quá khứ)', 'I was tired.', "We weren't angry.", 'Were you surprised?']
        ],
        examples: [
          { t: 'I was very nervous before the interview.', vi: 'Tôi rất hồi hộp trước buổi phỏng vấn.' },
          { t: 'What were you doing at 9 p.m. last night? — I was studying.', vi: 'Lúc 9 giờ tối qua bạn đang làm gì? — Tôi đang học bài.' },
          { t: "Sorry I didn't call you back. I was having dinner.", vi: 'Xin lỗi mình không gọi lại cho bạn. Lúc đó mình đang ăn tối.' },
          { t: 'She was walking home when it started to rain.', vi: 'Cô ấy đang đi bộ về nhà thì trời bắt đầu mưa.' },
          { t: 'My dad was reading while my mom was cooking.', vi: 'Bố tôi đọc sách trong khi mẹ tôi nấu ăn.' }
        ],
        tip: 'Người Việt hay quên was / were trong quá khứ tiếp diễn: "I watching TV when you called" → "I was watching TV when you called". Ngược lại, đừng thêm was / were vào quá khứ đơn: "I was go to school" → "I went to school". Tính từ cảm xúc đuôi -ed (bored, excited, surprised, embarrassed) nói người cảm thấy thế nào; đuôi -ing (boring, exciting) nói sự việc gây ra cảm xúc.'
      },
      dialogue: [
        { s: 'Nam', t: "Hi, Mai. I'm really sorry about yesterday.", vi: 'Chào Mai. Mình thật sự xin lỗi về chuyện hôm qua.' },
        { s: 'Mai', t: 'What happened? I was waiting for you at the café for an hour! I was worried.', vi: 'Chuyện gì thế? Mình đợi bạn ở quán cà phê cả tiếng đồng hồ! Mình lo lắm.' },
        { s: 'Nam', t: 'I know. It was my fault. I was helping my dad at his shop, and I forgot the time.', vi: 'Mình biết. Là lỗi của mình. Mình đang phụ bố ở cửa hàng và quên mất giờ.' },
        { s: 'Mai', t: "Why didn't you answer your phone? I called you five times.", vi: 'Sao bạn không nghe máy? Mình gọi năm lần rồi.' },
        { s: 'Nam', t: "My phone was in my bag. I was carrying heavy boxes when you called. I'm so embarrassed.", vi: 'Điện thoại để trong túi. Lúc bạn gọi mình đang khuân mấy thùng hàng nặng. Mình xấu hổ quá.' },
        { s: 'Mai', t: "Well, I was a bit angry at that time, but I'm calm now.", vi: 'Ừm, lúc đó mình hơi bực, nhưng giờ thì bình tĩnh rồi.' },
        { s: 'Nam', t: 'Can I buy you a coffee today to apologize?', vi: 'Hôm nay mình mời bạn cà phê để xin lỗi nhé?' },
        { s: 'Mai', t: "OK, never mind. But don't forget this time!", vi: 'Được rồi, không sao. Nhưng lần này đừng có quên đấy!' }
      ],
      exercises: [
        { type: 'mc', q: 'I ___ very nervous before my English test yesterday.', options: ['were', 'was', 'am', 'be'], answer: 1,
          explain: 'Quá khứ (yesterday), chủ ngữ I → was.' },
        { type: 'mc', q: 'What ___ you doing at 8 p.m. last night?', options: ['was', 'did', 'were', 'are'], answer: 2,
          explain: 'Quá khứ tiếp diễn với you: were you doing?' },
        { type: 'fill', q: 'At that time, she ___ watching TV. (be)', answer: ['was'], hint: 'quá khứ của is',
          explain: 'She + was + V-ing.' },
        { type: 'fill', q: 'They ___ playing soccer when it started to rain. (be)', answer: ['were'], hint: 'quá khứ của are',
          explain: 'They + were + V-ing.' },
        { type: 'mc', q: 'I ___ a shower when you called me.', options: ['was taking', 'took', 'am taking', 'were taking'], answer: 0,
          explain: 'Việc đang diễn ra (quá khứ tiếp diễn) thì có việc khác xen vào (called).' },
        { type: 'mc', q: 'My mom was cooking ___ my dad was cleaning the house.', options: ['while', 'so', 'then', 'because'], answer: 0,
          explain: 'Hai việc cùng đang diễn ra song song → while.' },
        { type: 'fill', q: 'Were you sleeping when I called? — No, I ___. I was reading.', answer: ["wasn't", 'was not', 'wasn’t'], hint: 'trả lời ngắn phủ định',
          explain: 'Câu hỏi Were you…? trả lời với I: No, I wasn\'t.' },
        { type: 'mc', q: "She ___ angry yesterday. She was happy.", options: ["weren't", "wasn't", "didn't", "isn't"], answer: 1,
          explain: 'Phủ định của was là wasn\'t. Không dùng didn\'t với tính từ.' },
        { type: 'mc', q: 'You won the prize! We are very ___ of you.', options: ['lonely', 'afraid', 'calm', 'proud'], answer: 3,
          explain: 'be proud of somebody = tự hào về ai.' },
        { type: 'mc', q: 'Câu đáp lại "Sorry I\'m late." phù hợp nhất là:', options: ['Yes, you are.', 'Excuse me.', 'I apologize.', 'Never mind.'], answer: 3,
          explain: 'Never mind = không sao đâu, đáp lại lời xin lỗi.' },
        { type: 'fill', q: 'Everyone looked at my funny shirt. I was so ___. (ngượng)', answer: ['embarrassed'], hint: 'ngượng, xấu hổ',
          explain: 'embarrassed = ngượng, xấu hổ (chú ý hai r và hai s).' },
        { type: 'mc', q: 'He lives alone and has no friends in the city. He feels ___.', options: ['excited', 'surprised', 'lonely', 'proud'], answer: 2,
          explain: 'Sống một mình, không bạn bè → lonely (cô đơn).' },
        { type: 'order', vi: 'Bạn đang làm gì vào lúc đó?', words: ['you', 'What', 'doing', 'were', 'time?', 'at', 'that'], answer: 'What were you doing at that time?' },
        { type: 'order', vi: 'Tôi đang ngủ thì điện thoại reo.', words: ['rang', 'I', 'sleeping', 'when', 'phone', 'was', 'the'], answer: 'I was sleeping when the phone rang' },
        { type: 'order', vi: 'Xin lỗi, đó là lỗi của tôi.', words: ['my', 'Sorry,', 'was', 'it', 'fault'], answer: 'Sorry, it was my fault' },
        { type: 'order', vi: 'Hôm qua họ không vui.', words: ['happy', "weren't", 'They', 'yesterday'], answer: "They weren't happy yesterday" }
      ],
      reading: {
        title: 'An Embarrassing Monday',
        titleVi: 'Một ngày thứ Hai đáng xấu hổ',
        text: [
          "Last Monday was a terrible day. My alarm clock didn't ring, so I woke up late. At eight o'clock, I was running to the bus stop. It was raining, and I didn't have an umbrella. When I got to the office, I was wet and very nervous.",
          'There was an important meeting at nine. While my boss was speaking, my phone rang very loudly. Everyone looked at me. I was so embarrassed! I quickly turned it off and apologized.',
          'After the meeting, my boss called me to her office. I was worried. But she wasn\'t angry. She smiled and said, "Never mind. Last week my phone rang while I was talking to the director!" I was surprised, and I felt much better.'
        ],
        vi: [
          'Thứ Hai tuần trước là một ngày tồi tệ. Đồng hồ báo thức không reo nên tôi dậy muộn. Lúc tám giờ, tôi đang chạy ra trạm xe buýt. Trời đang mưa mà tôi không mang ô. Khi đến văn phòng, tôi ướt sũng và rất căng thẳng.',
          'Có một cuộc họp quan trọng lúc chín giờ. Trong khi sếp đang nói, điện thoại của tôi reo rất to. Mọi người đều nhìn tôi. Tôi xấu hổ vô cùng! Tôi vội tắt máy và xin lỗi.',
          'Sau cuộc họp, sếp gọi tôi lên phòng. Tôi lo lắm. Nhưng chị ấy không giận. Chị mỉm cười và nói: "Không sao đâu. Tuần trước điện thoại của chị cũng reo khi chị đang nói chuyện với giám đốc đấy!" Tôi ngạc nhiên, và thấy dễ chịu hơn nhiều.'
        ],
        questions: [
          { q: 'Vì sao người viết dậy muộn?', options: ['Vì đồng hồ báo thức không reo', 'Vì trời mưa', 'Vì tối hôm trước đi ngủ muộn', 'Vì bị ốm'], answer: 0,
            explain: '"My alarm clock didn\'t ring, so I woke up late."' },
          { q: 'Lúc tám giờ người viết đang làm gì?', options: ['Đang họp', 'Đang ngủ', 'Đang chạy ra trạm xe buýt', 'Đang gọi điện thoại'], answer: 2,
            explain: '"At eight o\'clock, I was running to the bus stop."' },
          { q: 'Chuyện gì xảy ra trong cuộc họp?', options: ['Sếp nổi giận', 'Điện thoại của người viết reo rất to', 'Người viết bị ngã', 'Cuộc họp bị huỷ'], answer: 1,
            explain: '"While my boss was speaking, my phone rang very loudly."' },
          { q: 'Vì sao cuối cùng người viết thấy dễ chịu hơn?', options: ['Vì sếp tặng quà', 'Vì cuộc họp kết thúc sớm', 'Vì được về nhà sớm', 'Vì sếp kể mình cũng từng gặp chuyện tương tự'], answer: 3,
            explain: 'Sếp nói tuần trước điện thoại của chị cũng reo khi đang nói chuyện với giám đốc.' }
        ]
      }
    }
  },

  // ───────────────────────── sau A2-5: phương tiện; should / have to; rủ rê, mời ─────────────────────────
  {
    after: 'en-a2-5',
    unit: {
      id: 'en-a2-5b',
      icon: '🚌',
      title: 'Phương tiện & lời rủ rê',
      goal: 'Nói về các phương tiện đi lại, khuyên nên/phải làm gì; rủ rê, mời, nhận lời và từ chối lịch sự.',
      vocab: [
        { w: 'bus', ipa: '/bʌs/', vi: 'xe buýt', ex: 'I go to school by bus.', exVi: 'Tôi đi học bằng xe buýt.' },
        { w: 'train', ipa: '/treɪn/', vi: 'tàu hoả', ex: 'The train to Hue leaves at seven.', exVi: 'Tàu đi Huế khởi hành lúc bảy giờ.' },
        { w: 'taxi', ipa: '/ˈtæksi/', vi: 'xe taxi', ex: "It's late. Let's take a taxi.", exVi: 'Muộn rồi. Mình đi taxi đi.' },
        { w: 'motorbike', ipa: '/ˈmoʊtɚˌbaɪk/', vi: 'xe máy', ex: 'Most people in Vietnam ride motorbikes.', exVi: 'Phần lớn người Việt Nam đi xe máy.' },
        { w: 'bicycle', ipa: '/ˈbaɪsɪkəl/', vi: 'xe đạp', ex: 'My grandfather rides his bicycle to the market.', exVi: 'Ông tôi đạp xe đi chợ.' },
        { w: 'plane', ipa: '/pleɪn/', vi: 'máy bay', ex: 'The plane lands at 10 p.m.', exVi: 'Máy bay hạ cánh lúc 10 giờ tối.' },
        { w: 'subway', ipa: '/ˈsʌbˌweɪ/', vi: 'tàu điện ngầm', ex: 'In Tokyo, the subway is fast and clean.', exVi: 'Ở Tokyo, tàu điện ngầm nhanh và sạch sẽ.' },
        { w: 'boat', ipa: '/boʊt/', vi: 'thuyền', ex: 'We took a boat to the island.', exVi: 'Chúng tôi đi thuyền ra đảo.' },
        { w: 'station', ipa: '/ˈsteɪʃən/', vi: 'nhà ga, bến (tàu, xe)', ex: 'Meet me at the train station.', exVi: 'Gặp tôi ở ga tàu nhé.' },
        { w: 'airport', ipa: '/ˈɛrˌpɔrt/', vi: 'sân bay', ex: 'The airport is thirty minutes from the city.', exVi: 'Sân bay cách thành phố ba mươi phút.' },
        { w: 'bus stop', ipa: '/ˈbʌs ˌstɑp/', vi: 'trạm xe buýt', ex: 'The bus stop is in front of the bank.', exVi: 'Trạm xe buýt ở trước ngân hàng.' },
        { w: 'traffic jam', ipa: '/ˈtræfɪk ˌdʒæm/', vi: 'tắc đường, kẹt xe', ex: "Sorry I'm late. There was a traffic jam.", exVi: 'Xin lỗi tôi đến muộn. Đường bị tắc.' },
        { w: 'helmet', ipa: '/ˈhɛlmɪt/', vi: 'mũ bảo hiểm', ex: 'You have to wear a helmet on a motorbike.', exVi: 'Đi xe máy phải đội mũ bảo hiểm.' },
        { w: 'seat', ipa: '/sit/', vi: 'chỗ ngồi, ghế', ex: 'Is this seat free?', exVi: 'Chỗ này còn trống không?' },
        { w: 'fare', ipa: '/fɛr/', vi: 'giá vé (xe, tàu)', ex: 'The bus fare is seven thousand dong.', exVi: 'Giá vé xe buýt là bảy nghìn đồng.' },
        { w: 'on foot', ipa: '/ɑn ˈfʊt/', vi: 'đi bộ', ex: "The park is near. Let's go on foot.", exVi: 'Công viên gần thôi. Mình đi bộ đi.' },
        { w: 'catch', ipa: '/kætʃ/', vi: 'bắt kịp (xe, tàu)', ex: 'We have to hurry to catch the last bus.', exVi: 'Chúng ta phải nhanh lên để kịp chuyến xe buýt cuối.' },
        { w: 'get off', ipa: '/ɡɛt ˈɔf/', vi: 'xuống (xe, tàu)', ex: 'Get off at the next stop.', exVi: 'Xuống ở trạm tiếp theo nhé.' },
        { w: 'safe', ipa: '/seɪf/', vi: 'an toàn', ex: 'The train is safer than the motorbike.', exVi: 'Tàu hoả an toàn hơn xe máy.' },
        { w: 'dangerous', ipa: '/ˈdeɪndʒərəs/', vi: 'nguy hiểm', ex: 'Riding without a helmet is dangerous.', exVi: 'Đi xe mà không đội mũ bảo hiểm thì nguy hiểm.' }
      ],
      grammar: {
        title: "Should / have to và lời rủ rê: Let's…, Shall we…?, Why don't we…?",
        explain: [
          'Should + động từ nguyên mẫu = nên (lời khuyên): You should take a taxi. It\'s late. Phủ định shouldn\'t: You shouldn\'t ride so fast. Xin lời khuyên: Should I take the bus or the train?',
          'Have to / has to + động từ nguyên mẫu = phải (bắt buộc do luật lệ, hoàn cảnh): You have to wear a helmet. She has to get up early to catch the train. Don\'t / doesn\'t have to = không cần, không bắt buộc: You don\'t have to buy a ticket. It\'s free. Quá khứ: had to.',
          'Rủ rê, gợi ý: Let\'s + V (Let\'s take the bus.), Shall we + V? (Shall we go by train?), Why don\'t we + V? (Why don\'t we go on foot?). Đồng ý: Good idea! / Sure. / Sounds good. Từ chối nhẹ nhàng: I\'d rather not. / Maybe another time.',
          'Mời: Would you like to + V? (Would you like to come with us?). Nhận lời: I\'d love to! Từ chối lịch sự: I\'m sorry, I can\'t. I have to… / I\'d love to, but… Khi từ chối nên nêu lý do để không bị coi là bất lịch sự.'
        ],
        table: [
          ['Mục đích', 'Mẫu câu', 'Ví dụ'],
          ['Khuyên', "should / shouldn't + V", 'You should leave early.'],
          ['Bắt buộc', 'have to / has to + V', 'You have to wear a helmet.'],
          ['Không cần', "don't / doesn't have to + V", "We don't have to hurry."],
          ['Rủ rê', "Let's… / Shall we…? / Why don't we…?", "Why don't we take a taxi?"],
          ['Mời & đáp', "Would you like to…? — I'd love to! / Sorry, I can't.", 'Would you like to come?']
        ],
        examples: [
          { t: "There's a traffic jam. We should take the subway.", vi: 'Đường đang tắc. Chúng ta nên đi tàu điện ngầm.' },
          { t: 'You have to buy a ticket before you get on the train.', vi: 'Bạn phải mua vé trước khi lên tàu.' },
          { t: 'Shall we go by boat? — Good idea!', vi: 'Mình đi thuyền nhé? — Ý hay đấy!' },
          { t: "Why don't we go on foot? It's only ten minutes.", vi: 'Sao mình không đi bộ nhỉ? Chỉ mất mười phút thôi.' },
          { t: "Would you like to come to the beach with us? — I'd love to, but I have to work.", vi: 'Bạn có muốn đi biển với bọn mình không? — Mình rất muốn, nhưng mình phải đi làm.' }
        ],
        tip: 'Người Việt hay thêm to sau should: "You should to go" là sai → "You should go". Ngược lại, have to luôn có to: "I have go" → "I have to go". Với he / she / it dùng has to: "She have to work" → "She has to work". Khi đáp lời rủ, "OK" là đủ, nhưng "Sounds good!" hay "Good idea!" nghe tự nhiên và thân thiện hơn.'
      },
      dialogue: [
        { s: 'Kim', t: 'Our train to Hai Phong leaves at seven tomorrow. How should we get to the station?', vi: 'Tàu đi Hải Phòng của bọn mình chạy lúc bảy giờ sáng mai. Mình nên ra ga bằng gì nhỉ?' },
        { s: 'Tom', t: "Why don't we take a motorbike taxi? It's cheap.", vi: 'Sao không đi xe ôm nhỉ? Rẻ mà.' },
        { s: 'Kim', t: "I'm not sure. We have to wear helmets, and I have a big suitcase.", vi: 'Mình không chắc. Phải đội mũ bảo hiểm, mà mình lại có cái vali to.' },
        { s: 'Tom', t: 'OK. Shall we take the bus, then? The bus stop is near your house.', vi: 'Thế thì mình đi xe buýt nhé? Trạm xe buýt gần nhà bạn mà.' },
        { s: 'Kim', t: "The bus is slow, and there's always a traffic jam in the morning. I think we should take a taxi.", vi: 'Xe buýt chậm, mà buổi sáng lúc nào cũng tắc đường. Mình nghĩ mình nên đi taxi.' },
        { s: 'Tom', t: "Good idea. Then we don't have to carry our bags very far.", vi: 'Ý hay đấy. Thế thì không phải xách đồ đi xa.' },
        { s: 'Kim', t: 'Great. Oh, would you like to have breakfast at the station café before the train?', vi: 'Tuyệt. À, bạn có muốn ăn sáng ở quán cà phê nhà ga trước khi lên tàu không?' },
        { s: 'Tom', t: "I'd love to! Let's meet at six, then.", vi: 'Rất muốn chứ! Vậy mình gặp nhau lúc sáu giờ nhé.' },
        { s: 'Kim', t: 'Six is too early! Shall we say a quarter past six?', vi: 'Sáu giờ sớm quá! Hay sáu giờ mười lăm nhé?' },
        { s: 'Tom', t: 'Sounds good. See you tomorrow!', vi: 'Được đấy. Hẹn mai gặp nhé!' }
      ],
      exercises: [
        { type: 'mc', q: "You ___ wear a helmet on a motorbike. It's the law.", options: ['should', 'have to', "shouldn't", "don't have to"], answer: 1,
          explain: 'Luật bắt buộc → have to (phải).' },
        { type: 'mc', q: "It's late and you look tired. You ___ take a taxi.", options: ['should', 'has to', "shouldn't", 'to'], answer: 0,
          explain: 'Lời khuyên → should + V. "has to" sai vì chủ ngữ là you.' },
        { type: 'fill', q: 'She ___ to get up at 5 a.m. to catch the train. (have)', answer: ['has'], hint: 'ngôi thứ ba số ít',
          explain: 'She đi với has to.' },
        { type: 'fill', q: "You don't ___ to buy a ticket. The museum is free today.", answer: ['have'], hint: "don't ___ to = không cần",
          explain: "Don't have to = không cần, không bắt buộc." },
        { type: 'mc', q: '___ we go by train? — Good idea!', options: ['Why', "Let's", 'Would', 'Shall'], answer: 3,
          explain: 'Shall we + V? dùng để rủ rê, gợi ý.' },
        { type: 'fill', q: "___ don't we go on foot? It's only ten minutes.", answer: ['Why'], hint: "rủ rê: ___ don't we…?",
          explain: "Why don't we + V? = Sao chúng ta không… nhỉ?" },
        { type: 'mc', q: '"Would you like to come to my party?" — "___ I have to work."', options: ["Yes, let's.", 'Good idea!', "I'd love to, but", 'Shall we?'], answer: 2,
          explain: "Từ chối lịch sự: I'd love to, but + lý do." },
        { type: 'mc', q: "You ___ use your phone while you are driving. It's dangerous.", options: ["shouldn't", 'should', 'have to', "don't have to"], answer: 0,
          explain: 'Khuyên không nên làm việc nguy hiểm → shouldn\'t.' },
        { type: 'mc', q: 'A place where planes take off and land is an ___.', options: ['station', 'airport', 'bus stop', 'subway'], answer: 1,
          explain: 'Nơi máy bay cất cánh và hạ cánh là sân bay (airport).' },
        { type: 'fill', q: "Sorry I'm late. There was a terrible traffic ___.", answer: ['jam'], hint: 'tắc đường',
          explain: 'traffic jam = tắc đường.' },
        { type: 'mc', q: 'How much is the bus ___? — Seven thousand dong.', options: ['seat', 'helmet', 'station', 'fare'], answer: 3,
          explain: 'fare = giá vé xe, tàu.' },
        { type: 'fill', q: 'We have to run to ___ the last bus.', answer: ['catch'], hint: 'bắt kịp',
          explain: 'catch a bus / a train = bắt kịp chuyến xe, chuyến tàu.' },
        { type: 'order', vi: 'Chúng mình đi taxi nhé?', words: ['take', 'we', 'Shall', 'taxi?', 'a'], answer: 'Shall we take a taxi?' },
        { type: 'order', vi: 'Bạn phải đội mũ bảo hiểm.', words: ['wear', 'have', 'You', 'a', 'helmet', 'to'], answer: 'You have to wear a helmet' },
        { type: 'order', vi: 'Sao chúng ta không đi thuyền nhỉ?', words: ["don't", 'by', 'Why', 'boat?', 'go', 'we'], answer: "Why don't we go by boat?" },
        { type: 'order', vi: 'Bạn nên xuống ở trạm tiếp theo.', words: ['get', 'You', 'the', 'off', 'at', 'should', 'stop', 'next'], answer: 'You should get off at the next stop' }
      ],
      reading: {
        title: 'Getting Around Hanoi',
        titleVi: 'Đi lại ở Hà Nội',
        text: [
          'Hanoi is a busy city, and getting around can be difficult for visitors. Here is some advice.',
          'Most people in Hanoi ride motorbikes. If you want to try a motorbike taxi, you have to wear a helmet. The driver usually gives you one. Taxis are more comfortable, but they can be expensive in a traffic jam.',
          "The cheapest way to travel is by bus. The fare is only about 7,000 dong, and you don't have to book a ticket. But buses are often crowded, so you should be careful with your bag.",
          "In the Old Quarter, the streets are small and busy. You should go on foot. Why don't you get up early and walk around Hoan Kiem Lake? At six in the morning, the city is quiet and beautiful."
        ],
        vi: [
          'Hà Nội là một thành phố đông đúc, và việc đi lại có thể khó khăn với du khách. Sau đây là vài lời khuyên.',
          'Phần lớn người Hà Nội đi xe máy. Nếu muốn thử đi xe ôm, bạn phải đội mũ bảo hiểm. Tài xế thường đưa cho bạn một chiếc. Taxi thoải mái hơn, nhưng có thể khá đắt khi tắc đường.',
          'Cách đi lại rẻ nhất là xe buýt. Giá vé chỉ khoảng 7.000 đồng và bạn không cần đặt vé trước. Nhưng xe buýt thường đông, nên bạn nên cẩn thận với túi xách.',
          'Ở khu phố cổ, đường phố nhỏ và đông đúc. Bạn nên đi bộ. Sao bạn không dậy sớm và đi dạo quanh hồ Hoàn Kiếm? Lúc sáu giờ sáng, thành phố yên tĩnh và rất đẹp.'
        ],
        questions: [
          { q: 'Muốn đi xe ôm ở Hà Nội thì phải làm gì?', options: ['Đặt vé trước', 'Đội mũ bảo hiểm', 'Trả 7.000 đồng', 'Đi vào sáng sớm'], answer: 1,
            explain: '"If you want to try a motorbike taxi, you have to wear a helmet."' },
          { q: 'Theo bài đọc, cách đi lại rẻ nhất là gì?', options: ['Xe ôm', 'Taxi', 'Xe buýt', 'Đi bộ'], answer: 2,
            explain: '"The cheapest way to travel is by bus."' },
          { q: 'Vì sao nên cẩn thận với túi xách khi đi xe buýt?', options: ['Vì xe buýt thường đông người', 'Vì xe buýt chạy nhanh', 'Vì tài xế không thân thiện', 'Vì xe buýt đắt'], answer: 0,
            explain: '"Buses are often crowded, so you should be careful with your bag."' },
          { q: 'Người viết khuyên làm gì ở khu phố cổ?', options: ['Đi taxi', 'Thuê xe máy', 'Đi xe buýt', 'Đi bộ, và dậy sớm dạo quanh hồ Hoàn Kiếm'], answer: 3,
            explain: '"You should go on foot. Why don\'t you get up early and walk around Hoan Kiem Lake?"' }
        ]
      }
    }
  }
];
