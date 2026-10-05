/* Cours de français, unité A1-1 « Hello! / Bonjour ! » : saluer, tu ou vous, le verbe être, les nationalités
   et les métiers, épeler, les nombres de 0 à 20. Explications en anglais (la langue de l'apprenant), tout le reste
   en français. Personnages fictifs, prénoms français. Faits vérifiables seulement : bonjour en entrant dans un
   commerce, la bise selon les régions, numéros de portable en 06 et 07 dits par paires, le 14 juillet. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "essentielsFR", icon: "hand", title: "The essentials", title_fr: "Les indispensables", level: "A1", words: [
    ["bonjour", "hello, good morning", "Bonjour, madame !"],
    ["bonsoir", "good evening", "Bonsoir, tout le monde !"],
    ["salut", "hi, bye (informal)", "Salut, Hugo ! Ça va ?"],
    ["au revoir", "goodbye", "Au revoir et merci !"],
    ["à bientôt", "see you soon", "À bientôt, Léa !"],
    ["à demain", "see you tomorrow", "Bonne soirée, à demain !"],
    ["merci", "thank you", "Merci, monsieur."],
    ["merci beaucoup", "thank you very much", "Merci beaucoup pour le café !"],
    ["s'il vous plaît", "please (formal)", "Un café, s'il vous plaît."],
    ["s'il te plaît", "please (informal)", "Un verre d'eau, s'il te plaît."],
    ["de rien", "you're welcome", "Merci ! — De rien."],
    ["pardon", "sorry, excuse me", "Pardon, madame !"],
    ["excusez-moi", "excuse me (formal)", "Excusez-moi, où est la gare ?"],
    ["oui", "yes", "Oui, je suis française."],
    ["non", "no", "Non, je ne suis pas étudiant."],
    ["d'accord", "OK, all right", "D'accord, à demain !"],
    ["enchanté", "nice to meet you (enchantée when you're a woman)", "Enchantée, Thomas !"],
    ["ça va ?", "how are you? (informal)", "Salut, ça va ?"],
    ["bonne journée", "have a nice day", "Merci, bonne journée !"]
  ] },
  { id: "paysFR", icon: "globe", title: "Countries and nationalities", title_fr: "Pays et nationalités", level: "A1", words: [
    ["la France", "France", "J'habite en France."],
    ["français / française", "French (m) / French (f)", "Elle est française."],
    ["l'Angleterre", "England", "Londres est en Angleterre."],
    ["anglais / anglaise", "English (m) / English (f)", "Emma est anglaise."],
    ["le Royaume-Uni", "the United Kingdom", "Édimbourg est au Royaume-Uni."],
    ["l'Écosse", "Scotland", "Édimbourg est en Écosse."],
    ["écossais / écossaise", "Scottish (m) / Scottish (f)", "Il est écossais."],
    ["l'Irlande", "Ireland", "Dublin est en Irlande."],
    ["irlandais / irlandaise", "Irish (m) / Irish (f)", "Je suis irlandaise."],
    ["les États-Unis", "the United States", "Ils habitent aux États-Unis."],
    ["américain / américaine", "American (m) / American (f)", "Mon collègue est américain."],
    ["le Canada", "Canada", "Montréal est au Canada."],
    ["canadien / canadienne", "Canadian (m) / Canadian (f)", "Julie est canadienne."],
    ["l'Australie", "Australia", "Sydney est en Australie."],
    ["australien / australienne", "Australian (m) / Australian (f)", "Il est australien."],
    ["belge", "Belgian", "Elles sont belges."],
    ["la Belgique", "Belgium", "Bruxelles est en Belgique."],
    ["suisse", "Swiss", "Paul est suisse."],
    ["la Suisse", "Switzerland", "Genève est en Suisse."],
    ["espagnol / espagnole", "Spanish (m) / Spanish (f)", "Mon amie est espagnole."],
    ["l'Espagne", "Spain", "Madrid est en Espagne."]
  ] },
  { id: "metiersFR", icon: "briefcase", title: "Jobs", title_fr: "Les métiers", level: "A1", words: [
    ["un étudiant / une étudiante", "a student (m) / a student (f)", "Je suis étudiante à Paris."],
    ["un professeur / une professeure", "a teacher (m) / a teacher (f)", "Il est professeur de maths."],
    ["un médecin", "a doctor", "Elle est médecin."],
    ["un infirmier / une infirmière", "a nurse (m) / a nurse (f)", "Je suis infirmière."],
    ["un ingénieur / une ingénieure", "an engineer (m) / an engineer (f)", "Karim est ingénieur."],
    ["un avocat / une avocate", "a lawyer (m) / a lawyer (f)", "Mon père est avocat."],
    ["un serveur / une serveuse", "a waiter / a waitress", "Le serveur est sympa."],
    ["un vendeur / une vendeuse", "a shop assistant (m) / a shop assistant (f)", "Elle est vendeuse dans une boutique."],
    ["un cuisinier / une cuisinière", "a cook (m) / a cook (f)", "Il est cuisinier dans un restaurant."],
    ["un acteur / une actrice", "an actor / an actress", "C'est une actrice célèbre."],
    ["un musicien / une musicienne", "a musician (m) / a musician (f)", "Je suis musicienne."],
    ["un architecte", "an architect", "Elle est architecte."],
    ["un journaliste", "a journalist", "Il est journaliste à la radio."],
    ["un développeur / une développeuse", "a developer (m) / a developer (f)", "Je suis développeuse web."],
    ["un retraité / une retraitée", "a retired man / a retired woman", "Mes parents sont retraités."],
    ["travailler", "to work", "Je travaille à Lyon."],
    ["un hôpital", "a hospital", "Elle travaille à l'hôpital."],
    ["une école", "a school", "Il est professeur dans une école."],
    ["un bureau", "an office; a desk", "Je travaille dans un bureau."]
  ] },
  { id: "nombresFR", icon: "calculator", title: "Numbers from 0 to 20", title_fr: "Les nombres de 0 à 20", level: "A1", words: [
    ["zéro", "zero", "Mon numéro commence par zéro six."],
    ["un / une", "one", "J'ai un frère et une sœur."],
    ["deux", "two", "Deux cafés, s'il vous plaît."],
    ["trois", "three", "Nous sommes trois."],
    ["quatre", "four", "Il y a quatre chambres."],
    ["cinq", "five", "Cinq euros, s'il vous plaît."],
    ["six", "six (the x sounds like s)", "Il y a six étudiants."],
    ["sept", "seven", "Le magasin ouvre à sept heures."],
    ["huit", "eight", "Chambre huit, au premier étage."],
    ["neuf", "nine", "Il est neuf heures."],
    ["dix", "ten", "Dix minutes, s'il vous plaît."],
    ["onze", "eleven", "Le bus onze va à la gare."],
    ["douze", "twelve", "Douze œufs, s'il vous plaît."],
    ["treize", "thirteen", "Elle a treize ans."],
    ["quatorze", "fourteen", "Le quatorze juillet, c'est la fête nationale."],
    ["quinze", "fifteen", "Quinze étudiants sont là."],
    ["seize", "sixteen", "Il a seize ans."],
    ["dix-sept", "seventeen", "Rendez-vous à dix-sept heures."],
    ["dix-huit", "eighteen", "La chambre dix-huit est libre."],
    ["dix-neuf", "nineteen", "Dix-neuf euros, c'est cher !"],
    ["vingt", "twenty", "C'est à vingt minutes à pied."]
  ] });

  W.LESSONS.push(
  {
    id: 1, level: "A1", kind: "functional", icon: "hand",
    title: "Everyday French: hello, goodbye, tu or vous?", title_fr: "Le français de tous les jours : saluer, tu ou vous ?",
    subtitle: "Greet people at any time of day, introduce yourself and choose between tu and vous.", subtitle_fr: "Saluer à tout moment de la journée, te présenter et choisir entre tu et vous.",
    body: `
<h2>Saying hello</h2>
<table>
<tr><th>French</th><th>When</th></tr>
<tr><td><s-fr>Bonjour !</s-fr></td><td>Hello, good morning, good afternoon: all day, to everyone.</td></tr>
<tr><td><s-fr>Bonsoir !</s-fr></td><td>Good evening: from about 6 pm.</td></tr>
<tr><td><s-fr>Salut !</s-fr></td><td>Hi, or bye: only with friends and family.</td></tr>
</table>
<p>In France, people say <s-fr>Bonjour</s-fr> when they walk into a shop, a bakery or a waiting room, and often add <s-fr>monsieur</s-fr> or <s-fr>madame</s-fr>. Not saying it sounds rude: it may be the most important word of the language!</p>
<h2>Saying goodbye</h2>
<p><s-fr>Au revoir !</s-fr> (goodbye) · <s-fr>À bientôt !</s-fr> (see you soon) · <s-fr>À demain !</s-fr> (see you tomorrow) · <s-fr>Bonne journée !</s-fr> (have a nice day) · <s-fr>Bonne soirée !</s-fr> (have a nice evening)</p>
<h2>Tu or vous?</h2>
<p>French has two words for "you". <s-fr>tu</s-fr> is for one person you know well: friends, family, children, and often colleagues of your age. <s-fr>vous</s-fr> is for one person you don't know, someone older, or anyone in a formal situation (a shop, an office, a hotel), and it is <b>always</b> the word for several people.</p>
<p>Not sure? Use <s-fr>vous</s-fr>. The other person may then suggest: <s-fr>On peut se tutoyer ?</s-fr> (Shall we say tu?)</p>
<table>
<tr><th></th><th>With tu</th><th>With vous</th></tr>
<tr><td>How are you?</td><td><s-fr>Ça va ?</s-fr></td><td><s-fr>Comment allez-vous ?</s-fr></td></tr>
<tr><td>What's your name?</td><td><s-fr>Tu t'appelles comment ?</s-fr></td><td><s-fr>Vous vous appelez comment ?</s-fr></td></tr>
<tr><td>And you?</td><td><s-fr>Et toi ?</s-fr></td><td><s-fr>Et vous ?</s-fr></td></tr>
</table>
<h2>Answering, and saying who you are</h2>
<p><s-fr>Ça va bien, merci.</s-fr> · <s-fr>Très bien, merci.</s-fr> · <s-fr>Pas mal.</s-fr> (not bad) · <s-fr>Je m'appelle Léa.</s-fr> (my name is Léa: literally, I call myself Léa) · <s-fr>Moi, c'est Hugo.</s-fr> (I'm Hugo) · <s-fr>Enchanté !</s-fr> (nice to meet you: a woman writes <s-fr>Enchantée !</s-fr>, with the same pronunciation)</p>
<div class="tip">Friends and family in France often greet each other with <s-fr>la bise</s-fr>: a light kiss on each cheek. How many kisses depends on the region! At work, people usually shake hands.</div>
`,
    examples: [
      ["Bonjour, madame !", "Hello! (to a woman)"],
      ["Salut, ça va ?", "Hi, how are you?"],
      ["Ça va bien, merci. Et toi ?", "I'm fine, thanks. And you?"],
      ["Comment allez-vous ?", "How are you? (formal)"],
      ["Je m'appelle Thomas. Et vous ?", "My name is Thomas. And you?"],
      ["Enchantée !", "Nice to meet you! (said by a woman)"],
      ["Au revoir, à demain !", "Goodbye, see you tomorrow!"]
    ],
    quiz: [
      { q: "You walk into a bakery at 10 am. You say:", o: ["Salut !", "Bonjour !", "Bonsoir !"], a: 1, ex: "Bonjour is for everyone, all day long. Salut is only for friends." },
      { q: "You speak to your new boss for the first time. Which question?", o: ["Ça va, toi ?", "Tu t'appelles comment ?", "Comment allez-vous ?"], a: 2, ex: "Someone you don't know, in a formal situation: vous." },
      { q: "You speak to two friends at the same time. You use:", o: ["vous", "tu", "toi"], a: 0, ex: "For several people, it's always vous, even with friends." },
      { q: "“Je m'appelle Hugo” means:", o: ["I'm calling Hugo.", "My name is Hugo.", "I'm looking for Hugo."], a: 1, ex: "s'appeler = to be called: je m'appelle = my name is." },
      { q: "A woman writes “nice to meet you”:", o: ["Enchanté.", "Enchantes.", "Enchantée."], a: 2, ex: "A woman adds -e: enchantée. The pronunciation doesn't change." }
    ]
  },
  {
    id: 2, level: "A1", icon: "user-round",
    title: "Je suis…: the verb être and the subject pronouns", title_fr: "Je suis… : le verbe être et les pronoms sujets",
    subtitle: "To be: the verb you need to say who you are, where you're from and what you do.", subtitle_fr: "Être : le verbe pour dire qui tu es, d'où tu viens et ce que tu fais.",
    body: `
<h2>Être (to be)</h2>
<table>
<tr><th>French</th><th>English</th></tr>
<tr><td><s-fr>je suis</s-fr></td><td>I am</td></tr>
<tr><td><s-fr>tu es</s-fr></td><td>you are (one person, informal)</td></tr>
<tr><td><s-fr>il est</s-fr> · <s-fr>elle est</s-fr> · <s-fr>on est</s-fr></td><td>he is · she is · we are (informal)</td></tr>
<tr><td><s-fr>nous sommes</s-fr></td><td>we are</td></tr>
<tr><td><s-fr>vous êtes</s-fr></td><td>you are (formal, or several people)</td></tr>
<tr><td><s-fr>ils sont</s-fr> · <s-fr>elles sont</s-fr></td><td>they are</td></tr>
</table>
<h2>Three things English speakers need to know</h2>
<p><b>1. On = we.</b> In everyday French, people say <s-fr>on est</s-fr> much more than <s-fr>nous sommes</s-fr>: <s-fr>On est à Paris.</s-fr> (We're in Paris.) The verb is the same as with <s-fr>il</s-fr>.</p>
<p><b>2. Ils or elles?</b> <s-fr>elles</s-fr> is only for a group of women, or of feminine things. A mixed group is <s-fr>ils</s-fr>, even if there is one man among ten women.</p>
<p><b>3. Linking.</b> A silent final consonant can come alive before a vowel: in <s-fr>vous êtes</s-fr>, the s of vous sounds like z, and in <s-fr>c'est un ami</s-fr>, the t of est is pronounced. This is called <b>liaison</b>.</p>
<h2>Nationalities and jobs</h2>
<p>Nationalities change with the person: <s-fr>Il est français.</s-fr> · <s-fr>Elle est française.</s-fr> For a woman, add <b>-e</b>, and the final consonant is now pronounced. Some nationalities already end in -e and don't change: <s-fr>belge</s-fr>, <s-fr>suisse</s-fr>. Others change more: <s-fr>canadien</s-fr> → <s-fr>canadienne</s-fr>.</p>
<p>No capital letter for the adjective: <s-fr>Elle est anglaise.</s-fr> The capital is only for the people: <s-fr>les Anglais</s-fr> (the English).</p>
<p><b>The big trap:</b> no article before a job after <s-fr>être</s-fr>: <s-fr>Je suis infirmière.</s-fr> (I'm a nurse.) But with <s-fr>c'est</s-fr>, you need one: <s-fr>C'est une infirmière.</s-fr> (She's a nurse.)</p>
<div class="tip">To say "not", put <s-fr>ne… pas</s-fr> around the verb: <s-fr>Je ne suis pas français.</s-fr> Before a vowel, ne becomes n': <s-fr>Elle n'est pas là.</s-fr></div>
`,
    examples: [
      ["Je suis anglaise.", "I'm English. (a woman)"],
      ["Tu es d'où ?", "Where are you from?"],
      ["Il est médecin à Lyon.", "He's a doctor in Lyon."],
      ["On est en retard !", "We're late!"],
      ["Nous sommes canadiens.", "We're Canadian."],
      ["Vous êtes professeur ?", "Are you a teacher?"],
      ["Elles sont belges.", "They're Belgian. (women)"],
      ["Je ne suis pas français, je suis irlandais.", "I'm not French, I'm Irish."]
    ],
    quiz: [
      { q: "Complete: “Nous ___ à Bordeaux.”", o: ["sont", "sommes", "êtes"], a: 1, ex: "nous sommes." },
      { q: "Paul and Marie are Swiss: “___ sont suisses.”", o: ["Elles", "On", "Ils"], a: 2, ex: "A mixed group: ils." },
      { q: "Which sentence is correct?", o: ["Je suis infirmier.", "Je suis un infirmier.", "Je suis infirmier un."], a: 0, ex: "No article before a job after être." },
      { q: "Emma is from London: “Elle est ___.”", o: ["anglais", "anglaise", "Anglaise"], a: 1, ex: "-e for a woman, and no capital letter for the adjective." },
      { q: "“On est prêts” means:", o: ["We're ready.", "One is ready.", "They're ready."], a: 0, ex: "In everyday French, on = we." }
    ]
  },
  {
    id: 3, level: "A1", kind: "functional", icon: "spell-check",
    title: "Everyday French: spelling and the numbers from 0 to 20", title_fr: "Le français de tous les jours : épeler et compter de 0 à 20",
    subtitle: "Spell your name, give a phone number the French way and count to twenty.", subtitle_fr: "Épeler ton nom, donner un numéro de téléphone à la française et compter jusqu'à vingt.",
    body: `
<h2>The alphabet</h2>
<p>French letters have their own names. The ones that surprise English speakers most: <s-fr>E</s-fr> (sounds like "uh"), <s-fr>I</s-fr> (sounds like "ee"), <s-fr>G</s-fr> and <s-fr>J</s-fr> (almost the opposite of English: G sounds like "zhay", J like "zhee"), <s-fr>R</s-fr> (said at the back of the throat), <s-fr>U</s-fr> (say "ee" with rounded lips), <s-fr>W</s-fr> (<s-fr>double v</s-fr>), <s-fr>Y</s-fr> (<s-fr>i grec</s-fr>, "Greek i").</p>
<h2>Accents</h2>
<table>
<tr><th>Sign</th><th>Name</th><th>Example</th></tr>
<tr><td>é</td><td><s-fr>accent aigu</s-fr></td><td><s-fr>café</s-fr></td></tr>
<tr><td>è</td><td><s-fr>accent grave</s-fr></td><td><s-fr>mère</s-fr></td></tr>
<tr><td>ê</td><td><s-fr>accent circonflexe</s-fr></td><td><s-fr>fête</s-fr></td></tr>
<tr><td>ç</td><td><s-fr>c cédille</s-fr></td><td><s-fr>français</s-fr></td></tr>
<tr><td>ë</td><td><s-fr>tréma</s-fr></td><td><s-fr>Noël</s-fr></td></tr>
</table>
<p>For a double letter, say <s-fr>deux</s-fr>: Pellerin is spelled <s-fr>P, E, deux L, E, R, I, N</s-fr>.</p>
<h2>Numbers from 0 to 20</h2>
<p><s-fr>zéro, un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix</s-fr></p>
<p><s-fr>onze, douze, treize, quatorze, quinze, seize, dix-sept, dix-huit, dix-neuf, vingt</s-fr></p>
<p>From 17 to 19, French says "ten-seven, ten-eight, ten-nine": <s-fr>dix-sept</s-fr>, <s-fr>dix-huit</s-fr>, <s-fr>dix-neuf</s-fr>. Careful with <s-fr>quatorze</s-fr> (14) and <s-fr>quarante</s-fr> (40, in the next unit).</p>
<h2>Phone numbers</h2>
<p>French phone numbers have ten digits and are said in pairs: 06 12 15 18 20 → <s-fr>zéro six, douze, quinze, dix-huit, vingt</s-fr>. Mobile numbers start with 06 or 07.</p>
<div class="tip">Useful questions: <s-fr>Vous pouvez épeler, s'il vous plaît ?</s-fr> (Can you spell it, please?) · <s-fr>Quel est votre numéro de téléphone ?</s-fr> (What's your phone number?) · <s-fr>Vous pouvez répéter ?</s-fr> (Can you say that again?)</div>
`,
    examples: [
      ["Vous pouvez épeler, s'il vous plaît ?", "Can you spell it, please?"],
      ["Martin : M, A, R, T, I, N.", "Martin: M, A, R, T, I, N."],
      ["Il y a deux L.", "There are two Ls."],
      ["Mon numéro, c'est le zéro six, douze, quinze, dix-huit, vingt.", "My number is 06 12 15 18 20."],
      ["Il y a quinze étudiants.", "There are fifteen students."],
      ["Vous pouvez répéter, s'il vous plaît ?", "Can you say that again, please?"],
      ["Café, avec un accent aigu.", "Café, with an acute accent."]
    ],
    quiz: [
      { q: "How do you say 16?", o: ["six", "seize", "soixante"], a: 1, ex: "16 = seize. Soixante is 60." },
      { q: "In French, the letter G sounds a bit like the English letter…", o: ["J", "G", "H"], a: 0, ex: "G and J are almost swapped: French G sounds like “zhay”, French J like “zhee”." },
      { q: "A French mobile number starts with…", o: ["01", "06 or 07", "44"], a: 1, ex: "Mobile numbers start with 06 or 07." },
      { q: "You ask a customer to spell their name. You say:", o: ["Vous pouvez épeler, s'il vous plaît ?", "Tu peux épeler ?", "Vous épelez ?"], a: 0, ex: "With a customer, use vous, and add s'il vous plaît." },
      { q: "ç is called…", o: ["c tréma", "c accent", "c cédille"], a: 2, ex: "ç = c cédille, as in français." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    1: {
      gap: [["___, madame ! (hello)", "Bonjour"], ["Comment ___-vous ? (how are you, formal)", "allez"], ["Tu t'___ comment ? (to be called)", "appelles"], ["Ça va bien, merci. Et ___ ? (you, informal)", "toi"]],
      fix: [["Salut, monsieur ! Comment allez-vous ?", "Bonjour, monsieur ! Comment allez-vous ?|Bonjour monsieur ! Comment allez-vous ?", "Salut is only for friends: with vous, say bonjour."], ["Je suis appelle Léa.", "Je m'appelle Léa.", "Je m'appelle: literally, I call myself. No suis."]],
      task: ["Write a short dialogue (4 lines) in which you meet a neighbour for the first time.", "Écris un court dialogue (4 répliques) où tu rencontres un voisin pour la première fois.", "Bonjour ! Je m'appelle Hugo. — Bonjour, Hugo ! Moi, c'est Sarah. Enchantée ! — Enchanté ! Comment allez-vous ? — Très bien, merci. Et vous ?"]
    },
    2: {
      gap: [["Je ___ irlandaise. (être)", "suis"], ["Vous ___ médecin ? (être)", "êtes"], ["Paul et Léa ___ suisses. (être)", "sont"], ["Elle est ___. (French)", "française"]],
      fix: [["Je suis un professeur.", "Je suis professeur.", "No article before a job after être."], ["Elle est Anglaise.", "Elle est anglaise.", "No capital letter for a nationality adjective."]],
      task: ["Write four sentences about you and people you know: nationality and job.", "Écris quatre phrases sur toi et des gens que tu connais : nationalité et métier.", "Je suis américaine et je suis architecte. Mon ami Karim est français : il est médecin. Mes collègues sont canadiens. On est très contents à Lyon !"]
    },
    3: {
      gap: [["Vous pouvez ___, s'il vous plaît ? (to spell)", "épeler"], ["7 + 8 = ___", "quinze"], ["10 + 10 = ___", "vingt"], ["Café s'écrit avec un accent ___. (acute)", "aigu"]],
      fix: [["Je suis seize ans.", "J'ai seize ans.", "For your age, French uses avoir (to have): j'ai seize ans."], ["Mon numéro, c'est le zéro six, dix-six, onze, quatorze, vingt.", "Mon numéro, c'est le zéro six, seize, onze, quatorze, vingt.", "16 is seize: dix- only starts at 17 (dix-sept)."]],
      task: ["Spell your first name in French, then give a phone number in pairs (you can invent one).", "Épelle ton prénom, puis donne un numéro de téléphone par paires (tu peux l'inventer).", "Je m'appelle Chloé : C, H, L, O, E accent aigu. Mon numéro, c'est le zéro sept, onze, quatorze, dix-neuf, douze."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "voisine", lesson: 1, level: "A1", icon: "hand", partner: "Chloé", role: "your new neighbour",
    title: "Meeting a new neighbour", title_fr: "Rencontrer une nouvelle voisine",
    setting: "You meet your new neighbour, Chloé, on the stairs. You don't know each other yet.", setting_fr: "Tu croises ta nouvelle voisine, Chloé, dans l'escalier. Vous ne vous connaissez pas encore.",
    turns: [
      { p: "Bonjour ! Vous habitez ici ?", fr: "Hello! Do you live here?" },
      { y: ["Bonjour ! Oui, au troisième étage. Je m'appelle Alex.", "Salut ! Oui, au troisième étage. Je suis appelle Alex.", "Bonjour ! Oui, au troisième étage. Mon nom s'appelle Alex."], fr: "Hello! Yes, on the third floor. My name is Alex.", why: "Bonjour with someone you don't know; je m'appelle, without suis. Mon nom s'appelle doesn't exist." },
      { p: "Enchantée, Alex ! Moi, c'est Chloé. Vous êtes français ?", fr: "Nice to meet you, Alex! I'm Chloé. Are you French?" },
      { y: ["Enchanté ! Non, je suis anglais. Je suis professeur.", "Enchanté ! Non, je suis Anglais. Je suis un professeur.", "Enchanté ! Non, je ne suis anglais. Je suis professeur."], fr: "Nice to meet you! No, I'm English. I'm a teacher.", why: "No capital for a nationality, no article before a job, and ne… pas goes around the verb." },
      { p: "Ah, super ! Moi, je suis infirmière. Comment allez-vous ? Le déménagement, ça va ?", fr: "Oh, great! I'm a nurse. How are you? Is the move going OK?" },
      { y: ["Ça va bien, merci ! Un peu fatigué. Et vous ?", "Ça va bien, merci ! Un peu fatigué. Et tu ?", "Ça va bien, merci ! Un peu fatigué. Et toi ?"], fr: "I'm fine, thanks! A bit tired. And you?", why: "Chloé says vous, so you answer with vous. Et tu doesn't exist: it's et toi." },
      { p: "Très bien, merci. On peut se tutoyer, non ? On est voisins !", fr: "Very well, thanks. We can say tu, can't we? We're neighbours!" },
      { y: ["Oui, bien sûr ! Tu es d'où, Chloé ?", "Oui, bien sûr ! Tu êtes d'où, Chloé ?", "Oui, bien sûr ! Vous êtes d'où, Chloé ?"], fr: "Yes, of course! Where are you from, Chloé?", why: "Now it's tu: tu es. Tu êtes mixes tu and vous." },
      { p: "Je suis de Marseille. Bon, à bientôt, Alex ! Bonne soirée !", fr: "I'm from Marseille. Well, see you soon, Alex! Have a nice evening!" },
      { y: ["Merci, toi aussi ! À bientôt !", "Merci, vous aussi ! À bientôt !", "Merci, tu aussi ! À bientôt !"], fr: "Thanks, you too! See you soon!", why: "You now say tu to each other: toi aussi. Tu aussi doesn't exist." }
    ] },
  { id: "escalade", lesson: 3, level: "A1", icon: "mountain", partner: "Bastien", role: "a receptionist at a climbing club",
    title: "Signing up at a climbing club", title_fr: "S'inscrire au club d'escalade",
    setting: "You want to join a climbing club in Lyon. Bastien, at the reception desk, fills in your form.", setting_fr: "Tu veux t'inscrire dans un club d'escalade à Lyon. Bastien, à l'accueil, remplit ton formulaire.",
    turns: [
      { p: "Bonjour ! C'est pour une inscription ?", fr: "Hello! Is it to sign up?" },
      { y: ["Oui, bonjour ! Je voudrais m'inscrire, s'il vous plaît.", "Oui, salut ! Je voudrais m'inscrire, s'il te plaît.", "Oui, bonjour ! Je voudrais inscrire moi, s'il vous plaît."], fr: "Yes, hello! I'd like to sign up, please.", why: "At a reception desk: bonjour and s'il vous plaît. With je, s'inscrire becomes m'inscrire." },
      { p: "Très bien. Vous vous appelez comment ?", fr: "Very good. What's your name?" },
      { y: ["Je m'appelle Julie Pellerin.", "Je suis appelle Julie Pellerin.", "Je m'appelles Julie Pellerin."], fr: "My name is Julie Pellerin.", why: "Je m'appelle, with -e: the -es ending is for tu." },
      { p: "Pellerin… Vous pouvez épeler, s'il vous plaît ?", fr: "Pellerin… Can you spell it, please?" },
      { y: ["Oui : P, E, deux L, E, R, I, N.", "Oui : P, I, deux L, E, R, I, N.", "Oui : P, E, L, deux E, R, I, N."], fr: "Yes: P, E, double L, E, R, I, N.", why: "The French E sounds like “uh”, the I like “ee”. For a double letter: deux L." },
      { p: "Merci. Et votre numéro de téléphone ?", fr: "Thank you. And your phone number?" },
      { y: ["C'est le zéro six, dix-sept, onze, quatorze, vingt.", "C'est le zéro six, dix-sept, un, un, quatorze, vingt.", "C'est le zéro six, dix-sept, onze, quarante, vingt."], fr: "It's 06 17 11 14 20.", why: "In pairs: 11 is onze, 14 is quatorze (quarante is 40)." },
      { p: "Parfait. Vous êtes française ?", fr: "Perfect. Are you French?" },
      { y: ["Non, je suis canadienne, de Toronto.", "Non, je suis canadien, de Toronto.", "Non, je suis une canadienne, de Toronto."], fr: "No, I'm Canadian, from Toronto.", why: "A woman: canadienne. No article with a nationality after être." },
      { p: "D'accord. Voilà, c'est fini ! Bienvenue au club !", fr: "OK. There you go, all done! Welcome to the club!" },
      { y: ["Merci beaucoup ! Bonne journée !", "Merci beaucoup ! Bon journée !", "Merci beaucoup ! Bonne jour !"], fr: "Thank you very much! Have a nice day!", why: "Journée is feminine: bonne journée." }
    ] }
  );

  W.READINGS.push({
    id: "jemappelle", level: "A1", icon: "user-round", title: "Je m'appelle Léa", genre: "Personal story",
    intro: "Léa introduces herself and her friends. The verb être, nationalities and jobs.",
    intro_fr: "Léa se présente, puis présente ses amis. Le verbe être, les nationalités et les métiers.",
    paragraphs: [
      { en: "Bonjour ! Je m'appelle Léa. Je suis française, de Lyon, mais j'habite à Bordeaux. Je suis professeure de musique dans une école.", fr: "Hello! My name is Léa. I'm French, from Lyon, but I live in Bordeaux. I'm a music teacher in a school." },
      { en: "Mon ami Karim est marocain. Il est cuisinier dans un restaurant près de la gare. Il est très drôle !", fr: "My friend Karim is Moroccan. He's a cook in a restaurant near the station. He's very funny!" },
      { en: "Ma colocataire s'appelle Emma. Elle n'est pas française : elle est anglaise, de Manchester. Elle est étudiante à l'université.", fr: "My flatmate is called Emma. She isn't French: she's English, from Manchester. She's a student at the university." },
      { en: "Le samedi, on est souvent ensemble au café. Emma parle anglais, Karim parle arabe et français, et moi, je parle un peu espagnol. Nous sommes trois amis, et nous parlons quatre langues !", fr: "On Saturdays, we're often together at the café. Emma speaks English, Karim speaks Arabic and French, and I speak a little Spanish. We're three friends, and we speak four languages!" }
    ],
    glossary: { "habite": "live", "école": "school", "cuisinier": "cook", "près": "near", "gare": "station", "drôle": "funny", "colocataire": "flatmate", "université": "university", "samedi": "Saturday", "souvent": "often", "ensemble": "together", "parle": "speaks", "langues": "languages" },
    questions: [
      { q: "Léa habite où ?", o: ["À Lyon", "À Bordeaux", "À Manchester"], a: 1 },
      { q: "Quel est le métier de Léa ?", o: ["Professeure de musique", "Cuisinière", "Étudiante"], a: 0 },
      { q: "Karim est…", o: ["français et professeur", "anglais et étudiant", "marocain et cuisinier"], a: 2 },
      { q: "Emma est de quelle ville ?", o: ["De Manchester", "De Lyon", "De Bordeaux"], a: 0 },
      { q: "Les trois amis parlent combien de langues ?", o: ["Trois", "Quatre", "Deux"], a: 1 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-a1-1", unit: "a1-1", level: "A1", icon: "hotel",
    title: "À l'accueil de l'hôtel", title_fr: "À l'accueil de l'hôtel",
    context: "Mathis arrives at a hotel in Lyon. Camille, the receptionist, checks his booking.", context_fr: "Mathis arrive dans un hôtel à Lyon. Camille, à l'accueil, vérifie sa réservation.",
    words: [["une réservation", "a booking"], ["épeler", "to spell"], ["une chambre", "a room"], ["le petit-déjeuner", "breakfast"], ["l'ascenseur", "the lift"]],
    lines: [["Camille", "Bonsoir, monsieur ! Bienvenue à l'hôtel du Parc.", "fr-FR"], ["Mathis", "Bonsoir ! J'ai une réservation pour deux nuits.", "fr-FR"], ["Camille", "Très bien. Vous vous appelez comment ?", "fr-FR"], ["Mathis", "Mathis Garnier.", "fr-FR"], ["Camille", "Garnier… Vous pouvez épeler, s'il vous plaît ?", "fr-FR"], ["Mathis", "Oui : G, A, R, N, I, E, R.", "fr-FR"], ["Camille", "Merci. Ah, voilà : monsieur Garnier, deux nuits. Vous êtes dans la chambre dix-huit, au premier étage.", "fr-FR"], ["Mathis", "Pardon, la chambre dix-huit ou dix-neuf ?", "fr-FR"], ["Camille", "Dix-huit : un, huit. L'ascenseur est à droite.", "fr-FR"], ["Mathis", "Merci. Et le petit-déjeuner, c'est à quelle heure ?", "fr-FR"], ["Camille", "De sept heures à dix heures, ici, au rez-de-chaussée. Bonne soirée, monsieur !", "fr-FR"], ["Mathis", "Merci, bonne soirée !", "fr-FR"]],
    gist: ["Pourquoi Mathis parle avec Camille ?", ["Il arrive à l'hôtel.", "Il cherche un restaurant.", "Il veut un taxi."]],
    detail: [["Mathis reste combien de nuits ?", ["Deux", "Trois", "Une"]], ["Quel est le numéro de sa chambre ?", ["Dix-huit", "Dix-neuf", "Huit"]], ["La chambre est à quel étage ?", ["Au premier étage", "Au rez-de-chaussée", "Au deuxième étage"]], ["Le petit-déjeuner commence à quelle heure ?", ["À sept heures", "À dix heures", "À huit heures"]]],
    decode: ["Vous pouvez épeler, s'il vous plaît ?", "la chambre dix-huit ou dix-neuf ?"],
    tip: "Dix-huit and dix-neuf are easy to mix up: listen to the end of the number (huit sounds like “weet”, neuf like “nuhf”). When it matters, check: Dix-huit, un, huit ?", tip_fr: "Dix-huit et dix-neuf se confondent facilement : écoute la fin du nombre. Quand c'est important, vérifie : Dix-huit, un, huit ?"
  }]);

  W.PROMPTS.push({ id: "fr-a1-1", level: "A1", q: "Présente-toi : ton nom, ta nationalité, ta ville et ton métier.", fr: "Introduce yourself: your name, nationality, city and job.", time: 60,
    phrases: ["Je m'appelle…", "Je suis + nationalité", "J'habite à…", "Je suis + métier (no article)", "Je parle…"],
    model: "Bonjour ! Je m'appelle Chloé. Je suis canadienne, de Toronto, mais j'habite à Lyon. Je suis infirmière dans un hôpital. Je parle anglais, et un peu français. Je suis très contente d'être en France !" });

  W.WRITING_GUIDE["a1-1"] = { genre: "A short message to introduce yourself", genre_fr: "Un court message pour te présenter",
    plan: [["Say hello to everyone.", "Salue tout le monde."], ["Your name, nationality and city.", "Ton nom, ta nationalité et ta ville."], ["Your job and the languages you speak.", "Ton métier et les langues que tu parles."], ["Someone close to you, in one sentence.", "Une personne proche, en une phrase."], ["A friendly ending.", "Une fin chaleureuse."]],
    marks: [["Bonjour à tous !", "hello to a group", "bonjour à un groupe"], ["Je suis canadienne", "nationality: -ienne for a woman", "nationalité : -ienne au féminin"], ["Je suis architecte", "no article before a job", "pas d'article devant un métier"], ["il est de Nantes", "être de + city: where someone is from", "être de + ville : d'où vient quelqu'un"], ["À bientôt,", "a friendly goodbye", "un au revoir amical"]] };

  W.COURSE.push({ id: "a1-1", level: "A1", icon: "hand", title: "Hello!", title_fr: "Bonjour !",
    intro: "Welcome to French! In this first unit, you'll learn to greet people politely, to choose between tu and vous, to say who you are with the verb être, and to spell your name and give a phone number.",
    intro_fr: "Bienvenue en français ! Dans cette première unité, tu vas apprendre à saluer poliment, à choisir entre tu et vous, à dire qui tu es avec le verbe être, à épeler ton nom et à donner un numéro de téléphone.",
    can: ["Say hello and goodbye, formally and informally", "Introduce yourself: name, nationality, city, job", "Use être and the subject pronouns", "Spell your name and count to 20"],
    can_fr: ["Saluer et prendre congé, de façon formelle et informelle", "Te présenter : nom, nationalité, ville, métier", "Utiliser être et les pronoms sujets", "Épeler ton nom et compter jusqu'à 20"],
    lessons: [1, 2, 3], vocab: ["essentielsFR", "paysFR", "metiersFR", "nombresFR"], reading: "jemappelle", prompt: "fr-a1-1",
    writing: { task: "Write a short message (40-60 words) on your French class forum to introduce yourself: your name, nationality, city, job and the languages you speak.", task_fr: "Écris un court message (40 à 60 mots) sur le forum de ton cours de français pour te présenter : ton nom, ta nationalité, ta ville, ton métier et les langues que tu parles.", words: "40-60",
      tips: ["Bonjour à tous !", "Je m'appelle…", "Je suis… (nationalité, métier)", "J'habite à…", "À bientôt !"],
      checklist: ["I used être correctly (je suis, il est…)", "Nationalities agree with the person (anglais / anglaise)", "No article before my job (je suis professeur)", "I said hello and goodbye", "I stayed between 40 and 60 words"],
      model: "Bonjour à tous !\n\nJe m'appelle Julie. Je suis canadienne et j'habite à Montréal. Je suis architecte dans une petite agence. Je parle anglais et un peu espagnol. Mon mari, Antoine, est français : il est de Nantes. Je suis très contente d'apprendre le français avec vous !\n\nÀ bientôt,\nJulie" } });
})();
