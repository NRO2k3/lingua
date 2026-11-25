// Bài mới chèn vào lộ trình tiếng Tây Ban Nha – cấp A2: a2-1b, a2-2b, a2-3b, a2-4b, a2-5b
export default [
  // ───────────────────────── A2-1b ─────────────────────────
  {
    after: 'es-a2-1',
    unit: {
      id: 'es-a2-1b',
      icon: '📞',
      title: 'Gọi điện & lời mời',
      goal: 'Nói ai đó đang làm gì bằng estar + gerundio, gọi và nghe điện thoại kiểu Tây Ban Nha, mời bạn bè và nhận lời hoặc từ chối khéo.',
      vocab: [
        { w: '¿Diga?', ipa: 'ĐI-ga', vi: 'A lô? (câu nhấc máy ở Tây Ban Nha)', ex: '¿Diga? — Hola, soy Lan. ¿Está Pablo?', exVi: 'A lô? — Chào anh, em là Lan. Pablo có nhà không ạ?' },
        { w: 'llamar', ipa: 'gia-MAR', vi: 'gọi điện', ex: 'Te llamo esta tarde, ¿vale?', exVi: 'Chiều nay mình gọi cho bạn nhé?' },
        { w: 'la llamada', ipa: 'la gia-MA-đa', vi: 'cuộc gọi', ex: 'Perdona, tengo una llamada.', exVi: 'Xin lỗi, mình có cuộc gọi.' },
        { w: 'contestar', ipa: 'côn-tês-TAR', vi: 'trả lời; nghe máy', ex: 'Llamo a Ana, pero no contesta.', exVi: 'Tôi gọi cho Ana nhưng cô ấy không nghe máy.' },
        { w: 'el recado', ipa: 'êl rrê-CA-đô', vi: 'lời nhắn', ex: '¿Quieres dejar un recado?', exVi: 'Bạn có muốn để lại lời nhắn không?' },
        { w: 'dejar', ipa: 'đê-KHAR', vi: 'để lại', ex: 'Siempre dejo las llaves en la mesa.', exVi: 'Tôi luôn để chìa khoá trên bàn.' },
        { w: 'de parte de', ipa: 'đê PAR-tê đê', vi: 'từ phía (ai), thay mặt (ai)', ex: '¿De parte de quién? — De parte de Lan.', exVi: 'Ai gọi đấy ạ? — Lan gọi ạ.' },
        { w: 'un momento', ipa: 'un mô-MÊN-tô', vi: 'chờ một chút', ex: 'Un momento, ahora se pone.', exVi: 'Chờ một chút, cô ấy ra nghe máy ngay.' },
        { w: 'colgar', ipa: 'côl-GAR', vi: 'cúp máy, gác máy', ex: 'Bueno, ahora cuelgo. ¡Hasta luego!', exVi: 'Thôi, mình cúp máy đây. Hẹn gặp lại!' },
        { w: 'ahora mismo', ipa: 'a-Ô-ra MIS-mô', vi: 'ngay lúc này', ex: 'Ahora mismo estoy trabajando.', exVi: 'Ngay lúc này tôi đang làm việc.' },
        { w: 'esta noche', ipa: 'ÊS-ta NÔ-chê', vi: 'tối nay', ex: '¿Qué haces esta noche?', exVi: 'Tối nay bạn làm gì?' },
        { w: 'invitar', ipa: 'in-bi-TAR', vi: 'mời', ex: 'Te invito a cenar en mi casa.', exVi: 'Mình mời bạn ăn tối ở nhà mình.' },
        { w: 'la invitación', ipa: 'la in-bi-ta-θi-ÔN', vi: 'lời mời', ex: 'Gracias por la invitación.', exVi: 'Cảm ơn bạn đã mời.' },
        { w: 'aceptar', ipa: 'a-θêp-TAR', vi: 'nhận lời, chấp nhận', ex: 'Acepto tu invitación con mucho gusto.', exVi: 'Mình rất vui lòng nhận lời mời của bạn.' },
        { w: '¡Vale!', ipa: 'BA-lê', vi: 'được, đồng ý (thân mật, ở Tây Ban Nha)', ex: '¿Vamos al cine? — ¡Vale!', exVi: 'Đi xem phim không? — Được đấy!' },
        { w: '¡Claro!', ipa: 'CLA-rô', vi: 'tất nhiên, dĩ nhiên', ex: '¿Quieres venir a la fiesta? — ¡Claro!', exVi: 'Bạn muốn đến bữa tiệc không? — Tất nhiên rồi!' },
        { w: 'lo siento', ipa: 'lô xi-ÊN-tô', vi: 'tôi rất tiếc, xin lỗi', ex: 'Lo siento, no puedo ir.', exVi: 'Tiếc quá, mình không đi được.' },
        { w: 'es que', ipa: 'ês kê', vi: 'chả là…, là vì… (mở đầu lý do)', ex: 'No puedo, es que estoy estudiando.', exVi: 'Mình không đi được, chả là mình đang học bài.' },
        { w: 'libre', ipa: 'LI-brê', vi: 'rảnh, trống', ex: '¿Estás libre el sábado?', exVi: 'Thứ Bảy bạn rảnh không?' },
        { w: 'la entrada', ipa: 'la ên-TRA-đa', vi: 'vé (xem phim, hoà nhạc)', ex: 'Tengo dos entradas para el concierto.', exVi: 'Mình có hai vé xem hoà nhạc.' }
      ],
      grammar: {
        title: 'Estar + gerundio (đang làm gì); gọi điện, mời và trả lời lời mời',
        explain: [
          'Estar + gerundio diễn tả hành động ĐANG diễn ra ngay lúc nói, giống "đang" trong tiếng Việt: Estoy cocinando = Tôi đang nấu ăn. Chỉ cần chia estar (estoy, estás, está, estamos, estáis, están); gerundio giữ nguyên, không đổi theo chủ ngữ. Câu hỏi quen thuộc nhất: ¿Qué estás haciendo? (Bạn đang làm gì thế?).',
          'Cách tạo gerundio: -ar → -ando (hablar → hablando); -er và -ir → -iendo (comer → comiendo, escribir → escribiendo, hacer → haciendo). Khi gốc tận cùng bằng nguyên âm, -iendo thành -yendo: leer → leyendo, oír → oyendo. Động từ -ir đổi gốc thì đổi e → i, o → u: pedir → pidiendo, decir → diciendo, repetir → repitiendo, venir → viniendo, dormir → durmiendo. Với động từ phản thân, đại từ đứng trước estar hoặc gắn vào sau gerundio (thêm dấu): Me estoy duchando = Estoy duchándome.',
          'Gọi điện kiểu Tây Ban Nha: người nhấc máy nói ¿Sí? hoặc ¿Diga? / ¿Dígame?. Người gọi chào rồi hỏi ¿Está Ana? (Ana có ở đó không?) hoặc tự giới thiệu: Hola, soy Lan. Người nghe hỏi lại ¿De parte de quién? (Ai gọi đấy ạ?), rồi nói Un momento, ahora se pone (Chờ chút, cô ấy ra nghe ngay). Nếu người đó vắng hoặc đang bận: No está / Está duchándose. ¿Quieres dejar un recado?',
          'Mời: ¿Quieres + nguyên mẫu? (¿Quieres venir al cine?) hoặc ¿Por qué no + động từ? (¿Por qué no vamos a la playa?). Nhận lời: ¡Vale!, ¡Claro!, ¡Qué buena idea!, Perfecto. Từ chối lịch sự: Lo siento, no puedo + lý do bắt đầu bằng es que…: es que estoy trabajando, es que tengo un examen. Có thể thêm Otro día, ¿vale? (Để hôm khác nhé?).',
          '🌎 Mỹ Latinh: khi nhấc máy, người Mexico nói ¿Bueno?, nhiều nước khác nói ¿Aló?; điện thoại di động là el celular (ở Tây Ban Nha: el móvil). ¡Vale! là cách nói rất Tây Ban Nha — ở Mỹ Latinh người ta hay nói ¡Claro!, Está bien hoặc ¡Dale!.'
        ],
        table: [
          ['Nguyên mẫu', 'Gerundio', 'Ví dụ'],
          ['hablar', 'hablando', 'Estoy hablando por teléfono.'],
          ['comer', 'comiendo', 'Estamos comiendo.'],
          ['escribir', 'escribiendo', '¿Estás escribiendo un correo?'],
          ['hacer', 'haciendo', '¿Qué estás haciendo?'],
          ['leer', 'leyendo', 'Ana está leyendo.'],
          ['dormir', 'durmiendo', 'El niño está durmiendo.'],
          ['decir', 'diciendo', '¿Qué estás diciendo?'],
          ['ducharse', 'duchándose', 'Pablo se está duchando.']
        ],
        examples: [
          { t: '¿Qué estás haciendo? — Estoy cocinando.', vi: 'Bạn đang làm gì thế? — Mình đang nấu ăn.' },
          { t: '¿Diga? — Hola, soy Lan. ¿Está Pablo?', vi: 'A lô? — Chào anh, em là Lan. Pablo có nhà không ạ?' },
          { t: 'Un momento, ahora se pone.', vi: 'Chờ một chút, cậu ấy ra nghe máy ngay.' },
          { t: '¿Quieres venir al cine esta noche? — ¡Vale!', vi: 'Tối nay bạn muốn đi xem phim không? — Được đấy!' },
          { t: 'Lo siento, no puedo. Es que estoy estudiando para un examen.', vi: 'Tiếc quá, mình không đi được. Chả là mình đang ôn thi.' }
        ],
        tip: 'Đừng bỏ estar: "Yo cocinando" ✗ → "Estoy cocinando" ✓. Gerundio không đổi đuôi theo chủ ngữ: "Ellas están hablandas" ✗ → "Ellas están hablando" ✓. Thói quen thì dùng hiện tại đơn, không dùng estar + gerundio: "Todos los días estoy trabajando" ✗ → "Todos los días trabajo" ✓. Khi từ chối, người Tây Ban Nha hiếm khi chỉ nói "No" — hãy thêm Lo siento và một lý do với es que…'
      },
      dialogue: [
        { s: 'Javier', t: '¿Diga?', vi: 'A lô?' },
        { s: 'Lan', t: 'Hola, buenas tardes. ¿Está Ana, por favor?', vi: 'Chào anh ạ. Cho em hỏi Ana có nhà không ạ?' },
        { s: 'Javier', t: 'Sí, está en casa. ¿De parte de quién?', vi: 'Có, nó đang ở nhà. Ai gọi đấy?' },
        { s: 'Lan', t: 'Soy Lan, una amiga de clase.', vi: 'Em là Lan, bạn cùng lớp ạ.' },
        { s: 'Javier', t: 'Un momento… Lo siento, Lan, Ana se está duchando ahora mismo. ¿Quieres dejar un recado?', vi: 'Chờ chút nhé… Tiếc quá Lan ạ, Ana đang tắm. Em có muốn để lại lời nhắn không?' },
        { s: 'Lan', t: 'Sí, gracias. Tengo dos entradas para un concierto esta noche y quiero invitar a Ana.', vi: 'Vâng, cảm ơn anh. Em có hai vé xem hoà nhạc tối nay và muốn mời Ana.' },
        { s: 'Javier', t: 'Uy, esta noche Ana no puede. Es que trabaja en el restaurante de mi tío.', vi: 'Ôi, tối nay Ana không đi được. Chả là nó làm ở nhà hàng của chú anh.' },
        { s: 'Lan', t: '¡Qué pena! ¿Y tú? ¿Estás libre? ¿Por qué no vienes tú?', vi: 'Tiếc thật! Thế còn anh? Anh có rảnh không? Sao anh không đi nhỉ?' },
        { s: 'Javier', t: '¿Yo? ¡Claro! Me gusta mucho la música. ¿A qué hora quedamos?', vi: 'Anh á? Tất nhiên rồi! Anh rất thích âm nhạc. Mình hẹn mấy giờ?' },
        { s: 'Lan', t: 'A las ocho en la plaza Mayor. ¡Hasta luego!', vi: 'Tám giờ ở quảng trường Mayor nhé. Hẹn gặp lại anh!' }
      ],
      exercises: [
        { type: 'mc', q: '¿Qué estás ___? — Estoy leyendo un libro.', options: ['hacer', 'hace', 'haciendo', 'hago'], answer: 2,
          explain: 'Estar + gerundio: hacer → haciendo. ¿Qué estás haciendo? = Bạn đang làm gì?' },
        { type: 'fill', q: 'Ahora mismo nosotros ___ comiendo.', answer: ['estamos'], hint: 'estar, nosotros',
          explain: 'Chỉ chia estar theo chủ ngữ: nosotros → estamos; gerundio giữ nguyên.' },
        { type: 'order', vi: 'Ngay lúc này bạn đang làm gì?', words: ['estás', 'mismo?', '¿Qué', 'ahora', 'haciendo'],
          answer: '¿Qué estás haciendo ahora mismo?' },
        { type: 'mc', q: 'Gerundio của "leer" là:', options: ['leiendo', 'leyendo', 'leendo', 'leando'], answer: 1,
          explain: 'Gốc le- tận cùng bằng nguyên âm nên -iendo đổi thành -yendo: leyendo.' },
        { type: 'fill', q: 'Mi hermano está ___ una carta. (escribir)', answer: ['escribiendo'], hint: 'động từ -ir → -iendo',
          explain: 'Escribir là động từ -ir → escribiendo.' },
        { type: 'mc', q: 'Ở Tây Ban Nha, khi nhấc máy điện thoại, người ta thường nói:', options: ['¿Diga?', '¡Hasta luego!', '¿De dónde eres?', '¡Vale!'], answer: 0,
          explain: 'Người Tây Ban Nha nhấc máy nói ¿Diga?, ¿Dígame? hoặc ¿Sí?.' },
        { type: 'order', vi: 'Tối nay bạn có muốn đi xem phim không?', words: ['cine', '¿Quieres', 'noche?', 'ir', 'esta', 'al'],
          answer: '¿Quieres ir al cine esta noche?', alt: ['¿Quieres ir esta noche? al cine', 'esta noche? ¿Quieres ir al cine'] },
        { type: 'fill', q: '—¿Está Ana? —Sí. Un momento, ahora se ___.', answer: ['pone'], hint: 'ponerse: ra nghe máy',
          explain: 'Ahora se pone = (cô ấy) ra nghe máy ngay. Ponerse al teléfono = ra nghe điện thoại.' },
        { type: 'mc', q: 'Bạn muốn từ chối lời mời một cách lịch sự. Câu nào phù hợp?', options: ['¡Claro, perfecto!', '¡Vale, a las ocho!', '¡Qué buena idea!', 'Lo siento, no puedo. Es que estoy trabajando.'], answer: 3,
          explain: 'Từ chối lịch sự: Lo siento, no puedo + lý do với es que… Ba câu kia đều là nhận lời.' },
        { type: 'order', vi: 'Tiếc quá, mình không đi được, chả là mình đang học bài.', words: ['que', 'no', 'estudiando', 'siento,', 'Lo', 'es', 'estoy', 'puedo,'],
          answer: 'Lo siento, no puedo, es que estoy estudiando' },
        { type: 'fill', q: 'Mis padres están ___ la tele. (ver)', answer: ['viendo'], hint: 'ver → ?',
          explain: 'Ver là động từ -er → viendo.' },
        { type: 'mc', q: 'Gerundio của "dormir" là:', options: ['dormiendo', 'dormando', 'durmiendo', 'duermiendo'], answer: 2,
          explain: 'Động từ -ir đổi gốc o → u ở gerundio: dormir → durmiendo.' },
        { type: 'order', vi: 'Chờ một chút, cô ấy ra nghe máy ngay.', words: ['pone', 'ahora', 'momento,', 'se', 'Un'],
          answer: 'Un momento, ahora se pone', alt: ['Un momento, se pone ahora'] },
        { type: 'fill', q: 'Ana no está en casa. ¿Quieres dejar un ___?', answer: ['recado', 'mensaje'], hint: 'lời nhắn',
          explain: 'Dejar un recado = để lại lời nhắn (cũng nói dejar un mensaje).' },
        { type: 'mc', q: 'Bạn bè rủ: "¿Por qué no vamos a la playa el sábado?" Bạn đồng ý. Bạn nói:', options: ['Lo siento, no puedo.', '¡Vale! ¡Qué buena idea!', 'Es que estoy cansado.', 'Otro día, ¿vale?'], answer: 1,
          explain: '¡Vale! ¡Qué buena idea! = Được đấy! Ý hay quá! Các câu còn lại đều là từ chối.' },
        { type: 'order', vi: 'Mẹ tôi đang nấu ăn trong bếp.', words: ['cocina', 'está', 'madre', 'la', 'Mi', 'en', 'cocinando'],
          answer: 'Mi madre está cocinando en la cocina', alt: ['Mi madre está en la cocina cocinando'] }
      ],
      reading: {
        title: 'Una tarde de llamadas',
        titleVi: 'Một buổi chiều gọi điện',
        text: [
          'Hoy es viernes y Marta quiere invitar a sus amigos al cine esta noche. Tiene cinco entradas para una película nueva. Primero llama a Jorge. Él contesta enseguida, está libre y acepta la invitación: «¡Claro! ¡Qué buena idea!».',
          'Después llama a casa de Lucía. Contesta su madre: «¿Diga?». «Hola, soy Marta. ¿Está Lucía?». «Lo siento, Lucía está durmiendo. ¿Quieres dejar un recado?». Marta deja un recado y cuelga.',
          'Por último llama a Pedro y a Sara, pero los dos dicen que no pueden. Pedro está trabajando en la tienda de su padre y Sara está estudiando para un examen. «Otro día, ¿vale?», dice Sara. Al final, Marta va al cine con Jorge.'
        ],
        vi: [
          'Hôm nay là thứ Sáu và Marta muốn mời các bạn đi xem phim tối nay. Cô ấy có năm vé xem một bộ phim mới. Đầu tiên cô gọi cho Jorge. Cậu ấy nghe máy ngay, đang rảnh và nhận lời mời: «Tất nhiên rồi! Ý hay quá!».',
          'Sau đó cô gọi đến nhà Lucía. Mẹ Lucía nghe máy: «A lô?». «Cháu chào bác, cháu là Marta. Lucía có nhà không ạ?». «Tiếc quá, Lucía đang ngủ. Cháu có muốn để lại lời nhắn không?». Marta để lại lời nhắn rồi cúp máy.',
          'Cuối cùng cô gọi cho Pedro và Sara, nhưng cả hai đều nói không đi được. Pedro đang làm việc ở cửa hàng của bố, còn Sara đang ôn thi. «Để hôm khác nhé?», Sara nói. Cuối cùng, Marta đi xem phim với Jorge.'
        ],
        questions: [
          { q: 'Marta có bao nhiêu vé xem phim?', options: ['Hai', 'Ba', 'Bốn', 'Năm'], answer: 3,
            explain: 'Tiene cinco entradas para una película nueva.' },
          { q: 'Khi Marta gọi, Lucía đang làm gì?', options: ['Đang làm việc', 'Đang ngủ', 'Đang ôn thi', 'Đang nấu ăn'], answer: 1,
            explain: 'Lo siento, Lucía está durmiendo.' },
          { q: 'Ai nhận lời mời của Marta?', options: ['Lucía', 'Pedro', 'Jorge', 'Sara'], answer: 2,
            explain: 'Jorge… está libre y acepta la invitación.' },
          { q: 'Vì sao Sara không đi được?', options: ['Cô ấy đang ôn thi', 'Cô ấy đang ngủ', 'Cô ấy đang làm ở cửa hàng', 'Cô ấy không thích phim'], answer: 0,
            explain: 'Sara está estudiando para un examen.' }
        ]
      }
    }
  },

  // ───────────────────────── A2-2b ─────────────────────────
  {
    after: 'es-a2-2',
    unit: {
      id: 'es-a2-2b',
      icon: '👜',
      title: 'Đồ dùng cá nhân',
      goal: 'Gọi tên đồ dùng cá nhân, so sánh hai đồ vật hoặc hai người, và dùng lo / la / los / las để khỏi lặp lại tên đồ vật.',
      vocab: [
        { w: 'la cartera', ipa: 'la car-TÊ-ra', vi: 'cái ví (đựng tiền, thẻ)', ex: 'Mi cartera es negra y pequeña.', exVi: 'Ví của tôi màu đen và nhỏ.' },
        { w: 'el monedero', ipa: 'êl mô-nê-ĐÊ-rô', vi: 'ví đựng tiền xu', ex: 'Tengo poco dinero en el monedero.', exVi: 'Trong ví tiền xu tôi có ít tiền.' },
        { w: 'el bolso', ipa: 'êl BÔL-xô', vi: 'túi xách', ex: 'Tu bolso es más bonito que mi mochila.', exVi: 'Túi xách của bạn đẹp hơn ba lô của tôi.' },
        { w: 'las gafas', ipa: 'las GA-phas', vi: 'kính mắt', ex: 'No veo bien sin gafas.', exVi: 'Không có kính tôi không nhìn rõ.' },
        { w: 'los auriculares', ipa: 'lôs au-ri-cu-LA-rês', vi: 'tai nghe', ex: 'Escucho música con los auriculares.', exVi: 'Tôi nghe nhạc bằng tai nghe.' },
        { w: 'el cargador', ipa: 'êl car-ga-ĐÔR', vi: 'cục sạc, bộ sạc', ex: '¿Tienes un cargador para el móvil?', exVi: 'Bạn có sạc điện thoại không?' },
        { w: 'la gorra', ipa: 'la GÔ-rra', vi: 'mũ lưỡi trai', ex: 'En verano siempre llevo una gorra.', exVi: 'Mùa hè tôi luôn đội mũ lưỡi trai.' },
        { w: 'la bufanda', ipa: 'la bu-PHAN-đa', vi: 'khăn quàng cổ', ex: 'Hace frío; necesito mi bufanda.', exVi: 'Trời lạnh, tôi cần khăn quàng cổ.' },
        { w: 'el anillo', ipa: 'êl a-NI-giô', vi: 'chiếc nhẫn', ex: 'Mi abuela tiene un anillo muy antiguo.', exVi: 'Bà tôi có một chiếc nhẫn rất cổ.' },
        { w: 'los pendientes', ipa: 'lôs pên-đi-ÊN-tês', vi: 'khuyên tai, bông tai', ex: 'Estos pendientes son tan bonitos como el anillo.', exVi: 'Đôi khuyên tai này đẹp ngang chiếc nhẫn.' },
        { w: 'la pulsera', ipa: 'la pul-XÊ-ra', vi: 'vòng tay', ex: 'Esta pulsera es un regalo de mi hermana.', exVi: 'Chiếc vòng tay này là quà của chị tôi.' },
        { w: 'el cepillo de dientes', ipa: 'êl θê-PI-giô đê đi-ÊN-tês', vi: 'bàn chải đánh răng', ex: 'Siempre llevo un cepillo de dientes en el bolso.', exVi: 'Tôi luôn mang một chiếc bàn chải đánh răng trong túi xách.' },
        { w: 'el peine', ipa: 'êl PÊI-nê', vi: 'cái lược', ex: '¿Dónde está mi peine? No lo veo.', exVi: 'Lược của tôi đâu rồi? Tôi không thấy nó.' },
        { w: 'el portátil', ipa: 'êl pôr-TA-til', vi: 'máy tính xách tay', ex: 'Mi portátil es más ligero que el ordenador de mi padre.', exVi: 'Máy tính xách tay của tôi nhẹ hơn máy tính của bố tôi.' },
        { w: 'nuevo / nueva', ipa: 'NUÊ-bô / NUÊ-ba', vi: 'mới', ex: 'Mis gafas nuevas son mejores que las viejas.', exVi: 'Kính mới của tôi tốt hơn kính cũ.' },
        { w: 'ligero / ligera', ipa: 'li-KHÊ-rô / li-KHÊ-ra', vi: 'nhẹ', ex: 'Esta maleta es muy ligera.', exVi: 'Chiếc vali này rất nhẹ.' },
        { w: 'pesado / pesada', ipa: 'pê-XA-đô / pê-XA-đa', vi: 'nặng', ex: 'Tu mochila es más pesada que mi bolso.', exVi: 'Ba lô của bạn nặng hơn túi xách của tôi.' },
        { w: 'útil', ipa: 'U-til', vi: 'có ích, hữu ích', ex: 'Un cargador es muy útil en un viaje.', exVi: 'Cục sạc rất có ích khi đi xa.' },
        { w: 'buscar', ipa: 'bus-CAR', vi: 'tìm, tìm kiếm', ex: 'Busco mi cartera. ¿La ves?', exVi: 'Tôi đang tìm ví. Bạn có thấy nó không?' },
        { w: 'encontrar', ipa: 'ên-côn-TRAR', vi: 'tìm thấy', ex: '¿Las llaves? No las encuentro.', exVi: 'Chìa khoá à? Tôi không tìm thấy chúng.' }
      ],
      grammar: {
        title: 'So sánh hơn, kém, bằng; đại từ tân ngữ trực tiếp lo / la / los / las',
        explain: [
          'So sánh hơn: más + tính từ + que; so sánh kém: menos + tính từ + que. Tính từ vẫn hoà hợp giống và số với chủ ngữ: Esta bufanda es más bonita que esa. Mis auriculares son menos caros que tu cargador.',
          'So sánh bằng: tan + tính từ + como: Tu bolso es tan grande como mi mochila. Phủ định "không … bằng": no es tan … como: El monedero no es tan útil como la cartera. Bốn dạng đặc biệt, không dùng más: bueno → mejor (tốt hơn), malo → peor (tệ hơn), mayor (lớn tuổi hơn), menor (nhỏ tuổi hơn); khi nói kích thước thì vẫn dùng más grande, más pequeño. Số nhiều chỉ thêm -es: mejores, peores, mayores, menores.',
          'Đại từ tân ngữ trực tiếp thay cho đồ vật đã nhắc đến, để khỏi lặp lại: lo (giống đực, số ít), la (giống cái, số ít), los (giống đực, số nhiều), las (giống cái, số nhiều). Chúng đứng TRƯỚC động từ đã chia: ¿Tienes el cargador? — Sí, lo tengo. ¿Dónde están mis gafas? No las veo. Khi phủ định, no đứng trước đại từ: No lo encuentro.',
          'Với querer / poder + nguyên mẫu, đại từ đứng trước động từ chia HOẶC gắn vào cuối nguyên mẫu: La quiero comprar = Quiero comprarla. Còn câu "Me la llevo" ở bài Mua sắm: llevarse = mua lấy, mang đi; me là đại từ phản thân, la thay cho la camisa → "Tôi lấy chiếc áo này". Tương tự: ¿Los pendientes? Me los llevo.',
          '🌎 Mỹ Latinh: la billetera thay la cartera (ở vài nước, la cartera lại là túi xách nữ), los aretes thay los pendientes, los lentes hoặc los anteojos thay las gafas, la computadora portátil hoặc la laptop thay el portátil.'
        ],
        table: [
          ['Cấu trúc', 'Công thức', 'Ví dụ'],
          ['Hơn', 'más + tính từ + que', 'El bolso es más caro que la cartera.'],
          ['Kém', 'menos + tính từ + que', 'Este portátil es menos pesado que ese.'],
          ['Bằng', 'tan + tính từ + como', 'Tu anillo es tan bonito como mi pulsera.'],
          ['Dạng đặc biệt', 'mejor / peor / mayor / menor + que', 'Mi hermano es mayor que yo.'],
          ['Thay vật giống đực', 'lo / los + động từ', '¿El cargador? No lo encuentro.'],
          ['Thay vật giống cái', 'la / las + động từ', '¿Las gafas? Las tengo aquí.']
        ],
        examples: [
          { t: 'Este bolso es más grande que mi mochila, pero es menos bonito.', vi: 'Chiếc túi xách này to hơn ba lô của tôi, nhưng không đẹp bằng.' },
          { t: 'Los auriculares nuevos son mejores que los viejos.', vi: 'Tai nghe mới tốt hơn tai nghe cũ.' },
          { t: 'Mi hermana es menor que yo, pero es tan alta como yo.', vi: 'Em gái tôi nhỏ tuổi hơn tôi, nhưng cao bằng tôi.' },
          { t: '¿Dónde está mi cartera? No la encuentro.', vi: 'Ví của tôi đâu rồi? Tôi không tìm thấy nó.' },
          { t: '¿Te gustan estos pendientes? — Sí, me los llevo.', vi: 'Bạn thích đôi khuyên tai này không? — Có, tôi lấy đôi này.' }
        ],
        tip: 'Không nói "más mejor": "Es más mejor" ✗ → "Es mejor" ✓. So sánh hơn/kém đi với que, so sánh bằng đi với como: "más alto como" ✗, "tan alto que" ✗. Người Việt hay bỏ tân ngữ: "¿Tienes el cargador? — Sí, tengo" ✗ → "Sí, lo tengo" ✓. Chọn lo / la theo GIỐNG của danh từ tiếng Tây Ban Nha: la cartera → la, el bolso → lo.'
      },
      dialogue: [
        { s: 'Minh', t: 'Sofía, no encuentro mis gafas. ¿Las ves?', vi: 'Sofía ơi, mình không tìm thấy kính. Bạn có thấy nó không?' },
        { s: 'Sofía', t: 'Sí, están en la mesa, al lado del portátil.', vi: 'Có, nó ở trên bàn, cạnh cái máy tính xách tay.' },
        { s: 'Minh', t: '¡Gracias! Oye, para el viaje, ¿qué bolso es mejor, el negro o el marrón?', vi: 'Cảm ơn! Này, cho chuyến đi thì túi nào tốt hơn, cái đen hay cái nâu?' },
        { s: 'Sofía', t: 'El negro es más bonito, pero el marrón es más grande y menos pesado.', vi: 'Cái đen đẹp hơn, nhưng cái nâu to hơn và nhẹ hơn.' },
        { s: 'Minh', t: 'Entonces me llevo el marrón. ¿Y el cargador del móvil? No lo veo.', vi: 'Vậy mình mang cái nâu. Còn cục sạc điện thoại? Mình không thấy nó.' },
        { s: 'Sofía', t: 'Lo tengo yo, en mi mochila.', vi: 'Mình cầm nó đây, trong ba lô của mình.' },
        { s: 'Minh', t: 'Perfecto. ¿Necesito la bufanda?', vi: 'Tuyệt. Mình có cần khăn quàng không?' },
        { s: 'Sofía', t: 'Sí, en la montaña hace más frío que aquí. Y la gorra también.', vi: 'Có, trên núi lạnh hơn ở đây. Cả mũ lưỡi trai nữa.' },
        { s: 'Minh', t: '¡Vale! Las pongo en el bolso ahora mismo.', vi: 'Được! Mình bỏ chúng vào túi ngay đây.' }
      ],
      exercises: [
        { type: 'mc', q: 'Mi bolso es ___ grande que tu mochila.', options: ['más', 'tan', 'como', 'mejor'], answer: 0,
          explain: 'So sánh hơn: más + tính từ + que.' },
        { type: 'fill', q: 'El anillo es ___ caro que la pulsera. (kém hơn)', answer: ['menos'], hint: 'kém … hơn',
          explain: 'So sánh kém: menos + tính từ + que.' },
        { type: 'order', vi: 'Túi xách của tôi nặng hơn ví của bạn.', words: ['tu', 'es', 'pesado', 'Mi', 'que', 'más', 'cartera', 'bolso'],
          answer: 'Mi bolso es más pesado que tu cartera' },
        { type: 'mc', q: 'Esta bufanda es tan bonita ___ esa.', options: ['que', 'como', 'de', 'más'], answer: 1,
          explain: 'So sánh bằng: tan + tính từ + como.' },
        { type: 'fill', q: 'Estos auriculares son ___ ligeros como esos. (bằng)', answer: ['tan'], hint: '… como',
          explain: 'So sánh bằng: tan ligeros como.' },
        { type: 'order', vi: 'Anh trai tôi lớn tuổi hơn tôi.', words: ['que', 'hermano', 'yo', 'mayor', 'Mi', 'es'],
          answer: 'Mi hermano es mayor que yo' },
        { type: 'mc', q: 'Mi hermano tiene 20 años y yo tengo 25. Mi hermano es ___ que yo.', options: ['mayor', 'mejor', 'menor', 'peor'], answer: 2,
          explain: 'Ít tuổi hơn → menor.' },
        { type: 'fill', q: '¿Tienes el cargador? — Sí, ___ tengo en el bolso.', answer: ['lo'], hint: 'thay cho el cargador',
          explain: 'El cargador là giống đực số ít → lo, đứng trước động từ chia.' },
        { type: 'mc', q: '¿Dónde están mis gafas? No ___ encuentro.', options: ['lo', 'la', 'los', 'las'], answer: 3,
          explain: 'Las gafas là giống cái số nhiều → las.' },
        { type: 'order', vi: 'Chiếc kính này tốt hơn chiếc kia.', words: ['que', 'son', 'Estas', 'esas', 'mejores', 'gafas'],
          answer: 'Estas gafas son mejores que esas' },
        { type: 'fill', q: 'Me gusta esta gorra. ___ quiero comprar.', answer: ['la'], hint: 'thay cho la gorra',
          explain: 'La gorra là giống cái số ít → La quiero comprar (= Quiero comprarla).' },
        { type: 'mc', q: 'Chọn câu đúng: "Chiếc máy tính xách tay đó tốt hơn chiếc này."', options: ['Ese portátil es mejor que este.', 'Ese portátil es más mejor que este.', 'Ese portátil es mejor de este.', 'Ese portátil es tan mejor como este.'], answer: 0,
          explain: 'Bueno → mejor (không thêm más), và so sánh hơn đi với que.' },
        { type: 'order', vi: 'Chiếc khăn quàng này không đẹp bằng chiếc kia.', words: ['tan', 'bufanda', 'como', 'no', 'Esta', 'bonita', 'es', 'esa'],
          answer: 'Esta bufanda no es tan bonita como esa' },
        { type: 'fill', q: '¿Los auriculares? No ___ encuentro.', answer: ['los'], hint: 'thay cho los auriculares',
          explain: 'Los auriculares là giống đực số nhiều → los, đứng trước động từ chia.' },
        { type: 'mc', q: 'Bạn dùng gì để chải tóc?', options: ['el anillo', 'el peine', 'la gorra', 'el cargador'], answer: 1,
          explain: 'El peine = cái lược.' },
        { type: 'order', vi: 'Đôi khuyên tai này à? Tôi lấy đôi này.', words: ['los', 'pendientes?', 'llevo', '¿Estos', 'Me'],
          answer: '¿Estos pendientes? Me los llevo' }
      ],
      reading: {
        title: 'El bolso de Carmen',
        titleVi: 'Chiếc túi xách của Carmen',
        text: [
          'Carmen siempre lleva un bolso enorme. Dentro tiene muchas cosas: la cartera, el monedero, las gafas, los auriculares, un peine, un cepillo de dientes y el cargador del móvil. Su hermana Elena es menor que ella y prefiere una mochila pequeña. Dice que una mochila es más cómoda y menos pesada que un bolso.',
          'El problema es que, en un bolso tan grande, Carmen no encuentra nada. Ahora está en el autobús y busca sus gafas. Las busca debajo de la cartera, al lado del monedero… ¡y no las encuentra! ¿Dónde están? ¡En su cabeza!',
          'Hoy es el cumpleaños de Carmen y Elena tiene un regalo para ella: un bolso nuevo. Es más pequeño y más ligero que el viejo, pero es muy útil porque tiene muchos bolsillos. Carmen está muy contenta: «¡Es mucho mejor que mi bolso viejo!».'
        ],
        vi: [
          'Carmen lúc nào cũng mang một chiếc túi xách to tướng. Bên trong có rất nhiều thứ: ví, ví tiền xu, kính, tai nghe, một cái lược, một bàn chải đánh răng và cục sạc điện thoại. Em gái cô, Elena, nhỏ tuổi hơn và thích một chiếc ba lô nhỏ. Elena nói ba lô thoải mái hơn và nhẹ hơn túi xách.',
          'Vấn đề là trong một chiếc túi to như thế, Carmen chẳng tìm thấy gì. Bây giờ cô đang ở trên xe buýt và tìm kính. Cô tìm dưới cái ví, cạnh ví tiền xu… mà không thấy! Kính ở đâu? Ở trên đầu cô!',
          'Hôm nay là sinh nhật Carmen và Elena có quà cho chị: một chiếc túi xách mới. Nó nhỏ hơn và nhẹ hơn chiếc cũ, nhưng rất tiện vì có nhiều ngăn. Carmen rất vui: «Nó tốt hơn túi cũ của chị nhiều!».'
        ],
        questions: [
          { q: 'Elena là ai?', options: ['Chị gái của Carmen', 'Em gái của Carmen', 'Mẹ của Carmen', 'Bạn của Carmen'], answer: 1,
            explain: 'Su hermana Elena es menor que ella = em gái.' },
          { q: 'Vì sao Elena thích ba lô?', options: ['Vì nó đẹp hơn', 'Vì nó rẻ hơn', 'Vì nó thoải mái hơn và nhẹ hơn', 'Vì nó mới'], answer: 2,
            explain: 'Una mochila es más cómoda y menos pesada que un bolso.' },
          { q: 'Kính của Carmen ở đâu?', options: ['Trên đầu cô ấy', 'Trong ví', 'Trên xe buýt', 'Trong ba lô của Elena'], answer: 0,
            explain: '¿Dónde están? ¡En su cabeza!' },
          { q: 'Chiếc túi xách mới thế nào so với chiếc cũ?', options: ['To hơn', 'Nặng hơn', 'Rẻ hơn', 'Nhỏ hơn và nhẹ hơn'], answer: 3,
            explain: 'Es más pequeño y más ligero que el viejo.' }
        ]
      }
    }
  },

  // ───────────────────────── A2-3b ─────────────────────────
  {
    after: 'es-a2-3',
    unit: {
      id: 'es-a2-3b',
      icon: '🏫',
      title: 'Trường lớp & xin phép',
      goal: 'Ra lệnh, hướng dẫn và nhắc nhở với tú, vosotros, usted, ustedes (cả khẳng định lẫn phủ định), và xin phép một cách lịch sự ở trường lớp.',
      vocab: [
        { w: 'el colegio', ipa: 'êl cô-LÊ-khi-ô', vi: 'trường học (tiểu học)', ex: 'Mi hermano pequeño va al colegio en autobús.', exVi: 'Em trai tôi đi học bằng xe buýt.' },
        { w: 'el instituto', ipa: 'êl ins-ti-TU-tô', vi: 'trường trung học', ex: 'Estudio en un instituto cerca de casa.', exVi: 'Tôi học ở một trường trung học gần nhà.' },
        { w: 'el aula', ipa: 'êl AU-la', vi: 'phòng học', ex: 'El aula nueva es muy bonita.', exVi: 'Phòng học mới rất đẹp.' },
        { w: 'la pizarra', ipa: 'la pi-θA-rra', vi: 'cái bảng (lớp học)', ex: 'Escribe la fecha en la pizarra.', exVi: 'Em hãy viết ngày tháng lên bảng.' },
        { w: 'el examen', ipa: 'êl êc-XA-mên', vi: 'bài thi, kỳ thi', ex: 'El examen de inglés es el lunes.', exVi: 'Bài thi tiếng Anh vào thứ Hai.' },
        { w: 'el alumno / la alumna', ipa: 'êl a-LUM-nô / la a-LUM-na', vi: 'học sinh', ex: 'En mi clase hay veinte alumnos.', exVi: 'Lớp tôi có hai mươi học sinh.' },
        { w: 'la asignatura', ipa: 'la a-xig-na-TU-ra', vi: 'môn học', ex: '¿Cuál es tu asignatura favorita?', exVi: 'Môn học yêu thích của bạn là gì?' },
        { w: 'la nota', ipa: 'la NÔ-ta', vi: 'điểm số', ex: 'Tengo una buena nota en Matemáticas.', exVi: 'Tôi được điểm tốt môn Toán.' },
        { w: 'suspender', ipa: 'xus-pên-ĐÊR', vi: 'thi trượt, bị điểm không đạt', ex: 'No quiero suspender el examen.', exVi: 'Tôi không muốn thi trượt.' },
        { w: 'los deberes', ipa: 'lôs đê-BÊ-rês', vi: 'bài tập về nhà', ex: 'Haz los deberes antes de cenar.', exVi: 'Làm bài tập về nhà trước bữa tối đi.' },
        { w: 'el lápiz', ipa: 'êl LA-piθ', vi: 'bút chì', ex: 'Escribid con lápiz, no con bolígrafo.', exVi: 'Các em viết bằng bút chì, đừng viết bằng bút bi.' },
        { w: 'la goma', ipa: 'la GÔ-ma', vi: 'cục tẩy', ex: 'No tengo goma. ¿Puedo usar tu goma?', exVi: 'Mình không có tẩy. Mình dùng tẩy của bạn được không?' },
        { w: 'el recreo', ipa: 'êl rrê-CRÊ-ô', vi: 'giờ ra chơi', ex: 'En el recreo jugamos al fútbol.', exVi: 'Giờ ra chơi chúng tôi đá bóng.' },
        { w: 'la pregunta', ipa: 'la prê-GUN-ta', vi: 'câu hỏi', ex: 'Profesora, tengo una pregunta.', exVi: 'Thưa cô, em có một câu hỏi.' },
        { w: 'la página', ipa: 'la PA-khi-na', vi: 'trang (sách)', ex: 'Abrid el libro en la página treinta.', exVi: 'Các em mở sách ra trang ba mươi.' },
        { w: 'abrir', ipa: 'a-BRIR', vi: 'mở', ex: '¿Puedo abrir la ventana?', exVi: 'Em mở cửa sổ được không ạ?' },
        { w: 'cerrar', ipa: 'θê-RRAR', vi: 'đóng', ex: 'Cierra la puerta, por favor.', exVi: 'Làm ơn đóng cửa lại.' },
        { w: 'sentarse', ipa: 'xên-TAR-xê', vi: 'ngồi xuống', ex: 'Siéntate aquí, a mi lado.', exVi: 'Ngồi đây, cạnh mình này.' },
        { w: 'la respuesta', ipa: 'la rrês-PUÊS-ta', vi: 'câu trả lời', ex: 'Escribid la respuesta en el cuaderno.', exVi: 'Các em viết câu trả lời vào vở.' },
        { w: 'el permiso', ipa: 'êl pêr-MI-xô', vi: 'sự cho phép', ex: 'Con permiso, ¿puedo pasar?', exVi: 'Xin phép, em vào được không ạ?' }
      ],
      grammar: {
        title: 'Mệnh lệnh đầy đủ (tú, vosotros, usted, ustedes; khẳng định và phủ định); xin phép',
        explain: [
          'Ôn lại: mệnh lệnh khẳng định với tú = dạng él ở hiện tại: habla, come, escribe, cierra, abre. Có tám động từ bất quy tắc cần thuộc: poner → pon, hacer → haz, salir → sal, tener → ten, decir → di, ser → sé, ir → ve, venir → ven.',
          'Vosotros (khẳng định): đổi -r cuối nguyên mẫu thành -d: hablad, comed, escribid, haced, venid. Với động từ phản thân thì bỏ -d trước os: sentarse → sentaos, levantarse → levantaos. Usted / ustedes dùng nguyên âm "đảo": -ar → -e / -en, -er và -ir → -a / -an: hable / hablen, coma / coman, escriba / escriban, abra / abran. Động từ bất quy tắc ở ngôi yo giữ gốc đó: tengo → tenga, hago → haga, pongo → ponga, salgo → salga, digo → diga (chính là ¿Diga? khi nghe điện thoại); đổi gốc cũng giữ: cierre, siéntese. Ir → vaya, ser → sea.',
          'Phủ định (mọi ngôi) dùng no + dạng giống usted rồi thêm đuôi theo ngôi: tú → no hables, no comas, no escribas, no hagas; vosotros → no habléis, no comáis, no escribáis; usted → no hable, no use; ustedes → no hablen. Đây là dạng subjuntivo bạn sẽ học sau — bây giờ hãy thuộc như mẫu. Đại từ (te, se, os, lo, la…) GẮN VÀO SAU mệnh lệnh khẳng định, thêm dấu khi cần để giữ trọng âm: siéntate, siéntese, ábrelo, ciérrala (nhưng ponlo, hazlo không cần dấu); nhưng ĐỨNG TRƯỚC động từ khi phủ định: no te sientes, no lo abras.',
          'Xin phép cho mình: ¿Puedo + nguyên mẫu? (¿Puedo ir al baño?), cho cả nhóm: ¿Podemos salir al recreo? Hỏi quy định chung "ở đây có được … không": ¿Se puede + nguyên mẫu? (¿Se puede comer en el aula?). Trả lời đồng ý: Sí, claro / Por supuesto / Claro que sí; từ chối: Lo siento, no se puede / Ahora no.',
          '🌎 Mỹ Latinh: không dùng vosotros — nói với cả lớp luôn dùng ustedes: Siéntense, Abran el libro, No hablen. Bài tập về nhà là la tarea (thay cho los deberes), phòng học thường gọi là el salón de clase.'
        ],
        table: [
          ['Nguyên mẫu', 'tú', 'vosotros', 'usted', 'ustedes', 'phủ định (tú)'],
          ['hablar', 'habla', 'hablad', 'hable', 'hablen', 'no hables'],
          ['comer', 'come', 'comed', 'coma', 'coman', 'no comas'],
          ['escribir', 'escribe', 'escribid', 'escriba', 'escriban', 'no escribas'],
          ['abrir', 'abre', 'abrid', 'abra', 'abran', 'no abras'],
          ['cerrar', 'cierra', 'cerrad', 'cierre', 'cierren', 'no cierres'],
          ['hacer', 'haz', 'haced', 'haga', 'hagan', 'no hagas'],
          ['poner', 'pon', 'poned', 'ponga', 'pongan', 'no pongas'],
          ['salir', 'sal', 'salid', 'salga', 'salgan', 'no salgas'],
          ['decir', 'di', 'decid', 'diga', 'digan', 'no digas'],
          ['ir', 've', 'id', 'vaya', 'vayan', 'no vayas'],
          ['sentarse', 'siéntate', 'sentaos', 'siéntese', 'siéntense', 'no te sientes']
        ],
        examples: [
          { t: 'Abrid el libro en la página veinte, por favor.', vi: 'Các em mở sách ra trang hai mươi nhé.' },
          { t: 'Siéntate y haz los deberes.', vi: 'Ngồi xuống và làm bài tập về nhà đi.' },
          { t: 'No habléis durante el examen.', vi: 'Các em không được nói chuyện trong giờ thi.' },
          { t: 'Señor García, pase y siéntese, por favor.', vi: 'Mời ông García vào và ngồi ạ.' },
          { t: '¿Se puede comer en el aula? — Lo siento, no se puede.', vi: 'Trong phòng học có được ăn không ạ? — Rất tiếc, không được.' }
        ],
        tip: 'Phủ định KHÔNG dùng dạng khẳng định: "No habla" nghĩa là "anh ấy không nói", còn "đừng nói" là "No hables" ✓; "No sentaos" ✗ → "No os sentéis" ✓. Đại từ đổi chỗ khi phủ định: "Ábrelo" → "No lo abras" (không nói "No ábrelo"). Nhớ thêm dấu khi gắn đại từ (nếu trọng âm rơi vào âm tiết thứ ba từ cuối lên): siéntate, ábrelo, siéntese. Ở Tây Ban Nha, nhiều học sinh gọi thầy cô bằng tú, nhưng với người lạ lớn tuổi hoặc trong văn phòng, hãy dùng usted.'
      },
      dialogue: [
        { s: 'Profesora', t: 'Buenos días, chicos. Sentaos, por favor, y apagad los móviles.', vi: 'Chào các em. Các em ngồi xuống và tắt điện thoại đi nhé.' },
        { s: 'Tomás', t: 'Profesora, ¿puedo abrir la ventana? Hace mucho calor.', vi: 'Thưa cô, em mở cửa sổ được không ạ? Nóng quá.' },
        { s: 'Profesora', t: 'Sí, claro, ábrela. Pero no hagas ruido, por favor.', vi: 'Được chứ, em mở đi. Nhưng đừng làm ồn nhé.' },
        { s: 'Tomás', t: 'Gracias. ¿Y se puede beber agua en el aula?', vi: 'Em cảm ơn cô. Thế trong phòng học có được uống nước không ạ?' },
        { s: 'Profesora', t: 'Por supuesto. Bueno, hoy tenemos examen de Matemáticas. Sacad un lápiz y una goma.', vi: 'Tất nhiên rồi. Nào, hôm nay chúng ta thi môn Toán. Các em lấy bút chì và tẩy ra.' },
        { s: 'Tomás', t: '¿Podemos usar la calculadora?', vi: 'Chúng em có được dùng máy tính bỏ túi không ạ?' },
        { s: 'Profesora', t: 'No, lo siento, no se puede. Y no copiéis, ¿vale? Escribid vuestro nombre en la primera página.', vi: 'Không, rất tiếc là không được. Và đừng chép bài nhau nhé. Các em viết tên vào trang đầu tiên.' },
        { s: 'Tomás', t: '¿A qué hora es el recreo?', vi: 'Mấy giờ thì ra chơi ạ?' },
        { s: 'Profesora', t: 'A las once. Ahora, silencio: haced el examen y no habléis.', vi: 'Mười một giờ. Giờ thì trật tự: làm bài thi đi và không nói chuyện.' }
      ],
      exercises: [
        { type: 'mc', q: 'Mệnh lệnh của "hacer" với tú là:', options: ['hace', 'haga', 'haz', 'hago'], answer: 2,
          explain: 'Hacer là một trong tám động từ bất quy tắc: haz (haga là dạng usted).' },
        { type: 'fill', q: 'Pablo, ___ la puerta, por favor. (cerrar, tú)', answer: ['cierra'], hint: 'dạng él hiện tại, e → ie',
          explain: 'Mệnh lệnh tú = dạng él hiện tại: cerrar → cierra.' },
        { type: 'order', vi: 'Em đi vệ sinh được không ạ?', words: ['al', 'ir', 'baño?', '¿Puedo'],
          answer: '¿Puedo ir al baño?' },
        { type: 'mc', q: 'Cô giáo nói với cả lớp (vosotros): "___ el libro en la página diez."', options: ['Abrid', 'Abre', 'Abra', 'Abráis'], answer: 0,
          explain: 'Vosotros khẳng định: đổi -r thành -d → abrid. Abre là tú, abra là usted.' },
        { type: 'fill', q: 'Chicos, ___ en silencio, por favor. (sentarse, vosotros)', answer: ['sentaos'], hint: 'vosotros + os, bỏ -d',
          explain: 'Sentad + os → sentaos (bỏ -d trước os).' },
        { type: 'order', vi: 'Hãy viết câu trả lời của em lên bảng.', words: ['pizarra', 'en', 'tu', 'Escribe', 'respuesta', 'la'],
          answer: 'Escribe tu respuesta en la pizarra', alt: ['Escribe en la pizarra tu respuesta'] },
        { type: 'mc', q: 'Mời ông giám đốc (usted) ngồi: "___, por favor."', options: ['Siéntate', 'Siéntese', 'Sentaos', 'Se siente'], answer: 1,
          explain: 'Usted: siente + se gắn sau → siéntese (thêm dấu).' },
        { type: 'fill', q: 'No ___ el móvil en clase, Lucía. (usar, tú)', answer: ['uses'], hint: 'phủ định tú: -ar → -es',
          explain: 'Phủ định với tú: no + use + s → no uses.' },
        { type: 'mc', q: '"Đừng nói!" (với tú) là:', options: ['¡No habla!', '¡No hablas!', '¡No hablad!', '¡No hables!'], answer: 3,
          explain: 'Phủ định tú của hablar: no hables. "No habla" = anh ấy không nói.' },
        { type: 'order', vi: 'Các em không được nói chuyện trong giờ thi.', words: ['examen', 'habléis', 'el', 'No', 'durante'],
          answer: 'No habléis durante el examen', alt: ['durante el examen No habléis'] },
        { type: 'fill', q: 'Señora López, ___ aquí su nombre, por favor. (escribir, usted)', answer: ['escriba'], hint: 'usted: -ir → -a',
          explain: 'Usted, động từ -ir → escriba.' },
        { type: 'mc', q: '¿Se puede comer en el aula? — Lo siento, ___.', options: ['por supuesto', 'sí, claro', 'no se puede', 'puedes'], answer: 2,
          explain: 'Lo siento + từ chối: no se puede. Các phương án khác đều là đồng ý.' },
        { type: 'order', vi: 'Quyển sách à? Đừng gấp nó lại vội.', words: ['cierres', '¿El', 'lo', 'todavía', 'No', 'libro?'],
          answer: '¿El libro? No lo cierres todavía', alt: ['¿El libro? todavía No lo cierres'] },
        { type: 'fill', q: 'Mañana tengo un examen y hoy tengo muchos ___. (bài tập về nhà)', answer: ['deberes'], hint: 'los …',
          explain: 'Bài tập về nhà = los deberes (Mỹ Latinh: la tarea).' },
        { type: 'mc', q: 'Chọn câu ĐÚNG:', options: ['No ábrelo.', 'No abras lo.', 'Lo no abras.', 'No lo abras.'], answer: 3,
          explain: 'Khi phủ định, đại từ đứng trước động từ: no lo abras.' },
        { type: 'order', vi: 'Mời ông/bà ngồi xuống và mở sách ra.', words: ['libro', 'y', 'el', 'Siéntese', 'abra'],
          answer: 'Siéntese y abra el libro' }
      ],
      reading: {
        title: 'Normas de clase',
        titleVi: 'Nội quy lớp học',
        text: [
          'Me llamo Daniel y soy profesor de Historia en un instituto de Valencia. Hoy es el primer día de clase y escribo las normas en la pizarra: «Llegad a las ocho y media. Apagad el móvil en el aula. Haced los deberes en casa, no en el recreo».',
          '«No comáis en clase y no habléis durante los exámenes. Para hacer una pregunta, levantad la mano.» Los alumnos leen las normas y Marta pregunta: «Profesor, ¿podemos beber agua en clase?». «Sí, claro, agua sí se puede beber», contesto.',
          'Por la tarde hay una reunión con los padres. Les digo: «Revisen los deberes de sus hijos todas las tardes, pero no se preocupen mucho por las notas: lo importante es aprender».'
        ],
        vi: [
          'Tôi tên là Daniel và tôi là giáo viên môn Lịch sử ở một trường trung học tại Valencia. Hôm nay là ngày học đầu tiên và tôi viết nội quy lên bảng: «Các em đến lúc tám giờ rưỡi. Tắt điện thoại trong phòng học. Làm bài tập về nhà ở nhà, không làm trong giờ ra chơi».',
          '«Không ăn trong lớp và không nói chuyện trong giờ thi. Muốn đặt câu hỏi thì giơ tay.» Học sinh đọc nội quy và Marta hỏi: «Thưa thầy, chúng em có được uống nước trong lớp không ạ?». «Được chứ, nước thì được uống», tôi trả lời.',
          'Buổi chiều có buổi họp phụ huynh. Tôi nói với họ: «Quý vị hãy xem bài tập về nhà của con mỗi chiều, nhưng đừng quá lo về điểm số: điều quan trọng là học được».'
        ],
        questions: [
          { q: 'Daniel dạy môn gì?', options: ['Toán', 'Lịch sử', 'Tiếng Anh', 'Âm nhạc'], answer: 1,
            explain: 'Soy profesor de Historia.' },
          { q: 'Học sinh phải làm gì khi muốn đặt câu hỏi?', options: ['Đứng dậy', 'Hỏi bạn bên cạnh', 'Giơ tay', 'Viết lên bảng'], answer: 2,
            explain: 'Para hacer una pregunta, levantad la mano.' },
          { q: 'Trong lớp học sinh được phép làm gì?', options: ['Uống nước', 'Ăn', 'Dùng điện thoại', 'Nói chuyện khi thi'], answer: 0,
            explain: 'Agua sí se puede beber.' },
          { q: 'Daniel khuyên phụ huynh điều gì?', options: ['Đến trường lúc tám giờ rưỡi', 'Mua điện thoại cho con', 'Lo nhiều về điểm số', 'Xem bài tập về nhà của con mỗi chiều'], answer: 3,
            explain: 'Revisen los deberes de sus hijos todas las tardes.' }
        ]
      }
    }
  },

  {
    after: 'es-a2-4',
    unit: {
      id: 'es-a2-4b',
      icon: '🚲',
      title: 'Phương tiện: ngày xưa & bây giờ',
      goal: 'Kể về thói quen và miêu tả cuộc sống ngày xưa bằng thì pretérito imperfecto, so sánh với bây giờ và nói về các phương tiện đi lại.',
      vocab: [
        { w: 'el autobús', ipa: 'êl au-tô-BUS', vi: 'xe buýt', ex: 'Cojo el autobús todos los días a las ocho.', exVi: 'Ngày nào tôi cũng bắt xe buýt lúc tám giờ.' },
        { w: 'la bicicleta', ipa: 'la bi-θi-CLÊ-ta', vi: 'xe đạp', ex: 'Antes iba a todas partes en bicicleta.', exVi: 'Trước đây tôi đi đâu cũng bằng xe đạp.' },
        { w: 'la moto', ipa: 'la MÔ-tô', vi: 'xe máy', ex: 'En Vietnam mucha gente va al trabajo en moto.', exVi: 'Ở Việt Nam nhiều người đi làm bằng xe máy.' },
        { w: 'el taxi', ipa: 'êl TAC-xi', vi: 'taxi', ex: 'Cuando llueve, cojo un taxi.', exVi: 'Khi trời mưa, tôi bắt taxi.' },
        { w: 'el barco', ipa: 'êl BAR-cô', vi: 'tàu thuỷ, thuyền', ex: 'Antes la gente viajaba a América en barco.', exVi: 'Ngày xưa người ta đi châu Mỹ bằng tàu thuỷ.' },
        { w: 'el conductor / la conductora', ipa: 'êl côn-đuc-TÔR / la côn-đuc-TÔ-ra', vi: 'tài xế, người lái xe', ex: 'El conductor del autobús era muy simpático.', exVi: 'Bác tài xế xe buýt (hồi đó) rất dễ mến.' },
        { w: 'la parada', ipa: 'la pa-RA-đa', vi: 'trạm dừng, bến xe buýt', ex: 'La parada del autobús está enfrente de mi casa.', exVi: 'Trạm xe buýt ở đối diện nhà tôi.' },
        { w: 'conducir', ipa: 'côn-đu-θIR', vi: 'lái xe', ex: 'Mi padre conducía muy despacio.', exVi: 'Bố tôi (ngày trước) lái xe rất chậm.' },
        { w: 'coger', ipa: 'cô-KHÊR', vi: 'bắt, đi (xe, tàu…)', ex: '¿Coges el metro o el autobús para ir al trabajo?', exVi: 'Bạn đi tàu điện ngầm hay xe buýt để đi làm?' },
        { w: 'a pie', ipa: 'a pi-ê', vi: 'đi bộ (ir a pie)', ex: 'Antes iba al trabajo a pie.', exVi: 'Trước đây tôi đi bộ đến chỗ làm.' },
        { w: 'el carné de conducir', ipa: 'êl car-NÊ đê côn-đu-θIR', vi: 'bằng lái xe', ex: 'Para conducir un coche necesitas el carné de conducir.', exVi: 'Để lái ô tô bạn cần có bằng lái.' },
        { w: 'el atasco', ipa: 'êl a-TAS-cô', vi: 'tắc đường, kẹt xe', ex: 'Por la mañana siempre hay atascos en el centro.', exVi: 'Buổi sáng trung tâm lúc nào cũng tắc đường.' },
        { w: 'el pasajero / la pasajera', ipa: 'êl pa-xa-KHÊ-rô / la pa-xa-KHÊ-ra', vi: 'hành khách', ex: 'El autobús iba lleno de pasajeros.', exVi: 'Xe buýt (lúc đó) chật kín hành khách.' },
        { w: 'el casco', ipa: 'êl CAS-cô', vi: 'mũ bảo hiểm', ex: 'En moto, siempre llevo casco.', exVi: 'Đi xe máy, tôi luôn đội mũ bảo hiểm.' },
        { w: 'rápido / rápida', ipa: 'RRA-pi-đô / RRA-pi-đa', vi: 'nhanh', ex: 'La moto es más rápida que la bicicleta.', exVi: 'Xe máy nhanh hơn xe đạp.' },
        { w: 'lento / lenta', ipa: 'LÊN-tô / LÊN-ta', vi: 'chậm', ex: 'Antes los autobuses eran muy lentos.', exVi: 'Ngày trước xe buýt rất chậm.' },
        { w: 'antes', ipa: 'AN-tês', vi: 'trước đây, ngày xưa', ex: 'Antes vivía en un pueblo pequeño.', exVi: 'Trước đây tôi sống ở một ngôi làng nhỏ.' },
        { w: 'ahora', ipa: 'a-Ô-ra', vi: 'bây giờ', ex: 'Ahora vivo en Madrid y trabajo en el centro.', exVi: 'Bây giờ tôi sống ở Madrid và làm việc ở trung tâm.' },
        { w: 'de pequeño / de pequeña', ipa: 'đê pê-KÊ-nhô / đê pê-KÊ-nha', vi: 'hồi nhỏ', ex: 'De pequeña, veía mucho la televisión.', exVi: 'Hồi nhỏ, tôi (nữ) xem tivi rất nhiều.' },
        { w: 'el pueblo', ipa: 'êl PUÊ-blô', vi: 'làng, thị trấn nhỏ', ex: 'Mis abuelos vivían en un pueblo cerca del mar.', exVi: 'Ông bà tôi (ngày trước) sống ở một ngôi làng gần biển.' }
      ],
      grammar: {
        title: 'Thì quá khứ pretérito imperfecto: miêu tả và thói quen ngày xưa',
        explain: [
          'Pretérito imperfecto dùng để MIÊU TẢ quá khứ (mọi thứ ngày xưa ra sao) và nói về THÓI QUEN lặp đi lặp lại trong quá khứ — giống "ngày xưa tôi thường…", "hồi nhỏ tôi hay…" trong tiếng Việt: De pequeño, iba al colegio a pie (Hồi nhỏ, tôi thường đi bộ đến trường). El autobús era muy lento (Xe buýt hồi đó rất chậm).',
          'Cách chia rất đều: -ar → -aba, -abas, -aba, -ábamos, -abais, -aban; -er và -ir → -ía, -ías, -ía, -íamos, -íais, -ían. Ngôi yo và él / ella giống nhau (yo conducía / él conducía), nên khi cần hãy nói rõ chủ ngữ. Chỉ có BA động từ bất quy tắc: ser (era…), ir (iba…), ver (veía…). Hay (có) ở imperfecto là había: Antes no había atascos.',
          'Các cụm từ hay đi với imperfecto: antes (trước đây), de pequeño / de pequeña (hồi nhỏ), cuando era niño / niña (khi tôi còn bé), todos los días (hằng ngày), siempre, a menudo, a veces, normalmente. Để so sánh xưa và nay, dùng mẫu "Antes + imperfecto…, ahora + hiện tại…": Antes iba en autobús; ahora voy en bicicleta.',
          'Imperfecto khác indefinido (bài trước) thế nào? Indefinido kể một việc đã xảy ra MỘT LẦN và đã xong, ở thời điểm xác định: Ayer cogí un taxi (Hôm qua tôi bắt taxi). Imperfecto nói việc LẶP LẠI hoặc miêu tả bối cảnh: De pequeño, cogía el autobús todos los días. Bài b1-4 sẽ học kỹ cách phối hợp hai thì này.',
          '🌎 Mỹ Latinh: nói manejar thay conducir, tomar thay coger (ở nhiều nước, coger là từ tục — tránh dùng!). Ô tô là el carro, vé là el boleto. Ở México, el camión là xe buýt; ở vùng Caribe (Cuba, Puerto Rico…) và quần đảo Canarias, xe buýt là la guagua.'
        ],
        table: [
          ['Chủ ngữ', 'tomar (-ar)', 'coger (-er)', 'vivir (-ir)', 'ser', 'ir', 'ver'],
          ['yo', 'tomaba', 'cogía', 'vivía', 'era', 'iba', 'veía'],
          ['tú', 'tomabas', 'cogías', 'vivías', 'eras', 'ibas', 'veías'],
          ['él / ella / usted', 'tomaba', 'cogía', 'vivía', 'era', 'iba', 'veía'],
          ['nosotros', 'tomábamos', 'cogíamos', 'vivíamos', 'éramos', 'íbamos', 'veíamos'],
          ['vosotros', 'tomabais', 'cogíais', 'vivíais', 'erais', 'ibais', 'veíais'],
          ['ellos / ustedes', 'tomaban', 'cogían', 'vivían', 'eran', 'iban', 'veían']
        ],
        examples: [
          { t: 'De pequeño, iba al colegio en autobús.', vi: 'Hồi nhỏ, tôi đi học bằng xe buýt.' },
          { t: 'Cuando era niña, vivía en un pueblo y no había atascos.', vi: 'Khi tôi còn bé, tôi sống ở một ngôi làng và không có tắc đường.' },
          { t: 'Antes mi padre conducía un taxi; ahora trabaja en una tienda.', vi: 'Trước đây bố tôi lái taxi; bây giờ ông làm ở một cửa hàng.' },
          { t: 'Mis abuelos siempre viajaban en barco.', vi: 'Ông bà tôi ngày xưa luôn đi lại bằng tàu thuỷ.' },
          { t: 'Antes cogíamos el autobús, pero ahora vamos a pie.', vi: 'Trước đây chúng tôi đi xe buýt, nhưng bây giờ chúng tôi đi bộ.' }
        ],
        tip: 'Tiếng Việt không chia thì nên người Việt hay giữ nguyên thì hiện tại: "De pequeño voy al colegio a pie" ✗ → "De pequeño iba al colegio a pie" ✓. Ngược lại, việc xảy ra một lần thì dùng indefinido: "Hôm qua tôi bắt taxi" = "Ayer cogí un taxi", không phải "cogía". Nhớ dấu: -ábamos, -ía, -íamos. Hai động từ của bài có ngôi yo hiện tại đặc biệt: coger → cojo, conducir → conduzco.'
      },
      dialogue: [
        { s: 'Lucía', t: 'Abuelo, ¿cómo ibas al trabajo cuando eras joven?', vi: 'Ông ơi, hồi trẻ ông đi làm bằng gì ạ?' },
        { s: 'Abuelo', t: 'Iba en bicicleta. No tenía coche y el autobús era muy lento.', vi: 'Ông đi xe đạp. Ông không có ô tô, mà xe buýt thì chậm lắm.' },
        { s: 'Lucía', t: '¿Y no había atascos?', vi: 'Thế hồi đó không có tắc đường ạ?' },
        { s: 'Abuelo', t: '¡Qué va! Había muy pocos coches. Todos los días veía a mis amigos en la calle y hablábamos un rato.', vi: 'Làm gì có! Hồi đó rất ít ô tô. Ngày nào ông cũng gặp bạn bè ngoài đường và nói chuyện một lúc.' },
        { s: 'Lucía', t: 'Ahora yo cojo el autobús todos los días y siempre hay atascos.', vi: 'Bây giờ ngày nào cháu cũng bắt xe buýt và lúc nào cũng tắc đường.' },
        { s: 'Abuelo', t: '¿Por qué no vas a pie? Tu escuela está cerca.', vi: 'Sao cháu không đi bộ? Trường cháu ở gần mà.' },
        { s: 'Lucía', t: 'Es que llevo una mochila muy grande. Oye, abuelo, ¿tú tenías carné de conducir?', vi: 'Tại cháu mang ba lô to lắm. À ông ơi, ngày xưa ông có bằng lái không ạ?' },
        { s: 'Abuelo', t: 'Sí, pero lo saqué a los cuarenta años. Antes, en mi familia, solo conducía mi padre.', vi: 'Có, nhưng năm bốn mươi tuổi ông mới thi lấy bằng. Trước đó, trong nhà chỉ có bố ông lái xe.' },
        { s: 'Lucía', t: '¡Qué diferente era todo!', vi: 'Ngày xưa mọi thứ khác quá ông nhỉ!' },
        { s: 'Abuelo', t: 'Sí, pero yo era muy feliz con mi bicicleta.', vi: 'Ừ, nhưng ông đã rất hạnh phúc với chiếc xe đạp của mình.' }
      ],
      exercises: [
        { type: 'mc', q: 'De pequeño, yo ___ al colegio a pie.', options: ['voy', 'iba', 'iban', 'ibas'], answer: 1,
          explain: 'Thói quen hồi nhỏ → imperfecto; ir, ngôi yo → iba.' },
        { type: 'fill', q: 'Cuando era niña, mi madre ___ un taxi.', answer: ['conducía'], hint: 'conducir, imperfecto',
          explain: 'Động từ -ir, ngôi ella → -ía: conducía.' },
        { type: 'mc', q: 'Antes mis padres ___ en un pueblo.', options: ['viven', 'vivíamos', 'vivían', 'vivía'], answer: 2,
          explain: 'Mis padres = ellos; antes → imperfecto: vivían.' },
        { type: 'order', vi: 'Hồi nhỏ, tôi đi học bằng xe buýt.', words: ['autobús', 'De', 'al', 'iba', 'pequeño,', 'colegio', 'en'],
          answer: 'De pequeño, iba al colegio en autobús', alt: ['De pequeño, iba en autobús al colegio', 'iba al colegio en autobús De pequeño,', 'iba en autobús al colegio De pequeño,'] },
        { type: 'fill', q: 'Antes nosotros ___ en bicicleta al trabajo.', answer: ['íbamos'], hint: 'ir, imperfecto',
          explain: 'Ir là bất quy tắc: iba, ibas, iba, íbamos… Ngôi nosotros → íbamos (có dấu ở í).' },
        { type: 'mc', q: 'Para conducir un coche necesitas ___.', options: ['la parada', 'el casco', 'el atasco', 'el carné de conducir'], answer: 3,
          explain: 'Muốn lái ô tô cần bằng lái = el carné de conducir.' },
        { type: 'fill', q: 'De pequeños, mis primos y yo ___ muy buenos amigos.', answer: ['éramos'], hint: 'ser, imperfecto',
          explain: 'Mis primos y yo = nosotros; ser ở imperfecto → éramos.' },
        { type: 'order', vi: 'Trước đây chúng tôi đi bộ đến trường.', words: ['pie', 'íbamos', 'al', 'Antes', 'a', 'colegio'],
          answer: 'Antes íbamos al colegio a pie', alt: ['Antes íbamos a pie al colegio'] },
        { type: 'mc', q: 'Cuando éramos niños, ___ la tele todos los días.', options: ['veíamos', 'vemos', 'víamos', 'veíais'], answer: 0,
          explain: 'Ver là bất quy tắc: veía, veías… Ngôi nosotros → veíamos (không phải "víamos").' },
        { type: 'fill', q: 'Antes no ___ tantos coches en mi ciudad.', answer: ['había'], hint: 'hay, imperfecto',
          explain: 'Hay (có) ở imperfecto là había, cũng chỉ có một dạng.' },
        { type: 'order', vi: 'Trước đây không có tắc đường.', words: ['había', 'Antes', 'atascos', 'no'],
          answer: 'Antes no había atascos', alt: ['no había atascos Antes'] },
        { type: 'mc', q: 'Ayer ___ un taxi porque llovía mucho.', options: ['cogía', 'cojo', 'cogí', 'cogíais'], answer: 2,
          explain: 'Ayer + việc xảy ra một lần → indefinido: cogí. "Llovía" là imperfecto vì miêu tả bối cảnh.' },
        { type: 'fill', q: 'Espero el autobús en la ___.', answer: ['parada'], hint: 'trạm dừng',
          explain: 'Trạm xe buýt = la parada (del autobús).' },
        { type: 'order', vi: 'Ông tôi (ngày xưa) làm việc trên một con tàu.', words: ['barco', 'abuelo', 'un', 'trabajaba', 'Mi', 'en'],
          answer: 'Mi abuelo trabajaba en un barco' },
        { type: 'mc', q: 'Ở México, câu "Tomo el camión a las ocho" nghĩa là:', options: ['Tôi lái xe tải lúc tám giờ.', 'Tôi bắt xe buýt lúc tám giờ.', 'Tôi bắt taxi lúc tám giờ.', 'Tôi đi bộ lúc tám giờ.'], answer: 1,
          explain: 'Ở México, el camión = xe buýt và tomar = bắt (xe), tương đương "Cojo el autobús" ở Tây Ban Nha.' },
        { type: 'order', vi: 'Khi tôi (nữ) còn bé, tôi sống ở một ngôi làng.', words: ['pueblo', 'era', 'Cuando', 'vivía', 'niña,', 'un', 'en'],
          answer: 'Cuando era niña, vivía en un pueblo', alt: ['vivía en un pueblo Cuando era niña,'] }
      ],
      reading: {
        title: 'Hanói, antes y ahora',
        titleVi: 'Hà Nội, xưa và nay',
        text: [
          'Me llamo Hoa y vivo en Hanói. Cuando era niña, mi familia vivía en un pueblo cerca de la ciudad. No teníamos coche: mi padre tenía una moto vieja y mi madre iba al mercado en bicicleta. Yo iba a la escuela a pie con mis amigos todos los días.',
          'Los domingos, a veces cogíamos el autobús para visitar a mis abuelos en Hanói. El autobús era muy lento y siempre iba lleno de pasajeros, pero a mí me gustaba mucho mirar la ciudad por la ventana.',
          'Ahora todo es diferente. Hay muchos coches y motos, y por la mañana siempre hay atascos. Tengo el carné de conducir, pero casi nunca conduzco: normalmente cojo el metro o un taxi. ¡Antes la vida era más tranquila!'
        ],
        vi: [
          'Tôi tên là Hoa và tôi sống ở Hà Nội. Khi tôi còn bé, gia đình tôi sống ở một ngôi làng gần thành phố. Nhà tôi không có ô tô: bố tôi có một chiếc xe máy cũ và mẹ tôi đi chợ bằng xe đạp. Ngày nào tôi cũng đi bộ đến trường cùng các bạn.',
          'Vào các ngày Chủ nhật, thỉnh thoảng chúng tôi bắt xe buýt lên Hà Nội thăm ông bà. Xe buýt chạy rất chậm và lúc nào cũng chật kín hành khách, nhưng tôi rất thích ngắm thành phố qua cửa sổ.',
          'Bây giờ mọi thứ đã khác. Có rất nhiều ô tô và xe máy, và buổi sáng lúc nào cũng tắc đường. Tôi có bằng lái xe nhưng hầu như không bao giờ lái: tôi thường đi tàu điện ngầm hoặc taxi. Ngày xưa cuộc sống yên bình hơn!'
        ],
        questions: [
          { q: 'Hồi nhỏ Hoa đi học bằng cách nào?', options: ['Bằng xe máy', 'Bằng xe buýt', 'Đi bộ', 'Bằng xe đạp'], answer: 2,
            explain: 'Yo iba a la escuela a pie con mis amigos todos los días.' },
          { q: 'Mẹ Hoa đi chợ bằng gì?', options: ['Xe đạp', 'Xe máy', 'Xe buýt', 'Taxi'], answer: 0,
            explain: 'Mi madre iba al mercado en bicicleta.' },
          { q: 'Hoa thích điều gì khi đi xe buýt?', options: ['Nói chuyện với hành khách', 'Ngồi cạnh tài xế', 'Ngủ trên xe', 'Ngắm thành phố qua cửa sổ'], answer: 3,
            explain: 'A mí me gustaba mucho mirar la ciudad por la ventana.' },
          { q: 'Bây giờ Hoa thường đi lại thế nào?', options: ['Tự lái ô tô', 'Đi tàu điện ngầm hoặc taxi', 'Đi xe đạp', 'Đi bộ'], answer: 1,
            explain: 'Casi nunca conduzco: normalmente cojo el metro o un taxi.' }
        ]
      }
    }
  },
  {
    after: 'es-a2-5',
    unit: {
      id: 'es-a2-5b',
      icon: '🩹',
      title: 'Cơ thể & hôm nay',
      goal: 'Gọi tên các bộ phận cơ thể, hỏi thăm khi ai đó bị ngã hay bị thương và kể những việc đã làm hôm nay bằng thì pretérito perfecto.',
      vocab: [
        { w: 'la mano', ipa: 'la MA-nô', vi: 'bàn tay', ex: 'Me he lavado las manos antes de comer.', exVi: 'Tôi đã rửa tay trước khi ăn.' },
        { w: 'el brazo', ipa: 'êl BRA-θô', vi: 'cánh tay', ex: 'Hoy he nadado mucho y tengo los brazos cansados.', exVi: 'Hôm nay tôi bơi nhiều nên hai cánh tay mỏi nhừ.' },
        { w: 'la pierna', ipa: 'la pi-ÊR-na', vi: 'chân (cẳng chân)', ex: 'Esta tarde he corrido diez kilómetros y tengo las piernas cansadas.', exVi: 'Chiều nay tôi đã chạy mười cây số và hai chân mỏi rã.' },
        { w: 'el pie', ipa: 'êl pi-ê', vi: 'bàn chân', ex: 'Juego al fútbol con el pie izquierdo.', exVi: 'Tôi đá bóng bằng chân trái.' },
        { w: 'el dedo', ipa: 'êl ĐÊ-đô', vi: 'ngón tay, ngón chân', ex: 'Tenemos cinco dedos en cada mano.', exVi: 'Mỗi bàn tay chúng ta có năm ngón.' },
        { w: 'la boca', ipa: 'la BÔ-ca', vi: 'miệng', ex: 'Abre la boca, por favor.', exVi: 'Làm ơn há miệng ra.' },
        { w: 'la nariz', ipa: 'la na-RIθ', vi: 'mũi', ex: 'Tiene la nariz roja porque hace frío.', exVi: 'Mũi cậu ấy đỏ vì trời lạnh.' },
        { w: 'la oreja', ipa: 'la ô-RÊ-kha', vi: 'tai', ex: 'Mi perro tiene las orejas muy grandes.', exVi: 'Con chó của tôi có đôi tai rất to.' },
        { w: 'el cuello', ipa: 'êl QUÊ-giô', vi: 'cổ', ex: 'Ponte la bufanda en el cuello, hace mucho frío.', exVi: 'Quàng khăn vào cổ đi, trời lạnh lắm.' },
        { w: 'la cara', ipa: 'la CA-ra', vi: 'mặt, khuôn mặt', ex: 'Me lavo la cara con agua fría.', exVi: 'Tôi rửa mặt bằng nước lạnh.' },
        { w: 'el diente', ipa: 'êl đi-ÊN-tê', vi: 'răng', ex: 'Me lavo los dientes después de comer.', exVi: 'Tôi đánh răng sau khi ăn.' },
        { w: 'el cuerpo', ipa: 'êl QUÊR-pô', vi: 'cơ thể', ex: 'Nadar es bueno para todo el cuerpo.', exVi: 'Bơi lội tốt cho toàn bộ cơ thể.' },
        { w: 'caerse', ipa: 'ca-ÊR-xê', vi: 'ngã, té', ex: 'Me he caído de la bicicleta.', exVi: 'Tôi bị ngã xe đạp.' },
        { w: 'romperse', ipa: 'rrôm-PÊR-xê', vi: 'bị gãy, bị vỡ', ex: 'Pablo se ha roto la pierna en el partido.', exVi: 'Pablo bị gãy chân trong trận đấu.' },
        { w: 'hacerse daño', ipa: 'a-θÊR-xê ĐA-nhô', vi: 'bị đau, bị thương', ex: '¿Te has hecho daño? — No, estoy bien.', exVi: 'Bạn có bị đau không? — Không, mình ổn.' },
        { w: 'pasar', ipa: 'pa-XAR', vi: 'xảy ra (¿Qué te ha pasado? = Bạn bị sao thế?)', ex: '¿Qué te ha pasado en la mano?', exVi: 'Tay bạn bị làm sao thế?' },
        { w: 'ya', ipa: 'gia', vi: 'rồi, đã… rồi', ex: 'Ya he desayunado, gracias.', exVi: 'Mình ăn sáng rồi, cảm ơn.' },
        { w: 'todavía no', ipa: 'tô-đa-BI-a nô', vi: 'vẫn chưa', ex: 'Todavía no he visto la película.', exVi: 'Tôi vẫn chưa xem bộ phim đó.' },
        { w: 'esta mañana', ipa: 'ÊS-ta ma-NHA-na', vi: 'sáng nay', ex: 'Esta mañana he ido al gimnasio.', exVi: 'Sáng nay tôi đã đi tập gym.' },
        { w: 'la tirita', ipa: 'la ti-RI-ta', vi: 'băng cá nhân, băng dán vết thương', ex: 'Ponte una tirita en el dedo.', exVi: 'Dán băng cá nhân vào ngón tay đi.' }
      ],
      grammar: {
        title: 'Pretérito perfecto: haber + participio (việc đã làm hôm nay)',
        explain: [
          'Pretérito perfecto dùng cho việc đã xảy ra trong một khoảng thời gian CHƯA kết thúc, còn gắn với lúc nói: hoy (hôm nay), esta mañana (sáng nay), esta tarde, esta semana, este mes, este año. Nó cũng đi với ya (rồi), todavía no (vẫn chưa) và nunca: Hoy he corrido cinco kilómetros. Todavía no he comido.',
          'Cách tạo: haber chia theo chủ ngữ (he, has, ha, hemos, habéis, han) + participio. Participio: -ar → -ado (jugar → jugado), -er / -ir → -ido (correr → corrido, salir → salido). Participio luôn giữ đuôi -o, không đổi theo chủ ngữ: Ella ha jugado, ellos han jugado.',
          'Participio bất quy tắc hay gặp: hacer → hecho, ver → visto, romper → roto, poner → puesto, escribir → escrito, volver → vuelto, decir → dicho. Với động từ phản thân, đại từ đứng TRƯỚC haber: me he caído, te has hecho daño, se ha roto el brazo. Chú ý caer → caído (có dấu).',
          'Hỏi thăm khi ai đó bị thương: ¿Qué te ha pasado? → Me he caído. / Me he hecho daño en + bộ phận (Me he hecho daño en el pie). / Me he roto + el / la (hoặc un / una) + bộ phận (Me he roto el brazo, Me he roto un dedo). Phân biệt với indefinido: ayer, el sábado pasado → indefinido (Ayer corrí); hoy, esta semana → perfecto (Hoy he corrido). Đây là chuẩn Tây Ban Nha.',
          '🌎 Mỹ Latinh: ở hầu hết các nước, người ta dùng indefinido cả khi nói về hôm nay: "Hoy me caí", "¿Qué te pasó?". Perfecto ít dùng hơn. Băng cá nhân ở Mỹ Latinh thường gọi là la curita.'
        ],
        table: [
          ['Chủ ngữ', 'haber', 'jugar (-ado)', 'correr (-ido)', 'hacer (bất quy tắc)', 'caerse (phản thân)'],
          ['yo', 'he', 'he jugado', 'he corrido', 'he hecho', 'me he caído'],
          ['tú', 'has', 'has jugado', 'has corrido', 'has hecho', 'te has caído'],
          ['él / ella / usted', 'ha', 'ha jugado', 'ha corrido', 'ha hecho', 'se ha caído'],
          ['nosotros', 'hemos', 'hemos jugado', 'hemos corrido', 'hemos hecho', 'nos hemos caído'],
          ['vosotros', 'habéis', 'habéis jugado', 'habéis corrido', 'habéis hecho', 'os habéis caído'],
          ['ellos / ustedes', 'han', 'han jugado', 'han corrido', 'han hecho', 'se han caído']
        ],
        examples: [
          { t: 'Hoy he corrido cinco kilómetros.', vi: 'Hôm nay tôi đã chạy năm cây số.' },
          { t: '¿Qué te ha pasado? — Me he caído de la bicicleta.', vi: 'Bạn bị sao thế? — Mình bị ngã xe đạp.' },
          { t: 'Esta semana mi hermano se ha roto un dedo.', vi: 'Tuần này em trai tôi bị gãy một ngón tay.' },
          { t: '¿Ya has visto el partido? — No, todavía no.', vi: 'Bạn xem trận đấu chưa? — Chưa, vẫn chưa.' },
          { t: 'Ayer jugué al tenis, pero hoy no he jugado.', vi: 'Hôm qua tôi chơi quần vợt, nhưng hôm nay thì chưa chơi.' }
        ],
        tip: 'Ba lỗi hay gặp: (1) quên haber: "Hoy corrido" ✗ → "Hoy he corrido" ✓; (2) đặt đại từ sai chỗ: "He me caído" ✗ → "Me he caído" ✓ (không chen gì vào giữa haber và participio); (3) chia participio theo quy tắc cho động từ bất quy tắc: "He hacido" ✗ → "He hecho" ✓. Ngoài ra, với bộ phận cơ thể, tiếng Tây Ban Nha dùng el / la chứ không dùng mi: "Me he roto mi brazo" ✗ → "Me he roto el brazo" ✓.'
      },
      dialogue: [
        { s: 'Carmen', t: '¡Hola, Nam! ¿Qué te ha pasado? ¿Por qué llevas una tirita en la cara?', vi: 'Chào Nam! Bạn bị sao thế? Sao lại dán băng cá nhân trên mặt?' },
        { s: 'Nam', t: 'Esta mañana he ido a correr al parque y me he caído.', vi: 'Sáng nay mình đi chạy ở công viên và bị ngã.' },
        { s: 'Carmen', t: '¡Vaya! ¿Te has hecho daño?', vi: 'Trời! Bạn có bị đau không?' },
        { s: 'Nam', t: 'Un poco. Me he hecho daño en la mano y en el pie, pero no es nada.', vi: 'Hơi hơi. Mình bị đau ở tay và ở chân, nhưng không sao đâu.' },
        { s: 'Carmen', t: '¿Has ido al médico?', vi: 'Bạn đã đi khám chưa?' },
        { s: 'Nam', t: 'No, todavía no. Pero ya me he puesto hielo en el pie.', vi: 'Chưa, vẫn chưa. Nhưng mình đã chườm đá vào chân rồi.' },
        { s: 'Carmen', t: 'Ayer yo también me caí en el partido de baloncesto. ¡Esta semana hemos tenido mala suerte!', vi: 'Hôm qua mình cũng bị ngã trong trận bóng rổ. Tuần này bọn mình xui thật!' },
        { s: 'Nam', t: '¡Es verdad! ¿Y hoy has jugado?', vi: 'Đúng thế! Thế hôm nay bạn có chơi không?' },
        { s: 'Carmen', t: 'No, hoy he descansado. Descansa tú también y no corras mañana.', vi: 'Không, hôm nay mình nghỉ. Bạn cũng nghỉ đi, mai đừng chạy nhé.' },
        { s: 'Nam', t: 'Vale, mañana no corro. ¡Gracias, Carmen!', vi: 'Ừ, mai mình không chạy. Cảm ơn Carmen nhé!' }
      ],
      exercises: [
        { type: 'mc', q: 'Hoy yo ___ cinco kilómetros.', options: ['he corrido', 'ha corrido', 'he correado', 'has corrido'], answer: 0,
          explain: 'Ngôi yo → he; correr (-er) → corrido.' },
        { type: 'fill', q: 'Todavía no he ___ la cama.', answer: ['hecho'], hint: 'hacer, participio',
          explain: 'Hacer có participio bất quy tắc: hecho (không phải "hacido").' },
        { type: 'mc', q: '¿Qué te ___ pasado?', options: ['has', 'ha', 'he', 'han'], answer: 1,
          explain: 'Chủ ngữ là "qué" (cái gì) → ngôi ba số ít: ha. "Te" là người bị ảnh hưởng.' },
        { type: 'order', vi: 'Hôm nay tôi đã chạy năm cây số.', words: ['kilómetros', 'corrido', 'Hoy', 'cinco', 'he'],
          answer: 'Hoy he corrido cinco kilómetros', alt: ['he corrido cinco kilómetros Hoy'] },
        { type: 'fill', q: '¿Habéis ___ el partido de hoy?', answer: ['visto'], hint: 'ver, participio',
          explain: 'Ver có participio bất quy tắc: visto.' },
        { type: 'mc', q: 'Esta semana he ___ una carta a mi abuela.', options: ['escribido', 'escribí', 'escrito', 'escrita'], answer: 2,
          explain: 'Escribir → escrito (bất quy tắc). Sau haber, participio luôn giữ đuôi -o.' },
        { type: 'order', vi: 'Bạn bị sao thế?', words: ['pasado?', 'te', '¿Qué', 'ha'],
          answer: '¿Qué te ha pasado?' },
        { type: 'fill', q: 'Mi hermano se ha ___ el brazo.', answer: ['roto'], hint: 'romper, participio',
          explain: 'Romper → roto (bất quy tắc): se ha roto el brazo = bị gãy tay.' },
        { type: 'mc', q: 'Comemos con la ___.', options: ['oreja', 'nariz', 'pierna', 'boca'], answer: 3,
          explain: 'Ăn bằng miệng = la boca.' },
        { type: 'order', vi: 'Sáng nay tôi bị ngã ở công viên.', words: ['caído', 'parque', 'Esta', 'me', 'el', 'mañana', 'he', 'en'],
          answer: 'Esta mañana me he caído en el parque', alt: ['Esta mañana en el parque me he caído', 'me he caído en el parque Esta mañana'] },
        { type: 'fill', q: 'Tenemos diez ___ en las manos.', answer: ['dedos'], hint: 'ngón tay (số nhiều)',
          explain: 'Ngón tay = el dedo → số nhiều: los dedos.' },
        { type: 'mc', q: 'Câu nào đúng?', options: ['He me caído de la bicicleta.', 'Me caído he de la bicicleta.', 'Me he caído de la bicicleta.', 'Me ha caído de la bicicleta.'], answer: 2,
          explain: 'Đại từ phản thân đứng trước haber, ngôi yo: me he caído.' },
        { type: 'order', vi: 'Tôi vẫn chưa ăn sáng.', words: ['desayunado', 'no', 'Todavía', 'he'],
          answer: 'Todavía no he desayunado', alt: ['no he desayunado Todavía'] },
        { type: 'fill', q: '¿Has comido? — No, ___ no.', answer: ['todavía', 'aún'], hint: 'vẫn chưa',
          explain: 'Vẫn chưa = todavía no (cũng nói aún no).' },
        { type: 'mc', q: 'Ayer ___ al fútbol con mis amigos.', options: ['he jugado', 'jugué', 'juego', 'has jugado'], answer: 1,
          explain: 'Ayer (thời gian đã kết thúc) → indefinido: jugué. Perfecto dùng với hoy, esta semana…' },
        { type: 'order', vi: 'Anh ấy bị đau ở chân.', words: ['en', 'daño', 'Se', 'pierna', 'hecho', 'la', 'ha'],
          answer: 'Se ha hecho daño en la pierna' }
      ],
      reading: {
        title: 'Mi primera carrera',
        titleVi: 'Cuộc đua đầu tiên của tôi',
        text: [
          'Hoy ha sido un día especial: he corrido mi primera carrera de diez kilómetros. Me he levantado a las seis, he desayunado poco y he ido al parque con mi amiga Elena. Hacía fresco y había mucha gente.',
          'Los primeros cinco kilómetros han sido fáciles, pero en el kilómetro siete me he caído. Me he hecho daño en la mano y en la pierna. Elena me ha ayudado y un señor me ha puesto una tirita.',
          'Al final he llegado en cuarenta y ocho minutos. ¡Estoy muy contento! El año pasado no podía correr ni dos kilómetros. Ahora tengo todo el cuerpo cansado y todavía no he comido. Esta tarde descanso en casa.'
        ],
        vi: [
          'Hôm nay là một ngày đặc biệt: tôi đã chạy cuộc đua mười cây số đầu tiên của mình. Tôi dậy lúc sáu giờ, ăn sáng ít và đến công viên cùng bạn tôi là Elena. Trời mát và có rất đông người.',
          'Năm cây số đầu khá dễ, nhưng đến cây số thứ bảy thì tôi bị ngã. Tôi bị đau ở tay và ở chân. Elena đã giúp tôi và một ông đã dán cho tôi miếng băng cá nhân.',
          'Cuối cùng tôi về đích sau bốn mươi tám phút. Tôi vui lắm! Năm ngoái tôi còn không chạy nổi hai cây số. Bây giờ toàn thân tôi mỏi nhừ và tôi vẫn chưa ăn gì. Chiều nay tôi nghỉ ở nhà.'
        ],
        questions: [
          { q: 'Hôm nay người viết đã làm gì đặc biệt?', options: ['Chạy cuộc đua 10 km đầu tiên', 'Chơi một trận bóng đá', 'Đi bơi với Elena', 'Đi khám bác sĩ'], answer: 0,
            explain: 'He corrido mi primera carrera de diez kilómetros.' },
          { q: 'Người viết bị ngã ở cây số thứ mấy?', options: ['Cây số thứ năm', 'Cây số thứ mười', 'Cây số thứ bảy', 'Cây số thứ hai'], answer: 2,
            explain: 'En el kilómetro siete me he caído.' },
          { q: 'Ai đã dán băng cá nhân cho người viết?', options: ['Elena', 'Một bác sĩ', 'Mẹ của người viết', 'Một người đàn ông'], answer: 3,
            explain: 'Un señor me ha puesto una tirita.' },
          { q: 'Bây giờ người viết thế nào?', options: ['Đã ăn trưa xong', 'Toàn thân mỏi và vẫn chưa ăn gì', 'Bị đau đầu', 'Muốn chạy tiếp'], answer: 1,
            explain: 'Ahora tengo todo el cuerpo cansado y todavía no he comido.' }
        ]
      }
    }
  }
];
