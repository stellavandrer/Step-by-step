/* Cours de français, unité A1-7 « Free time and plans / Loisirs et projets », dernière unité du A1 : faire et
   jouer, la fréquence, le futur proche, pouvoir, vouloir et devoir, inviter, accepter et refuser, la météo.
   Personnages fictifs, prénoms français, lieux non nommés. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "loisirsFR", icon: "bike", title: "Free time and hobbies", title_fr: "Le temps libre et les loisirs", level: "A1", words: [
    ["le temps libre", "free time", "Qu'est-ce que tu fais pendant ton temps libre ?"],
    ["faire du sport", "to do sport", "Je fais du sport trois fois par semaine."],
    ["le foot", "football, soccer", "Mon fils joue au foot le mercredi."],
    ["la natation", "swimming", "Je fais de la natation à la piscine."],
    ["la randonnée", "hiking; a hike", "On fait une randonnée en montagne."],
    ["la danse", "dancing", "Elle fait de la danse depuis l'âge de six ans."],
    ["la guitare", "the guitar", "Je joue de la guitare."],
    ["le piano", "the piano", "Ma fille fait du piano."],
    ["la lecture", "reading", "La lecture, c'est ma passion."],
    ["le jeu vidéo", "the video game", "Il joue aux jeux vidéo le soir."],
    ["le jeu de société", "the board game", "On joue à un jeu de société ?"],
    ["le dessin", "drawing", "Je fais du dessin le dimanche."],
    ["le jardinage", "gardening", "Mon grand-père adore le jardinage."],
    ["la piscine", "the swimming pool", "La piscine est ouverte le soir."],
    ["sortir", "to go out", "Ce soir, on sort avec des amis."],
    ["se promener", "to go for a walk", "Le dimanche, nous nous promenons au parc."],
    ["voyager", "to travel", "J'adore voyager."],
    ["s'amuser", "to have fun", "Amusez-vous bien !"],
    ["jouer", "to play", "Les enfants jouent dans le jardin."],
    ["une fois par semaine", "once a week", "Je vais à la piscine une fois par semaine."]
  ] },
  { id: "meteoFR", icon: "cloud-sun", title: "Weather and plans", title_fr: "La météo et les projets", level: "A1", words: [
    ["il fait beau", "the weather's nice", "Il fait beau, on va au parc ?"],
    ["il fait chaud", "it's hot", "En été, il fait chaud."],
    ["il fait froid", "it's cold", "Prends un manteau, il fait froid !"],
    ["il pleut", "it's raining", "Il pleut, on reste à la maison."],
    ["il neige", "it's snowing", "Il neige à la montagne."],
    ["il y a du vent", "it's windy", "Il y a du vent sur la plage."],
    ["il y a du soleil", "it's sunny", "Il y a du soleil cet après-midi."],
    ["le temps", "the weather; time", "Quel temps fait-il ?"],
    ["la météo", "the weather forecast", "Qu'est-ce que dit la météo ?"],
    ["ce soir", "this evening, tonight", "Ce soir, je vais au cinéma."],
    ["ce week-end", "this weekend", "Tu fais quoi ce week-end ?"],
    ["la semaine prochaine", "next week", "La semaine prochaine, je pars en vacances."],
    ["l'année prochaine", "next year", "L'année prochaine, je vais apprendre l'italien."],
    ["bientôt", "soon", "À bientôt !"],
    ["parfois", "sometimes", "Parfois, je joue du piano."],
    ["les vacances", "holidays, vacation (always plural)", "Bonnes vacances !"],
    ["la plage", "the beach", "On va à la plage cet été."],
    ["la montagne", "the mountains", "Nous partons à la montagne en février."]
  ] });

  W.LESSONS.push(
  {
    id: 21, level: "A1", icon: "bike",
    title: "Faire du sport, jouer au foot: faire and jouer", title_fr: "Faire du sport, jouer au foot : faire et jouer",
    subtitle: "Two verbs for your hobbies, each with its own little word after it.", subtitle_fr: "Deux verbes pour tes loisirs, chacun avec son petit mot après lui.",
    body: `
<h2>Faire (to do, to make): irregular</h2>
<table>
<tr><th>French</th><th>English</th></tr>
<tr><td><s-fr>je fais</s-fr> · <s-fr>tu fais</s-fr></td><td>I do · you do</td></tr>
<tr><td><s-fr>il fait</s-fr> · <s-fr>elle fait</s-fr> · <s-fr>on fait</s-fr></td><td>he, she does · we do</td></tr>
<tr><td><s-fr>nous faisons</s-fr></td><td>we do (the ai sounds like "uh")</td></tr>
<tr><td><s-fr>vous faites</s-fr></td><td>you do (not "vous faisez")</td></tr>
<tr><td><s-fr>ils font</s-fr> · <s-fr>elles font</s-fr></td><td>they do</td></tr>
</table>
<h2>Faire du, de la, des + an activity</h2>
<p>For sports and activities in general, French says "do some": <s-fr>Je fais du sport.</s-fr> · <s-fr>Elle fait de la natation.</s-fr> · <s-fr>On fait du vélo.</s-fr> · <s-fr>Il fait de la musique.</s-fr> In the negative: <s-fr>Je ne fais pas de sport.</s-fr></p>
<h2>Jouer à or jouer de?</h2>
<table>
<tr><th></th><th>Rule</th><th>Examples</th></tr>
<tr><td><s-fr>jouer à</s-fr></td><td>a sport, a game</td><td><s-fr>jouer au foot</s-fr> · <s-fr>jouer au tennis</s-fr> · <s-fr>jouer aux cartes</s-fr></td></tr>
<tr><td><s-fr>jouer de</s-fr></td><td>a musical instrument</td><td><s-fr>jouer du piano</s-fr> · <s-fr>jouer de la guitare</s-fr></td></tr>
</table>
<h2>How often?</h2>
<p><s-fr>tous les jours</s-fr> (every day) · <s-fr>le samedi</s-fr> (on Saturdays) · <s-fr>une fois par semaine</s-fr> (once a week) · <s-fr>souvent</s-fr> (often) · <s-fr>parfois</s-fr> (sometimes) · <s-fr>ne… jamais</s-fr> (never). Short words like <s-fr>souvent</s-fr> come after the verb: <s-fr>Je vais souvent à la piscine.</s-fr></p>
<div class="tip"><s-fr>faire</s-fr> appears in many everyday expressions: <s-fr>faire les courses</s-fr> (to do the shopping), <s-fr>faire la cuisine</s-fr> (to cook), <s-fr>faire une promenade</s-fr> (to go for a walk), and the weather: <s-fr>Il fait beau.</s-fr></div>
`,
    examples: [
      ["Qu'est-ce que tu fais le week-end ?", "What do you do at the weekend?"],
      ["Je fais du sport trois fois par semaine.", "I do sport three times a week."],
      ["Nous faisons de la randonnée en montagne.", "We go hiking in the mountains."],
      ["Vous faites de la musique ?", "Do you play music?"],
      ["Ils jouent au foot le mercredi.", "They play football on Wednesdays."],
      ["Ma sœur joue du piano.", "My sister plays the piano."],
      ["Je ne fais jamais de sport le dimanche.", "I never do sport on Sundays."],
      ["Je vais souvent à la piscine.", "I often go to the pool."]
    ],
    quiz: [
      { q: "Complete: “Vous ___ du sport ?”", o: ["faisez", "faites", "font"], a: 1, ex: "vous faites (irregular)." },
      { q: "Complete: “Elle fait ___ natation.”", o: ["du", "de la", "à la"], a: 1, ex: "natation is feminine: de la natation." },
      { q: "“He plays football” is:", o: ["Il joue du foot.", "Il joue au foot.", "Il fait au foot."], a: 1, ex: "A sport: jouer à (au)." },
      { q: "“I play the guitar” is:", o: ["Je joue à la guitare.", "Je joue de la guitare.", "Je joue la guitare."], a: 1, ex: "An instrument: jouer de." },
      { q: "“I don't do any sport” is:", o: ["Je ne fais pas du sport.", "Je ne fais pas de sport.", "Je fais pas sport."], a: 1, ex: "After a negative: de." }
    ]
  },
  {
    id: 22, level: "A1", icon: "calendar-clock",
    title: "Je vais partir: the near future", title_fr: "Je vais partir : le futur proche",
    subtitle: "Aller + an infinitive: the easiest way to talk about the future.", subtitle_fr: "Aller + un infinitif : la façon la plus simple de parler du futur.",
    body: `
<h2>Aller + infinitive</h2>
<p>Like "going to" in English: the present of <s-fr>aller</s-fr>, then the verb in the infinitive.</p>
<table>
<tr><th>French</th><th>English</th></tr>
<tr><td><s-fr>Je vais partir.</s-fr></td><td>I'm going to leave.</td></tr>
<tr><td><s-fr>Tu vas voir !</s-fr></td><td>You'll see!</td></tr>
<tr><td><s-fr>Il va pleuvoir.</s-fr></td><td>It's going to rain.</td></tr>
<tr><td><s-fr>Nous allons visiter le musée.</s-fr></td><td>We're going to visit the museum.</td></tr>
<tr><td><s-fr>Vous allez adorer !</s-fr></td><td>You're going to love it!</td></tr>
<tr><td><s-fr>Ils vont arriver à huit heures.</s-fr></td><td>They're going to arrive at eight.</td></tr>
</table>
<p>In everyday French, this near future is used for almost all plans, near or far: <s-fr>L'année prochaine, je vais apprendre l'italien.</s-fr></p>
<h2>The negative</h2>
<p><s-fr>ne… pas</s-fr> goes around <s-fr>aller</s-fr>: <s-fr>Je ne vais pas travailler demain.</s-fr> With a reflexive verb, the pronoun stays with the infinitive: <s-fr>Je vais me coucher.</s-fr></p>
<h2>When?</h2>
<p><s-fr>ce soir</s-fr> (tonight) · <s-fr>demain</s-fr> (tomorrow) · <s-fr>ce week-end</s-fr> · <s-fr>la semaine prochaine</s-fr> (next week) · <s-fr>le mois prochain</s-fr> (next month) · <s-fr>l'année prochaine</s-fr> (next year) · <s-fr>bientôt</s-fr> (soon) · <s-fr>dans deux jours</s-fr> (in two days)</p>
<div class="tip">For something happening very soon, French often uses the plain present: <s-fr>Je pars demain.</s-fr> (I'm leaving tomorrow.) · <s-fr>On se voit ce soir ?</s-fr> (Shall we meet tonight?)</div>
`,
    examples: [
      ["Je vais faire les courses cet après-midi.", "I'm going to do the shopping this afternoon."],
      ["Il va faire beau demain.", "The weather's going to be nice tomorrow."],
      ["Nous allons partir en vacances la semaine prochaine.", "We're going on holiday next week."],
      ["Tu vas venir à la fête ?", "Are you going to come to the party?"],
      ["Je ne vais pas travailler ce week-end.", "I'm not going to work this weekend."],
      ["Ils vont se marier en juin.", "They're going to get married in June."],
      ["L'année prochaine, je vais apprendre l'italien.", "Next year, I'm going to learn Italian."],
      ["Dans deux jours, c'est mon anniversaire !", "In two days, it's my birthday!"]
    ],
    quiz: [
      { q: "Complete: “Demain, je ___ partir.”", o: ["vais", "va", "vas"], a: 0, ex: "je vais + infinitive." },
      { q: "“It's going to rain” is:", o: ["Il va pleut.", "Il va pleuvoir.", "Il pleuvoir va."], a: 1, ex: "aller + infinitive: va pleuvoir." },
      { q: "“I'm not going to work” is:", o: ["Je vais pas ne travailler.", "Je ne vais pas travailler.", "Je ne vais travailler pas."], a: 1, ex: "ne… pas around aller." },
      { q: "“Next week” is:", o: ["la semaine dernière", "la semaine prochaine", "la prochaine semaine passée"], a: 1, ex: "prochain(e) = next; dernier / dernière = last." },
      { q: "Complete: “Nous ___ visiter Paris.”", o: ["allons", "allez", "vont"], a: 0, ex: "nous allons." }
    ]
  },
  {
    id: 23, level: "A1", kind: "functional", icon: "party-popper",
    title: "Everyday French: inviting, accepting and saying no", title_fr: "Le français de tous les jours : inviter, accepter et refuser",
    subtitle: "Pouvoir, vouloir, devoir: the three verbs you need to make plans with friends.", subtitle_fr: "Pouvoir, vouloir, devoir : les trois verbes qu'il faut pour faire des projets entre amis.",
    body: `
<h2>Pouvoir, vouloir, devoir</h2>
<table>
<tr><th></th><th>pouvoir (can)</th><th>vouloir (to want)</th><th>devoir (must, to have to)</th></tr>
<tr><td>je</td><td><s-fr>peux</s-fr></td><td><s-fr>veux</s-fr></td><td><s-fr>dois</s-fr></td></tr>
<tr><td>tu</td><td><s-fr>peux</s-fr></td><td><s-fr>veux</s-fr></td><td><s-fr>dois</s-fr></td></tr>
<tr><td>il, elle, on</td><td><s-fr>peut</s-fr></td><td><s-fr>veut</s-fr></td><td><s-fr>doit</s-fr></td></tr>
<tr><td>nous</td><td><s-fr>pouvons</s-fr></td><td><s-fr>voulons</s-fr></td><td><s-fr>devons</s-fr></td></tr>
<tr><td>vous</td><td><s-fr>pouvez</s-fr></td><td><s-fr>voulez</s-fr></td><td><s-fr>devez</s-fr></td></tr>
<tr><td>ils, elles</td><td><s-fr>peuvent</s-fr></td><td><s-fr>veulent</s-fr></td><td><s-fr>doivent</s-fr></td></tr>
</table>
<p>All three are followed by an infinitive: <s-fr>Je peux venir.</s-fr> · <s-fr>Tu veux sortir ?</s-fr> · <s-fr>Je dois travailler.</s-fr></p>
<h2>Inviting</h2>
<p><s-fr>Tu veux venir au cinéma samedi ?</s-fr> · <s-fr>Ça te dit d'aller à la plage ?</s-fr> (Do you fancy going to the beach?) · <s-fr>On va au restaurant ce soir ?</s-fr> · <s-fr>Vous voulez dîner chez nous ?</s-fr></p>
<h2>Accepting</h2>
<p><s-fr>Avec plaisir !</s-fr> · <s-fr>Bonne idée !</s-fr> · <s-fr>Oui, super !</s-fr> · <s-fr>Volontiers !</s-fr> (gladly) · <s-fr>D'accord, à quelle heure ?</s-fr></p>
<h2>Saying no politely</h2>
<p>Thank the person, say why, and suggest another time: <s-fr>Merci, mais je ne peux pas : je dois travailler.</s-fr> · <s-fr>Dommage, samedi je ne suis pas libre.</s-fr> (What a shame…) · <s-fr>Une autre fois, peut-être ?</s-fr> (Another time, maybe?)</p>
<div class="tip"><s-fr>Je voudrais</s-fr> (I would like) is the polite form of <s-fr>je veux</s-fr>. With friends, <s-fr>je veux bien</s-fr> means "yes, I'd like that": <s-fr>Un café ? — Oui, je veux bien !</s-fr></div>
`,
    examples: [
      ["Tu veux venir au cinéma samedi ?", "Do you want to come to the cinema on Saturday?"],
      ["Ça te dit d'aller à la plage ?", "Do you fancy going to the beach?"],
      ["Avec plaisir ! À quelle heure ?", "I'd love to! What time?"],
      ["Merci, mais je ne peux pas : je dois travailler.", "Thanks, but I can't: I have to work."],
      ["Dommage ! Une autre fois, peut-être ?", "What a shame! Another time, maybe?"],
      ["Nous pouvons nous retrouver devant la gare.", "We can meet in front of the station."],
      ["Un café ? — Oui, je veux bien.", "A coffee? — Yes, please."]
    ],
    quiz: [
      { q: "Complete: “Je ne ___ pas venir, je dois travailler.”", o: ["peux", "veux", "dois"], a: 0, ex: "pouvoir = can: je ne peux pas." },
      { q: "Complete: “Ils ___ partir tôt.” (devoir)", o: ["doivent", "devent", "doient"], a: 0, ex: "ils doivent." },
      { q: "“Do you fancy going to the beach?” is:", o: ["Ça te dit d'aller à la plage ?", "Tu dis d'aller à la plage ?", "Ça te va la plage ?"], a: 0, ex: "Ça te dit de + infinitive? = Do you fancy…?" },
      { q: "To refuse politely, you say:", o: ["Non.", "Merci, mais je ne peux pas : je dois travailler.", "Je ne veux pas."], a: 1, ex: "Thank, say why, and maybe suggest another time." },
      { q: "“Oui, je veux bien” means:", o: ["Yes, please / I'd like that.", "Yes, I want it well.", "I don't know."], a: 0, ex: "Je veux bien = yes, I'd like that." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    21: {
      gap: [["Vous ___ du sport ? (faire)", "faites"], ["Nous ___ de la randonnée. (faire)", "faisons"], ["Il joue ___ foot. (to the)", "au"], ["Je joue ___ piano. (of the)", "du"]],
      fix: [["Vous faisez de la musique ?", "Vous faites de la musique ?", "faire is irregular: vous faites."], ["Elle joue au piano.", "Elle joue du piano.", "An instrument: jouer de (du piano)."]],
      task: ["Write about your free time: what you do, how often, and what you never do.", "Écris sur ton temps libre : ce que tu fais, à quelle fréquence, et ce que tu ne fais jamais.", "Je fais de la natation deux fois par semaine. Le samedi, je joue au tennis avec mon frère. Je joue aussi un peu de guitare. Mais je ne fais jamais de jeux vidéo !"]
    },
    22: {
      gap: [["Demain, je ___ partir tôt. (aller)", "vais"], ["Il ___ pleuvoir ce soir. (aller)", "va"], ["Nous allons ___ le musée. (to visit)", "visiter"], ["Je ___ vais pas travailler. (negative)", "ne"]],
      fix: [["Demain, je vais pars.", "Demain, je vais partir.", "aller + infinitive: je vais partir."], ["Ils vont travaillent ce week-end.", "Ils vont travailler ce week-end.", "After aller, the verb stays in the infinitive."]],
      task: ["Write five plans for next weekend and next year with the near future.", "Écris cinq projets pour le week-end prochain et l'année prochaine, avec le futur proche.", "Ce week-end, je vais faire du vélo avec mes amis. Samedi soir, nous allons dîner au restaurant. Dimanche, je vais me reposer. L'année prochaine, je vais aller au Canada et je vais apprendre à nager."]
    },
    23: {
      gap: [["Tu ___ venir samedi ? (vouloir)", "veux"], ["Je ne ___ pas : je dois travailler. (pouvoir)", "peux"], ["Ils ___ partir à huit heures. (devoir)", "doivent"], ["Ça te ___ d'aller à la plage ? (do you fancy)", "dit"]],
      fix: [["Je ne peux pas venir, je dois de travailler.", "Je ne peux pas venir, je dois travailler.", "devoir + infinitive, without de."], ["Nous voulons aller au cinéma ? — Oui, avec plaisirs !", "Vous voulez aller au cinéma ? — Oui, avec plaisir !", "To invite: vous voulez… ? And avec plaisir, without -s."]],
      task: ["Write a message to invite a friend, then the friend's answer: they can't come, and suggest another day.", "Écris un message pour inviter un ami, puis sa réponse : il ne peut pas venir et propose un autre jour.", "Salut ! Tu veux venir au concert vendredi soir ? — Merci, c'est gentil, mais je ne peux pas : je dois travailler tard. Dommage ! Tu es libre samedi ? On peut aller au cinéma."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "invitation", lesson: 23, level: "A1", icon: "party-popper", partner: "Océane", role: "a friend",
    title: "Inviting a friend", title_fr: "Inviter une amie",
    setting: "You want to go to a concert in the park on Friday evening. You call your friend Océane to invite her.", setting_fr: "Tu veux aller à un concert dans le parc vendredi soir. Tu appelles ton amie Océane pour l'inviter.",
    turns: [
      { p: "Allô ? Salut ! Ça va ?", fr: "Hello? Hi! How are you?" },
      { y: ["Ça va, merci ! Dis, tu veux venir à un concert vendredi soir ?", "Ça va, merci ! Dis, tu veux venir à un concert vendredi soir ? Tu peux venir ?", "Ça va, merci ! Dis, tu veux viens à un concert vendredi soir ?"], fr: "Fine, thanks! Say, do you want to come to a concert on Friday evening?", why: "vouloir + infinitive: tu veux venir. One question is enough." },
      { p: "Oh, c'est gentil ! Mais vendredi, je ne peux pas : je dois travailler tard.", fr: "Oh, that's nice of you! But on Friday I can't: I have to work late." },
      { y: ["Dommage ! Et samedi, tu es libre ? Il y a un autre concert.", "Dommage ! Et samedi, tu es libres ? Il y a un autre concert.", "Dommage ! Et samedi, tu es libre ? Il y a un autre concerts."], fr: "What a shame! And on Saturday, are you free? There's another concert.", why: "tu es libre (singular). Un autre concert, singular." },
      { p: "Samedi, oui, je suis libre ! Avec plaisir. C'est à quelle heure ?", fr: "Saturday, yes, I'm free! I'd love to. What time is it?" },
      { y: ["Ça commence à vingt heures. On va se retrouver devant le parc à dix-neuf heures trente ?", "Ça commence à vingt heures. On va retrouver devant le parc à dix-neuf heures trente ?", "Ça commence à vingt heures. On va se retrouvons devant le parc à dix-neuf heures trente ?"], fr: "It starts at 8 pm. Shall we meet in front of the park at 7.30?", why: "Near future of a reflexive verb: on va se retrouver (the pronoun stays with the infinitive)." },
      { p: "Parfait. Et s'il pleut ?", fr: "Perfect. And if it rains?" },
      { y: ["La météo dit qu'il va faire beau, mais prends un pull : le soir, il fait frais.", "La météo dit qu'il va fait beau, mais prends un pull : le soir, il fait frais.", "La météo dit qu'il va faire beau, mais prend un pull : le soir, il fait frais."], fr: "The forecast says it's going to be nice, but bring a jumper: it's cool in the evening.", why: "aller + infinitive: il va faire. Imperative with tu of prendre: prends, with -s." }
    ] }
  );

  W.READINGS.push({
    id: "weekendlac", level: "A1", icon: "trees", title: "Le programme du week-end", genre: "Email",
    intro: "Louise writes to her friends to organise a weekend by a lake. The near future, faire, invitations and the weather.",
    intro_fr: "Louise écrit à ses amis pour organiser un week-end au bord d'un lac. Le futur proche, faire, les invitations et la météo.",
    paragraphs: [
      { en: "Salut tout le monde ! Voici le programme du week-end au lac. Samedi matin, on va partir à huit heures en voiture. Le voyage va durer deux heures.", fr: "Hi everyone! Here's the plan for the weekend at the lake. On Saturday morning, we're going to leave at eight by car. The journey is going to take two hours." },
      { en: "Samedi après-midi, on va faire une randonnée autour du lac. Ce n'est pas difficile, mais prenez de bonnes chaussures ! Le soir, Théo va faire un barbecue, et Pauline va jouer de la guitare.", fr: "On Saturday afternoon, we're going to go on a hike around the lake. It isn't difficult, but bring good shoes! In the evening, Théo is going to have a barbecue, and Pauline is going to play the guitar." },
      { en: "Dimanche, vous pouvez choisir : faire du kayak sur le lac, ou se reposer à la plage. Moi, je vais lire au soleil ! On va rentrer vers dix-huit heures.", fr: "On Sunday, you can choose: go kayaking on the lake, or rest on the beach. Me, I'm going to read in the sun! We're going to come back around six." },
      { en: "La météo dit qu'il va faire beau et chaud, mais la nuit, il fait froid au bord du lac : n'oubliez pas un pull. Vous pouvez venir ? Répondez-moi avant mercredi, s'il vous plaît !", fr: "The forecast says it's going to be nice and hot, but at night it's cold by the lake: don't forget a jumper. Can you come? Please reply before Wednesday!" }
    ],
    glossary: { "programme": "plan, programme", "lac": "lake", "durer": "last, take", "randonnée": "hike", "autour": "around", "chaussures": "shoes", "choisir": "choose", "plage": "beach", "rentrer": "come back", "bord": "edge, shore", "oubliez": "forget", "répondez": "reply" },
    questions: [
      { q: "À quelle heure ils partent samedi ?", o: ["À huit heures", "À dix-huit heures", "À deux heures"], a: 0 },
      { q: "Qu'est-ce qu'ils vont faire samedi après-midi ?", o: ["Du kayak", "Une randonnée autour du lac", "Un barbecue"], a: 1 },
      { q: "Qui va jouer de la guitare ?", o: ["Théo", "Louise", "Pauline"], a: 2 },
      { q: "Qu'est-ce que Louise va faire dimanche ?", o: ["Du kayak", "Lire au soleil", "Une randonnée"], a: 1 },
      { q: "Pourquoi il faut prendre un pull ?", o: ["Il va pleuvoir.", "La nuit, il fait froid au bord du lac.", "Il va neiger."], a: 1 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-a1-7", unit: "a1-7", level: "A1", icon: "cloud-sun",
    title: "Qu'est-ce qu'on fait ce week-end ?", title_fr: "Qu'est-ce qu'on fait ce week-end ?",
    context: "Antoine and Clara plan their weekend. The weather forecast changes everything.", context_fr: "Antoine et Clara organisent leur week-end. La météo change tout.",
    words: [["la météo", "the weather forecast"], ["pleuvoir", "to rain"], ["une exposition", "an exhibition"], ["un pique-nique", "a picnic"], ["tant pis", "never mind"]],
    lines: [["Clara", "Qu'est-ce qu'on fait ce week-end ? On va à la plage ?", "fr-FR"], ["Antoine", "Attends, je regarde la météo… Oh non, samedi, il va pleuvoir toute la journée.", "fr-FR"], ["Clara", "Tant pis. Alors samedi, on peut aller au musée. Il y a une nouvelle exposition de photos.", "fr-FR"], ["Antoine", "Bonne idée ! Et dimanche ?", "fr-FR"], ["Clara", "Dimanche, il va faire beau ?", "fr-FR"], ["Antoine", "Oui, dimanche, il y a du soleil, et il va faire vingt-quatre degrés.", "fr-FR"], ["Clara", "Super ! Alors dimanche, on va faire un pique-nique au parc avec Lucas et Inès.", "fr-FR"], ["Antoine", "D'accord. Moi, je vais faire une tarte aux pommes.", "fr-FR"], ["Clara", "Miam ! Et moi, je vais acheter du pain et du fromage samedi matin.", "fr-FR"], ["Antoine", "Parfait. J'envoie un message à Lucas et Inès.", "fr-FR"]],
    gist: ["Pourquoi Antoine et Clara changent leur programme ?", ["À cause de la météo", "Parce que la plage est fermée", "Parce que Lucas est malade"]],
    detail: [["Quel temps va-t-il faire samedi ?", ["Il va pleuvoir.", "Il va faire beau.", "Il va neiger."]], ["Qu'est-ce qu'ils vont faire samedi ?", ["Aller au musée", "Aller à la plage", "Faire un pique-nique"]], ["Combien de degrés va-t-il faire dimanche ?", ["Vingt-quatre", "Quatorze", "Trente-quatre"]], ["Qu'est-ce qu'Antoine va faire ?", ["Une tarte aux pommes", "Du pain", "Des sandwichs"]]],
    decode: ["samedi, il va pleuvoir toute la journée", "il va faire vingt-quatre degrés"],
    tip: "Il va pleuvoir (it's going to rain) and il pleut (it's raining) sound close. Listen for va: it means the future. And in a forecast, numbers before degrés are temperatures, always in Celsius in France.", tip_fr: "Il va pleuvoir et il pleut se ressemblent. Guette va : il annonce le futur. Et dans une météo, le nombre devant degrés est une température, toujours en Celsius en France."
  }]);

  W.PROMPTS.push({ id: "fr-a1-7", level: "A1", q: "Qu'est-ce que tu fais pendant ton temps libre ? Et qu'est-ce que tu vas faire ce week-end ?", fr: "What do you do in your free time? And what are you going to do this weekend?", time: 90,
    phrases: ["Pendant mon temps libre, je…", "Je fais du / de la…", "Je joue au / du…", "Ce week-end, je vais…", "S'il fait beau, … / S'il pleut, …"],
    model: "Pendant mon temps libre, je fais beaucoup de sport : je fais de la natation le mardi et je joue au tennis le samedi. J'aime aussi lire et je joue un peu de piano. Ce week-end, je vais aller chez mes parents, à la campagne. S'il fait beau, nous allons faire une randonnée. S'il pleut, nous allons jouer aux cartes !" });

  W.WRITING_GUIDE["a1-7"] = { genre: "An invitation", genre_fr: "Une invitation",
    plan: [["Say hello to your friends.", "Salue tes amis."], ["What, when and with whom.", "Quoi, quand et avec qui."], ["Where to meet and at what time.", "Où se retrouver et à quelle heure."], ["What to bring, and the weather.", "Ce qu'il faut apporter, et la météo."], ["Ask for an answer, and say goodbye.", "Demande une réponse, et dis au revoir."]],
    marks: [["on va faire une randonnée", "the near future", "le futur proche"], ["Vous voulez venir ?", "an invitation with vouloir", "une invitation avec vouloir"], ["On part à neuf heures devant la gare", "time and meeting place", "l'heure et le lieu du rendez-vous"], ["Il va faire beau", "the weather in the near future", "la météo au futur proche"], ["N'oubliez pas vos chaussures de marche !", "a negative imperative", "un impératif négatif"], ["Vous pouvez me répondre avant jeudi ?", "a polite request with pouvoir", "une demande polie avec pouvoir"]] };

  W.COURSE.push({ id: "a1-7", level: "A1", icon: "bike", title: "Free time and plans", title_fr: "Loisirs et projets",
    intro: "Last unit of A1! You'll talk about your hobbies with faire and jouer, make plans with the near future, invite friends and answer invitations with pouvoir, vouloir and devoir, and talk about the weather. After this unit, you can take the A1 exam.",
    intro_fr: "Dernière unité du A1 ! Tu vas parler de tes loisirs avec faire et jouer, faire des projets avec le futur proche, inviter des amis et répondre aux invitations avec pouvoir, vouloir et devoir, et parler de la météo. Après cette unité, tu pourras passer l'examen A1.",
    can: ["Talk about your hobbies with faire and jouer", "Talk about your plans with the near future", "Invite, accept and refuse with pouvoir, vouloir and devoir", "Talk about the weather"],
    can_fr: ["Parler de tes loisirs avec faire et jouer", "Parler de tes projets avec le futur proche", "Inviter, accepter et refuser avec pouvoir, vouloir et devoir", "Parler de la météo"],
    lessons: [21, 22, 23], vocab: ["loisirsFR", "meteoFR"], reading: "weekendlac", prompt: "fr-a1-7",
    writing: { task: "Invite two friends to an activity this weekend. Write a message (60-80 words): what you're going to do, when and where to meet, what to bring and what the weather will be like.", task_fr: "Invite deux amis à une activité ce week-end. Écris un message (60 à 80 mots) : ce que vous allez faire, quand et où vous retrouver, ce qu'il faut apporter et le temps qu'il va faire.", words: "60-80",
      tips: ["Ce samedi, on va…", "Vous voulez venir ?", "On part à… devant…", "Il va faire…", "Vous pouvez me répondre avant… ?"],
      checklist: ["I used the near future (on va faire…)", "I invited with vouloir or ça vous dit", "I gave a time and a meeting place", "I used the imperative for what to bring (prenez, n'oubliez pas)", "I stayed between 60 and 80 words"],
      model: "Salut Clara et Julien !\n\nCe samedi, on va faire une randonnée en forêt avec Antoine. Vous voulez venir ? On part à neuf heures devant la gare et on va pique-niquer au bord du lac. Il va faire beau, mais prenez un pull : le soir, il fait frais. N'oubliez pas vos chaussures de marche ! Vous pouvez me répondre avant jeudi ?\n\nÀ samedi, j'espère !\nLouise" } });
})();
