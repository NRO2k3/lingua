// Tiếng Tây Ban Nha — Trung cấp (B1, B2)
addLevels('es', [
  {
    id: 'B1',
    title: 'Trung cấp 1',
    desc: 'Kể về trải nghiệm, công việc, sức khoẻ và chuyện đã qua; dùng por/para, cho lời khuyên lịch sự, so sánh, nêu ý kiến, nói về điều kiện và dự định với subjuntivo.',
    units: [
      // ───────────────────────── B1-1 ─────────────────────────
      {
        id: 'es-b1-1',
        icon: '✈️',
        title: 'Du lịch',
        goal: 'Kể về những chuyến đi và trải nghiệm đã có, hỏi ai đó đã làm gì chưa bằng pretérito perfecto.',
        vocab: [
          { w: 'el pasaporte', ipa: 'êl pa-xa-PÔR-tê', vi: 'hộ chiếu', ex: 'Todavía no he renovado el pasaporte.', exVi: 'Tôi vẫn chưa gia hạn hộ chiếu.' },
          { w: 'el equipaje', ipa: 'êl ê-ki-PA-khê', vi: 'hành lý', ex: '¿Has facturado ya el equipaje?', exVi: 'Bạn đã ký gửi hành lý chưa?' },
          { w: 'el vuelo', ipa: 'êl BUÊ-lô', vi: 'chuyến bay', ex: 'El vuelo ha llegado con retraso.', exVi: 'Chuyến bay đã đến trễ.' },
          { w: 'el alojamiento', ipa: 'êl a-lô-kha-mi-ÊN-tô', vi: 'chỗ ở (khi du lịch)', ex: 'Hemos reservado el alojamiento por internet.', exVi: 'Chúng tôi đã đặt chỗ ở qua mạng.' },
          { w: 'la reserva', ipa: 'la rrê-XÊR-ba', vi: 'sự đặt chỗ, đặt phòng', ex: 'He hecho la reserva para dos noches.', exVi: 'Tôi đã đặt phòng cho hai đêm.' },
          { w: 'facturar', ipa: 'phac-tu-RAR', vi: 'ký gửi (hành lý)', ex: 'Tenemos que facturar dos maletas.', exVi: 'Chúng tôi phải ký gửi hai va li.' },
          { w: 'el destino', ipa: 'êl đês-TI-nô', vi: 'điểm đến', ex: 'Este año hemos elegido un destino tranquilo.', exVi: 'Năm nay chúng tôi đã chọn một điểm đến yên tĩnh.' },
          { w: 'recorrer', ipa: 'rrê-cô-RRÊR', vi: 'đi khắp, đi một vòng', ex: 'Hemos recorrido todo el centro a pie.', exVi: 'Chúng tôi đã đi bộ khắp trung tâm.' },
          { w: 'el recuerdo', ipa: 'êl rrê-QUÊR-đô', vi: 'quà lưu niệm; kỷ niệm', ex: 'He comprado un recuerdo para mi madre.', exVi: 'Tôi đã mua một món quà lưu niệm cho mẹ.' },
          { w: 'alguna vez', ipa: 'al-GU-na bêθ', vi: 'đã bao giờ, đã từng', ex: '¿Has estado alguna vez en Sevilla?', exVi: 'Bạn đã bao giờ đến Sevilla chưa?' }
        ],
        grammar: {
          title: 'Pretérito perfecto: haber + participio',
          explain: [
            'Pretérito perfecto (thì hiện tại hoàn thành) dùng để nói về việc đã xảy ra trong một khoảng thời gian chưa kết thúc (hoy, esta semana, este año) hoặc về trải nghiệm trong đời (alguna vez, nunca).',
            'Cách tạo: động từ haber chia theo chủ ngữ (he, has, ha, hemos, habéis, han) + participio. Participio: -ar → -ado (viajar → viajado), -er/-ir → -ido (comer → comido, salir → salido).',
            'Một số participio bất quy tắc hay gặp: hacer → hecho, ver → visto, escribir → escrito, decir → dicho, volver → vuelto, poner → puesto, abrir → abierto, romper → roto.',
            'Ya = rồi (đã xong); todavía no = vẫn chưa. Ví dụ: Ya he comido. / Todavía no he comido.'
          ],
          table: [
            ['Chủ ngữ', 'haber', 'Ví dụ'],
            ['yo', 'he', 'He viajado mucho.'],
            ['tú', 'has', '¿Has comido?'],
            ['él / ella / usted', 'ha', 'Ha salido.'],
            ['nosotros/as', 'hemos', 'Hemos llegado.'],
            ['vosotros/as', 'habéis', '¿Habéis visto el mar?'],
            ['ellos / ellas / ustedes', 'han', 'Han vuelto hoy.']
          ],
          examples: [
            { t: 'Esta semana he visitado tres museos.', vi: 'Tuần này tôi đã tham quan ba bảo tàng.' },
            { t: '¿Habéis estado alguna vez en Granada?', vi: 'Các bạn đã bao giờ đến Granada chưa?' },
            { t: 'Ya hemos hecho la reserva del hotel.', vi: 'Chúng tôi đã đặt khách sạn rồi.' },
            { t: 'Todavía no he visto la catedral.', vi: 'Tôi vẫn chưa xem nhà thờ lớn.' },
            { t: 'Nunca he viajado en barco.', vi: 'Tôi chưa bao giờ đi tàu thuỷ.' }
          ],
          tip: 'Không được tách haber và participio: nói "Ya lo he hecho", không nói "He ya hecho". Đại từ (lo, la, me, te...) đứng trước haber. Participio sau haber luôn giữ nguyên đuôi -o.'
        },
        dialogue: [
          { s: 'Lucía', t: '¿Has hecho ya la maleta?', vi: 'Anh đã xếp va li chưa?' },
          { s: 'Marcos', t: 'Sí, ya la he hecho. Pero todavía no he encontrado el pasaporte.', vi: 'Rồi, anh xếp rồi. Nhưng anh vẫn chưa tìm thấy hộ chiếu.' },
          { s: 'Lucía', t: '¡Madre mía! ¿Has mirado en el cajón de la mesa?', vi: 'Trời ơi! Anh đã tìm trong ngăn bàn chưa?' },
          { s: 'Marcos', t: 'Espera... ¡Sí, aquí está! Lo he encontrado.', vi: 'Đợi chút... A, đây rồi! Anh tìm thấy rồi.' },
          { s: 'Lucía', t: 'Menos mal. Oye, ¿has estado alguna vez en Lisboa?', vi: 'May quá. Này, anh đã bao giờ đến Lisboa chưa?' },
          { s: 'Marcos', t: 'No, nunca he estado allí. Este año he viajado muy poco.', vi: 'Chưa, anh chưa bao giờ đến đó. Năm nay anh đi du lịch rất ít.' }
        ],
        exercises: [
          { type: 'mc', q: 'Nosotros ___ visitado el museo esta mañana.', options: ['hemos', 'habemos', 'han'], answer: 0, explain: 'Nosotros đi với hemos. "Habemos" không dùng trong thì này.' },
          { type: 'mc', q: 'Participio của động từ "ver" là:', options: ['vido', 'visto', 'veído'], answer: 1, explain: 'Ver có participio bất quy tắc: visto.' },
          { type: 'fill', q: '¿___ estado alguna vez en México? (tú)', answer: ['has'], hint: 'haber, ngôi tú', explain: 'Tú đi với has: ¿Has estado...?' },
          { type: 'fill', q: 'Todavía no he ___ la reserva. (hacer)', answer: ['hecho'], hint: 'participio bất quy tắc', explain: 'Hacer → hecho.' },
          { type: 'mc', q: 'Chọn câu có nghĩa "Tôi vẫn chưa ký gửi hành lý."', options: ['Ya he facturado el equipaje.', 'Todavía no he facturado el equipaje.', 'No he todavía facturado el equipaje.'], answer: 1, explain: 'Todavía no đứng trước haber; không chen vào giữa haber và participio.' },
          { type: 'order', vi: 'Bạn đã bao giờ đến Sevilla chưa?', words: ['alguna', '¿Has', 'Sevilla?', 'estado', 'en', 'vez'], answer: '¿Has estado alguna vez en Sevilla?', alt: ['¿Has estado en Sevilla? alguna vez'] },
          { type: 'order', vi: 'Chúng tôi đã đi khắp trung tâm thành phố.', words: ['el', 'ciudad', 'recorrido', 'de', 'Hemos', 'la', 'centro'], answer: 'Hemos recorrido el centro de la ciudad' },
          { type: 'fill', q: 'Ellos ___ vuelto del viaje hoy.', answer: ['han'], hint: 'haber, ngôi ellos', explain: 'Ellos đi với han; volver → vuelto.' }
        ]
      },
      // ───────────────────────── B1-2 ─────────────────────────
      {
        id: 'es-b1-2',
        icon: '💼',
        title: 'Công việc & phỏng vấn',
        goal: 'Nói về kinh nghiệm làm việc, trả lời phỏng vấn và phân biệt pretérito perfecto với indefinido.',
        vocab: [
          { w: 'la entrevista', ipa: 'la ên-trê-BIS-ta', vi: 'buổi phỏng vấn', ex: 'Ayer tuve una entrevista de trabajo.', exVi: 'Hôm qua tôi có một buổi phỏng vấn xin việc.' },
          { w: 'el puesto', ipa: 'êl PUÊS-tô', vi: 'vị trí, chức vụ', ex: 'He solicitado el puesto de contable.', exVi: 'Tôi đã ứng tuyển vị trí kế toán.' },
          { w: 'la empresa', ipa: 'la êm-PRÊ-xa', vi: 'công ty', ex: 'Trabajé cinco años en una empresa alemana.', exVi: 'Tôi đã làm năm năm ở một công ty Đức.' },
          { w: 'el currículum', ipa: 'êl cu-RRI-cu-lum', vi: 'sơ yếu lý lịch (CV)', ex: 'Esta semana he enviado el currículum a tres empresas.', exVi: 'Tuần này tôi đã gửi CV cho ba công ty.' },
          { w: 'la experiencia', ipa: 'la êcs-pê-ri-ÊN-θi-a', vi: 'kinh nghiệm', ex: 'Tengo experiencia en ventas.', exVi: 'Tôi có kinh nghiệm bán hàng.' },
          { w: 'el sueldo', ipa: 'êl XUÊL-đô', vi: 'tiền lương', ex: 'El sueldo es bueno, pero el horario es largo.', exVi: 'Lương thì tốt, nhưng giờ làm dài.' },
          { w: 'contratar', ipa: 'côn-tra-TAR', vi: 'tuyển dụng, thuê', ex: 'La empresa contrató a diez personas el año pasado.', exVi: 'Năm ngoái công ty đã tuyển mười người.' },
          { w: 'el jefe', ipa: 'êl KHÊ-phê', vi: 'sếp', ex: 'Mi jefe me ha felicitado hoy.', exVi: 'Hôm nay sếp đã khen tôi.' },
          { w: 'la reunión', ipa: 'la rrêu-ni-ÔN', vi: 'cuộc họp', ex: 'La reunión de esta mañana ha sido muy larga.', exVi: 'Cuộc họp sáng nay rất dài.' },
          { w: 'el plazo', ipa: 'êl PLA-θô', vi: 'thời hạn', ex: 'El plazo terminó el viernes pasado.', exVi: 'Thời hạn đã kết thúc vào thứ Sáu tuần trước.' }
        ],
        grammar: {
          title: 'Pretérito perfecto hay pretérito indefinido?',
          explain: [
            'Ở Tây Ban Nha, hai thì này đều nói về quá khứ nhưng khác nhau ở mốc thời gian. Pretérito perfecto (he trabajado) dùng khi khoảng thời gian vẫn còn liên quan đến hiện tại: hoy, esta mañana, esta semana, este año, ya, todavía no, nunca, alguna vez.',
            'Pretérito indefinido (trabajé) dùng khi khoảng thời gian đã kết thúc hẳn: ayer, anoche, la semana pasada, el año pasado, en 2019, hace dos años.',
            'Đuôi indefinido: -ar: -é, -aste, -ó, -amos, -asteis, -aron (trabajé, trabajaste, trabajó...). -er/-ir: -í, -iste, -ió, -imos, -isteis, -ieron (viví, viviste, vivió...). Bất quy tắc hay gặp: tener → tuve, hacer → hice, ser/ir → fui, estar → estuve.'
          ],
          table: [
            ['Thì', 'Mốc thời gian đi kèm', 'Ví dụ'],
            ['Pretérito perfecto', 'hoy, esta semana, este año, ya, nunca', 'Hoy he tenido una entrevista.'],
            ['Pretérito indefinido', 'ayer, la semana pasada, en 2019, hace dos años', 'Ayer tuve una entrevista.']
          ],
          examples: [
            { t: 'Este año he cambiado de trabajo dos veces.', vi: 'Năm nay tôi đã đổi việc hai lần.' },
            { t: 'En 2020 empecé a trabajar en una empresa de software.', vi: 'Năm 2020 tôi bắt đầu làm việc ở một công ty phần mềm.' },
            { t: '¿Ya has hablado con el jefe?', vi: 'Bạn đã nói chuyện với sếp chưa?' },
            { t: 'Hace dos años trabajé como camarero en Londres.', vi: 'Hai năm trước tôi làm bồi bàn ở London.' }
          ],
          tip: 'Ở nhiều nước Mỹ Latinh, người ta dùng indefinido cả khi nói "hôm nay" (Hoy trabajé mucho). Nhưng theo chuẩn Tây Ban Nha, hãy dùng perfecto với hoy, esta semana, este año.'
        },
        dialogue: [
          { s: 'Entrevistadora', t: 'Buenos días. ¿Ha trabajado usted antes en este sector?', vi: 'Chào anh. Anh đã từng làm việc trong lĩnh vực này chưa?' },
          { s: 'Pablo', t: 'Sí. Trabajé tres años en una empresa de marketing en Valencia.', vi: 'Có ạ. Tôi đã làm ba năm ở một công ty marketing tại Valencia.' },
          { s: 'Entrevistadora', t: '¿Y por qué dejó ese puesto?', vi: 'Vậy tại sao anh rời vị trí đó?' },
          { s: 'Pablo', t: 'Porque en 2022 me mudé a Madrid. Desde entonces he trabajado como autónomo.', vi: 'Vì năm 2022 tôi chuyển đến Madrid. Từ đó đến nay tôi làm tự do.' },
          { s: 'Entrevistadora', t: 'Muy bien. ¿Ha traído el currículum actualizado?', vi: 'Rất tốt. Anh có mang CV đã cập nhật không?' },
          { s: 'Pablo', t: 'Sí, aquí lo tiene. Lo he actualizado esta semana.', vi: 'Có ạ, đây ạ. Tôi đã cập nhật nó trong tuần này.' }
        ],
        exercises: [
          { type: 'mc', q: 'Ayer ___ una entrevista muy difícil.', options: ['he tenido', 'tuve', 'tengo'], answer: 1, explain: 'Ayer là thời gian đã kết thúc → indefinido: tuve.' },
          { type: 'mc', q: 'Esta mañana ya ___ con mi jefe.', options: ['hablo', 'he hablado', 'hablaré'], answer: 1, explain: 'Esta mañana (hôm nay) và ya → pretérito perfecto: he hablado.' },
          { type: 'fill', q: 'El año pasado la empresa ___ a cinco personas. (contratar)', answer: ['contrató'], hint: 'indefinido, ngôi él', explain: 'El año pasado → indefinido; ngôi 3 số ít đuôi -ó: contrató.' },
          { type: 'fill', q: 'Todavía no ___ enviado el currículum. (yo)', answer: ['he'], hint: 'haber', explain: 'Todavía no đi với pretérito perfecto: he enviado.' },
          { type: 'mc', q: 'Cụm từ nào đi với pretérito indefinido?', options: ['esta semana', 'hace dos años', 'todavía no'], answer: 1, explain: 'Hace dos años chỉ thời điểm đã kết thúc → indefinido.' },
          { type: 'order', vi: 'Tôi đã làm việc ở một công ty Đức vào năm 2019.', words: ['empresa', 'en', 'Trabajé', '2019', 'una', 'alemana', 'en'], answer: 'Trabajé en una empresa alemana en 2019', alt: ['en 2019 Trabajé en una empresa alemana'] },
          { type: 'order', vi: 'Hôm nay sếp đã khen tôi.', words: ['me', 'felicitado', 'Hoy', 'jefe', 'ha', 'mi'], answer: 'Hoy mi jefe me ha felicitado', alt: ['mi jefe me ha felicitado Hoy', 'Hoy me ha felicitado mi jefe'] },
          { type: 'mc', q: 'El plazo ___ el viernes pasado.', options: ['ha terminado', 'terminó', 'termina'], answer: 1, explain: 'El viernes pasado đã kết thúc → indefinido: terminó.' }
        ]
      },
      // ───────────────────────── B1-3 ─────────────────────────
      {
        id: 'es-b1-3',
        icon: '🩺',
        title: 'Sức khoẻ',
        goal: 'Mô tả chỗ đau, triệu chứng và đưa ra lời khuyên với doler, tener que, deber, hay que.',
        vocab: [
          { w: 'la cabeza', ipa: 'la ca-BÊ-θa', vi: 'đầu', ex: 'Me duele la cabeza desde ayer.', exVi: 'Tôi bị đau đầu từ hôm qua.' },
          { w: 'la garganta', ipa: 'la gar-GAN-ta', vi: 'họng', ex: 'Le duele la garganta y no puede hablar.', exVi: 'Cô ấy đau họng và không nói được.' },
          { w: 'la espalda', ipa: 'la ês-PAL-đa', vi: 'lưng', ex: 'Me duele la espalda por estar tanto tiempo sentado.', exVi: 'Tôi đau lưng vì ngồi quá lâu.' },
          { w: 'la fiebre', ipa: 'la phi-Ê-brê', vi: 'cơn sốt', ex: 'El niño tiene fiebre.', exVi: 'Đứa bé bị sốt.' },
          { w: 'la receta', ipa: 'la rrê-θÊ-ta', vi: 'đơn thuốc', ex: 'El médico me ha dado una receta.', exVi: 'Bác sĩ đã kê cho tôi một đơn thuốc.' },
          { w: 'el jarabe', ipa: 'êl kha-RA-bê', vi: 'siro thuốc', ex: 'Tienes que tomar el jarabe tres veces al día.', exVi: 'Bạn phải uống siro ba lần một ngày.' },
          { w: 'la tos', ipa: 'la tôs', vi: 'cơn ho, bệnh ho', ex: 'Tengo tos desde el lunes.', exVi: 'Tôi bị ho từ thứ Hai.' },
          { w: 'descansar', ipa: 'đês-can-XAR', vi: 'nghỉ ngơi', ex: 'Debes descansar unos días.', exVi: 'Bạn nên nghỉ ngơi vài ngày.' },
          { w: 'el centro de salud', ipa: 'êl θÊN-trô đê xa-LUĐ', vi: 'trạm y tế, phòng khám công', ex: 'He pedido cita en el centro de salud.', exVi: 'Tôi đã đặt lịch hẹn ở trạm y tế.' },
          { w: 'estar resfriado', ipa: 'ês-TAR rrês-phri-A-đô', vi: 'bị cảm lạnh', ex: 'Estoy resfriado y me duele todo el cuerpo.', exVi: 'Tôi bị cảm lạnh và đau khắp người.' }
        ],
        grammar: {
          title: 'Doler và cách nói bắt buộc: tener que / deber / hay que',
          explain: [
            'Doler (đau) hoạt động giống gustar: người bị đau là tân ngữ (me, te, le, nos, os, les), bộ phận cơ thể là chủ ngữ. Dùng duele với danh từ số ít, duelen với danh từ số nhiều: Me duele la cabeza. / Me duelen los pies.',
            'Với bộ phận cơ thể, tiếng Tây Ban Nha dùng mạo từ (la, el, los) chứ không dùng tính từ sở hữu: Me duele la espalda (không nói "mi espalda").',
            'Tener que + nguyên mẫu = phải (nghĩa vụ của một người cụ thể). Deber + nguyên mẫu = nên (lời khuyên, bổn phận). Hay que + nguyên mẫu = cần phải (nói chung, không chỉ ai cụ thể); hay que không đổi theo ngôi.'
          ],
          table: [
            ['Cấu trúc', 'Nghĩa', 'Ví dụ'],
            ['me duele + danh từ số ít', 'tôi bị đau ...', 'Me duele la cabeza.'],
            ['me duelen + danh từ số nhiều', 'tôi bị đau ... (nhiều chỗ)', 'Me duelen los pies.'],
            ['tener que + nguyên mẫu', 'phải', 'Tengo que ir al médico.'],
            ['deber + nguyên mẫu', 'nên', 'Debes descansar.'],
            ['hay que + nguyên mẫu', 'cần phải (nói chung)', 'Hay que beber mucha agua.']
          ],
          examples: [
            { t: 'A mi padre le duelen las rodillas.', vi: 'Bố tôi bị đau đầu gối.' },
            { t: 'Tienes que tomar esta pastilla después de comer.', vi: 'Bạn phải uống viên thuốc này sau khi ăn.' },
            { t: 'No debes trabajar si tienes fiebre.', vi: 'Bạn không nên làm việc nếu đang sốt.' },
            { t: 'Para estar sano, hay que dormir ocho horas.', vi: 'Để khoẻ mạnh, cần ngủ tám tiếng.' }
          ],
          tip: 'Người Việt hay nói "Mi cabeza duele" theo kiểu dịch từng chữ — sai. Hãy nói "Me duele la cabeza". Hay que không bao giờ đi kèm chủ ngữ: không nói "Yo hay que".'
        },
        dialogue: [
          { s: 'Médica', t: 'Buenos días. ¿Qué le pasa?', vi: 'Chào chị. Chị bị sao vậy?' },
          { s: 'Ana', t: 'Me duele mucho la garganta y tengo tos desde hace tres días.', vi: 'Tôi đau họng lắm và bị ho ba ngày nay rồi.' },
          { s: 'Médica', t: '¿Tiene fiebre?', vi: 'Chị có sốt không?' },
          { s: 'Ana', t: 'Sí, un poco. Y también me duelen los oídos.', vi: 'Có, hơi sốt. Và tôi cũng bị đau tai.' },
          { s: 'Médica', t: 'Está usted resfriada. Tiene que tomar este jarabe y debe descansar unos días.', vi: 'Chị bị cảm lạnh. Chị phải uống siro này và nên nghỉ ngơi vài ngày.' },
          { s: 'Ana', t: '¿Tengo que volver a la consulta?', vi: 'Tôi có phải quay lại khám không?' },
          { s: 'Médica', t: 'Solo si no mejora. Y recuerde: hay que beber mucha agua.', vi: 'Chỉ khi không đỡ thôi. Và nhớ nhé: cần uống nhiều nước.' }
        ],
        exercises: [
          { type: 'mc', q: 'Me ___ los pies después de caminar tanto.', options: ['duele', 'duelen', 'dolen'], answer: 1, explain: 'Los pies là số nhiều → duelen. Doler đổi o → ue.' },
          { type: 'mc', q: 'A mi madre ___ duele la espalda.', options: ['le', 'la', 'se'], answer: 0, explain: 'Người bị đau là tân ngữ gián tiếp: a mi madre → le.' },
          { type: 'fill', q: 'Tengo fiebre. ___ que ir al médico. (yo, tener)', answer: ['tengo'], hint: 'tener que', explain: 'Nghĩa vụ của một người cụ thể (yo) → tengo que.' },
          { type: 'fill', q: '___ que lavarse las manos antes de comer.', answer: ['hay'], hint: 'cần phải (nói chung)', explain: 'Lời khuyên chung cho mọi người → hay que.' },
          { type: 'mc', q: 'Chọn câu đúng: "Tôi bị đau đầu."', options: ['Mi cabeza duele.', 'Me duele la cabeza.', 'Me duelo la cabeza.'], answer: 1, explain: 'Cấu trúc giống gustar: me + duele + la cabeza.' },
          { type: 'order', vi: 'Bạn nên nghỉ ngơi vài ngày.', words: ['días', 'descansar', 'Debes', 'unos'], answer: 'Debes descansar unos días' },
          { type: 'order', vi: 'Chúng tôi bị đau lưng.', words: ['espalda', 'duele', 'la', 'Nos'], answer: 'Nos duele la espalda' },
          { type: 'fill', q: 'El médico dice que ___ tomar el jarabe tres veces al día. (tú, deber)', answer: ['debes'], hint: 'deber, ngôi tú', explain: 'Deber chia ngôi tú: debes.' }
        ]
      },
      // ───────────────────────── B1-4 ─────────────────────────
      {
        id: 'es-b1-4',
        icon: '📖',
        title: 'Kể chuyện',
        goal: 'Kể lại một câu chuyện trong quá khứ, phân biệt bối cảnh (imperfecto) và sự kiện (indefinido).',
        vocab: [
          { w: 'de repente', ipa: 'đê rrê-PÊN-tê', vi: 'đột nhiên', ex: 'De repente, se apagaron las luces.', exVi: 'Đột nhiên, đèn tắt hết.' },
          { w: 'mientras', ipa: 'mi-ÊN-tras', vi: 'trong khi', ex: 'Mientras cenábamos, sonó el teléfono.', exVi: 'Trong khi chúng tôi đang ăn tối thì điện thoại reo.' },
          { w: 'el bosque', ipa: 'êl BÔS-kê', vi: 'khu rừng', ex: 'Cuando era niño, jugaba en el bosque.', exVi: 'Hồi nhỏ, tôi hay chơi trong rừng.' },
          { w: 'la infancia', ipa: 'la in-PHAN-θi-a', vi: 'tuổi thơ', ex: 'Mi infancia fue muy feliz.', exVi: 'Tuổi thơ của tôi rất hạnh phúc.' },
          { w: 'soler', ipa: 'xô-LÊR', vi: 'thường hay (làm gì)', ex: 'De pequeño solía ir al pueblo de mis abuelos.', exVi: 'Hồi nhỏ tôi thường về làng của ông bà.' },
          { w: 'ocurrir', ipa: 'ô-cu-RRIR', vi: 'xảy ra', ex: '¿Qué ocurrió aquella noche?', exVi: 'Chuyện gì đã xảy ra đêm hôm đó?' },
          { w: 'asustarse', ipa: 'a-xus-TAR-xê', vi: 'hoảng sợ', ex: 'Me asusté mucho cuando oí el ruido.', exVi: 'Tôi rất hoảng sợ khi nghe thấy tiếng động.' },
          { w: 'el ruido', ipa: 'êl RRUI-đô', vi: 'tiếng động', ex: 'Oímos un ruido extraño en la cocina.', exVi: 'Chúng tôi nghe thấy một tiếng động lạ trong bếp.' },
          { w: 'la oscuridad', ipa: 'la ôs-cu-ri-ĐAĐ', vi: 'bóng tối', ex: 'No veíamos nada en la oscuridad.', exVi: 'Chúng tôi không nhìn thấy gì trong bóng tối.' },
          { w: 'al final', ipa: 'al phi-NAL', vi: 'cuối cùng', ex: 'Al final, todo salió bien.', exVi: 'Cuối cùng, mọi chuyện đều ổn.' }
        ],
        grammar: {
          title: 'Pretérito imperfecto và pretérito indefinido',
          explain: [
            'Imperfecto dùng để miêu tả bối cảnh (thời tiết, nơi chốn, cảm xúc, tuổi tác), thói quen trong quá khứ và hành động đang diễn ra. Đuôi: -ar: -aba, -abas, -aba, -ábamos, -abais, -aban; -er/-ir: -ía, -ías, -ía, -íamos, -íais, -ían.',
            'Chỉ có ba động từ bất quy tắc ở imperfecto: ser (era), ir (iba), ver (veía).',
            'Indefinido dùng cho sự kiện đã xảy ra và kết thúc, đặc biệt là hành động chen ngang vào một bối cảnh. Mẫu câu thường gặp: Mientras / Cuando + imperfecto, ... indefinido.'
          ],
          table: [
            ['', 'Imperfecto', 'Indefinido'],
            ['Dùng để', 'miêu tả bối cảnh, thói quen, việc đang diễn ra', 'sự kiện đã hoàn tất, hành động chen ngang'],
            ['Dấu hiệu', 'antes, siempre, de niño, mientras', 'ayer, de repente, una vez, al final'],
            ['Ví dụ', 'Llovía y hacía frío.', 'De repente, sonó el teléfono.']
          ],
          examples: [
            { t: 'Era de noche y hacía mucho frío.', vi: 'Lúc đó là ban đêm và trời rất lạnh.' },
            { t: 'Cuando vivía en Málaga, iba a la playa todos los días.', vi: 'Khi còn sống ở Málaga, ngày nào tôi cũng ra biển.' },
            { t: 'Mientras dormíamos, alguien entró en la casa.', vi: 'Trong khi chúng tôi đang ngủ, có người đã vào nhà.' },
            { t: 'Ayer fui al cine y vi una película de miedo.', vi: 'Hôm qua tôi đi xem phim và xem một phim kinh dị.' }
          ],
          tip: 'Hãy hình dung imperfecto là "phông nền" của câu chuyện, còn indefinido là các "sự kiện" diễn ra trên phông nền đó.'
        },
        dialogue: [
          { s: 'Javier', t: 'Ayer llegaste muy tarde a la cena. ¿Qué te pasó?', vi: 'Hôm qua cậu đến bữa tối muộn quá. Có chuyện gì vậy?' },
          { s: 'Carmen', t: 'Uf, una historia increíble. Volvía a casa por el parque y ya era de noche.', vi: 'Ôi, chuyện khó tin lắm. Tớ đang đi bộ qua công viên về nhà và trời đã tối.' },
          { s: 'Javier', t: '¿Y qué ocurrió?', vi: 'Rồi chuyện gì xảy ra?' },
          { s: 'Carmen', t: 'Mientras caminaba, oí un ruido detrás de mí. Me asusté muchísimo.', vi: 'Trong lúc tớ đang đi thì nghe thấy tiếng động phía sau. Tớ sợ cực kỳ.' },
          { s: 'Javier', t: '¿Era un ladrón?', vi: 'Là kẻ trộm à?' },
          { s: 'Carmen', t: '¡No! Era mi perro. Se escapó de casa y me siguió. Al final nos reímos mucho.', vi: 'Không! Là con chó của tớ. Nó trốn khỏi nhà và đi theo tớ. Cuối cùng bọn tớ cười rất nhiều.' }
        ],
        exercises: [
          { type: 'mc', q: 'Cuando era pequeño, ___ en el bosque con mis primos.', options: ['jugué', 'jugaba', 'juego'], answer: 1, explain: 'Thói quen trong quá khứ → imperfecto: jugaba.' },
          { type: 'mc', q: 'Mientras cenábamos, ___ el teléfono.', options: ['sonaba', 'sonó', 'suena'], answer: 1, explain: 'Hành động chen ngang vào bối cảnh → indefinido: sonó.' },
          { type: 'fill', q: 'De niña, ___ ir a la playa todos los veranos. (yo, soler)', answer: ['solía'], hint: 'imperfecto', explain: 'Thói quen trong quá khứ → imperfecto của soler: solía.' },
          { type: 'fill', q: 'Ayer ___ un ruido extraño en la cocina. (nosotros, oír)', answer: ['oímos'], hint: 'indefinido', explain: 'Sự kiện cụ thể hôm qua → indefinido: oímos.' },
          { type: 'mc', q: 'Câu nào miêu tả bối cảnh?', options: ['Hacía frío y llovía.', 'De repente, llegó la policía.', 'Al final, encontramos las llaves.'], answer: 0, explain: 'Thời tiết là bối cảnh → imperfecto: hacía, llovía.' },
          { type: 'order', vi: 'Khi còn nhỏ, tôi sống ở một ngôi làng.', words: ['pueblo', 'vivía', 'Cuando', 'un', 'niño,', 'era', 'en'], answer: 'Cuando era niño, vivía en un pueblo', alt: ['vivía en un pueblo Cuando era niño,'] },
          { type: 'order', vi: 'Đột nhiên, đèn tắt hết.', words: ['las', 'repente,', 'apagaron', 'De', 'luces', 'se'], answer: 'De repente, se apagaron las luces', alt: ['De repente, las luces se apagaron'] },
          { type: 'mc', q: '¿Qué ___ aquella noche?', options: ['ocurría', 'ocurrió', 'ocurre'], answer: 1, explain: 'Hỏi về một sự kiện cụ thể đã xảy ra → indefinido: ocurrió.' }
        ]
      },
      // ───────────────────────── B1-5 ─────────────────────────
      {
        id: 'es-b1-5',
        icon: '⚖️',
        title: 'Ý kiến & so sánh',
        goal: 'So sánh người, vật, nơi chốn và nêu ý kiến cá nhân với creo que, me parece que.',
        vocab: [
          { w: 'la ventaja', ipa: 'la bên-TA-kha', vi: 'ưu điểm', ex: 'La principal ventaja del tren es la comodidad.', exVi: 'Ưu điểm chính của tàu hoả là sự thoải mái.' },
          { w: 'el inconveniente', ipa: 'êl in-côn-bê-ni-ÊN-tê', vi: 'nhược điểm, điều bất tiện', ex: 'El único inconveniente es el precio.', exVi: 'Nhược điểm duy nhất là giá cả.' },
          { w: 'económico / económica', ipa: 'ê-cô-NÔ-mi-cô / ê-cô-NÔ-mi-ca', vi: 'tiết kiệm, giá phải chăng', ex: 'El autobús es más económico que el tren.', exVi: 'Đi xe buýt tiết kiệm hơn tàu hoả.' },
          { w: 'ruidoso / ruidosa', ipa: 'rrui-ĐÔ-xô / rrui-ĐÔ-xa', vi: 'ồn ào', ex: 'El centro es más ruidoso que mi barrio.', exVi: 'Trung tâm ồn ào hơn khu tôi ở.' },
          { w: 'cómodo', ipa: 'CÔ-mô-đô', vi: 'thoải mái, tiện lợi', ex: 'Este sofá es el más cómodo de la tienda.', exVi: 'Chiếc sofa này thoải mái nhất cửa hàng.' },
          { w: 'la ciudad', ipa: 'la θi-u-ĐAĐ', vi: 'thành phố', ex: 'Madrid es la ciudad más grande de España.', exVi: 'Madrid là thành phố lớn nhất Tây Ban Nha.' },
          { w: 'el campo', ipa: 'êl CAM-pô', vi: 'nông thôn', ex: 'La vida en el campo es más tranquila.', exVi: 'Cuộc sống ở nông thôn yên bình hơn.' },
          { w: 'mejor', ipa: 'mê-KHÔR', vi: 'tốt hơn', ex: 'Creo que esta opción es mejor.', exVi: 'Tôi nghĩ là lựa chọn này tốt hơn.' },
          { w: 'peor', ipa: 'pê-ÔR', vi: 'tệ hơn', ex: 'Hoy el tráfico está peor que ayer.', exVi: 'Hôm nay giao thông tệ hơn hôm qua.' },
          { w: 'estar de acuerdo', ipa: 'ês-TAR đê a-QUÊR-đô', vi: 'đồng ý', ex: 'No estoy de acuerdo contigo.', exVi: 'Tôi không đồng ý với bạn.' }
        ],
        grammar: {
          title: 'So sánh và nêu ý kiến',
          explain: [
            'So sánh hơn/kém: más / menos + tính từ + que. So sánh bằng: tan + tính từ + como; với danh từ dùng tanto/tanta/tantos/tantas + danh từ + como (tantas oportunidades como).',
            'So sánh nhất: el / la / los / las + (danh từ) + más + tính từ + de: la ciudad más bonita de España.',
            'Dạng bất quy tắc: bueno → mejor, malo → peor, grande → mayor (về tuổi), pequeño → menor (về tuổi).',
            'Nêu ý kiến: Creo que / Pienso que / Me parece que + mệnh đề (thì chỉ định). Ví dụ: Me parece que es demasiado caro.'
          ],
          table: [
            ['Cấu trúc', 'Nghĩa', 'Ví dụ'],
            ['más + tính từ + que', '... hơn', 'El tren es más rápido que el autobús.'],
            ['menos + tính từ + que', 'kém ... hơn', 'El campo es menos ruidoso que la ciudad.'],
            ['tan + tính từ + como', '... bằng', 'Ana es tan alta como su hermano.'],
            ['el/la más + tính từ + de', '... nhất', 'Es la playa más bonita de la isla.'],
            ['creo que / me parece que', 'tôi nghĩ là / tôi thấy là', 'Creo que es mejor ir en tren.']
          ],
          examples: [
            { t: 'Mi hermana es mayor que yo.', vi: 'Chị tôi lớn tuổi hơn tôi.' },
            { t: 'Este hotel es menos caro que el del centro.', vi: 'Khách sạn này rẻ hơn khách sạn ở trung tâm.' },
            { t: 'En el campo no hay tanto tráfico como en la ciudad.', vi: 'Ở nông thôn không có nhiều xe cộ như ở thành phố.' },
            { t: 'Me parece que es el restaurante más caro del barrio.', vi: 'Tôi thấy đó là nhà hàng đắt nhất khu phố.' }
          ],
          tip: 'Không nói "más bueno", "más malo" khi so sánh chất lượng — dùng mejor, peor. Lưu ý: "No creo que..." (phủ định) đi với subjuntivo, bạn sẽ học ở B2.'
        },
        dialogue: [
          { s: 'Sara', t: '¿Tú prefieres vivir en la ciudad o en el campo?', vi: 'Cậu thích sống ở thành phố hay nông thôn?' },
          { s: 'Diego', t: 'Creo que la ciudad es más práctica. Hay más trabajo y el transporte es mejor.', vi: 'Tớ nghĩ thành phố tiện hơn. Có nhiều việc làm hơn và giao thông tốt hơn.' },
          { s: 'Sara', t: 'Sí, pero la vida en el campo es menos estresante y mucho más barata.', vi: 'Ừ, nhưng cuộc sống ở nông thôn ít căng thẳng hơn và rẻ hơn nhiều.' },
          { s: 'Diego', t: 'Es verdad. Aunque me parece que en el campo no hay tantas oportunidades como en la ciudad.', vi: 'Đúng vậy. Dù tớ thấy ở nông thôn không có nhiều cơ hội như ở thành phố.' },
          { s: 'Sara', t: 'Para mí, lo más importante es la tranquilidad.', vi: 'Với tớ, điều quan trọng nhất là sự yên bình.' },
          { s: 'Diego', t: 'Entonces no estamos de acuerdo, ¡pero los dos tenemos razón!', vi: 'Vậy là chúng ta không đồng ý với nhau, nhưng cả hai đều đúng!' }
        ],
        exercises: [
          { type: 'mc', q: 'El tren es ___ rápido que el autobús.', options: ['tan', 'más', 'muy'], answer: 1, explain: 'So sánh hơn: más + tính từ + que.' },
          { type: 'mc', q: 'Mi casa es tan grande ___ la tuya.', options: ['que', 'como', 'de'], answer: 1, explain: 'So sánh bằng: tan + tính từ + como.' },
          { type: 'fill', q: 'Esta película es ___ que la otra. (bueno, so sánh hơn)', answer: ['mejor'], hint: 'dạng bất quy tắc', explain: 'Bueno → mejor (không nói "más bueno").' },
          { type: 'fill', q: 'Madrid es la ciudad más grande ___ España.', answer: ['de'], hint: 'giới từ', explain: 'So sánh nhất: el/la más + tính từ + de.' },
          { type: 'mc', q: 'Chọn câu đúng: "Tôi thấy là nó đắt quá."', options: ['Me parece que es demasiado caro.', 'Me parezco que es demasiado caro.', 'Parece me que es demasiado caro.'], answer: 0, explain: 'Cấu trúc cố định: Me parece que + mệnh đề.' },
          { type: 'order', vi: 'Tôi nghĩ là nông thôn yên tĩnh hơn.', words: ['tranquilo', 'que', 'campo', 'Creo', 'más', 'el', 'es'], answer: 'Creo que el campo es más tranquilo' },
          { type: 'order', vi: 'Đây là chiếc sofa thoải mái nhất cửa hàng.', words: ['cómodo', 'de', 'sofá', 'Este', 'tienda', 'el', 'más', 'la', 'es'], answer: 'Este es el sofá más cómodo de la tienda', alt: ['el sofá más cómodo de la tienda es Este'] },
          { type: 'mc', q: 'Hoy el tráfico está ___ que ayer. (tệ hơn)', options: ['más malo', 'peor', 'menos'], answer: 1, explain: 'Malo → peor.' }
        ]
      },
      // ───────────────────────── B1-6 ─────────────────────────
      {
        id: 'es-b1-6',
        icon: '🔀',
        title: 'Điều kiện thực tế',
        goal: 'Nói về điều kiện có thể xảy ra với si + presente và dùng đại từ tân ngữ (lo, la, le, me lo, se lo...).',
        vocab: [
          { w: 'prestar', ipa: 'prês-TAR', vi: 'cho mượn', ex: 'Si quieres, te presto mi bicicleta.', exVi: 'Nếu bạn muốn, tôi cho bạn mượn xe đạp.' },
          { w: 'devolver', ipa: 'đê-bôl-BÊR', vi: 'trả lại', ex: 'Te lo devuelvo mañana.', exVi: 'Mai tôi trả lại nó cho bạn.' },
          { w: 'el paraguas', ipa: 'êl pa-RA-goas', vi: 'cái ô', ex: 'Si llueve, llévate el paraguas.', exVi: 'Nếu trời mưa thì mang ô theo nhé.' },
          { w: 'el regalo', ipa: 'êl rrê-GA-lô', vi: 'món quà', ex: 'Compré un regalo para Marta y se lo di ayer.', exVi: 'Tôi mua một món quà cho Marta và đã tặng cô ấy hôm qua.' },
          { w: 'enviar', ipa: 'ên-bi-AR', vi: 'gửi', ex: 'Si me das tu correo, te lo envío hoy.', exVi: 'Nếu bạn cho tôi email, hôm nay tôi gửi nó cho bạn.' },
          { w: 'olvidar', ipa: 'ôl-bi-ĐAR', vi: 'quên', ex: 'Si olvidas las llaves, llámame.', exVi: 'Nếu bạn quên chìa khoá thì gọi tôi.' },
          { w: 'la llave', ipa: 'la GIA-bê', vi: 'chìa khoá', ex: 'Si encuentro la llave, te la doy.', exVi: 'Nếu tôi tìm thấy chìa khoá, tôi sẽ đưa nó cho bạn.' },
          { w: 'avisar', ipa: 'a-bi-XAR', vi: 'báo (cho ai biết)', ex: 'Si llegas tarde, avísame.', exVi: 'Nếu bạn đến muộn thì báo cho tôi.' },
          { w: 'funcionar', ipa: 'phun-θi-ô-NAR', vi: 'hoạt động, chạy (máy móc)', ex: 'Si el ordenador no funciona, reinícialo.', exVi: 'Nếu máy tính không chạy thì khởi động lại nó.' },
          { w: 'a tiempo', ipa: 'a ti-ÊM-pô', vi: 'kịp giờ', ex: 'Si salimos ahora, llegamos a tiempo.', exVi: 'Nếu bây giờ đi thì chúng ta đến kịp.' }
        ],
        grammar: {
          title: 'Si + presente và đại từ tân ngữ',
          explain: [
            'Câu điều kiện thực tế (có khả năng xảy ra): Si + presente, mệnh đề chính ở presente, futuro hoặc mệnh lệnh. Ví dụ: Si llueve, nos quedamos en casa. / Si tienes tiempo, llámame.',
            'Đại từ tân ngữ trực tiếp: me, te, lo/la, nos, os, los/las (thay cho vật/người chịu tác động). Đại từ tân ngữ gián tiếp: me, te, le, nos, os, les (người nhận). Ở Tây Ban Nha, le cũng thường được dùng thay lo cho người nam (Le vi ayer).',
            'Đại từ đứng trước động từ đã chia (Te lo doy), nhưng gắn vào sau động từ nguyên mẫu, mệnh lệnh khẳng định và gerundio (Quiero dártelo, Dámelo).',
            'Khi dùng hai đại từ, gián tiếp đứng trước trực tiếp: me lo, te la, nos los. Nếu le/les gặp lo/la/los/las thì le/les đổi thành se: Se lo doy (không nói "le lo").'
          ],
          table: [
            ['Gián tiếp + trực tiếp', 'Ví dụ', 'Nghĩa'],
            ['me lo / me la', '¿Me lo das?', 'Bạn đưa nó cho tôi nhé?'],
            ['te lo / te la', 'Te la presto.', 'Tôi cho bạn mượn nó.'],
            ['se lo / se la (thay le/les)', 'Se lo envío hoy.', 'Hôm nay tôi gửi nó cho anh ấy.'],
            ['nos lo / nos la', 'Nos lo explican.', 'Họ giải thích điều đó cho chúng tôi.']
          ],
          examples: [
            { t: 'Si tienes hambre, te preparo algo.', vi: 'Nếu bạn đói, tôi làm gì đó cho bạn ăn.' },
            { t: '¿El libro? Si lo necesitas, te lo presto.', vi: 'Quyển sách à? Nếu cần, tôi cho bạn mượn.' },
            { t: 'Si ves a Pedro, dale las llaves. — Vale, se las doy.', vi: 'Nếu gặp Pedro thì đưa chìa khoá cho anh ấy. — Được, tôi sẽ đưa cho anh ấy.' },
            { t: 'Si no funciona, devuélvelo a la tienda.', vi: 'Nếu nó không chạy thì trả lại cửa hàng.' }
          ],
          tip: 'Không bao giờ nói "le lo" hay "les la" — đổi thành "se lo", "se la". Sau "si" trong câu điều kiện thực tế, không dùng thì tương lai: nói "Si llueve", không nói "Si lloverá". 🌎 Mỹ Latinh: el celular (= el móvil); ở Mỹ Latinh le không thay cho lo: Lo vi ayer.'
        },
        dialogue: [
          { s: 'Tomás', t: 'Elena, ¿tienes el libro de historia? Lo necesito para el examen.', vi: 'Elena, cậu có quyển sách lịch sử không? Tớ cần nó để ôn thi.' },
          { s: 'Elena', t: 'Sí, lo tengo. Si quieres, te lo presto hoy.', vi: 'Có, tớ có. Nếu cậu muốn, hôm nay tớ cho cậu mượn.' },
          { s: 'Tomás', t: '¡Genial! Te lo devuelvo el viernes.', vi: 'Tuyệt! Thứ Sáu tớ trả lại cậu.' },
          { s: 'Elena', t: 'Vale. Pero si no lo terminas, avísame. Marta también lo quiere.', vi: 'Được. Nhưng nếu cậu chưa đọc xong thì báo tớ nhé. Marta cũng muốn mượn.' },
          { s: 'Tomás', t: 'Tranquila. Si lo termino antes, se lo doy directamente a ella.', vi: 'Yên tâm. Nếu tớ đọc xong sớm, tớ đưa thẳng cho cô ấy.' },
          { s: 'Elena', t: 'Perfecto. Y si llueve mañana, te lo llevo a casa en coche.', vi: 'Hoàn hảo. Còn nếu mai trời mưa, tớ sẽ chở nó đến nhà cậu bằng ô tô.' }
        ],
        exercises: [
          { type: 'mc', q: 'Si llueve, ___ en casa.', options: ['nos quedamos', 'nos quedaríamos', 'nos quedáramos'], answer: 0, explain: 'Điều kiện thực tế: si + presente, presente.' },
          { type: 'mc', q: '¿Las llaves? Ya ___ di a Pedro.', options: ['se las', 'le las', 'les las'], answer: 0, explain: 'Le + las → se las.' },
          { type: 'fill', q: '¿El libro? Te ___ devuelvo mañana.', answer: ['lo'], hint: 'tân ngữ trực tiếp, giống đực số ít', explain: 'El libro → lo: Te lo devuelvo.' },
          { type: 'fill', q: 'Si ___ tiempo, te ayudo. (yo, tener)', answer: ['tengo'], hint: 'presente', explain: 'Sau si dùng presente: tengo.' },
          { type: 'mc', q: '¿Me prestas el paraguas? — Sí, ___ presto.', options: ['te lo', 'te la', 'se lo'], answer: 0, explain: 'Cho bạn (te) + el paraguas (lo) → te lo.' },
          { type: 'order', vi: 'Nếu bạn đến muộn, hãy báo cho tôi.', words: ['avísame', 'tarde,', 'Si', 'llegas'], answer: 'Si llegas tarde, avísame', alt: ['avísame Si llegas tarde,'] },
          { type: 'order', vi: 'Hôm nay tôi gửi nó cho anh ấy.', words: ['hoy', 'envío', 'Se', 'lo'], answer: 'Se lo envío hoy', alt: ['hoy Se lo envío'] },
          { type: 'mc', q: '"Quiero comprar la camisa." → "Quiero ___."', options: ['comprarla', 'comprarlo', 'comprarle'], answer: 0, explain: 'La camisa (giống cái) → la, gắn vào sau động từ nguyên mẫu: comprarla.' }
        ]
      }
    ]
  },
  {
    id: 'B2',
    title: 'Trung cấp 2',
    desc: 'Bày tỏ mong muốn, chúc mừng và tiếc nuối, nói về giả định và phỏng đoán, đọc hiểu tin tức, thuật lại lời nói, tả tính cách, bàn về vấn đề xã hội và viết email trang trọng.',
    units: [
      // ───────────────────────── B2-1 ─────────────────────────
      {
        id: 'es-b2-1',
        icon: '💭',
        title: 'Mong muốn & cảm xúc',
        goal: 'Bày tỏ mong muốn, hy vọng và cảm xúc về người khác bằng presente de subjuntivo.',
        vocab: [
          { w: 'ojalá', ipa: 'ô-kha-LA', vi: 'ước gì, mong là', ex: 'Ojalá haga buen tiempo mañana.', exVi: 'Mong là mai trời đẹp.' },
          { w: 'esperar', ipa: 'ês-pê-RAR', vi: 'hy vọng; chờ đợi', ex: 'Espero que te guste el regalo.', exVi: 'Mình mong là bạn thích món quà.' },
          { w: 'alegrarse de', ipa: 'a-lê-GRAR-xê đê', vi: 'vui vì', ex: 'Me alegro de que estés mejor.', exVi: 'Tôi mừng vì bạn đã khá hơn.' },
          { w: 'preocupar', ipa: 'prê-ô-cu-PAR', vi: 'làm (ai) lo lắng', ex: 'Me preocupa que no duermas bien.', exVi: 'Tôi lo vì bạn ngủ không ngon.' },
          { w: 'molestar', ipa: 'mô-lês-TAR', vi: 'làm phiền, làm khó chịu', ex: 'Me molesta que la gente hable en el cine.', exVi: 'Tôi khó chịu khi người ta nói chuyện trong rạp phim.' },
          { w: 'el deseo', ipa: 'êl đê-XÊ-ô', vi: 'mong ước', ex: 'Mi mayor deseo es que mi familia esté bien.', exVi: 'Mong ước lớn nhất của tôi là gia đình được bình an.' },
          { w: 'la tristeza', ipa: 'la tris-TÊ-θa', vi: 'nỗi buồn', ex: 'Siento tristeza cuando pienso en mi pueblo.', exVi: 'Tôi thấy buồn khi nghĩ về quê mình.' },
          { w: 'sentir', ipa: 'xên-TIR', vi: 'cảm thấy; lấy làm tiếc', ex: 'Siento mucho que no puedas venir.', exVi: 'Tôi rất tiếc vì bạn không thể đến.' },
          { w: 'el éxito', ipa: 'êl ÊC-xi-tô', vi: 'sự thành công', ex: 'Te deseo mucho éxito en tu nuevo trabajo.', exVi: 'Chúc bạn thành công với công việc mới.' },
          { w: 'tener miedo de', ipa: 'tê-NÊR mi-Ê-đô đê', vi: 'sợ (rằng)', ex: 'Tengo miedo de que lleguemos tarde.', exVi: 'Tôi sợ là chúng ta sẽ đến muộn.' }
        ],
        grammar: {
          title: 'Presente de subjuntivo: quiero que, espero que, ojalá',
          explain: [
            'Subjuntivo (thức giả định) dùng trong mệnh đề phụ sau các động từ chỉ mong muốn, hy vọng, cảm xúc khi hai mệnh đề có chủ ngữ khác nhau: Quiero que (tú) vengas. Espero que (vosotros) lo paséis bien. Me alegro de que (ella) esté aquí.',
            'Cách tạo: lấy ngôi yo ở hiện tại, bỏ -o, rồi thêm đuôi "ngược": động từ -ar dùng -e, -es, -e, -emos, -éis, -en; động từ -er/-ir dùng -a, -as, -a, -amos, -áis, -an. Ví dụ: tengo → tenga, hago → haga, salgo → salga.',
            'Một số động từ bất quy tắc: ser → sea, estar → esté, ir → vaya, haber → haya, saber → sepa, dar → dé.',
            'Ojalá luôn đi với subjuntivo: Ojalá llueva. Nếu cùng một chủ ngữ thì dùng nguyên mẫu: Quiero ir (tôi muốn tôi đi), không cần que.'
          ],
          table: [
            ['Nguyên mẫu', 'Hiện tại (yo)', 'Subjuntivo (yo / él)'],
            ['hablar', 'hablo', 'hable'],
            ['comer', 'como', 'coma'],
            ['vivir', 'vivo', 'viva'],
            ['tener', 'tengo', 'tenga'],
            ['ser', 'soy', 'sea'],
            ['ir', 'voy', 'vaya']
          ],
          examples: [
            { t: 'Quiero que me ayudes con la mudanza.', vi: 'Tôi muốn bạn giúp tôi chuyển nhà.' },
            { t: 'Espero que tengáis un buen viaje.', vi: 'Mong các bạn có một chuyến đi vui vẻ.' },
            { t: 'Me preocupa que mi hijo pase tanto tiempo con el móvil.', vi: 'Tôi lo vì con tôi dùng điện thoại quá nhiều.' },
            { t: 'Ojalá encuentres pronto un trabajo.', vi: 'Mong là bạn sớm tìm được việc.' }
          ],
          tip: 'Cùng chủ ngữ → nguyên mẫu: "Quiero viajar". Khác chủ ngữ → que + subjuntivo: "Quiero que viajes". Đừng nói "Quiero que yo viaje".'
        },
        dialogue: [
          { s: 'Marta', t: 'Luis, ¿es verdad que te vas a vivir a Barcelona?', vi: 'Luis, có thật là cậu sắp chuyển đến Barcelona sống không?' },
          { s: 'Luis', t: 'Sí, empiezo en un trabajo nuevo el lunes. Espero que todo salga bien.', vi: 'Ừ, thứ Hai tớ bắt đầu công việc mới. Hy vọng mọi chuyện suôn sẻ.' },
          { s: 'Marta', t: '¡Qué bien! Me alegro mucho de que tengas esta oportunidad.', vi: 'Hay quá! Tớ rất vui vì cậu có cơ hội này.' },
          { s: 'Luis', t: 'Gracias. Aunque me da un poco de miedo no conocer a nadie allí.', vi: 'Cảm ơn. Dù tớ hơi sợ vì không quen ai ở đó.' },
          { s: 'Marta', t: 'No te preocupes. Quiero que me llames cuando llegues, ¿vale?', vi: 'Đừng lo. Tớ muốn cậu gọi cho tớ khi đến nơi, nhé?' },
          { s: 'Luis', t: 'Claro. Ojalá puedas visitarme pronto.', vi: 'Tất nhiên. Mong là cậu sớm đến thăm tớ.' },
          { s: 'Marta', t: 'Ojalá. ¡Te deseo mucho éxito!', vi: 'Mong là vậy. Chúc cậu thật nhiều thành công!' }
        ],
        exercises: [
          { type: 'mc', q: 'Espero que ___ un buen viaje.', options: ['tienes', 'tengas', 'tener'], answer: 1, explain: 'Espero que + subjuntivo (khác chủ ngữ): tengas.' },
          { type: 'mc', q: 'Quiero ___ al cine esta noche. (chính tôi đi)', options: ['ir', 'que vaya', 'vaya'], answer: 0, explain: 'Cùng chủ ngữ → dùng nguyên mẫu: Quiero ir.' },
          { type: 'fill', q: 'Ojalá ___ buen tiempo el fin de semana. (hacer)', answer: ['haga'], hint: 'subjuntivo', explain: 'Ojalá + subjuntivo; hago → haga.' },
          { type: 'fill', q: 'Me alegro de que ___ mejor. (tú, estar)', answer: ['estés'], hint: 'subjuntivo, ngôi tú', explain: 'Cảm xúc + que + subjuntivo; estar → estés.' },
          { type: 'mc', q: 'Mis padres quieren que yo ___ medicina.', options: ['estudio', 'estudie', 'estudiar'], answer: 1, explain: 'Hai chủ ngữ khác nhau (mis padres / yo) → subjuntivo: estudie.' },
          { type: 'order', vi: 'Mình mong là bạn thích món quà.', words: ['guste', 'regalo', 'que', 'Espero', 'el', 'te'], answer: 'Espero que te guste el regalo', alt: ['Espero que el regalo te guste'] },
          { type: 'order', vi: 'Ước gì chúng ta sớm gặp lại nhau.', words: ['pronto', 'veamos', 'Ojalá', 'nos'], answer: 'Ojalá nos veamos pronto' },
          { type: 'fill', q: 'Me molesta que la gente ___ en el cine. (hablar)', answer: ['hable'], hint: 'subjuntivo, ngôi 3 số ít', explain: 'Me molesta que + subjuntivo; hablar → hable.' }
        ]
      },
      // ───────────────────────── B2-2 ─────────────────────────
      {
        id: 'es-b2-2',
        icon: '🤔',
        title: 'Giả định',
        goal: 'Nói về tình huống giả định, ước mơ và đưa lời khuyên với condicional và si + imperfecto de subjuntivo.',
        vocab: [
          { w: 'la lotería', ipa: 'la lô-tê-RI-a', vi: 'xổ số', ex: 'Si me tocara la lotería, viajaría por todo el mundo.', exVi: 'Nếu trúng xổ số, tôi sẽ đi du lịch khắp thế giới.' },
          { w: 'ahorrar', ipa: 'a-ô-RRAR', vi: 'tiết kiệm', ex: 'Si ahorrara más, podría comprarme un piso.', exVi: 'Nếu tiết kiệm nhiều hơn, tôi có thể mua một căn hộ.' },
          { w: 'mudarse', ipa: 'mu-ĐAR-xê', vi: 'chuyển nhà', ex: 'Si pudiera, me mudaría a la costa.', exVi: 'Nếu có thể, tôi sẽ chuyển đến sống ở vùng biển.' },
          { w: 'el sueño', ipa: 'êl XUÊ-nhô', vi: 'giấc mơ, ước mơ', ex: 'Mi sueño sería abrir un restaurante.', exVi: 'Ước mơ của tôi là mở một nhà hàng.' },
          { w: 'la oportunidad', ipa: 'la ô-pôr-tu-ni-ĐAĐ', vi: 'cơ hội', ex: 'Si tuviera la oportunidad, estudiaría en el extranjero.', exVi: 'Nếu có cơ hội, tôi sẽ đi du học.' },
          { w: 'el extranjero', ipa: 'êl êcs-tran-KHÊ-rô', vi: 'nước ngoài', ex: 'Me gustaría trabajar en el extranjero.', exVi: 'Tôi muốn làm việc ở nước ngoài.' },
          { w: 'arriesgarse', ipa: 'a-rri-ês-GAR-xê', vi: 'liều, chấp nhận mạo hiểm', ex: 'Yo no me arriesgaría tanto.', exVi: 'Tôi thì sẽ không liều đến thế.' },
          { w: 'aconsejar', ipa: 'a-côn-xê-KHAR', vi: 'khuyên', ex: 'Te aconsejaría hablar con tu jefe.', exVi: 'Tôi khuyên bạn nên nói chuyện với sếp.' },
          { w: 'en tu lugar', ipa: 'ên tu lu-GAR', vi: 'ở vào vị trí của bạn', ex: 'Yo, en tu lugar, aceptaría la oferta.', exVi: 'Nếu tôi là bạn, tôi sẽ nhận lời đề nghị.' },
          { w: 'la decisión', ipa: 'la đê-θi-xi-ÔN', vi: 'quyết định', ex: 'Si yo fuera tú, tomaría la decisión hoy.', exVi: 'Nếu tôi là bạn, tôi sẽ quyết định ngay hôm nay.' }
        ],
        grammar: {
          title: 'Condicional simple và si + imperfecto de subjuntivo',
          explain: [
            'Condicional (sẽ/có thể...) tạo bằng nguyên mẫu + -ía, -ías, -ía, -íamos, -íais, -ían: viajar → viajaría. Bất quy tắc: tener → tendría, poder → podría, hacer → haría, decir → diría, salir → saldría, venir → vendría, poner → pondría, querer → querría, saber → sabría.',
            'Imperfecto de subjuntivo: lấy ngôi ellos của indefinido, bỏ -ron, thêm -ra, -ras, -ra, -ramos, -rais, -ran. Ví dụ: tuvieron → tuviera, pudieron → pudiera, fueron → fuera (ser và ir), hablaron → hablara. Ngôi nosotros có dấu: tuviéramos, habláramos. Có dạng thay thế đuôi -se (tuviese).',
            'Câu điều kiện giả định (khó xảy ra hoặc trái với hiện tại): Si + imperfecto de subjuntivo, condicional. Ví dụ: Si tuviera dinero, viajaría. Hai vế có thể đảo chỗ: Viajaría si tuviera dinero.',
            'Condicional còn dùng để khuyên lịch sự: Yo, en tu lugar, hablaría con él. / Deberías descansar.'
          ],
          table: [
            ['Nguyên mẫu', 'Imperfecto de subjuntivo (yo)', 'Condicional (yo)'],
            ['hablar', 'hablara', 'hablaría'],
            ['tener', 'tuviera', 'tendría'],
            ['poder', 'pudiera', 'podría'],
            ['ser / ir', 'fuera', 'sería / iría'],
            ['hacer', 'hiciera', 'haría']
          ],
          examples: [
            { t: 'Si tuviera más tiempo, aprendería japonés.', vi: 'Nếu có nhiều thời gian hơn, tôi sẽ học tiếng Nhật.' },
            { t: '¿Qué harías si fueras presidente?', vi: 'Bạn sẽ làm gì nếu bạn là tổng thống?' },
            { t: 'Si viviéramos cerca del mar, iríamos a la playa cada día.', vi: 'Nếu sống gần biển, ngày nào chúng tôi cũng ra bãi biển.' },
            { t: 'Yo, en tu lugar, no diría nada.', vi: 'Nếu tôi là bạn, tôi sẽ không nói gì.' }
          ],
          tip: 'Không bao giờ dùng condicional ngay sau "si": sai "Si tendría dinero..."; đúng "Si tuviera dinero...". Đây là lỗi rất phổ biến, kể cả với người bản ngữ.'
        },
        dialogue: [
          { s: 'Andrés', t: 'Paula, ¿qué harías si te tocara la lotería?', vi: 'Paula, cậu sẽ làm gì nếu trúng xổ số?' },
          { s: 'Paula', t: 'Pues primero dejaría mi trabajo y viajaría por Asia.', vi: 'Ờ, trước tiên tớ sẽ bỏ việc và đi du lịch châu Á.' },
          { s: 'Andrés', t: '¿De verdad? Yo no dejaría el trabajo. Ahorraría el dinero y me compraría una casa.', vi: 'Thật á? Tớ thì không bỏ việc đâu. Tớ sẽ tiết kiệm tiền và mua một ngôi nhà.' },
          { s: 'Paula', t: '¡Qué aburrido! Si yo tuviera tanto dinero, me arriesgaría un poco más.', vi: 'Chán thế! Nếu tớ có nhiều tiền như vậy, tớ sẽ liều hơn một chút.' },
          { s: 'Andrés', t: 'Bueno, si fuera más joven, quizás haría lo mismo.', vi: 'Thì, nếu tớ trẻ hơn, có lẽ tớ cũng làm vậy.' },
          { s: 'Paula', t: 'Nunca es tarde. Yo, en tu lugar, empezaría a soñar un poco más.', vi: 'Không bao giờ là muộn. Nếu tớ là cậu, tớ sẽ bắt đầu mơ mộng nhiều hơn một chút.' }
        ],
        exercises: [
          { type: 'mc', q: 'Si ___ más tiempo, aprendería a tocar la guitarra.', options: ['tengo', 'tuviera', 'tendría'], answer: 1, explain: 'Giả định: si + imperfecto de subjuntivo → tuviera.' },
          { type: 'mc', q: 'Si pudiera, ___ a la costa.', options: ['me mudaría', 'me mudo', 'me mudara'], answer: 0, explain: 'Vế chính của câu giả định dùng condicional: me mudaría.' },
          { type: 'fill', q: 'Si ___ rico, compraría una isla. (yo, ser)', answer: ['fuera', 'fuese'], hint: 'imperfecto de subjuntivo', explain: 'Ser → fueron → fuera (hoặc fuese).' },
          { type: 'fill', q: 'Yo, en tu lugar, ___ la oferta. (aceptar)', answer: ['aceptaría'], hint: 'condicional', explain: 'Lời khuyên với "en tu lugar" dùng condicional: aceptaría.' },
          { type: 'mc', q: 'Chọn câu đúng:', options: ['Si tendría dinero, viajaría.', 'Si tuviera dinero, viajaría.', 'Si tengo dinero, viajaría.'], answer: 1, explain: 'Si + imperfecto de subjuntivo, condicional.' },
          { type: 'order', vi: 'Bạn sẽ làm gì nếu trúng xổ số?', words: ['tocara', 'si', '¿Qué', 'lotería?', 'harías', 'la', 'te'], answer: '¿Qué harías si te tocara la lotería?', alt: ['si te tocara la lotería? ¿Qué harías'] },
          { type: 'order', vi: 'Nếu tiết kiệm nhiều hơn, tôi có thể mua một căn hộ.', words: ['podría', 'piso', 'más,', 'Si', 'un', 'ahorrara', 'comprar'], answer: 'Si ahorrara más, podría comprar un piso', alt: ['podría comprar un piso Si ahorrara más,'] },
          { type: 'fill', q: 'Si mis padres ___ aquí, estarían orgullosos. (estar)', answer: ['estuvieran', 'estuviesen'], hint: 'imperfecto de subjuntivo, ngôi ellos', explain: 'Estar → estuvieron → estuvieran (hoặc estuviesen).' }
        ]
      },
      // ───────────────────────── B2-3 ─────────────────────────
      {
        id: 'es-b2-3',
        icon: '📰',
        title: 'Tin tức',
        goal: 'Đọc hiểu và thuật lại tin tức bằng câu bị động (ser + participio, se pasiva) và câu với se khái quát.',
        vocab: [
          { w: 'la noticia', ipa: 'la nô-TI-θi-a', vi: 'tin tức, bản tin', ex: 'La noticia fue publicada ayer.', exVi: 'Tin này được đăng hôm qua.' },
          { w: 'el periódico', ipa: 'êl pê-ri-Ô-đi-cô', vi: 'báo (tờ báo)', ex: 'Lo leí en el periódico de esta mañana.', exVi: 'Tôi đọc được điều đó trên báo sáng nay.' },
          { w: 'el gobierno', ipa: 'êl gô-bi-ÊR-nô', vi: 'chính phủ', ex: 'La medida fue anunciada por el gobierno.', exVi: 'Biện pháp này được chính phủ công bố.' },
          { w: 'aprobar', ipa: 'a-prô-BAR', vi: 'thông qua, phê duyệt', ex: 'Se aprobó el nuevo presupuesto.', exVi: 'Ngân sách mới đã được thông qua.' },
          { w: 'detener', ipa: 'đê-tê-NÊR', vi: 'bắt giữ', ex: 'El ladrón fue detenido por la policía.', exVi: 'Tên trộm đã bị cảnh sát bắt giữ.' },
          { w: 'el incendio', ipa: 'êl in-θÊN-đi-ô', vi: 'vụ hoả hoạn', ex: 'El incendio fue controlado en pocas horas.', exVi: 'Vụ hoả hoạn đã được khống chế trong vài giờ.' },
          { w: 'la encuesta', ipa: 'la ên-QUÊS-ta', vi: 'cuộc khảo sát, thăm dò', ex: 'Se realizó una encuesta a mil personas.', exVi: 'Một cuộc khảo sát đã được thực hiện với một nghìn người.' },
          { w: 'inaugurar', ipa: 'i-nau-gu-RAR', vi: 'khánh thành', ex: 'El nuevo hospital fue inaugurado el lunes.', exVi: 'Bệnh viện mới được khánh thành hôm thứ Hai.' },
          { w: 'el ciudadano', ipa: 'êl θi-u-đa-ĐA-nô', vi: 'công dân, người dân', ex: 'Los ciudadanos fueron informados del cambio.', exVi: 'Người dân đã được thông báo về sự thay đổi.' },
          { w: 'el titular', ipa: 'êl ti-tu-LAR', vi: 'tiêu đề (báo)', ex: 'El titular de hoy habla de la economía.', exVi: 'Tiêu đề hôm nay nói về kinh tế.' }
        ],
        grammar: {
          title: 'Câu bị động: ser + participio, se pasiva và se impersonal',
          explain: [
            'Bị động với ser (pasiva perifrástica): ser + participio (+ por + tác nhân). Participio phải hợp giống và số với chủ ngữ: El puente fue construido. / Las casas fueron destruidas por el fuego. Dạng này phổ biến trong báo chí và văn viết.',
            'Se pasiva (pasiva refleja): se + động từ ngôi 3, chia số ít hay số nhiều theo danh từ đi kèm: Se vende piso. / Se venden pisos. Không nêu tác nhân. Trong văn nói, dạng này phổ biến hơn ser + participio.',
            'Se impersonal: se + động từ ngôi 3 số ít, không có chủ ngữ cụ thể, tương đương "người ta": En España se cena tarde. / Aquí se vive bien. Dùng cả khi tân ngữ là người có giới từ a: Se busca a los responsables.'
          ],
          table: [
            ['Cấu trúc', 'Đặc điểm', 'Ví dụ'],
            ['ser + participio (+ por ...)', 'participio hợp giống, số với chủ ngữ; có thể nêu tác nhân', 'Las casas fueron destruidas por el fuego.'],
            ['se + động từ (se pasiva)', 'động từ chia số ít/nhiều theo danh từ', 'Se venden coches usados.'],
            ['se + động từ ngôi 3 số ít (impersonal)', 'không có chủ ngữ cụ thể, nghĩa "người ta"', 'En España se cena tarde.']
          ],
          examples: [
            { t: 'El museo fue inaugurado por el rey en 1992.', vi: 'Bảo tàng được nhà vua khánh thành năm 1992.' },
            { t: 'Dos sospechosos han sido detenidos esta mañana.', vi: 'Hai nghi phạm đã bị bắt sáng nay.' },
            { t: 'Se han cerrado tres colegios por la tormenta.', vi: 'Ba trường học đã bị đóng cửa vì bão.' },
            { t: 'Se dice que el ministro va a dimitir.', vi: 'Người ta nói rằng bộ trưởng sắp từ chức.' }
          ],
          tip: 'Đừng quên hợp giống số: "La ley fue aprobada", "Los ladrones fueron detenidos". Với se pasiva, theo chuẩn phải chia số nhiều khi danh từ số nhiều: "Se venden pisos" (không phải "Se vende pisos").'
        },
        dialogue: [
          { s: 'Presentadora', t: 'Buenas noches. Empezamos con la noticia del día. ¿Qué ha pasado en el centro, Raúl?', vi: 'Chào buổi tối. Chúng ta bắt đầu với tin chính trong ngày. Chuyện gì đã xảy ra ở trung tâm vậy, Raúl?' },
          { s: 'Raúl', t: 'Esta tarde se ha declarado un incendio en un edificio de oficinas. El fuego ha sido controlado por los bomberos en dos horas.', vi: 'Chiều nay một vụ cháy đã bùng phát tại một toà nhà văn phòng. Ngọn lửa đã được lính cứu hoả khống chế trong hai giờ.' },
          { s: 'Presentadora', t: '¿Ha habido heridos?', vi: 'Có ai bị thương không?' },
          { s: 'Raúl', t: 'Tres personas han sido trasladadas al hospital, pero se encuentran bien.', vi: 'Ba người đã được chuyển đến bệnh viện, nhưng họ đều ổn.' },
          { s: 'Presentadora', t: '¿Se sabe ya la causa?', vi: 'Đã biết nguyên nhân chưa?' },
          { s: 'Raúl', t: 'Todavía no. Se cree que fue un problema eléctrico. Se ha abierto una investigación.', vi: 'Vẫn chưa. Người ta tin rằng đó là sự cố điện. Một cuộc điều tra đã được mở.' }
        ],
        exercises: [
          { type: 'mc', q: 'La nueva ley fue ___ por el Parlamento.', options: ['aprobado', 'aprobada', 'aprobadas'], answer: 1, explain: 'La ley (giống cái, số ít) → aprobada.' },
          { type: 'mc', q: '___ pisos en el centro.', options: ['Se vende', 'Se venden', 'Son vende'], answer: 1, explain: 'Pisos số nhiều → se venden.' },
          { type: 'fill', q: 'Los ladrones fueron ___ por la policía. (detener)', answer: ['detenidos'], hint: 'participio, giống đực số nhiều', explain: 'Los ladrones → detenidos.' },
          { type: 'fill', q: 'En España ___ cena muy tarde.', answer: ['se'], hint: 'người ta', explain: 'Se impersonal: se cena = người ta ăn tối.' },
          { type: 'mc', q: 'Câu nào là bị động với "ser"?', options: ['Se construyó un puente.', 'El puente fue construido en 1990.', 'Construyeron un puente.'], answer: 1, explain: 'Ser (fue) + participio (construido).' },
          { type: 'order', vi: 'Bệnh viện mới được khánh thành hôm thứ Hai.', words: ['lunes', 'fue', 'El', 'inaugurado', 'hospital', 'el', 'nuevo'], answer: 'El nuevo hospital fue inaugurado el lunes', alt: ['El hospital nuevo fue inaugurado el lunes', 'el lunes fue inaugurado El nuevo hospital'] },
          { type: 'order', vi: 'Người ta tin rằng đó là một sự cố điện.', words: ['eléctrico', 'que', 'Se', 'problema', 'fue', 'cree', 'un'], answer: 'Se cree que fue un problema eléctrico' },
          { type: 'fill', q: 'El incendio ___ controlado en pocas horas. (ser, indefinido)', answer: ['fue'], hint: 'ser, ngôi 3 số ít', explain: 'Bị động ở quá khứ: fue + participio.' }
        ]
      },
      // ───────────────────────── B2-4 ─────────────────────────
      {
        id: 'es-b2-4',
        icon: '🗣️',
        title: 'Kể lại lời nói',
        goal: 'Thuật lại lời nói, câu hỏi và yêu cầu của người khác bằng lời gián tiếp (estilo indirecto).',
        vocab: [
          { w: 'decir', ipa: 'đê-θIR', vi: 'nói', ex: 'Me dijo que estaba cansado.', exVi: 'Anh ấy nói với tôi là anh ấy mệt.' },
          { w: 'contar', ipa: 'côn-TAR', vi: 'kể', ex: 'Ana me contó que se iba a casar.', exVi: 'Ana kể với tôi là cô ấy sắp cưới.' },
          { w: 'preguntar', ipa: 'prê-gun-TAR', vi: 'hỏi', ex: 'Me preguntó si quería un café.', exVi: 'Anh ấy hỏi tôi có muốn uống cà phê không.' },
          { w: 'explicar', ipa: 'êcs-pli-CAR', vi: 'giải thích', ex: 'El profesor explicó que el examen sería en mayo.', exVi: 'Thầy giáo giải thích rằng kỳ thi sẽ vào tháng Năm.' },
          { w: 'pedir', ipa: 'pê-ĐIR', vi: 'yêu cầu, nhờ', ex: 'Mi madre me pidió que la llamara.', exVi: 'Mẹ tôi bảo tôi gọi điện cho bà.' },
          { w: 'comentar', ipa: 'cô-mên-TAR', vi: 'nói qua, nhận xét', ex: 'Comentó que no le gustaba el hotel.', exVi: 'Cô ấy nói là cô ấy không thích khách sạn.' },
          { w: 'asegurar', ipa: 'a-xê-gu-RAR', vi: 'cam đoan, khẳng định', ex: 'Nos aseguró que vendría.', exVi: 'Anh ấy cam đoan với chúng tôi là sẽ đến.' },
          { w: 'el mensaje', ipa: 'êl mên-XA-khê', vi: 'tin nhắn', ex: 'En el mensaje decía que llegaría tarde.', exVi: 'Trong tin nhắn có nói là anh ấy sẽ đến muộn.' },
          { w: 'el rumor', ipa: 'êl rru-MÔR', vi: 'tin đồn', ex: 'Corre el rumor de que la empresa va a cerrar.', exVi: 'Có tin đồn là công ty sắp đóng cửa.' },
          { w: 'según', ipa: 'xê-GUN', vi: 'theo (lời ai)', ex: 'Según Pedro, la fiesta es el sábado.', exVi: 'Theo Pedro, bữa tiệc vào thứ Bảy.' }
        ],
        grammar: {
          title: 'Estilo indirecto: thuật lại lời nói',
          explain: [
            'Nếu động từ dẫn ở hiện tại (dice que, pregunta si), thì của câu gốc thường giữ nguyên: "Estoy cansado." → Dice que está cansado.',
            'Nếu động từ dẫn ở quá khứ (dijo que, contó que, preguntó si), thì lùi lại: presente → imperfecto; indefinido/perfecto → pluscuamperfecto (había + participio); futuro → condicional; mệnh lệnh → que + imperfecto de subjuntivo.',
            'Câu hỏi có/không dùng si: Me preguntó si tenía hambre. Câu hỏi có từ để hỏi giữ nguyên từ đó (có dấu): Me preguntó dónde vivía.',
            'Nhớ đổi đại từ và trạng từ: hoy → aquel día, mañana → al día siguiente, ayer → el día anterior, aquí → allí.'
          ],
          table: [
            ['Lời trực tiếp', 'Lời gián tiếp (quá khứ)'],
            ['"Estoy cansado." (presente)', 'Dijo que estaba cansado. (imperfecto)'],
            ['"Perdí el tren." (indefinido)', 'Dijo que había perdido el tren. (pluscuamperfecto)'],
            ['"Vendré mañana." (futuro)', 'Dijo que vendría al día siguiente. (condicional)'],
            ['"Ven pronto." (mệnh lệnh)', 'Me pidió que fuera pronto. (imperf. de subjuntivo)'],
            ['"¿Tienes hambre?" (câu hỏi có/không)', 'Me preguntó si tenía hambre.']
          ],
          examples: [
            { t: 'Laura dice que no puede venir hoy.', vi: 'Laura nói là hôm nay cô ấy không đến được.' },
            { t: 'Mi hermano me contó que había encontrado trabajo.', vi: 'Anh tôi kể là anh ấy đã tìm được việc.' },
            { t: 'El jefe nos preguntó cuándo terminaríamos el informe.', vi: 'Sếp hỏi chúng tôi khi nào sẽ làm xong báo cáo.' },
            { t: 'La doctora me pidió que no comiera sal.', vi: 'Bác sĩ dặn tôi không ăn muối.' }
          ],
          tip: 'Câu hỏi có/không dùng "si" (không dấu, nghĩa là "liệu"), đừng dùng "que": nói "Me preguntó si venía", không nói "Me preguntó que si venía" trong văn viết chuẩn. Phân biệt "si" (liệu, nếu) với "sí" (vâng).'
        },
        dialogue: [
          { s: 'Irene', t: '¿Has hablado con Nacho? ¿Qué te dijo?', vi: 'Cậu đã nói chuyện với Nacho chưa? Cậu ấy nói gì?' },
          { s: 'Sergio', t: 'Me dijo que estaba muy ocupado y que no podría venir a la cena.', vi: 'Cậu ấy bảo là đang rất bận và sẽ không đến dự bữa tối được.' },
          { s: 'Irene', t: '¡Qué raro! Ayer me aseguró que vendría.', vi: 'Lạ thật! Hôm qua cậu ấy còn cam đoan với tớ là sẽ đến.' },
          { s: 'Sergio', t: 'Ya. También me contó que había tenido problemas en el trabajo.', vi: 'Ừ. Cậu ấy cũng kể là đã gặp rắc rối ở chỗ làm.' },
          { s: 'Irene', t: '¿Y no preguntó nada por mí?', vi: 'Thế cậu ấy không hỏi gì về tớ à?' },
          { s: 'Sergio', t: 'Sí, me preguntó si estabas enfadada y me pidió que te dijera que lo sentía mucho.', vi: 'Có, cậu ấy hỏi cậu có giận không và nhờ tớ nói với cậu là cậu ấy rất xin lỗi.' }
        ],
        exercises: [
          { type: 'mc', q: 'Ana: "Estoy cansada." → Ana dijo que ___ cansada.', options: ['está', 'estaba', 'estuvo'], answer: 1, explain: 'Dijo que (quá khứ): presente → imperfecto: estaba.' },
          { type: 'mc', q: 'Pedro: "Vendré mañana." → Pedro dijo que ___ al día siguiente.', options: ['vendría', 'vendrá', 'viene'], answer: 0, explain: 'Futuro → condicional: vendría.' },
          { type: 'fill', q: 'Me preguntó ___ quería un café.', answer: ['si'], hint: 'câu hỏi có/không', explain: 'Câu hỏi có/không gián tiếp dùng si.' },
          { type: 'fill', q: 'Luis: "Perdí el tren." → Luis contó que ___ perdido el tren.', answer: ['había'], hint: 'pluscuamperfecto', explain: 'Indefinido → pluscuamperfecto: había perdido.' },
          { type: 'mc', q: 'Mi madre: "Llámame." → Mi madre me pidió que la ___.', options: ['llamo', 'llamara', 'llamaré'], answer: 1, explain: 'Mệnh lệnh → pidió que + imperfecto de subjuntivo: llamara.' },
          { type: 'order', vi: 'Cô ấy hỏi tôi sống ở đâu.', words: ['vivía', 'preguntó', 'Me', 'dónde'], answer: 'Me preguntó dónde vivía' },
          { type: 'order', vi: 'Anh ấy cam đoan với chúng tôi là sẽ đến.', words: ['vendría', 'aseguró', 'que', 'Nos'], answer: 'Nos aseguró que vendría' },
          { type: 'fill', q: 'El profesor: "Haced los ejercicios." → El profesor nos pidió que ___ los ejercicios. (hacer)', answer: ['hiciéramos', 'hiciésemos'], hint: 'imperfecto de subjuntivo, ngôi nosotros', explain: 'Mệnh lệnh → pidió que + imperfecto de subjuntivo: hiciéramos (hoặc hiciésemos).' }
        ]
      },
      // ───────────────────────── B2-5 ─────────────────────────
      {
        id: 'es-b2-5',
        icon: '🌍',
        title: 'Môi trường & xã hội',
        goal: 'Bàn về các vấn đề môi trường, xã hội và nối ý bằng mệnh đề quan hệ (que, quien, donde, el que, cuyo).',
        vocab: [
          { w: 'el medio ambiente', ipa: 'êl MÊ-đi-ô am-bi-ÊN-tê', vi: 'môi trường', ex: 'Tenemos que proteger el medio ambiente.', exVi: 'Chúng ta phải bảo vệ môi trường.' },
          { w: 'la contaminación', ipa: 'la côn-ta-mi-na-θi-ÔN', vi: 'sự ô nhiễm', ex: 'La contaminación que hay en las ciudades es preocupante.', exVi: 'Tình trạng ô nhiễm ở các thành phố thật đáng lo.' },
          { w: 'el reciclaje', ipa: 'êl rrê-θi-CLA-khê', vi: 'việc tái chế', ex: 'El reciclaje es un hábito que todos deberíamos tener.', exVi: 'Tái chế là thói quen mà tất cả chúng ta nên có.' },
          { w: 'los residuos', ipa: 'lôs rrê-XI-đuôs', vi: 'rác thải', ex: 'Los residuos que producimos terminan en el mar.', exVi: 'Rác thải chúng ta tạo ra rốt cuộc trôi ra biển.' },
          { w: 'la sequía', ipa: 'la xê-KI-a', vi: 'hạn hán', ex: 'La sequía afecta a muchas regiones del sur.', exVi: 'Hạn hán ảnh hưởng đến nhiều vùng ở miền nam.' },
          { w: 'el cambio climático', ipa: 'êl CAM-bi-ô cli-MA-ti-cô', vi: 'biến đổi khí hậu', ex: 'El cambio climático es un problema cuyas consecuencias ya vemos.', exVi: 'Biến đổi khí hậu là vấn đề mà hậu quả của nó ta đã thấy rõ.' },
          { w: 'la desigualdad', ipa: 'la đê-xi-goal-ĐAĐ', vi: 'sự bất bình đẳng', ex: 'La desigualdad es un tema del que se habla mucho.', exVi: 'Bất bình đẳng là chủ đề được bàn đến nhiều.' },
          { w: 'la energía renovable', ipa: 'la ê-nêr-KHI-a rrê-nô-BA-blê', vi: 'năng lượng tái tạo', ex: 'España es un país que apuesta por la energía renovable.', exVi: 'Tây Ban Nha là quốc gia đầu tư mạnh vào năng lượng tái tạo.' },
          { w: 'el voluntario', ipa: 'êl bô-lun-TA-ri-ô', vi: 'tình nguyện viên', ex: 'Los voluntarios con quienes trabajé eran muy jóvenes.', exVi: 'Những tình nguyện viên tôi từng làm cùng đều rất trẻ.' },
          { w: 'malgastar', ipa: 'mal-gas-TAR', vi: 'lãng phí', ex: 'No malgastes el agua, que es un bien escaso.', exVi: 'Đừng lãng phí nước, vì đó là tài nguyên khan hiếm.' }
        ],
        grammar: {
          title: 'Mệnh đề quan hệ: que, quien, donde, el que, cuyo',
          explain: [
            'Que là đại từ quan hệ phổ biến nhất, dùng cho cả người và vật: El chico que vive aquí es médico. / El libro que leí es interesante.',
            'Quien / quienes chỉ dùng cho người, thường đứng sau giới từ: la mujer con quien hablé. El / la / los / las que dùng sau giới từ cho cả người và vật, mạo từ hợp giống số với danh từ: la empresa para la que trabajo. Lo que = "điều mà": Lo que necesitamos es tiempo.',
            'Donde dùng cho nơi chốn: el pueblo donde nací.',
            'Cuyo / cuya / cuyos / cuyas chỉ sự sở hữu ("mà ... của nó/người đó"), hợp giống số với danh từ đứng ngay sau, không phải với người sở hữu: un país cuyas playas son famosas.'
          ],
          table: [
            ['Đại từ', 'Dùng cho', 'Ví dụ'],
            ['que', 'người và vật', 'El chico que vive aquí es médico.'],
            ['quien / quienes', 'người, thường sau giới từ', 'La mujer con quien hablé es periodista.'],
            ['donde', 'nơi chốn', 'Este es el pueblo donde nací.'],
            ['el/la/los/las que', 'sau giới từ, người hoặc vật', 'La empresa para la que trabajo es pequeña.'],
            ['cuyo/a/os/as', 'sở hữu, hợp với danh từ theo sau', 'Es un país cuyas playas son famosas.']
          ],
          examples: [
            { t: 'Es una ciudad donde se recicla casi todo.', vi: 'Đó là thành phố nơi gần như mọi thứ đều được tái chế.' },
            { t: 'Las personas a quienes ayudamos viven en la calle.', vi: 'Những người chúng tôi giúp đỡ đang sống ngoài đường.' },
            { t: 'Es un proyecto cuyo objetivo es limpiar las playas.', vi: 'Đó là một dự án có mục tiêu làm sạch các bãi biển.' },
            { t: 'Lo que más me preocupa es la falta de agua.', vi: 'Điều làm tôi lo nhất là tình trạng thiếu nước.' }
          ],
          tip: 'Cuyo hợp với vật bị sở hữu, không phải với người sở hữu: "el hombre cuya casa..." (casa giống cái → cuya). Sau giới từ, không dùng "que" trơn: nói "la persona con quien / con la que hablé", không nói "con que hablé".'
        },
        dialogue: [
          { s: 'Clara', t: '¿Viste el documental que pusieron anoche sobre el cambio climático?', vi: 'Cậu có xem bộ phim tài liệu về biến đổi khí hậu chiếu tối qua không?' },
          { s: 'Hugo', t: 'Sí, el que hablaba de la sequía en el sur. Me impresionó mucho.', vi: 'Có, cái phim nói về hạn hán ở miền nam. Tớ rất ấn tượng.' },
          { s: 'Clara', t: 'A mí también. Sobre todo la parte donde mostraban los pueblos sin agua.', vi: 'Tớ cũng vậy. Nhất là đoạn chiếu những ngôi làng không có nước.' },
          { s: 'Hugo', t: 'Mi tía vive en un pueblo cuyos campos están completamente secos.', vi: 'Dì tớ sống ở một ngôi làng mà đồng ruộng khô cạn hoàn toàn.' },
          { s: 'Clara', t: '¡Qué pena! Yo colaboro con una ONG en la que trabajan muchos voluntarios.', vi: 'Tội quá! Tớ đang cộng tác với một tổ chức phi chính phủ có rất nhiều tình nguyện viên.' },
          { s: 'Hugo', t: '¿Ah, sí? Me gustaría conocer a las personas con quienes trabajas.', vi: 'Thế à? Tớ muốn làm quen với những người cậu làm cùng.' },
          { s: 'Clara', t: 'Pues ven el sábado. Lo que más necesitamos es gente con ganas de ayudar.', vi: 'Vậy thứ Bảy đến nhé. Điều bọn tớ cần nhất là những người muốn giúp đỡ.' }
        ],
        exercises: [
          { type: 'mc', q: 'Este es el pueblo ___ nací.', options: ['que', 'donde', 'cuyo'], answer: 1, explain: 'Nơi chốn → donde.' },
          { type: 'mc', q: 'Es una escritora ___ libros se venden en todo el mundo.', options: ['cuyos', 'cuyas', 'que'], answer: 0, explain: 'Cuyo hợp với libros (giống đực, số nhiều) → cuyos.' },
          { type: 'fill', q: 'La chica con ___ hablé ayer es voluntaria.', answer: ['quien', 'la que', 'la cual'], hint: 'người, sau giới từ', explain: 'Sau giới từ, chỉ người → quien (hoặc la que / la cual).' },
          { type: 'fill', q: 'Los residuos ___ producimos terminan en el mar.', answer: ['que'], hint: 'đại từ quan hệ phổ biến nhất', explain: 'Không có giới từ, chỉ vật → que.' },
          { type: 'mc', q: 'La empresa para ___ trabajo usa energía renovable.', options: ['la que', 'que', 'cuya'], answer: 0, explain: 'Sau giới từ para, la empresa giống cái → la que.' },
          { type: 'order', vi: 'Ô nhiễm là vấn đề khiến chúng tôi lo lắng nhất.', words: ['preocupa', 'el', 'La', 'más', 'problema', 'contaminación', 'nos', 'que', 'es'], answer: 'La contaminación es el problema que más nos preocupa', alt: ['el problema que más nos preocupa es La contaminación', 'La contaminación es el problema que nos preocupa más', 'el problema que nos preocupa más es La contaminación'] },
          { type: 'order', vi: 'Điều chúng tôi cần là có thêm nhiều tình nguyện viên hơn.', words: ['voluntarios', 'que', 'Lo', 'más', 'necesitamos', 'son'], answer: 'Lo que necesitamos son más voluntarios' },
          { type: 'mc', q: 'Es un país ___ ciudades sufren mucha contaminación.', options: ['cuyo', 'cuyas', 'cuya'], answer: 1, explain: 'Cuyo hợp với ciudades (giống cái, số nhiều) → cuyas.' }
        ]
      },
      // ───────────────────────── B2-6 ─────────────────────────
      {
        id: 'es-b2-6',
        icon: '✉️',
        title: 'Giao tiếp trang trọng & email',
        goal: 'Viết email trang trọng đúng cấu trúc, nối ý bằng sin embargo, no obstante, por lo tanto, ya que… và dùng aunque với indicativo hoặc subjuntivo.',
        vocab: [
          { w: 'estimado / estimada', ipa: 'ês-ti-MA-đô / ês-ti-MA-đa', vi: 'kính gửi (mở đầu thư)', ex: 'Estimada señora López:', exVi: 'Kính gửi bà López,' },
          { w: 'adjuntar', ipa: 'ađ-khun-TAR', vi: 'đính kèm', ex: 'Le adjunto el documento solicitado.', exVi: 'Tôi xin gửi kèm tài liệu ông/bà yêu cầu.' },
          { w: 'el archivo adjunto', ipa: 'êl ar-CHI-bô ađ-KHUN-tô', vi: 'tệp đính kèm', ex: 'Encontrará los detalles en el archivo adjunto.', exVi: 'Ông/bà sẽ thấy chi tiết trong tệp đính kèm.' },
          { w: 'la solicitud', ipa: 'la xô-li-θi-TUĐ', vi: 'đơn, yêu cầu', ex: 'Le escribo en relación con mi solicitud.', exVi: 'Tôi viết thư liên quan đến đơn của tôi.' },
          { w: 'agradecer', ipa: 'a-gra-đê-θÊR', vi: 'cảm ơn, biết ơn', ex: 'Le agradezco de antemano su atención.', exVi: 'Tôi xin cảm ơn trước sự quan tâm của ông/bà.' },
          { w: 'quedar a la espera de', ipa: 'kê-ĐAR a la ês-PÊ-ra đê', vi: 'chờ (hồi âm)', ex: 'Quedo a la espera de su respuesta.', exVi: 'Tôi mong nhận được hồi âm của ông/bà.' },
          { w: 'sin embargo', ipa: 'xin êm-BAR-gô', vi: 'tuy nhiên', ex: 'El producto llegó a tiempo; sin embargo, estaba dañado.', exVi: 'Sản phẩm đến đúng hạn; tuy nhiên, nó bị hỏng.' },
          { w: 'por lo tanto', ipa: 'pôr lô TAN-tô', vi: 'vì vậy, do đó', ex: 'No recibimos el pago; por lo tanto, el pedido está cancelado.', exVi: 'Chúng tôi không nhận được tiền; do đó, đơn hàng bị huỷ.' },
          { w: 'aunque', ipa: 'AUN-kê', vi: 'mặc dù', ex: 'Aunque he enviado varios correos, no he recibido respuesta.', exVi: 'Mặc dù tôi đã gửi vài email, tôi vẫn chưa nhận được hồi âm.' },
          { w: 'atentamente', ipa: 'a-tên-ta-MÊN-tê', vi: 'trân trọng (cuối thư)', ex: 'Atentamente, Laura Gómez.', exVi: 'Trân trọng, Laura Gómez.' }
        ],
        grammar: {
          title: 'Email trang trọng, từ nối và aunque + indicativo / subjuntivo',
          explain: [
            'Cấu trúc email trang trọng: lời chào (Estimado señor García: / Estimada señora López: / Estimados señores:), lý do viết (Le escribo para... / En relación con... / Me pongo en contacto con ustedes para...), nội dung, câu kết (Quedo a la espera de su respuesta. / Le agradezco de antemano su atención.) và lời chào cuối (Atentamente / Un cordial saludo). Khi đã xưng usted thì giữ su, le suốt thư.',
            'Từ nối theo chức năng: thêm ý – además, asimismo; đối lập – sin embargo, no obstante; kết quả – por lo tanto, por consiguiente, así que; nguyên nhân – ya que, puesto que, debido a (+ danh từ); mục đích – con el fin de + nguyên mẫu, para que + subjuntivo. Sin embargo, no obstante, por lo tanto thường đứng sau dấu chấm hoặc chấm phẩy và có dấu phẩy theo sau.',
            'Aunque + INDICATIVO: người nói khẳng định một sự thật mà mình biết và cho người nghe biết: Aunque he enviado dos correos, no he recibido respuesta (tôi thật sự đã gửi). Aunque + SUBJUNTIVO: (1) điều chưa biết có xảy ra hay không: Aunque llueva mañana, el evento se celebrará (dù mai có mưa); (2) sự thật cả hai đã biết nhưng người nói coi là không quan trọng: Aunque sea caro, lo compraremos (đắt thì đắt, vẫn mua).',
            'Aunque + imperfecto de subjuntivo diễn tả giả định khó xảy ra hoặc trái thực tế: Aunque tuviera tiempo, no iría a la reunión. A pesar de que dùng giống hệt aunque (trang trọng hơn); a pesar de đi với danh từ hoặc nguyên mẫu: A pesar del retraso, el pedido llegó completo.'
          ],
          table: [
            ['Chức năng', 'Mẫu câu', 'Nghĩa'],
            ['Mở đầu thư', 'Estimado señor García:', 'Kính gửi ông García,'],
            ['Lý do viết', 'Le escribo para solicitar información sobre...', 'Tôi viết thư để xin thông tin về...'],
            ['Kết thư', 'Quedo a la espera de su respuesta. Atentamente,', 'Tôi mong nhận được hồi âm. Trân trọng,'],
            ['Thêm ý', 'Además, / Asimismo, ...', 'Ngoài ra, ...'],
            ['Đối lập', '...; sin embargo, / no obstante, ...', '...; tuy nhiên, ...'],
            ['Kết quả', '...; por lo tanto, / por consiguiente, ...', '...; vì vậy, ...'],
            ['Aunque + indicativo', 'Aunque el pedido llegó tarde, estaba completo.', 'Mặc dù hàng đến muộn (thật), nhưng đủ.'],
            ['Aunque + subjuntivo', 'Aunque el pedido llegue tarde, lo aceptaremos.', 'Dù hàng có đến muộn, chúng tôi vẫn nhận.']
          ],
          examples: [
            { t: 'Estimados señores: les escribo para presentar una reclamación.', vi: 'Kính gửi quý ông bà: tôi viết thư này để gửi một khiếu nại.' },
            { t: 'El hotel era caro; sin embargo, el servicio fue excelente.', vi: 'Khách sạn đắt; tuy nhiên, dịch vụ rất tuyệt.' },
            { t: 'La oficina estará cerrada el lunes; por lo tanto, le responderemos el martes.', vi: 'Văn phòng sẽ đóng cửa thứ Hai; vì vậy, chúng tôi sẽ trả lời ông/bà vào thứ Ba.' },
            { t: 'Aunque no reciba respuesta, volveré a escribirles la semana que viene.', vi: 'Dù có không nhận được hồi âm, tuần sau tôi sẽ viết lại cho quý vị.' },
            { t: 'Le envío el informe hoy, ya que el plazo termina mañana.', vi: 'Tôi gửi ông/bà bản báo cáo hôm nay, vì hạn chót là ngày mai.' }
          ],
          tip: 'Đừng dịch "mặc dù" một cách máy móc: hỏi xem điều đó đã chắc chắn chưa. "Aunque llueve" = trời đang mưa thật; "Aunque llueva" = dù (có) mưa. Trong thư tiếng Tây Ban Nha, lời chào mở đầu kết thúc bằng dấu hai chấm (Estimada señora López:), không dùng dấu phẩy như tiếng Anh.'
        },
        dialogue: [
          { s: 'Recepcionista', t: 'Hotel Miramar, buenos días. ¿En qué puedo ayudarle?', vi: 'Khách sạn Miramar xin chào. Tôi có thể giúp gì cho ông?' },
          { s: 'Sr. Ruiz', t: 'Buenos días. Le llamo en relación con la reserva que hice la semana pasada.', vi: 'Chào cô. Tôi gọi về việc đặt phòng tôi đã làm tuần trước.' },
          { s: 'Recepcionista', t: 'Por supuesto. ¿Me podría decir su nombre, por favor?', vi: 'Vâng ạ. Ông có thể cho tôi biết tên được không?' },
          { s: 'Sr. Ruiz', t: 'Sí, Antonio Ruiz. Les envié un correo ayer; sin embargo, todavía no he recibido respuesta.', vi: 'Vâng, Antonio Ruiz. Tôi đã gửi email cho quý khách sạn hôm qua; tuy nhiên, đến giờ tôi vẫn chưa nhận được hồi âm.' },
          { s: 'Recepcionista', t: 'Disculpe las molestias. Tuvimos un problema con el sistema; por lo tanto, algunos correos se retrasaron.', vi: 'Xin lỗi ông vì sự bất tiện. Hệ thống của chúng tôi gặp sự cố; vì vậy, một số email bị chậm.' },
          { s: 'Sr. Ruiz', t: 'Entiendo. Aunque ya es un poco tarde, ¿podrían confirmarme la reserva por escrito?', vi: 'Tôi hiểu. Dù đã hơi muộn, quý vị có thể xác nhận đặt phòng cho tôi bằng văn bản không?' },
          { s: 'Recepcionista', t: 'Por supuesto. Se la enviamos hoy mismo. Muchas gracias por su paciencia.', vi: 'Tất nhiên ạ. Chúng tôi sẽ gửi cho ông ngay hôm nay. Cảm ơn ông rất nhiều vì đã kiên nhẫn.' }
        ],
        exercises: [
          { type: 'mc', q: 'No sabemos si el envío llegará a tiempo. Aunque ___ tarde, lo aceptaremos.', options: ['llega', 'llegue', 'llegó'], answer: 1, explain: 'Chưa biết hàng có đến muộn hay không → aunque + subjuntivo: llegue.' },
          { type: 'mc', q: 'Lời chào mở đầu đúng cho một email trang trọng là:', options: ['Estimada señora Pérez:', '¡Hola, señora Pérez!', 'Querida Pérez,'], answer: 0, explain: 'Thư trang trọng: Estimado/a + señor/a + họ, kết thúc bằng dấu hai chấm.' },
          { type: 'fill', q: 'Le ___ mi currículum en este correo. (yo, adjuntar)', answer: ['adjunto'], hint: 'presente, ngôi yo', explain: 'Công thức cố định: Le adjunto...' },
          { type: 'fill', q: 'El hotel estaba lleno; ___ embargo, nos dieron una habitación.', answer: ['sin'], hint: 'tuy nhiên', explain: 'Sin embargo = tuy nhiên, diễn tả sự đối lập.' },
          { type: 'mc', q: 'No recibimos su pago; ___, el pedido ha sido cancelado.', options: ['aunque', 'por lo tanto', 'sin embargo'], answer: 1, explain: 'Chỉ kết quả → por lo tanto.' },
          { type: 'order', vi: 'Tôi mong nhận được hồi âm của ông/bà.', words: ['respuesta', 'espera', 'Quedo', 'su', 'la', 'de', 'a'], answer: 'Quedo a la espera de su respuesta' },
          { type: 'order', vi: 'Tôi viết thư này để xin thông tin.', words: ['información', 'escribo', 'Le', 'solicitar', 'para'], answer: 'Le escribo para solicitar información' },
          { type: 'mc', q: '___ he enviado varios correos, no he recibido respuesta.', options: ['Aunque', 'Por lo tanto', 'Sin embargo'], answer: 0, explain: 'Aunque (mặc dù) nối hai mệnh đề đối lập trong cùng một câu.' }
        ]
      }
    ]
  }
]);
