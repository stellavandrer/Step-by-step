/* Cours de français, unité B2-10 « Taking a stand / S'engager et convaincre » : les degrés de certitude (il est
   indéniable que + indicatif, il se peut que + subjonctif, il me semble que / il semble que), structurer un exposé
   oral (épreuve orale du DELF B2), défendre son point de vue face aux questions. Dernière unité du B2. Personnages
   fictifs, prénoms français. Faits vérifiables seulement : à l'oral du DELF B2, trente minutes de préparation puis
   une vingtaine de minutes d'épreuve à partir d'un court document ; les bus sont gratuits à Dunkerque depuis 2018
   et les transports en commun au Luxembourg depuis 2020. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "engagementFR", icon: "megaphone", title: "Taking a stand", title_fr: "S'engager", level: "B2", words: [
    ["la cause", "the cause", "C'est une cause qui me tient à cœur."],
    ["défendre une cause", "to champion a cause", "Elle défend la cause des animaux."],
    ["la pétition", "the petition", "La pétition a recueilli dix mille signatures."],
    ["signer une pétition", "to sign a petition", "J'ai signé une pétition en ligne."],
    ["se mobiliser", "to mobilise, to take action together", "Les habitants se sont mobilisés pour sauver l'école."],
    ["la mobilisation", "the mobilisation", "La mobilisation des étudiants a été massive."],
    ["le militant / la militante", "the activist (m) / (f)", "Les militants ont distribué des tracts."],
    ["le collectif", "the collective, the group", "Un collectif de parents a écrit au maire."],
    ["la tribune", "the opinion piece", "Elle a publié une tribune dans un grand journal."],
    ["le plaidoyer", "the plea, the case (for something)", "Son discours est un plaidoyer pour l'éducation."],
    ["sensibiliser", "to raise awareness", "Il faut sensibiliser les jeunes au tri des déchets."],
    ["la sensibilisation", "awareness-raising", "Une campagne de sensibilisation commence lundi."],
    ["l'opinion publique", "public opinion", "L'opinion publique a changé."],
    ["faire bouger les choses", "to make things happen", "Ensemble, on peut faire bouger les choses."],
    ["passer à l'action", "to take action", "Il est temps de passer à l'action."],
    ["le changement", "change", "Le changement fait peur à certains."],
    ["l'appel aux dons", "the appeal for donations", "L'association a lancé un appel aux dons."],
    ["défiler", "to march (in a demonstration)", "Des milliers de personnes ont défilé dans les rues."]
  ] },
  { id: "exposeFR", icon: "presentation", title: "Giving a talk", title_fr: "Faire un exposé", level: "B2", words: [
    ["la présentation orale", "the oral presentation", "La présentation orale dure dix minutes."],
    ["le document de départ", "the starting document", "Lisez d'abord le document de départ."],
    ["dégager une idée", "to bring out an idea", "Ce texte permet de dégager deux idées principales."],
    ["en premier lieu", "first, in the first place", "En premier lieu, je présenterai le document."],
    ["en second lieu", "secondly", "En second lieu, je donnerai mon avis."],
    ["passons à", "let's move on to", "Passons maintenant à la deuxième partie."],
    ["j'en viens à", "I now come to", "J'en viens à mon dernier argument."],
    ["pour conclure", "to conclude", "Pour conclure, je dirais que…"],
    ["en guise de conclusion", "by way of conclusion", "En guise de conclusion, voici une proposition."],
    ["il convient de", "it is appropriate to, one should", "Il convient de nuancer cette idée."],
    ["mettre l'accent sur", "to emphasise", "Je voudrais mettre l'accent sur un point."],
    ["illustrer", "to illustrate", "Je vais illustrer cette idée par un exemple."],
    ["le support visuel", "the visual aid", "Un support visuel aide le public à suivre."],
    ["reformuler", "to rephrase", "Pouvez-vous reformuler votre question ?"],
    ["si j'ai bien compris", "if I understand correctly", "Si j'ai bien compris, vous êtes contre ?"],
    ["à vrai dire", "to tell the truth", "À vrai dire, je n'y avais pas pensé."],
    ["dans l'ensemble", "on the whole", "Dans l'ensemble, je suis d'accord."],
    ["le temps de parole", "speaking time", "Chaque candidat a le même temps de parole."]
  ] });

  W.LESSONS.push(
  {
    id: 102, level: "B2", icon: "scale",
    title: "Il est indéniable que, il se peut que: degrees of certainty", title_fr: "Il est indéniable que, il se peut que : les degrés de certitude",
    subtitle: "From certain to doubtful: the right phrase, and the mood that goes with it.", subtitle_fr: "Du certain au douteux : la bonne formule, et le mode qui l'accompagne.",
    body: `
<h2>From certain to doubtful</h2>
<table>
<tr><th>Degree</th><th>French</th></tr>
<tr><td>certain<br>+ indicative</td><td><s-fr>il est certain que</s-fr>, <s-fr>il est évident que</s-fr>, <s-fr>il est indéniable que</s-fr>, <s-fr>il ne fait aucun doute que</s-fr>, <s-fr>j'ai la conviction que</s-fr></td></tr>
<tr><td>probable<br>+ indicative</td><td><s-fr>il est probable que</s-fr>, <s-fr>il me semble que</s-fr>, <s-fr>sans doute</s-fr></td></tr>
<tr><td>possible<br>+ subjunctive</td><td><s-fr>il est possible que</s-fr>, <s-fr>il se peut que</s-fr>, <s-fr>il n'est pas exclu que</s-fr></td></tr>
<tr><td>doubtful<br>+ subjunctive</td><td><s-fr>il est peu probable que</s-fr>, <s-fr>je doute que</s-fr>, <s-fr>rien ne prouve que</s-fr></td></tr>
</table>
<p><s-fr>Il est indéniable que les transports polluent.</s-fr> · <s-fr>Il se peut que la mesure soit efficace.</s-fr> · <s-fr>Rien ne prouve que ce projet soit rentable.</s-fr></p>
<h2>Verbs of opinion</h2>
<p><s-fr>estimer que</s-fr>, <s-fr>considérer que</s-fr>, <s-fr>juger que</s-fr> take the indicative: <s-fr>J'estime que cette mesure est nécessaire.</s-fr> In the negative or a question, they can take the subjunctive: <s-fr>Je n'estime pas que ce soit nécessaire.</s-fr></p>
<h2>Nuancing words</h2>
<p><s-fr>dans une certaine mesure</s-fr> (to some extent) · <s-fr>jusqu'à un certain point</s-fr> · <s-fr>en partie</s-fr> · <s-fr>à mon sens</s-fr> (in my view) · <s-fr>plus ou moins</s-fr></p>
<div class="tip">A classic trap: <s-fr>il me semble que</s-fr> takes the indicative (I think), but <s-fr>il semble que</s-fr> takes the subjunctive (it seems, with doubt): <s-fr>Il me semble qu'il a raison</s-fr> / <s-fr>Il semble qu'il ait raison</s-fr>.</div>
`,
    examples: [
      ["Il est indéniable que la voiture pollue en ville.", "It's undeniable that cars cause pollution in towns."],
      ["Il ne fait aucun doute que cette cause est juste.", "There's no doubt that this cause is just."],
      ["Il me semble que cette solution est la meilleure.", "I think this solution is the best."],
      ["Il se peut que la mesure soit efficace.", "The measure may well be effective."],
      ["Il n'est pas exclu que le projet soit abandonné.", "It can't be ruled out that the project will be dropped."],
      ["Il est peu probable que la loi change cette année.", "The law is unlikely to change this year."],
      ["Rien ne prouve que ce soit rentable.", "Nothing proves that it's profitable."],
      ["Dans une certaine mesure, je suis d'accord avec vous.", "To some extent, I agree with you."]
    ],
    quiz: [
      { q: "“It's undeniable that it's expensive”:", o: ["Il est indéniable que c'est cher.", "Il est indéniable que ce soit cher.", "Il est indéniable de c'est cher."], a: 0, ex: "Certainty: indicative." },
      { q: "“It may rain”:", o: ["Il se peut qu'il pleut.", "Il se peut qu'il pleuve.", "Il se peut qu'il pleuvra."], a: 1, ex: "Possibility: subjunctive." },
      { q: "“I think he's right” (il me semble):", o: ["Il me semble qu'il a raison.", "Il me semble qu'il ait raison.", "Il me semble il a raison."], a: 0, ex: "il me semble que + indicative." },
      { q: "“The project is unlikely to succeed”:", o: ["Il est peu probable que le projet réussit.", "Il est peu probable que le projet réussisse.", "Il est peu probable du projet réussir."], a: 1, ex: "Doubt: subjunctive." },
      { q: "“To some extent” is:", o: ["dans une certaine mesure", "à une certaine mesure", "dans une mesure certaine"], a: 0, ex: "dans une certaine mesure." }
    ]
  },
  {
    id: 103, level: "B2", icon: "presentation",
    title: "En premier lieu, j'en viens à: structuring an oral presentation", title_fr: "En premier lieu, j'en viens à : structurer un exposé oral",
    subtitle: "Introduce a document, raise a question, announce a plan and guide your listener to the end.", subtitle_fr: "Présenter un document, poser une question, annoncer un plan et guider ton auditoire jusqu'au bout.",
    body: `
<h2>The DELF B2 speaking exam</h2>
<p>You get a short document (an article, an opinion) and thirty minutes to prepare. Then, for about twenty minutes, you present the question it raises and your point of view, and you discuss it with the examiner.</p>
<h2>1. Introduce</h2>
<p>Present the document: <s-fr>Le document que j'ai choisi est un article qui traite de…</s-fr> · Bring out the question: <s-fr>Ce texte soulève la question suivante : …</s-fr> · <s-fr>On peut donc se demander si…</s-fr> · Announce your plan: <s-fr>En premier lieu, je présenterai…, en second lieu, je montrerai…</s-fr></p>
<h2>2. Develop</h2>
<p>Two or three parts, each with an argument and an example: <s-fr>Tout d'abord…</s-fr> · <s-fr>Prenons l'exemple de…</s-fr> · <s-fr>Je voudrais mettre l'accent sur…</s-fr></p>
<p>Transitions: <s-fr>Passons maintenant à…</s-fr> · <s-fr>J'en viens à…</s-fr> · <s-fr>Après avoir vu les avantages, voyons les limites.</s-fr></p>
<h2>3. Conclude</h2>
<p><s-fr>Pour conclure, …</s-fr> · <s-fr>En guise de conclusion, …</s-fr> · <s-fr>En définitive, …</s-fr> Sum up your position in one or two sentences and, if you can, open up the debate: <s-fr>Reste à savoir si…</s-fr></p>
<div class="tip">Don't summarise the document line by line: the examiner wants your own point of view, organised and supported. On your draft, write only key words, never full sentences to read aloud.</div>
`,
    examples: [
      ["Le document que j'ai choisi est un article qui traite du télétravail.", "The document I chose is an article about remote working."],
      ["Ce texte soulève la question suivante : faut-il interdire les voitures en ville ?", "This text raises the following question: should cars be banned in towns?"],
      ["On peut donc se demander si cette mesure est efficace.", "So we may ask whether this measure is effective."],
      ["En premier lieu, je présenterai les avantages ; en second lieu, les limites.", "First, I'll present the advantages; secondly, the limits."],
      ["Prenons l'exemple de ma ville.", "Let's take the example of my town."],
      ["Passons maintenant à la deuxième partie.", "Let's now move on to the second part."],
      ["Après avoir vu les avantages, voyons les limites.", "Having looked at the advantages, let's look at the limits."],
      ["En guise de conclusion, je dirais que tout dépend des moyens.", "By way of conclusion, I'd say it all depends on the resources."]
    ],
    quiz: [
      { q: "In the DELF B2 speaking exam, how long do you have to prepare?", o: ["ten minutes", "thirty minutes", "one hour"], a: 1, ex: "Thirty minutes, then about twenty minutes in front of the examiner." },
      { q: "“This text raises the question” is:", o: ["Ce texte soulève la question", "Ce texte lève la question", "Ce texte monte la question"], a: 0, ex: "soulever une question." },
      { q: "“Let's move on to” is:", o: ["Passons à", "Passons sur", "Allons-nous à"], a: 0, ex: "passer à; passer sur means to overlook." },
      { q: "“Having looked at the advantages” is:", o: ["Après avoir vu les avantages", "Après voir les avantages", "Après avoir vus les avantages"], a: 0, ex: "après + past infinitive (avoir vu)." },
      { q: "What should you write on your draft?", o: ["Only key words", "Full sentences to read aloud", "Nothing at all"], a: 0, ex: "Key words: you must speak, not read." }
    ]
  },
  {
    id: 104, level: "B2", kind: "functional", icon: "speech",
    title: "Everyday French: defending your point of view under questions", title_fr: "Le français de tous les jours : défendre son point de vue face aux questions",
    subtitle: "Gain time, check you've understood, concede a point and hold your ground.", subtitle_fr: "Gagner du temps, vérifier que tu as compris, concéder un point et tenir ta position.",
    body: `
<h2>Gaining time</h2>
<p><s-fr>C'est une bonne question.</s-fr> · <s-fr>Laissez-moi réfléchir un instant.</s-fr> · <s-fr>Comment dire…</s-fr></p>
<h2>Checking you've understood</h2>
<p><s-fr>Si je vous ai bien compris, vous pensez que… ?</s-fr> · <s-fr>Pourriez-vous reformuler votre question ?</s-fr> · <s-fr>Vous voulez dire que… ?</s-fr></p>
<h2>Conceding a point</h2>
<p><s-fr>Je vous l'accorde, mais…</s-fr> · <s-fr>C'est vrai, cependant…</s-fr> · <s-fr>Vous marquez un point.</s-fr> · <s-fr>Sur ce point, vous avez raison.</s-fr></p>
<h2>Holding your ground</h2>
<p><s-fr>Je maintiens que…</s-fr> · <s-fr>Je persiste à penser que…</s-fr> · <s-fr>Je reste sur ma position.</s-fr> · <s-fr>Permettez-moi d'insister sur…</s-fr></p>
<h2>When a word is missing</h2>
<p><s-fr>Je ne trouve pas le mot, mais c'est une sorte de…</s-fr> · <s-fr>C'est ce qui sert à…</s-fr> · <s-fr>C'est le contraire de…</s-fr></p>
<div class="tip">Never stay silent: an examiner prefers a rephrased question and an imperfect answer to a long blank. Conceding a point is not losing: it shows you can weigh arguments, which is exactly what B2 asks of you.</div>
`,
    examples: [
      ["C'est une bonne question. Laissez-moi réfléchir un instant.", "That's a good question. Let me think for a moment."],
      ["Si je vous ai bien compris, vous pensez que c'est trop cher ?", "If I understand you correctly, you think it's too expensive?"],
      ["Pourriez-vous reformuler votre question ?", "Could you rephrase your question?"],
      ["Je vous l'accorde, mais le coût n'est pas le seul critère.", "I grant you that, but cost isn't the only criterion."],
      ["Vous marquez un point.", "Fair point."],
      ["Je persiste à penser que c'est une bonne idée.", "I still think it's a good idea."],
      ["Je ne trouve pas le mot, mais c'est ce qui sert à ouvrir les bouteilles.", "I can't find the word, but it's the thing you use to open bottles."]
    ],
    quiz: [
      { q: "“Fair point” is:", o: ["Vous marquez un point.", "Vous faites un point.", "Vous gagnez un point."], a: 0, ex: "marquer un point." },
      { q: "“If I understand you correctly” is:", o: ["Si je vous ai bien compris", "Si j'ai vous bien compris", "Si je vous ai compris bien"], a: 0, ex: "The pronoun before the auxiliary, bien before the participle." },
      { q: "“I still think that…” is:", o: ["Je persiste à penser que…", "Je persiste de penser que…", "Je persiste penser que…"], a: 0, ex: "persister à + infinitive." },
      { q: "You don't know the word for “corkscrew”. You say:", o: ["C'est ce qui sert à ouvrir les bouteilles.", "Je ne sais pas.", "Corkscrew !"], a: 0, ex: "Describe what it's used for." },
      { q: "In the DELF B2 oral, conceding a point:", o: ["shows you can weigh arguments", "makes you lose points", "is not allowed"], a: 0, ex: "Weighing arguments is a B2 skill." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    102: {
      gap: [["Il est ___ que la voiture pollue. (undeniable)", "indéniable"], ["Il se peut que la mesure ___ efficace. (être)", "soit"], ["Il me semble que cette solution ___ la meilleure. (être)", "est"], ["___ ne prouve que ce soit rentable. (nothing)", "Rien"]],
      fix: [["Il est probable qu'il vienne demain.", "Il est probable qu'il viendra demain.|Il est probable qu'il vient demain.", "il est probable que + indicative; only il est peu probable que takes the subjunctive."], ["Il se peut que le projet est abandonné.", "Il se peut que le projet soit abandonné.", "il se peut que + subjunctive."]],
      task: ["Give your opinion on a four-day school week, moving from certain to doubtful: il est indéniable que, il me semble que, il se peut que, il est peu probable que.", "Donne ton avis sur la semaine de quatre jours à l'école, du certain au douteux : il est indéniable que, il me semble que, il se peut que, il est peu probable que.", "Il est indéniable que les enfants sont fatigués en fin de semaine. Il me semble qu'une journée de repos supplémentaire leur ferait du bien. Il se peut cependant que les parents qui travaillent aient du mal à les faire garder. Et il est peu probable que les programmes soient allégés : les journées risquent donc d'être plus longues."]
    },
    103: {
      gap: [["En premier ___, je présenterai le document. (place)", "lieu"], ["___ maintenant à la deuxième partie. (let's move on)", "Passons"], ["J'en ___ à mon dernier argument. (come)", "viens"], ["En ___ de conclusion, voici une proposition. (by way of)", "guise"]],
      fix: [["En premier lieu, je présenterai le document. Deuxième lieu, je donnerai mon avis.", "En premier lieu, je présenterai le document. En second lieu, je donnerai mon avis.|En premier lieu, je présenterai le document. En deuxième lieu, je donnerai mon avis.", "en second lieu (or en deuxième lieu), always with en."], ["J'en viens de mon dernier argument.", "J'en viens à mon dernier argument.", "en venir à (to come to)."]],
      task: ["Write the introduction of a talk on the document “Should mobile phones be banned at secondary school?”: present the document, the question and your plan.", "Écris l'introduction d'un exposé sur le document « Faut-il interdire les téléphones portables au lycée ? » : présente le document, la question et ton plan.", "Le document que j'ai choisi est un article de presse qui pose la question suivante : faut-il interdire les téléphones portables au lycée ? Ce débat divise les enseignants comme les parents. On peut donc se demander si l'interdiction est la meilleure solution. En premier lieu, je présenterai les arguments en faveur de l'interdiction ; en second lieu, j'expliquerai pourquoi, à mon sens, il vaut mieux apprendre aux élèves à s'en servir."]
    },
    104: {
      gap: [["Si je vous ai bien ___, vous êtes contre ? (understood)", "compris"], ["Je vous l'___, mais le coût reste élevé. (grant)", "accorde"], ["Je ___ que c'est la bonne solution. (maintain)", "maintiens"], ["Pourriez-vous ___ votre question ? (rephrase)", "reformuler"]],
      fix: [["Si j'ai vous bien compris, vous êtes contre ?", "Si je vous ai bien compris, vous êtes contre ?|Si j'ai bien compris, vous êtes contre ?", "The pronoun goes before the auxiliary."], ["Je persiste de penser que c'est utile.", "Je persiste à penser que c'est utile.", "persister à + infinitive."]],
      task: ["The examiner says: “Free public transport is too expensive for towns.” Answer: rephrase, concede a point, then hold your position.", "L'examinateur dit : « La gratuité des transports coûte trop cher aux villes. » Réponds : reformule, concède un point, puis maintiens ta position.", "Si je vous ai bien compris, vous pensez que les villes n'en ont pas les moyens. Je vous l'accorde, cela représente un coût important. Cependant, je persiste à penser que c'est un bon investissement : moins de voitures, c'est moins de pollution et moins de routes à entretenir."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "oraldelf", lesson: 104, level: "B2", icon: "speech", partner: "Mme Bertin", role: "a DELF B2 examiner",
    title: "Questions from the examiner", title_fr: "Les questions de l'examinatrice",
    setting: "You've just presented your point of view: public transport should be free. In your talk, you mentioned Dunkirk, where buses have been free since 2018. The examiner now asks you questions.", setting_fr: "Tu viens de présenter ton point de vue : les transports en commun devraient être gratuits. Dans ton exposé, tu as cité Dunkerque, où les bus sont gratuits depuis 2018. L'examinatrice te pose maintenant des questions.",
    turns: [
      { p: "Merci pour votre présentation. Vous êtes favorable à la gratuité des transports. Mais qui va payer ?", fr: "Thank you for your presentation. You're in favour of free public transport. But who's going to pay?" },
      { y: ["C'est une bonne question. Il est indéniable que cela a un coût, mais dans beaucoup de villes, les tickets ne couvrent qu'une partie des dépenses.", "C'est une bonne question. Il est indéniable que cela ait un coût, mais dans beaucoup de villes, les tickets ne couvrent qu'une partie des dépenses.", "C'est une bonne question. Il est indéniable de cela a un coût, mais dans beaucoup de villes, les tickets ne couvrent qu'une partie des dépenses."], fr: "That's a good question. There's no denying it has a cost, but in many towns, tickets only cover part of the expenses.", why: "il est indéniable que + indicative." },
      { p: "Mais si c'est gratuit, les gens vont prendre le bus pour faire cent mètres, non ?", fr: "But if it's free, people will take the bus to go a hundred metres, won't they?" },
      { y: ["Si je vous ai bien compris, vous craignez que les gens marchent moins ? Il se peut que cela arrive, mais c'est surtout la voiture qu'on veut remplacer.", "Si je vous ai bien compris, vous craignez que les gens marchent moins ? Il se peut que cela arrivera, mais c'est surtout la voiture qu'on veut remplacer.", "Si j'ai vous bien compris, vous craignez que les gens marchent moins ? Il se peut que cela arrive, mais c'est surtout la voiture qu'on veut remplacer."], fr: "If I understand you correctly, you're afraid people will walk less? That may happen, but it's mainly the car we want to replace.", why: "il se peut que + subjunctive; the pronoun before the auxiliary." },
      { p: "Dunkerque, d'accord. Mais une très grande ville, ce n'est pas la même chose !", fr: "Dunkirk, fine. But a very big city isn't the same thing!" },
      { y: ["Je vous l'accorde : il est peu probable que le même modèle fonctionne partout. Mais le Luxembourg l'a fait pour tout le pays, depuis 2020.", "Je vous l'accorde : il est peu probable que le même modèle fonctionnera partout. Mais le Luxembourg l'a fait pour tout le pays, depuis 2020.", "Je vous accorde : il est peu probable que le même modèle fonctionne partout. Mais le Luxembourg l'a fait pour tout le pays, depuis 2020."], fr: "I grant you that: the same model is unlikely to work everywhere. But Luxembourg has done it for the whole country, since 2020.", why: "il est peu probable que + subjunctive; je vous l'accorde (l' = that point)." },
      { p: "Donc, pour vous, c'est la solution idéale ?", fr: "So, for you, it's the ideal solution?" },
      { y: ["Pas forcément idéale, mais je maintiens qu'elle mérite d'être essayée, à condition d'améliorer aussi l'offre de bus.", "Pas forcément idéale, mais je maintiens qu'elle mérite à être essayée, à condition d'améliorer aussi l'offre de bus.", "Pas forcément idéale, mais je maintiens qu'elle mérite d'être essayé, à condition d'améliorer aussi l'offre de bus."], fr: "Not necessarily ideal, but I still say it deserves to be tried, provided the bus service is improved too.", why: "mériter de + infinitive; essayée agrees with elle (la solution)." },
      { p: "Très bien. Pour conclure, en une phrase ?", fr: "Very good. To conclude, in one sentence?" },
      { y: ["Pour conclure, je dirais que la gratuité n'est pas une solution miracle, mais qu'elle peut faire bouger les choses.", "Pour conclure, je dirais que la gratuité n'est pas une solution miracle, mais elle peut que faire bouger les choses.", "Pour concluer, je dirais que la gratuité n'est pas une solution miracle, mais qu'elle peut faire bouger les choses."], fr: "To conclude, I'd say free transport isn't a miracle solution, but it can make things happen.", why: "Repeat que in the second clause; the verb is conclure." }
    ] }
  );

  W.READINGS.push({
    id: "gratuite", level: "B2", icon: "megaphone", title: "Transports gratuits : et si on osait ?", genre: "Tribune",
    intro: "A users' group defends free buses in an opinion piece for the local paper. Degrees of certainty, concession and a call to action.",
    intro_fr: "Un collectif d'usagers défend la gratuité des bus dans une tribune du journal local. Les degrés de certitude, la concession et l'appel à l'action.",
    paragraphs: [
      { en: "Chaque matin, des milliers de voitures entrent dans notre ville avec une seule personne à bord. Il est indéniable que cette situation ne peut pas durer : elle pollue l'air, encombre les rues et coûte cher à tout le monde. Notre collectif d'usagers propose une solution simple : rendre les bus gratuits.", fr: "Every morning, thousands of cars come into our town with only one person on board. There's no denying that this can't go on: it pollutes the air, clogs up the streets and costs everyone money. Our users' group is proposing a simple solution: make the buses free." },
      { en: "L'idée n'a rien d'utopique. À Dunkerque, les bus sont gratuits depuis 2018, et leur fréquentation a fortement augmenté. Le Luxembourg est allé plus loin encore : depuis 2020, les transports en commun y sont gratuits dans tout le pays. Il ne fait donc aucun doute que la gratuité est possible.", fr: "The idea is not utopian at all. In Dunkirk, buses have been free since 2018, and the number of passengers has risen sharply. Luxembourg has gone even further: since 2020, public transport there has been free throughout the country. So there's no doubt that free transport is possible." },
      { en: "On nous objecte souvent le coût. Il est vrai que la gratuité a un prix. Mais il faut rappeler que, dans la plupart des réseaux, la vente des tickets ne couvre qu'une partie des dépenses : le reste est déjà payé par les entreprises et les collectivités. Il se peut donc que l'effort soit moins lourd qu'on ne le croit.", fr: "People often raise the cost as an objection. It's true that free transport comes at a price. But it's worth remembering that, in most networks, ticket sales only cover part of the costs: the rest is already paid by businesses and local authorities. So the effort may well be lighter than people think." },
      { en: "Soyons honnêtes : rien ne prouve que la gratuité suffise à faire renoncer tous les automobilistes à leur voiture. Il est même probable qu'une partie des nouveaux passagers marchait ou prenait le vélo auparavant. C'est pourquoi la gratuité doit s'accompagner de bus plus fréquents et de vraies voies réservées.", fr: "Let's be honest: nothing proves that free transport is enough to make all motorists give up their cars. It's even likely that some of the new passengers used to walk or cycle. That's why free transport must come with more frequent buses and proper bus lanes." },
      { en: "Nous invitons donc la mairie à tenter l'expérience pendant deux ans, puis à en tirer le bilan. Il nous semble que c'est la meilleure façon de trancher la question. Signez notre pétition : ensemble, nous pouvons faire bouger les choses.", fr: "So we invite the town hall to try the experiment for two years, then to review the results. We believe it's the best way to settle the question. Sign our petition: together, we can make things happen." }
    ],
    glossary: { "encombre": "clogs up", "usagers": "users (of a public service)", "utopique": "utopian", "fréquentation": "number of users, ridership", "objecte": "raise as an objection", "réseaux": "networks", "collectivités": "local authorities", "renoncer": "to give up", "automobilistes": "motorists", "auparavant": "before, previously", "voies": "lanes", "tenter": "to try", "bilan": "assessment, review", "trancher": "to settle (a question)", "lourd": "heavy" },
    questions: [
      { q: "Quelle solution propose le collectif ?", o: ["Rendre les bus gratuits", "Interdire les voitures", "Construire un métro"], a: 0 },
      { q: "Depuis quand les bus sont-ils gratuits à Dunkerque ?", o: ["Depuis 2018", "Depuis 2020", "Depuis toujours"], a: 0 },
      { q: "Que dit l'auteur du coût ?", o: ["L'effort est peut-être moins lourd qu'on ne le croit.", "La gratuité ne coûte rien.", "Personne ne pourra jamais la payer."], a: 0 },
      { q: "Quelle limite le collectif reconnaît-il ?", o: ["Les bus resteraient vides.", "Une partie des nouveaux passagers marchait ou prenait le vélo auparavant.", "Le Luxembourg a abandonné la gratuité."], a: 1 },
      { q: "Que demande le collectif à la mairie ?", o: ["De tenter l'expérience pendant deux ans", "D'augmenter le prix des tickets", "De fermer le centre-ville"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-b2-10", unit: "b2-10", level: "B2", icon: "mic",
    title: "L'oral du DELF B2 : un exposé modèle", title_fr: "L'oral du DELF B2 : un exposé modèle",
    context: "In a practice exam, Inès presents a document, gives her opinion and answers the examiner.", context_fr: "Dans un examen blanc, Inès présente un document, donne son avis et répond à l'examinateur.",
    words: [["précoce", "early"], ["imiter", "to imitate"], ["se tromper", "to make a mistake"], ["le blocage", "the mental block"], ["formé", "trained"]],
    lines: [["Examinateur", "Bonjour. Vous avez préparé le document. Je vous écoute.", "fr-FR"], ["Inès", "Bonjour. Le document que j'ai choisi est un article de presse qui pose la question suivante : faut-il apprendre une langue étrangère dès la maternelle ? On peut donc se demander si un apprentissage aussi précoce est vraiment utile.", "fr-FR"], ["Inès", "En premier lieu, je présenterai les avantages d'un apprentissage précoce ; en second lieu, ses limites ; et pour conclure, je donnerai mon avis.", "fr-FR"], ["Inès", "Il est indéniable que les jeunes enfants imitent facilement les sons. À cet âge, ils n'ont pas peur de se tromper, ce qui les aide à parler sans blocage.", "fr-FR"], ["Inès", "J'en viens maintenant aux limites. Il est peu probable qu'une heure par semaine suffise à rendre un enfant bilingue. Il se peut aussi que les enseignants manquent de formation.", "fr-FR"], ["Inès", "Pour conclure, il me semble que commencer tôt est une bonne idée, à condition que ce soit régulier et assuré par des enseignants formés. Je vous remercie.", "fr-FR"], ["Examinateur", "Merci. Si j'ai bien compris, vous êtes plutôt favorable, mais avec des conditions ?", "fr-FR"], ["Inès", "Exactement. Je ne suis pas contre, mais je veux mettre l'accent sur la qualité plutôt que sur l'âge.", "fr-FR"]],
    gist: ["Que fait Inès ?", ["Elle présente un document et donne son avis.", "Elle passe un entretien d'embauche.", "Elle raconte ses vacances."]],
    detail: [["Quel est le thème du document ?", ["Apprendre une langue étrangère dès la maternelle", "Les devoirs à la maison", "Les vacances scolaires"]], ["Quel avantage Inès cite-t-elle ?", ["Les jeunes enfants imitent facilement les sons.", "Les enfants aiment les examens.", "Les cours sont gratuits."]], ["Quelle limite cite-t-elle ?", ["Une heure par semaine ne suffit probablement pas.", "Les enfants sont trop jeunes pour écouter.", "Les parents sont contre."]], ["Quelle est sa position finale ?", ["Plutôt favorable, à certaines conditions", "Totalement contre", "Sans opinion"]]],
    decode: ["Il est peu probable qu'une heure par semaine suffise", "J'en viens maintenant aux limites"],
    tip: "In a structured talk, the plan is announced at the start: listen for en premier lieu, en second lieu, j'en viens à, pour conclure. They tell you exactly where you are in the talk.", tip_fr: "Dans un exposé structuré, le plan est annoncé dès le début : repère en premier lieu, en second lieu, j'en viens à, pour conclure. Ces mots te disent exactement où tu en es dans l'exposé."
  }]);

  W.LEXIS = W.LEXIS || {};
  W.LEXIS["b2-10"] = {
    colloc: [
      ["lancer une pétition", "to start a petition", "Les parents ont lancé une pétition.", "lancé", ["jeté", "posé"]],
      ["rallier des soutiens", "to win support", "Elle a rallié de nombreux soutiens.", "rallié", ["ramassé", "cueilli"]],
      ["porter un projet", "to champion a project", "C'est elle qui porte le projet depuis le début.", "porte", ["tient", "lève"]],
      ["prononcer un discours", "to give a speech", "Le maire a prononcé un discours.", "prononcé", ["dit", "parlé"]],
      ["faire pression sur", "to put pressure on", "Les militants font pression sur le gouvernement.", "font", ["mettent", "donnent"]],
      ["mener une campagne", "to run a campaign", "L'association mène une campagne contre le gaspillage.", "mène", ["court", "tient"]],
      ["susciter l'adhésion", "to win people over", "Ce projet suscite l'adhésion des habitants.", "suscite", ["pousse", "monte"]],
      ["prendre la défense de", "to stand up for", "Elle a pris la défense de son collègue.", "pris", ["fait", "mis"]],
      ["émettre des réserves", "to express reservations", "Le comité a émis des réserves sur le projet.", "émis", ["envoyé", "lancé"]],
      ["trancher une question", "to settle a question", "Le vote a permis de trancher la question.", "trancher", ["couper", "casser"]]
    ],
    wf: [
      ["La ___ des habitants a sauvé l'école. (MOBILISER)", "mobilisation"],
      ["Elle a défendu son projet avec beaucoup de ___. (CONVAINCRE)", "conviction"],
      ["Je n'ai aucune ___ sur ce point. (CERTAIN)", "certitude"],
      ["Le projet sera ___ adopté en juin. (PROBABLE)", "probablement"],
      ["Son talent est ___. (CONTESTER)", "incontestable"],
      ["Ces jeunes sont très ___ dans la vie associative. (ENGAGER)", "engagés"],
      ["Une campagne de ___ commence lundi. (SENSIBLE)", "sensibilisation"],
      ["Son ___ est solide et bien construite. (ARGUMENTER)", "argumentation"]
    ],
    kwt: [
      ["Tout le monde sait qu'il a raison.", "INDÉNIABLE", "Il est ___ raison.", "indéniable qu'il a"],
      ["Il va peut-être pleuvoir demain.", "POSSIBLE", "Il est ___ demain.", "possible qu'il pleuve"],
      ["Je doute fort qu'il vienne.", "PEU", "Il est ___ vienne.", "peu probable qu'il"],
      ["J'ai l'impression que c'est la meilleure solution.", "SEMBLE", "Il me ___ la meilleure solution.", "semble que c'est"],
      ["On n'a aucune preuve que ce projet soit rentable.", "RIEN", "___ que ce projet soit rentable.", "Rien ne prouve"],
      ["Passons maintenant à mon deuxième argument.", "VIENS", "J'en ___ deuxième argument.", "viens maintenant à mon|viens à mon"]
    ],
    idioms: [
      ["prêcher pour sa paroisse", "défendre ses propres intérêts", "to have an axe to grind", "Il soutient ce projet, mais il prêche pour sa paroisse : il habite juste à côté.", "prêche pour sa paroisse"],
      ["se battre contre des moulins à vent", "lutter en vain contre des ennemis imaginaires", "to tilt at windmills", "Sans soutien, ils ont l'impression de se battre contre des moulins à vent.", "se battre contre des moulins à vent"],
      ["faire bouger les lignes", "faire évoluer une situation figée", "to move the needle", "Cette mobilisation a fait bouger les lignes.", "fait bouger les lignes"],
      ["avoir le vent en poupe", "connaître le succès, être dans une période favorable", "to be on a roll", "Les associations de quartier ont le vent en poupe.", "ont le vent en poupe"],
      ["taper du poing sur la table", "se montrer ferme, exiger avec force", "to put one's foot down", "Il a fallu taper du poing sur la table pour être entendu.", "taper du poing sur la table"],
      ["haut et fort", "ouvertement, avec force", "loud and clear", "Elle a dit haut et fort ce qu'elle pensait.", "haut et fort"],
      ["rester les bras croisés", "ne rien faire", "to sit back and do nothing", "Face à ce problème, on ne peut pas rester les bras croisés.", "rester les bras croisés"],
      ["mouiller sa chemise", "s'engager personnellement, faire de gros efforts", "to roll up one's sleeves", "Pour que le projet réussisse, il faudra mouiller sa chemise.", "mouiller sa chemise"]
    ]
  };

  W.PROMPTS.push({ id: "fr-b2-10", level: "B2", q: "Choisis une cause qui te tient à cœur et convaincs-nous de la soutenir.", fr: "Choose a cause you care about and convince us to support it.", time: 180,
    phrases: ["Il est indéniable que…", "Il se peut que…", "En premier lieu…", "J'en viens à…", "Pour conclure…"],
    model: "La cause qui me tient le plus à cœur, c'est la lutte contre le gaspillage alimentaire. Il est indéniable que nous jetons beaucoup trop : des restes, des fruits un peu abîmés, des produits encore bons. En premier lieu, c'est une question d'argent : chaque aliment jeté, c'est de l'argent perdu. J'en viens à l'environnement : produire de la nourriture demande de l'eau et de l'énergie. Il se peut que vous pensiez qu'un seul geste ne change rien, mais si chacun fait un effort, on peut faire bouger les choses. Pour conclure, je vous invite à faire une liste avant les courses : c'est simple et ça marche !" });

  W.WRITING_GUIDE["b2-10"] = { genre: "An opinion piece (tribune)", genre_fr: "Une tribune",
    plan: [["Open with a concrete scene, then state the cause.", "Ouvre sur une scène concrète, puis présente la cause."], ["Show what is certain: the problem and its effects.", "Montre ce qui est certain : le problème et ses effets."], ["Answer an objection, conceding what is true.", "Réponds à une objection, en concédant ce qui est vrai."], ["Vary the degrees of certainty and guide the reader with transitions.", "Varie les degrés de certitude et guide le lecteur avec des transitions."], ["End with a concrete call to action.", "Termine par un appel concret à l'action."]],
    marks: [["il est indéniable que la situation actuelle est dangereuse", "il est indéniable que + indicative", "il est indéniable que + indicatif"], ["il ne fait aucun doute que les gaz", "il ne fait aucun doute que", "il ne fait aucun doute que"], ["il se peut que, pour quelques familles, le changement soit", "il se peut que + subjunctive", "il se peut que + subjonctif"], ["rien ne prouve que la fermeture les empêche", "rien ne prouve que + subjunctive", "rien ne prouve que + subjonctif"], ["Il est peu probable que tout soit parfait", "il est peu probable que + subjunctive", "il est peu probable que + subjonctif"], ["Venons-en maintenant à notre proposition", "a transition", "une transition"]] };

  W.COURSE.push({ id: "b2-10", level: "B2", icon: "megaphone", title: "Taking a stand", title_fr: "S'engager et convaincre",
    intro: "In this last B2 unit, you'll learn to take a stand and convince: degrees of certainty (il est indéniable que, il se peut que, il est peu probable que), structuring an oral presentation as in the DELF B2 speaking exam, and defending your point of view when you're questioned.",
    intro_fr: "Dans cette dernière unité du B2, tu vas apprendre à t'engager et à convaincre : les degrés de certitude (il est indéniable que, il se peut que, il est peu probable que), la structure d'un exposé oral comme à l'oral du DELF B2, et la défense de ton point de vue face aux questions.",
    can: ["Express degrees of certainty with the right mood", "Structure an oral presentation with clear transitions", "Present a document and the question it raises, as in the DELF B2", "Defend your point of view under questions: rephrase, concede, hold your ground", "Write an opinion piece for a cause"],
    can_fr: ["Exprimer des degrés de certitude avec le bon mode", "Structurer un exposé oral avec des transitions claires", "Présenter un document et la question qu'il soulève, comme au DELF B2", "Défendre ton point de vue face aux questions : reformuler, concéder, tenir ta position", "Écrire une tribune pour une cause"],
    lessons: [102, 103, 104], vocab: ["engagementFR", "exposeFR"], reading: "gratuite", prompt: "fr-b2-10",
    writing: { task: "Write an opinion piece (250-280 words) for your town's newspaper to defend a cause that matters to you. Use degrees of certainty, answer an objection and end with a call to action.", task_fr: "Rédige une tribune (250 à 280 mots) pour le journal de ta ville afin de défendre une cause qui te tient à cœur. Utilise les degrés de certitude, réponds à une objection et termine par un appel à l'action.", words: "250-280",
      tips: ["Chaque matin, …", "Il est indéniable que…", "On nous objectera que…", "Il se peut que…", "Pour conclure, …"],
      checklist: ["My opening makes the problem concrete", "I used at least four degrees of certainty, with the right mood", "I answered an objection", "I guided the reader with transitions", "I ended with a call to action", "I wrote between 250 and 280 words"],
      model: "Pour des rues sans voitures devant nos écoles\n\nChaque matin, à huit heures et quart, la rue de notre école se transforme en parking. Des voitures s'arrêtent en double file, des moteurs tournent, et des enfants se faufilent entre les pare-chocs avec leur cartable sur le dos. Notre collectif de parents demande une mesure simple : fermer la rue aux voitures une demi-heure avant et après la classe.\n\nEn premier lieu, il est indéniable que la situation actuelle est dangereuse. Les enfants sont petits, les conducteurs sont pressés, et il suffit d'une seconde d'inattention pour qu'un accident se produise. En second lieu, il ne fait aucun doute que les gaz d'échappement nuisent à la santé, en particulier à celle des plus jeunes, qui respirent juste à la hauteur des pots d'échappement.\n\nOn nous objectera que certains parents n'ont pas d'autre choix que de venir en voiture. Nous l'admettons volontiers : il se peut que, pour quelques familles, le changement soit compliqué. Mais rien ne prouve que la fermeture les empêche de déposer leurs enfants : il leur suffirait de se garer cent mètres plus loin et de finir le trajet à pied.\n\nVenons-en maintenant à notre proposition. Il nous semble que la meilleure façon de convaincre est d'essayer. Nous demandons donc à la mairie de tester la mesure pendant un trimestre, puis d'en dresser le bilan avec les familles et les riverains. Il est peu probable que tout soit parfait dès le premier jour, mais l'expérience mérite d'être tentée.\n\nPour conclure, nous invitons tous les habitants à signer notre pétition et à se mobiliser avec nous. La sécurité de nos enfants vaut bien quelques minutes de marche." } });
})();
