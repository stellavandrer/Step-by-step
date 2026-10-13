/* Cours d'allemand, unité C2-5 « Inside a character's head / Dans la tête d'un personnage » : les techniques
   narratives (discours direct et indirect, style indirect libre ou erlebte Rede, monologue intérieur, flux de
   conscience ; narrateur à la première personne, omniscient, interne), la portée de la négation (négation de
   phrase et négation partielle avec sondern, kein / nicht ein, renforcements, litote), interpréter un texte
   littéraire. Personnages fictifs, prénoms allemands.
   Faits vérifiables seulement : Arthur Schnitzler (Vienne, 1862-1931), médecin et écrivain ; « Leutnant Gustl »
   paraît le 25 décembre 1900 dans le supplément de Noël de la « Neue Freie Presse » ; un jeune lieutenant se
   dispute au vestiaire après un concert avec un maître boulanger qui retient son sabre et le traite de « dummer
   Bub » ; un boulanger n'étant pas « satisfaktionsfähig », Gustl ne peut le provoquer en duel et décide de mettre
   fin à ses jours ; il erre toute la nuit ; au matin, au café, il apprend que le boulanger est mort d'une attaque
   dans la nuit ; soulagé, il se réjouit du duel prévu l'après-midi ; considéré comme le premier récit en langue
   allemande écrit presque entièrement en monologue intérieur ; en 1901, un conseil d'honneur retire à Schnitzler,
   officier de réserve, son grade. Loi fondamentale, art. 5 : « Kunst und Wissenschaft, Forschung und Lehre sind
   frei. » */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "erzaehltechnikDE", icon: "book-open-text", title: "Narrative technique", title_fr: "Les techniques narratives", level: "C2", words: [
    ["die Erzählperspektive, -n", "the narrative perspective, the point of view", "le point de vue narratif", "Die Erzählperspektive wechselt im zweiten Kapitel."],
    ["der Ich-Erzähler, - (die Ich-Erzählerin)", "the first-person narrator", "le narrateur à la première personne", "Der Ich-Erzähler kennt nur seine eigenen Gedanken."],
    ["auktorial", "omniscient (narrator)", "omniscient (narrateur)", "Der auktoriale Erzähler kommentiert das Geschehen."],
    ["der personale Erzähler", "the limited third-person narrator", "le narrateur à focalisation interne", "Der personale Erzähler sieht alles mit den Augen einer Figur."],
    ["die erlebte Rede", "free indirect speech", "le style indirect libre", "In der erlebten Rede hört man die Gedanken einer Figur in der dritten Person."],
    ["der innere Monolog", "the interior monologue", "le monologue intérieur", "Die ganze Erzählung ist ein innerer Monolog."],
    ["der Bewusstseinsstrom", "the stream of consciousness", "le flux de conscience", "Der Bewusstseinsstrom folgt den Gedanken ohne Ordnung."],
    ["die Rückblende, -n", "the flashback", "le retour en arrière", "Eine Rückblende erzählt von ihrer Kindheit."],
    ["die Vorausdeutung, -en", "the foreshadowing", "l'anticipation, le présage", "Schon der erste Satz enthält eine Vorausdeutung."],
    ["das Leitmotiv, -e", "the leitmotif, the recurring theme", "le leitmotiv", "Das Wasser ist ein Leitmotiv des Romans."],
    ["die Nebenfigur, -en", "the minor character", "le personnage secondaire", "Die Nebenfiguren bleiben eher blass."],
    ["die Erzählzeit", "the time it takes to tell (the story)", "le temps du récit", "Die Erzählzeit beträgt nur wenige Seiten."],
    ["die erzählte Zeit", "the time covered by the story", "le temps de l'histoire", "Die erzählte Zeit umfasst eine einzige Nacht."],
    ["das offene Ende", "the open ending", "la fin ouverte", "Viele Leser mögen kein offenes Ende."],
    ["die Erzählhaltung, -en", "the narrator's attitude", "l'attitude du narrateur", "Die Erzählhaltung ist ironisch und distanziert."],
    ["der Zeitsprung, ¨-e", "the time jump", "l'ellipse temporelle", "Nach einem Zeitsprung von zehn Jahren geht die Geschichte weiter."]
  ] },
  { id: "ehreDE", icon: "swords", title: "Honour and pride", title_fr: "L'honneur et l'orgueil", level: "C2", words: [
    ["die Ehre", "honour", "l'honneur", "Für Gustl steht seine Ehre über allem."],
    ["der Ehrbegriff", "the notion of honour", "la conception de l'honneur", "Der militärische Ehrbegriff war damals sehr streng."],
    ["das Duell, -e", "the duel", "le duel", "Das Duell sollte am Nachmittag stattfinden."],
    ["der Säbel, -", "the sabre", "le sabre", "Der Bäckermeister hielt seinen Säbel fest."],
    ["der Leutnant, -s", "the lieutenant", "le lieutenant", "Der junge Leutnant fühlt sich gedemütigt."],
    ["stolz (auf + Akk.)", "proud (of)", "fier (de)", "Er ist stolz auf seine Uniform."],
    ["eitel", "vain", "vaniteux", "Gustl ist eitel und unsicher zugleich."],
    ["die Kränkung, -en", "the slight, the offence", "la vexation, l'affront", "Er konnte die Kränkung nicht vergessen."],
    ["gekränkt", "hurt, offended", "vexé, blessé", "Sie zog sich gekränkt zurück."],
    ["die Beleidigung, -en", "the insult", "l'insulte", "Eine Beleidigung durfte ein Offizier nicht hinnehmen."],
    ["die Schande", "disgrace, shame", "la honte, le déshonneur", "Er fürchtete die Schande mehr als den Tod."],
    ["die Genugtuung", "satisfaction (for an insult)", "la réparation, la satisfaction", "Er verlangte Genugtuung."],
    ["der Standesdünkel", "class snobbery", "la morgue de caste", "Der Standesdünkel der Offiziere wird im Text entlarvt."],
    ["die Verzweiflung", "despair", "le désespoir", "In seiner Verzweiflung irrte er durch die Stadt."],
    ["die Erleichterung", "relief", "le soulagement", "Am Morgen spürte er nur noch Erleichterung."],
    ["sich rächen (an + Dat.)", "to take revenge (on)", "se venger (de)", "Er wollte sich an seinem Gegner rächen."]
  ] });

  W.LESSONS.push(
  {
    id: 145, level: "C2", icon: "book-open-text",
    title: "Erlebte Rede, innerer Monolog: how narrators speak", title_fr: "Erlebte Rede, innerer Monolog : comment parlent les narrateurs",
    subtitle: "Recognise the ways a text gives us a character's thoughts, and the different kinds of narrator.", subtitle_fr: "Reconnaître les manières dont un texte nous donne accès aux pensées d'un personnage, et les différents types de narrateur.",
    body: `
<h2>Four ways to render a thought</h2>
<table>
<tr><td>direct speech</td><td><s-de>Sie dachte: „Ich komme zu spät.“</s-de></td></tr>
<tr><td>indirect speech</td><td><s-de>Sie dachte, sie komme zu spät.</s-de></td></tr>
<tr><td><b>erlebte Rede</b> (free indirect speech)</td><td><s-de>Verdammt, sie kam schon wieder zu spät. Was würde der Chef sagen?</s-de></td></tr>
<tr><td><b>innerer Monolog</b></td><td><s-de>Verdammt, ich komme schon wieder zu spät. Was wird der Chef sagen?</s-de></td></tr>
</table>
<p>The <b>erlebte Rede</b> keeps the third person and the Präteritum of the narrative, but has the character's voice: questions, exclamations, <s-de>würde</s-de> for the future, no <s-de>dachte sie</s-de>. The <b>innerer Monolog</b> uses the first person and the present, with no narrator at all. The <b>Bewusstseinsstrom</b> goes further: fragments and associations without order.</p>
<h2>Who is telling?</h2>
<table>
<tr><td><s-de>Ich-Erzähler</s-de></td><td>a character tells the story in the first person</td></tr>
<tr><td><s-de>auktorialer Erzähler</s-de></td><td>knows everything, comments: <s-de>Unser Held ahnte nicht, dass…</s-de></td></tr>
<tr><td><s-de>personaler Erzähler</s-de></td><td>sees everything through one character's eyes</td></tr>
<tr><td><s-de>neutraler Erzähler</s-de></td><td>like a camera: only what can be seen and heard</td></tr>
</table>
<div class="tip">When you read, ask two questions: whose eyes am I seeing through, and whose voice am I hearing? In the erlebte Rede, they can differ from sentence to sentence, which is exactly what makes it so subtle.</div>
`,
    body_fr: `
<h2>Quatre façons de rendre une pensée</h2>
<table>
<tr><td>discours direct</td><td><s-de>Sie dachte: „Ich komme zu spät.“</s-de></td></tr>
<tr><td>discours indirect</td><td><s-de>Sie dachte, sie komme zu spät.</s-de></td></tr>
<tr><td><b>erlebte Rede</b> (style indirect libre)</td><td><s-de>Verdammt, sie kam schon wieder zu spät. Was würde der Chef sagen?</s-de></td></tr>
<tr><td><b>innerer Monolog</b> (monologue intérieur)</td><td><s-de>Verdammt, ich komme schon wieder zu spät. Was wird der Chef sagen?</s-de></td></tr>
</table>
<p>L'<b>erlebte Rede</b> garde la troisième personne et le prétérit du récit, mais avec la voix du personnage : questions, exclamations, <s-de>würde</s-de> pour le futur, pas de <s-de>dachte sie</s-de>. C'est le style indirect libre de Flaubert. Le <b>innerer Monolog</b> emploie la première personne et le présent, sans aucun narrateur. Le <b>Bewusstseinsstrom</b> (flux de conscience) va plus loin : fragments et associations sans ordre.</p>
<h2>Qui raconte ?</h2>
<table>
<tr><td><s-de>Ich-Erzähler</s-de></td><td>un personnage raconte à la première personne</td></tr>
<tr><td><s-de>auktorialer Erzähler</s-de></td><td>sait tout, commente : <s-de>Unser Held ahnte nicht, dass…</s-de></td></tr>
<tr><td><s-de>personaler Erzähler</s-de></td><td>voit tout à travers les yeux d'un personnage (focalisation interne)</td></tr>
<tr><td><s-de>neutraler Erzähler</s-de></td><td>comme une caméra : seulement ce qu'on voit et entend</td></tr>
</table>
<div class="tip">En lisant, pose-toi deux questions : par les yeux de qui est-ce que je vois, et quelle voix est-ce que j'entends ? Dans l'erlebte Rede, elles peuvent changer d'une phrase à l'autre, et c'est justement ce qui la rend si subtile.</div>
`,
    examples: [
      ["Sie dachte, sie komme zu spät.", "She thought she was late.", "Elle pensa qu'elle était en retard."],
      ["Verdammt, sie kam schon wieder zu spät. Was würde der Chef sagen?", "Damn, she was late again. What would the boss say?", "Zut, elle était encore en retard. Que dirait le chef ?"],
      ["Verdammt, ich komme schon wieder zu spät. Was wird der Chef sagen?", "Damn, I'm late again. What will the boss say?", "Zut, je suis encore en retard. Que va dire le chef ?"],
      ["Morgen würde er es ihr sagen. Oder war das zu früh?", "Tomorrow he would tell her. Or was that too soon?", "Demain, il le lui dirait. Ou était-ce trop tôt ?"],
      ["Unser Held ahnte nicht, dass dieser Abend sein Leben verändern sollte.", "Our hero had no idea that this evening would change his life.", "Notre héros ne se doutait pas que cette soirée allait changer sa vie."],
      ["Der Ich-Erzähler kennt nur seine eigenen Gedanken.", "The first-person narrator only knows his own thoughts.", "Le narrateur à la première personne ne connaît que ses propres pensées."],
      ["Die ganze Erzählung ist ein innerer Monolog.", "The whole story is an interior monologue.", "Tout le récit est un monologue intérieur."]
    ],
    quiz: [
      { q: "“Morgen würde er es ihr sagen. Oder war das zu früh?” is…", q_fr: "« Morgen würde er es ihr sagen. Oder war das zu früh? » est…", o: ["erlebte Rede", "innerer Monolog", "direkte Rede"], a: 0, ex: "Third person, Präteritum, the character's voice.", ex_fr: "Troisième personne, prétérit, voix du personnage." },
      { q: "An interior monologue uses…", q_fr: "Un monologue intérieur emploie…", o: ["the first person and the present", "the third person and the Präteritum", "only reported speech"], o_fr: ["la première personne et le présent", "la troisième personne et le prétérit", "seulement le discours indirect"], a: 0, ex: "No narrator, just the character's mind.", ex_fr: "Pas de narrateur, seulement l'esprit du personnage." },
      { q: "Which narrator knows everything and comments?", q_fr: "Quel narrateur sait tout et commente ?", o: ["der auktoriale Erzähler", "der personale Erzähler", "der neutrale Erzähler"], a: 0, ex: "auktorial = omniscient.", ex_fr: "auktorial = omniscient." },
      { q: "In erlebte Rede, the future is often expressed with…", q_fr: "Dans l'erlebte Rede, le futur s'exprime souvent avec…", o: ["würde + infinitive", "wird + infinitive", "sollte nicht"], o_fr: ["würde + infinitif", "wird + infinitif", "sollte nicht"], a: 0, ex: "würde = future seen from the past.", ex_fr: "würde = futur vu du passé." },
      { q: "A narrator who only shows what can be seen and heard is…", q_fr: "Un narrateur qui ne montre que ce qu'on voit et entend est…", o: ["neutral", "auktorial", "ein Ich-Erzähler"], a: 0, ex: "Like a camera.", ex_fr: "Comme une caméra." }
    ]
  },
  {
    id: 146, level: "C2", icon: "ban",
    title: "Nicht der Held, sondern…: the scope of negation", title_fr: "Nicht der Held, sondern… : la portée de la négation",
    subtitle: "Where nicht goes, kein or nicht ein, strong negation and the art of understatement.", subtitle_fr: "La place de nicht, kein ou nicht ein, la négation renforcée et l'art de la litote.",
    body: `
<h2>Negating the whole sentence or one element</h2>
<p>Sentence negation: <s-de>nicht</s-de> goes towards the end of the Mittelfeld: <s-de>Ich habe das Buch nicht gelesen.</s-de></p>
<p>Negating one element: <s-de>nicht</s-de> stands right before it, usually with <s-de>sondern</s-de>: <s-de>Ich habe nicht das Buch gelesen, sondern den Film gesehen.</s-de> · <s-de>Nicht Gustl ist der Held, sondern die Sprache.</s-de></p>
<h2>kein, nicht ein</h2>
<p><s-de>Kein Mensch war da.</s-de> (nobody) · <s-de>Nicht ein Mensch war da.</s-de> (not a single person: stronger)</p>
<h2>Strong negation</h2>
<p><s-de>gar nicht, überhaupt nicht, keineswegs, keinesfalls, durchaus nicht, nicht im Geringsten</s-de>, elevated: <s-de>mitnichten</s-de>.</p>
<h2>Understatement (litotes)</h2>
<p>Two negatives make a cautious positive: <s-de>nicht unbedeutend</s-de> (rather important) · <s-de>nicht selten</s-de> (quite often) · <s-de>nicht ohne Stolz</s-de> (with some pride). In standard German, two negations cancel each other; <s-de>Da hat keiner nichts gesagt</s-de> (= nobody said anything) is regional and colloquial.</p>
<div class="tip">Litotes are typical of elegant, slightly ironic German. <s-de>Das ist nicht ganz unproblematisch</s-de> often means: this is a real problem.</div>
`,
    body_fr: `
<h2>Nier toute la phrase ou un seul élément</h2>
<p>Négation de phrase : <s-de>nicht</s-de> se place vers la fin du Mittelfeld : <s-de>Ich habe das Buch nicht gelesen.</s-de></p>
<p>Négation d'un élément : <s-de>nicht</s-de> se place juste devant lui, en général avec <s-de>sondern</s-de> : <s-de>Ich habe nicht das Buch gelesen, sondern den Film gesehen.</s-de> (Ce n'est pas le livre que j'ai lu, j'ai vu le film.) · <s-de>Nicht Gustl ist der Held, sondern die Sprache.</s-de></p>
<h2>kein, nicht ein</h2>
<p><s-de>Kein Mensch war da.</s-de> (personne) · <s-de>Nicht ein Mensch war da.</s-de> (pas une seule personne : plus fort)</p>
<h2>La négation renforcée</h2>
<p><s-de>gar nicht, überhaupt nicht, keineswegs, keinesfalls, durchaus nicht, nicht im Geringsten</s-de> (pas le moins du monde), soutenu : <s-de>mitnichten</s-de> (nullement).</p>
<h2>La litote</h2>
<p>Deux négations donnent un positif prudent : <s-de>nicht unbedeutend</s-de> (assez important) · <s-de>nicht selten</s-de> (assez souvent) · <s-de>nicht ohne Stolz</s-de> (non sans fierté). En allemand standard, deux négations s'annulent ; <s-de>Da hat keiner nichts gesagt</s-de> (= personne n'a rien dit) est régional et familier.</p>
<div class="tip">La litote est typique d'un allemand élégant, légèrement ironique. <s-de>Das ist nicht ganz unproblematisch</s-de> veut souvent dire : c'est un vrai problème. Le français connaît bien la figure : « ce n'est pas mal ».</div>
`,
    examples: [
      ["Ich habe das Buch nicht gelesen.", "I haven't read the book.", "Je n'ai pas lu le livre."],
      ["Ich habe nicht das Buch gelesen, sondern den Film gesehen.", "It wasn't the book I read; I saw the film.", "Ce n'est pas le livre que j'ai lu, j'ai vu le film."],
      ["Nicht Gustl ist der eigentliche Held, sondern die Sprache.", "The real hero isn't Gustl but the language.", "Le vrai héros, ce n'est pas Gustl, mais la langue."],
      ["Nicht ein Mensch hat ihm geholfen.", "Not a single person helped him.", "Pas une seule personne ne l'a aidé."],
      ["Er war nicht im Geringsten überrascht.", "He wasn't in the least surprised.", "Il n'était pas le moins du monde surpris."],
      ["Der Einfluss des Romans ist nicht unbedeutend.", "The novel's influence is far from insignificant.", "L'influence du roman n'est pas négligeable."],
      ["Nicht ohne Stolz zeigte sie ihr erstes Buch.", "Not without pride, she showed her first book.", "Non sans fierté, elle montra son premier livre."]
    ],
    quiz: [
      { q: "“It wasn't the book I read, it was the article.”", q_fr: "« Ce n'est pas le livre que j'ai lu, c'est l'article. »", o: ["Ich habe nicht das Buch gelesen, sondern den Artikel.", "Ich habe das Buch nicht gelesen, aber den Artikel.", "Ich habe kein das Buch gelesen, sondern den Artikel."], a: 0, ex: "nicht right before the element + sondern.", ex_fr: "nicht juste devant l'élément + sondern." },
      { q: "“Not a single person came.” (strong)", q_fr: "« Pas une seule personne n'est venue. » (fort)", o: ["Nicht ein Mensch kam.", "Ein Mensch kam nicht.", "Kein ein Mensch kam."], a: 0, ex: "nicht ein = not a single.", ex_fr: "nicht ein = pas un seul." },
      { q: "“nicht unbedeutend” means…", q_fr: "« nicht unbedeutend » veut dire…", o: ["rather important", "unimportant", "very unimportant"], o_fr: ["assez important", "sans importance", "vraiment sans importance"], a: 0, ex: "A litotes: two negatives, a cautious positive.", ex_fr: "Une litote : deux négations, un positif prudent." },
      { q: "An elevated word for “not at all”:", q_fr: "Un mot soutenu pour « pas du tout » :", o: ["mitnichten", "nichtsdestotrotz", "nirgends"], a: 0, ex: "mitnichten = by no means.", ex_fr: "mitnichten = nullement." },
      { q: "Where does nicht go in a sentence negation? Ich habe das Buch ___ gelesen.", q_fr: "Où se place nicht dans une négation de phrase ? Ich habe das Buch ___ gelesen.", o: ["nicht (before the participle)", "nothing: nicht goes first", "nicht after gelesen"], o_fr: ["nicht (devant le participe)", "rien : nicht se met en tête", "nicht après gelesen"], a: 0, ex: "Towards the end of the Mittelfeld.", ex_fr: "Vers la fin du Mittelfeld." }
    ]
  },
  {
    id: 147, level: "C2", kind: "functional", icon: "pen",
    title: "Everyday German: interpreting a literary text", title_fr: "L'allemand de tous les jours : interpréter un texte littéraire",
    subtitle: "A hypothesis, evidence from the text, analysis of technique and language, and a conclusion.", subtitle_fr: "Une hypothèse, des preuves tirées du texte, l'analyse de la technique et de la langue, et une conclusion.",
    body: `
<h2>The introduction: an interpretive hypothesis</h2>
<p>Author, title, genre, year, then your reading of the text: <s-de>In Arthur Schnitzlers Erzählung „Leutnant Gustl“ (1900) … Die Erzählung lässt sich als Kritik am militärischen Ehrbegriff deuten.</s-de></p>
<h2>The main part: evidence and analysis</h2>
<p>Technique: <s-de>Der innere Monolog lässt den Leser unmittelbar an Gustls Gedanken teilhaben.</s-de> · Language: <s-de>Auffällig sind die kurzen, abgehackten Sätze.</s-de> · Evidence: short quotations with the line: <s-de>„dummer Bub“ (Z. 12)</s-de></p>
<p>Useful phrases: <s-de>Dafür spricht, dass…</s-de> · <s-de>Hier zeigt sich…</s-de> · <s-de>Dies verdeutlicht…</s-de> · <s-de>Bemerkenswert ist…</s-de> · <s-de>Der Text wirft die Frage auf, ob…</s-de></p>
<h2>The conclusion</h2>
<p><s-de>Insgesamt bestätigt sich die These, dass…</s-de> · <s-de>Der Text ist auch heute noch aktuell, weil…</s-de></p>
<div class="tip">An interpretation is not a summary. Every observation, about the narrator, an image or a single word, must serve your hypothesis. Use the present tense, quote briefly, and explain what each quotation shows.</div>
`,
    body_fr: `
<h2>L'introduction : une hypothèse de lecture</h2>
<p>Auteur, titre, genre, année, puis ta lecture du texte : <s-de>In Arthur Schnitzlers Erzählung „Leutnant Gustl“ (1900) … Die Erzählung lässt sich als Kritik am militärischen Ehrbegriff deuten.</s-de></p>
<h2>Le développement : preuves et analyse</h2>
<p>La technique : <s-de>Der innere Monolog lässt den Leser unmittelbar an Gustls Gedanken teilhaben.</s-de> · La langue : <s-de>Auffällig sind die kurzen, abgehackten Sätze.</s-de> · Les preuves : de courtes citations avec la ligne : <s-de>„dummer Bub“ (Z. 12)</s-de> (Z. = Zeile, ligne)</p>
<p>Formules utiles : <s-de>Dafür spricht, dass…</s-de> · <s-de>Hier zeigt sich…</s-de> · <s-de>Dies verdeutlicht…</s-de> · <s-de>Bemerkenswert ist…</s-de> · <s-de>Der Text wirft die Frage auf, ob…</s-de></p>
<h2>La conclusion</h2>
<p><s-de>Insgesamt bestätigt sich die These, dass…</s-de> · <s-de>Der Text ist auch heute noch aktuell, weil…</s-de></p>
<div class="tip">Une interprétation n'est pas un résumé. Chaque observation, sur le narrateur, une image ou un seul mot, doit servir ton hypothèse. Emploie le présent, cite brièvement et explique ce que montre chaque citation.</div>
`,
    examples: [
      ["Die Erzählung lässt sich als Kritik am militärischen Ehrbegriff deuten.", "The story can be read as a critique of the military notion of honour.", "Le récit peut se lire comme une critique de la conception militaire de l'honneur."],
      ["Der innere Monolog lässt den Leser unmittelbar an Gustls Gedanken teilhaben.", "The interior monologue lets the reader share Gustl's thoughts directly.", "Le monologue intérieur fait participer directement le lecteur aux pensées de Gustl."],
      ["Auffällig sind die kurzen, abgehackten Sätze.", "The short, choppy sentences are striking.", "Les phrases courtes et hachées sont frappantes."],
      ["Dafür spricht, dass Gustl nie an den Bäckermeister als Menschen denkt.", "This is supported by the fact that Gustl never thinks of the baker as a person.", "Ce qui le confirme, c'est que Gustl ne pense jamais au boulanger comme à un être humain."],
      ["Hier zeigt sich, wie hohl Gustls Ehrbegriff ist.", "Here we see how hollow Gustl's notion of honour is.", "On voit ici à quel point la conception de l'honneur de Gustl est creuse."],
      ["Der Text wirft die Frage auf, ob Ehre wichtiger sein kann als ein Leben.", "The text raises the question of whether honour can matter more than a life.", "Le texte soulève la question de savoir si l'honneur peut compter plus qu'une vie."],
      ["Insgesamt bestätigt sich die These, dass Schnitzler den Ehrbegriff entlarvt.", "Overall, the hypothesis that Schnitzler exposes the notion of honour is confirmed.", "Dans l'ensemble, l'hypothèse selon laquelle Schnitzler démasque la notion d'honneur se confirme."]
    ],
    quiz: [
      { q: "What does an interpretation begin with?", q_fr: "Par quoi commence une interprétation ?", o: ["A hypothesis about the meaning of the text", "A full summary of the plot", "Your opinion of the author's life"], o_fr: ["Une hypothèse sur le sens du texte", "Un résumé complet de l'intrigue", "Ton avis sur la vie de l'auteur"], a: 0, ex: "Then you prove it.", ex_fr: "Ensuite, on la démontre." },
      { q: "Die Erzählung ___ als Kritik deuten.", q_fr: "Die Erzählung ___ als Kritik deuten.", o: ["lässt sich", "lässt", "wird sich"], a: 0, ex: "sich lassen + infinitive.", ex_fr: "sich lassen + infinitif." },
      { q: "“Z. 12” means…", q_fr: "« Z. 12 » veut dire…", o: ["line 12", "page 12", "paragraph 12"], o_fr: ["ligne 12", "page 12", "paragraphe 12"], a: 0, ex: "Z. = Zeile.", ex_fr: "Z. = Zeile." },
      { q: "Which tense do you use in an interpretation?", q_fr: "Quel temps emploie-t-on dans une interprétation ?", o: ["The present", "The Präteritum", "The future"], o_fr: ["Le présent", "Le prétérit", "Le futur"], a: 0, ex: "As in a summary.", ex_fr: "Comme dans un résumé." },
      { q: "“The text raises the question whether…”", q_fr: "« Le texte soulève la question de savoir si… »", o: ["Der Text wirft die Frage auf, ob…", "Der Text stellt die Frage hoch, ob…", "Der Text macht die Frage auf, ob…"], a: 0, ex: "eine Frage aufwerfen.", ex_fr: "eine Frage aufwerfen." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    145: {
      gap: [["Erlebte Rede: Verdammt, sie ___ schon wieder zu spät. (kommen)", "kam"], ["Erlebte Rede: Was ___ der Chef sagen? (Zukunft aus der Vergangenheit)", "würde"], ["Innerer Monolog: Verdammt, ich ___ schon wieder zu spät. (kommen)", "komme"], ["Ein Erzähler, der alles weiß und kommentiert, heißt ___ Erzähler.", "auktorialer|auktorial"]],
      fix: [["Erlebte Rede: Sie dachte: Was wird der Chef sagen?", "Erlebte Rede: Was würde der Chef sagen?", "Erlebte Rede: no dachte sie, and würde for the future.", "Erlebte Rede : pas de dachte sie, et würde pour le futur."], ["Innerer Monolog: Er kam schon wieder zu spät.", "Innerer Monolog: Ich komme schon wieder zu spät.", "Interior monologue: first person, present.", "Monologue intérieur : première personne, présent."]],
      task: ["Write the same moment three times: in indirect speech, in erlebte Rede and as an interior monologue. A woman is waiting at the station; the train is late; she wonders whether he will come.", "Écris le même moment trois fois : au discours indirect, en erlebte Rede et en monologue intérieur. Une femme attend à la gare ; le train a du retard ; elle se demande s'il viendra.", "Indirekte Rede: Sie fragte sich, ob er überhaupt kommen werde. Erlebte Rede: Schon zwanzig Minuten Verspätung. Würde er überhaupt kommen? Vielleicht hatte er es sich anders überlegt. Innerer Monolog: Zwanzig Minuten schon. Kommt er überhaupt? Vielleicht hat er es sich anders überlegt."]
    },
    146: {
      gap: [["Ich habe ___ das Buch gelesen, sondern den Film gesehen.", "nicht"], ["___ ein Mensch hat ihm geholfen.", "Nicht", "not a single", "pas un seul"], ["Er war nicht im ___ überrascht.", "Geringsten"], ["Der Einfluss des Romans ist nicht ___.", "unbedeutend|unwesentlich", "litotes for “important”", "litote pour « important »"]],
      fix: [["Ich habe das Buch nicht gelesen, sondern den Film gesehen.", "Ich habe nicht das Buch gelesen, sondern den Film gesehen.", "With sondern: nicht right before the negated element.", "Avec sondern : nicht juste devant l'élément nié."], ["Kein ein Mensch war da.", "Nicht ein Mensch war da.", "kein replaces nicht ein; you can't combine them.", "kein remplace nicht ein ; on ne les combine pas."]],
      task: ["Rewrite these sentences with a litotes: Das Problem ist wichtig. Sie war stolz, als sie ihr Buch zeigte. Das kommt oft vor.", "Réécris ces phrases avec une litote : Das Problem ist wichtig. Sie war stolz, als sie ihr Buch zeigte. Das kommt oft vor.", "Das Problem ist nicht unbedeutend. Nicht ohne Stolz zeigte sie ihr Buch. Das kommt nicht selten vor."]
    },
    147: {
      gap: [["Die Erzählung ___ sich als Kritik am Ehrbegriff deuten.", "lässt"], ["___ sind die kurzen, abgehackten Sätze.", "Auffällig"], ["Der Text ___ die Frage auf, ob Ehre wichtiger ist als ein Leben.", "wirft"], ["Insgesamt ___ sich die These.", "bestätigt"]],
      fix: [["Gustl dachte nur an seine Ehre. (in einer Interpretation)", "Gustl denkt nur an seine Ehre.", "Interpretation: present tense.", "Interprétation : présent."], ["Der Text ist gut, weil er mir gefällt.", "Der Text überzeugt, weil Form und Inhalt zusammenpassen.", "Justify with the text, not your taste.", "Justifie par le texte, pas par ton goût."]],
      task: ["Write the introduction to an interpretation (about 60 words) of a story or poem you know: author, title, genre, year, short content and your interpretive hypothesis.", "Écris l'introduction d'une interprétation (environ 60 mots) d'un récit ou d'un poème que tu connais : auteur, titre, genre, année, bref contenu et ton hypothèse de lecture.", "In Arthur Schnitzlers Erzählung „Leutnant Gustl“ aus dem Jahr 1900 geht es um einen jungen Offizier, der sich nach einer Beleidigung in seiner Ehre verletzt fühlt und eine Nacht lang über seinen Selbstmord nachdenkt. Die Erzählung lässt sich als scharfe Kritik am militärischen Ehrbegriff deuten, den Schnitzler durch den inneren Monolog von innen entlarvt."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "erzaehlperspektive", lesson: 145, level: "C2", icon: "book-open-text", partner: "Frau Albers", role: "your literature teacher", role_fr: "ta professeure de littérature",
    title: "Who is speaking?", title_fr: "Qui parle ?",
    setting: "In your literature class, Frau Albers reads out short passages and asks you to identify the narrative technique.", setting_fr: "En cours de littérature, Frau Albers lit de courts passages et te demande d'identifier la technique narrative.",
    turns: [
      { p: "„Morgen würde sie es ihm sagen. Oder war das zu früh?“ Welche Erzähltechnik ist das?", en: "“Tomorrow she would tell him. Or was that too soon?” Which narrative technique is that?", fr: "« Demain, elle le lui dirait. Ou était-ce trop tôt ? » Quelle technique narrative est-ce ?" },
      { y: ["Das ist erlebte Rede: die Gedanken der Figur in der dritten Person und im Präteritum.", "Das ist erlebte Rede: die Gedanke der Figur in der dritten Person und im Präteritum.", "Das ist erlebte Rede: die Gedanken der Figur in die dritte Person und im Präteritum."], en: "That's free indirect speech: the character's thoughts in the third person and the Präteritum.", fr: "C'est de l'erlebte Rede : les pensées du personnage à la troisième personne et au prétérit.", why: "Plural die Gedanken; in + dative (in der dritten Person).", why_fr: "Pluriel die Gedanken ; in + datif (in der dritten Person)." },
      { p: "Und hier: „Ich muss es ihm sagen. Morgen. Oder ist das zu früh?“", en: "And here: “I have to tell him. Tomorrow. Or is that too soon?”", fr: "Et ici : « Il faut que je le lui dise. Demain. Ou est-ce trop tôt ? »" },
      { y: ["Das ist ein innerer Monolog: erste Person, Präsens, ohne Erzähler.", "Das ist einen inneren Monolog: erste Person, Präsens, ohne Erzähler.", "Das ist ein innerer Monolog: erste Person, Präsens, ohne einen Erzähler hat."], en: "That's an interior monologue: first person, present tense, no narrator.", fr: "C'est un monologue intérieur : première personne, présent, sans narrateur.", why: "Nominative after sein: ein innerer Monolog.", why_fr: "Nominatif après sein : ein innerer Monolog." },
      { p: "Und welcher Erzähler weiß alles über alle Figuren?", en: "And which narrator knows everything about all the characters?", fr: "Et quel narrateur sait tout sur tous les personnages ?" },
      { y: ["Der auktoriale Erzähler: Er kennt die Gedanken aller Figuren und kommentiert sie.", "Der auktoriale Erzähler: Er kennt die Gedanken allen Figuren und kommentiert sie.", "Der auktoriale Erzähler: Er kennt die Gedanken aller Figuren und kommentieren sie."], en: "The omniscient narrator: he knows the thoughts of all the characters and comments on them.", fr: "Le narrateur omniscient : il connaît les pensées de tous les personnages et les commente.", why: "Genitive plural: aller Figuren; er kommentiert.", why_fr: "Génitif pluriel : aller Figuren ; er kommentiert." },
      { p: "Warum verwenden moderne Autoren so oft die erlebte Rede?", en: "Why do modern writers use free indirect speech so often?", fr: "Pourquoi les auteurs modernes emploient-ils si souvent l'erlebte Rede ?" },
      { y: ["Weil sie den Leser nah an die Figur heranführt, ohne den Erzähler ganz verschwinden zu lassen.", "Weil sie führt den Leser nah an die Figur heran, ohne den Erzähler ganz verschwinden zu lassen.", "Weil sie den Leser nah an die Figur heranführt, ohne den Erzähler ganz verschwinden lassen."], en: "Because it brings the reader close to the character without making the narrator disappear completely.", fr: "Parce qu'elle rapproche le lecteur du personnage sans faire complètement disparaître le narrateur.", why: "weil: verb at the end; ohne … zu + infinitive.", why_fr: "weil : verbe à la fin ; ohne … zu + infinitif." },
      { p: "Sehr gut. Und was ist das Schwierige daran?", en: "Very good. And what's difficult about it?", fr: "Très bien. Et qu'est-ce qui est difficile ?" },
      { y: ["Nicht die Handlung ist schwierig, sondern die Frage, wessen Stimme man gerade hört.", "Nicht die Handlung ist schwierig, sondern die Frage, wessen Stimme hört man gerade.", "Nicht die Handlung ist schwierig, aber die Frage, wessen Stimme man gerade hört."], en: "It's not the plot that's difficult, but the question of whose voice you're hearing.", fr: "Ce n'est pas l'intrigue qui est difficile, mais la question de savoir quelle voix on entend.", why: "nicht …, sondern; indirect question: verb at the end.", why_fr: "nicht …, sondern ; interrogative indirecte : verbe à la fin." }
    ] },
  { id: "textinterpretation", lesson: 147, level: "C2", icon: "pen", partner: "Lukas", role: "a fellow student", role_fr: "un camarade de cours",
    title: "Preparing an interpretation", title_fr: "Préparer une interprétation",
    setting: "You and your fellow student Lukas are preparing a written exam: an interpretation of Schnitzler's “Leutnant Gustl”.", setting_fr: "Ton camarade Lukas et toi préparez un examen écrit : l'interprétation de « Leutnant Gustl » de Schnitzler.",
    turns: [
      { p: "Wie fangen wir die Interpretation an?", en: "How do we start the interpretation?", fr: "Comment commence-t-on l'interprétation ?" },
      { y: ["Mit einer Deutungshypothese: Die Erzählung lässt sich als Kritik am Ehrbegriff des Militärs deuten.", "Mit einer Deutungshypothese: Die Erzählung lässt als Kritik am Ehrbegriff des Militärs sich deuten.", "Mit einer Deutungshypothese: Die Erzählung lässt sich als Kritik am Ehrbegriff des Militärs zu deuten."], en: "With a hypothesis: the story can be read as a critique of the military's notion of honour.", fr: "Par une hypothèse de lecture : le récit peut se lire comme une critique de la conception militaire de l'honneur.", why: "sich lassen + infinitive without zu; sich right after lässt.", why_fr: "sich lassen + infinitif sans zu ; sich juste après lässt." },
      { p: "Und woran sieht man das im Text?", en: "And where can you see that in the text?", fr: "Et à quoi le voit-on dans le texte ?" },
      { y: ["Auffällig ist, dass Gustl nur an seine Ehre denkt, nicht an den Menschen.", "Auffällig ist, dass Gustl denkt nur an seine Ehre, nicht an den Menschen.", "Auffällig ist, dass Gustl nur an seiner Ehre denkt, nicht an den Menschen."], en: "It's striking that Gustl only thinks of his honour, not of the person.", fr: "Ce qui frappe, c'est que Gustl ne pense qu'à son honneur, pas à l'être humain.", why: "denken an + accusative; dass: verb at the end.", why_fr: "denken an + accusatif ; dass : verbe à la fin." },
      { p: "Sollen wir viele Stellen zitieren?", en: "Should we quote lots of passages?", fr: "On cite beaucoup de passages ?" },
      { y: ["Lieber wenige, kurze Stellen, und wir erklären jeweils, was sie zeigen.", "Lieber wenige, kurze Stellen, und wir erklären jeweils, was zeigen sie.", "Lieber wenige, kurzen Stellen, und wir erklären jeweils, was sie zeigen."], en: "Better a few short passages, and we explain each time what they show.", fr: "Plutôt quelques passages courts, et on explique chaque fois ce qu'ils montrent.", why: "Indirect question: verb at the end; wenige, kurze (no article).", why_fr: "Interrogative indirecte : verbe à la fin ; wenige, kurze (sans article)." },
      { p: "Und wie wirkt der Schluss, wenn der Bäckermeister plötzlich stirbt?", en: "And what's the effect of the ending, when the baker suddenly dies?", fr: "Et quel effet produit la fin, quand le boulanger meurt soudain ?" },
      { y: ["Der Schluss wirkt ironisch: Gustl hat nichts gelernt und freut sich schon auf das nächste Duell.", "Der Schluss wirkt ironisch: Gustl hat nichts gelernt und freut sich schon an das nächste Duell.", "Der Schluss wirkt ironisch: Gustl hat nichts gelernt und freut sich schon auf dem nächsten Duell."], en: "The ending is ironic: Gustl has learnt nothing and is already looking forward to the next duel.", fr: "La fin est ironique : Gustl n'a rien appris et se réjouit déjà du prochain duel.", why: "sich freuen auf + accusative (something ahead).", why_fr: "sich freuen auf + accusatif (une chose à venir)." },
      { p: "Und unser Fazit?", en: "And our conclusion?", fr: "Et notre conclusion ?" },
      { y: ["Insgesamt zeigt der innere Monolog die Leere hinter Gustls Ehrbegriff besonders eindringlich.", "Insgesamt der innere Monolog zeigt die Leere hinter Gustls Ehrbegriff besonders eindringlich.", "Insgesamt zeigt der innere Monolog die Leere hinter Gustls Ehrbegriff besonders eindringliche."], en: "Overall, the interior monologue shows the emptiness behind Gustl's notion of honour particularly vividly.", fr: "Dans l'ensemble, le monologue intérieur montre de façon saisissante le vide derrière la conception de l'honneur de Gustl.", why: "Verb second after insgesamt; adverbs take no ending.", why_fr: "Verbe en deuxième position après insgesamt ; l'adverbe ne prend pas de terminaison." }
    ] }
  );

  W.READINGS.push({
    id: "schnitzler", level: "C2", icon: "swords", title: "„Leutnant Gustl“: eine Nacht im Kopf eines Offiziers", genre: "Feature article",
    intro: "A story told entirely from inside a young officer's head, a scandal in Vienna, and an author who lost his military rank for it.",
    intro_fr: "Un récit raconté entièrement depuis la tête d'un jeune officier, un scandale à Vienne, et un auteur qui y perdit son grade militaire.",
    paragraphs: [
      { de: "Am 25. Dezember 1900 erschien in der Weihnachtsbeilage der Wiener „Neuen Freien Presse“ eine Erzählung, die für Aufsehen sorgen sollte: „Leutnant Gustl“ von Arthur Schnitzler. Schnitzler, 1862 in Wien geboren, war Arzt und hatte sich als Schriftsteller bereits einen Namen gemacht.", en: "On 25 December 1900, the Christmas supplement of the Viennese “Neue Freie Presse” published a story that was to cause a stir: “Lieutenant Gustl” by Arthur Schnitzler. Schnitzler, born in Vienna in 1862, was a doctor and had already made a name for himself as a writer.", fr: "Le 25 décembre 1900 parut dans le supplément de Noël du journal viennois « Neue Freie Presse » un récit qui allait faire sensation : « Le Lieutenant Gustel » d'Arthur Schnitzler. Né à Vienne en 1862, Schnitzler était médecin et s'était déjà fait un nom comme écrivain." },
      { de: "Die Erzählung besteht fast ausschließlich aus den Gedanken ihrer Hauptfigur. Nach einem Konzert gerät ein junger Leutnant an der Garderobe mit einem Bäckermeister aneinander. Der kräftige Mann hält Gustls Säbel fest und nennt ihn einen „dummen Buben“. Da ein Bäcker für einen Offizier nicht als satisfaktionsfähig gilt, kann Gustl ihn nicht zum Duell fordern. In seinen Augen ist seine Ehre verloren.", en: "The story consists almost entirely of its main character's thoughts. After a concert, a young lieutenant clashes with a master baker at the cloakroom. The strong man holds Gustl's sabre tight and calls him a “stupid boy”. Since, for an officer, a baker is not considered worthy of a duel, Gustl cannot challenge him. In his eyes, his honour is lost.", fr: "Le récit se compose presque exclusivement des pensées de son personnage principal. Après un concert, un jeune lieutenant se dispute au vestiaire avec un maître boulanger. L'homme, robuste, lui bloque son sabre et le traite de « gamin stupide ». Comme un boulanger n'est pas, pour un officier, digne d'un duel, Gustl ne peut pas le provoquer. À ses yeux, son honneur est perdu." },
      { de: "Die ganze Nacht irrt er durch Wien und glaubt, ihm bleibe nur der Tod. Am Morgen erfährt er im Kaffeehaus, dass der Bäckermeister in der Nacht an einem Schlaganfall gestorben ist. Niemand weiß also von der Beleidigung. Gustl ist erleichtert und freut sich sogar auf ein Duell, das er am Nachmittag austragen soll. Gelernt hat er nichts.", en: "He wanders through Vienna all night, believing that only death is left to him. In the morning, at a coffee house, he learns that the baker died of a stroke during the night. So nobody knows about the insult. Gustl is relieved and even looks forward to a duel he is due to fight that afternoon. He has learnt nothing.", fr: "Il erre toute la nuit dans Vienne, persuadé qu'il ne lui reste que la mort. Au matin, au café, il apprend que le boulanger est mort d'une attaque pendant la nuit. Personne ne sait donc rien de l'insulte. Gustl est soulagé et se réjouit même d'un duel qu'il doit livrer l'après-midi. Il n'a rien appris." },
      { de: "Der Text gilt als erste deutschsprachige Erzählung, die fast vollständig im inneren Monolog geschrieben ist. Schnitzler entlarvt darin einen Ehrbegriff, der wichtiger ist als ein Menschenleben. Die Armee reagierte empört: 1901 entzog ein Ehrenrat dem Autor, der Reserveoffizier war, seinen Offiziersrang.", en: "The text is regarded as the first German-language story written almost entirely as interior monologue. In it, Schnitzler exposes a notion of honour that matters more than a human life. The army reacted with outrage: in 1901, a court of honour stripped the author, who was a reserve officer, of his rank.", fr: "Le texte passe pour le premier récit en langue allemande écrit presque entièrement en monologue intérieur. Schnitzler y démasque une conception de l'honneur qui compte plus qu'une vie humaine. L'armée réagit avec indignation : en 1901, un conseil d'honneur retira à l'auteur, officier de réserve, son grade." }
    ],
    glossary: { "Weihnachtsbeilage": ["Christmas supplement", "supplément de Noël"], "Wiener": ["Viennese", "viennois"], "Aufsehen": ["stir, sensation", "sensation"], "Leutnant": ["lieutenant", "lieutenant"], "ausschließlich": ["exclusively", "exclusivement"], "Garderobe": ["cloakroom", "vestiaire"], "Bäckermeister": ["master baker", "maître boulanger"], "aneinander": ["(aneinandergeraten) clash", "(aneinandergeraten) se disputer"], "kräftige": ["strong", "robuste"], "Säbel": ["sabre", "sabre"], "Buben": ["boy (Austrian)", "gamin (autrichien)"], "satisfaktionsfähig": ["entitled to demand or give satisfaction in a duel", "digne d'un duel"], "fordern": ["(zum Duell fordern) challenge", "(zum Duell fordern) provoquer en duel"], "irrt": ["wanders", "erre"], "Kaffeehaus": ["(Viennese) coffee house", "café (viennois)"], "Schlaganfall": ["stroke", "attaque cérébrale"], "erleichtert": ["relieved", "soulagé"], "austragen": ["fight (a duel)", "livrer (un duel)"], "deutschsprachige": ["German-language", "de langue allemande"], "entlarvt": ["exposes", "démasque"], "Ehrbegriff": ["notion of honour", "conception de l'honneur"], "empört": ["outraged", "indigné"], "entzog": ["withdrew, stripped", "retira"], "Ehrenrat": ["court of honour", "conseil d'honneur"], "Reserveoffizier": ["reserve officer", "officier de réserve"], "Offiziersrang": ["officer's rank", "grade d'officier"] },
    questions: [
      { q: "Wo erschien „Leutnant Gustl“ zum ersten Mal?", o: ["In der Weihnachtsbeilage einer Wiener Zeitung", "In einem Gedichtband", "Auf einer Theaterbühne"], a: 0 },
      { q: "Warum kann Gustl den Bäckermeister nicht zum Duell fordern?", o: ["Weil ein Bäcker für einen Offizier nicht als satisfaktionsfähig gilt", "Weil Duelle verboten waren", "Weil der Bäckermeister abreiste"], a: 0 },
      { q: "Was erfährt Gustl am Morgen?", o: ["Dass der Bäckermeister in der Nacht gestorben ist", "Dass er befördert wird", "Dass die Polizei ihn sucht"], a: 0 },
      { q: "Warum gilt der Text als literarisch neu?", o: ["Er ist fast vollständig im inneren Monolog geschrieben.", "Er ist in Versen geschrieben.", "Er hat keinen Titel."], a: 0 },
      { q: "Wie reagierte die Armee?", o: ["Ein Ehrenrat entzog Schnitzler seinen Offiziersrang.", "Sie verlieh ihm einen Orden.", "Sie verfilmte die Erzählung."], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-c2-5", unit: "c2-5", level: "C2", icon: "radio",
    title: "Ganz nah an der Figur", title_fr: "Tout près du personnage",
    context: "A literature programme on the radio. The host talks to the novelist Henrike Voss about the narrative technique of her new book.", context_fr: "Une émission littéraire à la radio. L'animateur parle avec la romancière Henrike Voss de la technique narrative de son nouveau livre.",
    words: [["heranführen", "to bring closer, to lead up to", "rapprocher, amener"], ["verwirrend", "confusing", "déroutant"], ["sich gewöhnen an", "to get used to", "s'habituer à"], ["wagen", "to dare", "oser"], ["unerhört", "unheard-of, outrageous", "inouï"]],
    lines: [["Moderator", "Frau Voss, Ihr neuer Roman ist ganz in erlebter Rede geschrieben. Warum?", "de-DE"], ["Frau Voss", "Weil ich die Leser so nah wie möglich an meine Hauptfigur heranführen wollte, ohne sie ständig „ich“ sagen zu lassen. Die erlebte Rede erlaubt beides: Nähe und ein kleines bisschen Distanz.", "de-DE"], ["Moderator", "Können Sie ein Beispiel geben?", "de-DE"], ["Frau Voss", "Statt „Sie dachte, dass sie zu spät komme“ schreibe ich: „Verdammt, schon wieder zu spät. Was würde der Chef sagen?“ Man hört ihre Gedanken, aber in der dritten Person.", "de-DE"], ["Moderator", "Viele Leser finden das zunächst verwirrend.", "de-DE"], ["Frau Voss", "Das stimmt. Nicht die Handlung ist schwierig, sondern die Frage, wer gerade spricht. Daran gewöhnt man sich aber schnell.", "de-DE"], ["Moderator", "Haben Sie Vorbilder?", "de-DE"], ["Frau Voss", "Natürlich Schnitzler. Was er mit „Leutnant Gustl“ gewagt hat, war damals unerhört: eine ganze Erzählung nur aus Gedanken.", "de-DE"]],
    gist: ["Worum geht es im Gespräch?", ["Um die Erzähltechnik eines neuen Romans", "Um die Verfilmung eines Romans", "Um einen Schreibwettbewerb"]],
    detail: [["Warum schreibt Frau Voss in erlebter Rede?", ["Sie will Nähe zur Hauptfigur schaffen und etwas Distanz behalten.", "Weil es schneller geht.", "Weil der Verlag es verlangt."]], ["Was hört man in ihrem Beispiel?", ["Die Gedanken der Figur in der dritten Person", "Ein Gespräch zwischen zwei Figuren", "Einen Brief"]], ["Was finden viele Leser zunächst verwirrend?", ["Die Frage, wer gerade spricht", "Die Handlung", "Die vielen Fremdwörter"]], ["Wen nennt sie als Vorbild?", ["Arthur Schnitzler", "Thomas Mann", "Franz Kafka"]]],
    decode: ["Verdammt, schon wieder zu spät", "Nicht die Handlung ist schwierig, sondern die Frage, wer gerade spricht"],
    tip: "Notice how the novelist moves between her own voice and her character's: she quotes a sentence of indirect speech and then rewrites it in erlebte Rede. When you listen to literature programmes, these quoted examples are often the key to understanding the whole discussion.", tip_fr: "Remarque comment la romancière passe de sa propre voix à celle de son personnage : elle cite une phrase au discours indirect puis la réécrit en erlebte Rede. Dans les émissions littéraires, ces exemples cités sont souvent la clé de toute la discussion."
  }]);

  W.PROMPTS.push({ id: "de-c2-5", level: "C2", q: "Halte einen Vortrag (etwa drei bis vier Minuten): „Was kann Literatur, was ein Sachbuch nicht kann?“ Stütze dich auf ein Beispiel und gehe auf die Erzähltechnik ein.", en: "Give a talk (about three to four minutes): “What can literature do that a non-fiction book can't?” Draw on an example and discuss narrative technique.", fr: "Fais un exposé (environ trois à quatre minutes) : « Que peut la littérature qu'un essai documentaire ne peut pas ? » Appuie-toi sur un exemple et parle de la technique narrative.", time: 240,
    phrases: ["Nicht …, sondern…", "Ein gutes Beispiel ist…", "Der innere Monolog lässt den Leser…", "Hier zeigt sich…", "Insgesamt…"],
    model: "Was kann Literatur, was ein Sachbuch nicht kann? Ein Sachbuch kann mir erklären, wie der militärische Ehrbegriff um 1900 funktionierte. Es kann Regeln, Zahlen und Gerichtsurteile nennen. Nicht das Wissen ist jedoch das Entscheidende, sondern die Erfahrung. Ein gutes Beispiel ist Schnitzlers „Leutnant Gustl“. Der innere Monolog lässt den Leser eine Nacht lang im Kopf eines jungen Offiziers verbringen. Man erlebt seine Angst, seine Eitelkeit und seine Verzweiflung, und zwar von innen, ohne einen Erzähler, der erklärt oder urteilt. Gerade deshalb wirkt die Kritik so stark: Niemand sagt uns, dass Gustls Ehrbegriff hohl ist; wir merken es selbst. Hier zeigt sich, was Literatur besonders gut kann: Sie lässt uns die Welt mit fremden Augen sehen. Das schafft Verständnis, manchmal auch Mitgefühl für Menschen, die ganz anders denken als wir. Insgesamt ersetzt Literatur kein Sachbuch, aber sie ergänzt es um etwas Unersetzliches: die Erfahrung, wie es sich anfühlt, ein anderer zu sein." });

  W.WRITING_GUIDE["c2-5"] = { genre: "An essay (C2)", genre_fr: "Un essai (C2)",
    plan: [["A historical example and your thesis.", "Un exemple historique et ta thèse."], ["Why art must be free.", "Pourquoi l'art doit être libre."], ["Character is not author.", "Le personnage n'est pas l'auteur."], ["The limits of artistic freedom.", "Les limites de la liberté artistique."], ["Consequences and a conclusion.", "Des conséquences et une conclusion."]],
    marks: [["Meines Erachtens muss sie fast alles dürfen", "the thesis", "la thèse"], ["Nicht ohne Grund", "a litotes", "une litote"], ["Hätte er Rücksicht auf die Empfindlichkeiten der Armee genommen", "an unreal past condition", "une condition irréelle au passé"], ["bedeutet das keineswegs", "a strong negation", "une négation renforcée"], ["Dennoch ist die Freiheit der Kunst nicht grenzenlos", "the turn to the limits", "le passage aux limites"], ["Was folgt daraus?", "a question leading to consequences", "une question qui mène aux conséquences"]] };

  /* Atelier de langue : champs allemands d'abord, puis anglais et français (voir localize.js). */
  W.LEXIS = W.LEXIS || {};
  W.LEXIS["c2-5"] = {
    colloc: [
      ["eine Figur zeichnen", "to portray a character", "camper un personnage", "Schnitzler zeichnet Gustl als eitlen jungen Mann.", "zeichnet", ["zieht", "zählt"]],
      ["Spannung aufbauen", "to build up suspense", "faire monter la tension", "Der Autor baut die Spannung langsam auf.", "baut", ["legt", "setzt"]],
      ["die Perspektive wechseln", "to change perspective", "changer de point de vue", "Im zweiten Kapitel wechselt die Perspektive.", "wechselt", ["wächst", "weicht"]],
      ["einen Skandal auslösen", "to spark a scandal", "déclencher un scandale", "Die Erzählung löste einen Skandal aus.", "löste", ["lockte", "lohnte"]],
      ["Einblick gewähren", "to give an insight", "donner un aperçu", "Der Monolog gewährt Einblick in Gustls Gedanken.", "gewährt", ["gewöhnt", "gewährleistet"]],
      ["ein Tabu brechen", "to break a taboo", "briser un tabou", "Mit dieser Erzählung brach Schnitzler ein Tabu.", "brach", ["riss", "schlug"]],
      ["sich in seiner Ehre verletzt fühlen", "to feel one's honour has been wounded", "se sentir blessé dans son honneur", "Gustl fühlt sich in seiner Ehre verletzt.", "verletzt", ["verlegt", "versetzt"]],
      ["eine Wendung nehmen", "to take a turn", "prendre un tournant", "Die Geschichte nimmt eine überraschende Wendung.", "nimmt", ["macht", "gibt"]],
      ["ein Motiv aufgreifen", "to take up a motif", "reprendre un motif", "Der Roman greift ein altes Motiv auf.", "greift", ["gräbt", "grüßt"]],
      ["die Handlung vorantreiben", "to move the plot forward", "faire avancer l'intrigue", "Jeder Dialog treibt die Handlung voran.", "treibt", ["trägt", "trifft"]]
    ],
    wf: [
      ["Die Erzählung ist eine scharfe ___ am Militär. (KRITISIEREN)", "Kritik"],
      ["Gustl ist ausgesprochen ___. (EITELKEIT)", "eitel"],
      ["Die ___ der Hauptfigur wirkt glaubwürdig. (DARSTELLEN)", "Darstellung"],
      ["Der Text löste große ___ aus. (EMPÖREN)", "Empörung"],
      ["Der innere Monolog wirkt sehr ___. (UNMITTELBARKEIT)", "unmittelbar"],
      ["Gustl ist äußerst ___ und fühlt sich schnell beleidigt. (EMPFINDEN)", "empfindlich"],
      ["Die Erzählung erschien in einer ___ zu Weihnachten. (BEILEGEN)", "Beilage"],
      ["Am Morgen spürte er nur noch ___. (LEICHT)", "Erleichterung"]
    ],
    kwt: [
      ["Das Schwierige ist nicht die Handlung, sondern die Erzählweise.", "NICHT", "___ ist schwierig, sondern die Erzählweise.", "Nicht die Handlung"],
      ["Er hat den Artikel gelesen, nicht das Buch.", "SONDERN", "Er hat nicht das Buch gelesen, ___.", "sondern den Artikel"],
      ["Er war gar nicht überrascht.", "GERINGSTEN", "Er war ___.", "nicht im Geringsten überrascht"],
      ["Der Erzähler weiß alles über alle Figuren.", "AUKTORIAL", "Es handelt sich ___.", "um einen auktorialen Erzähler"],
      ["Man kann die Erzählung als Kritik deuten.", "LÄSST", "Die Erzählung ___ deuten.", "lässt sich als Kritik"],
      ["Die Geschichte endet ganz anders als erwartet.", "WENDUNG", "Die Geschichte ___.", "nimmt am Ende eine überraschende Wendung"]
    ],
    idioms: [
      ["Seemannsgarn spinnen", "unglaubliche Geschichten erzählen", "to spin a yarn", "raconter des histoires à dormir debout", "Opa spinnt gern Seemannsgarn.", "spinnt gern Seemannsgarn"],
      ["das Blaue vom Himmel lügen", "hemmungslos lügen", "to lie through one's teeth", "mentir comme un arracheur de dents", "Im Verhör log er das Blaue vom Himmel.", "das Blaue vom Himmel"],
      ["aus der Haut fahren", "plötzlich sehr wütend werden", "to fly off the handle", "sortir de ses gonds", "Bei dieser Bemerkung fuhr Gustl aus der Haut.", "fuhr Gustl aus der Haut"],
      ["die Nase rümpfen", "Verachtung zeigen", "to turn one's nose up", "faire la fine bouche", "Die Offiziere rümpften über die Bürger die Nase.", "rümpften über die Bürger die Nase"],
      ["das Gesicht wahren", "seinen guten Ruf retten", "to save face", "sauver la face", "Gustl will um jeden Preis das Gesicht wahren.", "das Gesicht wahren"],
      ["sich auf den Schlips getreten fühlen", "sich gekränkt fühlen", "to feel offended", "se sentir vexé", "Er fühlte sich sofort auf den Schlips getreten.", "auf den Schlips getreten"],
      ["jemanden auf die Palme bringen", "jemanden wütend machen", "to drive someone up the wall", "mettre quelqu'un hors de lui", "Seine Arroganz bringt mich auf die Palme.", "bringt mich auf die Palme"],
      ["vom Regen in die Traufe kommen", "aus einer schlechten in eine noch schlechtere Lage geraten", "to go from bad to worse", "tomber de Charybde en Scylla", "Mit dem neuen Job kam er vom Regen in die Traufe.", "vom Regen in die Traufe"]
    ]
  };

  W.COURSE.push({ id: "c2-5", level: "C2", icon: "book-open-text", title: "Inside a character's head", title_fr: "Dans la tête d'un personnage",
    intro: "How does a writer let us hear a character's thoughts? In this unit, you'll learn the narrative techniques of German literature (erlebte Rede, innerer Monolog, kinds of narrator), the scope of negation and the art of understatement (nicht …, sondern; nicht im Geringsten; nicht unbedeutend), and how to write an interpretation of a literary text. You'll also read about Arthur Schnitzler's “Leutnant Gustl”, a story told entirely from inside a young officer's head.",
    intro_fr: "Comment un écrivain nous fait-il entendre les pensées d'un personnage ? Dans cette unité, tu vas apprendre les techniques narratives de la littérature allemande (erlebte Rede, monologue intérieur, types de narrateur), la portée de la négation et l'art de la litote (nicht …, sondern ; nicht im Geringsten ; nicht unbedeutend), et la façon d'écrire l'interprétation d'un texte littéraire. Tu liras aussi un texte sur « Le Lieutenant Gustel » d'Arthur Schnitzler, un récit raconté entièrement depuis la tête d'un jeune officier.",
    can: ["Recognise erlebte Rede, interior monologue and types of narrator", "Place nicht precisely, strengthen negation and use litotes", "Write a structured interpretation of a literary text", "Talk about narrative technique, honour and pride", "Write an essay on artistic freedom (C2)"],
    can_fr: ["Reconnaître l'erlebte Rede, le monologue intérieur et les types de narrateur", "Placer nicht avec précision, renforcer la négation et employer la litote", "Écrire l'interprétation structurée d'un texte littéraire", "Parler de technique narrative, d'honneur et d'orgueil", "Écrire un essai sur la liberté artistique (C2)"],
    lessons: [145, 146, 147], vocab: ["erzaehltechnikDE", "ehreDE"], reading: "schnitzler", prompt: "de-c2-5",
    writing: { task: "Write an essay (300-350 words): “May literature do anything?” Include a historical example and your thesis, why art must be free, the difference between character and author, the limits of artistic freedom, and consequences.", task_fr: "Écris un essai (300 à 350 mots) : « La littérature a-t-elle tous les droits ? » Avec un exemple historique et ta thèse, pourquoi l'art doit être libre, la différence entre personnage et auteur, les limites de la liberté artistique, et des conséquences.", words: "300-350",
      tips: ["Meines Erachtens…", "Nicht ohne Grund…", "Hätte er…, wäre…", "… bedeutet das keineswegs, dass…", "Was folgt daraus?"],
      checklist: ["I wrote a lead-in and a clear thesis", "I distinguished between character and author", "I discussed the limits fairly", "I used a litotes or a strong negation", "I wrote between 300 and 350 words"],
      checklist_fr: ["J'ai écrit une amorce et une thèse claire", "J'ai distingué le personnage de l'auteur", "J'ai discuté honnêtement des limites", "J'ai employé une litote ou une négation renforcée", "J'ai écrit entre 300 et 350 mots"],
      model: "Als Arthur Schnitzler 1900 seine Erzählung „Leutnant Gustl“ veröffentlichte, verlor er dafür bald darauf seinen Offiziersrang. Heute wirkt diese Reaktion übertrieben, doch die Frage, die sie aufwirft, ist aktueller denn je: Darf Literatur alles? Meines Erachtens muss sie fast alles dürfen, aber nicht ohne Verantwortung.\n\nNicht ohne Grund schützt das Grundgesetz die Kunst ausdrücklich: „Kunst und Wissenschaft, Forschung und Lehre sind frei“, heißt es in Artikel 5. Gerade die Literatur hat die Aufgabe, dorthin zu schauen, wo eine Gesellschaft lieber wegsieht. Schnitzler zeigte, wie hohl ein Ehrbegriff sein kann, der wichtiger ist als ein Menschenleben. Hätte er Rücksicht auf die Empfindlichkeiten der Armee genommen, wäre dieser Text nie entstanden. Kunst, die niemandem wehtut, sagt oft auch niemandem etwas.\n\nHinzu kommt, dass Literatur nicht dasselbe ist wie eine Meinungsäußerung. Wenn eine Figur Ungeheuerliches denkt, bedeutet das keineswegs, dass der Autor diese Gedanken teilt. Wer die erlebte Rede oder den inneren Monolog als Bekenntnis des Autors liest, verwechselt Erzähler und Verfasser, ein Fehler, der nicht selten zu Skandalen führt. Auch Schnitzler wurde vorgeworfen, das Militär zu beleidigen, obwohl er nur zeigte, wie ein Offizier dachte.\n\nDennoch ist die Freiheit der Kunst nicht grenzenlos. Wo reale, erkennbare Menschen bloßgestellt werden, kollidiert sie mit dem Persönlichkeitsrecht. Nicht jede Provokation ist zudem schon Kunst; manchmal dient der Verweis auf die Kunstfreiheit nur dazu, Verletzungen zu rechtfertigen. Solche Grenzfälle lassen sich nicht pauschal entscheiden, sondern nur im Einzelfall abwägen.\n\nWas folgt daraus? Zum einen sollten Leserinnen und Leser lernen, zwischen Figur und Autor zu unterscheiden; das ist keine Selbstverständlichkeit, sondern eine Fähigkeit, die die Schule vermitteln muss. Zum anderen tragen Schriftstellerinnen und Schriftsteller Verantwortung, gerade weil ihnen so viel Freiheit gewährt wird. Freiheit und Verantwortung schließen einander nicht aus, sondern gehören zusammen.\n\nLiteratur darf verstören, provozieren und Tabus brechen. Sie sollte aber nicht vergessen, dass ihre Wirkung auf echte Menschen trifft. Schnitzlers Gustl hat am Ende nichts gelernt; wir als Leserinnen und Leser dagegen können aus seiner Geschichte sehr viel lernen." } });
})();
