/* Cours de français, unité B2-4 « Science and technology / Sciences et technologies » : les pronoms relatifs
   composés (lequel, auquel, duquel, parmi lesquels), la nominalisation (titres et écrits formels), expliquer un
   fonctionnement. Personnages fictifs, prénoms français. Faits vérifiables seulement : le Muséum national
   d'Histoire naturelle propose des programmes de sciences participatives (comptage d'oiseaux, de papillons) ; un
   récepteur GPS calcule sa position à partir des signaux d'au moins quatre satellites, qui envoient l'heure
   précise de leur émission. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "sciencesFR", icon: "microscope", title: "Science and research", title_fr: "La science et la recherche", level: "B2", words: [
    ["la recherche", "research", "Elle travaille dans la recherche médicale."],
    ["le chercheur / la chercheuse", "the researcher (m) / the researcher (f)", "Une équipe de chercheuses a publié l'étude."],
    ["la découverte", "the discovery", "C'est une découverte majeure."],
    ["le laboratoire", "the laboratory", "Les tests ont été faits en laboratoire."],
    ["l'hypothèse", "the hypothesis", "Cette hypothèse n'a pas été confirmée."],
    ["prouver", "to prove", "Rien ne prouve que ce produit est efficace."],
    ["démontrer", "to demonstrate, to show", "L'étude démontre un lien entre sommeil et mémoire."],
    ["l'étude", "the study", "Selon une étude récente, …"],
    ["inventer", "to invent", "Qui a inventé le téléphone ?"],
    ["le brevet", "the patent", "L'entreprise a déposé un brevet."],
    ["les données", "data", "Les données ont été analysées par ordinateur."],
    ["le progrès", "progress", "La médecine a fait d'énormes progrès."],
    ["l'essai clinique", "the clinical trial", "Le médicament est en essai clinique."],
    ["le vaccin", "the vaccine", "Le vaccin a été mis au point en un an."],
    ["la fusée", "the rocket", "La fusée a décollé ce matin."],
    ["l'espace", "space", "Elle rêve d'aller dans l'espace."],
    ["fiable", "reliable", "Ces résultats sont-ils fiables ?"],
    ["le scientifique / la scientifique", "the scientist (m) / the scientist (f)", "Les scientifiques restent prudents."]
  ] },
  { id: "technoFR", icon: "smartphone", title: "Technology", title_fr: "La technologie", level: "B2", words: [
    ["le logiciel", "the software", "Il faut installer un nouveau logiciel."],
    ["télécharger", "to download", "Téléchargez l'application gratuitement."],
    ["mettre à jour", "to update", "N'oublie pas de mettre à jour ton téléphone."],
    ["la mise à jour", "the update", "La mise à jour prend dix minutes."],
    ["le mot de passe", "the password", "Choisissez un mot de passe long et unique."],
    ["brancher", "to plug in", "Branche le chargeur, la batterie est vide."],
    ["l'écran", "the screen", "L'écran de mon téléphone est cassé."],
    ["le clavier", "the keyboard", "Le clavier français n'est pas comme le clavier anglais."],
    ["la souris", "the mouse", "Clique avec le bouton droit de la souris."],
    ["le navigateur", "the browser", "Ouvre le site dans un autre navigateur."],
    ["le moteur de recherche", "the search engine", "Tape ta question dans un moteur de recherche."],
    ["les données personnelles", "personal data", "Protégez vos données personnelles."],
    ["le piratage", "hacking", "L'entreprise a été victime d'un piratage."],
    ["sauvegarder", "to save, to back up", "Pense à sauvegarder ton travail."],
    ["l'imprimante", "the printer", "L'imprimante n'a plus d'encre."],
    ["le capteur", "the sensor", "Un capteur mesure la température."],
    ["l'objet connecté", "the smart device", "Les objets connectés collectent beaucoup de données."],
    ["la puce", "the chip", "Les cartes bancaires ont une puce."]
  ] });

  W.LESSONS.push(
  {
    id: 84, level: "B2", icon: "link",
    title: "Lequel, auquel, duquel: relative pronouns after a preposition", title_fr: "Lequel, auquel, duquel : les pronoms relatifs après une préposition",
    subtitle: "The tool with which, the reason for which, the building next to which: how French says it.", subtitle_fr: "L'outil avec lequel, la raison pour laquelle, le bâtiment à côté duquel : comment le dire en français.",
    body: `
<h2>Preposition + lequel</h2>
<p>After a preposition, for a thing, French uses <s-fr>lequel</s-fr>, which agrees with the noun: <s-fr>lequel</s-fr>, <s-fr>laquelle</s-fr>, <s-fr>lesquels</s-fr>, <s-fr>lesquelles</s-fr>.</p>
<table>
<tr><th>French</th><th>English</th></tr>
<tr><td><s-fr>C'est l'outil avec lequel nous travaillons.</s-fr></td><td>It's the tool we work with.</td></tr>
<tr><td><s-fr>Voici la raison pour laquelle il est parti.</s-fr></td><td>That's the reason why he left.</td></tr>
<tr><td><s-fr>Les données sur lesquelles l'étude repose sont fiables.</s-fr></td><td>The data the study is based on are reliable.</td></tr>
</table>
<h2>With à and de: auquel, duquel</h2>
<p><s-fr>à + lequel</s-fr> = <s-fr>auquel</s-fr>, <s-fr>auxquels</s-fr>, <s-fr>auxquelles</s-fr> (but <s-fr>à laquelle</s-fr>): <s-fr>le projet auquel je participe</s-fr>. After a longer preposition ending in de, <s-fr>de + lequel</s-fr> = <s-fr>duquel</s-fr>, <s-fr>desquels</s-fr>, <s-fr>desquelles</s-fr> (but <s-fr>de laquelle</s-fr>): <s-fr>le bâtiment à côté duquel j'habite</s-fr> · <s-fr>la réunion au cours de laquelle tout a été décidé</s-fr>. After de alone, use <s-fr>dont</s-fr>.</p>
<h2>For people</h2>
<p>Preposition + <s-fr>qui</s-fr> is the usual choice: <s-fr>la collègue avec qui je travaille</s-fr>. But after <s-fr>parmi</s-fr> (among), always <s-fr>lesquels</s-fr> / <s-fr>lesquelles</s-fr>: <s-fr>vingt chercheurs, parmi lesquels trois Français</s-fr>. For a place, <s-fr>où</s-fr> often replaces <s-fr>dans lequel</s-fr>: <s-fr>le laboratoire où je travaille</s-fr>.</p>
<div class="tip">"The reason why" is <s-fr>la raison pour laquelle</s-fr>, never <s-fr>la raison pourquoi</s-fr>. And English often hides the preposition at the end ("the tool we work with"): French always puts it in front.</div>
`,
    examples: [
      ["C'est le logiciel avec lequel je fais mes montages.", "It's the software I edit my videos with."],
      ["Voici la raison pour laquelle le projet a été arrêté.", "Here's the reason why the project was stopped."],
      ["Le colloque auquel j'ai participé était passionnant.", "The conference I took part in was fascinating."],
      ["Les questions auxquelles il faut répondre sont difficiles.", "The questions that have to be answered are difficult."],
      ["Le parc à côté duquel se trouve le laboratoire est magnifique.", "The park next to which the laboratory stands is beautiful."],
      ["La réunion au cours de laquelle tout a été décidé a duré trois heures.", "The meeting during which everything was decided lasted three hours."],
      ["L'équipe compte vingt chercheurs, parmi lesquels trois Français.", "The team has twenty researchers, including three French ones."],
      ["C'est la collègue avec qui je partage mon bureau.", "She's the colleague I share my office with."]
    ],
    quiz: [
      { q: "“The reason why I'm calling” is:", o: ["la raison pourquoi j'appelle", "la raison pour laquelle j'appelle", "la raison pour lequel j'appelle"], a: 1, ex: "la raison (f) → pour laquelle." },
      { q: "“The project I'm taking part in” (participer à):", o: ["le projet auquel je participe", "le projet duquel je participe", "le projet que je participe"], a: 0, ex: "à + lequel = auquel." },
      { q: "“The building next to which I live”:", o: ["le bâtiment à côté dont j'habite", "le bâtiment à côté duquel j'habite", "le bâtiment à côté lequel j'habite"], a: 1, ex: "à côté de + lequel = à côté duquel." },
      { q: "“Ten students, including two Spanish ones”:", o: ["dix étudiants, parmi qui deux Espagnols", "dix étudiants, parmi lesquels deux Espagnols", "dix étudiants, dont lesquels deux Espagnols"], a: 1, ex: "parmi lesquels (or dont deux Espagnols)." },
      { q: "“The questions I have to answer” (répondre à):", o: ["les questions auxquelles je dois répondre", "les questions lesquelles je dois répondre", "les questions dont je dois répondre"], a: 0, ex: "à + lesquelles = auxquelles." }
    ]
  },
  {
    id: 85, level: "B2", icon: "newspaper",
    title: "La hausse, l'arrivée, la fermeture: nominalisation", title_fr: "La hausse, l'arrivée, la fermeture : la nominalisation",
    subtitle: "Turning verbs and adjectives into nouns, for headlines, notes and formal writing.", subtitle_fr: "Transformer verbes et adjectifs en noms, pour les titres, les notes et l'écrit formel.",
    body: `
<h2>From verbs to nouns</h2>
<table>
<tr><th>Ending</th><th>Examples</th></tr>
<tr><td><s-fr>-tion</s-fr>, <s-fr>-sion</s-fr></td><td><s-fr>augmenter</s-fr> → <s-fr>l'augmentation</s-fr> · <s-fr>décider</s-fr> → <s-fr>la décision</s-fr></td></tr>
<tr><td><s-fr>-ment</s-fr></td><td><s-fr>lancer</s-fr> → <s-fr>le lancement</s-fr> · <s-fr>développer</s-fr> → <s-fr>le développement</s-fr></td></tr>
<tr><td><s-fr>-ure</s-fr></td><td><s-fr>ouvrir</s-fr> → <s-fr>l'ouverture</s-fr> · <s-fr>fermer</s-fr> → <s-fr>la fermeture</s-fr></td></tr>
<tr><td><s-fr>-ée</s-fr></td><td><s-fr>arriver</s-fr> → <s-fr>l'arrivée</s-fr> · <s-fr>entrer</s-fr> → <s-fr>l'entrée</s-fr></td></tr>
<tr><td><s-fr>-age</s-fr></td><td><s-fr>nettoyer</s-fr> → <s-fr>le nettoyage</s-fr> · <s-fr>recycler</s-fr> → <s-fr>le recyclage</s-fr></td></tr>
<tr><td>no ending</td><td><s-fr>baisser</s-fr> → <s-fr>la baisse</s-fr> · <s-fr>choisir</s-fr> → <s-fr>le choix</s-fr> · <s-fr>refuser</s-fr> → <s-fr>le refus</s-fr></td></tr>
</table>
<h2>From adjectives to nouns</h2>
<p><s-fr>rapide</s-fr> → <s-fr>la rapidité</s-fr> · <s-fr>riche</s-fr> → <s-fr>la richesse</s-fr> · <s-fr>grand</s-fr> → <s-fr>la grandeur</s-fr> · <s-fr>absent</s-fr> → <s-fr>l'absence</s-fr> · <s-fr>fiable</s-fr> → <s-fr>la fiabilité</s-fr></p>
<h2>Why use it?</h2>
<p>Headlines, notes, slides and formal writing prefer nouns: <s-fr>Les prix ont fortement augmenté.</s-fr> → <s-fr>Forte hausse des prix.</s-fr> · <s-fr>Le musée ouvrira en mars.</s-fr> → <s-fr>Ouverture du musée en mars.</s-fr> The object of the verb becomes a complement with <s-fr>de</s-fr>: <s-fr>on a découvert une nouvelle espèce</s-fr> → <s-fr>la découverte d'une nouvelle espèce</s-fr>.</p>
<div class="tip">An adverb becomes an adjective when you nominalise: <s-fr>les prix augmentent fortement</s-fr> → <s-fr>une forte augmentation des prix</s-fr>. Learn the noun with its gender: most nouns in -tion, -ure, -ée and -ité are feminine; -ment and -age are masculine.</div>
`,
    examples: [
      ["Forte hausse des prix de l'énergie.", "Sharp rise in energy prices."],
      ["Ouverture du nouveau laboratoire en mars.", "New laboratory opening in March."],
      ["Lancement réussi pour la fusée européenne.", "Successful launch for the European rocket."],
      ["La découverte d'une nouvelle espèce a surpris les chercheurs.", "The discovery of a new species surprised the researchers."],
      ["Fermeture exceptionnelle de la bibliothèque samedi.", "The library will be exceptionally closed on Saturday."],
      ["La rapidité de la mise à jour a étonné les utilisateurs.", "The speed of the update surprised users."],
      ["Baisse du nombre d'accidents sur les routes.", "Fall in the number of road accidents."],
      ["Le refus du projet a déçu toute l'équipe.", "The rejection of the project disappointed the whole team."]
    ],
    quiz: [
      { q: "The noun from lancer is:", o: ["la lance", "le lancement", "la lançation"], a: 1, ex: "lancer → le lancement." },
      { q: "“Les prix ont baissé” as a headline:", o: ["Baisse des prix", "Baissement des prix", "Baissage des prix"], a: 0, ex: "baisser → la baisse." },
      { q: "The noun from fiable is:", o: ["la fiabilité", "la fiablesse", "le fiablement"], a: 0, ex: "-able → -abilité." },
      { q: "“Le musée ouvrira en mars” as a headline:", o: ["Ouvrage du musée en mars", "Ouverture du musée en mars", "Ouvrement du musée en mars"], a: 1, ex: "ouvrir → l'ouverture." },
      { q: "“Les ventes augmentent fortement” becomes:", o: ["forte augmentation des ventes", "fortement augmentation des ventes", "augmentation fort des ventes"], a: 0, ex: "The adverb becomes an adjective: forte." }
    ]
  },
  {
    id: 86, level: "B2", kind: "functional", icon: "settings",
    title: "Everyday French: explaining how something works", title_fr: "Le français de tous les jours : expliquer un fonctionnement",
    subtitle: "What it's for, what it's made of, how to use it, step by step, and checking you've been understood.", subtitle_fr: "À quoi ça sert, de quoi c'est fait, comment l'utiliser étape par étape, et vérifier qu'on a compris.",
    body: `
<h2>What it's for</h2>
<p><s-fr>Ça sert à</s-fr> + infinitive · <s-fr>Ça permet de</s-fr> + infinitive · <s-fr>On s'en sert pour…</s-fr> · <s-fr>C'est un outil qui…</s-fr></p>
<h2>What it's made of</h2>
<p><s-fr>Ça se compose de…</s-fr> · <s-fr>C'est composé de trois parties : …</s-fr> · <s-fr>À l'intérieur, il y a…</s-fr></p>
<h2>How it works, step by step</h2>
<p><s-fr>Ça fonctionne grâce à…</s-fr> · <s-fr>Il suffit de</s-fr> + infinitive (All you have to do is…) · <s-fr>D'abord, …</s-fr> · <s-fr>Une fois que…, …</s-fr> · <s-fr>Dès que…, …</s-fr> · <s-fr>Sinon, …</s-fr> · <s-fr>Attention à ne pas…</s-fr></p>
<h2>Checking</h2>
<p><s-fr>Vous voyez ce que je veux dire ?</s-fr> · <s-fr>Autrement dit, …</s-fr> · <s-fr>Je vous fais une démonstration ?</s-fr> · <s-fr>Vous pouvez essayer, je vous regarde.</s-fr></p>
<div class="tip"><s-fr>Ça marche</s-fr> (it works) is everyday French; <s-fr>ça fonctionne</s-fr> is more neutral; <s-fr>c'est opérationnel</s-fr> sounds technical. And for "it doesn't work": <s-fr>ça ne marche pas</s-fr>, <s-fr>c'est en panne</s-fr> (it's broken down), <s-fr>ça a planté</s-fr> (it crashed, for a computer).</div>
`,
    examples: [
      ["Cette application sert à traduire des menus.", "This app is for translating menus."],
      ["Ce capteur permet de mesurer la qualité de l'air.", "This sensor makes it possible to measure air quality."],
      ["Il suffit d'appuyer sur ce bouton.", "All you have to do is press this button."],
      ["Une fois que la batterie est chargée, le voyant devient vert.", "Once the battery is charged, the light turns green."],
      ["Attention à ne pas débrancher pendant la mise à jour.", "Be careful not to unplug it during the update."],
      ["L'appareil se compose de trois parties.", "The device is made up of three parts."],
      ["Mon ordinateur a planté, j'ai tout perdu.", "My computer crashed, I lost everything."]
    ],
    quiz: [
      { q: "“It's for cutting bread” is:", o: ["Ça sert à couper le pain.", "Ça sert pour couper le pain.", "Ça sert de couper le pain."], a: 0, ex: "servir à + infinitive." },
      { q: "“All you have to do is click here” is:", o: ["Il suffit de cliquer ici.", "Il suffit cliquer ici.", "Ça suffit à cliquer ici."], a: 0, ex: "il suffit de + infinitive." },
      { q: "“It allows you to save time” is:", o: ["Ça permet de gagner du temps.", "Ça permet à gagner du temps.", "Ça permet gagner du temps."], a: 0, ex: "permettre de + infinitive." },
      { q: "“My computer crashed” (informal):", o: ["Mon ordinateur a planté.", "Mon ordinateur a crashé dedans.", "Mon ordinateur est tombé."], a: 0, ex: "planter, for a computer." },
      { q: "“Be careful not to…” is:", o: ["Attention à ne pas…", "Attention de pas ne…", "Attention pas à…"], a: 0, ex: "Attention à ne pas + infinitive." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    84: {
      gap: [["C'est l'outil avec ___ nous travaillons. (which, m)", "lequel"], ["Voici la raison pour ___ il est parti. (which, f)", "laquelle"], ["Le projet ___ je participe est passionnant. (à + lequel)", "auquel"], ["Le parc à côté ___ j'habite est grand. (de + lequel)", "duquel"]],
      fix: [["C'est la raison pourquoi je suis là.", "C'est la raison pour laquelle je suis là.", "The reason why: la raison pour laquelle."], ["Les questions lesquelles je dois répondre sont difficiles.", "Les questions auxquelles je dois répondre sont difficiles.", "répondre à: à + lesquelles = auxquelles."]],
      task: ["Describe three objects or places that matter to you, each with a different compound relative pronoun (avec lequel, auquel, grâce auquel, près duquel…).", "Décris trois objets ou lieux qui comptent pour toi, chacun avec un pronom relatif composé différent (avec lequel, auquel, grâce auquel, près duquel…).", "Mon vieux vélo est l'objet grâce auquel je découvre ma ville tous les week-ends. Le carnet dans lequel j'écris mes nouveaux mots français ne me quitte jamais. Et le lac près duquel mes grands-parents habitaient est l'endroit auquel je pense quand j'ai besoin de calme."]
    },
    85: {
      gap: [["Forte ___ des prix. (hausser)", "hausse"], ["___ du musée en mars. (ouvrir)", "Ouverture"], ["Le ___ de la fusée a réussi. (lancer)", "lancement"], ["La ___ des résultats est importante. (fiable)", "fiabilité"]],
      fix: [["Baissement du chômage en mai.", "Baisse du chômage en mai.", "baisser → la baisse."], ["Une augmentation fortement des prix.", "Une forte augmentation des prix.", "With a noun, the adverb becomes an adjective: forte."]],
      task: ["Turn these news sentences into headlines: Le gouvernement a annoncé une nouvelle loi. Les ventes de vélos ont beaucoup augmenté. La piscine fermera en juillet.", "Transforme ces phrases en titres : Le gouvernement a annoncé une nouvelle loi. Les ventes de vélos ont beaucoup augmenté. La piscine fermera en juillet.", "Annonce d'une nouvelle loi par le gouvernement. Forte hausse des ventes de vélos. Fermeture de la piscine en juillet."]
    },
    86: {
      gap: [["Cette application ___ à traduire des menus. (is for)", "sert"], ["Il ___ d'appuyer sur ce bouton. (all you need to do)", "suffit"], ["Ce capteur ___ de mesurer la température. (makes it possible)", "permet"], ["Attention à ne ___ débrancher l'appareil. (not)", "pas"]],
      fix: [["Ça sert pour réchauffer les plats.", "Ça sert à réchauffer les plats.", "servir à + infinitive."], ["Il suffit cliquer sur le lien.", "Il suffit de cliquer sur le lien.", "il suffit de + infinitive."]],
      task: ["Explain to a French friend how to use an object you use every day (a coffee machine, an app, a bike lock…): what it's for and the steps.", "Explique à un ami français comment utiliser un objet de tous les jours (une machine à café, une application, un antivol…) : à quoi ça sert et les étapes.", "Ma machine à café sert à faire un expresso en trente secondes. D'abord, il suffit de remplir le réservoir d'eau. Ensuite, tu mets une capsule et tu fermes. Une fois que le voyant est vert, tu appuies sur le bouton. Attention à ne pas oublier la tasse en dessous !"]
    }
  });

  W.ROLEPLAYS.push(
  { id: "appelvideo", lesson: 86, level: "B2", icon: "smartphone", partner: "Jacqueline", role: "your elderly neighbour",
    title: "A first video call", title_fr: "Un premier appel vidéo",
    setting: "Your neighbour Jacqueline has been given a tablet. Her grandson wants to call her by video tonight. Explain how it works, step by step.", setting_fr: "Ta voisine Jacqueline a reçu une tablette. Son petit-fils veut l'appeler en vidéo ce soir. Explique-lui comment ça marche, étape par étape.",
    turns: [
      { p: "Bonjour ! Mon petit-fils m'a offert une tablette, mais je ne sais pas du tout m'en servir. Il veut qu'on se parle en vidéo ce soir…", fr: "Hello! My grandson gave me a tablet, but I have no idea how to use it. He wants us to talk on video tonight…" },
      { y: ["Ne vous inquiétez pas, c'est très simple. Cette application sert à appeler quelqu'un en vidéo.", "Ne vous inquiétez pas, c'est très simple. Cette application sert pour appeler quelqu'un en vidéo.", "Ne vous inquiétez pas, c'est très simple. Cette application sert d'appeler quelqu'un en vidéo."], fr: "Don't worry, it's very simple. This app is for calling someone on video.", why: "servir à + infinitive." },
      { p: "Ah bon ? Et qu'est-ce que je dois faire ?", fr: "Really? And what do I have to do?" },
      { y: ["Il suffit d'ouvrir l'application, puis de choisir le nom de votre petit-fils.", "Il suffit ouvrir l'application, puis choisir le nom de votre petit-fils.", "Ça suffit d'ouvrir l'application, puis de choisir le nom de votre petit-fils."], fr: "All you have to do is open the app, then choose your grandson's name.", why: "il suffit de + infinitive." },
      { p: "D'accord… Et ce petit dessin de caméra, c'est quoi ?", fr: "OK… And this little camera picture, what's that?" },
      { y: ["C'est le bouton avec lequel on lance l'appel vidéo. Une fois que vous avez appuyé, ça sonne chez lui.", "C'est le bouton avec laquelle on lance l'appel vidéo. Une fois que vous avez appuyé, ça sonne chez lui.", "C'est le bouton avec quoi on lance l'appel vidéo. Une fois que vous avez appuyé, ça sonne chez lui."], fr: "It's the button you start the video call with. Once you've pressed it, it rings at his place.", why: "un bouton → avec lequel." },
      { p: "Et s'il ne répond pas ? J'ai peur de tout casser !", fr: "And what if he doesn't answer? I'm afraid of breaking everything!" },
      { y: ["Vous ne risquez rien. Attention seulement à ne pas cacher la caméra avec votre doigt !", "Vous ne risquez rien. Attention seulement de pas cacher la caméra avec votre doigt !", "Vous ne risquez rien. Attention seulement à cacher ne pas la caméra avec votre doigt !"], fr: "You can't do any harm. Just be careful not to cover the camera with your finger!", why: "attention à ne pas + infinitive." },
      { p: "Ha ha, d'accord. Vous pouvez me montrer une fois ?", fr: "Ha ha, all right. Can you show me once?" },
      { y: ["Bien sûr, je vous fais une démonstration. Ensuite, vous essaierez, et je vous regarderai.", "Bien sûr, je vous fais un démonstration. Ensuite, vous essaierez, et je vous regarderai.", "Bien sûr, je vous fais une démonstration. Ensuite, vous essaierez, et je vous regarderais."], fr: "Of course, I'll show you. Then you'll try, and I'll watch you.", why: "la démonstration is feminine; the future (regarderai) for what happens next." }
    ] }
  );

  W.READINGS.push({
    id: "participatives", level: "B2", icon: "microscope", title: "Tous chercheurs ?", genre: "Science article",
    intro: "Counting birds in your garden can help research. An article about citizen science. Compound relative pronouns and the vocabulary of science.",
    intro_fr: "Compter les oiseaux de son jardin peut aider la recherche. Un article sur les sciences participatives. Les pronoms relatifs composés et le vocabulaire de la science.",
    paragraphs: [
      { en: "Compter les oiseaux de son jardin, photographier des papillons, noter la date à laquelle les premières fleurs apparaissent : ces gestes simples peuvent aider la recherche. C'est le principe des sciences participatives, grâce auxquelles des milliers de citoyens collectent des données pour les scientifiques.", fr: "Counting the birds in your garden, photographing butterflies, noting the date on which the first flowers appear: these simple acts can help research. That's the principle of citizen science, thanks to which thousands of people collect data for scientists." },
      { en: "En France, le Muséum national d'Histoire naturelle propose depuis plusieurs années des programmes auxquels chacun peut participer, sans être spécialiste. Il suffit de suivre un protocole simple : observer pendant un temps donné, toujours au même endroit, puis envoyer ses observations sur un site internet.", fr: "In France, the National Museum of Natural History has for several years offered programmes anyone can take part in, without being a specialist. All you have to do is follow a simple procedure: observe for a set time, always in the same place, then send your observations to a website." },
      { en: "Pourquoi les chercheurs ont-ils besoin du grand public ? Parce qu'aucune équipe ne peut observer seule tout un pays, toute l'année. Les observations de milliers de bénévoles, sur lesquelles les scientifiques s'appuient ensuite, permettent de suivre l'évolution de la biodiversité à grande échelle.", fr: "Why do researchers need the general public? Because no team can observe a whole country, all year round, on its own. The observations of thousands of volunteers, which the scientists then rely on, make it possible to follow changes in biodiversity on a large scale." },
      { en: "Certes, des amateurs peuvent se tromper. C'est la raison pour laquelle les protocoles sont très précis et les données vérifiées. Le grand nombre d'observations compense aussi, en partie, les erreurs individuelles.", fr: "Admittedly, amateurs can make mistakes. That's why the procedures are very precise and the data are checked. The large number of observations also partly makes up for individual errors." },
      { en: "Pour les participants, l'expérience est aussi enrichissante. Lucas, douze ans, compte les oiseaux de la cour de son école avec sa classe : avant, je ne voyais que des pigeons. Maintenant, je reconnais la mésange, le rouge-gorge… Et je sais que nos chiffres servent à de vrais chercheurs !", fr: "For the participants, the experience is rewarding too. Lucas, twelve, counts the birds in his school playground with his class: before, all I saw were pigeons. Now I recognise the tit, the robin… And I know our numbers are used by real researchers!" }
    ],
    glossary: { "papillons": "butterflies", "apparaissent": "appear", "principe": "principle", "participatives": "participatory (les sciences participatives: citizen science)", "collectent": "collect", "muséum": "natural history museum", "protocole": "procedure, protocol", "appuient": "rely (s'appuyer sur)", "évolution": "development, change", "échelle": "scale", "compense": "makes up for", "individuelles": "individual", "enrichissante": "rewarding", "mésange": "tit (a small bird)", "pigeons": "pigeons" },
    questions: [
      { q: "Qu'est-ce que les sciences participatives ?", o: ["Des citoyens collectent des données pour les scientifiques.", "Des scientifiques font des cours au public.", "Des écoles achètent des microscopes."], a: 0 },
      { q: "Que faut-il faire pour participer ?", o: ["Être spécialiste", "Suivre un protocole simple et envoyer ses observations", "Payer une inscription"], a: 1 },
      { q: "Pourquoi les chercheurs ont-ils besoin du public ?", o: ["Pour réduire les coûts de transport", "Parce qu'ils n'aiment pas observer", "Parce qu'aucune équipe ne peut observer tout un pays toute l'année"], a: 2 },
      { q: "Comment limite-t-on les erreurs des amateurs ?", o: ["Avec des protocoles précis et des données vérifiées", "En interdisant la participation des enfants", "On ne les limite pas."], a: 0 },
      { q: "Qu'a appris Lucas ?", o: ["À photographier les pigeons", "À reconnaître des oiseaux comme la mésange et le rouge-gorge", "À construire des nids"], a: 1 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-b2-4", unit: "b2-4", level: "B2", icon: "satellite",
    title: "Comment marche le GPS ?", title_fr: "Comment marche le GPS ?",
    context: "In a science programme, Coralie asks Bertrand, a physicist, how the GPS in our phones works.", context_fr: "Dans une émission scientifique, Coralie demande à Bertrand, physicien, comment fonctionne le GPS de nos téléphones.",
    words: [["une constellation", "a group (of satellites)"], ["en permanence", "constantly"], ["le récepteur", "the receiver"], ["l'horloge", "the clock"], ["largement suffisant", "more than enough"]],
    lines: [["Coralie", "Bonjour Bertrand. Aujourd'hui, une question que tout le monde se pose : comment fonctionne le GPS de notre téléphone ?", "fr-FR"], ["Bertrand", "Bonjour Coralie. D'abord, il faut savoir que le GPS repose sur une constellation de satellites qui tournent autour de la Terre. Chacun d'eux envoie en permanence un signal, dans lequel il indique sa position et l'heure exacte à laquelle le signal est parti.", "fr-FR"], ["Coralie", "Et notre téléphone reçoit ces signaux ?", "fr-FR"], ["Bertrand", "Exactement. Le récepteur compare l'heure d'envoi et l'heure de réception. Comme le signal voyage à la vitesse de la lumière, cette différence permet de calculer la distance qui le sépare de chaque satellite.", "fr-FR"], ["Coralie", "Une seule distance ne suffit pas, j'imagine.", "fr-FR"], ["Bertrand", "Non. Avec trois satellites, on pourrait déjà trouver sa position. Mais l'horloge du téléphone n'est pas assez précise, c'est pourquoi il en faut au moins un quatrième, grâce auquel le récepteur corrige son erreur de temps.", "fr-FR"], ["Coralie", "Et la précision, elle est de combien ?", "fr-FR"], ["Bertrand", "Pour un téléphone, en général quelques mètres. C'est largement suffisant pour ne pas se perdre en ville… sauf dans un tunnel, évidemment : là, le signal ne passe plus !", "fr-FR"]],
    gist: ["Quel est le sujet de l'émission ?", ["Le fonctionnement du GPS", "L'histoire des satellites", "Les dangers des téléphones"]],
    detail: [["Que contient le signal de chaque satellite ?", ["Sa position et l'heure exacte d'envoi", "Une carte de la ville", "Le nom du téléphone"]], ["Pourquoi faut-il au moins quatre satellites ?", ["Pour corriger l'erreur de l'horloge du téléphone", "Parce que trois tombent souvent en panne", "Pour envoyer des messages"]], ["Quelle est la précision habituelle pour un téléphone ?", ["Quelques mètres", "Quelques kilomètres", "Quelques centimètres"]], ["Où le GPS ne fonctionne-t-il plus ?", ["Dans un tunnel", "En ville", "À la campagne"]]],
    decode: ["dans lequel il indique sa position", "grâce auquel le récepteur corrige son erreur"],
    tip: "Scientific explanations follow a logical chain: d'abord, comme, cette différence permet de, c'est pourquoi. Follow the linking words and you'll follow the reasoning, even if a technical word escapes you.", tip_fr: "Les explications scientifiques suivent une chaîne logique : d'abord, comme, cette différence permet de, c'est pourquoi. Suis les connecteurs et tu suivras le raisonnement, même si un mot technique t'échappe."
  }]);

  W.LEXIS = W.LEXIS || {};
  W.LEXIS["b2-4"] = {
    colloc: [
      ["émettre une hypothèse", "to put forward a hypothesis", "Les chercheurs ont émis une nouvelle hypothèse.", "émis", ["dit", "joué"]],
      ["faire une découverte", "to make a discovery", "Elle a fait une découverte étonnante.", "fait", ["pris", "rendu"]],
      ["déposer un brevet", "to file a patent", "L'entreprise a déposé un brevet.", "déposé", ["posé", "mis"]],
      ["mettre au point", "to develop, to perfect", "Ils ont mis au point un nouveau vaccin.", "mis", ["fait", "tenu"]],
      ["faire une sauvegarde", "to make a backup", "Fais une sauvegarde avant la mise à jour.", "Fais", ["Prends", "Tire"]],
      ["tomber en panne", "to break down", "L'imprimante est encore tombée en panne.", "tombée", ["allée", "venue"]],
      ["être à la pointe de", "to be at the cutting edge of", "Ce laboratoire est à la pointe de la recherche.", "pointe", ["cime", "bout"]],
      ["franchir une étape", "to reach a milestone", "Le projet vient de franchir une étape décisive.", "franchir", ["sauter", "traverser"]],
      ["relever un défi", "to take up a challenge", "L'équipe a relevé le défi.", "relevé", ["levé", "porté"]],
      ["tirer parti de", "to take advantage of, to make the most of", "Il faut tirer parti des nouvelles technologies.", "tirer", ["prendre", "faire"]]
    ],
    wf: [
      ["Les ___ ont publié leurs résultats. (CHERCHER)", "chercheurs"],
      ["La ___ de ce virus a changé la médecine. (DÉCOUVRIR)", "découverte"],
      ["On doute de la ___ de ces données. (FIABLE)", "fiabilité"],
      ["L'___ de cette machine était un génie. (INVENTER)", "inventeur"],
      ["La médecine a fait d'énormes ___. (PROGRESSER)", "progrès"],
      ["Cet appareil mesure le temps avec une grande ___. (PRÉCIS)", "précision"],
      ["Beaucoup d'adolescents sont devenus ___ de leur téléphone. (DÉPENDRE)", "dépendants"],
      ["Les ___ se plaignent de la nouvelle version. (UTILISER)", "utilisateurs"]
    ],
    kwt: [
      ["J'écris avec ce stylo.", "LEQUEL", "C'est le stylo ___ j'écris.", "avec lequel"],
      ["Il est venu pour cette raison.", "LAQUELLE", "C'est la raison ___ il est venu.", "pour laquelle"],
      ["Les prix ont fortement augmenté.", "HAUSSE", "On constate une ___ des prix.", "forte hausse"],
      ["Le musée ouvrira en mars.", "OUVERTURE", "___ en mars.", "L'ouverture du musée aura lieu|L'ouverture du musée est prévue"],
      ["Grâce à cet outil, on gagne du temps.", "PERMET", "Cet outil ___ du temps.", "permet de gagner"],
      ["Pour l'utiliser, tu dois seulement appuyer ici.", "SUFFIT", "Pour l'utiliser, il ___ ici.", "suffit d'appuyer"]
    ],
    idioms: [
      ["ce n'est pas sorcier", "ce n'est pas difficile à comprendre", "it's not rocket science", "Tu vas voir, ce n'est pas sorcier !", "ce n'est pas sorcier"],
      ["réinventer la roue", "refaire inutilement ce qui existe déjà", "to reinvent the wheel", "Inutile de réinventer la roue : ce logiciel existe déjà.", "réinventer la roue"],
      ["avoir le déclic", "comprendre tout à coup", "to have a lightbulb moment", "Après des semaines d'efforts, elle a eu le déclic.", "eu le déclic"],
      ["faire fausse route", "se tromper de direction ou de méthode", "to be on the wrong track", "Les enquêteurs ont fait fausse route pendant des mois.", "fait fausse route"],
      ["un pas de géant", "un très grand progrès", "a giant leap", "Ce vaccin représente un pas de géant pour la médecine.", "un pas de géant"],
      ["être à la page", "être moderne, au courant des nouveautés", "to be up to date", "Mon grand-père est très à la page : il a un téléphone dernier cri.", "à la page"],
      ["dernier cri", "le plus moderne", "state-of-the-art", "Il a un téléphone dernier cri.", "dernier cri"],
      ["jouer les apprentis sorciers", "faire des expériences dangereuses sans les maîtriser", "to play the sorcerer's apprentice", "Avec cette technologie, il ne faut pas jouer les apprentis sorciers.", "jouer les apprentis sorciers"]
    ]
  };

  W.PROMPTS.push({ id: "fr-b2-4", level: "B2", q: "Quelle invention a le plus changé ta vie quotidienne ? Explique à quoi elle sert et comment tu t'en sers.", fr: "Which invention has changed your daily life the most? Explain what it's for and how you use it.", time: 180,
    phrases: ["L'invention sans laquelle je ne pourrais pas vivre, c'est…", "Ça sert à…", "Ça permet de…", "Il suffit de…", "Le seul inconvénient, c'est…"],
    model: "L'invention sans laquelle j'aurais du mal à vivre, c'est l'application de cartes sur mon téléphone. Elle sert à trouver son chemin, mais aussi à savoir à quelle heure passe le prochain bus. Il suffit de taper une adresse, et l'application calcule le meilleur trajet, à pied, à vélo ou en transports. Grâce à elle, je n'ai plus peur de me perdre dans une ville inconnue. Le seul inconvénient, c'est qu'on ne regarde plus autour de soi : on suit l'écran, et on oublie le paysage !" });

  W.WRITING_GUIDE["b2-4"] = { genre: "An article about an innovation (DELF B2)", genre_fr: "Un article sur une innovation (DELF B2)",
    plan: [["Give a title and present the innovation with a concrete situation.", "Donne un titre et présente l'innovation avec une situation concrète."], ["Explain simply how it works.", "Explique simplement comment elle fonctionne."], ["Present its advantages, with examples.", "Présente ses avantages, avec des exemples."], ["Present its risks or limits (toutefois, par ailleurs).", "Présente ses risques ou ses limites (toutefois, par ailleurs)."], ["Conclude with your opinion.", "Conclus avec ton avis."]],
    marks: [["il suffit de sortir son téléphone", "il suffit de", "il suffit de"], ["Ces outils reposent sur", "explaining how it works", "expliquer le fonctionnement"], ["C'est la raison pour laquelle", "pour laquelle", "pour laquelle"], ["la dépendance à ces outils", "a nominalisation", "une nominalisation"], ["Toutefois", "a formal contrast", "une opposition formelle"], ["à condition de savoir", "a condition", "une condition"]] };

  W.COURSE.push({ id: "b2-4", level: "B2", icon: "atom", title: "Science and technology", title_fr: "Sciences et technologies",
    intro: "In this unit, you'll talk about science and technology: the compound relative pronouns (lequel, auquel, duquel), nominalisation for headlines and formal writing, and the French you need to explain how something works.",
    intro_fr: "Dans cette unité, tu vas parler de science et de technologie : les pronoms relatifs composés (lequel, auquel, duquel), la nominalisation pour les titres et l'écrit formel, et le français qu'il faut pour expliquer un fonctionnement.",
    can: ["Use lequel, auquel, duquel and parmi lesquels", "Turn verbs and adjectives into nouns", "Understand headlines and scientific explanations", "Explain how an object or an app works, step by step", "Write an article presenting an innovation"],
    can_fr: ["Utiliser lequel, auquel, duquel et parmi lesquels", "Transformer des verbes et des adjectifs en noms", "Comprendre des titres et des explications scientifiques", "Expliquer le fonctionnement d'un objet ou d'une application, étape par étape", "Écrire un article pour présenter une innovation"],
    lessons: [84, 85, 86], vocab: ["sciencesFR", "technoFR"], reading: "participatives", prompt: "fr-b2-4",
    writing: { task: "Write an article (250-280 words) for your language school's blog about an innovation that has changed our lives: present it, explain how it works, its advantages and its risks, and give your opinion.", task_fr: "Écris un article (250 à 280 mots) pour le blog de ton école de langues sur une innovation qui a changé nos vies : présente-la, explique son fonctionnement, ses avantages et ses risques, et donne ton avis.", words: "250-280",
      tips: ["Il y a quelques années, …", "Comment ça marche ? …", "C'est la raison pour laquelle…", "Toutefois, …", "En somme, …"],
      checklist: ["I explained how it works in simple words", "I used lequel or auquel at least once", "I used a nominalisation", "I balanced advantages and risks", "I wrote between 250 and 280 words"],
      model: "La traduction instantanée : un outil formidable, mais pas magique\n\nIl y a encore quelques années, voyager dans un pays dont on ne parlait pas la langue demandait du courage. Aujourd'hui, il suffit de sortir son téléphone : une application traduit en quelques secondes un menu, un panneau ou même une conversation.\n\nComment ça marche ? Ces outils reposent sur des programmes d'intelligence artificielle, entraînés sur d'immenses quantités de textes déjà traduits par des humains. À partir de ces exemples, le programme calcule la traduction la plus probable. C'est la raison pour laquelle les résultats sont souvent excellents pour des phrases courantes, mais beaucoup moins fiables pour l'humour ou les expressions idiomatiques.\n\nLes avantages sont évidents : la communication devient plus facile, les voyageurs gagnent en autonomie, et les petites entreprises peuvent s'adresser à des clients du monde entier. Pour une personne qui vient d'arriver dans un pays, ces applications permettent parfois de comprendre un formulaire ou une consigne médicale, ce qui n'est pas rien.\n\nToutefois, leur utilisation n'est pas sans risques. Une erreur de traduction dans un contrat ou une ordonnance peut avoir de graves conséquences. Par ailleurs, la dépendance à ces outils pourrait décourager l'apprentissage des langues, alors que parler la langue de l'autre, c'est aussi s'intéresser à sa culture.\n\nEn somme, la traduction instantanée est un outil précieux, à condition de savoir dans quelles situations on peut lui faire confiance. Pour ma part, je m'en sers en voyage, mais je continue à apprendre le français : aucune machine ne remplacera le plaisir de comprendre une blague sans aide !" } });
})();
