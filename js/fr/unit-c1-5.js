/* Cours de français, unité C1-5 « History and memory / Histoire et mémoire » : les temps du récit historique
   (passé simple, présent de narration, futur dans le passé), reconnaître les temps littéraires (passé antérieur,
   subjonctif imparfait et plus-que-parfait), le discours d'hommage. Personnages fictifs, prénoms français. Faits
   vérifiables seulement : Lascaux découverte le 12 septembre 1940 par quatre adolescents, ouverte au public en 1948,
   fermée en 1963 sur décision d'André Malraux, réplique en 1983 puis nouveau centre en 2016, peintures de plus de
   17 000 ans ; Pierre Nora et les lieux de mémoire ; le 11 novembre, hommage à tous les morts pour la France depuis
   la loi de 2012 ; appel du 18 juin 1940 ; dates de l'histoire de France citées dans le vocabulaire. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "histoireFR", icon: "scroll", title: "History", title_fr: "L'histoire", level: "C1", words: [
    ["l'historien / l'historienne", "the historian (m) / (f)", "Les historiens confrontent les sources."],
    ["les archives", "the archives, records", "Elle a passé des mois dans les archives départementales."],
    ["la chronologie", "the chronology, the timeline", "Respectez la chronologie des événements."],
    ["l'époque", "the era, the period", "À l'époque, on voyageait à cheval."],
    ["le règne", "the reign", "Le règne de Louis XIV a duré soixante-douze ans."],
    ["la monarchie", "the monarchy", "La monarchie a été abolie en France en 1792."],
    ["la révolution", "the revolution", "La Révolution française a commencé en 1789."],
    ["la république", "the republic", "La Troisième République a duré de 1870 à 1940."],
    ["l'empire", "the empire", "Napoléon s'est fait sacrer empereur en 1804, au début du Premier Empire."],
    ["la guerre mondiale", "the world war", "Son grand-père a connu la Seconde Guerre mondiale."],
    ["l'armistice", "the armistice", "L'armistice a été signé le 11 novembre 1918."],
    ["la Résistance", "the (French) Resistance", "La Résistance s'est organisée dès 1940."],
    ["l'Occupation", "the (German) Occupation", "Sous l'Occupation, la vie quotidienne était très difficile."],
    ["la Libération", "the Liberation", "Paris a été libéré en août 1944, à la Libération."],
    ["la décolonisation", "decolonisation", "La décolonisation s'est accélérée après 1945."],
    ["l'abolition", "the abolition", "L'esclavage a été définitivement aboli en France en 1848."],
    ["la frise chronologique", "the timeline (drawn)", "Les élèves complètent une frise chronologique."],
    ["le témoignage", "the testimony, the account", "Les témoignages des anciens combattants sont précieux."]
  ] },
  { id: "memoireFR", icon: "landmark", title: "Memory and heritage", title_fr: "Mémoire et patrimoine", level: "C1", words: [
    ["la mémoire collective", "collective memory", "Cet événement a marqué la mémoire collective."],
    ["le devoir de mémoire", "the duty to remember", "Le devoir de mémoire est souvent invoqué à l'école."],
    ["la commémoration", "the commemoration", "La commémoration a eu lieu devant la mairie."],
    ["commémorer", "to commemorate", "Le 8 mai, on commémore la fin de la guerre en Europe."],
    ["le monument aux morts", "the war memorial", "Presque chaque commune de France a son monument aux morts."],
    ["la plaque commémorative", "the commemorative plaque", "Une plaque commémorative rappelle sa naissance ici."],
    ["le lieu de mémoire", "the site of memory", "Ce village détruit est devenu un lieu de mémoire."],
    ["la cérémonie", "the ceremony", "La cérémonie s'est déroulée en silence."],
    ["l'oubli", "oblivion, forgetting", "Ces poèmes ont été sauvés de l'oubli."],
    ["la repentance", "repentance, public apology", "Le débat sur la repentance divise les historiens."],
    ["la réconciliation", "reconciliation", "La réconciliation franco-allemande a pris des années."],
    ["le patrimoine", "heritage", "Les Journées européennes du patrimoine ont lieu chaque année en septembre."],
    ["restaurer", "to restore", "Il a fallu cinq ans pour restaurer la cathédrale."],
    ["le vestige", "the remains, the trace", "On a retrouvé les vestiges d'une villa romaine."],
    ["les fouilles", "the excavation, the dig", "Les fouilles ont commencé au printemps."],
    ["l'archéologue", "the archaeologist", "L'archéologue a daté les objets."],
    ["la grotte", "the cave", "La grotte est fermée au public."],
    ["l'art pariétal", "cave art", "L'art pariétal est l'une des plus anciennes formes d'art."]
  ] });

  W.LESSONS.push(
  {
    id: 117, level: "C1", icon: "history",
    title: "Il allait devenir empereur: telling history", title_fr: "Il allait devenir empereur : les temps du récit historique",
    subtitle: "Passé simple and imparfait, the historic present, and looking ahead from the past.", subtitle_fr: "Passé simple et imparfait, présent de narration, et le regard vers l'avenir depuis le passé.",
    body: `
<h2>Passé simple and imparfait: the written past</h2>
<p>In history books and formal narratives, the passé simple tells the events, the imparfait the background: <s-fr>En 1788, la France traversait une grave crise financière : le roi convoqua les états généraux.</s-fr></p>
<h2>The historic present</h2>
<p>To make a narrative vivid, as in many textbooks and documentaries: <s-fr>Le 14 juillet 1789, les Parisiens prennent la Bastille.</s-fr> With the historic present, the future looks ahead: <s-fr>La Troisième République naît en 1870 ; elle durera soixante-dix ans.</s-fr></p>
<h2>The future in the past</h2>
<p>From a moment in the past, to look ahead: <s-fr>allait</s-fr> + infinitive (was going to): <s-fr>Ce jeune officier allait devenir empereur.</s-fr> · <s-fr>devait</s-fr> + infinitive (was to, destiny): <s-fr>Il devait mourir en exil.</s-fr> · the conditional: <s-fr>Personne ne savait que la guerre durerait quatre ans.</s-fr></p>
<div class="tip">Choose one system per text and keep to it: passé simple and imparfait (literary, formal), présent and futur (textbooks, documentaries), or passé composé and imparfait (speech, everyday writing). Mixing them is the most common mistake in a historical account.</div>
`,
    examples: [
      ["En 1788, la France traversait une grave crise financière.", "In 1788, France was going through a serious financial crisis."],
      ["Le roi convoqua les états généraux.", "The king summoned the Estates-General."],
      ["Le 14 juillet 1789, les Parisiens prennent la Bastille.", "On 14 July 1789, the people of Paris take the Bastille."],
      ["La Troisième République naît en 1870 ; elle durera soixante-dix ans.", "The Third Republic is born in 1870; it will last seventy years."],
      ["Ce jeune officier allait devenir empereur.", "This young officer was going to become emperor."],
      ["Il devait mourir en exil.", "He was to die in exile."],
      ["Personne ne savait que la guerre durerait quatre ans.", "Nobody knew the war would last four years."]
    ],
    quiz: [
      { q: "In a formal historical account, the background goes in:", o: ["the imparfait", "the passé simple", "the future"], a: 0, ex: "Passé simple for events, imparfait for the background." },
      { q: "“He was going to become famous” is:", o: ["Il allait devenir célèbre.", "Il va devenir célèbre.", "Il est allé devenir célèbre."], a: 0, ex: "allait + infinitive: the future in the past." },
      { q: "“Nobody knew it would last” is:", o: ["Personne ne savait que ça durerait.", "Personne ne savait que ça durera.", "Personne ne savait que ça dure."], a: 0, ex: "Future in the past: conditional." },
      { q: "In Le 14 juillet 1789, les Parisiens prennent la Bastille, the present is:", o: ["the historic present", "a mistake", "the future"], a: 0, ex: "It makes the narrative vivid." },
      { q: "Il devait mourir en exil means:", o: ["He was to die in exile.", "He had to die in exile.", "He should have died in exile."], a: 0, ex: "devait + infinitive: destiny, seen from the past." }
    ]
  },
  {
    id: 118, level: "C1", icon: "feather",
    title: "Qu'il fût, il eût fallu: recognising literary tenses", title_fr: "Qu'il fût, il eût fallu : reconnaître les temps littéraires",
    subtitle: "The passé antérieur and the imperfect and pluperfect subjunctive: read them, and know their modern equivalents.", subtitle_fr: "Le passé antérieur, le subjonctif imparfait et plus-que-parfait : les lire, et connaître leurs équivalents modernes.",
    body: `
<h2>The passé antérieur</h2>
<p><s-fr>eut</s-fr> / <s-fr>fut</s-fr> + past participle, with a passé simple: <s-fr>Quand il eut terminé, il sortit.</s-fr> (when he had finished) · <s-fr>Dès qu'elle fut partie, ils se mirent à rire.</s-fr> Today: <s-fr>Après avoir terminé, il est sorti.</s-fr></p>
<h2>The imperfect subjunctive</h2>
<p>Mostly met in the third person singular, with a circumflex: <s-fr>qu'il fût</s-fr>, <s-fr>qu'il eût</s-fr>, <s-fr>qu'il fît</s-fr>, <s-fr>qu'il vînt</s-fr>, <s-fr>qu'il pût</s-fr>, <s-fr>qu'il chantât</s-fr>, <s-fr>qu'il finît</s-fr>, <s-fr>qu'il prît</s-fr>. <s-fr>Il fallait qu'il partît.</s-fr> Today: <s-fr>Il fallait qu'il parte.</s-fr></p>
<h2>The pluperfect subjunctive</h2>
<p><s-fr>qu'il eût fini</s-fr>, <s-fr>qu'il fût parti</s-fr>. It also serves as a literary past conditional: <s-fr>Il eût fallu agir</s-fr> = <s-fr>il aurait fallu agir</s-fr> · <s-fr>Eût-il su, il serait venu</s-fr> = <s-fr>s'il avait su, il serait venu</s-fr>.</p>
<h2>Telling them apart</h2>
<p>The circumflex makes the difference: <s-fr>il fut</s-fr> (passé simple) / <s-fr>qu'il fût</s-fr> (subjunctive) · <s-fr>il eut</s-fr> / <s-fr>il eût</s-fr>.</p>
<div class="tip">You don't need to use these tenses: recognise them in Hugo, Proust or Yourcenar, and in formal speeches. Two survive in elegant speech: <s-fr>il eût fallu</s-fr> and <s-fr>fût-ce</s-fr> (even if only): <s-fr>Restez, fût-ce un instant.</s-fr></div>
`,
    examples: [
      ["Quand il eut terminé, il sortit.", "When he had finished, he went out."],
      ["Dès qu'elle fut partie, ils se mirent à rire.", "As soon as she had left, they started laughing."],
      ["Il fallait qu'il partît avant l'aube.", "He had to leave before dawn."],
      ["Bien qu'il fût malade, il continua d'écrire.", "Although he was ill, he went on writing."],
      ["Il eût fallu agir plus tôt.", "Action should have been taken sooner."],
      ["Eût-il su, il serait venu.", "Had he known, he would have come."],
      ["Restez, fût-ce un instant.", "Stay, if only for a moment."]
    ],
    quiz: [
      { q: "Il eût fallu agir means:", o: ["Il aurait fallu agir.", "Il a fallu agir.", "Il faut agir."], a: 0, ex: "Pluperfect subjunctive used as a past conditional." },
      { q: "Quand il eut terminé, il sortit. The first verb is:", o: ["a passé antérieur", "an imperfect subjunctive", "a conditional"], a: 0, ex: "eut + past participle, with a passé simple." },
      { q: "The modern equivalent of Il fallait qu'il partît is:", o: ["Il fallait qu'il parte.", "Il fallait qu'il partait.", "Il fallait qu'il partira."], a: 0, ex: "Today, the present subjunctive replaces the imperfect subjunctive." },
      { q: "Which is a subjunctive?", o: ["qu'il fût", "il fut", "il fit"], a: 0, ex: "The circumflex marks the imperfect subjunctive." },
      { q: "Eût-il su, il serait venu means:", o: ["Had he known, he would have come.", "He knew, so he came.", "He will know and come."], a: 0, ex: "= S'il avait su." }
    ]
  },
  {
    id: 119, level: "C1", kind: "functional", icon: "flower",
    title: "Everyday French: paying tribute in a speech", title_fr: "Le français de tous les jours : rendre hommage dans un discours",
    subtitle: "Open a ceremony, recall a life or an event, pass it on, and close with dignity.", subtitle_fr: "Ouvrir une cérémonie, évoquer une vie ou un événement, transmettre, et conclure avec dignité.",
    body: `
<h2>Opening</h2>
<p><s-fr>Mesdames et Messieurs, chers amis,</s-fr> · <s-fr>Nous sommes réunis aujourd'hui pour…</s-fr></p>
<h2>Paying tribute</h2>
<p><s-fr>rendre hommage à</s-fr> · <s-fr>saluer la mémoire de</s-fr> · <s-fr>honorer</s-fr> · <s-fr>Nous pensons aujourd'hui à…</s-fr> · <s-fr>Nous n'oublions pas…</s-fr></p>
<h2>Recalling</h2>
<p>Speeches often use the passé simple or the historic present: <s-fr>Le 11 novembre 1918, à onze heures, les cloches sonnèrent dans toute la France.</s-fr> A concrete detail moves more than a list of qualities.</p>
<h2>Passing on</h2>
<p><s-fr>transmettre aux jeunes générations</s-fr> · <s-fr>Il nous appartient de…</s-fr> (it is up to us to) · <s-fr>Que leur exemple nous inspire.</s-fr> (que + subjunctive: a wish)</p>
<h2>Closing</h2>
<p><s-fr>Je vous invite à observer une minute de silence.</s-fr> · <s-fr>Je vous remercie.</s-fr></p>
<div class="tip">A tribute is short. Three parts are enough: why we're here, one or two concrete memories, what we take from them. Avoid superlatives in a row: one true anecdote says more than five adjectives.</div>
`,
    examples: [
      ["Nous sommes réunis aujourd'hui pour honorer leur mémoire.", "We are gathered here today to honour their memory."],
      ["Nous saluons la mémoire de ceux qui sont tombés.", "We salute the memory of those who fell."],
      ["Le 11 novembre 1918, à onze heures, les cloches sonnèrent dans toute la France.", "On 11 November 1918, at eleven o'clock, bells rang all over France."],
      ["Il nous appartient de transmettre ce souvenir.", "It is up to us to pass on this memory."],
      ["Que leur exemple nous inspire.", "May their example inspire us."],
      ["Je vous invite à observer une minute de silence.", "I invite you to observe a minute's silence."]
    ],
    quiz: [
      { q: "“It is up to us to remember” is:", o: ["Il nous appartient de nous souvenir.", "Il nous appartient à nous souvenir.", "Il est à nous de nous souvenir."], a: 0, ex: "il nous appartient de + infinitive." },
      { q: "“May their courage inspire us” is:", o: ["Que leur courage nous inspire.", "Que leur courage nous inspirer.", "Que leur courage nous inspirera."], a: 0, ex: "que + subjunctive: a wish." },
      { q: "“I invite you to observe a minute's silence” is:", o: ["Je vous invite à observer une minute de silence.", "Je vous invite d'observer une minute de silence.", "Je vous invite pour observer une minute de silence."], a: 0, ex: "inviter à." },
      { q: "A good tribute speech is:", o: ["short, with a concrete memory", "long, with many superlatives", "a list of dates"], a: 0, ex: "One true anecdote says more than five adjectives." },
      { q: "Saluer la mémoire de quelqu'un means:", o: ["to pay tribute to someone who has died", "to say hello to someone", "to remember someone's address"], a: 0, ex: "A formal way of paying tribute." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    117: {
      gap: [["En 1788, la France ___ une grave crise. (traverser, imparfait)", "traversait"], ["Le roi ___ les états généraux. (convoquer, passé simple)", "convoqua"], ["Ce jeune officier ___ devenir empereur. (was going to)", "allait"], ["Personne ne savait que la guerre ___ quatre ans. (durer, conditional)", "durerait"]],
      fix: [["Le 14 juillet 1789, les Parisiens prirent la Bastille ; ils sont en colère depuis des mois.", "Le 14 juillet 1789, les Parisiens prirent la Bastille ; ils étaient en colère depuis des mois.", "With the passé simple, the background goes in the imparfait: don't slip into the present."], ["Il ne savait pas qu'il deviendra célèbre.", "Il ne savait pas qu'il deviendrait célèbre.|Il ne savait pas qu'il allait devenir célèbre.", "Future in the past: conditional, or allait + infinitive."]],
      task: ["Tell a historical event in five sentences, with the passé simple, the imparfait and a future in the past.", "Raconte un événement historique en cinq phrases, avec le passé simple, l'imparfait et un futur dans le passé.", "En 1940, la France était occupée et beaucoup pensaient que la guerre était perdue. Le 18 juin, depuis Londres, le général de Gaulle lança un appel à la radio. Peu de gens l'entendirent ce soir-là. Personne ne pouvait savoir que ce discours deviendrait un symbole. Quatre ans plus tard, de Gaulle allait entrer dans Paris libéré."]
    },
    118: {
      gap: [["Quand il ___ terminé, il sortit. (avoir, passé antérieur)", "eut"], ["Il fallait qu'il ___ prudent. (être, imperfect subjunctive)", "fût"], ["Il ___ fallu agir plus tôt. (= il aurait fallu)", "eût"], ["Bien qu'il ___ malade, il continua d'écrire. (être, imperfect subjunctive)", "fût"]],
      fix: [["Il fallait qu'il était à l'heure.", "Il fallait qu'il fût à l'heure.|Il fallait qu'il soit à l'heure.", "il fallait que + subjunctive: fût in literary French, soit today."], ["Quand il eut fini, il sort.", "Quand il eut fini, il sortit.", "The passé antérieur goes with a passé simple in the main clause."]],
      task: ["Rewrite this literary sentence in modern French: Quoiqu'il fût fatigué, il voulut qu'on lui lût la lettre avant qu'il ne partît.", "Réécris cette phrase littéraire en français moderne : Quoiqu'il fût fatigué, il voulut qu'on lui lût la lettre avant qu'il ne partît.", "Bien qu'il soit fatigué, il a voulu qu'on lui lise la lettre avant de partir."]
    },
    119: {
      gap: [["Nous sommes ___ aujourd'hui pour honorer leur mémoire. (gathered)", "réunis"], ["Je vous invite à ___ une minute de silence. (observe)", "observer"], ["Nous ___ la mémoire de ceux qui sont tombés. (salute)", "saluons"], ["Que leur exemple nous ___. (inspirer, subjunctive)", "inspire"]],
      fix: [["Je vous invite d'observer une minute de silence.", "Je vous invite à observer une minute de silence.", "inviter quelqu'un à faire quelque chose."], ["Nous rendons hommage pour les victimes.", "Nous rendons hommage aux victimes.", "rendre hommage à."]],
      task: ["Write the opening and the closing of a short speech for a ceremony in honour of a village's former doctor.", "Écris l'ouverture et la conclusion d'un court discours pour une cérémonie en l'honneur de l'ancien médecin d'un village.", "Mesdames et Messieurs, chers amis, nous sommes réunis aujourd'hui pour rendre hommage au docteur Simon, qui soigna les habitants de ce village pendant quarante ans. […] Il nous appartient désormais de transmettre son exemple aux jeunes générations. Que son dévouement nous inspire. Je vous remercie."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "hommage", lesson: 119, level: "C1", icon: "flower", partner: "Gilles", role: "the mayor of the village",
    title: "Preparing a tribute", title_fr: "Préparer un hommage",
    setting: "On Saturday, the village will unveil a plaque in honour of Madeleine, a former teacher who founded the village library. Gilles, the mayor, has asked you to say a few words, and he calls you to prepare.", setting_fr: "Samedi, le village dévoilera une plaque en l'honneur de Madeleine, ancienne institutrice qui a fondé la bibliothèque. Gilles, le maire, t'a demandé de dire quelques mots et il t'appelle pour préparer.",
    turns: [
      { p: "Merci d'avoir accepté de prendre la parole samedi. Comment voulez-vous commencer ?", fr: "Thank you for agreeing to speak on Saturday. How would you like to begin?" },
      { y: ["Par une phrase simple : nous sommes réunis aujourd'hui pour rendre hommage à Madeleine.", "Par une phrase simple : nous sommes réunis aujourd'hui pour rendre hommage pour Madeleine.", "Par une phrase simple : nous sommes réunis aujourd'hui pour rendre l'hommage de Madeleine."], fr: "With a simple sentence: we are gathered here today to pay tribute to Madeleine.", why: "rendre hommage à quelqu'un." },
      { p: "Très bien. Et ensuite ?", fr: "Very good. And then?" },
      { y: ["Je rappellerai qu'elle enseigna quarante ans dans ce village et qu'elle y fonda la bibliothèque.", "Je rappellerai qu'elle enseigna quarante ans dans ce village et qu'elle y fondit la bibliothèque.", "Je rappellerai qu'elle enseigna quarante ans dans ce village et qu'elle y fondut la bibliothèque."], fr: "I'll recall that she taught in this village for forty years and founded the library here.", why: "fonder → elle fonda; fondit comes from fondre (to melt)." },
      { p: "Beaucoup d'anciens élèves seront là. Vous voulez leur dire un mot ?", fr: "Many former pupils will be there. Would you like to say a word to them?" },
      { y: ["Oui : je saluerai tous ceux qui lui doivent leur goût de la lecture, et ils sont nombreux.", "Oui : je saluerai tous ceux à qui lui doivent leur goût de la lecture, et ils sont nombreux.", "Oui : je saluerai tous ceux qui lui doivent leur goût de la lecture, et ils en sont nombreux."], fr: "Yes: I'll salute all those who owe her their love of reading, and there are many of them.", why: "ceux qui (subject); ils sont nombreux, without en." },
      { p: "Et pour conclure ?", fr: "And to conclude?" },
      { y: ["Je dirai que si elle était encore parmi nous, elle nous demanderait sans doute d'ouvrir un livre plutôt que d'écouter un discours !", "Je dirai que si elle serait encore parmi nous, elle nous demanderait sans doute d'ouvrir un livre plutôt que d'écouter un discours !", "Je dirai que si elle était encore parmi nous, elle nous demandait sans doute d'ouvrir un livre plutôt que d'écouter un discours !"], fr: "I'll say that if she were still with us, she'd probably ask us to open a book rather than listen to a speech!", why: "si + imparfait, then the conditional." },
      { p: "Parfait. Il faudra que ce soit court : cinq minutes au plus.", fr: "Perfect. It'll have to be short: five minutes at most." },
      { y: ["Rassurez-vous : je m'efforcerai de faire court, à l'image de Madeleine, qui détestait les longs discours.", "Rassurez-vous : je m'efforcerai à faire court, à l'image de Madeleine, qui détestait les longs discours.", "Rassurez-vous : je m'efforcerai de faire court, à l'image de Madeleine, que détestait les longs discours."], fr: "Don't worry: I'll make sure to keep it short, like Madeleine, who hated long speeches.", why: "s'efforcer de; qui as subject of détestait." }
    ] }
  );

  W.READINGS.push({
    id: "lascaux", level: "C1", icon: "mountain", title: "Lascaux, la grotte qu'on ne visite plus", genre: "Récit historique",
    intro: "Discovered in 1940, closed in 1963, copied ever since: the story of Lascaux raises a question every heritage site faces. Passé simple, future in the past, imperfect subjunctive.",
    intro_fr: "Découverte en 1940, fermée en 1963, copiée depuis : l'histoire de Lascaux pose une question que rencontre tout le patrimoine. Passé simple, futur dans le passé, subjonctif imparfait.",
    paragraphs: [
      { en: "Le 12 septembre 1940, quatre adolescents de Montignac, en Dordogne, se glissèrent dans une étroite cavité. Ce qu'ils découvrirent à la lueur de leur lampe allait bouleverser l'histoire de l'art : des centaines de figures d'animaux, peintes il y a plus de dix-sept mille ans.", fr: "On 12 September 1940, four teenagers from Montignac, in the Dordogne, slipped into a narrow opening. What they discovered by the light of their lamp was going to transform the history of art: hundreds of animal figures, painted more than seventeen thousand years ago." },
      { en: "Ouverte au public en 1948, la grotte attira bientôt des foules considérables. Mais la chaleur, l'humidité et le gaz carbonique apportés par les visiteurs eurent des effets que personne n'avait prévus : des algues, puis des taches, apparurent sur les parois.", fr: "Opened to the public in 1948, the cave soon drew huge crowds. But the heat, humidity and carbon dioxide brought in by visitors had effects no one had foreseen: algae, then stains, appeared on the walls." },
      { en: "En 1963, le ministre des Affaires culturelles, André Malraux, décida de la fermer. La décision fut critiquée, mais elle sauva sans doute les peintures. Depuis, seuls quelques spécialistes y pénètrent, et pour de courtes durées.", fr: "In 1963, the minister of cultural affairs, André Malraux, decided to close it. The decision was criticised, but it probably saved the paintings. Since then, only a few specialists go in, and for short periods." },
      { en: "Pour que le public pût continuer à admirer ces œuvres, on choisit de les reproduire : une première réplique ouvrit en 1983, puis un centre bien plus complet en 2016. Aujourd'hui, des centaines de milliers de visiteurs s'y pressent chaque année.", fr: "So that the public could go on admiring these works, the choice was made to reproduce them: a first replica opened in 1983, then a much more complete centre in 2016. Today, hundreds of thousands of visitors flock there every year." },
      { en: "L'histoire de Lascaux pose une question que rencontrent tous les lieux de mémoire : faut-il montrer au risque d'abîmer, ou protéger au risque d'oublier ? Lascaux a choisi une troisième voie : transmettre l'émotion par la copie, tout en gardant l'original dans l'ombre.", fr: "The story of Lascaux raises a question that every site of memory faces: should we show, at the risk of damaging, or protect, at the risk of forgetting? Lascaux chose a third way: passing on the emotion through the copy, while keeping the original in the dark." }
    ],
    glossary: { "glissèrent": "slipped (passé simple of se glisser)", "étroite": "narrow", "cavité": "cavity, opening", "lueur": "glimmer, light", "bouleverser": "to transform, to upset", "foules": "crowds", "humidité": "humidity, damp", "algues": "algae", "taches": "stains", "parois": "walls (of a cave)", "pénètrent": "go in, enter", "pût": "could (imperfect subjunctive of pouvoir)", "réplique": "replica", "pressent": "flock, crowd (se presser)", "abîmer": "to damage", "ombre": "shadow, darkness" },
    questions: [
      { q: "Qui a découvert la grotte de Lascaux, et quand ?", o: ["Quatre adolescents, en septembre 1940", "Un archéologue, en 1948", "André Malraux, en 1963"], a: 0 },
      { q: "Qu'est-ce qui a abîmé les parois de la grotte ?", o: ["La chaleur, l'humidité et le gaz carbonique apportés par les visiteurs", "Une inondation", "Des travaux de restauration"], a: 0 },
      { q: "Que décida André Malraux en 1963 ?", o: ["De fermer la grotte", "D'agrandir l'entrée", "De vendre la grotte"], a: 0 },
      { q: "Comment le public peut-il voir les peintures aujourd'hui ?", o: ["Grâce à des répliques", "En visitant la grotte originale", "Seulement en photo"], a: 0 },
      { q: "Quelle question pose l'histoire de Lascaux selon l'auteur ?", o: ["Faut-il montrer au risque d'abîmer, ou protéger au risque d'oublier ?", "Faut-il fermer tous les musées ?", "Qui a vraiment découvert la grotte ?"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-c1-5", unit: "c1-5", level: "C1", icon: "archive",
    title: "Histoire et mémoire : un entretien", title_fr: "Histoire et mémoire : un entretien",
    context: "On the radio, Hélène interviews Mathieu, a historian, about the difference between history and memory.", context_fr: "À la radio, Hélène interroge Mathieu, historien, sur la différence entre histoire et mémoire.",
    words: [["affectif", "emotional"], ["se méfier de", "to be wary of"], ["confronter", "to compare (sources)"], ["quitte à", "even if it means"], ["gravé", "engraved"]],
    lines: [["Hélène", "Monuments, commémorations, journées nationales : on parle beaucoup de devoir de mémoire. Mathieu, vous êtes historien. La mémoire et l'histoire, est-ce la même chose ?", "fr-FR"], ["Mathieu", "Pas du tout. L'historien Pierre Nora l'a bien montré : la mémoire est vivante, affective, portée par des groupes ; l'histoire, elle, est une reconstruction critique, qui se méfie des émotions.", "fr-FR"], ["Hélène", "Les deux peuvent donc entrer en conflit ?", "fr-FR"], ["Mathieu", "Bien sûr. Une famille, une région, un pays se souviennent de ce qui les a marqués, parfois en oubliant le reste. Le travail de l'historien consiste à confronter les sources, quitte à déranger.", "fr-FR"], ["Hélène", "Prenons le 11 novembre. Que commémore-t-on exactement ?", "fr-FR"], ["Mathieu", "À l'origine, l'armistice de 1918. Mais depuis 2012, la loi en fait aussi un jour d'hommage à tous les morts pour la France. Une même date peut donc changer de sens au fil du temps.", "fr-FR"], ["Hélène", "Et pour les jeunes, ce devoir de mémoire a-t-il encore du sens ?", "fr-FR"], ["Mathieu", "Je préfère parler de travail de mémoire. Un devoir, on l'accomplit parce qu'on y est obligé ; un travail, on le fait pour comprendre. Les élèves qui retrouvent l'histoire d'un nom gravé sur le monument de leur village s'en souviennent toute leur vie.", "fr-FR"]],
    gist: ["De quoi parle l'entretien ?", ["De la différence entre histoire et mémoire", "D'une découverte archéologique", "De la vie de Pierre Nora"]],
    detail: [["Selon Mathieu, comment est la mémoire ?", ["Vivante, affective, portée par des groupes", "Froide et objective", "Toujours exacte"]], ["En quoi consiste le travail de l'historien ?", ["À confronter les sources, quitte à déranger", "À célébrer les héros", "À écrire des discours"]], ["Qu'a changé la loi de 2012 pour le 11 novembre ?", ["C'est aussi un jour d'hommage à tous les morts pour la France.", "Ce n'est plus un jour férié.", "On ne commémore plus l'armistice."]], ["Pourquoi Mathieu préfère-t-il parler de travail de mémoire ?", ["Parce qu'un travail se fait pour comprendre", "Parce que le mot devoir est trop long", "Parce que les jeunes refusent les devoirs"]]],
    decode: ["la mémoire est vivante, affective, portée par des groupes", "Une même date peut donc changer de sens au fil du temps"],
    tip: "Intellectual interviews are built on contrasts: la mémoire… ; l'histoire, elle,… ; un devoir… ; un travail… Note each pair: together, they give you the speaker's whole argument.", tip_fr: "Les entretiens d'idées se construisent sur des oppositions : la mémoire… ; l'histoire, elle,… ; un devoir… ; un travail… Note chaque paire : ensemble, elles te donnent tout le raisonnement."
  }]);

  W.LEXIS = W.LEXIS || {};
  W.LEXIS["c1-5"] = {
    colloc: [
      ["saluer la mémoire de", "to pay tribute to (someone who has died)", "Le maire a salué la mémoire des victimes.", "salué", ["accueilli", "remercié"]],
      ["observer une minute de silence", "to observe a minute's silence", "L'assemblée a observé une minute de silence.", "observé", ["regardé", "surveillé"]],
      ["déposer une gerbe", "to lay a wreath", "La ministre a déposé une gerbe au pied du monument.", "déposé", ["mis", "lancé"]],
      ["tomber dans l'oubli", "to fall into oblivion", "Ce poète est tombé dans l'oubli.", "tombé", ["allé", "coulé"]],
      ["raviver la mémoire", "to revive the memory", "Ce film a ravivé la mémoire de la catastrophe.", "ravivé", ["rallumé", "ravi"]],
      ["marquer un tournant", "to mark a turning point", "Cette bataille a marqué un tournant dans la guerre.", "marqué", ["posé", "tenu"]],
      ["entrer dans l'histoire", "to go down in history", "Ce discours est entré dans l'histoire.", "entré", ["allé", "passé"]],
      ["écrire une page d'histoire", "to write a page of history", "Ce jour-là, ils ont écrit une page d'histoire.", "écrit", ["peint", "tracé"]],
      ["tirer un trait sur le passé", "to draw a line under the past", "Il a décidé de tirer un trait sur le passé.", "tirer", ["faire", "passer"]],
      ["classer un monument", "to list a building as historic", "Le château a été classé monument historique.", "classé", ["rangé", "trié"]]
    ],
    wf: [
      ["Cette ___ rend hommage aux victimes. (COMMÉMORER)", "commémoration"],
      ["Les ___ de l'époque sont précieux pour les historiens. (TÉMOIGNER)", "témoignages"],
      ["Ce bâtiment a une grande valeur ___. (HISTOIRE)", "historique"],
      ["L'___ de l'esclavage en France date de 1848. (ABOLIR)", "abolition"],
      ["La ___ des deux pays a pris des décennies. (RÉCONCILIER)", "réconciliation"],
      ["Ces fresques sont dans un état de ___ avancé. (DÉGRADER)", "dégradation"],
      ["Le château a été ___ restauré. (ENTIER)", "entièrement"],
      ["La ___ de la grotte a été décidée en 1963. (FERMER)", "fermeture"]
    ],
    kwt: [
      ["Il eût fallu agir plus tôt.", "AURAIT", "Il ___ plus tôt.", "aurait fallu agir"],
      ["Quand il eut terminé son discours, il quitta la salle.", "AYANT", "___ son discours, il quitta la salle.", "Ayant terminé"],
      ["Bien qu'il fût malade, il continua d'écrire.", "SOIT", "Bien qu'il ___, il continua d'écrire.", "soit malade"],
      ["Personne ne savait encore qu'il deviendrait président.", "ALLAIT", "Personne ne savait encore qu'il ___ président.", "allait devenir"],
      ["On a fermé la grotte en 1963.", "FERMÉE", "La grotte ___ en 1963.", "a été fermée"],
      ["Nous voulons honorer la mémoire de Madeleine.", "HOMMAGE", "Nous voulons ___ Madeleine.", "rendre hommage à"]
    ],
    idioms: [
      ["avoir une mémoire d'éléphant", "avoir une excellente mémoire", "to have a memory like an elephant", "Ma grand-mère a une mémoire d'éléphant.", "a une mémoire d'éléphant"],
      ["c'est de l'histoire ancienne", "c'est oublié, ça n'a plus d'importance", "that's ancient history", "Notre dispute ? C'est de l'histoire ancienne.", "C'est de l'histoire ancienne"],
      ["remonter au déluge", "être très ancien", "to go back to the year dot", "Cette tradition remonte au déluge.", "remonte au déluge"],
      ["passer à la postérité", "rester dans la mémoire des générations futures", "to go down to posterity", "Cette phrase est passée à la postérité.", "passée à la postérité"],
      ["franchir le Rubicon", "prendre une décision sans retour", "to cross the Rubicon", "En démissionnant, il a franchi le Rubicon.", "a franchi le Rubicon"],
      ["c'est la Bérézina", "c'est un désastre complet", "it's a total disaster", "Avec cette pluie, la fête du village, c'est la Bérézina.", "c'est la Bérézina"],
      ["vivre dans le passé", "rester attaché à une époque révolue", "to live in the past", "Il vit dans le passé et refuse tout changement.", "vit dans le passé"],
      ["pour la petite histoire", "à titre d'anecdote", "as an aside", "Pour la petite histoire, le tableau a été retrouvé dans un grenier.", "Pour la petite histoire"]
    ]
  };

  W.PROMPTS.push({ id: "fr-c1-5", level: "C1", q: "Quel événement historique aimerais-tu mieux comprendre, et pourquoi ?", fr: "Which historical event would you like to understand better, and why?", time: 180,
    phrases: ["J'aimerais mieux comprendre…", "allait…", "Personne ne savait que…", "Il eût fallu…", "c'est en… qu'on comprend…"],
    model: "J'aimerais mieux comprendre la Révolution française. On m'en a appris les grandes dates, mais je n'en saisis pas encore toute la complexité. Comment une crise financière se transforma-t-elle en quelques mois en bouleversement politique ? Les révolutionnaires savaient-ils qu'ils allaient changer l'Europe entière ? Personne ne pouvait le prévoir, je crois. Il faudrait lire les témoignages de l'époque plutôt que les manuels : c'est en découvrant les doutes des acteurs qu'on comprend qu'aucune issue n'était écrite d'avance." });

  W.WRITING_GUIDE["c1-5"] = { genre: "An argued essay: a speech (DALF C1)", genre_fr: "Un essai argumenté : un discours (DALF C1)",
    plan: [["Address the audience and ask the question.", "Adresse-toi au public et pose la question."], ["Concede the strongest argument of the other side.", "Concède l'argument le plus fort du camp adverse."], ["Put your counter-argument.", "Avance ton contre-argument."], ["Propose a third way.", "Propose une troisième voie."], ["End with a wish and thank the audience.", "Termine par un souhait et remercie le public."]],
    marks: [["qu'on ne saurait honorer", "ne saurait: formal negation", "ne saurait : négation soutenue"], ["Aussi comprend-on", "aussi + inversion", "aussi + inversion"], ["plus simple qu'elle ne le fut réellement", "passé simple and expletive ne", "passé simple et ne explétif"], ["Il s'agit d'expliquer plutôt que d'effacer", "the proposal", "la proposition"], ["Il nous appartient donc de", "a call to responsibility", "un appel à la responsabilité"], ["Que nos enfants", "que + subjunctive: a wish", "que + subjonctif : un souhait"]] };

  W.COURSE.push({ id: "c1-5", level: "C1", icon: "landmark", title: "History and memory", title_fr: "Histoire et mémoire",
    intro: "In this unit, you'll talk about the past and what we do with it: the tenses of historical narrative (passé simple, historic present, future in the past), recognising literary tenses (qu'il fût, il eût fallu), and paying tribute in a speech.",
    intro_fr: "Dans cette unité, tu vas parler du passé et de ce que nous en faisons : les temps du récit historique (passé simple, présent de narration, futur dans le passé), la reconnaissance des temps littéraires (qu'il fût, il eût fallu) et l'hommage dans un discours.",
    can: ["Tell a historical event with consistent tenses", "Look ahead from the past (allait, devait, the conditional)", "Recognise the passé antérieur and the literary subjunctive", "Discuss heritage, memory and how societies remember", "Write a speech on a question of memory"],
    can_fr: ["Raconter un événement historique avec des temps cohérents", "Regarder vers l'avenir depuis le passé (allait, devait, le conditionnel)", "Reconnaître le passé antérieur et le subjonctif littéraire", "Débattre du patrimoine, de la mémoire et de la façon dont les sociétés se souviennent", "Rédiger un discours sur une question de mémoire"],
    lessons: [117, 118, 119], vocab: ["histoireFR", "memoireFR"], reading: "lascaux", prompt: "fr-c1-5",
    writing: { task: "Should we keep every monument from the past, even those honouring figures now contested? Write a speech (250-300 words) for a public debate in your town.", task_fr: "Faut-il conserver tous les monuments du passé, même ceux qui honorent des personnages aujourd'hui contestés ? Rédige un discours (250 à 300 mots) pour un débat public dans ta ville.", words: "250-300",
      tips: ["Mesdames et Messieurs, …", "Il est vrai que…", "Pour autant, …", "Il s'agit de… plutôt que de…", "Il nous appartient de…"],
      checklist: ["I addressed the audience", "I conceded the other side's strongest argument", "I put a clear counter-argument", "I proposed a third way", "I used at least two formal structures (inversion, ne saurait, que + subjunctive)", "I wrote between 250 and 300 words"],
      model: "Mesdames et Messieurs,\n\nFaut-il déboulonner les statues de ceux que notre époque juge sévèrement ? La question, qui agite aujourd'hui de nombreux pays, mérite mieux que des réponses toutes faites.\n\nIl est vrai que l'espace public n'est pas un musée. Une statue ne se contente pas de rappeler qu'une personne a existé : elle l'honore. Or, il est des figures qu'on ne saurait honorer sans blesser une partie des citoyens. Aussi comprend-on que certains réclament leur retrait. Leur colère mérite d'être entendue.\n\nPour autant, effacer les traces du passé ne le rend pas meilleur. Les monuments témoignent aussi de ce qu'une société a choisi de célébrer à une époque donnée, et c'est précisément ce qui les rend instructifs. Une statue contestée peut devenir le point de départ d'une leçon d'histoire, à condition qu'on prenne le temps de l'expliquer. Les faire disparaître, ce serait se priver d'une occasion d'apprendre, voire laisser croire que l'histoire fut plus simple qu'elle ne le fut réellement.\n\nEntre la destruction et le statu quo, une troisième voie existe. Il s'agit d'expliquer plutôt que d'effacer : installer des panneaux qui replacent chaque monument dans son contexte, donner la parole aux historiens et, lorsque cela s'impose, déplacer certaines œuvres vers des musées, où elles seront présentées avec le recul nécessaire.\n\nIl nous appartient donc de faire de ces monuments non plus des objets de culte, mais des outils de compréhension. Que nos enfants, en passant devant une statue, se posent des questions plutôt qu'ils ne baissent les yeux : voilà, me semble-t-il, l'ambition que nous devrions partager.\n\nJe vous remercie." } });
})();
