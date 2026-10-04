/* Unité C2 « Science, risk and uncertainty » (c2-9), complète : leçons 155-156 et leurs exercices, texte, atelier
   d'écoute, jeu de rôle, sujet d'oral, guide d'écriture et atelier de langue. Elle regroupe scienceC2, medicineC2,
   riskC2 et chanceC2 et le texte « forecasts » (venus de c2-3).
   Personnes et autorité de santé fictives ; le test de dépistage de l'atelier d'écoute est un exemple chiffré inventé.
   Faits vérifiés : après le 11 septembre 2001, report sur la route et environ 1 500 morts routières supplémentaires
   selon l'estimation de Gerd Gigerenzer ; alerte britannique de 1995 sur la pilule (risque de thrombose « doublé »,
   d'environ 1 sur 7 000 à 2 sur 7 000) suivie d'environ 13 000 avortements supplémentaires en Angleterre et au pays
   de Galles l'année suivante ; les fréquences naturelles aident à interpréter les tests. */
(function () {
  const W = window;

  W.LESSONS.push(
  {
    id: 155, after: 80, level: "C2", icon: "scale",
    title: "All the more, none the wiser, every bit as: comparison at C2", title_fr: "All the more, none the wiser, every bit as : la comparaison au C2",
    subtitle: "Compare with a reason, deny any change, insist on equality, or show how far apart two things really are.", subtitle_fr: "Comparer en donnant une raison, nier tout changement, insister sur l'égalité ou montrer l'écart réel entre deux choses.",
    body: `
<h2>All the more, none the: a comparison with a reason</h2>
<p><s-en>all the</s-en> + comparative + <s-en>for</s-en> + -ing / <s-en>because</s-en>: even more, for this reason.</p>
<p><s-en>The result is all the more impressive for being so unexpected.</s-en> · <s-en>I admire her all the more because she never complains.</s-en></p>
<p><s-en>none the</s-en> + comparative: not at all more…</p>
<p><s-en>I read the instructions twice and was none the wiser.</s-en> (I understood nothing more) · <s-en>He seemed none the worse for his fall.</s-en> (he wasn't hurt)</p>
<h2>Equal, or far from equal</h2>
<table>
<tr><th>Structure</th><th>Meaning</th><th>Example</th></tr>
<tr><td><s-en>every bit as</s-en> + adjective + <s-en>as</s-en></td><td>just as, completely as</td><td><s-en>The new vaccine is every bit as effective as the old one.</s-en></td></tr>
<tr><td><s-en>nowhere near as</s-en> · <s-en>nothing like as</s-en></td><td>much less</td><td><s-en>The risk is nowhere near as high as people think.</s-en></td></tr>
<tr><td><s-en>no more… than</s-en></td><td>both are equally untrue</td><td><s-en>He is no more an expert than I am.</s-en></td></tr>
<tr><td><s-en>as</s-en> + adjective + <s-en>as can be</s-en></td><td>extremely</td><td><s-en>The results were as clear as can be.</s-en></td></tr>
</table>
<h2>Preferences</h2>
<p><s-en>would sooner</s-en> / <s-en>would rather</s-en>… <s-en>than</s-en>…: <s-en>I'd sooner take a small risk than do nothing.</s-en></p>
<div class="tip"><s-en>No more… than</s-en> is a trap: <s-en>She is no more guilty than you are</s-en> means that she isn't guilty at all, just as you aren't. It doesn't compare degrees of guilt.</div>
`,
    body_fr: `
<h2>All the more, none the : une comparaison avec une raison</h2>
<p><s-en>all the</s-en> + comparatif + <s-en>for</s-en> + -ing / <s-en>because</s-en> : d'autant plus… que.</p>
<p><s-en>The result is all the more impressive for being so unexpected.</s-en> (le résultat est d'autant plus impressionnant qu'il était inattendu) · <s-en>I admire her all the more because she never complains.</s-en> (je l'admire d'autant plus qu'elle ne se plaint jamais)</p>
<p><s-en>none the</s-en> + comparatif : pas du tout plus…</p>
<p><s-en>I read the instructions twice and was none the wiser.</s-en> (je n'étais pas plus avancée) · <s-en>He seemed none the worse for his fall.</s-en> (sa chute ne semblait pas l'avoir affecté)</p>
<h2>Égal, ou loin de l'être</h2>
<table>
<tr><th>Structure</th><th>Sens</th><th>Exemple</th></tr>
<tr><td><s-en>every bit as</s-en> + adjectif + <s-en>as</s-en></td><td>tout aussi… que</td><td><s-en>The new vaccine is every bit as effective as the old one.</s-en></td></tr>
<tr><td><s-en>nowhere near as</s-en> · <s-en>nothing like as</s-en></td><td>loin d'être aussi…</td><td><s-en>The risk is nowhere near as high as people think.</s-en></td></tr>
<tr><td><s-en>no more… than</s-en></td><td>pas plus… que (les deux sont faux)</td><td><s-en>He is no more an expert than I am.</s-en> (il n'est pas plus expert que moi)</td></tr>
<tr><td><s-en>as</s-en> + adjectif + <s-en>as can be</s-en></td><td>on ne peut plus…</td><td><s-en>The results were as clear as can be.</s-en></td></tr>
</table>
<h2>Les préférences</h2>
<p><s-en>would sooner</s-en> / <s-en>would rather</s-en>… <s-en>than</s-en>… : <s-en>I'd sooner take a small risk than do nothing.</s-en> (je préfère prendre un petit risque que de ne rien faire)</p>
<div class="tip"><s-en>No more… than</s-en> est un piège : <s-en>She is no more guilty than you are</s-en> veut dire qu'elle n'est pas coupable du tout, pas plus que toi. Ça ne compare pas des degrés de culpabilité.</div>
`,
    examples: [
      ["The result is all the more impressive for being so unexpected.", "Le résultat est d'autant plus impressionnant qu'il était inattendu."],
      ["I read the report twice and was none the wiser.", "J'ai lu le rapport deux fois et je n'étais pas plus avancée."],
      ["The new treatment is every bit as effective as the old one.", "Le nouveau traitement est tout aussi efficace que l'ancien."],
      ["The risk is nowhere near as high as people think.", "Le risque est loin d'être aussi élevé que les gens le pensent."],
      ["He is no more an expert than I am.", "Il n'est pas plus expert que moi."],
      ["The instructions were as clear as can be.", "Les instructions étaient on ne peut plus claires."],
      ["I'd sooner take a small risk than do nothing.", "Je préfère prendre un petit risque que de ne rien faire."]
    ],
    quiz: [
      { q: "The victory was ___ sweeter because nobody expected it.", q_fr: "Complète : « The victory was ___ sweeter because nobody expected it. »", o: ["all the", "none the", "the all"], a: 0, ex: "all the + comparative = d'autant plus.", ex_fr: "all the + comparatif = d'autant plus." },
      { q: "After his long explanation, I was none the ___.", q_fr: "Complète : « After his long explanation, I was none the ___. »", o: ["wise", "wiser", "wisest"], a: 1, ex: "none the wiser = not understanding any more than before.", ex_fr: "none the wiser = pas plus avancé." },
      { q: "The copy is every ___ as good as the original.", q_fr: "Complète : « The copy is every ___ as good as the original. »", o: ["part", "piece", "bit"], a: 2, ex: "every bit as… as = just as… as.", ex_fr: "every bit as… as = tout aussi… que." },
      { q: "“She is no more a doctor than I am” means:", q_fr: "« She is no more a doctor than I am » veut dire :", o: ["Neither of us is a doctor.", "She is a better doctor than me.", "She used to be a doctor."], a: 0, ex: "Both statements are equally untrue.", ex_fr: "Les deux affirmations sont aussi fausses l'une que l'autre." },
      { q: "The danger is ___ as great as the media suggest.", q_fr: "Complète : « The danger is ___ as great as the media suggest. »", o: ["nothing near", "nowhere near", "far near"], a: 1, ex: "nowhere near as… as = much less… than.", ex_fr: "nowhere near as… as = loin d'être aussi… que." }
    ]
  },
  {
    id: 156, after: 80, level: "C2", kind: "functional", icon: "dices",
    title: "Everyday English: talking about risk to non-experts", title_fr: "Anglais pratique : parler de risques à des non-spécialistes",
    subtitle: "Turn percentages into clear, honest comparisons, and help people judge how worried they should, or shouldn't, be.", subtitle_fr: "Transformer des pourcentages en comparaisons claires et honnêtes, et aider les gens à juger s'ils doivent s'inquiéter, ou pas.",
    body: `
<h2>Relative risk and absolute risk</h2>
<p>"Doubles the risk" sounds alarming. But double what? If a risk goes from 1 in 10,000 to 2 in 10,000, it has doubled, yet it is still tiny.</p>
<table>
<tr><th>Alarming or obscure</th><th>Clearer</th></tr>
<tr><td><s-en>This doubles your risk.</s-en></td><td><s-en>Out of 10,000 people, about two would be affected instead of one.</s-en></td></tr>
<tr><td><s-en>There's a 0.01% chance.</s-en></td><td><s-en>That's about one in ten thousand.</s-en></td></tr>
</table>
<h2>Natural frequencies: people, not percentages</h2>
<p><s-en>Out of a thousand people…</s-en> · <s-en>About one in fifty…</s-en> · <s-en>Imagine a stadium of 20,000 people: about two of them…</s-en></p>
<h2>Putting it in perspective</h2>
<p><s-en>To put that in perspective,…</s-en> · <s-en>That's roughly the same as…</s-en> · <s-en>It's far less likely than…</s-en></p>
<h2>Being honest about uncertainty</h2>
<p><s-en>We don't know for certain, but the best evidence suggests…</s-en> · <s-en>The risk is small, but not zero.</s-en> · <s-en>If we're wrong, the most likely consequence is…</s-en></p>
<div class="tip">Doctors, journalists and scientists are increasingly taught to give absolute risks and natural frequencies (<s-en>2 in 10,000</s-en>) rather than relative risks (<s-en>doubled</s-en>), because most people, including many professionals, misread percentages.</div>
`,
    body_fr: `
<h2>Risque relatif et risque absolu</h2>
<p>« Double le risque », ça paraît alarmant. Mais le double de quoi ? Si un risque passe de 1 sur 10 000 à 2 sur 10 000, il a doublé, et pourtant il reste minime.</p>
<table>
<tr><th>Alarmant ou obscur</th><th>Plus clair</th></tr>
<tr><td><s-en>This doubles your risk.</s-en> (ça double ton risque)</td><td><s-en>Out of 10,000 people, about two would be affected instead of one.</s-en> (sur 10 000 personnes, environ deux seraient touchées au lieu d'une)</td></tr>
<tr><td><s-en>There's a 0.01% chance.</s-en> (il y a 0,01 % de risque)</td><td><s-en>That's about one in ten thousand.</s-en> (c'est environ une sur dix mille)</td></tr>
</table>
<h2>Les fréquences naturelles : des personnes, pas des pourcentages</h2>
<p><s-en>Out of a thousand people…</s-en> (sur mille personnes…) · <s-en>About one in fifty…</s-en> (environ une sur cinquante…) · <s-en>Imagine a stadium of 20,000 people: about two of them…</s-en> (imagine un stade de 20 000 personnes : environ deux d'entre elles…)</p>
<h2>Remettre en perspective</h2>
<p><s-en>To put that in perspective,…</s-en> (pour remettre ça en perspective…) · <s-en>That's roughly the same as…</s-en> (c'est à peu près comme…) · <s-en>It's far less likely than…</s-en> (c'est bien moins probable que…)</p>
<h2>Être honnête sur l'incertitude</h2>
<p><s-en>We don't know for certain, but the best evidence suggests…</s-en> (on n'en est pas certain, mais les meilleures données suggèrent…) · <s-en>The risk is small, but not zero.</s-en> (le risque est faible, mais pas nul) · <s-en>If we're wrong, the most likely consequence is…</s-en> (si on se trompe, la conséquence la plus probable est…)</p>
<div class="tip">On apprend de plus en plus aux médecins, aux journalistes et aux scientifiques à donner des risques absolus et des fréquences naturelles (<s-en>2 in 10,000</s-en>) plutôt que des risques relatifs (<s-en>doubled</s-en>), parce que la plupart des gens, y compris beaucoup de professionnels, lisent mal les pourcentages.</div>
`,
    examples: [
      ["Out of 10,000 people, about two would be affected instead of one.", "Sur 10 000 personnes, environ deux seraient touchées au lieu d'une."],
      ["That's about one in ten thousand.", "C'est environ une sur dix mille."],
      ["To put that in perspective, it's about two people in a full stadium.", "Pour remettre ça en perspective, ça fait environ deux personnes dans un stade plein."],
      ["The risk is small, but not zero.", "Le risque est faible, mais pas nul."],
      ["We don't know for certain, but the best evidence suggests it's safe.", "On n'en est pas certain, mais les meilleures données suggèrent que c'est sans danger."],
      ["It has doubled, but it's still tiny.", "Il a doublé, mais il reste minime."],
      ["Imagine a hundred people like you: about three would have this side effect.", "Imagine cent personnes comme toi : environ trois auraient cet effet secondaire."]
    ],
    quiz: [
      { q: "A risk goes from 1 in 10,000 to 2 in 10,000. The most honest description:", q_fr: "Un risque passe de 1 sur 10 000 à 2 sur 10 000. La description la plus honnête :", o: ["It doubles: a huge danger.", "It doubles, but it's still very small.", "It's now a 100% risk."], a: 1, ex: "Give both the change and the absolute size.", ex_fr: "Donne à la fois le changement et la taille réelle." },
      { q: "“Out of 1,000 people, about five…” is an example of:", q_fr: "« Out of 1,000 people, about five… » est un exemple de :", o: ["a natural frequency", "a relative risk", "a percentage"], a: 0, ex: "A natural frequency counts people.", ex_fr: "Une fréquence naturelle compte des personnes." },
      { q: "“The risk is small, but not zero” is:", q_fr: "« The risk is small, but not zero » est :", o: ["alarming", "a contradiction", "honest about uncertainty"], a: 2, ex: "It neither frightens nor falsely reassures.", ex_fr: "Ça n'effraie pas et ne rassure pas à tort." },
      { q: "“To put that in perspective” introduces:", q_fr: "« To put that in perspective » introduit :", o: ["a comparison that shows the real size", "a new topic", "a joke"], a: 0, ex: "It helps people feel the size of a number.", ex_fr: "Ça aide à se représenter la taille d'un chiffre." },
      { q: "Which is clearest for a non-expert?", q_fr: "Laquelle est la plus claire pour un non-spécialiste ?", o: ["A 0.02% probability", "A relative risk of 2.0", "About two in ten thousand"], a: 2, ex: "Whole numbers of people are easiest to picture.", ex_fr: "Des nombres de personnes sont les plus faciles à se représenter." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    155: {
      gap: [["The book is all ___ more moving because it's a true story. (d'autant plus)", "the"], ["I listened to the whole lecture and was none the ___. (pas plus avancé)", "wiser"], ["The sequel is every ___ as good as the first film. (tout aussi)", "bit"], ["The flight was nowhere ___ as frightening as I'd feared. (loin d'être)", "near"]],
      fix: [["The problem is all more serious because nobody noticed it.", "The problem is all the more serious because nobody noticed it.", "All the + comparative."], ["The new version is every bit as good than the old one.", "The new version is every bit as good as the old one.", "Every bit as… as (never than)."]],
      task: ["Write four sentences about a discovery, a medicine or a risk, using all the more, none the wiser, every bit as and nowhere near as.", "Écris quatre phrases sur une découverte, un médicament ou un risque, avec all the more, none the wiser, every bit as et nowhere near as.", "The discovery was all the more remarkable for being made by a student. I read the scientific paper and was none the wiser. The generic version is every bit as effective as the original medicine. Statistically, flying is nowhere near as dangerous as most people imagine."]
    },
    156: {
      gap: [["___ of a thousand people, about three would be affected. (sur)", "Out"], ["To put that ___ perspective, it's very rare. (en perspective)", "in"], ["The risk is small, but not ___. (nul)", "zero"], ["About one ___ fifty people carry the gene. (sur)", "in"]],
      fix: [["The risk is of two on ten thousand.", "The risk is two in ten thousand.|The risk is about two in ten thousand.", "Two in ten thousand: in, not on."], ["It's a very few probability.", "It's a very low probability.|It's a very small probability.|The probability is very low.", "A low or small probability (few is for countable plurals)."]],
      task: ["A study says that a popular food “increases the risk of a rare illness by 50 per cent”. The illness affects 2 in 10,000 people. Explain to a worried friend what that really means.", "Une étude affirme qu'un aliment répandu « augmente de 50 % le risque d'une maladie rare ». Cette maladie touche 2 personnes sur 10 000. Explique à une amie inquiète ce que ça veut vraiment dire.", "It sounds scary, but let's put some numbers on it. Normally, about two people in ten thousand get this illness. A 50 per cent increase means about three in ten thousand instead. To put that in perspective, imagine a full concert hall of ten thousand people: one extra person would be affected. The risk is small, but not zero, so there's no need to panic."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "leaflet", lesson: 156, level: "C2", icon: "pill", partner: "Emma", role: "a worried friend",
    title: "A frightening leaflet", title_fr: "Une notice qui fait peur",
    setting: "Your friend Emma has read the leaflet of a medicine her doctor prescribed, and the list of side effects has frightened her.", setting_fr: "Ton amie Emma a lu la notice d'un médicament que son médecin lui a prescrit, et la liste des effets secondaires l'a effrayée.",
    turns: [
      { p: "I've just read the leaflet for my new tablets. It says they can cause liver problems! I'm not taking them.", fr: "Je viens de lire la notice de mes nouveaux comprimés. Ça dit qu'ils peuvent causer des problèmes de foie ! Je ne les prends pas." },
      { y: ["I understand why that's frightening. Does it say how often it happens? Leaflets usually say “common” or “rare”.", "Don't be stupid.", "I understand why it's frightening. Does it say how often does it happen? Leaflets usually say “common” or “rare”."], fr: "Je comprends que ça fasse peur. Ça dit à quelle fréquence ça arrive ? Les notices disent en général « fréquent » ou « rare ».", why: "An indirect question: how often it happens, with no does." },
      { p: "It says “very rare: may affect up to 1 in 10,000 people”.", fr: "Ça dit « très rare : peut toucher jusqu'à 1 personne sur 10 000 »." },
      { y: ["So, out of ten thousand people taking them, at most one would have that problem. To put that in perspective, that's about one person in a large concert hall.", "That's a lot.", "So, on ten thousand people taking them, at most one would have this problem. To put it in perspective, it's about one people in a large concert hall."], fr: "Donc, sur dix mille personnes qui les prennent, une au plus aurait ce problème. Pour remettre ça en perspective, c'est environ une personne dans une grande salle de concert.", why: "Out of ten thousand. One person: people is plural." },
      { p: "But it could be me!", fr: "Mais ça pourrait être moi !" },
      { y: ["It could, in theory: the risk is small, but not zero. That's exactly the kind of thing to ask your doctor about.", "No, it can't.", "It could, in theory: the risk is small, but not null. That's exactly the kind of thing to ask your doctor."], fr: "En théorie, oui : le risque est faible, mais pas nul. C'est exactement le genre de chose à demander à ton médecin.", why: "Not zero (null is for maths and law). Ask your doctor about something." },
      { p: "And what happens if I don't take them?", fr: "Et qu'est-ce qui se passe si je ne les prends pas ?" },
      { y: ["That's the real question. Your doctor will have weighed the risk of the illness against the risk of the tablets. It's worth asking her directly before you decide.", "Nothing.", "That's the real question. Your doctor will weigh the risk of the illness against the tablets' risk. It worths asking her directly before you decide."], fr: "C'est la vraie question. Ton médecin aura mis en balance le risque de la maladie et celui des comprimés. Ça vaut la peine de lui demander directement avant de décider.", why: "Will have weighed: an assumption about the past. It's worth + -ing (never it worths)." },
      { p: "You're right. I'll call her tomorrow and ask.", fr: "Tu as raison. Je l'appelle demain pour lui demander." },
      { y: ["Good idea. I'd sooner you asked her than stopped the treatment on your own.", "OK.", "Good idea. I'd sooner you ask her than you stop the treatment on your own."], fr: "Bonne idée. Je préfère que tu lui demandes plutôt que d'arrêter le traitement toute seule.", why: "Would sooner + subject + past tense: I'd sooner you asked." }
    ] }
  );

  W.READINGS.push({
    id: "riskjudge", level: "C2", icon: "dices", title: "Why we are so bad at judging risk", title_fr: "Pourquoi nous jugeons si mal les risques", genre: "Feature article",
    intro: "A feature article on how fear and statistics mislead us. Advanced comparisons (all the more, every bit as, none the less) and the vocabulary of science, medicine and risk.",
    intro_fr: "Un article de fond sur la façon dont la peur et les statistiques nous induisent en erreur. Comparaisons avancées (all the more, every bit as, none the less) et vocabulaire de la science, de la médecine et du risque.",
    paragraphs: [
      { en: "In the months after the attacks of 11 September 2001, millions of Americans decided that flying had become too dangerous and took to the roads instead. It seemed a reasonable precaution. Yet driving is, mile for mile, far more dangerous than flying, and the German psychologist Gerd Gigerenzer later estimated that the switch led to around 1,500 additional deaths on American roads in the following year: deaths that attracted none of the attention given to the attacks themselves.", fr: "Dans les mois qui ont suivi les attentats du 11 septembre 2001, des millions d'Américains ont décidé que l'avion était devenu trop dangereux et ont pris la route à la place. Cela semblait une précaution raisonnable. Pourtant, à distance égale, la voiture est bien plus dangereuse que l'avion, et le psychologue allemand Gerd Gigerenzer a plus tard estimé que ce report avait entraîné environ 1 500 morts supplémentaires sur les routes américaines l'année suivante : des morts qui n'ont attiré aucune de l'attention accordée aux attentats eux-mêmes." },
      { en: "The episode illustrates a puzzle that has fascinated psychologists for decades: why are human beings so bad at judging risk? Part of the answer is that we do not estimate danger from statistics but from memory. The more easily we can picture something happening, the more likely it seems. Dramatic, rare events, such as plane crashes and shark attacks, are vivid and widely reported; the everyday dangers that kill far more people, from car journeys to inactivity, are dull and almost invisible.", fr: "Cet épisode illustre une énigme qui fascine les psychologues depuis des décennies : pourquoi les êtres humains jugent-ils si mal les risques ? Une partie de la réponse tient au fait que nous n'estimons pas le danger à partir de statistiques, mais de notre mémoire. Plus il nous est facile d'imaginer qu'une chose arrive, plus elle nous paraît probable. Les événements rares et spectaculaires, comme les accidents d'avion et les attaques de requins, sont frappants et abondamment relayés ; les dangers quotidiens qui tuent bien plus de gens, des trajets en voiture à la sédentarité, sont banals et presque invisibles." },
      { en: "The way risks are presented makes matters worse. In 1995, British doctors were warned that a new generation of contraceptive pills doubled the risk of a dangerous blood clot. The warning was accurate, but misleading. In absolute terms, the risk had risen from roughly one in seven thousand women to two in seven thousand. Many women stopped taking the pill almost overnight, and the following year saw an estimated 13,000 additional abortions in England and Wales. The relative risk, “doubled”, had made a tiny change sound enormous.", fr: "La manière dont les risques sont présentés aggrave les choses. En 1995, les médecins britanniques ont été avertis qu'une nouvelle génération de pilules contraceptives doublait le risque de caillot sanguin dangereux. L'avertissement était exact, mais trompeur. En termes absolus, le risque était passé d'environ une femme sur sept mille à deux sur sept mille. Beaucoup de femmes ont arrêté la pilule presque du jour au lendemain, et l'année suivante a connu environ 13 000 avortements supplémentaires en Angleterre et au pays de Galles. Le risque relatif, « doublé », avait fait paraître énorme un changement minime." },
      { en: "Even professionals struggle. In study after study, doctors asked to interpret the results of a screening test, given as percentages, have reached wildly different conclusions, many of them badly wrong. When the same information is presented as natural frequencies (“out of a thousand women, ten have the disease; nine of them test positive…”), the proportion who answer correctly rises dramatically. The numbers are identical; the format turns out to be every bit as important as the content.", fr: "Même les professionnels ont du mal. Dans une étude après l'autre, des médecins invités à interpréter les résultats d'un test de dépistage, présentés en pourcentages, sont arrivés à des conclusions extrêmement différentes, souvent très fausses. Quand les mêmes informations sont présentées en fréquences naturelles (« sur mille femmes, dix ont la maladie ; neuf d'entre elles sont testées positives… »), la proportion de bonnes réponses augmente considérablement. Les chiffres sont identiques ; la présentation se révèle tout aussi importante que le contenu." },
      { en: "None of this means that people are simply irrational. Our instincts developed in a world without statistics, where paying attention to vivid, frightening events was often a sensible strategy. The problem is that modern life confronts us with risks that our instincts were never designed for, presented in formats that obscure rather than inform.", fr: "Rien de tout cela ne signifie que les gens sont simplement irrationnels. Nos instincts se sont formés dans un monde sans statistiques, où prêter attention aux événements frappants et effrayants était souvent une stratégie judicieuse. Le problème, c'est que la vie moderne nous confronte à des risques pour lesquels nos instincts n'ont jamais été conçus, présentés sous des formes qui obscurcissent au lieu d'informer." },
      { en: "The remedy, according to researchers in the field, is not to lecture people about their mistakes but to give them better tools: absolute numbers rather than percentages, comparisons with familiar risks, and honest acknowledgement of uncertainty. A public that understands risk will be none the less cautious, but it will be all the more likely to be cautious about the right things.", fr: "Le remède, selon les chercheurs du domaine, n'est pas de faire la leçon aux gens sur leurs erreurs, mais de leur donner de meilleurs outils : des chiffres absolus plutôt que des pourcentages, des comparaisons avec des risques familiers, et une reconnaissance honnête de l'incertitude. Un public qui comprend le risque n'en sera pas moins prudent, mais il aura d'autant plus de chances d'être prudent à propos des bonnes choses." }
    ],
    glossary: { "precaution": "précaution", "switch": "changement, report", "puzzle": "énigme", "vivid": "frappants", "inactivity": "sédentarité", "dull": "banals", "contraceptive": "contraceptif", "clot": "caillot", "misleading": "trompeur", "overnight": "du jour au lendemain", "screening": "dépistage", "wildly": "extrêmement", "irrational": "irrationnels", "obscure": "obscurcissent", "remedy": "remède" },
    questions: [
      { q: "What happened after 11 September 2001, according to Gigerenzer's estimate?", o: ["More people drove, and road deaths rose", "Flying became more dangerous", "People stopped travelling altogether"], a: 0 },
      { q: "Why do rare, dramatic events seem more likely than they are?", o: ["Statistics exaggerate them", "We judge danger by how easily we can picture it", "They are more common than we think"], a: 1 },
      { q: "What was misleading about the 1995 warning?", o: ["The figures were invented", "It concerned the wrong medicine", "A tiny absolute increase was presented as a doubling"], a: 2 },
      { q: "What helps doctors interpret test results correctly?", o: ["Natural frequencies instead of percentages", "Longer reports", "More percentages"], a: 0 },
      { q: "What remedy do researchers suggest?", o: ["Lecturing people about their mistakes", "Better tools, such as absolute numbers and familiar comparisons", "Hiding statistics from the public"], a: 1 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-c2-9", unit: "c2-9", level: "C2", icon: "microscope",
    title: "A podcast: what does a positive test mean?", title_fr: "Un podcast : que veut dire un test positif ?",
    context: "On a science podcast, the host, Zoe, asks a statistician, Mark, to answer a listener who has tested positive in a screening test. The figures are an illustration, not a real test.", context_fr: "Dans un podcast scientifique, l'animatrice, Zoe, demande à un statisticien, Mark, de répondre à un auditeur testé positif lors d'un dépistage. Les chiffres sont une illustration, pas un vrai test.",
    words: [["a screening test", "un test de dépistage"], ["to pick up", "détecter"], ["to flag", "signaler"], ["a false alarm", "une fausse alerte"], ["to rule out", "écarter, exclure"]],
    lines: [["Zoe", "So, Mark, a listener writes: I tested positive in a screening test that's ninety per cent accurate. Does that mean I'm ninety per cent likely to have the disease?", "en-AU"], ["Mark", "It's a brilliant question, and the honest answer is: almost certainly not. But the percentages make it very hard to see why, so let me translate them into people.", "en-GB"], ["Zoe", "Go on.", "en-AU"], ["Mark", "Imagine a thousand people of the same age being tested, and suppose the disease affects about one in a hundred of them. That's ten people. A good test will pick up nine of those ten.", "en-GB"], ["Zoe", "So far, so good.", "en-AU"], ["Mark", "Now take the other nine hundred and ninety, who are perfectly healthy. Suppose the test wrongly flags about nine per cent of them. That's roughly eighty-nine false alarms.", "en-GB"], ["Zoe", "Ah. So the positive results aren't just the nine people who are ill.", "en-AU"], ["Mark", "Exactly. Out of about ninety-eight positive results, only nine come from people who actually have the disease. That's fewer than one in ten. A negative result is very reassuring, but a single positive result is nowhere near a diagnosis.", "en-GB"], ["Zoe", "So what should our listener do?", "en-AU"], ["Mark", "Not panic, and not ignore it either. This is exactly why a positive screening result is followed by further tests. And it's all the more reason for doctors to explain results in numbers of people, not percentages.", "en-GB"]],
    gist: ["What is Mark explaining?", ["Why a positive screening result doesn't mean you're probably ill", "How to make a test more accurate", "Which disease is the most common"]],
    detail: [["In Mark's example, how many of the thousand people have the disease?", ["Ten", "Ninety", "Nine hundred"]], ["How many false alarms are there among the healthy people?", ["About eighty-nine", "Nine", "None"]], ["What proportion of the positive results come from people with the disease?", ["Fewer than one in ten", "About ninety per cent", "Half"]], ["What does Mark advise the listener?", ["Not to panic, and to have further tests", "To ignore the result", "To repeat the same test every day"]]],
    decode: ["let me translate them into people", "a single positive result is nowhere near a diagnosis"],
    tip: "Experts make numbers understandable by turning them into people: imagine a thousand people, that's ten people, out of about ninety-eight. When you hear a percentage, try doing the same in your head: it changes everything.", tip_fr: "Les experts rendent les chiffres compréhensibles en les transformant en personnes : imagine a thousand people, that's ten people, out of about ninety-eight. Quand tu entends un pourcentage, fais pareil dans ta tête : ça change tout."
  }]);

  W.PROMPTS.push({ id: "c2-risk", level: "C2", q: "Are we afraid of the wrong risks? Give examples.", fr: "Avons-nous peur des mauvais risques ? Donne des exemples.", time: 180,
    phrases: ["We tend to fear… and ignore…", "Statistically,… is nowhere near as…", "What worries me all the more is…", "To put that in perspective,…", "Better safe than sorry, but…"],
    model: "I think we tend to fear what is dramatic and ignore what is dull. Plane crashes make the front pages for days, yet, mile for mile, flying is nowhere near as dangerous as driving. Meanwhile, many of us sit for ten hours a day without thinking twice, although inactivity is linked to a whole range of illnesses. What worries me all the more is how easily headlines exploit this: “doubles the risk” sounds terrifying until you ask, double what? To put that in perspective, a risk that goes from one in a million to two in a million is still tiny. Better safe than sorry, of course, but I'd like us to be careful about the right things." });

  W.WRITING_GUIDE["c2-9"] = { genre: "A report (C2 Proficiency)", genre_fr: "Un rapport (C2 Proficiency)",
    plan: [["Introduction: purpose and sources.", "Introduction : l'objet et les sources."], ["The main problem, and its consequences.", "Le problème principal, et ses conséquences."], ["A second problem.", "Un second problème."], ["Recommendations, each one precise.", "Des recommandations, chacune précise."], ["Conclusion: cost, benefit and follow-up.", "Conclusion : coût, bénéfice et suivi."]],
    marks: [["This report examines", "stating the purpose", "annoncer l'objet"], ["It draws on a review of recent leaflets", "draw on: giving the sources", "draw on : indiquer les sources"], ["The most serious weakness is the reliance on relative risk.", "a clear topic sentence", "une phrase d'ouverture claire"], ["though technically accurate", "a concession without a verb", "une concession sans verbe"], ["all the more alarming for being incomplete", "all the more… for + -ing", "all the more… for + -ing"], ["A second problem lies in", "introducing a second point formally", "introduire un second point de façon soutenue"], ["every bit as threatening as", "every bit as: just as", "every bit as : tout aussi"], ["It is recommended that:", "an impersonal recommendation", "une recommandation impersonnelle"], ["alongside any relative change", "a precise condition", "une condition précise"], ["None of these measures would be costly.", "a reassuring argument", "un argument rassurant"], ["none the less cautious, but considerably better informed", "none the + comparative, then a contrast", "none the + comparatif, puis un contraste"]] };

  W.LEXIS["c2-9"] = {
    colloc: [
      ["run a risk", "courir un risque", "If you ignore the warning, you run the risk of a fine.", "run", ["race", "do"]],
      ["pose a threat", "représenter une menace", "Antibiotic resistance poses a serious threat.", "poses", ["puts", "makes"]],
      ["conduct a trial", "mener un essai", "Researchers conducted a trial with two thousand patients.", "conducted", ["drove", "led out"]],
      ["a remote possibility", "une possibilité infime", "There is a remote possibility of side effects.", "remote", ["far", "lonely"]],
      ["minimise the risk", "réduire le risque au minimum", "Wash your hands to minimise the risk of infection.", "minimise", ["minor", "lessen down"]],
      ["the odds are stacked against", "les chances sont contre", "The odds were stacked against the small team.", "stacked", ["piled", "set"]],
      ["draw conclusions", "tirer des conclusions", "It's too early to draw any conclusions.", "draw", ["pull", "take out"]],
      ["a false alarm", "une fausse alerte", "The warning turned out to be a false alarm.", "false", ["fake", "wrong"]],
      ["take precautions", "prendre des précautions", "Travellers should take precautions against malaria.", "take", ["make", "do"]],
      ["beat the odds", "déjouer les pronostics", "She beat the odds and made a full recovery.", "beat", ["won", "broke"]]
    ],
    wf: [
      ["The ___ of the disease has fallen sharply. (PREVALENT)", "prevalence"],
      ["The results of the trial were ___. (CONCLUDE)", "inconclusive"],
      ["The ___ of the vaccine has been demonstrated in several trials. (EFFECTIVE)", "effectiveness"],
      ["Many people ___ the risks of everyday activities. (ESTIMATE)", "underestimate"],
      ["The outcome of the operation was highly ___. (PREDICT)", "unpredictable"],
      ["The two events were entirely ___. (COINCIDE)", "coincidental"],
      ["The study's ___ have been widely questioned. (ASSUME)", "assumptions"],
      ["Antibiotics are ___ against viruses. (EFFECT)", "ineffective"]
    ],
    kwt: [
      ["The victory was even sweeter because nobody expected it.", "ALL", "The victory was ___ nobody expected it.", "all the sweeter because|all the sweeter since"],
      ["I read the instructions, but I didn't understand them any better.", "WISER", "I read the instructions, but I ___.", "was none the wiser"],
      ["The generic medicine is just as effective as the original.", "BIT", "The generic medicine is ___ the original.", "every bit as effective as"],
      ["The risk is much lower than people think.", "NEAR", "The risk is ___ people think.", "nowhere near as high as"],
      ["I'd prefer to take a small risk than to do nothing.", "SOONER", "I ___ nothing.", "would sooner take a small risk than do|'d sooner take a small risk than do"],
      ["The chance of side effects is extremely small.", "REMOTE", "There is ___ side effects.", "only a remote chance of|a remote chance of|a very remote chance of"]
    ],
    idioms: [
      ["play it safe", "avoid risks", "jouer la sécurité", "I'd rather play it safe and book a hotel in advance.", "play it safe"],
      ["a shot in the dark", "a guess made with very little information", "un coup au hasard", "My answer was a shot in the dark.", "a shot in the dark"],
      ["better safe than sorry", "it's wiser to be careful", "mieux vaut prévenir que guérir", "Take an umbrella: better safe than sorry.", "better safe than sorry"],
      ["skate on thin ice", "do something risky", "être en terrain glissant", "You're skating on thin ice if you miss the deadline again.", "skating on thin ice"],
      ["by the skin of your teeth", "only just", "de justesse", "He passed the exam by the skin of his teeth.", "by the skin of his teeth"],
      ["the jury is still out", "people haven't decided yet", "la question reste ouverte", "The jury is still out on whether the diet works.", "The jury is still out"],
      ["a guinea pig", "a person used in an experiment", "un cobaye", "I don't want to be a guinea pig for a new drug.", "a guinea pig"],
      ["stick your neck out", "say or do something risky", "prendre position, se mouiller", "She stuck her neck out and criticised the study.", "stuck her neck out"]
    ]
  };

  /* The unit, after Natural speech and humour; science, medicine, risk and chance move here, with the "forecasts" text. */
  const move = (from, key, ids) => { const u = W.COURSE.find((x) => x.id === from); if (u) u[key] = (u[key] || []).filter((x) => !ids.includes(x)); };
  move("c2-3", "vocab", ["scienceC2", "medicineC2", "riskC2", "chanceC2"]); move("c2-3", "extra", ["forecasts"]);
  const unit = { id: "c2-9", level: "C2", icon: "dices", title: "Science, risk and uncertainty", title_fr: "Science, risque et incertitude",
    intro: "Science rarely deals in certainties, and the public rarely understands probabilities. At C2, you can bridge that gap. In this unit, you'll use advanced comparisons (all the more, none the wiser, every bit as), explain risks honestly to non-experts, read about why we misjudge danger and write a report on communicating health risks.",
    intro_fr: "La science traite rarement de certitudes, et le grand public comprend rarement les probabilités. Au C2, tu peux combler ce fossé. Dans cette unité, tu utiliseras des comparaisons avancées (all the more, none the wiser, every bit as), tu expliqueras honnêtement des risques à des non-spécialistes, tu liras pourquoi nous jugeons mal le danger et tu rédigeras un rapport sur la communication des risques pour la santé.",
    can: ["Use advanced comparative structures (all the more, none the wiser, every bit as, nowhere near as)", "Explain risks and probabilities clearly and honestly to non-experts", "Understand an article on risk perception and a statistician's explanation of a test", "Write a formal report with recommendations"],
    can_fr: ["Utiliser des structures comparatives avancées (all the more, none the wiser, every bit as, nowhere near as)", "Expliquer clairement et honnêtement des risques et des probabilités à des non-spécialistes", "Comprendre un article sur la perception du risque et l'explication d'un test par un statisticien", "Rédiger un rapport formel avec des recommandations"],
    lessons: [155, 156], vocab: ["scienceC2", "medicineC2", "riskC2", "chanceC2"], reading: "riskjudge", extra: ["forecasts"], prompt: "c2-risk",
    writing: { task: "A regional health authority wants to improve the way it explains health risks to the public. Write a report (280-320 words) describing the current problems and recommending improvements.", task_fr: "Une autorité régionale de santé veut améliorer sa façon d'expliquer les risques pour la santé au public. Rédige un rapport (280-320 mots) qui décrit les problèmes actuels et recommande des améliorations.", words: "280-320",
      tips: ["This report examines…", "It draws on…", "The most serious weakness is…", "A second problem lies in…", "It is recommended that…"],
      checklist: ["I used a title and clear headings", "I described the problems precisely, with their consequences", "Each recommendation follows from a problem", "I used at least two comparative structures from the unit", "I stayed between 280 and 320 words"],
      model: "Communicating health risks: a report for the Regional Health Authority\n\nIntroduction\nThis report examines how health risks are currently communicated to the public in the region and recommends a number of improvements. It draws on a review of recent leaflets and press releases, and on discussions with patients, doctors and pharmacists across the region.\n\nCurrent problems\nThe most serious weakness is the reliance on relative risk. Recent campaigns have described certain foods and medicines as “doubling” or “tripling” the risk of illness without stating how common that illness is in the first place. Such figures, though technically accurate, are all the more alarming for being incomplete: few readers ever learn whether the original risk was one in a hundred or one in a million. Pharmacists report that some patients have stopped essential treatments as a result.\nA second problem lies in the format of medicine leaflets. Side effects are listed at great length, with little indication of how likely they are, so that a reaction affecting one patient in ten thousand appears every bit as threatening as one affecting one in ten.\n\nRecommendations\nIt is recommended that:\n• all public statements give absolute figures (“two in ten thousand”) alongside any relative change;\n• leaflets present the most common side effects first, using natural frequencies and simple visual aids;\n• staff receive brief training in explaining uncertainty, including what is not yet known.\n\nConclusion\nNone of these measures would be costly. If they were implemented, patients would be none the less cautious, but considerably better informed, and the authority's advice would carry greater credibility. A review of their impact after twelve months is advised, and the same principles could usefully be extended to screening invitations and vaccination campaigns." } };
  W.COURSE.splice(W.COURSE.findIndex((u) => u.id === "c2-5"), 0, unit);
})();
