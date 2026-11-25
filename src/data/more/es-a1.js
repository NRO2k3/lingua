// Bài mới chèn vào lộ trình – Tiếng Tây Ban Nha A1
export default [
  // ───────────────────────── A1-3b ─────────────────────────
  {
    after: 'es-a1-3',
    unit: {
      id: 'es-a1-3b',
      icon: '😊',
      title: 'Tả người & cảm xúc',
      goal: 'Tả ngoại hình, tính cách của một người, nói ai đang cảm thấy thế nào và đang ở đâu.',
      vocab: [
        { w: 'estar', ipa: 'ês-TAR', vi: 'ở (vị trí); đang (trạng thái, cảm xúc)', ex: 'Mis padres están en Hanói.', exVi: 'Bố mẹ tôi đang ở Hà Nội.' },
        { w: 'contento / contenta', ipa: 'côn-TÊN-tô / côn-TÊN-ta', vi: 'vui, vui vẻ', ex: 'Hoy estoy muy contenta.', exVi: 'Hôm nay tôi rất vui.' },
        { w: 'triste', ipa: 'TRIS-tê', vi: 'buồn', ex: '¿Por qué estás triste?', exVi: 'Sao bạn buồn thế?' },
        { w: 'nervioso / nerviosa', ipa: 'nêr-bi-Ô-xô / nêr-bi-Ô-xa', vi: 'hồi hộp, căng thẳng', ex: 'Estoy nervioso: hoy tengo un examen.', exVi: 'Tôi hồi hộp: hôm nay tôi có bài kiểm tra.' },
        { w: 'preocupado / preocupada', ipa: 'prê-ô-cu-PA-đô / prê-ô-cu-PA-đa', vi: 'lo lắng', ex: 'Mi madre está preocupada por mi abuelo.', exVi: 'Mẹ tôi đang lo cho ông tôi.' },
        { w: 'enfadado / enfadada', ipa: 'ên-pha-ĐA-đô / ên-pha-ĐA-đa', vi: 'giận, bực', ex: 'El profesor está enfadado con nosotros.', exVi: 'Thầy giáo đang giận chúng tôi.' },
        { w: 'ocupado / ocupada', ipa: 'ô-cu-PA-đô / ô-cu-PA-đa', vi: 'bận', ex: 'Hoy mi padre está muy ocupado.', exVi: 'Hôm nay bố tôi rất bận.' },
        { w: 'bajo / baja', ipa: 'BA-khô / BA-kha', vi: 'thấp', ex: 'Mi abuela es baja.', exVi: 'Bà tôi thấp.' },
        { w: 'delgado / delgada', ipa: 'đêl-GA-đô / đêl-GA-đa', vi: 'gầy, mảnh khảnh', ex: 'Mi primo es alto y delgado.', exVi: 'Anh họ tôi cao và gầy.' },
        { w: 'gordo / gorda', ipa: 'GÔR-đô / GÔR-đa', vi: 'béo, mập', ex: 'Nuestro perro es un poco gordo.', exVi: 'Con chó của chúng tôi hơi béo.' },
        { w: 'guapo / guapa', ipa: 'GOA-pô / GOA-pa', vi: 'đẹp, ưa nhìn (người)', ex: 'Tu hermana es muy guapa.', exVi: 'Chị gái bạn rất xinh.' },
        { w: 'simpático / simpática', ipa: 'xim-PA-ti-cô / xim-PA-ti-ca', vi: 'dễ mến, thân thiện', ex: 'Mi profesora es muy simpática.', exVi: 'Cô giáo tôi rất dễ mến.' },
        { w: 'tímido / tímida', ipa: 'TI-mi-đô / TI-mi-đa', vi: 'nhút nhát', ex: 'Mi hijo es un poco tímido.', exVi: 'Con trai tôi hơi nhút nhát.' },
        { w: 'trabajador / trabajadora', ipa: 'tra-ba-kha-ĐÔR / tra-ba-kha-ĐÔ-ra', vi: 'chăm chỉ', ex: 'Lan es muy trabajadora.', exVi: 'Lan rất chăm chỉ.' },
        { w: 'el pelo', ipa: 'êl PÊ-lô', vi: 'tóc', ex: 'Tengo el pelo negro.', exVi: 'Tóc tôi màu đen.' },
        { w: 'los ojos', ipa: 'lôs Ô-khôs', vi: 'đôi mắt', ex: 'El bebé tiene los ojos azules.', exVi: 'Em bé có đôi mắt xanh.' },
        { w: 'largo / larga', ipa: 'LAR-gô / LAR-ga', vi: 'dài', ex: 'Mi hermana tiene el pelo muy largo.', exVi: 'Chị tôi có mái tóc rất dài.' },
        { w: 'corto / corta', ipa: 'CÔR-tô / CÔR-ta', vi: 'ngắn', ex: 'Mi abuelo tiene el pelo corto y blanco.', exVi: 'Ông tôi tóc ngắn và bạc trắng.' },
        { w: 'rubio / rubia', ipa: 'RRU-bi-ô / RRU-bi-a', vi: 'tóc vàng', ex: 'La niña es rubia.', exVi: 'Bé gái có tóc vàng.' },
        { w: 'moreno / morena', ipa: 'mô-RÊ-nô / mô-RÊ-na', vi: 'tóc sẫm màu; da ngăm', ex: 'Mi padre es moreno y tiene los ojos negros.', exVi: 'Bố tôi tóc sẫm màu và có đôi mắt đen.' }
      ],
      grammar: {
        title: 'Động từ estar; ser (ngoại hình, tính cách) và estar (trạng thái lúc này, vị trí)',
        explain: [
          'Estar cũng dịch là "thì, là, ở" nhưng dùng khác ser. Estar là động từ bất quy tắc: estoy, estás, está, estamos, estáis, están (xem bảng). Chú ý dấu sắc ở estás, está, estáis, están.',
          'Estar + tính từ để nói trạng thái, cảm xúc LÚC NÀY – thứ có thể thay đổi: Estoy contento (tôi đang vui), Mi madre está preocupada (mẹ tôi đang lo). Tính từ đổi giống và số theo người: Ana está cansada, Ellos están nerviosos. Hỏi thăm: ¿Cómo estás? / ¿Cómo está usted?',
          'Estar còn dùng để nói VỊ TRÍ – ai, cái gì đang ở đâu: ¿Dónde está Pablo? → Está en casa. ¿Dónde estáis? → Estamos en clase. Madrid está en España.',
          'Ser + tính từ để tả ngoại hình và tính cách – những đặc điểm "vốn là như vậy": Pablo es alto y simpático. Hỏi: ¿Cómo es Pablo? (Pablo là người thế nào, trông ra sao?). So sánh: ¿Cómo está Pablo? = Pablo (hôm nay, dạo này) thế nào, có khoẻ không?',
          'Tả tóc và mắt dùng tener: Tiene el pelo largo y los ojos negros. Cũng có thể nói ngắn với ser: Es rubia (cô ấy tóc vàng), Es moreno (anh ấy tóc sẫm màu / da ngăm). Thêm un poco (hơi) hoặc muy (rất) trước tính từ: Es un poco tímido. Estoy muy contenta.'
        ],
        table: [
          ['Chủ ngữ', 'ser (ngoại hình, tính cách)', 'estar (trạng thái, vị trí)'],
          ['yo', 'soy', 'estoy'],
          ['tú', 'eres', 'estás'],
          ['él / ella / usted', 'es', 'está'],
          ['nosotros / nosotras', 'somos', 'estamos'],
          ['vosotros / vosotras', 'sois', 'estáis'],
          ['ellos / ellas / ustedes', 'son', 'están']
        ],
        examples: [
          { t: 'Hoy estoy muy contenta.', vi: 'Hôm nay tôi rất vui.' },
          { t: '¿Dónde están tus padres? — Están en Hanói.', vi: 'Bố mẹ bạn đang ở đâu? — Họ đang ở Hà Nội.' },
          { t: 'Mi hermano es alto y delgado.', vi: 'Anh trai tôi cao và gầy.' },
          { t: 'Lucía es simpática, pero hoy está enfadada.', vi: 'Lucía dễ mến, nhưng hôm nay cô ấy đang giận.' },
          { t: 'Mi abuela tiene el pelo corto y los ojos negros.', vi: 'Bà tôi tóc ngắn và có đôi mắt đen.' }
        ],
        tip: 'Tiếng Việt nói "Tôi buồn" không cần động từ, nhưng tiếng Tây Ban Nha bắt buộc phải có: "Yo triste" ✗ → "Estoy triste" ✓. Cảm xúc và vị trí dùng estar, không dùng ser: "Soy cansado" ✗ → "Estoy cansado" ✓; "Soy en casa" ✗ → "Estoy en casa" ✓. 🌎 Mỹ Latinh: dùng "ustedes están" thay cho "vosotros estáis"; "giận" thường nói là enojado (Estoy enojado) thay cho enfadado.'
      },
      dialogue: [
        { s: 'Lucía', t: '¡Hola, Minh! ¿Qué tal estás?', vi: 'Chào Minh! Bạn thế nào?' },
        { s: 'Minh', t: 'Hola, Lucía. Estoy un poco nervioso: hoy tengo un examen de español.', vi: 'Chào Lucía. Mình hơi hồi hộp: hôm nay mình có bài kiểm tra tiếng Tây Ban Nha.' },
        { s: 'Lucía', t: '¡Ánimo! Eres muy trabajador. Oye, ¿dónde está Pablo?', vi: 'Cố lên! Bạn chăm chỉ lắm mà. À này, Pablo đâu rồi?' },
        { s: 'Minh', t: 'Está en casa. Está triste y no habla mucho.', vi: 'Cậu ấy ở nhà. Cậu ấy đang buồn và không nói nhiều.' },
        { s: 'Lucía', t: '¿Pablo, triste? ¡Pero es muy simpático y siempre está contento!', vi: 'Pablo mà buồn á? Cậu ấy dễ mến và lúc nào cũng vui vẻ cơ mà!' },
        { s: 'Minh', t: 'Sí, pero su novia vive en Italia y él está solo aquí.', vi: 'Ừ, nhưng bạn gái cậu ấy sống ở Ý, còn cậu ấy thì ở đây một mình.' },
        { s: 'Lucía', t: '¡Ah! ¿Y cómo es su novia?', vi: 'À! Thế bạn gái cậu ấy trông thế nào?' },
        { s: 'Minh', t: 'Es baja y rubia, y tiene los ojos azules. Es muy guapa.', vi: 'Cô ấy thấp, tóc vàng và có đôi mắt xanh. Cô ấy rất xinh.' },
        { s: 'Lucía', t: 'Bueno, ¿y tú? ¿Estás preocupado por el examen?', vi: 'Thế còn bạn? Bạn có lo về bài kiểm tra không?' },
        { s: 'Minh', t: 'No mucho. Estoy nervioso, pero no estoy preocupado.', vi: 'Không nhiều lắm. Mình hồi hộp, nhưng không lo.' }
      ],
      exercises: [
        { type: 'mc', q: 'Yo ___ muy contenta hoy.', options: ['estoy', 'soy', 'está', 'estás'], answer: 0,
          explain: 'Cảm xúc lúc này → estar; yo → estoy.' },
        { type: 'fill', q: 'Nosotros ___ en clase.', answer: ['estamos'], hint: 'estar',
          explain: 'Nói vị trí dùng estar; nosotros → estamos.' },
        { type: 'mc', q: 'Mi hermano ___ un chico alto y delgado.', options: ['está', 'son', 'es'], answer: 2,
          explain: 'Tả ngoại hình (lại có danh từ un chico đi sau) → ser; mi hermano (él) → es.' },
        { type: 'order', vi: 'Bố mẹ tôi đang ở Hà Nội.', words: ['Hanói', 'padres', 'en', 'Mis', 'están'], answer: 'Mis padres están en Hanói', alt: ['en Hanói están Mis padres'] },
        { type: 'fill', q: '—¿Dónde ___ tú? —Estoy en casa.', answer: ['estás'], hint: 'estar',
          explain: 'Hỏi vị trí dùng estar; tú → estás (có dấu).' },
        { type: 'mc', q: '"Cô ấy có tóc dài" là:', options: ['Ella está el pelo largo.', 'Ella tiene el pelo largo.', 'Ella es el pelo largo.'], answer: 1,
          explain: 'Tả tóc và mắt dùng tener: tiene el pelo largo.' },
        { type: 'order', vi: 'Hôm nay tôi hơi buồn.', words: ['un', 'Hoy', 'triste', 'estoy', 'poco'], answer: 'Hoy estoy un poco triste', alt: ['estoy un poco triste Hoy'] },
        { type: 'mc', q: 'Ana es simpática, pero hoy ___ enfadada.', options: ['es', 'soy', 'estoy', 'está'], answer: 3,
          explain: 'Trạng thái hôm nay → estar; Ana (ella) → está.' },
        { type: 'fill', q: 'Mis amigas están muy ___. (vui)', answer: ['contentas'], hint: 'contento → đổi giống và số',
          explain: 'Mis amigas là giống cái, số nhiều → contentas.' },
        { type: 'order', vi: 'Pablo là người thế nào?', words: ['es', '¿Cómo', 'Pablo?'], answer: '¿Cómo es Pablo?' },
        { type: 'mc', q: 'Câu "¿Cómo está tu madre?" hỏi điều gì?', options: ['Mẹ bạn trông thế nào (ngoại hình)', 'Mẹ bạn có khoẻ không, đang thế nào', 'Mẹ bạn ở đâu'], answer: 1,
          explain: '¿Cómo está…? hỏi trạng thái lúc này (khoẻ không, vui hay buồn). Hỏi ngoại hình, tính cách là ¿Cómo es…?' },
        { type: 'fill', q: 'Mi abuelo tiene el pelo ___ y blanco. (ngắn)', answer: ['corto'], hint: 'ngắn',
          explain: 'El pelo là giống đực, số ít → corto.' },
        { type: 'order', vi: 'Tôi rất bận.', words: ['ocupado', 'Estoy', 'muy'], answer: 'Estoy muy ocupado' },
        { type: 'mc', q: 'Từ trái nghĩa với "alto" là:', options: ['rubio', 'delgado', 'bajo', 'largo'], answer: 2,
          explain: 'Alto = cao ↔ bajo = thấp.' },
        { type: 'fill', q: 'Vosotros ___ preocupados.', answer: ['estáis'], hint: 'estar',
          explain: 'Trạng thái → estar; vosotros → estáis.' },
        { type: 'order', vi: 'Em gái tôi có đôi mắt xanh.', words: ['azules', 'Mi', 'tiene', 'ojos', 'hermana', 'los'], answer: 'Mi hermana tiene los ojos azules' }
      ],
      reading: {
        title: 'Mi hermana Mai',
        titleVi: 'Chị gái tôi, Mai',
        text: [
          'Me llamo Lan y tengo una hermana, Mai. Mai es alta y delgada, y tiene el pelo largo y los ojos negros. Es muy simpática y trabajadora.',
          'Ahora Mai está en Madrid. Estudia español en la universidad. Hoy está un poco nerviosa porque tiene un examen.',
          'Mis padres están en Hanói. Mi madre está un poco triste porque Mai no está en casa. ¡Y yo estoy contenta: ahora uso su ordenador!'
        ],
        vi: [
          'Tôi tên là Lan và tôi có một người chị, Mai. Mai cao và gầy, có mái tóc dài và đôi mắt đen. Chị ấy rất dễ mến và chăm chỉ.',
          'Bây giờ Mai đang ở Madrid. Chị ấy học tiếng Tây Ban Nha ở trường đại học. Hôm nay chị ấy hơi hồi hộp vì có bài kiểm tra.',
          'Bố mẹ tôi đang ở Hà Nội. Mẹ tôi hơi buồn vì Mai không ở nhà. Còn tôi thì vui: bây giờ tôi được dùng máy tính của chị ấy!'
        ],
        questions: [
          { q: 'Mai trông thế nào?', options: ['Thấp, tóc vàng', 'Cao, gầy, tóc dài', 'Cao, tóc ngắn', 'Thấp, mắt xanh'], answer: 1,
            explain: 'Mai es alta y delgada, y tiene el pelo largo y los ojos negros.' },
          { q: 'Bây giờ Mai đang ở đâu?', options: ['Ở Hà Nội', 'Ở nhà với bố mẹ', 'Ở Ý', 'Ở Madrid'], answer: 3,
            explain: 'Ahora Mai está en Madrid.' },
          { q: 'Hôm nay Mai cảm thấy thế nào?', options: ['Hơi hồi hộp', 'Rất vui', 'Rất giận', 'Buồn'], answer: 0,
            explain: 'Hoy está un poco nerviosa porque tiene un examen.' },
          { q: 'Vì sao Lan vui?', options: ['Vì Mai về nhà', 'Vì Lan có bài kiểm tra', 'Vì bây giờ Lan được dùng máy tính của Mai', 'Vì mẹ không buồn nữa'], answer: 2,
            explain: '¡Y yo estoy contenta: ahora uso su ordenador!' }
        ]
      }
    }
  },

  // ───────────────────────── A1-5b ─────────────────────────
  {
    after: 'es-a1-5',
    unit: {
      id: 'es-a1-5b',
      icon: '🌦️',
      title: 'Thời tiết & mùa',
      goal: 'Nói về thời tiết, bốn mùa và điều mình muốn, thích hơn hoặc có thể làm.',
      vocab: [
        { w: 'el tiempo', ipa: 'êl ti-ÊM-pô', vi: 'thời tiết', ex: '¿Qué tiempo hace hoy?', exVi: 'Hôm nay thời tiết thế nào?' },
        { w: 'el calor', ipa: 'êl ca-LÔR', vi: 'cái nóng (trời nóng)', ex: 'En Hanói hace mucho calor.', exVi: 'Ở Hà Nội trời rất nóng.' },
        { w: 'el frío', ipa: 'êl PHRI-ô', vi: 'cái lạnh (trời lạnh)', ex: 'Hoy hace mucho frío.', exVi: 'Hôm nay trời rất lạnh.' },
        { w: 'el sol', ipa: 'êl xôl', vi: 'mặt trời; nắng', ex: 'Hoy hace sol.', exVi: 'Hôm nay trời nắng.' },
        { w: 'el viento', ipa: 'êl bi-ÊN-tô', vi: 'gió', ex: 'Hace mucho viento en la playa.', exVi: 'Ở bãi biển gió rất to.' },
        { w: 'llover', ipa: 'giô-BÊR', vi: 'mưa (llueve: trời mưa)', ex: 'En otoño llueve mucho.', exVi: 'Mùa thu trời mưa nhiều.' },
        { w: 'nevar', ipa: 'nê-BAR', vi: 'có tuyết rơi (nieva)', ex: 'En Hanói no nieva.', exVi: 'Ở Hà Nội không có tuyết.' },
        { w: 'nublado / nublada', ipa: 'nu-BLA-đô / nu-BLA-đa', vi: 'nhiều mây, âm u', ex: 'Hoy está nublado.', exVi: 'Hôm nay trời nhiều mây.' },
        { w: 'el grado', ipa: 'êl GRA-đô', vi: 'độ (nhiệt độ)', ex: 'Estamos a treinta grados.', exVi: 'Trời đang ba mươi độ.' },
        { w: 'la primavera', ipa: 'la pri-ma-BÊ-ra', vi: 'mùa xuân', ex: 'En primavera hace buen tiempo.', exVi: 'Mùa xuân thời tiết đẹp.' },
        { w: 'el verano', ipa: 'êl bê-RA-nô', vi: 'mùa hè', ex: 'En verano nadamos en el mar.', exVi: 'Mùa hè chúng tôi bơi ở biển.' },
        { w: 'el otoño', ipa: 'êl ô-TÔ-nhô', vi: 'mùa thu', ex: 'El otoño en Hanói es muy bonito.', exVi: 'Mùa thu ở Hà Nội rất đẹp.' },
        { w: 'el invierno', ipa: 'êl in-bi-ÊR-nô', vi: 'mùa đông', ex: 'En invierno duermo mucho.', exVi: 'Mùa đông tôi ngủ nhiều.' },
        { w: 'querer', ipa: 'kê-RÊR', vi: 'muốn; yêu', ex: 'Quiero un café caliente.', exVi: 'Tôi muốn một cốc cà phê nóng.' },
        { w: 'preferir', ipa: 'prê-phê-RIR', vi: 'thích … hơn', ex: '¿Prefieres el frío o el calor?', exVi: 'Bạn thích trời lạnh hay trời nóng hơn?' },
        { w: 'empezar', ipa: 'êm-pê-θAR', vi: 'bắt đầu', ex: 'La clase empieza a las nueve.', exVi: 'Lớp học bắt đầu lúc chín giờ.' },
        { w: 'pensar', ipa: 'pên-XAR', vi: 'nghĩ', ex: 'Pienso mucho en mi familia.', exVi: 'Tôi nghĩ về gia đình rất nhiều.' },
        { w: 'poder', ipa: 'pô-ĐÊR', vi: 'có thể', ex: '¿Puedes cerrar la ventana?', exVi: 'Bạn đóng cửa sổ được không?' },
        { w: 'volver', ipa: 'bôl-BÊR', vi: 'trở về, quay lại', ex: 'Vuelvo a casa por la tarde.', exVi: 'Tôi về nhà vào buổi chiều.' },
        { w: 'repetir', ipa: 'rrê-pê-TIR', vi: 'nhắc lại, lặp lại', ex: '¿Puede repetir, por favor?', exVi: 'Ông / bà nhắc lại được không ạ?' }
      ],
      grammar: {
        title: 'Động từ đổi gốc ở thì hiện tại (e > ie, o > ue, e > i); nói về thời tiết',
        explain: [
          'Một số động từ rất thường dùng có đuôi chia như bình thường (-o, -as / -es, -a / -e…) nhưng NGUYÊN ÂM Ở GỐC thay đổi: querer → quiero (e > ie), poder → puedo (o > ue), pedir → pido (e > i).',
          'Gốc đổi ở yo, tú, él / ella / usted và ellos / ustedes; còn nosotros và vosotros giữ nguyên: queremos, queréis; podemos, podéis; pedimos, pedís. Nếu tô màu các ô đổi gốc trong bảng, bạn sẽ thấy hình một chiếc ủng – vì vậy người ta hay gọi đây là "động từ chiếc ủng".',
          'Hãy học theo nhóm. e > ie: querer, preferir, empezar, pensar, cerrar, nevar (nieva). o > ue: poder, volver, dormir, costar (cuesta), llover (llueve); jugar đổi u > ue (juego). e > i (chỉ động từ -ir): pedir (gọi món, xin), repetir. Sau querer, preferir, poder có thể dùng động từ nguyên mẫu: Quiero dormir. ¿Puedes repetir?',
          'Thời tiết: hỏi ¿Qué tiempo hace? Trả lời bằng hacer ở ngôi thứ ba số ít: Hace calor / frío / sol / viento / buen tiempo / mal tiempo. Mưa và tuyết có động từ riêng, chỉ dùng ngôi thứ ba: Llueve, Nieva. Trời nhiều mây: Está nublado. Nhiệt độ: Estamos a treinta grados (cũng nói Hace treinta grados). Phân biệt: Hace frío (trời lạnh) – Tengo frío (tôi thấy lạnh).',
          'Bốn mùa (las estaciones del año): la primavera, el verano, el otoño, el invierno. "Vào mùa …" = en + mùa, không cần mạo từ: En invierno nieva en el norte de España. Lưu ý: la estación vừa là "mùa" vừa là "nhà ga".'
        ],
        table: [
          ['Chủ ngữ', 'querer (e > ie)', 'poder (o > ue)', 'pedir (e > i)'],
          ['yo', 'quiero', 'puedo', 'pido'],
          ['tú', 'quieres', 'puedes', 'pides'],
          ['él / ella / usted', 'quiere', 'puede', 'pide'],
          ['nosotros', 'queremos', 'podemos', 'pedimos'],
          ['vosotros', 'queréis', 'podéis', 'pedís'],
          ['ellos / ustedes', 'quieren', 'pueden', 'piden']
        ],
        examples: [
          { t: '¿Qué tiempo hace hoy? — Hace sol y mucho calor.', vi: 'Hôm nay thời tiết thế nào? — Trời nắng và rất nóng.' },
          { t: 'En invierno nieva mucho en el norte de España.', vi: 'Mùa đông ở miền bắc Tây Ban Nha tuyết rơi nhiều.' },
          { t: 'Prefiero la primavera: no hace frío ni calor.', vi: 'Tôi thích mùa xuân hơn: trời không lạnh cũng không nóng.' },
          { t: 'Llueve mucho. ¿Podemos volver a casa?', vi: 'Mưa to quá. Chúng ta về nhà được không?' },
          { t: 'Hoy estamos a treinta y cinco grados.', vi: 'Hôm nay trời ba mươi lăm độ.' }
        ],
        tip: 'Calor, frío là danh từ nên "rất nóng" phải dùng mucho: "Hace muy calor" ✗ → "Hace mucho calor" ✓. Thời tiết không dùng ser: "Es frío" ✗ → "Hace frío" ✓. Đừng đổi gốc ở nosotros, vosotros: "quieremos" ✗ → "queremos" ✓. 🌎 Mỹ Latinh: ở các nước gần xích đạo (như Colombia) gần như không có bốn mùa, người ta nói mùa mưa và mùa khô; còn ở Argentina, Chile, mùa ngược với Tây Ban Nha: tháng Mười Hai là mùa hè.'
      },
      dialogue: [
        { s: 'Carmen', t: '¡Uf, qué frío hace hoy!', vi: 'Ui, hôm nay lạnh quá!' },
        { s: 'Nam', t: 'Sí, y llueve mucho. En Hanói también hace frío en invierno, pero no nieva.', vi: 'Ừ, mà còn mưa nhiều nữa. Ở Hà Nội mùa đông cũng lạnh, nhưng không có tuyết.' },
        { s: 'Carmen', t: '¿Prefieres el invierno o el verano?', vi: 'Bạn thích mùa đông hay mùa hè hơn?' },
        { s: 'Nam', t: 'Prefiero la primavera. No hace frío ni calor y puedo caminar por la ciudad.', vi: 'Mình thích mùa xuân hơn. Trời không lạnh cũng không nóng, và mình có thể đi bộ quanh thành phố.' },
        { s: 'Carmen', t: 'Yo prefiero el verano: hace sol y podemos nadar en el mar.', vi: 'Mình thì thích mùa hè hơn: trời nắng và tụi mình có thể bơi ở biển.' },
        { s: 'Nam', t: '¿Hace mucho calor aquí en verano?', vi: 'Ở đây mùa hè có nóng lắm không?' },
        { s: 'Carmen', t: 'Sí, mucho. A veces estamos a cuarenta grados.', vi: 'Có, nóng lắm. Có khi lên tới bốn mươi độ.' },
        { s: 'Nam', t: '¡Cuarenta grados! Bueno, ahora tengo frío y quiero un chocolate caliente.', vi: 'Bốn mươi độ cơ à! Thôi, giờ thì mình đang lạnh và muốn một cốc sô-cô-la nóng.' },
        { s: 'Carmen', t: 'Buena idea. Pedimos dos chocolates y después volvemos a casa.', vi: 'Ý hay đấy. Tụi mình gọi hai cốc sô-cô-la rồi sau đó về nhà.' }
      ],
      exercises: [
        { type: 'mc', q: 'Yo ___ un café caliente.', options: ['quero', 'quiero', 'queremos', 'quieres'], answer: 1,
          explain: 'Querer đổi gốc e > ie ở ngôi yo: quiero.' },
        { type: 'fill', q: 'Nosotros ___ volver a casa. (poder)', answer: ['podemos'], hint: 'poder – nosotros',
          explain: 'Nosotros không đổi gốc: podemos.' },
        { type: 'mc', q: '"Trời rất nóng" là:', options: ['Es mucho calor.', 'Hace muy calor.', 'Hace mucho calor.', 'Está mucho calor.'], answer: 2,
          explain: 'Thời tiết dùng hace; calor là danh từ nên đi với mucho.' },
        { type: 'order', vi: 'Hôm nay trời nắng và có gió.', words: ['sol', 'hace', 'Hoy', 'viento', 'y'], answer: 'Hoy hace sol y viento', alt: ['Hoy hace viento y sol', 'hace sol y viento Hoy', 'hace viento y sol Hoy'] },
        { type: 'fill', q: 'En invierno ___ en el norte de España. (nevar)', answer: ['nieva'], hint: 'nevar – e > ie',
          explain: 'Nevar chỉ dùng ngôi thứ ba và đổi gốc: nieva.' },
        { type: 'mc', q: 'Ella ___ el verano.', options: ['prefiere', 'prefere', 'prefiero'], answer: 0,
          explain: 'Preferir đổi gốc e > ie; ella → prefiere.' },
        { type: 'fill', q: 'La película ___ ahora. (empezar)', answer: ['empieza'], hint: 'empezar – e > ie',
          explain: 'La película (nó) → empieza.' },
        { type: 'order', vi: 'Tôi thích mùa xuân hơn.', words: ['la', 'Prefiero', 'primavera'], answer: 'Prefiero la primavera' },
        { type: 'mc', q: 'Mùa nào đến sau "el verano"?', options: ['la primavera', 'el invierno', 'el otoño', 'el sol'], answer: 2,
          explain: 'Primavera → verano → otoño → invierno.' },
        { type: 'fill', q: 'Mis hijos ___ mucho en invierno. (dormir)', answer: ['duermen'], hint: 'dormir – o > ue',
          explain: 'Ellos → duermen (o > ue).' },
        { type: 'order', vi: 'Mùa thu trời mưa nhiều.', words: ['otoño', 'mucho', 'En', 'llueve'], answer: 'En otoño llueve mucho', alt: ['llueve mucho En otoño'] },
        { type: 'mc', q: 'Không nghe rõ, bạn nói: "¿Puede ___, por favor?"', options: ['repito', 'repite', 'repetimos', 'repetir'], answer: 3,
          explain: 'Sau poder dùng động từ nguyên mẫu: ¿Puede repetir?' },
        { type: 'fill', q: 'Hoy ___ a treinta grados.', answer: ['estamos'], hint: 'estar',
          explain: 'Nói nhiệt độ: Estamos a + số + grados.' },
        { type: 'order', vi: 'Chúng ta về nhà được không?', words: ['casa?', 'volver', '¿Podemos', 'a'], answer: '¿Podemos volver a casa?' },
        { type: 'mc', q: '"Está nublado" nghĩa là:', options: ['Trời mưa', 'Trời nhiều mây', 'Trời có tuyết', 'Trời nắng'], answer: 1,
          explain: 'Nublado = nhiều mây, âm u.' },
        { type: 'order', vi: 'Bạn muốn cà phê hay trà?', words: ['o', '¿Quieres', 'té?', 'café'], answer: '¿Quieres café o té?', alt: ['¿Quieres té? o café'] }
      ],
      reading: {
        title: 'El tiempo en Vietnam',
        titleVi: 'Thời tiết ở Việt Nam',
        text: [
          'Vietnam es un país largo y el tiempo no es igual en el norte y en el sur.',
          'En Hanói, en el norte, hay cuatro estaciones. En verano hace mucho calor y llueve. En invierno hace frío, a veces estamos a diez grados, pero no nieva. Mucha gente prefiere el otoño: hace sol y no hace calor.',
          'En Ciudad Ho Chi Minh, en el sur, siempre hace calor. Solo hay dos estaciones: la estación seca y la estación de lluvias. En la estación de lluvias, llueve casi todas las tardes.'
        ],
        vi: [
          'Việt Nam là một đất nước dài và thời tiết ở miền bắc và miền nam không giống nhau.',
          'Ở Hà Nội, miền bắc, có bốn mùa. Mùa hè trời rất nóng và có mưa. Mùa đông trời lạnh, có khi chỉ mười độ, nhưng không có tuyết. Nhiều người thích mùa thu hơn: trời nắng mà không nóng.',
          'Ở Thành phố Hồ Chí Minh, miền nam, trời lúc nào cũng nóng. Chỉ có hai mùa: mùa khô và mùa mưa. Vào mùa mưa, gần như chiều nào cũng mưa.'
        ],
        questions: [
          { q: 'Hà Nội có mấy mùa?', options: ['Hai', 'Ba', 'Bốn', 'Một'], answer: 2,
            explain: 'En Hanói, en el norte, hay cuatro estaciones.' },
          { q: 'Mùa đông ở Hà Nội thế nào?', options: ['Lạnh, có khi mười độ, nhưng không có tuyết', 'Rất nóng và mưa', 'Có tuyết rơi', 'Nắng và ấm'], answer: 0,
            explain: 'En invierno hace frío, a veces estamos a diez grados, pero no nieva.' },
          { q: 'Nhiều người ở Hà Nội thích mùa nào hơn?', options: ['Mùa hè', 'Mùa đông', 'Mùa xuân', 'Mùa thu'], answer: 3,
            explain: 'Mucha gente prefiere el otoño.' },
          { q: 'Mùa mưa ở Thành phố Hồ Chí Minh thế nào?', options: ['Có tuyết', 'Gần như chiều nào cũng mưa', 'Không mưa', 'Trời lạnh'], answer: 1,
            explain: 'En la estación de lluvias, llueve casi todas las tardes.' }
        ]
      }
    }
  },

  // ───────────────────────── A1-5c ─────────────────────────
  {
    after: 'es-a1-5b',
    unit: {
      id: 'es-a1-5c',
      icon: '💼',
      title: 'Nghề nghiệp',
      goal: 'Hỏi và nói về nghề nghiệp, nơi làm việc, cách đi làm, số người và tiền lương.',
      vocab: [
        { w: 'el médico / la médica', ipa: 'êl MÊ-đi-cô / la MÊ-đi-ca', vi: 'bác sĩ', ex: 'Mi madre es médica y trabaja en un hospital.', exVi: 'Mẹ tôi là bác sĩ và làm việc ở bệnh viện.' },
        { w: 'el abogado / la abogada', ipa: 'êl a-bô-GA-đô / la a-bô-GA-đa', vi: 'luật sư', ex: 'Mi tío es abogado.', exVi: 'Chú tôi là luật sư.' },
        { w: 'el ingeniero / la ingeniera', ipa: 'êl in-khê-ni-Ê-rô / la in-khê-ni-Ê-ra', vi: 'kỹ sư', ex: 'Soy ingeniera y trabajo en una fábrica.', exVi: 'Tôi là kỹ sư và làm việc ở một nhà máy.' },
        { w: 'el cocinero / la cocinera', ipa: 'êl cô-θi-NÊ-rô / la cô-θi-NÊ-ra', vi: 'đầu bếp', ex: 'El cocinero de este restaurante es vietnamita.', exVi: 'Đầu bếp của nhà hàng này là người Việt.' },
        { w: 'el dependiente / la dependienta', ipa: 'êl đê-pên-đi-ÊN-tê / la đê-pên-đi-ÊN-ta', vi: 'nhân viên bán hàng', ex: 'Mi hermana es dependienta en una tienda de ropa.', exVi: 'Chị tôi là nhân viên bán hàng ở một cửa hàng quần áo.' },
        { w: 'el policía / la policía', ipa: 'êl pô-li-θI-a / la pô-li-θI-a', vi: 'cảnh sát', ex: 'El padre de Pablo es policía.', exVi: 'Bố của Pablo là cảnh sát.' },
        { w: 'el periodista / la periodista', ipa: 'êl pê-ri-ô-ĐIS-ta / la pê-ri-ô-ĐIS-ta', vi: 'nhà báo', ex: 'Ana es periodista y escribe para un periódico.', exVi: 'Ana là nhà báo và viết cho một tờ báo.' },
        { w: 'la oficina', ipa: 'la ô-phi-θI-na', vi: 'văn phòng', ex: 'Mi oficina está en el centro.', exVi: 'Văn phòng của tôi ở trung tâm.' },
        { w: 'la fábrica', ipa: 'la PHA-bri-ca', vi: 'nhà máy', ex: 'Mi padre trabaja en una fábrica de coches.', exVi: 'Bố tôi làm việc ở một nhà máy ô tô.' },
        { w: 'el dinero', ipa: 'êl đi-NÊ-rô', vi: 'tiền', ex: 'No gano mucho dinero.', exVi: 'Tôi không kiếm được nhiều tiền.' },
        { w: 'dedicarse', ipa: 'đê-đi-CAR-xê', vi: 'làm nghề (gì)', ex: '—¿A qué te dedicas? —Soy abogada.', exVi: '—Bạn làm nghề gì? —Tôi là luật sư.' },
        { w: 'hacer', ipa: 'a-θÊR', vi: 'làm', ex: 'Hago la comida en casa.', exVi: 'Tôi nấu cơm ở nhà.' },
        { w: 'poner', ipa: 'pô-NÊR', vi: 'đặt, để; bật (đài, TV)', ex: 'Pongo el ordenador en la mesa.', exVi: 'Tôi đặt máy tính lên bàn.' },
        { w: 'venir', ipa: 'bê-NIR', vi: 'đến (về phía người nói)', ex: 'Vengo a la oficina en bicicleta.', exVi: 'Tôi đến văn phòng bằng xe đạp.' },
        { w: 'ir', ipa: 'ir', vi: 'đi', ex: 'Voy al trabajo en metro.', exVi: 'Tôi đi làm bằng tàu điện ngầm.' },
        { w: 'conocer', ipa: 'cô-nô-θÊR', vi: 'quen, biết (người, nơi)', ex: 'No conozco Madrid.', exVi: 'Tôi chưa đến Madrid bao giờ.' },
        { w: 'saber', ipa: 'xa-BÊR', vi: 'biết (thông tin, cách làm)', ex: 'Sé hablar inglés y español.', exVi: 'Tôi biết nói tiếng Anh và tiếng Tây Ban Nha.' },
        { w: 'doscientos / doscientas', ipa: 'đôs-θi-ÊN-tôs / đôs-θi-ÊN-tas', vi: 'hai trăm', ex: 'En mi empresa hay doscientas personas.', exVi: 'Công ty tôi có hai trăm người.' },
        { w: 'quinientos / quinientas', ipa: 'ki-ni-ÊN-tôs / ki-ni-ÊN-tas', vi: 'năm trăm', ex: 'Pago quinientos euros por el piso.', exVi: 'Tôi trả năm trăm euro tiền căn hộ.' },
        { w: 'mil', ipa: 'mil', vi: 'một nghìn', ex: 'Gano mil doscientos euros al mes.', exVi: 'Tôi kiếm được một nghìn hai trăm euro mỗi tháng.' }
      ],
      grammar: {
        title: 'Động từ bất quy tắc ở ngôi yo; động từ ir; số từ 100 đến 1000',
        explain: [
          'Nhiều động từ thông dụng chỉ bất quy tắc ở ngôi yo, các ngôi khác chia như bình thường: hacer → hago, poner → pongo, salir → salgo, conocer → conozco, saber → sé, dar → doy, ver → veo. Venir và decir vừa có -go ở ngôi yo vừa đổi gốc như bài trước: vengo, vienes…; digo, dices…',
          'Ir (đi) bất quy tắc hoàn toàn: voy, vas, va, vamos, vais, van. Nơi đến đứng sau giới từ a: Voy a la oficina. Voy a Madrid. Nhớ a + el = al: Voy al trabajo. Hỏi: ¿Adónde vas? (Bạn đi đâu?). Phương tiện dùng en: Voy en metro, en coche; riêng đi bộ là a pie: Voy a pie.',
          'Hỏi nghề nghiệp: ¿A qué te dedicas? (Bạn làm nghề gì?), ¿Qué haces? hoặc ¿En qué trabajas?; lịch sự: ¿A qué se dedica usted? Trả lời: Soy + nghề, KHÔNG có un / una: Soy médica. Hỏi nơi làm: ¿Dónde trabajas? → Trabajo en una oficina. Phân biệt: conocer = quen một người, biết một nơi (Conozco Madrid; trước người thêm a: Conozco a tu jefe); saber = biết một thông tin hoặc biết làm gì (Sé hablar inglés).',
          'Số hàng trăm: cien là đúng 100; từ 101 dùng ciento: ciento uno, ciento cincuenta. Tiếp theo: 200 doscientos, 300 trescientos, 400 cuatrocientos, 500 quinientos, 600 seiscientos, 700 setecientos, 800 ochocientos, 900 novecientos, 1000 mil (không nói "un mil"). Từ 200 trở đi, hàng trăm đổi giống theo danh từ: doscientos euros nhưng doscientas personas.',
          'Chữ y chỉ đứng giữa hàng chục và hàng đơn vị: trescientos cuarenta y cinco (345), mil doscientos (1200). Dùng hay + số để nói có bao nhiêu: En la fábrica hay quinientas personas. Nói lương: Gano mil doscientos euros al mes.'
        ],
        table: [
          ['Nguyên mẫu', 'Nghĩa', 'yo', 'Các ngôi khác'],
          ['hacer', 'làm', 'hago', 'haces, hace, hacemos…'],
          ['poner', 'đặt, để', 'pongo', 'pones, pone, ponemos…'],
          ['salir', 'ra ngoài, rời đi', 'salgo', 'sales, sale, salimos…'],
          ['venir', 'đến', 'vengo', 'vienes, viene, venimos…'],
          ['decir', 'nói', 'digo', 'dices, dice, decimos…'],
          ['conocer', 'quen, biết', 'conozco', 'conoces, conoce, conocemos…'],
          ['saber', 'biết', 'sé', 'sabes, sabe, sabemos…'],
          ['dar', 'cho, đưa', 'doy', 'das, da, damos…'],
          ['ver', 'xem, thấy', 'veo', 'ves, ve, vemos…'],
          ['ir', 'đi', 'voy', 'vas, va, vamos, vais, van']
        ],
        examples: [
          { t: '—¿A qué te dedicas? —Soy periodista.', vi: '—Bạn làm nghề gì? —Tôi là nhà báo.' },
          { t: 'Salgo de casa temprano y voy a la oficina en metro.', vi: 'Tôi ra khỏi nhà sớm và đi đến văn phòng bằng tàu điện ngầm.' },
          { t: 'No conozco a tu jefe, pero sé dónde trabaja.', vi: 'Tôi không quen sếp của bạn, nhưng tôi biết ông ấy làm ở đâu.' },
          { t: 'En la fábrica hay quinientas personas.', vi: 'Trong nhà máy có năm trăm người.' },
          { t: 'Gano mil doscientos euros al mes.', vi: 'Tôi kiếm được một nghìn hai trăm euro mỗi tháng.' }
        ],
        tip: 'Sau ser, nghề nghiệp không có mạo từ: "Soy un médico" ✗ → "Soy médico" ✓ (giống tiếng Việt "Tôi là bác sĩ"). Đừng chia ngôi yo theo quy tắc: "haco", "sabo" ✗ → "hago", "sé" ✓. Nhớ hoà hợp giống: "doscientos personas" ✗ → "doscientas personas" ✓. 🌎 Mỹ Latinh: dùng "ustedes van" thay cho "vosotros vais"; ở Mexico người phục vụ bàn là mesero (ở Tây Ban Nha: camarero).'
      },
      dialogue: [
        { s: 'Andrés', t: 'Hola, soy Andrés, el hermano de Marta. ¿A qué te dedicas?', vi: 'Chào bạn, mình là Andrés, anh trai của Marta. Bạn làm nghề gì?' },
        { s: 'Laura', t: 'Soy ingeniera. Trabajo en una fábrica de coches. ¿Y tú?', vi: 'Mình là kỹ sư. Mình làm ở một nhà máy ô tô. Còn bạn?' },
        { s: 'Andrés', t: 'Yo soy cocinero. Trabajo en un restaurante del centro.', vi: 'Mình là đầu bếp. Mình làm ở một nhà hàng ở trung tâm.' },
        { s: 'Laura', t: '¿Es un restaurante grande?', vi: 'Nhà hàng có lớn không?' },
        { s: 'Andrés', t: 'Sí, bastante. Cada día vienen trescientas personas. ¿Y tu fábrica?', vi: 'Có, khá lớn. Mỗi ngày có ba trăm người đến. Còn nhà máy của bạn?' },
        { s: 'Laura', t: 'En mi fábrica hay novecientas personas. ¡Es enorme!', vi: 'Nhà máy của mình có chín trăm người. Rất lớn!' },
        { s: 'Andrés', t: '¡Novecientas! ¿Y cómo vas al trabajo?', vi: 'Chín trăm cơ à! Thế bạn đi làm bằng gì?' },
        { s: 'Laura', t: 'Voy en coche. Salgo de casa muy temprano. ¿Y tú?', vi: 'Mình đi ô tô. Mình ra khỏi nhà rất sớm. Còn bạn?' },
        { s: 'Andrés', t: 'Vivo cerca del restaurante y voy a pie.', vi: 'Mình sống gần nhà hàng nên đi bộ.' },
        { s: 'Laura', t: '¡Qué suerte! Oye, ¿cómo se llama tu restaurante? No conozco los restaurantes del centro.', vi: 'Sướng thật! À này, nhà hàng của bạn tên là gì? Mình không biết các nhà hàng ở trung tâm.' }
      ],
      exercises: [
        { type: 'mc', q: 'Yo ___ la comida en casa.', options: ['hace', 'haco', 'hago', 'hacemos'], answer: 2,
          explain: 'Hacer bất quy tắc ở ngôi yo: hago.' },
        { type: 'fill', q: 'Yo ___ de casa a las ocho. (salir)', answer: ['salgo'], hint: 'salir – ngôi yo',
          explain: 'Salir → yo salgo.' },
        { type: 'mc', q: '—¿A qué te dedicas? —___', options: ['Soy médica.', 'Soy una médica.', 'Estoy médica.'], answer: 0,
          explain: 'Nói nghề dùng ser, không có mạo từ: Soy médica.' },
        { type: 'order', vi: 'Tôi đi đến văn phòng bằng tàu điện ngầm.', words: ['oficina', 'Voy', 'metro', 'la', 'a', 'en'], answer: 'Voy a la oficina en metro', alt: ['Voy en metro a la oficina'] },
        { type: 'fill', q: 'Mis padres ___ a Madrid en tren. (ir)', answer: ['van'], hint: 'ir – ellos',
          explain: 'Ir → ellos van.' },
        { type: 'mc', q: '200 người →', options: ['doscientos personas', 'doscientas personas', 'dos cientas personas', 'doscientas persona'], answer: 1,
          explain: 'Personas là giống cái số nhiều → doscientas personas (viết liền).' },
        { type: 'fill', q: 'Voy ___ trabajo en coche. (a + el)', answer: ['al'], hint: 'a + el',
          explain: 'A + el luôn gộp thành al: Voy al trabajo.' },
        { type: 'order', vi: 'Bạn làm nghề gì?', words: ['dedicas?', 'te', '¿A', 'qué'], answer: '¿A qué te dedicas?' },
        { type: 'mc', q: '"Tôi biết nói tiếng Anh" là:', options: ['Conozco hablar inglés.', 'Sabo hablar inglés.', 'Sabes hablar inglés.', 'Sé hablar inglés.'], answer: 3,
          explain: 'Biết làm gì dùng saber; ngôi yo bất quy tắc: sé.' },
        { type: 'fill', q: 'No ___ a tu jefe. (conocer)', answer: ['conozco'], hint: 'conocer – ngôi yo',
          explain: 'Conocer → yo conozco; quen một người dùng conocer.' },
        { type: 'order', vi: 'Trong nhà máy có năm trăm người.', words: ['quinientas', 'la', 'En', 'personas', 'fábrica', 'hay'], answer: 'En la fábrica hay quinientas personas', alt: ['hay quinientas personas En la fábrica'] },
        { type: 'mc', q: '750 →', options: ['sietecientos cincuenta', 'setecientos y cincuenta', 'setecientos cincuenta'], answer: 2,
          explain: '700 = setecientos (không phải sietecientos); không có y giữa hàng trăm và hàng chục.' },
        { type: 'fill', q: 'Mi hermana escribe para un periódico. Es ___.', answer: ['periodista'], hint: 'nhà báo',
          explain: 'Periodista = nhà báo, dùng chung cho nam và nữ.' },
        { type: 'order', vi: 'Tôi kiếm được một nghìn hai trăm euro mỗi tháng.', words: ['al', 'euros', 'Gano', 'mes', 'doscientos', 'mil'], answer: 'Gano mil doscientos euros al mes', alt: ['Gano al mes mil doscientos euros', 'al mes Gano mil doscientos euros'] },
        { type: 'mc', q: 'Một đầu bếp (cocinero) thường làm việc ở đâu?', options: ['En un hospital', 'En un restaurante', 'En una oficina de abogados'], answer: 1,
          explain: 'Cocinero = đầu bếp → làm ở nhà hàng (restaurante).' },
        { type: 'order', vi: 'Hôm nay bạn đi đâu?', words: ['hoy?', 'vas', '¿Adónde'], answer: '¿Adónde vas hoy?' }
      ],
      reading: {
        title: 'Nuestros trabajos',
        titleVi: 'Công việc của chúng tôi',
        text: [
          'Me llamo Elena y soy periodista. Trabajo en un periódico en Madrid. Salgo de casa a las ocho y voy a la oficina en metro.',
          'Mi marido, Luis, es cocinero. Trabaja en un hotel muy grande: hay cuatrocientas habitaciones y trescientos trabajadores. Luis hace la comida para mucha gente.',
          'No ganamos mucho dinero. Yo gano mil doscientos euros al mes y Luis gana novecientos cincuenta. Pero estamos contentos con nuestros trabajos.'
        ],
        vi: [
          'Tôi tên là Elena và tôi là nhà báo. Tôi làm việc cho một tờ báo ở Madrid. Tôi ra khỏi nhà lúc tám giờ và đi đến văn phòng bằng tàu điện ngầm.',
          'Chồng tôi, Luis, là đầu bếp. Anh ấy làm việc ở một khách sạn rất lớn: có bốn trăm phòng và ba trăm nhân viên. Luis nấu ăn cho rất nhiều người.',
          'Chúng tôi không kiếm được nhiều tiền. Tôi kiếm một nghìn hai trăm euro mỗi tháng, còn Luis kiếm chín trăm năm mươi. Nhưng chúng tôi hài lòng với công việc của mình.'
        ],
        questions: [
          { q: 'Elena làm nghề gì?', options: ['Đầu bếp', 'Nhà báo', 'Bác sĩ', 'Kỹ sư'], answer: 1,
            explain: 'Me llamo Elena y soy periodista.' },
          { q: 'Elena đi làm bằng gì?', options: ['Ô tô', 'Đi bộ', 'Xe đạp', 'Tàu điện ngầm'], answer: 3,
            explain: 'Voy a la oficina en metro.' },
          { q: 'Khách sạn nơi Luis làm có bao nhiêu nhân viên?', options: ['300', '400', '900', '1100'], answer: 0,
            explain: 'Hay cuatrocientas habitaciones y trescientos trabajadores.' },
          { q: 'Mỗi tháng Elena kiếm được bao nhiêu?', options: ['900 euro', '950 euro', '1200 euro', '1100 euro'], answer: 2,
            explain: 'Yo gano mil doscientos euros al mes.' }
        ]
      }
    }
  }
];
