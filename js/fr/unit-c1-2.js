/* Cours de français, unité C1-2 « Science and ethics / Sciences et éthique » : la modalisation (devoir et pouvoir
   de probabilité, être censé, s'avérer, sembler + infinitif), les propositions participiales (ayant terminé, une fois
   les résultats publiés), présenter des chiffres. Personnages fictifs, prénoms français. Faits vérifiables seulement :
   principe de précaution inscrit dans la Constitution en 2005 par la Charte de l'environnement (article 5) ; amiante
   interdit en France en 1997, dangers soupçonnés dès le début du XXe siècle ; en 2015, l'Open Science Collaboration a
   tenté de reproduire cent études de psychologie, un peu plus d'un tiers ont donné des résultats comparables ;
   Fleming et la pénicilline (1928, publication en 1929, production en masse pendant la Seconde Guerre mondiale). */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "ethiqueFR", icon: "scale", title: "Ethics and science", title_fr: "Éthique et science", level: "C1", words: [
    ["la bioéthique", "bioethics", "Les lois de bioéthique encadrent la recherche sur le vivant."],
    ["le comité d'éthique", "the ethics committee", "Le projet doit être validé par un comité d'éthique."],
    ["le consentement éclairé", "informed consent", "Chaque participant donne son consentement éclairé."],
    ["le cobaye", "the guinea pig (test subject)", "Personne ne veut servir de cobaye."],
    ["la manipulation génétique", "genetic engineering", "La manipulation génétique suscite des craintes."],
    ["le clonage", "cloning", "Le clonage humain est interdit en France."],
    ["l'embryon", "the embryo", "La recherche sur l'embryon est strictement encadrée."],
    ["le don d'organes", "organ donation", "Le don d'organes sauve des milliers de vies."],
    ["le donneur / la donneuse", "the donor (m) / (f)", "Le donneur doit être compatible avec le receveur."],
    ["la greffe", "the transplant", "Elle attend une greffe de rein."],
    ["la fin de vie", "the end of life", "La fin de vie fait l'objet d'un débat de société."],
    ["le principe de précaution", "the precautionary principle", "Au nom du principe de précaution, le produit a été retiré."],
    ["la dérive", "the drift, the abuse", "Il faut éviter les dérives commerciales."],
    ["encadrer", "to regulate, to oversee", "La loi encadre strictement ces recherches."],
    ["transgresser", "to transgress, to break (a rule)", "Ces expériences transgressent un interdit."],
    ["l'intégrité scientifique", "research integrity", "L'intégrité scientifique exige de publier tous les résultats."],
    ["la fraude", "fraud", "Une fraude a été découverte dans les données."],
    ["le dilemme", "the dilemma", "Les médecins font face à un véritable dilemme."]
  ] },
  { id: "methodeFR", icon: "chart-line", title: "Research and figures", title_fr: "Recherche et chiffres", level: "C1", words: [
    ["le protocole", "the protocol (of a study)", "Le protocole a été publié avant l'étude."],
    ["l'échantillon", "the sample", "L'échantillon compte mille personnes."],
    ["le groupe témoin", "the control group", "Le groupe témoin a reçu un placebo."],
    ["la corrélation", "the correlation", "Une corrélation ne prouve pas une cause."],
    ["la causalité", "causality", "Il est difficile d'établir un lien de causalité."],
    ["le biais", "the bias", "Cette méthode introduit un biais."],
    ["reproductible", "reproducible", "Un résultat scientifique doit être reproductible."],
    ["la revue scientifique", "the scientific journal", "L'article est paru dans une revue scientifique."],
    ["l'évaluation par les pairs", "peer review", "L'évaluation par les pairs a duré six mois."],
    ["la marge d'erreur", "the margin of error", "La marge d'erreur est de trois points."],
    ["la recherche fondamentale", "basic research", "La recherche fondamentale prépare les innovations de demain."],
    ["le pourcentage", "the percentage", "Quel pourcentage des élèves a réussi ?"],
    ["la moyenne", "the average", "La moyenne de la classe est de douze sur vingt."],
    ["la médiane", "the median", "La médiane est moins sensible aux valeurs extrêmes."],
    ["la tendance", "the trend", "La tendance est à la hausse."],
    ["le graphique", "the graph, the chart", "Ce graphique montre l'évolution des ventes."],
    ["l'écart", "the gap, the difference", "L'écart entre les deux groupes est faible."],
    ["doubler", "to double", "Le nombre d'inscrits a doublé en deux ans."]
  ] });

  W.LESSONS.push(
  {
    id: 108, level: "C1", icon: "circle-help",
    title: "Il a dû se tromper, il est censé: expressing probability", title_fr: "Il a dû se tromper, il est censé : la modalisation",
    subtitle: "Devoir, pouvoir, être censé, s'avérer: say how sure you are, without a single “I think”.", subtitle_fr: "Devoir, pouvoir, être censé, s'avérer : dire à quel point on est sûr, sans un seul « je pense ».",
    body: `
<h2>Devoir: probability, not obligation</h2>
<p><s-fr>Il a dû se tromper.</s-fr> (he must have made a mistake) · <s-fr>Elle doit être en réunion.</s-fr> (she must be in a meeting) · <s-fr>Ça devait arriver.</s-fr> (it was bound to happen) · In the conditional, a reasonable expectation: <s-fr>Il devrait arriver vers dix-huit heures.</s-fr></p>
<h2>Pouvoir: possibility</h2>
<p><s-fr>Il peut s'agir d'une erreur.</s-fr> (it may be a mistake) · <s-fr>Ils ont pu se perdre.</s-fr> (they may have got lost) · <s-fr>Il se pourrait que</s-fr> + subjunctive: <s-fr>Il se pourrait que les résultats soient faux.</s-fr></p>
<h2>Être censé, passer pour, s'avérer</h2>
<p><s-fr>être censé</s-fr> + infinitive (supposed to): <s-fr>Le rapport est censé paraître lundi.</s-fr> · <s-fr>passer pour</s-fr> (to be regarded as): <s-fr>Il passe pour le meilleur spécialiste du domaine.</s-fr> · <s-fr>s'avérer</s-fr>, <s-fr>se révéler</s-fr> (to turn out): <s-fr>L'hypothèse s'est avérée fausse.</s-fr></p>
<h2>Sembler, paraître + infinitive</h2>
<p><s-fr>Il semble avoir compris.</s-fr> · <s-fr>Elle paraît ignorer le problème.</s-fr> · <s-fr>Les résultats semblent confirmer l'hypothèse.</s-fr></p>
<h2>Adverbs</h2>
<p><s-fr>vraisemblablement</s-fr> (in all likelihood) · <s-fr>apparemment</s-fr> · <s-fr>assurément</s-fr> (certainly) · <s-fr>sans doute</s-fr> (probably) · <s-fr>sans aucun doute</s-fr> (without any doubt)</p>
<div class="tip">A classic trap: <s-fr>sans doute</s-fr> means probably, not without doubt. For certainty, say <s-fr>sans aucun doute</s-fr> or <s-fr>assurément</s-fr>.</div>
`,
    examples: [
      ["Il n'est pas venu : il a dû oublier la réunion.", "He didn't come: he must have forgotten the meeting."],
      ["Elle doit être en réunion, elle ne répond pas.", "She must be in a meeting, she isn't answering."],
      ["Il peut s'agir d'une erreur de calcul.", "It may be a calculation error."],
      ["Il se pourrait que les résultats soient faux.", "The results might be wrong."],
      ["Le rapport est censé paraître lundi.", "The report is supposed to come out on Monday."],
      ["L'hypothèse s'est avérée fausse.", "The hypothesis turned out to be wrong."],
      ["Les résultats semblent confirmer l'hypothèse.", "The results seem to confirm the hypothesis."],
      ["Il viendra sans doute demain.", "He'll probably come tomorrow."]
    ],
    quiz: [
      { q: "Il a dû se tromper means:", o: ["He must have made a mistake.", "He had to make a mistake.", "He should make a mistake."], a: 0, ex: "devoir here expresses probability." },
      { q: "“The meeting is supposed to start at nine” is:", o: ["La réunion est censée commencer à neuf heures.", "La réunion est censée de commencer à neuf heures.", "La réunion est supposée de commencer à neuf heures."], a: 0, ex: "être censé + infinitive, without de." },
      { q: "“The method turned out to be effective” is:", o: ["La méthode s'est avérée efficace.", "La méthode a avéré efficace.", "La méthode s'est avérée d'être efficace."], a: 0, ex: "s'avérer + adjective." },
      { q: "Sans doute means:", o: ["probably", "certainly", "without any doubt"], a: 0, ex: "For certainty: sans aucun doute." },
      { q: "“They may have got lost” is:", o: ["Ils ont pu se perdre.", "Ils peuvent avoir perdu.", "Ils ont dû perdre."], a: 0, ex: "pouvoir in the passé composé + infinitive: a possibility in the past." }
    ]
  },
  {
    id: 109, level: "C1", icon: "workflow",
    title: "Ayant terminé, une fois les résultats publiés: participle clauses", title_fr: "Ayant terminé, une fois les résultats publiés : les propositions participiales",
    subtitle: "Shorter, denser sentences for formal writing, and the trap of the dangling participle.", subtitle_fr: "Des phrases plus courtes et plus denses pour l'écrit soutenu, et le piège du participe mal rattaché.",
    body: `
<h2>Having done: ayant / étant + past participle</h2>
<p><s-fr>Ayant terminé l'expérience, l'équipe a publié ses résultats.</s-fr> (having finished) · With verbs that take être: <s-fr>Étant arrivée en retard, elle a manqué le début.</s-fr> (the participle agrees)</p>
<h2>The past participle on its own</h2>
<p><s-fr>Publiée en 2015, l'étude a fait grand bruit.</s-fr> · <s-fr>Intrigué, il a refait le calcul.</s-fr> · <s-fr>une fois</s-fr> + noun + participle: <s-fr>Une fois l'expérience terminée, les chercheurs ont rédigé l'article.</s-fr></p>
<h2>The absolute participle clause</h2>
<p>The participle clause has its own subject, different from the main clause: <s-fr>Les résultats publiés, l'équipe s'est remise au travail.</s-fr> · <s-fr>L'accord signé, les chercheurs ont pu commencer.</s-fr> It expresses time or cause.</p>
<h2>The trap: the dangling participle</h2>
<p>Without its own subject, the participle refers to the subject of the main clause. <s-fr>Étant malade, le médecin m'a prescrit du repos</s-fr> says that the doctor is ill. Write: <s-fr>Comme j'étais malade, le médecin m'a prescrit du repos.</s-fr></p>
<div class="tip">These structures belong to formal writing: reports, articles, essays. In speech, prefer <s-fr>quand</s-fr>, <s-fr>comme</s-fr> or <s-fr>après avoir</s-fr>: <s-fr>Après avoir terminé, ils ont publié.</s-fr></div>
`,
    examples: [
      ["Ayant terminé l'expérience, l'équipe a publié ses résultats.", "Having finished the experiment, the team published its results."],
      ["Étant arrivée en retard, elle a manqué le début de la conférence.", "Having arrived late, she missed the start of the lecture."],
      ["Publiée en 2015, l'étude a fait grand bruit.", "Published in 2015, the study caused a stir."],
      ["Une fois l'expérience terminée, les chercheurs ont rédigé l'article.", "Once the experiment was over, the researchers wrote the article."],
      ["Les résultats publiés, l'équipe s'est remise au travail.", "With the results published, the team got back to work."],
      ["L'accord signé, les chercheurs ont pu commencer.", "The agreement signed, the researchers were able to start."],
      ["Comme j'étais malade, le médecin m'a prescrit du repos.", "As I was ill, the doctor prescribed rest."]
    ],
    quiz: [
      { q: "“Having read the report, the minister reacted” is:", o: ["Ayant lu le rapport, le ministre a réagi.", "Étant lu le rapport, le ministre a réagi.", "Ayant lisant le rapport, le ministre a réagi."], a: 0, ex: "ayant + past participle." },
      { q: "“Having left early, they missed the vote” is:", o: ["Étant partis tôt, ils ont manqué le vote.", "Ayant partis tôt, ils ont manqué le vote.", "Étant parti tôt, ils ont manqué le vote."], a: 0, ex: "partir takes être: étant partis, with agreement." },
      { q: "“Once the data was checked” is:", o: ["Une fois les données vérifiées", "Une fois les données vérifié", "Un fois les données vérifiées"], a: 0, ex: "une fois + noun + participle, which agrees with the noun." },
      { q: "Which sentence is correct?", o: ["En rentrant chez moi, j'ai vu l'accident.", "En rentrant chez moi, l'accident s'est produit.", "Étant pressé, la voiture a démarré."], a: 0, ex: "The participle or gerund refers to the subject of the main clause." },
      { q: "In Les résultats publiés, l'équipe s'est remise au travail, the participle clause expresses:", o: ["time", "purpose", "opposition"], a: 0, ex: "Once the results were published." }
    ]
  },
  {
    id: 110, level: "C1", kind: "functional", icon: "trending-up",
    title: "Everyday French: presenting figures and data", title_fr: "Le français de tous les jours : présenter des chiffres et des données",
    subtitle: "Proportions, changes and comparisons, and the caution that good figures require.", subtitle_fr: "Proportions, évolutions et comparaisons, et la prudence qu'exigent les bons chiffres.",
    body: `
<h2>Proportions</h2>
<p><s-fr>la moitié</s-fr>, <s-fr>un tiers</s-fr>, <s-fr>un quart</s-fr> · <s-fr>un élève sur cinq</s-fr> · <s-fr>trois personnes sur dix</s-fr> · <s-fr>près de</s-fr>, <s-fr>environ</s-fr>, <s-fr>plus de</s-fr>, <s-fr>moins de</s-fr> · <s-fr>la plupart des participants ont répondu</s-fr> (plural verb)</p>
<h2>Change</h2>
<p><s-fr>augmenter de 10 %</s-fr>, <s-fr>baisser de 5 %</s-fr> (by: de) · <s-fr>passer de 20 à 30 %</s-fr> · <s-fr>doubler</s-fr>, <s-fr>tripler</s-fr>, <s-fr>être divisé par deux</s-fr> · <s-fr>atteindre un pic</s-fr> · <s-fr>se stabiliser</s-fr> · <s-fr>une hausse de</s-fr>, <s-fr>une baisse de</s-fr></p>
<h2>Comparing</h2>
<p><s-fr>30 % contre 25 % l'an dernier</s-fr> · <s-fr>par rapport à</s-fr> · <s-fr>deux fois plus que</s-fr> · <s-fr>soit</s-fr> (that is): <s-fr>300 personnes, soit la moitié des membres</s-fr></p>
<h2>Being careful</h2>
<p><s-fr>L'échantillon est représentatif.</s-fr> · <s-fr>La marge d'erreur est de trois points.</s-fr> · <s-fr>Il y a une corrélation, mais rien ne prouve un lien de cause à effet.</s-fr></p>
<div class="tip">Percent or points? If a rate goes from 20 % to 25 %, it rises by five percentage points (<s-fr>cinq points</s-fr>), which is a 25 % increase. Journalists confuse the two all the time: an easy way to sound precise.</div>
`,
    examples: [
      ["Près de la moitié des membres ont répondu à l'enquête.", "Nearly half the members answered the survey."],
      ["Un élève sur cinq vient au lycée à vélo.", "One pupil in five cycles to school."],
      ["Les ventes ont augmenté de 10 % en un an.", "Sales rose by 10% in a year."],
      ["Le taux est passé de 20 à 25 %, soit une hausse de cinq points.", "The rate went from 20 to 25%, a rise of five points."],
      ["Le nombre d'inscrits a doublé en deux ans.", "The number of members has doubled in two years."],
      ["Le chômage a atteint un pic avant de se stabiliser.", "Unemployment peaked before levelling off."],
      ["Il y a une corrélation, mais rien ne prouve un lien de cause à effet.", "There's a correlation, but nothing proves a cause-and-effect link."]
    ],
    quiz: [
      { q: "“Prices fell by 5%” is:", o: ["Les prix ont baissé de 5 %.", "Les prix ont baissé par 5 %.", "Les prix ont baissé à 5 %."], a: 0, ex: "by = de." },
      { q: "“Most participants agreed” is:", o: ["La plupart des participants étaient d'accord.", "La plupart des participants était d'accord.", "La plupart de participants étaient d'accord."], a: 0, ex: "la plupart des + plural verb." },
      { q: "A rate goes from 10% to 12%. It has risen by:", o: ["two points, or 20%", "two percent", "twelve points"], a: 0, ex: "Two percentage points, a 20% increase." },
      { q: "“One person in four” is:", o: ["une personne sur quatre", "une personne de quatre", "une personne pour quatre"], a: 0, ex: "sur." },
      { q: "A correlation between two figures:", o: ["does not prove a cause", "proves a cause", "is a margin of error"], a: 0, ex: "Correlation is not causation." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    108: {
      gap: [["Il n'est pas là : il a ___ manquer son train. (must have, devoir)", "dû"], ["Le rapport est ___ paraître lundi. (supposed)", "censé"], ["L'hypothèse s'est ___ fausse. (turned out, f)", "avérée"], ["Il ___ s'agir d'une erreur de calcul. (may, pouvoir)", "peut"]],
      fix: [["Il a dû de partir plus tôt.", "Il a dû partir plus tôt.", "devoir + infinitive, without de."], ["Les résultats sont censés d'être publiés demain.", "Les résultats sont censés être publiés demain.", "être censé + infinitive, without de."]],
      task: ["A colleague hasn't come to an important meeting. Make hypotheses with devoir, pouvoir, être censé and sembler.", "Un collègue n'est pas venu à une réunion importante. Fais des hypothèses avec devoir, pouvoir, être censé et sembler.", "C'est étrange : Lucas était censé présenter les résultats ce matin. Il a dû oublier la réunion, à moins qu'il n'y ait eu un problème de train. Il peut aussi être malade. Il semble avoir oublié son téléphone, puisqu'il ne répond pas. En tout cas, il devrait arriver d'une minute à l'autre."]
    },
    109: {
      gap: [["___ terminé l'expérience, l'équipe a publié ses résultats. (having)", "Ayant"], ["Une ___ les données vérifiées, l'article a été envoyé. (once)", "fois"], ["___ en 2015, l'étude a fait grand bruit. (publier, f)", "Publiée"], ["Les résultats ___, l'équipe s'est remise au travail. (publier, m pl)", "publiés"]],
      fix: [["Étant malade, le médecin m'a prescrit du repos.", "Comme j'étais malade, le médecin m'a prescrit du repos.|Étant malade, j'ai consulté le médecin.", "The participle refers to the subject of the main clause: here, the doctor isn't ill."], ["Ayant arrivée en retard, elle a manqué le début.", "Étant arrivée en retard, elle a manqué le début.", "arriver takes être: étant arrivée."]],
      task: ["Tell the story of a scientific discovery in four sentences, with ayant + past participle, a past participle at the start, une fois and an absolute participle clause.", "Raconte une découverte scientifique en quatre phrases, avec ayant + participe passé, un participe passé en tête de phrase, une fois et une proposition participiale absolue.", "Ayant remarqué une moisissure dans l'une de ses boîtes de culture, Alexander Fleming observa qu'aucune bactérie ne se développait autour. Intrigué, il décida d'étudier ce champignon. Une fois le phénomène confirmé, il donna à la substance le nom de pénicilline. Sa découverte publiée en 1929, il fallut pourtant attendre la Seconde Guerre mondiale pour qu'elle soit produite en masse."]
    },
    110: {
      gap: [["Les ventes ont augmenté ___ 10 %. (by)", "de"], ["Le taux est ___ de 20 % à 30 %. (went)", "passé"], ["Un élève ___ cinq vient à vélo. (in)", "sur"], ["Le nombre d'inscrits a ___ en deux ans. (doubled)", "doublé"]],
      fix: [["Les prix ont baissé par 5 %.", "Les prix ont baissé de 5 %.", "by a quantity = de."], ["La plupart des participants a répondu.", "La plupart des participants ont répondu.", "la plupart des + plural verb."]],
      task: ["Describe this invented result in three sentences: a club's membership went from 200 to 300 in two years, and 60% of members are under thirty.", "Décris ce résultat inventé en trois phrases : le nombre d'adhérents d'un club est passé de 200 à 300 en deux ans, et 60 % ont moins de trente ans.", "En deux ans, le nombre d'adhérents est passé de 200 à 300, soit une hausse de 50 %. Plus de la moitié d'entre eux, 60 % exactement, ont moins de trente ans. Le club a donc non seulement grandi, mais aussi rajeuni."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "enquetevelo", lesson: 110, level: "C1", icon: "trending-up", partner: "Gaëlle", role: "the president of a cycling association",
    title: "Presenting survey results", title_fr: "Présenter les résultats d'une enquête",
    setting: "You volunteer for a town's cycling association. You've run a survey of the members, and you present the results to Gaëlle, the president. The figures are invented for the exercise.", setting_fr: "Tu es bénévole dans l'association cycliste de ta ville. Tu as mené une enquête auprès des membres et tu présentes les résultats à Gaëlle, la présidente. Les chiffres sont inventés pour l'exercice.",
    turns: [
      { p: "Alors, ces résultats ? Combien de membres ont répondu ?", fr: "So, these results? How many members answered?" },
      { y: ["Quatre cents, soit près de la moitié des membres. C'est un échantillon solide.", "Quatre cents, soit près de la moitié de membres. C'est un échantillon solide.", "Quatre cents, soit près de moitié des membres. C'est un échantillon solide."], fr: "Four hundred, nearly half the members. It's a solid sample.", why: "la moitié des membres." },
      { p: "Et qu'est-ce qui en ressort ?", fr: "And what comes out of it?" },
      { y: ["La plupart des répondants roulent tous les jours, et un sur cinq a commencé cette année.", "La plupart des répondants roulent tous les jours, et un pour cinq a commencé cette année.", "La plupart des répondants roule tous les jours, et un sur cinq a commencé cette année."], fr: "Most respondents ride every day, and one in five started this year.", why: "la plupart des + plural verb; un sur cinq." },
      { p: "Et les accidents, ça augmente ?", fr: "And accidents, are they going up?" },
      { y: ["Les accidents déclarés ont baissé de 10 % par rapport à l'an dernier, mais c'est trop peu pour conclure.", "Les accidents déclarés ont baissé par 10 % par rapport à l'an dernier, mais c'est trop peu pour conclure.", "Les accidents déclarés ont baissé à 10 % par rapport à l'an dernier, mais c'est trop peu pour conclure."], fr: "Reported accidents fell by 10% compared with last year, but that's too little to draw conclusions.", why: "baisser de + quantity (by)." },
      { p: "Donc les nouvelles pistes cyclables ont réduit les accidents ?", fr: "So the new cycle lanes have reduced accidents?" },
      { y: ["Pas forcément : il y a une corrélation, mais rien ne prouve qu'il y ait un lien de cause à effet.", "Pas forcément : il y a une corrélation, mais rien ne prouve qu'il y a un lien de cause à effet.", "Pas forcément : il y a une corrélation, mais rien prouve qu'il y ait un lien de cause à effet."], fr: "Not necessarily: there's a correlation, but nothing proves there's a cause-and-effect link.", why: "rien ne prouve que + subjunctive." },
      { p: "Bien vu. Qu'est-ce que tu proposes ?", fr: "Good point. What do you suggest?" },
      { y: ["Que nous refassions l'enquête l'an prochain, avec le même protocole, pour dégager une vraie tendance.", "Que nous refaisons l'enquête l'an prochain, avec le même protocole, pour dégager une vraie tendance.", "Que nous refassions l'enquête l'an prochain, avec le même protocole, pour dégager un vrai tendance."], fr: "That we run the survey again next year, with the same protocol, to bring out a real trend.", why: "proposer que + subjunctive (refassions); une tendance." }
    ] }
  );

  W.READINGS.push({
    id: "precaution", level: "C1", icon: "scale", title: "Le principe de précaution, frein ou garde-fou ?", genre: "Article",
    intro: "Written into the French Constitution in 2005, the precautionary principle still divides opinion. Modality, participle clauses and inversion.",
    intro_fr: "Inscrit dans la Constitution en 2005, le principe de précaution divise toujours. La modalisation, les propositions participiales et l'inversion.",
    paragraphs: [
      { en: "Inscrit dans la Constitution française en 2005, à travers la Charte de l'environnement, le principe de précaution est censé protéger la société contre des dangers encore mal connus. Il ne fait pourtant pas l'unanimité : pour les uns, c'est un garde-fou indispensable ; pour les autres, un frein à l'innovation.", fr: "Written into the French Constitution in 2005, through the Environment Charter, the precautionary principle is supposed to protect society against dangers that are still poorly understood. Yet it doesn't have unanimous support: for some, it's an essential safeguard; for others, a brake on innovation." },
      { en: "Son principe est simple. Lorsqu'un dommage grave et irréversible pour l'environnement pourrait se produire, les autorités n'ont pas à attendre une certitude scientifique pour agir : elles doivent évaluer les risques et adopter des mesures provisoires et proportionnées.", fr: "The idea is simple. When serious and irreversible damage to the environment could occur, the authorities don't have to wait for scientific certainty before acting: they must assess the risks and adopt temporary, proportionate measures." },
      { en: "Ses partisans rappellent que plusieurs catastrophes sanitaires auraient pu être limitées si l'on avait agi plus tôt. L'amiante en est l'exemple le plus cité : ses dangers, soupçonnés dès le début du XXe siècle, n'ont conduit à son interdiction en France qu'en 1997.", fr: "Its supporters point out that several health disasters could have been limited if action had been taken sooner. Asbestos is the most quoted example: its dangers, suspected from the early twentieth century, only led to its ban in France in 1997." },
      { en: "Ses détracteurs, eux, estiment qu'il a dû décourager plus d'un projet prometteur. Brandi à tort et à travers, il pourrait conduire à interdire toute nouveauté, faute de pouvoir prouver qu'elle est sans danger. Or, une telle preuve s'avère souvent impossible à apporter.", fr: "Its critics, for their part, believe it must have discouraged more than one promising project. Invoked indiscriminately, it could lead to banning anything new, for lack of proof that it is safe. And such proof often turns out to be impossible to provide." },
      { en: "Au fond, le débat porte moins sur le principe lui-même que sur son application. Bien appliqué, il oblige à mener des recherches plutôt qu'à les interdire. Mal compris, il peut au contraire nourrir la peur. C'est sans doute là que se situe le véritable enjeu.", fr: "Basically, the debate is less about the principle itself than about how it's applied. Applied well, it requires research rather than banning it. Misunderstood, it can on the contrary feed fear. That's probably where the real issue lies." }
    ],
    glossary: { "inscrit": "written into, enshrined", "unanimité": "unanimity", "frein": "brake", "dommage": "damage, harm", "provisoires": "temporary", "proportionnées": "proportionate", "partisans": "supporters", "sanitaires": "health (adj.)", "amiante": "asbestos", "soupçonnés": "suspected", "détracteurs": "critics", "prometteur": "promising", "brandi": "brandished, invoked", "nourrir": "to feed", "enjeu": "what is at stake, the issue" },
    questions: [
      { q: "Depuis quand le principe de précaution figure-t-il dans la Constitution française ?", o: ["Depuis 2005", "Depuis 1997", "Depuis 1958"], a: 0 },
      { q: "Que doivent faire les autorités quand un dommage grave est possible ?", o: ["Évaluer les risques et adopter des mesures provisoires et proportionnées", "Attendre une certitude scientifique", "Interdire toute recherche"], a: 0 },
      { q: "Pourquoi l'auteur cite-t-il l'amiante ?", o: ["Ses dangers étaient soupçonnés bien avant son interdiction.", "C'est une invention récente.", "Il a été interdit trop tôt."], a: 0 },
      { q: "Que reprochent les détracteurs au principe de précaution ?", o: ["Il peut freiner l'innovation.", "Il n'est pas assez strict.", "Il coûte trop cher."], a: 0 },
      { q: "Selon l'auteur, sur quoi porte surtout le débat ?", o: ["Sur l'application du principe", "Sur son existence même", "Sur l'histoire de l'amiante"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-c1-2", unit: "c1-2", level: "C1", icon: "microscope",
    title: "Sciences en question : la crise de la reproductibilité", title_fr: "Sciences en question : la crise de la reproductibilité",
    context: "On a science podcast, Julien talks to Claire, a researcher, about studies that can't be reproduced.", context_fr: "Dans un podcast scientifique, Julien interroge Claire, chercheuse, sur les études impossibles à reproduire.",
    words: [["la reproductibilité", "reproducibility"], ["secouer", "to shake"], ["tricher", "to cheat"], ["sous un jour favorable", "in a favourable light"], ["salutaire", "beneficial"]],
    lines: [["Julien", "Bienvenue dans Sciences en question. Aujourd'hui, une crise qui secoue les laboratoires : celle de la reproductibilité. Claire, de quoi s'agit-il ?", "fr-FR"], ["Claire", "Une étude scientifique est censée pouvoir être refaite par d'autres équipes, avec les mêmes résultats. Or, dans plusieurs disciplines, ce n'est pas toujours le cas.", "fr-FR"], ["Julien", "Vous avez un exemple ?", "fr-FR"], ["Claire", "En 2015, une vaste équipe internationale a tenté de reproduire cent études de psychologie publiées dans des revues reconnues. Un peu plus d'un tiers seulement ont donné des résultats comparables.", "fr-FR"], ["Julien", "C'est inquiétant ! Les chercheurs auraient-ils triché ?", "fr-FR"], ["Claire", "Dans la grande majorité des cas, non. Les échantillons étaient souvent trop petits, et les revues préfèrent publier des résultats spectaculaires. Soumis à une forte pression pour publier, certains chercheurs ont pu, sans le vouloir, présenter leurs résultats sous un jour trop favorable.", "fr-FR"], ["Julien", "Et depuis, les choses ont changé ?", "fr-FR"], ["Claire", "Oui. De plus en plus d'équipes déposent leur protocole avant de commencer l'étude, et partagent leurs données. Finalement, la crise s'est avérée salutaire : elle a rappelé que le doute est au cœur de la science.", "fr-FR"]],
    gist: ["De quoi parle l'émission ?", ["De la crise de la reproductibilité en science", "D'une découverte médicale", "Du financement de la recherche"]],
    detail: [["Qu'est-ce qu'une étude est censée permettre ?", ["Être refaite par d'autres avec les mêmes résultats", "Être publiée rapidement", "Rapporter de l'argent"]], ["En 2015, quelle part des cent études a donné des résultats comparables ?", ["Un peu plus d'un tiers", "Presque toutes", "Aucune"]], ["Selon Claire, les chercheurs ont-ils triché ?", ["Non, dans la grande majorité des cas", "Oui, presque tous", "Elle ne le sait pas"]], ["Qu'est-ce qui a changé depuis ?", ["Les équipes déposent leur protocole et partagent leurs données.", "Les revues ont fermé.", "On ne publie plus en psychologie."]]],
    decode: ["Une étude scientifique est censée pouvoir être refaite", "la crise s'est avérée salutaire"],
    tip: "Scientists choose their words carefully: censé, auraient-ils, ont pu, s'est avérée. Each modal tells you how sure the speaker is. Note them, and you'll hear the difference between a fact and a hypothesis.", tip_fr: "Les scientifiques pèsent leurs mots : censé, auraient-ils, ont pu, s'est avérée. Chaque modalisateur te dit à quel point la personne est sûre. Repère-les, et tu entendras la différence entre un fait et une hypothèse."
  }]);

  W.LEXIS = W.LEXIS || {};
  W.LEXIS["c1-2"] = {
    colloc: [
      ["mener une étude", "to conduct a study", "L'équipe mène une étude sur le sommeil.", "mène", ["porte", "tient"]],
      ["obtenir des résultats", "to obtain results", "Ils ont obtenu des résultats encourageants.", "obtenu", ["gagné", "attrapé"]],
      ["franchir une ligne rouge", "to cross a red line", "Avec cette expérience, ils ont franchi une ligne rouge.", "franchi", ["sauté", "traversé"]],
      ["donner son consentement", "to give one's consent", "Chaque patient doit donner son consentement.", "donner", ["faire", "mettre"]],
      ["remettre en question", "to call into question", "Cette découverte remet en question la théorie.", "remet", ["pose", "jette"]],
      ["faire avancer la science", "to advance science", "Ces travaux ont fait avancer la science.", "avancer", ["marcher", "pousser"]],
      ["se plier aux règles", "to comply with the rules", "Les laboratoires doivent se plier aux règles.", "plier", ["courber", "tordre"]],
      ["lever un tabou", "to break a taboo", "Ce livre a levé un tabou.", "levé", ["enlevé", "ôté"]],
      ["combler une lacune", "to fill a gap", "Cette étude comble une lacune.", "comble", ["remplit", "bouche"]],
      ["tirer la sonnette d'alarme", "to sound the alarm", "Des chercheurs tirent la sonnette d'alarme.", "tirent", ["sonnent", "frappent"]]
    ],
    wf: [
      ["Ce résultat est ___ : on obtient le même à chaque fois. (PRODUIRE)", "reproductible"],
      ["La ___ de cette étude a été contestée. (FIABLE)", "fiabilité"],
      ["La ___ génétique inquiète une partie du public. (MANIPULER)", "manipulation"],
      ["Les résultats ont été ___ par une autre équipe. (VALIDE)", "validés"],
      ["Le ___ des patients est obligatoire. (CONSENTIR)", "consentement"],
      ["Il faut ___ la recherche sur l'embryon. (CADRE)", "encadrer"],
      ["Ces effets sont ___ à prévoir. (POSSIBLE)", "impossibles"],
      ["Le chercheur a été accusé de ___ scientifique. (FRAUDER)", "fraude"]
    ],
    kwt: [
      ["Il a très probablement oublié le rendez-vous.", "DÛ", "Il ___ le rendez-vous.", "a dû oublier"],
      ["Normalement, le rapport doit être publié lundi.", "CENSÉ", "Le rapport ___ publié lundi.", "est censé être"],
      ["Après avoir terminé l'expérience, l'équipe a publié ses résultats.", "AYANT", "___ l'expérience, l'équipe a publié ses résultats.", "Ayant terminé"],
      ["Quand les résultats ont été vérifiés, l'article a été publié.", "FOIS", "___ vérifiés, l'article a été publié.", "Une fois les résultats"],
      ["Le nombre de participants a été multiplié par deux.", "DOUBLÉ", "Le nombre de participants ___.", "a doublé"],
      ["Finalement, on a constaté que l'hypothèse était fausse.", "AVÉRÉE", "Finalement, l'hypothèse ___ fausse.", "s'est avérée"]
    ],
    idioms: [
      ["mettre le doigt sur", "trouver exactement (un problème, une cause)", "to put one's finger on", "Elle a mis le doigt sur l'erreur.", "a mis le doigt sur"],
      ["chercher une aiguille dans une botte de foin", "chercher quelque chose de presque introuvable", "to look for a needle in a haystack", "Trouver ce gène, c'était chercher une aiguille dans une botte de foin.", "chercher une aiguille dans une botte de foin"],
      ["avoir la science infuse", "croire tout savoir sans avoir appris", "to think one knows it all", "Il croit avoir la science infuse.", "avoir la science infuse"],
      ["ne pas faire long feu", "ne pas durer longtemps", "not to last long", "Cette théorie n'a pas fait long feu.", "n'a pas fait long feu"],
      ["tirer des plans sur la comète", "faire des projets irréalistes", "to count one's chickens before they hatch", "Avant d'avoir les résultats, inutile de tirer des plans sur la comète.", "tirer des plans sur la comète"],
      ["une lapalissade", "une évidence présentée comme une découverte", "a truism", "Dire que la pluie mouille, c'est une lapalissade.", "une lapalissade"],
      ["l'arbre qui cache la forêt", "un détail qui masque un problème plus large", "the tip of the iceberg", "Ce scandale n'est que l'arbre qui cache la forêt.", "l'arbre qui cache la forêt"],
      ["jouer avec le feu", "prendre des risques dangereux", "to play with fire", "Modifier ces gènes sans contrôle, c'est jouer avec le feu.", "jouer avec le feu"]
    ]
  };

  W.PROMPTS.push({ id: "fr-c1-2", level: "C1", q: "Faut-il fixer des limites à la recherche scientifique ? Appuie-toi sur un exemple précis.", fr: "Should limits be set on scientific research? Support your view with a specific example.", time: 180,
    phrases: ["À mon sens…", "Prenons l'exemple de…", "être censé…", "s'avérer…", "Il ne s'agit pas de…, mais de…"],
    model: "À mon sens, la recherche doit rester libre, mais pas sans règles. Prenons l'exemple de la génétique : les outils actuels permettent de modifier l'ADN avec une précision inédite. Ils pourraient guérir des maladies graves, mais leur usage est censé respecter des limites, notamment quand il s'agit d'embryons humains. Une modification transmise aux générations futures s'avérerait irréversible. C'est pourquoi il me semble indispensable que des comités d'éthique encadrent ces travaux. Il ne s'agit pas d'interdire la science, mais de lui donner un cadre." });

  W.WRITING_GUIDE["c1-2"] = { genre: "An argued essay: a magazine article (DALF C1)", genre_fr: "Un essai argumenté : un article de magazine (DALF C1)",
    plan: [["Give a title and open with a question.", "Donne un titre et ouvre sur une question."], ["First argument, with an example.", "Premier argument, avec un exemple."], ["Concede, then put the counter-argument.", "Concède, puis avance le contre-argument."], ["Make a concrete proposal.", "Fais une proposition concrète."], ["Conclude with a nuanced position.", "Conclus sur une position nuancée."]],
    marks: [["nul ne songerait à revenir en arrière", "formal negation", "négation soutenue"], ["Il convient d'abord de reconnaître", "first argument", "premier argument"], ["Il n'en demeure pas moins que", "concession, then counter-argument", "concession, puis contre-argument"], ["Quand bien même la technique serait parfaitement maîtrisée", "quand bien même + conditional", "quand bien même + conditionnel"], ["il semble indispensable de distinguer", "a proposal", "une proposition"], ["En définitive", "conclusion", "conclusion"]] };

  W.COURSE.push({ id: "c1-2", level: "C1", icon: "flask-conical", title: "Science and ethics", title_fr: "Sciences et éthique",
    intro: "In this unit, you'll discuss science and its limits: expressing probability without saying je pense (devoir, pouvoir, être censé, s'avérer), participle clauses for formal writing, and presenting figures precisely and carefully.",
    intro_fr: "Dans cette unité, tu vas débattre de la science et de ses limites : exprimer la probabilité sans dire je pense (devoir, pouvoir, être censé, s'avérer), les propositions participiales de l'écrit soutenu, et la présentation de chiffres avec précision et prudence.",
    can: ["Express degrees of probability with modal verbs and adverbs", "Write dense, formal sentences with participle clauses", "Present figures, changes and comparisons accurately", "Tell correlation from causation", "Write an argued essay on an ethical question"],
    can_fr: ["Exprimer des degrés de probabilité avec les verbes modaux et les adverbes", "Écrire des phrases denses et soutenues avec des propositions participiales", "Présenter des chiffres, des évolutions et des comparaisons avec exactitude", "Distinguer corrélation et causalité", "Rédiger un essai argumenté sur une question éthique"],
    lessons: [108, 109, 110], vocab: ["ethiqueFR", "methodeFR"], reading: "precaution", prompt: "fr-c1-2",
    writing: { task: "A popular science magazine opens a debate: should everything be allowed in the name of progress? Write an argued article (250-300 words) with a title.", task_fr: "Un magazine de vulgarisation scientifique ouvre un débat : faut-il tout autoriser au nom du progrès ? Rédige un article argumenté (250 à 300 mots) avec un titre.", words: "250-300",
      tips: ["Il convient d'abord de reconnaître que…", "Il n'en demeure pas moins que…", "Quand bien même…", "Il semble indispensable de…", "En définitive, …"],
      checklist: ["My article has a title and opens with a question", "Each argument has an example", "I conceded a point before answering it", "I used modal verbs to express probability", "My conclusion is nuanced", "I wrote between 250 and 300 words"],
      model: "Le progrès a-t-il tous les droits ?\n\nDe la vaccination à l'imagerie médicale, la science a transformé nos vies, et nul ne songerait à revenir en arrière. Pourtant, certaines avancées suscitent un malaise : faut-il tout autoriser au nom du progrès ?\n\nIl convient d'abord de reconnaître que la liberté de la recherche est une condition de son efficacité. Bien des découvertes majeures sont nées par hasard, au détour d'une expérience qui ne visait pas ce but : la pénicilline en est l'exemple le plus célèbre. Interdire par principe ce dont on ignore encore les applications reviendrait donc à se priver de progrès futurs.\n\nIl n'en demeure pas moins que certaines recherches touchent à ce que nous avons de plus intime. Modifier le génome d'un embryon, par exemple, engagerait les générations futures sans qu'elles aient pu donner leur consentement. Quand bien même la technique serait parfaitement maîtrisée, une telle décision ne saurait relever des seuls chercheurs. Elle concerne la société tout entière, qui doit pouvoir en débattre en connaissance de cause.\n\nC'est pourquoi il semble indispensable de distinguer la recherche de ses applications. La première doit rester libre ; les secondes doivent être encadrées par la loi, après un débat public éclairé. Les comités d'éthique, qui réunissent des scientifiques, des juristes ou des philosophes, ont précisément ce rôle.\n\nEn définitive, le progrès n'a pas tous les droits, mais il ne doit pas non plus être soupçonné par principe. Entre la fascination et la peur, il nous revient de trouver une voie exigeante : celle d'une science libre, mais responsable." } });
})();
