/* Cours d'allemand, unité C2-3 « The language of science / La langue des sciences » : cause et effet dans la
   langue scientifique (zurückzuführen sein auf, beruhen auf, resultieren aus, einhergehen mit, zur Folge haben,
   nach sich ziehen), la prudence et la prise de position (legen nahe, es ist davon auszugehen, dürfte,
   offenbar / offensichtlich, verbes introducteurs), citer et paraphraser ses sources (vgl., ebd., […], Plagiat).
   Personnages fictifs, prénoms allemands ; les références « Müller 2019 » sont des exemples inventés.
   Faits vérifiables seulement : Alfred Wegener (1880-1930), météorologue, présente le 6 janvier 1912 à Francfort
   l'idée que les continents se déplacent ; livre « Die Entstehung der Kontinente und Ozeane » (1915) ; nom
   « Pangäa » pour le supercontinent (éditions ultérieures) ; arguments : côtes de l'Amérique du Sud et de l'Afrique,
   mêmes fossiles, roches semblables ; rejet de la plupart des géologues, faute de mécanisme convaincant ; mort en
   novembre 1930 lors d'une expédition au Groenland ; dans les années 1960, l'étude des fonds marins confirme le
   mouvement des plaques (tectonique des plaques) ; l'Institut Alfred-Wegener à Bremerhaven porte son nom. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "fachtexteDE", icon: "book-marked", title: "Academic writing", title_fr: "L'écrit scientifique", level: "C2", words: [
    ["die These, -n", "the thesis, the claim", "la thèse", "Die These ist gewagt, aber gut begründet."],
    ["die Annahme, -n", "the assumption", "l'hypothèse, la supposition", "Diese Annahme muss erst überprüft werden."],
    ["die Theorie, -n", "the theory", "la théorie", "Wegeners Theorie wurde lange abgelehnt."],
    ["die Widerlegung, -en", "the refutation", "la réfutation", "Eine einzige Messung kann zur Widerlegung einer Theorie führen."],
    ["der Fachaufsatz, ¨-e", "the academic paper", "l'article scientifique", "Ihr erster Fachaufsatz erschien in einer englischen Zeitschrift."],
    ["die Fachzeitschrift, -en", "the academic journal", "la revue spécialisée", "Der Artikel erschien in einer Fachzeitschrift."],
    ["das Gutachten, -", "the expert report, the review", "l'expertise, l'évaluation", "Zwei Gutachten empfahlen die Veröffentlichung."],
    ["signifikant", "significant", "significatif", "Der Unterschied ist statistisch signifikant."],
    ["der Forschungsstand", "the state of research", "l'état de la recherche", "Das erste Kapitel fasst den Forschungsstand zusammen."],
    ["die Fragestellung, -en", "the research question", "la problématique", "Die Fragestellung muss klar formuliert sein."],
    ["das Literaturverzeichnis, -se", "the bibliography", "la bibliographie", "Jede Quelle gehört ins Literaturverzeichnis."],
    ["die Fußnote, -n", "the footnote", "la note de bas de page", "Die Erklärung steht in einer Fußnote."],
    ["die Doktorarbeit, -en", "the doctoral thesis", "la thèse de doctorat", "Sie schreibt ihre Doktorarbeit über Gletscher."],
    ["die Quellenangabe, -n", "the citation, the reference", "l'indication de la source", "Ein Zitat ohne Quellenangabe ist ein Plagiat."],
    ["die Auswertung, -en", "the analysis, the evaluation", "l'analyse, l'exploitation", "Die Auswertung der Daten dauert noch an."],
    ["die Datenlage", "the available data", "les données disponibles", "Die Datenlage ist noch dünn."]
  ] },
  { id: "erdgeschichteDE", icon: "mountain", title: "The Earth", title_fr: "La Terre", level: "C2", words: [
    ["die Erdkruste", "the earth's crust", "la croûte terrestre", "Die Erdkruste ist in mehrere Platten zerbrochen."],
    ["der Kontinent, -e", "the continent", "le continent", "Afrika ist der zweitgrößte Kontinent."],
    ["die Kontinentalverschiebung", "continental drift", "la dérive des continents", "Wegener entwickelte die Theorie der Kontinentalverschiebung."],
    ["die Plattentektonik", "plate tectonics", "la tectonique des plaques", "Die Plattentektonik erklärt Erdbeben und Vulkane."],
    ["das Erdbeben, -", "the earthquake", "le tremblement de terre", "Das Erdbeben war bis in die Nachbarländer zu spüren."],
    ["der Vulkan, -e", "the volcano", "le volcan", "Island hat viele aktive Vulkane."],
    ["die Gebirgsbildung", "mountain building", "la formation des montagnes", "Die Gebirgsbildung dauert Millionen von Jahren."],
    ["der Meeresboden", "the seabed", "le fond marin", "Am Meeresboden bildet sich neue Erdkruste."],
    ["die Küstenlinie, -n", "the coastline", "le tracé des côtes", "Die Küstenlinien Afrikas und Südamerikas passen zusammen."],
    ["der Urkontinent", "the supercontinent", "le supercontinent", "Wegener nannte den Urkontinent „Pangäa“."],
    ["die Eiszeit, -en", "the ice age", "la période glaciaire", "Während der letzten Eiszeit lagen Teile Norddeutschlands unter Eis."],
    ["der Gletscher, -", "the glacier", "le glacier", "Die Gletscher in den Alpen schmelzen."],
    ["das Gestein, -e", "rock", "la roche", "Auf beiden Kontinenten findet man ähnliches Gestein."],
    ["die Ablagerung, -en", "the deposit, the sediment", "le dépôt, le sédiment", "Ablagerungen verraten viel über das Klima der Vergangenheit."],
    ["die Erdgeschichte", "the history of the earth", "l'histoire de la Terre", "In der Erdgeschichte ist der Mensch eine sehr junge Erscheinung."],
    ["der Meteorologe, -n (die Meteorologin)", "the meteorologist", "le météorologue, la météorologue", "Wegener war von Beruf Meteorologe."]
  ] });

  W.LESSONS.push(
  {
    id: 139, level: "C2", icon: "workflow",
    title: "Ist darauf zurückzuführen, dass…: cause and effect", title_fr: "Ist darauf zurückzuführen, dass… : cause et effet",
    subtitle: "The verbs of academic German for causes, effects and correlations, and why a correlation is not a cause.", subtitle_fr: "Les verbes de l'allemand scientifique pour les causes, les effets et les corrélations, et pourquoi une corrélation n'est pas une cause.",
    body: `
<h2>From the cause to the effect</h2>
<p><s-de>bewirken, hervorrufen, auslösen, verursachen</s-de> · <s-de>zur Folge haben</s-de> · <s-de>nach sich ziehen</s-de> · <s-de>mit sich bringen</s-de> · <s-de>bedingen</s-de></p>
<p><s-de>Die Entdeckung zog eine lange Debatte nach sich.</s-de></p>
<h2>From the effect back to the cause</h2>
<table>
<tr><td><s-de>zurückzuführen sein auf</s-de> + accusative</td><td><s-de>Der Anstieg ist auf die Erwärmung zurückzuführen.</s-de></td></tr>
<tr><td><s-de>beruhen auf</s-de> + dative</td><td><s-de>Die Ergebnisse beruhen auf einer großen Stichprobe.</s-de></td></tr>
<tr><td><s-de>resultieren aus / sich ergeben aus</s-de></td><td><s-de>Daraus ergibt sich, dass weitere Studien nötig sind.</s-de></td></tr>
<tr><td><s-de>bedingt sein durch</s-de></td><td><s-de>Die Verzögerung ist durch das Wetter bedingt.</s-de></td></tr>
</table>
<h2>Correlation</h2>
<p><s-de>einhergehen mit, zusammenhängen mit, korrelieren mit</s-de>: <s-de>Der Rückgang der Gletscher geht mit steigenden Temperaturen einher.</s-de></p>
<div class="tip">A careful writer distinguishes the two: <s-de>einhergehen mit</s-de> only states that two things occur together; <s-de>zurückzuführen sein auf</s-de> claims a cause. <s-de>Ein Zusammenhang bedeutet noch keine Ursache.</s-de></div>
`,
    body_fr: `
<h2>De la cause à l'effet</h2>
<p><s-de>bewirken, hervorrufen, auslösen, verursachen</s-de> (provoquer, causer) · <s-de>zur Folge haben</s-de> (avoir pour conséquence) · <s-de>nach sich ziehen</s-de> (entraîner) · <s-de>mit sich bringen</s-de> · <s-de>bedingen</s-de></p>
<p><s-de>Die Entdeckung zog eine lange Debatte nach sich.</s-de> (La découverte entraîna un long débat.)</p>
<h2>De l'effet à la cause</h2>
<table>
<tr><td><s-de>zurückzuführen sein auf</s-de> + acc. (être dû à)</td><td><s-de>Der Anstieg ist auf die Erwärmung zurückzuführen.</s-de></td></tr>
<tr><td><s-de>beruhen auf</s-de> + dat. (reposer sur)</td><td><s-de>Die Ergebnisse beruhen auf einer großen Stichprobe.</s-de></td></tr>
<tr><td><s-de>resultieren aus / sich ergeben aus</s-de> (résulter de)</td><td><s-de>Daraus ergibt sich, dass weitere Studien nötig sind.</s-de></td></tr>
<tr><td><s-de>bedingt sein durch</s-de> (être lié à, dû à)</td><td><s-de>Die Verzögerung ist durch das Wetter bedingt.</s-de></td></tr>
</table>
<h2>La corrélation</h2>
<p><s-de>einhergehen mit, zusammenhängen mit, korrelieren mit</s-de> (aller de pair avec, être lié à) : <s-de>Der Rückgang der Gletscher geht mit steigenden Temperaturen einher.</s-de></p>
<div class="tip">Une plume rigoureuse distingue les deux : <s-de>einhergehen mit</s-de> constate seulement que deux choses vont ensemble ; <s-de>zurückzuführen sein auf</s-de> affirme une cause. <s-de>Ein Zusammenhang bedeutet noch keine Ursache.</s-de> (Une corrélation n'est pas une cause.)</div>
`,
    examples: [
      ["Der Anstieg des Meeresspiegels ist vor allem auf die Erwärmung zurückzuführen.", "The rise in sea level is mainly due to warming.", "La hausse du niveau de la mer est surtout due au réchauffement."],
      ["Die meisten Erdbeben werden durch Bewegungen der Erdplatten ausgelöst.", "Most earthquakes are triggered by movements of the earth's plates.", "La plupart des séismes sont déclenchés par les mouvements des plaques terrestres."],
      ["Die Entdeckung zog eine lange Debatte nach sich.", "The discovery led to a long debate.", "La découverte entraîna un long débat."],
      ["Die Ergebnisse beruhen auf einer Stichprobe von 2 000 Personen.", "The results are based on a sample of 2,000 people.", "Les résultats reposent sur un échantillon de 2 000 personnes."],
      ["Der Rückgang der Gletscher geht mit steigenden Temperaturen einher.", "The retreat of the glaciers goes hand in hand with rising temperatures.", "Le recul des glaciers va de pair avec la hausse des températures."],
      ["Daraus ergibt sich, dass weitere Studien nötig sind.", "It follows that further studies are needed.", "Il en ressort que d'autres études sont nécessaires."],
      ["Ein Zusammenhang bedeutet noch keine Ursache.", "A correlation does not yet mean a cause.", "Une corrélation n'est pas encore une cause."]
    ],
    quiz: [
      { q: "Der Anstieg ist ___ die Erwärmung zurückzuführen.", q_fr: "Der Anstieg ist ___ die Erwärmung zurückzuführen.", o: ["auf", "an", "aus"], a: 0, ex: "zurückzuführen sein auf + accusative.", ex_fr: "zurückzuführen sein auf + accusatif." },
      { q: "Die Ergebnisse beruhen ___ einer großen Stichprobe.", q_fr: "Die Ergebnisse beruhen ___ einer großen Stichprobe.", o: ["auf", "von", "aus"], a: 0, ex: "beruhen auf + dative.", ex_fr: "beruhen auf + datif." },
      { q: "Which verb only states a correlation?", q_fr: "Quel verbe ne constate qu'une corrélation ?", o: ["einhergehen mit", "verursachen", "auslösen"], a: 0, ex: "einhergehen mit = to go hand in hand with.", ex_fr: "einhergehen mit = aller de pair avec." },
      { q: "Die Entdeckung zog eine lange Debatte nach ___.", q_fr: "Die Entdeckung zog eine lange Debatte nach ___.", o: ["sich", "ihr", "dem"], a: 0, ex: "etwas nach sich ziehen.", ex_fr: "etwas nach sich ziehen." },
      { q: "Daraus ___ sich, dass weitere Studien nötig sind.", q_fr: "Daraus ___ sich, dass weitere Studien nötig sind.", o: ["ergibt", "gibt", "folgt"], a: 0, ex: "sich ergeben aus.", ex_fr: "sich ergeben aus." }
    ]
  },
  {
    id: 140, level: "C2", icon: "scale",
    title: "Die Daten legen nahe…: hedging and stance", title_fr: "Die Daten legen nahe… : prudence et prise de position",
    subtitle: "Say exactly how sure you are, and show what you think of the sources you quote.", subtitle_fr: "Indiquer exactement son degré de certitude, et montrer ce qu'on pense des sources citées.",
    body: `
<h2>A scale of certainty</h2>
<table>
<tr><td>strongest</td><td><s-de>beweisen</s-de> (rare in empirical research)</td></tr>
<tr><td></td><td><s-de>belegen, zeigen, nachweisen</s-de></td></tr>
<tr><td></td><td><s-de>nahelegen, darauf hindeuten, dafür sprechen</s-de></td></tr>
<tr><td>weakest</td><td><s-de>vermuten lassen</s-de></td></tr>
</table>
<h2>Impersonal hedges</h2>
<p><s-de>Es ist anzunehmen, dass…</s-de> · <s-de>Es ist davon auszugehen, dass…</s-de> · <s-de>Es spricht einiges dafür, dass…</s-de> · <s-de>Es lässt sich nicht ausschließen, dass…</s-de> · <s-de>Es bleibt offen, ob…</s-de> · <s-de>Die Ursache dürfte im Klima liegen.</s-de></p>
<p>Adverbs: <s-de>vermutlich, möglicherweise, tendenziell, weitgehend, in der Regel, im Wesentlichen</s-de>. Careful: <s-de>offenbar</s-de> = apparently, <s-de>offensichtlich</s-de> = obviously.</p>
<h2>Your stance towards a source</h2>
<p><s-de>X zeigt, dass…</s-de> (you accept it) · <s-de>X behauptet, dass…</s-de> (you keep your distance) · <s-de>X räumt ein, dass…</s-de> (X concedes) · <s-de>X wendet ein, dass…</s-de> (X objects) · <s-de>X vertritt die These, dass…</s-de> (X holds)</p>
<div class="tip">Hedging is not weakness but precision. Avoid absolute words like <s-de>immer, nie, beweisen, eindeutig</s-de> unless your evidence really supports them, and choose the reporting verb that matches your opinion of the source.</div>
`,
    body_fr: `
<h2>Une échelle de certitude</h2>
<table>
<tr><td>le plus fort</td><td><s-de>beweisen</s-de> (prouver, rare en recherche empirique)</td></tr>
<tr><td></td><td><s-de>belegen, zeigen, nachweisen</s-de> (montrer, démontrer)</td></tr>
<tr><td></td><td><s-de>nahelegen, darauf hindeuten, dafür sprechen</s-de> (suggérer, indiquer)</td></tr>
<tr><td>le plus faible</td><td><s-de>vermuten lassen</s-de> (laisser supposer)</td></tr>
</table>
<h2>Les formules impersonnelles</h2>
<p><s-de>Es ist anzunehmen, dass…</s-de> (On peut supposer que…) · <s-de>Es ist davon auszugehen, dass…</s-de> (Il faut partir du principe que…) · <s-de>Es spricht einiges dafür, dass…</s-de> · <s-de>Es lässt sich nicht ausschließen, dass…</s-de> · <s-de>Es bleibt offen, ob…</s-de> · <s-de>Die Ursache dürfte im Klima liegen.</s-de></p>
<p>Adverbes : <s-de>vermutlich, möglicherweise, tendenziell, weitgehend, in der Regel, im Wesentlichen</s-de>. Attention : <s-de>offenbar</s-de> = apparemment, <s-de>offensichtlich</s-de> = manifestement.</p>
<h2>Ta position face à une source</h2>
<p><s-de>X zeigt, dass…</s-de> (tu l'acceptes) · <s-de>X behauptet, dass…</s-de> (tu prends tes distances) · <s-de>X räumt ein, dass…</s-de> (X concède) · <s-de>X wendet ein, dass…</s-de> (X objecte) · <s-de>X vertritt die These, dass…</s-de> (X soutient)</p>
<div class="tip">La prudence n'est pas une faiblesse mais une précision. Évite les mots absolus comme <s-de>immer, nie, beweisen, eindeutig</s-de> si tes données ne les justifient pas vraiment, et choisis le verbe introducteur qui correspond à ton avis sur la source.</div>
`,
    examples: [
      ["Die Daten legen nahe, dass der Effekt gering ist.", "The data suggest that the effect is small.", "Les données suggèrent que l'effet est faible."],
      ["Es ist davon auszugehen, dass die Zahl weiter steigt.", "It can be assumed that the number will keep rising.", "Il faut s'attendre à ce que le nombre continue d'augmenter."],
      ["Die Ursache dürfte im Klima liegen.", "The cause probably lies in the climate.", "La cause tient vraisemblablement au climat."],
      ["Es lässt sich nicht ausschließen, dass ein Messfehler vorliegt.", "A measurement error cannot be ruled out.", "On ne peut pas exclure une erreur de mesure."],
      ["Offenbar ist die Ursache noch unbekannt.", "Apparently the cause is still unknown.", "Apparemment, la cause est encore inconnue."],
      ["Müller räumt ein, dass die Stichprobe klein ist.", "Müller concedes that the sample is small.", "Müller reconnaît que l'échantillon est petit."],
      ["Die Autorin vertritt die These, dass Sprache das Denken prägt.", "The author holds that language shapes thought.", "L'autrice soutient que la langue façonne la pensée."]
    ],
    quiz: [
      { q: "Which verb is the most cautious?", q_fr: "Quel verbe est le plus prudent ?", o: ["vermuten lassen", "belegen", "beweisen"], a: 0, ex: "vermuten lassen = to suggest a guess.", ex_fr: "vermuten lassen = laisser supposer." },
      { q: "Es ist davon ___, dass die Zahl steigt.", q_fr: "Es ist davon ___, dass die Zahl steigt.", o: ["auszugehen", "ausgehen", "ausgegangen"], a: 0, ex: "sein + zu-infinitive.", ex_fr: "sein + infinitif en zu." },
      { q: "“offenbar” means…", q_fr: "« offenbar » veut dire…", o: ["apparently", "obviously", "openly"], o_fr: ["apparemment", "manifestement", "ouvertement"], a: 0, ex: "offensichtlich = obviously.", ex_fr: "offensichtlich = manifestement." },
      { q: "You quote a source but keep your distance: X ___, dass…", q_fr: "Tu cites une source en prenant tes distances : X ___, dass…", o: ["behauptet", "zeigt", "belegt"], a: 0, ex: "behaupten = to claim.", ex_fr: "behaupten = affirmer, prétendre." },
      { q: "Die Ursache ___ im Klima liegen. (probably)", q_fr: "Die Ursache ___ im Klima liegen. (vraisemblablement)", o: ["dürfte", "darf", "durfte"], a: 0, ex: "dürfte + infinitive = probably.", ex_fr: "dürfte + infinitif = vraisemblablement." }
    ]
  },
  {
    id: 141, level: "C2", kind: "functional", icon: "quote",
    title: "Everyday German: quoting and paraphrasing sources", title_fr: "L'allemand de tous les jours : citer et paraphraser ses sources",
    subtitle: "Direct and indirect quotations, the usual abbreviations, and how to avoid plagiarism.", subtitle_fr: "Citations directes et indirectes, abréviations usuelles, et comment éviter le plagiat.",
    body: `
<h2>Direct quotations</h2>
<p>In German quotation marks, with the source: <s-de>„Lärm gehört zu den am meisten unterschätzten Umweltbelastungen“ (Müller 2019, S. 45).</s-de> Omissions: <s-de>[…]</s-de>; your additions: <s-de>[Anm. d. Verf.]</s-de> (author's note); a mistake in the original: <s-de>[sic]</s-de>.</p>
<h2>Indirect quotations</h2>
<p>With the Konjunktiv I or a phrase: <s-de>Müller (2019) zufolge sei Lärm…</s-de> · <s-de>Wie Müller (2019) zeigt, ist Lärm…</s-de> · <s-de>Nach Müller (2019, S. 45) …</s-de></p>
<h2>Abbreviations</h2>
<table>
<tr><td><s-de>vgl.</s-de></td><td>vergleiche (cf.), for paraphrases</td></tr>
<tr><td><s-de>ebd.</s-de></td><td>ebenda (ibid.)</td></tr>
<tr><td><s-de>S. 12 f. / S. 12 ff.</s-de></td><td>page 12 and the following page(s)</td></tr>
<tr><td><s-de>Hrsg.</s-de></td><td>Herausgeber (editor)</td></tr>
<tr><td><s-de>u. a.</s-de></td><td>und andere (et al.)</td></tr>
</table>
<h2>Paraphrase and plagiarism</h2>
<p>A paraphrase changes the words and the structure but keeps the meaning, and it always gives the source: <s-de>(vgl. Müller 2019, S. 45)</s-de>. Taking over someone else's ideas without a source is plagiarism, even if you change a few words. In Germany, accusations of plagiarism have cost several politicians their doctorates.</p>
<div class="tip">When in doubt, cite. A text full of sources isn't weak; it shows that you know the state of research and can position yourself within it.</div>
`,
    body_fr: `
<h2>Les citations directes</h2>
<p>Entre guillemets allemands, avec la source : <s-de>„Lärm gehört zu den am meisten unterschätzten Umweltbelastungen“ (Müller 2019, S. 45).</s-de> Coupures : <s-de>[…]</s-de> ; tes ajouts : <s-de>[Anm. d. Verf.]</s-de> (note de l'auteur) ; une erreur dans l'original : <s-de>[sic]</s-de>.</p>
<h2>Les citations indirectes</h2>
<p>Avec le Konjunktiv I ou une tournure : <s-de>Müller (2019) zufolge sei Lärm…</s-de> (Selon Müller…) · <s-de>Wie Müller (2019) zeigt, ist Lärm…</s-de> · <s-de>Nach Müller (2019, S. 45) …</s-de></p>
<h2>Les abréviations</h2>
<table>
<tr><td><s-de>vgl.</s-de></td><td>vergleiche (cf.), pour les paraphrases</td></tr>
<tr><td><s-de>ebd.</s-de></td><td>ebenda (ibid.)</td></tr>
<tr><td><s-de>S. 12 f. / S. 12 ff.</s-de></td><td>page 12 et la ou les pages suivantes</td></tr>
<tr><td><s-de>Hrsg.</s-de></td><td>Herausgeber (éditeur scientifique)</td></tr>
<tr><td><s-de>u. a.</s-de></td><td>und andere (et al.)</td></tr>
</table>
<h2>Paraphrase et plagiat</h2>
<p>Une paraphrase change les mots et la structure mais garde le sens, et elle indique toujours la source : <s-de>(vgl. Müller 2019, S. 45)</s-de>. Reprendre les idées d'autrui sans source, c'est du plagiat, même en changeant quelques mots. En Allemagne, des accusations de plagiat ont coûté leur doctorat à plusieurs responsables politiques.</p>
<div class="tip">Dans le doute, cite. Un texte plein de sources n'est pas faible : il montre que tu connais l'état de la recherche et que tu sais t'y situer.</div>
`,
    examples: [
      ["„Lärm gehört zu den am meisten unterschätzten Umweltbelastungen“ (Müller 2019, S. 45).", "“Noise is among the most underestimated environmental burdens” (Müller 2019, p. 45).", "« Le bruit fait partie des nuisances environnementales les plus sous-estimées » (Müller 2019, p. 45)."],
      ["Müller (2019) zufolge sei Lärm ein unterschätztes Problem.", "According to Müller (2019), noise is an underestimated problem.", "Selon Müller (2019), le bruit serait un problème sous-estimé."],
      ["Wie Müller (2019) zeigt, ist Lärm ein unterschätztes Problem.", "As Müller (2019) shows, noise is an underestimated problem.", "Comme le montre Müller (2019), le bruit est un problème sous-estimé."],
      ["Die Belastung durch Lärm wird häufig unterschätzt (vgl. Müller 2019, S. 45).", "The burden of noise is often underestimated (cf. Müller 2019, p. 45).", "La nuisance sonore est souvent sous-estimée (cf. Müller 2019, p. 45)."],
      ["Auslassungen markiert man mit eckigen Klammern und drei Punkten.", "Omissions are marked with square brackets and three dots.", "On signale les coupures par des crochets et trois points."],
      ["Ein Zitat ohne Quellenangabe ist ein Plagiat.", "A quotation without a source is plagiarism.", "Une citation sans indication de source est un plagiat."],
      ["Die Angaben stammen aus dem Jahresbericht (ebd., S. 12 f.).", "The figures come from the annual report (ibid., p. 12 f.).", "Les chiffres proviennent du rapport annuel (ibid., p. 12 sq.)."]
    ],
    quiz: [
      { q: "“vgl.” stands for…", q_fr: "« vgl. » signifie…", o: ["vergleiche", "vergleichbar", "vorgelegt"], a: 0, ex: "vgl. = vergleiche (cf.).", ex_fr: "vgl. = vergleiche (cf.)." },
      { q: "How do you mark an omission in a quotation?", q_fr: "Comment signaler une coupure dans une citation ?", o: ["[…]", "(sic)", "„…“"], a: 0, ex: "Square brackets and three dots.", ex_fr: "Crochets et trois points." },
      { q: "Müller (2019) ___ sei Lärm ein großes Problem.", q_fr: "Müller (2019) ___ sei Lärm ein großes Problem.", o: ["zufolge", "folgend", "laut"], a: 0, ex: "zufolge comes after the name.", ex_fr: "zufolge se place après le nom." },
      { q: "A paraphrase…", q_fr: "Une paraphrase…", o: ["changes words and structure, keeps the meaning and gives the source", "changes a few words and needs no source", "copies the text in quotation marks"], o_fr: ["change les mots et la structure, garde le sens et indique la source", "change quelques mots et n'a pas besoin de source", "recopie le texte entre guillemets"], a: 0, ex: "Always with the source.", ex_fr: "Toujours avec la source." },
      { q: "“ebd.” means…", q_fr: "« ebd. » veut dire…", o: ["ibid. (the same source)", "editor", "and the following pages"], o_fr: ["ibid. (la même source)", "éditeur", "et les pages suivantes"], a: 0, ex: "ebd. = ebenda.", ex_fr: "ebd. = ebenda." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    139: {
      gap: [["Der Anstieg ist vor allem auf die Erwärmung ___. (zurückführen)", "zurückzuführen"], ["Die Ergebnisse ___ auf einer Stichprobe von 2 000 Personen. (beruhen)", "beruhen"], ["Die Entdeckung zog eine lange Debatte nach ___.", "sich"], ["Der Rückgang der Gletscher geht mit steigenden Temperaturen ___.", "einher"]],
      fix: [["Das ist auf den Klimawandel zurückzuführt.", "Das ist auf den Klimawandel zurückzuführen.", "sein + zu-infinitive: zurückzuführen.", "sein + infinitif en zu : zurückzuführen."], ["Das Ergebnis resultiert von einem Messfehler.", "Das Ergebnis resultiert aus einem Messfehler.", "resultieren aus + dative.", "resultieren aus + datif."]],
      task: ["Explain the causes and effects of a phenomenon (4 sentences) with zurückzuführen sein auf, zur Folge haben, einhergehen mit and sich ergeben aus.", "Explique les causes et les effets d'un phénomène (4 phrases) avec zurückzuführen sein auf, zur Folge haben, einhergehen mit et sich ergeben aus.", "Der Rückgang der Gletscher ist vor allem auf die Erderwärmung zurückzuführen. Er hat zur Folge, dass in manchen Regionen im Sommer Wasser fehlt. Zudem geht er mit einem Anstieg des Meeresspiegels einher. Daraus ergibt sich die Notwendigkeit, schnell zu handeln."]
    },
    140: {
      gap: [["Die Daten legen ___, dass der Effekt gering ist.", "nahe"], ["Es ist davon ___, dass die Zahl weiter steigt. (ausgehen)", "auszugehen"], ["Die Ursache ___ im Klima liegen. (dürfen, Vermutung)", "dürfte"], ["Es lässt sich nicht ___, dass ein Messfehler vorliegt.", "ausschließen"]],
      fix: [["Die Studie beweist eindeutig, dass Kaffee das Leben verlängert.", "Die Studie legt nahe, dass Kaffeetrinker im Durchschnitt etwas länger leben.", "Don't overclaim: a correlation proves nothing.", "Ne pas surinterpréter : une corrélation ne prouve rien."], ["Offensichtlich ist die Ursache noch unbekannt.", "Offenbar ist die Ursache noch unbekannt.", "offenbar = apparently; offensichtlich = obviously.", "offenbar = apparemment ; offensichtlich = manifestement."]],
      task: ["Rewrite these overconfident claims cautiously: Handys machen Kinder dumm. Die Studie beweist, dass Sport glücklich macht. Der Klimawandel ist an allem schuld.", "Reformule prudemment ces affirmations trop sûres d'elles : Handys machen Kinder dumm. Die Studie beweist, dass Sport glücklich macht. Der Klimawandel ist an allem schuld.", "Eine übermäßige Handynutzung könnte sich negativ auf die Konzentration von Kindern auswirken. Die Ergebnisse der Studie legen nahe, dass Sport mit einer höheren Lebenszufriedenheit einhergeht. Viele Veränderungen dürften zumindest teilweise auf den Klimawandel zurückzuführen sein."]
    },
    141: {
      gap: [["Die Abkürzung „vgl.“ steht für „___“.", "vergleiche"], ["Müller (2019) ___ sei Lärm ein wichtiger Faktor.", "zufolge"], ["Ein Zitat ohne Quellenangabe ist ein ___.", "Plagiat"], ["Auslassungen markiert man mit eckigen ___ und drei Punkten.", "Klammern"]],
      fix: [["Wie Müller schreibt, Lärm sei ein wichtiger Faktor.", "Wie Müller schreibt, ist Lärm ein wichtiger Faktor.", "After a wie clause, the main clause starts with the verb.", "Après une proposition en wie, la principale commence par le verbe."], ["Lärm ist ein wichtiger Faktor (Müller).", "Lärm ist ein wichtiger Faktor (vgl. Müller 2019, S. 45).", "Give the year and the page.", "Indiquer l'année et la page."]],
      task: ["Paraphrase this quotation in your own words and give the source correctly: „Lärm gehört zu den am meisten unterschätzten Umweltbelastungen.“ (Müller 2019, S. 45)", "Paraphrase cette citation avec tes propres mots et indique correctement la source : „Lärm gehört zu den am meisten unterschätzten Umweltbelastungen.“ (Müller 2019, S. 45)", "Müller zufolge wird die Belastung durch Lärm häufig unterschätzt, obwohl sie zu den wichtigsten Umweltproblemen zählt (vgl. Müller 2019, S. 45)."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "seminararbeit", lesson: 140, level: "C2", icon: "scale", partner: "Professorin Haas", role: "your professor", role_fr: "ta professeure",
    title: "Feedback on a term paper", title_fr: "Retour sur un mémoire",
    setting: "Professor Haas is discussing the draft of your term paper on noise and health. She thinks some of your claims go too far.", setting_fr: "La professeure Haas discute avec toi du brouillon de ton mémoire sur le bruit et la santé. Elle trouve que certaines affirmations vont trop loin.",
    turns: [
      { p: "In Ihrer Arbeit steht: „Die Studie beweist, dass Lärm krank macht.“ Ist das nicht zu stark?", en: "Your paper says: “The study proves that noise makes people ill.” Isn't that too strong?", fr: "Dans votre travail, il est écrit : « L'étude prouve que le bruit rend malade. » N'est-ce pas trop fort ?" },
      { y: ["Sie haben recht. Besser wäre: „Die Ergebnisse legen nahe, dass Lärm das Krankheitsrisiko erhöht.“", "Sie haben recht. Besser wäre: „Die Ergebnisse nahelegen, dass Lärm das Krankheitsrisiko erhöht.“", "Sie haben recht. Besser wäre: „Die Ergebnisse legen nahe, dass Lärm erhöht das Krankheitsrisiko.“"], en: "You're right. It would be better to say: “The results suggest that noise increases the risk of illness.”", fr: "Vous avez raison. Il vaudrait mieux écrire : « Les résultats suggèrent que le bruit augmente le risque de maladie. »", why: "nahelegen is separable; dass: verb at the end.", why_fr: "nahelegen est séparable ; dass : verbe à la fin." },
      { p: "Gut. Und worauf führen Sie den Effekt zurück?", en: "Good. And what do you put the effect down to?", fr: "Bien. Et à quoi attribuez-vous cet effet ?" },
      { y: ["Er ist vermutlich darauf zurückzuführen, dass Lärm den Schlaf stört.", "Er ist vermutlich darauf zurückführen, dass Lärm den Schlaf stört.", "Er ist vermutlich dafür zurückzuführen, dass Lärm den Schlaf stört."], en: "It's probably due to the fact that noise disturbs sleep.", fr: "Il est sans doute dû au fait que le bruit perturbe le sommeil.", why: "zurückzuführen sein auf → darauf, dass…", why_fr: "zurückzuführen sein auf → darauf, dass…" },
      { p: "Und was ist mit anderen Faktoren, zum Beispiel dem Einkommen?", en: "And what about other factors, income for example?", fr: "Et les autres facteurs, le revenu par exemple ?" },
      { y: ["Es lässt sich nicht ausschließen, dass auch das Einkommen eine Rolle spielt.", "Es lässt sich nicht ausschließen, dass auch das Einkommen spielt eine Rolle.", "Es lässt nicht sich ausschließen, dass auch das Einkommen eine Rolle spielt."], en: "It can't be ruled out that income also plays a role.", fr: "On ne peut pas exclure que le revenu joue aussi un rôle.", why: "sich right after lässt; dass: verb at the end.", why_fr: "sich juste après lässt ; dass : verbe à la fin." },
      { p: "Sehr gut. Wie zitieren Sie Müller?", en: "Very good. How do you quote Müller?", fr: "Très bien. Comment citez-vous Müller ?" },
      { y: ["Müller (2019, S. 45) zufolge sei Lärm einer der wichtigsten Umweltfaktoren.", "Müller (2019, S. 45) zufolge sei Lärm einer der wichtigsten Umweltfaktor.", "Müller (2019, S. 45) zufolge sei Lärm einer der wichtigste Umweltfaktoren."], en: "According to Müller (2019, p. 45), noise is one of the most important environmental factors.", fr: "Selon Müller (2019, p. 45), le bruit serait l'un des facteurs environnementaux les plus importants.", why: "Konjunktiv I; einer der + genitive plural.", why_fr: "Konjunktiv I ; einer der + génitif pluriel." },
      { p: "Und Ihr Fazit?", en: "And your conclusion?", fr: "Et votre conclusion ?" },
      { y: ["Es ist davon auszugehen, dass Lärmschutz der Gesundheit nützt; weitere Studien sind jedoch nötig.", "Es ist davon ausgehen, dass Lärmschutz der Gesundheit nützt; weitere Studien sind jedoch nötig.", "Es ist davon auszugehen, dass Lärmschutz die Gesundheit nützt; weitere Studien sind jedoch nötig."], en: "It can be assumed that noise protection benefits health; however, further studies are needed.", fr: "On peut supposer que la protection contre le bruit profite à la santé ; d'autres études sont toutefois nécessaires.", why: "sein + zu-infinitive; nützen + dative.", why_fr: "sein + infinitif en zu ; nützen + datif." }
    ] },
  { id: "quellenarbeit", lesson: 141, level: "C2", icon: "quote", partner: "Jan", role: "a fellow student", role_fr: "un camarade d'études",
    title: "Quoting correctly", title_fr: "Bien citer",
    setting: "Your fellow student Jan is writing his first term paper and isn't sure how to deal with his sources.", setting_fr: "Ton camarade Jan écrit son premier mémoire et ne sait pas bien comment traiter ses sources.",
    turns: [
      { p: "Ich habe einen Absatz aus einem Artikel übernommen. Reicht es, wenn ich ein paar Wörter ändere?", en: "I've taken a paragraph from an article. Is it enough if I change a few words?", fr: "J'ai repris un paragraphe d'un article. Ça suffit si je change quelques mots ?" },
      { y: ["Nein, auch dann musst du die Quelle angeben, sonst ist es ein Plagiat.", "Nein, auch dann musst du die Quelle anzugeben, sonst ist es ein Plagiat.", "Nein, auch dann musst du die Quelle angeben, sonst es ist ein Plagiat."], en: "No, even then you have to give the source, otherwise it's plagiarism.", fr: "Non, même dans ce cas tu dois indiquer la source, sinon c'est du plagiat.", why: "Modal verb + infinitive without zu; sonst + verb.", why_fr: "Verbe de modalité + infinitif sans zu ; sonst + verbe." },
      { p: "Und wenn ich den Text wörtlich übernehme?", en: "And if I take the text word for word?", fr: "Et si je reprends le texte mot pour mot ?" },
      { y: ["Dann setzt du ihn in Anführungszeichen und gibst die Seite an.", "Dann setzt du ihn in Anführungszeichen und gibst die Seite auf.", "Dann setzt du ihn in Anführungszeichen und gibst an die Seite."], en: "Then you put it in quotation marks and give the page.", fr: "Alors tu le mets entre guillemets et tu indiques la page.", why: "angeben (to give, to state) is separable: gibst … an.", why_fr: "angeben (indiquer) est séparable : gibst … an." },
      { p: "Und wofür steht eigentlich „vgl.“?", en: "And what does “vgl.” actually stand for?", fr: "Et que veut dire « vgl. », au juste ?" },
      { y: ["Für „vergleiche“: Man verwendet es bei sinngemäßen Zitaten.", "Für „vergleichen“: Man verwendet es bei sinngemäßen Zitaten.", "Für „vergleiche“: Man verwendet es bei sinngemäße Zitaten."], en: "For “vergleiche” (compare): it's used for paraphrased quotations.", fr: "« vergleiche » (cf.) : on l'emploie pour les citations reformulées.", why: "vgl. = vergleiche (imperative); bei + dative plural.", why_fr: "vgl. = vergleiche (impératif) ; bei + datif pluriel." },
      { p: "Und wenn ich einen Teil des Zitats weglassen will?", en: "And if I want to leave out part of the quotation?", fr: "Et si je veux couper une partie de la citation ?" },
      { y: ["Dann markierst du die Auslassung mit eckigen Klammern und drei Punkten.", "Dann markierst du die Auslassung mit eckige Klammern und drei Punkten.", "Dann markierst du die Auslassung mit eckigen Klammern und drei Punkte."], en: "Then you mark the omission with square brackets and three dots.", fr: "Alors tu signales la coupure par des crochets et trois points.", why: "mit + dative plural: eckigen Klammern, drei Punkten.", why_fr: "mit + datif pluriel : eckigen Klammern, drei Punkten." },
      { p: "Danke! Ohne dich hätte ich das falsch gemacht.", en: "Thanks! Without you I'd have got that wrong.", fr: "Merci ! Sans toi, je me serais trompé." },
      { y: ["Gern. Lieber einmal zu viel zitieren als einmal zu wenig.", "Gern. Lieber einmal zu viel zitieren wie einmal zu wenig.", "Gern. Lieber einmal zu viel zitieren als einmal zu wenige."], en: "You're welcome. Better to cite once too often than once too little.", fr: "Avec plaisir. Mieux vaut citer une fois de trop qu'une fois de moins.", why: "lieber … als.", why_fr: "lieber … als." }
    ] }
  );

  W.READINGS.push({
    id: "wegener", level: "C2", icon: "mountain", title: "Alfred Wegener und die wandernden Kontinente", genre: "Feature article",
    intro: "A meteorologist with a bold idea, decades of rejection, and a late triumph: the story of continental drift.",
    intro_fr: "Un météorologue avec une idée audacieuse, des décennies de rejet et un triomphe tardif : l'histoire de la dérive des continents.",
    paragraphs: [
      { de: "Am 6. Januar 1912 stellte der Meteorologe Alfred Wegener in Frankfurt am Main eine Idee vor, die den meisten Geologen abwegig erschien: Die Kontinente seien nicht fest, sondern bewegten sich langsam über die Erdoberfläche. Einst, so Wegener, hätten sie einen einzigen großen Kontinent gebildet, den er später „Pangäa“ nannte.", en: "On 6 January 1912, the meteorologist Alfred Wegener presented an idea in Frankfurt am Main that seemed absurd to most geologists: the continents were not fixed but moved slowly across the earth's surface. Once, according to Wegener, they had formed a single large continent, which he later called “Pangaea”.", fr: "Le 6 janvier 1912, le météorologue Alfred Wegener présenta à Francfort-sur-le-Main une idée qui parut extravagante à la plupart des géologues : les continents ne seraient pas fixes, mais se déplaceraient lentement à la surface de la Terre. Autrefois, selon Wegener, ils auraient formé un seul grand continent, qu'il appela plus tard « Pangée »." },
      { de: "Wegener stützte sich auf eine Reihe von Beobachtungen. Die Küstenlinien Südamerikas und Afrikas passen wie Puzzleteile zusammen; auf beiden Kontinenten finden sich dieselben Fossilien und ähnliche Gesteine. 1915 legte er seine Theorie in dem Buch „Die Entstehung der Kontinente und Ozeane“ ausführlich dar.", en: "Wegener relied on a series of observations. The coastlines of South America and Africa fit together like jigsaw pieces; the same fossils and similar rocks are found on both continents. In 1915 he set out his theory in detail in the book “The Origin of Continents and Oceans”.", fr: "Wegener s'appuyait sur une série d'observations. Les côtes de l'Amérique du Sud et de l'Afrique s'emboîtent comme des pièces de puzzle ; on trouve sur les deux continents les mêmes fossiles et des roches semblables. En 1915, il exposa sa théorie en détail dans le livre « La genèse des continents et des océans »." },
      { de: "Dennoch stieß er bei den meisten Fachleuten auf Ablehnung. Der wichtigste Einwand lautete, er könne nicht erklären, welche Kraft die riesigen Landmassen bewegen solle. Hinzu kam, dass er als Meteorologe in der Geologie als Außenseiter galt. Im November 1930 starb Wegener auf einer Expedition im grönländischen Eis.", en: "Nevertheless, most experts rejected his idea. The main objection was that he could not explain what force was supposed to move the huge land masses. In addition, as a meteorologist he was regarded as an outsider in geology. In November 1930 Wegener died on an expedition on the Greenland ice.", fr: "Il se heurta pourtant au refus de la plupart des spécialistes. La principale objection était qu'il ne pouvait pas expliquer quelle force était censée déplacer ces immenses masses de terre. S'y ajoutait le fait qu'en tant que météorologue, il passait pour un outsider en géologie. En novembre 1930, Wegener mourut lors d'une expédition sur la glace du Groenland." },
      { de: "Erst in den Sechzigerjahren änderte sich das Bild. Untersuchungen des Meeresbodens zeigten, dass dort neue Erdkruste entsteht und die Platten der Erde tatsächlich wandern. Aus Wegeners Idee wurde die Theorie der Plattentektonik, die heute zu den Grundlagen der Geowissenschaften gehört. Das Alfred-Wegener-Institut in Bremerhaven trägt seinen Namen.", en: "Only in the sixties did the picture change. Studies of the seabed showed that new crust forms there and that the earth's plates really do move. Wegener's idea became the theory of plate tectonics, which today is one of the foundations of the earth sciences. The Alfred Wegener Institute in Bremerhaven bears his name.", fr: "Ce n'est que dans les années soixante que les choses changèrent. L'étude des fonds marins montra qu'il s'y forme une nouvelle croûte terrestre et que les plaques se déplacent réellement. L'idée de Wegener devint la théorie de la tectonique des plaques, qui compte aujourd'hui parmi les fondements des sciences de la Terre. L'Institut Alfred-Wegener de Bremerhaven porte son nom." }
    ],
    glossary: { "Meteorologe": ["meteorologist", "météorologue"], "Geologen": ["geologists", "géologues"], "abwegig": ["absurd, far-fetched", "extravagant, absurde"], "Erdoberfläche": ["earth's surface", "surface de la Terre"], "Einst": ["once, long ago", "autrefois"], "Pangäa": ["Pangaea", "Pangée"], "stützte": ["relied, based", "s'appuyait"], "Beobachtungen": ["observations", "observations"], "Küstenlinien": ["coastlines", "côtes"], "Puzzleteile": ["jigsaw pieces", "pièces de puzzle"], "Fossilien": ["fossils", "fossiles"], "Gesteine": ["rocks", "roches"], "Entstehung": ["origin", "genèse"], "Ozeane": ["oceans", "océans"], "ausführlich": ["in detail", "en détail"], "Ablehnung": ["rejection", "refus"], "Einwand": ["objection", "objection"], "Landmassen": ["land masses", "masses de terre"], "Außenseiter": ["outsider", "marginal, outsider"], "grönländischen": ["Greenland (adj.)", "du Groenland"], "Sechzigerjahren": ["sixties", "années soixante"], "Erdkruste": ["earth's crust", "croûte terrestre"], "Plattentektonik": ["plate tectonics", "tectonique des plaques"], "Geowissenschaften": ["earth sciences", "sciences de la Terre"], "Bremerhaven": ["Bremerhaven (port city)", "Bremerhaven (ville portuaire)"] },
    questions: [
      { q: "Was behauptete Wegener 1912?", o: ["Dass sich die Kontinente langsam bewegen", "Dass die Erde eine Scheibe ist", "Dass es keine Fossilien gibt"], a: 0 },
      { q: "Welche Beobachtung stützte seine These?", o: ["Die Küstenlinien Südamerikas und Afrikas passen zusammen.", "Das Wetter in Europa ändert sich.", "Die Ozeane werden wärmer."], a: 0 },
      { q: "Was war der wichtigste Einwand gegen seine Theorie?", o: ["Er konnte die Kraft nicht erklären, die die Kontinente bewegt.", "Er hatte keine Belege.", "Er schrieb auf Englisch."], a: 0 },
      { q: "Warum galt Wegener als Außenseiter?", o: ["Weil er Meteorologe und kein Geologe war", "Weil er im Ausland lebte", "Weil er sehr jung war"], a: 0 },
      { q: "Wann änderte sich das Bild?", o: ["In den Sechzigerjahren, durch Untersuchungen des Meeresbodens", "Gleich nach seinem Tod", "Erst im 21. Jahrhundert"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-c2-3", unit: "c2-3", level: "C2", icon: "radio",
    title: "Was eine Studie wirklich zeigt", title_fr: "Ce que montre vraiment une étude",
    context: "A science programme on the radio. The host talks to the science journalist Frau Roth about a headline.", context_fr: "Une émission scientifique à la radio. L'animateur parle avec la journaliste scientifique Frau Roth d'un gros titre.",
    words: [["die Schlagzeile, -n", "the headline", "le gros titre"], ["lediglich", "merely, only", "seulement, uniquement"], ["der Durchschnitt", "the average", "la moyenne"], ["regelmäßig", "regular", "régulier"], ["mit Vorsicht zu genießen", "to be taken with a pinch of salt", "à prendre avec des pincettes"]],
    lines: [["Moderator", "Frau Roth, heute lautet eine Schlagzeile: „Kaffee verlängert das Leben.“ Stimmt das?", "de-DE"], ["Frau Roth", "So steht es in der Studie gar nicht. Die Autoren schreiben lediglich, Kaffeetrinker lebten im Durchschnitt etwas länger. Das ist ein Zusammenhang, kein Beweis für eine Ursache.", "de-DE"], ["Moderator", "Wo liegt der Unterschied?", "de-DE"], ["Frau Roth", "Es könnte sein, dass Menschen, die viel Kaffee trinken, häufiger unter Leuten sind oder einen regelmäßigeren Alltag haben. Dann wäre nicht der Kaffee die Ursache, sondern der Lebensstil.", "de-DE"], ["Moderator", "Was sollten unsere Hörerinnen und Hörer also beachten?", "de-DE"], ["Frau Roth", "Auf die Verben achten! Wenn Forschende schreiben, die Daten legten etwas nahe, ist das bewusst vorsichtig formuliert. Aus „deutet darauf hin“ wird in Schlagzeilen leider schnell „beweist“.", "de-DE"], ["Moderator", "Und die Größe der Studie?", "de-DE"], ["Frau Roth", "Die spielt eine große Rolle. Ergebnisse, die auf einer Stichprobe von zwanzig Personen beruhen, sind mit Vorsicht zu genießen.", "de-DE"]],
    gist: ["Worum geht es im Gespräch?", ["Um den Unterschied zwischen einer Studie und ihrer Schlagzeile", "Um die Geschichte des Kaffees", "Um ein neues Medikament"]],
    detail: [["Was steht laut Frau Roth wirklich in der Studie?", ["Kaffeetrinker leben im Durchschnitt etwas länger.", "Kaffee verlängert das Leben.", "Kaffee ist gefährlich."]], ["Was könnte eine andere Erklärung sein?", ["Der Lebensstil der Kaffeetrinker", "Die Sorte des Kaffees", "Das Wetter"]], ["Worauf sollen die Hörer achten?", ["Auf die Verben, mit denen Ergebnisse beschrieben werden", "Auf die Farbe der Grafiken", "Auf die Namen der Forschenden"]], ["Was sagt sie über eine Stichprobe von zwanzig Personen?", ["Die Ergebnisse sind mit Vorsicht zu genießen.", "Sie reicht völlig aus.", "Sie ist zu groß."]]],
    decode: ["Das ist ein Zusammenhang, kein Beweis für eine Ursache", "Wenn Forschende schreiben, die Daten legten etwas nahe, ist das bewusst vorsichtig formuliert"],
    tip: "Frau Roth reports the study in the Konjunktiv (Kaffeetrinker lebten…, die Daten legten nahe) to keep her distance, and she uses the conditional to suggest another explanation (Dann wäre nicht der Kaffee die Ursache). Hedging is just as common in speech as in writing.", tip_fr: "Frau Roth rapporte l'étude au Konjunktiv (Kaffeetrinker lebten…, die Daten legten nahe) pour garder ses distances, et emploie le conditionnel pour suggérer une autre explication (Dann wäre nicht der Kaffee die Ursache). La prudence est aussi courante à l'oral qu'à l'écrit."
  }]);

  W.PROMPTS.push({ id: "de-c2-3", level: "C2", q: "Halte einen Vortrag (etwa drei bis vier Minuten): „Eine bahnbrechende Idee, die zunächst abgelehnt wurde: Was lehrt uns der Fall Wegener?“ Stelle den Fall vor, erkläre die Gründe der Ablehnung und ziehe Schlüsse für heute.", en: "Give a talk (about three to four minutes): “A ground-breaking idea that was rejected at first: what does the Wegener case teach us?” Present the case, explain the reasons for the rejection and draw conclusions for today.", fr: "Fais un exposé (environ trois à quatre minutes) : « Une idée révolutionnaire d'abord rejetée : que nous apprend le cas Wegener ? » Présente le cas, explique les raisons du rejet et tire des conclusions pour aujourd'hui.", time: 240,
    phrases: ["In meinem Vortrag möchte ich am Beispiel … zeigen, wie…", "Das ist vor allem darauf zurückzuführen, dass…", "Es ist davon auszugehen, dass…", "Daraus folgt für mich: …", "Letzten Endes…"],
    model: "In meinem Vortrag möchte ich am Beispiel Alfred Wegeners zeigen, wie Wissenschaft funktioniert. 1912 stellte Wegener die These auf, die Kontinente bewegten sich. Seine Belege waren durchaus beachtlich: Die Küstenlinien Südamerikas und Afrikas passen zusammen, und auf beiden Seiten des Atlantiks finden sich dieselben Fossilien. Dennoch stieß er auf Ablehnung. Das ist vor allem darauf zurückzuführen, dass er keinen überzeugenden Mechanismus nennen konnte. Erst die Erforschung des Meeresbodens in den Sechzigerjahren lieferte die entscheidenden Daten. Was lehrt uns dieser Fall? Erstens, dass Skepsis in der Wissenschaft kein Fehler ist, sondern ein notwendiger Prüfstein. Zweitens aber auch, dass Außenseiter recht haben können. Es ist davon auszugehen, dass auch heute manche Ideen vorschnell verworfen werden. Daraus folgt für mich: Wir sollten neue Thesen kritisch, aber offen prüfen. Letzten Endes entscheiden nicht Ansehen und Titel, sondern Belege." });

  W.WRITING_GUIDE["c2-3"] = { genre: "An essay (C2)", genre_fr: "Un essai (C2)",
    plan: [["A striking example and your thesis.", "Un exemple frappant et ta thèse."], ["Why science must be explained to the public.", "Pourquoi la science doit être expliquée au public."], ["The risks of simplification.", "Les risques de la simplification."], ["How to simplify well.", "Comment bien simplifier."], ["A conclusion: science as a process.", "Une conclusion : la science comme processus."]],
    marks: [["Meines Erachtens ist Vereinfachung", "the thesis, with a condition", "la thèse, avec une condition"], ["liegt auf der Hand", "an idiom for an obvious point", "une expression pour une évidence"], ["ist davon auszugehen", "a cautious academic phrase", "une formule scientifique prudente"], ["Aus einem vorsichtigen „Die Daten legen nahe“ wird schnell", "an example of distortion", "un exemple de déformation"], ["Wie lässt sich dieses Dilemma lösen?", "a question leading to your solution", "une question qui mène à ta solution"], ["Letzten Endes ist es gerade diese Einsicht, die", "a cleft sentence in the conclusion", "une phrase clivée dans la conclusion"]] };

  /* Atelier de langue : champs allemands d'abord, puis anglais et français (voir localize.js). */
  W.LEXIS = W.LEXIS || {};
  W.LEXIS["c2-3"] = {
    colloc: [
      ["zu einem Ergebnis gelangen", "to arrive at a result", "parvenir à un résultat", "Die Forscher gelangten zu einem überraschenden Ergebnis.", "gelangten", ["gelungen", "erlangten"]],
      ["Gültigkeit beanspruchen", "to claim validity", "prétendre à la validité", "Die Theorie beansprucht allgemeine Gültigkeit.", "beansprucht", ["beantragt", "beachtet"]],
      ["Anerkennung finden", "to gain recognition", "être reconnu", "Seine Theorie fand erst spät Anerkennung.", "fand", ["nahm", "gab"]],
      ["auf Ablehnung stoßen", "to meet with rejection", "se heurter à un refus", "Wegeners Idee stieß zunächst auf Ablehnung.", "stieß", ["fiel", "ging"]],
      ["den Forschungsstand zusammenfassen", "to summarise the state of research", "résumer l'état de la recherche", "Das erste Kapitel fasst den Forschungsstand zusammen.", "fasst", ["legt", "stellt"]],
      ["eine Annahme treffen", "to make an assumption", "poser une hypothèse", "Wir treffen die Annahme, dass die Werte stabil bleiben.", "treffen", ["stellen", "legen"]],
      ["Zweifel ausräumen", "to dispel doubts", "lever les doutes", "Neue Messungen räumten die letzten Zweifel aus.", "räumten", ["raubten", "rührten"]],
      ["einen Beweis liefern", "to provide proof", "apporter une preuve", "Erst die Untersuchung des Meeresbodens lieferte den Beweis.", "lieferte", ["lieh", "lief"]],
      ["Rückschlüsse ziehen", "to draw conclusions", "tirer des conclusions", "Aus den Ablagerungen lassen sich Rückschlüsse auf das Klima ziehen.", "ziehen", ["machen", "nehmen"]],
      ["neue Erkenntnisse gewinnen", "to gain new insights", "acquérir de nouvelles connaissances", "Aus dem Experiment gewannen sie neue Erkenntnisse.", "gewannen", ["gewöhnten", "gewährten"]]
    ],
    wf: [
      ["Die ___ seiner Theorie dauerte Jahrzehnte. (ANERKENNEN)", "Anerkennung"],
      ["Der Unterschied ist statistisch ___. (SIGNIFIKANZ)", "signifikant"],
      ["In der Geologie galt Wegener als ___. (AUẞEN)", "Außenseiter"],
      ["Die ___ des Meeresbodens brachte den Durchbruch. (UNTERSUCHEN)", "Untersuchung|Erforschung"],
      ["Seine These war damals sehr ___. (UMSTREITEN)", "umstritten"],
      ["Die ___ der Daten dauert noch an. (AUSWERTEN)", "Auswertung"],
      ["Das ist eine ziemlich ___ Annahme. (WAGEN)", "gewagte"],
      ["Die ___ der Kontinente ist heute gut belegt. (VERSCHIEBEN)", "Verschiebung"]
    ],
    kwt: [
      ["Der Anstieg wird vor allem durch die Erwärmung verursacht.", "ZURÜCKZUFÜHREN", "Der Anstieg ___.", "ist vor allem auf die Erwärmung zurückzuführen"],
      ["Wahrscheinlich steigt die Zahl weiter.", "AUSZUGEHEN", "Es ___ die Zahl weiter steigt.", "ist davon auszugehen, dass"],
      ["Die Ergebnisse deuten darauf hin, dass der Effekt gering ist.", "NAHE", "Die Ergebnisse ___ der Effekt gering ist.", "legen nahe, dass"],
      ["Vielleicht liegt ein Messfehler vor.", "AUSSCHLIEẞEN", "Es lässt sich ___ ein Messfehler vorliegt.", "nicht ausschließen, dass"],
      ["Die Studie stützt sich auf Daten aus zwölf Ländern.", "BERUHT", "Die Studie ___.", "beruht auf Daten aus zwölf Ländern"],
      ["Die Entdeckung führte zu einer langen Debatte.", "NACH", "Die Entdeckung zog ___.", "eine lange Debatte nach sich"]
    ],
    idioms: [
      ["den Stein ins Rollen bringen", "eine Entwicklung in Gang setzen", "to set the ball rolling", "lancer le mouvement", "Wegeners Vortrag brachte den Stein ins Rollen.", "brachte den Stein ins Rollen"],
      ["das Ei des Kolumbus", "eine überraschend einfache Lösung", "a simple but brilliant solution", "l'œuf de Colomb", "Diese Methode ist das Ei des Kolumbus.", "das Ei des Kolumbus"],
      ["graue Theorie sein", "nur in der Theorie funktionieren", "to be mere theory", "être de la pure théorie", "Das klingt gut, ist aber graue Theorie.", "graue Theorie"],
      ["etwas auf den Kopf stellen", "etwas völlig verändern", "to turn something upside down", "bouleverser quelque chose", "Die Entdeckung stellte das ganze Fach auf den Kopf.", "auf den Kopf"],
      ["eine Binsenweisheit", "etwas, das jeder schon weiß", "a truism", "une lapalissade", "Dass Übung hilft, ist eine Binsenweisheit.", "eine Binsenweisheit"],
      ["mit Kanonen auf Spatzen schießen", "übertrieben große Mittel einsetzen", "to use a sledgehammer to crack a nut", "écraser une mouche avec un marteau", "Für diese kleine Frage eine Großstudie? Da schießt man mit Kanonen auf Spatzen.", "mit Kanonen auf Spatzen"],
      ["Haarspalterei betreiben", "sich mit unwichtigen Details aufhalten", "to split hairs", "couper les cheveux en quatre", "Hör auf, Haarspalterei zu betreiben!", "Haarspalterei zu betreiben"],
      ["des Pudels Kern", "der eigentliche Kern einer Sache", "the heart of the matter", "le fin mot de l'affaire", "Das also ist des Pudels Kern: Es fehlt das Geld.", "des Pudels Kern"]
    ]
  };

  W.COURSE.push({ id: "c2-3", level: "C2", icon: "microscope", title: "The language of science", title_fr: "La langue des sciences",
    intro: "Science lives from precise language. In this unit, you'll learn the verbs of cause and effect (zurückzuführen sein auf, einhergehen mit), how to say exactly how sure you are (Die Daten legen nahe…, es ist davon auszugehen…), and how to quote and paraphrase sources correctly. You'll also read the story of Alfred Wegener, whose theory of drifting continents was rejected for decades before it was proved right.",
    intro_fr: "La science vit d'une langue précise. Dans cette unité, tu vas apprendre les verbes de la cause et de l'effet (zurückzuführen sein auf, einhergehen mit), la façon d'indiquer exactement le degré de certitude d'une affirmation (Die Daten legen nahe…, es ist davon auszugehen…), et la manière de citer et de paraphraser correctement tes sources. Tu liras aussi l'histoire d'Alfred Wegener, dont la théorie de la dérive des continents fut rejetée pendant des décennies avant d'être confirmée.",
    can: ["Express cause, effect and correlation precisely", "Hedge claims and show your stance towards sources", "Quote, paraphrase and cite sources correctly", "Talk about research and the earth sciences", "Write an essay on science and the public (C2)"],
    can_fr: ["Exprimer avec précision la cause, l'effet et la corrélation", "Nuancer ses affirmations et montrer sa position face aux sources", "Citer, paraphraser et référencer correctement ses sources", "Parler de la recherche et des sciences de la Terre", "Écrire un essai sur la science et le public (C2)"],
    lessons: [139, 140, 141], vocab: ["fachtexteDE", "erdgeschichteDE"], reading: "wegener", prompt: "de-c2-3",
    writing: { task: "Write an essay (300-350 words): “Science for everyone: how much simplification can the truth bear?” Include a striking example and your thesis, why science must be explained, the risks of simplification, how to simplify well, and a conclusion.", task_fr: "Écris un essai (300 à 350 mots) : « La science pour tous : jusqu'où peut-on simplifier la vérité ? » Avec un exemple frappant et ta thèse, pourquoi la science doit être expliquée, les risques de la simplification, comment bien simplifier, et une conclusion.", words: "300-350",
      tips: ["Meines Erachtens…, solange…", "… liegt auf der Hand.", "Es ist davon auszugehen, dass…", "Wie lässt sich dieses Dilemma lösen?", "Letzten Endes ist es gerade …, die / der …"],
      checklist: ["I wrote a lead-in and a clear thesis", "I used at least two verbs of cause and effect", "I hedged my claims where necessary", "I proposed a solution", "I wrote between 300 and 350 words"],
      checklist_fr: ["J'ai écrit une amorce et une thèse claire", "J'ai employé au moins deux verbes de cause et d'effet", "J'ai nuancé mes affirmations quand c'était nécessaire", "J'ai proposé une solution", "J'ai écrit entre 300 et 350 mots"],
      model: "Kaum eine Woche vergeht ohne Schlagzeilen wie „Forscher beweisen: Schokolade macht schlank“. Solche Meldungen zeigen, wie schwierig die Vermittlung von Wissenschaft ist. Einerseits haben Bürgerinnen und Bürger ein Recht darauf, zu erfahren, was mit ihren Steuergeldern erforscht wird; andererseits geht bei jeder Vereinfachung etwas verloren. Meines Erachtens ist Vereinfachung nicht nur erlaubt, sondern notwendig, solange sie die Unsicherheit der Ergebnisse nicht verschweigt.\n\nDass Forschung verständlich vermittelt werden muss, liegt auf der Hand. Politische Entscheidungen, etwa zum Klimaschutz oder zur Gesundheit, beruhen zunehmend auf wissenschaftlichen Erkenntnissen. Wer diese nicht nachvollziehen kann, ist leichter für Falschmeldungen empfänglich. Gerade in der Pandemie hat sich gezeigt, wie wichtig verständliche Informationen sind. Zudem ist davon auszugehen, dass das Vertrauen in die Wissenschaft wächst, wenn Forschende ihre Arbeit offen erklären.\n\nAllerdings birgt jede Übersetzung in die Alltagssprache Risiken. Aus einem vorsichtigen „Die Daten legen nahe“ wird schnell ein „Es ist bewiesen“. Ein statistischer Zusammenhang wird als Ursache missverstanden, eine einzelne Studie als endgültige Wahrheit präsentiert. Hinzu kommt, dass reißerische Überschriften mehr Klicks erzielen als nüchterne. Solche Verkürzungen sind keineswegs harmlos: Werden die Ergebnisse später korrigiert, entsteht der Eindruck, die Wissenschaft wisse selbst nicht, was sie wolle.\n\nWie lässt sich dieses Dilemma lösen? Entscheidend ist meines Erachtens nicht, ob vereinfacht wird, sondern wie. Eine gute Vermittlung macht deutlich, wie sicher ein Ergebnis ist, worauf es beruht und welche Fragen offenbleiben. Dafür bedarf es gut ausgebildeter Wissenschaftsjournalistinnen und -journalisten, aber auch Forschender, die bereit sind, ihre Arbeit verständlich darzustellen. Auch Grafiken und anschauliche Vergleiche können helfen, sofern sie nicht mehr versprechen, als die Daten hergeben.\n\nNicht zuletzt ist Wissenschaft ein Prozess. Alfred Wegener wurde für seine Theorie der wandernden Kontinente jahrzehntelang belächelt, bevor neue Daten ihm recht gaben. Gerade solche Irrwege gehören zur Forschung dazu. Wer das Publikum an solchen Geschichten teilhaben lässt, vermittelt mehr als bloße Ergebnisse: ein Verständnis dafür, wie Wissen entsteht. Letzten Endes ist es gerade diese Einsicht, die gegen einfache Wahrheiten widerstandsfähig macht." } });
})();
