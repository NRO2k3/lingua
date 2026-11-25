// Phần bổ sung bài học tiếng Tây Ban Nha – cấp A2
export default {
  'es-a2-1': {
    vocab: [
      { w: 'la fecha', ipa: 'la PHÊ-cha', vi: 'ngày (tháng)', ex: '¿Qué fecha es hoy?', exVi: 'Hôm nay là ngày bao nhiêu?' },
      { w: 'el cumpleaños', ipa: 'êl cum-plê-A-nhôs', vi: 'sinh nhật', ex: 'Mi cumpleaños es el 3 de marzo.', exVi: 'Sinh nhật tôi là ngày 3 tháng 3.' },
      { w: 'el minuto', ipa: 'êl mi-NU-tô', vi: 'phút', ex: 'El autobús llega en cinco minutos.', exVi: 'Năm phút nữa xe buýt đến.' },
      { w: 'tarde', ipa: 'TAR-đê', vi: 'muộn, trễ', ex: 'Lo siento, llego tarde.', exVi: 'Xin lỗi, tôi đến muộn.' },
      { w: 'quedar', ipa: 'kê-ĐAR', vi: 'hẹn gặp', ex: '¿Quedamos el viernes a las siete?', exVi: 'Mình hẹn nhau thứ Sáu lúc bảy giờ nhé?' },
      { w: 'tardar', ipa: 'tar-ĐAR', vi: 'mất (bao lâu)', ex: 'Tardo veinte minutos en llegar al trabajo.', exVi: 'Tôi mất hai mươi phút để đến chỗ làm.' },
      { w: 'la prisa', ipa: 'la PRI-xa', vi: 'sự vội vàng (tener prisa: đang vội)', ex: 'Tengo prisa, son las nueve menos cinco.', exVi: 'Tôi đang vội, đã chín giờ kém năm rồi.' },
      { w: 'el reloj', ipa: 'êl rrê-LÔKH', vi: 'đồng hồ', ex: 'Mi reloj dice que son las tres y cuarto.', exVi: 'Đồng hồ của tôi chỉ ba giờ mười lăm.' },
      { w: 'el mediodía', ipa: 'êl mê-đi-ô-ĐI-a', vi: 'buổi trưa, giữa trưa', ex: 'Te llamo a mediodía.', exVi: 'Mình gọi cho bạn vào buổi trưa.' },
      { w: 'el rato', ipa: 'êl RRA-tô', vi: 'một lúc, một lát', ex: 'Espera un rato, por favor.', exVi: 'Làm ơn đợi một lát.' }
    ],
    exercises: [
      { type: 'mc', q: '¿___ es tu cumpleaños?', options: ['Cuándo', 'Qué hora', 'Cuánto'], answer: 0,
        explain: 'Hỏi vào ngày nào dùng cuándo (khi nào).' },
      { type: 'fill', q: 'Lo siento, el tren llega ___.', answer: ['tarde'], hint: 'muộn',
        explain: 'Muộn, trễ = tarde. Đừng nhầm với "buenas tardes" (chào buổi chiều).' },
      { type: 'mc', q: '12:30 →', options: ['Son las doce y media.', 'Es la doce y media.', 'Son las doce menos media.'], answer: 0,
        explain: 'Mười hai giờ là số nhiều (las doce) → son; rưỡi = y media.' },
      { type: 'order', vi: 'Mình hẹn nhau thứ Sáu nhé?', words: ['viernes?', '¿Quedamos', 'el'],
        answer: '¿Quedamos el viernes?' },
      { type: 'fill', q: 'Mi cumpleaños es el 9 ___ junio.', answer: ['de'], hint: 'el + số + ... + tháng',
        explain: 'Ngày tháng: el + số + de + tháng → el 9 de junio.' },
      { type: 'mc', q: 'Tengo ___, el autobús sale en dos minutos.', options: ['prisa', 'fecha', 'rato'], answer: 0,
        explain: 'Tener prisa = đang vội.' },
      { type: 'order', vi: 'Tôi mất mười phút để đến trường.', words: ['minutos', 'a', 'Tardo', 'escuela', 'la', 'diez', 'llegar', 'en'],
        answer: 'Tardo diez minutos en llegar a la escuela' },
      { type: 'mc', q: '¿Qué fecha es hoy?', options: ['Es el 25 de noviembre.', 'Son las cinco y diez.', 'Tardo un rato.'], answer: 0,
        explain: 'Hỏi fecha (ngày tháng) → trả lời bằng el + số + de + tháng.' }
    ],
    reading: {
      title: 'Una cita con Marta',
      titleVi: 'Cuộc hẹn với Marta',
      text: [
        'Hoy es viernes, 14 de marzo. Es el cumpleaños de mi amiga Marta y quedamos a las ocho y media de la tarde en un restaurante del centro. Por la mañana trabajo y a mediodía como con mis compañeros. Termino a las seis, así que tengo un rato para ir a casa y ducharme.',
        'Pero a las siete y media miro el reloj y veo que es tarde. El autobús tarda veinte minutos en llegar al centro y tengo mucha prisa. Llamo a Marta: «Lo siento, llego diez minutos tarde».',
        'Marta responde: «No pasa nada, te espero». Al final llego a las nueve menos veinte. Marta está muy contenta con su regalo y cenamos juntos.'
      ],
      vi: [
        'Hôm nay là thứ Sáu, ngày 14 tháng 3. Hôm nay là sinh nhật bạn tôi, Marta, và chúng tôi hẹn nhau lúc tám giờ rưỡi tối ở một nhà hàng trong trung tâm. Buổi sáng tôi làm việc và buổi trưa tôi ăn cùng đồng nghiệp. Tôi xong việc lúc sáu giờ, nên có một lúc để về nhà tắm.',
        'Nhưng lúc bảy giờ rưỡi tôi nhìn đồng hồ và thấy đã muộn. Xe buýt mất hai mươi phút để đến trung tâm và tôi rất vội. Tôi gọi cho Marta: «Xin lỗi, mình sẽ đến muộn mười phút».',
        'Marta trả lời: «Không sao đâu, mình đợi bạn». Cuối cùng tôi đến lúc chín giờ kém hai mươi. Marta rất vui với món quà của mình và chúng tôi ăn tối cùng nhau.'
      ],
      questions: [
        { q: 'Hôm nay là ngày gì đặc biệt với Marta?', options: ['Sinh nhật', 'Ngày cưới', 'Ngày đầu đi làm', 'Ngày nghỉ hè'], answer: 0,
          explain: 'Es el cumpleaños de mi amiga Marta.' },
        { q: 'Hai người hẹn nhau lúc mấy giờ?', options: ['7:30', '8:30', '8:40', '6:00'], answer: 1,
          explain: 'A las ocho y media de la tarde = 8:30 tối.' },
        { q: 'Vì sao người viết đến muộn?', options: ['Xe buýt bị hỏng', 'Đã muộn mà xe buýt mất 20 phút', 'Quên ngày hẹn', 'Phải làm thêm giờ'], answer: 1,
          explain: 'Lúc 7:30 thấy đã muộn và el autobús tarda veinte minutos.' },
        { q: 'Người viết đến nhà hàng lúc mấy giờ?', options: ['8:20', '8:40', '9:20', '8:30'], answer: 1,
          explain: 'Las nueve menos veinte = chín giờ kém hai mươi = 8:40.' }
      ]
    }
  },

  'es-a2-2': {
    vocab: [
      { w: 'el precio', ipa: 'êl PRÊ-θi-ô', vi: 'giá', ex: 'El precio de esta camisa es muy bueno.', exVi: 'Giá của chiếc áo sơ mi này rất tốt.' },
      { w: 'la ropa', ipa: 'la RRÔ-pa', vi: 'quần áo', ex: 'Compro ropa en el centro.', exVi: 'Tôi mua quần áo ở trung tâm.' },
      { w: 'costar', ipa: 'côs-TAR', vi: 'có giá, tốn (tiền)', ex: '¿Cuánto cuesta este vestido?', exVi: 'Chiếc váy này giá bao nhiêu?' },
      { w: 'la bolsa', ipa: 'la BÔL-xa', vi: 'cái túi', ex: '¿Necesita una bolsa?', exVi: 'Anh/chị có cần túi không?' },
      { w: 'la tarjeta', ipa: 'la tar-KHÊ-ta', vi: 'thẻ (ngân hàng)', ex: '¿Puedo pagar con tarjeta?', exVi: 'Tôi trả bằng thẻ được không?' },
      { w: 'el mercado', ipa: 'êl mêr-CA-đô', vi: 'chợ', ex: 'Los sábados voy al mercado.', exVi: 'Thứ Bảy nào tôi cũng đi chợ.' },
      { w: 'probarse', ipa: 'prô-BAR-xê', vi: 'mặc thử, đi thử', ex: '¿Puedo probarme estos pantalones?', exVi: 'Tôi mặc thử chiếc quần này được không?' },
      { w: 'pagar', ipa: 'pa-GAR', vi: 'trả tiền', ex: 'Pago en efectivo.', exVi: 'Tôi trả bằng tiền mặt.' },
      { w: 'el traje', ipa: 'êl TRA-khê', vi: 'bộ com-lê, bộ vest', ex: 'Mi padre lleva un traje negro.', exVi: 'Bố tôi mặc một bộ com-lê đen.' },
      { w: 'el cliente / la clienta', ipa: 'êl cli-ÊN-tê / la cli-ÊN-ta', vi: 'khách hàng', ex: 'Hoy la tienda tiene muchos clientes.', exVi: 'Hôm nay cửa hàng có nhiều khách.' }
    ],
    exercises: [
      { type: 'mc', q: 'Las bolsas ___ en la caja.', options: ['son', 'están', 'hay'], answer: 1,
        explain: 'Nói vị trí của vật đã xác định (las bolsas) → estar: están.' },
      { type: 'fill', q: '¿Cuánto ___ esta bolsa?', answer: ['cuesta'], hint: 'costar, số ít',
        explain: 'Một món (esta bolsa) → cuesta. Costar đổi o → ue.' },
      { type: 'mc', q: 'El traje ___ de lana.', options: ['está', 'es', 'cuesta'], answer: 1,
        explain: 'Chất liệu → ser: es de lana (làm bằng len).' },
      { type: 'order', vi: 'Tôi trả bằng thẻ được không?', words: ['tarjeta?', 'pagar', '¿Puedo', 'con'],
        answer: '¿Puedo pagar con tarjeta?' },
      { type: 'fill', q: '¿Dónde puedo ___ esta camisa?', answer: ['probarme'], hint: 'probarse, ngôi yo (mặc thử)',
        explain: 'Động từ phản thân sau puedo đổi đuôi theo người nói: probarme.' },
      { type: 'mc', q: 'El cliente ___ muy contento con su compra.', options: ['es', 'está', 'son'], answer: 1,
        explain: 'Cảm xúc, trạng thái → estar: está contento.' },
      { type: 'order', vi: 'Quần áo ở chợ thì rẻ.', words: ['barata', 'La', 'mercado', 'es', 'ropa', 'del'],
        answer: 'La ropa del mercado es barata' },
      { type: 'mc', q: '¿Dónde compras fruta barata? — En el ___.', options: ['mercado', 'probador', 'traje'], answer: 0,
        explain: 'El mercado = chợ, nơi bán trái cây, rau, thịt...' }
    ],
    reading: {
      title: 'De compras con Pablo',
      titleVi: 'Đi mua sắm cùng Pablo',
      text: [
        'El sábado por la mañana Lucía va de compras con su hermano Pablo. Primero van al mercado. Allí la fruta es fresca y los precios son bajos. Después entran en una tienda de ropa porque Pablo necesita un traje para una fiesta.',
        'Pablo se prueba un traje azul en el probador. El traje es bonito, pero le está un poco grande. La dependienta le trae una talla más pequeña. «¿Cuánto cuesta?», pregunta Pablo. «Ciento veinte euros», responde ella. Es un poco caro, pero a Pablo le encanta.',
        'Pablo paga con tarjeta y la dependienta pone el traje en una bolsa. Lucía no compra nada, pero está contenta: ¡su hermano es un cliente feliz!'
      ],
      vi: [
        'Sáng thứ Bảy, Lucía đi mua sắm với em trai là Pablo. Đầu tiên họ đi chợ. Ở đó trái cây tươi và giá rẻ. Sau đó họ vào một cửa hàng quần áo vì Pablo cần một bộ com-lê để đi dự tiệc.',
        'Pablo mặc thử một bộ com-lê màu xanh trong phòng thử đồ. Bộ com-lê đẹp nhưng anh mặc hơi rộng. Cô bán hàng mang đến cho anh một cỡ nhỏ hơn. «Bộ này giá bao nhiêu?», Pablo hỏi. «Một trăm hai mươi euro», cô trả lời. Hơi đắt một chút, nhưng Pablo rất thích.',
        'Pablo trả bằng thẻ và cô bán hàng cho bộ com-lê vào túi. Lucía không mua gì, nhưng cô vẫn vui: em trai cô là một khách hàng hài lòng!'
      ],
      questions: [
        { q: 'Đầu tiên hai chị em đi đâu?', options: ['Cửa hàng quần áo', 'Chợ', 'Ngân hàng', 'Nhà hàng'], answer: 1,
          explain: 'Primero van al mercado.' },
        { q: 'Bộ com-lê đầu tiên có vấn đề gì?', options: ['Quá đắt', 'Hơi rộng', 'Màu không đẹp', 'Bị bẩn'], answer: 1,
          explain: 'Le está un poco grande = anh mặc hơi rộng.' },
        { q: 'Bộ com-lê giá bao nhiêu?', options: ['20 euro', '100 euro', '120 euro', '220 euro'], answer: 2,
          explain: 'Ciento veinte euros = 120 euro.' },
        { q: 'Pablo trả tiền bằng cách nào?', options: ['Tiền mặt', 'Bằng thẻ', 'Lucía trả hộ', 'Chưa trả'], answer: 1,
          explain: 'Pablo paga con tarjeta.' }
      ]
    }
  },

  'es-a2-3': {
    vocab: [
      { w: 'el piso', ipa: 'êl PI-xô', vi: 'căn hộ (ở Tây Ban Nha)', ex: 'Vivo en un piso pequeño en el centro.', exVi: 'Tôi sống trong một căn hộ nhỏ ở trung tâm.' },
      { w: 'la habitación', ipa: 'la a-bi-ta-θi-ÔN', vi: 'căn phòng', ex: 'Mi piso tiene tres habitaciones.', exVi: 'Căn hộ của tôi có ba phòng.' },
      { w: 'el ascensor', ipa: 'êl as-θên-XÔR', vi: 'thang máy', ex: 'El ascensor está a la derecha de la entrada.', exVi: 'Thang máy ở bên phải lối vào.' },
      { w: 'el edificio', ipa: 'êl ê-đi-PHI-θi-ô', vi: 'toà nhà', ex: 'Mi piso está en un edificio antiguo.', exVi: 'Căn hộ của tôi ở trong một toà nhà cũ.' },
      { w: 'el vecino / la vecina', ipa: 'êl bê-θI-nô / la bê-θI-na', vi: 'hàng xóm', ex: 'Mi vecina es muy simpática.', exVi: 'Bà hàng xóm của tôi rất dễ mến.' },
      { w: 'cruzar', ipa: 'cru-θAR', vi: 'băng qua, đi qua', ex: 'Cruza la calle y gira a la derecha.', exVi: 'Băng qua đường rồi rẽ phải.' },
      { w: 'la esquina', ipa: 'la ês-KI-na', vi: 'góc phố', ex: 'La farmacia está en la esquina.', exVi: 'Hiệu thuốc ở góc phố.' },
      { w: 'cerca de', ipa: 'θÊR-ca đê', vi: 'gần', ex: 'Mi casa está cerca de la estación.', exVi: 'Nhà tôi ở gần nhà ga.' },
      { w: 'lejos de', ipa: 'LÊ-khôs đê', vi: 'xa', ex: 'El museo está lejos de aquí.', exVi: 'Bảo tàng ở xa chỗ này.' },
      { w: 'el metro', ipa: 'êl MÊ-trô', vi: 'tàu điện ngầm', ex: 'Voy al trabajo en metro.', exVi: 'Tôi đi làm bằng tàu điện ngầm.' }
    ],
    exercises: [
      { type: 'mc', q: '¿___ un metro cerca de aquí?', options: ['Hay', 'Está', 'Es'], answer: 0,
        explain: 'Hỏi có tồn tại hay không, đi với un → hay.' },
      { type: 'mc', q: 'El edificio ___ cerca de la plaza.', options: ['hay', 'está', 'es'], answer: 1,
        explain: 'Vị trí của vật đã xác định (el edificio) → está.' },
      { type: 'fill', q: '___ la calle y gira a la izquierda.', answer: ['cruza'], hint: 'cruzar, mệnh lệnh với tú',
        explain: 'Mệnh lệnh tú giống dạng él ở hiện tại: cruzar → cruza.' },
      { type: 'order', vi: 'Nhà ga có xa đây không?', words: ['lejos', '¿La', 'aquí?', 'está', 'de', 'estación'],
        answer: '¿La estación está lejos de aquí?', alt: ['está ¿La estación lejos de aquí?'] },
      { type: 'fill', q: 'El banco está cerca ___ metro.', answer: ['del'], hint: 'de + el',
        explain: 'Cerca de + el metro → cerca del metro.' },
      { type: 'mc', q: 'En mi edificio ___ veinte pisos.', options: ['hay', 'están', 'es'], answer: 0,
        explain: 'Nói số lượng (veinte pisos) tồn tại → hay, không đổi theo số nhiều.' },
      { type: 'order', vi: 'Hàng xóm của tôi sống ở căn hộ bên cạnh.', words: ['al', 'Mi', 'vive', 'de', 'vecino', 'el', 'en', 'lado', 'piso'],
        answer: 'Mi vecino vive en el piso de al lado' },
      { type: 'mc', q: 'Mi dormitorio tiene una ___ grande y entra mucho sol.', options: ['ventana', 'esquina', 'calle'], answer: 0,
        explain: 'Ánh nắng vào phòng qua cửa sổ: la ventana.' }
    ],
    reading: {
      title: 'Mi nuevo piso',
      titleVi: 'Căn hộ mới của tôi',
      text: [
        'Me llamo Andrés y vivo en un piso nuevo en Sevilla. El piso está en la tercera planta de un edificio antiguo. Tiene dos habitaciones, una cocina pequeña, un baño y un salón con una ventana grande. Desde la ventana veo la plaza y muchos árboles.',
        'El barrio me gusta mucho. Hay un supermercado en la esquina y el banco está al lado de la farmacia. La estación de metro está muy cerca de mi casa, a cinco minutos a pie. El centro está un poco lejos, pero en metro tardo solo diez minutos.',
        'Mi vecina, la señora Carmen, es muy amable. El primer día me explicó cómo llegar al mercado: «Cruza la calle, sigue todo recto y después gira a la izquierda. El mercado está enfrente del parque».'
      ],
      vi: [
        'Tôi tên là Andrés và tôi sống trong một căn hộ mới ở Sevilla. Căn hộ ở tầng ba của một toà nhà cũ. Nó có hai phòng, một bếp nhỏ, một phòng tắm và một phòng khách có cửa sổ lớn. Từ cửa sổ tôi nhìn thấy quảng trường và nhiều cây xanh.',
        'Tôi rất thích khu phố này. Có một siêu thị ở góc phố và ngân hàng nằm cạnh hiệu thuốc. Ga tàu điện ngầm rất gần nhà tôi, đi bộ năm phút. Trung tâm thì hơi xa, nhưng đi tàu điện ngầm tôi chỉ mất mười phút.',
        'Hàng xóm của tôi, bà Carmen, rất tốt bụng. Ngày đầu tiên bà chỉ cho tôi cách đến chợ: «Cháu băng qua đường, đi thẳng rồi rẽ trái. Chợ ở đối diện công viên».'
      ],
      questions: [
        { q: 'Căn hộ của Andrés có mấy phòng (habitaciones)?', options: ['Một', 'Hai', 'Ba', 'Bốn'], answer: 1,
          explain: 'Tiene dos habitaciones.' },
        { q: 'Từ cửa sổ, Andrés nhìn thấy gì?', options: ['Nhà ga', 'Quảng trường và cây xanh', 'Biển', 'Khu chợ'], answer: 1,
          explain: 'Desde la ventana veo la plaza y muchos árboles.' },
        { q: 'Đi bộ từ nhà Andrés đến ga tàu điện ngầm mất bao lâu?', options: ['5 phút', '10 phút', '15 phút', '20 phút'], answer: 0,
          explain: 'A cinco minutos a pie = đi bộ năm phút.' },
        { q: 'Để đến chợ, sau khi đi thẳng thì phải làm gì?', options: ['Rẽ phải', 'Rẽ trái', 'Băng qua quảng trường', 'Đi tàu điện ngầm'], answer: 1,
          explain: 'Sigue todo recto y después gira a la izquierda.' }
      ]
    }
  },

  'es-a2-4': {
    vocab: [
      { w: 'el cine', ipa: 'êl θI-nê', vi: 'rạp chiếu phim', ex: 'El sábado fui al cine con mi novia.', exVi: 'Thứ Bảy tôi đã đi xem phim với bạn gái.' },
      { w: 'la cena', ipa: 'la θÊ-na', vi: 'bữa tối', ex: 'La cena fue deliciosa.', exVi: 'Bữa tối đã rất ngon.' },
      { w: 'celebrar', ipa: 'θê-lê-BRAR', vi: 'tổ chức, ăn mừng', ex: 'Ayer celebré mi cumpleaños en un restaurante.', exVi: 'Hôm qua tôi đã tổ chức sinh nhật ở một nhà hàng.' },
      { w: 'disfrutar', ipa: 'đis-phru-TAR', vi: 'tận hưởng, thích thú', ex: 'Disfruté mucho del concierto.', exVi: 'Tôi đã rất thích buổi hoà nhạc.' },
      { w: 'la fiesta', ipa: 'la phi-ÊS-ta', vi: 'bữa tiệc', ex: 'Anoche hubo una fiesta en casa de Luis.', exVi: 'Tối qua có một bữa tiệc ở nhà Luis.' },
      { w: 'cansado / cansada', ipa: 'can-XA-đô / can-XA-đa', vi: 'mệt', ex: 'Volví a casa muy cansado.', exVi: 'Tôi đã trở về nhà rất mệt.' },
      { w: 'la montaña', ipa: 'la môn-TA-nha', vi: 'núi', ex: 'El domingo fuimos a la montaña.', exVi: 'Chủ nhật chúng tôi đã đi núi.' },
      { w: 'el mar', ipa: 'êl mar', vi: 'biển', ex: 'Ayer nadé en el mar.', exVi: 'Hôm qua tôi đã bơi ở biển.' },
      { w: 'la semana pasada', ipa: 'la xê-MA-na pa-XA-đa', vi: 'tuần trước', ex: 'La semana pasada visité a mis abuelos.', exVi: 'Tuần trước tôi đã đến thăm ông bà.' },
      { w: 'la boda', ipa: 'la BÔ-đa', vi: 'đám cưới', ex: 'En junio fuimos a la boda de mi prima.', exVi: 'Tháng Sáu chúng tôi đã đi đám cưới chị họ tôi.' }
    ],
    exercises: [
      { type: 'mc', q: 'Anoche nosotros ___ al cine.', options: ['fuimos', 'vamos', 'fueron'], answer: 0,
        explain: 'Anoche → quá khứ; ir, ngôi nosotros → fuimos.' },
      { type: 'fill', q: 'El sábado yo ___ mucho de la fiesta.', answer: ['disfruté'], hint: 'disfrutar, quá khứ',
        explain: 'Động từ -ar, ngôi yo ở quá khứ: -é → disfruté (nhớ dấu).' },
      { type: 'mc', q: 'La semana pasada mis padres ___ su aniversario.', options: ['celebraron', 'celebramos', 'celebran'], answer: 0,
        explain: 'Mis padres = ellos → -aron: celebraron.' },
      { type: 'order', vi: 'Hôm qua tôi đã về nhà rất mệt.', words: ['casa', 'muy', 'Ayer', 'cansado', 'volví', 'a'],
        answer: 'Ayer volví a casa muy cansado', alt: ['volví a casa muy cansado Ayer', 'Ayer volví muy cansado a casa'] },
      { type: 'fill', q: 'La boda ___ muy bonita.', answer: ['fue'], hint: 'ser, quá khứ',
        explain: 'Ser ở quá khứ, ngôi ella: fue (giống hệt ir).' },
      { type: 'mc', q: '¿Qué ___ vosotros el domingo?', options: ['hicisteis', 'hicieron', 'hacéis'], answer: 0,
        explain: 'Hacer quá khứ, ngôi vosotros → hicisteis.' },
      { type: 'order', vi: 'Cuối tuần trước bạn có đi biển không?', words: ['semana', '¿Fuiste', 'el', 'pasado?', 'mar', 'fin', 'al', 'de'],
        answer: '¿Fuiste al mar el fin de semana pasado?', alt: ['el fin de semana pasado? ¿Fuiste al mar'] },
      { type: 'mc', q: 'Ella ___ una película muy divertida en el cine.', options: ['vio', 'vió', 'veo'], answer: 0,
        explain: 'Ver quá khứ, ngôi ella → vio, không có dấu vì chỉ có một âm tiết.' }
    ],
    reading: {
      title: 'Un fin de semana en la montaña',
      titleVi: 'Một cuối tuần trên núi',
      text: [
        'El fin de semana pasado fui a la montaña con mis amigos Sara y Javier. Salimos de Madrid el sábado a las ocho de la mañana y viajamos dos horas en coche. Por la tarde caminamos por el bosque y vimos un río muy bonito.',
        'Por la noche cenamos en un pequeño restaurante del pueblo. La cena fue deliciosa: comimos carne y bebimos vino. Después celebramos el cumpleaños de Javier con una tarta. ¡Fue una fiesta muy divertida!',
        'El domingo nos levantamos tarde. Hizo sol y disfrutamos mucho de las vistas. Volvimos a casa por la noche, muy cansados pero contentos. La próxima vez queremos ir al mar.'
      ],
      vi: [
        'Cuối tuần trước tôi đã đi núi với hai người bạn là Sara và Javier. Chúng tôi rời Madrid lúc tám giờ sáng thứ Bảy và đi ô tô hai tiếng. Buổi chiều chúng tôi đi bộ trong rừng và nhìn thấy một con sông rất đẹp.',
        'Buổi tối chúng tôi ăn ở một nhà hàng nhỏ trong làng. Bữa tối rất ngon: chúng tôi ăn thịt và uống rượu vang. Sau đó chúng tôi tổ chức sinh nhật cho Javier với một chiếc bánh. Đó là một bữa tiệc rất vui!',
        'Chủ nhật chúng tôi dậy muộn. Trời nắng và chúng tôi rất thích ngắm cảnh. Chúng tôi về nhà vào buổi tối, rất mệt nhưng vui. Lần sau chúng tôi muốn đi biển.'
      ],
      questions: [
        { q: 'Họ đi lên núi bằng phương tiện gì?', options: ['Tàu hoả', 'Ô tô', 'Máy bay', 'Xe buýt'], answer: 1,
          explain: 'Viajamos dos horas en coche.' },
        { q: 'Chiều thứ Bảy họ làm gì?', options: ['Bơi ở biển', 'Đi bộ trong rừng', 'Xem phim', 'Ngủ trưa'], answer: 1,
          explain: 'Por la tarde caminamos por el bosque.' },
        { q: 'Tối thứ Bảy họ ăn mừng điều gì?', options: ['Đám cưới của Sara', 'Sinh nhật của Javier', 'Kỳ nghỉ hè', 'Công việc mới'], answer: 1,
          explain: 'Celebramos el cumpleaños de Javier.' },
        { q: 'Họ về nhà với tâm trạng thế nào?', options: ['Mệt nhưng vui', 'Buồn', 'Bực bội', 'Bị ốm'], answer: 0,
          explain: 'Muy cansados pero contentos = rất mệt nhưng vui.' }
      ]
    }
  },

  'es-a2-5': {
    vocab: [
      { w: 'jugar', ipa: 'khu-GAR', vi: 'chơi (thể thao, trò chơi)', ex: 'Juego al tenis con mi padre.', exVi: 'Tôi chơi quần vợt với bố.' },
      { w: 'cantar', ipa: 'can-TAR', vi: 'hát', ex: 'A mi hermana le encanta cantar.', exVi: 'Em gái tôi rất mê hát.' },
      { w: 'la canción', ipa: 'la can-θi-ÔN', vi: 'bài hát', ex: 'Me gusta mucho esta canción.', exVi: 'Tôi rất thích bài hát này.' },
      { w: 'el equipo', ipa: 'êl ê-KI-pô', vi: 'đội (thể thao)', ex: 'Mi equipo favorito es el Real Madrid.', exVi: 'Đội bóng yêu thích của tôi là Real Madrid.' },
      { w: 'el partido', ipa: 'êl par-TI-đô', vi: 'trận đấu', ex: 'Vemos el partido en la tele.', exVi: 'Chúng tôi xem trận đấu trên ti vi.' },
      { w: 'ganar', ipa: 'ga-NAR', vi: 'thắng', ex: 'Nuestro equipo casi siempre gana.', exVi: 'Đội chúng tôi hầu như luôn thắng.' },
      { w: 'caminar', ipa: 'ca-mi-NAR', vi: 'đi bộ', ex: 'Me gusta caminar por el parque.', exVi: 'Tôi thích đi bộ trong công viên.' },
      { w: 'pintar', ipa: 'pin-TAR', vi: 'vẽ (tranh), sơn', ex: 'A mi abuelo le gusta pintar.', exVi: 'Ông tôi thích vẽ tranh.' },
      { w: 'a veces', ipa: 'a BÊ-θês', vi: 'đôi khi, thỉnh thoảng', ex: 'A veces nado en la piscina.', exVi: 'Thỉnh thoảng tôi bơi ở bể bơi.' },
      { w: 'favorito / favorita', ipa: 'pha-bô-RI-tô / pha-bô-RI-ta', vi: 'yêu thích', ex: '¿Cuál es tu deporte favorito?', exVi: 'Môn thể thao yêu thích của bạn là gì?' }
    ],
    exercises: [
      { type: 'mc', q: 'A nosotros nos ___ cantar.', options: ['gusta', 'gustan', 'gustamos'], answer: 0,
        explain: 'Thứ được thích là một động từ nguyên mẫu (cantar) → luôn dùng gusta.' },
      { type: 'fill', q: 'Los sábados (yo) ___ al fútbol con mis amigos.', answer: ['juego'], hint: 'jugar, ngôi yo',
        explain: 'Jugar đổi u → ue: juego. Chơi môn thể thao: jugar a + môn (al fútbol).' },
      { type: 'mc', q: 'A mis amigos ___ encantan las canciones de Shakira.', options: ['le', 'les', 'me'], answer: 1,
        explain: 'Mis amigos là nhiều người → les.' },
      { type: 'order', vi: 'Thỉnh thoảng tôi đi bộ trong công viên.', words: ['parque', 'camino', 'A', 'el', 'veces', 'por'],
        answer: 'A veces camino por el parque', alt: ['camino por el parque A veces'] },
      { type: 'fill', q: 'Me ___ los partidos de tenis.', answer: ['encantan'], hint: 'encantar',
        explain: 'Los partidos số nhiều → encantan.' },
      { type: 'mc', q: '— No me gusta pintar. — A mí ___.', options: ['también', 'tampoco', 'siempre'], answer: 1,
        explain: 'Đồng ý với câu phủ định → a mí tampoco (tôi cũng không).' },
      { type: 'order', vi: 'Đội bóng yêu thích của bạn là đội nào?', words: ['equipo', 'es', '¿Cuál', 'favorito?', 'tu'],
        answer: '¿Cuál es tu equipo favorito?' },
      { type: 'mc', q: 'Mi equipo juega muy bien y casi siempre ___.', options: ['gana', 'canta', 'pinta'], answer: 0,
        explain: 'Đội chơi hay thì thắng: gana (ganar).' }
    ],
    reading: {
      title: 'Una familia muy activa',
      titleVi: 'Một gia đình rất năng động',
      text: [
        'En mi familia todos tenemos aficiones diferentes. A mi padre le encanta el fútbol. Su equipo favorito es el Valencia y nunca se pierde un partido en la tele. Cuando su equipo gana, está muy contento y canta en el salón.',
        'A mi madre no le gusta mucho el deporte, pero le encanta caminar. Casi siempre camina una hora por la mañana. Mi hermano pequeño juega al baloncesto en el colegio dos veces por semana. A veces va también a la piscina a nadar.',
        '¿Y yo? En mi tiempo libre me gusta pintar y escuchar música. Mi canción favorita es de una cantante española. A mis padres también les gusta, ¡pero no les gusta cuando la canto yo!'
      ],
      vi: [
        'Trong gia đình tôi, mỗi người có một sở thích khác nhau. Bố tôi mê bóng đá. Đội yêu thích của bố là Valencia và bố không bao giờ bỏ lỡ một trận nào trên ti vi. Khi đội của bố thắng, bố rất vui và hát trong phòng khách.',
        'Mẹ tôi không thích thể thao lắm, nhưng mẹ rất mê đi bộ. Hầu như sáng nào mẹ cũng đi bộ một tiếng. Em trai tôi chơi bóng rổ ở trường hai lần một tuần. Thỉnh thoảng em cũng đi bể bơi để bơi.',
        'Còn tôi thì sao? Lúc rảnh tôi thích vẽ và nghe nhạc. Bài hát yêu thích của tôi là của một nữ ca sĩ Tây Ban Nha. Bố mẹ tôi cũng thích bài đó, nhưng họ không thích khi tôi hát nó!'
      ],
      questions: [
        { q: 'Bố của người viết mê môn gì?', options: ['Bóng rổ', 'Bóng đá', 'Bơi lội', 'Vẽ tranh'], answer: 1,
          explain: 'A mi padre le encanta el fútbol.' },
        { q: 'Mẹ thường làm gì vào buổi sáng?', options: ['Đi bộ một tiếng', 'Chơi bóng rổ', 'Hát', 'Đi bơi'], answer: 0,
          explain: 'Casi siempre camina una hora por la mañana.' },
        { q: 'Em trai chơi bóng rổ bao lâu một lần?', options: ['Mỗi ngày', 'Hai lần một tuần', 'Không bao giờ', 'Mỗi tháng một lần'], answer: 1,
          explain: 'Dos veces por semana = hai lần một tuần.' },
        { q: 'Bố mẹ không thích điều gì?', options: ['Bài hát của nữ ca sĩ Tây Ban Nha', 'Khi người viết hát bài đó', 'Khi người viết vẽ', 'Bóng đá'], answer: 1,
          explain: 'No les gusta cuando la canto yo = họ không thích khi tôi hát nó.' }
      ]
    }
  },

  'es-a2-6': {
    vocab: [
      { w: 'el avión', ipa: 'êl a-bi-ÔN', vi: 'máy bay', ex: 'Vamos a ir a Barcelona en avión.', exVi: 'Chúng tôi sẽ đi Barcelona bằng máy bay.' },
      { w: 'el tren', ipa: 'êl trên', vi: 'tàu hoả', ex: 'El tren saldrá a las diez.', exVi: 'Tàu sẽ khởi hành lúc mười giờ.' },
      { w: 'la maleta', ipa: 'la ma-LÊ-ta', vi: 'va li', ex: 'Mañana haré la maleta.', exVi: 'Ngày mai tôi sẽ xếp va li.' },
      { w: 'el futuro', ipa: 'êl phu-TU-rô', vi: 'tương lai', ex: 'En el futuro viviré en otro país.', exVi: 'Trong tương lai tôi sẽ sống ở một nước khác.' },
      { w: 'la isla', ipa: 'la IS-la', vi: 'hòn đảo', ex: 'Este verano vamos a visitar una isla.', exVi: 'Hè này chúng tôi sẽ đi thăm một hòn đảo.' },
      { w: 'la costa', ipa: 'la CÔS-ta', vi: 'bờ biển, vùng ven biển', ex: 'Pasaremos una semana en la costa.', exVi: 'Chúng tôi sẽ ở vùng biển một tuần.' },
      { w: 'probablemente', ipa: 'prô-ba-blê-MÊN-tê', vi: 'có lẽ, có khả năng', ex: 'Probablemente lloverá mañana.', exVi: 'Có lẽ ngày mai trời sẽ mưa.' },
      { w: 'el regreso', ipa: 'êl rrê-GRÊ-xô', vi: 'chuyến về, sự trở về', ex: 'El regreso será el domingo.', exVi: 'Chuyến về sẽ vào ngày Chủ nhật.' },
      { w: 'el puerto', ipa: 'êl PUÊR-tô', vi: 'bến cảng', ex: 'El barco saldrá del puerto a las ocho.', exVi: 'Con tàu sẽ rời cảng lúc tám giờ.' },
      { w: 'el aeropuerto', ipa: 'êl a-ê-rô-PUÊR-tô', vi: 'sân bay', ex: 'Iremos al aeropuerto en taxi.', exVi: 'Chúng tôi sẽ đi taxi ra sân bay.' }
    ],
    exercises: [
      { type: 'mc', q: 'El año que viene (yo) ___ a Japón.', options: ['viajaré', 'viajaremos', 'viajará'], answer: 0,
        explain: 'Ngôi yo ở tương lai đơn: nguyên mẫu + -é → viajaré.' },
      { type: 'fill', q: 'Mañana (nosotros) ___ la maleta.', answer: ['haremos'], hint: 'hacer, tương lai',
        explain: 'Hacer bất quy tắc → gốc har- + -emos: haremos.' },
      { type: 'mc', q: 'Probablemente ___ mucho sol en la costa el próximo sábado.', options: ['hará', 'hace', 'hizo'], answer: 0,
        explain: 'Dự đoán về tương lai → futuro: hará (hacer → har-).' },
      { type: 'order', vi: 'Chúng tôi định đi ra đảo bằng máy bay.', words: ['isla', 'a', 'Vamos', 'avión', 'ir', 'la', 'en', 'a'],
        answer: 'Vamos a ir a la isla en avión', alt: ['Vamos a ir en avión a la isla'] },
      { type: 'fill', q: 'El tren ___ a las nueve.', answer: ['saldrá'], hint: 'salir, tương lai',
        explain: 'Salir bất quy tắc → saldr- + -á: saldrá.' },
      { type: 'mc', q: '¿A qué hora ___ (tú) al aeropuerto?', options: ['llegarás', 'llegaré', 'llegarán'], answer: 0,
        explain: 'Ngôi tú ở tương lai: llegar + -ás → llegarás.' },
      { type: 'order', vi: 'Bạn sẽ làm gì trong tương lai?', words: ['el', 'harás', 'futuro?', '¿Qué', 'en'],
        answer: '¿Qué harás en el futuro?' },
      { type: 'mc', q: 'Nos vamos el 1 de agosto y el ___ será el día 15.', options: ['regreso', 'sol', 'avión'], answer: 0,
        explain: 'El regreso = chuyến về; đi ngày 1, về ngày 15.' }
    ],
    reading: {
      title: 'Planes para el verano',
      titleVi: 'Kế hoạch cho mùa hè',
      text: [
        'Este verano Elena y su novio Marcos van a hacer un viaje por España. Ya tienen los billetes de avión. Saldrán de Madrid el 2 de agosto y pasarán tres días en Málaga, en la costa. Allí van a dormir en un hotel cerca de la playa.',
        'Después irán al aeropuerto en tren y volarán a Mallorca, una isla preciosa. Elena quiere nadar en el mar todos los días. Marcos prefiere visitar museos y probar la comida típica. Probablemente hará mucho calor y mucho sol, así que Elena llevará una maleta pequeña con ropa ligera.',
        'El regreso será el 15 de agosto. En el futuro quieren viajar a Sudamérica, pero primero tienen que ahorrar dinero.'
      ],
      vi: [
        'Mùa hè này Elena và bạn trai là Marcos sẽ đi du lịch vòng quanh Tây Ban Nha. Họ đã có vé máy bay. Họ sẽ rời Madrid vào ngày 2 tháng 8 và ở Málaga, vùng ven biển, ba ngày. Ở đó họ sẽ ngủ ở một khách sạn gần bãi biển.',
        'Sau đó họ sẽ đi tàu ra sân bay và bay đến Mallorca, một hòn đảo tuyệt đẹp. Elena muốn bơi ở biển mỗi ngày. Marcos thì thích đi thăm bảo tàng và thử các món ăn đặc trưng. Có lẽ trời sẽ rất nóng và nắng, nên Elena sẽ mang một chiếc va li nhỏ với quần áo mỏng nhẹ.',
        'Chuyến về sẽ vào ngày 15 tháng 8. Trong tương lai họ muốn đi du lịch Nam Mỹ, nhưng trước hết họ phải tiết kiệm tiền.'
      ],
      questions: [
        { q: 'Elena và Marcos khởi hành từ đâu và khi nào?', options: ['Từ Málaga, ngày 2/8', 'Từ Madrid, ngày 2/8', 'Từ Madrid, ngày 15/8', 'Từ Mallorca, ngày 3/8'], answer: 1,
          explain: 'Saldrán de Madrid el 2 de agosto.' },
        { q: 'Ở Málaga họ sẽ ngủ ở đâu?', options: ['Nhà bạn bè', 'Khách sạn gần bãi biển', 'Trên tàu hoả', 'Căn hộ ở trung tâm'], answer: 1,
          explain: 'Van a dormir en un hotel cerca de la playa.' },
        { q: 'Marcos thích làm gì?', options: ['Bơi ở biển', 'Thăm bảo tàng và thử món ăn đặc trưng', 'Leo núi', 'Đi mua sắm'], answer: 1,
          explain: 'Marcos prefiere visitar museos y probar la comida típica.' },
        { q: 'Vì sao Elena mang va li nhỏ với quần áo mỏng?', options: ['Vì có lẽ trời sẽ rất nóng', 'Vì máy bay không cho mang va li lớn', 'Vì chuyến đi rất ngắn', 'Vì cô ấy không có nhiều quần áo'], answer: 0,
          explain: 'Probablemente hará mucho calor y mucho sol, así que...' }
      ]
    }
  }
};
