/* Unité C2 « Imagining the future » (c2-10), complète : leçons 157-158 et leurs exercices, texte, atelier d'écoute,
   jeu de rôle, sujet d'oral, guide d'écriture et atelier de langue. Elle regroupe technologyC2, ecologyC2 et futureC2
   (venus de c2-3) et architectureC2 (venu de c2-5) ; timeC2 passe de c2-1 à c2-3 (« Hypothesis and time ») pour
   équilibrer les unités.
   Personnes fictives. Faits vérifiés : article de John Elfreth Watkins dans le Ladies' Home Journal (décembre 1900),
   avec des réseaux téléphoniques mondiaux, des photos transmises en couleur et la disparition annoncée des lettres
   C, X et Q ; essai de Keynes (1930) prédisant une semaine de quinze heures ; « bureau sans papier » annoncé en 1975
   par un magazine économique américain, suivi d'une hausse de la consommation de papier ; loi d'Amara. */
(function () {
  const W = window;

  W.LESSONS.push(
  {
    id: 157, after: 80, level: "C2", icon: "quote",
    title: "That it will change is certain: noun clauses as subjects", title_fr: "That it will change is certain : les propositions nominales en position de sujet",
    subtitle: "Put a whole idea at the start of the sentence with that, whether, what or how, and use the fact that after prepositions.", subtitle_fr: "Placer une idée entière en tête de phrase avec that, whether, what ou how, et utiliser the fact that après une préposition.",
    body: `
<h2>A whole clause as the subject</h2>
<p>In formal English, a complete clause can be the subject of a sentence. It puts the idea itself at the centre.</p>
<table>
<tr><th>Clause</th><th>Example</th></tr>
<tr><td><s-en>That</s-en> + clause</td><td><s-en>That the climate is changing is beyond doubt.</s-en></td></tr>
<tr><td><s-en>Whether</s-en> + clause</td><td><s-en>Whether cities can adapt in time remains to be seen.</s-en></td></tr>
<tr><td><s-en>What</s-en> + clause</td><td><s-en>What worries scientists most is the speed of change.</s-en></td></tr>
<tr><td><s-en>How · why · when</s-en> + clause</td><td><s-en>How we pay for it is another question.</s-en></td></tr>
</table>
<p>Notice the word order: no question form inside the clause. <s-en>How we pay for it</s-en>, never <s-en>how do we pay for it</s-en>.</p>
<h2>The more common alternative: it… that</h2>
<p>A long subject at the start can feel heavy, so English often moves it to the end with <s-en>it</s-en>: <s-en>It is beyond doubt that the climate is changing.</s-en> · <s-en>It remains to be seen whether cities can adapt in time.</s-en></p>
<p>Keep the clause-first version for when you want to give the idea weight, at the start of a paragraph or in a conclusion.</p>
<h2>The fact that, the idea that, the possibility that</h2>
<p>After a preposition, use <s-en>the fact that</s-en>: <s-en>Despite the fact that costs are falling, progress is slow.</s-en> Never <s-en>despite that costs are falling</s-en>. In the same way: <s-en>the idea that…</s-en>, <s-en>the possibility that…</s-en>, <s-en>the claim that…</s-en></p>
<div class="tip">A that-clause or whether-clause subject takes a singular verb: <s-en>That prices are rising worries everyone.</s-en> · <s-en>Whether the plans succeed depends on us.</s-en></div>
`,
    body_fr: `
<h2>Une proposition entière comme sujet</h2>
<p>En anglais soutenu, une proposition complète peut être le sujet d'une phrase. Cela place l'idée elle-même au centre.</p>
<table>
<tr><th>Proposition</th><th>Exemple</th></tr>
<tr><td><s-en>That</s-en> + proposition</td><td><s-en>That the climate is changing is beyond doubt.</s-en> (que le climat change ne fait aucun doute)</td></tr>
<tr><td><s-en>Whether</s-en> + proposition</td><td><s-en>Whether cities can adapt in time remains to be seen.</s-en> (reste à savoir si les villes pourront s'adapter à temps)</td></tr>
<tr><td><s-en>What</s-en> + proposition</td><td><s-en>What worries scientists most is the speed of change.</s-en> (ce qui inquiète le plus les scientifiques, c'est la vitesse du changement)</td></tr>
<tr><td><s-en>How · why · when</s-en> + proposition</td><td><s-en>How we pay for it is another question.</s-en> (comment le financer est une autre question)</td></tr>
</table>
<p>Remarque l'ordre des mots : pas de forme interrogative dans la proposition. <s-en>How we pay for it</s-en>, jamais <s-en>how do we pay for it</s-en>.</p>
<h2>L'alternative la plus courante : it… that</h2>
<p>Un long sujet en tête peut sembler lourd ; l'anglais le déplace donc souvent à la fin avec <s-en>it</s-en> : <s-en>It is beyond doubt that the climate is changing.</s-en> · <s-en>It remains to be seen whether cities can adapt in time.</s-en></p>
<p>Garde la version avec la proposition en tête quand tu veux donner du poids à l'idée, en début de paragraphe ou en conclusion.</p>
<h2>The fact that, the idea that, the possibility that</h2>
<p>Après une préposition, utilise <s-en>the fact that</s-en> : <s-en>Despite the fact that costs are falling, progress is slow.</s-en> (bien que les coûts baissent…). Jamais <s-en>despite that costs are falling</s-en>. De même : <s-en>the idea that…</s-en> (l'idée que…), <s-en>the possibility that…</s-en> (la possibilité que…), <s-en>the claim that…</s-en> (l'affirmation selon laquelle…)</p>
<div class="tip">Une proposition sujet en that ou en whether prend un verbe au singulier : <s-en>That prices are rising worries everyone.</s-en> · <s-en>Whether the plans succeed depends on us.</s-en></div>
`,
    examples: [
      ["That the climate is changing is beyond doubt.", "Que le climat change ne fait aucun doute."],
      ["Whether cities can adapt in time remains to be seen.", "Reste à savoir si les villes pourront s'adapter à temps."],
      ["What worries scientists most is the speed of change.", "Ce qui inquiète le plus les scientifiques, c'est la vitesse du changement."],
      ["How we pay for it is another question.", "Comment le financer est une autre question."],
      ["It remains to be seen whether the technology will work.", "Reste à voir si la technologie fonctionnera."],
      ["Despite the fact that costs are falling, progress is slow.", "Bien que les coûts baissent, les progrès sont lents."],
      ["The idea that technology will save us is tempting but dangerous.", "L'idée que la technologie nous sauvera est tentante mais dangereuse."]
    ],
    quiz: [
      { q: "___ the plan will succeed is far from certain.", q_fr: "Complète : « ___ the plan will succeed is far from certain. »", o: ["That", "What", "It"], a: 0, ex: "A that-clause as subject.", ex_fr: "Une proposition en that en position de sujet." },
      { q: "___ happens next depends on us.", q_fr: "Complète : « ___ happens next depends on us. »", o: ["That", "What", "Whether"], a: 1, ex: "What = the thing that.", ex_fr: "What = ce qui." },
      { q: "It remains to be seen ___ the project will be finished on time.", q_fr: "Complète : « It remains to be seen ___ the project will be finished on time. »", o: ["what", "that", "whether"], a: 2, ex: "whether = if (a yes/no question).", ex_fr: "whether = si (question fermée)." },
      { q: "___ the fact that it was raining, the event went ahead.", q_fr: "Complète : « ___ the fact that it was raining, the event went ahead. »", o: ["Despite", "Although", "Even"], a: 0, ex: "despite + the fact that + clause.", ex_fr: "despite + the fact that + proposition." },
      { q: "Which sentence is correct?", q_fr: "Quelle phrase est correcte ?", o: ["Despite that costs are falling, progress is slow.", "Despite the fact that costs are falling, progress is slow.", "Despite of costs are falling, progress is slow."], a: 1, ex: "After a preposition: the fact that.", ex_fr: "Après une préposition : the fact that." }
    ]
  },
  {
    id: 158, after: 80, level: "C2", kind: "functional", icon: "telescope",
    title: "Everyday English: speculating about the distant future", title_fr: "Anglais pratique : faire des hypothèses sur un avenir lointain",
    subtitle: "Imagine, predict and hedge in conversation: from mark my words to it's anyone's guess.", subtitle_fr: "Imaginer, prédire et nuancer en conversation : de mark my words à it's anyone's guess.",
    body: `
<h2>Inviting the other person to imagine</h2>
<p><s-en>Picture this:…</s-en> · <s-en>Fast-forward fifty years.</s-en> · <s-en>Imagine it's 2075 and…</s-en> · <s-en>Let's say, for the sake of argument, that…</s-en></p>
<h2>Confident predictions</h2>
<p><s-en>Mark my words:…</s-en> · <s-en>I'd put money on it.</s-en> · <s-en>It's only a matter of time before…</s-en> · <s-en>Sooner or later,…</s-en></p>
<h2>Cautious or open predictions</h2>
<p><s-en>I wouldn't be surprised if…</s-en> · <s-en>The jury's still out on…</s-en> · <s-en>It's anyone's guess.</s-en> · <s-en>Who knows? Maybe…</s-en></p>
<h2>Questioning a prediction</h2>
<p><s-en>That's a big if.</s-en> · <s-en>People said the same about…</s-en> · <s-en>I'll believe it when I see it.</s-en> · <s-en>Assuming, of course, that…</s-en></p>
<div class="tip">After <s-en>I wouldn't be surprised if</s-en>, use a past form to talk about the future: <s-en>I wouldn't be surprised if cars disappeared from city centres.</s-en> It's hypothetical, like the second conditional.</div>
`,
    body_fr: `
<h2>Inviter l'autre à imaginer</h2>
<p><s-en>Picture this:…</s-en> (imagine un peu…) · <s-en>Fast-forward fifty years.</s-en> (avance de cinquante ans) · <s-en>Imagine it's 2075 and…</s-en> · <s-en>Let's say, for the sake of argument, that…</s-en> (disons, pour les besoins de la discussion, que…)</p>
<h2>Des prédictions assurées</h2>
<p><s-en>Mark my words:…</s-en> (retiens bien ce que je te dis) · <s-en>I'd put money on it.</s-en> (j'en mettrais ma main au feu) · <s-en>It's only a matter of time before…</s-en> (ce n'est qu'une question de temps avant que…) · <s-en>Sooner or later,…</s-en> (tôt ou tard…)</p>
<h2>Des prédictions prudentes ou ouvertes</h2>
<p><s-en>I wouldn't be surprised if…</s-en> (ça ne m'étonnerait pas que…) · <s-en>The jury's still out on…</s-en> (la question reste ouverte pour…) · <s-en>It's anyone's guess.</s-en> (personne ne peut le dire) · <s-en>Who knows? Maybe…</s-en></p>
<h2>Mettre en doute une prédiction</h2>
<p><s-en>That's a big if.</s-en> (c'est un grand si) · <s-en>People said the same about…</s-en> (on a dit la même chose de…) · <s-en>I'll believe it when I see it.</s-en> (je le croirai quand je le verrai) · <s-en>Assuming, of course, that…</s-en> (à supposer, bien sûr, que…)</p>
<div class="tip">Après <s-en>I wouldn't be surprised if</s-en>, on utilise une forme passée pour parler de l'avenir : <s-en>I wouldn't be surprised if cars disappeared from city centres.</s-en> C'est hypothétique, comme au conditionnel.</div>
`,
    examples: [
      ["Fast-forward fifty years: most cars have disappeared from city centres.", "Avance de cinquante ans : la plupart des voitures ont disparu des centres-villes."],
      ["It's only a matter of time before robots do most of the housework.", "Ce n'est qu'une question de temps avant que les robots fassent l'essentiel du ménage."],
      ["I wouldn't be surprised if we lived to a hundred.", "Ça ne m'étonnerait pas qu'on vive jusqu'à cent ans."],
      ["The jury's still out on flying cars.", "Pour les voitures volantes, la question reste ouverte."],
      ["It's anyone's guess.", "Personne ne peut le dire."],
      ["That's a big if.", "C'est un grand si."],
      ["I'll believe it when I see it.", "Je le croirai quand je le verrai."]
    ],
    quiz: [
      { q: "I wouldn't be surprised if robots ___ our cars one day.", q_fr: "Complète : « I wouldn't be surprised if robots ___ our cars one day. »", o: ["will drive", "drove", "drive"], a: 1, ex: "A hypothetical: past form after if.", ex_fr: "Hypothèse : forme passée après if." },
      { q: "“It's anyone's guess” means:", q_fr: "« It's anyone's guess » veut dire :", o: ["Everybody knows.", "Nobody knows.", "Guess the answer."], a: 1, ex: "Nobody can know the answer.", ex_fr: "Personne ne peut connaître la réponse." },
      { q: "“Mark my words” introduces:", q_fr: "« Mark my words » introduit :", o: ["a question", "an apology", "a confident prediction"], a: 2, ex: "Mark my words: this will happen.", ex_fr: "Retiens bien ce que je te dis : ça arrivera." },
      { q: "“That's a big if” means:", q_fr: "« That's a big if » veut dire :", o: ["That condition may well not happen.", "That's very important.", "I agree completely."], a: 0, ex: "It questions the condition a prediction depends on.", ex_fr: "Ça met en doute la condition dont dépend la prédiction." },
      { q: "It's only a matter of ___ before prices fall.", q_fr: "Complète : « It's only a matter of ___ before prices fall. »", o: ["time", "moment", "hour"], a: 0, ex: "a matter of time = it will certainly happen.", ex_fr: "a matter of time = ça arrivera forcément." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    157: {
      gap: [["___ the experiment failed is not surprising. (que)", "That"], ["___ we do next will decide everything. (ce que)", "What"], ["___ the city can afford it remains to be seen. (si)", "Whether"], ["Despite the ___ that it's cheaper, few people use it. (fait)", "fact"]],
      fix: [["Despite that prices are falling, sales are slow.", "Despite the fact that prices are falling, sales are slow.|Although prices are falling, sales are slow.", "After a preposition: the fact that + clause."], ["How do we pay for it is another question.", "How we pay for it is another question.|How we will pay for it is another question.", "In a noun clause, no question word order."]],
      task: ["Write four formal sentences about the future of cities, starting with That…, Whether…, What… and How…", "Écris quatre phrases soutenues sur l'avenir des villes, en commençant par That…, Whether…, What… et How…", "That cities will need to adapt to hotter summers is beyond doubt. Whether they can do so without becoming unaffordable remains to be seen. What matters most is that residents have a say. How the changes are paid for will determine who benefits."]
    },
    158: {
      gap: [["___-forward thirty years: what does your city look like? (avancer)", "Fast"], ["It's only a ___ of time before it happens. (question)", "matter"], ["I wouldn't be ___ if they banned cars. (surpris)", "surprised"], ["I'll believe it ___ I see it. (quand)", "when"]],
      fix: [["I wouldn't be surprised if robots will replace teachers.", "I wouldn't be surprised if robots replaced teachers.", "After I wouldn't be surprised if: a past form."], ["I'm agree that it will happen.", "I agree that it will happen.", "Agree is a verb: I agree, never I'm agree."]],
      task: ["Fast-forward fifty years. Write a short paragraph speculating about one area of daily life (transport, work, homes, food…), with at least one confident prediction and one cautious one.", "Avance de cinquante ans. Écris un court paragraphe d'hypothèses sur un domaine de la vie quotidienne (transports, travail, logement, alimentation…), avec au moins une prédiction assurée et une prudente.", "Fast-forward fifty years. Mark my words: most city centres will be car-free, and children will find it strange that we ever let cars drive past schools. I wouldn't be surprised if many people worked only four days a week, either. Whether we'll still own our homes, though, is anyone's guess."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "future2075", lesson: 158, level: "C2", icon: "telescope", partner: "Leo", role: "a friend who loves technology",
    title: "The world in 2075", title_fr: "Le monde en 2075",
    setting: "Over coffee, your friend Leo shares his predictions for 2075. You speculate together, sometimes agreeing, sometimes questioning him.", setting_fr: "Autour d'un café, ton ami Leo te livre ses prédictions pour 2075. Vous imaginez ensemble, parfois d'accord, parfois pas.",
    turns: [
      { p: "Picture this: it's 2075, and nobody owns a car any more. You just call one, and it drives itself to your door.", fr: "Imagine un peu : on est en 2075, et plus personne n'a de voiture. On en appelle une, et elle vient toute seule jusqu'à ta porte." },
      { y: ["I wouldn't be surprised if that happened in big cities. In the countryside, though, the jury's still out.", "Impossible.", "I wouldn't be surprised if that will happen in big cities. In the countryside, though, the jury is still outside."], fr: "Ça ne m'étonnerait pas que ça arrive dans les grandes villes. À la campagne, en revanche, la question reste ouverte.", why: "After I wouldn't be surprised if: a past form. The jury's still out is a fixed idiom." },
      { p: "And by then, I bet we'll all be working three days a week.", fr: "Et d'ici là, je parie qu'on travaillera tous trois jours par semaine." },
      { y: ["That's a big if. Keynes predicted a fifteen-hour week back in the 1930s, and most of us are still working five days.", "Yes, good.", "That's a big if. Keynes predicted a fifteen-hours week in 1930s, and most of us still work five days."], fr: "C'est un grand si. Keynes prédisait une semaine de quinze heures dès les années 1930, et la plupart d'entre nous travaillent encore cinq jours.", why: "A fifteen-hour week: no plural when a number + noun is used as an adjective. In the 1930s, with the." },
      { p: "Fair point. But what about the climate? Will cities still be pleasant to live in?", fr: "Bien vu. Mais et le climat ? Les villes seront-elles encore agréables à vivre ?" },
      { y: ["That they'll have to change is certain. What worries me is whether they'll change fast enough.", "Yes.", "That they will have to change, it is certain. What worries me it's whether they'll change fast enough."], fr: "Qu'elles doivent changer, c'est certain. Ce qui m'inquiète, c'est de savoir si elles changeront assez vite.", why: "A that-clause can be the subject: That they'll have to change is certain, with no it." },
      { p: "Mark my words: technology will sort it out.", fr: "Retiens bien ce que je te dis : la technologie réglera le problème." },
      { y: ["I'll believe it when I see it. Technology helps, but how we use it is a political question, not a technical one.", "Technology is bad.", "I'll believe it when I'll see it. Technology helps, but how do we use it is a political question."], fr: "Je le croirai quand je le verrai. La technologie aide, mais la façon dont on l'utilise est une question politique, pas technique.", why: "When + present, not will. In a noun clause, no question form: how we use it." },
      { p: "OK, so what's your prediction, then?", fr: "D'accord, alors c'est quoi, ta prédiction ?" },
      { y: ["Honestly? It's anyone's guess. But I'd put money on one thing: our grandchildren will laugh at our predictions.", "I don't know.", "Honestly? It's everybody's guess. But I'd put money on one thing: our grandchildren will laugh of our predictions."], fr: "Honnêtement ? Personne ne peut le dire. Mais je parierais sur une chose : nos petits-enfants riront de nos prédictions.", why: "It's anyone's guess. Laugh at something." }
    ] }
  );

  W.READINGS.push({
    id: "pastfutures", level: "C2", icon: "history", title: "Why the future never looks the way we expected", title_fr: "Pourquoi l'avenir ne ressemble jamais à ce que nous attendions", genre: "Essay",
    intro: "An essay on what past predictions reveal about the people who made them. Noun clauses as subjects (that, whether, what, how), the language of speculation and the vocabulary of technology and the future.",
    intro_fr: "Un essai sur ce que les prédictions d'autrefois révèlent de ceux qui les ont faites. Propositions nominales sujets (that, whether, what, how), langue de l'hypothèse et vocabulaire de la technologie et de l'avenir.",
    paragraphs: [
      { en: "In December 1900, an American magazine published a remarkable article entitled “What May Happen in the Next Hundred Years”. Its author, the engineer John Elfreth Watkins, made dozens of predictions about the year 2000. Some were uncannily accurate: telephone networks spanning the globe, photographs transmitted in colour across great distances. Others now seem charmingly absurd. The letters C, X and Q, he announced, would disappear from the alphabet as unnecessary.", fr: "En décembre 1900, un magazine américain publiait un article remarquable intitulé « Ce qui pourrait arriver au cours des cent prochaines années ». Son auteur, l'ingénieur John Elfreth Watkins, y faisait des dizaines de prédictions pour l'an 2000. Certaines étaient étrangement justes : des réseaux téléphoniques couvrant le globe, des photographies transmises en couleur sur de grandes distances. D'autres semblent aujourd'hui délicieusement absurdes. Les lettres C, X et Q, annonçait-il, disparaîtraient de l'alphabet, faute d'utilité." },
      { en: "That some forecasts come true while others fail is hardly surprising. What is more instructive is the pattern behind the failures. In 1930, the economist John Maynard Keynes predicted that, within a century, his grandchildren's generation would be so prosperous that a fifteen-hour working week would be enough. On prosperity, he was largely right. On leisure, he was spectacularly wrong. What he underestimated was not technology but human nature: as societies grew richer, people chose to consume more rather than to work less.", fr: "Que certaines prévisions se réalisent et d'autres non n'a rien de surprenant. Ce qui est plus instructif, c'est la logique qui se cache derrière les échecs. En 1930, l'économiste John Maynard Keynes prédisait que, d'ici un siècle, la génération de ses petits-enfants serait si prospère qu'une semaine de quinze heures de travail suffirait. Sur la prospérité, il avait en grande partie raison. Sur les loisirs, il s'est spectaculairement trompé. Ce qu'il a sous-estimé, ce n'est pas la technologie mais la nature humaine : à mesure que les sociétés s'enrichissaient, les gens ont choisi de consommer davantage plutôt que de travailler moins." },
      { en: "Technology itself is no easier to foresee. In 1975, an American business magazine announced the coming of the “paperless office”, made possible by the computer. For the next quarter of a century, offices consumed more paper than ever, because printers made it so easy to produce. The technology arrived; its consequences went the other way.", fr: "La technologie elle-même n'est pas plus facile à prévoir. En 1975, un magazine économique américain annonçait l'arrivée du « bureau sans papier », rendu possible par l'ordinateur. Pendant le quart de siècle suivant, les bureaux ont consommé plus de papier que jamais, parce que les imprimantes en rendaient la production si facile. La technologie est arrivée ; ses conséquences sont allées dans l'autre sens." },
      { en: "The American researcher Roy Amara summed up the problem in what has become known as Amara's law: we tend to overestimate the effect of a technology in the short run and underestimate it in the long run. The early internet disappointed many investors around the year 2000; twenty years later, it had transformed almost every aspect of daily life. Whether the same will prove true of artificial intelligence is the question that preoccupies today's forecasters.", fr: "Le chercheur américain Roy Amara a résumé le problème dans ce qu'on appelle désormais la loi d'Amara : nous avons tendance à surestimer l'effet d'une technologie à court terme et à le sous-estimer à long terme. Les débuts d'internet ont déçu beaucoup d'investisseurs vers l'an 2000 ; vingt ans plus tard, il avait transformé presque tous les aspects de la vie quotidienne. La même chose se vérifiera-t-elle pour l'intelligence artificielle ? C'est la question qui préoccupe les prévisionnistes d'aujourd'hui." },
      { en: "Why do our visions of the future age so quickly? Partly because they are not really about the future at all. Every era projects its own hopes and anxieties forward: the confident engineers of 1900 imagined a world of machines; the anxious writers of the Cold War imagined ruins. How a society pictures tomorrow tells us at least as much about that society as about what is to come.", fr: "Pourquoi nos visions de l'avenir vieillissent-elles si vite ? En partie parce qu'elles ne parlent pas vraiment de l'avenir. Chaque époque projette ses propres espoirs et ses propres angoisses : les ingénieurs confiants de 1900 imaginaient un monde de machines ; les écrivains inquiets de la guerre froide imaginaient des ruines. La façon dont une société se représente le lendemain en dit au moins autant sur cette société que sur ce qui nous attend." },
      { en: "None of this makes speculation pointless. Thinking seriously about possible futures allows us to prepare, to avoid the worst outcomes and to argue about which outcomes we actually want. That we will get the details wrong is almost certain. Whether we ask the right questions is another matter, and one that is entirely in our hands.", fr: "Rien de tout cela ne rend vaine la réflexion sur l'avenir. Penser sérieusement aux futurs possibles nous permet de nous préparer, d'éviter les pires scénarios et de débattre de ceux que nous voulons vraiment. Que nous nous trompions sur les détails est presque certain. Que nous posions les bonnes questions est une autre affaire, et elle ne dépend que de nous." }
    ],
    glossary: { "entitled": "intitulé", "uncannily": "étrangement", "spanning": "couvrant", "transmitted": "transmises", "charmingly": "délicieusement", "instructive": "instructif", "prosperous": "prospère", "leisure": "loisirs", "spectacularly": "spectaculairement", "foresee": "prévoir", "consumed": "ont consommé", "preoccupies": "préoccupe", "anxieties": "angoisses", "pointless": "vain", "outcomes": "issues, scénarios" },
    questions: [
      { q: "Which of Watkins's predictions turned out to be accurate?", o: ["Telephone networks spanning the globe", "The disappearance of the letters C, X and Q", "The end of photography"], a: 0 },
      { q: "What did Keynes get wrong?", o: ["How prosperous societies would become", "How much people would choose to work", "The role of technology"], a: 1 },
      { q: "What happened after the “paperless office” was announced?", o: ["Paper disappeared within ten years", "Computers were banned", "Offices used more paper than ever"], a: 2 },
      { q: "What does Amara's law say?", o: ["We overestimate a technology's effect in the short run and underestimate it in the long run", "New technologies always arrive late", "Predictions about technology are usually right"], a: 0 },
      { q: "According to the author, what do visions of the future reveal?", o: ["The exact shape of the future", "The hopes and fears of the time when they were made", "Nothing at all"], a: 1 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-c2-10", unit: "c2-10", level: "C2", icon: "building-2",
    title: "A panel: the city of 2075", title_fr: "Une table ronde : la ville de 2075",
    context: "At a public debate, the chair, Sophie, asks an architect, Marc, and an ecologist, Nadia, what a European city might look like in 2075.", context_fr: "Lors d'un débat public, l'animatrice, Sophie, demande à un architecte, Marc, et à une écologue, Nadia, à quoi pourrait ressembler une ville européenne en 2075.",
    words: [["to insulate", "isoler (thermiquement)"], ["shade", "l'ombre"], ["a gadget", "un gadget"], ["to queue", "faire la queue"], ["engaged", "engagé, impliqué"]],
    lines: [["Sophie", "Our question tonight: what will a European city look like in 2075? Marc, as an architect, where would you start?", "en-GB"], ["Marc", "With the buildings that already exist. That most of the city of 2075 has already been built is something people tend to forget. The real question is not what we build, but what we do with what's there: how we insulate it, adapt it and share it.", "en-US"], ["Nadia", "And with the heat. Fast-forward fifty years, and summers in many southern cities may well be several degrees hotter than today. Whether people can live comfortably in them will depend on trees, water and shade far more than on gadgets.", "en-IE"], ["Sophie", "So, no flying cars?", "en-GB"], ["Marc", "I'll believe it when I see it! Honestly, I wouldn't be surprised if the most radical change were the most boring one: streets with fewer cars, more trees and more people.", "en-US"], ["Nadia", "I'd put money on that too. What's less certain is who will be able to afford those streets. Green neighbourhoods have a habit of becoming expensive neighbourhoods.", "en-IE"], ["Sophie", "A familiar worry. Any optimistic note to end on?", "en-GB"], ["Marc", "Cities have reinvented themselves before. Fifty years ago, many old city centres were half empty; today, people queue to live in them.", "en-US"], ["Nadia", "And young people today are far more engaged with these questions than my generation was. That gives me hope. How they use that energy is anyone's guess, but it won't be wasted.", "en-IE"]],
    gist: ["What is the panel discussing?", ["What a European city might look like in 2075", "How to become an architect", "The history of flying cars"]],
    detail: [["What does Marc say people tend to forget?", ["Most of the city of 2075 has already been built.", "Architects are expensive.", "Cities never change."]], ["According to Nadia, what will make hot cities livable?", ["Trees, water and shade", "New gadgets", "Air conditioning alone"]], ["What does Marc think the most radical change might be?", ["Streets with fewer cars, more trees and more people", "Flying cars", "Underground cities"]], ["What worries Nadia?", ["Green neighbourhoods may become too expensive.", "There will be too many trees.", "People will leave the cities."]], ["Why is Nadia hopeful?", ["Young people are very engaged with these questions.", "Technology will solve everything.", "Summers will get cooler."]]],
    decode: ["That most of the city of 2075 has already been built is something people tend to forget.", "I wouldn't be surprised if the most radical change were the most boring one"],
    tip: "Notice how the experts mix formal noun clauses (that most of the city has already been built, whether people can live comfortably) with conversational speculation (I'll believe it when I see it, I'd put money on that). At C2, you move between these registers within the same conversation.", tip_fr: "Remarque comment les experts mêlent propositions nominales soutenues (that most of the city has already been built, whether people can live comfortably) et hypothèses de conversation (I'll believe it when I see it, I'd put money on that). Au C2, on passe d'un registre à l'autre dans la même conversation."
  }]);

  W.PROMPTS.push({ id: "c2-future", level: "C2", q: "What will daily life be like in fifty years? Speculate, with nuance.", fr: "À quoi ressemblera la vie quotidienne dans cinquante ans ? Fais des hypothèses, avec nuance.", time: 180,
    phrases: ["Fast-forward fifty years:…", "It's only a matter of time before…", "I wouldn't be surprised if…", "Whether… remains to be seen.", "… is anyone's guess."],
    model: "Fast-forward fifty years, and I suspect daily life will look surprisingly familiar. We'll still eat, argue, fall in love and complain about the weather. That said, it's only a matter of time before most city centres become car-free; the trend is already clear in many European cities. I wouldn't be surprised if many people worked fewer hours, either, although people said the same a century ago. Whether artificial intelligence makes us freer or simply busier remains to be seen. And what our homes will look like in a hotter climate is anyone's guess. If I had to bet, I'd say the biggest changes won't be the most visible ones: they'll be in how we share space, time and energy." });

  W.WRITING_GUIDE["c2-10"] = { genre: "An article (C2 Proficiency)", genre_fr: "Un article (C2 Proficiency)",
    plan: [["A title and an opening that involves the reader.", "Un titre et une ouverture qui impliquent le lecteur."], ["The change you expect, with reasons.", "Le changement que tu attends, avec des raisons."], ["The change you hope for.", "Le changement que tu espères."], ["Why the future is hard to predict, with an example.", "Pourquoi l'avenir est difficile à prévoir, avec un exemple."], ["A memorable conclusion.", "Une conclusion marquante."]],
    marks: [["The future is already here, just badly organised", "a provocative title", "un titre provocateur"], ["Picture your street in 2075.", "inviting the reader to imagine", "inviter le lecteur à imaginer"], ["That the future rarely looks the way we expect is", "a that-clause as subject", "une proposition en that en position de sujet"], ["What makes it likely is", "a what-clause as subject", "une proposition en what en position de sujet"], ["It is only a matter of time before", "a confident prediction", "une prédiction assurée"], ["Whether that happens will depend less on engineers than on", "a whether-clause as subject", "une proposition en whether en position de sujet"], ["we tend to imagine the future as the present with better gadgets", "a memorable explanation", "une explication marquante"], ["he foresaw the wealth but not our appetite for spending it", "a balanced, precise contrast", "un contraste équilibré et précis"], ["How people will choose to live is", "a how-clause as subject", "une proposition en how en position de sujet"], ["What they decide, not what we predict, will shape", "a final contrast between noun clauses", "un contraste final entre propositions nominales"]] };

  W.LEXIS["c2-10"] = {
    colloc: [
      ["a bleak outlook", "des perspectives sombres", "Economists warn of a bleak outlook for the decade.", "bleak", ["pale", "grey"]],
      ["herald a new era", "annoncer une ère nouvelle", "The invention heralded a new era of communication.", "heralded", ["shouted", "rang"]],
      ["pose a challenge", "poser un défi", "Ageing populations pose a challenge to every government.", "pose", ["put", "lay"]],
      ["a sustainable future", "un avenir durable", "Investing in public transport is key to a sustainable future.", "sustainable", ["durable", "lasting"]],
      ["far-reaching consequences", "des conséquences considérables", "The decision will have far-reaching consequences.", "far-reaching", ["long-going", "far-going"]],
      ["stand the test of time", "résister à l'épreuve du temps", "Few buildings from that decade have stood the test of time.", "stood", ["resisted", "held"]],
      ["a glimpse of the future", "un aperçu de l'avenir", "The exhibition offers a glimpse of the future.", "glimpse", ["glance", "wink"]],
      ["come to fruition", "se concrétiser", "The project took twenty years to come to fruition.", "fruition", ["fruit", "fruitage"]],
      ["on the brink of", "au bord de", "Scientists believe they are on the brink of a breakthrough.", "brink", ["border", "rim"]],
      ["future generations", "les générations futures", "We owe it to future generations to act now.", "future", ["futurist", "forward"]]
    ],
    wf: [
      ["The ___ of new technologies is often slower than expected. (ADOPT)", "adoption"],
      ["The novel offers a ___ vision of a world without water. (CHILL)", "chilling"],
      ["The ___ of the city centre will take a decade. (TRANSFORM)", "transformation"],
      ["Some further warming now seems ___. (AVOID)", "unavoidable"],
      ["Visions of the future often reflect the ___ of their time. (ANXIOUS)", "anxieties|anxiety"],
      ["The new materials are virtually ___. (DESTROY)", "indestructible"],
      ["Few people could have ___ the speed of change. (SEE)", "foreseen"],
      ["The project's ___ depends on public support. (VIABLE)", "viability"]
    ],
    kwt: [
      ["It is beyond doubt that the climate is changing.", "THAT", "___ is beyond doubt.", "that the climate is changing"],
      ["Nobody knows yet whether the plan will work.", "REMAINS", "It ___ the plan will work.", "remains to be seen whether|remains to be seen if"],
      ["The speed of change worries scientists most.", "WHAT", "___ is the speed of change.", "what worries scientists most|what worries scientists the most"],
      ["Although costs are falling, progress is slow.", "FACT", "Despite ___ falling, progress is slow.", "the fact that costs are"],
      ["Robots will certainly do most of the housework one day.", "MATTER", "It is ___ robots do most of the housework.", "only a matter of time before|just a matter of time before|a matter of time before"],
      ["Nobody can say what will happen next.", "GUESS", "It's ___ next.", "anyone's guess what will happen|anybody's guess what will happen"]
    ],
    idioms: [
      ["mark my words", "believe me, this will happen", "retiens bien ce que je te dis", "Mark my words: she'll be prime minister one day.", "Mark my words"],
      ["in the pipeline", "being planned or prepared", "en préparation", "Several new projects are in the pipeline.", "in the pipeline"],
      ["the shape of things to come", "what the future will be like", "ce que l'avenir nous réserve", "The new tram may be the shape of things to come.", "the shape of things to come"],
      ["ahead of its time", "too modern for its own period", "en avance sur son temps", "Her design was ahead of its time.", "ahead of its time"],
      ["a pipe dream", "a hope that will probably never come true", "une chimère", "For now, a four-day week is a pipe dream for most workers.", "a pipe dream"],
      ["the sky's the limit", "there are no limits", "tout est possible", "With this technology, the sky's the limit.", "the sky's the limit"],
      ["cross that bridge when we come to it", "deal with a problem only when it happens", "on verra en temps voulu", "If the funding stops, we'll cross that bridge when we come to it.", "cross that bridge when we come to it"],
      ["a sign of the times", "something typical of the present period", "un signe des temps", "Empty office blocks are a sign of the times.", "a sign of the times"]
    ]
  };

  /* The unit, the last before Academic mastery; technology, ecology, the future and architecture move here,
     and the time theme joins Hypothesis and time. */
  const move = (from, key, ids) => { const u = W.COURSE.find((x) => x.id === from); if (u) u[key] = (u[key] || []).filter((x) => !ids.includes(x)); };
  move("c2-3", "vocab", ["technologyC2", "ecologyC2", "futureC2"]); move("c2-5", "vocab", ["architectureC2"]); move("c2-1", "vocab", ["timeC2"]);
  const c23 = W.COURSE.find((x) => x.id === "c2-3"); if (c23 && !c23.vocab.includes("timeC2")) c23.vocab.push("timeC2");
  const unit = { id: "c2-10", level: "C2", icon: "telescope", title: "Imagining the future", title_fr: "Imaginer l'avenir",
    intro: "Speculating about the future tests everything you've learned: precise grammar for certainty and doubt, rich vocabulary for technology and the environment, and the judgement to know what cannot be known. In this unit, you'll use noun clauses as subjects (that, whether, what), speculate in conversation, read about why predictions fail and write an article about the world in 2075.",
    intro_fr: "Faire des hypothèses sur l'avenir met à l'épreuve tout ce que tu as appris : une grammaire précise pour la certitude et le doute, un vocabulaire riche pour la technologie et l'environnement, et le discernement pour savoir ce qu'on ne peut pas savoir. Dans cette unité, tu utiliseras des propositions nominales en position de sujet (that, whether, what), tu feras des hypothèses en conversation, tu liras pourquoi les prédictions échouent et tu rédigeras un article sur le monde en 2075.",
    can: ["Use noun clauses as subjects (that…, whether…, what…, how…) and the fact that", "Speculate about the distant future, confidently or cautiously", "Understand an essay on past predictions and a panel on the city of 2075", "Write a C2 Proficiency article for a magazine"],
    can_fr: ["Utiliser des propositions nominales en position de sujet (that…, whether…, what…, how…) et the fact that", "Faire des hypothèses sur un avenir lointain, avec assurance ou prudence", "Comprendre un essai sur les prédictions d'autrefois et une table ronde sur la ville de 2075", "Rédiger un article C2 Proficiency pour un magazine"],
    lessons: [157, 158], vocab: ["technologyC2", "ecologyC2", "futureC2", "architectureC2"], reading: "pastfutures", prompt: "c2-future",
    writing: { task: "A magazine is preparing a special issue called “The world in 2075”. Write an article (280-320 words) describing one change you expect and one you hope for, and explaining why the future is so hard to predict.", task_fr: "Un magazine prépare un numéro spécial intitulé « Le monde en 2075 ». Rédige un article (280-320 mots) qui décrit un changement que tu attends et un changement que tu espères, et explique pourquoi l'avenir est si difficile à prévoir.", words: "280-320",
      tips: ["Picture…", "That… is one of history's few reliable lessons.", "It is only a matter of time before…", "Whether… will depend less on… than on…", "What they decide, not what we predict,…"],
      checklist: ["My title and opening involve the reader", "I described one change I expect and one I hope for, with reasons", "I explained why the future is hard to predict, with an example", "I used at least two noun clauses as subjects (that…, whether…, what…, how…)", "I stayed between 280 and 320 words"],
      model: "The future is already here, just badly organised\n\nPicture your street in 2075. If you imagine gleaming towers and flying cars, you are following a long tradition, and you will probably be wrong. That the future rarely looks the way we expect is one of history's few reliable lessons.\n\nConsider the change I expect most confidently: our streets will have far fewer cars. This is not a bold prediction. What makes it likely is not some dramatic invention but a slow accumulation of ordinary decisions, from cycle lanes to car-sharing schemes to teenagers who see no reason to learn to drive. It is only a matter of time before a car parked outside a primary school seems as strange to our grandchildren as a horse and cart does to us.\n\nThe change I hope for is harder to predict. I would like the space we free up to be given back to people: to trees, benches and playgrounds rather than to new forms of traffic. Whether that happens will depend less on engineers than on the choices of citizens and the courage of their councils.\n\nWhy are such predictions so difficult? Partly because we tend to imagine the future as the present with better gadgets. In 1930, Keynes expected his grandchildren to work fifteen hours a week; he foresaw the wealth but not our appetite for spending it. How people will choose to live is always the hardest variable of all.\n\nSo, by all means, picture 2075. Just remember that the most important parts of the picture are not the machines but the people standing beside them. What they decide, not what we predict, will shape the world they live in." } };
  W.COURSE.splice(W.COURSE.findIndex((u) => u.id === "c2-5"), 0, unit);
})();
