/* Cours de français, unité B1-8 « Relationships / Les relations » : les doubles pronoms (je le lui donne,
   donne-le-moi), les verbes pronominaux réciproques et l'accord du participe (ils se sont rencontrés, elles se sont
   parlé, elle s'est lavé les mains), s'excuser, accepter des excuses, se plaindre avec tact. Personnages fictifs,
   prénoms français. Fait vérifiable : six heures de décalage horaire entre Lille et Montréal. Répliques de
   l'apprenant neutres (ça m'a fait de la peine, je te demande pardon). */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "relationsFR", icon: "heart-handshake", title: "Relationships", title_fr: "Les relations", level: "B1", words: [
    ["l'amitié", "friendship", "Notre amitié dure depuis vingt ans."],
    ["le meilleur ami / la meilleure amie", "the best friend (m) / the best friend (f)", "C'est ma meilleure amie depuis le collège."],
    ["un ami d'enfance / une amie d'enfance", "a childhood friend (m) / (f)", "J'ai revu un ami d'enfance."],
    ["se rencontrer", "to meet (each other)", "Ils se sont rencontrés à l'université."],
    ["s'entendre bien avec", "to get on well with", "Je m'entends bien avec mes collègues."],
    ["se disputer", "to argue, to have a row", "Ils se disputent pour un rien."],
    ["se réconcilier", "to make up", "Finalement, elles se sont réconciliées."],
    ["se séparer", "to split up", "Mes parents se sont séparés quand j'avais dix ans."],
    ["divorcer", "to get divorced", "Ils ont divorcé l'année dernière."],
    ["tomber amoureux / tomber amoureuse", "to fall in love (m) / (f)", "Elle est tombée amoureuse à Venise."],
    ["le partenaire / la partenaire", "the partner (m) / the partner (f)", "Il vit avec sa partenaire depuis trois ans."],
    ["faire confiance à", "to trust", "Je lui fais entièrement confiance."],
    ["se confier à", "to confide in", "Elle se confie toujours à sa sœur."],
    ["soutenir", "to support", "Ses amis l'ont beaucoup soutenue."],
    ["le soutien", "support", "Merci pour ton soutien."],
    ["garder le contact", "to keep in touch", "On a gardé le contact depuis le lycée."],
    ["perdre de vue", "to lose touch with", "J'ai perdu de vue mes amis d'école."],
    ["compter sur", "to count on, to rely on", "Tu peux toujours compter sur moi."]
  ] },
  { id: "conflitsFR", icon: "hand-heart", title: "Conflicts and making up", title_fr: "Conflits et réconciliation", level: "B1", words: [
    ["la dispute", "the row, the argument", "Ils ont eu une grosse dispute."],
    ["le malentendu", "the misunderstanding", "C'était juste un malentendu."],
    ["s'excuser", "to apologise", "Il s'est excusé de son retard."],
    ["pardonner", "to forgive", "Je te pardonne."],
    ["en vouloir à quelqu'un", "to hold it against someone", "Tu m'en veux encore ?"],
    ["reprocher", "to criticise, to blame", "Elle lui reproche de ne jamais écouter."],
    ["vexer", "to offend, to upset", "Je ne voulais pas te vexer."],
    ["vexé / vexée", "offended, hurt (m) / offended, hurt (f)", "Il est parti, un peu vexé."],
    ["blesser", "to hurt (someone's feelings)", "Ses paroles l'ont blessée."],
    ["faire la tête", "to sulk", "Arrête de faire la tête !"],
    ["se fâcher", "to get angry; to fall out", "Ils se sont fâchés pour une histoire d'argent."],
    ["la rancune", "the grudge", "Je n'ai pas de rancune."],
    ["faire de la peine", "to upset, to hurt", "Ça m'a fait de la peine."],
    ["faire exprès", "to do on purpose", "Je ne l'ai pas fait exprès."],
    ["ce n'est pas grave", "it doesn't matter, never mind", "Tu as oublié ? Ce n'est pas grave."],
    ["ça arrive", "it happens", "Ne t'inquiète pas, ça arrive à tout le monde."],
    ["passer l'éponge", "to let bygones be bygones", "Allez, on passe l'éponge."],
    ["faire le premier pas", "to make the first move", "C'est elle qui a fait le premier pas."]
  ] });

  W.LESSONS.push(
  {
    id: 66, level: "B1", icon: "repeat",
    title: "Je le lui donne: two pronouns together", title_fr: "Je le lui donne : les doubles pronoms",
    subtitle: "The order when two pronouns meet, in every tense and in commands.", subtitle_fr: "L'ordre quand deux pronoms se rencontrent, à tous les temps et à l'impératif.",
    body: `
<h2>The order</h2>
<table>
<tr><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>
<tr><td><s-fr>me, te, se, nous, vous</s-fr></td><td><s-fr>le, la, les</s-fr></td><td><s-fr>lui, leur</s-fr></td><td><s-fr>y</s-fr></td><td><s-fr>en</s-fr></td></tr>
</table>
<p><s-fr>Il me le donne.</s-fr> (He gives it to me.) · <s-fr>Je le lui ai dit.</s-fr> (I told him.) · <s-fr>Je vous les envoie.</s-fr> · <s-fr>Elle leur en parle.</s-fr> · <s-fr>Il y en a trois.</s-fr></p>
<h2>In compound tenses and with an infinitive</h2>
<p>The pronouns go before the auxiliary: <s-fr>Je te l'ai prêté.</s-fr> With an infinitive, before the infinitive: <s-fr>Je vais le lui dire.</s-fr> The participle agrees with a direct object placed before it: <s-fr>Les clés ? Je te les ai rendues.</s-fr></p>
<h2>In positive commands</h2>
<p>After the verb, with hyphens, and <s-fr>me</s-fr> becomes <s-fr>moi</s-fr>: <s-fr>Donne-le-moi !</s-fr> · <s-fr>Montre-la-leur !</s-fr> In a negative command, the normal order comes back: <s-fr>Ne me le donne pas !</s-fr></p>
<div class="tip">In everyday speech, <s-fr>le</s-fr> often disappears before <s-fr>lui</s-fr>: you'll hear <s-fr>Je lui ai dit</s-fr> for "I told him (it)". Understand it, but write <s-fr>je le lui ai dit</s-fr>.</div>
`,
    examples: [
      ["Tu me prêtes ton vélo ? Oui, je te le prête.", "Will you lend me your bike? Yes, I'll lend it to you."],
      ["Je le lui ai dit hier.", "I told him yesterday."],
      ["Les photos ? Je vous les envoie ce soir.", "The photos? I'll send them to you tonight."],
      ["Elle leur en parle souvent.", "She often talks to them about it."],
      ["Les clés ? Je te les ai rendues.", "The keys? I gave them back to you."],
      ["Je vais la lui montrer.", "I'm going to show it to her."],
      ["Donne-le-moi, s'il te plaît !", "Give it to me, please!"],
      ["Ne me le dis pas !", "Don't tell me!"]
    ],
    quiz: [
      { q: "“He gives it to me” is:", o: ["Il le me donne.", "Il me le donne.", "Il me lui donne."], a: 1, ex: "me before le." },
      { q: "“I told her (it)” is:", o: ["Je lui l'ai dit.", "Je le lui ai dit.", "Je l'ai lui dit."], a: 1, ex: "le before lui, both before the auxiliary." },
      { q: "“Give it to me!” is:", o: ["Donne-moi-le !", "Donne-le-moi !", "Me le donne !"], a: 1, ex: "Positive command: verb-le-moi." },
      { q: "“The letters? I sent them to her” is:", o: ["Je les lui ai envoyées.", "Je lui les ai envoyées.", "Je les lui ai envoyé."], a: 0, ex: "les before lui, and envoyées agrees with les (les lettres)." },
      { q: "“There are some” (il y a + en) is:", o: ["Il en y a.", "Il y en a.", "Il y a en."], a: 1, ex: "y before en: il y en a." }
    ]
  },
  {
    id: 67, level: "B1", icon: "users",
    title: "Ils se sont rencontrés: pronominal verbs in the past", title_fr: "Ils se sont rencontrés : les verbes pronominaux au passé",
    subtitle: "Each other, and the agreement rule that even French speakers check twice.", subtitle_fr: "L'un l'autre, et la règle d'accord que même les francophones vérifient deux fois.",
    body: `
<h2>Reciprocal verbs: each other</h2>
<p>With a plural subject, a pronominal verb often means "each other": <s-fr>Ils s'aiment.</s-fr> (They love each other.) · <s-fr>Nous nous écrivons.</s-fr> · <s-fr>On se voit demain ?</s-fr> (Shall we see each other tomorrow?)</p>
<h2>The passé composé: always être</h2>
<p><s-fr>Ils se sont rencontrés en 2010.</s-fr> · <s-fr>Elles se sont disputées.</s-fr> · <s-fr>Nous nous sommes réconciliés.</s-fr></p>
<h2>Agreement: the tricky rule</h2>
<p>The participle agrees with the reflexive pronoun only when that pronoun is a direct object:</p>
<table>
<tr><th>French</th><th>Why</th></tr>
<tr><td><s-fr>Elles se sont vues.</s-fr></td><td>voir quelqu'un: se is direct, so it agrees</td></tr>
<tr><td><s-fr>Elles se sont parlé.</s-fr></td><td>parler à quelqu'un: se is indirect, no agreement</td></tr>
<tr><td><s-fr>Ils se sont téléphoné.</s-fr></td><td>téléphoner à: no agreement</td></tr>
<tr><td><s-fr>Elle s'est lavé les mains.</s-fr></td><td>the direct object is les mains, after the verb: no agreement</td></tr>
</table>
<p>The verbs built with à don't agree: <s-fr>parler à, téléphoner à, écrire à, dire à, sourire à, plaire à, ressembler à</s-fr>.</p>
<div class="tip">Most of the time you can't hear the difference, so it's mainly a spelling point, and an important one in written exams like the DELF. When in doubt, ask: se + verb + quelqu'un, or se + verb + à quelqu'un?</div>
`,
    examples: [
      ["Ils se sont rencontrés à un mariage.", "They met at a wedding."],
      ["Nous nous écrivons depuis dix ans.", "We've been writing to each other for ten years."],
      ["Elles se sont vues hier soir.", "They saw each other last night."],
      ["Elles se sont parlé pendant des heures.", "They talked to each other for hours."],
      ["Ils se sont téléphoné tous les jours.", "They phoned each other every day."],
      ["Elle s'est lavé les mains.", "She washed her hands."],
      ["Mes voisins se sont disputés toute la nuit.", "My neighbours argued all night."],
      ["On se voit samedi ?", "Shall we meet on Saturday?"]
    ],
    quiz: [
      { q: "“They (f) talked to each other”:", o: ["Elles se sont parlées.", "Elles se sont parlé.", "Elles s'ont parlé."], a: 1, ex: "parler à: indirect, no agreement." },
      { q: "“They (m) met in 2015”:", o: ["Ils se sont rencontré en 2015.", "Ils se sont rencontrés en 2015.", "Ils ont se rencontrés en 2015."], a: 1, ex: "rencontrer quelqu'un: direct, so rencontrés." },
      { q: "Pronominal verbs in the passé composé take:", o: ["avoir", "être", "both"], a: 1, ex: "Always être." },
      { q: "“She washed her hands”:", o: ["Elle s'est lavée les mains.", "Elle s'est lavé les mains.", "Elle a lavé ses mains à elle."], a: 1, ex: "The direct object (les mains) comes after: no agreement." },
      { q: "“We see each other on Sundays” is:", o: ["On se voit le dimanche.", "On voit le dimanche.", "On se voyons le dimanche."], a: 0, ex: "on + se + 3rd person singular." }
    ]
  },
  {
    id: 68, level: "B1", kind: "functional", icon: "hand-heart",
    title: "Everyday French: apologising and making up", title_fr: "Le français de tous les jours : s'excuser et se réconcilier",
    subtitle: "Say sorry, explain, accept an apology, and raise a problem without starting a fight.", subtitle_fr: "Demander pardon, expliquer, accepter des excuses, et parler d'un problème sans déclencher une dispute.",
    body: `
<h2>Apologising</h2>
<p><s-fr>Pardon !</s-fr> · <s-fr>Excuse-moi.</s-fr> / <s-fr>Excusez-moi.</s-fr> · <s-fr>Je te demande pardon.</s-fr> · <s-fr>Je suis vraiment désolé</s-fr> (<s-fr>désolée</s-fr>) <s-fr>de…</s-fr> + infinitive: <s-fr>désolé d'être en retard</s-fr>.</p>
<h2>Explaining</h2>
<p><s-fr>Je ne l'ai pas fait exprès.</s-fr> (I didn't do it on purpose.) · <s-fr>Je ne voulais pas te vexer.</s-fr> · <s-fr>C'était un malentendu.</s-fr> · <s-fr>Je n'aurais pas dû dire ça.</s-fr> (I shouldn't have said that.)</p>
<h2>Accepting an apology</h2>
<p><s-fr>Ce n'est pas grave.</s-fr> · <s-fr>Ça arrive.</s-fr> · <s-fr>Ne t'inquiète pas.</s-fr> · <s-fr>C'est oublié.</s-fr> · <s-fr>On passe l'éponge.</s-fr> (Let's forget it.)</p>
<h2>Raising a problem with tact</h2>
<p><s-fr>Je voulais te parler de quelque chose…</s-fr> · <s-fr>Ça m'a fait de la peine que tu…</s-fr> (+ subjunctive) · <s-fr>Je n'ai pas compris pourquoi tu…</s-fr> · <s-fr>La prochaine fois, est-ce que tu pourrais… ?</s-fr> Talk about your feelings (<s-fr>ça m'a fait de la peine</s-fr>) rather than accusing (<s-fr>tu es égoïste</s-fr>).</p>
<div class="tip">Some people say <s-fr>je m'excuse</s-fr> is impolite, since you're "excusing yourself". It's extremely common all the same. <s-fr>Excuse-moi</s-fr> or <s-fr>je te demande pardon</s-fr> are always safe.</div>
`,
    examples: [
      ["Je te demande pardon, je ne l'ai pas fait exprès.", "I'm sorry, I didn't do it on purpose."],
      ["Excusez-moi pour le retard.", "Sorry for the delay."],
      ["Je ne voulais pas te vexer.", "I didn't mean to upset you."],
      ["Ce n'est pas grave, ça arrive à tout le monde.", "It doesn't matter, it happens to everyone."],
      ["Allez, c'est oublié !", "Come on, it's forgotten!"],
      ["Ça m'a fait de la peine que tu ne viennes pas.", "It hurt me that you didn't come."],
      ["La prochaine fois, est-ce que tu pourrais me prévenir ?", "Next time, could you let me know?"]
    ],
    quiz: [
      { q: "“I didn't do it on purpose” is:", o: ["Je ne l'ai pas fait exprès.", "Je ne l'ai pas fait en but.", "Je n'ai pas fait exprès le."], a: 0, ex: "faire exprès." },
      { q: "To accept an apology:", o: ["Ce n'est pas grave.", "Ce n'est pas vrai.", "C'est de ta faute."], a: 0, ex: "Ce n'est pas grave = never mind." },
      { q: "“Sorry I'm late” is:", o: ["Désolé pour être en retard.", "Désolé d'être en retard.", "Désolé que je suis en retard."], a: 1, ex: "désolé de + infinitive." },
      { q: "The most tactful way to raise a problem:", o: ["Tu es égoïste.", "Ça m'a fait de la peine que tu oublies.", "Tu fais toujours ça."], a: 1, ex: "Talk about your feelings, not about the other person's character." },
      { q: "“On passe l'éponge” means:", o: ["Let's clean up.", "Let's forget it.", "Let's go."], a: 1, ex: "passer l'éponge = to let bygones be bygones." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    66: {
      gap: [["Tu me prêtes ton livre ? Oui, je te ___ prête. (it)", "le"], ["Tu as dit la vérité à Paul ? Oui, je la ___ ai dite. (to him)", "lui"], ["Ton stylo ? Donne-___-moi ! (it)", "le"], ["Il y ___ a trois. (of them)", "en"]],
      fix: [["Je lui le donne.", "Je le lui donne.", "Order: le, la, les before lui, leur."], ["Donne-moi-le !", "Donne-le-moi !", "In a positive command: verb-le-moi."]],
      task: ["Answer with two pronouns: Tu as rendu les clés au propriétaire ? Tu m'envoies les photos ? Tu as parlé du projet à tes collègues ?", "Réponds avec deux pronoms : Tu as rendu les clés au propriétaire ? Tu m'envoies les photos ? Tu as parlé du projet à tes collègues ?", "Oui, je les lui ai rendues hier. Oui, je te les envoie ce soir. Non, je ne leur en ai pas encore parlé."]
    },
    67: {
      gap: [["Ils se sont ___ en 2015. (rencontrer)", "rencontrés"], ["Elles se sont ___ hier soir. (téléphoner)", "téléphoné"], ["On se ___ demain ? (voir)", "voit"], ["Elle s'est ___ les mains. (laver)", "lavé"]],
      fix: [["Ils se sont parlés pendant des heures.", "Ils se sont parlé pendant des heures.", "parler à: the pronoun is indirect, so no agreement."], ["Nous nous avons disputés.", "Nous nous sommes disputés.", "Pronominal verbs take être."]],
      task: ["Tell how two people you know met and how their relationship went (5 sentences, pronominal verbs in the passé composé).", "Raconte comment deux personnes que tu connais se sont rencontrées et comment leur relation a évolué (5 phrases, verbes pronominaux au passé composé).", "Mes grands-parents se sont rencontrés en 1965, à un bal de village. Ils se sont parlé toute la soirée. Ensuite, ils se sont écrit pendant un an, parce qu'il faisait son service militaire. Ils se sont mariés en 1967. Bien sûr, ils se sont parfois disputés, mais ils se sont toujours réconciliés !"]
    },
    68: {
      gap: [["Je ne l'ai pas fait ___. (on purpose)", "exprès"], ["Ce n'est pas ___, ça arrive. (serious)", "grave"], ["Je te demande ___. (forgiveness)", "pardon"], ["Ça m'a fait de la ___ que tu oublies. (it hurt me)", "peine"]],
      fix: [["Je suis désolé pour être en retard.", "Je suis désolé d'être en retard.|Je suis désolée d'être en retard.|Désolé d'être en retard.|Désolée d'être en retard.", "désolé (désolée) de + infinitive."], ["Je ne voulais pas te vexer, pardonne.", "Je ne voulais pas te vexer, pardonne-moi.", "pardonner needs an object: pardonne-moi."]],
      task: ["You forgot a friend's birthday. Write a message to apologise, explain and suggest how to make up for it.", "Tu as oublié l'anniversaire d'un ami. Écris un message pour t'excuser, expliquer et proposer de te rattraper.", "Je te demande pardon, j'ai complètement oublié ton anniversaire ! Je n'ai aucune excuse : j'ai eu une semaine très chargée, mais ce n'est pas une raison. Est-ce que je peux t'inviter au restaurant samedi pour me rattraper ? C'est moi qui t'offre le dessert !"]
    }
  });

  W.ROLEPLAYS.push(
  { id: "fetemanquee", lesson: 68, level: "B1", icon: "hand-heart", partner: "Anaïs", role: "a friend",
    title: "The missed party", title_fr: "La fête manquée",
    setting: "Last Saturday, you didn't go to your friend Anaïs's party, and you didn't warn her. She's hurt. Apologise, explain and make up.", setting_fr: "Samedi dernier, tu as manqué la fête de ton amie Anaïs, sans la prévenir. Elle est blessée. Excuse-toi, explique et réconciliez-vous.",
    turns: [
      { p: "Ah, c'est toi… Samedi soir, j'ai gardé une place pour toi toute la soirée.", fr: "Oh, it's you… On Saturday night, I kept a seat for you all evening." },
      { y: ["Je sais, je te demande pardon. Je ne l'ai pas fait exprès.", "Je sais, je te demande le pardon. Je ne l'ai pas fait exprès.", "Je sais, je te demande pardon. Je ne l'ai pas fait exprès de."], fr: "I know, I'm sorry. I didn't do it on purpose.", why: "demander pardon (no article); faire exprès." },
      { p: "Tu aurais pu me prévenir ! Je t'ai envoyé trois messages.", fr: "You could have let me know! I sent you three messages." },
      { y: ["Mon téléphone n'avait plus de batterie, et j'avais noté la mauvaise date dans mon agenda.", "Mon téléphone n'avait plus du batterie, et j'avais noté la mauvaise date dans mon agenda.", "Mon téléphone n'avait plus de batterie, et j'avais noter la mauvaise date dans mon agenda."], fr: "My phone's battery was dead, and I'd written down the wrong date in my diary.", why: "pas de / plus de after a negative; the plus-que-parfait: avais + participle." },
      { p: "La mauvaise date ? Sérieusement ? Ça m'a fait de la peine, tu sais.", fr: "The wrong date? Seriously? It hurt me, you know." },
      { y: ["Je comprends, et je ne voulais pas te faire de peine. Je peux me rattraper ?", "Je comprends, et je ne voulais pas te faire du peine. Je peux me rattraper ?", "Je comprends, et je ne voulais pas te faire de la peine pas. Je peux me rattraper ?"], fr: "I understand, and I didn't want to hurt you. Can I make it up to you?", why: "After a negative: de (pas de peine)." },
      { p: "Hmm… Qu'est-ce que tu proposes ?", fr: "Hmm… What do you suggest?" },
      { y: ["Je t'invite au restaurant vendredi. Et les photos de la fête, tu me les montreras ?", "Je t'invite au restaurant vendredi. Et les photos de la fête, tu les me montreras ?", "Je t'invite au restaurant vendredi. Et les photos de la fête, tu me leur montreras ?"], fr: "I'll take you out to dinner on Friday. And will you show me the photos of the party?", why: "me before les: tu me les montreras." },
      { p: "D'accord, ça marche. Bon, c'est oublié. Mais la prochaine fois, recharge ton téléphone !", fr: "OK, deal. Right, it's forgotten. But next time, charge your phone!" },
      { y: ["Promis ! Et merci de ne pas m'en vouloir.", "Promis ! Et merci de ne pas me en vouloir.", "Promis ! Et merci de pas m'en vouloir ne."], fr: "I promise! And thanks for not holding it against me.", why: "en vouloir à quelqu'un: ne pas m'en vouloir (me + en = m'en)." }
    ] }
  );

  W.READINGS.push({
    id: "amitiedistance", level: "B1", icon: "heart-handshake", title: "Une amitié à distance", genre: "Magazine story",
    intro: "Two friends from school, an ocean between them, a row and a letter. Pronominal verbs in the past and double pronouns.",
    intro_fr: "Deux amies d'école, un océan entre elles, une dispute et une lettre. Les verbes pronominaux au passé et les doubles pronoms.",
    paragraphs: [
      { en: "Léonie et Aurore se sont rencontrées en sixième, dans un collège de Lille. Pendant sept ans, elles ne se sont presque jamais quittées : elles s'appelaient tous les soirs, se racontaient tout et se prêtaient leurs vêtements.", fr: "Léonie and Aurore met in their first year of secondary school, in Lille. For seven years, they were almost never apart: they phoned each other every evening, told each other everything and lent each other their clothes." },
      { en: "Puis, à dix-neuf ans, Aurore est partie étudier à Montréal. Au début, elles se sont écrit tous les jours. Mais avec les six heures de décalage horaire et les études, les messages sont devenus plus rares.", fr: "Then, at nineteen, Aurore went to study in Montreal. At first, they wrote to each other every day. But with the six-hour time difference and their studies, the messages became less frequent." },
      { en: "La première vraie dispute est arrivée deux ans plus tard. Léonie s'était mariée, et Aurore n'avait pas pu venir au mariage. J'avais l'impression qu'elle m'avait oubliée, raconte Léonie. Pendant six mois, elles ne se sont pas parlé.", fr: "The first real row came two years later. Léonie had got married, and Aurore hadn't been able to come to the wedding. I felt she'd forgotten me, says Léonie. For six months, they didn't speak to each other." },
      { en: "C'est Aurore qui a fait le premier pas. Elle a envoyé à Léonie une longue lettre, avec des photos de leurs années de collège. Quand je l'ai reçue, j'ai pleuré, se souvient Léonie. Elle me l'avait écrite à la main, comme quand on avait douze ans.", fr: "It was Aurore who made the first move. She sent Léonie a long letter, with photos from their school years. When I got it, I cried, Léonie remembers. She had written it to me by hand, like when we were twelve." },
      { en: "Aujourd'hui, elles se voient une fois par an et se téléphonent chaque dimanche. Leur secret ? Se dire les choses, même quand c'est difficile. Une amitié, ça s'entretient, comme un jardin.", fr: "Today, they see each other once a year and phone each other every Sunday. Their secret? Telling each other things, even when it's hard. A friendship needs looking after, like a garden." }
    ],
    glossary: { "sixième": "first year of secondary school", "quittées": "apart, left each other", "prêtaient": "lent", "décalage": "gap (le décalage horaire: the time difference)", "horaire": "time (adjective)", "mariage": "wedding", "oubliée": "forgotten", "pleuré": "cried", "écrite": "written", "téléphonent": "phone (each other)", "entretient": "is looked after, is kept up" },
    questions: [
      { q: "Où Léonie et Aurore se sont-elles rencontrées ?", o: ["À Montréal", "Dans un collège de Lille", "À l'université"], a: 1 },
      { q: "Pourquoi les messages sont-ils devenus plus rares ?", o: ["À cause du décalage horaire et des études", "Parce qu'elles s'étaient disputées", "Parce qu'Aurore n'avait plus de téléphone"], a: 0 },
      { q: "Pourquoi Léonie était-elle fâchée ?", o: ["Aurore lui avait pris un vêtement.", "Aurore était partie sans le dire.", "Aurore n'était pas venue à son mariage."], a: 2 },
      { q: "Qui a fait le premier pas ?", o: ["Léonie", "Aurore", "La mère de Léonie"], a: 1 },
      { q: "Quel est leur secret ?", o: ["Se voir chaque semaine", "Se dire les choses, même quand c'est difficile", "Ne jamais se disputer"], a: 1 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-b1-8", unit: "b1-8", level: "B1", icon: "radio",
    title: "Un ami, une dette", title_fr: "Un ami, une dette",
    context: "On a radio phone-in, Julien asks Françoise, a psychologist, for advice: his best friend hasn't paid back the money he lent him.", context_fr: "Dans une émission de radio, Julien demande conseil à Françoise, psychologue : son meilleur ami ne lui a pas rendu l'argent qu'il lui a prêté.",
    words: [["une dette", "a debt"], ["éviter", "to avoid"], ["oser", "to dare"], ["abîmer", "to damage"], ["petit à petit", "little by little"]],
    lines: [["Françoise", "Bonsoir Julien, je vous écoute. Qu'est-ce qui vous arrive ?", "fr-FR"], ["Julien", "Bonsoir. Voilà : il y a six mois, mon meilleur ami m'a demandé de lui prêter mille euros. Je les lui ai prêtés tout de suite, bien sûr.", "fr-FR"], ["Françoise", "Et il ne vous les a pas rendus ?", "fr-FR"], ["Julien", "Non. Au début, il m'a dit qu'il me les rendrait en mars. Puis en juin. Maintenant, il ne m'en parle plus du tout, et j'ai l'impression qu'il m'évite.", "fr-FR"], ["Françoise", "Vous lui en avez parlé directement ?", "fr-FR"], ["Julien", "Pas vraiment. Je n'ose pas. On se connaît depuis l'école primaire, je ne veux pas qu'on se dispute pour de l'argent.", "fr-FR"], ["Françoise", "Je comprends. Mais le silence, c'est souvent ce qui abîme le plus une amitié. À votre place, je lui proposerais de se voir, calmement, et je lui dirais ce que vous ressentez, sans reproches.", "fr-FR"], ["Julien", "Et s'il n'a vraiment pas l'argent ?", "fr-FR"], ["Françoise", "Alors vous pourriez lui proposer de vous le rembourser petit à petit, cinquante euros par mois par exemple. L'important, c'est que vous puissiez vous parler franchement.", "fr-FR"], ["Julien", "Vous avez raison. Je vais l'appeler ce soir. Merci beaucoup.", "fr-FR"]],
    gist: ["Quel est le problème de Julien ?", ["Son ami ne lui a pas rendu l'argent qu'il lui a prêté.", "Il s'est disputé avec sa femme.", "Il a perdu son travail."]],
    detail: [["Combien d'argent Julien a-t-il prêté ?", ["Mille euros", "Cent euros", "Cinq mille euros"]], ["Depuis quand Julien et son ami se connaissent-ils ?", ["Depuis l'école primaire", "Depuis six mois", "Depuis l'université"]], ["Que conseille Françoise d'abord ?", ["De se voir et de parler calmement", "D'arrêter de le voir", "D'oublier l'argent"]], ["Quelle solution propose-t-elle si l'ami n'a pas l'argent ?", ["Un remboursement petit à petit", "Demander l'argent à ses parents", "Un prêt à la banque"]]],
    decode: ["Je les lui ai prêtés tout de suite", "il ne m'en parle plus du tout"],
    tip: "Double pronouns go by fast: je les lui ai prêtés sounds like one long word. Catch the verb at the end, then work back: who gave what to whom?", tip_fr: "Les doubles pronoms passent vite : je les lui ai prêtés ressemble à un seul long mot. Attrape le verbe à la fin, puis remonte : qui a donné quoi à qui ?"
  }]);

  W.PROMPTS.push({ id: "fr-b1-8", level: "B1", q: "Qu'est-ce qui est le plus important dans une amitié, pour toi ? Parle d'une amitié qui compte pour toi.", fr: "What matters most in a friendship, for you? Talk about a friendship that's important to you.", time: 150,
    phrases: ["Pour moi, l'essentiel, c'est…", "On se connaît depuis…", "On se voit…", "On se dit tout.", "Je peux compter sur…"],
    model: "Pour moi, l'essentiel dans une amitié, c'est la confiance. Mon meilleur ami s'appelle Julien : on se connaît depuis le lycée. On n'habite plus dans la même ville, mais on s'appelle presque tous les dimanches. On se dit tout, même les choses difficiles. Quand j'avais des problèmes au travail, il me l'a dit franchement : tu dois changer de poste. Il avait raison ! Je sais que je peux toujours compter sur lui." });

  W.WRITING_GUIDE["b1-8"] = { genre: "A reply to a friend in trouble (DELF B1)", genre_fr: "Une réponse à un ami en difficulté (DELF B1)",
    plan: [["React to your friend's news with sympathy.", "Réagis à la nouvelle avec empathie."], ["Show you understand their feelings.", "Montre que tu comprends ce qu'il ressent."], ["Tell a similar experience (pronominal verbs in the past).", "Raconte une expérience semblable (verbes pronominaux au passé)."], ["Give advice (imperative with pronouns).", "Donne des conseils (impératif avec des pronoms)."], ["End warmly.", "Termine chaleureusement."]],
    marks: [["vous vous êtes disputés", "a pronominal verb in the passé composé", "un verbe pronominal au passé composé"], ["elle ne te l'a même pas dit", "two pronouns (te + le)", "deux pronoms (te + le)"], ["on ne s'est pas parlé", "no agreement with parler à", "pas d'accord avec parler à"], ["on s'est réconciliés", "agreement of a pronominal verb", "l'accord d'un verbe pronominal"], ["Dis-lui ce qui t'a blessé", "an imperative with a pronoun", "un impératif avec un pronom"], ["Tiens-moi au courant", "a friendly ending", "une fin amicale"]] };

  W.COURSE.push({ id: "b1-8", level: "B1", icon: "heart-handshake", title: "Relationships", title_fr: "Les relations",
    intro: "In this unit, you'll talk about friendship, love and conflicts: two pronouns together (je le lui donne), pronominal verbs in the past and their agreement, and the French you need to apologise, accept an apology and raise a problem tactfully.",
    intro_fr: "Dans cette unité, tu vas parler d'amitié, d'amour et de conflits : les doubles pronoms (je le lui donne), les verbes pronominaux au passé et leur accord, et le français qu'il faut pour s'excuser, accepter des excuses et parler d'un problème avec tact.",
    can: ["Use two object pronouns in the right order", "Use pronominal verbs in the passé composé with the right agreement", "Apologise and explain", "Accept an apology and make up", "Write a supportive reply to a friend"],
    can_fr: ["Utiliser deux pronoms compléments dans le bon ordre", "Utiliser les verbes pronominaux au passé composé avec le bon accord", "T'excuser et t'expliquer", "Accepter des excuses et te réconcilier", "Écrire une réponse bienveillante à un ami"],
    lessons: [66, 67, 68], vocab: ["relationsFR", "conflitsFR"], reading: "amitiedistance", prompt: "fr-b1-8",
    writing: { task: "Your friend Tom writes that he's had a row with his sister and doesn't know what to do. Reply (160-180 words): show you understand, tell a similar experience, and give advice.", task_fr: "Ton ami Tom t'écrit qu'il s'est disputé avec sa sœur et qu'il ne sait pas quoi faire. Réponds-lui (160 à 180 mots) : montre que tu comprends, raconte une expérience semblable, et donne-lui des conseils.", words: "160-180",
      tips: ["Ça me fait de la peine d'apprendre que…", "Je comprends que tu sois…", "Il m'est arrivé la même chose…", "À ta place, je…", "Tiens-moi au courant !"],
      checklist: ["I showed sympathy", "I used pronominal verbs in the passé composé", "I used two pronouns together at least once", "I gave at least two pieces of advice", "I wrote between 160 and 180 words"],
      model: "Salut Tom,\n\nMerci pour ton message. Ça me fait de la peine d'apprendre que ta sœur et toi, vous vous êtes disputés. Je comprends que tu sois en colère : elle a raconté ton secret à toute la famille, et elle ne te l'a même pas dit.\n\nPourtant, à ta place, je ne resterais pas fâché trop longtemps. Il m'est arrivé la même chose avec mon frère il y a deux ans. On s'est disputés pour une histoire d'argent, et pendant des mois, on ne s'est pas parlé. Je regrette encore ce temps perdu. Finalement, c'est lui qui a fait le premier pas : il m'a envoyé un message. On s'est vus dans un café, on s'est tout dit, et on s'est réconciliés en une heure.\n\nJe te conseille donc de proposer à ta sœur de vous voir, dans un endroit calme. Dis-lui ce qui t'a blessé, sans l'accuser. Et écoute aussi sa version : il y a peut-être eu un malentendu.\n\nTiens-moi au courant, et si tu veux en parler, appelle-moi quand tu veux !\n\nJe t'embrasse,\nSacha" } });
})();
