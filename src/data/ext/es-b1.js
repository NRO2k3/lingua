// Phần bổ sung bài học tiếng Tây Ban Nha – cấp B1
export default {
  'es-b1-1': {
    vocab: [
      { w: 'el asiento', ipa: 'êl a-xi-ÊN-tô', vi: 'chỗ ngồi, ghế (trên xe, máy bay)', ex: 'He reservado un asiento junto a la ventanilla.', exVi: 'Tôi đã đặt một chỗ ngồi cạnh cửa sổ.' },
      { w: 'la llegada', ipa: 'la giê-GA-đa', vi: 'sự đến nơi, giờ đến', ex: 'La llegada del tren ha sido puntual.', exVi: 'Tàu đã đến đúng giờ.' },
      { w: 'el retraso', ipa: 'êl rrê-TRA-xô', vi: 'sự chậm trễ', ex: 'El vuelo ha salido con dos horas de retraso.', exVi: 'Chuyến bay đã cất cánh trễ hai tiếng.' },
      { w: 'la ruta', ipa: 'la RRU-ta', vi: 'tuyến đường, lộ trình', ex: 'Hemos hecho una ruta en coche por el norte de España.', exVi: 'Chúng tôi đã đi một chuyến bằng ô tô qua miền Bắc Tây Ban Nha.' },
      { w: 'el mapa', ipa: 'êl MA-pa', vi: 'bản đồ', ex: '¿Has mirado el mapa antes de salir?', exVi: 'Bạn đã xem bản đồ trước khi đi chưa?' },
      { w: 'la guía', ipa: 'la GHI-a', vi: 'sách hướng dẫn du lịch (el/la guía: hướng dẫn viên)', ex: 'He comprado una guía de Andalucía.', exVi: 'Tôi đã mua một cuốn sách hướng dẫn du lịch Andalucía.' },
      { w: 'la aventura', ipa: 'la a-bên-TU-ra', vi: 'cuộc phiêu lưu', ex: 'Este viaje ha sido una gran aventura.', exVi: 'Chuyến đi này đúng là một cuộc phiêu lưu lớn.' },
      { w: 'la temporada', ipa: 'la têm-pô-RA-đa', vi: 'mùa (du lịch), thời kỳ', ex: 'En temporada alta los hoteles son más caros.', exVi: 'Vào mùa cao điểm, khách sạn đắt hơn.' },
      { w: 'el paisaje', ipa: 'êl pai-XA-khê', vi: 'phong cảnh', ex: 'Nunca he visto un paisaje tan bonito.', exVi: 'Tôi chưa bao giờ thấy phong cảnh nào đẹp như vậy.' },
      { w: 'pasear', ipa: 'pa-xê-AR', vi: 'đi dạo', ex: 'Esta mañana hemos paseado por el casco antiguo.', exVi: 'Sáng nay chúng tôi đã đi dạo quanh khu phố cổ.' }
    ],
    exercises: [
      { type: 'mc', q: '¿___ estado alguna vez en Granada? (tú)', options: ['Has', 'Hemos', 'Ha'], answer: 0,
        explain: 'Hỏi "bạn" (tú) → has + participio: ¿Has estado...? (Hemos đi với nosotros, ha đi với él/ella/usted.)' },
      { type: 'fill', q: 'Este verano hemos ___ por la playa todas las tardes.', answer: ['paseado'], hint: 'pasear → participio',
        explain: 'Động từ -ar: bỏ -ar, thêm -ado → paseado.' },
      { type: 'mc', q: 'El vuelo ha llegado con una hora de ___.', options: ['retraso', 'llegada', 'temporada'], answer: 0,
        explain: 'Con una hora de retraso = trễ một tiếng.' },
      { type: 'order', vi: 'Bạn đã bao giờ thấy phong cảnh đẹp như thế chưa?', words: ['paisaje', 'vez', '¿Has', 'tan', 'alguna', 'bonito?', 'un', 'visto'],
        answer: '¿Has visto alguna vez un paisaje tan bonito?', alt: ['¿Has visto un paisaje tan bonito? alguna vez'] },
      { type: 'fill', q: 'Nunca he ___ un viaje tan largo.', answer: ['hecho'], hint: 'hacer – participio bất quy tắc',
        explain: 'Hacer có participio bất quy tắc là hecho (không phải "hacido").' },
      { type: 'mc', q: 'En temporada ___ hay muchos turistas y todo es más caro.', options: ['alta', 'baja', 'larga'], answer: 0,
        explain: 'Temporada alta = mùa cao điểm (đông khách, giá cao); temporada baja = mùa thấp điểm.' },
      { type: 'order', vi: 'Chúng tôi đã mua một cuốn sách hướng dẫn và một tấm bản đồ.', words: ['mapa', 'una', 'Hemos', 'y', 'guía', 'un', 'comprado'],
        answer: 'Hemos comprado una guía y un mapa' },
      { type: 'mc', q: 'Mis padres nunca ___ en avión.', options: ['han viajado', 'ha viajado', 'habéis viajado'], answer: 0,
        explain: 'Mis padres = ellos → han + participio.' }
    ],
    reading: {
      title: 'Mi primera aventura sola',
      titleVi: 'Chuyến phiêu lưu một mình đầu tiên của tôi',
      text: [
        'Este año he hecho mi primer viaje sola. He elegido el norte de España porque siempre me han gustado los paisajes verdes y el mar. He viajado en septiembre, al final de la temporada alta, así que los precios han sido más baratos y no he encontrado muchos turistas.',
        'La llegada no ha sido fácil. Mi vuelo ha salido con tres horas de retraso y, cuando he llegado a Bilbao, ya no había autobuses al centro. He tomado un taxi y he llegado al hotel a medianoche, muy cansada.',
        'Pero después todo ha ido bien. Con una guía y un mapa en la mano, he hecho una ruta en tren por la costa. Siempre he buscado un asiento junto a la ventanilla para ver el paisaje. He paseado por pueblos pequeños, he comido pescado fresco y he hablado con mucha gente.',
        'Esta experiencia me ha cambiado. Antes tenía miedo de viajar sola; ahora sé que puedo hacerlo. ¿Y tú? ¿Has hecho alguna vez un viaje así? Te lo recomiendo.'
      ],
      vi: [
        'Năm nay tôi đã có chuyến đi một mình đầu tiên. Tôi chọn miền Bắc Tây Ban Nha vì tôi luôn thích những phong cảnh xanh và biển. Tôi đi vào tháng Chín, cuối mùa cao điểm, nên giá cả rẻ hơn và tôi không gặp nhiều khách du lịch.',
        'Lúc đến nơi không hề dễ dàng. Chuyến bay của tôi cất cánh trễ ba tiếng và khi tôi đến Bilbao thì đã không còn xe buýt vào trung tâm. Tôi bắt taxi và đến khách sạn lúc nửa đêm, rất mệt.',
        'Nhưng sau đó mọi việc đều suôn sẻ. Với một cuốn sách hướng dẫn và tấm bản đồ trong tay, tôi đi một tuyến tàu dọc bờ biển. Tôi luôn tìm chỗ ngồi cạnh cửa sổ để ngắm phong cảnh. Tôi đi dạo qua những ngôi làng nhỏ, ăn cá tươi và trò chuyện với rất nhiều người.',
        'Trải nghiệm này đã thay đổi tôi. Trước đây tôi sợ đi du lịch một mình; giờ tôi biết mình làm được. Còn bạn thì sao? Bạn đã bao giờ có chuyến đi như thế chưa? Tôi khuyên bạn nên thử.'
      ],
      questions: [
        { q: 'Vì sao người viết chọn miền Bắc Tây Ban Nha?', options: ['Vì vé máy bay rẻ', 'Vì cô thích phong cảnh xanh và biển', 'Vì có người thân ở đó', 'Vì muốn học tiếng'], answer: 1,
          explain: 'Siempre me han gustado los paisajes verdes y el mar.' },
        { q: 'Chuyện gì xảy ra khi cô ấy đến Bilbao?', options: ['Cô bị mất hành lý', 'Khách sạn hết phòng', 'Không còn xe buýt vào trung tâm', 'Cô gặp lại bạn cũ'], answer: 2,
          explain: 'Ya no había autobuses al centro, nên cô phải đi taxi.' },
        { q: 'Vì sao cô ấy luôn tìm chỗ ngồi cạnh cửa sổ?', options: ['Để ngắm phong cảnh', 'Để ngủ dễ hơn', 'Vì chỗ đó rẻ hơn', 'Vì nhân viên soát vé yêu cầu'], answer: 0,
          explain: 'Un asiento junto a la ventanilla para ver el paisaje.' },
        { q: 'Có thể suy ra điều gì về người viết sau chuyến đi?', options: ['Cô không muốn đi một mình nữa', 'Cô sẽ chuyển đến Bilbao sống', 'Cô sợ đi máy bay hơn trước', 'Cô tự tin hơn khi đi du lịch một mình'], answer: 3,
          explain: 'Trước đây cô sợ đi một mình, giờ cô biết mình làm được và còn khuyên người khác thử.' }
      ]
    }
  },

  'es-b1-2': {
    vocab: [
      { w: 'el contrato', ipa: 'êl côn-TRA-tô', vi: 'hợp đồng', ex: 'Ayer firmé mi primer contrato de trabajo.', exVi: 'Hôm qua tôi đã ký hợp đồng lao động đầu tiên.' },
      { w: 'el empleo', ipa: 'êl êm-PLÊ-ô', vi: 'việc làm', ex: 'Busco empleo desde hace tres meses.', exVi: 'Tôi tìm việc đã được ba tháng.' },
      { w: 'solicitar', ipa: 'xô-li-θi-TAR', vi: 'nộp đơn, xin (việc, giấy tờ)', ex: 'El año pasado solicité un puesto en un banco.', exVi: 'Năm ngoái tôi đã nộp đơn vào một vị trí ở ngân hàng.' },
      { w: 'la jornada', ipa: 'la khôr-NA-đa', vi: 'ngày làm việc (jornada completa: toàn thời gian)', ex: 'Este puesto es de jornada completa.', exVi: 'Vị trí này làm toàn thời gian.' },
      { w: 'la formación', ipa: 'la phôr-ma-θi-ÔN', vi: 'quá trình đào tạo, trình độ chuyên môn', ex: '¿Qué formación tiene usted?', exVi: 'Anh/chị được đào tạo chuyên ngành gì?' },
      { w: 'la habilidad', ipa: 'la a-bi-li-ĐAĐ', vi: 'kỹ năng, khả năng', ex: 'Hablar idiomas es una habilidad muy útil.', exVi: 'Nói được ngoại ngữ là một kỹ năng rất hữu ích.' },
      { w: 'renunciar', ipa: 'rrê-nun-θi-AR', vi: 'từ bỏ, xin nghỉ (renunciar a)', ex: 'En 2022 renunció a su trabajo para estudiar.', exVi: 'Năm 2022 anh ấy đã nghỉ việc để đi học.' },
      { w: 'cobrar', ipa: 'cô-BRAR', vi: 'nhận (lương), thu (tiền)', ex: '¿Cuánto cobras al mes?', exVi: 'Mỗi tháng bạn nhận lương bao nhiêu?' },
      { w: 'el compañero / la compañera', ipa: 'êl côm-pa-NHÊ-rô / la côm-pa-NHÊ-ra', vi: 'đồng nghiệp, bạn cùng (lớp, phòng)', ex: 'Mis compañeros me han ayudado mucho esta semana.', exVi: 'Tuần này các đồng nghiệp đã giúp tôi rất nhiều.' },
      { w: 'el empleado / la empleada', ipa: 'êl êm-plê-A-đô / la êm-plê-A-đa', vi: 'nhân viên', ex: 'La empresa ha contratado a diez empleados nuevos este año.', exVi: 'Năm nay công ty đã tuyển mười nhân viên mới.' }
    ],
    exercises: [
      { type: 'mc', q: 'El año pasado ___ en una tienda de ropa.', options: ['trabajé', 'he trabajado', 'trabajo'], answer: 0,
        explain: '"El año pasado" là khoảng thời gian đã kết thúc → dùng indefinido: trabajé.' },
      { type: 'mc', q: 'Esta mañana ___ el contrato.', options: ['he firmado', 'firmé', 'firmaba'], answer: 0,
        explain: '"Esta mañana" vẫn thuộc ngày hôm nay → ở Tây Ban Nha dùng pretérito perfecto: he firmado.' },
      { type: 'fill', q: 'En 2019 Ana ___ a su trabajo y se fue a vivir a Londres.', answer: ['renunció'], hint: 'renunciar – indefinido, ella',
        explain: 'Mốc thời gian cụ thể (en 2019) → indefinido: renunció.' },
      { type: 'order', vi: 'Tuần này tôi đã gửi CV cho ba công ty.', words: ['a', 'currículum', 'he', 'empresas', 'Esta', 'mi', 'tres', 'semana', 'enviado'],
        answer: 'Esta semana he enviado mi currículum a tres empresas', alt: ['he enviado mi currículum a tres empresas Esta semana'] },
      { type: 'mc', q: '¿Cuánto ___ al mes en tu nuevo trabajo?', options: ['cobras', 'contratas', 'solicitas'], answer: 0,
        explain: 'Cobrar = nhận lương: ¿Cuánto cobras? = Bạn nhận lương bao nhiêu?' },
      { type: 'fill', q: 'Busco un trabajo de ___ completa, de lunes a viernes.', answer: ['jornada'], hint: 'ngày làm việc',
        explain: 'Jornada completa = toàn thời gian; media jornada = bán thời gian.' },
      { type: 'order', vi: 'Bạn đã bao giờ làm việc ở nước ngoài chưa?', words: ['extranjero?', 'vez', 'el', '¿Has', 'en', 'alguna', 'trabajado'],
        answer: '¿Has trabajado alguna vez en el extranjero?', alt: ['¿Has trabajado en el extranjero? alguna vez'] },
      { type: 'mc', q: 'Para este puesto, la ___ más importante es hablar inglés.', options: ['habilidad', 'jornada', 'compañera'], answer: 0,
        explain: 'Habilidad = kỹ năng. Nói tiếng Anh là một kỹ năng.' }
    ],
    reading: {
      title: 'La entrevista de Lucía',
      titleVi: 'Buổi phỏng vấn của Lucía',
      text: [
        'Lucía tiene veinticuatro años y busca empleo desde hace seis meses. Estudió Turismo en Salamanca y, después de terminar la carrera, trabajó dos años como recepcionista en un hotel. El verano pasado renunció a ese puesto porque la jornada era muy larga y cobraba poco.',
        'Este mes ha solicitado trabajo en varias empresas y esta mañana ha tenido su primera entrevista en una agencia de viajes. El jefe de personal le ha hecho muchas preguntas: «¿Qué formación tiene? ¿Ha trabajado alguna vez en equipo? ¿Qué habilidades tiene?».',
        'Lucía ha contestado con calma. Le ha explicado que en el hotel aprendió a resolver problemas con los clientes y que habla inglés y francés. También le ha contado que sus compañeros del hotel siempre la llamaban cuando había un turista enfadado.',
        'Al final, el jefe le ha dicho que la empresa necesita un empleado nuevo para la temporada de verano y le ha ofrecido un contrato de seis meses. Lucía ha salido de la oficina muy contenta y esta noche va a celebrarlo con su familia.'
      ],
      vi: [
        'Lucía hai mươi bốn tuổi và đã tìm việc được sáu tháng. Cô học ngành Du lịch ở Salamanca và sau khi tốt nghiệp, cô làm lễ tân ở một khách sạn hai năm. Mùa hè năm ngoái cô nghỉ công việc đó vì ngày làm việc quá dài mà lương lại thấp.',
        'Tháng này cô đã nộp đơn vào nhiều công ty và sáng nay cô có buổi phỏng vấn đầu tiên ở một công ty du lịch. Trưởng phòng nhân sự hỏi cô rất nhiều: «Chị được đào tạo về gì? Chị đã bao giờ làm việc nhóm chưa? Chị có những kỹ năng gì?».',
        'Lucía trả lời một cách bình tĩnh. Cô giải thích rằng ở khách sạn cô đã học được cách giải quyết vấn đề với khách hàng và cô nói được tiếng Anh, tiếng Pháp. Cô cũng kể rằng các đồng nghiệp ở khách sạn luôn gọi cô mỗi khi có một vị khách du lịch nổi giận.',
        'Cuối cùng, ông trưởng phòng nói rằng công ty cần một nhân viên mới cho mùa hè và đề nghị cô một hợp đồng sáu tháng. Lucía rời văn phòng rất vui và tối nay cô sẽ ăn mừng cùng gia đình.'
      ],
      questions: [
        { q: 'Lucía đã làm gì sau khi tốt nghiệp?', options: ['Làm hướng dẫn viên du lịch', 'Làm lễ tân khách sạn hai năm', 'Học thêm tiếng Pháp', 'Mở công ty riêng'], answer: 1,
          explain: 'Trabajó dos años como recepcionista en un hotel.' },
        { q: 'Vì sao cô ấy nghỉ công việc cũ?', options: ['Ngày làm việc quá dài và lương thấp', 'Bị sếp cho thôi việc', 'Chuyển đến thành phố khác', 'Muốn đi du học'], answer: 0,
          explain: 'La jornada era muy larga y cobraba poco.' },
        { q: 'Vì sao các đồng nghiệp cũ hay gọi Lucía khi có khách du lịch nổi giận?', options: ['Vì cô là quản lý khách sạn', 'Vì cô làm ca đêm', 'Vì cô quen biết vị khách đó', 'Vì cô giỏi giải quyết vấn đề và biết ngoại ngữ'], answer: 3,
          explain: 'Bài nói cô học được cách giải quyết vấn đề với khách và nói tiếng Anh, tiếng Pháp – nên suy ra đồng nghiệp tin cô xử lý được.' },
        { q: 'Kết quả buổi phỏng vấn thế nào?', options: ['Cô phải phỏng vấn thêm lần nữa', 'Công ty không tuyển nữa', 'Cô được đề nghị hợp đồng sáu tháng', 'Cô từ chối lời mời'], answer: 2,
          explain: 'Le ha ofrecido un contrato de seis meses.' }
      ]
    }
  },

  'es-b1-3': {
    vocab: [
      { w: 'el síntoma', ipa: 'êl XIN-tô-ma', vi: 'triệu chứng', ex: '¿Qué síntomas tiene usted?', exVi: 'Anh/chị có những triệu chứng gì?' },
      { w: 'el dolor', ipa: 'êl đô-LÔR', vi: 'cơn đau, sự đau', ex: 'Tengo mucho dolor de cabeza.', exVi: 'Tôi bị đau đầu nhiều.' },
      { w: 'el estómago', ipa: 'êl ês-TÔ-ma-gô', vi: 'dạ dày, bụng', ex: 'Me duele el estómago después de comer.', exVi: 'Tôi bị đau bụng sau khi ăn.' },
      { w: 'la rodilla', ipa: 'la rrô-ĐI-gia', vi: 'đầu gối', ex: 'Me duelen las rodillas cuando corro.', exVi: 'Tôi bị đau đầu gối khi chạy.' },
      { w: 'el hombro', ipa: 'êl ÔM-brô', vi: 'vai', ex: 'Me duele el hombro derecho.', exVi: 'Tôi bị đau vai phải.' },
      { w: 'la pastilla', ipa: 'la pas-TI-gia', vi: 'viên thuốc', ex: 'Tiene que tomar una pastilla cada ocho horas.', exVi: 'Anh phải uống một viên thuốc mỗi tám tiếng.' },
      { w: 'sano / sana', ipa: 'XA-nô / XA-na', vi: 'khoẻ mạnh, lành mạnh', ex: 'Hay que comer sano para estar bien.', exVi: 'Phải ăn uống lành mạnh để khoẻ.' },
      { w: 'enfermo / enferma', ipa: 'ên-PHÊR-mô / ên-PHÊR-ma', vi: 'ốm, bị bệnh', ex: 'Hoy no voy a clase porque estoy enfermo.', exVi: 'Hôm nay tôi không đi học vì bị ốm.' },
      { w: 'el enfermero / la enfermera', ipa: 'êl ên-phêr-MÊ-rô / la ên-phêr-MÊ-ra', vi: 'y tá, điều dưỡng', ex: 'La enfermera me ha tomado la temperatura.', exVi: 'Cô y tá đã đo nhiệt độ cho tôi.' },
      { w: 'curarse', ipa: 'cu-RAR-xê', vi: 'khỏi bệnh', ex: 'Si descansas, te vas a curar pronto.', exVi: 'Nếu bạn nghỉ ngơi, bạn sẽ sớm khỏi bệnh.' }
    ],
    exercises: [
      { type: 'mc', q: 'Me ___ las rodillas.', options: ['duelen', 'duele', 'dolor'], answer: 0,
        explain: 'Chủ ngữ thật là "las rodillas" (số nhiều) → duelen.' },
      { type: 'mc', q: 'A mi madre le ___ el estómago.', options: ['duele', 'duelen', 'duelo'], answer: 0,
        explain: '"El estómago" số ít → duele; "le" chỉ người bị đau (mi madre).' },
      { type: 'fill', q: 'Estás enfermo: ___ que descansar.', answer: ['tienes'], hint: 'tener que, ngôi tú',
        explain: 'Tener que + infinitivo = phải làm gì; tú → tienes.' },
      { type: 'fill', q: 'Para estar ___, hay que dormir ocho horas.', answer: ['sano', 'sana'], hint: 'khoẻ mạnh',
        explain: 'Estar sano / sana = khoẻ mạnh.' },
      { type: 'order', vi: 'Anh phải uống một viên thuốc mỗi tám tiếng.', words: ['horas', 'tomar', 'una', 'Tiene', 'cada', 'que', 'ocho', 'pastilla'],
        answer: 'Tiene que tomar una pastilla cada ocho horas', alt: ['cada ocho horas Tiene que tomar una pastilla'] },
      { type: 'mc', q: 'Fiebre, tos y dolor de garganta son ___ de la gripe.', options: ['síntomas', 'pastillas', 'enfermeras'], answer: 0,
        explain: 'Sốt, ho, đau họng là những triệu chứng (síntomas) của cúm.' },
      { type: 'order', vi: 'Bạn có bị đau vai không?', words: ['hombro?', 'duele', '¿Te', 'el'],
        answer: '¿Te duele el hombro?' },
      { type: 'mc', q: '___ beber mucha agua cuando tienes fiebre.', options: ['Hay que', 'Hay', 'Tiene'], answer: 0,
        explain: 'Hay que + infinitivo: lời khuyên/bắt buộc chung, không chỉ một người cụ thể.' }
    ],
    reading: {
      title: 'Una semana difícil',
      titleVi: 'Một tuần vất vả',
      text: [
        'Javier es profesor en un instituto de Valencia y casi nunca está enfermo. Pero esta semana no se encuentra bien. El lunes se despertó con dolor de cabeza y el martes empezó a tener fiebre. Ahora le duelen la garganta y los hombros, y también tiene tos.',
        'Esta mañana ha ido al centro de salud. Primero, una enfermera le ha tomado la temperatura: treinta y ocho grados y medio. Después, la médica le ha preguntado por sus síntomas y le ha dicho que tiene gripe.',
        '«Tiene que quedarse en casa tres o cuatro días y descansar», le ha explicado. «Debe tomar una pastilla cada ocho horas y beber mucha agua. Si le duele el estómago con las pastillas, tómelas después de comer.» También le ha dado una receta para un jarabe para la tos.',
        'Javier está un poco preocupado por sus alumnos, porque la semana que viene tienen un examen importante. Pero la médica tiene razón: hay que cuidarse para curarse pronto. Un compañero va a dar sus clases y él va a volver al instituto el lunes, si ya está sano.'
      ],
      vi: [
        'Javier là giáo viên ở một trường trung học tại Valencia và hầu như không bao giờ bị ốm. Nhưng tuần này anh thấy không khoẻ. Thứ Hai anh thức dậy với cơn đau đầu và thứ Ba thì bắt đầu sốt. Bây giờ anh bị đau họng, đau vai và còn bị ho nữa.',
        'Sáng nay anh đã đến trạm y tế. Đầu tiên, một cô y tá đo nhiệt độ cho anh: ba mươi tám độ rưỡi. Sau đó, bác sĩ hỏi anh về các triệu chứng và nói rằng anh bị cúm.',
        '«Anh phải ở nhà ba hoặc bốn ngày và nghỉ ngơi», bác sĩ giải thích. «Anh nên uống một viên thuốc mỗi tám tiếng và uống nhiều nước. Nếu uống thuốc mà bị đau dạ dày thì hãy uống sau khi ăn.» Bác sĩ cũng kê cho anh một đơn siro trị ho.',
        'Javier hơi lo cho học sinh của mình vì tuần sau các em có một bài kiểm tra quan trọng. Nhưng bác sĩ nói đúng: phải chăm sóc bản thân thì mới mau khỏi. Một đồng nghiệp sẽ dạy thay anh và anh sẽ quay lại trường vào thứ Hai, nếu đã khoẻ.'
      ],
      questions: [
        { q: 'Javier làm nghề gì?', options: ['Bác sĩ', 'Y tá', 'Giáo viên', 'Dược sĩ'], answer: 2,
          explain: 'Javier es profesor en un instituto.' },
        { q: 'Ai đo nhiệt độ cho Javier?', options: ['Một cô y tá', 'Bác sĩ', 'Đồng nghiệp của anh', 'Chính anh ấy'], answer: 0,
          explain: 'Una enfermera le ha tomado la temperatura.' },
        { q: 'Bác sĩ dặn gì nếu thuốc làm anh đau dạ dày?', options: ['Ngừng uống thuốc', 'Uống thuốc sau khi ăn', 'Uống thêm siro', 'Quay lại trạm y tế ngay'], answer: 1,
          explain: 'Si le duele el estómago con las pastillas, tómelas después de comer.' },
        { q: 'Vì sao Javier lo lắng?', options: ['Vì sợ phải phẫu thuật', 'Vì không có tiền mua thuốc', 'Vì bệnh của anh rất nặng', 'Vì sắp đến kỳ kiểm tra của học sinh mà anh phải nghỉ'], answer: 3,
          explain: 'Anh lo cho học sinh vì tuần sau các em kiểm tra, trong khi anh phải nghỉ ở nhà.' }
      ]
    }
  },

  'es-b1-4': {
    vocab: [
      { w: 'el cuento', ipa: 'êl QUÊN-tô', vi: 'truyện (ngắn, cổ tích)', ex: 'Cuando era pequeño, mi abuela me contaba cuentos.', exVi: 'Hồi nhỏ, bà tôi hay kể chuyện cho tôi nghe.' },
      { w: 'la sombra', ipa: 'la XÔM-bra', vi: 'cái bóng, bóng râm', ex: 'De repente vi una sombra en la ventana.', exVi: 'Bỗng nhiên tôi thấy một cái bóng ở cửa sổ.' },
      { w: 'el grito', ipa: 'êl GRI-tô', vi: 'tiếng hét, tiếng la', ex: 'Mientras dormíamos, oímos un grito.', exVi: 'Trong lúc chúng tôi đang ngủ thì nghe thấy một tiếng hét.' },
      { w: 'la tormenta', ipa: 'la tôr-MÊN-ta', vi: 'cơn giông bão', ex: 'Aquella noche había una tormenta terrible.', exVi: 'Đêm hôm đó có một cơn giông khủng khiếp.' },
      { w: 'la pesadilla', ipa: 'la pê-xa-ĐI-gia', vi: 'cơn ác mộng', ex: 'Anoche tuve una pesadilla horrible.', exVi: 'Đêm qua tôi gặp một cơn ác mộng kinh khủng.' },
      { w: 'el misterio', ipa: 'êl mis-TÊ-ri-ô', vi: 'điều bí ẩn', ex: 'Nadie sabía quién era: era un misterio.', exVi: 'Không ai biết người đó là ai: đó là một điều bí ẩn.' },
      { w: 'la costumbre', ipa: 'la côs-TUM-brê', vi: 'thói quen, phong tục', ex: 'De niño tenía la costumbre de leer antes de dormir.', exVi: 'Hồi nhỏ tôi có thói quen đọc sách trước khi ngủ.' },
      { w: 'la juventud', ipa: 'la khu-bên-TUĐ', vi: 'tuổi trẻ, thời thanh niên', ex: 'En su juventud, mi padre vivía en el campo.', exVi: 'Thời trẻ, bố tôi sống ở nông thôn.' },
      { w: 'esconderse', ipa: 'ês-côn-ĐÊR-xê', vi: 'trốn, nấp', ex: 'El niño se escondió debajo de la cama.', exVi: 'Cậu bé trốn xuống gầm giường.' },
      { w: 'despertarse', ipa: 'đês-pêr-TAR-xê', vi: 'thức giấc, tỉnh dậy', ex: 'Me desperté a las tres porque había mucho ruido.', exVi: 'Tôi tỉnh giấc lúc ba giờ vì có nhiều tiếng ồn.' }
    ],
    exercises: [
      { type: 'mc', q: 'Mientras yo ___, sonó el teléfono.', options: ['dormía', 'dormí', 'he dormido'], answer: 0,
        explain: 'Hành động đang diễn ra làm bối cảnh (mientras...) → imperfecto: dormía.' },
      { type: 'mc', q: 'De repente ___ un grito.', options: ['oímos', 'oíamos', 'oír'], answer: 0,
        explain: '"De repente" báo hiệu một sự kiện xảy ra đột ngột → indefinido: oímos.' },
      { type: 'fill', q: 'Cuando era niña, mi abuela me ___ cuentos todas las noches.', answer: ['contaba'], hint: 'contar – imperfecto, ella',
        explain: 'Thói quen trong quá khứ (todas las noches) → imperfecto: contaba.' },
      { type: 'fill', q: 'Anoche me ___ a las tres por la tormenta.', answer: ['desperté'], hint: 'despertarse – indefinido, yo',
        explain: 'Một sự kiện xảy ra một lần, tại thời điểm cụ thể → indefinido: me desperté.' },
      { type: 'order', vi: 'Trời đã tối và đang mưa.', words: ['llovía', 'noche', 'Era', 'y', 'de'],
        answer: 'Era de noche y llovía' },
      { type: 'mc', q: 'Cuando oyó el ruido, el gato se ___ debajo de la cama.', options: ['escondió', 'escondía', 'esconder'], answer: 0,
        explain: 'Phản ứng ngay sau một sự kiện (oyó el ruido) → indefinido: se escondió.' },
      { type: 'order', vi: 'Tôi đã gặp một cơn ác mộng kinh khủng.', words: ['horrible', 'pesadilla', 'Tuve', 'una'],
        answer: 'Tuve una pesadilla horrible' },
      { type: 'mc', q: 'En su juventud, mi abuelo ___ la costumbre de caminar cada día.', options: ['tenía', 'tuvo', 'ha tenido'], answer: 0,
        explain: 'Mô tả thói quen kéo dài trong quá khứ → imperfecto: tenía.' }
    ],
    reading: {
      title: 'La noche de la tormenta',
      titleVi: 'Đêm giông bão',
      text: [
        'Cuando era niño, pasaba todos los veranos en la casa de mis abuelos, en un pequeño pueblo de Galicia. La casa era vieja y grande, y por la noche mi abuelo tenía la costumbre de contarnos cuentos de miedo. Mi hermana y yo lo escuchábamos con los ojos muy abiertos.',
        'Una noche de agosto había una tormenta terrible. Llovía mucho y no había luz en todo el pueblo. Yo no podía dormir porque pensaba en el último cuento del abuelo. De repente, oí un ruido en el pasillo y vi una sombra enorme en la pared.',
        'Di un grito y me escondí debajo de la manta. Mi hermana se despertó y encendió una vela. Mientras buscábamos el origen del ruido, la sombra se movía cada vez más cerca. Por fin abrimos la puerta y descubrimos el misterio: era el perro del vecino, que entró en casa para escapar de la lluvia.',
        'Al final nos reímos mucho. Esa noche el perro durmió con nosotros y yo no tuve ninguna pesadilla. Todavía hoy, cuando hay tormenta, recuerdo aquella noche de mi infancia.'
      ],
      vi: [
        'Hồi nhỏ, mùa hè nào tôi cũng ở nhà ông bà, tại một ngôi làng nhỏ ở Galicia. Ngôi nhà cũ và rộng, và buổi tối ông tôi có thói quen kể cho chúng tôi nghe những câu chuyện ma. Em gái tôi và tôi mở to mắt lắng nghe ông.',
        'Một đêm tháng Tám có một cơn giông khủng khiếp. Trời mưa rất to và cả làng bị mất điện. Tôi không ngủ được vì cứ nghĩ đến câu chuyện cuối cùng của ông. Bỗng nhiên, tôi nghe thấy một tiếng động ngoài hành lang và thấy một cái bóng khổng lồ trên tường.',
        'Tôi hét lên và trốn dưới chăn. Em gái tôi tỉnh dậy và thắp một cây nến. Trong lúc chúng tôi tìm xem tiếng động từ đâu ra, cái bóng di chuyển mỗi lúc một gần hơn. Cuối cùng chúng tôi mở cửa và khám phá ra bí ẩn: đó là con chó của nhà hàng xóm, nó chạy vào nhà để tránh mưa.',
        'Cuối cùng chúng tôi cười rất nhiều. Đêm đó con chó ngủ cùng chúng tôi và tôi không gặp cơn ác mộng nào. Cho đến tận hôm nay, mỗi khi có giông bão, tôi lại nhớ đến đêm hôm ấy của tuổi thơ mình.'
      ],
      questions: [
        { q: 'Hồi nhỏ, người kể thường làm gì vào mùa hè?', options: ['Đi cắm trại trong rừng', 'Học thêm ở thành phố', 'Ở nhà ông bà tại một làng ở Galicia', 'Đi biển với bố mẹ'], answer: 2,
          explain: 'Pasaba todos los veranos en la casa de mis abuelos, en un pequeño pueblo de Galicia.' },
        { q: 'Vì sao đêm đó người kể không ngủ được?', options: ['Vì đang nghĩ về câu chuyện ma của ông', 'Vì đói bụng', 'Vì em gái khóc', 'Vì phải học bài'], answer: 0,
          explain: 'No podía dormir porque pensaba en el último cuento del abuelo.' },
        { q: 'Cái bóng thực ra là gì?', options: ['Ông nội', 'Con chó của nhà hàng xóm', 'Một tên trộm', 'Con mèo của nhà'], answer: 1,
          explain: 'Era el perro del vecino.' },
        { q: 'Câu cuối bài cho thấy điều gì?', options: ['Người kể giờ rất sợ chó', 'Người kể không bao giờ quay lại làng nữa', 'Người kể rất ghét giông bão', 'Kỷ niệm đó vẫn còn in đậm trong trí nhớ người kể'], answer: 3,
          explain: 'Đến nay mỗi khi có giông, người kể vẫn nhớ lại đêm đó → kỷ niệm vẫn rất rõ nét.' }
      ]
    }
  },

  'es-b1-5': {
    vocab: [
      { w: 'opinar', ipa: 'ô-pi-NAR', vi: 'cho rằng, có ý kiến', ex: '¿Qué opinas de vivir en el centro?', exVi: 'Bạn nghĩ sao về việc sống ở trung tâm?' },
      { w: 'comparar', ipa: 'côm-pa-RAR', vi: 'so sánh', ex: 'No puedes comparar Madrid con un pueblo pequeño.', exVi: 'Bạn không thể so sánh Madrid với một ngôi làng nhỏ.' },
      { w: 'el barrio', ipa: 'êl BA-rri-ô', vi: 'khu phố, khu dân cư', ex: 'Mi barrio es más tranquilo que el centro.', exVi: 'Khu phố của tôi yên tĩnh hơn trung tâm.' },
      { w: 'el tráfico', ipa: 'êl TRA-phi-cô', vi: 'giao thông, xe cộ', ex: 'En la ciudad hay demasiado tráfico.', exVi: 'Ở thành phố có quá nhiều xe cộ.' },
      { w: 'la vivienda', ipa: 'la bi-bi-ÊN-đa', vi: 'nhà ở', ex: 'La vivienda en Barcelona es carísima.', exVi: 'Nhà ở tại Barcelona đắt kinh khủng.' },
      { w: 'la calidad', ipa: 'la ca-li-ĐAĐ', vi: 'chất lượng', ex: 'La calidad de vida en el campo es mejor.', exVi: 'Chất lượng sống ở nông thôn tốt hơn.' },
      { w: 'parecido / parecida', ipa: 'pa-rê-θI-đô / pa-rê-θI-đa', vi: 'giống, tương tự', ex: 'Tu barrio es muy parecido al mío.', exVi: 'Khu phố của bạn rất giống khu của tôi.' },
      { w: 'tranquilo / tranquila', ipa: 'tran-KI-lô / tran-KI-la', vi: 'yên tĩnh, bình yên', ex: 'El pueblo es menos ruidoso y más tranquilo.', exVi: 'Ngôi làng ít ồn ào hơn và yên bình hơn.' },
      { w: 'el ritmo', ipa: 'êl RRIT-mô', vi: 'nhịp độ, nhịp điệu', ex: 'En la ciudad el ritmo de vida es muy rápido.', exVi: 'Ở thành phố nhịp sống rất nhanh.' },
      { w: 'el punto de vista', ipa: 'êl PUN-tô đê BIS-ta', vi: 'quan điểm', ex: 'Desde mi punto de vista, el campo es más sano.', exVi: 'Theo quan điểm của tôi, nông thôn lành mạnh hơn.' }
    ],
    exercises: [
      { type: 'mc', q: 'Madrid es ___ grande que Sevilla.', options: ['más', 'tan', 'mejor'], answer: 0,
        explain: 'So sánh hơn: más + tính từ + que.' },
      { type: 'mc', q: 'Mi barrio es ___ tranquilo como el tuyo.', options: ['tan', 'tanto', 'más'], answer: 0,
        explain: 'So sánh bằng với tính từ: tan + tính từ + como.' },
      { type: 'fill', q: 'En mi ciudad hay ___ tráfico como en la tuya.', answer: ['tanto'], hint: 'bằng (+ danh từ giống đực số ít)',
        explain: 'So sánh bằng với danh từ: tanto/tanta/tantos/tantas + danh từ + como; tráfico giống đực số ít → tanto.' },
      { type: 'fill', q: 'Creo ___ la vivienda en el campo es más barata.', answer: ['que'], hint: 'creo ... + mệnh đề',
        explain: 'Creo que / me parece que + mệnh đề để nêu ý kiến.' },
      { type: 'order', vi: 'Theo quan điểm của tôi, nông thôn tốt hơn.', words: ['punto', 'el', 'mejor', 'Desde', 'vista,', 'campo', 'mi', 'es', 'de'],
        answer: 'Desde mi punto de vista, el campo es mejor' },
      { type: 'mc', q: '¿Qué ___ de la vida en el pueblo?', options: ['opinas', 'comparas', 'parece'], answer: 0,
        explain: '¿Qué opinas de...? = Bạn nghĩ sao về...?' },
      { type: 'order', vi: 'Ở đây nhịp sống chậm hơn.', words: ['vida', 'lento', 'Aquí', 'de', 'más', 'el', 'es', 'ritmo'],
        answer: 'Aquí el ritmo de vida es más lento', alt: ['el ritmo de vida Aquí es más lento', 'el ritmo de vida es más lento Aquí'] },
      { type: 'mc', q: 'La calidad de este hotel es ___ que la del otro.', options: ['mejor', 'más buena', 'más mejor'], answer: 0,
        explain: 'Bueno có dạng so sánh bất quy tắc: mejor (không nói "más buena" khi nói về chất lượng, càng không nói "más mejor").' }
    ],
    reading: {
      title: '¿Ciudad o pueblo?',
      titleVi: 'Thành phố hay làng quê?',
      text: [
        'Hace dos años, Carmen y Pablo vivían con sus hijos en un piso pequeño en el centro de Madrid. Ahora viven en un pueblo de la sierra, a cincuenta kilómetros de la capital. Les hemos preguntado qué opinan de este cambio.',
        'Carmen está encantada: «Desde mi punto de vista, la calidad de vida aquí es mucho mejor. El pueblo es más tranquilo, no hay tanto tráfico y el aire es más limpio. Además, la vivienda es más barata: por el mismo precio tenemos una casa con jardín».',
        'Pablo no está totalmente de acuerdo. «Es verdad que aquí el ritmo de vida es más lento, pero tardo una hora en llegar a la oficina. En Madrid había más cines, más restaurantes y más actividades culturales. El pueblo es bonito, pero a veces me parece un poco aburrido».',
        'Los dos creen que no es fácil comparar: cada lugar tiene sus ventajas y sus inconvenientes. Pero en una cosa sí están de acuerdo: sus hijos son más felices aquí, porque tienen más espacio para jugar que en su antiguo barrio.'
      ],
      vi: [
        'Hai năm trước, Carmen và Pablo sống cùng các con trong một căn hộ nhỏ ở trung tâm Madrid. Giờ họ sống ở một ngôi làng vùng núi, cách thủ đô năm mươi cây số. Chúng tôi đã hỏi họ nghĩ gì về sự thay đổi này.',
        'Carmen rất hài lòng: «Theo quan điểm của tôi, chất lượng sống ở đây tốt hơn nhiều. Làng yên tĩnh hơn, không có nhiều xe cộ như thế và không khí sạch hơn. Hơn nữa, nhà ở rẻ hơn: với cùng một số tiền, chúng tôi có một ngôi nhà có vườn».',
        'Pablo thì không hoàn toàn đồng ý. «Đúng là ở đây nhịp sống chậm hơn, nhưng tôi mất một tiếng để đến văn phòng. Ở Madrid có nhiều rạp chiếu phim, nhiều nhà hàng và nhiều hoạt động văn hoá hơn. Làng thì đẹp, nhưng đôi khi tôi thấy hơi buồn tẻ».',
        'Cả hai đều cho rằng không dễ để so sánh: nơi nào cũng có ưu điểm và nhược điểm. Nhưng có một điều họ đồng ý với nhau: các con họ vui hơn ở đây, vì chúng có nhiều chỗ để chơi hơn so với khu phố cũ.'
      ],
      questions: [
        { q: 'Hiện nay gia đình Carmen và Pablo sống ở đâu?', options: ['Ở trung tâm Madrid', 'Ở một làng vùng núi gần Madrid', 'Ở ngoại ô Barcelona', 'Ở một thị trấn ven biển'], answer: 1,
          explain: 'Viven en un pueblo de la sierra, a cincuenta kilómetros de la capital.' },
        { q: 'Ưu điểm nào sau đây Carmen KHÔNG nhắc đến?', options: ['Ít xe cộ hơn', 'Nhà ở rẻ hơn', 'Không khí sạch hơn', 'Có nhiều nhà hàng hơn'], answer: 3,
          explain: 'Chính Pablo nói Madrid mới có nhiều nhà hàng hơn.' },
        { q: 'Pablo không hài lòng điều gì?', options: ['Mất một tiếng để đi làm', 'Nhà quá nhỏ', 'Hàng xóm ồn ào', 'Các con không vui'], answer: 0,
          explain: 'Tardo una hora en llegar a la oficina.' },
        { q: 'Có thể suy ra Pablo nhớ điều gì nhất ở Madrid?', options: ['Căn hộ nhỏ cũ', 'Đời sống văn hoá, giải trí phong phú', 'Sự yên tĩnh', 'Khu vườn'], answer: 1,
          explain: 'Anh nhắc đến rạp phim, nhà hàng, hoạt động văn hoá và thấy làng hơi buồn tẻ.' }
      ]
    }
  },

  'es-b1-6': {
    vocab: [
      { w: 'el paquete', ipa: 'êl pa-KÊ-tê', vi: 'bưu kiện, gói hàng', ex: 'Si llega el paquete, ¿me lo guardas?', exVi: 'Nếu gói hàng đến, bạn giữ hộ mình nhé?' },
      { w: 'regalar', ipa: 'rrê-ga-LAR', vi: 'tặng (quà)', ex: 'Si te gusta este libro, te lo regalo.', exVi: 'Nếu bạn thích cuốn sách này, mình tặng bạn.' },
      { w: 'recomendar', ipa: 'rrê-cô-mên-ĐAR', vi: 'giới thiệu, khuyên (nên dùng)', ex: 'Si buscas un buen restaurante, te recomiendo este.', exVi: 'Nếu bạn tìm nhà hàng ngon, mình giới thiệu chỗ này.' },
      { w: 'cancelar', ipa: 'can-θê-LAR', vi: 'huỷ', ex: 'Si llueve, cancelamos la excursión.', exVi: 'Nếu trời mưa, chúng ta huỷ chuyến dã ngoại.' },
      { w: 'arreglar', ipa: 'a-rrê-GLAR', vi: 'sửa chữa', ex: 'Si la lavadora no funciona, la arreglo yo.', exVi: 'Nếu máy giặt không chạy, tôi sẽ sửa nó.' },
      { w: 'encender', ipa: 'ên-θên-ĐÊR', vi: 'bật (đèn, máy), châm (lửa)', ex: 'Si tienes frío, enciende la calefacción.', exVi: 'Nếu bạn lạnh thì bật lò sưởi lên.' },
      { w: 'cargar', ipa: 'car-GAR', vi: 'sạc (pin), chất (hàng)', ex: 'Si no cargas el móvil, se va a apagar.', exVi: 'Nếu bạn không sạc điện thoại, nó sẽ tắt nguồn.' },
      { w: 'el móvil', ipa: 'êl MÔ-bil', vi: 'điện thoại di động', ex: 'Si no encuentras el móvil, te llamo.', exVi: 'Nếu bạn không tìm thấy điện thoại, mình sẽ gọi cho bạn.' },
      { w: 'apagar', ipa: 'a-pa-GAR', vi: 'tắt (đèn, máy)', ex: 'Si sales el último, apaga la luz.', exVi: 'Nếu bạn ra về sau cùng thì tắt đèn nhé.' },
      { w: 'guardar', ipa: 'goar-ĐAR', vi: 'cất giữ, giữ hộ', ex: 'Si quieres, te guardo el sitio.', exVi: 'Nếu bạn muốn, mình giữ chỗ cho bạn.' }
    ],
    exercises: [
      { type: 'mc', q: 'Si ___ mañana, no vamos a la playa.', options: ['llueve', 'lloverá', 'llover'], answer: 0,
        explain: 'Điều kiện thực tế: si + presente (llueve). Không dùng thì tương lai ngay sau si.' },
      { type: 'mc', q: '¿El libro? Si quieres, ___ presto.', options: ['te lo', 'se lo', 'te le'], answer: 0,
        explain: 'Tân ngữ gián tiếp (te) đứng trước tân ngữ trực tiếp (lo = el libro): te lo presto.' },
      { type: 'fill', q: '¿Le has dado el regalo a tu madre? – Sí, ya ___ he dado.', answer: ['se lo'], hint: 'le + lo → ?',
        explain: 'Khi le/les đứng trước lo/la/los/las thì le đổi thành se: se lo he dado.' },
      { type: 'fill', q: 'Si no ___ el móvil esta noche, mañana no vas a tener batería.', answer: ['cargas'], hint: 'cargar – ngôi tú',
        explain: 'Si + presente: si no cargas...' },
      { type: 'order', vi: 'Nếu bạn thích thì mình tặng bạn.', words: ['lo', 'te', 'Si', 'regalo', 'gusta,', 'te'],
        answer: 'Si te gusta, te lo regalo', alt: ['te lo regalo Si te gusta,'] },
      { type: 'mc', q: 'La lámpara no funciona. ¿___ arreglas tú?', options: ['La', 'Lo', 'Le'], answer: 0,
        explain: 'La lámpara là danh từ giống cái, làm tân ngữ trực tiếp → la.' },
      { type: 'order', vi: 'Bạn giới thiệu cho mình một nhà hàng ngon nhé?', words: ['buen', '¿Me', 'restaurante?', 'un', 'recomiendas'],
        answer: '¿Me recomiendas un buen restaurante?' },
      { type: 'mc', q: 'Hace mucho frío aquí. ¿___ la calefacción?', options: ['Enciendo', 'Cancelo', 'Cargo'], answer: 0,
        explain: 'Encender la calefacción = bật lò sưởi; encender chia bất quy tắc e → ie: enciendo.' }
    ],
    reading: {
      title: 'Una nota para el vecino',
      titleVi: 'Mảnh giấy nhắn cho anh hàng xóm',
      text: [
        'Hola, Andrés: mañana me voy de viaje una semana y te escribo esta nota porque necesito tu ayuda. Te dejo las llaves de casa en el buzón. Si tienes algún problema, me puedes llamar al móvil a cualquier hora; siempre lo tengo cargado.',
        'El jueves llega un paquete de una tienda online. Si el repartidor llama a tu puerta, ¿me lo guardas, por favor? Es el regalo de cumpleaños de mi madre y se lo quiero dar el domingo. Si no estás en casa, no pasa nada: lo pueden dejar en la tienda de la esquina.',
        'Las plantas necesitan agua dos veces por semana, pero si llueve, no hace falta regarlas. Si hace frío por la noche, enciende la calefacción un rato, porque la gata se queda en casa. Su comida está en el armario de la cocina; se la pones por la mañana y por la tarde.',
        'Ah, una cosa más: la lavadora no funciona bien. Si tienes tiempo, ¿me la puedes mirar? Tú sabes arreglar estas cosas mejor que yo. ¡Mil gracias! Te traigo un recuerdo del viaje. Elena'
      ],
      vi: [
        'Chào Andrés: mai mình đi du lịch một tuần và mình viết mảnh giấy này vì cần bạn giúp. Mình để chìa khoá nhà trong hộp thư cho bạn. Nếu có vấn đề gì, bạn có thể gọi vào di động của mình bất cứ lúc nào; mình luôn sạc đầy pin.',
        'Thứ Năm sẽ có một gói hàng của một cửa hàng online. Nếu người giao hàng gõ cửa nhà bạn, bạn giữ hộ mình nhé? Đó là quà sinh nhật cho mẹ mình và mình muốn tặng mẹ vào Chủ nhật. Nếu bạn không có nhà cũng không sao: họ có thể để ở cửa hàng đầu phố.',
        'Cây cần tưới hai lần một tuần, nhưng nếu trời mưa thì không cần tưới. Nếu ban đêm trời lạnh, bạn bật lò sưởi một lúc nhé, vì con mèo ở nhà. Thức ăn của nó ở trong tủ bếp; bạn cho nó ăn vào buổi sáng và buổi chiều.',
        'À, còn một việc nữa: máy giặt chạy không tốt. Nếu có thời gian, bạn xem giúp mình được không? Bạn biết sửa mấy thứ này giỏi hơn mình. Cảm ơn bạn nhiều lắm! Mình sẽ mang quà lưu niệm về cho bạn. Elena'
      ],
      questions: [
        { q: 'Elena để chìa khoá ở đâu?', options: ['Dưới tấm thảm', 'Trong hộp thư', 'Ở cửa hàng đầu phố', 'Đưa cho mẹ cô'], answer: 1,
          explain: 'Te dejo las llaves de casa en el buzón.' },
        { q: 'Trong gói hàng có gì?', options: ['Quà sinh nhật cho mẹ Elena', 'Thức ăn cho mèo', 'Một chiếc máy giặt mới', 'Quà cho Andrés'], answer: 0,
          explain: 'Es el regalo de cumpleaños de mi madre.' },
        { q: 'Nếu trời mưa thì Andrés không cần làm gì?', options: ['Bật lò sưởi', 'Cho mèo ăn', 'Tưới cây', 'Nhận gói hàng'], answer: 2,
          explain: 'Si llueve, no hace falta regarlas (las plantas).' },
        { q: 'Có thể suy ra gì về quan hệ giữa Elena và Andrés?', options: ['Họ mới quen nhau', 'Họ là đồng nghiệp ở công ty', 'Họ là hàng xóm thân thiết, tin tưởng nhau', 'Andrés là thợ sửa máy giặt'], answer: 2,
          explain: 'Elena để chìa khoá nhà, nhờ trông mèo, giữ hàng hộ – chứng tỏ cô rất tin tưởng anh hàng xóm.' }
      ]
    }
  }
};
