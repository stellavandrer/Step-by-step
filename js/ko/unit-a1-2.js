/* Cours de coréen, unité A1-2 « What's this? / Qu'est-ce que c'est ? » : les consonnes finales (받침), leurs sept
   sons et la liaison (한국어 → [한구거]), les voyelles composées (ㅘ ㅙ ㅚ ㅝ ㅞ ㅟ ㅢ), 이 / 그 / 저 et 이게 뭐예요 ?,
   la négation 이 / 가 아니에요, les nombres sino-coréens, les prix en wons et les numéros de téléphone.
   Explications et traductions en anglais ET en français (js/ko/localize.js garde celles de l'interface).
   Personnages fictifs, prénoms coréens. Faits vérifiables seulement : sept sons possibles en fin de syllabe, liaison
   et nasalisation (합니다 → [함니다]), ㅙ ㅚ ㅞ presque confondus aujourd'hui, ㅢ prononcé [이] après une consonne,
   deux séries de nombres (sino-coréens et coréens), les grands nombres comptés par 만 (10 000), pas de 일 devant
   십, 백, 천, 만, le zéro 공 des numéros de téléphone, les portables en 010, le tiret souvent lu 에, le 한강 à Séoul. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "objetsKO", icon: "briefcase", title: "Things around you", title_fr: "Les objets autour de toi", level: "A1", words: [
    ["책", "book", "livre", "이건 한국어 책이에요."],
    ["공책", "notebook", "cahier", "공책 하나 주세요."],
    ["연필", "pencil", "crayon à papier", "이건 연필이 아니에요."],
    ["볼펜", "pen", "stylo", "이 볼펜은 얼마예요?"],
    ["가방", "bag", "sac", "이건 제 가방이에요."],
    ["의자", "chair", "chaise", "의자가 편해요."],
    ["책상", "desk", "bureau (le meuble)", "그건 제 책상이에요."],
    ["시계", "clock, watch", "horloge, montre", "저건 시계예요."],
    ["휴대폰", "mobile phone", "téléphone portable", "이건 제 휴대폰이 아니에요."],
    ["컴퓨터", "computer", "ordinateur", "컴퓨터가 비싸요."],
    ["우산", "umbrella", "parapluie", "이건 누구 우산이에요?"],
    ["지갑", "wallet, purse", "portefeuille", "그건 제 지갑이에요."],
    ["안경", "glasses", "lunettes", "이건 누구 안경이에요?"],
    ["열쇠", "key", "clé", "이게 열쇠예요?"],
    ["사전", "dictionary", "dictionnaire", "한국어 사전이에요."],
    ["창문", "window", "fenêtre", "저건 창문이에요."],
    ["문", "door", "porte", "문 좀 열어 주세요."],
    ["물건", "thing, object", "objet, chose", "이 물건은 뭐예요?"],
    ["교과서", "textbook", "manuel scolaire", "이건 한국어 교과서예요."],
    ["학생증", "student card", "carte étudiante", "이건 민수 씨 학생증이에요."]
  ] },
  { id: "nombresKO", icon: "calculator", title: "Numbers and prices", title_fr: "Les nombres et les prix", level: "A1", words: [
    ["영", "zero", "zéro", "영 대 영이에요."],
    ["공", "zero (in phone numbers); ball", "zéro (dans les numéros de téléphone) ; ballon", "공일공이에요."],
    ["일", "one (Sino-Korean); also day, work", "un (sino-coréen) ; aussi jour, travail", "일 번이에요."],
    ["이", "two (Sino-Korean); also this, tooth", "deux (sino-coréen) ; aussi ce, dent", "이 번 버스예요."],
    ["삼", "three (Sino-Korean)", "trois (sino-coréen)", "삼 층이에요."],
    ["사", "four (Sino-Korean)", "quatre (sino-coréen)", "사 번이에요."],
    ["오", "five (Sino-Korean)", "cinq (sino-coréen)", "오 분만 기다려 주세요."],
    ["육", "six (Sino-Korean)", "six (sino-coréen)", "육 번 버스예요."],
    ["칠", "seven (Sino-Korean)", "sept (sino-coréen)", "칠 번 버스를 타요."],
    ["팔", "eight (Sino-Korean); also arm", "huit (sino-coréen) ; aussi bras", "팔 번이에요."],
    ["구", "nine (Sino-Korean)", "neuf (sino-coréen)", "구 번이에요."],
    ["십", "ten (Sino-Korean)", "dix (sino-coréen)", "십 분이에요."],
    ["백", "hundred", "cent", "백 원이에요."],
    ["천", "thousand", "mille", "천 원이에요."],
    ["만", "ten thousand", "dix mille", "만 원이에요."],
    ["원", "won (the Korean currency)", "won (la monnaie coréenne)", "삼천 원이에요."],
    ["얼마", "how much", "combien", "이거 얼마예요?"],
    ["전화번호", "phone number", "numéro de téléphone", "전화번호가 몇 번이에요?"],
    ["번", "number (of a bus, a phone…)", "numéro (d'un bus, d'un téléphone…)", "몇 번 버스예요?"],
    ["돈", "money", "argent", "돈이 없어요."]
  ] },
  { id: "questionsKO", icon: "message-circle-question", title: "This, that, what?", title_fr: "Ceci, cela, quoi ?", level: "A1", words: [
    ["이것", "this (thing)", "ceci, cette chose", "이것은 책이에요."],
    ["그것", "that (near you)", "cela (près de toi)", "그것은 뭐예요?"],
    ["저것", "that (over there)", "cela (là-bas)", "저것은 시계예요."],
    ["이거", "this (spoken)", "ça, ceci (à l'oral)", "이거 얼마예요?"],
    ["이게", "this (as subject, spoken)", "ceci (sujet, à l'oral)", "이게 뭐예요?"],
    ["이건", "this (as topic, spoken)", "ceci, quant à ceci (à l'oral)", "이건 제 가방이에요."],
    ["그건", "that (as topic, spoken)", "cela (à l'oral)", "그건 사과예요."],
    ["저건", "that over there (as topic, spoken)", "ça, là-bas (à l'oral)", "저건 뭐예요?"],
    ["무엇", "what (written, formal)", "quoi, que (écrit, formel)", "이것은 무엇입니까?"],
    ["뭐예요?", "what is it?", "qu'est-ce que c'est ?", "이게 뭐예요?"],
    ["거기", "there (near you)", "là (près de toi)", "거기 누구예요?"],
    ["누구", "who", "qui", "저 사람은 누구예요?"],
    ["제", "my (humble)", "mon, ma, mes (humble)", "이건 제 책이에요."],
    ["아니에요", "it isn't, I'm not", "ce n'est pas", "아니요, 책이 아니에요."],
    ["맞아요", "that's right", "c'est ça, c'est exact", "네, 맞아요."],
    ["그럼", "then, in that case", "alors, dans ce cas", "그럼 저건 뭐예요?"],
    ["진짜", "really; real", "vraiment ; vrai", "진짜예요?"],
    ["아, 그래요?", "oh, really?", "ah bon ?", "아, 그래요? 몰랐어요."]
  ] },
  { id: "batchimKO", icon: "utensils", title: "Words with a final consonant", title_fr: "Des mots avec une consonne finale", level: "A1", words: [
    ["밥", "cooked rice; a meal", "riz cuit ; repas", "밥 먹었어요?"],
    ["김치", "kimchi", "kimchi", "김치가 맛있어요."],
    ["빵", "bread", "pain", "빵 하나 주세요."],
    ["국", "soup", "soupe", "국이 뜨거워요."],
    ["고기", "meat", "viande", "고기를 좋아해요."],
    ["사과", "apple; apology", "pomme ; excuses", "사과가 맛있어요."],
    ["맛", "taste", "goût", "맛이 어때요?"],
    ["꽃", "flower", "fleur", "꽃이 예뻐요."],
    ["옷", "clothes", "vêtements", "옷이 비싸요."],
    ["집", "house, home", "maison, chez soi", "집이 어디예요?"],
    ["방", "room", "chambre, pièce", "여기는 제 방이에요."],
    ["산", "mountain", "montagne", "산이 높아요."],
    ["강", "river", "fleuve, rivière", "한강은 서울에 있어요."],
    ["길", "road, way", "route, chemin", "길이 막혀요."],
    ["밤", "night; chestnut", "nuit ; châtaigne", "밤이 길어요."],
    ["낮", "daytime", "journée (par opposition à la nuit)", "낮에 일해요."],
    ["앞", "front", "devant", "학교 앞에 있어요."],
    ["밖", "outside", "dehors", "밖이 추워요."]
  ] });

  W.LESSONS.push(
  {
    id: 4, level: "A1", icon: "spell-check",
    title: "Hangul (3): final consonants and linking", title_fr: "Le hangeul (3) : les consonnes finales et la liaison",
    subtitle: "The consonant under the block, its seven possible sounds, and how it moves to the next syllable.", subtitle_fr: "La consonne sous le bloc, ses sept sons possibles, et comment elle passe à la syllabe suivante.",
    body: `
<h2>The consonant underneath: 받침</h2>
<p>A syllable can end with a consonant, written at the bottom of the block. Koreans call it <s-ko>받침</s-ko>, the support: <s-ko>밥</s-ko> = ㅂ + ㅏ + ㅂ (rice, a meal) · <s-ko>산</s-ko> = ㅅ + ㅏ + ㄴ (mountain) · <s-ko>강</s-ko> = ㄱ + ㅏ + ㅇ (river).</p>
<h2>Only seven sounds at the end</h2>
<p>At the end of a syllable, a consonant is not released: the mouth closes, and no air comes out. That's why many letters share the same sound:</p>
<table>
<tr><th>Sound</th><th>Letters</th><th>Examples</th></tr>
<tr><td>k</td><td>ㄱ ㅋ ㄲ</td><td><s-ko>국</s-ko> (soup) · <s-ko>부엌</s-ko> (kitchen) · <s-ko>밖</s-ko> (outside)</td></tr>
<tr><td>n</td><td>ㄴ</td><td><s-ko>산</s-ko> (mountain)</td></tr>
<tr><td>t</td><td>ㄷ ㅅ ㅆ ㅈ ㅊ ㅌ ㅎ</td><td><s-ko>옷</s-ko> (clothes) · <s-ko>낮</s-ko> (daytime) · <s-ko>꽃</s-ko> (flower)</td></tr>
<tr><td>l</td><td>ㄹ</td><td><s-ko>길</s-ko> (road)</td></tr>
<tr><td>m</td><td>ㅁ</td><td><s-ko>밤</s-ko> (night)</td></tr>
<tr><td>p</td><td>ㅂ ㅍ</td><td><s-ko>집</s-ko> (house) · <s-ko>앞</s-ko> (front)</td></tr>
<tr><td>ng</td><td>ㅇ</td><td><s-ko>방</s-ko> (room)</td></tr>
</table>
<p>So ㅇ is silent at the start of a syllable, but sounds ng at the end: <s-ko>강</s-ko> (gang).</p>
<h2>Linking: the consonant moves</h2>
<p>When the next syllable starts with the silent ㅇ, the final consonant moves into its place, and you pronounce it fully: <s-ko>한국어</s-ko> sounds [한구거] · <s-ko>음악</s-ko> (music) sounds [으막] · <s-ko>옷이</s-ko> sounds [오시] · <s-ko>꽃이</s-ko> sounds [꼬치]. The spelling never changes: you write the word, then the particle.</p>
<p>A final ㅎ disappears before a vowel: <s-ko>좋아요</s-ko> sounds [조아요]. And when there are two final consonants, both are heard before a vowel: <s-ko>없어요</s-ko> [업써요], <s-ko>읽어요</s-ko> [일거요]. Before a consonant, only one is: <s-ko>닭</s-ko> (chicken) sounds [닥].</p>
<div class="tip">You already know a word where the sound changes: <s-ko>감사합니다</s-ko> sounds [감사함니다]. Before ㄴ or ㅁ, a final ㄱ, ㄷ or ㅂ becomes nasal: ㅂ → ㅁ (<s-ko>입니다</s-ko> [임니다]), ㄱ → ㅇ (<s-ko>한국말</s-ko> [한궁말]). The romanization under the words follows these sounds: trust your ears, and write the spelling.</div>
`,
    body_fr: `
<h2>La consonne du dessous : 받침</h2>
<p>Une syllabe peut se terminer par une consonne, écrite en bas du bloc. En coréen, on l'appelle <s-ko>받침</s-ko>, le support : <s-ko>밥</s-ko> = ㅂ + ㅏ + ㅂ (riz, repas) · <s-ko>산</s-ko> = ㅅ + ㅏ + ㄴ (montagne) · <s-ko>강</s-ko> = ㄱ + ㅏ + ㅇ (fleuve).</p>
<h2>Seulement sept sons à la fin</h2>
<p>En fin de syllabe, une consonne n'est pas relâchée : la bouche se ferme et l'air ne sort pas. C'est pourquoi plusieurs lettres ont le même son :</p>
<table>
<tr><th>Son</th><th>Lettres</th><th>Exemples</th></tr>
<tr><td>k</td><td>ㄱ ㅋ ㄲ</td><td><s-ko>국</s-ko> (soupe) · <s-ko>부엌</s-ko> (cuisine) · <s-ko>밖</s-ko> (dehors)</td></tr>
<tr><td>n</td><td>ㄴ</td><td><s-ko>산</s-ko> (montagne)</td></tr>
<tr><td>t</td><td>ㄷ ㅅ ㅆ ㅈ ㅊ ㅌ ㅎ</td><td><s-ko>옷</s-ko> (vêtements) · <s-ko>낮</s-ko> (journée) · <s-ko>꽃</s-ko> (fleur)</td></tr>
<tr><td>l</td><td>ㄹ</td><td><s-ko>길</s-ko> (route)</td></tr>
<tr><td>m</td><td>ㅁ</td><td><s-ko>밤</s-ko> (nuit)</td></tr>
<tr><td>p</td><td>ㅂ ㅍ</td><td><s-ko>집</s-ko> (maison) · <s-ko>앞</s-ko> (devant)</td></tr>
<tr><td>ng</td><td>ㅇ</td><td><s-ko>방</s-ko> (chambre)</td></tr>
</table>
<p>Le ㅇ est donc muet en début de syllabe, mais se prononce « ng » à la fin : <s-ko>강</s-ko> (gang), avec un « ng » comme dans « parking ».</p>
<h2>La liaison : la consonne se déplace</h2>
<p>Quand la syllabe suivante commence par le ㅇ muet, la consonne finale prend sa place et se prononce entièrement : <s-ko>한국어</s-ko> se dit [한구거] · <s-ko>음악</s-ko> (musique) se dit [으막] · <s-ko>옷이</s-ko> se dit [오시] · <s-ko>꽃이</s-ko> se dit [꼬치]. L'orthographe ne change jamais : on écrit le mot, puis la particule. C'est comme la liaison du français, dans « les amis ».</p>
<p>Un ㅎ final disparaît devant une voyelle : <s-ko>좋아요</s-ko> se dit [조아요]. Et quand il y a deux consonnes finales, on entend les deux devant une voyelle : <s-ko>없어요</s-ko> [업써요], <s-ko>읽어요</s-ko> [일거요]. Devant une consonne, une seule : <s-ko>닭</s-ko> (poulet) se dit [닥].</p>
<div class="tip">Tu connais déjà un mot où le son change : <s-ko>감사합니다</s-ko> se dit [감사함니다]. Devant ㄴ ou ㅁ, un ㄱ, ㄷ ou ㅂ final devient nasal : ㅂ → ㅁ (<s-ko>입니다</s-ko> [임니다]), ㄱ → ㅇ (<s-ko>한국말</s-ko> [한궁말]). La romanisation sous les mots suit ces sons : fie-toi à ton oreille, et écris l'orthographe.</div>
`,
    examples: [
      ["밥 먹었어요?", "Have you eaten? (a common way to say hello)", "Tu as mangé ? (une façon courante de dire bonjour)"],
      ["꽃이 예뻐요.", "The flowers are pretty.", "Les fleurs sont jolies."],
      ["음악을 좋아해요.", "I like music.", "J'aime la musique."],
      ["옷이 비싸요.", "The clothes are expensive.", "Les vêtements sont chers."],
      ["집이 어디예요?", "Where do you live?", "Tu habites où ?"],
      ["밖이 추워요.", "It's cold outside.", "Il fait froid dehors."]
    ],
    quiz: [
      { q: "How is 옷 pronounced?", q_fr: "Comment se prononce 옷 ?", o: ["ot", "os", "o-seu"], a: 0, ex: "At the end of a syllable, ㅅ sounds like an unreleased t.", ex_fr: "En fin de syllabe, ㅅ se prononce comme un t non relâché." },
      { q: "Which word ends with the sound ng?", q_fr: "Quel mot se termine par le son « ng » ?", o: ["강", "각", "간"], a: 0, ex: "A final ㅇ sounds ng.", ex_fr: "Un ㅇ final se prononce « ng »." },
      { q: "How is 한국어 pronounced?", q_fr: "Comment se prononce 한국어 ?", o: ["[한구거]", "[한국 어]", "[한구커]"], a: 0, ex: "The final ㄱ moves to the silent ㅇ: hangugeo.", ex_fr: "Le ㄱ final passe au ㅇ muet : hangugeo." },
      { q: "꽃이 sounds like…", q_fr: "꽃이 se prononce…", o: ["[꼬치]", "[꼬시]", "[꼳이]"], a: 0, ex: "Before a vowel, the ㅊ is heard in full: kkochi.", ex_fr: "Devant une voyelle, on entend le ㅊ en entier : kkochi." },
      { q: "Why do we hear [함니다] in 감사합니다?", q_fr: "Pourquoi entend-on [함니다] dans 감사합니다 ?", o: ["Before ㄴ, the final ㅂ becomes ㅁ", "It's a spelling mistake", "ㅂ is always silent"], o_fr: ["Devant ㄴ, le ㅂ final devient ㅁ", "C'est une faute d'orthographe", "ㅂ est toujours muet"], a: 0, ex: "Nasalization: ㅂ + ㄴ → ㅁ + ㄴ.", ex_fr: "La nasalisation : ㅂ + ㄴ → ㅁ + ㄴ." }
    ]
  },
  {
    id: 5, level: "A1", icon: "message-circle-question",
    title: "What's this? This, that, and the compound vowels", title_fr: "Qu'est-ce que c'est ? Ceci, cela, et les voyelles composées",
    subtitle: "이게 뭐예요?, 이 / 그 / 저, saying what something is not, and the last vowels of Hangul.", subtitle_fr: "이게 뭐예요 ?, 이 / 그 / 저, dire ce qu'une chose n'est pas, et les dernières voyelles du hangeul.",
    body: `
<h2>The compound vowels</h2>
<p>The last vowels of Hangul join two vowels you already know, and are read in one go:</p>
<table>
<tr><th>Vowel</th><th>Made of</th><th>Sound</th><th>Example</th></tr>
<tr><td>ㅘ</td><td>ㅗ + ㅏ</td><td>wa</td><td><s-ko>사과</s-ko> (apple)</td></tr>
<tr><td>ㅝ</td><td>ㅜ + ㅓ</td><td>wo</td><td><s-ko>원</s-ko> (won)</td></tr>
<tr><td>ㅟ</td><td>ㅜ + ㅣ</td><td>wi</td><td><s-ko>귀</s-ko> (ear)</td></tr>
<tr><td>ㅙ · ㅚ · ㅞ</td><td>ㅗ + ㅐ · ㅗ + ㅣ · ㅜ + ㅔ</td><td>wae · oe · we: today, all three sound almost the same, like "we" in "wet"</td><td><s-ko>돼지</s-ko> (pig) · <s-ko>회사</s-ko> (company) · <s-ko>웨이터</s-ko> (waiter)</td></tr>
<tr><td>ㅢ</td><td>ㅡ + ㅣ</td><td>ui; i after a consonant</td><td><s-ko>의자</s-ko> (chair) · <s-ko>희망</s-ko> [히망] (hope)</td></tr>
</table>
<h2>This, that, that over there: 이, 그, 저</h2>
<p>Korean has three words where English has two: <s-ko>이</s-ko> (this, near me), <s-ko>그</s-ko> (that, near you, or something already mentioned), <s-ko>저</s-ko> (that over there, far from both of us). Add <s-ko>것</s-ko> (thing): <s-ko>이것</s-ko>, <s-ko>그것</s-ko>, <s-ko>저것</s-ko>. The places work the same way: <s-ko>여기</s-ko> (here), <s-ko>거기</s-ko> (there, near you), <s-ko>저기</s-ko> (over there).</p>
<p>In speech, these words shrink: <s-ko>이것이</s-ko> → <s-ko>이게</s-ko> (this, as the subject) and <s-ko>이것은</s-ko> → <s-ko>이건</s-ko> (this, as the topic). And <s-ko>이거</s-ko> on its own: <s-ko>이거 얼마예요?</s-ko></p>
<h2>What's this? It's…</h2>
<p><s-ko>이게 뭐예요?</s-ko> (What's this?) — <s-ko>그건 책이에요.</s-ko> (That's a book.) The answer uses <s-ko>그건</s-ko>: the thing is near the person who asked. For people: <s-ko>저 사람은 누구예요?</s-ko> (Who's that person?)</p>
<h2>Saying what it is not: 이 / 가 아니에요</h2>
<p>To say "it isn't", put the noun, then <s-ko>이</s-ko> after a consonant or <s-ko>가</s-ko> after a vowel, then <s-ko>아니에요</s-ko>: <s-ko>책이 아니에요.</s-ko> (It isn't a book.) · <s-ko>의자가 아니에요.</s-ko> (It isn't a chair.)</p>
<p><s-ko>이건 연필이에요?</s-ko> — <s-ko>아니요, 연필이 아니에요. 볼펜이에요.</s-ko> (Is this a pencil? — No, it isn't a pencil. It's a pen.)</p>
<div class="tip">Don't mix up <s-ko>아니요</s-ko> (no, the answer) and <s-ko>아니에요</s-ko> (it isn't, a verb at the end of a sentence). And remember the pair that changes with the last sound: 이에요 / 예요 (it is), 이 / 가 아니에요 (it isn't).</div>
`,
    body_fr: `
<h2>Les voyelles composées</h2>
<p>Les dernières voyelles du hangeul réunissent deux voyelles que tu connais déjà, et se lisent d'un seul coup :</p>
<table>
<tr><th>Voyelle</th><th>Formée de</th><th>Son</th><th>Exemple</th></tr>
<tr><td>ㅘ</td><td>ㅗ + ㅏ</td><td>« oua »</td><td><s-ko>사과</s-ko> (pomme)</td></tr>
<tr><td>ㅝ</td><td>ㅜ + ㅓ</td><td>« ouo » (wo)</td><td><s-ko>원</s-ko> (won)</td></tr>
<tr><td>ㅟ</td><td>ㅜ + ㅣ</td><td>« oui »</td><td><s-ko>귀</s-ko> (oreille)</td></tr>
<tr><td>ㅙ · ㅚ · ㅞ</td><td>ㅗ + ㅐ · ㅗ + ㅣ · ㅜ + ㅔ</td><td>wae · oe · we : aujourd'hui, les trois se prononcent presque pareil, « oué »</td><td><s-ko>돼지</s-ko> (cochon) · <s-ko>회사</s-ko> (entreprise) · <s-ko>웨이터</s-ko> (serveur)</td></tr>
<tr><td>ㅢ</td><td>ㅡ + ㅣ</td><td>ui ; « i » après une consonne</td><td><s-ko>의자</s-ko> (chaise) · <s-ko>희망</s-ko> [히망] (espoir)</td></tr>
</table>
<h2>Ceci, cela, cela là-bas : 이, 그, 저</h2>
<p>Le coréen a trois mots là où le français en a deux : <s-ko>이</s-ko> (ce…-ci, près de moi), <s-ko>그</s-ko> (ce…-là, près de toi, ou une chose dont on a déjà parlé), <s-ko>저</s-ko> (ce…-là, là-bas, loin de nous deux). Ajoute <s-ko>것</s-ko> (chose) : <s-ko>이것</s-ko>, <s-ko>그것</s-ko>, <s-ko>저것</s-ko>. Les lieux fonctionnent de la même façon : <s-ko>여기</s-ko> (ici), <s-ko>거기</s-ko> (là, près de toi), <s-ko>저기</s-ko> (là-bas).</p>
<p>À l'oral, ces mots se contractent : <s-ko>이것이</s-ko> → <s-ko>이게</s-ko> (ceci, sujet) et <s-ko>이것은</s-ko> → <s-ko>이건</s-ko> (ceci, thème). Et <s-ko>이거</s-ko> tout seul : <s-ko>이거 얼마예요?</s-ko></p>
<h2>Qu'est-ce que c'est ? C'est…</h2>
<p><s-ko>이게 뭐예요?</s-ko> (Qu'est-ce que c'est ?) — <s-ko>그건 책이에요.</s-ko> (Ça, c'est un livre.) La réponse utilise <s-ko>그건</s-ko> : l'objet est près de la personne qui a posé la question. Pour les personnes : <s-ko>저 사람은 누구예요?</s-ko> (Qui est cette personne ?)</p>
<h2>Dire ce que ce n'est pas : 이 / 가 아니에요</h2>
<p>Pour dire « ce n'est pas », mets le nom, puis <s-ko>이</s-ko> après une consonne ou <s-ko>가</s-ko> après une voyelle, puis <s-ko>아니에요</s-ko> : <s-ko>책이 아니에요.</s-ko> (Ce n'est pas un livre.) · <s-ko>의자가 아니에요.</s-ko> (Ce n'est pas une chaise.)</p>
<p><s-ko>이건 연필이에요?</s-ko> — <s-ko>아니요, 연필이 아니에요. 볼펜이에요.</s-ko> (C'est un crayon ? — Non, ce n'est pas un crayon. C'est un stylo.)</p>
<div class="tip">Ne confonds pas <s-ko>아니요</s-ko> (non, la réponse) et <s-ko>아니에요</s-ko> (ce n'est pas, un verbe en fin de phrase). Et retiens les paires qui changent selon le dernier son : 이에요 / 예요 (c'est), 이 / 가 아니에요 (ce n'est pas).</div>
`,
    examples: [
      ["이게 뭐예요?", "What's this?", "Qu'est-ce que c'est ?"],
      ["그건 사과예요.", "That's an apple.", "Ça, c'est une pomme."],
      ["저건 뭐예요? — 시계예요.", "What's that over there? — It's a clock.", "Qu'est-ce que c'est, là-bas ? — C'est une horloge."],
      ["이건 제 가방이 아니에요.", "This isn't my bag.", "Ce n'est pas mon sac."],
      ["아니요, 연필이 아니에요. 볼펜이에요.", "No, it isn't a pencil. It's a pen.", "Non, ce n'est pas un crayon. C'est un stylo."],
      ["저 사람은 누구예요?", "Who's that person?", "Qui est cette personne ?"]
    ],
    quiz: [
      { q: "Your friend is holding something. You ask what it is:", q_fr: "Ton ami tient quelque chose. Tu demandes ce que c'est :", o: ["그게 뭐예요?", "이게 뭐예요?", "저게 뭐예요?"], a: 0, ex: "Near the person you speak to: 그.", ex_fr: "Près de la personne à qui tu parles : 그." },
      { q: "Complete: 이건 책___ 아니에요.", q_fr: "Complète : 이건 책___ 아니에요.", o: ["이", "가", "을"], a: 0, ex: "책 ends with a consonant: 이 아니에요.", ex_fr: "책 se termine par une consonne : 이 아니에요." },
      { q: "Complete: 저건 의자___.", q_fr: "Complète : 저건 의자___.", o: ["예요", "이에요", "가요"], a: 0, ex: "의자 ends with a vowel: 예요.", ex_fr: "의자 se termine par une voyelle : 예요." },
      { q: "Which compound vowel is in 의자?", q_fr: "Quelle voyelle composée y a-t-il dans 의자 ?", o: ["ㅢ", "ㅟ", "ㅚ"], a: 0, ex: "ㅡ + ㅣ = ㅢ.", ex_fr: "ㅡ + ㅣ = ㅢ." },
      { q: "How do you say: That isn't an apple. It's a pear.", q_fr: "Comment dit-on : Ce n'est pas une pomme. C'est une poire.", o: ["사과가 아니에요. 배예요.", "사과이 아니에요. 배예요.", "사과 아니요. 배이에요."], a: 0, ex: "사과 ends with a vowel: 가 아니에요; 배 too: 예요.", ex_fr: "사과 se termine par une voyelle : 가 아니에요 ; 배 aussi : 예요." }
    ]
  },
  {
    id: 6, level: "A1", kind: "functional", icon: "calculator",
    title: "Everyday Korean: numbers, prices and phone numbers", title_fr: "Le coréen de tous les jours : nombres, prix et numéros de téléphone",
    subtitle: "The Sino-Korean numbers, asking a price, paying in won and giving your phone number.", subtitle_fr: "Les nombres sino-coréens, demander un prix, payer en wons et donner ton numéro de téléphone.",
    body: `
<h2>Two sets of numbers</h2>
<p>Korean has two sets of numbers: Sino-Korean numbers, which come from Chinese, and native Korean numbers. This lesson is about the first set, used for prices, phone numbers, bus numbers, floors, minutes and dates. The native numbers, for counting things, the hours and your age, come in the next unit.</p>
<table>
<tr><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>
<tr><td><s-ko>일</s-ko></td><td><s-ko>이</s-ko></td><td><s-ko>삼</s-ko></td><td><s-ko>사</s-ko></td><td><s-ko>오</s-ko></td></tr>
<tr><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th></tr>
<tr><td><s-ko>육</s-ko></td><td><s-ko>칠</s-ko></td><td><s-ko>팔</s-ko></td><td><s-ko>구</s-ko></td><td><s-ko>십</s-ko></td></tr>
</table>
<h2>Building the other numbers</h2>
<p>The rest is simple arithmetic: 11 = 10 + 1, <s-ko>십일</s-ko> · 20 = 2 × 10, <s-ko>이십</s-ko> · 35 = <s-ko>삼십오</s-ko> · 99 = <s-ko>구십구</s-ko>. Then <s-ko>백</s-ko> (100), <s-ko>천</s-ko> (1,000) and <s-ko>만</s-ko> (10,000). For one hundred, one thousand or ten thousand, no <s-ko>일</s-ko> in front: <s-ko>백</s-ko>, <s-ko>천</s-ko>, <s-ko>만</s-ko>, not 일백.</p>
<p>Big numbers are counted in units of ten thousand, not of a thousand: 50,000 = 5 × 10,000, <s-ko>오만</s-ko> · 100,000 = <s-ko>십만</s-ko> · 15,000 = <s-ko>만 오천</s-ko>. Watch out for 16: <s-ko>십육</s-ko> sounds [심뉵].</p>
<h2>How much is it?</h2>
<p><s-ko>이거 얼마예요?</s-ko> (How much is this?) — <s-ko>삼천 원이에요.</s-ko> (It's 3,000 won.) The won (<s-ko>원</s-ko>) is the Korean currency. Then: <s-ko>이거 주세요.</s-ko> (I'll take this, please.) · <s-ko>카드 돼요?</s-ko> (Can I pay by card?) · <s-ko>비싸요!</s-ko> (It's expensive!)</p>
<h2>Phone numbers</h2>
<p>Phone numbers are read digit by digit, in Sino-Korean, with <s-ko>공</s-ko> for zero. Mobile numbers start with 010, and the dash is often read <s-ko>에</s-ko>: 010-1234-5678 → <s-ko>공일공에 일이삼사에 오육칠팔</s-ko>. To ask: <s-ko>전화번호가 몇 번이에요?</s-ko> (What's your phone number?) In other cases, zero is <s-ko>영</s-ko>: a score of 0-0 is <s-ko>영 대 영</s-ko>.</p>
<div class="tip">Bus numbers and floors are Sino-Korean too: <s-ko>칠 번 버스</s-ko> (bus number 7), <s-ko>삼 층</s-ko> (the third floor). In Korea, as in North America, the ground floor is <s-ko>일 층</s-ko>, the first floor.</div>
`,
    body_fr: `
<h2>Deux séries de nombres</h2>
<p>Le coréen a deux séries de nombres : les nombres sino-coréens, venus du chinois, et les nombres coréens. Cette leçon présente la première série, utilisée pour les prix, les numéros de téléphone, les numéros de bus, les étages, les minutes et les dates. Les nombres coréens, pour compter les objets, dire l'heure et ton âge, viennent dans l'unité suivante.</p>
<table>
<tr><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>
<tr><td><s-ko>일</s-ko></td><td><s-ko>이</s-ko></td><td><s-ko>삼</s-ko></td><td><s-ko>사</s-ko></td><td><s-ko>오</s-ko></td></tr>
<tr><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th></tr>
<tr><td><s-ko>육</s-ko></td><td><s-ko>칠</s-ko></td><td><s-ko>팔</s-ko></td><td><s-ko>구</s-ko></td><td><s-ko>십</s-ko></td></tr>
</table>
<h2>Construire les autres nombres</h2>
<p>Le reste, c'est du calcul : 11 = 10 + 1, <s-ko>십일</s-ko> · 20 = 2 × 10, <s-ko>이십</s-ko> · 35 = <s-ko>삼십오</s-ko> · 99 = <s-ko>구십구</s-ko>. Puis <s-ko>백</s-ko> (100), <s-ko>천</s-ko> (1 000) et <s-ko>만</s-ko> (10 000). Pour cent, mille ou dix mille, pas de <s-ko>일</s-ko> devant : <s-ko>백</s-ko>, <s-ko>천</s-ko>, <s-ko>만</s-ko>, et non 일백.</p>
<p>Les grands nombres se comptent par dizaines de milliers, et non par milliers : 50 000 = 5 × 10 000, <s-ko>오만</s-ko> · 100 000 = <s-ko>십만</s-ko> · 15 000 = <s-ko>만 오천</s-ko>. Attention à 16 : <s-ko>십육</s-ko> se prononce [심뉵].</p>
<h2>C'est combien ?</h2>
<p><s-ko>이거 얼마예요?</s-ko> (Combien ça coûte ?) — <s-ko>삼천 원이에요.</s-ko> (C'est 3 000 wons.) Le won (<s-ko>원</s-ko>) est la monnaie coréenne. Ensuite : <s-ko>이거 주세요.</s-ko> (Je prends ça, s'il vous plaît.) · <s-ko>카드 돼요?</s-ko> (Je peux payer par carte ?) · <s-ko>비싸요!</s-ko> (C'est cher !)</p>
<h2>Les numéros de téléphone</h2>
<p>Les numéros de téléphone se lisent chiffre par chiffre, en sino-coréen, avec <s-ko>공</s-ko> pour zéro. Les numéros de portable commencent par 010, et le tiret se lit souvent <s-ko>에</s-ko> : 010-1234-5678 → <s-ko>공일공에 일이삼사에 오육칠팔</s-ko>. Pour demander : <s-ko>전화번호가 몇 번이에요?</s-ko> (Quel est ton numéro de téléphone ?) Dans les autres cas, zéro se dit <s-ko>영</s-ko> : un score de 0 à 0, c'est <s-ko>영 대 영</s-ko>.</p>
<div class="tip">Les numéros de bus et les étages sont aussi en sino-coréen : <s-ko>칠 번 버스</s-ko> (le bus 7), <s-ko>삼 층</s-ko> (le troisième niveau). En Corée, le rez-de-chaussée s'appelle <s-ko>일 층</s-ko> (le niveau 1) : <s-ko>삼 층</s-ko> correspond donc à notre deuxième étage.</div>
`,
    examples: [
      ["이거 얼마예요?", "How much is this?", "Combien ça coûte ?"],
      ["삼천 원이에요.", "It's 3,000 won.", "C'est 3 000 wons."],
      ["만 오천 원이에요.", "It's 15,000 won.", "C'est 15 000 wons."],
      ["전화번호가 몇 번이에요?", "What's your phone number?", "Quel est ton numéro de téléphone ?"],
      ["공일공에 일이삼사에 오육칠팔이에요.", "It's 010-1234-5678.", "C'est le 010-1234-5678."],
      ["몇 번 버스예요? — 칠 번이에요.", "Which bus is it? — Number 7.", "C'est quel bus ? — Le 7."],
      ["카드 돼요?", "Can I pay by card?", "Je peux payer par carte ?"]
    ],
    quiz: [
      { q: "How do you say 15?", q_fr: "Comment dit-on 15 ?", o: ["십오", "오십", "일십오"], a: 0, ex: "10 + 5: 십오. 오십 is 50, and no 일 before 십.", ex_fr: "10 + 5 : 십오. 오십, c'est 50, et pas de 일 devant 십." },
      { q: "10,000 won is…", q_fr: "10 000 wons, c'est…", o: ["만 원", "일만 원", "천 원"], a: 0, ex: "No 일 before 만: 만 원.", ex_fr: "Pas de 일 devant 만 : 만 원." },
      { q: "In a phone number, 0 is read…", q_fr: "Dans un numéro de téléphone, 0 se lit…", o: ["공", "영", "일"], a: 0, ex: "공 in phone numbers, 영 elsewhere.", ex_fr: "공 dans les numéros de téléphone, 영 ailleurs." },
      { q: "How much is 이천오백 원?", q_fr: "Combien font 이천오백 원 ?", o: ["2,500 won", "25,000 won", "250 won"], o_fr: ["2 500 wons", "25 000 wons", "250 wons"], a: 0, ex: "이천 (2,000) + 오백 (500).", ex_fr: "이천 (2 000) + 오백 (500)." },
      { q: "You want to know the price. You say:", q_fr: "Tu veux connaître le prix. Tu dis :", o: ["이거 얼마예요?", "이거 뭐예요?", "이거 누구예요?"], a: 0, ex: "얼마 = how much.", ex_fr: "얼마 = combien." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    4: {
      gap: [["ㅈ + ㅣ + ㅂ = ___", "집", "house", "maison"], ["ㄲ + ㅗ + ㅊ = ___", "꽃", "flower", "fleur"], ["ㅂ + ㅏ + ㅁ = ___", "밤", "night", "nuit"], ["ㅅ + ㅏ + ㄴ = ___", "산", "mountain", "montagne"]],
      fix: [["한구거를 공부해요.", "한국어를 공부해요.", "We hear [한구거], but we write 한국어: the ㄱ moves only in the pronunciation.", "On entend [한구거], mais on écrit 한국어 : le ㄱ ne se déplace qu'à l'oral."], ["꼬치 예뻐요.", "꽃이 예뻐요.", "[꼬치] is how 꽃이 sounds: write the word, then the particle.", "[꼬치], c'est la prononciation de 꽃이 : on écrit le mot, puis la particule."]],
      task: ["Write seven words, one for each final sound (k, n, t, l, m, p, ng).", "Écris sept mots, un pour chaque son final (k, n, t, l, m, p, ng).", "국, 산, 옷, 길, 밤, 집, 방"]
    },
    5: {
      gap: [["이게 ___? — 책이에요.", "뭐예요", "what is it", "qu'est-ce que c'est"], ["저건 의자___.", "예요", "after a vowel", "après une voyelle"], ["이건 가방이 ___.", "아니에요", "it isn't", "ce n'est pas"], ["그건 사과___ 아니에요.", "가", "after a vowel", "après une voyelle"]],
      fix: [["이건 책가 아니에요.", "이건 책이 아니에요.", "After a consonant (책), it's 이: 책이 아니에요.", "Après une consonne (책), c'est 이 : 책이 아니에요."], ["이건 의자이 아니에요.", "이건 의자가 아니에요.", "After a vowel (자), it's 가: 의자가 아니에요.", "Après une voyelle (자), c'est 가 : 의자가 아니에요."]],
      task: ["Look at three things around you: write what they are, and what one of them is not.", "Regarde trois objets autour de toi : écris ce qu'ils sont, et ce que l'un d'eux n'est pas.", "이건 책이에요. 그건 가방이에요. 저건 창문이에요. 이건 사전이 아니에요. 공책이에요."]
    },
    6: {
      gap: [["15 = ___", "십오"], ["30,000원 = ___ 원", "삼만"], ["010 = ___", "공일공"], ["이거 ___예요? — 오천 원이에요.", "얼마", "how much", "combien"]],
      fix: [["일만 원이에요.", "만 원이에요.", "No 일 before 만 (or 십, 백, 천) for one: 만 원.", "Pas de 일 devant 만 (ni devant 십, 백, 천) pour un : 만 원."], ["이거 얼마이에요?", "이거 얼마예요?", "얼마 ends with a vowel: 얼마예요.", "얼마 se termine par une voyelle : 얼마예요."]],
      task: ["Write the price of five things you could buy in a Korean convenience store, in Hangul.", "Écris en hangeul le prix de cinq choses que tu pourrais acheter dans une supérette coréenne.", "커피는 이천 원이에요. 우유는 천오백 원이에요. 김밥은 삼천 원이에요. 물은 천 원이에요. 우산은 만 원이에요."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "kogyosil", lesson: 5, level: "A1", icon: "school", partner: "Jiyeong", role: "your Korean teacher", role_fr: "ta professeure de coréen",
    title: "What's this in Korean?", title_fr: "Comment ça se dit en coréen ?",
    setting: "In your Korean class, your teacher, Park Jiyeong, points at things in the classroom and asks you what they are.", setting_fr: "En cours de coréen, ta professeure, Park Jiyeong, montre des objets de la classe et te demande ce que c'est.",
    turns: [
      { p: "자, 이게 뭐예요?", en: "Right, what's this?", fr: "Bon, qu'est-ce que c'est ?" },
      { y: ["책이에요.", "책예요.", "책이요예요."], en: "It's a book.", fr: "C'est un livre." , why: "책 ends with a consonant: 이에요.", why_fr: "책 se termine par une consonne : 이에요." },
      { p: "네, 맞아요. 그럼 저건 뭐예요?", en: "Yes, that's right. Then what's that over there?", fr: "Oui, c'est ça. Alors, qu'est-ce que c'est, là-bas ?" },
      { y: ["저건 시계예요.", "저건 시계이에요.", "저건 시계가요."], en: "That's a clock.", fr: "Ça, c'est une horloge.", why: "시계 ends with a vowel: 예요.", why_fr: "시계 se termine par une voyelle : 예요." },
      { p: "좋아요. 이건 연필이에요?", en: "Good. Is this a pencil?", fr: "Bien. Est-ce que c'est un crayon ?" },
      { y: ["아니요, 연필이 아니에요. 볼펜이에요.", "아니요, 연필가 아니에요. 볼펜이에요.", "네, 연필이 아니에요. 볼펜이에요."], en: "No, it isn't a pencil. It's a pen.", fr: "Non, ce n'est pas un crayon. C'est un stylo.", why: "아니요 to say no, then 연필이 아니에요 (이 after a consonant).", why_fr: "아니요 pour dire non, puis 연필이 아니에요 (이 après une consonne)." },
      { p: "아주 잘했어요! 그럼 이건 한국어로 뭐예요?", en: "Very good! Then what's this in Korean?", fr: "Très bien ! Alors, comment ça se dit en coréen ?" },
      { y: ["휴대폰이에요.", "휴대폰예요.", "휴대폰이 뭐예요."], en: "It's a mobile phone.", fr: "C'est un téléphone portable.", why: "휴대폰 ends with a consonant: 이에요.", why_fr: "휴대폰 se termine par une consonne : 이에요." },
      { p: "좋아요! 오늘 수업은 여기까지예요. 수고했어요!", en: "Good! That's all for today's class. Well done!", fr: "Bien ! Le cours d'aujourd'hui s'arrête là. Bon travail !" },
      { y: ["감사합니다, 선생님! 안녕히 계세요!", "감사합니다, 선생님! 안녕히 가세요!", "죄송합니다, 선생님! 안녕히 계세요!"], en: "Thank you! Goodbye!", fr: "Merci ! Au revoir !", why: "You leave the classroom and your teacher stays: 안녕히 계세요.", why_fr: "Tu quittes la classe et ta professeure reste : 안녕히 계세요." }
    ] },
  { id: "kopyeonuijeom", lesson: 6, level: "A1", icon: "shopping-basket", partner: "Hyeonu", role: "a convenience store clerk", role_fr: "un vendeur de supérette",
    title: "At the convenience store", title_fr: "À la supérette",
    setting: "You stop at a convenience store in Seoul to buy milk and some gimbap. Hyeonu is at the till.", setting_fr: "Tu t'arrêtes dans une supérette de Séoul pour acheter du lait et du gimbap. Hyeonu est à la caisse.",
    turns: [
      { p: "어서 오세요!", en: "Welcome!", fr: "Bienvenue !" },
      { y: ["안녕하세요. 이거 얼마예요?", "안녕하세요. 이거 얼마이에요?", "안녕하세요. 이거 누구예요?"], en: "Hello. How much is this?", fr: "Bonjour. Combien ça coûte ?", why: "얼마 ends with a vowel: 얼마예요. 누구 means who.", why_fr: "얼마 se termine par une voyelle : 얼마예요. 누구 veut dire qui." },
      { p: "그 우유요? 천오백 원이에요.", en: "That milk? It's 1,500 won.", fr: "Ce lait ? C'est 1 500 wons." },
      { y: ["그럼 이 김밥은 얼마예요?", "그럼 이 김밥은 얼마이에요?", "그럼 이 김밥은 뭐 얼마?"], en: "And how much is this gimbap?", fr: "Et ce gimbap, il coûte combien ?", why: "Same question: 얼마예요.", why_fr: "Même question : 얼마예요." },
      { p: "김밥은 삼천 원이에요.", en: "The gimbap is 3,000 won.", fr: "Le gimbap, c'est 3 000 wons." },
      { y: ["우유하고 김밥 주세요.", "우유하고 김밥 계세요.", "우유하고 김밥 아니에요."], en: "The milk and the gimbap, please.", fr: "Le lait et le gimbap, s'il vous plaît.", why: "To ask for something: 주세요.", why_fr: "Pour demander quelque chose : 주세요." },
      { p: "네, 모두 사천오백 원이에요. 봉투 필요하세요?", en: "OK, that's 4,500 won altogether. Do you need a bag?", fr: "D'accord, ça fait 4 500 wons en tout. Vous avez besoin d'un sac ?" },
      { y: ["아니요, 괜찮아요.", "아니요, 죄송해요.", "아니요, 안녕하세요."], en: "No, thank you.", fr: "Non merci.", why: "괜찮아요 = no, thank you.", why_fr: "괜찮아요 = non merci." },
      { p: "사천오백 원 받았습니다. 감사합니다!", en: "4,500 won, thank you very much!", fr: "4 500 wons, merci beaucoup !" },
      { y: ["감사합니다! 수고하세요!", "감사합니다! 안녕히 가세요!", "감사합니다! 처음 뵙겠습니다!"], en: "Thank you! Have a good day at work!", fr: "Merci ! Bon courage !", why: "Leaving a shop, people often say 수고하세요 (literally, keep up the good work) or 안녕히 계세요. The clerk stays, so not 가세요.", why_fr: "En quittant un magasin, on dit souvent 수고하세요 (mot à mot, continuez votre bon travail) ou 안녕히 계세요. Le vendeur reste, donc pas 가세요." }
    ] }
  );

  W.READINGS.push({
    id: "minsugabang", level: "A1", icon: "handbag", title: "이거 누구 가방이에요?", genre: "Short story",
    intro: "A bag has been left in the classroom. Whose is it? 이게 뭐예요?, 이 / 가 아니에요 and the things in a bag.",
    intro_fr: "Un sac est resté dans la classe. À qui est-il ? 이게 뭐예요 ?, 이 / 가 아니에요 et les objets d'un sac.",
    paragraphs: [
      { ko: "수업이 끝났어요. 교실에 가방이 하나 있어요. 선생님이 물어요. \"이거 누구 가방이에요?\"", en: "The class is over. There's a bag in the classroom. The teacher asks: \"Whose bag is this?\"", fr: "Le cours est fini. Il y a un sac dans la classe. La professeure demande : « C'est le sac de qui ? »" },
      { ko: "에밀리 씨가 말해요. \"제 가방이 아니에요. 제 가방은 빨간색이에요.\" 알렉스 씨도 말해요. \"제 가방도 아니에요.\"", en: "Emily says: \"It isn't my bag. My bag is red.\" Alex says too: \"It isn't my bag either.\"", fr: "Emily dit : « Ce n'est pas mon sac. Mon sac est rouge. » Alex dit aussi : « Ce n'est pas mon sac non plus. »" },
      { ko: "선생님이 가방을 열어요. 안에 책, 지갑, 휴대폰이 있어요. 그리고 학생증도 있어요. 이름은… 김민수!", en: "The teacher opens the bag. Inside, there's a book, a wallet and a phone. And a student card too. The name is… Kim Minsu!", fr: "La professeure ouvre le sac. Dedans, il y a un livre, un portefeuille et un téléphone. Et aussi une carte étudiante. Le nom, c'est… Kim Minsu !" },
      { ko: "그때 민수 씨가 교실에 와요. \"아, 그거 제 가방이에요! 감사합니다, 선생님!\" 모두 웃어요.", en: "Just then, Minsu comes into the classroom. \"Oh, that's my bag! Thank you!\" Everyone laughs.", fr: "À ce moment-là, Minsu entre dans la classe. « Ah, c'est mon sac ! Merci, madame ! » Tout le monde rit." }
    ],
    glossary: { "끝났어요": ["is over, has ended", "est fini"], "물어요": ["asks", "demande"], "말해요": ["says", "dit"], "빨간색이에요": ["it's red", "c'est rouge"], "열어요": ["opens", "ouvre"], "안에": ["inside", "dedans"], "그때": ["at that moment", "à ce moment-là"], "모두": ["everyone", "tout le monde"], "웃어요": ["laugh", "rient"] },
    questions: [
      { q: "가방은 어디에 있어요?", o: ["교실에", "카페에", "집에"], a: 0 },
      { q: "에밀리 씨 가방은 무슨 색이에요?", o: ["빨간색", "파란색", "검은색"], a: 0 },
      { q: "가방 안에 뭐가 있어요?", o: ["책, 지갑, 휴대폰, 학생증", "책하고 우산", "컴퓨터하고 안경"], a: 0 },
      { q: "이건 누구 가방이에요?", o: ["민수 씨 가방", "알렉스 씨 가방", "에밀리 씨 가방"], a: 0 },
      { q: "마지막에 사람들은 뭐 해요?", o: ["웃어요", "울어요", "자요"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-ko-a1-2", unit: "a1-2", level: "A1", icon: "pencil",
    title: "문구점에서", title_fr: "À la papeterie",
    context: "Yejin needs things for her Korean class. She goes into a small stationery shop, where Minho serves her.", context_fr: "Yejin a besoin de fournitures pour son cours de coréen. Elle entre dans une petite papeterie, où Minho la sert.",
    words: [["문구점", "stationery shop", "papeterie"], ["얼마예요?", "how much is it?", "combien ça coûte ?"], ["비싸요", "it's expensive", "c'est cher"], ["두 개", "two (things)", "deux (objets)"], ["모두", "altogether", "en tout"]],
    lines: [["Minho", "어서 오세요!", "ko-KR"], ["Yejin", "안녕하세요. 공책 있어요?", "ko-KR"], ["Minho", "네, 여기 있어요. 이 공책은 이천 원이에요.", "ko-KR"], ["Yejin", "이천 원이요? 그럼 이 볼펜은 얼마예요?", "ko-KR"], ["Minho", "그 볼펜은 천오백 원이에요.", "ko-KR"], ["Yejin", "아, 비싸요. 그럼 저 연필은요?", "ko-KR"], ["Minho", "연필은 오백 원이에요.", "ko-KR"], ["Yejin", "그럼 연필 두 개하고 공책 하나 주세요.", "ko-KR"], ["Minho", "네, 모두 삼천 원이에요.", "ko-KR"], ["Yejin", "여기 있어요. 감사합니다!", "ko-KR"]],
    gist: ["예진 씨는 어디에 있어요?", ["문구점에", "카페에", "학교에"]],
    detail: [["공책은 얼마예요?", ["이천 원", "천오백 원", "오백 원"]], ["볼펜은 얼마예요?", ["천오백 원", "이천 원", "삼천 원"]], ["예진 씨는 연필을 몇 개 사요?", ["두 개", "한 개", "세 개"]], ["모두 얼마예요?", ["삼천 원", "삼천오백 원", "이천 원"]]],
    decode: ["이 공책은 이천 원이에요.", "모두 삼천 원이에요."],
    tip: "Listen for the unit after each number: 천 (1,000), 백 (100). 천오백 is 1,500; 오백 is 500.", tip_fr: "Écoute l'unité après chaque nombre : 천 (1 000), 백 (100). 천오백, c'est 1 500 ; 오백, c'est 500."
  }]);

  W.PROMPTS.push({ id: "ko-a1-2", level: "A1", q: "주변에 있는 물건을 소개해 보세요.", en: "Show three things around you: say what they are, and what one of them is not.", fr: "Montre trois objets autour de toi : dis ce qu'ils sont, et ce que l'un d'eux n'est pas.", time: 45,
    phrases: ["이건 …이에요 / 예요.", "그건 …", "저건 …", "…이 / 가 아니에요."],
    model: "이건 제 책이에요. 그건 제 휴대폰이에요. 저건 창문이에요. 이건 연필이 아니에요. 볼펜이에요." });

  W.WRITING_GUIDE["a1-2"] = { genre: "A short description: what's in my bag", genre_fr: "Une courte description : ce qu'il y a dans mon sac",
    plan: [["Say hello.", "Dis bonjour."], ["Say what the bag is, and what's inside.", "Dis ce qu'est le sac, et ce qu'il y a dedans."], ["Give the price of one thing.", "Donne le prix d'un objet."], ["One more thing, with 그리고.", "Un objet de plus, avec 그리고."]],
    marks: [["이건 제 가방이에요", "이건 + 이에요 / 예요: this is", "이건 + 이에요 / 예요 : ceci est"], ["가방 안에", "inside the bag", "dans le sac"], ["삼천 원이에요", "a price in won", "un prix en wons"], ["그리고", "and (between two sentences)", "et (entre deux phrases)"], ["제 우산이에요", "제: my (humble)", "제 : mon, ma (humble)"]] };

  W.COURSE.push({ id: "a1-2", level: "A1", icon: "message-circle-question", title: "What's this?", title_fr: "Qu'est-ce que c'est ?",
    intro: "In this unit, you finish learning Hangul: the final consonants, which move to the next syllable when you speak, and the compound vowels. Then you ask what things are, say what they are not, and use the Sino-Korean numbers to ask prices and give a phone number.",
    intro_fr: "Dans cette unité, tu termines l'apprentissage du hangeul : les consonnes finales, qui passent à la syllabe suivante quand on parle, et les voyelles composées. Puis tu demandes ce que sont les choses, tu dis ce qu'elles ne sont pas, et tu utilises les nombres sino-coréens pour demander un prix et donner un numéro de téléphone.",
    can: ["Read every Hangul syllable, with its final consonant", "Ask what something is, and say what it is or isn't", "Count with the Sino-Korean numbers, up to tens of thousands", "Ask a price, and give a phone number"],
    can_fr: ["Lire toutes les syllabes du hangeul, avec leur consonne finale", "Demander ce qu'est une chose, et dire ce qu'elle est ou n'est pas", "Compter avec les nombres sino-coréens, jusqu'aux dizaines de milliers", "Demander un prix, et donner un numéro de téléphone"],
    lessons: [4, 5, 6], vocab: ["objetsKO", "nombresKO", "questionsKO", "batchimKO"], reading: "minsugabang", prompt: "ko-a1-2",
    writing: { task: "Your Korean penfriend asks what's in your bag. Write 15-30 words: say what each thing is, and give the price of one of them.", task_fr: "Ton correspondant coréen te demande ce qu'il y a dans ton sac. Écris 15 à 30 mots : dis ce qu'est chaque objet, et donne le prix de l'un d'eux.", words: "15-30",
      tips: ["이건 제 …이에요 / 예요.", "가방 안에 …", "… 원이에요.", "그리고 …", "…이 / 가 아니에요."],
      checklist: ["I used 이에요 after a consonant and 예요 after a vowel", "I wrote the price in Hangul, with 원", "No 일 before 천 or 만 for one (천 원, 만 원)", "I joined two sentences with 그리고", "I stayed between 15 and 30 words"],
      checklist_fr: ["J'ai mis 이에요 après une consonne et 예요 après une voyelle", "J'ai écrit le prix en hangeul, avec 원", "Pas de 일 devant 천 ou 만 pour un (천 원, 만 원)", "J'ai relié deux phrases avec 그리고", "J'ai écrit entre 15 et 30 mots"],
      model: "안녕하세요!\n\n이건 제 가방이에요. 가방 안에 책, 공책, 지갑, 휴대폰이 있어요. 이 공책은 한국 공책이에요. 삼천 원이에요. 그리고 이건 제 우산이에요. 프랑스 우산이 아니에요. 한국 우산이에요!" } });
})();
