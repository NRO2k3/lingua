// Khoá học tiếng Tây Ban Nha — Level A1 & A2 (chuẩn Tây Ban Nha)
addLevels('es', [
  {
    id: 'A1',
    title: 'Sơ cấp 1',
    desc: 'Chào hỏi, giới thiệu bản thân và gia đình, nói về đồ vật, thói quen hằng ngày và gọi món bằng những câu đơn giản.',
    units: [
      // ───────────────────────── A1-1 ─────────────────────────
      {
        id: 'es-a1-1',
        icon: '👋',
        title: 'Chào hỏi & giới thiệu',
        goal: 'Chào hỏi theo từng buổi, nói tên mình, hỏi tên người khác và giới thiệu ai đó.',
        vocab: [
          { w: 'hola', ipa: 'ô-la', vi: 'xin chào', ex: '¡Hola! Me llamo Lan.', exVi: 'Xin chào! Tôi tên là Lan.' },
          { w: 'buenos días', ipa: 'bu-ê-nốt đi-át', vi: 'chào buổi sáng', ex: 'Buenos días, señora García.', exVi: 'Chào buổi sáng, bà García.' },
          { w: 'buenas tardes', ipa: 'bu-ê-nát tác-đết', vi: 'chào buổi chiều', ex: 'Buenas tardes, ¿qué tal?', exVi: 'Chào buổi chiều, bạn khoẻ không?' },
          { w: 'buenas noches', ipa: 'bu-ê-nát nô-chết', vi: 'chào buổi tối; chúc ngủ ngon', ex: 'Buenas noches, mamá.', exVi: 'Chúc mẹ ngủ ngon.' },
          { w: 'adiós', ipa: 'a-đi-ốt', vi: 'tạm biệt', ex: 'Adiós, Carlos.', exVi: 'Tạm biệt Carlos.' },
          { w: 'hasta luego', ipa: 'át-ta lu-ê-gô', vi: 'hẹn gặp lại', ex: '¡Hasta luego, Ana!', exVi: 'Hẹn gặp lại nhé, Ana!' },
          { w: 'gracias', ipa: 'gra-thi-át', vi: 'cảm ơn', ex: 'Muy bien, gracias.', exVi: 'Rất khoẻ, cảm ơn.' },
          { w: 'por favor', ipa: 'por pha-bór', vi: 'làm ơn, xin vui lòng', ex: 'Tu nombre, por favor.', exVi: 'Cho mình xin tên bạn nhé.' },
          { w: 'encantado / encantada', ipa: 'en-can-ta-đô / en-can-ta-đa', vi: 'rất vui được gặp (nam / nữ nói)', ex: 'Soy Pedro. Encantado.', exVi: 'Tôi là Pedro. Rất vui được gặp bạn.' },
          { w: '¿Qué tal?', ipa: 'kê tal', vi: 'Khoẻ không? / Thế nào rồi?', ex: 'Hola, Marta. ¿Qué tal?', exVi: 'Chào Marta. Bạn khoẻ không?' }
        ],
        grammar: {
          title: 'Đại từ nhân xưng + ser, llamarse',
          explain: [
            'Đại từ nhân xưng: yo (tôi), tú (bạn), él (anh ấy), ella (cô ấy), usted (ông/bà – lịch sự), nosotros/nosotras (chúng tôi), vosotros/vosotras (các bạn), ellos/ellas (họ), ustedes (quý vị). Dạng -as dùng khi cả nhóm đều là nữ.',
            'Động từ ser (là) dùng để nói mình là ai, làm nghề gì: Soy Lan (Tôi là Lan), Ella es profesora (Cô ấy là giáo viên). Ser là động từ bất quy tắc, cần học thuộc bảng chia.',
            'Để nói tên, người Tây Ban Nha thường dùng llamarse (được gọi là): Me llamo Lan = Tôi tên là Lan. Hỏi tên: ¿Cómo te llamas? (thân mật) hoặc ¿Cómo se llama usted? (lịch sự).',
            'Usted và ustedes tuy có nghĩa "bạn/các bạn" nhưng chia động từ giống él/ella và ellos/ellas.'
          ],
          table: [
            ['Đại từ', 'ser', 'llamarse'],
            ['yo', 'soy', 'me llamo'],
            ['tú', 'eres', 'te llamas'],
            ['él / ella / usted', 'es', 'se llama'],
            ['nosotros / nosotras', 'somos', 'nos llamamos'],
            ['vosotros / vosotras', 'sois', 'os llamáis'],
            ['ellos / ellas / ustedes', 'son', 'se llaman']
          ],
          examples: [
            { t: 'Soy Lan. Soy estudiante.', vi: 'Tôi là Lan. Tôi là sinh viên.' },
            { t: '¿Cómo te llamas?', vi: 'Bạn tên là gì?' },
            { t: 'Me llamo Carlos.', vi: 'Tôi tên là Carlos.' },
            { t: 'Ella es María. Es profesora.', vi: 'Cô ấy là María. Cô ấy là giáo viên.' },
            { t: 'Nosotros somos amigos.', vi: 'Chúng tôi là bạn bè.' }
          ],
          tip: 'Tiếng Tây Ban Nha thường bỏ đại từ chủ ngữ vì đuôi động từ đã cho biết ai đang nói: "Soy Lan" tự nhiên hơn "Yo soy Lan". Nhớ viết ngược dấu ¿ và ¡ ở đầu câu hỏi và câu cảm thán.'
        },
        dialogue: [
          { s: 'Carlos', t: '¡Hola! Buenos días. Me llamo Carlos. ¿Cómo te llamas?', vi: 'Xin chào! Chào buổi sáng. Mình tên là Carlos. Bạn tên là gì?' },
          { s: 'Lan', t: 'Hola, Carlos. Me llamo Lan. Encantada.', vi: 'Chào Carlos. Mình tên là Lan. Rất vui được gặp bạn.' },
          { s: 'Carlos', t: 'Encantado, Lan. ¿Qué tal?', vi: 'Rất vui được gặp bạn, Lan. Bạn khoẻ không?' },
          { s: 'Lan', t: 'Muy bien, gracias. ¿Y tú?', vi: 'Rất khoẻ, cảm ơn. Còn bạn?' },
          { s: 'Carlos', t: 'Bien, gracias. Mira, ella es Ana. Es profesora.', vi: 'Khoẻ, cảm ơn. Này, đây là Ana. Chị ấy là giáo viên.' },
          { s: 'Ana', t: 'Hola, Lan. Mucho gusto.', vi: 'Chào Lan. Rất hân hạnh.' },
          { s: 'Lan', t: 'Mucho gusto, Ana. ¡Hasta luego!', vi: 'Rất hân hạnh, chị Ana. Hẹn gặp lại!' }
        ],
        exercises: [
          { type: 'mc', q: 'Yo ___ Lan.', options: ['soy', 'eres', 'es'], answer: 0, explain: 'Chủ ngữ yo đi với soy.' },
          { type: 'mc', q: '¿Cómo ___ llamas?', options: ['me', 'te', 'se'], answer: 1, explain: 'Động từ llamas là ngôi tú nên dùng đại từ te.' },
          { type: 'fill', q: 'Nosotros ___ estudiantes.', answer: ['somos'], hint: 'ser', explain: 'Nosotros đi với somos.' },
          { type: 'fill', q: 'Ella se ___ María.', answer: ['llama'], hint: 'llamarse', explain: 'Ella → se llama.' },
          { type: 'order', vi: 'Tôi tên là Carlos.', words: ['Carlos', 'llamo', 'Me'], answer: 'Me llamo Carlos' },
          { type: 'mc', q: '"Chúc ngủ ngon" trong tiếng Tây Ban Nha là:', options: ['Buenos días', 'Buenas tardes', 'Buenas noches'], answer: 2, explain: 'Buenas noches dùng để chào buổi tối và chúc ngủ ngon.' },
          { type: 'fill', q: 'Vosotros ___ mis amigos.', answer: ['sois'], hint: 'ser', explain: 'Vosotros đi với sois.' },
          { type: 'order', vi: 'Bạn tên là gì?', words: ['llamas?', '¿Cómo', 'te'], answer: '¿Cómo te llamas?' }
        ]
      },

      // ───────────────────────── A1-2 ─────────────────────────
      {
        id: 'es-a1-2',
        icon: '🔢',
        title: 'Số đếm, tuổi & quốc tịch',
        goal: 'Đếm từ 0 đến 30, nói tuổi, nói mình đến từ đâu và hỏi lại người khác.',
        vocab: [
          { w: 'uno', ipa: 'u-nô', vi: 'một (số 1)', ex: 'Tengo un hermano, solo uno.', exVi: 'Tôi có một người anh, chỉ một thôi.' },
          { w: 'dos', ipa: 'đốt', vi: 'hai', ex: 'Tengo dos gatos.', exVi: 'Tôi có hai con mèo.' },
          { w: 'tres', ipa: 'trết', vi: 'ba', ex: 'Somos tres amigos.', exVi: 'Chúng tôi là ba người bạn.' },
          { w: 'cinco', ipa: 'thin-cô', vi: 'năm (số 5)', ex: 'Mi hijo tiene cinco años.', exVi: 'Con trai tôi năm tuổi.' },
          { w: 'diez', ipa: 'đi-éth', vi: 'mười', ex: 'Tiene diez años.', exVi: 'Cậu bé mười tuổi.' },
          { w: 'veinte', ipa: 'bêin-tê', vi: 'hai mươi', ex: 'Tengo veinte años.', exVi: 'Tôi hai mươi tuổi.' },
          { w: 'el año', ipa: 'el a-nhô', vi: 'năm; tuổi (khi nói tuổi)', ex: '¿Cuántos años tienes?', exVi: 'Bạn bao nhiêu tuổi?' },
          { w: 'el país', ipa: 'el pa-ít', vi: 'đất nước', ex: 'Vietnam es un país bonito.', exVi: 'Việt Nam là một đất nước đẹp.' },
          { w: 'español / española', ipa: 'ét-pa-nhôn / ét-pa-nhô-la', vi: 'người / thuộc Tây Ban Nha', ex: 'Ana es española.', exVi: 'Ana là người Tây Ban Nha.' },
          { w: 'vietnamita', ipa: 'bi-ết-na-mi-ta', vi: 'người / thuộc Việt Nam', ex: 'Soy vietnamita, de Hanói.', exVi: 'Tôi là người Việt Nam, đến từ Hà Nội.' }
        ],
        grammar: {
          title: 'Tener để nói tuổi; câu hỏi ¿Cómo? ¿De dónde? ¿Cuántos?',
          explain: [
            'Số 0–10: cero, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez. Số 11–20: once, doce, trece, catorce, quince, dieciséis, diecisiete, dieciocho, diecinueve, veinte. Từ 21: veintiuno, veintidós, veintitrés… 30 là treinta.',
            'Người Tây Ban Nha nói tuổi bằng động từ tener (có), không dùng ser: Tengo veinte años = Tôi có hai mươi năm → Tôi 20 tuổi. Hỏi: ¿Cuántos años tienes? (Bạn bao nhiêu tuổi?).',
            'Hỏi quê quán: ¿De dónde eres? → Soy de Vietnam (Tôi đến từ Việt Nam). Nói quốc tịch: ser + tính từ quốc tịch, đổi theo giống: Él es español / Ella es española. Tính từ đuôi -a như vietnamita giữ nguyên cho cả nam và nữ.',
            'Từ để hỏi luôn có dấu: ¿Cómo? (thế nào), ¿De dónde? (từ đâu), ¿Cuántos/Cuántas? (bao nhiêu – đổi giống theo danh từ: ¿Cuántos años? ¿Cuántas hermanas?).'
          ],
          table: [
            ['Chủ ngữ', 'tener', 'Ví dụ'],
            ['yo', 'tengo', 'Tengo veinte años.'],
            ['tú', 'tienes', '¿Cuántos años tienes?'],
            ['él / ella / usted', 'tiene', 'Ana tiene treinta años.'],
            ['nosotros / nosotras', 'tenemos', 'Tenemos dieciocho años.'],
            ['vosotros / vosotras', 'tenéis', '¿Cuántos años tenéis?'],
            ['ellos / ellas / ustedes', 'tienen', 'Tienen quince años.']
          ],
          examples: [
            { t: 'Tengo veinte años.', vi: 'Tôi hai mươi tuổi.' },
            { t: '¿Cuántos años tienes?', vi: 'Bạn bao nhiêu tuổi?' },
            { t: '¿De dónde eres? — Soy de Vietnam.', vi: 'Bạn từ đâu đến? — Tôi đến từ Việt Nam.' },
            { t: 'Pedro tiene treinta años y es español.', vi: 'Pedro ba mươi tuổi và là người Tây Ban Nha.' },
            { t: '¿Cómo se llama tu amiga?', vi: 'Bạn của bạn tên là gì?' }
          ],
          tip: 'Lỗi rất hay gặp: "Soy 20 años" ✗ → "Tengo 20 años" ✓. Tên quốc tịch và ngôn ngữ viết thường: español, vietnamita. Ở Tây Ban Nha, c (trước e, i) và z đọc gần như "th" trong tiếng Anh "think": cinco, diez.'
        },
        dialogue: [
          { s: 'Ana', t: 'Hola, Minh. ¿De dónde eres?', vi: 'Chào Minh. Bạn từ đâu đến?' },
          { s: 'Minh', t: 'Soy de Vietnam, de Hanói. Soy vietnamita. ¿Y tú?', vi: 'Mình đến từ Việt Nam, từ Hà Nội. Mình là người Việt. Còn bạn?' },
          { s: 'Ana', t: 'Soy española, de Madrid.', vi: 'Mình là người Tây Ban Nha, ở Madrid.' },
          { s: 'Minh', t: '¿Cuántos años tienes, Ana?', vi: 'Bạn bao nhiêu tuổi vậy, Ana?' },
          { s: 'Ana', t: 'Tengo veintidós años. ¿Y tú?', vi: 'Mình hai mươi hai tuổi. Còn bạn?' },
          { s: 'Minh', t: 'Tengo veinte años.', vi: 'Mình hai mươi tuổi.' }
        ],
        exercises: [
          { type: 'mc', q: '"Tôi 20 tuổi" nói thế nào?', options: ['Soy veinte años.', 'Tengo veinte años.', 'Estoy veinte años.'], answer: 1, explain: 'Nói tuổi dùng tener: Tengo … años.' },
          { type: 'fill', q: '¿Cuántos años ___ tú?', answer: ['tienes'], hint: 'tener', explain: 'Tú → tienes.' },
          { type: 'mc', q: '¿De dónde ___ usted?', options: ['eres', 'es', 'son'], answer: 1, explain: 'Usted chia như él/ella → es.' },
          { type: 'fill', q: 'Ana es de Madrid. Es ___.', answer: ['española'], hint: 'quốc tịch, giống cái', explain: 'Ana là nữ nên dùng española.' },
          { type: 'order', vi: 'Bạn từ đâu đến?', words: ['eres?', 'dónde', '¿De'], answer: '¿De dónde eres?' },
          { type: 'mc', q: 'Số 15 là:', options: ['cinco', 'quince', 'cincuenta'], answer: 1, explain: 'quince = 15; cinco = 5; cincuenta = 50.' },
          { type: 'fill', q: 'Nosotros ___ dieciocho años.', answer: ['tenemos'], hint: 'tener', explain: 'Nosotros → tenemos.' },
          { type: 'order', vi: 'Tôi hai mươi tuổi.', words: ['años', 'veinte', 'Tengo'], answer: 'Tengo veinte años' }
        ]
      },

      // ───────────────────────── A1-3 ─────────────────────────
      {
        id: 'es-a1-3',
        icon: '👪',
        title: 'Gia đình',
        goal: 'Giới thiệu các thành viên trong gia đình, dùng danh từ số ít/số nhiều và tính từ sở hữu.',
        vocab: [
          { w: 'la familia', ipa: 'la pha-mi-li-a', vi: 'gia đình', ex: 'Mi familia es grande.', exVi: 'Gia đình tôi đông người.' },
          { w: 'el padre', ipa: 'el pa-đrê', vi: 'bố', ex: 'Mi padre se llama Juan.', exVi: 'Bố tôi tên là Juan.' },
          { w: 'la madre', ipa: 'la ma-đrê', vi: 'mẹ', ex: 'Mi madre es médica.', exVi: 'Mẹ tôi là bác sĩ.' },
          { w: 'el hermano', ipa: 'el ẹc-ma-nô', vi: 'anh trai / em trai', ex: 'Tengo un hermano.', exVi: 'Tôi có một anh trai.' },
          { w: 'la hermana', ipa: 'la ẹc-ma-na', vi: 'chị gái / em gái', ex: 'Mi hermana tiene doce años.', exVi: 'Em gái tôi mười hai tuổi.' },
          { w: 'el hijo', ipa: 'el i-khô', vi: 'con trai', ex: 'Su hijo es estudiante.', exVi: 'Con trai cô ấy là sinh viên.' },
          { w: 'la hija', ipa: 'la i-kha', vi: 'con gái', ex: 'Tienen una hija.', exVi: 'Họ có một cô con gái.' },
          { w: 'el abuelo', ipa: 'el a-bu-ê-lô', vi: 'ông', ex: 'Mi abuelo tiene setenta años.', exVi: 'Ông tôi bảy mươi tuổi.' },
          { w: 'la abuela', ipa: 'la a-bu-ê-la', vi: 'bà', ex: 'Mi abuela es de Sevilla.', exVi: 'Bà tôi quê ở Sevilla.' },
          { w: 'el esposo / la esposa', ipa: 'el ét-pô-xô / la ét-pô-xa', vi: 'chồng / vợ', ex: 'Su esposa es profesora.', exVi: 'Vợ anh ấy là giáo viên.' }
        ],
        grammar: {
          title: 'Giống & số của danh từ, tính từ sở hữu (mi, tu, su…)',
          explain: [
            'Mỗi danh từ có giống: thường đuôi -o là giống đực (el hermano), đuôi -a là giống cái (la hermana). Có ngoại lệ, vì vậy hãy học danh từ kèm mạo từ el/la.',
            'Số nhiều: từ tận cùng bằng nguyên âm thêm -s (hermano → hermanos), tận cùng bằng phụ âm thêm -es (profesor → profesores). Mạo từ đổi theo: el → los, la → las. Số nhiều giống đực có thể chỉ cả nam lẫn nữ: los padres = bố mẹ, los hermanos = anh chị em.',
            'Tính từ sở hữu đứng trước danh từ và hoà hợp với vật/người ĐƯỢC SỞ HỮU, không phải với người sở hữu: mi hermano → mis hermanos. Nuestro và vuestro còn đổi giống: nuestra familia, nuestros abuelos.',
            'Su/sus có nhiều nghĩa: của anh ấy, của cô ấy, của ông/bà (usted), của họ. Hãy dựa vào ngữ cảnh để hiểu.'
          ],
          table: [
            ['Người sở hữu', 'Số ít', 'Số nhiều', 'Ví dụ'],
            ['yo', 'mi', 'mis', 'mi madre, mis hermanos'],
            ['tú', 'tu', 'tus', 'tu padre, tus abuelos'],
            ['él / ella / usted', 'su', 'sus', 'su hija, sus hijos'],
            ['nosotros', 'nuestro / nuestra', 'nuestros / nuestras', 'nuestra familia'],
            ['vosotros', 'vuestro / vuestra', 'vuestros / vuestras', 'vuestro abuelo'],
            ['ellos / ustedes', 'su', 'sus', 'sus padres']
          ],
          examples: [
            { t: 'Mi madre se llama Rosa.', vi: 'Mẹ tôi tên là Rosa.' },
            { t: 'Tengo dos hermanas.', vi: 'Tôi có hai chị em gái.' },
            { t: 'Nuestra familia es grande.', vi: 'Gia đình chúng tôi đông người.' },
            { t: '¿Cómo se llama tu padre?', vi: 'Bố bạn tên là gì?' },
            { t: 'Mis abuelos son de Sevilla.', vi: 'Ông bà tôi quê ở Sevilla.' }
          ],
          tip: 'Phân biệt tu (của bạn, không dấu) và tú (bạn, có dấu): "Tú tienes tu libro" = Bạn có quyển sách của bạn. Chữ h trong tiếng Tây Ban Nha không đọc: hermano đọc là "ẹc-ma-nô".'
        },
        dialogue: [
          { s: 'Lucía', t: 'Nam, ¿tienes hermanos?', vi: 'Nam ơi, bạn có anh chị em không?' },
          { s: 'Nam', t: 'Sí, tengo una hermana. Se llama Hoa. ¿Y tú?', vi: 'Có, mình có một em gái. Em ấy tên là Hoa. Còn bạn?' },
          { s: 'Lucía', t: 'Yo tengo dos hermanos: Pablo y Diego.', vi: 'Mình có hai em trai: Pablo và Diego.' },
          { s: 'Nam', t: '¿Cuántos años tienen tus hermanos?', vi: 'Các em trai của bạn bao nhiêu tuổi?' },
          { s: 'Lucía', t: 'Pablo tiene quince años y Diego tiene doce.', vi: 'Pablo mười lăm tuổi còn Diego mười hai.' },
          { s: 'Nam', t: '¿Y tus padres? ¿De dónde son?', vi: 'Còn bố mẹ bạn? Họ quê ở đâu?' },
          { s: 'Lucía', t: 'Mi padre es de Sevilla y mi madre es de Valencia.', vi: 'Bố mình quê ở Sevilla còn mẹ mình quê ở Valencia.' }
        ],
        exercises: [
          { type: 'mc', q: '___ hermanos se llaman Pablo y Diego.', options: ['Mi', 'Mis', 'Tu'], answer: 1, explain: 'Hermanos là số nhiều nên dùng mis.' },
          { type: 'fill', q: 'la abuela → ___ abuelas', answer: ['las'], hint: 'mạo từ số nhiều', explain: 'la → las ở số nhiều.' },
          { type: 'mc', q: 'Nuestra ___ es grande.', options: ['familia', 'padre', 'hermanos'], answer: 0, explain: 'Nuestra là giống cái số ít, hợp với la familia.' },
          { type: 'fill', q: '¿Cómo se llama ___ madre?', answer: ['tu'], hint: 'của bạn (tú)', explain: 'Của bạn = tu (không dấu).' },
          { type: 'order', vi: 'Bố mẹ tôi quê ở Sevilla.', words: ['de', 'padres', 'Sevilla', 'Mis', 'son'], answer: 'Mis padres son de Sevilla' },
          { type: 'mc', q: '"Con gái" là:', options: ['la hija', 'el hijo', 'la hermana'], answer: 0, explain: 'la hija = con gái; el hijo = con trai; la hermana = chị/em gái.' },
          { type: 'fill', q: 'Ellos tienen dos hijos. ___ hijos son altos.', answer: ['sus'], hint: 'của họ', explain: 'Của họ + danh từ số nhiều → sus.' },
          { type: 'order', vi: 'Ông tôi bảy mươi tuổi.', words: ['setenta', 'abuelo', 'tiene', 'Mi', 'años'], answer: 'Mi abuelo tiene setenta años' }
        ]
      },

      // ───────────────────────── A1-4 ─────────────────────────
      {
        id: 'es-a1-4',
        icon: '🎨',
        title: 'Đồ vật & màu sắc',
        goal: 'Gọi tên đồ vật quanh mình, miêu tả màu sắc và chỉ vật bằng este/ese.',
        vocab: [
          { w: 'el libro', ipa: 'el li-brô', vi: 'quyển sách', ex: 'El libro es rojo.', exVi: 'Quyển sách màu đỏ.' },
          { w: 'la mesa', ipa: 'la mê-xa', vi: 'cái bàn', ex: 'La mesa es blanca.', exVi: 'Cái bàn màu trắng.' },
          { w: 'la silla', ipa: 'la xi-gia', vi: 'cái ghế', ex: 'Esta silla es negra.', exVi: 'Cái ghế này màu đen.' },
          { w: 'el bolígrafo', ipa: 'el bô-li-gra-phô', vi: 'cây bút bi', ex: '¿Tienes un bolígrafo azul?', exVi: 'Bạn có bút bi xanh không?' },
          { w: 'la mochila', ipa: 'la mô-chi-la', vi: 'cái ba lô', ex: 'Mi mochila es negra.', exVi: 'Ba lô của tôi màu đen.' },
          { w: 'el coche', ipa: 'el cô-chê', vi: 'xe ô tô', ex: 'Ese coche es rojo.', exVi: 'Chiếc ô tô đó màu đỏ.' },
          { w: 'rojo / roja', ipa: 'rô-khô / rô-kha', vi: 'màu đỏ', ex: 'Tengo una mochila roja.', exVi: 'Tôi có một cái ba lô màu đỏ.' },
          { w: 'azul', ipa: 'a-thun', vi: 'màu xanh dương', ex: 'El cielo es azul.', exVi: 'Bầu trời màu xanh.' },
          { w: 'blanco / blanca', ipa: 'blan-cô / blan-ca', vi: 'màu trắng', ex: 'La casa es blanca.', exVi: 'Ngôi nhà màu trắng.' },
          { w: 'negro / negra', ipa: 'nê-grô / nê-gra', vi: 'màu đen', ex: 'Tengo un gato negro.', exVi: 'Tôi có một con mèo đen.' }
        ],
        grammar: {
          title: 'Mạo từ el/la/un/una, hoà hợp tính từ, este/ese',
          explain: [
            'Mạo từ xác định el / la / los / las dùng cho vật đã biết ("cái … đó"). Mạo từ không xác định un / una (một) và unos / unas (vài) dùng khi nhắc đến lần đầu: Es un libro. El libro es rojo.',
            'Tính từ thường đứng SAU danh từ và phải hoà hợp giống và số với danh từ: un coche rojo, una mesa roja, unos libros rojos, unas sillas rojas.',
            'Tính từ tận cùng bằng -e hoặc phụ âm không đổi giống, chỉ thêm số nhiều: un coche verde / una mesa verde; un libro azul / unos libros azules.',
            'Chỉ định: este / esta / estos / estas = này (gần người nói); ese / esa / esos / esas = đó (gần người nghe). Khi chưa biết vật là gì, dùng dạng trung tính esto / eso: ¿Qué es esto?'
          ],
          table: [
            ['', 'Giống đực', 'Giống cái'],
            ['Mạo từ xác định', 'el / los', 'la / las'],
            ['Mạo từ không xác định', 'un / unos', 'una / unas'],
            ['Này', 'este / estos', 'esta / estas'],
            ['Đó', 'ese / esos', 'esa / esas'],
            ['Tính từ -o', 'rojo / rojos', 'roja / rojas']
          ],
          examples: [
            { t: 'Es un libro rojo.', vi: 'Đó là một quyển sách màu đỏ.' },
            { t: 'La mesa es blanca.', vi: 'Cái bàn màu trắng.' },
            { t: 'Esta mochila es negra.', vi: 'Cái ba lô này màu đen.' },
            { t: 'Ese coche es azul.', vi: 'Chiếc ô tô đó màu xanh dương.' },
            { t: 'Tengo unos bolígrafos verdes.', vi: 'Tôi có vài cây bút bi màu xanh lá.' }
          ],
          tip: 'Giống tiếng Việt, tính từ đứng sau danh từ (xe đỏ = coche rojo) — nhưng đừng quên đổi đuôi theo danh từ: "la casa blanco" ✗ → "la casa blanca" ✓. Màu khác: verde (xanh lá), amarillo (vàng), gris (xám), marrón (nâu).'
        },
        dialogue: [
          { s: 'Elena', t: 'Tomás, ¿qué es esto?', vi: 'Tomás ơi, đây là cái gì?' },
          { s: 'Tomás', t: 'Es un bolígrafo. ¿Es tu bolígrafo?', vi: 'Là một cây bút bi. Có phải bút của bạn không?' },
          { s: 'Elena', t: 'No, mi bolígrafo es azul. Este bolígrafo es rojo.', vi: 'Không, bút của mình màu xanh. Cây bút này màu đỏ.' },
          { s: 'Tomás', t: '¿Y esa mochila negra? ¿Es tu mochila?', vi: 'Thế còn cái ba lô đen đó? Có phải ba lô của bạn không?' },
          { s: 'Elena', t: 'Sí, es mi mochila. Gracias.', vi: 'Ừ, là ba lô của mình. Cảm ơn nhé.' },
          { s: 'Tomás', t: 'De nada. Es una mochila muy bonita.', vi: 'Không có gì. Cái ba lô đẹp quá.' }
        ],
        exercises: [
          { type: 'mc', q: '___ mesa es blanca.', options: ['El', 'La', 'Los'], answer: 1, explain: 'Mesa là danh từ giống cái số ít → la.' },
          { type: 'fill', q: 'Tengo una mochila ___.', answer: ['roja'], hint: 'màu đỏ', explain: 'Mochila giống cái → roja.' },
          { type: 'mc', q: 'Chọn cụm từ đúng:', options: ['la silla negro', 'la silla negra', 'el silla negra'], answer: 1, explain: 'La silla là giống cái, tính từ cũng phải giống cái: negra.' },
          { type: 'fill', q: '___ libros son azules.', answer: ['estos'], hint: 'này (số nhiều, giống đực)', explain: 'Libros giống đực số nhiều → estos.' },
          { type: 'order', vi: 'Chiếc ô tô đó màu xanh dương.', words: ['azul', 'coche', 'es', 'Ese'], answer: 'Ese coche es azul' },
          { type: 'mc', q: 'Số nhiều của "azul" là:', options: ['azuls', 'azules', 'azulas'], answer: 1, explain: 'Tận cùng bằng phụ âm → thêm -es: azules.' },
          { type: 'fill', q: 'Es ___ bolígrafo.', answer: ['un'], hint: 'một (giống đực)', explain: 'Bolígrafo giống đực → un.' },
          { type: 'order', vi: 'Đây là cái gì?', words: ['esto?', 'es', '¿Qué'], answer: '¿Qué es esto?' }
        ]
      },

      // ───────────────────────── A1-5 ─────────────────────────
      {
        id: 'es-a1-5',
        icon: '⏰',
        title: 'Thói quen hằng ngày',
        goal: 'Kể về một ngày bình thường của mình bằng thì hiện tại và động từ phản thân.',
        vocab: [
          { w: 'levantarse', ipa: 'lê-ban-tar-xê', vi: 'thức dậy', ex: 'Me levanto temprano.', exVi: 'Tôi dậy sớm.' },
          { w: 'ducharse', ipa: 'đu-char-xê', vi: 'tắm (vòi sen)', ex: 'Me ducho por la mañana.', exVi: 'Tôi tắm vào buổi sáng.' },
          { w: 'desayunar', ipa: 'đê-xa-giu-nar', vi: 'ăn sáng', ex: 'Desayuno en casa.', exVi: 'Tôi ăn sáng ở nhà.' },
          { w: 'trabajar', ipa: 'tra-ba-khar', vi: 'làm việc', ex: 'Mi padre trabaja en un banco.', exVi: 'Bố tôi làm việc ở ngân hàng.' },
          { w: 'estudiar', ipa: 'ét-tu-đi-ar', vi: 'học', ex: 'Estudio español.', exVi: 'Tôi học tiếng Tây Ban Nha.' },
          { w: 'comer', ipa: 'cô-mer', vi: 'ăn; ăn trưa', ex: 'Comemos a las dos.', exVi: 'Chúng tôi ăn trưa lúc hai giờ.' },
          { w: 'beber', ipa: 'bê-ber', vi: 'uống', ex: 'Bebo mucha agua.', exVi: 'Tôi uống nhiều nước.' },
          { w: 'leer', ipa: 'lê-er', vi: 'đọc', ex: 'Leo un libro por la noche.', exVi: 'Tôi đọc sách vào buổi tối.' },
          { w: 'vivir', ipa: 'bi-bir', vi: 'sống', ex: 'Vivo en Hanói.', exVi: 'Tôi sống ở Hà Nội.' },
          { w: 'cenar', ipa: 'thê-nar', vi: 'ăn tối', ex: 'Cenamos en familia.', exVi: 'Chúng tôi ăn tối cùng gia đình.' }
        ],
        grammar: {
          title: 'Thì hiện tại: động từ -ar / -er / -ir; động từ phản thân',
          explain: [
            'Động từ tiếng Tây Ban Nha chia theo chủ ngữ. Với động từ có quy tắc: bỏ đuôi -ar, -er, -ir rồi thêm đuôi tương ứng (xem bảng). Ví dụ: hablar → hablo, hablas, habla…',
            'Nhóm -er và -ir chia giống nhau, chỉ khác ở nosotros (comemos / vivimos) và vosotros (coméis / vivís).',
            'Động từ phản thân có -se ở cuối nguyên mẫu (levantarse, ducharse): hành động người làm tự tác động lên chính mình. Khi chia, đặt đại từ me / te / se / nos / os / se TRƯỚC động từ: me levanto, te duchas, se levanta.',
            'Thì hiện tại dùng để nói thói quen, việc thường làm: Trabajo por la mañana (Tôi làm việc buổi sáng).'
          ],
          table: [
            ['Chủ ngữ', 'hablar', 'comer', 'vivir', 'levantarse'],
            ['yo', 'hablo', 'como', 'vivo', 'me levanto'],
            ['tú', 'hablas', 'comes', 'vives', 'te levantas'],
            ['él / ella / usted', 'habla', 'come', 'vive', 'se levanta'],
            ['nosotros', 'hablamos', 'comemos', 'vivimos', 'nos levantamos'],
            ['vosotros', 'habláis', 'coméis', 'vivís', 'os levantáis'],
            ['ellos / ustedes', 'hablan', 'comen', 'viven', 'se levantan']
          ],
          examples: [
            { t: 'Me levanto temprano y me ducho.', vi: 'Tôi dậy sớm và tắm.' },
            { t: 'Trabajo en una oficina.', vi: 'Tôi làm việc ở văn phòng.' },
            { t: 'Mis padres viven en Hanói.', vi: 'Bố mẹ tôi sống ở Hà Nội.' },
            { t: '¿Lees el periódico por la mañana?', vi: 'Bạn có đọc báo vào buổi sáng không?' },
            { t: 'Nosotros cenamos en casa.', vi: 'Chúng tôi ăn tối ở nhà.' }
          ],
          tip: 'Đừng quên đại từ phản thân: "Levanto temprano" ✗ (nghĩa là "tôi nâng… lên sớm") → "Me levanto temprano" ✓. Chú ý dấu ở vosotros: habláis, coméis, vivís.'
        },
        dialogue: [
          { s: 'Sofía', t: 'Mai, ¿dónde vives?', vi: 'Mai ơi, bạn sống ở đâu?' },
          { s: 'Mai', t: 'Vivo en Madrid. Estudio español en la universidad.', vi: 'Mình sống ở Madrid. Mình học tiếng Tây Ban Nha ở trường đại học.' },
          { s: 'Sofía', t: '¿Y también trabajas?', vi: 'Thế bạn có đi làm không?' },
          { s: 'Mai', t: 'Sí, trabajo por la tarde en una cafetería.', vi: 'Có, mình làm ở một quán cà phê vào buổi chiều.' },
          { s: 'Sofía', t: '¿Desayunas en casa?', vi: 'Bạn có ăn sáng ở nhà không?' },
          { s: 'Mai', t: 'Sí. Me levanto temprano, me ducho y desayuno en casa.', vi: 'Có. Mình dậy sớm, tắm rồi ăn sáng ở nhà.' },
          { s: 'Sofía', t: '¡Qué bien! Yo como y ceno en el trabajo.', vi: 'Hay quá! Mình thì ăn trưa và ăn tối ở chỗ làm.' }
        ],
        exercises: [
          { type: 'mc', q: 'Yo ___ en Hanói.', options: ['vivo', 'vives', 'vive'], answer: 0, explain: 'Yo + vivir → vivo.' },
          { type: 'fill', q: 'Nosotros ___ español.', answer: ['estudiamos'], hint: 'estudiar', explain: 'Nosotros + -ar → -amos: estudiamos.' },
          { type: 'mc', q: 'Ella ___ café por la mañana.', options: ['bebe', 'bebo', 'bebes'], answer: 0, explain: 'Ella + beber → bebe.' },
          { type: 'fill', q: 'Yo ___ levanto a las siete.', answer: ['me'], hint: 'đại từ phản thân', explain: 'Yo → me levanto.' },
          { type: 'order', vi: 'Họ ăn trưa ở nhà.', words: ['casa', 'Ellos', 'en', 'comen'], answer: 'Ellos comen en casa' },
          { type: 'fill', q: 'Vosotros ___ mucho.', answer: ['trabajáis'], hint: 'trabajar', explain: 'Vosotros + -ar → -áis: trabajáis.' },
          { type: 'mc', q: '"Anh ấy tắm" là:', options: ['Él ducha.', 'Él se ducha.', 'Él te duchas.'], answer: 1, explain: 'Động từ phản thân, ngôi él → se ducha.' },
          { type: 'order', vi: 'Bạn có đọc sách vào buổi tối không?', words: ['noche?', 'libros', 'por', '¿Lees', 'la'], answer: '¿Lees libros por la noche?' }
        ]
      },

      // ───────────────────────── A1-6 ─────────────────────────
      {
        id: 'es-a1-6',
        icon: '🍽️',
        title: 'Đồ ăn & thức uống',
        goal: 'Nói mình thích/không thích món gì và gọi món lịch sự ở quán.',
        vocab: [
          { w: 'el agua', ipa: 'el a-gua', vi: 'nước', ex: 'Quisiera un vaso de agua.', exVi: 'Tôi muốn một cốc nước.' },
          { w: 'el café', ipa: 'el ca-phê', vi: 'cà phê', ex: 'Me gusta el café con leche.', exVi: 'Tôi thích cà phê sữa.' },
          { w: 'la leche', ipa: 'la lê-chê', vi: 'sữa', ex: 'Mi hijo bebe leche.', exVi: 'Con trai tôi uống sữa.' },
          { w: 'el pan', ipa: 'el pan', vi: 'bánh mì', ex: 'Desayuno pan con tomate.', exVi: 'Tôi ăn sáng bánh mì với cà chua.' },
          { w: 'la carne', ipa: 'la car-nê', vi: 'thịt', ex: 'No me gusta la carne.', exVi: 'Tôi không thích thịt.' },
          { w: 'el pescado', ipa: 'el pét-ca-đô', vi: 'cá (món ăn)', ex: 'Nos gusta el pescado.', exVi: 'Chúng tôi thích món cá.' },
          { w: 'el arroz', ipa: 'el a-rốth', vi: 'cơm, gạo', ex: 'En Vietnam comemos arroz.', exVi: 'Ở Việt Nam chúng tôi ăn cơm.' },
          { w: 'la fruta', ipa: 'la phru-ta', vi: 'trái cây', ex: 'Me gustan las frutas tropicales.', exVi: 'Tôi thích trái cây nhiệt đới.' },
          { w: 'la cerveza', ipa: 'la thẹc-bê-tha', vi: 'bia', ex: 'Una cerveza, por favor.', exVi: 'Cho một cốc bia.' },
          { w: 'la cuenta', ipa: 'la cu-ên-ta', vi: 'hoá đơn (tính tiền)', ex: 'La cuenta, por favor.', exVi: 'Cho tôi tính tiền.' }
        ],
        grammar: {
          title: 'Gustar (thích) và quisiera (tôi muốn – lịch sự)',
          explain: [
            'Gustar có nghĩa gốc là "làm cho … thích": vật được thích là chủ ngữ, người thích đứng trước dưới dạng đại từ me / te / le / nos / os / les. Me gusta el café = Cà phê làm tôi thích → Tôi thích cà phê.',
            'Một vật hoặc một động từ nguyên mẫu → gusta (Me gusta el pan, Me gusta comer). Nhiều vật → gustan (Me gustan las frutas). Phủ định: đặt no trước đại từ: No me gusta la carne.',
            'Quisiera (tôi muốn) là cách nói lịch sự khi gọi món, mua hàng: Quisiera un café, por favor. Cũng có thể nói "Para mí, …" (Phần tôi thì…).',
            'Danh từ đi sau gustar thường có mạo từ el / la / los / las: Me gusta la fruta (không nói "Me gusta fruta").'
          ],
          table: [
            ['Người thích', 'Đại từ', '1 vật / động từ', 'Nhiều vật'],
            ['yo', 'me', 'me gusta el pan', 'me gustan las frutas'],
            ['tú', 'te', 'te gusta el café', 'te gustan los tomates'],
            ['él / ella / usted', 'le', 'le gusta la carne', 'le gustan los pasteles'],
            ['nosotros', 'nos', 'nos gusta comer', 'nos gustan las naranjas'],
            ['vosotros', 'os', 'os gusta el pescado', 'os gustan las patatas'],
            ['ellos / ustedes', 'les', 'les gusta la cerveza', 'les gustan los postres']
          ],
          examples: [
            { t: 'Me gusta mucho el café.', vi: 'Tôi rất thích cà phê.' },
            { t: 'No me gustan las patatas.', vi: 'Tôi không thích khoai tây.' },
            { t: 'Nos gusta comer pescado.', vi: 'Chúng tôi thích ăn cá.' },
            { t: '¿Te gusta la cerveza?', vi: 'Bạn có thích bia không?' },
            { t: 'Quisiera un vaso de agua, por favor.', vi: 'Làm ơn cho tôi một cốc nước.' }
          ],
          tip: 'Lỗi kinh điển: "Yo gusto el café" ✗ → "Me gusta el café" ✓. Muốn nhấn mạnh "tôi", thêm a mí: "A mí me gusta el té". Lưu ý: el agua là danh từ giống cái nhưng dùng el vì bắt đầu bằng âm "a" có trọng âm.'
        },
        dialogue: [
          { s: 'Camarero', t: 'Buenas tardes. ¿Qué quieren tomar?', vi: 'Chào buổi chiều. Quý khách muốn dùng gì ạ?' },
          { s: 'Lan', t: 'Quisiera un café con leche, por favor.', vi: 'Làm ơn cho tôi một cà phê sữa.' },
          { s: 'Pedro', t: 'Para mí, una cerveza.', vi: 'Còn tôi thì một cốc bia.' },
          { s: 'Camarero', t: '¿Y para comer?', vi: 'Thế quý khách ăn gì ạ?' },
          { s: 'Lan', t: 'Me gusta mucho el pescado. Quisiera el pescado con arroz.', vi: 'Tôi rất thích cá. Cho tôi món cá với cơm.' },
          { s: 'Pedro', t: 'A mí no me gusta el pescado. Quisiera la carne con pan.', vi: 'Tôi thì không thích cá. Cho tôi món thịt với bánh mì.' },
          { s: 'Camarero', t: 'Muy bien. Ahora mismo.', vi: 'Vâng ạ. Có ngay ạ.' }
        ],
        exercises: [
          { type: 'mc', q: 'Me ___ las frutas.', options: ['gusta', 'gustan', 'gusto'], answer: 1, explain: 'Las frutas là số nhiều → gustan.' },
          { type: 'fill', q: '¿___ gusta el café?', answer: ['te'], hint: 'đại từ cho tú', explain: 'Hỏi "bạn" (tú) → te gusta.' },
          { type: 'mc', q: 'Nos ___ comer pescado.', options: ['gusta', 'gustan', 'gustamos'], answer: 0, explain: 'Sau gustar là động từ nguyên mẫu (comer) → dùng gusta.' },
          { type: 'fill', q: 'A ella ___ gusta la carne.', answer: ['le'], hint: 'đại từ cho ella', explain: 'Ella → le gusta.' },
          { type: 'order', vi: 'Làm ơn cho tôi một cà phê.', words: ['favor', 'un', 'Quisiera', 'café,', 'por'], answer: 'Quisiera un café, por favor' },
          { type: 'mc', q: 'Muốn tính tiền ở nhà hàng, bạn nói:', options: ['La cuenta, por favor.', 'El agua, por favor.', 'Buenos días.'], answer: 0, explain: 'La cuenta = hoá đơn.' },
          { type: 'fill', q: 'Quisiera un vaso de ___.', answer: ['agua'], hint: 'nước', explain: 'Un vaso de agua = một cốc nước.' },
          { type: 'order', vi: 'Tôi không thích bia.', words: ['gusta', 'No', 'cerveza', 'me', 'la'], answer: 'No me gusta la cerveza' }
        ]
      }
    ]
  },
  {
    id: 'A2',
    title: 'Sơ cấp 2',
    desc: 'Hẹn giờ, mua sắm, hỏi và chỉ đường, kể lại chuyện đã xảy ra, nói về sở thích và kế hoạch tương lai.',
    units: [
      // ───────────────────────── A2-1 ─────────────────────────
      {
        id: 'es-a2-1',
        icon: '🕐',
        title: 'Thời gian & lịch hẹn',
        goal: 'Hỏi và nói giờ, nói thứ, ngày tháng và sắp xếp một cuộc hẹn.',
        vocab: [
          { w: 'la hora', ipa: 'la ô-ra', vi: 'giờ', ex: '¿Qué hora es?', exVi: 'Mấy giờ rồi?' },
          { w: 'el día', ipa: 'el đi-a', vi: 'ngày', ex: '¿Qué día es hoy?', exVi: 'Hôm nay là thứ mấy?' },
          { w: 'la semana', ipa: 'la xê-ma-na', vi: 'tuần', ex: 'Trabajo cinco días a la semana.', exVi: 'Tôi làm việc năm ngày một tuần.' },
          { w: 'el mes', ipa: 'el mết', vi: 'tháng', ex: 'Mayo es mi mes favorito.', exVi: 'Tháng Năm là tháng tôi thích nhất.' },
          { w: 'el lunes', ipa: 'el lu-nết', vi: 'thứ Hai', ex: 'El lunes tengo clase.', exVi: 'Thứ Hai tôi có lớp.' },
          { w: 'el fin de semana', ipa: 'el phin đê xê-ma-na', vi: 'cuối tuần', ex: '¿Qué haces el fin de semana?', exVi: 'Cuối tuần bạn làm gì?' },
          { w: 'hoy', ipa: 'ôi', vi: 'hôm nay', ex: 'Hoy es viernes.', exVi: 'Hôm nay là thứ Sáu.' },
          { w: 'mañana', ipa: 'ma-nha-na', vi: 'ngày mai', ex: 'Mañana es sábado.', exVi: 'Ngày mai là thứ Bảy.' },
          { w: 'la cita', ipa: 'la thi-ta', vi: 'cuộc hẹn', ex: 'Tengo una cita con el médico.', exVi: 'Tôi có hẹn với bác sĩ.' },
          { w: 'temprano', ipa: 'tem-pra-nô', vi: 'sớm', ex: 'A las seis es muy temprano.', exVi: 'Sáu giờ thì sớm quá.' }
        ],
        grammar: {
          title: 'Nói giờ (Es la una / Son las…) và ngày tháng',
          explain: [
            'Hỏi giờ: ¿Qué hora es? Một giờ dùng số ít: Es la una. Từ hai giờ trở đi dùng số nhiều: Son las dos, Son las tres… (vì ngầm hiểu "las horas").',
            'Phút cộng thêm dùng y: Son las tres y diez (3:10). Mười lăm phút: y cuarto; rưỡi: y media. Sau phút 30, người Tây Ban Nha thường nói "giờ sau kém": Son las ocho menos cuarto (7:45), Son las cinco menos diez (4:50).',
            'Hỏi việc xảy ra lúc mấy giờ: ¿A qué hora…? → A las ocho / A la una. Thêm buổi: de la mañana (sáng), de la tarde (chiều), de la noche (tối).',
            'Thứ: lunes, martes, miércoles, jueves, viernes, sábado, domingo. Tháng: enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre. Ngày tháng: el + số + de + tháng: el 15 de mayo. "Vào thứ Hai" = el lunes; "mỗi thứ Hai" = los lunes.'
          ],
          table: [
            ['Giờ', 'Tiếng Tây Ban Nha'],
            ['1:00', 'Es la una.'],
            ['2:00', 'Son las dos.'],
            ['3:10', 'Son las tres y diez.'],
            ['4:15', 'Son las cuatro y cuarto.'],
            ['6:30', 'Son las seis y media.'],
            ['7:45', 'Son las ocho menos cuarto.']
          ],
          examples: [
            { t: '¿Qué hora es? — Son las nueve y media.', vi: 'Mấy giờ rồi? — Chín giờ rưỡi.' },
            { t: 'La clase es a las ocho de la mañana.', vi: 'Lớp học lúc tám giờ sáng.' },
            { t: 'Hoy es martes, 3 de marzo.', vi: 'Hôm nay là thứ Ba, ngày 3 tháng Ba.' },
            { t: 'Mi cumpleaños es el 20 de julio.', vi: 'Sinh nhật tôi là ngày 20 tháng Bảy.' },
            { t: 'Tengo una cita el viernes a la una.', vi: 'Tôi có hẹn vào thứ Sáu lúc một giờ.' }
          ],
          tip: '"Es la una" nhưng "Son las dos" — đừng nói "Son la una". Không dùng giới từ trước thứ: "en lunes" ✗ → "el lunes" ✓. Thứ và tháng viết thường: lunes, mayo.'
        },
        dialogue: [
          { s: 'Marta', t: 'Hola, Javier. ¿Tienes tiempo esta semana?', vi: 'Chào Javier. Tuần này bạn có rảnh không?' },
          { s: 'Javier', t: 'Hoy no, pero mañana sí. ¿Qué día es mañana?', vi: 'Hôm nay thì không, nhưng mai thì có. Mai là thứ mấy nhỉ?' },
          { s: 'Marta', t: 'Mañana es jueves, 14 de octubre.', vi: 'Mai là thứ Năm, ngày 14 tháng Mười.' },
          { s: 'Javier', t: 'Perfecto. ¿A qué hora quedamos?', vi: 'Tuyệt. Mình hẹn mấy giờ?' },
          { s: 'Marta', t: '¿A las seis y media de la tarde?', vi: 'Sáu rưỡi chiều nhé?' },
          { s: 'Javier', t: 'Es un poco temprano. ¿A las siete y cuarto?', vi: 'Hơi sớm. Bảy giờ mười lăm được không?' },
          { s: 'Marta', t: 'Vale, a las siete y cuarto. ¡Hasta mañana!', vi: 'Được, bảy giờ mười lăm. Hẹn mai gặp nhé!' }
        ],
        exercises: [
          { type: 'mc', q: '1:00 →', options: ['Es la una.', 'Son la una.', 'Es las una.'], answer: 0, explain: 'Một giờ dùng số ít: Es la una.' },
          { type: 'fill', q: 'Son las tres y ___. (3:30)', answer: ['media'], hint: 'rưỡi', explain: 'Rưỡi = y media.' },
          { type: 'mc', q: '8:45 →', options: ['Son las nueve menos cuarto.', 'Son las ocho menos cuarto.', 'Es la nueve y cuarto.'], answer: 0, explain: '8:45 = 9 giờ kém 15: Son las nueve menos cuarto.' },
          { type: 'fill', q: 'Mi cumpleaños es el 5 ___ mayo.', answer: ['de'], hint: 'giới từ', explain: 'Ngày tháng: el + số + de + tháng.' },
          { type: 'order', vi: 'Mấy giờ rồi?', words: ['es?', 'hora', '¿Qué'], answer: '¿Qué hora es?' },
          { type: 'mc', q: 'Ngày sau viernes (thứ Sáu) là:', options: ['jueves', 'sábado', 'domingo'], answer: 1, explain: 'viernes → sábado (thứ Bảy).' },
          { type: 'fill', q: 'Tengo una ___ con el médico a las diez.', answer: ['cita'], hint: 'cuộc hẹn', explain: 'La cita = cuộc hẹn.' },
          { type: 'order', vi: 'Lớp học lúc tám giờ sáng.', words: ['de', 'ocho', 'La', 'a', 'mañana', 'clase', 'las', 'es', 'la'], answer: 'La clase es a las ocho de la mañana' }
        ]
      },

      // ───────────────────────── A2-2 ─────────────────────────
      {
        id: 'es-a2-2',
        icon: '🛍️',
        title: 'Mua sắm',
        goal: 'Hỏi giá, hỏi cỡ, thử đồ và phân biệt ser với estar khi miêu tả.',
        vocab: [
          { w: 'la tienda', ipa: 'la ti-ên-đa', vi: 'cửa hàng', ex: 'La tienda está cerrada.', exVi: 'Cửa hàng đóng cửa rồi.' },
          { w: 'la camisa', ipa: 'la ca-mi-xa', vi: 'áo sơ mi', ex: 'Busco una camisa blanca.', exVi: 'Tôi đang tìm một chiếc sơ mi trắng.' },
          { w: 'los pantalones', ipa: 'lốt pan-ta-lô-nết', vi: 'quần dài', ex: 'Estos pantalones son muy cómodos.', exVi: 'Chiếc quần này rất thoải mái.' },
          { w: 'los zapatos', ipa: 'lốt tha-pa-tốt', vi: 'đôi giày', ex: '¿Cuánto cuestan los zapatos?', exVi: 'Đôi giày giá bao nhiêu?' },
          { w: 'el vestido', ipa: 'el bết-ti-đô', vi: 'váy liền', ex: 'Este vestido es precioso.', exVi: 'Chiếc váy này đẹp tuyệt.' },
          { w: 'la talla', ipa: 'la ta-gia', vi: 'cỡ (quần áo)', ex: '¿Qué talla usa usted?', exVi: 'Ông/bà mặc cỡ nào?' },
          { w: 'caro / cara', ipa: 'ca-rô / ca-ra', vi: 'đắt', ex: 'Esta camisa es muy cara.', exVi: 'Chiếc sơ mi này đắt quá.' },
          { w: 'barato / barata', ipa: 'ba-ra-tô / ba-ra-ta', vi: 'rẻ', ex: 'Los zapatos son baratos.', exVi: 'Đôi giày rẻ.' },
          { w: 'el euro', ipa: 'el êu-rô', vi: 'đồng euro', ex: 'Cuesta veinte euros.', exVi: 'Nó giá hai mươi euro.' },
          { w: 'el probador', ipa: 'el prô-ba-đor', vi: 'phòng thử đồ', ex: '¿Dónde está el probador?', exVi: 'Phòng thử đồ ở đâu?' }
        ],
        grammar: {
          title: 'Ser và estar; hỏi giá ¿Cuánto cuesta?',
          explain: [
            'Ser và estar đều dịch là "là / thì / ở", nhưng dùng khác nhau. Ser: bản chất, đặc điểm cố định, nguồn gốc, chất liệu, nghề nghiệp, giờ và ngày: La camisa es de algodón. Soy de Vietnam.',
            'Estar: trạng thái tạm thời, cảm xúc và VỊ TRÍ: La tienda está cerrada (cửa hàng đang đóng). Los zapatos están en la caja (giày ở trong hộp). Estoy cansado (tôi mệt).',
            'Hỏi giá một món: ¿Cuánto cuesta? → Cuesta treinta euros. Nhiều món: ¿Cuánto cuestan? → Cuestan cincuenta euros. Hỏi tổng tiền khi thanh toán: ¿Cuánto es?',
            'Một số tính từ đổi nghĩa theo động từ: La sopa es buena (súp này ngon/tốt – nói chung) – La sopa está buena (bát súp này đang ngon). Ở trình độ này, hãy nhớ quy tắc: vị trí và trạng thái → estar.'
          ],
          table: [
            ['Chủ ngữ', 'ser', 'estar'],
            ['yo', 'soy', 'estoy'],
            ['tú', 'eres', 'estás'],
            ['él / ella / usted', 'es', 'está'],
            ['nosotros', 'somos', 'estamos'],
            ['vosotros', 'sois', 'estáis'],
            ['ellos / ustedes', 'son', 'están'],
            ['Dùng cho', 'bản chất, nguồn gốc, chất liệu, nghề', 'trạng thái, cảm xúc, vị trí']
          ],
          examples: [
            { t: 'Esta camisa es de algodón.', vi: 'Chiếc sơ mi này bằng vải bông.' },
            { t: 'La tienda está cerrada hoy.', vi: 'Hôm nay cửa hàng đóng cửa.' },
            { t: '¿Cuánto cuesta este vestido? — Cuesta cuarenta euros.', vi: 'Chiếc váy này giá bao nhiêu? — Giá bốn mươi euro.' },
            { t: '¿Cuánto cuestan los pantalones?', vi: 'Chiếc quần này giá bao nhiêu?' },
            { t: 'Los zapatos están en el probador.', vi: 'Đôi giày ở trong phòng thử đồ.' }
          ],
          tip: 'Vị trí luôn dùng estar, kể cả khi cố định: "Madrid está en España" (không dùng es). Los pantalones và los zapatos là số nhiều nên phải hỏi "¿Cuánto cuestan?".'
        },
        dialogue: [
          { s: 'Dependienta', t: 'Buenos días. ¿Puedo ayudarla?', vi: 'Chào chị. Tôi có thể giúp gì cho chị?' },
          { s: 'Clara', t: 'Sí, gracias. Busco una camisa blanca, talla M.', vi: 'Vâng, cảm ơn. Tôi tìm một chiếc sơ mi trắng, cỡ M.' },
          { s: 'Dependienta', t: 'Esta camisa es muy bonita y es de algodón.', vi: 'Chiếc sơ mi này rất đẹp và làm bằng vải bông.' },
          { s: 'Clara', t: 'Me gusta. ¿Dónde está el probador?', vi: 'Tôi thích. Phòng thử đồ ở đâu ạ?' },
          { s: 'Dependienta', t: 'Está allí, a la derecha.', vi: 'Ở đằng kia, bên phải ạ.' },
          { s: 'Clara', t: 'Me queda bien. ¿Cuánto cuesta?', vi: 'Tôi mặc vừa. Nó giá bao nhiêu?' },
          { s: 'Dependienta', t: 'Cuesta veinticinco euros. No es cara.', vi: 'Giá hai mươi lăm euro. Không đắt đâu ạ.' },
          { s: 'Clara', t: '¡Perfecto! Me la llevo.', vi: 'Tuyệt! Tôi lấy chiếc này.' }
        ],
        exercises: [
          { type: 'mc', q: 'La tienda ___ cerrada.', options: ['es', 'está', 'son'], answer: 1, explain: 'Trạng thái tạm thời (đang đóng) → estar: está.' },
          { type: 'mc', q: 'Esta camisa ___ de algodón.', options: ['está', 'es', 'están'], answer: 1, explain: 'Chất liệu → ser: es.' },
          { type: 'fill', q: '¿Cuánto ___ los zapatos?', answer: ['cuestan'], hint: 'costar, số nhiều', explain: 'Los zapatos số nhiều → cuestan.' },
          { type: 'fill', q: 'Nosotros ___ en la tienda.', answer: ['estamos'], hint: 'estar', explain: 'Vị trí → estar; nosotros → estamos.' },
          { type: 'order', vi: 'Chiếc váy này giá bao nhiêu?', words: ['vestido?', 'cuesta', '¿Cuánto', 'este'], answer: '¿Cuánto cuesta este vestido?' },
          { type: 'mc', q: 'Từ trái nghĩa với "caro" là:', options: ['barato', 'bonito', 'blanco'], answer: 0, explain: 'caro (đắt) ↔ barato (rẻ).' },
          { type: 'fill', q: 'Madrid ___ en España.', answer: ['está'], hint: 'ser hay estar?', explain: 'Vị trí địa lý luôn dùng estar.' },
          { type: 'order', vi: 'Đôi giày rất đắt.', words: ['muy', 'caros', 'zapatos', 'Los', 'son'], answer: 'Los zapatos son muy caros' }
        ]
      },

      // ───────────────────────── A2-3 ─────────────────────────
      {
        id: 'es-a2-3',
        icon: '🏠',
        title: 'Nhà cửa & chỉ đường',
        goal: 'Miêu tả nhà ở, nói vật ở đâu, hỏi đường và chỉ đường đơn giản.',
        vocab: [
          { w: 'la casa', ipa: 'la ca-xa', vi: 'ngôi nhà', ex: 'Mi casa tiene tres dormitorios.', exVi: 'Nhà tôi có ba phòng ngủ.' },
          { w: 'la cocina', ipa: 'la cô-thi-na', vi: 'nhà bếp', ex: 'La cocina es pequeña.', exVi: 'Nhà bếp nhỏ.' },
          { w: 'el baño', ipa: 'el ba-nhô', vi: 'phòng tắm, nhà vệ sinh', ex: '¿Dónde está el baño?', exVi: 'Nhà vệ sinh ở đâu?' },
          { w: 'el dormitorio', ipa: 'el đor-mi-tô-ri-ô', vi: 'phòng ngủ', ex: 'Mi dormitorio está al lado del baño.', exVi: 'Phòng ngủ của tôi ở cạnh phòng tắm.' },
          { w: 'la calle', ipa: 'la ca-giê', vi: 'con phố', ex: 'Vivo en la calle Mayor.', exVi: 'Tôi sống ở phố Mayor.' },
          { w: 'la plaza', ipa: 'la pla-tha', vi: 'quảng trường', ex: 'Hay una fuente en la plaza.', exVi: 'Có một đài phun nước ở quảng trường.' },
          { w: 'el banco', ipa: 'el ban-cô', vi: 'ngân hàng', ex: 'El banco está enfrente del hotel.', exVi: 'Ngân hàng ở đối diện khách sạn.' },
          { w: 'la estación', ipa: 'la ét-ta-thi-ôn', vi: 'nhà ga', ex: 'La estación está cerca.', exVi: 'Nhà ga ở gần đây.' },
          { w: 'a la derecha', ipa: 'a la đê-rê-cha', vi: 'bên phải', ex: 'Gira a la derecha.', exVi: 'Rẽ phải.' },
          { w: 'a la izquierda', ipa: 'a la ith-ki-ẹc-đa', vi: 'bên trái', ex: 'El baño está a la izquierda.', exVi: 'Nhà vệ sinh ở bên trái.' }
        ],
        grammar: {
          title: 'Hay và estar + giới từ nơi chốn; mệnh lệnh với tú',
          explain: [
            'Hay (có) dùng để nói một thứ TỒN TẠI ở đâu đó, thường đi với un / una / số đếm hoặc danh từ không mạo từ: Hay un banco en esta calle. Hay dos baños. Hay dạng duy nhất, không đổi theo số.',
            'Estar dùng để nói VỊ TRÍ của một thứ đã xác định (có el / la, tên riêng): El banco está en la plaza. Hãy so sánh: ¿Hay un banco cerca? (Có ngân hàng nào gần đây không?) – ¿Dónde está el banco? (Ngân hàng ở đâu?).',
            'Giới từ nơi chốn: en (trong, trên), cerca de (gần), lejos de (xa), al lado de (bên cạnh), delante de (phía trước), detrás de (phía sau), enfrente de (đối diện), entre … y … (ở giữa). Nhớ: de + el = del, a + el = al.',
            'Mệnh lệnh khẳng định với tú của hầu hết động từ giống hệt dạng él ở thì hiện tại: girar → gira, tomar → toma, cruzar → cruza, seguir → sigue. Một số bất quy tắc: ir → ve, venir → ven.'
          ],
          table: [
            ['Nguyên mẫu', 'Mệnh lệnh (tú)', 'Nghĩa'],
            ['girar', 'gira', 'rẽ'],
            ['seguir', 'sigue', 'đi tiếp'],
            ['cruzar', 'cruza', 'băng qua'],
            ['tomar', 'toma', 'đi (đường), bắt (xe)'],
            ['ir', 've', 'đi'],
            ['venir', 'ven', 'đến']
          ],
          examples: [
            { t: 'Hay un supermercado cerca de mi casa.', vi: 'Có một siêu thị gần nhà tôi.' },
            { t: 'La estación está al lado del banco.', vi: 'Nhà ga ở cạnh ngân hàng.' },
            { t: 'Sigue todo recto y gira a la derecha.', vi: 'Đi thẳng rồi rẽ phải.' },
            { t: 'Cruza la plaza; el banco está enfrente.', vi: 'Băng qua quảng trường; ngân hàng ở phía đối diện.' },
            { t: 'Toma la segunda calle a la izquierda.', vi: 'Đi vào con phố thứ hai bên trái.' }
          ],
          tip: 'Không dùng hay với el / la: "Hay el banco en la plaza" ✗ → "El banco está en la plaza" ✓. Và de + el luôn gộp thành del: "al lado del banco" (không viết "al lado de el banco").'
        },
        dialogue: [
          { s: 'Huy', t: 'Perdona, ¿hay un banco cerca de aquí?', vi: 'Xin lỗi, gần đây có ngân hàng nào không ạ?' },
          { s: 'Señora', t: 'Sí, hay uno en la plaza Mayor.', vi: 'Có, có một cái ở quảng trường Mayor.' },
          { s: 'Huy', t: '¿Y dónde está la plaza Mayor?', vi: 'Thế quảng trường Mayor ở đâu ạ?' },
          { s: 'Señora', t: 'Sigue todo recto por esta calle y gira a la izquierda.', vi: 'Cháu cứ đi thẳng con phố này rồi rẽ trái.' },
          { s: 'Huy', t: '¿Está lejos?', vi: 'Có xa không ạ?' },
          { s: 'Señora', t: 'No, está a cinco minutos. El banco está al lado de la estación de metro.', vi: 'Không, khoảng năm phút thôi. Ngân hàng ở cạnh ga tàu điện ngầm.' },
          { s: 'Huy', t: 'Muchas gracias.', vi: 'Cảm ơn bác nhiều ạ.' },
          { s: 'Señora', t: 'De nada.', vi: 'Không có gì.' }
        ],
        exercises: [
          { type: 'mc', q: '___ dos baños en mi casa.', options: ['Hay', 'Está', 'Están'], answer: 0, explain: 'Nói sự tồn tại kèm số đếm → hay.' },
          { type: 'mc', q: 'El banco ___ en la plaza.', options: ['hay', 'está', 'es'], answer: 1, explain: 'Vị trí của vật xác định (el banco) → está.' },
          { type: 'fill', q: 'La farmacia está al lado ___ banco.', answer: ['del'], hint: 'de + el', explain: 'de + el = del.' },
          { type: 'fill', q: '___ a la derecha.', answer: ['gira'], hint: 'girar, mệnh lệnh tú', explain: 'Mệnh lệnh tú = dạng él hiện tại: gira.' },
          { type: 'order', vi: 'Nhà vệ sinh ở đâu?', words: ['baño?', 'el', '¿Dónde', 'está'], answer: '¿Dónde está el baño?' },
          { type: 'mc', q: 'Mệnh lệnh của "cruzar" với tú là:', options: ['cruzas', 'cruza', 'cruzo'], answer: 1, explain: 'Dạng él hiện tại: cruza.' },
          { type: 'fill', q: 'Sigue todo recto y gira a la ___.', answer: ['izquierda'], hint: 'bên trái', explain: 'A la izquierda = bên trái.' },
          { type: 'order', vi: 'Có một ngân hàng gần nhà tôi.', words: ['cerca', 'casa', 'un', 'Hay', 'mi', 'banco', 'de'], answer: 'Hay un banco cerca de mi casa' }
        ]
      },

      // ───────────────────────── A2-4 ─────────────────────────
      {
        id: 'es-a2-4',
        icon: '📸',
        title: 'Cuối tuần vừa rồi',
        goal: 'Kể lại những việc đã làm cuối tuần trước bằng thì quá khứ pretérito indefinido.',
        vocab: [
          { w: 'ayer', ipa: 'a-giêr', vi: 'hôm qua', ex: 'Ayer trabajé mucho.', exVi: 'Hôm qua tôi làm việc rất nhiều.' },
          { w: 'anoche', ipa: 'a-nô-chê', vi: 'tối qua', ex: 'Anoche cené con mi familia.', exVi: 'Tối qua tôi ăn tối với gia đình.' },
          { w: 'el sábado pasado', ipa: 'el xa-ba-đô pa-xa-đô', vi: 'thứ Bảy tuần trước', ex: 'El sábado pasado fui al cine.', exVi: 'Thứ Bảy tuần trước tôi đi xem phim.' },
          { w: 'visitar', ipa: 'bi-xi-tar', vi: 'thăm, tham quan', ex: 'Visité a mis abuelos.', exVi: 'Tôi đã đi thăm ông bà.' },
          { w: 'viajar', ipa: 'bi-a-khar', vi: 'đi du lịch', ex: 'Viajamos a Granada.', exVi: 'Chúng tôi đã đi Granada.' },
          { w: 'la playa', ipa: 'la pla-gia', vi: 'bãi biển', ex: 'Fuimos a la playa.', exVi: 'Chúng tôi đã đi biển.' },
          { w: 'el museo', ipa: 'el mu-xê-ô', vi: 'bảo tàng', ex: 'Visitaron el museo del Prado.', exVi: 'Họ đã tham quan bảo tàng Prado.' },
          { w: 'la película', ipa: 'la pê-li-cu-la', vi: 'bộ phim', ex: 'La película fue muy buena.', exVi: 'Bộ phim rất hay.' },
          { w: 'salir', ipa: 'xa-lir', vi: 'đi ra ngoài, đi chơi', ex: 'Salí con mis amigos.', exVi: 'Tôi đã đi chơi với bạn bè.' },
          { w: 'divertido / divertida', ipa: 'đi-bẹc-ti-đô / đi-bẹc-ti-đa', vi: 'vui, thú vị', ex: 'Fue un día muy divertido.', exVi: 'Đó là một ngày rất vui.' }
        ],
        grammar: {
          title: 'Thì quá khứ pretérito indefinido',
          explain: [
            'Pretérito indefinido diễn tả hành động đã xảy ra và kết thúc tại một thời điểm xác định trong quá khứ. Thường đi với: ayer, anoche, el sábado pasado, la semana pasada, el año pasado, en 2020.',
            'Động từ có quy tắc: -ar → -é, -aste, -ó, -amos, -asteis, -aron; -er và -ir → -í, -iste, -ió, -imos, -isteis, -ieron. Dấu trọng âm rất quan trọng: hablo (tôi nói) ≠ habló (anh ấy đã nói).',
            'Ir và ser có dạng quá khứ GIỐNG HỆT nhau: fui, fuiste, fue, fuimos, fuisteis, fueron. Dựa vào ngữ cảnh để hiểu: Fui a la playa (tôi đã đi biển) – Fue divertido (nó đã rất vui).',
            'Hacer: hice, hiciste, hizo, hicimos, hicisteis, hicieron. Tener: tuve, tuviste, tuvo, tuvimos, tuvisteis, tuvieron. Các dạng bất quy tắc này KHÔNG có dấu.'
          ],
          table: [
            ['Chủ ngữ', 'visitar', 'comer', 'salir', 'ir / ser', 'hacer', 'tener'],
            ['yo', 'visité', 'comí', 'salí', 'fui', 'hice', 'tuve'],
            ['tú', 'visitaste', 'comiste', 'saliste', 'fuiste', 'hiciste', 'tuviste'],
            ['él / ella / usted', 'visitó', 'comió', 'salió', 'fue', 'hizo', 'tuvo'],
            ['nosotros', 'visitamos', 'comimos', 'salimos', 'fuimos', 'hicimos', 'tuvimos'],
            ['vosotros', 'visitasteis', 'comisteis', 'salisteis', 'fuisteis', 'hicisteis', 'tuvisteis'],
            ['ellos / ustedes', 'visitaron', 'comieron', 'salieron', 'fueron', 'hicieron', 'tuvieron']
          ],
          examples: [
            { t: 'Ayer visité el museo del Prado.', vi: 'Hôm qua tôi đã tham quan bảo tàng Prado.' },
            { t: 'El sábado pasado fuimos a la playa.', vi: 'Thứ Bảy tuần trước chúng tôi đã đi biển.' },
            { t: '¿Qué hiciste el fin de semana?', vi: 'Cuối tuần bạn đã làm gì?' },
            { t: 'Anoche salí con mis amigos.', vi: 'Tối qua tôi đã đi chơi với bạn bè.' },
            { t: 'La película fue muy divertida.', vi: 'Bộ phim rất vui.' }
          ],
          tip: 'Với -ar và -ir, dạng nosotros ở quá khứ giống hiện tại (visitamos, salimos) — hãy dựa vào từ chỉ thời gian như ayer, el sábado pasado. Đừng quên dấu ở ngôi yo và él: visité, visitó.'
        },
        dialogue: [
          { s: 'Pablo', t: '¡Hola, Linh! ¿Qué hiciste el fin de semana?', vi: 'Chào Linh! Cuối tuần bạn đã làm gì?' },
          { s: 'Linh', t: 'El sábado fui a la playa con mi familia. ¡Fue genial!', vi: 'Thứ Bảy mình đi biển với gia đình. Tuyệt lắm!' },
          { s: 'Pablo', t: '¡Qué bien! ¿Y el domingo?', vi: 'Hay quá! Còn Chủ nhật?' },
          { s: 'Linh', t: 'El domingo visité el museo y por la noche cené con unos amigos. ¿Y tú?', vi: 'Chủ nhật mình đi bảo tàng, buổi tối thì ăn tối với mấy người bạn. Còn bạn?' },
          { s: 'Pablo', t: 'El sábado tuve mucho trabajo, pero anoche salí con mis amigos.', vi: 'Thứ Bảy mình bận việc lắm, nhưng tối qua mình đi chơi với bạn bè.' },
          { s: 'Linh', t: '¿Adónde fuisteis?', vi: 'Các bạn đã đi đâu?' },
          { s: 'Pablo', t: 'Fuimos a un concierto. Fue muy divertido.', vi: 'Bọn mình đi xem hoà nhạc. Vui lắm.' }
        ],
        exercises: [
          { type: 'mc', q: 'Ayer yo ___ el museo.', options: ['visito', 'visité', 'visitó'], answer: 1, explain: 'Quá khứ, ngôi yo: visité.' },
          { type: 'fill', q: 'El sábado pasado nosotros ___ a la playa.', answer: ['fuimos'], hint: 'ir, quá khứ', explain: 'Ir quá khứ, nosotros → fuimos.' },
          { type: 'mc', q: '¿Qué ___ tú el fin de semana?', options: ['hiciste', 'hizo', 'haces'], answer: 0, explain: 'Hacer quá khứ, ngôi tú → hiciste.' },
          { type: 'fill', q: 'Anoche Marta ___ con sus amigos.', answer: ['salió'], hint: 'salir, quá khứ', explain: 'Salir quá khứ, ngôi ella → salió.' },
          { type: 'order', vi: 'Hôm qua tôi ăn ở nhà hàng.', words: ['restaurante', 'comí', 'Ayer', 'un', 'en'], answer: 'Ayer comí en un restaurante' },
          { type: 'fill', q: 'Ellos ___ mucho trabajo la semana pasada.', answer: ['tuvieron'], hint: 'tener, quá khứ', explain: 'Tener quá khứ, ellos → tuvieron.' },
          { type: 'mc', q: 'La película ___ muy divertida.', options: ['fue', 'fui', 'fueron'], answer: 0, explain: 'Ser quá khứ, ngôi ella (la película) → fue.' },
          { type: 'order', vi: 'Tối qua bạn đã làm gì?', words: ['anoche?', 'hiciste', '¿Qué'], answer: '¿Qué hiciste anoche?' }
        ]
      },

      // ───────────────────────── A2-5 ─────────────────────────
      {
        id: 'es-a2-5',
        icon: '⚽',
        title: 'Sở thích & thể thao',
        goal: 'Nói về sở thích của mình và người khác, mức độ thường xuyên khi chơi thể thao.',
        vocab: [
          { w: 'el fútbol', ipa: 'el phút-bôn', vi: 'bóng đá', ex: 'Me encanta el fútbol.', exVi: 'Tôi mê bóng đá.' },
          { w: 'el baloncesto', ipa: 'el ba-lôn-thết-tô', vi: 'bóng rổ', ex: 'Juego al baloncesto los martes.', exVi: 'Tôi chơi bóng rổ vào các ngày thứ Ba.' },
          { w: 'nadar', ipa: 'na-đar', vi: 'bơi', ex: 'Nado en la piscina.', exVi: 'Tôi bơi ở bể bơi.' },
          { w: 'correr', ipa: 'cô-rrer', vi: 'chạy', ex: 'Corro por el parque.', exVi: 'Tôi chạy bộ trong công viên.' },
          { w: 'bailar', ipa: 'bai-lar', vi: 'nhảy, khiêu vũ', ex: 'A mi hermana le encanta bailar.', exVi: 'Em gái tôi rất thích nhảy.' },
          { w: 'la música', ipa: 'la mu-xi-ca', vi: 'âm nhạc', ex: 'Me gusta la música latina.', exVi: 'Tôi thích nhạc Latin.' },
          { w: 'el tiempo libre', ipa: 'el ti-em-pô li-brê', vi: 'thời gian rảnh', ex: '¿Qué haces en tu tiempo libre?', exVi: 'Bạn làm gì lúc rảnh?' },
          { w: 'siempre', ipa: 'xi-em-prê', vi: 'luôn luôn', ex: 'Siempre corro por la mañana.', exVi: 'Tôi luôn chạy bộ vào buổi sáng.' },
          { w: 'a menudo', ipa: 'a mê-nu-đô', vi: 'thường xuyên', ex: 'Vamos a menudo al cine.', exVi: 'Chúng tôi thường đi xem phim.' },
          { w: 'nunca', ipa: 'nun-ca', vi: 'không bao giờ', ex: 'Nunca bebo café por la noche.', exVi: 'Tôi không bao giờ uống cà phê buổi tối.' }
        ],
        grammar: {
          title: 'Gustar / encantar với nhiều chủ ngữ; trạng từ tần suất',
          explain: [
            'Encantar (rất thích, mê) dùng y hệt gustar: Me encanta el fútbol, Me encantan los deportes. Vì đã mang nghĩa "rất", không nói "me encanta mucho".',
            'Để làm rõ hoặc nhấn mạnh AI thích, thêm a + người ở đầu câu: A mi hermano le gusta el tenis. A mis padres les encanta bailar. A nosotros nos gustan los deportes. Đại từ (le, les…) vẫn phải giữ.',
            'Gusta / gustan chia theo VẬT được thích, không theo người: A ellos les gusta el fútbol (một môn → gusta). Đồng ý: A mí también (tôi cũng vậy) / A mí tampoco (tôi cũng không).',
            'Trạng từ tần suất từ nhiều đến ít: siempre (luôn luôn), casi siempre (hầu như luôn), a menudo (thường xuyên), a veces (đôi khi), casi nunca (hầu như không), nunca (không bao giờ). Nunca đứng trước động từ: Nunca juego al tenis, hoặc sau với no: No juego nunca al tenis. Chơi môn thể thao: jugar a + môn (juego al fútbol).'
          ],
          table: [
            ['Người thích', 'Cấu trúc', 'Ví dụ'],
            ['a mí', 'me gusta / me encanta', 'A mí me encanta nadar.'],
            ['a ti', 'te gusta / te encanta', '¿A ti te gusta bailar?'],
            ['a él / ella / usted', 'le gusta / le encanta', 'A Ana le gusta el tenis.'],
            ['a nosotros', 'nos gusta / nos encanta', 'A nosotros nos gustan los deportes.'],
            ['a vosotros', 'os gusta / os encanta', '¿A vosotros os gusta correr?'],
            ['a ellos / ustedes', 'les gusta / les encanta', 'A mis padres les encanta la música.']
          ],
          examples: [
            { t: 'A mi hermano le encanta el fútbol.', vi: 'Anh trai tôi mê bóng đá.' },
            { t: 'A mis amigos les gustan los deportes.', vi: 'Bạn bè tôi thích thể thao.' },
            { t: 'A veces juego al baloncesto con mis amigos.', vi: 'Thỉnh thoảng tôi chơi bóng rổ với bạn bè.' },
            { t: 'No me gusta nadar. — A mí tampoco.', vi: 'Tôi không thích bơi. — Tôi cũng không.' },
            { t: 'Nunca veo la televisión.', vi: 'Tôi không bao giờ xem tivi.' }
          ],
          tip: 'Một người → le, nhiều người → les: "A mis padres le gusta" ✗ → "A mis padres les gusta" ✓. Và đừng chia gustar theo người: "A ellos les gustan el fútbol" ✗ → "les gusta el fútbol" ✓.'
        },
        dialogue: [
          { s: 'Diego', t: 'Oye, Vy, ¿qué haces en tu tiempo libre?', vi: 'Này Vy, lúc rảnh bạn làm gì?' },
          { s: 'Vy', t: 'Me encanta la música. A menudo bailo salsa con mis amigas. ¿Y tú?', vi: 'Mình mê âm nhạc. Mình thường nhảy salsa với các bạn gái. Còn bạn?' },
          { s: 'Diego', t: 'A mí me encantan los deportes. Casi siempre juego al fútbol los sábados.', vi: 'Mình thì mê thể thao. Thứ Bảy nào mình cũng gần như đá bóng.' },
          { s: 'Vy', t: '¿Y te gusta nadar?', vi: 'Thế bạn có thích bơi không?' },
          { s: 'Diego', t: 'No mucho. Nado a veces en verano. ¿A tu familia le gusta el deporte?', vi: 'Không thích lắm. Mùa hè thỉnh thoảng mình mới bơi. Gia đình bạn có thích thể thao không?' },
          { s: 'Vy', t: 'Sí, a mis padres les encanta correr. Corren todos los domingos.', vi: 'Có, bố mẹ mình rất thích chạy bộ. Chủ nhật nào họ cũng chạy.' },
          { s: 'Diego', t: '¡Qué deportistas! Yo nunca corro.', vi: 'Khoẻ thật đấy! Mình thì không bao giờ chạy bộ.' }
        ],
        exercises: [
          { type: 'mc', q: 'A mis padres ___ encanta bailar.', options: ['le', 'les', 'nos'], answer: 1, explain: 'Mis padres là nhiều người → les.' },
          { type: 'mc', q: 'Me ___ los deportes.', options: ['encanta', 'encantan', 'encanto'], answer: 1, explain: 'Los deportes số nhiều → encantan.' },
          { type: 'fill', q: 'A mi hermana ___ gusta el tenis.', answer: ['le'], hint: 'một người (ella)', explain: 'Mi hermana = ella → le.' },
          { type: 'fill', q: '¿A vosotros ___ gusta correr?', answer: ['os'], hint: 'vosotros', explain: 'Vosotros → os.' },
          { type: 'order', vi: 'Tôi luôn chạy bộ vào buổi sáng.', words: ['mañana', 'corro', 'la', 'Siempre', 'por'], answer: 'Siempre corro por la mañana' },
          { type: 'mc', q: '"Không bao giờ" là:', options: ['siempre', 'a menudo', 'nunca'], answer: 2, explain: 'nunca = không bao giờ.' },
          { type: 'fill', q: 'Juego ___ fútbol los sábados.', answer: ['al'], hint: 'a + el', explain: 'Jugar a + el fútbol → al fútbol.' },
          { type: 'order', vi: 'Anh trai tôi mê bóng rổ.', words: ['encanta', 'el', 'A', 'hermano', 'baloncesto', 'mi', 'le'], answer: 'A mi hermano le encanta el baloncesto' }
        ]
      },

      // ───────────────────────── A2-6 ─────────────────────────
      {
        id: 'es-a2-6',
        icon: '✈️',
        title: 'Kế hoạch tương lai',
        goal: 'Nói về dự định, kế hoạch du lịch và đưa ra dự đoán đơn giản về tương lai.',
        vocab: [
          { w: 'el plan', ipa: 'el plan', vi: 'kế hoạch', ex: '¿Tienes planes para el sábado?', exVi: 'Bạn có kế hoạch gì cho thứ Bảy không?' },
          { w: 'las vacaciones', ipa: 'lát ba-ca-thi-ô-nết', vi: 'kỳ nghỉ', ex: 'Voy a pasar las vacaciones en Vietnam.', exVi: 'Tôi sẽ nghỉ hè ở Việt Nam.' },
          { w: 'el viaje', ipa: 'el bi-a-khê', vi: 'chuyến đi', ex: 'El viaje va a ser largo.', exVi: 'Chuyến đi sẽ dài đấy.' },
          { w: 'el billete', ipa: 'el bi-giê-tê', vi: 'vé (tàu, máy bay)', ex: 'Ya tengo el billete de avión.', exVi: 'Tôi đã có vé máy bay rồi.' },
          { w: 'el hotel', ipa: 'el ô-ten', vi: 'khách sạn', ex: 'El hotel está cerca de la playa.', exVi: 'Khách sạn ở gần bãi biển.' },
          { w: 'reservar', ipa: 'rê-xẹc-bar', vi: 'đặt trước', ex: 'Voy a reservar una habitación.', exVi: 'Tôi sẽ đặt một phòng.' },
          { w: 'el verano', ipa: 'el bê-ra-nô', vi: 'mùa hè', ex: 'Este verano viajaré a Sevilla.', exVi: 'Hè này tôi sẽ đi Sevilla.' },
          { w: 'la próxima semana', ipa: 'la prốc-xi-ma xê-ma-na', vi: 'tuần sau', ex: 'La próxima semana empiezo un curso.', exVi: 'Tuần sau tôi bắt đầu một khoá học.' },
          { w: 'el año que viene', ipa: 'el a-nhô kê bi-ê-nê', vi: 'năm sau', ex: 'El año que viene estudiaré en España.', exVi: 'Năm sau tôi sẽ học ở Tây Ban Nha.' },
          { w: 'pronto', ipa: 'prôn-tô', vi: 'sớm, chẳng bao lâu nữa', ex: '¡Hasta pronto!', exVi: 'Hẹn sớm gặp lại!' }
        ],
        grammar: {
          title: 'Ir a + nguyên mẫu; thì tương lai đơn (futuro simple)',
          explain: [
            'Ir a + động từ nguyên mẫu diễn tả dự định, kế hoạch đã quyết định, hoặc việc sắp xảy ra: Voy a viajar a España (Tôi định / sắp đi Tây Ban Nha). Chỉ cần chia ir: voy, vas, va, vamos, vais, van — và đừng quên chữ a.',
            'Futuro simple (tương lai đơn) được tạo bằng cách thêm đuôi vào NGUYÊN MẪU, không bỏ -ar / -er / -ir: -é, -ás, -á, -emos, -éis, -án. Cả ba nhóm động từ dùng chung một bộ đuôi: viajaré, comeré, viviré.',
            'Futuro thường dùng để dự đoán, hứa hẹn hoặc nói về tương lai xa hơn, ít chắc chắn hơn: Mañana hará calor (Mai trời sẽ nóng). Te llamaré (Mình sẽ gọi cho bạn).',
            'Một số động từ bất quy tắc đổi gốc nhưng giữ nguyên đuôi: tener → tendré, hacer → haré, salir → saldré, poder → podré, venir → vendré, decir → diré.'
          ],
          table: [
            ['Chủ ngữ', 'ir a + nguyên mẫu', 'Futuro (viajar)', 'Futuro (tener)'],
            ['yo', 'voy a viajar', 'viajaré', 'tendré'],
            ['tú', 'vas a viajar', 'viajarás', 'tendrás'],
            ['él / ella / usted', 'va a viajar', 'viajará', 'tendrá'],
            ['nosotros', 'vamos a viajar', 'viajaremos', 'tendremos'],
            ['vosotros', 'vais a viajar', 'viajaréis', 'tendréis'],
            ['ellos / ustedes', 'van a viajar', 'viajarán', 'tendrán']
          ],
          examples: [
            { t: 'Voy a reservar un hotel en Barcelona.', vi: 'Tôi định đặt một khách sạn ở Barcelona.' },
            { t: '¿Qué vas a hacer este verano?', vi: 'Hè này bạn định làm gì?' },
            { t: 'La próxima semana vamos a visitar a nuestros abuelos.', vi: 'Tuần sau chúng tôi sẽ đi thăm ông bà.' },
            { t: 'El año que viene estudiaré en España.', vi: 'Năm sau tôi sẽ học ở Tây Ban Nha.' },
            { t: 'Mañana hará calor.', vi: 'Ngày mai trời sẽ nóng.' }
          ],
          tip: 'Lỗi hay gặp: "Voy viajar" ✗ → "Voy a viajar" ✓. Futuro có dấu ở mọi ngôi trừ nosotros: viajaré, viajarás, viajará, viajaremos, viajaréis, viajarán.'
        },
        dialogue: [
          { s: 'Andrea', t: '¿Qué vas a hacer en las vacaciones de verano?', vi: 'Kỳ nghỉ hè này bạn định làm gì?' },
          { s: 'Quang', t: 'Voy a viajar a España con mi hermano. Ya tenemos los billetes.', vi: 'Mình định đi Tây Ban Nha với anh trai. Bọn mình có vé rồi.' },
          { s: 'Andrea', t: '¡Qué bien! ¿Adónde vais a ir?', vi: 'Hay quá! Các bạn định đi đâu?' },
          { s: 'Quang', t: 'Primero vamos a visitar Madrid y después iremos a Barcelona.', vi: 'Đầu tiên bọn mình sẽ thăm Madrid, sau đó sẽ đi Barcelona.' },
          { s: 'Andrea', t: '¿Y vais a reservar un hotel?', vi: 'Thế các bạn có đặt khách sạn không?' },
          { s: 'Quang', t: 'Sí, voy a reservar uno esta noche. ¿Y tú?', vi: 'Có, tối nay mình sẽ đặt. Còn bạn?' },
          { s: 'Andrea', t: 'Yo trabajaré en julio, pero en agosto descansaré en la playa.', vi: 'Mình sẽ làm việc vào tháng Bảy, nhưng tháng Tám mình sẽ nghỉ ngơi ở biển.' },
          { s: 'Quang', t: '¡Te mandaré fotos de España! ¡Hasta pronto!', vi: 'Mình sẽ gửi ảnh Tây Ban Nha cho bạn! Hẹn sớm gặp lại!' }
        ],
        exercises: [
          { type: 'mc', q: 'Mañana (yo) ___ a visitar a mis abuelos.', options: ['voy', 'vamos', 'van'], answer: 0, explain: 'Yo + ir → voy a + nguyên mẫu.' },
          { type: 'fill', q: 'Nosotros ___ a viajar a España.', answer: ['vamos'], hint: 'ir', explain: 'Nosotros → vamos a viajar.' },
          { type: 'mc', q: 'Chọn câu đúng:', options: ['Voy viajar a México.', 'Voy a viajar a México.', 'Voy a viajo a México.'], answer: 1, explain: 'Cấu trúc: ir + a + động từ nguyên mẫu.' },
          { type: 'fill', q: 'El año que viene yo ___ en Madrid.', answer: ['viviré'], hint: 'vivir, futuro', explain: 'Nguyên mẫu + -é: viviré.' },
          { type: 'order', vi: 'Hè này bạn định làm gì?', words: ['verano?', 'a', '¿Qué', 'este', 'vas', 'hacer'], answer: '¿Qué vas a hacer este verano?' },
          { type: 'mc', q: 'Futuro của "tener" ở ngôi yo là:', options: ['teneré', 'tendré', 'tuve'], answer: 1, explain: 'Tener bất quy tắc: tendré. (tuve là quá khứ.)' },
          { type: 'fill', q: 'En Valencia ellos ___ paella.', answer: ['comerán'], hint: 'comer, futuro', explain: 'Nguyên mẫu + -án: comerán.' },
          { type: 'order', vi: 'Tuần sau tôi sẽ đặt vé.', words: ['billetes', 'voy', 'La', 'reservar', 'semana', 'los', 'próxima', 'a'], answer: 'La próxima semana voy a reservar los billetes' }
        ]
      }
    ]
  }
]);
