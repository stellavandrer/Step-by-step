/* Cours de français, unité A1-6 « People and things / Décrire » : l'accord et la place des adjectifs, les trois
   façons de poser une question et les mots interrogatifs, c'est ou il est, décrire une personne et un objet.
   Personnages fictifs, prénoms français, aucun fait extérieur à vérifier. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "descriptionFR", icon: "user-round", title: "Describing people", title_fr: "Décrire les gens", level: "A1", words: [
    ["grand / grande", "tall, big (m) / tall, big (f)", "Mon frère est très grand."],
    ["petit / petite", "short, small (m) / short, small (f)", "Ma grand-mère est petite."],
    ["jeune", "young", "Le professeur est jeune."],
    ["vieux / vieille", "old (m) / old (f)", "C'est une vieille amie."],
    ["beau / belle", "beautiful, handsome (m) / beautiful (f)", "Quelle belle journée !"],
    ["joli / jolie", "pretty (m) / pretty (f)", "Tu as une jolie robe."],
    ["mince", "slim", "Il est grand et mince."],
    ["les cheveux", "hair (always plural)", "Elle a les cheveux longs."],
    ["brun / brune", "dark-haired; brown (hair) (m) / (f)", "Il a les cheveux bruns."],
    ["blond / blonde", "blond (m) / blonde (f)", "Ma sœur est blonde."],
    ["roux / rousse", "red-haired (m) / red-haired (f)", "Elle a les cheveux roux."],
    ["les yeux", "eyes (plural of l'œil)", "Il a les yeux bleus."],
    ["la barbe", "the beard", "Mon père a une barbe."],
    ["les lunettes", "glasses", "Je porte des lunettes."],
    ["gentil / gentille", "kind, nice (m) / (f)", "Elle est très gentille."],
    ["timide", "shy", "Mon fils est un peu timide."],
    ["sérieux / sérieuse", "serious, reliable (m) / (f)", "C'est une collègue sérieuse."],
    ["généreux / généreuse", "generous (m) / (f)", "Mes grands-parents sont généreux."],
    ["bavard / bavarde", "talkative (m) / (f)", "Ma voisine est très bavarde."],
    ["drôle", "funny", "Il est vraiment drôle."]
  ] },
  { id: "couleursFR", icon: "palette", title: "Colours and clothes", title_fr: "Les couleurs et les vêtements", level: "A1", words: [
    ["rouge", "red", "Une voiture rouge."],
    ["bleu / bleue", "blue (m) / blue (f)", "Une chemise bleue."],
    ["vert / verte", "green (m) / green (f)", "Il a les yeux verts."],
    ["jaune", "yellow", "Un parapluie jaune."],
    ["noir / noire", "black (m) / black (f)", "Une robe noire."],
    ["blanc / blanche", "white (m) / white (f)", "Une chemise blanche."],
    ["gris / grise", "grey (m) / grey (f)", "Un pull gris."],
    ["rose", "pink", "Des fleurs roses."],
    ["marron", "brown (never changes)", "Des chaussures marron."],
    ["le pull", "the jumper, the sweater", "Prends un pull, il fait froid."],
    ["la chemise", "the shirt", "Il porte une chemise blanche."],
    ["le pantalon", "the trousers (singular in French)", "Un pantalon noir."],
    ["la robe", "the dress", "Une jolie robe d'été."],
    ["la jupe", "the skirt", "Une jupe longue."],
    ["les chaussures", "shoes", "Mes chaussures sont neuves."],
    ["le manteau", "the coat", "Un manteau chaud pour l'hiver."],
    ["la veste", "the jacket", "Une veste en cuir."],
    ["porter", "to wear; to carry", "Elle porte une robe rouge."],
    ["en cuir", "made of leather", "Un sac en cuir."]
  ] });

  W.LESSONS.push(
  {
    id: 18, level: "A1", icon: "palette",
    title: "Un grand appartement lumineux: adjectives", title_fr: "Un grand appartement lumineux : les adjectifs",
    subtitle: "Adjectives agree with the noun, and most of them come after it.", subtitle_fr: "Les adjectifs s'accordent avec le nom, et la plupart se placent après lui.",
    body: `
<h2>Agreement</h2>
<p>An adjective takes the gender and number of its noun: add <b>-e</b> for the feminine, <b>-s</b> for the plural.</p>
<table>
<tr><th></th><th>Singular</th><th>Plural</th></tr>
<tr><td>masculine</td><td><s-fr>un pull vert</s-fr></td><td><s-fr>des pulls verts</s-fr></td></tr>
<tr><td>feminine</td><td><s-fr>une robe verte</s-fr></td><td><s-fr>des robes vertes</s-fr></td></tr>
</table>
<p>In <s-fr>vert</s-fr>, the t is silent; in <s-fr>verte</s-fr>, you hear it. Adjectives already ending in -e don't change in the feminine: <s-fr>un pull rouge</s-fr>, <s-fr>une robe rouge</s-fr>.</p>
<h2>Feminine endings to know</h2>
<table>
<tr><th>Masculine</th><th>Feminine</th><th>Example</th></tr>
<tr><td>-eux</td><td>-euse</td><td><s-fr>sérieux</s-fr> → <s-fr>sérieuse</s-fr></td></tr>
<tr><td>-if</td><td>-ive</td><td><s-fr>sportif</s-fr> → <s-fr>sportive</s-fr></td></tr>
<tr><td>-er</td><td>-ère</td><td><s-fr>cher</s-fr> → <s-fr>chère</s-fr></td></tr>
<tr><td>-ien, -on</td><td>-ienne, -onne</td><td><s-fr>italien</s-fr> → <s-fr>italienne</s-fr> · <s-fr>bon</s-fr> → <s-fr>bonne</s-fr></td></tr>
<tr><td>irregular</td><td></td><td><s-fr>blanc</s-fr> → <s-fr>blanche</s-fr> · <s-fr>gentil</s-fr> → <s-fr>gentille</s-fr> · <s-fr>long</s-fr> → <s-fr>longue</s-fr></td></tr>
</table>
<h2>Position: usually after the noun</h2>
<p>Most adjectives, and all colours and nationalities, come after the noun: <s-fr>un appartement lumineux</s-fr>, <s-fr>une voiture rouge</s-fr>, <s-fr>un film français</s-fr>.</p>
<p>A small group of very common adjectives come before. Remember them with <b>BAGS</b>: <b>B</b>eauty (<s-fr>beau</s-fr>, <s-fr>joli</s-fr>), <b>A</b>ge (<s-fr>jeune</s-fr>, <s-fr>vieux</s-fr>, <s-fr>nouveau</s-fr>), <b>G</b>oodness (<s-fr>bon</s-fr>, <s-fr>mauvais</s-fr>), <b>S</b>ize (<s-fr>grand</s-fr>, <s-fr>petit</s-fr>, <s-fr>gros</s-fr>): <s-fr>un petit appartement</s-fr>, <s-fr>une jolie robe</s-fr>, <s-fr>un bon restaurant</s-fr>.</p>
<h2>Beau, vieux, nouveau</h2>
<p>Three adjectives have a special form before a masculine noun starting with a vowel: <s-fr>un bel appartement</s-fr>, <s-fr>un vieil ami</s-fr>, <s-fr>un nouvel hôtel</s-fr>. Their feminine forms are <s-fr>belle</s-fr>, <s-fr>vieille</s-fr>, <s-fr>nouvelle</s-fr>.</p>
<div class="tip"><s-fr>marron</s-fr> (brown) and <s-fr>orange</s-fr> never change, because they are also the names of a fruit: <s-fr>des chaussures marron</s-fr>, <s-fr>une veste orange</s-fr>.</div>
`,
    examples: [
      ["J'habite dans un petit appartement lumineux.", "I live in a small, bright flat."],
      ["Elle porte une robe verte.", "She's wearing a green dress."],
      ["Ce sont des étudiants sérieux.", "They're serious students."],
      ["C'est une voiture chère.", "It's an expensive car."],
      ["Mon frère a une nouvelle voiture.", "My brother has a new car."],
      ["C'est un vieil ami.", "He's an old friend."],
      ["Quel bel hôtel !", "What a beautiful hotel!"],
      ["J'ai des chaussures marron.", "I have brown shoes."]
    ],
    quiz: [
      { q: "Complete: “Une chemise ___.” (white)", o: ["blanc", "blanche", "blance"], a: 1, ex: "blanc → blanche." },
      { q: "Which is correct?", o: ["une rouge voiture", "une voiture rouge", "une voiture rouges"], a: 1, ex: "Colours come after the noun." },
      { q: "Which is correct?", o: ["un appartement petit", "un petit appartement", "une petite appartement"], a: 1, ex: "petit (size) comes before the noun; appartement is masculine." },
      { q: "“An old friend” (a man) is:", o: ["un vieux ami", "un vieil ami", "une vieille ami"], a: 1, ex: "Before a masculine noun with a vowel: vieil." },
      { q: "Complete: “Elle est très ___.” (sérieux)", o: ["sérieux", "sérieuse", "sérieuxe"], a: 1, ex: "-eux → -euse." }
    ]
  },
  {
    id: 19, level: "A1", icon: "circle-help",
    title: "Asking questions: three ways, and the question words", title_fr: "Poser des questions : trois façons, et les mots interrogatifs",
    subtitle: "Raise your voice, add est-ce que, or turn the verb around.", subtitle_fr: "Monter la voix, ajouter est-ce que, ou inverser le verbe.",
    body: `
<h2>Three ways to ask a yes / no question</h2>
<table>
<tr><th>Way</th><th>Example</th><th>When</th></tr>
<tr><td>Intonation: the voice goes up</td><td><s-fr>Tu habites ici ?</s-fr></td><td>everyday conversation</td></tr>
<tr><td><s-fr>Est-ce que</s-fr> at the start</td><td><s-fr>Est-ce que tu habites ici ?</s-fr></td><td>everywhere, a safe choice</td></tr>
<tr><td>Inversion: the verb before the pronoun</td><td><s-fr>Habitez-vous ici ?</s-fr></td><td>formal, and in writing</td></tr>
</table>
<p>With inversion, French adds a -t- between two vowels, to make it easier to say: <s-fr>A-t-il un chien ?</s-fr> · <s-fr>Parle-t-elle français ?</s-fr></p>
<h2>The question words</h2>
<table>
<tr><th>French</th><th>English</th><th>Example</th></tr>
<tr><td><s-fr>où</s-fr></td><td>where</td><td><s-fr>Tu habites où ?</s-fr></td></tr>
<tr><td><s-fr>quand</s-fr></td><td>when</td><td><s-fr>Quand est-ce que tu pars ?</s-fr></td></tr>
<tr><td><s-fr>comment</s-fr></td><td>how</td><td><s-fr>Comment tu t'appelles ?</s-fr></td></tr>
<tr><td><s-fr>combien</s-fr></td><td>how much, how many</td><td><s-fr>Ça coûte combien ?</s-fr></td></tr>
<tr><td><s-fr>pourquoi</s-fr></td><td>why</td><td><s-fr>Pourquoi tu apprends le français ?</s-fr> — <s-fr>Parce que…</s-fr></td></tr>
<tr><td><s-fr>qui</s-fr></td><td>who</td><td><s-fr>Qui est-ce ?</s-fr></td></tr>
<tr><td><s-fr>qu'est-ce que</s-fr> · <s-fr>quoi</s-fr></td><td>what</td><td><s-fr>Qu'est-ce que tu fais ?</s-fr> · <s-fr>Tu fais quoi ?</s-fr></td></tr>
</table>
<h2>Quel: which, what</h2>
<p><s-fr>quel</s-fr> agrees with its noun, like an adjective: <s-fr>Quel âge as-tu ?</s-fr> · <s-fr>Quelle heure est-il ?</s-fr> · <s-fr>Quels films aimes-tu ?</s-fr> · <s-fr>Quelles langues parles-tu ?</s-fr> The four forms sound the same.</p>
<div class="tip">In everyday speech, the question word often goes at the end: <s-fr>Tu habites où ?</s-fr> · <s-fr>Tu pars quand ?</s-fr> · <s-fr>Ça coûte combien ?</s-fr> It's informal, and very common.</div>
`,
    examples: [
      ["Tu parles anglais ?", "Do you speak English?"],
      ["Est-ce que vous avez des enfants ?", "Do you have any children?"],
      ["Habitez-vous à Paris ?", "Do you live in Paris? (formal)"],
      ["A-t-il un frère ?", "Does he have a brother?"],
      ["Pourquoi tu apprends le français ? — Parce que j'adore la France.", "Why are you learning French? — Because I love France."],
      ["Qu'est-ce que tu fais ce soir ?", "What are you doing tonight?"],
      ["Quelle est ta couleur préférée ?", "What's your favourite colour?"],
      ["Qui est-ce ? — C'est ma voisine.", "Who's that? — It's my neighbour."]
    ],
    quiz: [
      { q: "Which question is formal?", o: ["Tu viens ?", "Est-ce que tu viens ?", "Venez-vous ?"], a: 2, ex: "Inversion is formal." },
      { q: "Complete: “___ est-ce que tu pars ?” (when)", o: ["Où", "Quand", "Comment"], a: 1, ex: "quand = when." },
      { q: "Complete: “___ heure est-il ?”", o: ["Quel", "Quelle", "Quels"], a: 1, ex: "heure is feminine: quelle." },
      { q: "With inversion, “Does she speak French?” is:", o: ["Parle-elle français ?", "Parle-t-elle français ?", "Elle-parle français ?"], a: 1, ex: "-t- between two vowels." },
      { q: "“What are you doing?” is:", o: ["Qu'est-ce que tu fais ?", "Quoi est-ce que tu fais ?", "Que tu fais ?"], a: 0, ex: "Qu'est-ce que…? (or, informally, Tu fais quoi ?)" }
    ]
  },
  {
    id: 20, level: "A1", kind: "functional", icon: "user-round",
    title: "Everyday French: describing people, c'est or il est?", title_fr: "Le français de tous les jours : décrire quelqu'un, c'est ou il est ?",
    subtitle: "Say what someone looks like and what they're like, and choose between c'est and il est.", subtitle_fr: "Dire à quoi ressemble quelqu'un et quel est son caractère, et choisir entre c'est et il est.",
    body: `
<h2>C'est or il est?</h2>
<table>
<tr><th>Use</th><th>Before…</th><th>Examples</th></tr>
<tr><td><s-fr>c'est</s-fr> · <s-fr>ce sont</s-fr></td><td>a name, or a noun with an article</td><td><s-fr>C'est Paul.</s-fr> · <s-fr>C'est un ami.</s-fr> · <s-fr>Ce sont mes parents.</s-fr></td></tr>
<tr><td><s-fr>il est</s-fr> · <s-fr>elle est</s-fr></td><td>an adjective, or a job without an article</td><td><s-fr>Il est grand.</s-fr> · <s-fr>Elle est médecin.</s-fr></td></tr>
</table>
<p>So: <s-fr>C'est un médecin.</s-fr> or <s-fr>Il est médecin.</s-fr> Both are correct; never <s-fr>Il est un médecin.</s-fr> For a thing in general, use <s-fr>c'est</s-fr> + adjective: <s-fr>C'est beau !</s-fr> · <s-fr>C'est cher.</s-fr></p>
<h2>What someone looks like</h2>
<p>French uses <s-fr>avoir</s-fr> for hair and eyes: <s-fr>Elle a les cheveux longs et les yeux verts.</s-fr> (She has long hair and green eyes.) Note <s-fr>les</s-fr>, not <s-fr>des</s-fr>. And <s-fr>les cheveux</s-fr> is always plural.</p>
<p><s-fr>Il est grand, mince et brun.</s-fr> · <s-fr>Elle porte des lunettes.</s-fr> · <s-fr>Il a une barbe.</s-fr></p>
<h2>What someone is like</h2>
<p><s-fr>Il est comment ?</s-fr> (What's he like?) · <s-fr>Elle est très gentille et un peu timide.</s-fr> · <s-fr>Il est drôle et bavard.</s-fr></p>
<div class="tip">To soften a description: <s-fr>un peu</s-fr> (a bit) for negative things, <s-fr>assez</s-fr> (quite) and <s-fr>très</s-fr> (very) for positive ones: <s-fr>Il est un peu bavard, mais très gentil.</s-fr></div>
`,
    examples: [
      ["C'est mon amie Pauline.", "This is my friend Pauline."],
      ["Elle est grande et blonde.", "She's tall and blonde."],
      ["Il a les cheveux courts et les yeux bleus.", "He has short hair and blue eyes."],
      ["Elle est professeure. C'est une professeure géniale.", "She's a teacher. She's a great teacher."],
      ["Il est comment, ton nouveau collègue ?", "What's your new colleague like?"],
      ["Il est un peu timide, mais très drôle.", "He's a bit shy, but very funny."],
      ["C'est beau, Paris la nuit !", "Paris at night is beautiful!"]
    ],
    quiz: [
      { q: "Complete: “___ mon frère.”", o: ["Il est", "C'est", "Elle est"], a: 1, ex: "Before a noun with mon / un / le: c'est." },
      { q: "Complete: “___ très sympa.” (about Paul)", o: ["C'est", "Il est", "Il a"], a: 1, ex: "Before an adjective, about a person: il est." },
      { q: "“She has blue eyes” is:", o: ["Elle est les yeux bleus.", "Elle a les yeux bleus.", "Elle a des yeux bleus."], a: 1, ex: "avoir + les yeux / les cheveux." },
      { q: "Which is correct?", o: ["Il est un médecin.", "Il est médecin.", "C'est médecin."], a: 1, ex: "Il est médecin, or C'est un médecin." },
      { q: "“What's she like?” is:", o: ["Elle est comment ?", "Comment elle s'appelle ?", "Elle va comment ?"], a: 0, ex: "Elle est comment ? = What's she like?" }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    18: {
      gap: [["Une robe ___. (green)", "verte"], ["Des chaussures ___. (brown)", "marron"], ["C'est un ___ ami. (old)", "vieil"], ["Elle est très ___. (kind)", "gentille"]],
      fix: [["J'ai une rouge voiture.", "J'ai une voiture rouge.", "Colours come after the noun."], ["C'est un appartement grand.", "C'est un grand appartement.", "grand (size) comes before the noun."]],
      task: ["Describe your home or your favourite room with five adjectives.", "Décris ton logement ou ta pièce préférée avec cinq adjectifs.", "J'habite dans un petit appartement ancien. Ma chambre est lumineuse et calme. Il y a un grand lit blanc et une vieille armoire. J'adore mon fauteuil vert !"]
    },
    19: {
      gap: [["___ est-ce que tu habites ? (where)", "Où"], ["___ âge as-tu ? (which)", "Quel"], ["Pourquoi tu pars ? — ___ que je suis fatigué. (because)", "Parce"], ["A-___-il des enfants ? (inversion)", "t"]],
      fix: [["Quelle âge as-tu ?", "Quel âge as-tu ?", "âge is masculine: quel."], ["Parle-elle anglais ?", "Parle-t-elle anglais ?", "Between two vowels, add -t-."]],
      task: ["Write five questions to get to know a new colleague, using different question words.", "Écris cinq questions pour faire connaissance avec un nouveau collègue, avec des mots interrogatifs différents.", "Comment tu t'appelles ? Tu habites où ? Est-ce que tu as des enfants ? Pourquoi tu travailles ici ? Qu'est-ce que tu fais le week-end ?"]
    },
    20: {
      gap: [["___ mon amie Inès. (this is)", "C'est"], ["Elle ___ les cheveux longs. (to have)", "a"], ["Il est ___ ? — Il est très drôle. (what is he like)", "comment"], ["Elle est ___. (a nurse, no article)", "infirmière"]],
      fix: [["Il est un professeur.", "Il est professeur.|C'est un professeur.", "Il est + job without an article, or c'est + un + job."], ["Elle est les yeux bleus.", "Elle a les yeux bleus.", "Eyes and hair: avoir."]],
      task: ["Describe a friend: who it is, what they look like and what they're like.", "Décris un ami ou une amie : qui c'est, son physique et son caractère.", "C'est mon ami Arthur. Il est grand et mince, il a les cheveux bruns et il porte des lunettes. Il est un peu timide, mais très drôle et généreux."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "cousine", lesson: 20, level: "A1", icon: "user-round", partner: "Pierre", role: "a friend",
    title: "Describing someone you need to meet", title_fr: "Décrire quelqu'un qu'il faut accueillir",
    setting: "Your cousin arrives by train, but you're stuck at work. Your friend Pierre will meet her at the station. You describe her on the phone.", setting_fr: "Ta cousine arrive en train, mais tu ne peux pas quitter le travail. Ton ami Pierre va l'accueillir à la gare. Tu la décris au téléphone.",
    turns: [
      { p: "Pas de problème, je vais à la gare ! Elle s'appelle comment, ta cousine ?", fr: "No problem, I'll go to the station! What's your cousin's name?" },
      { y: ["Elle s'appelle Margaux. C'est une fille très sympa.", "Elle s'appelle Margaux. Elle est une fille très sympa.", "Elle s'appelle Margaux. C'est une fille très sympas."], fr: "She's called Margaux. She's a really nice girl.", why: "C'est + une + noun. Sympa is singular here: une fille sympa." },
      { p: "D'accord. Elle est comment ? Je ne la connais pas !", fr: "OK. What does she look like? I don't know her!" },
      { y: ["Elle est grande et elle a les cheveux roux et longs.", "Elle est grande et elle est les cheveux roux et longs.", "Elle est grand et elle a les cheveux roux et longs."], fr: "She's tall, and she has long red hair.", why: "Hair with avoir: elle a les cheveux… Grand agrees: grande." },
      { p: "Des cheveux roux, c'est facile ! Et qu'est-ce qu'elle porte ?", fr: "Red hair, that's easy! And what is she wearing?" },
      { y: ["Elle porte une veste verte et des chaussures blanches.", "Elle porte une verte veste et des chaussures blanches.", "Elle porte une veste vert et des chaussures blanches."], fr: "She's wearing a green jacket and white shoes.", why: "Colours come after the noun and agree: une veste verte." },
      { p: "Parfait. Le train arrive à quelle heure ?", fr: "Perfect. What time does the train arrive?" },
      { y: ["À dix-huit heures quinze. Merci beaucoup, tu es vraiment gentil !", "À dix-huit heures quinze. Merci beaucoup, tu es vraiment gentille !", "À dix-huit heures quinze. Merci beaucoup, tu es vraiment gentils !"], fr: "At 6.15 pm. Thank you so much, you're really kind!", why: "Pierre is a man: gentil." }
    ] }
  );

  W.READINGS.push({
    id: "colocataire", level: "A1", icon: "house", title: "Cherche colocataire !", genre: "Advert",
    intro: "Pauline and Yanis are looking for a third flatmate. They describe the flat, themselves, and the person they want. Adjectives and questions.",
    intro_fr: "Pauline et Yanis cherchent un troisième colocataire. Ils décrivent l'appartement, eux-mêmes, et la personne qu'ils cherchent. Les adjectifs et les questions.",
    paragraphs: [
      { en: "Nous cherchons un ou une colocataire pour notre grand appartement, au centre-ville. La chambre est petite, mais lumineuse et calme. Il y a une belle cuisine et un joli balcon.", fr: "We're looking for a flatmate for our big flat in the town centre. The room is small, but bright and quiet. There's a beautiful kitchen and a pretty balcony." },
      { en: "Qui sommes-nous ? Pauline a vingt-cinq ans. Elle est infirmière. Elle est sportive et très organisée. Yanis a vingt-huit ans, il est musicien. Il est drôle et un peu bavard !", fr: "Who are we? Pauline is twenty-five. She's a nurse. She's sporty and very organised. Yanis is twenty-eight, he's a musician. He's funny and a bit talkative!" },
      { en: "Nous cherchons une personne sympa, calme et ouverte. Tu aimes cuisiner ? C'est parfait : le dimanche, nous dînons souvent ensemble. Tu fumes ? Désolés, ce n'est pas possible dans l'appartement.", fr: "We're looking for someone nice, calm and open-minded. Do you like cooking? Perfect: on Sundays, we often have dinner together. Do you smoke? Sorry, it's not possible in the flat." },
      { en: "Le loyer est de quatre cent cinquante euros par mois. Ça t'intéresse ? Envoie-nous un message ici !", fr: "The rent is 450 euros a month. Interested? Send us a message here!" }
    ],
    glossary: { "cherchons": "are looking for", "colocataire": "flatmate", "lumineuse": "bright", "calme": "quiet, calm", "cuisine": "kitchen", "balcon": "balcony", "sportive": "sporty", "organisée": "organised", "bavard": "talkative", "ouverte": "open-minded", "cuisiner": "to cook", "fumes": "smoke", "loyer": "rent", "mois": "month", "envoie": "send" },
    questions: [
      { q: "La chambre est comment ?", o: ["Grande et sombre", "Petite, lumineuse et calme", "Grande et bruyante"], a: 1 },
      { q: "Quel est le métier de Pauline ?", o: ["Infirmière", "Musicienne", "Étudiante"], a: 0 },
      { q: "Comment est Yanis ?", o: ["Timide et sérieux", "Drôle et un peu bavard", "Sportif et organisé"], a: 1 },
      { q: "Qu'est-ce qu'ils font le dimanche ?", o: ["Ils font du sport.", "Ils dînent souvent ensemble.", "Ils travaillent."], a: 1 },
      { q: "Le loyer coûte combien ?", o: ["Quatre cent cinquante euros par mois", "Quatre-vingt-cinq euros", "Quarante-cinq euros par semaine"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-a1-6", unit: "a1-6", level: "A1", icon: "search",
    title: "Aux objets trouvés", title_fr: "Aux objets trouvés",
    context: "Valérie has lost her bag on a train. She describes it to Nicolas, at the lost property office.", context_fr: "Valérie a perdu son sac dans un train. Elle le décrit à Nicolas, au bureau des objets trouvés.",
    words: [["les objets trouvés", "lost property"], ["perdu", "lost"], ["en cuir", "made of leather"], ["un portefeuille", "a wallet"], ["dedans", "inside"]],
    lines: [["Nicolas", "Bonjour, madame. Je peux vous aider ?", "fr-FR"], ["Valérie", "Bonjour. J'ai perdu mon sac dans le train de Lyon, ce matin.", "fr-FR"], ["Nicolas", "D'accord. Il est comment, votre sac ?", "fr-FR"], ["Valérie", "C'est un grand sac en cuir. Il est marron, avec une petite poche devant.", "fr-FR"], ["Nicolas", "Marron… Et qu'est-ce qu'il y a dedans ?", "fr-FR"], ["Valérie", "Mon portefeuille, des clés, des lunettes de soleil et un livre.", "fr-FR"], ["Nicolas", "Un livre ? Quel livre ?", "fr-FR"], ["Valérie", "Un roman policier, avec une couverture jaune.", "fr-FR"], ["Nicolas", "Attendez une minute… Est-ce que c'est ce sac ?", "fr-FR"], ["Valérie", "Oui, c'est mon sac ! Merci beaucoup, monsieur !", "fr-FR"], ["Nicolas", "Je vous en prie. Vous pouvez signer ici, s'il vous plaît ?", "fr-FR"]],
    gist: ["Pourquoi Valérie va aux objets trouvés ?", ["Elle a perdu son sac.", "Elle a trouvé un sac.", "Elle veut acheter un sac."]],
    detail: [["Le sac est de quelle couleur ?", ["Marron", "Noir", "Jaune"]], ["Le sac est en quoi ?", ["En cuir", "En tissu", "En plastique"]], ["Qu'est-ce qu'il y a dans le sac ?", ["Un portefeuille, des clés, des lunettes et un livre", "Un ordinateur et un téléphone", "Des vêtements"]], ["Le livre a une couverture de quelle couleur ?", ["Jaune", "Marron", "Rouge"]]],
    decode: ["Il est comment, votre sac ?", "Est-ce que c'est ce sac ?"],
    tip: "To describe an object, French follows an order: size, material, colour, details. C'est un grand sac en cuir, il est marron, avec une petite poche. Listen for each step, and you won't miss anything.", tip_fr: "Pour décrire un objet, on suit souvent un ordre : la taille, la matière, la couleur, les détails. C'est un grand sac en cuir, il est marron, avec une petite poche. Guette chaque étape, et tu ne rateras rien."
  }]);

  W.PROMPTS.push({ id: "fr-a1-6", level: "A1", q: "Décris une personne importante pour toi : qui c'est, son physique et son caractère.", fr: "Describe a person who matters to you: who they are, what they look like and what they're like.", time: 90,
    phrases: ["C'est mon / ma…", "Il / elle est grand(e), petit(e)…", "Il / elle a les cheveux… et les yeux…", "Il / elle est très… et un peu…", "J'aime beaucoup… parce que…"],
    model: "C'est ma grand-mère, Louise. Elle a soixante-dix-huit ans. Elle est petite et mince, elle a les cheveux blancs et les yeux bleus. Elle porte toujours des lunettes rouges ! Elle est très gentille et généreuse, mais un peu têtue. J'aime beaucoup ma grand-mère parce qu'elle est drôle et qu'elle raconte des histoires incroyables." });

  W.WRITING_GUIDE["a1-6"] = { genre: "A message on a flatshare website", genre_fr: "Un message sur un site de colocation",
    plan: [["Say hello.", "Dis bonjour."], ["Who you are: name, age, job.", "Qui tu es : nom, âge, métier."], ["Your personality, with adjectives.", "Ton caractère, avec des adjectifs."], ["The flat and the people you're looking for.", "L'appartement et les personnes que tu cherches."], ["A question, and a friendly ending.", "Une question, et une fin chaleureuse."]],
    marks: [["je suis étudiant en architecture", "être + job, no article", "être + métier, sans article"], ["Je suis calme, organisé et assez drôle", "adjectives about yourself", "des adjectifs pour te décrire"], ["un grand appartement lumineux", "grand before the noun, lumineux after", "grand avant le nom, lumineux après"], ["des personnes sympas et ouvertes", "agreement with personnes (feminine plural)", "l'accord avec personnes (féminin pluriel)"], ["Est-ce que vous avez un chat ?", "a question with est-ce que", "une question avec est-ce que"], ["À bientôt,", "a friendly goodbye", "un au revoir amical"]] };

  W.COURSE.push({ id: "a1-6", level: "A1", icon: "user-round", title: "People and things", title_fr: "Décrire",
    intro: "In this unit, you'll describe people and things: adjectives that agree and change place, the three ways of asking a question, and the difference between c'est and il est.",
    intro_fr: "Dans cette unité, tu vas décrire les gens et les choses : des adjectifs qui s'accordent et changent de place, les trois façons de poser une question, et la différence entre c'est et il est.",
    can: ["Make adjectives agree and put them in the right place", "Ask questions in three ways, with the question words", "Choose between c'est and il est", "Describe what someone looks like and what they're like"],
    can_fr: ["Accorder les adjectifs et les mettre à la bonne place", "Poser des questions de trois façons, avec les mots interrogatifs", "Choisir entre c'est et il est", "Décrire le physique et le caractère de quelqu'un"],
    lessons: [18, 19, 20], vocab: ["descriptionFR", "couleursFR"], reading: "colocataire", prompt: "fr-a1-6",
    writing: { task: "You're looking for a room in a flatshare. Write a message (60-80 words) on a flatshare website: who you are, your personality, and the flat and flatmates you'd like.", task_fr: "Tu cherches une chambre en colocation. Écris un message (60 à 80 mots) sur un site de colocation : qui tu es, ton caractère, et l'appartement et les colocataires que tu cherches.", words: "60-80",
      tips: ["Bonjour !", "Je suis + adjectifs", "Je cherche une chambre dans un…", "Je voudrais habiter avec des personnes…", "Est-ce que… ?"],
      checklist: ["Adjectives agree with their noun", "Adjectives are in the right place (un grand appartement lumineux)", "I asked at least one question", "I used être for my job, without an article", "I stayed between 60 and 80 words"],
      model: "Bonjour !\n\nJe m'appelle Théo, j'ai vingt-quatre ans et je suis étudiant en architecture. Je suis calme, organisé et assez drôle, je crois ! Je cherche une chambre dans un grand appartement lumineux, près du centre-ville. Je voudrais habiter avec des personnes sympas et ouvertes. Est-ce que vous avez un chat ? J'adore les animaux ! Vous pouvez m'écrire ici.\n\nÀ bientôt,\nThéo" } });
})();
