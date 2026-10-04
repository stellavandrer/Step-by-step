/* Unité C1 « Energy and the future » (c1-10), complète : leçons 147-148 et leurs exercices, texte, atelier d'écoute,
   jeu de rôle, sujet d'oral, guide d'écriture et atelier de langue. Elle regroupe environmentC1 et energyC1 (venus de
   c1-5), changeC1 (venu de c1-4) et le texte « repair » (venu de c1-5).
   Personnes, agence, maison et documentaire fictifs. Faits vérifiés : les bâtiments représentent environ 30 % de
   l'énergie utilisée dans le monde ; une pompe à chaleur bien installée fournit trois à quatre unités de chaleur par
   unité d'électricité ; paradoxe de Jevons (1865, machines à vapeur plus efficaces et consommation de charbon en
   hausse) ; l'isolation des combles est l'une des améliorations les moins chères. */
(function () {
  const W = window;

  W.LESSONS.push(
  {
    id: 147, after: 51, level: "C1", icon: "hourglass",
    title: "You'll have heard the news: will for assumptions, and the future perfect continuous", title_fr: "You'll have heard the news : will pour supposer, et le futur antérieur progressif",
    subtitle: "Use will to make confident guesses about the present and the past, and say how long something will have been going on.", subtitle_fr: "Utiliser will pour faire des suppositions assurées sur le présent et le passé, et dire depuis combien de temps quelque chose durera à un moment donné.",
    body: `
<h2>Will for assumptions about now</h2>
<p><s-en>Will</s-en> isn't only for the future. It can express a confident guess about the present, based on what you know.</p>
<p><s-en>The doorbell! That'll be the delivery.</s-en> · <s-en>Don't call her now: she'll be asleep.</s-en> · <s-en>You'll be tired after your journey.</s-en></p>
<h2>Will have for assumptions about the past</h2>
<p><s-en>will have</s-en> + past participle: a confident guess about something that has probably already happened.</p>
<p><s-en>You'll have heard the news.</s-en> (I'm sure you've heard it.) · <s-en>They'll have arrived by now.</s-en> · <s-en>As many of you will have noticed, prices have risen.</s-en></p>
<h2>The future perfect continuous: how long, at a point in the future</h2>
<p><s-en>will have been</s-en> + -ing: the duration of an activity up to a point in the future.</p>
<p><s-en>By 2030, the plant will have been producing energy for fifty years.</s-en> · <s-en>Next month, I'll have been working here for ten years.</s-en></p>
<p>Compare: <s-en>By June, they will have installed 200 panels.</s-en> (a result) · <s-en>By June, they will have been installing panels for a year.</s-en> (a duration)</p>
<div class="tip">In speeches and formal writing, <s-en>as you will have noticed</s-en> or <s-en>as you will know</s-en> is a polite way to mention something the audience probably knows already.</div>
`,
    body_fr: `
<h2>Will pour une supposition sur le présent</h2>
<p><s-en>Will</s-en> ne sert pas qu'au futur. Il peut exprimer une supposition assurée sur le présent, à partir de ce que tu sais.</p>
<p><s-en>The doorbell! That'll be the delivery.</s-en> (la sonnette ! ça doit être la livraison) · <s-en>Don't call her now: she'll be asleep.</s-en> (ne l'appelle pas maintenant : elle doit dormir) · <s-en>You'll be tired after your journey.</s-en> (tu dois être fatiguée après ton voyage)</p>
<h2>Will have pour une supposition sur le passé</h2>
<p><s-en>will have</s-en> + participe passé : une supposition assurée sur quelque chose qui a sans doute déjà eu lieu.</p>
<p><s-en>You'll have heard the news.</s-en> (tu as sûrement appris la nouvelle) · <s-en>They'll have arrived by now.</s-en> (ils doivent être arrivés, maintenant) · <s-en>As many of you will have noticed, prices have risen.</s-en> (comme beaucoup d'entre vous l'auront remarqué…)</p>
<h2>Le futur antérieur progressif : la durée, à un moment du futur</h2>
<p><s-en>will have been</s-en> + -ing : la durée d'une activité jusqu'à un moment futur.</p>
<p><s-en>By 2030, the plant will have been producing energy for fifty years.</s-en> (en 2030, la centrale produira de l'énergie depuis cinquante ans) · <s-en>Next month, I'll have been working here for ten years.</s-en> (le mois prochain, ça fera dix ans que je travaille ici)</p>
<p>Compare : <s-en>By June, they will have installed 200 panels.</s-en> (un résultat) · <s-en>By June, they will have been installing panels for a year.</s-en> (une durée)</p>
<div class="tip">Dans les discours et à l'écrit soutenu, <s-en>as you will have noticed</s-en> ou <s-en>as you will know</s-en> est une façon polie d'évoquer ce que le public sait sans doute déjà.</div>
`,
    examples: [
      ["The doorbell! That'll be the delivery.", "La sonnette ! Ça doit être la livraison."],
      ["Don't call her now: she'll be asleep.", "Ne l'appelle pas maintenant : elle doit dormir."],
      ["You'll have heard the news about the power plant.", "Tu as sûrement appris la nouvelle au sujet de la centrale."],
      ["As many of you will have noticed, energy bills have risen.", "Comme beaucoup d'entre vous l'auront remarqué, les factures d'énergie ont augmenté."],
      ["By 2030, the plant will have been producing energy for fifty years.", "En 2030, la centrale produira de l'énergie depuis cinquante ans."],
      ["Next month, I'll have been living here for ten years.", "Le mois prochain, ça fera dix ans que je vis ici."],
      ["By June, they will have installed two hundred solar panels.", "D'ici juin, ils auront installé deux cents panneaux solaires."]
    ],
    quiz: [
      { q: "Someone's at the door. ___ the plumber.", q_fr: "Complète : « Someone's at the door. ___ the plumber. »", o: ["That'll be", "That will have", "That's being"], a: 0, ex: "That'll be… = a confident guess about now.", ex_fr: "That'll be… = une supposition assurée sur le présent." },
      { q: "You ___ about the new tax: it was on every channel.", q_fr: "Complète : « You ___ about the new tax: it was on every channel. »", o: ["will hear", "'ll be hearing", "'ll have heard"], a: 2, ex: "will have + past participle = an assumption about the past.", ex_fr: "will have + participe passé = une supposition sur le passé." },
      { q: "By December, we ___ on this project for two years.", q_fr: "Complète : « By December, we ___ on this project for two years. »", o: ["will work", "will have been working", "have worked"], a: 1, ex: "Duration up to a future point: will have been + -ing.", ex_fr: "Une durée jusqu'à un moment futur : will have been + -ing." },
      { q: "As you ___, the meeting has been moved to Friday.", q_fr: "Complète : « As you ___, the meeting has been moved to Friday. »", o: ["will know", "are knowing", "know will"], a: 0, ex: "As you will know… = a polite way to mention what people already know.", ex_fr: "As you will know… = une façon polie d'évoquer ce que les gens savent déjà." },
      { q: "By 2035, the city ___ all its old street lights.", q_fr: "Complète : « By 2035, the city ___ all its old street lights. »", o: ["replaces", "will have replaced", "is replacing"], a: 1, ex: "A result completed before a future point: will have + past participle.", ex_fr: "Un résultat accompli avant un moment futur : will have + participe passé." }
    ]
  },
  {
    id: 148, after: 51, level: "C1", kind: "functional", icon: "file-signature",
    title: "Everyday English: making a formal complaint", title_fr: "Anglais pratique : faire une réclamation formelle",
    subtitle: "Complain in writing or on the phone, firmly and politely, and make it clear what you expect to happen next.", subtitle_fr: "Se plaindre par écrit ou au téléphone, fermement et poliment, et dire clairement ce que tu attends.",
    body: `
<h2>Opening</h2>
<p><s-en>I am writing to complain about…</s-en> · <s-en>I am writing to draw your attention to…</s-en> · <s-en>I'm calling about an ongoing problem with…</s-en></p>
<h2>Explaining the problem: facts, dates, consequences</h2>
<p><s-en>Since 3 March, the heating has broken down four times.</s-en> · <s-en>Despite two previous calls, the problem has not been resolved.</s-en> · <s-en>As a result, I have had to…</s-en></p>
<h2>Saying what you expect</h2>
<p><s-en>I would be grateful if you could…</s-en> · <s-en>I would therefore ask you to…</s-en> · <s-en>I expect the problem to be fixed by…</s-en> · <s-en>I would appreciate a written reply within fourteen days.</s-en></p>
<h2>If nothing happens: firm, not aggressive</h2>
<p><s-en>Failing that, I will have no option but to…</s-en> · <s-en>If I do not hear from you by…, I will take the matter further.</s-en> · <s-en>I trust that this matter will be dealt with promptly.</s-en></p>
<div class="tip">An effective complaint is calm, factual and specific: dates, reference numbers, what has already been done, and exactly what you want. Anger makes you easier to ignore; precision makes you harder to ignore. And a false friend: "une réclamation" is <s-en>a complaint</s-en>, never <s-en>a reclamation</s-en>.</div>
`,
    body_fr: `
<h2>Ouvrir</h2>
<p><s-en>I am writing to complain about…</s-en> (je vous écris pour me plaindre de…) · <s-en>I am writing to draw your attention to…</s-en> (je vous écris pour attirer votre attention sur…) · <s-en>I'm calling about an ongoing problem with…</s-en> (j'appelle au sujet d'un problème persistant avec…)</p>
<h2>Exposer le problème : faits, dates, conséquences</h2>
<p><s-en>Since 3 March, the heating has broken down four times.</s-en> (depuis le 3 mars, le chauffage est tombé en panne quatre fois) · <s-en>Despite two previous calls, the problem has not been resolved.</s-en> (malgré deux appels, le problème n'a pas été résolu) · <s-en>As a result, I have had to…</s-en> (en conséquence, j'ai dû…)</p>
<h2>Dire ce que tu attends</h2>
<p><s-en>I would be grateful if you could…</s-en> (je vous serais reconnaissante de…) · <s-en>I would therefore ask you to…</s-en> (je vous demande donc de…) · <s-en>I expect the problem to be fixed by…</s-en> (j'attends que le problème soit réglé d'ici…) · <s-en>I would appreciate a written reply within fourteen days.</s-en> (je souhaiterais une réponse écrite sous quatorze jours)</p>
<h2>S'il ne se passe rien : ferme, pas agressive</h2>
<p><s-en>Failing that, I will have no option but to…</s-en> (à défaut, je n'aurai pas d'autre choix que de…) · <s-en>If I do not hear from you by…, I will take the matter further.</s-en> (sans réponse de votre part d'ici…, je donnerai suite) · <s-en>I trust that this matter will be dealt with promptly.</s-en> (je ne doute pas que cette affaire sera traitée rapidement)</p>
<div class="tip">Une réclamation efficace est calme, factuelle et précise : dates, numéros de référence, ce qui a déjà été fait, et exactement ce que tu veux. La colère rend plus facile à ignorer ; la précision rend plus difficile à ignorer. Et un faux ami : une réclamation se dit <s-en>a complaint</s-en>, jamais <s-en>a reclamation</s-en>.</div>
`,
    examples: [
      ["I am writing to complain about the repeated failure of the heating.", "Je vous écris pour me plaindre des pannes répétées du chauffage."],
      ["Despite two previous calls, the problem has not been resolved.", "Malgré deux appels, le problème n'a pas été résolu."],
      ["As a result, I have had to buy two electric heaters.", "En conséquence, j'ai dû acheter deux radiateurs électriques."],
      ["I would be grateful if you could send an engineer this week.", "Je vous serais reconnaissante d'envoyer un technicien cette semaine."],
      ["I would appreciate a written reply within fourteen days.", "Je souhaiterais une réponse écrite sous quatorze jours."],
      ["Failing that, I will have no option but to contact the ombudsman.", "À défaut, je n'aurai pas d'autre choix que de saisir le médiateur."],
      ["I trust that this matter will be dealt with promptly.", "Je ne doute pas que cette affaire sera traitée rapidement."]
    ],
    quiz: [
      { q: "The best opening for a formal complaint:", q_fr: "La meilleure ouverture pour une réclamation formelle :", o: ["Hi, your service is terrible.", "I am writing to complain about…", "I make a reclamation about…"], a: 1, ex: "I am writing to complain about… is formal and clear.", ex_fr: "I am writing to complain about… est formel et clair." },
      { q: "“Failing that, I will have no option but to…” means:", q_fr: "« Failing that, I will have no option but to… » veut dire :", o: ["If you don't do it, I will have to…", "I failed, so…", "I have no options at all."], a: 0, ex: "Failing that = if that doesn't happen.", ex_fr: "Failing that = à défaut." },
      { q: "Which detail makes a complaint more effective?", q_fr: "Quel détail rend une réclamation plus efficace ?", o: ["Capital letters", "Insults", "Dates and reference numbers"], a: 2, ex: "Precise facts are hard to ignore.", ex_fr: "Des faits précis sont difficiles à ignorer." },
      { q: "I would be grateful if you ___ the problem.", q_fr: "Complète : « I would be grateful if you ___ the problem. »", o: ["could fix", "will fix", "fixing"], a: 0, ex: "would be grateful if + could / would.", ex_fr: "would be grateful if + could / would." },
      { q: "“Une réclamation” in English is:", q_fr: "« Une réclamation » se dit en anglais :", o: ["a reclamation", "a complaint", "a claiming"], a: 1, ex: "A reclamation is the act of reclaiming land, for example.", ex_fr: "A reclamation, c'est par exemple la récupération de terres." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    147: {
      gap: [["Don't phone him now: he'll ___ at work. (être, supposition)", "be"], ["You'll ___ heard that the factory is closing. (avoir, supposition)", "have"], ["By May, I'll have been ___ here for five years. (travailler)", "working"], ["By the end of the year, they will ___ finished the bridge. (avoir)", "have"]],
      fix: [["By next year, I will work here for ten years.", "By next year, I will have worked here for ten years.|By next year, I will have been working here for ten years.|By next year, I'll have been working here for ten years.", "A duration up to a future point: will have (been) + past participle or -ing."], ["You will hear the news yesterday.", "You'll have heard the news yesterday.|You will have heard the news yesterday.", "An assumption about the past: will have + past participle."]],
      task: ["Write four sentences with will for assumptions: two about now, one about the past (will have), and one with the future perfect continuous.", "Écris quatre phrases avec will pour faire des suppositions : deux sur le présent, une sur le passé (will have) et une au futur antérieur progressif.", "It's eight o'clock, so the shops will be closed. My sister will be on the train by now. You'll have seen the photos of the floods. By next summer, we'll have been living in this flat for five years."]
    },
    148: {
      gap: [["I am writing to ___ about the delay. (me plaindre)", "complain"], ["I would be ___ if you could reply this week. (reconnaissant)", "grateful"], ["___ that, I will contact a lawyer. (à défaut)", "Failing"], ["Despite two calls, the problem has not been ___. (résolu)", "resolved|solved|fixed"]],
      fix: [["I would be grateful if you will repair it.", "I would be grateful if you could repair it.|I would be grateful if you would repair it.", "Would be grateful if + could or would."], ["I want to make a reclamation about my bill.", "I want to make a complaint about my bill.|I would like to make a complaint about my bill.", "Une réclamation = a complaint."]],
      task: ["Your energy supplier has charged you twice for the same month, and two phone calls have changed nothing. Write the main paragraph of a formal complaint: the facts, what you expect, and what you'll do if nothing happens.", "Ton fournisseur d'énergie t'a facturé deux fois le même mois, et deux appels n'ont rien changé. Écris le paragraphe principal d'une réclamation formelle : les faits, ce que tu attends et ce que tu feras s'il ne se passe rien.", "I am writing to complain about my bill for March, which was charged twice on 2 April. Despite two calls to your customer service, on 5 and 12 April, the money has not been refunded. I would be grateful if you could refund the full amount within fourteen days. Failing that, I will have no option but to take the matter to the energy ombudsman."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "heatingcall", lesson: 148, level: "C1", icon: "phone-call", partner: "Paul", role: "a letting agent",
    title: "Calling about the heating", title_fr: "Appeler au sujet du chauffage",
    setting: "The heating in your rented flat has broken down three times this winter. You call the letting agency.", setting_fr: "Le chauffage de ton appartement en location est tombé en panne trois fois cet hiver. Tu appelles l'agence.",
    turns: [
      { p: "Good morning, Riverside Lettings, Paul speaking. How can I help?", fr: "Bonjour, Riverside Lettings, Paul à l'appareil. Que puis-je pour vous ?" },
      { y: ["Good morning. I'm calling about an ongoing problem with the heating in my flat, at 14 Mill Road.", "Hello. The heating is broken again!", "Good morning. I call about a problem ongoing with the heating of my flat."], fr: "Bonjour. J'appelle au sujet d'un problème persistant avec le chauffage de mon appartement, au 14 Mill Road.", why: "I'm calling about… (present continuous). An ongoing problem: the adjective comes before the noun." },
      { p: "I see. What seems to be the problem exactly?", fr: "Je vois. Quel est le problème, exactement ?" },
      { y: ["It has broken down three times since December. Despite two previous calls, it still hasn't been properly repaired.", "It's always broken.", "It has broken down three times since December. Despite of two previous calls, it still hasn't been properly repaired."], fr: "Il est tombé en panne trois fois depuis décembre. Malgré deux appels, il n'a toujours pas été réparé correctement.", why: "Despite + noun, without of." },
      { p: "I'm sorry to hear that. An engineer will have looked at it last time, though?", fr: "Je suis désolé. Un technicien l'aura bien examiné la dernière fois, non ?" },
      { y: ["He did, but only for ten minutes. As a result, I've had to use electric heaters, which has doubled my bill.", "Yes, but bad engineer.", "He did, but only for ten minutes. As a result, I've had to use electric heaters, what has doubled my bill."], fr: "Oui, mais seulement dix minutes. Du coup, j'ai dû utiliser des radiateurs électriques, ce qui a doublé ma facture.", why: "Which (not what) refers back to the whole idea." },
      { p: "I understand. I'll try to book someone for next month.", fr: "Je comprends. Je vais essayer de faire venir quelqu'un le mois prochain." },
      { y: ["I'm afraid next month isn't acceptable. I'd be grateful if you could send someone this week.", "No! Now!", "I'm afraid next month isn't acceptable. I'd be grateful if you will send someone this week."], fr: "Je regrette, mais le mois prochain n'est pas acceptable. Je vous serais reconnaissante d'envoyer quelqu'un cette semaine.", why: "I'd be grateful if you could…, never if you will." },
      { p: "I'll see what I can do, but I can't promise anything.", fr: "Je vais voir ce que je peux faire, mais je ne peux rien promettre." },
      { y: ["I appreciate that. But if it isn't fixed by Friday, I'll have no option but to put my complaint in writing.", "Then I stop paying.", "I appreciate. But if it won't be fixed by Friday, I'll have no option than to put my complaint in writing."], fr: "Je comprends. Mais si ce n'est pas réparé d'ici vendredi, je n'aurai pas d'autre choix que de faire une réclamation écrite.", why: "Appreciate needs an object: I appreciate that. If + present. No option but to." },
      { p: "Understood. I'll call you back this afternoon with a time.", fr: "Entendu. Je vous rappelle cet après-midi avec un horaire." },
      { y: ["Thank you. Could you also confirm the appointment by email, please?", "OK.", "Thank you. Could you also confirm me the appointment by email, please?"], fr: "Merci. Pourriez-vous aussi me confirmer le rendez-vous par e-mail, s'il vous plaît ?", why: "Confirm something (to someone), never confirm someone something." }
    ] }
  );

  W.READINGS.push({
    id: "efficiency", level: "C1", icon: "zap", title: "The cleanest energy is the energy we don't use", title_fr: "L'énergie la plus propre est celle qu'on n'utilise pas", genre: "Feature article",
    intro: "A feature article on the least visible climate solution. Will for assumptions and the future perfect, cause and effect, and the vocabulary of energy.",
    intro_fr: "Un article de fond sur la solution climatique la moins visible. Will pour les suppositions et le futur antérieur, cause et conséquence, et vocabulaire de l'énergie.",
    paragraphs: [
      { en: "When people talk about tackling climate change, the conversation usually turns to new technology: wind farms, solar panels, electric cars, perhaps one day fusion power. Far less glamorous, and far less discussed, is the energy that never needs to be produced at all, because it is not wasted in the first place. Yet many experts argue that this “invisible” energy is the cheapest and fastest resource we have.", fr: "Quand on parle de lutter contre le changement climatique, la conversation se tourne en général vers les nouvelles technologies : éoliennes, panneaux solaires, voitures électriques, peut-être un jour la fusion nucléaire. Bien moins séduisante, et bien moins discutée, est l'énergie qu'il n'est jamais nécessaire de produire, parce qu'elle n'est tout simplement pas gaspillée. Pourtant, beaucoup d'experts estiment que cette énergie « invisible » est la ressource la moins chère et la plus rapide dont nous disposions." },
      { en: "Consider buildings. Heating, cooling and lighting them accounts for roughly 30 per cent of the energy used worldwide. In countries with older housing, much of that energy simply escapes through badly insulated roofs, walls and windows. By the end of a long winter, a large share of the warmth produced in a typical old house will have been lost to the street outside. Insulating it is unexciting work, but the savings begin on the first cold day and continue for decades.", fr: "Prenons les bâtiments. Les chauffer, les refroidir et les éclairer représente environ 30 % de l'énergie utilisée dans le monde. Dans les pays où les logements sont anciens, une grande partie de cette énergie s'échappe tout simplement par des toits, des murs et des fenêtres mal isolés. À la fin d'un long hiver, une bonne part de la chaleur produite dans une vieille maison ordinaire aura été perdue dans la rue. Isoler n'a rien d'exaltant, mais les économies commencent dès le premier jour de froid et durent des décennies." },
      { en: "Then there are heat pumps, which work rather like a fridge in reverse, extracting heat from the outside air or the ground and moving it indoors. Because they move heat rather than generate it, a well-installed heat pump can deliver three or four units of heat for every unit of electricity it uses. Combined with good insulation, heat pumps can cut a home's energy use dramatically, although the upfront cost remains a serious obstacle for many households.", fr: "Il y a ensuite les pompes à chaleur, qui fonctionnent un peu comme un réfrigérateur à l'envers : elles extraient la chaleur de l'air extérieur ou du sol et la transportent à l'intérieur. Comme elles déplacent la chaleur au lieu de la produire, une pompe à chaleur bien installée peut fournir trois ou quatre unités de chaleur pour chaque unité d'électricité consommée. Associées à une bonne isolation, elles peuvent réduire considérablement la consommation d'un logement, même si le coût initial reste un obstacle sérieux pour beaucoup de foyers." },
      { en: "Efficiency has a complicated history, however. In 1865, the English economist William Stanley Jevons noticed something paradoxical: as steam engines became more efficient at using coal, Britain's total coal consumption rose rather than fell, because cheaper energy made new uses profitable. Economists still debate how large this “rebound effect” is today. Most believe it does not cancel out the benefits of efficiency, but it does mean that savings on paper are not always savings in practice.", fr: "L'efficacité a pourtant une histoire compliquée. En 1865, l'économiste anglais William Stanley Jevons a remarqué quelque chose de paradoxal : à mesure que les machines à vapeur utilisaient le charbon plus efficacement, la consommation totale de charbon du Royaume-Uni augmentait au lieu de baisser, parce qu'une énergie moins chère rendait de nouveaux usages rentables. Les économistes débattent encore aujourd'hui de l'ampleur de cet « effet rebond ». La plupart pensent qu'il n'annule pas les bénéfices de l'efficacité, mais il signifie que les économies sur le papier ne sont pas toujours des économies dans les faits." },
      { en: "That is why many experts argue that efficiency works best as part of a broader approach, which some call “sufficiency”: not only using energy better, but asking how much we really need. A smaller, well-insulated flat near public transport may achieve more than a large, high-tech house that depends on a car. Repairing a machine rather than replacing it saves the energy that would have gone into making a new one.", fr: "C'est pourquoi beaucoup d'experts estiment que l'efficacité fonctionne mieux au sein d'une approche plus large, que certains appellent la « sobriété » : non seulement mieux utiliser l'énergie, mais se demander de combien nous avons vraiment besoin. Un appartement plus petit et bien isolé près des transports en commun peut faire mieux qu'une grande maison high-tech qui dépend de la voiture. Réparer un appareil plutôt que le remplacer économise l'énergie qu'aurait demandée la fabrication d'un neuf." },
      { en: "None of this will replace the need for clean electricity. But by the time today's children are adults, the buildings we renovate now will have been saving energy for twenty years or more. In the race to cut emissions, the least visible solutions may turn out to be among the most effective.", fr: "Rien de tout cela ne remplacera le besoin d'une électricité propre. Mais quand les enfants d'aujourd'hui seront adultes, les bâtiments que nous rénovons maintenant économiseront de l'énergie depuis vingt ans ou plus. Dans la course à la réduction des émissions, les solutions les moins visibles pourraient bien se révéler parmi les plus efficaces." }
    ],
    glossary: { "tackling": "lutter contre", "glamorous": "séduisante", "wasted": "gaspillée", "resource": "ressource", "escapes": "s'échappe", "insulated": "isolés", "warmth": "chaleur", "decades": "décennies", "reverse": "inverse", "extracting": "extrayant", "upfront": "initial", "households": "foyers", "paradoxical": "paradoxal", "profitable": "rentables", "sufficiency": "sobriété", "renovate": "rénovons" },
    questions: [
      { q: "What is the “invisible” energy the article talks about?", o: ["Energy that is never wasted, so it never needs to be produced", "Solar power at night", "Nuclear fusion"], a: 0 },
      { q: "Why do many old houses use so much energy for heating?", o: ["They have more rooms", "Much of the heat escapes through roofs, walls and windows", "They are always heated with gas"], a: 1 },
      { q: "Why can heat pumps be so efficient?", o: ["They burn less gas", "They only work in summer", "They move heat rather than generate it"], a: 2 },
      { q: "What did Jevons notice in 1865?", o: ["More efficient steam engines led to more coal being used", "Coal was running out", "Steam engines were dangerous"], a: 0 },
      { q: "What is “sufficiency”?", o: ["Producing more energy", "Asking how much energy we really need", "Using only solar power"], a: 1 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-c1-10", unit: "c1-10", level: "C1", icon: "house",
    title: "A home energy assessment", title_fr: "Un bilan énergétique à domicile",
    context: "An energy adviser, Rita, visits Tom's 1960s house and tells him what to improve first.", context_fr: "Une conseillère en énergie, Rita, visite la maison des années 1960 de Tom et lui dit quoi améliorer en priorité.",
    words: [["the loft", "les combles, le grenier"], ["insulation", "l'isolation"], ["a draught", "un courant d'air"], ["to pay for itself", "être vite rentabilisé"], ["a grant", "une subvention, une aide"]],
    lines: [["Rita", "Right, I've had a look at the loft. I'm afraid you'll have been losing a lot of heat through the roof: the insulation up there is only a few centimetres thick.", "en-IE"], ["Tom", "That doesn't surprise me. The house was built in the sixties, and I don't think anyone's touched the roof since.", "en-GB"], ["Rita", "That'll be why your bills are so high. The good news is that loft insulation is one of the cheapest improvements you can make. It usually pays for itself within a few years.", "en-IE"], ["Tom", "And the windows? My neighbour keeps telling me to replace them.", "en-GB"], ["Rita", "Honestly, I'd do the roof and the walls first. New windows make a difference, but they're expensive, and you'll get more for your money elsewhere. What I would do now is fix the draughts around the doors: that's an afternoon's work.", "en-IE"], ["Tom", "What about a heat pump? I've read a lot about them.", "en-GB"], ["Rita", "They can work very well, but only in a house that holds its heat. If you put one in now, it'll be fighting against all those leaks. Insulate first, then think about the heat pump.", "en-IE"], ["Tom", "Makes sense. So, roughly, what are we talking about?", "en-GB"], ["Rita", "I'll send you a full report by Friday, with the costs and the grants you might be entitled to. Once you've done the roof and the doors, you should notice the difference on your next winter bill.", "en-IE"]],
    gist: ["Why is Rita visiting Tom's house?", ["To advise him on saving energy", "To sell him new windows", "To repair his roof"]],
    detail: [["What has Rita found in the loft?", ["Very thin insulation", "A leak in the roof", "A broken heat pump"]], ["What does Rita think about replacing the windows?", ["It's not the first priority.", "It's the most urgent job.", "It's free."]], ["What can Tom do quickly?", ["Fix the draughts around the doors", "Install a heat pump", "Rebuild the walls"]], ["Why does Rita advise against a heat pump for now?", ["The house loses too much heat.", "Heat pumps don't work in old houses.", "They are too noisy."]], ["What will Rita send by Friday?", ["A report with costs and possible grants", "An invoice", "A new contract"]]],
    decode: ["you'll have been losing a lot of heat through the roof", "That'll be why your bills are so high."],
    tip: "Experts often make confident guesses with will: you'll have been losing heat, that'll be why… These aren't predictions about the future: they're conclusions about the present or the past, based on evidence.", tip_fr: "Les spécialistes font souvent des suppositions assurées avec will : you'll have been losing heat, that'll be why… Ce ne sont pas des prédictions : ce sont des conclusions sur le présent ou le passé, fondées sur des indices."
  }]);

  W.PROMPTS.push({ id: "c1-energy", level: "C1", q: "What changes are you willing to make for the planet, and which ones would you find really hard?", fr: "Quels changements es-tu prête à faire pour la planète, et lesquels te seraient vraiment difficiles ?", time: 120,
    phrases: ["I'd have no problem with…", "What I'd find really hard is…", "Given that…,", "It's not so much… as…", "By the time…, I'll have…"],
    model: "I'd have no problem with taking the train instead of the plane for most holidays in Europe, or with eating much less meat. What I'd find really hard is giving up travelling further away altogether: some places simply can't be reached by train. Given that my flat is badly insulated, I suspect the biggest difference I could make is actually at home, not on holiday. It's not so much about one big sacrifice as about lots of small, boring decisions. By the time I'm sixty, I'll have made thousands of them, so they'd better be the right ones!" });

  W.WRITING_GUIDE["c1-10"] = { genre: "A review (C1 Advanced)", genre_fr: "Une critique (C1 Advanced)",
    plan: [["A title and an opening that sets the context.", "Un titre et une ouverture qui posent le contexte."], ["What the work is about: the essentials only.", "De quoi parle l'œuvre : l'essentiel seulement."], ["Its strengths, with a precise example.", "Ses points forts, avec un exemple précis."], ["Its weaknesses, fairly.", "Ses faiblesses, avec justesse."], ["A verdict and a recommendation for a specific audience.", "Un verdict et une recommandation pour un public précis."]],
    marks: [["a documentary that warms slowly", "a title with a play on words", "un titre avec un jeu de mots"], ["As anyone who has tried to follow the debate on energy will know", "will for an assumption, to involve the reader", "will pour une supposition, qui implique le lecteur"], ["manages to avoid both traps, at least most of the time", "a nuanced first judgement", "un premier jugement nuancé"], ["Rather than lecturing its audience, it lets them speak for themselves", "praise through a contrast", "un éloge par contraste"], ["both funny and quietly triumphant", "precise, balanced adjectives", "des adjectifs précis et équilibrés"], ["Where the documentary is less convincing is in its final half-hour.", "a cleft sentence to introduce the weakness", "une phrase clivée pour amener le point faible"], ["Having built its argument so patiently", "a perfect participle", "un participe composé"], ["will have meant little to most viewers", "will have: an assumption about the past", "will have : une supposition sur le passé"], ["would have been far more effective", "a constructive criticism", "une critique constructive"], ["Nevertheless,", "turning to the verdict", "passer au verdict"], ["I would recommend it to anyone who suspects that", "a precise recommendation", "une recommandation précise"]] };

  W.LEXIS["c1-10"] = {
    colloc: [
      ["cut emissions", "réduire les émissions", "The country has promised to cut emissions by half.", "cut", ["break", "slice"]],
      ["harness the power of", "exploiter la force de", "Engineers are trying to harness the power of the tides.", "harness", ["saddle", "chain"]],
      ["meet a target", "atteindre un objectif", "Few countries are on track to meet their climate targets.", "meet", ["touch", "join"]],
      ["take drastic measures", "prendre des mesures radicales", "Governments will have to take drastic measures.", "drastic", ["drastical", "draconic"]],
      ["energy-efficient", "économe en énergie", "We've bought an energy-efficient fridge.", "efficient", ["effective", "efficacious"]],
      ["run on electricity", "fonctionner à l'électricité", "The new buses run on electricity.", "run", ["walk", "turn"]],
      ["raise the alarm", "donner l'alerte", "Scientists first raised the alarm decades ago.", "raised", ["lifted", "made"]],
      ["irreversible damage", "des dégâts irréversibles", "Rising seas could cause irreversible damage.", "irreversible", ["unreturnable", "unreversing"]],
      ["generate electricity", "produire de l'électricité", "The dam generates electricity for the whole region.", "generates", ["fabricates", "makes up"]],
      ["a heated debate", "un débat houleux", "The new tax sparked a heated debate.", "heated", ["warmed", "boiled"]]
    ],
    wf: [
      ["The ___ of coal power stations will take decades. (CLOSE)", "closure"],
      ["Solar panels are now ___ cheaper than ten years ago. (CONSIDERABLE)", "considerably"],
      ["We need to reduce our ___ on fossil fuels. (RELY)", "reliance"],
      ["The old boiler was extremely ___. (EFFICIENT)", "inefficient"],
      ["Oil and gas are ___ resources: one day, they will run out. (RENEW)", "non-renewable|nonrenewable"],
      ["The ___ of the city's buildings will take years. (RENOVATE)", "renovation"],
      ["Rising temperatures pose an ___ threat to coral reefs. (EXIST)", "existential"],
      ["The government's ___ to act has angered young people. (FAIL)", "failure"]
    ],
    kwt: [
      ["I'm sure you've heard the news.", "HAVE", "You ___ the news.", "will have heard|'ll have heard"],
      ["Someone's at the door: I'm sure it's the postman.", "BE", "Someone's at the door: that ___ postman.", "will be the|'ll be the"],
      ["In June, it will be ten years since I started working here.", "BEEN", "In June, I ___ here for ten years.", "will have been working|'ll have been working"],
      ["By 2030, they will finish replacing all the old boilers.", "REPLACED", "By 2030, they ___ all the old boilers.", "will have replaced"],
      ["Please reply within fourteen days.", "GRATEFUL", "I would ___ replied within fourteen days.", "be grateful if you"],
      ["The only thing I can do is complain in writing.", "OPTION", "I have no ___ complain in writing.", "option but to"]
    ],
    idioms: [
      ["a point of no return", "a moment after which you can't go back", "un point de non-retour", "Some scientists fear we are close to a point of no return.", "a point of no return"],
      ["turn a blind eye to", "pretend not to see something wrong", "fermer les yeux sur", "For years, the authorities turned a blind eye to the pollution.", "turned a blind eye to"],
      ["switch off", "stop a machine; stop thinking about work", "éteindre ; décrocher", "Remember to switch off the lights when you leave.", "switch off"],
      ["go up in smoke", "be destroyed or wasted", "partir en fumée", "Years of work went up in smoke when the funding was cut.", "went up in smoke"],
      ["a race against time", "a situation where you must act very fast", "une course contre la montre", "Saving the reef has become a race against time.", "a race against time"],
      ["the writing is on the wall", "there are clear signs that something bad will happen", "c'est écrit d'avance", "For coal, the writing is on the wall.", "the writing is on the wall"],
      ["kick the can down the road", "delay dealing with a problem", "remettre le problème à plus tard", "Politicians keep kicking the can down the road.", "kicking the can down the road"],
      ["make do with", "manage with what you have", "se contenter de", "During the power cut, we had to make do with candles.", "make do with"]
    ]
  };

  /* The unit, after Mind and body and before Arguing like an expert (the last C1 unit); energy and environment move here. */
  const move = (from, key, ids) => { const u = W.COURSE.find((x) => x.id === from); if (u) u[key] = (u[key] || []).filter((x) => !ids.includes(x)); };
  move("c1-5", "vocab", ["environmentC1", "energyC1"]); move("c1-4", "vocab", ["changeC1"]); move("c1-5", "extra", ["repair"]);
  const unit = { id: "c1-10", level: "C1", icon: "zap", title: "Energy and the future", title_fr: "L'énergie et l'avenir",
    intro: "The energy transition is changing the way we heat our homes, travel and consume, and it's a subject where precise language matters: facts, assumptions and forecasts must be kept apart. In this unit, you'll use will to make confident assumptions, make a firm but polite complaint, read about the least visible climate solution and review a documentary.",
    intro_fr: "La transition énergétique change notre façon de chauffer nos logements, de voyager et de consommer, et c'est un sujet où la précision compte : il faut distinguer les faits, les suppositions et les prévisions. Dans cette unité, tu utiliseras will pour faire des suppositions assurées, tu feras une réclamation ferme mais polie, tu liras un article sur la solution climatique la moins visible et tu rédigeras la critique d'un documentaire.",
    can: ["Make assumptions about the present and the past with will and will have", "Use the future perfect continuous to talk about duration", "Make a formal complaint and say clearly what you expect", "Write a review for a website"],
    can_fr: ["Faire des suppositions sur le présent et le passé avec will et will have", "Utiliser le futur antérieur progressif pour parler de durée", "Faire une réclamation formelle et dire clairement ce que tu attends", "Rédiger une critique pour un site"],
    lessons: [147, 148], vocab: ["environmentC1", "energyC1", "changeC1"], reading: "efficiency", extra: ["repair"], prompt: "c1-energy",
    writing: { task: "Write a review (220-260 words) for a website of a documentary, a book or a podcast about the environment or energy. Say what it covers, what it does well and less well, and who you would recommend it to.", task_fr: "Rédige une critique (220-260 mots) pour un site sur un documentaire, un livre ou un podcast consacré à l'environnement ou à l'énergie. Dis de quoi il traite, ce qu'il réussit et ce qu'il réussit moins, et à qui tu le recommanderais.", words: "220-260",
      tips: ["As anyone who… will know,…", "Rather than…, it…", "Where it is less convincing is…", "Nevertheless,…", "I would recommend it to anyone who…"],
      checklist: ["My title and opening make the reader want to read on", "I summarised the content briefly, without telling everything", "I gave strengths and weaknesses, with precise examples", "I used will or will have for an assumption at least once", "I stayed between 220 and 260 words"],
      model: "The Heat Within: a documentary that warms slowly\n\nAs anyone who has tried to follow the debate on energy will know, it is easy to feel either overwhelmed or bored. The Heat Within, a new documentary about how we heat our homes, manages to avoid both traps, at least most of the time.\n\nThe film follows three households over a single winter: a retired couple in a draughty farmhouse, a young family in a city flat and a man who has turned an old shop into a low-energy home. Rather than lecturing its audience, it lets them speak for themselves, and the result is often moving. The scene in which the retired couple finally switch on their new heat pump, after months of paperwork, is both funny and quietly triumphant.\n\nWhere the documentary is less convincing is in its final half-hour. Having built its argument so patiently, it suddenly rushes through a series of statistics that will have meant little to most viewers, and the narrator's tone becomes noticeably preachier. A few clear graphics would have been far more effective than this stream of figures.\n\nNevertheless, this is a thoughtful, beautifully filmed piece of work that makes a dry subject genuinely human. It will not tell experts anything new, but that is not its aim. I would recommend it to anyone who suspects that energy policy is not for them: by the end, they may well have changed their minds." } };
  W.COURSE.splice(W.COURSE.findIndex((u) => u.id === "c1-5"), 0, unit);
})();
