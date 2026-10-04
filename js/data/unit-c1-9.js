/* Unité C1 « Mind and body » (c1-9), complète : leçons 145-146 et leurs exercices, texte, atelier d'écoute,
   jeu de rôle, sujet d'oral, guide d'écriture et atelier de langue. Elle regroupe mindC1 (venu de c1-3), healthC1
   (venu de c1-5), feelingsC1 et characterC1 (venus de c1-1).
   Personnes fictives. Faits vérifiés : étude américaine de 2012 sur près de 29 000 adultes suivis pendant huit ans
   (stress élevé + conviction qu'il nuit à la santé = risque de décès plus élevé ; stress élevé sans cette conviction :
   pas d'augmentation), corrélation et non causalité ; expérience où des étudiants à qui l'on présente l'accélération
   du cœur comme une aide réussissent mieux un examen d'entraînement ; syndrome de l'imposteur fréquent. */
(function () {
  const W = window;

  W.LESSONS.push(
  {
    id: 145, after: 51, level: "C1", icon: "workflow",
    title: "I can't imagine him doing that: advanced verb patterns", title_fr: "I can't imagine him doing that : constructions verbales avancées",
    subtitle: "Verb + someone + -ing, passive forms (being told, to be chosen) and perfect forms (having done, to have done).", subtitle_fr: "Verbe + quelqu'un + -ing, formes passives (being told, to be chosen) et formes composées (having done, to have done).",
    body: `
<h2>Verb + someone + -ing</h2>
<p>Some verbs can take an object before the -ing form: <s-en>imagine, mind, resent, appreciate, remember, can't stand, risk</s-en>.</p>
<p><s-en>I can't imagine him saying that.</s-en> · <s-en>Do you mind me asking a personal question?</s-en> · <s-en>She resented them making decisions without her.</s-en></p>
<p>In formal English, a possessive is possible: <s-en>I appreciate your coming so quickly.</s-en> In everyday English, the object pronoun is far more common: <s-en>I appreciate you coming so quickly.</s-en></p>
<h2>Passive -ing and passive infinitive</h2>
<table>
<tr><th>Active</th><th>Passive</th></tr>
<tr><td><s-en>I hate telling people what to do.</s-en></td><td><s-en>I hate being told what to do.</s-en></td></tr>
<tr><td><s-en>She wants to choose.</s-en></td><td><s-en>She wants to be chosen.</s-en></td></tr>
</table>
<p><s-en>Nobody likes being ignored.</s-en> · <s-en>He expects to be paid on time.</s-en> · <s-en>Children need to be listened to.</s-en></p>
<h2>Perfect forms: an earlier action</h2>
<p><s-en>having</s-en> + past participle and <s-en>to have</s-en> + past participle show that one action happened before another.</p>
<p><s-en>She denied having taken the money.</s-en> · <s-en>I regret not having spoken to him.</s-en> · <s-en>He seems to have forgotten.</s-en> · <s-en>I'm sorry to have kept you waiting.</s-en></p>
<div class="tip">In speech, the simple form is often enough when the order is obvious: <s-en>She denied taking the money</s-en> means the same as <s-en>She denied having taken the money</s-en>.</div>
`,
    body_fr: `
<h2>Verbe + quelqu'un + -ing</h2>
<p>Certains verbes acceptent un complément avant la forme en -ing : <s-en>imagine, mind, resent, appreciate, remember, can't stand, risk</s-en> (imaginer, déranger, ne pas supporter, apprécier, se souvenir, détester, risquer).</p>
<p><s-en>I can't imagine him saying that.</s-en> (je ne l'imagine pas dire ça) · <s-en>Do you mind me asking a personal question?</s-en> (ça vous dérange si je pose une question personnelle ?) · <s-en>She resented them making decisions without her.</s-en> (elle leur en voulait de décider sans elle)</p>
<p>À l'écrit soutenu, on peut utiliser un possessif : <s-en>I appreciate your coming so quickly.</s-en> À l'oral, le pronom complément est bien plus courant : <s-en>I appreciate you coming so quickly.</s-en> (merci d'être venu si vite)</p>
<h2>La forme en -ing passive et l'infinitif passif</h2>
<table>
<tr><th>Actif</th><th>Passif</th></tr>
<tr><td><s-en>I hate telling people what to do.</s-en> (je déteste dire aux gens quoi faire)</td><td><s-en>I hate being told what to do.</s-en> (je déteste qu'on me dise quoi faire)</td></tr>
<tr><td><s-en>She wants to choose.</s-en> (elle veut choisir)</td><td><s-en>She wants to be chosen.</s-en> (elle veut être choisie)</td></tr>
</table>
<p><s-en>Nobody likes being ignored.</s-en> (personne n'aime être ignoré) · <s-en>He expects to be paid on time.</s-en> · <s-en>Children need to be listened to.</s-en> (les enfants ont besoin d'être écoutés)</p>
<h2>Les formes composées : une action antérieure</h2>
<p><s-en>having</s-en> + participe passé et <s-en>to have</s-en> + participe passé montrent qu'une action a eu lieu avant une autre.</p>
<p><s-en>She denied having taken the money.</s-en> (elle a nié avoir pris l'argent) · <s-en>I regret not having spoken to him.</s-en> (je regrette de ne pas lui avoir parlé) · <s-en>He seems to have forgotten.</s-en> (il semble avoir oublié) · <s-en>I'm sorry to have kept you waiting.</s-en> (désolée de vous avoir fait attendre)</p>
<div class="tip">À l'oral, la forme simple suffit souvent quand l'ordre est évident : <s-en>She denied taking the money</s-en> veut dire la même chose que <s-en>She denied having taken the money</s-en>.</div>
`,
    examples: [
      ["I can't imagine him saying that.", "Je ne l'imagine pas dire ça."],
      ["Do you mind me asking a personal question?", "Ça vous dérange si je vous pose une question personnelle ?"],
      ["I really appreciate you listening to me.", "Merci beaucoup de m'écouter."],
      ["I hate being told what to do.", "Je déteste qu'on me dise quoi faire."],
      ["Children need to be listened to.", "Les enfants ont besoin d'être écoutés."],
      ["She denied having taken the money.", "Elle a nié avoir pris l'argent."],
      ["I'm sorry to have kept you waiting.", "Je suis désolée de vous avoir fait attendre."]
    ],
    quiz: [
      { q: "I can't imagine ___ in an office all day.", q_fr: "Complète : « I can't imagine ___ in an office all day. »", o: ["him to work", "him working", "he works"], a: 1, ex: "imagine + someone + -ing.", ex_fr: "imagine + quelqu'un + -ing." },
      { q: "Nobody likes ___ in public.", q_fr: "Complète : « Nobody likes ___ in public. »", o: ["being criticised", "to criticise", "be criticised"], a: 0, ex: "Passive -ing: being + past participle.", ex_fr: "Forme en -ing passive : being + participe passé." },
      { q: "He seems ___ the meeting: he's not here.", q_fr: "Complète : « He seems ___ the meeting: he's not here. »", o: ["to forget", "forgetting", "to have forgotten"], a: 2, ex: "An earlier action: to have + past participle.", ex_fr: "Action antérieure : to have + participe passé." },
      { q: "Do you mind ___ the window?", q_fr: "Complète : « Do you mind ___ the window? »", o: ["me opening", "me to open", "that I open"], a: 0, ex: "mind + someone + -ing (or mind if I open).", ex_fr: "mind + quelqu'un + -ing (ou mind if I open)." },
      { q: "I regret not ___ harder at school.", q_fr: "Complète : « I regret not ___ harder at school. »", o: ["have worked", "having worked", "to have work"], a: 1, ex: "regret + not + having + past participle.", ex_fr: "regret + not + having + participe passé." }
    ]
  },
  {
    id: 146, after: 51, level: "C1", kind: "functional", icon: "hand-heart",
    title: "Everyday English: offering support and empathy", title_fr: "Anglais pratique : soutenir quelqu'un avec empathie",
    subtitle: "Respond to someone who's going through a hard time: listen, show you understand, and offer help without taking over.", subtitle_fr: "Répondre à quelqu'un qui traverse une période difficile : écouter, montrer que tu comprends et proposer ton aide sans t'imposer.",
    body: `
<h2>Showing that you understand</h2>
<p><s-en>That sounds really hard.</s-en> · <s-en>That must have been awful.</s-en> · <s-en>I can only imagine how you feel.</s-en> · <s-en>No wonder you're exhausted.</s-en> · <s-en>It makes complete sense that you'd feel that way.</s-en></p>
<h2>Inviting them to talk, without pushing</h2>
<p><s-en>Do you want to talk about it?</s-en> · <s-en>Take your time.</s-en> · <s-en>How are you coping?</s-en> · <s-en>What's been the hardest part?</s-en></p>
<h2>Offering help</h2>
<p><s-en>Is there anything I can do?</s-en> · <s-en>Would it help if I…?</s-en> · <s-en>Let me know if you need anything, even just to talk.</s-en> · <s-en>I'm here if you need me.</s-en></p>
<h2>What to avoid</h2>
<table>
<tr><th>Well meant, but…</th><th>Why</th></tr>
<tr><td><s-en>Calm down.</s-en></td><td>It tells people their feelings are wrong.</td></tr>
<tr><td><s-en>I know exactly how you feel.</s-en></td><td>You don't, and it turns the conversation towards you.</td></tr>
<tr><td><s-en>At least…</s-en></td><td>It makes the problem sound smaller than it is.</td></tr>
<tr><td><s-en>You should just…</s-en></td><td>Advice given too early sounds like judgement.</td></tr>
</table>
<div class="tip"><s-en>Must have been</s-en>, a deduction about the past, is the key structure of empathy: <s-en>That must have been terrifying.</s-en> · <s-en>You must have felt so alone.</s-en></div>
`,
    body_fr: `
<h2>Montrer que tu comprends</h2>
<p><s-en>That sounds really hard.</s-en> (ça a l'air vraiment dur) · <s-en>That must have been awful.</s-en> (ça a dû être horrible) · <s-en>I can only imagine how you feel.</s-en> (j'imagine à peine ce que tu ressens) · <s-en>No wonder you're exhausted.</s-en> (pas étonnant que tu sois épuisée) · <s-en>It makes complete sense that you'd feel that way.</s-en> (c'est tout à fait normal que tu ressentes ça)</p>
<h2>Inviter à parler, sans insister</h2>
<p><s-en>Do you want to talk about it?</s-en> (tu veux en parler ?) · <s-en>Take your time.</s-en> (prends ton temps) · <s-en>How are you coping?</s-en> (comment tu tiens le coup ?) · <s-en>What's been the hardest part?</s-en> (qu'est-ce qui a été le plus dur ?)</p>
<h2>Proposer ton aide</h2>
<p><s-en>Is there anything I can do?</s-en> (je peux faire quelque chose ?) · <s-en>Would it help if I…?</s-en> (ça t'aiderait si je… ?) · <s-en>Let me know if you need anything, even just to talk.</s-en> (dis-moi si tu as besoin de quoi que ce soit, même juste pour parler) · <s-en>I'm here if you need me.</s-en> (je suis là si tu as besoin de moi)</p>
<h2>Ce qu'il vaut mieux éviter</h2>
<table>
<tr><th>Bien intentionné, mais…</th><th>Pourquoi</th></tr>
<tr><td><s-en>Calm down.</s-en> (calme-toi)</td><td>Ça dit à l'autre que ses émotions ont tort.</td></tr>
<tr><td><s-en>I know exactly how you feel.</s-en> (je sais exactement ce que tu ressens)</td><td>Ce n'est pas vrai, et ça ramène la conversation vers toi.</td></tr>
<tr><td><s-en>At least…</s-en> (au moins…)</td><td>Ça fait paraître le problème plus petit qu'il n'est.</td></tr>
<tr><td><s-en>You should just…</s-en> (tu n'as qu'à…)</td><td>Un conseil trop rapide sonne comme un jugement.</td></tr>
</table>
<div class="tip"><s-en>Must have been</s-en>, une déduction sur le passé, est la structure clé de l'empathie : <s-en>That must have been terrifying.</s-en> (ça a dû être terrifiant) · <s-en>You must have felt so alone.</s-en> (tu as dû te sentir si seule)</div>
`,
    examples: [
      ["That sounds really hard.", "Ça a l'air vraiment dur."],
      ["That must have been awful.", "Ça a dû être horrible."],
      ["No wonder you're exhausted.", "Pas étonnant que tu sois épuisée."],
      ["Do you want to talk about it?", "Tu veux en parler ?"],
      ["How are you coping?", "Comment tu tiens le coup ?"],
      ["Would it help if I came round this evening?", "Ça t'aiderait si je passais ce soir ?"],
      ["I'm here if you need me.", "Je suis là si tu as besoin de moi."]
    ],
    quiz: [
      { q: "A friend tells you she has lost her job. The best first reply:", q_fr: "Une amie te dit qu'elle a perdu son travail. La meilleure première réponse :", o: ["At least you'll have more free time!", "That must have been a real shock.", "Calm down."], a: 1, ex: "Show you understand before anything else.", ex_fr: "Montre d'abord que tu comprends." },
      { q: "“No wonder you're tired” means:", q_fr: "« No wonder you're tired » veut dire :", o: ["I wonder if you're tired.", "You're not tired.", "It's not surprising that you're tired."], a: 2, ex: "no wonder = it's not surprising.", ex_fr: "no wonder = pas étonnant." },
      { q: "“How are you coping?” asks about:", q_fr: "« How are you coping? » porte sur :", o: ["how someone is managing a difficult situation", "someone's job", "copying documents"], a: 0, ex: "cope = manage a difficult situation.", ex_fr: "cope = faire face à une situation difficile." },
      { q: "Why is it better to avoid “I know exactly how you feel”?", q_fr: "Pourquoi vaut-il mieux éviter « I know exactly how you feel » ?", o: ["It's too formal.", "It turns the conversation towards you.", "It's grammatically wrong."], a: 1, ex: "Nobody knows exactly; and the focus moves to you.", ex_fr: "Personne ne sait exactement ; et l'attention se déplace vers toi." },
      { q: "“That must have been terrifying” is:", q_fr: "« That must have been terrifying » est :", o: ["a deduction about the past that shows empathy", "an order", "a prediction"], a: 0, ex: "must have + past participle = a deduction about the past.", ex_fr: "must have + participe passé = une déduction sur le passé." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    145: {
      gap: [["I can't stand people ___ me. (interrompre)", "interrupting"], ["She hates ___ told what to do. (passif)", "being"], ["He denied ___ seen the email. (avoir, forme en -ing)", "having"], ["I'm sorry to ___ kept you waiting. (avoir)", "have"]],
      fix: [["Do you mind if I asking you something?", "Do you mind if I ask you something?|Do you mind me asking you something?", "Mind if + clause, or mind + someone + -ing."], ["I don't like to be ignore.", "I don't like to be ignored.|I don't like being ignored.", "Passive: be + past participle."]],
      task: ["Write four sentences about things that annoy you or that you appreciate in other people, using passive forms and object + -ing.", "Écris quatre phrases sur ce qui t'agace ou ce que tu apprécies chez les autres, avec des formes passives et la construction complément + -ing.", "I can't stand people talking on the phone in the cinema. I hate being kept waiting without an explanation. I really appreciate friends remembering my birthday. I don't mind being criticised, as long as it's done kindly."]
    },
    146: {
      gap: [["That must ___ been really frightening. (avoir)", "have"], ["No ___ you're upset: anyone would be. (pas étonnant)", "wonder"], ["How are you ___? (tenir le coup)", "coping"], ["Would it help ___ I called the school for you? (si)", "if"]],
      fix: [["It must be awful yesterday.", "It must have been awful yesterday.", "A deduction about the past: must have + past participle."], ["Don't hesitate to tell me if you need of something.", "Don't hesitate to tell me if you need anything.|Let me know if you need anything.", "Need + object, without of."]],
      task: ["A friend writes that she has been feeling exhausted and overwhelmed at work for weeks. Write a short, kind reply that shows you understand and offers help.", "Une amie t'écrit qu'elle se sent épuisée et débordée au travail depuis des semaines. Écris une réponse courte et bienveillante qui montre que tu comprends et propose ton aide.", "Oh no, that sounds really hard. No wonder you're exhausted, after all those weeks of overtime. You must have felt that nobody noticed. Do you want to talk about it this weekend? Would it help if I came round on Saturday with lunch? Either way, I'm here if you need me."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "friendsupport", lesson: 146, level: "C1", icon: "hand-heart", partner: "Lucy", role: "a friend going through a hard time",
    title: "Supporting a friend", title_fr: "Soutenir une amie",
    setting: "Your friend Lucy hasn't been herself lately. She tells you she's been struggling at work.", setting_fr: "Ton amie Lucy n'est pas elle-même ces derniers temps. Elle te confie qu'elle traverse une période difficile au travail.",
    turns: [
      { p: "Sorry I've been so quiet lately. Work has been… a lot. I'm not sleeping, and I cry in the car on the way home.", fr: "Désolée d'avoir été si silencieuse ces derniers temps. Le travail, c'est… beaucoup. Je ne dors pas, et je pleure dans la voiture en rentrant." },
      { y: ["Oh Lucy, that sounds really hard. Do you want to talk about it?", "Calm down, it's only work.", "Oh Lucy, that sounds really hardly. Do you want to talk of it?"], fr: "Oh Lucy, ça a l'air vraiment dur. Tu veux en parler ?", why: "Hard, not hardly (which means almost not). Talk about something." },
      { p: "It's my new manager. She criticises everything I do, in front of the whole team.", fr: "C'est ma nouvelle responsable. Elle critique tout ce que je fais, devant toute l'équipe." },
      { y: ["That must have been humiliating. No wonder you're not sleeping.", "At least you have a job.", "That must be humiliating yesterday. No wonder you don't sleep."], fr: "Ça a dû être humiliant. Pas étonnant que tu ne dormes pas.", why: "Must have been for the past. Avoid at least…: it makes the problem sound smaller." },
      { p: "I keep thinking it's my fault. Maybe I'm just not good enough.", fr: "Je n'arrête pas de penser que c'est ma faute. Peut-être que je ne suis pas à la hauteur." },
      { y: ["It makes sense that you'd feel that way, but from everything you've told me, the problem is how she's treating you, not your work.", "Yes, maybe.", "It has sense that you feel like that, but from all what you told me, the problem is how she treats you."], fr: "C'est normal que tu ressentes ça, mais d'après tout ce que tu m'as raconté, le problème, c'est la façon dont elle te traite, pas ton travail.", why: "It makes sense (not it has sense). Everything you've told me (not all what)." },
      { p: "I don't even know what to do about it.", fr: "Je ne sais même pas quoi faire." },
      { y: ["You don't have to decide anything tonight. Would it help if we wrote down a few examples together, in case you want to talk to HR?", "You should just quit.", "You don't have to decide nothing tonight. Would it help if we would write down a few examples together?"], fr: "Tu n'as rien à décider ce soir. Ça t'aiderait si on notait quelques exemples ensemble, au cas où tu voudrais en parler aux RH ?", why: "Don't have to + anything (not nothing). Would it help if we wrote… (no would after if)." },
      { p: "That's actually a good idea. Thank you for listening.", fr: "C'est une bonne idée, en fait. Merci de m'écouter." },
      { y: ["Of course. And I mean it: call me whenever you need to, even if it's just to complain.", "OK. Bye.", "Of course. And I mean it: call me whenever you will need, even if it's just for complain."], fr: "Bien sûr. Et je le pense vraiment : appelle-moi quand tu en as besoin, même si c'est juste pour râler.", why: "Whenever + present, not will. Just to complain: to + verb." }
    ] }
  );

  W.READINGS.push({
    id: "goodstress", level: "C1", icon: "heart-pulse", title: "Can stress be good for you?", title_fr: "Le stress peut-il être bon pour toi ?", genre: "Feature article",
    intro: "A feature article on what research says, and doesn't say, about stress. Advanced verb patterns (being told, being listened to), cautious reporting of research, and the vocabulary of the mind and health.",
    intro_fr: "Un article de fond sur ce que la recherche dit, et ne dit pas, du stress. Constructions verbales avancées (being told, being listened to), compte rendu prudent de recherches, et vocabulaire de l'esprit et de la santé.",
    paragraphs: [
      { en: "Stress has a terrible reputation. We are told that it ruins our sleep, weakens our immune system and shortens our lives, and much of that is true. Yet a growing body of research suggests that the story is more complicated, and that the way we think about stress may matter almost as much as the stress itself.", fr: "Le stress a une réputation épouvantable. On nous dit qu'il gâche notre sommeil, affaiblit notre système immunitaire et raccourcit notre vie, et c'est en grande partie vrai. Pourtant, un nombre croissant de recherches suggère que l'histoire est plus compliquée, et que la façon dont nous pensons le stress pourrait compter presque autant que le stress lui-même." },
      { en: "In one widely discussed study, published in 2012, researchers in the United States looked at data from nearly 29,000 adults. Participants had been asked how much stress they had experienced in the previous year, and whether they believed stress was bad for their health. Eight years later, the researchers checked who had died. People who reported high levels of stress and believed it was harmful had a significantly higher risk of dying early. People who reported just as much stress, but did not see it as harmful, showed no such increase.", fr: "Dans une étude très commentée, publiée en 2012, des chercheurs américains ont examiné les données de près de 29 000 adultes. On avait demandé aux participants combien de stress ils avaient vécu au cours de l'année précédente, et s'ils pensaient que le stress était mauvais pour leur santé. Huit ans plus tard, les chercheurs ont vérifié qui était décédé. Les personnes qui déclaraient un stress élevé et le jugeaient nocif avaient un risque nettement plus élevé de mourir prématurément. Celles qui déclaraient autant de stress, mais ne le jugeaient pas nocif, ne présentaient pas cette augmentation." },
      { en: "It is tempting to conclude that we can simply think ourselves healthy, but the study cannot prove that. It shows a correlation, not a cause: people who see stress as harmful may differ in other ways, for example in their health to begin with, or in how much control they have over their lives. Still, other experiments point in a similar direction. In one, students who were told before a practice exam that a racing heart could actually help them perform scored better than those who were told nothing.", fr: "Il est tentant d'en conclure qu'il suffit de penser pour être en bonne santé, mais l'étude ne peut pas le prouver. Elle montre une corrélation, pas une cause : ceux qui voient le stress comme nocif sont peut-être différents sur d'autres points, par exemple leur santé de départ, ou le contrôle qu'ils ont sur leur vie. Cela dit, d'autres expériences vont dans le même sens. Dans l'une d'elles, des étudiants à qui l'on avait dit, avant un examen d'entraînement, qu'un cœur qui s'emballe pouvait en fait les aider à réussir ont obtenu de meilleurs résultats que ceux à qui l'on n'avait rien dit." },
      { en: "Researchers have long known that a moderate amount of pressure can sharpen attention. An approaching deadline focuses the mind; a little nervousness before a presentation can make us more alert. The problem is not stress as such, but stress that never stops. When the body's alarm system stays switched on for weeks or months, with no chance to recover, it starts to do real damage, which is why burnout is now taken so seriously by doctors and employers.", fr: "Les chercheurs savent depuis longtemps qu'une pression modérée peut aiguiser l'attention. Une échéance qui approche concentre l'esprit ; un peu de nervosité avant une présentation peut nous rendre plus vifs. Le problème n'est pas le stress en tant que tel, mais le stress qui ne s'arrête jamais. Quand le système d'alarme du corps reste allumé pendant des semaines ou des mois, sans possibilité de récupérer, il commence à faire de vrais dégâts, ce qui explique que l'épuisement professionnel soit désormais pris si au sérieux par les médecins et les employeurs." },
      { en: "What, then, can we do? Psychologists who study the subject suggest a few habits. The first is to notice stress without immediately fighting it: to recognise a racing heart as the body preparing for a challenge, rather than as a sign of failure. The second is to make sure that periods of pressure are followed by real recovery, whether through sleep, exercise or time with people we trust. The third, and perhaps the most important, is to talk about it. Nobody likes being told to relax, but most of us appreciate being listened to.", fr: "Que pouvons-nous faire, alors ? Les psychologues qui étudient la question suggèrent quelques habitudes. La première est de remarquer le stress sans le combattre aussitôt : reconnaître dans un cœur qui s'emballe le corps qui se prépare à un défi, plutôt qu'un signe d'échec. La deuxième est de veiller à ce que les périodes de pression soient suivies d'une vraie récupération, par le sommeil, le sport ou du temps avec des personnes de confiance. La troisième, et peut-être la plus importante, est d'en parler. Personne n'aime qu'on lui dise de se détendre, mais la plupart d'entre nous apprécient d'être écoutés." },
      { en: "None of this means that we should welcome every source of stress, or blame people for feeling overwhelmed. Some situations are simply too much, and the right response is to change them, not to reinterpret them. But for the ordinary pressures of life, it may help to remember that the racing heart before an exam is not necessarily the enemy. It may simply be the body's way of getting ready.", fr: "Rien de tout cela ne signifie qu'il faille accueillir toute source de stress, ni reprocher aux gens de se sentir submergés. Certaines situations sont tout simplement trop lourdes, et la bonne réponse est de les changer, pas de les réinterpréter. Mais pour les pressions ordinaires de la vie, il peut être utile de se rappeler que le cœur qui s'emballe avant un examen n'est pas forcément l'ennemi. C'est peut-être simplement la façon dont le corps se prépare." }
    ],
    glossary: { "reputation": "réputation", "weakens": "affaiblit", "participants": "participants", "significantly": "nettement", "tempting": "tentant", "correlation": "corrélation", "racing": "qui s'emballe", "sharpen": "aiguiser", "alert": "vif, attentif", "nervousness": "nervosité", "recover": "récupérer", "recovery": "récupération", "reinterpret": "réinterpréter", "overwhelmed": "submergés", "enemy": "ennemi" },
    questions: [
      { q: "What does the 2012 study suggest?", o: ["Stress is always healthy", "Stress only exists in people's minds", "Very stressed people seem at greater risk when they believe stress is harmful"], a: 2 },
      { q: "Why can't the study prove that our beliefs change our health?", o: ["It shows a correlation, not a cause", "It was too small", "It only studied students"], a: 0 },
      { q: "What happened in the practice-exam experiment?", o: ["Students who relaxed scored better", "Students told that a racing heart could help them scored better", "All the students scored the same"], a: 1 },
      { q: "According to the article, which kind of stress does real damage?", o: ["Nervousness before a presentation", "An approaching deadline", "Stress that never stops, with no chance to recover"], a: 2 },
      { q: "Which habit is NOT suggested?", o: ["Ignoring stress completely", "Recovering after periods of pressure", "Talking about it"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-c1-9", unit: "c1-9", level: "C1", icon: "brain",
    title: "On the radio: impostor syndrome", title_fr: "À la radio : le syndrome de l'imposteur",
    context: "On a radio programme, the presenter, Sophie, reads a listener's question to a psychologist, James.", context_fr: "Dans une émission de radio, l'animatrice, Sophie, lit la question d'une auditrice à un psychologue, James.",
    words: [["impostor syndrome", "le syndrome de l'imposteur"], ["to deserve", "mériter"], ["competent", "compétent"], ["to be found out", "être démasqué"], ["a coping mechanism", "un mécanisme d'adaptation"]],
    lines: [["Sophie", "Our next question comes from a listener who's just been promoted. She says: I keep feeling that I don't deserve it, and that sooner or later someone will find out I'm not good enough. James, is that unusual?", "en-GB"], ["James", "Not at all. It's often called impostor syndrome, and it's extremely common, especially among people who've just been promoted or who work in very competitive fields. Ironically, it tends to affect people who are actually quite competent.", "en-US"], ["Sophie", "Why would competent people feel like that?", "en-GB"], ["James", "Partly because they're aware of everything they don't know. Someone who knows very little often has no idea how much there is to learn. And partly because we compare our own private doubts with other people's confident public faces.", "en-US"], ["Sophie", "So what would you say to our listener?", "en-GB"], ["James", "First, I'd encourage her to write down what she's actually achieved, with evidence: feedback, results, things she's been thanked for. When you feel like an impostor, you remember the failures and forget the rest.", "en-US"], ["Sophie", "And should she tell anyone?", "en-GB"], ["James", "I'd strongly recommend it. She'll probably be surprised to discover how many of her colleagues feel exactly the same. What she shouldn't do is work twice as hard to avoid being found out. That's a coping mechanism that leads straight to burnout.", "en-US"], ["Sophie", "Wise words. Thank you, James.", "en-GB"]],
    gist: ["What is the listener's problem?", ["She feels she doesn't deserve her promotion", "She wants to be promoted", "She has lost her job"]],
    detail: [["According to James, who often suffers from impostor syndrome?", ["People who are actually quite competent", "People who never work hard", "Only senior managers"]], ["Why might competent people feel like impostors?", ["They know how much they don't know, and compare their doubts with other people's confidence.", "They have been criticised a lot.", "They don't like their job."]], ["What does James advise first?", ["Writing down her achievements, with evidence", "Changing jobs", "Working longer hours"]], ["Why shouldn't she work twice as hard?", ["It can lead to burnout.", "Her manager wouldn't like it.", "It's against the company's rules."]]],
    decode: ["it tends to affect people who are actually quite competent", "What she shouldn't do is work twice as hard to avoid being found out."],
    tip: "Advice on the radio is often organised with first, I'd encourage, I'd strongly recommend, what she shouldn't do is… Notice the verb patterns of the unit too: to avoid being found out, she'll be surprised to discover.", tip_fr: "À la radio, les conseils s'organisent souvent avec first, I'd encourage, I'd strongly recommend, what she shouldn't do is… Remarque aussi les constructions verbales de l'unité : to avoid being found out, she'll be surprised to discover."
  }]);

  W.PROMPTS.push({ id: "c1-stress", level: "C1", q: "How do you deal with stress? Has stress ever helped you?", fr: "Comment gères-tu le stress ? Le stress t'a-t-il déjà aidée ?", time: 120,
    phrases: ["What tends to stress me most is…", "When I feel under pressure, I…", "I've found that…", "It may sound strange, but…", "What doesn't help is being told…"],
    model: "What tends to stress me most is having too many small things to do at the same time, rather than one big challenge. When I feel under pressure, I make a list and do the easiest task first, just to get moving. I've found that a short walk helps far more than another coffee. It may sound strange, but stress has sometimes helped me: I'm never more focused than the night before a deadline. What doesn't help is being told to relax. I'd much rather someone offered to take one thing off my list!" });

  W.WRITING_GUIDE["c1-9"] = { genre: "A letter to a friend (C1 Advanced)", genre_fr: "Une lettre à un ami (C1 Advanced)",
    plan: [["Respond warmly to your friend's news.", "Réagis chaleureusement aux nouvelles de ton amie."], ["Show that you understand how she feels.", "Montre que tu comprends ce qu'elle ressent."], ["Advice: small, realistic steps.", "Des conseils : des étapes modestes et réalistes."], ["Encouragement.", "Des encouragements."], ["A concrete offer and a warm ending.", "Une proposition concrète et une fin chaleureuse."]],
    marks: [["I was so sorry to hear", "a warm opening", "une ouverture chaleureuse"], ["It must have been incredibly hard", "must have been: empathy about the past", "must have been : l'empathie sur le passé"], ["no wonder you're exhausted", "no wonder: it's understandable", "no wonder : c'est compréhensible"], ["never being able to switch off", "an -ing form as part of the subject", "une forme en -ing dans le sujet"], ["I know you hate being told to slow down", "a passive -ing form", "une forme en -ing passive"], ["I wonder whether a full break is the only option", "softened advice", "un conseil adouci"], ["If I were you, I'd start with something smaller.", "advice with the second conditional", "un conseil au conditionnel"], ["Having done that,", "a perfect participle", "un participe composé"], ["I can't imagine anyone thinking less of you", "imagine + someone + -ing", "imagine + quelqu'un + -ing"], ["Whatever you decide, I'm here.", "unconditional support", "un soutien sans condition"], ["Why don't I come and see you next weekend?", "a concrete offer", "une proposition concrète"]] };

  W.LEXIS["c1-9"] = {
    colloc: [
      ["suffer from anxiety", "souffrir d'anxiété", "Many students suffer from anxiety before exams.", "suffer", ["support", "endure"]],
      ["seek help", "chercher de l'aide", "It's important to seek help early.", "seek", ["search", "research"]],
      ["a healthy work-life balance", "un bon équilibre entre vie pro et vie perso", "She's trying to find a healthier work-life balance.", "balance", ["equilibrium", "balancing"]],
      ["lose your temper", "s'emporter", "He lost his temper and shouted at everyone.", "lost", ["missed", "dropped"]],
      ["burst into tears", "fondre en larmes", "She burst into tears when she heard the news.", "burst", ["melted", "fell"]],
      ["raise someone's spirits", "remonter le moral à quelqu'un", "A walk in the sun always raises my spirits.", "raises", ["rises", "grows"]],
      ["a vicious circle", "un cercle vicieux", "Stress and poor sleep can become a vicious circle.", "vicious", ["wicked", "cruel"]],
      ["deeply moved", "profondément ému", "We were deeply moved by her story.", "deeply", ["strongly", "heavily"]],
      ["undergo treatment", "suivre un traitement", "He is undergoing treatment for depression.", "undergoing", ["following", "doing"]],
      ["a sense of humour", "le sens de l'humour", "A good sense of humour helps in difficult times.", "sense", ["feeling", "meaning"]]
    ],
    wf: [
      ["She's been feeling very ___ since she moved abroad. (LONE)", "lonely"],
      ["Regular exercise can reduce the ___ of anxiety. (SEVERE)", "severity"],
      ["He spoke ___ about his years of depression. (OPEN)", "openly"],
      ["Many people find meditation deeply ___. (RELAX)", "relaxing"],
      ["She showed great ___ after the accident. (RESILIENT)", "resilience"],
      ["Doctors say the condition is ___ if it's treated early. (CURE)", "curable"],
      ["He felt ___ after being criticised in front of everyone. (HUMILIATE)", "humiliated"],
      ["Children need emotional ___ as much as food and shelter. (SECURE)", "security"]
    ],
    kwt: [
      ["I can't imagine that he would say such a thing.", "IMAGINE", "I can't ___ such a thing.", "imagine him saying"],
      ["I hate it when people tell me what to do.", "BEING", "I hate ___ what to do.", "being told"],
      ["She said that she hadn't taken the money.", "DENIED", "She ___ the money.", "denied having taken|denied taking"],
      ["Would it bother you if I opened the window?", "MIND", "Would you ___ the window?", "mind me opening|mind if I opened|mind my opening"],
      ["It seems that he has forgotten our appointment.", "SEEMS", "He ___ our appointment.", "seems to have forgotten"],
      ["It's not surprising that you're tired after such a week.", "WONDER", "___ tired after such a week.", "no wonder you're|no wonder you are"]
    ],
    idioms: [
      ["get something off your chest", "talk about something that has been worrying you", "vider son sac", "Talking to a friend helped her get it off her chest.", "get it off her chest"],
      ["at the end of your tether", "with no patience or energy left", "à bout", "After a week without sleep, I was at the end of my tether.", "at the end of my tether"],
      ["keep your chin up", "stay positive in a difficult situation", "garder le moral", "Keep your chin up: things will get better.", "Keep your chin up"],
      ["fall apart", "lose control of your emotions", "s'effondrer", "When her father died, she felt she was falling apart.", "falling apart"],
      ["pull yourself together", "control your emotions and behave calmly again", "se ressaisir", "Take a deep breath and pull yourself together.", "pull yourself together"],
      ["on edge", "nervous and easily upset", "à cran", "Everyone was on edge waiting for the results.", "on edge"],
      ["feel down", "feel sad and low", "avoir le moral à zéro", "I've been feeling a bit down since the holidays ended.", "feeling a bit down"],
      ["over the moon", "extremely happy", "aux anges", "She was over the moon when she got the job.", "over the moon"]
    ]
  };

  /* The unit, after Writing with precision; the mind, health, feelings and character themes move here. */
  const move = (from, key, ids) => { const u = W.COURSE.find((x) => x.id === from); if (u) u[key] = (u[key] || []).filter((x) => !ids.includes(x)); };
  move("c1-3", "vocab", ["mindC1"]); move("c1-5", "vocab", ["healthC1"]); move("c1-1", "vocab", ["feelingsC1", "characterC1"]);
  const unit = { id: "c1-9", level: "C1", icon: "brain", title: "Mind and body", title_fr: "L'esprit et le corps",
    intro: "At C1, you can talk about feelings and health with real precision, and support someone who is going through a difficult time. In this unit, you'll use advanced verb patterns (being told, having done, imagine him saying), show empathy without clichés, read what research says about stress, and write a letter of support and advice.",
    intro_fr: "Au C1, tu peux parler d'émotions et de santé avec une vraie précision, et soutenir quelqu'un qui traverse une période difficile. Dans cette unité, tu utiliseras des constructions verbales avancées (being told, having done, imagine him saying), tu feras preuve d'empathie sans clichés, tu liras ce que la recherche dit du stress et tu rédigeras une lettre de soutien et de conseils.",
    can: ["Use advanced verb patterns (someone + -ing, being told, having done)", "Respond with empathy and offer support appropriately", "Understand an article on stress research and a psychologist on the radio", "Write a letter offering understanding and advice"],
    can_fr: ["Utiliser des constructions verbales avancées (quelqu'un + -ing, being told, having done)", "Répondre avec empathie et proposer son soutien à bon escient", "Comprendre un article sur la recherche sur le stress et un psychologue à la radio", "Rédiger une lettre de compréhension et de conseils"],
    lessons: [145, 146], vocab: ["mindC1", "healthC1", "feelingsC1", "characterC1"], reading: "goodstress", prompt: "c1-stress",
    writing: { task: "An English-speaking friend has written to you: “I've been feeling exhausted for months. I work late every night, I can't switch off at weekends, and I've started to dread Monday mornings. Everyone says I should take a break, but I don't think I can. What would you do?” Write a letter (220-260 words) in reply, showing understanding and giving advice.", task_fr: "Une amie anglophone t'a écrit : « Je me sens épuisée depuis des mois. Je travaille tard tous les soirs, je n'arrive pas à décrocher le week-end, et je commence à redouter le lundi matin. Tout le monde me dit de faire une pause, mais je ne crois pas pouvoir. Tu ferais quoi, toi ? » Rédige une lettre (220-260 mots) en réponse, pour montrer que tu comprends et donner des conseils.", words: "220-260",
      tips: ["I was so sorry to hear that…", "It must have been…", "No wonder…", "If I were you, I'd…", "Whatever you decide,…"],
      checklist: ["I responded to my friend's feelings before giving advice", "My advice is concrete and realistic", "The tone is warm but not too casual", "I used at least two verb patterns from the unit (being told, having done, imagine someone doing…)", "I stayed between 220 and 260 words"],
      model: "Dear Anna,\n\nI was so sorry to hear how you've been feeling. It must have been incredibly hard to keep going for all these months, and I'm really glad you told me.\n\nFrom what you describe, no wonder you're exhausted. Working late every night and never being able to switch off would wear anyone down. I know you hate being told to slow down, so I won't lecture you, but I do think the fact that you dread Mondays is a sign worth taking seriously.\n\nYou say you can't take a break, and I understand why: you've always been the one people rely on. But I wonder whether a full break is the only option. If I were you, I'd start with something smaller. Could you agree with your manager on a time after which you don't answer emails? Having done that, you might find it easier to protect your weekends too. It might also be worth seeing your doctor, just to make sure nothing else is going on.\n\nAbove all, I can't imagine anyone thinking less of you for asking for help. You'd do exactly the same for any of us.\n\nWhatever you decide, I'm here. Why don't I come and see you next weekend? We could go for a long walk by the sea and not talk about work at all.\n\nLots of love,\nClaire" } };
  W.COURSE.splice(W.COURSE.findIndex((u) => u.id === "c1-5"), 0, unit);
})();
