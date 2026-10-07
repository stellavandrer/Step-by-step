/* Cours de français, unité C2-7 « The planet and the future / Planète et avenir » : les valeurs du conditionnel et du
   futur (atténuation, conjecture, indignation, imaginaire, futur antérieur de probabilité), les pronoms au plus haut
   niveau (le neutre, en et y pour une proposition, soi, autrui, l'un l'autre), négocier et parvenir à un consensus.
   Personnages fictifs, prénoms français. Faits vérifiables seulement : Hans Jonas, Le Principe responsabilité (1979) ;
   accord de Paris (2015), nettement en dessous de 2 °C et efforts pour 1,5 °C ; Copernicus : 2024, année la plus chaude
   jamais mesurée ; étude internationale publiée en 2021 auprès de 10 000 jeunes de 10 pays sur l'inquiétude
   climatique ; La Fontaine, « On a souvent besoin d'un plus petit que soi » ; « après moi, le déluge ». */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "climatFR", icon: "wind", title: "Climate", title_fr: "Le climat", level: "C2", words: [
    ["le dérèglement climatique", "climate disruption", "Le dérèglement climatique multiplie les événements extrêmes."],
    ["la neutralité carbone", "carbon neutrality, net zero", "La France vise la neutralité carbone en 2050."],
    ["la transition énergétique", "the energy transition", "La transition énergétique suppose d'énormes investissements."],
    ["les énergies renouvelables", "renewable energy", "Les énergies renouvelables progressent rapidement."],
    ["la sobriété", "restraint, sufficiency", "La sobriété énergétique est devenue un mot d'ordre."],
    ["l'effondrement", "collapse", "Certains auteurs annoncent un effondrement de la civilisation industrielle."],
    ["l'adaptation", "adaptation", "L'adaptation au changement climatique est devenue urgente."],
    ["l'atténuation", "mitigation", "L'atténuation vise à réduire les émissions."],
    ["le GIEC", "the IPCC", "Le GIEC publie régulièrement des rapports de synthèse."],
    ["les gaz à effet de serre", "greenhouse gases", "Les gaz à effet de serre piègent la chaleur."],
    ["le puits de carbone", "the carbon sink", "Les forêts jouent le rôle de puits de carbone."],
    ["l'éco-anxiété", "eco-anxiety", "L'éco-anxiété touche surtout les jeunes."],
    ["la décarbonation", "decarbonisation", "La décarbonation de l'industrie prendra des décennies."],
    ["la géo-ingénierie", "geoengineering", "La géo-ingénierie suscite de vives inquiétudes."],
    ["le point de bascule", "the tipping point", "Les scientifiques redoutent certains points de bascule."],
    ["l'éolienne", "the wind turbine", "Une éolienne a été installée sur la colline."],
    ["le parc éolien", "the wind farm", "Le projet de parc éolien divise le village."],
    ["l'accord de Paris", "the Paris Agreement", "L'accord de Paris a été adopté en 2015."]
  ] },
  { id: "avenirFR", icon: "telescope", title: "The future and negotiation", title_fr: "L'avenir et la négociation", level: "C2", words: [
    ["la prospective", "futures studies, forecasting", "La prospective imagine plusieurs scénarios."],
    ["l'anticipation", "anticipation; (literature) science fiction", "Ce roman d'anticipation se déroule en 2100."],
    ["le scénario", "the scenario", "Le scénario le plus pessimiste n'est pas le plus probable."],
    ["l'horizon", "the horizon", "À l'horizon 2050, tout aura changé."],
    ["les générations futures", "future generations", "Nous avons des devoirs envers les générations futures."],
    ["la durabilité", "sustainability", "La durabilité des produits est un enjeu majeur."],
    ["l'utopie", "utopia", "Ce projet n'a rien d'une utopie."],
    ["la dystopie", "dystopia", "Ce film décrit une dystopie glaçante."],
    ["le progrès technique", "technological progress", "Le progrès technique ne suffira pas à tout régler."],
    ["le techno-solutionnisme", "techno-solutionism", "Le techno-solutionnisme mise tout sur l'innovation."],
    ["l'incertitude", "uncertainty", "L'incertitude rend les décisions difficiles."],
    ["le pari", "the bet, the gamble", "C'est un pari sur l'avenir."],
    ["autrui", "others, other people (formal)", "Le respect d'autrui est une valeur fondamentale."],
    ["soi", "oneself", "Chacun pense d'abord à soi."],
    ["le consensus", "the consensus", "Un consensus a fini par se dégager."],
    ["la médiation", "mediation", "La médiation a permis d'éviter un procès."],
    ["le terrain d'entente", "common ground", "Les deux camps ont trouvé un terrain d'entente."],
    ["la concession", "the concession (in a negotiation)", "Chacun a dû faire des concessions."]
  ] });

  W.LESSONS.push(
  {
    id: 153, level: "C2", icon: "hourglass",
    title: "Il aura oublié, je vous demanderai: the values of the conditional and the future", title_fr: "Il aura oublié, je vous demanderai : les valeurs du conditionnel et du futur",
    subtitle: "When the conditional isn't a hypothesis and the future isn't about the future.", subtitle_fr: "Quand le conditionnel n'est pas une hypothèse et que le futur ne parle pas de l'avenir.",
    body: `
<h2>The conditional, beyond hypothesis</h2>
<p>Politeness and softening: <s-fr>Vous auriez un instant ?</s-fr> · <s-fr>Il faudrait peut-être revoir ce point.</s-fr> · Unconfirmed information: <s-fr>Le projet serait abandonné.</s-fr> · Conjecture in a question: <s-fr>Serait-ce une erreur ?</s-fr> · <s-fr>Aurait-il oublié ?</s-fr> · Indignation: <s-fr>Moi, je mentirais ?</s-fr> (me, lie? never!) · Children's make-believe: <s-fr>On dirait que tu serais le capitaine.</s-fr></p>
<h2>The future, beyond the future</h2>
<p>Softening a request or an admission: <s-fr>Je vous demanderai de patienter.</s-fr> · <s-fr>Je vous avouerai que j'hésite.</s-fr> · Probability about the past, with the futur antérieur: <s-fr>Il n'est pas là ? Il aura oublié.</s-fr> (he must have forgotten) · An order: <s-fr>Tu feras tes devoirs avant de sortir.</s-fr></p>
<h2>The futur antérieur, properly</h2>
<p>An action completed before a point in the future: <s-fr>Quand tu liras cette lettre, nous aurons pris nos décisions.</s-fr></p>
<div class="tip">The probable futur antérieur is very common in speech and often misunderstood: <s-fr>Il aura encore raté son train</s-fr> isn't about tomorrow, it's a guess about what has just happened.</div>
`,
    examples: [
      ["Vous auriez un instant ?", "Would you have a moment?"],
      ["Serait-ce une erreur de calcul ?", "Could it be a calculation error?"],
      ["Moi, je mentirais ? Jamais !", "Me, lie? Never!"],
      ["On dirait que tu serais le capitaine et moi le pirate.", "Let's pretend you're the captain and I'm the pirate."],
      ["Je vous demanderai de patienter quelques minutes.", "I'll ask you to wait a few minutes."],
      ["Il n'est pas là ? Il aura oublié.", "He isn't here? He must have forgotten."],
      ["Tu feras tes devoirs avant de sortir.", "You'll do your homework before you go out."],
      ["Quand tu liras cette lettre, nous aurons pris nos décisions.", "By the time you read this letter, we'll have made our decisions."]
    ],
    quiz: [
      { q: "Il aura oublié usually means:", o: ["He must have forgotten.", "He will forget.", "He would forget."], a: 0, ex: "The futur antérieur of probability." },
      { q: "Je vous demanderai de patienter is:", o: ["a polite request now", "a request for tomorrow", "a hypothesis"], a: 0, ex: "The future softens the request." },
      { q: "Moi, je mentirais ? expresses:", o: ["indignation", "a hypothesis", "a wish"], a: 0, ex: "Me, lie? Never!" },
      { q: "“Could it be a mistake?” is:", o: ["Serait-ce une erreur ?", "Sera-ce une erreur ?", "Était-ce une erreur ?"], a: 0, ex: "The conditional of conjecture." },
      { q: "On dirait que tu serais le roi is typical of:", o: ["children's make-believe", "a formal letter", "a weather forecast"], a: 0, ex: "The playful conditional." }
    ]
  },
  {
    id: 154, level: "C2", icon: "users",
    title: "Je le savais, chacun pour soi, autrui: pronouns at the highest level", title_fr: "Je le savais, chacun pour soi, autrui : les pronoms au plus haut niveau",
    subtitle: "The neutral le, en and y for a whole idea, soi, autrui and reciprocal pronouns.", subtitle_fr: "Le neutre le, en et y pour une idée entière, soi, autrui et les pronoms réciproques.",
    body: `
<h2>The neutral le</h2>
<p><s-fr>le</s-fr> can stand for an adjective or a whole clause, and never agrees: <s-fr>Compétente, elle l'a toujours été.</s-fr> · <s-fr>Je le savais.</s-fr> · <s-fr>C'est plus difficile que tu ne le crois.</s-fr></p>
<h2>En and y for an idea</h2>
<p><s-fr>Tu as réussi ? Je n'en doutais pas.</s-fr> (douter de) · <s-fr>Je m'en doutais.</s-fr> · <s-fr>Ton projet ? J'y pense souvent.</s-fr> (penser à) · <s-fr>Je n'y suis pour rien.</s-fr></p>
<h2>Soi</h2>
<p>After an indefinite subject (<s-fr>on</s-fr>, <s-fr>chacun</s-fr>, <s-fr>personne</s-fr>, <s-fr>quiconque</s-fr>): <s-fr>Chacun pour soi.</s-fr> · <s-fr>On a souvent besoin d'un plus petit que soi</s-fr> (La Fontaine) · <s-fr>prendre soin de soi</s-fr> · <s-fr>rester soi-même</s-fr>. With a definite subject, use <s-fr>lui</s-fr> or <s-fr>elle</s-fr>: <s-fr>Paul pense à lui.</s-fr></p>
<h2>Autrui</h2>
<p>Formal word for other people: <s-fr>le respect d'autrui</s-fr> · <s-fr>Ne fais pas à autrui ce que tu ne voudrais pas qu'on te fasse.</s-fr></p>
<h2>Reciprocity</h2>
<p><s-fr>l'un l'autre</s-fr>, <s-fr>les uns les autres</s-fr>, with the preposition in the middle: <s-fr>Ils ont besoin l'un de l'autre.</s-fr> · <s-fr>Ils se méfient les uns des autres.</s-fr></p>
<div class="tip">The neutral <s-fr>le</s-fr> is a mark of careful French: <s-fr>Fatigués, nous le sommes tous</s-fr>, with le and not la or les. In comparisons, it often comes with the expletive ne: <s-fr>plus cher qu'on ne le pense</s-fr>.</div>
`,
    examples: [
      ["Compétente, elle l'a toujours été.", "Competent she has always been."],
      ["C'est plus difficile que tu ne le crois.", "It's harder than you think."],
      ["Tu as réussi ? Je n'en doutais pas.", "You passed? I never doubted it."],
      ["Ton projet ? J'y pense souvent.", "Your project? I often think about it."],
      ["Chacun pense d'abord à soi.", "Everyone thinks of themselves first."],
      ["On a souvent besoin d'un plus petit que soi.", "We often need someone smaller than ourselves. (La Fontaine)"],
      ["Le respect d'autrui commence par l'écoute.", "Respect for others starts with listening."],
      ["Ils ont besoin l'un de l'autre.", "They need each other."]
    ],
    quiz: [
      { q: "“Tired? We all are.” is:", o: ["Fatigués, nous le sommes tous.", "Fatigués, nous les sommes tous.", "Fatigués, nous en sommes tous."], a: 0, ex: "The neutral le never agrees." },
      { q: "“Everyone for themselves” is:", o: ["Chacun pour soi.", "Chacun pour lui-même.", "Chacun pour eux."], a: 0, ex: "soi after chacun." },
      { q: "“They help each other” is:", o: ["Ils s'aident les uns les autres.", "Ils s'aident les uns aux autres.", "Ils s'aident l'autre l'un."], a: 0, ex: "aider quelqu'un: no preposition." },
      { q: "“I suspected as much” is:", o: ["Je m'en doutais.", "Je m'y doutais.", "Je le doutais."], a: 0, ex: "se douter de → en." },
      { q: "Autrui means:", o: ["other people", "another time", "elsewhere"], a: 0, ex: "Formal: le respect d'autrui." }
    ]
  },
  {
    id: 155, level: "C2", kind: "functional", icon: "handshake",
    title: "Everyday French: negotiating a consensus", title_fr: "Le français de tous les jours : négocier et parvenir à un consensus",
    subtitle: "Restate positions, find common ground and propose a balanced compromise.", subtitle_fr: "Reformuler les positions, trouver un terrain d'entente et proposer un compromis équilibré.",
    body: `
<h2>Restating positions</h2>
<p><s-fr>Si je résume, vous souhaitez…, tandis que vous…</s-fr> · <s-fr>Si je vous comprends bien, ce qui vous inquiète, c'est…</s-fr></p>
<h2>Finding common ground</h2>
<p><s-fr>Nous partageons au moins un objectif :…</s-fr> · <s-fr>Ce qui nous rapproche est plus important que ce qui nous sépare.</s-fr></p>
<h2>Proposing</h2>
<p><s-fr>Que diriez-vous de… ?</s-fr> · <s-fr>Serait-il envisageable que…</s-fr> + subjunctive · <s-fr>Je propose un compromis :…</s-fr></p>
<h2>Conditional concessions</h2>
<p><s-fr>Si vous acceptez…, nous serions prêts à…</s-fr> · <s-fr>à condition que…</s-fr> · <s-fr>en contrepartie</s-fr> (in return)</p>
<h2>Concluding</h2>
<p><s-fr>Pouvons-nous convenir que… ?</s-fr> · <s-fr>Je propose que nous prenions acte de cet accord.</s-fr></p>
<div class="tip">A mediator never says who is right. The art is to separate positions (what people demand) from interests (why they demand it): two opposed positions often hide compatible interests.</div>
`,
    examples: [
      ["Si je résume, vous craignez surtout le bruit.", "To sum up, your main worry is the noise."],
      ["Nous partageons au moins un objectif : que le village reste agréable à vivre.", "We share at least one goal: that the village stays a pleasant place to live."],
      ["Que diriez-vous d'installer les éoliennes plus loin des maisons ?", "How about putting the turbines further from the houses?"],
      ["Serait-il envisageable que les travaux commencent en automne ?", "Would it be possible for the work to start in the autumn?"],
      ["Si vous acceptez ce compromis, nous serions prêts à revoir le calendrier.", "If you accept this compromise, we'd be willing to review the timetable."],
      ["Pouvons-nous convenir d'une nouvelle réunion ?", "Can we agree on another meeting?"]
    ],
    quiz: [
      { q: "“Would it be possible for them to wait?” is:", o: ["Serait-il envisageable qu'ils attendent ?", "Serait-il envisageable qu'ils attendront ?", "Serait-il envisageable d'ils attendre ?"], a: 0, ex: "envisageable que + subjunctive." },
      { q: "“In return” is:", o: ["en contrepartie", "en retour de", "au contraire"], a: 0, ex: "en contrepartie." },
      { q: "“Can we agree on a date?” is:", o: ["Pouvons-nous convenir d'une date ?", "Pouvons-nous convenir une date de ?", "Pouvons-nous convenir à une date ?"], a: 0, ex: "convenir de = to agree on." },
      { q: "A good mediator:", o: ["separates positions from interests", "decides who is right", "takes the side of the strongest"], a: 0, ex: "Interests are often compatible." },
      { q: "“How about meeting on Monday?” is:", o: ["Que diriez-vous de nous retrouver lundi ?", "Que diriez-vous que nous retrouver lundi ?", "Que diriez-vous à nous retrouver lundi ?"], a: 0, ex: "que diriez-vous de + infinitive." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    153: {
      gap: [["Il n'est pas là ? Il ___ oublié. (must have, futur antérieur)", "aura"], ["Je vous ___ de patienter quelques minutes. (demander, future)", "demanderai"], ["___-ce une erreur de calcul ? (could it be, être)", "Serait"], ["Quand tu liras cette lettre, nous ___ pris nos décisions. (avoir, futur antérieur)", "aurons"]],
      fix: [["Il n'est pas venu ? Il oubliera.", "Il n'est pas venu ? Il aura oublié.", "A guess about the past: futur antérieur."], ["Vous avez un instant, s'il vous plaît, que je vous demande quelque chose ?", "Vous auriez un instant, s'il vous plaît ?", "The conditional softens a request."]],
      task: ["A colleague is late for an important meeting. Make four guesses and requests, with the probable futur antérieur, the conditional of conjecture and the future of politeness.", "Un collègue est en retard à une réunion importante. Fais quatre suppositions et demandes, avec le futur antérieur de probabilité, le conditionnel de conjecture et le futur de politesse.", "Mathis n'est toujours pas là. Il aura encore raté son train, ou il se sera trompé de salle. Serait-il malade ? En attendant, je vous demanderai de commencer sans lui."]
    },
    154: {
      gap: [["Compétente, elle l'a toujours ___. (been)", "été"], ["Chacun pense d'abord à ___. (oneself)", "soi"], ["Le respect d'___ commence par l'écoute. (others)", "autrui"], ["Ils ont besoin l'un ___ l'autre. (preposition)", "de"]],
      fix: [["Fatigués, nous les sommes tous.", "Fatigués, nous le sommes tous.", "The neutral le stands for the adjective and never agrees."], ["Chacun doit prendre soin de lui-même et des autres.", "Chacun doit prendre soin de soi et des autres.", "After chacun, on, personne: soi."]],
      task: ["Write four sentences on solidarity, with the neutral le, soi, autrui and a reciprocal pronoun.", "Écris quatre phrases sur la solidarité, avec le neutre le, soi, autrui et un pronom réciproque.", "On croit souvent que la solidarité est une affaire de générosité ; elle l'est moins qu'on ne le pense. Chacun y trouve son compte, car on a souvent besoin d'un plus petit que soi. Le souci d'autrui n'est pas un sacrifice, c'est une assurance. Dans une société, les uns dépendent toujours des autres."]
    },
    155: {
      gap: [["Si je ___, vous craignez surtout le bruit. (sum up)", "résume"], ["Que diriez-vous ___ reporter la réunion ? (preposition)", "de"], ["Serait-il envisageable que les travaux ___ en automne ? (commencer, subjunctive)", "commencent"], ["Pouvons-nous ___ d'une nouvelle date ? (agree)", "convenir"]],
      fix: [["Serait-il envisageable que vous acceptez ce compromis ?", "Serait-il envisageable que vous acceptiez ce compromis ?", "envisageable que + subjunctive."], ["Si vous accepteriez, nous serions prêts à revoir le calendrier.", "Si vous acceptiez, nous serions prêts à revoir le calendrier.|Si vous acceptez, nous serions prêts à revoir le calendrier.", "Never the conditional after si."]],
      task: ["Two neighbours disagree about a tree that blocks the light. As a mediator, restate both positions, name the common ground and propose a compromise.", "Deux voisins s'opposent au sujet d'un arbre qui cache la lumière. En médiateur ou en médiatrice, reformule les deux positions, dégage le terrain d'entente et propose un compromis.", "Si je résume, Madame Petit souhaite retrouver de la lumière dans son salon, tandis que Monsieur Roux tient à cet arbre planté par son père. Vous partagez au moins un objectif : rester en bons termes. Que diriez-vous de tailler l'arbre chaque automne, plutôt que de l'abattre ? En contrepartie, Madame Petit renoncerait à toute démarche en justice."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "eolien", lesson: 155, level: "C2", icon: "wind", partner: "Gaspard", role: "the spokesperson for residents opposed to a wind farm",
    title: "Mediating a conflict", title_fr: "Une médiation",
    setting: "You work for the town hall and act as a mediator. Gaspard speaks for the residents who oppose a wind farm project near the village.", setting_fr: "Tu travailles pour la mairie et tu joues le rôle de médiateur ou de médiatrice. Gaspard parle au nom des habitants opposés à un projet de parc éolien près du village.",
    turns: [
      { p: "Ce parc éolien, nous n'en voulons pas. Point final.", fr: "We don't want this wind farm. Full stop." },
      { y: ["Je l'entends. Si je résume, vous craignez surtout le bruit et l'impact sur le paysage, c'est bien cela ?", "Je l'entends. Si je résumé, vous craignez surtout le bruit et l'impact sur le paysage, c'est bien cela ?", "Je l'entends. Si je résume, vous craignez surtout le bruit et l'impact sur le paysage, c'est bien ça que ?"], fr: "I hear you. To sum up, your main worries are the noise and the impact on the landscape, is that right?", why: "Restate the position: si je résume (present)." },
      { p: "Exactement. Et personne ne nous a demandé notre avis.", fr: "Exactly. And nobody asked our opinion." },
      { y: ["Sur ce point, vous avez raison, et c'est précisément pour cela que nous sommes réunis. Nous partageons au moins un objectif : que le village reste agréable à vivre.", "Sur ce point, vous avez raison, et c'est précisément pour ce que nous sommes réunis. Nous partageons au moins un objectif : que le village reste agréable à vivre.", "Sur ce point, vous avez raison, et c'est précisément pour cela que nous sommes réunis. Nous partageons au moins une objectif : que le village reste agréable à vivre."], fr: "On that point you're right, and that's exactly why we're here. We share at least one goal: that the village stays a pleasant place to live.", why: "c'est pour cela que; un objectif (m)." },
      { p: "Alors pourquoi ne pas abandonner le projet ?", fr: "So why not drop the project?" },
      { y: ["Serait-il envisageable, plutôt, que les éoliennes soient installées plus loin des maisons ?", "Serait-il envisageable, plutôt, que les éoliennes sont installées plus loin des maisons ?", "Serait-il envisageable, plutôt, que les éoliennes seraient installées plus loin des maisons ?"], fr: "Would it be possible, instead, for the turbines to be installed further from the houses?", why: "envisageable que + subjunctive." },
      { p: "Plus loin, on pourrait en discuter. Mais qu'est-ce qu'on y gagne, nous ?", fr: "Further away, we could talk about it. But what do we get out of it?" },
      { y: ["Si vous acceptez ce compromis, la commune serait prête à reverser une partie des recettes aux habitants.", "Si vous accepteriez ce compromis, la commune serait prête à reverser une partie des recettes aux habitants.", "Si vous acceptez ce compromis, la commune serait prête de reverser une partie des recettes aux habitants."], fr: "If you accept this compromise, the town would be willing to pass part of the revenue on to the residents.", why: "si + present, never the conditional; prêt à." },
      { p: "Bon. Je dois en parler aux autres riverains.", fr: "All right. I need to talk it over with the other residents." },
      { y: ["Bien sûr. Pouvons-nous au moins convenir d'une nouvelle réunion avant la fin du mois ?", "Bien sûr. Pouvons-nous au moins convenir à une nouvelle réunion avant la fin du mois ?", "Bien sûr. Pouvons-nous au moins convenir une nouvelle réunion de avant la fin du mois ?"], fr: "Of course. Can we at least agree on another meeting before the end of the month?", why: "convenir de = to agree on." }
    ] }
  );

  W.READINGS.push({
    id: "generations", level: "C2", icon: "telescope", title: "Que devons-nous aux générations futures ?", genre: "Essai",
    intro: "From Hans Jonas to the Paris Agreement: our responsibility towards those not yet born. The conditional, the future and pronouns at C2 level.",
    intro_fr: "De Hans Jonas à l'accord de Paris : notre responsabilité envers ceux qui ne sont pas encore nés. Le conditionnel, le futur et les pronoms au niveau C2.",
    paragraphs: [
      { en: "Que devons-nous à ceux qui ne sont pas encore nés ? La question aurait semblé étrange il y a un siècle. Elle est aujourd'hui au cœur du débat climatique : les décisions que nous prenons, ou que nous ne prenons pas, engageront des générations qui n'ont pas voix au chapitre.", fr: "What do we owe those who are not yet born? The question would have seemed odd a century ago. Today it is at the heart of the climate debate: the decisions we make, or fail to make, will commit generations who have no say in the matter." },
      { en: "En 1979, le philosophe allemand Hans Jonas publiait Le Principe responsabilité. Selon lui, la puissance technique de l'humanité lui impose une éthique nouvelle : agir de telle sorte que les effets de nos actes restent compatibles avec la permanence d'une vie authentiquement humaine sur Terre. Autrement dit, la responsabilité ne s'arrête plus à autrui ; elle s'étend à ceux qui viendront.", fr: "In 1979, the German philosopher Hans Jonas published The Imperative of Responsibility. According to him, humanity's technical power demands a new ethics: acting in such a way that the effects of our actions remain compatible with the permanence of genuine human life on Earth. In other words, responsibility no longer stops at other people; it extends to those who will come." },
      { en: "L'accord de Paris, adopté en 2015, traduit cette exigence en objectifs chiffrés : contenir le réchauffement nettement en dessous de deux degrés, et poursuivre les efforts pour le limiter à un degré et demi. Or, selon le service européen Copernicus, 2024 a été l'année la plus chaude jamais mesurée.", fr: "The Paris Agreement, adopted in 2015, turns this demand into figures: keeping warming well below two degrees, and pursuing efforts to limit it to one and a half. Yet according to the European Copernicus service, 2024 was the hottest year ever measured." },
      { en: "Les économistes le savent : nous accordons spontanément moins de valeur à un bénéfice futur qu'à un bénéfice immédiat. Investir aujourd'hui pour éviter une catastrophe dans cinquante ans exige donc de lutter contre une pente naturelle. Chacun pense d'abord à soi, et c'est humain ; reste à élargir ce soi aux dimensions du temps.", fr: "Economists know it: we naturally value a future benefit less than an immediate one. Investing today to avoid a disaster in fifty years therefore means fighting a natural tendency. Everyone thinks of themselves first, and that's human; the challenge is to stretch that self across time." },
      { en: "Les générations futures ne voteront pas aux prochaines élections. Mais elles jugeront. Il se pourrait bien que, dans un demi-siècle, on se demande moins ce que nous savions que ce que nous aurons fait de ce savoir.", fr: "Future generations won't vote in the next elections. But they will judge. It may well be that, in half a century, people will ask less what we knew than what we did with that knowledge." }
    ],
    glossary: { "chapitre": "chapter (avoir voix au chapitre: to have a say)", "puissance": "power", "compatibles": "compatible", "permanence": "permanence, continued existence", "authentiquement": "genuinely", "étend": "extends", "contenir": "to contain, to hold back", "nettement": "clearly, well", "spontanément": "spontaneously, naturally", "immédiat": "immediate", "pente": "slope, tendency", "dimensions": "dimensions, scale", "jugeront": "will judge" },
    questions: [
      { q: "Pourquoi la question des générations futures est-elle centrale aujourd'hui ?", o: ["Nos décisions climatiques engageront des générations qui n'ont pas voix au chapitre.", "Les jeunes votent de plus en plus.", "La population diminue."], a: 0 },
      { q: "Qu'affirme Hans Jonas ?", o: ["Notre puissance technique nous impose une responsabilité envers l'avenir.", "La technique résoudra tous les problèmes.", "Seul le présent compte."], a: 0 },
      { q: "Que vise l'accord de Paris ?", o: ["Contenir le réchauffement nettement en dessous de deux degrés", "Supprimer toutes les voitures", "Interdire le charbon en 2015"], a: 0 },
      { q: "Quelle tendance naturelle les économistes observent-ils ?", o: ["Nous accordons moins de valeur à un bénéfice futur qu'à un bénéfice immédiat.", "Nous préférons toujours épargner.", "Nous pensons d'abord aux autres."], a: 0 },
      { q: "Selon l'auteur, que nous demandera-t-on dans un demi-siècle ?", o: ["Ce que nous aurons fait de notre savoir", "Ce que nous savions exactement", "Pour qui nous avons voté"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-c2-7", unit: "c2-7", level: "C2", icon: "leaf",
    title: "L'éco-anxiété, une maladie ?", title_fr: "L'éco-anxiété, une maladie ?",
    context: "On the radio, Valentin interviews Aurore, a psychologist, about eco-anxiety.", context_fr: "À la radio, Valentin interroge Aurore, psychologue, sur l'éco-anxiété.",
    words: [["l'impuissance", "helplessness"], ["somme toute", "all things considered"], ["paralyser", "to paralyse"], ["à son échelle", "on one's own scale"], ["minimiser", "to play down"]],
    lines: [["Valentin", "Insomnies, sentiment d'impuissance, colère : on parle de plus en plus d'éco-anxiété. Aurore, vous êtes psychologue. Est-ce une maladie ?", "fr-FR"], ["Aurore", "Non, et j'insiste sur ce point. L'éco-anxiété n'est pas un trouble mental : c'est une réaction somme toute rationnelle à une menace bien réelle. Elle ne devient un problème que lorsqu'elle paralyse.", "fr-FR"], ["Valentin", "Qui touche-t-elle ?", "fr-FR"], ["Aurore", "Surtout les jeunes. Une étude internationale publiée en 2021, menée auprès de dix mille jeunes de dix pays, indiquait qu'une majorité d'entre eux se disaient très inquiets face au changement climatique. Beaucoup avaient le sentiment que les gouvernements ne les protégeaient pas.", "fr-FR"], ["Valentin", "Que leur conseillez-vous ?", "fr-FR"], ["Aurore", "De ne pas rester seuls avec cette angoisse. Le meilleur remède, c'est souvent l'action collective : s'engager dans une association, agir à son échelle, avec d'autres. On se sent moins impuissant quand on agit.", "fr-FR"], ["Valentin", "Et les parents, que peuvent-ils faire ?", "fr-FR"], ["Aurore", "Écouter, d'abord, sans minimiser ni dramatiser. Il ne s'agirait pas de mentir aux enfants, mais de leur montrer que des solutions existent, et que des adultes y travaillent. L'espoir, ce n'est pas l'optimisme : c'est la conviction que nos actes comptent.", "fr-FR"]],
    gist: ["De quoi parle l'entretien ?", ["De l'éco-anxiété et de la façon d'y faire face", "D'une nouvelle maladie infectieuse", "Des élections"]],
    detail: [["Selon Aurore, l'éco-anxiété est-elle une maladie ?", ["Non, c'est une réaction rationnelle à une menace réelle.", "Oui, un trouble grave.", "Elle ne le sait pas."]], ["Que montrait l'étude publiée en 2021 ?", ["Une majorité de jeunes se disaient très inquiets face au changement climatique.", "Les jeunes ne s'intéressent pas au climat.", "Les parents sont plus inquiets que les enfants."]], ["Quel remède conseille-t-elle ?", ["L'action collective", "Ne plus regarder les informations", "Partir à la campagne"]], ["Comment définit-elle l'espoir ?", ["La conviction que nos actes comptent", "L'optimisme", "L'oubli des problèmes"]]],
    decode: ["c'est une réaction somme toute rationnelle à une menace bien réelle", "L'espoir, ce n'est pas l'optimisme"],
    tip: "A C2 listener catches definitions by opposition: ce n'est pas…, c'est… The second half is the speaker's real position. Note both: the contrast is the argument.", tip_fr: "Un auditeur de niveau C2 repère les définitions par opposition : ce n'est pas…, c'est… La seconde moitié donne la vraie position de l'intervenante. Note les deux : c'est le contraste qui fait l'argument."
  }]);

  W.LEXIS = W.LEXIS || {};
  W.LEXIS["c2-7"] = {
    colloc: [
      ["atteindre la neutralité carbone", "to reach net zero", "Le pays veut atteindre la neutralité carbone en 2050.", "atteindre", ["toucher", "joindre"]],
      ["tenir ses engagements", "to keep one's commitments", "Les États doivent tenir leurs engagements.", "tenir", ["garder", "porter"]],
      ["dépasser un seuil", "to cross a threshold", "Les températures ont dépassé un seuil critique.", "dépassé", ["doublé", "devancé"]],
      ["inverser la tendance", "to reverse the trend", "Il est encore temps d'inverser la tendance.", "inverser", ["retourner", "tourner"]],
      ["parvenir à un consensus", "to reach a consensus", "Les négociateurs sont parvenus à un consensus.", "parvenus", ["venus", "gagnés"]],
      ["trouver un terrain d'entente", "to find common ground", "Ils ont fini par trouver un terrain d'entente.", "trouver", ["poser", "faire"]],
      ["faire des concessions", "to make concessions", "Chaque camp a dû faire des concessions.", "faire", ["donner", "rendre"]],
      ["léguer un héritage", "to bequeath a legacy", "Quel héritage léguerons-nous à nos enfants ?", "léguerons", ["léserons", "livrerons"]],
      ["prendre la mesure de", "to grasp the extent of", "Les dirigeants ont tardé à prendre la mesure de la crise.", "prendre", ["faire", "donner"]],
      ["sonner le glas", "to sound the death knell", "Cette décision sonne le glas du projet.", "sonne", ["frappe", "bat"]]
    ],
    wf: [
      ["La ___ de l'économie prendra des décennies. (CARBONE)", "décarbonation"],
      ["Les ___ de gaz à effet de serre ont légèrement baissé. (ÉMETTRE)", "émissions"],
      ["Ce scénario est d'un ___ inquiétant. (PESSIMISTE)", "pessimisme"],
      ["L'___ au changement climatique est devenue urgente. (ADAPTER)", "adaptation"],
      ["La ___ des glaciers s'accélère. (FONDRE)", "fonte"],
      ["Ces mesures sont ___ : elles ne suffiront pas. (SUFFIRE)", "insuffisantes"],
      ["La ___ de l'accord a été saluée par tous. (SIGNER)", "signature"],
      ["Les années à venir seront ___. (DÉCIDER)", "décisives"]
    ],
    kwt: [
      ["Veuillez patienter, s'il vous plaît.", "DEMANDERAI", "Je ___ patienter.", "vous demanderai de"],
      ["Il a probablement raté son train, comme d'habitude.", "AURA", "Il ___, comme d'habitude.", "aura encore raté son train|aura raté son train"],
      ["Tout le monde pense d'abord à son propre intérêt.", "SOI", "Chacun ___.", "pense d'abord à soi"],
      ["Il faut respecter les autres.", "AUTRUI", "Il faut faire preuve de ___.", "respect envers autrui|respect à l'égard d'autrui"],
      ["Chacun d'eux se méfie des autres.", "UNS", "Ils ___.", "se méfient les uns des autres"],
      ["Elle a toujours été compétente.", "ÉTÉ", "Compétente, elle ___.", "l'a toujours été"]
    ],
    idioms: [
      ["après moi, le déluge", "indifférence à ce qui arrivera après soi", "after me, the flood", "Épuiser la planète sans réfléchir, c'est penser : après moi, le déluge.", "après moi, le déluge"],
      ["scier la branche sur laquelle on est assis", "agir contre ses propres intérêts", "to saw off the branch you're sitting on", "Détruire les sols, c'est scier la branche sur laquelle on est assis.", "scier la branche sur laquelle on est assis"],
      ["jouer les Cassandre", "annoncer des malheurs sans être cru", "to be a prophet of doom", "On l'accuse de jouer les Cassandre, mais ses prévisions se vérifient.", "jouer les Cassandre"],
      ["l'avenir appartient à ceux qui se lèvent tôt", "il faut de l'effort pour réussir", "the early bird catches the worm", "Mon grand-père répétait que l'avenir appartient à ceux qui se lèvent tôt.", "l'avenir appartient à ceux qui se lèvent tôt"],
      ["ménager la chèvre et le chou", "chercher à contenter deux camps opposés", "to try to please everyone", "Le gouvernement ménage la chèvre et le chou.", "ménage la chèvre et le chou"],
      ["la goutte d'eau qui fait déborder le vase", "le petit incident de trop", "the last straw", "Cette canicule a été la goutte d'eau qui fait déborder le vase.", "la goutte d'eau qui fait déborder le vase"],
      ["être sur la corde raide", "être dans une situation précaire", "to be on a tightrope", "Les négociateurs sont sur la corde raide.", "sur la corde raide"],
      ["il y a péril en la demeure", "il est urgent d'agir", "time is of the essence", "Il y a péril en la demeure : il faut agir maintenant.", "Il y a péril en la demeure"]
    ]
  };

  W.PROMPTS.push({ id: "fr-c2-7", level: "C2", q: "Que voudrais-tu transmettre aux générations futures ?", fr: "What would you like to pass on to future generations?", time: 240,
    phrases: ["Je voudrais…", "le souci d'autrui", "On pense trop souvent à soi…", "Si je devais…, ce serait…", "Ils nous jugeront…"],
    model: "Je voudrais d'abord leur transmettre une planète habitable, ce qui ne dépend pas que de moi, hélas. Mais je voudrais aussi leur transmettre une manière d'être au monde : le souci d'autrui, la curiosité, le goût de l'effort partagé. On pense trop souvent à soi ; or, rien de ce qui compte vraiment ne se construit seul. Si je devais leur laisser une seule phrase, ce serait peut-être celle-ci : ne faites pas à ceux qui viendront après vous ce que vous n'auriez pas voulu qu'on vous fasse. Ils nous jugeront, c'est certain ; j'espère qu'ils le feront avec indulgence." });

  W.WRITING_GUIDE["c2-7"] = { genre: "A letter to the future (C2)", genre_fr: "Une lettre à l'avenir (C2)",
    plan: [["Address someone you'll never meet.", "Adresse-toi à quelqu'un que tu ne rencontreras jamais."], ["Admit what your generation knew.", "Avoue ce que ta génération savait."], ["Show those who acted.", "Montre ceux qui ont agi."], ["Make a request rather than an apology.", "Formule une demande plutôt qu'une excuse."], ["End on a hope, with the futur antérieur.", "Termine sur un espoir, au futur antérieur."]],
    marks: [["tu hériteras du monde que nous t'aurons laissé", "the future and the futur antérieur together", "le futur et le futur antérieur ensemble"], ["Je t'avouerai d'abord une chose", "the future of politeness", "le futur de politesse"], ["Chacun pensait d'abord à soi", "soi after chacun", "soi après chacun"], ["Serait-ce une excuse ?", "the conditional of conjecture", "le conditionnel de conjecture"], ["Le respect d'autrui", "autrui", "autrui"], ["nous aurons su, malgré tout, nous ressaisir", "the futur antérieur", "le futur antérieur"]] };

  W.COURSE.push({ id: "c2-7", level: "C2", icon: "wind", title: "The planet and the future", title_fr: "Planète et avenir",
    intro: "In this unit, you'll think about the climate and our responsibility towards the future: the values of the conditional and the future (il aura oublié, je vous demanderai, serait-ce…?), pronouns at the highest level (le neutre, soi, autrui) and the art of mediation.",
    intro_fr: "Dans cette unité, tu vas réfléchir au climat et à notre responsabilité envers l'avenir : les valeurs du conditionnel et du futur (il aura oublié, je vous demanderai, serait-ce… ?), les pronoms au plus haut niveau (le neutre, soi, autrui) et l'art de la médiation.",
    can: ["Use the conditional and the future for nuance, not only for time", "Handle the neutral le, soi, autrui and reciprocal pronouns", "Discuss climate, the future and intergenerational responsibility", "Mediate between two sides and propose a compromise", "Write a letter to the future"],
    can_fr: ["Employer le conditionnel et le futur pour nuancer, pas seulement pour situer dans le temps", "Manier le neutre le, soi, autrui et les pronoms réciproques", "Débattre du climat, de l'avenir et de la responsabilité entre générations", "Servir de médiateur entre deux camps et proposer un compromis", "Écrire une lettre à l'avenir"],
    lessons: [153, 154, 155], vocab: ["climatFR", "avenirFR"], reading: "generations", prompt: "fr-c2-7",
    writing: { task: "Write a letter (350-400 words) to someone who will be twenty in 2075. Admit, explain, ask, hope: use the future, the futur antérieur and the conditional for nuance.", task_fr: "Écris une lettre (350 à 400 mots) à une personne qui aura vingt ans en 2075. Avoue, explique, demande, espère : emploie le futur, le futur antérieur et le conditionnel pour nuancer.", words: "350-400",
      tips: ["À toi qui auras vingt ans en 2075,", "Je t'avouerai que…", "Serait-ce… ?", "Je ne te demanderai pas de…, mais…", "Si…, alors nous aurons…"],
      checklist: ["I addressed the reader directly", "I used the futur antérieur at least twice", "I used the future or the conditional to soften", "I used soi or autrui", "My ending opens on a hope", "I wrote between 350 and 400 words"],
      model: "À toi qui auras vingt ans en 2075,\n\nJe ne sais pas qui tu es, ni où tu vis, ni dans quelle langue tu liras peut-être ces lignes. Je sais seulement que tu hériteras du monde que nous t'aurons laissé, et que tu nous jugeras. Tu en auras le droit. Je t'écris pourtant, parce qu'il me semble que l'on doit des comptes même à ceux qu'on ne verra jamais.\n\nJe t'avouerai d'abord une chose : nous savions. Les scientifiques nous avaient prévenus, les rapports s'accumulaient sur les bureaux, et les étés devenaient chaque année un peu plus brûlants. Les glaciers reculaient, les forêts brûlaient, les mers montaient, et nous en parlions comme d'une rumeur lointaine. Nous savions, et pourtant nous avons longtemps hésité. Chacun pensait d'abord à soi, à son confort, à sa prochaine élection ou à son prochain dividende. Serait-ce une excuse ? Certainement pas. Une explication, tout au plus.\n\nJe voudrais te dire aussi que tout le monde n'a pas regardé ailleurs. Des millions de personnes se sont mobilisées, ont changé leur façon de vivre, ont inventé des solutions que tu tiens peut-être aujourd'hui pour évidentes. Si ton air est respirable et ta ville vivable, c'est en partie à elles que tu le dois. On les traitait de rêveurs ; elles étaient simplement lucides. Il se pourrait d'ailleurs que leur nom ne figure dans aucun manuel : ce sont souvent des anonymes qui changent le cours des choses.\n\nJe ne te demanderai pas de nous pardonner. Je te demanderai plutôt de ne pas répéter nos erreurs. Le respect d'autrui ne s'arrête pas à ceux qu'on voit : il s'étend à ceux qui viendront après toi, et que tu ne connaîtras jamais. C'est peut-être la leçon la plus difficile, et la plus nécessaire. Ce que tu feras de ta propre liberté, d'autres en hériteront à leur tour.\n\nSi tu lis cette lettre dans un monde apaisé, alors nous aurons su, malgré tout, nous ressaisir. Et si ce n'est pas le cas, sache au moins que certains d'entre nous ont essayé, de toutes leurs forces. Tu auras sans doute trouvé des réponses que nous n'osions même pas imaginer.\n\nAvec toute mon espérance,\n\nQuelqu'un de 2026" } });
})();
