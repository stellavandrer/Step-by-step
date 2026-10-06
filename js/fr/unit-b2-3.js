/* Cours de français, unité B2-3 « Society and debate / Débats de société » : l'opposition et la concession
   (alors que, bien que + subjonctif, même si, malgré, avoir beau, certes… mais), la mise en relief (c'est… qui /
   que, ce qui…, c'est…), l'essai argumenté du DELF B2. Personnages fictifs, prénoms français. Faits vérifiables
   seulement : la Fête des voisins est née à Paris en 1999 et se célèbre aujourd'hui dans de nombreuses villes ;
   la laïcité est un principe de la République française ; « malgré que » est critiqué dans la langue soignée. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "societeFR", icon: "users-round", title: "Society", title_fr: "La société", level: "B2", words: [
    ["l'inégalité", "inequality", "Les inégalités entre les régions augmentent."],
    ["l'égalité", "equality", "L'égalité entre les femmes et les hommes progresse."],
    ["la solidarité", "solidarity", "La solidarité entre voisins s'est renforcée."],
    ["l'entraide", "mutual aid, helping one another", "Ce village fonctionne grâce à l'entraide."],
    ["la diversité", "diversity", "La diversité culturelle est une richesse."],
    ["la laïcité", "secularism (separation of state and religion)", "La laïcité est un principe de la République française."],
    ["le vivre-ensemble", "living together, social cohesion", "Le sport favorise le vivre-ensemble."],
    ["la citoyenneté", "citizenship", "L'école enseigne aussi la citoyenneté."],
    ["le droit", "the right; law", "Chacun a le droit de s'exprimer."],
    ["le devoir", "the duty", "Voter est un droit, mais aussi un devoir."],
    ["le bénévole / la bénévole", "the volunteer (m) / the volunteer (f)", "Les bénévoles distribuent des repas chaque soir."],
    ["s'engager", "to get involved, to commit oneself", "Elle s'est engagée dans une association."],
    ["militer", "to campaign, to be an activist", "Il milite pour l'accès au logement."],
    ["la pauvreté", "poverty", "La lutte contre la pauvreté est une priorité."],
    ["le logement social", "social housing", "La ville construit des logements sociaux."],
    ["le préjugé", "the prejudice, the preconception", "Il faut combattre les préjugés."],
    ["revendiquer", "to demand, to claim", "Les manifestants revendiquent de meilleurs salaires."],
    ["l'isolement", "isolation, loneliness", "L'isolement des personnes âgées est un vrai problème."]
  ] },
  { id: "argumenterFR", icon: "pen-tool", title: "Arguing in writing", title_fr: "Argumenter à l'écrit", level: "B2", words: [
    ["certes", "admittedly, of course", "Certes, le projet coûte cher, mais il est utile."],
    ["néanmoins", "nevertheless", "C'est difficile ; néanmoins, c'est possible."],
    ["toutefois", "however", "Toutefois, il faut rester prudent."],
    ["en outre", "furthermore, moreover", "En outre, cette mesure protège l'environnement."],
    ["d'ailleurs", "besides, in fact", "D'ailleurs, beaucoup d'experts sont d'accord."],
    ["par ailleurs", "in addition, also", "Par ailleurs, il faut penser aux familles."],
    ["autrement dit", "in other words", "Autrement dit, tout le monde y gagne."],
    ["il est vrai que", "it is true that", "Il est vrai que la situation est complexe."],
    ["force est de constater que", "one has to admit that", "Force est de constater que rien n'a changé."],
    ["quant à", "as for", "Quant aux jeunes, ils sont souvent les premiers concernés."],
    ["à l'inverse", "conversely", "À l'inverse, certains pays ont choisi une autre solution."],
    ["en définitive", "ultimately, in the end", "En définitive, c'est une question de choix."],
    ["en somme", "in short, all in all", "En somme, les avantages l'emportent."],
    ["mettre en avant", "to highlight, to put forward", "Les auteurs mettent en avant le coût du projet."],
    ["souligner", "to stress, to underline", "Je voudrais souligner un point important."],
    ["nuancer", "to qualify, to add nuance to", "Il faut nuancer cette affirmation."],
    ["la problématique", "the central question (of an essay)", "La problématique doit apparaître dans l'introduction."],
    ["l'enjeu", "what is at stake, the issue", "L'enjeu de ce débat est l'avenir des jeunes."]
  ] });

  W.LESSONS.push(
  {
    id: 81, level: "B2", icon: "scale",
    title: "Bien que, même si, malgré: concession and contrast", title_fr: "Bien que, même si, malgré : la concession et l'opposition",
    subtitle: "Admit a point without giving up your own, and know which mood each word takes.", subtitle_fr: "Admettre un point sans renoncer au sien, et savoir quel mode chaque mot demande.",
    body: `
<h2>Opposition: two facts side by side</h2>
<p><s-fr>alors que</s-fr> or <s-fr>tandis que</s-fr> + indicative (whereas, while): <s-fr>Il travaille le dimanche alors que je me repose.</s-fr> Adverbs: <s-fr>en revanche</s-fr>, <s-fr>à l'inverse</s-fr>, <s-fr>au contraire</s-fr>.</p>
<h2>Concession: a fact that doesn't stop another</h2>
<table>
<tr><th>French</th><th>+</th><th>Example</th></tr>
<tr><td><s-fr>bien que</s-fr>, <s-fr>quoique</s-fr></td><td>subjunctive</td><td><s-fr>Bien qu'il soit riche, il vit simplement.</s-fr></td></tr>
<tr><td><s-fr>même si</s-fr></td><td>indicative</td><td><s-fr>Même s'il pleut, je sortirai.</s-fr></td></tr>
<tr><td><s-fr>malgré</s-fr></td><td>a noun</td><td><s-fr>Malgré la pluie, nous sommes sortis.</s-fr></td></tr>
<tr><td><s-fr>avoir beau</s-fr></td><td>infinitive</td><td><s-fr>J'ai beau expliquer, il ne comprend pas.</s-fr> (No matter how much I explain…)</td></tr>
<tr><td><s-fr>certes…, mais…</s-fr></td><td>indicative</td><td><s-fr>Certes, c'est cher, mais c'est utile.</s-fr></td></tr>
</table>
<p>And the adverbs, from everyday to formal: <s-fr>quand même</s-fr>, <s-fr>pourtant</s-fr>, <s-fr>cependant</s-fr>, <s-fr>toutefois</s-fr>, <s-fr>néanmoins</s-fr>.</p>
<div class="tip">Two traps: <s-fr>même si</s-fr> is never followed by the subjunctive, and <s-fr>bien que</s-fr> always is. You'll hear <s-fr>malgré que</s-fr> in speech, but it's criticised in careful French: write <s-fr>bien que</s-fr>.</div>
`,
    examples: [
      ["Bien qu'il soit tard, je vais finir ce dossier.", "Although it's late, I'm going to finish this file."],
      ["Même si tu n'es pas d'accord, écoute-moi.", "Even if you don't agree, listen to me."],
      ["Malgré la grève, la plupart des trains circulent.", "Despite the strike, most trains are running."],
      ["J'ai beau chercher, je ne trouve pas mes clés.", "However hard I look, I can't find my keys."],
      ["Certes, ce projet coûte cher, mais il créera des emplois.", "Admittedly, this project is expensive, but it will create jobs."],
      ["Elle adore la ville, alors que son frère préfère la campagne.", "She loves the city, whereas her brother prefers the countryside."],
      ["Il était fatigué ; néanmoins, il a continué.", "He was tired; nevertheless, he carried on."],
      ["Quoiqu'elle soit timide, elle a pris la parole.", "Although she's shy, she spoke up."]
    ],
    quiz: [
      { q: "“Although he is ill, he works” is:", o: ["Bien qu'il est malade, il travaille.", "Bien qu'il soit malade, il travaille.", "Même s'il soit malade, il travaille."], a: 1, ex: "bien que + subjunctive." },
      { q: "“Even if it rains, we'll go” is:", o: ["Même s'il pleuve, on ira.", "Même s'il pleut, on ira.", "Malgré il pleut, on ira."], a: 1, ex: "même si + indicative." },
      { q: "“Despite the noise” is:", o: ["malgré le bruit", "bien que le bruit", "même si le bruit"], a: 0, ex: "malgré + noun." },
      { q: "“No matter how much I try, I fail” is:", o: ["J'ai beau essayer, j'échoue.", "J'ai beau d'essayer, j'échoue.", "Je suis beau essayer, j'échoue."], a: 0, ex: "avoir beau + infinitive." },
      { q: "Which one is criticised in careful writing?", o: ["bien que", "malgré que", "même si"], a: 1, ex: "malgré que: write bien que instead." }
    ]
  },
  {
    id: 82, level: "B2", icon: "highlighter",
    title: "C'est elle qui…: putting the focus on an idea", title_fr: "C'est elle qui… : la mise en relief",
    subtitle: "C'est… qui / que, ce qui…, c'est…, and moving words to the front, as French speakers do every day.", subtitle_fr: "C'est… qui / que, ce qui…, c'est…, et mettre un mot en tête, comme les francophones le font tous les jours.",
    body: `
<h2>C'est… qui / c'est… que</h2>
<p>To stress one element of the sentence, put it between <s-fr>c'est</s-fr> and <s-fr>qui</s-fr> (subject) or <s-fr>que</s-fr> (anything else):</p>
<table>
<tr><th>Neutral</th><th>Stressed</th></tr>
<tr><td><s-fr>Marie a eu l'idée.</s-fr></td><td><s-fr>C'est Marie qui a eu l'idée.</s-fr></td></tr>
<tr><td><s-fr>Je défends cette idée.</s-fr></td><td><s-fr>C'est cette idée que je défends.</s-fr></td></tr>
<tr><td><s-fr>Tout a changé en 2015.</s-fr></td><td><s-fr>C'est en 2015 que tout a changé.</s-fr></td></tr>
</table>
<p>With a pronoun, the verb agrees with it: <s-fr>C'est moi qui ai raison.</s-fr> · <s-fr>C'est nous qui avons organisé la fête.</s-fr></p>
<h2>Ce qui…, c'est… / Ce que…, c'est…</h2>
<p><s-fr>Ce qui me choque, c'est l'indifférence.</s-fr> · <s-fr>Ce que je propose, c'est un vrai débat.</s-fr> · <s-fr>Ce dont on a besoin, c'est de solidarité.</s-fr> (de comes back after c'est)</p>
<h2>Moving a word to the front (spoken French)</h2>
<p>In conversation, French speakers often announce the topic first, then repeat it with a pronoun: <s-fr>Moi, je pense que…</s-fr> · <s-fr>La solidarité, j'y crois.</s-fr> · <s-fr>Ce débat, on l'attendait depuis longtemps.</s-fr></p>
<div class="tip">Watch the agreement: <s-fr>C'est moi qui ai</s-fr>, never <s-fr>c'est moi qui a</s-fr>; <s-fr>c'est toi qui as</s-fr>; <s-fr>ce sont eux qui ont</s-fr>.</div>
`,
    examples: [
      ["C'est Marie qui a eu l'idée de la fête.", "It was Marie who had the idea for the party."],
      ["C'est cette injustice que nous dénonçons.", "It's this injustice that we condemn."],
      ["C'est en 2015 que tout a changé.", "It was in 2015 that everything changed."],
      ["C'est moi qui ai proposé ce projet.", "I'm the one who suggested this project."],
      ["Ce qui me choque, c'est l'indifférence.", "What shocks me is the indifference."],
      ["Ce que je propose, c'est un vrai débat.", "What I'm suggesting is a real debate."],
      ["Ce dont on a besoin, c'est de solidarité.", "What we need is solidarity."],
      ["La solidarité, j'y crois vraiment.", "Solidarity, I really believe in it."]
    ],
    quiz: [
      { q: "“I'm the one who's right” is:", o: ["C'est moi qui a raison.", "C'est moi qui ai raison.", "C'est moi que j'ai raison."], a: 1, ex: "The verb agrees with moi." },
      { q: "“It's this idea that I defend”:", o: ["C'est cette idée qui je défends.", "C'est cette idée que je défends.", "C'est cette idée dont je défends."], a: 1, ex: "Object: c'est… que." },
      { q: "“What worries me is the cost”:", o: ["Ce qui m'inquiète, c'est le coût.", "Ce que m'inquiète, c'est le coût.", "Qu'est-ce qui m'inquiète, c'est le coût."], a: 0, ex: "Subject: ce qui." },
      { q: "“What we need is time”:", o: ["Ce que nous avons besoin, c'est du temps.", "Ce dont nous avons besoin, c'est de temps.", "Ce qui nous avons besoin, c'est le temps."], a: 1, ex: "avoir besoin de → ce dont… c'est de." },
      { q: "“Ce débat, on l'attendait” is typical of:", o: ["spoken French", "legal French", "a mistake"], a: 0, ex: "Moving the topic to the front is very common in speech." }
    ]
  },
  {
    id: 83, level: "B2", kind: "functional", icon: "pen-tool",
    title: "Everyday French: the argumentative essay", title_fr: "Le français de tous les jours : l'essai argumenté",
    subtitle: "The DELF B2 written task: an introduction with a question, a balanced argument, and a clear conclusion.", subtitle_fr: "L'épreuve écrite du DELF B2 : une introduction avec une question, une argumentation équilibrée, et une conclusion claire.",
    body: `
<h2>The structure</h2>
<p><b>Introduction:</b> bring in the topic, ask the central question (<s-fr>la problématique</s-fr>) and announce your plan. <b>Body:</b> two or three parts, each with one main argument and an example. <b>Conclusion:</b> answer the question, then open onto a wider issue.</p>
<h2>Introducing</h2>
<p><s-fr>De nos jours, …</s-fr> · <s-fr>On entend souvent dire que…</s-fr> · <s-fr>La question se pose donc de savoir si…</s-fr> · <s-fr>Nous verrons d'abord…, puis…</s-fr></p>
<h2>Arguing</h2>
<p>Add: <s-fr>Tout d'abord, …</s-fr> · <s-fr>En outre, …</s-fr> · <s-fr>Par ailleurs, …</s-fr> Concede: <s-fr>Certes, …, mais…</s-fr> · <s-fr>Il est vrai que…, néanmoins…</s-fr> Illustrate: <s-fr>Prenons l'exemple de…</s-fr> · <s-fr>C'est notamment le cas de…</s-fr></p>
<h2>Nuancing and concluding</h2>
<p><s-fr>Il me semble que…</s-fr> · <s-fr>Dans une certaine mesure, …</s-fr> · <s-fr>Tout dépend de…</s-fr> · <s-fr>En définitive, …</s-fr> · <s-fr>En somme, …</s-fr> · <s-fr>Il serait donc souhaitable que…</s-fr> (+ subjunctive)</p>
<div class="tip">In the DELF B2, the written task asks you to take a position on a topic in at least 250 words, often as a letter or an article. A clear plan and a few well-chosen linking words matter more than complicated vocabulary.</div>
`,
    examples: [
      ["De nos jours, de plus en plus de jeunes s'engagent dans des associations.", "Nowadays, more and more young people are getting involved in associations."],
      ["La question se pose donc de savoir si le bénévolat doit être obligatoire.", "The question is therefore whether volunteering should be compulsory."],
      ["Nous verrons d'abord les avantages, puis les limites de cette idée.", "We'll first look at the advantages, then the limits of this idea."],
      ["Certes, cette mesure a un coût, mais elle profite à tous.", "Admittedly, this measure has a cost, but everyone benefits."],
      ["Prenons l'exemple des jardins partagés.", "Let's take the example of community gardens."],
      ["En définitive, tout dépend de la manière dont le projet est mené.", "Ultimately, it all depends on how the project is run."],
      ["Il serait donc souhaitable que chaque lycée propose un projet solidaire.", "It would therefore be desirable for every high school to offer a community project."]
    ],
    quiz: [
      { q: "“La problématique” is:", o: ["the problem you complain about", "the central question of the essay", "the conclusion"], a: 1, ex: "The question your essay answers." },
      { q: "To concede a point:", o: ["Certes…, mais…", "En somme…", "Prenons l'exemple de…"], a: 0, ex: "Certes…, mais…" },
      { q: "“Il serait souhaitable que chacun…” is followed by:", o: ["the indicative", "the subjunctive", "the infinitive"], a: 1, ex: "souhaitable que + subjunctive." },
      { q: "A conclusion usually starts with:", o: ["Tout d'abord", "En définitive", "Par ailleurs"], a: 1, ex: "En définitive, en somme, pour conclure…" },
      { q: "The DELF B2 written task is at least:", o: ["160 words", "250 words", "500 words"], a: 1, ex: "250 words minimum." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    81: {
      gap: [["Bien qu'il ___ riche, il vit simplement. (être)", "soit"], ["Même s'il ___, je sortirai. (pleuvoir)", "pleut"], ["___ la grève, les trains circulent. (despite)", "Malgré"], ["J'ai ___ expliquer, il ne comprend pas. (no matter how much)", "beau"]],
      fix: [["Même s'il soit fatigué, il continue.", "Même s'il est fatigué, il continue.|Bien qu'il soit fatigué, il continue.", "même si + indicative; bien que + subjunctive."], ["Malgré qu'il pleuve, on sort.", "Bien qu'il pleuve, on sort.|Malgré la pluie, on sort.", "malgré que is criticised in careful French: bien que, or malgré + noun."]],
      task: ["Write four sentences about a place you love despite its faults, with bien que, malgré, même si and avoir beau.", "Écris quatre phrases sur un lieu que tu aimes malgré ses défauts, avec bien que, malgré, même si et avoir beau.", "J'adore Paris, bien que la vie y soit chère. Malgré le bruit et la foule, je m'y sens chez moi. Même si les loyers sont très élevés, je rêve d'y vivre un jour. Mes amis ont beau me dire que la campagne est plus agréable, je préfère la ville !"]
    },
    82: {
      gap: [["C'est Marie ___ a eu l'idée. (who)", "qui"], ["C'est cette idée ___ je défends. (that)", "que"], ["___ me choque, c'est l'indifférence. (what, subject)", "Ce qui"], ["C'est moi qui ___ raison. (avoir)", "ai"]],
      fix: [["C'est moi qui a organisé la réunion.", "C'est moi qui ai organisé la réunion.", "The verb agrees with moi: c'est moi qui ai."], ["Ce que me gêne, c'est le bruit.", "Ce qui me gêne, c'est le bruit.", "The subject of gêne: ce qui."]],
      task: ["Rewrite these sentences to stress the underlined idea: Le manque de temps me pose problème. J'ai besoin de calme. Paul a gagné.", "Réécris ces phrases pour mettre en relief l'idée importante : Le manque de temps me pose problème. J'ai besoin de calme. Paul a gagné.", "Ce qui me pose problème, c'est le manque de temps. Ce dont j'ai besoin, c'est de calme. C'est Paul qui a gagné."]
    },
    83: {
      gap: [["La question se ___ donc de savoir si… (arises)", "pose"], ["___, ce projet coûte cher, mais il est utile. (admittedly)", "Certes"], ["Prenons l'___ des jardins partagés. (example)", "exemple"], ["En ___, tout dépend des moyens. (ultimately)", "définitive"]],
      fix: [["Il serait souhaitable que chaque lycée propose est un projet.", "Il serait souhaitable que chaque lycée propose un projet.", "souhaitable que + subjunctive, with no extra verb."], ["En conclusion de tout, je suis pour.", "En conclusion, je suis pour.|En définitive, je suis pour.", "En conclusion or En définitive, on their own."]],
      task: ["Write the introduction of an essay on this topic: Faut-il interdire les voitures dans le centre des villes ? (bring in the topic, ask the question, announce your plan).", "Écris l'introduction d'un essai sur ce sujet : Faut-il interdire les voitures dans le centre des villes ? (amène le sujet, pose la question, annonce le plan).", "De nos jours, de plus en plus de villes ferment certaines rues aux voitures pour lutter contre la pollution. Pourtant, cette décision divise les habitants et les commerçants. La question se pose donc de savoir si une interdiction totale serait vraiment bénéfique. Nous verrons d'abord ses avantages, puis ses limites, avant de proposer une solution plus nuancée."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "benevolat", lesson: 83, level: "B2", icon: "scale", partner: "Damien", role: "a colleague",
    title: "Compulsory volunteering?", title_fr: "Le bénévolat obligatoire ?",
    setting: "Your colleague Damien thinks volunteering should be compulsory for all high-school students. You're not convinced. Debate with nuance.", setting_fr: "Ton collègue Damien pense que le bénévolat devrait être obligatoire pour tous les lycéens. Tu n'es pas convaincu. Débattez avec nuance.",
    turns: [
      { p: "Tu as vu ? Ils proposent de rendre le bénévolat obligatoire pour tous les lycéens. Moi, je trouve ça génial.", fr: "Have you seen? They're proposing to make volunteering compulsory for all high-school students. I think it's great." },
      { y: ["Certes, l'idée est généreuse, mais je doute que ce soit efficace.", "Certes, l'idée est généreuse, mais je doute que c'est efficace.", "Certes, l'idée est généreuse, mais je doute que ce sera efficace."], fr: "Admittedly, the idea is generous, but I doubt it would work.", why: "douter que + subjunctive (soit)." },
      { p: "Pourquoi ? Ça leur apprendrait la solidarité !", fr: "Why? It would teach them solidarity!" },
      { y: ["Ce qui me gêne, c'est le mot obligatoire : un engagement forcé, ce n'est plus du bénévolat.", "Ce que me gêne, c'est le mot obligatoire : un engagement forcé, ce n'est plus du bénévolat.", "Qu'est-ce qui me gêne, c'est le mot obligatoire : un engagement forcé, ce n'est plus du bénévolat."], fr: "What bothers me is the word compulsory: forced commitment isn't volunteering any more.", why: "ce qui: the subject of gêne." },
      { p: "Mais beaucoup de jeunes ne savent même pas que ces associations existent.", fr: "But many young people don't even know these associations exist." },
      { y: ["C'est vrai. C'est pour ça qu'il faudrait mieux les informer, plutôt que de les obliger.", "C'est vrai. C'est pour ça que il faudrait mieux les informer, plutôt que de les obliger.", "C'est vrai. C'est pour ça qu'il faudrait mieux les informer, plutôt que les obliger de."], fr: "That's true. That's why they should be better informed, rather than forced.", why: "c'est pour ça que = that's why; que + il = qu'il." },
      { p: "Bien que je comprenne ton point de vue, je pense qu'une petite obligation peut créer une habitude.", fr: "Although I understand your point of view, I think a small obligation can create a habit." },
      { y: ["Peut-être. Malgré mes doutes, je reconnais que ça pourrait marcher, à condition que les élèves choisissent leur association.", "Peut-être. Malgré que j'ai des doutes, je reconnais que ça pourrait marcher, à condition que les élèves choisissent leur association.", "Peut-être. Malgré mes doutes, je reconnais que ça pourrait marcher, à condition que les élèves choisiront leur association."], fr: "Maybe. Despite my doubts, I admit it could work, provided the students choose their association.", why: "malgré + noun; à condition que + subjunctive." },
      { p: "Ah, sur ce point, je suis d'accord avec toi ! On a trouvé un terrain d'entente, alors.", fr: "Ah, on that point, I agree with you! So we've found some common ground." },
      { y: ["Oui : en somme, c'est la liberté de choisir qui fait la différence.", "Oui : en somme, c'est la liberté de choisir que fait la différence.", "Oui : en somme, c'est la liberté de choisir qui font la différence."], fr: "Yes: all in all, it's the freedom to choose that makes the difference.", why: "c'est… qui + a verb agreeing with la liberté." }
    ] }
  );

  W.READINGS.push({
    id: "voisins", level: "B2", icon: "users-round", title: "Voisins solidaires", genre: "Feature article",
    intro: "Never so connected, yet often alone: how neighbourhood initiatives try to bring people closer. Concession, focus and the vocabulary of society.",
    intro_fr: "Jamais aussi connectés, et pourtant souvent seuls : comment des initiatives de quartier essaient de rapprocher les gens. La concession, la mise en relief et le vocabulaire de la société.",
    paragraphs: [
      { en: "Bien qu'on n'ait jamais été aussi connectés, beaucoup de gens disent se sentir seuls, même au milieu d'une grande ville. C'est ce paradoxe que de nombreuses initiatives de quartier essaient de résoudre.", fr: "Although we've never been so connected, many people say they feel lonely, even in the middle of a big city. It's this paradox that many neighbourhood initiatives are trying to solve." },
      { en: "C'est à Paris, en 1999, qu'est née la Fête des voisins. Le principe est simple : une fois par an, les habitants d'un immeuble ou d'une rue se retrouvent autour d'un verre ou d'un repas partagé. Aujourd'hui, elle est célébrée dans de nombreuses villes, en France et à l'étranger.", fr: "It was in Paris, in 1999, that the Neighbours' Day was born. The idea is simple: once a year, the residents of a building or a street get together for a drink or a shared meal. Today, it's celebrated in many towns, in France and abroad." },
      { en: "Pour certains, une fête annuelle ne suffit pas. Dans un immeuble de Villeurbanne, des voisins ont créé un groupe d'entraide : on y prête une perceuse, on propose de garder un chat ou de faire les courses d'une personne âgée. Ce qui a changé ? On se dit bonjour, maintenant, sourit Fatima, à l'origine du projet. Avant, j'habitais ici depuis dix ans et je ne connaissais personne.", fr: "For some, an annual party isn't enough. In a block of flats in Villeurbanne, neighbours have set up a mutual-aid group: people lend a drill, offer to look after a cat or to do an elderly person's shopping. What has changed? People say hello now, smiles Fatima, who started the project. Before, I'd lived here for ten years and I didn't know anyone." },
      { en: "Certes, tout le monde n'a pas envie de partager sa vie avec ses voisins, et certains craignent de perdre leur tranquillité. Pourtant, les participants le répètent : il ne s'agit pas de devenir amis avec tout l'immeuble, mais de savoir sur qui compter en cas de besoin. Malgré leurs différences d'âge ou d'origine, des voisins qui se croisaient sans se voir apprennent à se faire confiance.", fr: "Admittedly, not everyone wants to share their life with their neighbours, and some fear losing their peace and quiet. Yet the participants keep saying it: it's not about becoming friends with the whole building, but about knowing who you can count on when you need help. Despite differences in age or background, neighbours who used to pass each other without seeing each other are learning to trust one another." },
      { en: "Ces petites initiatives ne remplaceront pas les services publics. Néanmoins, elles rappellent une chose essentielle : la solidarité, ce n'est pas seulement une valeur abstraite, c'est aussi un geste concret, à deux portes de chez soi.", fr: "These small initiatives won't replace public services. Nevertheless, they remind us of something essential: solidarity isn't just an abstract value, it's also a concrete gesture, two doors away from home." }
    ],
    glossary: { "connectés": "connected", "paradoxe": "paradox", "née": "born", "principe": "principle", "annuelle": "annual", "suffit": "is enough", "entraide": "mutual aid", "perceuse": "drill", "sourit": "smiles", "tranquillité": "peace and quiet", "agit": "is about (il s'agit de)", "croisaient": "passed (each other)", "abstraite": "abstract", "geste": "gesture, act", "concret": "concrete" },
    questions: [
      { q: "Quel paradoxe l'article décrit-il ?", o: ["On est très connectés, mais beaucoup se sentent seuls.", "Les villes sont vides.", "Les voisins se disputent trop."], a: 0 },
      { q: "Où et quand est née la Fête des voisins ?", o: ["À Lyon, en 2010", "À Paris, en 1999", "À Villeurbanne, en 1999"], a: 1 },
      { q: "Que fait le groupe d'entraide de Villeurbanne ?", o: ["Il organise des voyages.", "Il vend des perceuses.", "Les voisins se prêtent des objets et se rendent service."], a: 2 },
      { q: "Selon les participants, de quoi s'agit-il ?", o: ["Devenir amis avec tout l'immeuble", "Savoir sur qui compter en cas de besoin", "Remplacer les services publics"], a: 1 },
      { q: "Quelle est la conclusion de l'article ?", o: ["La solidarité est aussi un geste concret.", "Ces initiatives ne servent à rien.", "Il faut supprimer la Fête des voisins."], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-b2-3", unit: "b2-3", level: "B2", icon: "radio",
    title: "Faut-il interdire la publicité pour la malbouffe ?", title_fr: "Faut-il interdire la publicité pour la malbouffe ?",
    context: "A radio debate. Anne, the presenter, asks Dr Hamel, a nutritionist, and M. Ferrand, who works in advertising, whether junk-food adverts should be banned on TV.", context_fr: "Un débat à la radio. Anne, l'animatrice, demande au Dr Hamel, nutritionniste, et à M. Ferrand, publicitaire, s'il faut interdire la publicité pour la malbouffe à la télévision.",
    words: [["la malbouffe", "junk food"], ["sensible à", "susceptible to"], ["agir sur", "to act on"], ["une solution intermédiaire", "a middle-ground solution"], ["la prévention", "prevention (health campaigns)"]],
    lines: [["Anne", "Faut-il interdire la publicité pour la malbouffe à la télévision ? C'est la question que nous posons ce soir. Docteur Hamel, vous êtes nutritionniste, et vous êtes pour l'interdiction.", "fr-FR"], ["Dr Hamel", "Oui. Bien que les parents soient responsables de ce que mangent leurs enfants, ils ne peuvent pas lutter seuls contre des publicités très efficaces. Ce sont les enfants qui sont les plus sensibles à ces messages.", "fr-FR"], ["Anne", "Monsieur Ferrand, vous travaillez dans la publicité. Vous n'êtes pas d'accord ?", "fr-FR"], ["M. Ferrand", "Pas du tout. Certes, l'obésité est un vrai problème, mais ce n'est pas la publicité qui en est la seule cause. Le manque de sport, le prix des produits frais, le temps passé devant les écrans : tout cela compte aussi.", "fr-FR"], ["Dr Hamel", "J'ai beau entendre cet argument depuis des années, il ne me convainc pas. Personne ne dit que la publicité est la seule cause. Mais c'est une cause sur laquelle on peut agir facilement.", "fr-FR"], ["M. Ferrand", "Et les emplois ? Si on interdit ces publicités, les chaînes perdront de l'argent, alors que les enfants verront les mêmes publicités sur internet.", "fr-FR"], ["Anne", "Est-ce qu'il y a un terrain d'entente possible ?", "fr-FR"], ["Dr Hamel", "Je pourrais accepter une solution intermédiaire : pas de publicité pendant les programmes pour enfants, et des messages de prévention obligatoires.", "fr-FR"], ["M. Ferrand", "Sur les programmes pour enfants, je veux bien en discuter. Mais une interdiction totale, non.", "fr-FR"]],
    gist: ["Quel est le sujet du débat ?", ["Interdire la publicité pour la malbouffe à la télévision", "Le prix des produits frais", "Le sport à l'école"]],
    detail: [["Selon le Dr Hamel, qui est le plus sensible aux publicités ?", ["Les enfants", "Les parents", "Les sportifs"]], ["Que dit M. Ferrand sur l'obésité ?", ["La publicité n'en est pas la seule cause.", "Ce n'est pas un problème.", "C'est uniquement la faute des parents."]], ["Quel risque M. Ferrand mentionne-t-il ?", ["Les chaînes perdraient de l'argent.", "Les enfants mangeraient moins.", "Les médecins perdraient leur travail."]], ["Sur quoi pourraient-ils s'entendre ?", ["Pas de publicité pendant les programmes pour enfants", "Une interdiction totale", "Rien du tout"]]],
    decode: ["Bien que les parents soient responsables", "J'ai beau entendre cet argument"],
    tip: "In a debate, concession words (certes, bien que, j'ai beau) often come just before the speaker's real argument. When you hear them, get ready: the important part follows mais or néanmoins.", tip_fr: "Dans un débat, les mots de la concession (certes, bien que, j'ai beau) arrivent souvent juste avant le vrai argument. Quand tu les entends, prépare-toi : l'essentiel vient après mais ou néanmoins."
  }]);

  W.LEXIS = W.LEXIS || {};
  W.LEXIS["b2-3"] = {
    colloc: [
      ["soulever une question", "to raise a question", "Ce projet soulève une question importante.", "soulève", ["lève", "monte"]],
      ["susciter un débat", "to spark a debate", "Cette loi a suscité un vif débat.", "suscité", ["levé", "porté"]],
      ["avancer un argument", "to put forward an argument", "Elle a avancé un argument solide.", "avancé", ["poussé", "monté"]],
      ["réduire les inégalités", "to reduce inequality", "Il faut réduire les inégalités entre les régions.", "réduire", ["descendre", "baisser"]],
      ["lutter contre la pauvreté", "to fight poverty", "Cette association lutte contre la pauvreté.", "lutte", ["bat", "frappe"]],
      ["prendre position", "to take a stand", "Le maire a enfin pris position.", "pris", ["fait", "mis"]],
      ["tirer des conclusions", "to draw conclusions", "Il est trop tôt pour tirer des conclusions.", "tirer", ["faire", "prendre"]],
      ["jouer un rôle", "to play a part", "Les associations jouent un rôle essentiel.", "jouent", ["font", "mènent"]],
      ["porter ses fruits", "to bear fruit, to pay off", "Leurs efforts ont fini par porter leurs fruits.", "porter", ["donner", "faire"]],
      ["faire face à", "to face, to cope with", "La ville doit faire face à une crise du logement.", "faire", ["tenir", "mettre"]]
    ],
    wf: [
      ["La ___ entre voisins s'est renforcée. (SOLIDAIRE)", "solidarité"],
      ["Les ___ entre riches et pauvres augmentent. (ÉGAL)", "inégalités"],
      ["La ___ touche encore beaucoup de familles. (PAUVRE)", "pauvreté"],
      ["Son ___ dans l'association dure depuis dix ans. (ENGAGER)", "engagement"],
      ["L'école doit former à la ___. (CITOYEN)", "citoyenneté"],
      ["Cette décision est une véritable ___. (JUSTE)", "injustice"],
      ["Laisser un enfant seul, c'est ___. (RESPONSABLE)", "irresponsable"],
      ["La ___ est une valeur essentielle du vivre-ensemble. (TOLÉRER)", "tolérance"]
    ],
    kwt: [
      ["Il pleuvait, mais nous sommes sortis.", "MALGRÉ", "Nous sommes sortis ___.", "malgré la pluie"],
      ["Même s'il est fatigué, il continue.", "BIEN", "___ fatigué, il continue.", "Bien qu'il soit"],
      ["J'explique souvent, mais il ne comprend pas.", "BEAU", "J'___ expliquer, il ne comprend pas.", "ai beau"],
      ["Marie a eu cette idée.", "QUI", "C'est ___ cette idée.", "Marie qui a eu"],
      ["L'indifférence me choque.", "CE", "___, c'est l'indifférence.", "Ce qui me choque"],
      ["Nous avons besoin de solidarité.", "DONT", "Ce ___ besoin, c'est de solidarité.", "dont nous avons"]
    ],
    idioms: [
      ["mettre de l'eau dans son vin", "devenir moins exigeant, faire des concessions", "to tone it down, to compromise", "Après des heures de débat, chacun a mis de l'eau dans son vin.", "mis de l'eau dans son vin"],
      ["couper la poire en deux", "trouver un compromis à égalité", "to split the difference", "Vous voulez cent euros, moi cinquante : coupons la poire en deux.", "coupons la poire en deux"],
      ["enfoncer une porte ouverte", "dire une évidence", "to state the obvious", "Dire que la pauvreté est un problème, c'est enfoncer une porte ouverte.", "enfoncer une porte ouverte"],
      ["être de mauvaise foi", "refuser de reconnaître la vérité", "to argue in bad faith", "Il sait qu'il a tort, il est de mauvaise foi.", "de mauvaise foi"],
      ["noyer le poisson", "éviter la question en parlant d'autre chose", "to dodge the issue", "Le ministre a noyé le poisson pendant toute l'interview.", "noyé le poisson"],
      ["avoir voix au chapitre", "avoir le droit de donner son avis", "to have a say", "Les habitants veulent avoir voix au chapitre.", "avoir voix au chapitre"],
      ["tenir tête à quelqu'un", "résister à quelqu'un, ne pas céder", "to stand up to someone", "Elle a tenu tête à son directeur.", "tenu tête"],
      ["faire l'unanimité", "être approuvé par tout le monde", "to win everyone's approval", "Cette proposition a fait l'unanimité.", "fait l'unanimité"]
    ]
  };

  W.PROMPTS.push({ id: "fr-b2-3", level: "B2", q: "Les réseaux sociaux rapprochent-ils les gens ou les isolent-ils ? Donne ton avis de façon nuancée.", fr: "Do social networks bring people together or isolate them? Give a nuanced opinion.", time: 180,
    phrases: ["Certes, …, mais…", "Bien que…", "Ce qui me frappe, c'est…", "Malgré…", "En définitive, …"],
    model: "Certes, les réseaux sociaux permettent de garder le contact avec des amis qui vivent loin, et c'est grâce à eux que j'ai retrouvé une amie d'enfance. Pourtant, ce qui me frappe, c'est qu'on passe des soirées entières devant son écran, au lieu de voir les gens en vrai. Bien que ces applications soient faites pour communiquer, elles peuvent donc aussi isoler. Malgré tout, je ne crois pas qu'il faille les rejeter : tout dépend de la façon de les utiliser. En définitive, ce sont nos habitudes qu'il faut changer, pas les outils." });

  W.WRITING_GUIDE["b2-3"] = { genre: "An argumentative essay (DELF B2)", genre_fr: "Un essai argumenté (DELF B2)",
    plan: [["Introduce the topic, ask the central question, announce the plan.", "Amène le sujet, pose la problématique, annonce le plan."], ["First part: the arguments for, with an example.", "Première partie : les arguments pour, avec un exemple."], ["Second part: the limits, with a concession (certes, bien que).", "Deuxième partie : les limites, avec une concession (certes, bien que)."], ["Use a mise en relief to stress your key idea.", "Utilise une mise en relief pour souligner ton idée principale."], ["Conclude with your answer and a suggestion.", "Conclus avec ta réponse et une proposition."]],
    marks: [["La question se pose de savoir si", "the central question", "la problématique"], ["il est vrai qu'une expérience", "a concession", "une concession"], ["ce qui fait la valeur du bénévolat, c'est", "ce qui…, c'est (focus)", "ce qui…, c'est (mise en relief)"], ["Bien que l'intention soit bonne", "bien que + subjunctive", "bien que + subjonctif"], ["Prenons l'exemple", "an example", "un exemple"], ["il serait souhaitable que chaque établissement leur fasse", "souhaitable que + subjunctive", "souhaitable que + subjonctif"]] };

  W.COURSE.push({ id: "b2-3", level: "B2", icon: "landmark", title: "Society and debate", title_fr: "Débats de société",
    intro: "In this unit, you'll debate social questions: opposition and concession (bien que, même si, malgré, avoir beau), putting the focus on an idea (c'est… qui, ce qui…, c'est), and the structure of the DELF B2 argumentative essay.",
    intro_fr: "Dans cette unité, tu vas débattre de questions de société : l'opposition et la concession (bien que, même si, malgré, avoir beau), la mise en relief (c'est… qui, ce qui…, c'est), et la structure de l'essai argumenté du DELF B2.",
    can: ["Express opposition and concession with the right mood", "Put the focus on an idea with c'est… qui / que and ce qui…, c'est", "Debate a social question with nuance", "Plan and write an argumentative essay", "Understand a radio debate and spot each speaker's position"],
    can_fr: ["Exprimer l'opposition et la concession avec le bon mode", "Mettre une idée en relief avec c'est… qui / que et ce qui…, c'est", "Débattre d'une question de société avec nuance", "Construire et rédiger un essai argumenté", "Comprendre un débat radio et repérer la position de chacun"],
    lessons: [81, 82, 83], vocab: ["societeFR", "argumenterFR"], reading: "voisins", prompt: "fr-b2-3",
    writing: { task: "Write an argumentative essay (250-280 words) on this question: Should volunteering be compulsory for all high-school students? Introduce the question, weigh the arguments, and give a nuanced conclusion.", task_fr: "Rédige un essai argumenté (250 à 280 mots) sur cette question : Le bénévolat devrait-il être obligatoire pour tous les lycéens ? Pose la problématique, pèse les arguments, et conclus de façon nuancée.", words: "250-280",
      tips: ["De nos jours, …", "La question se pose de savoir si…", "Certes, …, mais…", "Ce qui…, c'est…", "En définitive, il serait souhaitable que…"],
      checklist: ["My introduction asks a clear question and announces a plan", "Each part has an argument and an example", "I used a concession with the right mood", "I used a mise en relief", "I wrote between 250 and 280 words"],
      model: "Faut-il rendre le bénévolat obligatoire au lycée ?\n\nDe nos jours, de nombreuses associations manquent de bénévoles, alors que beaucoup de jeunes disent vouloir s'engager. Certains proposent donc de rendre le bénévolat obligatoire pour tous les lycéens. La question se pose de savoir si une telle mesure renforcerait vraiment la solidarité. Nous verrons d'abord les arguments en sa faveur, puis ses limites.\n\nTout d'abord, il est vrai qu'une expérience de bénévolat peut changer le regard des jeunes sur la société. En aidant dans une épicerie solidaire ou en accompagnant des personnes âgées, ils découvrent des réalités qu'ils ignoraient. En outre, cette expérience leur permet d'acquérir des compétences utiles, comme le travail en équipe ou le sens des responsabilités. C'est d'ailleurs souvent à cette occasion que naissent des vocations dans le social ou la santé.\n\nNéanmoins, ce qui fait la valeur du bénévolat, c'est justement qu'il est librement choisi. Bien que l'intention soit bonne, un engagement imposé risque d'être vécu comme une contrainte de plus. Par ailleurs, les associations ont besoin de personnes motivées, et non d'élèves qui comptent les heures. Prenons l'exemple des clubs sportifs : ceux qui fonctionnent le mieux sont ceux où chacun vient par envie. Enfin, tous les lycéens n'ont pas le même temps libre : certains travaillent déjà le week-end pour aider leur famille.\n\nEn définitive, plutôt que d'obliger les lycéens, il serait souhaitable que chaque établissement leur fasse découvrir plusieurs associations et qu'il valorise leur engagement, par exemple dans leur dossier scolaire. C'est en donnant envie, et non en imposant, que l'on formera des citoyens solidaires." } });
})();
