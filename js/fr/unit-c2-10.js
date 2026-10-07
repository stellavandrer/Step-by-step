/* Cours de français, unité C2-10 « Thinking the world / Penser le monde » : le verbe juste (remplacer faire, dire,
   avoir, mettre, il y a), la nominalisation, la phrase nominale et l'ellipse, l'épreuve écrite complète du DALF C2
   (dossier d'environ 2 000 mots, texte structuré d'au moins 700 mots, 3 h 30). Personnages fictifs, prénoms
   français. Faits vérifiables seulement : Montaigne (1533-1592) se retire en 1571, maire de Bordeaux de 1581 à 1585,
   Essais publiés en 1580 puis augmentés d'un troisième livre en 1588, devise « Que sais-je ? » ; Bacon, Essays
   (1597) ; La Tempête de Shakespeare emprunte à « Des cannibales » ; Maximes de La Rochefoucauld (1665) ; RGPD
   adopté par l'Union européenne en 2016. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "verbesPrecisFR", icon: "pen-tool", title: "Precise verbs", title_fr: "Les verbes précis", level: "C2", words: [
    ["commettre", "to commit (an error, a crime)", "Il a commis une erreur de calcul."],
    ["émettre", "to put forward (an idea, a doubt); to emit", "Elle a émis une hypothèse audacieuse."],
    ["instaurer", "to introduce, to establish", "La ville a instauré la gratuité des transports."],
    ["susciter", "to arouse, to give rise to", "Ce film a suscité une vive polémique."],
    ["engendrer", "to create, to generate", "La crise a engendré beaucoup de chômage."],
    ["receler", "to hold, to conceal; to receive (stolen goods)", "Ce vieux grenier recèle des trésors."],
    ["revêtir", "to take on (an importance, a form); to cover", "Cette élection revêt une importance particulière."],
    ["dresser", "to draw up (a list, a report); to put up; to train (an animal)", "Le médecin a dressé la liste des risques."],
    ["formuler", "to formulate, to express", "Formulez votre demande par écrit."],
    ["exercer", "to exert (an influence); to practise (a profession); to train", "Il exerce le métier d'avocat depuis vingt ans."],
    ["entraîner", "to lead to, to cause; to train", "Cette décision entraînera des licenciements."],
    ["éprouver", "to feel (an emotion); to test", "J'éprouve une grande admiration pour elle."],
    ["déceler", "to detect", "Ce test permet de déceler la maladie très tôt."],
    ["élaborer", "to draw up, to develop (a plan)", "L'équipe a élaboré une nouvelle stratégie."],
    ["s'avérer", "to turn out to be", "Le chemin s'est avéré plus long que prévu."],
    ["préconiser", "to recommend, to advocate", "Les médecins préconisent une activité physique régulière."],
    ["esquisser", "to sketch, to outline", "Le ministre a esquissé les grandes lignes de la réforme."],
    ["cerner", "to grasp, to pin down; to surround", "C'est un personnage difficile à cerner."]
  ] },
  { id: "penseeFR", icon: "brain", title: "Thinking the world", title_fr: "Penser le monde", level: "C2", words: [
    ["la pensée", "thought, thinking; pansy (flower)", "La pensée de Montaigne reste très moderne."],
    ["la réflexion", "reflection, thought; remark", "Ce livre invite à la réflexion."],
    ["le paradoxe", "paradox", "Paradoxe : plus on communique, plus on se sent seul."],
    ["la nuance", "nuance, shade", "Son jugement manque de nuance."],
    ["la lucidité", "clear-sightedness", "Elle analyse la situation avec lucidité."],
    ["le scepticisme", "scepticism", "Il accueille ces promesses avec scepticisme."],
    ["la pertinence", "relevance", "Je doute de la pertinence de cet exemple."],
    ["le discernement", "judgement, discernment", "Il faut faire preuve de discernement."],
    ["l'humilité", "humility", "Le vrai savant fait preuve d'humilité."],
    ["la remise en question", "questioning, reassessment", "Cet échec a été l'occasion d'une remise en question."],
    ["l'aveuglement", "blindness (refusal to see)", "Leur aveuglement a conduit à la catastrophe."],
    ["la complexité", "complexity", "Il faut accepter la complexité du réel."],
    ["l'émancipation", "emancipation", "L'éducation est un instrument d'émancipation."],
    ["la condition humaine", "the human condition", "Montaigne s'interroge sur la condition humaine."],
    ["le moraliste", "the moralist (a writer who observes human behaviour)", "La Rochefoucauld est un grand moraliste du XVIIe siècle."],
    ["la maxime", "maxim", "Les Maximes de La Rochefoucauld paraissent en 1665."],
    ["le cheminement", "progress, line of thought", "Le lecteur suit le cheminement de sa pensée."],
    ["le bon sens", "common sense", "C'est une question de bon sens."]
  ] });

  W.LESSONS.push(
  {
    id: 162, level: "C2", icon: "pen-tool",
    title: "Faire, dire, il y a: choosing the precise verb", title_fr: "Faire, dire, il y a : choisir le verbe juste",
    subtitle: "Replace the all-purpose verbs with precise ones: the surest sign of a C2 text.", subtitle_fr: "Remplacer les verbes passe-partout par des verbes précis : le signe le plus sûr d'un texte de niveau C2.",
    body: `
<h2>Instead of faire</h2>
<table>
<tr><th>Vague</th><th>Precise</th></tr>
<tr><td><s-fr>faire une erreur</s-fr></td><td><s-fr>commettre une erreur</s-fr></td></tr>
<tr><td><s-fr>faire un projet</s-fr></td><td><s-fr>élaborer un projet</s-fr></td></tr>
<tr><td><s-fr>faire un rapport</s-fr></td><td><s-fr>rédiger un rapport</s-fr></td></tr>
<tr><td><s-fr>faire une enquête</s-fr></td><td><s-fr>mener une enquête</s-fr></td></tr>
<tr><td><s-fr>faire un effort</s-fr></td><td><s-fr>fournir un effort</s-fr></td></tr>
<tr><td><s-fr>faire des problèmes</s-fr></td><td><s-fr>engendrer, causer des problèmes</s-fr></td></tr>
</table>
<h2>Instead of dire</h2>
<p><s-fr>dire une idée</s-fr> → <s-fr>émettre, formuler une idée</s-fr> · <s-fr>dire que c'est faux</s-fr> → <s-fr>affirmer, soutenir que c'est faux</s-fr> · <s-fr>dire un secret</s-fr> → <s-fr>révéler un secret</s-fr> · <s-fr>dire une critique</s-fr> → <s-fr>formuler une critique</s-fr></p>
<h2>Instead of avoir, mettre, il y a, être</h2>
<p><s-fr>avoir un rôle</s-fr> → <s-fr>jouer un rôle</s-fr> · <s-fr>avoir de l'importance</s-fr> → <s-fr>revêtir une importance</s-fr> · <s-fr>avoir des risques</s-fr> → <s-fr>comporter, receler des risques</s-fr> · <s-fr>mettre en place</s-fr> → <s-fr>instaurer, établir</s-fr> · <s-fr>il y a un problème</s-fr> → <s-fr>un problème se pose</s-fr> · <s-fr>c'est plus difficile que prévu</s-fr> → <s-fr>cela s'avère plus difficile que prévu</s-fr></p>
<div class="tip">At C2, examiners look closely at lexical precision. Reread your text hunting for faire, dire, avoir, mettre and il y a: each one you replace makes the text sharper. But don't overdo it: a precise verb must also be the right one, and a text stuffed with rare words sounds forced.</div>
`,
    examples: [
      ["Le gouvernement a instauré un couvre-feu.", "The government introduced a curfew."],
      ["Cette réforme risque d'engendrer de nouvelles inégalités.", "This reform may create new inequalities."],
      ["Le rapport dresse un constat sévère.", "The report paints a harsh picture."],
      ["Ce projet recèle bien des risques.", "This project holds many risks."],
      ["Une question se pose : qui paiera ?", "A question arises: who will pay?"],
      ["L'enquête s'est avérée plus complexe que prévu.", "The investigation turned out to be more complex than expected."],
      ["Elle a formulé une critique précise.", "She put forward a precise criticism."]
    ],
    quiz: [
      { q: "A precise verb for “faire une erreur” is:", o: ["commettre une erreur", "exercer une erreur", "émettre une erreur"], a: 0, ex: "commettre une erreur, une faute." },
      { q: "A precise verb for “dire une hypothèse” is:", o: ["émettre une hypothèse", "commettre une hypothèse", "instaurer une hypothèse"], a: 0, ex: "émettre or formuler une hypothèse." },
      { q: "A precise verb for “mettre en place une règle” is:", o: ["instaurer une règle", "engendrer une règle", "déceler une règle"], a: 0, ex: "instaurer, établir." },
      { q: "“Il y a une question” becomes:", o: ["une question se pose", "une question s'avère", "une question revêt"], a: 0, ex: "une question se pose." },
      { q: "S'avérer means:", o: ["to turn out to be", "to swear", "to deny"], a: 0, ex: "Le projet s'est avéré coûteux." }
    ]
  },
  {
    id: 163, level: "C2", icon: "newspaper",
    title: "Hausse des prix, colère des agriculteurs: nominal sentences and ellipsis", title_fr: "Hausse des prix, colère des agriculteurs : la phrase nominale et l'ellipse",
    subtitle: "Condense with nouns, leave out what goes without saying, and know when to stop.", subtitle_fr: "Condenser grâce aux noms, omettre ce qui va de soi, et savoir s'arrêter à temps.",
    body: `
<h2>Nominalisation</h2>
<p>Turn a verb or an adjective into a noun to condense an idea: <s-fr>Les prix augmentent</s-fr> → <s-fr>l'augmentation des prix</s-fr> · <s-fr>Le ministre a démissionné</s-fr> → <s-fr>la démission du ministre</s-fr> · <s-fr>Les élèves sont absents</s-fr> → <s-fr>l'absence des élèves</s-fr> · Frequent suffixes: <s-fr>-tion</s-fr>, <s-fr>-ment</s-fr>, <s-fr>-age</s-fr>, <s-fr>-ure</s-fr>, <s-fr>-ité</s-fr>, <s-fr>-ance</s-fr>.</p>
<h2>The nominal sentence</h2>
<p>No conjugated verb at all: in headlines (<s-fr>Hausse des prix : colère des agriculteurs</s-fr>), in notes and plans (<s-fr>Première partie : les causes de la crise</s-fr>), and for literary effect (<s-fr>Rien. Le silence. Puis un cri.</s-fr>)</p>
<h2>Ellipsis</h2>
<p>Leaving out what the reader can supply: <s-fr>Les uns lisaient, les autres non.</s-fr> · <s-fr>Elle aime le théâtre ; lui, le cinéma.</s-fr> · <s-fr>Quoi de neuf ?</s-fr> · <s-fr>Inutile d'insister.</s-fr> · <s-fr>Sitôt dit, sitôt fait.</s-fr></p>
<div class="tip">Nominalisation is the key to notes, plans and headings: it condenses. But a text made only of nouns becomes heavy and abstract, so in an essay, alternate nominal and verbal sentences. In a story, a short nominal sentence is striking precisely because it is rare.</div>
`,
    examples: [
      ["L'augmentation des prix inquiète les ménages.", "The rise in prices worries households."],
      ["La démission du ministre a surpris tout le monde.", "The minister's resignation surprised everyone."],
      ["Grève des contrôleurs : trafic perturbé.", "Inspectors' strike: services disrupted."],
      ["Rien. Le silence. Puis un cri.", "Nothing. Silence. Then a scream."],
      ["Elle aime le théâtre ; lui, le cinéma.", "She likes the theatre; he likes the cinema."],
      ["Inutile d'insister.", "There's no point insisting."],
      ["Sitôt dit, sitôt fait.", "No sooner said than done."]
    ],
    quiz: [
      { q: "The noun from “démissionner” is:", o: ["la démission", "le démissionnement", "la démissionnance"], a: 0, ex: "la démission." },
      { q: "“Hausse des prix : colère des agriculteurs” is:", o: ["a nominal sentence", "a passive sentence", "a question"], a: 0, ex: "No conjugated verb: a nominal sentence." },
      { q: "In “Elle aime le théâtre ; lui, le cinéma”, what is left out?", o: ["the verb aime", "the subject elle", "the article"], a: 0, ex: "Ellipsis of the verb: lui (aime) le cinéma." },
      { q: "The noun from “absent” is:", o: ["l'absence", "l'absentement", "l'absentité"], a: 0, ex: "l'absence." },
      { q: "A text made only of nominal sentences:", o: ["becomes heavy and abstract", "is always clearer", "is required at C2"], a: 0, ex: "Alternate nominal and verbal sentences." }
    ]
  },
  {
    id: 164, level: "C2", kind: "functional", icon: "graduation-cap",
    title: "The DALF C2 written exam: from the dossier to the text", title_fr: "L'épreuve écrite du DALF C2 : du dossier au texte",
    subtitle: "Read a dossier, build a problem and a plan, write a structured text of at least 700 words.", subtitle_fr: "Lire un dossier, construire une problématique et un plan, rédiger un texte structuré d'au moins 700 mots.",
    body: `
<h2>The exam</h2>
<p>In the written part of the DALF C2 (3 h 30), you read a dossier of documents of about 2,000 words, then write a structured text of at least 700 words: an article, an editorial, a report, a speech… You choose between two fields: <s-fr>lettres et sciences humaines</s-fr> or <s-fr>sciences</s-fr>.</p>
<h2>A suggested timing</h2>
<p><b>Reading (about 1 h):</b> find the issue, sort the ideas of the documents in a grid (for, against, nuances) · <b>Plan (30 min):</b> a title, a problem, two or three parts, a progression · <b>Writing (1 h 30):</b> introduction, developed parts linked by transitions, a conclusion that opens out · <b>Rereading (30 min):</b> agreements, precise verbs, register.</p>
<h2>Useful formulas</h2>
<p><s-fr>Le dossier soulève une question délicate : …</s-fr> · <s-fr>Il convient d'abord d'examiner…</s-fr> · <s-fr>Force est de constater que…</s-fr> · <s-fr>Reste à savoir si…</s-fr> · <s-fr>Loin de…, …</s-fr> · <s-fr>C'est dire si…</s-fr></p>
<div class="tip">Unlike the C1, where you first write a synthesis, at C2 you're expected to take a stand and to adopt the genre requested: an editorial doesn't read like a report. The documents feed your thinking: never copy them, reformulate them and bring in your own examples.</div>
`,
    examples: [
      ["Le dossier soulève une question délicate : le progrès nous rend-il plus libres ?", "The dossier raises a delicate question: does progress make us freer?"],
      ["Il convient d'abord d'examiner les arguments des partisans de la technique.", "We should first examine the arguments of technology's supporters."],
      ["Force est de constater que les écrans ont envahi nos vies.", "One has to admit that screens have invaded our lives."],
      ["Reste à savoir si cette liberté est réelle.", "It remains to be seen whether this freedom is real."],
      ["Loin de nous libérer, ces outils nous rendent parfois dépendants.", "Far from freeing us, these tools sometimes make us dependent."],
      ["C'est dire si la question mérite d'être posée.", "That shows how much the question deserves to be asked."]
    ],
    quiz: [
      { q: "In the DALF C2 written exam, you write at least:", o: ["700 words", "250 words", "1,500 words"], a: 0, ex: "A structured text of at least 700 words." },
      { q: "The dossier you read is about:", o: ["2,000 words", "200 words", "10,000 words"], a: 0, ex: "About 2,000 words of documents." },
      { q: "“Force est de constater que” means:", o: ["one has to admit that", "it is forbidden to note that", "strength lies in noting that"], a: 0, ex: "A formal way of stating an undeniable fact." },
      { q: "At C2, the documents of the dossier should be:", o: ["reformulated and enriched with your own examples", "copied word for word", "ignored"], a: 0, ex: "Never copy: reformulate and add your own examples." },
      { q: "“Reste à savoir si…” means:", o: ["it remains to be seen whether…", "stay and find out if…", "rest assured that…"], a: 0, ex: "A way of opening a remaining question." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    162: {
      gap: [["Le gouvernement a ___ un couvre-feu. (introduced, instaurer)", "instauré"], ["Le rapport ___ un constat sévère. (draws up)", "dresse"], ["Une question se ___ : qui paiera ? (arises)", "pose"], ["Le projet s'est ___ plus coûteux que prévu. (turned out)", "avéré"]],
      fix: [["Il a fait une erreur grave dans son rapport.", "Il a commis une erreur grave dans son rapport.", "commettre une erreur is more precise than faire."], ["Il y a beaucoup de risques dans ce projet.", "Ce projet comporte beaucoup de risques.|Ce projet recèle beaucoup de risques.|Ce projet présente beaucoup de risques.", "Replace il y a with a precise verb."]],
      task: ["Rewrite this paragraph, replacing every faire, dire, mettre and il y a with a precise verb: « Le maire a fait un projet. Il a dit qu'il y avait un problème de circulation et il a mis en place une zone piétonne. Ça a fait des tensions. »", "Réécris ce paragraphe en remplaçant chaque faire, dire, mettre et il y a par un verbe précis : « Le maire a fait un projet. Il a dit qu'il y avait un problème de circulation et il a mis en place une zone piétonne. Ça a fait des tensions. »", "Le maire a élaboré un projet. Il a souligné qu'un problème de circulation se posait et il a instauré une zone piétonne. Cette décision a suscité des tensions parmi les commerçants, qui ont formulé de vives critiques."]
    },
    163: {
      gap: [["Les prix augmentent → l'___ des prix", "augmentation"], ["Le ministre démissionne → la ___ du ministre", "démission"], ["Elle aime le théâtre ; ___, le cinéma. (he)", "lui"], ["___ d'insister : la décision est prise. (no point)", "Inutile"]],
      fix: [["L'augmentement des loyers inquiète les étudiants.", "L'augmentation des loyers inquiète les étudiants.", "The noun is l'augmentation."], ["Le réchauffement climatique fait l'augmentation des incendies.", "Le réchauffement climatique entraîne l'augmentation des incendies.|Le réchauffement climatique provoque l'augmentation des incendies.|Le réchauffement climatique favorise l'augmentation des incendies.", "After a nominalisation, choose a precise verb: entraîner, provoquer."]],
      task: ["Turn this news into three press headlines, using nominal sentences: Les agriculteurs manifestent à Paris ; le gouvernement promet des aides ; les syndicats restent méfiants.", "Transforme cette actualité en trois titres de presse, avec des phrases nominales : Les agriculteurs manifestent à Paris ; le gouvernement promet des aides ; les syndicats restent méfiants.", "Manifestation des agriculteurs à Paris. Promesse d'aides du gouvernement. Méfiance des syndicats."]
    },
    164: {
      gap: [["___ est de constater que les écrans ont envahi nos vies. (one has to admit)", "Force"], ["___ à savoir si cette liberté est réelle. (it remains)", "Reste"], ["Il ___ d'abord d'examiner les arguments adverses. (it is fitting)", "convient"], ["___ de nous libérer, ces outils nous rendent dépendants. (far from)", "Loin"]],
      fix: [["Force de constater que la situation s'aggrave.", "Force est de constater que la situation s'aggrave.", "The fixed phrase is force est de constater."], ["Reste à savoir que cette réforme fonctionnera.", "Reste à savoir si cette réforme fonctionnera.", "Reste à savoir si (whether)."]],
      task: ["Write the introduction of a DALF C2 article on the question « Le progrès technique nous rend-il plus libres ? » in four or five sentences: hook, problem, plan.", "Rédige l'introduction d'un article de DALF C2 sur la question « Le progrès technique nous rend-il plus libres ? » en quatre ou cinq phrases : accroche, problématique, plan.", "Jamais l'humanité n'a disposé d'outils aussi puissants : en quelques secondes, chacun peut traduire un texte, traverser une ville sans carte ou parler à l'autre bout du monde. Force est pourtant de constater que ce pouvoir s'accompagne d'une forme d'inquiétude. Le progrès technique nous rend-il réellement plus libres, ou nous enferme-t-il dans de nouvelles dépendances ? Il convient d'abord d'examiner ce que la technique nous a apporté. Nous verrons ensuite à quelles conditions cette liberté peut rester la nôtre."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "planc2", lesson: 164, level: "C2", icon: "graduation-cap", partner: "Sylvie", role: "a writing tutor",
    title: "Defending your plan", title_fr: "Défendre son plan",
    setting: "You're preparing for the DALF C2. Sylvie, who helps you prepare, has read the plan of your article on technical progress and freedom, and asks you questions.", setting_fr: "Tu prépares le DALF C2. Sylvie, qui t'accompagne dans ta préparation, a lu le plan de ton article sur le progrès technique et la liberté, et te pose des questions.",
    turns: [
      { p: "J'ai lu votre plan. Quelle est exactement votre problématique ?", fr: "I've read your plan. What exactly is your central question?" },
      { y: ["Je me demande si le progrès technique nous rend plus libres, ou s'il engendre de nouvelles dépendances.", "Je me demande si le progrès technique nous rend plus libres, ou qu'il engendre de nouvelles dépendances.", "Je me demande que le progrès technique nous rend plus libres, ou s'il engendre de nouvelles dépendances."], fr: "I'm asking whether technical progress makes us freer, or whether it creates new dependencies.", why: "Indirect question: si… ou si (s'il)." },
      { p: "Votre première partie s'intitule « Il y a beaucoup d'avantages ». Ce n'est pas un peu plat ?", fr: "Your first part is called “There are many advantages”. Isn't that a bit flat?" },
      { y: ["Vous avez raison : je préfère « Une émancipation sans précédent », une phrase nominale plus percutante.", "Vous avez raison : je préfère « Il y a une émancipation sans précédent », une phrase nominale plus percutante.", "Vous avez raison : je préfère « Une émancipation sans précédent », une phrase verbale plus percutante."], fr: "You're right: I prefer “An unprecedented emancipation”, a more striking nominal sentence.", why: "A heading without a verb is a nominal sentence." },
      { p: "Et dans votre deuxième partie, comment allez-vous nuancer ?", fr: "And in your second part, how will you add nuance?" },
      { y: ["Je montrerai que ces outils recèlent aussi des risques : la surveillance, la dépendance, la perte d'attention.", "Je montrerai que ces outils recèlent aussi de risques : la surveillance, la dépendance, la perte d'attention.", "Je montrerai que ces outils recelent aussi des risques : la surveillance, la dépendance, la perte d'attention."], fr: "I'll show that these tools also hold risks: surveillance, dependency, loss of attention.", why: "ils recèlent (with è); des after an affirmative verb." },
      { p: "Vous citez beaucoup les documents. N'avez-vous pas peur de les recopier ?", fr: "You quote the documents a lot. Aren't you afraid of copying them?" },
      { y: ["Si, c'est pourquoi je les reformule et j'y ajoute mes propres exemples.", "Oui, c'est pourquoi je les reformule et j'y ajoute mes propres exemples.", "Si, c'est pourquoi je les reformule et j'en ajoute mes propres exemples."], fr: "Yes, that's why I reformulate them and add my own examples.", why: "Yes to a negative question: si; ajouter à quelque chose → y." },
      { p: "Très bien. Et votre conclusion ?", fr: "Very good. And your conclusion?" },
      { y: ["Je conclurai que la technique n'est ni bonne ni mauvaise en soi : tout dépend de l'usage que nous en faisons.", "Je conclurai que la technique n'est ni bonne ni mauvaise en soi : tout dépend de l'usage que nous en faisions.", "Je conclurai que la technique n'est ni bonne ou mauvaise en soi : tout dépend de l'usage que nous en faisons."], fr: "I'll conclude that technology is neither good nor bad in itself: everything depends on the use we make of it.", why: "ni… ni…; the present tense: faisons." }
    ] }
  );

  W.READINGS.push({
    id: "montaigne", level: "C2", icon: "castle", title: "Montaigne, ou l'art d'essayer", genre: "Portrait",
    intro: "In 1571, a magistrate from Bordeaux withdrew to his tower to read and think. Four centuries later, the genre he invented, the essay, is still alive.",
    intro_fr: "En 1571, un magistrat bordelais se retire dans sa tour pour lire et réfléchir. Quatre siècles plus tard, le genre qu'il a inventé, l'essai, est toujours vivant.",
    paragraphs: [
      { en: "En 1571, à trente-huit ans, Michel de Montaigne se retire sur ses terres, près de Bordeaux, pour se consacrer à la lecture et à la réflexion. Dans la tour de son château, entouré de ses livres, il entreprend une œuvre sans modèle : il ne raconte pas sa vie, il n'expose pas un système, il essaie sa pensée sur tous les sujets, de l'amitié à la mort, des chevaux aux cannibales.", fr: "In 1571, at the age of thirty-eight, Michel de Montaigne withdrew to his estate near Bordeaux to devote himself to reading and reflection. In the tower of his château, surrounded by his books, he began a work without precedent: he didn't tell his life story, he didn't set out a system, he tried out his thinking on every subject, from friendship to death, from horses to cannibals." },
      { en: "Les Essais paraissent en 1580, puis, augmentés d'un troisième livre, en 1588. Entre-temps, Montaigne a été maire de Bordeaux pendant quatre ans. Le titre dit tout : un essai est une tentative, une mise à l'épreuve. « Je suis moi-même la matière de mon livre », prévient-il dans son avis au lecteur. Ce regard tourné vers soi n'a pourtant rien de narcissique : en s'observant, il pense découvrir l'être humain tout entier, car « chaque homme porte la forme entière de l'humaine condition ».", fr: "The Essays came out in 1580, then, enlarged with a third book, in 1588. In the meantime, Montaigne had been mayor of Bordeaux for four years. The title says it all: an essay is an attempt, a putting to the test. “I am myself the matter of my book”, he warns in his note to the reader. Yet this inward gaze is in no way narcissistic: by observing himself, he believes he is discovering the whole human being, for “every man bears the whole form of the human condition”." },
      { en: "Sa devise, « Que sais-je ? », résume sa démarche. Montaigne se méfie des certitudes, à commencer par les siennes ; il se contredit, se corrige, ajoute des pages en marge jusqu'à sa mort, en 1592. Dans le chapitre « Des cannibales », il ose renverser le regard de ses contemporains sur les peuples du Nouveau Monde : « chacun appelle barbarie ce qui n'est pas de son usage ».", fr: "His motto, “What do I know?”, sums up his approach. Montaigne distrusts certainties, starting with his own; he contradicts himself, corrects himself, adds pages in the margins until his death in 1592. In the chapter “Of Cannibals”, he dares to reverse the way his contemporaries looked at the peoples of the New World: “everyone calls barbarism whatever is not his own custom”." },
      { en: "L'influence des Essais est immense. En Angleterre, Francis Bacon publie ses propres Essays dès 1597, et Shakespeare emprunte à « Des cannibales » un passage de La Tempête. En France, Pascal lit Montaigne avec passion, tout en combattant son scepticisme.", fr: "The influence of the Essays is immense. In England, Francis Bacon published his own Essays as early as 1597, and Shakespeare borrowed a passage of The Tempest from “Of Cannibals”. In France, Pascal read Montaigne passionately, while fighting his scepticism." },
      { en: "Plus de quatre siècles plus tard, la leçon de Montaigne n'a rien perdu de sa force. À l'heure où chacun est sommé d'avoir un avis sur tout, et vite, il nous rappelle que penser, c'est d'abord douter, nuancer, se remettre en question. L'essai n'est pas l'art d'avoir raison : c'est l'art de chercher.", fr: "More than four centuries later, Montaigne's lesson has lost none of its force. At a time when everyone is called upon to have an opinion on everything, and fast, he reminds us that thinking means first of all doubting, adding nuance, questioning oneself. The essay is not the art of being right: it is the art of searching." }
    ],
    glossary: { "terres": "estate, lands", "entreprend": "undertakes", "tentative": "attempt", "épreuve": "test (mise à l'épreuve: putting to the test)", "matière": "subject matter", "narcissique": "narcissistic", "devise": "motto", "marge": "margin", "renverser": "to reverse, to overturn", "contemporains": "contemporaries", "barbarie": "barbarism", "emprunte": "borrows", "sommé": "called upon, required" },
    questions: [
      { q: "Que fait Montaigne en 1571 ?", o: ["Il se retire sur ses terres pour lire et réfléchir.", "Il devient maire de Paris.", "Il publie les Essais."], a: 0 },
      { q: "Que signifie le mot essai, d'après le texte ?", o: ["Une tentative, une mise à l'épreuve", "Un récit de voyage", "Un traité scientifique"], a: 0 },
      { q: "Quelle est la devise de Montaigne ?", o: ["Que sais-je ?", "Je pense, donc je suis.", "Connais-toi toi-même."], a: 0 },
      { q: "Que soutient-il dans le chapitre « Des cannibales » ?", o: ["Chacun appelle barbarie ce qui n'est pas de son usage.", "Les peuples du Nouveau Monde sont des barbares.", "Il faut conquérir le Nouveau Monde."], a: 0 },
      { q: "Quelle leçon l'auteur tire-t-il pour aujourd'hui ?", o: ["Penser, c'est d'abord douter et chercher.", "Il faut avoir un avis sur tout, et vite.", "Les Essais sont dépassés."], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-c2-10", unit: "c2-10", level: "C2", icon: "book-open-text",
    title: "Lire lentement", title_fr: "Lire lentement",
    context: "On the radio, Mathilde talks with Antoine, an essayist, about reading and attention.", context_fr: "À la radio, Mathilde s'entretient avec Antoine, essayiste, de la lecture et de l'attention.",
    words: [["un combat perdu d'avance", "a lost cause"], ["d'affilée", "in a row, without a break"], ["à heure fixe", "at a set time"], ["passer à côté de", "to miss"], ["digne de ce nom", "worthy of the name"]],
    lines: [["Mathilde", "Antoine, votre dernier essai s'intitule Lire lentement. À l'heure des notifications et des vidéos de trente secondes, n'est-ce pas un combat perdu d'avance ?", "fr-FR"], ["Antoine", "Je ne le crois pas. Ce que je constate, c'est que beaucoup de lecteurs ont le sentiment d'avoir perdu quelque chose : ils ouvrent un livre, et au bout de trois pages, leur main cherche déjà le téléphone.", "fr-FR"], ["Mathilde", "C'est votre cas ?", "fr-FR"], ["Antoine", "Bien sûr, je ne prétends pas y échapper. Mais j'ai remarqué que l'attention se cultive, comme un muscle. Les premiers jours, vingt minutes de lecture sans interruption me semblaient une éternité. Au bout d'un mois, je lisais une heure d'affilée.", "fr-FR"], ["Mathilde", "Que préconisez-vous, concrètement ?", "fr-FR"], ["Antoine", "Rien de spectaculaire. Laisser son téléphone dans une autre pièce, lire chaque jour à heure fixe, et surtout accepter de ne pas tout comprendre tout de suite. La lecture lente n'est pas une perte de temps : c'est du temps qu'on se rend.", "fr-FR"], ["Mathilde", "Certains vous reprochent une forme de nostalgie.", "fr-FR"], ["Antoine", "Le reproche est compréhensible, mais il passe à côté de l'essentiel. Je ne regrette pas le passé ; je défends une capacité, celle de suivre une pensée complexe jusqu'au bout. Sans elle, il n'y a ni débat ni démocratie dignes de ce nom.", "fr-FR"]],
    gist: ["De quoi parle l'entretien ?", ["De la lecture lente et de l'attention", "D'une nouvelle application de lecture", "Du prix des livres"]],
    detail: [["Que ressentent beaucoup de lecteurs, selon Antoine ?", ["Le sentiment d'avoir perdu quelque chose", "Un ennui profond", "Rien de particulier"]], ["Comment l'attention se développe-t-elle, selon lui ?", ["Elle se cultive, comme un muscle.", "Elle est innée.", "Elle disparaît avec l'âge."]], ["Que préconise-t-il ?", ["Éloigner son téléphone, lire à heure fixe, accepter de ne pas tout comprendre", "Lire plus vite", "Ne lire que des textes courts"]], ["Que répond-il au reproche de nostalgie ?", ["Il défend une capacité, non le passé.", "Il reconnaît être nostalgique.", "Il refuse de répondre."]]],
    decode: ["c'est du temps qu'on se rend", "il passe à côté de l'essentiel"],
    tip: "Notice the precise verbs (je constate, se cultive, préconisez) and how Antoine handles the criticism: he grants it (le reproche est compréhensible) before showing what it misses. Two C2 reflexes worth copying.", tip_fr: "Remarque les verbes précis (je constate, se cultive, préconisez) et la manière dont Antoine traite la critique : il l'admet (le reproche est compréhensible) avant de montrer ce qui lui échappe. Deux réflexes de niveau C2 à imiter."
  }]);

  W.LEXIS = W.LEXIS || {};
  W.LEXIS["c2-10"] = {
    colloc: [
      ["dresser un constat", "to draw up an assessment", "Le rapport dresse un constat alarmant.", "dresse", ["lève", "monte"]],
      ["exercer une influence", "to exert an influence", "Ce penseur a exercé une influence considérable.", "exercé", ["fait", "porté"]],
      ["formuler une critique", "to put forward a criticism", "Elle a formulé une critique constructive.", "formulé", ["formé", "formaté"]],
      ["revêtir une importance", "to be of importance", "Ce choix revêt une importance capitale.", "revêt", ["vêt", "habille"]],
      ["commettre une injustice", "to commit an injustice", "En le punissant, on a commis une injustice.", "commis", ["exécuté", "accompli"]],
      ["déceler une faille", "to detect a flaw", "Le jury a décelé une faille dans le raisonnement.", "décelé", ["décollé", "décalé"]],
      ["élaborer une stratégie", "to develop a strategy", "Il faut élaborer une stratégie à long terme.", "élaborer", ["élever", "labourer"]],
      ["esquisser un sourire", "to give a faint smile", "Il a esquissé un sourire gêné.", "esquissé", ["croqué", "tracé"]],
      ["cerner un problème", "to pin down a problem", "Il faut d'abord cerner le problème.", "cerner", ["entourer", "encercler"]],
      ["tenir un raisonnement", "to put forward an argument", "Il tient un raisonnement rigoureux.", "tient", ["porte", "garde"]]
    ],
    wf: [
      ["Le jury apprécie la ___ de cette analyse. (PERTINENT)", "pertinence"],
      ["L'___ d'une stratégie demande du temps. (ÉLABORER)", "élaboration"],
      ["Elle a analysé la crise avec une grande ___. (LUCIDE)", "lucidité"],
      ["Montaigne défend un jugement ___. (NUANCE)", "nuancé"],
      ["Cette ___ de l'éducation reste moderne. (CONCEVOIR)", "conception"],
      ["Il faut du ___ pour juger. (DISCERNER)", "discernement"],
      ["Face à la complexité du monde, l'___ s'impose. (HUMBLE)", "humilité"],
      ["« Hausse des prix » est une phrase ___. (NOM)", "nominale"]
    ],
    kwt: [
      ["Le rapport constate une hausse des inégalités.", "DRESSE", "Le rapport ___ d'une hausse des inégalités.", "dresse le constat|dresse un constat"],
      ["Cette décision a provoqué de vives réactions.", "SUSCITÉ", "Cette décision ___.", "a suscité de vives réactions"],
      ["On a augmenté les prix, ce qui a mécontenté les clients.", "AUGMENTATION", "___ a mécontenté les clients.", "l'augmentation des prix"],
      ["Ce texte est d'une importance particulière.", "REVÊT", "Ce texte ___.", "revêt une importance particulière"],
      ["Les experts recommandent de réduire la consommation de sucre.", "PRÉCONISENT", "Les experts ___ de la consommation de sucre.", "préconisent une réduction|préconisent la réduction"],
      ["Finalement, cette solution n'a pas fonctionné.", "AVÉRÉE", "Cette solution ___.", "s'est avérée inefficace|s'est finalement avérée inefficace|s'est avérée inopérante"]
    ],
    idioms: [
      ["avoir l'esprit de l'escalier", "trouver la bonne réplique trop tard", "to think of the perfect reply too late", "J'ai l'esprit de l'escalier : la bonne réponse m'est venue une heure après.", "J'ai l'esprit de l'escalier"],
      ["prendre le contre-pied", "soutenir l'opinion inverse", "to take the opposite view", "Il prend toujours le contre-pied de ce qu'on dit.", "prend toujours le contre-pied"],
      ["ne pas voir plus loin que le bout de son nez", "manquer de vision, de prévoyance", "not to see beyond the end of one's nose", "Ce gouvernement ne voit pas plus loin que le bout de son nez.", "ne voit pas plus loin que le bout de son nez"],
      ["enfoncer des portes ouvertes", "affirmer des évidences", "to state the obvious", "Dire que l'éducation est importante, c'est enfoncer des portes ouvertes.", "enfoncer des portes ouvertes"],
      ["chercher midi à quatorze heures", "compliquer ce qui est simple", "to overcomplicate things", "Ne cherche pas midi à quatorze heures : la solution est évidente.", "Ne cherche pas midi à quatorze heures"],
      ["se faire l'avocat du diable", "défendre volontairement la position adverse", "to play devil's advocate", "Permettez-moi de me faire l'avocat du diable.", "me faire l'avocat du diable"],
      ["c'est l'arbre qui cache la forêt", "un détail masque un problème plus vaste", "it's the tip of the iceberg", "Ce scandale, c'est l'arbre qui cache la forêt.", "c'est l'arbre qui cache la forêt"],
      ["faire le tour de la question", "examiner un sujet sous tous ses aspects", "to cover every aspect of the question", "En une heure, nous avons fait le tour de la question.", "fait le tour de la question"]
    ]
  };

  W.PROMPTS.push({ id: "fr-c2-10", level: "C2", q: "Selon toi, qu'est-ce que « bien penser » aujourd'hui ?", fr: "In your view, what does it mean to “think well” today?", time: 240,
    phrases: ["Force est de constater que…", "Reste à savoir si…", "Loin de…, …", "se remettre en question", "C'est dire si…"],
    model: "Force est de constater que nous n'avons jamais eu accès à autant d'informations, et que nous n'avons jamais été aussi pressés de juger. Pour moi, bien penser, c'est d'abord résister à cette précipitation : prendre le temps de lire un texte en entier, de vérifier une source, d'écouter un avis contraire. C'est aussi accepter de se remettre en question, ce qui est sans doute le plus difficile. Loin d'être une faiblesse, le doute me paraît la condition d'une pensée libre. Reste à savoir si nos écoles et nos médias nous y préparent. Montaigne avait fait de « Que sais-je ? » sa devise : c'est dire si cette exigence ne date pas d'hier." });

  W.WRITING_GUIDE["c2-10"] = { genre: "A structured article (the full DALF C2 written task)", genre_fr: "Un article structuré (l'épreuve écrite complète du DALF C2)",
    plan: [["Open with a striking hook, set out the problem and announce the plan.", "Ouvre sur une accroche frappante, pose la problématique et annonce le plan."], ["Part one: what technical progress has given us, with examples.", "Première partie : ce que le progrès technique nous a apporté, exemples à l'appui."], ["Part two: the new dependencies it creates.", "Deuxième partie : les nouvelles dépendances qu'il engendre."], ["Part three: the conditions under which it can free us.", "Troisième partie : les conditions auxquelles il peut nous libérer."], ["Conclude by answering the question and opening out.", "Conclus en répondant à la question et en ouvrant la réflexion."]],
    marks: [["Jamais l'humanité n'a disposé", "a striking opening with jamais", "une accroche frappante avec jamais"], ["Il convient d'abord de mesurer", "announcing the plan", "l'annonce du plan"], ["Une émancipation sans précédent", "a nominal heading", "un intertitre nominal"], ["Reste que cette liberté a un prix", "a transition that concedes, then turns", "une transition qui concède, puis retourne"], ["Le danger n'est pas tant que la machine pense à notre place que nous cessions", "ne… pas tant… que + subjunctive", "ne… pas tant… que + subjonctif"], ["C'est dire si la question dépasse de loin", "c'est dire si", "c'est dire si"]] };

  W.COURSE.push({ id: "c2-10", level: "C2", icon: "brain", title: "Thinking the world", title_fr: "Penser le monde",
    intro: "In this last unit, you'll polish your style to the highest level: the precise verb instead of faire, dire or il y a, nominalisation, nominal sentences and ellipsis, and the full DALF C2 written task, from the dossier to a structured text of at least 700 words.",
    intro_fr: "Dans cette dernière unité, tu vas affiner ton style au plus haut niveau : le verbe précis à la place de faire, dire ou il y a, la nominalisation, la phrase nominale et l'ellipse, et l'épreuve écrite complète du DALF C2, du dossier jusqu'à un texte structuré d'au moins 700 mots.",
    can: ["Replace all-purpose verbs with precise ones", "Condense ideas with nominalisation and nominal sentences", "Use ellipsis for effect and economy", "Discuss thought, doubt and the essay as a genre", "Write a structured text of more than 700 words, as in the DALF C2"],
    can_fr: ["Remplacer les verbes passe-partout par des verbes précis", "Condenser les idées grâce à la nominalisation et à la phrase nominale", "Employer l'ellipse pour l'effet et l'économie", "Débattre de la pensée, du doute et de l'essai comme genre", "Rédiger un texte structuré de plus de 700 mots, comme au DALF C2"],
    lessons: [162, 163, 164], vocab: ["verbesPrecisFR", "penseeFR"], reading: "montaigne", prompt: "fr-c2-10",
    writing: { task: "Does technical progress make us freer? Write an article for a cultural review (700-750 words), as in the DALF C2 written exam: a title, an introduction with a problem, three parts linked by transitions, a conclusion.", task_fr: "Le progrès technique nous rend-il plus libres ? Rédige un article pour une revue culturelle (700 à 750 mots), comme à l'épreuve écrite du DALF C2 : un titre, une introduction avec une problématique, trois parties reliées par des transitions, une conclusion.", words: "700-750",
      tips: ["Jamais… n'a…", "Force est de constater que…", "Il convient d'abord de…", "Reste que…", "Loin de…, …", "C'est dire si…"],
      checklist: ["I gave my article a title", "I set out a problem and announced my plan", "I wrote three parts linked by transitions", "I replaced vague verbs with precise ones", "I took a clear stand in my conclusion", "I wrote between 700 and 750 words"],
      model: "Le progrès technique, émancipation ou nouvelle servitude ?\n\nJamais l'humanité n'a disposé d'outils aussi puissants. En quelques secondes, chacun peut traduire un texte, traverser une ville inconnue sans carte ou converser avec un proche installé à l'autre bout du monde. Ce que nos grands-parents auraient tenu pour de la magie est devenu notre quotidien. Force est pourtant de constater que ce pouvoir s'accompagne d'un malaise diffus : jamais non plus nous n'avons tant parlé de dépendance, de surveillance ou d'épuisement. Le progrès technique nous rend-il réellement plus libres, ou nous enferme-t-il, à notre insu, dans de nouvelles servitudes ? Il convient d'abord de mesurer l'émancipation qu'il a rendue possible, avant d'examiner les dépendances qu'il engendre, puis de chercher à quelles conditions la liberté qu'il promet peut rester la nôtre.\n\nUne émancipation sans précédent\n\nNier les bienfaits de la technique relèverait de la mauvaise foi. La machine à laver, pour ne citer qu'elle, a libéré des millions de femmes de plusieurs heures de travail par semaine ; les vaccins ont fait reculer des maladies qui décimaient l'enfance ; Internet a mis à la portée de tous des savoirs autrefois réservés à quelques érudits. Dans plusieurs pays d'Afrique de l'Est, le paiement par téléphone mobile a donné accès à des services bancaires à des millions de personnes qui n'avaient jamais possédé de compte. Un étudiant isolé peut aujourd'hui suivre gratuitement les cours des meilleures universités, une personne malvoyante se faire lire n'importe quel texte. Chacun de ces progrès a élargi le champ des possibles et, partant, notre liberté, au sens le plus concret du terme. Il serait d'ailleurs aisé de multiplier les exemples : de l'imprimerie à l'électricité, chaque grande invention a desserré l'une des contraintes qui pesaient sur la condition humaine.\n\nLe revers de la médaille\n\nReste que cette liberté a un prix, que nous mesurons mal. Les applications qui nous rendent service sont conçues pour capter notre attention le plus longtemps possible, et elles y parviennent remarquablement : qui n'a jamais ouvert son téléphone pour vérifier l'heure, et ne l'a refermé que vingt minutes plus tard, sans savoir l'heure qu'il était ? À cette dépendance s'ajoute une surveillance d'un genre nouveau. Nos déplacements, nos achats, nos lectures laissent des traces que des entreprises exploitent à des fins commerciales, et que certains États utilisent pour contrôler leurs citoyens. Il faut ajouter à ce tableau une forme plus insidieuse de dépendance : celle de la pensée elle-même. Quand un algorithme choisit pour nous les informations que nous lisons, la musique que nous écoutons ou les personnes que nous rencontrons, il réduit sans bruit le champ de nos choix, tout en nous laissant l'illusion d'une liberté infinie. Loin de nous affranchir, l'outil finit parfois par nous gouverner. Le danger n'est pas tant que la machine pense à notre place que nous cessions, par commodité, de penser par nous-mêmes.\n\nLes conditions d'une liberté réelle\n\nFaut-il pour autant renoncer au progrès ? Ce serait céder à une nostalgie aussi vaine que dangereuse. La technique n'est ni bonne ni mauvaise en soi : elle vaut ce que vaut l'usage que nous en faisons. Encore faut-il que cet usage soit éclairé. Trois conditions me semblent devoir être réunies. La première relève de l'éducation : apprendre aux jeunes à comprendre les outils qu'ils emploient, et non seulement à s'en servir. La deuxième relève du droit : il appartient aux pouvoirs publics d'instaurer des règles qui protègent les données personnelles et limitent les pratiques les plus manipulatrices. L'Union européenne s'y est employée en adoptant, en 2016, le règlement général sur la protection des données ; le chantier reste néanmoins immense. La troisième, enfin, nous concerne chacun : réapprendre à éteindre, à attendre, à nous ennuyer parfois, pour retrouver la maîtrise de notre temps. Ce n'est pas là un renoncement, mais une discipline : celle qui permet à l'outil de rester un moyen, au lieu de devenir une fin.\n\nEn définitive, le progrès technique ne nous rend pas libres : il nous en donne les moyens, ce qui n'est pas la même chose. La liberté ne se télécharge pas ; elle s'exerce, elle s'apprend, elle se défend. C'est dire si la question dépasse de loin celle des machines : elle touche à l'idée même que nous nous faisons de l'être humain. Montaigne avait fait de « Que sais-je ? » sa devise. À l'heure des assistants qui prétendent tout savoir, cette question n'a peut-être jamais été aussi précieuse." } });
})();
