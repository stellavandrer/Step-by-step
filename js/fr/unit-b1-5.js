/* Cours de français, unité B1-5 « Giving your opinion / Donner son avis » : le subjonctif présent (formes et
   déclencheurs : nécessité, volonté, sentiments), opinion certaine (indicatif) ou douteuse (subjonctif), espérer
   que + indicatif, les connecteurs pour argumenter et débattre poliment. Personnages fictifs, prénoms français.
   Pas de faits chiffrés : textes d'opinion uniquement. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "opinionFR", icon: "scale", title: "Opinions and debate", title_fr: "Opinions et débat", level: "B1", words: [
    ["à mon avis", "in my opinion", "À mon avis, c'est une erreur."],
    ["selon moi", "in my view", "Selon moi, il faut attendre."],
    ["je trouve que", "I think that, I find that", "Je trouve que ce film est trop long."],
    ["être d'accord avec", "to agree with", "Je suis d'accord avec toi."],
    ["avoir raison", "to be right", "Tu as raison, c'est trop cher."],
    ["avoir tort", "to be wrong", "Il a tort de s'inquiéter."],
    ["le point de vue", "the point of view", "Je comprends ton point de vue."],
    ["l'argument", "the argument, the point", "C'est un bon argument."],
    ["convaincre", "to convince", "Tu ne vas pas me convaincre !"],
    ["défendre", "to defend, to stand up for", "Elle défend ses idées avec passion."],
    ["critiquer", "to criticise", "Il critique tout, tout le temps."],
    ["douter", "to doubt", "Je doute qu'il vienne."],
    ["l'avantage", "the advantage", "Le principal avantage, c'est le prix."],
    ["l'inconvénient", "the drawback, the disadvantage", "Le seul inconvénient, c'est le bruit."],
    ["être pour", "to be in favour", "Je suis pour la semaine de quatre jours."],
    ["être contre", "to be against", "Beaucoup d'habitants sont contre le projet."],
    ["le débat", "the debate", "Le débat a duré deux heures."],
    ["la preuve", "the proof, the evidence", "Tu as des preuves ?"]
  ] },
  { id: "connecteursFR", icon: "messages-square", title: "Linking words", title_fr: "Les connecteurs", level: "B1", words: [
    ["tout d'abord", "first of all", "Tout d'abord, merci d'être venus."],
    ["de plus", "moreover, what's more", "C'est loin. De plus, c'est cher."],
    ["par contre", "on the other hand, however", "Le quartier est calme. Par contre, il est loin de tout."],
    ["en revanche", "on the other hand (more formal)", "Le film est beau. En revanche, il est trop long."],
    ["pourtant", "and yet, however", "Il a beaucoup travaillé, et pourtant il a raté l'examen."],
    ["cependant", "however (formal)", "Le projet est intéressant. Cependant, il coûte cher."],
    ["c'est pourquoi", "that's why", "Il pleuvait, c'est pourquoi nous sommes restés."],
    ["par conséquent", "consequently, therefore", "Le train a du retard ; par conséquent, la réunion est reportée."],
    ["en effet", "indeed, in fact", "Je m'inquiète. En effet, il n'a pas appelé."],
    ["par exemple", "for example", "Il y a des solutions, par exemple le vélo."],
    ["d'un côté", "on the one hand", "D'un côté, c'est pratique."],
    ["de l'autre côté", "on the other hand", "De l'autre côté, c'est bruyant."],
    ["même si", "even if", "Je viendrai, même s'il pleut."],
    ["alors que", "whereas, while", "Il travaille alors que tout le monde dort."],
    ["en conclusion", "in conclusion", "En conclusion, je suis plutôt pour."],
    ["au contraire", "on the contrary", "Ce n'est pas cher, au contraire !"],
    ["notamment", "in particular, notably", "Il y a des avantages, notamment le prix."],
    ["quand même", "all the same, still", "C'est cher, mais je l'achète quand même."]
  ] });

  W.LESSONS.push(
  {
    id: 57, level: "B1", icon: "sparkles",
    title: "Il faut que tu viennes: the subjunctive", title_fr: "Il faut que tu viennes : le subjonctif présent",
    subtitle: "Not a tense but a mood: for what is needed, wanted or felt, not for facts.", subtitle_fr: "Pas un temps mais un mode : pour ce qui est nécessaire, voulu ou ressenti, pas pour les faits.",
    body: `
<h2>A mood, not a tense</h2>
<p>The subjunctive expresses something necessary, wanted, feared or felt, not a fact. It almost always comes after <s-fr>que</s-fr>, with a different subject: <s-fr>Je veux que tu viennes.</s-fr> (I want you to come.) With the same subject, use the infinitive: <s-fr>Je veux venir.</s-fr></p>
<h2>Regular forms</h2>
<p>Take the <s-fr>ils</s-fr> form of the present, remove <s-fr>-ent</s-fr>, and add <s-fr>-e, -es, -e, -ions, -iez, -ent</s-fr>.</p>
<table>
<tr><th>parler (ils parlent)</th><th>finir (ils finissent)</th><th>prendre (ils prennent)</th></tr>
<tr><td><s-fr>que je parle</s-fr></td><td><s-fr>que je finisse</s-fr></td><td><s-fr>que je prenne</s-fr></td></tr>
<tr><td><s-fr>que tu parles</s-fr></td><td><s-fr>que tu finisses</s-fr></td><td><s-fr>que tu prennes</s-fr></td></tr>
<tr><td><s-fr>qu'il / elle parle</s-fr></td><td><s-fr>qu'il / elle finisse</s-fr></td><td><s-fr>qu'il / elle prenne</s-fr></td></tr>
<tr><td><s-fr>que nous parlions</s-fr></td><td><s-fr>que nous finissions</s-fr></td><td><s-fr>que nous prenions</s-fr></td></tr>
<tr><td><s-fr>que vous parliez</s-fr></td><td><s-fr>que vous finissiez</s-fr></td><td><s-fr>que vous preniez</s-fr></td></tr>
<tr><td><s-fr>qu'ils / elles parlent</s-fr></td><td><s-fr>qu'ils / elles finissent</s-fr></td><td><s-fr>qu'ils / elles prennent</s-fr></td></tr>
</table>
<h2>Irregular forms</h2>
<p><s-fr>être</s-fr>: <s-fr>que je sois, tu sois, il soit, nous soyons, vous soyez, ils soient</s-fr> · <s-fr>avoir</s-fr>: <s-fr>que j'aie, tu aies, il ait, nous ayons, vous ayez, ils aient</s-fr> · <s-fr>aller</s-fr>: <s-fr>que j'aille, nous allions</s-fr> · <s-fr>faire</s-fr>: <s-fr>que je fasse</s-fr> · <s-fr>pouvoir</s-fr>: <s-fr>que je puisse</s-fr> · <s-fr>savoir</s-fr>: <s-fr>que je sache</s-fr> · <s-fr>vouloir</s-fr>: <s-fr>que je veuille</s-fr></p>
<h2>After what?</h2>
<p><b>Necessity:</b> <s-fr>il faut que, il est important que</s-fr> · <b>Wishes:</b> <s-fr>je veux que, j'aimerais que, je préfère que</s-fr> · <b>Feelings:</b> <s-fr>c'est dommage que, j'ai peur que, ça me fait plaisir que, je regrette que</s-fr></p>
<div class="tip">The subjunctive isn't rare or posh: <s-fr>Il faut que j'y aille</s-fr> (I've got to go) is one of the most common sentences in spoken French.</div>
`,
    examples: [
      ["Il faut que je parte à huit heures.", "I have to leave at eight."],
      ["Il faut que tu fasses attention.", "You need to be careful."],
      ["Je veux que vous soyez à l'heure.", "I want you to be on time."],
      ["J'aimerais que vous veniez avec nous.", "I'd like you to come with us."],
      ["C'est dommage qu'elle ne puisse pas venir.", "It's a pity she can't come."],
      ["J'ai peur qu'il soit en retard.", "I'm afraid he'll be late."],
      ["Ça me fait plaisir que tu sois là.", "I'm so glad you're here."],
      ["Il faut que j'y aille !", "I've got to go!"]
    ],
    quiz: [
      { q: "“You have to come tomorrow” is:", o: ["Il faut que tu viens demain.", "Il faut que tu viennes demain.", "Il faut que tu viendras demain."], a: 1, ex: "il faut que + subjunctive: tu viennes." },
      { q: "“I want to leave” (same subject) is:", o: ["Je veux que je parte.", "Je veux partir.", "Je veux que partir."], a: 1, ex: "Same subject: the infinitive." },
      { q: "The subjunctive of être with il is:", o: ["qu'il est", "qu'il soit", "qu'il sera"], a: 1, ex: "qu'il soit." },
      { q: "“It's a pity he can't come” is:", o: ["C'est dommage qu'il ne peut pas venir.", "C'est dommage qu'il ne puisse pas venir.", "C'est dommage qu'il ne pourra pas venir."], a: 1, ex: "A feeling: subjunctive (puisse)." },
      { q: "The subjunctive stem of regular verbs comes from:", o: ["the infinitive", "the ils form of the present", "the future"], a: 1, ex: "ils finissent → que je finisse." }
    ]
  },
  {
    id: 58, level: "B1", icon: "scale",
    title: "Je pense que, je ne pense pas que: sure or doubtful?", title_fr: "Je pense que, je ne pense pas que : certain ou douteux ?",
    subtitle: "Indicative for what you believe, subjunctive for what you doubt, and the conjunctions that need it.", subtitle_fr: "L'indicatif pour ce que tu crois, le subjonctif pour ce dont tu doutes, et les conjonctions qui l'exigent.",
    body: `
<h2>Certainty: the indicative</h2>
<p><s-fr>Je pense que c'est vrai.</s-fr> · <s-fr>Je crois qu'il a raison.</s-fr> · <s-fr>Je trouve que c'est trop cher.</s-fr> · <s-fr>Il est probable qu'il viendra.</s-fr> · <s-fr>Il est certain que…</s-fr></p>
<h2>Doubt: the subjunctive</h2>
<p>In the negative, or with a word of doubt, the subjunctive comes back: <s-fr>Je ne pense pas que ce soit vrai.</s-fr> · <s-fr>Je ne crois pas qu'il ait raison.</s-fr> · <s-fr>Je doute qu'il vienne.</s-fr> · <s-fr>Il est possible qu'il pleuve.</s-fr> · <s-fr>Ça m'étonnerait qu'elle accepte.</s-fr></p>
<table>
<tr><th>Sure → indicative</th><th>Not sure → subjunctive</th></tr>
<tr><td><s-fr>Je pense qu'il vient.</s-fr></td><td><s-fr>Je ne pense pas qu'il vienne.</s-fr></td></tr>
<tr><td><s-fr>Il est probable qu'elle a raison.</s-fr></td><td><s-fr>Il est possible qu'elle ait raison.</s-fr></td></tr>
</table>
<h2>Conjunctions + subjunctive</h2>
<p><s-fr>pour que</s-fr> (so that), <s-fr>avant que</s-fr> (before), <s-fr>à condition que</s-fr> (provided that), <s-fr>bien que</s-fr> (although): <s-fr>Je t'explique pour que tu comprennes.</s-fr> · <s-fr>Rentre avant qu'il fasse nuit.</s-fr> · <s-fr>Bien qu'il soit tard, je reste.</s-fr></p>
<p>But <s-fr>parce que</s-fr>, <s-fr>pendant que</s-fr> and <s-fr>après que</s-fr> take the indicative.</p>
<div class="tip">A classic trap: <s-fr>espérer que</s-fr> takes the indicative, because you're fairly confident: <s-fr>J'espère que tu vas bien.</s-fr> · <s-fr>J'espère qu'il fera beau.</s-fr> Never <s-fr>j'espère que tu ailles bien</s-fr>.</div>
`,
    examples: [
      ["Je pense que c'est une bonne idée.", "I think it's a good idea."],
      ["Je ne pense pas que ce soit une bonne idée.", "I don't think it's a good idea."],
      ["Je doute qu'il ait le temps.", "I doubt he has the time."],
      ["Il est possible qu'il pleuve demain.", "It may rain tomorrow."],
      ["Je t'explique pour que tu comprennes.", "I'm explaining so that you understand."],
      ["Rentre avant qu'il fasse nuit.", "Come home before it gets dark."],
      ["Bien qu'il soit fatigué, il continue.", "Although he's tired, he keeps going."],
      ["J'espère que tu vas bien.", "I hope you're well."]
    ],
    quiz: [
      { q: "“I don't think it's true” is:", o: ["Je ne pense pas que c'est vrai.", "Je ne pense pas que ce soit vrai.", "Je ne pense pas que ce sera vrai."], a: 1, ex: "Negative opinion: subjunctive." },
      { q: "“I hope you're well” is:", o: ["J'espère que tu ailles bien.", "J'espère que tu vas bien.", "J'espère que tu irais bien."], a: 1, ex: "espérer que + indicative." },
      { q: "“It may rain” (it's possible) is:", o: ["Il est possible qu'il pleut.", "Il est possible qu'il pleuve.", "Il est possible qu'il pleuvra."], a: 1, ex: "il est possible que + subjunctive." },
      { q: "Which one takes the indicative?", o: ["pour que", "bien que", "parce que"], a: 2, ex: "parce que gives a fact: indicative." },
      { q: "“I think he's right” is:", o: ["Je pense qu'il a raison.", "Je pense qu'il ait raison.", "Je pense qu'il soit raison."], a: 0, ex: "Positive opinion: indicative." }
    ]
  },
  {
    id: 59, level: "B1", kind: "functional", icon: "messages-square",
    title: "Everyday French: debating politely", title_fr: "Le français de tous les jours : débattre poliment",
    subtitle: "Build an argument with linking words, agree, disagree without offending, and keep the floor.", subtitle_fr: "Construire un argument avec des connecteurs, être d'accord, ne pas l'être sans vexer, et garder la parole.",
    body: `
<h2>Building an argument</h2>
<p>Start: <s-fr>Tout d'abord,</s-fr> … Add: <s-fr>De plus,</s-fr> … <s-fr>En plus,</s-fr> … Justify: <s-fr>En effet,</s-fr> … Illustrate: <s-fr>Par exemple,</s-fr> … Balance: <s-fr>D'un côté,</s-fr> … <s-fr>de l'autre côté,</s-fr> … Contrast: <s-fr>Par contre,</s-fr> / <s-fr>En revanche,</s-fr> / <s-fr>Pourtant,</s-fr> … Conclude: <s-fr>C'est pourquoi</s-fr> … <s-fr>En conclusion,</s-fr> …</p>
<h2>Agreeing</h2>
<p><s-fr>Je suis tout à fait d'accord.</s-fr> · <s-fr>Tu as raison.</s-fr> · <s-fr>C'est exactement ce que je pense.</s-fr> · <s-fr>Absolument !</s-fr></p>
<h2>Disagreeing without offending</h2>
<p><s-fr>Je ne suis pas tout à fait d'accord.</s-fr> · <s-fr>Je comprends ton point de vue, mais…</s-fr> · <s-fr>C'est vrai que…, mais…</s-fr> · <s-fr>Je ne vois pas les choses comme ça.</s-fr> · <s-fr>Au contraire !</s-fr> (stronger)</p>
<h2>Keeping the floor</h2>
<p><s-fr>Je peux dire quelque chose ?</s-fr> · <s-fr>Laisse-moi finir !</s-fr> · <s-fr>Pour revenir à ce que tu disais…</s-fr> · <s-fr>Attends, je n'ai pas terminé.</s-fr></p>
<div class="tip">Two false friends in a debate: to agree is <s-fr>être d'accord</s-fr> (not <s-fr>agréer</s-fr>, which only appears in formal letters), and to be right is <s-fr>avoir raison</s-fr> (you have reason), never <s-fr>être juste</s-fr> or <s-fr>être droit</s-fr>.</div>
`,
    examples: [
      ["Tout d'abord, je voudrais vous remercier.", "First of all, I'd like to thank you."],
      ["De plus, c'est mauvais pour la santé.", "Moreover, it's bad for your health."],
      ["Je suis tout à fait d'accord avec toi.", "I completely agree with you."],
      ["Je comprends ton point de vue, mais je ne suis pas d'accord.", "I understand your point of view, but I don't agree."],
      ["C'est vrai que c'est cher, mais c'est de bonne qualité.", "It's true it's expensive, but it's good quality."],
      ["Laisse-moi finir, s'il te plaît !", "Let me finish, please!"],
      ["C'est pourquoi je suis contre ce projet.", "That's why I'm against this project."]
    ],
    quiz: [
      { q: "“I agree with you” is:", o: ["J'agrée avec toi.", "Je suis d'accord avec toi.", "Je suis d'accord à toi."], a: 1, ex: "être d'accord avec quelqu'un." },
      { q: "“You're right” is:", o: ["Tu es juste.", "Tu as raison.", "Tu es droit."], a: 1, ex: "avoir raison." },
      { q: "The most polite way to disagree:", o: ["Au contraire !", "Je comprends ton point de vue, mais…", "N'importe quoi !"], a: 1, ex: "Acknowledge first, then disagree." },
      { q: "“That's why” is:", o: ["C'est pourquoi", "C'est parce que", "Pour quoi c'est"], a: 0, ex: "C'est pourquoi = that's why." },
      { q: "To add an argument, you can say:", o: ["Par contre", "De plus", "Pourtant"], a: 1, ex: "De plus = moreover. The others contrast." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    57: {
      gap: [["Il faut que tu ___ tes devoirs. (faire)", "fasses"], ["Je veux qu'il ___ à l'heure. (être)", "soit"], ["J'aimerais que vous ___ avec nous. (venir)", "veniez"], ["C'est dommage qu'elle ne ___ pas venir. (pouvoir)", "puisse"]],
      fix: [["Il faut que tu viens demain.", "Il faut que tu viennes demain.", "il faut que + subjunctive."], ["Je veux que je parte tôt.", "Je veux partir tôt.", "Same subject: the infinitive, not que + subjunctive."]],
      task: ["You're going away for a week. Write four instructions for the person looking after your flat, with il faut que and j'aimerais que.", "Tu pars une semaine. Écris quatre consignes pour la personne qui garde ton appartement, avec il faut que et j'aimerais que.", "Il faut que tu arroses les plantes tous les deux jours. Il faut aussi que tu donnes à manger au chat le matin et le soir. J'aimerais que tu prennes le courrier, et que tu fermes bien les fenêtres quand tu pars. Merci mille fois !"]
    },
    58: {
      gap: [["Je pense que c'___ une bonne idée. (être)", "est"], ["Je ne pense pas que ce ___ une bonne idée. (être)", "soit"], ["J'espère que tu ___ bien. (aller)", "vas"], ["Je doute qu'il ___ raison. (avoir)", "ait"]],
      fix: [["J'espère que tu sois en forme.", "J'espère que tu es en forme.", "espérer que + indicative."], ["Je ne crois pas qu'il vient.", "Je ne crois pas qu'il vienne.", "A negative opinion: croire que + subjunctive."]],
      task: ["Give your opinion on three statements, one you believe, one you doubt, one you hope: In ten years, cars will be banned in city centres. People will read more books. We'll work four days a week.", "Donne ton avis sur trois affirmations, une à laquelle tu crois, une dont tu doutes, une que tu espères : Dans dix ans, les voitures seront interdites en centre-ville. Les gens liront plus de livres. On travaillera quatre jours par semaine.", "Je pense que les voitures seront interdites dans le centre des grandes villes. Par contre, je ne crois pas que les gens lisent plus de livres : on passe trop de temps sur nos écrans. Et j'espère qu'on travaillera quatre jours par semaine !"]
    },
    59: {
      gap: [["Je suis tout à fait ___ avec toi. (agree)", "d'accord"], ["Tu as ___, mais… (you're right)", "raison"], ["Je comprends ton point de ___, mais… (view)", "vue"], ["Il a beaucoup travaillé, et ___ il a raté l'examen. (and yet)", "pourtant"]],
      fix: [["Je suis d'accord à toi.", "Je suis d'accord avec toi.", "être d'accord avec quelqu'un."], ["Tu es juste, c'est trop cher.", "Tu as raison, c'est trop cher.", "To be right: avoir raison."]],
      task: ["Write a short argument (5 or 6 sentences) for or against school uniforms, with at least four linking words.", "Écris un court argument (5 ou 6 phrases) pour ou contre l'uniforme à l'école, avec au moins quatre connecteurs.", "Tout d'abord, je suis plutôt pour l'uniforme à l'école. En effet, il permet d'éviter les moqueries sur les vêtements. De plus, les parents dépensent moins d'argent. Par contre, je comprends que certains élèves veuillent montrer leur personnalité. C'est pourquoi on pourrait choisir un uniforme simple, avec quelques libertés. En conclusion, il faut que chaque école en discute avec les familles."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "debatcentre", lesson: 59, level: "B1", icon: "messages-square", partner: "Manon", role: "a friend",
    title: "A car-free town centre?", title_fr: "Un centre-ville sans voitures ?",
    setting: "Your friend Manon thinks closing the town centre to cars at weekends is a bad idea. You're in favour. Debate politely.", setting_fr: "Ton amie Manon trouve que fermer le centre-ville aux voitures le week-end est une mauvaise idée. Toi, tu es pour. Débattez poliment.",
    turns: [
      { p: "Franchement, fermer le centre-ville aux voitures le week-end, c'est une mauvaise idée.", fr: "Honestly, closing the town centre to cars at weekends is a bad idea." },
      { y: ["Je ne suis pas tout à fait d'accord. Il faut que les gens puissent se promener tranquillement.", "Je ne suis pas tout à fait d'accord. Il faut que les gens peuvent se promener tranquillement.", "Je ne suis pas tout à fait agréé. Il faut que les gens puissent se promener tranquillement."], fr: "I don't quite agree. People need to be able to walk around in peace.", why: "il faut que + subjunctive (puissent); être d'accord." },
      { p: "Mais les commerçants vont perdre des clients !", fr: "But the shopkeepers will lose customers!" },
      { y: ["Je ne pense pas qu'ils en perdent beaucoup. Au contraire, il y aura plus de monde dans les rues.", "Je ne pense pas qu'ils en perdent pas beaucoup. Au contraire, il y aura plus de monde dans les rues.", "Je ne pense pas que ils en perdent beaucoup. Au contraire, il y aura plus de monde dans les rues."], fr: "I don't think they'll lose many. On the contrary, there'll be more people in the streets.", why: "je ne pense pas que + subjunctive; que + ils = qu'ils." },
      { p: "Et les personnes âgées ? Comment elles vont venir en ville ?", fr: "And elderly people? How will they get into town?" },
      { y: ["C'est vrai, c'est un vrai problème. C'est pourquoi il faudrait plus de bus gratuits.", "C'est vrai, c'est un vrai problème. Pourquoi il faudrait plus de bus gratuits.", "C'est vrai, c'est un vrai problème. C'est pourquoi il faudrait plus de bus gratuites."], fr: "That's true, it's a real problem. That's why there should be more free buses.", why: "C'est pourquoi = that's why; un bus → gratuits." },
      { p: "Des bus gratuits ? Mais qui va payer ?", fr: "Free buses? But who's going to pay?" },
      { y: ["Je comprends ton point de vue, mais la ville pourrait payer avec l'argent des parkings.", "Je comprends ton point de vu, mais la ville pourrait payer avec l'argent des parkings.", "Je comprends ton point de vue, mais la ville pourrait payer avec l'argent de les parkings."], fr: "I understand your point of view, but the town could pay with the money from the car parks.", why: "le point de vue; de + les = des." },
      { p: "Hmm. Bon, tu n'as peut-être pas complètement tort…", fr: "Hmm. OK, maybe you're not completely wrong…" },
      { y: ["Tu vois ! En conclusion, il faut qu'on essaie, au moins pendant un été.", "Tu vois ! En conclusion, il faut qu'on essayer, au moins pendant un été.", "Tu vois ! En conclusion, il faut qu'on essaie, au moins pendant une été."], fr: "You see! In conclusion, we have to try it, at least for one summer.", why: "il faut que + subjunctive (qu'on essaie); un été." }
    ] }
  );

  W.READINGS.push({
    id: "teletravail", level: "B1", icon: "scale", title: "Le télétravail : pour ou contre ?", genre: "Opinion pieces",
    intro: "Two readers defend opposite points of view on working from home, then answer each other. Opinions, the subjunctive and linking words.",
    intro_fr: "Deux lecteurs défendent des points de vue opposés sur le télétravail, puis se répondent. Opinions, subjonctif et connecteurs.",
    paragraphs: [
      { en: "Depuis quelques années, le télétravail fait partie de la vie de nombreux salariés. Mais est-ce vraiment un progrès ? Nous avons demandé à deux lecteurs de défendre leur point de vue.", fr: "For a few years now, working from home has been part of many employees' lives. But is it really progress? We asked two readers to defend their point of view." },
      { en: "Juliette, 34 ans, graphiste : Pour moi, le télétravail a changé ma vie. Tout d'abord, je ne perds plus deux heures par jour dans les transports. De plus, je suis beaucoup plus concentrée chez moi : au bureau, on m'interrompait sans arrêt. Bien sûr, il faut que l'entreprise fasse confiance à ses salariés. Mais je suis convaincue que c'est l'avenir.", fr: "Juliette, 34, graphic designer: For me, working from home has changed my life. First of all, I no longer lose two hours a day commuting. What's more, I concentrate much better at home: at the office, I was interrupted all the time. Of course, the company has to trust its employees. But I'm convinced it's the future." },
      { en: "Olivier, 52 ans, chef de projet : Je ne pense pas que le télétravail soit une bonne solution pour tout le monde. D'un côté, c'est pratique, je le reconnais. De l'autre côté, on perd le contact avec les collègues. Les jeunes, en particulier, ont besoin qu'on les aide et qu'on leur explique leur travail. Comment apprendre un métier si on est seul devant un écran ?", fr: "Olivier, 52, project manager: I don't think working from home is a good solution for everyone. On the one hand, it's practical, I admit. On the other hand, you lose contact with your colleagues. Young people, in particular, need someone to help them and explain their work. How can you learn a job if you're alone in front of a screen?" },
      { en: "Juliette lui répond : Je comprends son point de vue, mais il existe des solutions. On peut venir au bureau deux jours par semaine, par exemple. L'important, c'est que chacun puisse choisir.", fr: "Juliette replies: I understand his point of view, but there are solutions. You can come into the office two days a week, for example. What matters is that everyone can choose." },
      { en: "Olivier conclut : Sur ce point, je suis d'accord. En revanche, il faudrait que les règles soient claires. Sinon, on finit par travailler le soir et le week-end !", fr: "Olivier concludes: On that point, I agree. On the other hand, the rules would need to be clear. Otherwise, you end up working in the evenings and at weekends!" }
    ],
    glossary: { "nombreux": "many", "progrès": "progress", "graphiste": "graphic designer", "concentrée": "focused", "interrompait": "interrupted", "arrêt": "stop (sans arrêt: all the time)", "convaincue": "convinced", "reconnais": "admit", "particulier": "particular (en particulier: in particular)", "métier": "job, trade", "écran": "screen", "chacun": "everyone, each person", "conclut": "concludes", "règles": "rules", "claires": "clear", "sinon": "otherwise" },
    questions: [
      { q: "Qu'est-ce que Juliette ne perd plus grâce au télétravail ?", o: ["Son salaire", "Deux heures par jour dans les transports", "Ses collègues"], a: 1 },
      { q: "Pourquoi travaille-t-elle mieux chez elle ?", o: ["Au bureau, on l'interrompait sans arrêt.", "Elle a un plus grand bureau.", "Elle travaille la nuit."], a: 0 },
      { q: "Selon Olivier, qui a surtout besoin d'être au bureau ?", o: ["Les chefs", "Les clients", "Les jeunes"], a: 2 },
      { q: "Quelle solution propose Juliette ?", o: ["Venir au bureau deux jours par semaine", "Arrêter le télétravail", "Travailler le week-end"], a: 0 },
      { q: "Qu'est-ce qu'Olivier demande à la fin ?", o: ["Plus de salaire", "Des règles claires", "Plus de réunions"], a: 1 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-b1-5", unit: "b1-5", level: "B1", icon: "radio",
    title: "Les grandes vacances, trop longues ?", title_fr: "Les grandes vacances, trop longues ?",
    context: "A radio debate: are the summer holidays too long? Yves, the presenter, talks to Corinne, a mother of three, and Samuel, a maths teacher.", context_fr: "Un débat à la radio : les grandes vacances sont-elles trop longues ? Yves, l'animateur, reçoit Corinne, mère de trois enfants, et Samuel, professeur de mathématiques.",
    words: [["les grandes vacances", "the summer holidays"], ["faire garder", "to have (children) looked after"], ["la rentrée", "the start of the school year"], ["raccourcir", "to shorten"], ["un terrain d'entente", "common ground"]],
    lines: [["Yves", "Bonsoir à tous. Ce soir, une question qui divise : les grandes vacances sont-elles trop longues ? Corinne, vous êtes pour des vacances plus courtes ?", "fr-FR"], ["Corinne", "Oui. Huit semaines, c'est trop long. Il faut que les parents trouvent des solutions pour faire garder les enfants, et ça coûte cher. Et puis, à la rentrée, les enfants ont oublié beaucoup de choses.", "fr-FR"], ["Yves", "Samuel, vous n'êtes pas d'accord ?", "fr-FR"], ["Samuel", "Pas tout à fait. Je comprends le problème des parents, mais je ne pense pas que la solution soit de raccourcir les vacances. Les enfants ont besoin de se reposer, de jouer, de découvrir autre chose que l'école.", "fr-FR"], ["Corinne", "D'accord, mais tous les enfants ne partent pas en vacances ! Certains restent chez eux tout l'été, devant les écrans.", "fr-FR"], ["Samuel", "C'est vrai, et c'est pourquoi il faudrait plus d'activités gratuites dans les villes : du sport, des sorties, des ateliers. Ce serait plus utile que de garder les enfants en classe.", "fr-FR"], ["Yves", "Alors, est-ce que vous trouvez un terrain d'entente ?", "fr-FR"], ["Corinne", "Sur les activités gratuites, oui, je suis d'accord. À condition qu'elles soient vraiment accessibles à tout le monde.", "fr-FR"], ["Samuel", "Absolument.", "fr-FR"]],
    gist: ["De quoi parlent Corinne et Samuel ?", ["De la longueur des vacances d'été", "Des devoirs à la maison", "Du prix des écoles"]],
    detail: [["Selon Corinne, combien de temps durent les grandes vacances ?", ["Huit semaines", "Six semaines", "Dix semaines"]], ["Pourquoi Samuel est-il contre des vacances plus courtes ?", ["Les enfants ont besoin de se reposer et de découvrir autre chose.", "Les professeurs sont fatigués.", "Les parents ne veulent pas."]], ["Quelle solution propose Samuel ?", ["Plus d'activités gratuites dans les villes", "Plus de devoirs", "Des vacances plus longues"]], ["Sur quoi sont-ils d'accord à la fin ?", ["Les activités gratuites", "La durée des vacances", "Rien"]]],
    decode: ["je ne pense pas que la solution soit", "À condition qu'elles soient vraiment accessibles"],
    tip: "In a debate, linking words tell you where the argument is going: mais, c'est pourquoi, à condition que. And when you hear que + soit, puisse or fasse, the speaker is expressing doubt, necessity or a condition.", tip_fr: "Dans un débat, les connecteurs te disent où va l'argument : mais, c'est pourquoi, à condition que. Et quand tu entends que + soit, puisse ou fasse, la personne exprime un doute, une nécessité ou une condition."
  }]);

  W.PROMPTS.push({ id: "fr-b1-5", level: "B1", q: "Les réseaux sociaux : plutôt une bonne ou une mauvaise chose ? Donne ton avis avec des arguments.", fr: "Social media: a good or a bad thing, on the whole? Give your opinion with arguments.", time: 150,
    phrases: ["À mon avis, …", "D'un côté…, de l'autre côté…", "Je ne pense pas que…", "Il faut que…", "En conclusion, …"],
    model: "À mon avis, les réseaux sociaux ne sont ni bons ni mauvais : tout dépend de la façon de les utiliser. D'un côté, ils permettent de garder le contact avec des amis qui habitent loin, et de découvrir des idées nouvelles. De l'autre côté, on y passe souvent trop de temps, et je ne pense pas que ce soit bon pour le moral. C'est pourquoi il faut qu'on apprenne à les utiliser, notamment les plus jeunes. En conclusion, je suis pour, mais avec modération !" });

  W.WRITING_GUIDE["b1-5"] = { genre: "An opinion essay (DELF B1)", genre_fr: "Un texte argumenté (DELF B1)",
    plan: [["Present the question and your position.", "Présente la question et ta position."], ["Give one side, with an example (d'un côté).", "Donne un premier côté, avec un exemple (d'un côté)."], ["Give the other side (de l'autre côté, par contre).", "Donne l'autre côté (de l'autre côté, par contre)."], ["Use the subjunctive to say what is needed or doubtful.", "Utilise le subjonctif pour dire ce qui est nécessaire ou douteux."], ["Conclude clearly.", "Conclus clairement."]],
    marks: [["je ne suis pas tout à fait d'accord", "polite disagreement", "un désaccord poli"], ["D'un côté", "d'un côté… de l'autre", "d'un côté… de l'autre"], ["Il faut donc que les professeurs expliquent", "il faut que + subjunctive", "il faut que + subjonctif"], ["je ne pense pas qu'on puisse", "doubt + subjunctive", "un doute + subjonctif"], ["En effet", "a linking word to justify", "un connecteur pour justifier"], ["j'aimerais que l'école évalue", "a wish + subjunctive", "un souhait + subjonctif"]] };

  W.COURSE.push({ id: "b1-5", level: "B1", icon: "scale", title: "Giving your opinion", title_fr: "Donner son avis",
    intro: "In this unit, you'll learn to argue in French: the subjunctive (what is needed, wanted or felt), the difference between a sure opinion and a doubt, the linking words of an argument, and how to disagree without offending.",
    intro_fr: "Dans cette unité, tu vas apprendre à argumenter en français : le subjonctif (ce qui est nécessaire, voulu ou ressenti), la différence entre une opinion sûre et un doute, les connecteurs d'un argument, et comment ne pas être d'accord sans vexer.",
    can: ["Form the present subjunctive and know when to use it", "Choose indicative or subjunctive after an opinion", "Build an argument with linking words", "Agree and disagree politely in a debate", "Write an opinion essay"],
    can_fr: ["Former le subjonctif présent et savoir quand l'utiliser", "Choisir l'indicatif ou le subjonctif après une opinion", "Construire un argument avec des connecteurs", "Être d'accord ou non, poliment, dans un débat", "Écrire un texte argumenté"],
    lessons: [57, 58, 59], vocab: ["opinionFR", "connecteursFR"], reading: "teletravail", prompt: "fr-b1-5",
    writing: { task: "A French magazine asks its readers: Should marks be abolished at school? Give your opinion (160-180 words), with arguments and examples.", task_fr: "Un magazine français demande à ses lecteurs : Faut-il supprimer les notes à l'école ? Donne ton avis (160 à 180 mots), avec des arguments et des exemples.", words: "160-180",
      tips: ["Je comprends ce point de vue, mais…", "D'un côté, …", "De l'autre côté, …", "Je ne pense pas que…", "En conclusion, …"],
      checklist: ["I gave my position clearly", "I used at least five linking words", "I used the subjunctive at least twice", "I gave an example", "I wrote between 160 and 180 words"],
      model: "Faut-il supprimer les notes à l'école ?\n\nJe lis souvent que les notes stressent les élèves et qu'il faudrait les supprimer. Je comprends ce point de vue, mais je ne suis pas tout à fait d'accord.\n\nD'un côté, il est vrai que les mauvaises notes peuvent décourager certains enfants. Il faut donc que les professeurs expliquent toujours leurs notes et qu'ils encouragent les progrès. De plus, une note seule ne dit pas tout : un commentaire est souvent plus utile.\n\nDe l'autre côté, je ne pense pas qu'on puisse évaluer les élèves sans aucune note. En effet, les élèves et leurs parents ont besoin de savoir où ils en sont. Par exemple, avant un examen important, une note permet de mesurer le travail qui reste à faire. Et plus tard, dans le monde du travail, on est aussi évalué !\n\nC'est pourquoi, à mon avis, il ne faut pas supprimer les notes, mais les accompagner de commentaires. En conclusion, j'aimerais que l'école évalue autant les progrès que les résultats." } });
})();
