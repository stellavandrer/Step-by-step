/* Cours de français, unité C1-9 « Feeding the world / Nourrir le monde » : les quantificateurs et l'accord du verbe
   (la plupart des, nombre de, plus d'un, aucun, la moitié), la cohésion du texte (ce dernier, le second, celui-ci,
   ledit, ce phénomène), l'exposé oral du DALF C1. Personnages fictifs, prénoms français. Faits vérifiables seulement :
   population mondiale passée à huit milliards en novembre 2022 (ONU) ; plus de 700 millions de personnes souffrant de
   la faim en 2023 (ONU) ; estimation de la FAO, près d'un tiers de la nourriture produite perdue ou gaspillée ;
   l'élevage mobilise une large part des terres agricoles ; comté, appellation d'origine depuis 1958, ensilage interdit
   par le cahier des charges ; loi française de 2016 contre le gaspillage dans la grande distribution ; DALF C1, oral
   en 30 minutes après une heure de préparation, exposé puis entretien avec le jury. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "agricultureFR", icon: "wheat", title: "Farming", title_fr: "L'agriculture", level: "C1", words: [
    ["l'agriculteur / l'agricultrice", "the farmer (m) / (f)", "Les agriculteurs manifestent devant la préfecture."],
    ["l'exploitation agricole", "the farm (business)", "Il a repris l'exploitation agricole de ses parents."],
    ["l'élevage", "livestock farming", "L'élevage de montagne façonne les paysages."],
    ["l'éleveur / l'éleveuse", "the livestock farmer (m) / (f)", "Cette éleveuse produit du lait pour le fromage."],
    ["la récolte", "the harvest", "La récolte a été mauvaise cette année."],
    ["le rendement", "the yield", "Les rendements de blé ont baissé."],
    ["les pesticides", "pesticides", "Ce produit est cultivé sans pesticides."],
    ["l'agriculture biologique", "organic farming", "L'agriculture biologique progresse lentement."],
    ["les semences", "seeds (for sowing)", "Les semences sont conservées d'une année sur l'autre."],
    ["l'irrigation", "irrigation", "L'irrigation consomme beaucoup d'eau."],
    ["le cahier des charges", "the specifications, the rules", "Le cahier des charges du fromage est très strict."],
    ["le terroir", "the local area and its traditions (soil, climate, know-how)", "Ce vin reflète son terroir."],
    ["l'appellation d'origine", "the protected designation of origin", "Le comté bénéficie d'une appellation d'origine."],
    ["le paysan / la paysanne", "the small farmer, the peasant (m) / (f)", "Les paysans défendent leurs terres."],
    ["le circuit court", "short supply chain (few or no middlemen)", "Elle vend ses légumes en circuit court."],
    ["la souveraineté alimentaire", "food sovereignty", "La crise a relancé le débat sur la souveraineté alimentaire."],
    ["la traçabilité", "traceability", "La traçabilité de la viande est obligatoire."],
    ["la grande distribution", "supermarket chains, large-scale retail", "La grande distribution impose ses prix."]
  ] },
  { id: "alimentationFR", icon: "apple", title: "Food and hunger", title_fr: "Alimentation et faim", level: "C1", words: [
    ["la faim", "hunger", "La faim touche encore des millions de personnes."],
    ["nourrir", "to feed", "Comment nourrir une population croissante ?"],
    ["la sécurité alimentaire", "food security", "Le climat menace la sécurité alimentaire de la région."],
    ["la famine", "famine", "La famine a frappé le pays en 1984."],
    ["la malnutrition", "malnutrition", "La malnutrition freine le développement des enfants."],
    ["le gaspillage alimentaire", "food waste", "Le gaspillage alimentaire commence dès la récolte."],
    ["les aliments ultra-transformés", "ultra-processed foods", "Il évite les aliments ultra-transformés."],
    ["la protéine végétale", "plant protein", "Les lentilles sont riches en protéines végétales."],
    ["l'agroalimentaire", "the food industry", "L'agroalimentaire est un grand employeur en Bretagne."],
    ["le producteur / la productrice", "the producer (m) / (f)", "Les producteurs locaux vendent au marché."],
    ["les invendus", "unsold goods", "Les invendus sont donnés à des associations."],
    ["les céréales", "cereals, grain", "Le pays importe la moitié de ses céréales."],
    ["le foyer", "the household, the home", "Une grande partie du gaspillage a lieu dans les foyers."],
    ["le régime alimentaire", "the diet", "Notre régime alimentaire a beaucoup changé."],
    ["la denrée", "the foodstuff, the commodity", "Les denrées périssables doivent être vendues vite."],
    ["périssable", "perishable", "Le lait est une denrée périssable."],
    ["la pénurie", "the shortage", "La sécheresse a provoqué une pénurie de fourrage."],
    ["la flambée des prix", "the surge in prices", "La flambée des prix inquiète les ménages."]
  ] });

  W.LESSONS.push(
  {
    id: 129, level: "C1", icon: "users",
    title: "La plupart des, nombre de, plus d'un: quantifiers and agreement", title_fr: "La plupart des, nombre de, plus d'un : les quantificateurs et l'accord",
    subtitle: "Singular or plural? The verb follows the meaning, and some rules that surprise English speakers.", subtitle_fr: "Singulier ou pluriel ? Le verbe suit le sens, avec quelques règles qui surprennent les anglophones.",
    body: `
<h2>Always plural</h2>
<p><s-fr>la plupart des</s-fr> + plural noun + plural verb: <s-fr>La plupart des agriculteurs sont inquiets.</s-fr> Even alone: <s-fr>La plupart pensent que…</s-fr> · <s-fr>nombre de</s-fr>, <s-fr>bon nombre de</s-fr> (many), with no article: <s-fr>Nombre de pays ont signé.</s-fr> · <s-fr>beaucoup de</s-fr>, <s-fr>peu de</s-fr>, <s-fr>trop de</s-fr> + plural noun: plural verb.</p>
<h2>Singular, surprisingly</h2>
<p><s-fr>plus d'un</s-fr> takes a singular verb: <s-fr>Plus d'un consommateur a changé ses habitudes.</s-fr> But <s-fr>moins de deux</s-fr> takes a plural. · <s-fr>aucun</s-fr>, <s-fr>chaque</s-fr>, <s-fr>chacun</s-fr>, <s-fr>tout le monde</s-fr>: singular. <s-fr>Aucun producteur n'a répondu.</s-fr></p>
<h2>Either, depending on what you stress</h2>
<p><s-fr>la moitié des</s-fr>, <s-fr>un tiers des</s-fr>, <s-fr>la majorité des</s-fr>, <s-fr>une partie des</s-fr>, <s-fr>l'ensemble des</s-fr>: the verb can agree with the collective noun (the group as a whole) or with the plural (the individuals): <s-fr>La moitié des élèves a voté</s-fr> / <s-fr>ont voté</s-fr>. With a singular complement, only the singular: <s-fr>Une grande partie du gaspillage a lieu dans les foyers.</s-fr></p>
<h2>Formal quantifiers</h2>
<p><s-fr>divers</s-fr>, <s-fr>différents</s-fr> (various), before the noun, without an article: <s-fr>divers experts</s-fr> · <s-fr>maints</s-fr> (many, literary): <s-fr>à maintes reprises</s-fr> (time and again)</p>
<div class="tip">The two traps: <s-fr>la plupart des</s-fr> is never followed by a singular verb, and <s-fr>plus d'un</s-fr> never by a plural one. Logic says otherwise; French grammar doesn't.</div>
`,
    examples: [
      ["La plupart des agriculteurs sont inquiets.", "Most farmers are worried."],
      ["Nombre de pays ont signé l'accord.", "Many countries have signed the agreement."],
      ["Plus d'un consommateur a changé ses habitudes.", "More than one consumer has changed their habits."],
      ["Aucun producteur n'a répondu à l'enquête.", "No producer answered the survey."],
      ["La moitié des élèves a voté pour le projet.", "Half of the pupils voted for the project."],
      ["Une grande partie du gaspillage a lieu dans les foyers.", "Much of the waste happens in households."],
      ["Divers experts ont été consultés.", "Various experts were consulted."],
      ["Je l'ai prévenu à maintes reprises.", "I warned him time and again."]
    ],
    quiz: [
      { q: "“Most customers are happy” is:", o: ["La plupart des clients sont contents.", "La plupart des clients est contente.", "La plupart de clients sont contents."], a: 0, ex: "la plupart des + plural verb." },
      { q: "“More than one farmer protested” is:", o: ["Plus d'un agriculteur a protesté.", "Plus d'un agriculteur ont protesté.", "Plus d'un des agriculteur a protesté."], a: 0, ex: "plus d'un + singular verb." },
      { q: "“Many experts agree” (formal) is:", o: ["Nombre d'experts s'accordent.", "Nombre des experts s'accorde.", "Un nombre experts s'accordent."], a: 0, ex: "nombre de + noun, no article, plural verb." },
      { q: "“None of the shops opened” is:", o: ["Aucun magasin n'a ouvert.", "Aucuns magasins n'ont ouvert.", "Aucun magasin a ouvert."], a: 0, ex: "aucun + singular, with ne." },
      { q: "“A large part of the harvest was lost” is:", o: ["Une grande partie de la récolte a été perdue.", "Une grande partie de la récolte ont été perdues.", "Une grande partie la récolte a été perdue."], a: 0, ex: "Singular complement: singular verb." }
    ]
  },
  {
    id: 130, level: "C1", icon: "link",
    title: "Ce dernier, le second, ledit: cohesion in a text", title_fr: "Ce dernier, le second, ledit : la cohésion du texte",
    subtitle: "Refer back without repeating yourself: the tools that make a text flow.", subtitle_fr: "Reprendre sans se répéter : les outils qui rendent un texte fluide.",
    body: `
<h2>The latter, the former</h2>
<p><s-fr>ce dernier</s-fr>, <s-fr>cette dernière</s-fr>, <s-fr>ces derniers</s-fr> (the latter, the last one mentioned): <s-fr>J'ai écrit au maire et à son adjointe ; cette dernière m'a répondu.</s-fr> · <s-fr>le premier… le second</s-fr> (the former… the latter): <s-fr>Deux solutions existent : la première coûte cher, la seconde prend du temps.</s-fr></p>
<h2>Demonstratives</h2>
<p><s-fr>celui-ci</s-fr>, <s-fr>celle-ci</s-fr> (the latter, this one) · <s-fr>celui-là</s-fr> (the former, that one): <s-fr>Le gouvernement a annoncé une taxe ; celle-ci entrera en vigueur en mai.</s-fr></p>
<h2>Resumptive nouns</h2>
<p>Sum up what was just said in a noun: <s-fr>Les prix ont doublé en un an. Ce phénomène inquiète les familles.</s-fr> · <s-fr>cette mesure</s-fr>, <s-fr>cette évolution</s-fr>, <s-fr>ce constat</s-fr>, <s-fr>une telle décision</s-fr></p>
<h2>In legal and administrative texts</h2>
<p><s-fr>ledit</s-fr>, <s-fr>ladite</s-fr>, <s-fr>lesdits</s-fr> (the said, the aforementioned): <s-fr>ledit contrat</s-fr> · <s-fr>susmentionné</s-fr> (above-mentioned) · <s-fr>à cet égard</s-fr> (in this respect) · <s-fr>en la matière</s-fr> (in this area)</p>
<div class="tip">A text that repeats the same noun three times sounds childish; a text full of pronouns becomes unclear. Alternate: a pronoun, then a resumptive noun, then a synonym. And use ce dernier only when the reader can't hesitate about who it refers to.</div>
`,
    examples: [
      ["J'ai écrit au maire et à son adjointe ; cette dernière m'a répondu.", "I wrote to the mayor and his deputy; she (the latter) replied."],
      ["Deux solutions existent : la première coûte cher, la seconde prend du temps.", "Two solutions exist: the first is expensive, the second takes time."],
      ["Le gouvernement a annoncé une taxe ; celle-ci entrera en vigueur en mai.", "The government announced a tax; it will come into force in May."],
      ["Les prix ont doublé en un an. Ce phénomène inquiète les familles.", "Prices have doubled in a year. This development worries families."],
      ["Une telle décision aurait des conséquences lourdes.", "Such a decision would have serious consequences."],
      ["Les parties s'engagent à respecter ledit contrat.", "The parties undertake to comply with the said contract."],
      ["À cet égard, la France a pris du retard.", "In this respect, France has fallen behind."]
    ],
    quiz: [
      { q: "“The latter” (a man, last mentioned) is:", o: ["ce dernier", "le dernier", "celui dernier"], a: 0, ex: "ce dernier, with ce." },
      { q: "“Such a measure” is:", o: ["une telle mesure", "une si mesure", "une mesure tellement"], a: 0, ex: "un tel / une telle + noun." },
      { q: "A resumptive noun is:", o: ["a noun that sums up what was just said", "a noun repeated three times", "a proper noun"], a: 0, ex: "Ce phénomène, cette mesure, ce constat…" },
      { q: "“The said contract” (legal) is:", o: ["ledit contrat", "le dit contrat", "le contrat dit"], a: 0, ex: "ledit, in one word." },
      { q: "“In this respect” is:", o: ["à cet égard", "en cet égard", "à cette égard"], a: 0, ex: "un égard, so cet; à cet égard." }
    ]
  },
  {
    id: 131, level: "C1", kind: "functional", icon: "presentation",
    title: "Everyday French: the DALF C1 oral presentation", title_fr: "Le français de tous les jours : l'exposé oral du DALF C1",
    subtitle: "One hour to prepare from documents, then a structured presentation and a discussion with the jury.", subtitle_fr: "Une heure de préparation à partir de documents, puis un exposé structuré et un entretien avec le jury.",
    body: `
<h2>The exam</h2>
<p>You get a set of written documents and one hour to prepare. Then, for about thirty minutes, you present your analysis and your point of view (around ten minutes), and you discuss it with the jury.</p>
<h2>The introduction</h2>
<p>An opening that catches attention · the documents: <s-fr>Les documents dont je dispose…</s-fr>, <s-fr>Il s'agit d'un article paru dans…</s-fr> · the question: <s-fr>On peut donc se demander si…</s-fr> · the plan: <s-fr>Nous verrons dans un premier temps…, puis…</s-fr></p>
<h2>The body</h2>
<p>Two or three parts, drawing on the documents and on your own knowledge: <s-fr>Comme le souligne l'auteur du premier document…</s-fr> · <s-fr>Dans mon pays, par exemple, …</s-fr> · clear transitions: <s-fr>Après avoir vu…, intéressons-nous à…</s-fr></p>
<h2>The conclusion</h2>
<p>Your answer, then a wider question: <s-fr>Pour élargir le débat, on pourrait se demander…</s-fr></p>
<h2>The discussion</h2>
<p>Defend, nuance and concede, as at B2, but with more precision: <s-fr>Je nuancerais mon propos…</s-fr> · <s-fr>C'est un point que je n'ai pas développé, mais…</s-fr></p>
<div class="tip">Unlike the written synthesis, the oral presentation expects your opinion, argued and illustrated. Speak from key words, never from full sentences: the jury assesses how you speak, not how you read.</div>
`,
    examples: [
      ["Les documents dont je dispose abordent le gaspillage alimentaire.", "The documents I have deal with food waste."],
      ["Il s'agit d'un article paru dans un quotidien national.", "It's an article published in a national daily."],
      ["On peut donc se demander comment réduire le gaspillage.", "So we may ask how to reduce waste."],
      ["Nous verrons dans un premier temps les causes, puis les solutions.", "First we'll look at the causes, then the solutions."],
      ["Comme le souligne l'auteur du premier document, les pertes commencent dès la récolte.", "As the author of the first document stresses, losses begin at harvest."],
      ["Pour élargir le débat, on pourrait se demander si la loi suffit.", "To broaden the debate, we could ask whether the law is enough."],
      ["Je nuancerais mon propos sur ce point.", "I'd qualify what I said on that point."]
    ],
    quiz: [
      { q: "How long do you prepare for the DALF C1 oral?", o: ["one hour", "ten minutes", "two hours"], a: 0, ex: "One hour, then about thirty minutes with the jury." },
      { q: "In the oral presentation, your opinion:", o: ["is expected, argued and illustrated", "is forbidden", "only goes in the introduction"], a: 0, ex: "Unlike the synthesis." },
      { q: "“The documents I have” is:", o: ["les documents dont je dispose", "les documents que je dispose", "les documents dont je dispose de"], a: 0, ex: "disposer de → dont." },
      { q: "“An article published in…” is:", o: ["un article paru dans…", "un article apparu dans…", "un article paraît dans…"], a: 0, ex: "paraître (to be published) → paru." },
      { q: "To end your conclusion, you can:", o: ["broaden the debate with a new question", "repeat your introduction", "thank the documents"], a: 0, ex: "Pour élargir le débat…" }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    129: {
      gap: [["La plupart des agriculteurs ___ satisfaits. (être, present)", "sont"], ["Plus d'un consommateur ___ changé ses habitudes. (avoir)", "a"], ["___ de pays ont signé l'accord. (many, formal)", "Nombre"], ["Aucun producteur n'___ répondu. (avoir)", "a"]],
      fix: [["La plupart des clients est satisfaite.", "La plupart des clients sont satisfaits.", "la plupart des + plural verb, agreeing with the noun."], ["Nombre des agriculteurs ont protesté.", "Nombre d'agriculteurs ont protesté.", "nombre de + noun, without an article."]],
      task: ["Describe the results of an invented survey on eating habits in four sentences, with la plupart des, plus d'un, nombre de and aucun.", "Décris les résultats d'une enquête inventée sur les habitudes alimentaires en quatre phrases, avec la plupart des, plus d'un, nombre de et aucun.", "La plupart des personnes interrogées déclarent manger moins de viande qu'il y a cinq ans. Plus d'un participant sur trois achète régulièrement des produits locaux. Nombre de jeunes disent cuisiner davantage depuis qu'ils ont quitté le foyer familial. En revanche, aucun participant n'a renoncé complètement aux produits transformés."]
    },
    130: {
      gap: [["J'ai parlé au maire et à son adjointe ; cette ___ m'a promis une réponse. (the latter, f)", "dernière"], ["Deux solutions existent : la première coûte cher, la ___ prend du temps. (second)", "seconde"], ["Les prix ont doublé. Ce ___ inquiète les familles. (development, phenomenon)", "phénomène"], ["Une ___ décision aurait de lourdes conséquences. (such)", "telle"]],
      fix: [["Les agriculteurs et les distributeurs se sont rencontrés ; les derniers ont promis des efforts.", "Les agriculteurs et les distributeurs se sont rencontrés ; ces derniers ont promis des efforts.", "the latter = ce dernier, ces derniers, with ce or ces."], ["Le gouvernement a annoncé une taxe ; la taxe sera appliquée en mai et la taxe rapportera peu.", "Le gouvernement a annoncé une taxe ; celle-ci sera appliquée en mai et rapportera peu.|Le gouvernement a annoncé une taxe ; cette mesure sera appliquée en mai et rapportera peu.", "Avoid repetition: a pronoun (celle-ci) or a resumptive noun (cette mesure)."]],
      task: ["Rewrite this repetitive paragraph: Les supermarchés jettent des aliments. Les supermarchés pourraient donner les aliments. Les associations distribueraient les aliments aux familles.", "Réécris ce paragraphe répétitif : Les supermarchés jettent des aliments. Les supermarchés pourraient donner les aliments. Les associations distribueraient les aliments aux familles.", "Les supermarchés jettent des aliments encore consommables. Ils pourraient pourtant les donner à des associations, et ces dernières les distribueraient aux familles dans le besoin."]
    },
    131: {
      gap: [["Il s'agit d'un article ___ dans un quotidien national. (published)", "paru"], ["Nous verrons dans un premier ___ les causes du problème. (time)", "temps"], ["Les documents dont je ___ traitent du gaspillage. (disposer)", "dispose"], ["Pour ___ le débat, on pourrait se demander si la loi suffit. (broaden)", "élargir"]],
      fix: [["Les documents que je dispose traitent du gaspillage.", "Les documents dont je dispose traitent du gaspillage.", "disposer de → dont."], ["Il s'agit d'un article apparu en 2023.", "Il s'agit d'un article paru en 2023.", "An article paraît (is published); apparaître means to appear, to come into view."]],
      task: ["Write the introduction of a DALF C1 presentation on two documents about food waste: an opening, the documents, the question and the plan.", "Rédige l'introduction d'un exposé du DALF C1 sur deux documents consacrés au gaspillage alimentaire : une accroche, les documents, la question et le plan.", "Chaque année, des tonnes de nourriture finissent à la poubelle, alors que des millions de personnes ont faim. Les deux documents dont je dispose, un article de presse et un entretien avec une éleveuse, abordent ce paradoxe. On peut donc se demander comment réduire le gaspillage alimentaire. Nous verrons dans un premier temps où il se produit, puis quelles solutions peuvent être envisagées."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "juryc1", lesson: 131, level: "C1", icon: "presentation", partner: "Corinne", role: "a DALF C1 jury member",
    title: "Questions from the jury", title_fr: "Les questions du jury",
    setting: "You've just given your DALF C1 presentation on food waste, based on two documents. Corinne, a member of the jury, asks you questions.", setting_fr: "Tu viens de faire ton exposé du DALF C1 sur le gaspillage alimentaire, à partir de deux documents. Corinne, membre du jury, te pose des questions.",
    turns: [
      { p: "Merci pour votre exposé. Vous avez dit que le gaspillage avait surtout lieu chez les consommateurs. Pouvez-vous préciser ?", fr: "Thank you for your presentation. You said that waste mostly happens at home. Could you be more specific?" },
      { y: ["Dans les pays riches, une grande partie du gaspillage a lieu dans les foyers, mais les pertes commencent bien avant, dès la récolte.", "Dans les pays riches, une grande partie du gaspillage ont lieu dans les foyers, mais les pertes commencent bien avant, dès la récolte.", "Dans les pays riches, une grande partie de gaspillage a lieu dans les foyers, mais les pertes commencent bien avant, dès la récolte."], fr: "In rich countries, much of the waste happens in households, but losses start well before, at harvest.", why: "une partie du + singular noun: singular verb." },
      { p: "Et qui serait responsable, selon vous ?", fr: "And who would be responsible, in your view?" },
      { y: ["La responsabilité est partagée : les producteurs, la grande distribution et chacun d'entre nous ont un rôle à jouer.", "La responsabilité est partagée : les producteurs, la grande distribution et chacun d'entre nous a un rôle à jouer.", "La responsabilité est partagée : les producteurs, la grande distribution et chacun entre nous ont un rôle à jouer."], fr: "Responsibility is shared: producers, supermarket chains and each of us have a part to play.", why: "Several subjects together: plural verb; chacun d'entre nous." },
      { p: "Vous avez cité deux documents. Lequel vous a semblé le plus convaincant ?", fr: "You quoted two documents. Which one seemed more convincing to you?" },
      { y: ["Ils se complètent : le premier donne des chiffres mondiaux, tandis que le second, plus concret, montre ce que cela change pour une éleveuse.", "Ils se complètent : le premier donne des chiffres mondiaux, tandis que le second, plus concrète, montre ce que cela change pour une éleveuse.", "Ils se complètent : la première donne des chiffres mondiaux, tandis que la seconde, plus concrète, montre ce que cela change pour une éleveuse."], fr: "They complement each other: the first gives global figures, while the second, more concrete, shows what it changes for a farmer.", why: "un document (m): le premier, le second, concret." },
      { p: "En France, une loi de 2016 interdit déjà à la grande distribution de jeter des invendus encore consommables. Faut-il aller plus loin ?", fr: "In France, a 2016 law already bans supermarket chains from throwing away unsold food that's still edible. Should we go further?" },
      { y: ["La loi peut aider, mais je ne pense pas qu'elle suffise : il faut aussi changer nos habitudes.", "La loi peut aider, mais je ne pense pas qu'elle suffit : il faut aussi changer nos habitudes.", "La loi peut aider, mais je ne pense pas qu'elle suffira : il faut aussi changer nos habitudes."], fr: "The law can help, but I don't think it's enough: we also need to change our habits.", why: "ne pas penser que + subjunctive." },
      { p: "Merci. Pour terminer, que retiendriez-vous de ce débat ?", fr: "Thank you. To finish, what would you take away from this discussion?" },
      { y: ["Je retiendrais que nombre de solutions existent déjà ; ce qui manque, c'est leur mise en œuvre.", "Je retiendrais que nombre des solutions existent déjà ; ce qui manque, c'est leur mise en œuvre.", "Je retiendrais que nombre de solutions existe déjà ; ce qui manque, c'est leur mise en œuvre."], fr: "I'd take away that many solutions already exist; what's missing is putting them into practice.", why: "nombre de + noun without an article, plural verb." }
    ] }
  );

  W.READINGS.push({
    id: "huitmilliards", level: "C1", icon: "wheat", title: "Nourrir huit milliards d'humains", genre: "Article",
    intro: "Enough food is produced, yet hundreds of millions go hungry: produce more, waste less or eat differently? Quantifiers and cohesion.",
    intro_fr: "On produit assez, et pourtant des centaines de millions de personnes ont faim : produire plus, gaspiller moins ou manger autrement ? Les quantificateurs et la cohésion du texte.",
    paragraphs: [
      { en: "En novembre 2022, la population mondiale a franchi le cap des huit milliards d'habitants, selon les Nations unies. Nourrir une telle population constitue l'un des grands défis du siècle, d'autant plus que le changement climatique menace déjà nombre de récoltes.", fr: "In November 2022, the world population passed the eight billion mark, according to the United Nations. Feeding such a population is one of the great challenges of the century, all the more so since climate change is already threatening many harvests." },
      { en: "Le paradoxe est frappant : la planète produit assez pour nourrir tout le monde, et pourtant, selon l'ONU, plus de sept cents millions de personnes souffraient de la faim en 2023. Ce n'est donc pas seulement la quantité qui pose problème, mais l'accès à la nourriture, qui dépend des revenus, des conflits et des infrastructures.", fr: "The paradox is striking: the planet produces enough to feed everyone, and yet, according to the UN, more than seven hundred million people were going hungry in 2023. So it isn't only quantity that is the problem, but access to food, which depends on income, conflicts and infrastructure." },
      { en: "À cela s'ajoute le gaspillage. Des estimations de la FAO, l'organisation des Nations unies pour l'alimentation et l'agriculture, évaluent à près d'un tiers la part de la nourriture produite qui est perdue ou gaspillée. Dans les pays pauvres, la plupart des pertes ont lieu avant même que les aliments n'atteignent les marchés ; dans les pays riches, une grande partie du gaspillage se produit dans les foyers.", fr: "Add to this the waste. Estimates by the FAO, the United Nations food and agriculture organisation, put at nearly a third the share of food produced that is lost or wasted. In poor countries, most losses occur before food even reaches the markets; in rich countries, much of the waste happens in households." },
      { en: "Faut-il dès lors produire davantage, ou autrement ? Les uns misent sur l'innovation : semences plus résistantes, irrigation de précision. Les autres plaident pour une baisse de la consommation de viande, dont la production mobilise une large part des terres agricoles. Ces derniers rappellent qu'il faut plusieurs kilos de céréales pour produire un kilo de bœuf.", fr: "Should we then produce more, or differently? Some are betting on innovation: hardier seeds, precision irrigation. Others argue for eating less meat, whose production takes up a large share of farmland. The latter point out that it takes several kilos of grain to produce a kilo of beef." },
      { en: "Aucune solution ne suffira à elle seule. Mais nombre d'experts s'accordent sur un point : réduire les pertes, mieux partager et diversifier les régimes alimentaires sont des leviers au moins aussi puissants que l'augmentation de la production.", fr: "No single solution will be enough on its own. But many experts agree on one point: reducing losses, sharing better and diversifying diets are levers at least as powerful as increasing production." }
    ],
    glossary: { "franchi": "passed, crossed", "cap": "mark, milestone", "frappant": "striking", "revenus": "income", "infrastructures": "infrastructure", "estimations": "estimates", "évaluent": "put at, estimate", "atteignent": "reach", "misent": "bet (miser sur: to bet on)", "résistantes": "hardy, resistant", "plaident": "argue (plaider pour: to argue for)", "mobilise": "takes up, uses", "bœuf": "beef", "leviers": "levers", "diversifier": "to diversify" },
    questions: [
      { q: "Quand la population mondiale a-t-elle franchi le cap des huit milliards ?", o: ["En novembre 2022", "En 2012", "En 2050"], a: 0 },
      { q: "Selon l'article, quel est le principal problème de la faim dans le monde ?", o: ["L'accès à la nourriture plus que la quantité produite", "Le manque total de nourriture sur la planète", "Le prix des restaurants"], a: 0 },
      { q: "Quelle part de la nourriture serait perdue ou gaspillée selon la FAO ?", o: ["Près d'un tiers", "La moitié", "Un dixième"], a: 0 },
      { q: "Où a lieu une grande partie du gaspillage dans les pays riches ?", o: ["Dans les foyers", "Dans les champs", "Dans les ports"], a: 0 },
      { q: "Sur quoi nombre d'experts s'accordent-ils ?", o: ["Réduire les pertes, mieux partager et diversifier les régimes sont des leviers puissants.", "Il suffit d'augmenter la production.", "Il faut interdire la viande."], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-c1-9", unit: "c1-9", level: "C1", icon: "milk",
    title: "Reportage : une éleveuse dans le Jura", title_fr: "Reportage : une éleveuse dans le Jura",
    context: "Hugo, a radio reporter, visits Mélanie, a dairy farmer whose milk is used to make Comté cheese.", context_fr: "Hugo, reporter radio, rend visite à Mélanie, éleveuse de vaches laitières dont le lait sert à fabriquer du comté.",
    words: [["laitier", "dairy (adj.)"], ["le foin", "hay"], ["l'ensilage", "silage"], ["contraindre", "to constrain"], ["un choix de société", "a choice about the kind of society we want"]],
    lines: [["Hugo", "Nous sommes dans le Jura, chez Mélanie, éleveuse de vaches laitières. Mélanie, votre lait sert à fabriquer du comté. Qu'est-ce que cela implique ?", "fr-FR"], ["Mélanie", "Le comté bénéficie d'une appellation d'origine depuis 1958. Cela signifie un cahier des charges strict : nos vaches mangent de l'herbe et du foin, l'ensilage est interdit, et le lait doit être transformé près de la ferme. Ces règles nous contraignent, mais ce sont elles qui font la qualité du fromage.", "fr-FR"], ["Hugo", "Et pour vous, c'est rentable ?", "fr-FR"], ["Mélanie", "Plutôt, oui. Le lait destiné au comté est mieux payé que la plupart des laits standards. C'est d'ailleurs ce qui permet à nombre de petites exploitations de la région de tenir.", "fr-FR"], ["Hugo", "Vous vendez aussi en direct ?", "fr-FR"], ["Mélanie", "Un peu, au marché du samedi. Les clients aiment savoir d'où vient ce qu'ils mangent. Ce contact-là, aucune grande surface ne pourra le remplacer.", "fr-FR"], ["Hugo", "Que diriez-vous aux consommateurs des villes ?", "fr-FR"], ["Mélanie", "Qu'un produit de qualité a un prix, et que ce prix fait vivre des territoires entiers. Acheter local, ce n'est pas seulement une question de goût : c'est un choix de société.", "fr-FR"]],
    gist: ["De quoi parle le reportage ?", ["Du travail d'une éleveuse qui produit du lait pour le comté", "D'une usine de fromage industriel", "D'un restaurant parisien"]],
    detail: [["Depuis quand le comté bénéficie-t-il d'une appellation d'origine ?", ["Depuis 1958", "Depuis 2016", "Depuis 1925"]], ["Que mangent les vaches de Mélanie ?", ["De l'herbe et du foin", "De l'ensilage", "Des céréales importées"]], ["Pourquoi l'appellation aide-t-elle les petites exploitations ?", ["Le lait est mieux payé.", "Elles reçoivent des aides de l'État.", "Elles vendent à l'étranger."]], ["Que dit Mélanie aux consommateurs des villes ?", ["Un produit de qualité a un prix qui fait vivre des territoires.", "Il faut acheter moins cher.", "Il faut manger moins de fromage."]]],
    decode: ["ce sont elles qui font la qualité du fromage", "aucune grande surface ne pourra le remplacer"],
    tip: "Farmers and producers often explain a rule, then its cost, then its benefit: ces règles nous contraignent, mais… Listen for the mais: the speaker's real message usually comes after it.", tip_fr: "Les producteurs expliquent souvent une règle, puis son coût, puis son intérêt : ces règles nous contraignent, mais… Guette le mais : le vrai message vient en général juste après."
  }]);

  W.LEXIS = W.LEXIS || {};
  W.LEXIS["c1-9"] = {
    colloc: [
      ["nourrir la planète", "to feed the planet", "Peut-on nourrir la planète sans l'épuiser ?", "nourrir", ["manger", "remplir"]],
      ["réduire le gaspillage", "to cut waste", "La loi vise à réduire le gaspillage.", "réduire", ["rétrécir", "raccourcir"]],
      ["tirer un revenu de", "to earn an income from", "Elle tire un revenu correct de sa ferme.", "tire", ["sort", "arrache"]],
      ["rentrer les récoltes", "to bring in the harvest", "Il faut rentrer les récoltes avant l'orage.", "rentrer", ["entrer", "ramener"]],
      ["adopter un régime", "to go on a diet, to adopt a diet", "Il a adopté un régime végétarien.", "adopté", ["porté", "tenu"]],
      ["respecter un cahier des charges", "to comply with specifications", "Les producteurs doivent respecter un cahier des charges strict.", "respecter", ["garder", "tenir"]],
      ["manger sur le pouce", "to grab a quick bite", "À midi, il mange sur le pouce.", "pouce", ["doigt", "pied"]],
      ["valoriser les produits locaux", "to promote local produce", "La région veut valoriser les produits locaux.", "valoriser", ["valider", "évaluer"]],
      ["lutter contre la faim", "to fight hunger", "L'association lutte contre la faim depuis trente ans.", "lutte", ["bat", "frappe"]],
      ["subir une sécheresse", "to suffer a drought", "La région a subi une sécheresse sévère.", "subi", ["souffert", "porté"]]
    ],
    wf: [
      ["L'___ intensive épuise les sols. (AGRICOLE)", "agriculture"],
      ["Le ___ du blé a baissé cette année. (RENDRE)", "rendement"],
      ["Les petits ___ ont du mal à vivre de leur travail. (PRODUIRE)", "producteurs"],
      ["La ___ des aliments permet de savoir d'où ils viennent. (TRACER)", "traçabilité"],
      ["Ces fruits sont encore ___ : ne les jetez pas. (CONSOMMER)", "consommables"],
      ["Une ___ équilibrée est essentielle à la santé. (ALIMENTER)", "alimentation"],
      ["La ___ touche encore des millions d'enfants. (NUTRITION)", "malnutrition"],
      ["Le lait est un produit ___ : il faut le vendre vite. (PÉRIR)", "périssable"]
    ],
    kwt: [
      ["Presque tous les clients étaient satisfaits.", "PLUPART", "___ étaient satisfaits.", "La plupart des clients"],
      ["Beaucoup d'agriculteurs ont manifesté.", "NOMBRE", "___ ont manifesté.", "Nombre d'agriculteurs|Bon nombre d'agriculteurs"],
      ["Pas un seul producteur n'a répondu.", "AUCUN", "___ n'a répondu.", "Aucun producteur"],
      ["J'ai vu Paul et Marie ; Marie m'a parlé de son projet.", "DERNIÈRE", "J'ai vu Paul et Marie ; ___ m'a parlé de son projet.", "cette dernière"],
      ["Les prix ont doublé, ce qui inquiète les familles.", "PHÉNOMÈNE", "Les prix ont doublé ; ___ les familles.", "ce phénomène inquiète"],
      ["Il s'agit d'un article publié en 2023.", "PARU", "Il s'agit d'un article ___.", "paru en 2023"]
    ],
    idioms: [
      ["mettre du beurre dans les épinards", "améliorer sa situation financière", "to make ends meet more comfortably", "Ce petit travail du soir met du beurre dans les épinards.", "met du beurre dans les épinards"],
      ["avoir un appétit d'oiseau", "manger très peu", "to eat like a bird", "Elle a un appétit d'oiseau.", "un appétit d'oiseau"],
      ["c'est la fin des haricots", "c'est la catastrophe, tout est perdu", "it's the end of the road", "Si même la boulangerie ferme, c'est la fin des haricots !", "c'est la fin des haricots"],
      ["ramener sa fraise", "intervenir sans y être invité", "to butt in", "Il faut toujours qu'il ramène sa fraise.", "ramène sa fraise"],
      ["en faire tout un fromage", "exagérer l'importance d'une chose", "to make a mountain out of a molehill", "Ce n'est qu'un retard, inutile d'en faire tout un fromage.", "en faire tout un fromage"],
      ["avoir la pêche", "être en pleine forme", "to be full of beans", "Ce matin, j'ai la pêche !", "j'ai la pêche"],
      ["tomber dans les pommes", "s'évanouir", "to pass out", "Avec cette chaleur, il est tombé dans les pommes.", "tombé dans les pommes"],
      ["raconter des salades", "raconter des mensonges", "to tell tall stories", "Arrête de me raconter des salades !", "raconter des salades"]
    ]
  };

  W.PROMPTS.push({ id: "fr-c1-9", level: "C1", q: "Ta façon de manger a-t-elle changé ces dernières années ? Pourquoi ?", fr: "Has the way you eat changed in recent years? Why?", time: 180,
    phrases: ["la plupart de…", "d'autant plus que…", "non que…", "nombre de…", "ce changement…"],
    model: "Oui, assez nettement. Il y a quelques années, la plupart de mes repas étaient pris sur le pouce, souvent des plats tout prêts. Aujourd'hui, je cuisine davantage, d'autant plus que j'ai découvert un marché près de chez moi. Je mange aussi moins de viande : non que j'y aie renoncé, mais je la réserve aux bons moments. Nombre de mes amis ont fait le même choix. Ce changement m'a appris une chose : bien manger demande un peu de temps, mais ce temps-là n'est jamais perdu." });

  W.WRITING_GUIDE["c1-9"] = { genre: "A synthesis of documents (DALF C1)", genre_fr: "Une synthèse de documents (DALF C1)",
    plan: [["Give a title that sums up the question.", "Donne un titre qui résume la question."], ["Introduction: present the documents and the question.", "Introduction : présente les documents et la question."], ["The global view of the first document.", "Le point de vue global du premier document."], ["The local view of the second document.", "Le point de vue local du second document."], ["What they share, then a neutral conclusion.", "Ce qu'ils ont en commun, puis une conclusion neutre."]],
    marks: [["Les deux documents, un article consacré", "presenting the documents", "présenter les documents"], ["Selon l'auteur", "reporting a view", "rapporter un point de vue"], ["qui toucherait près d'un tiers", "conditional: keeping a distance from a figure", "conditionnel : prendre ses distances avec un chiffre"], ["quant à elle", "the second view", "le second point de vue"], ["Les deux documents se rejoignent", "a point of agreement", "un point d'accord"], ["En définitive", "conclusion", "la conclusion"]] };

  W.COURSE.push({ id: "c1-9", level: "C1", icon: "wheat", title: "Feeding the world", title_fr: "Nourrir le monde",
    intro: "In this unit, you'll talk about food, farming and hunger: quantifiers and verb agreement (la plupart des, nombre de, plus d'un), cohesion in a text (ce dernier, le second, ce phénomène) and the DALF C1 oral presentation.",
    intro_fr: "Dans cette unité, tu vas parler d'alimentation, d'agriculture et de faim : les quantificateurs et l'accord du verbe (la plupart des, nombre de, plus d'un), la cohésion du texte (ce dernier, le second, ce phénomène) et l'exposé oral du DALF C1.",
    can: ["Make the verb agree after quantifiers", "Refer back without repeating yourself", "Discuss food security, farming and waste", "Give a structured presentation from documents, as in the DALF C1", "Write a synthesis of two documents"],
    can_fr: ["Accorder le verbe après les quantificateurs", "Reprendre une idée sans te répéter", "Débattre de sécurité alimentaire, d'agriculture et de gaspillage", "Faire un exposé structuré à partir de documents, comme au DALF C1", "Rédiger la synthèse de deux documents"],
    lessons: [129, 130, 131], vocab: ["agricultureFR", "alimentationFR"], reading: "huitmilliards", prompt: "fr-c1-9",
    writing: { task: "Write a synthesis (220-240 words) of this unit's two documents: the article on feeding eight billion people and the report on a dairy farmer in the Jura. Give a title and no personal opinion.", task_fr: "Rédige une synthèse (220 à 240 mots) des deux documents de cette unité : l'article sur l'alimentation de huit milliards d'humains et le reportage sur une éleveuse du Jura. Donne un titre, sans opinion personnelle.", words: "220-240",
      tips: ["Les deux documents s'interrogent sur…", "Selon l'auteur, …", "… quant à elle, …", "Les deux documents se rejoignent sur…", "En définitive, …"],
      checklist: ["I gave a title", "My introduction presents both documents and a question", "I compared the documents rather than summarising them one by one", "I copied no whole sentence", "There is no personal opinion", "I wrote between 220 and 240 words"],
      model: "Nourrir sans gaspiller : quantité ou qualité ?\n\nLes deux documents, un article consacré à l'alimentation mondiale et le reportage sur une éleveuse jurassienne, s'interrogent sur la manière de mieux nourrir les populations. Faut-il produire davantage, ou produire autrement ?\n\nL'article rappelle d'abord l'ampleur du défi : la population mondiale a dépassé huit milliards d'habitants, et des centaines de millions de personnes souffrent encore de la faim. Selon l'auteur, le problème tient moins à la quantité produite qu'à l'accès à la nourriture et au gaspillage, qui toucherait près d'un tiers de la production. Il souligne en outre que le changement climatique menace déjà nombre de récoltes.\n\nL'éleveuse, quant à elle, adopte un point de vue local. Elle souligne que des règles de production exigeantes, comme celles du comté, garantissent la qualité et permettent à de petites exploitations de vivre grâce à un lait mieux payé. Elle insiste également sur le lien direct avec les clients, qu'aucune grande surface ne saurait remplacer.\n\nLes deux documents se rejoignent sur le rôle des consommateurs. Si l'article invite à réduire la consommation de viande et les pertes, le reportage insiste sur le sens de l'achat local, présenté comme un choix de société. Tous deux laissent entendre qu'aucune solution unique ne suffira.\n\nEn définitive, ces documents montrent que nourrir la planète suppose à la fois de mieux répartir les ressources, de moins gaspiller et de rémunérer justement ceux qui produisent." } });
})();
