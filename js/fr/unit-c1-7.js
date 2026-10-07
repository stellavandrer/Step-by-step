/* Cours de français, unité C1-7 « The business world / Le monde de l'entreprise » : les verbes idiomatiques avec
   en et y (en vouloir à, s'en sortir, s'y prendre, s'y faire), l'accord du participe passé dans les cas difficiles
   (en, il a fallu, fait + infinitif, verbes pronominaux), les courriels délicats au travail. Personnages et
   entreprises fictifs (sauf LDLC), prénoms français. Faits vérifiables seulement : essais islandais de 2015 à 2019
   (environ 2 500 agents publics) ; expérience britannique de 2022 (une soixantaine d'entreprises, six mois, la grande
   majorité a prolongé) ; LDLC à 32 heures sur quatre jours depuis 2021 ; droit à la déconnexion en vigueur depuis
   2017 (négociation obligatoire dans les entreprises d'au moins cinquante salariés, ou charte à défaut d'accord). */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "entrepriseFR", icon: "briefcase", title: "Companies", title_fr: "L'entreprise", level: "C1", words: [
    ["l'entrepreneur / l'entrepreneuse", "the entrepreneur (m) / (f)", "Cette entrepreneuse a créé trois sociétés."],
    ["la jeune pousse", "the start-up (official French term)", "Cette jeune pousse a levé deux millions d'euros."],
    ["l'investisseur / l'investisseuse", "the investor (m) / (f)", "Les investisseurs attendent des résultats rapides."],
    ["la rentabilité", "profitability", "La rentabilité du projet reste à démontrer."],
    ["le bénéfice", "the profit", "L'entreprise a réalisé un bénéfice record."],
    ["le PDG / la PDG", "the CEO (m) / (f)", "La PDG a annoncé un plan d'investissement."],
    ["le conseil d'administration", "the board of directors", "Le conseil d'administration se réunit demain."],
    ["l'actionnaire", "the shareholder", "Les actionnaires ont approuvé la fusion."],
    ["la stratégie", "the strategy", "Il faut revoir notre stratégie commerciale."],
    ["la fusion", "the merger", "La fusion des deux groupes a créé un géant du secteur."],
    ["le rachat", "the buyout, the takeover", "Le rachat de la société a été finalisé en juin."],
    ["délocaliser", "to relocate (production abroad)", "L'usine a été délocalisée en 2010."],
    ["la délocalisation", "offshoring", "La délocalisation a supprimé des centaines d'emplois."],
    ["le fournisseur", "the supplier", "Nous avons changé de fournisseur."],
    ["le devis", "the quote, the estimate", "Le devis est valable un mois."],
    ["la productivité", "productivity", "La productivité a augmenté de 5 %."],
    ["la responsabilité sociale", "corporate social responsibility", "La responsabilité sociale de l'entreprise est au cœur du projet."],
    ["la levée de fonds", "fundraising", "La levée de fonds a duré six mois."]
  ] },
  { id: "equipeFR", icon: "users", title: "Working together", title_fr: "Travailler ensemble", level: "C1", words: [
    ["la hiérarchie", "the hierarchy, management", "Il faut en parler à la hiérarchie."],
    ["le salarié / la salariée", "the employee (m) / (f)", "Les salariés ont été consultés."],
    ["le syndicat", "the trade union", "Le syndicat a demandé une réunion."],
    ["le dialogue social", "dialogue between employers and unions", "Le dialogue social est bloqué."],
    ["le bien-être au travail", "well-being at work", "Le bien-être au travail est devenu une priorité."],
    ["l'ambiance", "the atmosphere", "L'ambiance dans l'équipe est excellente."],
    ["le client / la cliente", "the customer, the client (m) / (f)", "La cliente a demandé un nouveau devis."],
    ["la réunion", "the meeting", "La réunion a été reportée."],
    ["le management", "management (style)", "Son management repose sur la confiance."],
    ["le droit à la déconnexion", "the right to disconnect", "Le droit à la déconnexion protège les soirées des salariés."],
    ["la semaine de quatre jours", "the four-day week", "L'entreprise teste la semaine de quatre jours."],
    ["le collaborateur / la collaboratrice", "the colleague, the team member (m) / (f)", "Je vous présente ma nouvelle collaboratrice."],
    ["la polyvalence", "versatility", "Ce poste demande une grande polyvalence."],
    ["la charge de travail", "the workload", "Sa charge de travail est trop lourde."],
    ["relancer", "to follow up, to chase", "J'ai relancé le fournisseur deux fois."],
    ["la relance", "the reminder, the follow-up", "Après deux relances, il a enfin répondu."],
    ["recadrer", "to set boundaries, to call to order", "La directrice a dû recadrer la discussion."],
    ["l'échéance", "the deadline, the due date", "L'échéance approche : il faut accélérer."]
  ] });

  W.LESSONS.push(
  {
    id: 123, level: "C1", icon: "coffee",
    title: "En vouloir à, s'en sortir, s'y prendre: idiomatic verbs with en and y", title_fr: "En vouloir à, s'en sortir, s'y prendre : les verbes idiomatiques avec en et y",
    subtitle: "Small words, big meanings: verbs to learn as a whole, like English phrasal verbs.", subtitle_fr: "Des petits mots aux grands sens : des verbes à apprendre en bloc, comme les verbes à particule anglais.",
    body: `
<h2>With en</h2>
<p><s-fr>s'en aller</s-fr> (to leave) · <s-fr>s'en sortir</s-fr> (to cope, to get through) · <s-fr>s'en tirer</s-fr> (to manage, to get off) · <s-fr>en vouloir à quelqu'un</s-fr> (to hold it against someone) · <s-fr>s'en prendre à</s-fr> (to lash out at) · <s-fr>en avoir assez</s-fr> (to be fed up) · <s-fr>en venir à</s-fr> (to come to, to end up) · <s-fr>en finir avec</s-fr> (to be done with) · <s-fr>s'en faire</s-fr> (to worry): <s-fr>Ne t'en fais pas.</s-fr> · <s-fr>ne pas en revenir</s-fr> (to be amazed) · <s-fr>en rester là</s-fr> (to leave it at that)</p>
<h2>With y</h2>
<p><s-fr>s'y prendre</s-fr> (to go about it) · <s-fr>s'y faire</s-fr> (to get used to it) · <s-fr>s'y connaître</s-fr> (to know a lot about it) · <s-fr>y tenir</s-fr> (to really want it, to be attached to it) · <s-fr>y être pour quelque chose</s-fr> (to have something to do with it) · <s-fr>ça y est</s-fr> (that's it, done)</p>
<h2>Word order</h2>
<p>The pronouns stay together before the verb, in this order: <s-fr>me / te / se</s-fr>, then <s-fr>y</s-fr>, then <s-fr>en</s-fr>: <s-fr>Je m'en vais.</s-fr> · <s-fr>Il m'en veut.</s-fr> · <s-fr>Elle s'y est faite.</s-fr> · In the negative: <s-fr>Je ne m'en souviens pas.</s-fr></p>
<div class="tip">In these verbs, en and y have lost their usual meaning (of it, there): learn each one as a block, with an example. A good test: if you can't replace en or y with a noun, it's an idiomatic verb.</div>
`,
    examples: [
      ["Ne t'en fais pas, tout va bien se passer.", "Don't worry, everything will be fine."],
      ["Il a eu une année difficile, mais il s'en est sorti.", "He had a difficult year, but he got through it."],
      ["Elle m'en veut encore de ne pas l'avoir prévenue.", "She still holds it against me for not warning her."],
      ["Je ne sais pas comment m'y prendre.", "I don't know how to go about it."],
      ["Le nouveau logiciel est compliqué, mais on s'y fait.", "The new software is complicated, but you get used to it."],
      ["J'en ai assez de ces réunions interminables.", "I'm fed up with these endless meetings."],
      ["Il s'y connaît en informatique.", "He knows a lot about computers."],
      ["Je n'en reviens pas : il a accepté !", "I can't believe it: he said yes!"]
    ],
    quiz: [
      { q: "“Don't worry” is:", o: ["Ne t'en fais pas.", "Ne te fais pas.", "Ne t'y fais pas."], a: 0, ex: "s'en faire = to worry." },
      { q: "“She holds it against him” is:", o: ["Elle lui en veut.", "Elle le veut.", "Elle en lui veut."], a: 0, ex: "en vouloir à quelqu'un: lui en veut." },
      { q: "“I'll get used to it” is:", o: ["Je m'y ferai.", "Je m'en ferai.", "Je me ferai."], a: 0, ex: "s'y faire = to get used to it." },
      { q: "“He managed / got through it” is:", o: ["Il s'en est sorti.", "Il s'y est sorti.", "Il est sorti en."], a: 0, ex: "s'en sortir." },
      { q: "Je n'en reviens pas means:", o: ["I can't believe it.", "I'm not coming back.", "I don't remember."], a: 0, ex: "ne pas en revenir = to be amazed." }
    ]
  },
  {
    id: 124, level: "C1", icon: "pen-line",
    title: "Les efforts qu'il a fallu: past participle agreement, the hard cases", title_fr: "Les efforts qu'il a fallu : l'accord du participe passé, les cas difficiles",
    subtitle: "En, impersonal verbs, fait + infinitive, pronominal verbs: when the participle agrees, and when it doesn't.", subtitle_fr: "En, verbes impersonnels, fait + infinitif, verbes pronominaux : quand le participe s'accorde, et quand il ne s'accorde pas.",
    body: `
<h2>The basic rule</h2>
<p>With <s-fr>être</s-fr>, the participle agrees with the subject. With <s-fr>avoir</s-fr>, it agrees with a direct object placed before it: <s-fr>la lettre que j'ai écrite</s-fr> · <s-fr>Ces collègues, je les ai vus hier.</s-fr></p>
<h2>No agreement</h2>
<p>With <s-fr>en</s-fr>: <s-fr>Des dossiers ? J'en ai traité dix.</s-fr> · With impersonal verbs: <s-fr>les efforts qu'il a fallu</s-fr>, <s-fr>les orages qu'il y a eu</s-fr> · <s-fr>fait</s-fr> + infinitive: <s-fr>la maison qu'il a fait construire</s-fr> · <s-fr>laissé</s-fr> + infinitive (since the 1990 spelling reform): <s-fr>les stagiaires qu'il a laissé partir</s-fr> · <s-fr>coûté</s-fr>, <s-fr>valu</s-fr>, <s-fr>duré</s-fr> for a measure: <s-fr>les trois cents euros que ce stage m'a coûté</s-fr></p>
<h2>Pronominal verbs</h2>
<p>They agree with the direct object if it comes before: <s-fr>Elles se sont lavées.</s-fr> / <s-fr>Elles se sont lavé les mains</s-fr> (the object comes after). No agreement when <s-fr>se</s-fr> is indirect: <s-fr>Ils se sont parlé</s-fr>, <s-fr>se sont téléphoné</s-fr>, <s-fr>se sont souri</s-fr>, <s-fr>se sont succédé</s-fr>.</p>
<h2>Seen or heard + infinitive</h2>
<p>Agreement if the object does the action: <s-fr>la chanteuse que j'ai entendue chanter</s-fr> (she sings) / <s-fr>la chanson que j'ai entendu chanter</s-fr> (the song doesn't sing).</p>
<div class="tip">You rarely hear these agreements, except with participles ending in a consonant: <s-fr>prise</s-fr>, <s-fr>faite</s-fr>, <s-fr>écrite</s-fr>, <s-fr>mise</s-fr>. In writing, at C1, they are exactly what a reader notices.</div>
`,
    examples: [
      ["La présentation que nous avons préparée a convaincu le client.", "The presentation we prepared convinced the client."],
      ["Des dossiers ? J'en ai traité dix ce matin.", "Files? I've dealt with ten this morning."],
      ["Les efforts qu'il a fallu étaient énormes.", "The effort it took was enormous."],
      ["La maison qu'il a fait construire est magnifique.", "The house he had built is magnificent."],
      ["Elles se sont lavé les mains avant de commencer.", "They washed their hands before starting."],
      ["Ils se sont téléphoné tous les jours.", "They phoned each other every day."],
      ["Les directeurs se sont succédé à la tête du service.", "Directors followed one another at the head of the department."],
      ["La chanteuse que j'ai entendue chanter était remarquable.", "The singer I heard singing was remarkable."]
    ],
    quiz: [
      { q: "“The letters I wrote” is:", o: ["les lettres que j'ai écrites", "les lettres que j'ai écrit", "les lettres que j'ai écrits"], a: 0, ex: "Direct object before avoir: agreement (f pl)." },
      { q: "“Apples? I've eaten three” is:", o: ["Des pommes ? J'en ai mangé trois.", "Des pommes ? J'en ai mangées trois.", "Des pommes ? J'en ai mangés trois."], a: 0, ex: "With en, no agreement." },
      { q: "“The storms there were” is:", o: ["les orages qu'il y a eu", "les orages qu'il y a eus", "les orages qu'il y a eue"], a: 0, ex: "Impersonal verb: no agreement." },
      { q: "“They spoke to each other” is:", o: ["Ils se sont parlé.", "Ils se sont parlés.", "Ils ont parlé se."], a: 0, ex: "parler à: se is indirect, no agreement." },
      { q: "“The dress she had made” is:", o: ["la robe qu'elle a fait faire", "la robe qu'elle a faite faire", "la robe qu'elle a faits faire"], a: 0, ex: "fait + infinitive never agrees." }
    ]
  },
  {
    id: 125, level: "C1", kind: "functional", icon: "mail",
    title: "Everyday French: delicate emails at work", title_fr: "Le français de tous les jours : les courriels délicats au travail",
    subtitle: "Follow up, refuse politely, set boundaries and negotiate a deadline, firmly and courteously.", subtitle_fr: "Relancer, refuser poliment, recadrer et négocier un délai, avec fermeté et courtoisie.",
    body: `
<h2>Following up</h2>
<p><s-fr>Je me permets de revenir vers vous au sujet de…</s-fr> · <s-fr>Sauf erreur de ma part, je n'ai pas encore reçu…</s-fr> (unless I'm mistaken) · <s-fr>Pourriez-vous me tenir au courant ?</s-fr></p>
<h2>Refusing politely</h2>
<p><s-fr>Malheureusement, je ne serai pas en mesure de…</s-fr> · <s-fr>À mon grand regret, …</s-fr> · <s-fr>Je dois décliner votre proposition.</s-fr> · <s-fr>En revanche, je pourrais…</s-fr> (offer an alternative)</p>
<h2>Setting boundaries</h2>
<p><s-fr>Je tiens à rappeler que…</s-fr> · <s-fr>Il me semble important de clarifier un point.</s-fr> · <s-fr>Afin d'éviter tout malentendu, …</s-fr> · <s-fr>Je vous saurais gré de respecter les délais convenus.</s-fr></p>
<h2>Negotiating a deadline</h2>
<p><s-fr>Serait-il envisageable de décaler la livraison ?</s-fr> · <s-fr>Pourrions-nous convenir d'un nouveau délai ?</s-fr></p>
<h2>Announcing bad news</h2>
<p><s-fr>J'ai le regret de vous informer que…</s-fr> · <s-fr>Nous mettons tout en œuvre pour…</s-fr> (we are doing everything we can to)</p>
<div class="tip">The essential first, facts rather than feelings, and always a way forward: a date, an alternative, a question. Close with <s-fr>Cordialement</s-fr> or <s-fr>Bien à vous</s-fr>; keep <s-fr>Je vous prie d'agréer…</s-fr> for formal letters.</div>
`,
    examples: [
      ["Je me permets de revenir vers vous au sujet de notre commande du 3 mars.", "I'm getting back to you about our order of 3 March."],
      ["Sauf erreur de ma part, je n'ai pas encore reçu le devis.", "Unless I'm mistaken, I haven't received the quote yet."],
      ["Malheureusement, je ne serai pas en mesure de participer à la réunion.", "Unfortunately, I won't be able to attend the meeting."],
      ["Afin d'éviter tout malentendu, je préfère clarifier un point.", "To avoid any misunderstanding, I'd rather clarify one point."],
      ["Serait-il envisageable de décaler la livraison d'une semaine ?", "Would it be possible to postpone the delivery by a week?"],
      ["J'ai le regret de vous informer que le projet est suspendu.", "I regret to inform you that the project has been suspended."],
      ["Nous mettons tout en œuvre pour livrer avant la fin du mois.", "We are doing everything we can to deliver before the end of the month."]
    ],
    quiz: [
      { q: "“Unless I'm mistaken” is:", o: ["Sauf erreur de ma part", "Sauf mon erreur", "Si je ne suis pas erreur"], a: 0, ex: "sauf erreur de ma part." },
      { q: "“I won't be able to” (polite, formal) is:", o: ["je ne serai pas en mesure de", "je ne serai pas en mesure à", "je ne pourrai pas mesure de"], a: 0, ex: "être en mesure de." },
      { q: "“Would it be possible to postpone…?” is:", o: ["Serait-il envisageable de décaler… ?", "Serait-il envisageable que décaler… ?", "Est-il envisageable décaler… ?"], a: 0, ex: "envisageable de + infinitive." },
      { q: "A good follow-up email:", o: ["states the facts and proposes a way forward", "expresses anger", "repeats the request in capitals"], a: 0, ex: "Facts, courtesy and a next step." },
      { q: "“We are doing everything we can” is:", o: ["Nous mettons tout en œuvre", "Nous mettons tout en travail", "Nous faisons tout en œuvre"], a: 0, ex: "mettre tout en œuvre." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    123: {
      gap: [["Ne t'en ___ pas, tout va bien se passer. (faire, imperative)", "fais"], ["Je ne sais pas comment m'y ___. (prendre)", "prendre"], ["Elle lui en ___ encore de ce mensonge. (vouloir, present)", "veut"], ["L'année a été difficile, mais il s'en est ___. (sortir)", "sorti"]],
      fix: [["Je m'en vais pas.", "Je ne m'en vais pas.", "ne goes before the pronouns: je ne m'en vais pas."], ["Il en veut de moi.", "Il m'en veut.", "en vouloir à quelqu'un: the person becomes an indirect pronoun (m'en veut)."]],
      task: ["Tell a colleague about a difficult week, with en avoir assez, s'y prendre, s'en sortir and ne pas en revenir.", "Raconte à un collègue une semaine difficile, avec en avoir assez, s'y prendre, s'en sortir et ne pas en revenir.", "Quelle semaine ! J'en avais assez de recevoir des courriels urgents toute la journée, et je ne savais plus comment m'y prendre pour tout finir à temps. Finalement, l'équipe a repris une partie de mes dossiers, et on s'en est sortis. Je n'en reviens toujours pas : on a tout rendu vendredi soir !"]
    },
    124: {
      gap: [["Les lettres que j'ai ___ sont parties ce matin. (écrire)", "écrites"], ["Des dossiers ? J'en ai ___ dix. (traiter)", "traité"], ["Les efforts qu'il a ___ étaient énormes. (falloir)", "fallu"], ["Ils se sont ___ pendant des heures. (parler)", "parlé"]],
      fix: [["La maison qu'il a faite construire est magnifique.", "La maison qu'il a fait construire est magnifique.", "fait + infinitive never agrees."], ["Elles se sont lavées les mains.", "Elles se sont lavé les mains.", "The direct object (les mains) comes after: no agreement."]],
      task: ["Write four sentences about a successful project at work, with an agreement with a direct object placed before, en, il a fallu and a reciprocal verb.", "Écris quatre phrases sur un projet réussi au travail, avec un accord avec un COD placé avant, en, il a fallu et un verbe réciproque.", "La présentation que nous avons préparée a convaincu le client. Des réunions, nous en avons organisé une dizaine. Les heures qu'il a fallu pour tout finir, personne ne les a comptées. Et les deux équipes, qui ne se parlaient plus, se sont enfin téléphoné pour fêter ça !"]
    },
    125: {
      gap: [["Je me permets de ___ vers vous au sujet du devis. (come back)", "revenir"], ["Sauf ___ de ma part, je n'ai pas reçu votre réponse. (error)", "erreur"], ["Malheureusement, je ne serai pas en ___ de vous aider. (in a position)", "mesure"], ["Serait-il ___ de décaler la livraison ? (possible)", "envisageable"]],
      fix: [["Je me permets de revenir à vous au sujet du devis.", "Je me permets de revenir vers vous au sujet du devis.", "revenir vers quelqu'un, in professional emails."], ["Sauf erreur de ma part, le paiement n'est pas arrivé. Payez immédiatement !", "Sauf erreur de ma part, le paiement n'est pas arrivé. Pourriez-vous vérifier de votre côté ?", "Stay courteous: a question rather than an order."]],
      task: ["A supplier is two weeks late. Write a short follow-up email, firm but courteous.", "Un fournisseur a deux semaines de retard. Écris un court courriel de relance, ferme mais courtois.", "Bonjour Monsieur Morel, je me permets de revenir vers vous au sujet de notre commande du 3 mars. Sauf erreur de ma part, la livraison prévue le 15 n'a pas encore eu lieu. Ce retard nous met en difficulté vis-à-vis de nos propres clients. Pourriez-vous me confirmer une date de livraison d'ici vendredi ? Je vous remercie par avance. Cordialement."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "fournisseur", lesson: 125, level: "C1", icon: "mail", partner: "Damien", role: "a sales representative at your supplier",
    title: "A late delivery", title_fr: "Une livraison en retard",
    setting: "Your company ordered brochures from a printer for a trade fair. The delivery is late. You call Damien, your contact there.", setting_fr: "Ton entreprise a commandé des brochures à un imprimeur pour un salon professionnel. La livraison a du retard. Tu appelles Damien, ton interlocuteur.",
    turns: [
      { p: "Damien, de l'imprimerie du Parc, bonjour !", fr: "Damien, from the Parc printing works, hello!" },
      { y: ["Bonjour Damien. Je vous appelle au sujet de notre commande : sauf erreur de ma part, elle n'est toujours pas arrivée.", "Bonjour Damien. Je vous appelle au sujet de notre commande : sauf erreur de moi, elle n'est toujours pas arrivée.", "Bonjour Damien. Je vous appelle au sujet de notre commande : sauf erreur de ma part, elle n'est pas toujours arrivée."], fr: "Hello Damien. I'm calling about our order: unless I'm mistaken, it still hasn't arrived.", why: "sauf erreur de ma part; toujours pas = still not (pas toujours = not always)." },
      { p: "Ah, je suis désolé, nous avons eu une panne sur une machine.", fr: "Ah, I'm sorry, one of our machines broke down." },
      { y: ["Je comprends, mais ce retard nous met en difficulté. Pourriez-vous me donner une date précise ?", "Je comprends, mais ce retard nous met en difficulté. Pourriez-vous de me donner une date précise ?", "Je comprends, mais ce retard nous met en difficulté. Pourriez-vous me donner un date précise ?"], fr: "I understand, but this delay puts us in a difficult position. Could you give me a precise date?", why: "pouvoir + infinitive, without de; une date." },
      { p: "Je dirais d'ici dix jours, au plus tard.", fr: "I'd say within ten days, at the latest." },
      { y: ["Dix jours, c'est trop long pour nous. Serait-il envisageable de livrer une partie de la commande dès cette semaine ?", "Dix jours, c'est trop long pour nous. Serait-il envisageable que livrer une partie de la commande dès cette semaine ?", "Dix jours, c'est trop long pour nous. Serait-il envisageable de livrons une partie de la commande dès cette semaine ?"], fr: "Ten days is too long for us. Would it be possible to deliver part of the order this week?", why: "envisageable de + infinitive." },
      { p: "Je vais voir ce que je peux faire. Je peux vous proposer la moitié jeudi.", fr: "I'll see what I can do. I can offer you half on Thursday." },
      { y: ["Parfait. Je vous saurais gré de me le confirmer par écrit, afin d'éviter tout malentendu.", "Parfait. Je vous serais gré de me le confirmer par écrit, afin d'éviter tout malentendu.", "Parfait. Je vous saurais gré de me le confirmer par écrit, afin d'éviter tous malentendus."], fr: "Perfect. I'd be grateful if you could confirm it in writing, to avoid any misunderstanding.", why: "savoir gré: je vous saurais gré; tout malentendu (singular)." },
      { p: "Bien sûr, je vous envoie un courriel dans l'heure.", fr: "Of course, I'll send you an email within the hour." },
      { y: ["Merci. Pour la suite, je tiens à rappeler que les délais font partie de notre contrat.", "Merci. Pour la suite, je tiens de rappeler que les délais font partie de notre contrat.", "Merci. Pour la suite, je tiens à rappeler de les délais font partie de notre contrat."], fr: "Thank you. For the future, I'd like to point out that deadlines are part of our contract.", why: "tenir à + infinitive; rappeler que + clause." }
    ] }
  );

  W.READINGS.push({
    id: "quatrejours", level: "C1", icon: "briefcase", title: "La semaine de quatre jours : utopie ou avenir ?", genre: "Article",
    intro: "Working four days instead of five: trials abroad, a French pioneer, and the questions every company has to ask. Idiomatic verbs with en and y, past participle agreement.",
    intro_fr: "Travailler quatre jours au lieu de cinq : des expériences à l'étranger, un pionnier français, et les questions que toute entreprise doit se poser. Les verbes avec en et y, l'accord du participe passé.",
    paragraphs: [
      { en: "Travailler quatre jours au lieu de cinq, sans perte de salaire : l'idée, longtemps jugée utopique, s'invite aujourd'hui dans les entreprises. Encore faut-il s'entendre sur les mots. Dans certains cas, le nombre d'heures est réduit ; dans d'autres, les heures sont simplement réparties sur quatre journées plus longues. Rappelons qu'en France, la durée légale du travail est de trente-cinq heures par semaine depuis le début des années 2000.", fr: "Working four days instead of five, with no loss of pay: the idea, long considered utopian, is now making its way into companies. Still, we need to agree on what the words mean. In some cases, the number of hours is reduced; in others, the hours are simply spread over four longer days. Remember that in France, the legal working week has been thirty-five hours since the early 2000s." },
      { en: "Les expériences menées à l'étranger ont beaucoup fait parler d'elles. En Islande, des essais conduits entre 2015 et 2019 ont concerné quelque 2 500 agents du secteur public. Au Royaume-Uni, une soixantaine d'entreprises ont tenté l'aventure pendant six mois en 2022 ; à l'issue de l'expérience, la grande majorité d'entre elles ont choisi de la prolonger.", fr: "The trials carried out abroad have attracted a lot of attention. In Iceland, trials run between 2015 and 2019 involved some 2,500 public-sector workers. In the United Kingdom, around sixty companies tried it for six months in 2022; at the end of the trial, the vast majority of them chose to continue." },
      { en: "En France, l'entreprise lyonnaise LDLC est souvent citée en exemple : elle est passée à la semaine de quatre jours en 2021, pour une durée de trente-deux heures. Les dirigeants qui s'y sont essayés en vantent les effets : des salariés moins fatigués, des absences en baisse, une productivité maintenue.", fr: "In France, the Lyon-based company LDLC is often held up as an example: it switched to a four-day week in 2021, for thirty-two hours. The managers who have tried it praise its effects: less tired employees, fewer absences, productivity maintained." },
      { en: "Tout le monde ne s'y retrouve pas pour autant. Dans les métiers où il faut assurer une présence continue, comme à l'hôpital ou dans le commerce, la réorganisation est un vrai casse-tête. Et lorsque les heures sont seulement comprimées, certains salariés en sortent plus épuisés qu'avant. Sans compter que les clients, eux, attendent souvent une réponse cinq jours sur sept.", fr: "Not everyone benefits, though. In jobs that need a continuous presence, as in hospitals or retail, reorganising is a real headache. And when the hours are merely compressed, some employees come out of it more exhausted than before. Not to mention that customers often expect an answer five days a week." },
      { en: "Les questions qu'il a fallu se poser sont, au fond, toujours les mêmes : que mesure-t-on vraiment quand on mesure le travail ? Le temps passé, ou ce qui a été accompli ? Les entreprises qui s'en sortent le mieux sont celles qui ont pris le temps d'y répondre avec leurs équipes.", fr: "The questions that had to be asked are, basically, always the same: what are we really measuring when we measure work? Time spent, or what has been achieved? The companies that do best are those that took the time to answer them with their teams." }
    ],
    glossary: { "utopique": "utopian", "réparties": "spread", "essais": "trials", "agents": "public employees", "prolonger": "to extend, to continue", "lyonnaise": "from Lyon", "vantent": "praise", "maintenue": "maintained", "retrouve": "s'y retrouver: to benefit, to find one's way", "continue": "continuous", "casse": "casse-tête: headache, puzzle", "comprimées": "compressed", "épuisés": "exhausted", "accompli": "achieved, accomplished" },
    questions: [
      { q: "Quelles sont les deux formes de la semaine de quatre jours ?", o: ["Des heures réduites, ou les mêmes heures réparties sur quatre jours", "Quatre jours de vacances, ou quatre jours de télétravail", "Quatre semaines de congé, ou quatre heures par jour"], a: 0 },
      { q: "Combien d'agents les essais islandais ont-ils concernés ?", o: ["Environ 2 500", "Environ 60", "Environ 32"], a: 0 },
      { q: "Qu'ont fait la plupart des entreprises britanniques après l'expérience de 2022 ?", o: ["Elles l'ont prolongée.", "Elles l'ont abandonnée.", "Elles ont fermé."], a: 0 },
      { q: "Pourquoi la réorganisation est-elle difficile à l'hôpital ou dans le commerce ?", o: ["Il faut y assurer une présence continue.", "Les salariés refusent de travailler.", "Les clients sont contre."], a: 0 },
      { q: "Selon l'auteur, quelles entreprises s'en sortent le mieux ?", o: ["Celles qui ont pris le temps de se poser les bonnes questions avec leurs équipes", "Celles qui imposent la réforme", "Celles qui ne changent rien"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-c1-7", unit: "c1-7", level: "C1", icon: "mail",
    title: "Le droit à la déconnexion", title_fr: "Le droit à la déconnexion",
    context: "On the radio, Clémence talks to Yannick, an HR director, about the right to disconnect.", context_fr: "À la radio, Clémence interroge Yannick, directeur des ressources humaines, sur le droit à la déconnexion.",
    words: [["les modalités", "the terms, the arrangements"], ["la charte", "the charter"], ["jouer le jeu", "to play along"], ["l'envoi différé", "scheduled sending"], ["le lendemain", "the next day"]],
    lines: [["Clémence", "Des courriels à vingt-deux heures, des messages le dimanche… Depuis 2017, la loi française prévoit pourtant un droit à la déconnexion. Yannick, vous êtes directeur des ressources humaines. De quoi s'agit-il ?", "fr-FR"], ["Yannick", "La loi oblige les entreprises d'au moins cinquante salariés à négocier les modalités de ce droit, ou, à défaut d'accord, à adopter une charte. Elle ne fixe pas d'horaire précis : c'est à chaque entreprise de s'en charger.", "fr-FR"], ["Clémence", "Et concrètement, chez vous ?", "fr-FR"], ["Yannick", "Nous nous y sommes pris en deux temps. D'abord, nous avons écouté les équipes : beaucoup en avaient assez de se sentir obligés de répondre le soir. Ensuite, nous avons fixé une règle simple : pas de courriel entre vingt heures et sept heures, sauf urgence.", "fr-FR"], ["Clémence", "Et les managers ont joué le jeu ?", "fr-FR"], ["Yannick", "Pas tous, au début. Certains continuaient d'envoyer des messages tard, en précisant qu'on pouvait y répondre le lendemain. Or, recevoir un message, c'est déjà y penser. Nous avons donc installé un envoi différé : les courriels écrits le soir ne partent que le matin.", "fr-FR"], ["Clémence", "Et le bilan ?", "fr-FR"], ["Yannick", "Les salariés que nous avons interrogés se disent moins fatigués. Il a fallu du temps, mais je n'en reviens pas de la différence.", "fr-FR"]],
    gist: ["De quoi parle l'émission ?", ["Du droit à la déconnexion au travail", "De la semaine de quatre jours", "Des salaires des managers"]],
    detail: [["Que prévoit la loi pour les entreprises d'au moins cinquante salariés ?", ["Négocier les modalités du droit à la déconnexion, ou adopter une charte", "Interdire les courriels le soir", "Fermer le dimanche"]], ["Quelle règle l'entreprise de Yannick a-t-elle fixée ?", ["Pas de courriel entre vingt heures et sept heures, sauf urgence", "Pas de courriel le lundi", "Un seul courriel par jour"]], ["Pourquoi un message envoyé tard pose-t-il problème, même sans réponse attendue ?", ["Le recevoir, c'est déjà y penser.", "Il coûte plus cher.", "Il arrive en retard."]], ["Quel est le bilan selon Yannick ?", ["Les salariés se disent moins fatigués.", "Rien n'a changé.", "Les clients se sont plaints."]]],
    decode: ["c'est à chaque entreprise de s'en charger", "Nous nous y sommes pris en deux temps"],
    tip: "Spoken French at work is full of en and y: s'en charger, s'y prendre, en avoir assez, y penser. Don't translate them word by word: listen for the whole verb.", tip_fr: "Le français parlé au travail est plein de en et de y : s'en charger, s'y prendre, en avoir assez, y penser. Ne les traduis pas mot à mot : écoute le verbe en entier."
  }]);

  W.LEXIS = W.LEXIS || {};
  W.LEXIS["c1-7"] = {
    colloc: [
      ["lever des fonds", "to raise funds", "La jeune pousse a levé deux millions d'euros.", "levé", ["soulevé", "monté"]],
      ["décrocher un contrat", "to land a contract", "Ils ont décroché un contrat avec une grande chaîne.", "décroché", ["attrapé", "cueilli"]],
      ["réaliser un chiffre d'affaires", "to achieve a turnover", "L'entreprise a réalisé un chiffre d'affaires record.", "réalisé", ["accompli", "rendu"]],
      ["gagner des parts de marché", "to gain market share", "La marque a gagné des parts de marché.", "gagné", ["mangé", "volé"]],
      ["tenir les délais", "to meet deadlines", "Nous avons tenu les délais malgré la panne.", "tenu", ["gardé", "porté"]],
      ["boucler un dossier", "to wrap up a file", "Il faut boucler ce dossier avant vendredi.", "boucler", ["nouer", "lacer"]],
      ["monter une entreprise", "to set up a business", "Elle a monté son entreprise à vingt-cinq ans.", "monté", ["levé", "dressé"]],
      ["faire le point", "to take stock, to review", "Faisons le point sur l'avancement du projet.", "Faisons", ["Mettons", "Dressons"]],
      ["essuyer un refus", "to meet with a refusal", "Il a essuyé un refus de la banque.", "essuyé", ["séché", "lavé"]],
      ["conclure un accord", "to reach an agreement", "Les deux sociétés ont conclu un accord.", "conclu", ["fermé", "fini"]]
    ],
    wf: [
      ["Les ___ ont voté la grève. (SALAIRE)", "salariés"],
      ["La ___ de l'usine a choqué la région. (DÉLOCALISER)", "délocalisation"],
      ["Cette ___ a donné naissance au premier groupe du secteur. (FUSIONNER)", "fusion"],
      ["Elle dirige une entreprise très ___. (INNOVER)", "innovante"],
      ["Le ___ de cinquante salariés a été annoncé. (LICENCIER)", "licenciement"],
      ["Une meilleure ___ des tâches améliorerait l'efficacité. (RÉPARTIR)", "répartition"],
      ["Les ___ ont approuvé le rachat. (ACTION)", "actionnaires"],
      ["Ce projet n'est pas ___ : il coûte trop cher. (VIE)", "viable"]
    ],
    kwt: [
      ["Je lui reproche encore de m'avoir menti.", "VEUX", "Je lui ___ m'avoir menti.", "en veux encore de"],
      ["Il a réussi à résoudre le problème tout seul.", "SORTI", "Il ___ tout seul.", "s'en est sorti"],
      ["Je ne sais pas comment faire pour le convaincre.", "PRENDRE", "Je ne sais pas comment ___ pour le convaincre.", "m'y prendre"],
      ["Elle s'est habituée à son nouveau poste.", "FAITE", "Son nouveau poste ? Elle ___.", "s'y est faite"],
      ["J'ai envoyé les lettres hier.", "ENVOYÉES", "Les lettres, je ___ hier.", "les ai envoyées"],
      ["Il a fallu beaucoup d'efforts.", "FALLU", "Les efforts ___ étaient énormes.", "qu'il a fallu"]
    ],
    idioms: [
      ["tirer son épingle du jeu", "se sortir habilement d'une situation difficile", "to come out on top", "Malgré la crise, cette petite entreprise a tiré son épingle du jeu.", "a tiré son épingle du jeu"],
      ["travailler pour des prunes", "travailler pour rien", "to work for peanuts", "Je ne vais pas travailler pour des prunes !", "travailler pour des prunes"],
      ["être sur la brèche", "être en pleine activité, sans relâche", "to be on the go", "Toute l'équipe est sur la brèche depuis lundi.", "sur la brèche"],
      ["se tourner les pouces", "ne rien faire", "to twiddle one's thumbs", "Pendant la panne, on se tournait les pouces.", "se tournait les pouces"],
      ["c'est du gagnant-gagnant", "chaque partie y trouve son avantage", "it's a win-win", "Cet accord, c'est du gagnant-gagnant.", "c'est du gagnant-gagnant"],
      ["faire chou blanc", "échouer, ne rien obtenir", "to draw a blank", "Nous avons contacté vingt clients et fait chou blanc.", "fait chou blanc"],
      ["mettre les bouchées doubles", "travailler plus vite", "to get a move on", "Pour finir à temps, il faudra mettre les bouchées doubles.", "mettre les bouchées doubles"],
      ["avoir les dents longues", "être très ambitieux", "to be highly ambitious", "Ce jeune commercial a les dents longues.", "a les dents longues"]
    ]
  };

  W.PROMPTS.push({ id: "fr-c1-7", level: "C1", q: "Qu'est-ce qui rend un environnement de travail agréable, selon toi ?", fr: "What makes a working environment pleasant, in your view?", time: 180,
    phrases: ["les meilleures équipes que j'aie connues…", "s'en sortir", "s'y faire", "en avoir assez", "il faut que…"],
    model: "Pour moi, un bon environnement de travail, c'est d'abord une ambiance où l'on peut reconnaître une erreur sans craindre d'être jugé. Les meilleures équipes que j'aie connues étaient celles où l'on s'entraidait : quand quelqu'un ne s'en sortait pas, un collègue proposait son aide. J'ajouterais le respect du temps de chacun : un courriel à minuit, ça peut attendre ! Enfin, il faut que la charge de travail reste raisonnable. On peut s'y faire une semaine, mais pas toute une année : à la longue, tout le monde finit par en avoir assez." });

  W.WRITING_GUIDE["c1-7"] = { genre: "A recommendation memo (DALF C1)", genre_fr: "Une note de recommandation (DALF C1)",
    plan: [["Header: who it's for and the subject.", "En-tête : le destinataire et l'objet."], ["Say what the memo examines.", "Dis ce que la note examine."], ["Set out the advantages, with evidence.", "Expose les avantages, avec des éléments concrets."], ["Set out the risks for your own company.", "Expose les risques pour ta propre entreprise."], ["Make a precise, measurable recommendation.", "Fais une recommandation précise et mesurable."]],
    marks: [["Objet : passage éventuel", "the header", "l'en-tête"], ["qui s'y sont essayées", "pronominal verb with y, agreement", "verbe pronominal avec y, accord"], ["Les témoignages que nous avons recueillis", "agreement with a direct object placed before", "accord avec un COD placé avant"], ["nous recommandons une expérimentation", "the recommendation", "la recommandation"], ["Les efforts qu'il aura fallu consentir", "il a fallu: no agreement", "il a fallu : pas d'accord"], ["Si le bilan s'avère positif", "a condition", "une condition"]] };

  W.COURSE.push({ id: "c1-7", level: "C1", icon: "briefcase", title: "The business world", title_fr: "Le monde de l'entreprise",
    intro: "In this unit, you'll talk about companies and working life: idiomatic verbs with en and y (en vouloir à, s'en sortir, s'y prendre), the hard cases of past participle agreement, and the delicate emails of working life.",
    intro_fr: "Dans cette unité, tu vas parler d'entreprise et de vie professionnelle : les verbes idiomatiques avec en et y (en vouloir à, s'en sortir, s'y prendre), les cas difficiles de l'accord du participe passé et les courriels délicats de la vie professionnelle.",
    can: ["Use common idiomatic verbs with en and y", "Get past participle agreement right in the hard cases", "Discuss business, work organisation and well-being", "Follow up, refuse and negotiate by email, firmly and courteously", "Write a recommendation memo"],
    can_fr: ["Employer les verbes idiomatiques courants avec en et y", "Réussir l'accord du participe passé dans les cas difficiles", "Débattre d'entreprise, d'organisation du travail et de bien-être", "Relancer, refuser et négocier par courriel, avec fermeté et courtoisie", "Rédiger une note de recommandation"],
    lessons: [123, 124, 125], vocab: ["entrepriseFR", "equipeFR"], reading: "quatrejours", prompt: "fr-c1-7",
    writing: { task: "Your company is considering a four-day week. Management asks you for a memo (250-300 words) setting out the advantages, the risks and your recommendation.", task_fr: "Ton entreprise envisage la semaine de quatre jours. La direction te demande une note (250 à 300 mots) qui présente les avantages, les risques et ta recommandation.", words: "250-300",
      tips: ["Objet : …", "Les entreprises qui s'y sont essayées…", "Il serait toutefois imprudent de…", "Au vu de ces éléments, nous recommandons…", "Si le bilan s'avère positif, …"],
      checklist: ["My memo has a header with the subject", "The advantages and the risks are clearly separated", "My recommendation is precise and measurable", "My participles agree correctly", "My tone is professional and neutral", "I wrote between 250 and 300 words"],
      model: "Note à l'attention de la direction\nObjet : passage éventuel à la semaine de quatre jours\n\nÀ la demande de la direction, cette note examine l'intérêt d'un passage à la semaine de quatre jours et formule une recommandation.\n\nLes avantages\nLes entreprises qui s'y sont essayées font état de bénéfices réels : des salariés moins fatigués, un absentéisme en recul et une meilleure attractivité lors des recrutements. Pour une structure comme la nôtre, qui peine à attirer de jeunes profils, ce dernier argument n'est pas négligeable. Certaines d'entre elles affirment même avoir maintenu leur chiffre d'affaires, ce qu'il conviendrait toutefois de vérifier.\n\nLes risques\nIl serait toutefois imprudent d'en sous-estimer les difficultés. Notre service client doit rester joignable cinq jours sur sept : il faudrait donc organiser des roulements, ce qui suppose une préparation minutieuse. Les managers, quant à eux, craignent une accumulation de réunions sur quatre jours. Par ailleurs, si les heures sont simplement concentrées sur quatre jours, les journées allongées risquent de produire l'effet inverse de celui recherché. Les témoignages que nous avons recueillis auprès d'autres entreprises vont d'ailleurs dans ce sens.\n\nRecommandation\nAu vu de ces éléments, nous recommandons une expérimentation de six mois, limitée à deux services volontaires, avec une durée hebdomadaire réduite plutôt que comprimée. Un bilan serait établi à l'issue de l'expérience, à partir d'indicateurs définis à l'avance : charge de travail, satisfaction des clients, absentéisme et chiffre d'affaires. Les efforts qu'il aura fallu consentir pourront ainsi être mesurés avec précision.\n\nSi le bilan s'avère positif, l'extension à l'ensemble de l'entreprise pourrait être envisagée dès l'année suivante, en concertation avec les représentants du personnel." } });
})();
