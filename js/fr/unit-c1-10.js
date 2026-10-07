/* Cours de français, unité C1-10 « Humour, wit and language / Humour, esprit et langue » : les figures de style
   (litote, euphémisme, hyperbole, antiphrase, oxymore, périphrase), les jeux de mots (homophones, calembours,
   mots-valises, expressions détournées), manier et décoder l'humour et l'ironie. Dernière unité du C1. Personnages
   fictifs, prénoms français. Faits vérifiables seulement : Corneille, Le Cid (« Va, je ne te hais point », « Cette
   obscure clarté qui tombe des étoiles ») ; Bergson, Le Rire (1900), « du mécanique plaqué sur du vivant » ; la
   poire de Louis-Philippe, caricature de Charles Philipon (1831) ; Raymond Devos et ses jeux de mots ; Pierre
   Desproges, « On peut rire de tout, mais pas avec n'importe qui » ; courriel, mot-valise. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "humourFR", icon: "laugh", title: "Humour", title_fr: "L'humour", level: "C1", words: [
    ["l'humour", "humour", "Il a beaucoup d'humour."],
    ["l'humoriste", "the comedian", "Cette humoriste remplit les salles."],
    ["le sketch", "the comedy sketch", "Ce sketch date des années 1970."],
    ["la blague", "the joke", "Il connaît toujours une blague."],
    ["plaisanter", "to joke", "Ne le prends pas mal, je plaisantais !"],
    ["la plaisanterie", "the joke, the jest", "Ce n'était qu'une plaisanterie."],
    ["taquiner", "to tease", "Elle aime taquiner son petit frère."],
    ["se moquer de", "to make fun of", "Il se moque gentiment de ses collègues."],
    ["la moquerie", "mockery", "Les moqueries peuvent blesser."],
    ["ironique", "ironic", "Il a répondu sur un ton ironique."],
    ["le second degré", "irony, tongue-in-cheek humour", "Ne le prends pas mal, c'était du second degré."],
    ["l'autodérision", "self-mockery", "L'autodérision désamorce bien des tensions."],
    ["le jeu de mots", "the pun, the wordplay", "Ce titre est un jeu de mots."],
    ["le calembour", "the pun (on sounds)", "Les calembours font souvent soupirer."],
    ["le fou rire", "a fit of the giggles", "Ils ont eu un fou rire en pleine réunion."],
    ["hilarant", "hilarious", "Le film est hilarant."],
    ["désopilant", "side-splitting", "Sa dernière chronique est désopilante."],
    ["le trait d'esprit", "the witticism", "Il a conclu par un trait d'esprit."]
  ] },
  { id: "rireFR", icon: "drama", title: "Laughter and style", title_fr: "Rire et style", level: "C1", words: [
    ["rire", "to laugh", "On a ri toute la soirée."],
    ["sourire", "to smile", "Elle sourit en lisant le message."],
    ["le comique", "the comedian; comedy, the funny side", "Le comique de la situation ne lui a pas échappé."],
    ["la répartie", "the comeback, quick wit", "Elle a de la répartie."],
    ["la satire", "satire", "Ce roman est une satire de la vie de bureau."],
    ["la caricature", "the caricature", "La caricature a une longue histoire en France."],
    ["la parodie", "the parody", "Cette parodie de journal télévisé est très réussie."],
    ["le dessin de presse", "the editorial cartoon", "Chaque matin, il commence par le dessin de presse."],
    ["le caricaturiste / la caricaturiste", "the caricaturist (m) / (f)", "Le caricaturiste a été poursuivi en justice."],
    ["le mot d'esprit", "the witty remark", "Ses mots d'esprit sont souvent cités."],
    ["la litote", "the understatement (saying less to mean more)", "Ce n'est pas mauvais est une litote pour c'est très bon."],
    ["l'euphémisme", "the euphemism", "Il nous a quittés est un euphémisme pour il est mort."],
    ["l'hyperbole", "the hyperbole", "Je meurs de faim est une hyperbole."],
    ["l'oxymore", "the oxymoron", "Une obscure clarté est un oxymore célèbre."],
    ["l'antiphrase", "irony (saying the opposite of what one means)", "Quelle belle journée !, sous la pluie, est une antiphrase."],
    ["la périphrase", "the periphrasis (a phrase instead of a word)", "La Ville lumière est une périphrase pour Paris."],
    ["l'insolence", "insolence, cheekiness", "L'insolence est l'arme des humoristes."],
    ["la comédie", "comedy, the comedy", "Molière a écrit ses plus grandes comédies au XVIIe siècle."]
  ] });

  W.LESSONS.push(
  {
    id: 132, level: "C1", icon: "wand-sparkles",
    title: "Ce n'est pas mauvais: understatement, euphemism and irony", title_fr: "Ce n'est pas mauvais : litote, euphémisme et ironie",
    subtitle: "Say less to mean more, soften, exaggerate or mean the opposite: the figures of everyday French.", subtitle_fr: "Dire moins pour dire plus, adoucir, exagérer ou dire le contraire : les figures du français de tous les jours.",
    body: `
<h2>Saying less: litotes</h2>
<p><s-fr>Ce n'est pas mauvais.</s-fr> (it's very good) · <s-fr>Il n'est pas bête.</s-fr> (he's clever) · The most famous one, in Corneille's <s-fr>Le Cid</s-fr>: Chimène tells Rodrigue <s-fr>Va, je ne te hais point</s-fr>, meaning that she loves him.</p>
<h2>Softening: euphemism</h2>
<p><s-fr>Il nous a quittés.</s-fr> (he died) · <s-fr>les personnes âgées</s-fr> · <s-fr>un plan social</s-fr> (job cuts) · <s-fr>Ce n'est pas tout à fait exact.</s-fr> (it's wrong)</p>
<h2>Exaggerating: hyperbole</h2>
<p><s-fr>Je meurs de faim.</s-fr> · <s-fr>Je te l'ai dit mille fois !</s-fr> · <s-fr>C'est la fin du monde.</s-fr></p>
<h2>Saying the opposite: irony</h2>
<p>An <s-fr>antiphrase</s-fr>: <s-fr>Bravo, c'est malin !</s-fr> after a mistake · <s-fr>Quelle belle journée !</s-fr> under pouring rain. Context and tone do all the work.</p>
<h2>Other figures</h2>
<p><s-fr>l'oxymore</s-fr>, two opposite words together: <s-fr>Cette obscure clarté qui tombe des étoiles</s-fr> (Corneille, again) · <s-fr>la périphrase</s-fr>, a phrase instead of a name: <s-fr>la Ville lumière</s-fr> (Paris), <s-fr>l'Hexagone</s-fr> (France).</p>
<div class="tip">French conversation uses litotes all the time, often where English is more direct. When a French speaker says <s-fr>ce n'est pas terrible</s-fr>, they mean it's rather bad; <s-fr>pas mal</s-fr> can be high praise. Learn to hear what's left unsaid.</div>
`,
    examples: [
      ["Ce n'est pas mauvais, ton gâteau !", "Your cake isn't bad at all! (= it's very good)"],
      ["Va, je ne te hais point.", "Go, I do not hate you. (= I love you; Corneille)"],
      ["Notre voisin nous a quittés la semaine dernière.", "Our neighbour passed away last week."],
      ["Je te l'ai dit mille fois !", "I've told you a thousand times!"],
      ["Bravo, c'est malin !", "Well done, that's clever! (= that was stupid)"],
      ["Ce n'est pas terrible.", "It's not great. (= it's rather bad)"],
      ["Paris, la Ville lumière, attire des millions de visiteurs.", "Paris, the City of Light, attracts millions of visitors."]
    ],
    quiz: [
      { q: "Ce n'est pas mauvais usually means:", o: ["It's very good.", "It's bad.", "It's average."], a: 0, ex: "A litote: saying less to mean more." },
      { q: "Il nous a quittés is:", o: ["a euphemism for il est mort", "a hyperbole", "an oxymoron"], a: 0, ex: "It softens a painful reality." },
      { q: "Bravo, c'est malin !, after a mistake, is:", o: ["ironic", "a real compliment", "a euphemism"], a: 0, ex: "An antiphrase: it means the opposite." },
      { q: "Une obscure clarté is:", o: ["an oxymoron", "a litote", "a periphrasis"], a: 0, ex: "Two opposite words together (Corneille)." },
      { q: "Ce n'est pas terrible means:", o: ["It's not great.", "It's not terrifying.", "It's terrific."], a: 0, ex: "pas terrible = rather bad, mediocre." }
    ]
  },
  {
    id: 133, level: "C1", icon: "puzzle",
    title: "Vert, verre, ver: puns and wordplay", title_fr: "Vert, verre, ver : les jeux de mots",
    subtitle: "Homophones, double meanings, blends and twisted set phrases: how French plays with words.", subtitle_fr: "Homophones, doubles sens, mots-valises et expressions détournées : comment le français joue avec les mots.",
    body: `
<h2>Homophones</h2>
<p>French is full of words that sound alike: <s-fr>vert</s-fr>, <s-fr>verre</s-fr>, <s-fr>ver</s-fr>, <s-fr>vers</s-fr> · <s-fr>mer</s-fr>, <s-fr>mère</s-fr>, <s-fr>maire</s-fr> · <s-fr>sain</s-fr>, <s-fr>saint</s-fr>, <s-fr>sein</s-fr>, <s-fr>cinq</s-fr>. They are the raw material of the <s-fr>calembour</s-fr> (pun).</p>
<h2>Double meanings</h2>
<p>One word, two senses: <s-fr>Il a du mal à joindre les deux bouts</s-fr> can be read literally or figuratively. The humorist Raymond Devos built whole sketches on this kind of play, taking set phrases literally.</p>
<h2>Blends: mots-valises</h2>
<p>Two words fused into one: <s-fr>courriel</s-fr> (courrier + électronique) · <s-fr>franglais</s-fr> (français + anglais) · <s-fr>adulescent</s-fr> (adulte + adolescent).</p>
<h2>Twisted set phrases</h2>
<p>Newspaper headlines and adverts love to bend a proverb or a famous phrase: a new phrase heard on the familiar tune. To get the joke, you need to know the original, which is why wordplay is one of the last things a learner understands.</p>
<div class="tip">Don't be discouraged if puns escape you: they rely on homophones, set phrases and culture all at once. Each one you understand is a sign of real progress. When in doubt, ask: <s-fr>C'est un jeu de mots ?</s-fr></div>
`,
    examples: [
      ["Il a bu un verre de vin vert près d'un ver de terre.", "He drank a glass of young wine near an earthworm."],
      ["La mère du maire regarde la mer.", "The mayor's mother looks at the sea."],
      ["Courriel est un mot-valise : courrier et électronique.", "Courriel is a blend: courrier and électronique."],
      ["Ce titre de journal détourne un proverbe célèbre.", "This headline twists a famous proverb."],
      ["Je n'ai pas compris : c'est un jeu de mots ?", "I didn't get it: is it a pun?"],
      ["Raymond Devos prenait les expressions au pied de la lettre.", "Raymond Devos took expressions literally."]
    ],
    quiz: [
      { q: "Which words are homophones?", o: ["vert, verre, ver", "vert, vrai, vers", "verre, vertu, vérité"], a: 0, ex: "They are pronounced the same way." },
      { q: "Courriel is:", o: ["a blend of courrier and électronique", "an English loanword", "a pun"], a: 0, ex: "A mot-valise." },
      { q: "Prendre une expression au pied de la lettre means:", o: ["to take it literally", "to write it down", "to translate it"], a: 0, ex: "Literally, word for word." },
      { q: "A calembour is:", o: ["a pun based on sounds", "a long joke", "a type of song"], a: 0, ex: "It plays on words that sound alike." },
      { q: "Why is wordplay hard for learners?", o: ["It relies on sounds, set phrases and culture at once.", "It's always rude.", "It only exists in writing."], a: 0, ex: "That's why understanding it is a sign of progress." }
    ]
  },
  {
    id: 134, level: "C1", kind: "functional", icon: "party-popper",
    title: "Everyday French: handling humour and irony", title_fr: "Le français de tous les jours : manier l'humour et l'ironie",
    subtitle: "Spot irony, react to a joke, tease gently and laugh at yourself.", subtitle_fr: "Repérer l'ironie, réagir à une blague, taquiner gentiment et rire de soi.",
    body: `
<h2>Spotting irony</h2>
<p>Tone and context: <s-fr>Bravo, c'est malin !</s-fr> · <s-fr>Super, il pleut encore !</s-fr> · <s-fr>Très drôle.</s-fr> said flatly · <s-fr>Elle est bonne, celle-là !</s-fr> (that's a good one!)</p>
<h2>First or second degree?</h2>
<p><s-fr>au premier degré</s-fr> = literally, seriously · <s-fr>au second degré</s-fr> = ironically, not to be taken literally: <s-fr>C'était du second degré !</s-fr> · <s-fr>Il prend tout au premier degré.</s-fr></p>
<h2>Reacting</h2>
<p><s-fr>Tu plaisantes ?</s-fr> · <s-fr>Tu te moques de moi ?</s-fr> · <s-fr>Je sens une pointe d'ironie…</s-fr> · <s-fr>Elle est bien bonne !</s-fr></p>
<h2>Teasing and laughing at yourself</h2>
<p><s-fr>Je te taquine !</s-fr> · <s-fr>Sans rancune ?</s-fr> · Self-mockery: <s-fr>Le bricolage et moi, ça fait deux !</s-fr> · <s-fr>Je ne suis pas à une erreur près.</s-fr> (one more mistake won't make a difference)</p>
<h2>When not to joke</h2>
<p>Grief, a serious conflict, someone's identity: there, irony hurts. <s-fr>Ce n'est pas le moment de plaisanter.</s-fr></p>
<div class="tip">If you're unsure whether something was meant seriously, smile and ask: <s-fr>C'est du second degré ?</s-fr> Nobody will hold it against you, and the question itself shows you know how French humour works.</div>
`,
    examples: [
      ["Super, il pleut encore !", "Great, it's raining again! (ironic)"],
      ["Ne le prends pas mal, c'était du second degré.", "Don't take it the wrong way, it was tongue-in-cheek."],
      ["Il prend tout au premier degré.", "He takes everything literally."],
      ["Je sens une pointe d'ironie dans ta voix…", "I can hear a hint of irony in your voice…"],
      ["Je te taquine ! Sans rancune ?", "I'm teasing you! No hard feelings?"],
      ["Le bricolage et moi, ça fait deux !", "DIY and I don't get on!"],
      ["Ce n'est pas le moment de plaisanter.", "This is no time for jokes."]
    ],
    quiz: [
      { q: "Au second degré means:", o: ["ironically, not literally", "very seriously", "in second place"], a: 0, ex: "Au premier degré = literally." },
      { q: "Elle est bonne, celle-là ! means:", o: ["That's a good one!", "She's good at this.", "This one is tasty."], a: 0, ex: "A reaction to a joke or a surprising story." },
      { q: "“I'm teasing you” is:", o: ["Je te taquine.", "Je te taquine pas.", "Je taquine à toi."], a: 0, ex: "taquiner quelqu'un." },
      { q: "Le bricolage et moi, ça fait deux ! is:", o: ["self-mockery: I'm bad at DIY", "a boast", "an invitation"], a: 0, ex: "Laughing at yourself, gently." },
      { q: "When unsure whether someone is joking, you can ask:", o: ["C'est du second degré ?", "C'est du premier étage ?", "C'est une blague de quoi ?"], a: 0, ex: "Nobody will hold it against you." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    132: {
      gap: [["Ce n'est pas ___, ton gâteau ! (= it's very good; bad)", "mauvais"], ["Notre voisin nous a ___ la semaine dernière. (= he died; quitter)", "quittés"], ["Je te l'ai dit ___ fois ! (a thousand)", "mille"], ["Bravo, c'est ___ ! (= that was stupid; clever)", "malin"]],
      fix: [["Ce film n'est pas terrible, je te le recommande vivement !", "Ce film n'est pas mal du tout, je te le recommande vivement !|Ce film est excellent, je te le recommande vivement !", "pas terrible means rather bad: it contradicts the recommendation."], ["Il nous a quitté hier.", "Il nous a quittés hier.", "quitter takes avoir; nous, the direct object, comes before: agreement."]],
      task: ["Write four sentences about a disappointing holiday, with a litote, a euphemism, a hyperbole and an ironic sentence.", "Écris quatre phrases sur des vacances décevantes, avec une litote, un euphémisme, une hyperbole et une phrase ironique.", "L'hôtel n'était pas tout à fait conforme aux photos. La chambre était, disons, intime : on pouvait toucher les deux murs à la fois. Il a plu pendant mille ans. Bref, des vacances de rêve !"]
    },
    133: {
      gap: [["La mère du ___ regarde la mer. (mayor)", "maire"], ["Courriel est un mot-___ : courrier et électronique. (blend)", "valise"], ["Il prend toujours les expressions au pied de la ___. (literally)", "lettre"], ["C'est un ___ de mots ? (pun)", "jeu"]],
      fix: [["Il a bu un vert de vin.", "Il a bu un verre de vin.", "un verre (a glass); vert = green."], ["Je n'ai pas compris le jeu des mots.", "Je n'ai pas compris le jeu de mots.", "un jeu de mots, without an article."]],
      task: ["Invent a blend (mot-valise) for a modern habit, and explain it in two sentences.", "Invente un mot-valise pour une habitude moderne, et explique-le en deux phrases.", "Je propose le mot télécafé, de télétravail et café : c'est le moment où l'on boit un café devant sa caméra avec ses collègues. Ce mot-valise désigne une habitude née avec le travail à distance."]
    },
    134: {
      gap: [["Ne le prends pas mal, c'était du second ___. (degree)", "degré"], ["Je sens une ___ d'ironie dans ta voix. (hint)", "pointe"], ["Je te ___ ! Sans rancune ? (tease)", "taquine"], ["Ce n'est pas le moment de ___. (to joke)", "plaisanter"]],
      fix: [["Je sens une pointe de l'ironie.", "Je sens une pointe d'ironie.", "une pointe de + noun, without an article."], ["Il prend tout au premier niveau.", "Il prend tout au premier degré.", "au premier degré = literally."]],
      task: ["A friend laughs at your burnt cake. Answer with self-mockery and a touch of irony, in three sentences.", "Un ami se moque de ton gâteau brûlé. Réponds avec autodérision et une pointe d'ironie, en trois phrases.", "Je sais, je sais : la cuisine et moi, ça fait deux ! Mais avoue que la couleur est originale. La prochaine fois, je t'invite au restaurant, c'est plus prudent."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "meublekit", lesson: 134, level: "C1", icon: "party-popper", partner: "Antoine", role: "a friend who likes teasing",
    title: "The flat-pack wardrobe", title_fr: "L'armoire en kit",
    setting: "You spent your Sunday assembling a flat-pack wardrobe. Your friend Antoine calls, and he can't resist teasing you.", setting_fr: "Tu as passé ton dimanche à monter une armoire en kit. Ton ami Antoine t'appelle, et il ne peut pas s'empêcher de te taquiner.",
    turns: [
      { p: "Alors, tu as enfin réussi à monter ton armoire ?", fr: "So, did you finally manage to put your wardrobe together?" },
      { y: ["Oui, en à peine six heures : un record, tu imagines bien !", "Oui, en à peine six heures : une record, tu imagines bien !", "Oui, en à peine six heures : un record, tu imagines bon !"], fr: "Yes, in barely six hours: a record, as you can imagine!", why: "un record (m); tu imagines bien. Irony: six hours is anything but a record." },
      { p: "Six heures ! Tu as un talent caché pour le bricolage, dis donc.", fr: "Six hours! You've got a hidden talent for DIY, haven't you." },
      { y: ["Je sens une pointe d'ironie dans ta voix…", "Je sens une point d'ironie dans ta voix…", "Je sens une pointe de l'ironie dans ta voix…"], fr: "I can hear a hint of irony in your voice…", why: "une pointe (f) de + noun, without an article." },
      { p: "Moi ? Jamais ! Bon, d'accord, un peu. Il te reste des vis ?", fr: "Me? Never! OK, maybe a little. Have you got any screws left over?" },
      { y: ["Quatre. Mais rassure-toi, l'armoire tient debout… pour l'instant.", "Quatre. Mais rassure-te, l'armoire tient debout… pour l'instant.", "Quatre. Mais rassure-toi, l'armoire tient debout… pour la moment."], fr: "Four. But don't worry, the wardrobe is standing… for now.", why: "Imperative of se rassurer: rassure-toi; pour l'instant." },
      { p: "Tu sais que tu peux me demander de l'aide la prochaine fois ?", fr: "You know you can ask me for help next time?" },
      { y: ["Je sais, mais j'aurais raté ce grand moment de solitude !", "Je sais, mais j'aurai raté ce grand moment de solitude !", "Je sais, mais j'aurais raté cette grand moment de solitude !"], fr: "I know, but I'd have missed this great moment of solitude!", why: "An unreal past: conditionnel passé (j'aurais raté); un moment (m)." },
      { p: "Allez, je passe samedi, on vérifie ensemble.", fr: "Come on, I'll drop by on Saturday and we'll check it together." },
      { y: ["Avec plaisir. J'aurai préparé le café… et la boîte à outils !", "Avec un plaisir. J'aurai préparé le café… et la boîte à outils !", "Avec plaisir. J'aurais préparé le café… et la boîte à outils !"], fr: "With pleasure. I'll have the coffee ready… and the toolbox!", why: "avec plaisir, no article; futur antérieur (done by Saturday): j'aurai préparé." }
    ] }
  );

  W.READINGS.push({
    id: "pourquoirit", level: "C1", icon: "laugh", title: "Pourquoi rit-on ?", genre: "Essai",
    intro: "From Bergson's theory to Molière, Philipon's pear and Raymond Devos: a short history of laughter in France. Figures of speech and wordplay.",
    intro_fr: "De la théorie de Bergson à Molière, à la poire de Philipon et à Raymond Devos : petite histoire du rire en France. Les figures de style et les jeux de mots.",
    paragraphs: [
      { en: "Pourquoi rit-on ? La question a occupé bien des philosophes. En 1900, Henri Bergson publie Le Rire, un essai resté célèbre. Selon lui, nous rions lorsque le vivant se met à fonctionner comme une machine : c'est, dans sa formule, du mécanique plaqué sur du vivant.", fr: "Why do we laugh? The question has occupied many philosophers. In 1900, Henri Bergson published Laughter, an essay that has remained famous. According to him, we laugh when something living starts to work like a machine: in his words, something mechanical encrusted on the living." },
      { en: "Pensez à quelqu'un qui glisse sur une peau de banane : ce n'est pas la chute qui fait rire, c'est la raideur d'un corps qui n'a pas su s'adapter. Le rire, pour Bergson, a aussi une fonction sociale : il corrige, en se moquant, ceux qui manquent de souplesse.", fr: "Think of someone slipping on a banana skin: it isn't the fall that makes us laugh, it's the stiffness of a body that failed to adapt. For Bergson, laughter also has a social function: by mocking, it corrects those who lack flexibility." },
      { en: "En France, cette fonction critique a une longue histoire. Au XVIIe siècle, Molière tourne en dérision les médecins pédants, les hypocrites et les avares. Au XIXe siècle, la caricature devient une arme politique : en 1831, Charles Philipon représente le roi Louis-Philippe sous la forme d'une poire, une image qui fera le tour du pays et lui vaudra des démêlés avec la justice.", fr: "In France, this critical function has a long history. In the seventeenth century, Molière ridiculed pompous doctors, hypocrites and misers. In the nineteenth century, caricature became a political weapon: in 1831, Charles Philipon drew King Louis-Philippe as a pear, an image that would travel round the country and land its author in trouble with the law." },
      { en: "Le rire passe aussi par la langue. Raymond Devos, l'un des humoristes les plus aimés de la seconde moitié du XXe siècle, bâtissait des sketchs entiers sur des expressions prises au pied de la lettre. Ses jeux de mots, presque intraduisibles, montrent à quel point l'humour est lié à une langue et à une culture.", fr: "Laughter also goes through language. Raymond Devos, one of the best-loved comedians of the second half of the twentieth century, built whole sketches on expressions taken literally. His puns, almost untranslatable, show how closely humour is tied to a language and a culture." },
      { en: "Aujourd'hui encore, l'ironie et le second degré occupent une place de choix dans la conversation française. Encore faut-il en posséder les codes : pour un apprenant, comprendre une blague est souvent l'ultime étape avant de se sentir vraiment chez soi dans une langue.", fr: "Even today, irony and tongue-in-cheek humour hold pride of place in French conversation. Still, you need to know the codes: for a learner, understanding a joke is often the final step before feeling truly at home in a language." }
    ],
    glossary: { "plaqué": "stuck on, encrusted", "glisse": "slips", "peau": "skin", "raideur": "stiffness", "souplesse": "flexibility", "corrige": "corrects", "pédants": "pompous, pedantic", "avares": "misers", "poire": "pear", "vaudra": "will earn (valoir)", "démêlés": "trouble, run-ins", "bâtissait": "built", "intraduisibles": "untranslatable", "ultime": "final" },
    questions: [
      { q: "Selon Bergson, quand rions-nous ?", o: ["Quand le vivant se met à fonctionner comme une machine", "Quand nous sommes tristes", "Quand quelqu'un réussit"], a: 0 },
      { q: "Quelle fonction sociale Bergson attribue-t-il au rire ?", o: ["Il corrige ceux qui manquent de souplesse.", "Il enrichit ceux qui rient.", "Il remplace la politesse."], a: 0 },
      { q: "Que représenta Charles Philipon en 1831 ?", o: ["Le roi Louis-Philippe sous la forme d'une poire", "Molière en médecin", "Bergson en machine"], a: 0 },
      { q: "Sur quoi Raymond Devos bâtissait-il ses sketchs ?", o: ["Sur des expressions prises au pied de la lettre", "Sur l'actualité politique", "Sur des chansons"], a: 0 },
      { q: "Pour un apprenant, que représente le fait de comprendre une blague ?", o: ["L'ultime étape avant de se sentir chez soi dans une langue", "La première leçon", "Un exercice sans intérêt"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-c1-10", unit: "c1-10", level: "C1", icon: "mic",
    title: "Faire rire dans une autre langue", title_fr: "Faire rire dans une autre langue",
    context: "On the radio, Pauline interviews Kevin, a comedian born in Manchester who performs his shows in French.", context_fr: "À la radio, Pauline reçoit Kevin, humoriste né à Manchester, qui joue ses spectacles en français.",
    words: [["une mince affaire", "an easy matter (often in the negative)"], ["avec un temps de retard", "a beat behind"], ["féliciter", "to congratulate"], ["miser sur", "to count on"], ["rater", "to miss, to mess up"]],
    lines: [["Pauline", "Ce soir, nous recevons Kevin, humoriste né à Manchester, qui joue ses spectacles en français. Kevin, faire rire dans une langue étrangère, c'est possible ?", "fr-FR"], ["Kevin", "C'est possible, mais ce n'est pas une mince affaire ! Les jeux de mots, par exemple : il m'a fallu des années pour en comprendre la moitié. Au début, je riais avec un temps de retard, et tout le monde se retournait vers moi.", "fr-FR"], ["Pauline", "Et le second degré ?", "fr-FR"], ["Kevin", "C'est le plus difficile. En anglais, l'ironie est partout, souvent très discrète. En France aussi, mais les signaux ne sont pas les mêmes. Un jour, un collègue m'a dit : ah, bravo, c'est malin ! J'ai cru qu'il me félicitait.", "fr-FR"], ["Pauline", "Alors, comment avez-vous appris ?", "fr-FR"], ["Kevin", "En écoutant énormément, et en misant sur l'autodérision. Se moquer de soi, c'est universel : quand je raconte mes erreurs de français, le public rit avec moi, pas de moi.", "fr-FR"], ["Pauline", "Un conseil pour ceux qui apprennent le français ?", "fr-FR"], ["Kevin", "N'ayez pas peur d'être ridicules : rater une blague, ce n'est pas la fin du monde ! Et regardez des sketchs : vous y apprendrez plus de vraie langue que dans bien des manuels.", "fr-FR"]],
    gist: ["De quoi parle l'émission ?", ["De la difficulté de faire rire dans une langue étrangère", "D'un festival de cinéma", "Des différences entre Londres et Paris"]],
    detail: [["Qu'est-ce qui a demandé des années à Kevin ?", ["Comprendre les jeux de mots", "Trouver une salle", "Apprendre l'anglais"]], ["Qu'a-t-il cru quand un collègue lui a dit bravo, c'est malin ?", ["Qu'il le félicitait", "Qu'il se moquait de son accent", "Qu'il était malade"]], ["Sur quoi Kevin a-t-il misé pour faire rire ?", ["Sur l'autodérision", "Sur des imitations", "Sur la politique"]], ["Que conseille-t-il aux apprenants ?", ["Ne pas avoir peur d'être ridicules et regarder des sketchs", "Éviter l'humour", "Lire uniquement des manuels"]]],
    decode: ["il m'a fallu des années pour en comprendre la moitié", "le public rit avec moi, pas de moi"],
    tip: "Comedians build a story towards a punchline: the last words of a sentence often carry the joke. Listen to the end of each sentence, and notice where the audience would laugh.", tip_fr: "Les humoristes construisent une histoire jusqu'à la chute : ce sont souvent les derniers mots d'une phrase qui portent la blague. Écoute bien la fin de chaque phrase, et repère où le public rirait."
  }]);

  W.LEXIS = W.LEXIS || {};
  W.LEXIS["c1-10"] = {
    colloc: [
      ["lancer une plaisanterie", "to crack a joke", "Il a lancé une plaisanterie pour détendre la salle.", "lancé", ["jeté", "tiré"]],
      ["avoir le sens de l'humour", "to have a sense of humour", "Elle a un vrai sens de l'humour.", "sens", ["goût", "esprit"]],
      ["tourner en dérision", "to ridicule", "Ce sketch tourne en dérision les réunions inutiles.", "tourne", ["met", "rend"]],
      ["pratiquer l'autodérision", "to make fun of oneself", "Il pratique l'autodérision avec talent.", "pratique", ["exerce", "joue"]],
      ["piquer un fou rire", "to get the giggles", "Ils ont piqué un fou rire en pleine cérémonie.", "piqué", ["pris", "fait"]],
      ["avoir de la répartie", "to have a ready wit", "Méfie-toi, elle a de la répartie !", "a", ["fait", "donne"]],
      ["manier l'ironie", "to handle irony", "Ce chroniqueur manie l'ironie avec finesse.", "manie", ["manœuvre", "mène"]],
      ["prendre au premier degré", "to take literally", "Il a pris ma remarque au premier degré.", "pris", ["porté", "tenu"]],
      ["dérider l'assistance", "to cheer up the audience", "Son anecdote a déridé l'assistance.", "déridé", ["dérivé", "déroulé"]],
      ["détendre l'atmosphère", "to lighten the mood", "Une petite blague détend l'atmosphère.", "détend", ["relâche", "étire"]]
    ],
    wf: [
      ["C'est une ___ très connue en Belgique. (HUMOUR)", "humoriste"],
      ["Il a répondu sur un ton ___. (IRONIE)", "ironique"],
      ["Ce spectacle est ___ : on rit du début à la fin. (HILARE)", "hilarant"],
      ["L'___ de ce dessin a choqué certains lecteurs. (INSOLENT)", "insolence"],
      ["Ses ___ font rire toute la classe. (PLAISANTER)", "plaisanteries"],
      ["Ce jeu de mots est ___ : il ne passe dans aucune autre langue. (TRADUIRE)", "intraduisible"],
      ["Il manie l'___ avec talent : il se moque d'abord de lui-même. (DÉRISION)", "autodérision"],
      ["Le dessinateur a été ___ pour sa caricature. (CENSURE)", "censuré"]
    ],
    kwt: [
      ["Il est mort l'an dernier.", "QUITTÉS", "Il nous ___ l'an dernier.", "a quittés"],
      ["Il plaisantait, il ne parlait pas sérieusement.", "DEGRÉ", "C'était ___.", "du second degré"],
      ["Il se moque de lui-même avec talent.", "AUTODÉRISION", "Il manie ___ talent.", "l'autodérision avec"],
      ["Ils ont ri sans pouvoir s'arrêter.", "FOU", "Ils ___.", "ont piqué un fou rire|ont eu un fou rire"],
      ["Il ridiculise les politiciens dans ses sketchs.", "DÉRISION", "Il ___ les politiciens dans ses sketchs.", "tourne en dérision"],
      ["Certains n'ont pas compris l'ironie de sa remarque.", "PREMIER", "Certains ont pris sa remarque ___.", "au premier degré"]
    ],
    idioms: [
      ["rire jaune", "rire sans en avoir envie, par gêne", "to give a forced laugh", "Quand il a plaisanté sur mon accent, j'ai ri jaune.", "j'ai ri jaune"],
      ["rire comme une baleine", "rire très fort", "to laugh one's head off", "Pendant le spectacle, on a ri comme des baleines.", "ri comme des baleines"],
      ["se tordre de rire", "rire au point de se plier en deux", "to be in stitches", "Le public se tordait de rire.", "se tordait de rire"],
      ["pince-sans-rire", "qui fait de l'humour sans en avoir l'air", "deadpan", "Son père est très pince-sans-rire.", "pince-sans-rire"],
      ["mettre les rieurs de son côté", "faire rire le public à son avantage", "to get the audience laughing on one's side", "D'une seule phrase, elle a mis les rieurs de son côté.", "a mis les rieurs de son côté"],
      ["avoir le mot pour rire", "savoir dire des choses drôles", "to always have a funny remark ready", "Notre professeur a toujours le mot pour rire.", "a toujours le mot pour rire"],
      ["ce n'est pas une mince affaire", "c'est difficile", "it's no easy matter", "Faire rire en langue étrangère, ce n'est pas une mince affaire.", "ce n'est pas une mince affaire"],
      ["être la risée de", "être l'objet des moqueries de", "to be the laughing stock of", "Avec ce chapeau, il était la risée du village.", "la risée du village"]
    ]
  };

  W.PROMPTS.push({ id: "fr-c1-10", level: "C1", q: "Quel rôle l'humour joue-t-il dans ta vie ? Donne un exemple.", fr: "What part does humour play in your life? Give an example.", time: 180,
    phrases: ["l'autodérision", "rire avec / rire de", "le second degré", "une pointe d'ironie", "ce n'est pas une mince affaire"],
    model: "L'humour me sert surtout à dédramatiser. Quand je fais une erreur en français, je préfère en rire : la semaine dernière, j'ai confondu un avocat et une avocate, et j'ai annoncé à mes amis que j'avais mangé une avocate en salade ! Tout le monde a ri, et moi le premier. L'autodérision désamorce la gêne : on rit avec moi plutôt que de moi. Bien sûr, comprendre le second degré en français n'est pas une mince affaire, mais une pointe d'ironie rend souvent la vie plus légère." });

  W.WRITING_GUIDE["c1-10"] = { genre: "An argued essay on a classic debate (DALF C1)", genre_fr: "Un essai argumenté sur un débat classique (DALF C1)",
    plan: [["Open with a quotation and raise the question.", "Ouvre sur une citation et pose la question."], ["First part: why laughter is precious.", "Première partie : pourquoi le rire est précieux."], ["Second part: when laughter hurts.", "Deuxième partie : quand le rire blesse."], ["Come back to the quotation to go further.", "Reviens à la citation pour aller plus loin."], ["Conclude with a nuanced criterion.", "Conclus par un critère nuancé."]],
    marks: [["disait l'humoriste Pierre Desproges", "a quotation to open", "une citation en ouverture"], ["pour le dire par euphémisme, peu démocratique", "an understatement", "une litote"], ["Pour autant, tout rire n'est pas libérateur", "the counter-argument", "le contre-argument"], ["revient moins à faire de l'humour qu'à blesser", "moins… que: comparison", "moins… que : la comparaison"], ["Le second degré suppose une complicité", "a key concept", "une notion clé"], ["En définitive", "conclusion", "la conclusion"]] };

  W.COURSE.push({ id: "c1-10", level: "C1", icon: "laugh", title: "Humour, wit and language", title_fr: "Humour, esprit et langue",
    intro: "In this last C1 unit, you'll explore how French plays and laughs: figures of speech (litotes, euphemism, irony), puns and wordplay, and how to handle humour and irony in conversation, one of the last steps to feeling at home in a language.",
    intro_fr: "Dans cette dernière unité du C1, tu vas découvrir comment le français joue et fait rire : les figures de style (litote, euphémisme, ironie), les jeux de mots, et la façon de manier l'humour et l'ironie dans la conversation, l'une des dernières étapes pour se sentir chez soi dans une langue.",
    can: ["Recognise and use litotes, euphemism, hyperbole and irony", "Understand common puns and wordplay", "Tell when something is meant au second degré", "Tease, react to a joke and laugh at yourself", "Write an argued essay on the limits of humour"],
    can_fr: ["Reconnaître et employer la litote, l'euphémisme, l'hyperbole et l'ironie", "Comprendre des jeux de mots courants", "Repérer ce qui est dit au second degré", "Taquiner, réagir à une blague et rire de soi", "Rédiger un essai argumenté sur les limites de l'humour"],
    lessons: [132, 133, 134], vocab: ["humourFR", "rireFR"], reading: "pourquoirit", prompt: "fr-c1-10",
    writing: { task: "Can we laugh at everything? Write an argued essay (250-300 words), opening with a quotation and ending with a nuanced answer.", task_fr: "Peut-on rire de tout ? Rédige un essai argumenté (250 à 300 mots) qui s'ouvre sur une citation et se termine par une réponse nuancée.", words: "250-300",
      tips: ["« … », disait…", "Il faut d'abord rappeler que…", "Pour autant, …", "C'est là que… prend tout son sens.", "En définitive, …"],
      checklist: ["I opened with a quotation and a question", "I showed what laughter makes possible", "I showed when it hurts", "I used at least one figure of speech", "My conclusion gives a nuanced criterion", "I wrote between 250 and 300 words"],
      model: "Peut-on rire de tout ?\n\n« On peut rire de tout, mais pas avec n'importe qui », disait l'humoriste Pierre Desproges. La formule, devenue célèbre, résume un débat qui n'a rien perdu de son actualité : le rire a-t-il des limites, et qui les fixe ?\n\nIl faut d'abord rappeler que le rire est une arme précieuse. Depuis Molière, la comédie se moque des puissants, des hypocrites et des pédants, et c'est précisément ce qui la rend nécessaire. Une société où l'on ne pourrait plus rire des dirigeants serait, pour le dire par euphémisme, peu démocratique. En France, la caricature a d'ailleurs une longue histoire, souvent marquée par la censure. Rire des puissants, c'est leur rappeler qu'ils ne sont pas au-dessus des autres.\n\nPour autant, tout rire n'est pas libérateur. Se moquer d'une personne pour ce qu'elle est, et non pour ce qu'elle fait, revient moins à faire de l'humour qu'à blesser. La frontière n'est pas toujours nette, mais une question peut servir de boussole : de qui rit-on, et avec qui ?\n\nC'est là que la formule de Desproges prend tout son sens. Le même trait d'esprit peut faire rire entre amis et heurter un public qui n'en partage pas les codes. Le second degré suppose une complicité ; sans elle, l'ironie devient cruauté.\n\nEn définitive, on peut sans doute rire de tout, à condition de savoir pourquoi l'on rit et de ne pas confondre l'insolence, qui vise le pouvoir, avec le mépris, qui écrase les plus faibles. Ce n'est pas une mince affaire, mais c'est peut-être la marque d'un humour réussi." } });
})();
