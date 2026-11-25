// Phần bổ sung bài học – Tiếng Tây Ban Nha A1
export default {
  'es-a1-1': {
    vocab: [
      { w: 'el nombre', ipa: 'el nôm-brê', vi: 'tên', ex: 'Mi nombre es Carlos.', exVi: 'Tên tôi là Carlos.' },
      { w: 'llamarse', ipa: 'gia-mar-xê', vi: 'tên là, được gọi là', ex: '¿Cómo se llama tu amigo?', exVi: 'Bạn của bạn tên là gì?' },
      { w: 'el amigo / la amiga', ipa: 'el a-mi-gô / la a-mi-ga', vi: 'bạn (nam / nữ)', ex: 'Ella es mi amiga Lucía.', exVi: 'Cô ấy là Lucía, bạn của tôi.' },
      { w: 'el señor', ipa: 'el xê-nhór', vi: 'ông, quý ông', ex: 'Buenos días, señor García.', exVi: 'Chào buổi sáng, ông García.' },
      { w: 'la señora', ipa: 'la xê-nhô-ra', vi: 'bà, quý bà', ex: 'La señora López es profesora.', exVi: 'Bà López là giáo viên.' },
      { w: 'el profesor / la profesora', ipa: 'el prô-phê-xór / la prô-phê-xô-ra', vi: 'giáo viên (nam / nữ)', ex: 'Mi profesor se llama Javier.', exVi: 'Thầy giáo của tôi tên là Javier.' },
      { w: 'bien', ipa: 'bi-ên', vi: 'khoẻ, tốt', ex: '—¿Qué tal? —Muy bien, gracias.', exVi: '—Khoẻ không? —Rất khoẻ, cảm ơn.' },
      { w: 'mal', ipa: 'man', vi: 'không khoẻ, tệ', ex: 'Hoy estoy un poco mal.', exVi: 'Hôm nay tôi hơi không khoẻ.' },
      { w: 'mucho gusto', ipa: 'mu-chô gút-tô', vi: 'rất hân hạnh', ex: 'Me llamo Ana. Mucho gusto.', exVi: 'Tôi tên là Ana. Rất hân hạnh.' },
      { w: 'perdón', ipa: 'pẹc-đón', vi: 'xin lỗi', ex: 'Perdón, ¿cómo te llamas?', exVi: 'Xin lỗi, bạn tên là gì?' }
    ],
    exercises: [
      { type: 'mc', q: 'Mi amiga ___ Lucía.', options: ['se llama', 'me llamo', 'te llamas'], answer: 0,
        explain: 'Mi amiga là ngôi thứ ba (ella) nên dùng se llama.' },
      { type: 'fill', q: '—¿Qué tal? —Muy ___, gracias.', answer: ['bien'], hint: 'khoẻ',
        explain: 'Muy bien = rất khoẻ, rất tốt.' },
      { type: 'mc', q: 'Gặp một người lớn tuổi lần đầu, bạn hỏi tên lịch sự:', options: ['¿Cómo te llamas?', '¿Cómo se llama usted?', '¿Cómo me llamo?'], answer: 1,
        explain: 'Nói lịch sự dùng usted, chia như él/ella → se llama.' },
      { type: 'order', vi: 'Cô ấy là giáo viên.', words: ['profesora', 'Ella', 'es'], answer: 'Ella es profesora' },
      { type: 'fill', q: 'Ellos ___ mis amigos.', answer: ['son'], hint: 'ser',
        explain: 'Ellos đi với son.' },
      { type: 'order', vi: 'Xin lỗi, bạn tên là gì?', words: ['te', 'Perdón,', 'llamas?', '¿cómo'], answer: 'Perdón, ¿cómo te llamas?' },
      { type: 'mc', q: '"Mucho gusto" nghĩa là gì?', options: ['Tạm biệt', 'Rất hân hạnh', 'Xin lỗi', 'Cảm ơn'], answer: 1,
        explain: 'Mucho gusto = rất hân hạnh, nói khi mới làm quen.' },
      { type: 'fill', q: 'Buenos días, ___ García. ¿Cómo está usted?', answer: ['señor'], hint: 'ông',
        explain: 'Señor + họ dùng để gọi một người đàn ông lịch sự.' }
    ],
    reading: {
      title: 'En la clase de español',
      titleVi: 'Trong lớp tiếng Tây Ban Nha',
      text: [
        'Hola, me llamo Minh y soy de Vietnam. Soy estudiante. Mi profesora se llama Carmen. Ella es española, de Madrid. Es muy simpática.',
        'En la clase hay una amiga nueva. Se llama Sofía y es de Italia. —Hola, Minh. ¿Qué tal? —Muy bien, gracias. ¿Y tú? —Bien también.',
        'Después de la clase, un señor llega. Es el padre de Sofía. —Buenas tardes, señor. Me llamo Minh. Mucho gusto. —Encantado, Minh. ¡Hasta luego!'
      ],
      vi: [
        'Xin chào, tôi tên là Minh và tôi đến từ Việt Nam. Tôi là sinh viên. Cô giáo của tôi tên là Carmen. Cô là người Tây Ban Nha, ở Madrid. Cô rất dễ mến.',
        'Trong lớp có một bạn mới. Bạn ấy tên là Sofía và đến từ Ý. —Chào Minh. Khoẻ không? —Rất khoẻ, cảm ơn. Còn bạn? —Mình cũng khoẻ.',
        'Sau giờ học, một ông đến. Đó là bố của Sofía. —Chào buổi chiều, thưa ông. Cháu tên là Minh. Rất hân hạnh. —Rất vui được gặp cháu, Minh. Hẹn gặp lại!'
      ],
      questions: [
        { q: 'Cô giáo của Minh tên là gì?', options: ['Sofía', 'Carmen', 'Lucía', 'Ana'], answer: 1,
          explain: 'Mi profesora se llama Carmen.' },
        { q: 'Cô giáo đến từ đâu?', options: ['Ý', 'Việt Nam', 'Madrid (Tây Ban Nha)', 'Mexico'], answer: 2,
          explain: 'Ella es española, de Madrid.' },
        { q: 'Sofía là ai?', options: ['Cô giáo của Minh', 'Một bạn mới trong lớp, đến từ Ý', 'Mẹ của Minh'], answer: 1,
          explain: 'En la clase hay una amiga nueva. Se llama Sofía y es de Italia.' },
        { q: 'Người đàn ông đến sau giờ học là ai?', options: ['Bố của Sofía', 'Thầy giáo mới', 'Bố của Minh', 'Bạn của cô Carmen'], answer: 0,
          explain: 'Es el padre de Sofía.' }
      ]
    }
  },

  'es-a1-2': {
    vocab: [
      { w: 'cuatro', ipa: 'cu-a-trô', vi: 'bốn', ex: 'Tengo cuatro hermanos.', exVi: 'Tôi có bốn anh chị em.' },
      { w: 'seis', ipa: 'xêit', vi: 'sáu', ex: 'Mi hija tiene seis años.', exVi: 'Con gái tôi sáu tuổi.' },
      { w: 'quince', ipa: 'kin-thê', vi: 'mười lăm', ex: 'Mi hermano tiene quince años.', exVi: 'Em trai tôi mười lăm tuổi.' },
      { w: 'treinta', ipa: 'trêin-ta', vi: 'ba mươi', ex: 'La profesora tiene treinta años.', exVi: 'Cô giáo ba mươi tuổi.' },
      { w: 'el número', ipa: 'el nu-mê-rô', vi: 'số, con số', ex: '¿Cuál es tu número de teléfono?', exVi: 'Số điện thoại của bạn là gì?' },
      { w: 'tener', ipa: 'tê-nér', vi: 'có; (… tuổi)', ex: 'Ella tiene dos hijos.', exVi: 'Cô ấy có hai con trai.' },
      { w: 'la edad', ipa: 'la ê-đát', vi: 'tuổi, tuổi tác', ex: '¿Qué edad tiene tu abuelo?', exVi: 'Ông của bạn bao nhiêu tuổi?' },
      { w: 'chino / china', ipa: 'chi-nô / chi-na', vi: 'người / thuộc Trung Quốc; tiếng Trung', ex: 'Li es chino, de Pekín.', exVi: 'Li là người Trung Quốc, ở Bắc Kinh.' },
      { w: 'inglés / inglesa', ipa: 'in-glết / in-glê-xa', vi: 'người / thuộc Anh; tiếng Anh', ex: 'Emma es inglesa, de Londres.', exVi: 'Emma là người Anh, ở Luân Đôn.' },
      { w: 'hablar', ipa: 'a-blar', vi: 'nói (một thứ tiếng)', ex: 'Hablo vietnamita y un poco de español.', exVi: 'Tôi nói tiếng Việt và một chút tiếng Tây Ban Nha.' }
    ],
    exercises: [
      { type: 'mc', q: 'Mi hermano ___ quince años.', options: ['es', 'tiene', 'tengo'], answer: 1,
        explain: 'Nói tuổi dùng tener; mi hermano là ngôi thứ ba → tiene.' },
      { type: 'fill', q: 'Diez más cinco son ___.', answer: ['quince'], hint: '10 + 5',
        explain: '10 + 5 = 15 → quince.' },
      { type: 'mc', q: 'Emma es de Londres. Ella es ___.', options: ['inglés', 'inglesa', 'ingleses'], answer: 1,
        explain: 'Emma là nữ nên dùng dạng giống cái: inglesa.' },
      { type: 'order', vi: 'Cô giáo của bạn đến từ đâu?', words: ['profesora?', 'es', '¿De', 'tu', 'dónde'], answer: '¿De dónde es tu profesora?' },
      { type: 'fill', q: '¿Qué ___ tiene tu padre?', answer: ['edad'], hint: 'tuổi',
        explain: '¿Qué edad tiene…? = … bao nhiêu tuổi?' },
      { type: 'mc', q: 'Số 30 trong tiếng Tây Ban Nha là:', options: ['trece', 'treinta', 'tres'], answer: 1,
        explain: 'Trece = 13, tres = 3, treinta = 30.' },
      { type: 'order', vi: 'Tôi nói tiếng Việt và tiếng Anh.', words: ['y', 'Hablo', 'inglés', 'vietnamita'], answer: 'Hablo vietnamita y inglés' },
      { type: 'fill', q: 'Nosotros ___ dos hijos.', answer: ['tenemos'], hint: 'tener',
        explain: 'Nosotros + tener → tenemos.' }
    ],
    reading: {
      title: 'Mi clase de español',
      titleVi: 'Lớp tiếng Tây Ban Nha của tôi',
      text: [
        'Me llamo Lan. Tengo veinte años y soy vietnamita, de Hanói. Ahora vivo en Madrid. Hablo vietnamita, inglés y un poco de español.',
        'En mi clase hay cuatro estudiantes. Wei es chino y tiene treinta años. Emma es inglesa y tiene diecinueve años. Paolo es italiano y tiene quince años.',
        'La profesora se llama Marta. Es española, de Sevilla. Habla español, inglés y un poco de chino. ¡Wei está muy contento!'
      ],
      vi: [
        'Tôi tên là Lan. Tôi hai mươi tuổi và là người Việt Nam, ở Hà Nội. Bây giờ tôi sống ở Madrid. Tôi nói tiếng Việt, tiếng Anh và một chút tiếng Tây Ban Nha.',
        'Lớp tôi có bốn học viên. Wei là người Trung Quốc và ba mươi tuổi. Emma là người Anh và mười chín tuổi. Paolo là người Ý và mười lăm tuổi.',
        'Cô giáo tên là Marta. Cô là người Tây Ban Nha, ở Sevilla. Cô nói tiếng Tây Ban Nha, tiếng Anh và một chút tiếng Trung. Wei rất vui!'
      ],
      questions: [
        { q: 'Lan bao nhiêu tuổi?', options: ['15', '19', '20', '30'], answer: 2,
          explain: 'Tengo veinte años = Tôi hai mươi tuổi.' },
        { q: 'Ai là người Trung Quốc?', options: ['Emma', 'Wei', 'Paolo', 'Marta'], answer: 1,
          explain: 'Wei es chino.' },
        { q: 'Emma bao nhiêu tuổi?', options: ['Mười chín tuổi', 'Mười lăm tuổi', 'Ba mươi tuổi', 'Hai mươi tuổi'], answer: 0,
          explain: 'Emma tiene diecinueve años.' },
        { q: 'Cô Marta nói được những thứ tiếng nào?', options: ['Chỉ tiếng Tây Ban Nha', 'Tiếng Tây Ban Nha và tiếng Việt', 'Tiếng Tây Ban Nha, tiếng Anh và một chút tiếng Trung', 'Tiếng Anh và tiếng Ý'], answer: 2,
          explain: 'Habla español, inglés y un poco de chino.' }
      ]
    }
  },

  'es-a1-3': {
    vocab: [
      { w: 'el tío / la tía', ipa: 'el ti-ô / la ti-a', vi: 'chú, bác, cậu / cô, dì', ex: 'Mi tía es profesora.', exVi: 'Cô của tôi là giáo viên.' },
      { w: 'el primo / la prima', ipa: 'el pri-mô / la pri-ma', vi: 'anh / chị / em họ (nam / nữ)', ex: 'Tengo tres primos.', exVi: 'Tôi có ba anh chị em họ.' },
      { w: 'el nieto / la nieta', ipa: 'el ni-ê-tô / la ni-ê-ta', vi: 'cháu trai / cháu gái (của ông bà)', ex: 'Mis abuelos tienen cinco nietos.', exVi: 'Ông bà tôi có năm đứa cháu.' },
      { w: 'el niño / la niña', ipa: 'el ni-nhô / la ni-nha', vi: 'bé trai / bé gái, đứa trẻ', ex: 'La niña se llama Rosa.', exVi: 'Bé gái tên là Rosa.' },
      { w: 'el bebé', ipa: 'el bê-bê', vi: 'em bé', ex: 'El bebé de mi hermana es muy pequeño.', exVi: 'Em bé của chị tôi còn rất nhỏ.' },
      { w: 'el perro', ipa: 'el pê-rrô', vi: 'con chó', ex: 'Nuestro perro se llama Toby.', exVi: 'Con chó của chúng tôi tên là Toby.' },
      { w: 'mayor', ipa: 'ma-giór', vi: 'lớn tuổi hơn; (anh / chị) cả', ex: 'Mi hermano mayor tiene treinta años.', exVi: 'Anh trai tôi ba mươi tuổi.' },
      { w: 'joven', ipa: 'khô-bên', vi: 'trẻ', ex: 'Mis padres son jóvenes.', exVi: 'Bố mẹ tôi còn trẻ.' },
      { w: 'alto / alta', ipa: 'an-tô / an-ta', vi: 'cao', ex: 'Mi padre es muy alto.', exVi: 'Bố tôi rất cao.' },
      { w: 'casado / casada', ipa: 'ca-xa-đô / ca-xa-đa', vi: 'đã kết hôn', ex: 'Mi hermana está casada.', exVi: 'Chị tôi đã lập gia đình.' }
    ],
    exercises: [
      { type: 'mc', q: '___ primas viven en Madrid.', options: ['Mi', 'Mis', 'Su'], answer: 1,
        explain: 'Primas là số nhiều nên tính từ sở hữu cũng số nhiều: mis.' },
      { type: 'fill', q: 'el tío → los ___', answer: ['tíos'], hint: 'số nhiều',
        explain: 'Tận cùng bằng nguyên âm → thêm -s: tíos.' },
      { type: 'mc', q: 'El hijo de mi hijo es mi ___.', options: ['nieto', 'primo', 'tío'], answer: 0,
        explain: 'Con trai của con mình là cháu (nieto).' },
      { type: 'order', vi: 'Anh trai tôi đã kết hôn.', words: ['casado', 'hermano', 'Mi', 'está'], answer: 'Mi hermano está casado' },
      { type: 'fill', q: 'Mi hermana es muy ___.', answer: ['alta'], hint: 'cao',
        explain: 'Hermana là giống cái → alta.' },
      { type: 'mc', q: 'Chọn câu đúng:', options: ['Nuestra perro es pequeño.', 'Nuestro perro es pequeño.', 'Nuestros perro es pequeño.'], answer: 1,
        explain: 'Perro giống đực số ít → nuestro.' },
      { type: 'order', vi: 'Con gái của cô ấy là một em bé.', words: ['un', 'hija', 'Su', 'es', 'bebé'], answer: 'Su hija es un bebé' },
      { type: 'fill', q: 'La hija de mi tía es mi ___.', answer: ['prima'], hint: 'chị / em họ',
        explain: 'Con gái của cô/dì là chị/em họ: la prima.' }
    ],
    reading: {
      title: 'La familia de Pablo',
      titleVi: 'Gia đình của Pablo',
      text: [
        'Me llamo Pablo y tengo diez años. Vivo con mis padres, mi hermana mayor y nuestro perro, Toby. Mi hermana se llama Elena. Es alta y muy simpática.',
        'Mi tía Rosa es joven. Está casada con mi tío Andrés y tienen un bebé, Lucas. Lucas es mi primo. ¡Es muy pequeño!',
        'Los domingos visitamos a mis abuelos. Ellos tienen cuatro nietos: Elena, yo, Lucas y mi prima Ana. Los niños juegan con Toby en el jardín.'
      ],
      vi: [
        'Tôi tên là Pablo và tôi mười tuổi. Tôi sống với bố mẹ, chị gái và con chó của chúng tôi, Toby. Chị tôi tên là Elena. Chị ấy cao và rất dễ mến.',
        'Dì Rosa của tôi còn trẻ. Dì đã kết hôn với chú Andrés và họ có một em bé, Lucas. Lucas là em họ của tôi. Em ấy còn rất nhỏ!',
        'Chủ nhật nào chúng tôi cũng đến thăm ông bà. Ông bà có bốn đứa cháu: Elena, tôi, Lucas và chị họ Ana của tôi. Bọn trẻ chơi với Toby trong vườn.'
      ],
      questions: [
        { q: 'Pablo bao nhiêu tuổi?', options: ['Mười tuổi', 'Hai mươi tuổi', 'Bốn tuổi', 'Mười lăm tuổi'], answer: 0,
          explain: 'Tengo diez años = Tôi mười tuổi.' },
        { q: 'Elena là ai?', options: ['Chị gái của Pablo', 'Dì của Pablo', 'Chị họ của Pablo', 'Bà của Pablo'], answer: 0,
          explain: 'Mi hermana mayor… se llama Elena.' },
        { q: 'Lucas là gì của Pablo?', options: ['Em trai', 'Em họ', 'Cháu', 'Chú'], answer: 1,
          explain: 'Lucas là con của dì Rosa và chú Andrés: Lucas es mi primo.' },
        { q: 'Ông bà của Pablo có bao nhiêu đứa cháu?', options: ['Hai', 'Ba', 'Bốn', 'Năm'], answer: 2,
          explain: 'Ellos tienen cuatro nietos.' }
      ]
    }
  },

  'es-a1-4': {
    vocab: [
      { w: 'el color', ipa: 'el cô-lór', vi: 'màu sắc', ex: '¿De qué color es tu mochila?', exVi: 'Ba lô của bạn màu gì?' },
      { w: 'verde', ipa: 'bẹc-đê', vi: 'màu xanh lá', ex: 'La puerta es verde.', exVi: 'Cánh cửa màu xanh lá.' },
      { w: 'amarillo / amarilla', ipa: 'a-ma-ri-giô / a-ma-ri-gia', vi: 'màu vàng', ex: 'Tengo un cuaderno amarillo.', exVi: 'Tôi có một quyển vở màu vàng.' },
      { w: 'el teléfono', ipa: 'el tê-lê-phô-nô', vi: 'điện thoại', ex: 'Este teléfono es nuevo.', exVi: 'Cái điện thoại này mới.' },
      { w: 'el ordenador', ipa: 'el ọc-đê-na-đór', vi: 'máy tính (cách nói ở Tây Ban Nha)', ex: 'Ese ordenador es muy grande.', exVi: 'Cái máy tính đó rất to.' },
      { w: 'el cuaderno', ipa: 'el cu-a-đẹc-nô', vi: 'quyển vở', ex: 'Este cuaderno es azul.', exVi: 'Quyển vở này màu xanh dương.' },
      { w: 'la puerta', ipa: 'la pu-ẹc-ta', vi: 'cửa ra vào', ex: 'La puerta de la clase es blanca.', exVi: 'Cửa lớp học màu trắng.' },
      { w: 'la ventana', ipa: 'la bên-ta-na', vi: 'cửa sổ', ex: 'Esa ventana es pequeña.', exVi: 'Cái cửa sổ đó nhỏ.' },
      { w: 'grande', ipa: 'gran-đê', vi: 'to, lớn', ex: 'Es una mesa grande.', exVi: 'Đó là một cái bàn lớn.' },
      { w: 'pequeño / pequeña', ipa: 'pê-kê-nhô / pê-kê-nha', vi: 'nhỏ', ex: 'Tengo una mochila pequeña.', exVi: 'Tôi có một cái ba lô nhỏ.' }
    ],
    exercises: [
      { type: 'mc', q: '___ cuaderno es amarillo. (quyển vở này)', options: ['Este', 'Esta', 'Estos'], answer: 0,
        explain: 'Cuaderno giống đực số ít → este.' },
      { type: 'fill', q: 'Las ventanas son muy ___.', answer: ['grandes'], hint: 'to, lớn (số nhiều)',
        explain: 'Grande không đổi giống, số nhiều thêm -s: grandes.' },
      { type: 'mc', q: 'Chọn cụm từ đúng:', options: ['una puerta verda', 'una puerta verde', 'un puerta verde'], answer: 1,
        explain: 'Puerta giống cái → una; verde tận cùng -e nên không đổi giống.' },
      { type: 'order', vi: 'Ba lô của bạn màu gì?', words: ['color', 'mochila?', '¿De', 'es', 'tu', 'qué'], answer: '¿De qué color es tu mochila?' },
      { type: 'fill', q: 'Tengo ___ ordenador nuevo.', answer: ['un'], hint: 'một',
        explain: 'Ordenador giống đực, nhắc lần đầu → un.' },
      { type: 'mc', q: '¿De qué ___ es el coche?', options: ['color', 'grande', 'teléfono'], answer: 0,
        explain: '¿De qué color es…? = … màu gì?' },
      { type: 'order', vi: 'Những quyển vở đó màu vàng.', words: ['amarillos', 'cuadernos', 'Esos', 'son'], answer: 'Esos cuadernos son amarillos' },
      { type: 'fill', q: 'Ella tiene una mochila ___.', answer: ['pequeña'], hint: 'nhỏ',
        explain: 'Mochila giống cái → pequeña.' }
    ],
    reading: {
      title: 'Mi habitación',
      titleVi: 'Phòng của tôi',
      text: [
        'Esta es mi habitación. No es grande, pero es bonita. Tiene una ventana grande y una puerta blanca. Cerca de la ventana hay una mesa pequeña.',
        'En la mesa hay muchas cosas: un ordenador negro, un teléfono rojo, dos cuadernos amarillos y unos bolígrafos azules. Mi color favorito es el verde, por eso mi mochila es verde.',
        'Mi hermano pregunta: "¿Qué es eso?". Es un libro nuevo de español.'
      ],
      vi: [
        'Đây là phòng của tôi. Phòng không to, nhưng đẹp. Phòng có một cửa sổ lớn và một cánh cửa màu trắng. Gần cửa sổ có một cái bàn nhỏ.',
        'Trên bàn có nhiều thứ: một máy tính màu đen, một điện thoại màu đỏ, hai quyển vở màu vàng và vài cây bút bi màu xanh dương. Màu yêu thích của tôi là màu xanh lá, vì vậy ba lô của tôi màu xanh lá.',
        'Em trai tôi hỏi: "Cái đó là gì vậy?". Đó là một quyển sách tiếng Tây Ban Nha mới.'
      ],
      questions: [
        { q: 'Căn phòng như thế nào?', options: ['Rất to', 'Không to nhưng đẹp', 'Nhỏ và xấu', 'Không có cửa sổ'], answer: 1,
          explain: 'No es grande, pero es bonita.' },
        { q: 'Điện thoại màu gì?', options: ['Đen', 'Đỏ', 'Vàng', 'Xanh lá'], answer: 1,
          explain: 'Un teléfono rojo = một điện thoại màu đỏ.' },
        { q: 'Trên bàn có mấy quyển vở?', options: ['Một', 'Hai', 'Ba', 'Bốn'], answer: 1,
          explain: 'Dos cuadernos amarillos = hai quyển vở màu vàng.' },
        { q: 'Vì sao ba lô của người viết màu xanh lá?', options: ['Vì là quà của bà', 'Vì xanh lá là màu người viết thích nhất', 'Vì em trai thích màu xanh lá', 'Vì ba lô màu xanh lá rẻ hơn'], answer: 1,
          explain: 'Mi color favorito es el verde, por eso mi mochila es verde.' }
      ]
    }
  },

  'es-a1-5': {
    vocab: [
      { w: 'escribir', ipa: 'ét-cri-bir', vi: 'viết', ex: 'Escribo en español todos los días.', exVi: 'Tôi viết bằng tiếng Tây Ban Nha mỗi ngày.' },
      { w: 'escuchar', ipa: 'ét-cu-char', vi: 'nghe', ex: 'Escucho la radio por la mañana.', exVi: 'Tôi nghe đài vào buổi sáng.' },
      { w: 'llegar', ipa: 'giê-gar', vi: 'đến, tới', ex: 'Llego al trabajo a las nueve.', exVi: 'Tôi đến chỗ làm lúc chín giờ.' },
      { w: 'tomar', ipa: 'tô-mar', vi: 'uống, dùng (đồ ăn, thức uống)', ex: 'Tomo un café con leche.', exVi: 'Tôi uống một ly cà phê sữa.' },
      { w: 'lavarse', ipa: 'la-bar-xê', vi: 'rửa (tay, mặt…) cho mình', ex: 'Me lavo los dientes después de desayunar.', exVi: 'Tôi đánh răng sau khi ăn sáng.' },
      { w: 'cocinar', ipa: 'cô-thi-nar', vi: 'nấu ăn', ex: 'Mi padre cocina los domingos.', exVi: 'Bố tôi nấu ăn vào các ngày chủ nhật.' },
      { w: 'dormir', ipa: 'đọc-mir', vi: 'ngủ (bất quy tắc: yo duermo)', ex: 'Duermo ocho horas.', exVi: 'Tôi ngủ tám tiếng.' },
      { w: 'el trabajo', ipa: 'el tra-ba-khô', vi: 'công việc; chỗ làm', ex: 'Vivo cerca de mi trabajo.', exVi: 'Tôi sống gần chỗ làm.' },
      { w: 'por la mañana', ipa: 'por la ma-nha-na', vi: 'vào buổi sáng', ex: 'Me ducho por la mañana.', exVi: 'Tôi tắm vào buổi sáng.' },
      { w: 'después', ipa: 'đét-pu-ết', vi: 'sau đó', ex: 'Desayuno y después trabajo.', exVi: 'Tôi ăn sáng và sau đó làm việc.' }
    ],
    exercises: [
      { type: 'mc', q: 'Yo ___ al trabajo a las nueve.', options: ['llego', 'llega', 'llegas'], answer: 0,
        explain: 'Yo + -ar → -o: llego.' },
      { type: 'fill', q: 'Ella ___ música por la mañana.', answer: ['escucha'], hint: 'escuchar',
        explain: 'Ella + -ar → -a: escucha.' },
      { type: 'mc', q: 'Tú ___ los dientes después de comer.', options: ['me lavo', 'te lavas', 'se lava'], answer: 1,
        explain: 'Tú đi với đại từ phản thân te và đuôi -as: te lavas.' },
      { type: 'order', vi: 'Tôi viết bằng tiếng Tây Ban Nha.', words: ['español', 'Escribo', 'en'], answer: 'Escribo en español' },
      { type: 'fill', q: 'Nosotros ___ en casa los domingos.', answer: ['cocinamos'], hint: 'cocinar',
        explain: 'Nosotros + -ar → -amos: cocinamos.' },
      { type: 'mc', q: 'Mis padres ___ un café después de comer.', options: ['toman', 'tomamos', 'toma'], answer: 0,
        explain: 'Mis padres = ellos → -an: toman.' },
      { type: 'order', vi: 'Anh ấy tắm vào buổi sáng.', words: ['ducha', 'Él', 'por', 'se', 'mañana', 'la'], answer: 'Él se ducha por la mañana', alt: ['por la mañana Él se ducha'] },
      { type: 'fill', q: 'Vosotros ___ en el cuaderno.', answer: ['escribís'], hint: 'escribir',
        explain: 'Vosotros + -ir → -ís: escribís (khác -er: coméis).' }
    ],
    reading: {
      title: 'Un día de Carlos',
      titleVi: 'Một ngày của Carlos',
      text: [
        'Carlos vive en Valencia y trabaja en un hotel. Por la mañana se levanta a las siete. Se ducha, se lava los dientes y desayuna: toma un café con leche y pan.',
        'Llega al trabajo a las ocho. En el trabajo habla con muchas personas y escribe correos. A las dos come con sus amigos.',
        'Después, por la tarde, estudia inglés. Por la noche cocina, cena con su esposa y lee un libro. Duerme siete horas.'
      ],
      vi: [
        'Carlos sống ở Valencia và làm việc ở một khách sạn. Buổi sáng anh ấy dậy lúc bảy giờ. Anh ấy tắm, đánh răng và ăn sáng: anh uống một ly cà phê sữa và ăn bánh mì.',
        'Anh ấy đến chỗ làm lúc tám giờ. Ở chỗ làm, anh nói chuyện với nhiều người và viết email. Lúc hai giờ anh ăn trưa với bạn bè.',
        'Sau đó, vào buổi chiều, anh ấy học tiếng Anh. Buổi tối anh nấu ăn, ăn tối với vợ và đọc sách. Anh ngủ bảy tiếng.'
      ],
      questions: [
        { q: 'Carlos làm việc ở đâu?', options: ['Ở một khách sạn', 'Ở một trường học', 'Ở một nhà hàng', 'Ở nhà'], answer: 0,
          explain: 'Trabaja en un hotel.' },
        { q: 'Bữa sáng Carlos dùng gì?', options: ['Trà và trái cây', 'Cà phê sữa và bánh mì', 'Nước và cơm', 'Bia và thịt'], answer: 1,
          explain: 'Toma un café con leche y pan.' },
        { q: 'Buổi chiều Carlos làm gì?', options: ['Nấu ăn', 'Ngủ', 'Học tiếng Anh', 'Đọc sách'], answer: 2,
          explain: 'Por la tarde, estudia inglés.' },
        { q: 'Carlos ngủ mấy tiếng?', options: ['Sáu', 'Bảy', 'Tám', 'Chín'], answer: 1,
          explain: 'Duerme siete horas.' }
      ]
    }
  },

  'es-a1-6': {
    vocab: [
      { w: 'la comida', ipa: 'la cô-mi-đa', vi: 'đồ ăn, món ăn; bữa trưa', ex: 'Me gusta la comida vietnamita.', exVi: 'Tôi thích đồ ăn Việt Nam.' },
      { w: 'el vino', ipa: 'el bi-nô', vi: 'rượu vang', ex: 'Quisiera un vino tinto, por favor.', exVi: 'Cho tôi một ly vang đỏ.' },
      { w: 'el té', ipa: 'el tê', vi: 'trà', ex: 'No me gusta el té con leche.', exVi: 'Tôi không thích trà sữa.' },
      { w: 'el zumo', ipa: 'el thu-mô', vi: 'nước ép (cách nói ở Tây Ban Nha)', ex: 'Quisiera un zumo de naranja.', exVi: 'Cho tôi một ly nước cam ép.' },
      { w: 'el huevo', ipa: 'el u-ê-bô', vi: 'quả trứng', ex: 'Desayuno dos huevos.', exVi: 'Tôi ăn sáng hai quả trứng.' },
      { w: 'el pollo', ipa: 'el pô-giô', vi: 'thịt gà', ex: 'Me gusta mucho el pollo con arroz.', exVi: 'Tôi rất thích cơm gà.' },
      { w: 'la ensalada', ipa: 'la en-xa-la-đa', vi: 'món sa lát (rau trộn)', ex: 'Para mí, una ensalada, por favor.', exVi: 'Phần tôi là một đĩa sa lát.' },
      { w: 'la sopa', ipa: 'la xô-pa', vi: 'món súp, canh', ex: 'La sopa está muy rica.', exVi: 'Món súp rất ngon.' },
      { w: 'el queso', ipa: 'el kê-xô', vi: 'phô mai', ex: 'Me gustan el pan y el queso.', exVi: 'Tôi thích bánh mì và phô mai.' },
      { w: 'el camarero / la camarera', ipa: 'el ca-ma-rê-rô / la ca-ma-rê-ra', vi: 'người phục vụ (nam / nữ)', ex: '¡Camarero, la cuenta, por favor!', exVi: 'Anh phục vụ ơi, tính tiền giúp tôi!' }
    ],
    exercises: [
      { type: 'mc', q: 'Me ___ los huevos.', options: ['gusta', 'gustan', 'gusto'], answer: 1,
        explain: 'Los huevos là số nhiều → gustan.' },
      { type: 'fill', q: '___ un zumo de naranja, por favor.', answer: ['quisiera'], hint: 'tôi muốn (lịch sự)',
        explain: 'Gọi món lịch sự: Quisiera…' },
      { type: 'mc', q: 'A mi padre ___ gusta el vino.', options: ['me', 'le', 'te'], answer: 1,
        explain: 'A mi padre = anh ấy (él) → đại từ le.' },
      { type: 'order', vi: 'Tôi không thích trà.', words: ['me', 'el', 'No', 'té', 'gusta'], answer: 'No me gusta el té', alt: ['el té No me gusta'] },
      { type: 'fill', q: '¿Os ___ la sopa?', answer: ['gusta'], hint: 'gustar',
        explain: 'La sopa là số ít → gusta.' },
      { type: 'mc', q: '"Para mí, una ___, por favor." – Bạn muốn gọi món sa lát:', options: ['sopa', 'ensalada', 'queso', 'huevo'], answer: 1,
        explain: 'La ensalada = món sa lát.' },
      { type: 'order', vi: 'Chúng tôi thích cơm gà.', words: ['gusta', 'Nos', 'pollo', 'el', 'con', 'arroz'], answer: 'Nos gusta el pollo con arroz', alt: ['el pollo con arroz Nos gusta'] },
      { type: 'fill', q: 'A ellos ___ gustan las ensaladas.', answer: ['les'], hint: 'đại từ cho ellos',
        explain: 'A ellos → les.' }
    ],
    reading: {
      title: 'En el restaurante',
      titleVi: 'Ở nhà hàng',
      text: [
        'Hoy Ana y su amigo Nam comen en un restaurante de Madrid. El camarero es muy simpático. Él pregunta: "¿Qué quieren tomar?"',
        'Ana dice: "Para mí, una sopa y pollo con arroz. Y quisiera un zumo de naranja, por favor." A Nam no le gusta la carne. Él pide una ensalada con huevo y queso, y un vino blanco.',
        'La comida está muy rica. Después, Ana toma un té y Nam un café. Al final, Nam dice: "¡Camarero, la cuenta, por favor!"'
      ],
      vi: [
        'Hôm nay Ana và bạn cô là Nam ăn ở một nhà hàng ở Madrid. Anh phục vụ rất dễ mến. Anh ấy hỏi: "Hai bạn muốn dùng gì?"',
        'Ana nói: "Phần tôi là một bát súp và cơm gà. Và cho tôi một ly nước cam ép." Nam không thích thịt. Anh ấy gọi một đĩa sa lát trứng và phô mai, và một ly vang trắng.',
        'Đồ ăn rất ngon. Sau đó, Ana uống trà còn Nam uống cà phê. Cuối cùng, Nam nói: "Anh phục vụ ơi, tính tiền giúp tôi!"'
      ],
      questions: [
        { q: 'Ana gọi đồ uống gì trong bữa ăn?', options: ['Rượu vang trắng', 'Nước cam ép', 'Trà', 'Bia'], answer: 1,
          explain: 'Quisiera un zumo de naranja.' },
        { q: 'Vì sao Nam gọi sa lát?', options: ['Vì Nam không thích thịt', 'Vì Nam không đói', 'Vì nhà hàng hết gà', 'Vì người phục vụ gợi ý'], answer: 0,
          explain: 'A Nam no le gusta la carne.' },
        { q: 'Sau bữa ăn, Ana uống gì?', options: ['Cà phê', 'Trà', 'Sữa', 'Nước'], answer: 1,
          explain: 'Ana toma un té.' },
        { q: 'Cuối cùng Nam nói gì với người phục vụ?', options: ['Xin thực đơn', 'Gọi thêm súp', 'Xin tính tiền', 'Cảm ơn và tạm biệt'], answer: 2,
          explain: 'La cuenta, por favor = Tính tiền giúp tôi.' }
      ]
    }
  }
};
