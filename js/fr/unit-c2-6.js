/* Cours de français, unité C2-6 « Art and the eye / Arts et regards » : les relatives complexes (au sein duquel, à
   l'issue de laquelle, dont, quiconque, qui sans antécédent), les figures de style avancées (anaphore, chiasme,
   gradation, prétérition, zeugme), prononcer un discours. Personnages fictifs, prénoms français. Faits vérifiables
   seulement : vol de la Joconde le lundi 21 août 1911 (jour de fermeture du Louvre), Apollinaire brièvement
   incarcéré, Picasso entendu, Vincenzo Peruggia, vitrier ayant travaillé au Louvre, arrêté à Florence en décembre
   1913 ; la Joconde est peinte sur bois ; le Louvre limite sa fréquentation à 30 000 visiteurs par jour depuis 2023 ;
   Molière, L'Avare (« il faut manger pour vivre et non pas vivre pour manger ») ; Corneille, Le Cid (« Va, cours,
   vole, et nous venge ») ; discours du général de Gaulle à l'Hôtel de Ville de Paris, 25 août 1944. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "artFR", icon: "palette", title: "Art and museums", title_fr: "L'art et les musées", level: "C2", words: [
    ["le tableau", "the painting; the board, the table (chart)", "Ce tableau est exposé au premier étage."],
    ["la sculpture", "sculpture", "La sculpture domine la cour du musée."],
    ["le mécène", "the patron (of the arts)", "Un mécène a financé la restauration."],
    ["le mécénat", "arts patronage, sponsorship", "Le mécénat d'entreprise soutient de nombreux musées."],
    ["la rétrospective", "the retrospective", "Le musée consacre une rétrospective à cette photographe."],
    ["l'installation", "the installation (artwork)", "Cette installation occupe toute une salle."],
    ["l'art contemporain", "contemporary art", "L'art contemporain divise le public."],
    ["la performance", "the performance (art)", "La performance a duré six heures."],
    ["le portrait", "the portrait", "Ce portrait a été peint en trois séances."],
    ["l'abstraction", "abstraction, abstract art", "Le peintre est passé de la figuration à l'abstraction."],
    ["le trompe-l'œil", "the trompe-l'œil (illusionist painting)", "La façade est ornée d'un trompe-l'œil."],
    ["la perspective", "perspective", "La perspective est née à la Renaissance italienne."],
    ["le clair-obscur", "chiaroscuro", "Le clair-obscur donne du relief aux visages."],
    ["l'impressionnisme", "Impressionism", "L'impressionnisme a d'abord été moqué."],
    ["le cubisme", "Cubism", "Picasso et Braque ont inventé le cubisme."],
    ["le surréalisme", "Surrealism", "Le surréalisme explore le rêve et l'inconscient."],
    ["l'affluence", "the crowds, the attendance", "L'affluence a battu tous les records."],
    ["le surtourisme", "overtourism", "Le surtourisme menace certains sites."]
  ] },
  { id: "regardFR", icon: "eye", title: "Aesthetics", title_fr: "L'esthétique", level: "C2", words: [
    ["l'esthétique", "aesthetics", "L'esthétique du film est très soignée."],
    ["le goût", "taste", "Des goûts et des couleurs, on ne discute pas."],
    ["la beauté", "beauty", "La beauté du lieu a ému les visiteurs."],
    ["le sublime", "the sublime", "Les romantiques recherchaient le sublime dans la nature."],
    ["la contemplation", "contemplation", "Ce tableau invite à la contemplation."],
    ["l'harmonie", "harmony", "L'harmonie des couleurs est remarquable."],
    ["la composition", "the composition", "La composition repose sur une diagonale."],
    ["le regard", "the gaze, the look; the eye (of an artist)", "Ce photographe porte un regard tendre sur ses sujets."],
    ["émouvoir", "to move (emotionally)", "Cette œuvre a profondément ému le public."],
    ["saisissant", "striking", "Le contraste est saisissant."],
    ["dérangeant", "disturbing", "Cette installation est volontairement dérangeante."],
    ["épuré", "pared-down, minimalist", "Le décor est épuré."],
    ["foisonnant", "teeming, abundant", "Ce tableau foisonnant fourmille de détails."],
    ["chatoyant", "shimmering", "Les couleurs chatoyantes attirent l'œil."],
    ["le chef de file", "the leader (of a movement)", "Monet est considéré comme le chef de file de l'impressionnisme."],
    ["l'avant-garde", "the avant-garde", "Ces artistes formaient l'avant-garde de leur époque."],
    ["l'académisme", "academicism", "Les impressionnistes ont rompu avec l'académisme."],
    ["le coup de pinceau", "the brushstroke", "On reconnaît son coup de pinceau entre mille."]
  ] });

  W.LESSONS.push(
  {
    id: 150, level: "C2", icon: "frame",
    title: "Au sein duquel, quiconque, qui vivra verra: complex relative clauses", title_fr: "Au sein duquel, quiconque, qui vivra verra : les relatives complexes",
    subtitle: "Relatives after compound prepositions, dont inside the clause, and relatives with no antecedent.", subtitle_fr: "Les relatives après une préposition composée, dont dans la relative, et les relatives sans antécédent.",
    body: `
<h2>After a compound preposition: duquel, de laquelle</h2>
<p><s-fr>au sein duquel</s-fr>, <s-fr>à l'issue de laquelle</s-fr>, <s-fr>au cours desquels</s-fr>, <s-fr>près duquel</s-fr>, <s-fr>grâce auquel</s-fr>: <s-fr>la réunion à l'issue de laquelle un accord a été trouvé</s-fr>. Here <s-fr>dont</s-fr> is impossible: it can't follow a preposition.</p>
<h2>Dont inside the clause</h2>
<p><s-fr>dont</s-fr> can be the complement of a noun in the relative clause, without a possessive: <s-fr>une artiste dont l'œuvre a longtemps été méconnue</s-fr> (not <s-fr>dont son œuvre</s-fr>). With people after a preposition, prefer <s-fr>qui</s-fr>: <s-fr>ceux sans qui ce projet n'aurait pas vu le jour</s-fr>.</p>
<h2>No antecedent</h2>
<p><s-fr>qui</s-fr> alone means whoever, in proverbs and formal style: <s-fr>Qui vivra verra.</s-fr> · <s-fr>Rira bien qui rira le dernier.</s-fr> · <s-fr>Qui veut la regarder doit s'armer de patience.</s-fr> · <s-fr>quiconque</s-fr> (anyone who, whoever): <s-fr>Quiconque touchera les œuvres sera exclu.</s-fr></p>
<h2>Lequel to avoid ambiguity</h2>
<p><s-fr>J'ai écrit au frère de Julie, lequel m'a répondu.</s-fr> (the brother replied; qui could refer to Julie) · <s-fr>Il prévint un marchand de Florence, lequel alerta la police.</s-fr></p>
<div class="tip">To choose, look at the verb or the noun: <s-fr>parler de</s-fr> → dont; <s-fr>au sein de</s-fr> → au sein duquel; <s-fr>grâce à</s-fr> → grâce auquel, or grâce à qui for a person.</div>
`,
    examples: [
      ["La réunion à l'issue de laquelle un accord a été trouvé a duré six heures.", "The meeting at the end of which an agreement was reached lasted six hours."],
      ["Ce collectif, au sein duquel tous sont bénévoles, compte vingt artistes.", "This collective, in which everyone is a volunteer, has twenty artists."],
      ["C'est une artiste dont l'œuvre a longtemps été méconnue.", "She's an artist whose work was long overlooked."],
      ["Je remercie tous ceux sans qui ce projet n'aurait pas vu le jour.", "I thank everyone without whom this project would never have happened."],
      ["Qui vivra verra.", "Time will tell."],
      ["Quiconque touchera les œuvres sera exclu.", "Anyone who touches the works will be asked to leave."],
      ["Il prévint un marchand de Florence, lequel alerta la police.", "He contacted a dealer in Florence, who alerted the police."]
    ],
    quiz: [
      { q: "“The meeting at the end of which…” is:", o: ["la réunion à l'issue de laquelle…", "la réunion à l'issue dont…", "la réunion dont à l'issue…"], a: 0, ex: "After a compound preposition: de laquelle." },
      { q: "“A painter whose works are famous” is:", o: ["un peintre dont les œuvres sont célèbres", "un peintre dont ses œuvres sont célèbres", "un peintre que les œuvres sont célèbres"], a: 0, ex: "dont + noun, without a possessive." },
      { q: "“Those without whom nothing would have happened” is:", o: ["ceux sans qui rien ne se serait passé", "ceux sans que rien ne se serait passé", "ceux dont sans rien ne se serait passé"], a: 0, ex: "With people: preposition + qui." },
      { q: "Qui vivra verra means:", o: ["Time will tell.", "Whoever lives sees.", "Who lives here?"], a: 0, ex: "qui without an antecedent = whoever." },
      { q: "“Anyone who lies will be punished” is:", o: ["Quiconque mentira sera puni.", "Quiconque qui mentira sera puni.", "Qui que ce soit mentira sera puni."], a: 0, ex: "quiconque already includes the relative." }
    ]
  },
  {
    id: 151, level: "C2", icon: "sparkles",
    title: "Anaphora, chiasmus, gradation: advanced figures of speech", title_fr: "Anaphore, chiasme, gradation : les figures de style avancées",
    subtitle: "The rhetorical devices of great speeches and great texts, to recognise and to use.", subtitle_fr: "Les procédés des grands discours et des grands textes, à reconnaître et à employer.",
    body: `
<h2>Repetition and rhythm</h2>
<p><s-fr>l'anaphore</s-fr>, the same words at the start of successive phrases: on 25 August 1944, General de Gaulle hails <s-fr>Paris outragé ! Paris brisé ! Paris martyrisé ! mais Paris libéré !</s-fr> · <s-fr>la gradation</s-fr>, words in rising (or falling) intensity: <s-fr>Va, cours, vole, et nous venge</s-fr> (Corneille).</p>
<h2>Crossing and contrast</h2>
<p><s-fr>le chiasme</s-fr>, an ABBA structure: <s-fr>Il faut manger pour vivre, et non pas vivre pour manger</s-fr> (Molière, L'Avare) · <s-fr>l'antithèse</s-fr>, two opposed ideas side by side: <s-fr>Je vis, je meurs</s-fr> (Louise Labé).</p>
<h2>Saying without saying</h2>
<p><s-fr>la prétérition</s-fr>, pretending not to say what you are saying: <s-fr>Je ne vous parlerai pas de ses années de doute…</s-fr> · <s-fr>le zeugme</s-fr>, one verb linked to two words of different kinds, often for humour: <s-fr>Il prit son chapeau et la porte.</s-fr></p>
<h2>Accumulation</h2>
<p>A list that overwhelms: <s-fr>Des tableaux, des sculptures, des carnets, des lettres, des photos : tout était là.</s-fr></p>
<div class="tip">In a speech, figures guide the ear: an anaphora gives rhythm, a gradation builds emotion, a chiasmus makes a line memorable. One or two well placed are enough: a speech made only of figures sounds hollow.</div>
`,
    examples: [
      ["Paris outragé ! Paris brisé ! Paris martyrisé ! mais Paris libéré !", "Paris outraged! Paris broken! Paris martyred! But Paris liberated! (de Gaulle, 1944)"],
      ["Va, cours, vole, et nous venge.", "Go, run, fly, and avenge us. (Corneille)"],
      ["Il faut manger pour vivre, et non pas vivre pour manger.", "One must eat to live, and not live to eat. (Molière)"],
      ["Je ne vous parlerai pas de ses débuts difficiles.", "I won't tell you about his difficult beginnings."],
      ["Il prit son chapeau et la porte.", "He took his hat and his leave."],
      ["Des tableaux, des carnets, des lettres, des photos : tout était là.", "Paintings, notebooks, letters, photos: everything was there."]
    ],
    quiz: [
      { q: "Paris outragé ! Paris brisé ! Paris martyrisé ! is mainly:", o: ["an anaphora", "a chiasmus", "a zeugma"], a: 0, ex: "The same word at the start of each phrase." },
      { q: "Manger pour vivre, et non vivre pour manger is:", o: ["a chiasmus", "an anaphora", "a litote"], a: 0, ex: "An ABBA crossing." },
      { q: "Je ne vous dirai pas qu'il était brillant… is:", o: ["a preterition", "a hyperbole", "a gradation"], a: 0, ex: "Saying it while claiming not to." },
      { q: "Va, cours, vole is:", o: ["a gradation", "an antithesis", "a zeugma"], a: 0, ex: "Rising intensity." },
      { q: "Il prit son chapeau et la porte is:", o: ["a zeugma", "an anaphora", "a euphemism"], a: 0, ex: "One verb, two very different objects." }
    ]
  },
  {
    id: 152, level: "C2", kind: "functional", icon: "mic",
    title: "Everyday French: giving a speech", title_fr: "Le français de tous les jours : prononcer un discours",
    subtitle: "Open an exhibition, award a prize, inaugurate a building: the codes of the formal speech.", subtitle_fr: "Ouvrir une exposition, remettre un prix, inaugurer un lieu : les codes du discours officiel.",
    body: `
<h2>Addressing the audience</h2>
<p>In order of precedence: <s-fr>Madame la Maire, Monsieur le Préfet, Mesdames et Messieurs, chers amis,</s-fr></p>
<h2>Opening</h2>
<p><s-fr>C'est avec une grande joie que…</s-fr> · <s-fr>C'est un honneur pour moi de…</s-fr> · <s-fr>Permettez-moi tout d'abord de…</s-fr></p>
<h2>Thanking</h2>
<p><s-fr>Je tiens à remercier…</s-fr> · <s-fr>Ma gratitude va à…</s-fr> · <s-fr>tous ceux sans qui… n'aurait pas vu le jour</s-fr></p>
<h2>The heart of the speech</h2>
<p>One idea, two or three images, a figure of speech or two (an anaphora, a gradation) to carry the emotion.</p>
<h2>Closing</h2>
<p><s-fr>Je déclare ouverte l'exposition…</s-fr> · <s-fr>Je lève mon verre à…</s-fr> · <s-fr>Je vous remercie.</s-fr></p>
<div class="tip">A speech is written for the ear: short sentences, rhythm, and pauses you mark on your page. Time it aloud: in most ceremonies, five minutes is generous, and the audience will thank you for being brief.</div>
`,
    examples: [
      ["Madame la Maire, Mesdames et Messieurs, chers amis,", "Madam Mayor, ladies and gentlemen, dear friends,"],
      ["C'est avec une grande joie que je vous accueille ce soir.", "It is with great joy that I welcome you tonight."],
      ["Je tiens à remercier tous ceux sans qui ce lieu n'aurait pas vu le jour.", "I would like to thank all those without whom this place would never have existed."],
      ["Permettez-moi tout d'abord de saluer la présence de l'artiste.", "Allow me first of all to welcome the artist."],
      ["Je déclare ouverte la Maison des arts.", "I declare the arts centre open."],
      ["Je lève mon verre à la réussite de ce projet.", "I raise my glass to the success of this project."]
    ],
    quiz: [
      { q: "“It is with great pleasure that…” is:", o: ["C'est avec un grand plaisir que…", "C'est avec un grand plaisir dont…", "C'est avec grand un plaisir que…"], a: 0, ex: "c'est… que, emphasis." },
      { q: "“I declare the exhibition open” is:", o: ["Je déclare ouverte l'exposition.", "Je déclare l'exposition ouvert.", "Je déclare ouvrir l'exposition ouverte."], a: 0, ex: "ouverte agrees with exposition, before or after it." },
      { q: "“Those without whom” (people) is:", o: ["ceux sans qui", "ceux sans que", "ceux sans dont"], a: 0, ex: "preposition + qui for people." },
      { q: "A good ceremonial speech is:", o: ["short and written for the ear", "as long as possible", "read without looking up"], a: 0, ex: "Five minutes is generous." },
      { q: "“I raise my glass to…” is:", o: ["Je lève mon verre à…", "Je monte mon verre à…", "Je porte mon verre pour…"], a: 0, ex: "lever son verre à." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    150: {
      gap: [["La réunion à l'issue de ___ un accord a été trouvé a duré six heures. (which, f)", "laquelle"], ["C'est une artiste ___ l'œuvre a longtemps été méconnue. (whose)", "dont"], ["Je remercie ceux sans ___ ce projet n'aurait pas vu le jour. (whom)", "qui"], ["___ touchera les œuvres sera exclu. (anyone who)", "Quiconque"]],
      fix: [["C'est un peintre dont ses toiles sont exposées au Louvre.", "C'est un peintre dont les toiles sont exposées au Louvre.", "dont + noun, without a possessive."], ["Le collectif au sein dont je travaille compte vingt artistes.", "Le collectif au sein duquel je travaille compte vingt artistes.", "dont never follows a preposition: au sein duquel."]],
      task: ["Present an artist in four sentences, with dont, au sein duquel (or de laquelle), sans qui and quiconque.", "Présente un artiste en quatre phrases, avec dont, au sein duquel (ou de laquelle), sans qui et quiconque.", "Cette sculptrice, dont les œuvres sont exposées dans le monde entier, a commencé dans un petit atelier de Lyon. Elle a fondé un collectif au sein duquel de jeunes artistes apprennent le travail du métal. Elle cite souvent son premier professeur, sans qui elle aurait abandonné. Quiconque a vu ses sculptures de près comprend pourquoi on vient de si loin pour les admirer."]
    },
    151: {
      gap: [["Il faut manger pour vivre, et non pas vivre pour ___. (chiasmus)", "manger"], ["Va, cours, ___, et nous venge. (gradation: fly)", "vole"], ["Je ne vous ___ pas de ses débuts difficiles. (preterition, parler, future)", "parlerai"], ["Il prit son chapeau et la ___. (zeugma)", "porte"]],
      fix: [["Il faut manger pour vivre, et non pas manger pour vivre.", "Il faut manger pour vivre, et non pas vivre pour manger.", "A chiasmus crosses the terms: A-B, then B-A."], ["Paris outragé ! Brisé Paris ! Paris martyrisé !", "Paris outragé ! Paris brisé ! Paris martyrisé !", "An anaphora repeats the same word at the start of each phrase."]],
      task: ["Write three sentences in praise of your town, with an anaphora, a gradation and a chiasmus.", "Écris trois phrases à la gloire de ta ville, avec une anaphore, une gradation et un chiasme.", "Une ville qui chante le soir, une ville qui s'éveille tôt, une ville qui ne dort presque jamais : voilà ma ville. On y arrive curieux, on y reste séduit, on en repart transformé. Ici, ce n'est pas la ville qui fait ses habitants, ce sont les habitants qui font la ville."]
    },
    152: {
      gap: [["C'est avec une grande joie ___ je vous accueille ce soir. (emphasis)", "que"], ["Je ___ à remercier tous ceux qui ont rendu ce projet possible. (would like to, tenir)", "tiens"], ["Permettez-moi tout d'abord de ___ la présence de l'artiste. (welcome)", "saluer"], ["Je déclare ___ l'exposition. (open, f)", "ouverte"]],
      fix: [["C'est avec une grande joie dont je vous accueille.", "C'est avec une grande joie que je vous accueille.", "c'est… que: emphasis, whatever the preposition."], ["Je déclare l'exposition ouvert.", "Je déclare l'exposition ouverte.|Je déclare ouverte l'exposition.", "ouverte agrees with exposition."]],
      task: ["Write the opening and the closing of a short speech for the opening of a photography exhibition.", "Écris l'ouverture et la conclusion d'un court discours pour le vernissage d'une exposition de photographies.", "Madame la Directrice, Mesdames et Messieurs, chers amis, c'est avec une grande joie que je vous accueille ce soir pour découvrir le travail d'une photographe dont le regard ne laisse personne indifférent. […] Je tiens à remercier tous ceux sans qui cette exposition n'aurait pas vu le jour. Sans plus attendre, je déclare l'exposition ouverte."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "inauguration", lesson: 152, level: "C2", icon: "mic", partner: "Bérénice", role: "the director of the arts centre",
    title: "Rehearsing an opening speech", title_fr: "Répéter un discours d'inauguration",
    setting: "On Saturday, you'll open an exhibition by a painter whose work has long been overlooked. Bérénice, the director of the arts centre, helps you rehearse your speech.", setting_fr: "Samedi, tu inaugures l'exposition d'une peintre longtemps méconnue. Bérénice, la directrice du centre d'art, t'aide à répéter ton discours.",
    turns: [
      { p: "Samedi, c'est vous qui ouvrez l'exposition. Comment commencez-vous ?", fr: "On Saturday, you're opening the exhibition. How do you begin?" },
      { y: ["Madame la Maire, Mesdames et Messieurs, chers amis, c'est avec une grande joie que je vous accueille ce soir.", "Madame la Maire, Mesdames et Messieurs, chers amis, c'est avec une grande joie dont je vous accueille ce soir.", "Madame la Maire, Mesdames et Messieurs, chers amis, c'est avec grande une joie que je vous accueille ce soir."], fr: "Madam Mayor, ladies and gentlemen, dear friends, it is with great joy that I welcome you tonight.", why: "c'est… que for emphasis." },
      { p: "Et ensuite, les remerciements ?", fr: "And then, the thanks?" },
      { y: ["Je tiens à remercier tous ceux sans qui cette exposition n'aurait pas vu le jour.", "Je tiens à remercier tous ceux sans que cette exposition n'aurait pas vu le jour.", "Je tiens à remercier tous ceux qui sans cette exposition n'aurait pas vu le jour."], fr: "I'd like to thank everyone without whom this exhibition would never have happened.", why: "With people: preposition + qui (sans qui)." },
      { p: "Vous voulez dire un mot de l'artiste ?", fr: "Do you want to say a word about the artist?" },
      { y: ["Oui : une artiste dont l'œuvre, longtemps méconnue, mérite enfin la lumière.", "Oui : une artiste que l'œuvre, longtemps méconnue, mérite enfin la lumière.", "Oui : une artiste dont son œuvre, longtemps méconnue, mérite enfin la lumière."], fr: "Yes: an artist whose work, long overlooked, finally deserves the spotlight.", why: "dont + noun, without a possessive." },
      { p: "Pas trop long, j'espère ?", fr: "Not too long, I hope?" },
      { y: ["Je ne vous parlerai pas de ses années de doute, ni de ses débuts difficiles : ses toiles le disent mieux que moi.", "Je ne vous parlerai pas de ses années de doute, ni de ses débuts difficiles : ses toiles le disent mieux que je.", "Je ne vous parlerai pas de ses années de doute, ni de ses débuts difficiles : ses toiles le disent mieux de moi."], fr: "I won't tell you about her years of doubt, nor her difficult beginnings: her paintings say it better than I can.", why: "A preterition; mieux que moi." },
      { p: "Parfait. Et pour finir ?", fr: "Perfect. And to finish?" },
      { y: ["Sans plus attendre, je déclare l'exposition ouverte.", "Sans plus d'attendre, je déclare l'exposition ouverte.", "Sans plus attendre, je déclare l'exposition ouvert."], fr: "Without further ado, I declare the exhibition open.", why: "sans plus attendre; ouverte agrees with exposition." }
    ] }
  );

  W.READINGS.push({
    id: "joconde", level: "C2", icon: "frame", title: "1911 : le jour où la Joconde disparut", genre: "Récit historique",
    intro: "In 1911, the Mona Lisa vanished from the Louvre for more than two years. The theft made her the most famous painting in the world. Complex relative clauses in a historical narrative.",
    intro_fr: "En 1911, la Joconde disparaît du Louvre pendant plus de deux ans. Ce vol en fera le tableau le plus célèbre du monde. Les relatives complexes dans un récit historique.",
    paragraphs: [
      { en: "Le 21 août 1911, un lundi, jour de fermeture du Louvre, un homme sortit du musée avec, sous sa blouse, le tableau le plus célèbre du monde, ou plutôt celui qui allait le devenir. Il fallut plus d'une journée pour que quiconque remarque l'absence de la Joconde.", fr: "On 21 August 1911, a Monday, the day the Louvre was closed, a man walked out of the museum with, under his smock, the most famous painting in the world, or rather the one that was about to become so. It took more than a day for anyone to notice the Mona Lisa was missing." },
      { en: "L'enquête, au cours de laquelle la police interrogea des centaines de personnes, piétina pendant deux ans. Le poète Guillaume Apollinaire fut même brièvement incarcéré, et le jeune Pablo Picasso entendu par un juge. Pendant ce temps, des foules venaient contempler, au Louvre, l'emplacement vide où le tableau avait été accroché.", fr: "The investigation, during which the police questioned hundreds of people, made no headway for two years. The poet Guillaume Apollinaire was even briefly jailed, and the young Pablo Picasso questioned by a judge. Meanwhile, crowds came to the Louvre to gaze at the empty space where the painting had hung." },
      { en: "Le coupable, dont personne ne soupçonnait l'existence, s'appelait Vincenzo Peruggia. Ce vitrier italien, qui avait travaillé au Louvre, avait caché le tableau, peint sur un panneau de bois, dans sa chambre parisienne. En décembre 1913, il tenta de le vendre à un marchand d'art de Florence, lequel prévint aussitôt les autorités.", fr: "The culprit, whose existence no one suspected, was Vincenzo Peruggia. This Italian glazier, who had worked at the Louvre, had hidden the painting, painted on a wooden panel, in his room in Paris. In December 1913, he tried to sell it to an art dealer in Florence, who immediately alerted the authorities." },
      { en: "Le vol, paradoxalement, fit la gloire de l'œuvre. Avant 1911, la Joconde était admirée des connaisseurs ; après, elle devint une icône mondiale, reproduite à l'infini. Ce n'est plus seulement un portrait que l'on vient voir : c'est une légende.", fr: "The theft, paradoxically, made the work's fame. Before 1911, the Mona Lisa was admired by connoisseurs; afterwards, she became a global icon, endlessly reproduced. It's no longer just a portrait people come to see: it's a legend." },
      { en: "Aujourd'hui, des millions de visiteurs se pressent chaque année devant la vitre qui la protège, souvent pour quelques secondes à peine. Qui veut vraiment la regarder doit s'armer de patience, ou venir tôt le matin.", fr: "Today, millions of visitors crowd every year in front of the glass that protects her, often for barely a few seconds. Whoever really wants to look at her must be patient, or come early in the morning." }
    ],
    glossary: { "blouse": "smock", "piétina": "made no headway", "incarcéré": "jailed", "emplacement": "spot, place", "coupable": "culprit", "vitrier": "glazier", "panneau": "panel", "marchand": "dealer", "prévint": "alerted, warned", "connaisseurs": "connoisseurs", "icône": "icon", "infini": "infinity (à l'infini: endlessly)", "vitre": "pane of glass", "armer": "s'armer de patience: to be patient" },
    questions: [
      { q: "Pourquoi le voleur a-t-il pu agir le 21 août 1911 ?", o: ["C'était un lundi, jour de fermeture du Louvre.", "Les gardiens étaient en grève.", "Le musée était en travaux."], a: 0 },
      { q: "Qu'est-il arrivé à Guillaume Apollinaire pendant l'enquête ?", o: ["Il a été brièvement incarcéré.", "Il a retrouvé le tableau.", "Il a écrit un poème sur la Joconde."], a: 0 },
      { q: "Qui était Vincenzo Peruggia ?", o: ["Un vitrier italien qui avait travaillé au Louvre", "Un célèbre peintre", "Un marchand d'art de Florence"], a: 0 },
      { q: "Comment le voleur a-t-il été arrêté ?", o: ["Un marchand de Florence à qui il voulait vendre le tableau a prévenu les autorités.", "La police l'a trouvé grâce à ses empreintes.", "Il s'est rendu de lui-même."], a: 0 },
      { q: "Quel effet le vol a-t-il eu, selon l'auteur ?", o: ["Il a fait de la Joconde une icône mondiale.", "Il a fait baisser sa valeur.", "Il l'a fait oublier."], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-c2-6", unit: "c2-6", level: "C2", icon: "eye",
    title: "Apprendre à regarder un tableau", title_fr: "Apprendre à regarder un tableau",
    context: "On the radio, Fabrice talks to Delphine, an exhibition curator, about crowded museums and how to look at a work of art.", context_fr: "À la radio, Fabrice interroge Delphine, commissaire d'exposition, sur les musées bondés et la manière de regarder une œuvre.",
    words: [["bondé", "packed"], ["un aveu d'échec", "an admission of failure"], ["au pas de course", "at a run"], ["diaboliser", "to demonise"], ["s'approprier", "to make one's own"]],
    lines: [["Fabrice", "Files d'attente interminables, salles bondées, smartphones brandis : les grands musées sont-ils victimes de leur succès ? Delphine, vous êtes commissaire d'exposition.", "fr-FR"], ["Delphine", "En partie, oui. Le Louvre, par exemple, a limité sa fréquentation à trente mille visiteurs par jour en 2023. Ce n'est pas un aveu d'échec : c'est une manière de rappeler qu'une œuvre a besoin d'espace et de calme pour être vue.", "fr-FR"], ["Fabrice", "Mais beaucoup de visiteurs ne regardent les tableaux que quelques secondes.", "fr-FR"], ["Delphine", "C'est vrai, et ce n'est pas un reproche. On vient souvent chercher une image qu'on connaît déjà, celle-là même qu'on a vue cent fois en reproduction. Le paradoxe, c'est qu'on voit d'autant moins une œuvre qu'on la connaît par cœur.", "fr-FR"], ["Fabrice", "Que conseillez-vous ?", "fr-FR"], ["Delphine", "De choisir. Plutôt que de traverser un musée au pas de course, mieux vaut s'arrêter longuement devant deux ou trois œuvres. Asseyez-vous, regardez la composition, la lumière, les détails dans les coins : c'est souvent là que se cache ce qui rend une œuvre inoubliable.", "fr-FR"], ["Fabrice", "Et les smartphones ?", "fr-FR"], ["Delphine", "Je ne les diabolise pas : photographier, c'est aussi une façon de s'approprier ce qu'on voit. Mais la photo ne remplace pas le regard. Quiconque a passé dix minutes devant un tableau sait qu'on n'en ressort pas tout à fait le même.", "fr-FR"]],
    gist: ["De quoi parle l'émission ?", ["Des musées bondés et de la manière de regarder une œuvre", "Du prix des billets de musée", "De la vie de Léonard de Vinci"]],
    detail: [["Quelle décision le Louvre a-t-il prise en 2023 ?", ["Limiter sa fréquentation à trente mille visiteurs par jour", "Fermer le lundi et le mardi", "Interdire les smartphones"]], ["Quel paradoxe Delphine relève-t-elle ?", ["On voit d'autant moins une œuvre qu'on la connaît par cœur.", "Les musées sont vides le week-end.", "Les copies sont plus belles que les originaux."]], ["Que conseille-t-elle ?", ["S'arrêter longuement devant quelques œuvres", "Tout voir en une heure", "Ne regarder que les tableaux célèbres"]], ["Que pense-t-elle des smartphones ?", ["Elle ne les diabolise pas, mais la photo ne remplace pas le regard.", "Il faut les interdire.", "Ils remplacent avantageusement la visite."]]],
    decode: ["on voit d'autant moins une œuvre qu'on la connaît par cœur", "c'est souvent là que se cache ce qui rend une œuvre inoubliable"],
    tip: "Experts often build their point on a paradox: le paradoxe, c'est que… The paradox is usually the heart of the argument: if you understand it, you've understood the interview.", tip_fr: "Les spécialistes construisent souvent leur propos sur un paradoxe : le paradoxe, c'est que… C'est en général le cœur de l'argument : si tu le comprends, tu as compris l'entretien."
  }]);

  W.LEXIS = W.LEXIS || {};
  W.LEXIS["c2-6"] = {
    colloc: [
      ["inaugurer une exposition", "to open an exhibition", "La ministre a inauguré l'exposition.", "inauguré", ["débuté", "entamé"]],
      ["prêter une œuvre", "to lend a work", "Le musée a prêté trois œuvres à une galerie japonaise.", "prêté", ["donné", "passé"]],
      ["restaurer un tableau", "to restore a painting", "Il a fallu deux ans pour restaurer le tableau.", "restaurer", ["renouveler", "rénover"]],
      ["accrocher un tableau", "to hang a painting", "Ils ont accroché le tableau dans l'entrée.", "accroché", ["pendu", "collé"]],
      ["poser pour un peintre", "to sit for a painter", "Elle a posé pour un célèbre peintre.", "posé", ["placé", "resté"]],
      ["faire sensation", "to cause a sensation", "Ce tableau a fait sensation au Salon.", "fait", ["donné", "causé"]],
      ["porter un regard", "to look at (with a particular view)", "Cette photographe porte un regard tendre sur ses sujets.", "porte", ["met", "tient"]],
      ["être à l'affiche", "to be on (show, exhibition)", "L'exposition est à l'affiche jusqu'en mars.", "affiche", ["carte", "page"]],
      ["battre des records d'affluence", "to break attendance records", "La rétrospective a battu des records d'affluence.", "battu", ["frappé", "tapé"]],
      ["mettre en valeur une œuvre", "to show a work to advantage", "Cet éclairage met en valeur l'œuvre.", "valeur", ["prix", "valeurs"]]
    ],
    wf: [
      ["L'___ de l'exposition a eu lieu hier soir. (INAUGURER)", "inauguration"],
      ["Ce portrait est d'une ressemblance ___. (SAISIR)", "saisissante"],
      ["La ___ de la Joconde a fait la une des journaux. (DISPARAÎTRE)", "disparition"],
      ["Les ___ se pressent devant le tableau. (VISITER)", "visiteurs"],
      ["Cette œuvre est ___ : elle ne laisse personne indifférent. (DÉRANGER)", "dérangeante"],
      ["La ___ de ce musée attire des touristes du monde entier. (RENOMMER)", "renommée"],
      ["L'___ a battu tous les records. (AFFLUER)", "affluence"],
      ["La ___ de cette toile a pris deux ans. (RESTAURER)", "restauration"]
    ],
    kwt: [
      ["Une réunion a eu lieu ici ; à la fin de cette réunion, un accord a été trouvé.", "ISSUE", "La réunion ___ un accord a été trouvé a eu lieu ici.", "à l'issue de laquelle"],
      ["Toute personne qui touchera les œuvres sera exclue.", "QUICONQUE", "___ sera exclu.", "Quiconque touchera les œuvres"],
      ["C'est un peintre ; ses toiles sont exposées au Louvre.", "DONT", "C'est un peintre ___ au Louvre.", "dont les toiles sont exposées"],
      ["Il faut manger pour vivre ; il ne faut pas vivre pour manger.", "NON", "Il faut manger pour vivre, ___ manger.", "et non pas vivre pour|et non vivre pour"],
      ["Il prit son chapeau, puis il sortit.", "PRIT", "Il ___ et la porte.", "prit son chapeau"],
      ["Ce collectif compte vingt artistes ; dans ce collectif, tous sont bénévoles.", "DUQUEL", "Ce collectif, ___ tous sont bénévoles, compte vingt artistes.", "au sein duquel"]
    ],
    idioms: [
      ["faire tache", "détonner, ne pas être à sa place", "to stick out like a sore thumb", "Ce bâtiment moderne fait tache dans le vieux quartier.", "fait tache"],
      ["brosser un tableau", "décrire dans ses grandes lignes", "to paint a picture (of)", "Le rapport brosse un tableau sombre de la situation.", "brosse un tableau sombre"],
      ["haut en couleur", "pittoresque, plein de vie", "colourful, larger than life", "C'est un personnage haut en couleur.", "haut en couleur"],
      ["voir les choses en grand", "avoir des projets ambitieux", "to think big", "Le nouveau directeur voit les choses en grand.", "voit les choses en grand"],
      ["avoir l'œil", "être très observateur", "to have a good eye", "Cette galeriste a l'œil : elle repère les talents.", "a l'œil"],
      ["ne pas faire le poids", "ne pas être à la hauteur", "not to measure up", "Face à l'original, la copie ne fait pas le poids.", "ne fait pas le poids"],
      ["jeter de la poudre aux yeux", "chercher à éblouir par des apparences", "to put on a show to impress", "Ce décor somptueux, c'est de la poudre aux yeux.", "de la poudre aux yeux"],
      ["faire florès", "obtenir un grand succès", "to be all the rage", "Ce style a fait florès au début du siècle.", "a fait florès"]
    ]
  };

  W.PROMPTS.push({ id: "fr-c2-6", level: "C2", q: "Une œuvre d'art peut-elle changer notre regard sur le monde ? Donne un exemple.", fr: "Can a work of art change the way we see the world? Give an example.", time: 240,
    phrases: ["dont…", "C'est peut-être cela…", "non pas…, mais…", "Depuis, …", "Quiconque…"],
    model: "Je le crois profondément. La première fois que j'ai vu les Nymphéas de Monet, au musée de l'Orangerie, j'ai eu l'impression d'entrer dans l'eau elle-même. Le peintre, dont la vue déclinait à la fin de sa vie, ne représente presque plus de contours : seulement de la lumière, des reflets, du temps qui passe. Depuis, je ne regarde plus un étang de la même façon. C'est peut-être cela, le pouvoir de l'art : non pas nous apprendre quelque chose de nouveau, mais nous faire voir autrement ce que nous avions sous les yeux. Quiconque a passé un moment dans ces salles le comprend." });

  W.WRITING_GUIDE["c2-6"] = { genre: "A ceremonial speech (C2)", genre_fr: "Un discours de circonstance (C2)",
    plan: [["Address the audience in order of precedence.", "Adresse-toi au public dans l'ordre protocolaire."], ["Open with emotion, and use a preterition for the past.", "Ouvre avec émotion, et emploie une prétérition pour le passé."], ["Say what the place will be, with an anaphora.", "Dis ce que sera le lieu, avec une anaphore."], ["State your conviction, with a chiasmus or a gradation.", "Affirme ta conviction, avec un chiasme ou une gradation."], ["Thank, wish, and declare the place open.", "Remercie, formule un souhait et déclare le lieu ouvert."]],
    marks: [["Je ne vous rappellerai pas", "preterition", "la prétérition"], ["au sein duquel nous sommes réunis", "a complex relative clause", "une relative complexe"], ["Un lieu où l'on regarde", "anaphora", "l'anaphore"], ["mais de mettre la ville au service de l'art", "chiasmus", "le chiasme"], ["un peu changé, parfois bouleversé, toujours plus attentif", "gradation", "la gradation"], ["sans qui cette maison n'aurait jamais vu le jour", "sans qui: a relative for people", "sans qui : une relative pour des personnes"]] };

  W.COURSE.push({ id: "c2-6", level: "C2", icon: "palette", title: "Art and the eye", title_fr: "Arts et regards",
    intro: "In this unit, you'll talk about art and the way we look at it: complex relative clauses (au sein duquel, dont, quiconque, qui vivra verra), the figures of great speeches (anaphora, chiasmus, gradation, preterition) and the ceremonial speech.",
    intro_fr: "Dans cette unité, tu vas parler d'art et de notre façon de le regarder : les relatives complexes (au sein duquel, dont, quiconque, qui vivra verra), les figures des grands discours (anaphore, chiasme, gradation, prétérition) et le discours de circonstance.",
    can: ["Build complex relative clauses without hesitation", "Recognise and use the figures of great speeches", "Discuss art, museums and aesthetics", "Give a ceremonial speech", "Write a speech for an opening"],
    can_fr: ["Construire des relatives complexes sans hésiter", "Reconnaître et employer les figures des grands discours", "Débattre d'art, de musées et d'esthétique", "Prononcer un discours de circonstance", "Rédiger un discours d'inauguration"],
    lessons: [150, 151, 152], vocab: ["artFR", "regardFR"], reading: "joconde", prompt: "fr-c2-6",
    writing: { task: "Your town is opening an arts centre in a former factory. Write the opening speech (350-400 words), with at least three figures of speech.", task_fr: "Ta ville ouvre une maison des arts dans une ancienne usine. Rédige le discours d'inauguration (350 à 400 mots), avec au moins trois figures de style.", words: "350-400",
      tips: ["Madame la Maire, Mesdames et Messieurs,", "C'est avec une émotion particulière que…", "Je ne vous rappellerai pas…", "Un lieu où… Un lieu où…", "Je déclare ouverte…"],
      checklist: ["I addressed the audience correctly", "I used a preterition", "I used an anaphora", "I used a chiasmus or a gradation", "I thanked and closed with a formal declaration", "I wrote between 350 and 400 words"],
      model: "Discours d'inauguration de la Maison des arts\n\nMadame la Maire, Mesdames et Messieurs, chers amis,\n\nC'est avec une émotion particulière que je prends la parole ce soir, dans ce bâtiment qui, il y a dix ans encore, n'était qu'une usine désaffectée. Je ne vous rappellerai pas les années de débats, les dossiers refusés, les doutes qui ont jalonné ce projet : vous les connaissez mieux que moi. Je voudrais plutôt vous dire ce que ce lieu, au sein duquel nous sommes réunis, peut devenir.\n\nUne maison des arts, c'est d'abord un lieu où l'on regarde. Un lieu où l'on regarde lentement, à rebours d'une époque pressée. Un lieu où l'on regarde ensemble, alors que nous passons tant d'heures chacun de notre côté, devant un écran. Un lieu où l'on regarde autrement, parce qu'une œuvre, quand elle est forte, nous oblige à déplacer notre regard.\n\nC'est aussi un lieu où l'on crée. Les ateliers qui ouvriront dès lundi accueilleront les enfants des écoles, les amateurs du dimanche et les artistes de la région, dont certains exposent ici pour la première fois. Nous n'avons pas voulu une maison réservée à quelques initiés, mais une maison ouverte à tous. Il ne s'agit pas de mettre l'art au service de la ville, mais de mettre la ville au service de l'art.\n\nOn dit souvent que l'art est un luxe. Je crois au contraire qu'il est une nécessité. Une nécessité pour comprendre le monde, pour s'y sentir moins seul, pour l'imaginer autrement. Quiconque a passé une heure devant un tableau, une sculpture ou une installation le sait : on en ressort un peu changé, parfois bouleversé, toujours plus attentif.\n\nJe tiens à remercier tous ceux sans qui cette maison n'aurait jamais vu le jour : les élus qui y ont cru, les mécènes qui l'ont soutenue, les habitants qui l'ont réclamée, et les artistes qui, dès ce soir, lui donnent une âme. Ma gratitude va aussi aux équipes techniques, dont le travail, souvent invisible, a rendu tout cela possible.\n\nQu'elle soit pour chacun d'entre vous un lieu de découverte, de rencontre et, j'ose le mot, de joie. Sans plus attendre, je déclare la Maison des arts ouverte." } });
})();
