/* Cours de français, unité B1-6 « The environment / L'environnement » : la cause et la conséquence (parce que,
   comme, puisque, grâce à, à cause de, donc, c'est pourquoi, tellement… que), le gérondif (en + participe présent)
   et le participe présent, proposer et suggérer, écrire à la mairie. Personnages, famille et entreprise fictifs,
   prénoms français. Faits généraux seulement (le béton et le manque d'arbres rendent les villes plus chaudes) ;
   aucun chiffre. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "environnementFR", icon: "leaf", title: "The environment", title_fr: "L'environnement", level: "B1", words: [
    ["l'environnement", "the environment", "Il faut protéger l'environnement."],
    ["le climat", "the climate", "Le climat change de plus en plus vite."],
    ["le réchauffement climatique", "global warming", "Le réchauffement climatique touche toute la planète."],
    ["l'empreinte carbone", "the carbon footprint", "L'avion augmente beaucoup l'empreinte carbone d'un voyage."],
    ["polluer", "to pollute", "Les vieilles voitures polluent beaucoup."],
    ["les déchets", "waste, rubbish", "On produit trop de déchets."],
    ["trier", "to sort (rubbish)", "Chez nous, on trie le verre, le papier et le plastique."],
    ["recycler", "to recycle", "Ces bouteilles sont recyclées."],
    ["le tri", "sorting, recycling", "Le tri des déchets est obligatoire dans mon immeuble."],
    ["l'énergie", "energy", "Il faut économiser l'énergie."],
    ["renouvelable", "renewable", "Le soleil et le vent sont des énergies renouvelables."],
    ["gaspiller", "to waste", "Arrête de gaspiller l'eau !"],
    ["le gaspillage", "waste, wastefulness", "Le gaspillage alimentaire est énorme."],
    ["la planète", "the planet", "Nous n'avons qu'une planète."],
    ["protéger", "to protect", "Cette association protège les forêts."],
    ["le développement durable", "sustainable development", "Le développement durable est une priorité pour la ville."],
    ["consommer", "to consume, to use", "Ce frigo consomme peu d'électricité."],
    ["en vrac", "loose, unpackaged (bulk)", "J'achète les pâtes et le riz en vrac."]
  ] },
  { id: "natureFR", icon: "trees", title: "Nature", title_fr: "La nature", level: "B1", words: [
    ["l'arbre", "the tree", "On a planté trois arbres dans le jardin."],
    ["la rivière", "the river", "On se baigne dans la rivière en été."],
    ["le fleuve", "the (large) river (flowing into the sea)", "La Loire est le plus long fleuve de France."],
    ["l'océan", "the ocean", "La maison donne sur l'océan."],
    ["le champ", "the field", "Des vaches dans un champ."],
    ["la fleur", "the flower", "Elle m'a offert des fleurs."],
    ["l'oiseau", "the bird", "J'entends les oiseaux le matin."],
    ["l'abeille", "the bee", "Les abeilles sont essentielles pour les fleurs."],
    ["l'insecte", "the insect", "Il y a de moins en moins d'insectes."],
    ["l'espèce", "the species", "Cette espèce est protégée."],
    ["menacé / menacée", "threatened, endangered (m) / (f)", "Cet oiseau est menacé."],
    ["disparaître", "to disappear", "Des espèces disparaissent chaque année."],
    ["la sécheresse", "the drought", "La sécheresse a duré tout l'été."],
    ["l'inondation", "the flood", "Les inondations ont touché la région."],
    ["la canicule", "the heatwave", "Pendant la canicule, il faut boire beaucoup d'eau."],
    ["le paysage", "the landscape", "Quel beau paysage !"],
    ["la biodiversité", "biodiversity", "Les haies protègent la biodiversité."],
    ["l'ombre", "the shade, the shadow", "Il fait trente degrés à l'ombre."]
  ] });

  W.LESSONS.push(
  {
    id: 60, level: "B1", icon: "workflow",
    title: "À cause de, grâce à, donc: cause and consequence", title_fr: "À cause de, grâce à, donc : la cause et la conséquence",
    subtitle: "Why it happened and what it led to, with the right word for each situation.", subtitle_fr: "Pourquoi c'est arrivé et ce que ça a entraîné, avec le bon mot pour chaque situation.",
    body: `
<h2>Giving a cause</h2>
<table>
<tr><th>French</th><th>Use</th><th>Example</th></tr>
<tr><td><s-fr>parce que</s-fr></td><td>+ a verb; answers pourquoi</td><td><s-fr>Je prends le vélo parce que c'est plus rapide.</s-fr></td></tr>
<tr><td><s-fr>comme</s-fr></td><td>+ a verb, at the start of the sentence</td><td><s-fr>Comme il pleuvait, on est restés.</s-fr></td></tr>
<tr><td><s-fr>puisque</s-fr></td><td>an obvious cause, known to both</td><td><s-fr>Puisque tu es là, aide-moi !</s-fr></td></tr>
<tr><td><s-fr>grâce à</s-fr></td><td>+ a noun, a positive cause</td><td><s-fr>Grâce au vélo, je suis en forme.</s-fr></td></tr>
<tr><td><s-fr>à cause de</s-fr></td><td>+ a noun, a negative cause</td><td><s-fr>À cause de la pollution, l'air est mauvais.</s-fr></td></tr>
</table>
<p>In written or official French, you'll also see <s-fr>car</s-fr> (because) and <s-fr>en raison de</s-fr> (due to): <s-fr>En raison des travaux, la ligne est fermée.</s-fr></p>
<h2>Giving a consequence</h2>
<p><s-fr>donc</s-fr> (so) · <s-fr>alors</s-fr> (so, in speech) · <s-fr>c'est pourquoi</s-fr> (that's why) · <s-fr>par conséquent</s-fr> (consequently, formal) · <s-fr>tellement… que</s-fr> (so… that): <s-fr>Il fait tellement chaud qu'on ne peut pas dormir.</s-fr></p>
<div class="tip"><s-fr>à cause de</s-fr> and <s-fr>grâce à</s-fr> are followed by a noun, never a verb. Before a verb, use <s-fr>parce que</s-fr>. And remember the contractions: <s-fr>grâce au soleil</s-fr>, <s-fr>à cause du bruit</s-fr>, <s-fr>à cause des travaux</s-fr>.</div>
`,
    examples: [
      ["Je prends le vélo parce que c'est plus rapide.", "I cycle because it's quicker."],
      ["Comme il faisait beau, on a mangé dehors.", "As the weather was nice, we ate outside."],
      ["Puisque tu es là, tu peux m'aider ?", "Since you're here, can you help me?"],
      ["Grâce aux panneaux solaires, on paie moins d'électricité.", "Thanks to the solar panels, we pay less for electricity."],
      ["À cause de la sécheresse, les champs sont jaunes.", "Because of the drought, the fields are yellow."],
      ["Il n'y avait plus de bus, donc on est rentrés à pied.", "There were no more buses, so we walked home."],
      ["Il fait tellement chaud qu'on ne peut pas dormir.", "It's so hot that we can't sleep."],
      ["En raison des travaux, la rue est fermée.", "Due to the roadworks, the street is closed."]
    ],
    quiz: [
      { q: "“Thanks to the wind, the air is clean”:", o: ["À cause du vent, l'air est propre.", "Grâce au vent, l'air est propre.", "Grâce le vent, l'air est propre."], a: 1, ex: "A positive cause: grâce à (au vent)." },
      { q: "“The match was cancelled because of the rain”:", o: ["Le match a été annulé à cause de la pluie.", "Le match a été annulé grâce à la pluie.", "Le match a été annulé parce que la pluie."], a: 0, ex: "A negative cause + noun: à cause de." },
      { q: "At the start of a sentence, “As it was late…” is:", o: ["Parce qu'il était tard, …", "Comme il était tard, …", "Grâce à tard, …"], a: 1, ex: "comme at the start of the sentence." },
      { q: "“It's so noisy that I can't work”:", o: ["C'est tellement bruyant que je ne peux pas travailler.", "C'est si bruyant donc je ne peux pas travailler.", "C'est tellement bruyant parce que je ne peux pas travailler."], a: 0, ex: "tellement… que = so… that." },
      { q: "Which one is followed by a noun?", o: ["parce que", "à cause de", "puisque"], a: 1, ex: "à cause de + noun; parce que and puisque + verb." }
    ]
  },
  {
    id: 61, level: "B1", icon: "footprints",
    title: "En marchant: the gérondif", title_fr: "En marchant : le gérondif",
    subtitle: "En + -ant: doing two things at once, saying how, and setting a condition.", subtitle_fr: "En + -ant : faire deux choses à la fois, dire comment, poser une condition.",
    body: `
<h2>Forming it</h2>
<p>Take the <s-fr>nous</s-fr> form of the present, remove <s-fr>-ons</s-fr>, add <s-fr>-ant</s-fr>, and put <s-fr>en</s-fr> before it: <s-fr>nous parlons</s-fr> → <s-fr>en parlant</s-fr> · <s-fr>nous finissons</s-fr> → <s-fr>en finissant</s-fr> · <s-fr>nous prenons</s-fr> → <s-fr>en prenant</s-fr> · <s-fr>nous faisons</s-fr> → <s-fr>en faisant</s-fr>.</p>
<p>Three exceptions: <s-fr>être</s-fr> → <s-fr>en étant</s-fr>, <s-fr>avoir</s-fr> → <s-fr>en ayant</s-fr>, <s-fr>savoir</s-fr> → <s-fr>en sachant</s-fr>.</p>
<h2>Three uses</h2>
<table>
<tr><th>Use</th><th>Example</th></tr>
<tr><td>two actions at the same time</td><td><s-fr>Il écoute la radio en cuisinant.</s-fr></td></tr>
<tr><td>how, by what means</td><td><s-fr>On économise de l'énergie en éteignant la lumière.</s-fr></td></tr>
<tr><td>a condition (= si)</td><td><s-fr>En prenant le train, tu arriveras plus vite.</s-fr></td></tr>
</table>
<p>The gérondif always has the same subject as the main verb: in <s-fr>J'ai vu Paul en sortant</s-fr>, I'm the one going out.</p>
<h2>Tout en: a contrast</h2>
<p><s-fr>Tout en sachant que c'est mauvais pour la planète, il prend l'avion chaque mois.</s-fr> (Even though he knows…)</p>
<h2>The present participle alone</h2>
<p>Without <s-fr>en</s-fr>, the -ant form replaces <s-fr>qui</s-fr> + a verb in written French, especially in ads and official texts: <s-fr>Les personnes souhaitant participer peuvent s'inscrire en ligne.</s-fr> (People who wish to take part…)</p>
<div class="tip">English -ing isn't always the gérondif. "I like swimming" is <s-fr>J'aime nager</s-fr> (infinitive), and "I'm swimming" is <s-fr>je nage</s-fr>. The gérondif answers "when?" or "how?".</div>
`,
    examples: [
      ["Il écoute la radio en cuisinant.", "He listens to the radio while he cooks."],
      ["On économise de l'énergie en éteignant la lumière.", "You save energy by switching off the light."],
      ["En prenant le train, tu arriveras plus vite.", "If you take the train, you'll get there faster."],
      ["Elle a appris le français en regardant des films.", "She learnt French by watching films."],
      ["J'ai rencontré mon voisin en sortant.", "I met my neighbour as I was going out."],
      ["Ne téléphone pas en conduisant !", "Don't phone while you're driving!"],
      ["Tout en étant fatigué, il a fini son travail.", "Although he was tired, he finished his work."],
      ["Les personnes souhaitant participer peuvent s'inscrire en ligne.", "People wishing to take part can sign up online."]
    ],
    quiz: [
      { q: "The gérondif of faire is:", o: ["en faiant", "en faisant", "en fait"], a: 1, ex: "nous faisons → en faisant." },
      { q: "“By recycling, we protect the planet” is:", o: ["En recyclant, on protège la planète.", "Par recycler, on protège la planète.", "En recycler, on protège la planète."], a: 0, ex: "How: en + present participle." },
      { q: "“I like walking” is:", o: ["J'aime en marchant.", "J'aime marcher.", "J'aime marchant."], a: 1, ex: "After aimer, the infinitive." },
      { q: "The gérondif of savoir is:", o: ["en savant", "en sachant", "en sait"], a: 1, ex: "An exception: en sachant." },
      { q: "“En partant tôt, tu éviteras les bouchons” means:", o: ["If you leave early, you'll avoid the traffic jams.", "Because you left early, you avoided the traffic jams.", "You left early and the traffic jams avoided you."], a: 0, ex: "Here the gérondif sets a condition." }
    ]
  },
  {
    id: 62, level: "B1", kind: "functional", icon: "lightbulb",
    title: "Everyday French: suggesting and proposing", title_fr: "Le français de tous les jours : suggérer et proposer",
    subtitle: "From a friendly et si on… to a formal letter to the town hall.", subtitle_fr: "Du et si on… entre amis à la lettre formelle à la mairie.",
    body: `
<h2>Suggesting, among friends</h2>
<p><s-fr>Et si on allait au parc ?</s-fr> (si + imparfait) · <s-fr>On pourrait prendre les vélos.</s-fr> · <s-fr>Ça te dirait de venir au marché ?</s-fr> (How about…?) · <s-fr>Pourquoi pas un pique-nique ?</s-fr></p>
<h2>Proposing, more formally</h2>
<p><s-fr>Je propose qu'on organise une collecte.</s-fr> (proposer que + subjunctive) · <s-fr>Il serait utile de…</s-fr> · <s-fr>Nous souhaiterions que la mairie installe des bancs.</s-fr></p>
<h2>Answering</h2>
<p>Yes: <s-fr>Bonne idée !</s-fr> · <s-fr>Pourquoi pas !</s-fr> · <s-fr>Ça me dit bien.</s-fr> (I'd like that.) No: <s-fr>Ça ne me dit rien.</s-fr> (I don't fancy it.) · <s-fr>Je ne crois pas que ce soit possible.</s-fr></p>
<h2>Writing to the town hall</h2>
<p>Open: <s-fr>Madame la Maire,</s-fr> / <s-fr>Monsieur le Maire,</s-fr> · <s-fr>Je me permets de vous écrire au sujet de…</s-fr> · <s-fr>Je souhaiterais attirer votre attention sur…</s-fr> Propose: <s-fr>Je propose que…</s-fr> · <s-fr>Il serait utile de…</s-fr> Close: <s-fr>Dans l'attente de votre réponse, je vous prie d'agréer, Monsieur le Maire, l'expression de mes salutations respectueuses.</s-fr></p>
<div class="tip"><s-fr>Ça te dit ?</s-fr> (Do you fancy it?) is one of the most common ways to suggest something in spoken French. The answer: <s-fr>Oui, ça me dit !</s-fr> or <s-fr>Bof, ça ne me dit pas trop.</s-fr></div>
`,
    examples: [
      ["Et si on allait se promener au bord de la rivière ?", "How about going for a walk by the river?"],
      ["Ça te dirait de venir au marché avec moi ?", "Do you fancy coming to the market with me?"],
      ["On pourrait installer un composteur dans la cour.", "We could put a compost bin in the courtyard."],
      ["Je propose qu'on organise une journée de nettoyage.", "I suggest we organise a clean-up day."],
      ["Il serait utile de planter des arbres sur la place.", "It would be useful to plant trees in the square."],
      ["Bonne idée, ça me dit bien !", "Good idea, I'd like that!"],
      ["Je me permets de vous écrire au sujet du parc.", "I am writing to you about the park."]
    ],
    quiz: [
      { q: "“How about going to the beach?” is:", o: ["Et si on allait à la plage ?", "Et si on irait à la plage ?", "Et si on va à la plage ?"], a: 0, ex: "Et si + imparfait." },
      { q: "“I suggest we go by bike” is:", o: ["Je propose qu'on va à vélo.", "Je propose qu'on aille à vélo.", "Je propose d'on aller à vélo."], a: 1, ex: "proposer que + subjunctive (aille)." },
      { q: "“Ça ne me dit rien” means:", o: ["It doesn't tell me anything.", "I don't fancy it.", "I don't understand."], a: 1, ex: "Ça ne me dit rien = I don't feel like it." },
      { q: "To start a letter to a female mayor:", o: ["Chère Madame,", "Madame la Maire,", "Salut, Madame !"], a: 1, ex: "Madame la Maire, (or Madame le Maire, more traditional)." },
      { q: "“Je me permets de vous écrire” is used:", o: ["in a formal letter", "in a text to a friend", "on a postcard"], a: 0, ex: "A formal opening." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    60: {
      gap: [["Je suis en retard à ___ des travaux. (because of)", "cause"], ["___ au vélo, je suis en forme. (thanks to)", "Grâce"], ["___ il pleuvait, on est restés à la maison. (as, at the start)", "Comme"], ["Il fait ___ chaud qu'on ne peut pas dormir. (so)", "tellement"]],
      fix: [["Grâce à la pollution, l'air est mauvais.", "À cause de la pollution, l'air est mauvais.", "A negative cause: à cause de. grâce à is for positive causes."], ["On a annulé le match à cause qu'il pleuvait.", "On a annulé le match parce qu'il pleuvait.|On a annulé le match à cause de la pluie.", "à cause de + a noun; before a verb, parce que."]],
      task: ["Explain the causes and consequences of a heatwave in a city, with at least four linking words.", "Explique les causes et les conséquences d'une canicule en ville, avec au moins quatre connecteurs.", "En ville, il fait souvent plus chaud qu'à la campagne, à cause du béton et du manque d'arbres. Comme les nuits restent chaudes, les gens dorment mal. Les personnes âgées sont donc plus fragiles. C'est pourquoi beaucoup de villes plantent des arbres : grâce à leur ombre, les rues sont plus fraîches."]
    },
    61: {
      gap: [["Il écoute de la musique en ___. (travailler)", "travaillant"], ["On économise de l'énergie en ___ la lumière. (éteindre)", "éteignant"], ["En ___ le train, tu arriveras plus vite. (prendre)", "prenant"], ["Elle a appris le français en ___ des films. (regarder)", "regardant"]],
      fix: [["J'aime en nageant le matin.", "J'aime nager le matin.", "After aimer, the infinitive, not the gérondif."], ["Il a eu un accident en conduire.", "Il a eu un accident en conduisant.", "en + present participle (nous conduisons → conduisant)."]],
      task: ["Give five everyday tips to protect the environment, each one with a gérondif.", "Donne cinq conseils de tous les jours pour protéger l'environnement, chacun avec un gérondif.", "On économise de l'eau en prenant des douches courtes. On réduit ses déchets en achetant en vrac. On pollue moins en allant au travail à vélo. On économise de l'énergie en éteignant les appareils le soir. Et on aide la nature en plantant des fleurs pour les abeilles."]
    },
    62: {
      gap: [["Et si on ___ un pique-nique ? (organiser)", "organisait"], ["Ça te ___ d'aller au marché ? (dire)", "dirait"], ["Je propose qu'on ___ une collecte. (faire)", "fasse"], ["On ___ prendre le vélo. (could)", "pourrait"]],
      fix: [["Je propose qu'on va au parc.", "Je propose qu'on aille au parc.", "proposer que + subjunctive."], ["Et si on va à la plage ?", "Et si on allait à la plage ?", "Et si + imparfait for a suggestion."]],
      task: ["Your building wants to be greener. Write four suggestions for the next residents' meeting.", "Ton immeuble veut devenir plus écologique. Écris quatre propositions pour la prochaine réunion des habitants.", "Je propose qu'on installe des poubelles de tri dans le local à vélos. On pourrait aussi créer un composteur dans la cour. Et si on organisait une fois par mois un atelier pour réparer les objets cassés ? Enfin, il serait utile de mettre des lampes basse consommation dans le couloir."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "reunionvoisins", lesson: 62, level: "B1", icon: "users", partner: "Mme Roux", role: "a neighbour, head of the residents' association",
    title: "A residents' meeting", title_fr: "La réunion des voisins",
    setting: "Your building's bins overflow every weekend. At the residents' meeting, Mme Roux asks for ideas. Make suggestions.", setting_fr: "Les poubelles de ton immeuble débordent tous les week-ends. À la réunion des habitants, Mme Roux demande des idées. Fais des propositions.",
    turns: [
      { p: "Bon, merci d'être venus. Ce soir, on parle des déchets : nos poubelles débordent tous les week-ends. Vous avez des idées ?", fr: "Right, thank you for coming. Tonight, we're talking about waste: our bins overflow every weekend. Do you have any ideas?" },
      { y: ["Je propose qu'on installe un composteur dans la cour.", "Je propose qu'on installera un composteur dans la cour.", "Je propose d'on installe un composteur dans la cour."], fr: "I suggest we put a compost bin in the courtyard.", why: "proposer que + subjunctive (qu'on installe)." },
      { p: "Un composteur ? Mais ça sent mauvais, non ?", fr: "A compost bin? But it smells, doesn't it?" },
      { y: ["Pas si on l'entretient bien. Et grâce au compost, on aurait de la terre pour les plantes.", "Pas si on l'entretient bien. Et à cause du compost, on aurait de la terre pour les plantes.", "Pas si on l'entretient bien. Et grâce le compost, on aurait de la terre pour les plantes."], fr: "Not if we look after it properly. And thanks to the compost, we'd have soil for the plants.", why: "A positive result: grâce à (grâce au compost)." },
      { p: "D'accord, c'est une bonne idée. Et pour les emballages ?", fr: "OK, that's a good idea. And what about packaging?" },
      { y: ["On pourrait mettre des affiches pour expliquer le tri, parce que beaucoup de gens se trompent.", "On pourrait mettre des affiches pour expliquer le tri, à cause de beaucoup de gens se trompent.", "On pourrait mettre des affiches pour expliquer le tri, car que beaucoup de gens se trompent."], fr: "We could put up posters to explain the sorting, because a lot of people get it wrong.", why: "parce que + a verb; à cause de only + a noun." },
      { p: "Très bien. Et comment est-ce qu'on informe tous les habitants ?", fr: "Very good. And how do we let all the residents know?" },
      { y: ["En mettant un message dans chaque boîte aux lettres, tout le monde sera au courant.", "En mettre un message dans chaque boîte aux lettres, tout le monde sera au courant.", "En mettons un message dans chaque boîte aux lettres, tout le monde sera au courant."], fr: "By putting a note in every letterbox, everyone will know.", why: "The gérondif: en + present participle (mettant)." },
      { p: "Parfait. Je vais écrire à la mairie pour le composteur. Vous voulez bien m'aider ?", fr: "Perfect. I'll write to the town hall about the compost bin. Would you help me?" },
      { y: ["Avec plaisir, ça me dit bien ! On peut le faire ensemble samedi ?", "Avec plaisir, ça me dis bien ! On peut le faire ensemble samedi ?", "Avec plaisir, ça me dit bon ! On peut le faire ensemble samedi ?"], fr: "With pleasure, I'd like that! Shall we do it together on Saturday?", why: "Ça me dit bien = I'd like that (dire, with ça)." }
    ] }
  );

  W.READINGS.push({
    id: "zerodechet", level: "B1", icon: "leaf", title: "Une famille presque zéro déchet", genre: "Magazine story",
    intro: "A family in Grenoble went from a full bin a week to one jar a month. How did they do it? Cause and consequence, and the gérondif.",
    intro_fr: "Une famille de Grenoble est passée d'une poubelle pleine par semaine à un bocal par mois. Comment ? La cause, la conséquence et le gérondif.",
    paragraphs: [
      { en: "Il y a trois ans, la famille Lemoine, à Grenoble, remplissait une grande poubelle par semaine. Aujourd'hui, ses déchets tiennent dans un bocal par mois. Comment a-t-elle fait ? Nous lui avons rendu visite.", fr: "Three years ago, the Lemoine family, in Grenoble, filled a big bin every week. Today, their waste fits in one jar a month. How did they do it? We paid them a visit." },
      { en: "Tout a commencé par un documentaire, raconte Élise, la mère. J'étais tellement choquée que j'ai décidé de changer nos habitudes. Mais comme je ne voulais pas tout changer d'un coup, nous avons avancé étape par étape.", fr: "It all started with a documentary, says Élise, the mother. I was so shocked that I decided to change our habits. But as I didn't want to change everything at once, we went step by step." },
      { en: "D'abord, ils ont réduit les emballages en faisant leurs courses au marché et dans des magasins de vrac, avec leurs propres sacs et bocaux. Ensuite, grâce à un composteur dans le jardin, les épluchures ne finissent plus à la poubelle. Enfin, ils réparent au lieu de jeter : en apprenant à coudre, Élise a sauvé des dizaines de vêtements.", fr: "First, they cut down on packaging by doing their shopping at the market and in bulk shops, with their own bags and jars. Then, thanks to a compost bin in the garden, peelings no longer end up in the bin. Finally, they repair instead of throwing away: by learning to sew, Élise has saved dozens of clothes." },
      { en: "Et les enfants ? Au début, Hugo, 12 ans, n'était pas convaincu : je voulais des gâteaux en paquet, comme mes copains ! Aujourd'hui, il prépare lui-même ses biscuits en suivant une recette de sa grand-mère, et il en est très fier.", fr: "And the children? At first, Hugo, 12, wasn't convinced: I wanted biscuits in packets, like my mates! Today, he makes his own biscuits following his grandmother's recipe, and he's very proud of them." },
      { en: "La famille reconnaît que ce mode de vie demande du temps. Par contre, elle fait des économies : elle achète moins, donc elle dépense moins. Son conseil ? Commencer petit, en choisissant une seule habitude à changer chaque mois.", fr: "The family admits that this lifestyle takes time. On the other hand, they save money: they buy less, so they spend less. Their advice? Start small, by choosing just one habit to change each month." }
    ],
    glossary: { "remplissait": "filled", "tiennent": "fit", "bocal": "jar", "documentaire": "documentary", "choquée": "shocked", "habitudes": "habits", "étape": "step, stage", "réduit": "reduced, cut down", "bocaux": "jars", "épluchures": "peelings", "jeter": "to throw away", "coudre": "to sew", "sauvé": "saved", "dizaines": "dozens", "paquet": "packet", "copains": "mates, friends", "recette": "recipe", "reconnaît": "admits", "mode": "way (mode de vie: lifestyle)" },
    questions: [
      { q: "Combien de déchets la famille produit-elle aujourd'hui ?", o: ["Une grande poubelle par semaine", "Un bocal par mois", "Rien du tout"], a: 1 },
      { q: "Qu'est-ce qui a donné envie à Élise de changer ?", o: ["Un voisin", "Un article de journal", "Un documentaire"], a: 2 },
      { q: "Comment la famille réduit-elle les emballages ?", o: ["En faisant ses courses au marché et en vrac", "En achetant en ligne", "En mangeant au restaurant"], a: 0 },
      { q: "Qu'est-ce qu'Hugo prépare lui-même ?", o: ["Du pain", "Des confitures", "Des biscuits"], a: 2 },
      { q: "Quel est le conseil de la famille ?", o: ["Tout changer d'un coup", "Commencer petit, une habitude par mois", "Acheter un composteur"], a: 1 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-b1-6", unit: "b1-6", level: "B1", icon: "users",
    title: "Une entreprise plus verte", title_fr: "Une entreprise plus verte",
    context: "In a team meeting, Pauline, the manager, asks Malik and Chloé for simple ideas to make the company greener.", context_fr: "En réunion d'équipe, Pauline, la responsable, demande à Malik et Chloé des idées simples pour rendre l'entreprise plus écologique.",
    words: [["un gobelet", "a (plastic) cup"], ["allumé", "switched on"], ["les embouteillages", "traffic jams"], ["le covoiturage", "car-sharing"], ["sécurisé", "secure"]],
    lines: [["Pauline", "Bon, comme vous le savez, l'entreprise veut réduire son impact sur l'environnement. J'aimerais qu'on trouve quelques idées simples aujourd'hui.", "fr-FR"], ["Malik", "Moi, je propose qu'on arrête les gobelets en plastique à la machine à café. Chacun pourrait apporter sa tasse.", "fr-FR"], ["Pauline", "Bonne idée. Ça ne coûte rien, et on produit moins de déchets.", "fr-FR"], ["Chloé", "Et si on éteignait les ordinateurs le soir ? Beaucoup restent allumés toute la nuit, et ils consomment de l'énergie pour rien.", "fr-FR"], ["Malik", "C'est vrai. On pourrait mettre un petit rappel sur chaque écran.", "fr-FR"], ["Pauline", "Parfait. Et pour les trajets ? La moitié de l'équipe vient en voiture.", "fr-FR"], ["Chloé", "À cause des embouteillages, certains mettent une heure pour venir. En organisant du covoiturage, on gagnerait du temps et de l'argent.", "fr-FR"], ["Malik", "Et l'entreprise pourrait installer un parking à vélos sécurisé. Comme ça, ceux qui habitent près viendraient à vélo.", "fr-FR"], ["Pauline", "Très bien. Je résume : les tasses, les ordinateurs éteints, le covoiturage et les vélos. Je présente tout ça à la direction vendredi.", "fr-FR"]],
    gist: ["Quel est le sujet de la réunion ?", ["Rendre l'entreprise plus écologique", "Organiser une fête", "Recruter un collègue"]],
    detail: [["Qu'est-ce que Malik propose pour la machine à café ?", ["Que chacun apporte sa tasse", "Acheter plus de gobelets", "Supprimer la machine"]], ["Pourquoi éteindre les ordinateurs le soir ?", ["Ils consomment de l'énergie pour rien.", "Ils font du bruit.", "La direction le demande."]], ["Quel est l'avantage du covoiturage, selon Chloé ?", ["On gagnerait du temps et de l'argent.", "On travaillerait moins.", "On pourrait dormir dans la voiture."]], ["Quand Pauline présentera-t-elle les idées ?", ["Vendredi", "Demain", "La semaine prochaine"]]],
    decode: ["je propose qu'on arrête les gobelets", "En organisant du covoiturage"],
    tip: "In a meeting, suggestions come in many forms: je propose que, et si on…, on pourrait… Each one brings a new idea: note it down as soon as you hear it.", tip_fr: "En réunion, les suggestions prennent plusieurs formes : je propose que, et si on…, on pourrait… Chacune apporte une nouvelle idée : note-la dès que tu l'entends."
  }]);

  W.PROMPTS.push({ id: "fr-b1-6", level: "B1", q: "Qu'est-ce que tu fais, au quotidien, pour l'environnement ? Et qu'est-ce que tu pourrais faire de plus ?", fr: "What do you do every day for the environment? And what more could you do?", time: 150,
    phrases: ["J'essaie de…", "En …-ant, je…", "Grâce à…", "Je pourrais…", "Par contre, …"],
    model: "J'essaie de faire attention, mais je ne suis pas parfait ! Je trie mes déchets et j'achète beaucoup de produits en vrac. Je vais au travail à vélo : grâce à ça, je fais du sport sans y penser. Par contre, je prends encore l'avion une ou deux fois par an, parce que ma famille habite loin. Je pourrais aussi manger moins de viande, et réparer mes affaires au lieu d'en acheter de nouvelles. En changeant une habitude à la fois, ça devrait être possible." });

  W.WRITING_GUIDE["b1-6"] = { genre: "A formal letter to the town hall (DELF B1)", genre_fr: "Une lettre formelle à la mairie (DELF B1)",
    plan: [["Open formally and say what you're writing about.", "Commence de façon formelle et dis à quel sujet tu écris."], ["Describe the problem and its causes.", "Décris le problème et ses causes."], ["Give its consequences.", "Donne ses conséquences."], ["Propose a solution (je propose que, en + -ant).", "Propose une solution (je propose que, en + -ant)."], ["Close with a formal formula.", "Termine par une formule de politesse."]],
    marks: [["Je me permets de vous écrire au sujet de", "a formal opening", "une entrée en matière formelle"], ["à cause du béton", "à cause de + a noun", "à cause de + nom"], ["Comme il n'y a presque pas d'ombre", "comme for a cause", "comme pour la cause"], ["En remplaçant une partie du béton", "the gérondif", "le gérondif"], ["Je propose que ce projet soit présenté", "proposer que + subjunctive", "proposer que + subjonctif"], ["Dans l'attente de votre réponse", "a formal closing", "une formule finale"]] };

  W.COURSE.push({ id: "b1-6", level: "B1", icon: "leaf", title: "The environment", title_fr: "L'environnement",
    intro: "In this unit, you'll talk about the environment and how to protect it: expressing cause and consequence, the gérondif, and the French you need to make suggestions to friends, at a meeting, or in a letter to the town hall.",
    intro_fr: "Dans cette unité, tu vas parler de l'environnement et de la façon de le protéger : exprimer la cause et la conséquence, le gérondif, et le français qu'il faut pour faire des propositions entre amis, en réunion ou dans une lettre à la mairie.",
    can: ["Express cause and consequence with the right linking word", "Use the gérondif for time, manner and condition", "Make suggestions informally and formally", "Understand a meeting where ideas are proposed", "Write a formal letter proposing a project"],
    can_fr: ["Exprimer la cause et la conséquence avec le bon connecteur", "Utiliser le gérondif pour le temps, la manière et la condition", "Faire des propositions, entre amis ou de façon formelle", "Comprendre une réunion où l'on propose des idées", "Écrire une lettre formelle pour proposer un projet"],
    lessons: [60, 61, 62], vocab: ["environnementFR", "natureFR"], reading: "zerodechet", prompt: "fr-b1-6",
    writing: { task: "A square in your neighbourhood is too hot and empty in summer. Write a letter to the mayor (160-180 words): describe the problem, its causes and consequences, and propose a project.", task_fr: "Une place de ton quartier est trop chaude et vide en été. Écris une lettre à la maire (160 à 180 mots) : décris le problème, ses causes et ses conséquences, et propose un projet.", words: "160-180",
      tips: ["Madame la Maire,", "Je me permets de vous écrire au sujet de…", "À cause de…, …", "Je propose que…", "Dans l'attente de votre réponse, …"],
      checklist: ["I opened and closed formally", "I gave at least two causes", "I gave a consequence", "I used the gérondif and proposer que", "I wrote between 160 and 180 words"],
      model: "Madame la Maire,\n\nJe me permets de vous écrire au sujet de la place du marché, dans le quartier Saint-Jean, où j'habite depuis cinq ans.\n\nDepuis quelques étés, cette place devient très chaude à cause du béton et du manque d'arbres. Comme il n'y a presque pas d'ombre, les familles et les personnes âgées ne peuvent plus s'y asseoir l'après-midi. Le marché du samedi perd donc des clients en juillet et en août.\n\nC'est pourquoi je souhaiterais vous proposer un projet simple : planter une dizaine d'arbres et installer quelques fontaines d'eau potable. En remplaçant une partie du béton par de la pelouse, on rendrait aussi la place plus agréable pour les enfants. De nombreux habitants que j'ai rencontrés sont prêts à participer, par exemple en arrosant les jeunes arbres pendant l'été.\n\nJe propose que ce projet soit présenté lors de la prochaine réunion de quartier. Je reste bien sûr à votre disposition pour en discuter.\n\nDans l'attente de votre réponse, je vous prie d'agréer, Madame la Maire, l'expression de mes salutations respectueuses.\n\nRobin Lemaire" } });
})();
