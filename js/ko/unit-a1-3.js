/* Cours de coréen, unité A1-3 « Where is it? / Où est-ce ? » : 있어요 / 없어요 (il y a, avoir), 에 pour le lieu, les
   mots de position (위, 밑, 옆, 사이…), les nombres coréens de 1 à 99, les classificateurs (개, 명, 잔, 병, 권, 마리,
   장, 살) et l'âge, puis la famille (형, 오빠, 누나, 언니 selon qui parle, 우리 엄마).
   Explications et traductions en anglais ET en français (js/ko/localize.js garde celles de l'interface).
   Personnages fictifs, prénoms coréens. Faits vérifiables seulement : les nombres coréens s'arrêtent à 99, 하나 → 한
   (둘 → 두, 셋 → 세, 넷 → 네, 스물 → 스무) devant un classificateur, l'âge international adopté dans la loi et les
   documents officiels en juin 2023 (l'ancien « âge coréen » comptait un an à la naissance et ajoutait un an au
   1er janvier), 우리 pour sa famille et son pays, les termes de parenté employés entre amis, l'eau souvent en
   libre-service (셀프) dans les restaurants. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "lieuxKO", icon: "building-2", title: "Places in town", title_fr: "Les lieux de la ville", level: "A1", words: [
    ["학교", "school", "école", "학교가 어디에 있어요?"],
    ["은행", "bank", "banque", "은행은 우체국 옆에 있어요."],
    ["병원", "hospital", "hôpital", "병원이 근처에 있어요?"],
    ["약국", "pharmacy", "pharmacie", "약국은 병원 앞에 있어요."],
    ["편의점", "convenience store", "supérette", "편의점이 어디에 있어요?"],
    ["식당", "restaurant", "restaurant", "이 식당은 비빔밥이 맛있어요."],
    ["시장", "market", "marché", "시장에 사람이 많아요."],
    ["우체국", "post office", "bureau de poste", "우체국은 은행 옆에 있어요."],
    ["도서관", "library", "bibliothèque", "도서관에 책이 많이 있어요."],
    ["공원", "park", "parc", "공원에 고양이가 있어요."],
    ["역", "station", "gare, station", "역이 어디에 있어요?"],
    ["지하철역", "subway station", "station de métro", "지하철역은 저기에 있어요."],
    ["백화점", "department store", "grand magasin", "백화점 안에 식당이 있어요."],
    ["마트", "supermarket", "supermarché", "마트는 집 근처에 있어요."],
    ["회사", "company, office", "entreprise, bureau", "회사가 서울에 있어요."],
    ["카페", "café", "café (l'endroit)", "카페는 이 층에 있어요."],
    ["호텔", "hotel", "hôtel", "호텔 앞에 버스가 있어요."],
    ["대사관", "embassy", "ambassade", "프랑스 대사관이 어디에 있어요?"]
  ] },
  { id: "positionsKO", icon: "map-pin", title: "Where? Position words", title_fr: "Où ? Les mots de position", level: "A1", words: [
    ["있다", "to be (somewhere); to have", "être (quelque part), il y a ; avoir", "화장실이 어디에 있어요?"],
    ["없다", "to not be (somewhere); to not have", "ne pas être (quelque part), il n'y a pas ; ne pas avoir", "시간이 없어요."],
    ["위", "top; on, above", "le dessus ; sur, au-dessus", "책상 위에 책이 있어요."],
    ["아래", "below, under", "en dessous, sous", "창문 아래에 의자가 있어요."],
    ["밑", "under, bottom", "dessous, sous", "고양이가 의자 밑에 있어요."],
    ["뒤", "back; behind", "l'arrière ; derrière", "학교 뒤에 공원이 있어요."],
    ["옆", "side; next to", "le côté ; à côté de", "은행 옆에 약국이 있어요."],
    ["사이", "between", "entre", "은행하고 병원 사이에 있어요."],
    ["오른쪽", "the right", "la droite", "화장실은 오른쪽에 있어요."],
    ["왼쪽", "the left", "la gauche", "역은 왼쪽에 있어요."],
    ["근처", "nearby, the neighbourhood", "les environs, près de", "근처에 편의점이 있어요?"],
    ["건너편", "the other side, across", "en face, de l'autre côté", "은행 건너편에 있어요."],
    ["시간", "time; hour", "temps ; heure", "시간 있어요?"],
    ["침대", "bed", "lit", "침대 위에 고양이가 있어요."],
    ["냉장고", "fridge", "réfrigérateur", "물은 냉장고 안에 있어요."],
    ["텔레비전", "television", "télévision", "방에 텔레비전이 없어요."],
    ["고양이", "cat", "chat", "고양이가 침대 밑에 있어요."],
    ["사진", "photo", "photo", "이건 우리 가족 사진이에요."]
  ] },
  { id: "comptageKO", icon: "list-ordered", title: "Counting: native numbers and counters", title_fr: "Compter : nombres coréens et classificateurs", level: "A1", words: [
    ["하나", "one (native)", "un (nombre coréen)", "하나, 둘, 셋!"],
    ["둘", "two (native)", "deux (nombre coréen)", "아이가 둘 있어요."],
    ["셋", "three (native)", "trois (nombre coréen)", "하나, 둘, 셋!"],
    ["넷", "four (native)", "quatre (nombre coréen)", "우리는 넷이에요."],
    ["다섯", "five (native)", "cinq (nombre coréen)", "학생이 다섯 명 있어요."],
    ["여섯", "six (native)", "six (nombre coréen)", "사과 여섯 개 주세요."],
    ["일곱", "seven (native)", "sept (nombre coréen)", "일곱 살이에요."],
    ["여덟", "eight (native)", "huit (nombre coréen)", "여덟 명이에요."],
    ["아홉", "nine (native)", "neuf (nombre coréen)", "아홉 시예요."],
    ["열", "ten (native)", "dix (nombre coréen)", "열 명 있어요."],
    ["스물", "twenty (native); 스무 before a counter", "vingt (nombre coréen) ; 스무 devant un classificateur", "스무 살이에요."],
    ["서른", "thirty (native)", "trente (nombre coréen)", "서른 살이에요."],
    ["개", "(counter for things)", "(classificateur des objets)", "사과 세 개 주세요."],
    ["명", "(counter for people)", "(classificateur des personnes)", "학생이 몇 명 있어요?"],
    ["잔", "cup, glass (counter)", "tasse, verre (classificateur)", "커피 두 잔 주세요."],
    ["병", "bottle (counter)", "bouteille (classificateur)", "물 한 병 주세요."],
    ["권", "(counter for books)", "(classificateur des livres)", "책 두 권이 있어요."],
    ["마리", "(counter for animals)", "(classificateur des animaux)", "고양이 한 마리가 있어요."],
    ["장", "sheet (counter for paper, tickets, photos)", "feuille (classificateur du papier, des billets, des photos)", "표 두 장 주세요."],
    ["살", "year of age", "an (pour l'âge)", "몇 살이에요?"]
  ] },
  { id: "familleKO", icon: "users", title: "Family", title_fr: "La famille", level: "A1", words: [
    ["가족", "family", "famille", "가족이 몇 명이에요?"],
    ["엄마", "mum", "maman", "우리 엄마는 선생님이에요."],
    ["아빠", "dad", "papa", "우리 아빠는 회사원이에요."],
    ["부모님", "parents", "parents", "부모님은 부산에 사세요."],
    ["형", "older brother (said by a man); an older male friend", "grand frère (pour un homme) ; un ami plus âgé", "형이 한 명 있어요."],
    ["오빠", "older brother (said by a woman); an older male friend", "grand frère (pour une femme) ; un ami plus âgé", "오빠는 대학생이에요."],
    ["누나", "older sister (said by a man); an older female friend", "grande sœur (pour un homme) ; une amie plus âgée", "누나는 미국에 살아요."],
    ["언니", "older sister (said by a woman); an older female friend", "grande sœur (pour une femme) ; une amie plus âgée", "언니가 두 명 있어요."],
    ["동생", "younger brother or sister", "petit frère, petite sœur", "동생이 있어요?"],
    ["남동생", "younger brother", "petit frère", "남동생은 열일곱 살이에요."],
    ["여동생", "younger sister", "petite sœur", "이 사람은 제 여동생이에요."],
    ["할아버지", "grandfather", "grand-père", "할아버지는 일흔 살이세요."],
    ["할머니", "grandmother", "grand-mère", "우리 할머니는 부산에 사세요."],
    ["남편", "husband", "mari", "제 남편은 한국 사람이에요."],
    ["아내", "wife", "femme, épouse", "제 아내는 프랑스 사람이에요."],
    ["아들", "son", "fils", "아들이 한 명 있어요."],
    ["딸", "daughter", "fille (l'enfant)", "딸이 두 명 있어요."],
    ["형제", "brothers and sisters, siblings", "frères et sœurs", "형제가 있어요?"],
    ["외동", "only child", "enfant unique", "아니요, 저는 외동이에요."]
  ] });

  W.LESSONS.push(
  {
    id: 7, level: "A1", icon: "map-pin",
    title: "Where is it? 있어요 and 없어요", title_fr: "Où est-ce ? 있어요 et 없어요",
    subtitle: "Say that something is there or not, that you have something or not, and where it is.", subtitle_fr: "Dire qu'une chose est là ou non, que tu as quelque chose ou non, et où elle se trouve.",
    body: `
<h2>있어요: there is, I have</h2>
<p><s-ko>있어요</s-ko> means two things: something is there, or someone has something. The thing takes <s-ko>이</s-ko> after a consonant, <s-ko>가</s-ko> after a vowel: <s-ko>화장실이 있어요.</s-ko> (There's a toilet.) · <s-ko>우산이 있어요.</s-ko> (I have an umbrella.) · <s-ko>시간 있어요?</s-ko> (Do you have time?)</p>
<p>The opposite is <s-ko>없어요</s-ko> [업써요]: there isn't, I don't have. <s-ko>돈이 없어요.</s-ko> (I have no money.) · <s-ko>시간이 없어요.</s-ko> (I don't have time.)</p>
<h2>Where is it? 에 있어요</h2>
<p>To say where something is, add <s-ko>에</s-ko> to the place: <s-ko>화장실이 어디에 있어요?</s-ko> (Where's the toilet?) — <s-ko>저기에 있어요.</s-ko> (It's over there.) · <s-ko>민지 씨는 학교에 있어요.</s-ko> (Minji is at school.)</p>
<h2>On, under, next to: the position words</h2>
<p>Korean says "the desk's top" rather than "on the desk": first the place, then the position word, then <s-ko>에</s-ko>. <s-ko>책상 위에</s-ko> (on the desk) · <s-ko>의자 밑에</s-ko> (under the chair) · <s-ko>은행 옆에</s-ko> (next to the bank).</p>
<table>
<tr><th>Korean</th><th>Meaning</th></tr>
<tr><td><s-ko>위</s-ko></td><td>on, above</td></tr>
<tr><td><s-ko>아래</s-ko> · <s-ko>밑</s-ko></td><td>under, below</td></tr>
<tr><td><s-ko>앞</s-ko> · <s-ko>뒤</s-ko></td><td>in front of · behind</td></tr>
<tr><td><s-ko>옆</s-ko></td><td>next to</td></tr>
<tr><td><s-ko>안</s-ko> · <s-ko>밖</s-ko></td><td>in · outside</td></tr>
<tr><td><s-ko>사이</s-ko></td><td>between: A<s-ko>하고</s-ko> B <s-ko>사이에</s-ko></td></tr>
<tr><td><s-ko>근처</s-ko> · <s-ko>건너편</s-ko></td><td>near · across from</td></tr>
</table>
<p><s-ko>고양이가 침대 위에 있어요.</s-ko> (The cat is on the bed.) · <s-ko>약국은 병원하고 은행 사이에 있어요.</s-ko> (The pharmacy is between the hospital and the bank.)</p>
<div class="tip">은 / 는 or 이 / 가? With 있어요, something you mention for the first time takes 이 / 가: <s-ko>책상 위에 책이 있어요.</s-ko> (There's a book on the desk.) Something you're already talking about becomes the topic, with 은 / 는: <s-ko>책은 책상 위에 있어요.</s-ko> (The book is on the desk.)</div>
`,
    body_fr: `
<h2>있어요 : il y a, j'ai</h2>
<p><s-ko>있어요</s-ko> veut dire deux choses : une chose est là, ou quelqu'un a quelque chose. La chose prend <s-ko>이</s-ko> après une consonne, <s-ko>가</s-ko> après une voyelle : <s-ko>화장실이 있어요.</s-ko> (Il y a des toilettes.) · <s-ko>우산이 있어요.</s-ko> (J'ai un parapluie.) · <s-ko>시간 있어요?</s-ko> (Tu as le temps ?)</p>
<p>Le contraire, c'est <s-ko>없어요</s-ko> [업써요] : il n'y a pas, je n'ai pas. <s-ko>돈이 없어요.</s-ko> (Je n'ai pas d'argent.) · <s-ko>시간이 없어요.</s-ko> (Je n'ai pas le temps.)</p>
<h2>Où est-ce ? 에 있어요</h2>
<p>Pour dire où se trouve une chose, ajoute <s-ko>에</s-ko> au lieu : <s-ko>화장실이 어디에 있어요?</s-ko> (Où sont les toilettes ?) — <s-ko>저기에 있어요.</s-ko> (C'est là-bas.) · <s-ko>민지 씨는 학교에 있어요.</s-ko> (Minji est à l'école.)</p>
<h2>Sur, sous, à côté : les mots de position</h2>
<p>Le coréen dit « le dessus du bureau » plutôt que « sur le bureau » : d'abord le lieu, puis le mot de position, puis <s-ko>에</s-ko>. <s-ko>책상 위에</s-ko> (sur le bureau) · <s-ko>의자 밑에</s-ko> (sous la chaise) · <s-ko>은행 옆에</s-ko> (à côté de la banque).</p>
<table>
<tr><th>Coréen</th><th>Sens</th></tr>
<tr><td><s-ko>위</s-ko></td><td>sur, au-dessus</td></tr>
<tr><td><s-ko>아래</s-ko> · <s-ko>밑</s-ko></td><td>sous, en dessous</td></tr>
<tr><td><s-ko>앞</s-ko> · <s-ko>뒤</s-ko></td><td>devant · derrière</td></tr>
<tr><td><s-ko>옆</s-ko></td><td>à côté de</td></tr>
<tr><td><s-ko>안</s-ko> · <s-ko>밖</s-ko></td><td>dans · dehors</td></tr>
<tr><td><s-ko>사이</s-ko></td><td>entre : A<s-ko>하고</s-ko> B <s-ko>사이에</s-ko></td></tr>
<tr><td><s-ko>근처</s-ko> · <s-ko>건너편</s-ko></td><td>près de · en face de</td></tr>
</table>
<p><s-ko>고양이가 침대 위에 있어요.</s-ko> (Le chat est sur le lit.) · <s-ko>약국은 병원하고 은행 사이에 있어요.</s-ko> (La pharmacie est entre l'hôpital et la banque.)</p>
<div class="tip">은 / 는 ou 이 / 가 ? Avec 있어요, une chose dont tu parles pour la première fois prend 이 / 가 : <s-ko>책상 위에 책이 있어요.</s-ko> (Il y a un livre sur le bureau.) Une chose dont tu parles déjà devient le thème, avec 은 / 는 : <s-ko>책은 책상 위에 있어요.</s-ko> (Le livre est sur le bureau.)</div>
`,
    examples: [
      ["화장실이 어디에 있어요?", "Where's the toilet?", "Où sont les toilettes ?"],
      ["저기에 있어요.", "It's over there.", "C'est là-bas."],
      ["시간 있어요?", "Do you have time?", "Tu as le temps ?"],
      ["고양이가 침대 위에 있어요.", "The cat is on the bed.", "Le chat est sur le lit."],
      ["약국은 병원 옆에 있어요.", "The pharmacy is next to the hospital.", "La pharmacie est à côté de l'hôpital."],
      ["돈이 없어요.", "I have no money.", "Je n'ai pas d'argent."],
      ["가방 안에 뭐가 있어요?", "What's in the bag?", "Qu'est-ce qu'il y a dans le sac ?"]
    ],
    quiz: [
      { q: "Complete: 우산___ 있어요.", q_fr: "Complète : 우산___ 있어요.", o: ["이", "가", "를"], a: 0, ex: "우산 ends with a consonant (ㄴ): 이.", ex_fr: "우산 se termine par une consonne (ㄴ) : 이." },
      { q: "How do you say: I don't have time.", q_fr: "Comment dit-on : Je n'ai pas le temps.", o: ["시간이 없어요.", "시간이 아니에요.", "시간이 있어요."], a: 0, ex: "없어요: there isn't, I don't have. 아니에요 means it isn't.", ex_fr: "없어요 : il n'y a pas, je n'ai pas. 아니에요 veut dire ce n'est pas." },
      { q: "책상 밑에 means…", q_fr: "책상 밑에 veut dire…", o: ["under the desk", "on the desk", "next to the desk"], o_fr: ["sous le bureau", "sur le bureau", "à côté du bureau"], a: 0, ex: "밑 = under; 위 = on; 옆 = next to.", ex_fr: "밑 = sous ; 위 = sur ; 옆 = à côté." },
      { q: "The bank is next to the post office:", q_fr: "La banque est à côté du bureau de poste :", o: ["은행은 우체국 옆에 있어요.", "은행은 옆에 우체국 있어요.", "은행은 우체국 옆이 있어요."], a: 0, ex: "Place + position word + 에: 우체국 옆에.", ex_fr: "Lieu + mot de position + 에 : 우체국 옆에." },
      { q: "있어요 can mean…", q_fr: "있어요 peut vouloir dire…", o: ["there is, and I have", "it is (= 이에요)", "I'm going"], o_fr: ["il y a, et j'ai", "c'est (= 이에요)", "je vais"], a: 0, ex: "있어요: something is there, or someone has it.", ex_fr: "있어요 : une chose est là, ou quelqu'un l'a." }
    ]
  },
  {
    id: 8, level: "A1", icon: "list-ordered",
    title: "Counting things: native numbers and counters", title_fr: "Compter les choses : les nombres coréens et les classificateurs",
    subtitle: "Count from one to ninety-nine the Korean way, use counters, and say your age.", subtitle_fr: "Compter de un à quatre-vingt-dix-neuf à la coréenne, utiliser les classificateurs et dire ton âge.",
    body: `
<h2>The native Korean numbers</h2>
<table>
<tr><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>
<tr><td><s-ko>하나</s-ko></td><td><s-ko>둘</s-ko></td><td><s-ko>셋</s-ko></td><td><s-ko>넷</s-ko></td><td><s-ko>다섯</s-ko></td></tr>
<tr><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th></tr>
<tr><td><s-ko>여섯</s-ko></td><td><s-ko>일곱</s-ko></td><td><s-ko>여덟</s-ko></td><td><s-ko>아홉</s-ko></td><td><s-ko>열</s-ko></td></tr>
</table>
<p>The tens have their own names: <s-ko>스물</s-ko> (20), <s-ko>서른</s-ko> (30), <s-ko>마흔</s-ko> (40), <s-ko>쉰</s-ko> (50), <s-ko>예순</s-ko> (60), <s-ko>일흔</s-ko> (70), <s-ko>여든</s-ko> (80), <s-ko>아흔</s-ko> (90). Then add the units: 12 = <s-ko>열둘</s-ko> · 25 = <s-ko>스물다섯</s-ko> · 49 = <s-ko>마흔아홉</s-ko>. The native numbers stop at 99: from 100, you use the Sino-Korean numbers.</p>
<h2>Counters: two cups, three people</h2>
<p>To count things, Korean puts a counter after the number, a little like "two cups of" or "three sheets of". The order is noun + number + counter: <s-ko>커피 두 잔</s-ko> (two coffees) · <s-ko>사과 세 개</s-ko> (three apples) · <s-ko>학생 다섯 명</s-ko> (five students).</p>
<p>Before a counter, five numbers get shorter: 하나 → <s-ko>한</s-ko>, 둘 → <s-ko>두</s-ko>, 셋 → <s-ko>세</s-ko>, 넷 → <s-ko>네</s-ko>, 스물 → <s-ko>스무</s-ko>. So: <s-ko>한 개</s-ko>, <s-ko>두 명</s-ko>, <s-ko>스무 살</s-ko>.</p>
<table>
<tr><th>Counter</th><th>For</th><th>Example</th></tr>
<tr><td><s-ko>개</s-ko></td><td>things, in general</td><td><s-ko>사과 한 개</s-ko></td></tr>
<tr><td><s-ko>명</s-ko></td><td>people (<s-ko>분</s-ko>, more polite)</td><td><s-ko>학생 두 명</s-ko></td></tr>
<tr><td><s-ko>잔</s-ko> · <s-ko>병</s-ko></td><td>cups, glasses · bottles</td><td><s-ko>물 한 병</s-ko></td></tr>
<tr><td><s-ko>권</s-ko></td><td>books, notebooks</td><td><s-ko>책 세 권</s-ko></td></tr>
<tr><td><s-ko>마리</s-ko></td><td>animals</td><td><s-ko>고양이 한 마리</s-ko></td></tr>
<tr><td><s-ko>장</s-ko></td><td>sheets: paper, tickets, photos</td><td><s-ko>표 두 장</s-ko></td></tr>
<tr><td><s-ko>살</s-ko></td><td>years of age</td><td><s-ko>스무 살</s-ko></td></tr>
</table>
<h2>How old are you?</h2>
<p><s-ko>몇 살이에요?</s-ko> (How old are you?) — <s-ko>스물다섯 살이에요.</s-ko> (I'm twenty-five.) To an older person, it's more polite to ask <s-ko>연세가 어떻게 되세요?</s-ko></p>
<div class="tip">You may have heard of the "Korean age", in which you were one at birth and everyone turned a year older on 1 January. Since June 2023, South Korea uses the international age in its laws and official documents. Some people still mention the old count in conversation: don't be surprised if you hear two ages for the same person!</div>
`,
    body_fr: `
<h2>Les nombres coréens</h2>
<table>
<tr><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>
<tr><td><s-ko>하나</s-ko></td><td><s-ko>둘</s-ko></td><td><s-ko>셋</s-ko></td><td><s-ko>넷</s-ko></td><td><s-ko>다섯</s-ko></td></tr>
<tr><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th></tr>
<tr><td><s-ko>여섯</s-ko></td><td><s-ko>일곱</s-ko></td><td><s-ko>여덟</s-ko></td><td><s-ko>아홉</s-ko></td><td><s-ko>열</s-ko></td></tr>
</table>
<p>Les dizaines ont leur propre nom : <s-ko>스물</s-ko> (20), <s-ko>서른</s-ko> (30), <s-ko>마흔</s-ko> (40), <s-ko>쉰</s-ko> (50), <s-ko>예순</s-ko> (60), <s-ko>일흔</s-ko> (70), <s-ko>여든</s-ko> (80), <s-ko>아흔</s-ko> (90). On ajoute ensuite les unités : 12 = <s-ko>열둘</s-ko> · 25 = <s-ko>스물다섯</s-ko> · 49 = <s-ko>마흔아홉</s-ko>. Les nombres coréens s'arrêtent à 99 : à partir de 100, on utilise les nombres sino-coréens.</p>
<h2>Les classificateurs : deux tasses, trois personnes</h2>
<p>Pour compter des choses, le coréen place un classificateur après le nombre, un peu comme « deux tasses de » ou « trois feuilles de ». L'ordre est nom + nombre + classificateur : <s-ko>커피 두 잔</s-ko> (deux cafés) · <s-ko>사과 세 개</s-ko> (trois pommes) · <s-ko>학생 다섯 명</s-ko> (cinq élèves).</p>
<p>Devant un classificateur, cinq nombres raccourcissent : 하나 → <s-ko>한</s-ko>, 둘 → <s-ko>두</s-ko>, 셋 → <s-ko>세</s-ko>, 넷 → <s-ko>네</s-ko>, 스물 → <s-ko>스무</s-ko>. Donc : <s-ko>한 개</s-ko>, <s-ko>두 명</s-ko>, <s-ko>스무 살</s-ko>.</p>
<table>
<tr><th>Classificateur</th><th>Pour</th><th>Exemple</th></tr>
<tr><td><s-ko>개</s-ko></td><td>les objets, en général</td><td><s-ko>사과 한 개</s-ko></td></tr>
<tr><td><s-ko>명</s-ko></td><td>les personnes (<s-ko>분</s-ko>, plus poli)</td><td><s-ko>학생 두 명</s-ko></td></tr>
<tr><td><s-ko>잔</s-ko> · <s-ko>병</s-ko></td><td>les tasses, les verres · les bouteilles</td><td><s-ko>물 한 병</s-ko></td></tr>
<tr><td><s-ko>권</s-ko></td><td>les livres, les cahiers</td><td><s-ko>책 세 권</s-ko></td></tr>
<tr><td><s-ko>마리</s-ko></td><td>les animaux</td><td><s-ko>고양이 한 마리</s-ko></td></tr>
<tr><td><s-ko>장</s-ko></td><td>les feuilles : papier, billets, photos</td><td><s-ko>표 두 장</s-ko></td></tr>
<tr><td><s-ko>살</s-ko></td><td>les années d'âge</td><td><s-ko>스무 살</s-ko></td></tr>
</table>
<h2>Quel âge as-tu ?</h2>
<p><s-ko>몇 살이에요?</s-ko> (Quel âge as-tu ?) — <s-ko>스물다섯 살이에요.</s-ko> (J'ai vingt-cinq ans.) À une personne plus âgée, il est plus poli de demander <s-ko>연세가 어떻게 되세요?</s-ko></p>
<div class="tip">Tu as peut-être entendu parler de « l'âge coréen », où l'on avait un an à la naissance et où tout le monde prenait un an le 1er janvier. Depuis juin 2023, la Corée du Sud utilise l'âge international dans ses lois et ses documents officiels. Certaines personnes citent encore l'ancien compte dans la conversation : ne t'étonne pas d'entendre deux âges pour la même personne !</div>
`,
    examples: [
      ["커피 두 잔 주세요.", "Two coffees, please.", "Deux cafés, s'il vous plaît."],
      ["사과 세 개 주세요.", "Three apples, please.", "Trois pommes, s'il vous plaît."],
      ["몇 살이에요?", "How old are you?", "Quel âge as-tu ?"],
      ["스물다섯 살이에요.", "I'm twenty-five.", "J'ai vingt-cinq ans."],
      ["학생이 열 명 있어요.", "There are ten students.", "Il y a dix élèves."],
      ["고양이 한 마리가 있어요.", "I have a cat.", "J'ai un chat."],
      ["표 두 장 주세요.", "Two tickets, please.", "Deux billets, s'il vous plaît."]
    ],
    quiz: [
      { q: "Two coffees, please:", q_fr: "Deux cafés, s'il vous plaît :", o: ["커피 두 잔 주세요.", "커피 둘 잔 주세요.", "커피 이 잔 주세요."], a: 0, ex: "Native number, shortened before a counter: 두 잔.", ex_fr: "Nombre coréen, raccourci devant un classificateur : 두 잔." },
      { q: "How do you say: I'm twenty-five?", q_fr: "Comment dit-on : J'ai vingt-cinq ans ?", o: ["스물다섯 살이에요.", "이십오 살이에요.", "스무다섯 살이에요."], a: 0, ex: "Age uses native numbers. 스무 only directly before the counter: 스무 살 (20).", ex_fr: "L'âge se dit avec les nombres coréens. 스무 seulement juste devant le classificateur : 스무 살 (20)." },
      { q: "Which counter is used for people?", q_fr: "Quel classificateur sert pour les personnes ?", o: ["명", "마리", "권"], a: 0, ex: "명 people, 마리 animals, 권 books.", ex_fr: "명 les personnes, 마리 les animaux, 권 les livres." },
      { q: "책 세 권 means…", q_fr: "책 세 권 veut dire…", o: ["three books", "three bottles", "three animals"], o_fr: ["trois livres", "trois bouteilles", "trois animaux"], a: 0, ex: "권 counts books.", ex_fr: "권 compte les livres." },
      { q: "From which number do you switch to Sino-Korean numbers?", q_fr: "À partir de quel nombre passe-t-on aux nombres sino-coréens ?", o: ["100", "20", "1,000"], o_fr: ["100", "20", "1 000"], a: 0, ex: "Native numbers stop at 99 (아흔아홉).", ex_fr: "Les nombres coréens s'arrêtent à 99 (아흔아홉)." }
    ]
  },
  {
    id: 9, level: "A1", kind: "functional", icon: "users",
    title: "Everyday Korean: my family", title_fr: "Le coréen de tous les jours : ma famille",
    subtitle: "Talk about your family, brothers and sisters, and say who's who in a photo.", subtitle_fr: "Parler de ta famille, de tes frères et sœurs, et dire qui est qui sur une photo.",
    body: `
<h2>My family: 우리 가족</h2>
<p>For their family and their country, Koreans say <s-ko>우리</s-ko> (our) where English says "my": <s-ko>우리 엄마</s-ko> (my mum) · <s-ko>우리 가족</s-ko> (my family) · <s-ko>우리나라</s-ko> (my country, said by a Korean about Korea).</p>
<h2>Brothers and sisters: it depends who's speaking</h2>
<p>For older siblings, Korean has four words, and the choice depends on the person who speaks:</p>
<table>
<tr><th></th><th>older brother</th><th>older sister</th></tr>
<tr><td>a man says</td><td><s-ko>형</s-ko></td><td><s-ko>누나</s-ko></td></tr>
<tr><td>a woman says</td><td><s-ko>오빠</s-ko></td><td><s-ko>언니</s-ko></td></tr>
</table>
<p>Younger siblings are simpler: <s-ko>동생</s-ko>, or <s-ko>남동생</s-ko> (younger brother) and <s-ko>여동생</s-ko> (younger sister). These words go beyond the family: friends call an older friend <s-ko>형</s-ko>, <s-ko>오빠</s-ko>, <s-ko>누나</s-ko> or <s-ko>언니</s-ko>.</p>
<h2>Talking about your family</h2>
<p><s-ko>가족이 몇 명이에요?</s-ko> (How many are you in your family?) — <s-ko>네 명이에요.</s-ko> (There are four of us.) · <s-ko>형제가 있어요?</s-ko> (Do you have brothers or sisters?) — <s-ko>네, 여동생이 한 명 있어요.</s-ko> (Yes, I have a younger sister.) / <s-ko>아니요, 외동이에요.</s-ko> (No, I'm an only child.)</p>
<p>Mum and dad: <s-ko>엄마</s-ko> and <s-ko>아빠</s-ko> at home; <s-ko>어머니</s-ko> and <s-ko>아버지</s-ko>, more respectful; <s-ko>부모님</s-ko>, your parents, with the respectful ending <s-ko>님</s-ko>.</p>
<div class="tip">Your own family is "our" family, but you honour someone else's: you speak of a friend's mother as <s-ko>어머님</s-ko> and of their father as <s-ko>아버님</s-ko>. You'll meet more of these respectful words in A2.</div>
`,
    body_fr: `
<h2>Ma famille : 우리 가족</h2>
<p>Pour leur famille et leur pays, les Coréens disent <s-ko>우리</s-ko> (notre) là où le français dit « mon » : <s-ko>우리 엄마</s-ko> (ma mère) · <s-ko>우리 가족</s-ko> (ma famille) · <s-ko>우리나라</s-ko> (mon pays, dit par un Coréen à propos de la Corée).</p>
<h2>Frères et sœurs : ça dépend de qui parle</h2>
<p>Pour les frères et sœurs aînés, le coréen a quatre mots, et le choix dépend de la personne qui parle :</p>
<table>
<tr><th></th><th>grand frère</th><th>grande sœur</th></tr>
<tr><td>un homme dit</td><td><s-ko>형</s-ko></td><td><s-ko>누나</s-ko></td></tr>
<tr><td>une femme dit</td><td><s-ko>오빠</s-ko></td><td><s-ko>언니</s-ko></td></tr>
</table>
<p>Pour les plus jeunes, c'est plus simple : <s-ko>동생</s-ko>, ou <s-ko>남동생</s-ko> (petit frère) et <s-ko>여동생</s-ko> (petite sœur). Ces mots dépassent la famille : on appelle un ami plus âgé <s-ko>형</s-ko>, <s-ko>오빠</s-ko>, <s-ko>누나</s-ko> ou <s-ko>언니</s-ko>.</p>
<h2>Parler de sa famille</h2>
<p><s-ko>가족이 몇 명이에요?</s-ko> (Vous êtes combien dans ta famille ?) — <s-ko>네 명이에요.</s-ko> (Nous sommes quatre.) · <s-ko>형제가 있어요?</s-ko> (Tu as des frères et sœurs ?) — <s-ko>네, 여동생이 한 명 있어요.</s-ko> (Oui, j'ai une petite sœur.) / <s-ko>아니요, 외동이에요.</s-ko> (Non, je suis enfant unique.)</p>
<p>Papa et maman : <s-ko>엄마</s-ko> et <s-ko>아빠</s-ko> à la maison ; <s-ko>어머니</s-ko> et <s-ko>아버지</s-ko>, plus respectueux ; <s-ko>부모님</s-ko>, tes parents, avec la terminaison respectueuse <s-ko>님</s-ko>.</p>
<div class="tip">Ta famille est « notre » famille, mais on honore celle des autres : on parle de la mère d'un ami en disant <s-ko>어머님</s-ko>, et de son père en disant <s-ko>아버님</s-ko>. Tu rencontreras d'autres mots respectueux de ce genre en A2.</div>
`,
    examples: [
      ["가족이 몇 명이에요?", "How many are you in your family?", "Vous êtes combien dans ta famille ?"],
      ["네 명이에요. 아빠, 엄마, 남동생하고 저예요.", "There are four of us: my dad, my mum, my younger brother and me.", "Nous sommes quatre : mon père, ma mère, mon petit frère et moi."],
      ["형제가 있어요?", "Do you have brothers or sisters?", "Tu as des frères et sœurs ?"],
      ["아니요, 외동이에요.", "No, I'm an only child.", "Non, je suis enfant unique."],
      ["이 사람은 제 여동생이에요.", "This is my younger sister.", "C'est ma petite sœur."],
      ["우리 할머니는 부산에 사세요.", "My grandmother lives in Busan.", "Ma grand-mère habite à Busan."]
    ],
    quiz: [
      { q: "A woman talks about her older brother. She says:", q_fr: "Une femme parle de son grand frère. Elle dit :", o: ["오빠", "형", "누나"], a: 0, ex: "Said by a woman: 오빠 (brother), 언니 (sister).", ex_fr: "Dit par une femme : 오빠 (frère), 언니 (sœur)." },
      { q: "A man talks about his older sister. He says:", q_fr: "Un homme parle de sa grande sœur. Il dit :", o: ["누나", "언니", "오빠"], a: 0, ex: "Said by a man: 형 (brother), 누나 (sister).", ex_fr: "Dit par un homme : 형 (frère), 누나 (sœur)." },
      { q: "How do Koreans usually say “my mum”?", q_fr: "Comment dit-on le plus souvent « ma mère » en coréen ?", o: ["우리 엄마", "저 엄마", "나의 엄마"], a: 0, ex: "우리 (our) for your family; 저 엄마 would mean “that mum”.", ex_fr: "우리 (notre) pour sa famille ; 저 엄마 voudrait dire « cette maman-là »." },
      { q: "No, I'm an only child:", q_fr: "Non, je suis enfant unique :", o: ["아니요, 외동이에요.", "아니요, 동생이에요.", "아니요, 형제예요."], a: 0, ex: "외동 = only child.", ex_fr: "외동 = enfant unique." },
      { q: "You speak respectfully of a friend's mother:", q_fr: "Tu parles avec respect de la mère d'un ami :", o: ["어머님", "엄마", "우리 엄마"], a: 0, ex: "님 honours someone else's parent: 어머님.", ex_fr: "님 honore le parent de quelqu'un d'autre : 어머님." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    7: {
      gap: [["화장실이 어디에 ___?", "있어요", "where is it", "où est-ce"], ["돈이 ___.", "없어요", "I have none", "je n'en ai pas"], ["고양이가 침대 ___에 있어요.", "위", "on", "sur"], ["약국은 은행 ___에 있어요.", "옆", "next to", "à côté de"]],
      fix: [["책상 위에 책가 있어요.", "책상 위에 책이 있어요.", "책 ends with a consonant: 이.", "책 se termine par une consonne : 이."], ["위에 책상 책이 있어요.", "책상 위에 책이 있어요.", "The place comes first, then the position word: 책상 위에.", "Le lieu d'abord, puis le mot de position : 책상 위에."]],
      task: ["Describe your room in four sentences: what there is, and where.", "Décris ta chambre en quatre phrases : ce qu'il y a, et où.", "제 방에 침대가 있어요. 침대 옆에 책상이 있어요. 책상 위에 컴퓨터가 있어요. 텔레비전은 없어요."]
    },
    8: {
      gap: [["커피 ___ 잔 주세요. (2)", "두"], ["학생이 ___ 명 있어요. (3)", "세"], ["스물___ 살이에요. (25)", "다섯"], ["사과 한 ___ 주세요.", "개", "counter for things", "classificateur des objets"]],
      fix: [["커피 둘 잔 주세요.", "커피 두 잔 주세요.", "Before a counter, 둘 becomes 두.", "Devant un classificateur, 둘 devient 두."], ["저는 이십 살이에요.", "저는 스무 살이에요.", "Age uses the native numbers, and 스물 becomes 스무 before 살.", "L'âge se dit avec les nombres coréens, et 스물 devient 스무 devant 살."]],
      task: ["Order for a group of friends in a café: three drinks and two cakes, with the right counters.", "Commande pour un groupe d'amis dans un café : trois boissons et deux gâteaux, avec les bons classificateurs.", "커피 두 잔하고 우유 한 잔 주세요. 그리고 케이크 두 개 주세요."]
    },
    9: {
      gap: [["가족이 몇 ___이에요?", "명", "counter for people", "classificateur des personnes"], ["저는 여동생이 한 명 ___.", "있어요", "I have", "j'ai"], ["___ 엄마는 선생님이에요.", "우리", "my (literally, our)", "ma (mot à mot, notre)"], ["형제가 있어요? — 아니요, ___이에요.", "외동", "only child", "enfant unique"]],
      fix: [["제 엄마는 선생님이에요.", "우리 엄마는 선생님이에요.|저희 엄마는 선생님이에요.", "For your family, Koreans usually say 우리 (or the humble 저희): 우리 엄마.", "Pour sa famille, on dit le plus souvent 우리 (ou 저희, plus humble) : 우리 엄마."], ["가족이 몇 개예요?", "가족이 몇 명이에요?", "People are counted with 명, not 개.", "Les personnes se comptent avec 명, pas avec 개."]],
      task: ["Introduce your family in four or five sentences: how many you are, who they are, how old they are.", "Présente ta famille en quatre ou cinq phrases : combien vous êtes, qui ils sont, quel âge ils ont.", "우리 가족은 네 명이에요. 아빠, 엄마, 남동생하고 저예요. 아빠는 쉰 살이에요. 남동생은 열여덟 살이에요. 우리 가족은 서울에 살아요."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "kosharehouse", lesson: 7, level: "A1", icon: "house", partner: "Seoyeon", role: "your new flatmate", role_fr: "ta nouvelle colocataire",
    title: "Visiting a shared house", title_fr: "Visiter une colocation",
    setting: "You're moving into a shared house in Seoul. Seoyeon, who lives there, shows you around.", setting_fr: "Tu emménages dans une colocation à Séoul. Seoyeon, qui y habite, te fait visiter.",
    turns: [
      { p: "어서 와요! 여기가 거실이에요.", en: "Come in! This is the living room.", fr: "Entre ! Voici le salon." },
      { y: ["와, 좋아요! 화장실은 어디에 있어요?", "와, 좋아요! 화장실은 어디가 있어요?", "와, 좋아요! 화장실은 어디에 없어요?"], en: "Wow, it's nice! Where's the bathroom?", fr: "Oh, c'est bien ! Où est la salle de bains ?", why: "어디에 있어요? = where is it?", why_fr: "어디에 있어요 ? = où est-ce ?" },
      { p: "화장실은 부엌 옆에 있어요. 그리고 이 방이 제 방이에요.", en: "The bathroom is next to the kitchen. And this room is mine.", fr: "La salle de bains est à côté de la cuisine. Et cette chambre, c'est la mienne." },
      { y: ["그럼 제 방은 어디에 있어요?", "그럼 제 방은 어디에 없어요?", "그럼 제 방은 뭐예요?"], en: "Then where's my room?", fr: "Alors, où est ma chambre ?", why: "Same question: 어디에 있어요?", why_fr: "Même question : 어디에 있어요 ?" },
      { p: "제 방 옆에 있어요. 저 문이에요. 방에 침대하고 책상이 있어요.", en: "It's next to mine. That door. There's a bed and a desk in the room.", fr: "Elle est à côté de la mienne. C'est cette porte. Il y a un lit et un bureau dans la chambre." },
      { y: ["옷장도 있어요?", "옷장이 있어요도?", "옷장도 아니에요?"], en: "Is there a wardrobe too?", fr: "Il y a aussi une armoire ?", why: "도 = too, right after the noun: 옷장도.", why_fr: "도 = aussi, juste après le nom : 옷장도." },
      { p: "아니요, 옷장은 없어요. 미안해요. 그런데 침대 밑에 공간이 있어요.", en: "No, there's no wardrobe, sorry. But there's space under the bed.", fr: "Non, il n'y a pas d'armoire, désolée. Mais il y a de la place sous le lit." },
      { y: ["괜찮아요. 고마워요!", "괜찮아요. 미안해요!", "괜찮아요. 안녕히 계세요!"], en: "That's fine. Thanks!", fr: "Ce n'est pas grave. Merci !", why: "She apologises: answer 괜찮아요, then thank her.", why_fr: "Elle s'excuse : réponds 괜찮아요, puis remercie-la." }
    ] },
  { id: "kogajok", lesson: 9, level: "A1", icon: "image", partner: "Haeun", role: "a friend from your Korean class", role_fr: "une amie de ton cours de coréen",
    title: "A family photo", title_fr: "Une photo de famille",
    setting: "Haeun, a friend from your Korean class, sees a photo on your phone.", setting_fr: "Haeun, une amie de ton cours de coréen, voit une photo sur ton téléphone.",
    turns: [
      { p: "와, 이 사진은 뭐예요?", en: "Oh, what's this photo?", fr: "Oh, c'est quoi, cette photo ?" },
      { y: ["우리 가족 사진이에요.", "우리 가족 사진예요.", "우리 가족이 사진이에요."], en: "It's a photo of my family.", fr: "C'est une photo de ma famille.", why: "사진 ends with a consonant: 이에요.", why_fr: "사진 se termine par une consonne : 이에요." },
      { p: "가족이 몇 명이에요?", en: "How many are you in your family?", fr: "Vous êtes combien dans ta famille ?" },
      { y: ["다섯 명이에요.", "다섯 개예요.", "오 명이에요."], en: "There are five of us.", fr: "Nous sommes cinq.", why: "People: 명, with the native numbers: 다섯 명.", why_fr: "Les personnes : 명, avec les nombres coréens : 다섯 명." },
      { p: "이 사람은 누구예요?", en: "Who's this?", fr: "Qui est-ce ?" },
      { y: ["제 여동생이에요. 열여섯 살이에요.", "제 여동생이에요. 십육 살이에요.", "제 여동생이에요. 열여섯 명이에요."], en: "It's my younger sister. She's sixteen.", fr: "C'est ma petite sœur. Elle a seize ans.", why: "Age: native numbers + 살.", why_fr: "L'âge : nombres coréens + 살." },
      { p: "아, 귀여워요! 그럼 이분은 누구세요?", en: "Oh, she's cute! And who's this lady?", fr: "Oh, elle est mignonne ! Et cette dame, qui est-ce ?" },
      { y: ["우리 할머니예요. 부산에 사세요.", "우리 할머니이에요. 부산에 사세요.", "우리 할머니예요. 부산이 사세요."], en: "It's my grandmother. She lives in Busan.", fr: "C'est ma grand-mère. Elle habite à Busan.", why: "할머니 ends with a vowel: 예요. The place where someone lives takes 에.", why_fr: "할머니 se termine par une voyelle : 예요. Le lieu où l'on habite prend 에." },
      { p: "할머니가 정말 멋있으세요!", en: "Your grandmother looks really great!", fr: "Ta grand-mère a vraiment beaucoup d'allure !" },
      { y: ["고마워요! 하은 씨 가족은요?", "고마워요! 하은 씨 가족이요가?", "미안해요! 하은 씨 가족은요?"], en: "Thanks! And your family, Haeun?", fr: "Merci ! Et ta famille, Haeun ?", why: "N은요? = and what about…? A simple way to send the question back.", why_fr: "N은요 ? = et… ? Une façon simple de renvoyer la question." }
    ] }
  );

  W.READINGS.push({
    id: "junseogajok", level: "A1", icon: "image", title: "우리 가족 사진", genre: "Personal story",
    intro: "Junseo describes the family photo in his room. Native numbers and ages, family words, 있어요.",
    intro_fr: "Junseo décrit la photo de famille qui est dans sa chambre. Les nombres coréens et l'âge, la famille, 있어요.",
    paragraphs: [
      { ko: "제 방에 사진이 한 장 있어요. 우리 가족 사진이에요. 우리 가족은 다섯 명이에요. 아버지, 어머니, 누나, 남동생하고 저예요.", en: "There's a photo in my room. It's a photo of my family. There are five of us: my father, my mother, my older sister, my younger brother and me.", fr: "Il y a une photo dans ma chambre. C'est une photo de ma famille. Nous sommes cinq : mon père, ma mère, ma grande sœur, mon petit frère et moi." },
      { ko: "아버지는 쉰두 살이에요. 회사원이에요. 어머니는 마흔아홉 살이에요. 고등학교 선생님이에요.", en: "My father is fifty-two. He's an office worker. My mother is forty-nine. She's a high school teacher.", fr: "Mon père a cinquante-deux ans. Il est employé de bureau. Ma mère a quarante-neuf ans. Elle est professeure au lycée." },
      { ko: "누나는 스물여덟 살이에요. 누나는 미국에 살아요. 남동생은 열일곱 살이에요. 고등학생이에요.", en: "My older sister is twenty-eight. She lives in the United States. My younger brother is seventeen. He's in high school.", fr: "Ma grande sœur a vingt-huit ans. Elle habite aux États-Unis. Mon petit frère a dix-sept ans. Il est au lycée." },
      { ko: "사진 속에 강아지도 한 마리 있어요. 이름은 콩이예요. 콩이는 세 살이에요. 지금 콩이는 제 침대 위에 있어요!", en: "There's a dog in the photo too. His name is Kongi. Kongi is three. Right now, Kongi is on my bed!", fr: "Il y a aussi un chien sur la photo. Il s'appelle Kongi. Kongi a trois ans. En ce moment, Kongi est sur mon lit !" }
    ],
    glossary: { "고등학교": ["high school", "lycée"], "고등학생이에요": ["he's a high school student", "il est lycéen"], "속에": ["in (a picture)", "dans (une image)"], "강아지도": ["a dog too", "un chien aussi"], "콩이예요": ["it's Kongi (a dog's name; 콩 means bean)", "c'est Kongi (un nom de chien ; 콩 veut dire haricot)"], "콩이는": ["Kongi (topic)", "Kongi (thème)"] },
    questions: [
      { q: "준서 씨 가족은 몇 명이에요?", o: ["다섯 명", "네 명", "여섯 명"], a: 0 },
      { q: "어머니는 뭐 해요?", o: ["선생님이에요", "회사원이에요", "학생이에요"], a: 0 },
      { q: "누나는 어디에 살아요?", o: ["미국에", "한국에", "일본에"], a: 0 },
      { q: "남동생은 몇 살이에요?", o: ["열일곱 살", "열여덟 살", "스물여덟 살"], a: 0 },
      { q: "콩이는 지금 어디에 있어요?", o: ["침대 위에", "침대 밑에", "책상 위에"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-ko-a1-3", unit: "a1-3", level: "A1", icon: "soup",
    title: "식당에서", title_fr: "Au restaurant",
    context: "Mina goes to a small restaurant with two friends. Taeho, who works there, finds them a table.", context_fr: "Mina va dans un petit restaurant avec deux amis. Taeho, qui y travaille, leur trouve une table.",
    words: [["몇 분이세요?", "how many people? (polite)", "combien de personnes ? (poli)"], ["앉으세요", "please sit down", "asseyez-vous"], ["음료수", "drink", "boisson"], ["냉장고", "fridge", "réfrigérateur"], ["셀프예요", "it's self-service", "c'est en libre-service"], ["컵", "cup, glass", "verre, gobelet"]],
    lines: [["Taeho", "어서 오세요! 몇 분이세요?", "ko-KR"], ["Mina", "세 명이에요.", "ko-KR"], ["Taeho", "이쪽으로 오세요. 여기 앉으세요.", "ko-KR"], ["Mina", "감사합니다. 저기요, 비빔밥 두 개하고 김치찌개 하나 주세요.", "ko-KR"], ["Taeho", "네. 음료수는요?", "ko-KR"], ["Mina", "콜라 한 병하고 사이다 한 병 주세요.", "ko-KR"], ["Taeho", "네, 알겠습니다. 물은 저기 냉장고 안에 있어요. 셀프예요.", "ko-KR"], ["Mina", "아, 네. 컵은 어디에 있어요?", "ko-KR"], ["Taeho", "컵은 냉장고 옆에 있어요.", "ko-KR"], ["Mina", "네, 감사합니다!", "ko-KR"]],
    gist: ["미나 씨는 어디에 있어요?", ["식당에", "편의점에", "은행에"]],
    detail: [["모두 몇 명이에요?", ["세 명", "두 명", "네 명"]], ["비빔밥은 몇 개예요?", ["두 개", "한 개", "세 개"]], ["물은 어디에 있어요?", ["냉장고 안에", "냉장고 옆에", "테이블 위에"]], ["컵은 어디에 있어요?", ["냉장고 옆에", "냉장고 안에", "테이블 밑에"]]],
    decode: ["세 명이에요.", "컵은 냉장고 옆에 있어요."],
    tip: "In many Korean restaurants, water is self-service (셀프): look for the fridge or the water dispenser, and the cups next to it.", tip_fr: "Dans beaucoup de restaurants coréens, l'eau est en libre-service (셀프) : cherche le réfrigérateur ou la fontaine à eau, et les verres à côté."
  }]);

  W.PROMPTS.push({ id: "ko-a1-3", level: "A1", q: "가족을 소개해 보세요.", en: "Introduce your family: how many you are, who they are and how old they are.", fr: "Présente ta famille : combien vous êtes, qui ils sont et quel âge ils ont.", time: 60,
    phrases: ["우리 가족은 … 명이에요.", "…하고 저예요.", "…는 … 살이에요.", "…이 / 가 한 명 있어요."],
    model: "우리 가족은 네 명이에요. 엄마, 아빠, 여동생하고 저예요. 엄마는 마흔여덟 살이에요. 여동생은 열다섯 살이에요. 고양이도 한 마리 있어요!" });

  W.WRITING_GUIDE["a1-3"] = { genre: "A short description of a room", genre_fr: "Une courte description d'une chambre",
    plan: [["Say hello and what you're describing.", "Dis bonjour et ce que tu décris."], ["The furniture: what there is.", "Les meubles : ce qu'il y a."], ["Where each thing is.", "Où se trouve chaque chose."], ["What there isn't.", "Ce qu'il n'y a pas."]],
    marks: [["침대가 하나 있어요", "있어요: there is", "있어요 : il y a"], ["침대 옆에", "place + position word + 에", "lieu + mot de position + 에"], ["책상 위에", "위: on", "위 : sur"], ["텔레비전은 없어요", "없어요: there isn't", "없어요 : il n'y a pas"], ["옷장도", "도: too, also", "도 : aussi"]] };

  W.COURSE.push({ id: "a1-3", level: "A1", icon: "map-pin", title: "Where is it?", title_fr: "Où est-ce ?",
    intro: "In this unit, you say that something is there or not, that you have something or not, and where it is. You learn the native Korean numbers, the counters for things, people and animals, and how to give your age. Then you talk about your family.",
    intro_fr: "Dans cette unité, tu dis qu'une chose est là ou non, que tu as quelque chose ou non, et où elle se trouve. Tu apprends les nombres coréens, les classificateurs des objets, des personnes et des animaux, et à dire ton âge. Puis tu parles de ta famille.",
    can: ["Say that something is there or not, and where (있어요, 없어요, 에)", "Use the position words: on, under, next to, between…", "Count things and people with the native numbers and counters", "Talk about your family and say people's ages"],
    can_fr: ["Dire qu'une chose est là ou non, et où (있어요, 없어요, 에)", "Utiliser les mots de position : sur, sous, à côté, entre…", "Compter objets et personnes avec les nombres coréens et les classificateurs", "Parler de ta famille et dire l'âge de chacun"],
    lessons: [7, 8, 9], vocab: ["lieuxKO", "positionsKO", "comptageKO", "familleKO"], reading: "junseogajok", prompt: "ko-a1-3",
    writing: { task: "You offer your room in a shared house on a Korean website. Describe it in 20-35 words: what there is, where, and what there isn't.", task_fr: "Tu proposes ta chambre dans une colocation sur un site coréen. Décris-la en 20 à 35 mots : ce qu'il y a, où, et ce qu'il n'y a pas.", words: "20-35",
      tips: ["방에 …이 / 가 있어요.", "… 옆에 / 위에 / 앞에", "…은 / 는 없어요.", "…도 있어요.", "그리고"],
      checklist: ["I used 이 / 가 with 있어요 and 없어요", "The place comes before the position word (책상 위에)", "I said what there isn't with 없어요", "I used 도 for “too” at least once", "I stayed between 20 and 35 words"],
      checklist_fr: ["J'ai mis 이 / 가 avec 있어요 et 없어요", "Le lieu vient avant le mot de position (책상 위에)", "J'ai dit ce qu'il n'y a pas avec 없어요", "J'ai utilisé 도 (aussi) au moins une fois", "J'ai écrit entre 20 et 35 mots"],
      model: "안녕하세요! 제 방을 소개해요. 방에 침대가 하나 있어요. 침대 옆에 책상하고 의자가 있어요. 책상 위에 컴퓨터가 있어요. 창문 앞에 꽃이 있어요. 텔레비전은 없어요. 그리고 옷장도 없어요." } });
})();
