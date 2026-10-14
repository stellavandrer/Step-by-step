/* Cours de coréen, unité A1-1 « Hello, Hangul! / Bonjour, hangeul ! » : saluer et prendre congé (안녕히 가세요 ou
   안녕히 계세요 selon qui part), remercier, s'excuser, dire qui on est avec 저는 … 예요 / 이에요, puis le hangeul :
   les blocs, les voyelles, les consonnes (simples, aspirées, tendues) et les mots empruntés à l'anglais.
   Explications et traductions en anglais ET en français (js/ko/localize.js garde celles de l'interface).
   Personnages fictifs, prénoms coréens. Faits vérifiables seulement : le hangeul créé sous le roi Sejong et promulgué
   en 1446 dans le 훈민정음, le 한글날 le 9 octobre en Corée du Sud, 14 consonnes et 10 voyelles de base, les formes des
   consonnes tirées des organes de la parole et les voyelles du ciel, de la terre et de l'humain (훈민정음 해례본),
   ㅐ et ㅔ presque confondus à Séoul aujourd'hui, pas de son f en coréen. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "essentielsKO", icon: "hand", title: "The essentials", title_fr: "Les indispensables", level: "A1", words: [
    ["안녕하세요", "hello", "bonjour", "안녕하세요, 민지 씨!"],
    ["안녕하십니까", "hello (very formal)", "bonjour (très formel)", "여러분, 안녕하십니까?"],
    ["안녕히 가세요", "goodbye (to someone who leaves)", "au revoir (à la personne qui part)", "네, 안녕히 가세요!"],
    ["안녕히 계세요", "goodbye (when you are the one leaving)", "au revoir (quand c'est toi qui pars)", "감사합니다. 안녕히 계세요!"],
    ["감사합니다", "thank you (formal)", "merci (formel)", "네, 감사합니다."],
    ["고맙습니다", "thank you", "merci", "선물 고맙습니다!"],
    ["고마워요", "thanks (polite and warm)", "merci (poli et chaleureux)", "커피 고마워요!"],
    ["죄송합니다", "I'm very sorry", "toutes mes excuses (très poli)", "늦어서 죄송합니다."],
    ["미안해요", "sorry", "pardon, excuse-moi", "정말 미안해요."],
    ["괜찮아요", "it's OK; I'm fine; no, thank you", "ce n'est pas grave ; ça va ; non merci", "괜찮아요? — 네, 괜찮아요."],
    ["네", "yes; I see", "oui ; d'accord", "네, 맞아요."],
    ["예", "yes (formal)", "oui (formel)", "예, 알겠습니다."],
    ["아니요", "no", "non", "아니요, 괜찮아요."],
    ["반갑습니다", "nice to meet you", "ça me fait plaisir de vous rencontrer", "처음 뵙겠습니다. 반갑습니다."],
    ["만나서 반가워요", "nice to meet you (polite)", "ça me fait plaisir de te rencontrer", "저는 민지예요. 만나서 반가워요."],
    ["처음 뵙겠습니다", "how do you do (first meeting, formal)", "bonjour (première rencontre, formel)", "처음 뵙겠습니다. 저는 박준호입니다."],
    ["저기요", "excuse me (to call someone)", "excusez-moi (pour appeler quelqu'un)", "저기요! 물 주세요."],
    ["잠깐만요", "just a moment; excuse me (to get past)", "un instant ; pardon (pour passer)", "잠깐만요! 내려요!"],
    ["실례합니다", "excuse me (formal)", "excusez-moi (formel)", "실례합니다. 화장실이 어디예요?"],
    ["주세요", "… please (when you ask for something)", "… s'il vous plaît (quand on demande quelque chose)", "커피 주세요."]
  ] },
  { id: "premiersmotsKO", icon: "book-open-text", title: "First words to read", title_fr: "Premiers mots à lire", level: "A1", words: [
    ["아이", "child", "enfant", "아이가 귀여워요."],
    ["오이", "cucumber", "concombre", "오이 하나 주세요."],
    ["우유", "milk", "lait", "우유 주세요."],
    ["여우", "fox", "renard", "여우가 예뻐요."],
    ["이유", "reason", "raison", "이유가 뭐예요?"],
    ["나라", "country", "pays", "한국은 아름다운 나라예요."],
    ["나무", "tree", "arbre", "나무가 커요."],
    ["바다", "sea", "mer", "바다가 예뻐요."],
    ["머리", "head; hair", "tête ; cheveux", "머리가 아파요."],
    ["모자", "hat, cap", "chapeau, casquette", "모자가 예뻐요."],
    ["가구", "furniture", "meubles", "가구가 비싸요."],
    ["두부", "tofu", "tofu", "두부 하나 주세요."],
    ["아버지", "father", "père", "아버지는 선생님이에요."],
    ["어머니", "mother", "mère", "어머니는 한국 사람이에요."],
    ["커피", "coffee", "café", "커피 주세요."],
    ["버스", "bus", "bus", "버스가 와요."],
    ["피자", "pizza", "pizza", "피자 하나 주세요."],
    ["바나나", "banana", "banane", "바나나 주세요."],
    ["카메라", "camera", "appareil photo", "카메라가 비싸요."],
    ["토마토", "tomato", "tomate", "토마토 주스 주세요."]
  ] },
  { id: "paysKO", icon: "globe", title: "Countries and people", title_fr: "Pays et nationalités", level: "A1", words: [
    ["한국", "Korea", "la Corée", "저는 한국 사람이에요."],
    ["프랑스", "France", "la France", "저는 프랑스 사람이에요."],
    ["미국", "the USA", "les États-Unis", "에밀리 씨는 미국 사람이에요?"],
    ["영국", "the United Kingdom", "le Royaume-Uni", "톰 씨는 영국 사람이에요."],
    ["캐나다", "Canada", "le Canada", "캐나다 사람이에요?"],
    ["벨기에", "Belgium", "la Belgique", "루카스 씨는 벨기에 사람이에요."],
    ["스위스", "Switzerland", "la Suisse", "스위스 사람이에요."],
    ["일본", "Japan", "le Japon", "일본 사람이에요?"],
    ["중국", "China", "la Chine", "중국 사람이에요."],
    ["독일", "Germany", "l'Allemagne", "독일 사람이에요."],
    ["사람", "person, people", "personne, gens", "한국 사람이에요?"],
    ["한국어", "Korean (the language)", "le coréen (la langue)", "한국어를 공부해요."],
    ["영어", "English (the language)", "l'anglais (la langue)", "영어를 해요."],
    ["프랑스어", "French (the language)", "le français (la langue)", "프랑스어를 해요."],
    ["저", "I, me (polite)", "je, moi (poli)", "저는 민지예요."],
    ["이름", "name", "nom, prénom", "이름이 뭐예요?"],
    ["씨", "(after a name, to be polite)", "(après un prénom, pour être poli)", "민지 씨, 안녕하세요!"],
    ["선생님", "teacher; (a polite title)", "professeur ; (titre de politesse)", "선생님, 안녕하세요!"],
    ["학생", "student", "élève, étudiant ou étudiante", "저는 학생이에요."]
  ] });

  W.LESSONS.push(
  {
    id: 1, level: "A1", kind: "functional", icon: "hand",
    title: "Everyday Korean: hello, goodbye, thank you", title_fr: "Le coréen de tous les jours : bonjour, au revoir, merci",
    subtitle: "Greet people, say goodbye the right way, thank, apologise and say who you are.", subtitle_fr: "Saluer, dire au revoir de la bonne façon, remercier, t'excuser et dire qui tu es.",
    body: `
<h2>Saying hello</h2>
<p><s-ko>안녕하세요!</s-ko> is the hello for every situation and every time of day: morning, afternoon or evening, to a shopkeeper, a colleague or a new friend. Literally, it asks whether you are at peace. The very formal <s-ko>안녕하십니까?</s-ko> is heard from news presenters, at official events and in some shops.</p>
<p>Koreans often greet each other with a slight bow of the head and shoulders, deeper for an older person or a superior. With friends, a nod or a wave is enough.</p>
<h2>Saying goodbye: who is leaving?</h2>
<p>Korean has two goodbyes, and the choice depends on who leaves:</p>
<table>
<tr><th>Korean</th><th>Literally</th><th>Who says it</th></tr>
<tr><td><s-ko>안녕히 가세요</s-ko></td><td>go in peace</td><td>the person who stays, to the one who leaves</td></tr>
<tr><td><s-ko>안녕히 계세요</s-ko></td><td>stay in peace</td><td>the person who leaves, to the one who stays</td></tr>
</table>
<p>You leave a shop: you say <s-ko>안녕히 계세요</s-ko>, and the staff answer <s-ko>안녕히 가세요</s-ko>. You both leave, in the street: you both say <s-ko>안녕히 가세요</s-ko>.</p>
<h2>Thank you, sorry, yes and no</h2>
<p><s-ko>감사합니다</s-ko> and <s-ko>고맙습니다</s-ko> both mean thank you, and both are polite; <s-ko>고마워요</s-ko> is warmer, for people you know. To apologise: <s-ko>죄송합니다</s-ko> (very polite) or <s-ko>미안해요</s-ko>. Yes is <s-ko>네</s-ko> (or <s-ko>예</s-ko>, more formal), no is <s-ko>아니요</s-ko>. And <s-ko>괜찮아요</s-ko> is a magic word: it's OK, I'm fine, or no, thank you.</p>
<h2>Saying who you are</h2>
<p><s-ko>저는</s-ko> means "as for me". Add your name, then <s-ko>예요</s-ko> after a vowel or <s-ko>이에요</s-ko> after a consonant: <s-ko>저는 민지예요.</s-ko> (I'm Minji.) · <s-ko>저는 수진이에요.</s-ko> (I'm Sujin.) It works the same for your nationality, with a country and <s-ko>사람</s-ko> (person): <s-ko>저는 프랑스 사람이에요.</s-ko> (I'm French.)</p>
<p>When you say someone's name, add <s-ko>씨</s-ko> to be polite: <s-ko>민지 씨</s-ko>. Never use 씨 for yourself. For a first meeting: <s-ko>처음 뵙겠습니다</s-ko> (formal: literally, I see you for the first time) or <s-ko>만나서 반가워요</s-ko> (nice to meet you).</p>
<div class="tip">Two styles of politeness appear from the start. Endings in <b>-요</b> (<s-ko>고마워요</s-ko>, <s-ko>미안해요</s-ko>) are the everyday polite style. Endings in <b>-ㅂ니다 / -습니다</b> (<s-ko>감사합니다</s-ko>, <s-ko>죄송합니다</s-ko>) are more formal: first meetings, work, announcements. This course starts with the -요 style, the one you'll use most. And <s-ko>네?</s-ko>, with a rising voice, means "Sorry? Could you repeat?"</div>
`,
    body_fr: `
<h2>Dire bonjour</h2>
<p><s-ko>안녕하세요!</s-ko> est le bonjour de toutes les situations et de toute la journée : le matin, l'après-midi ou le soir, à un commerçant, à un collègue ou à un nouvel ami. Mot à mot, il demande si tu es en paix. Le très formel <s-ko>안녕하십니까?</s-ko> s'entend chez les présentateurs du journal, dans les cérémonies officielles et dans certains magasins.</p>
<p>En Corée, on se salue souvent en inclinant légèrement la tête et les épaules, plus bas devant une personne plus âgée ou un supérieur. Entre amis, un signe de tête ou de la main suffit.</p>
<h2>Dire au revoir : qui s'en va ?</h2>
<p>Le coréen a deux au revoir, et le choix dépend de la personne qui part :</p>
<table>
<tr><th>Coréen</th><th>Mot à mot</th><th>Qui le dit</th></tr>
<tr><td><s-ko>안녕히 가세요</s-ko></td><td>va en paix</td><td>la personne qui reste, à celle qui part</td></tr>
<tr><td><s-ko>안녕히 계세요</s-ko></td><td>reste en paix</td><td>la personne qui part, à celle qui reste</td></tr>
</table>
<p>Tu quittes un magasin : tu dis <s-ko>안녕히 계세요</s-ko>, et le personnel répond <s-ko>안녕히 가세요</s-ko>. Vous partez tous les deux, dans la rue : vous dites tous les deux <s-ko>안녕히 가세요</s-ko>.</p>
<h2>Merci, pardon, oui et non</h2>
<p><s-ko>감사합니다</s-ko> et <s-ko>고맙습니다</s-ko> veulent tous les deux dire merci, et sont tous les deux polis ; <s-ko>고마워요</s-ko> est plus chaleureux, pour les gens que tu connais. Pour t'excuser : <s-ko>죄송합니다</s-ko> (très poli) ou <s-ko>미안해요</s-ko>. Oui se dit <s-ko>네</s-ko> (ou <s-ko>예</s-ko>, plus formel), non se dit <s-ko>아니요</s-ko>. Et <s-ko>괜찮아요</s-ko> est un mot magique : ce n'est pas grave, ça va, ou non merci.</p>
<h2>Dire qui tu es</h2>
<p><s-ko>저는</s-ko> veut dire « quant à moi ». Ajoute ton prénom, puis <s-ko>예요</s-ko> après une voyelle ou <s-ko>이에요</s-ko> après une consonne : <s-ko>저는 민지예요.</s-ko> (Je suis Minji.) · <s-ko>저는 수진이에요.</s-ko> (Je suis Sujin.) Même chose pour la nationalité, avec un pays et <s-ko>사람</s-ko> (personne) : <s-ko>저는 프랑스 사람이에요.</s-ko> (Je viens de France.)</p>
<p>Quand tu dis le prénom de quelqu'un, ajoute <s-ko>씨</s-ko> par politesse : <s-ko>민지 씨</s-ko>. Jamais 씨 pour toi-même. Pour une première rencontre : <s-ko>처음 뵙겠습니다</s-ko> (formel : mot à mot, je vous vois pour la première fois) ou <s-ko>만나서 반가워요</s-ko> (ça me fait plaisir de te rencontrer).</p>
<div class="tip">Deux styles de politesse apparaissent dès le début. Les terminaisons en <b>-요</b> (<s-ko>고마워요</s-ko>, <s-ko>미안해요</s-ko>) forment le style poli de tous les jours. Les terminaisons en <b>-ㅂ니다 / -습니다</b> (<s-ko>감사합니다</s-ko>, <s-ko>죄송합니다</s-ko>) sont plus formelles : premières rencontres, travail, annonces. Ce cours commence par le style en -요, celui que tu utiliseras le plus. Et <s-ko>네?</s-ko>, avec la voix qui monte, veut dire « Pardon ? Tu peux répéter ? »</div>
`,
    examples: [
      ["안녕하세요! 저는 민지예요.", "Hello! I'm Minji.", "Bonjour ! Je suis Minji."],
      ["만나서 반가워요.", "Nice to meet you.", "Ça me fait plaisir de te rencontrer."],
      ["저는 프랑스 사람이에요.", "I'm French.", "Je viens de France."],
      ["감사합니다. 안녕히 계세요!", "Thank you. Goodbye!", "Merci. Au revoir !"],
      ["네, 안녕히 가세요!", "Yes, goodbye!", "Oui, au revoir !"],
      ["늦어서 죄송합니다.", "I'm very sorry I'm late.", "Toutes mes excuses pour le retard."],
      ["저기요! 커피 주세요.", "Excuse me! A coffee, please.", "Excusez-moi ! Un café, s'il vous plaît."]
    ],
    quiz: [
      { q: "You leave a shop. You say to the staff:", q_fr: "Tu quittes un magasin. Tu dis au personnel :", o: ["안녕히 계세요", "안녕히 가세요", "안녕하세요"], a: 0, ex: "You leave and the staff stay: stay in peace, 안녕히 계세요.", ex_fr: "C'est toi qui pars et le personnel reste : reste en paix, 안녕히 계세요." },
      { q: "Complete: 저는 민지___.", q_fr: "Complète : 저는 민지___.", o: ["예요", "이에요", "씨"], a: 0, ex: "민지 ends with a vowel (ㅣ): 예요.", ex_fr: "민지 se termine par une voyelle (ㅣ) : 예요." },
      { q: "Complete: 저는 한국 사람___.", q_fr: "Complète : 저는 한국 사람___.", o: ["이에요", "예요", "주세요"], a: 0, ex: "사람 ends with a consonant (ㅁ): 이에요.", ex_fr: "사람 se termine par une consonne (ㅁ) : 이에요." },
      { q: "Someone offers you more coffee, and you don't want any. You say:", q_fr: "On te propose encore du café, et tu n'en veux plus. Tu dis :", o: ["괜찮아요", "죄송합니다", "주세요"], a: 0, ex: "괜찮아요: it's OK, no thank you.", ex_fr: "괜찮아요 : ça va, non merci." },
      { q: "Which sentence is wrong?", q_fr: "Quelle phrase est fausse ?", o: ["저는 알렉스 씨예요.", "저는 알렉스예요.", "알렉스 씨, 안녕하세요!"], a: 0, ex: "씨 goes after other people's names, never after your own.", ex_fr: "씨 se met après le prénom des autres, jamais après le sien." }
    ]
  },
  {
    id: 2, level: "A1", icon: "spell-check",
    title: "Hangul (1): the blocks and the vowels", title_fr: "Le hangeul (1) : les blocs et les voyelles",
    subtitle: "How Korean letters build syllables, the basic vowels, and your first words.", subtitle_fr: "Comment les lettres coréennes forment des syllabes, les voyelles de base et tes premiers mots.",
    body: `
<h2>An alphabet in blocks</h2>
<p>Hangul (<s-ko>한글</s-ko>) was created under King Sejong the Great and promulgated in 1446 in a document called <s-ko>훈민정음</s-ko>, the correct sounds for the instruction of the people. Its aim: let everyone read and write, not only the scholars who had learnt Chinese characters. South Korea celebrates it every 9 October, on Hangul Day (<s-ko>한글날</s-ko>).</p>
<p>Hangul is an alphabet of 14 basic consonants and 10 basic vowels. But the letters are grouped in blocks, one block per syllable: <s-ko>한</s-ko> = ㅎ + ㅏ + ㄴ. And a block always starts with a consonant.</p>
<h2>The basic vowels</h2>
<table>
<tr><th>Vowel</th><th>Sound</th><th>With ㅇ</th></tr>
<tr><td>ㅏ</td><td>a, as in "father"</td><td><s-ko>아</s-ko></td></tr>
<tr><td>ㅓ</td><td>eo: like the o of British "hot", lips not rounded</td><td><s-ko>어</s-ko></td></tr>
<tr><td>ㅗ</td><td>o, as in "go", but without gliding into a w</td><td><s-ko>오</s-ko></td></tr>
<tr><td>ㅜ</td><td>u, as in "food"</td><td><s-ko>우</s-ko></td></tr>
<tr><td>ㅡ</td><td>eu: say "oo" while smiling, lips spread</td><td><s-ko>으</s-ko></td></tr>
<tr><td>ㅣ</td><td>i, as in "see"</td><td><s-ko>이</s-ko></td></tr>
<tr><td>ㅐ · ㅔ</td><td>ae · e, as in "bed": in today's Seoul speech, they sound almost the same</td><td><s-ko>애</s-ko> · <s-ko>에</s-ko></td></tr>
</table>
<h2>One more stroke for y</h2>
<p>Add a second short stroke, and the vowel starts with a y: ㅏ → ㅑ (ya), ㅓ → ㅕ (yeo), ㅗ → ㅛ (yo), ㅜ → ㅠ (yu), ㅐ → ㅒ (yae), ㅔ → ㅖ (ye).</p>
<h2>The silent ㅇ and the shape of the block</h2>
<p>On paper, a syllable can't start with a vowel: the circle ㅇ fills the empty place, and isn't pronounced at the start of a syllable. Tall vowels (ㅏ ㅓ ㅣ ㅑ ㅕ ㅐ ㅔ) go to the right of the consonant: <s-ko>아</s-ko>, <s-ko>이</s-ko>. Flat vowels (ㅗ ㅜ ㅡ ㅛ ㅠ) go under it: <s-ko>오</s-ko>, <s-ko>우</s-ko>.</p>
<p>The vowels were built from three symbols: a dot for heaven, a flat line for the earth (ㅡ) and an upright line for humans (ㅣ). Today, the dot is written as a short stroke.</p>
<h2>Your first words</h2>
<p><s-ko>아이</s-ko> (child) · <s-ko>오이</s-ko> (cucumber) · <s-ko>우유</s-ko> (milk) · <s-ko>여우</s-ko> (fox) · <s-ko>이유</s-ko> (reason) · <s-ko>아야!</s-ko> (ouch!)</p>
<div class="tip">To write in Korean, open the <b>한글</b> keyboard that appears with every answer box: type a consonant, then a vowel, and the block builds itself (ㅇ + ㅏ = 아). On a computer, while it is open, the keys of your own keyboard type Hangul too, at the place they have on a Korean keyboard.</div>
`,
    body_fr: `
<h2>Un alphabet en blocs</h2>
<p>Le hangeul (<s-ko>한글</s-ko>) a été créé sous le roi Sejong le Grand et promulgué en 1446 dans un document appelé <s-ko>훈민정음</s-ko>, les sons corrects pour instruire le peuple. Son but : permettre à tout le monde de lire et d'écrire, pas seulement aux lettrés qui avaient appris les caractères chinois. La Corée du Sud le fête chaque 9 octobre, le jour du hangeul (<s-ko>한글날</s-ko>).</p>
<p>Le hangeul est un alphabet de 14 consonnes et 10 voyelles de base. Mais les lettres sont regroupées en blocs, un bloc par syllabe : <s-ko>한</s-ko> = ㅎ + ㅏ + ㄴ. Et un bloc commence toujours par une consonne.</p>
<h2>Les voyelles de base</h2>
<table>
<tr><th>Voyelle</th><th>Son</th><th>Avec ㅇ</th></tr>
<tr><td>ㅏ</td><td>« a », comme dans « papa »</td><td><s-ko>아</s-ko></td></tr>
<tr><td>ㅓ</td><td>eo : un « o » ouvert, comme dans « porte », mais sans arrondir les lèvres</td><td><s-ko>어</s-ko></td></tr>
<tr><td>ㅗ</td><td>« o » fermé, comme dans « eau », lèvres arrondies</td><td><s-ko>오</s-ko></td></tr>
<tr><td>ㅜ</td><td>« ou », comme dans « fou »</td><td><s-ko>우</s-ko></td></tr>
<tr><td>ㅡ</td><td>eu : dis « ou » en souriant, les lèvres étirées</td><td><s-ko>으</s-ko></td></tr>
<tr><td>ㅣ</td><td>« i », comme dans « ici »</td><td><s-ko>이</s-ko></td></tr>
<tr><td>ㅐ · ㅔ</td><td>ae · e, entre « è » et « é » : à Séoul aujourd'hui, ils se prononcent presque pareil</td><td><s-ko>애</s-ko> · <s-ko>에</s-ko></td></tr>
</table>
<h2>Un trait de plus pour le son « y »</h2>
<p>Ajoute un second petit trait, et la voyelle commence par un « y » : ㅏ → ㅑ (ya), ㅓ → ㅕ (yeo), ㅗ → ㅛ (yo), ㅜ → ㅠ (you), ㅐ → ㅒ (yae), ㅔ → ㅖ (yé).</p>
<h2>Le ㅇ muet et la forme du bloc</h2>
<p>À l'écrit, une syllabe ne peut pas commencer par une voyelle : le cercle ㅇ occupe la place vide, et ne se prononce pas en début de syllabe. Les voyelles verticales (ㅏ ㅓ ㅣ ㅑ ㅕ ㅐ ㅔ) se placent à droite de la consonne : <s-ko>아</s-ko>, <s-ko>이</s-ko>. Les voyelles horizontales (ㅗ ㅜ ㅡ ㅛ ㅠ) se placent dessous : <s-ko>오</s-ko>, <s-ko>우</s-ko>.</p>
<p>Les voyelles ont été construites à partir de trois symboles : un point pour le ciel, un trait horizontal pour la terre (ㅡ) et un trait vertical pour l'être humain (ㅣ). Aujourd'hui, le point s'écrit comme un petit trait.</p>
<h2>Tes premiers mots</h2>
<p><s-ko>아이</s-ko> (enfant) · <s-ko>오이</s-ko> (concombre) · <s-ko>우유</s-ko> (lait) · <s-ko>여우</s-ko> (renard) · <s-ko>이유</s-ko> (raison) · <s-ko>아야!</s-ko> (aïe !)</p>
<div class="tip">Pour écrire en coréen, ouvre le clavier <b>한글</b> qui apparaît avec chaque case de réponse : tape une consonne, puis une voyelle, et le bloc se forme tout seul (ㅇ + ㅏ = 아). Sur un ordinateur, tant qu'il est ouvert, les touches de ton propre clavier tapent aussi le hangeul, à la place qu'elles ont sur un clavier coréen.</div>
`,
    examples: [
      ["아이", "child", "enfant"],
      ["오이 하나 주세요.", "One cucumber, please.", "Un concombre, s'il vous plaît."],
      ["우유 주세요.", "Milk, please.", "Du lait, s'il vous plaît."],
      ["여우가 예뻐요.", "The fox is beautiful.", "Le renard est beau."],
      ["이유가 뭐예요?", "What's the reason?", "Quelle est la raison ?"],
      ["아야!", "Ouch!", "Aïe !"]
    ],
    quiz: [
      { q: "How do you write the syllable a?", q_fr: "Comment écrit-on la syllabe « a » ?", o: ["아", "ㅏ", "가"], a: 0, ex: "A block always starts with a consonant: the silent ㅇ fills the place.", ex_fr: "Un bloc commence toujours par une consonne : le ㅇ muet occupe la place." },
      { q: "Which word means milk?", q_fr: "Quel mot veut dire lait ?", o: ["우유", "오이", "아이"], a: 0, ex: "우유 = milk, 오이 = cucumber, 아이 = child.", ex_fr: "우유 = lait, 오이 = concombre, 아이 = enfant." },
      { q: "In 오, where is the vowel?", q_fr: "Dans 오, où est la voyelle ?", o: ["Under the consonant", "To the right of the consonant", "Above the consonant"], o_fr: ["Sous la consonne", "À droite de la consonne", "Au-dessus de la consonne"], a: 0, ex: "ㅗ is a flat vowel: it goes under the consonant.", ex_fr: "ㅗ est une voyelle horizontale : elle se place sous la consonne." },
      { q: "Which vowel is pronounced ya?", q_fr: "Quelle voyelle se prononce « ya » ?", o: ["ㅑ", "ㅕ", "ㅛ"], a: 0, ex: "ㅏ (a) + one stroke = ㅑ (ya).", ex_fr: "ㅏ (a) + un trait = ㅑ (ya)." },
      { q: "Hangul was promulgated…", q_fr: "Le hangeul a été promulgué…", o: ["in 1446, under King Sejong", "in 1910, under the Japanese occupation", "in 1948, with the Republic of Korea"], o_fr: ["en 1446, sous le roi Sejong", "en 1910, sous l'occupation japonaise", "en 1948, avec la République de Corée"], a: 0, ex: "In 1446, in the 훈민정음.", ex_fr: "En 1446, dans le 훈민정음." }
    ]
  },
  {
    id: 3, level: "A1", icon: "type",
    title: "Hangul (2): the consonants", title_fr: "Le hangeul (2) : les consonnes",
    subtitle: "Letters that draw the mouth, three series of consonants, and words borrowed from English.", subtitle_fr: "Des lettres qui dessinent la bouche, trois séries de consonnes et des mots venus de l'anglais.",
    body: `
<h2>Letters that draw the mouth</h2>
<p>The basic consonants draw the organs that pronounce them, as the 1446 commentary on Hangul explains: ㄱ is the back of the tongue touching the roof of the mouth, ㄴ the tip of the tongue against the gum ridge, ㅁ the mouth, ㅅ a tooth, ㅇ the throat. Most other consonants add strokes to these shapes.</p>
<table>
<tr><th>Letter</th><th>Sound</th><th>Example</th></tr>
<tr><td>ㄱ</td><td>between k and g: k at the start of a word, g between vowels</td><td><s-ko>가구</s-ko> (furniture)</td></tr>
<tr><td>ㄴ</td><td>n</td><td><s-ko>나무</s-ko> (tree)</td></tr>
<tr><td>ㄷ</td><td>between t and d</td><td><s-ko>바다</s-ko> (sea)</td></tr>
<tr><td>ㄹ</td><td>a light r between vowels, l at the end of a syllable</td><td><s-ko>나라</s-ko> (country)</td></tr>
<tr><td>ㅁ</td><td>m</td><td><s-ko>머리</s-ko> (head)</td></tr>
<tr><td>ㅂ</td><td>between p and b</td><td><s-ko>두부</s-ko> (tofu)</td></tr>
<tr><td>ㅅ</td><td>s, and sh before ㅣ</td><td><s-ko>소</s-ko> (cow) · <s-ko>시</s-ko></td></tr>
<tr><td>ㅈ</td><td>between ch and j</td><td><s-ko>모자</s-ko> (hat)</td></tr>
<tr><td>ㅎ</td><td>h</td><td><s-ko>하나</s-ko> (one)</td></tr>
</table>
<h2>Three series: plain, aspirated, tense</h2>
<p>Four consonants have an aspirated version, with a strong puff of air and one more stroke: ㄱ → ㅋ, ㄷ → ㅌ, ㅂ → ㅍ, ㅈ → ㅊ. Five have a tense version, written double, with no air and a tight throat: ㄲ, ㄸ, ㅃ, ㅆ, ㅉ. Hold a sheet of paper in front of your mouth: it moves a lot with <s-ko>탈</s-ko>, a little with <s-ko>달</s-ko>, not at all with <s-ko>딸</s-ko>.</p>
<p><s-ko>달</s-ko> (moon) · <s-ko>탈</s-ko> (mask) · <s-ko>딸</s-ko> (daughter) — <s-ko>불</s-ko> (fire) · <s-ko>풀</s-ko> (grass) · <s-ko>뿔</s-ko> (horn)</p>
<h2>Reading words borrowed from English</h2>
<p>Many Korean words come from English, and reading them is great practice: <s-ko>커피</s-ko> (coffee) · <s-ko>버스</s-ko> (bus) · <s-ko>피자</s-ko> · <s-ko>바나나</s-ko> · <s-ko>카메라</s-ko> · <s-ko>토마토</s-ko>. Korean spells them by their sound, with its own letters: there's no f in Korean, so coffee becomes <s-ko>커피</s-ko>, with ㅍ.</p>
<div class="tip">The romanization (bada, keopi) appears under Korean words during level A1, then only when you click a word. It's a crutch: read the Hangul first, then check. Each letter also has a name, useful to spell a word: ㄱ <s-ko>기역</s-ko>, ㄴ <s-ko>니은</s-ko>, ㄷ <s-ko>디귿</s-ko>, ㄹ <s-ko>리을</s-ko>, ㅁ <s-ko>미음</s-ko>, ㅂ <s-ko>비읍</s-ko>, ㅅ <s-ko>시옷</s-ko>, ㅇ <s-ko>이응</s-ko>.</div>
`,
    body_fr: `
<h2>Des lettres qui dessinent la bouche</h2>
<p>Les consonnes de base dessinent les organes qui les prononcent, comme l'explique le commentaire du hangeul de 1446 : ㄱ représente l'arrière de la langue qui touche le palais, ㄴ la pointe de la langue contre les gencives, ㅁ la bouche, ㅅ une dent, ㅇ la gorge. La plupart des autres consonnes ajoutent des traits à ces formes.</p>
<table>
<tr><th>Lettre</th><th>Son</th><th>Exemple</th></tr>
<tr><td>ㄱ</td><td>entre k et g : k en début de mot, g entre deux voyelles</td><td><s-ko>가구</s-ko> (meubles)</td></tr>
<tr><td>ㄴ</td><td>n</td><td><s-ko>나무</s-ko> (arbre)</td></tr>
<tr><td>ㄷ</td><td>entre t et d</td><td><s-ko>바다</s-ko> (mer)</td></tr>
<tr><td>ㄹ</td><td>un r léger entre deux voyelles, l en fin de syllabe</td><td><s-ko>나라</s-ko> (pays)</td></tr>
<tr><td>ㅁ</td><td>m</td><td><s-ko>머리</s-ko> (tête)</td></tr>
<tr><td>ㅂ</td><td>entre p et b</td><td><s-ko>두부</s-ko> (tofu)</td></tr>
<tr><td>ㅅ</td><td>s, et « ch » devant ㅣ</td><td><s-ko>소</s-ko> (vache) · <s-ko>시</s-ko></td></tr>
<tr><td>ㅈ</td><td>entre « tch » et « dj »</td><td><s-ko>모자</s-ko> (chapeau)</td></tr>
<tr><td>ㅎ</td><td>h, toujours prononcé, comme un souffle</td><td><s-ko>하나</s-ko> (un)</td></tr>
</table>
<h2>Trois séries : simples, aspirées, tendues</h2>
<p>Quatre consonnes ont une version aspirée, avec un fort souffle d'air et un trait de plus : ㄱ → ㅋ, ㄷ → ㅌ, ㅂ → ㅍ, ㅈ → ㅊ. Cinq ont une version tendue, écrite double, sans souffle et la gorge serrée : ㄲ, ㄸ, ㅃ, ㅆ, ㅉ. Tiens une feuille de papier devant ta bouche : elle bouge beaucoup avec <s-ko>탈</s-ko>, un peu avec <s-ko>달</s-ko>, pas du tout avec <s-ko>딸</s-ko>.</p>
<p><s-ko>달</s-ko> (lune) · <s-ko>탈</s-ko> (masque) · <s-ko>딸</s-ko> (fille, l'enfant) — <s-ko>불</s-ko> (feu) · <s-ko>풀</s-ko> (herbe) · <s-ko>뿔</s-ko> (corne)</p>
<h2>Lire les mots venus de l'anglais</h2>
<p>Beaucoup de mots coréens viennent de l'anglais, et les lire est un excellent entraînement : <s-ko>커피</s-ko> (café) · <s-ko>버스</s-ko> (bus) · <s-ko>피자</s-ko> · <s-ko>바나나</s-ko> · <s-ko>카메라</s-ko> · <s-ko>토마토</s-ko>. Le coréen les écrit comme ils se prononcent, avec ses propres lettres : il n'y a pas de f en coréen, donc coffee devient <s-ko>커피</s-ko>, avec ㅍ.</p>
<div class="tip">La romanisation (bada, keopi) s'affiche sous les mots coréens pendant le niveau A1, puis seulement quand tu cliques sur un mot. C'est une béquille : lis d'abord le hangeul, puis vérifie. Chaque lettre a aussi un nom, utile pour épeler : ㄱ <s-ko>기역</s-ko>, ㄴ <s-ko>니은</s-ko>, ㄷ <s-ko>디귿</s-ko>, ㄹ <s-ko>리을</s-ko>, ㅁ <s-ko>미음</s-ko>, ㅂ <s-ko>비읍</s-ko>, ㅅ <s-ko>시옷</s-ko>, ㅇ <s-ko>이응</s-ko>.</div>
`,
    examples: [
      ["바다가 예뻐요.", "The sea is beautiful.", "La mer est belle."],
      ["나무가 커요.", "The tree is big.", "L'arbre est grand."],
      ["버스가 와요.", "The bus is coming.", "Le bus arrive."],
      ["모자가 예뻐요.", "The hat is pretty.", "Le chapeau est joli."],
      ["머리가 아파요.", "I have a headache.", "J'ai mal à la tête."],
      ["피자 하나 주세요.", "One pizza, please.", "Une pizza, s'il vous plaît."],
      ["토마토 주스 주세요.", "A tomato juice, please.", "Un jus de tomate, s'il vous plaît."]
    ],
    quiz: [
      { q: "Which letter is the aspirated version of ㄱ?", q_fr: "Quelle lettre est la version aspirée de ㄱ ?", o: ["ㅋ", "ㄲ", "ㄴ"], a: 0, ex: "One more stroke, and a puff of air: ㅋ. ㄲ is the tense version.", ex_fr: "Un trait de plus, et un souffle d'air : ㅋ. ㄲ est la version tendue." },
      { q: "달, 탈, 딸: which one starts with a tense consonant?", q_fr: "달, 탈, 딸 : lequel commence par une consonne tendue ?", o: ["딸", "탈", "달"], a: 0, ex: "Tense consonants are written double: ㄸ.", ex_fr: "Les consonnes tendues s'écrivent doubles : ㄸ." },
      { q: "How is 바다 romanized?", q_fr: "Comment romanise-t-on 바다 ?", o: ["bada", "pata", "bata"], a: 0, ex: "Between two vowels, ㄷ sounds like a d.", ex_fr: "Entre deux voyelles, ㄷ se prononce comme un d." },
      { q: "Which word comes from English?", q_fr: "Quel mot vient de l'anglais ?", o: ["커피", "나무", "바다"], a: 0, ex: "커피 = coffee, with ㅍ for the f.", ex_fr: "커피 = coffee, avec ㅍ pour le f." },
      { q: "What does the shape of ㅁ represent?", q_fr: "Que représente la forme de ㅁ ?", o: ["the mouth", "a tooth", "the throat"], o_fr: ["la bouche", "une dent", "la gorge"], a: 0, ex: "ㅁ the mouth, ㅅ a tooth, ㅇ the throat.", ex_fr: "ㅁ la bouche, ㅅ une dent, ㅇ la gorge." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    1: {
      gap: [["안녕히 ___!", "계세요", "you are the one leaving", "c'est toi qui pars"], ["저는 민수___.", "예요", "after a vowel", "après une voyelle"], ["저는 프랑스 사람___.", "이에요", "after a consonant", "après une consonne"], ["커피 ___.", "주세요", "please", "s'il vous plaît"]],
      fix: [["저는 민수이에요.", "저는 민수예요.", "After a vowel, it's 예요: 민수예요.", "Après une voyelle, c'est 예요 : 민수예요."], ["저는 한국 사람예요.", "저는 한국 사람이에요.", "After a consonant (사람 ends in ㅁ), it's 이에요.", "Après une consonne (사람 finit par ㅁ), c'est 이에요."]],
      task: ["Write a short dialogue (4 lines) in which you meet someone for the first time: hello, names, nationality.", "Écris un court dialogue (4 répliques) où tu rencontres quelqu'un pour la première fois : bonjour, prénoms, nationalité.", "안녕하세요! 저는 민지예요. — 안녕하세요! 저는 알렉스예요. 만나서 반가워요. — 저도 반가워요. 알렉스 씨는 미국 사람이에요? — 아니요, 저는 프랑스 사람이에요."]
    },
    2: {
      gap: [["ㅇ + ㅏ + ㅇ + ㅣ = ___", "아이", "child", "enfant"], ["ㅇ + ㅜ + ㅇ + ㅠ = ___", "우유", "milk", "lait"], ["ㅇ + ㅕ + ㅇ + ㅜ = ___", "여우", "fox", "renard"], ["ㅇ + ㅗ + ㅇ + ㅣ = ___", "오이", "cucumber", "concombre"]],
      fix: [["ㅏㅣ", "아이", "A block always starts with a consonant: add the silent ㅇ before each vowel.", "Un bloc commence toujours par une consonne : ajoute le ㅇ muet devant chaque voyelle."], ["ㅇㅜㅇㅠ", "우유", "Each syllable is one block: ㅇ + ㅜ = 우, ㅇ + ㅠ = 유.", "Chaque syllabe forme un bloc : ㅇ + ㅜ = 우, ㅇ + ㅠ = 유."]],
      task: ["Copy the six basic vowels with ㅇ (아, 어, 오, 우, 으, 이), then write the five words of the lesson made only of vowels.", "Recopie les six voyelles de base avec ㅇ (아, 어, 오, 우, 으, 이), puis écris les cinq mots de la leçon faits seulement de voyelles.", "아 어 오 우 으 이 — 아이, 오이, 우유, 여우, 이유"]
    },
    3: {
      gap: [["ㄴ + ㅏ + ㄹ + ㅏ = ___", "나라", "country", "pays"], ["ㅂ + ㅏ + ㄷ + ㅏ = ___", "바다", "sea", "mer"], ["ㅋ + ㅓ + ㅍ + ㅣ = ___", "커피", "coffee", "café"], ["ㅁ + ㅗ + ㅈ + ㅏ = ___", "모자", "hat", "chapeau"]],
      fix: [["ㅍㅣ자", "피자", "Each syllable is one block: ㅍ + ㅣ = 피.", "Chaque syllabe forme un bloc : ㅍ + ㅣ = 피."], ["ㄴㅏ무", "나무", "ㄴ + ㅏ make one block: 나.", "ㄴ + ㅏ forment un seul bloc : 나."]],
      task: ["Write five words borrowed from English that you could see in a Korean café.", "Écris cinq mots venus de l'anglais que tu pourrais voir dans un café coréen.", "커피, 피자, 바나나, 토마토 주스, 케이크"]
    }
  });

  W.ROLEPLAYS.push(
  { id: "kocafe-minji", lesson: 1, level: "A1", icon: "hand", partner: "Minji", role: "a student at a language exchange", role_fr: "une étudiante à un échange linguistique",
    title: "Meeting someone at a language exchange", title_fr: "Une rencontre à un échange linguistique",
    setting: "You go to a language exchange in a café in Seoul. Minji, a Korean student, sits down next to you.", setting_fr: "Tu vas à un échange linguistique dans un café de Séoul. Minji, une étudiante coréenne, s'assoit à côté de toi.",
    turns: [
      { p: "안녕하세요! 저는 민지예요.", en: "Hello! I'm Minji.", fr: "Bonjour ! Je suis Minji." },
      { y: ["안녕하세요! 저는 알렉스예요.", "안녕히 가세요! 저는 알렉스예요.", "안녕하세요! 저는 알렉스이에요."], en: "Hello! I'm Alex.", fr: "Bonjour ! Je suis Alex.", why: "안녕하세요 to say hello; 알렉스 ends with a vowel, so 예요.", why_fr: "안녕하세요 pour dire bonjour ; 알렉스 finit par une voyelle, donc 예요." },
      { p: "만나서 반가워요. 알렉스 씨는 미국 사람이에요?", en: "Nice to meet you. Are you American, Alex?", fr: "Ça me fait plaisir de te rencontrer. Alex, tu viens des États-Unis ?" },
      { y: ["아니요, 저는 프랑스 사람이에요.", "아니요, 저는 프랑스 사람예요.", "네, 저는 프랑스 사람이에요."], en: "No, I'm French.", fr: "Non, je viens de France.", why: "아니요 = no; 사람 ends with a consonant, so 이에요.", why_fr: "아니요 = non ; 사람 finit par une consonne, donc 이에요." },
      { p: "아, 프랑스 사람이에요! 한국어를 정말 잘해요!", en: "Oh, you're French! You speak Korean really well!", fr: "Ah, tu viens de France ! Tu parles vraiment bien coréen !" },
      { y: ["아니에요. 감사합니다!", "죄송합니다. 감사합니다!", "안녕히 가세요. 감사합니다!"], en: "Not at all. Thank you!", fr: "Pas du tout. Merci !", why: "A compliment is usually answered modestly: 아니에요 (not at all), then thank you.", why_fr: "On répond souvent à un compliment avec modestie : 아니에요 (pas du tout), puis merci." },
      { p: "저는 이제 가요. 다음 주에 또 만나요!", en: "I'm going now. See you again next week!", fr: "Je m'en vais maintenant. On se revoit la semaine prochaine !" },
      { y: ["네, 안녕히 가세요, 민지 씨!", "네, 안녕히 계세요, 민지 씨!", "네, 안녕하세요, 민지 씨!"], en: "Yes, goodbye, Minji!", fr: "Oui, au revoir, Minji !", why: "Minji leaves and you stay: 안녕히 가세요 (go in peace).", why_fr: "Minji part et tu restes : 안녕히 가세요 (va en paix)." }
    ] },
  { id: "kocafe-busan", lesson: 3, level: "A1", icon: "coffee", partner: "Junho", role: "a barista in a café", role_fr: "un barista dans un café",
    title: "Ordering in a café", title_fr: "Commander dans un café",
    setting: "You walk into a small café in Busan. Junho, the barista, greets you.", setting_fr: "Tu entres dans un petit café à Busan. Junho, le barista, t'accueille.",
    turns: [
      { p: "어서 오세요!", en: "Welcome!", fr: "Bienvenue !" },
      { y: ["안녕하세요! 커피 주세요.", "안녕히 계세요! 커피 주세요.", "안녕하세요! 커피 감사합니다."], en: "Hello! A coffee, please.", fr: "Bonjour ! Un café, s'il vous plaît.", why: "Say hello, then what you want + 주세요.", why_fr: "Dis bonjour, puis ce que tu veux + 주세요." },
      { p: "네. 아메리카노요? 라테요?", en: "Sure. An americano? A latte?", fr: "Bien sûr. Un americano ? Un latte ?" },
      { y: ["라테 주세요.", "라테 감사합니다.", "라테 아니요."], en: "A latte, please.", fr: "Un latte, s'il vous plaît.", why: "주세요 again: 라테 주세요.", why_fr: "Encore 주세요 : 라테 주세요." },
      { p: "우유 라테요? 두유 라테요?", en: "With milk, or with soy milk?", fr: "Au lait, ou au lait de soja ?" },
      { y: ["우유 라테 주세요.", "우유 라테 계세요.", "우유 라테 가세요."], en: "With milk, please.", fr: "Au lait, s'il vous plaît.", why: "계세요 and 가세요 are only for goodbye; to ask for something, 주세요.", why_fr: "계세요 et 가세요 servent seulement à dire au revoir ; pour demander quelque chose, 주세요." },
      { p: "잠깐만요… 여기 있어요!", en: "Just a moment… Here you are!", fr: "Un instant… Voilà !" },
      { y: ["감사합니다! 안녕히 계세요!", "감사합니다! 안녕히 가세요!", "죄송합니다! 안녕히 계세요!"], en: "Thank you! Goodbye!", fr: "Merci ! Au revoir !", why: "You leave the café and Junho stays: 안녕히 계세요.", why_fr: "Tu quittes le café et Junho reste : 안녕히 계세요." }
    ] }
  );

  W.READINGS.push({
    id: "minjiseoul", level: "A1", icon: "user-round", title: "안녕하세요, 저는 민지예요!", genre: "Personal story",
    intro: "Minji introduces herself and her friends from the language exchange. 저는 … 예요 / 이에요, countries and languages.",
    intro_fr: "Minji se présente, puis présente ses amis de l'échange linguistique. 저는 … 예요 / 이에요, les pays et les langues.",
    paragraphs: [
      { ko: "안녕하세요! 저는 민지예요. 한국 사람이에요. 서울에 살아요. 저는 대학생이에요.", en: "Hello! I'm Minji. I'm Korean. I live in Seoul. I'm a university student.", fr: "Bonjour ! Je suis Minji. Je suis coréenne. J'habite à Séoul. Je suis étudiante à l'université." },
      { ko: "이 사람은 알렉스 씨예요. 알렉스 씨는 프랑스 사람이에요. 서울에서 한국어를 공부해요.", en: "This is Alex. Alex is French. He studies Korean in Seoul.", fr: "Voici Alex. Alex est français. Il étudie le coréen à Séoul." },
      { ko: "그리고 이 사람은 에밀리 씨예요. 에밀리 씨는 캐나다 사람이에요. 영어하고 프랑스어를 해요.", en: "And this is Emily. Emily is Canadian. She speaks English and French.", fr: "Et voici Emily. Emily est canadienne. Elle parle anglais et français." },
      { ko: "우리는 카페에서 만나요. 저는 커피를 마셔요. 알렉스 씨하고 에밀리 씨는 우유를 마셔요. 우리는 한국어, 영어, 프랑스어로 이야기해요. 정말 재미있어요!", en: "We meet at a café. I drink coffee. Alex and Emily drink milk. We talk in Korean, English and French. It's really fun!", fr: "On se retrouve dans un café. Moi, je bois du café. Alex et Emily boivent du lait. On parle en coréen, en anglais et en français. C'est vraiment amusant !" }
    ],
    glossary: { "서울에": ["in Seoul", "à Séoul"], "살아요": ["I live", "j'habite"], "대학생이에요": ["I'm a university student", "je suis étudiante à l'université"], "이": ["this", "ce, cette"], "사람은": ["person (topic)", "personne (thème)"], "공부해요": ["studies", "étudie"], "그리고": ["and (between sentences)", "et (entre deux phrases)"], "영어하고": ["English and", "anglais et"], "우리는": ["we", "nous, on"], "카페에서": ["at a café", "dans un café"], "만나요": ["meet", "se retrouver"], "이야기해요": ["talk", "parler, discuter"], "재미있어요": ["it's fun", "c'est amusant"] },
    questions: [
      { q: "민지 씨는 어느 나라 사람이에요?", o: ["한국 사람", "프랑스 사람", "캐나다 사람"], a: 0 },
      { q: "알렉스 씨는 뭐를 공부해요?", o: ["한국어", "영어", "프랑스어"], a: 0 },
      { q: "에밀리 씨는 어느 나라 사람이에요?", o: ["캐나다 사람", "미국 사람", "영국 사람"], a: 0 },
      { q: "에밀리 씨는 뭐를 마셔요?", o: ["우유", "커피", "물"], a: 0 },
      { q: "세 사람은 어디에서 만나요?", o: ["카페에서", "학교에서", "회사에서"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-ko-a1-1", unit: "a1-1", level: "A1", icon: "school",
    title: "어학당에서", title_fr: "À l'institut de langue",
    context: "Lucas arrives at a Korean language institute in Seoul. Sujin, at the reception desk, welcomes him.", context_fr: "Lucas arrive dans un institut de langue coréenne à Séoul. Sujin, à l'accueil, le reçoit.",
    words: [["어서 오세요", "welcome", "bienvenue"], ["수업", "class, lesson", "cours"], ["여기", "here", "ici"], ["써 주세요", "please write", "écrivez, s'il vous plaît"], ["교실", "classroom", "salle de classe"], ["층", "floor (of a building)", "étage"]],
    lines: [["Sujin", "안녕하세요! 어서 오세요.", "ko-KR"], ["Lucas", "안녕하세요! 저는 루카스예요. 한국어 수업 학생이에요.", "ko-KR"], ["Sujin", "아, 루카스 씨! 반갑습니다. 프랑스 사람이에요?", "ko-KR"], ["Lucas", "아니요, 벨기에 사람이에요.", "ko-KR"], ["Sujin", "아, 벨기에요! 여기 이름을 써 주세요.", "ko-KR"], ["Lucas", "네. 여기 있어요.", "ko-KR"], ["Sujin", "감사합니다. 교실은 삼 층이에요. 선생님은 박지영 선생님이에요.", "ko-KR"], ["Lucas", "삼 층이요? 네, 감사합니다!", "ko-KR"], ["Sujin", "네, 안녕히 가세요!", "ko-KR"], ["Lucas", "안녕히 계세요!", "ko-KR"]],
    gist: ["루카스 씨는 왜 여기에 와요?", ["한국어 수업이 있어요.", "커피를 마셔요.", "친구를 만나요."]],
    detail: [["루카스 씨는 어느 나라 사람이에요?", ["벨기에 사람", "프랑스 사람", "캐나다 사람"]], ["교실은 몇 층이에요?", ["삼 층", "사 층", "이 층"]], ["선생님은 누구예요?", ["박지영 선생님", "김민지 선생님", "이수진 선생님"]], ["마지막에 루카스 씨는 뭐라고 해요?", ["안녕히 계세요", "안녕히 가세요", "안녕하세요"]]],
    decode: ["저는 루카스예요.", "교실은 삼 층이에요."],
    tip: "가세요 or 계세요? Listen for who leaves: Lucas leaves, so Sujin says 안녕히 가세요, and Lucas says 안녕히 계세요.", tip_fr: "가세요 ou 계세요 ? Repère qui s'en va : Lucas part, donc Sujin dit 안녕히 가세요, et Lucas dit 안녕히 계세요."
  }]);

  W.PROMPTS.push({ id: "ko-a1-1", level: "A1", q: "자기소개를 해 보세요: 이름, 나라, 언어.", en: "Introduce yourself: your name, your country and the languages you speak.", fr: "Présente-toi : ton prénom, ton pays et les langues que tu parles.", time: 45,
    phrases: ["안녕하세요!", "저는 …예요 / 이에요.", "… 사람이에요.", "…를 해요.", "만나서 반가워요."],
    model: "안녕하세요! 저는 카미유예요. 프랑스 사람이에요. 프랑스어하고 영어를 해요. 지금 한국어를 공부해요. 만나서 반가워요!" });

  W.WRITING_GUIDE["a1-1"] = { genre: "A short message to introduce yourself", genre_fr: "Un court message pour te présenter",
    plan: [["Say hello to everyone.", "Salue tout le monde."], ["Your name and your nationality.", "Ton prénom et ta nationalité."], ["The languages you speak, and that you study Korean.", "Les langues que tu parles, et que tu étudies le coréen."], ["A friendly ending.", "Une fin chaleureuse."]],
    marks: [["안녕하세요!", "hello to everyone", "bonjour à tout le monde"], ["저는 카미유예요", "예요 after a vowel", "예요 après une voyelle"], ["벨기에 사람이에요", "이에요 after a consonant", "이에요 après une consonne"], ["한국어를 공부해요", "I study Korean", "j'étudie le coréen"], ["만나서 반가워요", "nice to meet you", "ça me fait plaisir de vous rencontrer"], ["잘 부탁드려요", "a friendly ending: I'm glad to be with you", "une fin amicale : je compte sur vous"]] };

  W.COURSE.push({ id: "a1-1", level: "A1", icon: "hand", title: "Hello, Hangul!", title_fr: "Bonjour, hangeul !",
    intro: "Welcome to Korean! In this first unit, you'll learn the polite phrases of every day (hello, goodbye, thank you, sorry), how to say who you are and where you're from, and how to read and write Hangul: its blocks, its vowels and its consonants.",
    intro_fr: "Bienvenue en coréen ! Dans cette première unité, tu vas apprendre les formules polies de tous les jours (bonjour, au revoir, merci, pardon), à dire qui tu es et d'où tu viens, et à lire et écrire le hangeul : ses blocs, ses voyelles et ses consonnes.",
    can: ["Greet people and say goodbye the right way", "Say your name and your nationality with 예요 / 이에요", "Read and write the vowels and the basic consonants of Hangul", "Read simple words and words borrowed from English"],
    can_fr: ["Saluer et dire au revoir de la bonne façon", "Dire ton prénom et ta nationalité avec 예요 / 이에요", "Lire et écrire les voyelles et les consonnes de base du hangeul", "Lire des mots simples et des mots venus de l'anglais"],
    lessons: [1, 2, 3], vocab: ["essentielsKO", "premiersmotsKO", "paysKO"], reading: "minjiseoul", prompt: "ko-a1-1",
    writing: { task: "Write a short message (15-30 words) on your Korean class forum to introduce yourself: your name, your nationality and the languages you speak.", task_fr: "Écris un court message (15 à 30 mots) sur le forum de ton cours de coréen pour te présenter : ton prénom, ta nationalité et les langues que tu parles.", words: "15-30",
      tips: ["안녕하세요!", "저는 …예요 / 이에요.", "… 사람이에요.", "한국어를 공부해요.", "잘 부탁드려요!"],
      checklist: ["I used 예요 after a vowel and 이에요 after a consonant", "I didn't put 씨 after my own name", "I said hello at the start and wrote a friendly ending", "Each syllable is one block of Hangul", "I stayed between 15 and 30 words"],
      checklist_fr: ["J'ai mis 예요 après une voyelle et 이에요 après une consonne", "Je n'ai pas mis 씨 après mon propre prénom", "J'ai salué au début et écrit une fin chaleureuse", "Chaque syllabe forme un bloc de hangeul", "J'ai écrit entre 15 et 30 mots"],
      model: "안녕하세요!\n\n저는 카미유예요. 벨기에 사람이에요. 프랑스어하고 영어를 해요. 지금 한국어를 공부해요. 한국어는 정말 재미있어요!\n\n만나서 반가워요. 잘 부탁드려요!\n카미유" } });
})();
