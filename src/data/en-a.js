// Tiếng Anh (Anh-Mỹ) — Level A1 & A2
addLevels('en', [
  // ===================================================================
  // A1
  // ===================================================================
  {
    id: 'A1',
    title: 'Sơ cấp 1',
    desc: 'Chào hỏi, giới thiệu bản thân và gia đình, nói về đồ vật, thói quen hằng ngày và gọi đồ ăn uống bằng những câu đơn giản.',
    units: [
      // ---------------------------------------------------------------
      {
        id: 'en-a1-1',
        icon: '👋',
        title: 'Chào hỏi & giới thiệu',
        goal: 'Chào hỏi, nói tên mình, hỏi thăm sức khoẻ và giới thiệu người khác.',
        vocab: [
          { w: 'hello', ipa: '/həˈloʊ/', vi: 'xin chào', ex: 'Hello, my name is Anna.', exVi: 'Xin chào, tên tôi là Anna.' },
          { w: 'hi', ipa: '/haɪ/', vi: 'chào (thân mật)', ex: 'Hi, Tom!', exVi: 'Chào Tom!' },
          { w: 'good morning', ipa: '/ɡʊd ˈmɔrnɪŋ/', vi: 'chào buổi sáng', ex: 'Good morning, teacher!', exVi: 'Chào buổi sáng cô/thầy ạ!' },
          { w: 'goodbye', ipa: '/ɡʊdˈbaɪ/', vi: 'tạm biệt', ex: 'Goodbye! See you tomorrow.', exVi: 'Tạm biệt! Hẹn gặp lại ngày mai.' },
          { w: 'name', ipa: '/neɪm/', vi: 'tên', ex: 'My name is Minh.', exVi: 'Tên tôi là Minh.' },
          { w: 'nice to meet you', ipa: '/naɪs tə ˈmit ju/', vi: 'rất vui được gặp bạn', ex: 'Hi, Lan. Nice to meet you.', exVi: 'Chào Lan. Rất vui được gặp bạn.' },
          { w: 'How are you?', ipa: '/haʊ ɑr ju/', vi: 'Bạn khoẻ không?', ex: 'Hi, Peter. How are you?', exVi: 'Chào Peter. Bạn khoẻ không?' },
          { w: 'fine', ipa: '/faɪn/', vi: 'khoẻ, ổn', ex: "I'm fine, thanks.", exVi: 'Tôi khoẻ, cảm ơn.' },
          { w: 'thank you', ipa: '/ˈθæŋk ju/', vi: 'cảm ơn', ex: 'Thank you very much!', exVi: 'Cảm ơn bạn rất nhiều!' },
          { w: 'friend', ipa: '/frɛnd/', vi: 'bạn bè', ex: 'She is my friend.', exVi: 'Cô ấy là bạn của tôi.' }
        ],
        grammar: {
          title: 'Động từ to be (am / is / are) và đại từ nhân xưng',
          explain: [
            'Động từ "to be" có nghĩa là "là", "thì", "ở". Ta dùng nó để nói ai đó là ai, là gì, ở đâu hoặc cảm thấy thế nào: I am Lan (Tôi là Lan), He is happy (Anh ấy vui).',
            'Đại từ nhân xưng làm chủ ngữ: I (tôi), you (bạn/các bạn), he (anh ấy), she (cô ấy), it (nó), we (chúng tôi/chúng ta), they (họ/chúng nó). Lưu ý: "you" dùng cho cả số ít và số nhiều.',
            'Quy tắc ghép: I đi với am; he, she, it (và một người/vật) đi với is; you, we, they (và nhiều người/vật) đi với are.',
            'Thể phủ định: thêm "not" sau to be: I am not, she is not (isn\'t), they are not (aren\'t). Khi nói, người bản xứ thường dùng dạng viết tắt: I\'m, you\'re, he\'s, she\'s, it\'s, we\'re, they\'re.'
          ],
          table: [
            ['Chủ ngữ', 'to be', 'Viết tắt', 'Ví dụ'],
            ['I', 'am', "I'm", "I'm Minh."],
            ['you', 'are', "you're", "You're my friend."],
            ['he / she / it', 'is', "he's / she's / it's", "She's a teacher."],
            ['we', 'are', "we're", "We're students."],
            ['they', 'are', "they're", "They're fine."]
          ],
          examples: [
            { t: 'I am a student.', vi: 'Tôi là sinh viên.' },
            { t: 'She is my friend.', vi: 'Cô ấy là bạn của tôi.' },
            { t: "We're fine, thank you.", vi: 'Chúng tôi khoẻ, cảm ơn bạn.' },
            { t: "He isn't a teacher.", vi: 'Anh ấy không phải là giáo viên.' },
            { t: 'They are from Hanoi.', vi: 'Họ đến từ Hà Nội.' }
          ],
          tip: 'Người Việt hay quên to be vì tiếng Việt nói "Tôi vui", "Cô ấy đẹp" không cần chữ "là". Trong tiếng Anh phải có to be: nói "I am happy", không nói "I happy".'
        },
        dialogue: [
          { s: 'Anna', t: "Hello! My name is Anna. What's your name?", vi: 'Xin chào! Tên mình là Anna. Bạn tên gì?' },
          { s: 'Minh', t: "Hi, Anna. I'm Minh. Nice to meet you.", vi: 'Chào Anna. Mình là Minh. Rất vui được gặp bạn.' },
          { s: 'Anna', t: 'Nice to meet you, too. How are you?', vi: 'Mình cũng rất vui được gặp bạn. Bạn khoẻ không?' },
          { s: 'Minh', t: "I'm fine, thank you. And you?", vi: 'Mình khoẻ, cảm ơn bạn. Còn bạn?' },
          { s: 'Anna', t: "I'm good. This is Tom. He is my friend.", vi: 'Mình ổn. Đây là Tom. Cậu ấy là bạn mình.' },
          { s: 'Tom', t: 'Hi, Minh. Good morning!', vi: 'Chào Minh. Chào buổi sáng!' },
          { s: 'Minh', t: 'Good morning, Tom!', vi: 'Chào buổi sáng, Tom!' }
        ],
        exercises: [
          { type: 'mc', q: 'I ___ a student.', options: ['am', 'is', 'are'], answer: 0,
            explain: 'Chủ ngữ I luôn đi với am.' },
          { type: 'mc', q: 'They ___ my friends.', options: ['is', 'am', 'are'], answer: 2,
            explain: 'They (họ) là số nhiều nên đi với are.' },
          { type: 'fill', q: 'She ___ a doctor.', answer: ['is'], hint: 'to be',
            explain: 'She (cô ấy) đi với is.' },
          { type: 'fill', q: 'We ___ students.', answer: ['are'], hint: 'to be',
            explain: 'We (chúng tôi) đi với are.' },
          { type: 'mc', q: 'Đáp lại câu "How are you?" thế nào cho đúng?', options: ["I'm fine, thank you.", "I'm Anna.", 'Nice to meet you.'], answer: 0,
            explain: '"How are you?" hỏi thăm sức khoẻ, nên trả lời "I\'m fine, thank you." (Tôi khoẻ, cảm ơn).' },
          { type: 'fill', q: 'He ___ not a teacher.', answer: ['is'], hint: 'to be (phủ định)',
            explain: 'Phủ định: he + is + not. Viết tắt: He isn\'t a teacher.' },
          { type: 'order', vi: 'Tên tôi là Lan.', words: ['Lan', 'is', 'name', 'My'], answer: 'My name is Lan', alt: ['Lan is My name'] },
          { type: 'order', vi: 'Rất vui được gặp bạn.', words: ['you', 'meet', 'Nice', 'to'], answer: 'Nice to meet you' }
        ]
      },
      // ---------------------------------------------------------------
      {
        id: 'en-a1-2',
        icon: '🔢',
        title: 'Số đếm, tuổi & quốc tịch',
        goal: 'Đếm số, hỏi và nói tuổi, hỏi ai đó đến từ đâu và quốc tịch gì.',
        vocab: [
          { w: 'number', ipa: '/ˈnʌmbɚ/', vi: 'số', ex: 'What is your phone number?', exVi: 'Số điện thoại của bạn là gì?' },
          { w: 'twelve', ipa: '/twɛlv/', vi: 'mười hai', ex: 'My brother is twelve.', exVi: 'Em trai tôi mười hai tuổi.' },
          { w: 'twenty', ipa: '/ˈtwɛnti/', vi: 'hai mươi', ex: 'There are twenty students in my class.', exVi: 'Lớp tôi có hai mươi học sinh.' },
          { w: 'thirty', ipa: '/ˈθɝti/', vi: 'ba mươi', ex: 'My teacher is thirty years old.', exVi: 'Thầy giáo tôi ba mươi tuổi.' },
          { w: 'years old', ipa: '/jɪrz oʊld/', vi: '… tuổi', ex: 'I am eighteen years old.', exVi: 'Tôi mười tám tuổi.' },
          { w: 'from', ipa: '/frʌm/', vi: 'từ, đến từ', ex: 'I am from Da Nang.', exVi: 'Tôi đến từ Đà Nẵng.' },
          { w: 'country', ipa: '/ˈkʌntri/', vi: 'đất nước', ex: 'Vietnam is a beautiful country.', exVi: 'Việt Nam là một đất nước đẹp.' },
          { w: 'Vietnamese', ipa: '/ˌviɛtnəˈmiz/', vi: 'người/thuộc Việt Nam; tiếng Việt', ex: 'We are Vietnamese.', exVi: 'Chúng tôi là người Việt Nam.' },
          { w: 'American', ipa: '/əˈmɛrɪkən/', vi: 'người/thuộc Mỹ', ex: 'John is American.', exVi: 'John là người Mỹ.' },
          { w: 'Japanese', ipa: '/ˌdʒæpəˈniz/', vi: 'người/thuộc Nhật; tiếng Nhật', ex: 'Is Yuki Japanese?', exVi: 'Yuki có phải người Nhật không?' }
        ],
        grammar: {
          title: 'Câu hỏi với to be và Wh-questions (what / where / how old)',
          explain: [
            'Câu hỏi Yes/No với to be: đưa am/is/are lên trước chủ ngữ. You are Vietnamese → Are you Vietnamese? Trả lời ngắn: Yes, I am. / No, I\'m not.',
            'Câu hỏi có từ để hỏi (Wh-question): Từ để hỏi + to be + chủ ngữ? Ví dụ: What is your name? (Tên bạn là gì?), Where are you from? (Bạn đến từ đâu?), How old are you? (Bạn bao nhiêu tuổi?).',
            'Nói tuổi: I am + số + (years old). Ví dụ: I am twenty (years old). Nói quê quán: I am from + nước/thành phố. Nói quốc tịch: I am + tính từ quốc tịch (Vietnamese, American, Japanese…).',
            'Số đếm: 13–19 kết thúc bằng -teen (thirteen, fifteen…), nhấn ở cuối; các số tròn chục kết thúc bằng -ty (thirty, fifty…), nhấn ở đầu. Hãy phát âm rõ để không nhầm 13 và 30.'
          ],
          table: [
            ['Từ để hỏi', 'Câu hỏi', 'Trả lời'],
            ['What', 'What is your name?', 'My name is Mai.'],
            ['Where', 'Where are you from?', "I'm from Vietnam."],
            ['How old', 'How old is he?', "He's thirty."],
            ['(Yes/No)', 'Are you American?', "No, I'm not. I'm Vietnamese."]
          ],
          examples: [
            { t: 'Where is she from?', vi: 'Cô ấy đến từ đâu?' },
            { t: 'Is he Japanese? — Yes, he is.', vi: 'Anh ấy là người Nhật à? — Đúng vậy.' },
            { t: 'How old is your sister?', vi: 'Chị gái bạn bao nhiêu tuổi?' },
            { t: "What's your phone number?", vi: 'Số điện thoại của bạn là gì?' }
          ],
          tip: 'Đừng dịch từng chữ "Tôi có 20 tuổi" thành "I have 20 years". Tiếng Anh dùng to be: "I am 20 (years old)". Và trong câu trả lời ngắn khẳng định, không viết tắt: nói "Yes, I am", không nói "Yes, I\'m".'
        },
        dialogue: [
          { s: 'Mai', t: 'Hi! Where are you from?', vi: 'Chào bạn! Bạn đến từ đâu?' },
          { s: 'John', t: "I'm from the USA. I'm American. And you?", vi: 'Mình đến từ Mỹ. Mình là người Mỹ. Còn bạn?' },
          { s: 'Mai', t: "I'm from Vietnam. I'm Vietnamese.", vi: 'Mình đến từ Việt Nam. Mình là người Việt.' },
          { s: 'John', t: 'How old are you, Mai?', vi: 'Bạn bao nhiêu tuổi, Mai?' },
          { s: 'Mai', t: "I'm twenty years old. How about you?", vi: 'Mình hai mươi tuổi. Còn bạn thì sao?' },
          { s: 'John', t: "I'm twenty-two. Are you a student?", vi: 'Mình hai mươi hai. Bạn là sinh viên à?' },
          { s: 'Mai', t: 'Yes, I am.', vi: 'Đúng vậy.' }
        ],
        exercises: [
          { type: 'mc', q: '___ are you from?', options: ['What', 'Where', 'How old'], answer: 1,
            explain: 'Hỏi quê quán, nơi đến dùng Where (ở đâu).' },
          { type: 'mc', q: 'Số 30 trong tiếng Anh là:', options: ['thirteen', 'thirty', 'three'], answer: 1,
            explain: 'thirty = 30; thirteen = 13; three = 3.' },
          { type: 'fill', q: '___ old are you?', answer: ['How'], hint: 'hỏi tuổi',
            explain: 'Hỏi tuổi: How old are you?' },
          { type: 'mc', q: '"Are you Vietnamese?" — "Yes, ___."', options: ['I am', "I'm", 'I are'], answer: 0,
            explain: 'Câu trả lời ngắn khẳng định không viết tắt: Yes, I am.' },
          { type: 'fill', q: '___ she from Japan?', answer: ['Is'], hint: 'to be đứng đầu câu hỏi',
            explain: 'Câu hỏi Yes/No: đưa is lên trước chủ ngữ she.' },
          { type: 'fill', q: 'I am twenty years ___.', answer: ['old'], hint: 'tuổi',
            explain: 'Nói tuổi: I am + số + years old.' },
          { type: 'order', vi: 'Bạn đến từ đâu?', words: ['from?', 'are', 'Where', 'you'], answer: 'Where are you from?' },
          { type: 'order', vi: 'Anh ấy ba mươi tuổi.', words: ['old', 'He', 'thirty', 'years', 'is'], answer: 'He is thirty years old' }
        ]
      },
      // ---------------------------------------------------------------
      {
        id: 'en-a1-3',
        icon: '👨‍👩‍👧',
        title: 'Gia đình',
        goal: 'Giới thiệu các thành viên trong gia đình và nói đồ vật, người thân là của ai.',
        vocab: [
          { w: 'family', ipa: '/ˈfæməli/', vi: 'gia đình', ex: 'I love my family.', exVi: 'Tôi yêu gia đình mình.' },
          { w: 'mother', ipa: '/ˈmʌðɚ/', vi: 'mẹ', ex: 'My mother is a nurse.', exVi: 'Mẹ tôi là y tá.' },
          { w: 'father', ipa: '/ˈfɑðɚ/', vi: 'bố, cha', ex: 'His father is fifty.', exVi: 'Bố anh ấy năm mươi tuổi.' },
          { w: 'brother', ipa: '/ˈbrʌðɚ/', vi: 'anh trai / em trai', ex: 'This is my brother, Nam.', exVi: 'Đây là anh trai tôi, Nam.' },
          { w: 'sister', ipa: '/ˈsɪstɚ/', vi: 'chị gái / em gái', ex: 'Her sister is a student.', exVi: 'Em gái cô ấy là học sinh.' },
          { w: 'son', ipa: '/sʌn/', vi: 'con trai', ex: 'Their son is five years old.', exVi: 'Con trai họ năm tuổi.' },
          { w: 'daughter', ipa: '/ˈdɔtɚ/', vi: 'con gái', ex: 'My daughter is very smart.', exVi: 'Con gái tôi rất thông minh.' },
          { w: 'husband', ipa: '/ˈhʌzbənd/', vi: 'chồng', ex: "Lan's husband is a doctor.", exVi: 'Chồng của Lan là bác sĩ.' },
          { w: 'wife', ipa: '/waɪf/', vi: 'vợ', ex: 'His wife is Japanese.', exVi: 'Vợ anh ấy là người Nhật.' },
          { w: 'grandparents', ipa: '/ˈɡrænˌpɛrənts/', vi: 'ông bà', ex: 'My grandparents are seventy.', exVi: 'Ông bà tôi bảy mươi tuổi.' }
        ],
        grammar: {
          title: "Tính từ sở hữu (my, your, his…) và 's sở hữu",
          explain: [
            'Tính từ sở hữu đứng trước danh từ để chỉ "của ai": my (của tôi), your (của bạn), his (của anh ấy), her (của cô ấy), its (của nó), our (của chúng tôi), their (của họ). Ví dụ: my mother = mẹ của tôi.',
            'Trật tự ngược với tiếng Việt: tiếng Việt nói "mẹ (của) tôi", tiếng Anh nói "my mother" — chữ chỉ người sở hữu đứng TRƯỚC.',
            "Khi người sở hữu là một cái tên hoặc danh từ, thêm 's: Lan's brother (anh trai của Lan), my father's car (xe của bố tôi). Với danh từ số nhiều đã tận cùng bằng s, chỉ thêm dấu ': my parents' house (nhà của bố mẹ tôi).",
            "Đừng nhầm its (của nó) với it's (= it is), và your (của bạn) với you're (= you are)."
          ],
          table: [
            ['Đại từ', 'Tính từ sở hữu', 'Ví dụ'],
            ['I', 'my', 'my sister'],
            ['you', 'your', 'your family'],
            ['he', 'his', 'his wife'],
            ['she', 'her', 'her husband'],
            ['it', 'its', 'its name'],
            ['we', 'our', 'our son'],
            ['they', 'their', 'their daughter']
          ],
          examples: [
            { t: 'This is my family.', vi: 'Đây là gia đình tôi.' },
            { t: 'Her brother is twelve.', vi: 'Em trai cô ấy mười hai tuổi.' },
            { t: 'Our grandparents are from Hue.', vi: 'Ông bà chúng tôi đến từ Huế.' },
            { t: "Tom's sister is a teacher.", vi: 'Chị gái của Tom là giáo viên.' },
            { t: "My parents' house is big.", vi: 'Nhà của bố mẹ tôi rộng.' }
          ],
          tip: 'his hay her phụ thuộc vào NGƯỜI SỞ HỮU, không phụ thuộc vào người được nhắc tới. "Mẹ của anh ấy" là his mother (vì "anh ấy" là nam), "bố của cô ấy" là her father.'
        },
        dialogue: [
          { s: 'Linh', t: 'Is this your family photo?', vi: 'Đây là ảnh gia đình bạn à?' },
          { s: 'David', t: 'Yes, it is. This is my father, and this is my mother.', vi: 'Đúng rồi. Đây là bố mình, còn đây là mẹ mình.' },
          { s: 'Linh', t: 'Who is the boy? Is he your brother?', vi: 'Cậu bé kia là ai? Cậu ấy là em trai bạn à?' },
          { s: 'David', t: "Yes. His name is Ben. He's ten.", vi: 'Ừ. Tên em ấy là Ben. Em ấy mười tuổi.' },
          { s: 'Linh', t: 'And who is she?', vi: 'Còn cô ấy là ai?' },
          { s: 'David', t: "She's my sister, Emma. Her husband is Japanese.", vi: 'Đó là chị gái mình, Emma. Chồng chị ấy là người Nhật.' },
          { s: 'Linh', t: 'Your family is beautiful!', vi: 'Gia đình bạn thật đẹp!' }
        ],
        exercises: [
          { type: 'mc', q: 'This is Tom. ___ sister is a nurse.', options: ['Her', 'His', 'Its'], answer: 1,
            explain: 'Tom là nam nên dùng his (của anh ấy).' },
          { type: 'mc', q: 'Lan has a brother. ___ brother is ten.', options: ['His', 'Her', 'Their'], answer: 1,
            explain: 'Người sở hữu là Lan (nữ) nên dùng her, dù người được nhắc tới là con trai.' },
          { type: 'fill', q: 'We love ___ parents.', answer: ['our'], hint: 'tính từ sở hữu của we',
            explain: 'we → our (của chúng tôi).' },
          { type: 'fill', q: 'This is ___ car. (xe của Nam)', answer: ["Nam's"], hint: "dùng 's",
            explain: "Sở hữu với tên riêng: thêm 's → Nam's car." },
          { type: 'mc', q: "Your father's wife is your ___.", options: ['mother', 'sister', 'daughter'], answer: 0,
            explain: "Your father's wife = your mother (mẹ của bạn)." },
          { type: 'fill', q: 'My mother and father are my ___.', answer: ['parents'], hint: 'bố mẹ',
            explain: 'parents = bố mẹ.' },
          { type: 'order', vi: 'Đây là anh trai của tôi.', words: ['my', 'This', 'brother', 'is'], answer: 'This is my brother' },
          { type: 'order', vi: 'Tên chị gái của Anna là Kate.', words: ["Anna's", 'is', 'name', 'Kate', "sister's"], answer: "Anna's sister's name is Kate", alt: ["Kate is Anna's sister's name"] }
        ]
      },
      // ---------------------------------------------------------------
      {
        id: 'en-a1-4',
        icon: '🎨',
        title: 'Đồ vật & màu sắc',
        goal: 'Gọi tên đồ vật quen thuộc, nói màu sắc, dùng a/an, số nhiều và this/that/these/those.',
        vocab: [
          { w: 'book', ipa: '/bʊk/', vi: 'quyển sách', ex: 'This is a good book.', exVi: 'Đây là một quyển sách hay.' },
          { w: 'pen', ipa: '/pɛn/', vi: 'cây bút', ex: 'I have two pens.', exVi: 'Tôi có hai cây bút.' },
          { w: 'bag', ipa: '/bæɡ/', vi: 'cái túi, cặp', ex: 'Her bag is red.', exVi: 'Túi của cô ấy màu đỏ.' },
          { w: 'umbrella', ipa: '/ʌmˈbrɛlə/', vi: 'cái ô, dù', ex: 'Is that your umbrella?', exVi: 'Kia có phải ô của bạn không?' },
          { w: 'phone', ipa: '/foʊn/', vi: 'điện thoại', ex: 'My phone is black.', exVi: 'Điện thoại của tôi màu đen.' },
          { w: 'box', ipa: '/bɑks/', vi: 'cái hộp', ex: 'These boxes are heavy.', exVi: 'Những cái hộp này nặng.' },
          { w: 'red', ipa: '/rɛd/', vi: 'màu đỏ', ex: 'I like red apples.', exVi: 'Tôi thích táo đỏ.' },
          { w: 'blue', ipa: '/blu/', vi: 'màu xanh dương', ex: 'The sky is blue.', exVi: 'Bầu trời màu xanh.' },
          { w: 'green', ipa: '/ɡrin/', vi: 'màu xanh lá', ex: 'That is a green umbrella.', exVi: 'Kia là một chiếc ô màu xanh lá.' },
          { w: 'black', ipa: '/blæk/', vi: 'màu đen', ex: 'Those pens are black.', exVi: 'Những cây bút kia màu đen.' }
        ],
        grammar: {
          title: 'a / an, danh từ số nhiều, this / that / these / those',
          explain: [
            'a/an nghĩa là "một", dùng trước danh từ đếm được số ít. Dùng "an" trước từ bắt đầu bằng NGUYÊN ÂM (a, e, i, o, u khi đọc): an apple, an umbrella, an hour (h câm). Còn lại dùng "a": a book, a pen, a university (u đọc là /ju/).',
            'Số nhiều: thông thường thêm -s (book → books). Thêm -es sau s, x, ch, sh, o: box → boxes, watch → watches. Phụ âm + y → -ies: city → cities. Một số từ bất quy tắc: man → men, woman → women, child → children.',
            'this (cái này) và these (những cái này) chỉ vật ở GẦN; that (cái kia) và those (những cái kia) chỉ vật ở XA. this/that đi với danh từ số ít + is; these/those đi với danh từ số nhiều + are.',
            'Tính từ chỉ màu đứng TRƯỚC danh từ: a red bag (một cái túi đỏ). Hoặc đứng sau to be: The bag is red.'
          ],
          table: [
            ['', 'Gần', 'Xa'],
            ['Số ít', 'this book (is)', 'that book (is)'],
            ['Số nhiều', 'these books (are)', 'those books (are)']
          ],
          examples: [
            { t: 'This is an umbrella.', vi: 'Đây là một cái ô.' },
            { t: 'That bag is blue.', vi: 'Cái túi kia màu xanh dương.' },
            { t: 'These are my books.', vi: 'Đây là những quyển sách của tôi.' },
            { t: 'Those boxes are green.', vi: 'Những cái hộp kia màu xanh lá.' }
          ],
          tip: 'Tiếng Việt không đổi hình thức danh từ khi số nhiều ("hai quyển sách"), nên người Việt hay quên -s. Hãy nhớ: two books, three pens. Và màu đứng trước: "a red bag", không phải "a bag red".'
        },
        dialogue: [
          { s: 'Hoa', t: 'Excuse me, is this your umbrella?', vi: 'Xin lỗi, đây có phải ô của bạn không?' },
          { s: 'Sam', t: 'No, it isn\'t. My umbrella is green.', vi: 'Không phải. Ô của mình màu xanh lá.' },
          { s: 'Hoa', t: 'Look! That umbrella is green. Is it your umbrella?', vi: 'Nhìn kìa! Chiếc ô kia màu xanh lá. Có phải ô của bạn không?' },
          { s: 'Sam', t: 'Yes, it is. Thank you! And are these your books?', vi: 'Đúng rồi. Cảm ơn bạn! Còn mấy quyển sách này là của bạn à?' },
          { s: 'Hoa', t: 'Yes, they are. And those black pens are my pens, too.', vi: 'Đúng vậy. Và mấy cây bút đen kia cũng là bút của mình.' },
          { s: 'Sam', t: 'OK. Here you are.', vi: 'Được rồi. Của bạn đây.' }
        ],
        exercises: [
          { type: 'mc', q: 'She has ___ umbrella.', options: ['a', 'an', 'two'], answer: 1,
            explain: 'umbrella bắt đầu bằng nguyên âm /ʌ/ nên dùng an. "two" sai vì umbrella đang ở số ít.' },
          { type: 'mc', q: '___ are my books. (ở ngay cạnh tôi)', options: ['This', 'That', 'These', 'Those'], answer: 2,
            explain: 'Số nhiều + ở gần → These.' },
          { type: 'fill', q: 'I have two ___. (box)', answer: ['boxes'], hint: 'số nhiều của box',
            explain: 'Danh từ tận cùng bằng x thêm -es: box → boxes.' },
          { type: 'fill', q: 'Look at ___ bird over there! It is blue.', answer: ['that'], hint: 'số ít, ở xa',
            explain: 'Một con chim (số ít) ở xa (over there) → that.' },
          { type: 'mc', q: 'Câu nào đúng?', options: ['I have a bag red.', 'I have a red bag.', 'I have red a bag.'], answer: 1,
            explain: 'Tính từ màu sắc đứng trước danh từ, sau a/an: a red bag.' },
          { type: 'fill', q: 'It is ___ orange.', answer: ['an'], hint: 'a hay an?',
            explain: 'orange bắt đầu bằng nguyên âm /ɔ/ nên dùng an.' },
          { type: 'order', vi: 'Những cây bút kia màu đen.', words: ['black', 'pens', 'Those', 'are'], answer: 'Those pens are black', alt: ['Those are black pens'] },
          { type: 'order', vi: 'Đây có phải điện thoại của bạn không?', words: ['phone?', 'this', 'your', 'Is'], answer: 'Is this your phone?' }
        ]
      },
      // ---------------------------------------------------------------
      {
        id: 'en-a1-5',
        icon: '⏰',
        title: 'Thói quen hằng ngày',
        goal: 'Kể về các hoạt động thường ngày của mình và người khác, hỏi về thói quen.',
        vocab: [
          { w: 'get up', ipa: '/ɡɛt ʌp/', vi: 'thức dậy', ex: 'I get up at six.', exVi: 'Tôi thức dậy lúc sáu giờ.' },
          { w: 'have breakfast', ipa: '/hæv ˈbrɛkfəst/', vi: 'ăn sáng', ex: 'She has breakfast at home.', exVi: 'Cô ấy ăn sáng ở nhà.' },
          { w: 'take a shower', ipa: '/teɪk ə ˈʃaʊɚ/', vi: 'tắm (vòi sen)', ex: 'He takes a shower every morning.', exVi: 'Anh ấy tắm mỗi sáng.' },
          { w: 'go to work', ipa: '/ɡoʊ tə wɝk/', vi: 'đi làm', ex: 'My father goes to work by bus.', exVi: 'Bố tôi đi làm bằng xe buýt.' },
          { w: 'go to school', ipa: '/ɡoʊ tə skul/', vi: 'đi học', ex: 'Do you go to school on Saturday?', exVi: 'Bạn có đi học vào thứ Bảy không?' },
          { w: 'watch TV', ipa: '/wɑtʃ ˌtiˈvi/', vi: 'xem ti vi', ex: 'We watch TV after dinner.', exVi: 'Chúng tôi xem ti vi sau bữa tối.' },
          { w: 'go to bed', ipa: '/ɡoʊ tə bɛd/', vi: 'đi ngủ', ex: 'I go to bed at eleven.', exVi: 'Tôi đi ngủ lúc mười một giờ.' },
          { w: 'every day', ipa: '/ˈɛvri deɪ/', vi: 'mỗi ngày', ex: 'She studies English every day.', exVi: 'Cô ấy học tiếng Anh mỗi ngày.' },
          { w: 'morning', ipa: '/ˈmɔrnɪŋ/', vi: 'buổi sáng', ex: "I don't drink coffee in the morning.", exVi: 'Tôi không uống cà phê vào buổi sáng.' },
          { w: 'evening', ipa: '/ˈivnɪŋ/', vi: 'buổi tối', ex: 'He reads books in the evening.', exVi: 'Anh ấy đọc sách vào buổi tối.' }
        ],
        grammar: {
          title: 'Thì hiện tại đơn (Present Simple)',
          explain: [
            'Thì hiện tại đơn dùng để nói về thói quen, việc lặp đi lặp lại và sự thật hiển nhiên: I get up at six every day (Ngày nào tôi cũng dậy lúc 6 giờ).',
            'Với I/you/we/they: dùng động từ nguyên mẫu (I work). Với he/she/it: thêm -s (works). Thêm -es sau o, s, x, ch, sh (go → goes, watch → watches). Phụ âm + y → -ies (study → studies). Đặc biệt: have → has.',
            'Phủ định: don\'t (do not) / doesn\'t (does not) + động từ nguyên mẫu. I don\'t watch TV. She doesn\'t watch TV.',
            'Câu hỏi: Do/Does + chủ ngữ + động từ nguyên mẫu? Do you get up early? — Yes, I do. Does he work here? — No, he doesn\'t.'
          ],
          table: [
            ['Chủ ngữ', 'Khẳng định', 'Phủ định', 'Câu hỏi'],
            ['I / you / we / they', 'work', "don't work", 'Do … work?'],
            ['he / she / it', 'works', "doesn't work", 'Does … work?']
          ],
          examples: [
            { t: 'I get up at six thirty.', vi: 'Tôi thức dậy lúc sáu rưỡi.' },
            { t: 'My sister watches TV every evening.', vi: 'Em gái tôi xem ti vi mỗi tối.' },
            { t: "He doesn't have breakfast.", vi: 'Anh ấy không ăn sáng.' },
            { t: 'Do you go to work by bus?', vi: 'Bạn có đi làm bằng xe buýt không?' },
            { t: 'What time does she go to bed?', vi: 'Cô ấy đi ngủ lúc mấy giờ?' }
          ],
          tip: 'Khi đã có does/doesn\'t thì động từ chính trở về nguyên mẫu, KHÔNG thêm -s nữa. Sai: "She doesn\'t works". Đúng: "She doesn\'t work". Sai: "Does he goes?". Đúng: "Does he go?".'
        },
        dialogue: [
          { s: 'Lisa', t: 'What time do you get up, Huy?', vi: 'Huy thường dậy lúc mấy giờ?' },
          { s: 'Huy', t: 'I get up at six. Then I take a shower and have breakfast.', vi: 'Mình dậy lúc sáu giờ. Sau đó mình tắm và ăn sáng.' },
          { s: 'Lisa', t: 'Do you go to work by bus?', vi: 'Bạn đi làm bằng xe buýt à?' },
          { s: 'Huy', t: 'No, I don\'t. I go by motorbike. What about your brother?', vi: 'Không. Mình đi xe máy. Còn anh trai bạn thì sao?' },
          { s: 'Lisa', t: 'He works at home. He doesn\'t get up early.', vi: 'Anh ấy làm việc ở nhà. Anh ấy không dậy sớm.' },
          { s: 'Huy', t: 'Lucky him! What does he do in the evening?', vi: 'Sướng thật! Buổi tối anh ấy làm gì?' },
          { s: 'Lisa', t: 'He watches TV and goes to bed at midnight.', vi: 'Anh ấy xem ti vi và đi ngủ lúc nửa đêm.' }
        ],
        exercises: [
          { type: 'mc', q: 'She ___ up at 6 a.m. every day.', options: ['get', 'gets', 'getting'], answer: 1,
            explain: 'Chủ ngữ she (ngôi 3 số ít) → động từ thêm -s: gets.' },
          { type: 'mc', q: '___ your brother go to school?', options: ['Do', 'Does', 'Is'], answer: 1,
            explain: 'your brother = he → câu hỏi dùng Does.' },
          { type: 'fill', q: 'He ___ TV in the evening. (watch)', answer: ['watches'], hint: 'ngôi 3 số ít',
            explain: 'watch tận cùng bằng ch → thêm -es: watches.' },
          { type: 'fill', q: 'They ___ have breakfast at home. (phủ định)', answer: ["don't", 'do not'], hint: 'trợ động từ',
            explain: 'They + don\'t (do not) + động từ nguyên mẫu.' },
          { type: 'fill', q: 'My mother ___ to work by bus. (go)', answer: ['goes'], hint: 'ngôi 3 số ít',
            explain: 'go tận cùng bằng o → thêm -es: goes.' },
          { type: 'mc', q: 'Câu nào đúng?', options: ["She doesn't works on Sunday.", "She doesn't work on Sunday.", "She don't work on Sunday."], answer: 1,
            explain: 'She → doesn\'t, và sau doesn\'t động từ ở dạng nguyên mẫu: work.' },
          { type: 'order', vi: 'Tôi đi ngủ lúc mười một giờ.', words: ['bed', 'I', 'at', 'to', 'go', 'eleven'], answer: 'I go to bed at eleven' },
          { type: 'order', vi: 'Bạn có ăn sáng mỗi ngày không?', words: ['breakfast', 'day?', 'Do', 'have', 'every', 'you'], answer: 'Do you have breakfast every day?' }
        ]
      },
      // ---------------------------------------------------------------
      {
        id: 'en-a1-6',
        icon: '🍜',
        title: 'Đồ ăn & thức uống',
        goal: 'Nói về đồ ăn thức uống, hỏi có hay không, và gọi món một cách lịch sự.',
        vocab: [
          { w: 'rice', ipa: '/raɪs/', vi: 'cơm, gạo', ex: 'We eat rice every day.', exVi: 'Chúng tôi ăn cơm mỗi ngày.' },
          { w: 'bread', ipa: '/brɛd/', vi: 'bánh mì', ex: "I'd like some bread, please.", exVi: 'Cho tôi một ít bánh mì.' },
          { w: 'egg', ipa: '/ɛɡ/', vi: 'quả trứng', ex: 'I have two eggs for breakfast.', exVi: 'Tôi ăn hai quả trứng vào bữa sáng.' },
          { w: 'apple', ipa: '/ˈæpəl/', vi: 'quả táo', ex: 'Would you like an apple?', exVi: 'Bạn có muốn ăn một quả táo không?' },
          { w: 'chicken', ipa: '/ˈtʃɪkɪn/', vi: 'thịt gà, con gà', ex: 'I like chicken soup.', exVi: 'Tôi thích súp gà.' },
          { w: 'water', ipa: '/ˈwɔtɚ/', vi: 'nước', ex: 'Can I have some water, please?', exVi: 'Cho tôi xin ít nước được không?' },
          { w: 'coffee', ipa: '/ˈkɔfi/', vi: 'cà phê', ex: "I'd like a cup of coffee.", exVi: 'Tôi muốn một tách cà phê.' },
          { w: 'tea', ipa: '/ti/', vi: 'trà', ex: 'Do you have any green tea?', exVi: 'Bạn có trà xanh không?' },
          { w: 'milk', ipa: '/mɪlk/', vi: 'sữa', ex: "We don't have any milk.", exVi: 'Chúng ta không còn sữa.' },
          { w: 'hungry', ipa: '/ˈhʌŋɡri/', vi: 'đói', ex: "I'm hungry. Let's eat!", exVi: 'Tôi đói rồi. Đi ăn thôi!' }
        ],
        grammar: {
          title: 'Danh từ đếm được / không đếm được, some / any, I\'d like',
          explain: [
            'Danh từ đếm được có số ít và số nhiều, đi được với a/an và số đếm: an egg, two apples. Danh từ không đếm được không có số nhiều, không đi với a/an: rice, bread, water, milk, coffee, tea. Muốn đếm phải dùng đơn vị: a glass of water, a cup of coffee, a slice of bread, a bowl of rice.',
            'some (một vài, một ít) thường dùng trong câu khẳng định, với danh từ số nhiều hoặc không đếm được: some eggs, some milk. any dùng trong câu phủ định và câu hỏi: I don\'t have any eggs. Do you have any milk?',
            'Ngoại lệ: dùng some trong câu hỏi khi mời hoặc xin một thứ gì đó: Would you like some tea? Can I have some water?',
            'I\'d like (= I would like) nghĩa là "tôi muốn", lịch sự hơn "I want". Dùng khi gọi món: I\'d like a coffee, please. Để mời ai đó: Would you like…? (Bạn có muốn… không?).'
          ],
          table: [
            ['', 'Đếm được', 'Không đếm được'],
            ['Khẳng định', 'some eggs / an egg', 'some milk'],
            ['Phủ định', "not any eggs", "not any milk"],
            ['Câu hỏi', 'any eggs?', 'any milk?'],
            ['Mời / xin', 'Would you like some apples?', 'Can I have some water?']
          ],
          examples: [
            { t: "I'd like some rice and chicken, please.", vi: 'Cho tôi cơm và thịt gà.' },
            { t: 'Do you have any milk?', vi: 'Bạn có sữa không?' },
            { t: "We don't have any bread.", vi: 'Chúng ta không có chút bánh mì nào.' },
            { t: 'Would you like a cup of tea?', vi: 'Bạn có muốn một tách trà không?' }
          ],
          tip: 'Không nói "two breads" hay "a rice". Hãy dùng đơn vị đo: two slices of bread, a bowl of rice. Và "I\'d like" lịch sự hơn "I want" khi gọi món ở nhà hàng.'
        },
        dialogue: [
          { s: 'Waiter', t: 'Hello! What would you like?', vi: 'Xin chào! Quý khách muốn dùng gì ạ?' },
          { s: 'Nga', t: "I'd like some chicken rice, please.", vi: 'Cho tôi một phần cơm gà.' },
          { s: 'Waiter', t: 'Sure. Would you like something to drink?', vi: 'Vâng. Quý khách có muốn uống gì không ạ?' },
          { s: 'Nga', t: 'Yes. Do you have any green tea?', vi: 'Có. Ở đây có trà xanh không?' },
          { s: 'Waiter', t: "Sorry, we don't have any green tea. We have coffee and milk tea.", vi: 'Xin lỗi, chúng tôi hết trà xanh. Chúng tôi có cà phê và trà sữa.' },
          { s: 'Nga', t: "OK, I'd like a coffee and a glass of water, please.", vi: 'Vậy cho tôi một ly cà phê và một ly nước lọc.' },
          { s: 'Waiter', t: 'No problem.', vi: 'Không vấn đề gì ạ.' }
        ],
        exercises: [
          { type: 'mc', q: 'Can I have ___ water, please?', options: ['a', 'some', 'an'], answer: 1,
            explain: 'water không đếm được nên không dùng a/an; khi xin thứ gì đó dùng some.' },
          { type: 'mc', q: "We don't have ___ bread.", options: ['some', 'any', 'a'], answer: 1,
            explain: 'Câu phủ định dùng any.' },
          { type: 'fill', q: "I'd ___ a cup of tea, please.", answer: ['like', 'love'], hint: 'I would ...',
            explain: "I'd like = I would like (tôi muốn — lịch sự); I'd love… cũng đúng." },
          { type: 'mc', q: 'Từ nào KHÔNG đếm được?', options: ['apple', 'egg', 'rice'], answer: 2,
            explain: 'rice (cơm, gạo) không đếm được; apple và egg đếm được.' },
          { type: 'fill', q: 'Do you have ___ eggs?', answer: ['any'], hint: 'câu hỏi',
            explain: 'Câu hỏi thông thường dùng any.' },
          { type: 'fill', q: 'I want ___ apple.', answer: ['an'], hint: 'a hay an?',
            explain: 'apple bắt đầu bằng nguyên âm → an apple.' },
          { type: 'order', vi: 'Tôi muốn một tách cà phê.', words: ["I'd", 'coffee', 'a', 'of', 'like', 'cup'], answer: "I'd like a cup of coffee" },
          { type: 'order', vi: 'Bạn có muốn ăn chút cơm gà không?', words: ['some', 'Would', 'chicken', 'rice?', 'like', 'you'], answer: 'Would you like some chicken rice?' }
        ]
      }
    ]
  },
  // ===================================================================
  // A2
  // ===================================================================
  {
    id: 'A2',
    title: 'Sơ cấp 2',
    desc: 'Hẹn giờ, mua sắm, chỉ đường, kể chuyện đã qua, nói về sở thích và kế hoạch tương lai trong các tình huống quen thuộc.',
    units: [
      // ---------------------------------------------------------------
      {
        id: 'en-a2-1',
        icon: '📅',
        title: 'Thời gian & lịch hẹn',
        goal: 'Hỏi và nói giờ, sắp xếp lịch hẹn, dùng đúng giới từ in / on / at.',
        vocab: [
          { w: "o'clock", ipa: '/əˈklɑk/', vi: '… giờ đúng', ex: "It's nine o'clock.", exVi: 'Bây giờ là chín giờ đúng.' },
          { w: 'half past', ipa: '/hæf pæst/', vi: '… giờ rưỡi', ex: "It's half past seven.", exVi: 'Bây giờ là bảy giờ rưỡi.' },
          { w: 'quarter', ipa: '/ˈkwɔrtɚ/', vi: 'mười lăm phút (một phần tư giờ)', ex: "It's a quarter past ten.", exVi: 'Bây giờ là mười giờ mười lăm.' },
          { w: 'appointment', ipa: '/əˈpɔɪntmənt/', vi: 'cuộc hẹn (với bác sĩ, công việc…)', ex: 'I have a doctor\'s appointment at 3 p.m.', exVi: 'Tôi có hẹn với bác sĩ lúc 3 giờ chiều.' },
          { w: 'meeting', ipa: '/ˈmitɪŋ/', vi: 'cuộc họp', ex: 'The meeting is on Monday morning.', exVi: 'Cuộc họp vào sáng thứ Hai.' },
          { w: 'Monday', ipa: '/ˈmʌndeɪ/', vi: 'thứ Hai', ex: 'I go to the gym on Mondays.', exVi: 'Tôi đi tập gym vào các ngày thứ Hai.' },
          { w: 'weekend', ipa: '/ˈwikɛnd/', vi: 'cuối tuần', ex: 'What do you do on the weekend?', exVi: 'Bạn làm gì vào cuối tuần?' },
          { w: 'early', ipa: '/ˈɝli/', vi: 'sớm', ex: 'Please come early.', exVi: 'Vui lòng đến sớm.' },
          { w: 'late', ipa: '/leɪt/', vi: 'muộn, trễ', ex: "Sorry, I'm late.", exVi: 'Xin lỗi, tôi đến muộn.' },
          { w: 'free', ipa: '/fri/', vi: 'rảnh', ex: 'Are you free on Friday?', exVi: 'Bạn có rảnh vào thứ Sáu không?' }
        ],
        grammar: {
          title: 'Nói giờ và giới từ thời gian in / on / at',
          explain: [
            'Hỏi giờ: What time is it? Trả lời bằng "It\'s…". Cách đơn giản nhất là đọc giờ rồi đọc phút: 7:15 = seven fifteen, 7:30 = seven thirty, 7:45 = seven forty-five.',
            'Cách truyền thống: past (quá) cho phút 1–30, to (kém) cho phút 31–59. 7:15 = a quarter past seven, 7:30 = half past seven, 7:45 = a quarter to eight (tám giờ kém mười lăm). Giờ đúng dùng o\'clock: seven o\'clock. Phân biệt sáng/chiều bằng a.m. (sáng) và p.m. (chiều, tối).',
            'at dùng cho thời điểm cụ thể: at 7 o\'clock, at noon, at night, at lunchtime. on dùng cho thứ và ngày: on Monday, on May 5th, on my birthday. in dùng cho khoảng thời gian dài hơn: in the morning, in the afternoon, in the evening, in July, in 2025, in (the) summer.',
            'Trong tiếng Anh-Mỹ nói "on the weekend" (Anh-Anh nói "at the weekend").'
          ],
          table: [
            ['Giới từ', 'Dùng với', 'Ví dụ'],
            ['at', 'giờ, thời điểm', "at 9 o'clock, at noon, at night"],
            ['on', 'thứ, ngày', 'on Friday, on June 1st, on the weekend (Mỹ)'],
            ['in', 'buổi, tháng, năm, mùa', 'in the morning, in May, in 2026, in winter']
          ],
          examples: [
            { t: 'What time is it? — It\'s a quarter to six.', vi: 'Mấy giờ rồi? — Sáu giờ kém mười lăm.' },
            { t: 'The meeting starts at 10 a.m. on Tuesday.', vi: 'Cuộc họp bắt đầu lúc 10 giờ sáng thứ Ba.' },
            { t: 'My birthday is in October.', vi: 'Sinh nhật tôi vào tháng Mười.' },
            { t: 'I study English in the evening.', vi: 'Tôi học tiếng Anh vào buổi tối.' },
            { t: 'Are you free on Saturday afternoon?', vi: 'Chiều thứ Bảy bạn có rảnh không?' }
          ],
          tip: 'Nhớ nhanh: at < on < in (từ nhỏ đến lớn: giờ → ngày → tháng/năm). Chú ý ngoại lệ "at night" nhưng "in the morning / in the evening". Nếu đã có "Monday" cụ thể thì dùng on: "on Monday morning", không dùng "in Monday morning".'
        },
        dialogue: [
          { s: 'Tuan', t: 'Hi, Sarah. Are you free on Friday?', vi: 'Chào Sarah. Thứ Sáu bạn có rảnh không?' },
          { s: 'Sarah', t: 'In the morning, no. I have a meeting at nine. Why?', vi: 'Buổi sáng thì không. Mình có cuộc họp lúc chín giờ. Sao vậy?' },
          { s: 'Tuan', t: "Let's have lunch together. How about half past twelve?", vi: 'Mình đi ăn trưa cùng nhau đi. Mười hai rưỡi được không?' },
          { s: 'Sarah', t: "Sorry, I have a doctor's appointment at noon. Is one thirty OK?", vi: 'Xin lỗi, mình có hẹn bác sĩ lúc mười hai giờ trưa. Một rưỡi được không?' },
          { s: 'Tuan', t: 'Sure. One thirty at the café near your office.', vi: 'Được chứ. Một rưỡi ở quán cà phê gần văn phòng bạn nhé.' },
          { s: 'Sarah', t: "Great! Don't be late!", vi: 'Tuyệt! Đừng đến muộn nhé!' },
          { s: 'Tuan', t: "Don't worry. I'll be there early.", vi: 'Đừng lo. Mình sẽ đến sớm.' }
        ],
        exercises: [
          { type: 'mc', q: 'The meeting is ___ Monday.', options: ['in', 'on', 'at'], answer: 1,
            explain: 'Thứ trong tuần dùng on: on Monday.' },
          { type: 'mc', q: 'I get up ___ 6:30.', options: ['in', 'on', 'at'], answer: 2,
            explain: 'Giờ cụ thể dùng at: at 6:30.' },
          { type: 'fill', q: 'My birthday is ___ July.', answer: ['in'], hint: 'giới từ + tháng',
            explain: 'Tháng dùng in: in July.' },
          { type: 'mc', q: '7:30 đọc là:', options: ['half past seven', 'half past six', 'a quarter to seven'], answer: 0,
            explain: '7:30 = half past seven (bảy giờ rưỡi), hoặc seven thirty.' },
          { type: 'fill', q: 'We have English class ___ the morning.', answer: ['in'], hint: 'giới từ + buổi',
            explain: 'Buổi trong ngày dùng in: in the morning (ngoại lệ: at night).' },
          { type: 'fill', q: "It's a quarter ___ nine. (8:45)", answer: ['to'], hint: 'kém',
            explain: '8:45 = chín giờ kém mười lăm = a quarter to nine.' },
          { type: 'order', vi: 'Mấy giờ rồi?', words: ['it?', 'is', 'What', 'time'], answer: 'What time is it?' },
          { type: 'order', vi: 'Tôi có hẹn lúc ba giờ vào thứ Sáu.', words: ["o'clock", 'appointment', 'on', 'I', 'three', 'Friday', 'have', 'at', 'an'], answer: "I have an appointment at three o'clock on Friday", alt: ["I have an appointment on Friday at three o'clock"] }
        ]
      },
      // ---------------------------------------------------------------
      {
        id: 'en-a2-2',
        icon: '🛍️',
        title: 'Mua sắm',
        goal: 'Hỏi giá, hỏi số lượng, nhờ và xin phép lịch sự khi đi mua sắm.',
        vocab: [
          { w: 'price', ipa: '/praɪs/', vi: 'giá', ex: 'The price is very good.', exVi: 'Giá rất hời.' },
          { w: 'cheap', ipa: '/tʃip/', vi: 'rẻ', ex: 'These shoes are cheap.', exVi: 'Đôi giày này rẻ.' },
          { w: 'expensive', ipa: '/ɪkˈspɛnsɪv/', vi: 'đắt', ex: 'This watch is too expensive.', exVi: 'Chiếc đồng hồ này đắt quá.' },
          { w: 'size', ipa: '/saɪz/', vi: 'cỡ, kích thước', ex: 'What size do you wear?', exVi: 'Bạn mặc cỡ nào?' },
          { w: 'try on', ipa: '/traɪ ɑn/', vi: 'mặc / đi thử', ex: 'Can I try on this jacket?', exVi: 'Tôi mặc thử chiếc áo khoác này được không?' },
          { w: 'shirt', ipa: '/ʃɝt/', vi: 'áo sơ mi', ex: 'I need a white shirt for work.', exVi: 'Tôi cần một chiếc áo sơ mi trắng để đi làm.' },
          { w: 'shoes', ipa: '/ʃuz/', vi: 'đôi giày', ex: 'How much are these shoes?', exVi: 'Đôi giày này giá bao nhiêu?' },
          { w: 'dollar', ipa: '/ˈdɑlɚ/', vi: 'đô la', ex: "It's twenty dollars.", exVi: 'Nó giá hai mươi đô la.' },
          { w: 'cash', ipa: '/kæʃ/', vi: 'tiền mặt', ex: 'Can I pay in cash?', exVi: 'Tôi trả bằng tiền mặt được không?' },
          { w: 'credit card', ipa: '/ˈkrɛdɪt kɑrd/', vi: 'thẻ tín dụng', ex: 'Do you take credit cards?', exVi: 'Ở đây có nhận thẻ tín dụng không?' }
        ],
        grammar: {
          title: 'How much / How many và can / could để yêu cầu lịch sự',
          explain: [
            'How much dùng để hỏi GIÁ: How much is this shirt? (một món, dùng is) / How much are these shoes? (nhiều món, dùng are). Trả lời: It\'s 15 dollars. / They\'re 40 dollars.',
            'How much còn dùng hỏi số lượng với danh từ KHÔNG đếm được (How much milk do you need?), còn How many dùng với danh từ ĐẾM ĐƯỢC số nhiều (How many apples do you want?).',
            'Can I…? dùng để xin phép: Can I try it on? Can I pay by card? Could you…? dùng để nhờ ai làm gì một cách lịch sự: Could you help me, please? Could là cách nói lịch sự hơn can. Thêm "please" sẽ càng lịch sự.',
            'Đọc giá tiền: $25 = twenty-five dollars; $15.99 = fifteen ninety-nine (hoặc fifteen dollars and ninety-nine cents).'
          ],
          table: [
            ['Mục đích', 'Mẫu câu', 'Ví dụ'],
            ['Hỏi giá (1 món)', 'How much is…?', 'How much is this bag?'],
            ['Hỏi giá (nhiều món)', 'How much are…?', 'How much are these socks?'],
            ['Hỏi số lượng', 'How many + N số nhiều?', 'How many shirts do you need?'],
            ['Xin phép', 'Can I + V…?', 'Can I pay in cash?'],
            ['Nhờ lịch sự', 'Could you + V…, please?', 'Could you show me a smaller size, please?']
          ],
          examples: [
            { t: "How much is this shirt? — It's thirty dollars.", vi: 'Chiếc áo này giá bao nhiêu? — Ba mươi đô.' },
            { t: 'Can I try on these shoes?', vi: 'Tôi đi thử đôi giày này được không?' },
            { t: 'Could you give me a bag, please?', vi: 'Bạn có thể cho tôi một cái túi được không?' },
            { t: 'How many T-shirts do you want?', vi: 'Bạn muốn bao nhiêu chiếc áo phông?' }
          ],
          tip: 'Lời yêu cầu như "Give me…" nghe khá cộc lốc trong tiếng Anh. Hãy dùng "Could you…, please?" hoặc "Can I have…?". Lưu ý: shoes, pants, jeans luôn ở số nhiều nên hỏi "How much ARE these shoes?".'
        },
        dialogue: [
          { s: 'Clerk', t: 'Hi! Can I help you?', vi: 'Xin chào! Tôi có thể giúp gì cho bạn?' },
          { s: 'Thu', t: 'Yes, please. How much is this blue shirt?', vi: 'Vâng. Chiếc áo sơ mi xanh này giá bao nhiêu?' },
          { s: 'Clerk', t: "It's twenty-five dollars.", vi: 'Hai mươi lăm đô ạ.' },
          { s: 'Thu', t: 'Can I try it on?', vi: 'Tôi mặc thử được không?' },
          { s: 'Clerk', t: 'Of course. What size are you?', vi: 'Tất nhiên rồi. Bạn mặc cỡ nào?' },
          { s: 'Thu', t: "Medium. Could you show me those black shoes, too?", vi: 'Cỡ vừa (M). Bạn cho tôi xem cả đôi giày đen kia nữa được không?' },
          { s: 'Clerk', t: "Sure. They're on sale — only forty dollars.", vi: 'Được chứ. Chúng đang giảm giá — chỉ bốn mươi đô thôi.' },
          { s: 'Thu', t: 'Great! Can I pay by credit card?', vi: 'Tuyệt! Tôi trả bằng thẻ tín dụng được không?' }
        ],
        exercises: [
          { type: 'mc', q: '___ is this T-shirt?', options: ['How many', 'How much', 'What much'], answer: 1,
            explain: 'Hỏi giá dùng How much.' },
          { type: 'mc', q: '___ apples do you want?', options: ['How much', 'How many', 'How'], answer: 1,
            explain: 'apples đếm được số nhiều → How many.' },
          { type: 'fill', q: '___ I try on this shirt?', answer: ['Can', 'Could', 'May'], hint: 'xin phép',
            explain: 'Xin phép làm gì: Can I…? (Could I…? / May I…? lịch sự hơn).' },
          { type: 'mc', q: 'Câu nào lịch sự nhất?', options: ['Give me a bag.', 'Could you give me a bag, please?', 'You give me a bag.'], answer: 1,
            explain: 'Could you…, please? là cách nhờ vả lịch sự.' },
          { type: 'fill', q: 'How much ___ these shoes?', answer: ['are'], hint: 'is hay are?',
            explain: 'these shoes là số nhiều → are.' },
          { type: 'fill', q: "It's too ___. Do you have a cheaper one?", answer: ['expensive'], hint: 'đắt',
            explain: 'Muốn tìm món rẻ hơn vì món này quá đắt: too expensive.' },
          { type: 'order', vi: 'Tôi có thể trả bằng thẻ tín dụng không?', words: ['credit', 'I', 'by', 'card?', 'pay', 'Can'], answer: 'Can I pay by credit card?' },
          { type: 'order', vi: 'Bạn có thể cho tôi xem chiếc áo sơ mi xanh kia không?', words: ['show', 'you', 'that', 'me', 'shirt?', 'blue', 'Could'], answer: 'Could you show me that blue shirt?' }
        ]
      },
      // ---------------------------------------------------------------
      {
        id: 'en-a2-3',
        icon: '🏠',
        title: 'Nhà cửa & chỉ đường',
        goal: 'Mô tả nhà cửa, nói vị trí đồ vật và hỏi – chỉ đường đơn giản.',
        vocab: [
          { w: 'kitchen', ipa: '/ˈkɪtʃən/', vi: 'nhà bếp', ex: 'There is a big table in the kitchen.', exVi: 'Có một cái bàn lớn trong bếp.' },
          { w: 'bedroom', ipa: '/ˈbɛdrum/', vi: 'phòng ngủ', ex: 'My apartment has two bedrooms.', exVi: 'Căn hộ của tôi có hai phòng ngủ.' },
          { w: 'bathroom', ipa: '/ˈbæθrum/', vi: 'phòng tắm, nhà vệ sinh', ex: 'Where is the bathroom?', exVi: 'Nhà vệ sinh ở đâu?' },
          { w: 'living room', ipa: '/ˈlɪvɪŋ rum/', vi: 'phòng khách', ex: 'The TV is in the living room.', exVi: 'Ti vi ở trong phòng khách.' },
          { w: 'next to', ipa: '/ˈnɛkst tu/', vi: 'bên cạnh', ex: 'The bank is next to the hotel.', exVi: 'Ngân hàng ở cạnh khách sạn.' },
          { w: 'between', ipa: '/bɪˈtwin/', vi: 'ở giữa (hai vật)', ex: 'The café is between the bank and the park.', exVi: 'Quán cà phê nằm giữa ngân hàng và công viên.' },
          { w: 'across from', ipa: '/əˈkrɔs frʌm/', vi: 'đối diện', ex: 'The school is across from my house.', exVi: 'Trường học ở đối diện nhà tôi.' },
          { w: 'corner', ipa: '/ˈkɔrnɚ/', vi: 'góc (phố, phòng)', ex: 'The pharmacy is on the corner.', exVi: 'Hiệu thuốc ở ngay góc phố.' },
          { w: 'turn left', ipa: '/tɝn lɛft/', vi: 'rẽ trái', ex: 'Turn left at the traffic lights.', exVi: 'Rẽ trái ở chỗ đèn giao thông.' },
          { w: 'go straight', ipa: '/ɡoʊ streɪt/', vi: 'đi thẳng', ex: 'Go straight for two blocks.', exVi: 'Đi thẳng qua hai dãy nhà.' }
        ],
        grammar: {
          title: 'There is / There are, giới từ nơi chốn, câu mệnh lệnh chỉ đường',
          explain: [
            'There is / There are nghĩa là "có" (cái gì tồn tại ở đâu). There is + danh từ số ít hoặc không đếm được: There is a sofa in the living room. There are + danh từ số nhiều: There are three bedrooms.',
            'Phủ định: There isn\'t a…/ There aren\'t any… Câu hỏi: Is there a bank near here? — Yes, there is. / Are there any shops? — No, there aren\'t.',
            'Giới từ nơi chốn: in (trong), on (trên, tiếp xúc bề mặt), under (dưới), next to (bên cạnh), between A and B (giữa A và B), across from (đối diện), behind (phía sau), in front of (phía trước).',
            'Chỉ đường dùng câu mệnh lệnh: bắt đầu bằng động từ nguyên mẫu, không có chủ ngữ: Go straight. Turn left/right. Take the second street on the right. Phủ định thêm Don\'t: Don\'t turn here.'
          ],
          table: [
            ['', 'Số ít / không đếm được', 'Số nhiều'],
            ['Khẳng định', 'There is a bed.', 'There are two beds.'],
            ['Phủ định', "There isn't a garden.", "There aren't any chairs."],
            ['Câu hỏi', 'Is there a bathroom?', 'Are there any windows?']
          ],
          examples: [
            { t: 'There are two bathrooms in our house.', vi: 'Nhà chúng tôi có hai phòng tắm.' },
            { t: 'Is there a supermarket near here?', vi: 'Gần đây có siêu thị không?' },
            { t: 'The cat is under the bed.', vi: 'Con mèo ở dưới gầm giường.' },
            { t: 'Go straight and turn right at the corner.', vi: 'Đi thẳng rồi rẽ phải ở góc phố.' },
            { t: "It's between the post office and the bank.", vi: 'Nó nằm giữa bưu điện và ngân hàng.' }
          ],
          tip: 'Người Việt hay dịch "Nhà tôi có ba phòng" thành "In my house have three rooms" — sai. Hãy nói "There are three rooms in my house" hoặc "My house has three rooms".'
        },
        dialogue: [
          { s: 'Tourist', t: 'Excuse me. Is there a pharmacy near here?', vi: 'Xin lỗi. Gần đây có hiệu thuốc nào không?' },
          { s: 'Khoa', t: 'Yes, there is. Go straight for two blocks.', vi: 'Có đấy. Bạn đi thẳng qua hai dãy nhà.' },
          { s: 'Tourist', t: 'Two blocks. And then?', vi: 'Hai dãy nhà. Rồi sao nữa?' },
          { s: 'Khoa', t: "Turn left at the corner. It's next to a big supermarket.", vi: 'Rẽ trái ở góc phố. Nó ở cạnh một siêu thị lớn.' },
          { s: 'Tourist', t: 'Are there any banks on that street, too?', vi: 'Con phố đó có ngân hàng nào không?' },
          { s: 'Khoa', t: "Yes. There's a bank across from the pharmacy.", vi: 'Có. Có một ngân hàng đối diện hiệu thuốc.' },
          { s: 'Tourist', t: 'Thank you so much!', vi: 'Cảm ơn bạn nhiều lắm!' },
          { s: 'Khoa', t: "You're welcome.", vi: 'Không có gì.' }
        ],
        exercises: [
          { type: 'mc', q: 'There ___ two bedrooms in my apartment.', options: ['is', 'are', 'be'], answer: 1,
            explain: 'two bedrooms số nhiều → There are.' },
          { type: 'mc', q: 'There ___ a sofa in the living room.', options: ['is', 'are', 'am'], answer: 0,
            explain: 'a sofa số ít → There is.' },
          { type: 'fill', q: '___ there a bank near here?', answer: ['Is'], hint: 'câu hỏi, số ít',
            explain: 'Câu hỏi với danh từ số ít: Is there a…?' },
          { type: 'fill', q: 'The cat is ___ the table. (ở dưới)', answer: ['under'], hint: 'dưới',
            explain: 'under = ở dưới.' },
          { type: 'mc', q: 'The café is ___ the bank and the hotel.', options: ['next', 'between', 'across'], answer: 1,
            explain: 'between A and B = ở giữa A và B.' },
          { type: 'fill', q: '___ left at the corner.', answer: ['Turn'], hint: 'rẽ',
            explain: 'Câu mệnh lệnh bắt đầu bằng động từ nguyên mẫu: Turn left.' },
          { type: 'order', vi: 'Có một siêu thị đối diện công viên.', words: ['park', 'There', 'across', 'a', 'the', 'is', 'supermarket', 'from'], answer: 'There is a supermarket across from the park' },
          { type: 'order', vi: 'Đi thẳng rồi rẽ phải.', words: ['turn', 'straight', 'right', 'Go', 'and'], answer: 'Go straight and turn right' }
        ]
      },
      // ---------------------------------------------------------------
      {
        id: 'en-a2-4',
        icon: '🎒',
        title: 'Cuối tuần vừa rồi',
        goal: 'Kể lại những việc đã làm vào cuối tuần trước và hỏi người khác về quá khứ.',
        vocab: [
          { w: 'yesterday', ipa: '/ˈjɛstɚdeɪ/', vi: 'hôm qua', ex: 'I stayed home yesterday.', exVi: 'Hôm qua tôi ở nhà.' },
          { w: 'last weekend', ipa: '/læst ˈwikɛnd/', vi: 'cuối tuần trước', ex: 'What did you do last weekend?', exVi: 'Cuối tuần trước bạn làm gì?' },
          { w: 'ago', ipa: '/əˈɡoʊ/', vi: 'cách đây, trước đây', ex: 'I met him two days ago.', exVi: 'Tôi gặp anh ấy hai ngày trước.' },
          { w: 'visit', ipa: '/ˈvɪzɪt/', vi: 'thăm (visited)', ex: 'We visited our grandparents.', exVi: 'Chúng tôi đã đi thăm ông bà.' },
          { w: 'stay home', ipa: '/steɪ hoʊm/', vi: 'ở nhà (stayed)', ex: 'She stayed home and cooked dinner.', exVi: 'Cô ấy ở nhà và nấu bữa tối.' },
          { w: 'went', ipa: '/wɛnt/', vi: 'đã đi (quá khứ của go)', ex: 'They went to the beach.', exVi: 'Họ đã đi biển.' },
          { w: 'saw', ipa: '/sɔ/', vi: 'đã thấy, đã xem (quá khứ của see)', ex: 'I saw a great movie.', exVi: 'Tôi đã xem một bộ phim hay.' },
          { w: 'ate', ipa: '/eɪt/', vi: 'đã ăn (quá khứ của eat)', ex: 'We ate seafood in Nha Trang.', exVi: 'Chúng tôi đã ăn hải sản ở Nha Trang.' },
          { w: 'bought', ipa: '/bɔt/', vi: 'đã mua (quá khứ của buy)', ex: 'He bought a new phone.', exVi: 'Anh ấy đã mua một chiếc điện thoại mới.' },
          { w: 'had', ipa: '/hæd/', vi: 'đã có, đã trải qua (quá khứ của have)', ex: 'We had a great time.', exVi: 'Chúng tôi đã có khoảng thời gian tuyệt vời.' }
        ],
        grammar: {
          title: 'Thì quá khứ đơn (Past Simple)',
          explain: [
            'Thì quá khứ đơn dùng để kể việc đã xảy ra và đã kết thúc trong quá khứ, thường đi với yesterday, last week/weekend/year, … ago, in 2020. Động từ ở quá khứ có cùng một dạng cho MỌI chủ ngữ (I/he/they worked).',
            'Động từ có quy tắc: thêm -ed (work → worked, play → played). Tận cùng bằng e chỉ thêm -d (live → lived). Phụ âm + y → -ied (study → studied). Một nguyên âm + một phụ âm ở cuối thì gấp đôi phụ âm (stop → stopped).',
            'Động từ bất quy tắc phải học thuộc: go → went, have → had, see → saw, eat → ate, buy → bought, do → did, make → made, meet → met, get → got. To be: I/he/she/it → was; you/we/they → were.',
            'Phủ định: didn\'t + động từ nguyên mẫu (I didn\'t go). Câu hỏi: Did + chủ ngữ + động từ nguyên mẫu? (Did you go?) — Yes, I did. / No, I didn\'t.'
          ],
          table: [
            ['', 'Khẳng định', 'Phủ định', 'Câu hỏi'],
            ['Có quy tắc', 'I visited', "I didn't visit", 'Did you visit…?'],
            ['Bất quy tắc', 'She went', "She didn't go", 'Did she go…?'],
            ['to be', 'It was / They were', "It wasn't / They weren't", 'Was it…? / Were they…?']
          ],
          examples: [
            { t: 'I visited my aunt last weekend.', vi: 'Cuối tuần trước tôi đi thăm dì.' },
            { t: 'We went to a café and ate some cake.', vi: 'Chúng tôi đi cà phê và ăn bánh ngọt.' },
            { t: "She didn't watch TV yesterday.", vi: 'Hôm qua cô ấy không xem ti vi.' },
            { t: 'Did you buy anything? — Yes, I bought a book.', vi: 'Bạn có mua gì không? — Có, tôi mua một quyển sách.' },
            { t: 'The movie was really good.', vi: 'Bộ phim thật sự rất hay.' }
          ],
          tip: 'Sau did/didn\'t, động từ trở về nguyên mẫu. Sai: "Did you went?", "I didn\'t saw". Đúng: "Did you go?", "I didn\'t see". Đuôi -ed đọc ba cách: /t/ (worked), /d/ (played), /ɪd/ sau t, d (visited, needed).'
        },
        dialogue: [
          { s: 'Mark', t: 'Hi, Ha! What did you do last weekend?', vi: 'Chào Hà! Cuối tuần trước bạn làm gì?' },
          { s: 'Ha', t: 'I went to Da Lat with my family.', vi: 'Mình đi Đà Lạt với gia đình.' },
          { s: 'Mark', t: 'Wow! Did you have a good time?', vi: 'Ồ! Bạn có vui không?' },
          { s: 'Ha', t: 'Yes, I did. We visited a flower garden and ate a lot of strawberries.', vi: 'Có chứ. Nhà mình đi thăm một vườn hoa và ăn rất nhiều dâu tây.' },
          { s: 'Mark', t: 'Sounds great! Did you buy any souvenirs?', vi: 'Nghe tuyệt quá! Bạn có mua quà lưu niệm không?' },
          { s: 'Ha', t: 'I bought some coffee for my friends. What about you?', vi: 'Mình mua ít cà phê cho bạn bè. Còn bạn thì sao?' },
          { s: 'Mark', t: "I didn't go out. I stayed home and watched movies.", vi: 'Mình không ra ngoài. Mình ở nhà và xem phim.' }
        ],
        exercises: [
          { type: 'mc', q: 'I ___ my grandparents last weekend.', options: ['visit', 'visited', 'visiting'], answer: 1,
            explain: 'last weekend → quá khứ đơn: visited.' },
          { type: 'mc', q: 'We ___ to the beach yesterday.', options: ['go', 'goed', 'went'], answer: 2,
            explain: 'go là động từ bất quy tắc: go → went.' },
          { type: 'fill', q: 'She ___ a new dress on Saturday. (buy)', answer: ['bought'], hint: 'quá khứ bất quy tắc',
            explain: 'buy → bought.' },
          { type: 'fill', q: "I didn't ___ TV last night. (watch)", answer: ['watch'], hint: "sau didn't",
            explain: "Sau didn't dùng động từ nguyên mẫu: watch." },
          { type: 'mc', q: '___ you see the movie yesterday?', options: ['Do', 'Did', 'Were'], answer: 1,
            explain: 'Câu hỏi quá khứ đơn với động từ thường: Did + chủ ngữ + V nguyên mẫu.' },
          { type: 'fill', q: 'They ___ pizza for dinner two days ago. (eat)', answer: ['ate'], hint: 'quá khứ bất quy tắc',
            explain: 'eat → ate.' },
          { type: 'order', vi: 'Bạn đã làm gì cuối tuần trước?', words: ['do', 'you', 'weekend?', 'What', 'last', 'did'], answer: 'What did you do last weekend?' },
          { type: 'order', vi: 'Tôi ở nhà và học tiếng Anh.', words: ['studied', 'home', 'I', 'English', 'and', 'stayed'], answer: 'I stayed home and studied English' }
        ]
      },
      // ---------------------------------------------------------------
      {
        id: 'en-a2-5',
        icon: '⚽',
        title: 'Sở thích & thể thao',
        goal: 'Nói về sở thích, môn thể thao yêu thích và mức độ thường xuyên làm việc gì.',
        vocab: [
          { w: 'hobby', ipa: '/ˈhɑbi/', vi: 'sở thích', ex: 'My hobby is reading.', exVi: 'Sở thích của tôi là đọc sách.' },
          { w: 'free time', ipa: '/fri taɪm/', vi: 'thời gian rảnh', ex: 'What do you do in your free time?', exVi: 'Bạn làm gì lúc rảnh?' },
          { w: 'soccer', ipa: '/ˈsɑkɚ/', vi: 'bóng đá (Anh-Mỹ)', ex: 'He plays soccer every Sunday.', exVi: 'Anh ấy chơi bóng đá mỗi Chủ nhật.' },
          { w: 'swimming', ipa: '/ˈswɪmɪŋ/', vi: 'bơi lội', ex: 'I love swimming in the summer.', exVi: 'Tôi rất thích bơi vào mùa hè.' },
          { w: 'cooking', ipa: '/ˈkʊkɪŋ/', vi: 'nấu ăn', ex: 'She enjoys cooking for her family.', exVi: 'Cô ấy thích nấu ăn cho gia đình.' },
          { w: 'play the guitar', ipa: '/pleɪ ðə ɡɪˈtɑr/', vi: 'chơi đàn ghi-ta', ex: 'Can you play the guitar?', exVi: 'Bạn có biết chơi ghi-ta không?' },
          { w: 'always', ipa: '/ˈɔlweɪz/', vi: 'luôn luôn', ex: 'I always go jogging in the morning.', exVi: 'Tôi luôn chạy bộ vào buổi sáng.' },
          { w: 'usually', ipa: '/ˈjuʒuəli/', vi: 'thường thường', ex: 'We usually watch soccer on TV.', exVi: 'Chúng tôi thường xem bóng đá trên ti vi.' },
          { w: 'sometimes', ipa: '/ˈsʌmtaɪmz/', vi: 'thỉnh thoảng', ex: 'He sometimes plays tennis.', exVi: 'Thỉnh thoảng anh ấy chơi quần vợt.' },
          { w: 'never', ipa: '/ˈnɛvɚ/', vi: 'không bao giờ', ex: 'My dad never plays video games.', exVi: 'Bố tôi không bao giờ chơi trò chơi điện tử.' }
        ],
        grammar: {
          title: 'like / love / hate + V-ing và trạng từ tần suất',
          explain: [
            'Sau các động từ chỉ sở thích như like (thích), love (rất thích), enjoy (thích thú), don\'t mind (không ngại), hate (ghét), ta thường dùng động từ thêm -ing: I like reading. She hates getting up early.',
            'Cách thêm -ing: thường thêm -ing (read → reading); bỏ e câm (dance → dancing); một nguyên âm + một phụ âm thì gấp đôi phụ âm (swim → swimming, run → running).',
            'Trạng từ tần suất cho biết mức độ thường xuyên: always (100%) > usually > often > sometimes > rarely > never (0%). Vị trí: đứng TRƯỚC động từ thường (I often play soccer) nhưng đứng SAU to be (She is always late). Hỏi tần suất: How often do you…?',
            'Kết hợp với môn thể thao: play + môn có bóng (play soccer, play tennis); go + V-ing (go swimming, go jogging); do + một số môn khác (do yoga, do karate).'
          ],
          table: [
            ['Trạng từ', 'Mức độ', 'Ví dụ'],
            ['always', '100%', 'I always have breakfast.'],
            ['usually', '~80%', 'She usually goes swimming on Sundays.'],
            ['often', '~60%', 'We often play soccer after school.'],
            ['sometimes', '~40%', 'He sometimes cooks dinner.'],
            ['rarely', '~10%', 'They rarely watch TV.'],
            ['never', '0%', 'I am never late.']
          ],
          examples: [
            { t: 'I love playing the guitar.', vi: 'Tôi rất thích chơi đàn ghi-ta.' },
            { t: "My mom doesn't like watching soccer.", vi: 'Mẹ tôi không thích xem bóng đá.' },
            { t: 'How often do you go swimming? — Twice a week.', vi: 'Bạn đi bơi bao lâu một lần? — Một tuần hai lần.' },
            { t: 'He is always tired on Mondays.', vi: 'Anh ấy lúc nào cũng mệt vào thứ Hai.' }
          ],
          tip: 'Sai: "I like swim", "I go always to the gym". Đúng: "I like swimming", "I always go to the gym". Nhớ: trạng từ tần suất đứng trước động từ thường, sau to be.'
        },
        dialogue: [
          { s: 'Jenny', t: 'What do you do in your free time, Phong?', vi: 'Lúc rảnh Phong hay làm gì?' },
          { s: 'Phong', t: 'I love playing soccer. I usually play with my friends on Saturday.', vi: 'Mình rất thích đá bóng. Mình thường đá với bạn bè vào thứ Bảy.' },
          { s: 'Jenny', t: "Cool! I don't like soccer much, but I enjoy swimming.", vi: 'Hay đấy! Mình không thích bóng đá lắm, nhưng mình thích bơi.' },
          { s: 'Phong', t: 'How often do you go swimming?', vi: 'Bạn đi bơi bao lâu một lần?' },
          { s: 'Jenny', t: 'Three times a week. I always go early in the morning.', vi: 'Một tuần ba lần. Mình luôn đi vào sáng sớm.' },
          { s: 'Phong', t: 'Wow. I hate getting up early! I never swim in the morning.', vi: 'Chà. Mình ghét dậy sớm lắm! Mình không bao giờ bơi buổi sáng.' },
          { s: 'Jenny', t: 'Ha ha. Do you have any other hobbies?', vi: 'Ha ha. Bạn còn sở thích nào khác không?' },
          { s: 'Phong', t: 'Yes, I sometimes play the guitar.', vi: 'Có, thỉnh thoảng mình chơi ghi-ta.' }
        ],
        exercises: [
          { type: 'mc', q: 'I love ___ in the sea.', options: ['swim', 'swimming', 'swims'], answer: 1,
            explain: 'Sau love dùng V-ing: swimming (gấp đôi m).' },
          { type: 'mc', q: 'She ___ late for class.', options: ['never is', 'is never', 'never'], answer: 1,
            explain: 'Trạng từ tần suất đứng SAU to be: is never.' },
          { type: 'fill', q: 'He enjoys ___ soccer with his friends. (play)', answer: ['playing'], hint: 'enjoy + V-ing',
            explain: 'Sau enjoy dùng V-ing: playing.' },
          { type: 'fill', q: 'How ___ do you go swimming?', answer: ['often'], hint: 'hỏi tần suất',
            explain: 'How often…? = bao lâu một lần?' },
          { type: 'mc', q: 'Chọn câu đúng:', options: ['I usually play tennis on Sundays.', 'I play usually tennis on Sundays.', 'Usually I tennis play on Sundays.'], answer: 0,
            explain: 'Trạng từ tần suất đứng trước động từ thường: usually play.' },
          { type: 'fill', q: 'My sister hates ___ up early. (get)', answer: ['getting'], hint: 'hate + V-ing',
            explain: 'get → getting (một nguyên âm + một phụ âm: gấp đôi t).' },
          { type: 'order', vi: 'Tôi thỉnh thoảng nấu ăn vào cuối tuần.', words: ['cook', 'weekend', 'sometimes', 'the', 'I', 'on'], answer: 'I sometimes cook on the weekend', alt: ['sometimes I cook on the weekend', 'I cook on the weekend sometimes'] },
          { type: 'order', vi: 'Sở thích của bạn là gì?', words: ['your', 'are', 'What', 'hobbies?'], answer: 'What are your hobbies?' }
        ]
      },
      // ---------------------------------------------------------------
      {
        id: 'en-a2-6',
        icon: '🚀',
        title: 'Kế hoạch tương lai',
        goal: 'Nói về kế hoạch, dự định, đưa ra quyết định tức thời và dự đoán tương lai.',
        vocab: [
          { w: 'plan', ipa: '/plæn/', vi: 'kế hoạch; lên kế hoạch', ex: 'Do you have any plans for the summer?', exVi: 'Bạn có kế hoạch gì cho mùa hè không?' },
          { w: 'tomorrow', ipa: '/təˈmɑroʊ/', vi: 'ngày mai', ex: "I'm going to call her tomorrow.", exVi: 'Ngày mai tôi sẽ gọi cho cô ấy.' },
          { w: 'next week', ipa: '/nɛkst wik/', vi: 'tuần sau', ex: 'We are going to move next week.', exVi: 'Tuần sau chúng tôi sẽ chuyển nhà.' },
          { w: 'vacation', ipa: '/veɪˈkeɪʃən/', vi: 'kỳ nghỉ (Anh-Mỹ)', ex: 'Where are you going on vacation?', exVi: 'Bạn sẽ đi nghỉ ở đâu?' },
          { w: 'travel', ipa: '/ˈtrævəl/', vi: 'du lịch, đi lại', ex: 'I want to travel around Vietnam.', exVi: 'Tôi muốn đi du lịch khắp Việt Nam.' },
          { w: 'ticket', ipa: '/ˈtɪkɪt/', vi: 'vé', ex: 'I bought the plane tickets yesterday.', exVi: 'Hôm qua tôi đã mua vé máy bay.' },
          { w: 'hotel', ipa: '/hoʊˈtɛl/', vi: 'khách sạn', ex: "We're going to stay at a small hotel.", exVi: 'Chúng tôi sẽ ở một khách sạn nhỏ.' },
          { w: 'maybe', ipa: '/ˈmeɪbi/', vi: 'có lẽ', ex: 'Maybe I will go to the party.', exVi: 'Có lẽ tôi sẽ đi dự tiệc.' },
          { w: 'probably', ipa: '/ˈprɑbəbli/', vi: 'có khả năng, chắc là', ex: "It will probably rain tomorrow.", exVi: 'Ngày mai chắc là sẽ mưa.' },
          { w: 'decide', ipa: '/dɪˈsaɪd/', vi: 'quyết định', ex: "I can't decide. I'll think about it.", exVi: 'Tôi chưa quyết được. Tôi sẽ suy nghĩ thêm.' }
        ],
        grammar: {
          title: 'be going to và will',
          explain: [
            'be going to + động từ nguyên mẫu: dùng cho kế hoạch, dự định ĐÃ quyết định từ trước: I\'m going to visit Hue next month (đã định rồi). Cũng dùng để dự đoán khi có dấu hiệu rõ ràng ở hiện tại: Look at those clouds! It\'s going to rain.',
            'will + động từ nguyên mẫu: dùng cho quyết định NGAY lúc nói (I\'m thirsty. — I\'ll get you some water.), lời hứa (I\'ll call you tonight.), lời đề nghị giúp đỡ, và dự đoán theo ý kiến cá nhân (I think it will be sunny.).',
            'Hình thức: am/is/are + going to + V (She is going to travel). will dùng cho mọi chủ ngữ, viết tắt \'ll (I\'ll, she\'ll); phủ định will not = won\'t. Câu hỏi: Are you going to…? / Will you…?',
            'Hay đi kèm: tomorrow, next week/month/year, this weekend, in the future, maybe, probably, I think…'
          ],
          table: [
            ['', 'be going to', 'will'],
            ['Khẳng định', "I'm going to travel.", "I'll travel."],
            ['Phủ định', "She isn't going to come.", "She won't come."],
            ['Câu hỏi', 'Are you going to stay?', 'Will you stay?'],
            ['Dùng khi', 'kế hoạch có sẵn, dấu hiệu rõ ràng', 'quyết định tức thời, hứa, đề nghị, ý kiến']
          ],
          examples: [
            { t: "We're going to travel to Phu Quoc next week.", vi: 'Tuần sau chúng tôi sẽ đi du lịch Phú Quốc.' },
            { t: "The bag looks heavy. I'll help you.", vi: 'Cái túi trông nặng quá. Để tôi giúp bạn.' },
            { t: "I won't be late. I promise!", vi: 'Tôi sẽ không đến muộn đâu. Tôi hứa!' },
            { t: 'What are you going to do this weekend?', vi: 'Cuối tuần này bạn định làm gì?' },
            { t: 'I think she will love the gift.', vi: 'Tôi nghĩ cô ấy sẽ rất thích món quà.' }
          ],
          tip: 'Không có "to" sau will: sai "I will to go", đúng "I will go". Và đừng quên am/is/are trước going to: sai "I going to study", đúng "I am going to study".'
        },
        dialogue: [
          { s: 'Kevin', t: 'Do you have any plans for the summer vacation, Vy?', vi: 'Vy có kế hoạch gì cho kỳ nghỉ hè không?' },
          { s: 'Vy', t: "Yes! I'm going to travel to Hoi An with my sister.", vi: 'Có! Mình định đi du lịch Hội An với chị gái.' },
          { s: 'Kevin', t: 'That sounds fun. Are you going to stay at a hotel?', vi: 'Nghe vui đấy. Hai chị em sẽ ở khách sạn à?' },
          { s: 'Vy', t: "No, we're going to stay at a homestay. We bought the tickets last week.", vi: 'Không, bọn mình sẽ ở homestay. Tuần trước bọn mình mua vé rồi.' },
          { s: 'Kevin', t: "Lucky you! I don't have any plans yet. Maybe I'll visit my parents.", vi: 'Sướng thế! Mình chưa có kế hoạch gì. Có lẽ mình sẽ về thăm bố mẹ.' },
          { s: 'Vy', t: 'Why not come with us? I think you will love Hoi An.', vi: 'Sao không đi cùng bọn mình? Mình nghĩ bạn sẽ rất thích Hội An.' },
          { s: 'Kevin', t: "Really? OK, I'll think about it and decide tomorrow.", vi: 'Thật à? Được, mình sẽ suy nghĩ rồi quyết định vào ngày mai.' }
        ],
        exercises: [
          { type: 'mc', q: 'Look at those dark clouds! It ___ rain.', options: ['will', 'is going to', 'going to'], answer: 1,
            explain: 'Có dấu hiệu rõ ràng (mây đen) → dự đoán bằng be going to.' },
          { type: 'mc', q: '"The phone is ringing." — "OK, I ___ answer it."', options: ['will', 'am going', 'going to'], answer: 0,
            explain: 'Quyết định ngay lúc nói → will (I\'ll answer it).' },
          { type: 'fill', q: 'We are ___ to travel to Da Nang next month.', answer: ['going'], hint: 'be ... to',
            explain: 'Kế hoạch đã định: be going to + V.' },
          { type: 'fill', q: "I ___ forget your birthday. I promise! (phủ định của will)", answer: ["won't", 'will not'], hint: 'will + not',
            explain: "Lời hứa dùng will; phủ định: will not = won't." },
          { type: 'mc', q: 'Chọn câu đúng:', options: ['She will to visit her aunt.', 'She is going visit her aunt.', 'She is going to visit her aunt.'], answer: 2,
            explain: 'Cấu trúc đúng: be going to + V. Không có "to" sau will.' },
          { type: 'fill', q: 'I think it ___ be sunny tomorrow.', answer: ['will'], hint: 'dự đoán theo ý kiến',
            explain: 'Dự đoán theo ý kiến cá nhân (I think…) → will.' },
          { type: 'order', vi: 'Bạn định làm gì vào cuối tuần này?', words: ['do', 'going', 'What', 'weekend?', 'you', 'this', 'are', 'to'], answer: 'What are you going to do this weekend?' },
          { type: 'order', vi: 'Có lẽ tôi sẽ ở nhà.', words: ['stay', 'will', 'Maybe', 'home', 'I'], answer: 'Maybe I will stay home' }
        ]
      }
    ]
  }
]);
