/* Cours de français, unité B2-7 « Media and influence / Information et influence » : l'hypothèse et la condition
   (au cas où + conditionnel, en cas de, si jamais, à supposer que, en admettant que, pour peu que, quand bien même),
   le conditionnel journalistique et les marques de distance (selon, il semble que, prétendu, soi-disant), débattre
   à la radio ou à la télévision. Personnages, journaux et événements de la revue de presse fictifs. Faits
   vérifiables seulement : une étude publiée en 2018 dans la revue Science (Vosoughi, Roy et Aral) a montré que,
   sur Twitter, les fausses informations se diffusaient plus vite et plus loin que les vraies ; la France a adopté
   en 2023 une loi encadrant l'activité des influenceurs. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "influenceFR", icon: "eye", title: "Influence and information", title_fr: "Influence et information", level: "B2", words: [
    ["l'influenceur / l'influenceuse", "the influencer (m) / (f)", "Cette influenceuse a deux millions d'abonnés."],
    ["l'abonné / l'abonnée", "the follower, the subscriber (m) / (f)", "Il a perdu la moitié de ses abonnés."],
    ["la publicité ciblée", "targeted advertising", "La publicité ciblée utilise nos données."],
    ["l'algorithme", "the algorithm", "L'algorithme choisit ce que nous voyons."],
    ["la bulle de filtres", "the filter bubble", "On vit tous un peu dans une bulle de filtres."],
    ["la désinformation", "disinformation", "La désinformation circule vite en période d'élection."],
    ["la propagande", "propaganda", "Ce film est de la pure propagande."],
    ["manipuler", "to manipulate", "Certaines images sont manipulées."],
    ["l'esprit critique", "critical thinking", "L'école doit développer l'esprit critique."],
    ["le complot", "the conspiracy, the plot", "Il voit des complots partout."],
    ["la théorie du complot", "the conspiracy theory", "Les théories du complot se répandent sur internet."],
    ["la crédibilité", "credibility", "Ce journal a perdu toute crédibilité."],
    ["la notoriété", "fame, reputation", "Sa notoriété a explosé en un an."],
    ["la censure", "censorship", "Les artistes dénoncent la censure."],
    ["la liberté d'expression", "freedom of speech", "La liberté d'expression a des limites."],
    ["le porte-parole / la porte-parole", "the spokesperson (m) / (f)", "La porte-parole du gouvernement a répondu."],
    ["se répandre", "to spread", "La rumeur s'est répandue très vite."],
    ["relayer", "to pass on, to share", "Des milliers de comptes ont relayé l'information."]
  ] },
  { id: "debatMediaFR", icon: "mic", title: "Media debates", title_fr: "Le débat dans les médias", level: "B2", words: [
    ["l'animateur / l'animatrice", "the presenter, the host (m) / (f)", "L'animatrice donne la parole aux invités."],
    ["le plateau", "the TV studio (set)", "Il y a cinq invités sur le plateau."],
    ["l'invité / l'invitée", "the guest (m) / (f)", "Notre invitée est économiste."],
    ["prendre la parole", "to speak, to take the floor", "Elle a pris la parole en premier."],
    ["couper la parole", "to interrupt", "Arrêtez de me couper la parole !"],
    ["avoir le dernier mot", "to have the last word", "Il veut toujours avoir le dernier mot."],
    ["je vous l'accorde", "I grant you that", "C'est cher, je vous l'accorde."],
    ["permettez-moi de", "allow me to", "Permettez-moi de vous répondre."],
    ["revenons-en à", "let's get back to", "Revenons-en à notre sujet."],
    ["sortir du sujet", "to go off the subject", "Vous sortez du sujet."],
    ["jouer sur les mots", "to play with words", "Vous jouez sur les mots."],
    ["un faux débat", "a false debate, a non-issue", "C'est un faux débat."],
    ["le contre-argument", "the counter-argument", "Elle a préparé des contre-arguments."],
    ["réfuter", "to refute", "Il a réfuté toutes les accusations."],
    ["concéder", "to concede", "Je concède que la situation est complexe."],
    ["étayer", "to support, to back up (an argument)", "Étayez vos arguments avec des exemples."],
    ["citer", "to quote, to cite", "Citez toujours vos sources."],
    ["polémique", "controversial; controversy", "Ses propos ont suscité une polémique."]
  ] });

  W.LESSONS.push(
  {
    id: 93, level: "B2", icon: "split",
    title: "Au cas où, à supposer que: hypotheses and conditions", title_fr: "Au cas où, à supposer que : l'hypothèse et la condition",
    subtitle: "Beyond si: in case, if by any chance, supposing that, as long as, even if, and the mood each one takes.", subtitle_fr: "Au-delà de si : au cas où, si jamais, à supposer que, pour peu que, quand bien même, et le mode de chacun.",
    body: `
<h2>Each word, its mood</h2>
<table>
<tr><th>French</th><th>English</th><th>+</th><th>Example</th></tr>
<tr><td><s-fr>au cas où</s-fr></td><td>in case</td><td>conditional</td><td><s-fr>Prends un parapluie au cas où il pleuvrait.</s-fr></td></tr>
<tr><td><s-fr>en cas de</s-fr></td><td>in case of</td><td>noun</td><td><s-fr>En cas d'urgence, appelez le 112.</s-fr></td></tr>
<tr><td><s-fr>si jamais</s-fr></td><td>if by any chance</td><td>indicative</td><td><s-fr>Si jamais tu le vois, dis-lui bonjour.</s-fr></td></tr>
<tr><td><s-fr>à supposer que</s-fr>, <s-fr>en admettant que</s-fr></td><td>supposing that</td><td>subjunctive</td><td><s-fr>À supposer que l'information soit vraie, que ferait-on ?</s-fr></td></tr>
<tr><td><s-fr>pour peu que</s-fr></td><td>if only, as soon as… even slightly</td><td>subjunctive</td><td><s-fr>Pour peu qu'on le contredise, il se fâche.</s-fr></td></tr>
<tr><td><s-fr>quand bien même</s-fr></td><td>even if (formal)</td><td>conditional</td><td><s-fr>Quand bien même il s'excuserait, je ne le croirais pas.</s-fr></td></tr>
</table>
<h2>Hidden conditions</h2>
<p>The gérondif and <s-fr>sans</s-fr> can also express a condition: <s-fr>En lisant plusieurs sources, on évite les infox.</s-fr> (If you read…) · <s-fr>Sans cette vidéo, personne n'aurait rien su.</s-fr> (If it hadn't been for…)</p>
<div class="tip"><s-fr>au cas où</s-fr> is the trap: unlike <s-fr>si</s-fr>, it takes the conditional. And in speech, <s-fr>au cas où</s-fr> on its own means "just in case": <s-fr>Prends ton manteau, au cas où.</s-fr></div>
`,
    examples: [
      ["Prends un chargeur au cas où ta batterie serait vide.", "Take a charger in case your battery runs out."],
      ["En cas de doute, vérifiez la source.", "If in doubt, check the source."],
      ["Si jamais tu vois cette vidéo, ne la partage pas.", "If by any chance you see that video, don't share it."],
      ["À supposer que cette rumeur soit vraie, il faudrait réagir.", "Supposing this rumour is true, we'd have to react."],
      ["En admettant qu'il ait raison, sa méthode reste discutable.", "Even granting he's right, his method is still questionable."],
      ["Pour peu qu'une vidéo choque, elle devient virale.", "As soon as a video is in the least bit shocking, it goes viral."],
      ["Quand bien même on me paierait, je ne ferais pas cette publicité.", "Even if they paid me, I wouldn't do that advert."],
      ["En croisant les sources, on se trompe moins.", "By cross-checking sources, you make fewer mistakes."]
    ],
    quiz: [
      { q: "“In case it rains” is:", o: ["au cas où il pleut", "au cas où il pleuvrait", "au cas où il pleuve"], a: 1, ex: "au cas où + conditional." },
      { q: "“Supposing it's true” is:", o: ["à supposer que ce soit vrai", "à supposer que c'est vrai", "à supposer que ce serait vrai"], a: 0, ex: "à supposer que + subjunctive." },
      { q: "“If by any chance you see her” is:", o: ["Si jamais tu la vois", "Si jamais tu la verrais", "Si jamais tu la voies"], a: 0, ex: "si jamais + indicative." },
      { q: "“In case of fire” is:", o: ["au cas où d'incendie", "en cas d'incendie", "si jamais incendie"], a: 1, ex: "en cas de + noun." },
      { q: "“Even if he apologised, I wouldn't believe him” (formal):", o: ["Quand bien même il s'excuserait, je ne le croirais pas.", "Quand bien même il s'excuse, je ne le croirais pas.", "Quand bien même qu'il s'excuse, je ne le crois pas."], a: 0, ex: "quand bien même + conditional." }
    ]
  },
  {
    id: 94, level: "B2", icon: "newspaper",
    title: "Il aurait menti: keeping your distance from information", title_fr: "Il aurait menti : prendre ses distances avec une information",
    subtitle: "The journalistic conditional, selon, il semble que, soi-disant: say it without vouching for it.", subtitle_fr: "Le conditionnel journalistique, selon, il semble que, soi-disant : dire sans garantir.",
    body: `
<h2>The journalistic conditional</h2>
<p>Journalists use the conditional for facts that aren't confirmed. Present conditional for now or the future: <s-fr>Le ministre démissionnerait dans les prochains jours.</s-fr> Past conditional for the past: <s-fr>L'incendie aurait fait trois blessés.</s-fr> (Three people are reported to have been injured.)</p>
<h2>Naming the source</h2>
<p><s-fr>selon</s-fr> / <s-fr>d'après</s-fr> + source · <s-fr>selon nos informations</s-fr> · <s-fr>d'après une source proche du dossier</s-fr> (a source close to the case) · <s-fr>de source sûre</s-fr> (from a reliable source)</p>
<h2>Other marks of distance</h2>
<table>
<tr><th>French</th><th>Meaning</th></tr>
<tr><td><s-fr>Il semble que</s-fr> + subjunctive</td><td>it seems that (doubt): <s-fr>Il semble que l'information soit fausse.</s-fr></td></tr>
<tr><td><s-fr>Il paraît que</s-fr> + indicative</td><td>apparently, I've heard that</td></tr>
<tr><td><s-fr>présumé</s-fr>, <s-fr>supposé</s-fr></td><td>alleged, supposed: <s-fr>l'auteur présumé de l'attaque</s-fr></td></tr>
<tr><td><s-fr>prétendre que</s-fr></td><td>to claim (and we doubt it): <s-fr>Il prétend qu'il était chez lui.</s-fr></td></tr>
<tr><td><s-fr>soi-disant</s-fr></td><td>so-called, supposedly (often ironic): <s-fr>un soi-disant expert</s-fr></td></tr>
</table>
<div class="tip"><s-fr>prétendre</s-fr> is a false friend: it means "to claim", never "to pretend" (= <s-fr>faire semblant</s-fr>). <s-fr>Il prétend être médecin</s-fr> = he claims to be a doctor.</div>
`,
    examples: [
      ["Selon nos informations, l'entreprise fermerait deux usines.", "According to our information, the company is set to close two factories."],
      ["L'incendie aurait fait trois blessés.", "Three people are reported to have been injured in the fire."],
      ["D'après une source proche du dossier, le contrat aurait été signé hier.", "According to a source close to the case, the contract was signed yesterday."],
      ["Il semble que la photo ait été modifiée.", "It seems the photo has been altered."],
      ["L'auteur présumé de l'attaque a été arrêté.", "The alleged attacker has been arrested."],
      ["Il prétend qu'il n'a jamais reçu le message.", "He claims he never received the message."],
      ["Ce soi-disant expert n'a aucun diplôme.", "This so-called expert has no qualifications."],
      ["Apparemment, la vidéo date de 2015.", "Apparently, the video is from 2015."]
    ],
    quiz: [
      { q: "“The fire is reported to have injured three people”:", o: ["L'incendie a fait trois blessés, c'est sûr.", "L'incendie aurait fait trois blessés.", "L'incendie ferait trois blessés hier."], a: 1, ex: "Past conditional: unconfirmed past fact." },
      { q: "“Il prétend être riche” means:", o: ["He pretends to be rich.", "He claims to be rich.", "He wants to be rich."], a: 1, ex: "prétendre = to claim." },
      { q: "“It seems the information is false” (doubt):", o: ["Il semble que l'information est fausse.", "Il semble que l'information soit fausse.", "Il semble l'information fausse."], a: 1, ex: "il semble que + subjunctive." },
      { q: "“The alleged thief” is:", o: ["le voleur présumé", "le voleur prétendant", "le voleur supposant"], a: 0, ex: "présumé = alleged." },
      { q: "“un soi-disant expert” suggests that:", o: ["he is a real expert", "the speaker doubts he's an expert", "he is famous"], a: 1, ex: "soi-disant is often ironic." }
    ]
  },
  {
    id: 95, level: "B2", kind: "functional", icon: "mic",
    title: "Everyday French: debating on air", title_fr: "Le français de tous les jours : débattre à la radio ou à la télé",
    subtitle: "Take and keep the floor, concede a point, counter it, and bring the discussion back on track.", subtitle_fr: "Prendre et garder la parole, concéder un point, le contrer, et recentrer la discussion.",
    body: `
<h2>Taking and keeping the floor</h2>
<p><s-fr>Si je peux me permettre…</s-fr> · <s-fr>Permettez-moi de vous interrompre.</s-fr> · <s-fr>Laissez-moi terminer, s'il vous plaît.</s-fr> · <s-fr>Je n'ai pas fini.</s-fr> · <s-fr>J'y viens.</s-fr> (I'm coming to that.)</p>
<h2>Conceding, then countering</h2>
<p><s-fr>Je vous l'accorde, mais…</s-fr> · <s-fr>C'est en partie vrai ; cependant…</s-fr> · <s-fr>Vous jouez sur les mots.</s-fr> · <s-fr>C'est un faux débat.</s-fr> · <s-fr>Ce n'est pas la question.</s-fr> · <s-fr>Vos chiffres ne tiennent pas compte de…</s-fr></p>
<h2>Steering the discussion</h2>
<p><s-fr>Revenons-en à notre sujet.</s-fr> · <s-fr>Vous sortez du sujet.</s-fr> · <s-fr>Pour répondre précisément à votre question, …</s-fr> · <s-fr>En un mot, …</s-fr> · <s-fr>Si je résume votre position, …</s-fr></p>
<div class="tip">On French radio and TV, people interrupt each other a lot. It isn't always rude: it's part of the game. To defend your turn without aggression, smile and say <s-fr>Laissez-moi finir, j'y viens.</s-fr></div>
`,
    examples: [
      ["Si je peux me permettre, ce n'est pas tout à fait exact.", "If I may, that's not quite accurate."],
      ["Laissez-moi terminer, s'il vous plaît.", "Let me finish, please."],
      ["Je vous l'accorde, mais les chiffres disent autre chose.", "I grant you that, but the figures say something else."],
      ["Vous jouez sur les mots.", "You're playing with words."],
      ["Revenons-en à notre sujet : la publicité en ligne.", "Let's get back to our topic: online advertising."],
      ["Pour répondre précisément à votre question, non.", "To answer your question precisely: no."],
      ["Si je résume votre position, vous êtes contre toute régulation.", "If I sum up your position, you're against any regulation."]
    ],
    quiz: [
      { q: "“I grant you that, but…” is:", o: ["Je vous l'accorde, mais…", "Je vous accorde le, mais…", "Je l'accorde à vous, mais…"], a: 0, ex: "Je vous l'accorde." },
      { q: "“Let's get back to our topic” is:", o: ["Revenons-en à notre sujet.", "Retournons dans notre sujet.", "Rentrons au sujet."], a: 0, ex: "Revenons-en à…" },
      { q: "“J'y viens” means:", o: ["I'm coming there.", "I'm coming to that.", "I'm leaving."], a: 1, ex: "In a debate: I'm coming to that point." },
      { q: "To say someone is off topic:", o: ["Vous sortez du sujet.", "Vous partez du sujet.", "Vous quittez le sujet de."], a: 0, ex: "sortir du sujet." },
      { q: "“Vous jouez sur les mots” means:", o: ["You're playing with words.", "You're playing a word game.", "You're joking."], a: 0, ex: "jouer sur les mots." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    93: {
      gap: [["Prends un parapluie au cas où il ___. (pleuvoir)", "pleuvrait"], ["À supposer que ce ___ vrai, que ferais-tu ? (être)", "soit"], ["Si ___ tu le vois, dis-lui bonjour. (by any chance)", "jamais"], ["En ___ d'urgence, appelez le 112. (in case)", "cas"]],
      fix: [["Au cas où il pleut, on restera ici.", "Au cas où il pleuvrait, on restera ici.|S'il pleut, on restera ici.", "au cas où + conditional."], ["En admettant qu'il a raison, sa méthode est mauvaise.", "En admettant qu'il ait raison, sa méthode est mauvaise.", "en admettant que + subjunctive."]],
      task: ["Before a trip abroad, write four precautions with au cas où, en cas de, si jamais and à supposer que.", "Avant un voyage à l'étranger, écris quatre précautions avec au cas où, en cas de, si jamais et à supposer que.", "Je prends une copie de mon passeport, au cas où je le perdrais. En cas de problème, j'ai noté le numéro de l'ambassade. Si jamais mon vol est annulé, je dormirai chez une amie. Et à supposer que ma valise n'arrive pas, j'ai mis des vêtements dans mon sac à dos."]
    },
    94: {
      gap: [["L'incendie ___ fait trois blessés. (reportedly)", "aurait"], ["___ nos informations, le contrat a été signé. (according to)", "Selon"], ["Il semble que la photo ___ été modifiée. (avoir)", "ait"], ["Un ___-disant expert. (so-called)", "soi"]],
      fix: [["Il prétend d'être médecin.", "Il prétend être médecin.", "prétendre + infinitive, without de."], ["Il semble que l'information est fausse, mais on doute.", "Il semble que l'information soit fausse.", "To express doubt: il semble que + subjunctive."]],
      task: ["Write a short news item (4 sentences) about an invented event, keeping your distance from unconfirmed facts.", "Écris une courte brève (4 phrases) sur un événement inventé, en prenant tes distances avec les faits non confirmés.", "Un tableau aurait disparu hier soir du musée de la ville. Selon une source proche de l'enquête, aucune alarme n'aurait sonné. Il semble que le voleur ait connu parfaitement les lieux. La police n'a pas souhaité confirmer ces informations."]
    },
    95: {
      gap: [["Je vous l'___, mais les chiffres disent autre chose. (grant)", "accorde"], ["Laissez-moi ___, s'il vous plaît. (finish)", "terminer"], ["Revenons-en ___ notre sujet. (to)", "à"], ["Vous ___ sur les mots. (play)", "jouez"]],
      fix: [["Je vous accorde le, mais vous exagérez.", "Je vous l'accorde, mais vous exagérez.", "Pronoun order: je vous l'accorde."], ["Vous partez du sujet.", "Vous sortez du sujet.", "sortir du sujet = to go off topic."]],
      task: ["In a debate, your opponent says: Les réseaux sociaux rendent les gens plus informés que jamais. Concede a point, then counter it in four sentences.", "Dans un débat, ton adversaire dit : Les réseaux sociaux rendent les gens plus informés que jamais. Concède un point, puis contre-argumente en quatre phrases.", "Je vous l'accorde, on n'a jamais eu accès à autant d'informations. Mais avoir accès à l'information, ce n'est pas être informé. Si je peux me permettre, beaucoup de gens ne lisent que les titres. Et pour peu qu'une rumeur soit spectaculaire, elle circule plus vite que les faits."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "influenceurs", lesson: 95, level: "B2", icon: "mic", partner: "M. Garcia", role: "a marketing consultant",
    title: "Should influencers follow rules?", title_fr: "Faut-il encadrer les influenceurs ?",
    setting: "On a radio debate, you represent a consumer association. M. Garcia, a marketing consultant, thinks influencers shouldn't have any rules.", setting_fr: "Dans un débat à la radio, tu représentes une association de consommateurs. M. Garcia, consultant en marketing, pense que les influenceurs ne devraient avoir aucune règle.",
    turns: [
      { p: "Les influenceurs sont des créateurs libres. Les obliger à suivre des règles, c'est de la censure !", fr: "Influencers are free creators. Forcing them to follow rules is censorship!" },
      { y: ["Je vous l'accorde, la liberté d'expression est essentielle. Mais quand on est payé pour vanter un produit, il faut le dire.", "Je vous accorde le, la liberté d'expression est essentielle. Mais quand on est payé pour vanter un produit, il faut le dire.", "Je vous l'accorde, la liberté d'expression est essentiel. Mais quand on est payé pour vanter un produit, il faut le dire."], fr: "I grant you that freedom of speech is essential. But when you're paid to promote a product, you have to say so.", why: "Je vous l'accorde; la liberté → essentielle." },
      { p: "Mais tout le monde sait bien que c'est de la publicité !", fr: "But everyone knows it's advertising!" },
      { y: ["Pas forcément. À supposer que les adultes le sachent, les plus jeunes, eux, ne font pas toujours la différence.", "Pas forcément. À supposer que les adultes le savent, les plus jeunes, eux, ne font pas toujours la différence.", "Pas forcément. À supposer que les adultes le sauraient, les plus jeunes, eux, ne font pas toujours la différence."], fr: "Not necessarily. Supposing adults know, younger people don't always see the difference.", why: "à supposer que + subjunctive (sachent)." },
      { p: "Vous exagérez. Et puis, de toute façon, les marques…", fr: "You're exaggerating. And anyway, the brands…" },
      { y: ["Laissez-moi terminer, s'il vous plaît. Au cas où un produit serait dangereux, qui serait responsable ?", "Laissez-moi terminer, s'il vous plaît. Au cas où un produit est dangereux, qui serait responsable ?", "Laissez-moi terminer, s'il vous plaît. Au cas où un produit soit dangereux, qui serait responsable ?"], fr: "Let me finish, please. In case a product were dangerous, who would be responsible?", why: "au cas où + conditional." },
      { p: "Les marques, évidemment. Pas les influenceurs.", fr: "The brands, of course. Not the influencers." },
      { y: ["C'est un faux débat : les deux devraient l'être. D'ailleurs, la France a adopté une loi sur ce sujet en 2023.", "C'est une fausse débat : les deux devraient l'être. D'ailleurs, la France a adopté une loi sur ce sujet en 2023.", "C'est un faux débat : les deux devraient l'être. D'ailleurs, la France a adopté une loi sur ce sujet depuis 2023."], fr: "That's a false debate: both should be. In fact, France passed a law on this subject in 2023.", why: "un débat → un faux débat; en + a year for a date." },
      { p: "Bon. Je reconnais qu'un minimum de transparence ne ferait pas de mal.", fr: "Well. I admit a minimum of transparency wouldn't hurt." },
      { y: ["Si je résume votre position, vous êtes donc d'accord pour que les partenariats soient clairement signalés ?", "Si je résume votre position, vous êtes donc d'accord pour que les partenariats sont clairement signalés ?", "Si je résume votre position, vous êtes donc d'accord pour les partenariats soient clairement signalés ?"], fr: "If I sum up your position, you agree that paid partnerships should be clearly flagged?", why: "pour que + subjunctive (soient)." }
    ] }
  );

  W.READINGS.push({
    id: "faussesnouvelles", level: "B2", icon: "eye", title: "Pourquoi les fausses nouvelles vont-elles si vite ?", genre: "Science article",
    intro: "A fake story can travel around the world in a few hours. What does research say, and what can we do? The journalistic conditional and hypotheses.",
    intro_fr: "Une fausse nouvelle peut faire le tour du monde en quelques heures. Que dit la recherche, et que faire ? Le conditionnel journalistique et l'hypothèse.",
    paragraphs: [
      { en: "Pourquoi une fausse information fait-elle parfois le tour du monde en quelques heures, alors qu'un démenti passe presque inaperçu ? La question préoccupe les chercheurs depuis plusieurs années.", fr: "Why does a false story sometimes travel around the world in a few hours, while a denial goes almost unnoticed? The question has concerned researchers for several years." },
      { en: "En 2018, une équipe de chercheurs a publié dans la revue Science une étude portant sur des dizaines de milliers d'histoires partagées sur Twitter entre 2006 et 2017. Résultat : les fausses informations se diffusaient plus vite, plus loin et plus largement que les vraies.", fr: "In 2018, a team of researchers published a study in the journal Science covering tens of thousands of stories shared on Twitter between 2006 and 2017. The result: false information spread faster, further and more widely than true information." },
      { en: "Selon les auteurs, ce ne seraient pas les robots les principaux responsables, mais bien les humains. Les fausses nouvelles seraient plus surprenantes et susciteraient davantage d'émotions, comme la peur ou le dégoût, ce qui nous pousserait à les partager.", fr: "According to the authors, bots aren't the main culprits: humans are. False news is apparently more surprising and arouses more emotions, such as fear or disgust, which pushes us to share it." },
      { en: "Les algorithmes joueraient aussi un rôle : en mettant en avant les contenus qui provoquent le plus de réactions, ils favoriseraient, sans le vouloir, les messages les plus choquants. Et à supposer qu'on ne voie que des contenus qui confirment ce qu'on pense déjà, on finit par vivre dans une bulle de filtres.", fr: "Algorithms may also play a part: by highlighting the content that provokes the most reactions, they apparently favour, without meaning to, the most shocking messages. And supposing we only see content that confirms what we already think, we end up living in a filter bubble." },
      { en: "Que faire ? Les spécialistes conseillent de prendre quelques secondes avant de partager : au cas où l'information serait fausse, mieux vaut ne pas la relayer. Pour peu qu'on prenne l'habitude de vérifier la source, on devient beaucoup plus difficile à manipuler.", fr: "What can we do? Specialists advise taking a few seconds before sharing: in case the information is false, it's better not to pass it on. As long as you get into the habit of checking the source, you become much harder to manipulate." }
    ],
    glossary: { "démenti": "denial", "inaperçu": "unnoticed", "préoccupe": "concerns, worries", "revue": "journal, magazine", "portant": "dealing with (porter sur)", "diffusaient": "spread", "surprenantes": "surprising", "susciteraient": "would arouse", "dégoût": "disgust", "pousserait": "would push", "favoriseraient": "would favour", "choquants": "shocking" },
    questions: [
      { q: "Qu'a montré l'étude publiée en 2018 ?", o: ["Les vraies informations se diffusent plus vite.", "Les fausses informations se diffusaient plus vite et plus loin.", "Twitter supprime les fausses informations."], a: 1 },
      { q: "Selon les auteurs, qui sont les principaux responsables ?", o: ["Les robots", "Les journalistes", "Les humains"], a: 2 },
      { q: "Pourquoi partage-t-on les fausses nouvelles ?", o: ["Elles sont plus surprenantes et suscitent des émotions.", "Elles sont plus courtes.", "Elles sont payantes."], a: 0 },
      { q: "Quel rôle joueraient les algorithmes ?", o: ["Ils bloqueraient les messages choquants.", "Ils favoriseraient les contenus qui provoquent le plus de réactions.", "Aucun rôle"], a: 1 },
      { q: "Que conseillent les spécialistes ?", o: ["Partager tout de suite", "Ne plus utiliser internet", "Prendre quelques secondes et vérifier la source avant de partager"], a: 2 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-b2-7", unit: "b2-7", level: "B2", icon: "radio",
    title: "La revue de presse", title_fr: "La revue de presse",
    context: "On a morning radio show, Florence reviews the (fictional) newspapers of the day.", context_fr: "Dans une matinale de radio, Florence présente la revue de presse du jour (journaux fictifs).",
    words: [["la revue de presse", "the press review"], ["renoncer à", "to give up"], ["faute de", "for lack of"], ["la puce électronique", "the microchip"], ["n'en pas revenir", "to be unable to believe it"]],
    lines: [["Florence", "Bonjour à tous, il est huit heures, voici la revue de presse. On commence avec Le Quotidien du Sud, qui affirme que la ville de Montval aurait renoncé à son projet de tramway, faute de financement. Le maire, interrogé, n'a pas souhaité réagir.", "fr-FR"], ["Florence", "Dans L'Écho de l'Ouest, il est question du sommeil des adolescents. Selon une enquête menée dans les lycées de la région, beaucoup d'élèves manqueraient de sommeil en semaine. Le journal cite une médecin qui recommande de couper les écrans une heure avant le coucher.", "fr-FR"], ["Florence", "Enfin, une histoire étonnante dans La Gazette de Bretagne : un chien perdu depuis trois ans aurait été retrouvé à deux cents kilomètres de chez lui, grâce à sa puce électronique. Ses propriétaires n'en reviennent pas.", "fr-FR"], ["Florence", "Le journal se moque d'ailleurs d'un soi-disant expert qui prétendait sur les réseaux sociaux que le chien avait traversé la mer à la nage.", "fr-FR"], ["Florence", "Voilà pour la presse de ce matin. Rendez-vous demain, même heure.", "fr-FR"]],
    gist: ["De quoi s'agit-il ?", ["D'une revue de presse à la radio", "D'une publicité", "D'un débat politique"]],
    detail: [["Qu'aurait fait la ville de Montval ?", ["Renoncé à son projet de tramway", "Construit un tramway", "Élu un nouveau maire"]], ["Que recommande la médecin citée ?", ["Couper les écrans une heure avant le coucher", "Boire du café", "Se coucher à minuit"]], ["Comment le chien a-t-il été retrouvé ?", ["Grâce à sa puce électronique", "Grâce à une affiche", "Par hasard, sur une plage"]], ["Que prétendait le soi-disant expert ?", ["Que le chien avait traversé la mer à la nage", "Que le chien était mort", "Que le chien était un loup"]]],
    decode: ["aurait renoncé à son projet de tramway", "un soi-disant expert qui prétendait"],
    tip: "In a press review, the conditional and selon signal reported, unconfirmed facts. Notice which facts the journalist presents as certain, and which ones as reported.", tip_fr: "Dans une revue de presse, le conditionnel et selon signalent des faits rapportés, non confirmés. Repère ce que la journaliste présente comme sûr, et ce qu'elle présente comme rapporté."
  }]);

  W.LEXIS = W.LEXIS || {};
  W.LEXIS["b2-7"] = {
    colloc: [
      ["diffuser une information", "to spread a piece of news", "La radio a diffusé l'information à huit heures.", "diffusé", ["versé", "jeté"]],
      ["démentir une rumeur", "to deny a rumour", "Le ministère a démenti la rumeur.", "démenti", ["refusé", "défait"]],
      ["recouper les sources", "to cross-check sources", "Un bon journaliste recoupe toujours ses sources.", "recoupe", ["coupe", "plie"]],
      ["faire le buzz", "to go viral, to create a buzz", "Sa vidéo a fait le buzz en une nuit.", "fait", ["pris", "donné"]],
      ["tenir des propos", "to make remarks", "Il a tenu des propos choquants.", "tenu", ["fait", "dit"]],
      ["lancer une rumeur", "to start a rumour", "Quelqu'un a lancé une rumeur sur internet.", "lancé", ["jeté", "tiré"]],
      ["porter atteinte à", "to harm, to undermine", "Ces mensonges portent atteinte à sa réputation.", "portent", ["font", "mettent"]],
      ["faire la une", "to make the headlines", "L'affaire fait la une de tous les journaux.", "fait", ["prend", "tient"]],
      ["susciter la polémique", "to stir up controversy", "Cette publicité a suscité la polémique.", "suscité", ["levé", "monté"]],
      ["jouer sur les émotions", "to play on emotions", "Les fausses nouvelles jouent sur les émotions.", "jouent", ["font", "tirent"]]
    ],
    wf: [
      ["La ___ circule vite sur les réseaux. (INFORMER)", "désinformation"],
      ["Ce journal a perdu toute ___. (CRÉDIBLE)", "crédibilité"],
      ["Cette photo est une ___ grossière. (MANIPULER)", "manipulation"],
      ["Les artistes dénoncent la ___. (CENSURER)", "censure"],
      ["Elle a une grande ___ sur les jeunes. (INFLUENCER)", "influence"],
      ["Cette rumeur est ___ : personne ne peut la vérifier. (VÉRIFIER)", "invérifiable"],
      ["Les citoyens réclament plus de ___. (TRANSPARENT)", "transparence"],
      ["Un journaliste doit viser l'___. (OBJECTIF)", "objectivité"]
    ],
    kwt: [
      ["Emporte un chargeur, car ta batterie sera peut-être vide.", "CAS", "Emporte un chargeur ___ batterie serait vide.", "au cas où ta"],
      ["On dit que le ministre a démissionné, mais ce n'est pas confirmé.", "AURAIT", "Le ministre ___, mais ce n'est pas confirmé.", "aurait démissionné"],
      ["Il affirme qu'il était chez lui, mais personne ne le croit.", "PRÉTEND", "Il ___ chez lui.", "prétend qu'il était|prétend avoir été"],
      ["Imaginons que la vidéo soit vraie : que ferait-on ?", "SUPPOSER", "À ___ vraie, que ferait-on ?", "supposer que la vidéo soit"],
      ["Même s'il s'excusait, je ne le croirais pas.", "QUAND", "___ s'excuserait, je ne le croirais pas.", "Quand bien même il"],
      ["Je reconnais que vous avez raison sur ce point.", "ACCORDE", "Sur ce point, je ___.", "vous l'accorde"]
    ],
    idioms: [
      ["prendre pour argent comptant", "croire sans vérifier", "to take at face value", "Ne prends pas tout ce que tu lis pour argent comptant.", "pour argent comptant"],
      ["c'est du réchauffé", "c'est une vieille information présentée comme nouvelle", "it's old news", "Cette histoire ? C'est du réchauffé.", "C'est du réchauffé"],
      ["faire des vagues", "provoquer des réactions, un scandale", "to make waves", "Son article a fait des vagues.", "fait des vagues"],
      ["monter en épingle", "exagérer l'importance d'un fait", "to blow out of proportion", "Les médias ont monté l'affaire en épingle.", "monté l'affaire en épingle"],
      ["mener en bateau", "tromper quelqu'un", "to take someone for a ride", "Il nous a menés en bateau pendant des mois.", "menés en bateau"],
      ["un bobard", "un mensonge, une fausse information", "a fib, a tall story", "Encore un bobard qui circule sur internet !", "un bobard"],
      ["la langue de bois", "un discours vague qui évite de répondre", "waffle, doublespeak", "Le porte-parole a répondu avec la langue de bois habituelle.", "la langue de bois"],
      ["défrayer la chronique", "faire beaucoup parler de soi dans les médias", "to hit the headlines", "Cette affaire a défrayé la chronique tout l'été.", "défrayé la chronique"]
    ]
  };

  W.PROMPTS.push({ id: "fr-b2-7", level: "B2", q: "Comment fais-tu pour savoir si une information est fiable ? Raconte une fois où tu as cru une fausse information.", fr: "How do you know whether a piece of information is reliable? Tell about a time you believed a false story.", time: 180,
    phrases: ["Avant de partager, je…", "Au cas où…", "Selon…", "Il semble que…", "À supposer que…"],
    model: "Avant de partager une information, je regarde d'abord qui l'a publiée, puis je vérifie si d'autres médias en parlent. Au cas où l'information serait fausse, je préfère attendre. Pourtant, il y a deux ans, j'ai cru une fausse nouvelle : selon un message très partagé, un célèbre chanteur serait mort. J'ai envoyé le message à toute ma famille… avant de découvrir que c'était un bobard ! Depuis, à supposer qu'une nouvelle me paraisse incroyable, je prends toujours le temps de vérifier." });

  W.WRITING_GUIDE["b2-7"] = { genre: "A reader's letter (DELF B2)", genre_fr: "Un courrier des lecteurs (DELF B2)",
    plan: [["Refer to the article and give your general position.", "Fais référence à l'article et donne ta position générale."], ["Concede the strong points of the opposite view, keeping your distance from figures.", "Concède les points forts de l'avis contraire, en prenant tes distances avec les chiffres."], ["Develop your counter-arguments with hypotheses.", "Développe tes contre-arguments avec des hypothèses."], ["Propose realistic solutions.", "Propose des solutions réalistes."], ["Conclude and close formally.", "Conclus et termine de façon formelle."]],
    marks: [["Selon plusieurs enquêtes, de nombreux adolescents s'informeraient", "the conditional of distance", "le conditionnel de distance"], ["À supposer qu'un influenceur relaie", "à supposer que + subjunctive", "à supposer que + subjonctif"], ["Il ne prétend pas", "prétendre (to claim)", "prétendre (affirmer)"], ["Quand bien même on le ferait", "quand bien même + conditional", "quand bien même + conditionnel"], ["au cas où les abonnés ne la reconnaîtraient pas", "au cas où + conditional", "au cas où + conditionnel"], ["pour que chacun apprenne", "pour que + subjunctive", "pour que + subjonctif"]] };

  W.COURSE.push({ id: "b2-7", level: "B2", icon: "eye", title: "Media and influence", title_fr: "Information et influence",
    intro: "In this unit, you'll analyse how information and influence work: advanced hypotheses (au cas où, à supposer que, quand bien même), the conditional of distance used by journalists, and the French you need to hold your own in a radio or TV debate.",
    intro_fr: "Dans cette unité, tu vas analyser le fonctionnement de l'information et de l'influence : les hypothèses avancées (au cas où, à supposer que, quand bien même), le conditionnel de distance des journalistes, et le français qu'il faut pour tenir ta place dans un débat à la radio ou à la télévision.",
    can: ["Express hypotheses and conditions with the right mood", "Report unconfirmed information and keep your distance from it", "Spot reported facts in a press review", "Take the floor, concede and counter in a debate", "Write a reader's letter on a media question"],
    can_fr: ["Exprimer l'hypothèse et la condition avec le bon mode", "Rapporter une information non confirmée et prendre tes distances", "Repérer les faits rapportés dans une revue de presse", "Prendre la parole, concéder et contre-argumenter dans un débat", "Écrire un courrier des lecteurs sur une question de médias"],
    lessons: [93, 94, 95], vocab: ["influenceFR", "debatMediaFR"], reading: "faussesnouvelles", prompt: "fr-b2-7",
    writing: { task: "A magazine article claims that influencers should follow the same rules as journalists. Write a reader's letter (250-280 words) giving your nuanced opinion and realistic proposals.", task_fr: "Un article de magazine affirme que les influenceurs devraient être soumis aux mêmes règles que les journalistes. Écris un courrier des lecteurs (250 à 280 mots) pour donner ton avis nuancé et des propositions réalistes.", words: "250-280",
      tips: ["Votre dernier numéro affirmait que…", "Certes, …", "À supposer que…", "Toutefois, …", "En définitive, …"],
      checklist: ["I referred to the article", "I used the conditional to keep my distance", "I used at least two hypothesis structures", "I made realistic proposals", "I wrote between 250 and 280 words"],
      model: "Influenceurs et journalistes : des règles pour tous ?\n\nMadame, Monsieur,\n\nVotre dernier numéro affirmait que les influenceurs devraient être soumis aux mêmes règles que les journalistes. Je partage en partie cet avis, mais il me semble nécessaire de le nuancer.\n\nCertes, les influenceurs exercent aujourd'hui une influence considérable, notamment sur les plus jeunes. Selon plusieurs enquêtes, de nombreux adolescents s'informeraient d'abord sur les réseaux sociaux. À supposer qu'un influenceur relaie une fausse information, ses abonnés risquent de la croire sans la vérifier. Il est donc légitime d'exiger de lui une certaine responsabilité, en particulier lorsqu'il est payé pour présenter un produit.\n\nToutefois, un influenceur n'est pas un journaliste. Il ne prétend pas, en général, enquêter ou vérifier des faits : il partage des goûts, des expériences, parfois des opinions. Beaucoup d'entre eux n'ont d'ailleurs aucune formation dans ce domaine. Lui imposer une déontologie journalistique reviendrait à confondre deux métiers. Quand bien même on le ferait, comment contrôler des millions de comptes ?\n\nÀ mon sens, la solution passe par deux mesures plus réalistes. D'une part, toute publicité devrait être signalée de façon claire et visible, au cas où les abonnés ne la reconnaîtraient pas. D'autre part, l'école pourrait développer davantage l'esprit critique, pour que chacun apprenne à distinguer une information d'une opinion. Ces deux mesures ne coûteraient presque rien et pourraient être appliquées rapidement.\n\nEn définitive, plutôt que de transformer les influenceurs en journalistes, apprenons à leurs abonnés à les lire avec recul.\n\nVeuillez agréer, Madame, Monsieur, mes salutations distinguées.\n\nSam Duval" } });
})();
