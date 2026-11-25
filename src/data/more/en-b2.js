// Bài mới chèn vào lộ trình tiếng Anh B2 (xem cuối SCHEMA.md)
export default [
  // ───────────────────────── sau B2-2: tội phạm; bị động tường thuật, have something done ─────────────────────────
  {
    after: 'en-b2-2',
    unit: {
      id: 'en-b2-2b',
      icon: '🕵️',
      title: 'Tội phạm & pháp luật',
      goal: 'Đọc hiểu và kể lại tin tức về tội phạm một cách khách quan; nói về những việc mình nhờ người khác làm hoặc những chuyện không may xảy ra với mình.',
      vocab: [
        { w: 'crime', ipa: '/kraɪm/', vi: 'tội ác, hành vi phạm tội', ex: 'Crime has fallen in the city this year.', exVi: 'Năm nay tội phạm trong thành phố đã giảm.' },
        { w: 'criminal', ipa: '/ˈkrɪmənəl/', vi: 'kẻ phạm tội, tội phạm (người)', ex: 'The criminal was caught at the airport.', exVi: 'Tên tội phạm bị bắt ở sân bay.' },
        { w: 'thief', ipa: '/θif/', vi: 'kẻ trộm', ex: 'The thief is said to have escaped through the window.', exVi: 'Người ta nói tên trộm đã trốn thoát qua cửa sổ.' },
        { w: 'steal', ipa: '/stil/', vi: 'ăn trộm, lấy cắp', ex: 'Someone stole my wallet on the bus.', exVi: 'Có người lấy cắp ví của tôi trên xe buýt.' },
        { w: 'robbery', ipa: '/ˈrɑbəri/', vi: 'vụ cướp', ex: 'There was an armed robbery at the bank yesterday.', exVi: 'Hôm qua có một vụ cướp có vũ trang ở ngân hàng.' },
        { w: 'burglary', ipa: '/ˈbɜrɡləri/', vi: 'vụ trộm đột nhập (nhà, cửa hàng)', ex: 'Burglaries often happen when families are away on vacation.', exVi: 'Các vụ trộm đột nhập thường xảy ra khi các gia đình đi nghỉ vắng nhà.' },
        { w: 'suspect', ipa: '/ˈsʌspɛkt/', vi: 'nghi phạm', ex: 'The suspect is believed to be hiding in the city.', exVi: 'Người ta tin rằng nghi phạm đang lẩn trốn trong thành phố.' },
        { w: 'victim', ipa: '/ˈvɪktɪm/', vi: 'nạn nhân', ex: 'The victim was taken to the hospital with minor injuries.', exVi: 'Nạn nhân được đưa đến bệnh viện với vết thương nhẹ.' },
        { w: 'evidence', ipa: '/ˈɛvɪdəns/', vi: 'bằng chứng', ex: "There isn't enough evidence to arrest him.", exVi: 'Không có đủ bằng chứng để bắt anh ta.' },
        { w: 'detective', ipa: '/dɪˈtɛktɪv/', vi: 'thám tử, cảnh sát điều tra', ex: 'The detective found fingerprints on the glass.', exVi: 'Viên thám tử tìm thấy dấu vân tay trên chiếc cốc.' },
        { w: 'commit', ipa: '/kəˈmɪt/', vi: 'phạm (tội, lỗi)', ex: 'He is thought to have committed several crimes.', exVi: 'Người ta cho rằng anh ta đã phạm nhiều tội.' },
        { w: 'break into', ipa: '/breɪk ˈɪntu/', vi: 'đột nhập', ex: 'Somebody broke into our house last night.', exVi: 'Tối qua có người đột nhập vào nhà chúng tôi.' },
        { w: 'pickpocket', ipa: '/ˈpɪkˌpɑkɪt/', vi: 'kẻ móc túi', ex: 'Watch out for pickpockets in crowded markets.', exVi: 'Cẩn thận kẻ móc túi ở những khu chợ đông người.' },
        { w: 'court', ipa: '/kɔrt/', vi: 'toà án', ex: 'The case will go to court next month.', exVi: 'Vụ án sẽ được đưa ra toà vào tháng sau.' },
        { w: 'trial', ipa: '/ˈtraɪəl/', vi: 'phiên toà, vụ xét xử', ex: 'The trial lasted three weeks.', exVi: 'Phiên toà kéo dài ba tuần.' },
        { w: 'guilty', ipa: '/ˈɡɪlti/', vi: 'có tội', ex: 'The court found him guilty of robbery.', exVi: 'Toà án tuyên anh ta phạm tội cướp tài sản.' },
        { w: 'innocent', ipa: '/ˈɪnəsənt/', vi: 'vô tội', ex: 'She still says she is innocent.', exVi: 'Cô ấy vẫn khẳng định mình vô tội.' },
        { w: 'sentence', ipa: '/ˈsɛntəns/', vi: 'bản án; kết án', ex: 'He was sentenced to five years in prison.', exVi: 'Anh ta bị kết án năm năm tù.' },
        { w: 'prison', ipa: '/ˈprɪzən/', vi: 'nhà tù', ex: 'He spent ten years in prison.', exVi: 'Ông ta ngồi tù mười năm.' },
        { w: 'vandalism', ipa: '/ˈvændəˌlɪzəm/', vi: 'hành vi phá hoại (tài sản)', ex: 'Vandalism in the park costs the city a lot of money.', exVi: 'Hành vi phá hoại trong công viên khiến thành phố tốn rất nhiều tiền.' }
      ],
      grammar: {
        title: 'Bị động tường thuật (It is said that… / He is said to…) và have / get something done',
        explain: [
          'Khi đưa tin mà không cần nói rõ ai nói, ai tin (rất hay gặp trong tin tức tội phạm), ta dùng bị động với say, believe, think, report, know, expect, consider. Cách 1: It + is / was + V3 + that + mệnh đề: It is said that the thief escaped through the window. It is believed that the suspect is still in the city.',
          'Cách 2: Chủ ngữ + is / was + V3 + to V (việc xảy ra cùng lúc hoặc sau) hoặc + to have V3 (việc xảy ra TRƯỚC): The suspect is believed to be in the city. The thief is said to have escaped through the window. He was thought to have stolen the car.',
          'Have / get + tân ngữ (vật) + V3: nhờ, thuê người khác làm gì cho mình. I had my lock changed. We\'re getting the alarm repaired tomorrow. Get thân mật hơn have.',
          'Cấu trúc have + tân ngữ + V3 còn dùng cho chuyện KHÔNG MAY do người khác gây ra cho mình: She had her bag stolen on the bus. We had our car broken into last night. (Không ai được nhờ cả — chỉ là việc xảy ra với cô ấy / với chúng tôi.)'
        ],
        table: [
          ['Cấu trúc', 'Ví dụ'],
          ['It is said / believed that + S + V', 'It is believed that the thief was a woman.'],
          ['S + is said / believed + to V', 'He is said to live in Da Nang.'],
          ['S + is said / believed + to have V3', 'The suspect is said to have left the country.'],
          ['have / get + O + V3 (nhờ làm)', 'I had my door lock changed.'],
          ['have + O + V3 (chuyện không may)', 'He had his phone stolen.']
        ],
        examples: [
          { t: 'It is reported that two men broke into the jewelry shop.', vi: 'Theo tin tức, hai người đàn ông đã đột nhập vào tiệm kim hoàn.' },
          { t: 'The suspect is thought to be hiding in the mountains.', vi: 'Người ta cho rằng nghi phạm đang lẩn trốn trên núi.' },
          { t: 'The burglars are believed to have entered through the back door.', vi: 'Người ta tin rằng bọn trộm đã vào qua cửa sau.' },
          { t: "We're getting new locks fitted after the burglary.", vi: 'Sau vụ trộm, chúng tôi sẽ cho lắp khoá mới.' },
          { t: 'My uncle had his motorbike stolen outside the market.', vi: 'Chú tôi bị trộm mất xe máy ở ngoài chợ.' }
        ],
        tip: 'Người Việt hay dịch "Tôi bị lấy cắp túi" thành "I was stolen my bag" — sai, vì người không bị lấy cắp. Đúng: "I had my bag stolen" hoặc "My bag was stolen". Với "người ta nói anh ta ĐÃ…" phải dùng to have + V3: "He is said to have stolen the money", không nói "He is said to stole…".'
      },
      dialogue: [
        { s: 'Mrs. Hanh', t: 'Did you hear? The Tran family had their house broken into last night.', vi: 'Anh nghe chưa? Tối qua nhà họ Trần bị trộm đột nhập.' },
        { s: 'Mr. Long', t: 'Oh no! Was anything taken?', vi: 'Trời ơi! Có mất gì không?' },
        { s: 'Mrs. Hanh', t: 'Quite a lot. The burglars are said to have taken jewelry, two laptops and some cash.', vi: 'Khá nhiều. Nghe nói bọn trộm lấy trang sức, hai cái laptop và ít tiền mặt.' },
        { s: 'Mr. Long', t: "That's terrible. Do the police have any suspects?", vi: 'Kinh khủng thật. Công an đã có nghi phạm nào chưa?' },
        { s: 'Mrs. Hanh', t: "Not yet. But it's believed that the same gang has committed several burglaries in this area.", vi: 'Chưa. Nhưng người ta tin rằng chính băng này đã gây ra nhiều vụ trộm trong khu này.' },
        { s: 'Mr. Long', t: 'Really? How did they get in?', vi: 'Thật à? Chúng vào bằng cách nào?' },
        { s: 'Mrs. Hanh', t: "They're thought to have climbed over the back wall while the family was at a wedding.", vi: 'Người ta cho là chúng trèo qua tường sau trong lúc cả nhà đi đám cưới.' },
        { s: 'Mr. Long', t: "I think I'll have a security camera installed this weekend.", vi: 'Tôi nghĩ cuối tuần này tôi sẽ cho lắp một cái camera an ninh.' },
        { s: 'Mrs. Hanh', t: "Good idea. I'm getting all my locks changed tomorrow, too.", vi: 'Ý hay đấy. Mai tôi cũng cho thay hết khoá.' },
        { s: 'Mr. Long', t: "Let's also ask the neighbors to keep an eye on each other's houses.", vi: 'Mình cũng nên nhờ hàng xóm để mắt giúp nhà nhau.' }
      ],
      exercises: [
        { type: 'mc', q: 'It ___ that the thief escaped through the window.', options: ['says', 'is said', 'is saying', 'said to'], answer: 1,
          explain: 'Bị động tường thuật: It + is + V3 (said) + that…' },
        { type: 'mc', q: 'The suspect is believed ___ in the mountains at the moment.', options: ['to hide', 'to be hiding', 'hiding', 'to have hid'], answer: 1,
          explain: 'Việc đang diễn ra lúc này → to be + V-ing: is believed to be hiding.' },
        { type: 'fill', q: 'The burglars are thought to ___ entered through the back door.', answer: ['have'], hint: 'việc xảy ra trước → to ___ + V3',
          explain: 'Việc đột nhập đã xảy ra trước lúc "người ta cho rằng" → to have + V3.' },
        { type: 'mc', q: 'She ___ her bag stolen while she was shopping.', options: ['was', 'did', 'had', 'is'], answer: 2,
          explain: 'Chuyện không may do người khác gây ra: have + O + V3 → had her bag stolen.' },
        { type: 'fill', q: "We're getting our car ___ tomorrow. (repair)", answer: ['repaired'], hint: 'get + O + V3',
          explain: 'Nhờ người khác sửa xe: get + the car + repaired.' },
        { type: 'mc', q: 'Câu nào đúng nghĩa "Tôi bị móc mất ví"?', options: ['I had my wallet stolen.', 'I was stolen my wallet.', 'I had stolen my wallet.', 'My wallet stole me.'], answer: 0,
          explain: 'have + my wallet + stolen = ví của tôi bị (ai đó) lấy mất. "I had stolen my wallet" lại nghĩa là tôi đã tự lấy trộm ví.' },
        { type: 'fill', q: 'It is ___ that more than 200 bikes were stolen last year. (report)', answer: ['reported'], hint: 'It is + V3 + that',
          explain: 'It is reported that… = theo tin tức / báo cáo thì…' },
        { type: 'mc', q: 'The court found him ___, and he was sent to prison for five years.', options: ['innocent', 'victim', 'evidence', 'guilty'], answer: 3,
          explain: 'Bị đi tù → toà tuyên có tội (guilty).' },
        { type: 'mc', q: "Someone who steals things from people's pockets or bags in crowded places is a ___.", options: ['detective', 'pickpocket', 'suspect', 'victim'], answer: 1,
          explain: 'pickpocket = kẻ móc túi.' },
        { type: 'fill', q: 'Somebody broke ___ our office and took two computers.', answer: ['into'], hint: 'đột nhập = break ___',
          explain: 'break into somewhere = đột nhập vào đâu.' },
        { type: 'mc', q: "There isn't enough ___ to prove that he did it.", options: ['evidence', 'court', 'sentence', 'crime'], answer: 0,
          explain: 'evidence = bằng chứng (danh từ không đếm được).' },
        { type: 'mc', q: 'The famous singer is said ___ in the US for ten years before returning home.', options: ['to live', 'living', 'to have lived', 'lived'], answer: 2,
          explain: 'Việc sống ở Mỹ đã xảy ra trước → to have + V3.' },
        { type: 'fill', q: 'The ___ will take place at the city court next month.', answer: ['trial'], hint: 'phiên toà',
          explain: 'trial = phiên toà, vụ xét xử.' },
        { type: 'order', vi: 'Người ta tin rằng nghi phạm đã rời khỏi Việt Nam.', words: ['have', 'left', 'is', 'Vietnam', 'suspect', 'The', 'to', 'believed'], answer: 'The suspect is believed to have left Vietnam' },
        { type: 'order', vi: 'Chúng tôi đã cho thay ổ khoá sau vụ trộm.', words: ['our', 'changed', 'We', 'locks', 'had', 'after', 'burglary', 'the'], answer: 'We had our locks changed after the burglary' },
        { type: 'order', vi: 'Theo báo cáo, năm nay tội phạm đã giảm.', words: ['reported', 'It', 'is', 'that', 'crime', 'fallen', 'has', 'this', 'year'], answer: 'It is reported that crime has fallen this year' }
      ],
      reading: {
        title: 'Café Owner Helps Police Catch Burglars',
        titleVi: 'Chủ quán cà phê giúp cảnh sát bắt băng trộm',
        text: [
          'Police in Da Nang have arrested three men who are believed to have committed more than twenty burglaries in the city since January. The suspects, aged between twenty and thirty-five, were caught early on Sunday morning while they were trying to break into a jewelry shop near the river.',
          'It is said that the gang always followed the same pattern. They chose houses and shops whose owners were away, usually at weddings or on vacation, and climbed in through the back. Most victims only discovered the crime when they came home. "We had our house broken into while we were visiting my parents in Hue," one victim told reporters. "They took everything: our TV, my wife\'s jewelry, even our children\'s savings."',
          'The arrest happened thanks to a café owner, Mr. Quang, who had recently had security cameras installed outside his shop. Late on Saturday night, he noticed three men acting strangely across the street and called the police. A detective said that the video from his cameras had provided important evidence.',
          'The men are now being held at the city police station. Their trial is expected to take place in the spring. If they are found guilty, they could face up to fifteen years in prison. Meanwhile, police are advising residents to get stronger locks fitted and to tell their neighbors when they go away.'
        ],
        vi: [
          'Cảnh sát Đà Nẵng đã bắt giữ ba người đàn ông bị cho là đã gây ra hơn hai mươi vụ trộm đột nhập trong thành phố kể từ tháng Một. Các nghi phạm, trong độ tuổi từ hai mươi đến ba mươi lăm, bị bắt vào rạng sáng Chủ nhật khi đang tìm cách đột nhập vào một tiệm kim hoàn gần sông.',
          'Người ta nói rằng băng nhóm này luôn làm theo cùng một cách. Chúng chọn những ngôi nhà và cửa hàng mà chủ đi vắng, thường là đi đám cưới hoặc đi nghỉ, rồi trèo vào từ phía sau. Phần lớn nạn nhân chỉ phát hiện ra khi về nhà. "Nhà chúng tôi bị đột nhập trong lúc chúng tôi về Huế thăm bố mẹ," một nạn nhân kể với phóng viên. "Chúng lấy hết: ti vi, trang sức của vợ tôi, cả tiền tiết kiệm của bọn trẻ."',
          'Vụ bắt giữ thành công là nhờ một chủ quán cà phê, ông Quang, người vừa cho lắp camera an ninh trước quán. Khuya thứ Bảy, ông để ý thấy ba người đàn ông có hành động khả nghi ở bên kia đường và đã gọi cảnh sát. Một điều tra viên cho biết đoạn video từ camera của ông đã cung cấp bằng chứng quan trọng.',
          'Ba người đàn ông hiện đang bị tạm giữ tại công an thành phố. Phiên toà dự kiến diễn ra vào mùa xuân. Nếu bị tuyên có tội, họ có thể phải đối mặt với mức án lên đến mười lăm năm tù. Trong khi đó, cảnh sát khuyên người dân lắp khoá chắc chắn hơn và báo cho hàng xóm khi đi vắng.'
        ],
        questions: [
          { q: 'Ba người đàn ông bị bắt khi nào?', options: ['Khi đang đột nhập một tiệm kim hoàn vào rạng sáng Chủ nhật', 'Khi đang dự đám cưới', 'Khi đang ngồi ở quán cà phê', 'Khi đang trốn ở Huế'], answer: 0,
            explain: '"…were caught early on Sunday morning while they were trying to break into a jewelry shop."' },
          { q: 'Theo bài, băng nhóm thường chọn nhà như thế nào?', options: ['Nhà có lắp camera', 'Nhà mà chủ đi vắng', 'Nhà gần đồn công an', 'Nhà có nhiều tiền mặt'], answer: 1,
            explain: '"They chose houses and shops whose owners were away."' },
          { q: 'Ông Quang đã giúp cảnh sát như thế nào?', options: ['Ông tự tay bắt kẻ trộm', 'Ông là điều tra viên', 'Ông báo cảnh sát và camera của ông ghi lại bằng chứng', 'Ông là nạn nhân của vụ trộm'], answer: 2,
            explain: 'Ông thấy ba người khả nghi, gọi cảnh sát, và video từ camera trở thành bằng chứng quan trọng.' },
          { q: 'Cảnh sát khuyên người dân làm gì?', options: ['Ở nhà vào cuối tuần', 'Không đi dự đám cưới', 'Gửi tiền tiết kiệm vào ngân hàng', 'Lắp khoá chắc hơn và báo cho hàng xóm khi đi vắng'], answer: 3,
            explain: '"…to get stronger locks fitted and to tell their neighbors when they go away."' }
        ]
      }
    }
  },

  // ───────────────────────── sau B2-3: văn hoá nghệ thuật; suy đoán must / might / can't (have) ─────────────────────────
  {
    after: 'en-b2-3',
    unit: {
      id: 'en-b2-3b',
      icon: '🎨',
      title: 'Văn hoá & nghệ thuật',
      goal: 'Nói về tranh, triển lãm, biểu diễn và di sản; suy đoán, đưa ra kết luận về hiện tại và quá khứ dựa trên chứng cứ.',
      vocab: [
        { w: 'gallery', ipa: '/ˈɡæləri/', vi: 'phòng trưng bày (tranh, nghệ thuật)', ex: 'The gallery is showing works by young Vietnamese artists.', exVi: 'Phòng tranh đang trưng bày tác phẩm của các nghệ sĩ trẻ Việt Nam.' },
        { w: 'painting', ipa: '/ˈpeɪntɪŋ/', vi: 'bức tranh (vẽ bằng màu)', ex: 'This painting must be very old.', exVi: 'Bức tranh này hẳn là rất cổ.' },
        { w: 'sculpture', ipa: '/ˈskʌlptʃər/', vi: 'tác phẩm điêu khắc', ex: 'There is a huge bronze sculpture in the main square.', exVi: 'Có một tác phẩm điêu khắc bằng đồng rất lớn ở quảng trường chính.' },
        { w: 'portrait', ipa: '/ˈpɔrtrɪt/', vi: 'bức chân dung', ex: 'She painted a portrait of her grandmother.', exVi: 'Cô ấy vẽ một bức chân dung bà mình.' },
        { w: 'masterpiece', ipa: '/ˈmæstərˌpis/', vi: 'kiệt tác', ex: 'Many people consider this film a masterpiece.', exVi: 'Nhiều người coi bộ phim này là một kiệt tác.' },
        { w: 'heritage', ipa: '/ˈhɛrɪtɪdʒ/', vi: 'di sản', ex: 'Hoi An is a World Heritage Site.', exVi: 'Hội An là Di sản Thế giới.' },
        { w: 'tradition', ipa: '/trəˈdɪʃən/', vi: 'truyền thống', ex: 'Making banh chung at Tet is a family tradition.', exVi: 'Gói bánh chưng ngày Tết là truyền thống của gia đình.' },
        { w: 'festival', ipa: '/ˈfɛstəvəl/', vi: 'lễ hội', ex: 'The Hue Festival attracts thousands of visitors.', exVi: 'Festival Huế thu hút hàng nghìn du khách.' },
        { w: 'performance', ipa: '/pərˈfɔrməns/', vi: 'buổi / màn biểu diễn', ex: 'Her performance last night was unforgettable.', exVi: 'Màn biểu diễn của cô ấy tối qua thật khó quên.' },
        { w: 'audience', ipa: '/ˈɔdiəns/', vi: 'khán giả', ex: 'The audience stood up and clapped for five minutes.', exVi: 'Khán giả đứng dậy vỗ tay suốt năm phút.' },
        { w: 'stage', ipa: '/steɪdʒ/', vi: 'sân khấu', ex: 'He was so nervous that he forgot his lines on stage.', exVi: 'Anh ấy run đến mức quên lời thoại trên sân khấu.' },
        { w: 'orchestra', ipa: '/ˈɔrkəstrə/', vi: 'dàn nhạc', ex: 'The orchestra played Beethoven\'s Fifth Symphony.', exVi: 'Dàn nhạc chơi bản Giao hưởng số 5 của Beethoven.' },
        { w: 'contemporary', ipa: '/kənˈtɛmpəˌrɛri/', vi: 'đương đại', ex: 'I prefer contemporary art to classical paintings.', exVi: 'Tôi thích nghệ thuật đương đại hơn tranh cổ điển.' },
        { w: 'abstract', ipa: '/ˈæbˌstrækt/', vi: 'trừu tượng', ex: "I don't really understand abstract art.", exVi: 'Tôi không thật sự hiểu nghệ thuật trừu tượng.' },
        { w: 'original', ipa: '/əˈrɪdʒənəl/', vi: 'bản gốc; nguyên bản, độc đáo', ex: 'Is this the original or a copy?', exVi: 'Đây là bản gốc hay bản sao?' },
        { w: 'fake', ipa: '/feɪk/', vi: 'đồ giả; giả', ex: 'The expert said the painting was a fake.', exVi: 'Chuyên gia nói bức tranh là đồ giả.' },
        { w: 'creative', ipa: '/kriˈeɪtɪv/', vi: 'sáng tạo', ex: 'Children are naturally creative.', exVi: 'Trẻ em vốn rất sáng tạo.' },
        { w: 'inspire', ipa: '/ɪnˈspaɪər/', vi: 'truyền cảm hứng', ex: 'The sea inspired many of his songs.', exVi: 'Biển cả là nguồn cảm hứng cho nhiều bài hát của anh ấy.' },
        { w: 'critic', ipa: '/ˈkrɪtɪk/', vi: 'nhà phê bình', ex: 'The critics loved the new play.', exVi: 'Các nhà phê bình rất thích vở kịch mới.' },
        { w: 'auction', ipa: '/ˈɔkʃən/', vi: 'cuộc bán đấu giá', ex: 'The painting was sold at auction for two million dollars.', exVi: 'Bức tranh được bán đấu giá với giá hai triệu đô la.' }
      ],
      grammar: {
        title: "Suy đoán: must / might / could / can't (+ have V3)",
        explain: [
          'Dùng động từ khuyết thiếu để suy đoán, kết luận dựa trên chứng cứ. Về HIỆN TẠI: must + V = chắc chắn là (gần 100%); might / may / could + V = có thể là (khoảng 50%); can\'t + V = chắc chắn không phải. This painting must be very valuable. It might be a copy. It can\'t be the original — the original is in Paris.',
          'Về QUÁ KHỨ: must have + V3 = chắc hẳn đã; might / may / could have + V3 = có lẽ đã; can\'t / couldn\'t have + V3 = không thể nào đã. The artist must have spent years on it. Someone might have hidden it in the attic. He can\'t have painted this — he was only six at the time.',
          'Suy đoán về việc đang diễn ra: must / might / can\'t + be + V-ing: The audience must be enjoying the show — they\'re laughing a lot.',
          'Lưu ý: khi suy đoán, phủ định của must là can\'t, KHÔNG phải mustn\'t (mustn\'t = cấm). Could have + V3 còn có nghĩa "lẽ ra đã có thể (nhưng không làm)": You could have told me! (Lẽ ra bạn có thể nói với tôi chứ!)'
        ],
        table: [
          ['Mức chắc chắn', 'Hiện tại', 'Quá khứ'],
          ['Gần như chắc chắn ĐÚNG', 'must + V', 'must have + V3'],
          ['Có thể', 'might / may / could + V', 'might / may / could have + V3'],
          ['Gần như chắc chắn SAI', "can't / couldn't + V", "can't / couldn't have + V3"]
        ],
        examples: [
          { t: 'The gallery must be closed. All the lights are off.', vi: 'Phòng tranh chắc là đóng cửa rồi. Đèn tắt hết cả.' },
          { t: 'This portrait might be worth a lot of money.', vi: 'Bức chân dung này có thể đáng giá rất nhiều tiền.' },
          { t: 'The painter must have used real gold in this picture.', vi: 'Hoạ sĩ chắc hẳn đã dùng vàng thật trong bức tranh này.' },
          { t: "It can't have been easy to carve such a huge sculpture by hand.", vi: 'Tạc bằng tay một bức tượng lớn như thế hẳn không thể nào dễ dàng.' },
          { t: 'The tickets might have sold out already — the festival is very popular.', vi: 'Có khi vé đã bán hết rồi — lễ hội đó rất nổi tiếng.' }
        ],
        tip: 'Người Việt hay dùng mustn\'t cho suy đoán phủ định: "He mustn\'t be at home" (nghĩa là "cấm ở nhà") → phải nói "He can\'t be at home". Suy đoán về quá khứ luôn cần have + V3: "She must went" → "She must have gone". Khi nói nhanh, "must have" thường đọc nối thành /ˈmʌstəv/, "can\'t have" thành /ˈkæntəv/.'
      },
      dialogue: [
        { s: 'Ngoc', t: 'Look at this painting. Who do you think painted it?', vi: 'Nhìn bức tranh này đi. Cậu nghĩ ai vẽ nó?' },
        { s: 'David', t: "There's no name. It might be by a student — this gallery shows a lot of young artists.", vi: 'Không có tên. Có thể là của một sinh viên — phòng tranh này hay trưng bày tác phẩm của nghệ sĩ trẻ.' },
        { s: 'Ngoc', t: "It can't be by a student. Look at the details! The artist must have spent months on it.", vi: 'Không thể là của sinh viên được. Nhìn các chi tiết kìa! Hoạ sĩ hẳn đã mất hàng tháng để vẽ.' },
        { s: 'David', t: "You're right. And the colors are amazing. It might have been painted in the 1930s.", vi: 'Cậu nói đúng. Màu sắc cũng tuyệt vời. Có lẽ nó được vẽ vào những năm 1930.' },
        { s: 'Ngoc', t: "The woman in the portrait must be someone important. She's wearing a very expensive ao dai.", vi: 'Người phụ nữ trong bức chân dung hẳn là người quan trọng. Bà ấy mặc một chiếc áo dài rất đắt tiền.' },
        { s: 'David', t: "She could be the artist's wife. Painters often used their families as models.", vi: 'Có thể là vợ hoạ sĩ. Các hoạ sĩ hay lấy người nhà làm mẫu.' },
        { s: 'Ngoc', t: "Oh, here's the information card. It says it's an original by a Hanoi artist, painted in 1936.", vi: 'À, có tấm thẻ thông tin đây. Nó ghi đây là bản gốc của một hoạ sĩ Hà Nội, vẽ năm 1936.' },
        { s: 'David', t: 'Does it say who the woman is?', vi: 'Có ghi người phụ nữ là ai không?' },
        { s: 'Ngoc', t: 'No, nobody knows. The painting was found in an old house in Hue ten years ago.', vi: 'Không, chẳng ai biết cả. Bức tranh được tìm thấy trong một ngôi nhà cổ ở Huế mười năm trước.' },
        { s: 'David', t: 'Someone must have hidden it there during the war. No wonder the critics call it a masterpiece.', vi: 'Chắc hẳn ai đó đã giấu nó ở đó trong thời chiến. Chẳng trách giới phê bình gọi nó là kiệt tác.' }
      ],
      exercises: [
        { type: 'mc', q: 'All the lights are off. The gallery ___ closed.', options: ['must be', "can't be", 'must have', 'might have'], answer: 0,
          explain: 'Chứng cứ rõ ràng (đèn tắt hết) → kết luận gần chắc chắn về hiện tại: must be.' },
        { type: 'mc', q: 'This ___ be the original. The original is in a museum in Paris.', options: ['must', "can't", 'might', 'should'], answer: 1,
          explain: 'Bản gốc đang ở Paris → chắc chắn đây không phải bản gốc: can\'t be.' },
        { type: 'fill', q: 'The artist must ___ spent years on this sculpture.', answer: ['have'], hint: 'suy đoán quá khứ: must ___ + V3',
          explain: 'Suy đoán về quá khứ: must have + V3 (spent).' },
        { type: 'mc', q: "I'm not sure, but she ___ forgotten her ticket. She looks worried.", options: ['must have', "can't have", 'must', 'might have'], answer: 3,
          explain: '"I\'m not sure" → khả năng chưa chắc chắn về quá khứ: might have + V3.' },
        { type: 'fill', q: 'He ___ have stolen the painting. He was in Hanoi that night. (không thể nào)', answer: ["can't", "couldn't", 'cannot', 'could not', 'can’t', 'couldn’t'], hint: 'phủ định của must khi suy đoán',
          explain: 'Có bằng chứng ngoại phạm → không thể nào đã: can\'t / couldn\'t have + V3.' },
        { type: 'mc', q: 'Câu nào đúng nghĩa "Chắc hẳn anh ấy đang ngủ"?', options: ['He must sleep.', "He mustn't be sleeping.", 'He must be sleeping.', 'He must have sleep.'], answer: 2,
          explain: 'Suy đoán việc đang diễn ra: must be + V-ing.' },
        { type: 'mc', q: 'The audience are standing and clapping after the show. They ___ the performance.', options: ['must have enjoyed', 'must enjoying', "can't have enjoyed", 'might enjoy'], answer: 0,
          explain: 'Buổi diễn đã xong, khán giả đứng dậy vỗ tay → chắc hẳn đã rất thích: must have enjoyed.' },
        { type: 'fill', q: 'The expert says the painting is a ___. It was painted five years ago, not in 1850.', answer: ['fake'], hint: 'đồ giả',
          explain: 'fake = đồ giả, trái nghĩa với original.' },
        { type: 'mc', q: 'People who write reviews of films, books and art are ___.', options: ['audiences', 'critics', 'orchestras', 'portraits'], answer: 1,
          explain: 'critic = nhà phê bình.' },
        { type: 'mc', q: "A painting or photo of a person, especially of their face, is a ___.", options: ['portrait', 'sculpture', 'gallery', 'stage'], answer: 0,
          explain: 'portrait = bức chân dung.' },
        { type: 'fill', q: 'The old map was sold at ___ for $50,000.', answer: ['auction', 'an auction'], hint: 'cuộc bán đấu giá',
          explain: 'be sold at auction = được bán đấu giá.' },
        { type: 'mc', q: 'Hoi An is a World ___ Site, so its old houses are protected.', options: ['Tradition', 'Festival', 'Audience', 'Heritage'], answer: 3,
          explain: 'World Heritage Site = Di sản Thế giới.' },
        { type: 'fill', q: 'Her trip to the mountains ___ her to write her first novel. (inspire)', answer: ['inspired'], hint: 'quá khứ đơn',
          explain: 'inspire somebody to do something = truyền cảm hứng cho ai làm gì.' },
        { type: 'order', vi: 'Chắc hẳn ai đó đã giấu nó trên gác mái.', words: ['hidden', 'must', 'Someone', 'it', 'have', 'in', 'the', 'attic'], answer: 'Someone must have hidden it in the attic' },
        { type: 'order', vi: 'Đó không thể là bản gốc được.', words: ["can't", 'the', 'That', 'original', 'be'], answer: "That can't be the original" },
        { type: 'order', vi: 'Có lẽ họ đã bán nó trong một cuộc đấu giá.', words: ['sold', 'might', 'They', 'at', 'have', 'it', 'auction', 'an'], answer: 'They might have sold it at an auction' }
      ],
      reading: {
        title: 'The Mystery of the Attic Painting',
        titleVi: 'Bí ẩn bức tranh trên gác mái',
        text: [
          "In 2019, a family in Hue was cleaning the attic of their grandparents' old house when they found a large painting wrapped in a dusty cloth. It showed a young woman in a white ao dai, sitting by a river. There was no signature, only a year: 1938.",
          'The family took the painting to a gallery in Hanoi. At first, the experts were not sure. "It might be a copy," one of them said. "Many students copied famous works in those days." But after examining the paint and the canvas, they changed their minds. The materials must have come from France, and only a few artists in Vietnam could buy them at that time. "This can\'t be a student\'s work," the director said. "The skill is extraordinary. It must be an original."',
          "So who painted it, and why was it hidden? Some critics believe the artist might have been a teacher at an art school in Hanoi. Others think the woman in the portrait could be the artist's wife. Whoever she was, the painting must have been very important to someone. Nobody hides a masterpiece in an attic by accident.",
          'Last year, the painting was shown at a national exhibition, and it inspired a play that is now on stage in Ho Chi Minh City. Several collectors have offered to buy it at auction, but the family has refused. "It isn\'t ours to sell," the grandson explained. "It is part of our heritage."'
        ],
        vi: [
          'Năm 2019, một gia đình ở Huế đang dọn gác mái căn nhà cũ của ông bà thì tìm thấy một bức tranh lớn được bọc trong tấm vải phủ đầy bụi. Tranh vẽ một thiếu nữ mặc áo dài trắng ngồi bên bờ sông. Không có chữ ký, chỉ có một con số năm: 1938.',
          'Gia đình mang bức tranh đến một phòng tranh ở Hà Nội. Lúc đầu, các chuyên gia không chắc chắn. "Có thể đây là bản chép lại," một người nói. "Thời đó nhiều sinh viên chép lại các tác phẩm nổi tiếng." Nhưng sau khi kiểm tra màu vẽ và vải toan, họ đổi ý. Chất liệu hẳn là được mang từ Pháp sang, và vào thời điểm đó chỉ một số ít hoạ sĩ ở Việt Nam mua được. "Đây không thể là tác phẩm của sinh viên," giám đốc phòng tranh nói. "Tay nghề phi thường. Đây hẳn là bản gốc."',
          'Vậy ai đã vẽ nó, và vì sao nó bị giấu đi? Một số nhà phê bình tin rằng hoạ sĩ có thể từng là giảng viên ở một trường mỹ thuật tại Hà Nội. Số khác cho rằng người phụ nữ trong bức chân dung có thể là vợ hoạ sĩ. Dù bà là ai, bức tranh hẳn đã rất quan trọng với một người nào đó. Không ai lại vô tình giấu một kiệt tác trên gác mái cả.',
          'Năm ngoái, bức tranh được trưng bày tại một triển lãm quốc gia, và nó đã truyền cảm hứng cho một vở kịch hiện đang được diễn ở Thành phố Hồ Chí Minh. Nhiều nhà sưu tập đã đề nghị mua nó qua đấu giá, nhưng gia đình từ chối. "Nó không phải của riêng chúng tôi để bán," người cháu giải thích. "Nó là một phần di sản của chúng ta."'
        ],
        questions: [
          { q: 'Gia đình tìm thấy bức tranh ở đâu?', options: ['Trên gác mái căn nhà cũ của ông bà', 'Trong một phòng tranh ở Hà Nội', 'Trong một trường mỹ thuật', 'Ở một cuộc đấu giá'], answer: 0,
            explain: '"…cleaning the attic of their grandparents\' old house when they found a large painting…"' },
          { q: 'Vì sao các chuyên gia kết luận đây là bản gốc?', options: ['Vì có chữ ký của hoạ sĩ', 'Vì gia đình khẳng định như vậy', 'Vì chất liệu từ Pháp và tay nghề phi thường', 'Vì bức tranh được vẽ năm 2019'], answer: 2,
            explain: 'Chất liệu hẳn đến từ Pháp, ít hoạ sĩ mua được, và tay nghề "extraordinary".' },
          { q: 'Điều nào trong bài chỉ là SUY ĐOÁN, chưa chắc chắn?', options: ['Bức tranh được tìm thấy năm 2019', 'Người phụ nữ trong tranh có thể là vợ hoạ sĩ', 'Bức tranh có ghi năm 1938', 'Bức tranh từng được trưng bày ở triển lãm quốc gia'], answer: 1,
            explain: '"Others think the woman in the portrait could be the artist\'s wife." — could be là suy đoán.' },
          { q: 'Vì sao gia đình không bán bức tranh?', options: ['Vì giá đề nghị quá thấp', 'Vì họ muốn tự mở phòng tranh', 'Vì bức tranh là đồ giả', 'Vì họ coi nó là di sản chung, không phải của riêng mình để bán'], answer: 3,
            explain: '"It isn\'t ours to sell… It is part of our heritage."' }
        ]
      }
    }
  },

  // ───────────────────────── sau B2-5: tương lai; future continuous / perfect ─────────────────────────
  {
    after: 'en-b2-5',
    unit: {
      id: 'en-b2-5b',
      icon: '🔮',
      title: 'Tương lai & mục tiêu dài hạn',
      goal: 'Nói về kế hoạch dài hạn và dự đoán xã hội tương lai: việc sẽ đang diễn ra và việc sẽ đã hoàn thành trước một mốc thời gian.',
      vocab: [
        { w: 'by then', ipa: '/baɪ ˈðɛn/', vi: 'đến lúc đó', ex: "I'll graduate in 2030. By then, I'll have worked part-time for four years.", exVi: 'Tôi sẽ tốt nghiệp năm 2030. Đến lúc đó, tôi sẽ đã làm bán thời gian được bốn năm.' },
        { w: 'goal', ipa: '/ɡoʊl/', vi: 'mục tiêu', ex: 'My goal is to speak English fluently in two years.', exVi: 'Mục tiêu của tôi là nói tiếng Anh trôi chảy trong hai năm.' },
        { w: 'achieve', ipa: '/əˈtʃiv/', vi: 'đạt được', ex: 'She has achieved everything she planned.', exVi: 'Cô ấy đã đạt được mọi điều mình dự định.' },
        { w: 'ambition', ipa: '/æmˈbɪʃən/', vi: 'hoài bão, tham vọng', ex: 'His ambition is to open his own restaurant.', exVi: 'Hoài bão của anh ấy là mở nhà hàng riêng.' },
        { w: 'milestone', ipa: '/ˈmaɪlˌstoʊn/', vi: 'cột mốc (quan trọng)', ex: 'Buying our first home was an important milestone.', exVi: 'Mua căn nhà đầu tiên là một cột mốc quan trọng.' },
        { w: 'long-term', ipa: '/ˌlɔŋˈtɜrm/', vi: 'dài hạn', ex: 'What are your long-term plans?', exVi: 'Kế hoạch dài hạn của bạn là gì?' },
        { w: 'eventually', ipa: '/ɪˈvɛntʃuəli/', vi: 'cuối cùng, rốt cuộc (sau một thời gian dài)', ex: 'Eventually, I want to live by the sea.', exVi: 'Rốt cuộc thì tôi muốn sống gần biển.' },
        { w: 'retire', ipa: '/rɪˈtaɪər/', vi: 'nghỉ hưu', ex: 'By 2040, my parents will have retired.', exVi: 'Đến năm 2040, bố mẹ tôi sẽ đã nghỉ hưu.' },
        { w: 'generation', ipa: '/ˌdʒɛnəˈreɪʃən/', vi: 'thế hệ', ex: 'The next generation will be working with robots every day.', exVi: 'Thế hệ tiếp theo sẽ làm việc cùng robot hằng ngày.' },
        { w: 'population', ipa: '/ˌpɑpjəˈleɪʃən/', vi: 'dân số', ex: "The city's population will have doubled by 2050.", exVi: 'Đến năm 2050, dân số thành phố sẽ đã tăng gấp đôi.' },
        { w: 'trend', ipa: '/trɛnd/', vi: 'xu hướng', ex: 'Working from home is a growing trend.', exVi: 'Làm việc tại nhà là một xu hướng đang tăng.' },
        { w: 'decline', ipa: '/dɪˈklaɪn/', vi: 'giảm sút; sự suy giảm', ex: 'The number of farmers has declined sharply.', exVi: 'Số lượng nông dân đã giảm mạnh.' },
        { w: 'expand', ipa: '/ɪkˈspænd/', vi: 'mở rộng', ex: 'The company is planning to expand into Asia.', exVi: 'Công ty đang lên kế hoạch mở rộng sang châu Á.' },
        { w: 'transform', ipa: '/trænsˈfɔrm/', vi: 'biến đổi, thay đổi hoàn toàn', ex: 'AI will transform the way we work.', exVi: 'Trí tuệ nhân tạo sẽ thay đổi hoàn toàn cách chúng ta làm việc.' },
        { w: 'automation', ipa: '/ˌɔtəˈmeɪʃən/', vi: 'sự tự động hoá', ex: 'Automation may replace many factory jobs.', exVi: 'Tự động hoá có thể thay thế nhiều công việc trong nhà máy.' },
        { w: 'remote', ipa: '/rɪˈmoʊt/', vi: 'từ xa; hẻo lánh', ex: 'In ten years, half of us will be doing remote work.', exVi: 'Mười năm nữa, một nửa chúng ta sẽ làm việc từ xa.' },
        { w: 'commute', ipa: '/kəˈmjut/', vi: 'đi lại (giữa nhà và nơi làm)', ex: 'I commute two hours a day by bus.', exVi: 'Mỗi ngày tôi mất hai tiếng đi lại bằng xe buýt.' },
        { w: 'lifestyle', ipa: '/ˈlaɪfˌstaɪl/', vi: 'lối sống', ex: 'A healthy lifestyle can add years to your life.', exVi: 'Lối sống lành mạnh có thể giúp bạn sống thọ hơn.' },
        { w: 'settle down', ipa: '/ˌsɛtəl ˈdaʊn/', vi: 'ổn định cuộc sống (lập gia đình, định cư)', ex: 'He wants to travel the world before he settles down.', exVi: 'Anh ấy muốn đi khắp thế giới trước khi ổn định cuộc sống.' },
        { w: 'prediction', ipa: '/prɪˈdɪkʃən/', vi: 'lời dự đoán', ex: 'Here are my predictions for the next twenty years.', exVi: 'Đây là những dự đoán của tôi cho hai mươi năm tới.' }
      ],
      grammar: {
        title: 'Tương lai tiếp diễn (will be + V-ing) và tương lai hoàn thành (will have + V3)',
        explain: [
          'Tương lai tiếp diễn: will be + V-ing, diễn tả việc SẼ ĐANG diễn ra tại một thời điểm trong tương lai: This time next year, I\'ll be studying in Canada. At 8 p.m. tomorrow, we\'ll be watching the final. Cũng dùng để hỏi lịch sự về kế hoạch của người khác: Will you be using the car tonight?',
          'Tương lai hoàn thành: will have + V3, diễn tả việc SẼ ĐÃ hoàn thành TRƯỚC một mốc trong tương lai, thường đi với by (by 2030, by then, by the time…): By 2030, I\'ll have graduated. By the time you arrive, we\'ll have finished dinner.',
          'Tương lai hoàn thành tiếp diễn (will have been + V-ing) nhấn mạnh khoảng thời gian tính đến một mốc tương lai: By next June, I\'ll have been working here for ten years.',
          'Lưu ý: sau by the time, when, before, after, as soon as dùng HIỆN TẠI đơn, không dùng will: By the time we retire (không nói "will retire"), robots will have taken many jobs. Phủ định: won\'t be + V-ing / won\'t have + V3.'
        ],
        table: [
          ['Thì', 'Cấu trúc', 'Ví dụ'],
          ['Tương lai tiếp diễn', 'will be + V-ing', "This time tomorrow I'll be flying to Tokyo."],
          ['Tương lai hoàn thành', 'will have + V3', "By 2030, she'll have finished her degree."],
          ['TLHT tiếp diễn', 'will have been + V-ing', "By May, I'll have been living here for five years."],
          ['Phủ định', "won't be + V-ing / won't have + V3", "We won't have saved enough by then."]
        ],
        examples: [
          { t: "In ten years' time, I'll be working for myself.", vi: 'Mười năm nữa, tôi sẽ đang làm chủ chính mình.' },
          { t: "By 2050, the city's population will have doubled.", vi: 'Đến năm 2050, dân số thành phố sẽ đã tăng gấp đôi.' },
          { t: "Don't call me at nine. I'll be driving.", vi: 'Đừng gọi tôi lúc chín giờ. Lúc đó tôi đang lái xe.' },
          { t: "By the time I retire, I'll have been teaching for forty years.", vi: 'Đến khi nghỉ hưu, tôi sẽ đã đi dạy được bốn mươi năm.' },
          { t: 'Will you be working from home next week?', vi: 'Tuần sau bạn có làm việc ở nhà không?' }
        ],
        tip: 'Người Việt hay dùng will + V cho mọi câu tương lai: "By 2030 I will graduate" chưa diễn đạt được ý "đến 2030 thì đã tốt nghiệp xong" → "By 2030 I will have graduated". Đừng đặt will sau by the time / when: "By the time I will finish" → "By the time I finish".'
      },
      dialogue: [
        { s: 'Ms. Ha', t: 'So, Duc, where do you see yourself in ten years?', vi: 'Vậy Đức, em hình dung mình mười năm nữa sẽ thế nào?' },
        { s: 'Duc', t: "I'd like to have my own design company. By then, I'll have been working in this field for twelve years.", vi: 'Em muốn có công ty thiết kế riêng. Đến lúc đó, em sẽ đã làm trong ngành này được mười hai năm.' },
        { s: 'Ms. Ha', t: "That's a clear goal. What will you be doing five years from now?", vi: 'Mục tiêu rõ ràng đấy. Năm năm nữa em sẽ đang làm gì?' },
        { s: 'Duc', t: "Hopefully I'll be leading a small team. I'll also have finished my master's degree.", vi: 'Hy vọng là em sẽ đang dẫn dắt một nhóm nhỏ. Em cũng sẽ học xong thạc sĩ.' },
        { s: 'Ms. Ha', t: 'Good. Have you thought about how automation might change your job?', vi: 'Tốt. Em đã nghĩ đến việc tự động hoá có thể thay đổi công việc của em thế nào chưa?' },
        { s: 'Duc', t: 'Yes. AI is transforming design quickly. By the time I start my company, machines will have taken over a lot of simple tasks.', vi: 'Rồi ạ. Trí tuệ nhân tạo đang thay đổi ngành thiết kế rất nhanh. Đến khi em mở công ty, máy móc sẽ đã đảm nhận rất nhiều việc đơn giản.' },
        { s: 'Ms. Ha', t: "So what's your plan?", vi: 'Vậy kế hoạch của em là gì?' },
        { s: 'Duc', t: "I'll focus on creative skills that machines can't easily copy. And I'll be working remotely, so I won't have to commute every day.", vi: 'Em sẽ tập trung vào những kỹ năng sáng tạo mà máy khó bắt chước. Và em sẽ làm việc từ xa, nên không phải đi lại hằng ngày.' },
        { s: 'Ms. Ha', t: 'That sounds like a healthy lifestyle. Just remember: the small milestones matter as much as the big ambition.', vi: 'Nghe như một lối sống lành mạnh đấy. Chỉ cần nhớ: những cột mốc nhỏ cũng quan trọng chẳng kém hoài bão lớn.' },
        { s: 'Duc', t: "I know. Next year, I'll be taking a course in management. That's my first milestone.", vi: 'Em hiểu ạ. Năm sau em sẽ theo một khoá học về quản lý. Đó là cột mốc đầu tiên của em.' }
      ],
      exercises: [
        { type: 'mc', q: 'This time next year, I ___ in Canada.', options: ['will study', 'will be studying', 'will have studied', 'study'], answer: 1,
          explain: 'Việc sẽ đang diễn ra tại một thời điểm tương lai (this time next year) → will be studying.' },
        { type: 'mc', q: 'By 2030, she ___ her degree.', options: ['will finish', 'will be finishing', 'will have finished', 'finishes'], answer: 2,
          explain: 'Việc sẽ đã xong trước mốc tương lai (by 2030) → will have finished.' },
        { type: 'fill', q: 'By the time you get here, we ___ have finished dinner.', answer: ['will', "'ll"], hint: '___ have + V3',
          explain: 'Tương lai hoàn thành: will have + V3.' },
        { type: 'fill', q: "Don't call me at nine. I'll be ___ to work then. (drive)", answer: ['driving'], hint: 'will be + V-ing',
          explain: 'Lúc chín giờ việc lái xe sẽ đang diễn ra → I\'ll be driving.' },
        { type: 'mc', q: "By the time I ___, I'll have worked for forty years.", options: ['retire', 'will retire', 'retired', 'will have retired'], answer: 0,
          explain: 'Sau by the time dùng hiện tại đơn, không dùng will.' },
        { type: 'mc', q: '___ you be using the car tonight? I need to borrow it.', options: ['Do', 'Are', 'Will', 'Have'], answer: 2,
          explain: 'Hỏi lịch sự về kế hoạch của người khác: Will you be + V-ing?' },
        { type: 'fill', q: "By next June, I'll have ___ living here for ten years.", answer: ['been'], hint: 'will have ___ + V-ing',
          explain: 'Tương lai hoàn thành tiếp diễn: will have been + V-ing.' },
        { type: 'mc', q: "We ___ enough money by then, so we can't buy the house next year.", options: ["won't save", "aren't saving", "don't save", "won't have saved"], answer: 3,
          explain: 'Đến mốc tương lai (by then) việc tiết kiệm chưa xong → won\'t have saved.' },
        { type: 'mc', q: 'Câu nào diễn tả việc "sẽ đang diễn ra" tại một thời điểm trong tương lai?', options: ["I'll have finished the report by 5.", "At 5 p.m. tomorrow, I'll be meeting a client.", 'I finished the report at 5.', "I've been working since 5."], answer: 1,
          explain: 'will be + V-ing tại một thời điểm (5 p.m. tomorrow) = sẽ đang làm gì.' },
        { type: 'mc', q: 'When machines and computers do work that people used to do, it is called ___.', options: ['lifestyle', 'population', 'automation', 'generation'], answer: 2,
          explain: 'automation = sự tự động hoá.' },
        { type: 'fill', q: 'He wants to travel the world before he settles ___ and has children.', answer: ['down'], hint: 'ổn định cuộc sống',
          explain: 'settle down = ổn định cuộc sống, lập gia đình.' },
        { type: 'mc', q: 'Working from home is a growing ___ among young people.', options: ['trend', 'milestone', 'goal', 'commute'], answer: 0,
          explain: 'trend = xu hướng.' },
        { type: 'fill', q: 'I ___ two hours a day between my home and the office.', answer: ['commute'], hint: 'đi lại (giữa nhà và nơi làm)',
          explain: 'commute = đi lại hằng ngày giữa nhà và nơi làm việc.' },
        { type: 'order', vi: 'Đến lúc đó, bố mẹ tôi sẽ đã nghỉ hưu.', words: ['will', 'By', 'retired', 'then,', 'have', 'parents', 'my'], answer: 'By then, my parents will have retired' },
        { type: 'order', vi: 'Năm năm nữa bạn sẽ đang làm gì?', words: ['you', 'doing', 'will', 'What', 'be', 'in', 'five', 'years?'], answer: 'What will you be doing in five years?' },
        { type: 'order', vi: 'Trí tuệ nhân tạo sẽ thay đổi hoàn toàn cách chúng ta làm việc.', words: ['transform', 'will', 'the', 'AI', 'way', 'work', 'we'], answer: 'AI will transform the way we work' }
      ],
      reading: {
        title: 'Life in 2045: Three Predictions',
        titleVi: 'Cuộc sống năm 2045: ba dự đoán',
        text: [
          'What will our lives look like twenty years from now? Nobody can know for sure, but here are three predictions that many experts agree on.',
          "First, work will have changed completely. By 2045, automation will have replaced many jobs in factories, banks and shops. At the same time, new jobs that we can't imagine today will have appeared. Millions of people won't be commuting to an office every morning. Instead, they will be working remotely from home, from cafés, or even from small villages in the mountains.",
          "Second, the population will be older. In many countries, including Vietnam, people are living longer and having fewer children. By 2045, a large part of today's workers will have retired, and the younger generation will be supporting more elderly people than ever before. Cities will need more hospitals, parks and services for older residents.",
          'Third, our lifestyle will be greener. If the current trend continues, most people in big cities will be riding electric motorbikes or using public transport, and the use of coal will have declined sharply.',
          'Of course, predictions are often wrong. Twenty years ago, few people imagined that we would eventually do our banking, shopping and studying on a phone. But one thing is certain: the choices we make today will shape the world that our children grow up in.'
        ],
        vi: [
          'Cuộc sống của chúng ta hai mươi năm nữa sẽ ra sao? Không ai biết chắc, nhưng dưới đây là ba dự đoán mà nhiều chuyên gia đồng tình.',
          'Thứ nhất, công việc sẽ đã thay đổi hoàn toàn. Đến năm 2045, tự động hoá sẽ đã thay thế nhiều công việc trong nhà máy, ngân hàng và cửa hàng. Đồng thời, những nghề mới mà hôm nay ta chưa hình dung nổi sẽ đã xuất hiện. Hàng triệu người sẽ không còn ngày ngày đi lại đến văn phòng. Thay vào đó, họ sẽ làm việc từ xa: ở nhà, ở quán cà phê, thậm chí ở những bản làng nhỏ trên núi.',
          'Thứ hai, dân số sẽ già hơn. Ở nhiều nước, trong đó có Việt Nam, người ta sống lâu hơn và sinh ít con hơn. Đến năm 2045, một phần lớn người lao động hiện nay sẽ đã nghỉ hưu, và thế hệ trẻ sẽ phải hỗ trợ nhiều người cao tuổi hơn bao giờ hết. Các thành phố sẽ cần thêm bệnh viện, công viên và dịch vụ cho cư dân lớn tuổi.',
          'Thứ ba, lối sống của chúng ta sẽ xanh hơn. Nếu xu hướng hiện nay tiếp tục, phần lớn người dân ở các thành phố lớn sẽ đi xe máy điện hoặc dùng phương tiện công cộng, và việc sử dụng than đá sẽ đã giảm mạnh.',
          'Tất nhiên, các dự đoán thường sai. Hai mươi năm trước, ít ai nghĩ rằng rốt cuộc chúng ta sẽ giao dịch ngân hàng, mua sắm và học tập trên điện thoại. Nhưng có một điều chắc chắn: những lựa chọn hôm nay sẽ định hình thế giới mà con cái chúng ta lớn lên.'
        ],
        questions: [
          { q: 'Theo dự đoán thứ nhất, đến năm 2045 điều gì sẽ xảy ra?', options: ['Mọi người đều làm việc trong nhà máy', 'Nhiều người sẽ làm việc từ xa thay vì đi lại đến văn phòng', 'Không còn nghề mới nào xuất hiện', 'Ngân hàng sẽ tuyển thêm nhiều nhân viên'], answer: 1,
            explain: '"Millions of people won\'t be commuting to an office… they will be working remotely."' },
          { q: 'Vì sao dân số sẽ già hơn?', options: ['Vì người ta sống lâu hơn và sinh ít con hơn', 'Vì nhiều người trẻ ra nước ngoài', 'Vì có ít bệnh viện hơn', 'Vì tự động hoá'], answer: 0,
            explain: '"People are living longer and having fewer children."' },
          { q: 'Cụm "declined sharply" trong đoạn 4 gần nghĩa nhất với:', options: ['tăng mạnh', 'giữ nguyên', 'giảm mạnh', 'thay đổi chậm'], answer: 2,
            explain: 'decline = giảm; sharply = mạnh, đột ngột.' },
          { q: 'Ý chính của đoạn cuối là gì?', options: ['Mọi dự đoán đều đúng', 'Điện thoại sẽ biến mất', 'Không nên dự đoán tương lai', 'Dù dự đoán có thể sai, lựa chọn hôm nay sẽ định hình tương lai'], answer: 3,
            explain: '"The choices we make today will shape the world that our children grow up in."' }
        ]
      }
    }
  },

  // ───────────────────────── sau B2-6: lập luận, phản biện; điều kiện hỗn hợp, câu hỏi đuôi ─────────────────────────
  {
    after: 'en-b2-6',
    unit: {
      id: 'en-b2-6b',
      icon: '🗣️',
      title: 'Lập luận & phản biện',
      goal: 'Trình bày quan điểm, thừa nhận và phản bác ý kiến khác trong tranh luận; nói về hệ quả hiện tại của quá khứ và kiểm tra sự đồng tình bằng câu hỏi đuôi.',
      vocab: [
        { w: 'argue', ipa: '/ˈɑrɡju/', vi: 'lập luận rằng; tranh cãi', ex: 'Some people argue that homework should be banned.', exVi: 'Một số người lập luận rằng nên bỏ bài tập về nhà.' },
        { w: 'argument', ipa: '/ˈɑrɡjəmənt/', vi: 'lý lẽ; cuộc tranh cãi', ex: "That's a strong argument, but I don't agree.", exVi: 'Đó là một lý lẽ mạnh, nhưng tôi không đồng ý.' },
        { w: 'point of view', ipa: '/ˌpɔɪnt əv ˈvju/', vi: 'quan điểm', ex: 'From my point of view, the plan is too expensive.', exVi: 'Theo quan điểm của tôi, kế hoạch quá tốn kém.' },
        { w: 'approach', ipa: '/əˈproʊtʃ/', vi: 'cách tiếp cận, phương pháp', ex: 'We need a different approach to traffic problems.', exVi: 'Chúng ta cần một cách tiếp cận khác với vấn đề giao thông.' },
        { w: 'significant', ipa: '/sɪɡˈnɪfɪkənt/', vi: 'đáng kể, quan trọng', ex: 'There has been a significant increase in prices.', exVi: 'Giá cả đã tăng đáng kể.' },
        { w: 'convince', ipa: '/kənˈvɪns/', vi: 'thuyết phục', ex: 'She convinced me to change my mind.', exVi: 'Cô ấy đã thuyết phục tôi đổi ý.' },
        { w: 'valid', ipa: '/ˈvælɪd/', vi: 'có cơ sở, hợp lý; có hiệu lực', ex: 'You make a valid point.', exVi: 'Bạn nêu một ý có cơ sở.' },
        { w: 'assume', ipa: '/əˈsum/', vi: 'mặc định, cho là (chưa có bằng chứng)', ex: "Don't assume that everyone agrees with you.", exVi: 'Đừng mặc định rằng ai cũng đồng ý với bạn.' },
        { w: 'debate', ipa: '/dɪˈbeɪt/', vi: 'cuộc tranh luận; tranh luận', ex: 'There was a heated debate about the new law.', exVi: 'Đã có một cuộc tranh luận nảy lửa về luật mới.' },
        { w: 'controversial', ipa: '/ˌkɑntrəˈvɜrʃəl/', vi: 'gây tranh cãi', ex: 'Banning motorbikes is a controversial idea.', exVi: 'Cấm xe máy là một ý tưởng gây tranh cãi.' },
        { w: 'drawback', ipa: '/ˈdrɔˌbæk/', vi: 'mặt hạn chế, điểm bất lợi', ex: 'The main drawback of this plan is the cost.', exVi: 'Hạn chế chính của kế hoạch này là chi phí.' },
        { w: 'justify', ipa: '/ˈdʒʌstəˌfaɪ/', vi: 'biện minh, chứng minh là đúng', ex: 'How can you justify spending so much money?', exVi: 'Làm sao bạn biện minh được cho việc tiêu nhiều tiền như vậy?' },
        { w: 'outweigh', ipa: '/ˌaʊtˈweɪ/', vi: 'lớn hơn, quan trọng hơn (khi cân nhắc)', ex: 'The benefits outweigh the drawbacks.', exVi: 'Lợi ích lớn hơn những hạn chế.' },
        { w: 'take into account', ipa: '/ˌteɪk ˌɪntu əˈkaʊnt/', vi: 'tính đến, xem xét', ex: 'We have to take the cost into account.', exVi: 'Chúng ta phải tính đến chi phí.' },
        { w: 'acknowledge', ipa: '/əkˈnɑlɪdʒ/', vi: 'thừa nhận', ex: 'I acknowledge that the plan has some problems.', exVi: 'Tôi thừa nhận kế hoạch có một số vấn đề.' },
        { w: 'emphasize', ipa: '/ˈɛmfəˌsaɪz/', vi: 'nhấn mạnh', ex: 'I want to emphasize that safety comes first.', exVi: 'Tôi muốn nhấn mạnh rằng an toàn là trên hết.' },
        { w: 'nevertheless', ipa: '/ˌnɛvərðəˈlɛs/', vi: 'tuy nhiên, dù vậy', ex: 'The plan is expensive. Nevertheless, it is necessary.', exVi: 'Kế hoạch tốn kém. Dù vậy, nó là cần thiết.' },
        { w: 'on the other hand', ipa: '/ɑn ði ˈʌðər ˌhænd/', vi: 'mặt khác', ex: 'Cars are convenient. On the other hand, they cause pollution.', exVi: 'Ô tô tiện lợi. Mặt khác, chúng gây ô nhiễm.' },
        { w: 'counterargument', ipa: '/ˈkaʊntərˌɑrɡjəmənt/', vi: 'lập luận phản bác', ex: 'A good essay always answers the main counterargument.', exVi: 'Một bài luận tốt luôn trả lời lập luận phản bác chính.' },
        { w: 'conclude', ipa: '/kənˈklud/', vi: 'kết luận', ex: 'The report concludes that the policy has failed.', exVi: 'Bản báo cáo kết luận rằng chính sách đã thất bại.' }
      ],
      grammar: {
        title: 'Câu điều kiện hỗn hợp và câu hỏi đuôi',
        explain: [
          'Câu điều kiện hỗn hợp kết hợp loại 3 và loại 2 khi hai vế nói về hai thời điểm khác nhau. Phổ biến nhất: điều kiện trái với QUÁ KHỨ → kết quả trái với HIỆN TẠI: If + had + V3, S + would + V. If the city had built a metro twenty years ago, traffic wouldn\'t be so bad now.',
          'Loại ngược lại: điều kiện trái với HIỆN TẠI (một đặc điểm lâu dài) → kết quả trái với QUÁ KHỨ: If + quá khứ đơn / were, S + would have + V3. If I were more confident, I would have spoken at yesterday\'s meeting. If he didn\'t trust everyone, he wouldn\'t have lost his money.',
          'Câu hỏi đuôi dùng để kiểm tra thông tin hoặc tìm sự đồng tình — rất hay gặp khi tranh luận. Câu khẳng định + đuôi phủ định; câu phủ định + đuôi khẳng định; đuôi dùng trợ động từ của câu chính + đại từ: It\'s expensive, isn\'t it? You don\'t agree, do you? They had planned it, hadn\'t they? Đặc biệt: I am → aren\'t I?; Let\'s… → shall we?; câu có never, nobody, hardly → đuôi khẳng định (Nobody came, did they?).',
          'Ngữ điệu: đuôi lên giọng là hỏi thật (chưa chắc); xuống giọng là mong người nghe đồng ý. Mẫu câu lập luận: I\'d argue that… / Admittedly, … Nevertheless, … / On the other hand, … / That may be true, but… / If we take … into account, …'
        ],
        table: [
          ['Loại', 'Cấu trúc', 'Ví dụ'],
          ['Quá khứ → hiện tại', 'If + had V3, would + V', 'If we had invested earlier, we would be richer now.'],
          ['Hiện tại → quá khứ', 'If + V2 / were, would have + V3', 'If she were braver, she would have argued back.'],
          ['Đuôi (câu khẳng định)', "…, trợ động từ + n't + đại từ?", "It's controversial, isn't it?"],
          ['Đuôi (câu phủ định)', '…, trợ động từ + đại từ?', "You haven't decided, have you?"]
        ],
        examples: [
          { t: "If we had protected the forests, there wouldn't be so many floods today.", vi: 'Nếu chúng ta đã bảo vệ rừng, ngày nay đã không có nhiều lũ lụt như vậy.' },
          { t: "If I spoke better English, I would have applied for that job last year.", vi: 'Nếu tiếng Anh của tôi tốt hơn, năm ngoái tôi đã nộp đơn vào vị trí đó.' },
          { t: "You'd agree that safety matters most, wouldn't you?", vi: 'Bạn đồng ý rằng an toàn là quan trọng nhất, đúng không?' },
          { t: "The plan isn't perfect, is it? Nevertheless, it's better than nothing.", vi: 'Kế hoạch không hoàn hảo, phải không? Dù vậy, có còn hơn không.' },
          { t: "Let's look at the evidence, shall we?", vi: 'Chúng ta cùng xem xét bằng chứng nhé?' }
        ],
        tip: 'Người Việt hay dùng một kiểu đuôi cho mọi câu ("…, right?" hoặc "…, isn\'t it?"): "You like coffee, isn\'t it?" là sai → "You like coffee, don\'t you?". Với điều kiện hỗn hợp, hãy xác định thời gian của TỪNG vế trước rồi mới chọn thì; các dấu hiệu như now, today, yesterday, last year rất hữu ích.'
      },
      dialogue: [
        { s: 'Thu', t: "Today's debate question is controversial: should motorbikes be banned from the city center? Minh, what's your view?", vi: 'Câu hỏi tranh luận hôm nay khá gây tranh cãi: có nên cấm xe máy ở trung tâm thành phố không? Minh, quan điểm của bạn thế nào?' },
        { s: 'Minh', t: "I'd argue that a ban is necessary. If the city had invested in public transport years ago, we wouldn't have such terrible traffic now.", vi: 'Tôi cho rằng lệnh cấm là cần thiết. Nếu thành phố đã đầu tư vào giao thông công cộng từ nhiều năm trước, giờ chúng ta đã không bị tắc đường tệ đến vậy.' },
        { s: 'Thu', t: "That may be true, but we can't change the past, can we? Millions of people depend on their motorbikes today.", vi: 'Có thể đúng, nhưng chúng ta đâu thể thay đổi quá khứ, phải không? Hàng triệu người hiện đang phụ thuộc vào xe máy.' },
        { s: 'Minh', t: 'I acknowledge that. Nevertheless, the benefits clearly outweigh the drawbacks. The air would be much cleaner.', vi: 'Tôi thừa nhận điều đó. Dù vậy, lợi ích rõ ràng lớn hơn hạn chế. Không khí sẽ sạch hơn nhiều.' },
        { s: 'Thu', t: "But you're assuming that buses are ready to replace motorbikes. They aren't, are they?", vi: 'Nhưng bạn đang mặc định rằng xe buýt đã sẵn sàng thay thế xe máy. Chưa đâu, đúng không?' },
        { s: 'Minh', t: "Not yet. That's why I'm suggesting a gradual approach, starting with weekends only.", vi: 'Chưa. Vì vậy tôi đề xuất một cách làm từng bước, bắt đầu chỉ vào cuối tuần.' },
        { s: 'Thu', t: "That's a valid point. But we also have to take into account people who work in the center, don't we?", vi: 'Đó là một ý có cơ sở. Nhưng chúng ta cũng phải tính đến những người làm việc ở trung tâm, đúng không?' },
        { s: 'Minh', t: 'Of course. On the other hand, if we do nothing, the problem will only get worse.', vi: 'Tất nhiên. Mặt khác, nếu chúng ta không làm gì, vấn đề sẽ chỉ tệ hơn.' },
        { s: 'Thu', t: "I'm not fully convinced, but I agree that a weekend trial is worth discussing.", vi: 'Tôi chưa hoàn toàn bị thuyết phục, nhưng tôi đồng ý rằng thử nghiệm vào cuối tuần là đáng bàn.' },
        { s: 'Minh', t: 'Great. Then we can conclude that a careful trial is the best first step, can\'t we?', vi: 'Tuyệt. Vậy chúng ta có thể kết luận rằng một đợt thử nghiệm thận trọng là bước đầu tốt nhất, đúng không?' }
      ],
      exercises: [
        { type: 'mc', q: 'If the city had built a metro twenty years ago, traffic ___ so bad now.', options: ["wouldn't be", "wouldn't have been", "won't be", "isn't"], answer: 0,
          explain: 'Điều kiện trái quá khứ (had built… ago) → kết quả trái hiện tại (now): would + V.' },
        { type: 'mc', q: "I'm naturally shy. If I ___ more confident, I would have spoken at yesterday's meeting.", options: ['am', 'were', 'will be', 'would be'], answer: 1,
          explain: 'Tính cách lâu dài trái với hiện tại → If + were; kết quả trong quá khứ → would have spoken.' },
        { type: 'fill', q: "You don't agree with me, ___ you?", answer: ['do'], hint: 'câu phủ định → đuôi khẳng định',
          explain: "Câu chính dùng don't → đuôi khẳng định: do you?" },
        { type: 'fill', q: "It's a controversial idea, ___ it?", answer: ["isn't", 'isn’t'], hint: 'câu khẳng định → đuôi phủ định',
          explain: "It is → đuôi phủ định: isn't it?" },
        { type: 'mc', q: "Let's look at the evidence, ___?", options: ["don't we", "won't we", 'let us', 'shall we'], answer: 3,
          explain: "Câu bắt đầu bằng Let's → đuôi shall we?" },
        { type: 'mc', q: 'I am right about this, ___?', options: ["amn't I", "aren't I", "isn't I", 'am not I'], answer: 1,
          explain: "Trường hợp đặc biệt: I am → aren't I?" },
        { type: 'fill', q: "If she hadn't moved to Hanoi, she ___ be working for this company now.", answer: ["wouldn't", 'would not', 'wouldn’t'], hint: 'kết quả ở hiện tại',
          explain: 'Điều kiện trái quá khứ → kết quả trái hiện tại (now): wouldn\'t + V.' },
        { type: 'mc', q: 'Nobody agreed with him, ___?', options: ['did they', "didn't they", 'did he', "didn't he"], answer: 0,
          explain: 'Nobody mang nghĩa phủ định → đuôi khẳng định; nobody dùng đại từ they: did they?' },
        { type: 'mc', q: 'Câu nào là câu điều kiện hỗn hợp (quá khứ → hiện tại)?', options: ['If I study hard, I will pass.', 'If I were you, I would apologize.', 'If I had saved money, I would have a car now.', 'If I had known, I would have come.'], answer: 2,
          explain: 'If + had V3 (quá khứ) … would + V … now (hiện tại).' },
        { type: 'mc', q: 'The advantages of the plan are much greater than its disadvantages. → The advantages ___ the disadvantages.', options: ['emphasize', 'outweigh', 'assume', 'conclude'], answer: 1,
          explain: 'outweigh = lớn hơn, nặng ký hơn khi cân nhắc.' },
        { type: 'fill', q: "You make a ___ point. I hadn't thought about that.", answer: ['valid'], hint: 'hợp lý, có cơ sở',
          explain: 'a valid point = một ý có cơ sở.' },
        { type: 'mc', q: 'The plan is expensive. ___, it is the only realistic option.', options: ['Nevertheless', 'Because', 'Unless', 'Although'], answer: 0,
          explain: 'Nevertheless (tuy nhiên) đứng đầu câu, nối hai ý tương phản. Although phải nối hai mệnh đề trong cùng một câu.' },
        { type: 'fill', q: 'We have to take the cost into ___ before we decide.', answer: ['account'], hint: 'tính đến',
          explain: 'take something into account = tính đến điều gì.' },
        { type: 'order', vi: 'Kế hoạch này hiệu quả, đúng không?', words: ['plan', "doesn't", 'The', 'it?', 'works,'], answer: "The plan works, doesn't it?" },
        { type: 'order', vi: 'Nếu Nam đã nhận công việc đó, giờ cậu ấy đang sống ở Sydney.', words: ['taken', 'Sydney', 'If', 'would', 'job,', 'had', 'living', 'Nam', 'now', 'be', 'that', 'he', 'in'], answer: 'If Nam had taken that job, he would be living in Sydney now' },
        { type: 'order', vi: 'Tôi cho rằng lợi ích lớn hơn bất kỳ hạn chế nào.', words: ['outweigh', "I'd", 'any', 'that', 'benefits', 'argue', 'drawbacks', 'the'], answer: "I'd argue that the benefits outweigh any drawbacks" }
      ],
      reading: {
        title: 'Should Homework Be Banned?',
        titleVi: 'Có nên bỏ bài tập về nhà?',
        text: [
          'Every year, the debate about homework returns. Some parents argue that primary school children should not have any homework at all, while many teachers believe it is a significant part of learning. Both sides have valid arguments, so it is worth looking at them carefully.',
          'Those who want to ban homework emphasize its drawbacks. Children who spend three hours a night on exercises have little time to play, read for fun or help at home. Many adults say that if they had had more free time as children, they would be more creative today. Homework can also be unfair: children whose parents cannot help them often fall behind.',
          'On the other hand, supporters of homework point out that practice is necessary. Nobody learns to play the piano only in class, do they? Short, regular tasks help students remember what they have learned and build good habits. Admittedly, too much homework is harmful. Nevertheless, it would be wrong to assume that no homework is the answer.',
          "In my opinion, the solution lies in a more balanced approach. Schools should take students' age into account and set limits, for example twenty minutes a day for younger children. Homework should also be meaningful, not just copying. If schools had followed this advice earlier, today's teenagers might feel less stressed. To conclude, the real question is not whether homework should exist, but how much and what kind."
        ],
        vi: [
          'Năm nào cuộc tranh luận về bài tập về nhà cũng quay trở lại. Một số phụ huynh lập luận rằng học sinh tiểu học hoàn toàn không nên có bài tập về nhà, trong khi nhiều giáo viên tin rằng đó là một phần quan trọng của việc học. Cả hai phía đều có lý lẽ có cơ sở, nên đáng để xem xét kỹ.',
          'Những người muốn bỏ bài tập về nhà nhấn mạnh các mặt hạn chế của nó. Trẻ phải làm bài ba tiếng mỗi tối thì còn rất ít thời gian để chơi, đọc sách cho vui hay phụ giúp việc nhà. Nhiều người lớn nói rằng nếu hồi nhỏ họ có nhiều thời gian rảnh hơn, thì giờ đây họ đã sáng tạo hơn. Bài tập về nhà cũng có thể bất công: những đứa trẻ mà bố mẹ không kèm được thường bị tụt lại.',
          'Mặt khác, những người ủng hộ bài tập về nhà chỉ ra rằng luyện tập là cần thiết. Đâu có ai học đàn piano chỉ trên lớp, phải không? Những bài ngắn, đều đặn giúp học sinh nhớ những gì đã học và hình thành thói quen tốt. Phải thừa nhận rằng quá nhiều bài tập là có hại. Dù vậy, sẽ là sai lầm nếu mặc định rằng không có bài tập là giải pháp.',
          'Theo tôi, giải pháp nằm ở một cách tiếp cận cân bằng hơn. Nhà trường nên tính đến độ tuổi của học sinh và đặt giới hạn, chẳng hạn hai mươi phút mỗi ngày cho trẻ nhỏ. Bài tập cũng cần có ý nghĩa, không chỉ là chép lại. Nếu các trường đã làm theo lời khuyên này sớm hơn, thanh thiếu niên ngày nay có lẽ đã bớt căng thẳng. Tóm lại, câu hỏi thật sự không phải là có nên tồn tại bài tập về nhà hay không, mà là bao nhiêu và loại nào.'
        ],
        questions: [
          { q: 'Đoạn 1 cho biết điều gì?', options: ['Bài tập về nhà nên bị cấm hoàn toàn', 'Cả hai phía trong cuộc tranh luận đều có lý lẽ có cơ sở', 'Giáo viên không muốn giao bài tập', 'Phụ huynh luôn đồng ý với giáo viên'], answer: 1,
            explain: '"Both sides have valid arguments."' },
          { q: 'Theo những người muốn bỏ bài tập về nhà, vì sao bài tập có thể bất công?', options: ['Vì trẻ có bố mẹ không kèm được thường bị tụt lại', 'Vì bài tập quá dễ', 'Vì giáo viên chấm sai', 'Vì trẻ không thích chơi'], answer: 0,
            explain: '"Children whose parents cannot help them often fall behind."' },
          { q: 'Ví dụ về việc học đàn piano được dùng để chứng minh điều gì?', options: ['Trẻ em nên học nhạc', 'Lớp học piano quá ngắn', 'Luyện tập ngoài giờ học là cần thiết', 'Bài tập về nhà gây căng thẳng'], answer: 2,
            explain: 'Câu hỏi đuôi "do they?" nhấn mạnh rằng không ai học được chỉ trên lớp, nên cần luyện tập ở nhà.' },
          { q: 'Quan điểm cuối cùng của người viết là gì?', options: ['Nên cấm bài tập về nhà', 'Nên giao thêm nhiều bài tập', 'Không nên tranh luận về chuyện này', 'Nên giữ bài tập nhưng hợp lý về lượng và có ý nghĩa'], answer: 3,
            explain: '"The real question is not whether homework should exist, but how much and what kind."' }
        ]
      }
    }
  }
];
