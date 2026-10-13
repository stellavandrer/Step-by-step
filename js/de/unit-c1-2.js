/* Cours d'allemand, unité C1-2 « Science and ethics / Sciences et éthique » : décoder les groupes nominaux des textes
   scientifiques (mangels Daten → weil keine Daten vorlagen), les constructions infinitives avancées (scheinen,
   drohen, pflegen, haben … zu ; infinitif passé et passif : manipuliert worden zu sein), faire un exposé et
   répondre aux questions. Personnages fictifs, prénoms allemands ; le professeur du dialogue sur la fraude est
   inventé.
   Faits vérifiables seulement : en décembre 1938, à Berlin, Otto Hahn et Fritz Straßmann détectent du baryum après
   avoir bombardé de l'uranium avec des neutrons ; Lise Meitner, qui avait dû fuir l'Allemagne nazie pour la Suède
   en juillet 1938, en donne l'interprétation physique avec son neveu Otto Robert Frisch (publiée début 1939) ;
   Hahn reçoit seul le prix Nobel de chimie 1944 (remis en 1945) ; l'oubli de Meitner est largement considéré
   comme une injustice ; elle refuse de participer à la mise au point de la bombe atomique ; l'élément 109 porte
   son nom (meitnérium) ; principe des 3R pour l'expérimentation animale (remplacer, réduire, raffiner). */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "wissenschaftC1DE", icon: "flask-conical", title: "Academic research", title_fr: "La recherche scientifique", level: "C1", words: [
    ["die Stichprobe, -n", "the sample", "l'échantillon", "Die Stichprobe umfasste 2000 Personen."],
    ["der Proband, -en (die Probandin)", "the test subject", "le sujet (d'une étude), la participante", "Die Probanden wussten nicht, welches Medikament sie bekamen."],
    ["die Veröffentlichung, -en", "the publication", "la publication", "Vor der Veröffentlichung wird jede Studie geprüft."],
    ["die Begutachtung, -en", "the review, the assessment", "l'évaluation, l'expertise", "Die Begutachtung durch andere Fachleute dauerte Monate."],
    ["belegen", "to prove, to back up", "prouver, étayer", "Die Zahlen belegen den Trend eindeutig."],
    ["der Beleg, -e", "the evidence, the proof", "la preuve, le justificatif", "Für diese These gibt es keine Belege."],
    ["empirisch", "empirical(ly)", "empirique(ment)", "Die Annahme wurde empirisch überprüft."],
    ["der Befund, -e", "the finding", "le résultat, le constat", "Die Befunde sind noch vorläufig."],
    ["die Schlussfolgerung, -en", "the conclusion", "la conclusion", "Aus den Daten lassen sich zwei Schlussfolgerungen ziehen."],
    ["der Zusammenhang, ¨-e", "the connection, the correlation", "le lien, la corrélation", "Ein Zusammenhang ist noch kein Beweis für eine Ursache."],
    ["die Grundlagenforschung", "basic research", "la recherche fondamentale", "Grundlagenforschung bringt oft erst nach Jahrzehnten Anwendungen hervor."],
    ["der Durchbruch, ¨-e", "the breakthrough", "la percée, l'avancée décisive", "Die Entdeckung war ein wissenschaftlicher Durchbruch."],
    ["das Fachgebiet, -e", "the field, the discipline", "le domaine de spécialité", "Ihr Fachgebiet ist die Neurobiologie."],
    ["die Fördermittel (Pl.)", "research funding", "les crédits, les financements", "Das Projekt erhielt Fördermittel von der EU."],
    ["die Messung, -en", "the measurement", "la mesure", "Die Messungen wurden dreimal wiederholt."],
    ["die Versuchsreihe, -n", "the series of experiments", "la série d'expériences", "In einer zweiten Versuchsreihe bestätigte sich das Ergebnis."]
  ] },
  { id: "ethikDE", icon: "scale", title: "Ethics and responsibility", title_fr: "Éthique et responsabilité", level: "C1", words: [
    ["verantwortungsvoll", "responsible", "responsable", "Forschung braucht einen verantwortungsvollen Umgang mit Daten."],
    ["das Gewissen", "conscience", "la conscience (morale)", "Sie konnte das mit ihrem Gewissen nicht vereinbaren."],
    ["der Missbrauch", "abuse, misuse", "l'abus, le détournement", "Der Missbrauch von Daten muss bestraft werden."],
    ["missbrauchen", "to abuse, to misuse", "abuser de, détourner", "Die Technik könnte missbraucht werden."],
    ["die Abwägung, -en", "the weighing up", "la pesée (des intérêts)", "Am Ende steht eine Abwägung zwischen Nutzen und Risiko."],
    ["abwägen", "to weigh up", "peser, mettre en balance", "Man muss die Vor- und Nachteile sorgfältig abwägen."],
    ["vertretbar", "justifiable, acceptable", "défendable, acceptable", "Ist dieses Risiko ethisch vertretbar?"],
    ["der Eingriff, -e", "the intervention, the interference", "l'intervention, l'atteinte", "Jeder Eingriff in das Erbgut ist umstritten."],
    ["eingreifen", "to intervene", "intervenir", "Der Staat sollte früher eingreifen."],
    ["die Gentechnik", "genetic engineering", "le génie génétique", "Die Gentechnik eröffnet neue Möglichkeiten in der Medizin."],
    ["der Tierversuch, -e", "the animal experiment", "l'expérimentation animale", "Tierversuche sollen schrittweise ersetzt werden."],
    ["zulässig", "permissible", "autorisé, admissible", "Solche Experimente sind in Deutschland nicht zulässig."],
    ["umstritten", "controversial", "controversé", "Die Methode ist unter Fachleuten umstritten."],
    ["bedenklich", "worrying, questionable", "préoccupant, douteux", "Ethiker halten das Projekt für bedenklich."],
    ["die Rechenschaft", "account (Rechenschaft ablegen: to give an account)", "les comptes (Rechenschaft ablegen : rendre des comptes)", "Forscher müssen über ihre Methoden Rechenschaft ablegen."],
    ["die Tragweite", "the scope, the implications", "la portée", "Die Tragweite dieser Entdeckung war damals niemandem klar."]
  ] });

  W.LESSONS.push(
  {
    id: 106, level: "C1", icon: "search-check",
    title: "Mangels Daten…: decoding noun phrases", title_fr: "Mangels Daten… : décoder les groupes nominaux",
    subtitle: "Turn the dense noun phrases of academic German back into clear clauses, and the other way round.", subtitle_fr: "Retransformer les groupes nominaux denses de l'allemand scientifique en propositions claires, et inversement.",
    body: `
<h2>Prepositions and their clause equivalents</h2>
<table>
<tr><th>Noun phrase</th><th>Clause</th></tr>
<tr><td><s-de>bei / im Falle</s-de></td><td><s-de>wenn, falls</s-de></td></tr>
<tr><td><s-de>ohne</s-de> + noun</td><td><s-de>wenn … nicht / kein</s-de></td></tr>
<tr><td><s-de>mangels</s-de> (+ gen.)</td><td><s-de>weil … kein / nicht genug</s-de></td></tr>
<tr><td><s-de>aufgrund, infolge</s-de></td><td><s-de>weil, da</s-de></td></tr>
<tr><td><s-de>trotz, ungeachtet</s-de></td><td><s-de>obwohl</s-de></td></tr>
<tr><td><s-de>zwecks, zur</s-de></td><td><s-de>um … zu, damit</s-de></td></tr>
<tr><td><s-de>durch, mittels</s-de></td><td><s-de>indem</s-de></td></tr>
<tr><td><s-de>nach, vor, seit</s-de></td><td><s-de>nachdem, bevor, seit(dem)</s-de></td></tr>
<tr><td><s-de>unter Berücksichtigung</s-de> (+ gen.)</td><td><s-de>wenn man … berücksichtigt</s-de></td></tr>
</table>
<h2>Decoding, step by step</h2>
<p><s-de>Mangels ausreichender Daten wurde die Studie abgebrochen.</s-de> → Which verb hides in the noun? None here, but <s-de>mangels</s-de> = <s-de>weil … nicht genug</s-de>: <s-de>Weil nicht genug Daten vorlagen, wurde die Studie abgebrochen.</s-de></p>
<p><s-de>Nach Abschluss der Messungen</s-de> → <s-de>Nachdem die Messungen abgeschlossen waren, …</s-de> · <s-de>Durch Verwendung neuer Sensoren</s-de> → <s-de>Indem man neue Sensoren verwendete, …</s-de></p>
<div class="tip">This is a key skill for C1 reading and for university: when a sentence seems impenetrable, look for the nouns ending in <s-de>-ung</s-de>, <s-de>-ion</s-de> or infinitives used as nouns, and turn them back into verbs. The sentence usually becomes simple.</div>
`,
    body_fr: `
<h2>Les prépositions et leurs équivalents en proposition</h2>
<table>
<tr><th>Groupe nominal</th><th>Proposition</th></tr>
<tr><td><s-de>bei / im Falle</s-de></td><td><s-de>wenn, falls</s-de></td></tr>
<tr><td><s-de>ohne</s-de> + nom</td><td><s-de>wenn … nicht / kein</s-de></td></tr>
<tr><td><s-de>mangels</s-de> (+ gén.)</td><td><s-de>weil … kein / nicht genug</s-de></td></tr>
<tr><td><s-de>aufgrund, infolge</s-de></td><td><s-de>weil, da</s-de></td></tr>
<tr><td><s-de>trotz, ungeachtet</s-de></td><td><s-de>obwohl</s-de></td></tr>
<tr><td><s-de>zwecks, zur</s-de></td><td><s-de>um … zu, damit</s-de></td></tr>
<tr><td><s-de>durch, mittels</s-de></td><td><s-de>indem</s-de></td></tr>
<tr><td><s-de>nach, vor, seit</s-de></td><td><s-de>nachdem, bevor, seit(dem)</s-de></td></tr>
<tr><td><s-de>unter Berücksichtigung</s-de> (+ gén.)</td><td><s-de>wenn man … berücksichtigt</s-de></td></tr>
</table>
<h2>Décoder, étape par étape</h2>
<p><s-de>Mangels ausreichender Daten wurde die Studie abgebrochen.</s-de> → <s-de>mangels</s-de> = <s-de>weil … nicht genug</s-de> (faute de) : <s-de>Weil nicht genug Daten vorlagen, wurde die Studie abgebrochen.</s-de></p>
<p><s-de>Nach Abschluss der Messungen</s-de> → <s-de>Nachdem die Messungen abgeschlossen waren, …</s-de> · <s-de>Durch Verwendung neuer Sensoren</s-de> → <s-de>Indem man neue Sensoren verwendete, …</s-de></p>
<div class="tip">C'est une compétence clé pour la lecture au C1 et pour l'université : quand une phrase paraît impénétrable, cherche les noms en <s-de>-ung</s-de>, en <s-de>-ion</s-de> ou les infinitifs employés comme noms, et retransforme-les en verbes. La phrase devient en général simple.</div>
`,
    examples: [
      ["Mangels ausreichender Daten wurde die Studie abgebrochen.", "For lack of sufficient data, the study was stopped.", "Faute de données suffisantes, l'étude a été interrompue."],
      ["Weil nicht genug Daten vorlagen, wurde die Studie abgebrochen.", "Because there wasn't enough data, the study was stopped.", "Comme les données étaient insuffisantes, l'étude a été interrompue."],
      ["Nach Abschluss der Messungen wurden die Ergebnisse veröffentlicht.", "After the measurements were completed, the results were published.", "Une fois les mesures terminées, les résultats ont été publiés."],
      ["Durch Verwendung neuer Sensoren wurde die Genauigkeit erhöht.", "By using new sensors, accuracy was increased.", "L'utilisation de nouveaux capteurs a permis d'augmenter la précision."],
      ["Ungeachtet der Kritik setzte das Team die Versuche fort.", "Regardless of the criticism, the team continued the experiments.", "Malgré les critiques, l'équipe a poursuivi ses expériences."],
      ["Zwecks besserer Vergleichbarkeit wurden alle Werte umgerechnet.", "To make them easier to compare, all values were converted.", "Pour faciliter la comparaison, toutes les valeurs ont été converties."],
      ["Unter Berücksichtigung aller Faktoren ist das Ergebnis eindeutig.", "Taking all factors into account, the result is clear.", "Si l'on tient compte de tous les facteurs, le résultat est sans équivoque."]
    ],
    quiz: [
      { q: "mangels Beweisen =", q_fr: "mangels Beweisen =", o: ["weil es keine Beweise gibt", "obwohl es Beweise gibt", "damit es Beweise gibt"], a: 0, ex: "mangels = for lack of.", ex_fr: "mangels = faute de." },
      { q: "Nach Abschluss der Studie… =", q_fr: "Nach Abschluss der Studie… =", o: ["Nachdem die Studie abgeschlossen war, …", "Bevor die Studie abgeschlossen war, …", "Obwohl die Studie abgeschlossen war, …"], a: 0, ex: "nach → nachdem.", ex_fr: "nach → nachdem." },
      { q: "Durch Verwendung neuer Geräte… =", q_fr: "Durch Verwendung neuer Geräte… =", o: ["Indem man neue Geräte verwendete, …", "Obwohl man neue Geräte verwendete, …", "Bevor man neue Geräte verwendete, …"], a: 0, ex: "durch → indem.", ex_fr: "durch → indem." },
      { q: "Ungeachtet der Kritik… =", q_fr: "Ungeachtet der Kritik… =", o: ["Obwohl es Kritik gab, …", "Weil es Kritik gab, …", "Damit es Kritik gibt, …"], a: 0, ex: "ungeachtet = regardless of → obwohl.", ex_fr: "ungeachtet = malgré → obwohl." },
      { q: "Zwecks Vergleich… =", q_fr: "Zwecks Vergleich… =", o: ["Um vergleichen zu können, …", "Wenn man vergleicht, …", "Weil man vergleicht, …"], a: 0, ex: "zwecks = for the purpose of → um … zu.", ex_fr: "zwecks = en vue de → um … zu." }
    ]
  },
  {
    id: 107, level: "C1", icon: "workflow",
    title: "Scheint manipuliert worden zu sein: advanced infinitive constructions", title_fr: "Scheint manipuliert worden zu sein : les constructions infinitives avancées",
    subtitle: "Past and passive infinitives, and the verbs scheinen, drohen, pflegen and haben … zu.", subtitle_fr: "Les infinitifs passés et passifs, et les verbes scheinen, drohen, pflegen et haben … zu.",
    body: `
<h2>Four kinds of infinitive</h2>
<table>
<tr><th>Infinitive</th><th>Example</th></tr>
<tr><td>active, present</td><td><s-de>Er hofft, das Experiment zu wiederholen.</s-de></td></tr>
<tr><td>active, past</td><td><s-de>Er behauptet, das Experiment allein durchgeführt zu haben.</s-de></td></tr>
<tr><td>passive, present</td><td><s-de>Die Daten müssen geprüft werden. → Sie verlangen, geprüft zu werden.</s-de></td></tr>
<tr><td>passive, past</td><td><s-de>Die Daten scheinen manipuliert worden zu sein.</s-de></td></tr>
</table>
<h2>Verbs with a special meaning + zu</h2>
<p><s-de>scheinen</s-de> (to seem): <s-de>Die Ergebnisse scheinen sich zu bestätigen.</s-de> · <s-de>drohen</s-de> (to threaten to, to risk): <s-de>Das Projekt droht zu scheitern.</s-de> · <s-de>pflegen</s-de> (to be in the habit of, formal): <s-de>Sie pflegt früh aufzustehen.</s-de> · <s-de>versprechen</s-de> (to promise to be): <s-de>Der Abend verspricht spannend zu werden.</s-de></p>
<h2>haben … zu and sein … zu</h2>
<p><s-de>haben … zu</s-de> = <s-de>müssen</s-de> (active): <s-de>Die Teilnehmer haben den Fragebogen auszufüllen.</s-de> · <s-de>sein … zu</s-de> = <s-de>müssen / können</s-de> (passive, from B2): <s-de>Der Fragebogen ist auszufüllen.</s-de></p>
<div class="tip">With <s-de>scheinen</s-de> you can avoid committing yourself: <s-de>Er scheint recht zu haben</s-de> sounds more cautious than <s-de>Er hat recht</s-de>. Very useful in academic writing, alongside <s-de>dürfte</s-de> and <s-de>vermutlich</s-de>.</div>
`,
    body_fr: `
<h2>Quatre sortes d'infinitif</h2>
<table>
<tr><th>Infinitif</th><th>Exemple</th></tr>
<tr><td>actif, présent</td><td><s-de>Er hofft, das Experiment zu wiederholen.</s-de></td></tr>
<tr><td>actif, passé</td><td><s-de>Er behauptet, das Experiment allein durchgeführt zu haben.</s-de> (Il affirme avoir mené l'expérience seul.)</td></tr>
<tr><td>passif, présent</td><td><s-de>Die Daten müssen geprüft werden. → Sie verlangen, geprüft zu werden.</s-de></td></tr>
<tr><td>passif, passé</td><td><s-de>Die Daten scheinen manipuliert worden zu sein.</s-de> (Les données semblent avoir été manipulées.)</td></tr>
</table>
<h2>Des verbes à sens particulier + zu</h2>
<p><s-de>scheinen</s-de> (sembler) : <s-de>Die Ergebnisse scheinen sich zu bestätigen.</s-de> · <s-de>drohen</s-de> (menacer de, risquer de) : <s-de>Das Projekt droht zu scheitern.</s-de> · <s-de>pflegen</s-de> (avoir coutume de, soutenu) : <s-de>Sie pflegt früh aufzustehen.</s-de> · <s-de>versprechen</s-de> (s'annoncer) : <s-de>Der Abend verspricht spannend zu werden.</s-de></p>
<h2>haben … zu et sein … zu</h2>
<p><s-de>haben … zu</s-de> = <s-de>müssen</s-de> (actif) : <s-de>Die Teilnehmer haben den Fragebogen auszufüllen.</s-de> · <s-de>sein … zu</s-de> = <s-de>müssen / können</s-de> (passif, vu au B2) : <s-de>Der Fragebogen ist auszufüllen.</s-de></p>
<div class="tip">Avec <s-de>scheinen</s-de>, tu peux éviter de t'engager : <s-de>Er scheint recht zu haben</s-de> est plus prudent que <s-de>Er hat recht</s-de>. Très utile à l'écrit universitaire, avec <s-de>dürfte</s-de> et <s-de>vermutlich</s-de>.</div>
`,
    examples: [
      ["Er behauptet, das Experiment allein durchgeführt zu haben.", "He claims to have carried out the experiment alone.", "Il affirme avoir mené l'expérience seul."],
      ["Die Daten scheinen manipuliert worden zu sein.", "The data seem to have been manipulated.", "Les données semblent avoir été manipulées."],
      ["Die Ergebnisse scheinen sich zu bestätigen.", "The results seem to be confirmed.", "Les résultats semblent se confirmer."],
      ["Ohne Fördermittel droht das Projekt zu scheitern.", "Without funding, the project risks failing.", "Sans financement, le projet risque d'échouer."],
      ["Die Professorin pflegt ihre Vorlesungen mit einer Frage zu beginnen.", "The professor is in the habit of starting her lectures with a question.", "La professeure a coutume de commencer ses cours par une question."],
      ["Die Teilnehmer haben den Fragebogen bis Freitag auszufüllen.", "Participants must fill in the questionnaire by Friday.", "Les participants doivent remplir le questionnaire d'ici vendredi."],
      ["Die Konferenz verspricht spannend zu werden.", "The conference promises to be exciting.", "La conférence s'annonce passionnante."]
    ],
    quiz: [
      { q: "“He claims to have seen it.”", q_fr: "« Il affirme l'avoir vu. »", o: ["Er behauptet, es gesehen zu haben.", "Er behauptet, es zu sehen haben.", "Er behauptet, es gesehen haben zu."], a: 0, ex: "Past infinitive: participle + zu haben.", ex_fr: "Infinitif passé : participe + zu haben." },
      { q: "“The data seem to have been changed.”", q_fr: "« Les données semblent avoir été modifiées. »", o: ["Die Daten scheinen verändert worden zu sein.", "Die Daten scheinen verändert zu werden sein.", "Die Daten scheinen verändert geworden zu sein."], a: 0, ex: "Passive past infinitive: participle + worden zu sein.", ex_fr: "Infinitif passif passé : participe + worden zu sein." },
      { q: "Das Projekt ___ zu scheitern. (risks)", q_fr: "Das Projekt ___ zu scheitern. (risque de)", o: ["droht", "pflegt", "verspricht"], a: 0, ex: "drohen + zu = to risk, to threaten to.", ex_fr: "drohen + zu = risquer de." },
      { q: "“Die Teilnehmer haben das Formular auszufüllen” means:", q_fr: "« Die Teilnehmer haben das Formular auszufüllen » veut dire :", o: ["Participants must fill in the form.", "Participants have filled in the form.", "Participants want to fill in the form."], o_fr: ["Les participants doivent remplir le formulaire.", "Les participants ont rempli le formulaire.", "Les participants veulent remplir le formulaire."], a: 0, ex: "haben … zu = müssen.", ex_fr: "haben … zu = müssen." },
      { q: "A cautious way to say “He's right”:", q_fr: "Une façon prudente de dire « Il a raison » :", o: ["Er scheint recht zu haben.", "Er hat total recht.", "Er muss recht haben, klar."], a: 0, ex: "scheinen + zu = seems to.", ex_fr: "scheinen + zu = sembler." }
    ]
  },
  {
    id: 108, level: "C1", kind: "functional", icon: "presentation",
    title: "Everyday German: giving a talk and handling questions", title_fr: "L'allemand de tous les jours : faire un exposé et répondre aux questions",
    subtitle: "Signpost your talk, and answer questions calmly, even difficult ones.", subtitle_fr: "Baliser ton exposé, et répondre calmement aux questions, même difficiles.",
    body: `
<h2>Signposting your talk</h2>
<p><s-de>Mein Vortrag gliedert sich in drei Teile.</s-de> · <s-de>Zunächst gehe ich auf … ein, anschließend…</s-de> · <s-de>Damit komme ich zum zweiten Punkt.</s-de> · <s-de>Wie diese Grafik zeigt, …</s-de> · <s-de>Lassen Sie mich kurz zusammenfassen: …</s-de></p>
<h2>Handling questions</h2>
<table>
<tr><th>Situation</th><th>German</th></tr>
<tr><td>a good question</td><td><s-de>Das ist eine berechtigte Frage.</s-de></td></tr>
<tr><td>checking you've understood</td><td><s-de>Wenn ich Sie richtig verstehe, möchten Sie wissen, ob…</s-de></td></tr>
<tr><td>gaining time</td><td><s-de>Darauf komme ich gleich noch zu sprechen.</s-de></td></tr>
<tr><td>you don't know</td><td><s-de>Dazu kann ich leider nichts Genaues sagen, aber…</s-de></td></tr>
<tr><td>you disagree</td><td><s-de>Da muss ich Ihnen in einem Punkt widersprechen.</s-de></td></tr>
<tr><td>closing</td><td><s-de>Ich hoffe, damit ist Ihre Frage beantwortet.</s-de></td></tr>
</table>
<div class="tip">In C1 exams you often give a short talk and then react to questions or comments. What counts is not knowing everything, but reacting calmly: rephrase the question, answer what you can, and say honestly what you don't know.</div>
`,
    body_fr: `
<h2>Baliser ton exposé</h2>
<p><s-de>Mein Vortrag gliedert sich in drei Teile.</s-de> · <s-de>Zunächst gehe ich auf … ein, anschließend…</s-de> · <s-de>Damit komme ich zum zweiten Punkt.</s-de> · <s-de>Wie diese Grafik zeigt, …</s-de> · <s-de>Lassen Sie mich kurz zusammenfassen: …</s-de></p>
<h2>Répondre aux questions</h2>
<table>
<tr><th>Situation</th><th>En allemand</th></tr>
<tr><td>une bonne question</td><td><s-de>Das ist eine berechtigte Frage.</s-de></td></tr>
<tr><td>vérifier que tu as compris</td><td><s-de>Wenn ich Sie richtig verstehe, möchten Sie wissen, ob…</s-de></td></tr>
<tr><td>gagner du temps</td><td><s-de>Darauf komme ich gleich noch zu sprechen.</s-de></td></tr>
<tr><td>tu ne sais pas</td><td><s-de>Dazu kann ich leider nichts Genaues sagen, aber…</s-de></td></tr>
<tr><td>tu n'es pas d'accord</td><td><s-de>Da muss ich Ihnen in einem Punkt widersprechen.</s-de></td></tr>
<tr><td>conclure</td><td><s-de>Ich hoffe, damit ist Ihre Frage beantwortet.</s-de></td></tr>
</table>
<div class="tip">Aux examens du C1, on fait souvent un court exposé avant de réagir à des questions ou à des remarques. Ce qui compte, ce n'est pas de tout savoir, mais de réagir calmement : reformuler la question, répondre à ce que tu peux, et dire honnêtement ce que tu ne sais pas.</div>
`,
    examples: [
      ["Mein Vortrag gliedert sich in drei Teile.", "My talk is divided into three parts.", "Mon exposé se divise en trois parties."],
      ["Zunächst gehe ich auf die Geschichte der Forschung ein.", "First I'll look at the history of the research.", "Je vais d'abord aborder l'histoire de la recherche."],
      ["Damit komme ich zum zweiten Punkt.", "That brings me to my second point.", "J'en viens ainsi à mon deuxième point."],
      ["Das ist eine berechtigte Frage.", "That's a fair question.", "C'est une question légitime."],
      ["Wenn ich Sie richtig verstehe, möchten Sie wissen, ob die Methode sicher ist.", "If I understand you correctly, you'd like to know whether the method is safe.", "Si je vous comprends bien, vous voulez savoir si la méthode est sûre."],
      ["Dazu kann ich leider nichts Genaues sagen, aber ich kann Ihnen eine Quelle nennen.", "I'm afraid I can't say anything precise about that, but I can give you a source.", "Je ne peux malheureusement rien dire de précis à ce sujet, mais je peux vous indiquer une source."],
      ["Ich hoffe, damit ist Ihre Frage beantwortet.", "I hope that answers your question.", "J'espère avoir ainsi répondu à votre question."]
    ],
    quiz: [
      { q: "“My talk is divided into three parts.”", q_fr: "« Mon exposé se divise en trois parties. »", o: ["Mein Vortrag gliedert sich in drei Teile.", "Mein Vortrag teilt in drei Teilen.", "Mein Vortrag hat sich drei Teile."], a: 0, ex: "sich gliedern in + accusative.", ex_fr: "sich gliedern in + accusatif." },
      { q: "To gain time with a question:", q_fr: "Pour gagner du temps face à une question :", o: ["Darauf komme ich gleich noch zu sprechen.", "Das weiß doch jeder.", "Nächste Frage."], a: 0, ex: "I'll come to that in a moment.", ex_fr: "J'y viens dans un instant." },
      { q: "“If I understand you correctly, …”", q_fr: "« Si je vous comprends bien, … »", o: ["Wenn ich Sie richtig verstehe, …", "Wenn ich Ihnen richtig verstehe, …", "Wenn Sie mich richtig verstehen, …"], a: 0, ex: "jemanden (accusative) verstehen.", ex_fr: "jemanden (accusatif) verstehen." },
      { q: "When you don't know the answer:", q_fr: "Quand tu ne connais pas la réponse :", o: ["Dazu kann ich leider nichts Genaues sagen, aber…", "Das ist eine dumme Frage.", "Ich sage dazu nichts."], a: 0, ex: "Honest and polite.", ex_fr: "Honnête et poli." },
      { q: "“That brings me to my second point.”", q_fr: "« J'en viens ainsi à mon deuxième point. »", o: ["Damit komme ich zum zweiten Punkt.", "Damit gehe ich auf zweiten Punkt.", "Dafür komme ich zum zweiten Punkt."], a: 0, ex: "zu einem Punkt kommen.", ex_fr: "zu einem Punkt kommen." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    106: {
      gap: [["___ ausreichender Daten wurde die Studie abgebrochen.", "Mangels", "for lack of", "faute de"], ["Nach ___ der Messungen wurden die Ergebnisse veröffentlicht.", "Abschluss"], ["___ Verwendung neuer Sensoren wurde die Genauigkeit erhöht.", "Durch|Mittels", "by using", "grâce à l'utilisation de"], ["Unter ___ aller Faktoren ist das Ergebnis eindeutig.", "Berücksichtigung"]],
      fix: [["Mangels ausreichende Daten wurde die Studie abgebrochen.", "Mangels ausreichender Daten wurde die Studie abgebrochen.", "mangels + genitive: ausreichender Daten.", "mangels + génitif : ausreichender Daten."], ["Nach Abschluss der Messungen, die Ergebnisse wurden veröffentlicht.", "Nach Abschluss der Messungen wurden die Ergebnisse veröffentlicht.", "The prepositional phrase fills position 1: verb next, no comma.", "Le groupe prépositionnel occupe la première place : le verbe suit, sans virgule."]],
      task: ["Turn these noun phrases from a research report into clauses: Nach Abschluss der Studie…; Mangels Fördermitteln…; Trotz intensiver Bemühungen…; Zur Überprüfung der Ergebnisse…", "Transforme ces groupes nominaux tirés d'un rapport de recherche en propositions : Nach Abschluss der Studie… ; Mangels Fördermitteln… ; Trotz intensiver Bemühungen… ; Zur Überprüfung der Ergebnisse…", "Nachdem die Studie abgeschlossen war, … Weil es keine Fördermittel gab, … Obwohl man sich intensiv bemüht hatte, … Um die Ergebnisse zu überprüfen, …"]
    },
    107: {
      gap: [["Er behauptet, das Experiment allein durchgeführt zu ___.", "haben"], ["Die Daten scheinen manipuliert ___ zu sein.", "worden"], ["Ohne Fördermittel ___ das Projekt zu scheitern.", "droht", "risks", "risque de"], ["Die Teilnehmer ___ den Fragebogen bis Freitag auszufüllen.", "haben", "must", "doivent"]],
      fix: [["Die Daten scheinen manipuliert geworden zu sein.", "Die Daten scheinen manipuliert worden zu sein.", "Passive: worden, not geworden.", "Passif : worden, pas geworden."], ["Sie behauptet, es gesehen haben zu.", "Sie behauptet, es gesehen zu haben.", "zu comes before haben.", "zu se place avant haben."]],
      task: ["Write four sentences about a (fictional) research scandal using: behaupten + past infinitive, scheinen + passive infinitive, drohen + zu, and haben … zu.", "Écris quatre phrases sur un scandale scientifique (fictif) avec : behaupten + infinitif passé, scheinen + infinitif passif, drohen + zu, et haben … zu.", "Der Forscher behauptet, alle Daten korrekt erhoben zu haben. Doch einige Werte scheinen nachträglich verändert worden zu sein. Das ganze Projekt droht nun zu scheitern. Die Universität hat den Fall bis Ende des Monats aufzuklären."]
    },
    108: {
      gap: [["Mein Vortrag ___ sich in drei Teile.", "gliedert"], ["Das ist eine ___ Frage.", "berechtigte|gute", "fair", "légitime"], ["Darauf komme ich gleich noch zu ___.", "sprechen"], ["Wenn ich Sie richtig ___, möchten Sie wissen, ob…", "verstehe"]],
      fix: [["Wenn ich Ihnen richtig verstehe, …", "Wenn ich Sie richtig verstehe, …", "verstehen + accusative: Sie.", "verstehen + accusatif : Sie."], ["Damit komme ich auf den zweiten Punkt zu.", "Damit komme ich zum zweiten Punkt.", "zu einem Punkt kommen.", "zu einem Punkt kommen."]],
      task: ["After a talk on gene therapy, someone asks: “Isn't this method far too dangerous?” Write a calm, structured answer (about 50 words) that acknowledges the question, rephrases it and answers carefully.", "Après un exposé sur la thérapie génique, quelqu'un demande : « Cette méthode n'est-elle pas beaucoup trop dangereuse ? » Écris une réponse calme et structurée (environ 50 mots) qui reconnaît la question, la reformule et y répond avec prudence.", "Das ist eine berechtigte Frage. Wenn ich Sie richtig verstehe, möchten Sie wissen, ob die Risiken größer sind als der Nutzen. Dazu lässt sich sagen, dass die Methode bisher nur in streng kontrollierten Studien eingesetzt wird. Ganz ausschließen kann man Risiken allerdings nie. Ich hoffe, damit ist Ihre Frage beantwortet."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "datenskandal", lesson: 107, level: "C1", icon: "flask-conical", partner: "Simon", role: "a colleague at the institute", role_fr: "un collègue de l'institut",
    title: "A suspicion of fraud", title_fr: "Un soupçon de fraude",
    setting: "At your research institute, rumours are going round about a (fictional) professor, Albers, whose spectacular results might have been faked. You discuss it with your colleague Simon.", setting_fr: "Dans ton institut de recherche, des rumeurs circulent au sujet d'un professeur (fictif), Albers, dont les résultats spectaculaires auraient pu être falsifiés. Tu en parles avec ton collègue Simon.",
    turns: [
      { p: "Hast du gehört? Albers soll seine Daten geschönt haben.", en: "Have you heard? Albers is said to have doctored his data.", fr: "Tu as entendu ? Albers aurait embelli ses données." },
      { y: ["Ja. Einige Werte scheinen nachträglich verändert worden zu sein.", "Ja. Einige Werte scheinen nachträglich verändert geworden zu sein.", "Ja. Einige Werte scheinen nachträglich verändert zu werden sein."], en: "Yes. Some values seem to have been changed afterwards.", fr: "Oui. Certaines valeurs semblent avoir été modifiées après coup.", why: "Passive past infinitive: verändert worden zu sein.", why_fr: "Infinitif passif passé : verändert worden zu sein." },
      { p: "Und was sagt er selbst dazu?", en: "And what does he say himself?", fr: "Et qu'en dit-il lui-même ?" },
      { y: ["Er bestreitet, irgendetwas falsch gemacht zu haben.", "Er bestreitet, irgendetwas falsch gemacht haben.", "Er bestreitet, irgendetwas falsch zu gemacht haben."], en: "He denies having done anything wrong.", fr: "Il nie avoir fait quoi que ce soit de mal.", why: "Past infinitive: gemacht zu haben.", why_fr: "Infinitif passé : gemacht zu haben." },
      { p: "Die Ergebnisse waren aber auch zu schön, um wahr zu sein.", en: "The results were too good to be true, though.", fr: "Mais les résultats étaient aussi trop beaux pour être vrais." },
      { y: ["Stimmt. Mangels unabhängiger Kontrollen hat das lange niemand bemerkt.", "Stimmt. Mangels unabhängige Kontrollen hat das lange niemand bemerkt.", "Stimmt. Mangels unabhängiger Kontrollen niemand hat das lange bemerkt."], en: "True. For lack of independent checks, nobody noticed for a long time.", fr: "C'est vrai. Faute de contrôles indépendants, personne ne l'a remarqué pendant longtemps.", why: "mangels + genitive; the verb second.", why_fr: "mangels + génitif ; verbe en deuxième position." },
      { p: "Was bedeutet das jetzt für sein Team?", en: "What does this mean for his team now?", fr: "Qu'est-ce que ça signifie maintenant pour son équipe ?" },
      { y: ["Das ganze Projekt droht zu scheitern, und die Fördermittel könnten gestrichen werden.", "Das ganze Projekt droht scheitern, und die Fördermittel könnten gestrichen werden.", "Das ganze Projekt droht zu scheitern, und die Fördermittel könnten gestrichen worden."], en: "The whole project risks failing, and the funding could be cut.", fr: "Tout le projet risque d'échouer, et les financements pourraient être supprimés.", why: "drohen + zu; passive with a modal: gestrichen werden.", why_fr: "drohen + zu ; passif avec un verbe de modalité : gestrichen werden." },
      { p: "Hoffentlich klärt die Kommission das schnell auf.", en: "Hopefully the committee will clear it up quickly.", fr: "Espérons que la commission éclaircira vite l'affaire." },
      { y: ["Die Universität hat den Fall bis Ende des Monats aufzuklären. Bis dahin sollten wir vorsichtig sein, was wir sagen.", "Die Universität hat den Fall bis Ende des Monats aufklären. Bis dahin sollten wir vorsichtig sein, was wir sagen.", "Die Universität hat den Fall bis Ende des Monats aufzuklären. Bis dahin sollten wir vorsichtig sein, was sagen wir."], en: "The university has to clear up the case by the end of the month. Until then, we should be careful what we say.", fr: "L'université doit faire la lumière sur l'affaire d'ici la fin du mois. D'ici là, nous devrions faire attention à ce que nous disons.", why: "haben … zu = müssen; separable: aufzuklären.", why_fr: "haben … zu = müssen ; séparable : aufzuklären." }
    ] },
  { id: "fragerunde", lesson: 108, level: "C1", icon: "presentation", partner: "Frau Dr. Hartwig", role: "a member of the audience", role_fr: "une participante",
    title: "Questions after your talk", title_fr: "Les questions après ton exposé",
    setting: "You've just given a short talk on alternatives to animal testing at a student conference. Frau Dr. Hartwig, from the audience, asks critical questions.", setting_fr: "Tu viens de faire un court exposé sur les alternatives à l'expérimentation animale lors d'un colloque étudiant. Frau Dr. Hartwig, dans le public, pose des questions critiques.",
    turns: [
      { p: "Vielen Dank für Ihren Vortrag. Sie sagen, Tierversuche ließen sich ersetzen. Ist das nicht zu optimistisch?", en: "Thank you for your talk. You say animal experiments can be replaced. Isn't that too optimistic?", fr: "Merci pour votre exposé. Vous dites que l'expérimentation animale pourrait être remplacée. N'est-ce pas trop optimiste ?" },
      { y: ["Das ist eine berechtigte Frage. Ich habe gesagt, dass sie sich schrittweise verringern lassen, nicht vollständig.", "Das ist eine berechtigte Frage. Ich habe gesagt, dass sie lassen sich schrittweise verringern, nicht vollständig.", "Das ist eine berechtigte Frage. Ich habe gesagt, dass sie sich schrittweise verringern lässt, nicht vollständig."], en: "That's a fair question. I said they can be reduced step by step, not completely.", fr: "C'est une question légitime. J'ai dit qu'on pouvait les réduire progressivement, pas complètement.", why: "dass: verb at the end; sie (plural) lassen sich.", why_fr: "dass : verbe à la fin ; sie (pluriel) lassen sich." },
      { p: "Und welche Methoden meinen Sie konkret?", en: "And which methods do you mean, specifically?", fr: "Et à quelles méthodes pensez-vous concrètement ?" },
      { y: ["Darauf komme ich gern noch einmal zu sprechen: zum Beispiel Zellkulturen und Computermodelle.", "Darauf komme ich gern noch einmal zu sprechen: zum Beispiel Zellkulturen und Computermodelle sprechen.", "Dafür komme ich gern noch einmal zu sprechen: zum Beispiel Zellkulturen und Computermodelle."], en: "I'm happy to come back to that: for example cell cultures and computer models.", fr: "J'y reviens volontiers : par exemple les cultures cellulaires et les modèles informatiques.", why: "auf etwas zu sprechen kommen → darauf.", why_fr: "auf etwas zu sprechen kommen → darauf." },
      { p: "Aber können Computermodelle einen ganzen Organismus abbilden?", en: "But can computer models represent a whole organism?", fr: "Mais les modèles informatiques peuvent-ils représenter un organisme entier ?" },
      { y: ["Wenn ich Sie richtig verstehe, zweifeln Sie an der Aussagekraft solcher Modelle. Da haben Sie in einem Punkt recht.", "Wenn ich Ihnen richtig verstehe, zweifeln Sie an der Aussagekraft solcher Modelle. Da haben Sie in einem Punkt recht.", "Wenn ich Sie richtig verstehe, Sie zweifeln an der Aussagekraft solcher Modelle. Da haben Sie in einem Punkt recht."], en: "If I understand you correctly, you doubt how meaningful such models are. You're right on one point.", fr: "Si je vous comprends bien, vous doutez de la pertinence de ces modèles. Sur un point, vous avez raison.", why: "verstehen + accusative; after the wenn-clause, the verb first.", why_fr: "verstehen + accusatif ; après la subordonnée, le verbe en premier." },
      { p: "Wie viele Tierversuche ließen sich denn bis 2030 vermeiden?", en: "How many animal experiments could be avoided by 2030, then?", fr: "Combien d'expériences sur les animaux pourrait-on donc éviter d'ici 2030 ?" },
      { y: ["Dazu kann ich leider nichts Genaues sagen, denn dazu gibt es keine verlässlichen Prognosen.", "Dazu kann ich leider nichts Genaues sagen, denn dazu es gibt keine verlässlichen Prognosen.", "Dazu kann ich leider nichts Genaue sagen, denn dazu gibt es keine verlässlichen Prognosen."], en: "I'm afraid I can't say anything precise about that, because there are no reliable forecasts.", fr: "Je ne peux malheureusement rien dire de précis à ce sujet, car il n'existe pas de prévisions fiables.", why: "nichts Genaues (adjective as noun); after denn, normal word order.", why_fr: "nichts Genaues (adjectif substantivé) ; après denn, ordre normal." },
      { p: "Gut, das ist eine ehrliche Antwort.", en: "All right, that's an honest answer.", fr: "Bien, c'est une réponse honnête." },
      { y: ["Ich hoffe, damit ist Ihre Frage beantwortet. Gern können wir nach der Sitzung weiterdiskutieren.", "Ich hoffe, damit ist Ihre Frage beantwortet worden geworden. Gern können wir nach der Sitzung weiterdiskutieren.", "Ich hoffe, damit Ihre Frage ist beantwortet. Gern können wir nach der Sitzung weiterdiskutieren."], en: "I hope that answers your question. We're welcome to continue the discussion after the session.", fr: "J'espère avoir ainsi répondu à votre question. Nous pouvons volontiers poursuivre la discussion après la séance.", why: "damit in position 1: the verb next (ist … beantwortet).", why_fr: "damit en tête : le verbe juste après (ist … beantwortet)." }
    ] }
  );

  W.READINGS.push({
    id: "meitner", level: "C1", icon: "book-open", title: "Lise Meitner und die Spaltung des Atoms", genre: "Portrait",
    intro: "In 1938, a discovery in Berlin changed the world. One of the people who explained it was not awarded the Nobel Prize, and refused to help build the bomb.",
    intro_fr: "En 1938, une découverte faite à Berlin change le monde. L'une des personnes qui l'ont expliquée n'a pas reçu le prix Nobel, et a refusé de participer à la bombe.",
    paragraphs: [
      { de: "Lise Meitner, 1878 in Wien geboren, gehörte zu den ersten Frauen, die in Physik promovierten. In Berlin arbeitete sie jahrzehntelang mit dem Chemiker Otto Hahn zusammen. Wegen ihrer jüdischen Herkunft war sie nach dem „Anschluss“ Österreichs 1938 in Deutschland nicht mehr sicher; im Juli desselben Jahres gelang ihr die Flucht nach Schweden.", en: "Lise Meitner, born in Vienna in 1878, was one of the first women to obtain a doctorate in physics. In Berlin she worked for decades with the chemist Otto Hahn. Because of her Jewish background, she was no longer safe in Germany after the annexation of Austria in 1938; in July of that year she managed to flee to Sweden.", fr: "Lise Meitner, née à Vienne en 1878, compte parmi les premières femmes docteures en physique. À Berlin, elle travaille pendant des décennies avec le chimiste Otto Hahn. En raison de ses origines juives, elle n'est plus en sécurité en Allemagne après l'annexion de l'Autriche en 1938 ; en juillet de la même année, elle parvient à fuir en Suède." },
      { de: "Im Dezember 1938 stießen Hahn und sein Kollege Fritz Straßmann in Berlin auf ein rätselhaftes Ergebnis: Nach dem Beschuss von Uran mit Neutronen fanden sie Barium, ein viel leichteres Element. Hahn schrieb Meitner davon. Gemeinsam mit ihrem Neffen Otto Robert Frisch lieferte sie die physikalische Erklärung: Der Atomkern war gespalten worden. Anfang 1939 erschien ihre Deutung in einer Fachzeitschrift.", en: "In December 1938, Hahn and his colleague Fritz Straßmann came across a puzzling result in Berlin: after bombarding uranium with neutrons, they found barium, a much lighter element. Hahn wrote to Meitner about it. Together with her nephew Otto Robert Frisch, she provided the physical explanation: the atomic nucleus had been split. Their interpretation appeared in a scientific journal in early 1939.", fr: "En décembre 1938, à Berlin, Hahn et son collègue Fritz Straßmann obtiennent un résultat énigmatique : après avoir bombardé de l'uranium avec des neutrons, ils trouvent du baryum, un élément bien plus léger. Hahn en écrit à Meitner. Avec son neveu Otto Robert Frisch, elle fournit l'explication physique : le noyau de l'atome a été scindé. Leur interprétation paraît au début de 1939 dans une revue scientifique." },
      { de: "Die Tragweite der Entdeckung war bald unübersehbar, denn bei der Spaltung wird enorm viel Energie frei. Meitner lehnte es ab, an der Entwicklung der Atombombe mitzuarbeiten. Den Nobelpreis für Chemie 1944 erhielt allein Otto Hahn; dass Meitner leer ausging, gilt heute weithin als Ungerechtigkeit.", en: "The implications of the discovery soon became impossible to overlook, because splitting the atom releases an enormous amount of energy. Meitner refused to take part in developing the atomic bomb. The 1944 Nobel Prize in Chemistry went to Otto Hahn alone; the fact that Meitner came away empty-handed is widely regarded today as an injustice.", fr: "La portée de la découverte devient vite évidente, car la fission libère une énergie énorme. Meitner refuse de participer à la mise au point de la bombe atomique. Le prix Nobel de chimie 1944 revient au seul Otto Hahn ; le fait que Meitner soit restée les mains vides est aujourd'hui largement considéré comme une injustice." },
      { de: "Späte Anerkennung fand sie dennoch: Das chemische Element mit der Ordnungszahl 109 trägt heute ihren Namen, Meitnerium. Ihre Geschichte wirft Fragen auf, die bis heute aktuell sind: Wer erhält Anerkennung für gemeinsame Forschung? Und welche Verantwortung tragen Forscherinnen und Forscher für die Folgen ihrer Entdeckungen?", en: "She did receive late recognition, however: the chemical element with atomic number 109 now bears her name, meitnerium. Her story raises questions that are still relevant today: who gets the credit for shared research? And what responsibility do scientists bear for the consequences of their discoveries?", fr: "Elle a néanmoins été reconnue tardivement : l'élément chimique de numéro atomique 109 porte aujourd'hui son nom, le meitnérium. Son histoire soulève des questions toujours d'actualité : à qui revient le mérite d'une recherche commune ? Et quelle responsabilité les chercheurs portent-ils pour les conséquences de leurs découvertes ?" }
    ],
    glossary: { "promovierten": ["obtained a doctorate", "obtinrent un doctorat"], "Chemiker": ["chemist", "chimiste"], "jüdischen": ["Jewish", "juive"], "Herkunft": ["background, origin", "origine"], "Anschluss": ["the annexation (of Austria, 1938)", "l'annexion (de l'Autriche, 1938)"], "desselben": ["of the same", "du même"], "gelang": ["(gelingen) succeeded", "(gelingen) réussit"], "Flucht": ["escape, flight", "fuite"], "stießen": ["(stoßen auf) came across", "(stoßen auf) tombèrent sur"], "rätselhaftes": ["puzzling", "énigmatique"], "Beschuss": ["bombardment", "bombardement"], "Neutronen": ["neutrons", "neutrons"], "Barium": ["barium", "baryum"], "Element": ["element", "élément"], "Neffen": ["nephew", "neveu"], "lieferte": ["provided", "fournit"], "physikalische": ["physical (of physics)", "physique"], "Atomkern": ["atomic nucleus", "noyau atomique"], "gespalten": ["split", "scindé"], "Deutung": ["interpretation", "interprétation"], "unübersehbar": ["impossible to overlook", "évident"], "Spaltung": ["fission, splitting", "fission"], "lehnte": ["(ablehnen) refused", "(ablehnen) refusa"], "Atombombe": ["atomic bomb", "bombe atomique"], "leer ausging": ["came away empty-handed", "est restée les mains vides"], "weithin": ["widely", "largement"], "Ungerechtigkeit": ["injustice", "injustice"], "Ordnungszahl": ["atomic number", "numéro atomique"], "Meitnerium": ["meitnerium", "meitnérium"] },
    questions: [
      { q: "Warum musste Lise Meitner 1938 Deutschland verlassen?", o: ["Wegen ihrer jüdischen Herkunft war sie dort nicht mehr sicher.", "Sie hatte eine Stelle in Schweden bekommen.", "Sie wollte nicht mehr mit Hahn arbeiten."], a: 0 },
      { q: "Was fanden Hahn und Straßmann im Dezember 1938?", o: ["Barium nach dem Beschuss von Uran mit Neutronen", "Ein neues Element mit der Nummer 109", "Eine neue Bombe"], a: 0 },
      { q: "Welche Rolle spielte Meitner bei der Entdeckung?", o: ["Sie lieferte mit Frisch die physikalische Erklärung.", "Sie führte das Experiment allein durch.", "Sie hatte nichts damit zu tun."], a: 0 },
      { q: "Wer erhielt den Nobelpreis für Chemie 1944?", o: ["Otto Hahn allein", "Lise Meitner und Otto Hahn", "Otto Robert Frisch"], a: 0 },
      { q: "Welche Frage wirft ihre Geschichte laut Text auf?", o: ["Welche Verantwortung Forscher für die Folgen ihrer Entdeckungen tragen", "Ob Physik schwerer ist als Chemie", "Warum Schweden kalt ist"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-c1-2", unit: "c1-2", level: "C1", icon: "radio",
    title: "Tierversuche: Wie viel ist vertretbar?", title_fr: "L'expérimentation animale : jusqu'où ?",
    context: "A science programme on the radio. The presenter talks to a biologist, Dr. Sander, about animal experiments and alternatives to them.", context_fr: "Une émission scientifique à la radio. La présentatrice parle avec un biologiste, Dr. Sander, de l'expérimentation animale et de ses alternatives.",
    words: [["die Zellkultur, -en", "the cell culture", "la culture cellulaire"], ["das Prinzip, -ien", "the principle", "le principe"], ["verringern", "to reduce", "réduire"], ["das Leid", "suffering", "la souffrance"], ["die Zulassung, -en", "the approval (of a medicine)", "l'autorisation de mise sur le marché"]],
    lines: [["Moderatorin", "Herr Dr. Sander, brauchen wir heute überhaupt noch Tierversuche?", "de-DE"], ["Dr. Sander", "Das lässt sich nicht pauschal beantworten. In manchen Bereichen können Zellkulturen oder Computermodelle Tierversuche bereits ersetzen, in anderen noch nicht.", "de-DE"], ["Moderatorin", "Man hört oft vom Prinzip der drei R. Was ist damit gemeint?", "de-DE"], ["Dr. Sander", "Die drei R stehen für Ersetzen, Verringern und Verbessern, auf Englisch: replace, reduce, refine. Wo immer möglich, sollen Versuche ersetzt werden; wo das nicht geht, soll die Zahl der Tiere verringert und ihr Leid so gering wie möglich gehalten werden.", "de-DE"], ["Moderatorin", "Kritiker sagen, das gehe alles viel zu langsam.", "de-DE"], ["Dr. Sander", "Da ist etwas dran. Neue Methoden müssen allerdings erst zeigen, dass sie verlässlich sind, bevor sie für die Zulassung von Medikamenten anerkannt werden. Das braucht Zeit.", "de-DE"], ["Moderatorin", "Wo sehen Sie die Grenze?", "de-DE"], ["Dr. Sander", "Für mich ist ein Versuch nur dann vertretbar, wenn sein Nutzen klar belegt ist und es keine Alternative gibt. Diese Abwägung darf man sich nie leicht machen.", "de-DE"]],
    gist: ["Worum geht es im Gespräch?", ["Um Tierversuche und mögliche Alternativen", "Um ein neues Medikament gegen Grippe", "Um die Geschichte der Biologie"]],
    detail: [["Können Tierversuche heute schon ersetzt werden?", ["In manchen Bereichen ja, in anderen noch nicht.", "Nein, nirgends.", "Ja, überall."]], ["Wofür stehen die drei R?", ["Ersetzen, Verringern, Verbessern", "Rechnen, Reden, Regeln", "Risiko, Recht, Regel"]], ["Warum dauert der Wandel laut Dr. Sander so lange?", ["Neue Methoden müssen erst ihre Verlässlichkeit zeigen.", "Es gibt kein Geld.", "Niemand interessiert sich dafür."]], ["Wann ist ein Versuch für Dr. Sander vertretbar?", ["Wenn der Nutzen klar belegt ist und es keine Alternative gibt", "Immer", "Nie"]]],
    decode: ["Das lässt sich nicht pauschal beantworten.", "Diese Abwägung darf man sich nie leicht machen."],
    tip: "In ethical debates, listen for the conditions a speaker sets: nur dann…, wenn…; wo immer möglich; sofern… The position is often in the condition, not in a simple yes or no.", tip_fr: "Dans les débats éthiques, repère les conditions que pose la personne : nur dann…, wenn… ; wo immer möglich ; sofern… La position se trouve souvent dans la condition, pas dans un simple oui ou non."
  }]);

  W.PROMPTS.push({ id: "de-c1-2", level: "C1", q: "Halte einen Vortrag (etwa drei bis vier Minuten): „Sollte die Forschung Grenzen haben?“ Gliedere deinen Vortrag, nenne Beispiele aus verschiedenen Bereichen, wäge ab und komm zu einem begründeten Fazit.", en: "Give a talk (about three to four minutes): “Should research have limits?” Structure your talk, give examples from different fields, weigh things up and reach a reasoned conclusion.", fr: "Fais un exposé (environ trois à quatre minutes) : « La recherche devrait-elle avoir des limites ? » Structure ton exposé, donne des exemples de différents domaines, pèse le pour et le contre et aboutis à une conclusion argumentée.", time: 240,
    phrases: ["Mein Vortrag gliedert sich in drei Teile.", "Zunächst gehe ich auf … ein.", "Ein besonders umstrittenes Beispiel ist…", "Damit komme ich zum zweiten Punkt.", "Lassen Sie mich kurz zusammenfassen: …"],
    model: "Mein Vortrag gliedert sich in drei Teile: Zunächst gehe ich auf die Freiheit der Forschung ein, anschließend auf mögliche Grenzen, und zum Schluss ziehe ich ein Fazit. Die Freiheit der Wissenschaft ist in Deutschland im Grundgesetz garantiert, und das aus gutem Grund: Viele Entdeckungen wurden gemacht, weil Forscher Fragen stellen durften, deren Nutzen niemand vorhersehen konnte. Damit komme ich zum zweiten Punkt. Ein besonders umstrittenes Beispiel sind Eingriffe in das menschliche Erbgut. Hier drohen Folgen, die sich kaum abschätzen lassen und spätere Generationen betreffen. Auch die Geschichte der Kernspaltung zeigt, dass Wissen missbraucht werden kann. Lassen Sie mich kurz zusammenfassen: Ich halte nicht die Forschung selbst für gefährlich, sondern bestimmte Anwendungen. Grenzen sollten deshalb dort gezogen werden, wo die Würde des Menschen berührt wird, und zwar nach einer offenen gesellschaftlichen Debatte, nicht allein von Fachleuten." });

  W.WRITING_GUIDE["c1-2"] = { genre: "An argued text (C1)", genre_fr: "Un texte argumenté (C1)",
    plan: [["A lead-in and your thesis.", "Une amorce et ta thèse."], ["An argument with evidence or an example.", "Un argument avec une preuve ou un exemple."], ["A second argument.", "Un deuxième argument."], ["The opposing view, taken seriously.", "Le point de vue opposé, pris au sérieux."], ["A nuanced conclusion.", "Une conclusion nuancée."]],
    marks: [["Kaum ein Thema spaltet", "a lead-in", "une amorce"], ["Meines Erachtens", "the thesis", "la thèse"], ["Prinzip der drei R", "an example", "un exemple"], ["Zudem", "a second argument", "un deuxième argument"], ["Befürworter wenden zu Recht ein", "the opposing view", "le point de vue opposé"], ["Alles in allem", "the conclusion", "la conclusion"]] };

  /* Atelier de langue : champs allemands d'abord, puis anglais et français (voir localize.js). */
  W.LEXIS = W.LEXIS || {};
  W.LEXIS["c1-2"] = {
    colloc: [
      ["eine Studie durchführen", "to conduct a study", "mener une étude", "Die Universität führt eine große Studie durch.", "führt", ["stellt", "legt"]],
      ["Ergebnisse auswerten", "to analyse results", "analyser des résultats", "Die Ergebnisse werden derzeit ausgewertet.", "ausgewertet", ["ausgewählt", "ausgegeben"]],
      ["einen Nachweis erbringen", "to provide proof", "apporter la preuve", "Bisher konnte niemand einen Nachweis erbringen.", "erbringen", ["bringen", "machen"]],
      ["eine Theorie widerlegen", "to refute a theory", "réfuter une théorie", "Das Experiment widerlegte die alte Theorie.", "widerlegte", ["widersprach", "verlegte"]],
      ["die Grundlagen schaffen", "to lay the foundations", "poser les bases", "Diese Arbeit schuf die Grundlagen für die moderne Physik.", "schuf", ["schaffte", "machte"]],
      ["einen Durchbruch erzielen", "to achieve a breakthrough", "réaliser une percée", "Das Team hat einen Durchbruch erzielt.", "erzielt", ["gezielt", "getroffen"]],
      ["Bedenken äußern", "to express concerns", "exprimer des réserves", "Ethiker äußerten Bedenken gegen das Projekt.", "äußerten", ["sagten", "machten"]],
      ["eine Grenze überschreiten", "to cross a line", "franchir une limite", "Mit diesem Versuch wurde eine Grenze überschritten.", "überschritten", ["überfahren", "übergangen"]],
      ["eine Abwägung treffen", "to weigh things up", "faire une pesée des intérêts", "Hier muss man eine sorgfältige Abwägung treffen.", "treffen", ["stellen", "legen"]],
      ["zu dem Schluss kommen", "to come to the conclusion", "aboutir à la conclusion", "Die Kommission kam zu dem Schluss, dass das Projekt vertretbar sei.", "kam", ["ging", "fiel"]]
    ],
    wf: [
      ["Die ___ der Studie erschien in einer Fachzeitschrift. (VERÖFFENTLICHEN)", "Veröffentlichung"],
      ["Ein ___ Umgang mit Daten ist unverzichtbar. (VERANTWORTUNG)", "verantwortungsvoller"],
      ["Der Versuch ist ethisch nicht ___. (VERTRETEN)", "vertretbar"],
      ["Die ___ von Tierversuchen ist das Ziel vieler Labore. (VERMEIDEN)", "Vermeidung"],
      ["Die Ergebnisse waren nicht ___: Niemand konnte sie bestätigen. (WIEDERHOLEN)", "wiederholbar"],
      ["Die ___ der Daten wurde später nachgewiesen. (FÄLSCHEN)", "Fälschung"],
      ["Sie ist eine international ___ Forscherin. (ANERKENNEN)", "anerkannte"],
      ["Die ___ des Experiments dauerte zwei Jahre. (DURCHFÜHREN)", "Durchführung"]
    ],
    kwt: [
      ["Weil keine Daten vorlagen, wurde die Studie gestoppt.", "MANGELS", "___ wurde die Studie gestoppt.", "Mangels Daten"],
      ["Es scheint, dass die Daten manipuliert wurden.", "SCHEINEN", "Die Daten ___.", "scheinen manipuliert worden zu sein"],
      ["Er behauptet, dass er das Experiment allein durchgeführt hat.", "ZU", "Er behauptet, das Experiment allein ___.", "durchgeführt zu haben"],
      ["Es besteht die Gefahr, dass das Projekt scheitert.", "DROHT", "Das Projekt ___.", "droht zu scheitern"],
      ["Die Teilnehmer müssen den Fragebogen ausfüllen.", "HABEN", "Die Teilnehmer ___ auszufüllen.", "haben den Fragebogen"],
      ["Wenn man alle Faktoren berücksichtigt, ist das Ergebnis eindeutig.", "BERÜCKSICHTIGUNG", "Unter ___ ist das Ergebnis eindeutig.", "Berücksichtigung aller Faktoren"]
    ],
    idioms: [
      ["im Dunkeln tappen", "keine Ahnung haben, nicht weiterwissen", "to be groping in the dark", "être dans le flou", "Bei der Ursache tappen die Forscher noch im Dunkeln.", "im Dunkeln"],
      ["des Rätsels Lösung", "die Erklärung für etwas Unverständliches", "the solution to the puzzle", "le fin mot de l'histoire", "Des Rätsels Lösung war ein defektes Messgerät.", "Des Rätsels Lösung"],
      ["Licht ins Dunkel bringen", "etwas aufklären", "to shed light on something", "faire la lumière sur quelque chose", "Die neue Studie soll Licht ins Dunkel bringen.", "Licht ins Dunkel"],
      ["mit dem Feuer spielen", "ein großes Risiko eingehen", "to play with fire", "jouer avec le feu", "Wer so mit Viren experimentiert, spielt mit dem Feuer.", "mit dem Feuer"],
      ["die Büchse der Pandora öffnen", "etwas tun, das viel Unheil auslöst", "to open Pandora's box", "ouvrir la boîte de Pandore", "Kritiker warnen, man öffne damit die Büchse der Pandora.", "die Büchse der Pandora"],
      ["nicht der Weisheit letzter Schluss sein", "nicht die beste Lösung sein", "not to be the be-all and end-all", "ne pas être la panacée", "Ein Verbot ist auch nicht der Weisheit letzter Schluss.", "der Weisheit letzter Schluss"],
      ["auf dem Holzweg sein", "sich irren", "to be barking up the wrong tree", "faire fausse route", "Mit dieser Theorie war er auf dem Holzweg.", "auf dem Holzweg"],
      ["Hand in Hand gehen", "eng zusammenhängen", "to go hand in hand", "aller de pair", "Fortschritt und Verantwortung müssen Hand in Hand gehen.", "Hand in Hand"]
    ]
  };

  W.COURSE.push({ id: "c1-2", level: "C1", icon: "atom", title: "Science and ethics", title_fr: "Sciences et éthique",
    intro: "How far may research go? In this unit, you'll learn to decode the dense noun phrases of academic German (mangels Daten, nach Abschluss der Messungen), to use advanced infinitive constructions (die Daten scheinen manipuliert worden zu sein; das Projekt droht zu scheitern), and to give a talk and handle questions calmly. You'll also read the story of Lise Meitner, who explained nuclear fission and refused to help build the bomb.",
    intro_fr: "Jusqu'où la recherche peut-elle aller ? Dans cette unité, tu vas apprendre à décoder les groupes nominaux denses de l'allemand scientifique (mangels Daten, nach Abschluss der Messungen), à employer les constructions infinitives avancées (die Daten scheinen manipuliert worden zu sein ; das Projekt droht zu scheitern), et à faire un exposé en répondant calmement aux questions. Tu liras aussi l'histoire de Lise Meitner, qui a expliqué la fission nucléaire et refusé de participer à la bombe.",
    can: ["Turn academic noun phrases into clauses and back", "Use past and passive infinitives, and scheinen, drohen, pflegen and haben … zu", "Structure a talk with clear signposts", "Handle questions after a talk, including difficult ones", "Write an argued text on an ethical question (C1)"],
    can_fr: ["Transformer les groupes nominaux universitaires en propositions, et inversement", "Employer les infinitifs passés et passifs, ainsi que scheinen, drohen, pflegen et haben … zu", "Structurer un exposé avec des balises claires", "Répondre aux questions après un exposé, y compris aux plus difficiles", "Écrire un texte argumenté sur une question éthique (C1)"],
    lessons: [106, 107, 108], vocab: ["wissenschaftC1DE", "ethikDE"], reading: "meitner", prompt: "de-c1-2",
    writing: { task: "Write an argued text (220-260 words) on the question: “Should animal experiments in medical research be banned?” Include a lead-in and thesis, two arguments with examples, the opposing view taken seriously, and a nuanced conclusion.", task_fr: "Écris un texte argumenté (220 à 260 mots) sur la question : « Faut-il interdire l'expérimentation animale dans la recherche médicale ? » Avec une amorce et une thèse, deux arguments illustrés d'exemples, le point de vue opposé pris au sérieux et une conclusion nuancée.", words: "220-260",
      tips: ["Kaum ein Thema spaltet … so sehr wie…", "Meines Erachtens…", "Dies zeigt sich etwa am Beispiel…", "Befürworter wenden zu Recht ein, dass…", "Alles in allem…"],
      checklist: ["I wrote a lead-in and a clear thesis", "I supported my arguments with examples", "I took the opposing view seriously", "I used at least one noun phrase or infinitive construction from this unit", "I wrote between 220 and 260 words"],
      checklist_fr: ["J'ai écrit une amorce et une thèse claire", "J'ai étayé mes arguments par des exemples", "J'ai pris au sérieux le point de vue opposé", "J'ai employé au moins un groupe nominal ou une construction infinitive de cette unité", "J'ai écrit entre 220 et 260 mots"],
      model: "Kaum ein Thema spaltet die Gesellschaft so sehr wie Tierversuche. Für die einen sind sie ein notwendiges Übel, für die anderen ein ethisch nicht vertretbarer Eingriff in das Leben fühlender Wesen. Meines Erachtens wäre ein sofortiges Verbot zwar verständlich, aber verfrüht; das Ziel muss jedoch sein, Tierversuche so weit wie möglich überflüssig zu machen.\n\nFür diese Haltung spricht zunächst, dass es bereits wirksame Alternativen gibt. Das Prinzip der drei R, also Ersetzen, Verringern und Verbessern, hat in vielen Laboren dazu geführt, dass weniger Tiere eingesetzt werden. Zellkulturen und Computermodelle liefern in manchen Bereichen inzwischen ebenso aussagekräftige Ergebnisse. So gibt es etwa für bestimmte Hauttests Methoden, die ganz ohne Versuchstiere auskommen.\n\nZudem lassen sich Ergebnisse aus Tierversuchen nicht immer auf den Menschen übertragen. Viele Wirkstoffe, die im Tierversuch erfolgreich waren, scheitern später in Studien am Menschen. Mangels Übertragbarkeit drohen also nicht nur ethische, sondern auch wissenschaftliche Probleme.\n\nBefürworter wenden zu Recht ein, dass sich ein ganzer Organismus mit seinen komplexen Wechselwirkungen bislang kaum vollständig simulieren lässt. Ein sofortiges Verbot könnte daher die Entwicklung wichtiger Medikamente verzögern und Menschenleben gefährden. Dieses Argument wiegt schwer und darf nicht übergangen werden.\n\nAlles in allem plädiere ich für einen verbindlichen Ausstiegsplan statt eines abrupten Verbots: mehr Fördermittel für alternative Methoden, strenge Kontrollen und eine regelmäßige Überprüfung, welche Versuche noch unvermeidbar sind. Nur so lassen sich wissenschaftlicher Fortschritt und Verantwortung gegenüber Tieren miteinander vereinbaren." } });
})();
