/* Cours d'allemand, unité B1-8 « Travel and transport / Voyages et transports » : les connecteurs doubles (sowohl …
   als auch, weder … noch, entweder … oder, nicht nur … sondern auch, zwar … aber), ohne … zu et statt … zu ;
   organiser quelque chose ensemble (Goethe B1, oral partie 1). Explications en anglais ET en français.
   Personnages fictifs, prénoms allemands.
   Faits vérifiables seulement : sur beaucoup de tronçons d'autoroute, pas de limitation générale de vitesse, mais une
   vitesse recommandée de 130 km/h depuis 1978 ; limitations fréquentes (travaux, bruit, danger) ; poids lourds
   limités à 80 km/h ; environ 13 000 km d'autoroutes ; obligation de former un couloir de secours (Rettungsgasse)
   dans les bouchons, entre la voie de gauche et les autres ; interdiction de circuler le dimanche pour les poids
   lourds de plus de 7,5 tonnes. Écrit : e-mail personnel (Goethe B1, partie 1, environ 80 mots). */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "verkehrDE", icon: "car", title: "Traffic and driving", title_fr: "Circulation et conduite", level: "B1", words: [
    ["der Verkehr", "traffic", "la circulation", "Um acht Uhr ist in der Stadt viel Verkehr."],
    ["der Stau, -s", "the traffic jam", "le bouchon, l'embouteillage", "Wir standen zwei Stunden im Stau."],
    ["die Ausfahrt, -en", "the exit (motorway)", "la sortie (d'autoroute)", "Nehmen Sie die nächste Ausfahrt."],
    ["die Umleitung, -en", "the diversion", "la déviation", "Wegen einer Baustelle gibt es eine Umleitung."],
    ["tanken", "to fill up (with fuel)", "faire le plein", "Wir müssen vor der Autobahn noch tanken."],
    ["die Tankstelle, -n", "the petrol station", "la station-service", "Die nächste Tankstelle ist in zehn Kilometern."],
    ["die Geschwindigkeit, -en", "speed", "la vitesse", "Die Geschwindigkeit ist hier auf 80 begrenzt."],
    ["das Tempolimit, -s", "the speed limit", "la limitation de vitesse", "Auf dieser Straße gibt es ein Tempolimit."],
    ["überholen", "to overtake", "doubler, dépasser", "Rechts überholen ist verboten."],
    ["die Panne, -n", "the breakdown", "la panne", "Wir hatten auf der Autobahn eine Panne."],
    ["der Unfall, ¨-e", "the accident", "l'accident", "Bei dem Unfall wurde zum Glück niemand verletzt."],
    ["der Fußgänger, -", "the pedestrian", "le piéton", "Achtung, Fußgänger haben hier Vorrang!"],
    ["die Spur, -en", "the lane", "la voie (de circulation)", "Bitte bleiben Sie auf der rechten Spur."],
    ["das Bußgeld, -er", "the fine", "l'amende", "Zu schnelles Fahren kostet ein Bußgeld."],
    ["der Lkw, -s", "the lorry, the truck", "le poids lourd, le camion", "Am Sonntag fahren fast keine Lkw."]
  ] },
  { id: "unterwegsDE", icon: "luggage", title: "Planning a trip", title_fr: "Préparer un voyage", level: "B1", words: [
    ["der Anschluss, ¨-e", "the connection (train, bus)", "la correspondance", "Wegen der Verspätung habe ich meinen Anschluss verpasst."],
    ["verpassen", "to miss", "rater, manquer", "Beeil dich, sonst verpassen wir den Zug!"],
    ["ausfallen", "to be cancelled", "être annulé, ne pas avoir lieu", "Der Zug fällt heute leider aus."],
    ["die Durchsage, -n", "the announcement", "l'annonce (au haut-parleur)", "Hast du die Durchsage verstanden?"],
    ["die Reservierung, -en", "the reservation", "la réservation", "Ich habe eine Reservierung für zwei Personen."],
    ["der Gleiswechsel, -", "the platform change", "le changement de voie", "Achtung, Gleiswechsel: Der Zug fährt heute von Gleis 5."],
    ["die Ersatzverbindung, -en", "the alternative connection", "la correspondance de remplacement", "Bitte nutzen Sie die Ersatzverbindung ab Gleis 3."],
    ["die Mitfahrgelegenheit, -en", "the lift, the car share", "le covoiturage", "Ich fahre mit einer Mitfahrgelegenheit nach Leipzig."],
    ["der Fernbus, -se", "the long-distance coach", "le bus longue distance", "Mit dem Fernbus ist die Reise billiger."],
    ["die Rundreise, -n", "the round trip, the tour", "le circuit", "Im Sommer machen wir eine Rundreise durch Schottland."],
    ["unternehmen", "to do (an activity)", "faire (une activité), entreprendre", "Was wollen wir am Wochenende unternehmen?"],
    ["spontan", "spontaneous(ly)", "spontané, spontanément", "Wir sind ganz spontan ans Meer gefahren."],
    ["die Strecke, -n", "the route, the line", "le trajet, la ligne", "Die Strecke nach Kiel ist heute gesperrt."],
    ["gesperrt", "closed (road, line)", "fermé, coupé (route, ligne)", "Die Brücke ist wegen Bauarbeiten gesperrt."]
  ] });

  W.LESSONS.push(
  {
    id: 64, level: "B1", icon: "git-merge",
    title: "entweder … oder, weder … noch: two-part connectors", title_fr: "entweder … oder, weder … noch : les connecteurs doubles",
    subtitle: "Either … or, neither … nor, both … and, not only … but also, admittedly … but.", subtitle_fr: "Ou … ou, ni … ni, à la fois … et, non seulement … mais aussi, certes … mais.",
    body: `
<h2>Five pairs</h2>
<table>
<tr><th>German</th><th>Meaning</th></tr>
<tr><td><s-de>sowohl … als auch</s-de></td><td>both … and</td></tr>
<tr><td><s-de>weder … noch</s-de></td><td>neither … nor</td></tr>
<tr><td><s-de>entweder … oder</s-de></td><td>either … or</td></tr>
<tr><td><s-de>nicht nur … sondern auch</s-de></td><td>not only … but also</td></tr>
<tr><td><s-de>zwar … aber</s-de></td><td>admittedly …, but / it's true that …, but</td></tr>
</table>
<h2>Linking words and groups</h2>
<p><s-de>Ich spreche sowohl Deutsch als auch Englisch.</s-de> · <s-de>Wir haben weder Zeit noch Geld.</s-de> (no <s-de>nicht</s-de>: <s-de>weder</s-de> is already negative) · <s-de>Wir nehmen entweder den Zug oder den Bus.</s-de> · <s-de>Die Reise war nicht nur schön, sondern auch günstig.</s-de></p>
<h2>Linking whole sentences</h2>
<p><s-de>zwar … aber</s-de> almost always links two clauses: <s-de>Der Zug ist zwar teurer, aber er ist schneller.</s-de> With <s-de>entweder</s-de> at the start, both word orders are possible: <s-de>Entweder wir fahren heute, oder wir bleiben bis Montag.</s-de> / <s-de>Entweder fahren wir heute, oder…</s-de></p>
<div class="tip">After <s-de>sondern</s-de> and <s-de>oder</s-de>, the word order doesn't change: <s-de>…, sondern sie ist auch bequem.</s-de> Use these pairs in your exam texts: they show a B1 level at a glance.</div>
`,
    body_fr: `
<h2>Cinq paires</h2>
<table>
<tr><th>Allemand</th><th>Sens</th></tr>
<tr><td><s-de>sowohl … als auch</s-de></td><td>à la fois … et</td></tr>
<tr><td><s-de>weder … noch</s-de></td><td>ni … ni</td></tr>
<tr><td><s-de>entweder … oder</s-de></td><td>ou (bien) … ou (bien)</td></tr>
<tr><td><s-de>nicht nur … sondern auch</s-de></td><td>non seulement … mais aussi</td></tr>
<tr><td><s-de>zwar … aber</s-de></td><td>certes …, mais</td></tr>
</table>
<h2>Relier des mots et des groupes</h2>
<p><s-de>Ich spreche sowohl Deutsch als auch Englisch.</s-de> · <s-de>Wir haben weder Zeit noch Geld.</s-de> (Nous n'avons ni temps ni argent : pas de <s-de>nicht</s-de>, <s-de>weder</s-de> est déjà négatif, comme « ni ») · <s-de>Wir nehmen entweder den Zug oder den Bus.</s-de> · <s-de>Die Reise war nicht nur schön, sondern auch günstig.</s-de></p>
<h2>Relier des phrases entières</h2>
<p><s-de>zwar … aber</s-de> relie presque toujours deux propositions : <s-de>Der Zug ist zwar teurer, aber er ist schneller.</s-de> (Le train est certes plus cher, mais il est plus rapide.) Avec <s-de>entweder</s-de> en tête, les deux ordres sont possibles : <s-de>Entweder wir fahren heute, oder wir bleiben bis Montag.</s-de> / <s-de>Entweder fahren wir heute, oder…</s-de></p>
<div class="tip">Après <s-de>sondern</s-de> et <s-de>oder</s-de>, l'ordre des mots ne change pas : <s-de>…, sondern sie ist auch bequem.</s-de> Emploie ces paires dans tes écrits d'examen : elles montrent un niveau B1 au premier coup d'œil.</div>
`,
    examples: [
      ["Ich spreche sowohl Deutsch als auch Englisch.", "I speak both German and English.", "Je parle à la fois allemand et anglais."],
      ["Wir haben weder Zeit noch Geld für einen langen Urlaub.", "We have neither the time nor the money for a long holiday.", "Nous n'avons ni le temps ni l'argent pour de longues vacances."],
      ["Wir nehmen entweder den Zug oder den Fernbus.", "We'll take either the train or the coach.", "Nous prendrons soit le train, soit le bus longue distance."],
      ["Die Reise war nicht nur schön, sondern auch günstig.", "The trip was not only lovely but also cheap.", "Le voyage était non seulement beau, mais aussi bon marché."],
      ["Der Zug ist zwar teurer, aber er ist viel schneller.", "The train is admittedly more expensive, but it's much faster.", "Le train est certes plus cher, mais il est beaucoup plus rapide."],
      ["Entweder wir fahren heute Abend, oder wir bleiben bis Montag.", "Either we leave tonight, or we stay until Monday.", "Soit nous partons ce soir, soit nous restons jusqu'à lundi."],
      ["Weder der Bus noch die Bahn fährt heute wegen des Streiks.", "Neither the bus nor the train is running today because of the strike.", "Ni le bus ni le train ne circulent aujourd'hui à cause de la grève."]
    ],
    quiz: [
      { q: "“We have neither time nor money.”", q_fr: "« Nous n'avons ni temps ni argent. »", o: ["Wir haben weder Zeit noch Geld.", "Wir haben nicht weder Zeit noch Geld.", "Wir haben weder Zeit oder Geld."], a: 0, ex: "weder … noch, without nicht.", ex_fr: "weder … noch, sans nicht." },
      { q: "“Ich spreche sowohl Deutsch ___ Englisch.”", q_fr: "« Ich spreche sowohl Deutsch ___ Englisch. »", o: ["als auch", "und auch", "sondern auch"], a: 0, ex: "sowohl … als auch.", ex_fr: "sowohl … als auch." },
      { q: "“nicht nur schön, ___ auch günstig”", q_fr: "« nicht nur schön, ___ auch günstig »", o: ["sondern", "aber", "oder"], a: 0, ex: "nicht nur … sondern auch.", ex_fr: "nicht nur … sondern auch." },
      { q: "“Der Zug ist ___ teurer, aber schneller.”", q_fr: "« Der Zug ist ___ teurer, aber schneller. »", o: ["zwar", "weder", "sowohl"], a: 0, ex: "zwar … aber.", ex_fr: "zwar … aber." },
      { q: "“Either the train or the bus.”", q_fr: "« Soit le train, soit le bus. »", o: ["Entweder den Zug oder den Bus.", "Weder den Zug oder den Bus.", "Entweder den Zug noch den Bus."], a: 0, ex: "entweder … oder.", ex_fr: "entweder … oder." }
    ]
  },
  {
    id: 65, level: "B1", icon: "split",
    title: "ohne … zu, statt … zu: without and instead of", title_fr: "ohne … zu, statt … zu : sans et au lieu de",
    subtitle: "Two more infinitive clauses, built like um … zu.", subtitle_fr: "Deux autres propositions infinitives, construites comme um … zu.",
    body: `
<h2>ohne … zu: without doing</h2>
<p><s-de>Er ist losgefahren, ohne zu tanken.</s-de> (He set off without filling up.) · <s-de>Sie ist gegangen, ohne sich zu verabschieden.</s-de> English uses "-ing"; German uses <s-de>zu</s-de> + infinitive at the end.</p>
<h2>statt … zu: instead of doing</h2>
<p><s-de>Statt den Bus zu nehmen, gehe ich zu Fuß.</s-de> (Instead of taking the bus, I walk.) <s-de>anstatt</s-de> means the same.</p>
<table>
<tr><th>Clause</th><th>Meaning</th></tr>
<tr><td><s-de>um … zu</s-de></td><td>in order to (a purpose)</td></tr>
<tr><td><s-de>ohne … zu</s-de></td><td>without -ing</td></tr>
<tr><td><s-de>statt … zu</s-de></td><td>instead of -ing</td></tr>
</table>
<h2>With a different person: ohne dass, statt dass</h2>
<p>When the person changes: <s-de>Er ist gegangen, ohne dass ich es gemerkt habe.</s-de> (He left without my noticing.)</p>
<div class="tip">With separable verbs, <s-de>zu</s-de> goes in the middle, as always: <s-de>ohne anzurufen</s-de>, <s-de>statt aufzuräumen</s-de>. And there's a comma before the clause.</div>
`,
    body_fr: `
<h2>ohne … zu : sans + infinitif</h2>
<p><s-de>Er ist losgefahren, ohne zu tanken.</s-de> (Il est parti sans faire le plein.) · <s-de>Sie ist gegangen, ohne sich zu verabschieden.</s-de> (Elle est partie sans dire au revoir.) Comme « sans + infinitif », avec <s-de>zu</s-de> + infinitif à la fin.</p>
<h2>statt … zu : au lieu de + infinitif</h2>
<p><s-de>Statt den Bus zu nehmen, gehe ich zu Fuß.</s-de> (Au lieu de prendre le bus, je marche.) <s-de>anstatt</s-de> veut dire la même chose.</p>
<table>
<tr><th>Proposition</th><th>Sens</th></tr>
<tr><td><s-de>um … zu</s-de></td><td>pour + infinitif (but)</td></tr>
<tr><td><s-de>ohne … zu</s-de></td><td>sans + infinitif</td></tr>
<tr><td><s-de>statt … zu</s-de></td><td>au lieu de + infinitif</td></tr>
</table>
<h2>Avec une autre personne : ohne dass, statt dass</h2>
<p>Quand le sujet change : <s-de>Er ist gegangen, ohne dass ich es gemerkt habe.</s-de> (Il est parti sans que je m'en aperçoive.) Et pas de subjonctif en allemand !</p>
<div class="tip">Avec un verbe séparable, <s-de>zu</s-de> se place au milieu, comme toujours : <s-de>ohne anzurufen</s-de>, <s-de>statt aufzuräumen</s-de>. Et on met une virgule avant la proposition.</div>
`,
    examples: [
      ["Er ist losgefahren, ohne zu tanken.", "He set off without filling up.", "Il est parti sans faire le plein."],
      ["Statt den Bus zu nehmen, gehe ich heute zu Fuß.", "Instead of taking the bus, I'm walking today.", "Au lieu de prendre le bus, je marche aujourd'hui."],
      ["Sie ist gegangen, ohne sich zu verabschieden.", "She left without saying goodbye.", "Elle est partie sans dire au revoir."],
      ["Ich habe das Ticket gekauft, ohne die Preise zu vergleichen.", "I bought the ticket without comparing prices.", "J'ai acheté le billet sans comparer les prix."],
      ["Anstatt im Stau zu stehen, fahren wir mit der Bahn.", "Instead of sitting in traffic, we're taking the train.", "Au lieu de rester dans les bouchons, nous prenons le train."],
      ["Er hat das Auto genommen, ohne dass ich es wusste.", "He took the car without my knowing.", "Il a pris la voiture sans que je le sache."],
      ["Fahr nicht los, ohne vorher anzurufen!", "Don't set off without calling first!", "Ne pars pas sans appeler avant !"]
    ],
    quiz: [
      { q: "“He left without saying goodbye.”", q_fr: "« Il est parti sans dire au revoir. »", o: ["Er ist gegangen, ohne sich zu verabschieden.", "Er ist gegangen, ohne sich verabschieden.", "Er ist gegangen, ohne zu sich verabschieden."], a: 0, ex: "ohne … zu + infinitive at the end.", ex_fr: "ohne … zu + infinitif à la fin." },
      { q: "“___ den Bus zu nehmen, gehe ich zu Fuß.”", q_fr: "« ___ den Bus zu nehmen, gehe ich zu Fuß. »", o: ["Statt", "Ohne", "Um"], a: 0, ex: "Instead of: statt … zu.", ex_fr: "Au lieu de : statt … zu." },
      { q: "“without calling” (anrufen)", q_fr: "« sans appeler » (anrufen)", o: ["ohne anzurufen", "ohne zu anrufen", "ohne anrufen"], a: 0, ex: "Separable verb: zu in the middle.", ex_fr: "Verbe séparable : zu au milieu." },
      { q: "“Er ging, ___ ich es merkte.” (a different person)", q_fr: "« Er ging, ___ ich es merkte. » (une autre personne)", o: ["ohne dass", "ohne zu", "statt zu"], a: 0, ex: "Different subject: ohne dass.", ex_fr: "Sujet différent : ohne dass." },
      { q: "Which sentence is correct?", q_fr: "Quelle phrase est correcte ?", o: ["Ich lerne, um die Prüfung zu bestehen.", "Ich lerne, ohne die Prüfung bestehen.", "Ich lerne, statt die Prüfung bestehen zu."], a: 0, ex: "zu + infinitive at the very end.", ex_fr: "zu + infinitif tout à la fin." }
    ]
  },
  {
    id: 66, level: "B1", kind: "functional", icon: "calendar-days",
    title: "Everyday German: planning something together", title_fr: "L'allemand de tous les jours : organiser quelque chose ensemble",
    subtitle: "Suggest, accept, refuse politely and agree: the Goethe B1 speaking task, part 1.", subtitle_fr: "Proposer, accepter, refuser poliment et se mettre d'accord : l'oral du Goethe B1, partie 1.",
    body: `
<h2>The task</h2>
<p>In part 1 of the Goethe-Zertifikat B1 speaking exam, you and a partner plan something together: a trip, a party, a visit. You get a few points to discuss (when? where? how do we get there? what do we bring?). The aim is to make suggestions, react to your partner's ideas and agree.</p>
<h2>Making suggestions</h2>
<p><s-de>Wie wäre es, wenn wir…?</s-de> · <s-de>Wir könnten…</s-de> · <s-de>Was hältst du davon, wenn…?</s-de> · <s-de>Ich schlage vor, dass…</s-de> · <s-de>Hast du Lust, …?</s-de></p>
<h2>Accepting</h2>
<p><s-de>Gute Idee!</s-de> · <s-de>Einverstanden.</s-de> · <s-de>Das passt mir gut.</s-de> · <s-de>Das machen wir so.</s-de></p>
<h2>Refusing politely</h2>
<p><s-de>Das ist keine so gute Idee, weil…</s-de> · <s-de>Da kann ich leider nicht.</s-de> · <s-de>Lieber würde ich…</s-de> · <s-de>Ich habe eine andere Idee: …</s-de></p>
<h2>Agreeing</h2>
<p><s-de>Also, dann machen wir es so: …</s-de> · <s-de>Gut, dann treffen wir uns um…</s-de> · <s-de>Ich kümmere mich um…, und du…</s-de></p>
<div class="tip">In the exam, ask your partner questions too (<s-de>Was meinst du?</s-de> · <s-de>Hast du eine Idee?</s-de>): the examiners assess the conversation, not two monologues.</div>
`,
    body_fr: `
<h2>La tâche</h2>
<p>À la partie 1 de l'oral du Goethe-Zertifikat B1, tu organises quelque chose avec une autre personne : une sortie, une fête, une visite. Vous recevez quelques points à discuter (quand ? où ? comment y aller ? qu'apporter ?). Le but est de faire des propositions, de réagir aux idées de l'autre et de vous mettre d'accord.</p>
<h2>Faire des propositions</h2>
<p><s-de>Wie wäre es, wenn wir…?</s-de> (Et si on… ?) · <s-de>Wir könnten…</s-de> · <s-de>Was hältst du davon, wenn…?</s-de> · <s-de>Ich schlage vor, dass…</s-de> · <s-de>Hast du Lust, …?</s-de></p>
<h2>Accepter</h2>
<p><s-de>Gute Idee!</s-de> · <s-de>Einverstanden.</s-de> · <s-de>Das passt mir gut.</s-de> (Ça me convient.) · <s-de>Das machen wir so.</s-de></p>
<h2>Refuser poliment</h2>
<p><s-de>Das ist keine so gute Idee, weil…</s-de> · <s-de>Da kann ich leider nicht.</s-de> · <s-de>Lieber würde ich…</s-de> (Je préférerais…) · <s-de>Ich habe eine andere Idee: …</s-de></p>
<h2>Se mettre d'accord</h2>
<p><s-de>Also, dann machen wir es so: …</s-de> · <s-de>Gut, dann treffen wir uns um…</s-de> · <s-de>Ich kümmere mich um…, und du…</s-de></p>
<div class="tip">À l'examen, pose aussi des questions à l'autre (<s-de>Was meinst du?</s-de> · <s-de>Hast du eine Idee?</s-de>) : le jury évalue un échange, pas deux monologues.</div>
`,
    examples: [
      ["Wie wäre es, wenn wir am Samstag nach Potsdam fahren?", "How about going to Potsdam on Saturday?", "Et si on allait à Potsdam samedi ?"],
      ["Wir könnten entweder mit dem Zug oder mit dem Fahrrad fahren.", "We could go either by train or by bike.", "Nous pourrions y aller en train ou à vélo."],
      ["Gute Idee! Das passt mir gut.", "Good idea! That suits me.", "Bonne idée ! Ça me convient."],
      ["Samstag ist schlecht, da kann ich leider nicht.", "Saturday's bad, I can't make it then.", "Samedi, ça ne va pas, je ne peux pas ce jour-là."],
      ["Lieber würde ich am Sonntag fahren, weil es dann ruhiger ist.", "I'd rather go on Sunday, because it's quieter then.", "Je préférerais y aller dimanche, parce que c'est plus calme."],
      ["Also, dann machen wir es so: Wir treffen uns um neun am Bahnhof.", "Right, let's do it like this: we'll meet at nine at the station.", "Bon, on fait comme ça : on se retrouve à neuf heures à la gare."],
      ["Ich kümmere mich um die Tickets, und du bringst das Picknick mit.", "I'll take care of the tickets, and you bring the picnic.", "Je m'occupe des billets, et toi, tu apportes le pique-nique."]
    ],
    quiz: [
      { q: "To make a suggestion:", q_fr: "Pour faire une proposition :", o: ["Wie wäre es, wenn wir…?", "Das passt mir gut.", "Da kann ich leider nicht."], a: 0, ex: "Wie wäre es, wenn… = how about…", ex_fr: "Wie wäre es, wenn… = et si…" },
      { q: "To refuse politely:", q_fr: "Pour refuser poliment :", o: ["Lieber würde ich…", "Nein, das ist dumm.", "Egal."], a: 0, ex: "Lieber würde ich… = I'd rather…", ex_fr: "Lieber würde ich… = je préférerais…" },
      { q: "“That suits me.”", q_fr: "« Ça me convient. »", o: ["Das passt mir gut.", "Das passiert mir gut.", "Das passt mich gut."], a: 0, ex: "jemandem passen (dative).", ex_fr: "jemandem passen (datif)." },
      { q: "In the Goethe B1 speaking task (part 1), what is assessed?", q_fr: "À l'oral du Goethe B1 (partie 1), qu'est-ce qui est évalué ?", o: ["The conversation with your partner", "A long monologue", "Your accent only"], o_fr: ["L'échange avec l'autre personne", "Un long monologue", "Seulement l'accent"], a: 0, ex: "Ask and react: Was meinst du?", ex_fr: "Pose des questions et réagis : Was meinst du?" },
      { q: "To share out the tasks:", q_fr: "Pour se répartir les tâches :", o: ["Ich kümmere mich um…, und du…", "Ich weiß nicht.", "Wie wäre es?"], a: 0, ex: "sich kümmern um = to take care of.", ex_fr: "sich kümmern um = s'occuper de." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    64: {
      gap: [["Wir haben ___ Zeit noch Geld.", "weder"], ["Ich spreche sowohl Deutsch ___ Englisch.", "als auch"], ["Die Reise war nicht nur schön, ___ auch günstig.", "sondern"], ["Der Zug ist ___ teurer, aber schneller.", "zwar"]],
      fix: [["Wir haben nicht weder Zeit noch Geld.", "Wir haben weder Zeit noch Geld.", "weder is already negative: no nicht.", "weder est déjà négatif : pas de nicht."], ["Wir nehmen entweder den Zug noch den Bus.", "Wir nehmen entweder den Zug oder den Bus.", "entweder … oder; noch goes with weder.", "entweder … oder ; noch va avec weder."]],
      task: ["Describe your ideal holiday in four sentences with sowohl … als auch, weder … noch, nicht nur … sondern auch and zwar … aber.", "Décris tes vacances idéales en quatre phrases avec sowohl … als auch, weder … noch, nicht nur … sondern auch et zwar … aber.", "Im Urlaub mag ich sowohl die Berge als auch das Meer. Ich brauche weder ein großes Hotel noch einen Pool. Eine gute Reise ist für mich nicht nur erholsam, sondern auch interessant. Zelten ist zwar unbequem, aber man ist mitten in der Natur."]
    },
    65: {
      gap: [["Er ist losgefahren, ___ zu tanken.", "ohne"], ["___ den Bus zu nehmen, gehe ich zu Fuß.", "Statt|Anstatt"], ["Ich habe das Ticket gekauft, ___ die Preise zu vergleichen.", "ohne"], ["Fahr nicht los, ohne vorher ___! (anrufen)", "anzurufen"]],
      fix: [["Er ist gegangen, ohne sagen tschüss.", "Er ist gegangen, ohne tschüss zu sagen.", "ohne … zu + infinitive at the end.", "ohne … zu + infinitif à la fin."], ["Statt zu fahren mit dem Auto, nehme ich den Zug.", "Statt mit dem Auto zu fahren, nehme ich den Zug.", "Everything else first, zu + infinitive last.", "Tout le reste d'abord, zu + infinitif en dernier."]],
      task: ["Write four sentences about travel habits with ohne … zu and statt … zu (for example: packing, booking, getting around).", "Écris quatre phrases sur tes habitudes de voyage avec ohne … zu et statt … zu (par exemple : faire ses bagages, réserver, se déplacer).", "Ich fahre nie in den Urlaub, ohne vorher eine Liste zu schreiben. Statt mit dem Flugzeug zu fliegen, nehme ich lieber den Nachtzug. Ich buche keine Unterkunft, ohne die Bewertungen zu lesen. Und statt in der Stadt Taxi zu fahren, leihe ich mir ein Fahrrad."]
    },
    66: {
      gap: [["Wie ___ es, wenn wir am Samstag fahren?", "wäre"], ["Gute Idee! Das ___ mir gut.", "passt"], ["___ würde ich am Sonntag fahren.", "Lieber", "I'd rather", "je préférerais"], ["Ich kümmere mich ___ die Tickets.", "um"]],
      fix: [["Wie wäre es, wenn wir fahren am Samstag nach Potsdam?", "Wie wäre es, wenn wir am Samstag nach Potsdam fahren?", "wenn: the verb at the end.", "wenn : le verbe à la fin."], ["Das passt mich gut.", "Das passt mir gut.", "jemandem passen: dative mir.", "jemandem passen : datif mir."]],
      task: ["You and a friend are planning a farewell party for a colleague. Write four sentences: two suggestions, a polite refusal, and how you share the tasks.", "Tu organises avec un ami ou une amie une fête de départ pour un collègue. Écris quatre phrases : deux propositions, un refus poli, et la répartition des tâches.", "Wie wäre es, wenn wir die Feier am Freitag im Büro machen? Wir könnten auch einen Kuchen bestellen. Ein Restaurant ist keine so gute Idee, weil es zu teuer ist. Ich kümmere mich um das Geschenk, und du schreibst die Einladung."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "ausflugplanen", lesson: 66, level: "B1", icon: "calendar-days", partner: "Tim", role: "a friend", role_fr: "un ami",
    title: "Planning a day trip", title_fr: "Organiser une excursion",
    setting: "You and your friend Tim want to plan a day trip at the weekend. Decide where, how and when, and who does what.", setting_fr: "Ton ami Tim et toi voulez organiser une excursion le week-end. Décidez où, comment et quand, et qui fait quoi.",
    turns: [
      { p: "Also, was machen wir am Wochenende? Hast du eine Idee?", en: "So, what shall we do at the weekend? Do you have an idea?", fr: "Alors, on fait quoi ce week-end ? Tu as une idée ?" },
      { y: ["Wie wäre es, wenn wir nach Potsdam fahren? Die Schlösser sind toll.", "Wie wäre es, wenn wir fahren nach Potsdam? Die Schlösser sind toll.", "Wie würde es, wenn wir nach Potsdam fahren? Die Schlösser sind toll."], en: "How about going to Potsdam? The palaces are great.", fr: "Et si on allait à Potsdam ? Les châteaux sont superbes.", why: "Wie wäre es, wenn … + verb at the end.", why_fr: "Wie wäre es, wenn … + verbe à la fin." },
      { p: "Gute Idee! Fahren wir mit dem Auto?", en: "Good idea! Shall we go by car?", fr: "Bonne idée ! On y va en voiture ?" },
      { y: ["Lieber nicht. Am Wochenende gibt es oft Stau. Wir könnten entweder den Zug oder die S-Bahn nehmen.", "Lieber nicht. Am Wochenende gibt es oft Stau. Wir könnten entweder den Zug noch die S-Bahn nehmen.", "Lieber nicht. Am Wochenende gibt es oft Stau. Wir könnten weder den Zug oder die S-Bahn nehmen."], en: "Better not. There are often traffic jams at the weekend. We could take either the train or the S-Bahn.", fr: "Plutôt pas. Le week-end, il y a souvent des bouchons. On pourrait prendre le train ou le RER.", why: "entweder … oder.", why_fr: "entweder … oder." },
      { p: "Stimmt. Samstag oder Sonntag?", en: "True. Saturday or Sunday?", fr: "C'est vrai. Samedi ou dimanche ?" },
      { y: ["Samstag passt mir leider nicht, da arbeite ich. Lieber würde ich am Sonntag fahren.", "Samstag passt mich leider nicht, da arbeite ich. Lieber würde ich am Sonntag fahren.", "Samstag passt mir leider nicht, da ich arbeite. Lieber würde ich am Sonntag fahren."], en: "Unfortunately Saturday doesn't suit me, I'm working. I'd rather go on Sunday.", fr: "Samedi, ça ne m'arrange pas, je travaille. Je préférerais y aller dimanche.", why: "jemandem passen (dative); da = then, there (main clause, verb second).", why_fr: "jemandem passen (datif) ; ici da = ce jour-là (principale, verbe en deuxième position)." },
      { p: "Okay, Sonntag. Sollen wir dort essen gehen oder etwas mitnehmen?", en: "OK, Sunday. Shall we eat out there or take something with us?", fr: "D'accord, dimanche. On mange sur place ou on emporte quelque chose ?" },
      { y: ["Statt im Restaurant zu essen, könnten wir ein Picknick im Park machen.", "Statt im Restaurant essen, könnten wir ein Picknick im Park machen.", "Statt zu im Restaurant essen, könnten wir ein Picknick im Park machen."], en: "Instead of eating in a restaurant, we could have a picnic in the park.", fr: "Au lieu de manger au restaurant, on pourrait pique-niquer dans le parc.", why: "statt … zu + infinitive at the end.", why_fr: "statt … zu + infinitif à la fin." },
      { p: "Super! Wer kümmert sich um was?", en: "Great! Who takes care of what?", fr: "Super ! Qui s'occupe de quoi ?" },
      { y: ["Ich kümmere mich um die Tickets, und du bringst die Brote mit. Also, dann machen wir es so!", "Ich kümmere mich für die Tickets, und du bringst die Brote mit. Also, dann machen wir es so!", "Ich kümmere mich um die Tickets, und du mitbringst die Brote. Also, dann machen wir es so!"], en: "I'll take care of the tickets and you bring the sandwiches. Right, let's do it like that!", fr: "Je m'occupe des billets, et toi, tu apportes les sandwichs. Bon, on fait comme ça !", why: "sich kümmern um; separable verb: bringst … mit.", why_fr: "sich kümmern um ; verbe séparable : bringst … mit." }
    ] },
  { id: "mitfahren", lesson: 64, level: "B1", icon: "car", partner: "Sandra", role: "a driver offering a lift online", role_fr: "une conductrice qui propose un covoiturage",
    title: "A car share to Leipzig", title_fr: "Un covoiturage pour Leipzig",
    setting: "You need to get from Berlin to Leipzig on Friday. You call Sandra, who offers a lift on a car-sharing website.", setting_fr: "Tu dois aller de Berlin à Leipzig vendredi. Tu appelles Sandra, qui propose un trajet sur un site de covoiturage.",
    turns: [
      { p: "Hallo, hier ist Sandra. Du rufst wegen der Fahrt nach Leipzig an?", en: "Hello, it's Sandra. You're calling about the ride to Leipzig?", fr: "Allô, c'est Sandra. Tu appelles pour le trajet vers Leipzig ?" },
      { y: ["Ja, genau. Ist noch ein Platz frei? Ich habe sowohl einen Koffer als auch einen Rucksack.", "Ja, genau. Ist noch ein Platz frei? Ich habe sowohl einen Koffer und auch einen Rucksack.", "Ja, genau. Ist noch ein Platz frei? Ich habe weder einen Koffer als auch einen Rucksack."], en: "Yes, exactly. Is there still a seat free? I've got both a suitcase and a rucksack.", fr: "Oui, c'est ça. Il reste une place ? J'ai à la fois une valise et un sac à dos.", why: "sowohl … als auch.", why_fr: "sowohl … als auch." },
      { p: "Ja, das passt. Der Kofferraum ist zwar klein, aber für zwei Taschen reicht es.", en: "Yes, that's fine. The boot is admittedly small, but it's enough for two bags.", fr: "Oui, ça va. Le coffre est petit, certes, mais il suffit pour deux sacs." },
      { y: ["Super. Wo und wann fährst du los?", "Super. Wo und wann losfährst du?", "Super. Wo und wann fährst du ab los?"], en: "Great. Where and when are you leaving?", fr: "Super. Tu pars d'où et à quelle heure ?", why: "Separable verb: fährst … los.", why_fr: "Verbe séparable : fährst … los." },
      { p: "Um 17 Uhr am Ostbahnhof. Ich fahre nicht nur pünktlich los, sondern warte auch nicht lange.", en: "At 5 pm at the Ostbahnhof. I don't just leave on time, I don't wait long either.", fr: "À 17 heures à l'Ostbahnhof. Non seulement je pars à l'heure, mais en plus je n'attends pas longtemps." },
      { y: ["Kein Problem, ich bin bestimmt pünktlich. Ich komme lieber zu früh, statt dich warten zu lassen.", "Kein Problem, ich bin bestimmt pünktlich. Ich komme lieber zu früh, statt dich zu warten lassen.", "Kein Problem, ich bin bestimmt pünktlich. Ich komme lieber zu früh, ohne dich warten lassen."], en: "No problem, I'll definitely be on time. I'd rather come too early than keep you waiting.", fr: "Pas de problème, je serai à l'heure. Je préfère arriver en avance plutôt que de te faire attendre.", why: "statt … zu: zu before the last verb (warten zu lassen).", why_fr: "statt … zu : zu devant le dernier verbe (warten zu lassen)." },
      { p: "Prima. Die Fahrt kostet fünfzehn Euro. Kannst du bar zahlen?", en: "Great. The ride costs fifteen euros. Can you pay cash?", fr: "Parfait. Le trajet coûte quinze euros. Tu peux payer en liquide ?" },
      { y: ["Ja, klar. Entweder zahle ich bar, oder ich überweise es dir vorher.", "Ja, klar. Entweder zahle ich bar, noch ich überweise es dir vorher.", "Ja, klar. Entweder ich zahle bar, oder überweise ich es dir vorher es."], en: "Yes, of course. Either I'll pay cash, or I'll transfer it to you beforehand.", fr: "Oui, bien sûr. Soit je paie en liquide, soit je te fais un virement avant.", why: "entweder … oder; after oder, normal word order.", why_fr: "entweder … oder ; après oder, ordre normal." },
      { p: "Bar ist einfacher. Dann bis Freitag!", en: "Cash is easier. See you on Friday, then!", fr: "En liquide, c'est plus simple. À vendredi, alors !" },
      { y: ["Bis Freitag! Und danke, dass ich mitfahren darf.", "Bis Freitag! Und danke, dass ich darf mitfahren.", "Bis Freitag! Und danke, dass ich mitfahren dürfe."], en: "See you Friday! And thanks for letting me come along.", fr: "À vendredi ! Et merci de me prendre avec toi.", why: "dass: the modal verb at the very end.", why_fr: "dass : le verbe de modalité tout à la fin." }
    ] }
  );

  W.READINGS.push({
    id: "autobahn", level: "B1", icon: "book-open", title: "Autofahren in Deutschland", genre: "Explainer",
    intro: "No speed limit? Not quite. What every driver in Germany should know about the motorway.",
    intro_fr: "Pas de limitation de vitesse ? Pas tout à fait. Ce que tout conducteur en Allemagne doit savoir sur l'autoroute.",
    paragraphs: [
      { de: "Deutschland hat ungefähr 13.000 Kilometer Autobahn. Auf vielen Abschnitten gibt es kein allgemeines Tempolimit. Das heißt aber nicht, dass man so schnell fahren darf, wie man will: Seit 1978 gilt eine Richtgeschwindigkeit von 130 Kilometern pro Stunde. Sie ist zwar keine Pflicht, aber eine klare Empfehlung.", en: "Germany has about 13,000 kilometres of motorway. On many sections there is no general speed limit. But that doesn't mean you can drive as fast as you like: since 1978 there has been a recommended speed of 130 kilometres an hour. It's admittedly not compulsory, but it's a clear recommendation.", fr: "L'Allemagne compte environ 13 000 kilomètres d'autoroutes. Sur beaucoup de tronçons, il n'y a pas de limitation générale de vitesse. Cela ne veut pas dire qu'on peut rouler aussi vite qu'on veut : depuis 1978, une vitesse recommandée de 130 kilomètres à l'heure s'applique. Elle n'est certes pas obligatoire, mais c'est une recommandation claire." },
      { de: "Außerdem gibt es viele Strecken mit Tempolimit, zum Beispiel an Baustellen, in der Nähe von Städten oder an gefährlichen Stellen. Für Lkw gilt auf der Autobahn sowieso eine Höchstgeschwindigkeit von 80 Kilometern pro Stunde.", en: "There are also many stretches with a speed limit, for example at roadworks, near towns or at dangerous points. For lorries, there's a maximum speed of 80 kilometres an hour on the motorway anyway.", fr: "Il existe en outre beaucoup de portions limitées, par exemple au niveau des travaux, près des villes ou aux endroits dangereux. Pour les poids lourds, la vitesse maximale sur l'autoroute est de toute façon de 80 kilomètres à l'heure." },
      { de: "Eine wichtige Regel betrifft den Stau: Sobald der Verkehr stockt, müssen alle Autos eine Rettungsgasse bilden. Wer auf der linken Spur fährt, fährt nach links, alle anderen nach rechts. So kommen Krankenwagen und Feuerwehr schnell durch, ohne Zeit zu verlieren.", en: "One important rule concerns traffic jams: as soon as traffic slows to a halt, all cars must form an emergency corridor. Whoever is in the left lane moves to the left; everyone else moves to the right. That way ambulances and the fire brigade get through quickly, without losing time.", fr: "Une règle importante concerne les bouchons : dès que la circulation ralentit fortement, toutes les voitures doivent former un couloir de secours. Ceux qui roulent sur la voie de gauche se décalent à gauche, tous les autres à droite. Ainsi, ambulances et pompiers passent rapidement, sans perdre de temps." },
      { de: "Und wer am Sonntag auf der Autobahn fährt, wird sich vielleicht wundern: Es gibt kaum Lkw. Für Lastwagen über 7,5 Tonnen gilt nämlich ein Sonntagsfahrverbot. Für Reisende ist das zwar angenehm, aber die Rastplätze sind am Sonntagabend oft voller Lkw, die auf Montag warten.", en: "And anyone driving on the motorway on a Sunday may be surprised: there are hardly any lorries. That's because lorries over 7.5 tonnes are banned from driving on Sundays. For travellers that's admittedly pleasant, but on Sunday evenings the rest areas are often full of lorries waiting for Monday.", fr: "Et en roulant sur l'autoroute un dimanche, on sera peut-être surpris : il n'y a presque pas de poids lourds. Les camions de plus de 7,5 tonnes ont en effet interdiction de circuler le dimanche. C'est certes agréable pour les voyageurs, mais le dimanche soir, les aires de repos sont souvent pleines de camions qui attendent le lundi." }
    ],
    glossary: { "Abschnitten": ["sections", "tronçons"], "allgemeines": ["general", "général"], "Richtgeschwindigkeit": ["recommended speed", "vitesse recommandée"], "Empfehlung": ["recommendation", "recommandation"], "Strecken": ["stretches, routes", "portions, trajets"], "Stellen": ["places, spots", "endroits"], "gefährlichen": ["dangerous", "dangereux"], "sowieso": ["anyway", "de toute façon"], "Höchstgeschwindigkeit": ["maximum speed", "vitesse maximale"], "betrifft": ["concerns", "concerne"], "sobald": ["as soon as", "dès que"], "stockt": ["comes to a standstill, slows", "ralentit, se bloque"], "Rettungsgasse": ["emergency corridor", "couloir de secours"], "bilden": ["to form", "former"], "Krankenwagen": ["ambulance", "ambulance"], "Feuerwehr": ["fire brigade", "pompiers"], "wundern": ["(sich wundern) to be surprised", "(sich wundern) s'étonner"], "kaum": ["hardly", "à peine, presque pas"], "Lastwagen": ["lorries", "camions"], "Tonnen": ["tonnes", "tonnes"], "Sonntagsfahrverbot": ["Sunday driving ban", "interdiction de circuler le dimanche"], "Reisende": ["travellers", "voyageurs"], "angenehm": ["pleasant", "agréable"], "Rastplätze": ["rest areas", "aires de repos"] },
    questions: [
      { q: "Wie lang ist das deutsche Autobahnnetz ungefähr?", o: ["13.000 Kilometer", "1.300 Kilometer", "130.000 Kilometer"], a: 0 },
      { q: "Was ist die Richtgeschwindigkeit seit 1978?", o: ["130 km/h", "100 km/h", "200 km/h"], a: 0 },
      { q: "Wie schnell dürfen Lkw auf der Autobahn höchstens fahren?", o: ["80 km/h", "130 km/h", "Es gibt keine Grenze."], a: 0 },
      { q: "Was müssen Autos im Stau bilden?", o: ["Eine Rettungsgasse", "Eine Schlange auf der rechten Spur", "Einen Kreis"], a: 0 },
      { q: "Warum fahren am Sonntag kaum Lkw?", o: ["Für Lastwagen über 7,5 Tonnen gilt ein Sonntagsfahrverbot.", "Die Fahrer haben Urlaub.", "Die Autobahn ist geschlossen."], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-b1-8", unit: "b1-8", level: "B1", icon: "messages-square",
    title: "Durchsage am Bahnhof", title_fr: "Annonce à la gare",
    context: "Ines and Malte are waiting for their train to Hamburg when an announcement comes over the loudspeaker.", context_fr: "Ines et Malte attendent leur train pour Hambourg quand une annonce retentit.",
    words: [["das Gleis", "the platform, the track", "la voie, le quai"], ["die Störung", "the fault, the disruption", "la perturbation, la panne"], ["die Weiterfahrt", "the onward journey", "la suite du trajet"], ["gültig", "valid", "valable"], ["die Ersatzverbindung", "the alternative connection", "la correspondance de remplacement"]],
    lines: [["Durchsage", "Achtung an Gleis 7: Der ICE nach Hamburg, Abfahrt 10 Uhr 12, hat heute circa vierzig Minuten Verspätung. Grund dafür ist eine Störung an einem anderen Zug. Wir bitten um Entschuldigung.", "de-DE"], ["Ines", "Vierzig Minuten! Dann verpassen wir in Hamburg unseren Anschluss nach Kiel.", "de-DE"], ["Malte", "Entweder warten wir, oder wir nehmen den Regionalzug um 10 Uhr 20. Der fährt zwar langsamer, aber er fährt jetzt.", "de-DE"], ["Ines", "Gilt unser Ticket denn auch für den Regionalzug?", "de-DE"], ["Malte", "Ich glaube, bei so einer Verspätung schon. Statt hier zu raten, frage ich lieber am Schalter.", "de-DE"], ["Ines", "Gute Idee. Ich hole uns in der Zeit zwei Kaffee, ohne den Zug aus den Augen zu lassen.", "de-DE"], ["Durchsage", "Information für Reisende nach Kiel: Bitte nutzen Sie die Ersatzverbindung ab Gleis 3, Abfahrt 10 Uhr 20.", "de-DE"], ["Malte", "Da haben wir unsere Antwort! Schnell, Gleis 3!", "de-DE"]],
    gist: ["Was ist das Problem?", ["Der ICE nach Hamburg hat Verspätung.", "Der Zug ist zu voll.", "Ines hat ihr Ticket verloren."]],
    detail: [["Wie viel Verspätung hat der ICE?", ["Circa vierzig Minuten", "Zehn Minuten", "Zwei Stunden"]], ["Wohin wollen Ines und Malte eigentlich weiterfahren?", ["Nach Kiel", "Nach Berlin", "Nach Bremen"]], ["Was schlägt Malte vor?", ["Entweder warten oder den Regionalzug nehmen", "Mit dem Auto fahren", "Im Hotel übernachten"]], ["Von welchem Gleis fährt die Ersatzverbindung?", ["Gleis 3", "Gleis 7", "Gleis 10"]]],
    decode: ["hat heute circa vierzig Minuten Verspätung", "Statt hier zu raten, frage ich lieber am Schalter."],
    tip: "Station announcements always follow the same order: platform, train, destination, departure time, then the change (Verspätung, fällt aus, Gleiswechsel) and the reason. Listen first for the platform number and the change.", tip_fr: "Les annonces en gare suivent toujours le même ordre : voie, train, destination, heure de départ, puis le changement (Verspätung, fällt aus, Gleiswechsel) et la raison. Écoute d'abord le numéro de voie et le changement."
  }]);

  W.PROMPTS.push({ id: "de-b1-8", level: "B1", q: "Wie reist du am liebsten: mit dem Auto, dem Zug, dem Flugzeug oder dem Fahrrad? Begründe deine Wahl.", en: "How do you like to travel best: by car, train, plane or bike? Give reasons for your choice.", fr: "Comment préfères-tu voyager : en voiture, en train, en avion ou à vélo ? Justifie ton choix.", time: 120,
    phrases: ["Am liebsten reise ich mit…", "…, weil…", "Das ist zwar…, aber…", "Nicht nur…, sondern auch…", "Statt … zu …"],
    model: "Am liebsten reise ich mit dem Zug. Er ist zwar manchmal unpünktlich, aber ich kann unterwegs lesen, arbeiten oder einfach aus dem Fenster schauen. Mit dem Auto steht man in den Ferien oft im Stau, und Fliegen ist nicht nur teuer, sondern auch schlecht für die Umwelt. Statt mit dem Flugzeug nach Italien zu fliegen, habe ich letztes Jahr den Nachtzug genommen. Ich bin entspannt angekommen, ohne einen Tag zu verlieren." });

  W.WRITING_GUIDE["b1-8"] = { genre: "A personal email with directions (Goethe B1, writing part 1)", genre_fr: "Un e-mail personnel pour indiquer le chemin (Goethe B1, écrit partie 1)",
    plan: [["React to your friend's visit.", "Réagis à la visite de ton ami ou de ton amie."], ["The ways to come (entweder … oder).", "Les façons de venir (entweder … oder)."], ["Compare them (zwar … aber, nicht nur … sondern auch).", "Compare-les (zwar … aber, nicht nur … sondern auch)."], ["The last part of the way.", "La fin du trajet."], ["A practical request (ohne … zu), and goodbye.", "Une demande pratique (ohne … zu), et au revoir."]],
    marks: [["entweder mit dem Zug oder mit dem Fernbus", "entweder … oder", "entweder … oder"], ["zwar teurer, aber", "zwar … aber", "zwar … aber"], ["nicht nur schneller, sondern auch bequemer", "nicht nur … sondern auch", "nicht nur … sondern auch"], ["Statt dort zu warten", "statt … zu", "statt … zu"], ["ohne mir deine Ankunftszeit zu schreiben", "ohne … zu", "ohne … zu"], ["hole dich ab", "a separable verb", "un verbe séparable"]] };

  W.COURSE.push({ id: "b1-8", level: "B1", icon: "car", title: "Travel and transport", title_fr: "Voyages et transports",
    intro: "In this unit, you'll talk about getting around: two-part connectors (entweder … oder, weder … noch, sowohl … als auch, nicht nur … sondern auch, zwar … aber), infinitive clauses with ohne … zu and statt … zu, and how to plan something together, as in part 1 of the Goethe B1 speaking exam. And you'll learn what every driver should know about the German Autobahn.",
    intro_fr: "Dans cette unité, tu vas parler de déplacements : les connecteurs doubles (entweder … oder, weder … noch, sowohl … als auch, nicht nur … sondern auch, zwar … aber), les propositions infinitives avec ohne … zu et statt … zu, et comment organiser quelque chose ensemble, comme à la partie 1 de l'oral du Goethe B1. Et tu découvriras ce que tout conducteur doit savoir sur l'autoroute allemande.",
    can: ["Use two-part connectors to compare and combine ideas", "Say what you do without or instead of something (ohne / statt … zu)", "Understand station announcements and travel problems", "Plan an outing with someone: suggest, accept, refuse, agree (Goethe B1)", "Write a personal email explaining how to get somewhere"],
    can_fr: ["Employer les connecteurs doubles pour comparer et combiner des idées", "Dire ce que tu fais sans ou au lieu de quelque chose (ohne / statt … zu)", "Comprendre les annonces en gare et les problèmes de voyage", "Organiser une sortie avec quelqu'un : proposer, accepter, refuser, se mettre d'accord (Goethe B1)", "Écrire un e-mail personnel pour expliquer un trajet"],
    lessons: [64, 65, 66], vocab: ["verkehrDE", "unterwegsDE"], reading: "autobahn", prompt: "de-b1-8",
    writing: { task: "Your friend Sophie is coming to visit you next weekend. Write her an email (80-100 words): explain how she can come (two options), compare them, describe the last part of the way, and ask her to send you her arrival time.", task_fr: "Ton amie Sophie vient te voir le week-end prochain. Écris-lui un e-mail (80 à 100 mots) : explique comment elle peut venir (deux possibilités), compare-les, décris la fin du trajet, et demande-lui de t'envoyer son heure d'arrivée.", words: "80-100",
      tips: ["Liebe Sophie,", "Du kannst entweder … oder …", "… ist zwar …, aber …", "nicht nur …, sondern auch …", "Fahr nicht los, ohne … zu …", "Bis bald"],
      checklist: ["I explained two ways to come", "I used entweder … oder and zwar … aber", "I used nicht nur … sondern auch", "I used ohne … zu or statt … zu", "I wrote between 80 and 100 words"],
      checklist_fr: ["J'ai expliqué deux façons de venir", "J'ai employé entweder … oder et zwar … aber", "J'ai employé nicht nur … sondern auch", "J'ai employé ohne … zu ou statt … zu", "J'ai écrit entre 80 et 100 mots"],
      model: "Liebe Sophie,\n\nich freue mich sehr, dass du mich nächstes Wochenende besuchst! Du kannst entweder mit dem Zug oder mit dem Fernbus kommen. Der Zug ist zwar teurer, aber er ist nicht nur schneller, sondern auch bequemer. Am Hauptbahnhof nimmst du die Straßenbahn Linie 4 bis zur Haltestelle „Rosenplatz“. Statt dort zu warten, ruf mich einfach an: Ich wohne nur fünf Minuten entfernt und hole dich ab. Fahr bitte nicht los, ohne mir deine Ankunftszeit zu schreiben!\n\nBis bald\nRobin" } });
})();
