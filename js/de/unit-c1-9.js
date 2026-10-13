/* Cours d'allemand, unité C1-9 « Memory and history / Mémoire et histoire » : verbes et adjectifs suivis du génitif
   (gedenken, bedürfen, sich bedienen, sich enthalten, beschuldigen ; sich bewusst, würdig, mächtig, überdrüssig),
   le Konjunktiv I dans les tournures figées (Es sei daran erinnert, Man nehme, sei es … sei es, koste es, was es
   wolle, wie dem auch sei, Möge…), mener un entretien avec un témoin de l'époque (Zeitzeugengespräch).
   Personnages fictifs, prénoms allemands.
   Faits vérifiables seulement : les Stolpersteine sont une idée de l'artiste Gunter Demnig, né en 1947 à Berlin ;
   premiers pavés posés au milieu des années 1990, d'abord sans autorisation ; cube de béton de 10 × 10 cm couvert
   d'une plaque de laiton (« Hier wohnte… »), posé devant le dernier domicile librement choisi d'une victime du
   nazisme ; le 100 000e pavé a été posé à Nuremberg en mai 2023 ; souvent présenté comme le plus grand mémorial
   décentralisé du monde ; critiques (on marcherait sur les noms des victimes), le conseil municipal de Munich a
   décidé de ne pas les autoriser sur le domaine public, la ville a créé à la place des « Erinnerungszeichen ».
   Mur de Berlin : construit le 13 août 1961, ouvert le 9 novembre 1989 (passage de la Bornholmer Straße ouvert peu
   avant minuit) ; Leipzig, 9 octobre 1989 : grande manifestation du lundi restée pacifique, « Wir sind das Volk ! » ;
   Auschwitz libéré le 27 janvier 1945 ; Allemagne divisée de 1949 à 1990. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "gedenkkulturDE", icon: "flower", title: "Remembrance", title_fr: "Le travail de mémoire", level: "C1", words: [
    ["das Gedächtnis", "memory", "la mémoire", "Das kollektive Gedächtnis eines Landes verändert sich mit der Zeit."],
    ["gedenken (+ Genitiv)", "to commemorate", "commémorer, rendre hommage à", "Heute gedenken wir der Opfer."],
    ["die Gedenkstätte, -n", "the memorial site", "le lieu de mémoire, le mémorial", "Die Klasse besuchte eine Gedenkstätte."],
    ["das Mahnmal, -e", "the memorial (as a warning)", "le monument commémoratif", "Das Mahnmal erinnert an die Opfer des Krieges."],
    ["der Zeitzeuge, -n (die Zeitzeugin)", "the contemporary witness", "le témoin de l'époque", "Ein Zeitzeuge erzählte von seiner Kindheit im Krieg."],
    ["die Aufarbeitung", "coming to terms with (the past)", "le travail de mémoire", "Die Aufarbeitung der Vergangenheit dauert Jahrzehnte."],
    ["das Opfer, -", "the victim; the sacrifice", "la victime ; le sacrifice", "Die Namen der Opfer stehen auf einer Tafel."],
    ["der Täter, - (die Täterin)", "the perpetrator", "l'auteur (d'un crime), le coupable", "Viele Täter wurden nie verurteilt."],
    ["verdrängen", "to repress, to push aside", "refouler", "Lange wollten viele die Vergangenheit verdrängen."],
    ["die Versöhnung", "reconciliation", "la réconciliation", "Die deutsch-französische Versöhnung gilt vielen als Vorbild."],
    ["die Schuld", "guilt; debt", "la culpabilité ; la dette", "Er sprach offen über die Schuld seiner Generation."],
    ["der Mitläufer, - (die Mitläuferin)", "the follower, the fellow traveller", "le suiveur, le sympathisant passif", "Er war kein Täter, aber ein Mitläufer."],
    ["der Jahrestag, -e", "the anniversary", "l'anniversaire (d'un événement)", "Zum Jahrestag des Mauerfalls kamen viele Menschen nach Berlin."],
    ["bewahren", "to preserve", "préserver, conserver", "Wir müssen die Erinnerung bewahren."],
    ["mahnen", "to warn, to admonish", "exhorter, avertir", "Das Denkmal mahnt uns, wachsam zu bleiben."],
    ["der Überlebende, -n (die Überlebende)", "the survivor", "le survivant, la survivante", "Die letzten Überlebenden berichten an Schulen."]
  ] },
  { id: "zeitgeschichteDE", icon: "landmark", title: "Contemporary history", title_fr: "L'histoire contemporaine", level: "C1", words: [
    ["die Zeitgeschichte", "contemporary history", "l'histoire contemporaine", "Sie studiert Zeitgeschichte an der Universität."],
    ["die Diktatur, -en", "the dictatorship", "la dictature", "Das Land lebte jahrzehntelang in einer Diktatur."],
    ["die Verfolgung, -en", "persecution", "la persécution", "Viele flohen vor der Verfolgung ins Ausland."],
    ["der Widerstand", "resistance", "la résistance", "Nur wenige leisteten Widerstand."],
    ["die Flucht", "escape, flight", "la fuite", "Ihre Flucht über die Berge dauerte drei Wochen."],
    ["die Vertreibung, -en", "expulsion", "l'expulsion", "Nach dem Krieg erlebten Millionen Menschen Flucht und Vertreibung."],
    ["der Mauerfall", "the fall of the Berlin Wall", "la chute du Mur", "Der Mauerfall am 9. November 1989 überraschte die ganze Welt."],
    ["die Teilung", "the division", "la division", "Die Teilung Deutschlands dauerte von 1949 bis 1990."],
    ["die Nachkriegszeit", "the post-war period", "l'après-guerre", "In der Nachkriegszeit fehlte es an fast allem."],
    ["das Kriegsende", "the end of the war", "la fin de la guerre", "Ihr Vater kam erst Jahre nach Kriegsende nach Hause."],
    ["die Befreiung", "the liberation", "la libération", "Am 27. Januar 1945 wurde das Lager Auschwitz befreit; an diese Befreiung erinnert heute ein Gedenktag."],
    ["die Besatzung", "the occupation", "l'occupation", "Die Besatzung durch die Alliierten begann 1945."],
    ["der Umbruch, ¨-e", "the upheaval, radical change", "le bouleversement", "1989 war ein Jahr des Umbruchs in ganz Osteuropa."],
    ["die Wende", "the turning point (the end of the GDR in 1989-90)", "le tournant (la fin de la RDA en 1989-1990)", "Nach der Wende zog sie von Leipzig nach Köln."],
    ["das Exil", "exile", "l'exil", "Viele Schriftsteller gingen nach 1933 ins Exil."],
    ["deportieren", "to deport", "déporter", "Die Familie wurde 1942 deportiert."]
  ] });

  W.LESSONS.push(
  {
    id: 127, level: "C1", icon: "flower",
    title: "Wir gedenken der Opfer: verbs and adjectives with the genitive", title_fr: "Wir gedenken der Opfer : verbes et adjectifs suivis du génitif",
    subtitle: "The genitive objects of formal German: in speeches, in the press and in the law.", subtitle_fr: "Les compléments au génitif de l'allemand soutenu : dans les discours, la presse et le droit.",
    body: `
<h2>Verbs with a genitive object</h2>
<table>
<tr><th>Verb</th><th>Example</th></tr>
<tr><td><s-de>gedenken</s-de></td><td><s-de>Wir gedenken der Opfer.</s-de></td></tr>
<tr><td><s-de>bedürfen</s-de></td><td><s-de>Das bedarf keiner Erklärung.</s-de></td></tr>
<tr><td><s-de>sich bedienen</s-de></td><td><s-de>Sie bediente sich eines Tricks.</s-de></td></tr>
<tr><td><s-de>sich enthalten</s-de></td><td><s-de>Drei Abgeordnete enthielten sich der Stimme.</s-de></td></tr>
<tr><td><s-de>jemanden beschuldigen / anklagen / verdächtigen</s-de></td><td><s-de>Man beschuldigte ihn des Diebstahls.</s-de></td></tr>
</table>
<h2>Adjectives with the genitive</h2>
<p>They usually come after the genitive: <s-de>sich einer Sache bewusst sein</s-de> (to be aware of), <s-de>sich seiner Sache sicher sein</s-de> (to be sure of), <s-de>eines Preises würdig</s-de> (worthy of), <s-de>des Mordes schuldig</s-de> (guilty of), <s-de>der Sprache mächtig</s-de> (in command of), <s-de>des Wartens überdrüssig</s-de> (tired of).</p>
<div class="tip">In everyday speech, many of these are replaced: <s-de>Das braucht keine Erklärung.</s-de> But <s-de>gedenken</s-de>, <s-de>sich bewusst sein</s-de> and the legal verbs keep the genitive, even in conversation. In a C1 text or a speech, the genitive is a clear sign of a formal register.</div>
`,
    body_fr: `
<h2>Les verbes suivis d'un complément au génitif</h2>
<table>
<tr><th>Verbe</th><th>Exemple</th></tr>
<tr><td><s-de>gedenken</s-de></td><td><s-de>Wir gedenken der Opfer.</s-de> (Nous rendons hommage aux victimes.)</td></tr>
<tr><td><s-de>bedürfen</s-de></td><td><s-de>Das bedarf keiner Erklärung.</s-de> (Cela se passe d'explication.)</td></tr>
<tr><td><s-de>sich bedienen</s-de></td><td><s-de>Sie bediente sich eines Tricks.</s-de></td></tr>
<tr><td><s-de>sich enthalten</s-de></td><td><s-de>Drei Abgeordnete enthielten sich der Stimme.</s-de></td></tr>
<tr><td><s-de>jemanden beschuldigen / anklagen / verdächtigen</s-de></td><td><s-de>Man beschuldigte ihn des Diebstahls.</s-de></td></tr>
</table>
<h2>Les adjectifs suivis du génitif</h2>
<p>Ils se placent en général après le génitif : <s-de>sich einer Sache bewusst sein</s-de> (être conscient de quelque chose), <s-de>sich seiner Sache sicher sein</s-de> (être sûr de son fait), <s-de>eines Preises würdig</s-de> (digne d'un prix), <s-de>des Mordes schuldig</s-de> (coupable de meurtre), <s-de>der Sprache mächtig</s-de> (maîtrisant la langue), <s-de>des Wartens überdrüssig</s-de> (las d'attendre).</p>
<div class="tip">À l'oral courant, beaucoup sont remplacés : <s-de>Das braucht keine Erklärung.</s-de> Mais <s-de>gedenken</s-de>, <s-de>sich bewusst sein</s-de> et les verbes juridiques gardent le génitif, même dans la conversation. Dans un texte C1 ou un discours, le génitif signale clairement un registre soutenu.</div>
`,
    examples: [
      ["Am Jahrestag gedenken wir der Opfer.", "On the anniversary, we commemorate the victims.", "Le jour anniversaire, nous rendons hommage aux victimes."],
      ["Das bedarf keiner weiteren Erklärung.", "That needs no further explanation.", "Cela se passe de toute autre explication."],
      ["Die Rednerin bediente sich eines bekannten Zitats.", "The speaker made use of a well-known quotation.", "L'oratrice se servit d'une citation connue."],
      ["Drei Abgeordnete enthielten sich der Stimme.", "Three MPs abstained.", "Trois députés se sont abstenus."],
      ["Man beschuldigte ihn des Diebstahls.", "He was accused of theft.", "On l'accusa de vol."],
      ["Sie war sich der Gefahr durchaus bewusst.", "She was well aware of the danger.", "Elle était tout à fait consciente du danger."],
      ["Er ist der deutschen Sprache mächtig.", "He has a good command of German.", "Il maîtrise la langue allemande."]
    ],
    quiz: [
      { q: "Wir gedenken ___ Opfer.", q_fr: "Wir gedenken ___ Opfer.", o: ["der", "den", "die"], a: 0, ex: "gedenken + genitive plural: der Opfer.", ex_fr: "gedenken + génitif pluriel : der Opfer." },
      { q: "Das bedarf ___ Erklärung.", q_fr: "Das bedarf ___ Erklärung.", o: ["keiner", "keine", "keinen"], a: 0, ex: "bedürfen + genitive: keiner Erklärung.", ex_fr: "bedürfen + génitif : keiner Erklärung." },
      { q: "Sie war sich ___ Risikos bewusst.", q_fr: "Sie war sich ___ Risikos bewusst.", o: ["des", "dem", "das"], a: 0, ex: "sich + genitive + bewusst sein.", ex_fr: "sich + génitif + bewusst sein." },
      { q: "“He was accused of fraud.”", q_fr: "« Il a été accusé de fraude. »", o: ["Er wurde des Betrugs beschuldigt.", "Er wurde dem Betrug beschuldigt.", "Er wurde für den Betrug beschuldigt."], a: 0, ex: "beschuldigen + accusative person + genitive crime.", ex_fr: "beschuldigen + accusatif (personne) + génitif (délit)." },
      { q: "In everyday speech, “Das bedarf keiner Erklärung” often becomes…", q_fr: "À l'oral courant, « Das bedarf keiner Erklärung » devient souvent…", o: ["Das braucht keine Erklärung.", "Das bedarf keine Erklärung.", "Das hat keiner Erklärung."], a: 0, ex: "brauchen + accusative.", ex_fr: "brauchen + accusatif." }
    ]
  },
  {
    id: 128, level: "C1", icon: "quote",
    title: "Es sei daran erinnert: the Konjunktiv I in set phrases", title_fr: "Es sei daran erinnert : le Konjunktiv I dans les tournures figées",
    subtitle: "Wishes, instructions, speeches and concessions: the Konjunktiv I outside reported speech.", subtitle_fr: "Souhaits, instructions, discours et concessions : le Konjunktiv I en dehors du discours indirect.",
    body: `
<h2>Wishes and formulas</h2>
<p><s-de>Es lebe die Freiheit!</s-de> (Long live freedom!) · <s-de>Gott sei Dank!</s-de> · <s-de>Möge sie in Frieden ruhen.</s-de> (May she rest in peace.)</p>
<h2>Instructions</h2>
<p>In old recipes and in textbooks: <s-de>Man nehme 200 Gramm Mehl.</s-de> · <s-de>Man beachte, dass…</s-de> · <s-de>Man bedenke, dass…</s-de> (Bear in mind that…) · <s-de>Gegeben sei ein rechtwinkliges Dreieck.</s-de> (Let there be a right-angled triangle.)</p>
<h2>In speeches and formal texts</h2>
<p><s-de>Es sei daran erinnert, dass…</s-de> (It should be remembered that…) · <s-de>Es sei darauf hingewiesen, dass…</s-de> (It should be pointed out that…) · <s-de>Hier sei nur ein Beispiel genannt.</s-de></p>
<h2>Concession</h2>
<table>
<tr><td><s-de>sei es …, sei es …</s-de></td><td>whether … or …</td></tr>
<tr><td><s-de>koste es, was es wolle</s-de></td><td>whatever it takes</td></tr>
<tr><td><s-de>wie dem auch sei</s-de></td><td>be that as it may</td></tr>
<tr><td><s-de>es sei denn, …</s-de></td><td>unless … (unit B2-6)</td></tr>
</table>
<div class="tip">You won't need many of these in conversation, but you must recognise them in texts. Three are very useful in a C1 essay or talk: <s-de>Es sei daran erinnert, dass…</s-de>, <s-de>Man bedenke, dass…</s-de> and <s-de>Wie dem auch sei, …</s-de></div>
`,
    body_fr: `
<h2>Souhaits et formules</h2>
<p><s-de>Es lebe die Freiheit!</s-de> (Vive la liberté !) · <s-de>Gott sei Dank!</s-de> (Dieu merci !) · <s-de>Möge sie in Frieden ruhen.</s-de> (Qu'elle repose en paix.) Le français emploie ici son subjonctif, exactement comme l'allemand.</p>
<h2>Les instructions</h2>
<p>Dans les vieilles recettes et les manuels : <s-de>Man nehme 200 Gramm Mehl.</s-de> (Prenez 200 grammes de farine.) · <s-de>Man beachte, dass…</s-de> · <s-de>Man bedenke, dass…</s-de> (Qu'on songe que…) · <s-de>Gegeben sei ein rechtwinkliges Dreieck.</s-de> (Soit un triangle rectangle.)</p>
<h2>Dans les discours et les textes soutenus</h2>
<p><s-de>Es sei daran erinnert, dass…</s-de> (Rappelons que…) · <s-de>Es sei darauf hingewiesen, dass…</s-de> (Signalons que…) · <s-de>Hier sei nur ein Beispiel genannt.</s-de> (Citons un seul exemple.)</p>
<h2>La concession</h2>
<table>
<tr><td><s-de>sei es …, sei es …</s-de></td><td>que ce soit … ou …, soit … soit …</td></tr>
<tr><td><s-de>koste es, was es wolle</s-de></td><td>coûte que coûte</td></tr>
<tr><td><s-de>wie dem auch sei</s-de></td><td>quoi qu'il en soit</td></tr>
<tr><td><s-de>es sei denn, …</s-de></td><td>à moins que … (unité B2-6)</td></tr>
</table>
<div class="tip">Tu n'en auras pas souvent besoin à l'oral, mais il faut les reconnaître dans les textes. Trois sont très utiles dans un essai ou un exposé C1 : <s-de>Es sei daran erinnert, dass…</s-de>, <s-de>Man bedenke, dass…</s-de> et <s-de>Wie dem auch sei, …</s-de></div>
`,
    examples: [
      ["Es sei daran erinnert, dass die Mauer 28 Jahre lang stand.", "It should be remembered that the Wall stood for 28 years.", "Rappelons que le Mur est resté debout 28 ans."],
      ["Man bedenke, dass damals niemand das Ende ahnte.", "Bear in mind that nobody foresaw the end at the time.", "Qu'on songe qu'à l'époque, personne ne prévoyait la fin."],
      ["Man nehme 200 Gramm Mehl und zwei Eier.", "Take 200 grams of flour and two eggs.", "Prenez 200 grammes de farine et deux œufs."],
      ["Sei es aus Angst, sei es aus Bequemlichkeit: Viele schwiegen.", "Whether out of fear or out of convenience, many remained silent.", "Que ce soit par peur ou par confort, beaucoup se sont tus."],
      ["Wir finden eine Lösung, koste es, was es wolle.", "We'll find a solution, whatever it takes.", "Nous trouverons une solution, coûte que coûte."],
      ["Wie dem auch sei: Die Entscheidung ist gefallen.", "Be that as it may, the decision has been made.", "Quoi qu'il en soit, la décision est prise."],
      ["Möge diese Gedenkstätte uns immer mahnen.", "May this memorial always remind us.", "Puisse ce mémorial toujours nous mettre en garde."]
    ],
    quiz: [
      { q: "“It should be remembered that…”", q_fr: "« Rappelons que… »", o: ["Es sei daran erinnert, dass…", "Es ist daran erinnert, dass…", "Es wäre daran erinnern, dass…"], a: 0, ex: "Set phrase in the Konjunktiv I.", ex_fr: "Tournure figée au Konjunktiv I." },
      { q: "“Be that as it may…”", q_fr: "« Quoi qu'il en soit… »", o: ["Wie dem auch sei…", "Wie das auch ist…", "Was dem auch sei…"], a: 0, ex: "wie dem auch sei.", ex_fr: "wie dem auch sei." },
      { q: "In an old recipe: “___ 200 Gramm Mehl.”", q_fr: "Dans une vieille recette : « ___ 200 Gramm Mehl. »", o: ["Man nehme", "Man nähme", "Man nimmte"], a: 0, ex: "Konjunktiv I of nehmen: nehme.", ex_fr: "Konjunktiv I de nehmen : nehme." },
      { q: "“whatever it takes”", q_fr: "« coûte que coûte »", o: ["koste es, was es wolle", "kostet es, was es will", "koste es, was es will"], a: 0, ex: "Both verbs in the Konjunktiv I.", ex_fr: "Les deux verbes au Konjunktiv I." },
      { q: "___ aus Angst, ___ aus Bequemlichkeit: Viele schwiegen.", q_fr: "___ aus Angst, ___ aus Bequemlichkeit : Viele schwiegen.", o: ["Sei es … sei es", "Ist es … ist es", "Wäre es … wäre es"], a: 0, ex: "sei es …, sei es … = whether … or …", ex_fr: "sei es …, sei es … = que ce soit … ou …" }
    ]
  },
  {
    id: 129, level: "C1", kind: "functional", icon: "mic",
    title: "Everyday German: interviewing a contemporary witness", title_fr: "L'allemand de tous les jours : interviewer un témoin de l'époque",
    subtitle: "Open questions, follow-up questions, tact, and reporting what you heard.", subtitle_fr: "Questions ouvertes, relances, tact, et compte rendu de ce qu'on a entendu.",
    body: `
<h2>Open questions</h2>
<p><s-de>Wie haben Sie diesen Tag erlebt?</s-de> · <s-de>Woran erinnern Sie sich besonders deutlich?</s-de> · <s-de>Was ging Ihnen damals durch den Kopf?</s-de> · <s-de>Wie hat sich Ihr Leben danach verändert?</s-de></p>
<h2>Following up</h2>
<p><s-de>Können Sie das genauer beschreiben?</s-de> · <s-de>Wie meinen Sie das?</s-de> · <s-de>Sie sagten vorhin, Sie hätten Angst gehabt. Wie…?</s-de></p>
<h2>Tact and respect</h2>
<p><s-de>Das muss sehr schwer für Sie gewesen sein.</s-de> · <s-de>Wenn Sie darüber nicht sprechen möchten, ist das selbstverständlich in Ordnung.</s-de> · <s-de>Vielen Dank, dass Sie Ihre Erinnerungen mit uns teilen.</s-de></p>
<h2>Reporting afterwards</h2>
<p>Use reported speech and keep a little distance: <s-de>Frau Krüger erzählte, sie habe große Angst gehabt.</s-de> · <s-de>Ihrer Erinnerung nach…</s-de> · <s-de>Nach eigener Aussage…</s-de></p>
<div class="tip">Memories are precious but subjective: people mix what they lived through with what they later read or heard. Listen without judging, and when you report, present the account as a personal testimony and check dates and facts in other sources.</div>
`,
    body_fr: `
<h2>Les questions ouvertes</h2>
<p><s-de>Wie haben Sie diesen Tag erlebt?</s-de> (Comment avez-vous vécu cette journée ?) · <s-de>Woran erinnern Sie sich besonders deutlich?</s-de> · <s-de>Was ging Ihnen damals durch den Kopf?</s-de> (Qu'est-ce qui vous passait par la tête ?) · <s-de>Wie hat sich Ihr Leben danach verändert?</s-de></p>
<h2>Les relances</h2>
<p><s-de>Können Sie das genauer beschreiben?</s-de> · <s-de>Wie meinen Sie das?</s-de> · <s-de>Sie sagten vorhin, Sie hätten Angst gehabt. Wie…?</s-de></p>
<h2>Le tact et le respect</h2>
<p><s-de>Das muss sehr schwer für Sie gewesen sein.</s-de> · <s-de>Wenn Sie darüber nicht sprechen möchten, ist das selbstverständlich in Ordnung.</s-de> · <s-de>Vielen Dank, dass Sie Ihre Erinnerungen mit uns teilen.</s-de></p>
<h2>Le compte rendu</h2>
<p>Emploie le discours indirect et garde une certaine distance : <s-de>Frau Krüger erzählte, sie habe große Angst gehabt.</s-de> · <s-de>Ihrer Erinnerung nach…</s-de> (D'après ses souvenirs…) · <s-de>Nach eigener Aussage…</s-de> (De son propre aveu…)</p>
<div class="tip">Les souvenirs sont précieux mais subjectifs : on mêle ce qu'on a vécu à ce qu'on a lu ou entendu plus tard. Écoute sans juger, et dans ton compte rendu, présente le récit comme un témoignage personnel et vérifie les dates et les faits dans d'autres sources.</div>
`,
    examples: [
      ["Wie haben Sie den Herbst 1989 erlebt?", "How did you experience the autumn of 1989?", "Comment avez-vous vécu l'automne 1989 ?"],
      ["Woran erinnern Sie sich besonders deutlich?", "What do you remember most clearly?", "De quoi vous souvenez-vous le plus nettement ?"],
      ["Was ging Ihnen damals durch den Kopf?", "What was going through your mind at the time?", "Qu'est-ce qui vous passait par la tête à ce moment-là ?"],
      ["Können Sie diesen Moment genauer beschreiben?", "Can you describe that moment in more detail?", "Pouvez-vous décrire ce moment plus précisément ?"],
      ["Das muss sehr schwer für Sie gewesen sein.", "That must have been very hard for you.", "Cela a dû être très dur pour vous."],
      ["Vielen Dank, dass Sie Ihre Erinnerungen mit uns teilen.", "Thank you very much for sharing your memories with us.", "Merci beaucoup de partager vos souvenirs avec nous."],
      ["Frau Krüger erzählte, sie habe große Angst gehabt.", "Frau Krüger said she had been very afraid.", "Mme Krüger a raconté qu'elle avait eu très peur."]
    ],
    quiz: [
      { q: "Which is an open question?", q_fr: "Laquelle est une question ouverte ?", o: ["Wie haben Sie diesen Tag erlebt?", "Hatten Sie Angst?", "War das 1989?"], a: 0, ex: "Open questions start with a question word.", ex_fr: "Les questions ouvertes commencent par un mot interrogatif." },
      { q: "“What was going through your mind?”", q_fr: "« Qu'est-ce qui vous passait par la tête ? »", o: ["Was ging Ihnen durch den Kopf?", "Was ging Sie durch den Kopf?", "Was ging Ihnen durch dem Kopf?"], a: 0, ex: "jemandem (dative) durch den Kopf gehen.", ex_fr: "jemandem (datif) durch den Kopf gehen." },
      { q: "A respectful way to react to a painful memory:", q_fr: "Une façon respectueuse de réagir à un souvenir douloureux :", o: ["Das muss sehr schwer für Sie gewesen sein.", "Das ist doch lange her.", "Das glaube ich nicht."], a: 0, ex: "Show empathy without judging.", ex_fr: "Montrer de l'empathie sans juger." },
      { q: "Reporting: “Sie erzählte, sie ___ große Angst gehabt.”", q_fr: "Compte rendu : « Sie erzählte, sie ___ große Angst gehabt. »", o: ["habe", "hat", "hatte gehabt"], a: 0, ex: "Konjunktiv I in reported speech.", ex_fr: "Konjunktiv I au discours indirect." },
      { q: "Why should you check facts after an interview?", q_fr: "Pourquoi vérifier les faits après un entretien ?", o: ["Memories are subjective and can mix things up.", "Witnesses always lie.", "It's forbidden to quote witnesses."], o_fr: ["Les souvenirs sont subjectifs et peuvent mélanger les choses.", "Les témoins mentent toujours.", "Il est interdit de citer des témoins."], a: 0, ex: "Testimony is personal, not a history book.", ex_fr: "Un témoignage est personnel, ce n'est pas un livre d'histoire." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    127: {
      gap: [["Am Jahrestag gedachten die Menschen ___ Opfer.", "der"], ["Das bedarf ___ Erklärung. (kein)", "keiner"], ["Sie war sich ___ Gefahr bewusst.", "der"], ["Er wurde ___ Diebstahls beschuldigt.", "des"]],
      fix: [["Wir gedenken den Opfern.", "Wir gedenken der Opfer.", "gedenken takes the genitive.", "gedenken se construit avec le génitif."], ["Sie war sich die Gefahr bewusst.", "Sie war sich der Gefahr bewusst.", "sich + genitive + bewusst sein.", "sich + génitif + bewusst sein."]],
      task: ["Write four sentences about a commemoration using gedenken, bedürfen, sich bewusst sein and sich enthalten.", "Écris quatre phrases sur une commémoration avec gedenken, bedürfen, sich bewusst sein et sich enthalten.", "Am 9. November gedenken wir der Opfer. Eine solche Feier bedarf guter Vorbereitung. Alle Beteiligten sind sich ihrer Verantwortung bewusst. Die Rednerinnen und Redner enthalten sich politischer Parolen."]
    },
    128: {
      gap: [["Es ___ daran erinnert, dass die Mauer 28 Jahre stand.", "sei"], ["Man ___ 200 Gramm Mehl und zwei Eier. (nehmen)", "nehme"], ["Wie dem auch ___: Wir machen weiter.", "sei"], ["Wir schaffen das, koste es, was es ___.", "wolle"]],
      fix: [["Es ist daran erinnert, dass die Mauer 28 Jahre stand.", "Es sei daran erinnert, dass die Mauer 28 Jahre stand.", "Set phrase in the Konjunktiv I: Es sei daran erinnert.", "Tournure figée au Konjunktiv I : Es sei daran erinnert."], ["Sei es aus Angst, ist es aus Bequemlichkeit: Viele schwiegen.", "Sei es aus Angst, sei es aus Bequemlichkeit: Viele schwiegen.", "sei es …, sei es … (whether … or …).", "sei es …, sei es … (que ce soit … ou …)."]],
      task: ["Write the beginning of a short commemorative speech (4 sentences) with at least three set phrases in the Konjunktiv I.", "Écris le début d'un court discours de commémoration (4 phrases) avec au moins trois tournures figées au Konjunktiv I.", "Liebe Anwesende, es sei zunächst daran erinnert, warum wir heute hier stehen. Aus dieser Straße wurden Menschen deportiert, sei es aus religiösen, sei es aus politischen Gründen. Man bedenke, dass sie unsere Nachbarn waren. Mögen wir ihre Namen nie vergessen."]
    },
    129: {
      gap: [["Wie haben Sie diesen Herbst ___?", "erlebt"], ["Was ging Ihnen damals durch den ___?", "Kopf"], ["Sie sagten vorhin, Sie ___ Angst gehabt.", "hätten"], ["Vielen Dank, dass Sie Ihre Erinnerungen mit uns ___.", "teilen"]],
      fix: [["Hatten Sie Angst? Ja oder nein?", "Wie haben Sie sich damals gefühlt?", "Ask open questions, not yes/no questions.", "Pose des questions ouvertes, pas des questions fermées."], ["Frau Krüger erzählte, sie hat große Angst gehabt.", "Frau Krüger erzählte, sie habe große Angst gehabt.", "When reporting: Konjunktiv I.", "Pour rapporter : Konjunktiv I."]],
      task: ["Prepare five open questions for an interview with an older person about an important event in their life, and one sentence to close the interview respectfully.", "Prépare cinq questions ouvertes pour interviewer une personne âgée sur un événement important de sa vie, et une phrase pour conclure l'entretien avec respect.", "Wie haben Sie diesen Tag erlebt? Woran erinnern Sie sich besonders deutlich? Was ging Ihnen damals durch den Kopf? Wie haben Ihre Familie und Ihre Freunde reagiert? Wie hat sich Ihr Leben danach verändert? Vielen Dank, dass Sie Ihre Erinnerungen mit uns geteilt haben."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "gedenkfeier", lesson: 127, level: "C1", icon: "flower", partner: "Matthias", role: "a colleague at the town's cultural office", role_fr: "un collègue du service culturel de la ville",
    title: "Planning a commemoration", title_fr: "Préparer une commémoration",
    setting: "You work for the cultural office of a small town. With your colleague Matthias, you're planning the commemoration on 9 November.", setting_fr: "Tu travailles au service culturel d'une petite ville. Avec ton collègue Matthias, tu prépares la commémoration du 9 novembre.",
    turns: [
      { p: "Wir müssen die Feier zum 9. November planen. Was schlägst du vor?", en: "We need to plan the 9 November ceremony. What do you suggest?", fr: "Il faut qu'on prépare la cérémonie du 9 novembre. Qu'est-ce que tu proposes ?" },
      { y: ["Zuerst sollten wir der Opfer mit einer Schweigeminute gedenken.", "Zuerst sollten wir die Opfer mit einer Schweigeminute gedenken.", "Zuerst sollten wir den Opfern mit einer Schweigeminute gedenken."], en: "First we should commemorate the victims with a minute's silence.", fr: "D'abord, nous devrions rendre hommage aux victimes par une minute de silence.", why: "gedenken + genitive: der Opfer.", why_fr: "gedenken + génitif : der Opfer." },
      { p: "Gute Idee. Sollen auch Schüler etwas vortragen?", en: "Good idea. Should pupils also present something?", fr: "Bonne idée. Est-ce que des élèves doivent aussi présenter quelque chose ?" },
      { y: ["Ja, aber das bedarf einer guten Vorbereitung.", "Ja, aber das bedarf eine gute Vorbereitung.", "Ja, aber das bedarf einer guter Vorbereitung."], en: "Yes, but that requires good preparation.", fr: "Oui, mais cela demande une bonne préparation.", why: "bedürfen + genitive: einer guten Vorbereitung.", why_fr: "bedürfen + génitif : einer guten Vorbereitung." },
      { p: "Die Klasse 10b erforscht gerade die Geschichte einer jüdischen Familie aus unserer Stadt.", en: "Class 10b is researching the history of a Jewish family from our town.", fr: "La classe de 10b fait des recherches sur l'histoire d'une famille juive de notre ville." },
      { y: ["Wunderbar. Die Jugendlichen sind sich der Bedeutung dieser Arbeit sicher bewusst.", "Wunderbar. Die Jugendlichen sind sich die Bedeutung dieser Arbeit sicher bewusst.", "Wunderbar. Die Jugendlichen sind sich der Bedeutung dieser Arbeit sicher bewusst sind."], en: "Wonderful. The young people are surely aware of the importance of this work.", fr: "Formidable. Les jeunes ont sûrement conscience de l'importance de ce travail.", why: "sich + genitive + bewusst sein; one conjugated verb.", why_fr: "sich + génitif + bewusst sein ; un seul verbe conjugué." },
      { p: "Und die Rede? Der Bürgermeister hat leider abgesagt.", en: "And the speech? Unfortunately the mayor has cancelled.", fr: "Et le discours ? Le maire s'est malheureusement désisté." },
      { y: ["Dann bedienen wir uns eines Textes von Überlebenden und lassen ihn vorlesen.", "Dann bedienen wir uns einen Text von Überlebenden und lassen ihn vorlesen.", "Dann bedienen wir eines Textes von Überlebenden und lassen ihn vorlesen."], en: "Then we'll use a text by survivors and have it read aloud.", fr: "Alors nous nous servirons d'un texte de survivants et le ferons lire à voix haute.", why: "sich bedienen + genitive: eines Textes.", why_fr: "sich bedienen + génitif : eines Textes." },
      { p: "Schön. Und wenn jemand die Feier für Parteiwerbung nutzen will?", en: "Nice. And if someone wants to use the ceremony for party advertising?", fr: "Bien. Et si quelqu'un veut profiter de la cérémonie pour faire de la propagande de parti ?" },
      { y: ["Dann bitten wir alle, sich politischer Parolen zu enthalten.", "Dann bitten wir alle, sich politische Parolen zu enthalten.", "Dann bitten wir alle, politischer Parolen zu enthalten."], en: "Then we'll ask everyone to refrain from political slogans.", fr: "Alors nous demanderons à tout le monde de s'abstenir de slogans politiques.", why: "sich enthalten + genitive: politischer Parolen.", why_fr: "sich enthalten + génitif : politischer Parolen." }
    ] },
  { id: "zeitzeugin", lesson: 129, level: "C1", icon: "mic", partner: "Frau Krüger", role: "a contemporary witness from Leipzig", role_fr: "une témoin de l'époque, originaire de Leipzig",
    title: "Autumn 1989 in Leipzig", title_fr: "L'automne 1989 à Leipzig",
    setting: "For a school project, you interview Frau Krüger, who took part in the Monday demonstrations in Leipzig in 1989.", setting_fr: "Pour un projet scolaire, tu interviewes Frau Krüger, qui a participé aux manifestations du lundi à Leipzig en 1989.",
    turns: [
      { p: "Guten Tag! Sie wollten mit mir über den Herbst 1989 sprechen?", en: "Hello! You wanted to talk to me about the autumn of 1989?", fr: "Bonjour ! Vous vouliez me parler de l'automne 1989 ?" },
      { y: ["Ja, vielen Dank, dass Sie sich Zeit nehmen. Wie haben Sie diesen Herbst erlebt?", "Ja, vielen Dank, dass Sie sich Zeit nehmen. Haben Sie diesen Herbst erlebt?", "Ja, vielen Dank, dass Sie nehmen sich Zeit. Wie haben Sie diesen Herbst erlebt?"], en: "Yes, thank you for taking the time. How did you experience that autumn?", fr: "Oui, merci beaucoup de prendre le temps. Comment avez-vous vécu cet automne-là ?", why: "An open question; dass: verb at the end.", why_fr: "Une question ouverte ; dass : verbe à la fin." },
      { p: "Ich wohnte damals in Leipzig. Am 9. Oktober bin ich zum ersten Mal zur Montagsdemonstration gegangen. Wir hatten große Angst.", en: "I lived in Leipzig at the time. On 9 October I went to the Monday demonstration for the first time. We were very afraid.", fr: "J'habitais à Leipzig à l'époque. Le 9 octobre, je suis allée pour la première fois à la manifestation du lundi. Nous avions très peur." },
      { y: ["Was ging Ihnen damals durch den Kopf?", "Was ging Sie damals durch den Kopf?", "Was ging Ihnen damals durch dem Kopf?"], en: "What was going through your mind at the time?", fr: "Qu'est-ce qui vous passait par la tête à ce moment-là ?", why: "jemandem (dative) durch den Kopf (accusative) gehen.", why_fr: "jemandem (datif) durch den Kopf (accusatif) gehen." },
      { p: "Ich dachte an meine Kinder. Niemand wusste, ob die Polizei schießen würde. Aber es blieb friedlich.", en: "I thought of my children. Nobody knew whether the police would shoot. But it stayed peaceful.", fr: "Je pensais à mes enfants. Personne ne savait si la police allait tirer. Mais tout est resté pacifique." },
      { y: ["Das muss eine enorme Erleichterung gewesen sein. Können Sie den Moment genauer beschreiben?", "Das muss eine enorme Erleichterung sein gewesen. Können Sie den Moment genauer beschreiben?", "Das muss eine enorme Erleichterung gewesen sein. Können Sie den Moment beschreiben genauer?"], en: "That must have been an enormous relief. Can you describe the moment in more detail?", fr: "Cela a dû être un immense soulagement. Pouvez-vous décrire ce moment plus précisément ?", why: "Assumption about the past: muss … gewesen sein.", why_fr: "Supposition sur le passé : muss … gewesen sein." },
      { p: "Als wir merkten, wie viele wir waren, riefen wir: „Wir sind das Volk!“ Das vergesse ich nie.", en: "When we realised how many of us there were, we shouted: “We are the people!” I'll never forget that.", fr: "Quand nous avons compris combien nous étions, nous avons crié : « Nous sommes le peuple ! » Je ne l'oublierai jamais." },
      { y: ["Sie sagten vorhin, Sie hätten Angst gehabt. Wie hat sich dieses Gefühl danach verändert?", "Sie sagten vorhin, Sie haben Angst hatten. Wie hat sich dieses Gefühl danach verändert?", "Sie sagten vorhin, Sie hätten Angst gehabt. Wie hat dieses Gefühl danach sich verändert?"], en: "You said earlier that you had been afraid. How did that feeling change afterwards?", fr: "Vous avez dit tout à l'heure que vous aviez eu peur. Comment ce sentiment a-t-il évolué ensuite ?", why: "Refer back with reported speech (hätten … gehabt); sich right after the verb.", why_fr: "Reprendre au discours indirect (hätten … gehabt) ; sich juste après le verbe." },
      { p: "Die Angst wurde zu Mut. Aber darüber zu sprechen, fällt mir bis heute nicht leicht.", en: "The fear turned into courage. But talking about it still isn't easy for me.", fr: "La peur s'est changée en courage. Mais en parler n'est toujours pas facile pour moi." },
      { y: ["Wenn Sie nicht weitersprechen möchten, ist das selbstverständlich in Ordnung. Vielen Dank, dass Sie Ihre Erinnerungen mit uns teilen.", "Wenn Sie nicht weitersprechen möchten, das ist selbstverständlich in Ordnung. Vielen Dank, dass Sie Ihre Erinnerungen mit uns teilen.", "Wenn Sie nicht weitersprechen möchten, ist das selbstverständlich in Ordnung. Vielen Dank, dass Sie teilen Ihre Erinnerungen mit uns."], en: "If you don't want to go on, that's of course fine. Thank you very much for sharing your memories with us.", fr: "Si vous ne souhaitez pas continuer, c'est bien sûr tout à fait normal. Merci beaucoup de partager vos souvenirs avec nous.", why: "After a wenn clause, the verb comes first; dass: verb at the end.", why_fr: "Après une proposition en wenn, le verbe vient en premier ; dass : verbe à la fin." }
    ] }
  );

  W.READINGS.push({
    id: "stolpersteine", level: "C1", icon: "footprints", title: "Stolpersteine: Erinnerung vor der Haustür", genre: "Feature article",
    intro: "Small brass plates in the pavement, a name, a few dates: an art project that has become a European memorial.",
    intro_fr: "De petites plaques de laiton dans le trottoir, un nom, quelques dates : un projet artistique devenu un mémorial européen.",
    paragraphs: [
      { de: "Wer durch Berlin, Hamburg oder Köln geht, entdeckt manchmal kleine Messingplatten im Gehweg. Auf ihnen steht „Hier wohnte“, gefolgt von einem Namen, einem Geburtsjahr und wenigen Worten über ein Schicksal: deportiert, ermordet, geflohen. Jeder dieser Stolpersteine erinnert an einen Menschen, der von den Nationalsozialisten verfolgt wurde.", en: "Anyone walking through Berlin, Hamburg or Cologne sometimes notices small brass plates in the pavement. They read “Here lived”, followed by a name, a year of birth and a few words about a fate: deported, murdered, fled. Each of these Stolpersteine (stumbling stones) commemorates a person persecuted by the Nazis.", fr: "Quand on se promène à Berlin, Hambourg ou Cologne, on découvre parfois de petites plaques de laiton dans le trottoir. On y lit « Ici habitait », suivi d'un nom, d'une année de naissance et de quelques mots sur un destin : déporté, assassiné, en fuite. Chacun de ces Stolpersteine (pavés de mémoire) rappelle une personne persécutée par les nazis." },
      { de: "Die Idee stammt von dem Künstler Gunter Demnig, der 1947 in Berlin geboren wurde. Mitte der Neunzigerjahre verlegte er die ersten Steine, anfangs ohne Genehmigung. Jeder Stein ist ein Betonwürfel von zehn mal zehn Zentimetern, der mit einer Messingplatte bedeckt ist. Er wird vor dem letzten frei gewählten Wohnort eines Opfers in den Boden eingelassen.", en: "The idea comes from the artist Gunter Demnig, born in Berlin in 1947. In the mid-1990s he laid the first stones, initially without permission. Each stone is a concrete cube of ten by ten centimetres covered with a brass plate. It is set into the ground in front of the victim's last freely chosen home.", fr: "L'idée vient de l'artiste Gunter Demnig, né en 1947 à Berlin. Au milieu des années 1990, il pose les premiers pavés, d'abord sans autorisation. Chaque pavé est un cube de béton de dix centimètres sur dix, recouvert d'une plaque de laiton. Il est encastré dans le sol devant le dernier domicile librement choisi d'une victime." },
      { de: "Das Projekt gilt als das größte dezentrale Mahnmal der Welt: Im Mai 2023 wurde in Nürnberg der hunderttausendste Stein verlegt. Oft sind es Schulklassen oder Nachbarn, die das Leben der Opfer erforschen und eine Verlegung anregen. Manchmal reisen Angehörige aus dem Ausland an, um bei der Verlegung dabei zu sein.", en: "The project is considered the largest decentralised memorial in the world: in May 2023, the hundred-thousandth stone was laid in Nuremberg. It is often school classes or neighbours who research the victims' lives and propose a stone. Sometimes relatives travel from abroad to be present when it is laid.", fr: "Le projet passe pour le plus grand mémorial décentralisé du monde : en mai 2023, le cent millième pavé a été posé à Nuremberg. Ce sont souvent des classes ou des voisins qui font des recherches sur la vie des victimes et proposent une pose. Parfois, des proches viennent de l'étranger pour y assister." },
      { de: "Doch die Steine sind nicht unumstritten. Kritiker, darunter Vertreter jüdischer Gemeinden, wenden ein, dass Passanten so auf den Namen der Opfer herumträten. In München entschied der Stadtrat, keine Stolpersteine auf öffentlichem Grund zuzulassen; dort erinnern stattdessen Erinnerungszeichen an Hauswänden an die Verfolgten. Die Befürworter halten dagegen: Wer den Text lesen will, muss sich vor dem Stein verbeugen.", en: "Yet the stones are not uncontroversial. Critics, including representatives of Jewish communities, object that passers-by would be walking on the victims' names. In Munich, the city council decided not to allow Stolpersteine on public ground; there, memorial signs on the walls of houses commemorate the persecuted instead. Supporters reply that anyone who wants to read the text has to bow before the stone.", fr: "Les pavés ne font pourtant pas l'unanimité. Des critiques, parmi lesquels des représentants de communautés juives, objectent que les passants marcheraient ainsi sur le nom des victimes. À Munich, le conseil municipal a décidé de ne pas autoriser de Stolpersteine sur le domaine public ; des plaques commémoratives sur les façades y rappellent à la place les persécutés. Les partisans répondent que pour lire le texte, il faut s'incliner devant le pavé." }
    ],
    glossary: { "Messingplatten": ["brass plates", "plaques de laiton"], "Gehweg": ["pavement, sidewalk", "trottoir"], "gefolgt": ["followed", "suivi"], "Schicksal": ["fate", "destin"], "ermordet": ["murdered", "assassiné"], "geflohen": ["fled", "en fuite"], "Stolpersteine": ["stumbling stones (memorial plaques)", "pavés de mémoire"], "Nationalsozialisten": ["National Socialists, Nazis", "nationaux-socialistes, nazis"], "verlegte": ["laid", "posa"], "Genehmigung": ["permission", "autorisation"], "Betonwürfel": ["concrete cube", "cube de béton"], "Messingplatte": ["brass plate", "plaque de laiton"], "Wohnort": ["place of residence", "domicile"], "eingelassen": ["set into", "encastré"], "dezentrale": ["decentralised", "décentralisé"], "hunderttausendste": ["hundred-thousandth", "cent millième"], "erforschen": ["research", "font des recherches sur"], "Verlegung": ["laying (of a stone)", "pose"], "anregen": ["propose, suggest", "proposer, susciter"], "Angehörige": ["relatives", "proches"], "unumstritten": ["uncontroversial", "incontesté"], "Gemeinden": ["communities", "communautés"], "herumträten": ["would trample", "piétineraient"], "Grund": ["ground, land", "terrain, domaine"], "Erinnerungszeichen": ["memorial signs", "signes de mémoire"], "Hauswänden": ["walls of houses", "façades"], "Verfolgten": ["the persecuted", "les persécutés"], "Befürworter": ["supporters", "partisans"], "verbeugen": ["bow", "s'incliner"] },
    questions: [
      { q: "Was steht auf einem Stolperstein?", o: ["„Hier wohnte“, ein Name, Daten und das Schicksal eines Opfers", "Der Name des Künstlers", "Eine Straßenkarte"], a: 0 },
      { q: "Von wem stammt die Idee?", o: ["Vom Künstler Gunter Demnig", "Vom Münchner Stadtrat", "Von einer Schulklasse in Nürnberg"], a: 0 },
      { q: "Wo wird ein Stein verlegt?", o: ["Vor dem letzten frei gewählten Wohnort eines Opfers", "Auf einem Friedhof", "In einem Museum"], a: 0 },
      { q: "Was geschah im Mai 2023 in Nürnberg?", o: ["Der hunderttausendste Stein wurde verlegt.", "Der erste Stein wurde verlegt.", "Alle Steine wurden entfernt."], a: 0 },
      { q: "Was wenden Kritiker ein?", o: ["Passanten würden auf den Namen der Opfer herumtreten.", "Die Steine seien zu teuer.", "Die Steine seien zu groß."], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-c1-9", unit: "c1-9", level: "C1", icon: "radio",
    title: "Eine Zeitzeugin in der Schule", title_fr: "Une témoin de l'époque à l'école",
    context: "A radio report: in a Berlin secondary school, pupils listen to a woman who experienced the night of 9 November 1989.", context_fr: "Un reportage radio : dans un lycée berlinois, des élèves écoutent une femme qui a vécu la nuit du 9 novembre 1989.",
    words: [["die Aula, Aulen", "the assembly hall", "la grande salle (d'une école)"], ["stürzen", "to rush; to fall", "se précipiter ; tomber"], ["der Schlagbaum, ¨-e", "the barrier, the boom gate", "la barrière"], ["umarmen", "to hug", "serrer dans ses bras"], ["das Schulfach, ¨-er", "the school subject", "la matière scolaire"]],
    lines: [["Reporterin", "In der Aula eines Berliner Gymnasiums hören heute dreißig Jugendliche einer Frau zu, die den 9. November 1989 in Berlin erlebt hat.", "de-DE"], ["Frau Hartmann", "Ich lag schon im Bett, als mein Mann ins Zimmer stürzte. Im Fernsehen hieß es, die Grenze sei offen. Ich habe es zuerst nicht geglaubt.", "de-DE"], ["Schüler", "Was haben Sie dann gemacht?", "de-DE"], ["Frau Hartmann", "Wir sind sofort zur Bornholmer Straße gelaufen. Dort standen schon Tausende. Kurz vor Mitternacht ging der Schlagbaum hoch, und wir sind einfach hinübergegangen.", "de-DE"], ["Schülerin", "Wie haben Sie sich gefühlt, als Sie im Westen ankamen?", "de-DE"], ["Frau Hartmann", "Fremde Menschen haben uns umarmt, jemand hat mir eine Flasche Sekt geschenkt. Und doch wusste niemand von uns, ob die Grenze am nächsten Morgen wieder zu sein würde.", "de-DE"], ["Reporterin", "Nach dem Gespräch sind viele Jugendliche still. Einer sagt, Geschichte sei für ihn bisher nur ein Schulfach gewesen.", "de-DE"], ["Schüler", "Heute habe ich verstanden, dass das alles echten Menschen passiert ist. Diesen Nachmittag vergesse ich nicht.", "de-DE"]],
    gist: ["Worum geht es in dem Beitrag?", ["Eine Zeitzeugin erzählt Jugendlichen vom Mauerfall.", "Jugendliche planen eine Reise nach Berlin.", "Eine Lehrerin erklärt die Geschichte der DDR."]],
    detail: [["Wo war Frau Hartmann, als sie die Nachricht hörte?", ["Im Bett", "Im Büro", "An der Grenze"]], ["Wohin ging sie mit ihrem Mann?", ["Zur Bornholmer Straße", "Zum Brandenburger Tor", "Zum Bahnhof"]], ["Was schenkte ihr jemand im Westen?", ["Eine Flasche Sekt", "Blumen", "Geld"]], ["Was sagt ein Schüler nach dem Gespräch?", ["Geschichte sei für ihn bisher nur ein Schulfach gewesen.", "Er habe schon alles gewusst.", "Er wolle Lehrer werden."]]],
    decode: ["Im Fernsehen hieß es, die Grenze sei offen", "Einer sagt, Geschichte sei für ihn bisher nur ein Schulfach gewesen"],
    tip: "Notice the two voices: the witness tells her story in the Perfekt, as people do when they speak, while the reporter keeps a distance with reported speech (Einer sagt, Geschichte sei…). That's exactly what you do when you report an interview.", tip_fr: "Remarque les deux voix : la témoin raconte au parfait, comme on le fait à l'oral, tandis que la journaliste garde ses distances avec le discours indirect (Einer sagt, Geschichte sei…). C'est exactement ce que tu fais quand tu rends compte d'un entretien."
  }]);

  W.PROMPTS.push({ id: "de-c1-9", level: "C1", q: "Halte einen Vortrag (etwa drei bis vier Minuten): „Wie sollte eine Gesellschaft an die dunklen Kapitel ihrer Geschichte erinnern?“ Sprich über Gedenkorte, Gedenktage und Zeitzeugen und darüber, was geschieht, wenn die letzten Zeitzeugen nicht mehr leben.", en: "Give a talk (about three to four minutes): “How should a society remember the dark chapters of its history?” Talk about memorial sites, days of remembrance and contemporary witnesses, and about what happens when the last witnesses are gone.", fr: "Fais un exposé (environ trois à quatre minutes) : « Comment une société devrait-elle se souvenir des chapitres sombres de son histoire ? » Parle des lieux de mémoire, des journées de commémoration et des témoins de l'époque, et de ce qui se passe quand les derniers témoins ont disparu.", time: 240,
    phrases: ["Es sei zunächst daran erinnert, dass…", "Ein gutes Beispiel sind…", "Man bedenke aber, dass…", "Wie dem auch sei: …", "Abschließend möchte ich sagen, dass…"],
    model: "Ich möchte über die Frage sprechen, wie eine Gesellschaft an die dunklen Kapitel ihrer Geschichte erinnern sollte. Es sei zunächst daran erinnert, dass Erinnerung nicht von selbst entsteht: Sie bedarf der Orte, der Rituale und vor allem der Menschen, die sie weitertragen. Ein gutes Beispiel sind die Stolpersteine. Sie bringen die Erinnerung mitten in den Alltag, vor die Haustür der Opfer, und oft erforschen Schulklassen die Lebensgeschichten dahinter. Daneben sind Gedenktage wichtig, an denen eine ganze Gesellschaft innehält und der Opfer gedenkt. Man bedenke aber, dass Rituale auch zur Routine werden können. Wenn die letzten Zeitzeugen nicht mehr leben, müssen ihre Berichte in Archiven, Filmen und Schulbüchern bewahrt werden. Wie dem auch sei: Erinnerung darf nie nur eine Pflichtübung sein. Abschließend möchte ich sagen, dass wir uns unserer Verantwortung bewusst bleiben müssen, damit sich die Geschichte nicht wiederholt." });

  W.WRITING_GUIDE["c1-9"] = { genre: "An argued text (C1)", genre_fr: "Un texte argumenté (C1)",
    plan: [["A lead-in and your thesis.", "Une amorce et ta thèse."], ["Arguments for your position.", "Les arguments en faveur de ta position."], ["The opposing view, taken seriously.", "Le point de vue opposé, pris au sérieux."], ["Your solution.", "Ta solution."], ["A conclusion.", "Une conclusion."]],
    marks: [["Ich bin der Ansicht", "the thesis", "la thèse"], ["Es sei daran erinnert", "a set phrase in the Konjunktiv I", "une tournure figée au Konjunktiv I"], ["Kritiker geben zu bedenken", "the opposing view", "le point de vue opposé"], ["bedarf einer ernsthaften Antwort", "a verb with the genitive", "un verbe suivi du génitif"], ["Wie dem auch sei", "a transition", "une transition"], ["unserer Verantwortung bewusst", "an adjective with the genitive", "un adjectif suivi du génitif"]] };

  /* Atelier de langue : champs allemands d'abord, puis anglais et français (voir localize.js). */
  W.LEXIS = W.LEXIS || {};
  W.LEXIS["c1-9"] = {
    colloc: [
      ["der Opfer gedenken", "to commemorate the victims", "rendre hommage aux victimes", "Am Jahrestag gedachten viele Menschen der Opfer.", "gedachten", ["dachten", "bedachten"]],
      ["einen Kranz niederlegen", "to lay a wreath", "déposer une gerbe", "Die Präsidentin legte am Mahnmal einen Kranz nieder.", "legte", ["stellte", "setzte"]],
      ["die Vergangenheit aufarbeiten", "to come to terms with the past", "faire un travail de mémoire", "Das Land begann erst spät, seine Vergangenheit aufzuarbeiten.", "aufzuarbeiten", ["aufzuheben", "aufzustellen"]],
      ["Lehren aus der Geschichte ziehen", "to learn lessons from history", "tirer les leçons de l'histoire", "Wir müssen Lehren aus der Geschichte ziehen.", "ziehen", ["nehmen", "machen"]],
      ["die Erinnerung wachhalten", "to keep the memory alive", "entretenir la mémoire", "Die Gedenkstätte hält die Erinnerung an die Opfer wach.", "hält", ["macht", "stellt"]],
      ["ein Mahnmal errichten", "to erect a memorial", "ériger un monument commémoratif", "Die Stadt errichtete ein Mahnmal für die Deportierten.", "errichtete", ["richtete", "erreichte"]],
      ["Zeugnis ablegen", "to bear witness", "témoigner", "Die Überlebenden legten vor Gericht Zeugnis ab.", "legten", ["gaben", "stellten"]],
      ["seine Schuld eingestehen", "to admit one's guilt", "reconnaître sa culpabilité", "Er hat seine Schuld nie eingestanden.", "eingestanden", ["eingestellt", "eingestiegen"]],
      ["das Schweigen brechen", "to break the silence", "rompre le silence", "Erst nach fünfzig Jahren brach sie ihr Schweigen.", "brach", ["riss", "schlug"]],
      ["Spuren hinterlassen", "to leave traces", "laisser des traces", "Der Krieg hat in der Stadt tiefe Spuren hinterlassen.", "hinterlassen", ["entlassen", "überlassen"]]
    ],
    wf: [
      ["Die ___ der Vergangenheit dauert bis heute an. (AUFARBEITEN)", "Aufarbeitung"],
      ["Viele Opfer blieben lange ___. (NAME)", "namenlos"],
      ["Nach dem Krieg begann eine Zeit der ___. (VERSÖHNEN)", "Versöhnung"],
      ["Die ___ Deutschlands dauerte über vierzig Jahre. (TEILEN)", "Teilung"],
      ["Sie gehört zu den letzten ___, die an Schulen berichten. (ÜBERLEBEN)", "Überlebenden"],
      ["Die Ereignisse sind in Archiven gut ___. (DOKUMENT)", "dokumentiert"],
      ["Die ___ an den Krieg verblasst langsam. (ERINNERN)", "Erinnerung"],
      ["Der Mut der Menschen im ___ beeindruckt mich. (WIDERSTEHEN)", "Widerstand"]
    ],
    kwt: [
      ["Heute erinnern wir an die Opfer.", "GEDENKEN", "Heute ___ Opfer.", "gedenken wir der"],
      ["Das muss man nicht erklären.", "BEDARF", "Das ___ Erklärung.", "bedarf keiner"],
      ["Sie kannte die Gefahr genau.", "BEWUSST", "Sie war sich ___.", "der Gefahr genau bewusst"],
      ["Man sollte nicht vergessen, dass die Mauer 28 Jahre stand.", "SEI", "Es ___, dass die Mauer 28 Jahre stand.", "sei daran erinnert"],
      ["Egal, was es kostet: Wir machen weiter.", "KOSTE", "Wir machen weiter, ___.", "koste es, was es wolle"],
      ["Man warf ihm vor, gestohlen zu haben.", "BESCHULDIGT", "Er wurde ___.", "des Diebstahls beschuldigt"]
    ],
    idioms: [
      ["Gras über etwas wachsen lassen", "warten, bis etwas vergessen ist", "to let the dust settle", "laisser le temps faire son œuvre", "Über den alten Streit ist längst Gras gewachsen.", "Gras gewachsen"],
      ["etwas ad acta legen", "etwas als erledigt betrachten", "to shelve something", "classer une affaire", "Nach zehn Jahren wurde der Fall ad acta gelegt.", "ad acta gelegt"],
      ["jemandem ein Denkmal setzen", "jemanden würdigen, damit er nicht vergessen wird", "to immortalise someone", "rendre hommage à quelqu'un, l'immortaliser", "Mit diesem Roman setzt sie ihrer Großmutter ein Denkmal.", "ein Denkmal"],
      ["Geschichte schreiben", "etwas historisch Bedeutsames tun", "to make history", "entrer dans l'histoire", "Die Demonstrierenden von 1989 haben Geschichte geschrieben.", "Geschichte geschrieben"],
      ["das Rad der Geschichte zurückdrehen", "eine Entwicklung rückgängig machen", "to turn back the clock", "revenir en arrière", "Niemand kann das Rad der Geschichte zurückdrehen.", "das Rad der Geschichte zurückdrehen"],
      ["sich etwas hinter die Ohren schreiben", "sich etwas gut merken", "to take something to heart", "se le tenir pour dit", "Das solltest du dir hinter die Ohren schreiben.", "hinter die Ohren schreiben"],
      ["anno dazumal", "in früheren Zeiten", "in the old days", "autrefois, au temps jadis", "Anno dazumal gab es hier noch keine Autos.", "Anno dazumal"],
      ["etwas unter den Teppich kehren", "etwas Unangenehmes verheimlichen", "to sweep something under the carpet", "étouffer une affaire", "Solche Verbrechen darf man nicht unter den Teppich kehren.", "unter den Teppich kehren"]
    ]
  };

  W.COURSE.push({ id: "c1-9", level: "C1", icon: "landmark", title: "Memory and history", title_fr: "Mémoire et histoire",
    intro: "How does a country remember? In this unit, you'll learn the genitive objects of formal German (Wir gedenken der Opfer, sich einer Sache bewusst sein), the Konjunktiv I in set phrases (Es sei daran erinnert, koste es, was es wolle, wie dem auch sei), and how to interview a contemporary witness with tact. You'll also read about the Stolpersteine, small brass plates in the pavement that have become a memorial across Europe.",
    intro_fr: "Comment un pays se souvient-il ? Dans cette unité, tu vas apprendre les compléments au génitif de l'allemand soutenu (Wir gedenken der Opfer, sich einer Sache bewusst sein), le Konjunktiv I dans les tournures figées (Es sei daran erinnert, koste es, was es wolle, wie dem auch sei), et la façon d'interviewer avec tact un témoin de l'époque. Tu liras aussi un texte sur les Stolpersteine, ces petites plaques de laiton dans le trottoir devenues un mémorial à l'échelle de l'Europe.",
    can: ["Use verbs and adjectives with the genitive", "Recognise and use the Konjunktiv I in set phrases", "Interview a contemporary witness and report what they said", "Talk about remembrance and contemporary history", "Write an argued text on remembrance (C1)"],
    can_fr: ["Employer les verbes et adjectifs suivis du génitif", "Reconnaître et employer le Konjunktiv I dans les tournures figées", "Interviewer un témoin de l'époque et rapporter ses propos", "Parler du travail de mémoire et de l'histoire contemporaine", "Écrire un texte argumenté sur la mémoire (C1)"],
    lessons: [127, 128, 129], vocab: ["gedenkkulturDE", "zeitgeschichteDE"], reading: "stolpersteine", prompt: "de-c1-9",
    writing: { task: "Write an argued text (220-260 words) on the question: “Should a visit to a memorial site be compulsory for all pupils?” Include a lead-in and thesis, arguments, the opposing view taken seriously, your solution, and a conclusion.", task_fr: "Écris un texte argumenté (220 à 260 mots) sur la question : « La visite d'un lieu de mémoire devrait-elle être obligatoire pour tous les élèves ? » Avec une amorce et une thèse, des arguments, le point de vue opposé pris au sérieux, ta solution, et une conclusion.", words: "220-260",
      tips: ["Ich bin der Ansicht, dass…", "Es sei daran erinnert, dass…", "Kritiker geben zu bedenken, dass…", "Wie dem auch sei: …", "Abschließend…"],
      checklist: ["I wrote a lead-in and a clear thesis", "I gave at least two arguments", "I presented the opposing view fairly", "I used a genitive construction or a Konjunktiv I set phrase", "I wrote between 220 and 260 words"],
      checklist_fr: ["J'ai écrit une amorce et une thèse claire", "J'ai donné au moins deux arguments", "J'ai présenté honnêtement le point de vue opposé", "J'ai employé une construction au génitif ou une tournure figée au Konjunktiv I", "J'ai écrit entre 220 et 260 mots"],
      model: "Jedes Jahr besuchen zahlreiche Schulklassen Gedenkstätten wie ehemalige Konzentrationslager. Ob ein solcher Besuch für alle verpflichtend sein sollte, ist jedoch umstritten. Ich bin der Ansicht, dass jeder junge Mensch mindestens einmal eine Gedenkstätte sehen sollte, sofern der Besuch gut vorbereitet ist.\n\nFür eine Pflicht spricht vor allem, dass ein authentischer Ort mehr bewirkt als jedes Schulbuch. Wer an einem solchen Ort steht, begreift, dass hinter den Zahlen einzelne Menschen standen. Kein Film kann ersetzen, was man dort empfindet. Es sei daran erinnert, dass bald keine Zeitzeugen mehr leben werden, die selbst an Schulen berichten können. Umso wichtiger werden die Orte, an denen die Verbrechen geschahen.\n\nKritiker geben zu bedenken, dass sich Erinnerung nicht erzwingen lasse. Ein Pflichtbesuch, den Jugendliche nur absitzen, könne sogar Abwehr hervorrufen. Dieses Argument bedarf einer ernsthaften Antwort, denn ein schlecht vorbereiteter Ausflug richtet tatsächlich mehr Schaden an, als er nützt.\n\nWie dem auch sei: Das Problem liegt nicht in der Pflicht selbst, sondern in der Art der Durchführung. Die Schülerinnen und Schüler sollten vorher Biografien einzelner Opfer kennenlernen, vor Ort Zeit für Fragen haben und danach über ihre Eindrücke sprechen dürfen. Ein Besuch, sei es in der achten, sei es in der zehnten Klasse, sollte deshalb fest im Lehrplan verankert sein.\n\nAbschließend bin ich überzeugt, dass wir uns unserer Verantwortung bewusst bleiben müssen. Gerade weil die Erinnerung verblasst, darf sie nicht dem Zufall überlassen werden. Eine gut begleitete Pflicht ist dafür ein angemessener Weg." } });
})();
