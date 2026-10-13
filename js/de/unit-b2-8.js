/* Cours d'allemand, unité B2-8 « Art and culture / Art et culture » : les comparaisons irréelles (als ob, als wenn,
   als + Konjunktiv II), les particules modales (ja, doch, mal, halt, eben, denn, wohl, schon), décrire et interpréter
   une œuvre (exemple réel : Caspar David Friedrich, Der Wanderer über dem Nebelmeer, vers 1818, Hamburger Kunsthalle :
   un homme vu de dos, en manteau sombre, debout sur un rocher au-dessus d'une mer de brouillard). Personnages
   fictifs, prénoms allemands ; la pièce de théâtre de l'écoute est inventée.
   Faits vérifiables seulement : le Bauhaus, fondé en 1919 à Weimar par Walter Gropius ; installé à Dessau en 1925
   (bâtiment inauguré en 1926) ; à Berlin en 1932 sous la direction de Ludwig Mies van der Rohe ; fermé en 1933 sous
   la pression des nationaux-socialistes ; enseignants dont Paul Klee et Wassily Kandinsky ; sites de Weimar et de
   Dessau inscrits au patrimoine mondial de l'UNESCO en 1996 ; centenaire en 2019. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "kunstB2DE", icon: "palette", title: "Looking at art", title_fr: "Regarder une œuvre", level: "B2", words: [
    ["das Kunstwerk, -e", "the work of art", "l'œuvre d'art", "Das Kunstwerk hängt im zweiten Stock."],
    ["die Skulptur, -en", "the sculpture", "la sculpture", "Vor dem Museum steht eine riesige Skulptur aus Stahl."],
    ["der Pinsel, -", "the paintbrush", "le pinceau", "Sie malt mit einem sehr feinen Pinsel."],
    ["die Leinwand, ¨-e", "the canvas; the screen", "la toile ; l'écran", "Das Bild ist mit Öl auf Leinwand gemalt."],
    ["abstrakt", "abstract", "abstrait", "Abstrakte Kunst zeigt keine erkennbaren Gegenstände."],
    ["realistisch", "realistic", "réaliste", "Die Porträts sind fast fotografisch realistisch."],
    ["darstellen", "to depict, to represent", "représenter", "Was soll dieses Bild eigentlich darstellen?"],
    ["die Darstellung, -en", "the depiction, the representation", "la représentation", "Die Darstellung der Natur ist sehr genau."],
    ["der Vordergrund", "the foreground", "le premier plan", "Im Vordergrund sieht man einen Mann."],
    ["der Hintergrund", "the background", "l'arrière-plan", "Im Hintergrund erkennt man Berge."],
    ["die Epoche, -n", "the period, the era", "l'époque", "Das Gemälde stammt aus der Epoche der Romantik."],
    ["zeitgenössisch", "contemporary", "contemporain", "Das Museum zeigt vor allem zeitgenössische Kunst."],
    ["die Kunstrichtung, -en", "the art movement", "le courant artistique", "Der Expressionismus ist eine Kunstrichtung des frühen 20. Jahrhunderts."],
    ["wirken (auf + Akk.)", "to come across, to have an effect (on)", "produire un effet (sur), paraître", "Das Bild wirkt auf mich sehr ruhig."],
    ["der Eindruck, ¨-e", "the impression", "l'impression", "Mein erster Eindruck war eher negativ."],
    ["ausdrucksstark", "expressive", "expressif", "Die Gesichter auf dem Bild sind sehr ausdrucksstark."]
  ] },
  { id: "kulturlebenDE", icon: "drama", title: "Cultural life", title_fr: "La vie culturelle", level: "B2", words: [
    ["die Aufführung, -en", "the performance", "la représentation", "Die Aufführung dauert drei Stunden mit Pause."],
    ["die Inszenierung, -en", "the production (of a play)", "la mise en scène", "Die neue Inszenierung ist sehr modern."],
    ["der Beifall", "applause", "les applaudissements", "Am Ende gab es langen Beifall."],
    ["die Rezension, -en", "the review", "la critique (d'une œuvre)", "In der Zeitung stand eine begeisterte Rezension."],
    ["das Bühnenbild, -er", "the stage set", "le décor", "Das Bühnenbild bestand nur aus einem Stuhl."],
    ["die Hauptrolle, -n", "the leading role", "le rôle principal", "Wer spielt die Hauptrolle?"],
    ["der Regisseur, -e (die Regisseurin)", "the director", "le metteur en scène, la metteuse en scène", "Die Regisseurin hat das Stück stark gekürzt."],
    ["der Dirigent, -en (die Dirigentin)", "the conductor", "le chef d'orchestre, la cheffe d'orchestre", "Der Dirigent verbeugte sich vor dem Publikum."],
    ["der Schriftsteller, - (die Schriftstellerin)", "the writer", "l'écrivain, l'écrivaine", "Die Schriftstellerin liest aus ihrem neuen Roman."],
    ["das Kulturangebot, -e", "the range of cultural activities", "l'offre culturelle", "Das Kulturangebot in Berlin ist riesig."],
    ["subventionieren", "to subsidise", "subventionner", "Viele Theater werden vom Staat subventioniert."],
    ["das Denkmal, ¨-er", "the monument", "le monument", "Das Denkmal erinnert an die Opfer des Krieges."],
    ["das Kulturerbe", "cultural heritage", "le patrimoine culturel", "Die Altstadt gehört zum Kulturerbe der Region."],
    ["entwerfen", "to design", "concevoir, dessiner", "Sie hat das Plakat selbst entworfen."],
    ["schlicht", "plain, simple", "sobre, simple", "Die Möbel sind schlicht und praktisch."],
    ["funktional", "functional", "fonctionnel", "Das Gebäude ist vor allem funktional."]
  ] });

  W.LESSONS.push(
  {
    id: 94, level: "B2", icon: "drama",
    title: "Als ob er alles wüsste: unreal comparisons", title_fr: "Als ob er alles wüsste : les comparaisons irréelles",
    subtitle: "Say what something looks or sounds like, even when it isn't true.", subtitle_fr: "Dire à quoi une chose ressemble, même quand ce n'est pas vrai.",
    body: `
<h2>als ob / als wenn + Konjunktiv II</h2>
<p>To compare with something that isn't real, German uses <s-de>als ob</s-de> (or <s-de>als wenn</s-de>) + Konjunktiv II, with the verb at the end: <s-de>Er tut, als ob er alles wüsste.</s-de> (He acts as if he knew everything.)</p>
<h2>als + verb straight after</h2>
<p>A shorter, very common form: <s-de>als</s-de> followed directly by the verb: <s-de>Er tut, als wüsste er alles.</s-de> · <s-de>Es sieht aus, als würde es gleich regnen.</s-de></p>
<h2>Now or before?</h2>
<table>
<tr><th>Time</th><th>Example</th></tr>
<tr><td>same time</td><td><s-de>Sie lacht, als ob sie glücklich wäre.</s-de></td></tr>
<tr><td>earlier</td><td><s-de>Er reagierte, als hätte er nichts gehört.</s-de></td></tr>
</table>
<h2>Typical verbs</h2>
<p><s-de>so tun, aussehen, klingen, wirken, sich anfühlen, sich benehmen</s-de>: <s-de>Das Bild wirkt, als wäre es gestern gemalt worden.</s-de></p>
<div class="tip">In written and literary German you will also find the Konjunktiv I: <s-de>als ob er krank sei</s-de>. Both are correct. When you speak, the Konjunktiv II (or <s-de>würde</s-de>) is the natural choice.</div>
`,
    body_fr: `
<h2>als ob / als wenn + Konjunktiv II</h2>
<p>Pour comparer avec quelque chose d'irréel, l'allemand emploie <s-de>als ob</s-de> (ou <s-de>als wenn</s-de>) + Konjunktiv II, avec le verbe à la fin : <s-de>Er tut, als ob er alles wüsste.</s-de> (Il fait comme s'il savait tout.) Le français emploie l'imparfait après « comme si » ; l'allemand, le Konjunktiv II.</p>
<h2>als + le verbe juste après</h2>
<p>Une forme plus courte et très courante : <s-de>als</s-de> suivi directement du verbe : <s-de>Er tut, als wüsste er alles.</s-de> · <s-de>Es sieht aus, als würde es gleich regnen.</s-de></p>
<h2>Maintenant ou avant ?</h2>
<table>
<tr><th>Moment</th><th>Exemple</th></tr>
<tr><td>en même temps</td><td><s-de>Sie lacht, als ob sie glücklich wäre.</s-de></td></tr>
<tr><td>avant</td><td><s-de>Er reagierte, als hätte er nichts gehört.</s-de> (comme s'il n'avait rien entendu)</td></tr>
</table>
<h2>Les verbes typiques</h2>
<p><s-de>so tun, aussehen, klingen, wirken, sich anfühlen, sich benehmen</s-de> : <s-de>Das Bild wirkt, als wäre es gestern gemalt worden.</s-de></p>
<div class="tip">À l'écrit et en littérature, tu trouveras aussi le Konjunktiv I : <s-de>als ob er krank sei</s-de>. Les deux sont corrects. À l'oral, le Konjunktiv II (ou <s-de>würde</s-de>) est le choix naturel.</div>
`,
    examples: [
      ["Er tut, als ob er alles wüsste.", "He acts as if he knew everything.", "Il fait comme s'il savait tout."],
      ["Er tut, als wüsste er alles.", "He acts as if he knew everything.", "Il fait comme s'il savait tout."],
      ["Es sieht aus, als würde es gleich regnen.", "It looks as if it's going to rain any minute.", "On dirait qu'il va pleuvoir d'un moment à l'autre."],
      ["Sie reagierte, als hätte sie nichts gehört.", "She reacted as if she hadn't heard anything.", "Elle a réagi comme si elle n'avait rien entendu."],
      ["Das Bild wirkt, als wäre es gestern gemalt worden.", "The painting looks as if it had been painted yesterday.", "Le tableau a l'air d'avoir été peint hier."],
      ["Die Musik klingt, als käme sie aus einer anderen Welt.", "The music sounds as if it came from another world.", "La musique semble venir d'un autre monde."],
      ["Mir war, als ob ich das Stück schon einmal gesehen hätte.", "I felt as if I had seen the play before.", "J'avais l'impression d'avoir déjà vu la pièce."]
    ],
    quiz: [
      { q: "Er tut, als ob er krank ___.", q_fr: "Er tut, als ob er krank ___.", o: ["wäre", "ist", "war"], a: 0, ex: "als ob + Konjunktiv II, verb at the end.", ex_fr: "als ob + Konjunktiv II, verbe à la fin." },
      { q: "Er tut, als ___ er alles.", q_fr: "Er tut, als ___ er alles.", o: ["wüsste", "weiß", "ob wüsste"], a: 0, ex: "als + verb directly after it.", ex_fr: "als + verbe juste après." },
      { q: "“She reacted as if she hadn't heard anything.”", q_fr: "« Elle a réagi comme si elle n'avait rien entendu. »", o: ["Sie reagierte, als hätte sie nichts gehört.", "Sie reagierte, als würde sie nichts gehört.", "Sie reagierte, als sie nichts gehört hätte."], a: 0, ex: "Earlier: als hätte … gehört.", ex_fr: "Antériorité : als hätte … gehört." },
      { q: "Es sieht aus, als ___ es gleich regnen.", q_fr: "Es sieht aus, als ___ es gleich regnen.", o: ["würde", "wird", "wäre"], a: 0, ex: "als + würde + infinitive.", ex_fr: "als + würde + infinitif." },
      { q: "Which verb often introduces als ob?", q_fr: "Quel verbe introduit souvent als ob ?", o: ["so tun", "verstehen", "kaufen"], a: 0, ex: "so tun, als ob… = to act as if…", ex_fr: "so tun, als ob… = faire comme si…" }
    ]
  },
  {
    id: 95, level: "B2", icon: "message-circle",
    title: "Ja, doch, halt, mal: modal particles", title_fr: "Ja, doch, halt, mal : les particules modales",
    subtitle: "The small words that give German its tone: surprise, reassurance, impatience.", subtitle_fr: "Les petits mots qui donnent le ton en allemand : surprise, réconfort, impatience.",
    body: `
<h2>Small words, big effect</h2>
<p>Modal particles don't change the facts; they show the speaker's attitude. They're unstressed and sit in the middle of the sentence. Without them, spoken German often sounds stiff.</p>
<table>
<tr><th>Particle</th><th>Effect and example</th></tr>
<tr><td><s-de>ja</s-de></td><td>surprise, or something we both know: <s-de>Das ist ja riesig!</s-de> · <s-de>Du weißt ja, wie er ist.</s-de></td></tr>
<tr><td><s-de>doch</s-de></td><td>reminder, mild reproach, urging: <s-de>Das habe ich doch gesagt!</s-de> · <s-de>Komm doch mit!</s-de></td></tr>
<tr><td><s-de>mal</s-de></td><td>softens a request: <s-de>Schau mal!</s-de> · <s-de>Kannst du mal kurz helfen?</s-de></td></tr>
<tr><td><s-de>halt / eben</s-de></td><td>it can't be changed: <s-de>Das ist halt so.</s-de> · <s-de>Dann nehmen wir eben den Bus.</s-de></td></tr>
<tr><td><s-de>denn</s-de></td><td>interest in a question: <s-de>Was machst du denn hier?</s-de></td></tr>
<tr><td><s-de>wohl</s-de></td><td>assumption: <s-de>Er ist wohl krank.</s-de></td></tr>
<tr><td><s-de>schon</s-de></td><td>reassurance: <s-de>Das klappt schon.</s-de></td></tr>
<tr><td><s-de>eigentlich</s-de></td><td>changing the subject, a casual question: <s-de>Wie heißt du eigentlich?</s-de></td></tr>
</table>
<div class="tip">Particles are typical of spoken German and informal writing (messages, emails to friends); in formal texts, use them sparingly. <s-de>halt</s-de> is more southern and colloquial, <s-de>eben</s-de> more northern and neutral.</div>
`,
    body_fr: `
<h2>De petits mots, un grand effet</h2>
<p>Les particules modales ne changent pas les faits ; elles montrent l'attitude de la personne qui parle. Elles ne sont pas accentuées et se placent au milieu de la phrase. Sans elles, l'allemand parlé paraît souvent raide. Le français a des équivalents : « donc », « quand même », « bon », « hein »…</p>
<table>
<tr><th>Particule</th><th>Effet et exemple</th></tr>
<tr><td><s-de>ja</s-de></td><td>surprise, ou chose connue de tous les deux : <s-de>Das ist ja riesig!</s-de> · <s-de>Du weißt ja, wie er ist.</s-de></td></tr>
<tr><td><s-de>doch</s-de></td><td>rappel, léger reproche, invitation pressante : <s-de>Das habe ich doch gesagt!</s-de> · <s-de>Komm doch mit!</s-de></td></tr>
<tr><td><s-de>mal</s-de></td><td>adoucit une demande : <s-de>Schau mal!</s-de> · <s-de>Kannst du mal kurz helfen?</s-de></td></tr>
<tr><td><s-de>halt / eben</s-de></td><td>on n'y peut rien : <s-de>Das ist halt so.</s-de> · <s-de>Dann nehmen wir eben den Bus.</s-de></td></tr>
<tr><td><s-de>denn</s-de></td><td>intérêt dans une question : <s-de>Was machst du denn hier?</s-de></td></tr>
<tr><td><s-de>wohl</s-de></td><td>supposition : <s-de>Er ist wohl krank.</s-de></td></tr>
<tr><td><s-de>schon</s-de></td><td>réconfort : <s-de>Das klappt schon.</s-de></td></tr>
<tr><td><s-de>eigentlich</s-de></td><td>changement de sujet, question en passant : <s-de>Wie heißt du eigentlich?</s-de></td></tr>
</table>
<div class="tip">Les particules sont typiques de l'oral et de l'écrit informel (messages, e-mails entre amis) ; dans un texte formel, emploie-les avec modération. <s-de>halt</s-de> est plutôt du Sud et familier, <s-de>eben</s-de> plutôt du Nord et neutre.</div>
`,
    examples: [
      ["Das ist ja riesig!", "Wow, that's huge!", "Mais c'est immense !"],
      ["Das habe ich dir doch gestern gesagt!", "But I told you that yesterday!", "Je te l'ai pourtant dit hier !"],
      ["Komm doch heute Abend mit ins Theater!", "Why don't you come to the theatre with us tonight?", "Viens donc au théâtre avec nous ce soir !"],
      ["Kannst du mal kurz das Fenster aufmachen?", "Could you just open the window for a sec?", "Tu peux ouvrir la fenêtre deux secondes ?"],
      ["Die Karten sind ausverkauft. Das ist halt so.", "The tickets are sold out. That's just how it is.", "Les billets sont épuisés. C'est comme ça."],
      ["Was machst du denn hier?", "What are you doing here, then?", "Mais qu'est-ce que tu fais ici ?"],
      ["Keine Sorge, das klappt schon.", "Don't worry, it'll work out.", "Ne t'inquiète pas, ça va marcher."]
    ],
    quiz: [
      { q: "Surprise: “Das ist ___ toll!”", q_fr: "Surprise : « Das ist ___ toll! »", o: ["ja", "denn", "mal"], a: 0, ex: "ja = surprise.", ex_fr: "ja = surprise." },
      { q: "A friendly invitation: “Komm ___ mit!”", q_fr: "Une invitation amicale : « Komm ___ mit! »", o: ["doch", "denn", "wohl"], a: 0, ex: "doch urges gently.", ex_fr: "doch invite avec insistance." },
      { q: "“It can't be changed”: “Das ist ___ so.”", q_fr: "« On n'y peut rien » : « Das ist ___ so. »", o: ["halt", "ja", "mal"], a: 0, ex: "halt / eben = resignation.", ex_fr: "halt / eben = résignation." },
      { q: "In a question, showing interest: “Wo wohnst du ___?”", q_fr: "Dans une question, pour marquer l'intérêt : « Wo wohnst du ___? »", o: ["denn", "doch", "halt"], a: 0, ex: "denn in questions.", ex_fr: "denn dans les questions." },
      { q: "Reassurance: “Das klappt ___.”", q_fr: "Réconfort : « Das klappt ___. »", o: ["schon", "mal", "denn"], a: 0, ex: "schon = it'll be fine.", ex_fr: "schon = ça va aller." }
    ]
  },
  {
    id: 96, level: "B2", kind: "functional", icon: "frame",
    title: "Everyday German: describing and interpreting a picture", title_fr: "L'allemand de tous les jours : décrire et interpréter une image",
    subtitle: "From what you see to what it means, and what you think of it.", subtitle_fr: "De ce que tu vois à ce que cela signifie, et à ce que tu en penses.",
    body: `
<h2>Four steps</h2>
<table>
<tr><th>Step</th><th>German</th></tr>
<tr><td>introduce</td><td><s-de>Das Bild heißt…, es wurde um … von … gemalt.</s-de></td></tr>
<tr><td>describe</td><td><s-de>Im Vordergrund / Im Hintergrund / In der Mitte sieht man…</s-de> · <s-de>Links oben / Rechts unten befindet sich…</s-de></td></tr>
<tr><td>effect</td><td><s-de>Das Bild wirkt ruhig / bedrohlich.</s-de> · <s-de>Die Farben erzeugen eine … Stimmung.</s-de></td></tr>
<tr><td>interpret and react</td><td><s-de>Vermutlich will der Maler zeigen, dass…</s-de> · <s-de>Mich spricht besonders … an.</s-de></td></tr>
</table>
<h2>A famous example</h2>
<p>Caspar David Friedrich painted <s-de>Der Wanderer über dem Nebelmeer</s-de> around 1818; today it hangs in the Hamburger Kunsthalle. <s-de>In der Mitte steht ein Mann in einem dunklen Mantel auf einem Felsen. Wir sehen ihn nur von hinten. Vor ihm liegt ein Meer aus Nebel, aus dem einzelne Bergspitzen ragen.</s-de> The painting is often read as an image of the individual facing the immensity of nature.</p>
<div class="tip">Keep description and interpretation apart: first what anyone can see (<s-de>man sieht…</s-de>), then your reading of it (<s-de>vermutlich, für mich, es scheint, als ob…</s-de>). The als-ob clauses of lesson 94 are perfect here: <s-de>Es wirkt, als würde der Mann über sein Leben nachdenken.</s-de></div>
`,
    body_fr: `
<h2>Quatre étapes</h2>
<table>
<tr><th>Étape</th><th>En allemand</th></tr>
<tr><td>présenter</td><td><s-de>Das Bild heißt…, es wurde um … von … gemalt.</s-de></td></tr>
<tr><td>décrire</td><td><s-de>Im Vordergrund / Im Hintergrund / In der Mitte sieht man…</s-de> · <s-de>Links oben / Rechts unten befindet sich…</s-de></td></tr>
<tr><td>l'effet</td><td><s-de>Das Bild wirkt ruhig / bedrohlich.</s-de> · <s-de>Die Farben erzeugen eine … Stimmung.</s-de></td></tr>
<tr><td>interpréter et réagir</td><td><s-de>Vermutlich will der Maler zeigen, dass…</s-de> · <s-de>Mich spricht besonders … an.</s-de></td></tr>
</table>
<h2>Un exemple célèbre</h2>
<p>Caspar David Friedrich a peint <s-de>Der Wanderer über dem Nebelmeer</s-de> (Le Voyageur contemplant une mer de nuages) vers 1818 ; le tableau se trouve aujourd'hui à la Hamburger Kunsthalle. <s-de>In der Mitte steht ein Mann in einem dunklen Mantel auf einem Felsen. Wir sehen ihn nur von hinten. Vor ihm liegt ein Meer aus Nebel, aus dem einzelne Bergspitzen ragen.</s-de> On y lit souvent l'image de l'individu face à l'immensité de la nature.</p>
<div class="tip">Sépare la description de l'interprétation : d'abord ce que tout le monde peut voir (<s-de>man sieht…</s-de>), puis ta lecture (<s-de>vermutlich, für mich, es scheint, als ob…</s-de>). Les comparaisons en als ob de la leçon 94 sont parfaites ici : <s-de>Es wirkt, als würde der Mann über sein Leben nachdenken.</s-de></div>
`,
    examples: [
      ["Das Bild wurde um 1818 von Caspar David Friedrich gemalt.", "The painting was painted around 1818 by Caspar David Friedrich.", "Le tableau a été peint vers 1818 par Caspar David Friedrich."],
      ["In der Mitte steht ein Mann auf einem Felsen.", "In the middle, a man is standing on a rock.", "Au centre, un homme se tient debout sur un rocher."],
      ["Wir sehen ihn nur von hinten.", "We only see him from behind.", "Nous ne le voyons que de dos."],
      ["Im Hintergrund ragen einzelne Bergspitzen aus dem Nebel.", "In the background, a few mountain peaks rise out of the fog.", "À l'arrière-plan, quelques sommets émergent du brouillard."],
      ["Die kühlen Farben erzeugen eine geheimnisvolle Stimmung.", "The cool colours create a mysterious atmosphere.", "Les couleurs froides créent une atmosphère mystérieuse."],
      ["Es wirkt, als würde der Mann über sein Leben nachdenken.", "It looks as if the man were thinking about his life.", "On dirait que l'homme réfléchit à sa vie."],
      ["Mich spricht besonders die Weite der Landschaft an.", "What appeals to me most is the vastness of the landscape.", "Ce qui me touche le plus, c'est l'immensité du paysage."]
    ],
    quiz: [
      { q: "“In the foreground you can see…”", q_fr: "« Au premier plan, on voit… »", o: ["Im Vordergrund sieht man…", "Im Vorgrund sieht man…", "In den Vordergrund sieht man…"], a: 0, ex: "im Vordergrund (dative: where).", ex_fr: "im Vordergrund (datif : où)." },
      { q: "“The picture comes across as calm.”", q_fr: "« Le tableau paraît calme. »", o: ["Das Bild wirkt ruhig.", "Das Bild wirkt ruhige.", "Das Bild arbeitet ruhig."], a: 0, ex: "wirken = to come across, to seem.", ex_fr: "wirken = paraître, produire un effet." },
      { q: "Which phrase introduces an interpretation?", q_fr: "Quelle formule introduit une interprétation ?", o: ["Vermutlich will der Maler zeigen, dass…", "Links oben befindet sich…", "Das Bild heißt…"], a: 0, ex: "vermutlich = presumably.", ex_fr: "vermutlich = sans doute." },
      { q: "“What appeals to me most is…”", q_fr: "« Ce qui me touche le plus, c'est… »", o: ["Mich spricht besonders … an.", "Ich spreche besonders … an.", "Mir spricht besonders … an."], a: 0, ex: "jemanden ansprechen (accusative): mich.", ex_fr: "jemanden ansprechen (accusatif) : mich." },
      { q: "Where can you see Friedrich's “Wanderer über dem Nebelmeer” today?", q_fr: "Où peut-on voir aujourd'hui « Der Wanderer über dem Nebelmeer » de Friedrich ?", o: ["In the Hamburger Kunsthalle", "In the Louvre", "In the Bauhaus in Dessau"], o_fr: ["À la Hamburger Kunsthalle", "Au Louvre", "Au Bauhaus de Dessau"], a: 0, ex: "Hamburger Kunsthalle.", ex_fr: "Hamburger Kunsthalle." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    94: {
      gap: [["Er tut, als ob er alles ___. (wissen)", "wüsste"], ["Er tut, als ___ er alles. (wissen)", "wüsste"], ["Sie reagierte, als ___ sie nichts gehört.", "hätte"], ["Es sieht aus, als ___ es gleich regnen.", "würde"]],
      fix: [["Er tut, als ob er ist der Chef.", "Er tut, als ob er der Chef wäre.", "als ob: Konjunktiv II, verb at the end.", "als ob : Konjunktiv II, verbe à la fin."], ["Sie tut, als sie nichts weiß.", "Sie tut, als wüsste sie nichts.", "als + Konjunktiv II directly after als.", "als + Konjunktiv II juste après als."]],
      task: ["Describe four things at a strange party with als ob or als + Konjunktiv II: a guest, the music, the host, the food.", "Décris quatre choses lors d'une fête étrange avec als ob ou als + Konjunktiv II : un invité, la musique, l'hôte, la nourriture.", "Ein Gast tut, als ob er ein Filmstar wäre. Die Musik klingt, als käme sie aus den Achtzigern. Der Gastgeber benimmt sich, als hätte er uns noch nie gesehen. Und das Essen sieht aus, als wäre es schon drei Tage alt."]
    },
    95: {
      gap: [["Das ist ___ riesig!", "ja", "surprise", "surprise"], ["Komm ___ mit ins Theater!", "doch|mal", "a friendly invitation", "une invitation amicale"], ["Die Karten sind ausverkauft. Das ist ___ so.", "halt|eben", "it can't be changed", "on n'y peut rien"], ["Was machst du ___ hier?", "denn", "showing interest", "pour marquer l'intérêt"]],
      fix: [["Mal schau!", "Schau mal!", "mal comes after the verb.", "mal se place après le verbe."], ["Doch das habe ich gesagt!", "Das habe ich doch gesagt!", "Modal particles sit in the middle of the sentence, not at the start.", "Les particules modales se placent au milieu de la phrase, pas en tête."]],
      task: ["Write a short message to a friend with four particles: invite them to an exhibition (doch), react to their excuse (halt), ask a question (denn) and reassure them (schon).", "Écris un court message à quelqu'un avec quatre particules : invite à une exposition (doch), réagis à une excuse (halt), pose une question (denn) et rassure (schon).", "Komm doch am Samstag mit in die neue Ausstellung! Du musst arbeiten? Das ist halt so, dann gehen wir am Sonntag. Wann hast du denn frei? Und keine Sorge wegen der Tickets, die bekommen wir schon."]
    },
    96: {
      gap: [["Im ___ sieht man einen Mann auf einem Felsen.", "Vordergrund", "foreground", "premier plan"], ["Das Bild ___ auf mich sehr ruhig.", "wirkt", "comes across", "paraît"], ["Die Farben ___ eine geheimnisvolle Stimmung.", "erzeugen|schaffen"], ["Mich spricht besonders die Landschaft ___.", "an"]],
      fix: [["Im Hintergrund man sieht Berge.", "Im Hintergrund sieht man Berge.", "The verb comes second.", "Le verbe en deuxième position."], ["Mir spricht das Bild sehr an.", "Mich spricht das Bild sehr an.", "ansprechen + accusative: mich.", "ansprechen + accusatif : mich."]],
      task: ["Describe a picture you like (a painting, a photo or a poster) in five sentences: introduce it, describe the foreground and background, its effect, and what it means to you.", "Décris une image que tu aimes (un tableau, une photo ou une affiche) en cinq phrases : présente-la, décris le premier plan et l'arrière-plan, son effet, et ce qu'elle signifie pour toi.", "Das Foto hängt in meiner Küche und zeigt einen Strand an der Ostsee. Im Vordergrund sieht man zwei leere Liegestühle. Im Hintergrund geht gerade die Sonne unter. Die warmen Farben erzeugen eine friedliche Stimmung. Mich erinnert das Bild an einen Sommer, in dem ich mich besonders frei gefühlt habe."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "museumsbesuch", lesson: 95, level: "B2", icon: "palette", partner: "Lena", role: "a friend", role_fr: "une amie",
    title: "At the modern art museum", title_fr: "Au musée d'art moderne",
    setting: "You're visiting a museum of contemporary art with your friend Lena. She isn't convinced by everything she sees.", setting_fr: "Tu visites un musée d'art contemporain avec ton amie Lena. Elle n'est pas convaincue par tout ce qu'elle voit.",
    turns: [
      { p: "Hier ist ja nur eine weiße Leinwand! Was soll das denn darstellen?", en: "There's just a white canvas here! What's that supposed to represent?", fr: "Il n'y a qu'une toile blanche ici ! C'est censé représenter quoi ?" },
      { y: ["Schau mal, da steht ein Text dazu. Vielleicht erklärt der etwas.", "Mal schau, da steht ein Text dazu. Vielleicht erklärt der etwas.", "Schau doch mal an, da steht ein Text dazu. Vielleicht erklärt der etwas."], en: "Look, there's a text about it. Maybe it explains something.", fr: "Regarde, il y a un texte à côté. Il explique peut-être quelque chose.", why: "mal after the verb: Schau mal.", why_fr: "mal après le verbe : Schau mal." },
      { p: "Ehrlich gesagt, sieht das aus, als hätte der Künstler einfach keine Lust gehabt.", en: "Honestly, it looks as if the artist just couldn't be bothered.", fr: "Franchement, on dirait que l'artiste n'avait tout simplement pas envie." },
      { y: ["Das ist halt Geschmackssache. Mich spricht die Ruhe des Bildes an.", "Das ist Geschmackssache halt. Mich spricht die Ruhe des Bildes an.", "Das ist halt Geschmackssache. Mir spricht die Ruhe des Bildes an."], en: "It's just a matter of taste. The calm of the picture appeals to me.", fr: "C'est une question de goût. Moi, c'est le calme du tableau qui me touche.", why: "halt in the middle; ansprechen + accusative: mich.", why_fr: "halt au milieu ; ansprechen + accusatif : mich." },
      { p: "Die Ruhe? Na ja. Und das Ding da drüben aus Plastikflaschen?", en: "The calm? Well. And that thing over there made of plastic bottles?", fr: "Le calme ? Bon. Et ce truc là-bas en bouteilles en plastique ?" },
      { y: ["Das ist doch interessant! Es wirkt, als würde es sich bewegen.", "Das ist interessant doch! Es wirkt, als würde es sich bewegen.", "Das ist doch interessant! Es wirkt, als ob es würde sich bewegen."], en: "But that's interesting! It looks as if it were moving.", fr: "Mais c'est intéressant ! On dirait qu'il bouge.", why: "doch in the middle; als + würde directly after als.", why_fr: "doch au milieu ; als + würde juste après als." },
      { p: "Stimmt, wenn man um die Skulptur herumgeht, sieht sie immer anders aus.", en: "True, when you walk round the sculpture, it always looks different.", fr: "C'est vrai, quand on fait le tour de la sculpture, elle a l'air toujours différente." },
      { y: ["Siehst du? Moderne Kunst ist eben manchmal ein Rätsel. Wollen wir noch in den Shop?", "Siehst du? Moderne Kunst ist manchmal eben ein Rätsel eben. Wollen wir noch in den Shop?", "Siehst du? Eben moderne Kunst ist manchmal ein Rätsel. Wollen wir noch in den Shop?"], en: "You see? Modern art is just a puzzle sometimes. Shall we go to the shop?", fr: "Tu vois ? L'art moderne est parfois une énigme, voilà tout. On passe à la boutique ?", why: "eben once, in the middle of the sentence.", why_fr: "eben une seule fois, au milieu de la phrase." },
      { p: "Gute Idee. Und danach brauche ich erst mal einen Kaffee.", en: "Good idea. And after that I need a coffee first.", fr: "Bonne idée. Et après, il me faut d'abord un café." },
      { y: ["Das klappt schon, im Erdgeschoss gibt es ja ein Café.", "Das klappt schon, im Erdgeschoss es gibt ja ein Café.", "Schon das klappt, im Erdgeschoss gibt es ja ein Café."], en: "No problem, there's a café on the ground floor, after all.", fr: "Pas de souci, il y a un café au rez-de-chaussée.", why: "schon and ja in the middle; the verb comes second.", why_fr: "schon et ja au milieu ; le verbe en deuxième position." }
    ] },
  { id: "bildbeschreibung", lesson: 96, level: "B2", icon: "frame", partner: "Frau Winter", role: "your art teacher", role_fr: "ta professeure d'art",
    title: "Describing a painting in class", title_fr: "Décrire un tableau en cours",
    setting: "In an evening art class, your teacher, Frau Winter, shows Caspar David Friedrich's “Der Wanderer über dem Nebelmeer” and asks you to describe it.", setting_fr: "Dans un cours d'art du soir, ta professeure, Frau Winter, montre « Der Wanderer über dem Nebelmeer » de Caspar David Friedrich et te demande de le décrire.",
    turns: [
      { p: "Beginnen Sie bitte mit einer kurzen Einleitung.", en: "Please start with a short introduction.", fr: "Commencez par une courte introduction, s'il vous plaît." },
      { y: ["Das Bild heißt „Der Wanderer über dem Nebelmeer“ und wurde um 1818 von Caspar David Friedrich gemalt.", "Das Bild heißt „Der Wanderer über dem Nebelmeer“ und wurde um 1818 von Caspar David Friedrich malen.", "Das Bild heißt „Der Wanderer über dem Nebelmeer“ und hat um 1818 von Caspar David Friedrich gemalt."], en: "The picture is called “Wanderer above the Sea of Fog” and was painted by Caspar David Friedrich around 1818.", fr: "Le tableau s'intitule « Le Voyageur contemplant une mer de nuages » et a été peint vers 1818 par Caspar David Friedrich.", why: "Passive Präteritum: wurde … gemalt.", why_fr: "Passif au prétérit : wurde … gemalt." },
      { p: "Gut. Was sehen Sie?", en: "Good. What do you see?", fr: "Bien. Que voyez-vous ?" },
      { y: ["In der Mitte steht ein Mann in einem dunklen Mantel auf einem Felsen. Wir sehen ihn nur von hinten.", "In der Mitte ein Mann steht in einem dunklen Mantel auf einem Felsen. Wir sehen ihn nur von hinten.", "In der Mitte steht ein Mann in einem dunklen Mantel auf einen Felsen. Wir sehen ihn nur von hinten."], en: "In the middle, a man in a dark coat is standing on a rock. We only see him from behind.", fr: "Au centre, un homme en manteau sombre se tient sur un rocher. Nous ne le voyons que de dos.", why: "Verb second; auf + dative (where): auf einem Felsen.", why_fr: "Verbe en deuxième position ; auf + datif (où) : auf einem Felsen." },
      { p: "Und im Hintergrund?", en: "And in the background?", fr: "Et à l'arrière-plan ?" },
      { y: ["Im Hintergrund liegt ein Meer aus Nebel, aus dem einzelne Bergspitzen ragen.", "Im Hintergrund liegt ein Meer aus Nebel, aus dem ragen einzelne Bergspitzen.", "Im Hintergrund liegt ein Meer aus Nebel, aus den einzelne Bergspitzen ragen."], en: "In the background there's a sea of fog, out of which a few mountain peaks rise.", fr: "À l'arrière-plan s'étend une mer de brouillard, d'où émergent quelques sommets.", why: "Relative clause aus dem (Nebel, dative): verb at the end.", why_fr: "Relative aus dem (Nebel, datif) : verbe à la fin." },
      { p: "Wie wirkt das Bild auf Sie?", en: "How does the painting strike you?", fr: "Quel effet le tableau vous fait-il ?" },
      { y: ["Es wirkt still und ein bisschen geheimnisvoll, als würde der Mann über sein Leben nachdenken.", "Es wirkt still und ein bisschen geheimnisvoll, als ob der Mann würde über sein Leben nachdenken.", "Es wirkt still und ein bisschen geheimnisvoll, als würde der Mann über sein Leben nachgedacht."], en: "It feels quiet and a little mysterious, as if the man were thinking about his life.", fr: "Il paraît silencieux et un peu mystérieux, comme si l'homme réfléchissait à sa vie.", why: "als + würde + infinitive at the end.", why_fr: "als + würde + infinitif à la fin." },
      { p: "Schön formuliert. Was spricht Sie persönlich an?", en: "Nicely put. What appeals to you personally?", fr: "Bien formulé. Qu'est-ce qui vous touche personnellement ?" },
      { y: ["Mich spricht besonders die Weite der Landschaft an. Vermutlich will Friedrich zeigen, wie klein der Mensch vor der Natur ist.", "Mir spricht besonders die Weite der Landschaft an. Vermutlich will Friedrich zeigen, wie klein der Mensch vor der Natur ist.", "Mich spricht besonders die Weite der Landschaft an. Vermutlich will Friedrich zeigen, wie klein ist der Mensch vor der Natur."], en: "What appeals to me most is the vastness of the landscape. Friedrich probably wants to show how small human beings are before nature.", fr: "Ce qui me touche le plus, c'est l'immensité du paysage. Friedrich veut sans doute montrer combien l'être humain est petit face à la nature.", why: "ansprechen + accusative; indirect question: verb at the end.", why_fr: "ansprechen + accusatif ; interrogative indirecte : verbe à la fin." }
    ] }
  );

  W.READINGS.push({
    id: "bauhaus", level: "B2", icon: "book-open", title: "Das Bauhaus: eine Schule verändert die Welt", genre: "Feature article",
    intro: "It existed for only fourteen years, yet its chairs, lamps and buildings still shape how we live. The story of the Bauhaus.",
    intro_fr: "Elle n'a existé que quatorze ans, et pourtant ses chaises, ses lampes et ses bâtiments influencent encore notre façon de vivre. L'histoire du Bauhaus.",
    paragraphs: [
      { de: "1919 gründete der Architekt Walter Gropius in Weimar eine neue Kunstschule: das Bauhaus. Seine Idee war ungewöhnlich. Kunst und Handwerk sollten nicht länger getrennt sein, und die Studierenden sollten lernen, Dinge für den Alltag zu entwerfen: Möbel, Lampen, Stoffe, ganze Häuser.", en: "In 1919, the architect Walter Gropius founded a new art school in Weimar: the Bauhaus. His idea was unusual. Art and craft were no longer to be kept apart, and students were to learn to design things for everyday life: furniture, lamps, textiles, whole houses.", fr: "En 1919, l'architecte Walter Gropius fonde à Weimar une nouvelle école d'art : le Bauhaus. Son idée est inhabituelle. L'art et l'artisanat ne doivent plus être séparés, et les étudiants doivent apprendre à concevoir des objets du quotidien : meubles, lampes, tissus, maisons entières." },
      { de: "Unter den Lehrern waren berühmte Maler wie Paul Klee und Wassily Kandinsky. Weil die Schule in Weimar politisch unter Druck geriet, zog sie 1925 nach Dessau um. Dort entstand nach Plänen von Gropius ein Gebäude aus Glas und Stahl, das 1926 eröffnet wurde und bis heute wirkt, als wäre es gerade erst gebaut worden.", en: "Among the teachers were famous painters such as Paul Klee and Wassily Kandinsky. Because the school came under political pressure in Weimar, it moved to Dessau in 1925. There, a building of glass and steel designed by Gropius was opened in 1926, and it still looks as if it had only just been built.", fr: "Parmi les enseignants figurent des peintres célèbres comme Paul Klee et Vassily Kandinsky. L'école subissant des pressions politiques à Weimar, elle déménage à Dessau en 1925. On y construit d'après les plans de Gropius un bâtiment de verre et d'acier, inauguré en 1926, qui semble encore aujourd'hui avoir été construit hier." },
      { de: "1932 musste das Bauhaus Dessau verlassen und zog nach Berlin, wo der Architekt Ludwig Mies van der Rohe es leitete. Doch schon 1933 schloss die Schule unter dem Druck der Nationalsozialisten. Viele Lehrer und Studierende emigrierten und verbreiteten die Ideen des Bauhauses in der ganzen Welt.", en: "In 1932, the Bauhaus had to leave Dessau and moved to Berlin, where the architect Ludwig Mies van der Rohe ran it. But as early as 1933 the school closed under pressure from the National Socialists. Many teachers and students emigrated and spread the ideas of the Bauhaus around the world.", fr: "En 1932, le Bauhaus doit quitter Dessau et s'installe à Berlin, où l'architecte Ludwig Mies van der Rohe le dirige. Mais dès 1933, l'école ferme sous la pression des nationaux-socialistes. De nombreux enseignants et étudiants émigrent et diffusent les idées du Bauhaus dans le monde entier." },
      { de: "Schlichte Formen, klare Linien, Möbel, die man in Serie herstellen kann: Vieles, was uns heute selbstverständlich erscheint, geht auf das Bauhaus zurück. Seit 1996 gehören die Bauhausstätten in Weimar und Dessau zum Welterbe der UNESCO, und 2019 wurde in ganz Deutschland der hundertste Geburtstag der Schule gefeiert.", en: "Simple forms, clear lines, furniture that can be mass-produced: much of what seems obvious to us today goes back to the Bauhaus. Since 1996, the Bauhaus sites in Weimar and Dessau have been UNESCO World Heritage Sites, and in 2019 the school's hundredth anniversary was celebrated all over Germany.", fr: "Formes sobres, lignes claires, meubles fabriqués en série : beaucoup de choses qui nous paraissent aujourd'hui évidentes remontent au Bauhaus. Depuis 1996, les sites du Bauhaus à Weimar et à Dessau sont inscrits au patrimoine mondial de l'UNESCO, et en 2019, le centenaire de l'école a été célébré dans toute l'Allemagne." }
    ],
    glossary: { "gründete": ["founded", "fonda"], "Kunstschule": ["art school", "école d'art"], "ungewöhnlich": ["unusual", "inhabituel"], "Handwerk": ["craft", "artisanat"], "getrennt": ["separate(d)", "séparé"], "Möbel": ["furniture", "meubles"], "Lampen": ["lamps", "lampes"], "Stoffe": ["fabrics, textiles", "tissus"], "Maler": ["painters", "peintres"], "geriet": ["(geraten) came (under)", "(geraten) se retrouva"], "Druck": ["pressure", "pression"], "zog": ["(umziehen) moved", "(umziehen) déménagea"], "Glas": ["glass", "verre"], "Stahl": ["steel", "acier"], "eröffnet": ["opened", "inauguré"], "verlassen": ["to leave", "quitter"], "leitete": ["ran, directed", "dirigeait"], "Nationalsozialisten": ["National Socialists, Nazis", "nationaux-socialistes"], "emigrierten": ["emigrated", "émigrèrent"], "verbreiteten": ["spread", "diffusèrent"], "Linien": ["lines", "lignes"], "Serie": ["series (in Serie: mass-produced)", "série (in Serie : en série)"], "herstellen": ["to produce", "fabriquer"], "selbstverständlich": ["obvious, natural", "évident"], "Bauhausstätten": ["Bauhaus sites", "sites du Bauhaus"], "Welterbe": ["World Heritage", "patrimoine mondial"], "gefeiert": ["celebrated", "célébré"] },
    questions: [
      { q: "Wer gründete das Bauhaus, und wann?", o: ["Walter Gropius, 1919", "Paul Klee, 1925", "Mies van der Rohe, 1933"], a: 0 },
      { q: "Was war die Idee des Bauhauses?", o: ["Kunst und Handwerk zu verbinden", "Nur Gemälde zu verkaufen", "Alte Häuser zu renovieren"], a: 0 },
      { q: "Wohin zog die Schule 1925?", o: ["Nach Dessau", "Nach Berlin", "Nach Weimar"], a: 0 },
      { q: "Warum schloss das Bauhaus 1933?", o: ["Unter dem Druck der Nationalsozialisten", "Weil es kein Geld mehr gab", "Weil Gropius krank war"], a: 0 },
      { q: "Seit wann gehören die Bauhausstätten zum Welterbe?", o: ["Seit 1996", "Seit 1919", "Seit 2019"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-b2-8", unit: "b2-8", level: "B2", icon: "radio",
    title: "Der Kulturtipp", title_fr: "Le conseil culturel",
    context: "A radio culture programme. Two critics, Sophie and Jakob, discuss a new (invented) production of a play at the city theatre.", context_fr: "Une émission culturelle à la radio. Deux critiques, Sophie et Jakob, discutent d'une nouvelle mise en scène (inventée) au théâtre municipal.",
    words: [["die Premiere, -n", "the opening night", "la première"], ["das Ensemble, -s", "the cast, the company", "la troupe"], ["überzeugen", "to convince", "convaincre"], ["übertrieben", "exaggerated, over the top", "exagéré"], ["sich lohnen", "to be worth it", "valoir la peine"]],
    lines: [["Moderatorin", "Gestern war Premiere im Stadttheater. Sophie, Jakob, ihr wart beide da. Wie war's?", "de-DE"], ["Sophie", "Ich war begeistert. Das Bühnenbild ist ganz schlicht, nur ein Tisch und ein Spiegel, aber es wirkt, als würde der Raum immer kleiner werden.", "de-DE"], ["Jakob", "Das Bühnenbild fand ich auch stark. Aber die Hauptdarstellerin spielt, als ob sie in einer Fernsehserie wäre. Viel zu übertrieben.", "de-DE"], ["Sophie", "Das sehe ich anders. Sie hat das Publikum doch völlig überzeugt, der Beifall war ja riesig!", "de-DE"], ["Jakob", "Na ja, Beifall gibt es bei einer Premiere halt immer.", "de-DE"], ["Moderatorin", "Und die Musik?", "de-DE"], ["Jakob", "Die war wohl das Beste an dem Abend. Die klingt, als käme sie aus einem alten Stummfilm.", "de-DE"], ["Sophie", "Also, mein Tipp: Hingehen und selbst entscheiden. Es lohnt sich schon.", "de-DE"]],
    gist: ["Worüber sprechen Sophie und Jakob?", ["Über eine neue Theateraufführung", "Über einen Kinofilm", "Über eine Kunstausstellung"]],
    detail: [["Wie ist das Bühnenbild?", ["Ganz schlicht: ein Tisch und ein Spiegel", "Sehr bunt und groß", "Es gibt keins"]], ["Was kritisiert Jakob?", ["Die Hauptdarstellerin spielt zu übertrieben.", "Die Musik ist zu laut.", "Das Stück ist zu kurz."]], ["Was gefällt Jakob am besten?", ["Die Musik", "Das Publikum", "Die Kostüme"]], ["Was empfiehlt Sophie?", ["Hingehen und selbst entscheiden", "Lieber zu Hause bleiben", "Auf die DVD warten"]]],
    decode: ["Aber die Hauptdarstellerin spielt, als ob sie in einer Fernsehserie wäre.", "Na ja, Beifall gibt es bei einer Premiere halt immer."],
    tip: "Modal particles are short and unstressed, so they're easy to miss, but they carry the speaker's attitude: doch and ja show conviction, halt resignation, wohl an assumption. Listen to the tone as much as to the words.", tip_fr: "Les particules modales sont courtes et non accentuées, donc faciles à manquer, mais elles portent l'attitude de la personne qui parle : doch et ja marquent la conviction, halt la résignation, wohl la supposition. Écoute le ton autant que les mots."
  }]);

  W.PROMPTS.push({ id: "de-b2-8", level: "B2", q: "Halte einen kurzen Vortrag: „Sollte der Staat Theater, Museen und Orchester finanziell unterstützen?“ Nenne Argumente dafür und dagegen und gib deine Meinung.", en: "Give a short talk: “Should the state fund theatres, museums and orchestras?” Give arguments for and against, and give your opinion.", fr: "Fais un court exposé : « L'État devrait-il financer les théâtres, les musées et les orchestres ? » Donne des arguments pour et contre, et ton avis.", time: 240,
    phrases: ["Ich möchte über die Frage sprechen, ob…", "Kultur ist ja nicht nur…", "Kritiker sagen, …", "Es wäre doch schade, wenn…", "Für mich steht fest, dass…"],
    model: "Ich möchte über die Frage sprechen, ob der Staat Theater, Museen und Orchester finanziell unterstützen sollte. In vielen Ländern werden solche Einrichtungen subventioniert, weil die Eintrittskarten allein die Kosten nicht decken. Dafür spricht, dass Kultur ja nicht nur Unterhaltung ist: Sie regt zum Nachdenken an und bringt Menschen zusammen. Ohne Förderung wären viele Angebote so teuer, als wären sie nur für Reiche gedacht. Kritiker sagen dagegen, dass das Geld besser in Schulen oder Krankenhäuser fließen sollte und dass nur ein kleiner Teil der Bevölkerung ins Theater geht. Das ist ein ernstes Argument. Trotzdem wäre es doch schade, wenn nur noch das überlebt, was sich gut verkauft. Für mich steht fest, dass der Staat Kultur fördern sollte, gerade für junge Menschen und Familien." });

  W.WRITING_GUIDE["b2-8"] = { genre: "A formal message (Goethe B2, writing part 2)", genre_fr: "Un message formel (Goethe B2, écrit partie 2)",
    plan: [["A subject line and a formal greeting.", "Un objet et un appel formel."], ["Who you are and why you're writing.", "Qui tu es et pourquoi tu écris."], ["Your idea, briefly described.", "Ton idée, décrite brièvement."], ["What you ask the town for.", "Ce que tu demandes à la ville."], ["A closing phrase and the sign-off.", "Une formule de conclusion et la formule finale."]],
    marks: [["Betreff: Vorschlag für ein Street-Art-Festival", "a clear subject line", "un objet clair"], ["Sehr geehrte Damen und Herren,", "the formal greeting", "l'appel formel"], ["im Namen unseres Jugendvereins", "who you are", "qui tu es"], ["die graue Mauer am Bahnhof", "a concrete detail", "un détail concret"], ["Wir möchten Sie daher bitten", "a polite request", "une demande polie"], ["Für ein persönliches Gespräch stehen wir Ihnen gern zur Verfügung.", "the closing phrase", "la formule de conclusion"]] };

  /* Atelier de langue : champs allemands d'abord, puis anglais et français (voir localize.js). */
  W.LEXIS = W.LEXIS || {};
  W.LEXIS["b2-8"] = {
    colloc: [
      ["eine Ausstellung eröffnen", "to open an exhibition", "inaugurer une exposition", "Die Ausstellung wird am Freitag eröffnet.", "eröffnet", ["gemacht", "angefangen"]],
      ["Beifall spenden", "to applaud", "applaudir", "Das Publikum spendete lange Beifall.", "spendete", ["schenkte", "zahlte"]],
      ["eine Rolle übernehmen", "to take on a role", "endosser un rôle", "Sie übernimmt die Hauptrolle im neuen Film.", "übernimmt", ["nimmt", "macht"]],
      ["einen Eindruck hinterlassen", "to leave an impression", "laisser une impression", "Das Konzert hat einen tiefen Eindruck hinterlassen.", "hinterlassen", ["gelassen", "verlassen"]],
      ["Kritik ernten", "to draw criticism", "s'attirer des critiques", "Die Inszenierung erntete viel Kritik.", "erntete", ["pflückte", "holte"]],
      ["ein Kunstwerk schaffen", "to create a work of art", "créer une œuvre", "Der Künstler hat ein beeindruckendes Kunstwerk geschaffen.", "geschaffen", ["geschafft", "gebaut"]],
      ["zum Nachdenken anregen", "to make you think", "faire réfléchir", "Das Stück regt zum Nachdenken an.", "regt", ["macht", "setzt"]],
      ["Eintritt verlangen", "to charge admission", "faire payer l'entrée", "Das Museum verlangt sonntags keinen Eintritt.", "verlangt", ["kostet", "bezahlt"]],
      ["ein Theaterstück aufführen", "to perform a play", "jouer une pièce de théâtre", "Die Schüler führen ein Theaterstück auf.", "führen", ["stellen", "spielen"]],
      ["unter Denkmalschutz stehen", "to be a listed building", "être classé monument historique", "Das alte Kino steht unter Denkmalschutz.", "steht", ["liegt", "sitzt"]]
    ],
    wf: [
      ["Die ___ des Stücks war ausverkauft. (AUFFÜHREN)", "Aufführung"],
      ["Die Porträts sind sehr ___ gemalt. (REALITÄT)", "realistisch"],
      ["Die ___ wurde von 50 000 Menschen besucht. (AUSSTELLEN)", "Ausstellung"],
      ["Die Musik war sehr ___. (EINDRUCK)", "eindrucksvoll"],
      ["Der Film ist für Kinder nicht ___. (EIGNEN)", "geeignet"],
      ["Die ___ des Architekten waren schlicht und funktional. (ENTWERFEN)", "Entwürfe"],
      ["Das Konzert war ein großer ___. (ERFOLGREICH)", "Erfolg"],
      ["Die ___ von Kunst und Handwerk war am Bauhaus wichtig. (VERBINDEN)", "Verbindung"]
    ],
    kwt: [
      ["Er tut so. Angeblich weiß er alles.", "ALS", "Er tut so, ___ alles.", "als wüsste er"],
      ["Es sieht aus, als ob es gleich regnet.", "WÜRDE", "Es sieht aus, ___.", "als würde es gleich regnen"],
      ["Er reagierte seltsam. Hatte er nichts gehört?", "HÄTTE", "Er reagierte, als ___.", "hätte er nichts gehört"],
      ["Komm bitte mit, das wird schön!", "DOCH", "Komm ___, das wird schön!", "doch mit"],
      ["Man kann es nicht ändern, so ist es.", "HALT", "Das ist ___.", "halt so"],
      ["Die Ausstellung wird morgen eröffnet.", "ERÖFFNUNG", "Die ___ morgen statt.", "Eröffnung der Ausstellung findet"]
    ],
    idioms: [
      ["über die Bühne gehen", "stattfinden, ablaufen", "to go off, to take place", "se dérouler", "Das Festival ist ohne Probleme über die Bühne gegangen.", "über die Bühne gegangen"],
      ["jemandem die Show stehlen", "mehr Aufmerksamkeit bekommen als jemand anderes", "to steal the show from someone", "voler la vedette à quelqu'un", "Der kleine Hund hat allen die Show gestohlen.", "die Show gestohlen"],
      ["Geschmackssache sein", "von der persönlichen Vorliebe abhängen", "to be a matter of taste", "être une question de goût", "Moderne Kunst ist eben Geschmackssache.", "Geschmackssache"],
      ["aus der Rolle fallen", "sich unpassend benehmen", "to behave inappropriately", "se conduire de façon déplacée", "Beim Empfang ist er völlig aus der Rolle gefallen.", "aus der Rolle gefallen"],
      ["ein Ohrwurm", "eine Melodie, die man nicht mehr aus dem Kopf bekommt", "an earworm, a catchy tune", "un air qui trotte dans la tête", "Dieses Lied ist ein echter Ohrwurm.", "Ohrwurm"],
      ["Hand und Fuß haben", "gut durchdacht sein", "to be well thought out", "tenir la route", "Dein Konzept hat Hand und Fuß.", "Hand und Fuß"],
      ["hinter den Kulissen", "im Verborgenen, nicht öffentlich", "behind the scenes", "en coulisses", "Hinter den Kulissen wurde heftig gestritten.", "Hinter den Kulissen"],
      ["die erste Geige spielen", "die wichtigste Rolle haben", "to call the shots", "tenir le premier rôle", "In diesem Team spielt sie die erste Geige.", "die erste Geige"]
    ]
  };

  W.COURSE.push({ id: "b2-8", level: "B2", icon: "palette", title: "Art and culture", title_fr: "Art et culture",
    intro: "Museums, theatre, design: in this unit, you'll learn unreal comparisons (er tut, als wüsste er alles), the modal particles that give spoken German its tone (ja, doch, halt, mal), and how to describe and interpret a picture, with Caspar David Friedrich's famous wanderer as an example. You'll also discover the Bauhaus, the school that changed design worldwide.",
    intro_fr: "Musées, théâtre, design : dans cette unité, tu vas apprendre les comparaisons irréelles (er tut, als wüsste er alles), les particules modales qui donnent le ton à l'allemand parlé (ja, doch, halt, mal), et la façon de décrire et d'interpréter une image, avec le célèbre voyageur de Caspar David Friedrich comme exemple. Tu découvriras aussi le Bauhaus, l'école qui a changé le design dans le monde entier.",
    can: ["Make unreal comparisons with als ob and als + Konjunktiv II", "Use modal particles to sound natural", "Describe and interpret a picture", "Talk about a cultural event and give an opinion", "Write a formal message of about 100 words (Goethe B2)"],
    can_fr: ["Faire des comparaisons irréelles avec als ob et als + Konjunktiv II", "Employer les particules modales pour parler naturellement", "Décrire et interpréter une image", "Parler d'un événement culturel et donner un avis", "Écrire un message formel d'environ 100 mots (Goethe B2)"],
    lessons: [94, 95, 96], vocab: ["kunstB2DE", "kulturlebenDE"], reading: "bauhaus", prompt: "de-b2-8",
    writing: { task: "Your youth club would like to organise a street-art festival in your town. Write to the town's culture office (100-130 words): say who you are, describe the idea, explain what you need from the town (a wall, a permit, a small budget) and ask for a meeting.", task_fr: "Ton association de jeunes voudrait organiser un festival de street art dans ta ville. Écris au service culturel de la ville (100 à 130 mots) : dis qui tu es, décris l'idée, explique ce dont vous avez besoin (un mur, une autorisation, un petit budget) et demande un rendez-vous.", words: "100-130",
      tips: ["Sehr geehrte Damen und Herren,", "im Namen unseres Vereins wende ich mich an Sie, …", "Unsere Idee ist, …", "Wir möchten Sie daher bitten, …", "Für ein persönliches Gespräch stehen wir Ihnen gern zur Verfügung."],
      checklist: ["I wrote a subject line and a formal greeting", "I said who I am and why I'm writing", "I described the idea with a concrete detail", "I said clearly what we need and asked for a meeting", "I wrote between 100 and 130 words"],
      checklist_fr: ["J'ai écrit un objet et un appel formel", "J'ai dit qui je suis et pourquoi j'écris", "J'ai décrit l'idée avec un détail concret", "J'ai dit clairement ce dont nous avons besoin et demandé un rendez-vous", "J'ai écrit entre 100 et 130 mots"],
      model: "Betreff: Vorschlag für ein Street-Art-Festival im Sommer\n\nSehr geehrte Damen und Herren,\n\nim Namen unseres Jugendvereins „Farbe für alle“ wende ich mich mit einer Idee an Sie. Wir möchten im August ein Street-Art-Festival organisieren, bei dem junge Künstlerinnen und Künstler die graue Mauer am Bahnhof gemeinsam gestalten. Das Festival würde die Gegend um den Bahnhof deutlich lebendiger machen.\n\nDafür bräuchten wir eine Genehmigung der Stadt und, wenn möglich, einen kleinen Zuschuss für Farben und Gerüste. Wir möchten Sie daher bitten, unseren Vorschlag zu prüfen. Gern stellen wir Ihnen unsere Entwürfe vor.\n\nFür ein persönliches Gespräch stehen wir Ihnen gern zur Verfügung.\n\nMit freundlichen Grüßen\nRobin Keller" } });
})();
