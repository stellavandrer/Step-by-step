/* Cours de français, unité A2-3 « Childhood memories / Souvenirs d'enfance » : l'imparfait (formation et emplois),
   imparfait ou passé composé, parler de ses souvenirs et de ce qui a changé. Personnages fictifs, prénoms
   français ; « quand j'étais enfant » plutôt que « petit / petite » pour rester neutre. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "enfanceFR", icon: "baby", title: "Childhood and school", title_fr: "L'enfance et l'école", level: "A2", words: [
    ["l'enfance", "childhood", "J'ai eu une enfance heureuse."],
    ["l'école primaire", "primary school", "À l'école primaire, j'adorais le dessin."],
    ["le collège", "secondary school (11-15)", "Au collège, j'avais beaucoup d'amis."],
    ["le lycée", "secondary school (15-18), high school", "Au lycée, j'étudiais l'anglais."],
    ["le maître / la maîtresse", "the primary school teacher (m) / (f)", "La maîtresse était très gentille."],
    ["la récréation", "break time, recess", "À la récréation, on jouait au ballon."],
    ["la cour", "the playground; the courtyard", "Les enfants courent dans la cour."],
    ["le cartable", "the school bag", "Mon cartable était très lourd."],
    ["les devoirs", "homework", "Je faisais mes devoirs après le goûter."],
    ["le jouet", "the toy", "Mon jouet préféré était un petit train."],
    ["la poupée", "the doll", "Ma sœur avait une poupée blonde."],
    ["jouer à cache-cache", "to play hide-and-seek", "On jouait à cache-cache dans le jardin."],
    ["grimper aux arbres", "to climb trees", "J'adorais grimper aux arbres."],
    ["la colonie de vacances", "the summer camp", "Chaque été, je partais en colonie de vacances."],
    ["grandir", "to grow up", "J'ai grandi à la campagne."],
    ["se souvenir de", "to remember", "Je me souviens de ma première maîtresse."],
    ["le souvenir", "the memory; the souvenir", "C'est un très bon souvenir."],
    ["l'adolescence", "adolescence, the teenage years", "Pendant mon adolescence, j'étais très timide."],
    ["sévère", "strict", "Le directeur était sévère."]
  ] },
  { id: "tempsPasseFR", icon: "clock", title: "Time in a story", title_fr: "Le temps dans un récit", level: "A2", words: [
    ["autrefois", "in the past, in the old days", "Autrefois, il n'y avait pas de téléphone portable."],
    ["à l'époque", "at the time, back then", "À l'époque, on écrivait des lettres."],
    ["avant", "before; in the past", "Avant, j'habitais à Lille."],
    ["maintenant", "now", "Maintenant, j'habite à Nice."],
    ["d'habitude", "usually", "D'habitude, je prenais le bus."],
    ["tous les jours", "every day", "Je marchais tous les jours jusqu'à l'école."],
    ["chaque été", "every summer", "Chaque été, nous allions chez mes grands-parents."],
    ["un jour", "one day", "Un jour, il a neigé au mois d'avril."],
    ["soudain", "suddenly", "Soudain, le chien a aboyé."],
    ["tout à coup", "all of a sudden", "Tout à coup, la lumière s'est éteinte."],
    ["pendant que", "while", "Pendant que je dormais, il a commencé à pleuvoir."],
    ["quand", "when", "Quand j'étais enfant, j'avais peur du noir."],
    ["alors", "so, then", "Il pleuvait, alors on est restés à la maison."],
    ["ça me rappelle", "it reminds me of", "Cette chanson me rappelle mon enfance."]
  ] });

  W.LESSONS.push(
  {
    id: 30, level: "A2", icon: "baby",
    title: "Quand j'étais enfant: the imparfait", title_fr: "Quand j'étais enfant : l'imparfait",
    subtitle: "The tense for habits, descriptions and the background of a story.", subtitle_fr: "Le temps des habitudes, des descriptions et du décor d'une histoire.",
    body: `
<h2>An easy form</h2>
<p>Take the <s-fr>nous</s-fr> form of the present, remove -ons, and add the endings: <s-fr>nous parlons</s-fr> → parl-.</p>
<table>
<tr><th>French</th><th>English</th></tr>
<tr><td><s-fr>je parlais</s-fr></td><td>I was speaking, I used to speak</td></tr>
<tr><td><s-fr>tu parlais</s-fr></td><td>you were speaking</td></tr>
<tr><td><s-fr>il parlait</s-fr> · <s-fr>elle parlait</s-fr> · <s-fr>on parlait</s-fr></td><td>he, she was speaking · we were speaking</td></tr>
<tr><td><s-fr>nous parlions</s-fr></td><td>we were speaking</td></tr>
<tr><td><s-fr>vous parliez</s-fr></td><td>you were speaking</td></tr>
<tr><td><s-fr>ils parlaient</s-fr> · <s-fr>elles parlaient</s-fr></td><td>they were speaking</td></tr>
</table>
<p>Good news: <s-fr>parlais</s-fr>, <s-fr>parlait</s-fr> and <s-fr>parlaient</s-fr> all sound the same. The same stem works for almost every verb: <s-fr>nous faisons</s-fr> → <s-fr>je faisais</s-fr> · <s-fr>nous prenons</s-fr> → <s-fr>je prenais</s-fr> · <s-fr>nous avons</s-fr> → <s-fr>j'avais</s-fr>.</p>
<p>One exception: <s-fr>être</s-fr> → <s-fr>j'étais</s-fr>, <s-fr>tu étais</s-fr>, <s-fr>il était</s-fr>, <s-fr>nous étions</s-fr>…</p>
<h2>When to use it</h2>
<table>
<tr><th>Use</th><th>Example</th></tr>
<tr><td>Habits in the past ("used to", "would")</td><td><s-fr>Quand j'étais enfant, je jouais au foot tous les samedis.</s-fr></td></tr>
<tr><td>Descriptions: people, places, weather, feelings</td><td><s-fr>La maison était grande. Il faisait chaud. J'avais peur.</s-fr></td></tr>
<tr><td>An action in progress ("was doing")</td><td><s-fr>Je dormais.</s-fr> (I was sleeping.)</td></tr>
</table>
<p>You already know two forms: <s-fr>c'était</s-fr> (it was) and <s-fr>il y avait</s-fr> (there was, there were).</p>
<div class="tip">English "used to" and "would" (for habits) are both the imparfait in French: <s-fr>Chaque été, nous allions à la mer.</s-fr> (Every summer, we used to go / would go to the seaside.)</div>
`,
    examples: [
      ["Quand j'étais enfant, j'habitais à la campagne.", "When I was a child, I lived in the countryside."],
      ["Tous les samedis, nous allions au marché avec mon père.", "Every Saturday, we used to go to the market with my father."],
      ["Ma grand-mère faisait des gâteaux délicieux.", "My grandmother used to make delicious cakes."],
      ["La maison était petite, mais il y avait un grand jardin.", "The house was small, but there was a big garden."],
      ["Il faisait froid et il neigeait.", "It was cold and it was snowing."],
      ["À l'époque, on n'avait pas de téléphone portable.", "Back then, we didn't have mobile phones."],
      ["Mes parents travaillaient beaucoup.", "My parents worked a lot."],
      ["J'avais peur du noir.", "I was afraid of the dark."]
    ],
    quiz: [
      { q: "Complete: “Quand j'étais enfant, je ___ au foot.” (jouer)", o: ["jouais", "ai joué", "jouerai"], a: 0, ex: "A habit in the past: the imparfait." },
      { q: "The imparfait of “être” with nous is:", o: ["nous étions", "nous sommions", "nous êtions"], a: 0, ex: "être is the exception: ét- + endings." },
      { q: "Complete: “Il ___ beau.” (the weather, a description)", o: ["faisait", "a fait", "fait"], a: 0, ex: "A description in the past: il faisait beau." },
      { q: "The stem of the imparfait comes from…", o: ["the infinitive", "the nous form of the present", "the past participle"], a: 1, ex: "nous faisons → je faisais." },
      { q: "“We used to go to the seaside” is:", o: ["Nous allions à la mer.", "Nous sommes allés à la mer.", "Nous avions allé à la mer."], a: 0, ex: "Used to (habit) = imparfait." }
    ]
  },
  {
    id: 31, level: "A2", icon: "list-checks",
    title: "Imparfait or passé composé?", title_fr: "Imparfait ou passé composé ?",
    subtitle: "The background and the events: how French tells a story.", subtitle_fr: "Le décor et les événements : comment le français raconte une histoire.",
    body: `
<h2>The scene and what happens</h2>
<p>A story has a background (the scene, the situation) and events (what happens, one after the other).</p>
<table>
<tr><th>Imparfait: the background</th><th>Passé composé: the events</th></tr>
<tr><td>description, weather, feelings</td><td>a single, finished action</td></tr>
<tr><td>habits, repeated actions</td><td>an action at a precise moment</td></tr>
<tr><td>an action in progress</td><td>an action that interrupts</td></tr>
<tr><td><s-fr>Il faisait beau. Les enfants jouaient.</s-fr></td><td><s-fr>Soudain, il a commencé à pleuvoir.</s-fr></td></tr>
</table>
<h2>An interrupted action</h2>
<p>The imparfait is the action in progress, the passé composé the one that interrupts it: <s-fr>Je dormais quand le téléphone a sonné.</s-fr> (I was sleeping when the phone rang.) · <s-fr>Pendant que je faisais la cuisine, mon frère est arrivé.</s-fr></p>
<h2>Words that help</h2>
<p>With the imparfait: <s-fr>d'habitude</s-fr>, <s-fr>souvent</s-fr>, <s-fr>tous les jours</s-fr>, <s-fr>chaque été</s-fr>, <s-fr>à l'époque</s-fr>. With the passé composé: <s-fr>un jour</s-fr>, <s-fr>soudain</s-fr>, <s-fr>tout à coup</s-fr>, <s-fr>hier</s-fr>, <s-fr>une fois</s-fr>.</p>
<p><s-fr>D'habitude, je prenais le bus. Mais un jour, j'ai pris mon vélo.</s-fr> (Usually I took the bus. But one day, I took my bike.)</p>
<div class="tip">Think of a film: the imparfait sets up the scene (the light, the weather, what people are doing), and the passé composé is the action that moves the story forward.</div>
`,
    examples: [
      ["Je dormais quand le téléphone a sonné.", "I was sleeping when the phone rang."],
      ["Il pleuvait, alors nous sommes restés à la maison.", "It was raining, so we stayed at home."],
      ["D'habitude, je prenais le bus, mais ce jour-là, j'ai marché.", "Usually I took the bus, but that day I walked."],
      ["Pendant que je faisais la cuisine, mon frère est arrivé.", "While I was cooking, my brother arrived."],
      ["Quand je suis entré, tout le monde dansait.", "When I came in, everyone was dancing."],
      ["Elle était fatiguée, alors elle s'est couchée tôt.", "She was tired, so she went to bed early."],
      ["Tout à coup, la lumière s'est éteinte.", "All of a sudden, the light went out."]
    ],
    quiz: [
      { q: "Complete: “Je ___ la télé quand tu as appelé.”", o: ["regardais", "ai regardé", "regarde"], a: 0, ex: "An action in progress, interrupted: the imparfait." },
      { q: "Complete: “Soudain, la porte ___.”", o: ["s'ouvrait", "s'est ouverte", "s'ouvre"], a: 1, ex: "soudain + a single event: the passé composé." },
      { q: "Complete: “Il ___ froid, alors j'ai mis un pull.”", o: ["a fait", "faisait", "fera"], a: 1, ex: "The weather as a background: the imparfait." },
      { q: "Which word goes with the imparfait?", o: ["un jour", "d'habitude", "tout à coup"], a: 1, ex: "d'habitude = a habit." },
      { q: "“While I was cooking, my brother arrived” is:", o: ["Pendant que je cuisinais, mon frère arrivait.", "Pendant que je faisais la cuisine, mon frère est arrivé.", "Pendant que j'ai fait la cuisine, mon frère est arrivé."], a: 1, ex: "Background in the imparfait, event in the passé composé." }
    ]
  },
  {
    id: 32, level: "A2", kind: "functional", icon: "message-circle",
    title: "Everyday French: memories, and what has changed", title_fr: "Le français de tous les jours : les souvenirs, et ce qui a changé",
    subtitle: "Talk about the past, compare it with now and share a memory.", subtitle_fr: "Parler du passé, le comparer avec aujourd'hui et partager un souvenir.",
    body: `
<h2>Starting a memory</h2>
<p><s-fr>Quand j'étais enfant…</s-fr> · <s-fr>Quand j'avais dix ans…</s-fr> · <s-fr>À l'époque…</s-fr> (back then) · <s-fr>Je me souviens de…</s-fr> (I remember…) · <s-fr>Je me rappelle…</s-fr> (I remember…)</p>
<h2>Then and now</h2>
<p><s-fr>Avant, je…, maintenant je…</s-fr>: <s-fr>Avant, je faisais du sport tous les jours ; maintenant, je n'ai plus le temps.</s-fr> · <s-fr>Avant, il y avait un cinéma ici ; maintenant, il y a un supermarché.</s-fr></p>
<p><s-fr>ne… plus</s-fr> (not any more) is very useful to talk about changes: <s-fr>Je ne joue plus du piano.</s-fr></p>
<h2>Reacting to someone's memory</h2>
<p><s-fr>Ça me rappelle mon enfance !</s-fr> (That reminds me of my childhood!) · <s-fr>Moi aussi !</s-fr> · <s-fr>Pas moi.</s-fr> · <s-fr>C'était le bon temps !</s-fr> (Those were the days!) · <s-fr>Ça a beaucoup changé.</s-fr></p>
<div class="tip"><s-fr>se souvenir de</s-fr> takes de: <s-fr>Je me souviens de cette maison.</s-fr> But <s-fr>se rappeler</s-fr> takes no preposition: <s-fr>Je me rappelle cette maison.</s-fr> Many French speakers mix them up too!</div>
`,
    examples: [
      ["Quand j'étais enfant, j'habitais au bord de la mer.", "When I was a child, I lived by the sea."],
      ["Je me souviens de ma première maîtresse.", "I remember my first teacher."],
      ["Avant, je faisais du piano ; maintenant, je n'ai plus le temps.", "I used to play the piano; now I don't have the time any more."],
      ["Avant, il y avait un cinéma ici.", "There used to be a cinema here."],
      ["Ça me rappelle mon enfance !", "That reminds me of my childhood!"],
      ["C'était le bon temps !", "Those were the days!"],
      ["Le quartier a beaucoup changé.", "The neighbourhood has changed a lot."]
    ],
    quiz: [
      { q: "“I remember my grandmother” is:", o: ["Je me souviens de ma grand-mère.", "Je souviens ma grand-mère.", "Je me souviens ma grand-mère."], a: 0, ex: "se souvenir de." },
      { q: "“There used to be a cinema here” is:", o: ["Il y a eu un cinéma ici.", "Avant, il y avait un cinéma ici.", "Il avait un cinéma ici."], a: 1, ex: "Avant + il y avait." },
      { q: "“I don't play the piano any more” is:", o: ["Je ne joue jamais du piano.", "Je ne joue plus du piano.", "Je joue plus pas du piano."], a: 1, ex: "ne… plus = not any more." },
      { q: "“That reminds me of my childhood” is:", o: ["Ça me rappelle mon enfance.", "Ça me souviens mon enfance.", "Ça rappelle à moi mon enfance."], a: 0, ex: "rappeler quelque chose à quelqu'un: ça me rappelle…" },
      { q: "“C'était le bon temps” means:", o: ["The weather was nice.", "Those were the days.", "It was on time."], a: 1, ex: "le bon temps = the good old days." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    30: {
      gap: [["Quand j'étais enfant, je ___ à la campagne. (habiter)", "habitais"], ["Nous ___ souvent à la plage. (aller)", "allions"], ["Il ___ très gentil. (être)", "était"], ["Mes parents ___ beaucoup. (travailler)", "travaillaient"]],
      fix: [["Quand j'étais enfant, j'ai joué au foot tous les jours.", "Quand j'étais enfant, je jouais au foot tous les jours.", "A habit in the past: the imparfait."], ["Nous étons fatigués.", "Nous étions fatigués.", "être: nous étions."]],
      task: ["Describe your life when you were ten: where you lived, your school, what you did after school.", "Décris ta vie à dix ans : où tu habitais, ton école, ce que tu faisais après l'école.", "Quand j'avais dix ans, j'habitais dans une petite ville. Mon école était à côté de chez moi. Après l'école, je faisais mes devoirs, puis je jouais au foot avec mes voisins. Le dimanche, nous allions chez mes grands-parents."]
    },
    31: {
      gap: [["Je ___ quand le téléphone a sonné. (dormir)", "dormais"], ["Soudain, il ___ à pleuvoir. (commencer, passé composé)", "a commencé"], ["Il ___ beau, alors nous sommes sortis. (faire)", "faisait"], ["Pendant que je ___, mon ami est arrivé. (lire)", "lisais"]],
      fix: [["Je regardais la télé quand tu appelais.", "Je regardais la télé quand tu as appelé.", "The interrupting action is in the passé composé."], ["Hier, il a fait froid, alors j'avais mis un pull.", "Hier, il faisait froid, alors j'ai mis un pull.", "The weather as background (imparfait), the action as event (passé composé)."]],
      task: ["Tell a short story (five sentences): set the scene in the imparfait, then say what happened in the passé composé.", "Raconte une courte histoire (cinq phrases) : plante le décor à l'imparfait, puis dis ce qui s'est passé au passé composé.", "C'était un dimanche d'été. Il faisait très chaud et nous étions à la plage. Les enfants jouaient dans le sable. Soudain, un gros nuage noir est arrivé et il a commencé à pleuvoir. Nous sommes rentrés en courant !"]
    },
    32: {
      gap: [["Je me souviens ___ ma première école. (of)", "de"], ["Avant, il y ___ un cinéma ici. (imparfait of avoir)", "avait"], ["Je ne joue ___ du piano. (not any more)", "plus"], ["Ça me ___ mon enfance ! (reminds)", "rappelle"]],
      fix: [["Je me souviens ma grand-mère.", "Je me souviens de ma grand-mère.", "se souvenir de."], ["Avant, je fais du sport, maintenant je ne fais plus.", "Avant, je faisais du sport, maintenant je n'en fais plus.|Avant, je faisais du sport ; maintenant, je n'en fais plus.", "Avant + imparfait; maintenant + present."]],
      task: ["Compare your life ten years ago and now: three things that have changed.", "Compare ta vie il y a dix ans et maintenant : trois choses qui ont changé.", "Il y a dix ans, j'habitais chez mes parents ; maintenant, j'ai mon appartement. Avant, je ne faisais pas de sport ; maintenant, je cours trois fois par semaine. Avant, je ne parlais pas français, et maintenant, je l'apprends !"]
    }
  });

  W.ROLEPLAYS.push(
  { id: "souvenirs", lesson: 32, level: "A2", icon: "baby", partner: "Gabriel", role: "a friend",
    title: "Sharing childhood memories", title_fr: "Partager des souvenirs d'enfance",
    setting: "You're looking at old photos with your friend Gabriel. He asks about your childhood.", setting_fr: "Tu regardes de vieilles photos avec ton ami Gabriel. Il te pose des questions sur ton enfance.",
    turns: [
      { p: "Oh, c'est toi sur cette photo ? Tu avais quel âge ?", fr: "Oh, is that you in this photo? How old were you?" },
      { y: ["Oui, c'est moi ! J'avais huit ans. On était en vacances au bord de la mer.", "Oui, c'est moi ! J'ai eu huit ans. On a été en vacances au bord de la mer.", "Oui, c'est moi ! J'étais huit ans. On était en vacances au bord de la mer."], fr: "Yes, that's me! I was eight. We were on holiday by the sea.", why: "Age and description in the past: the imparfait, with avoir (j'avais huit ans)." },
      { p: "Tu partais souvent en vacances avec ta famille ?", fr: "Did you often go on holiday with your family?" },
      { y: ["Oui, chaque été, nous allions chez mes grands-parents.", "Oui, chaque été, nous sommes allés chez mes grands-parents.", "Oui, chaque été, nous allons chez mes grands-parents hier."], fr: "Yes, every summer we used to go to my grandparents'.", why: "A habit (chaque été): the imparfait." },
      { p: "Et qu'est-ce que tu faisais là-bas ?", fr: "And what did you do there?" },
      { y: ["Je jouais sur la plage et je pêchais avec mon grand-père.", "J'ai joué sur la plage et j'ai pêché avec mon grand-père chaque jour.", "Je jouerais sur la plage et je pêcherais avec mon grand-père."], fr: "I played on the beach and went fishing with my grandfather.", why: "Repeated actions in the past: the imparfait." },
      { p: "Ça a l'air génial ! Il s'est passé quelque chose de spécial, un été ?", fr: "Sounds great! Did anything special happen, one summer?" },
      { y: ["Oui ! Un jour, pendant que je nageais, j'ai vu un dauphin !", "Oui ! Un jour, pendant que j'ai nagé, je voyais un dauphin !", "Oui ! Un jour, pendant que je nage, j'ai vu un dauphin !"], fr: "Yes! One day, while I was swimming, I saw a dolphin!", why: "The action in progress (imparfait) and the event (passé composé)." },
      { p: "Un dauphin ? Incroyable ! Moi, je n'ai jamais vu de dauphin.", fr: "A dolphin? Amazing! I've never seen a dolphin." },
      { y: ["C'était le plus beau souvenir de mon enfance. Ça me rappelle le bon temps !", "Ça a été le plus beau souvenir de mon enfance. Ça me rappelle le bon temps !", "C'était le plus beau souvenir de mon enfance. Ça me souviens le bon temps !"], fr: "It was the best memory of my childhood. It reminds me of the good old days!", why: "C'était for a description. Ça me rappelle (not ça me souviens)." }
    ] }
  );

  W.READINGS.push({
    id: "etesgrandmere", level: "A2", icon: "sun", title: "Les étés chez ma grand-mère", genre: "Memories",
    intro: "Valentin remembers the summers of his childhood in his grandmother's village. The imparfait for habits and descriptions, the passé composé for one unforgettable event.",
    intro_fr: "Valentin se souvient des étés de son enfance dans le village de sa grand-mère. L'imparfait pour les habitudes et les descriptions, le passé composé pour un événement inoubliable.",
    paragraphs: [
      { en: "Quand j'étais enfant, je passais tous mes étés chez ma grand-mère, dans un petit village au bord de la mer. Sa maison était vieille, avec des volets bleus et un jardin plein de fleurs.", fr: "When I was a child, I spent all my summers at my grandmother's, in a small village by the sea. Her house was old, with blue shutters and a garden full of flowers." },
      { en: "Le matin, je me levais tôt et j'allais acheter le pain pour le petit-déjeuner. L'après-midi, nous allions à la plage. Ma grand-mère lisait sous un parasol, et moi, je construisais des châteaux de sable avec les enfants du village.", fr: "In the morning, I got up early and went to buy bread for breakfast. In the afternoon, we went to the beach. My grandmother read under a parasol, and I built sandcastles with the village children." },
      { en: "Le soir, après le dîner, on jouait aux cartes sur la terrasse. Il faisait encore chaud, et on entendait la mer. Je n'avais pas de télé, pas d'ordinateur, mais je ne m'ennuyais jamais.", fr: "In the evening, after dinner, we played cards on the terrace. It was still warm, and we could hear the sea. I had no TV, no computer, but I was never bored." },
      { en: "Un été, quand j'avais onze ans, une grosse tempête a éclaté pendant la nuit. L'électricité a coupé, et nous avons allumé des bougies. Ma grand-mère m'a raconté des histoires jusqu'au matin. Je n'ai jamais oublié cette nuit.", fr: "One summer, when I was eleven, a big storm broke out during the night. The electricity went off, and we lit candles. My grandmother told me stories until morning. I've never forgotten that night." }
    ],
    glossary: { "volets": "shutters", "fleurs": "flowers", "parasol": "beach umbrella", "construisais": "built", "châteaux": "castles", "sable": "sand", "terrasse": "terrace", "entendait": "could hear", "ennuyais": "got bored", "tempête": "storm", "éclaté": "broke out", "électricité": "electricity", "allumé": "lit", "bougies": "candles" },
    questions: [
      { q: "Où Valentin passait ses étés ?", o: ["Chez sa grand-mère, au bord de la mer", "En colonie de vacances", "À la montagne"], a: 0 },
      { q: "Qu'est-ce qu'il faisait le matin ?", o: ["Il dormait tard.", "Il allait acheter le pain.", "Il allait à la plage."], a: 1 },
      { q: "Qu'est-ce qu'ils faisaient le soir ?", o: ["Ils regardaient la télé.", "Ils jouaient aux cartes sur la terrasse.", "Ils allaient au restaurant."], a: 1 },
      { q: "Qu'est-ce qui s'est passé quand Valentin avait onze ans ?", o: ["Une grosse tempête", "Un accident", "Une fête au village"], a: 0 },
      { q: "Qu'est-ce que la grand-mère a fait pendant la nuit ?", o: ["Elle a dormi.", "Elle a raconté des histoires.", "Elle a appelé les pompiers."], a: 1 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-a2-3", unit: "a2-3", level: "A2", icon: "baby",
    title: "L'école de papi", title_fr: "L'école de papi",
    context: "For a school project, Lina asks her grandfather, Jacques, about his school days.", context_fr: "Pour un projet scolaire, Lina interroge son grand-père, Jacques, sur son école.",
    words: [["papi", "grandpa (informal)"], ["l'encre", "ink"], ["un poêle", "a stove"], ["une punition", "a punishment"], ["à pied", "on foot"]],
    lines: [["Lina", "Papi, comment c'était, l'école, quand tu étais petit ?", "fr-FR"], ["Jacques", "Oh, c'était très différent ! J'allais à l'école à pied, trois kilomètres matin et soir.", "fr-FR"], ["Lina", "Trois kilomètres ? Même en hiver ?", "fr-FR"], ["Jacques", "Même en hiver ! Il faisait très froid dans la classe. Il y avait juste un vieux poêle au milieu.", "fr-FR"], ["Lina", "Et vous aviez des ordinateurs ?", "fr-FR"], ["Jacques", "Des ordinateurs ? Non ! On écrivait avec de l'encre, et on avait souvent les doigts tout bleus.", "fr-FR"], ["Lina", "Et ton maître, il était sympa ?", "fr-FR"], ["Jacques", "Il était gentil, mais très sévère. Un jour, j'ai parlé pendant la leçon, et j'ai eu une punition : cent lignes à écrire !", "fr-FR"], ["Lina", "Cent lignes ! Qu'est-ce que tu as écrit ?", "fr-FR"], ["Jacques", "« Je ne dois pas parler en classe. » Cent fois ! Je ne l'ai jamais oublié.", "fr-FR"]],
    gist: ["De quoi parlent Lina et son grand-père ?", ["De l'école quand il était enfant", "Des vacances de Lina", "Du travail de Jacques"]],
    detail: [["Comment Jacques allait à l'école ?", ["À pied", "En bus", "À vélo"]], ["Comment était la classe en hiver ?", ["Très froide", "Très chaude", "Fermée"]], ["Avec quoi les élèves écrivaient ?", ["Avec de l'encre", "Avec un ordinateur", "Au crayon"]], ["Pourquoi Jacques a eu une punition ?", ["Il a parlé pendant la leçon.", "Il est arrivé en retard.", "Il n'a pas fait ses devoirs."]]],
    decode: ["J'allais à l'école à pied", "et j'ai eu une punition"],
    tip: "In a memory, the imparfait (j'allais, il faisait, on écrivait) describes how things were, and the passé composé (j'ai parlé, j'ai eu) tells the one event of the story. Listen for the change: it's when the story begins.", tip_fr: "Dans un souvenir, l'imparfait (j'allais, il faisait, on écrivait) décrit comment c'était, et le passé composé (j'ai parlé, j'ai eu) raconte l'événement. Guette le changement : c'est là que l'histoire commence."
  }]);

  W.PROMPTS.push({ id: "fr-a2-3", level: "A2", q: "Raconte un souvenir d'enfance : où tu habitais, ce que tu faisais, et un moment précis.", fr: "Tell me a childhood memory: where you lived, what you used to do, and one particular moment.", time: 120,
    phrases: ["Quand j'étais enfant, j'habitais…", "Tous les étés / Le dimanche, je…", "Il y avait…", "Un jour, …", "Je n'ai jamais oublié…"],
    model: "Quand j'étais enfant, j'habitais dans une grande ville, au cinquième étage d'un immeuble. Le dimanche, mon père nous emmenait au parc, et nous faisions du vélo pendant des heures. Il y avait un vieux monsieur qui vendait des glaces. Un jour, je suis tombé de mon vélo et je me suis cassé le bras. Le vieux monsieur m'a offert une glace gratuite ! Je n'ai jamais oublié sa gentillesse." });

  W.WRITING_GUIDE["a2-3"] = { genre: "A childhood memory", genre_fr: "Un souvenir d'enfance",
    plan: [["When and where: set the scene.", "Quand et où : plante le décor."], ["Your habits back then (imparfait).", "Tes habitudes à l'époque (imparfait)."], ["A description: a person, a place.", "Une description : une personne, un lieu."], ["One day, something happened (passé composé).", "Un jour, il s'est passé quelque chose (passé composé)."], ["Why you still remember it.", "Pourquoi tu t'en souviens encore."]],
    marks: [["Quand j'avais neuf ans", "the age in the imparfait", "l'âge à l'imparfait"], ["Tous les mercredis, j'allais", "a habit in the imparfait", "une habitude à l'imparfait"], ["Elle était", "a description in the imparfait", "une description à l'imparfait"], ["Un jour,", "the start of the event", "le début de l'événement"], ["elle m'a appris", "the event in the passé composé", "l'événement au passé composé"], ["Je me souviens encore", "a memory in the present", "un souvenir au présent"]] };

  W.COURSE.push({ id: "a2-3", level: "A2", icon: "baby", title: "Childhood memories", title_fr: "Souvenirs d'enfance",
    intro: "In this unit, you'll talk about how things used to be: the imparfait for habits and descriptions, the difference with the passé composé, and how to share a memory and talk about what has changed.",
    intro_fr: "Dans cette unité, tu vas parler de ce qui se passait avant : l'imparfait pour les habitudes et les descriptions, la différence avec le passé composé, et comment partager un souvenir et parler de ce qui a changé.",
    can: ["Form and use the imparfait", "Choose between the imparfait and the passé composé in a story", "Talk about your childhood and share memories", "Compare the past and the present"],
    can_fr: ["Former et utiliser l'imparfait", "Choisir entre l'imparfait et le passé composé dans un récit", "Parler de ton enfance et partager des souvenirs", "Comparer le passé et le présent"],
    lessons: [30, 31, 32], vocab: ["enfanceFR", "tempsPasseFR"], reading: "etesgrandmere", prompt: "fr-a2-3",
    writing: { task: "A French magazine asks its readers for a childhood memory. Write your text (80-100 words): set the scene, describe a person or a place, then tell what happened one day.", task_fr: "Un magazine français demande à ses lecteurs un souvenir d'enfance. Écris ton texte (80 à 100 mots) : plante le décor, décris une personne ou un lieu, puis raconte ce qui s'est passé un jour.", words: "80-100",
      tips: ["Quand j'avais … ans,", "Tous les… , j'allais…", "Il / elle était…", "Un jour,", "Je me souviens encore de…"],
      checklist: ["I used the imparfait for habits and descriptions", "I used the passé composé for the event", "I marked the change with un jour, soudain or tout à coup", "I described a person or a place", "I stayed between 80 and 100 words"],
      model: "Quand j'avais neuf ans, j'habitais dans un petit village de montagne. Tous les mercredis, j'allais chez ma voisine, Madame Leroux, pour apprendre le piano. Elle était très âgée, elle avait les cheveux blancs et elle portait toujours un foulard rouge. Sa maison sentait le chocolat chaud. Un jour, à la fin de la leçon, elle m'a appris une vieille chanson de son enfance. Nous l'avons chantée ensemble, et elle a pleuré de joie. Je me souviens encore de cette chanson, et je la joue souvent." } });
})();
