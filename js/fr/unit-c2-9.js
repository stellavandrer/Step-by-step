/* Cours de français, unité C2-9 « Living speech / Paroles vivantes » : le français oral spontané (marqueurs du
   discours, chute du ne et du il, élisions, dislocation), les accords au plus haut niveau (demi, nu, feu, possible,
   quelque, tout, adjectifs de couleur composés), le courrier sensible (excuses, condoléances, refus). Personnages
   fictifs, prénoms français. Faits vérifiables seulement : le ne de la négation disparaît le plus souvent dans la
   conversation spontanée ; Renaud, Laisse béton (1977), chanson en verlan ; le verlan inverse les syllabes. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "oralFR", icon: "speech", title: "Everyday spoken French", title_fr: "Le français parlé", level: "C2", words: [
    ["du coup", "so, as a result (spoken)", "Il pleuvait, du coup on est restés à la maison."],
    ["en fait", "actually, in fact", "En fait, je n'étais pas au courant."],
    ["ben", "well (spoken, from bien)", "Ben, je sais pas trop."],
    ["carrément", "totally, outright", "C'est carrément génial !"],
    ["j'avoue", "true, I admit (informal agreement)", "Ce film était long. — J'avoue."],
    ["zarbi", "strange (verlan of bizarre)", "C'est zarbi, cette histoire."],
    ["vénère", "angry, wound up (verlan of énervé)", "Il est vénère depuis ce matin."],
    ["kiffer", "to love, to be into (slang)", "Je kiffe trop cette chanson."],
    ["galérer", "to struggle, to have a hard time (informal)", "J'ai galéré pour trouver un appartement."],
    ["la galère", "a hassle, a nightmare (informal); a galley", "Trouver une place, c'est la galère."],
    ["ça roule", "everything's fine (informal)", "Ça roule ? — Ça roule !"],
    ["laisse tomber", "forget it", "Laisse tomber, c'est pas grave."],
    ["c'est mort", "no chance, it's not happening (informal)", "Le dernier train ? C'est mort, il est parti."],
    ["ça marche", "OK, that works", "On se voit à huit heures ? — Ça marche."],
    ["t'inquiète", "don't worry (informal)", "T'inquiète, je m'en occupe."],
    ["ça craint", "it's bad, it sucks (informal)", "Il n'y a plus de bus : ça craint."],
    ["la tchatche", "the gift of the gab (informal)", "Il a une sacrée tchatche."],
    ["le langage familier", "informal language", "Le langage familier n'a pas sa place dans une lettre officielle."]
  ] },
  { id: "courrierFR", icon: "mail", title: "Sensitive letters", title_fr: "Le courrier sensible", level: "C2", words: [
    ["les condoléances", "condolences", "Je vous adresse mes sincères condoléances."],
    ["le deuil", "mourning, bereavement", "La famille est en deuil."],
    ["le décès", "the death (formal)", "Nous avons appris avec tristesse le décès de votre père."],
    ["présenter ses excuses", "to apologise (formally)", "La direction vous présente ses excuses."],
    ["le regret", "regret", "C'est avec regret que nous annulons la soirée."],
    ["la sollicitude", "concern, solicitude", "Merci pour votre sollicitude."],
    ["la bienveillance", "kindness, goodwill", "Je compte sur votre bienveillance."],
    ["compatir", "to sympathise", "Nous compatissons à votre peine."],
    ["la consternation", "dismay", "La nouvelle a provoqué la consternation."],
    ["le faire-part", "the announcement card (birth, wedding, death)", "Nous avons reçu leur faire-part de mariage."],
    ["les obsèques", "the funeral (formal)", "Les obsèques auront lieu vendredi."],
    ["s'incliner", "to bow; to pay one's respects", "Nous nous inclinons devant sa mémoire."],
    ["la sympathie", "fellow feeling, liking; sympathy", "Je tenais à vous témoigner toute ma sympathie."],
    ["le désagrément", "the inconvenience", "Veuillez nous excuser pour ce désagrément."],
    ["les félicitations", "congratulations", "Toutes mes félicitations pour votre réussite !"],
    ["féliciter", "to congratulate", "Je tiens à vous féliciter pour ce prix."],
    ["la courtoisie", "courtesy", "La courtoisie s'impose, même dans un refus."],
    ["le tact", "tact", "Il faut beaucoup de tact pour annoncer une telle nouvelle."]
  ] });

  W.LESSONS.push(
  {
    id: 159, level: "C2", icon: "speech",
    title: "Ben, du coup, j'sais pas: spontaneous spoken French", title_fr: "Ben, du coup, j'sais pas : le français oral spontané",
    subtitle: "Understand French as people really speak it, and know when not to speak it that way.", subtitle_fr: "Comprendre le français tel qu'on le parle vraiment, et savoir quand ne pas le parler ainsi.",
    body: `
<h2>Discourse markers</h2>
<p><s-fr>bon</s-fr>, <s-fr>ben</s-fr>, <s-fr>bah</s-fr>, <s-fr>euh</s-fr> (to start or hesitate) · <s-fr>du coup</s-fr> (so) · <s-fr>en fait</s-fr> (actually) · <s-fr>genre</s-fr> (like) · <s-fr>quoi</s-fr> at the end of a sentence (you know) · <s-fr>tu vois</s-fr> · <s-fr>voilà</s-fr> (that's it) · <s-fr>enfin</s-fr> (I mean, correcting oneself)</p>
<h2>What disappears</h2>
<p>The <s-fr>ne</s-fr> of the negation: <s-fr>je sais pas</s-fr> · the impersonal <s-fr>il</s-fr>: <s-fr>faut que j'y aille</s-fr>, <s-fr>y a du monde</s-fr> · vowels: <s-fr>t'as vu ?</s-fr>, <s-fr>j'sais pas</s-fr> (pronounced almost <s-fr>chais pas</s-fr>) · <s-fr>nous</s-fr>, replaced by <s-fr>on</s-fr>.</p>
<h2>How sentences are built</h2>
<p>Dislocation: <s-fr>Moi, mon frère, il habite à Lyon.</s-fr> · Questions by intonation: <s-fr>Tu viens ?</s-fr> · <s-fr>C'est quoi, ce truc ?</s-fr></p>
<h2>Verlan, one step further</h2>
<p>You met <s-fr>relou</s-fr> and <s-fr>chelou</s-fr> at B2. Others are everywhere: <s-fr>zarbi</s-fr> (<s-fr>bizarre</s-fr>), <s-fr>vénère</s-fr> (<s-fr>énervé</s-fr>), <s-fr>chanmé</s-fr> (<s-fr>méchant</s-fr>, meaning great) · some words are reversed twice: <s-fr>meuf</s-fr> → <s-fr>feumeu</s-fr> · the classic: <s-fr>laisse béton</s-fr> (<s-fr>laisse tomber</s-fr>), title of a 1977 song by Renaud.</p>
<div class="tip">At C2, the goal is to understand all of this effortlessly, and to choose: with friends, these markers make you sound natural; in an exam, a letter or an interview, they make you sound careless. Mastery means switching register at will.</div>
`,
    examples: [
      ["Ben, je sais pas trop, en fait.", "Well, I don't really know, actually."],
      ["Il pleuvait, du coup on est restés à la maison.", "It was raining, so we stayed at home."],
      ["Faut que j'y aille, j'suis en retard.", "I've got to go, I'm late."],
      ["Y a trop de monde, on rentre ?", "There are too many people, shall we go home?"],
      ["Moi, mon frère, il habite à Lyon.", "My brother, he lives in Lyon."],
      ["C'est quoi, ce truc ?", "What's this thing?"],
      ["C'est zarbi, cette histoire.", "This story is weird."]
    ],
    quiz: [
      { q: "Je sais pas is, in careful French:", o: ["Je ne sais pas.", "Je sais ne pas.", "Je ne sais."], a: 0, ex: "In speech, the ne often disappears." },
      { q: "Du coup means:", o: ["so, as a result", "suddenly", "at once"], a: 0, ex: "A very common spoken connector." },
      { q: "Vénère is verlan for:", o: ["énervé (angry)", "vénérable", "verre"], a: 0, ex: "The syllables are swapped: é-ner-vé → vé-nère." },
      { q: "Y a du monde is short for:", o: ["Il y a du monde.", "Il a du monde.", "Y avait du monde."], a: 0, ex: "The impersonal il disappears." },
      { q: "In a formal letter, du coup and genre:", o: ["should be avoided", "are recommended", "are compulsory"], a: 0, ex: "Switch register according to the situation." }
    ]
  },
  {
    id: 160, level: "C2", icon: "pen-line",
    title: "Une demi-heure, nu-pieds, quelque deux cents: agreement at the highest level", title_fr: "Une demi-heure, nu-pieds, quelque deux cents : les accords au plus haut niveau",
    subtitle: "The agreements that even native speakers get wrong: demi, nu, possible, quelque, tout, colours.", subtitle_fr: "Les accords sur lesquels même les francophones hésitent : demi, nu, possible, quelque, tout, les couleurs.",
    body: `
<h2>Demi and nu</h2>
<p>Before the noun, with a hyphen, invariable: <s-fr>une demi-heure</s-fr>, <s-fr>nu-pieds</s-fr> · After the noun, they agree: <s-fr>une heure et demie</s-fr> (agrees in gender only), <s-fr>pieds nus</s-fr>.</p>
<h2>Possible and quelque</h2>
<p>After <s-fr>le plus de</s-fr>, <s-fr>le moins de</s-fr>, <s-fr>possible</s-fr> stays invariable: <s-fr>le plus de livres possible</s-fr> · <s-fr>quelque</s-fr> before a number means about, and doesn't agree: <s-fr>quelque deux cents personnes</s-fr> (but <s-fr>quelques personnes</s-fr>).</p>
<h2>Tout as an adverb</h2>
<p>Meaning completely, <s-fr>tout</s-fr> is invariable, except before a feminine adjective starting with a consonant or an aspirated h: <s-fr>ils sont tout étonnés</s-fr>, <s-fr>elle est tout émue</s-fr>, but <s-fr>elle est toute seule</s-fr>, <s-fr>elles sont toutes honteuses</s-fr>.</p>
<h2>Colours</h2>
<p>A colour made of two words is invariable: <s-fr>des robes bleu clair</s-fr>, <s-fr>des yeux vert foncé</s-fr> · a colour taken from a noun usually doesn't agree: <s-fr>des yeux marron</s-fr>, <s-fr>des chaussures orange</s-fr> (but <s-fr>rose</s-fr>, <s-fr>mauve</s-fr>, <s-fr>pourpre</s-fr> agree).</p>
<h2>Feu</h2>
<p><s-fr>feu</s-fr> (the late), literary: <s-fr>feu la reine</s-fr> (invariable before the article) / <s-fr>la feue reine</s-fr>.</p>
<div class="tip">These rules are tested in dictations and appreciated in formal writing, but nobody will judge you on them in conversation. Learn the main ones (demi, nu, tout, colours): they come up constantly.</div>
`,
    examples: [
      ["J'ai attendu une demi-heure.", "I waited half an hour."],
      ["La réunion a duré deux heures et demie.", "The meeting lasted two and a half hours."],
      ["Les enfants couraient pieds nus sur la plage.", "The children were running barefoot on the beach."],
      ["Il a lu le plus de livres possible.", "He read as many books as possible."],
      ["Quelque deux cents personnes étaient présentes.", "About two hundred people were there."],
      ["Elle est restée toute seule, tout émue.", "She stayed all alone, very moved."],
      ["Elle porte des chaussures bleu marine.", "She's wearing navy blue shoes."],
      ["Il a les yeux marron.", "He has brown eyes."]
    ],
    quiz: [
      { q: "“Half past ten” is:", o: ["dix heures et demie", "dix heures et demi", "dix heures et demies"], a: 0, ex: "After the noun, demi agrees in gender: demie." },
      { q: "“Light blue shirts” is:", o: ["des chemises bleu clair", "des chemises bleues claires", "des chemises bleus clairs"], a: 0, ex: "A two-word colour is invariable." },
      { q: "“About fifty people” is:", o: ["quelque cinquante personnes", "quelques cinquante personnes", "quelque cinquantes personnes"], a: 0, ex: "quelque = about, invariable." },
      { q: "“She was all alone” is:", o: ["Elle était toute seule.", "Elle était tout seule.", "Elle était toutes seule."], a: 0, ex: "Before a feminine adjective starting with a consonant: toute." },
      { q: "“As many questions as possible” is:", o: ["le plus de questions possible", "le plus de questions possibles", "les plus de questions possible"], a: 0, ex: "possible stays invariable after le plus de." }
    ]
  },
  {
    id: 161, level: "C2", kind: "functional", icon: "mail",
    title: "Everyday French: sensitive letters", title_fr: "Le français de tous les jours : le courrier sensible",
    subtitle: "Apologise on behalf of an organisation, offer condolences, decline with grace.", subtitle_fr: "Présenter des excuses au nom d'une organisation, adresser ses condoléances, refuser avec élégance.",
    body: `
<h2>Apologising formally</h2>
<p><s-fr>Nous vous présentons nos plus sincères excuses pour…</s-fr> · <s-fr>Nous regrettons vivement ce désagrément.</s-fr> · <s-fr>Nous mesurons pleinement la gêne occasionnée.</s-fr> · Then a remedy: <s-fr>À titre de dédommagement, nous vous proposons…</s-fr></p>
<h2>Condolences</h2>
<p><s-fr>C'est avec une profonde tristesse que nous avons appris le décès de…</s-fr> · <s-fr>Je vous adresse mes sincères condoléances.</s-fr> · <s-fr>Je partage votre peine.</s-fr> · <s-fr>Nous nous associons à votre douleur.</s-fr></p>
<h2>Declining with grace</h2>
<p><s-fr>C'est avec regret que je dois décliner votre invitation.</s-fr> · <s-fr>Des engagements antérieurs ne me permettent pas de…</s-fr> · <s-fr>Je ne manquerai pas de…</s-fr> (I shall not fail to)</p>
<h2>Congratulating</h2>
<p><s-fr>Je tiens à vous adresser mes plus vives félicitations.</s-fr> · <s-fr>C'est une distinction amplement méritée.</s-fr></p>
<div class="tip">In a condolence letter, short is kind: two or three sincere sentences, a concrete memory if you have one, no advice. In an apology, never minimise and never blame the reader: acknowledge, explain briefly, repair.</div>
`,
    examples: [
      ["Nous vous présentons nos plus sincères excuses pour ce retard.", "We offer our sincere apologies for this delay."],
      ["Nous mesurons pleinement la gêne occasionnée.", "We fully appreciate the inconvenience caused."],
      ["À titre de dédommagement, nous vous proposons un avoir.", "By way of compensation, we offer you a credit note."],
      ["C'est avec une profonde tristesse que nous avons appris le décès de votre mère.", "It is with deep sadness that we learnt of your mother's death."],
      ["Je vous adresse mes sincères condoléances.", "Please accept my sincere condolences."],
      ["C'est avec regret que je dois décliner votre invitation.", "It is with regret that I must decline your invitation."],
      ["Je tiens à vous adresser mes plus vives félicitations.", "I would like to offer you my warmest congratulations."]
    ],
    quiz: [
      { q: "“Please accept my condolences” is:", o: ["Je vous adresse mes condoléances.", "Je vous donne mes condoléances.", "Je vous fais mes condoléances de."], a: 0, ex: "adresser / présenter ses condoléances." },
      { q: "“By way of compensation” is:", o: ["à titre de dédommagement", "à titre du dédommagement", "au titre dédommagement"], a: 0, ex: "à titre de." },
      { q: "A good apology letter:", o: ["acknowledges, explains briefly and repairs", "minimises the problem", "blames the reader"], a: 0, ex: "Acknowledge, explain, repair." },
      { q: "“I shall not fail to call you” is:", o: ["Je ne manquerai pas de vous appeler.", "Je ne manquerai pas à vous appeler.", "Je ne manquerai vous appeler pas."], a: 0, ex: "ne pas manquer de + infinitive." },
      { q: "A condolence letter should be:", o: ["short and sincere", "long and full of advice", "humorous"], a: 0, ex: "Short is kind." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    159: {
      gap: [["Il pleuvait, du ___ on est restés à la maison. (so, spoken)", "coup"], ["___ a trop de monde ici, on s'en va ? (there are, spoken)", "Y"], ["En ___, je n'étais pas au courant. (actually)", "fait"], ["Verlan : zarbi = ___. (strange)", "bizarre"]],
      fix: [["Madame, du coup, je vous envoie mon dossier.", "Madame, je vous envoie donc mon dossier.|Madame, je vous envoie mon dossier.", "du coup is spoken; in a formal letter, use donc."], ["Monsieur le Directeur, j'sais pas si je pourrai venir.", "Monsieur le Directeur, je ne sais pas si je pourrai venir.", "In writing, keep the ne and the full je."]],
      task: ["Rewrite this spoken message in careful written French: « Ben, en fait, j'sais pas trop, y a plein de trucs à faire, du coup j'peux pas venir, quoi. »", "Réécris ce message oral en français écrit soigné : « Ben, en fait, j'sais pas trop, y a plein de trucs à faire, du coup j'peux pas venir, quoi. »", "À vrai dire, je ne sais pas encore très bien. J'ai beaucoup de choses à faire cette semaine ; je ne pourrai donc pas venir. Je le regrette sincèrement, et j'espère que nous trouverons une autre occasion de nous voir."]
    },
    160: {
      gap: [["J'ai attendu une ___-heure. (half)", "demi"], ["La séance a duré deux heures et ___. (half)", "demie"], ["Elle est rentrée ___ seule. (all)", "toute"], ["Il y avait ___ trois cents invités. (about)", "quelque"]],
      fix: [["Elle porte des chaussures bleues foncées.", "Elle porte des chaussures bleu foncé.", "A two-word colour is invariable."], ["Prenez le plus de photos possibles.", "Prenez le plus de photos possible.", "possible stays invariable after le plus de."]],
      task: ["Describe a photo of a family celebration in four sentences, with demi, tout, a two-word colour and quelque.", "Décris la photo d'une fête de famille en quatre phrases, avec demi, tout, une couleur composée et quelque.", "Sur cette photo, prise vers midi et demi, quelque trente personnes sont réunies dans le jardin de mes grands-parents. Ma grand-mère, tout émue, souffle ses quatre-vingt-dix bougies. Les enfants, pieds nus dans l'herbe, portent des chemises bleu clair. Ma cousine, toute seule au fond, attend sa part de gâteau depuis une demi-heure."]
    },
    161: {
      gap: [["Je vous adresse mes sincères ___. (condolences)", "condoléances"], ["À titre de ___, nous vous proposons un avoir. (compensation)", "dédommagement"], ["C'est avec ___ que je dois décliner votre invitation. (regret)", "regret"], ["Je ne ___ pas de vous rappeler. (shall not fail)", "manquerai"]],
      fix: [["Nous nous excusons pour le désagrément que vous avez causé.", "Nous nous excusons pour le désagrément qui vous a été causé.|Nous vous présentons nos excuses pour le désagrément occasionné.", "Never blame the reader in an apology."], ["Je vous présente mes condoléances pour le décès de votre père, mais la vie continue.", "Je vous présente mes sincères condoléances pour le décès de votre père.", "No advice and no platitudes in a condolence message."]],
      task: ["Write a short condolence message to someone on your team who has just lost their mother, in three or four sentences.", "Écris un court message de condoléances à une personne de ton équipe qui vient de perdre sa mère, en trois ou quatre phrases.", "C'est avec une profonde tristesse que j'ai appris le décès de ta mère. Je garde le souvenir de son sourire, le jour où elle était venue nous apporter des crêpes au bureau. Je t'adresse mes sincères condoléances et je pense bien à toi et à tes proches. Si tu as besoin de quoi que ce soit, je suis là."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "excusesc2", lesson: 161, level: "C2", icon: "concierge-bell", partner: "Véronique", role: "a hotel guest",
    title: "The cancelled booking", title_fr: "La réservation annulée",
    setting: "You manage a hotel in Annecy. Véronique, a guest, arrives late in the evening and finds out that her booking was cancelled by mistake.", setting_fr: "Tu diriges un hôtel à Annecy. Véronique, une cliente, arrive tard le soir et découvre que sa réservation a été annulée par erreur.",
    turns: [
      { p: "Bonsoir. J'avais réservé une chambre pour trois nuits, et on me dit qu'elle n'existe plus. C'est inadmissible !", fr: "Good evening. I'd booked a room for three nights, and I'm told it no longer exists. This is unacceptable!" },
      { y: ["Je vous présente toutes nos excuses, madame. L'erreur vient de nous, et je mesure pleinement la gêne occasionnée.", "Je vous présente toutes nos excuses, madame. L'erreur vient de vous, et je mesure pleinement la gêne occasionnée.", "Je vous présente tous nos excuses, madame. L'erreur vient de nous, et je mesure pleinement la gêne occasionnée."], fr: "Please accept all our apologies, madam. The mistake is ours, and I fully appreciate the inconvenience caused.", why: "Take responsibility; les excuses is feminine: toutes nos excuses." },
      { p: "Une erreur ? J'ai pourtant reçu une confirmation il y a un mois.", fr: "A mistake? But I received a confirmation a month ago." },
      { y: ["Vous avez tout à fait raison : votre réservation a été annulée par erreur lors d'une mise à jour de notre système.", "Vous avez tout à fait raison : votre réservation a été annulé par erreur lors d'une mise à jour de notre système.", "Vous avez tout à fait raison : votre réservation a annulé par erreur lors d'une mise à jour de notre système."], fr: "You're quite right: your booking was cancelled by mistake during an update of our system.", why: "Passive voice: a été annulée agrees with réservation." },
      { p: "Et maintenant ? Il est vingt-deux heures, je ne vais pas dormir dans la rue.", fr: "And now what? It's ten o'clock at night, I'm not going to sleep in the street." },
      { y: ["Bien sûr que non. Nous vous avons trouvé une chambre dans un hôtel partenaire, et un taxi vous y conduira.", "Bien sûr que non. Nous vous avons trouvée une chambre dans un hôtel partenaire, et un taxi vous y conduira.", "Bien sûr que non. Nous vous avons trouvé une chambre dans un hôtel partenaire, et un taxi vous en conduira."], fr: "Of course not. We've found you a room in a partner hotel, and a taxi will take you there.", why: "vous is an indirect object here (for you): no agreement; a place → y." },
      { p: "Et pour le désagrément ?", fr: "And what about the inconvenience?" },
      { y: ["À titre de dédommagement, les trois nuits vous sont offertes, ainsi que le petit déjeuner.", "À titre du dédommagement, les trois nuits vous sont offertes, ainsi que le petit déjeuner.", "À titre de dédommagement, les trois nuits vous sont offerts, ainsi que le petit déjeuner."], fr: "By way of compensation, the three nights are on us, as well as breakfast.", why: "à titre de; les nuits is feminine: offertes." },
      { p: "Bon. Je reconnais que vous faites les choses bien.", fr: "Well. I admit you're handling this properly." },
      { y: ["Je vous remercie de votre compréhension. Nous ferons tout pour que la suite de votre séjour soit irréprochable.", "Je vous remercie de votre compréhension. Nous ferons tout pour que la suite de votre séjour est irréprochable.", "Je vous remercie de votre compréhension. Nous ferons tout pour que la suite de votre séjour sera irréprochable."], fr: "Thank you for your understanding. We'll do everything to make the rest of your stay flawless.", why: "pour que + subjunctive: soit." }
    ] }
  );

  W.READINGS.push({
    id: "francaisparle", level: "C2", icon: "speech", title: "Le français qu'on parle vraiment", genre: "Article",
    intro: "Chais pas, on va où, moi mon frère il…: the French spoken around a table has its own rules. A degraded language, or another way of speaking?",
    intro_fr: "Chais pas, on va où, moi mon frère il… : le français qu'on parle autour d'une table a ses propres règles. Langue dégradée, ou autre façon de parler ?",
    paragraphs: [
      { en: "Il suffit de passer une soirée avec des francophones pour le constater : le français qu'on entend autour d'une table ne ressemble guère à celui des manuels. Ici, personne ne dit « Je ne sais pas », mais « chais pas » ; on ne demande pas « Où allons-nous ? », mais « On va où ? ». Bien des personnes qui maîtrisaient parfaitement le subjonctif découvrent alors, un peu désemparées, qu'elles ne comprennent plus rien.", fr: "Spend an evening with French speakers and you'll see it: the French you hear around a table hardly resembles the French of textbooks. Here, nobody says “Je ne sais pas” but “chais pas”; people don't ask “Où allons-nous ?” but “On va où ?”. Many people who had perfectly mastered the subjunctive then discover, rather at a loss, that they no longer understand a thing." },
      { en: "Les linguistes l'ont maintes fois observé : dans la conversation spontanée, le ne de la négation tombe le plus souvent, y compris chez les locuteurs les plus instruits. Le pronom on a presque entièrement remplacé nous, et les questions se font par la seule intonation. Quant à la phrase, elle se construit volontiers par détachement : « Moi, mon frère, il habite à Lyon », là où l'écrit dirait simplement « Mon frère habite à Lyon ».", fr: "Linguists have observed it many times: in spontaneous conversation, the ne of the negation is usually dropped, even by the most educated speakers. The pronoun on has almost entirely replaced nous, and questions are asked by intonation alone. As for the sentence, it is readily built by dislocation: “Moi, mon frère, il habite à Lyon”, where writing would simply say “Mon frère habite à Lyon”." },
      { en: "Faut-il y voir un français dégradé ? La linguiste Claire Blanche-Benveniste, qui a consacré une grande partie de ses travaux à la langue parlée, a défendu l'idée contraire : l'oral n'est pas un écrit mal fait, mais une langue qui obéit à sa propre organisation. Les hésitations, les reprises et les petits mots comme « bon », « ben » ou « du coup » y jouent un rôle précis : ils permettent de gagner du temps, de marquer une transition ou de ménager son interlocuteur.", fr: "Should we see it as degraded French? The linguist Claire Blanche-Benveniste, who devoted a large part of her work to the spoken language, defended the opposite view: speech is not badly written language, but a language that follows its own organisation. Hesitations, restarts and little words such as “bon”, “ben” or “du coup” play a precise role in it: they help you buy time, mark a transition or handle the person you're talking to with care." },
      { en: "À ces traits s'ajoute un vocabulaire en perpétuel renouvellement. Le verlan, qui inverse les syllabes des mots (son nom même vient de « l'envers »), a donné à la langue courante des termes comme « relou » ou « zarbi ». En 1977, le chanteur Renaud en faisait déjà le titre d'une chanson, Laisse béton, autrement dit « laisse tomber ». Certains mots, comme « meuf », ont même été verlanisés une seconde fois : « feumeu ».", fr: "On top of these features comes a vocabulary in constant renewal. Verlan, which reverses the syllables of words (its very name comes from “l'envers”, the reverse), has given everyday language words like “relou” or “zarbi”. In 1977, the singer Renaud was already using it in the title of a song, Laisse béton, in other words “laisse tomber” (forget it). Some words, like “meuf”, have even been put into verlan a second time: “feumeu”." },
      { en: "Pour qui apprend le français, la leçon est double. Il faut comprendre ce français-là, faute de quoi films, chansons et conversations restent hors de portée. Mais il faut aussi savoir s'en garder : un « du coup » dans une lettre de motivation ou un « j'sais pas » face à un jury fera le plus mauvais effet. Maîtriser une langue, ce n'est pas parler d'une seule voix : c'est savoir changer de registre selon la situation.", fr: "For anyone learning French, the lesson is twofold. You need to understand this French, or films, songs and conversations will stay out of reach. But you also need to know how to steer clear of it: a “du coup” in a cover letter or a “j'sais pas” in front of an exam board will make the worst possible impression. Mastering a language doesn't mean speaking with a single voice: it means being able to change register according to the situation." }
    ],
    glossary: { "guère": "hardly", "désemparées": "at a loss", "maintes": "many (maintes fois: many times)", "instruits": "educated", "détachement": "detachment (here: dislocation)", "dégradé": "degraded, debased", "reprises": "restarts, repetitions", "ménager": "to handle with care", "interlocuteur": "the person one is talking to", "renouvellement": "renewal", "verlanisés": "turned into verlan", "portée": "reach (hors de portée: out of reach)", "garder": "se garder de: to steer clear of" },
    questions: [
      { q: "Que constate-t-on en passant une soirée avec des francophones ?", o: ["Le français parlé ne ressemble guère à celui des manuels.", "Tout le monde parle comme dans les livres.", "Personne n'emploie plus le pronom on."], a: 0 },
      { q: "Qu'arrive-t-il au ne de la négation dans la conversation spontanée ?", o: ["Il tombe le plus souvent, même chez les locuteurs instruits.", "Il est toujours prononcé.", "Il ne disparaît que chez les enfants."], a: 0 },
      { q: "Quelle idée Claire Blanche-Benveniste a-t-elle défendue ?", o: ["L'oral obéit à sa propre organisation.", "L'oral est un écrit mal fait.", "Il faut bannir les mots comme ben."], a: 0 },
      { q: "D'où vient le mot verlan ?", o: ["Du mot l'envers, mis à l'envers", "D'un chanteur des années 1970", "D'une ville du sud de la France"], a: 0 },
      { q: "Quelle double leçon l'auteur tire-t-il ?", o: ["Comprendre le français parlé, et savoir changer de registre", "Parler uniquement comme dans la rue", "Ne jamais employer le français familier"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-c2-9", unit: "c2-9", level: "C2", icon: "audio-lines",
    title: "Le déménagement de Margaux", title_fr: "Le déménagement de Margaux",
    context: "Two friends, Margaux and Bastien, talk on the phone in very casual French. Margaux is moving house.", context_fr: "Deux amis, Margaux et Bastien, se parlent au téléphone dans un français très familier. Margaux déménage.",
    words: [["le proprio", "the landlord (informal, from propriétaire)"], ["un carton", "a cardboard box"], ["être à la bourre", "to be running late (informal)"], ["filer un coup de main", "to lend a hand (informal)"], ["sérieux ?", "really? (informal)"]],
    lines: [["Bastien", "Salut Margaux ! Alors, ce déménagement, ça avance ?", "fr-FR"], ["Margaux", "Bof, pas trop. En fait, le proprio m'a appelée hier : faut que je rende les clés samedi, pas dimanche. Du coup, j'ai un jour de moins, quoi.", "fr-FR"], ["Bastien", "Ah ouais, ça craint. T'as encore beaucoup de cartons à faire ?", "fr-FR"], ["Margaux", "Ben, la cuisine, les livres… enfin, tout, quoi. J'suis carrément à la bourre.", "fr-FR"], ["Bastien", "T'inquiète, j'peux te filer un coup de main vendredi soir. Et samedi matin, j'ai le camion de mon frère.", "fr-FR"], ["Margaux", "Sérieux ? Tu me sauves la vie. Mais attends, ton frère, il en a pas besoin, de son camion ?", "fr-FR"], ["Bastien", "Non, non, il est en vacances jusqu'à mardi. Bon, voilà : vendredi, dix-neuf heures chez toi, et j'apporte les pizzas.", "fr-FR"], ["Margaux", "Ça marche ! Merci, t'es génial.", "fr-FR"]],
    gist: ["De quoi parlent Margaux et Bastien ?", ["Du déménagement de Margaux", "D'un voyage en camion", "D'une soirée entre collègues"]],
    detail: [["Pourquoi Margaux a-t-elle un jour de moins ?", ["Elle doit rendre les clés samedi au lieu de dimanche.", "Elle part en vacances dimanche.", "Son frère a besoin du camion."]], ["Que lui reste-t-il à faire ?", ["Presque tous les cartons", "Seulement la cuisine", "Rien du tout"]], ["Que propose Bastien ?", ["De l'aider vendredi soir et d'apporter un camion samedi matin", "De lui prêter de l'argent", "De rendre les clés à sa place"]], ["Pourquoi le frère de Bastien n'a-t-il pas besoin du camion ?", ["Il est en vacances jusqu'à mardi.", "Il en a acheté un autre.", "Il déménage aussi."]]],
    decode: ["faut que je rende les clés samedi", "il en a pas besoin, de son camion"],
    tip: "Notice what disappears (the ne, the il of il faut, the u of tu) and what appears (en fait, du coup, quoi, ben). Try writing the dialogue out in careful French: you'll see how far apart the two codes are.", tip_fr: "Remarque ce qui disparaît (le ne, le il de il faut, le u de tu) et ce qui apparaît (en fait, du coup, quoi, ben). Essaie de réécrire le dialogue en français soigné : tu verras à quel point les deux codes sont éloignés."
  }]);

  W.LEXIS = W.LEXIS || {};
  W.LEXIS["c2-9"] = {
    colloc: [
      ["présenter ses condoléances", "to offer one's condolences", "Je tiens à vous présenter mes condoléances.", "présenter", ["donner", "porter"]],
      ["adresser ses excuses", "to send one's apologies", "La direction vous adresse ses excuses.", "adresse", ["poste", "lance"]],
      ["témoigner sa sympathie", "to express one's sympathy", "Je voulais vous témoigner ma sympathie.", "témoigner", ["prouver", "signer"]],
      ["décliner une invitation", "to decline an invitation", "Elle a dû décliner l'invitation.", "décliner", ["descendre", "baisser"]],
      ["assumer ses responsabilités", "to take responsibility", "L'entreprise doit assumer ses responsabilités.", "assumer", ["supposer", "présumer"]],
      ["réparer un préjudice", "to make good a loss", "L'assureur devra réparer le préjudice subi.", "réparer", ["fixer", "soigner"]],
      ["dédommager un client", "to compensate a customer", "Nous allons dédommager les clients concernés.", "dédommager", ["endommager", "compenser"]],
      ["faire amende honorable", "to make amends publicly", "Le ministre a fait amende honorable.", "fait", ["donné", "rendu"]],
      ["employer un registre", "to use a register", "Il faut employer un registre adapté à la situation.", "employer", ["exercer", "jouer"]],
      ["mesurer la gêne occasionnée", "to appreciate the inconvenience caused", "Nous mesurons la gêne occasionnée.", "mesurons", ["pesons", "comptons"]]
    ],
    wf: [
      ["Nous avons appris avec tristesse le ___ de votre père. (DÉCÉDER)", "décès"],
      ["Veuillez nous excuser pour ce ___. (DÉSAGRÉABLE)", "désagrément"],
      ["Un ___ vous sera versé sous huit jours. (DÉDOMMAGER)", "dédommagement"],
      ["Ce mot est trop ___ pour une lettre officielle. (FAMILLE)", "familier"],
      ["J'aime la ___ de ses réponses. (SPONTANÉ)", "spontanéité"],
      ["Je vous remercie de votre ___ dans cette épreuve. (BIENVEILLANT)", "bienveillance"],
      ["L'___ du sujet est rare dans les questions orales. (INVERSER)", "inversion"],
      ["La chute du ne est très ___ à l'oral. (FRÉQUENCE)", "fréquente"]
    ],
    kwt: [
      ["Nous regrettons sincèrement ce retard.", "EXCUSES", "Nous vous ___ pour ce retard.", "présentons nos sincères excuses|présentons toutes nos excuses|présentons nos excuses|adressons nos sincères excuses|adressons toutes nos excuses|adressons nos excuses"],
      ["Il y avait environ deux cents personnes.", "QUELQUE", "Il y avait ___.", "quelque deux cents personnes"],
      ["Il a lu autant de livres qu'il le pouvait.", "POSSIBLE", "Il a lu ___.", "le plus de livres possible"],
      ["Je vous remercie d'avoir pensé à moi dans ce moment difficile.", "SOLLICITUDE", "Je vous remercie ___ dans ce moment difficile.", "de votre sollicitude|pour votre sollicitude"],
      ["Je regrette, mais je ne peux pas accepter votre invitation.", "DÉCLINER", "C'est avec regret que ___.", "je dois décliner votre invitation|je me dois de décliner votre invitation"],
      ["Le ministre a reconnu publiquement son erreur et s'est excusé.", "AMENDE", "Le ministre ___.", "a fait amende honorable"]
    ],
    idioms: [
      ["tenir la jambe à quelqu'un", "retenir quelqu'un par une conversation interminable", "to buttonhole someone", "Il m'a tenu la jambe pendant une heure.", "m'a tenu la jambe"],
      ["ne pas pouvoir en placer une", "ne pas réussir à prendre la parole", "not to get a word in edgeways", "Avec lui, impossible d'en placer une !", "d'en placer une"],
      ["tourner autour du pot", "ne pas aller droit au but", "to beat about the bush", "Arrête de tourner autour du pot et dis-moi ce qui se passe.", "tourner autour du pot"],
      ["être tout ouïe", "écouter très attentivement", "to be all ears", "Je suis tout ouïe : raconte-moi tout.", "Je suis tout ouïe"],
      ["mettre les formes", "s'exprimer avec tact et politesse", "to put things tactfully", "Tu peux refuser, mais mets les formes.", "mets les formes"],
      ["être sur la même longueur d'onde", "bien se comprendre", "to be on the same wavelength", "Dès la première réunion, nous étions sur la même longueur d'onde.", "sur la même longueur d'onde"],
      ["parler à bâtons rompus", "parler librement, sans suivre d'ordre précis", "to chat about this and that", "Nous avons parlé à bâtons rompus toute la soirée.", "parlé à bâtons rompus"],
      ["tenir le crachoir", "monopoliser la parole", "to hog the conversation", "À chaque dîner, c'est lui qui tient le crachoir.", "tient le crachoir"]
    ]
  };

  W.PROMPTS.push({ id: "fr-c2-9", level: "C2", q: "Quelles différences remarques-tu entre le français des manuels et celui qu'on entend dans la rue ?", fr: "What differences do you notice between textbook French and the French you hear in the street?", time: 240,
    phrases: ["Ce qui me frappe le plus, c'est…", "S'y ajoutent…", "Pour autant, …", "selon la situation", "passer d'un registre à l'autre"],
    model: "La première fois que j'ai regardé un film français sans sous-titres, je n'ai presque rien compris, alors que je lisais sans difficulté des romans entiers. Ce qui me frappe le plus, c'est que l'oral n'obéit pas aux mêmes règles : le ne disparaît, le il de il faut aussi, et les phrases se construisent autrement, avec des tournures comme moi, mon frère, il… S'y ajoutent des petits mots que les manuels ignorent : du coup, en fait, quoi. Pour autant, je ne crois pas qu'il faille parler d'un français dégradé : c'est une autre façon de parler, qui a sa propre logique. L'idéal serait d'apprendre les deux, et de savoir passer d'un registre à l'autre selon la situation." });

  W.WRITING_GUIDE["c2-9"] = { genre: "A formal letter of apology (on behalf of an organisation)", genre_fr: "Une lettre d'excuses officielle (au nom d'une organisation)",
    plan: [["Acknowledge the problem and apologise at once.", "Reconnais le problème et présente des excuses d'emblée."], ["Explain briefly what happened, without making excuses.", "Explique brièvement ce qui s'est passé, sans te dédouaner."], ["Show that you understand the impact on the reader.", "Montre que tu mesures les conséquences pour le lecteur."], ["Announce the remedy and what will change.", "Annonce la réparation et ce qui va changer."], ["Close with renewed apologies and a formal closing formula.", "Termine par des excuses renouvelées et une formule de politesse."]],
    marks: [["je vous présente nos plus sincères excuses", "a formal apology", "des excuses formelles"], ["Je vous dois d'abord une explication.", "announcing the explanation", "annoncer l'explication"], ["nous en assumons l'entière responsabilité", "taking full responsibility", "assumer pleinement la responsabilité"], ["Je mesure pleinement la déception", "acknowledging the reader's feelings", "reconnaître ce que ressent le lecteur"], ["Nous tenons néanmoins à réparer ce qui peut l'être.", "turning to the remedy", "passer à la réparation"], ["En vous renouvelant nos excuses", "renewed apologies in the closing formula", "des excuses renouvelées dans la formule finale"]] };

  W.COURSE.push({ id: "c2-9", level: "C2", icon: "speech", title: "Living speech", title_fr: "Paroles vivantes",
    intro: "In this unit, you'll explore French as it is really spoken: discourse markers (du coup, en fait, ben), what disappears and how sentences are built in spontaneous speech, the trickiest agreements of written French (demi, nu, quelque, tout, two-word colours), and the art of sensitive letters: apologies, condolences, polite refusals.",
    intro_fr: "Dans cette unité, tu vas explorer le français tel qu'on le parle vraiment : les marqueurs du discours (du coup, en fait, ben), ce qui disparaît et la manière dont se construisent les phrases à l'oral spontané, les accords les plus délicats de l'écrit (demi, nu, quelque, tout, les couleurs composées), et l'art du courrier sensible : excuses, condoléances, refus courtois.",
    can: ["Understand spontaneous spoken French, with its markers and reductions", "Switch between spoken and written registers at will", "Master the trickiest agreements of written French", "Write sensitive letters: apologies, condolences, refusals", "Write a formal letter of apology on behalf of an organisation"],
    can_fr: ["Comprendre le français oral spontané, avec ses marqueurs et ses réductions", "Passer à volonté du registre oral au registre écrit", "Maîtriser les accords les plus délicats de l'écrit", "Rédiger un courrier sensible : excuses, condoléances, refus", "Rédiger une lettre d'excuses officielle au nom d'une organisation"],
    lessons: [159, 160, 161], vocab: ["oralFR", "courrierFR"], reading: "francaisparle", prompt: "fr-c2-9",
    writing: { task: "A festival's closing night was cancelled at the last minute. On behalf of the festival's management, write a letter of apology to the audience (350-400 words): explain, take responsibility, propose a remedy.", task_fr: "La soirée de clôture d'un festival a été annulée à la dernière minute. Au nom de la direction du festival, rédige une lettre d'excuses au public (350 à 400 mots) : explique, assume, propose une réparation.", words: "350-400",
      tips: ["C'est avec un profond regret que…", "Je vous dois une explication.", "Nous en assumons l'entière responsabilité.", "À titre de dédommagement, …", "En vous renouvelant nos excuses, …"],
      checklist: ["I apologised at the very start", "I explained without making excuses", "I took responsibility", "I proposed a concrete remedy", "I used a formal closing formula", "I wrote between 350 and 400 words"],
      model: "Objet : annulation de la soirée de clôture du 14 septembre\n\nMadame, Monsieur,\n\nC'est avec un profond regret que je vous écris aujourd'hui. Samedi dernier, la soirée de clôture des Nuits du Lac a été annulée moins de deux heures avant l'ouverture des portes, alors que nombre d'entre vous étaient déjà en route, voire installés devant la scène. Au nom de toute l'équipe, je vous présente nos plus sincères excuses.\n\nJe vous dois d'abord une explication. Vers dix-huit heures, les services météorologiques ont annoncé de violents orages sur le lac, et la préfecture nous a demandé d'évacuer le site. La sécurité du public ne se négocie pas, et je ne regrette pas cette décision. Ce que je regrette, en revanche, c'est la manière dont elle vous a été annoncée : un simple message sur nos réseaux sociaux, puis des haut-parleurs inaudibles sous la pluie. Plusieurs d'entre vous ont attendu près d'une heure sans la moindre information. C'est inacceptable, et nous en assumons l'entière responsabilité.\n\nJe mesure pleinement la déception qui a été la vôtre. Certains avaient fait plusieurs centaines de kilomètres, réservé un hôtel, organisé la garde de leurs enfants ; d'autres attendaient ce concert depuis des mois. Aucun dédommagement ne remplacera cette soirée. Nous tenons néanmoins à réparer ce qui peut l'être.\n\nLes billets seront intégralement remboursés sous quinze jours, sans aucune démarche de votre part. Les personnes qui le préfèrent pourront conserver leur billet pour la soirée de rattrapage, que nous organiserons le 5 octobre avec les mêmes artistes. Enfin, les spectateurs qui ont engagé des frais de transport ou d'hébergement peuvent nous adresser leurs justificatifs : nous les prendrons en charge, dans la limite de cent euros par personne.\n\nNous avons aussi tiré les leçons de cette soirée. Dès l'an prochain, un système d'alerte par SMS permettra de prévenir chaque spectateur en quelques minutes, et une équipe sera spécialement chargée de l'information du public en cas d'imprévu.\n\nJe sais que la confiance ne se décrète pas : elle se regagne. Nous espérons que vous nous donnerez l'occasion de le faire.\n\nEn vous renouvelant nos excuses, je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.\n\nHélène Garnier\nDirectrice du festival Les Nuits du Lac" } });
})();
