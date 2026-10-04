/* Unité C1 « Cities and society » (c1-8), complète : leçons 143-144 et leurs exercices, texte, atelier d'écoute,
   jeu de rôle, sujet d'oral, guide d'écriture et atelier de langue. Elle regroupe urbanC1 (venu de c1-4), globalC1
   (venu de c1-3), rightsC1 et ethics (venus de c1-5), et les textes « overtourism » (c1-5) et « basicincome » (c1-2).
   Personnes, quartier et ville fictifs. Faits vérifiés : la « ville du quart d'heure » développée par Carlos Moreno
   (Sorbonne), promesse centrale de la campagne d'Anne Hidalgo en 2020, idées voisines à Melbourne et Barcelone ;
   à Oxford en 2023, des filtres de circulation liés à des théories du complot sur les « villes du quart d'heure »
   et une manifestation d'environ deux mille personnes. */
(function () {
  const W = window;

  W.LESSONS.push(
  {
    id: 143, after: 49, level: "C1", icon: "link",
    title: "Given that, now that, in that: linking reasons and conditions precisely", title_fr: "Given that, now that, in that : relier raisons et conditions avec précision",
    subtitle: "Present known facts, new situations and exact reasons, and set conditions beyond if.", subtitle_fr: "Présenter des faits établis, des situations nouvelles et des raisons précises, et poser des conditions au-delà de if.",
    body: `
<h2>Reasons, with nuance</h2>
<table>
<tr><th>Linker</th><th>Nuance</th><th>Example</th></tr>
<tr><td><s-en>given that</s-en> · <s-en>given</s-en> + noun</td><td>taking this known fact into account</td><td><s-en>Given that rents have doubled, it's no surprise that young people are leaving.</s-en></td></tr>
<tr><td><s-en>seeing that</s-en> · <s-en>seeing as</s-en></td><td>since (informal)</td><td><s-en>Seeing as you're here, could you give me a hand?</s-en></td></tr>
<tr><td><s-en>now that</s-en></td><td>because of a new situation</td><td><s-en>Now that the tram is running, fewer people drive into town.</s-en></td></tr>
<tr><td><s-en>in that</s-en></td><td>in the sense that: it says exactly how</td><td><s-en>The plan is unfair in that it ignores older residents.</s-en></td></tr>
<tr><td><s-en>insofar as</s-en></td><td>to the extent that (formal)</td><td><s-en>The policy worked insofar as traffic fell.</s-en></td></tr>
<tr><td><s-en>considering</s-en> + noun or that</td><td>when you think about</td><td><s-en>Considering the cost, the result is disappointing.</s-en></td></tr>
</table>
<h2>Conditions beyond if</h2>
<p><s-en>as long as</s-en> · <s-en>provided (that)</s-en>: only if. <s-en>The council will approve the project provided that it includes social housing.</s-en></p>
<p><s-en>on condition that</s-en> (formal): <s-en>The land was sold on condition that a park would be created.</s-en></p>
<p><s-en>assuming (that)</s-en>: if we accept that something is true. <s-en>Assuming the funding arrives, work will start in May.</s-en></p>
<div class="tip">Choose honestly: <s-en>given that…</s-en> presents a fact that everyone accepts; <s-en>assuming that…</s-en> presents something you're not sure about. The right choice makes your argument more convincing, and fairer.</div>
`,
    body_fr: `
<h2>Les raisons, avec nuance</h2>
<table>
<tr><th>Mot de liaison</th><th>Nuance</th><th>Exemple</th></tr>
<tr><td><s-en>given that</s-en> · <s-en>given</s-en> + nom</td><td>étant donné ce fait établi</td><td><s-en>Given that rents have doubled, it's no surprise that young people are leaving.</s-en> (étant donné que les loyers ont doublé…)</td></tr>
<tr><td><s-en>seeing that</s-en> · <s-en>seeing as</s-en></td><td>puisque (familier)</td><td><s-en>Seeing as you're here, could you give me a hand?</s-en> (puisque tu es là…)</td></tr>
<tr><td><s-en>now that</s-en></td><td>maintenant que (situation nouvelle)</td><td><s-en>Now that the tram is running, fewer people drive into town.</s-en></td></tr>
<tr><td><s-en>in that</s-en></td><td>en ce sens que : dit précisément en quoi</td><td><s-en>The plan is unfair in that it ignores older residents.</s-en> (le projet est injuste en ce qu'il ignore les habitants âgés)</td></tr>
<tr><td><s-en>insofar as</s-en></td><td>dans la mesure où (soutenu)</td><td><s-en>The policy worked insofar as traffic fell.</s-en></td></tr>
<tr><td><s-en>considering</s-en> + nom ou that</td><td>vu, compte tenu de</td><td><s-en>Considering the cost, the result is disappointing.</s-en> (vu le coût…)</td></tr>
</table>
<h2>Les conditions au-delà de if</h2>
<p><s-en>as long as</s-en> · <s-en>provided (that)</s-en> : à condition que, seulement si. <s-en>The council will approve the project provided that it includes social housing.</s-en></p>
<p><s-en>on condition that</s-en> (soutenu) : <s-en>The land was sold on condition that a park would be created.</s-en> (le terrain a été vendu à condition qu'un parc y soit créé)</p>
<p><s-en>assuming (that)</s-en> : en supposant que. <s-en>Assuming the funding arrives, work will start in May.</s-en></p>
<div class="tip">Choisis honnêtement : <s-en>given that…</s-en> présente un fait admis par tous ; <s-en>assuming that…</s-en> présente quelque chose dont tu n'es pas sûre. Le bon choix rend ton argument plus convaincant, et plus juste.</div>
`,
    examples: [
      ["Given that rents have doubled, it's no surprise that young people are leaving.", "Étant donné que les loyers ont doublé, il n'est pas étonnant que les jeunes partent."],
      ["Now that the tram is running, fewer people drive into town.", "Maintenant que le tram fonctionne, moins de gens viennent en ville en voiture."],
      ["The plan is unfair in that it ignores older residents.", "Le projet est injuste en ce qu'il ignore les habitants âgés."],
      ["Considering the cost, the result is disappointing.", "Vu le coût, le résultat est décevant."],
      ["The council will approve the project provided that it includes social housing.", "La mairie approuvera le projet à condition qu'il comprenne des logements sociaux."],
      ["Assuming the funding arrives, work will start in May.", "En supposant que le financement arrive, les travaux commenceront en mai."],
      ["Seeing as you're here, could you give me a hand?", "Puisque tu es là, tu pourrais me donner un coup de main ?"]
    ],
    quiz: [
      { q: "The policy is controversial ___ it affects the poorest families most.", q_fr: "Complète : « The policy is controversial ___ it affects the poorest families most. »", o: ["in that", "provided that", "assuming"], a: 0, ex: "in that = in the sense that, saying exactly why.", ex_fr: "in that = en ce sens que, pour dire précisément pourquoi." },
      { q: "We're not sure the money will arrive. ___ it does, the park will open next year.", q_fr: "On n'est pas sûrs que l'argent arrive. Complète : « ___ it does, the park will open next year. »", o: ["Given that", "Assuming", "In that"], a: 1, ex: "assuming = if we accept something we're not sure about.", ex_fr: "assuming = en supposant une chose dont on n'est pas sûr." },
      { q: "___ the weather, the turnout was impressive.", q_fr: "Complète : « ___ the weather, the turnout was impressive. »", o: ["Provided", "Now that", "Considering"], a: 2, ex: "considering + noun = when you think about…", ex_fr: "considering + nom = vu, compte tenu de…" },
      { q: "You can use the hall ___ you leave it clean.", q_fr: "Complète : « You can use the hall ___ you leave it clean. »", o: ["as long as", "in that", "given"], a: 0, ex: "as long as = only if.", ex_fr: "as long as = à condition que." },
      { q: "“In that” means:", q_fr: "« In that » veut dire :", o: ["inside", "in the sense that", "in case"], a: 1, ex: "The plan is unfair in that… = the plan is unfair because, more precisely,…", ex_fr: "The plan is unfair in that… = le projet est injuste en ce que…" }
    ]
  },
  {
    id: 144, after: 49, level: "C1", kind: "functional", icon: "landmark",
    title: "Everyday English: speaking at a public meeting", title_fr: "Anglais pratique : prendre la parole en réunion publique",
    subtitle: "Raise a concern, ask for clarification and make a proposal in a formal setting, firmly but politely.", subtitle_fr: "Exprimer une inquiétude, demander des précisions et faire une proposition dans un cadre formel, avec fermeté mais poliment.",
    body: `
<h2>Taking the floor</h2>
<p><s-en>Thank you, Chair. My name is…, and I live…</s-en> · <s-en>I'd like to raise a concern about…</s-en> · <s-en>If I could just make a point…</s-en></p>
<h2>Expressing concern, firmly but politely</h2>
<p><s-en>Many residents are worried that…</s-en> · <s-en>With all due respect, the plan doesn't address…</s-en> · <s-en>I'm not convinced that…</s-en> · <s-en>What concerns me most is…</s-en></p>
<h2>Asking for clarification</h2>
<p><s-en>Could you clarify how…?</s-en> · <s-en>Am I right in thinking that…?</s-en> · <s-en>What guarantees are there that…?</s-en> · <s-en>Has the council considered…?</s-en></p>
<h2>Making a proposal</h2>
<p><s-en>Would the council be willing to…?</s-en> · <s-en>One solution might be to…</s-en> · <s-en>I'd urge the council to…</s-en> · <s-en>Could I propose that…?</s-en></p>
<div class="tip"><s-en>With all due respect</s-en> sounds polite but signals strong disagreement: use it sparingly. In a formal meeting, speak to the chair (<s-en>Chair</s-en>, <s-en>Madam Chair</s-en>, <s-en>Mr Chairman</s-en>) rather than directly to the person you disagree with.</div>
`,
    body_fr: `
<h2>Prendre la parole</h2>
<p><s-en>Thank you, Chair. My name is…, and I live…</s-en> (merci, madame la présidente ; je m'appelle…, j'habite…) · <s-en>I'd like to raise a concern about…</s-en> (j'aimerais exprimer une inquiétude au sujet de…) · <s-en>If I could just make a point…</s-en> (si je peux me permettre une remarque…)</p>
<h2>Exprimer une inquiétude, fermement mais poliment</h2>
<p><s-en>Many residents are worried that…</s-en> (beaucoup d'habitants craignent que…) · <s-en>With all due respect, the plan doesn't address…</s-en> (sauf votre respect, le projet ne règle pas…) · <s-en>I'm not convinced that…</s-en> (je ne suis pas convaincue que…) · <s-en>What concerns me most is…</s-en> (ce qui m'inquiète le plus, c'est…)</p>
<h2>Demander des précisions</h2>
<p><s-en>Could you clarify how…?</s-en> (pourriez-vous préciser comment… ?) · <s-en>Am I right in thinking that…?</s-en> (ai-je bien compris que… ?) · <s-en>What guarantees are there that…?</s-en> (quelles garanties y a-t-il que… ?) · <s-en>Has the council considered…?</s-en> (la mairie a-t-elle envisagé… ?)</p>
<h2>Faire une proposition</h2>
<p><s-en>Would the council be willing to…?</s-en> (la mairie serait-elle prête à… ?) · <s-en>One solution might be to…</s-en> (une solution pourrait être de…) · <s-en>I'd urge the council to…</s-en> (j'invite instamment la mairie à…) · <s-en>Could I propose that…?</s-en> (puis-je proposer que… ?)</p>
<div class="tip"><s-en>With all due respect</s-en> paraît poli mais annonce un désaccord marqué : à utiliser avec modération. En réunion formelle, on s'adresse à la présidence (<s-en>Chair</s-en>, <s-en>Madam Chair</s-en>, <s-en>Mr Chairman</s-en>) plutôt qu'à la personne avec qui on n'est pas d'accord.</div>
`,
    examples: [
      ["Thank you, Chair. I'd like to raise a concern about the new car park.", "Merci, madame la présidente. J'aimerais exprimer une inquiétude au sujet du nouveau parking."],
      ["Many residents are worried that the traffic will increase.", "Beaucoup d'habitants craignent que la circulation augmente."],
      ["With all due respect, the plan doesn't address the noise.", "Sauf votre respect, le projet ne règle pas la question du bruit."],
      ["Could you clarify how the project will be funded?", "Pourriez-vous préciser comment le projet sera financé ?"],
      ["Am I right in thinking that the park will be smaller?", "Ai-je bien compris que le parc sera plus petit ?"],
      ["Would the council be willing to hold a second consultation?", "La mairie serait-elle prête à organiser une deuxième consultation ?"],
      ["I'd urge the council to listen to the people who live here.", "J'invite instamment la mairie à écouter les habitants."]
    ],
    quiz: [
      { q: "How do you start speaking at a formal meeting?", q_fr: "Comment commencer à parler lors d'une réunion formelle ?", o: ["Listen to me!", "Thank you, Chair. I'd like to raise a concern about…", "Hello everybody, so, the car park is bad."], a: 1, ex: "Thank the chair, then announce your point.", ex_fr: "Remercie la présidence, puis annonce ton point." },
      { q: "“Am I right in thinking that…?” is used to:", q_fr: "« Am I right in thinking that…? » sert à :", o: ["check that you've understood", "show you're always right", "end the meeting"], a: 0, ex: "It asks for confirmation politely.", ex_fr: "Ça demande poliment une confirmation." },
      { q: "“With all due respect” usually signals:", q_fr: "« With all due respect » annonce en général :", o: ["agreement", "a joke", "disagreement"], a: 2, ex: "Polite words, but a strong disagreement follows.", ex_fr: "Des mots polis, mais un désaccord marqué suit." },
      { q: "Which is a polite proposal?", q_fr: "Laquelle est une proposition polie ?", o: ["Would the council be willing to delay the vote?", "Delay the vote!", "You must delay the vote."], a: 0, ex: "Would… be willing to…? is a polite, formal request.", ex_fr: "Would… be willing to…? est une demande polie et soutenue." },
      { q: "“I'd urge the council to…” is:", q_fr: "« I'd urge the council to… » est :", o: ["an apology", "a strong recommendation", "a question"], a: 1, ex: "urge someone to do something = strongly recommend it.", ex_fr: "urge someone to do something = recommander vivement." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    143: {
      gap: [["___ that prices keep rising, many families are struggling. (étant donné)", "Given|Seeing"], ["___ that the station is open, I take the train every day. (maintenant)", "Now"], ["The rule is unfair ___ that it only applies to some people. (en ce sens que)", "in"], ["They agreed to sell the house on ___ that the garden was kept. (à condition)", "condition"]],
      fix: [["Considering of the cost, the result is poor.", "Considering the cost, the result is poor.", "Considering + noun, with no of."], ["Now as the metro works, I don't drive any more.", "Now that the metro works, I don't drive any more.|Now that the metro is running, I don't drive any more.", "Now that, not now as."]],
      task: ["Write four sentences about your town or city, using given that, now that, in that and as long as.", "Écris quatre phrases sur ta ville, avec given that, now that, in that et as long as.", "Given that the town has no cinema, young people spend their evenings in the city. Now that the new library has opened, the centre is livelier. The market is special in that everything is grown locally. Cycling here is pleasant, as long as you avoid the main road."]
    },
    144: {
      gap: [["I'd like to ___ a concern about the new road. (soulever)", "raise"], ["Could you ___ how the money will be spent? (préciser)", "clarify"], ["Am I right in ___ that the school will close? (penser)", "thinking"], ["With all due ___, that's not what residents want. (respect)", "respect"]],
      fix: [["I would like to rise a concern about the project.", "I would like to raise a concern about the project.|I'd like to raise a concern about the project.", "Raise something; rise has no object."], ["Is the council agree to hold a vote?", "Does the council agree to hold a vote?|Would the council agree to hold a vote?|Would the council be willing to hold a vote?", "Agree is a verb: does or would the council agree."]],
      task: ["Your town plans to replace a small park with a car park. Write what you would say at the public meeting: introduce yourself, raise a concern, ask a question and make a proposal.", "Ta ville veut remplacer un petit parc par un parking. Écris ce que tu dirais à la réunion publique : présente-toi, exprime une inquiétude, pose une question et fais une proposition.", "Thank you, Chair. My name is Sam, and I live near the park. I'd like to raise a concern about the plan. Many families use the park every day, and there is no other green space nearby. Could you clarify why this site was chosen? Would the council be willing to consider the empty land behind the station instead?"]
    }
  });

  W.ROLEPLAYS.push(
  { id: "publicmeeting", lesson: 144, level: "C1", icon: "landmark", partner: "Councillor Grant", role: "the chair of a public meeting",
    title: "At a public meeting", title_fr: "En réunion publique",
    setting: "The council wants to build flats on the old sports field. You speak at the public meeting.", setting_fr: "La mairie veut construire des logements sur l'ancien terrain de sport. Tu prends la parole à la réunion publique.",
    turns: [
      { p: "Next, I believe someone at the back would like to speak. Please go ahead.", fr: "Ensuite, je crois que quelqu'un au fond souhaite prendre la parole. Je vous en prie." },
      { y: ["Thank you, Chair. I'd like to raise a concern about the plan for the sports field.", "Yes, so the field, it's a bad idea.", "Thank you, Chair. I'd like to rise a concern about the plan for the sports field."], fr: "Merci, madame la présidente. J'aimerais exprimer une inquiétude au sujet du projet pour le terrain de sport.", why: "Address the chair, then raise (not rise) a concern." },
      { p: "Of course. What exactly is your concern?", fr: "Bien sûr. Quelle est votre inquiétude, exactement ?" },
      { y: ["Many residents are worried that the area will lose its only green space, given that the nearest park is two miles away.", "Green space is finished.", "Many residents are worried that the area will lose its only green space, given the nearest park is at two miles."], fr: "Beaucoup d'habitants craignent que le quartier perde son seul espace vert, étant donné que le parc le plus proche est à trois kilomètres.", why: "Given that + clause. Two miles away." },
      { p: "I understand. However, the town badly needs new housing, especially affordable housing.", fr: "Je comprends. Cependant, la ville a cruellement besoin de nouveaux logements, surtout abordables." },
      { y: ["Nobody disputes that. But could you clarify how many of the flats will actually be affordable?", "Housing is not important.", "Nobody disputes that. But could you clarify how many flats will be actually affordable?"], fr: "Personne ne le conteste. Mais pourriez-vous préciser combien de ces logements seront réellement abordables ?", why: "Acknowledge the point, then ask. Actually goes before the main verb: will actually be." },
      { p: "The current plan includes twenty per cent affordable homes.", fr: "Le projet actuel prévoit vingt pour cent de logements abordables." },
      { y: ["With all due respect, that seems rather low, considering the size of the development.", "That's ridiculous.", "With all due respect, that seems rather low, considering of the size of the development."], fr: "Sauf votre respect, cela paraît assez faible, vu la taille du projet.", why: "Considering + noun, without of." },
      { p: "That's a fair point. Do you have a proposal?", fr: "C'est une remarque juste. Avez-vous une proposition ?" },
      { y: ["Would the council be willing to build on the car park next to the station instead, and keep the field as a park?", "Build somewhere else.", "Would the council be agree to build on the car park next to the station instead, and keep the field as park?"], fr: "La mairie serait-elle prête à construire plutôt sur le parking à côté de la gare, et à garder le terrain comme parc ?", why: "Would the council be willing to…? (not be agree). Keep it as a park." },
      { p: "We'll certainly look into that. Thank you for your contribution.", fr: "Nous allons certainement étudier cela. Merci pour votre intervention." },
      { y: ["Thank you. I'd urge the council to hold a second consultation before any decision is made.", "Thanks. Do a second consultation.", "Thank you. I'd urge the council holding a second consultation before any decision will be made."], fr: "Merci. J'invite instamment la mairie à organiser une deuxième consultation avant toute décision.", why: "Urge someone to do something. Before + present, not will." }
    ] }
  );

  W.READINGS.push({
    id: "fifteenmin", level: "C1", icon: "map", title: "The fifteen-minute city: utopia or threat?", title_fr: "La ville du quart d'heure : utopie ou menace ?", genre: "Feature article",
    intro: "A feature article on an idea that is transforming some cities and dividing opinion. Linking reasons and conditions (given that, now that, in that), and the vocabulary of urban planning and society.",
    intro_fr: "Un article de fond sur une idée qui transforme certaines villes et divise l'opinion. Relier raisons et conditions (given that, now that, in that), et vocabulaire de l'urbanisme et de la société.",
    paragraphs: [
      { en: "Imagine being able to reach almost everything you need in daily life, from the baker's and the doctor's to a school, a park and your workplace, within a quarter of an hour on foot or by bike. For the French-Colombian urbanist Carlos Moreno, who developed the idea of the “fifteen-minute city” at the Sorbonne, this is not a fantasy but a design principle: a way of organising cities around people's time rather than around cars.", fr: "Imagine pouvoir atteindre presque tout ce dont tu as besoin au quotidien, de la boulangerie et du médecin à une école, un parc et ton lieu de travail, en un quart d'heure à pied ou à vélo. Pour l'urbaniste franco-colombien Carlos Moreno, qui a développé l'idée de la « ville du quart d'heure » à la Sorbonne, ce n'est pas une chimère mais un principe de conception : une façon d'organiser les villes autour du temps des gens plutôt qu'autour des voitures." },
      { en: "The concept gained international attention in 2020, when the mayor of Paris, Anne Hidalgo, made it a central promise of her re-election campaign. Since then, the city has added many kilometres of cycle lanes, closed some streets near schools to traffic and encouraged services to move closer to residents. Melbourne, Barcelona and several other cities have adopted similar ideas, often under different names.", fr: "Le concept a attiré l'attention internationale en 2020, quand la maire de Paris, Anne Hidalgo, en a fait une promesse centrale de sa campagne de réélection. Depuis, la ville a ajouté de nombreux kilomètres de pistes cyclables, fermé à la circulation certaines rues proches des écoles et encouragé les services à se rapprocher des habitants. Melbourne, Barcelone et plusieurs autres villes ont adopté des idées semblables, souvent sous d'autres noms." },
      { en: "Supporters argue that the benefits are considerable. Given that transport is one of the largest sources of emissions in most cities, reducing the need for long journeys is an obvious way to cut pollution. Shorter journeys also mean more free time, and neighbourhoods in which people walk tend to be safer and more sociable, in that residents are more likely to know one another.", fr: "Ses partisans estiment que les avantages sont considérables. Étant donné que les transports sont l'une des principales sources d'émissions dans la plupart des villes, réduire le besoin de longs trajets est un moyen évident de diminuer la pollution. Des trajets plus courts, c'est aussi plus de temps libre, et les quartiers où l'on marche ont tendance à être plus sûrs et plus conviviaux, en ce sens que les habitants ont plus de chances de se connaître." },
      { en: "Critics raise two main objections. The first is economic. In many cities, the most desirable, walkable neighbourhoods are already the most expensive, and improving local services can push prices even higher, forcing out the very people the policy is meant to help. The second concerns work: a fifteen-minute city suits office workers who can work from home far better than a nurse or a builder whose workplace is on the other side of town.", fr: "Ses détracteurs formulent deux grandes objections. La première est économique. Dans beaucoup de villes, les quartiers les plus recherchés, où l'on peut tout faire à pied, sont déjà les plus chers, et améliorer les services de proximité peut faire grimper encore les prix, chassant justement les personnes que la politique est censée aider. La seconde concerne le travail : la ville du quart d'heure convient bien mieux aux employés de bureau qui peuvent télétravailler qu'à une infirmière ou à un ouvrier du bâtiment dont le lieu de travail se trouve à l'autre bout de la ville." },
      { en: "More surprisingly, the idea has also become the target of conspiracy theories. In 2023, when the English city of Oxford introduced filters to reduce traffic in certain streets, claims spread online that fifteen-minute cities were a plan to confine people to their neighbourhoods. Around two thousand people protested. Planners pointed out, in vain for some, that nobody was being prevented from going anywhere; the filters simply meant that some car journeys would take longer.", fr: "Plus étonnant, l'idée est aussi devenue la cible de théories du complot. En 2023, quand la ville anglaise d'Oxford a mis en place des filtres pour réduire la circulation dans certaines rues, des affirmations se sont répandues en ligne selon lesquelles les villes du quart d'heure étaient un plan pour confiner les gens dans leur quartier. Environ deux mille personnes ont manifesté. Les urbanistes ont fait remarquer, en vain pour certains, que personne n'était empêché d'aller où que ce soit ; les filtres signifiaient simplement que certains trajets en voiture seraient plus longs." },
      { en: "Perhaps the most balanced view is that the fifteen-minute city is a useful direction rather than a rigid rule. Now that so many cities are rethinking their streets, the real question is not whether people should be able to live close to what they need, but how to achieve it without making those neighbourhoods unaffordable for the people who already live there.", fr: "Le point de vue le plus équilibré est peut-être que la ville du quart d'heure est une direction utile plutôt qu'une règle rigide. Maintenant que tant de villes repensent leurs rues, la vraie question n'est pas de savoir si les gens doivent pouvoir vivre près de ce dont ils ont besoin, mais comment y parvenir sans rendre ces quartiers inabordables pour ceux qui y vivent déjà." }
    ],
    glossary: { "urbanist": "urbaniste", "fantasy": "chimère", "re-election": "réélection", "lanes": "pistes, voies", "sociable": "conviviaux", "objections": "objections", "desirable": "recherchés", "walkable": "où l'on peut tout faire à pied", "forcing": "chassant", "conspiracy": "complot", "confine": "confiner", "filters": "filtres", "planners": "urbanistes", "vain": "vain", "rigid": "rigide" },
    questions: [
      { q: "What is the “fifteen-minute city”?", o: ["A city where buses run every fifteen minutes", "A city where daily needs are within fifteen minutes on foot or by bike", "A city that can be crossed by car in fifteen minutes"], a: 1 },
      { q: "What made the idea internationally famous?", o: ["A promise in the Paris mayor's 2020 campaign", "A law passed in Oxford", "A book by a London architect"], a: 0 },
      { q: "What is the economic objection?", o: ["Cycle lanes cost too much", "Local shops lose customers", "Improving a neighbourhood can make it too expensive for its residents"], a: 2 },
      { q: "What happened in Oxford in 2023?", o: ["Traffic filters were linked to conspiracy theories, and people protested", "The city banned all cars", "The council stopped building cycle lanes"], a: 0 },
      { q: "What does the article present as the most balanced view?", o: ["It's a dangerous plan", "It's a useful direction, not a rigid rule", "It only works in Paris"], a: 1 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-c1-8", unit: "c1-8", level: "C1", icon: "luggage",
    title: "A radio debate: tourists or residents?", title_fr: "Un débat radio : touristes ou habitants ?",
    context: "On a local radio programme, the presenter, Emma, talks to Marc, who runs a café in the old town, and Nadia, who has lived there for thirty years, about short-term rental flats.", context_fr: "Dans une émission de radio locale, l'animatrice, Emma, discute des locations de courte durée avec Marc, qui tient un café dans la vieille ville, et Nadia, qui y vit depuis trente ans.",
    words: [["short-term rentals", "les locations de courte durée"], ["to be torn", "être partagé, hésiter"], ["to top up", "compléter (un revenu)"], ["a pension", "une retraite (pension)"], ["gradually", "progressivement"]],
    lines: [["Emma", "Now that short-term rental flats make up almost one in five homes in the old town, the council is considering a limit. Marc, you run a café there. Where do you stand?", "en-GB"], ["Marc", "Honestly, I'm torn. Given that most of my customers are tourists, I'd be lying if I said they weren't good for business. But my own staff can't afford to live anywhere near the café any more.", "en-US"], ["Emma", "Nadia, you've lived in the old town for thirty years.", "en-GB"], ["Nadia", "I have, and I've watched it change. It's not that I'm against tourists; I travel too. The problem is that a neighbourhood stops being a neighbourhood when half the flats are empty from Monday to Thursday and full of suitcases at the weekend.", "en-IE"], ["Marc", "That's fair. The bakery on my street closed last year, and a souvenir shop opened in its place.", "en-US"], ["Emma", "Supporters of the limit say it would bring flats back onto the rental market. Critics say it would hurt small owners who depend on the income.", "en-GB"], ["Nadia", "It would, in that some people rent out a single flat to top up a small pension. But the council could treat them differently, provided the rules are clear.", "en-IE"], ["Marc", "As long as it's done gradually, I think most businesses could live with it. What we can't live with is a city centre where nobody actually lives.", "en-US"]],
    gist: ["What is being discussed?", ["Whether to limit short-term rental flats in the old town", "How to attract more tourists", "Why the bakery closed"]],
    detail: [["Why is Marc “torn”?", ["Tourists help his business, but his staff can't afford to live nearby.", "He wants to move his café.", "He doesn't like tourists."]], ["What is Nadia's main complaint?", ["Many flats are empty during the week, so the neighbourhood loses its life.", "Tourists are too noisy at night.", "There are too many hotels."]], ["What happened to the bakery on Marc's street?", ["It closed, and a souvenir shop replaced it.", "It moved to a bigger shop.", "It now sells only to tourists."]], ["What does Nadia suggest for small owners?", ["Different, clear rules for them", "No rules at all", "A ban on all rentals"]]],
    decode: ["Given that most of my customers are tourists", "As long as it's done gradually, I think most businesses could live with it."],
    tip: "In a debate, the most interesting opinions are often mixed: I'm torn, it's not that…, it would, in that… Listen for the linkers that add conditions and nuance (given that, provided, as long as): they show where each speaker really stands.", tip_fr: "Dans un débat, les avis les plus intéressants sont souvent nuancés : I'm torn, it's not that…, it would, in that… Guette les liens qui ajoutent des conditions et des nuances (given that, provided, as long as) : ils montrent la vraie position de chacun."
  }]);

  W.PROMPTS.push({ id: "c1-city", level: "C1", q: "Should popular cities limit the number of tourists? What would you do if you were the mayor of one?", fr: "Les villes très touristiques devraient-elles limiter le nombre de visiteurs ? Que ferais-tu si tu en étais la maire ?", time: 120,
    phrases: ["Given that…,", "It's not that I'm against…; it's just that…", "If I were the mayor, I'd…", "provided that…", "The real question is not… but…"],
    model: "Given that tourism brings so much money into some cities, a strict limit could do a lot of damage. It's not that I'm against tourists; it's just that a city has to remain a place where people actually live. If I were the mayor of a very popular city, I'd start by limiting short-term rental flats in the historic centre, provided that people who rent out a single room were treated differently. I'd also introduce a small tourist tax and use the money for local services. The real question is not how many tourists come, but whether the city is still organised around the needs of its residents." });

  W.WRITING_GUIDE["c1-8"] = { genre: "A report (C1 Advanced)", genre_fr: "Un rapport (C1 Advanced)",
    plan: [["Title and introduction: the aim and your sources.", "Titre et introduction : l'objectif et tes sources."], ["What works well, with examples.", "Ce qui fonctionne bien, avec des exemples."], ["Areas of concern.", "Les points préoccupants."], ["Recommendations that follow from your findings.", "Des recommandations qui découlent de tes constats."], ["A short conclusion.", "Une courte conclusion."]],
    marks: [["This report aims to assess", "stating the aim", "annoncer l'objectif"], ["It is based on conversations with residents", "giving the sources", "indiquer les sources"], ["in that most daily needs can be met on foot", "in that: saying exactly how", "in that : dire précisément en quoi"], ["Now that the new health centre has opened", "now that: a new situation", "now that : une situation nouvelle"], ["two problems were mentioned repeatedly", "an impersonal passive", "un passif impersonnel"], ["given that the only playground is on the far side of the main road", "given that: a known fact", "given that : un fait établi"], ["are reluctant to", "a precise, formal adjective", "un adjectif précis et soutenu"], ["In light of these findings, it would be advisable to:", "introducing the recommendations formally", "introduire les recommandations de façon soutenue"], ["None of these measures is costly.", "a reassuring argument", "un argument rassurant"], ["Provided that they are introduced together", "provided that: a condition", "provided that : une condition"]] };

  W.LEXIS["c1-8"] = {
    colloc: [
      ["a housing shortage", "une pénurie de logements", "The city is facing a severe housing shortage.", "shortage", ["lack", "penury"]],
      ["good transport links", "de bonnes liaisons de transport", "The area has good transport links to the city centre.", "links", ["connexions", "relations"]],
      ["widen the gap", "creuser l'écart", "The new policy could widen the gap between rich and poor.", "widen", ["dig", "hollow"]],
      ["tackle a problem", "s'attaquer à un problème", "The council must tackle the problem of empty flats.", "tackle", ["seize", "catch"]],
      ["a sense of community", "un esprit de quartier", "Street parties help to build a sense of community.", "sense", ["meaning", "direction"]],
      ["a run-down area", "un quartier délabré", "The project transformed a run-down area into a lively district.", "run-down", ["broken-down", "worn-off"]],
      ["voice concerns", "exprimer des inquiétudes", "Residents voiced concerns about the noise.", "voiced", ["sounded", "spoke"]],
      ["grant permission", "accorder une autorisation", "The council granted permission for the new building.", "granted", ["borrowed", "lent"]],
      ["meet the needs of", "répondre aux besoins de", "The district doesn't meet the needs of older residents.", "meet", ["respond", "join"]],
      ["rush hour", "l'heure de pointe", "The trains are packed during rush hour.", "rush", ["point", "crowd"]]
    ],
    wf: [
      ["The ___ of the old docks created hundreds of jobs. (DEVELOP)", "development|redevelopment"],
      ["The council's decision was widely seen as ___. (JUSTIFY)", "unjustified|unjustifiable"],
      ["___ is a serious problem in many big cities. (HOME)", "Homelessness"],
      ["The town has a long tradition of ___ towards newcomers. (TOLERATE)", "tolerance"],
      ["The new law aims to reduce ___ between regions. (EQUAL)", "inequality|inequalities"],
      ["The old factory has been ___ into flats. (CONVERSION)", "converted"],
      ["The area is ___ populated, with only a few houses. (SPARSE)", "sparsely"],
      ["Public spaces should be ___ to everyone, including wheelchair users. (ACCESS)", "accessible"]
    ],
    kwt: [
      ["Because rents have doubled, many young people are leaving.", "GIVEN", "___ doubled, many young people are leaving.", "given that rents have|given that the rents have"],
      ["The tram is running now, so fewer people drive.", "THAT", "Now ___, fewer people drive.", "that the tram is running|that the tram's running"],
      ["You can use the hall if you leave it clean.", "LONG", "You can use the hall ___ it clean.", "as long as you leave"],
      ["They will build the park only if the funding arrives.", "CONDITION", "They will build the park ___ the funding arrives.", "on condition that"],
      ["The plan is unfair because it ignores older people.", "THAT", "The plan is unfair ___ older people.", "in that it ignores"],
      ["When you think about the cost, the results are poor.", "CONSIDERING", "___, the results are poor.", "considering the cost"]
    ],
    idioms: [
      ["the haves and the have-nots", "rich people and poor people", "les nantis et les démunis", "The crisis has widened the gap between the haves and the have-nots.", "the haves and the have-nots"],
      ["a level playing field", "a situation that is fair for everyone", "des règles du jeu équitables", "Small shops want a level playing field with the online giants.", "a level playing field"],
      ["bear the brunt of", "suffer the worst part of something", "subir de plein fouet", "Poorer families bear the brunt of rising prices.", "bear the brunt of"],
      ["fall through the cracks", "be missed by a system meant to help you", "passer entre les mailles du filet", "Too many vulnerable people fall through the cracks.", "fall through the cracks"],
      ["not in my back yard", "accepting something useful only if it's not near you", "pas près de chez moi", "Everyone wants more housing, but not in my back yard.", "not in my back yard"],
      ["move in", "start living in a place", "emménager", "Several young families have moved in since the school reopened.", "moved in"],
      ["stand up for", "defend a person or a right", "défendre", "She has always stood up for the rights of tenants.", "stood up for"],
      ["a new lease of life", "a new period of activity or usefulness", "un second souffle", "The market has given the old square a new lease of life.", "a new lease of life"]
    ]
  };

  /* The unit, after Natural speech; the society and city themes and two texts move here. */
  const move = (from, key, ids) => { const u = W.COURSE.find((x) => x.id === from); if (u) u[key] = (u[key] || []).filter((x) => !ids.includes(x)); };
  move("c1-4", "vocab", ["urbanC1"]); move("c1-3", "vocab", ["globalC1"]); move("c1-5", "vocab", ["rightsC1", "ethics"]); move("c1-5", "extra", ["overtourism"]); move("c1-2", "extra", ["basicincome"]);
  const unit = { id: "c1-8", level: "C1", icon: "building-2", title: "Cities and society", title_fr: "Villes et société",
    intro: "Housing, tourism, transport, rights: the way we organise our cities reflects the kind of society we want. In this unit, you'll link ideas with precision (given that, now that, in that), speak up at a public meeting, read about the fifteen-minute city and write a formal report for a council.",
    intro_fr: "Logement, tourisme, transports, droits : la façon dont nous organisons nos villes reflète la société que nous voulons. Dans cette unité, tu relieras tes idées avec précision (given that, now that, in that), tu prendras la parole en réunion publique, tu liras un article sur la ville du quart d'heure et tu rédigeras un rapport formel pour une mairie.",
    can: ["Link reasons and conditions precisely (given that, now that, in that, on condition that)", "Raise a concern, ask for clarification and make a proposal at a public meeting", "Understand a feature article and a radio debate about cities", "Write a formal report with recommendations"],
    can_fr: ["Relier raisons et conditions avec précision (given that, now that, in that, on condition that)", "Exprimer une inquiétude, demander des précisions et faire une proposition en réunion publique", "Comprendre un article de fond et un débat radio sur la ville", "Rédiger un rapport formel avec des recommandations"],
    lessons: [143, 144], vocab: ["urbanC1", "globalC1", "rightsC1", "ethics"], reading: "fifteenmin", extra: ["overtourism", "basicincome"], prompt: "c1-city",
    writing: { task: "The city council wants to know how well your neighbourhood meets the needs of different residents. Write a report (220-260 words) for the council: describe what works well and what doesn't, and make recommendations.", task_fr: "La mairie veut savoir dans quelle mesure ton quartier répond aux besoins de ses différents habitants. Rédige un rapport (220-260 mots) pour la mairie : décris ce qui fonctionne bien et ce qui ne fonctionne pas, et fais des recommandations.", words: "220-260",
      tips: ["This report aims to…", "Overall, the area is…, in that…", "Given that…,", "In light of these findings, it would be advisable to…", "Provided that…, these measures would…"],
      checklist: ["I used a title and headings", "I covered what works well and what doesn't", "My recommendations follow from my findings", "I used at least two linkers from the unit (given that, now that, in that, provided that…)", "I stayed between 220 and 260 words"],
      model: "Report on the needs of residents in the Riverside district\n\nIntroduction\nThis report aims to assess how well the Riverside district meets the needs of its residents, with particular attention to older people and young families. It is based on conversations with residents and local businesses.\n\nWhat works well\nOverall, the district is an attractive place to live, in that most daily needs can be met on foot. Now that the new health centre has opened, residents no longer have to travel to the city centre to see a doctor. The weekly market is also popular with all age groups.\n\nAreas of concern\nHowever, two problems were mentioned repeatedly. Firstly, given that the only playground is on the far side of the main road, many parents are reluctant to let their children go there alone. Secondly, older residents complained about the lack of benches and public toilets, which makes even short walks difficult for some of them.\n\nRecommendations\nIn light of these findings, it would be advisable to:\n• install a pedestrian crossing with traffic lights near the playground;\n• place benches every two hundred metres along the main street;\n• reopen the public toilets in the market square, which have been closed since last year.\n\nConclusion\nNone of these measures is costly. Provided that they are introduced together, they would make the district noticeably safer and more welcoming for the residents who currently find it hardest to get around." } };
  W.COURSE.splice(W.COURSE.findIndex((u) => u.id === "c1-4"), 0, unit);
})();
