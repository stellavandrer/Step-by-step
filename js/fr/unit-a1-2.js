/* Cours de français, unité A1-2 « My family / Ma famille » : le verbe avoir, l'âge et il y a, le genre et les
   articles, les possessifs (son / sa selon l'objet, pas le propriétaire), parler de sa famille, les nombres de
   21 à 69. Personnages fictifs, prénoms français. Fait vérifiable : sur les formulaires, le nom de famille est
   souvent écrit en premier, en capitales. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "familleFR", icon: "users", title: "The family", title_fr: "La famille", level: "A1", words: [
    ["la mère", "the mother", "Ma mère est professeure."],
    ["le père", "the father", "Mon père a soixante ans."],
    ["les parents", "the parents; relatives", "Mes parents habitent à Nice."],
    ["le frère", "the brother", "J'ai deux frères."],
    ["la sœur", "the sister", "Ma sœur s'appelle Lucie."],
    ["le fils", "the son (the s is pronounced)", "Leur fils a huit ans."],
    ["la fille", "the daughter; the girl", "Ils ont une fille."],
    ["le mari", "the husband", "Son mari est cuisinier."],
    ["la femme", "the wife; the woman", "Sa femme est médecin."],
    ["l'enfant", "the child", "Vous avez des enfants ?"],
    ["les grands-parents", "the grandparents", "Mes grands-parents habitent à la campagne."],
    ["le grand-père", "the grandfather", "Mon grand-père adore le jardin."],
    ["la grand-mère", "the grandmother", "Ma grand-mère fait des gâteaux."],
    ["l'oncle", "the uncle", "Mon oncle habite au Canada."],
    ["la tante", "the aunt", "Ma tante a trois enfants."],
    ["le cousin / la cousine", "the cousin (m) / the cousin (f)", "Ma cousine est étudiante."],
    ["le neveu", "the nephew", "J'ai un neveu de deux ans."],
    ["la nièce", "the niece", "Ma nièce s'appelle Zoé."],
    ["le bébé", "the baby", "Le bébé a six mois."],
    ["le copain / la copine", "the boyfriend; friend (m) / the girlfriend; friend (f)", "Mon copain s'appelle Rémi."],
    ["marié / mariée", "married (m) / married (f)", "Je suis mariée."],
    ["célibataire", "single", "Il est célibataire."],
    ["fils unique / fille unique", "only child (m) / only child (f)", "Je suis fille unique."]
  ] },
  { id: "chosesFR", icon: "house", title: "Home, pets and things", title_fr: "La maison, les animaux et les objets", level: "A1", words: [
    ["la maison", "the house", "Ils ont une grande maison."],
    ["l'appartement", "the flat, the apartment", "J'habite dans un petit appartement."],
    ["le jardin", "the garden", "Il y a un jardin derrière la maison."],
    ["la chambre", "the bedroom", "Il y a trois chambres."],
    ["le chien", "the dog", "Notre chien s'appelle Biscuit."],
    ["le chat", "the cat", "J'ai un chat noir."],
    ["l'animal", "the animal, the pet", "Vous avez un animal ?"],
    ["la voiture", "the car", "Nous n'avons pas de voiture."],
    ["le vélo", "the bike", "Mon vélo est dans le garage."],
    ["le livre", "the book", "C'est le livre de ma sœur."],
    ["l'ordinateur", "the computer", "Mon ordinateur est vieux."],
    ["la photo", "the photo", "Voici une photo de ma famille."],
    ["le cadeau", "the present, the gift", "Un cadeau pour toi !"],
    ["l'anniversaire", "the birthday", "Bon anniversaire, maman !"],
    ["la clé", "the key", "Tu as les clés de la maison ?"],
    ["le sac", "the bag", "Mon sac est sur la table."],
    ["la table", "the table", "Les livres sont sur la table."],
    ["avoir faim", "to be hungry", "J'ai faim !"],
    ["avoir soif", "to be thirsty", "Tu as soif ?"]
  ] },
  { id: "nombres2FR", icon: "calculator", title: "Numbers from 21 to 69", title_fr: "Les nombres de 21 à 69", level: "A1", words: [
    ["vingt et un", "twenty-one", "Elle a vingt et un ans."],
    ["vingt-deux", "twenty-two", "J'habite au vingt-deux, rue Victor-Hugo."],
    ["vingt-cinq", "twenty-five", "Il a vingt-cinq ans."],
    ["trente", "thirty", "J'ai trente ans."],
    ["trente et un", "thirty-one", "Le trente et un décembre, c'est la fête !"],
    ["trente-quatre", "thirty-four", "Mon frère a trente-quatre ans."],
    ["quarante", "forty", "Il y a quarante élèves."],
    ["quarante et un", "forty-one", "Quarante et un euros, s'il vous plaît."],
    ["quarante-sept", "forty-seven", "La chambre quarante-sept est au quatrième étage."],
    ["cinquante", "fifty", "Mon père a cinquante ans."],
    ["cinquante-trois", "fifty-three", "Ma tante a cinquante-trois ans."],
    ["soixante", "sixty", "Ma mère a soixante ans aujourd'hui."],
    ["soixante et un", "sixty-one", "Il a soixante et un ans."],
    ["soixante-neuf", "sixty-nine", "Mon grand-père a soixante-neuf ans."],
    ["quel âge… ?", "how old…?", "Tu as quel âge ?"]
  ] });

  W.LESSONS.push(
  {
    id: 4, level: "A1", icon: "cake",
    title: "J'ai…: the verb avoir, your age and il y a", title_fr: "J'ai… : le verbe avoir, l'âge et il y a",
    subtitle: "To have: the second most useful verb, which French also uses for your age.", subtitle_fr: "Avoir : le deuxième verbe le plus utile, que le français utilise aussi pour l'âge.",
    body: `
<h2>Avoir (to have)</h2>
<table>
<tr><th>French</th><th>English</th></tr>
<tr><td><s-fr>j'ai</s-fr></td><td>I have (je becomes j' before a vowel)</td></tr>
<tr><td><s-fr>tu as</s-fr></td><td>you have (informal)</td></tr>
<tr><td><s-fr>il a</s-fr> · <s-fr>elle a</s-fr> · <s-fr>on a</s-fr></td><td>he has · she has · we have</td></tr>
<tr><td><s-fr>nous avons</s-fr></td><td>we have</td></tr>
<tr><td><s-fr>vous avez</s-fr></td><td>you have (formal or plural)</td></tr>
<tr><td><s-fr>ils ont</s-fr> · <s-fr>elles ont</s-fr></td><td>they have</td></tr>
</table>
<p>Listen carefully to <s-fr>ils ont</s-fr> (they have) and <s-fr>ils sont</s-fr> (they are): in <s-fr>ils ont</s-fr>, the s of ils sounds like z. That z is the only difference you hear!</p>
<h2>Your age: avoir, not être</h2>
<p>French says "I have thirty years": <s-fr>J'ai trente ans.</s-fr> Never <s-fr>Je suis trente.</s-fr> And always say <s-fr>ans</s-fr>, even when it's obvious: <s-fr>Il a huit ans.</s-fr></p>
<p>To ask: <s-fr>Tu as quel âge ?</s-fr> (informal) · <s-fr>Quel âge avez-vous ?</s-fr> (formal)</p>
<h2>The numbers from 21 to 69</h2>
<p><s-fr>vingt, trente, quarante, cinquante, soixante</s-fr>. For 21, 31, 41, 51 and 61, French says "and one": <s-fr>vingt et un</s-fr>, <s-fr>trente et un</s-fr>. The others take a hyphen: <s-fr>vingt-deux</s-fr>, <s-fr>quarante-cinq</s-fr>, <s-fr>soixante-neuf</s-fr>.</p>
<h2>Il y a: there is, there are</h2>
<p>One expression for both: <s-fr>Il y a un parc près de chez moi.</s-fr> (There's a park near my place.) · <s-fr>Il y a trois chambres.</s-fr> (There are three bedrooms.) In the negative, <s-fr>un</s-fr>, <s-fr>une</s-fr> and <s-fr>des</s-fr> become <s-fr>de</s-fr>: <s-fr>Il n'y a pas de jardin.</s-fr></p>
<div class="tip">Avoir appears in many expressions where English says "to be": <s-fr>avoir faim</s-fr> (to be hungry), <s-fr>avoir soif</s-fr> (to be thirsty), <s-fr>avoir froid</s-fr> (to be cold), <s-fr>avoir chaud</s-fr> (to be hot), <s-fr>avoir raison</s-fr> (to be right).</div>
`,
    examples: [
      ["J'ai deux frères.", "I have two brothers."],
      ["Tu as quel âge ?", "How old are you?"],
      ["Elle a trente-cinq ans.", "She's thirty-five."],
      ["Nous avons un chat.", "We have a cat."],
      ["Ils ont trois enfants.", "They have three children."],
      ["Il y a quatre personnes dans ma famille.", "There are four people in my family."],
      ["J'ai faim !", "I'm hungry!"],
      ["Il n'y a pas de jardin.", "There's no garden."]
    ],
    quiz: [
      { q: "Complete: “Vous ___ des enfants ?”", o: ["êtes", "avez", "ont"], a: 1, ex: "vous avez: you have." },
      { q: "How do you say “I'm 25”?", o: ["Je suis vingt-cinq ans.", "J'ai vingt-cinq.", "J'ai vingt-cinq ans."], a: 2, ex: "Age with avoir, and always say ans." },
      { q: "41 is…", o: ["quarante et un", "quarante-un", "quatorze et un"], a: 0, ex: "21, 31, 41, 51, 61: et un." },
      { q: "Between “ils ont” and “ils sont”, you hear…", o: ["no difference", "a z in ils ont, an s in ils sont", "a t in ils ont"], a: 1, ex: "ils ont: the s of ils is linked to the vowel and sounds like z." },
      { q: "“Il y a” means…", o: ["he has", "there is / there are", "he is there"], a: 1, ex: "il y a: there is, there are." }
    ]
  },
  {
    id: 5, level: "A1", icon: "book",
    title: "Un, une, le, la: gender and articles", title_fr: "Un, une, le, la : le genre et les articles",
    subtitle: "Every French noun is masculine or feminine: the article tells you which.", subtitle_fr: "Chaque nom français est masculin ou féminin : l'article te le dit.",
    body: `
<h2>Every noun has a gender</h2>
<p>In French, every noun is masculine or feminine, even things: <s-fr>le livre</s-fr> (the book) is masculine, <s-fr>la table</s-fr> (the table) is feminine. For most words there's no logic: learn every noun with its article. That's why the vocabulary of this course always gives it.</p>
<h2>The articles</h2>
<table>
<tr><th></th><th>Masculine</th><th>Feminine</th><th>Plural</th></tr>
<tr><td>a, an, some</td><td><s-fr>un</s-fr></td><td><s-fr>une</s-fr></td><td><s-fr>des</s-fr></td></tr>
<tr><td>the</td><td><s-fr>le</s-fr></td><td><s-fr>la</s-fr></td><td><s-fr>les</s-fr></td></tr>
</table>
<p>Before a vowel or a silent h, <s-fr>le</s-fr> and <s-fr>la</s-fr> become <s-fr>l'</s-fr>: <s-fr>l'ami</s-fr>, <s-fr>l'école</s-fr>, <s-fr>l'hôpital</s-fr>.</p>
<p><s-fr>des</s-fr> is the plural of <s-fr>un</s-fr> and <s-fr>une</s-fr>. English often says nothing: <s-fr>J'ai des amis à Paris.</s-fr> (I have friends in Paris.) In French, you can't leave it out.</p>
<h2>The plural</h2>
<p>Most nouns add -s, which is silent: <s-fr>le livre</s-fr>, <s-fr>les livres</s-fr>. You hear the plural on the article: le / les. Words in -eau add -x: <s-fr>un gâteau</s-fr>, <s-fr>des gâteaux</s-fr>. Words in -al become -aux: <s-fr>un journal</s-fr>, <s-fr>des journaux</s-fr>.</p>
<h2>Endings that help</h2>
<p>Often feminine: -tion (<s-fr>la question</s-fr>), -té (<s-fr>la liberté</s-fr>), -ure (<s-fr>la voiture</s-fr>), -ette (<s-fr>la baguette</s-fr>). Often masculine: -ment (<s-fr>le moment</s-fr>), -age (<s-fr>le fromage</s-fr>), -eau (<s-fr>le bureau</s-fr>). But there are exceptions: <s-fr>la plage</s-fr> (the beach), <s-fr>l'eau</s-fr> (water) are feminine.</p>
<div class="tip">French uses the article for things in general, where English uses nothing: <s-fr>J'aime le chocolat.</s-fr> (I like chocolate.) · <s-fr>Les chats sont indépendants.</s-fr> (Cats are independent.)</div>
`,
    examples: [
      ["C'est un livre.", "It's a book."],
      ["C'est une voiture.", "It's a car."],
      ["J'ai des amis à Lyon.", "I have friends in Lyon."],
      ["Le livre est sur la table.", "The book is on the table."],
      ["L'école est près de l'hôpital.", "The school is near the hospital."],
      ["Les enfants sont dans le jardin.", "The children are in the garden."],
      ["J'adore le fromage.", "I love cheese."],
      ["Deux gâteaux, s'il vous plaît.", "Two cakes, please."]
    ],
    quiz: [
      { q: "Complete: “___ école est grande.”", o: ["Le", "La", "L'"], a: 2, ex: "Before a vowel: l'." },
      { q: "“I have friends in Paris” is:", o: ["J'ai amis à Paris.", "J'ai des amis à Paris.", "J'ai les amis à Paris."], a: 1, ex: "des is needed: French can't leave out the article." },
      { q: "The plural of “un gâteau” is:", o: ["des gâteaux", "des gâteaus", "les gâteau"], a: 0, ex: "-eau → -eaux." },
      { q: "Which word is feminine?", o: ["fromage", "moment", "question"], a: 2, ex: "-tion is (nearly always) feminine: la question." },
      { q: "“I like chocolate” is:", o: ["J'aime chocolat.", "J'aime le chocolat.", "J'aime un chocolat."], a: 1, ex: "Things in general take le, la or les." }
    ]
  },
  {
    id: 6, level: "A1", icon: "users",
    title: "Mon, ma, mes: possessives", title_fr: "Mon, ma, mes : les possessifs",
    subtitle: "My, your, his, her…: the word changes with the thing you own, not with the owner.", subtitle_fr: "Mon, ton, son… : le mot change avec ce qu'on possède, pas avec le propriétaire.",
    body: `
<h2>The possessives</h2>
<table>
<tr><th></th><th>Masculine</th><th>Feminine</th><th>Plural</th></tr>
<tr><td>my</td><td><s-fr>mon</s-fr></td><td><s-fr>ma</s-fr></td><td><s-fr>mes</s-fr></td></tr>
<tr><td>your (tu)</td><td><s-fr>ton</s-fr></td><td><s-fr>ta</s-fr></td><td><s-fr>tes</s-fr></td></tr>
<tr><td>his, her, its</td><td><s-fr>son</s-fr></td><td><s-fr>sa</s-fr></td><td><s-fr>ses</s-fr></td></tr>
<tr><td>our</td><td colspan="2"><s-fr>notre</s-fr></td><td><s-fr>nos</s-fr></td></tr>
<tr><td>your (vous)</td><td colspan="2"><s-fr>votre</s-fr></td><td><s-fr>vos</s-fr></td></tr>
<tr><td>their</td><td colspan="2"><s-fr>leur</s-fr></td><td><s-fr>leurs</s-fr></td></tr>
</table>
<h2>The big trap: son and sa</h2>
<p>In English, "his" and "her" depend on the owner. In French, the possessive agrees with <b>the thing owned</b>: <s-fr>son frère</s-fr> means his brother or her brother; <s-fr>sa voiture</s-fr> means his car or her car. The context tells you who the owner is.</p>
<p>So Paul talking about his mother says <s-fr>sa mère</s-fr> (mère is feminine), and Léa talking about her father says <s-fr>son père</s-fr>.</p>
<h2>Before a vowel: mon, ton, son</h2>
<p>Before a feminine word starting with a vowel or a silent h, use <s-fr>mon</s-fr>, <s-fr>ton</s-fr>, <s-fr>son</s-fr>: it's easier to say. <s-fr>mon amie</s-fr> (my friend, a woman), <s-fr>ton école</s-fr>, <s-fr>son histoire</s-fr>.</p>
<div class="tip"><s-fr>chez</s-fr> means "at the home of": <s-fr>chez moi</s-fr> (at my place), <s-fr>chez mes parents</s-fr> (at my parents'), <s-fr>chez le médecin</s-fr> (at the doctor's).</div>
`,
    examples: [
      ["Voici mon frère et ma sœur.", "Here are my brother and my sister."],
      ["Ce sont mes parents.", "These are my parents."],
      ["Paul habite avec sa mère.", "Paul lives with his mother."],
      ["Léa adore son père.", "Léa loves her father."],
      ["C'est mon amie Inès.", "This is my friend Inès."],
      ["Notre maison est petite.", "Our house is small."],
      ["Vous avez vos clés ?", "Have you got your keys?"],
      ["Ils sont chez leurs grands-parents.", "They're at their grandparents'."]
    ],
    quiz: [
      { q: "Léa talks about her brother: “C'est ___ frère.”", o: ["sa", "son", "ses"], a: 1, ex: "frère is masculine: son, even if the owner is a woman." },
      { q: "Paul talks about his sister: “C'est ___ sœur.”", o: ["sa", "son", "sœur son"], a: 0, ex: "sœur is feminine: sa, even if the owner is a man." },
      { q: "“My friend Inès” is:", o: ["ma amie Inès", "mon amie Inès", "mes amie Inès"], a: 1, ex: "Before a vowel: mon, even for a feminine word." },
      { q: "“Their children” is:", o: ["leur enfants", "leurs enfants", "ses enfants"], a: 1, ex: "Several children: leurs." },
      { q: "“At my parents'” is:", o: ["chez mes parents", "à mes parents", "dans mes parents"], a: 0, ex: "chez = at someone's home." }
    ]
  },
  {
    id: 7, level: "A1", kind: "functional", icon: "heart",
    title: "Everyday French: talking about your family", title_fr: "Le français de tous les jours : parler de sa famille",
    subtitle: "Ask about someone's family, introduce people and say who's who.", subtitle_fr: "Poser des questions sur la famille de quelqu'un, présenter des gens et dire qui est qui.",
    body: `
<h2>Asking</h2>
<p><s-fr>Tu as des frères et sœurs ?</s-fr> (Do you have brothers and sisters?) · <s-fr>Tu es marié ?</s-fr> / <s-fr>Tu es mariée ?</s-fr> (Are you married?) · <s-fr>Vous avez des enfants ?</s-fr> (Do you have children?) · <s-fr>Il s'appelle comment ?</s-fr> · <s-fr>Elle a quel âge ?</s-fr> · <s-fr>Qu'est-ce qu'il fait ?</s-fr> (What does he do?)</p>
<h2>Answering</h2>
<table>
<tr><th>Situation</th><th>French</th></tr>
<tr><td>Brothers and sisters</td><td><s-fr>J'ai un frère et deux sœurs.</s-fr> · <s-fr>Je suis fils unique.</s-fr> · <s-fr>Je suis fille unique.</s-fr> (I'm an only child.)</td></tr>
<tr><td>Partner</td><td><s-fr>Je suis marié.</s-fr> · <s-fr>Je suis célibataire.</s-fr> · <s-fr>Je suis en couple.</s-fr> (I'm in a relationship.)</td></tr>
<tr><td>Children</td><td><s-fr>Oui, une fille de six ans.</s-fr> · <s-fr>Non, je n'ai pas d'enfants.</s-fr></td></tr>
</table>
<h2>Introducing people</h2>
<p><s-fr>Je te présente ma sœur, Inès.</s-fr> (informal) · <s-fr>Je vous présente mon mari.</s-fr> (formal) · <s-fr>Voici mon frère.</s-fr> (This is my brother.) · <s-fr>C'est mon fils.</s-fr></p>
<h2>A false friend</h2>
<p><s-fr>mes parents</s-fr> means my mother and father, but <s-fr>des parents</s-fr> can also mean relatives. To be precise: <s-fr>la famille</s-fr>, <s-fr>les cousins</s-fr>, <s-fr>les oncles et les tantes</s-fr>.</p>
<div class="tip">On French forms, the family name often comes first, in capitals: GARNIER Mathis. In conversation, the first name comes first, as in English.</div>
`,
    examples: [
      ["Tu as des frères et sœurs ?", "Do you have brothers and sisters?"],
      ["Je suis fille unique.", "I'm an only child. (a woman)"],
      ["Vous avez des enfants ?", "Do you have children?"],
      ["Oui, un garçon de dix ans.", "Yes, a ten-year-old boy."],
      ["Je te présente ma sœur, Inès.", "This is my sister, Inès."],
      ["Qu'est-ce qu'il fait ? — Il est infirmier.", "What does he do? — He's a nurse."],
      ["Je n'ai pas d'enfants.", "I don't have any children."]
    ],
    quiz: [
      { q: "“I'm an only child” (a man) is:", o: ["Je suis fils unique.", "Je suis un seul enfant.", "J'ai fils unique."], a: 0, ex: "fils unique / fille unique." },
      { q: "To introduce your sister to a friend, you say:", o: ["Je te présente ma sœur.", "Je présente toi ma sœur.", "Voilà à toi ma sœur."], a: 0, ex: "Je te présente… (informal), je vous présente… (formal)." },
      { q: "“Qu'est-ce qu'il fait ?” asks about…", o: ["his job", "his age", "his name"], a: 0, ex: "What does he do? = his job." },
      { q: "“I don't have any children” is:", o: ["Je n'ai pas des enfants.", "Je n'ai pas d'enfants.", "Je n'ai pas enfants."], a: 1, ex: "After ne… pas, des becomes de (d' before a vowel)." },
      { q: "“mes parents” usually means…", o: ["my relatives", "my mother and father", "my grandparents"], a: 1, ex: "mes parents = my parents; des parents can also mean relatives." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    4: {
      gap: [["Nous ___ un chien. (avoir)", "avons"], ["Ils ___ deux enfants. (avoir)", "ont"], ["Elle a trente-___ ans. (32)", "deux"], ["Il ___ a trois chambres. (there are)", "y"]],
      fix: [["Je suis vingt ans.", "J'ai vingt ans.", "Age with avoir: j'ai vingt ans."], ["Il y a pas un jardin.", "Il n'y a pas de jardin.", "Negative: ne… pas, and un becomes de."]],
      task: ["Write four sentences about the people in your family: their age, and what they have.", "Écris quatre phrases sur les gens de ta famille : leur âge, et ce qu'ils ont.", "Ma mère a cinquante-huit ans. Mon frère a trente et un ans et il a deux enfants. Mes grands-parents ont une maison à la campagne. Nous avons un chat, Milo."]
    },
    5: {
      gap: [["C'est ___ voiture de Paul. (the)", "la"], ["J'ai ___ amis à Lyon. (some)", "des"], ["___ hôpital est près d'ici. (the)", "L'"], ["J'adore ___ fromage. (cheese in general)", "le"]],
      fix: [["J'ai amis à Paris.", "J'ai des amis à Paris.", "French can't leave out the article: des amis."], ["La école est fermée.", "L'école est fermée.", "Before a vowel, la and le become l'."]],
      task: ["Describe what there is in your bag or on your desk, with un, une, des, le, la, les.", "Décris ce qu'il y a dans ton sac ou sur ton bureau, avec un, une, des, le, la, les.", "Dans mon sac, il y a un livre, des clés, une pomme et mon téléphone. Le livre est à ma sœur. Les clés sont à moi."]
    },
    6: {
      gap: [["Paul parle avec ___ mère. (his)", "sa"], ["Léa est avec ___ frère. (her)", "son"], ["C'est ___ amie Chloé. (my)", "mon"], ["Ils habitent chez ___ parents. (their)", "leurs"]],
      fix: [["Marie aime sa père.", "Marie aime son père.", "père is masculine: son, whoever the owner is."], ["C'est ma amie.", "C'est mon amie.", "Before a vowel, ma becomes mon."]],
      task: ["Present four people in a photo: who they are, and their link with you or with each other.", "Présente quatre personnes sur une photo : qui elles sont, et leur lien avec toi ou entre elles.", "Voici ma sœur, Lucie, avec son mari, Rémi. À côté, ce sont mes parents. Le petit garçon, c'est leur petit-fils, Arthur : mon neveu !"]
    },
    7: {
      gap: [["Tu as des frères et ___ ? (sisters)", "sœurs"], ["Je suis fille ___. (only)", "unique"], ["Je vous ___ mon mari. (to introduce)", "présente"], ["Qu'est-ce qu'il ___ ? — Il est médecin. (to do)", "fait"]],
      fix: [["Je n'ai pas des enfants.", "Je n'ai pas d'enfants.", "After ne… pas, des becomes de, or d' before a vowel."], ["Je présente toi ma sœur.", "Je te présente ma sœur.", "The pronoun goes before the verb: je te présente."]],
      task: ["Write a short dialogue in which two colleagues talk about their families.", "Écris un court dialogue où deux collègues parlent de leur famille.", "Tu as des enfants ? — Oui, deux : une fille de dix ans et un garçon de six ans. Et toi ? — Non, pas encore. Mais j'ai trois neveux ! — Ils ont quel âge ? — Deux ans : ce sont des triplés !"]
    }
  });

  W.ROLEPLAYS.push(
  { id: "collegue", lesson: 7, level: "A1", icon: "users", partner: "Nathalie", role: "a new colleague",
    title: "Talking about your family at lunch", title_fr: "Parler de sa famille au déjeuner",
    setting: "It's your first week in a new job. At lunch, your colleague Nathalie asks about your family.", setting_fr: "C'est ta première semaine dans un nouveau travail. Au déjeuner, ta collègue Nathalie te pose des questions sur ta famille.",
    turns: [
      { p: "Alors, tu es d'où ? Tu as de la famille ici ?", fr: "So, where are you from? Do you have any family here?" },
      { y: ["Je suis de Bristol, mais ma sœur habite à Lyon.", "Je suis de Bristol, mais mon sœur habite à Lyon.", "Je suis de Bristol, mais ma sœur habites à Lyon."], fr: "I'm from Bristol, but my sister lives in Lyon.", why: "Sœur is feminine: ma sœur. With elle, the verb ends in -e: habite." },
      { p: "Ah, c'est bien ! Elle a quel âge, ta sœur ?", fr: "Oh, that's nice! How old is your sister?" },
      { y: ["Elle a trente-deux ans.", "Elle est trente-deux ans.", "Elle a trente-deux."], fr: "She's thirty-two.", why: "Age with avoir, and always say ans." },
      { p: "Et toi, tu es en couple ?", fr: "And you, are you in a relationship?" },
      { y: ["Oui, mon copain s'appelle Daniel. Il est infirmier.", "Oui, mon copain s'appelle Daniel. Il est un infirmier.", "Oui, ma copain s'appelle Daniel. Il est infirmier."], fr: "Yes, my boyfriend is called Daniel. He's a nurse.", why: "Copain is masculine: mon copain. No article before a job." },
      { p: "Et vous avez des enfants ?", fr: "And do you have children?" },
      { y: ["Non, mais nous avons un chat !", "Non, mais nous sommes un chat !", "Non, mais nous avez un chat !"], fr: "No, but we have a cat!", why: "Avoir with nous: nous avons." },
      { p: "Moi aussi, j'ai un chat ! Il s'appelle Pacha. Tu veux voir une photo ?", fr: "Me too, I have a cat! He's called Pacha. Do you want to see a photo?" },
      { y: ["Oui, avec plaisir ! Il est très mignon !", "Oui, avec plaisir ! Elle est très mignon !", "Oui, avec plaisir ! Il est très mignonne !"], fr: "Yes, I'd love to! He's very cute!", why: "Un chat: il, and the adjective is masculine: mignon." }
    ] }
  );

  W.READINGS.push({
    id: "photofamille", level: "A1", icon: "camera", title: "Une photo de famille", genre: "Description",
    intro: "Inès describes a family photo taken on her mother's birthday. Avoir, possessives and ages.",
    intro_fr: "Inès décrit une photo de famille prise pour l'anniversaire de sa mère. Avoir, les possessifs et l'âge.",
    paragraphs: [
      { en: "Voici une photo de ma famille. C'est l'anniversaire de ma mère : elle a soixante ans ! Au centre, il y a mes parents, Sylvie et Bernard. Mon père a soixante-deux ans.", fr: "Here's a photo of my family. It's my mother's birthday: she's sixty! In the middle, there are my parents, Sylvie and Bernard. My father is sixty-two." },
      { en: "À gauche, c'est mon frère, Julien, avec sa femme, Amandine, et leurs deux enfants : Lucas, huit ans, et Zoé, cinq ans. Lucas adore son grand-père !", fr: "On the left, that's my brother, Julien, with his wife, Amandine, and their two children: Lucas, eight, and Zoé, five. Lucas loves his grandfather!" },
      { en: "À droite, c'est moi, avec mon copain, Rémi. Nous n'avons pas d'enfants, mais nous avons un chien, Biscuit. Il est sur la photo aussi, devant ma grand-mère.", fr: "On the right, that's me, with my boyfriend, Rémi. We don't have children, but we have a dog, Biscuit. He's in the photo too, in front of my grandmother." },
      { en: "Ma grand-mère s'appelle Jeanne. Elle est très contente : toute la famille est là, et il y a un énorme gâteau au chocolat !", fr: "My grandmother is called Jeanne. She's very happy: the whole family is there, and there's a huge chocolate cake!" }
    ],
    glossary: { "anniversaire": "birthday", "gauche": "left", "droite": "right", "femme": "wife", "copain": "boyfriend", "chien": "dog", "devant": "in front of", "toute": "the whole", "énorme": "huge", "gâteau": "cake", "adore": "loves" },
    questions: [
      { q: "Pourquoi la famille est ensemble ?", o: ["C'est l'anniversaire de la mère.", "C'est Noël.", "C'est un mariage."], a: 0 },
      { q: "Quel âge a le père d'Inès ?", o: ["Soixante ans", "Soixante-deux ans", "Cinquante-deux ans"], a: 1 },
      { q: "Qui est Julien ?", o: ["Le copain d'Inès", "Le frère d'Inès", "Le grand-père"], a: 1 },
      { q: "Julien a combien d'enfants ?", o: ["Deux", "Un", "Trois"], a: 0 },
      { q: "Qui est Biscuit ?", o: ["Le fils de Julien", "Le chien d'Inès et Rémi", "Le chat de la grand-mère"], a: 1 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-a1-2", unit: "a1-2", level: "A1", icon: "camera",
    title: "Des photos sur le téléphone", title_fr: "Des photos sur le téléphone",
    context: "At work, Sandrine shows photos of her family to her colleague Romain.", context_fr: "Au travail, Sandrine montre des photos de sa famille à son collègue Romain.",
    words: [["le garçon", "the boy"], ["seulement", "only"], ["pas encore", "not yet"], ["des triplés", "triplets"], ["en même temps", "at the same time"]],
    lines: [["Romain", "C'est qui, sur la photo ?", "fr-FR"], ["Sandrine", "C'est ma fille, Margaux. Elle a dix-neuf ans. Elle est étudiante à Toulouse.", "fr-FR"], ["Romain", "Elle est grande ! Et le garçon, à côté ?", "fr-FR"], ["Sandrine", "C'est mon fils, Hugo. Il a quinze ans. Il adore le foot.", "fr-FR"], ["Romain", "Tu as seulement deux enfants ?", "fr-FR"], ["Sandrine", "Oui, une fille et un garçon. Et toi, tu as des enfants ?", "fr-FR"], ["Romain", "Non, pas encore. Mais j'ai trois neveux ! Ma sœur a des triplés.", "fr-FR"], ["Sandrine", "Des triplés ? Trois bébés en même temps ? Ils ont quel âge ?", "fr-FR"], ["Romain", "Ils ont deux ans. Ma sœur est très fatiguée !", "fr-FR"], ["Sandrine", "J'imagine ! Tu l'aides un peu ?", "fr-FR"], ["Romain", "Oui, le dimanche, je vais chez elle avec mes parents.", "fr-FR"]],
    gist: ["De quoi parlent Sandrine et Romain ?", ["De leur famille", "De leur travail", "De leurs vacances"]],
    detail: [["Quel âge a Margaux ?", ["Dix-neuf ans", "Quinze ans", "Deux ans"]], ["Qu'est-ce que Hugo adore ?", ["Le foot", "La musique", "Les bébés"]], ["Romain a combien de neveux ?", ["Trois", "Deux", "Un"]], ["Quand est-ce que Romain va chez sa sœur ?", ["Le dimanche", "Le samedi", "Tous les jours"]]],
    decode: ["Elle a dix-neuf ans.", "Ma sœur a des triplés."],
    tip: "Ils ont (they have) and ils sont (they are) sound almost the same: in ils ont, the s of ils is linked to the vowel and sounds like z. Listen for that z.", tip_fr: "Ils ont et ils sont se ressemblent beaucoup : dans ils ont, le s de ils se lie à la voyelle et se prononce z. Guette ce z."
  }]);

  W.PROMPTS.push({ id: "fr-a1-2", level: "A1", q: "Parle de ta famille : qui sont les personnes, comment elles s'appellent, quel âge elles ont, ce qu'elles font.", fr: "Talk about your family: who they are, their names, their ages and what they do.", time: 90,
    phrases: ["Dans ma famille, nous sommes…", "Ma mère / mon père s'appelle…", "Il / elle a … ans", "Il / elle est + métier", "J'ai un frère / une sœur…"],
    model: "Dans ma famille, nous sommes cinq. Ma mère s'appelle Valérie, elle a cinquante-quatre ans et elle est professeure. Mon père, Olivier, est médecin. J'ai un frère, Maxime, et une sœur, Lucie. Maxime a vingt-huit ans, il habite à Lille. Lucie est étudiante. Nous avons aussi un chien, Câlin !" });

  W.WRITING_GUIDE["a1-2"] = { genre: "An email to a host family", genre_fr: "Un e-mail à une famille d'accueil",
    plan: [["Say hello.", "Dis bonjour."], ["Who you are: name, age, nationality, job.", "Qui tu es : nom, âge, nationalité, métier."], ["Your family, person by person.", "Ta famille, personne par personne."], ["A pet, or something you love.", "Un animal, ou quelque chose que tu aimes."], ["A friendly ending.", "Une fin chaleureuse."]],
    marks: [["j'ai vingt-six ans", "age with avoir", "l'âge avec avoir"], ["nous sommes quatre", "how many you are", "combien vous êtes"], ["mon père, Daniel, a cinquante-huit ans", "mon + masculine noun, and the age", "mon + nom masculin, et l'âge"], ["ma sœur, Louise,", "ma + feminine noun", "ma + nom féminin"], ["Nous avons aussi un chat", "avoir with nous", "avoir avec nous"], ["À bientôt,", "a friendly goodbye", "un au revoir amical"]] };

  W.COURSE.push({ id: "a1-2", level: "A1", icon: "users", title: "My family", title_fr: "Ma famille",
    intro: "In this unit, you'll talk about the people around you: the verb avoir (to have), your age, the gender of nouns, and the possessives, where French works very differently from English.",
    intro_fr: "Dans cette unité, tu vas parler des gens qui t'entourent : le verbe avoir, l'âge, le genre des noms, et les possessifs, qui fonctionnent très différemment de l'anglais.",
    can: ["Say how old you are and what you have (avoir)", "Use the right article: un, une, des, le, la, les", "Use the possessives (mon, ma, mes, son, sa…)", "Talk about your family and introduce people"],
    can_fr: ["Dire ton âge et ce que tu as (avoir)", "Utiliser le bon article : un, une, des, le, la, les", "Utiliser les possessifs (mon, ma, mes, son, sa…)", "Parler de ta famille et présenter des gens"],
    lessons: [4, 5, 6, 7], vocab: ["familleFR", "chosesFR", "nombres2FR"], reading: "photofamille", prompt: "fr-a1-2",
    writing: { task: "Your future host family in France asks you to introduce yourself and your family. Write them an email (60-80 words).", task_fr: "Ta future famille d'accueil en France te demande de te présenter et de présenter ta famille. Écris-lui un e-mail (60 à 80 mots).", words: "60-80",
      tips: ["Bonjour !", "J'ai … ans", "Dans ma famille, nous sommes…", "Mon père / ma mère / mes…", "À bientôt,"],
      checklist: ["I used avoir for age (j'ai… ans)", "Possessives agree with the noun (mon père, ma mère, mes parents)", "I used the right articles (un frère, une sœur)", "Numbers are written in words", "I stayed between 60 and 80 words"],
      model: "Bonjour !\n\nJe m'appelle Lucas, j'ai vingt-six ans et je suis anglais, de Leeds. Je suis cuisinier dans un restaurant. Dans ma famille, nous sommes quatre : mon père, Daniel, a cinquante-huit ans et il est professeur ; ma mère, Claire, est infirmière ; et ma sœur, Louise, est étudiante. Nous avons aussi un chat, Milo. Il a trois ans. J'adore la cuisine française et le cinéma !\n\nÀ bientôt,\nLucas" } });
})();
