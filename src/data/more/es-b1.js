// Bài mới chèn vào lộ trình tiếng Tây Ban Nha – cấp B1: b1-1b, b1-3b, b1-4b, b1-5b, b1-6b
export default [
  // ───────────────────────── B1-1b ─────────────────────────
  {
    after: 'es-b1-1',
    unit: {
      id: 'es-b1-1b',
      icon: '🧭',
      title: 'Por & para',
      goal: 'Phân biệt và dùng đúng por và para khi lên kế hoạch chuyến đi, mua vé và gửi quà.',
      vocab: [
        { w: 'el horario', ipa: 'êl ô-RA-ri-ô', vi: 'lịch giờ (tàu xe), giờ giấc', ex: '¿Has mirado el horario de los trenes para Toledo?', exVi: 'Bạn đã xem lịch giờ tàu đi Toledo chưa?' },
        { w: 'la oferta', ipa: 'la ô-PHÊR-ta', vi: 'ưu đãi, khuyến mãi', ex: 'Hay una oferta especial para estudiantes.', exVi: 'Có một ưu đãi đặc biệt dành cho sinh viên.' },
        { w: 'el folleto', ipa: 'êl phô-GIÊ-tô', vi: 'tờ rơi, tờ giới thiệu', ex: 'En la oficina de turismo me dieron un folleto con el mapa de la ciudad.', exVi: 'Ở văn phòng du lịch, người ta đưa tôi một tờ giới thiệu có bản đồ thành phố.' },
        { w: 'la excursión', ipa: 'la êcs-cur-xi-ÔN', vi: 'chuyến tham quan, chuyến dã ngoại (ngắn ngày)', ex: 'Mañana vamos a hacer una excursión a Segovia.', exVi: 'Ngày mai chúng tôi sẽ đi tham quan Segovia.' },
        { w: 'el albergue', ipa: 'êl al-BÊR-ghê', vi: 'nhà nghỉ thanh niên (hostel)', ex: 'Dormimos en un albergue por quince euros la noche.', exVi: 'Chúng tôi ngủ ở nhà nghỉ thanh niên với giá mười lăm euro một đêm.' },
        { w: 'la postal', ipa: 'la pôs-TAL', vi: 'bưu thiếp', ex: 'Esta postal es para mi abuela.', exVi: 'Tấm bưu thiếp này là để gửi cho bà tôi.' },
        { w: 'el correo', ipa: 'êl cô-RRÊ-ô', vi: 'thư từ, bưu điện (Correos); correo electrónico: email', ex: 'Te mando las fotos por correo electrónico.', exVi: 'Mình gửi ảnh cho bạn qua email nhé.' },
        { w: 'el descuento', ipa: 'êl đês-QUÊN-tô', vi: 'sự giảm giá', ex: 'Los estudiantes tienen un descuento del veinte por ciento.', exVi: 'Sinh viên được giảm giá hai mươi phần trăm.' },
        { w: 'el andén', ipa: 'êl an-ĐÊN', vi: 'sân ga, ke ga', ex: 'El tren para Valencia sale del andén cinco.', exVi: 'Chuyến tàu đi Valencia khởi hành từ sân ga số năm.' },
        { w: 'de ida y vuelta', ipa: 'đê I-đa y BUÊL-ta', vi: 'khứ hồi (vé hai chiều)', ex: 'Quisiera un billete de ida y vuelta para Bilbao, por favor.', exVi: 'Cho tôi một vé khứ hồi đi Bilbao.' },
        { w: 'la taquilla', ipa: 'la ta-KI-gia', vi: 'quầy bán vé', ex: 'Compramos las entradas en la taquilla del museo.', exVi: 'Chúng tôi mua vé vào cửa ở quầy bán vé của bảo tàng.' },
        { w: 'el sello', ipa: 'êl XÊ-giô', vi: 'con tem', ex: 'Necesito dos sellos para enviar estas postales.', exVi: 'Tôi cần hai con tem để gửi mấy tấm bưu thiếp này.' },
        { w: 'el sobre', ipa: 'êl XÔ-brê', vi: 'phong bì', ex: 'Mete la carta en el sobre y escribe la dirección.', exVi: 'Cho lá thư vào phong bì rồi viết địa chỉ vào.' },
        { w: 'el viajero / la viajera', ipa: 'êl bi-a-KHÊ-rô / la bi-a-KHÊ-ra', vi: 'hành khách, du khách', ex: 'Los viajeros para Zaragoza salen del andén dos.', exVi: 'Hành khách đi Zaragoza lên tàu ở sân ga số hai.' },
        { w: 'cambiar', ipa: 'cam-bi-AR', vi: 'đổi (vé, tiền, ngày…)', ex: 'Quiero cambiar este billete por otro para el martes.', exVi: 'Tôi muốn đổi vé này lấy một vé khác cho ngày thứ Ba.' },
        { w: 'gratis', ipa: 'GRA-tis', vi: 'miễn phí', ex: 'Los domingos la entrada al museo es gratis.', exVi: 'Chủ nhật vào cửa bảo tàng miễn phí.' },
        { w: 'con antelación', ipa: 'côn an-tê-la-θi-ÔN', vi: 'trước (một khoảng thời gian), từ sớm', ex: 'Compramos los billetes con dos meses de antelación y nos costaron muy poco.', exVi: 'Chúng tôi mua vé trước hai tháng nên giá rất rẻ.' },
        { w: 'incluir', ipa: 'in-CLUIR', vi: 'bao gồm', ex: 'El precio incluye el desayuno.', exVi: 'Giá đã bao gồm bữa sáng.' },
        { w: 'el carné', ipa: 'êl car-NÊ', vi: 'thẻ (sinh viên, căn cước…)', ex: 'Con el carné de estudiante pagas menos.', exVi: 'Có thẻ sinh viên thì bạn trả ít tiền hơn.' },
        { w: 'la salida', ipa: 'la xa-LI-đa', vi: 'giờ khởi hành; lối ra', ex: 'La salida del autobús es a las nueve en punto.', exVi: 'Xe buýt khởi hành lúc chín giờ đúng.' }
      ],
      grammar: {
        title: 'Por và para',
        explain: [
          'Por và para đều có thể dịch là "cho, để, vì" nên người Việt rất hay nhầm. Mẹo dễ nhớ: PARA nhìn về phía trước – đích đến, mục đích, người nhận, hạn chót. POR nhìn về phía sau hoặc xung quanh – nguyên nhân, con đường đi qua, khoảng thời gian, sự trao đổi, phương tiện.',
          'Para dùng cho: mục đích, với para + nguyên mẫu = để (Voy a la taquilla para comprar los billetes); người nhận (Esta postal es para ti); điểm đến (el tren para Sevilla, Salgo para Madrid); hạn chót (Necesito el dinero para el lunes = trước/chậm nhất thứ Hai); ý kiến (Para mí, es caro = Đối với tôi, nó đắt).',
          'Por dùng cho: nguyên nhân = vì, do (No salimos por la lluvia); đi qua, đi khắp (pasear por el centro, viajar por España, pasar por Toledo); khoảng thời gian trong ngày hoặc không chính xác (por la mañana, por la tarde, por la noche); trao đổi, giá tiền (Compré el billete por veinte euros; cambiar una cosa por otra); phương tiện liên lạc (por teléfono, por correo, por internet).',
          'Một số cụm cố định luôn dùng por: gracias por (cảm ơn vì), por favor, por ejemplo, por eso (vì vậy), por ciento (phần trăm), dos veces por semana (hai lần mỗi tuần). Sau gracias por có thể dùng danh từ hoặc nguyên mẫu: Gracias por el regalo. / Gracias por venir.',
          'So sánh: Lo he hecho por ti = Tôi làm vậy VÌ bạn (bạn là lý do). Lo he hecho para ti = Tôi làm cái này CHO bạn (bạn là người nhận). Tương tự: Paseamos por el parque (đi dạo trong, khắp công viên) khác với Vamos para el parque (đang đi về phía công viên).'
        ],
        table: [
          ['', 'Cách dùng', 'Ví dụ'],
          ['para', 'mục đích (để + nguyên mẫu)', 'Voy a la estación para comprar el billete.'],
          ['para', 'người nhận', 'Este regalo es para mi madre.'],
          ['para', 'điểm đến', 'El tren para Sevilla sale a las diez.'],
          ['para', 'hạn chót', 'Necesito el informe para el lunes.'],
          ['para', 'ý kiến (đối với)', 'Para mí, el albergue es suficiente.'],
          ['por', 'nguyên nhân (vì, do)', 'No hicimos la excursión por la lluvia.'],
          ['por', 'đi qua, đi khắp', 'Paseamos por el centro.'],
          ['por', 'thời gian không chính xác', 'Te llamo por la tarde.'],
          ['por', 'trao đổi, giá tiền', 'Compré el billete por veinte euros.'],
          ['por', 'phương tiện', 'Te mando la reserva por correo electrónico.'],
          ['por', 'cảm ơn vì', 'Gracias por tu ayuda.']
        ],
        examples: [
          { t: 'Hemos ido a la agencia de viajes para preguntar el horario.', vi: 'Chúng tôi đã đến đại lý du lịch để hỏi lịch giờ.' },
          { t: 'El tren para Málaga sale del andén tres.', vi: 'Tàu đi Málaga khởi hành từ sân ga số ba.' },
          { t: 'Ayer no salimos por el mal tiempo.', vi: 'Hôm qua chúng tôi không ra ngoài vì thời tiết xấu.' },
          { t: 'Compré dos postales por un euro y las mandé por correo.', vi: 'Tôi mua hai tấm bưu thiếp với giá một euro và gửi chúng qua bưu điện.' },
          { t: 'Muchas gracias por el regalo. ¡Es perfecto para el viaje!', vi: 'Cảm ơn bạn nhiều vì món quà. Nó thật hoàn hảo cho chuyến đi!' }
        ],
        tip: 'Lỗi hay gặp: "Gracias para el regalo" → đúng là "Gracias por el regalo". "Voy a la taquilla por comprar billetes" → để chỉ mục đích phải dùng para: "para comprar". Khi băn khoăn, hãy tự hỏi: mình đang nói về đích đến/mục đích (para) hay lý do/con đường/sự trao đổi (por)? 🌎 Mỹ Latinh: cách dùng por/para giống hệt; chỉ khác từ vựng, ví dụ el boleto thay el billete, và ở nhiều nước la estampilla thay el sello.'
      },
      dialogue: [
        { s: 'Marta', t: 'Diego, ¿has mirado el horario de los trenes para Sevilla?', vi: 'Diego, cậu đã xem lịch giờ tàu đi Sevilla chưa?' },
        { s: 'Diego', t: 'Sí. Hay uno por la mañana, a las ocho, y otro por la tarde.', vi: 'Rồi. Có một chuyến buổi sáng lúc tám giờ và một chuyến buổi chiều.' },
        { s: 'Marta', t: 'Mejor el de la mañana, para llegar pronto y pasear por el centro.', vi: 'Chuyến sáng thì hơn, để đến sớm và đi dạo khắp trung tâm.' },
        { s: 'Diego', t: 'Vale. Además, he visto una oferta: el billete de ida y vuelta por cuarenta euros.', vi: 'Được. Mà tớ còn thấy một ưu đãi: vé khứ hồi chỉ bốn mươi euro.' },
        { s: 'Marta', t: '¡Genial! Para mí, un albergue es suficiente. ¿Hay alguno barato?', vi: 'Tuyệt! Với tớ thì nhà nghỉ thanh niên là đủ rồi. Có chỗ nào rẻ không?' },
        { s: 'Diego', t: 'Sí, hay uno cerca de la catedral. Lo reservo por teléfono esta tarde.', vi: 'Có, có một chỗ gần nhà thờ lớn. Chiều nay tớ gọi điện đặt luôn.' },
        { s: 'Marta', t: 'Perfecto. ¿Y cuándo te pago mi parte?', vi: 'Hoàn hảo. Thế khi nào tớ trả cậu phần của tớ?' },
        { s: 'Diego', t: 'Para el viernes, por favor. Y compra sellos: tu abuela quiere una postal de Sevilla.', vi: 'Trước thứ Sáu nhé. À, mua tem nữa: bà cậu muốn một tấm bưu thiếp từ Sevilla đấy.' },
        { s: 'Marta', t: '¡Es verdad! Muchas gracias por organizarlo todo.', vi: 'Đúng rồi! Cảm ơn cậu nhiều vì đã lo liệu mọi thứ.' }
      ],
      exercises: [
        { type: 'mc', q: 'Voy a la taquilla ___ comprar los billetes.', options: ['por', 'para', 'de'], answer: 1,
          explain: 'Chỉ mục đích (để làm gì) → para + nguyên mẫu: para comprar.' },
        { type: 'mc', q: 'Ayer no hicimos la excursión ___ la lluvia.', options: ['por', 'para', 'en'], answer: 0,
          explain: 'Chỉ nguyên nhân (vì mưa) → por la lluvia.' },
        { type: 'mc', q: 'Chọn câu đúng: "Cảm ơn vì món quà."', options: ['Gracias para el regalo.', 'Gracias en el regalo.', 'Gracias por el regalo.'], answer: 2,
          explain: 'Cảm ơn vì điều gì luôn là gracias por + danh từ/nguyên mẫu.' },
        { type: 'mc', q: 'Necesito el dinero ___ el lunes, porque ese día pago el albergue.', options: ['para', 'por', 'con'], answer: 0,
          explain: 'Hạn chót (chậm nhất là thứ Hai) → para el lunes.' },
        { type: 'mc', q: 'El tren para Valencia sale del ___ número tres.', options: ['folleto', 'andén', 'sello', 'descuento'], answer: 1,
          explain: 'El andén = sân ga, nơi tàu đỗ và khởi hành.' },
        { type: 'mc', q: 'Para enviar una carta necesitas un sobre y un ___.', options: ['albergue', 'horario', 'andén', 'sello'], answer: 3,
          explain: 'Gửi thư cần phong bì (el sobre) và tem (el sello).' },
        { type: 'fill', q: 'Muchas gracias ___ tu ayuda con el viaje.', answer: ['por'], hint: 'cảm ơn vì…',
          explain: 'Gracias por + danh từ: gracias por tu ayuda.' },
        { type: 'fill', q: 'Esta postal es ___ mi abuela.', answer: ['para'], hint: 'người nhận',
          explain: 'Người nhận một món đồ → para: es para mi abuela.' },
        { type: 'fill', q: 'Por la mañana paseamos ___ el casco antiguo.', answer: ['por'], hint: 'đi qua, đi khắp',
          explain: 'Pasear por + nơi chốn = đi dạo khắp/quanh nơi đó.' },
        { type: 'fill', q: 'Te mando las fotos ___ correo electrónico.', answer: ['por'], hint: 'phương tiện',
          explain: 'Phương tiện liên lạc → por: por correo, por teléfono, por internet.' },
        { type: 'fill', q: 'Con un ___ del veinte por ciento, el billete cuesta solo cuarenta euros.', answer: ['descuento'], hint: 'sự giảm giá',
          explain: 'El descuento = sự giảm giá. Un descuento del 20 % = giảm 20%.' },
        { type: 'order', vi: 'Chuyến tàu đi Sevilla khởi hành lúc mười giờ.', words: ['sale', 'Sevilla', 'El', 'diez', 'para', 'las', 'tren', 'a'],
          answer: 'El tren para Sevilla sale a las diez', alt: ['El tren sale para Sevilla a las diez', 'a las diez sale El tren para Sevilla'] },
        { type: 'order', vi: 'Tôi đã mua một vé khứ hồi với giá ba mươi euro.', words: ['vuelta', 'por', 'He', 'billete', 'treinta', 'de', 'comprado', 'y', 'un', 'euros', 'ida'],
          answer: 'He comprado un billete de ida y vuelta por treinta euros', alt: ['He comprado por treinta euros un billete de ida y vuelta', 'por treinta euros He comprado un billete de ida y vuelta'] },
        { type: 'order', vi: 'Tôi đến quầy vé để mua hai vé.', words: ['taquilla', 'comprar', 'Voy', 'dos', 'la', 'para', 'billetes', 'a'],
          answer: 'Voy a la taquilla para comprar dos billetes', alt: ['para comprar dos billetes Voy a la taquilla'] },
        { type: 'order', vi: 'Chúng tôi đã không đi tham quan vì trời mưa.', words: ['lluvia', 'la', 'hicimos', 'por', 'No', 'excursión', 'la'],
          answer: 'No hicimos la excursión por la lluvia', alt: ['por la lluvia No hicimos la excursión'] },
        { type: 'order', vi: 'Đối với tôi, nhà nghỉ thanh niên là đủ rồi.', words: ['albergue', 'es', 'Para', 'suficiente', 'un', 'mí,'],
          answer: 'Para mí, un albergue es suficiente', alt: ['un albergue es suficiente Para mí,'] }
      ],
      reading: {
        title: 'Un fin de semana en Granada',
        titleVi: 'Một cuối tuần ở Granada',
        text: [
          'Linh es una estudiante vietnamita que vive en Madrid. Esta semana ha visto un folleto en la universidad con una oferta especial para estudiantes: un fin de semana en Granada por solo noventa euros. El precio incluye el billete de tren de ida y vuelta, dos noches en un albergue y una excursión a la Alhambra. Para ella, es una oportunidad perfecta.',
          'Ayer fue a la agencia de viajes para pedir más información. Allí le dieron el horario: el tren para Granada sale el viernes por la mañana y vuelve el domingo por la noche. Le pidieron el dinero para el miércoles, así que hoy mismo ha pagado por internet. Además, con su carné de estudiante ha tenido un descuento de diez euros.',
          'En Granada, Linh va a pasear por el barrio del Albaicín y va a probar las tapas. No va a gastar mucho dinero, porque en muchos bares las tapas son gratis con la bebida. También quiere mandar una postal para su familia en Vietnam y ya ha comprado los sellos en Correos. Esta tarde ha escrito en el grupo de clase: «¡Gracias por la idea, chicos!»'
        ],
        vi: [
          'Linh là một sinh viên người Việt sống ở Madrid. Tuần này cô đã thấy một tờ rơi ở trường đại học với ưu đãi đặc biệt dành cho sinh viên: một cuối tuần ở Granada chỉ với chín mươi euro. Giá bao gồm vé tàu khứ hồi, hai đêm ở nhà nghỉ thanh niên và một chuyến tham quan cung điện Alhambra. Đối với cô, đây là một cơ hội tuyệt vời.',
          'Hôm qua cô đã đến đại lý du lịch để hỏi thêm thông tin. Ở đó người ta đưa cho cô lịch giờ: tàu đi Granada khởi hành sáng thứ Sáu và quay về tối Chủ nhật. Họ yêu cầu cô trả tiền chậm nhất là thứ Tư, nên ngay hôm nay cô đã thanh toán qua mạng. Ngoài ra, nhờ có thẻ sinh viên, cô được giảm mười euro.',
          'Ở Granada, Linh sẽ đi dạo khắp khu Albaicín và sẽ nếm thử các món tapas. Cô sẽ không tiêu nhiều tiền, vì ở nhiều quán bar tapas được tặng miễn phí khi gọi đồ uống. Cô cũng muốn gửi một tấm bưu thiếp cho gia đình ở Việt Nam và đã mua tem ở bưu điện rồi. Chiều nay cô đã viết vào nhóm lớp: «Cảm ơn các bạn vì ý tưởng nhé!»'
        ],
        questions: [
          { q: 'Chuyến đi Granada giá bao nhiêu?', options: ['Mười euro', 'Tám mươi euro', 'Chín mươi euro', 'Một trăm euro'], answer: 2,
            explain: '"un fin de semana en Granada por solo noventa euros" – chín mươi euro.' },
          { q: 'Linh phải trả tiền chậm nhất là khi nào?', options: ['Thứ Tư', 'Thứ Sáu', 'Chủ nhật', 'Hôm qua'], answer: 0,
            explain: '"Le pidieron el dinero para el miércoles" – para + ngày chỉ hạn chót: thứ Tư.' },
          { q: 'Vì sao Linh được giảm giá?', options: ['Vì cô đặt vé rất sớm', 'Vì cô trả bằng tiền mặt', 'Vì cô đi cùng các bạn', 'Vì cô có thẻ sinh viên'], answer: 3,
            explain: '"con su carné de estudiante ha tenido un descuento de diez euros".' },
          { q: 'Linh muốn gửi bưu thiếp cho ai?', options: ['Các bạn cùng lớp', 'Gia đình ở Việt Nam', 'Nhân viên đại lý du lịch', 'Giáo viên'], answer: 1,
            explain: '"quiere mandar una postal para su familia en Vietnam".' }
        ]
      }
    }
  },
  // ───────────────────────── B1-3b ─────────────────────────
  {
    after: 'es-b1-3',
    unit: {
      id: 'es-b1-3b',
      icon: '🏃',
      title: 'Thay đổi thói quen',
      goal: 'Nói về việc bắt đầu, ngừng, tiếp tục hay làm lại một thói quen với empezar a, dejar de, volver a, acabar de, seguir + gerundio và llevar + thời gian + gerundio.',
      vocab: [
        { w: 'fumar', ipa: 'phu-MAR', vi: 'hút thuốc', ex: 'Mi tío ha dejado de fumar este año.', exVi: 'Chú tôi đã bỏ thuốc lá năm nay.' },
        { w: 'el hábito', ipa: 'êl A-bi-tô', vi: 'thói quen', ex: 'Comer fruta todos los días es un buen hábito.', exVi: 'Ăn trái cây mỗi ngày là một thói quen tốt.' },
        { w: 'el gimnasio', ipa: 'êl khim-NA-xi-ô', vi: 'phòng tập thể hình (gym)', ex: 'Voy al gimnasio después del trabajo.', exVi: 'Tôi đi tập gym sau giờ làm.' },
        { w: 'la dieta', ipa: 'la đi-Ê-ta', vi: 'chế độ ăn; hacer dieta: ăn kiêng', ex: 'Mi hermana está haciendo dieta para el verano.', exVi: 'Chị tôi đang ăn kiêng để chuẩn bị cho mùa hè.' },
        { w: 'adelgazar', ipa: 'a-đêl-ga-θAR', vi: 'giảm cân, gầy đi', ex: 'He adelgazado tres kilos este mes.', exVi: 'Tháng này tôi đã giảm được ba cân.' },
        { w: 'engordar', ipa: 'ên-gôr-ĐAR', vi: 'tăng cân, béo lên', ex: 'En Navidad siempre engordo un poco.', exVi: 'Dịp Giáng sinh tôi lúc nào cũng béo lên một chút.' },
        { w: 'el ejercicio', ipa: 'êl ê-khêr-θI-θi-ô', vi: 'sự tập thể dục; bài tập', ex: 'Hago ejercicio media hora al día.', exVi: 'Tôi tập thể dục nửa tiếng mỗi ngày.' },
        { w: 'el peso', ipa: 'êl PÊ-xô', vi: 'cân nặng', ex: 'La enfermera me ha preguntado mi peso.', exVi: 'Cô y tá đã hỏi cân nặng của tôi.' },
        { w: 'el estrés', ipa: 'êl ês-TRÊS', vi: 'sự căng thẳng (stress)', ex: 'Con tanto trabajo tengo mucho estrés.', exVi: 'Với chừng ấy việc, tôi rất căng thẳng.' },
        { w: 'la salud', ipa: 'la xa-LUĐ', vi: 'sức khoẻ', ex: 'Fumar es malo para la salud.', exVi: 'Hút thuốc có hại cho sức khoẻ.' },
        { w: 'entrenar', ipa: 'ên-trê-NAR', vi: 'tập luyện', ex: 'El equipo entrena tres veces por semana.', exVi: 'Đội tập luyện ba lần mỗi tuần.' },
        { w: 'el azúcar', ipa: 'êl a-θU-car', vi: 'đường (ăn)', ex: 'Ahora tomo el café sin azúcar.', exVi: 'Bây giờ tôi uống cà phê không đường.' },
        { w: 'la verdura', ipa: 'la bêr-ĐU-ra', vi: 'rau', ex: 'Mis hijos no quieren comer verdura.', exVi: 'Các con tôi không chịu ăn rau.' },
        { w: 'el cigarrillo', ipa: 'êl θi-ga-RRI-giô', vi: 'điếu thuốc lá', ex: 'Antes fumaba diez cigarrillos al día.', exVi: 'Trước đây tôi hút mười điếu thuốc mỗi ngày.' },
        { w: 'estar en forma', ipa: 'ês-TAR ên PHÔR-ma', vi: 'khoẻ khoắn, có thể lực tốt', ex: 'Mi abuelo tiene setenta años y está en forma.', exVi: 'Ông tôi bảy mươi tuổi mà vẫn khoẻ khoắn.' },
        { w: 'la rutina', ipa: 'la rru-TI-na', vi: 'nếp sinh hoạt hằng ngày', ex: 'Correr por la mañana es parte de mi rutina.', exVi: 'Chạy bộ buổi sáng là một phần trong nếp sinh hoạt của tôi.' },
        { w: 'el kilo', ipa: 'êl KI-lô', vi: 'ki-lô-gam, cân', ex: 'He engordado dos kilos en las vacaciones.', exVi: 'Tôi đã tăng hai cân trong kỳ nghỉ.' },
        { w: 'saludable', ipa: 'xa-lu-ĐA-blê', vi: 'lành mạnh, tốt cho sức khoẻ', ex: 'La dieta mediterránea es muy saludable.', exVi: 'Chế độ ăn Địa Trung Hải rất lành mạnh.' },
        { w: 'la comida basura', ipa: 'la cô-MI-đa ba-XU-ra', vi: 'đồ ăn nhanh, đồ ăn vặt không lành mạnh', ex: 'Los jóvenes comen demasiada comida basura.', exVi: 'Giới trẻ ăn quá nhiều đồ ăn nhanh.' },
        { w: 'sedentario / sedentaria', ipa: 'xê-đên-TA-ri-ô / xê-đên-TA-ri-a', vi: 'ít vận động', ex: 'Trabajo sentado todo el día; mi vida es muy sedentaria.', exVi: 'Tôi ngồi làm việc cả ngày; cuộc sống của tôi rất ít vận động.' }
      ],
      grammar: {
        title: 'Perífrasis: empezar a, acabar de, volver a, dejar de, seguir + gerundio, llevar + gerundio',
        explain: [
          'Perífrasis là cụm gồm một động từ được chia + (giới từ) + một động từ ở nguyên mẫu hoặc gerundio. Chúng cho biết hành động đang ở giai đoạn nào: bắt đầu, vừa xong, lặp lại, ngừng hay vẫn tiếp diễn. Chỉ động từ thứ nhất được chia; động từ thứ hai giữ nguyên.',
          'Bắt đầu: empezar a + nguyên mẫu (e → ie: empiezo, empiezas…): He empezado a correr. Ponerse a + nguyên mẫu nhấn mạnh việc bắt tay vào làm ngay hoặc đột ngột (me pongo; indefinido: me puse, se puso): Llegué a casa y me puse a cocinar. Vừa mới: acabar de + nguyên mẫu ở thì hiện tại = "vừa mới": Acabo de entrenar = Tôi vừa tập xong.',
          'Lặp lại: volver a + nguyên mẫu = lại (làm lần nữa), o → ue: vuelvo a, vuelves a…: Ha vuelto a fumar. Ngừng: dejar de + nguyên mẫu = bỏ, thôi không làm nữa: Dejé de fumar hace un año.',
          'Tiếp tục: seguir + gerundio = vẫn (đang) tiếp tục làm (e → i: sigo, sigues, sigue…): Sigo yendo al gimnasio. Phủ định dùng seguir sin + nguyên mẫu = vẫn chưa: Sigo sin hacer ejercicio. Gerundio bạn đã gặp với estar: -ar → -ando, -er/-ir → -iendo; bất quy tắc: ir → yendo, dormir → durmiendo, leer → leyendo.',
          'Thời gian: llevar + khoảng thời gian + gerundio = đã làm gì được bao lâu (và bây giờ vẫn đang làm): Llevo tres meses entrenando. Hỏi: ¿Cuánto tiempo llevas estudiando español? Phủ định: llevar + thời gian + sin + nguyên mẫu: Llevo un año sin fumar = Tôi đã không hút thuốc được một năm.'
        ],
        table: [
          ['Cấu trúc', 'Nghĩa', 'Ví dụ'],
          ['empezar a + nguyên mẫu', 'bắt đầu làm gì', 'He empezado a comer más verdura.'],
          ['ponerse a + nguyên mẫu', 'bắt tay vào làm (ngay, đột ngột)', 'Me puse a estudiar a las diez.'],
          ['acabar de + nguyên mẫu', 'vừa mới làm gì', 'Acabo de volver del gimnasio.'],
          ['volver a + nguyên mẫu', 'lại làm gì (lần nữa)', 'Mi padre ha vuelto a fumar.'],
          ['dejar de + nguyên mẫu', 'bỏ, ngừng làm gì', 'He dejado de tomar azúcar.'],
          ['seguir + gerundio', 'vẫn tiếp tục làm gì', 'Sigo entrenando los sábados.'],
          ['llevar + thời gian + gerundio', 'đã làm gì được (bao lâu)', 'Llevo dos meses haciendo dieta.']
        ],
        examples: [
          { t: 'Este año he empezado a ir al gimnasio dos veces por semana.', vi: 'Năm nay tôi đã bắt đầu đi tập gym hai lần mỗi tuần.' },
          { t: 'Acabo de entrenar y tengo mucha hambre.', vi: 'Tôi vừa tập xong và đói lắm.' },
          { t: 'Mi padre dejó de fumar hace cinco años, pero el mes pasado volvió a fumar.', vi: 'Bố tôi đã bỏ thuốc năm năm trước, nhưng tháng trước ông lại hút.' },
          { t: '¿Sigues comiendo tanta comida basura?', vi: 'Bạn vẫn ăn nhiều đồ ăn nhanh như thế à?' },
          { t: 'Llevo tres meses haciendo dieta y he adelgazado cuatro kilos.', vi: 'Tôi đã ăn kiêng được ba tháng và đã giảm bốn cân.' }
        ],
        tip: 'Người Việt hay quên giới từ: nói "Empiezo correr", "Dejo fumar" là sai → empezar A, dejar DE, volver A, acabar DE: Empiezo a correr, Dejo de fumar. Seguir và llevar đi với gerundio, không đi với nguyên mẫu: "Sigo trabajar" sai → "Sigo trabajando". Acabo de cenar nghĩa là "tôi VỪA ăn tối xong", không phải "tôi ăn xong rồi mới…". 🌎 Mỹ Latinh: ở nhiều nước người ta hay dùng "recién" với nghĩa vừa mới: Recién llegué = Acabo de llegar.'
      },
      dialogue: [
        { s: 'Sara', t: '¡Pablo! Te veo muy bien. ¿Qué has hecho?', vi: 'Pablo! Trông cậu khoẻ quá. Cậu đã làm gì vậy?' },
        { s: 'Pablo', t: 'Gracias. Hace seis meses dejé de fumar y empecé a ir al gimnasio.', vi: 'Cảm ơn. Sáu tháng trước tớ bỏ thuốc lá và bắt đầu đi tập gym.' },
        { s: 'Sara', t: '¡Qué bien! ¿Y sigues yendo todos los días?', vi: 'Hay quá! Thế cậu vẫn đi tập hằng ngày à?' },
        { s: 'Pablo', t: 'Casi. Llevo seis meses entrenando cuatro veces por semana y he adelgazado ocho kilos.', vi: 'Gần như vậy. Tớ đã tập bốn buổi mỗi tuần được sáu tháng rồi và giảm được tám cân.' },
        { s: 'Sara', t: 'Yo quiero cambiar mis hábitos. Con el estrés del trabajo, he vuelto a comer mucha comida basura.', vi: 'Tớ muốn thay đổi thói quen. Vì căng thẳng công việc, tớ lại ăn nhiều đồ ăn nhanh rồi.' },
        { s: 'Pablo', t: 'Tienes que empezar poco a poco. ¿Por qué no vienes conmigo mañana? Mi gimnasio tiene una oferta para nuevos clientes.', vi: 'Cậu phải bắt đầu từ từ. Sao mai không đi với tớ? Phòng tập của tớ đang có ưu đãi cho khách mới.' },
        { s: 'Sara', t: 'Vale, pero no me gusta correr. Siempre empiezo con ganas y lo dejo después de una semana.', vi: 'Được, nhưng tớ không thích chạy. Lần nào tớ cũng bắt đầu rất hăng rồi bỏ sau một tuần.' },
        { s: 'Pablo', t: 'Entonces podemos hacer otro ejercicio. Lo importante es no dejar de moverse.', vi: 'Thế thì mình tập môn khác. Điều quan trọng là đừng ngừng vận động.' },
        { s: 'Sara', t: '¡De acuerdo! Mañana me pongo a entrenar contigo.', vi: 'Đồng ý! Mai tớ bắt tay vào tập với cậu luôn.' }
      ],
      exercises: [
        { type: 'mc', q: 'Mi abuelo ___ fumar hace diez años.', options: ['dejó de', 'dejó a', 'dejó', 'volvió de'], answer: 0,
          explain: 'Bỏ, ngừng làm gì → dejar DE + nguyên mẫu: dejó de fumar.' },
        { type: 'mc', q: 'Llevo dos años ___ en este gimnasio.', options: ['entrenar', 'entrenado', 'entrenando'], answer: 2,
          explain: 'Llevar + thời gian + gerundio: llevo dos años entrenando.' },
        { type: 'mc', q: '"Acabo de cenar." nghĩa là gì?', options: ['Tôi sắp ăn tối.', 'Tôi vừa ăn tối xong.', 'Tôi không ăn tối nữa.', 'Tôi lại ăn tối.'], answer: 1,
          explain: 'Acabar de + nguyên mẫu ở hiện tại = vừa mới làm gì.' },
        { type: 'mc', q: 'Después de las vacaciones, Ana ___ a comer mucho azúcar.', options: ['ha dejado', 'ha seguido', 'ha llevado', 'ha vuelto'], answer: 3,
          explain: 'Chỉ có volver đi với giới từ a + nguyên mẫu: ha vuelto a comer = lại ăn. (Dejar đi với de, seguir và llevar đi với gerundio.)' },
        { type: 'mc', q: 'Como mucha comida basura y no hago ejercicio; por eso he ___ cinco kilos.', options: ['engordado', 'adelgazado', 'entrenado'], answer: 0,
          explain: 'Ăn đồ ăn nhanh, không tập thể dục → tăng cân: he engordado.' },
        { type: 'mc', q: 'Trabajo diez horas al día y tengo mucho ___.', options: ['peso', 'gimnasio', 'estrés', 'kilo'], answer: 2,
          explain: 'Tener estrés = bị căng thẳng.' },
        { type: 'fill', q: 'Este año he empezado ___ comer más verdura.', answer: ['a'], hint: 'empezar + ? + nguyên mẫu',
          explain: 'Empezar a + nguyên mẫu = bắt đầu làm gì.' },
        { type: 'fill', q: '¿Tu hermano ___ fumando? (seguir)', answer: ['sigue'], hint: 'seguir, ngôi él (e → i)',
          explain: 'Seguir đổi gốc e → i: sigo, sigues, sigue… → ¿Sigue fumando? = Anh ấy vẫn hút thuốc à?' },
        { type: 'fill', q: '___ cinco meses haciendo dieta. (yo, llevar)', answer: ['llevo'], hint: 'llevar + thời gian + gerundio',
          explain: 'Llevo cinco meses haciendo dieta = Tôi đã ăn kiêng được năm tháng.' },
        { type: 'fill', q: 'El médico me ha dicho que tengo que dejar ___ tomar tanto azúcar.', answer: ['de'], hint: 'dejar + ? + nguyên mẫu',
          explain: 'Dejar de + nguyên mẫu = bỏ, ngừng làm gì.' },
        { type: 'fill', q: 'Para tener buena ___, hay que dormir bien y hacer ejercicio.', answer: ['salud'], hint: 'sức khoẻ',
          explain: 'La salud = sức khoẻ. Tener buena salud = có sức khoẻ tốt.' },
        { type: 'order', vi: 'Tôi vừa mới từ phòng gym về.', words: ['del', 'Acabo', 'gimnasio', 'de', 'volver'],
          answer: 'Acabo de volver del gimnasio' },
        { type: 'order', vi: 'Bố tôi đã bỏ thuốc lá.', words: ['fumar', 'padre', 'de', 'Mi', 'dejado', 'ha'],
          answer: 'Mi padre ha dejado de fumar' },
        { type: 'order', vi: 'Tôi đã tập luyện được ba tháng rồi.', words: ['entrenando', 'tres', 'Llevo', 'meses'],
          answer: 'Llevo tres meses entrenando', alt: ['Llevo entrenando tres meses'] },
        { type: 'order', vi: 'Bạn vẫn đi tập gym à?', words: ['al', 'yendo', '¿Sigues', 'gimnasio?'],
          answer: '¿Sigues yendo al gimnasio?' },
        { type: 'order', vi: 'Chúng tôi lại ăn theo một chế độ lành mạnh.', words: ['dieta', 'vuelto', 'una', 'Hemos', 'saludable', 'a', 'llevar'],
          answer: 'Hemos vuelto a llevar una dieta saludable' }
      ],
      reading: {
        title: 'Un año para cambiar',
        titleVi: 'Một năm để thay đổi',
        text: [
          'Me llamo Carlos y tengo treinta y cinco años. Hace un año, mi vida era muy sedentaria: trabajaba ocho horas delante del ordenador, comía mucha comida basura y fumaba un paquete de cigarrillos al día. Por la noche no dormía bien por el estrés.',
          'Un día, el médico me dijo: «Tiene que cambiar sus hábitos». Ese mismo mes dejé de fumar. Fue muy difícil y dos veces volví a fumar, pero ahora ya no fumo. También empecé a ir al gimnasio con un compañero de trabajo.',
          'Ahora llevo diez meses sin fumar y sigo entrenando tres veces por semana. He adelgazado seis kilos, como más verdura y tomo menos azúcar. Mi mujer dice que estoy en forma y que estoy de mejor humor.',
          'Todavía no soy perfecto: los fines de semana sigo comiendo alguna pizza. Pero acabo de correr mi primera carrera de diez kilómetros y ya estoy pensando en la próxima. ¡Nunca es tarde para empezar a cuidar la salud!'
        ],
        vi: [
          'Tôi tên là Carlos, ba mươi lăm tuổi. Một năm trước, cuộc sống của tôi rất ít vận động: tôi làm việc tám tiếng trước máy tính, ăn nhiều đồ ăn nhanh và hút một bao thuốc mỗi ngày. Buổi tối tôi ngủ không ngon vì căng thẳng.',
          'Một hôm, bác sĩ nói với tôi: «Anh phải thay đổi thói quen». Ngay trong tháng đó tôi bỏ thuốc. Việc đó rất khó và có hai lần tôi hút lại, nhưng bây giờ tôi không hút nữa. Tôi cũng bắt đầu đi tập gym cùng một đồng nghiệp.',
          'Giờ tôi đã không hút thuốc được mười tháng và vẫn tập ba buổi mỗi tuần. Tôi đã giảm sáu cân, ăn nhiều rau hơn và dùng ít đường hơn. Vợ tôi bảo tôi trông khoẻ khoắn và tâm trạng tốt hơn.',
          'Tôi vẫn chưa hoàn hảo: cuối tuần thỉnh thoảng tôi vẫn ăn pizza. Nhưng tôi vừa chạy cuộc đua mười cây số đầu tiên và đã nghĩ đến cuộc đua tiếp theo. Không bao giờ là quá muộn để bắt đầu chăm sóc sức khoẻ!'
        ],
        questions: [
          { q: 'Một năm trước, Carlos sống như thế nào?', options: ['Rất năng động, chơi nhiều thể thao', 'Ít vận động, ăn nhiều đồ ăn nhanh', 'Làm việc ngoài trời cả ngày', 'Ăn nhiều rau và ngủ ngon'], answer: 1,
            explain: '"mi vida era muy sedentaria… comía mucha comida basura".' },
          { q: 'Sau khi bỏ thuốc, Carlos đã hút lại mấy lần?', options: ['Không lần nào', 'Một lần', 'Ba lần', 'Hai lần'], answer: 3,
            explain: '"dos veces volví a fumar" – volver a fumar = hút lại, hai lần.' },
          { q: 'Bây giờ Carlos tập luyện bao nhiêu buổi mỗi tuần?', options: ['Ba buổi', 'Hai buổi', 'Bốn buổi', 'Mỗi ngày'], answer: 0,
            explain: '"sigo entrenando tres veces por semana".' },
          { q: 'Carlos vừa mới làm gì?', options: ['Mua một chiếc xe đạp', 'Bỏ hẳn pizza', 'Chạy cuộc đua 10 km đầu tiên', 'Đi khám bác sĩ'], answer: 2,
            explain: '"acabo de correr mi primera carrera de diez kilómetros" – acabar de = vừa mới.' }
        ]
      }
    }
  },
  // ───────────────────────── B1-4b ─────────────────────────
  {
    after: 'es-b1-4',
    unit: {
      id: 'es-b1-4b',
      icon: '🙈',
      title: 'Chuyện rủi ro',
      goal: 'Kể về một ngày xui xẻo và nói việc gì đã xảy ra trước một việc khác trong quá khứ với pretérito pluscuamperfecto.',
      vocab: [
        { w: 'perder', ipa: 'pêr-ĐÊR', vi: 'đánh mất; lỡ (tàu, xe)', ex: 'Ayer perdí el autobús y llegué tarde a clase.', exVi: 'Hôm qua tôi lỡ xe buýt và đến lớp muộn.' },
        { w: 'el despertador', ipa: 'êl đês-pêr-ta-ĐÔR', vi: 'đồng hồ báo thức', ex: 'No oí el despertador y me levanté a las nueve.', exVi: 'Tôi không nghe thấy chuông báo thức và dậy lúc chín giờ.' },
        { w: 'darse cuenta de', ipa: 'ĐAR-xê QUÊN-ta đê', vi: 'nhận ra', ex: 'En el tren me di cuenta de que no tenía las llaves.', exVi: 'Trên tàu tôi mới nhận ra là mình không mang chìa khoá.' },
        { w: 'la mala suerte', ipa: 'la MA-la XUÊR-tê', vi: 'sự xui xẻo', ex: '¡Qué mala suerte! Ha empezado a llover y no tengo paraguas.', exVi: 'Xui thật! Trời bắt đầu mưa mà tôi không có ô.' },
        { w: 'quedarse dormido / dormida', ipa: 'kê-ĐAR-xê đôr-MI-đô / đôr-MI-đa', vi: 'ngủ quên', ex: 'Llegué tarde porque me había quedado dormido.', exVi: 'Tôi đến muộn vì đã ngủ quên.' },
        { w: 'robar', ipa: 'rrô-BAR', vi: 'lấy trộm, cướp', ex: 'Me robaron el móvil en el metro.', exVi: 'Tôi bị lấy trộm điện thoại trên tàu điện ngầm.' },
        { w: 'la comisaría', ipa: 'la cô-mi-xa-RI-a', vi: 'đồn cảnh sát', ex: 'Fuimos a la comisaría para denunciar el robo.', exVi: 'Chúng tôi đến đồn cảnh sát để trình báo vụ trộm.' },
        { w: 'denunciar', ipa: 'đê-nun-θi-AR', vi: 'trình báo (với cảnh sát), tố cáo', ex: 'Tienes que denunciar el robo a la policía.', exVi: 'Bạn phải trình báo vụ trộm với cảnh sát.' },
        { w: 'el desastre', ipa: 'êl đê-XAS-trê', vi: 'thảm hoạ, chuyện tồi tệ', ex: 'El viaje fue un desastre: llovió todos los días.', exVi: 'Chuyến đi đúng là thảm hoạ: ngày nào cũng mưa.' },
        { w: 'el ladrón / la ladrona', ipa: 'êl la-ĐRÔN / la la-ĐRÔ-na', vi: 'kẻ trộm', ex: 'Cuando llegó la policía, el ladrón ya había escapado.', exVi: 'Khi cảnh sát đến thì tên trộm đã trốn thoát rồi.' },
        { w: 'el carterista / la carterista', ipa: 'êl car-tê-RIS-ta / la car-tê-RIS-ta', vi: 'kẻ móc túi', ex: 'Al bajar del metro, me di cuenta de que un carterista me había robado la cartera.', exVi: 'Lúc xuống tàu điện ngầm, tôi mới nhận ra một tên móc túi đã móc mất ví của tôi.' },
        { w: 'la policía', ipa: 'la pô-li-θI-a', vi: 'cảnh sát (lực lượng); nữ cảnh sát', ex: 'Llamé a la policía enseguida.', exVi: 'Tôi gọi cảnh sát ngay lập tức.' },
        { w: 'la documentación', ipa: 'la đô-cu-mên-ta-θi-ÔN', vi: 'giấy tờ tuỳ thân', ex: 'En el bolso llevaba toda la documentación.', exVi: 'Trong túi tôi để toàn bộ giấy tờ tuỳ thân.' },
        { w: 'el robo', ipa: 'êl RRÔ-bô', vi: 'vụ trộm, vụ cướp', ex: 'El robo ocurrió a las cinco de la tarde, en la estación.', exVi: 'Vụ trộm xảy ra lúc năm giờ chiều, ở nhà ga.' },
        { w: 'escapar', ipa: 'ês-ca-PAR', vi: 'trốn thoát, chạy trốn', ex: 'El perro escapó del parque y no lo encontramos hasta la noche.', exVi: 'Con chó chạy trốn khỏi công viên và mãi đến tối chúng tôi mới tìm thấy nó.' },
        { w: 'el susto', ipa: 'êl XUS-tô', vi: 'phen hú vía, sự giật mình', ex: '¡Qué susto! Pensaba que había perdido el pasaporte.', exVi: 'Hú hồn! Tôi cứ tưởng mình đã làm mất hộ chiếu.' },
        { w: 'menos mal', ipa: 'MÊ-nôs mal', vi: 'may mà, may quá', ex: 'Menos mal que llevaba dinero en el bolsillo.', exVi: 'May mà tôi có mang tiền trong túi quần.' },
        { w: 'la batería', ipa: 'la ba-tê-RI-a', vi: 'pin (điện thoại, máy)', ex: 'Mi móvil se quedó sin batería y no pude llamar.', exVi: 'Điện thoại tôi hết pin nên tôi không gọi được.' },
        { w: 'el accidente', ipa: 'êl ac-θi-ĐÊN-tê', vi: 'tai nạn', ex: 'Hubo un accidente en la autopista y llegamos tarde.', exVi: 'Có một vụ tai nạn trên đường cao tốc nên chúng tôi đến muộn.' },
        { w: 'la multa', ipa: 'la MUL-ta', vi: 'tiền phạt, giấy phạt', ex: 'Me pusieron una multa porque había aparcado mal.', exVi: 'Tôi bị phạt vì đã đỗ xe sai chỗ.' }
      ],
      grammar: {
        title: 'Pretérito pluscuamperfecto: había + participio',
        explain: [
          'Pretérito pluscuamperfecto dùng để nói về một hành động đã xảy ra TRƯỚC một hành động khác cũng ở trong quá khứ – có thể gọi là "quá khứ của quá khứ". Trong tiếng Việt ta thường nói "đã… rồi": Cuando llegué a la estación, el tren ya había salido = Khi tôi đến ga thì tàu đã chạy rồi (tàu chạy trước, tôi đến sau).',
          'Cách tạo: động từ haber ở thì imperfecto (había, habías, había, habíamos, habíais, habían) + participio. Participio giống hệt pretérito perfecto: -ar → -ado, -er/-ir → -ido; bất quy tắc: hecho, visto, puesto, roto, vuelto, dicho, escrito, abierto. Đại từ đứng trước había: Me había quedado dormido. Không tách había và participio: ya đứng trước – ya había salido.',
          'Pluscuamperfecto thường đi cùng indefinido (sự kiện chính) và imperfecto (bối cảnh). Dấu hiệu hay gặp: ya (rồi), todavía no (vẫn chưa), nunca… antes (trước đó chưa bao giờ). Ví dụ: Cuando llegó la policía, el ladrón todavía no había escapado. / Nunca había estado en una comisaría antes.',
          'Nó còn hay dùng để giải thích nguyên nhân của một sự việc: Llegué tarde porque me había quedado dormida (ngủ quên xảy ra trước việc đến muộn), hoặc sau darse cuenta de que…: Me di cuenta de que me habían robado el móvil.',
          'So sánh: Cuando llegué, el tren salió = Tôi vừa đến thì tàu chạy (hai việc nối tiếp nhau). Cuando llegué, el tren ya había salido = Lúc tôi đến, tàu đã đi mất rồi.'
        ],
        table: [
          ['Ngôi', 'haber (imperfecto)', 'Ví dụ'],
          ['yo', 'había', 'Yo había perdido las llaves.'],
          ['tú', 'habías', '¿Ya habías salido de casa?'],
          ['él / ella / usted', 'había', 'El tren ya había salido.'],
          ['nosotros / nosotras', 'habíamos', 'Nunca habíamos visto el mar.'],
          ['vosotros / vosotras', 'habíais', 'Todavía no habíais vuelto.'],
          ['ellos / ellas / ustedes', 'habían', 'Me habían robado el bolso.']
        ],
        examples: [
          { t: 'Cuando llegué a la estación, el tren ya había salido.', vi: 'Khi tôi đến ga thì tàu đã chạy rồi.' },
          { t: 'Llegué tarde al trabajo porque me había quedado dormida.', vi: 'Tôi đi làm muộn vì đã ngủ quên.' },
          { t: 'En la calle me di cuenta de que me habían robado el móvil.', vi: 'Ra đến đường tôi mới nhận ra mình đã bị lấy trộm điện thoại.' },
          { t: 'Nunca había estado en una comisaría antes.', vi: 'Trước đó tôi chưa bao giờ vào đồn cảnh sát.' },
          { t: 'Cuando volvimos al aparcamiento, todavía no habían arreglado el coche.', vi: 'Khi chúng tôi quay lại bãi đỗ xe, người ta vẫn chưa sửa xong xe.' }
        ],
        tip: 'Tiếng Việt không chia thì nên người Việt hay dùng indefinido cho cả hai việc: "Cuando llegué, el tren ya salió" là sai khi muốn nói tàu đã chạy trước → phải nói "ya había salido". Đừng nhầm "he perdido" (perfecto, còn liên quan đến hiện tại: hôm nay, tuần này) với "había perdido" (đã mất trước một mốc quá khứ khác). 🌎 Mỹ Latinh: ngữ pháp dùng giống hệt; chỉ khác từ: el celular thay el móvil, la billetera thay la cartera, tomar thay coger (tomar el autobús).'
      },
      dialogue: [
        { s: 'Elena', t: 'Raúl, ¿qué te ha pasado? Tienes mala cara.', vi: 'Raúl, cậu bị sao thế? Trông mặt cậu tệ quá.' },
        { s: 'Raúl', t: '¡Ayer fue un desastre! Me quedé dormido porque no había puesto el despertador.', vi: 'Hôm qua đúng là thảm hoạ! Tớ ngủ quên vì đã không đặt báo thức.' },
        { s: 'Elena', t: '¡Qué mala suerte! ¿Y llegaste tarde al aeropuerto?', vi: 'Xui thế! Rồi cậu đến sân bay muộn à?' },
        { s: 'Raúl', t: 'Sí. Cuando llegué, el avión ya había salido. Tuve que comprar otro billete.', vi: 'Ừ. Lúc tớ đến thì máy bay đã cất cánh rồi. Tớ phải mua vé khác.' },
        { s: 'Elena', t: '¡Uf! ¿Y luego?', vi: 'Trời! Rồi sao nữa?' },
        { s: 'Raúl', t: 'Mientras esperaba el otro vuelo, me di cuenta de que alguien me había robado la mochila con la documentación.', vi: 'Trong lúc chờ chuyến bay khác, tớ nhận ra có người đã lấy trộm ba lô có giấy tờ của tớ.' },
        { s: 'Elena', t: '¡No me digas! ¿Y qué hiciste?', vi: 'Không thể nào! Rồi cậu làm gì?' },
        { s: 'Raúl', t: 'Fui a la comisaría para denunciar el robo. Nunca había estado en una comisaría antes.', vi: 'Tớ đến đồn cảnh sát để trình báo vụ trộm. Trước đó tớ chưa bao giờ vào đồn cảnh sát.' },
        { s: 'Elena', t: 'Bueno, menos mal que tú estás bien.', vi: 'Thôi, may mà cậu không sao.' },
        { s: 'Raúl', t: 'Sí… ¡Y por la noche me llamó un policía: habían encontrado mi mochila en un banco!', vi: 'Ừ… Mà tối đó một anh cảnh sát gọi cho tớ: họ đã tìm thấy ba lô của tớ trên một băng ghế!' }
      ],
      exercises: [
        { type: 'mc', q: 'Cuando llegamos al cine, la película ya ___.', options: ['había empezado', 'empezó', 'ha empezado'], answer: 0,
          explain: 'Phim bắt đầu TRƯỚC khi chúng tôi đến → pluscuamperfecto: ya había empezado.' },
        { type: 'mc', q: 'Aquel día fui a una comisaría por primera vez: yo nunca ___ en una antes.', options: ['habías estado', 'habían estado', 'habíamos estado', 'había estado'], answer: 3,
          explain: 'Chủ ngữ yo → había + participio: había estado.' },
        { type: 'mc', q: 'Llegué tarde porque me ___ dormido.', options: ['había quedado', 'habías quedado', 'habíamos quedado'], answer: 0,
          explain: 'Chủ ngữ yo (me) → me había quedado dormido. Ngủ quên xảy ra trước việc đến muộn.' },
        { type: 'mc', q: 'No oí el ___ y me levanté a las diez.', options: ['ladrón', 'despertador', 'desastre', 'susto'], answer: 1,
          explain: 'El despertador = đồng hồ báo thức.' },
        { type: 'mc', q: 'Me robaron el bolso y fui a la ___ para denunciarlo.', options: ['andén', 'taquilla', 'comisaría', 'multa'], answer: 2,
          explain: 'Trình báo vụ trộm thì đến la comisaría (đồn cảnh sát).' },
        { type: 'mc', q: 'Chọn câu đúng: "Khi tôi đến thì họ đã ăn xong rồi."', options: ['Cuando llegué, ya comieron.', 'Cuando llegaba, ya han comido.', 'Cuando llegué, ya habían comido.'], answer: 2,
          explain: 'Việc ăn xảy ra trước việc tôi đến → ya habían comido (pluscuamperfecto) + llegué (indefinido).' },
        { type: 'fill', q: 'Cuando llegué a la estación, el tren ya ___ salido.', answer: ['había'], hint: 'haber ở imperfecto, ngôi él',
          explain: 'El tren (ngôi él) → había salido.' },
        { type: 'fill', q: 'Mis amigos ya ___ visto la película, así que no vinieron al cine. (haber)', answer: ['habían'], hint: 'ngôi ellos',
          explain: 'Mis amigos = ellos → habían visto.' },
        { type: 'fill', q: 'Cuando entré en casa, vi que alguien había ___ la ventana. (romper)', answer: ['roto'], hint: 'participio bất quy tắc',
          explain: 'Romper có participio bất quy tắc: roto (không phải "rompido").' },
        { type: 'fill', q: 'Cuando llegué a casa, me di ___ de que no tenía las llaves.', answer: ['cuenta'], hint: 'darse … de = nhận ra',
          explain: 'Darse cuenta de (que) = nhận ra: me di cuenta de que…' },
        { type: 'fill', q: '¡Qué mala ___! Hoy he perdido el autobús dos veces.', answer: ['suerte'], hint: 'sự xui xẻo',
          explain: '¡Qué mala suerte! = Xui thật!' },
        { type: 'order', vi: 'Tôi ngủ quên vì đã không đặt báo thức.', words: ['el', 'porque', 'Me', 'había', 'dormido', 'despertador', 'no', 'quedé', 'puesto'],
          answer: 'Me quedé dormido porque no había puesto el despertador' },
        { type: 'order', vi: 'Khi cảnh sát đến, tên trộm đã trốn thoát rồi.', words: ['ya', 'policía,', 'ladrón', 'Cuando', 'había', 'llegó', 'el', 'la', 'escapado'],
          answer: 'Cuando llegó la policía, el ladrón ya había escapado', alt: ['Cuando llegó la policía, ya había escapado el ladrón', 'el ladrón ya había escapado Cuando llegó la policía,'] },
        { type: 'order', vi: 'Trước đó chúng tôi chưa bao giờ nhìn thấy biển.', words: ['mar', 'habíamos', 'antes', 'Nunca', 'el', 'visto'],
          answer: 'Nunca habíamos visto el mar antes', alt: ['Nunca antes habíamos visto el mar', 'antes Nunca habíamos visto el mar'] },
        { type: 'order', vi: 'Tôi nhận ra là mình đã bị lấy trộm điện thoại.', words: ['robado', 'cuenta', 'Me', 'que', 'móvil', 'di', 'habían', 'de', 'el', 'me'],
          answer: 'Me di cuenta de que me habían robado el móvil' },
        { type: 'order', vi: 'Tôi đã đến đồn cảnh sát để trình báo vụ trộm.', words: ['para', 'comisaría', 'robo', 'Fui', 'el', 'a', 'denunciar', 'la'],
          answer: 'Fui a la comisaría para denunciar el robo', alt: ['para denunciar el robo Fui a la comisaría'] }
      ],
      reading: {
        title: 'Un viaje desastroso',
        titleVi: 'Một chuyến đi thảm hoạ',
        text: [
          'El verano pasado, Marta y su novio Andrés fueron a Lisboa para pasar un fin de semana romántico. Lo habían organizado todo con mucho cuidado: habían reservado un hotel en el centro y habían comprado los billetes de avión dos meses antes. Pero el viaje fue un desastre desde el principio.',
          'El viernes, Andrés se quedó dormido porque la noche anterior no había puesto el despertador. Cuando llegaron al aeropuerto, ya habían cerrado la puerta de embarque y perdieron el avión. Tuvieron que comprar otros billetes, mucho más caros, para el vuelo de la tarde.',
          'En Lisboa, mientras paseaban por un mercado, Marta se dio cuenta de que alguien le había robado el bolso, ¡con el móvil y toda la documentación dentro! Fueron a la comisaría para denunciar el robo. Marta nunca había estado en una comisaría antes y estaba muy nerviosa.',
          'Por suerte, la historia terminó bien. Al día siguiente, la policía los llamó: un hombre había encontrado el bolso en la calle y lo había llevado a la comisaría. Desde entonces, Marta y Andrés siempre se ríen de su «viaje de la mala suerte».'
        ],
        vi: [
          'Mùa hè năm ngoái, Marta và bạn trai Andrés đến Lisboa để có một cuối tuần lãng mạn. Họ đã chuẩn bị mọi thứ rất cẩn thận: đã đặt một khách sạn ở trung tâm và đã mua vé máy bay từ hai tháng trước. Nhưng chuyến đi là một thảm hoạ ngay từ đầu.',
          'Hôm thứ Sáu, Andrés ngủ quên vì tối hôm trước anh đã không đặt báo thức. Khi họ đến sân bay thì người ta đã đóng cửa lên máy bay và họ lỡ chuyến. Họ phải mua vé khác, đắt hơn nhiều, cho chuyến bay buổi chiều.',
          'Ở Lisboa, trong lúc đang đi dạo trong một khu chợ, Marta nhận ra có người đã lấy trộm túi xách của cô, trong đó có điện thoại và toàn bộ giấy tờ! Họ đến đồn cảnh sát để trình báo vụ trộm. Trước đó Marta chưa bao giờ vào đồn cảnh sát nên cô rất lo lắng.',
          'May thay, câu chuyện kết thúc có hậu. Ngày hôm sau, cảnh sát gọi cho họ: một người đàn ông đã tìm thấy chiếc túi ngoài đường và đã mang nó đến đồn. Từ đó, Marta và Andrés lúc nào cũng cười khi nhắc đến «chuyến đi xui xẻo» của mình.'
        ],
        questions: [
          { q: 'Vì sao Andrés ngủ quên?', options: ['Vì anh ấy làm việc đến khuya', 'Vì đồng hồ báo thức bị hỏng', 'Vì anh ấy bị ốm', 'Vì tối hôm trước anh ấy không đặt báo thức'], answer: 3,
            explain: '"se quedó dormido porque la noche anterior no había puesto el despertador".' },
          { q: 'Chuyện gì đã xảy ra khi họ đến sân bay?', options: ['Cửa lên máy bay đã đóng', 'Chuyến bay bị huỷ', 'Họ quên hộ chiếu', 'Máy bay chưa đến'], answer: 0,
            explain: '"Cuando llegaron al aeropuerto, ya habían cerrado la puerta de embarque".' },
          { q: 'Marta bị mất túi ở đâu?', options: ['Ở khách sạn', 'Ở sân bay', 'Ở một khu chợ', 'Trên máy bay'], answer: 2,
            explain: '"mientras paseaban por un mercado, Marta se dio cuenta de que alguien le había robado el bolso".' },
          { q: 'Ai đã tìm thấy chiếc túi?', options: ['Andrés', 'Một người đàn ông', 'Nhân viên khách sạn', 'Chính Marta'], answer: 1,
            explain: '"un hombre había encontrado el bolso en la calle".' }
        ]
      }
    }
  },

  // ───────────────────────── B1-5b ─────────────────────────
  {
    after: 'es-b1-5',
    unit: {
      id: 'es-b1-5b',
      icon: '🙏',
      title: 'Lời khuyên & phép lịch sự',
      goal: 'Nhờ vả lịch sự, nói mong muốn và đưa ra lời khuyên khi sống chung bằng condicional simple (podrías, me gustaría, deberías, yo que tú…).',
      vocab: [
        { w: 'el consejo', ipa: 'êl côn-XÊ-khô', vi: 'lời khuyên', ex: 'Te voy a dar un consejo: deberías dormir más.', exVi: 'Mình cho bạn một lời khuyên: bạn nên ngủ nhiều hơn.' },
        { w: 'el compañero de piso / la compañera de piso', ipa: 'êl côm-pa-NHÊ-rô đê PI-xô / la côm-pa-NHÊ-ra đê PI-xô', vi: 'bạn ở chung căn hộ', ex: 'Mi compañero de piso nunca friega los platos.', exVi: 'Bạn ở chung của tôi chẳng bao giờ rửa bát.' },
        { w: 'la convivencia', ipa: 'la côn-bi-BÊN-θi-a', vi: 'sự sống chung', ex: 'La convivencia con amigos no siempre es fácil.', exVi: 'Sống chung với bạn bè không phải lúc nào cũng dễ.' },
        { w: 'quejarse', ipa: 'kê-KHAR-xê', vi: 'phàn nàn, than phiền', ex: 'La vecina del tercero se queja del ruido todas las noches.', exVi: 'Bà hàng xóm tầng ba đêm nào cũng phàn nàn về tiếng ồn.' },
        { w: 'compartir', ipa: 'côm-par-TIR', vi: 'dùng chung, chia sẻ', ex: 'Compartimos el baño y la cocina.', exVi: 'Chúng tôi dùng chung phòng tắm và bếp.' },
        { w: 'la limpieza', ipa: 'la lim-pi-Ê-θa', vi: 'việc dọn dẹp, vệ sinh', ex: 'Los sábados hacemos la limpieza de la casa.', exVi: 'Thứ Bảy chúng tôi dọn dẹp nhà cửa.' },
        { w: 'el favor', ipa: 'êl pha-BÔR', vi: 'việc nhờ, ân huệ', ex: '¿Me podrías hacer un favor? Mañana no estoy en casa.', exVi: 'Bạn giúp mình một việc được không? Mai mình không có nhà.' },
        { w: 'sugerir', ipa: 'xu-khê-RIR', vi: 'gợi ý, đề nghị', ex: 'Te sugiero hablar con él directamente.', exVi: 'Mình gợi ý bạn nói chuyện thẳng với anh ấy.' },
        { w: 'educado / educada', ipa: 'ê-đu-CA-đô / ê-đu-CA-đa', vi: 'lịch sự, lễ phép', ex: 'Tu vecino es muy educado: siempre saluda.', exVi: 'Hàng xóm của bạn rất lịch sự: lúc nào cũng chào hỏi.' },
        { w: 'el turno', ipa: 'êl TUR-nô', vi: 'lượt, phiên', ex: 'Esta semana es tu turno de limpiar el baño.', exVi: 'Tuần này đến lượt bạn dọn phòng tắm.' },
        { w: 'importar', ipa: 'im-pôr-TAR', vi: 'làm phiền (ai); quan trọng (với ai)', ex: '¿Te importaría bajar un poco la música?', exVi: 'Bạn có phiền vặn nhỏ nhạc một chút không?' },
        { w: 'la basura', ipa: 'la ba-XU-ra', vi: 'rác', ex: '¿Podrías sacar la basura esta noche?', exVi: 'Tối nay bạn đi đổ rác được không?' },
        { w: 'fregar', ipa: 'phrê-GAR', vi: 'rửa (bát đĩa)', ex: 'Yo cocino y tú friegas los platos, ¿vale?', exVi: 'Mình nấu còn bạn rửa bát nhé?' },
        { w: 'aguantar', ipa: 'a-goan-TAR', vi: 'chịu đựng, chịu nổi', ex: 'No aguanto más la música del vecino. ¿Qué harías tú?', exVi: 'Tôi không chịu nổi tiếng nhạc của hàng xóm nữa. Bạn sẽ làm gì?' },
        { w: 'la comunidad de vecinos', ipa: 'la cô-mu-ni-ĐAĐ đê bê-θI-nôs', vi: 'hội cư dân (toà nhà)', ex: 'La comunidad de vecinos tiene una reunión el lunes.', exVi: 'Hội cư dân toà nhà có cuộc họp vào thứ Hai.' },
        { w: 'repartir', ipa: 'rrê-par-TIR', vi: 'chia, phân chia', ex: 'Deberíamos repartir el trabajo entre los tres.', exVi: 'Chúng ta nên chia việc cho cả ba người.' },
        { w: 'las tareas de la casa', ipa: 'las ta-RÊ-as đê la CA-xa', vi: 'việc nhà', ex: 'Preferiría hacer todas las tareas de la casa el sábado.', exVi: 'Tôi muốn làm hết việc nhà vào thứ Bảy hơn.' },
        { w: 'la molestia', ipa: 'la mô-LÊS-ti-a', vi: 'sự phiền hà', ex: 'Perdona la molestia, ¿podrías ayudarme un momento?', exVi: 'Xin lỗi đã làm phiền, bạn giúp mình một lát được không?' },
        { w: 'la norma', ipa: 'la NÔR-ma', vi: 'quy định, nội quy', ex: 'En este edificio hay una norma: nada de ruido después de las diez.', exVi: 'Toà nhà này có một quy định: không làm ồn sau mười giờ tối.' },
        { w: 'hacer caso', ipa: 'a-θÊR CA-xô', vi: 'nghe theo, để ý đến (lời ai)', ex: 'Le di un consejo, pero no me hizo caso.', exVi: 'Tôi đã khuyên anh ấy, nhưng anh ấy không nghe.' }
      ],
      grammar: {
        title: 'Condicional simple: nhờ vả lịch sự, mong muốn và lời khuyên',
        explain: [
          'Condicional simple (thì điều kiện) gần với "sẽ / chắc sẽ / có thể" trong tiếng Việt. Cách tạo rất giống futuro: giữ nguyên NGUYÊN MẪU rồi thêm đuôi -ía, -ías, -ía, -íamos, -íais, -ían. Cả ba nhóm dùng chung một bộ đuôi: hablar → hablaría, comer → comería, vivir → viviría. Đuôi này giống đuôi imperfecto của -er/-ir, nhưng condicional gắn vào cả nguyên mẫu: comía (đã từng ăn) ≠ comería (sẽ ăn).',
          'Động từ bất quy tắc dùng đúng gốc của futuro, chỉ thay đuôi: tener → tendría, poder → podría, hacer → haría, decir → diría, salir → saldría, venir → vendría, poner → pondría, querer → querría, saber → sabría, haber → habría (hay → habría: "sẽ có").',
          'Nhờ vả lịch sự và nói mong muốn: ¿Podrías + nguyên mẫu? (bạn có thể… được không?), ¿Te importaría + nguyên mẫu? (bạn có phiền… không? — importar chia như gustar: me/te/le importaría), Me gustaría + nguyên mẫu (tôi muốn…), Preferiría + nguyên mẫu (tôi thích… hơn). Condicional nghe mềm hơn hẳn hiện tại: ¿Puedes cerrar la puerta? → ¿Podrías cerrar la puerta?',
          'Khuyên bảo: Deberías + nguyên mẫu (bạn nên…) nhẹ nhàng hơn debes. Yo que tú / Yo en tu lugar + condicional = "nếu tôi là bạn thì…": Yo que tú, hablaría con ella. Hỏi ý kiến: ¿Qué harías tú? — Yo buscaría otro piso. Câu giả định có "si" (si tuviera…) bạn sẽ học ở B2; ở đây condicional đứng một mình.',
          '🌎 Mỹ Latinh: không dùng vosotros, nên nói ¿Ustedes podrían…? thay cho ¿Podríais…?. Bạn ở chung thường gọi là compañero de cuarto (ở Mexico hay nói roomie), căn hộ là departamento thay cho piso.'
        ],
        table: [
          ['Ngôi', 'hablar', 'poder → podr-', 'hacer → har-'],
          ['yo', 'hablaría', 'podría', 'haría'],
          ['tú', 'hablarías', 'podrías', 'harías'],
          ['él / ella / usted', 'hablaría', 'podría', 'haría'],
          ['nosotros / nosotras', 'hablaríamos', 'podríamos', 'haríamos'],
          ['vosotros / vosotras', 'hablaríais', 'podríais', 'haríais'],
          ['ellos / ellas / ustedes', 'hablarían', 'podrían', 'harían']
        ],
        examples: [
          { t: '¿Podrías bajar la música, por favor? Es muy tarde.', vi: 'Bạn vặn nhỏ nhạc được không? Muộn lắm rồi.' },
          { t: '¿Os importaría no hacer ruido después de las once?', vi: 'Các bạn có phiền đừng làm ồn sau mười một giờ không?' },
          { t: 'Me gustaría tener un piso más grande, pero preferiría no pagar más.', vi: 'Tôi muốn có một căn hộ rộng hơn, nhưng tôi không muốn trả thêm tiền.' },
          { t: 'Deberías hablar con tu compañera de piso.', vi: 'Bạn nên nói chuyện với bạn ở chung.' },
          { t: 'Yo que tú, pondría las normas en la puerta de la nevera.', vi: 'Nếu là bạn, mình sẽ dán nội quy lên cửa tủ lạnh.' }
        ],
        tip: 'Đừng nhầm condicional với imperfecto: comería (sẽ ăn) khác comía (đã từng ăn) — condicional luôn giữ cả nguyên mẫu (hoặc gốc bất quy tắc) trước -ía. Đừng "chia theo quy tắc" động từ bất quy tắc: "podería", "teneríamos", "hacería" đều sai → podría, tendríamos, haría. Sau yo que tú / yo en tu lugar, hãy dùng condicional: "Yo que tú, hablaría con él".'
      },
      dialogue: [
        { s: 'Lucía', t: 'Andrés, ¿tienes un momento? Me gustaría pedirte un consejo.', vi: 'Andrés, cậu có rảnh một chút không? Tớ muốn xin cậu một lời khuyên.' },
        { s: 'Andrés', t: 'Claro. ¿Qué te pasa? Pareces preocupada.', vi: 'Tất nhiên. Cậu sao thế? Trông cậu có vẻ lo lắng.' },
        { s: 'Lucía', t: 'Es mi compañera de piso. Nunca friega los platos y no saca la basura. Siempre lo hago yo.', vi: 'Là bạn ở chung của tớ. Cô ấy chẳng bao giờ rửa bát và không đổ rác. Lúc nào cũng là tớ làm.' },
        { s: 'Andrés', t: 'Uf, la convivencia es complicada. ¿Has hablado con ella?', vi: 'Chà, sống chung phức tạp thật. Cậu đã nói chuyện với cô ấy chưa?' },
        { s: 'Lucía', t: 'Todavía no. No quiero quejarme todo el rato. ¿Tú qué harías?', vi: 'Chưa. Tớ không muốn suốt ngày phàn nàn. Cậu thì sẽ làm gì?' },
        { s: 'Andrés', t: 'Yo que tú, hablaría con ella esta semana. Podríais repartir las tareas de la casa por turnos.', vi: 'Nếu là cậu, tớ sẽ nói chuyện với cô ấy trong tuần này. Hai cậu có thể chia việc nhà theo lượt.' },
        { s: 'Lucía', t: 'Buena idea. ¿Y qué le digo? No quiero ser maleducada.', vi: 'Ý hay đấy. Thế tớ nói gì với cô ấy? Tớ không muốn bất lịch sự.' },
        { s: 'Andrés', t: 'Sé educada, pero clara. Por ejemplo: «¿Te importaría fregar los platos después de cenar?».', vi: 'Cứ lịch sự nhưng rõ ràng. Ví dụ: «Cậu có phiền rửa bát sau bữa tối không?».' },
        { s: 'Lucía', t: 'Tienes razón. Y también deberíamos escribir unas normas para la cocina.', vi: 'Cậu nói đúng. Và bọn tớ cũng nên viết vài quy định cho căn bếp nữa.' },
        { s: 'Andrés', t: 'Perfecto. Ya me contarás qué tal.', vi: 'Tuyệt. Rồi kể tớ nghe tình hình thế nào nhé.' }
      ],
      exercises: [
        { type: 'mc', q: '¿___ (tú) cerrar la ventana, por favor? Hace frío.', options: ['Podrías', 'Pudiste', 'Poderías', 'Puedo'], answer: 0,
          explain: 'Nhờ lịch sự: ¿Podrías + nguyên mẫu? Poder là bất quy tắc: podr- + ías (không nói "poderías").' },
        { type: 'mc', q: 'Chọn câu đúng: "Nếu là bạn, mình sẽ nói chuyện với hàng xóm."', options: ['Yo que tú, hablé con el vecino.', 'Yo que tú, hablaría con el vecino.', 'Yo que tú, hablaré con el vecino.', 'Yo que tú, hablaste con el vecino.'], answer: 1,
          explain: 'Yo que tú / Yo en tu lugar + condicional: hablaría.' },
        { type: 'mc', q: '___ hablar contigo un momento. (Tôi muốn – lịch sự)', options: ['Me gustaba', 'Gustaría', 'Me gusto', 'Me gustaría'], answer: 3,
          explain: 'Me gustaría + nguyên mẫu = tôi muốn… (lịch sự). Gustar cần đại từ me; me gustaba là quá khứ.' },
        { type: 'mc', q: 'Dạng condicional đúng của salir (nosotros) là:', options: ['saliríamos', 'salíamos', 'saldríamos', 'saldremos'], answer: 2,
          explain: 'Salir → gốc saldr- + -íamos = saldríamos. Salíamos là imperfecto, saldremos là futuro.' },
        { type: 'mc', q: 'Esta semana es tu ___ de limpiar el baño.', options: ['norma', 'favor', 'consejo', 'turno'], answer: 3,
          explain: 'El turno = lượt: Es tu turno = đến lượt bạn.' },
        { type: 'mc', q: '¿Te ___ bajar la música? Mañana tengo un examen.', options: ['importarías', 'importaría', 'importaste', 'importo'], answer: 1,
          explain: 'Importar chia như gustar: chủ ngữ là việc "bajar la música" → ngôi 3 số ít, người bị phiền là te: ¿Te importaría…?' },
        { type: 'fill', q: 'Yo en tu lugar, ___ otro piso. (buscar)', answer: ['buscaría'], hint: 'condicional, ngôi yo',
          explain: 'Yo en tu lugar + condicional: buscar → buscaría.' },
        { type: 'fill', q: 'Estás muy cansado. ___ dormir más. (deber, tú)', answer: ['Deberías', 'Debes'], hint: 'lời khuyên nhẹ nhàng',
          explain: 'Deberías + nguyên mẫu = bạn nên… (mềm hơn debes).' },
        { type: 'fill', q: '¿Qué ___ tú en mi situación? (hacer)', answer: ['harías'], hint: 'condicional bất quy tắc',
          explain: 'Hacer → gốc har- + -ías = harías.' },
        { type: 'fill', q: 'Mi vecina siempre se ___ del ruido de la calle. (phàn nàn)', answer: ['queja'], hint: 'quejarse, ngôi ella, hiện tại',
          explain: 'Quejarse de algo = phàn nàn về điều gì: ella se queja.' },
        { type: 'fill', q: 'En un piso más grande ___ sitio para todos. (haber – "sẽ có")', answer: ['habría'], hint: 'condicional của hay',
          explain: 'Hay (haber) → condicional habría = sẽ có.' },
        { type: 'order', vi: 'Tối nay bạn đi đổ rác được không?', words: ['esta', 'basura', '¿Podrías', 'noche?', 'la', 'sacar'],
          answer: '¿Podrías sacar la basura esta noche?', alt: ['¿Podrías sacar esta noche? la basura', 'esta noche? ¿Podrías sacar la basura'] },
        { type: 'order', vi: 'Nếu là bạn, mình sẽ chia việc nhà.', words: ['repartiría', 'casa', 'Yo', 'tareas', 'tú,', 'la', 'que', 'de', 'las'],
          answer: 'Yo que tú, repartiría las tareas de la casa' },
        { type: 'order', vi: 'Chúng tôi muốn nói chuyện với hội cư dân toà nhà.', words: ['comunidad', 'hablar', 'Nos', 'vecinos', 'con', 'gustaría', 'la', 'de'],
          answer: 'Nos gustaría hablar con la comunidad de vecinos' },
        { type: 'order', vi: 'Xin lỗi đã làm phiền, bạn giúp mình được không?', words: ['podrías', 'molestia,', 'Perdona', 'ayudar?', 'la', '¿me'],
          answer: 'Perdona la molestia, ¿me podrías ayudar?' },
        { type: 'order', vi: 'Tôi thích dọn dẹp vào thứ Bảy hơn.', words: ['limpieza', 'sábado', 'Preferiría', 'el', 'hacer', 'la'],
          answer: 'Preferiría hacer la limpieza el sábado', alt: ['el sábado Preferiría hacer la limpieza'] }
      ],
      reading: {
        title: '¿Qué harías tú en mi lugar?',
        titleVi: 'Bạn sẽ làm gì nếu ở vào vị trí của tôi?',
        text: [
          'Hola, Elena: vivo en Valencia con dos compañeros de piso. Nos llevamos bien, pero tengo dos problemas. El primero es el vecino de arriba: es muy ruidoso y pone música hasta las dos de la mañana. Hace un mes subí a hablar con él y fui muy educado, pero no me hizo caso. El segundo problema es la limpieza: mis compañeros casi nunca friegan los platos y yo siempre saco la basura. ¿Qué harías tú en mi lugar? Marcos.',
          'Querido Marcos: la convivencia no siempre es fácil, pero tus problemas tienen solución. Con el vecino, yo no hablaría con él otra vez. Yo en tu lugar, escribiría a la comunidad de vecinos. En casi todos los edificios hay normas sobre el ruido por la noche, y el presidente de la comunidad podría hablar con él.',
          'Con tus compañeros, deberías ser claro. Yo que tú, organizaría una reunión en casa y repartiría las tareas por turnos: una semana tú friegas y otra semana sacas la basura. Podríais poner la lista en la puerta de la nevera. Y un último consejo: sería mejor hablar con buen humor, sin quejarse todo el rato. Un abrazo, Elena.'
        ],
        vi: [
          'Chào chị Elena: em sống ở Valencia cùng hai người bạn ở chung. Bọn em hợp nhau, nhưng em có hai vấn đề. Thứ nhất là anh hàng xóm tầng trên: anh ấy rất ồn và bật nhạc đến hai giờ sáng. Một tháng trước em đã lên nói chuyện với anh ấy và em rất lịch sự, nhưng anh ấy không để ý. Vấn đề thứ hai là việc dọn dẹp: các bạn em hầu như không bao giờ rửa bát và lúc nào cũng là em đi đổ rác. Nếu ở vào vị trí của em, chị sẽ làm gì? Marcos.',
          'Marcos thân mến: sống chung không phải lúc nào cũng dễ, nhưng các vấn đề của em đều có cách giải quyết. Với anh hàng xóm, chị sẽ không nói chuyện với anh ta thêm lần nữa. Nếu là em, chị sẽ viết thư cho hội cư dân toà nhà. Hầu như toà nhà nào cũng có quy định về tiếng ồn ban đêm, và chủ tịch hội cư dân có thể nói chuyện với anh ta.',
          'Với các bạn ở chung, em nên nói rõ ràng. Nếu là em, chị sẽ tổ chức một buổi họp ở nhà và chia việc theo lượt: tuần này em rửa bát, tuần sau em đổ rác. Các em có thể dán danh sách lên cửa tủ lạnh. Và một lời khuyên cuối: tốt hơn là nói chuyện vui vẻ, đừng phàn nàn suốt. Thân mến, Elena.'
        ],
        questions: [
          { q: 'Marcos sống với ai?', options: ['Một mình', 'Với bố mẹ', 'Với hai người bạn ở chung', 'Với anh hàng xóm tầng trên'], answer: 2,
            explain: 'Vivo en Valencia con dos compañeros de piso.' },
          { q: 'Khi Marcos lên nói chuyện, anh hàng xóm đã phản ứng thế nào?', options: ['Không để ý đến lời Marcos', 'Xin lỗi và tắt nhạc', 'Phàn nàn với hội cư dân', 'Mời Marcos vào nhà'], answer: 0,
            explain: 'Subí a hablar con él y fui muy educado, pero no me hizo caso.' },
          { q: 'Elena khuyên Marcos làm gì với anh hàng xóm?', options: ['Lên nói chuyện thêm lần nữa', 'Bật nhạc to hơn', 'Chuyển sang căn hộ khác', 'Viết thư cho hội cư dân toà nhà'], answer: 3,
            explain: 'Yo en tu lugar, escribiría a la comunidad de vecinos.' },
          { q: 'Theo Elena, các bạn ở chung có thể dán gì lên cửa tủ lạnh?', options: ['Nội quy của toà nhà', 'Danh sách chia việc theo lượt', 'Thư gửi anh hàng xóm', 'Số điện thoại của Elena'], answer: 1,
            explain: 'Repartiría las tareas por turnos… Podríais poner la lista en la puerta de la nevera.' }
        ]
      }
    }
  },
  // ───────────────────────── B1-6b ─────────────────────────
  {
    after: 'es-b1-6',
    unit: {
      id: 'es-b1-6b',
      icon: '🎓',
      title: 'Kế hoạch & điều kiện thời gian',
      goal: 'Nói về dự định sau khi tốt nghiệp, chuyển nhà hay đi du học với presente de subjuntivo sau cuando, para que, aunque và no creo que.',
      vocab: [
        { w: 'graduarse', ipa: 'gra-ĐOAR-xê', vi: 'tốt nghiệp', ex: 'Cuando me gradúe, buscaré trabajo en un hospital.', exVi: 'Khi tốt nghiệp, tôi sẽ tìm việc ở một bệnh viện.' },
        { w: 'la carrera', ipa: 'la ca-RRÊ-ra', vi: 'ngành học đại học; sự nghiệp', ex: 'Estoy en el último año de la carrera.', exVi: 'Tôi đang học năm cuối đại học.' },
        { w: 'independizarse', ipa: 'in-đê-pên-đi-θAR-xê', vi: 'ra ở riêng, tự lập', ex: 'Me independizaré cuando tenga un trabajo fijo.', exVi: 'Tôi sẽ ra ở riêng khi có công việc ổn định.' },
        { w: 'jubilarse', ipa: 'khu-bi-LAR-xê', vi: 'nghỉ hưu', ex: 'Cuando mis padres se jubilen, vivirán en la costa.', exVi: 'Khi bố mẹ tôi nghỉ hưu, họ sẽ sống ở vùng biển.' },
        { w: 'el máster', ipa: 'êl MAS-têr', vi: 'chương trình thạc sĩ', ex: 'No creo que haga el máster este año: es muy caro.', exVi: 'Tôi không nghĩ là năm nay tôi sẽ học thạc sĩ: đắt quá.' },
        { w: 'la meta', ipa: 'la MÊ-ta', vi: 'mục tiêu, đích đến', ex: 'Mi meta es trabajar en una empresa internacional.', exVi: 'Mục tiêu của tôi là làm việc ở một công ty quốc tế.' },
        { w: 'conseguir', ipa: 'côn-xê-GHIR', vi: 'đạt được, giành được', ex: 'Aunque sea difícil, conseguiré el trabajo de mis sueños.', exVi: 'Dù có khó đến đâu, tôi sẽ có được công việc mơ ước.' },
        { w: 'el título', ipa: 'êl TI-tu-lô', vi: 'bằng tốt nghiệp', ex: 'Cuando tenga el título, podré trabajar como profesora.', exVi: 'Khi có bằng, tôi sẽ có thể làm giáo viên.' },
        { w: 'la residencia de estudiantes', ipa: 'la rrê-xi-ĐÊN-θi-a đê ês-tu-đi-AN-tês', vi: 'ký túc xá', ex: 'El primer año viviré en una residencia de estudiantes.', exVi: 'Năm đầu tôi sẽ sống ở ký túc xá.' },
        { w: 'el intercambio', ipa: 'êl in-têr-CAM-bi-ô', vi: 'chương trình trao đổi (sinh viên)', ex: 'Me voy de intercambio a Italia para mejorar mi italiano.', exVi: 'Tôi đi trao đổi sang Ý để nâng cao tiếng Ý.' },
        { w: 'el proyecto', ipa: 'êl prô-GIÊC-tô', vi: 'dự án, dự định', ex: 'Mis padres me ayudan para que pueda empezar mi proyecto.', exVi: 'Bố mẹ giúp tôi để tôi có thể bắt đầu dự án của mình.' },
        { w: 'la etapa', ipa: 'la ê-TA-pa', vi: 'giai đoạn', ex: 'La universidad es una etapa muy bonita de la vida.', exVi: 'Đại học là một giai đoạn rất đẹp của cuộc đời.' },
        { w: 'la despedida', ipa: 'la đês-pê-ĐI-đa', vi: 'buổi chia tay, lời tạm biệt', ex: 'Te preparamos una despedida para que no te vayas triste.', exVi: 'Bọn mình chuẩn bị một buổi chia tay cho bạn để bạn không phải buồn khi đi.' },
        { w: 'empezar de cero', ipa: 'êm-pê-θAR đê θÊ-rô', vi: 'bắt đầu lại từ đầu', ex: 'Aunque tenga que empezar de cero, quiero vivir en Berlín.', exVi: 'Dù có phải bắt đầu lại từ đầu, tôi vẫn muốn sống ở Berlin.' },
        { w: 'echar de menos', ipa: 'ê-CHAR đê MÊ-nôs', vi: 'nhớ (ai, nơi nào)', ex: 'Cuando estés en Japón, echarás de menos la comida de tu madre.', exVi: 'Khi ở Nhật, bạn sẽ nhớ món ăn của mẹ.' },
        { w: 'el visado', ipa: 'êl bi-XA-đô', vi: 'thị thực (visa)', ex: 'Para estudiar en Canadá necesitas un visado.', exVi: 'Để học ở Canada, bạn cần thị thực.' },
        { w: 'tener claro', ipa: 'tê-NÊR CLA-rô', vi: 'biết rõ, chắc chắn về (điều gì)', ex: 'Todavía no tengo claro qué voy a hacer después de la carrera.', exVi: 'Tôi vẫn chưa rõ mình sẽ làm gì sau khi học xong đại học.' },
        { w: 'las prácticas', ipa: 'las PRAC-ti-cas', vi: 'kỳ thực tập', ex: 'Este verano hago las prácticas en una empresa de Barcelona.', exVi: 'Hè này tôi thực tập ở một công ty ở Barcelona.' },
        { w: 'el paro', ipa: 'êl PA-rô', vi: 'tình trạng thất nghiệp', ex: 'Mi hermano está en el paro desde marzo.', exVi: 'Anh tôi thất nghiệp từ tháng Ba.' },
        { w: 'a largo plazo', ipa: 'a LAR-gô PLA-θô', vi: 'về lâu dài', ex: 'A largo plazo, me gustaría tener mi propia empresa.', exVi: 'Về lâu dài, tôi muốn có công ty riêng.' }
      ],
      grammar: {
        title: 'Presente de subjuntivo sau cuando, para que, aunque và no creo que',
        explain: [
          'Subjuntivo (thức giả định) là một bộ dạng động từ dùng cho điều chưa xảy ra, chưa chắc chắn hoặc không được khẳng định là thật. Cách chia: lấy ngôi yo của thì hiện tại, bỏ -o, rồi thêm đuôi "ngược": động từ -ar nhận -e, -es, -e, -emos, -éis, -en (hablo → hable); động từ -er/-ir nhận -a, -as, -a, -amos, -áis, -an (como → coma, vivo → viva). Vì đi từ ngôi yo nên các dạng bất quy tắc ở yo được giữ lại: tengo → tenga, hago → haga, salgo → salga, pongo → ponga, vengo → venga, digo → diga, conozco → conozca.',
          'Động từ đổi gốc vẫn đổi như ở hiện tại (pueda, quiera, vuelva — nhưng podamos, queráis). Chú ý chính tả để giữ cách đọc: -car → -que (buscar → busque), -gar → -gue (llegar → llegue), -zar → -ce (empezar → empiece). Sáu động từ hoàn toàn bất quy tắc: ser → sea, estar → esté, ir → vaya, haber → haya, saber → sepa, dar → dé.',
          'Cuando + subjuntivo khi nói về TƯƠNG LAI (vế chính ở futuro, ir a hoặc mệnh lệnh): Cuando termine la carrera, buscaré trabajo. Cuando + indicativo khi nói về THÓI QUEN hoặc QUÁ KHỨ: Cuando termino las clases, voy al gimnasio. / Cuando era pequeño, vivía en Sevilla.',
          'Para + nguyên mẫu khi hai vế cùng chủ ngữ (Trabajo para pagar el máster); para que + subjuntivo khi khác chủ ngữ (Trabajo para que mis hijos estudien). Aunque + indicativo = sự thật đã biết (Aunque es caro, lo compro: tôi biết là nó đắt); aunque + subjuntivo = chưa biết hoặc không quan trọng (Aunque sea caro, lo compraré: dù có đắt thì…). Creo que / Pienso que + indicativo (khẳng định), nhưng No creo que / No pienso que + subjuntivo: Creo que es buena idea. / No creo que sea buena idea.',
          '🌎 Mỹ Latinh: không dùng vosotros nên không có dạng habléis, tengáis — thay bằng ustedes (hablen, tengan). Ngoài ra visado thường gọi là visa, estar en el paro thường nói estar desempleado / sin trabajo.'
        ],
        table: [
          ['Động từ (ngôi yo hiện tại)', 'yo / tú / él, ella', 'nosotros / vosotros / ellos'],
          ['hablar (hablo)', 'hable / hables / hable', 'hablemos / habléis / hablen'],
          ['comer (como)', 'coma / comas / coma', 'comamos / comáis / coman'],
          ['tener (tengo)', 'tenga / tengas / tenga', 'tengamos / tengáis / tengan'],
          ['hacer (hago)', 'haga / hagas / haga', 'hagamos / hagáis / hagan'],
          ['ser (bất quy tắc)', 'sea / seas / sea', 'seamos / seáis / sean'],
          ['ir (bất quy tắc)', 'vaya / vayas / vaya', 'vayamos / vayáis / vayan'],
          ['estar (bất quy tắc)', 'esté / estés / esté', 'estemos / estéis / estén']
        ],
        examples: [
          { t: 'Cuando termine la carrera, buscaré trabajo en Valencia.', vi: 'Khi học xong đại học, tôi sẽ tìm việc ở Valencia.' },
          { t: 'Cuando tengo exámenes, duermo muy poco.', vi: 'Mỗi khi có kỳ thi, tôi ngủ rất ít.' },
          { t: 'Mis padres me ayudan para que pueda estudiar el máster.', vi: 'Bố mẹ giúp tôi để tôi có thể học thạc sĩ.' },
          { t: 'Aunque sea difícil, voy a independizarme este año.', vi: 'Dù có khó đến đâu, năm nay tôi sẽ ra ở riêng.' },
          { t: 'No creo que vuelva a vivir con mis padres.', vi: 'Tôi không nghĩ là mình sẽ lại sống với bố mẹ.' }
        ],
        tip: 'Lỗi hay gặp nhất là dịch "khi nào tôi sẽ…" thành futuro sau cuando: "Cuando terminaré la carrera" ✗ → "Cuando termine la carrera" ✓. Nhưng ¿Cuándo…? (câu hỏi, có dấu) dùng thì bình thường: ¿Cuándo terminas la carrera? Cùng chủ ngữ thì dùng para + nguyên mẫu: "Estudio para aprobar", không nói "Estudio para que yo apruebe".'
      },
      dialogue: [
        { s: 'Pablo', t: '¿Qué vas a hacer cuando termines la carrera, Irene?', vi: 'Cậu sẽ làm gì khi học xong đại học, Irene?' },
        { s: 'Irene', t: 'Me gustaría hacer un máster en Alemania. Pero antes quiero hacer las prácticas aquí, en Sevilla.', vi: 'Tớ muốn học thạc sĩ ở Đức. Nhưng trước đó tớ muốn thực tập ở đây, ở Sevilla.' },
        { s: 'Pablo', t: '¿En Alemania? ¡Qué valiente! ¿Hablas alemán?', vi: 'Ở Đức á? Gan thật! Cậu nói được tiếng Đức không?' },
        { s: 'Irene', t: 'Un poco. Estoy estudiando mucho para que no sea tan difícil al principio.', vi: 'Một chút. Tớ đang học chăm để lúc đầu không quá khó khăn.' },
        { s: 'Pablo', t: 'Yo no tengo nada claro. No creo que encuentre trabajo rápido: hay mucho paro.', vi: 'Tớ thì chưa rõ gì cả. Tớ không nghĩ là sẽ tìm được việc nhanh: thất nghiệp nhiều lắm.' },
        { s: 'Irene', t: 'Bueno, cuando tengas el título, todo será más fácil. ¿Y vas a independizarte?', vi: 'Thôi nào, khi cậu có bằng rồi, mọi thứ sẽ dễ hơn. Thế cậu có định ra ở riêng không?' },
        { s: 'Pablo', t: 'Sí, aunque tenga que compartir piso con tres personas. Necesito mi espacio.', vi: 'Có, dù có phải ở ghép với ba người. Tớ cần không gian riêng.' },
        { s: 'Irene', t: 'Te entiendo. Yo voy a echar mucho de menos a mi familia cuando esté fuera.', vi: 'Tớ hiểu. Còn tớ sẽ rất nhớ gia đình khi ở xa.' },
        { s: 'Pablo', t: 'Pues cuando vuelvas en Navidad, lo celebramos todos juntos.', vi: 'Thế thì khi cậu về dịp Giáng sinh, cả bọn mình cùng ăn mừng.' },
        { s: 'Irene', t: '¡Trato hecho! Y tú vienes a verme a Berlín para que te enseñe la ciudad.', vi: 'Chốt nhé! Còn cậu sang Berlin thăm tớ để tớ dẫn cậu đi thăm thành phố.' }
      ],
      exercises: [
        { type: 'mc', q: 'Cuando ___ la carrera, buscaré trabajo.', options: ['termino', 'terminaré', 'termine', 'terminaba'], answer: 2,
          explain: 'Nói về tương lai → cuando + subjuntivo: termine. Không dùng futuro sau cuando.' },
        { type: 'mc', q: 'Cuando ___ exámenes, siempre duermo poco. (thói quen)', options: ['tengo', 'tenga', 'tendré', 'tendría'], answer: 0,
          explain: 'Thói quen (siempre) → cuando + indicativo: tengo.' },
        { type: 'mc', q: 'Mis padres trabajan mucho para que yo ___ estudiar fuera.', options: ['puedo', 'poder', 'podré', 'pueda'], answer: 3,
          explain: 'Khác chủ ngữ (mis padres / yo) → para que + subjuntivo: pueda.' },
        { type: 'mc', q: 'No creo que el máster ___ muy caro.', options: ['es', 'sea', 'será', 'está'], answer: 1,
          explain: 'No creo que + subjuntivo: ser → sea.' },
        { type: 'mc', q: 'Chọn câu đúng:', options: ['Creo que sea una buena idea.', 'No creo que es una buena idea.', 'Creo que es una buena idea.', 'Creo que ser una buena idea.'], answer: 2,
          explain: 'Creo que (khẳng định) + indicativo: es. Phủ định No creo que mới đi với subjuntivo: sea.' },
        { type: 'mc', q: 'Mi abuelo tiene 67 años y ya no trabaja: ___ el año pasado.', options: ['se jubiló', 'se graduó', 'se independizó', 'consiguió'], answer: 0,
          explain: 'Jubilarse = nghỉ hưu.' },
        { type: 'fill', q: 'Cuando ___ en Madrid, te llamaré. (yo, estar)', answer: ['esté'], hint: 'subjuntivo bất quy tắc',
          explain: 'Tương lai → cuando + subjuntivo; estar → esté.' },
        { type: 'fill', q: 'Aunque ___ que empezar de cero, quiero vivir en otro país. (yo, tener)', answer: ['tenga'], hint: 'chưa biết có xảy ra hay không',
          explain: 'Aunque + subjuntivo = dù có… đi nữa; tengo → tenga.' },
        { type: 'fill', q: 'Te explico el plan para que lo ___ bien. (tú, entender)', answer: ['entiendas'], hint: 'e → ie, đuôi -as',
          explain: 'Khác chủ ngữ (yo explico / tú entiendes) → para que + subjuntivo: entiendo → entienda → entiendas.' },
        { type: 'fill', q: 'No pienso que mis padres ___ a vivir a la costa. (ir, ellos)', answer: ['vayan'], hint: 'subjuntivo bất quy tắc của ir',
          explain: 'No pienso que + subjuntivo; ir → vaya → vayan.' },
        { type: 'fill', q: 'Este año me voy de ___ a Italia con la universidad.', answer: ['intercambio'], hint: 'chương trình trao đổi sinh viên',
          explain: 'Irse de intercambio = đi trao đổi (học một thời gian ở trường nước ngoài).' },
        { type: 'order', vi: 'Khi có bằng, tôi sẽ đi Mexico.', words: ['título,', 'a', 'Cuando', 'viajaré', 'el', 'México', 'tenga'],
          answer: 'Cuando tenga el título, viajaré a México', alt: ['viajaré a México Cuando tenga el título,'] },
        { type: 'order', vi: 'Tôi không nghĩ là việc đó dễ.', words: ['sea', 'No', 'fácil', 'creo', 'que'],
          answer: 'No creo que sea fácil' },
        { type: 'order', vi: 'Bố mẹ giúp tôi để tôi có thể học thạc sĩ.', words: ['ayudan', 'que', 'Mis', 'máster', 'pueda', 'me', 'para', 'hacer', 'padres', 'el'],
          answer: 'Mis padres me ayudan para que pueda hacer el máster' },
        { type: 'order', vi: 'Dù trời có mưa, chúng ta vẫn đi biển.', words: ['vamos', 'llueva,', 'a', 'Aunque', 'la', 'playa'],
          answer: 'Aunque llueva, vamos a la playa', alt: ['vamos a la playa Aunque llueva,'] },
        { type: 'order', vi: 'Khi ở xa, tôi sẽ nhớ gia đình.', words: ['familia', 'esté', 'de', 'fuera,', 'menos', 'Cuando', 'echaré', 'a', 'mi'],
          answer: 'Cuando esté fuera, echaré de menos a mi familia', alt: ['echaré de menos a mi familia Cuando esté fuera,'] }
      ],
      reading: {
        title: 'Después de la universidad',
        titleVi: 'Sau khi ra trường',
        text: [
          'Este mes, miles de estudiantes terminan la carrera en España. Hemos hablado con tres jóvenes de la Universidad de Granada sobre sus planes para esta nueva etapa.',
          'Andrea, de 23 años, estudia Ingeniería. «Cuando tenga el título, quiero hacer un máster en Holanda. Hice un intercambio allí el año pasado y me encantó. Aunque sea caro, mis padres me van a ayudar. Eso sí, voy a echar mucho de menos a mi familia».',
          'Hugo, en cambio, prefiere quedarse en Granada. «Este verano hago las prácticas en una empresa de la ciudad. No creo que me contraten después, pero es una buena experiencia. Ahora vivo con mis padres porque los pisos son muy caros. Cuando encuentre un trabajo fijo, me independizaré».',
          'Nerea todavía no tiene claro qué va a hacer. «Hay mucho paro entre los jóvenes y eso me preocupa. Mi meta a largo plazo es trabajar en un hospital, pero primero voy a trabajar en una tienda para tener algo de dinero. Cuando sepa qué quiero de verdad, volveré a estudiar».'
        ],
        vi: [
          'Tháng này, hàng nghìn sinh viên ở Tây Ban Nha học xong đại học. Chúng tôi đã nói chuyện với ba bạn trẻ của Đại học Granada về kế hoạch của họ cho giai đoạn mới này.',
          'Andrea, 23 tuổi, học ngành Kỹ thuật. «Khi có bằng, tôi muốn học thạc sĩ ở Hà Lan. Năm ngoái tôi đã đi trao đổi ở đó và rất thích. Dù có đắt thì bố mẹ cũng sẽ giúp tôi. Có điều, tôi sẽ rất nhớ gia đình».',
          'Ngược lại, Hugo thích ở lại Granada hơn. «Hè này tôi thực tập ở một công ty trong thành phố. Tôi không nghĩ là sau đó họ sẽ tuyển tôi, nhưng đó là một trải nghiệm tốt. Bây giờ tôi sống với bố mẹ vì căn hộ rất đắt. Khi tìm được công việc ổn định, tôi sẽ ra ở riêng».',
          'Nerea vẫn chưa rõ mình sẽ làm gì. «Thanh niên thất nghiệp nhiều lắm và điều đó làm tôi lo. Mục tiêu lâu dài của tôi là làm việc ở bệnh viện, nhưng trước tiên tôi sẽ làm ở một cửa hàng để có chút tiền. Khi biết rõ mình thực sự muốn gì, tôi sẽ đi học lại».'
        ],
        questions: [
          { q: 'Andrea muốn làm gì khi có bằng?', options: ['Thực tập ở Granada', 'Học thạc sĩ ở Hà Lan', 'Làm việc ở bệnh viện', 'Ra ở riêng ngay'], answer: 1,
            explain: 'Cuando tenga el título, quiero hacer un máster en Holanda.' },
          { q: 'Vì sao Hugo vẫn sống với bố mẹ?', options: ['Vì căn hộ ở đó rất đắt', 'Vì cậu ấy sắp đi Hà Lan', 'Vì bố mẹ cậu ấy bị ốm', 'Vì cậu ấy đang thất nghiệp'], answer: 0,
            explain: 'Ahora vivo con mis padres porque los pisos son muy caros.' },
          { q: 'Hugo nghĩ gì về công ty nơi cậu thực tập?', options: ['Chắc chắn họ sẽ tuyển cậu', 'Họ trả lương rất cao', 'Công ty ở quá xa', 'Cậu không nghĩ họ sẽ tuyển mình sau kỳ thực tập'], answer: 3,
            explain: 'No creo que me contraten después, pero es una buena experiencia.' },
          { q: 'Mục tiêu lâu dài của Nerea là gì?', options: ['Làm việc ở cửa hàng', 'Đi trao đổi ở nước ngoài', 'Làm việc ở bệnh viện', 'Mở công ty riêng'], answer: 2,
            explain: 'Mi meta a largo plazo es trabajar en un hospital.' }
        ]
      }
    }
  }
];
