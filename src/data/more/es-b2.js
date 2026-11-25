// Bài mới chèn vào lộ trình tiếng Tây Ban Nha – cấp B2: b2-1b, b2-2b, b2-3b, b2-4b, b2-5b
export default [
  // ───────────────────────── B2-1b ─────────────────────────
  {
    after: 'es-b2-1',
    unit: {
      id: 'es-b2-1b',
      icon: '🎉',
      title: 'Chúc mừng, an ủi & nghi ngờ',
      goal: 'Chúc mừng, chia buồn, an ủi và bày tỏ nghi ngờ về những việc đã xảy ra bằng pretérito perfecto de subjuntivo.',
      vocab: [
        { w: 'felicitar', ipa: 'phê-li-θi-TAR', vi: 'chúc mừng', ex: 'Mis compañeros me han felicitado por el nuevo puesto.', exVi: 'Đồng nghiệp đã chúc mừng tôi vì vị trí mới.' },
        { w: 'la enhorabuena', ipa: 'la ê-nô-ra-BUÊ-na', vi: 'lời chúc mừng (¡Enhorabuena!: chúc mừng nhé!)', ex: '¡Enhorabuena! Me alegro de que hayas aprobado el examen.', exVi: 'Chúc mừng nhé! Mình mừng vì bạn đã thi đỗ.' },
        { w: 'el pésame', ipa: 'êl PÊ-xa-mê', vi: 'lời chia buồn (dar el pésame: chia buồn)', ex: 'Fuimos a su casa para darle el pésame.', exVi: 'Chúng tôi đến nhà anh ấy để chia buồn.' },
        { w: 'dar ánimos', ipa: 'đar A-ni-môs', vi: 'động viên', ex: 'Mi madre siempre me da ánimos antes de un examen.', exVi: 'Mẹ tôi luôn động viên tôi trước mỗi kỳ thi.' },
        { w: 'consolar', ipa: 'côn-xô-LAR', vi: 'an ủi', ex: 'Intenté consolarla, pero estaba muy triste.', exVi: 'Tôi đã cố an ủi cô ấy, nhưng cô ấy rất buồn.' },
        { w: 'lamentar', ipa: 'la-mên-TAR', vi: 'lấy làm tiếc (trang trọng)', ex: 'Lamentamos que no haya podido asistir a la reunión.', exVi: 'Chúng tôi rất tiếc vì ông/bà đã không thể tham dự cuộc họp.' },
        { w: 'el ascenso', ipa: 'êl as-θÊN-xô', vi: 'sự thăng chức', ex: 'Después de cinco años en la empresa, por fin ha conseguido un ascenso.', exVi: 'Sau năm năm ở công ty, cuối cùng anh ấy đã được thăng chức.' },
        { w: 'superar', ipa: 'xu-pê-RAR', vi: 'vượt qua', ex: 'Es increíble que hayas superado todos esos problemas tú solo.', exVi: 'Thật khó tin là một mình bạn đã vượt qua tất cả những khó khăn đó.' },
        { w: 'el fracaso', ipa: 'êl phra-CA-xô', vi: 'sự thất bại', ex: 'Un fracaso no es el final, es una lección.', exVi: 'Một lần thất bại không phải là dấu chấm hết, đó là một bài học.' },
        { w: 'la pérdida', ipa: 'la PÊR-đi-đa', vi: 'sự mất mát', ex: 'Siento mucho tu pérdida.', exVi: 'Mình rất tiếc về sự mất mát của bạn.' },
        { w: 'orgulloso / orgullosa', ipa: 'ôr-gu-GIÔ-xô / ôr-gu-GIÔ-xa', vi: 'tự hào', ex: 'Estoy muy orgullosa de ti, hija.', exVi: 'Mẹ rất tự hào về con, con gái ạ.' },
        { w: 'dudar', ipa: 'đu-ĐAR', vi: 'nghi ngờ, không tin là', ex: 'Dudo que Marcos haya leído mi mensaje.', exVi: 'Tôi không chắc là Marcos đã đọc tin nhắn của tôi.' },
        { w: 'brindar', ipa: 'brin-ĐAR', vi: 'nâng ly chúc mừng', ex: '¡Brindemos por tu nuevo puesto! Me alegro mucho de que te lo hayan dado.', exVi: 'Cùng nâng ly mừng vị trí mới của bạn nào! Mình rất mừng vì bạn đã được nhận.' },
        { w: 'el apoyo', ipa: 'êl a-PÔ-giô', vi: 'sự ủng hộ, giúp đỡ', ex: 'Tu apoyo ha sido muy importante para mí.', exVi: 'Sự ủng hộ của bạn rất quan trọng với mình.' },
        { w: 'merecer', ipa: 'mê-rê-θÊR', vi: 'xứng đáng (merecerse algo: xứng đáng với điều gì)', ex: '¡Te lo mereces! Has trabajado muchísimo.', exVi: 'Bạn xứng đáng mà! Bạn đã làm việc rất chăm chỉ.' },
        { w: 'el esfuerzo', ipa: 'êl ês-PHUÊR-θô', vi: 'sự nỗ lực', ex: 'Me alegro de que tu esfuerzo haya tenido resultados.', exVi: 'Mình mừng vì nỗ lực của bạn đã có kết quả.' },
        { w: 'recuperarse', ipa: 'rrê-cu-pê-RAR-xê', vi: 'hồi phục, bình phục', ex: 'Espero que te hayas recuperado del todo.', exVi: 'Mong là bạn đã bình phục hoàn toàn.' },
        { w: 'fallecer', ipa: 'pha-giê-θÊR', vi: 'qua đời', ex: 'Su abuela falleció el mes pasado.', exVi: 'Bà của anh ấy qua đời tháng trước.' },
        { w: '¡Qué pena!', ipa: 'kê PÊ-na', vi: 'tiếc thật!', ex: '¡Qué pena que no hayas podido venir!', exVi: 'Tiếc thật là bạn đã không đến được!' },
        { w: 'sorprender', ipa: 'xôr-prên-ĐÊR', vi: 'làm ngạc nhiên', ex: 'Me sorprende que todavía no te hayan llamado.', exVi: 'Tôi ngạc nhiên là họ vẫn chưa gọi cho bạn.' }
      ],
      grammar: {
        title: 'Pretérito perfecto de subjuntivo: me alegro de que hayas…, no creo que haya…',
        explain: [
          'Pretérito perfecto de subjuntivo = haber chia ở presente de subjuntivo (haya, hayas, haya, hayamos, hayáis, hayan) + participio. Participio không đổi: -ar → -ado (aprobado), -er/-ir → -ido (podido, venido); bất quy tắc: hecho, dicho, visto, escrito, puesto, vuelto, abierto, roto. (Đây chính là dạng "me alegro de que hayas tomado…" bạn đã gặp ở bài đọc của bài trước.)',
          'Dùng sau đúng những cụm đòi subjuntivo mà bạn đã học (cảm xúc, mong muốn, ojalá, nghi ngờ), nhưng khi hành động trong mệnh đề phụ ĐÃ XẢY RA (thường tương ứng với pretérito perfecto: has aprobado → me alegro de que hayas aprobado). Đây là thì để chúc mừng, chia buồn, an ủi: Me alegro de que hayas aprobado. Siento que no hayas podido venir. Espero que lo hayáis pasado bien.',
          'So sánh thời điểm: presente de subjuntivo nói về việc bây giờ hoặc sắp tới, perfecto de subjuntivo nói về việc đã xong. Espero que lo paséis bien (trước chuyến đi) ↔ Espero que lo hayáis pasado bien (sau chuyến đi). Ojalá llegue bien (anh ấy chưa đến nơi) ↔ Ojalá haya llegado bien (có lẽ đã đến rồi, nhưng mình chưa biết).',
          'Nghi ngờ và khả năng: No creo que / Dudo que / Es posible que + subjuntivo. Với việc đã xảy ra: No creo que haya terminado. Dudo que lo haya leído. Es posible que se haya dormido. Nếu hai vế cùng chủ ngữ thì dùng haber + participio, không cần que: Siento no haber llamado (tôi tiếc vì tôi đã không gọi).',
          '🌎 Mỹ Latinh: dạng này dùng giống hệt; chỉ cần thay vosotros bằng ustedes: Espero que lo hayan pasado bien.'
        ],
        table: [
          ['Ngôi', 'Haber + participio', 'Ví dụ'],
          ['yo', 'haya terminado', 'Mi jefe no cree que yo haya terminado.'],
          ['tú', 'hayas aprobado', 'Me alegro de que hayas aprobado.'],
          ['él / ella / usted', 'haya llegado', 'Ojalá haya llegado bien.'],
          ['nosotros / nosotras', 'hayamos ganado', 'No creen que hayamos ganado.'],
          ['vosotros / vosotras', 'hayáis pasado', 'Espero que lo hayáis pasado bien.'],
          ['ellos / ellas / ustedes', 'hayan podido', 'Siento que no hayan podido venir.']
        ],
        examples: [
          { t: 'Me alegro mucho de que hayas conseguido el ascenso.', vi: 'Mình rất mừng vì bạn đã được thăng chức.' },
          { t: 'Siento que no hayas podido venir a la boda.', vi: 'Mình tiếc là bạn đã không đến dự đám cưới được.' },
          { t: 'Espero que lo hayáis pasado bien en Granada.', vi: 'Mong là các bạn đã chơi vui ở Granada.' },
          { t: 'No creo que Juan haya terminado el informe todavía.', vi: 'Tôi không nghĩ là Juan đã làm xong bản báo cáo.' },
          { t: 'Es posible que se haya dormido; no contesta al teléfono.', vi: 'Có thể là anh ấy đã ngủ quên; anh ấy không nghe máy.' }
        ],
        tip: 'Người Việt hay giữ thì chỉ định sau cụm cảm xúc: sai "Me alegro de que has aprobado", đúng "Me alegro de que hayas aprobado". Hãy tự hỏi "việc đó đã xong chưa?": đã xong → haya + participio; bây giờ/sắp tới → presente de subjuntivo. Cùng chủ ngữ thì dùng nguyên mẫu: "Siento no haber ido" (không nói "Siento que yo no haya ido").'
      },
      dialogue: [
        { s: 'Elena', t: '¡Javi! Me han dicho que te han dado el ascenso. ¡Enhorabuena!', vi: 'Javi! Người ta bảo mình là cậu được thăng chức rồi. Chúc mừng nhé!' },
        { s: 'Javi', t: 'Gracias, Elena. Todavía no me lo creo, después de tanto esfuerzo…', vi: 'Cảm ơn Elena. Mình vẫn chưa tin nổi, sau bao nhiêu nỗ lực…' },
        { s: 'Elena', t: 'Te lo mereces. Me alegro muchísimo de que por fin hayan valorado tu trabajo.', vi: 'Cậu xứng đáng mà. Mình mừng lắm vì cuối cùng họ đã ghi nhận công sức của cậu.' },
        { s: 'Javi', t: '¿Y tú? ¿Qué tal el examen de conducir?', vi: 'Còn cậu? Thi bằng lái thế nào rồi?' },
        { s: 'Elena', t: 'Fatal. He suspendido otra vez.', vi: 'Tệ lắm. Mình lại trượt rồi.' },
        { s: 'Javi', t: '¡Qué pena! Siento mucho que no hayas aprobado, pero un fracaso no es el final.', vi: 'Tiếc thật! Mình rất tiếc là cậu chưa đỗ, nhưng một lần thất bại đâu phải là hết.' },
        { s: 'Elena', t: 'Ya… Lo peor es que mi profesor no cree que yo haya practicado bastante.', vi: 'Ừ… Tệ nhất là thầy dạy lái không tin là mình đã luyện tập đủ.' },
        { s: 'Javi', t: 'Pues yo dudo que alguien haya practicado más que tú. La próxima vez seguro que lo superas.', vi: 'Mình thì không tin là có ai đã luyện tập nhiều hơn cậu. Lần sau chắc chắn cậu sẽ vượt qua.' },
        { s: 'Elena', t: 'Gracias por darme ánimos. Oye, ¿celebramos tu ascenso el sábado?', vi: 'Cảm ơn cậu đã động viên mình. Này, thứ Bảy mình ăn mừng việc cậu thăng chức nhé?' },
        { s: 'Javi', t: '¡Claro! Invito yo.', vi: 'Tất nhiên rồi! Mình mời.' }
      ],
      exercises: [
        { type: 'mc', q: 'Me alegro de que ___ el examen. (bạn đã thi đỗ)', options: ['has aprobado', 'apruebas', 'aprobar', 'hayas aprobado'], answer: 3,
          explain: 'Cảm xúc (me alegro de que) + chủ ngữ khác + việc đã xảy ra → pretérito perfecto de subjuntivo: hayas aprobado.' },
        { type: 'fill', q: 'Dudo que Pablo me ___ la verdad. (decir)', answer: ['haya dicho'], hint: 'perfecto de subjuntivo; participio bất quy tắc',
          explain: 'Dudo que + subjuntivo; việc đã xảy ra → haya + participio. Decir → dicho: haya dicho.' },
        { type: 'order', vi: 'Mình mừng vì bạn đã được thăng chức.', words: ['ascenso', 'que', 'hayan', 'Me', 'el', 'de', 'dado', 'alegro', 'te'],
          answer: 'Me alegro de que te hayan dado el ascenso' },
        { type: 'mc', q: 'Espero que lo ___ bien en la fiesta de anoche.', options: ['paséis', 'habéis pasado', 'hayáis pasado', 'pasáis'], answer: 2,
          explain: 'Buổi tiệc tối qua đã kết thúc → hayáis pasado. "Paséis" chỉ dùng trước khi sự kiện diễn ra; "habéis pasado" là thì chỉ định, không dùng sau espero que.' },
        { type: 'fill', q: 'Ojalá ___ bien. Salieron de Madrid hace tres horas. (ellos, llegar)', answer: ['hayan llegado'], hint: 'ojalá + perfecto de subjuntivo, ngôi ellos',
          explain: 'Có lẽ họ đã đến nơi nhưng mình chưa biết → Ojalá hayan llegado bien.' },
        { type: 'mc', q: 'Juan no contesta. Es posible que ___ el móvil en casa.', options: ['se haya dejado', 'se ha dejado', 'se deja', 'dejarse'], answer: 0,
          explain: 'Es posible que + subjuntivo; việc (có thể) đã xảy ra → se haya dejado.' },
        { type: 'order', vi: 'Tôi không nghĩ là anh ấy đã làm xong việc.', words: ['terminado', 'creo', 'el', 'No', 'haya', 'que', 'trabajo'],
          answer: 'No creo que haya terminado el trabajo' },
        { type: 'fill', q: 'Es increíble que ___ el maratón con ochenta años. (él, terminar)', answer: ['haya terminado'], hint: 'perfecto de subjuntivo, ngôi él',
          explain: 'Es increíble que + subjuntivo; việc đã xong → haya terminado.' },
        { type: 'mc', q: 'Mi abuelo falleció ayer. — Lo siento mucho. Te doy el ___.', options: ['ascenso', 'esfuerzo', 'fracaso', 'pésame'], answer: 3,
          explain: 'Dar el pésame = chia buồn với người có người thân qua đời.' },
        { type: 'order', vi: 'Mong là các bạn đã chơi vui ở Sevilla.', words: ['bien', 'Espero', 'hayáis', 'lo', 'en', 'que', 'pasado', 'Sevilla'],
          answer: 'Espero que lo hayáis pasado bien en Sevilla', alt: ['Espero que en Sevilla lo hayáis pasado bien'] },
        { type: 'mc', q: 'Câu nào đúng khi nói SAU buổi tiệc?', options: ['Siento que no puedas venir a la fiesta.', 'Siento que no hayas podido venir a la fiesta.', 'Siento que no has podido venir a la fiesta.'], answer: 1,
          explain: 'Buổi tiệc đã qua → perfecto de subjuntivo: hayas podido. "Puedas" dùng trước buổi tiệc; "has podido" là thì chỉ định, sai sau siento que.' },
        { type: 'fill', q: 'Gracias por tu ___ en estos meses tan difíciles.', answer: ['apoyo'], hint: 'sự ủng hộ, giúp đỡ',
          explain: 'El apoyo = sự ủng hộ, giúp đỡ.' },
        { type: 'order', vi: 'Có thể là cô ấy đã bắt một chuyến tàu khác.', words: ['otro', 'Es', 'cogido', 'haya', 'que', 'tren', 'posible'],
          answer: 'Es posible que haya cogido otro tren' },
        { type: 'mc', q: 'Ana ha conseguido el ascenso después de años de esfuerzo. Sus padres están muy ___.', options: ['orgullosas', 'orgulloso', 'orgullosos'], answer: 2,
          explain: 'Sus padres là giống đực số nhiều → orgullosos.' },
        { type: 'fill', q: 'Siento no ___ a tu boda. (yo, ir)', answer: ['haber ido'], hint: 'cùng chủ ngữ → haber + participio',
          explain: 'Người tiếc và người không đi là một (yo) → dùng nguyên mẫu ghép: Siento no haber ido.' },
        { type: 'order', vi: 'Bố mẹ tôi tự hào vì tôi đã học xong.', words: ['orgullosos', 'terminado', 'Mis', 'los', 'están', 'haya', 'padres', 'de', 'que', 'estudios', 'yo'],
          answer: 'Mis padres están orgullosos de que yo haya terminado los estudios' }
      ],
      reading: {
        title: 'Una semana de mensajes',
        titleVi: 'Một tuần toàn tin nhắn',
        text: [
          'Esta semana he escrito más mensajes que nunca. El lunes, mi hermana Clara consiguió por fin el ascenso que esperaba desde hacía dos años. Toda la familia la llamó para felicitarla. Mi padre, que normalmente habla poco, le dijo: "Estoy muy orgulloso de que hayas seguido adelante cuando las cosas iban mal". Y es verdad: Clara se lo merece, porque ha trabajado muchísimo y nunca ha dejado de estudiar.',
          'El miércoles, en cambio, llegó una mala noticia: el abuelo de mi mejor amigo, Rubén, falleció después de una larga enfermedad. No supe qué decir. Al final le escribí: "Siento mucho tu pérdida. Ojalá tu abuelo no haya sufrido en sus últimos días". Rubén me contestó con un mensaje muy corto. Creo que en estos momentos lo más importante no son las palabras, sino estar cerca, así que el sábado iré a su casa para darle el pésame en persona.',
          'Lo más raro de la semana fue lo de Sergio, un compañero de clase. Ayer tenía el examen final de alemán y desde entonces no sabemos nada de él. No creo que haya suspendido, porque es el mejor de la clase, pero me sorprende que no haya escrito nada en el grupo. Es posible que se haya quedado sin batería o que simplemente esté durmiendo. Espero que nos llame pronto, porque todos queremos darle ánimos.',
          'Al final, he aprendido algo: un mensaje corto, escrito en el momento adecuado, puede consolar más que un discurso largo.'
        ],
        vi: [
          'Tuần này tôi đã viết nhiều tin nhắn hơn bao giờ hết. Thứ Hai, chị Clara của tôi cuối cùng cũng được thăng chức, điều chị đã chờ suốt hai năm. Cả nhà gọi điện chúc mừng chị. Bố tôi, người bình thường ít nói, bảo chị: "Bố rất tự hào vì con đã tiếp tục cố gắng khi mọi chuyện không suôn sẻ". Mà đúng thế thật: Clara xứng đáng với điều đó, vì chị đã làm việc rất chăm chỉ và chưa bao giờ ngừng học hỏi.',
          'Ngược lại, thứ Tư có một tin buồn: ông của Rubén, bạn thân nhất của tôi, qua đời sau một thời gian dài bệnh tật. Tôi không biết phải nói gì. Cuối cùng tôi viết cho cậu ấy: "Mình rất tiếc về sự mất mát của cậu. Mong là ông cậu đã không phải chịu đau đớn trong những ngày cuối". Rubén trả lời tôi bằng một tin nhắn rất ngắn. Tôi nghĩ vào những lúc như thế này, điều quan trọng nhất không phải là lời nói mà là ở bên cạnh, nên thứ Bảy tôi sẽ đến nhà cậu ấy để chia buồn trực tiếp.',
          'Chuyện lạ nhất tuần là chuyện của Sergio, một bạn cùng lớp. Hôm qua cậu ấy thi cuối kỳ môn tiếng Đức và từ đó đến giờ chúng tôi không có tin gì của cậu ấy. Tôi không nghĩ là cậu ấy đã trượt, vì cậu ấy giỏi nhất lớp, nhưng tôi ngạc nhiên là cậu ấy chưa viết gì vào nhóm. Có thể là điện thoại của cậu ấy đã hết pin, hoặc đơn giản là cậu ấy đang ngủ. Tôi mong cậu ấy sớm gọi cho chúng tôi, vì ai cũng muốn động viên cậu ấy.',
          'Cuối cùng, tôi đã học được một điều: một tin nhắn ngắn, viết đúng lúc, có thể an ủi người khác nhiều hơn một bài diễn văn dài.'
        ],
        questions: [
          { q: 'Vì sao bố của người viết nói "Estoy muy orgulloso"?', options: ['Vì Clara vừa tốt nghiệp đại học', 'Vì Clara sắp kết hôn', 'Vì Clara đã được thăng chức sau nhiều cố gắng', 'Vì Clara đã thi đỗ tiếng Đức'], answer: 2,
            explain: 'Mi hermana Clara consiguió por fin el ascenso… "Estoy muy orgulloso de que hayas seguido adelante".' },
          { q: 'Người viết làm gì khi ông của Rubén qua đời?', options: ['Nhắn tin chia buồn và định đến nhà Rubén vào thứ Bảy', 'Gọi điện cho Rubén suốt cả ngày', 'Không làm gì vì không biết nói gì', 'Tổ chức một bữa tiệc để an ủi Rubén'], answer: 0,
            explain: 'Le escribí: "Siento mucho tu pérdida"… el sábado iré a su casa para darle el pésame en persona.' },
          { q: 'Vì sao người viết không nghĩ là Sergio đã thi trượt?', options: ['Vì Sergio đã nhắn tin vào nhóm', 'Vì kỳ thi rất dễ', 'Vì giáo viên đã báo kết quả', 'Vì Sergio là người giỏi nhất lớp'], answer: 3,
            explain: 'No creo que haya suspendido, porque es el mejor de la clase.' },
          { q: 'Người viết rút ra bài học gì?', options: ['Nên viết những tin nhắn thật dài', 'Một tin nhắn ngắn đúng lúc có thể an ủi hơn một bài diễn văn dài', 'Không nên dùng điện thoại khi buồn', 'Gặp trực tiếp luôn tốt hơn nhắn tin'], answer: 1,
            explain: 'Un mensaje corto, escrito en el momento adecuado, puede consolar más que un discurso largo.' }
        ]
      }
    }
  },
  // ───────────────────────── B2-2b ─────────────────────────
  {
    after: 'es-b2-2',
    unit: {
      id: 'es-b2-2b',
      icon: '😔',
      title: 'Tiếc nuối',
      goal: 'Nói về những điều đáng tiếc trong quá khứ và hệ quả của chúng bằng si + pluscuamperfecto de subjuntivo, condicional compuesto và ojalá hubiera…',
      vocab: [
        { w: 'arrepentirse de', ipa: 'a-rrê-pên-TIR-xê đê', vi: 'hối hận về', ex: 'Me arrepiento de no haber estudiado más en el instituto.', exVi: 'Tôi hối hận vì hồi cấp ba đã không học chăm hơn.' },
        { w: 'la culpa', ipa: 'la CUL-pa', vi: 'lỗi, trách nhiệm (tener la culpa: có lỗi)', ex: 'Yo tengo la culpa: si hubiera mirado el mapa, no nos habríamos perdido.', exVi: 'Lỗi là ở tôi: nếu tôi đã xem bản đồ thì chúng ta đã không bị lạc.' },
        { w: 'el remordimiento', ipa: 'êl rrê-môr-đi-mi-ÊN-tô', vi: 'sự day dứt, cắn rứt lương tâm', ex: 'Tengo remordimientos por no haber visitado más a mi abuela.', exVi: 'Tôi day dứt vì đã không đến thăm bà nhiều hơn.' },
        { w: 'rechazar', ipa: 'rrê-cha-θAR', vi: 'từ chối, khước từ', ex: 'Rechazó la invitación porque estaba muy cansado.', exVi: 'Anh ấy từ chối lời mời vì quá mệt.' },
        { w: 'aprovechar', ipa: 'a-prô-bê-CHAR', vi: 'tận dụng', ex: 'Aprovecha el tiempo mientras eres joven.', exVi: 'Hãy tận dụng thời gian khi bạn còn trẻ.' },
        { w: 'la oferta de trabajo', ipa: 'la ô-PHÊR-ta đê tra-BA-khô', vi: 'lời mời làm việc', ex: 'Si hubiera aceptado aquella oferta de trabajo, ahora viviría en Londres.', exVi: 'Nếu hồi đó tôi nhận lời mời làm việc ấy thì giờ tôi đang sống ở London.' },
        { w: 'la elección', ipa: 'la ê-lêc-θi-ÔN', vi: 'sự lựa chọn', ex: 'Estudiar Medicina fue la mejor elección de mi vida.', exVi: 'Học ngành Y là lựa chọn đúng đắn nhất đời tôi.' },
        { w: 'equivocarse', ipa: 'ê-ki-bô-CAR-xê', vi: 'nhầm, mắc sai lầm', ex: 'Si no me hubiera equivocado de autobús, habría llegado a tiempo.', exVi: 'Nếu tôi không đi nhầm xe buýt thì đã đến kịp giờ.' },
        { w: 'a estas alturas', ipa: 'a ÊS-tas al-TU-ras', vi: 'đến nước này, giờ này rồi', ex: 'A estas alturas ya es tarde para cambiar de carrera.', exVi: 'Đến giờ này thì đổi ngành đã muộn rồi.' },
        { w: 'el error', ipa: 'êl ê-RRÔR', vi: 'sai lầm, lỗi lầm', ex: 'Dejar los estudios fue el mayor error de mi vida.', exVi: 'Bỏ học là sai lầm lớn nhất đời tôi.' },
        { w: 'añorar', ipa: 'a-nhô-RAR', vi: 'nhớ nhung, hoài niệm', ex: 'Si me hubiera quedado en Vietnam, ahora no añoraría tanto a mi familia.', exVi: 'Nếu hồi đó tôi ở lại Việt Nam thì giờ tôi đã không nhớ gia đình đến thế.' },
        { w: 'el rumbo', ipa: 'êl RRUM-bô', vi: 'hướng đi (trong đời)', ex: 'Si no hubiera conocido a aquel profesor, mi vida habría tomado otro rumbo.', exVi: 'Nếu không gặp người thầy ấy thì đời tôi đã rẽ sang hướng khác.' },
        { w: 'volver atrás', ipa: 'bôl-BÊR a-TRAS', vi: 'quay ngược thời gian, làm lại', ex: 'Si pudiera volver atrás, no cometería el mismo error.', exVi: 'Nếu có thể quay ngược thời gian, tôi sẽ không mắc lại sai lầm ấy.' },
        { w: 'pedir perdón', ipa: 'pê-ĐIR pêr-ĐÔN', vi: 'xin lỗi, xin tha thứ', ex: 'Si me hubiera pedido perdón, le habría perdonado.', exVi: 'Nếu anh ấy xin lỗi tôi thì tôi đã tha thứ cho anh ấy rồi.' },
        { w: 'perdonar', ipa: 'pêr-đô-NAR', vi: 'tha thứ', ex: 'Perdóname, no quería hacerte daño.', exVi: 'Tha lỗi cho mình nhé, mình không cố ý làm bạn tổn thương.' },
        { w: 'el pasado', ipa: 'êl pa-XA-đô', vi: 'quá khứ', ex: 'No podemos cambiar el pasado, pero sí podemos aprender de él.', exVi: 'Chúng ta không thể thay đổi quá khứ, nhưng có thể học từ nó.' },
        { w: 'de haberlo sabido', ipa: 'đê a-BÊR-lô xa-BI-đô', vi: 'nếu biết trước (thì…)', ex: 'De haberlo sabido, habría traído el paraguas.', exVi: 'Nếu biết trước thì tôi đã mang ô theo.' },
        { w: 'la nostalgia', ipa: 'la nôs-TAL-khi-a', vi: 'nỗi nhớ quê, sự hoài niệm', ex: 'Siento nostalgia de los años que pasé en Salamanca.', exVi: 'Tôi hoài niệm những năm tháng sống ở Salamanca.' },
        { w: 'elegir', ipa: 'ê-lê-KHIR', vi: 'chọn', ex: 'Si pudiera volver atrás, elegiría el mismo camino.', exVi: 'Nếu có thể quay lại, tôi vẫn sẽ chọn con đường như vậy.' },
        { w: 'la vocación', ipa: 'la bô-ca-θi-ÔN', vi: 'thiên hướng, đam mê nghề nghiệp', ex: 'Si hubiera seguido mi vocación, ahora sería músico.', exVi: 'Nếu theo đuổi đam mê của mình thì giờ tôi đã là nhạc sĩ.' }
      ],
      grammar: {
        title: 'Tiếc nuối: si + pluscuamperfecto de subjuntivo, condicional compuesto',
        explain: [
          'Pluscuamperfecto de subjuntivo = hubiera, hubieras, hubiera, hubiéramos, hubierais, hubieran (hoặc dạng -se: hubiese, hubieses…) + participio. Nó nói về một việc giả định trái với quá khứ, tức là thực tế ĐÃ KHÔNG xảy ra: si hubiera estudiado = nếu (hồi đó) tôi đã học (nhưng thực tế tôi không học).',
          'Condicional compuesto = habría, habrías, habría, habríamos, habríais, habrían + participio, nghĩa là "(lẽ ra) đã…": kết quả trong quá khứ đã không xảy ra. Câu điều kiện loại 3: Si + pluscuamperfecto de subjuntivo, condicional compuesto. Si hubiera estudiado más, habría aprobado (tôi đã không học nhiều → tôi đã trượt). Trong văn nói, vế chính cũng hay dùng hubiera thay habría: Si lo hubiera sabido, te hubiera llamado.',
          'Câu hỗn hợp: điều kiện ở quá khứ nhưng hệ quả ở hiện tại → vế chính dùng condicional simple: Si hubiera aceptado aquel trabajo, ahora viviría en Madrid. Si no hubiera conocido a Laura, ahora estaría solo.',
          'Ojalá + pluscuamperfecto de subjuntivo = "giá mà đã…" (tiếc một việc quá khứ không thể thay đổi): Ojalá hubiera ido a la fiesta. Cách nói ngắn: de + haber + participio = si + pluscuamperfecto: De haberlo sabido, te habría llamado (= Si lo hubiera sabido…). Còn nếu hối hận về chính mình, dùng arrepentirse de + haber + participio: Me arrepiento de no haber estudiado.'
        ],
        table: [
          ['Loại câu', 'Vế "si"', 'Vế chính', 'Ví dụ'],
          ['Có thể xảy ra', 'si + presente', 'presente / futuro / mệnh lệnh', 'Si estudias, aprobarás.'],
          ['Giả định hiện tại', 'si + imperfecto de subjuntivo', 'condicional simple', 'Si estudiaras, aprobarías.'],
          ['Trái với quá khứ', 'si + pluscuamperfecto de subjuntivo', 'condicional compuesto', 'Si hubieras estudiado, habrías aprobado.'],
          ['Hỗn hợp (quá khứ → hiện tại)', 'si + pluscuamperfecto de subjuntivo', 'condicional simple', 'Si hubieras estudiado, ahora tendrías un buen trabajo.']
        ],
        examples: [
          { t: 'Si hubiera estudiado más, habría aprobado el examen.', vi: 'Nếu tôi đã học nhiều hơn thì tôi đã thi đỗ.' },
          { t: 'Si hubiera aceptado aquel trabajo, ahora viviría en Madrid.', vi: 'Nếu hồi đó tôi nhận công việc ấy thì giờ tôi đang sống ở Madrid.' },
          { t: 'Ojalá hubiera aprovechado más mis años en la universidad.', vi: 'Giá mà tôi đã tận dụng những năm đại học tốt hơn.' },
          { t: 'De haberlo sabido, te habría llamado antes.', vi: 'Nếu biết trước thì tôi đã gọi cho bạn sớm hơn.' },
          { t: 'Si no te hubieras equivocado de calle, habríamos llegado a tiempo.', vi: 'Nếu bạn không đi nhầm đường thì chúng ta đã đến kịp giờ.' }
        ],
        tip: 'Không dùng condicional sau "si": sai "Si habría sabido…", đúng "Si lo hubiera sabido…". Nhớ rằng câu loại 3 nói về điều ĐÃ KHÔNG xảy ra, nên đừng dịch "Si hubiera estudiado" thành "nếu tôi học" chung chung — đó là "nếu hồi đó tôi đã học". Participio luôn giữ nguyên: hubiera ido, habría hecho (không nói "hubiera iba").'
      },
      dialogue: [
        { s: 'Sofía', t: 'Daniel, ¿qué te pasa? Hoy estás muy callado.', vi: 'Daniel, cậu sao thế? Hôm nay cậu im lặng quá.' },
        { s: 'Daniel', t: 'Nada… He visto una foto de mi antiguo compañero en Barcelona. Trabaja en la empresa que me ofreció un puesto hace dos años.', vi: 'Không có gì… Mình vừa thấy ảnh của đồng nghiệp cũ ở Barcelona. Cậu ấy làm ở công ty đã mời mình làm việc hai năm trước.' },
        { s: 'Sofía', t: '¿La oferta de trabajo que rechazaste?', vi: 'Cái lời mời làm việc mà cậu đã từ chối ấy à?' },
        { s: 'Daniel', t: 'Esa. Si la hubiera aceptado, ahora tendría un sueldo mucho mejor. A veces me arrepiento.', vi: 'Đúng nó. Nếu hồi đó mình nhận lời thì giờ mình đã có mức lương tốt hơn nhiều. Đôi khi mình thấy hối hận.' },
        { s: 'Sofía', t: 'Ya, pero si te hubieras ido, no habrías conocido a Laura.', vi: 'Ừ, nhưng nếu cậu đi thì cậu đã không quen Laura.' },
        { s: 'Daniel', t: 'Es verdad… Y seguramente habría echado mucho de menos a mi familia.', vi: 'Đúng thật… Và chắc là mình đã nhớ gia đình lắm.' },
        { s: 'Sofía', t: 'Pues ya está. A estas alturas no vale la pena pensar en eso. Fue una buena elección.', vi: 'Thế thì xong rồi. Đến giờ này thì nghĩ đến chuyện đó cũng chẳng ích gì. Đó là một lựa chọn đúng.' },
        { s: 'Daniel', t: 'Tienes razón. Ojalá hubiera hablado contigo antes; me habría ahorrado muchas noches sin dormir.', vi: 'Cậu nói đúng. Giá mà mình nói chuyện với cậu sớm hơn; mình đã đỡ được bao nhiêu đêm mất ngủ.' },
        { s: 'Sofía', t: '¡Para eso están las amigas!', vi: 'Bạn bè là để những lúc thế này mà!' }
      ],
      exercises: [
        { type: 'mc', q: 'Si ___ más, habría aprobado el examen.', options: ['he estudiado', 'habría estudiado', 'estudio', 'hubiera estudiado'], answer: 3,
          explain: 'Trái với quá khứ: si + pluscuamperfecto de subjuntivo → hubiera estudiado. Không dùng condicional (habría) sau si.' },
        { type: 'fill', q: 'Si me ___ la verdad desde el principio, no habría pasado nada. (tú, decir)', answer: ['hubieras dicho', 'hubieses dicho'], hint: 'pluscuamperfecto de subjuntivo, ngôi tú',
          explain: 'Vế si của câu loại 3: hubieras (hubieses) + participio; decir → dicho.' },
        { type: 'order', vi: 'Nếu tôi đã học nhiều hơn thì tôi đã thi đỗ.', words: ['aprobado', 'más,', 'hubiera', 'Si', 'habría', 'estudiado'],
          answer: 'Si hubiera estudiado más, habría aprobado', alt: ['habría aprobado Si hubiera estudiado más,'] },
        { type: 'mc', q: 'Si me lo hubieras dicho ayer, te ___.', options: ['ayudo', 'ayudé', 'habría ayudado', 'habrías ayudar'], answer: 2,
          explain: 'Vế chính của câu loại 3 dùng condicional compuesto: habría ayudado.' },
        { type: 'fill', q: 'Si hubieras salido antes, no ___ el tren. (tú, perder)', answer: ['habrías perdido', 'hubieras perdido', 'hubieses perdido'], hint: 'condicional compuesto, ngôi tú',
          explain: 'Kết quả không xảy ra trong quá khứ → habrías perdido (trong văn nói cũng dùng hubieras perdido).' },
        { type: 'mc', q: 'Si hubiera aceptado aquel trabajo, ahora ___ en Madrid.', options: ['viviría', 'habría vivido', 'vivo', 'viviera'], answer: 0,
          explain: 'Câu hỗn hợp: điều kiện quá khứ, hệ quả hiện tại (ahora) → condicional simple: viviría.' },
        { type: 'order', vi: 'Giá mà tôi đã nhận lời mời làm việc đó.', words: ['oferta', 'hubiera', 'trabajo', 'Ojalá', 'de', 'aquella', 'aceptado'],
          answer: 'Ojalá hubiera aceptado aquella oferta de trabajo' },
        { type: 'fill', q: 'Ojalá ___ a la fiesta. Dicen que fue increíble. (yo, ir)', answer: ['hubiera ido', 'hubiese ido'], hint: 'ojalá + pluscuamperfecto de subjuntivo',
          explain: 'Tiếc một việc quá khứ đã không làm → Ojalá hubiera (hubiese) ido.' },
        { type: 'mc', q: 'No te sientas mal: tú no tienes la ___ de lo que pasó.', options: ['elección', 'carrera', 'oferta', 'culpa'], answer: 3,
          explain: 'Tener la culpa (de algo) = có lỗi (về việc gì).' },
        { type: 'order', vi: 'Tôi hối hận vì đã không nói chuyện với cô ấy.', words: ['haber', 'arrepiento', 'con', 'Me', 'no', 'ella', 'de', 'hablado'],
          answer: 'Me arrepiento de no haber hablado con ella' },
        { type: 'mc', q: 'Câu nào đúng?', options: ['Si habría sabido, habría venido.', 'Si lo hubiera sabido, habría venido.', 'Si lo sabía, habría venido.', 'Si lo hubiera sabido, vendré.'], answer: 1,
          explain: 'Si + pluscuamperfecto de subjuntivo, condicional compuesto. Không dùng habría sau si; không ghép với futuro.' },
        { type: 'fill', q: 'Me ___ de no haber aprovechado más el tiempo. (arrepentirse, yo – presente)', answer: ['arrepiento'], hint: 'arrepentirse đổi gốc e > ie',
          explain: 'Arrepentirse là động từ đổi gốc e > ie: me arrepiento.' },
        { type: 'order', vi: 'Đến nước này thì chúng ta không thể thay đổi gì nữa rồi.', words: ['nada', 'estas', 'no', 'A', 'cambiar', 'alturas', 'podemos', 'ya'],
          answer: 'A estas alturas ya no podemos cambiar nada', alt: ['ya no podemos cambiar nada A estas alturas'] },
        { type: 'mc', q: '___ que no aceptaste aquel trabajo: la empresa cerró a los seis meses.', options: ['A estas alturas', 'De haberlo sabido', 'Menos mal'], answer: 2,
          explain: 'Menos mal que… = may mà… (nhẹ nhõm vì đã tránh được điều xấu).' },
        { type: 'fill', q: 'De ___, te habría avisado. (saber)', answer: ['haberlo sabido', 'haber sabido'], hint: 'de + haber + participio',
          explain: 'De haberlo sabido = Si lo hubiera sabido (nếu biết trước).' },
        { type: 'order', vi: 'Nếu tôi đã nhận công việc đó thì giờ tôi đang sống ở Madrid.', words: ['Madrid', 'hubiera', 'ahora', 'Si', 'trabajo,', 'en', 'aceptado', 'viviría', 'ese'],
          answer: 'Si hubiera aceptado ese trabajo, ahora viviría en Madrid', alt: ['Si hubiera aceptado ese trabajo, viviría ahora en Madrid', 'Si hubiera aceptado ese trabajo, viviría en Madrid ahora'] }
      ],
      reading: {
        title: 'Carta a mi yo de veinte años',
        titleVi: 'Thư gửi chính tôi năm hai mươi tuổi',
        text: [
          'Tengo cuarenta y cinco años y, a estas alturas, ya sé que no se puede cambiar el pasado. Aun así, a veces pienso en las elecciones que hice cuando era joven y me pregunto qué habría pasado si hubiera actuado de otra manera. Mis amigos dicen que soy demasiado nostálgica, y seguramente tienen razón.',
          'Cuando tenía veinte años, quería estudiar Bellas Artes, pero mis padres me aconsejaron elegir una carrera "con futuro". Estudié Derecho y desde entonces trabajo como abogada. Si hubiera seguido mi propio camino, quizás ahora sería pintora y ganaría menos dinero, pero quizás sería más feliz. Lo que sí sé es que no fue culpa de mis padres. Ellos solo querían lo mejor para mí, y la decisión final fue mía.',
          'A los veintiocho años rechacé una oferta de trabajo en Londres porque tenía miedo de vivir sola en otro país. Durante mucho tiempo tuve remordimientos. De haberlo sabido, habría aprovechado aquella oportunidad sin pensarlo dos veces. Pero si me hubiera ido, no habría conocido a Tomás, mi marido, y ahora no tendría a mis dos hijas. Menos mal que la vida no es una línea recta.',
          'Por eso, si pudiera escribir a mi yo de veinte años, no le diría "no te equivoques". Le diría: "Equivócate, pero aprende de tus errores y no pierdas el tiempo arrepintiéndote de todo". Ojalá alguien me hubiera dicho eso a mí.'
        ],
        vi: [
          'Tôi bốn mươi lăm tuổi và đến giờ này thì tôi biết rằng không thể thay đổi quá khứ. Dù vậy, đôi khi tôi nghĩ về những lựa chọn mình đã đưa ra khi còn trẻ và tự hỏi chuyện gì sẽ xảy ra nếu hồi đó tôi hành động khác đi. Bạn bè bảo tôi hoài niệm quá, và chắc là họ nói đúng.',
          'Năm hai mươi tuổi, tôi muốn học Mỹ thuật, nhưng bố mẹ khuyên tôi chọn một ngành "có tương lai". Tôi học Luật và từ đó đến nay làm luật sư. Nếu hồi đó tôi đi theo con đường của riêng mình, có lẽ giờ tôi đã là họa sĩ và kiếm ít tiền hơn, nhưng có lẽ sẽ hạnh phúc hơn. Điều tôi chắc chắn là đó không phải lỗi của bố mẹ. Họ chỉ muốn điều tốt nhất cho tôi, và quyết định cuối cùng là của tôi.',
          'Năm hai mươi tám tuổi, tôi từ chối một lời mời làm việc ở London vì sợ phải sống một mình ở nước ngoài. Suốt một thời gian dài tôi day dứt. Nếu biết trước, tôi đã nắm lấy cơ hội đó mà không cần nghĩ ngợi. Nhưng nếu hồi đó tôi đi, tôi đã không gặp Tomás, chồng tôi, và giờ tôi đã không có hai cô con gái. May mà cuộc đời không phải là một đường thẳng.',
          'Vì vậy, nếu có thể viết thư cho chính mình năm hai mươi tuổi, tôi sẽ không nói "đừng mắc sai lầm". Tôi sẽ nói: "Cứ mắc sai lầm đi, nhưng hãy học từ những sai lầm đó và đừng phí thời gian hối hận về mọi thứ". Giá mà hồi đó có ai nói với tôi điều ấy.'
        ],
        questions: [
          { q: 'Hiện nay người viết làm nghề gì?', options: ['Họa sĩ', 'Luật sư', 'Giáo viên', 'Nhà báo'], answer: 1,
            explain: 'Estudié Derecho y desde entonces trabajo como abogada.' },
          { q: 'Vì sao người viết từ chối lời mời làm việc ở London?', options: ['Vì lương quá thấp', 'Vì bố mẹ không cho phép', 'Vì cô đã có bạn trai', 'Vì cô sợ phải sống một mình ở nước ngoài'], answer: 3,
            explain: 'Rechacé una oferta de trabajo en Londres porque tenía miedo de vivir sola en otro país.' },
          { q: 'Theo người viết, nếu hồi đó cô đi London thì điều gì đã không xảy ra?', options: ['Cô đã không gặp chồng và giờ không có hai cô con gái', 'Cô đã không học ngành Luật', 'Cô đã không biết tiếng Anh', 'Cô đã không trở thành họa sĩ'], answer: 0,
            explain: 'Si me hubiera ido, no habría conocido a Tomás, mi marido, y ahora no tendría a mis dos hijas.' },
          { q: 'Người viết muốn khuyên chính mình năm hai mươi tuổi điều gì?', options: ['Đừng bao giờ mắc sai lầm', 'Hãy luôn nghe theo bố mẹ', 'Cứ mắc sai lầm, nhưng hãy học từ đó và đừng phí thời gian hối hận', 'Hãy sang London ngay lập tức'], answer: 2,
            explain: '"Equivócate, pero aprende de tus errores y no pierdas el tiempo arrepintiéndote de todo".' }
        ]
      }
    }
  },
  // ───────────────────────── B2-3b ─────────────────────────
  {
    after: 'es-b2-3',
    unit: {
      id: 'es-b2-3b',
      icon: '🔍',
      title: 'Phỏng đoán',
      goal: 'Đưa ra phỏng đoán về hiện tại và quá khứ bằng futuro, futuro compuesto, condicional và các cách nói khả năng như a lo mejor, quizás, puede que, deber de.',
      vocab: [
        { w: 'suponer', ipa: 'xu-pô-NÊR', vi: 'cho rằng, đoán là', ex: 'Supongo que estará cansado después del viaje.', exVi: 'Tôi đoán là anh ấy mệt sau chuyến đi.' },
        { w: 'la sospecha', ipa: 'la xôs-PÊ-cha', vi: 'mối nghi ngờ', ex: 'Tengo la sospecha de que alguien ha leído mi diario.', exVi: 'Tôi nghi là có ai đó đã đọc nhật ký của tôi.' },
        { w: 'sospechar', ipa: 'xôs-pê-CHAR', vi: 'nghi, ngờ rằng', ex: 'La policía sospecha que el ladrón conocía la casa.', exVi: 'Cảnh sát nghi là tên trộm biết rõ ngôi nhà.' },
        { w: 'la pista', ipa: 'la PIS-ta', vi: 'manh mối', ex: 'La policía todavía no tiene ninguna pista.', exVi: 'Cảnh sát vẫn chưa có manh mối nào.' },
        { w: 'desaparecer', ipa: 'đê-xa-pa-rê-θÊR', vi: 'biến mất, mất tích', ex: 'Mi gato desapareció hace tres días.', exVi: 'Con mèo của tôi biến mất ba ngày trước.' },
        { w: 'el testigo / la testigo', ipa: 'êl tês-TI-gô / la tês-TI-gô', vi: 'nhân chứng', ex: 'El testigo vio a dos hombres salir del banco.', exVi: 'Nhân chứng đã thấy hai người đàn ông đi ra khỏi ngân hàng.' },
        { w: 'la hipótesis', ipa: 'la i-PÔ-tê-xis', vi: 'giả thuyết', ex: 'La detective tiene una hipótesis muy interesante.', exVi: 'Nữ thám tử có một giả thuyết rất thú vị.' },
        { w: 'misterioso / misteriosa', ipa: 'mis-tê-ri-Ô-xô / mis-tê-ri-Ô-xa', vi: 'bí ẩn', ex: 'Un hombre misterioso llama a su puerta todas las noches.', exVi: 'Một người đàn ông bí ẩn gõ cửa nhà cô ấy mỗi tối.' },
        { w: 'a lo mejor', ipa: 'a lô mê-KHÔR', vi: 'biết đâu, có khi', ex: 'A lo mejor no ha visto tu mensaje.', exVi: 'Có khi bạn ấy chưa thấy tin nhắn của bạn.' },
        { w: 'deducir', ipa: 'đê-đu-θIR', vi: 'suy ra, suy luận', ex: 'Por su acento, deduzco que es de Andalucía.', exVi: 'Qua giọng nói, tôi suy ra là anh ấy người Andalucía.' },
        { w: 'quizás', ipa: 'ki-θAS', vi: 'có lẽ', ex: 'Quizás esté enfadada conmigo; no me ha llamado.', exVi: 'Có lẽ cô ấy giận mình; cô ấy chưa gọi cho mình.' },
        { w: 'puede que', ipa: 'PUÊ-đê kê', vi: 'có thể là', ex: 'Puede que llueva esta tarde.', exVi: 'Chiều nay có thể trời sẽ mưa.' },
        { w: 'deber de', ipa: 'đê-BÊR đê', vi: 'chắc là, hẳn là (phỏng đoán)', ex: 'Debe de ser muy tarde; las calles están vacías.', exVi: 'Chắc là muộn lắm rồi; đường phố vắng tanh.' },
        { w: 'el sospechoso / la sospechosa', ipa: 'êl xôs-pê-CHÔ-xô / la xôs-pê-CHÔ-xa', vi: 'nghi phạm', ex: 'La sospechosa fue detenida en el aeropuerto.', exVi: 'Nữ nghi phạm đã bị bắt ở sân bay.' },
        { w: 'la huella', ipa: 'la UÊ-gia', vi: 'dấu vết; dấu vân tay', ex: 'Encontraron sus huellas en el vaso.', exVi: 'Người ta tìm thấy dấu vân tay của hắn trên chiếc cốc.' },
        { w: 'investigar', ipa: 'in-bês-ti-GAR', vi: 'điều tra', ex: 'La policía está investigando el robo.', exVi: 'Cảnh sát đang điều tra vụ trộm.' },
        { w: 'la coartada', ipa: 'la cô-ar-TA-đa', vi: 'bằng chứng ngoại phạm', ex: 'El sospechoso tiene una coartada: dice que estaba en el cine.', exVi: 'Nghi phạm có bằng chứng ngoại phạm: anh ta nói lúc đó đang ở rạp phim.' },
        { w: 'extraño / extraña', ipa: 'êcs-TRA-nhô / êcs-TRA-nha', vi: 'lạ, kỳ lạ', ex: 'Es extraño que no haya llamado.', exVi: 'Thật lạ là anh ấy chưa gọi.' },
        { w: 'por lo visto', ipa: 'pôr lô BIS-tô', vi: 'hình như, nghe nói', ex: 'Por lo visto, los vecinos del quinto se van a mudar.', exVi: 'Nghe nói nhà hàng xóm tầng năm sắp chuyển đi.' },
        { w: 'el cotilleo', ipa: 'êl cô-ti-GIÊ-ô', vi: 'chuyện ngồi lê đôi mách', ex: 'No me gustan los cotilleos sobre la vida de los demás.', exVi: 'Tôi không thích những chuyện ngồi lê đôi mách về đời tư người khác.' }
      ],
      grammar: {
        title: 'Phỏng đoán: futuro, futuro compuesto và condicional chỉ khả năng',
        explain: [
          'Futuro simple không chỉ nói về tương lai: nó còn dùng để ĐOÁN về hiện tại, nghĩa là "chắc là, có lẽ". ¿Dónde está Ana? — Estará en un atasco (chắc cô ấy đang kẹt xe). ¿Qué hora será? — Serán las diez (chắc khoảng mười giờ). Người nói không chắc chắn nên không dùng thì hiện tại.',
          'Futuro compuesto = habré, habrás, habrá, habremos, habréis, habrán + participio: đoán về việc vừa xảy ra (tương ứng với pretérito perfecto). Ha perdido el tren (chắc chắn) → Habrá perdido el tren (chắc là đã lỡ tàu). Condicional simple: đoán về quá khứ (tương ứng với imperfecto/indefinido). Eran las tres → Serían las tres cuando llegó (lúc đó chắc khoảng ba giờ). ¿Por qué no vino? — Estaría cansado.',
          'Các cách nói khả năng khác: a lo mejor + indicativo (A lo mejor está enfermo); quizás / tal vez + subjuntivo hoặc indicativo (Quizás esté enfermo / Quizás está enfermo — subjuntivo nghe ít chắc chắn hơn); puede que + subjuntivo (Puede que esté enfermo); deber de + nguyên mẫu (Debe de estar enfermo = chắc hẳn là ốm). Mức độ chắc chắn giảm dần: deber de → futuro → a lo mejor / quizás / puede que.',
          'Để nói về quá khứ, các cách trên kết hợp với perfecto: A lo mejor se ha ido. Puede que se haya ido. Debe de haberse ido. Câu hỏi với futuro/condicional thể hiện sự băn khoăn, không cần ai trả lời: ¿Quién será a estas horas? ¿Qué le pasaría?',
          '🌎 Mỹ Latinh: futuro và condicional phỏng đoán dùng như ở Tây Ban Nha. Ngoài a lo mejor, ở Argentina, Uruguay người ta hay nói "capaz que", còn ở Chile, Perú "de repente" cũng có nghĩa là "có khi, biết đâu".'
        ],
        table: [
          ['Thời điểm', 'Chắc chắn', 'Phỏng đoán', 'Nghĩa'],
          ['Hiện tại', 'Está en un atasco.', 'Estará en un atasco.', 'Chắc là đang kẹt xe.'],
          ['Vừa xảy ra', 'Ha perdido el tren.', 'Habrá perdido el tren.', 'Chắc là đã lỡ tàu.'],
          ['Quá khứ', 'Eran las tres.', 'Serían las tres.', 'Lúc đó chắc khoảng ba giờ.'],
          ['Quá khứ', 'Estaba cansado.', 'Estaría cansado.', 'Chắc là (lúc đó) anh ấy mệt.']
        ],
        examples: [
          { t: '¿Dónde está Pablo? — Estará en un atasco; a esta hora siempre hay mucho tráfico.', vi: 'Pablo đâu rồi? — Chắc đang kẹt xe; giờ này lúc nào cũng đông xe.' },
          { t: 'No contesta al teléfono. Se habrá quedado sin batería.', vi: 'Anh ấy không nghe máy. Chắc là điện thoại hết pin rồi.' },
          { t: 'Serían las tres de la madrugada cuando oí el ruido.', vi: 'Lúc tôi nghe thấy tiếng động chắc khoảng ba giờ sáng.' },
          { t: 'A lo mejor se ha ido de vacaciones, pero puede que esté enfermo.', vi: 'Có khi anh ấy đi nghỉ rồi, nhưng cũng có thể là anh ấy bị ốm.' },
          { t: 'Las luces están apagadas: deben de estar durmiendo.', vi: 'Đèn tắt hết rồi: chắc là họ đang ngủ.' }
        ],
        tip: 'Đừng hiểu "Estará en casa" là "sẽ ở nhà": khi đang đoán, nó nghĩa là "chắc đang ở nhà". "A lo mejor" đi với indicativo (A lo mejor viene), còn "puede que" luôn đi với subjuntivo (Puede que venga). Phân biệt "deber de + nguyên mẫu" (chắc là — phỏng đoán) với "deber + nguyên mẫu" (phải, nên — nghĩa vụ).'
      },
      dialogue: [
        { s: 'Rosa', t: 'Manu, ¿has visto últimamente al vecino del tercero? Hace una semana que no lo veo.', vi: 'Manu, dạo này cậu có thấy ông hàng xóm tầng ba không? Cả tuần nay tớ không thấy ông ấy.' },
        { s: 'Manu', t: 'Pues no. Estará de vacaciones, ¿no?', vi: 'Ừ, không thấy. Chắc ông ấy đang đi nghỉ, nhỉ?' },
        { s: 'Rosa', t: 'No creo. Su coche sigue en el garaje y anoche había luz en su ventana.', vi: 'Tớ không nghĩ vậy. Xe ông ấy vẫn ở trong gara và tối qua cửa sổ nhà ông ấy có đèn.' },
        { s: 'Manu', t: 'Qué misterioso… A lo mejor está enfermo y no puede salir.', vi: 'Bí ẩn thật… Biết đâu ông ấy bị ốm và không ra ngoài được.' },
        { s: 'Rosa', t: 'Puede que tengas razón. Además, anoche alguien llamó a su puerta. Serían las doce.', vi: 'Có thể cậu nói đúng. Mà tối qua có người gõ cửa nhà ông ấy. Chắc khoảng mười hai giờ.' },
        { s: 'Manu', t: '¿A las doce? ¿Quién sería a esas horas?', vi: 'Lúc mười hai giờ á? Giờ đó thì ai được nhỉ?' },
        { s: 'Rosa', t: 'Ni idea. Y esta mañana había una caja enorme delante de su puerta.', vi: 'Chịu. Mà sáng nay có một cái hộp to tướng trước cửa nhà ông ấy.' },
        { s: 'Manu', t: 'Entonces habrá comprado algo por internet. Rosa, deberías ver menos series de detectives.', vi: 'Vậy thì chắc ông ấy đã mua gì đó trên mạng. Rosa, cậu nên xem ít phim trinh thám lại.' },
        { s: 'Rosa', t: 'Vale, vale… Pero tú también sospechas algo, ¿a que sí?', vi: 'Được rồi, được rồi… Nhưng cậu cũng đang nghi điều gì đó, đúng không?' },
        { s: 'Manu', t: 'Un poco. ¿Llamamos a su puerta para ver si está bien?', vi: 'Hơi hơi. Mình gõ cửa xem ông ấy có ổn không nhé?' }
      ],
      exercises: [
        { type: 'mc', q: '¿Dónde está Lucía? — No sé, ___ en la biblioteca.', options: ['esté', 'estuviera', 'estado', 'estará'], answer: 3,
          explain: 'Đoán về hiện tại → futuro simple: estará (chắc là đang ở thư viện).' },
        { type: 'fill', q: '¿Qué hora ___? — No sé, serán las cinco. (ser)', answer: ['será'], hint: 'futuro – đoán về hiện tại',
          explain: 'Câu hỏi băn khoăn về hiện tại dùng futuro: ¿Qué hora será?' },
        { type: 'order', vi: 'Chắc là anh ấy đang kẹt xe.', words: ['atasco', 'un', 'Estará', 'en'],
          answer: 'Estará en un atasco' },
        { type: 'mc', q: 'Mi hermano todavía no ha llegado. ___ perdido el autobús.', options: ['Hubo', 'Haya', 'Habrá', 'Hubiera'], answer: 2,
          explain: 'Đoán về việc vừa xảy ra → futuro compuesto: habrá perdido.' },
        { type: 'fill', q: 'No encuentro mis llaves. Las ___ en el coche. (yo, dejar)', answer: ['habré dejado'], hint: 'futuro compuesto, ngôi yo',
          explain: 'Đoán về việc vừa xảy ra → habré + participio: habré dejado.' },
        { type: 'mc', q: 'Cuando salimos del cine ___ las once, más o menos.', options: ['serían', 'serán', 'sean', 'son'], answer: 0,
          explain: 'Đoán về thời điểm trong quá khứ → condicional: serían las once.' },
        { type: 'order', vi: 'Chắc là cô ấy đã lỡ chuyến tàu lúc tám giờ.', words: ['tren', 'las', 'perdido', 'de', 'el', 'Habrá', 'ocho'],
          answer: 'Habrá perdido el tren de las ocho' },
        { type: 'fill', q: 'Ayer Marta no vino a clase. ___ enferma. (estar)', answer: ['Estaría', 'Habrá estado', 'Estará'], hint: 'condicional – đoán về quá khứ',
          explain: 'Đoán về một tình huống trong quá khứ → condicional: estaría (cũng có thể nói habrá estado; estará = đoán rằng đến giờ cô ấy vẫn ốm). "Estaba" là khẳng định chắc chắn, không phải phỏng đoán.' },
        { type: 'mc', q: 'Puede que Raúl ___ razón.', options: ['tiene', 'tener', 'tendrá', 'tenga'], answer: 3,
          explain: 'Puede que luôn đi với subjuntivo: tenga.' },
        { type: 'order', vi: 'Lúc chúng tôi về đến nhà chắc khoảng hai giờ.', words: ['casa', 'dos', 'Serían', 'llegamos', 'a', 'cuando', 'las'],
          answer: 'Serían las dos cuando llegamos a casa', alt: ['cuando llegamos a casa Serían las dos'] },
        { type: 'mc', q: 'A lo mejor ___ mañana. (llover)', options: ['llueva', 'llueve', 'llover'], answer: 1,
          explain: 'Theo chuẩn, a lo mejor đi với indicativo: a lo mejor llueve.' },
        { type: 'fill', q: 'Las luces están encendidas: deben ___ estar en casa.', answer: ['de'], hint: 'deber ___ + nguyên mẫu = chắc là',
          explain: 'Deber de + nguyên mẫu diễn tả phỏng đoán: deben de estar en casa (chắc là họ đang ở nhà).' },
        { type: 'order', vi: 'Có thể là nhân chứng đã nói dối.', words: ['haya', 'el', 'Puede', 'mentido', 'que', 'testigo'],
          answer: 'Puede que el testigo haya mentido' },
        { type: 'mc', q: 'La policía ha encontrado una ___ importante: una huella en la ventana.', options: ['hipótesis', 'sospechosa', 'pista', 'cotilleo'], answer: 2,
          explain: 'La pista = manh mối. Dấu vân tay trên cửa sổ là một manh mối.' },
        { type: 'fill', q: 'El ladrón ___ sin dejar ninguna huella. (desaparecer)', answer: ['desapareció'], hint: 'desaparecer – indefinido, ngôi él',
          explain: 'Hành động đã xong trong quá khứ → indefinido: desapareció.' },
        { type: 'order', vi: 'Biết đâu họ đã đi nghỉ rồi.', words: ['vacaciones', 'ido', 'A', 'se', 'de', 'mejor', 'han', 'lo'],
          answer: 'A lo mejor se han ido de vacaciones' }
      ],
      reading: {
        title: 'El cuadro que desapareció',
        titleVi: 'Bức tranh biến mất',
        text: [
          'El domingo por la mañana, el pequeño museo de Villaverde abrió sus puertas como siempre, pero algo no estaba en su sitio: el cuadro más famoso del pueblo, un retrato del siglo XVIII, había desaparecido. No había ninguna ventana rota ni ninguna huella. La policía fue avisada enseguida y empezó a investigar.',
          'En el bar de la plaza, todo el mundo tenía su propia hipótesis. "Habrá sido alguien del pueblo, porque conocía muy bien el museo", decía el panadero. "A lo mejor lo ha vendido el propio director; por lo visto, tiene muchas deudas", sospechaba una vecina. "Puede que esté en Madrid para una exposición y que nadie nos lo haya dicho", comentaba el cartero.',
          'La única testigo era doña Carmen, una señora de ochenta años que vive enfrente del museo. "Serían las dos de la madrugada cuando vi a un hombre con una caja enorme", explicó a la policía. "No le vi la cara. Llevaría una gorra o algo así." Durante varios días, aquel hombre misterioso fue el cotilleo favorito de todo el pueblo.',
          'Tres días después, la detective encargada del caso dedujo la verdad gracias a una pista muy simple: una factura de un taller de Toledo. El cuadro estaba allí. El director lo había enviado para limpiarlo y había olvidado avisar a los empleados. El "hombre misterioso" era el transportista. No había ningún ladrón, solo un director muy despistado. Y ahora, en el bar, todos dicen que ellos ya lo sospechaban.'
        ],
        vi: [
          'Sáng Chủ nhật, bảo tàng nhỏ của Villaverde mở cửa như mọi khi, nhưng có một thứ không còn ở chỗ cũ: bức tranh nổi tiếng nhất của thị trấn, một bức chân dung từ thế kỷ XVIII, đã biến mất. Không có cửa sổ nào bị vỡ, cũng không có dấu vết nào. Cảnh sát được báo ngay lập tức và bắt đầu điều tra.',
          'Ở quán bar trên quảng trường, ai cũng có giả thuyết của riêng mình. "Chắc là người trong thị trấn làm, vì hắn biết rất rõ bảo tàng", ông thợ làm bánh nói. "Biết đâu chính ông giám đốc đã bán nó; nghe nói ông ta nợ nần nhiều lắm", một bà hàng xóm nghi ngờ. "Có thể nó đang ở Madrid cho một cuộc triển lãm mà không ai báo cho chúng ta", ông đưa thư bình luận.',
          'Nhân chứng duy nhất là bà Carmen, một bà cụ tám mươi tuổi sống đối diện bảo tàng. "Lúc tôi thấy một người đàn ông mang một cái hộp rất to thì chắc khoảng hai giờ sáng", bà giải thích với cảnh sát. "Tôi không nhìn thấy mặt hắn. Chắc hắn đội mũ lưỡi trai hay gì đó." Trong nhiều ngày, người đàn ông bí ẩn ấy là đề tài bàn tán yêu thích của cả thị trấn.',
          'Ba ngày sau, nữ thám tử phụ trách vụ việc đã suy ra sự thật nhờ một manh mối rất đơn giản: một hoá đơn của một xưởng ở Toledo. Bức tranh đang ở đó. Ông giám đốc đã gửi nó đi để làm sạch và quên báo cho nhân viên. "Người đàn ông bí ẩn" là người vận chuyển. Chẳng có tên trộm nào cả, chỉ có một ông giám đốc rất đãng trí. Và giờ đây, ở quán bar, ai cũng nói rằng mình đã nghi từ trước rồi.'
        ],
        questions: [
          { q: 'Lúc đầu, vì sao vụ việc có vẻ khó hiểu?', options: ['Vì bảo tàng đóng cửa vào Chủ nhật', 'Vì có quá nhiều nhân chứng', 'Vì cảnh sát đến quá muộn', 'Vì không có cửa sổ vỡ hay dấu vết nào'], answer: 3,
            explain: 'No había ninguna ventana rota ni ninguna huella.' },
          { q: 'Bà hàng xóm nghi ngờ ai?', options: ['Ông thợ làm bánh', 'Chính ông giám đốc bảo tàng', 'Ông đưa thư', 'Bà Carmen'], answer: 1,
            explain: '"A lo mejor lo ha vendido el propio director", sospechaba una vecina.' },
          { q: 'Câu "Llevaría una gorra o algo así" có nghĩa là gì?', options: ['Bà Carmen chắc chắn người đó đội mũ', 'Người đó sẽ đội mũ vào lần sau', 'Bà Carmen đoán là người đó đội mũ lưỡi trai', 'Bà Carmen muốn mua một cái mũ'], answer: 2,
            explain: 'Condicional "llevaría" dùng để đoán về quá khứ: bà không nhìn rõ (No le vi la cara).' },
          { q: 'Thực ra bức tranh đang ở đâu?', options: ['Ở một xưởng tại Toledo để được làm sạch', 'Ở một bảo tàng tại Madrid', 'Trong nhà bà Carmen', 'Đã bị bán cho một nhà sưu tầm'], answer: 0,
            explain: 'Una factura de un taller de Toledo. El cuadro estaba allí. El director lo había enviado para limpiarlo.' }
        ]
      }
    }
  },

  {
    after: 'es-b2-4',
    unit: {
      id: 'es-b2-4b',
      icon: '🦋',
      title: 'Tính cách & thay đổi',
      goal: 'Miêu tả tính cách và kể về sự thay đổi của con người bằng ponerse, volverse, hacerse, quedarse, convertirse en, llegar a ser, đồng thời phân biệt nghĩa của tính từ khi đi với ser hay estar.',
      vocab: [
        { w: 'ponerse', ipa: 'pô-NÊR-xê', vi: 'bỗng trở nên (thay đổi nhanh, tạm thời)', ex: 'Cuando habla en público, se pone muy nervioso.', exVi: 'Mỗi khi nói trước đám đông, anh ấy lại trở nên rất căng thẳng.' },
        { w: 'volverse', ipa: 'bôl-BÊR-xê', vi: 'trở nên, hoá ra (thay đổi sâu, thường ngoài ý muốn)', ex: 'Desde que es famoso, se ha vuelto muy egoísta.', exVi: 'Từ khi nổi tiếng, anh ta trở nên rất ích kỷ.' },
        { w: 'hacerse', ipa: 'a-θÊR-xê', vi: 'trở thành (nhờ nỗ lực hoặc theo thời gian)', ex: 'Mi prima estudió mucho y se hizo médica.', exVi: 'Chị họ tôi học hành chăm chỉ và đã trở thành bác sĩ.' },
        { w: 'quedarse', ipa: 'kê-ĐAR-xê', vi: 'bị, rơi vào (trạng thái sau một sự việc)', ex: 'Con la crisis, muchas personas se quedaron sin trabajo.', exVi: 'Vì khủng hoảng, nhiều người bị mất việc.' },
        { w: 'convertirse en', ipa: 'côn-bêr-TIR-xê ên', vi: 'biến thành, chuyển thành', ex: 'El pequeño pueblo se ha convertido en un destino turístico.', exVi: 'Ngôi làng nhỏ đã biến thành một điểm du lịch.' },
        { w: 'llegar a ser', ipa: 'giê-GAR a xêr', vi: 'rốt cuộc trở thành (sau một quá trình dài)', ex: 'Empezó como camarero y llegó a ser director del hotel.', exVi: 'Anh ấy khởi đầu là bồi bàn và rốt cuộc trở thành giám đốc khách sạn.' },
        { w: 'el carácter', ipa: 'êl ca-RAC-têr', vi: 'tính cách, tính tình', ex: 'Mi hermano tiene un carácter muy fuerte.', exVi: 'Anh trai tôi có tính cách rất mạnh mẽ.' },
        { w: 'la personalidad', ipa: 'la pêr-xô-na-li-ĐAĐ', vi: 'cá tính, nhân cách', ex: 'Es una chica con mucha personalidad.', exVi: 'Cô ấy là một cô gái rất có cá tính.' },
        { w: 'egoísta', ipa: 'ê-gô-IS-ta', vi: 'ích kỷ', ex: 'No seas tan egoísta: piensa también en los demás.', exVi: 'Đừng ích kỷ thế: hãy nghĩ cả cho người khác nữa.' },
        { w: 'generoso / generosa', ipa: 'khê-nê-RÔ-xô / khê-nê-RÔ-xa', vi: 'hào phóng, rộng lượng', ex: 'Mi abuela es muy generosa: siempre nos regala algo.', exVi: 'Bà tôi rất hào phóng: lúc nào cũng tặng chúng tôi thứ gì đó.' },
        { w: 'terco / terca', ipa: 'TÊR-cô / TÊR-ca', vi: 'bướng bỉnh, cứng đầu', ex: 'Es tan terco que nunca cambia de opinión.', exVi: 'Anh ấy bướng đến mức không bao giờ đổi ý.' },
        { w: 'sensible', ipa: 'xên-XI-blê', vi: 'nhạy cảm, dễ xúc động', ex: 'Es una persona muy sensible y llora con cualquier película.', exVi: 'Cô ấy là người rất nhạy cảm, xem phim nào cũng khóc.' },
        { w: 'maduro / madura', ipa: 'ma-ĐU-rô / ma-ĐU-ra', vi: 'chín chắn, trưởng thành; (quả) chín', ex: 'Para tener solo dieciséis años, es muy madura.', exVi: 'Mới mười sáu tuổi mà cô bé đã rất chín chắn.' },
        { w: 'ambicioso / ambiciosa', ipa: 'am-bi-θi-Ô-xô / am-bi-θi-Ô-xa', vi: 'tham vọng, có hoài bão', ex: 'Es un joven ambicioso que quiere hacerse rico.', exVi: 'Cậu ấy là một chàng trai đầy tham vọng, muốn trở nên giàu có.' },
        { w: 'listo / lista', ipa: 'LIS-tô / LIS-ta', vi: 'thông minh (ser); sẵn sàng (estar)', ex: 'Lucía es muy lista, pero hoy no está lista para el examen.', exVi: 'Lucía rất thông minh, nhưng hôm nay cô ấy chưa sẵn sàng cho bài thi.' },
        { w: 'vivo / viva', ipa: 'BI-bô / BI-ba', vi: 'lanh lợi (ser); còn sống (estar)', ex: 'Es un niño muy vivo: lo entiende todo enseguida.', exVi: 'Thằng bé rất lanh lợi: hiểu mọi thứ ngay lập tức.' },
        { w: 'despierto / despierta', ipa: 'đês-pi-ÊR-tô / đês-pi-ÊR-ta', vi: 'đang thức (estar); nhanh nhạy (ser)', ex: '¿Todavía estás despierto? Son las dos de la mañana.', exVi: 'Cậu vẫn còn thức à? Đã hai giờ sáng rồi.' },
        { w: 'sorprendido / sorprendida', ipa: 'xôr-prên-ĐI-đô / xôr-prên-ĐI-đa', vi: 'ngạc nhiên, sửng sốt', ex: 'Me quedé sorprendido cuando vi lo mucho que había cambiado.', exVi: 'Tôi sửng sốt khi thấy anh ấy đã thay đổi nhiều đến thế.' },
        { w: 'avergonzado / avergonzada', ipa: 'a-bêr-gôn-θA-đô / a-bêr-gôn-θA-đa', vi: 'xấu hổ, ngượng', ex: 'Se puso rojo y se quedó avergonzado delante de todos.', exVi: 'Cậu ấy đỏ mặt và ngượng chín người trước mặt mọi người.' },
        { w: 'el defecto', ipa: 'êl đê-PHÊC-tô', vi: 'khuyết điểm, tật xấu', ex: 'Su mayor defecto es que nunca escucha a los demás.', exVi: 'Khuyết điểm lớn nhất của anh ấy là không bao giờ lắng nghe người khác.' }
      ],
      grammar: {
        title: 'Động từ chỉ sự thay đổi & tính từ đổi nghĩa với ser/estar',
        explain: [
          'Tiếng Việt chỉ cần "trở nên / trở thành", còn tiếng Tây Ban Nha chọn động từ theo kiểu thay đổi. Ponerse + tính từ: thay đổi nhanh, tạm thời về cảm xúc, sức khoẻ, vẻ ngoài: ponerse nervioso, ponerse rojo, ponerse triste, ponerse enfermo. Volverse + tính từ: thay đổi sâu, lâu dài về tính cách hay tinh thần, thường ngoài ý muốn: volverse loco, volverse egoísta, volverse desconfiado.',
          'Hacerse + tính từ/danh từ: thay đổi nhờ nỗ lực của bản thân hoặc do tiến trình tự nhiên: hacerse rico, hacerse médico, hacerse famoso, hacerse mayor. Llegar a ser + danh từ/tính từ: đạt tới một vị trí sau quá trình dài, thường là thành công: Llegó a ser ministra. Convertirse en + danh từ: biến hẳn thành một thứ khác: Su afición se convirtió en su trabajo.',
          'Quedarse + tính từ (hoặc sin + danh từ): trạng thái kết quả sau một sự việc, thường đột ngột hoặc không mong muốn: quedarse sorprendido, quedarse sin trabajo, quedarse ciego, quedarse solo. Trừ llegar a ser, các động từ trên đều dùng ở dạng phản thân: me pongo, te vuelves, se hizo, nos quedamos, se ha convertido.',
          'Một số tính từ đổi nghĩa tuỳ theo đi với ser (đặc điểm cố hữu) hay estar (trạng thái lúc đó): ser listo (thông minh) – estar listo (sẵn sàng); ser aburrido (nhàm chán) – estar aburrido (đang chán); ser malo (tồi, xấu tính) – estar malo (bị ốm); ser rico (giàu) – estar rico (ngon); ser verde (màu xanh lá) – estar verde (chưa chín; còn non kinh nghiệm); ser vivo (lanh lợi) – estar vivo (còn sống); ser despierto (nhanh nhạy) – estar despierto (đang thức); ser orgulloso (kiêu ngạo) – estar orgulloso de (tự hào về).'
        ],
        table: [
          ['Cấu trúc', 'Ý nghĩa', 'Ví dụ'],
          ['ponerse + tính từ', 'thay đổi nhanh, tạm thời', 'Se puso nervioso.'],
          ['volverse + tính từ', 'thay đổi sâu, thường ngoài ý muốn', 'Se ha vuelto muy egoísta.'],
          ['hacerse + tính từ/danh từ', 'nhờ nỗ lực hoặc theo thời gian', 'Se hizo rico. / Me hago mayor.'],
          ['quedarse + tính từ / sin…', 'kết quả sau một sự việc', 'Se quedó sin trabajo.'],
          ['convertirse en + danh từ', 'biến hẳn thành thứ khác', 'Se convirtió en un gran actor.'],
          ['llegar a ser + danh từ', 'đạt tới sau quá trình dài', 'Llegó a ser directora.'],
          ['ser / estar listo', 'thông minh / sẵn sàng', 'Es lista. / Ya está lista.'],
          ['ser / estar aburrido', 'nhàm chán / đang chán', 'La clase es aburrida. / Estoy aburrido.'],
          ['ser / estar malo', 'tồi, xấu tính / bị ốm', 'Es un mal jefe. / Hoy estoy malo.'],
          ['ser / estar rico', 'giàu / ngon', 'Su familia es rica. / La paella está rica.'],
          ['ser / estar verde', 'màu xanh lá / chưa chín, còn non', 'La puerta es verde. / El plátano está verde.'],
          ['ser / estar vivo', 'lanh lợi / còn sống', 'Es un niño muy vivo. / Mi abuelo aún está vivo.'],
          ['ser / estar despierto', 'nhanh nhạy / đang thức', 'Es muy despierta. / ¿Estás despierto?'],
          ['ser / estar orgulloso', 'kiêu ngạo / tự hào', 'Es muy orgulloso. / Está orgullosa de su hijo.']
        ],
        examples: [
          { t: 'Cuando le pregunté por su exnovia, se puso triste.', vi: 'Khi tôi hỏi về bạn gái cũ, anh ấy bỗng buồn hẳn.' },
          { t: 'Con los años, mi tío se ha vuelto muy desconfiado.', vi: 'Theo năm tháng, chú tôi trở nên rất đa nghi.' },
          { t: 'Trabajó muchísimo y se hizo rico antes de los cuarenta.', vi: 'Anh ấy làm việc cật lực và trở nên giàu có trước tuổi bốn mươi.' },
          { t: 'Nos quedamos sin palabras al ver el paisaje.', vi: 'Chúng tôi lặng người không nói nên lời khi thấy phong cảnh.' },
          { t: 'Esta sopa está muy rica, pero el cocinero es un poco aburrido.', vi: 'Món súp này rất ngon, nhưng anh đầu bếp thì hơi nhạt nhẽo.' }
        ],
        tip: 'Đừng dịch "trở nên" bằng một động từ duy nhất: "Se puso nervioso" (lúc đó bỗng run), "Se volvió loco" (thay đổi sâu), "Se hizo médico" (nhờ học hành). Với nghề nghiệp không dùng ponerse: "Se puso médico" ✗. Convertirse luôn có en và đi với danh từ: "Se convirtió en un problema" ✓. Cẩn thận với ser/estar: "Soy aburrido" (tôi là người nhàm chán) khác hẳn "Estoy aburrido" (tôi đang chán); món ăn ngon là "está rica", còn "es rica" nghĩa là giàu. Sensible nghĩa là "nhạy cảm", không phải "biết điều" như sensible trong tiếng Anh. 🌎 Mỹ Latinh: "estar malo" (bị ốm) ít dùng, người ta thường nói "estar enfermo"; các cặp ser/estar còn lại dùng giống nhau.'
      },
      dialogue: [
        { s: 'Marta', t: '¿Te acuerdas de Sergio, el del instituto? Se ha hecho famoso con sus vídeos.', vi: 'Cậu còn nhớ Sergio, cậu bạn hồi cấp ba không? Cậu ấy nổi tiếng nhờ mấy video của mình rồi đấy.' },
        { s: 'Pablo', t: '¡No me digas! Era tan tímido que se ponía rojo cada vez que la profesora le preguntaba algo.', vi: 'Thật á! Hồi đó cậu ấy nhút nhát đến mức cứ bị cô giáo hỏi là đỏ mặt.' },
        { s: 'Marta', t: 'Pues ahora tiene muchísima personalidad. Lo vi la semana pasada y me quedé sorprendida.', vi: 'Thế mà giờ cậu ấy cực kỳ cá tính. Tuần trước tớ gặp cậu ấy mà sửng sốt luôn.' },
        { s: 'Pablo', t: '¿Ha cambiado para bien o para mal? Dicen que con la fama mucha gente se vuelve egoísta.', vi: 'Thay đổi theo hướng tốt hay xấu? Người ta bảo nổi tiếng rồi nhiều người trở nên ích kỷ.' },
        { s: 'Marta', t: 'Él no. Sigue siendo muy generoso: su canal se ha convertido en un proyecto para ayudar a niños enfermos.', vi: 'Cậu ấy thì không. Vẫn hào phóng lắm: kênh của cậu ấy đã trở thành một dự án giúp đỡ trẻ em bị bệnh.' },
        { s: 'Pablo', t: '¡Qué bien! La verdad es que siempre fue muy listo, aunque un poco terco.', vi: 'Hay quá! Thật ra cậu ấy lúc nào cũng rất thông minh, dù hơi bướng.' },
        { s: 'Marta', t: 'Sí, pero ahora es mucho más maduro. Me dijo que quería llegar a ser director de cine.', vi: 'Ừ, nhưng giờ cậu ấy chín chắn hơn nhiều rồi. Cậu ấy bảo tớ là muốn trở thành đạo diễn điện ảnh.' },
        { s: 'Pablo', t: 'Con lo ambicioso que es, seguro que lo consigue. ¡Me alegro mucho por él!', vi: 'Tham vọng như cậu ấy thì chắc chắn sẽ làm được. Tớ mừng cho cậu ấy quá!' }
      ],
      exercises: [
        { type: 'mc', q: 'Cuando vio a la chica que le gustaba, Juan ___ rojo.', options: ['se hizo', 'se puso', 'se convirtió', 'llegó a ser'], answer: 1,
          explain: 'Thay đổi nhanh, tạm thời về vẻ ngoài (đỏ mặt) → ponerse: se puso rojo.' },
        { type: 'mc', q: 'Después de estudiar Medicina durante siete años, Ana ___ médica.', options: ['se puso', 'se quedó', 'se hizo', 'se volvió'], answer: 2,
          explain: 'Nghề nghiệp đạt được nhờ nỗ lực → hacerse: se hizo médica. Ponerse/volverse không dùng với nghề nghiệp.' },
        { type: 'mc', q: 'La paella de tu madre ___ muy rica. ¡Quiero más!', options: ['está', 'es', 'se pone', 'se hace'], answer: 0,
          explain: 'Món ăn ngon → estar rico. "Es rica" nghĩa là giàu có.' },
        { type: 'mc', q: 'Cuando cerró la fábrica, mi padre ___ sin trabajo.', options: ['se puso', 'se convirtió', 'se hizo', 'se quedó'], answer: 3,
          explain: 'Kết quả sau một sự việc không mong muốn → quedarse: se quedó sin trabajo.' },
        { type: 'mc', q: 'Una persona que solo piensa en sí misma es ___.', options: ['egoísta', 'generosa', 'sensible', 'madura'], answer: 0,
          explain: 'Egoísta = ích kỷ, chỉ nghĩ cho bản thân.' },
        { type: 'mc', q: 'Lucía, ¿___ lista? Salimos en cinco minutos.', options: ['eres', 'te haces', 'estás'], answer: 2,
          explain: 'Sẵn sàng (trạng thái) → estar listo/lista. "Ser lista" nghĩa là thông minh.' },
        { type: 'fill', q: 'Después de tantos problemas, mi jefe se ha ___ muy desconfiado.', answer: ['vuelto'], hint: 'volverse – participio',
          explain: 'Thay đổi sâu, lâu dài về tính cách → volverse; participio bất quy tắc: vuelto.' },
        { type: 'fill', q: 'Este pequeño pueblo se ha convertido ___ un destino turístico muy popular.', answer: ['en'], hint: 'giới từ đi với convertirse',
          explain: 'Convertirse luôn đi với en + danh từ.' },
        { type: 'fill', q: 'Cuando le dieron la noticia, Elena se ___ sin palabras.', answer: ['quedó'], hint: 'quedarse – indefinido, ella',
          explain: 'Trạng thái kết quả sau một sự việc → quedarse: se quedó sin palabras.' },
        { type: 'fill', q: 'No te comas esos plátanos, que todavía ___ verdes.', answer: ['están'], hint: 'ser hay estar? (chưa chín)',
          explain: 'Chưa chín là trạng thái → estar verde. "Son verdes" chỉ nói về màu sắc.' },
        { type: 'fill', q: 'Mi hermano nunca cambia de opinión: es muy ___.', answer: ['terco', 'testarudo', 'cabezota'], hint: 'bướng bỉnh, cứng đầu',
          explain: 'Terco = bướng bỉnh, không chịu đổi ý.' },
        { type: 'order', vi: 'Anh ấy trở nên rất căng thẳng trước kỳ thi.', words: ['nervioso', 'Se', 'del', 'muy', 'antes', 'puso', 'examen'],
          answer: 'Se puso muy nervioso antes del examen', alt: ['antes del examen Se puso muy nervioso'] },
        { type: 'order', vi: 'Con trai tôi đã trở thành một chàng trai rất chín chắn.', words: ['convertido', 'hijo', 'en', 'Mi', 'chico', 'se', 'muy', 'un', 'ha', 'maduro'],
          answer: 'Mi hijo se ha convertido en un chico muy maduro' },
        { type: 'order', vi: 'Bà ấy rốt cuộc đã trở thành giám đốc công ty.', words: ['ser', 'la', 'Llegó', 'directora', 'a', 'empresa', 'de'],
          answer: 'Llegó a ser directora de la empresa' },
        { type: 'order', vi: 'Tôi đang chán vì bộ phim rất nhàm chán.', words: ['película', 'aburrido', 'muy', 'Estoy', 'la', 'porque', 'aburrida', 'es'],
          answer: 'Estoy aburrido porque la película es muy aburrida' },
        { type: 'order', vi: 'Ông tôi vẫn còn sống và rất nhanh nhạy.', words: ['vivo', 'abuelo', 'es', 'Mi', 'despierto', 'todavía', 'y', 'está', 'muy'],
          answer: 'Mi abuelo todavía está vivo y es muy despierto', alt: ['Mi abuelo está todavía vivo y es muy despierto', 'Mi abuelo está vivo todavía y es muy despierto'] }
      ],
      reading: {
        title: 'Cómo nos cambia la vida',
        titleVi: 'Cuộc đời thay đổi con người ra sao',
        text: [
          'Cuando Raúl era pequeño, era un niño muy sensible y tímido. Se ponía rojo cada vez que tenía que hablar en clase y, si alguien se reía de él, se quedaba callado durante horas. Nadie habría imaginado que algún día llegaría a ser uno de los cocineros más famosos de Valencia.',
          'Todo empezó a los dieciocho años, cuando consiguió trabajo en el restaurante de un tío suyo. Allí descubrió su pasión: la cocina. Trabajaba catorce horas al día y poco a poco se hizo un experto en arroces. Sus clientes decían que su paella estaba más rica que ninguna. A los treinta años abrió su propio restaurante, que pronto se convirtió en uno de los más populares de la ciudad.',
          'Sin embargo, el éxito no siempre es bueno para el carácter. Raúl se volvió ambicioso, terco y bastante egoísta. Ya no escuchaba a sus empleados y se ponía furioso por cualquier error. Varios cocineros se marcharon y, tras una mala crítica en el periódico, se quedó casi sin clientes. Al final tuvo que cerrar el restaurante.',
          'Hoy Raúl dice que aquella crisis fue lo mejor que le pudo pasar. «Me di cuenta de que me había convertido en alguien que no me gustaba», explica. Ahora es un hombre más maduro y generoso: da clases de cocina gratuitas a jóvenes sin recursos y está muy orgulloso de sus alumnos. «Todos tenemos defectos», dice, «pero nunca es tarde para cambiar».'
        ],
        vi: [
          'Hồi nhỏ, Raúl là một cậu bé rất nhạy cảm và nhút nhát. Cậu đỏ mặt mỗi lần phải phát biểu trong lớp, và nếu có ai cười cậu, cậu sẽ im lặng hàng giờ liền. Không ai có thể tưởng tượng rằng một ngày nào đó cậu lại trở thành một trong những đầu bếp nổi tiếng nhất Valencia.',
          'Mọi chuyện bắt đầu năm mười tám tuổi, khi anh tìm được việc ở nhà hàng của một người chú. Ở đó anh phát hiện ra niềm đam mê của mình: nấu ăn. Anh làm việc mười bốn tiếng mỗi ngày và dần dần trở thành chuyên gia về các món cơm. Khách hàng nói rằng món paella của anh ngon hơn bất cứ nơi nào. Năm ba mươi tuổi, anh mở nhà hàng riêng, và chẳng bao lâu nó đã trở thành một trong những nhà hàng đông khách nhất thành phố.',
          'Tuy nhiên, thành công không phải lúc nào cũng tốt cho tính cách. Raúl trở nên tham vọng, bướng bỉnh và khá ích kỷ. Anh không còn lắng nghe nhân viên và nổi giận vì bất kỳ lỗi nhỏ nào. Một số đầu bếp đã bỏ đi và, sau một bài phê bình tệ trên báo, anh gần như không còn khách. Cuối cùng anh phải đóng cửa nhà hàng.',
          'Giờ đây Raúl nói rằng cuộc khủng hoảng đó là điều tốt nhất từng xảy đến với anh. «Tôi nhận ra mình đã biến thành một người mà chính tôi cũng không ưa», anh kể. Bây giờ anh là một người chín chắn và hào phóng hơn: anh dạy nấu ăn miễn phí cho những thanh niên có hoàn cảnh khó khăn và rất tự hào về học trò của mình. «Ai cũng có khuyết điểm», anh nói, «nhưng không bao giờ là quá muộn để thay đổi».'
        ],
        questions: [
          { q: 'Hồi nhỏ, Raúl là đứa trẻ như thế nào?', options: ['Ích kỷ và bướng bỉnh', 'Nhạy cảm và nhút nhát', 'Tham vọng và tự tin', 'Hào phóng và hay nói'], answer: 1,
            explain: 'Era un niño muy sensible y tímido.' },
          { q: 'Raúl trở thành chuyên gia về các món cơm bằng cách nào?', options: ['Học ở một trường dạy nấu ăn nổi tiếng', 'Đọc sách của các đầu bếp nổi tiếng', 'Làm việc rất nhiều giờ mỗi ngày ở nhà hàng của chú', 'Đi du lịch khắp Tây Ban Nha'], answer: 2,
            explain: 'Trabajaba catorce horas al día y poco a poco se hizo un experto en arroces.' },
          { q: 'Vì sao Raúl phải đóng cửa nhà hàng?', options: ['Anh trở nên ích kỷ, nhân viên bỏ đi và sau một bài phê bình tệ thì gần như hết khách', 'Anh bị ốm nặng', 'Người chú lấy lại nhà hàng', 'Anh muốn chuyển đến thành phố khác'], answer: 0,
            explain: 'Raúl se volvió ambicioso, terco y bastante egoísta… Varios cocineros se marcharon y, tras una mala crítica en el periódico, se quedó casi sin clientes.' },
          { q: 'Hiện nay Raúl làm gì?', options: ['Mở một nhà hàng mới lớn hơn', 'Viết bài phê bình ẩm thực cho báo', 'Không còn nấu ăn nữa', 'Dạy nấu ăn miễn phí cho thanh niên khó khăn'], answer: 3,
            explain: 'Da clases de cocina gratuitas a jóvenes sin recursos.' }
        ]
      }
    }
  },
  {
    after: 'es-b2-5',
    unit: {
      id: 'es-b2-5b',
      icon: '🔑',
      title: 'Tìm nhà, tìm người',
      goal: 'Đọc và viết tin rao thuê nhà, mô tả căn hộ hay người mà bạn đang tìm, và dùng subjuntivo trong mệnh đề quan hệ khi đối tượng chưa xác định hoặc không tồn tại.',
      vocab: [
        { w: 'el alquiler', ipa: 'êl al-ki-LÊR', vi: 'tiền thuê nhà; việc thuê', ex: 'El alquiler es de 700 euros al mes, sin gastos.', exVi: 'Tiền thuê là 700 euro mỗi tháng, chưa tính chi phí điện nước.' },
        { w: 'alquilar', ipa: 'al-ki-LAR', vi: 'thuê; cho thuê', ex: 'Buscamos a alguien que quiera alquilar la habitación pequeña.', exVi: 'Chúng tôi đang tìm người muốn thuê căn phòng nhỏ.' },
        { w: 'el anuncio', ipa: 'êl a-NUN-θi-ô', vi: 'tin rao, quảng cáo', ex: 'He visto un anuncio de un piso que parece perfecto.', exVi: 'Tôi thấy một tin rao về một căn hộ có vẻ hoàn hảo.' },
        { w: 'el inquilino / la inquilina', ipa: 'êl in-ki-LI-nô / la in-ki-LI-na', vi: 'người thuê nhà', ex: 'El propietario busca inquilinos que sean responsables.', exVi: 'Chủ nhà tìm người thuê có trách nhiệm.' },
        { w: 'el propietario / la propietaria', ipa: 'êl prô-pi-ê-TA-ri-ô / la prô-pi-ê-TA-ri-a', vi: 'chủ nhà, chủ sở hữu', ex: 'La propietaria vive en el piso de abajo.', exVi: 'Bà chủ nhà sống ở tầng dưới.' },
        { w: 'el piso compartido', ipa: 'êl PI-xô côm-par-TI-đô', vi: 'căn hộ ở ghép', ex: 'Busco un piso compartido que esté cerca de la universidad.', exVi: 'Tôi tìm một căn hộ ở ghép gần trường đại học.' },
        { w: 'amueblado / amueblada', ipa: 'a-muê-BLA-đô / a-muê-BLA-đa', vi: 'có sẵn đồ đạc, nội thất', ex: 'Prefiero un piso amueblado porque no tengo muebles.', exVi: 'Tôi thích căn hộ có sẵn nội thất vì tôi không có đồ đạc gì.' },
        { w: 'luminoso / luminosa', ipa: 'lu-mi-NÔ-xô / lu-mi-NÔ-xa', vi: 'sáng sủa, nhiều ánh sáng', ex: 'Es un salón muy luminoso, con dos ventanas grandes.', exVi: 'Đó là một phòng khách rất sáng sủa, có hai cửa sổ lớn.' },
        { w: 'la fianza', ipa: 'la phi-AN-θa', vi: 'tiền đặt cọc', ex: 'Hay que pagar un mes de fianza al firmar el contrato.', exVi: 'Khi ký hợp đồng phải trả một tháng tiền cọc.' },
        { w: 'la terraza', ipa: 'la tê-RRA-θa', vi: 'sân thượng, ban công rộng', ex: 'Busco un piso que tenga terraza para poner plantas.', exVi: 'Tôi tìm một căn hộ có sân thượng để đặt cây cảnh.' },
        { w: 'la calefacción', ipa: 'la ca-lê-phac-θi-ÔN', vi: 'hệ thống sưởi', ex: 'En invierno el piso es muy frío porque no tiene calefacción.', exVi: 'Mùa đông căn hộ rất lạnh vì không có hệ thống sưởi.' },
        { w: 'los gastos', ipa: 'lôs GAS-tôs', vi: 'chi phí (điện, nước, ga…)', ex: 'Los gastos de luz, agua y gas se pagan aparte.', exVi: 'Tiền điện, nước và ga trả riêng.' },
        { w: 'incluido / incluida', ipa: 'in-CLUI-đô / in-CLUI-đa', vi: 'đã bao gồm', ex: 'El precio es de 450 euros con internet incluido.', exVi: 'Giá là 450 euro, đã bao gồm internet.' },
        { w: 'el metro cuadrado', ipa: 'êl MÊ-trô coa-ĐRA-đô', vi: 'mét vuông', ex: 'El piso tiene ochenta metros cuadrados y dos dormitorios.', exVi: 'Căn hộ rộng tám mươi mét vuông và có hai phòng ngủ.' },
        { w: 'céntrico / céntrica', ipa: 'θÊN-tri-cô / θÊN-tri-ca', vi: 'ở trung tâm, gần trung tâm', ex: 'Queremos vivir en una zona céntrica donde no haga falta el coche.', exVi: 'Chúng tôi muốn sống ở khu trung tâm, nơi không cần đến ô tô.' },
        { w: 'el ático', ipa: 'êl A-ti-cô', vi: 'căn hộ tầng áp mái (tầng trên cùng)', ex: 'Viven en un ático con unas vistas preciosas de la ciudad.', exVi: 'Họ sống trong một căn hộ tầng trên cùng, nhìn ra toàn cảnh thành phố tuyệt đẹp.' },
        { w: 'disponible', ipa: 'đis-pô-NI-blê', vi: 'còn trống, sẵn có', ex: 'La habitación está disponible a partir del 1 de marzo.', exVi: 'Phòng còn trống từ ngày 1 tháng Ba.' },
        { w: 'exigir', ipa: 'êc-xi-KHIR', vi: 'đòi hỏi, yêu cầu', ex: 'Muchos propietarios exigen un contrato de trabajo fijo.', exVi: 'Nhiều chủ nhà đòi hỏi phải có hợp đồng lao động dài hạn.' },
        { w: 'la mudanza', ipa: 'la mu-ĐAN-θa', vi: 'việc chuyển nhà', ex: '¿Hay alguien que pueda ayudarme con la mudanza el sábado?', exVi: 'Có ai có thể giúp tôi chuyển nhà vào thứ Bảy không?' },
        { w: 'el fumador / la fumadora', ipa: 'êl phu-ma-ĐÔR / la phu-ma-ĐÔ-ra', vi: 'người hút thuốc', ex: 'Buscamos una compañera que no sea fumadora.', exVi: 'Chúng tôi tìm một bạn nữ ở cùng không hút thuốc.' }
      ],
      grammar: {
        title: 'Subjuntivo trong mệnh đề quan hệ',
        explain: [
          'Ở bài trước, mệnh đề quan hệ dùng indicativo vì ta nói về người hay vật có thật, đã xác định: Tengo un piso que tiene terraza (căn hộ này có thật, tôi biết nó). Khi tiền ngữ (danh từ đứng trước que) chưa xác định — ta đang tìm, đang cần, chưa biết nó có tồn tại hay không — động từ trong mệnh đề quan hệ chuyển sang subjuntivo: Busco un piso que tenga terraza (căn nào cũng được, miễn là có sân thượng).',
          'Trường hợp này hay đi sau buscar, necesitar, querer, preferir và các câu hỏi về sự tồn tại: Necesitamos un camarero que hable inglés. ¿Conoces a alguien que hable chino? ¿Hay algún piso que tenga ascensor? Lưu ý: người chưa xác định thường không cần a (Busco un profesor que…), nhưng alguien và nadie luôn có a (¿Conoces a alguien…?).',
          'Khi tiền ngữ bị phủ định, tức là không tồn tại, cũng dùng subjuntivo: No hay nadie que sepa la respuesta. No conozco ningún restaurante que abra a esta hora. Aquí no hay nada que me guste.',
          'Lo que, donde, el que / la que + subjuntivo mang nghĩa "bất cứ điều gì / nơi nào / cái nào", chưa xác định: Haz lo que quieras. Iremos donde digas. Elige el que más te guste. So sánh: Siempre hago lo que quiero (những việc cụ thể, theo thói quen) với Haz lo que quieras (bất cứ việc gì cậu muốn). Khi kể về quá khứ, dùng imperfecto de subjuntivo: Buscaba un piso que tuviera terraza.'
        ],
        table: [
          ['Tiền ngữ', 'Thức', 'Ví dụ'],
          ['xác định, có thật', 'indicativo', 'Tengo un piso que tiene terraza.'],
          ['chưa xác định (tìm, cần, muốn)', 'subjuntivo', 'Busco un piso que tenga terraza.'],
          ['hỏi xem có tồn tại không', 'subjuntivo', '¿Conoces a alguien que hable chino?'],
          ['phủ định (nadie, nada, ningún…)', 'subjuntivo', 'No hay nadie que sepa cocinar.'],
          ['lo que / donde / el que chưa xác định', 'subjuntivo', 'Haz lo que quieras. / Iremos donde digas.'],
          ['chưa xác định, trong quá khứ', 'imperfecto de subjuntivo', 'Buscaba un piso que tuviera terraza.']
        ],
        examples: [
          { t: 'Buscamos una compañera de piso que sea ordenada y no fume.', vi: 'Chúng tôi tìm một bạn nữ ở cùng nhà gọn gàng và không hút thuốc.' },
          { t: '¿Hay algún piso por aquí que tenga ascensor?', vi: 'Quanh đây có căn hộ nào có thang máy không?' },
          { t: 'No conozco ningún restaurante que abra a esta hora.', vi: 'Tôi không biết nhà hàng nào mở cửa vào giờ này.' },
          { t: 'Al final encontré un piso que tiene una terraza enorme.', vi: 'Cuối cùng tôi đã tìm được một căn hộ có sân thượng rất rộng.' },
          { t: 'Iremos donde digas y comeremos lo que quieras.', vi: 'Cậu bảo đi đâu thì mình đi đó, cậu muốn ăn gì thì ăn nấy.' }
        ],
        tip: 'Người Việt hay dịch thẳng "tôi tìm căn hộ có sân thượng" thành "Busco un piso que tiene terraza" ✗. Nếu căn hộ đó chưa xác định (căn nào cũng được) thì phải dùng subjuntivo: "Busco un piso que tenga terraza" ✓. Chỉ dùng indicativo khi đó là căn cụ thể bạn đã biết: "Busco el piso que tiene terraza, el del anuncio". Sau nadie, nada, ningún… luôn là subjuntivo: "No hay nadie que sabe" ✗ → "No hay nadie que sepa" ✓. 🌎 Mỹ Latinh: el departamento (= el piso), la renta (= el alquiler), rentar (= alquilar, nhất là ở México), el depósito (= la fianza).'
      },
      dialogue: [
        { s: 'Irene', t: 'Dani, tenemos que encontrar a alguien que alquile la habitación de Marta antes de marzo.', vi: 'Dani, mình phải tìm được người thuê phòng của Marta trước tháng Ba.' },
        { s: 'Dani', t: 'Ya he puesto un anuncio: «Se busca compañero de piso que sea ordenado y que no sea fumador».', vi: 'Tớ đăng tin rồi: «Tìm bạn ở cùng nhà gọn gàng và không hút thuốc».' },
        { s: 'Irene', t: '¿Y has puesto que los gastos están incluidos en el alquiler?', vi: 'Thế cậu có ghi là chi phí điện nước đã bao gồm trong tiền thuê không?' },
        { s: 'Dani', t: 'Sí, y que la habitación es luminosa y está amueblada. Ya me han escrito tres personas.', vi: 'Có, và cả chuyện phòng sáng sủa, có sẵn đồ đạc nữa. Đã có ba người nhắn cho tớ rồi.' },
        { s: 'Irene', t: '¿Hay alguna que pueda venir a verla hoy?', vi: 'Có ai có thể đến xem phòng hôm nay không?' },
        { s: 'Dani', t: 'Hay una chica que puede venir a las seis. Los otros dos trabajan hasta tarde.', vi: 'Có một cô gái có thể đến lúc sáu giờ. Hai người kia làm việc đến tối.' },
        { s: 'Irene', t: 'Vale. Pero no quiero a nadie que ponga la música a todo volumen; ya tuvimos bastante con el último inquilino.', vi: 'Được. Nhưng tớ không muốn ai bật nhạc to hết cỡ đâu; với anh thuê phòng trước là khổ lắm rồi.' },
        { s: 'Dani', t: 'Tranquila. Cuando venga, pregúntale lo que quieras y luego decidimos juntos.', vi: 'Yên tâm. Khi cô ấy đến, cậu cứ hỏi gì tuỳ thích rồi sau đó mình cùng quyết định.' }
      ],
      exercises: [
        { type: 'mc', q: 'Busco un piso que ___ dos dormitorios y terraza.', options: ['tiene', 'tenga', 'tendrá', 'tuvo'], answer: 1,
          explain: 'Căn hộ chưa xác định (đang tìm, căn nào cũng được) → subjuntivo: tenga.' },
        { type: 'mc', q: 'Al final alquilé un piso que ___ una terraza enorme.', options: ['tenga', 'tuviera', 'tiene', 'tener'], answer: 2,
          explain: 'Căn hộ đã thuê là có thật, xác định → indicativo: tiene.' },
        { type: 'mc', q: 'En mi oficina no hay nadie que ___ hablar chino.', options: ['sabe', 'saber', 'sabrá', 'sepa'], answer: 3,
          explain: 'Tiền ngữ phủ định (nadie) → subjuntivo: sepa.' },
        { type: 'mc', q: 'Lo siento, no conozco a nadie que ___ coche.', options: ['tenga', 'tiene', 'tener', 'tenido'], answer: 0,
          explain: 'No conozco a nadie: người đó không tồn tại → subjuntivo: tenga.' },
        { type: 'mc', q: 'El dinero que pagas al firmar el contrato y que el propietario te devuelve al final se llama ___.', options: ['el alquiler', 'la fianza', 'los gastos', 'el anuncio'], answer: 1,
          explain: 'La fianza = tiền đặt cọc, được trả lại khi kết thúc hợp đồng.' },
        { type: 'mc', q: 'Un piso que ya tiene muebles es un piso ___.', options: ['luminoso', 'céntrico', 'amueblado', 'ruidoso'], answer: 2,
          explain: 'Amueblado = có sẵn đồ đạc, nội thất.' },
        { type: 'fill', q: 'Haz lo que ___; a mí me da igual. (querer)', answer: ['quieras'], hint: 'querer – subjuntivo, tú',
          explain: 'Lo que chưa xác định (bất cứ điều gì) → subjuntivo: quieras.' },
        { type: 'fill', q: 'Necesitamos un camarero que ___ inglés y francés. (hablar)', answer: ['hable'], hint: 'hablar – subjuntivo, él',
          explain: 'Người cần tìm chưa xác định → subjuntivo: hable.' },
        { type: 'fill', q: 'Buscaba un piso que ___ cerca de la playa, pero no encontré ninguno. (estar)', answer: ['estuviera', 'estuviese'], hint: 'estar – imperfecto de subjuntivo',
          explain: 'Tiền ngữ chưa xác định trong quá khứ → imperfecto de subjuntivo: estuviera / estuviese.' },
        { type: 'fill', q: 'Iremos ___ tú digas; conoces la ciudad mejor que yo.', answer: ['donde', 'adonde', 'a donde'], hint: 'nơi chốn',
          explain: 'Donde + subjuntivo = bất cứ nơi nào (cậu nói).' },
        { type: 'fill', q: 'La persona que paga por vivir en un piso que no es suyo es el ___.', answer: ['inquilino'], hint: 'người thuê nhà',
          explain: 'El inquilino = người thuê nhà; người cho thuê là el propietario.' },
        { type: 'order', vi: 'Chúng tôi tìm một bạn ở cùng nhà không hút thuốc.', words: ['piso', 'que', 'Buscamos', 'fume', 'compañero', 'no', 'un', 'de'],
          answer: 'Buscamos un compañero de piso que no fume' },
        { type: 'order', vi: 'Ở khu này không có căn hộ nào rẻ cả.', words: ['zona', 'ningún', 'que', 'No', 'barato', 'piso', 'hay', 'esta', 'sea', 'en'],
          answer: 'No hay ningún piso en esta zona que sea barato', alt: ['No hay ningún piso que sea barato en esta zona', 'en esta zona No hay ningún piso que sea barato'] },
        { type: 'order', vi: 'Cậu có biết ai cho thuê căn hộ có sẵn nội thất không?', words: ['alguien', 'piso', '¿Conoces', 'alquile', 'a', 'amueblado?', 'que', 'un'],
          answer: '¿Conoces a alguien que alquile un piso amueblado?' },
        { type: 'order', vi: 'Hãy chọn căn phòng cậu thích nhất.', words: ['te', 'habitación', 'Elige', 'más', 'que', 'la', 'guste'],
          answer: 'Elige la habitación que más te guste', alt: ['Elige la habitación que te guste más'] },
        { type: 'order', vi: 'Tôi có một căn hộ sáng sủa có sân thượng.', words: ['tiene', 'piso', 'Tengo', 'terraza', 'luminoso', 'un', 'que'],
          answer: 'Tengo un piso luminoso que tiene terraza' }
      ],
      reading: {
        title: 'Buscando piso en Madrid',
        titleVi: 'Đi tìm nhà ở Madrid',
        text: [
          'Cuando Lan llegó a Madrid para hacer un máster, pensaba que encontrar piso sería fácil. Se equivocaba. Durante semanas leyó cientos de anuncios en internet. Buscaba algo sencillo: una habitación que estuviera cerca de la universidad, que fuera luminosa y que no costara más de 500 euros al mes. Pero casi todos los pisos céntricos eran carísimos, y los baratos estaban lejísimos o eran muy ruidosos.',
          'Además, muchos propietarios exigían cosas imposibles para una estudiante extranjera: un contrato de trabajo fijo y dos meses de fianza. «Aquí no hay nadie que alquile a un estudiante sin trabajo», le dijo un señor por teléfono. Lan empezó a ponerse nerviosa: las clases empezaban dos semanas más tarde y ella todavía dormía en un hostal.',
          'Entonces una amiga le dio un consejo: «No busques un piso entero. Busca gente que ya viva junta y que necesite a alguien más». Lan escribió su propio anuncio: «Estudiante vietnamita, tranquila y ordenada, no fumadora, busca habitación en piso compartido. Puedo ayudar con lo que haga falta en casa». Al día siguiente ya tenía cinco mensajes.',
          'Hoy Lan vive con dos chicas españolas en un piso amueblado de noventa metros cuadrados, con calefacción y una pequeña terraza. Paga 450 euros al mes con todos los gastos incluidos. «Fue la mudanza más difícil de mi vida», dice, «pero al final encontré justo lo que buscaba».'
        ],
        vi: [
          'Khi Lan đến Madrid học thạc sĩ, cô nghĩ rằng tìm nhà sẽ dễ thôi. Cô đã nhầm. Suốt nhiều tuần, cô đọc hàng trăm tin rao trên mạng. Cô tìm một thứ đơn giản: một căn phòng gần trường, sáng sủa và không quá 500 euro mỗi tháng. Nhưng hầu hết các căn hộ ở trung tâm đều đắt cắt cổ, còn những căn rẻ thì ở rất xa hoặc rất ồn ào.',
          'Ngoài ra, nhiều chủ nhà còn đòi hỏi những thứ không thể với một sinh viên nước ngoài: hợp đồng lao động dài hạn và hai tháng tiền cọc. «Ở đây không ai cho sinh viên không có việc làm thuê nhà đâu», một người đàn ông nói với cô qua điện thoại. Lan bắt đầu lo lắng: hai tuần nữa là vào học mà cô vẫn còn ngủ ở nhà nghỉ.',
          'Lúc đó, một người bạn khuyên cô: «Đừng tìm nguyên căn hộ. Hãy tìm những người đang sống chung và cần thêm một người nữa». Lan tự viết tin rao của mình: «Sinh viên Việt Nam, điềm tĩnh và gọn gàng, không hút thuốc, tìm phòng trong căn hộ ở chung. Tôi có thể giúp mọi việc cần thiết trong nhà». Ngay hôm sau cô đã nhận được năm tin nhắn.',
          'Giờ đây Lan sống cùng hai cô gái Tây Ban Nha trong một căn hộ có sẵn nội thất rộng chín mươi mét vuông, có hệ thống sưởi và một sân thượng nhỏ. Cô trả 450 euro mỗi tháng, đã bao gồm mọi chi phí. «Đó là lần chuyển nhà vất vả nhất đời tôi», cô nói, «nhưng cuối cùng tôi đã tìm được đúng thứ mình cần».'
        ],
        questions: [
          { q: 'Lúc đầu Lan tìm loại phòng như thế nào?', options: ['Phòng rộng có sân thượng ở ngoại ô', 'Phòng gần trường, sáng sủa, không quá 500 euro mỗi tháng', 'Căn hộ có sẵn nội thất cho cả gia đình', 'Phòng giá rẻ gần nơi làm việc'], answer: 1,
            explain: 'Una habitación que estuviera cerca de la universidad, que fuera luminosa y que no costara más de 500 euros al mes.' },
          { q: 'Theo người đàn ông nói chuyện qua điện thoại, khó khăn của Lan là gì?', options: ['Cô ấy chưa nói giỏi tiếng Tây Ban Nha', 'Cô ấy nuôi thú cưng', 'Cô ấy hút thuốc', 'Không ai cho sinh viên không có việc làm thuê nhà'], answer: 3,
            explain: '«Aquí no hay nadie que alquile a un estudiante sin trabajo».' },
          { q: 'Người bạn khuyên Lan điều gì?', options: ['Tìm những người đang sống chung và cần thêm một người', 'Quay về Việt Nam', 'Ở nhà nghỉ thêm một tháng', 'Thuê nguyên một căn hộ nhỏ'], answer: 0,
            explain: '«No busques un piso entero. Busca gente que ya viva junta y que necesite a alguien más».' },
          { q: 'Câu nào đúng về căn hộ hiện tại của Lan?', options: ['Cô ấy sống một mình', 'Tiền thuê chưa gồm điện nước', 'Căn hộ có sẵn nội thất và giá đã gồm mọi chi phí', 'Căn hộ không có hệ thống sưởi'], answer: 2,
            explain: 'Un piso amueblado… Paga 450 euros al mes con todos los gastos incluidos.' }
        ]
      }
    }
  }
];
