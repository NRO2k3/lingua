"""Gộp danh sách từ nguồn (sources/work/*.tsv) với bản dịch (sources/work/out/*.tsv)
thành src/data/bank/<lang>.json cho trang Kho từ vựng.

Mỗi từ là một mảng gọn:  en: [từ, ipa, nghĩa, cấp, từ loại]
                          es: [từ có mạo từ, '', nghĩa, cấp, từ loại]
                          zh: [chữ Hán, pinyin, nghĩa, cấp, từ loại, Hán Việt]
Chạy:  python3 scripts/build-bank.py
"""
import glob, json, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
WORK = os.path.join(ROOT, 'sources', 'work')
OUT = os.path.join(ROOT, 'src', 'data', 'bank')


def rows(path, skip_header):
    with open(path, encoding='utf-8') as f:
        lines = [l.rstrip('\n').split('\t') for l in f if l.strip()]
    return lines[1:] if skip_header else lines


# Từ miệt thị / không phù hợp với người học: không đưa vào kho
EXCLUDE = {'en': {'gook'}, 'es': set(), 'zh': set()}


# ── Riêng tiếng Tây Ban Nha ──
# Danh sách tần suất lấy từ phụ đề phim nên lệch: từ thô tục/bạo lực lên cấp thấp, còn từ chủ đề cơ bản
# (thứ, tháng, đồ ăn, quần áo…) xuống B1–B2; danh từ giống cái bị gộp vào giống đực (madre → padre).
# Hiệu chỉnh theo danh mục chủ đề (nociones específicas) A1–A2 của Plan Curricular del Instituto Cervantes.

# Từ thô tục, miệt thị và từ lỗi thời (peseta)
EXCLUDE['es'] = set('''mierda puta puto joder carajo culo coño cabrón gilipollas follar marica jodido cagar mear
teta bastardo peseta'''.split())


def _levels(spec):
    out = {}
    for line in spec.strip().split('\n'):
        lv, words = line.split(':', 1)
        out.update((w, lv.strip()) for w in words.split())
    return out


# Ghi đè cấp, theo từ gốc (cột word của sources/work/es-*.tsv)
ES_LEVEL = _levels('''
A1: lunes martes miércoles jueves viernes sábado enero febrero marzo abril mayo junio julio agosto septiembre
A1: octubre noviembre diciembre cero siete ocho nueve diez once doce quince veinte treinta cuarenta cincuenta
A1: sesenta setenta ochenta cien ciento desayuno almuerzo cena desayunar cenar pan leche café té fruta manzana
A1: carne pollo pescado huevo queso arroz sopa cerveza restaurante camarero bebida ropa camisa pantalones vestido
A1: zapato piso cocina baño dormitorio ventana mesa silla abuelo marido autobús tren avión metro taxi profesor
A1: estudiante oficina color rojo azul verde amarillo gris marrón boca pelo brazo pierna sol calor frío colegio
A1: universidad plaza banco tienda mercado hospital hotel estudiar playa ordenador móvil
A2: naranja patata tomate ensalada azúcar aceite postre helado chocolate galleta tarta pastel verdura cebolla ajo
A2: mantequilla cuchillo plato vaso taza botella menú almorzar limón bar cafetería camiseta falda abrigo chaqueta
A2: sombrero bolso traje corbata guante bota gafas reloj apartamento salón comedor jardín sofá armario lámpara
A2: ducha escalera ascensor techo garaje balcón primo nieto sobrino bicicleta moto barco billete estación
A2: aeropuerto parada camión maleta pasaporte enfermero abogado ingeniero cocinero secretario periodista fábrica
A2: empleado conductor bombero cantante actor pintor escritor nariz oreja diente estómago cuello lluvia nieve
A2: llover nube primavera invierno otoño temperatura examen alumno lápiz goma instituto biblioteca parque museo
A2: ayuntamiento cocinar nadar lavar turista correo
B1: matar arma sangre robar guerra idiota estúpido tonto golpear destruir víctima ejército ataque atacar soldado
B1: militar luchar odio odiar crimen cárcel huir cometer enemigo pelear jurar apostar engañar arrestar prisión
B1: pelea lucha guardia juez juicio defensa detective testigo culpable inocente sobrevivir héroe banda operación
B1: misión investigación autoridad espíritu alma supuesto embargo través San considerar mantener realizar obtener
B1: convertir siquiera ello ante tras unido asunto modo suponer frente gobierno política ley sistema derecho loco
B2: disparar diablo demonio asesino asesinar asesinato sexo sexual droga nave cabo teniente coronel capitán bomba
B2: infierno maldición batalla haz veras amo señorito don maldito tribunal zorra referir
''')

# Sửa dạng hiển thị / nghĩa / từ loại: từ gốc → (từ, nghĩa hoặc None, từ loại hoặc None)
ES_FIX = {m: (m, None, None) for m in 'enero febrero marzo abril mayo junio julio agosto septiembre octubre noviembre diciembre'.split()}
ES_FIX.update({
    'móvil': ('el móvil', 'điện thoại di động', 'n'),
    'través': ('a través de', 'xuyên qua; thông qua', 'prep'),
    'embargo': ('sin embargo', 'tuy nhiên', 'conj'),
    'supuesto': ('por supuesto', 'tất nhiên', 'adv'),
    'veras': ('de veras', 'thật sự', 'adv'),
})

# Từ thiết yếu thiếu trong danh sách tần suất: (từ, nghĩa, cấp, từ loại); bỏ qua nếu đã có
ES_EXTRA = [
    ('el domingo', 'Chủ nhật', 'A1', 'n'), ('trece', 'mười ba', 'A1', 'num'), ('catorce', 'mười bốn', 'A1', 'num'),
    ('dieciséis', 'mười sáu', 'A1', 'num'), ('noventa', 'chín mươi', 'A1', 'num'),
    ('doscientos', 'hai trăm', 'A1', 'num'), ('quinientos', 'năm trăm', 'A1', 'num'),
    ('la madre', 'mẹ', 'A1', 'n'), ('la mamá', 'mẹ (thân mật)', 'A1', 'n'), ('los padres', 'bố mẹ', 'A1', 'n'),
    ('la hermana', 'chị gái; em gái', 'A1', 'n'), ('la hija', 'con gái', 'A1', 'n'), ('la abuela', 'bà', 'A1', 'n'),
    ('la esposa', 'vợ', 'A1', 'n'), ('la tía', 'cô; dì; bác gái', 'A1', 'n'), ('la niña', 'bé gái', 'A1', 'n'),
    ('la novia', 'bạn gái; cô dâu', 'A2', 'n'), ('la prima', 'chị/em họ (nữ)', 'A2', 'n'), ('la nieta', 'cháu gái', 'A2', 'n'),
    ('el zumo', 'nước ép', 'A1', 'n'), ('el refresco', 'nước ngọt', 'A1', 'n'), ('el bocadillo', 'bánh mì kẹp', 'A1', 'n'),
    ('el jamón', 'giăm bông', 'A1', 'n'), ('el plátano', 'quả chuối', 'A1', 'n'),
    ('el tenedor', 'cái nĩa', 'A2', 'n'), ('la cuchara', 'cái thìa', 'A2', 'n'), ('la propina', 'tiền boa', 'A2', 'n'),
    ('la fresa', 'dâu tây', 'A2', 'n'), ('la uva', 'quả nho', 'A2', 'n'), ('la zanahoria', 'cà rốt', 'A2', 'n'),
    ('la lechuga', 'rau xà lách', 'A2', 'n'), ('el yogur', 'sữa chua', 'A2', 'n'), ('la pimienta', 'hạt tiêu', 'A2', 'n'),
    ('la tortilla', 'trứng tráng kiểu Tây Ban Nha (tortilla)', 'A2', 'n'), ('la paella', 'cơm paella', 'A2', 'n'),
    ('la merienda', 'bữa xế', 'A2', 'n'), ('merendar', 'ăn xế', 'A2', 'v'),
    ('el jersey', 'áo len', 'A2', 'n'), ('la gorra', 'mũ lưỡi trai', 'A2', 'n'), ('el calcetín', 'tất, vớ', 'A2', 'n'),
    ('la bufanda', 'khăn quàng cổ', 'A2', 'n'), ('la nevera', 'tủ lạnh', 'A2', 'n'),
    ('la estantería', 'giá, kệ (sách)', 'A2', 'n'), ('la terraza', 'sân thượng; hiên', 'A2', 'n'),
    ('rosa', 'màu hồng', 'A1', 'adj'), ('morado', 'màu tím', 'A2', 'adj'),
    ('el dependiente / la dependienta', 'nhân viên bán hàng', 'A1', 'n'),
    ('el peluquero / la peluquera', 'thợ cắt tóc', 'A2', 'n'), ('el agricultor / la agricultora', 'nông dân', 'A2', 'n'),
    ('el bolígrafo', 'bút bi', 'A1', 'n'), ('el cuaderno', 'quyển vở', 'A1', 'n'), ('la mochila', 'ba lô', 'A1', 'n'),
    ('el diccionario', 'từ điển', 'A1', 'n'), ('las vacaciones', 'kỳ nghỉ', 'A1', 'n'),
    ('la pizarra', 'bảng (lớp học)', 'A2', 'n'), ('los deberes', 'bài tập về nhà', 'A2', 'n'),
    ('la asignatura', 'môn học', 'A2', 'n'), ('el aula', 'phòng học', 'A2', 'n'),
    ('el supermercado', 'siêu thị', 'A1', 'n'), ('la farmacia', 'hiệu thuốc', 'A1', 'n'),
    ('la iglesia', 'nhà thờ', 'A2', 'n'), ('correos', 'bưu điện', 'A2', 'n'),
    ('el correo electrónico', 'thư điện tử, email', 'A2', 'n'), ('internet', 'mạng internet', 'A2', 'n'),
    ('ducharse', 'tắm (vòi sen)', 'A1', 'v'), ('levantarse', 'thức dậy; đứng dậy', 'A1', 'v'),
    ('acostarse', 'đi ngủ', 'A1', 'v'), ('despertarse', 'thức giấc', 'A1', 'v'), ('lavarse', 'rửa (tay, mặt…)', 'A1', 'v'),
    ('vestirse', 'mặc quần áo', 'A1', 'v'), ('llamarse', 'tên là', 'A1', 'v'), ('nevar', 'tuyết rơi', 'A2', 'v'),
]


# Cách đọc đúng cho các từ HSK đa âm (nguồn ghi nhiều cách đọc, cách đầu tiên thường là họ/dạng cổ)
PINYIN_FIX = {}
_fix = os.path.join(ROOT, 'sources', 'zh-pinyin-fix.tsv')
if os.path.exists(_fix):
    PINYIN_FIX = dict(l.rstrip('\n').split('\t') for l in open(_fix, encoding='utf-8') if l.strip())


def build(lang):
    words, missing, seen_es = [], [], set()
    for src in sorted((p for p in glob.glob(f'{WORK}/{lang}-*.tsv') if re.search(r'-\d+\.tsv$', p)), key=lambda p: int(re.search(r'-(\d+)\.tsv$', p)[1])):
        out = os.path.join(WORK, 'out', os.path.basename(src))
        if not os.path.exists(out):
            missing.append(os.path.basename(src))
            continue
        for a, b in zip(rows(src, True), rows(out, False)):
            assert a[0] == b[0], (src, a[0], b[0])
            if a[0] in EXCLUDE[lang]:
                continue
            if lang == 'en':
                words.append([a[0], b[1], b[2], a[2], a[1]])
            elif lang == 'es':
                if b[2].strip() == 'SKIP':
                    continue
                w, vi, pos = ES_FIX.get(a[0], (None, None, None))
                words.append([w or b[1], '', vi or b[2], ES_LEVEL.get(a[0], a[2]), pos or a[1]])
                seen_es.add(a[0])
            else:
                hv = b[1] if re.search(r'[^\s-]', b[1]) else ''
                words.append([a[0], PINYIN_FIX.get(a[0], a[1]), b[2], a[3], a[2], hv])
    if lang == 'es':
        unknown = (set(ES_LEVEL) | set(ES_FIX)) - seen_es
        if unknown:
            print('es: ghi đè cho từ không có trong nguồn:', ' '.join(sorted(unknown)))
        have = {x[0] for x in words}
        words += [[w, '', vi, lv, pos] for w, vi, lv, pos in ES_EXTRA if w not in have]
    os.makedirs(OUT, exist_ok=True)
    with open(os.path.join(OUT, f'{lang}.json'), 'w', encoding='utf-8') as f:
        json.dump(words, f, ensure_ascii=False, separators=(',', ':'))
    print(lang, len(words), 'words', ('(thiếu: ' + ', '.join(missing) + ')') if missing else '')


for lang in ('en', 'es', 'zh'):
    build(lang)
