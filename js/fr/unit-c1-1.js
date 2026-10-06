/* Cours de français, unité C1-1 « Languages and identity / Langues et identités » : la concession avancée (quoi que,
   quel que soit, avoir beau, quand bien même, si… que), le ne explétif et les négations soutenues, la synthèse de
   documents (DALF C1). Première unité du C1. Personnages fictifs, prénoms français. Faits vérifiables seulement :
   DALF C1, production écrite en 2 h 30 (synthèse de 220 à 240 mots à partir de documents d'environ 1 000 mots, puis
   essai argumenté d'environ 250 mots) ; loi Toubon de 1994 ; courriel recommandé en 2003 et mot-dièse en 2013 par la
   commission d'enrichissement de la langue française ; courriel créé au Québec ; budget, challenge et tennis
   viennent de l'ancien français. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "languesFR", icon: "languages", title: "Languages", title_fr: "Les langues", level: "C1", words: [
    ["la langue maternelle", "the mother tongue", "Sa langue maternelle est le portugais."],
    ["le bilinguisme", "bilingualism", "Le bilinguisme est courant dans cette région."],
    ["maîtriser une langue", "to master a language", "Il faut des années pour maîtriser une langue."],
    ["le locuteur / la locutrice", "the speaker (of a language) (m) / (f)", "Le breton compte de moins en moins de locuteurs."],
    ["la langue régionale", "the regional language", "L'occitan est une langue régionale."],
    ["le patois", "the local dialect, patois", "Mes grands-parents parlaient encore le patois."],
    ["le dialecte", "the dialect", "L'alsacien est un dialecte germanique."],
    ["la francophonie", "the French-speaking world", "La francophonie s'étend sur cinq continents."],
    ["la langue officielle", "the official language", "Le français est langue officielle au Sénégal."],
    ["l'anglicisme", "the anglicism", "Week-end est un anglicisme entré depuis longtemps dans l'usage."],
    ["l'emprunt", "the borrowing, the loanword", "Le mot café est un emprunt à l'arabe, par le turc et l'italien."],
    ["le néologisme", "the neologism, the new word", "Chaque année, des néologismes entrent dans le dictionnaire."],
    ["la norme", "the norm, the standard", "La norme évolue avec l'usage."],
    ["le puriste / la puriste", "the purist (m) / (f)", "Les puristes refusent tout anglicisme."],
    ["l'orthographe", "spelling", "L'orthographe française est réputée difficile."],
    ["le verlan", "verlan (slang that reverses syllables)", "Meuf est du verlan : c'est femme à l'envers."],
    ["l'usage", "usage, common use", "Au bout du compte, c'est l'usage qui décide."],
    ["tomber en désuétude", "to fall into disuse", "Cette tournure est tombée en désuétude."]
  ] },
  { id: "identiteFR", icon: "globe", title: "Identity", title_fr: "L'identité", level: "C1", words: [
    ["l'identité", "identity", "La langue fait partie de notre identité."],
    ["l'appartenance", "belonging, membership", "Son appartenance à deux cultures l'enrichit."],
    ["le sentiment d'appartenance", "the sense of belonging", "Le sport renforce le sentiment d'appartenance."],
    ["les racines", "roots", "Elle est retournée en Bretagne pour retrouver ses racines."],
    ["le déracinement", "uprooting", "L'exil entraîne souvent un sentiment de déracinement."],
    ["l'exil", "exile", "Il a écrit ses plus beaux poèmes en exil."],
    ["la terre natale", "the native land", "Il n'a jamais revu sa terre natale."],
    ["le mal du pays", "homesickness", "Les premiers mois, elle avait le mal du pays."],
    ["l'intégration", "integration", "La langue joue un rôle clé dans l'intégration."],
    ["le métissage", "cultural or ethnic mixing", "La musique de cette ville est le fruit d'un métissage."],
    ["le brassage", "the mixing (of people, cultures)", "Les ports ont toujours connu un grand brassage de populations."],
    ["le repli sur soi", "withdrawal into oneself", "La peur de l'autre favorise le repli sur soi."],
    ["l'ouverture", "openness", "Voyager, c'est faire preuve d'ouverture."],
    ["la double nationalité", "dual nationality", "Elle a la double nationalité franco-canadienne."],
    ["le binational / la binationale", "the dual national (m) / (f)", "Les binationaux peuvent voter dans deux pays."],
    ["se réclamer de", "to claim allegiance to, to identify with", "Il se réclame de deux cultures."],
    ["renier", "to disown, to deny", "Elle n'a jamais renié ses origines."],
    ["assumer ses origines", "to embrace one's origins", "Il a mis du temps à assumer ses origines."]
  ] });

  W.LESSONS.push(
  {
    id: 105, level: "C1", icon: "split",
    title: "Quoi que, quel que soit, avoir beau: advanced concession", title_fr: "Quoi que, quel que soit, avoir beau : la concession avancée",
    subtitle: "Whatever, however, even if: concession in formal and spoken French.", subtitle_fr: "Quoi que, quel que, quand bien même : la concession à l'écrit soutenu comme à l'oral.",
    body: `
<h2>Whatever, whoever, wherever</h2>
<p><s-fr>quoi que</s-fr> (whatever), <s-fr>qui que</s-fr> (whoever), <s-fr>où que</s-fr> (wherever) + subjunctive: <s-fr>Quoi que tu dises, je garderai mon accent.</s-fr> · <s-fr>Où que j'aille, je cherche les librairies.</s-fr></p>
<p><s-fr>quel que soit</s-fr> + noun: <s-fr>quel</s-fr> agrees with the noun, <s-fr>soit</s-fr> with the subject: <s-fr>Quelle que soit ta langue maternelle</s-fr> · <s-fr>Quels que soient tes efforts</s-fr>.</p>
<h2>Even if, no matter how</h2>
<p><s-fr>avoir beau</s-fr> + infinitive (however much…, in vain): <s-fr>J'ai beau répéter ce mot, je le prononce mal.</s-fr></p>
<p><s-fr>quand bien même</s-fr> + conditional (even if, formal): <s-fr>Quand bien même il parlerait cinq langues, il resterait modeste.</s-fr></p>
<p><s-fr>si</s-fr> + adjective + <s-fr>que</s-fr> + subjunctive (however…): <s-fr>Si difficile que soit cette langue, on finit par la parler.</s-fr> · <s-fr>tout</s-fr> + adjective + <s-fr>que</s-fr> + indicative: <s-fr>Tout bilingue qu'il est, il cherche parfois ses mots.</s-fr></p>
<h2>Granting a point, then holding firm</h2>
<p><s-fr>il n'en reste pas moins que</s-fr> · <s-fr>il n'en demeure pas moins que</s-fr> (the fact remains that) · <s-fr>toujours est-il que</s-fr> (be that as it may) · <s-fr>encore que</s-fr> + subjunctive (although, as an afterthought).</p>
<div class="tip">Don't confuse <s-fr>quoi que</s-fr> in two words (whatever) and <s-fr>quoique</s-fr> in one word (although): <s-fr>Quoi qu'il fasse, il réussit</s-fr> / <s-fr>Quoiqu'il soit fatigué, il travaille</s-fr>. A test: if you can replace it with <s-fr>bien que</s-fr>, write it in one word.</div>
`,
    examples: [
      ["Quoi que tu dises, je ne changerai pas d'avis.", "Whatever you say, I won't change my mind."],
      ["Où que j'aille, je cherche les librairies.", "Wherever I go, I look for bookshops."],
      ["Quelle que soit ta langue maternelle, tu peux apprendre le français.", "Whatever your mother tongue, you can learn French."],
      ["J'ai beau répéter ce mot, je le prononce mal.", "However much I repeat this word, I pronounce it wrongly."],
      ["Quand bien même il parlerait cinq langues, il resterait modeste.", "Even if he spoke five languages, he would remain modest."],
      ["Si difficile que soit cette langue, on finit par la parler.", "However difficult this language is, you end up speaking it."],
      ["Tout bilingue qu'il est, il cherche parfois ses mots.", "Bilingual as he is, he sometimes searches for words."],
      ["Il n'en reste pas moins que l'orthographe est difficile.", "The fact remains that spelling is difficult."]
    ],
    quiz: [
      { q: "“Whatever you do” is:", o: ["Quoi que tu fasses", "Quoique tu fasses", "Quoi que tu fais"], a: 0, ex: "quoi que (two words) + subjunctive." },
      { q: "“Whatever her reasons” is:", o: ["Quelles que soient ses raisons", "Quel que soit ses raisons", "Quelles que sont ses raisons"], a: 0, ex: "quel agrees with raisons (f pl), soient with the plural subject." },
      { q: "“However much I explain” is:", o: ["J'ai beau expliquer", "Je suis beau expliquer", "J'ai beau d'expliquer"], a: 0, ex: "avoir beau + infinitive." },
      { q: "“Even if he were right” (formal) is:", o: ["Quand bien même il aurait raison", "Quand bien même il a raison", "Quand bien même il ait raison"], a: 0, ex: "quand bien même + conditional." },
      { q: "“However difficult it is” is:", o: ["Si difficile que ce soit", "Si difficile que c'est", "Aussi difficile qu'il est"], a: 0, ex: "si + adjective + que + subjunctive." }
    ]
  },
  {
    id: 106, level: "C1", icon: "ban",
    title: "Avant qu'il ne parte, je ne saurais dire: the expletive ne and formal negation", title_fr: "Avant qu'il ne parte, je ne saurais dire : le ne explétif et la négation soutenue",
    subtitle: "A ne that doesn't negate, a ne without pas, and negations for formal writing.", subtitle_fr: "Un ne qui ne nie rien, un ne sans pas, et les négations de l'écrit soutenu.",
    body: `
<h2>The expletive ne: no negative meaning</h2>
<p>In formal French, <s-fr>ne</s-fr> alone can appear after some expressions, without making the sentence negative. It's optional, but expected in careful writing:</p>
<p><s-fr>avant que… ne</s-fr>: <s-fr>Partons avant qu'il ne pleuve.</s-fr> · <s-fr>à moins que… ne</s-fr>: <s-fr>Nous commencerons à l'heure, à moins que l'intervenant ne soit en retard.</s-fr> · <s-fr>de peur que</s-fr> / <s-fr>de crainte que… ne</s-fr> · <s-fr>craindre que</s-fr> / <s-fr>avoir peur que… ne</s-fr>: <s-fr>Je crains qu'il ne se perde.</s-fr> · comparisons of inequality: <s-fr>C'est plus difficile que je ne le pensais.</s-fr></p>
<p>For a real negation, use <s-fr>ne… pas</s-fr>: <s-fr>Je crains qu'il ne vienne</s-fr> (I fear he'll come) / <s-fr>Je crains qu'il ne vienne pas</s-fr> (I fear he won't).</p>
<h2>Ne without pas</h2>
<p>With <s-fr>cesser</s-fr>, <s-fr>oser</s-fr>, <s-fr>pouvoir</s-fr> and <s-fr>savoir</s-fr>, formal French often drops <s-fr>pas</s-fr>: <s-fr>Il ne cesse de pleuvoir.</s-fr> · <s-fr>Je n'ose y croire.</s-fr> · <s-fr>Je ne saurais vous dire.</s-fr> (I really couldn't tell you) · <s-fr>Je ne peux m'empêcher de sourire.</s-fr></p>
<h2>Formal negations</h2>
<p><s-fr>ne… guère</s-fr> (hardly) · <s-fr>ne… nullement</s-fr>, <s-fr>ne… aucunement</s-fr> (not at all) · <s-fr>nul ne</s-fr> (no one): <s-fr>Nul ne peut entrer sans badge.</s-fr> · <s-fr>ni… ni… ne</s-fr>: <s-fr>Ni le froid ni la pluie ne l'arrêtent.</s-fr> · <s-fr>sans… ni…</s-fr>: <s-fr>sans papier ni stylo</s-fr></p>
<div class="tip">In speech, the expletive ne is often left out, and so is the ne of ne… pas. At C1, the skill is to recognise both registers and to use the formal one where it belongs: in a letter, an essay, a speech.</div>
`,
    examples: [
      ["Partons avant qu'il ne pleuve.", "Let's leave before it rains."],
      ["Nous commencerons à l'heure, à moins que l'intervenant ne soit en retard.", "We'll start on time, unless the speaker is late."],
      ["C'est plus difficile que je ne le pensais.", "It's more difficult than I thought."],
      ["Je crains qu'il ne vienne pas.", "I'm afraid he won't come."],
      ["Il ne cesse de pleuvoir depuis ce matin.", "It hasn't stopped raining since this morning."],
      ["Je ne saurais vous dire à quelle heure il arrive.", "I really couldn't tell you what time he's arriving."],
      ["Nul ne peut entrer sans badge.", "No one may enter without a badge."],
      ["Ni le froid ni la pluie ne l'arrêtent.", "Neither cold nor rain stops her."]
    ],
    quiz: [
      { q: "In Partons avant qu'il ne pleuve, the ne:", o: ["has no negative meaning", "means it won't rain", "is a mistake"], a: 0, ex: "It's the expletive ne." },
      { q: "“It's harder than I thought” (formal) is:", o: ["C'est plus dur que je ne le pensais.", "C'est plus dur que je ne pensais pas.", "C'est plus dur que je pensais ne."], a: 0, ex: "The expletive ne after a comparison of inequality." },
      { q: "“I'm afraid she won't come” is:", o: ["J'ai peur qu'elle ne vienne pas.", "J'ai peur qu'elle ne vienne.", "J'ai peur qu'elle ne vient pas."], a: 0, ex: "Real negation: ne… pas, with the subjunctive." },
      { q: "“No one may leave” is:", o: ["Nul ne peut partir.", "Nul ne peut pas partir.", "Nul peut partir."], a: 0, ex: "nul ne, without pas." },
      { q: "“I wouldn't dare say it” (formal) is:", o: ["Je n'oserais le dire.", "Je n'oserais le dire pas.", "Je oserais ne le dire."], a: 0, ex: "oser can drop pas in formal French." }
    ]
  },
  {
    id: 107, level: "C1", kind: "functional", icon: "combine",
    title: "Everyday French: the synthesis of documents (DALF C1)", title_fr: "Le français de tous les jours : la synthèse de documents (DALF C1)",
    subtitle: "Bring two or three documents together into one clear, neutral text.", subtitle_fr: "Réunir deux ou trois documents en un seul texte clair et neutre.",
    body: `
<h2>The exam</h2>
<p>The DALF C1 written exam lasts two and a half hours. First, a synthesis of 220 to 240 words from several documents (about 1,000 words in all); then an argued essay of about 250 words on a related question.</p>
<h2>The rules of a synthesis</h2>
<p>No personal opinion. No sentences copied from the documents: key words are allowed, whole sentences are not. A title. And a plan by themes, not document by document.</p>
<h2>The structure</h2>
<p>Introduction: present the documents and the question they raise: <s-fr>Les deux documents s'interrogent sur…</s-fr> · Two or three parts, each comparing the documents · A short conclusion that sums up, still without your opinion.</p>
<h2>Comparing the documents</h2>
<p>Agreement: <s-fr>Les deux auteurs s'accordent à dire que…</s-fr> · <s-fr>Tous deux soulignent…</s-fr> · <s-fr>Les documents se rejoignent sur…</s-fr></p>
<p>Difference: <s-fr>Les documents divergent en revanche sur…</s-fr> · <s-fr>Si le premier…, le second…</s-fr> · <s-fr>quant à lui</s-fr>, <s-fr>quant à elle</s-fr> · <s-fr>à l'inverse</s-fr></p>
<p>Reporting: <s-fr>selon l'auteur de l'article</s-fr> · <s-fr>l'intervenant estime que</s-fr> · <s-fr>la journaliste rappelle que</s-fr></p>
<div class="tip">Count your words: outside 220 to 240, you lose points. And reread for any trace of opinion: no à mon avis, no je pense, no adjectives that judge the documents.</div>
`,
    examples: [
      ["Les deux documents s'interrogent sur la place des mots anglais en français.", "Both documents look at the place of English words in French."],
      ["Les deux auteurs s'accordent à dire que l'emprunt est un phénomène ancien.", "Both authors agree that borrowing is an old phenomenon."],
      ["Tous deux soulignent le rôle de l'usage.", "Both stress the role of usage."],
      ["Les documents divergent en revanche sur la nécessité d'agir.", "The documents differ, however, on the need to act."],
      ["Si le premier insiste sur l'histoire, le second s'intéresse au présent.", "While the first stresses history, the second looks at the present."],
      ["L'intervenant, quant à lui, dénonce une forme de paresse.", "The guest speaker, for his part, criticises a kind of laziness."],
      ["Selon l'auteur de l'article, il faut rester attentif.", "According to the author of the article, we need to stay alert."]
    ],
    quiz: [
      { q: "How long is the DALF C1 synthesis?", o: ["220 to 240 words", "100 to 120 words", "about 500 words"], a: 0, ex: "220 to 240 words." },
      { q: "In a synthesis, your personal opinion:", o: ["has no place", "goes in the conclusion", "goes in the introduction"], a: 0, ex: "A synthesis stays neutral." },
      { q: "The plan of a synthesis is organised:", o: ["by themes, comparing the documents", "document by document", "in the order of the paragraphs"], a: 0, ex: "By themes." },
      { q: "“Both authors agree that” is:", o: ["Les deux auteurs s'accordent à dire que", "Les deux auteurs s'accordent de dire que", "Les deux auteurs se mettent d'accord à dire que"], a: 0, ex: "s'accorder à dire que." },
      { q: "Can you copy a whole sentence from a document?", o: ["No, only key words", "Yes, in quotation marks", "Yes, in the introduction"], a: 0, ex: "Key words only: everything else must be reworded." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    105: {
      gap: [["___ que tu dises, je garderai mon accent. (whatever)", "Quoi"], ["___ que soit ta langue maternelle, tu peux progresser. (whatever, f)", "Quelle"], ["Il a ___ répéter, il se trompe toujours. (however much)", "beau"], ["Quand bien même il ___ raison, il devrait rester poli. (avoir, conditional)", "aurait"]],
      fix: [["Quoique tu fasses, il ne sera pas content.", "Quoi que tu fasses, il ne sera pas content.", "quoi que in two words = whatever; quoique = although."], ["Quel que soit ses raisons, il a tort.", "Quelles que soient ses raisons, il a tort.", "quel agrees with the noun and soit with the subject: quelles que soient."]],
      task: ["Talk about learning a language, using quoi que, quel que soit, avoir beau and quand bien même.", "Parle de l'apprentissage d'une langue, avec quoi que, quel que soit, avoir beau et quand bien même.", "Quelle que soit la langue qu'on apprend, les débuts sont exaltants. Mais on a beau étudier tous les jours, il arrive un moment où l'on ne progresse plus. Quoi qu'on fasse, certains sons restent difficiles. Et quand bien même on parlerait couramment, on garderait sans doute un léger accent : ce n'est pas un défaut, c'est une signature."]
    },
    106: {
      gap: [["Partons avant qu'il ne ___. (pleuvoir, subjunctive)", "pleuve"], ["Ce livre est plus difficile que je ne le ___. (penser, imperfect)", "pensais"], ["Il ne ___ de parler de son voyage. (stop)", "cesse"], ["Je ne ___ vous dire où il est. (savoir, conditional)", "saurais"]],
      fix: [["J'ai peur qu'il ne vient pas.", "J'ai peur qu'il ne vienne pas.", "avoir peur que + subjunctive; here ne… pas is a real negation (he won't come)."], ["Nul ne peut pas entrer sans badge.", "Nul ne peut entrer sans badge.", "nul ne is already negative: no pas."]],
      task: ["Write a formal notice about a conference, with avant que… ne, à moins que… ne, ne… guère and nul ne.", "Rédige une note formelle au sujet d'une conférence, avec avant que… ne, à moins que… ne, ne… guère et nul ne.", "Merci d'arriver dix minutes avant que la conférence ne commence. Les portes seront fermées à l'heure, à moins que l'intervenant ne soit lui-même en retard. Il ne reste guère de places : nul ne pourra entrer sans inscription préalable."]
    },
    107: {
      gap: [["Les deux documents s'___ à dire que la langue évolue. (agree)", "accordent"], ["Le premier auteur parle du passé ; le second, quant à ___, parle du présent. (him)", "lui"], ["Une synthèse ne contient ___ opinion personnelle. (no)", "aucune"], ["Les deux documents ___ en revanche sur les solutions. (differ)", "divergent"]],
      fix: [["Les deux auteurs s'accordent de dire que l'emprunt est naturel.", "Les deux auteurs s'accordent à dire que l'emprunt est naturel.", "s'accorder à dire que."], ["À mon avis, les deux documents ont raison sur ce point.", "Les deux documents se rejoignent sur ce point.|Les deux documents convergent sur ce point.", "No personal opinion in a synthesis: compare the documents instead."]],
      task: ["Write the introduction of a synthesis of two documents on remote working: present them and the question they raise, without giving your opinion.", "Écris l'introduction d'une synthèse de deux documents sur le télétravail : présente-les avec la question qu'ils soulèvent, sans donner ton avis.", "Les deux documents, un article d'un quotidien national et le témoignage d'une salariée publié sur un blog, s'intéressent au télétravail. Si le premier en analyse les effets sur la productivité, le second en décrit les conséquences sur la vie quotidienne. Tous deux posent la même question : le télétravail représente-t-il un progrès pour les salariés ?"]
    }
  });

  W.ROLEPLAYS.push(
  { id: "synthese", lesson: 107, level: "C1", icon: "combine", partner: "Margaux", role: "a classmate preparing the DALF C1",
    title: "Preparing a synthesis together", title_fr: "Préparer une synthèse à deux",
    setting: "You and Margaux are preparing the DALF C1. You've both read two documents on anglicisms and you're planning the synthesis together.", setting_fr: "Margaux et toi préparez le DALF C1. Vous avez lu deux documents sur les anglicismes et vous préparez la synthèse ensemble.",
    turns: [
      { p: "Bon, on a lu les deux documents. On commence par lequel ?", fr: "Right, we've read both documents. Which one do we start with?" },
      { y: ["Plutôt que de les résumer l'un après l'autre, je propose qu'on fasse un plan par thèmes.", "Plutôt que de les résumer l'un après l'autre, je propose qu'on fait un plan par thèmes.", "Plutôt que de les résumer l'un après l'autre, je propose de qu'on fasse un plan par thèmes."], fr: "Rather than summarising them one after the other, I suggest we make a plan by themes.", why: "proposer que + subjunctive (fasse)." },
      { p: "D'accord. Et je peux écrire que les anglicismes m'agacent ?", fr: "OK. And can I write that anglicisms annoy me?" },
      { y: ["Non : quoi que nous en pensions, une synthèse ne contient aucune opinion personnelle.", "Non : quoique nous en pensions, une synthèse ne contient aucune opinion personnelle.", "Non : quoi que nous en pensons, une synthèse ne contient aucune opinion personnelle."], fr: "No: whatever we think of them, a synthesis contains no personal opinion.", why: "quoi que (whatever), in two words, + subjunctive." },
      { p: "Ah oui. Et la phrase de la linguiste, je la recopie ? Elle est parfaite !", fr: "Oh right. And the linguist's sentence, shall I copy it? It's perfect!" },
      { y: ["Tu as beau la trouver parfaite, il faut la reformuler : on n'a droit qu'aux mots-clés.", "Tu as beau de la trouver parfaite, il faut la reformuler : on n'a droit qu'aux mots-clés.", "Tu es beau la trouver parfaite, il faut la reformuler : on n'a droit qu'aux mots-clés."], fr: "However perfect you find it, you have to reword it: we're only allowed key words.", why: "avoir beau + infinitive, without de." },
      { p: "Et comment je montre que les deux documents disent la même chose ?", fr: "And how do I show that the two documents say the same thing?" },
      { y: ["On peut écrire que les deux auteurs s'accordent à dire que l'usage a le dernier mot.", "On peut écrire que les deux auteurs s'accordent de dire que l'usage a le dernier mot.", "On peut écrire que les deux auteurs se mettent d'accord à dire que l'usage a le dernier mot."], fr: "We can write that both authors agree that usage has the last word.", why: "s'accorder à dire que." },
      { p: "Parfait. Et pour la longueur ?", fr: "Perfect. And the length?" },
      { y: ["Entre 220 et 240 mots. Il faudra compter avant que la surveillante ne ramasse les copies.", "Entre 220 et 240 mots. Il faudra compter avant que la surveillante ne ramasse pas les copies.", "Entre 220 et 240 mots. Il faudra compter avant que la surveillante ramasse ne les copies."], fr: "Between 220 and 240 words. We'll have to count before the invigilator collects the papers.", why: "avant que + subjunctive, with the expletive ne before the verb; no pas." }
    ] }
  );

  W.READINGS.push({
    id: "anglicismes", level: "C1", icon: "languages", title: "Anglicismes : faut-il avoir peur ?", genre: "Article",
    intro: "Week-end, parking, e-mail: are English words a threat to French, or a sign that it's alive? Advanced concession, formal negation and inversion.",
    intro_fr: "Week-end, parking, e-mail : les mots anglais menacent-ils le français, ou montrent-ils qu'il est vivant ? La concession avancée, la négation soutenue et l'inversion.",
    paragraphs: [
      { en: "Week-end, parking, e-mail : le français a toujours emprunté des mots à ses voisins, et l'anglais n'en est que le dernier fournisseur en date. Quoi qu'en disent les puristes, une langue qui emprunte est une langue vivante. Encore faut-il savoir où placer la limite.", fr: "Weekend, car park, email: French has always borrowed words from its neighbours, and English is only the latest supplier. Whatever the purists say, a language that borrows is a living language. Still, you have to know where to draw the line." },
      { en: "En France, la loi Toubon de 1994 impose l'usage du français dans de nombreux domaines, comme la publicité, le monde du travail ou l'enseignement. Par ailleurs, une commission d'enrichissement de la langue française propose des équivalents officiels aux termes étrangers : c'est ainsi que courriel a été recommandé en 2003, et mot-dièse en 2013 pour remplacer hashtag.", fr: "In France, the 1994 Toubon law requires the use of French in many areas, such as advertising, the workplace and education. In addition, a commission for the enrichment of the French language proposes official equivalents for foreign terms: that's how courriel was recommended in 2003, and mot-dièse in 2013 to replace hashtag." },
      { en: "Le succès de ces mots est inégal. Si courriel s'est bien implanté, en particulier au Québec, où il est né, mot-dièse reste rare dans la conversation. Les spécialistes ont beau proposer des équivalents élégants, l'usage a toujours le dernier mot.", fr: "These words have had mixed success. While courriel has taken root, especially in Quebec, where it was born, mot-dièse remains rare in conversation. However elegant the equivalents experts propose, usage always has the last word." },
      { en: "Faut-il pour autant s'inquiéter ? Les linguistes rappellent que les emprunts à l'anglais ne représentent qu'une part limitée du vocabulaire courant, et que bien des mots anglais viennent eux-mêmes du français : budget, challenge ou tennis ont fait le voyage aller et retour à travers la Manche.", fr: "Should we be worried, then? Linguists point out that borrowings from English make up only a limited part of everyday vocabulary, and that many English words come from French in the first place: budget, challenge and tennis have made the round trip across the Channel." },
      { en: "Reste une question de fond. Quand bien même les mots anglais ne menaceraient pas le français, leur usage systématique dans les entreprises ou la publicité peut exclure ceux qui ne parlent pas anglais. Si inoffensifs que soient la plupart des emprunts, la vigilance reste donc de mise.", fr: "One basic question remains. Even if English words were no threat to French, their systematic use in companies or advertising can exclude those who don't speak English. However harmless most borrowings may be, vigilance is still called for." }
    ],
    glossary: { "emprunté": "borrowed", "fournisseur": "supplier", "puristes": "purists", "enrichissement": "enrichment", "inégal": "uneven, mixed", "implanté": "established, taken root", "linguistes": "linguists", "emprunts": "borrowings, loanwords", "Manche": "the English Channel", "inoffensifs": "harmless", "équivalents": "equivalents" },
    questions: [
      { q: "Selon l'auteur, que montre le fait qu'une langue emprunte des mots ?", o: ["Qu'elle est vivante", "Qu'elle est menacée", "Qu'elle est pauvre"], a: 0 },
      { q: "Que fait la commission d'enrichissement de la langue française ?", o: ["Elle propose des équivalents officiels aux termes étrangers.", "Elle interdit les mots anglais.", "Elle traduit les lois en anglais."], a: 0 },
      { q: "Que dit l'auteur de mot-dièse ?", o: ["Il reste rare dans la conversation.", "Il a remplacé hashtag partout.", "Il est né au Québec."], a: 0 },
      { q: "Quel point commun ont budget, challenge et tennis ?", o: ["Ils viennent à l'origine du français.", "Ils ont été inventés au Québec.", "Ils sont interdits par la loi Toubon."], a: 0 },
      { q: "Quelle réserve l'auteur exprime-t-il à la fin ?", o: ["L'usage systématique de l'anglais peut exclure ceux qui ne le parlent pas.", "Tous les emprunts sont dangereux.", "Il faudrait supprimer la commission."], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-c1-1", unit: "c1-1", level: "C1", icon: "radio",
    title: "Débat : l'anglais au bureau", title_fr: "Débat : l'anglais au bureau",
    context: "On a radio programme, Mathilde, a linguist, and Rémi, a member of a language association, debate English words at work.", context_fr: "Dans une émission de radio, Mathilde, linguiste, et Rémi, membre d'une association de défense de la langue, débattent des mots anglais au travail.",
    words: [["dramatiser", "to overdramatise"], ["s'imposer", "to become established"], ["la paresse", "laziness"], ["oser", "to dare"], ["compris de tous", "understood by everyone"]],
    lines: [["Animatrice", "Bonsoir. Brainstorming, deadline, feedback : dans les bureaux, l'anglais est partout. Faut-il s'en inquiéter ? Mathilde, vous êtes linguiste.", "fr-FR"], ["Mathilde", "Je ne crois pas qu'il faille dramatiser. Les langues ont toujours emprunté. Quoi qu'on fasse, les mots utiles s'imposent, et les autres disparaissent d'eux-mêmes.", "fr-FR"], ["Animatrice", "Rémi, vous n'êtes pas de cet avis.", "fr-FR"], ["Rémi", "Pas du tout. Ce qui me gêne, ce n'est pas l'emprunt, c'est la paresse. On dit deadline alors que date limite existe depuis toujours. Et en réunion, tout le monde ne comprend pas ces mots, même si personne n'ose le dire.", "fr-FR"], ["Mathilde", "Je vous l'accorde, l'exclusion est un vrai risque. Mais interdire ne sert à rien : l'usage a toujours le dernier mot.", "fr-FR"], ["Rémi", "Je ne demande pas d'interdire. Je demande qu'on se pose la question avant de parler. Quand bien même un mot anglais serait plus court, le mot français a l'avantage d'être compris de tous.", "fr-FR"], ["Animatrice", "Un point d'accord, alors ?", "fr-FR"], ["Mathilde", "Oui : choisir ses mots en pensant à ceux qui écoutent. Ça, c'est de la politesse, dans n'importe quelle langue.", "fr-FR"]],
    gist: ["De quoi parlent les invités ?", ["De l'usage des mots anglais au travail", "De l'apprentissage de l'anglais à l'école", "Des accents régionaux"]],
    detail: [["Selon Mathilde, que deviennent les mots inutiles ?", ["Ils disparaissent d'eux-mêmes.", "Ils sont interdits.", "Ils entrent dans le dictionnaire."]], ["Qu'est-ce qui gêne Rémi ?", ["La paresse : employer un mot anglais quand le mot français existe", "Tous les emprunts, sans exception", "Les accents régionaux"]], ["Quel risque Mathilde reconnaît-elle ?", ["L'exclusion de ceux qui ne comprennent pas", "La disparition du français", "Le coût des traductions"]], ["Sur quoi les deux invités sont-ils d'accord ?", ["Choisir ses mots en pensant à ceux qui écoutent", "Interdire les anglicismes", "Parler anglais en réunion"]]],
    decode: ["Je ne crois pas qu'il faille dramatiser", "Quand bien même un mot anglais serait plus court"],
    tip: "In a debate, listen for concessions: je vous l'accorde, mais…, quand bien même… They show where each speaker gives ground, and where they hold firm.", tip_fr: "Dans un débat, repère les concessions : je vous l'accorde, mais…, quand bien même… Elles montrent où chacun cède du terrain, et où il tient bon."
  }]);

  W.LEXIS = W.LEXIS || {};
  W.LEXIS["c1-1"] = {
    colloc: [
      ["maîtriser une langue", "to master a language", "Elle maîtrise trois langues.", "maîtrise", ["contrôle", "gouverne"]],
      ["prendre l'accent", "to pick up the accent", "Après un an à Marseille, il a pris l'accent.", "pris", ["mis", "fait"]],
      ["perdre son accent", "to lose one's accent", "Il n'a jamais perdu son accent.", "perdu", ["lâché", "laissé"]],
      ["enrichir la langue", "to enrich the language", "Les emprunts enrichissent la langue.", "enrichissent", ["grossissent", "remplissent"]],
      ["faire son entrée dans le dictionnaire", "to make it into the dictionary", "Ce mot a fait son entrée dans le dictionnaire.", "fait", ["pris", "passé"]],
      ["affirmer son identité", "to assert one's identity", "Elle affirme son identité bretonne.", "affirme", ["exige", "pose"]],
      ["transmettre une langue", "to pass on a language", "Ses parents lui ont transmis le basque.", "transmis", ["passé", "donné"]],
      ["tomber en désuétude", "to fall into disuse", "Cette expression est tombée en désuétude.", "tombée", ["allée", "partie"]],
      ["avoir cours", "to be in use, current", "Ce mot n'a plus cours aujourd'hui.", "cours", ["court", "lieu"]],
      ["se heurter à la barrière de la langue", "to come up against the language barrier", "À son arrivée, elle s'est heurtée à la barrière de la langue.", "heurtée", ["cognée", "frappée"]]
    ],
    wf: [
      ["Le ___ est courant dans les familles mixtes. (BILINGUE)", "bilinguisme"],
      ["Il parle un français ___ : sans la moindre faute. (REPROCHE)", "irréprochable"],
      ["Pour moi, ce dialecte est presque ___. (COMPRÉHENSIBLE)", "incompréhensible"],
      ["La ___ des langues régionales est un enjeu. (TRANSMETTRE)", "transmission"],
      ["Son ___ à deux cultures est une richesse. (APPARTENIR)", "appartenance"],
      ["Les ___ de l'orthographe refusent toute réforme. (PUR)", "puristes"],
      ["Ce terme a été ___ remplacé par courriel. (OFFICIEL)", "officiellement"],
      ["Cette prononciation est ___ du Sud de la France. (CARACTÈRE)", "caractéristique"]
    ],
    kwt: [
      ["Même s'il fait des efforts, il garde son accent.", "BEAU", "Il ___ des efforts, il garde son accent.", "a beau faire"],
      ["Peu importe ce que tu dis, je ne changerai pas d'avis.", "QUOI", "___, je ne changerai pas d'avis.", "Quoi que tu dises"],
      ["Peu importe la langue que tu apprends, la régularité compte.", "QUELLE", "___ la langue que tu apprends, la régularité compte.", "Quelle que soit"],
      ["Même s'il parlait dix langues, il resterait modeste.", "QUAND", "___ dix langues, il resterait modeste.", "Quand bien même il parlerait"],
      ["Partons maintenant, sinon la pluie va nous surprendre.", "AVANT", "Partons maintenant, ___ pleuve.", "avant qu'il ne|avant qu'il"],
      ["Il pleut sans arrêt depuis ce matin.", "CESSE", "Il ___ depuis ce matin.", "ne cesse de pleuvoir|ne cesse pas de pleuvoir"]
    ],
    idioms: [
      ["avoir un cheveu sur la langue", "mal prononcer les s et les z", "to have a lisp", "Enfant, il avait un cheveu sur la langue.", "avait un cheveu sur la langue"],
      ["tourner sept fois sa langue dans sa bouche", "réfléchir avant de parler", "to think before you speak", "Avant de répondre, tourne sept fois ta langue dans ta bouche.", "tourne sept fois ta langue dans ta bouche"],
      ["donner sa langue au chat", "renoncer à trouver la réponse", "to give up guessing", "Je ne trouve pas la réponse, je donne ma langue au chat.", "je donne ma langue au chat"],
      ["ne pas avoir la langue dans sa poche", "parler facilement et répondre avec aplomb", "to never be lost for words", "Ma grand-mère n'a pas la langue dans sa poche.", "n'a pas la langue dans sa poche"],
      ["parler français comme une vache espagnole", "parler très mal le français", "to murder the language", "Au début, je parlais français comme une vache espagnole.", "parlais français comme une vache espagnole"],
      ["c'est du chinois", "c'est incompréhensible", "it's all Greek to me", "Ce contrat, pour moi, c'est du chinois.", "c'est du chinois"],
      ["avoir la langue bien pendue", "être très bavard", "to have the gift of the gab", "Leur fils a la langue bien pendue.", "a la langue bien pendue"],
      ["avoir la langue qui fourche", "dire un mot à la place d'un autre, par erreur", "to make a slip of the tongue", "Pardon, j'ai eu la langue qui fourche : je voulais dire mardi.", "j'ai eu la langue qui fourche"]
    ]
  };

  W.PROMPTS.push({ id: "fr-c1-1", level: "C1", q: "Quelle place les langues que tu parles occupent-elles dans ton identité ?", fr: "What place do the languages you speak have in your identity?", time: 180,
    phrases: ["Quelle que soit…", "J'ai beau…", "Il n'en reste pas moins que…", "Quand bien même…", "Si … que soit…"],
    model: "Ma langue maternelle, c'est l'anglais, et elle reste celle de mes émotions : quand je compte ou quand je me fâche, c'est toujours en anglais ! Mais le français prend de plus en plus de place dans ma vie. Quelle que soit la langue que je parle, j'ai l'impression de changer un peu de personnalité : en anglais, je vais droit au but ; en français, je prends le temps de nuancer. J'ai beau faire des progrès, certaines expressions me résistent encore. Il n'en reste pas moins que chaque nouvelle langue m'a ouvert une autre façon de voir le monde." });

  W.WRITING_GUIDE["c1-1"] = { genre: "A synthesis of documents (DALF C1)", genre_fr: "Une synthèse de documents (DALF C1)",
    plan: [["Give a title that sums up the question.", "Donne un titre qui résume la question."], ["Introduction: present the documents and the question they raise.", "Introduction : présente les documents et la question qu'ils soulèvent."], ["First part: what the documents agree on.", "Première partie : ce sur quoi les documents s'accordent."], ["Second part: where they differ, then a shared point.", "Deuxième partie : ce qui les sépare, puis un point commun."], ["Conclude by summing up, with no personal opinion.", "Conclus en résumant, sans opinion personnelle."]],
    marks: [["Les deux documents, un article de presse et un débat radiophonique, s'interrogent", "present the documents and the question", "présenter les documents et la question"], ["s'accordent d'abord à dire que", "a point of agreement", "un point d'accord"], ["tandis que", "a comparison", "une comparaison"], ["Les documents divergent en revanche", "a difference", "une divergence"], ["quant à lui", "the second view", "le second point de vue"], ["Ils invitent ainsi à", "a neutral conclusion", "une conclusion neutre"]] };

  W.COURSE.push({ id: "c1-1", level: "C1", icon: "languages", title: "Languages and identity", title_fr: "Langues et identités",
    intro: "In this first C1 unit, you'll talk about languages and what they say about us: advanced concession (quoi que, quel que soit, avoir beau, quand bien même), the expletive ne and formal negation, and the synthesis of documents, the first task of the DALF C1 written exam.",
    intro_fr: "Dans cette première unité du C1, tu vas parler des langues et de ce qu'elles disent de nous : la concession avancée (quoi que, quel que soit, avoir beau, quand bien même), le ne explétif et la négation soutenue, et la synthèse de documents, première épreuve écrite du DALF C1.",
    can: ["Express concession with precision, in formal and spoken French", "Recognise and use the expletive ne and formal negations", "Talk about languages, borrowing and identity", "Compare several documents without giving your opinion", "Write a synthesis of documents, as in the DALF C1"],
    can_fr: ["Exprimer la concession avec précision, à l'écrit soutenu comme à l'oral", "Reconnaître et employer le ne explétif et les négations soutenues", "Parler des langues, des emprunts et de l'identité", "Comparer plusieurs documents sans donner ton avis", "Rédiger une synthèse de documents, comme au DALF C1"],
    lessons: [105, 106, 107], vocab: ["languesFR", "identiteFR"], reading: "anglicismes", prompt: "fr-c1-1",
    writing: { task: "Write a synthesis (220-240 words) of this unit's two documents: the article on anglicisms and the radio debate on English at work. Give a title, compare the documents by theme and give no personal opinion.", task_fr: "Rédige une synthèse (220 à 240 mots) des deux documents de cette unité : l'article sur les anglicismes et le débat radiophonique sur l'anglais au bureau. Donne un titre, compare les documents par thème et ne donne aucune opinion personnelle.", words: "220-240",
      tips: ["Les deux documents s'interrogent sur…", "Tous deux soulignent…", "Les documents divergent en revanche sur…", "quant à lui", "Ils invitent ainsi à…"],
      checklist: ["I gave a title", "My introduction presents the documents and the question", "My plan compares the documents by theme", "I copied no whole sentence from the documents", "There is no personal opinion", "I wrote between 220 and 240 words"],
      model: "Les anglicismes, menace ou richesse ?\n\nLes deux documents, un article de presse et un débat radiophonique, s'interrogent sur la place des mots anglais en français. Faut-il y voir un danger ou un signe de vitalité ?\n\nLes deux sources s'accordent d'abord à dire que l'emprunt est un phénomène ancien et naturel. L'article rappelle que plusieurs mots anglais, comme budget ou tennis, viennent eux-mêmes du français, tandis que la linguiste invitée à la radio estime que les termes utiles finissent par s'imposer et que les autres disparaissent. Tous deux soulignent en outre que l'usage a le dernier mot : les équivalents officiels proposés en France ne s'implantent pas toujours.\n\nLes documents divergent en revanche sur la nécessité d'agir. Pour l'auteur de l'article, la loi et les recommandations officielles fixent un cadre, sans pour autant empêcher la langue d'évoluer. Le second intervenant du débat, quant à lui, dénonce surtout une forme de paresse : employer un terme anglais alors qu'un mot français existe. Il ne réclame cependant aucune interdiction.\n\nEnfin, les deux documents mettent en avant le même risque : l'exclusion de ceux qui ne maîtrisent pas l'anglais, que ce soit face à la publicité ou en réunion. Ils invitent ainsi à choisir ses mots en fonction de son public plutôt qu'à rejeter les emprunts par principe.\n\nAu-delà de leurs divergences, les deux documents se rejoignent donc sur l'essentiel." } });
})();
