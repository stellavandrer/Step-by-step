/* Cours de français, unité C2-2 « Power and democracy / Pouvoir et démocratie » : l'hypothèse au plus haut niveau
   (pour peu que, si tant est que, que… ou que, sans + nom, n'eût été), la mise en relief avancée (ce dont il s'agit,
   c'est… ; il n'y a que… qui ; si…, c'est que…), réfuter point par point. Personnages fictifs, prénoms français.
   Faits vérifiables seulement : Montesquieu, De l'esprit des lois (1748), « le suffrage par le sort est de la nature
   de la démocratie » et « le pouvoir arrête le pouvoir » ; tirage au sort à Athènes ; Convention citoyenne pour le
   climat (2019-2020, 150 citoyens tirés au sort, 149 propositions, une partie seulement reprise) ; suffrage universel
   masculin en 1848, vote des femmes en 1944 ; vote obligatoire en Belgique depuis 1893 et en Australie depuis 1924 ;
   vote blanc décompté à part depuis 2014 mais pas compté parmi les suffrages exprimés ; abstention de plus de la
   moitié des inscrits au second tour des législatives de 2017. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "democratieFR", icon: "vote", title: "Democracy", title_fr: "La démocratie", level: "C2", words: [
    ["la démocratie", "democracy", "La démocratie ne se résume pas au vote."],
    ["le suffrage universel", "universal suffrage", "Le président est élu au suffrage universel direct."],
    ["le scrutin", "the ballot, the vote", "Le scrutin se déroulera en deux tours."],
    ["l'abstention", "abstention, not voting", "L'abstention a atteint un niveau record."],
    ["le vote blanc", "the blank vote", "Le vote blanc est décompté à part."],
    ["le référendum", "the referendum", "Le quinquennat a été adopté par référendum en 2000."],
    ["la séparation des pouvoirs", "the separation of powers", "Montesquieu a théorisé la séparation des pouvoirs."],
    ["le Parlement", "Parliament", "Le Parlement a adopté la loi en dernière lecture."],
    ["le député / la députée", "the member of parliament (m) / (f)", "La députée a interpellé le ministre."],
    ["le sénateur / la sénatrice", "the senator (m) / (f)", "Les sénateurs ont amendé le texte."],
    ["le mandat", "the term of office, the mandate", "Son mandat expire dans deux ans."],
    ["la cohabitation", "power-sharing between a president and a government of opposite sides", "La France a connu trois cohabitations."],
    ["le contre-pouvoir", "the check, the counterweight", "La presse joue un rôle de contre-pouvoir."],
    ["la légitimité", "legitimacy", "Une forte abstention fragilise la légitimité des élus."],
    ["le groupe de pression", "the lobby, the pressure group", "Les groupes de pression ont pesé sur le débat."],
    ["la démocratie participative", "participatory democracy", "La ville expérimente la démocratie participative."],
    ["la convention citoyenne", "the citizens' assembly", "Une convention citoyenne a été réunie sur le climat."],
    ["le tirage au sort", "drawing lots, random selection", "Les membres ont été désignés par tirage au sort."]
  ] },
  { id: "pouvoirFR", icon: "swords", title: "Power and its abuses", title_fr: "Le pouvoir et ses dérives", level: "C2", words: [
    ["le pouvoir exécutif", "the executive", "Le pouvoir exécutif appartient au président et au gouvernement."],
    ["l'autoritarisme", "authoritarianism", "L'autoritarisme progresse dans plusieurs pays."],
    ["le populisme", "populism", "Le populisme oppose le peuple aux élites."],
    ["la démagogie", "demagoguery", "Promettre l'impossible relève de la démagogie."],
    ["le clientélisme", "patronage, clientelism", "Le maire a été accusé de clientélisme."],
    ["la corruption", "corruption", "La lutte contre la corruption est une priorité."],
    ["l'opposition", "the opposition", "L'opposition a déposé une motion de censure."],
    ["l'État de droit", "the rule of law", "L'État de droit garantit l'égalité devant la loi."],
    ["la souveraineté", "sovereignty", "La souveraineté appartient au peuple."],
    ["la dictature", "dictatorship", "Le pays est sorti de la dictature en 1974."],
    ["la tyrannie", "tyranny", "La tyrannie de la majorité inquiétait Tocqueville."],
    ["l'électeur / l'électrice", "the voter (m) / (f)", "Les électeurs sont appelés aux urnes dimanche."],
    ["le ministre / la ministre", "the minister (m) / (f)", "La ministre a présenté son projet de loi."],
    ["la campagne électorale", "the election campaign", "La campagne électorale a été courte."],
    ["l'élu / l'élue", "the elected representative (m) / (f)", "Les élus locaux réclament plus de moyens."],
    ["la gouvernance", "governance", "La gouvernance de l'entreprise a été réformée."],
    ["l'abstentionniste", "the non-voter", "Les abstentionnistes ne forment pas un groupe homogène."],
    ["le contribuable", "the taxpayer", "Ce projet sera financé par le contribuable."]
  ] });

  W.LESSONS.push(
  {
    id: 138, level: "C2", icon: "split",
    title: "Pour peu que, si tant est que, n'eût été: hypothesis at the highest level", title_fr: "Pour peu que, si tant est que, n'eût été : l'hypothèse au plus haut niveau",
    subtitle: "Beyond si: the conjunctions and constructions of formal and literary French.", subtitle_fr: "Au-delà de si : les conjonctions et les tournures de l'écrit soutenu et littéraire.",
    body: `
<h2>A small condition, a big effect</h2>
<p><s-fr>pour peu que</s-fr> + subjunctive (if only, provided that just): <s-fr>Pour peu qu'on lui laisse la parole, il ne la rend plus.</s-fr></p>
<h2>A doubtful condition</h2>
<p><s-fr>si tant est que</s-fr> + subjunctive (assuming that, if indeed): <s-fr>Cette réforme réduira l'abstention, si tant est qu'elle soit appliquée.</s-fr></p>
<h2>Whatever the case</h2>
<p><s-fr>que… ou que</s-fr> + subjunctive: <s-fr>Qu'on le veuille ou non, la décision est prise.</s-fr> · <s-fr>Qu'il gagne ou qu'il perde, il restera député.</s-fr></p>
<h2>Without a conjunction</h2>
<p><s-fr>sans</s-fr> + noun = if it hadn't been for: <s-fr>Sans son intervention, la loi n'aurait pas été votée.</s-fr> · Two juxtaposed conditionals: <s-fr>Tu me le demanderais, je t'aiderais.</s-fr> · Literary: <s-fr>n'était</s-fr>, <s-fr>n'eût été</s-fr> + noun (were it not for, had it not been for): <s-fr>N'eût été la pluie, la foule aurait été immense.</s-fr></p>
<h2>In the past, literary style</h2>
<p><s-fr>S'il l'eût su, il serait venu</s-fr> = <s-fr>s'il l'avait su</s-fr> · <s-fr>Il eût été préférable de consulter les citoyens</s-fr> = <s-fr>il aurait été préférable</s-fr></p>
<div class="tip">Don't confuse <s-fr>si tant est que</s-fr> (doubt: if indeed) and <s-fr>tant que</s-fr> (as long as, with the indicative). And remember: <s-fr>pour peu que</s-fr> stresses how little it takes; <s-fr>à condition que</s-fr> simply sets a condition.</div>
`,
    examples: [
      ["Pour peu qu'on lui laisse la parole, il ne la rend plus.", "Give him the floor, and he never hands it back."],
      ["Cette réforme réduira l'abstention, si tant est qu'elle soit appliquée.", "This reform will reduce abstention, assuming it's applied at all."],
      ["Qu'on le veuille ou non, la décision est prise.", "Like it or not, the decision has been made."],
      ["Sans son intervention, la loi n'aurait pas été votée.", "Without her intervention, the law wouldn't have been passed."],
      ["Tu me le demanderais, je t'aiderais.", "If you asked me, I'd help you."],
      ["N'eût été la pluie, la foule aurait été immense.", "Had it not been for the rain, the crowd would have been huge."],
      ["Il eût été préférable de consulter les citoyens.", "It would have been better to consult the citizens."]
    ],
    quiz: [
      { q: "“Assuming it's true at all” is:", o: ["si tant est que ce soit vrai", "si tant est que c'est vrai", "tant que ce soit vrai"], a: 0, ex: "si tant est que + subjunctive." },
      { q: "“However little you ask him, he helps” is:", o: ["Pour peu qu'on le lui demande, il aide.", "Pour peu qu'on le lui demandera, il aide.", "Pour peu de qu'on le lui demande, il aide."], a: 0, ex: "pour peu que + subjunctive." },
      { q: "“Had it not been for her courage” (literary) is:", o: ["N'eût été son courage", "N'était pas son courage", "Si n'eût été son courage"], a: 0, ex: "n'eût été + noun." },
      { q: "“Whether he wins or loses” is:", o: ["Qu'il gagne ou qu'il perde", "Qu'il gagne ou qu'il perd", "S'il gagne ou qu'il perde"], a: 0, ex: "que… ou que + subjunctive." },
      { q: "Sans son aide, j'aurais échoué means:", o: ["If it hadn't been for her help, I would have failed.", "Without helping her, I failed.", "I failed without her help."], a: 0, ex: "sans + noun = if it hadn't been for." }
    ]
  },
  {
    id: 139, level: "C2", icon: "megaphone",
    title: "Ce dont il s'agit, c'est…: advanced emphasis", title_fr: "Ce dont il s'agit, c'est… : la mise en relief avancée",
    subtitle: "Pseudo-cleft sentences, il n'y a que… qui, si…, c'est que: put the key idea where it carries.", subtitle_fr: "Phrases pseudo-clivées, il n'y a que… qui, si…, c'est que : placer l'idée clé là où elle porte.",
    body: `
<h2>Pseudo-cleft sentences</h2>
<p>The relative pronoun depends on the verb: <s-fr>Ce que je reproche à cette loi, c'est son flou.</s-fr> (reprocher quelque chose) · <s-fr>Ce dont nous avons besoin, c'est de confiance.</s-fr> (avoir besoin de) · <s-fr>Ce à quoi je pense, c'est la jeunesse.</s-fr> (penser à) · <s-fr>Ce sur quoi il faut insister, c'est la transparence.</s-fr> (insister sur)</p>
<h2>Only…</h2>
<p><s-fr>Il n'y a que</s-fr>… <s-fr>qui</s-fr> / <s-fr>que</s-fr>, often with the subjunctive: <s-fr>Il n'y a que le peuple qui puisse trancher.</s-fr> · <s-fr>Seul le peuple peut trancher.</s-fr></p>
<h2>Explaining a reason</h2>
<p><s-fr>Si…, c'est que…</s-fr> (if… it's because…): <s-fr>Si les citoyens s'abstiennent, c'est qu'ils ne se sentent plus représentés.</s-fr> · <s-fr>Si je vous écris, c'est pour…</s-fr></p>
<h2>Other ways to highlight</h2>
<p><s-fr>C'est à vous qu'il revient de…</s-fr> (it's up to you to) · <s-fr>Rien de tel que…</s-fr> (there's nothing like) · <s-fr>Voilà ce qui…</s-fr> · <s-fr>Le problème, c'est que…</s-fr></p>
<div class="tip">The pseudo-cleft keeps the preposition of the verb: <s-fr>ce dont… c'est de…</s-fr> (in careful French, de is repeated before a noun), <s-fr>ce à quoi… c'est à…</s-fr> is lighter without the second à. Check the verb's construction first, then choose ce que, ce dont or ce à quoi.</div>
`,
    examples: [
      ["Ce que je reproche à cette loi, c'est son manque de clarté.", "What I hold against this law is its lack of clarity."],
      ["Ce dont nous avons besoin, c'est de confiance.", "What we need is trust."],
      ["Ce à quoi je pense, c'est l'avenir de la jeunesse.", "What I'm thinking about is the future of young people."],
      ["Il n'y a que le peuple qui puisse trancher.", "Only the people can decide."],
      ["Si les citoyens s'abstiennent, c'est qu'ils ne se sentent plus représentés.", "If citizens don't vote, it's because they no longer feel represented."],
      ["C'est à vous qu'il revient de choisir.", "It's up to you to choose."],
      ["Rien de tel qu'un débat public pour éclairer une décision.", "There's nothing like a public debate to inform a decision."]
    ],
    quiz: [
      { q: "“What we need is time” is:", o: ["Ce dont nous avons besoin, c'est de temps.", "Ce que nous avons besoin, c'est du temps.", "Ce qui nous avons besoin, c'est du temps."], a: 0, ex: "avoir besoin de → ce dont." },
      { q: "“What I'm thinking of” is:", o: ["ce à quoi je pense", "ce que je pense à", "ce dont je pense"], a: 0, ex: "penser à → ce à quoi." },
      { q: "“Only the judge can decide” is:", o: ["Il n'y a que le juge qui puisse décider.", "Il n'y a que le juge qui peut pas décider.", "Il n'y a pas que le juge qui puisse décider."], a: 0, ex: "il n'y a que… qui, often + subjunctive." },
      { q: "“If he left, it's because he was tired of it” is:", o: ["S'il est parti, c'est qu'il en avait assez.", "S'il est parti, c'est parce qu'il en avait assez de.", "S'il partait, c'est que il en avait assez."], a: 0, ex: "si…, c'est que…" },
      { q: "“It's up to the citizens to decide” is:", o: ["C'est aux citoyens qu'il revient de décider.", "C'est les citoyens qui revient de décider.", "Il revient les citoyens de décider."], a: 0, ex: "il revient à quelqu'un de." }
    ]
  },
  {
    id: 140, level: "C2", kind: "functional", icon: "sword",
    title: "Everyday French: refuting point by point", title_fr: "Le français de tous les jours : réfuter point par point",
    subtitle: "Take an argument apart courteously: reveal a confusion, a forgotten fact, a hidden premise.", subtitle_fr: "Démonter un argument avec courtoisie : révéler une confusion, un fait oublié, un postulat caché.",
    body: `
<h2>Showing what the argument forgets</h2>
<p><s-fr>C'est oublier que…</s-fr> · <s-fr>C'est faire peu de cas de…</s-fr> (to disregard) · <s-fr>C'est passer sous silence…</s-fr></p>
<h2>Revealing a confusion</h2>
<p><s-fr>Il y a là une confusion entre… et…</s-fr> · <s-fr>Vous confondez corrélation et causalité.</s-fr> · <s-fr>Ce raisonnement repose sur un postulat contestable.</s-fr></p>
<h2>Granting, then turning it round</h2>
<p><s-fr>Admettons que…, il n'en reste pas moins que…</s-fr> · <s-fr>À supposer même que ce soit vrai, …</s-fr> · <s-fr>Je vous rejoins sur un point, mais…</s-fr></p>
<h2>Rejecting firmly</h2>
<p><s-fr>Je m'inscris en faux contre cette idée.</s-fr> (I strongly dispute) · <s-fr>Cet argument ne résiste pas à l'examen.</s-fr> · <s-fr>Rien ne permet d'affirmer que…</s-fr></p>
<div class="tip">Attack the argument, never the person. A refutation is more convincing when you first restate the other side's view fairly: <s-fr>Si je vous comprends bien, vous soutenez que…</s-fr> Then show precisely where it fails.</div>
`,
    examples: [
      ["C'est oublier que l'abstention a des causes multiples.", "That's forgetting that abstention has many causes."],
      ["C'est faire peu de cas de l'avis des citoyens.", "That's disregarding the citizens' opinion."],
      ["Il y a là une confusion entre indifférence et protestation.", "There's a confusion here between indifference and protest."],
      ["Ce raisonnement repose sur un postulat contestable.", "This reasoning rests on a debatable assumption."],
      ["À supposer même que ce soit vrai, la mesure resterait injuste.", "Even supposing it's true, the measure would remain unfair."],
      ["Je m'inscris en faux contre cette idée.", "I strongly dispute this idea."],
      ["Cet argument ne résiste pas à l'examen.", "This argument doesn't stand up to scrutiny."]
    ],
    quiz: [
      { q: "“That's disregarding the facts” is:", o: ["C'est faire peu de cas des faits.", "C'est faire peu de cas aux faits.", "C'est faire peu des cas des faits."], a: 0, ex: "faire peu de cas de." },
      { q: "“I strongly dispute that idea” is:", o: ["Je m'inscris en faux contre cette idée.", "Je m'inscris en faux à cette idée.", "Je m'inscris faux contre cette idée."], a: 0, ex: "s'inscrire en faux contre." },
      { q: "“Even supposing it's true” is:", o: ["À supposer même que ce soit vrai", "À supposer même que c'est vrai", "Supposant même que ce soit vrai"], a: 0, ex: "à supposer que + subjunctive." },
      { q: "“This argument doesn't stand up to scrutiny” is:", o: ["Cet argument ne résiste pas à l'examen.", "Cet argument ne tient pas debout à l'examen.", "Cet argument ne résiste pas l'examen."], a: 0, ex: "résister à." },
      { q: "A convincing refutation starts by:", o: ["restating the other view fairly", "attacking the person", "raising your voice"], a: 0, ex: "Restate, then show where it fails." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    138: {
      gap: [["Pour peu qu'on lui ___ la parole, il ne la rend plus. (laisser, subjunctive)", "laisse"], ["Cette réforme marchera, si tant est qu'elle ___ appliquée. (être, subjunctive)", "soit"], ["Qu'on le ___ ou non, la décision est prise. (vouloir, subjunctive)", "veuille"], ["N'___ été la pluie, la foule aurait été immense. (had it not been for)", "eût"]],
      fix: [["Si tant est que cette mesure est efficace, elle coûtera cher.", "Si tant est que cette mesure soit efficace, elle coûtera cher.", "si tant est que + subjunctive."], ["Sans son aide, j'ai échoué.", "Sans son aide, j'aurais échoué.", "sans + noun = if it hadn't been for: then the past conditional."]],
      task: ["Write four sentences about a referendum, with pour peu que, si tant est que, que… ou que and sans + noun.", "Écris quatre phrases sur un référendum, avec pour peu que, si tant est que, que… ou que et sans + nom.", "Pour peu que la question soit claire, un référendum peut réconcilier les citoyens avec la politique. Encore faudrait-il que le résultat soit respecté, si tant est que les gouvernants y soient prêts. Qu'on approuve ou qu'on rejette le texte, le débat aura eu lieu. Sans cette consultation, la réforme aurait manqué de légitimité."]
    },
    139: {
      gap: [["Ce ___ nous avons besoin, c'est de confiance. (pronoun)", "dont"], ["Ce à ___ je pense, c'est l'avenir. (pronoun)", "quoi"], ["Il n'y a que le peuple qui ___ trancher. (pouvoir, subjunctive)", "puisse"], ["Si les gens s'abstiennent, c'est ___ ils ne se sentent pas représentés. (because)", "qu'"]],
      fix: [["Ce que nous avons besoin, c'est de temps.", "Ce dont nous avons besoin, c'est de temps.", "avoir besoin de → ce dont."], ["Ce que je pense à, c'est la jeunesse.", "Ce à quoi je pense, c'est la jeunesse.", "penser à → ce à quoi."]],
      task: ["Give your view on the place of young people in politics, with ce que…, c'est; ce dont…, c'est; il n'y a que… qui; and si…, c'est que.", "Donne ton avis sur la place des jeunes en politique, avec ce que…, c'est ; ce dont…, c'est ; il n'y a que… qui ; et si…, c'est que.", "Ce que je reproche à la vie politique, c'est son entre-soi. Ce dont elle aurait besoin, c'est d'un renouvellement. Si les jeunes votent si peu, c'est qu'ils ont le sentiment qu'on ne les écoute pas. Et il n'y a qu'eux qui puissent changer cela, en s'engageant."]
    },
    140: {
      gap: [["C'est ___ que l'abstention a des causes multiples. (forget)", "oublier"], ["C'est faire peu de ___ de l'avis des citoyens. (disregard)", "cas"], ["Je m'inscris en ___ contre cette idée. (strongly dispute)", "faux"], ["Cet argument ne ___ pas à l'examen. (stand up)", "résiste"]],
      fix: [["À supposer même que c'est vrai, la mesure reste injuste.", "À supposer même que ce soit vrai, la mesure resterait injuste.", "à supposer que + subjunctive, then the conditional."], ["Il y a là une confusion de l'indifférence et la protestation.", "Il y a là une confusion entre l'indifférence et la protestation.", "une confusion entre A et B."]],
      task: ["Refute in four sentences this claim: Les jeunes ne s'intéressent pas à la politique.", "Réfute en quatre phrases cette affirmation : Les jeunes ne s'intéressent pas à la politique.", "Si je vous comprends bien, vous soutenez que les jeunes se désintéressent de la politique. C'est oublier qu'ils s'engagent massivement dans des associations et des mouvements de défense du climat. Il y a là une confusion entre la politique et les partis. Rien ne permet donc d'affirmer qu'ils sont indifférents : ils s'engagent autrement."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "voteobligatoire", lesson: 140, level: "C2", icon: "vote", partner: "Maxime", role: "a fellow student defending compulsory voting",
    title: "A debate on compulsory voting", title_fr: "Débat sur le vote obligatoire",
    setting: "In a debating club, Maxime defends compulsory voting. You don't agree, and you refute his arguments one by one.", setting_fr: "Dans un club de débat, Maxime défend le vote obligatoire. Tu n'es pas d'accord, et tu réfutes ses arguments un à un.",
    turns: [
      { p: "Le vote obligatoire, c'est la seule façon de lutter contre l'abstention.", fr: "Compulsory voting is the only way to fight abstention." },
      { y: ["C'est faire peu de cas des autres solutions : on pourrait d'abord rendre le vote plus simple.", "C'est faire peu de cas aux autres solutions : on pourrait d'abord rendre le vote plus simple.", "C'est faire peu du cas des autres solutions : on pourrait d'abord rendre le vote plus simple."], fr: "That's disregarding the other solutions: we could start by making voting simpler.", why: "faire peu de cas de." },
      { p: "Mais en Belgique, le vote est obligatoire depuis 1893, et ça marche !", fr: "But in Belgium, voting has been compulsory since 1893, and it works!" },
      { y: ["À supposer même que ce soit le cas, rien ne prouve que le modèle belge puisse s'appliquer tel quel en France.", "À supposer même que c'est le cas, rien ne prouve que le modèle belge puisse s'appliquer tel quel en France.", "À supposer même que ce soit le cas, rien ne prouve que le modèle belge peut s'appliquer tel quel en France."], fr: "Even supposing that's so, nothing proves the Belgian model could be applied as it is in France.", why: "à supposer que + subjunctive; rien ne prouve que + subjunctive." },
      { p: "De toute façon, les abstentionnistes sont juste paresseux.", fr: "Anyway, people who don't vote are just lazy." },
      { y: ["Il y a là une confusion entre l'indifférence et la protestation : beaucoup s'abstiennent par conviction.", "Il y a là une confusion de l'indifférence et la protestation : beaucoup s'abstiennent par conviction.", "Il y a là une confusion entre l'indifférence et la protestation : beaucoup s'abstient par conviction."], fr: "There's a confusion here between indifference and protest: many abstain out of conviction.", why: "une confusion entre A et B; beaucoup takes a plural verb." },
      { p: "Et le vote blanc, alors ? Il ne sert à rien.", fr: "And the blank vote? It's useless." },
      { y: ["Ce dont nous avons besoin, c'est qu'il soit enfin compté parmi les suffrages exprimés.", "Ce que nous avons besoin, c'est qu'il soit enfin compté parmi les suffrages exprimés.", "Ce dont nous avons besoin, c'est qu'il est enfin compté parmi les suffrages exprimés."], fr: "What we need is for it to be counted among the valid votes at last.", why: "avoir besoin de → ce dont; avoir besoin que + subjunctive." },
      { p: "Bon, admettons. Tu vois quand même un intérêt au vote obligatoire ?", fr: "OK, let's say so. Do you still see some point in compulsory voting?" },
      { y: ["Je l'admets : pour peu qu'il s'accompagne de la reconnaissance du vote blanc, il pourrait renforcer la légitimité des élus.", "Je l'admets : pour peu qu'il s'accompagnera de la reconnaissance du vote blanc, il pourrait renforcer la légitimité des élus.", "Je l'admets : pour peu de qu'il s'accompagne de la reconnaissance du vote blanc, il pourrait renforcer la légitimité des élus."], fr: "I admit it: provided it goes with recognising the blank vote, it could strengthen the legitimacy of elected representatives.", why: "pour peu que + subjunctive." }
    ] }
  );

  W.READINGS.push({
    id: "tirageausort", level: "C2", icon: "vote", title: "Le tirage au sort, avenir de la démocratie ?", genre: "Essai",
    intro: "From Athens to the French Citizens' Convention on Climate: should citizens be chosen by lot? Hypothesis and emphasis at C2 level.",
    intro_fr: "D'Athènes à la Convention citoyenne pour le climat : faut-il confier des décisions à des citoyens tirés au sort ? L'hypothèse et la mise en relief au niveau C2.",
    paragraphs: [
      { en: "Ce que l'on oublie souvent, c'est que l'élection n'a pas toujours été synonyme de démocratie. À Athènes, la plupart des magistrats étaient tirés au sort. Montesquieu lui-même l'écrivait dans De l'esprit des lois : le suffrage par le sort est de la nature de la démocratie ; le suffrage par choix est de celle de l'aristocratie.", fr: "What is often forgotten is that elections have not always been synonymous with democracy. In Athens, most officials were chosen by lot. Montesquieu himself wrote in The Spirit of the Laws: selection by lot is in the nature of democracy; selection by choice is in the nature of aristocracy." },
      { en: "L'idée revient aujourd'hui en force. En France, la Convention citoyenne pour le climat a réuni, entre 2019 et 2020, cent cinquante citoyens tirés au sort, chargés de proposer des mesures contre le réchauffement climatique. Ils en ont adopté cent quarante-neuf. Le président de la République s'était engagé à les transmettre sans filtre ; une partie seulement a été reprise, ce qui a nourri bien des déceptions.", fr: "The idea is making a strong comeback today. In France, the Citizens' Convention on Climate brought together, between 2019 and 2020, one hundred and fifty citizens chosen by lot, tasked with proposing measures against global warming. They adopted one hundred and forty-nine of them. The President had pledged to pass them on unfiltered; only some were taken up, which fuelled a good deal of disappointment." },
      { en: "Les partisans du tirage au sort font valoir que des citoyens ordinaires, pour peu qu'on leur donne du temps et des informations fiables, sont capables de délibérer avec sérieux. N'ayant pas de carrière à défendre, ils seraient moins exposés aux pressions des lobbies et à la tentation de la démagogie.", fr: "Supporters of selection by lot argue that ordinary citizens, provided they are given time and reliable information, are capable of deliberating seriously. With no career to defend, they would be less exposed to pressure from lobbies and to the temptation of demagoguery." },
      { en: "Leurs détracteurs répliquent qu'un citoyen tiré au sort n'a de comptes à rendre à personne. Si les élus sont parfois décevants, c'est aussi qu'ils peuvent être sanctionnés dans les urnes ; rien de tel pour une assemblée désignée par le hasard. Quant à la compétence, elle ne s'improvise pas, si tant est qu'elle puisse s'acquérir en quelques week-ends de travail.", fr: "Their critics reply that a citizen chosen by lot is accountable to no one. If elected representatives are sometimes disappointing, it is also because they can be punished at the ballot box; nothing of the sort applies to an assembly appointed by chance. As for competence, it can't be improvised, assuming it can be acquired in a few weekends of work at all." },
      { en: "Peut-être la question est-elle mal posée. Il ne s'agit sans doute pas de remplacer l'élection, mais de la compléter. Ce dont nos démocraties ont besoin, c'est moins d'un nouveau mode de désignation que d'une parole citoyenne réellement prise en compte. Sans cette écoute, tirage au sort ou non, la défiance continuera de grandir.", fr: "Perhaps the question is badly put. It's probably not about replacing elections, but about complementing them. What our democracies need is less a new method of selection than citizens' voices that are genuinely taken into account. Without that willingness to listen, lot or no lot, distrust will keep growing." }
    ],
    glossary: { "magistrats": "officials, magistrates", "synonyme": "synonymous", "suffrage": "vote, selection", "aristocratie": "aristocracy", "réchauffement": "warming", "filtre": "filter", "déceptions": "disappointments", "délibérer": "to deliberate", "lobbies": "lobbies", "détracteurs": "critics", "répliquent": "reply", "urnes": "ballot boxes", "improvise": "improvises (s'improviser: to be improvised)", "défiance": "distrust", "désignation": "selection, appointment" },
    questions: [
      { q: "Comment la plupart des magistrats étaient-ils choisis à Athènes ?", o: ["Par tirage au sort", "Par élection", "Par héritage"], a: 0 },
      { q: "Combien de citoyens la Convention citoyenne pour le climat a-t-elle réunis ?", o: ["Cent cinquante", "Cent quarante-neuf", "Mille"], a: 0 },
      { q: "Pourquoi la Convention a-t-elle suscité des déceptions ?", o: ["Une partie seulement de ses propositions a été reprise.", "Elle n'a rien proposé.", "Ses membres ont démissionné."], a: 0 },
      { q: "Quel argument avancent les détracteurs du tirage au sort ?", o: ["Un citoyen tiré au sort n'a de comptes à rendre à personne.", "Le tirage au sort coûte trop cher.", "Les citoyens refusent de participer."], a: 0 },
      { q: "Selon l'auteur, de quoi nos démocraties ont-elles surtout besoin ?", o: ["D'une parole citoyenne réellement prise en compte", "De supprimer les élections", "De plus de députés"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-c2-2", unit: "c2-2", level: "C2", icon: "radio",
    title: "Débat : faut-il rendre le vote obligatoire ?", title_fr: "Débat : faut-il rendre le vote obligatoire ?",
    context: "On the radio, Laure hosts a debate between Bertrand, a political scientist, and Samira, who campaigns for the blank vote to be recognised.", context_fr: "À la radio, Laure anime un débat entre Bertrand, politologue, et Samira, qui milite pour la reconnaissance du vote blanc.",
    words: [["le politologue", "the political scientist"], ["le symptôme", "the symptom"], ["les suffrages exprimés", "valid votes"], ["l'offre politique", "the range of candidates and parties"], ["retisser", "to reweave, to rebuild"]],
    lines: [["Laure", "Aux élections législatives de 2017, plus de la moitié des inscrits ne se sont pas déplacés au second tour. Faut-il rendre le vote obligatoire, comme en Belgique ou en Australie ? Bertrand, vous êtes politologue.", "fr-FR"], ["Bertrand", "Ce qui frappe, c'est que l'abstention n'est plus un accident : elle est devenue un comportement installé, surtout chez les jeunes. Le vote obligatoire réglerait le symptôme, pas la cause. Si les gens ne votent plus, c'est qu'ils doutent que leur voix change quoi que ce soit.", "fr-FR"], ["Laure", "Samira, vous militez pour la reconnaissance du vote blanc.", "fr-FR"], ["Samira", "Oui, parce qu'on confond deux attitudes. Il y a ceux que la politique n'intéresse pas, et ceux qui se déplacent pour dire qu'aucun candidat ne les représente. Aujourd'hui, le vote blanc est décompté à part, mais il n'entre pas dans les suffrages exprimés : c'est comme s'il n'existait pas.", "fr-FR"], ["Laure", "Rendre le vote obligatoire, ce serait donc une erreur ?", "fr-FR"], ["Samira", "Pas forcément, pour peu qu'on reconnaisse le vote blanc. Obliger les gens à voter sans leur permettre de refuser l'offre politique, ce serait les contraindre à choisir contre leur conscience.", "fr-FR"], ["Bertrand", "Je vous rejoins sur ce point. Mais il ne faut pas en attendre de miracle. En Australie, où le vote est obligatoire depuis 1924, la participation est très élevée ; rien ne prouve pour autant que la confiance envers les responsables politiques y soit plus forte.", "fr-FR"], ["Laure", "Que faudrait-il, alors ?", "fr-FR"], ["Bertrand", "Redonner du sens au vote : des élus plus proches, des promesses tenues, des citoyens consultés entre deux élections. Il n'y a que cela qui puisse durablement faire reculer l'abstention.", "fr-FR"]],
    gist: ["Quel est le sujet du débat ?", ["Faut-il rendre le vote obligatoire pour lutter contre l'abstention ?", "Faut-il supprimer le Sénat ?", "Faut-il voter par internet ?"]],
    detail: [["Selon Bertrand, que réglerait le vote obligatoire ?", ["Le symptôme, pas la cause", "Toutes les causes de l'abstention", "Rien du tout"]], ["Quelles attitudes Samira distingue-t-elle ?", ["Le désintérêt pour la politique et le refus de tous les candidats", "Le vote des villes et celui des campagnes", "Le vote des jeunes et celui des personnes âgées"]], ["À quelle condition Samira accepterait-elle le vote obligatoire ?", ["Que le vote blanc soit reconnu", "Que le vote se fasse par internet", "Que l'amende soit faible"]], ["Que propose Bertrand pour faire reculer l'abstention ?", ["Redonner du sens au vote", "Supprimer les élections locales", "Voter tous les ans"]]],
    decode: ["Si les gens ne votent plus, c'est qu'ils doutent que leur voix change quoi que ce soit", "pour peu qu'on reconnaisse le vote blanc"],
    tip: "In a debate between experts, agreement is rarely total: je vous rejoins sur ce point. Mais… Note what each speaker grants and what they keep: that's where the real disagreement lies.", tip_fr: "Dans un débat d'experts, l'accord est rarement total : je vous rejoins sur ce point. Mais… Note ce que chacun concède et ce qu'il maintient : c'est là que se situe le vrai désaccord."
  }]);

  W.LEXIS = W.LEXIS || {};
  W.LEXIS["c2-2"] = {
    colloc: [
      ["briguer un mandat", "to seek office", "Elle briguera un second mandat.", "briguera", ["brigandera", "brisera"]],
      ["exercer le pouvoir", "to exercise power", "Il a exercé le pouvoir pendant dix ans.", "exercé", ["fait", "mené"]],
      ["prêter serment", "to take an oath", "Les jurés ont prêté serment.", "prêté", ["donné", "fait"]],
      ["dissoudre l'Assemblée", "to dissolve the National Assembly", "Le président a décidé de dissoudre l'Assemblée.", "dissoudre", ["dissiper", "défaire"]],
      ["déposer un projet de loi", "to table a bill", "Le gouvernement a déposé un projet de loi.", "déposé", ["posé", "mis"]],
      ["adopter une loi", "to pass a law", "Le Parlement a adopté la loi à une large majorité.", "adopté", ["pris", "passé"]],
      ["recueillir les suffrages", "to win votes", "La candidate a recueilli la majorité des suffrages.", "recueilli", ["ramassé", "cueilli"]],
      ["se porter candidat", "to stand as a candidate", "Il s'est porté candidat aux élections municipales.", "porté", ["mis", "posé"]],
      ["faire campagne", "to campaign", "Elle a fait campagne sur l'écologie.", "fait", ["tenu", "joué"]],
      ["abuser de son pouvoir", "to abuse one's power", "Le maire a abusé de son pouvoir.", "abusé", ["excédé", "outré"]]
    ],
    wf: [
      ["L'___ a atteint un niveau record. (ABSTENIR)", "abstention"],
      ["La ___ du gouvernement est contestée. (LÉGITIME)", "légitimité"],
      ["Les ___ ont rejeté le projet. (PARLEMENT)", "parlementaires"],
      ["Ce discours est purement ___. (DÉMAGOGIE)", "démagogique"],
      ["La ___ des pouvoirs protège les libertés. (SÉPARER)", "séparation"],
      ["Un régime ___ ne tolère aucune opposition. (AUTORITÉ)", "autoritaire"],
      ["La ___ des élus est une exigence démocratique. (TRANSPARENT)", "transparence"],
      ["Ce candidat est ___ : il promet tout à tout le monde. (POPULAIRE)", "populiste"]
    ],
    kwt: [
      ["S'il fait le moindre effort, il réussira.", "PEU", "___ effort, il réussira.", "Pour peu qu'il fasse le moindre"],
      ["Si toutefois cette mesure est efficace, elle coûtera cher.", "TANT", "Si ___ efficace, elle coûtera cher.", "tant est que cette mesure soit"],
      ["S'il n'y avait pas eu la pluie, nous serions sortis.", "N'EÛT", "___, nous serions sortis.", "N'eût été la pluie"],
      ["Nous avons besoin de temps.", "DONT", "___, c'est de temps.", "Ce dont nous avons besoin"],
      ["Seul le peuple peut trancher.", "N'Y", "Il ___ peut trancher.", "n'y a que le peuple qui"],
      ["Votre argument néglige les faits.", "CAS", "Votre argument ___ des faits.", "fait peu de cas"]
    ],
    idioms: [
      ["tenir les rênes", "diriger, avoir le contrôle", "to hold the reins", "C'est elle qui tient les rênes du parti.", "tient les rênes"],
      ["retourner sa veste", "changer d'opinion par opportunisme", "to change sides", "Ce député a retourné sa veste après l'élection.", "a retourné sa veste"],
      ["faire la pluie et le beau temps", "décider de tout, avoir une influence décisive", "to call the shots", "Ce groupe fait la pluie et le beau temps dans la région.", "fait la pluie et le beau temps"],
      ["avoir le bras long", "avoir de l'influence", "to have friends in high places", "Son oncle a le bras long.", "a le bras long"],
      ["promettre monts et merveilles", "promettre des choses extraordinaires", "to promise the moon", "En campagne, les candidats promettent monts et merveilles.", "promettent monts et merveilles"],
      ["diviser pour mieux régner", "affaiblir ses adversaires en les opposant entre eux", "divide and rule", "Il a appliqué le vieux principe : diviser pour mieux régner.", "diviser pour mieux régner"],
      ["un coup d'épée dans l'eau", "une action sans effet", "a waste of effort", "Cette réforme n'a été qu'un coup d'épée dans l'eau.", "un coup d'épée dans l'eau"],
      ["le pot de terre contre le pot de fer", "le faible contre le puissant (d'après La Fontaine)", "David against Goliath", "Ce petit village contre l'État, c'est le pot de terre contre le pot de fer.", "le pot de terre contre le pot de fer"]
    ]
  };

  W.PROMPTS.push({ id: "fr-c2-2", level: "C2", q: "Le vote devrait-il être obligatoire ? Défends ta position et réfute l'argument adverse le plus fort.", fr: "Should voting be compulsory? Defend your position and refute the strongest argument on the other side.", time: 240,
    phrases: ["Ce que je crains, c'est que…", "si…, c'est que…", "On m'objectera que…", "C'est oublier que…", "Il n'y a que… qui…"],
    model: "À mes yeux, le vote ne devrait pas être obligatoire. Ce que je crains, c'est qu'on traite le symptôme sans s'attaquer à la cause : si tant de citoyens s'abstiennent, c'est qu'ils doutent de l'utilité de leur voix. On m'objectera que la Belgique s'en porte très bien. C'est oublier que le vote y est obligatoire depuis plus d'un siècle : on ne transpose pas une culture politique d'un trait de plume. À supposer même qu'une loi fasse remonter la participation, elle ne rendrait pas la confiance. Il n'y a qu'une politique plus proche des citoyens qui puisse y parvenir." });

  W.WRITING_GUIDE["c2-2"] = { genre: "An open letter (C2)", genre_fr: "Une lettre ouverte (C2)",
    plan: [["Address the recipients and say why you are writing.", "Adresse-toi aux destinataires et dis pourquoi tu écris."], ["Grant the objections, then answer them with evidence.", "Concède les objections, puis réponds-y avec des éléments concrets."], ["Diagnose the underlying problem.", "Pose le diagnostic du problème de fond."], ["Make a measured proposal, with its condition.", "Fais une proposition mesurée, avec sa condition."], ["Close with an appeal and a formal closing.", "Termine par un appel et une formule de politesse soutenue."]],
    marks: [["Si je m'adresse à vous aujourd'hui, c'est qu'", "si…, c'est que: the reason for writing", "si…, c'est que : la raison de la lettre"], ["pour peu qu'on leur donne du temps", "pour peu que + subjunctive", "pour peu que + subjonctif"], ["Ce dont notre démocratie souffre", "a pseudo-cleft sentence", "une phrase pseudo-clivée"], ["Il n'y a qu'une participation plus directe des citoyens qui puisse", "il n'y a que… qui + subjunctive", "il n'y a que… qui + subjonctif"], ["N'eût été la Convention citoyenne", "n'eût été: a literary hypothesis", "n'eût été : une hypothèse littéraire"], ["Qu'on la juge prometteuse ou risquée", "que… ou: whatever the case", "que… ou : quel que soit le cas"]] };

  W.COURSE.push({ id: "c2-2", level: "C2", icon: "vote", title: "Power and democracy", title_fr: "Pouvoir et démocratie",
    intro: "In this unit, you'll debate power, voting and citizenship: hypothesis at the highest level (pour peu que, si tant est que, n'eût été), advanced emphasis (ce dont il s'agit, c'est…; il n'y a que… qui) and the art of refuting an argument point by point.",
    intro_fr: "Dans cette unité, tu vas débattre du pouvoir, du vote et de la citoyenneté : l'hypothèse au plus haut niveau (pour peu que, si tant est que, n'eût été), la mise en relief avancée (ce dont il s'agit, c'est… ; il n'y a que… qui) et l'art de réfuter un argument point par point.",
    can: ["Express subtle conditions and hypotheses", "Put the key idea in relief with pseudo-cleft sentences", "Discuss institutions, voting and the crisis of trust", "Refute an argument point by point, courteously", "Write an open letter to elected representatives"],
    can_fr: ["Exprimer des conditions et des hypothèses nuancées", "Mettre l'idée clé en relief avec des phrases pseudo-clivées", "Débattre des institutions, du vote et de la crise de confiance", "Réfuter un argument point par point, avec courtoisie", "Rédiger une lettre ouverte aux élus"],
    lessons: [138, 139, 140], vocab: ["democratieFR", "pouvoirFR"], reading: "tirageausort", prompt: "fr-c2-2",
    writing: { task: "Write an open letter to members of parliament (350-400 words): should drawing lots be given a place in our institutions? Grant the objections, then make a measured proposal.", task_fr: "Rédige une lettre ouverte aux députés (350 à 400 mots) : faut-il faire une place au tirage au sort dans nos institutions ? Concède les objections, puis fais une proposition mesurée.", words: "350-400",
      tips: ["Si je m'adresse à vous aujourd'hui, c'est que…", "Je ne méconnais pas les objections.", "Ce dont… souffre, c'est…", "Je ne vous propose pas de…, mais de…", "Je vous prie d'agréer…"],
      checklist: ["I addressed the recipients and gave my reason for writing", "I granted the strongest objections", "I used at least two C2 structures (pour peu que, n'eût été, pseudo-cleft…)", "My proposal is measured and precise", "I used a formal closing", "I wrote between 350 and 400 words"],
      model: "Lettre ouverte aux députés\n\nMesdames et Messieurs les députés,\n\nSi je m'adresse à vous aujourd'hui, c'est qu'une question me semble trop importante pour être laissée aux seuls spécialistes : faut-il faire une place au tirage au sort dans nos institutions ?\n\nJe ne méconnais pas les objections. Un citoyen tiré au sort n'a de comptes à rendre à personne, et la compétence ne s'improvise pas. Il serait pourtant excessif d'en conclure que le hasard n'a rien à apporter à la démocratie. Ce que l'expérience de la Convention citoyenne pour le climat a montré, c'est que des citoyens ordinaires, pour peu qu'on leur donne du temps et des informations fiables, sont capables de délibérer avec sérieux et de formuler des propositions précises. Plusieurs d'entre elles ont d'ailleurs inspiré des textes de loi, preuve que ce travail n'a pas été vain.\n\nCe dont notre démocratie souffre, ce n'est pas d'un manque d'élus, mais d'un manque de confiance. Lorsque plus de la moitié des inscrits boudent les urnes, comme ce fut le cas au second tour des législatives de 2017, c'est le lien même entre représentants et représentés qui se distend. Il n'y a qu'une participation plus directe des citoyens qui puisse, à terme, le retisser. Car si les citoyens se détournent du vote, ce n'est pas qu'ils se désintéressent de la chose publique : c'est qu'ils doutent d'être entendus.\n\nJe ne vous propose pas de remplacer l'élection, qui demeure le fondement de notre légitimité démocratique. Je vous propose de la compléter. En d'autres termes, il s'agit d'ajouter une voix au débat, non d'en retirer une. Une assemblée de citoyens tirés au sort pourrait être consultée sur les grandes réformes de long terme, celles que le calendrier électoral pousse trop souvent à repousser. Encore faudrait-il que ses avis soient réellement pris en compte, faute de quoi l'expérience ne ferait qu'ajouter la déception à la défiance.\n\nN'eût été la Convention citoyenne, cette idée serait sans doute restée une curiosité de théoriciens. Elle est désormais une piste sérieuse, que d'autres pays explorent également. Qu'on la juge prometteuse ou risquée, elle mérite un débat à la hauteur de l'enjeu.\n\nJe vous prie d'agréer, Mesdames et Messieurs les députés, l'expression de ma haute considération.\n\nDominique Laurent" } });
})();
