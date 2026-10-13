/* Cours d'allemand, unité C2-2 « The power of speech / Le pouvoir de la parole » : les figures de style
   (métaphore, comparaison, personnification, anaphore, antithèse, gradation, hyperbole, euphémisme, question
   rhétorique, parallélisme, trikolon), la mise en relief par la phrase clivée et la dislocation (Was mich
   überzeugt, ist… ; Es war X, der… ; Wer…, der… ; Diesen Satz, den…), faire un discours de circonstance.
   Personnages fictifs, prénoms allemands.
   Faits vérifiables seulement : le 8 mai 1985, pour le 40e anniversaire de la fin de la guerre en Europe, le
   président fédéral Richard von Weizsäcker (1920-2015, président de 1984 à 1994, lui-même soldat pendant la
   guerre) prononce au Bundestag, à Bonn, un discours resté célèbre : « Der 8. Mai war ein Tag der Befreiung. » ;
   énumération des victimes introduite par « Wir gedenken… » ; « Wer aber vor der Vergangenheit die Augen
   verschließt, wird blind für die Gegenwart. » ; large écho en Allemagne et à l'étranger, traductions dans de
   nombreuses langues ; mort à Berlin en 2015. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "stilmittelDE", icon: "sparkles", title: "Rhetorical devices", title_fr: "Les figures de style", level: "C2", words: [
    ["die Metapher, -n", "the metaphor", "la métaphore", "„Das Leben ist eine Reise“ ist eine bekannte Metapher."],
    ["der Vergleich, -e", "the comparison, the simile", "la comparaison", "„Stark wie ein Bär“ ist ein Vergleich."],
    ["die Personifikation, -en", "personification", "la personnification", "„Die Stadt schläft“ ist eine Personifikation."],
    ["die Anapher, -n", "the anaphora", "l'anaphore", "Die Rede lebt von einer langen Anapher."],
    ["die Antithese, -n", "the antithesis", "l'antithèse", "„Krieg und Frieden“ bildet eine Antithese."],
    ["die Klimax, -e", "the climax (gradation)", "la gradation", "Die Klimax steigert die Spannung bis zum letzten Wort."],
    ["die Hyperbel, -n", "the hyperbole", "l'hyperbole", "„Ich habe tausendmal angerufen“ ist eine Hyperbel."],
    ["der Euphemismus, Euphemismen", "the euphemism", "l'euphémisme", "„Freisetzen“ ist ein Euphemismus für „entlassen“."],
    ["der Parallelismus", "parallelism", "le parallélisme", "Der Parallelismus macht die Sätze leicht zu merken."],
    ["das Trikolon, Trikola", "the tricolon (a group of three)", "le rythme ternaire", "„Ich kam, sah und siegte“ ist ein berühmtes Trikolon."],
    ["die Wiederholung, -en", "the repetition", "la répétition", "Wiederholungen helfen dem Publikum, sich zu erinnern."],
    ["die Übertreibung, -en", "the exaggeration", "l'exagération", "Mit Übertreibungen sollte man sparsam sein."],
    ["die Aufzählung, -en", "the list, the enumeration", "l'énumération", "Die lange Aufzählung der Opfer bewegte viele Zuhörer."],
    ["die rhetorische Frage, -n", "the rhetorical question", "la question rhétorique", "Eine rhetorische Frage erwartet keine Antwort."],
    ["das Wortspiel, -e", "the pun, the wordplay", "le jeu de mots", "Die Werbung lebt von Wortspielen."],
    ["das Sprachbild, -er", "the image, the figure of speech", "l'image (figure de style)", "Sie arbeitet mit starken Sprachbildern."]
  ] },
  { id: "redekunstDE", icon: "mic", title: "Public speaking", title_fr: "La prise de parole en public", level: "C2", words: [
    ["die Ansprache, -n", "the address, the short speech", "l'allocution", "Der Bürgermeister hielt eine kurze Ansprache."],
    ["das Rednerpult, -e", "the lectern", "le pupitre", "Sie trat ans Rednerpult und wartete, bis es still war."],
    ["die Zuhörerschaft", "the audience", "l'auditoire", "Die Zuhörerschaft bestand vor allem aus Studierenden."],
    ["das Lampenfieber", "stage fright", "le trac", "Vor jeder Rede hat er Lampenfieber."],
    ["der Zwischenruf, -e", "the heckle, the interjection", "l'interruption, l'invective", "Im Parlament gab es viele Zwischenrufe."],
    ["die Schlagfertigkeit", "quick-wittedness", "la repartie", "Mit ihrer Schlagfertigkeit gewann sie das Publikum."],
    ["die Kernaussage, -n", "the key message", "le message essentiel", "Jede Rede braucht eine klare Kernaussage."],
    ["der Spannungsbogen, ¨-", "the dramatic arc", "la progression dramatique", "Der Spannungsbogen hielt bis zum Schluss."],
    ["der Redenschreiber, - (die Redenschreiberin)", "the speechwriter", "la plume, l'auteur de discours", "Die Ministerin arbeitet mit einer Redenschreiberin."],
    ["eindringlich", "urgent, insistent, compelling", "pressant, saisissant", "Sie warnte eindringlich vor den Folgen."],
    ["mitreißend", "rousing, stirring", "entraînant, enthousiasmant", "Es war eine mitreißende Rede."],
    ["wortgewaltig", "eloquent, powerful with words", "éloquent, au verbe puissant", "Er galt als wortgewaltiger Redner."],
    ["pathetisch", "overly emotional, grandiloquent", "emphatique, grandiloquent", "Der Schluss war etwas zu pathetisch."],
    ["appellieren", "to appeal", "en appeler à, lancer un appel", "Sie appellierte an die Vernunft der Zuhörer."],
    ["sich räuspern", "to clear one's throat", "se racler la gorge", "Er räusperte sich und begann zu sprechen."],
    ["stocken", "to falter, to stall", "hésiter, s'interrompre", "Mitten im Satz stockte sie."]
  ] });

  W.LESSONS.push(
  {
    id: 136, level: "C2", icon: "sparkles",
    title: "Metapher, Anapher, Antithese: rhetorical devices", title_fr: "Metapher, Anapher, Antithese : les figures de style",
    subtitle: "Recognise, name and analyse the devices of speeches, advertising and literature.", subtitle_fr: "Reconnaître, nommer et analyser les figures des discours, de la publicité et de la littérature.",
    body: `
<h2>Images</h2>
<table>
<tr><td><b>Metapher</b></td><td><s-de>Das Leben ist eine Reise.</s-de></td></tr>
<tr><td><b>Vergleich</b> (with <s-de>wie</s-de>)</td><td><s-de>stark wie ein Bär</s-de></td></tr>
<tr><td><b>Personifikation</b></td><td><s-de>Die Stadt schläft.</s-de></td></tr>
</table>
<h2>Repetition and structure</h2>
<table>
<tr><td><b>Anapher</b></td><td><s-de>Wir wollen Frieden. Wir wollen Freiheit. Wir wollen Gerechtigkeit.</s-de></td></tr>
<tr><td><b>Parallelismus</b></td><td><s-de>Die Stimmen werden lauter, die Fragen werden drängender.</s-de></td></tr>
<tr><td><b>Trikolon</b></td><td><s-de>Ich kam, sah und siegte.</s-de></td></tr>
<tr><td><b>Klimax</b></td><td><s-de>Es geht um Tausende, um Millionen, um unsere Zukunft.</s-de></td></tr>
</table>
<h2>Contrast, exaggeration, softening</h2>
<table>
<tr><td><b>Antithese</b></td><td><s-de>Der Mensch denkt, Gott lenkt.</s-de></td></tr>
<tr><td><b>Hyperbel</b></td><td><s-de>Ich habe es dir tausendmal gesagt.</s-de></td></tr>
<tr><td><b>Euphemismus</b></td><td><s-de>Mitarbeiter freisetzen</s-de> (= entlassen)</td></tr>
<tr><td><b>Rhetorische Frage</b></td><td><s-de>Wer will das schon?</s-de></td></tr>
</table>
<h2>Analysing a device</h2>
<p>Name it, quote it, explain its effect: <s-de>Durch die Anapher „Wir wollen…“ prägen sich die Forderungen ein und wirken entschlossen.</s-de></p>
<div class="tip">Naming a device is only the first step. What counts in an analysis is the effect: what does the image make the audience feel, what does the repetition stress, what does the euphemism hide?</div>
`,
    body_fr: `
<h2>Les images</h2>
<table>
<tr><td><b>Metapher</b> (métaphore)</td><td><s-de>Das Leben ist eine Reise.</s-de></td></tr>
<tr><td><b>Vergleich</b> (comparaison, avec <s-de>wie</s-de>)</td><td><s-de>stark wie ein Bär</s-de></td></tr>
<tr><td><b>Personifikation</b></td><td><s-de>Die Stadt schläft.</s-de></td></tr>
</table>
<h2>La répétition et la structure</h2>
<table>
<tr><td><b>Anapher</b></td><td><s-de>Wir wollen Frieden. Wir wollen Freiheit. Wir wollen Gerechtigkeit.</s-de></td></tr>
<tr><td><b>Parallelismus</b></td><td><s-de>Die Stimmen werden lauter, die Fragen werden drängender.</s-de></td></tr>
<tr><td><b>Trikolon</b> (rythme ternaire)</td><td><s-de>Ich kam, sah und siegte.</s-de></td></tr>
<tr><td><b>Klimax</b> (gradation)</td><td><s-de>Es geht um Tausende, um Millionen, um unsere Zukunft.</s-de></td></tr>
</table>
<h2>Le contraste, l'exagération, l'atténuation</h2>
<table>
<tr><td><b>Antithese</b></td><td><s-de>Der Mensch denkt, Gott lenkt.</s-de> (L'homme propose, Dieu dispose.)</td></tr>
<tr><td><b>Hyperbel</b></td><td><s-de>Ich habe es dir tausendmal gesagt.</s-de></td></tr>
<tr><td><b>Euphemismus</b></td><td><s-de>Mitarbeiter freisetzen</s-de> (= entlassen, licencier)</td></tr>
<tr><td><b>Rhetorische Frage</b></td><td><s-de>Wer will das schon?</s-de></td></tr>
</table>
<h2>Analyser une figure</h2>
<p>La nommer, la citer, expliquer son effet : <s-de>Durch die Anapher „Wir wollen…“ prägen sich die Forderungen ein und wirken entschlossen.</s-de></p>
<div class="tip">Nommer une figure n'est que la première étape. Ce qui compte dans une analyse, c'est l'effet : que fait ressentir l'image au public, que souligne la répétition, que cache l'euphémisme ?</div>
`,
    examples: [
      ["Das Leben ist eine Reise.", "Life is a journey.", "La vie est un voyage."],
      ["Die Stadt schläft noch.", "The city is still asleep.", "La ville dort encore."],
      ["Wir wollen Frieden. Wir wollen Freiheit. Wir wollen Gerechtigkeit.", "We want peace. We want freedom. We want justice.", "Nous voulons la paix. Nous voulons la liberté. Nous voulons la justice."],
      ["Es geht um Tausende, um Millionen, um unsere Zukunft.", "It's about thousands, about millions, about our future.", "Il s'agit de milliers, de millions, de notre avenir."],
      ["Die Firma will 200 Mitarbeiter freisetzen.", "The company wants to “release” 200 employees.", "L'entreprise veut « libérer » 200 salariés."],
      ["Wer will das schon?", "Who would want that?", "Qui voudrait cela ?"],
      ["Durch die Anapher prägen sich die Forderungen ein.", "Through the anaphora, the demands stick in the mind.", "Grâce à l'anaphore, les revendications se gravent dans les esprits."]
    ],
    quiz: [
      { q: "“stark wie ein Bär” is…", q_fr: "« stark wie ein Bär » est…", o: ["ein Vergleich", "eine Metapher", "eine Anapher"], a: 0, ex: "With wie: a comparison.", ex_fr: "Avec wie : une comparaison." },
      { q: "“Wir wollen Frieden. Wir wollen Freiheit.” is…", q_fr: "« Wir wollen Frieden. Wir wollen Freiheit. » est…", o: ["eine Anapher", "eine Hyperbel", "ein Euphemismus"], a: 0, ex: "The same words begin each sentence.", ex_fr: "Les mêmes mots commencent chaque phrase." },
      { q: "“Mitarbeiter freisetzen” is…", q_fr: "« Mitarbeiter freisetzen » est…", o: ["ein Euphemismus", "eine Klimax", "eine Personifikation"], a: 0, ex: "A softened word for “entlassen”.", ex_fr: "Un mot adouci pour « entlassen »." },
      { q: "“Es geht um Tausende, um Millionen, um unsere Zukunft” is…", q_fr: "« Es geht um Tausende, um Millionen, um unsere Zukunft » est…", o: ["eine Klimax", "eine Antithese", "ein Vergleich"], a: 0, ex: "A rising sequence.", ex_fr: "Une progression ascendante." },
      { q: "What matters most in the analysis of a device?", q_fr: "Qu'est-ce qui compte le plus dans l'analyse d'une figure ?", o: ["Its effect on the audience", "Its Greek name", "The number of words"], o_fr: ["Son effet sur le public", "Son nom grec", "Le nombre de mots"], a: 0, ex: "Name it, quote it, explain the effect.", ex_fr: "La nommer, la citer, expliquer l'effet." }
    ]
  },
  {
    id: 137, level: "C2", icon: "spotlight",
    title: "Was mich überzeugt, ist…: cleft sentences and dislocation", title_fr: "Was mich überzeugt, ist… : phrases clivées et dislocation",
    subtitle: "Put one element in the spotlight, as speakers and writers do for emphasis.", subtitle_fr: "Mettre un élément en lumière, comme le font orateurs et auteurs pour insister.",
    body: `
<h2>Pseudo-cleft sentences: Was …, ist …</h2>
<p><s-de>Ihre Ehrlichkeit überzeugt mich.</s-de> → <s-de>Was mich überzeugt, ist ihre Ehrlichkeit.</s-de> The suspense lasts until the end. Also: <s-de>Was wir brauchen, sind klare Regeln.</s-de> (the verb agrees with the plural noun).</p>
<h2>Cleft sentences: Es ist / war …, der / die / das …</h2>
<p><s-de>Es war Weizsäcker, der diese Rede hielt.</s-de> · <s-de>Es sind die kleinen Dinge, die zählen.</s-de></p>
<h2>Wer …, (der) …</h2>
<p><s-de>Wer das behauptet, (der) irrt.</s-de> The pronoun <s-de>der</s-de> picks up the clause and adds weight.</p>
<h2>Dislocation</h2>
<p>Left: <s-de>Diesen Satz, den vergesse ich nie.</s-de> Right, typical of speech: <s-de>Der war gut, der Film.</s-de></p>
<h2>Focus particles</h2>
<p><s-de>gerade, ausgerechnet, selbst, sogar</s-de> point at one element: <s-de>Ausgerechnet heute regnet es.</s-de> · <s-de>Selbst die Kritiker waren begeistert.</s-de></p>
<div class="tip">Cleft sentences are strong spices: one per paragraph is enough. In a speech, <s-de>Was …, ist …</s-de> builds suspense; in an essay, <s-de>Es ist nicht …, sondern …, der / die …</s-de> sets up a clear contrast.</div>
`,
    body_fr: `
<h2>Les pseudo-clivées : Was …, ist …</h2>
<p><s-de>Ihre Ehrlichkeit überzeugt mich.</s-de> → <s-de>Was mich überzeugt, ist ihre Ehrlichkeit.</s-de> (Ce qui me convainc, c'est son honnêteté.) Le suspense dure jusqu'à la fin. Aussi : <s-de>Was wir brauchen, sind klare Regeln.</s-de> (le verbe s'accorde avec le nom pluriel).</p>
<h2>Les clivées : Es ist / war …, der / die / das …</h2>
<p><s-de>Es war Weizsäcker, der diese Rede hielt.</s-de> (C'est Weizsäcker qui a prononcé ce discours.) · <s-de>Es sind die kleinen Dinge, die zählen.</s-de></p>
<h2>Wer …, (der) …</h2>
<p><s-de>Wer das behauptet, (der) irrt.</s-de> (Celui qui affirme cela se trompe.) Le pronom <s-de>der</s-de> reprend la proposition et lui donne du poids.</p>
<h2>La dislocation</h2>
<p>À gauche : <s-de>Diesen Satz, den vergesse ich nie.</s-de> (Cette phrase, je ne l'oublierai jamais.) À droite, typique de l'oral : <s-de>Der war gut, der Film.</s-de> (Il était bien, ce film.)</p>
<h2>Les particules de focalisation</h2>
<p><s-de>gerade, ausgerechnet, selbst, sogar</s-de> désignent un élément : <s-de>Ausgerechnet heute regnet es.</s-de> (Il fallait qu'il pleuve aujourd'hui.) · <s-de>Selbst die Kritiker waren begeistert.</s-de></p>
<div class="tip">Les phrases clivées sont des épices fortes : une par paragraphe suffit. Dans un discours, <s-de>Was …, ist …</s-de> crée du suspense ; dans un essai, <s-de>Es ist nicht …, sondern …, der / die …</s-de> installe un contraste net.</div>
`,
    examples: [
      ["Was mich überzeugt, ist ihre Ehrlichkeit.", "What convinces me is her honesty.", "Ce qui me convainc, c'est son honnêteté."],
      ["Was wir brauchen, sind klare Regeln.", "What we need are clear rules.", "Ce dont nous avons besoin, ce sont des règles claires."],
      ["Es war Weizsäcker, der diese Rede hielt.", "It was Weizsäcker who gave this speech.", "C'est Weizsäcker qui a prononcé ce discours."],
      ["Es sind die kleinen Dinge, die zählen.", "It's the little things that count.", "Ce sont les petites choses qui comptent."],
      ["Wer das behauptet, der irrt.", "Whoever claims that is mistaken.", "Celui qui affirme cela se trompe."],
      ["Diesen Satz, den vergesse ich nie.", "That sentence, I'll never forget it.", "Cette phrase, je ne l'oublierai jamais."],
      ["Ausgerechnet heute regnet es.", "Of all days, it's raining today.", "Il fallait qu'il pleuve justement aujourd'hui."]
    ],
    quiz: [
      { q: "___ mich überzeugt, ist ihre Ehrlichkeit.", q_fr: "___ mich überzeugt, ist ihre Ehrlichkeit.", o: ["Was", "Das", "Wer"], a: 0, ex: "Pseudo-cleft: Was …, ist …", ex_fr: "Pseudo-clivée : Was …, ist …" },
      { q: "Was wir brauchen, ___ klare Regeln.", q_fr: "Was wir brauchen, ___ klare Regeln.", o: ["sind", "ist", "hat"], a: 0, ex: "The verb agrees with the plural noun.", ex_fr: "Le verbe s'accorde avec le nom pluriel." },
      { q: "Es war meine Schwester, ___ mir geholfen hat.", q_fr: "Es war meine Schwester, ___ mir geholfen hat.", o: ["die", "der", "was"], a: 0, ex: "The relative pronoun agrees with Schwester.", ex_fr: "Le relatif s'accorde avec Schwester." },
      { q: "“Whoever claims that is mistaken.”", q_fr: "« Celui qui affirme cela se trompe. »", o: ["Wer das behauptet, der irrt.", "Der das behauptet, wer irrt.", "Was das behauptet, der irrt."], a: 0, ex: "Wer …, der …", ex_fr: "Wer …, der …" },
      { q: "Which word means “of all things / of all days”?", q_fr: "Quel mot signifie « justement, comme par hasard » ?", o: ["ausgerechnet", "ausgezeichnet", "ausgedacht"], a: 0, ex: "Ausgerechnet heute regnet es.", ex_fr: "Ausgerechnet heute regnet es." }
    ]
  },
  {
    id: 138, level: "C2", kind: "functional", icon: "mic",
    title: "Everyday German: giving a speech for an occasion", title_fr: "L'allemand de tous les jours : faire un discours de circonstance",
    subtitle: "Farewells, anniversaries, weddings: greeting, story, message, thanks and a toast.", subtitle_fr: "Départs, anniversaires, mariages : salutation, anecdote, message, remerciements et toast.",
    body: `
<h2>The greeting</h2>
<p><s-de>Lieber Herr Vogt, liebe Kolleginnen und Kollegen,</s-de> · formal: <s-de>Sehr geehrte Frau Bürgermeisterin, sehr geehrte Damen und Herren,</s-de> · <s-de>Liebe Gäste,</s-de></p>
<h2>The opening: a story, not statistics</h2>
<p><s-de>Was mir als Erstes einfällt, wenn ich an … denke, ist …</s-de> · <s-de>Ich erinnere mich noch genau an den Tag, an dem …</s-de></p>
<h2>The message and the thanks</h2>
<p><s-de>Es sind nicht nur Ihre Ideen, die wir vermissen werden, sondern vor allem …</s-de> · <s-de>Im Namen des ganzen Teams danke ich Ihnen für …</s-de></p>
<h2>The ending</h2>
<p><s-de>Für Ihren Ruhestand wünschen wir Ihnen alles Gute.</s-de> · <s-de>Erheben wir das Glas: Auf …!</s-de> · <s-de>Vielen Dank für Ihre Aufmerksamkeit.</s-de></p>
<div class="tip">A good occasion speech is short (two or three minutes), personal and has one clear message. Write it, then read it aloud: cut every sentence you stumble over, and mark the places where you want to pause.</div>
`,
    body_fr: `
<h2>La salutation</h2>
<p><s-de>Lieber Herr Vogt, liebe Kolleginnen und Kollegen,</s-de> · soutenu : <s-de>Sehr geehrte Frau Bürgermeisterin, sehr geehrte Damen und Herren,</s-de> · <s-de>Liebe Gäste,</s-de></p>
<h2>L'ouverture : une anecdote, pas des chiffres</h2>
<p><s-de>Was mir als Erstes einfällt, wenn ich an … denke, ist …</s-de> (La première chose qui me vient à l'esprit quand je pense à…, c'est…) · <s-de>Ich erinnere mich noch genau an den Tag, an dem …</s-de></p>
<h2>Le message et les remerciements</h2>
<p><s-de>Es sind nicht nur Ihre Ideen, die wir vermissen werden, sondern vor allem …</s-de> · <s-de>Im Namen des ganzen Teams danke ich Ihnen für …</s-de></p>
<h2>La fin</h2>
<p><s-de>Für Ihren Ruhestand wünschen wir Ihnen alles Gute.</s-de> · <s-de>Erheben wir das Glas: Auf …!</s-de> (Levons nos verres : à… !) · <s-de>Vielen Dank für Ihre Aufmerksamkeit.</s-de></p>
<div class="tip">Un bon discours de circonstance est court (deux ou trois minutes), personnel et porte un seul message clair. Écris-le, puis lis-le à voix haute : supprime chaque phrase sur laquelle tu butes, et marque les endroits où tu veux faire une pause.</div>
`,
    examples: [
      ["Lieber Herr Vogt, liebe Kolleginnen und Kollegen,", "Dear Herr Vogt, dear colleagues,", "Cher Monsieur Vogt, chères et chers collègues,"],
      ["Was mir als Erstes einfällt, ist sein Kaffee um sechs Uhr morgens.", "The first thing that comes to mind is his coffee at six in the morning.", "La première chose qui me vient à l'esprit, c'est son café à six heures du matin."],
      ["Ich erinnere mich noch genau an den Tag, an dem Sie hier angefangen haben.", "I still remember exactly the day you started here.", "Je me souviens encore précisément du jour où vous avez commencé ici."],
      ["Es sind nicht nur Ihre Ideen, die wir vermissen werden, sondern vor allem Ihr Humor.", "It's not only your ideas we'll miss, but above all your humour.", "Ce ne sont pas seulement vos idées qui vont nous manquer, mais surtout votre humour."],
      ["Im Namen des ganzen Teams danke ich Ihnen herzlich.", "On behalf of the whole team, I thank you warmly.", "Au nom de toute l'équipe, je vous remercie chaleureusement."],
      ["Für Ihren Ruhestand wünschen wir Ihnen alles Gute.", "We wish you all the best for your retirement.", "Nous vous souhaitons le meilleur pour votre retraite."],
      ["Erheben wir das Glas: Auf Herrn Vogt!", "Let's raise our glasses: to Herr Vogt!", "Levons nos verres : à M. Vogt !"]
    ],
    quiz: [
      { q: "___ Herr Vogt, liebe Kolleginnen und Kollegen!", q_fr: "___ Herr Vogt, liebe Kolleginnen und Kollegen !", o: ["Lieber", "Liebe", "Lieben"], a: 0, ex: "Masculine: lieber.", ex_fr: "Masculin : lieber." },
      { q: "How should an occasion speech begin?", q_fr: "Comment commencer un discours de circonstance ?", o: ["With a short personal story", "With a list of figures", "With an apology for being nervous"], o_fr: ["Par une courte anecdote personnelle", "Par une liste de chiffres", "En s'excusant d'avoir le trac"], a: 0, ex: "Stories stay in the mind.", ex_fr: "Les anecdotes restent en mémoire." },
      { q: "“Let's raise our glasses: to Anna!”", q_fr: "« Levons nos verres : à Anna ! »", o: ["Erheben wir das Glas: Auf Anna!", "Heben wir die Gläser: Für Anna!", "Erheben uns das Glas: Zu Anna!"], a: 0, ex: "Erheben wir das Glas: Auf …!", ex_fr: "Erheben wir das Glas: Auf …!" },
      { q: "Wir wünschen ___ alles Gute.", q_fr: "Wir wünschen ___ alles Gute.", o: ["Ihnen", "Sie", "Ihr"], a: 0, ex: "jemandem (dative) etwas wünschen.", ex_fr: "jemandem (datif) etwas wünschen." },
      { q: "How long should an occasion speech usually be?", q_fr: "Quelle durée pour un discours de circonstance, en général ?", o: ["Two or three minutes", "Twenty minutes", "As long as possible"], o_fr: ["Deux ou trois minutes", "Vingt minutes", "Le plus long possible"], a: 0, ex: "Short and personal.", ex_fr: "Court et personnel." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    136: {
      gap: [["„Wir wollen Frieden. Wir wollen Freiheit.“ ist eine ___.", "Anapher"], ["„Das Leben ist eine Reise“ ist eine ___.", "Metapher"], ["„Ich habe es dir schon tausendmal gesagt“ ist eine ___.", "Hyperbel|Übertreibung"], ["„Krieg und Frieden“ bildet eine ___.", "Antithese"]],
      fix: [["„Stark wie ein Bär“ ist eine Metapher.", "„Stark wie ein Bär“ ist ein Vergleich.", "With wie, it's a comparison, not a metaphor.", "Avec wie, c'est une comparaison, pas une métaphore."], ["„Die Stadt schläft“ ist eine Hyperbel.", "„Die Stadt schläft“ ist eine Personifikation.", "A thing acts like a person: personification.", "Une chose agit comme une personne : personnification."]],
      task: ["Write a short appeal (4 sentences) for a cause you care about, with an anaphora, an antithesis and a rhetorical question.", "Écris un court appel (4 phrases) pour une cause qui te tient à cœur, avec une anaphore, une antithèse et une question rhétorique.", "Wir brauchen saubere Flüsse. Wir brauchen gesunde Wälder. Wir brauchen eine Zukunft für unsere Kinder. Nicht die Natur braucht uns, wir brauchen die Natur: Wie lange wollen wir das noch übersehen?"]
    },
    137: {
      gap: [["___ mich überzeugt, ist ihre Ehrlichkeit.", "Was"], ["Es war Weizsäcker, ___ diese Rede hielt.", "der"], ["___ das behauptet, der irrt.", "Wer"], ["Diesen Satz, ___ vergesse ich nie.", "den"]],
      fix: [["Was mich überzeugt, das ist ihre Ehrlichkeit ist.", "Was mich überzeugt, ist ihre Ehrlichkeit.", "Only one conjugated verb in the main part.", "Un seul verbe conjugué dans la partie principale."], ["Es war meine Schwester, die hat mir geholfen.", "Es war meine Schwester, die mir geholfen hat.", "Relative clause: verb at the end.", "Relative : verbe à la fin."]],
      task: ["Stress the subject of each sentence with a cleft or pseudo-cleft sentence: Ihre Ruhe beeindruckt mich. Der letzte Satz ist mir im Gedächtnis geblieben. Die Jugend muss Verantwortung übernehmen.", "Mets en relief le sujet de chaque phrase avec une phrase clivée ou pseudo-clivée : Ihre Ruhe beeindruckt mich. Der letzte Satz ist mir im Gedächtnis geblieben. Die Jugend muss Verantwortung übernehmen.", "Was mich beeindruckt, ist ihre Ruhe. Es ist der letzte Satz, der mir im Gedächtnis geblieben ist. Es ist die Jugend, die Verantwortung übernehmen muss."]
    },
    138: {
      gap: [["___ Herr Vogt, liebe Kolleginnen und Kollegen!", "Lieber"], ["Wir wünschen ___ für den Ruhestand alles Gute. (Sie)", "Ihnen"], ["Je kürzer die Rede, ___ größer die Wirkung.", "desto|umso"], ["Erheben wir das ___: Auf Herrn Vogt!", "Glas"]],
      fix: [["Liebe Herr Vogt, …", "Lieber Herr Vogt, …", "Masculine: lieber.", "Masculin : lieber."], ["Zuerst nenne ich die Zahlen: 35 Jahre, 412 Projekte, 3 Abteilungen.", "Zuerst möchte ich eine kleine Geschichte erzählen.", "Start with a story, not with statistics.", "Commence par une anecdote, pas par des chiffres."]],
      task: ["Write a short farewell speech (about 100 words) for a colleague who is leaving: greeting, a short story, thanks, good wishes and a toast.", "Écris un court discours d'adieu (environ 100 mots) pour une collègue qui s'en va : salutation, courte anecdote, remerciements, vœux et toast.", "Liebe Frau Lang, liebe Kolleginnen und Kollegen, heute verabschieden wir eine Kollegin, die unser Team zwölf Jahre lang geprägt hat. Was mir als Erstes einfällt, ist ihr erster Arbeitstag: Sie kam mit einem Kuchen und einem Plan für das ganze Jahr. Es sind nicht nur ihre Ideen, die uns fehlen werden, sondern vor allem ihre Ruhe in schwierigen Momenten. Liebe Frau Lang, im Namen des ganzen Teams danke ich Ihnen herzlich. Für Ihre neue Aufgabe in Hamburg wünschen wir Ihnen alles Gute. Erheben wir das Glas: Auf Frau Lang!"]
    }
  });

  W.ROLEPLAYS.push(
  { id: "redeanalyse", lesson: 136, level: "C2", icon: "sparkles", partner: "Herr Krämer", role: "your seminar tutor", role_fr: "ton chargé de séminaire",
    title: "Analysing a speech", title_fr: "Analyser un discours",
    setting: "In a rhetoric seminar, Herr Krämer reads you short passages from speeches and asks you to analyse them.", setting_fr: "Dans un séminaire de rhétorique, Herr Krämer te lit de courts extraits de discours et te demande de les analyser.",
    turns: [
      { p: "Hören Sie: „Wir wollen Frieden. Wir wollen Freiheit. Wir wollen Gerechtigkeit.“ Welches Stilmittel ist das?", en: "Listen: “We want peace. We want freedom. We want justice.” Which device is that?", fr: "Écoutez : « Nous voulons la paix. Nous voulons la liberté. Nous voulons la justice. » Quelle figure est-ce ?" },
      { y: ["Das ist eine Anapher: Jeder Satz beginnt mit denselben Wörtern.", "Das ist eine Anapher: Jeder Satz beginnt mit dieselben Wörtern.", "Das ist eine Anapher: Jeder Satz beginnt mit denselben Wörter."], en: "That's an anaphora: each sentence begins with the same words.", fr: "C'est une anaphore : chaque phrase commence par les mêmes mots.", why: "mit + dative plural: denselben Wörtern.", why_fr: "mit + datif pluriel : denselben Wörtern." },
      { p: "Und welche Wirkung hat sie?", en: "And what effect does it have?", fr: "Et quel effet a-t-elle ?" },
      { y: ["Durch die Wiederholung prägen sich die Forderungen besonders gut ein.", "Durch der Wiederholung prägen sich die Forderungen besonders gut ein.", "Durch die Wiederholung prägen sich die Forderungen besonders gut an."], en: "Through the repetition, the demands stick in the mind particularly well.", fr: "Grâce à la répétition, les revendications se gravent particulièrement bien dans les esprits.", why: "durch + accusative; sich einprägen.", why_fr: "durch + accusatif ; sich einprägen." },
      { p: "Gut. Und hier: „Wir sind nicht schuld an der Vergangenheit, aber verantwortlich für die Zukunft.“", en: "Good. And here: “We are not to blame for the past, but responsible for the future.”", fr: "Bien. Et ici : « Nous ne sommes pas coupables du passé, mais responsables de l'avenir. »" },
      { y: ["Das ist eine Antithese: Vergangenheit und Zukunft werden einander gegenübergestellt.", "Das ist eine Antithese: Vergangenheit und Zukunft werden einander gegenübergestellen.", "Das ist eine Antithese: Vergangenheit und Zukunft wird einander gegenübergestellt."], en: "That's an antithesis: past and future are set against each other.", fr: "C'est une antithèse : le passé et l'avenir sont mis en opposition.", why: "Passive: werden (plural) + past participle.", why_fr: "Passif : werden (pluriel) + participe passé." },
      { p: "Sehr gut. Und was halten Sie von dem Satz: „Die Stadt weint um ihre Toten“?", en: "Very good. And what do you make of the sentence: “The city weeps for its dead”?", fr: "Très bien. Et que pensez-vous de la phrase : « La ville pleure ses morts » ?" },
      { y: ["Die Stadt wird personifiziert; das wirkt sehr eindringlich.", "Die Stadt wird personifizieren; das wirkt sehr eindringlich.", "Die Stadt wird personifiziert; das wirkt sehr eindringliche."], en: "The city is personified; that's very compelling.", fr: "La ville est personnifiée ; c'est très saisissant.", why: "Passive participle; a predicative adjective takes no ending.", why_fr: "Participe passif ; l'adjectif attribut ne prend pas de terminaison." },
      { p: "Zum Schluss: Ist eine rhetorische Frage nicht manipulativ?", en: "Finally: isn't a rhetorical question manipulative?", fr: "Pour finir : une question rhétorique n'est-elle pas manipulatrice ?" },
      { y: ["Nicht unbedingt, aber sie lenkt die Zuhörer in eine bestimmte Richtung.", "Nicht unbedingt, aber sie lenkt die Zuhörer in einer bestimmten Richtung.", "Nicht unbedingt, aber sie lenkt den Zuhörern in eine bestimmte Richtung."], en: "Not necessarily, but it steers the audience in a particular direction.", fr: "Pas forcément, mais elle oriente l'auditoire dans une direction précise.", why: "in + accusative for a direction; lenken + accusative.", why_fr: "in + accusatif pour une direction ; lenken + accusatif." }
    ] },
  { id: "abschiedsrede", lesson: 138, level: "C2", icon: "mic", partner: "Monika", role: "a colleague", role_fr: "une collègue",
    title: "A farewell speech", title_fr: "Un discours d'adieu",
    setting: "Your colleague Herr Vogt is retiring. In a few minutes you'll give a short speech; your colleague Monika listens to your rehearsal.", setting_fr: "Ton collègue Herr Vogt part à la retraite. Dans quelques minutes, tu vas faire un court discours ; ta collègue Monika écoute ta répétition.",
    turns: [
      { p: "Du hältst gleich die Rede für Herrn Vogt. Wie fängst du an?", en: "You're giving the speech for Herr Vogt in a minute. How do you start?", fr: "Tu fais le discours pour M. Vogt tout à l'heure. Comment commences-tu ?" },
      { y: ["„Lieber Herr Vogt, liebe Kolleginnen und Kollegen, heute ist ein besonderer Tag.“", "„Liebe Herr Vogt, liebe Kolleginnen und Kollegen, heute ist ein besonderer Tag.“", "„Lieber Herr Vogt, lieben Kolleginnen und Kollegen, heute ist ein besonderer Tag.“"], en: "“Dear Herr Vogt, dear colleagues, today is a special day.”", fr: "« Cher Monsieur Vogt, chères et chers collègues, aujourd'hui est un jour particulier. »", why: "Lieber (masculine), liebe (plural).", why_fr: "Lieber (masculin), liebe (pluriel)." },
      { p: "Gut. Und dann gleich die Zahlen? Wie lange er hier war und so?", en: "Good. And then straight to the figures? How long he's been here and so on?", fr: "Bien. Et ensuite directement les chiffres ? Depuis combien de temps il est là, etc. ?" },
      { y: ["Lieber mit einer kleinen Geschichte: Was mir als Erstes einfällt, ist sein Kaffee um sechs Uhr morgens.", "Lieber mit einer kleinen Geschichte: Was mir als Erstes einfällt, es ist sein Kaffee um sechs Uhr morgens.", "Lieber mit einer kleinen Geschichte: Was mir als Erstes einfällt, ist seinen Kaffee um sechs Uhr morgens."], en: "Better with a little story: the first thing that comes to mind is his coffee at six in the morning.", fr: "Plutôt avec une petite anecdote : la première chose qui me vient à l'esprit, c'est son café à six heures du matin.", why: "Pseudo-cleft: Was …, ist …; nominative sein Kaffee.", why_fr: "Pseudo-clivée : Was …, ist … ; nominatif sein Kaffee." },
      { p: "Schön. Und wie leitest du zum Dank über?", en: "Nice. And how do you lead into the thanks?", fr: "Joli. Et comment amènes-tu les remerciements ?" },
      { y: ["„Es sind nicht nur Ihre Ideen, die wir vermissen werden, sondern vor allem Ihr Humor.“", "„Es sind nicht nur Ihre Ideen, das wir vermissen werden, sondern vor allem Ihr Humor.“", "„Es ist nicht nur Ihre Ideen, die wir vermissen werden, sondern vor allem Ihr Humor.“"], en: "“It's not only your ideas we'll miss, but above all your humour.”", fr: "« Ce ne sont pas seulement vos idées qui vont nous manquer, mais surtout votre humour. »", why: "Cleft sentence: es sind … die; the verb agrees with Ideen.", why_fr: "Phrase clivée : es sind … die ; le verbe s'accorde avec Ideen." },
      { p: "Und der Schluss?", en: "And the ending?", fr: "Et la fin ?" },
      { y: ["„Lieber Herr Vogt, für den Ruhestand wünschen wir Ihnen alles Gute. Auf Sie!“", "„Lieber Herr Vogt, für den Ruhestand wünschen wir Sie alles Gute. Auf Sie!“", "„Lieber Herr Vogt, für den Ruhestand wünschen wir Ihnen allem Guten. Auf Sie!“"], en: "“Dear Herr Vogt, we wish you all the best for your retirement. To you!”", fr: "« Cher Monsieur Vogt, nous vous souhaitons le meilleur pour votre retraite. À vous ! »", why: "jemandem (dative) etwas wünschen; alles Gute.", why_fr: "jemandem (datif) etwas wünschen ; alles Gute." },
      { p: "Und wie lange soll das Ganze dauern?", en: "And how long should the whole thing take?", fr: "Et combien de temps doit durer le tout ?" },
      { y: ["Höchstens drei Minuten. Je kürzer die Rede, desto größer die Wirkung.", "Höchstens drei Minuten. Je kürzer die Rede, desto größere die Wirkung.", "Höchstens drei Minuten. Je kürzer die Rede, umso größer der Wirkung."], en: "Three minutes at most. The shorter the speech, the greater the effect.", fr: "Trois minutes maximum. Plus le discours est court, plus l'effet est fort.", why: "je … desto + comparative, without a verb.", why_fr: "je … desto + comparatif, sans verbe." }
    ] }
  );

  W.READINGS.push({
    id: "weizsaecker", level: "C2", icon: "mic", title: "„Ein Tag der Befreiung“: die Rede vom 8. Mai 1985", genre: "Feature article",
    intro: "Forty years after the end of the war, a federal president found words that changed how many Germans saw that day.",
    intro_fr: "Quarante ans après la fin de la guerre, un président fédéral a trouvé des mots qui ont changé le regard de beaucoup d'Allemands sur ce jour.",
    paragraphs: [
      { de: "Am 8. Mai 1985, vierzig Jahre nach dem Ende des Zweiten Weltkriegs in Europa, hielt Bundespräsident Richard von Weizsäcker im Bundestag in Bonn eine Rede, die bis heute als eine der bedeutendsten der deutschen Nachkriegsgeschichte gilt. Weizsäcker, 1920 geboren, hatte selbst als Soldat am Krieg teilgenommen.", en: "On 8 May 1985, forty years after the end of the Second World War in Europe, Federal President Richard von Weizsäcker gave a speech in the Bundestag in Bonn that is still regarded as one of the most important in Germany's post-war history. Weizsäcker, born in 1920, had himself fought in the war as a soldier.", fr: "Le 8 mai 1985, quarante ans après la fin de la Seconde Guerre mondiale en Europe, le président fédéral Richard von Weizsäcker prononça au Bundestag, à Bonn, un discours qui passe aujourd'hui encore pour l'un des plus importants de l'histoire allemande d'après-guerre. Né en 1920, Weizsäcker avait lui-même fait la guerre comme soldat." },
      { de: "Viele Deutsche hatten den 8. Mai lange vor allem als Tag der Niederlage und des Zusammenbruchs empfunden. Weizsäcker verschwieg das Leid nicht, das das Kriegsende für viele bedeutete: Flucht, Vertreibung, Gefangenschaft. Dann aber sprach er den Satz, der berühmt wurde: „Der 8. Mai war ein Tag der Befreiung.“ Er habe alle von der nationalsozialistischen Gewaltherrschaft befreit.", en: "For a long time, many Germans had felt 8 May above all as a day of defeat and collapse. Weizsäcker did not hide the suffering that the end of the war meant for many: flight, expulsion, captivity. But then he spoke the sentence that became famous: “8 May was a day of liberation.” It had freed everyone from the tyranny of National Socialism.", fr: "Beaucoup d'Allemands avaient longtemps vécu le 8 mai avant tout comme un jour de défaite et d'effondrement. Weizsäcker ne passa pas sous silence la souffrance que la fin de la guerre avait signifiée pour beaucoup : la fuite, l'expulsion, la captivité. Puis il prononça la phrase devenue célèbre : « Le 8 mai a été un jour de libération. » Il avait libéré tout le monde de la tyrannie nationale-socialiste." },
      { de: "Die Wirkung der Rede beruht auch auf ihrer Sprache. Statt die Opfer in einer abstrakten Zahl zusammenzufassen, zählte Weizsäcker sie Gruppe für Gruppe auf, jeweils eingeleitet durch „Wir gedenken…“. Diese lange Anapher verleiht dem Gedenken Würde und Gewicht. Und er fand Sätze von großer Prägnanz, etwa: „Wer aber vor der Vergangenheit die Augen verschließt, wird blind für die Gegenwart.“", en: "The speech's impact also rests on its language. Instead of summing up the victims in an abstract figure, Weizsäcker listed them group by group, each introduced by “We remember…”. This long anaphora gives the remembrance dignity and weight. And he found sentences of great concision, such as: “But whoever closes their eyes to the past becomes blind to the present.”", fr: "L'effet du discours tient aussi à sa langue. Au lieu de résumer les victimes par un chiffre abstrait, Weizsäcker les énuméra groupe par groupe, chaque fois introduites par « Nous rendons hommage… ». Cette longue anaphore donne à l'hommage dignité et poids. Et il trouva des phrases d'une grande concision, comme : « Mais celui qui ferme les yeux sur le passé devient aveugle au présent. »" },
      { de: "Im In- und Ausland fand die Rede große Beachtung und wurde in zahlreiche Sprachen übersetzt. Weizsäcker blieb bis 1994 Bundespräsident; er starb 2015 in Berlin. Sein Satz vom „Tag der Befreiung“ ist heute fester Bestandteil der deutschen Erinnerungskultur, und seine Rede wird bis heute in Schulen gelesen und analysiert.", en: "The speech attracted great attention at home and abroad and was translated into many languages. Weizsäcker remained Federal President until 1994; he died in Berlin in 2015. His sentence about the “day of liberation” is now a firm part of Germany's culture of remembrance, and his speech is still read and analysed in schools.", fr: "Le discours eut un grand retentissement en Allemagne et à l'étranger et fut traduit dans de nombreuses langues. Weizsäcker resta président fédéral jusqu'en 1994 ; il mourut à Berlin en 2015. Sa phrase sur le « jour de la libération » fait aujourd'hui partie intégrante de la culture mémorielle allemande, et son discours est encore lu et analysé dans les écoles." }
    ],
    glossary: { "Weltkriegs": ["World War", "guerre mondiale"], "Bundespräsident": ["Federal President", "président fédéral"], "bedeutendsten": ["most important", "les plus importants"], "Nachkriegsgeschichte": ["post-war history", "histoire d'après-guerre"], "teilgenommen": ["taken part", "participé"], "Niederlage": ["defeat", "défaite"], "Zusammenbruchs": ["collapse", "effondrement"], "empfunden": ["felt, perceived", "ressenti"], "verschwieg": ["concealed, kept quiet about", "passa sous silence"], "Leid": ["suffering", "souffrance"], "Gefangenschaft": ["captivity", "captivité"], "nationalsozialistischen": ["National Socialist", "national-socialiste"], "Gewaltherrschaft": ["tyranny", "tyrannie"], "beruht": ["rests, is based", "repose"], "zusammenzufassen": ["to sum up", "résumer"], "eingeleitet": ["introduced", "introduit"], "Würde": ["dignity", "dignité"], "Prägnanz": ["concision, pithiness", "concision"], "verschließt": ["closes", "ferme"], "Beachtung": ["attention", "attention, retentissement"], "zahlreiche": ["numerous", "nombreuses"], "Bestandteil": ["component, part", "partie intégrante"], "Erinnerungskultur": ["culture of remembrance", "culture mémorielle"] },
    questions: [
      { q: "Wo hielt Weizsäcker seine Rede?", o: ["Im Bundestag in Bonn", "Vor dem Brandenburger Tor", "In einer Schule in Berlin"], a: 0 },
      { q: "Wie hatten viele Deutsche den 8. Mai lange empfunden?", o: ["Als Tag der Niederlage und des Zusammenbruchs", "Als Feiertag", "Als Tag ohne Bedeutung"], a: 0 },
      { q: "Welcher Satz wurde berühmt?", o: ["„Der 8. Mai war ein Tag der Befreiung.“", "„Der Krieg ist vorbei.“", "„Wir sind das Volk.“"], a: 0 },
      { q: "Welches Stilmittel prägt die Aufzählung der Opfer?", o: ["Eine Anapher mit „Wir gedenken…“", "Eine Hyperbel", "Ein Euphemismus"], a: 0 },
      { q: "Was geschieht heute mit der Rede?", o: ["Sie wird in Schulen gelesen und analysiert.", "Sie ist vergessen.", "Sie darf nicht mehr veröffentlicht werden."], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-c2-2", unit: "c2-2", level: "C2", icon: "radio",
    title: "Hinter den Kulissen", title_fr: "Dans les coulisses",
    context: "A radio interview with Frau Engel, who has been writing speeches for politicians for twelve years.", context_fr: "Une interview radio avec Frau Engel, qui écrit depuis douze ans des discours pour des responsables politiques.",
    words: [["ausmachen", "to make up, to constitute", "faire, constituer"], ["die Krankenschwester, -n", "the nurse", "l'infirmière"], ["vertragen", "to tolerate, to stand", "supporter"], ["Wunder wirken", "to work wonders", "faire des merveilles"], ["streichen", "to cut, to delete", "supprimer, rayer"]],
    lines: [["Moderator", "Frau Engel, Sie schreiben seit zwölf Jahren Reden für Politikerinnen und Politiker. Was macht eine gute Rede aus?", "de-DE"], ["Frau Engel", "Eine einzige Kernaussage. Was die Zuhörer am Abend noch wissen sollen, das muss ich vorher in einem Satz sagen können.", "de-DE"], ["Moderator", "Und dann?", "de-DE"], ["Frau Engel", "Dann suche ich ein Bild, eine Geschichte. Zahlen vergisst man, Menschen nicht. Es ist die Geschichte einer Krankenschwester, an die sich die Leute erinnern, nicht die Statistik.", "de-DE"], ["Moderator", "Wie viel Rhetorik verträgt eine Rede?", "de-DE"], ["Frau Engel", "Weniger, als man denkt. Eine Anapher oder ein Trikolon an der richtigen Stelle wirkt Wunder. Drei Metaphern in einem Satz wirken dagegen schwülstig.", "de-DE"], ["Moderator", "Und was ist das Schwierigste?", "de-DE"], ["Frau Engel", "Das Streichen. Jede Rede, die ich schreibe, wird mindestens um ein Drittel kürzer, bevor sie gehalten wird.", "de-DE"]],
    gist: ["Worum geht es im Gespräch?", ["Um die Arbeit einer Redenschreiberin", "Um eine politische Wahl", "Um einen Rhetorikkurs für Kinder"]],
    detail: [["Was braucht eine gute Rede laut Frau Engel zuerst?", ["Eine einzige Kernaussage", "Viele Zahlen", "Einen Witz"]], ["Woran erinnern sich die Leute eher?", ["An Geschichten von Menschen", "An Statistiken", "An lange Zitate"]], ["Wie wirken drei Metaphern in einem Satz?", ["Schwülstig", "Elegant", "Witzig"]], ["Was ist für sie das Schwierigste?", ["Das Streichen", "Das Vortragen", "Die Recherche"]]],
    decode: ["Was die Zuhörer am Abend noch wissen sollen, das muss ich vorher in einem Satz sagen können", "Es ist die Geschichte einer Krankenschwester, an die sich die Leute erinnern"],
    tip: "Frau Engel practises what she preaches: a dislocated sentence (Was …, das muss ich…), a short antithesis (Zahlen vergisst man, Menschen nicht) and a cleft sentence (Es ist die Geschichte …, an die…). Listen for these structures: they show you what the speaker wants to stress.", tip_fr: "Frau Engel applique ce qu'elle prêche : une phrase disloquée (Was …, das muss ich…), une courte antithèse (Zahlen vergisst man, Menschen nicht) et une phrase clivée (Es ist die Geschichte …, an die…). Repère ces structures : elles montrent ce que la personne veut souligner."
  }]);

  W.PROMPTS.push({ id: "de-c2-2", level: "C2", q: "Halte einen Vortrag (etwa drei bis vier Minuten): „Rhetorik – Kunst der Überzeugung oder Kunst der Manipulation?“ Beginne mit einem Beispiel, analysiere es und komm zu einer differenzierten Antwort.", en: "Give a talk (about three to four minutes): “Rhetoric: the art of persuasion or the art of manipulation?” Start with an example, analyse it and reach a nuanced answer.", fr: "Fais un exposé (environ trois à quatre minutes) : « La rhétorique : art de convaincre ou art de manipuler ? » Commence par un exemple, analyse-le et arrive à une réponse nuancée.", time: 240,
    phrases: ["Lassen Sie mich mit einem Satz beginnen, den viele kennen: …", "Was diesen Satz so stark macht, ist…", "Doch dieselben Mittel können auch…", "Entscheidend ist meines Erachtens, ob…", "Letzten Endes…"],
    model: "Mein Thema lautet: Ist Rhetorik eine Kunst der Überzeugung oder der Manipulation? Lassen Sie mich mit einem Satz beginnen, den viele kennen: „Wer aber vor der Vergangenheit die Augen verschließt, wird blind für die Gegenwart.“ Richard von Weizsäcker sagte ihn 1985, und er wirkt bis heute. Was diesen Satz so stark macht, ist sein Bild: Die Blindheit steht für das Verdrängen. Hier dient Rhetorik der Aufklärung. Doch dieselben Mittel können auch täuschen. Eine rhetorische Frage kann zum Nachdenken anregen, aber auch eine Antwort aufzwingen. Eine Übertreibung kann wachrütteln, aber auch Angst schüren. Entscheidend ist meines Erachtens, ob jemand seine Argumente offenlegt und Widerspruch zulässt. Daher brauchen wir zweierlei: Rednerinnen und Redner, die Verantwortung für ihre Worte übernehmen, und ein Publikum, das Stilmittel erkennt. Letzten Endes ist Rhetorik wie ein Messer: Man kann damit Brot schneiden oder jemanden verletzen. Es kommt darauf an, wer es in der Hand hält." });

  W.WRITING_GUIDE["c2-2"] = { genre: "An essay (C2)", genre_fr: "Un essai (C2)",
    plan: [["A provocative lead-in and your thesis.", "Une amorce provocante et ta thèse."], ["Why democracies need good speakers.", "Pourquoi les démocraties ont besoin de bons orateurs."], ["The dangers of rhetoric.", "Les dangers de la rhétorique."], ["Criteria to tell them apart.", "Des critères pour les distinguer."], ["Consequences and a conclusion.", "Des conséquences et une conclusion."]],
    marks: [["Ich bin überzeugt", "the thesis", "la thèse"], ["Was eine Demokratie von anderen Staatsformen unterscheidet, ist", "a pseudo-cleft sentence", "une pseudo-clivée"], ["Es wäre jedoch naiv", "the turn to the dangers", "le passage aux dangers"], ["Wie lässt sich also", "a question leading to criteria", "une question qui mène aux critères"], ["Daraus folgt für mich zweierlei", "the consequences", "les conséquences"], ["Letzten Endes ist es nicht die Rhetorik selbst, die", "a cleft sentence in the conclusion", "une phrase clivée dans la conclusion"]] };

  /* Atelier de langue : champs allemands d'abord, puis anglais et français (voir localize.js). */
  W.LEXIS = W.LEXIS || {};
  W.LEXIS["c2-2"] = {
    colloc: [
      ["Beifall ernten", "to win applause", "recueillir des applaudissements", "Die Rednerin erntete langen Beifall.", "erntete", ["erbte", "ehrte"]],
      ["an das Gewissen appellieren", "to appeal to someone's conscience", "en appeler à la conscience", "Der Präsident appellierte an das Gewissen der Zuhörer.", "appellierte", ["applaudierte", "adressierte"]],
      ["Akzente setzen", "to set priorities, to make a mark", "marquer des priorités", "In ihrer Rede setzte sie klare Akzente.", "setzte", ["stellte", "legte"]],
      ["eine Brücke schlagen", "to build a bridge (between ideas)", "faire le lien", "Der Redner schlug eine Brücke von der Vergangenheit zur Gegenwart.", "schlug", ["machte", "legte"]],
      ["Zuversicht verbreiten", "to spread confidence", "répandre la confiance", "Die Ansprache verbreitete Zuversicht.", "verbreitete", ["verbreiterte", "verbrauchte"]],
      ["eine Wirkung erzielen", "to achieve an effect", "produire un effet", "Mit wenigen Worten erzielte er eine große Wirkung.", "erzielte", ["erzählte", "zielte"]],
      ["das Publikum fesseln", "to captivate the audience", "captiver le public", "Die Rednerin fesselte das Publikum von der ersten Minute an.", "fesselte", ["fasste", "feilte"]],
      ["bewegende Worte finden", "to find moving words", "trouver des mots émouvants", "Für diesen Verlust fand sie bewegende Worte.", "fand", ["traf", "nahm"]],
      ["eine Rede ausarbeiten", "to work out a speech", "élaborer un discours", "Er arbeitete die Rede tagelang aus.", "arbeitete", ["machte", "stellte"]],
      ["Missstände anprangern", "to denounce abuses", "dénoncer des abus", "In ihrer Rede prangerte sie Missstände an.", "prangerte", ["prahlte", "prangte"]]
    ],
    wf: [
      ["Die Rede war ___ und leidenschaftlich. (MITREIẞEN)", "mitreißend"],
      ["Er sprach mit großer ___. (EINDRINGLICH)", "Eindringlichkeit"],
      ["Die ___ der Opfer dauerte mehrere Minuten. (AUFZÄHLEN)", "Aufzählung"],
      ["Ihre ___ rettete die Debatte. (SCHLAGFERTIG)", "Schlagfertigkeit"],
      ["Die Rede ist ein Meisterwerk der ___. (BEREDT)", "Beredsamkeit"],
      ["Der Schluss wirkte etwas ___. (PATHOS)", "pathetisch"],
      ["Seine Worte waren eine ___ an die Jugend. (MAHNEN)", "Mahnung"],
      ["Sie ist eine ___ Rednerin. (ÜBERZEUGEN)", "überzeugende"]
    ],
    kwt: [
      ["Ihre Ehrlichkeit überzeugt mich.", "WAS", "___ ihre Ehrlichkeit.", "Was mich überzeugt, ist"],
      ["Weizsäcker hielt diese Rede.", "WAR", "Es ___ hielt.", "war Weizsäcker, der diese Rede"],
      ["Jeder, der das behauptet, irrt sich.", "WER", "___ irrt sich.", "Wer das behauptet, der"],
      ["Wir brauchen vor allem klare Regeln.", "SIND", "Was wir vor allem brauchen, ___.", "sind klare Regeln"],
      ["Die Rednerin bekam langen Beifall.", "ERNTETE", "Die Rednerin ___.", "erntete langen Beifall"],
      ["Sie bat die Zuhörer eindringlich, vernünftig zu sein.", "APPELLIERTE", "Sie ___ der Zuhörer.", "appellierte eindringlich an die Vernunft"]
    ],
    idioms: [
      ["große Töne spucken", "prahlen, angeben", "to talk big", "fanfaronner", "Vor der Wahl spuckte er große Töne.", "spuckte er große Töne"],
      ["den Mund zu voll nehmen", "mehr versprechen, als man halten kann", "to promise too much", "promettre monts et merveilles", "Mit diesem Versprechen hat sie den Mund zu voll genommen.", "den Mund zu voll genommen"],
      ["heiße Luft", "leere Worte ohne Inhalt", "hot air", "du vent, des paroles en l'air", "Die ganze Rede war nur heiße Luft.", "heiße Luft"],
      ["Tacheles reden", "offen und deutlich sprechen", "to talk straight", "parler franchement", "Jetzt müssen wir Tacheles reden.", "Tacheles reden"],
      ["jedes Wort auf die Goldwaage legen", "jedes Wort sehr genau nehmen", "to weigh every word", "peser chaque mot", "Bei einer Gedenkrede muss man jedes Wort auf die Goldwaage legen.", "jedes Wort auf die Goldwaage legen"],
      ["jemandem nach dem Mund reden", "sagen, was der andere hören will", "to tell someone what they want to hear", "dire aux gens ce qu'ils veulent entendre", "Ein guter Politiker redet den Wählern nicht nur nach dem Mund.", "nach dem Mund"],
      ["sich um Kopf und Kragen reden", "sich durch Reden in große Schwierigkeiten bringen", "to talk oneself into trouble", "se mettre dans le pétrin à force de parler", "Im Interview redete er sich um Kopf und Kragen.", "um Kopf und Kragen"],
      ["den Nerv der Zeit treffen", "genau das ausdrücken, was viele gerade bewegt", "to capture the spirit of the times", "être dans l'air du temps", "Mit ihrer Rede traf sie den Nerv der Zeit.", "den Nerv der Zeit"]
    ]
  };

  W.COURSE.push({ id: "c2-2", level: "C2", icon: "mic", title: "The power of speech", title_fr: "Le pouvoir de la parole",
    intro: "Words can move, persuade and mislead. In this unit, you'll learn to recognise and analyse rhetorical devices (Metapher, Anapher, Antithese), to put ideas in the spotlight with cleft sentences (Was mich überzeugt, ist…), and to give a short speech for an occasion. You'll also read about Richard von Weizsäcker's speech of 8 May 1985, one of the most famous in post-war Germany.",
    intro_fr: "Les mots peuvent émouvoir, convaincre et tromper. Dans cette unité, tu vas apprendre à reconnaître et analyser les figures de style (Metapher, Anapher, Antithese), à mettre une idée en lumière avec les phrases clivées (Was mich überzeugt, ist…), et à faire un court discours de circonstance. Tu liras aussi un texte sur le discours de Richard von Weizsäcker du 8 mai 1985, l'un des plus célèbres de l'Allemagne d'après-guerre.",
    can: ["Recognise, name and analyse rhetorical devices", "Stress ideas with cleft sentences, dislocation and focus particles", "Give a short, personal speech for an occasion", "Talk about speeches and public speaking", "Write an essay on rhetoric and democracy (C2)"],
    can_fr: ["Reconnaître, nommer et analyser les figures de style", "Mettre des idées en relief avec les phrases clivées, la dislocation et les particules de focalisation", "Faire un court discours de circonstance, personnel", "Parler des discours et de la prise de parole en public", "Écrire un essai sur la rhétorique et la démocratie (C2)"],
    lessons: [136, 137, 138], vocab: ["stilmittelDE", "redekunstDE"], reading: "weizsaecker", prompt: "de-c2-2",
    writing: { task: "Write an essay (300-350 words): “Do democracies need good speakers?” Include a lead-in and thesis, why good speakers matter, the dangers of rhetoric, criteria to tell good from dangerous rhetoric, and consequences.", task_fr: "Écris un essai (300 à 350 mots) : « Les démocraties ont-elles besoin de bons orateurs ? » Avec une amorce et une thèse, pourquoi les bons orateurs comptent, les dangers de la rhétorique, des critères pour distinguer la bonne rhétorique de la dangereuse, et des conséquences.", words: "300-350",
      tips: ["Ich bin überzeugt: …", "Was … unterscheidet, ist…", "Es wäre jedoch naiv, … zu übersehen.", "Daraus folgt für mich zweierlei.", "Letzten Endes ist es nicht …, die / der …"],
      checklist: ["I wrote a lead-in and a clear thesis", "I gave an example and analysed it", "I presented the dangers fairly", "I used at least one cleft sentence and one rhetorical device on purpose", "I wrote between 300 and 350 words"],
      checklist_fr: ["J'ai écrit une amorce et une thèse claire", "J'ai donné un exemple et je l'ai analysé", "J'ai présenté honnêtement les dangers", "J'ai employé à dessein au moins une phrase clivée et une figure de style", "J'ai écrit entre 300 et 350 mots"],
      model: "„Gute Politik braucht keine großen Worte“, hört man oft. Doch stimmt das wirklich? Gerade in Krisenzeiten zeigt sich, dass Worte Menschen bewegen, trösten und mobilisieren können. Ich bin überzeugt: Demokratien brauchen gute Rednerinnen und Redner, allerdings solche, die ihre Kunst verantwortungsvoll einsetzen.\n\nWas eine Demokratie von anderen Staatsformen unterscheidet, ist der öffentliche Streit um die besten Lösungen. Wer überzeugen will, muss Argumente verständlich und anschaulich vortragen. Ein treffendes Bild oder eine klare Gegenüberstellung kann komplexe Zusammenhänge oft besser vermitteln als jede Statistik. Ohne die Fähigkeit, andere zu überzeugen, bliebe auch die beste Idee wirkungslos. Zudem stiften große Reden Gemeinschaft: Richard von Weizsäckers Rede vom 8. Mai 1985 hat das Selbstverständnis vieler Deutscher nachhaltig geprägt.\n\nEs wäre jedoch naiv, die Schattenseiten zu übersehen. Dieselben Mittel, die aufklären, können auch verführen. Rhetorische Fragen, Übertreibungen und Feindbilder lassen sich nutzen, um Gefühle zu schüren und Argumente zu ersetzen. Nicht zufällig setzen Populisten gern auf einfache Gegensätze zwischen „uns“ und „denen da oben“. Die Geschichte des 20. Jahrhunderts zeigt, wohin eine solche Verführung führen kann.\n\nWie lässt sich also die gute von der gefährlichen Rhetorik unterscheiden? Meines Erachtens an zwei Merkmalen: Eine gute Rede legt ihre Argumente offen, und sie respektiert die Zuhörer als mündige Menschen, die selbst urteilen können. Wer dagegen Druck aufbaut, Gegner herabsetzt und keinen Zweifel zulässt, missbraucht die Sprache. Gute Rhetorik lädt zum Mitdenken ein, schlechte will das Denken ersetzen.\n\nDaraus folgt für mich zweierlei. Erstens sollten Schulen nicht nur das Reden lehren, sondern auch das kritische Zuhören: Wer Stilmittel erkennt, fällt weniger leicht auf sie herein. Zweitens sollten Politikerinnen und Politiker den Mut haben, auch Unbequemes klar auszusprechen, statt sich hinter Floskeln zu verstecken.\n\nLetzten Endes ist es nicht die Rhetorik selbst, die gut oder schlecht ist, sondern das Ziel, dem sie dient. Eine Demokratie ohne gute Reden wäre ärmer; eine Demokratie ohne kritische Zuhörer wäre in Gefahr. Es liegt also an uns allen, beides zu pflegen." } });
})();
