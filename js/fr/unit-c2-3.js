/* Cours de français, unité C2-3 « Literature and creation / Littérature et création » : le style indirect libre,
   les valeurs stylistiques des temps (imparfait narratif, imparfait contrefactuel, imparfait d'atténuation, présent
   de vérité générale), commenter un texte littéraire. Personnages fictifs, prénoms français. Faits vérifiables
   seulement : l'Oulipo fondé en 1960 autour de Raymond Queneau et François Le Lionnais ; Exercices de style (1947),
   99 versions d'une même anecdote ; La Disparition de Georges Perec (1969), roman sans la lettre e ; Flaubert, le
   « gueuloir » et le style indirect libre de Madame Bovary ; Verlaine, Chanson d'automne, Poèmes saturniens (1866) ;
   Camus, L'Étranger (1942) ; la rentrée littéraire, plusieurs centaines de romans à la fin de l'été. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "litteratureFR", icon: "book-open-text", title: "Literary forms", title_fr: "Les formes littéraires", level: "C2", words: [
    ["le recueil", "the collection (of poems, stories)", "Ce recueil réunit ses poèmes de jeunesse."],
    ["la focalisation", "the point of view (of the narration)", "La focalisation interne nous fait partager ses pensées."],
    ["le champ lexical", "the lexical field", "Le champ lexical de la mort domine le poème."],
    ["le pastiche", "the pastiche", "Ce texte est un pastiche de Proust."],
    ["l'incipit", "the opening lines (of a novel)", "L'incipit de ce roman est resté célèbre."],
    ["le genre littéraire", "the literary genre", "Le roman est un genre littéraire relativement jeune."],
    ["le prix littéraire", "the literary prize", "Les prix littéraires sont décernés à l'automne."],
    ["la rentrée littéraire", "the autumn publishing season", "La rentrée littéraire compte plusieurs centaines de romans."],
    ["l'éditeur / l'éditrice", "the publisher (m) / (f)", "Son éditrice lui a demandé de couper cent pages."],
    ["le manuscrit", "the manuscript", "Elle a envoyé son manuscrit à trois maisons d'édition."],
    ["l'alexandrin", "the alexandrine (twelve-syllable line)", "La tragédie classique est écrite en alexandrins."],
    ["le sonnet", "the sonnet", "Un sonnet compte quatorze vers."],
    ["la prose", "prose", "Il a écrit des poèmes en prose."],
    ["la tirade", "the long speech (in a play)", "La tirade du nez, dans Cyrano de Bergerac, est célèbre."],
    ["la réplique", "the line (in a play); the retort", "Cette réplique a fait rire toute la salle."],
    ["le monologue intérieur", "the interior monologue", "Le roman tout entier est un monologue intérieur."],
    ["l'épopée", "the epic", "La Chanson de Roland est une épopée médiévale."],
    ["la fable", "the fable", "Chaque fable de La Fontaine se termine par une morale."]
  ] },
  { id: "creationFR", icon: "feather", title: "Writing and creation", title_fr: "L'écriture et la création", level: "C2", words: [
    ["l'écriture", "writing; handwriting", "L'écriture lui prend tout son temps libre."],
    ["l'inspiration", "inspiration", "L'inspiration vient souvent en marchant."],
    ["la page blanche", "the blank page", "Il a passé la matinée devant la page blanche."],
    ["le brouillon", "the rough draft", "Elle garde tous ses brouillons."],
    ["la rature", "the crossing-out", "Ses manuscrits sont couverts de ratures."],
    ["raturer", "to cross out", "Il rature chaque phrase trois fois."],
    ["le premier jet", "the first draft", "Le premier jet est toujours mauvais."],
    ["l'autobiographie", "the autobiography", "Son autobiographie paraîtra en mars."],
    ["l'autofiction", "autofiction (a novel based on the author's life)", "L'autofiction mêle récit de soi et invention."],
    ["le style", "style", "Son style est d'une grande sobriété."],
    ["la verve", "verve, eloquence", "Il raconte ses souvenirs avec verve."],
    ["l'imaginaire", "the imagination, the imaginary world", "Ce roman nourrit l'imaginaire des enfants."],
    ["le lyrisme", "lyricism", "Le lyrisme de ses poèmes touche les lecteurs."],
    ["le souffle", "breath; (in writing) sweep, power", "Ce roman a du souffle."],
    ["la muse", "the muse", "Elle a été la muse de plusieurs peintres."],
    ["l'atelier d'écriture", "the creative writing workshop", "Il anime un atelier d'écriture en prison."],
    ["la critique littéraire", "literary criticism; the literary critics", "La critique littéraire a salué son premier roman."],
    ["la contrainte", "the constraint", "La contrainte peut stimuler la création."]
  ] });

  W.LESSONS.push(
  {
    id: 141, level: "C2", icon: "message-circle",
    title: "Comment avait-elle pu oublier ? Free indirect discourse", title_fr: "Comment avait-elle pu oublier ? Le style indirect libre",
    subtitle: "When a character's thoughts slip into the narration, without quotation marks or a verb of saying.", subtitle_fr: "Quand les pensées d'un personnage se glissent dans la narration, sans guillemets ni verbe introducteur.",
    body: `
<h2>Three ways to report a thought</h2>
<p>Direct: <s-fr>Elle se demanda : « Comment ai-je pu oublier ? »</s-fr> · Indirect: <s-fr>Elle se demanda comment elle avait pu oublier.</s-fr> · Free indirect: <s-fr>Elle s'arrêta. Comment avait-elle pu oublier ?</s-fr></p>
<h2>How it works</h2>
<p>From indirect speech, free indirect discourse keeps the tenses and the third person (<s-fr>elle avait pu</s-fr>, <s-fr>il serait trop tard</s-fr>). From direct speech, it keeps the question, the exclamation, the character's words and tone: <s-fr>Demain, il serait trop tard. Tant pis !</s-fr></p>
<h2>Why writers use it</h2>
<p>It blends the narrator's voice with the character's: the reader shares the character's thoughts from the inside, while the narrator can keep an ironic distance. Flaubert made it famous in <s-fr>Madame Bovary</s-fr>, where Emma's daydreams and the narrator's irony sometimes become hard to tell apart.</p>
<h2>How to spot it</h2>
<p>A question or an exclamation in a past narrative, with no verb of saying and no quotation marks · words the narrator wouldn't use himself (<s-fr>tout de même</s-fr>, <s-fr>après tout</s-fr>, <s-fr>bah</s-fr>) · the conditional for the character's future: <s-fr>Il reviendrait, c'était certain.</s-fr></p>
<div class="tip">In a translation, free indirect discourse is easily lost: English uses it too, but often with different tenses. When you read a French novel, ask at each question mark: who is speaking here, the narrator or the character?</div>
`,
    examples: [
      ["Elle se demanda : « Comment ai-je pu oublier ? »", "She wondered: “How could I have forgotten?”"],
      ["Elle se demanda comment elle avait pu oublier.", "She wondered how she could have forgotten."],
      ["Elle s'arrêta. Comment avait-elle pu oublier ?", "She stopped. How could she have forgotten?"],
      ["Il relut la lettre. Demain, il serait trop tard. Tant pis !", "He reread the letter. Tomorrow it would be too late. Too bad!"],
      ["Elle haussa les épaules. Après tout, ce n'était pas son problème.", "She shrugged. After all, it wasn't her problem."],
      ["Il regarda la mer. Il reviendrait, c'était certain.", "He looked at the sea. He would come back, that was certain."]
    ],
    quiz: [
      { q: "Which sentence is in free indirect discourse?", o: ["Il hésita. Fallait-il vraiment partir ?", "Il se demanda : « Faut-il vraiment partir ? »", "Il se demanda s'il fallait vraiment partir."], a: 0, ex: "A question in the narration, without a verb of saying." },
      { q: "Free indirect discourse keeps from indirect speech:", o: ["the tenses and the third person", "the quotation marks", "the verb of saying"], a: 0, ex: "From direct speech, it keeps questions and exclamations." },
      { q: "“Tomorrow it would be too late”, in free indirect discourse, is:", o: ["Demain, il serait trop tard.", "Demain, il sera trop tard, pensa-t-il.", "« Demain, ce sera trop tard. »"], a: 0, ex: "The conditional expresses the character's future." },
      { q: "Which novel made free indirect discourse famous?", o: ["Madame Bovary", "Les Fables de La Fontaine", "La Chanson de Roland"], a: 0, ex: "Flaubert, 1857." },
      { q: "What does free indirect discourse allow?", o: ["Sharing a character's thoughts while keeping the narrator's distance", "Avoiding any narrator", "Writing only dialogues"], a: 0, ex: "Two voices in one." }
    ]
  },
  {
    id: 142, level: "C2", icon: "hourglass",
    title: "Le lendemain, il partait: the stylistic values of tenses", title_fr: "Le lendemain, il partait : les valeurs stylistiques des temps",
    subtitle: "When the imparfait tells an event, the present states a truth and the past softens a request.", subtitle_fr: "Quand l'imparfait raconte un événement, que le présent énonce une vérité et que le passé adoucit une demande.",
    body: `
<h2>The narrative imparfait</h2>
<p>With a precise date, the imparfait can tell a single event, like a passé simple, but more vividly, as if the scene were filmed: <s-fr>Le lendemain, il partait pour Rome.</s-fr> · <s-fr>En 1969, Perec publiait La Disparition.</s-fr></p>
<h2>The counterfactual imparfait</h2>
<p>For something that almost happened: <s-fr>Un pas de plus, il tombait.</s-fr> (= he would have fallen) · <s-fr>Sans ton aide, je ratais mon train.</s-fr></p>
<h2>The polite imparfait</h2>
<p>To soften a request: <s-fr>Je voulais vous demander un service.</s-fr> · <s-fr>Je venais pour le poste.</s-fr> · also the passé composé or plus-que-parfait: <s-fr>J'étais venu vous dire…</s-fr></p>
<h2>The present of general truth</h2>
<p>For timeless truths, maxims, definitions, even inside a past narrative: <s-fr>Il comprit ce jour-là que la patience paie toujours.</s-fr> · <s-fr>On ne lit pas une lettre pareille debout.</s-fr></p>
<div class="tip">The narrative imparfait needs a time marker (le lendemain, en 1969, une heure plus tard): without it, the reader takes it as a background. Writers use it at a turning point, to slow the action down and make it vivid.</div>
`,
    examples: [
      ["Le lendemain, il partait pour Rome.", "The next day, he left for Rome."],
      ["En 1969, Perec publiait La Disparition.", "In 1969, Perec published La Disparition."],
      ["Un pas de plus, il tombait.", "One more step and he would have fallen."],
      ["Sans ton aide, je ratais mon train.", "Without your help, I'd have missed my train."],
      ["Je voulais vous demander un service.", "I wanted to ask you a favour."],
      ["Il comprit ce jour-là que la patience paie toujours.", "He understood that day that patience always pays off."]
    ],
    quiz: [
      { q: "In Le lendemain, il partait pour Rome, the imparfait:", o: ["tells a single event, vividly", "describes a habit", "describes a background"], a: 0, ex: "The narrative imparfait, with a time marker." },
      { q: "Un pas de plus, il tombait means:", o: ["One more step and he would have fallen.", "He fell after one more step.", "He used to fall at every step."], a: 0, ex: "The counterfactual imparfait." },
      { q: "Je voulais vous demander means:", o: ["I'd like to ask you (polite)", "I wanted to ask you yesterday, but didn't", "I'll ask you"], a: 0, ex: "The polite imparfait softens a request." },
      { q: "In Il comprit que la patience paie toujours, paie is:", o: ["a present of general truth", "a mistake for payait", "a subjunctive"], a: 0, ex: "A timeless truth stays in the present." },
      { q: "The narrative imparfait needs:", o: ["a time marker", "a subjunctive", "a question"], a: 0, ex: "Le lendemain, en 1969, une heure plus tard…" }
    ]
  },
  {
    id: 143, level: "C2", kind: "functional", icon: "book-marked",
    title: "Everyday French: commenting on a literary text", title_fr: "Le français de tous les jours : commenter un texte littéraire",
    subtitle: "Situate, observe, interpret: say what the text does, and how.", subtitle_fr: "Situer, observer, interpréter : dire ce que fait le texte, et comment.",
    body: `
<h2>Situating the text</h2>
<p><s-fr>Ce poème est extrait des Poèmes saturniens, parus en 1866.</s-fr> · <s-fr>Ce passage se situe au début du roman.</s-fr></p>
<h2>Observing the devices</h2>
<p><s-fr>L'auteur recourt à…</s-fr> (a metaphor, a repetition) · <s-fr>Le champ lexical de… traduit…</s-fr> · <s-fr>Le rythme ternaire donne…</s-fr> · <s-fr>Les sonorités en [ɔ̃] évoquent…</s-fr> · <s-fr>La focalisation interne nous fait partager…</s-fr></p>
<h2>Interpreting</h2>
<p><s-fr>On peut y voir…</s-fr> · <s-fr>Ce choix suggère que…</s-fr> · <s-fr>Loin de…, le poète…</s-fr> · <s-fr>Tout se passe comme si…</s-fr></p>
<h2>Linking device and meaning</h2>
<p>Never list devices for their own sake: each observation must serve an idea. <s-fr>Les vers très courts imitent le souffle coupé par les sanglots</s-fr> says more than <s-fr>les vers sont courts</s-fr>.</p>
<div class="tip">The French method has a name: <s-fr>le commentaire composé</s-fr>. Two or three parts, each built around an idea about the text, never a line-by-line paraphrase. Quote briefly, then analyse: the quotation is evidence, not decoration.</div>
`,
    examples: [
      ["Ce poème est extrait des Poèmes saturniens, parus en 1866.", "This poem is from the Poèmes saturniens, published in 1866."],
      ["Le poète recourt à des vers très courts.", "The poet uses very short lines."],
      ["Le champ lexical de la tristesse traduit la mélancolie du poète.", "The lexical field of sadness conveys the poet's melancholy."],
      ["Les sonorités nasales évoquent une plainte.", "The nasal sounds evoke a lament."],
      ["On peut y voir un paysage intérieur.", "We can see in it an inner landscape."],
      ["Tout se passe comme si la nature partageait sa douleur.", "It's as though nature shared his pain."]
    ],
    quiz: [
      { q: "“The poet uses metaphors” (commentary style) is:", o: ["Le poète recourt à des métaphores.", "Le poète recourt des métaphores.", "Le poète a recours de métaphores."], a: 0, ex: "recourir à, avoir recours à." },
      { q: "A good commentary:", o: ["links each device to a meaning", "lists every device", "paraphrases line by line"], a: 0, ex: "Device + effect + idea." },
      { q: "“The lexical field of nature” is:", o: ["le champ lexical de la nature", "le champ lexique de la nature", "le domaine lexical de nature"], a: 0, ex: "le champ lexical." },
      { q: "“We can see in it a lament” is:", o: ["On peut y voir une plainte.", "On peut voir y une plainte.", "On y peut voir une plainte."], a: 0, ex: "y before the infinitive." },
      { q: "In a commentary, a quotation is:", o: ["evidence to analyse", "decoration", "a replacement for analysis"], a: 0, ex: "Quote briefly, then analyse." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    141: {
      gap: [["Elle s'arrêta. Comment ___-elle pu oublier ? (avoir, plus-que-parfait)", "avait"], ["Il relut la lettre. Demain, il ___ trop tard. (être, conditional)", "serait"], ["Elle haussa les épaules. Après ___, ce n'était pas son problème. (all)", "tout"], ["Il regarda la mer. Il ___, c'était certain. (revenir, conditional)", "reviendrait"]],
      fix: [["Elle s'arrêta. Comment ai-je pu oublier ?", "Elle s'arrêta. Comment avait-elle pu oublier ?", "Free indirect discourse keeps the third person and the past tenses of the narration."], ["Il hésita. Demain, il sera trop tard.", "Il hésita. Demain, il serait trop tard.", "In a past narrative, the character's future is in the conditional."]],
      task: ["Rewrite this passage in free indirect discourse: Marc se demanda : « Pourquoi n'a-t-elle pas appelé ? Est-ce que je l'ai vexée ? Demain, je lui écrirai. »", "Réécris ce passage au style indirect libre : Marc se demanda : « Pourquoi n'a-t-elle pas appelé ? Est-ce que je l'ai vexée ? Demain, je lui écrirai. »", "Marc regarda son téléphone. Pourquoi n'avait-elle pas appelé ? L'avait-il vexée, sans le vouloir ? Demain, il lui écrirait. Oui, demain, c'était décidé."]
    },
    142: {
      gap: [["Le lendemain, il ___ pour Rome. (partir, narrative imparfait)", "partait"], ["Un pas de plus, il ___. (tomber, counterfactual imparfait)", "tombait"], ["Je ___ vous demander un service. (vouloir, polite imparfait)", "voulais"], ["Il comprit ce jour-là que la patience ___ toujours. (payer, general truth)", "paie"]],
      fix: [["Il comprit que la patience payait toujours, et elle paie encore aujourd'hui.", "Il comprit que la patience paie toujours.", "A timeless truth stays in the present, even in a past narrative."], ["Un pas de plus, il tomberait hier.", "Un pas de plus, il tombait.|Un pas de plus, il serait tombé.", "For something that almost happened: counterfactual imparfait or past conditional."]],
      task: ["Write four sentences telling a near-accident, with a narrative imparfait, a counterfactual imparfait and a present of general truth.", "Écris quatre phrases qui racontent un accident évité de justesse, avec un imparfait narratif, un imparfait contrefactuel et un présent de vérité générale.", "Ce matin-là, la route était verglacée. À huit heures dix, la voiture glissait vers le fossé. Une seconde de plus, elle basculait. Ce jour-là, j'ai compris que la prudence n'est jamais excessive."]
    },
    143: {
      gap: [["Ce poème est ___ des Poèmes saturniens. (taken from)", "extrait"], ["Le poète ___ à des vers très courts. (uses, recourir)", "recourt"], ["Le champ ___ de la tristesse traduit sa mélancolie. (lexical)", "lexical"], ["On peut y ___ un paysage intérieur. (see)", "voir"]],
      fix: [["Le poète recourt des métaphores.", "Le poète recourt à des métaphores.", "recourir à."], ["Les vers sont courts. Il y a des répétitions. Il y a des sons en on.", "Les vers très courts et la répétition des sons nasals imitent une plainte.", "Link each device to a meaning: don't just list them."]],
      task: ["Comment in four sentences on these lines by Verlaine: Les sanglots longs / Des violons / De l'automne / Blessent mon cœur / D'une langueur / Monotone.", "Commente en quatre phrases ces vers de Verlaine : Les sanglots longs / Des violons / De l'automne / Blessent mon cœur / D'une langueur / Monotone.", "Ces vers ouvrent la Chanson d'automne, extraite des Poèmes saturniens. Le poète recourt à des vers très courts, qui imitent un souffle entrecoupé de sanglots. Les sonorités nasales, répétées d'un vers à l'autre, prolongent cette plainte. On peut y voir un paysage intérieur : l'automne devient l'image même de la mélancolie du poète."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "commentaire", lesson: 143, level: "C2", icon: "book-marked", partner: "Félix", role: "a literature student preparing a commentary with you",
    title: "Preparing a commentary", title_fr: "Préparer un commentaire",
    setting: "You and Félix are preparing a commentary on Verlaine's Chanson d'automne for your literature class.", setting_fr: "Félix et toi préparez un commentaire de la Chanson d'automne de Verlaine pour votre cours de littérature.",
    turns: [
      { p: "Alors, ce poème de Verlaine, par quoi commence-t-on ?", fr: "So, this Verlaine poem, where do we start?" },
      { y: ["Il faut d'abord le situer : il est extrait des Poèmes saturniens, parus en 1866.", "Il faut d'abord le situer : il est extrait des Poèmes saturniens, paru en 1866.", "Il faut d'abord le situer : il est extrait de les Poèmes saturniens, parus en 1866."], fr: "First we need to situate it: it's from the Poèmes saturniens, published in 1866.", why: "parus agrees with Poèmes (m pl); de + les = des." },
      { p: "D'accord. Qu'est-ce qui frappe à la première lecture ?", fr: "OK. What strikes you on first reading?" },
      { y: ["La musicalité : les vers sont très courts, et la répétition des sons nasals évoque une plainte.", "La musicalité : les vers sont très courts, et la répétition des sons nasals évoquent une plainte.", "La musicalité : les vers sont très court, et la répétition des sons nasals évoque une plainte."], fr: "The musicality: the lines are very short, and the repetition of nasal sounds evokes a lament.", why: "The subject is la répétition: évoque; courts agrees with vers." },
      { p: "Comment le formuler dans le commentaire ?", fr: "How do we put that in the commentary?" },
      { y: ["On peut écrire que le poète recourt à des sonorités qui imitent les sanglots des violons.", "On peut écrire que le poète recourt des sonorités qui imitent les sanglots des violons.", "On peut écrire que le poète a recours de sonorités qui imitent les sanglots des violons."], fr: "We can write that the poet uses sounds that imitate the sobbing of the violins.", why: "recourir à, avoir recours à." },
      { p: "Et pour le thème ?", fr: "And for the theme?" },
      { y: ["Le champ lexical de la tristesse, avec sanglots, blessent et langueur, traduit la mélancolie du poète.", "Le champ lexical de la tristesse, avec sanglots, blessent et langueur, traduisent la mélancolie du poète.", "Le champ lexique de la tristesse, avec sanglots, blessent et langueur, traduit la mélancolie du poète."], fr: "The lexical field of sadness, with sobs, wound and languor, conveys the poet's melancholy.", why: "The subject is le champ lexical (singular): traduit." },
      { p: "Et notre interprétation ?", fr: "And our interpretation?" },
      { y: ["On peut y voir un paysage intérieur : l'automne n'est pas seulement une saison, c'est l'état d'âme du poète.", "On peut voir y un paysage intérieur : l'automne n'est pas seulement une saison, c'est l'état d'âme du poète.", "On peut y voir un paysage intérieure : l'automne n'est pas seulement une saison, c'est l'état d'âme du poète."], fr: "We can see in it an inner landscape: autumn isn't just a season, it's the poet's state of mind.", why: "y before the infinitive; un paysage intérieur (m)." }
    ] }
  );

  W.READINGS.push({
    id: "oulipo", level: "C2", icon: "feather", title: "L'Oulipo, ou la liberté sous contrainte", genre: "Article",
    intro: "A novel without the letter e, one anecdote told ninety-nine ways: since 1960, the Oulipo has been proving that constraints set writers free. The narrative imparfait and literary vocabulary.",
    intro_fr: "Un roman sans la lettre e, une anecdote racontée quatre-vingt-dix-neuf fois : depuis 1960, l'Oulipo prouve que la contrainte libère l'écriture. L'imparfait narratif et le vocabulaire littéraire.",
    paragraphs: [
      { en: "En novembre 1960, une dizaine d'écrivains et de mathématiciens se réunissaient à Paris autour de Raymond Queneau et de François Le Lionnais. Ainsi naissait l'Oulipo, l'Ouvroir de littérature potentielle, dont l'ambition paraît d'abord paradoxale : stimuler la création en s'imposant des contraintes.", fr: "In November 1960, about ten writers and mathematicians met in Paris around Raymond Queneau and François Le Lionnais. Thus the Oulipo was born, the Workshop of Potential Literature, whose ambition seems paradoxical at first: stimulating creation by imposing constraints on oneself." },
      { en: "Queneau avait ouvert la voie quelques années plus tôt. Dans ses Exercices de style, parus en 1947, il racontait quatre-vingt-dix-neuf fois la même anecdote insignifiante, une altercation dans un autobus, en changeant chaque fois de manière : sous forme de sonnet, de lettre officielle, d'interrogatoire, et ainsi de suite.", fr: "Queneau had paved the way a few years earlier. In his Exercices de style, published in 1947, he told the same trivial anecdote, a squabble on a bus, ninety-nine times, changing the manner each time: as a sonnet, an official letter, an interrogation, and so on." },
      { en: "Le défi le plus célèbre reste celui de Georges Perec. En 1969, il publiait La Disparition, un roman de plus de trois cents pages écrit sans jamais employer la lettre e, pourtant la plus fréquente de la langue française. Le lecteur attentif finit par comprendre que l'absence de cette voyelle est le sujet même de l'intrigue.", fr: "The most famous challenge remains Georges Perec's. In 1969, he published La Disparition, a novel of more than three hundred pages written without ever using the letter e, the most frequent letter in French. The attentive reader eventually realises that the absence of this vowel is the very subject of the plot." },
      { en: "Pourquoi s'infliger de telles règles ? Pour les oulipiens, la contrainte, loin d'entraver l'imagination, la libère : elle oblige à sortir des automatismes, à explorer des tournures auxquelles on n'aurait jamais songé. Le poète qui cherche une rime n'invente-t-il pas, chemin faisant, des images inattendues ?", fr: "Why inflict such rules on oneself? For the Oulipians, constraint, far from hampering the imagination, frees it: it forces you out of automatic habits, to explore turns of phrase you would never have thought of. Doesn't the poet looking for a rhyme invent, along the way, unexpected images?" },
      { en: "L'Oulipo existe toujours et accueille régulièrement de nouveaux membres. Ses jeux ont gagné les écoles et les ateliers d'écriture, où l'on découvre qu'écrire n'est pas seulement attendre l'inspiration : c'est aussi un artisanat, qui s'exerce et se transmet.", fr: "The Oulipo still exists and regularly welcomes new members. Its games have spread to schools and creative writing workshops, where people discover that writing isn't only waiting for inspiration: it's also a craft, which can be practised and passed on." }
    ],
    glossary: { "mathématiciens": "mathematicians", "ouvroir": "workshop (old word)", "potentielle": "potential", "paradoxale": "paradoxical", "insignifiante": "trivial", "interrogatoire": "interrogation", "voyelle": "vowel", "infliger": "to inflict", "oulipiens": "Oulipo members", "entraver": "to hamper", "automatismes": "automatic habits", "chemin": "way (chemin faisant: along the way)", "inattendues": "unexpected", "artisanat": "craft" },
    questions: [
      { q: "Qui se trouvait à l'origine de l'Oulipo ?", o: ["Raymond Queneau et François Le Lionnais", "Georges Perec seul", "Flaubert et Verlaine"], a: 0 },
      { q: "Que raconte Queneau dans Exercices de style ?", o: ["La même anecdote racontée quatre-vingt-dix-neuf fois", "Sa propre vie", "Une histoire sans la lettre e"], a: 0 },
      { q: "Quelle contrainte Perec s'est-il imposée dans La Disparition ?", o: ["Ne jamais employer la lettre e", "Écrire en alexandrins", "Écrire en une seule phrase"], a: 0 },
      { q: "Selon les oulipiens, à quoi sert la contrainte ?", o: ["À libérer l'imagination en sortant des automatismes", "À rendre les livres plus courts", "À faciliter la traduction"], a: 0 },
      { q: "Que découvre-t-on dans les ateliers d'écriture, selon l'article ?", o: ["Qu'écrire est aussi un artisanat qui s'exerce", "Qu'il faut attendre l'inspiration", "Que seuls les génies peuvent écrire"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-c2-3", unit: "c2-3", level: "C2", icon: "book-open-text",
    title: "Entretien avec une romancière", title_fr: "Entretien avec une romancière",
    context: "On the radio, Étienne interviews Clarisse, a novelist whose third book comes out for the autumn publishing season.", context_fr: "À la radio, Étienne reçoit Clarisse, romancière dont le troisième livre paraît pour la rentrée littéraire.",
    words: [["le gueuloir", "Flaubert's word for reading sentences aloud"], ["les guillemets", "quotation marks"], ["déroutant", "disconcerting"], ["passer inaperçu", "to go unnoticed"], ["le premier jet", "the first draft"]],
    lines: [["Étienne", "Clarisse, votre troisième roman paraît pour la rentrée littéraire. Comment travaillez-vous ?", "fr-FR"], ["Clarisse", "Lentement ! J'écris d'abord à la main, avec beaucoup de ratures, puis je relis tout à voix haute. Flaubert appelait cela passer ses phrases au gueuloir : si une phrase ne sonne pas juste à l'oral, elle ne tiendra pas sur la page.", "fr-FR"], ["Étienne", "Avec votre héroïne, on a l'impression d'être dans sa tête du début à la fin.", "fr-FR"], ["Clarisse", "C'est le style indirect libre. Je n'écris jamais elle pensait que : ses pensées se glissent dans la narration, sans guillemets. Le lecteur ne sait plus très bien qui parle, elle ou moi, et c'est exactement ce que je cherche.", "fr-FR"], ["Étienne", "N'est-ce pas déroutant ?", "fr-FR"], ["Clarisse", "Un peu, au début. Mais c'est ce qui crée l'intimité. Flaubert l'a poussé très loin dans Madame Bovary : on partage les rêveries d'Emma tout en percevant, par moments, l'ironie du narrateur.", "fr-FR"], ["Étienne", "La rentrée littéraire, c'est plusieurs centaines de romans en quelques semaines. Ça ne vous effraie pas ?", "fr-FR"], ["Clarisse", "Si, évidemment ! Mais un livre a une longue vie. Certains passent inaperçus en septembre et trouvent leurs lecteurs des années plus tard. J'essaie de ne pas y penser et de faire de mon mieux, phrase après phrase.", "fr-FR"], ["Étienne", "Un conseil à ceux qui veulent écrire ?", "fr-FR"], ["Clarisse", "Lire énormément, et accepter que le premier jet soit mauvais. Le vrai travail commence au moment où l'on relit.", "fr-FR"]],
    gist: ["De quoi parle l'entretien ?", ["De la façon d'écrire d'une romancière", "De la vie de Flaubert", "Du prix des livres"]],
    detail: [["Pourquoi Clarisse relit-elle tout à voix haute ?", ["Une phrase qui ne sonne pas juste à l'oral ne tiendra pas sur la page.", "Pour apprendre son texte par cœur.", "Parce qu'elle enregistre un livre audio."]], ["Quel procédé utilise-t-elle pour les pensées de son héroïne ?", ["Le style indirect libre", "Le dialogue au discours direct", "Le monologue théâtral"]], ["Qu'apporte ce procédé, selon elle ?", ["L'intimité avec le personnage", "Plus de rapidité", "Une meilleure traduction"]], ["Que conseille-t-elle à ceux qui veulent écrire ?", ["Lire énormément et accepter un premier jet mauvais", "Écrire vite sans se relire", "Attendre l'inspiration"]]],
    decode: ["Flaubert appelait cela passer ses phrases au gueuloir", "Le lecteur ne sait plus très bien qui parle"],
    tip: "Writers talk about their craft with technical words used casually: le premier jet, les ratures, le style indirect libre. Note them: they're the vocabulary of literary criticism, and you'll meet them again in any review.", tip_fr: "Les écrivains parlent de leur métier avec des mots techniques employés naturellement : le premier jet, les ratures, le style indirect libre. Note-les : c'est le vocabulaire de la critique littéraire, et tu les retrouveras dans toutes les chroniques."
  }]);

  W.LEXIS = W.LEXIS || {};
  W.LEXIS["c2-3"] = {
    colloc: [
      ["tenir le lecteur en haleine", "to keep the reader in suspense", "Ce thriller tient le lecteur en haleine jusqu'à la dernière page.", "tient", ["porte", "met"]],
      ["camper un personnage", "to portray a character", "En quelques lignes, l'auteur campe un personnage inoubliable.", "campe", ["pose", "dresse"]],
      ["planter le décor", "to set the scene", "Le premier chapitre plante le décor.", "plante", ["sème", "pose"]],
      ["ménager le suspense", "to maintain the suspense", "L'auteure ménage le suspense avec habileté.", "ménage", ["économise", "épargne"]],
      ["remporter un prix", "to win a prize", "Son premier roman a remporté un prix.", "remporté", ["emporté", "rapporté"]],
      ["trouver le ton juste", "to strike the right tone", "Il lui a fallu des mois pour trouver le ton juste.", "trouver", ["toucher", "frapper"]],
      ["faire paraître un roman", "to publish a novel", "Elle fait paraître son roman à la rentrée.", "paraître", ["apparaître", "montrer"]],
      ["puiser son inspiration", "to draw one's inspiration", "Il puise son inspiration dans son enfance.", "puise", ["pompe", "verse"]],
      ["noircir des pages", "to fill pages (with writing)", "Il a noirci des centaines de pages avant de trouver son sujet.", "noirci", ["sali", "teinté"]],
      ["dresser un portrait", "to paint a portrait (in words)", "Le livre dresse un portrait sévère de la bourgeoisie.", "dresse", ["lève", "monte"]]
    ],
    wf: [
      ["Le ___ de ce roman est inattendu. (DÉNOUER)", "dénouement"],
      ["Ses romans sont souvent ___. (AUTOBIOGRAPHIE)", "autobiographiques"],
      ["La ___ de ce poème vient de ses sonorités. (MUSIQUE)", "musicalité"],
      ["Le livre a reçu un accueil ___. (ENTHOUSIASME)", "enthousiaste"],
      ["Ce ___ réunit ses nouvelles de jeunesse. (RECUEILLIR)", "recueil"],
      ["Son écriture est d'une grande ___. (SOBRE)", "sobriété"],
      ["Ce passage est d'une ___ bouleversante. (SIMPLE)", "simplicité"],
      ["Il a fallu des mois de ___ avant la publication. (RELIRE)", "relecture"]
    ],
    kwt: [
      ["« Comment ai-je pu oublier ? » se demanda-t-elle.", "AVAIT", "Elle s'arrêta. ___ oublier ?", "Comment avait-elle pu"],
      ["Un pas de plus, et il serait tombé.", "TOMBAIT", "Un pas de plus, ___.", "et il tombait"],
      ["Je voudrais vous demander un service.", "VOULAIS", "Je ___ un service.", "voulais vous demander"],
      ["Le lendemain, il est parti pour Rome.", "PARTAIT", "Le lendemain, ___ Rome.", "il partait pour"],
      ["Ce roman a reçu le prix Goncourt.", "DÉCERNÉ", "On ___ à ce roman.", "a décerné le prix Goncourt"],
      ["L'auteur utilise de nombreuses métaphores.", "RECOURS", "L'auteur ___ de nombreuses métaphores.", "a recours à"]
    ],
    idioms: [
      ["avoir la plume facile", "écrire avec aisance", "to write with ease", "Elle a la plume facile : un article lui prend une heure.", "a la plume facile"],
      ["l'angoisse de la page blanche", "la peur de ne rien pouvoir écrire", "writer's block", "Tous les écrivains connaissent l'angoisse de la page blanche.", "l'angoisse de la page blanche"],
      ["un roman à l'eau de rose", "un roman sentimental et naïf", "a sentimental novel", "Elle lit des romans à l'eau de rose en vacances.", "romans à l'eau de rose"],
      ["une histoire à dormir debout", "une histoire invraisemblable", "a cock-and-bull story", "Il m'a raconté une histoire à dormir debout.", "une histoire à dormir debout"],
      ["avoir des lettres", "être cultivé", "to be well read", "On voit tout de suite qu'il a des lettres.", "a des lettres"],
      ["le mot de la fin", "la conclusion d'une discussion", "the final word", "Le mot de la fin revient à la romancière.", "Le mot de la fin"],
      ["lire entre les lignes", "comprendre ce qui est sous-entendu", "to read between the lines", "Dans ses romans, il faut lire entre les lignes.", "lire entre les lignes"],
      ["un livre de chevet", "un livre qu'on relit souvent", "a bedside book, a favourite book", "Les Essais de Montaigne sont son livre de chevet.", "son livre de chevet"]
    ]
  };

  W.PROMPTS.push({ id: "fr-c2-3", level: "C2", q: "Quel livre a laissé une trace durable dans ta vie ? Explique pourquoi.", fr: "Which book has left a lasting mark on your life? Explain why.", time: 240,
    phrases: ["Le livre qui…, c'est…", "Ce qui me frappe encore, c'est…", "l'auteur recourt à…", "Ce roman m'a appris que…", "en dire long"],
    model: "Le livre qui a laissé en moi la trace la plus durable, c'est L'Étranger, d'Albert Camus. Je l'ai lu à seize ans, presque par hasard, et sa première phrase reste gravée dans ma mémoire. Ce qui me frappe encore, c'est la sécheresse du style : des phrases courtes, presque sans émotion apparente, qui en disent pourtant très long. Meursault ne pleure pas à l'enterrement de sa mère, et la société finira par le lui reprocher davantage que son crime. Ce roman m'a appris qu'un style peut être une prise de position, et que le silence d'un personnage en dit parfois plus que de longs discours." });

  W.WRITING_GUIDE["c2-3"] = { genre: "The opening of a short story (creative writing)", genre_fr: "Le début d'une nouvelle (écriture créative)",
    plan: [["Open on an ordinary moment that is about to change.", "Ouvre sur un moment ordinaire sur le point de basculer."], ["Introduce the trigger (a letter, a call, an encounter).", "Introduis l'élément déclencheur (une lettre, un appel, une rencontre)."], ["Let the character's thoughts slip into the narration.", "Laisse les pensées du personnage se glisser dans la narration."], ["Slow the action down at the turning point.", "Ralentis l'action au moment décisif."], ["End on a suspended sentence that opens what follows.", "Termine sur une phrase en suspens qui ouvre la suite."]],
    marks: [["À quoi bon se précipiter ?", "free indirect discourse: her question, with no verb of saying", "style indirect libre : sa question, sans verbe introducteur"], ["Combien d'années s'étaient écoulées depuis la dernière ?", "free indirect discourse in the pluperfect", "style indirect libre au plus-que-parfait"], ["On ne lit pas une lettre pareille debout dans un couloir.", "the present of general truth", "le présent de vérité générale"], ["Elle n'avait plus vingt ans, tout de même.", "her inner voice, through the narration", "sa voix intérieure, à travers la narration"], ["Un quart d'heure plus tard, elle se décidait enfin.", "the narrative imparfait", "l'imparfait narratif"], ["plus rien ne serait jamais pareil", "the future in the past", "le futur dans le passé"]] };

  W.COURSE.push({ id: "c2-3", level: "C2", icon: "feather", title: "Literature and creation", title_fr: "Littérature et création",
    intro: "In this unit, you'll read and write like a writer: free indirect discourse, the stylistic values of tenses (the narrative imparfait, the imparfait of what almost happened, the present of general truth) and the method of commenting on a literary text.",
    intro_fr: "Dans cette unité, tu vas lire et écrire en écrivain : le style indirect libre, les valeurs stylistiques des temps (l'imparfait narratif, l'imparfait de ce qui a failli arriver, le présent de vérité générale) et la méthode du commentaire de texte littéraire.",
    can: ["Recognise and write free indirect discourse", "Use the stylistic values of tenses on purpose", "Discuss literary forms, writing and creation", "Comment on a literary text, linking devices and meaning", "Write the opening of a short story"],
    can_fr: ["Reconnaître et écrire le style indirect libre", "Employer à dessein les valeurs stylistiques des temps", "Parler des formes littéraires, de l'écriture et de la création", "Commenter un texte littéraire, en reliant procédés et sens", "Écrire le début d'une nouvelle"],
    lessons: [141, 142, 143], vocab: ["litteratureFR", "creationFR"], reading: "oulipo", prompt: "fr-c2-3",
    writing: { task: "Write the opening of a short story (350-400 words): an ordinary day that is about to change. Use free indirect discourse at least twice, a narrative imparfait and a present of general truth.", task_fr: "Écris le début d'une nouvelle (350 à 400 mots) : une journée ordinaire sur le point de basculer. Emploie au moins deux fois le style indirect libre, un imparfait narratif et un présent de vérité générale.", words: "350-400",
      tips: ["À quoi bon… ?", "Combien de… ?", "On ne… pas… (a general truth)", "Un quart d'heure plus tard, elle…", "… plus rien ne serait jamais pareil."],
      checklist: ["My opening sets an ordinary scene", "A trigger changes the situation", "I used free indirect discourse at least twice", "I used a narrative imparfait and a present of general truth", "My ending leaves the reader wanting more", "I wrote between 350 and 400 words"],
      model: "La lettre\n\nLe facteur passa à onze heures, comme chaque jour. Il avait plu toute la nuit, et les trottoirs luisaient encore sous un ciel indécis. Hélène l'entendit refermer la grille, puis le silence retomba sur la rue. Elle attendit quelques minutes avant de descendre. À quoi bon se précipiter ? Ce ne serait encore qu'une facture, ou l'une de ces publicités qu'elle jetait sans les lire.\n\nPourtant, l'enveloppe était là, posée sur le dessus de la pile. Une enveloppe bleue, à l'écriture penchée. Elle la reconnut aussitôt. Combien d'années s'étaient écoulées depuis la dernière ? Dix ? Douze ? Elle avait cessé de compter, ou plutôt, elle avait fait semblant de cesser. Certaines lettres, on les garde des années dans un tiroir ; d'autres, on voudrait ne jamais les avoir reçues.\n\nElle remonta l'escalier lentement, l'enveloppe à la main, sans l'ouvrir. Il fallait d'abord qu'elle s'assoie, qu'elle se fasse un thé, qu'elle reprenne son souffle. On ne lit pas une lettre pareille debout dans un couloir. Et puis, rien ne pressait : cette lettre avait attendu des années, elle pouvait bien attendre dix minutes de plus.\n\nDans la cuisine, la bouilloire se mit à siffler. Hélène posa l'enveloppe contre le sucrier, comme pour la tenir à distance. Elle avala une gorgée, se brûla la langue, reposa la tasse. Que pouvait-il bien vouloir, après tout ce temps ? S'excuser ? Demander un service ? Annoncer une mauvaise nouvelle ? Elle se surprit à espérer, et s'en voulut aussitôt. Elle n'avait plus vingt ans, tout de même.\n\nUn quart d'heure plus tard, elle se décidait enfin. Le papier se déchira avec un bruit sec. À l'intérieur, une seule feuille, pliée en quatre, et trois lignes à peine. Elle les lut une fois, puis une deuxième, sans parvenir à en saisir le sens. Les mots dansaient devant ses yeux. Elle les relut une troisième fois, lentement, comme on déchiffre une langue étrangère. Il revenait. Le 14 mars, il serait à Lyon, et il voulait la voir.\n\nHélène reposa la feuille sur la table. Dehors, un enfant riait, une voiture démarrait, la vie suivait son cours. Tout continuait comme avant, et pourtant, elle le savait, plus rien ne serait jamais pareil." } });
})();
