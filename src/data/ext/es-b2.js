// Phần bổ sung bài học tiếng Tây Ban Nha – cấp B2
export default {
  'es-b2-1': {
    vocab: [
      { w: 'la ansiedad', ipa: 'la an-xi-ê-đát', vi: 'sự lo âu, bồn chồn', ex: 'Me produce ansiedad que no contestes mis mensajes.', exVi: 'Việc bạn không trả lời tin nhắn làm tôi thấy bồn chồn.' },
      { w: 'el alivio', ipa: 'el a-li-bi-ô', vi: 'sự nhẹ nhõm', ex: '¡Qué alivio que estés bien!', exVi: 'Thật nhẹ cả người khi biết bạn ổn!' },
      { w: 'el entusiasmo', ipa: 'el en-tu-xi-át-mô', vi: 'sự hào hứng, nhiệt tình', ex: 'Espero que mantengas el entusiasmo en tu nuevo trabajo.', exVi: 'Mong là bạn giữ được sự hào hứng ở công việc mới.' },
      { w: 'decepcionar', ipa: 'đê-thép-thi-ô-nar', vi: 'làm thất vọng', ex: 'Me decepciona que no vengas a mi boda.', exVi: 'Bạn không đến đám cưới mình làm mình thất vọng.' },
      { w: 'fastidiar', ipa: 'phát-ti-đi-ar', vi: 'làm phiền, làm bực mình', ex: 'Me fastidia que la gente hable por teléfono en el cine.', exVi: 'Tôi bực mình khi người ta nói điện thoại trong rạp chiếu phim.' },
      { w: 'la expectativa', ipa: 'la ếch-pếch-ta-ti-ba', vi: 'sự kỳ vọng, mong đợi', ex: 'Mis padres tienen muchas expectativas puestas en mí.', exVi: 'Bố mẹ tôi đặt rất nhiều kỳ vọng vào tôi.' },
      { w: 'los celos', ipa: 'lốt thê-lốt', vi: 'sự ghen tuông, ghen tị (tener celos: ghen)', ex: 'No es normal que tengas celos de todos mis amigos.', exVi: 'Bạn ghen với tất cả bạn bè của mình như vậy là không bình thường.' },
      { w: 'la rabia', ipa: 'la ra-bi-a', vi: 'sự tức giận (dar rabia: làm ai phát bực)', ex: 'Me da rabia que siempre llegues tarde.', exVi: 'Mình phát bực vì lúc nào bạn cũng đến muộn.' },
      { w: 'apetecer', ipa: 'a-pê-tê-thẹc', vi: 'thấy thích, muốn (dùng như gustar)', ex: '¿Te apetece que vayamos al cine esta noche?', exVi: 'Tối nay bạn có muốn chúng ta đi xem phim không?' },
      { w: 'deprimido / deprimida', ipa: 'đê-pri-mi-đô / đê-pri-mi-đa', vi: 'chán nản, suy sụp, trầm cảm', ex: 'Está deprimida desde que perdió el trabajo.', exVi: 'Cô ấy suy sụp từ khi mất việc.' }
    ],
    exercises: [
      { type: 'mc', q: 'Me da rabia que Pedro siempre ___ tarde.', options: ['llega', 'llegue', 'llegar'], answer: 1,
        explain: 'Sau cụm chỉ cảm xúc "me da rabia que" + chủ ngữ khác → presente de subjuntivo: llegue.' },
      { type: 'fill', q: 'Ojalá no te ___ el resultado del examen.', answer: ['decepcione'], hint: 'decepcionar – subjuntivo, ngôi él',
        explain: 'Ojalá luôn đi với subjuntivo; chủ ngữ là el resultado → decepcione.' },
      { type: 'order', vi: 'Bạn có muốn chúng ta đi dạo một vòng không?', words: ['paseo?', '¿Te', 'que', 'demos', 'apetece', 'un'],
        answer: '¿Te apetece que demos un paseo?' },
      { type: 'mc', q: '¡Qué ___! Por fin han encontrado a tu perro.', options: ['alivio', 'ansiedad', 'celos'], answer: 0,
        explain: '¡Qué alivio! = Thật nhẹ nhõm! – cảm xúc khi lo lắng đã qua.' },
      { type: 'fill', q: 'Me fastidia que mis vecinos ___ la música tan alta.', answer: ['pongan'], hint: 'poner – subjuntivo, ngôi ellos',
        explain: 'Me fastidia que + chủ ngữ khác → subjuntivo. Poner → pongan (gốc bất quy tắc pong-).' },
      { type: 'mc', q: 'Mi hermana está muy ___ desde que se separó de su novio.', options: ['deprimida', 'deprimido', 'deprimir'], answer: 0,
        explain: 'Tính từ hợp giống với mi hermana (giống cái) → deprimida.' },
      { type: 'order', vi: 'Tôi mong bạn không đánh mất sự hào hứng.', words: ['el', 'Espero', 'entusiasmo', 'pierdas', 'que', 'no'],
        answer: 'Espero que no pierdas el entusiasmo' },
      { type: 'mc', q: 'Me alegro de ___ aquí contigo.', options: ['estar', 'esté', 'estoy'], answer: 0,
        explain: 'Cùng một chủ ngữ (tôi vui – tôi ở đây) → dùng nguyên mẫu, không dùng que + subjuntivo.' }
    ],
    reading: {
      title: 'Carta a una amiga que se va',
      titleVi: 'Thư gửi người bạn sắp đi xa',
      text: [
        'Querida Lucía: te escribo porque la semana pasada, cuando me contaste que te ibas a trabajar a Berlín, no supe qué decir. Primero sentí rabia, no contra ti, sino contra la situación. Me fastidia que las personas que más quiero siempre acaben viviendo lejos. Luego, para ser sincera, sentí un poco de celos: tú vas a vivir una aventura y yo me quedo aquí, con la misma rutina de siempre.',
        'Ahora, con más calma, me alegro de que hayas tomado esta decisión. Sé que llevas meses deprimida en tu empresa y que te decepciona que nadie valore tu trabajo. Por eso, cuando vi el entusiasmo con el que hablabas de tu nuevo puesto, sentí un gran alivio. Hacía mucho tiempo que no te veía tan ilusionada.',
        'También sé que tienes miedo. Es normal que sientas ansiedad antes de un cambio tan grande: un idioma nuevo, un clima frío, compañeros desconocidos. No quiero que te pongas demasiada presión ni que tengas expectativas imposibles. Los primeros meses serán difíciles, y está bien que lo sean.',
        'Solo te pido una cosa: que me llames de vez en cuando y que me cuentes cómo te va. Y si algún fin de semana te apetece que vaya a verte, dímelo, porque yo ya estoy mirando vuelos. Ojalá encuentres en Berlín todo lo que buscas. Un abrazo muy fuerte, Marta.'
      ],
      vi: [
        'Lucía thân mến: mình viết thư này vì tuần trước, khi cậu kể là sẽ sang Berlin làm việc, mình không biết nói gì. Đầu tiên mình thấy tức, không phải với cậu mà với hoàn cảnh. Mình bực mình vì những người mình thương nhất lúc nào cũng rốt cuộc sống ở xa. Rồi, thú thật, mình hơi ghen tị: cậu sắp sống một cuộc phiêu lưu còn mình ở lại đây, với lối sống quen thuộc như mọi khi.',
        'Giờ bình tĩnh hơn rồi, mình mừng vì cậu đã đưa ra quyết định này. Mình biết cậu đã chán nản ở công ty mấy tháng nay và thất vọng vì chẳng ai đánh giá đúng công sức của cậu. Vì vậy, khi thấy cậu hào hứng kể về vị trí mới, mình thấy nhẹ cả lòng. Lâu lắm rồi mình mới thấy cậu háo hức như thế.',
        'Mình cũng biết cậu đang sợ. Lo âu trước một thay đổi lớn như vậy là chuyện bình thường: ngôn ngữ mới, khí hậu lạnh, đồng nghiệp xa lạ. Mình không muốn cậu tự tạo áp lực quá nhiều hay đặt ra những kỳ vọng không thể đạt được. Mấy tháng đầu sẽ khó khăn, và khó khăn như vậy cũng không sao cả.',
        'Mình chỉ xin cậu một điều: thỉnh thoảng gọi cho mình và kể cho mình nghe mọi chuyện thế nào. Và nếu cuối tuần nào đó cậu muốn mình sang thăm thì cứ nói nhé, vì mình đang xem vé máy bay rồi đây. Mong cậu tìm thấy ở Berlin mọi điều cậu đang tìm kiếm. Ôm cậu thật chặt, Marta.'
      ],
      questions: [
        { q: 'Ý chính của bức thư là gì?', options: ['Marta xin Lucía đừng chuyển đến Berlin', 'Marta bày tỏ cảm xúc lẫn lộn nhưng ủng hộ quyết định của Lucía', 'Marta kể về chuyến du lịch của mình ở Berlin', 'Marta phàn nàn về công việc của chính mình'], answer: 1,
          explain: 'Marta kể mình từng tức, ghen tị, rồi mừng và chúc Lucía: me alegro de que hayas tomado esta decisión.' },
        { q: 'Khi mới nghe tin, Marta cảm thấy thế nào?', options: ['Hoàn toàn vui mừng', 'Thờ ơ, không quan tâm', 'Tức giận với hoàn cảnh và hơi ghen tị', 'Sợ hãi cho bản thân'], answer: 2,
          explain: 'Primero sentí rabia… contra la situación. Luego… sentí un poco de celos.' },
        { q: 'Vì sao Marta thấy nhẹ nhõm?', options: ['Vì thấy Lucía hào hứng khi nói về công việc mới', 'Vì Lucía đổi ý không đi nữa', 'Vì Marta cũng sẽ chuyển đến Berlin', 'Vì công ty cũ tăng lương cho Lucía'], answer: 0,
          explain: 'Cuando vi el entusiasmo con el que hablabas de tu nuevo puesto, sentí un gran alivio.' },
        { q: 'Câu "yo ya estoy mirando vuelos" cho thấy điều gì?', options: ['Marta sắp chuyển hẳn sang Đức', 'Marta làm việc ở sân bay', 'Marta muốn Lucía quay về ngay', 'Marta thật sự có ý định sang thăm Lucía'], answer: 3,
          explain: 'Marta đã bắt đầu xem vé máy bay → cô nghiêm túc muốn sang thăm bạn.' }
      ]
    }
  },

  'es-b2-2': {
    vocab: [
      { w: 'invertir', ipa: 'in-bẹc-tir', vi: 'đầu tư', ex: 'Si tuviera dinero, lo invertiría en una casa.', exVi: 'Nếu có tiền, tôi sẽ đầu tư vào một ngôi nhà.' },
      { w: 'la herencia', ipa: 'la ê-ren-thi-a', vi: 'tài sản thừa kế', ex: 'Si recibiera una herencia, dejaría de trabajar.', exVi: 'Nếu được hưởng một khoản thừa kế, tôi sẽ nghỉ làm.' },
      { w: 'el préstamo', ipa: 'el prét-ta-mô', vi: 'khoản vay', ex: 'Si pidiera un préstamo, podría abrir mi propio negocio.', exVi: 'Nếu vay tiền, tôi có thể mở cơ sở kinh doanh riêng.' },
      { w: 'emprender', ipa: 'em-pren-đẹc', vi: 'khởi nghiệp, bắt tay vào (việc lớn)', ex: 'Yo que tú, emprendería un proyecto propio.', exVi: 'Nếu là bạn, tôi sẽ bắt tay vào một dự án của riêng mình.' },
      { w: 'la probabilidad', ipa: 'la prô-ba-bi-li-đát', vi: 'khả năng, xác suất', ex: 'La probabilidad de ganar la lotería es mínima.', exVi: 'Khả năng trúng xổ số là cực kỳ nhỏ.' },
      { w: 'arriesgado / arriesgada', ipa: 'a-ri-ết-ga-đô / a-ri-ết-ga-đa', vi: 'mạo hiểm, rủi ro', ex: 'Dejar el trabajo sin un plan sería muy arriesgado.', exVi: 'Bỏ việc mà không có kế hoạch sẽ rất mạo hiểm.' },
      { w: 'el azar', ipa: 'el a-thar', vi: 'sự ngẫu nhiên, may rủi', ex: 'No dejaría mi futuro en manos del azar.', exVi: 'Tôi sẽ không phó mặc tương lai của mình cho may rủi.' },
      { w: 'la beca', ipa: 'la bê-ca', vi: 'học bổng', ex: 'Si me dieran una beca, estudiaría en Salamanca.', exVi: 'Nếu được cấp học bổng, tôi sẽ học ở Salamanca.' },
      { w: 'el lujo', ipa: 'el lu-khô', vi: 'sự xa xỉ, đồ xa xỉ', ex: 'Si fuera rico, no gastaría el dinero en lujos.', exVi: 'Nếu giàu, tôi sẽ không tiêu tiền vào đồ xa xỉ.' },
      { w: 'optar por', ipa: 'ốp-tar pọc', vi: 'chọn (giữa nhiều phương án)', ex: 'Si pudiera elegir, optaría por vivir en el campo.', exVi: 'Nếu được chọn, tôi sẽ chọn sống ở nông thôn.' }
    ],
    exercises: [
      { type: 'mc', q: 'Si ___ una beca, estudiaría en Madrid.', options: ['consiguiera', 'conseguiría', 'consigo'], answer: 0,
        explain: 'Giả định ở hiện tại: si + imperfecto de subjuntivo (consiguiera), mệnh đề chính dùng condicional (estudiaría).' },
      { type: 'fill', q: 'Si tuviera más dinero, lo ___ en mi formación.', answer: ['invertiría'], hint: 'invertir – condicional, ngôi yo',
        explain: 'Mệnh đề chính của câu giả định dùng condicional: invertir + -ía → invertiría.' },
      { type: 'order', vi: 'Nếu là bạn, tôi sẽ không vay tiền.', words: ['tu', 'En', 'lugar,', 'pediría', 'préstamo', 'un', 'no'],
        answer: 'En tu lugar, no pediría un préstamo', alt: ['no pediría un préstamo En tu lugar,'] },
      { type: 'mc', q: 'Vivir en un yate es un ___ que no me puedo permitir.', options: ['lujo', 'azar', 'préstamo'], answer: 0,
        explain: 'Un lujo = một thứ xa xỉ. Permitirse un lujo = cho phép mình tiêu xài xa xỉ.' },
      { type: 'fill', q: 'Si mis abuelos nos ___ una herencia, compraríamos una casa.', answer: ['dejaran', 'dejasen'], hint: 'dejar – imperfecto de subjuntivo, ngôi ellos',
        explain: 'Sau si giả định dùng imperfecto de subjuntivo: dejaran (hoặc dejasen).' },
      { type: 'mc', q: 'Montar un negocio sin experiencia sería muy ___.', options: ['arriesgada', 'arriesgado', 'arriesgar'], answer: 1,
        explain: 'Chủ ngữ là cả một hành động (montar un negocio) → tính từ để giống đực số ít: arriesgado.' },
      { type: 'order', vi: 'Nếu được chọn, tôi sẽ chọn một công việc ổn định.', words: ['elegir,', 'Si', 'optaría', 'pudiera', 'un', 'por', 'trabajo', 'estable'],
        answer: 'Si pudiera elegir, optaría por un trabajo estable', alt: ['optaría por un trabajo estable Si pudiera elegir,'] },
      { type: 'mc', q: '¿Qué ___ tú si ganaras la lotería?', options: ['harías', 'hicieras', 'haces'], answer: 0,
        explain: 'Mệnh đề chính dùng condicional: hacer → har- + -ías = harías. Hicieras chỉ dùng sau si.' }
    ],
    reading: {
      title: '¿Y si te tocara la lotería?',
      titleVi: 'Nếu bạn trúng xổ số thì sao?',
      text: [
        'Hace unas semanas, una revista preguntó a sus lectores qué harían si recibieran de repente un millón de euros, ya fuera por la lotería o por una herencia inesperada. Las respuestas fueron muy variadas, aunque casi todos coincidían en algo: la probabilidad de que ocurra es mínima, pero soñar no cuesta nada.',
        'Andrés, un camarero de 34 años, lo tiene claro: «Primero pagaría el préstamo del piso y después emprendería mi propio negocio, un pequeño bar en mi pueblo. Sé que sería arriesgado, pero si no lo intentara, me arrepentiría toda la vida». En cambio, Carmen, una estudiante de 22 años, optaría por algo más tranquilo: «Invertiría casi todo y viviría de los intereses. Con el resto me pagaría un máster en el extranjero, porque no sé si algún día me darían una beca».',
        'También hubo respuestas sorprendentes. Luis, un jubilado de 70 años, explicó que no cambiaría casi nada de su vida: «Si fuera millonario, seguiría paseando por el parque cada mañana. Quizás me permitiría algún lujo, como un buen viaje con mi mujer, pero nada más. El dinero no compra la salud».',
        'Al final del artículo, un economista daba un consejo a todos: si alguna vez el azar nos sonríe, lo mejor sería no tomar ninguna decisión importante durante los primeros meses. Según él, muchas personas que ganan grandes premios lo pierden todo en pocos años porque gastan sin pensar.'
      ],
      vi: [
        'Vài tuần trước, một tạp chí đã hỏi độc giả rằng họ sẽ làm gì nếu bỗng nhiên nhận được một triệu euro, dù là nhờ xổ số hay nhờ một khoản thừa kế bất ngờ. Câu trả lời rất đa dạng, nhưng hầu như ai cũng đồng ý một điều: khả năng chuyện đó xảy ra là cực nhỏ, nhưng mơ mộng thì chẳng mất gì.',
        'Andrés, một nhân viên phục vụ 34 tuổi, nói rất rõ ràng: «Trước tiên tôi sẽ trả hết khoản vay mua căn hộ, sau đó tôi sẽ mở cơ sở kinh doanh riêng, một quán bar nhỏ ở làng tôi. Tôi biết như vậy sẽ mạo hiểm, nhưng nếu không thử, tôi sẽ hối hận cả đời». Ngược lại, Carmen, một sinh viên 22 tuổi, sẽ chọn điều gì đó an toàn hơn: «Tôi sẽ đầu tư gần hết và sống bằng tiền lãi. Phần còn lại tôi sẽ dùng để tự chi trả một khoá thạc sĩ ở nước ngoài, vì tôi không biết liệu có ngày nào đó mình được cấp học bổng không».',
        'Cũng có những câu trả lời bất ngờ. Luis, một người về hưu 70 tuổi, giải thích rằng ông sẽ hầu như không thay đổi gì trong cuộc sống: «Nếu là triệu phú, tôi vẫn sẽ đi dạo trong công viên mỗi sáng. Có lẽ tôi sẽ cho phép mình xa xỉ một chút, như một chuyến du lịch thật đẹp với vợ, nhưng chỉ thế thôi. Tiền không mua được sức khoẻ».',
        'Cuối bài báo, một nhà kinh tế học đưa ra lời khuyên cho tất cả mọi người: nếu một ngày nào đó may mắn mỉm cười với chúng ta, tốt nhất là đừng đưa ra quyết định quan trọng nào trong mấy tháng đầu. Theo ông, nhiều người trúng giải lớn đã mất sạch chỉ sau vài năm vì tiêu tiền không suy nghĩ.'
      ],
      questions: [
        { q: 'Bài đọc chủ yếu nói về điều gì?', options: ['Cách chơi xổ số để dễ trúng', 'Câu chuyện của một người đã thật sự trúng xổ số', 'Những gì mọi người sẽ làm nếu bỗng có một triệu euro', 'Lời khuyên về cách vay tiền mua nhà'], answer: 2,
          explain: 'Tạp chí hỏi độc giả qué harían si recibieran un millón de euros và bài đọc thuật lại các câu trả lời.' },
        { q: 'Andrés sẽ làm gì đầu tiên?', options: ['Trả khoản vay mua căn hộ', 'Mở một quán bar', 'Đi học thạc sĩ', 'Mua một chiếc du thuyền'], answer: 0,
          explain: 'Primero pagaría el préstamo del piso.' },
        { q: 'Vì sao Carmen muốn tự trả tiền học thạc sĩ?', options: ['Cô đã trượt học bổng', 'Cô không chắc mình sẽ được học bổng', 'Bố mẹ cô yêu cầu', 'Trường học ở gần nhà cô'], answer: 1,
          explain: 'No sé si algún día me darían una beca = không biết có ngày nào được học bổng không.' },
        { q: 'Có thể suy ra điều gì về ông Luis?', options: ['Ông muốn trở thành triệu phú bằng mọi giá', 'Ông không thích đi du lịch', 'Ông đang bị bệnh nặng', 'Ông khá hài lòng với cuộc sống hiện tại'], answer: 3,
          explain: 'Ông sẽ hầu như không thay đổi gì (no cambiaría casi nada) và vẫn đi dạo mỗi sáng → ông hài lòng với cuộc sống.' }
      ]
    }
  },

  'es-b2-3': {
    vocab: [
      { w: 'el portavoz', ipa: 'el pọc-ta-bốt', vi: 'người phát ngôn', ex: 'Según el portavoz del gobierno, la ley será aprobada en marzo.', exVi: 'Theo người phát ngôn chính phủ, luật sẽ được thông qua vào tháng Ba.' },
      { w: 'el comunicado', ipa: 'el cô-mu-ni-ca-đô', vi: 'thông cáo', ex: 'La empresa publicó un comunicado para pedir disculpas.', exVi: 'Công ty đã đăng một thông cáo để xin lỗi.' },
      { w: 'el suceso', ipa: 'el xu-thê-xô', vi: 'sự việc, vụ việc (tai nạn, vụ án)', ex: 'El suceso fue grabado por un vecino con su móvil.', exVi: 'Vụ việc đã được một người hàng xóm quay lại bằng điện thoại.' },
      { w: 'la protesta', ipa: 'la prô-tết-ta', vi: 'cuộc biểu tình, sự phản đối', ex: 'Miles de personas participaron en la protesta contra la nueva ley.', exVi: 'Hàng nghìn người đã tham gia cuộc biểu tình phản đối luật mới.' },
      { w: 'el reportero / la reportera', ipa: 'el rê-pọc-tê-rô / la rê-pọc-tê-ra', vi: 'phóng viên', ex: 'La reportera entrevistó a varios testigos del accidente.', exVi: 'Nữ phóng viên đã phỏng vấn vài nhân chứng của vụ tai nạn.' },
      { w: 'la votación', ipa: 'la bô-ta-thi-ôn', vi: 'cuộc bỏ phiếu', ex: 'La propuesta fue aprobada en una votación muy ajustada.', exVi: 'Đề xuất được thông qua trong một cuộc bỏ phiếu rất sít sao.' },
      { w: 'la corrupción', ipa: 'la cô-rúp-thi-ôn', vi: 'tham nhũng', ex: 'Se investigan varios casos de corrupción en el ayuntamiento.', exVi: 'Nhiều vụ tham nhũng ở toà thị chính đang được điều tra.' },
      { w: 'la polémica', ipa: 'la pô-lê-mi-ca', vi: 'cuộc tranh cãi, sự tranh luận gay gắt', ex: 'Las palabras del ministro han generado mucha polémica.', exVi: 'Phát ngôn của bộ trưởng đã gây ra nhiều tranh cãi.' },
      { w: 'difundir', ipa: 'đi-phun-đir', vi: 'lan truyền, phổ biến', ex: 'La noticia se difundió rápidamente por las redes sociales.', exVi: 'Tin tức đã lan truyền nhanh chóng trên mạng xã hội.' },
      { w: 'el decreto', ipa: 'el đê-crê-tô', vi: 'nghị định, sắc lệnh', ex: 'El decreto fue firmado ayer por el presidente.', exVi: 'Nghị định đã được tổng thống ký hôm qua.' }
    ],
    exercises: [
      { type: 'mc', q: 'El decreto fue ___ ayer por el Gobierno.', options: ['aprobado', 'aprobada', 'aprobados'], answer: 0,
        explain: 'Ser + participio: participio hợp giống, số với chủ ngữ el decreto (giống đực, số ít) → aprobado.' },
      { type: 'fill', q: 'Las protestas fueron ___ por los estudiantes.', answer: ['organizadas'], hint: 'organizar – participio, hợp với las protestas',
        explain: 'Las protestas giống cái, số nhiều → organizadas.' },
      { type: 'mc', q: 'En España ___ muchos periódicos digitales.', options: ['se leen', 'se lee', 'son leído'], answer: 0,
        explain: 'Se pasiva: động từ hợp số với danh từ đi kèm. Periódicos số nhiều → se leen.' },
      { type: 'order', vi: 'Tin tức đã lan truyền trên mạng xã hội.', words: ['difundió', 'La', 'redes', 'noticia', 'se', 'en', 'las', 'sociales'],
        answer: 'La noticia se difundió en las redes sociales', alt: ['se difundió La noticia en las redes sociales'] },
      { type: 'fill', q: 'Los resultados de la votación ___ publicados mañana.', answer: ['serán'], hint: 'ser – futuro, ngôi ellos',
        explain: 'Bị động ở tương lai: serán + participio. Chủ ngữ los resultados số nhiều → serán.' },
      { type: 'mc', q: 'Las declaraciones del ministro han causado mucha ___.', options: ['polémica', 'votación', 'decreto'], answer: 0,
        explain: 'Causar polémica = gây tranh cãi. Decreto là giống đực nên cũng không hợp với mucha.' },
      { type: 'order', vi: 'Thông cáo đã được người phát ngôn đọc.', words: ['El', 'fue', 'comunicado', 'leído', 'el', 'por', 'portavoz'],
        answer: 'El comunicado fue leído por el portavoz' },
      { type: 'mc', q: '___ que el suceso ocurrió a medianoche.', options: ['Se cree', 'Se creen', 'Es creído'], answer: 0,
        explain: 'Se impersonal + que… → động từ luôn để số ít: se cree que (người ta cho rằng).' }
    ],
    reading: {
      title: 'Polémica por el nuevo decreto de tráfico',
      titleVi: 'Tranh cãi quanh nghị định giao thông mới',
      text: [
        'El Ayuntamiento de Valencia aprobó ayer un decreto que prohíbe la entrada de coches privados en el centro histórico a partir del próximo mes de enero. La medida fue aprobada en una votación muy ajustada: catorce concejales votaron a favor y trece en contra. Según el portavoz municipal, el objetivo es reducir la contaminación y hacer la ciudad más agradable para los peatones.',
        'Sin embargo, la noticia no ha sido bien recibida por todos. Esta mañana, cientos de comerciantes se reunieron frente al ayuntamiento en una protesta pacífica. «Se habla mucho del medio ambiente, pero nadie piensa en nosotros», declaró a nuestra reportera el dueño de una tienda de ropa. Los comerciantes temen que sus ventas bajen si los clientes no pueden llegar en coche.',
        'La polémica creció por la tarde, cuando se difundió en las redes sociales un vídeo grabado durante una reunión privada. En él, un concejal de la oposición acusaba al alcalde de haber favorecido a una empresa de aparcamientos. El equipo de gobierno lo negó todo en un comunicado y recordó que el suceso ya está en manos de la justicia. De momento, no se ha presentado ninguna prueba de corrupción.',
        'Mientras tanto, se han convocado nuevas manifestaciones para el sábado, y se espera que el alcalde explique los detalles del decreto en una rueda de prensa el lunes.'
      ],
      vi: [
        'Hôm qua, Hội đồng thành phố Valencia đã thông qua một nghị định cấm xe ô tô cá nhân đi vào khu phố cổ kể từ tháng Một tới. Biện pháp này được thông qua trong một cuộc bỏ phiếu rất sít sao: mười bốn uỷ viên hội đồng bỏ phiếu thuận và mười ba phiếu chống. Theo người phát ngôn của thành phố, mục tiêu là giảm ô nhiễm và làm cho thành phố dễ chịu hơn với người đi bộ.',
        'Tuy nhiên, tin này không được mọi người đón nhận. Sáng nay, hàng trăm chủ cửa hàng đã tập trung trước toà thị chính trong một cuộc biểu tình ôn hoà. «Người ta nói nhiều về môi trường, nhưng chẳng ai nghĩ đến chúng tôi», chủ một cửa hàng quần áo nói với phóng viên của chúng tôi. Các chủ cửa hàng lo rằng doanh số sẽ giảm nếu khách hàng không thể đến bằng ô tô.',
        'Cuộc tranh cãi càng gay gắt hơn vào buổi chiều, khi một đoạn video quay trong một cuộc họp kín được lan truyền trên mạng xã hội. Trong video, một uỷ viên hội đồng phe đối lập cáo buộc thị trưởng đã ưu ái một công ty bãi đỗ xe. Ban điều hành thành phố đã bác bỏ mọi cáo buộc trong một thông cáo và nhắc lại rằng vụ việc đã được chuyển cho cơ quan tư pháp. Hiện tại, chưa có bằng chứng tham nhũng nào được đưa ra.',
        'Trong khi đó, nhiều cuộc biểu tình mới đã được kêu gọi vào thứ Bảy, và người ta chờ đợi thị trưởng sẽ giải thích chi tiết nghị định trong một cuộc họp báo vào thứ Hai.'
      ],
      questions: [
        { q: 'Ý chính của bản tin là gì?', options: ['Valencia khánh thành một bãi đỗ xe mới', 'Một nghị định cấm xe riêng vào trung tâm đang gây tranh cãi', 'Thị trưởng bị bắt vì tham nhũng', 'Cuộc bầu cử thị trưởng ở Valencia'], answer: 1,
          explain: 'Cả bài nói về nghị định cấm xe và những phản ứng, tranh cãi quanh nó (polémica, protesta).' },
        { q: 'Nghị định được thông qua như thế nào?', options: ['Với đa số áp đảo', 'Không có ai phản đối', 'Do người dân trực tiếp bỏ phiếu', 'Chỉ hơn đúng một phiếu'], answer: 3,
          explain: 'Catorce a favor y trece en contra: 14 thuận, 13 chống → hơn một phiếu.' },
        { q: 'Vì sao các chủ cửa hàng phản đối?', options: ['Họ sợ doanh số giảm vì khách không đi ô tô đến được', 'Họ muốn giảm ô nhiễm nhiều hơn nữa', 'Họ bị tăng thuế', 'Họ không được mời dự họp'], answer: 0,
          explain: 'Temen que sus ventas bajen si los clientes no pueden llegar en coche.' },
        { q: 'Có thể kết luận gì về cáo buộc tham nhũng?', options: ['Đã được toà án xác nhận', 'Chưa được chứng minh', 'Đã được chính thị trưởng thừa nhận', 'Do phóng viên bịa ra'], answer: 1,
          explain: 'No se ha presentado ninguna prueba de corrupción = chưa có bằng chứng nào được đưa ra.' }
      ]
    }
  },

  'es-b2-4': {
    vocab: [
      { w: 'la afirmación', ipa: 'la a-phiẹc-ma-thi-ôn', vi: 'lời khẳng định', ex: 'El director dijo que aquellas afirmaciones eran falsas.', exVi: 'Giám đốc nói rằng những lời khẳng định đó là sai sự thật.' },
      { w: 'insinuar', ipa: 'in-xi-nu-ar', vi: 'ám chỉ, nói bóng gió', ex: 'Ana insinuó que yo había leído su diario.', exVi: 'Ana ám chỉ rằng tôi đã đọc nhật ký của cô ấy.' },
      { w: 'la sugerencia', ipa: 'la xu-khê-ren-thi-a', vi: 'lời gợi ý, đề xuất', ex: 'Mi jefe me hizo una sugerencia: que revisara el informe otra vez.', exVi: 'Sếp gợi ý tôi xem lại bản báo cáo thêm lần nữa.' },
      { w: 'la advertencia', ipa: 'la ađ-bẹc-ten-thi-a', vi: 'lời cảnh báo', ex: 'Ignoró la advertencia del médico y siguió fumando.', exVi: 'Anh ấy phớt lờ lời cảnh báo của bác sĩ và tiếp tục hút thuốc.' },
      { w: 'la confesión', ipa: 'la côn-phê-xi-ôn', vi: 'lời thú nhận', ex: 'En su confesión, dijo que había robado el dinero.', exVi: 'Trong lời thú nhận, anh ta nói rằng mình đã lấy trộm số tiền.' },
      { w: 'la queja', ipa: 'la kê-kha', vi: 'lời phàn nàn, đơn khiếu nại', ex: 'Los clientes presentaron una queja por el retraso.', exVi: 'Khách hàng đã gửi khiếu nại vì sự chậm trễ.' },
      { w: 'el testimonio', ipa: 'el tết-ti-mô-ni-ô', vi: 'lời khai, lời chứng', ex: 'Según el testimonio del vecino, el ladrón huyó en moto.', exVi: 'Theo lời khai của người hàng xóm, tên trộm đã tẩu thoát bằng xe máy.' },
      { w: 'citar', ipa: 'thi-tar', vi: 'trích dẫn (lời ai)', ex: 'El periodista citó las palabras exactas de la ministra.', exVi: 'Nhà báo trích dẫn nguyên văn lời của bà bộ trưởng.' },
      { w: 'subrayar', ipa: 'xu-bra-iar', vi: 'nhấn mạnh; gạch chân', ex: 'La profesora subrayó que el examen sería el lunes.', exVi: 'Cô giáo nhấn mạnh rằng bài thi sẽ diễn ra vào thứ Hai.' },
      { w: 'el resumen', ipa: 'el rê-xu-men', vi: 'bản tóm tắt (en resumen: tóm lại)', ex: 'En resumen, nos dijo que no habría cambios.', exVi: 'Tóm lại, anh ấy nói với chúng tôi là sẽ không có thay đổi gì.' }
    ],
    exercises: [
      { type: 'mc', q: 'Carlos: «Estoy cansado». → Carlos dijo que ___ cansado.', options: ['estaba', 'estuvo', 'estará'], answer: 0,
        explain: 'Động từ dẫn ở quá khứ (dijo) → presente lùi thành imperfecto: estoy → estaba.' },
      { type: 'fill', q: 'Marta: «He perdido las llaves». → Marta contó que ___ perdido las llaves.', answer: ['había'], hint: 'pretérito perfecto → pluscuamperfecto',
        explain: 'He perdido lùi thành había perdido khi thuật lại ở quá khứ.' },
      { type: 'mc', q: 'Mi madre me pidió que ___ la basura.', options: ['sacara', 'saco', 'sacaré'], answer: 0,
        explain: 'Thuật lại yêu cầu ở quá khứ: pidió que + imperfecto de subjuntivo → sacara.' },
      { type: 'order', vi: 'Cô ấy hỏi tôi có muốn đi cùng cô ấy không.', words: ['si', 'Me', 'quería', 'preguntó', 'ir', 'con', 'ella'],
        answer: 'Me preguntó si quería ir con ella' },
      { type: 'fill', q: 'Luis: «Iré mañana». → Luis aseguró que ___ al día siguiente.', answer: ['iría'], hint: 'ir – futuro → condicional',
        explain: 'Futuro lùi thành condicional: iré → iría; mañana → al día siguiente.' },
      { type: 'mc', q: 'Según el ___ del vecino, el ladrón salió por la ventana.', options: ['testimonio', 'resumen', 'advertencia'], answer: 0,
        explain: 'El testimonio = lời khai của nhân chứng. Advertencia là giống cái nên không đi với el.' },
      { type: 'order', vi: 'Bác sĩ cảnh báo rằng anh ấy phải bỏ thuốc.', words: ['médico', 'El', 'advirtió', 'que', 'dejar', 'debía', 'de', 'fumar'],
        answer: 'El médico advirtió que debía dejar de fumar' },
      { type: 'mc', q: 'Ana: «¿Dónde vives?» → Ana me preguntó dónde ___.', options: ['vivía', 'vivo', 'viva'], answer: 0,
        explain: 'Câu hỏi có từ để hỏi giữ nguyên dónde; vives (presente) lùi thành vivía.' }
    ],
    reading: {
      title: 'Un malentendido en la oficina',
      titleVi: 'Một sự hiểu lầm ở văn phòng',
      text: [
        'El lunes pasado, nuestra jefa, Elena, nos reunió a todos en la sala de reuniones. Nos dijo que la empresa estaba pasando por un momento difícil y que tendríamos que hacer algunos cambios. Subrayó que nadie iba a perder su trabajo, pero también nos pidió que fuéramos pacientes durante los próximos meses.',
        'El problema empezó después. Javier, que había llegado tarde a la reunión, solo escuchó el final. A la hora del café contó a otros compañeros que Elena había insinuado que habría despidos. Alguien añadió que la oficina iba a cerrar, y en dos días ya circulaba un rumor por toda la empresa. Según el testimonio de una compañera que estaba allí, Javier parecía muy seguro de lo que decía. Varias personas incluso presentaron una queja al departamento de recursos humanos.',
        'Elena, sorprendida, decidió aclarar la situación. Envió un correo a toda la plantilla con un resumen de la reunión y citó sus propias palabras: «He dicho que nadie perderá su trabajo». En el mismo correo añadió una advertencia: nos pidió que no repitiéramos ninguna información sin comprobarla antes.',
        'Al final, Javier hizo una pequeña confesión delante de todos: reconoció que no había oído bien y que había exagerado. Elena aceptó sus disculpas y nos hizo una sugerencia muy útil: que, si teníamos dudas, le preguntáramos directamente a ella. Desde entonces, el ambiente en la oficina es mucho más tranquilo y, antes de creer cualquier rumor, todos preguntamos primero.'
      ],
      vi: [
        'Thứ Hai tuần trước, sếp của chúng tôi, chị Elena, đã tập trung mọi người trong phòng họp. Chị nói rằng công ty đang trải qua giai đoạn khó khăn và chúng tôi sẽ phải thực hiện một vài thay đổi. Chị nhấn mạnh rằng sẽ không ai mất việc, nhưng cũng đề nghị chúng tôi kiên nhẫn trong mấy tháng tới.',
        'Rắc rối bắt đầu sau đó. Javier, người đến họp muộn, chỉ nghe được phần cuối. Vào giờ uống cà phê, anh kể với các đồng nghiệp khác rằng Elena đã ám chỉ sẽ có sa thải. Có người còn thêm rằng văn phòng sắp đóng cửa, và chỉ trong hai ngày, một tin đồn đã lan khắp công ty. Theo lời một đồng nghiệp có mặt lúc đó, Javier có vẻ rất chắc chắn về những gì mình nói. Vài người thậm chí còn gửi khiếu nại lên phòng nhân sự.',
        'Ngạc nhiên, Elena quyết định làm rõ mọi chuyện. Chị gửi email cho toàn bộ nhân viên kèm bản tóm tắt cuộc họp và trích dẫn chính lời mình: «Tôi đã nói là không ai mất việc cả». Trong cùng email đó, chị thêm một lời cảnh báo: chị yêu cầu chúng tôi không nhắc lại bất kỳ thông tin nào mà chưa kiểm tra trước.',
        'Cuối cùng, Javier đã thú nhận trước mặt mọi người: anh thừa nhận mình đã nghe không rõ và đã phóng đại. Elena chấp nhận lời xin lỗi và đưa ra cho chúng tôi một gợi ý rất hữu ích: nếu có thắc mắc thì hãy hỏi thẳng chị. Từ đó đến nay, không khí ở văn phòng yên ổn hơn nhiều và trước khi tin bất kỳ tin đồn nào, ai cũng hỏi lại trước đã.'
      ],
      questions: [
        { q: 'Câu chuyện chủ yếu kể về điều gì?', options: ['Công ty đóng cửa văn phòng', 'Elena bị sa thải', 'Một tin đồn sai lan ra từ việc nghe không đầy đủ cuộc họp', 'Javier được thăng chức'], answer: 2,
          explain: 'Javier chỉ nghe phần cuối cuộc họp, kể sai, và tin đồn lan khắp công ty.' },
        { q: 'Trong cuộc họp, Elena nhấn mạnh điều gì?', options: ['Sẽ không ai mất việc', 'Văn phòng sẽ đóng cửa', 'Mọi người phải đi làm sớm hơn', 'Công ty sẽ tuyển thêm người'], answer: 0,
          explain: 'Subrayó que nadie iba a perder su trabajo.' },
        { q: 'Vì sao Javier hiểu sai nội dung cuộc họp?', options: ['Anh không giỏi tiếng Tây Ban Nha', 'Elena đã nói dối', 'Anh đọc nhầm email', 'Anh đến muộn và chỉ nghe phần cuối'], answer: 3,
          explain: 'Javier, que había llegado tarde a la reunión, solo escuchó el final.' },
        { q: 'Bài học chính có thể rút ra từ câu chuyện là gì?', options: ['Không nên họp vào thứ Hai', 'Nên kiểm tra thông tin trước khi truyền lại cho người khác', 'Không nên uống cà phê với đồng nghiệp', 'Nên gửi khiếu nại lên phòng nhân sự ngay'], answer: 1,
          explain: 'Tin đồn sinh ra vì thông tin không được kiểm tra; Elena cũng yêu cầu no repitiéramos ninguna información sin comprobarla.' }
      ]
    }
  },

  'es-b2-5': {
    vocab: [
      { w: 'la pobreza', ipa: 'la pô-brê-tha', vi: 'sự nghèo đói', ex: 'Es un barrio donde la pobreza afecta a muchas familias.', exVi: 'Đó là một khu phố nơi cái nghèo ảnh hưởng đến nhiều gia đình.' },
      { w: 'la solidaridad', ipa: 'la xô-li-đa-ri-đát', vi: 'tình đoàn kết, tinh thần tương trợ', ex: 'Las personas que ayudaron tras la inundación demostraron mucha solidaridad.', exVi: 'Những người giúp đỡ sau trận lũ đã thể hiện tinh thần tương trợ rất lớn.' },
      { w: 'el bienestar', ipa: 'el bi-ên-ết-tar', vi: 'phúc lợi, sự sung túc', ex: 'Es una ciudad que se preocupa por el bienestar de sus habitantes.', exVi: 'Đó là một thành phố quan tâm đến đời sống của người dân.' },
      { w: 'ambiental', ipa: 'am-bi-ên-tal', vi: '(thuộc) môi trường', ex: 'La contaminación ambiental es un problema cuyas consecuencias sufrimos todos.', exVi: 'Ô nhiễm môi trường là vấn đề mà hậu quả của nó tất cả chúng ta đều phải gánh chịu.' },
      { w: 'el combustible', ipa: 'el côm-bút-ti-blê', vi: 'nhiên liệu', ex: 'Los coches que usan combustibles fósiles contaminan más.', exVi: 'Những chiếc xe dùng nhiên liệu hoá thạch gây ô nhiễm nhiều hơn.' },
      { w: 'el plástico', ipa: 'el plát-ti-cô', vi: 'nhựa, đồ nhựa', ex: 'El plástico que tiramos al mar tarda siglos en desaparecer.', exVi: 'Nhựa mà chúng ta vứt xuống biển phải mất hàng thế kỷ mới phân huỷ.' },
      { w: 'la atmósfera', ipa: 'la át-mốt-phê-ra', vi: 'bầu khí quyển; bầu không khí', ex: 'Los gases que se acumulan en la atmósfera calientan el planeta.', exVi: 'Những khí tích tụ trong bầu khí quyển làm Trái Đất nóng lên.' },
      { w: 'el refugiado / la refugiada', ipa: 'el rê-phu-khi-a-đô / la rê-phu-khi-a-đa', vi: 'người tị nạn', ex: 'Los refugiados con quienes hablé huyeron de la guerra.', exVi: 'Những người tị nạn mà tôi đã nói chuyện cùng đều chạy trốn khỏi chiến tranh.' },
      { w: 'la agricultura', ipa: 'la a-gri-cun-tu-ra', vi: 'nông nghiệp', ex: 'La sequía afecta sobre todo a la agricultura.', exVi: 'Hạn hán ảnh hưởng chủ yếu đến nông nghiệp.' },
      { w: 'el consumidor / la consumidora', ipa: 'el côn-xu-mi-đọc / la côn-xu-mi-đô-ra', vi: 'người tiêu dùng', ex: 'Cada vez más consumidores buscan productos que no lleven plástico.', exVi: 'Ngày càng nhiều người tiêu dùng tìm những sản phẩm không có bao bì nhựa.' }
    ],
    exercises: [
      { type: 'mc', q: 'Es una organización ___ voluntarios ayudan a los refugiados.', options: ['cuyos', 'que', 'donde'], answer: 0,
        explain: 'Cuyo chỉ sở hữu (mà… của nó) và hợp giống, số với danh từ đi sau: voluntarios → cuyos.' },
      { type: 'fill', q: 'Este es el pueblo ___ nació mi abuela.', answer: ['donde', 'en el que', 'en que', 'en el cual'], hint: 'chỉ nơi chốn',
        explain: 'Chỉ nơi chốn dùng donde (hoặc en el que / en el cual).' },
      { type: 'mc', q: 'La señora con ___ hablé trabaja en una ONG.', options: ['quien', 'cuya', 'donde'], answer: 0,
        explain: 'Sau giới từ (con), chỉ người → quien (hoặc la que).' },
      { type: 'order', vi: 'Nhựa mà chúng ta dùng làm ô nhiễm biển.', words: ['El', 'que', 'usamos', 'plástico', 'contamina', 'mar', 'el'],
        answer: 'El plástico que usamos contamina el mar' },
      { type: 'fill', q: 'Los agricultores, ___ cosechas se perdieron por la sequía, piden ayuda.', answer: ['cuyas'], hint: 'cuyo – hợp với cosechas',
        explain: 'Cosechas giống cái, số nhiều → cuyas.' },
      { type: 'mc', q: 'La ___ es un problema que afecta a millones de personas en el mundo.', options: ['pobreza', 'atmósfera', 'agricultura'], answer: 0,
        explain: 'La pobreza = sự nghèo đói – một vấn đề xã hội ảnh hưởng đến hàng triệu người.' },
      { type: 'order', vi: 'Đây là ngôi làng nơi người ta trồng lúa.', words: ['Este', 'el', 'pueblo', 'donde', 'arroz', 'es', 'se', 'cultiva'],
        answer: 'Este es el pueblo donde se cultiva arroz', alt: ['el pueblo donde se cultiva arroz es Este'] },
      { type: 'mc', q: 'Los coches eléctricos no necesitan ___ fósil.', options: ['combustible', 'consumidor', 'bienestar'], answer: 0,
        explain: 'Combustible fósil = nhiên liệu hoá thạch (xăng, dầu…).' }
    ],
    reading: {
      title: 'Un pueblo que no se rinde',
      titleVi: 'Ngôi làng không chịu khuất phục',
      text: [
        'Villanueva es un pequeño pueblo del sur de España cuya economía siempre ha dependido de la agricultura. Sin embargo, en los últimos años la sequía y el cambio climático han hecho cada vez más difícil la vida de los agricultores, muchos de los cuales han tenido que abandonar sus campos. Los jóvenes, que no encontraban trabajo, se marchaban a la ciudad.',
        'Hace cinco años, un grupo de vecinos decidió cambiar la situación. Crearon una cooperativa en la que todos compartían el agua, las máquinas y los beneficios. Además, instalaron placas solares en los tejados de los edificios públicos, de modo que el pueblo ya no depende tanto del combustible para producir electricidad. Hoy, la energía que sobra se vende a las ciudades cercanas.',
        'El proyecto no solo ha mejorado la situación ambiental, sino que también ha traído bienestar a personas que vivían en la pobreza. La cooperativa ha dado trabajo a varias familias de refugiados sirios, quienes llegaron sin nada y ahora cultivan aceitunas junto a los vecinos. «Aquí he encontrado algo que había perdido: un hogar», dice Samira, una de ellas.',
        'Los productos de Villanueva se venden sin plástico, en envases de vidrio o de papel, algo que valoran cada vez más consumidores. El alcalde lo resume así: «Lo que nos ha salvado no ha sido el dinero, sino la solidaridad». El pueblo, que hace diez años parecía condenado a desaparecer, tiene hoy más habitantes que nunca.'
      ],
      vi: [
        'Villanueva là một ngôi làng nhỏ ở miền nam Tây Ban Nha mà nền kinh tế luôn dựa vào nông nghiệp. Tuy nhiên, những năm gần đây, hạn hán và biến đổi khí hậu đã khiến cuộc sống của nông dân ngày càng khó khăn, nhiều người trong số họ đã phải bỏ ruộng. Những người trẻ, vì không tìm được việc, lần lượt bỏ lên thành phố.',
        'Năm năm trước, một nhóm dân làng quyết định thay đổi tình hình. Họ lập ra một hợp tác xã, trong đó mọi người cùng chia sẻ nước, máy móc và lợi nhuận. Ngoài ra, họ lắp tấm pin mặt trời trên mái các toà nhà công cộng, nhờ vậy làng không còn phụ thuộc nhiều vào nhiên liệu để sản xuất điện. Ngày nay, phần năng lượng dư thừa được bán cho các thành phố lân cận.',
        'Dự án không chỉ cải thiện tình hình môi trường mà còn mang lại cuộc sống khá giả hơn cho những người từng sống trong nghèo khó. Hợp tác xã đã tạo việc làm cho vài gia đình tị nạn người Syria, những người đến đây với hai bàn tay trắng và giờ đang trồng ô liu cùng dân làng. «Ở đây tôi đã tìm lại được thứ mình từng đánh mất: một mái ấm», Samira, một người trong số họ, chia sẻ.',
        'Sản phẩm của Villanueva được bán không dùng nhựa, đựng trong hộp thuỷ tinh hoặc giấy, điều mà ngày càng nhiều người tiêu dùng coi trọng. Thị trưởng tóm tắt như sau: «Thứ cứu chúng tôi không phải là tiền, mà là tinh thần tương trợ». Ngôi làng, mười năm trước tưởng như sắp biến mất, nay có nhiều cư dân hơn bao giờ hết.'
      ],
      questions: [
        { q: 'Ý chính của bài đọc là gì?', options: ['Lịch sử trồng ô liu ở Tây Ban Nha', 'Người trẻ bỏ làng lên thành phố', 'Cách lắp đặt tấm pin mặt trời trên mái nhà', 'Một ngôi làng vượt khó nhờ hợp tác và tinh thần tương trợ'], answer: 3,
          explain: 'Làng gặp khó vì hạn hán, rồi hồi sinh nhờ hợp tác xã; thị trưởng nói: lo que nos ha salvado… ha sido la solidaridad.' },
        { q: 'Vấn đề ban đầu của Villanueva là gì?', options: ['Hạn hán làm nông nghiệp khó khăn và người trẻ bỏ đi', 'Có quá nhiều khách du lịch', 'Ô nhiễm từ một nhà máy', 'Làng thiếu trường học'], answer: 0,
          explain: 'La sequía y el cambio climático… los jóvenes se marchaban a la ciudad.' },
        { q: 'Tấm pin mặt trời mang lại lợi ích gì cho làng?', options: ['Làng có thêm nước tưới', 'Làng ít phụ thuộc nhiên liệu và bán được điện thừa', 'Giá ô liu tăng lên', 'Người tị nạn có nhà để ở'], answer: 1,
          explain: 'Ya no depende tanto del combustible… la energía que sobra se vende a las ciudades cercanas.' },
        { q: 'Câu cuối bài cho thấy điều gì?', options: ['Làng sắp biến mất', 'Thị trưởng sắp từ chức', 'Dân số của làng đã tăng trở lại', 'Làng chỉ còn người già'], answer: 2,
          explain: 'Tiene hoy más habitantes que nunca = nay có nhiều cư dân hơn bao giờ hết.' }
      ]
    }
  },

  'es-b2-6': {
    vocab: [
      { w: 'el requisito', ipa: 'el rê-ki-xi-tô', vi: 'điều kiện, yêu cầu bắt buộc', ex: 'Lamentamos informarle de que no cumple usted todos los requisitos.', exVi: 'Chúng tôi rất tiếc phải thông báo rằng ông/bà chưa đáp ứng đủ các điều kiện.' },
      { w: 'la factura', ipa: 'la phác-tu-ra', vi: 'hoá đơn', ex: 'Le envío la factura correspondiente al mes de mayo.', exVi: 'Tôi xin gửi ông/bà hoá đơn của tháng Năm.' },
      { w: 'el certificado', ipa: 'el thẹc-ti-phi-ca-đô', vi: 'giấy chứng nhận, chứng chỉ', ex: 'Necesitamos una copia de su certificado de idiomas.', exVi: 'Chúng tôi cần một bản sao chứng chỉ ngoại ngữ của ông/bà.' },
      { w: 'la tarifa', ipa: 'la ta-ri-pha', vi: 'giá cước, biểu phí', ex: 'Le informamos de que la tarifa aumentará a partir de enero.', exVi: 'Chúng tôi xin thông báo rằng giá cước sẽ tăng từ tháng Một.' },
      { w: 'remitir', ipa: 'rê-mi-tir', vi: 'gửi (văn bản); chuyển (hồ sơ) đến', ex: 'Le remito el contrato firmado.', exVi: 'Tôi xin gửi ông/bà bản hợp đồng đã ký.' },
      { w: 'la consulta', ipa: 'la côn-xun-ta', vi: 'câu hỏi, yêu cầu tư vấn; buổi khám', ex: 'Para cualquier consulta, no dude en ponerse en contacto con nosotros.', exVi: 'Mọi thắc mắc xin ông/bà đừng ngần ngại liên hệ với chúng tôi.' },
      { w: 'el gerente / la gerente', ipa: 'el khê-ren-tê / la khê-ren-tê', vi: 'giám đốc, người quản lý', ex: 'Quisiera hablar con el gerente, por favor.', exVi: 'Tôi muốn nói chuyện với người quản lý.' },
      { w: 'la renuncia', ipa: 'la rê-nun-thi-a', vi: 'sự từ chức, đơn xin thôi việc', ex: 'Le comunico mi renuncia al puesto a partir del 1 de junio.', exVi: 'Tôi xin thông báo việc thôi giữ vị trí kể từ ngày 1 tháng Sáu.' },
      { w: 'el importe', ipa: 'el im-pọc-tê', vi: 'số tiền (phải trả)', ex: 'El importe total asciende a 350 euros.', exVi: 'Tổng số tiền là 350 euro.' },
      { w: 'la sede', ipa: 'la xê-đê', vi: 'trụ sở', ex: 'La entrevista tendrá lugar en nuestra sede de Madrid.', exVi: 'Buổi phỏng vấn sẽ diễn ra tại trụ sở của chúng tôi ở Madrid.' }
    ],
    exercises: [
      { type: 'mc', q: 'Señora García, ¿___ usted un momento?', options: ['tiene', 'tienes', 'tenéis'], answer: 0,
        explain: 'Usted chia động từ như ngôi thứ ba số ít: tiene.' },
      { type: 'fill', q: 'Le ___ adjunto el certificado que nos solicitó.', answer: ['remito'], hint: 'remitir – presente, ngôi yo',
        explain: 'Remitir ở ngôi yo → remito. Le remito adjunto… = Tôi xin gửi kèm…' },
      { type: 'mc', q: 'Me interesa mucho el puesto; ___, no tengo experiencia en ventas.', options: ['sin embargo', 'por lo tanto', 'atentamente'], answer: 0,
        explain: 'Hai ý trái ngược nhau → sin embargo (tuy nhiên).' },
      { type: 'order', vi: 'Mọi thắc mắc xin đừng ngần ngại liên hệ với chúng tôi.', words: ['consulta,', 'Para', 'cualquier', 'dude', 'no', 'en', 'contactarnos'],
        answer: 'Para cualquier consulta, no dude en contactarnos', alt: ['no dude en contactarnos Para cualquier consulta,'] },
      { type: 'fill', q: 'El ___ total de la factura es de 200 euros.', answer: ['importe'], hint: 'số tiền phải trả',
        explain: 'El importe = số tiền ghi trên hoá đơn, đơn hàng.' },
      { type: 'mc', q: 'No cumple todos los ___; por lo tanto, no podemos aceptar su solicitud.', options: ['requisitos', 'tarifas', 'gerentes'], answer: 0,
        explain: 'Cumplir los requisitos = đáp ứng các điều kiện.' },
      { type: 'order', vi: 'Chúng tôi rất tiếc vì những bất tiện đã gây ra.', words: ['Lamentamos', 'inconvenientes', 'los', 'causados'],
        answer: 'Lamentamos los inconvenientes causados' },
      { type: 'mc', q: 'Señores, ¿___ ustedes firmar aquí, por favor?', options: ['pueden', 'podéis', 'puedes'], answer: 0,
        explain: 'Ustedes chia như ngôi thứ ba số nhiều: pueden.' }
    ],
    reading: {
      title: 'Reclamación sobre la factura de octubre',
      titleVi: 'Khiếu nại về hoá đơn tháng Mười',
      text: [
        'Estimados señores: me dirijo a ustedes en relación con la factura número 4582, correspondiente al mes de octubre, que recibí el pasado día 3. Soy cliente de su empresa desde hace seis años y hasta ahora nunca había tenido ningún problema con el servicio. Sin embargo, en esta ocasión el importe total es de 189 euros, casi el doble de lo que pago normalmente.',
        'Revisé el documento con atención y comprobé que se me han cobrado dos servicios que no he contratado: un seguro para el móvil y una tarifa de televisión de pago. Llamé al servicio de atención al cliente el día 5, pero, aunque la persona que me atendió fue muy amable, me explicó que no podía resolver mi consulta por teléfono y que debía presentar una reclamación por escrito.',
        'Por lo tanto, les ruego que anulen los cargos incorrectos y me devuelvan la diferencia lo antes posible. Les remito adjunta una copia de la factura, así como el contrato original, en el que se puede ver claramente qué servicios contraté. Si fuera necesario cumplir algún otro requisito, les agradecería que me lo indicaran.',
        'En caso de no recibir respuesta en un plazo de quince días, me veré obligada a acudir a la oficina de atención al consumidor de mi ciudad. Agradeciendo de antemano su atención, quedo a la espera de sus noticias. Atentamente, Laura Pérez Ruiz.'
      ],
      vi: [
        'Kính gửi quý công ty: tôi viết thư này liên quan đến hoá đơn số 4582 của tháng Mười mà tôi nhận được hôm mùng 3 vừa qua. Tôi là khách hàng của quý công ty đã sáu năm và từ trước đến nay chưa từng gặp vấn đề gì với dịch vụ. Tuy nhiên, lần này tổng số tiền là 189 euro, gần gấp đôi số tôi thường phải trả.',
        'Tôi đã xem kỹ hoá đơn và nhận thấy mình bị tính tiền hai dịch vụ mà tôi không hề đăng ký: một gói bảo hiểm điện thoại và một gói cước truyền hình trả tiền. Tôi đã gọi cho bộ phận chăm sóc khách hàng hôm mùng 5, nhưng dù người tiếp nhận rất lịch sự, họ giải thích rằng không thể giải quyết yêu cầu của tôi qua điện thoại và tôi phải gửi khiếu nại bằng văn bản.',
        'Vì vậy, kính đề nghị quý công ty huỷ các khoản phí sai và hoàn lại cho tôi phần chênh lệch sớm nhất có thể. Tôi xin gửi kèm bản sao hoá đơn cùng hợp đồng gốc, trong đó thể hiện rõ những dịch vụ tôi đã đăng ký. Nếu cần đáp ứng thêm điều kiện nào khác, tôi rất cảm ơn nếu quý công ty cho tôi biết.',
        'Nếu không nhận được phản hồi trong vòng mười lăm ngày, tôi buộc phải tìm đến văn phòng hỗ trợ người tiêu dùng của thành phố. Xin cảm ơn trước sự quan tâm của quý công ty, tôi mong sớm nhận được hồi âm. Trân trọng, Laura Pérez Ruiz.'
      ],
      questions: [
        { q: 'Mục đích chính của email là gì?', options: ['Đăng ký thêm dịch vụ truyền hình', 'Khiếu nại về một hoá đơn bị tính sai', 'Xin thôi việc ở công ty', 'Hỏi giá bảo hiểm điện thoại'], answer: 1,
          explain: 'Laura viết về factura número 4582 và đề nghị anulen los cargos incorrectos.' },
        { q: 'Vì sao hoá đơn tháng Mười cao bất thường?', options: ['Laura gọi điện quá nhiều', 'Giá dịch vụ tăng gấp đôi', 'Laura bị tính hai dịch vụ cô không đăng ký', 'Laura quên trả tiền tháng trước'], answer: 2,
          explain: 'Se me han cobrado dos servicios que no he contratado.' },
        { q: 'Laura gửi kèm theo email những gì?', options: ['Bản sao hoá đơn và hợp đồng gốc', 'Chứng chỉ ngoại ngữ', 'Đơn xin việc', 'Ảnh chụp điện thoại'], answer: 0,
          explain: 'Les remito adjunta una copia de la factura, así como el contrato original.' },
        { q: 'Giọng điệu của email có thể mô tả thế nào?', options: ['Giận dữ và thô lỗ', 'Thân mật như viết cho bạn', 'Thờ ơ, không quan tâm kết quả', 'Lịch sự nhưng kiên quyết'], answer: 3,
          explain: 'Laura dùng ustedes, les ruego, atentamente (lịch sự) nhưng đặt thời hạn 15 ngày và nêu bước tiếp theo (kiên quyết).' }
      ]
    }
  }
};
