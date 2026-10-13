/* Cours d'allemand, unité C1-8 « Literature / Littérature » : les propositions participiales du style écrit (Am
   Bahnhof angekommen, rief sie an ; laut lachend), les temps du récit (prétérit, plus-que-parfait pour les retours en
   arrière, présent de narration, sollte pour le futur dans le passé), le résumé d'un texte littéraire
   (Inhaltsangabe). Personnages fictifs, prénoms allemands.
   Faits vérifiables seulement : Thomas Mann, né en 1875 à Lübeck, publie en 1901 « Buddenbrooks. Verfall einer
   Familie », qui suit quatre générations d'une famille de négociants de Lübeck ; certains habitants s'y
   reconnaissent et s'en offusquent ; prix Nobel de littérature 1929, l'Académie suédoise citant explicitement
   « Buddenbrooks » ; exil à partir de 1933, notamment aux États-Unis ; mort en 1955 à Zurich ; la
   Buddenbrookhaus de Lübeck est un musée consacré à Heinrich et Thomas Mann. Franz Kafka, « Die Verwandlung »
   (1915) : Gregor Samsa, représentant de commerce, se réveille transformé en insecte monstrueux ; sa sœur Grete
   s'occupe d'abord de lui ; la famille doit travailler ; le père lui lance des pommes ; il meurt, et la famille
   se sent soulagée. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "literaturDE", icon: "book-open", title: "Literary forms", title_fr: "Les formes littéraires", level: "C1", words: [
    ["die Erzählung, -en", "the story, the narrative", "le récit, la nouvelle", "Die Erzählung spielt in einem kleinen Dorf."],
    ["der Erzähler, - (die Erzählerin)", "the narrator", "le narrateur, la narratrice", "Der Erzähler weiß mehr als die Figuren."],
    ["die Figur, -en", "the character", "le personnage", "Die Figuren wirken sehr lebendig."],
    ["der Schauplatz, ¨-e", "the setting", "le lieu de l'action", "Schauplatz des Romans ist Lübeck."],
    ["das Kapitel, -", "the chapter", "le chapitre", "Im letzten Kapitel klärt sich alles auf."],
    ["die Gattung, -en", "the genre", "le genre", "Der Roman ist die beliebteste literarische Gattung."],
    ["die Lyrik", "poetry", "la poésie", "Lyrik liest man am besten laut."],
    ["das Gedicht, -e", "the poem", "le poème", "Wir mussten das Gedicht auswendig lernen."],
    ["der Vers, -e", "the line (of verse)", "le vers", "Der erste Vers ist besonders berühmt."],
    ["die Strophe, -n", "the stanza", "la strophe", "Das Gedicht hat vier Strophen."],
    ["der Reim, -e", "the rhyme", "la rime", "Moderne Gedichte haben oft keinen Reim."],
    ["das Drama, Dramen", "the drama, the play", "le drame, la pièce de théâtre", "Schillers Dramen werden bis heute gespielt."],
    ["die Novelle, -n", "the novella", "la nouvelle (longue)", "Eine Novelle ist kürzer als ein Roman."],
    ["die Kurzgeschichte, -n", "the short story", "la nouvelle (courte)", "Nach dem Krieg wurde die Kurzgeschichte sehr beliebt."],
    ["der Klassiker, -", "the classic", "le classique", "Dieser Roman ist längst ein Klassiker."],
    ["der Verlag, -e", "the publisher, the publishing house", "la maison d'édition", "Der Verlag bringt das Buch im Herbst heraus."]
  ] },
  { id: "deutungDE", icon: "search-check", title: "Reading and interpreting", title_fr: "Lire et interpréter", level: "C1", words: [
    ["die Deutung, -en", "the interpretation", "l'interprétation", "Für dieses Ende gibt es mehrere Deutungen."],
    ["deuten", "to interpret", "interpréter", "Wie deutest du den Titel?"],
    ["interpretieren", "to interpret", "interpréter", "Man kann das Gedicht auch politisch interpretieren."],
    ["die Leserschaft", "the readership", "le lectorat", "Der Roman spricht eine breite Leserschaft an."],
    ["fesselnd", "gripping", "captivant", "Die Geschichte ist von Anfang an fesselnd."],
    ["langatmig", "long-winded", "interminable, long", "Der Mittelteil ist etwas langatmig."],
    ["vielschichtig", "multi-layered, complex", "riche, à plusieurs niveaux", "Die Hauptfigur ist sehr vielschichtig."],
    ["die Botschaft, -en", "the message", "le message", "Welche Botschaft will die Autorin vermitteln?"],
    ["der Höhepunkt, -e", "the climax, the high point", "le point culminant", "Der Höhepunkt der Handlung kommt im zehnten Kapitel."],
    ["der Wendepunkt, -e", "the turning point", "le tournant", "Der Tod des Vaters ist der Wendepunkt der Geschichte."],
    ["die Inhaltsangabe, -n", "the summary (of a text)", "le résumé", "Schreib bitte eine Inhaltsangabe der Erzählung."],
    ["zitieren", "to quote", "citer", "Belege deine Aussagen, indem du den Text zitierst."],
    ["das Zitat, -e", "the quotation", "la citation", "Das Zitat stammt aus dem dritten Kapitel."],
    ["ironisch", "ironic(ally)", "ironique(ment)", "Der Erzähler beschreibt die Familie leicht ironisch."],
    ["der Verfall", "decline, decay", "le déclin", "Der Roman erzählt vom Verfall einer Familie."],
    ["der Untergang", "the downfall", "la chute, le déclin", "Am Ende steht der Untergang der Firma."]
  ] });

  W.LESSONS.push(
  {
    id: 124, level: "C1", icon: "feather",
    title: "Am Bahnhof angekommen, rief sie an: participle clauses", title_fr: "Am Bahnhof angekommen, rief sie an : les propositions participiales",
    subtitle: "Shorten subordinate clauses into elegant participle clauses, as in literature and journalism.", subtitle_fr: "Raccourcir des subordonnées en propositions participiales élégantes, comme en littérature et dans la presse.",
    body: `
<h2>A clause without a subject or a conjugated verb</h2>
<p>When the subject is the same as in the main clause, a subordinate clause can be shortened to a participle with its complements:</p>
<table>
<tr><th>Subordinate clause</th><th>Participle clause</th></tr>
<tr><td><s-de>Nachdem sie am Bahnhof angekommen war, rief sie an.</s-de></td><td><s-de>Am Bahnhof angekommen, rief sie an.</s-de></td></tr>
<tr><td><s-de>Weil er von Neugier getrieben wurde, öffnete er die Tür.</s-de></td><td><s-de>Von Neugier getrieben, öffnete er die Tür.</s-de></td></tr>
<tr><td><s-de>Während sie laut lachte, verließ sie den Raum.</s-de></td><td><s-de>Laut lachend verließ sie den Raum.</s-de></td></tr>
</table>
<p><b>Partizip II</b>: completed or passive (<s-de>angekommen, getrieben</s-de>). <b>Partizip I</b>: at the same time, active (<s-de>lachend, die Zeitung lesend</s-de>).</p>
<h2>Fixed participle phrases</h2>
<p>Some are common in everyday speech too: <s-de>streng genommen</s-de> (strictly speaking), <s-de>offen gestanden</s-de> (frankly), <s-de>kurz gesagt</s-de> (in short), <s-de>im Grunde genommen</s-de> (basically), <s-de>abgesehen davon</s-de> (apart from that).</p>
<div class="tip">Participle clauses are a hallmark of written style: novels, reports, biographies. Use them sparingly and only when the subject is clearly the same, otherwise the sentence becomes confusing. The fixed phrases, on the other hand, make your spoken German sound natural at once.</div>
`,
    body_fr: `
<h2>Une proposition sans sujet ni verbe conjugué</h2>
<p>Quand le sujet est le même que dans la principale, une subordonnée peut se réduire à un participe accompagné de ses compléments :</p>
<table>
<tr><th>Subordonnée</th><th>Proposition participiale</th></tr>
<tr><td><s-de>Nachdem sie am Bahnhof angekommen war, rief sie an.</s-de></td><td><s-de>Am Bahnhof angekommen, rief sie an.</s-de> (Arrivée à la gare, elle téléphona.)</td></tr>
<tr><td><s-de>Weil er von Neugier getrieben wurde, öffnete er die Tür.</s-de></td><td><s-de>Von Neugier getrieben, öffnete er die Tür.</s-de></td></tr>
<tr><td><s-de>Während sie laut lachte, verließ sie den Raum.</s-de></td><td><s-de>Laut lachend verließ sie den Raum.</s-de></td></tr>
</table>
<p><b>Partizip II</b> : accompli ou passif (<s-de>angekommen, getrieben</s-de>). <b>Partizip I</b> : simultané, actif (<s-de>lachend, die Zeitung lesend</s-de>). Le français connaît exactement les mêmes tournures.</p>
<h2>Les tournures figées</h2>
<p>Certaines sont courantes aussi à l'oral : <s-de>streng genommen</s-de> (à strictement parler), <s-de>offen gestanden</s-de> (franchement), <s-de>kurz gesagt</s-de> (bref), <s-de>im Grunde genommen</s-de> (au fond), <s-de>abgesehen davon</s-de> (à part cela).</p>
<div class="tip">Les propositions participiales sont une marque du style écrit : romans, reportages, biographies. Emploie-les avec mesure, et seulement quand le sujet est clairement le même, sinon la phrase devient confuse. Les tournures figées, en revanche, rendent tout de suite ton allemand parlé plus naturel.</div>
`,
    examples: [
      ["Am Bahnhof angekommen, rief sie ihre Schwester an.", "Having arrived at the station, she called her sister.", "Arrivée à la gare, elle appela sa sœur."],
      ["Von Neugier getrieben, öffnete er den alten Brief.", "Driven by curiosity, he opened the old letter.", "Poussé par la curiosité, il ouvrit la vieille lettre."],
      ["Laut lachend verließ sie den Raum.", "She left the room, laughing loudly.", "Elle quitta la pièce en riant aux éclats."],
      ["Die Zeitung lesend, trank er seinen Kaffee.", "Reading the paper, he drank his coffee.", "Tout en lisant le journal, il but son café."],
      ["Von der Kritik gefeiert, wurde der Roman ein Erfolg.", "Celebrated by the critics, the novel became a success.", "Salué par la critique, le roman devint un succès."],
      ["Streng genommen ist das keine Novelle, sondern eine Erzählung.", "Strictly speaking, that's not a novella but a story.", "À strictement parler, ce n'est pas une nouvelle mais un récit."],
      ["Offen gestanden fand ich das Ende enttäuschend.", "Frankly, I found the ending disappointing.", "Franchement, j'ai trouvé la fin décevante."]
    ],
    quiz: [
      { q: "Nachdem er nach Hause gekommen war, schlief er sofort ein. →", q_fr: "Nachdem er nach Hause gekommen war, schlief er sofort ein. →", o: ["Nach Hause gekommen, schlief er sofort ein.", "Nach Hause kommend gewesen, schlief er sofort ein.", "Nach Hause gekommen, er schlief sofort ein."], a: 0, ex: "Completed action: Partizip II; then the verb.", ex_fr: "Action accomplie : Partizip II ; puis le verbe." },
      { q: "Während sie sang, kochte sie. →", q_fr: "Während sie sang, kochte sie. →", o: ["Singend kochte sie.", "Gesungen kochte sie.", "Singend sie kochte."], a: 0, ex: "Simultaneous action: Partizip I.", ex_fr: "Action simultanée : Partizip I." },
      { q: "“Frankly, …”", q_fr: "« Franchement, … »", o: ["Offen gestanden…", "Offen stehend…", "Offen gestehen…"], a: 0, ex: "A fixed phrase: offen gestanden.", ex_fr: "Une tournure figée : offen gestanden." },
      { q: "When can you use a participle clause?", q_fr: "Quand peut-on employer une proposition participiale ?", o: ["When the subject is the same as in the main clause", "Only in questions", "When there are two different subjects"], o_fr: ["Quand le sujet est le même que dans la principale", "Seulement dans les questions", "Quand il y a deux sujets différents"], a: 0, ex: "Same subject only.", ex_fr: "Seulement avec le même sujet." },
      { q: "“Strictly speaking, …”", q_fr: "« À strictement parler, … »", o: ["Streng genommen…", "Streng nehmend…", "Streng zu nehmen…"], a: 0, ex: "streng genommen.", ex_fr: "streng genommen." }
    ]
  },
  {
    id: 125, level: "C1", icon: "history",
    title: "Er sollte sie nie wiedersehen: tenses in narration", title_fr: "Er sollte sie nie wiedersehen : les temps du récit",
    subtitle: "The Präteritum as the narrative tense, flashbacks, the vivid present and the future in the past.", subtitle_fr: "Le prétérit comme temps du récit, les retours en arrière, le présent de narration et le futur dans le passé.",
    body: `
<h2>The Präteritum: the tense of stories</h2>
<p>In novels and written narratives, the Präteritum is the main tense, even for verbs that use the Perfekt in speech: <s-de>Sie öffnete die Tür und sah sich um.</s-de></p>
<h2>The Plusquamperfekt for flashbacks</h2>
<p>To go back further in time, writers use the Plusquamperfekt, often only for the first sentences of the flashback, then return to the Präteritum: <s-de>Drei Jahre zuvor hatte er die Stadt verlassen. Damals war er jung gewesen…</s-de></p>
<h2>The vivid present</h2>
<p>To make a scene dramatic, a narrator can switch to the present: <s-de>Es ist Mitternacht. Plötzlich klingelt das Telefon.</s-de> (historical or scenic present).</p>
<h2>The future in the past: sollte</h2>
<p><s-de>sollte</s-de> + infinitive announces what was going to happen later: <s-de>Er sollte seine Heimat nie wiedersehen.</s-de> (He was never to see his homeland again.)</p>
<div class="tip">When you read, the tense tells you where you are in the story: Präteritum = the main line, Plusquamperfekt = further back, Präsens = suddenly very close, <s-de>sollte</s-de> = a glimpse of the future. When you write a summary (lesson 126), on the other hand, use the present tense.</div>
`,
    body_fr: `
<h2>Le prétérit : le temps du récit</h2>
<p>Dans les romans et les récits écrits, le prétérit est le temps principal, même pour les verbes qui prennent le parfait à l'oral : <s-de>Sie öffnete die Tür und sah sich um.</s-de> (Elle ouvrit la porte et regarda autour d'elle.) Il joue le rôle du passé simple et de l'imparfait français.</p>
<h2>Le plus-que-parfait pour les retours en arrière</h2>
<p>Pour remonter plus loin dans le temps, les auteurs emploient le plus-que-parfait, souvent seulement pour les premières phrases du retour en arrière, avant de revenir au prétérit : <s-de>Drei Jahre zuvor hatte er die Stadt verlassen. Damals war er jung gewesen…</s-de></p>
<h2>Le présent de narration</h2>
<p>Pour rendre une scène plus intense, le narrateur peut passer au présent : <s-de>Es ist Mitternacht. Plötzlich klingelt das Telefon.</s-de></p>
<h2>Le futur dans le passé : sollte</h2>
<p><s-de>sollte</s-de> + infinitif annonce ce qui allait arriver plus tard : <s-de>Er sollte seine Heimat nie wiedersehen.</s-de> (Il ne devait jamais revoir son pays.)</p>
<div class="tip">À la lecture, le temps indique où tu te trouves dans l'histoire : prétérit = le fil principal, plus-que-parfait = plus loin dans le passé, présent = soudain tout proche, <s-de>sollte</s-de> = un aperçu de l'avenir. Pour écrire un résumé (leçon 126), en revanche, emploie le présent.</div>
`,
    examples: [
      ["Sie öffnete die Tür und sah sich vorsichtig um.", "She opened the door and looked around carefully.", "Elle ouvrit la porte et regarda prudemment autour d'elle."],
      ["Drei Jahre zuvor hatte er die Stadt verlassen.", "Three years earlier, he had left the town.", "Trois ans plus tôt, il avait quitté la ville."],
      ["Damals war sie noch nie im Ausland gewesen.", "At that time she had never been abroad.", "À l'époque, elle n'était encore jamais allée à l'étranger."],
      ["Es ist Mitternacht. Plötzlich klingelt das Telefon.", "It's midnight. Suddenly the phone rings.", "Il est minuit. Soudain, le téléphone sonne."],
      ["Er sollte seine Heimat nie wiedersehen.", "He was never to see his homeland again.", "Il ne devait jamais revoir son pays."],
      ["Niemand ahnte, dass dieser Abend alles verändern sollte.", "Nobody suspected that this evening would change everything.", "Personne ne se doutait que cette soirée allait tout changer."],
      ["Als sie den Brief las, hatte der Regen schon aufgehört.", "When she read the letter, the rain had already stopped.", "Quand elle lut la lettre, la pluie avait déjà cessé."]
    ],
    quiz: [
      { q: "The main tense of a German novel is usually…", q_fr: "Le temps principal d'un roman allemand est en général…", o: ["the Präteritum", "the Perfekt", "the future"], o_fr: ["le prétérit", "le parfait", "le futur"], a: 0, ex: "Präteritum = narrative tense.", ex_fr: "Prétérit = temps du récit." },
      { q: "A flashback starts with…", q_fr: "Un retour en arrière commence par…", o: ["the Plusquamperfekt", "the present", "the Konjunktiv I"], o_fr: ["le plus-que-parfait", "le présent", "le Konjunktiv I"], a: 0, ex: "hatte … verlassen, war … gewesen.", ex_fr: "hatte … verlassen, war … gewesen." },
      { q: "“He was never to see her again.”", q_fr: "« Il ne devait jamais la revoir. »", o: ["Er sollte sie nie wiedersehen.", "Er musste sie nie wiedersehen.", "Er wollte sie nie wiedersehen."], a: 0, ex: "sollte = future in the past.", ex_fr: "sollte = futur dans le passé." },
      { q: "“Es ist Mitternacht. Plötzlich klingelt das Telefon.” uses…", q_fr: "« Es ist Mitternacht. Plötzlich klingelt das Telefon. » emploie…", o: ["the vivid present", "the future", "the Konjunktiv"], o_fr: ["le présent de narration", "le futur", "le Konjunktiv"], a: 0, ex: "Present for a dramatic scene.", ex_fr: "Présent pour une scène dramatique." },
      { q: "Als sie ankam, ___ der Zug schon ___.", q_fr: "Als sie ankam, ___ der Zug schon ___.", o: ["war … abgefahren", "ist … abgefahren", "hatte … abgefahren"], a: 0, ex: "Earlier action: Plusquamperfekt with sein.", ex_fr: "Action antérieure : plus-que-parfait avec sein." }
    ]
  },
  {
    id: 126, level: "C1", kind: "functional", icon: "file-text",
    title: "Everyday German: summarising a literary text", title_fr: "L'allemand de tous les jours : résumer un texte littéraire",
    subtitle: "The classic Inhaltsangabe: an introductory sentence, the plot in the present, no quotations.", subtitle_fr: "L'Inhaltsangabe classique : une phrase d'introduction, l'intrigue au présent, sans citations.",
    body: `
<h2>The introductory sentence</h2>
<p>It names the title, the author, the genre, the year and the theme: <s-de>In der Erzählung „Die Verwandlung“ von Franz Kafka aus dem Jahr 1915 geht es um einen jungen Mann, der sich eines Morgens in ein riesiges Insekt verwandelt hat.</s-de></p>
<h2>The main part</h2>
<table>
<tr><th>Rule</th><th>Phrases</th></tr>
<tr><td>present tense, chronological</td><td><s-de>Zu Beginn… Im weiteren Verlauf… Schließlich…</s-de></td></tr>
<tr><td>setting</td><td><s-de>Die Handlung spielt in…</s-de></td></tr>
<tr><td>no direct speech</td><td><s-de>Die Schwester sagt, sie könne so nicht weiterleben.</s-de></td></tr>
<tr><td>the ending</td><td><s-de>Der Text endet damit, dass…</s-de></td></tr>
</table>
<h2>What to leave out</h2>
<p>No quotations, no suspense (<s-de>Was wird passieren?</s-de>), no personal opinion, no details that don't matter for the plot. An optional final sentence can suggest an interpretation: <s-de>Die Erzählung lässt sich als … deuten.</s-de></p>
<div class="tip">The Inhaltsangabe is a classic exercise in German schools and a good test of C1 writing: it trains you to condense, to stay neutral and to use reported speech. Aim for about a quarter of the length of the original, or less.</div>
`,
    body_fr: `
<h2>La phrase d'introduction</h2>
<p>Elle donne le titre, l'auteur, le genre, l'année et le thème : <s-de>In der Erzählung „Die Verwandlung“ von Franz Kafka aus dem Jahr 1915 geht es um einen jungen Mann, der sich eines Morgens in ein riesiges Insekt verwandelt hat.</s-de></p>
<h2>Le développement</h2>
<table>
<tr><th>Règle</th><th>Formules</th></tr>
<tr><td>au présent, dans l'ordre chronologique</td><td><s-de>Zu Beginn… Im weiteren Verlauf… Schließlich…</s-de></td></tr>
<tr><td>le cadre</td><td><s-de>Die Handlung spielt in…</s-de></td></tr>
<tr><td>pas de discours direct</td><td><s-de>Die Schwester sagt, sie könne so nicht weiterleben.</s-de></td></tr>
<tr><td>la fin</td><td><s-de>Der Text endet damit, dass…</s-de></td></tr>
</table>
<h2>Ce qu'on laisse de côté</h2>
<p>Pas de citations, pas de suspense (<s-de>Was wird passieren?</s-de>), pas d'avis personnel, pas de détails inutiles à l'intrigue. Une dernière phrase facultative peut proposer une interprétation : <s-de>Die Erzählung lässt sich als … deuten.</s-de></p>
<div class="tip">L'Inhaltsangabe est un exercice classique de l'école allemande et un bon test de l'écrit au C1 : il apprend à condenser, à rester neutre et à employer le discours indirect. Vise environ un quart de la longueur de l'original, ou moins.</div>
`,
    examples: [
      ["In der Erzählung „Die Verwandlung“ von Franz Kafka aus dem Jahr 1915 geht es um einen jungen Mann, der sich in ein Insekt verwandelt hat.", "Franz Kafka's story “The Metamorphosis” from 1915 is about a young man who has turned into an insect.", "Le récit « La Métamorphose » de Franz Kafka, paru en 1915, raconte l'histoire d'un jeune homme qui s'est transformé en insecte."],
      ["Die Handlung spielt in der Wohnung der Familie Samsa.", "The story is set in the Samsa family's flat.", "L'action se déroule dans l'appartement de la famille Samsa."],
      ["Zu Beginn versorgt ihn seine Schwester Grete mit Essen.", "At first his sister Grete brings him food.", "Au début, sa sœur Grete lui apporte à manger."],
      ["Im weiteren Verlauf muss die Familie selbst Geld verdienen.", "As the story goes on, the family has to earn money themselves.", "Par la suite, la famille doit gagner elle-même de l'argent."],
      ["Die Schwester sagt, sie könne so nicht weiterleben.", "The sister says she can't go on living like this.", "La sœur dit qu'elle ne peut plus vivre ainsi."],
      ["Der Text endet damit, dass die Familie einen Ausflug macht und neue Pläne schmiedet.", "The text ends with the family going on an outing and making new plans.", "Le texte se termine par une excursion de la famille, qui fait de nouveaux projets."],
      ["Die Erzählung lässt sich als Bild für Entfremdung deuten.", "The story can be interpreted as an image of alienation.", "Le récit peut être interprété comme une image de l'aliénation."]
    ],
    quiz: [
      { q: "Which tense do you use in an Inhaltsangabe?", q_fr: "Quel temps emploie-t-on dans une Inhaltsangabe ?", o: ["The present", "The Präteritum", "The Plusquamperfekt"], o_fr: ["Le présent", "Le prétérit", "Le plus-que-parfait"], a: 0, ex: "Always the present.", ex_fr: "Toujours le présent." },
      { q: "What belongs in the introductory sentence?", q_fr: "Que contient la phrase d'introduction ?", o: ["Title, author, genre, year and theme", "Your opinion of the book", "A quotation from the first page"], o_fr: ["Titre, auteur, genre, année et thème", "Ton avis sur le livre", "Une citation de la première page"], a: 0, ex: "The key facts and the theme.", ex_fr: "Les informations essentielles et le thème." },
      { q: "How do you render what a character says?", q_fr: "Comment rendre ce que dit un personnage ?", o: ["In reported speech: Sie sagt, sie könne nicht…", "With a direct quotation", "You don't mention it at all"], o_fr: ["Au discours indirect : Sie sagt, sie könne nicht…", "Avec une citation directe", "On n'en parle pas du tout"], a: 0, ex: "No direct speech in a summary.", ex_fr: "Pas de discours direct dans un résumé." },
      { q: "“The story is set in Lübeck.”", q_fr: "« L'action se déroule à Lübeck. »", o: ["Die Handlung spielt in Lübeck.", "Die Handlung liegt in Lübeck.", "Die Handlung findet sich Lübeck."], a: 0, ex: "Die Handlung spielt in…", ex_fr: "Die Handlung spielt in…" },
      { q: "“The text ends with…”", q_fr: "« Le texte se termine par… »", o: ["Der Text endet damit, dass…", "Der Text endet dafür, dass…", "Der Text hört auf mit, dass…"], a: 0, ex: "enden damit, dass…", ex_fr: "enden damit, dass…" }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    124: {
      gap: [["Am Bahnhof ___, rief sie ihre Schwester an. (ankommen)", "angekommen"], ["Laut ___ verließ sie den Raum. (lachen)", "lachend"], ["Von Neugier ___, öffnete er den Brief. (treiben)", "getrieben"], ["Offen ___ fand ich das Ende enttäuschend. (gestehen)", "gestanden"]],
      fix: [["Am Bahnhof angekommen, sie rief an.", "Am Bahnhof angekommen, rief sie an.", "After the participle clause, the verb comes first.", "Après la proposition participiale, le verbe vient en premier."], ["Laut gelacht verließ sie den Raum.", "Laut lachend verließ sie den Raum.", "At the same time: Partizip I (lachend).", "Simultanéité : Partizip I (lachend)."]],
      task: ["Rewrite these sentences with participle clauses: Nachdem er in Berlin angekommen war, suchte er ein Hotel. Während sie leise sang, packte sie ihren Koffer. Weil er vom Lärm geweckt worden war, stand er auf.", "Réécris ces phrases avec des propositions participiales : Nachdem er in Berlin angekommen war, suchte er ein Hotel. Während sie leise sang, packte sie ihren Koffer. Weil er vom Lärm geweckt worden war, stand er auf.", "In Berlin angekommen, suchte er ein Hotel. Leise singend packte sie ihren Koffer. Vom Lärm geweckt, stand er auf."]
    },
    125: {
      gap: [["Drei Jahre zuvor ___ er die Stadt verlassen.", "hatte"], ["Damals ___ sie noch nie im Ausland gewesen.", "war"], ["Er ___ seine Heimat nie wiedersehen.", "sollte", "was never to", "ne devait jamais"], ["Als sie den Brief las, hatte der Regen schon ___.", "aufgehört"]],
      fix: [["Drei Jahre zuvor hat er die Stadt verlassen gehabt.", "Drei Jahre zuvor hatte er die Stadt verlassen.", "Flashback: Plusquamperfekt (hatte … verlassen).", "Retour en arrière : plus-que-parfait (hatte … verlassen)."], ["Er musste seine Heimat nie wiedersehen.", "Er sollte seine Heimat nie wiedersehen.", "Future in the past: sollte.", "Futur dans le passé : sollte."]],
      task: ["Write the opening of a short story (5 sentences): the main line in the Präteritum, a flashback in the Plusquamperfekt, and a glimpse of the future with sollte.", "Écris le début d'une nouvelle (5 phrases) : le fil principal au prétérit, un retour en arrière au plus-que-parfait, et un aperçu de l'avenir avec sollte.", "Es regnete, als Mira den Bahnhof verließ. Zwanzig Jahre zuvor hatte sie die Stadt im Streit verlassen. Damals war sie gerade achtzehn geworden. Jetzt stand sie wieder vor dem Haus ihrer Eltern. Sie ahnte nicht, dass dieser Besuch ihr Leben verändern sollte."]
    },
    126: {
      gap: [["In der Erzählung „Die Verwandlung“ von Franz Kafka ___ es um einen jungen Mann.", "geht"], ["Die Handlung ___ in der Wohnung der Familie Samsa.", "spielt"], ["Die Schwester sagt, sie ___ so nicht weiterleben.", "könne"], ["Der Text endet ___, dass die Familie neue Pläne macht.", "damit"]],
      fix: [["Gregor wachte eines Morgens als Insekt auf.", "Gregor wacht eines Morgens als Insekt auf.", "An Inhaltsangabe is written in the present.", "Une Inhaltsangabe s'écrit au présent."], ["Die Schwester sagt: „Ich kann so nicht weiterleben.“", "Die Schwester sagt, sie könne so nicht weiterleben.", "No direct speech: use reported speech.", "Pas de discours direct : on emploie le discours indirect."]],
      task: ["Write an Inhaltsangabe (about 80 words) of a fairy tale you know well, for example “Hänsel und Gretel”: introductory sentence, plot in the present, reported speech, ending.", "Écris une Inhaltsangabe (environ 80 mots) d'un conte que tu connais bien, par exemple « Hänsel et Gretel » : phrase d'introduction, intrigue au présent, discours indirect, fin.", "Im Märchen „Hänsel und Gretel“ der Brüder Grimm geht es um zwei Kinder, die von ihren Eltern im Wald ausgesetzt werden. Zu Beginn findet Hänsel mit Kieselsteinen den Weg zurück. Beim zweiten Mal verirren sich die Kinder und kommen zu einem Haus aus Lebkuchen. Dort wohnt eine Hexe, die Hänsel mästen will, um ihn zu essen. Gretel stößt die Hexe schließlich in den Ofen. Das Märchen endet damit, dass die Kinder mit den Schätzen der Hexe nach Hause zurückkehren."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "lesekreis", lesson: 124, level: "C1", icon: "book-open", partner: "Ulrike", role: "a member of your book club", role_fr: "une membre de ton club de lecture",
    title: "At the book club", title_fr: "Au club de lecture",
    setting: "Your book club has read a long family novel. Ulrike loved it; you have mixed feelings. You discuss it.", setting_fr: "Ton club de lecture a lu une longue saga familiale. Ulrike l'a adorée ; tu as un avis plus partagé. Vous en discutez.",
    turns: [
      { p: "Und? Wie fandest du den Roman? Ich war total begeistert!", en: "Well? What did you think of the novel? I was absolutely thrilled!", fr: "Alors ? Comment as-tu trouvé le roman ? Moi, j'ai adoré !" },
      { y: ["Offen gestanden fand ich den Mittelteil ziemlich langatmig.", "Offen gestehend fand ich den Mittelteil ziemlich langatmig.", "Offen gestanden ich fand den Mittelteil ziemlich langatmig."], en: "Frankly, I found the middle section rather long-winded.", fr: "Franchement, j'ai trouvé la partie centrale assez interminable.", why: "Fixed phrase offen gestanden; then the verb.", why_fr: "Tournure figée offen gestanden ; puis le verbe." },
      { p: "Langatmig? Aber die Figuren sind doch so vielschichtig!", en: "Long-winded? But the characters are so complex!", fr: "Interminable ? Mais les personnages sont tellement riches !" },
      { y: ["Da hast du recht. Abgesehen davon hat mich vor allem die Großmutter beeindruckt.", "Da hast du recht. Abgesehen davon mich hat vor allem die Großmutter beeindruckt.", "Da hast du recht. Abgesehen von hat mich vor allem die Großmutter beeindruckt."], en: "You're right there. Apart from that, I was impressed above all by the grandmother.", fr: "Là, tu as raison. À part ça, j'ai surtout admiré la grand-mère.", why: "abgesehen davon in first position: verb next.", why_fr: "abgesehen davon en tête : verbe juste après." },
      { p: "Ja, die Szene, in der sie das Haus verkauft, ist ein echter Wendepunkt.", en: "Yes, the scene where she sells the house is a real turning point.", fr: "Oui, la scène où elle vend la maison est un vrai tournant." },
      { y: ["Stimmt. Von der Familie verlassen, trifft sie diese Entscheidung ganz allein.", "Stimmt. Von der Familie verlassend, trifft sie diese Entscheidung ganz allein.", "Stimmt. Von der Familie verlassen, sie trifft diese Entscheidung ganz allein."], en: "True. Abandoned by her family, she makes that decision all on her own.", fr: "C'est vrai. Abandonnée par sa famille, elle prend cette décision toute seule.", why: "Passive meaning: Partizip II (verlassen); then the verb.", why_fr: "Sens passif : Partizip II (verlassen) ; puis le verbe." },
      { p: "Und was hältst du vom Ende?", en: "And what do you think of the ending?", fr: "Et que penses-tu de la fin ?" },
      { y: ["Im Grunde genommen ist es offen. Jeder kann es anders deuten.", "Im Grunde nehmend ist es offen. Jeder kann es anders deuten.", "Im Grunde genommen es ist offen. Jeder kann es anders deuten."], en: "Basically, it's open. Everyone can interpret it differently.", fr: "Au fond, elle est ouverte. Chacun peut l'interpréter différemment.", why: "Fixed phrase im Grunde genommen; then the verb.", why_fr: "Tournure figée im Grunde genommen ; puis le verbe." },
      { p: "Also hat es dir doch gefallen?", en: "So you did like it after all?", fr: "Donc, ça t'a plu, finalement ?" },
      { y: ["Kurz gesagt: ein großartiges Buch mit ein paar Längen.", "Kurz sagend: ein großartiges Buch mit ein paar Längen.", "Kurz gesagt: ein großartiges Buch mit ein paar Länge."], en: "In short: a great book with a few slow passages.", fr: "Bref : un livre formidable, avec quelques longueurs.", why: "Fixed phrase kurz gesagt; die Längen (plural).", why_fr: "Tournure figée kurz gesagt ; die Längen (pluriel)." }
    ] },
  { id: "inhaltsangabe", lesson: 126, level: "C1", icon: "file-text", partner: "Herr Böttcher", role: "your German teacher", role_fr: "ton professeur d'allemand",
    title: "Summarising Kafka orally", title_fr: "Résumer Kafka à l'oral",
    setting: "In your evening class, Herr Böttcher asks you to summarise Franz Kafka's story “Die Verwandlung” for the group.", setting_fr: "Dans ton cours du soir, Herr Böttcher te demande de résumer pour le groupe le récit de Franz Kafka « Die Verwandlung ».",
    turns: [
      { p: "Bitte beginnen Sie mit dem Einleitungssatz.", en: "Please start with the introductory sentence.", fr: "Commencez par la phrase d'introduction, s'il vous plaît." },
      { y: ["In der Erzählung „Die Verwandlung“ von Franz Kafka aus dem Jahr 1915 geht es um Gregor Samsa, der sich in ein riesiges Insekt verwandelt hat.", "In der Erzählung „Die Verwandlung“ von Franz Kafka aus dem Jahr 1915 ging es um Gregor Samsa, der sich in ein riesiges Insekt verwandelt hatte.", "In der Erzählung „Die Verwandlung“ von Franz Kafka aus dem Jahr 1915 geht es um Gregor Samsa, der hat sich in ein riesiges Insekt verwandelt."], en: "Franz Kafka's story “The Metamorphosis” from 1915 is about Gregor Samsa, who has turned into a giant insect.", fr: "Le récit « La Métamorphose » de Franz Kafka, paru en 1915, raconte l'histoire de Gregor Samsa, qui s'est transformé en insecte géant.", why: "Present tense; relative clause: verb at the end.", why_fr: "Présent ; relative : verbe à la fin." },
      { p: "Gut. Was passiert zu Beginn?", en: "Good. What happens at the beginning?", fr: "Bien. Que se passe-t-il au début ?" },
      { y: ["Gregor ist Handlungsreisender. Eines Morgens wacht er auf und kann nicht mehr zur Arbeit gehen.", "Gregor war Handlungsreisender. Eines Morgens wachte er auf und konnte nicht mehr zur Arbeit gehen.", "Gregor ist Handlungsreisender. Eines Morgens er wacht auf und kann nicht mehr zur Arbeit gehen."], en: "Gregor is a travelling salesman. One morning he wakes up and can no longer go to work.", fr: "Gregor est représentant de commerce. Un matin, il se réveille et ne peut plus aller travailler.", why: "Present tense; verb second after eines Morgens.", why_fr: "Présent ; verbe en deuxième position après eines Morgens." },
      { p: "Und wie reagiert die Familie?", en: "And how does the family react?", fr: "Et comment réagit la famille ?" },
      { y: ["Zu Beginn versorgt ihn seine Schwester Grete. Im weiteren Verlauf muss die Familie selbst Geld verdienen.", "Zu Beginn versorgte ihn seine Schwester Grete. Im weiteren Verlauf musste die Familie selbst Geld verdienen.", "Zu Beginn seine Schwester Grete versorgt ihn. Im weiteren Verlauf muss die Familie selbst Geld verdienen."], en: "At first his sister Grete looks after him. Later the family has to earn money themselves.", fr: "Au début, sa sœur Grete s'occupe de lui. Par la suite, la famille doit gagner elle-même de l'argent.", why: "Present tense; signposts zu Beginn, im weiteren Verlauf.", why_fr: "Présent ; repères zu Beginn, im weiteren Verlauf." },
      { p: "Was sagt die Schwester später über ihn?", en: "What does the sister later say about him?", fr: "Que dit la sœur de lui, plus tard ?" },
      { y: ["Sie sagt, man müsse versuchen, ihn loszuwerden.", "Sie sagt: „Wir müssen versuchen, ihn loszuwerden.“", "Sie sagt, man muss versuchen, ihn loswerden."], en: "She says they must try to get rid of him.", fr: "Elle dit qu'il faut essayer de se débarrasser de lui.", why: "Reported speech (müsse), no direct quotation.", why_fr: "Discours indirect (müsse), pas de citation directe." },
      { p: "Und das Ende?", en: "And the ending?", fr: "Et la fin ?" },
      { y: ["Der Text endet damit, dass Gregor stirbt und die Familie erleichtert einen Ausflug macht.", "Der Text endet damit, dass Gregor stirbt und die Familie macht erleichtert einen Ausflug.", "Der Text endete damit, dass Gregor starb und die Familie erleichtert einen Ausflug machte."], en: "The text ends with Gregor dying and the family going on an outing, relieved.", fr: "Le texte se termine par la mort de Gregor et une excursion de la famille, soulagée.", why: "Present tense; dass: both verbs at the end of their clauses.", why_fr: "Présent ; dass : les deux verbes à la fin de leur proposition." }
    ] }
  );

  W.READINGS.push({
    id: "buddenbrooks", level: "C1", icon: "book-open", title: "Buddenbrooks: der Verfall einer Familie", genre: "Feature article",
    intro: "A young author's first novel, a scandal in his home town, and a Nobel Prize: the story of “Buddenbrooks”.",
    intro_fr: "Le premier roman d'un jeune auteur, un scandale dans sa ville natale et un prix Nobel : l'histoire des « Buddenbrooks ».",
    paragraphs: [
      { de: "Thomas Mann, 1875 in Lübeck als Sohn einer angesehenen Kaufmannsfamilie geboren, war gerade 25 Jahre alt, als er seinen ersten Roman beendete. 1901 erschien „Buddenbrooks. Verfall einer Familie“. Über vier Generationen erzählt der Roman vom Aufstieg und vom langsamen Niedergang einer Lübecker Kaufmannsfamilie.", en: "Thomas Mann, born in Lübeck in 1875 into a respected merchant family, was only 25 when he finished his first novel. “Buddenbrooks. The Decline of a Family” appeared in 1901. Across four generations, the novel tells of the rise and slow decline of a Lübeck merchant family.", fr: "Thomas Mann, né en 1875 à Lübeck dans une famille de négociants respectée, n'a que 25 ans lorsqu'il achève son premier roman. En 1901 paraît « Buddenbrooks. Le déclin d'une famille ». Sur quatre générations, le roman raconte l'ascension puis le lent déclin d'une famille de négociants de Lübeck." },
      { de: "Die Geschichte beginnt 1835 mit einem festlichen Essen im neuen Haus der Familie, in einer Zeit des Wohlstands. Doch von Generation zu Generation schwindet die Kraft der Familie: Die Geschäfte gehen schlechter, und die Nachkommen interessieren sich mehr für Kunst und Musik als für den Handel. Der Erzähler beschreibt diesen Verfall mit großer Genauigkeit und oft mit leiser Ironie.", en: "The story begins in 1835 with a festive dinner in the family's new house, in a time of prosperity. But from generation to generation, the family's strength fades: business gets worse, and the descendants are more interested in art and music than in trade. The narrator describes this decline with great precision and often with gentle irony.", fr: "L'histoire commence en 1835 par un repas de fête dans la nouvelle maison de la famille, à une époque de prospérité. Mais de génération en génération, la force de la famille s'étiole : les affaires périclitent, et les descendants s'intéressent davantage à l'art et à la musique qu'au commerce. Le narrateur décrit ce déclin avec une grande précision et souvent avec une ironie discrète." },
      { de: "In Lübeck sorgte das Buch zunächst für Empörung. Manche Bürger glaubten, sich selbst oder ihre Verwandten in den Figuren wiederzuerkennen, und fühlten sich bloßgestellt. Tatsächlich hatte Mann vieles aus der Geschichte seiner eigenen Familie übernommen. Mit der Zeit wurde der Roman jedoch zu einem der meistgelesenen Werke der deutschen Literatur.", en: "In Lübeck, the book initially caused outrage. Some citizens believed they recognised themselves or their relatives in the characters and felt exposed. Indeed, Mann had taken much from his own family's history. Over time, however, the novel became one of the most widely read works of German literature.", fr: "À Lübeck, le livre suscite d'abord l'indignation. Certains habitants croient se reconnaître, eux ou leurs proches, dans les personnages, et se sentent mis à nu. De fait, Mann avait beaucoup emprunté à l'histoire de sa propre famille. Avec le temps, le roman devient pourtant l'une des œuvres les plus lues de la littérature allemande." },
      { de: "1929 erhielt Thomas Mann den Nobelpreis für Literatur, und zwar ausdrücklich für die „Buddenbrooks“. Wenige Jahre später, nach der Machtübernahme der Nationalsozialisten, ging er ins Exil, unter anderem in die USA; seine Heimatstadt sollte er erst nach dem Krieg wiedersehen. Er starb 1955 in Zürich. Heute erinnert in Lübeck das Buddenbrookhaus an ihn und seinen Bruder Heinrich.", en: "In 1929, Thomas Mann received the Nobel Prize in Literature, explicitly for “Buddenbrooks”. A few years later, after the Nazis came to power, he went into exile, among other places to the USA; he was not to see his home town again until after the war. He died in Zurich in 1955. Today, the Buddenbrookhaus in Lübeck commemorates him and his brother Heinrich.", fr: "En 1929, Thomas Mann reçoit le prix Nobel de littérature, explicitement pour les « Buddenbrooks ». Quelques années plus tard, après l'arrivée au pouvoir des nationaux-socialistes, il part en exil, notamment aux États-Unis ; il ne devait revoir sa ville natale qu'après la guerre. Il meurt en 1955 à Zurich. Aujourd'hui, la Buddenbrookhaus de Lübeck rend hommage à lui et à son frère Heinrich." }
    ],
    glossary: { "angesehenen": ["respected", "respectée"], "Kaufmannsfamilie": ["merchant family", "famille de négociants"], "beendete": ["finished", "acheva"], "erschien": ["appeared, was published", "parut"], "Aufstieg": ["rise", "ascension"], "Niedergang": ["decline", "déclin"], "Lübecker": ["of Lübeck", "de Lübeck"], "festlichen": ["festive", "de fête"], "Wohlstands": ["prosperity", "prospérité"], "schwindet": ["fades, dwindles", "s'étiole"], "Nachkommen": ["descendants", "descendants"], "Genauigkeit": ["precision", "précision"], "leiser": ["quiet, gentle", "discrète"], "Empörung": ["outrage", "indignation"], "wiederzuerkennen": ["to recognise", "reconnaître"], "bloßgestellt": ["exposed", "mis à nu"], "Tatsächlich": ["indeed, in fact", "de fait"], "meistgelesenen": ["most widely read", "les plus lues"], "ausdrücklich": ["explicitly", "explicitement"], "Machtübernahme": ["seizure of power", "prise du pouvoir"], "Exil": ["exile", "exil"], "Heimatstadt": ["home town", "ville natale"], "Buddenbrookhaus": ["Buddenbrook House (museum in Lübeck)", "maison des Buddenbrook (musée à Lübeck)"] },
    questions: [
      { q: "Wie alt war Thomas Mann, als er die „Buddenbrooks“ beendete?", o: ["Etwa 25 Jahre", "Etwa 50 Jahre", "Etwa 15 Jahre"], a: 0 },
      { q: "Wovon erzählt der Roman?", o: ["Vom Aufstieg und Niedergang einer Lübecker Kaufmannsfamilie über vier Generationen", "Von einer Reise nach Amerika", "Vom Leben in einem Kloster"], a: 0 },
      { q: "Wie reagierten manche Lübecker zunächst?", o: ["Mit Empörung, weil sie sich in den Figuren wiederzuerkennen glaubten", "Mit großer Begeisterung", "Gar nicht, sie lasen das Buch nicht"], a: 0 },
      { q: "Wofür erhielt Thomas Mann 1929 den Nobelpreis?", o: ["Ausdrücklich für die „Buddenbrooks“", "Für ein Gedicht", "Für seine politischen Reden"], a: 0 },
      { q: "Was erinnert heute in Lübeck an Thomas Mann?", o: ["Das Buddenbrookhaus", "Ein Hafen mit seinem Namen", "Eine Universität"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-c1-8", unit: "c1-8", level: "C1", icon: "radio",
    title: "Die Kunst des Übersetzens", title_fr: "L'art de la traduction",
    context: "A literature programme on the radio. The host talks to Frau Sommer, a literary translator, about her work.", context_fr: "Une émission littéraire à la radio. L'animatrice parle avec Frau Sommer, traductrice littéraire, de son travail.",
    words: [["die Übersetzerin, -nen", "the translator", "la traductrice"], ["wortwörtlich", "word for word", "mot à mot"], ["der Klang", "the sound", "la sonorité"], ["das Wortspiel, -e", "the pun", "le jeu de mots"], ["die Vorlage, -n", "the original (text)", "l'original"]],
    lines: [["Moderatorin", "Frau Sommer, Sie übersetzen seit dreißig Jahren Romane aus dem Französischen. Wie gehen Sie vor?", "de-DE"], ["Frau Sommer", "Zuerst lese ich das ganze Buch, ohne etwas zu notieren. Erst danach, vom Ton der Geschichte durchdrungen, beginne ich mit der ersten Seite.", "de-DE"], ["Moderatorin", "Übersetzen Sie wortwörtlich?", "de-DE"], ["Frau Sommer", "Nein, streng genommen wäre das sogar falsch. Ein Satz muss im Deutschen so klingen, als wäre er auf Deutsch geschrieben worden. Wortspiele sind dabei am schwierigsten.", "de-DE"], ["Moderatorin", "Gibt es ein Buch, an dem Sie fast verzweifelt sind?", "de-DE"], ["Frau Sommer", "Oh ja. Bei meinem dritten Roman saß ich wochenlang an einem einzigen Gedicht. Niemand ahnte damals, dass gerade dieses Buch mein größter Erfolg werden sollte.", "de-DE"], ["Moderatorin", "Was raten Sie jungen Übersetzern?", "de-DE"], ["Frau Sommer", "Viel lesen, laut lesen und der Vorlage treu bleiben, ohne sie zu kopieren. Kurz gesagt: Man muss beide Sprachen lieben.", "de-DE"]],
    gist: ["Worüber spricht Frau Sommer?", ["Über ihre Arbeit als literarische Übersetzerin", "Über ihren eigenen Roman", "Über einen Französischkurs"]],
    detail: [["Was macht Frau Sommer, bevor sie zu übersetzen beginnt?", ["Sie liest das ganze Buch, ohne etwas zu notieren.", "Sie übersetzt jeden Tag zehn Seiten.", "Sie spricht mit dem Autor."]], ["Warum übersetzt sie nicht wortwörtlich?", ["Der Satz soll klingen, als wäre er auf Deutsch geschrieben.", "Weil es zu lange dauert.", "Weil der Verlag es verbietet."]], ["Was ist für sie am schwierigsten?", ["Wortspiele", "Lange Kapitel", "Namen"]], ["Was wurde aus dem dritten Roman?", ["Ihr größter Erfolg", "Ein Misserfolg", "Er wurde nie veröffentlicht."]]],
    decode: ["Erst danach, vom Ton der Geschichte durchdrungen, beginne ich mit der ersten Seite.", "Niemand ahnte damals, dass gerade dieses Buch mein größter Erfolg werden sollte."],
    tip: "Participle clauses (vom Ton durchdrungen) and sollte for the future in the past are typical of literary language, even in interviews about books. When you hear a participle between commas, it usually adds a circumstance to the main action.", tip_fr: "Les propositions participiales (vom Ton durchdrungen) et sollte pour le futur dans le passé sont typiques de la langue littéraire, même dans les interviews sur les livres. Quand tu entends un participe entre deux virgules, il ajoute en général une circonstance à l'action principale."
  }]);

  W.PROMPTS.push({ id: "de-c1-8", level: "C1", q: "Halte einen Vortrag (etwa drei bis vier Minuten): „Haben Klassiker in der Schule noch ihren Platz?“ Nenne Beispiele, wäge Argumente für Klassiker und für Gegenwartsliteratur ab und komm zu einem Fazit.", en: "Give a talk (about three to four minutes): “Do classics still have a place at school?” Give examples, weigh arguments for classics and for contemporary literature, and reach a conclusion.", fr: "Fais un exposé (environ trois à quatre minutes) : « Les classiques ont-ils encore leur place à l'école ? » Donne des exemples, pèse les arguments en faveur des classiques et de la littérature contemporaine, et conclus.", time: 240,
    phrases: ["Streng genommen…", "Ein gutes Beispiel ist…", "Befürworter der Klassiker betonen, dass…", "Abgesehen davon…", "Kurz gesagt: …"],
    model: "Ich möchte heute der Frage nachgehen, ob Klassiker in der Schule noch ihren Platz haben. Streng genommen ist ein Klassiker ein Werk, das auch nach Generationen noch gelesen wird, weil es grundlegende Fragen stellt. Ein gutes Beispiel ist Kafkas „Verwandlung“: Die Geschichte eines jungen Mannes, der eines Morgens als Insekt erwacht, spricht von Einsamkeit und Druck in der Familie, Themen, die auch heute aktuell sind. Befürworter der Klassiker betonen, dass Schüler so eine gemeinsame kulturelle Grundlage erhalten. Kritiker halten dagegen, dass viele Jugendliche von der altmodischen Sprache abgeschreckt werden und das Lesen ganz aufgeben. Abgesehen davon fehlt in den Lehrplänen oft die Gegenwartsliteratur, die Fragen von heute behandelt, etwa Migration oder Digitalisierung. Meiner Meinung nach braucht die Schule beides. Kurz gesagt: Ein Klassiker pro Halbjahr, sorgfältig vorbereitet, und daneben aktuelle Bücher, die Lust auf mehr machen." });

  W.WRITING_GUIDE["c1-8"] = { genre: "An argued text (C1)", genre_fr: "Un texte argumenté (C1)",
    plan: [["A lead-in and your thesis.", "Une amorce et ta thèse."], ["An argument with a literary example.", "Un argument avec un exemple littéraire."], ["The opposing view.", "Le point de vue opposé."], ["Your answer, with a nuance.", "Ta réponse, avec une nuance."], ["A conclusion and a proposal.", "Une conclusion et une proposition."]],
    marks: [["Streng genommen", "a fixed participle phrase", "une tournure participiale figée"], ["Ich bin der Auffassung", "the thesis", "la thèse"], ["Buddenbrooks", "a literary example", "un exemple littéraire"], ["Von der Länge abgeschreckt", "a participle clause", "une proposition participiale"], ["Offen gestanden", "a personal remark", "une remarque personnelle"], ["Kurz gesagt", "the conclusion", "la conclusion"]] };

  /* Atelier de langue : champs allemands d'abord, puis anglais et français (voir localize.js). */
  W.LEXIS = W.LEXIS || {};
  W.LEXIS["c1-8"] = {
    colloc: [
      ["einen Roman verfassen", "to write a novel", "écrire un roman", "Sie verfasste ihren ersten Roman mit 25 Jahren.", "verfasste", ["baute", "stellte"]],
      ["Die Handlung spielt in…", "the story is set in…", "l'action se déroule à…", "Die Handlung spielt im Lübeck des 19. Jahrhunderts.", "spielt", ["liegt", "steht"]],
      ["eine Rolle verkörpern", "to embody a role", "incarner un rôle", "Die Schauspielerin verkörpert die Mutter sehr überzeugend.", "verkörpert", ["verkauft", "verkürzt"]],
      ["jemanden in seinen Bann ziehen", "to captivate someone", "captiver quelqu'un", "Der Roman zieht die Leser sofort in seinen Bann.", "zieht", ["nimmt", "bringt"]],
      ["ein Werk veröffentlichen", "to publish a work", "publier une œuvre", "Der Verlag veröffentlichte das Werk im Jahr 1901.", "veröffentlichte", ["eröffnete", "öffnete"]],
      ["einen Preis verleihen", "to award a prize", "décerner un prix", "Ihr wurde ein wichtiger Literaturpreis verliehen.", "verliehen", ["geliehen", "verteilt"]],
      ["Spannung erzeugen", "to create suspense", "créer du suspense", "Die Autorin erzeugt Spannung durch kurze Kapitel.", "erzeugt", ["erzieht", "ergibt"]],
      ["einen Wendepunkt markieren", "to mark a turning point", "marquer un tournant", "Der Brief markiert einen Wendepunkt in der Handlung.", "markiert", ["merkt", "marschiert"]],
      ["ein Gedicht vortragen", "to recite a poem", "réciter un poème", "Sie trug das Gedicht auswendig vor.", "trug", ["trat", "zog"]],
      ["auf Resonanz stoßen", "to meet with a response", "trouver un écho", "Das Buch stieß auf große Resonanz.", "stieß", ["fiel", "ging"]]
    ],
    wf: [
      ["Die besondere ___ des Romans begeisterte die Kritik. (ERZÄHLEN)", "Erzählweise|Erzählkunst"],
      ["Das Buch ist so ___, dass ich es nicht weglegen konnte. (FESSELN)", "fesselnd"],
      ["Die ___ des Gedichts ist umstritten. (DEUTEN)", "Deutung"],
      ["Der Roman ist sehr ___ und lässt viele Deutungen zu. (SCHICHT)", "vielschichtig"],
      ["Die ___ der Autorin fand im Literaturhaus statt. (LESEN)", "Lesung"],
      ["Der Erzähler beschreibt die Figuren mit leiser ___. (IRONISCH)", "Ironie"],
      ["Thomas Mann ist einer der ___ Autoren des 20. Jahrhunderts. (BEDEUTEN)", "bedeutendsten"],
      ["Die ___ des Romans ins Deutsche dauerte drei Jahre. (ÜBERSETZEN)", "Übersetzung"]
    ],
    kwt: [
      ["Nachdem sie am Bahnhof angekommen war, rief sie an.", "ANGEKOMMEN", "Am Bahnhof ___ an.", "angekommen, rief sie|angekommen rief sie"],
      ["Während sie laut lachte, verließ sie den Raum.", "LACHEND", "Laut ___ den Raum.", "lachend verließ sie"],
      ["Er sah seine Heimat nie wieder.", "SOLLTE", "Er ___ wiedersehen.", "sollte seine Heimat nie"],
      ["Wenn man es genau nimmt, ist das kein Roman.", "GENOMMEN", "___ ist das kein Roman.", "Streng genommen"],
      ["Die Handlung findet in Lübeck statt.", "SPIELT", "Die Handlung ___.", "spielt in Lübeck"],
      ["Der Roman wurde 1901 veröffentlicht.", "ERSCHIEN", "Der Roman ___.", "erschien 1901|erschien im Jahr 1901"]
    ],
    idioms: [
      ["eine Leseratte sein", "sehr gern und viel lesen", "to be a bookworm", "être un rat de bibliothèque", "Schon als Kind war sie eine richtige Leseratte.", "eine richtige Leseratte"],
      ["ein Buch mit sieben Siegeln", "etwas völlig Unverständliches", "a closed book", "un mystère, de l'hébreu", "Moderne Lyrik ist für mich ein Buch mit sieben Siegeln.", "ein Buch mit sieben Siegeln"],
      ["Schnee von gestern sein", "veraltet, nicht mehr aktuell sein", "to be old news", "être de l'histoire ancienne", "Diese Debatte ist doch Schnee von gestern.", "Schnee von gestern"],
      ["wie ein offenes Buch sein", "leicht zu durchschauen sein", "to be an open book", "être un livre ouvert", "Für seine Schwester ist er wie ein offenes Buch.", "wie ein offenes Buch"],
      ["im Bilde sein", "gut informiert sein", "to be in the picture", "être au courant", "Nach dem ersten Kapitel ist man im Bilde.", "im Bilde"],
      ["das Ende vom Lied", "das (meist enttäuschende) Ergebnis", "the upshot", "le fin mot de l'histoire", "Das Ende vom Lied war, dass niemand das Buch lesen wollte.", "Das Ende vom Lied"],
      ["Bände sprechen", "sehr aussagekräftig sein", "to speak volumes", "en dire long", "Sein Schweigen spricht Bände.", "spricht Bände"],
      ["etwas aus dem Stegreif tun", "etwas ohne Vorbereitung tun", "to do something off the cuff", "improviser quelque chose", "Sie trug das Gedicht aus dem Stegreif vor.", "aus dem Stegreif"]
    ]
  };

  W.COURSE.push({ id: "c1-8", level: "C1", icon: "feather", title: "Literature", title_fr: "Littérature",
    intro: "Novels, stories, poems: in this unit, you'll learn the participle clauses of written German (Am Bahnhof angekommen, rief sie an) and the fixed phrases that also enrich your speech (offen gestanden, kurz gesagt), the tenses of narration (Präteritum, flashbacks, sollte for the future in the past), and how to write the classic German Inhaltsangabe, with Kafka's “Metamorphosis” as an example. You'll also read the story of Thomas Mann's “Buddenbrooks”.",
    intro_fr: "Romans, récits, poèmes : dans cette unité, tu vas apprendre les propositions participiales de l'allemand écrit (Am Bahnhof angekommen, rief sie an) et les tournures figées qui enrichissent aussi l'oral (offen gestanden, kurz gesagt), les temps du récit (prétérit, retours en arrière, sollte pour le futur dans le passé), et la façon d'écrire l'Inhaltsangabe classique, avec « La Métamorphose » de Kafka comme exemple. Tu liras aussi l'histoire des « Buddenbrooks » de Thomas Mann.",
    can: ["Shorten clauses into participle clauses and use fixed participle phrases", "Recognise and use the tenses of narration", "Write a neutral summary of a literary text in the present", "Talk about literature: genres, characters, interpretations", "Write an argued text on books and reading (C1)"],
    can_fr: ["Réduire des subordonnées en propositions participiales et employer les tournures figées", "Reconnaître et employer les temps du récit", "Écrire un résumé neutre d'un texte littéraire au présent", "Parler de littérature : genres, personnages, interprétations", "Écrire un texte argumenté sur les livres et la lecture (C1)"],
    lessons: [124, 125, 126], vocab: ["literaturDE", "deutungDE"], reading: "buddenbrooks", prompt: "de-c1-8",
    writing: { task: "Write an argued text (220-260 words) on the question: “Should schools read fewer classics and more contemporary literature?” Include a lead-in and thesis, an argument with a literary example, the opposing view, your answer with a nuance, and a conclusion.", task_fr: "Écris un texte argumenté (220 à 260 mots) sur la question : « L'école devrait-elle lire moins de classiques et davantage de littérature contemporaine ? » Avec une amorce et une thèse, un argument illustré d'un exemple littéraire, le point de vue opposé, ta réponse avec une nuance, et une conclusion.", words: "220-260",
      tips: ["Streng genommen…", "Ich bin der Auffassung, dass…", "Ein gutes Beispiel ist…", "Offen gestanden…", "Kurz gesagt: …"],
      checklist: ["I wrote a lead-in and a clear thesis", "I gave a literary example", "I presented the opposing view", "I used a participle clause or a fixed participle phrase", "I wrote between 220 and 260 words"],
      checklist_fr: ["J'ai écrit une amorce et une thèse claire", "J'ai donné un exemple littéraire", "J'ai présenté le point de vue opposé", "J'ai employé une proposition participiale ou une tournure figée", "J'ai écrit entre 220 et 260 mots"],
      model: "Was sollen Schülerinnen und Schüler lesen? Streng genommen stellt sich diese Frage jeder Generation neu, doch heute wird sie besonders heftig diskutiert. Ich bin der Auffassung, dass die Schule nicht auf Klassiker verzichten sollte, ihnen aber mehr Gegenwartsliteratur an die Seite stellen muss.\n\nFür die Klassiker spricht, dass sie zeitlose Fragen behandeln. Ein gutes Beispiel sind Thomas Manns „Buddenbrooks“: Der Roman erzählt vom Verfall einer Familie, die am Druck der Erwartungen zerbricht, ein Thema, das viele Jugendliche aus ihrem eigenen Leben kennen. Wer solche Werke liest, teilt zudem eine gemeinsame kulturelle Grundlage mit früheren Generationen.\n\nKritiker wenden ein, dass die Sprache vieler Klassiker abschreckend wirke. Von der Länge abgeschreckt, griffen viele Schüler lieber zu Zusammenfassungen im Internet und läsen am Ende gar nichts. Dieses Argument ist ernst zu nehmen. Offen gestanden habe ich selbst in der Schule manchen Klassiker nur halb gelesen, weil mir niemand erklärt hatte, warum er mich etwas angehen sollte.\n\nDas Problem liegt aber weniger in den Werken als in der Art, wie sie unterrichtet werden. Ein Klassiker, der mit aktuellen Fragen verbunden wird, kann genauso fesseln wie ein neuer Roman. Gleichzeitig sollten Lehrpläne Raum für Bücher lassen, die von Migration, Klimawandel oder Digitalisierung erzählen.\n\nKurz gesagt: nicht Klassiker oder Gegenwart, sondern beides, sorgfältig ausgewählt und lebendig vermittelt. Nur so entsteht bei jungen Menschen die Lust, auch nach der Schule weiterzulesen." } });
})();
