/* Cours de français, unité C1-8 « Philosophy and happiness / Philosophie et bonheur » : l'article avec les noms
   abstraits (le bonheur, du courage, avec patience, faire preuve de), la comparaison avancée (d'autant plus que,
   plus… plus, non que, comme si), débattre d'une question abstraite. Personnages fictifs, prénoms français. Faits
   vérifiables seulement : Épicure et l'absence de troubles ; Épictète, ce qui dépend de nous et les jugements que nous
   portons sur les choses (Manuel) ; Pascal, Pensées (« Tout le malheur des hommes… ») ; World Happiness Report publié
   depuis 2012, Finlande en tête depuis plusieurs années, mesure de la satisfaction de vie ; la psychologie positive,
   née à la fin des années 1990 ; Voltaire, Candide (« il faut cultiver notre jardin ») ; Paul Fort, Le bonheur. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "philoFR", icon: "lamp", title: "Philosophy", title_fr: "La philosophie", level: "C1", words: [
    ["le bonheur", "happiness", "Le bonheur ne s'achète pas."],
    ["la sagesse", "wisdom", "La sagesse vient parfois avec l'âge."],
    ["le plaisir", "pleasure", "Il lit pour le plaisir."],
    ["le désir", "desire", "Le désir est le moteur de l'action."],
    ["la liberté", "freedom", "La liberté s'arrête là où commence celle des autres."],
    ["la morale", "morality, ethics; the moral (of a story)", "La morale de cette fable est claire."],
    ["la vertu", "virtue", "Pour Aristote, la vertu est un juste milieu."],
    ["la conscience", "consciousness; conscience", "Il a agi selon sa conscience."],
    ["l'âme", "the soul", "Cette musique me touche l'âme."],
    ["la raison", "reason (avoir raison: to be right)", "La raison ne suffit pas toujours à nous guider."],
    ["le sens de la vie", "the meaning of life", "Il s'interroge sur le sens de la vie."],
    ["l'existence", "existence", "Son existence a été bouleversée par ce voyage."],
    ["le libre arbitre", "free will", "Le libre arbitre suppose que nous puissions choisir."],
    ["la vérité", "the truth", "La vérité finit toujours par se savoir."],
    ["la croyance", "the belief", "Les croyances varient d'une culture à l'autre."],
    ["le raisonnement", "reasoning", "Son raisonnement est solide."],
    ["le philosophe / la philosophe", "the philosopher (m) / (f)", "Cette philosophe a écrit sur la fragilité."],
    ["méditer", "to meditate, to ponder", "Il médite chaque matin dix minutes."]
  ] },
  { id: "bonheurFR", icon: "sun", title: "Happiness and the good life", title_fr: "Bonheur et vie bonne", level: "C1", words: [
    ["la joie", "joy", "Elle a appris la nouvelle avec joie."],
    ["le malheur", "misfortune, unhappiness", "Le malheur des uns fait le bonheur des autres."],
    ["l'ennui", "boredom (des ennuis: trouble)", "L'ennui peut être fécond."],
    ["la solitude", "solitude, loneliness", "Il aime la solitude des longues marches."],
    ["la souffrance", "suffering", "Le médecin cherche à soulager la souffrance."],
    ["la sérénité", "serenity, peace of mind", "Il aborde l'avenir avec sérénité."],
    ["l'épanouissement", "fulfilment, personal growth", "Le travail peut être une source d'épanouissement."],
    ["la quête", "the quest", "La quête du bonheur occupe toute une vie."],
    ["la gratitude", "gratitude", "Elle lui a exprimé sa gratitude."],
    ["la frugalité", "frugality", "Ils ont choisi la frugalité par conviction."],
    ["aspirer à", "to aspire to", "Tout le monde aspire à une vie plus calme."],
    ["se contenter de", "to make do with, to be content with", "Il se contente de peu."],
    ["l'altruisme", "altruism", "L'altruisme rend souvent plus heureux que l'égoïsme."],
    ["l'égoïsme", "selfishness", "L'égoïsme finit par isoler."],
    ["la passion", "passion", "La musique est sa passion."],
    ["le doute", "doubt", "Le doute est le début de la réflexion."],
    ["la plénitude", "fullness, fulfilment", "Elle a ressenti une plénitude rare."],
    ["savourer", "to savour", "Il faut savoir savourer les petits moments."]
  ] });

  W.LESSONS.push(
  {
    id: 126, level: "C1", icon: "quote",
    title: "Le bonheur, du courage, avec patience: articles with abstract nouns", title_fr: "Le bonheur, du courage, avec patience : l'article et les noms abstraits",
    subtitle: "Definite, partitive or no article at all: abstract nouns follow precise rules.", subtitle_fr: "Article défini, partitif ou pas d'article du tout : les noms abstraits obéissent à des règles précises.",
    body: `
<h2>The general idea: the definite article</h2>
<p>Where English has no article, French uses <s-fr>le</s-fr>, <s-fr>la</s-fr>, <s-fr>les</s-fr> for a concept in general: <s-fr>Le bonheur ne s'achète pas.</s-fr> · <s-fr>La liberté a un prix.</s-fr></p>
<h2>An unspecified amount of a quality: the partitive</h2>
<p><s-fr>Il faut du courage.</s-fr> · <s-fr>Elle a de la patience.</s-fr> · <s-fr>Il trouve de la sérénité dans la marche.</s-fr> After a negation: <s-fr>Il n'a pas de patience.</s-fr></p>
<h2>No article</h2>
<p>After <s-fr>avec</s-fr> or <s-fr>sans</s-fr> + a noun used like an adverb: <s-fr>avec patience</s-fr>, <s-fr>sans peine</s-fr>, <s-fr>avec plaisir</s-fr>. But with an adjective, the article comes back: <s-fr>avec une patience infinie</s-fr>.</p>
<p>In fixed expressions: <s-fr>avoir peur</s-fr>, <s-fr>avoir besoin de</s-fr>, <s-fr>faire preuve de courage</s-fr>, <s-fr>prendre conscience de</s-fr>, <s-fr>rendre justice</s-fr>, <s-fr>lâcher prise</s-fr> · After <s-fr>en</s-fr>: <s-fr>en paix</s-fr>, <s-fr>en colère</s-fr> · In proverbs and lists: <s-fr>Patience et longueur de temps font plus que force ni que rage</s-fr> (La Fontaine).</p>
<div class="tip">Compare: <s-fr>J'ai besoin de patience</s-fr> (no article after avoir besoin de + a general quality) / <s-fr>J'ai besoin de la patience dont tu as fait preuve</s-fr> (a specific patience: the article returns). When a noun becomes specific, it takes an article again.</div>
`,
    examples: [
      ["Le bonheur ne s'achète pas.", "Happiness can't be bought."],
      ["Il faut du courage pour dire non.", "It takes courage to say no."],
      ["Elle a répondu avec patience.", "She answered patiently."],
      ["Elle a répondu avec une patience infinie.", "She answered with infinite patience."],
      ["Il a fait preuve de sang-froid.", "He showed composure."],
      ["Nous avons pris conscience du problème.", "We became aware of the problem."],
      ["Il n'a pas de patience avec les enfants.", "He has no patience with children."],
      ["Ils vivent en paix depuis des années.", "They have lived in peace for years."]
    ],
    quiz: [
      { q: "“Freedom has a price” is:", o: ["La liberté a un prix.", "Liberté a un prix.", "Une liberté a un prix."], a: 0, ex: "A concept in general: definite article." },
      { q: "“It takes patience” is:", o: ["Il faut de la patience.", "Il faut la patience.", "Il faut patience."], a: 0, ex: "An unspecified amount of a quality: partitive." },
      { q: "“With pleasure” is:", o: ["avec plaisir", "avec le plaisir", "avec du plaisir"], a: 0, ex: "avec + noun used like an adverb: no article." },
      { q: "“With great courage” is:", o: ["avec un grand courage", "avec grand courage", "avec du grand courage"], a: 0, ex: "With an adjective, the article returns." },
      { q: "“She showed wisdom” is:", o: ["Elle a fait preuve de sagesse.", "Elle a fait preuve de la sagesse.", "Elle a fait la preuve de sagesse."], a: 0, ex: "faire preuve de + noun, no article." }
    ]
  },
  {
    id: 127, level: "C1", icon: "scale",
    title: "D'autant plus que, plus… plus, non que: advanced comparison", title_fr: "D'autant plus que, plus… plus, non que : la comparaison avancée",
    subtitle: "Compare, link two changes, reject a reason and imagine, with precision.", subtitle_fr: "Comparer, lier deux évolutions, écarter une raison et imaginer, avec précision.",
    body: `
<h2>Two changes linked</h2>
<p><s-fr>plus… plus</s-fr>, <s-fr>moins… moins</s-fr>, <s-fr>plus… moins</s-fr>, without <s-fr>le</s-fr>: <s-fr>Plus on s'attache aux choses, plus on souffre de les perdre.</s-fr> · <s-fr>autant… autant</s-fr> (as much… as): <s-fr>Autant il est drôle en privé, autant il est timide en public.</s-fr></p>
<h2>All the more since</h2>
<p><s-fr>d'autant plus que</s-fr> / <s-fr>d'autant moins que</s-fr>: <s-fr>Je l'admire d'autant plus qu'il ne se plaint jamais.</s-fr> · <s-fr>d'autant plus</s-fr> + adjective + <s-fr>que</s-fr>: <s-fr>C'est d'autant plus difficile que personne ne nous aide.</s-fr></p>
<h2>Rejecting a reason</h2>
<p><s-fr>non que</s-fr> / <s-fr>non pas que</s-fr> + subjunctive (not that): <s-fr>Je reste, non que j'aie peur de partir, mais j'aime cet endroit.</s-fr></p>
<h2>Imagining and comparing</h2>
<p><s-fr>comme si</s-fr> + imparfait or plus-que-parfait: <s-fr>Il parle comme s'il savait tout.</s-fr> · <s-fr>à l'image de</s-fr> (like, in the image of) · <s-fr>au même titre que</s-fr> (just as, on the same footing as) · <s-fr>tel que</s-fr> (such as) · Irregular comparatives: <s-fr>meilleur</s-fr>, <s-fr>mieux</s-fr>, <s-fr>pire</s-fr>, <s-fr>moindre</s-fr> (lesser, least): <s-fr>le moindre doute</s-fr>.</p>
<div class="tip">In plus… plus, never add le: <s-fr>Plus je lis, plus j'apprends</s-fr>, not <s-fr>le plus je lis</s-fr>. And after comme si, never the conditional: <s-fr>comme s'il était</s-fr>, not <s-fr>comme s'il serait</s-fr>.</div>
`,
    examples: [
      ["Plus on s'attache aux choses, plus on souffre de les perdre.", "The more we cling to things, the more we suffer when we lose them."],
      ["Moins il travaille, moins il a envie de travailler.", "The less he works, the less he wants to work."],
      ["Autant il est drôle en privé, autant il est timide en public.", "He's as shy in public as he is funny in private."],
      ["Je l'admire d'autant plus qu'il ne se plaint jamais.", "I admire him all the more since he never complains."],
      ["C'est d'autant plus difficile que personne ne nous aide.", "It's all the more difficult since nobody is helping us."],
      ["Je reste, non que j'aie peur de partir, mais j'aime cet endroit.", "I'm staying, not that I'm afraid to leave, but I like this place."],
      ["Il parle comme s'il savait tout.", "He talks as if he knew everything."],
      ["Au moindre doute, demandez conseil.", "At the slightest doubt, ask for advice."]
    ],
    quiz: [
      { q: "“The more I read, the more I learn” is:", o: ["Plus je lis, plus j'apprends.", "Le plus je lis, le plus j'apprends.", "Plus je lis, j'apprends plus."], a: 0, ex: "plus… plus, without le." },
      { q: "“All the more since” is:", o: ["d'autant plus que", "autant plus que", "d'autant que plus"], a: 0, ex: "d'autant plus que." },
      { q: "“Not that he's wrong” is:", o: ["Non qu'il ait tort", "Non qu'il a tort", "Non pas qu'il aura tort"], a: 0, ex: "non que + subjunctive." },
      { q: "“As if she knew” is:", o: ["comme si elle savait", "comme si elle saurait", "comme si elle sache"], a: 0, ex: "comme si + imparfait." },
      { q: "“The slightest problem” is:", o: ["le moindre problème", "le plus moindre problème", "le moins problème"], a: 0, ex: "moindre = the least, the slightest." }
    ]
  },
  {
    id: 128, level: "C1", kind: "functional", icon: "messages-square",
    title: "Everyday French: debating an abstract question", title_fr: "Le français de tous les jours : débattre d'une question abstraite",
    subtitle: "Define the terms, raise the problem, distinguish and nuance, as in the French tradition.", subtitle_fr: "Définir les termes, poser le problème, distinguer et nuancer, comme dans la tradition française.",
    body: `
<h2>Defining the terms</h2>
<p><s-fr>Qu'entend-on par… ?</s-fr> · <s-fr>Il convient d'abord de définir…</s-fr> · <s-fr>Au sens strict</s-fr> / <s-fr>au sens large</s-fr> · <s-fr>Par bonheur, on entend généralement…</s-fr></p>
<h2>Raising the problem</h2>
<p><s-fr>Toute la question est de savoir si…</s-fr> · <s-fr>Cela revient à se demander si…</s-fr> · <s-fr>Le paradoxe, c'est que…</s-fr></p>
<h2>Distinguishing</h2>
<p><s-fr>Il convient de distinguer A de B.</s-fr> · <s-fr>Il ne faut pas confondre A et B.</s-fr> · <s-fr>Si A…, B, en revanche,…</s-fr></p>
<h2>Nuancing</h2>
<p><s-fr>Tout dépend de ce qu'on entend par…</s-fr> · <s-fr>dans une certaine mesure</s-fr> · <s-fr>Ce n'est vrai qu'en partie.</s-fr></p>
<h2>Concluding</h2>
<p><s-fr>En somme, …</s-fr> · <s-fr>Au fond, …</s-fr> · <s-fr>On peut donc dire que…</s-fr></p>
<div class="tip">In the French tradition (the philosophy exam at the end of school, the DALF oral), a good answer starts by questioning the question: define the words, show why it is a problem, then answer step by step. Jumping straight to your opinion is the classic mistake.</div>
`,
    examples: [
      ["Qu'entend-on par réussir sa vie ?", "What do we mean by making a success of one's life?"],
      ["Toute la question est de savoir si le bonheur dépend de nous.", "The whole question is whether happiness depends on us."],
      ["Il convient de distinguer le plaisir de la joie.", "We need to distinguish pleasure from joy."],
      ["Il ne faut pas confondre solitude et isolement.", "Solitude and isolation should not be confused."],
      ["Tout dépend de ce qu'on entend par liberté.", "It all depends on what we mean by freedom."],
      ["En somme, la réponse est moins simple qu'il n'y paraît.", "In short, the answer is less simple than it seems."]
    ],
    quiz: [
      { q: "“What do we mean by…?” is:", o: ["Qu'entend-on par… ?", "Qu'entend-on de… ?", "Que veut-on par… ?"], a: 0, ex: "entendre par = to mean by." },
      { q: "“To distinguish A from B” is:", o: ["distinguer A de B", "distinguer A avec B", "distinguer A à B"], a: 0, ex: "distinguer… de…" },
      { q: "“It all depends on what we mean” is:", o: ["Tout dépend de ce qu'on entend.", "Tout dépend ce qu'on entend.", "Tout dépend de qu'on entend."], a: 0, ex: "dépendre de ce que." },
      { q: "In the French tradition, a good answer begins by:", o: ["defining the terms and raising the problem", "giving your opinion at once", "telling an anecdote"], a: 0, ex: "Question the question first." },
      { q: "“The whole question is whether…” is:", o: ["Toute la question est de savoir si…", "Toute la question est de savoir que…", "Toute question est savoir si…"], a: 0, ex: "Toute la question est de savoir si." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    126: {
      gap: [["Il faut ___ courage pour dire non. (partitive)", "du"], ["Elle a répondu avec ___ patience infinie. (article)", "une"], ["Il a fait preuve ___ sang-froid. (preposition)", "de"], ["___ bonheur ne s'achète pas. (article)", "Le"]],
      fix: [["Il a répondu avec une patience.", "Il a répondu avec patience.|Il a répondu avec une grande patience.", "avec + a noun alone: no article; the article returns with an adjective."], ["Il n'a pas du courage.", "Il n'a pas de courage.", "After a negation, du becomes de."]],
      task: ["Describe someone you admire, with a general concept (le, la), a partitive (du, de la), avec + a noun without an article, and faire preuve de.", "Décris une personne que tu admires, avec un concept général (le, la), un partitif (du, de la), avec + un nom sans article, et faire preuve de.", "J'admire ma grand-mère, pour qui la générosité n'a jamais été un vain mot. Il lui a fallu du courage pour élever seule quatre enfants. Elle écoutait toujours avec patience, et jamais avec mépris. Dans les moments difficiles, elle a fait preuve d'un sang-froid remarquable."]
    },
    127: {
      gap: [["___ on s'attache aux choses, plus on souffre de les perdre. (the more)", "Plus"], ["Je l'admire d'___ plus qu'il ne se plaint jamais. (all the more)", "autant"], ["Je reste, non que j'___ peur de partir. (avoir, subjunctive)", "aie"], ["Il parle comme s'il ___ tout. (savoir, imparfait)", "savait"]],
      fix: [["Le plus je lis, le plus j'apprends.", "Plus je lis, plus j'apprends.", "plus… plus, without le."], ["Il agit comme s'il serait le chef.", "Il agit comme s'il était le chef.", "comme si + imparfait, never the conditional."]],
      task: ["Write four sentences about money and happiness, with plus… plus, d'autant plus que, non que and comme si.", "Écris quatre phrases sur l'argent et le bonheur, avec plus… plus, d'autant plus que, non que et comme si.", "Plus on gagne d'argent, plus on a tendance à en vouloir davantage. Ce piège est d'autant plus sournois qu'on ne le voit pas venir. Non que l'argent soit inutile : il libère de bien des soucis. Mais certains vivent comme si leur valeur dépendait de leur salaire."]
    },
    128: {
      gap: [["Qu'___-on par réussir sa vie ? (entendre)", "entend"], ["Il convient de distinguer le plaisir ___ la joie. (from)", "de"], ["Toute la question est de ___ si le bonheur dépend de nous. (know)", "savoir"], ["Tout dépend de ce qu'on ___ par liberté. (entendre)", "entend"]],
      fix: [["Il convient de distinguer la solitude avec l'isolement.", "Il convient de distinguer la solitude de l'isolement.", "distinguer A de B."], ["Tout dépend ce qu'on entend par liberté.", "Tout dépend de ce qu'on entend par liberté.", "dépendre de ce que."]],
      task: ["Introduce the question Le travail rend-il libre ? in three sentences: define a term, raise the problem and announce your approach.", "Introduis la question Le travail rend-il libre ? en trois phrases : définis un terme, pose le problème et annonce ta démarche.", "Qu'entend-on par travail ? Au sens large, toute activité par laquelle on transforme le monde ; au sens strict, une activité rémunérée. Toute la question est de savoir si cette activité nous libère, en nous rendant autonomes, ou si elle nous asservit, en nous imposant des contraintes. Il conviendra donc de distinguer le travail choisi du travail subi."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "cafephilo", lesson: 128, level: "C1", icon: "coffee", partner: "Bernard", role: "the host of a philosophy café",
    title: "A philosophy café", title_fr: "Le café philo",
    setting: "Once a month, a café in your town hosts a philosophy evening. Tonight's question: can you be happy alone? Bernard, the host, invites people to speak.", setting_fr: "Une fois par mois, un café de ta ville organise une soirée philo. La question du soir : peut-on être heureux seul ? Bernard, l'animateur, donne la parole au public.",
    turns: [
      { p: "Bienvenue au café philo ! Ce soir : peut-on être heureux seul ? Qui veut lancer la discussion ?", fr: "Welcome to the philosophy café! Tonight: can you be happy alone? Who wants to start the discussion?" },
      { y: ["Je veux bien. Avant tout, il faudrait définir les termes : qu'entend-on par seul ?", "Je veux bien. Avant tout, il faudrait définir les termes : qu'entend-on de seul ?", "Je veux bien. Avant tout, il faudrait définir les termes : qu'entendons on par seul ?"], fr: "I'll start. First of all, we should define the terms: what do we mean by alone?", why: "entendre par = to mean by; inversion: entend-on." },
      { p: "Excellente question. Qu'en pensez-vous ?", fr: "Excellent question. What do you think?" },
      { y: ["Il convient de distinguer la solitude choisie de l'isolement subi : ce n'est pas du tout la même expérience.", "Il convient de distinguer la solitude choisie avec l'isolement subi : ce n'est pas du tout la même expérience.", "Il convient à distinguer la solitude choisie de l'isolement subi : ce n'est pas du tout la même expérience."], fr: "We should distinguish chosen solitude from isolation that's imposed on you: they're completely different experiences.", why: "il convient de; distinguer A de B." },
      { p: "D'accord. Alors, peut-on être heureux en étant seul ?", fr: "OK. So, can you be happy when you're alone?" },
      { y: ["Tout dépend de ce qu'on appelle bonheur. Si c'est la sérénité, la solitude peut y aider ; si c'est la joie partagée, beaucoup moins.", "Tout dépend de qu'on appelle bonheur. Si c'est la sérénité, la solitude peut y aider ; si c'est la joie partagée, beaucoup moins.", "Tout dépend ce qu'on appelle bonheur. Si c'est la sérénité, la solitude peut y aider ; si c'est la joie partagée, beaucoup moins."], fr: "It all depends on what we call happiness. If it's serenity, solitude can help; if it's shared joy, much less so.", why: "dépendre de ce que." },
      { p: "Quelqu'un disait tout à l'heure que les autres nous rendent toujours plus heureux…", fr: "Someone said earlier that other people always make us happier…" },
      { y: ["Je nuancerais : plus on dépend des autres pour être heureux, plus on est fragile quand ils s'éloignent.", "Je nuancerais : le plus on dépend des autres pour être heureux, le plus on est fragile quand ils s'éloignent.", "Je nuancerais : plus on dépend des autres pour être heureux, on est plus fragile quand ils s'éloignent."], fr: "I'd qualify that: the more we depend on others to be happy, the more fragile we are when they move away.", why: "plus… plus, without le, with the same structure in both halves." },
      { p: "Pour conclure, quelle serait votre réponse ?", fr: "To conclude, what would your answer be?" },
      { y: ["En somme, on peut être heureux seul, non que les autres soient inutiles, mais parce que le bonheur commence par la paix avec soi-même.", "En somme, on peut être heureux seul, non que les autres sont inutiles, mais parce que le bonheur commence par la paix avec soi-même.", "En somme, on peut être heureux seul, non pas parce que les autres soient inutiles, mais parce que le bonheur commence par la paix avec soi-même."], fr: "In short, you can be happy alone, not that other people are useless, but because happiness begins with being at peace with yourself.", why: "non que + subjunctive." }
    ] }
  );

  W.READINGS.push({
    id: "apprendrebonheur", level: "C1", icon: "sun", title: "Peut-on apprendre à être heureux ?", genre: "Article",
    intro: "From Epicurus to the World Happiness Report: two thousand years of thinking about happiness. Articles with abstract nouns and advanced comparison.",
    intro_fr: "D'Épicure au World Happiness Report : deux mille ans de réflexion sur le bonheur. L'article avec les noms abstraits et la comparaison avancée.",
    paragraphs: [
      { en: "Depuis l'Antiquité, les philosophes se demandent ce qu'est le bonheur et s'il peut s'apprendre. Pour Épicure, il réside moins dans l'accumulation des plaisirs que dans l'absence de troubles : un corps sans douleur, une âme sans inquiétude.", fr: "Since Antiquity, philosophers have wondered what happiness is and whether it can be learnt. For Epicurus, it lies less in piling up pleasures than in the absence of disturbance: a body without pain, a soul without worry." },
      { en: "Les stoïciens proposent une autre voie. Épictète invite à distinguer ce qui dépend de nous, nos jugements et nos actions, de ce qui n'en dépend pas, comme la santé, la réputation ou la fortune. Plus on s'attache à ce qu'on ne maîtrise pas, plus on s'expose à la souffrance.", fr: "The Stoics offer another path. Epictetus invites us to distinguish what depends on us, our judgements and our actions, from what does not, such as health, reputation or wealth. The more we cling to what we don't control, the more we expose ourselves to suffering." },
      { en: "Des siècles plus tard, Pascal observe que les hommes fuient l'ennui dans le divertissement, d'autant plus qu'ils supportent mal de rester seuls face à eux-mêmes. Tout le malheur des hommes vient d'une seule chose, qui est de ne savoir pas demeurer en repos dans une chambre, écrit-il dans les Pensées.", fr: "Centuries later, Pascal observes that people flee boredom through distraction, all the more since they can hardly bear to be alone with themselves. All of humanity's unhappiness comes from one single thing, not knowing how to stay quietly in a room, he writes in the Pensées." },
      { en: "Aujourd'hui, le bonheur se mesure aussi. Depuis 2012, le World Happiness Report classe chaque année les pays selon le bien-être déclaré de leurs habitants, et la Finlande y occupe la première place depuis plusieurs années. Non que les Finlandais soient plus joyeux que les autres : ils se disent surtout satisfaits de leur vie, ce qui n'est pas tout à fait la même chose.", fr: "Today, happiness is also measured. Since 2012, the World Happiness Report has ranked countries every year by the well-being their inhabitants report, and Finland has been in first place for several years. Not that Finns are more cheerful than others: above all, they say they are satisfied with their lives, which is not quite the same thing." },
      { en: "Peut-on, dès lors, apprendre à être heureux ? Les philosophes anciens répondraient sans doute que la sagesse est un exercice plus qu'un savoir. Le bonheur ne s'enseigne pas comme une formule ; il se cultive, avec patience, à la manière d'un jardin.", fr: "Can we, then, learn to be happy? The ancient philosophers would probably answer that wisdom is a practice rather than a body of knowledge. Happiness isn't taught like a formula; it's cultivated, patiently, like a garden." }
    ],
    glossary: { "Antiquité": "Antiquity", "réside": "lies", "accumulation": "piling up", "troubles": "disturbances, troubles", "douleur": "pain", "stoïciens": "Stoics", "jugements": "judgements", "fortune": "wealth; luck", "attache": "s'attacher à: to cling to", "fuient": "flee", "divertissement": "distraction, diversion", "demeurer": "to remain, to stay", "déclaré": "reported, stated", "joyeux": "cheerful", "satisfaits": "satisfied" },
    questions: [
      { q: "Selon Épicure, où réside le bonheur ?", o: ["Dans l'absence de troubles", "Dans l'accumulation des plaisirs", "Dans la richesse"], a: 0 },
      { q: "Qu'invite à distinguer Épictète ?", o: ["Ce qui dépend de nous et ce qui n'en dépend pas", "Le plaisir et la douleur", "Les riches et les pauvres"], a: 0 },
      { q: "D'après Pascal, que fuient les hommes dans le divertissement ?", o: ["L'ennui", "Le travail", "La foule"], a: 0 },
      { q: "Que mesure surtout le World Happiness Report, selon l'article ?", o: ["La satisfaction des habitants à l'égard de leur vie", "Le nombre de sourires", "La richesse des pays"], a: 0 },
      { q: "Selon l'auteur, comment le bonheur s'acquiert-il ?", o: ["Il se cultive avec patience, comme un jardin.", "Il s'enseigne comme une formule.", "Il s'achète."], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-c1-8", unit: "c1-8", level: "C1", icon: "radio",
    title: "Le bonheur est-il un devoir ?", title_fr: "Le bonheur est-il un devoir ?",
    context: "On a radio programme, Arnaud asks Sylvie, a philosophy teacher, about the happiness industry.", context_fr: "Dans une émission de radio, Arnaud interroge Sylvie, professeure de philosophie, sur le marché du bonheur.",
    words: [["le développement personnel", "self-help"], ["se réjouir", "to be glad"], ["contre-productif", "counterproductive"], ["passager", "fleeting"], ["lâcher prise", "to let go"]],
    lines: [["Arnaud", "Applications de méditation, livres de développement personnel, coachs en bien-être : le bonheur est devenu un marché. Sylvie, vous enseignez la philosophie. Faut-il se réjouir de cet intérêt ?", "fr-FR"], ["Sylvie", "Oui et non. Qu'on s'interroge sur la vie bonne, c'est une excellente chose : c'est la question philosophique par excellence. Mais le bonheur est présenté aujourd'hui comme un objectif à atteindre, presque comme un devoir. Et plus on se force à être heureux, plus on se sent coupable de ne pas l'être.", "fr-FR"], ["Arnaud", "Ce serait donc contre-productif ?", "fr-FR"], ["Sylvie", "Parfois, oui. D'autant plus que ces méthodes renvoient chacun à sa seule responsabilité, comme si la précarité ou la solitude n'étaient qu'une question d'état d'esprit.", "fr-FR"], ["Arnaud", "Que proposeraient les philosophes ?", "fr-FR"], ["Sylvie", "De commencer par définir les mots. Le plaisir est passager ; la joie, plus profonde ; le bonheur, un état durable. Il convient de les distinguer, sans quoi on court après le plaisir en croyant chercher le bonheur.", "fr-FR"], ["Arnaud", "Et si vous ne deviez donner qu'un conseil ?", "fr-FR"], ["Sylvie", "Lâcher prise sur ce qui ne dépend pas de nous, comme le disaient les stoïciens. Non que tout se vaille, mais l'énergie qu'on garde, on peut la mettre au service de ce qu'on peut vraiment changer.", "fr-FR"]],
    gist: ["De quoi parle l'émission ?", ["Du bonheur présenté comme un objectif, presque un devoir", "D'un nouveau livre de cuisine", "Des vacances des Français"]],
    detail: [["Selon Sylvie, quel est l'effet de vouloir à tout prix être heureux ?", ["Plus on se force, plus on se sent coupable de ne pas l'être.", "On devient forcément plus heureux.", "On dort mieux."]], ["Que reproche-t-elle à certaines méthodes ?", ["Elles renvoient chacun à sa seule responsabilité.", "Elles coûtent trop cher.", "Elles sont trop compliquées."]], ["Comment distingue-t-elle plaisir, joie et bonheur ?", ["Le plaisir est passager, la joie plus profonde, le bonheur durable.", "Ce sont trois synonymes.", "Le bonheur est le plus court des trois."]], ["Quel conseil donne-t-elle ?", ["Lâcher prise sur ce qui ne dépend pas de nous", "Méditer trois heures par jour", "Acheter moins de livres"]]],
    decode: ["plus on se force à être heureux, plus on se sent coupable de ne pas l'être", "Le plaisir est passager ; la joie, plus profonde ; le bonheur, un état durable"],
    tip: "Philosophers often define by contrast, with lists where the verb disappears: le plaisir est passager ; la joie, plus profonde… The comma replaces the verb. Spot these lists: they give you the key concepts.", tip_fr: "Les philosophes définissent souvent par contraste, avec des énumérations où le verbe disparaît : le plaisir est passager ; la joie, plus profonde… La virgule remplace le verbe. Repère ces énumérations : elles te donnent les notions clés."
  }]);

  W.LEXIS = W.LEXIS || {};
  W.LEXIS["c1-8"] = {
    colloc: [
      ["trouver la sérénité", "to find peace of mind", "Il a trouvé la sérénité à la campagne.", "trouvé", ["gagné", "attrapé"]],
      ["donner un sens à sa vie", "to give meaning to one's life", "Son engagement a donné un sens à sa vie.", "donné", ["fait", "mis"]],
      ["cultiver l'optimisme", "to cultivate optimism", "Elle cultive l'optimisme comme un art de vivre.", "cultive", ["élève", "pousse"]],
      ["faire preuve de sagesse", "to show wisdom", "Il a fait preuve de sagesse en refusant.", "fait", ["donné", "mis"]],
      ["prendre conscience de", "to become aware of", "Elle a pris conscience de ses limites.", "pris", ["fait", "tenu"]],
      ["nourrir une réflexion", "to feed a line of thought", "Ces lectures ont nourri sa réflexion.", "nourri", ["mangé", "rempli"]],
      ["atteindre le bonheur", "to reach happiness", "Peut-on atteindre le bonheur par la volonté ?", "atteindre", ["joindre", "rattraper"]],
      ["céder à la tentation", "to give in to temptation", "Il a fini par céder à la tentation.", "céder", ["laisser", "rendre"]],
      ["mener une vie simple", "to lead a simple life", "Ils ont choisi de mener une vie simple.", "mener", ["porter", "tenir"]],
      ["lâcher prise", "to let go", "Il faut parfois savoir lâcher prise.", "lâcher", ["laisser", "lever"]]
    ],
    wf: [
      ["La ___ est une vertu rare. (SAGE)", "sagesse"],
      ["Il cherche l'___ personnel dans son travail. (ÉPANOUIR)", "épanouissement"],
      ["Le ___ n'est pas toujours une bonne raison d'agir. (PLAIRE)", "plaisir"],
      ["Elle vit dans une ___ totale à l'égard de l'argent. (INDIFFÉRENT)", "indifférence"],
      ["La ___ de nos actes nous appartient. (RESPONSABLE)", "responsabilité"],
      ["C'est un sentiment ___ : il disparaît vite. (PASSER)", "passager"],
      ["Elle mène une existence ___ : rien ne la trouble. (SEREIN)", "sereine"],
      ["L'___ de la sagesse prend toute une vie. (ACQUÉRIR)", "acquisition"]
    ],
    kwt: [
      ["Il faut être courageux pour dire non.", "COURAGE", "Il faut ___ pour dire non.", "du courage"],
      ["Il a répondu très patiemment.", "PATIENCE", "Il a répondu avec ___.", "une grande patience|beaucoup de patience"],
      ["Si on travaille davantage, on se fatigue davantage.", "PLUS", "___ se fatigue.", "Plus on travaille, plus on"],
      ["Je l'aime encore plus parce qu'il est discret.", "AUTANT", "Je l'aime ___ qu'il est discret.", "d'autant plus"],
      ["Ce n'est pas que je refuse, mais je préfère attendre.", "NON", "___ refuse, mais je préfère attendre.", "Non que je|Non pas que je"],
      ["Il se comporte en maître des lieux.", "COMME", "Il se comporte ___ des lieux.", "comme s'il était le maître"]
    ],
    idioms: [
      ["être aux anges", "être très heureux", "to be over the moon", "Depuis la naissance de sa fille, il est aux anges.", "aux anges"],
      ["voir la vie en rose", "être optimiste", "to see the world through rose-tinted glasses", "Depuis qu'elle est amoureuse, elle voit la vie en rose.", "voit la vie en rose"],
      ["avoir le moral dans les chaussettes", "être très découragé", "to be down in the dumps", "Avec cette pluie, j'ai le moral dans les chaussettes.", "le moral dans les chaussettes"],
      ["cultiver son jardin", "s'occuper de sa vie plutôt que de vouloir refaire le monde (d'après Voltaire)", "to tend one's own garden", "Comme le conclut Candide, il faut cultiver notre jardin.", "cultiver notre jardin"],
      ["couper les cheveux en quatre", "compliquer inutilement", "to split hairs", "Ne coupe pas les cheveux en quatre : la réponse est simple.", "coupe pas les cheveux en quatre"],
      ["la quadrature du cercle", "un problème impossible à résoudre", "squaring the circle", "Concilier tous ces intérêts, c'est la quadrature du cercle.", "la quadrature du cercle"],
      ["l'habit ne fait pas le moine", "il ne faut pas juger sur l'apparence", "don't judge a book by its cover", "Il a l'air sévère, mais l'habit ne fait pas le moine.", "l'habit ne fait pas le moine"],
      ["le bonheur est dans le pré", "le bonheur est souvent tout proche, dans les choses simples (d'après Paul Fort)", "happiness is right on your doorstep", "Inutile de partir si loin : le bonheur est dans le pré !", "le bonheur est dans le pré"]
    ]
  };

  W.PROMPTS.push({ id: "fr-c1-8", level: "C1", q: "Qu'est-ce qui, pour toi, contribue le plus au bonheur ?", fr: "What, for you, contributes most to happiness?", time: 180,
    phrases: ["le bonheur tient à…", "d'autant plus que…", "plus… plus…", "non que…", "il faut du…"],
    model: "Pour moi, le bonheur tient d'abord aux liens avec les autres : un repas entre amis, une longue conversation, un fou rire. D'autant plus que ces moments-là ne coûtent presque rien ! J'ajouterais la curiosité : plus j'apprends, plus le monde me semble intéressant. Non que tout soit toujours rose, mais je crois qu'il faut du courage pour voir ce qui va bien quand tout semble aller mal. Au fond, le bonheur ressemble moins à un but qu'à une manière de marcher." });

  W.WRITING_GUIDE["c1-8"] = { genre: "An argued essay on an abstract question (DALF C1)", genre_fr: "Un essai argumenté sur une question abstraite (DALF C1)",
    plan: [["Define the key term and raise the problem.", "Définis le terme clé et pose le problème."], ["First part: what doesn't depend on us.", "Première partie : ce qui ne dépend pas de nous."], ["Second part: what does depend on us.", "Deuxième partie : ce qui dépend de nous."], ["Distinguish two levels to go beyond the opposition.", "Distingue deux niveaux pour dépasser l'opposition."], ["Conclude with a nuanced answer.", "Conclus par une réponse nuancée."]],
    marks: [["Si l'on entend par bonheur", "defining the terms", "définir les termes"], ["Plus la vie est précaire, plus il est difficile", "plus… plus", "plus… plus"], ["de trouver de la sérénité", "partitive with an abstract noun", "le partitif avec un nom abstrait"], ["faire preuve de patience", "an expression without an article", "une expression sans article"], ["d'autant plus aisément qu'on les pratique tôt", "d'autant plus… que", "d'autant plus… que"], ["Non que la volonté suffise", "non que + subjunctive", "non que + subjonctif"]] };

  W.COURSE.push({ id: "c1-8", level: "C1", icon: "lamp", title: "Philosophy and happiness", title_fr: "Philosophie et bonheur",
    intro: "In this unit, you'll think about happiness and the good life: articles with abstract nouns (le bonheur, du courage, avec patience), advanced comparison (d'autant plus que, plus… plus, non que) and debating an abstract question the French way.",
    intro_fr: "Dans cette unité, tu vas réfléchir au bonheur et à la vie bonne : l'article avec les noms abstraits (le bonheur, du courage, avec patience), la comparaison avancée (d'autant plus que, plus… plus, non que) et le débat sur une question abstraite, à la française.",
    can: ["Use the right article with abstract nouns", "Link and compare ideas with d'autant plus que, plus… plus, non que", "Discuss happiness, wisdom and freedom", "Define, raise a problem and distinguish in a debate", "Write an argued essay on an abstract question"],
    can_fr: ["Employer le bon article avec les noms abstraits", "Lier et comparer des idées avec d'autant plus que, plus… plus, non que", "Débattre du bonheur, de la sagesse et de la liberté", "Définir, poser un problème et distinguer dans un débat", "Rédiger un essai argumenté sur une question abstraite"],
    lessons: [126, 127, 128], vocab: ["philoFR", "bonheurFR"], reading: "apprendrebonheur", prompt: "fr-c1-8",
    writing: { task: "Does happiness depend on us? Write an argued essay (250-300 words): define the term, weigh both sides and give a nuanced answer.", task_fr: "Le bonheur dépend-il de nous ? Rédige un essai argumenté (250 à 300 mots) : définis le terme, pèse les deux points de vue et donne une réponse nuancée.", words: "250-300",
      tips: ["Si l'on entend par…", "Il serait naïf de nier…", "Pour autant, …", "Il convient donc de distinguer…", "En somme, …"],
      checklist: ["I defined the key term", "I raised a real problem", "I weighed both sides", "I used the right articles with abstract nouns", "My conclusion is nuanced", "I wrote between 250 and 300 words"],
      model: "Le bonheur dépend-il de nous ?\n\nChacun aspire au bonheur, mais rares sont ceux qui sauraient le définir. Si l'on entend par bonheur un état durable de satisfaction, et non le plaisir d'un instant, une question se pose : ce bonheur est-il entre nos mains, ou dépend-il des circonstances ?\n\nIl serait naïf de nier le poids de ce qui nous échappe. La santé, la sécurité matérielle ou l'affection de nos proches ne se commandent pas. On ne choisit ni sa famille ni son époque. Plus la vie est précaire, plus il est difficile de trouver de la sérénité, et l'on ne saurait reprocher à une personne qui souffre de ne pas être heureuse.\n\nPour autant, deux personnes placées dans des conditions semblables ne vivent pas la même vie. Les stoïciens l'avaient compris : ce qui nous trouble, ce sont moins les événements que les jugements que nous portons sur eux. Cultiver la gratitude, faire preuve de patience, accepter ce qu'on ne peut changer : autant d'attitudes qui s'apprennent, d'autant plus aisément qu'on les pratique tôt.\n\nIl convient donc de distinguer deux niveaux. Les conditions du bonheur dépendent en grande partie de la société : c'est pourquoi la justice et la solidarité restent des exigences collectives. La manière de vivre ces conditions, en revanche, relève de chacun.\n\nEn somme, le bonheur ne dépend pas entièrement de nous, mais il ne nous est pas non plus étranger. Non que la volonté suffise à tout, mais elle nous laisse une part de liberté : celle de faire de notre mieux avec ce que la vie nous donne." } });
})();
