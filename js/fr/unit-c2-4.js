/* Cours de français, unité C2-4 « Knowledge, science and doubt / Savoir, science et doute » : les verbes de parole et
   de pensée (prétendre, alléguer, démentir, insinuer, douter que / se douter que), la ponctuation et la phrase longue,
   le rapport (DALF C2). Personnages fictifs, prénoms français ; les données des exercices de rapport sont inventées et
   signalées comme telles. Faits vérifiables seulement : Rabelais, Pantagruel (1532), « science sans conscience n'est
   que ruine de l'âme » ; Descartes, Discours de la méthode (1637) et le doute méthodique ; procès de Galilée en 1633 ;
   Karl Popper et la réfutabilité (1934) ; Thomas Kuhn, La Structure des révolutions scientifiques (1962) ; enquête
   internationale publiée en 2019 (Wellcome Global Monitor) classant la France parmi les pays les plus sceptiques sur
   la sécurité des vaccins ; espace avant les signes doubles dans la typographie française. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "savoirFR", icon: "microscope", title: "Knowledge and doubt", title_fr: "Savoir et doute", level: "C2", words: [
    ["l'épistémologie", "epistemology, the philosophy of science", "L'épistémologie s'interroge sur la valeur des connaissances."],
    ["la méthode scientifique", "the scientific method", "La méthode scientifique repose sur l'expérience."],
    ["l'empirisme", "empiricism", "L'empirisme fait de l'expérience la source du savoir."],
    ["la réfutabilité", "falsifiability", "Pour Popper, la réfutabilité distingue la science du reste."],
    ["le paradigme", "the paradigm", "La découverte a provoqué un changement de paradigme."],
    ["le consensus scientifique", "the scientific consensus", "Le consensus scientifique sur le climat est solide."],
    ["la controverse", "the controversy", "La controverse a duré des années."],
    ["le doute méthodique", "methodical doubt", "Descartes a fait du doute méthodique un point de départ."],
    ["la rigueur", "rigour", "Ce travail manque de rigueur."],
    ["l'objectivité", "objectivity", "L'objectivité totale est un idéal."],
    ["la subjectivité", "subjectivity", "Toute observation comporte une part de subjectivité."],
    ["l'idée reçue", "the received idea, the misconception", "Cette étude bat en brèche une idée reçue."],
    ["le biais cognitif", "the cognitive bias", "Le biais de confirmation est un biais cognitif bien connu."],
    ["la crédulité", "credulity", "Les rumeurs prospèrent sur la crédulité."],
    ["le complotisme", "conspiracy thinking", "Le complotisme se nourrit de la méfiance."],
    ["l'obscurantisme", "obscurantism", "Les Lumières ont combattu l'obscurantisme."],
    ["la méfiance", "distrust, wariness", "La méfiance envers les experts progresse."],
    ["l'hypothèse de travail", "the working hypothesis", "C'est pour l'instant une simple hypothèse de travail."]
  ] },
  { id: "discoursFR", icon: "quote", title: "Verbs of saying and thinking", title_fr: "Les verbes de parole et de pensée", level: "C2", words: [
    ["prétendre", "to claim (with doubt)", "Il prétend avoir tout inventé."],
    ["alléguer", "to allege", "L'avocat allègue un vice de procédure."],
    ["objecter", "to object, to raise as an objection", "On lui a objecté que les données étaient anciennes."],
    ["rétorquer", "to retort", "Elle a rétorqué que rien ne le prouvait."],
    ["démentir", "to deny (officially)", "Le ministère a démenti l'information."],
    ["insinuer", "to insinuate", "Que voulez-vous insinuer ?"],
    ["se douter de", "to suspect, to expect", "Je me doutais qu'il refuserait."],
    ["corroborer", "to corroborate", "Les témoignages corroborent sa version."],
    ["infirmer", "to invalidate, to disprove", "Les nouvelles données infirment l'hypothèse."],
    ["contredire", "to contradict", "Les chiffres contredisent son discours."],
    ["laisser entendre", "to hint, to imply", "Il a laissé entendre qu'il démissionnerait."],
    ["admettre", "to admit, to accept", "Elle admet s'être trompée dans ses calculs."],
    ["évoquer", "to mention, to bring up", "Le rapport évoque plusieurs pistes."],
    ["s'interroger", "to wonder, to question", "Les chercheurs s'interrogent sur ces résultats."],
    ["attester", "to attest, to bear witness to", "Ces documents attestent sa présence sur place."],
    ["sous-entendre", "to imply", "Sa question sous-entendait un reproche."],
    ["l'allégation", "the allegation", "Ces allégations n'ont jamais été prouvées."],
    ["le démenti", "the denial", "Le démenti est arrivé dans l'heure."]
  ] });

  W.LESSONS.push(
  {
    id: 144, level: "C2", icon: "quote",
    title: "Prétendre, alléguer, démentir: verbs of saying and thinking", title_fr: "Prétendre, alléguer, démentir : les verbes de parole et de pensée",
    subtitle: "The verb you choose to report someone's words already says what you think of them.", subtitle_fr: "Le verbe qu'on choisit pour rapporter des paroles dit déjà ce qu'on en pense.",
    body: `
<h2>Neutral, or not</h2>
<p>Neutral: <s-fr>dire</s-fr>, <s-fr>déclarer</s-fr>, <s-fr>indiquer</s-fr>, <s-fr>expliquer</s-fr> · Confident: <s-fr>affirmer</s-fr>, <s-fr>soutenir</s-fr> (to maintain), <s-fr>assurer</s-fr> · With doubt: <s-fr>prétendre</s-fr> (to claim), <s-fr>alléguer</s-fr> (to allege) · Hidden: <s-fr>insinuer</s-fr>, <s-fr>laisser entendre</s-fr>, <s-fr>sous-entendre</s-fr></p>
<h2>In a debate</h2>
<p><s-fr>objecter que</s-fr> · <s-fr>rétorquer que</s-fr> (to retort) · <s-fr>concéder que</s-fr> · <s-fr>admettre que</s-fr> · <s-fr>démentir</s-fr> (to deny officially) · <s-fr>nier</s-fr></p>
<h2>Mood after these verbs</h2>
<p><s-fr>prétendre que</s-fr>, <s-fr>affirmer que</s-fr> + indicative · <s-fr>nier que</s-fr>, <s-fr>contester que</s-fr> + subjunctive (usually): <s-fr>Il nie qu'il y ait eu une erreur.</s-fr> · <s-fr>prétendre</s-fr> + infinitive when the subject is the same: <s-fr>Il prétend avoir tout inventé.</s-fr></p>
<h2>A classic pair</h2>
<p><s-fr>douter que</s-fr> + subjunctive (to doubt): <s-fr>Je doute qu'il vienne.</s-fr> · <s-fr>se douter que</s-fr> + indicative (to suspect, to expect): <s-fr>Je me doutais qu'il viendrait.</s-fr> Opposite meanings, one small pronoun.</p>
<div class="tip">In a report or a summary, the verb is your judgement: <s-fr>Le ministre affirme</s-fr> is neutral, <s-fr>le ministre prétend</s-fr> suggests you don't believe him. At C2, choose it on purpose, and stay neutral when neutrality is expected.</div>
`,
    examples: [
      ["Il prétend avoir tout inventé.", "He claims to have invented everything."],
      ["L'avocat allègue un vice de procédure.", "The lawyer alleges a procedural flaw."],
      ["Elle a rétorqué que rien ne le prouvait.", "She retorted that nothing proved it."],
      ["Le ministère a démenti l'information.", "The ministry denied the report."],
      ["Il nie qu'il y ait eu une erreur.", "He denies there was a mistake."],
      ["Je doute qu'il vienne.", "I doubt he'll come."],
      ["Je me doutais qu'il viendrait.", "I suspected he would come."],
      ["Il a laissé entendre qu'il démissionnerait.", "He hinted that he would resign."]
    ],
    quiz: [
      { q: "Which verb suggests that you doubt what is said?", o: ["prétendre", "déclarer", "indiquer"], a: 0, ex: "prétendre = to claim, with doubt." },
      { q: "“I suspected he'd refuse” is:", o: ["Je me doutais qu'il refuserait.", "Je doutais qu'il refuserait.", "Je me doutais qu'il refuse."], a: 0, ex: "se douter que + indicative = to suspect." },
      { q: "“I doubt he's right” is:", o: ["Je doute qu'il ait raison.", "Je me doute qu'il a raison.", "Je doute qu'il a raison."], a: 0, ex: "douter que + subjunctive." },
      { q: "“The government denied the rumour” (officially) is:", o: ["Le gouvernement a démenti la rumeur.", "Le gouvernement a démentu la rumeur.", "Le gouvernement a dénié la rumeur."], a: 0, ex: "démentir → démenti." },
      { q: "“He claims to know the answer” is:", o: ["Il prétend connaître la réponse.", "Il prétend de connaître la réponse.", "Il prétend qu'il connaisse la réponse."], a: 0, ex: "prétendre + infinitive, without de." }
    ]
  },
  {
    id: 145, level: "C2", icon: "list-ordered",
    title: "Semicolons, colons, dashes: punctuation and the long sentence", title_fr: "Point-virgule, deux-points, tirets : la ponctuation et la phrase longue",
    subtitle: "Control a long sentence: each sign has a precise job.", subtitle_fr: "Maîtriser une phrase longue : chaque signe a une fonction précise.",
    body: `
<h2>Each sign, its job</h2>
<p>The semicolon <s-fr>;</s-fr> links two closely related clauses, or separates long items in a list: <s-fr>Les uns doutent ; les autres croient tout.</s-fr> · The colon <s-fr>:</s-fr> announces an explanation, a consequence, a list or a quotation: <s-fr>Il avait une excuse : la grève.</s-fr> · Dashes or parentheses set off a comment: <s-fr>La découverte, qui fit grand bruit, fut contestée</s-fr> / <s-fr>La découverte (contestée depuis) fit grand bruit.</s-fr></p>
<h2>The comma</h2>
<p>Never between the subject and its verb: <s-fr>Les chercheurs qui ont travaillé sur ce projet ont publié</s-fr>, with no comma before <s-fr>ont</s-fr>. Commas frame what is detached: <s-fr>Galilée, en 1633, dut abjurer.</s-fr> A non-defining relative clause takes commas; a defining one doesn't.</p>
<h2>French typography</h2>
<p>In France, a (non-breaking) space comes before <s-fr>; : ! ?</s-fr> and inside French quotation marks <s-fr>« »</s-fr>. Swiss and Canadian usage differ slightly.</p>
<h2>The long sentence</h2>
<p>A long sentence is clear when its structure is visible: a main clause first, then elements that build up, often in a rhythm of three. <s-fr>Descartes doute de tout : de ses sens, qui le trompent ; de ses raisonnements, qui peuvent faillir ; de sa propre existence, enfin, jusqu'à ce qu'il découvre qu'il pense.</s-fr></p>
<div class="tip">Read your long sentences aloud: if you run out of breath or lose the subject, cut. A good long sentence is a chosen effect, not an accident.</div>
`,
    examples: [
      ["Les uns doutent de tout ; les autres croient tout.", "Some doubt everything; others believe everything."],
      ["Il avait une excuse : la grève des transports.", "He had an excuse: the transport strike."],
      ["La découverte, qui fit grand bruit, fut longtemps contestée.", "The discovery, which caused a stir, was long disputed."],
      ["Les chercheurs qui ont travaillé sur ce projet ont publié leurs résultats.", "The researchers who worked on this project published their results."],
      ["Galilée, en 1633, dut abjurer ses idées.", "Galileo, in 1633, had to recant his ideas."],
      ["Descartes doute de tout : de ses sens, de ses raisonnements, de sa propre existence.", "Descartes doubts everything: his senses, his reasoning, his own existence."]
    ],
    quiz: [
      { q: "The colon announces:", o: ["an explanation, a list or a quotation", "the end of the sentence", "a question"], a: 0, ex: "Il avait une excuse : la grève." },
      { q: "Which sentence is correctly punctuated?", o: ["Les chercheurs qui ont travaillé ici ont publié.", "Les chercheurs qui ont travaillé ici, ont publié.", "Les chercheurs, qui ont travaillé ici ont publié."], a: 0, ex: "No comma between the subject and its verb." },
      { q: "In French typography (France), before ? ! ; : you put:", o: ["a space", "nothing", "a comma"], a: 0, ex: "A non-breaking space." },
      { q: "The semicolon:", o: ["links two closely related clauses", "ends a paragraph", "introduces a quotation"], a: 0, ex: "Les uns doutent ; les autres croient." },
      { q: "A good long sentence is:", o: ["structured and chosen for effect", "as long as possible", "without punctuation"], a: 0, ex: "Read it aloud to check." }
    ]
  },
  {
    id: 146, level: "C2", kind: "functional", icon: "file-text",
    title: "Everyday French: writing a report (DALF C2)", title_fr: "Le français de tous les jours : rédiger un rapport (DALF C2)",
    subtitle: "Set out the facts, analyse them and recommend, in a neutral, structured style.", subtitle_fr: "Exposer les faits, les analyser et recommander, dans un style neutre et structuré.",
    body: `
<h2>The structure</h2>
<p>A title · an introduction (purpose, context, sources) · findings · analysis · recommendations · a short conclusion. Headings are welcome.</p>
<h2>Presenting findings</h2>
<p><s-fr>Il ressort de l'enquête que…</s-fr> (the survey shows that) · <s-fr>Force est de constater que…</s-fr> (one has to admit that) · <s-fr>Il apparaît que…</s-fr> · <s-fr>Les données font état de…</s-fr></p>
<h2>Analysing</h2>
<p><s-fr>Plusieurs facteurs expliquent ce phénomène.</s-fr> · <s-fr>Ce constat s'explique notamment par…</s-fr> · <s-fr>Il convient toutefois de nuancer…</s-fr></p>
<h2>Recommending</h2>
<p><s-fr>Au vu de ces éléments, il est recommandé de…</s-fr> · <s-fr>Il serait souhaitable que…</s-fr> + subjunctive · <s-fr>Nous préconisons…</s-fr> (we recommend)</p>
<div class="tip">A report is impersonal: no anecdotes, no feelings, few uses of je. In the DALF C2, the written task can take the form of a report, an article, an editorial or a speech: the genre is set by the instructions, and respecting it earns points.</div>
`,
    examples: [
      ["Il ressort de l'enquête que les étudiants se méfient des réseaux sociaux.", "The survey shows that students distrust social media."],
      ["Force est de constater que les résultats sont décevants.", "One has to admit that the results are disappointing."],
      ["Ce constat s'explique notamment par le manque de formation.", "This finding is explained in particular by a lack of training."],
      ["Il convient toutefois de nuancer ces chiffres.", "These figures should, however, be qualified."],
      ["Au vu de ces éléments, il est recommandé de créer un module dédié.", "In light of these elements, it is recommended to create a dedicated module."],
      ["Il serait souhaitable que chaque étudiant y ait accès.", "It would be desirable for every student to have access to it."]
    ],
    quiz: [
      { q: "“The survey shows that” (formal) is:", o: ["Il ressort de l'enquête que", "Il sort de l'enquête que", "L'enquête ressort que"], a: 0, ex: "il ressort de… que." },
      { q: "“One has to admit that” is:", o: ["Force est de constater que", "Force de constater que", "Il est force de constater que"], a: 0, ex: "force est de + infinitive." },
      { q: "“It would be desirable for them to take part” is:", o: ["Il serait souhaitable qu'ils participent.", "Il serait souhaitable qu'ils participeraient.", "Il serait souhaitable qu'ils participent pas."], a: 0, ex: "souhaitable que + subjunctive." },
      { q: "“We recommend” (formal) is:", o: ["Nous préconisons", "Nous préconisions de", "Nous préconisons que de"], a: 0, ex: "préconiser + noun or infinitive." },
      { q: "A report should be:", o: ["impersonal and structured", "anecdotal and emotional", "written in the first person throughout"], a: 0, ex: "Facts, analysis, recommendations." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    144: {
      gap: [["Il ___ avoir tout inventé. (claims, prétendre)", "prétend"], ["Le ministère a ___ l'information. (denied officially)", "démenti"], ["Je me ___ qu'il refuserait. (suspected)", "doutais"], ["Il nie qu'il y ___ eu une erreur. (avoir, subjunctive)", "ait"]],
      fix: [["Je doute qu'il viendra.", "Je doute qu'il vienne.", "douter que + subjunctive."], ["Il prétend de connaître la réponse.", "Il prétend connaître la réponse.", "prétendre + infinitive, without de."]],
      task: ["Report a scientific controversy in four sentences, with affirmer, prétendre, rétorquer and démentir.", "Rapporte une controverse scientifique en quatre phrases, avec affirmer, prétendre, rétorquer et démentir.", "Un chercheur affirme avoir découvert un traitement révolutionnaire. Ses détracteurs prétendent que ses résultats ne sont pas reproductibles. Il rétorque que ses données sont accessibles à tous. Son université, de son côté, a démenti toute pression sur les évaluateurs."]
    },
    145: {
      gap: [["La découverte, ___ fit grand bruit, fut longtemps contestée. (which)", "qui"], ["Galilée, en 1633, ___ abjurer ses idées. (devoir, passé simple)", "dut"], ["Il doute de tout : de ses sens, de ses raisonnements, et ___ de sa propre existence. (finally)", "enfin"], ["Les chercheurs qui ont travaillé sur ce projet ___ publié leurs résultats. (avoir)", "ont"]],
      fix: [["La découverte que fit grand bruit fut contestée.", "La découverte, qui fit grand bruit, fut contestée.", "qui is the subject; a non-defining relative clause goes between commas."], ["Descartes doute de tout : de ses sens, de ses raisonnements et de sa existence.", "Descartes doute de tout : de ses sens, de ses raisonnements et de son existence.", "son before a vowel, even with a feminine noun."]],
      task: ["Write one long, well-punctuated sentence (40 to 60 words) about a scientific discovery, with a colon, semicolons and a relative clause between commas.", "Écris une seule phrase longue et bien ponctuée (40 à 60 mots) sur une découverte scientifique, avec deux-points, points-virgules et une relative entre virgules.", "La découverte de la pénicilline, qui doit beaucoup au hasard, illustre ce qu'est la démarche scientifique : une observation inattendue, d'abord ; une hypothèse, ensuite ; des années de vérification, enfin, avant que le médicament ne sauve des millions de vies."]
    },
    146: {
      gap: [["Il ___ de l'enquête que les étudiants se méfient des réseaux. (emerges)", "ressort"], ["Force est de ___ que les résultats sont décevants. (note)", "constater"], ["Au ___ de ces éléments, il est recommandé de créer un module. (in light)", "vu"], ["Nous ___ la création d'un module dédié. (recommend, formal)", "préconisons"]],
      fix: [["Il serait souhaitable que chaque étudiant a accès à ce module.", "Il serait souhaitable que chaque étudiant ait accès à ce module.", "souhaitable que + subjunctive."], ["Personnellement, je trouve que les résultats sont nuls.", "Force est de constater que les résultats sont décevants.", "A report is impersonal and measured."]],
      task: ["Write the findings and one recommendation of a short report on how students use their university library (invented data).", "Rédige les constats et une recommandation d'un court rapport sur l'usage de la bibliothèque universitaire par les étudiants (données inventées).", "Il ressort de l'enquête, menée auprès de deux cents étudiants, que la bibliothèque est surtout utilisée comme lieu de travail, beaucoup moins pour ses collections. Force est de constater que les horaires actuels ne correspondent pas aux besoins : près de la moitié des répondants souhaiteraient une ouverture le soir. Au vu de ces éléments, nous préconisons une extension des horaires jusqu'à vingt-deux heures."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "rapportfac", lesson: 146, level: "C2", icon: "file-text", partner: "Sandrine", role: "the head of your department",
    title: "Presenting a report", title_fr: "Présenter un rapport",
    setting: "You've written a report on how first-year students check information. Sandrine, the head of your department, has read it and asks you questions. The survey figures are invented for the exercise.", setting_fr: "Tu as rédigé un rapport sur la façon dont les étudiants de première année vérifient les informations. Sandrine, ta directrice de département, l'a lu et te pose des questions. Les chiffres de l'enquête sont inventés pour l'exercice.",
    turns: [
      { p: "J'ai lu votre rapport. Qu'en ressort-il, en deux mots ?", fr: "I've read your report. What does it show, in a nutshell?" },
      { y: ["Il en ressort que les étudiants manquent d'outils pour vérifier les informations qu'ils trouvent en ligne.", "Il en sort que les étudiants manquent d'outils pour vérifier les informations qu'ils trouvent en ligne.", "Il ressort en que les étudiants manquent d'outils pour vérifier les informations qu'ils trouvent en ligne."], fr: "It shows that students lack the tools to check the information they find online.", why: "il ressort de… que → il en ressort que." },
      { p: "Vraiment ? Sur quoi vous appuyez-vous ?", fr: "Really? What are you basing that on?" },
      { y: ["Sur une enquête menée auprès de trois cents étudiants : force est de constater que la plupart ne vérifient jamais leurs sources.", "Sur une enquête menée auprès de trois cents étudiants : force est de constater que la plupart ne vérifie jamais leurs sources.", "Sur une enquête menée auprès de trois cents étudiants : force de constater que la plupart ne vérifient jamais leurs sources."], fr: "On a survey of three hundred students: one has to admit that most of them never check their sources.", why: "la plupart + plural verb; force est de constater." },
      { p: "Certains collègues prétendent que ce n'est pas le rôle de l'université.", fr: "Some colleagues claim that it isn't the university's job." },
      { y: ["On peut leur objecter que l'esprit critique fait partie de toute formation scientifique.", "On peut les objecter que l'esprit critique fait partie de toute formation scientifique.", "On peut leur objecter de l'esprit critique fait partie de toute formation scientifique."], fr: "We can object that critical thinking is part of any scientific training.", why: "objecter quelque chose à quelqu'un → leur objecter que." },
      { p: "Que préconisez-vous, concrètement ?", fr: "What do you recommend, in practical terms?" },
      { y: ["Nous préconisons un module obligatoire en première année, consacré à l'évaluation des sources.", "Nous préconisons que un module obligatoire en première année, consacré à l'évaluation des sources.", "Nous préconisons un module obligatoire en première année, consacré de l'évaluation des sources."], fr: "We recommend a compulsory first-year module devoted to evaluating sources.", why: "préconiser + noun; consacré à." },
      { p: "Et si le budget ne le permet pas ?", fr: "And if the budget doesn't allow it?" },
      { y: ["Il serait alors souhaitable que ce module soit intégré aux cours existants, plutôt que d'y renoncer.", "Il serait alors souhaitable que ce module est intégré aux cours existants, plutôt que d'y renoncer.", "Il serait alors souhaitable que ce module soit intégré aux cours existants, plutôt que d'en renoncer."], fr: "It would then be desirable to build the module into existing courses, rather than give it up.", why: "souhaitable que + subjunctive; renoncer à → y renoncer." }
    ] }
  );

  W.READINGS.push({
    id: "doutescience", level: "C2", icon: "microscope", title: "Le doute, moteur de la science", genre: "Essai",
    intro: "From Rabelais to Popper and Kuhn: why doubt is at the heart of science, and how it can be turned against it. Verbs of saying and thinking, the long sentence.",
    intro_fr: "De Rabelais à Popper et Kuhn : pourquoi le doute est au cœur de la science, et comment il peut être retourné contre elle. Les verbes de parole et de pensée, la phrase longue.",
    paragraphs: [
      { en: "Science sans conscience n'est que ruine de l'âme, écrivait Rabelais en 1532. La formule, souvent citée, rappelle que le savoir n'a de valeur que s'il s'accompagne d'un regard critique. Encore faut-il savoir ce qu'est un savoir scientifique, et en quoi il se distingue d'une simple opinion.", fr: "Science without conscience is but the ruin of the soul, Rabelais wrote in 1532. The phrase, often quoted, reminds us that knowledge is only valuable if it comes with a critical eye. Still, we need to know what scientific knowledge is, and how it differs from mere opinion." },
      { en: "Descartes, dans son Discours de la méthode, en 1637, fait du doute un point de départ : il s'agit de ne rien tenir pour vrai qui n'ait été soigneusement examiné. Le doute méthodique n'est pas le refus de croire ; c'est l'exigence de vérifier.", fr: "In his Discourse on Method, in 1637, Descartes makes doubt a starting point: nothing should be taken as true that has not been carefully examined. Methodical doubt is not a refusal to believe; it is a demand to verify." },
      { en: "Au XXe siècle, le philosophe Karl Popper va plus loin. Selon lui, une théorie n'est scientifique que si elle peut être réfutée par l'expérience. Une affirmation qu'aucune observation ne pourrait contredire n'est pas fausse pour autant ; elle échappe simplement au champ de la science.", fr: "In the twentieth century, the philosopher Karl Popper goes further. According to him, a theory is scientific only if it can be refuted by experiment. A statement that no observation could contradict isn't false for all that; it simply falls outside the field of science." },
      { en: "L'historien des sciences Thomas Kuhn montre de son côté, en 1962, que la science ne progresse pas seulement par accumulation : elle connaît des révolutions, lorsqu'un paradigme longtemps dominant cède la place à un autre. Le procès de Galilée, en 1633, rappelle d'ailleurs combien ces bouleversements peuvent susciter de résistances.", fr: "The historian of science Thomas Kuhn shows for his part, in 1962, that science doesn't progress by accumulation alone: it goes through revolutions, when a long-dominant paradigm gives way to another. Galileo's trial, in 1633, is a reminder of how much resistance such upheavals can provoke." },
      { en: "Paradoxalement, le doute scientifique est aujourd'hui retourné contre la science. Les discours complotistes prétendent douter de tout, mais ils ne doutent jamais de leurs propres certitudes. C'est là toute la différence : le chercheur doute pour mieux savoir ; le complotiste doute pour ne pas avoir à savoir.", fr: "Paradoxically, scientific doubt is now being turned against science. Conspiracy theories claim to doubt everything, but they never doubt their own certainties. Therein lies the whole difference: the researcher doubts in order to know better; the conspiracy theorist doubts so as not to have to know." }
    ],
    glossary: { "ruine": "ruin", "regard": "eye, look", "soigneusement": "carefully", "exigence": "demand, requirement", "réfutée": "refuted", "échappe": "escapes, falls outside", "accumulation": "accumulation", "dominant": "dominant", "cède": "gives way", "bouleversements": "upheavals", "résistances": "resistance", "paradoxalement": "paradoxically", "complotistes": "conspiracy-minded", "certitudes": "certainties" },
    questions: [
      { q: "Que rappelle la formule de Rabelais ?", o: ["Le savoir n'a de valeur qu'accompagné d'un regard critique.", "La science est inutile.", "L'âme est plus importante que la science."], a: 0 },
      { q: "Qu'est-ce que le doute méthodique de Descartes ?", o: ["L'exigence de tout vérifier avant de le tenir pour vrai", "Le refus de croire quoi que ce soit", "Une méthode pour convaincre"], a: 0 },
      { q: "Selon Popper, quand une théorie est-elle scientifique ?", o: ["Quand elle peut être réfutée par l'expérience", "Quand tout le monde y croit", "Quand elle est ancienne"], a: 0 },
      { q: "Qu'a montré Thomas Kuhn ?", o: ["La science connaît des révolutions, des changements de paradigme.", "La science progresse uniquement par accumulation.", "Galilée avait tort."], a: 0 },
      { q: "Quelle différence l'auteur fait-il entre le chercheur et le complotiste ?", o: ["Le premier doute pour mieux savoir, le second pour ne pas avoir à savoir.", "Le premier ne doute jamais.", "Le second est plus rigoureux."], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-c2-4", unit: "c2-4", level: "C2", icon: "radio",
    title: "Pourquoi se méfie-t-on de la science ?", title_fr: "Pourquoi se méfie-t-on de la science ?",
    context: "On the radio, Sébastien interviews Nathalie, a sociologist, about distrust of science.", context_fr: "À la radio, Sébastien interroge Nathalie, sociologue, sur la méfiance envers la science.",
    words: [["s'effriter", "to crumble, to erode"], ["la défiance", "distrust"], ["conforter", "to reinforce, to confirm"], ["asséner", "to hammer home"], ["y être pour quelque chose", "to have something to do with it"]],
    lines: [["Sébastien", "Vaccins, climat, alimentation : la parole scientifique est de plus en plus contestée. Nathalie, vous êtes sociologue. Comment l'expliquez-vous ?", "fr-FR"], ["Nathalie", "Il faut d'abord nuancer : la confiance dans la science reste globalement élevée. Mais elle s'effrite sur certains sujets. Une grande enquête internationale publiée en 2019 classait ainsi la France parmi les pays les plus sceptiques quant à la sécurité des vaccins.", "fr-FR"], ["Sébastien", "Pourquoi la France ?", "fr-FR"], ["Nathalie", "Plusieurs crises sanitaires ont laissé des traces, et la défiance envers les institutions est forte. Or, quand on se méfie de ceux qui parlent, on se méfie de ce qu'ils disent.", "fr-FR"], ["Sébastien", "Les réseaux sociaux y sont-ils pour quelque chose ?", "fr-FR"], ["Nathalie", "Ils amplifient un mécanisme très ancien : le biais de confirmation. Nous retenons plus volontiers ce qui conforte nos convictions, et les algorithmes nous proposent justement ce que nous avons envie de croire.", "fr-FR"], ["Sébastien", "Comment parler à quelqu'un qui doute de tout ?", "fr-FR"], ["Nathalie", "Surtout pas en le ridiculisant : on ne ferait que le conforter dans ses positions. Mieux vaut l'interroger sur sa démarche : comment sait-il ce qu'il sait ? Quelles sources a-t-il consultées ? On ne convainc pas quelqu'un en lui assénant des vérités, mais en l'invitant à douter, y compris de ses propres certitudes.", "fr-FR"]],
    gist: ["De quoi parle l'entretien ?", ["De la méfiance envers la parole scientifique", "D'une nouvelle découverte médicale", "Du fonctionnement des réseaux sociaux"]],
    detail: [["Selon Nathalie, la confiance dans la science est-elle faible ?", ["Non, elle reste globalement élevée, mais s'effrite sur certains sujets.", "Oui, elle a disparu.", "Elle n'a jamais existé."]], ["Que montrait l'enquête internationale publiée en 2019 ?", ["La France fait partie des pays les plus sceptiques sur la sécurité des vaccins.", "La France fait le plus confiance aux vaccins.", "Personne ne doute des vaccins."]], ["Quel mécanisme les réseaux sociaux amplifient-ils ?", ["Le biais de confirmation", "La mémoire collective", "Le doute méthodique"]], ["Comment parler à quelqu'un qui doute de tout ?", ["En l'interrogeant sur sa démarche plutôt qu'en le ridiculisant", "En lui assénant des vérités", "En refusant de lui parler"]]],
    decode: ["quand on se méfie de ceux qui parlent, on se méfie de ce qu'ils disent", "en l'invitant à douter, y compris de ses propres certitudes"],
    tip: "Sociologists hedge their claims: il faut d'abord nuancer, globalement, sur certains sujets. These words are not filler: they tell you the exact scope of each statement. A C2 listener notes them.", tip_fr: "Les sociologues nuancent leurs affirmations : il faut d'abord nuancer, globalement, sur certains sujets. Ces mots ne sont pas du remplissage : ils indiquent la portée exacte de chaque affirmation. Un auditeur de niveau C2 les note."
  }]);

  W.LEXIS = W.LEXIS || {};
  W.LEXIS["c2-4"] = {
    colloc: [
      ["étayer une thèse", "to support a thesis", "Elle étaye sa thèse par des données solides.", "étaye", ["étale", "épaule"]],
      ["émettre des doutes", "to express doubts", "Plusieurs experts ont émis des doutes sur l'étude.", "émis", ["lancé", "jeté"]],
      ["mettre en doute", "to call into question", "Personne ne met en doute sa bonne foi.", "met", ["pose", "jette"]],
      ["battre en brèche", "to demolish (an argument)", "Cette découverte bat en brèche une idée reçue.", "bat", ["frappe", "casse"]],
      ["avancer une hypothèse", "to put forward a hypothesis", "Les chercheurs avancent une nouvelle hypothèse.", "avancent", ["poussent", "marchent"]],
      ["corroborer un témoignage", "to corroborate a statement", "Les images corroborent son témoignage.", "corroborent", ["corrigent", "collaborent"]],
      ["semer le doute", "to sow doubt", "Cette rumeur a semé le doute dans les esprits.", "semé", ["planté", "posé"]],
      ["faire table rase", "to wipe the slate clean", "Descartes voulait faire table rase de ses certitudes.", "table", ["plaque", "place"]],
      ["tirer au clair", "to clear up", "L'enquête devra tirer cette affaire au clair.", "tirer", ["poser", "lever"]],
      ["ériger en dogme", "to set up as dogma", "Il ne faut pas ériger cette théorie en dogme.", "ériger", ["dresser", "monter"]]
    ],
    wf: [
      ["La ___ de cette étude laisse à désirer. (RIGOUREUX)", "rigueur"],
      ["Une théorie scientifique doit être ___. (RÉFUTER)", "réfutable"],
      ["Ses ___ ont été démenties. (ALLÉGUER)", "allégations"],
      ["La ___ du public envers les experts inquiète. (MÉFIER)", "méfiance"],
      ["Il fait preuve d'une ___ déconcertante. (CRÉDULE)", "crédulité"],
      ["Les ___ de cette étude restent prudentes. (CONCLURE)", "conclusions"],
      ["Cette affirmation est totalement ___. (FONDER)", "infondée"],
      ["Le ___ méthodique est au cœur de la démarche scientifique. (DOUTER)", "doute"]
    ],
    kwt: [
      ["Il affirme être innocent, mais j'en doute.", "PRÉTEND", "Il ___, mais j'en doute.", "prétend être innocent"],
      ["Je soupçonnais qu'il mentait.", "DOUTAIS", "Je ___ mentait.", "me doutais qu'il"],
      ["Le ministère a nié officiellement cette information.", "DÉMENTI", "Le ministère ___ cette information.", "a officiellement démenti"],
      ["Les données confirment son hypothèse.", "CORROBORENT", "Les données ___.", "corroborent son hypothèse"],
      ["Il a laissé entendre que le projet serait abandonné.", "INSINUÉ", "Il ___ serait abandonné.", "a insinué que le projet"],
      ["On ne peut que constater que l'expérience a échoué.", "FORCE", "___ que l'expérience a échoué.", "Force est de constater"]
    ],
    idioms: [
      ["ne pas être né de la dernière pluie", "ne pas être naïf", "not to be born yesterday", "On ne la lui fait pas : il n'est pas né de la dernière pluie.", "n'est pas né de la dernière pluie"],
      ["en avoir le cœur net", "vérifier pour être tout à fait sûr", "to get to the bottom of it", "J'ai voulu en avoir le cœur net et j'ai refait le calcul.", "en avoir le cœur net"],
      ["avoir la puce à l'oreille", "commencer à se douter de quelque chose", "to smell a rat", "Ses contradictions m'ont mis la puce à l'oreille.", "mis la puce à l'oreille"],
      ["il n'y a pas de fumée sans feu", "toute rumeur a un fond de vérité", "there's no smoke without fire", "Il n'y a pas de fumée sans feu, disent ses détracteurs.", "Il n'y a pas de fumée sans feu"],
      ["faire comme saint Thomas", "ne croire que ce qu'on voit", "to be a doubting Thomas", "Je fais comme saint Thomas : je ne crois que ce que je vois.", "Je fais comme saint Thomas"],
      ["ne tenir qu'à un fil", "être très fragile", "to hang by a thread", "Sa théorie ne tient qu'à un fil.", "ne tient qu'à un fil"],
      ["la vérité sort de la bouche des enfants", "les enfants disent naïvement la vérité", "out of the mouths of babes", "La vérité sort de la bouche des enfants : ma fille a tout de suite vu l'erreur.", "La vérité sort de la bouche des enfants"],
      ["remettre les pendules à l'heure", "rétablir la vérité, faire une mise au point", "to set the record straight", "Le chercheur a remis les pendules à l'heure.", "a remis les pendules à l'heure"]
    ]
  };

  W.PROMPTS.push({ id: "fr-c2-4", level: "C2", q: "Comment distingues-tu une information fiable d'une rumeur ?", fr: "How do you tell reliable information from a rumour?", time: 240,
    phrases: ["Je commence par me demander…", "prétendre", "corroborer", "Je me méfie aussi de…", "Le doute n'est pas…, c'est…"],
    model: "Je commence par me demander qui parle, et d'où vient l'information. Une source anonyme qui prétend révéler un scandale m'inspire d'emblée de la méfiance. Je vérifie ensuite si d'autres médias, indépendants les uns des autres, corroborent les faits. Je me méfie aussi de mes propres biais : quand une nouvelle conforte exactement ce que je pensais déjà, c'est précisément le moment de redoubler de prudence. Enfin, je distingue les faits des interprétations : un chiffre peut être exact, et l'analyse qui l'accompagne, tendancieuse. Le doute n'est pas un refus de croire, c'est une manière de croire à bon escient." });

  W.WRITING_GUIDE["c2-4"] = { genre: "A report (DALF C2)", genre_fr: "Un rapport (DALF C2)",
    plan: [["Introduction: purpose, context and sources.", "Introduction : objet, contexte et sources."], ["Findings: what the data show.", "Constats : ce que montrent les données."], ["Analysis: causes, with nuance.", "Analyse : les causes, avec nuance."], ["Recommendations: precise and numbered.", "Recommandations : précises et numérotées."], ["A short conclusion that widens the view.", "Une courte conclusion qui élargit la perspective."]],
    marks: [["le présent rapport examine", "the purpose of the report", "l'objet du rapport"], ["Il ressort de l'enquête que", "presenting a finding", "présenter un constat"], ["Force est de constater", "a finding that has to be admitted", "un constat qui s'impose"], ["Il convient toutefois de nuancer", "nuancing", "nuancer"], ["nous préconisons trois mesures", "the recommendations", "les recommandations"], ["Il serait souhaitable que ces mesures soient mises en œuvre", "souhaitable que + subjunctive", "souhaitable que + subjonctif"]] };

  W.COURSE.push({ id: "c2-4", level: "C2", icon: "microscope", title: "Knowledge, science and doubt", title_fr: "Savoir, science et doute",
    intro: "In this unit, you'll think about knowledge and its limits: verbs of saying and thinking (prétendre, alléguer, démentir, se douter que), punctuation and the long sentence, and writing a report, one of the genres of the DALF C2 written exam.",
    intro_fr: "Dans cette unité, tu vas réfléchir au savoir et à ses limites : les verbes de parole et de pensée (prétendre, alléguer, démentir, se douter que), la ponctuation et la phrase longue, et le rapport, l'un des genres de l'épreuve écrite du DALF C2.",
    can: ["Choose the reporting verb that expresses your judgement", "Build long sentences that stay clear", "Discuss science, doubt and misinformation", "Present findings and recommendations in a neutral style", "Write a structured report"],
    can_fr: ["Choisir le verbe introducteur qui exprime ton jugement", "Construire des phrases longues qui restent claires", "Débattre de la science, du doute et de la désinformation", "Présenter des constats et des recommandations dans un style neutre", "Rédiger un rapport structuré"],
    lessons: [144, 145, 146], vocab: ["savoirFR", "discoursFR"], reading: "doutescience", prompt: "fr-c2-4",
    writing: { task: "Your university asks you for a report (350-400 words) on how students are trained in critical thinking, based on a survey (the figures are invented for the exercise). Present the findings, analyse them and make recommendations.", task_fr: "Ton université te demande un rapport (350 à 400 mots) sur la formation des étudiants à l'esprit critique, à partir d'une enquête (les chiffres sont inventés pour l'exercice). Présente les constats, analyse-les et formule des recommandations.", words: "350-400",
      tips: ["Le présent rapport examine…", "Il ressort de l'enquête que…", "Force est de constater que…", "Au vu de ces éléments, nous préconisons…", "Il serait souhaitable que…"],
      checklist: ["My report has a title and headings", "The introduction gives the purpose and the sources", "Findings and analysis are clearly separated", "My recommendations are precise", "My style is impersonal", "I wrote between 350 and 400 words"],
      model: "Rapport sur la formation des étudiants à l'esprit critique\n\nIntroduction\nÀ la demande de la présidence de l'université, le présent rapport examine la manière dont les étudiants évaluent les informations qu'ils consultent, et propose des pistes d'amélioration. Il s'appuie sur une enquête menée en mars auprès de trois cents étudiants de première année (données fictives, pour l'exercice). Elle a été complétée par une dizaine d'entretiens individuels.\n\nConstats\nIl ressort de l'enquête que les étudiants s'informent majoritairement en ligne : plus des trois quarts citent les réseaux sociaux comme première source d'actualité. Ce chiffre est révélateur. Force est de constater, par ailleurs, que la plupart ne vérifient que rarement l'origine d'une information avant de la partager. Seule une minorité déclare avoir déjà comparé plusieurs sources sur un même sujet. Enfin, près d'un étudiant sur deux reconnaît avoir déjà relayé une information qui s'est révélée fausse.\n\nAnalyse\nCe constat s'explique notamment par l'absence de formation spécifique : aucun enseignement de première année n'aborde explicitement l'évaluation des sources. Il convient toutefois de nuancer ces résultats. Les étudiants interrogés se montrent conscients du problème ; beaucoup regrettent de ne pas disposer d'outils pour y remédier. À cela s'ajoute un effet de génération : habitués à un flux continu d'informations, les étudiants privilégient la rapidité à la vérification. La difficulté tient donc moins à un désintérêt qu'à un manque de méthode.\n\nRecommandations\nAu vu de ces éléments, nous préconisons trois mesures. Premièrement, la création d'un module obligatoire consacré à l'évaluation des sources, intégré au premier semestre. Deuxièmement, l'organisation d'ateliers animés par la bibliothèque universitaire, dont le personnel possède une expertise reconnue en la matière. Troisièmement, l'inscription de l'esprit critique parmi les compétences évaluées dans chaque discipline. Ces mesures, peu coûteuses, s'appuieraient sur des ressources déjà disponibles. Il serait souhaitable que ces mesures soient mises en œuvre dès la prochaine rentrée.\n\nConclusion\nL'esprit critique ne s'improvise pas : il s'apprend, au même titre que toute compétence universitaire, et doit être cultivé tout au long du cursus. En donnant aux étudiants les moyens de douter avec méthode, l'université remplirait pleinement sa mission, qui est moins de transmettre des certitudes que d'apprendre à penser. C'est à cette condition qu'elle formera des citoyens éclairés." } });
})();
