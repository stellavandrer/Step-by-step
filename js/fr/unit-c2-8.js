/* Cours de français, unité C2-8 « Culture and references / Culture et références » : les expressions latines et les
   allusions culturelles (a fortiori, sine qua non, le talon d'Achille, la boîte de Pandore, un harpagon), les
   connecteurs rares de la langue soutenue (nonobstant, eu égard à, tant s'en faut, à l'aune de, partant), le
   développement personnel et le débat de l'oral du DALF C2. Personnages fictifs, prénoms français. Faits vérifiables
   seulement : Achille plongé dans le Styx et tenu par le talon (légende tardive, absente de l'Iliade) ; victoires
   coûteuses de Pyrrhus contre Rome (280 et 279 av. J.-C.) ; la « boîte » de Pandore, à l'origine une jarre, devenue
   boîte par une traduction d'Érasme au XVIe siècle ; l'épée de Damoclès racontée par Cicéron ; Molière (L'Avare,
   Tartuffe) ; Proust et la madeleine (1913) ; les Trente Glorieuses, expression de Jean Fourastié (1979) ; Pierre
   Bourdieu et le capital culturel ; Lewis Carroll, Alice au pays des merveilles (1865) ; « revenons à nos moutons »,
   d'après la Farce de Maître Pathelin. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "latinFR", icon: "landmark", title: "Latin phrases and myths", title_fr: "Latin et mythes", level: "C2", words: [
    ["a priori", "a priori, at first sight", "A priori, cette solution paraît raisonnable."],
    ["a fortiori", "all the more so", "C'est difficile pour un adulte, a fortiori pour un enfant."],
    ["a posteriori", "after the event, with hindsight", "On ne peut juger cette décision qu'a posteriori."],
    ["de facto", "de facto, in fact", "Il est devenu de facto le chef de l'équipe."],
    ["in extremis", "at the last minute", "Le train a été rattrapé in extremis."],
    ["sine qua non", "essential (une condition sine qua non)", "La confiance est une condition sine qua non."],
    ["ad hoc", "ad hoc, set up for a purpose", "Une commission ad hoc a été créée."],
    ["statu quo", "the status quo", "Personne ne souhaite le maintien du statu quo."],
    ["mutatis mutandis", "with the necessary changes", "Le raisonnement vaut, mutatis mutandis, pour les autres pays."],
    ["vice versa", "vice versa", "Les parents apprennent des enfants, et vice versa."],
    ["ex aequo", "tied, joint (in a ranking)", "Les deux candidats sont arrivés ex aequo."],
    ["a contrario", "conversely", "A contrario, une hausse des prix freinerait la demande."],
    ["in fine", "in the end, ultimately", "In fine, c'est le client qui paiera."],
    ["le talon d'Achille", "the Achilles heel", "Le manque de financement est le talon d'Achille du projet."],
    ["la boîte de Pandore", "Pandora's box", "Cette réforme risque d'ouvrir la boîte de Pandore."],
    ["le fil d'Ariane", "the guiding thread", "Ce personnage sert de fil d'Ariane au roman."],
    ["une victoire à la Pyrrhus", "a Pyrrhic victory", "Ce procès gagné à grands frais est une victoire à la Pyrrhus."],
    ["l'épée de Damoclès", "the sword of Damocles", "La menace de fermeture plane comme une épée de Damoclès."]
  ] },
  { id: "referencesFR", icon: "library", title: "Cultural references", title_fr: "Références culturelles", level: "C2", words: [
    ["un harpagon", "a miser (after Molière's L'Avare)", "Son oncle est un vrai harpagon : il ne prête jamais un centime."],
    ["un tartuffe", "a hypocrite (after Molière)", "Il fait la morale à tout le monde : quel tartuffe !"],
    ["une madeleine de Proust", "a sensation that brings back a memory", "L'odeur du pain chaud, c'est ma madeleine de Proust."],
    ["un don juan", "a womaniser, a seducer", "Il se prend pour un don juan."],
    ["le supplice de Tantale", "the torment of Tantalus, being tantalised", "Regarder ce buffet sans y toucher, c'est le supplice de Tantale."],
    ["le rocher de Sisyphe", "Sisyphus's rock, an endless task", "Ranger cette maison, c'est le rocher de Sisyphe."],
    ["le cheval de Troie", "the Trojan horse", "Ce logiciel était un véritable cheval de Troie."],
    ["le jugement de Salomon", "the judgement of Solomon", "Le juge a rendu un jugement de Salomon."],
    ["un travail de Titan", "a titanic task", "Reconstruire la cathédrale fut un travail de Titan."],
    ["l'âge d'or", "the golden age", "Pour beaucoup, les années 1960 furent l'âge d'or de la chanson française."],
    ["le siècle des Lumières", "the Age of Enlightenment", "Voltaire est une figure du siècle des Lumières."],
    ["la Belle Époque", "the Belle Époque (about 1880-1914)", "La Belle Époque s'achève avec la Grande Guerre."],
    ["les Trente Glorieuses", "the thirty years of post-war growth (1945-1975)", "L'expression les Trente Glorieuses vient de l'économiste Jean Fourastié."],
    ["Mai 68", "the events of May 1968 in France", "Mai 68 a bouleversé la société française."],
    ["une odyssée", "an odyssey", "Le voyage de retour a tourné à l'odyssée."],
    ["un mentor", "a mentor", "Elle a trouvé en lui un véritable mentor."],
    ["un dédale", "a maze", "Les touristes se perdent dans le dédale des ruelles."],
    ["une panacée", "a panacea, a cure-all", "Le numérique n'est pas une panacée."]
  ] });

  W.LESSONS.push(
  {
    id: 156, level: "C2", icon: "landmark",
    title: "A fortiori, le talon d'Achille: Latin phrases and cultural allusions", title_fr: "A fortiori, le talon d'Achille : expressions latines et allusions culturelles",
    subtitle: "The references educated French takes for granted, and how to use them without showing off.", subtitle_fr: "Les références que le français cultivé tient pour acquises, et comment les employer sans pédanterie.",
    body: `
<h2>Latin in everyday formal French</h2>
<p><s-fr>a priori</s-fr> (at first sight) · <s-fr>a posteriori</s-fr> (with hindsight) · <s-fr>a fortiori</s-fr> (all the more so) · <s-fr>de facto</s-fr> · <s-fr>in extremis</s-fr> (at the last minute) · <s-fr>sine qua non</s-fr> (essential) · <s-fr>statu quo</s-fr> · <s-fr>mutatis mutandis</s-fr> (with the necessary changes) · <s-fr>in fine</s-fr> (ultimately)</p>
<h2>Mythology</h2>
<p><s-fr>le talon d'Achille</s-fr> (a weak point) · <s-fr>la boîte de Pandore</s-fr> (once opened, troubles spread) · <s-fr>le fil d'Ariane</s-fr> (a guiding thread) · <s-fr>le tonneau des Danaïdes</s-fr> (an endless task) · <s-fr>l'épée de Damoclès</s-fr> (a constant threat) · <s-fr>une victoire à la Pyrrhus</s-fr> (a victory that costs too much)</p>
<h2>Literature: names that became words</h2>
<p><s-fr>un harpagon</s-fr> (a miser, after Molière's L'Avare) · <s-fr>un tartuffe</s-fr> (a hypocrite) · <s-fr>une madeleine de Proust</s-fr> (a taste or smell that brings back a memory) · <s-fr>un don juan</s-fr></p>
<h2>History</h2>
<p><s-fr>le siècle des Lumières</s-fr> · <s-fr>la Belle Époque</s-fr> · <s-fr>les Trente Glorieuses</s-fr> (1945-1975, an expression coined by the economist Jean Fourastié) · <s-fr>Mai 68</s-fr></p>
<div class="tip">In French typography, Latin phrases are often in italics in print. In speech, use them sparingly: one well-placed a fortiori sounds sharp; three in a row sound pedantic. The cultural allusions, on the other hand, are everywhere in the press: knowing them is what lets you read between the lines.</div>
`,
    examples: [
      ["A priori, cette solution paraît raisonnable.", "At first sight, this solution seems reasonable."],
      ["C'est difficile pour un adulte, a fortiori pour un enfant.", "It's hard for an adult, all the more so for a child."],
      ["La confiance est une condition sine qua non.", "Trust is an essential condition."],
      ["Le train a été rattrapé in extremis.", "The train was caught at the last minute."],
      ["Le manque de financement est le talon d'Achille du projet.", "Lack of funding is the project's Achilles heel."],
      ["Cette réforme risque d'ouvrir la boîte de Pandore.", "This reform risks opening Pandora's box."],
      ["Ce procès gagné à grands frais est une victoire à la Pyrrhus.", "This lawsuit, won at great cost, is a Pyrrhic victory."],
      ["Son oncle est un vrai harpagon : il ne prête jamais un centime.", "That old miser never lends a penny."]
    ],
    quiz: [
      { q: "A fortiori means:", o: ["all the more so", "at first sight", "at the last minute"], a: 0, ex: "With even stronger reason." },
      { q: "Une victoire à la Pyrrhus is:", o: ["a victory that costs too much", "an easy victory", "a victory by luck"], a: 0, ex: "After King Pyrrhus, who beat Rome at a terrible cost." },
      { q: "Un tartuffe is:", o: ["a hypocrite", "a miser", "a seducer"], a: 0, ex: "After Molière's play." },
      { q: "Une condition sine qua non is:", o: ["an essential condition", "an optional condition", "a forgotten condition"], a: 0, ex: "Without which nothing." },
      { q: "Le talon d'Achille means:", o: ["a weak point", "a strong point", "a long journey"], a: 0, ex: "Achilles' only vulnerable spot." }
    ]
  },
  {
    id: 157, level: "C2", icon: "link-2",
    title: "Nonobstant, eu égard à, tant s'en faut: rare formal connectors", title_fr: "Nonobstant, eu égard à, tant s'en faut : les connecteurs rares de la langue soutenue",
    subtitle: "The connectors of legal, academic and literary French, to recognise and to use with precision.", subtitle_fr: "Les connecteurs du français juridique, universitaire et littéraire, à reconnaître et à employer avec précision.",
    body: `
<h2>Cause and consideration</h2>
<p><s-fr>eu égard à</s-fr> (in view of, considering): <s-fr>eu égard à son âge</s-fr> · <s-fr>attendu que</s-fr>, <s-fr>vu que</s-fr> (given that, legal) · <s-fr>à la faveur de</s-fr> (thanks to, under cover of): <s-fr>à la faveur de la nuit</s-fr> · <s-fr>à l'aune de</s-fr> (by the yardstick of): <s-fr>jugé à l'aune de ses résultats</s-fr></p>
<h2>Opposition and restriction</h2>
<p><s-fr>nonobstant</s-fr> (notwithstanding): <s-fr>nonobstant les objections</s-fr> · <s-fr>hormis</s-fr> (except): <s-fr>hormis quelques détails</s-fr> · <s-fr>sous réserve de</s-fr> (subject to) · <s-fr>moyennant</s-fr> (in return for): <s-fr>moyennant un supplément</s-fr></p>
<h2>Adding and concluding</h2>
<p><s-fr>du reste</s-fr>, <s-fr>au reste</s-fr> (besides, moreover) · <s-fr>aussi bien</s-fr> (after all, besides, literary) · <s-fr>partant</s-fr> (therefore, literary)</p>
<h2>Far from it, very nearly</h2>
<p><s-fr>tant s'en faut</s-fr> (far from it): <s-fr>Il n'est pas satisfait, tant s'en faut.</s-fr> · <s-fr>il s'en est fallu de peu</s-fr> (it was a close thing): <s-fr>Il s'en est fallu de peu qu'il ne rate son train.</s-fr></p>
<div class="tip">These connectors give a text a legal or academic tone. In the DALF C2, two or three of them, used exactly, show mastery; misused, they betray a learner trying too hard. When in doubt, a simpler connector (malgré, sauf, donc) is always correct.</div>
`,
    examples: [
      ["Eu égard à son âge, le tribunal a été clément.", "In view of his age, the court was lenient."],
      ["Le projet a été adopté nonobstant les objections.", "The project was adopted notwithstanding the objections."],
      ["Tout est prêt, hormis quelques détails.", "Everything is ready, except for a few details."],
      ["L'accord sera signé sous réserve de l'avis du conseil.", "The agreement will be signed subject to the council's opinion."],
      ["Ils se sont enfuis à la faveur de la nuit.", "They escaped under cover of night."],
      ["Une politique se juge à l'aune de ses résultats.", "A policy is judged by its results."],
      ["Il n'est pas satisfait, tant s'en faut.", "He's not satisfied, far from it."],
      ["Il s'en est fallu de peu qu'il ne rate son train.", "He very nearly missed his train."]
    ],
    quiz: [
      { q: "Nonobstant means:", o: ["notwithstanding", "consequently", "besides"], a: 0, ex: "nonobstant les objections." },
      { q: "Tant s'en faut means:", o: ["far from it", "so much the better", "it's necessary"], a: 0, ex: "Il n'est pas satisfait, tant s'en faut." },
      { q: "“In view of the circumstances” is:", o: ["eu égard aux circonstances", "eu égard des circonstances", "eu égards les circonstances"], a: 0, ex: "eu égard à." },
      { q: "“Except for a few details” is:", o: ["hormis quelques détails", "hormis de quelques détails", "nonobstant quelques détails"], a: 0, ex: "hormis = except." },
      { q: "“By the yardstick of his results” is:", o: ["à l'aune de ses résultats", "à la faveur de ses résultats", "moyennant ses résultats"], a: 0, ex: "à l'aune de = measured by." }
    ]
  },
  {
    id: 158, level: "C2", kind: "functional", icon: "messages-square",
    title: "Everyday French: personal development and debate (DALF C2 oral)", title_fr: "Le français de tous les jours : développement personnel et débat (oral du DALF C2)",
    subtitle: "After the report, raise a question of your own, defend it, then hold your ground with the jury.", subtitle_fr: "Après le compte rendu, poser ta propre problématique, la défendre, puis tenir ta position face au jury.",
    body: `
<h2>Moving from the document to your question</h2>
<p><s-fr>Ce document m'amène à m'interroger sur…</s-fr> · <s-fr>Au-delà du cas évoqué, une question plus large se pose :…</s-fr> · <s-fr>Je défendrai l'idée que…</s-fr></p>
<h2>Developing</h2>
<p>A plan in two or three parts, examples from your own culture: <s-fr>Dans mon pays, par exemple, …</s-fr> · <s-fr>L'histoire récente en offre une illustration frappante :…</s-fr> · <s-fr>A fortiori, …</s-fr></p>
<h2>The debate with the jury</h2>
<p>Restate and clarify: <s-fr>Si je comprends bien votre objection, …</s-fr> · Grant and hold: <s-fr>Je vous l'accorde ; il n'en demeure pas moins que…</s-fr> · Refine: <s-fr>Je préciserais ma pensée :…</s-fr> · Disagree courteously: <s-fr>Je ne partage pas tout à fait cette analyse.</s-fr></p>
<h2>Concluding</h2>
<p><s-fr>En somme, …</s-fr> · <s-fr>Je retiendrais de cet échange que…</s-fr></p>
<div class="tip">The jury tests whether you can think aloud in French, not whether you're right. A strong candidate welcomes objections, rephrases them, and moves the discussion forward rather than repeating the same argument.</div>
`,
    examples: [
      ["Ce document m'amène à m'interroger sur la place de la culture générale.", "This document leads me to question the place of general culture."],
      ["Au-delà du cas évoqué, une question plus large se pose.", "Beyond the case mentioned, a broader question arises."],
      ["Je défendrai l'idée que la culture est une condition de l'esprit critique.", "I'll defend the idea that culture is a condition of critical thinking."],
      ["Si je comprends bien votre objection, vous jugez cette idée élitiste.", "If I understand your objection, you find this idea elitist."],
      ["Je vous l'accorde ; il n'en demeure pas moins que l'école doit la transmettre.", "I grant you that; the fact remains that school must pass it on."],
      ["Je retiendrais de cet échange que la question reste ouverte.", "What I'd take from this exchange is that the question remains open."]
    ],
    quiz: [
      { q: "In the DALF C2 oral, after the report you:", o: ["develop your own question and debate it", "read the document again", "summarise it a second time"], a: 0, ex: "Report, personal development, debate." },
      { q: "“This leads me to wonder about…” is:", o: ["Cela m'amène à m'interroger sur…", "Cela m'amène de m'interroger sur…", "Cela m'emmène à m'interroger de…"], a: 0, ex: "amener à + infinitive; s'interroger sur." },
      { q: "“I grant you that, but the fact remains that…” is:", o: ["Je vous l'accorde ; il n'en demeure pas moins que…", "Je vous accorde ; il n'en demeure pas que…", "Je vous l'accorde ; il demeure moins que…"], a: 0, ex: "il n'en demeure pas moins que." },
      { q: "A strong candidate in the debate:", o: ["welcomes objections and moves the discussion forward", "repeats the same argument", "agrees with everything"], a: 0, ex: "The jury tests your thinking aloud." },
      { q: "“I'd clarify what I mean” is:", o: ["Je préciserais ma pensée.", "Je préciserais mon penser.", "Je clarifierais ma pense."], a: 0, ex: "préciser sa pensée." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    156: {
      gap: [["C'est difficile pour un adulte, a ___ pour un enfant. (all the more so)", "fortiori"], ["La confiance est une condition sine ___ non. (essential)", "qua"], ["Le manque d'argent est le ___ d'Achille du projet. (weak point)", "talon"], ["Cette réforme risque d'ouvrir la boîte de ___. (Pandora)", "Pandore"]],
      fix: [["Il a gagné sans effort : c'est une victoire à la Pyrrhus.", "Il a gagné, mais à un prix exorbitant : c'est une victoire à la Pyrrhus.", "A Pyrrhic victory costs too much; it is never an easy one."], ["Il est arrivé in extremis, deux heures avant le départ.", "Il est arrivé in extremis, deux minutes avant le départ.", "in extremis = at the very last moment."]],
      task: ["Comment on a political situation in four sentences, with a priori, a fortiori, le talon d'Achille and une victoire à la Pyrrhus.", "Commente une situation politique en quatre phrases, avec a priori, a fortiori, le talon d'Achille et une victoire à la Pyrrhus.", "A priori, le gouvernement sort renforcé de ce vote. Mais la majorité obtenue est si étroite qu'il s'agit d'une victoire à la Pyrrhus. Son talon d'Achille reste le budget : faute d'accord, aucune réforme ne passera, a fortiori les plus coûteuses. L'opposition, elle, n'a plus qu'à attendre."]
    },
    157: {
      gap: [["___ égard à son âge, le tribunal a été clément. (in view of)", "Eu"], ["Le projet a été adopté ___ les objections. (notwithstanding)", "nonobstant"], ["Il n'est pas satisfait, tant s'en ___. (far from it)", "faut"], ["Une politique se juge à l'___ de ses résultats. (yardstick)", "aune"]],
      fix: [["Eu égard de son âge, il a été dispensé.", "Eu égard à son âge, il a été dispensé.", "eu égard à."], ["Tout est prêt, hormis de quelques détails.", "Tout est prêt, hormis quelques détails.", "hormis is followed directly by the noun."]],
      task: ["Write the rules of a reading room in four formal sentences, with sous réserve de, eu égard à, moyennant and nonobstant.", "Rédige le règlement d'une salle de lecture en quatre phrases soutenues, avec sous réserve de, eu égard à, moyennant et nonobstant.", "L'accès à la salle est réservé aux membres, sous réserve de la présentation d'une carte valide. Eu égard aux travaux en cours, les horaires sont réduits jusqu'en mars. Les personnes extérieures peuvent toutefois y accéder moyennant une participation de cinq euros. Ces dispositions s'appliquent nonobstant toute autorisation antérieure."]
    },
    158: {
      gap: [["Ce document m'___ à m'interroger sur la culture générale. (leads)", "amène"], ["Au-___ du cas évoqué, une question plus large se pose. (beyond)", "delà"], ["Je vous l'accorde ; il n'en ___ pas moins que l'école doit agir. (remains)", "demeure"], ["Je ___ ma pensée : je parle de l'école publique. (would clarify, préciser)", "préciserais"]],
      fix: [["Ce document m'amène de m'interroger sur la culture.", "Ce document m'amène à m'interroger sur la culture.", "amener quelqu'un à faire quelque chose."], ["Je vous accorde, il n'en demeure pas moins que vous avez tort.", "Je vous l'accorde ; il n'en demeure pas moins que je ne partage pas cette analyse.", "je vous l'accorde, with l'; and disagree courteously."]],
      task: ["After reporting a radio debate on general culture, move on to your own question and announce your plan in four sentences.", "Après avoir rendu compte d'un débat radiophonique sur la culture générale, passe à ta propre problématique et annonce ton plan en quatre phrases.", "Ce document m'amène à m'interroger sur une question plus large : la culture générale est-elle un privilège ou un droit ? Je défendrai l'idée qu'elle conditionne l'esprit critique, et que l'école doit, a fortiori aujourd'hui, la transmettre à tous. Dans un premier temps, je montrerai qu'elle reste inégalement répartie. Dans un second temps, j'évoquerai quelques pistes pour la rendre accessible."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "debatc2", lesson: 158, level: "C2", icon: "messages-square", partner: "Philippe", role: "a DALF C2 jury member",
    title: "The debate with the jury", title_fr: "Le débat avec le jury",
    setting: "In your DALF C2 oral, you've just defended the idea that general culture remains essential. Philippe, a member of the jury, challenges your position.", setting_fr: "À l'oral du DALF C2, tu viens de défendre l'idée que la culture générale reste indispensable. Philippe, membre du jury, conteste ta position.",
    turns: [
      { p: "Vous soutenez que la culture générale reste indispensable. N'est-ce pas un peu élitiste ?", fr: "You maintain that general culture remains essential. Isn't that a little elitist?" },
      { y: ["Je l'admets, elle peut l'être, eu égard à la manière dont elle se transmet : par la famille, bien plus que par l'école.", "Je l'admets, elle peut l'être, eu égard de la manière dont elle se transmet : par la famille, bien plus que par l'école.", "Je l'admets, elle peut l'être, eu égards à la manière dont elle se transmet : par la famille, bien plus que par l'école."], fr: "I admit it can be, given the way it's passed on: through the family far more than through school.", why: "eu égard à (invariable)." },
      { p: "Faudrait-il alors la supprimer des programmes ?", fr: "Should it be removed from the curriculum, then?" },
      { y: ["Tant s'en faut : la supprimer reviendrait à la réserver à ceux qui la reçoivent déjà chez eux.", "Tant s'en fait : la supprimer reviendrait à la réserver à ceux qui la reçoivent déjà chez eux.", "Tant en faut : la supprimer reviendrait à la réserver à ceux qui la reçoivent déjà chez eux."], fr: "Far from it: removing it would mean keeping it for those who already get it at home.", why: "tant s'en faut = far from it." },
      { p: "Pouvez-vous donner un exemple ?", fr: "Can you give an example?" },
      { y: ["Prenons l'expression victoire à la Pyrrhus : qui n'en connaît pas l'origine en saisit mal la portée.", "Prenons l'expression victoire à la Pyrrhus : qui n'en connaît pas l'origine en saisit mal le portée.", "Prenons l'expression victoire à la Pyrrhus : quiconque qui n'en connaît pas l'origine en saisit mal la portée."], fr: "Take the phrase Pyrrhic victory: whoever doesn't know its origin misses its full meaning.", why: "qui without an antecedent = whoever; la portée (f)." },
      { p: "Mais la culture évolue : les références d'hier ne sont plus celles d'aujourd'hui.", fr: "But culture changes: yesterday's references are not today's." },
      { y: ["Certes, mais l'un n'exclut pas l'autre : on peut citer Molière et une série télévisée, mutatis mutandis.", "Certes, mais l'une n'exclut pas l'autre : on peut citer Molière et une série télévisée, mutatis mutandis.", "Certes, mais l'un n'exclut l'autre pas : on peut citer Molière et une série télévisée, mutatis mutandis."], fr: "Admittedly, but one doesn't exclude the other: you can quote Molière and a TV series, with the necessary adjustments.", why: "A fixed phrase: l'un n'exclut pas l'autre." },
      { p: "Pour conclure, que faut-il retenir de votre position ?", fr: "To conclude, what should we take from your position?" },
      { y: ["Que la culture générale n'est pas un ornement, mais une condition sine qua non de l'esprit critique.", "Que la culture générale n'est pas un ornement, mais une condition sine qua none de l'esprit critique.", "Que la culture générale n'est pas une ornement, mais une condition sine qua non de l'esprit critique."], fr: "That general culture isn't an ornament, but an essential condition of critical thinking.", why: "sine qua non (Latin, invariable); un ornement (m)." }
    ] }
  );

  W.READINGS.push({
    id: "motsdeloin", level: "C2", icon: "landmark", title: "Ces mots qui viennent de loin", genre: "Essai",
    intro: "Pyrrhus, Achilles, Pandora, Harpagon: the French language is woven with references. Who has access to them? Latin, allusions and rare connectors.",
    intro_fr: "Pyrrhus, Achille, Pandore, Harpagon : la langue française est tissée de références. Mais qui y a accès ? Le latin, les allusions et les connecteurs rares.",
    paragraphs: [
      { en: "Lorsqu'un journaliste qualifie une élection de victoire à la Pyrrhus, il convoque, souvent sans y penser, un roi d'Épire mort il y a plus de deux mille ans. Pyrrhus remporta en effet deux victoires contre Rome, en 280 et en 279 avant notre ère, mais au prix de pertes si lourdes qu'elles ressemblaient fort à des défaites.", fr: "When a journalist calls an election a Pyrrhic victory, he or she summons, often without realising it, a king of Epirus who died more than two thousand years ago. Pyrrhus did win two victories against Rome, in 280 and 279 BC, but at the cost of losses so heavy that they looked very much like defeats." },
      { en: "Notre langue est ainsi tissée de références. Le talon d'Achille rappelle le héros de la guerre de Troie, que sa mère, selon une légende tardive, aurait plongé dans le Styx en le tenant par le talon, seul point resté vulnérable. Quant à la boîte de Pandore, elle n'en était pas une : chez les Grecs, il s'agissait d'une jarre, devenue boîte au XVIe siècle, sous la plume d'Érasme.", fr: "Our language is woven with references. Achilles' heel recalls the hero of the Trojan War, whose mother, according to a late legend, dipped him in the Styx holding him by the heel, the only spot left vulnerable. As for Pandora's box, it wasn't one: for the Greeks, it was a jar, which became a box in the sixteenth century, through the pen of Erasmus." },
      { en: "La littérature a, elle aussi, prêté ses personnages à la langue courante. Depuis Molière, un harpagon désigne un avare et un tartuffe, un hypocrite ; depuis Proust, une madeleine évoque le souvenir qui surgit d'une saveur oubliée.", fr: "Literature, too, has lent its characters to everyday language. Since Molière, a harpagon has meant a miser and a tartuffe a hypocrite; since Proust, a madeleine evokes the memory that springs from a forgotten taste." },
      { en: "Faut-il, partant, maîtriser la mythologie grecque pour lire la presse française ? Tant s'en faut. Mais qui ignore ces allusions passe à côté d'une partie du sens et, a fortiori, de l'ironie. Le sociologue Pierre Bourdieu l'avait souligné : ces références, que l'on croit naturelles, s'acquièrent d'abord en famille, ce qui en fait un instrument de distinction.", fr: "Must one, then, master Greek mythology to read the French press? Far from it. But whoever doesn't know these allusions misses part of the meaning and, all the more so, the irony. The sociologist Pierre Bourdieu pointed it out: these references, which we believe to be natural, are acquired first at home, which makes them an instrument of distinction." },
      { en: "D'où l'importance de l'école, qui seule peut rendre ce patrimoine commun à tous. Car une culture partagée n'est pas un ornement : c'est le fil d'Ariane qui permet à chacun de s'orienter dans le dédale des mots.", fr: "Hence the importance of school, which alone can make this heritage common to all. For a shared culture isn't an ornament: it's the guiding thread that lets everyone find their way through the maze of words." }
    ],
    glossary: { "qualifie": "describes as", "convoque": "summons", "pertes": "losses", "tissée": "woven", "tardive": "late", "plongé": "dipped", "jarre": "jar", "avare": "miser", "surgit": "springs up", "saveur": "taste, flavour", "partant": "therefore (literary)", "ignore": "doesn't know (ignorer: not to know)", "ornement": "ornament", "orienter": "s'orienter: to find one's way" },
    questions: [
      { q: "Pourquoi parle-t-on de victoire à la Pyrrhus ?", o: ["Pyrrhus gagna contre Rome au prix de pertes énormes.", "Pyrrhus gagna sans combattre.", "Pyrrhus perdit toutes ses batailles."], a: 0 },
      { q: "Qu'apprend-on sur la boîte de Pandore ?", o: ["Chez les Grecs, c'était une jarre, devenue boîte sous la plume d'Érasme.", "Elle a été retrouvée par des archéologues.", "Elle contenait de l'or."], a: 0 },
      { q: "Que désigne un harpagon ?", o: ["Un avare", "Un hypocrite", "Un séducteur"], a: 0 },
      { q: "Qu'avait souligné Pierre Bourdieu ?", o: ["Ces références s'acquièrent d'abord en famille et deviennent un instrument de distinction.", "La mythologie est inutile.", "Seuls les journalistes connaissent ces références."], a: 0 },
      { q: "Selon l'auteur, quel est le rôle de l'école ?", o: ["Rendre ce patrimoine commun à tous", "Supprimer ces références", "Réserver la culture aux meilleurs élèves"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-c2-8", unit: "c2-8", level: "C2", icon: "library",
    title: "La culture générale, un luxe ?", title_fr: "La culture générale, un luxe ?",
    context: "On the radio, Lucie interviews Cyril, who teaches French literature in a secondary school, about general culture.", context_fr: "À la radio, Lucie interroge Cyril, professeur de lettres dans un lycée, sur la culture générale.",
    words: [["l'honnête homme", "the cultivated, well-rounded person (17th-century ideal)"], ["des repères", "landmarks, reference points"], ["infondé", "unfounded"], ["regorger de", "to be full of"], ["s'y prendre", "to go about it"]],
    lines: [["Lucie", "Mythologie, grandes dates, classiques de la littérature : la culture générale a longtemps été la marque de l'honnête homme. Est-elle aujourd'hui un luxe ? Cyril, vous enseignez les lettres dans un lycée.", "fr-FR"], ["Cyril", "Je dirais plutôt qu'elle est une nécessité, à condition de s'entendre sur ce qu'on appelle culture générale. Il ne s'agit pas d'accumuler des noms et des dates, mais de disposer de repères pour comprendre le monde.", "fr-FR"], ["Lucie", "On lui reproche pourtant d'être élitiste.", "fr-FR"], ["Cyril", "Le reproche n'est pas infondé. Bourdieu l'a montré : ces références s'acquièrent d'abord en famille, si bien que l'école risque de valoriser ce que certains élèves possèdent déjà. Mais la conclusion qu'on en tire est souvent la mauvaise.", "fr-FR"], ["Lucie", "C'est-à-dire ?", "fr-FR"], ["Cyril", "Supprimer la culture générale des programmes, ce serait la réserver à ceux qui la reçoivent chez eux. C'est précisément à l'école qu'il revient de la transmettre à tous, et a fortiori à ceux qui n'y ont pas accès autrement.", "fr-FR"], ["Lucie", "Et comment s'y prendre, concrètement ?", "fr-FR"], ["Cyril", "En partant de ce que les élèves connaissent. Une série, une chanson, un jeu vidéo regorgent souvent de références antiques. Quand un élève découvre que le cheval de Troie de son ordinateur vient d'Homère, c'est toute une porte qui s'ouvre.", "fr-FR"]],
    gist: ["De quoi parle l'entretien ?", ["De la place de la culture générale et de sa transmission", "Des nouveaux programmes de mathématiques", "D'un jeu vidéo"]],
    detail: [["Comment Cyril définit-il la culture générale ?", ["Des repères pour comprendre le monde", "Une accumulation de noms et de dates", "Un luxe pour quelques-uns"]], ["Le reproche d'élitisme est-il fondé, selon lui ?", ["Il n'est pas infondé.", "Il est totalement faux.", "Il ne se prononce pas."]], ["Quelle conclusion juge-t-il mauvaise ?", ["Supprimer la culture générale des programmes", "L'enseigner à tous", "Partir des références des élèves"]], ["Comment propose-t-il de s'y prendre ?", ["En partant de ce que les élèves connaissent", "En faisant apprendre des listes de dates", "En supprimant les séries"]]],
    decode: ["ces références s'acquièrent d'abord en famille", "et a fortiori à ceux qui n'y ont pas accès autrement"],
    tip: "Notice how the speaker grants a criticism (le reproche n'est pas infondé) before turning it around (mais la conclusion qu'on en tire est la mauvaise). It's the most effective move in a debate: you'll use it yourself in the DALF C2.", tip_fr: "Remarque comment l'intervenant concède une critique (le reproche n'est pas infondé) avant de la retourner (mais la conclusion qu'on en tire est la mauvaise). C'est le mouvement le plus efficace d'un débat : tu l'emploieras toi-même au DALF C2."
  }]);

  W.LEXIS = W.LEXIS || {};
  W.LEXIS["c2-8"] = {
    colloc: [
      ["ouvrir la boîte de Pandore", "to open Pandora's box", "Cette décision pourrait ouvrir la boîte de Pandore.", "ouvrir", ["déboucher", "défaire"]],
      ["maintenir le statu quo", "to maintain the status quo", "Les deux camps préfèrent maintenir le statu quo.", "maintenir", ["tenir", "porter"]],
      ["remporter une victoire à la Pyrrhus", "to win a Pyrrhic victory", "Le parti a remporté une victoire à la Pyrrhus.", "remporté", ["emporté", "rapporté"]],
      ["trouver le fil d'Ariane", "to find the guiding thread", "Il faut trouver le fil d'Ariane de ce dossier.", "trouver", ["coudre", "tisser"]],
      ["faire planer une menace", "to hold a threat over", "La crise fait planer une menace sur l'emploi.", "planer", ["voler", "flotter"]],
      ["faire référence à", "to refer to", "Le titre fait référence à un mythe grec.", "fait", ["donne", "porte"]],
      ["puiser dans la mythologie", "to draw on mythology", "Ce romancier puise dans la mythologie grecque.", "puise", ["pompe", "verse"]],
      ["relever d'une culture commune", "to belong to a shared culture", "Ces références relèvent d'une culture commune.", "relèvent", ["relient", "remontent"]],
      ["citer un auteur", "to quote an author", "Elle cite souvent Montaigne.", "cite", ["récite", "incite"]],
      ["maîtriser les codes", "to master the codes", "Pour réussir, il faut maîtriser les codes.", "maîtriser", ["contrôler", "gouverner"]]
    ],
    wf: [
      ["Pour un étranger, cette référence est presque ___. (DÉCHIFFRER)", "indéchiffrable"],
      ["L'___ de ses connaissances impressionne le jury. (ÉTENDRE)", "étendue"],
      ["Ce mythe a une portée ___. (UNIVERS)", "universelle"],
      ["La ___ de ce texte demande une solide culture. (COMPRENDRE)", "compréhension"],
      ["Cette ___ à Molière m'a échappé. (RÉFÉRER)", "référence"],
      ["La culture générale serait-elle ___ ? (ÉLITE)", "élitiste"],
      ["Cette expression est ___ : elle ne se traduit pas mot à mot. (IDIOME)", "idiomatique"],
      ["Ce travail semble ___ : c'est le tonneau des Danaïdes. (TERMINER)", "interminable"]
    ],
    kwt: [
      ["Avant toute vérification, cette idée semble juste.", "PRIORI", "___ juste.", "A priori, cette idée semble"],
      ["La présence de tous les membres est absolument indispensable.", "QUA", "La présence de tous les membres est ___.", "une condition sine qua non"],
      ["Si c'est vrai pour un adulte, c'est encore plus vrai pour un enfant.", "FORTIORI", "C'est vrai pour un adulte, ___ enfant.", "et a fortiori pour un|a fortiori pour un"],
      ["Il a gagné, mais à un prix si élevé que sa victoire ressemble à une défaite.", "PYRRHUS", "Il a remporté ___.", "une victoire à la Pyrrhus"],
      ["Malgré les objections, le projet a été adopté.", "NONOBSTANT", "Le projet a été adopté ___.", "nonobstant les objections"],
      ["Il n'est pas du tout satisfait, loin de là.", "S'EN", "Il n'est pas satisfait, ___.", "tant s'en faut"]
    ],
    idioms: [
      ["avoir une épée de Damoclès au-dessus de la tête", "être sous une menace permanente", "to have the sword of Damocles hanging over one's head", "Avec ce procès, l'entreprise a une épée de Damoclès au-dessus de la tête.", "une épée de Damoclès au-dessus de la tête"],
      ["c'est le tonneau des Danaïdes", "c'est une tâche sans fin", "it's a bottomless pit", "Combler ce déficit, c'est le tonneau des Danaïdes.", "c'est le tonneau des Danaïdes"],
      ["un travail de Romain", "une tâche gigantesque", "a Herculean task", "Classer ces archives, c'est un travail de Romain.", "un travail de Romain"],
      ["tomber de Charybde en Scylla", "échapper à un danger pour tomber dans un pire", "out of the frying pan into the fire", "En changeant de fournisseur, ils sont tombés de Charybde en Scylla.", "tombés de Charybde en Scylla"],
      ["se croire sorti de la cuisse de Jupiter", "se croire supérieur aux autres", "to think one is God's gift", "Depuis sa promotion, il se croit sorti de la cuisse de Jupiter.", "se croit sorti de la cuisse de Jupiter"],
      ["être dans les bras de Morphée", "dormir", "to be in the arms of Morpheus", "À minuit, les enfants étaient déjà dans les bras de Morphée.", "dans les bras de Morphée"],
      ["c'est l'auberge espagnole", "chacun y trouve ce qu'il y apporte", "you get out what you put in", "Ce festival, c'est l'auberge espagnole.", "c'est l'auberge espagnole"],
      ["revenons à nos moutons", "revenons à notre sujet (d'après la Farce de Maître Pathelin)", "let's get back to the point", "Bon, revenons à nos moutons.", "revenons à nos moutons"]
    ]
  };

  W.PROMPTS.push({ id: "fr-c2-8", level: "C2", q: "Quelle référence culturelle de ton pays aimerais-tu faire connaître à un francophone ? Pourquoi ?", fr: "Which cultural reference from your country would you like to introduce to a French speaker? Why?", time: 240,
    phrases: ["Si je devais…, ce serait…", "a fortiori", "faire référence à", "mutatis mutandis", "C'est un peu notre…"],
    model: "Si je devais faire connaître une seule référence de ma culture, ce serait Alice au pays des merveilles. Lewis Carroll l'a publié en 1865, et ce livre a nourri des générations de lecteurs, des mathématiciens aux surréalistes. Quand un anglophone dit qu'il est tombé dans le terrier du lapin, il fait référence à Alice : il veut dire qu'il s'est perdu, avec délice, dans un sujet fascinant. C'est un peu notre madeleine de Proust collective, mutatis mutandis. Le connaître, c'est comprendre une part de notre humour, et a fortiori notre goût pour l'absurde." });

  W.WRITING_GUIDE["c2-8"] = { genre: "An argued essay (DALF C2)", genre_fr: "Un essai argumenté (DALF C2)",
    plan: [["Open with a rhetorical question and set out the problem.", "Ouvre sur une question rhétorique et pose le problème."], ["Give the strongest argument of the other side.", "Expose l'argument le plus fort du camp adverse."], ["Turn it around: what would follow from it.", "Retourne-le : ce qu'il entraînerait."], ["Propose a criterion and a way forward.", "Propose un critère et une piste."], ["Conclude with a striking formula.", "Conclus par une formule frappante."]],
    marks: [["Qui n'a jamais eu le sentiment", "a rhetorical question to open", "une question rhétorique en ouverture"], ["et, partant, notre compréhension du monde", "partant: therefore (literary)", "partant : donc (littéraire)"], ["Eu égard à ces inégalités", "eu égard à", "eu égard à"], ["Tant s'en faut.", "tant s'en faut: far from it", "tant s'en faut : bien au contraire"], ["à l'aune de son accessibilité", "à l'aune de", "à l'aune de"], ["une condition sine qua non de l'esprit critique", "a Latin phrase", "une expression latine"]] };

  W.COURSE.push({ id: "c2-8", level: "C2", icon: "landmark", title: "Culture and references", title_fr: "Culture et références",
    intro: "In this unit, you'll explore the shared culture behind the French language: Latin phrases and allusions (a fortiori, sine qua non, le talon d'Achille, un harpagon), rare formal connectors (nonobstant, eu égard à, tant s'en faut) and the personal development and debate of the DALF C2 oral.",
    intro_fr: "Dans cette unité, tu vas explorer la culture commune qui se cache derrière la langue : les expressions latines et les allusions (a fortiori, sine qua non, le talon d'Achille, un harpagon), les connecteurs rares de la langue soutenue (nonobstant, eu égard à, tant s'en faut) et le développement personnel et le débat de l'oral du DALF C2.",
    can: ["Understand and use common Latin phrases and cultural allusions", "Use rare formal connectors precisely", "Discuss culture, heritage and inequality", "Develop your own question and debate it with a jury", "Write an argued essay at DALF C2 level"],
    can_fr: ["Comprendre et employer les expressions latines et les allusions culturelles courantes", "Employer avec précision les connecteurs rares de la langue soutenue", "Débattre de la culture, du patrimoine et des inégalités", "Développer ta propre problématique et en débattre avec un jury", "Rédiger un essai argumenté de niveau DALF C2"],
    lessons: [156, 157, 158], vocab: ["latinFR", "referencesFR"], reading: "motsdeloin", prompt: "fr-c2-8",
    writing: { task: "Is general culture a privilege? Write an argued essay (350-400 words), with at least two Latin phrases or allusions and two rare connectors.", task_fr: "La culture générale est-elle un privilège ? Rédige un essai argumenté (350 à 400 mots), avec au moins deux expressions latines ou allusions et deux connecteurs rares.", words: "350-400",
      tips: ["Qui n'a jamais… ?", "A priori, …", "Eu égard à…", "Tant s'en faut.", "C'est à l'aune de… qu'il faut…"],
      checklist: ["I opened with a rhetorical question", "I gave the other side's strongest argument", "I turned it around", "I used two Latin phrases or allusions", "I used two rare connectors correctly", "I wrote between 350 and 400 words"],
      model: "La culture générale, privilège ou bien commun ?\n\nQui n'a jamais eu le sentiment, au détour d'une conversation, de passer à côté d'une allusion ? Une victoire à la Pyrrhus, une madeleine de Proust, un travail de Titan : ces références émaillent la langue française et, partant, notre compréhension du monde. Faut-il pour autant les considérer comme un luxe réservé à quelques-uns ? La question n'a rien d'anodin : elle engage notre conception même de l'égalité.\n\nA priori, la réponse semble évidente. La culture générale s'acquiert d'abord en famille, au fil des conversations, des visites et des lectures. Pierre Bourdieu l'avait montré : ce capital culturel, que l'on croit naturel, est en réalité inégalement réparti, et l'école tend à valoriser ce que certains élèves possèdent déjà. Eu égard à ces inégalités, on comprend que certains y voient un instrument de distinction sociale. Il s'en faut parfois de peu qu'une simple allusion ne devienne un mot de passe.\n\nIl serait pourtant hâtif d'en conclure qu'il faut renoncer à la transmettre. Tant s'en faut. Supprimer la culture générale des programmes reviendrait, in fine, à la réserver à ceux qui la reçoivent chez eux. Loin de réduire les inégalités, une telle décision les creuserait, a fortiori pour les élèves dont les familles n'ont pas les moyens d'y suppléer. Ce serait, au reste, une singulière manière de lutter contre l'élitisme que de priver les plus modestes de ce qui fait la richesse d'une langue.\n\nC'est donc à l'aune de son accessibilité qu'il faut juger la culture générale, et non à celle de ses origines. Elle n'a de sens que si elle est partagée. Encore faut-il l'enseigner autrement : partir des références des élèves, montrer que le cheval de Troie de leur ordinateur vient d'Homère, faire de chaque allusion une porte plutôt qu'une barrière. Nul besoin, pour cela, de bannir les classiques : il suffit de les rendre vivants.\n\nEn définitive, la culture générale n'est pas un ornement, mais une condition sine qua non de l'esprit critique. Comprendre les mots qu'on emploie, c'est déjà penser plus librement ; les partager, c'est faire société. À l'école de faire en sorte que ce fil d'Ariane ne soit pas tendu aux seuls initiés." } });
})();
