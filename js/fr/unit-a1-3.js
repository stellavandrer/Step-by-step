/* Cours de français, unité A1-3 « Daily life / Au quotidien » : le présent des verbes en -er, la négation,
   les verbes pronominaux de la routine, l'heure, les jours et les mois. Personnages fictifs, prénoms français.
   Faits vérifiables seulement : l'heure sur 24 heures dans les horaires officiels, pas de majuscule aux jours
   et aux mois, le 14 juillet fête nationale. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "joursFR", icon: "calendar-days", title: "Days and times of day", title_fr: "Les jours et les moments de la journée", level: "A1", words: [
    ["lundi", "Monday", "Le lundi, je commence à huit heures."],
    ["mardi", "Tuesday", "Mardi, j'ai un rendez-vous."],
    ["mercredi", "Wednesday", "Le mercredi, les enfants n'ont pas école."],
    ["jeudi", "Thursday", "On se retrouve jeudi ?"],
    ["vendredi", "Friday", "Vendredi soir, on dîne chez Paul."],
    ["samedi", "Saturday", "Le samedi, je fais les courses."],
    ["dimanche", "Sunday", "Le dimanche, je déjeune chez mes parents."],
    ["le week-end", "the weekend", "Bon week-end !"],
    ["le matin", "the morning", "Je me lève tôt le matin."],
    ["l'après-midi", "the afternoon", "L'après-midi, je travaille à la maison."],
    ["le soir", "the evening", "Le soir, je regarde une série."],
    ["midi", "noon, midday", "On déjeune à midi."],
    ["minuit", "midnight", "Il est minuit !"],
    ["une heure", "an hour; one o'clock", "Le film dure deux heures."],
    ["une minute", "a minute", "J'arrive dans cinq minutes."],
    ["et quart", "quarter past", "Il est huit heures et quart."],
    ["et demie", "half past", "Il est six heures et demie."],
    ["moins le quart", "quarter to", "Il est dix heures moins le quart."],
    ["tôt", "early", "Je me lève tôt."],
    ["tard", "late", "Il rentre tard le soir."],
    ["en retard", "late (not on time)", "Désolé, je suis en retard !"]
  ] },
  { id: "moisFR", icon: "calendar", title: "Months and seasons", title_fr: "Les mois et les saisons", level: "A1", words: [
    ["janvier", "January", "En janvier, il fait froid."],
    ["février", "February", "Mon anniversaire est en février."],
    ["mars", "March", "Le printemps commence en mars."],
    ["avril", "April", "En avril, il pleut souvent."],
    ["mai", "May", "Le premier mai est un jour férié."],
    ["juin", "June", "Les examens sont en juin."],
    ["juillet", "July", "Le quatorze juillet, c'est la fête nationale."],
    ["août", "August", "En août, beaucoup de Français sont en vacances."],
    ["septembre", "September", "L'école commence en septembre."],
    ["octobre", "October", "En octobre, les feuilles tombent."],
    ["novembre", "November", "Novembre est un mois gris."],
    ["décembre", "December", "Noël, c'est le vingt-cinq décembre."],
    ["le printemps", "spring", "J'adore le printemps."],
    ["l'été", "summer", "En été, on va à la plage."],
    ["l'automne", "autumn, fall", "En automne, il y a du vent."],
    ["l'hiver", "winter", "En hiver, on fait du ski."],
    ["la date", "the date", "Quelle est la date aujourd'hui ?"]
  ] },
  { id: "routineFR", icon: "alarm-clock", title: "Daily routine", title_fr: "La routine quotidienne", level: "A1", words: [
    ["se réveiller", "to wake up", "Je me réveille à six heures."],
    ["se lever", "to get up", "Je me lève tout de suite."],
    ["se doucher", "to have a shower", "Je me douche le matin."],
    ["s'habiller", "to get dressed", "Les enfants s'habillent."],
    ["se coucher", "to go to bed", "Je me couche à onze heures."],
    ["dormir", "to sleep", "Je dors huit heures par nuit."],
    ["prendre le petit-déjeuner", "to have breakfast", "Je prends le petit-déjeuner à sept heures."],
    ["déjeuner", "to have lunch; lunch", "On déjeune à midi et demi."],
    ["dîner", "to have dinner; dinner", "Nous dînons à vingt heures."],
    ["partir", "to leave", "Je pars au travail à huit heures."],
    ["rentrer", "to come home, to go back", "Je rentre à dix-huit heures."],
    ["commencer", "to begin, to start", "Le cours commence à neuf heures."],
    ["finir", "to finish", "Je finis à dix-sept heures."],
    ["faire les courses", "to do the shopping", "Je fais les courses le samedi."],
    ["faire le ménage", "to do the housework", "Qui fait le ménage chez vous ?"],
    ["faire la cuisine", "to cook", "Mon mari fait la cuisine."],
    ["regarder la télé", "to watch TV", "Le soir, je regarde la télé."],
    ["écouter de la musique", "to listen to music", "J'écoute de la musique dans le bus."],
    ["lire", "to read", "Je lis avant de dormir."],
    ["se reposer", "to rest", "Le dimanche, je me repose."]
  ] });

  W.LESSONS.push(
  {
    id: 8, level: "A1", icon: "message-circle",
    title: "Je parle, tu parles: the present of -er verbs", title_fr: "Je parle, tu parles : le présent des verbes en -er",
    subtitle: "Nine French verbs out of ten end in -er, and they all work the same way.", subtitle_fr: "Neuf verbes français sur dix se terminent en -er, et ils fonctionnent tous de la même façon.",
    body: `
<h2>The endings</h2>
<p>Take away -er from the infinitive (<s-fr>parler</s-fr> → parl-) and add the endings:</p>
<table>
<tr><th>French</th><th>English</th></tr>
<tr><td><s-fr>je parle</s-fr></td><td>I speak, I'm speaking</td></tr>
<tr><td><s-fr>tu parles</s-fr></td><td>you speak</td></tr>
<tr><td><s-fr>il parle</s-fr> · <s-fr>elle parle</s-fr> · <s-fr>on parle</s-fr></td><td>he, she speaks · we speak</td></tr>
<tr><td><s-fr>nous parlons</s-fr></td><td>we speak</td></tr>
<tr><td><s-fr>vous parlez</s-fr></td><td>you speak</td></tr>
<tr><td><s-fr>ils parlent</s-fr> · <s-fr>elles parlent</s-fr></td><td>they speak</td></tr>
</table>
<h2>The good news: four forms sound the same</h2>
<p><s-fr>parle</s-fr>, <s-fr>parles</s-fr> and <s-fr>parlent</s-fr> are pronounced exactly the same: the -e, -es and -ent endings are silent. You only hear a difference with <s-fr>nous parlons</s-fr> and <s-fr>vous parlez</s-fr>.</p>
<h2>One tense for two in English</h2>
<p>French has no "I am speaking" form: <s-fr>je travaille</s-fr> means I work and I'm working. To insist on "right now", say <s-fr>je suis en train de travailler</s-fr>.</p>
<h2>Small spelling changes</h2>
<p>Before a vowel, je becomes j': <s-fr>j'habite</s-fr>, <s-fr>j'aime</s-fr>. Verbs in -ger keep an e with nous, to keep the soft sound: <s-fr>nous mangeons</s-fr>. Verbs in -cer take a ç: <s-fr>nous commençons</s-fr>.</p>
<div class="tip">After <s-fr>aimer</s-fr>, <s-fr>adorer</s-fr> and <s-fr>détester</s-fr>, a second verb stays in the infinitive: <s-fr>J'aime lire.</s-fr> (I like reading.) · <s-fr>Je déteste attendre.</s-fr> (I hate waiting.)</div>
`,
    examples: [
      ["Je parle anglais et un peu français.", "I speak English and a little French."],
      ["Tu habites à Paris ?", "Do you live in Paris?"],
      ["Elle travaille dans une banque.", "She works in a bank."],
      ["Nous mangeons à midi.", "We eat at noon."],
      ["Vous aimez le café ?", "Do you like coffee?"],
      ["Ils regardent un film.", "They're watching a film."],
      ["J'adore écouter de la musique.", "I love listening to music."],
      ["Le cours commence à neuf heures.", "The class starts at nine."]
    ],
    quiz: [
      { q: "Complete: “Nous ___ français.” (parler)", o: ["parlons", "parlez", "parlent"], a: 0, ex: "nous → -ons: nous parlons." },
      { q: "Which forms sound exactly the same?", o: ["parle, parles, parlent", "parlons, parlez", "parle, parlez"], a: 0, ex: "-e, -es and -ent are silent." },
      { q: "“I'm watching TV” is:", o: ["Je suis regarder la télé.", "Je regarde la télé.", "Je regarding la télé."], a: 1, ex: "One present tense: je regarde = I watch / I'm watching." },
      { q: "Complete: “Nous ___ à huit heures.” (manger)", o: ["mangons", "mangeons", "mangez"], a: 1, ex: "-ger verbs keep the e with nous: mangeons." },
      { q: "“I like reading” is:", o: ["J'aime lire.", "J'aime lisant.", "J'aime de lire."], a: 0, ex: "aimer + infinitive." }
    ]
  },
  {
    id: 9, level: "A1", icon: "circle-help",
    title: "Ne… pas: saying no", title_fr: "Ne… pas : la négation",
    subtitle: "Two little words around the verb, and a change that surprises English speakers: pas de.", subtitle_fr: "Deux petits mots autour du verbe, et un changement qui surprend les anglophones : pas de.",
    body: `
<h2>Around the verb</h2>
<p>Put <s-fr>ne</s-fr> before the verb and <s-fr>pas</s-fr> after it: <s-fr>Je ne travaille pas le lundi.</s-fr> (I don't work on Mondays.) Before a vowel, ne becomes n': <s-fr>Elle n'aime pas le café.</s-fr></p>
<p>With a reflexive verb, ne goes before the little pronoun: <s-fr>Je ne me lève pas tôt.</s-fr></p>
<h2>The trap: pas de</h2>
<p>After a negative, <s-fr>un</s-fr>, <s-fr>une</s-fr> and <s-fr>des</s-fr> become <s-fr>de</s-fr> (<s-fr>d'</s-fr> before a vowel):</p>
<table>
<tr><th>Positive</th><th>Negative</th></tr>
<tr><td><s-fr>J'ai une voiture.</s-fr></td><td><s-fr>Je n'ai pas de voiture.</s-fr></td></tr>
<tr><td><s-fr>Il y a des enfants.</s-fr></td><td><s-fr>Il n'y a pas d'enfants.</s-fr></td></tr>
</table>
<p>But <s-fr>le</s-fr>, <s-fr>la</s-fr>, <s-fr>les</s-fr> don't change: <s-fr>Je n'aime pas le fromage.</s-fr> And after <s-fr>être</s-fr>, nothing changes: <s-fr>Ce n'est pas un problème.</s-fr></p>
<h2>Other negatives</h2>
<p><s-fr>ne… jamais</s-fr> (never): <s-fr>Je ne mange jamais de viande.</s-fr> · <s-fr>ne… plus</s-fr> (not any more): <s-fr>Il n'habite plus ici.</s-fr> · <s-fr>ne… rien</s-fr> (nothing): <s-fr>Je ne comprends rien !</s-fr></p>
<div class="tip">In everyday speech, many French people drop the ne: <s-fr>Je sais pas.</s-fr> (I don't know.) · <s-fr>C'est pas grave.</s-fr> (It doesn't matter.) You'll hear it all the time, but write it with ne.</div>
`,
    examples: [
      ["Je ne travaille pas le lundi.", "I don't work on Mondays."],
      ["Elle n'aime pas le café.", "She doesn't like coffee."],
      ["Je n'ai pas de voiture.", "I don't have a car."],
      ["Il n'y a pas d'enfants ici.", "There are no children here."],
      ["Ce n'est pas un problème.", "It's not a problem."],
      ["Je ne mange jamais de viande.", "I never eat meat."],
      ["Il n'habite plus à Paris.", "He doesn't live in Paris any more."],
      ["Je ne me lève pas tôt le dimanche.", "I don't get up early on Sundays."]
    ],
    quiz: [
      { q: "“I don't speak German” is:", o: ["Je parle pas allemand ne.", "Je ne parle pas allemand.", "Je ne pas parle allemand."], a: 1, ex: "ne + verb + pas." },
      { q: "“I don't have a car” is:", o: ["Je n'ai pas une voiture.", "Je n'ai pas de voiture.", "Je n'ai pas la voiture."], a: 1, ex: "After a negative, un / une / des become de." },
      { q: "“I don't like cheese” is:", o: ["Je n'aime pas le fromage.", "Je n'aime pas de fromage.", "Je n'aime pas fromage."], a: 0, ex: "le, la, les don't change after a negative." },
      { q: "“He doesn't live here any more” is:", o: ["Il n'habite jamais ici.", "Il n'habite plus ici.", "Il n'habite rien ici."], a: 1, ex: "ne… plus = not any more." },
      { q: "In “Je sais pas”, the speaker…", o: ["makes a big mistake", "drops ne, as people often do when speaking", "says yes"], a: 1, ex: "Very common in speech; write je ne sais pas." }
    ]
  },
  {
    id: 10, level: "A1", icon: "sunrise",
    title: "Je me lève: reflexive verbs for your daily routine", title_fr: "Je me lève : les verbes pronominaux de la routine",
    subtitle: "French says “I wake myself up”: the little pronoun changes with the person.", subtitle_fr: "Le français dit « je me réveille » : le petit pronom change avec la personne.",
    body: `
<h2>A verb with a pronoun</h2>
<p>Many everyday actions use a reflexive verb, with a pronoun that refers back to the subject. In the dictionary, it starts with <s-fr>se</s-fr>: <s-fr>se lever</s-fr> (to get up), <s-fr>se coucher</s-fr> (to go to bed).</p>
<table>
<tr><th>French</th><th>English</th></tr>
<tr><td><s-fr>je me lève</s-fr></td><td>I get up</td></tr>
<tr><td><s-fr>tu te lèves</s-fr></td><td>you get up</td></tr>
<tr><td><s-fr>il se lève</s-fr> · <s-fr>elle se lève</s-fr></td><td>he, she gets up</td></tr>
<tr><td><s-fr>nous nous levons</s-fr></td><td>we get up</td></tr>
<tr><td><s-fr>vous vous levez</s-fr></td><td>you get up</td></tr>
<tr><td><s-fr>ils se lèvent</s-fr> · <s-fr>elles se lèvent</s-fr></td><td>they get up</td></tr>
</table>
<p>Before a vowel, me, te and se become m', t' and s': <s-fr>je m'habille</s-fr> (I get dressed), <s-fr>il s'appelle</s-fr>. You've already used one: <s-fr>je m'appelle</s-fr>!</p>
<h2>The routine of a day</h2>
<p><s-fr>Je me réveille à six heures et demie, je me lève, je me douche et je m'habille. Le soir, je me repose et je me couche vers onze heures.</s-fr></p>
<p>Notice the accent of <s-fr>lever</s-fr>: <s-fr>je me lève</s-fr>, but <s-fr>nous nous levons</s-fr>. The è appears when the ending is silent.</p>
<div class="tip">To say "on Mondays" (every week), use <s-fr>le</s-fr> + day: <s-fr>Le lundi, je me lève tôt.</s-fr> Without le, it means one particular day: <s-fr>Lundi, je me lève tôt.</s-fr> (This Monday.)</div>
`,
    examples: [
      ["Je me réveille à sept heures.", "I wake up at seven."],
      ["Tu te lèves tôt ?", "Do you get up early?"],
      ["Il s'habille vite.", "He gets dressed quickly."],
      ["Nous nous couchons tard le samedi.", "We go to bed late on Saturdays."],
      ["Vous vous appelez comment ?", "What's your name?"],
      ["Les enfants se lèvent à huit heures.", "The children get up at eight."],
      ["Le dimanche, je me repose.", "On Sundays, I rest."],
      ["Je ne me couche pas avant minuit.", "I don't go to bed before midnight."]
    ],
    quiz: [
      { q: "Complete: “Je ___ lève à sept heures.”", o: ["se", "me", "te"], a: 1, ex: "je me lève." },
      { q: "Complete: “Elle ___ habille.”", o: ["s'", "se", "m'"], a: 0, ex: "Before a vowel, se becomes s'." },
      { q: "Complete: “Nous ___ couchons tard.”", o: ["se", "vous", "nous"], a: 2, ex: "nous nous couchons: the pronoun is nous." },
      { q: "“On Sundays, I rest” is:", o: ["Dimanche, je me repose.", "Le dimanche, je me repose.", "Au dimanche, je me repose."], a: 1, ex: "le + day = every week." },
      { q: "Which is correct?", o: ["je me lève", "je me leve", "je me lèves"], a: 0, ex: "è when the ending is silent; je → -e." }
    ]
  },
  {
    id: 11, level: "A1", kind: "functional", icon: "clock",
    title: "Everyday French: the time and the days", title_fr: "Le français de tous les jours : l'heure et les jours",
    subtitle: "Ask and tell the time, say when things happen and arrange to meet.", subtitle_fr: "Demander et dire l'heure, dire quand les choses ont lieu et fixer un rendez-vous.",
    body: `
<h2>Asking the time</h2>
<p><s-fr>Quelle heure est-il ?</s-fr> (formal, or written) · <s-fr>Il est quelle heure ?</s-fr> (everyday) · <s-fr>Vous avez l'heure, s'il vous plaît ?</s-fr> (Do you have the time, please?)</p>
<h2>Telling the time</h2>
<table>
<tr><th>Time</th><th>Everyday</th><th>Official (24 hours)</th></tr>
<tr><td>8.00</td><td><s-fr>Il est huit heures.</s-fr></td><td><s-fr>huit heures</s-fr></td></tr>
<tr><td>8.15</td><td><s-fr>huit heures et quart</s-fr></td><td><s-fr>huit heures quinze</s-fr></td></tr>
<tr><td>8.30</td><td><s-fr>huit heures et demie</s-fr></td><td><s-fr>huit heures trente</s-fr></td></tr>
<tr><td>8.45</td><td><s-fr>neuf heures moins le quart</s-fr></td><td><s-fr>huit heures quarante-cinq</s-fr></td></tr>
<tr><td>12.00</td><td><s-fr>midi</s-fr> · <s-fr>minuit</s-fr></td><td><s-fr>douze heures</s-fr> · <s-fr>zéro heure</s-fr></td></tr>
<tr><td>17.30</td><td><s-fr>cinq heures et demie</s-fr></td><td><s-fr>dix-sept heures trente</s-fr></td></tr>
</table>
<p>Train times, appointments and shop hours use the 24-hour clock: <s-fr>Le train part à dix-sept heures trente.</s-fr> It's written 17 h 30.</p>
<p>Always say <s-fr>heures</s-fr>: <s-fr>à trois heures</s-fr>, never just "à trois". Note <s-fr>et demie</s-fr> with -e after heures, but <s-fr>midi et demi</s-fr>.</p>
<h2>Saying when</h2>
<p><s-fr>À quelle heure ?</s-fr> (At what time?) · <s-fr>à huit heures</s-fr> (at eight) · <s-fr>vers huit heures</s-fr> (around eight) · <s-fr>de neuf heures à dix-sept heures</s-fr> (from nine to five) · <s-fr>du lundi au vendredi</s-fr> (from Monday to Friday)</p>
<p>Days and months have no capital letter: <s-fr>lundi</s-fr>, <s-fr>juillet</s-fr>. Dates: <s-fr>le premier mai</s-fr>, then <s-fr>le deux mai</s-fr>, <s-fr>le quatorze juillet</s-fr>: only the first day of the month says premier.</p>
<div class="tip">To arrange to meet: <s-fr>Tu es libre jeudi ?</s-fr> (Are you free on Thursday?) · <s-fr>Ça te va ?</s-fr> (Does that suit you?) · <s-fr>On se retrouve à quelle heure ?</s-fr> (What time shall we meet?) · <s-fr>À jeudi !</s-fr> (See you on Thursday!)</div>
`,
    examples: [
      ["Il est quelle heure ?", "What time is it?"],
      ["Il est dix heures et quart.", "It's quarter past ten."],
      ["Il est midi et demi.", "It's half past twelve."],
      ["Le train part à dix-sept heures trente.", "The train leaves at 5.30 pm."],
      ["Je travaille du lundi au vendredi.", "I work from Monday to Friday."],
      ["On se retrouve vers huit heures ?", "Shall we meet around eight?"],
      ["Mon anniversaire, c'est le premier mars.", "My birthday is the first of March."],
      ["À samedi !", "See you on Saturday!"]
    ],
    quiz: [
      { q: "8.30 in everyday French is:", o: ["huit heures et demie", "huit heures et demi", "huit et demie"], a: 0, ex: "et demie, with -e after heures; always say heures." },
      { q: "On a train ticket, 17 h 45 is said:", o: ["cinq heures quarante-cinq", "dix-sept heures quarante-cinq", "dix-sept et quarante-cinq"], a: 1, ex: "Official times use the 24-hour clock." },
      { q: "“From Monday to Friday” is:", o: ["de lundi à vendredi", "du lundi au vendredi", "lundi au vendredi"], a: 1, ex: "du lundi au vendredi." },
      { q: "May 1st is:", o: ["le un mai", "le premier mai", "le première mai"], a: 1, ex: "Only the first of the month: le premier." },
      { q: "“See you on Thursday!” is:", o: ["À jeudi !", "Au jeudi !", "À le jeudi !"], a: 0, ex: "À + day, without an article." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    8: {
      gap: [["Nous ___ à midi. (manger)", "mangeons"], ["Vous ___ anglais ? (parler)", "parlez"], ["Ils ___ à Lyon. (habiter)", "habitent"], ["J'___ lire le soir. (aimer)", "aime"]],
      fix: [["Je suis travailler maintenant.", "Je travaille maintenant.|Je suis en train de travailler.", "One present tense: je travaille = I work / I'm working."], ["Nous commencons à neuf heures.", "Nous commençons à neuf heures.", "-cer verbs take ç with nous: commençons."]],
      task: ["Write four sentences about what you and people you know do every day, with -er verbs.", "Écris quatre phrases sur ce que toi et des gens que tu connais faites chaque jour, avec des verbes en -er.", "Je travaille dans un bureau. Ma sœur étudie la médecine. Le soir, nous regardons une série ensemble. Mes parents adorent marcher le dimanche."]
    },
    9: {
      gap: [["Je ___ parle pas allemand. (negative)", "ne"], ["Elle n'a pas ___ voiture. (a car)", "de"], ["Il ___ habite plus ici. (negative)", "n'"], ["Je ne mange ___ de viande. (never)", "jamais"]],
      fix: [["Je n'ai pas une voiture.", "Je n'ai pas de voiture.", "After a negative, un, une and des become de."], ["Je ne pas travaille le lundi.", "Je ne travaille pas le lundi.", "ne + verb + pas."]],
      task: ["Write four things you never or don't do, using ne… pas, ne… jamais and ne… plus.", "Écris quatre choses que tu ne fais pas ou jamais, avec ne… pas, ne… jamais et ne… plus.", "Je ne bois pas de café. Je ne regarde jamais la télé le matin. Je n'habite plus chez mes parents. Le dimanche, je ne travaille pas."]
    },
    10: {
      gap: [["Je ___ lève à sept heures. (myself)", "me"], ["Tu ___ couches tard ? (yourself)", "te"], ["Elle s'___ vite. (s'habiller)", "habille"], ["Nous nous ___ tôt. (se lever)", "levons"]],
      fix: [["Je lève à six heures.", "Je me lève à six heures.", "Se lever is reflexive: je me lève."], ["Il se habille.", "Il s'habille.", "Before a vowel or a silent h, se becomes s'."]],
      task: ["Describe your morning routine in four or five sentences, with times.", "Décris ta routine du matin en quatre ou cinq phrases, avec les heures.", "Je me réveille à six heures et demie. Je me lève tout de suite et je me douche. Je m'habille et je prends le petit-déjeuner. Je pars au travail à huit heures."]
    },
    11: {
      gap: [["Il est quelle ___ ? (time)", "heure"], ["Il est huit heures et ___. (8.15)", "quart"], ["Je travaille ___ lundi au vendredi. (from)", "du"], ["À ___ ! (see you on Saturday)", "samedi"]],
      fix: [["Le cours commence à neuf.", "Le cours commence à neuf heures.", "Always say heures: à neuf heures."], ["Mon anniversaire est le un juin.", "Mon anniversaire est le premier juin.", "The first of the month: le premier."]],
      task: ["Write a message to a friend to arrange a meeting this week: a day, a time and a place.", "Écris un message à un ami pour fixer un rendez-vous cette semaine : un jour, une heure et un lieu.", "Salut Hugo ! Tu es libre jeudi soir ? On se retrouve à dix-neuf heures devant le cinéma ? Le film commence à dix-neuf heures trente. Dis-moi si ça te va !"]
    }
  });

  W.ROLEPLAYS.push(
  { id: "cinema", lesson: 11, level: "A1", icon: "film", partner: "Théo", role: "a friend",
    title: "Arranging to meet a friend", title_fr: "Fixer un rendez-vous avec un ami",
    setting: "You want to go to the cinema with your friend Théo this week. You agree on a day and a time.", setting_fr: "Tu veux aller au cinéma avec ton ami Théo cette semaine. Vous choisissez un jour et une heure.",
    turns: [
      { p: "Salut ! On va au cinéma cette semaine ?", fr: "Hi! Shall we go to the cinema this week?" },
      { y: ["Oui, bonne idée ! Tu es libre quand ?", "Oui, bon idée ! Tu es libre quand ?", "Oui, bonne idée ! Tu es libre quel ?"], fr: "Yes, good idea! When are you free?", why: "Idée is feminine: bonne idée. Quand = when." },
      { p: "Mercredi soir, ça te va ?", fr: "Wednesday evening, does that suit you?" },
      { y: ["Non, désolé, le mercredi, je travaille jusqu'à vingt heures.", "Non, désolé, le Mercredi, je travaille jusqu'à vingt heures.", "Non, désolé, au mercredi, je travaille jusqu'à vingt heures."], fr: "No, sorry, on Wednesdays I work until 8 pm.", why: "No capital letter for days. Le mercredi = on Wednesdays (every week)." },
      { p: "D'accord. Et jeudi ? Il y a une séance à dix-neuf heures quarante-cinq.", fr: "OK. And Thursday? There's a showing at 7.45 pm." },
      { y: ["Jeudi, c'est parfait ! On se retrouve à sept heures et demie devant le cinéma ?", "Jeudi, c'est parfait ! On se retrouve à sept heures et demi devant le cinéma ?", "Jeudi, c'est parfait ! On se retrouve à sept et demie devant le cinéma ?"], fr: "Thursday's perfect! Shall we meet at half past seven in front of the cinema?", why: "Et demie after heures, and always say heures." },
      { p: "Super. Moi, je finis le travail à dix-huit heures, c'est bon. À jeudi, alors !", fr: "Great. I finish work at 6 pm, so that's fine. See you on Thursday, then!" },
      { y: ["À jeudi ! Bonne soirée !", "À le jeudi ! Bonne soirée !", "À jeudi ! Bon soirée !"], fr: "See you on Thursday! Have a nice evening!", why: "À + day, without an article. Soirée is feminine: bonne soirée." }
    ] }
  );

  W.READINGS.push({
    id: "boulangere", level: "A1", icon: "croissant", title: "La journée de Yasmine", genre: "Portrait",
    intro: "The day of a baker, who starts work in the middle of the night. -er verbs, reflexive verbs, times and days.",
    intro_fr: "La journée d'une boulangère, qui commence à travailler en pleine nuit. Verbes en -er, verbes pronominaux, l'heure et les jours.",
    paragraphs: [
      { en: "Yasmine est boulangère à Rennes. Sa journée commence très tôt : elle se lève à trois heures et demie du matin !", fr: "Yasmine is a baker in Rennes. Her day starts very early: she gets up at half past three in the morning!" },
      { en: "Elle arrive à la boulangerie à quatre heures. Elle prépare le pain, les croissants et les gâteaux. À sept heures, la boulangerie ouvre et les premiers clients arrivent.", fr: "She arrives at the bakery at four. She makes the bread, the croissants and the cakes. At seven, the bakery opens and the first customers arrive." },
      { en: "Yasmine ne travaille pas l'après-midi : elle rentre chez elle à midi et demi, elle déjeune avec son mari et elle se repose. Le soir, elle dîne à sept heures et elle se couche à neuf heures.", fr: "Yasmine doesn't work in the afternoon: she goes home at half past twelve, has lunch with her husband and rests. In the evening, she has dinner at seven and goes to bed at nine." },
      { en: "Elle travaille du mardi au samedi. Le dimanche et le lundi, la boulangerie est fermée. « J'adore mon métier, dit Yasmine, mais je ne regarde jamais de film le soir : je dors ! »", fr: "She works from Tuesday to Saturday. On Sundays and Mondays, the bakery is closed. “I love my job,” says Yasmine, “but I never watch a film in the evening: I'm asleep!”" }
    ],
    glossary: { "boulangère": "baker (woman)", "tôt": "early", "boulangerie": "bakery", "prépare": "makes, prepares", "pain": "bread", "ouvre": "opens", "clients": "customers", "rentre": "goes home", "déjeune": "has lunch", "repose": "rests", "dîne": "has dinner", "couche": "goes to bed", "fermée": "closed", "métier": "job", "dors": "sleep" },
    questions: [
      { q: "Yasmine se lève à quelle heure ?", o: ["À sept heures", "À trois heures et demie", "À quatre heures"], a: 1 },
      { q: "Qu'est-ce qu'elle prépare ?", o: ["Le pain, les croissants et les gâteaux", "Le déjeuner de son mari", "Des sandwichs"], a: 0 },
      { q: "Qu'est-ce qu'elle fait l'après-midi ?", o: ["Elle travaille", "Elle se repose", "Elle fait les courses"], a: 1 },
      { q: "Quand est-ce que la boulangerie est fermée ?", o: ["Le samedi", "Le mardi et le mercredi", "Le dimanche et le lundi"], a: 2 },
      { q: "Pourquoi Yasmine ne regarde pas de film le soir ?", o: ["Elle dort.", "Elle n'a pas de télé.", "Elle travaille."], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-a1-3", unit: "a1-3", level: "A1", icon: "phone",
    title: "Prendre rendez-vous", title_fr: "Prendre rendez-vous",
    context: "Benoît calls a doctor's surgery to make an appointment. Isabelle answers.", context_fr: "Benoît appelle un cabinet médical pour prendre rendez-vous. Isabelle répond.",
    words: [["un rendez-vous", "an appointment"], ["le cabinet", "the surgery, the practice"], ["libre", "free, available"], ["désolé", "sorry"], ["quelque chose", "something"]],
    lines: [["Isabelle", "Cabinet du docteur Martin, bonjour !", "fr-FR"], ["Benoît", "Bonjour, madame. Je voudrais un rendez-vous, s'il vous plaît.", "fr-FR"], ["Isabelle", "Oui. Mardi matin, à dix heures et quart, ça vous va ?", "fr-FR"], ["Benoît", "Ah non, désolé, je travaille le matin. Vous avez quelque chose l'après-midi ?", "fr-FR"], ["Isabelle", "Alors… jeudi, à dix-sept heures trente ?", "fr-FR"], ["Benoît", "Jeudi à cinq heures et demie… Oui, c'est parfait.", "fr-FR"], ["Isabelle", "Très bien. C'est à quel nom ?", "fr-FR"], ["Benoît", "Benoît Leroy. L, E, R, O, Y.", "fr-FR"], ["Isabelle", "Merci, monsieur Leroy. Donc, jeudi quinze, à dix-sept heures trente.", "fr-FR"], ["Benoît", "Merci beaucoup. Au revoir, madame.", "fr-FR"], ["Isabelle", "Au revoir, monsieur. Bonne journée !", "fr-FR"]],
    gist: ["Pourquoi Benoît téléphone ?", ["Pour prendre rendez-vous", "Pour annuler un rendez-vous", "Pour parler au docteur"]],
    detail: [["Pourquoi Benoît ne peut pas venir mardi matin ?", ["Il travaille le matin.", "Il est malade.", "Il est en vacances."]], ["Le rendez-vous est quel jour ?", ["Jeudi", "Mardi", "Vendredi"]], ["À quelle heure ?", ["À dix-sept heures trente", "À dix heures et quart", "À quinze heures"]], ["Comment s'écrit le nom de Benoît ?", ["Leroy", "Le Roi", "Leroi"]]],
    decode: ["Vous avez quelque chose l'après-midi ?", "jeudi quinze, à dix-sept heures trente"],
    tip: "Official times (appointments, trains, shops) use the 24-hour clock: dix-sept heures trente = 5.30 pm. In conversation, people often say cinq heures et demie. It's the same time, as Benoît shows.", tip_fr: "Les horaires officiels utilisent les heures de 0 à 24 : dix-sept heures trente. Dans la conversation, on dit souvent cinq heures et demie. C'est la même heure, comme le montre Benoît."
  }]);

  W.PROMPTS.push({ id: "fr-a1-3", level: "A1", q: "Décris une journée normale pour toi, du matin au soir.", fr: "Describe a normal day for you, from morning to evening.", time: 90,
    phrases: ["Je me lève à…", "Je prends le petit-déjeuner…", "Je commence le travail à…", "Le soir, je…", "Je me couche vers…"],
    model: "En général, je me lève à sept heures. Je me douche et je prends le petit-déjeuner : un café et une tartine. Je commence le travail à neuf heures. À midi et demi, je déjeune avec mes collègues. Je rentre à la maison vers dix-huit heures. Le soir, je fais la cuisine et je regarde une série. Je me couche à onze heures." });

  W.WRITING_GUIDE["a1-3"] = { genre: "A message about your daily life", genre_fr: "Un message sur ta vie quotidienne",
    plan: [["Say hello and thank your friend.", "Dis bonjour et remercie ton ami."], ["Your weekday: when you get up, your work.", "Ta semaine : ton lever, ton travail."], ["Your evening.", "Ta soirée."], ["Your weekend.", "Ton week-end."], ["A friendly ending.", "Une fin chaleureuse."]],
    marks: [["je me lève à six heures et demie", "a reflexive verb and a time with et demie", "un verbe pronominal et une heure avec et demie"], ["du lundi au vendredi", "from… to… with days", "du… au… avec les jours"], ["Le soir,", "a time of day to organise the message", "un moment de la journée pour organiser le message"], ["je ne travaille pas", "ne… pas around the verb", "ne… pas autour du verbe"], ["le samedi", "le + day = every Saturday", "le + jour = tous les samedis"], ["À bientôt !", "a friendly goodbye", "un au revoir amical"]] };

  W.COURSE.push({ id: "a1-3", level: "A1", icon: "alarm-clock", title: "Daily life", title_fr: "Au quotidien",
    intro: "In this unit, you'll describe your everyday life: the -er verbs (nine French verbs out of ten), the negative, the reflexive verbs of your routine, and how to tell the time and talk about days and dates.",
    intro_fr: "Dans cette unité, tu vas décrire ta vie de tous les jours : les verbes en -er (neuf verbes sur dix), la négation, les verbes pronominaux de la routine, l'heure, les jours et les dates.",
    can: ["Use the present of -er verbs", "Say no with ne… pas, and pas de", "Describe your daily routine with reflexive verbs", "Tell the time, give dates and arrange to meet"],
    can_fr: ["Utiliser le présent des verbes en -er", "Dire non avec ne… pas, et pas de", "Décrire ta routine avec les verbes pronominaux", "Dire l'heure, donner une date et fixer un rendez-vous"],
    lessons: [8, 9, 10, 11], vocab: ["joursFR", "moisFR", "routineFR"], reading: "boulangere", prompt: "fr-a1-3",
    writing: { task: "A French penfriend asks about your life. Write a message (60-80 words): a typical weekday, your evenings and your weekend.", task_fr: "Un correspondant français te pose des questions sur ta vie. Écris-lui un message (60 à 80 mots) : une journée de semaine, tes soirées et ton week-end.", words: "60-80",
      tips: ["Merci pour ton message !", "En semaine, je me lève à…", "du lundi au vendredi", "Le soir, je…", "Le week-end, je ne… pas"],
      checklist: ["I used -er verbs in the present (je travaille, je rentre…)", "I used at least two reflexive verbs (je me lève…)", "I used ne… pas once", "Times are written in words, with heures", "I stayed between 60 and 80 words"],
      model: "Salut Margaux !\n\nMerci pour ton message. Moi, en semaine, je me lève à six heures et demie, parce que je commence le travail à huit heures. Je travaille dans une banque, du lundi au vendredi. Le soir, je rentre à dix-huit heures et je fais du sport. Le week-end, je ne travaille pas : le samedi, je fais les courses et le dimanche, je déjeune chez mes parents.\n\nÀ bientôt !\nZoé" } });
})();
