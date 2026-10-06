/* Cours de français, unité B2-1 « The future of work / Le travail de demain » : le futur antérieur (action finie
   avant un moment futur, supposition), le conditionnel passé (regret, reproche, information non confirmée),
   négocier au travail. Première unité du B2 ; écrits au format DELF B2 (250 mots minimum). Personnages et
   entreprises fictifs, prénoms français. Faits vérifiables seulement : le CAP (certificat d'aptitude
   professionnelle) ; le compte personnel de formation (CPF) ; l'entretien annuel d'évaluation. Aucun chiffre sur
   l'emploi ou l'intelligence artificielle : les affirmations sur l'avenir restent prudentes. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "avenirTravailFR", icon: "cpu", title: "The future of work", title_fr: "Le travail de demain", level: "B2", words: [
    ["l'intelligence artificielle", "artificial intelligence", "L'intelligence artificielle transforme certains métiers."],
    ["l'automatisation", "automation", "L'automatisation des tâches répétitives s'accélère."],
    ["la tâche", "the task", "Je délègue les tâches administratives."],
    ["le métier d'avenir", "the job with a future", "Les métiers du soin sont des métiers d'avenir."],
    ["la reconversion", "the career change", "Sa reconversion dans la boulangerie a été un succès."],
    ["se reconvertir", "to change careers", "Elle s'est reconvertie dans l'enseignement."],
    ["la formation continue", "lifelong learning, in-service training", "L'entreprise finance la formation continue."],
    ["le travailleur indépendant / la travailleuse indépendante", "the self-employed worker (m) / (f)", "Les travailleurs indépendants fixent leurs horaires."],
    ["l'équilibre entre vie professionnelle et vie privée", "work-life balance", "Il cherche un meilleur équilibre entre vie professionnelle et vie privée."],
    ["l'épuisement professionnel", "burnout", "Elle a été arrêtée trois mois pour épuisement professionnel."],
    ["la précarité", "job insecurity, precariousness", "La précarité touche surtout les jeunes."],
    ["licencier", "to dismiss, to lay off", "L'usine a licencié deux cents personnes."],
    ["le licenciement", "the dismissal, the redundancy", "Il a contesté son licenciement."],
    ["l'avancement", "promotion, career progression", "Il attend un avancement depuis deux ans."],
    ["l'augmentation", "the pay rise", "J'ai demandé une augmentation."],
    ["les compétences transversales", "transferable skills, soft skills", "Les compétences transversales comptent autant que les diplômes."],
    ["déléguer", "to delegate", "Un bon responsable sait déléguer."],
    ["être débordé / être débordée", "to be swamped (m) / (f)", "Cette semaine, il est complètement débordé."]
  ] },
  { id: "negociationFR", icon: "briefcase-business", title: "Negotiating", title_fr: "Négocier", level: "B2", words: [
    ["négocier", "to negotiate", "J'ai réussi à négocier mon salaire."],
    ["la négociation", "the negotiation", "Les négociations ont duré trois jours."],
    ["le compromis", "the compromise", "Nous avons trouvé un compromis."],
    ["la contrepartie", "something in return", "En contrepartie, je travaillerai un samedi par mois."],
    ["céder", "to give in", "La direction a fini par céder."],
    ["insister", "to insist", "Il a insisté pour avoir une réponse écrite."],
    ["faire une concession", "to make a concession", "Chaque partie a fait une concession."],
    ["la marge de manœuvre", "room for manoeuvre", "Je n'ai pas beaucoup de marge de manœuvre."],
    ["revoir à la hausse", "to revise upwards", "Ils ont revu leur offre à la hausse."],
    ["revoir à la baisse", "to revise downwards", "Nous devons revoir le budget à la baisse."],
    ["envisageable", "conceivable, possible", "Une journée de télétravail, c'est envisageable."],
    ["prétendre à", "to be entitled to aim for", "Avec votre expérience, vous pouvez prétendre à ce poste."],
    ["compte tenu de", "given, in view of", "Compte tenu de vos résultats, nous acceptons."],
    ["l'entretien annuel", "the annual review", "Mon entretien annuel est jeudi."],
    ["les objectifs", "the targets, the goals", "J'ai atteint tous mes objectifs cette année."],
    ["atteindre", "to reach, to achieve", "Nous avons atteint nos objectifs."],
    ["obtenir gain de cause", "to win one's case", "Les salariés ont obtenu gain de cause."],
    ["par écrit", "in writing", "Pouvez-vous me le confirmer par écrit ?"]
  ] });

  W.LESSONS.push(
  {
    id: 75, level: "B2", icon: "hourglass",
    title: "J'aurai fini: the futur antérieur", title_fr: "J'aurai fini : le futur antérieur",
    subtitle: "Something that will be finished before a moment in the future, and a guess about the past.", subtitle_fr: "Une action terminée avant un moment futur, et une supposition sur le passé.",
    body: `
<h2>Forming it</h2>
<p>The future of <s-fr>avoir</s-fr> or <s-fr>être</s-fr> + the past participle, with the usual agreements: <s-fr>j'aurai fini</s-fr>, <s-fr>tu auras compris</s-fr>, <s-fr>elle sera partie</s-fr>, <s-fr>nous nous serons installés</s-fr>.</p>
<h2>Finished before a future moment</h2>
<p><s-fr>D'ici 2035, l'intelligence artificielle aura transformé de nombreux métiers.</s-fr> (By 2035, AI will have transformed…) · <s-fr>Dans six mois, j'aurai terminé ma formation.</s-fr></p>
<h2>After quand, dès que, une fois que</h2>
<p>When one future action comes before another, French uses the futur antérieur where English uses the present perfect:</p>
<table>
<tr><th>English</th><th>French</th></tr>
<tr><td>When I've finished, I'll call you.</td><td><s-fr>Quand j'aurai fini, je t'appellerai.</s-fr></td></tr>
<tr><td>As soon as you've read the report, send it back.</td><td><s-fr>Dès que tu auras lu le rapport, renvoie-le.</s-fr></td></tr>
<tr><td>Once they've signed, we can start.</td><td><s-fr>Une fois qu'ils auront signé, nous pourrons commencer.</s-fr></td></tr>
</table>
<h2>A guess about the past</h2>
<p>In speech, the futur antérieur can express a likely explanation: <s-fr>Il n'est pas encore là ? Il aura raté son train.</s-fr> (He must have missed his train.)</p>
<div class="tip">Never <s-fr>quand j'ai fini</s-fr> for a future action: the French time logic is stricter than the English one. If the main verb is in the future, the earlier action takes the futur antérieur.</div>
`,
    examples: [
      ["D'ici dix ans, beaucoup de métiers auront changé.", "In ten years' time, many jobs will have changed."],
      ["Dans un mois, j'aurai terminé ma reconversion.", "In a month, I'll have finished my career change."],
      ["Quand tu auras fini, tu pourras partir.", "When you've finished, you can go."],
      ["Dès qu'elle aura reçu la réponse, elle vous appellera.", "As soon as she's received the answer, she'll call you."],
      ["Une fois que nous aurons signé le contrat, le projet commencera.", "Once we've signed the contract, the project will start."],
      ["Ils seront partis avant ton arrivée.", "They'll have left before you arrive."],
      ["Il n'a pas répondu ? Il aura oublié.", "He hasn't answered? He must have forgotten."],
      ["En deux ans, nous aurons remboursé le prêt.", "In two years, we'll have paid off the loan."]
    ],
    quiz: [
      { q: "“When I've finished, I'll call you”:", o: ["Quand j'ai fini, je t'appellerai.", "Quand j'aurai fini, je t'appellerai.", "Quand je finirai, je t'ai appelé."], a: 1, ex: "The earlier future action: futur antérieur." },
      { q: "“By 2030, they will have built the bridge”:", o: ["D'ici 2030, ils auront construit le pont.", "D'ici 2030, ils construiront le pont avant.", "D'ici 2030, ils ont construit le pont."], a: 0, ex: "Finished before a future moment." },
      { q: "“She'll have left” is:", o: ["Elle aura parti.", "Elle sera partie.", "Elle serait partie."], a: 1, ex: "partir takes être: elle sera partie." },
      { q: "“Il aura oublié” can mean:", o: ["He will forget.", "He must have forgotten.", "He would have forgotten."], a: 1, ex: "A guess about the past." },
      { q: "“As soon as you've read it…” is:", o: ["Dès que tu l'as lu…", "Dès que tu l'auras lu…", "Dès que tu le liras avant…"], a: 1, ex: "dès que + futur antérieur." }
    ]
  },
  {
    id: 76, level: "B2", icon: "rewind",
    title: "J'aurais dû: the past conditional", title_fr: "J'aurais dû : le conditionnel passé",
    subtitle: "Regrets, reproaches, missed chances, and news that hasn't been confirmed.", subtitle_fr: "Regrets, reproches, occasions manquées, et informations non confirmées.",
    body: `
<h2>Forming it</h2>
<p>The conditional of <s-fr>avoir</s-fr> or <s-fr>être</s-fr> + the past participle: <s-fr>j'aurais aimé</s-fr>, <s-fr>tu aurais pu</s-fr>, <s-fr>elle serait venue</s-fr>, <s-fr>nous nous serions trompés</s-fr>.</p>
<h2>Four verbs to know by heart</h2>
<table>
<tr><th>French</th><th>English</th></tr>
<tr><td><s-fr>j'aurais dû</s-fr> + infinitive</td><td>I should have…</td></tr>
<tr><td><s-fr>j'aurais pu</s-fr> + infinitive</td><td>I could have…</td></tr>
<tr><td><s-fr>j'aurais voulu</s-fr> / <s-fr>j'aurais aimé</s-fr></td><td>I would have liked…</td></tr>
<tr><td><s-fr>il aurait fallu</s-fr></td><td>it would have been necessary…</td></tr>
</table>
<h2>Regret and reproach</h2>
<p>Regret: <s-fr>J'aurais dû accepter ce poste.</s-fr> · <s-fr>J'aurais aimé faire des études de médecine.</s-fr> Reproach: <s-fr>Tu aurais pu me prévenir !</s-fr> · <s-fr>Vous auriez dû demander l'avis de l'équipe.</s-fr></p>
<h2>Unconfirmed past information</h2>
<p>The press uses it for facts that aren't confirmed yet: <s-fr>Le directeur aurait démissionné hier soir.</s-fr> (The director is said to have resigned.) · <s-fr>Selon plusieurs témoins, l'incendie aurait commencé dans la cuisine.</s-fr></p>
<div class="tip">"I should have done it" is <s-fr>j'aurais dû le faire</s-fr>: devoir goes into the past conditional, and the main verb stays in the infinitive. Don't translate word for word.</div>
`,
    examples: [
      ["J'aurais dû accepter cette offre.", "I should have accepted that offer."],
      ["Tu aurais pu me le dire avant !", "You could have told me before!"],
      ["J'aurais aimé travailler à l'étranger.", "I would have liked to work abroad."],
      ["Il aurait fallu réserver plus tôt.", "We should have booked earlier."],
      ["Sans toi, je n'aurais jamais fini à temps.", "Without you, I'd never have finished in time."],
      ["Vous auriez dû demander une augmentation.", "You should have asked for a pay rise."],
      ["Le directeur aurait démissionné hier soir.", "The director is said to have resigned last night."],
      ["Elle serait partie sans laisser d'adresse.", "She apparently left without leaving an address."]
    ],
    quiz: [
      { q: "“I should have said no” is:", o: ["Je devrais avoir dit non.", "J'aurais dû dire non.", "J'avais dû dire non."], a: 1, ex: "devoir in the past conditional + infinitive." },
      { q: "“You could have called me!” is:", o: ["Tu pourrais m'appeler !", "Tu aurais pu m'appeler !", "Tu avais pu m'appeler !"], a: 1, ex: "A reproach: tu aurais pu." },
      { q: "“She would have come” is:", o: ["Elle aurait venu.", "Elle serait venue.", "Elle sera venue."], a: 1, ex: "venir takes être: serait venue." },
      { q: "“Le ministre aurait démissionné” means:", o: ["The minister will resign.", "The minister has reportedly resigned.", "The minister should resign."], a: 1, ex: "Unconfirmed information." },
      { q: "“I would have liked to know” is:", o: ["J'aurais aimé savoir.", "J'aimerais avoir su.", "J'aurais aimé su."], a: 0, ex: "j'aurais aimé + infinitive." }
    ]
  },
  {
    id: 77, level: "B2", kind: "functional", icon: "handshake",
    title: "Everyday French: negotiating at work", title_fr: "Le français de tous les jours : négocier au travail",
    subtitle: "Ask for a rise or a change, argue your case, make concessions and close the deal.", subtitle_fr: "Demander une augmentation ou un changement, défendre ton dossier, faire des concessions et conclure.",
    body: `
<h2>Opening the subject</h2>
<p><s-fr>J'aimerais qu'on parle de…</s-fr> · <s-fr>Je souhaiterais aborder la question de mon salaire.</s-fr> · <s-fr>Je voulais profiter de cet entretien pour…</s-fr></p>
<h2>Making your case</h2>
<p><s-fr>Cette année, j'ai atteint tous mes objectifs.</s-fr> · <s-fr>Compte tenu de mes résultats, je pense pouvoir prétendre à…</s-fr> · <s-fr>Serait-il envisageable de… ?</s-fr> (Would it be possible to…?) · <s-fr>Je me demandais si…</s-fr></p>
<h2>Answering and conceding</h2>
<p><s-fr>Je comprends votre position, cependant…</s-fr> · <s-fr>Ce n'est pas tout à fait ce que j'espérais.</s-fr> · <s-fr>Je serais d'accord pour…, à condition que…</s-fr> · <s-fr>En contrepartie, je pourrais…</s-fr> · <s-fr>On pourrait peut-être trouver un compromis.</s-fr></p>
<h2>Closing</h2>
<p><s-fr>Si je résume, …</s-fr> · <s-fr>Nous sommes donc d'accord sur…</s-fr> · <s-fr>Pourriez-vous me le confirmer par écrit ?</s-fr></p>
<div class="tip">Many French companies hold <s-fr>l'entretien annuel</s-fr>, a yearly review with your manager: it's the usual moment to talk about salary, objectives and training. Training can also be paid for through your <s-fr>compte personnel de formation</s-fr> (<s-fr>CPF</s-fr>).</div>
`,
    examples: [
      ["Je souhaiterais aborder la question de mon salaire.", "I'd like to raise the question of my salary."],
      ["Compte tenu de mes résultats, je pense mériter une augmentation.", "Given my results, I think I deserve a rise."],
      ["Serait-il envisageable de travailler deux jours à distance ?", "Would it be possible to work remotely two days a week?"],
      ["Je comprends votre position, cependant je maintiens ma demande.", "I understand your position; however, I stand by my request."],
      ["En contrepartie, je pourrais encadrer les stagiaires.", "In return, I could supervise the interns."],
      ["On pourrait trouver un compromis.", "We could find a compromise."],
      ["Pourriez-vous me le confirmer par écrit ?", "Could you confirm it in writing?"]
    ],
    quiz: [
      { q: "“Would it be possible to…?” (formal):", o: ["Serait-il envisageable de… ?", "C'est possible de… ou pas ?", "Tu peux… ?"], a: 0, ex: "Serait-il envisageable de… ?" },
      { q: "“In return” is:", o: ["En retour de", "En contrepartie", "Au contraire"], a: 1, ex: "En contrepartie." },
      { q: "“Compte tenu de” means:", o: ["given, in view of", "to count on", "in spite of"], a: 0, ex: "Compte tenu de vos résultats = given your results." },
      { q: "A polite way to refuse an offer:", o: ["C'est nul.", "Ce n'est pas tout à fait ce que j'espérais.", "Non, jamais."], a: 1, ex: "Soften the refusal." },
      { q: "To close a negotiation:", o: ["Si je résume, nous sommes d'accord sur…", "Bref, on verra.", "Je m'en fiche."], a: 0, ex: "Summarise, then ask for confirmation." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    75: {
      gap: [["Quand tu ___ fini, appelle-moi. (avoir, futur antérieur)", "auras"], ["D'ici 2040, les robots ___ remplacé certains métiers. (avoir)", "auront"], ["Elle ___ partie avant ton arrivée. (être)", "sera"], ["Il ne répond pas ? Il ___ oublié son téléphone. (guess)", "aura"]],
      fix: [["Quand j'ai fini mon rapport, je te l'enverrai.", "Quand j'aurai fini mon rapport, je te l'enverrai.", "A future action finished before another: the futur antérieur."], ["Dès qu'ils auront arrivé, on commencera.", "Dès qu'ils seront arrivés, on commencera.", "arriver takes être: ils seront arrivés."]],
      task: ["Say what you will have done by the end of next year, and what you'll do once it's done.", "Dis ce que tu auras fait d'ici la fin de l'année prochaine, et ce que tu feras une fois que ce sera fait.", "D'ici la fin de l'année prochaine, j'aurai terminé ma formation et j'aurai passé le DELF B2. J'aurai aussi déménagé dans un appartement plus grand. Une fois que tout ça sera fait, je partirai trois semaines au Québec pour me reposer, et pour parler français tous les jours !"]
    },
    76: {
      gap: [["J'___ dû accepter ce poste. (should have)", "aurais"], ["Tu aurais ___ me prévenir ! (could have)", "pu"], ["Elle ___ venue si elle avait pu. (être)", "serait"], ["Selon la presse, le ministre ___ démissionné. (reportedly)", "aurait"]],
      fix: [["Je devrais avoir dit la vérité.", "J'aurais dû dire la vérité.", "I should have said: j'aurais dû + infinitive."], ["Ils auraient venu avec nous.", "Ils seraient venus avec nous.", "venir takes être: ils seraient venus."]],
      task: ["Write about three regrets (j'aurais dû, j'aurais aimé) and one reproach to someone (tu aurais pu).", "Écris trois regrets (j'aurais dû, j'aurais aimé) et un reproche à quelqu'un (tu aurais pu).", "J'aurais dû apprendre le français plus tôt, à l'école. J'aurais aimé vivre un an à l'étranger pendant mes études. Il aurait fallu que je garde le contact avec mes amis d'enfance. Et à mon frère : tu aurais pu me dire que tu partais au Canada !"]
    },
    77: {
      gap: [["Serait-il ___ de travailler à distance le vendredi ? (possible)", "envisageable"], ["En ___, je pourrais encadrer les stagiaires. (in return)", "contrepartie"], ["___ tenu de mes résultats, je demande une augmentation. (given)", "Compte"], ["Nous avons trouvé un ___. (compromise)", "compromis"]],
      fix: [["Je veux une augmentation, c'est tout.", "Je souhaiterais aborder la question de mon salaire.|J'aimerais qu'on parle de mon salaire.", "In a negotiation, open politely with the conditional."], ["Pouvez-vous me confirmer ça en écrit ?", "Pouvez-vous me le confirmer par écrit ?", "par écrit = in writing."]],
      task: ["Prepare three sentences for your annual review: your results, your request, and a concession you could make.", "Prépare trois phrases pour ton entretien annuel : tes résultats, ta demande, et une concession possible.", "Cette année, j'ai atteint tous mes objectifs et j'ai formé deux nouveaux collègues. Compte tenu de ces résultats, je souhaiterais une augmentation de cinq pour cent. Si ce n'est pas envisageable tout de suite, je serais d'accord pour une journée de télétravail supplémentaire, et nous pourrions en reparler dans six mois."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "entretienannuel", lesson: 77, level: "B2", icon: "briefcase-business", partner: "M. Vasseur", role: "your manager",
    title: "The annual review", title_fr: "L'entretien annuel",
    setting: "It's your annual review with M. Vasseur. You've had a good year and you want a pay rise, or at least something in return for your extra work.", setting_fr: "C'est ton entretien annuel avec M. Vasseur. Tu as eu une bonne année et tu veux une augmentation, ou au moins une contrepartie à ton travail supplémentaire.",
    turns: [
      { p: "Bon, l'année a été très positive pour vous. Est-ce qu'il y a un point que vous souhaitez aborder ?", fr: "Well, it's been a very positive year for you. Is there anything you'd like to raise?" },
      { y: ["Oui. Compte tenu de mes résultats, je souhaiterais aborder la question de mon salaire.", "Oui. Compte tenu mes résultats, je souhaiterais aborder la question de mon salaire.", "Oui. Compte tenu de mes résultats, je souhaiterai aborder la question de mon salaire."], fr: "Yes. Given my results, I'd like to raise the question of my salary.", why: "compte tenu de; the conditional (souhaiterais) for a polite request." },
      { p: "Je comprends. Malheureusement, le budget est très serré cette année. Je n'ai presque aucune marge de manœuvre.", fr: "I understand. Unfortunately, the budget is very tight this year. I have almost no room for manoeuvre." },
      { y: ["Dans ce cas, serait-il envisageable d'avoir une journée de télétravail supplémentaire ?", "Dans ce cas, serait-il envisageable que j'ai une journée de télétravail supplémentaire ?", "Dans ce cas, est-il envisageable avoir une journée de télétravail supplémentaire ?"], fr: "In that case, would it be possible to have an extra day working from home?", why: "Serait-il envisageable de + infinitive (or que + subjunctive: que j'aie)." },
      { p: "C'est possible, oui. Mais j'aurais besoin que vous restiez joignable toute la journée.", fr: "That's possible, yes. But I'd need you to remain reachable all day." },
      { y: ["Bien sûr. En contrepartie, je pourrais aussi encadrer les deux nouveaux stagiaires.", "Bien sûr. En contrepartie, je pourrai aussi encadrer les deux nouveaux stagiaires si.", "Bien sûr. En contre-partie de, je pourrais aussi encadrer les deux nouveaux stagiaires."], fr: "Of course. In return, I could also supervise the two new interns.", why: "En contrepartie, + the conditional for an offer." },
      { p: "Ça, ce serait vraiment utile. Et pour le salaire, on pourrait en reparler au printemps, quand on aura le nouveau budget.", fr: "That would be really useful. And as for salary, we could discuss it again in the spring, when we've got the new budget." },
      { y: ["D'accord. Dès que vous aurez le nouveau budget, nous pourrons donc en reparler ?", "D'accord. Dès que vous avez le nouveau budget, nous pourrons donc en reparler ?", "D'accord. Dès que vous aurez eu le nouveau budget, nous pouvons donc en reparler hier ?"], fr: "OK. So as soon as you have the new budget, we'll be able to discuss it again?", why: "dès que + futur (or futur antérieur) when the main verb is in the future." },
      { p: "C'est promis. Je note tout dans le compte rendu de l'entretien.", fr: "I promise. I'm putting everything in the report of the review." },
      { y: ["Merci. Si je résume : une journée de télétravail en plus, les stagiaires, et le salaire au printemps. Pourriez-vous me le confirmer par écrit ?", "Merci. Si je résume : une journée de télétravail en plus, les stagiaires, et le salaire au printemps. Pourriez-vous me confirmer le par écrit ?", "Merci. Si je résume : une journée de télétravail en plus, les stagiaires, et le salaire au printemps. Pourriez-vous me le confirmer en écrit ?"], fr: "Thank you. To sum up: one more day working from home, the interns, and the salary in the spring. Could you confirm it in writing?", why: "me le before the infinitive; par écrit." }
    ] }
  );

  W.READINGS.push({
    id: "metiersdemain", level: "B2", icon: "cpu", title: "Les métiers de demain : ce qui va changer", genre: "Article",
    intro: "Artificial intelligence is changing work. Will it replace people or transform their jobs? An article that weighs both views. The futur antérieur, the past conditional and the vocabulary of work.",
    intro_fr: "L'intelligence artificielle change le travail. Va-t-elle remplacer les gens ou transformer leurs métiers ? Un article qui présente les deux points de vue. Le futur antérieur, le conditionnel passé et le vocabulaire du travail.",
    paragraphs: [
      { en: "Depuis quelques années, l'intelligence artificielle s'invite dans tous les secteurs. Traduction, comptabilité, service client, aide au diagnostic médical : de nombreuses tâches qui semblaient réservées aux humains peuvent aujourd'hui être automatisées, au moins en partie. Faut-il s'en inquiéter ? Les avis sont partagés.", fr: "For a few years now, artificial intelligence has been finding its way into every sector. Translation, accounting, customer service, help with medical diagnosis: many tasks that seemed reserved for humans can now be automated, at least in part. Should we be worried? Opinions are divided." },
      { en: "Pour certains économistes, la machine ne remplacera pas les travailleurs, mais transformera leurs métiers. Une comptable, par exemple, passera moins de temps à saisir des chiffres et davantage à conseiller ses clients. D'autres sont plus inquiets : selon eux, si rien n'est fait, beaucoup d'emplois peu qualifiés auront disparu avant que les salariés aient eu le temps de se former.", fr: "For some economists, machines won't replace workers but will transform their jobs. An accountant, for example, will spend less time entering figures and more time advising clients. Others are more worried: in their view, if nothing is done, many low-skilled jobs will have disappeared before employees have had time to retrain." },
      { en: "Une chose semble sûre : les compétences transversales prendront de plus en plus de place. Savoir travailler en équipe, s'adapter, résoudre des problèmes nouveaux, communiquer clairement : ces qualités, difficiles à automatiser, seront recherchées. Les métiers du soin, de l'éducation et de l'artisanat, qui reposent sur le contact humain ou le savoir-faire manuel, devraient également mieux résister.", fr: "One thing seems certain: transferable skills will matter more and more. Working in a team, adapting, solving new problems, communicating clearly: these qualities, hard to automate, will be in demand. Jobs in care, education and crafts, which depend on human contact or manual skill, should also hold up better." },
      { en: "Pour beaucoup de salariés, la formation continue deviendra donc indispensable. Lucie, trente-huit ans, ancienne assistante de direction, en a fait l'expérience : j'aurais pu attendre que mon poste disparaisse, mais j'ai préféré me reconvertir avant. Après un an de formation, elle est devenue développeuse web. Si on m'avait dit ça il y a cinq ans, je n'y aurais pas cru !", fr: "For many employees, lifelong learning will therefore become essential. Lucie, thirty-eight, a former executive assistant, has experienced it: I could have waited for my job to disappear, but I preferred to retrain first. After a year of training, she became a web developer. If someone had told me that five years ago, I wouldn't have believed it!" },
      { en: "Au fond, la vraie question n'est peut-être pas de savoir quels métiers auront disparu dans vingt ans, mais comment nous aurons appris à travailler avec ces nouveaux outils, sans perdre ce qui fait la valeur du travail humain.", fr: "Ultimately, the real question may not be which jobs will have disappeared in twenty years, but how we will have learnt to work with these new tools, without losing what gives human work its value." }
    ],
    glossary: { "secteurs": "sectors", "comptabilité": "accounting", "diagnostic": "diagnosis", "automatisées": "automated", "partagés": "divided", "économistes": "economists", "comptable": "accountant", "saisir": "to enter (data)", "davantage": "more", "qualifiés": "skilled", "transversales": "transferable", "recherchées": "sought after", "soin": "care", "artisanat": "crafts", "reposent": "rest, depend", "résister": "to hold up, to resist", "ancienne": "former", "développeuse": "developer (f)", "cru": "believed", "fond": "bottom (au fond: ultimately)", "valeur": "value" },
    questions: [
      { q: "Selon certains économistes, que fera l'intelligence artificielle ?", o: ["Elle remplacera tous les travailleurs.", "Elle transformera les métiers plutôt que de remplacer les travailleurs.", "Elle n'aura aucun effet."], a: 1 },
      { q: "Que craignent d'autres spécialistes ?", o: ["Que les machines coûtent trop cher", "Que personne n'utilise l'IA", "Que des emplois disparaissent avant que les salariés aient pu se former"], a: 2 },
      { q: "Quelles qualités seront recherchées ?", o: ["Les compétences transversales, comme s'adapter et communiquer", "La rapidité de frappe", "La connaissance d'un seul logiciel"], a: 0 },
      { q: "Qu'a fait Lucie ?", o: ["Elle a attendu que son poste disparaisse.", "Elle s'est reconvertie dans le développement web.", "Elle est devenue économiste."], a: 1 },
      { q: "Selon l'article, quelle est peut-être la vraie question ?", o: ["Combien coûtera l'intelligence artificielle", "Quels métiers auront disparu", "Comment nous aurons appris à travailler avec ces outils"], a: 2 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-b2-1", unit: "b2-1", level: "B2", icon: "radio",
    title: "De la banque au pétrin", title_fr: "De la banque au pétrin",
    context: "A radio interview: Fabrice, a former bank adviser, tells Sonia how he became a baker.", context_fr: "Une interview à la radio : Fabrice, ancien conseiller bancaire, raconte à Sonia comment il est devenu boulanger.",
    words: [["le pétrin", "the kneading trough (être dans le pétrin: to be in a fix)"], ["du jour au lendemain", "overnight, suddenly"], ["le congé de formation", "training leave"], ["souffler", "to catch one's breath"], ["sauter le pas", "to take the plunge"]],
    lines: [["Sonia", "Fabrice, vous avez été conseiller bancaire pendant quinze ans. Aujourd'hui, vous êtes boulanger. Qu'est-ce qui s'est passé ?", "fr-FR"], ["Fabrice", "Rien de spectaculaire, en fait. Je n'étais pas malheureux, mais j'avais l'impression de passer mes journées devant un écran à vendre des produits auxquels je ne croyais plus. Un dimanche, en faisant du pain avec mes enfants, je me suis dit : et si c'était ça, mon vrai métier ?", "fr-FR"], ["Sonia", "Et vous avez tout quitté du jour au lendemain ?", "fr-FR"], ["Fabrice", "Non, surtout pas ! J'ai d'abord pris des cours le soir, pour voir si ça me plaisait vraiment. Ensuite, j'ai demandé un congé de formation, et j'ai passé mon CAP de boulanger en un an, en partie grâce à mon compte personnel de formation.", "fr-FR"], ["Sonia", "Le plus difficile, ça a été quoi ?", "fr-FR"], ["Fabrice", "Les horaires ! Je me lève à trois heures et demie du matin. Et puis, financièrement, la première année a été dure : je gagnais beaucoup moins qu'à la banque.", "fr-FR"], ["Sonia", "Vous avez des regrets ?", "fr-FR"], ["Fabrice", "Un seul : j'aurais dû le faire dix ans plus tôt ! Quand j'aurai remboursé le prêt de la boulangerie, dans trois ans, je pourrai enfin souffler un peu.", "fr-FR"], ["Sonia", "Un conseil pour ceux qui hésitent ?", "fr-FR"], ["Fabrice", "Testez avant de sauter le pas : faites un stage, parlez à des gens du métier. Une reconversion, ça se prépare.", "fr-FR"]],
    gist: ["De quoi parle Fabrice ?", ["De sa reconversion de conseiller bancaire à boulanger", "D'un problème à la banque", "De ses vacances"]],
    detail: [["Combien de temps a-t-il travaillé à la banque ?", ["Quinze ans", "Cinq ans", "Trente ans"]], ["Comment a-t-il financé en partie sa formation ?", ["Grâce à son compte personnel de formation", "Avec un prêt de ses parents", "Avec ses économies seulement"]], ["Qu'est-ce qui a été le plus difficile ?", ["Les horaires et la baisse de revenus", "Apprendre les recettes", "Trouver des clients"]], ["Quel est son seul regret ?", ["Ne pas l'avoir fait dix ans plus tôt", "Avoir quitté la banque", "Avoir acheté la boulangerie"]]],
    decode: ["j'aurais dû le faire dix ans plus tôt", "Quand j'aurai remboursé le prêt"],
    tip: "Listen for the tense of regret (j'aurais dû) and the futur antérieur (quand j'aurai remboursé): they tell you whether the speaker is looking back or looking ahead.", tip_fr: "Repère le temps du regret (j'aurais dû) et le futur antérieur (quand j'aurai remboursé) : ils te disent si la personne regarde en arrière ou en avant."
  }]);

  W.PROMPTS.push({ id: "fr-b2-1", level: "B2", q: "À ton avis, comment le travail aura-t-il changé dans vingt ans ? Est-ce une bonne ou une mauvaise nouvelle ?", fr: "In your opinion, how will work have changed in twenty years? Is it good or bad news?", time: 180,
    phrases: ["D'ici vingt ans, …", "Les machines auront…", "On aurait dû…", "Ce qui m'inquiète, c'est…", "En revanche, …"],
    model: "D'ici vingt ans, je pense que l'intelligence artificielle aura pris en charge la plupart des tâches répétitives. Pour beaucoup de gens, ce sera une bonne nouvelle : on passera moins de temps sur des tableaux et plus de temps avec les clients ou les patients. Ce qui m'inquiète, c'est la vitesse du changement. On aurait dû préparer les salariés plus tôt, avec de vraies formations. En revanche, je crois que les métiers qui demandent du contact humain résisteront mieux. Au fond, tout dépendra de la façon dont nous utiliserons ces outils." });

  W.WRITING_GUIDE["b2-1"] = { genre: "A formal request to the HR department (DELF B2)", genre_fr: "Une demande formelle au service des ressources humaines (DELF B2)",
    plan: [["Write a subject line and state your request clearly.", "Écris un objet et formule clairement ta demande."], ["Justify it with your experience and the benefit for the company.", "Justifie-la par ton expérience et l'intérêt pour l'entreprise."], ["Give practical details (duration, cost, funding) with the conditional.", "Donne les détails pratiques (durée, coût, financement) au conditionnel."], ["Anticipate an objection and answer it.", "Anticipe une objection et réponds-y."], ["Close formally.", "Termine de façon formelle."]],
    marks: [["Je me permets de vous écrire afin de solliciter", "a formal request", "une demande formelle"], ["Elle serait financée en partie", "the conditional for a proposal", "le conditionnel pour une proposition"], ["J'ai bien conscience que", "anticipating an objection", "anticiper une objection"], ["J'aurais aimé vous en parler", "the past conditional", "le conditionnel passé"], ["Dès que j'aurai obtenu votre accord", "the futur antérieur", "le futur antérieur"], ["Je vous prie d'agréer", "the formal closing", "la formule finale"]] };

  W.COURSE.push({ id: "b2-1", level: "B2", icon: "cpu", title: "The future of work", title_fr: "Le travail de demain",
    intro: "In this first B2 unit, you'll talk about how work is changing: the futur antérieur, the past conditional for regrets, reproaches and unconfirmed news, and the French you need to negotiate with your employer.",
    intro_fr: "Dans cette première unité du B2, tu vas parler de l'évolution du travail : le futur antérieur, le conditionnel passé pour les regrets, les reproches et les informations non confirmées, et le français qu'il faut pour négocier avec ton employeur.",
    can: ["Use the futur antérieur, especially after quand and dès que", "Express regret and reproach with the past conditional", "Understand unconfirmed information in the press", "Negotiate at work: argue, concede, conclude", "Write a formal request of 250 words"],
    can_fr: ["Utiliser le futur antérieur, notamment après quand et dès que", "Exprimer le regret et le reproche avec le conditionnel passé", "Comprendre une information non confirmée dans la presse", "Négocier au travail : argumenter, céder, conclure", "Écrire une demande formelle de 250 mots"],
    lessons: [75, 76, 77], vocab: ["avenirTravailFR", "negociationFR"], reading: "metiersdemain", prompt: "fr-b2-1",
    writing: { task: "You'd like your company to pay for a training course in project management. Write to the HR manager (250-280 words): present your request, justify it, give practical details, anticipate an objection, and close formally.", task_fr: "Tu voudrais que ton entreprise finance une formation en gestion de projet. Écris à la responsable des ressources humaines (250 à 280 mots) : présente ta demande, justifie-la, donne les détails pratiques, anticipe une objection, et termine de façon formelle.", words: "250-280",
      tips: ["Objet : …", "Je me permets de vous écrire afin de…", "Cette formation serait…", "J'ai bien conscience que…", "Dès que j'aurai obtenu…"],
      checklist: ["I stated my request in the first paragraph", "I used the conditional for proposals", "I answered a possible objection", "I used the futur antérieur and the past conditional", "I wrote between 250 and 280 words"],
      model: "Objet : Demande de formation en gestion de projet\n\nMadame Renaud,\n\nJe me permets de vous écrire afin de solliciter le financement d'une formation en gestion de projet, que je souhaiterais suivre à partir de janvier prochain.\n\nComme vous le savez, je travaille au service client depuis six ans. Au cours de cette période, j'ai participé à plusieurs projets importants, notamment la mise en place du nouveau logiciel de suivi des commandes l'an dernier. Cette expérience a confirmé mon intérêt pour la coordination de projets, un domaine dans lequel je pense pouvoir apporter davantage à l'entreprise.\n\nLa formation que j'ai choisie dure six mois, à raison d'une journée par semaine. Elle serait financée en partie par mon compte personnel de formation ; le reste, soit environ mille deux cents euros, pourrait être pris en charge par le plan de formation de l'entreprise. À la fin, j'obtiendrais une certification reconnue, utile pour les futurs projets du service.\n\nJ'ai bien conscience que mon absence le vendredi pourrait poser problème à l'équipe. C'est pourquoi j'ai déjà prévu, avec mon responsable, une nouvelle organisation : les dossiers urgents seront traités le jeudi, et une collègue a proposé de me remplacer en cas de besoin.\n\nJ'aurais aimé vous en parler lors de mon entretien annuel, mais les inscriptions ferment le 15 novembre. Dès que j'aurai obtenu votre accord, je pourrai finaliser mon inscription.\n\nJe reste à votre disposition pour en discuter et vous remercie par avance de l'attention que vous porterez à ma demande.\n\nJe vous prie d'agréer, Madame, l'expression de mes salutations distinguées.\n\nCamille Fournier" } });
})();
