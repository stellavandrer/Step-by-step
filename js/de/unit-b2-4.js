/* Cours d'allemand, unité B2-4 « Science and technology / Sciences et technique » : les groupes participiaux
   étendus (die von Forschern entwickelte Methode), indem / dadurch, dass / sodass (le moyen et la conséquence),
   décrire un graphique (Prozent vs Prozentpunkte). Personnages fictifs, prénoms allemands. Les exemples de
   graphiques ne renvoient à aucune statistique réelle.
   Faits vérifiables seulement : Konrad Zuse (1910-1995) construit la Z1 dans l'appartement de ses parents à Berlin
   (1936-1938) ; la Z3, présentée le 12 mai 1941 à Berlin, est considérée comme le premier ordinateur programmable
   entièrement automatique en état de marche ; elle fonctionnait avec environ 2 600 relais ; détruite lors d'un
   bombardement en 1943 ; une réplique construite au début des années 1960 se trouve au Deutsches Museum de Munich ;
   Zuse a conçu le Plankalkül, considéré comme l'un des premiers langages de programmation de haut niveau. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "forschungDE", icon: "flask-conical", title: "Research", title_fr: "La recherche", level: "B2", words: [
    ["die Forschung", "research", "la recherche", "Die Forschung braucht Zeit und Geld."],
    ["forschen", "to research, to do research", "faire des recherches", "Sie forscht seit zehn Jahren über Bienen."],
    ["der Wissenschaftler, - (die Wissenschaftlerin)", "the scientist", "le scientifique, la scientifique", "Ein Team von Wissenschaftlern hat die Daten ausgewertet."],
    ["wissenschaftlich", "scientific(ally)", "scientifique(ment)", "Das ist wissenschaftlich noch nicht bewiesen."],
    ["die Studie, -n", "the study", "l'étude", "Die Studie wurde in einer Fachzeitschrift veröffentlicht."],
    ["das Experiment, -e", "the experiment", "l'expérience", "Das Experiment musste wiederholt werden."],
    ["die Hypothese, -n", "the hypothesis", "l'hypothèse", "Die Ergebnisse bestätigen unsere Hypothese."],
    ["der Beweis, -e", "the proof, the evidence", "la preuve", "Für diese Behauptung gibt es keinen Beweis."],
    ["nachweisen", "to prove, to demonstrate", "démontrer, prouver", "Die Wirkung des Medikaments konnte nachgewiesen werden."],
    ["die Erkenntnis, -se", "the finding, the insight", "la découverte, la connaissance", "Die neuen Erkenntnisse überraschten alle."],
    ["die Untersuchung, -en", "the investigation, the study", "l'enquête, l'analyse", "Die Untersuchung dauerte drei Jahre."],
    ["das Labor, -e", "the laboratory", "le laboratoire", "Im Labor wird rund um die Uhr gearbeitet."],
    ["messen", "to measure", "mesurer", "Mit diesem Gerät misst man die Luftqualität."],
    ["die Entdeckung, -en", "the discovery", "la découverte", "Die Entdeckung wurde zufällig gemacht."],
    ["die Erfindung, -en", "the invention", "l'invention", "Der Buchdruck war eine der wichtigsten Erfindungen."],
    ["der Fortschritt, -e", "progress, the advance", "le progrès", "Der technische Fortschritt verändert unser Leben."]
  ] },
  { id: "technikdatenDE", icon: "cpu", title: "Technology, data and statistics", title_fr: "Technologie, données et statistiques", level: "B2", words: [
    ["die künstliche Intelligenz (KI)", "artificial intelligence (AI)", "l'intelligence artificielle (IA)", "Künstliche Intelligenz kann Texte übersetzen."],
    ["der Datenschutz", "data protection", "la protection des données", "Beim Datenschutz ist die EU sehr streng."],
    ["speichern", "to save, to store", "enregistrer, stocker", "Hast du die Datei gespeichert?"],
    ["die Anwendung, -en", "the application, the use", "l'application, l'utilisation", "Die Anwendung von KI in der Medizin wächst."],
    ["programmieren", "to program", "programmer", "Mein Neffe hat mit zwölf Jahren programmieren gelernt."],
    ["der Roboter, -", "the robot", "le robot", "In der Fabrik arbeiten Roboter neben Menschen."],
    ["vernetzt", "connected, networked", "connecté, en réseau", "In einem vernetzten Haus kann man die Heizung per App steuern."],
    ["die Privatsphäre", "privacy", "la vie privée", "Viele Nutzer machen sich Sorgen um ihre Privatsphäre."],
    ["der Zugriff (auf + Akk.)", "access (to)", "l'accès (à)", "Wer hat Zugriff auf meine Daten?"],
    ["die Umfrage, -n", "the survey, the poll", "le sondage, l'enquête", "An der Umfrage nahmen 2000 Personen teil."],
    ["die Befragten (Pl.)", "the respondents", "les personnes interrogées", "Die Mehrheit der Befragten nutzt täglich ein Smartphone."],
    ["der Anteil, -e", "the share, the proportion", "la part, la proportion", "Der Anteil der Frauen in der IT ist gestiegen."],
    ["der Rückgang", "the decline, the fall", "la baisse, le recul", "Die Grafik zeigt einen deutlichen Rückgang."],
    ["der Zuwachs", "the increase, the growth", "l'augmentation, la croissance", "Im Online-Handel gab es einen starken Zuwachs."],
    ["das Schaubild, -er", "the chart, the diagram", "le graphique, le schéma", "Das Schaubild zeigt die Entwicklung seit 2010."],
    ["stagnieren", "to stagnate", "stagner", "Die Zahlen stagnieren seit drei Jahren."]
  ] });

  W.LESSONS.push(
  {
    id: 82, level: "B2", icon: "microscope",
    title: "Die von Forschern entwickelte Methode: extended participle phrases", title_fr: "Die von Forschern entwickelte Methode : les groupes participiaux étendus",
    subtitle: "Read, and build, the long noun phrases of scientific and journalistic German.", subtitle_fr: "Lire, et construire, les longs groupes nominaux de l'allemand scientifique et journalistique.",
    body: `
<h2>A relative clause squeezed before the noun</h2>
<p>At B1 you met participles used as adjectives: <s-de>das gelesene Buch</s-de>. Formal German puts whole phrases between the article and the noun:</p>
<table>
<tr><th>Relative clause</th><th>Participle phrase</th></tr>
<tr><td><s-de>die Methode, die von Forschern entwickelt wurde</s-de></td><td><s-de>die von Forschern entwickelte Methode</s-de></td></tr>
<tr><td><s-de>der Verbrauch, der seit Jahren steigt</s-de></td><td><s-de>der seit Jahren steigende Verbrauch</s-de></td></tr>
<tr><td><s-de>ein Gerät, das in Berlin gebaut wurde</s-de></td><td><s-de>ein in Berlin gebautes Gerät</s-de></td></tr>
</table>
<h2>Which participle?</h2>
<p><b>Partizip I</b> (infinitive + <s-de>d</s-de>): something happening, active: <s-de>die steigenden Preise</s-de> (prices that are rising). <b>Partizip II</b>: something done, passive or completed: <s-de>die entwickelte Methode</s-de> (a method that has been developed). Both take normal adjective endings.</p>
<h2>How to read them</h2>
<p>When you see an article followed by something that isn't a noun, jump ahead to the noun, then read the middle part: <s-de>die [im letzten Jahr von der Stadt gepflanzten] Bäume</s-de> → the trees [that were planted by the town last year].</p>
<div class="tip">You'll meet these phrases above all in newspapers and scientific texts; in conversation, Germans use relative clauses. A related form you'll also see: <s-de>zu</s-de> + Partizip I = something that must be done: <s-de>die zu lösenden Probleme</s-de> (the problems to be solved).</div>
`,
    body_fr: `
<h2>Une relative glissée devant le nom</h2>
<p>Au B1, tu as vu les participes employés comme adjectifs : <s-de>das gelesene Buch</s-de>. L'allemand soutenu place des groupes entiers entre l'article et le nom :</p>
<table>
<tr><th>Relative</th><th>Groupe participial</th></tr>
<tr><td><s-de>die Methode, die von Forschern entwickelt wurde</s-de></td><td><s-de>die von Forschern entwickelte Methode</s-de></td></tr>
<tr><td><s-de>der Verbrauch, der seit Jahren steigt</s-de></td><td><s-de>der seit Jahren steigende Verbrauch</s-de></td></tr>
<tr><td><s-de>ein Gerät, das in Berlin gebaut wurde</s-de></td><td><s-de>ein in Berlin gebautes Gerät</s-de></td></tr>
</table>
<h2>Quel participe ?</h2>
<p><b>Partizip I</b> (infinitif + <s-de>d</s-de>) : quelque chose qui est en train de se faire, sens actif : <s-de>die steigenden Preise</s-de> (les prix qui augmentent). <b>Partizip II</b> : quelque chose de fait, sens passif ou accompli : <s-de>die entwickelte Methode</s-de> (la méthode qui a été mise au point). Les deux prennent les terminaisons normales de l'adjectif.</p>
<h2>Comment les lire</h2>
<p>Quand un article est suivi d'autre chose qu'un nom, saute jusqu'au nom, puis lis la partie du milieu : <s-de>die [im letzten Jahr von der Stadt gepflanzten] Bäume</s-de> → les arbres [plantés l'an dernier par la ville]. Le français fait d'ailleurs pareil, mais après le nom.</p>
<div class="tip">Tu rencontreras ces groupes surtout dans les journaux et les textes scientifiques ; à l'oral, les Allemands emploient des relatives. Une forme voisine que tu verras aussi : <s-de>zu</s-de> + Partizip I = quelque chose à faire : <s-de>die zu lösenden Probleme</s-de> (les problèmes à résoudre).</div>
`,
    examples: [
      ["Die von Forschern entwickelte Methode spart viel Zeit.", "The method developed by researchers saves a lot of time.", "La méthode mise au point par des chercheurs fait gagner beaucoup de temps."],
      ["Der seit Jahren steigende Verbrauch macht den Experten Sorgen.", "The consumption that has been rising for years worries the experts.", "La consommation, en hausse depuis des années, inquiète les experts."],
      ["Ein in Berlin gebautes Gerät steht heute im Museum.", "A device built in Berlin is in the museum today.", "Un appareil construit à Berlin se trouve aujourd'hui au musée."],
      ["Die im letzten Jahr gepflanzten Bäume wachsen gut.", "The trees planted last year are growing well.", "Les arbres plantés l'an dernier poussent bien."],
      ["Die an der Studie beteiligten Ärzte waren überrascht.", "The doctors involved in the study were surprised.", "Les médecins ayant participé à l'étude ont été surpris."],
      ["Wir suchen eine schnell wachsende Pflanze für den Balkon.", "We're looking for a fast-growing plant for the balcony.", "Nous cherchons une plante à croissance rapide pour le balcon."],
      ["Die noch zu lösenden Probleme sind nicht klein.", "The problems still to be solved aren't small.", "Les problèmes qui restent à résoudre ne sont pas minces."]
    ],
    quiz: [
      { q: "“die Methode, die von Forschern entwickelt wurde” =", q_fr: "« die Methode, die von Forschern entwickelt wurde » =", o: ["die von Forschern entwickelte Methode", "die von Forschern entwickelnde Methode", "die entwickelte von Forschern Methode"], a: 0, ex: "Partizip II (passive), placed before the noun with its complements.", ex_fr: "Partizip II (sens passif), placé devant le nom avec ses compléments." },
      { q: "“der Verbrauch, der seit Jahren steigt” =", q_fr: "« der Verbrauch, der seit Jahren steigt » =", o: ["der seit Jahren steigende Verbrauch", "der seit Jahren gestiegene Verbrauch", "der steigend seit Jahren Verbrauch"], a: 0, ex: "Something happening now: Partizip I.", ex_fr: "Quelque chose qui se passe : Partizip I." },
      { q: "“die steigenden Preise” means:", q_fr: "« die steigenden Preise » veut dire :", o: ["the rising prices", "the risen prices", "the prices to be raised"], o_fr: ["les prix en hausse", "les prix qui ont augmenté", "les prix à augmenter"], a: 0, ex: "Partizip I = happening now.", ex_fr: "Partizip I = en cours." },
      { q: "ein in Berlin ___ Gerät (bauen)", q_fr: "ein in Berlin ___ Gerät (bauen)", o: ["gebautes", "gebaute", "bauendes"], a: 0, ex: "Neuter after ein: -es.", ex_fr: "Neutre après ein : -es." },
      { q: "“die zu lösenden Probleme” means:", q_fr: "« die zu lösenden Probleme » veut dire :", o: ["the problems to be solved", "the problems that solve themselves", "the solved problems"], o_fr: ["les problèmes à résoudre", "les problèmes qui se résolvent", "les problèmes résolus"], a: 0, ex: "zu + Partizip I = must be done.", ex_fr: "zu + Partizip I = à faire." }
    ]
  },
  {
    id: 83, level: "B2", icon: "workflow",
    title: "Indem, sodass, je nachdem: means and consequences", title_fr: "Indem, sodass, je nachdem : le moyen et la conséquence",
    subtitle: "Say how something works and what follows from it.", subtitle_fr: "Dire comment une chose fonctionne et ce qui en découle.",
    body: `
<h2>The means: indem, dadurch, dass</h2>
<p><s-de>indem</s-de> answers the question <s-de>Wie?</s-de> (how?): <s-de>Man spart Energie, indem man das Licht ausschaltet.</s-de> (You save energy by switching off the light.) <s-de>dadurch, dass</s-de> says the same thing with more emphasis on the cause: <s-de>Dadurch, dass die Daten verschlüsselt werden, sind sie sicher.</s-de></p>
<p>In the main clause, <s-de>dadurch</s-de> alone means "that way": <s-de>Die Daten werden verschlüsselt. Dadurch sind sie sicher.</s-de></p>
<h2>The consequence: sodass, so …, dass</h2>
<p><s-de>sodass</s-de> (or <s-de>so dass</s-de>) gives the result: <s-de>Der Server fiel aus, sodass niemand arbeiten konnte.</s-de> With <s-de>so</s-de> + adjective in the main clause, the result follows an intensity: <s-de>Das Programm war so langsam, dass wir es gelöscht haben.</s-de></p>
<h2>It depends: je nachdem</h2>
<p><s-de>je nachdem, ob / wie / wann…</s-de>: <s-de>Die Fahrt dauert zwei oder drei Stunden, je nachdem, wie viel Verkehr ist.</s-de> On its own: <s-de>Kommst du mit? – Je nachdem.</s-de> (It depends.)</p>
<div class="tip">Don't mix up <s-de>indem</s-de> (by doing) and <s-de>in dem</s-de> (in which): <s-de>das Labor, in dem ich arbeite</s-de>. And <s-de>sodass</s-de> is a consequence, while <s-de>damit</s-de> is a purpose: <s-de>Ich speichere die Datei, damit sie nicht verloren geht.</s-de></div>
`,
    body_fr: `
<h2>Le moyen : indem, dadurch, dass</h2>
<p><s-de>indem</s-de> répond à la question <s-de>Wie?</s-de> (comment ?) : <s-de>Man spart Energie, indem man das Licht ausschaltet.</s-de> (On économise de l'énergie en éteignant la lumière.) Le gérondif français « en …-ant » se traduit souvent par <s-de>indem</s-de>. <s-de>dadurch, dass</s-de> dit la même chose en insistant davantage sur la cause : <s-de>Dadurch, dass die Daten verschlüsselt werden, sind sie sicher.</s-de></p>
<p>Dans la principale, <s-de>dadurch</s-de> seul veut dire « de cette façon » : <s-de>Die Daten werden verschlüsselt. Dadurch sind sie sicher.</s-de></p>
<h2>La conséquence : sodass, so …, dass</h2>
<p><s-de>sodass</s-de> (ou <s-de>so dass</s-de>) donne le résultat : <s-de>Der Server fiel aus, sodass niemand arbeiten konnte.</s-de> (Le serveur est tombé en panne, si bien que personne n'a pu travailler.) Avec <s-de>so</s-de> + adjectif dans la principale, le résultat découle d'une intensité : <s-de>Das Programm war so langsam, dass wir es gelöscht haben.</s-de></p>
<h2>Ça dépend : je nachdem</h2>
<p><s-de>je nachdem, ob / wie / wann…</s-de> : <s-de>Die Fahrt dauert zwei oder drei Stunden, je nachdem, wie viel Verkehr ist.</s-de> Seul : <s-de>Kommst du mit? – Je nachdem.</s-de> (Ça dépend.)</p>
<div class="tip">Ne confonds pas <s-de>indem</s-de> (en faisant) et <s-de>in dem</s-de> (dans lequel) : <s-de>das Labor, in dem ich arbeite</s-de>. Et <s-de>sodass</s-de> exprime une conséquence, alors que <s-de>damit</s-de> exprime un but : <s-de>Ich speichere die Datei, damit sie nicht verloren geht.</s-de></div>
`,
    examples: [
      ["Man spart Energie, indem man das Licht ausschaltet.", "You save energy by switching off the light.", "On économise de l'énergie en éteignant la lumière."],
      ["Sie hat Programmieren gelernt, indem sie jeden Abend Videos geschaut hat.", "She learnt to program by watching videos every evening.", "Elle a appris à programmer en regardant des vidéos tous les soirs."],
      ["Dadurch, dass die Daten verschlüsselt werden, sind sie sicher.", "Because the data is encrypted, it is safe.", "Du fait que les données sont chiffrées, elles sont en sécurité."],
      ["Der Server fiel aus, sodass niemand arbeiten konnte.", "The server went down, so nobody could work.", "Le serveur est tombé en panne, si bien que personne n'a pu travailler."],
      ["Das Programm war so langsam, dass wir es gelöscht haben.", "The program was so slow that we deleted it.", "Le programme était si lent que nous l'avons supprimé."],
      ["Die Fahrt dauert zwei oder drei Stunden, je nachdem, wie viel Verkehr ist.", "The journey takes two or three hours, depending on how much traffic there is.", "Le trajet dure deux ou trois heures, selon la circulation."],
      ["Ich speichere die Datei zweimal, damit sie nicht verloren geht.", "I save the file twice so that it doesn't get lost.", "J'enregistre le fichier deux fois pour qu'il ne se perde pas."]
    ],
    quiz: [
      { q: "“You learn by practising.”", q_fr: "« On apprend en pratiquant. »", o: ["Man lernt, indem man übt.", "Man lernt, damit man übt.", "Man lernt, sodass man übt."], a: 0, ex: "The means: indem.", ex_fr: "Le moyen : indem." },
      { q: "Der Akku war leer, ___ ich nicht anrufen konnte.", q_fr: "Der Akku war leer, ___ ich nicht anrufen konnte.", o: ["sodass", "indem", "damit"], a: 0, ex: "A consequence: sodass.", ex_fr: "Une conséquence : sodass." },
      { q: "Das Video war ___ lustig, dass alle gelacht haben.", q_fr: "Das Video war ___ lustig, dass alle gelacht haben.", o: ["so", "sodass", "dadurch"], a: 0, ex: "so + adjective …, dass.", ex_fr: "so + adjectif …, dass." },
      { q: "“Kommst du morgen? – It depends.”", q_fr: "« Kommst du morgen? – Ça dépend. »", o: ["Je nachdem.", "Indem.", "Dadurch."], a: 0, ex: "je nachdem = it depends.", ex_fr: "je nachdem = ça dépend." },
      { q: "das Labor, ___ ich arbeite", q_fr: "das Labor, ___ ich arbeite", o: ["in dem", "indem", "sodass"], a: 0, ex: "in which = in dem (two words).", ex_fr: "dans lequel = in dem (en deux mots)." }
    ]
  },
  {
    id: 84, level: "B2", kind: "functional", icon: "chart-column",
    title: "Everyday German: describing a chart", title_fr: "L'allemand de tous les jours : décrire un graphique",
    subtitle: "Present figures clearly: rises, falls, shares and comparisons.", subtitle_fr: "Présenter des chiffres clairement : hausses, baisses, parts et comparaisons.",
    body: `
<h2>Introduce the chart</h2>
<p><s-de>Die Grafik / Das Schaubild zeigt, wie viele…</s-de> · <s-de>Die Daten stammen aus einer Umfrage von…</s-de> · <s-de>Befragt wurden 1000 Personen.</s-de></p>
<h2>Describe the trend</h2>
<table>
<tr><th>Trend</th><th>German</th></tr>
<tr><td>up</td><td><s-de>steigen, zunehmen, wachsen</s-de> · <s-de>der Anstieg, der Zuwachs</s-de></td></tr>
<tr><td>down</td><td><s-de>sinken, abnehmen, zurückgehen</s-de> · <s-de>der Rückgang</s-de></td></tr>
<tr><td>no change</td><td><s-de>gleich bleiben, stagnieren</s-de></td></tr>
<tr><td>how much</td><td><s-de>stark, deutlich, leicht, kaum</s-de></td></tr>
</table>
<h2>von, auf, um</h2>
<p><s-de>Der Anteil ist von 20 auf 30 Prozent gestiegen.</s-de> (from … to …) · <s-de>Er ist um zehn Prozentpunkte gestiegen.</s-de> (by …). Careful: from 20 to 30 per cent is <b>ten percentage points</b> (<s-de>Prozentpunkte</s-de>), but a rise of 50 per cent!</p>
<h2>Shares and comparisons</h2>
<p><s-de>die Mehrheit, fast die Hälfte, ein Drittel, jeder Vierte</s-de> · <s-de>Im Vergleich zu 2015…</s-de> · <s-de>Während die Jüngeren…, nutzen die Älteren…</s-de> · <s-de>An erster Stelle steht…</s-de></p>
<div class="tip">Describe first, then interpret: what does the chart show, what is the most striking point, and what could explain it? Graph descriptions appear in several exams (telc, TestDaF) and at university: they're a key skill from B2.</div>
`,
    body_fr: `
<h2>Présenter le graphique</h2>
<p><s-de>Die Grafik / Das Schaubild zeigt, wie viele…</s-de> · <s-de>Die Daten stammen aus einer Umfrage von…</s-de> · <s-de>Befragt wurden 1000 Personen.</s-de></p>
<h2>Décrire l'évolution</h2>
<table>
<tr><th>Évolution</th><th>En allemand</th></tr>
<tr><td>hausse</td><td><s-de>steigen, zunehmen, wachsen</s-de> · <s-de>der Anstieg, der Zuwachs</s-de></td></tr>
<tr><td>baisse</td><td><s-de>sinken, abnehmen, zurückgehen</s-de> · <s-de>der Rückgang</s-de></td></tr>
<tr><td>stabilité</td><td><s-de>gleich bleiben, stagnieren</s-de></td></tr>
<tr><td>dans quelle mesure</td><td><s-de>stark, deutlich, leicht, kaum</s-de></td></tr>
</table>
<h2>von, auf, um</h2>
<p><s-de>Der Anteil ist von 20 auf 30 Prozent gestiegen.</s-de> (de … à …) · <s-de>Er ist um zehn Prozentpunkte gestiegen.</s-de> (de …, l'écart). Attention : passer de 20 à 30 %, c'est <b>dix points de pourcentage</b> (<s-de>Prozentpunkte</s-de>), mais une hausse de 50 % !</p>
<h2>Parts et comparaisons</h2>
<p><s-de>die Mehrheit, fast die Hälfte, ein Drittel, jeder Vierte</s-de> · <s-de>Im Vergleich zu 2015…</s-de> · <s-de>Während die Jüngeren…, nutzen die Älteren…</s-de> · <s-de>An erster Stelle steht…</s-de></p>
<div class="tip">Décris d'abord, interprète ensuite : que montre le graphique, quel est le point le plus frappant, et qu'est-ce qui pourrait l'expliquer ? La description de graphique figure dans plusieurs examens (telc, TestDaF) et à l'université : c'est une compétence clé dès le B2.</div>
`,
    examples: [
      ["Das Schaubild zeigt, wie viele Stunden Jugendliche pro Tag online sind.", "The chart shows how many hours a day young people spend online.", "Le graphique montre combien d'heures par jour les jeunes passent en ligne."],
      ["Die Daten stammen aus einer Umfrage unter 1000 Personen.", "The data come from a survey of 1,000 people.", "Les données proviennent d'un sondage auprès de 1 000 personnes."],
      ["Der Anteil ist von 20 auf 30 Prozent gestiegen.", "The share rose from 20 to 30 per cent.", "La part est passée de 20 à 30 %."],
      ["Er ist also um zehn Prozentpunkte gestiegen.", "So it rose by ten percentage points.", "Elle a donc augmenté de dix points de pourcentage."],
      ["Die Zahl der Nutzer ist in den letzten Jahren leicht zurückgegangen.", "The number of users has fallen slightly in recent years.", "Le nombre d'utilisateurs a légèrement baissé ces dernières années."],
      ["Fast die Hälfte der Befragten liest Nachrichten nur noch auf dem Handy.", "Almost half of the respondents only read the news on their phone.", "Près de la moitié des personnes interrogées ne lisent plus les informations que sur leur téléphone."],
      ["Während die Jüngeren vor allem Videos schauen, lesen die Älteren mehr.", "While younger people mainly watch videos, older people read more.", "Alors que les plus jeunes regardent surtout des vidéos, les plus âgés lisent davantage."]
    ],
    quiz: [
      { q: "From 40 to 50 per cent is a rise of…", q_fr: "Passer de 40 à 50 %, c'est une hausse de…", o: ["zehn Prozentpunkten", "zehn Prozent", "fünfzig Prozentpunkten"], a: 0, ex: "50 − 40 = 10 percentage points (a 25 % rise).", ex_fr: "50 − 40 = 10 points de pourcentage (une hausse de 25 %)." },
      { q: "Der Anteil ist ___ 20 ___ 30 Prozent gestiegen.", q_fr: "Der Anteil ist ___ 20 ___ 30 Prozent gestiegen.", o: ["von … auf", "um … auf", "von … um"], a: 0, ex: "from … to: von … auf.", ex_fr: "de … à : von … auf." },
      { q: "Which verb means the figures don't change?", q_fr: "Quel verbe signifie que les chiffres ne changent pas ?", o: ["stagnieren", "zunehmen", "zurückgehen"], a: 0, ex: "stagnieren = to stagnate.", ex_fr: "stagnieren = stagner." },
      { q: "“One in four respondents…”", q_fr: "« Une personne interrogée sur quatre… »", o: ["Jeder Vierte der Befragten…", "Ein Vierter der Befragten…", "Vier von jedem Befragten…"], a: 0, ex: "jeder Vierte = one in four.", ex_fr: "jeder Vierte = un sur quatre." },
      { q: "“The data come from a survey.”", q_fr: "« Les données proviennent d'un sondage. »", o: ["Die Daten stammen aus einer Umfrage.", "Die Daten kommen von einer Umfrage her.", "Die Daten stammen einer Umfrage."], a: 0, ex: "stammen aus + dative.", ex_fr: "stammen aus + datif." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    82: {
      gap: [["die von Forschern ___ Methode (entwickeln)", "entwickelte"], ["der seit Jahren ___ Verbrauch (steigen)", "steigende"], ["ein in Berlin ___ Gerät (bauen)", "gebautes"], ["die noch zu ___ Probleme (lösen)", "lösenden"]],
      fix: [["die von der Stadt pflanzenden Bäume", "die von der Stadt gepflanzten Bäume", "Planted (passive, completed): Partizip II.", "Plantés (passif, accompli) : Partizip II."], ["die seit Jahren gestiegene Preise", "die seit Jahren gestiegenen Preise", "After die (plural): -en.", "Après die (pluriel) : -en."]],
      task: ["Turn these relative clauses into participle phrases: the study that was published yesterday; the robot that was built by pupils; the costs that are rising quickly; a problem that must be solved.", "Transforme ces relatives en groupes participiaux : l'étude qui a été publiée hier ; le robot qui a été construit par des élèves ; les coûts qui augmentent vite ; un problème qui doit être résolu.", "die gestern veröffentlichte Studie; der von Schülern gebaute Roboter; die schnell steigenden Kosten; ein zu lösendes Problem"]
    },
    83: {
      gap: [["Man spart Energie, ___ man das Licht ausschaltet.", "indem", "by doing", "en faisant"], ["Der Server fiel aus, ___ niemand arbeiten konnte.", "sodass|so dass"], ["Das Programm war ___ langsam, dass wir es gelöscht haben.", "so"], ["Die Fahrt dauert zwei oder drei Stunden, je ___, wie viel Verkehr ist.", "nachdem"]],
      fix: [["Man lernt eine Sprache, indem man spricht viel.", "Man lernt eine Sprache, indem man viel spricht.", "indem: the verb at the end.", "indem : le verbe à la fin."], ["Ich speichere die Datei, sodass sie nicht verloren geht.", "Ich speichere die Datei, damit sie nicht verloren geht.", "A purpose: damit, not sodass.", "Un but : damit, pas sodass."]],
      task: ["Explain to a friend how to protect their data: give three tips with indem and one consequence with sodass.", "Explique à quelqu'un comment protéger ses données : donne trois conseils avec indem et une conséquence avec sodass.", "Du schützt deine Daten, indem du für jedes Konto ein anderes Passwort benutzt. Außerdem hilft es, indem du Updates sofort installierst. Und du bist sicherer, indem du nicht jedes Gratis-WLAN nutzt. Wenn du das alles machst, sind deine Daten gut geschützt, sodass Hacker kaum eine Chance haben."]
    },
    84: {
      gap: [["Der Anteil ist ___ 20 auf 30 Prozent gestiegen.", "von"], ["Er ist also ___ zehn Prozentpunkte gestiegen.", "um"], ["Die Daten ___ aus einer Umfrage unter 1000 Personen.", "stammen", "come from", "proviennent"], ["Fast die ___ der Befragten liest Nachrichten online.", "Hälfte", "half", "moitié"]],
      fix: [["Der Anteil ist von 20 bis 30 Prozent gestiegen.", "Der Anteil ist von 20 auf 30 Prozent gestiegen.", "von … auf for a change of value.", "von … auf pour un changement de valeur."], ["Von 40 auf 50 Prozent: Das ist ein Anstieg um zehn Prozent.", "Von 40 auf 50 Prozent: Das ist ein Anstieg um zehn Prozentpunkte.", "The difference between two percentages: Prozentpunkte.", "L'écart entre deux pourcentages : Prozentpunkte."]],
      task: ["Describe this (invented) chart in four sentences: in a language school, the share of students learning online rose from 15 % (2019) to 45 % (2024), while classroom courses fell from 85 % to 55 %.", "Décris ce graphique (inventé) en quatre phrases : dans une école de langues, la part des élèves qui apprennent en ligne est passée de 15 % (2019) à 45 % (2024), tandis que les cours en salle sont passés de 85 % à 55 %.", "Das Schaubild zeigt, wie die Schüler einer Sprachschule zwischen 2019 und 2024 gelernt haben. Der Anteil der Online-Kurse ist von 15 auf 45 Prozent gestiegen, also um 30 Prozentpunkte. Im gleichen Zeitraum ist der Anteil der Kurse im Klassenzimmer von 85 auf 55 Prozent zurückgegangen. Trotzdem lernt die Mehrheit noch vor Ort."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "smartphonehilfe", lesson: 83, level: "B2", icon: "smartphone", partner: "Frau Lange", role: "your neighbour", role_fr: "ta voisine",
    title: "Helping with a new phone", title_fr: "Aider avec un nouveau téléphone",
    setting: "Your elderly neighbour, Frau Lange, has bought her first smartphone. She asks you to explain a few things.", setting_fr: "Ta voisine âgée, Frau Lange, a acheté son premier smartphone. Elle te demande de lui expliquer quelques petites choses.",
    turns: [
      { p: "Ach, gut, dass Sie da sind! Wie kann ich denn meine Enkelin anrufen?", en: "Oh, good that you're here! How can I call my granddaughter?", fr: "Ah, heureusement que vous êtes là ! Comment est-ce que je peux appeler ma petite-fille ?" },
      { y: ["Ganz einfach: Sie rufen sie an, indem Sie auf ihren Namen tippen.", "Ganz einfach: Sie rufen sie an, indem Sie tippen auf ihren Namen.", "Ganz einfach: Sie rufen sie an, damit Sie auf ihren Namen tippen."], en: "Very easy: you call her by tapping her name.", fr: "C'est très simple : vous l'appelez en touchant son nom.", why: "The means: indem, verb at the end.", why_fr: "Le moyen : indem, verbe à la fin." },
      { p: "Und die Fotos? Ich habe Angst, dass sie verloren gehen.", en: "And the photos? I'm afraid they'll get lost.", fr: "Et les photos ? J'ai peur qu'elles se perdent." },
      { y: ["Die werden automatisch in der Cloud gespeichert, sodass sie nicht verloren gehen.", "Die werden automatisch in der Cloud gespeichert, damit sie gehen nicht verloren.", "Die werden automatisch in der Cloud gespeichert, indem sie nicht verloren gehen."], en: "They're saved automatically in the cloud, so they won't get lost.", fr: "Elles sont enregistrées automatiquement dans le cloud, si bien qu'elles ne se perdent pas.", why: "The result: sodass, verb at the end.", why_fr: "Le résultat : sodass, verbe à la fin." },
      { p: "In der Cloud? Ist das denn sicher?", en: "In the cloud? Is that safe?", fr: "Dans le cloud ? C'est sûr, ça ?" },
      { y: ["Ziemlich. Dadurch, dass die Daten verschlüsselt werden, kann niemand sie lesen.", "Ziemlich. Dadurch, dass die Daten werden verschlüsselt, kann niemand sie lesen.", "Ziemlich. Dadurch, dass die Daten verschlüsselt werden, niemand kann sie lesen."], en: "Fairly. Because the data is encrypted, nobody can read it.", fr: "Assez. Comme les données sont chiffrées, personne ne peut les lire.", why: "dadurch, dass: verb at the end; then the main verb comes first.", why_fr: "dadurch, dass : verbe à la fin ; puis le verbe principal vient en premier." },
      { p: "Und wie lange hält der Akku?", en: "And how long does the battery last?", fr: "Et la batterie tient combien de temps ?" },
      { y: ["Je nachdem, wie viel Sie das Handy benutzen. Meistens ein bis zwei Tage.", "Je nachdem, wie viel benutzen Sie das Handy. Meistens ein bis zwei Tage.", "Je nachdem, wie viel Sie das Handy benutzen. Meistens ein bis zwei Tagen."], en: "It depends how much you use the phone. Usually one to two days.", fr: "Ça dépend de combien vous utilisez le téléphone. En général un à deux jours.", why: "je nachdem, wie…: verb at the end; ein bis zwei Tage.", why_fr: "je nachdem, wie… : verbe à la fin ; ein bis zwei Tage." },
      { p: "Das ist ja alles gar nicht so schwer. Vielen Dank!", en: "It's not that hard after all. Thank you!", fr: "Ce n'est finalement pas si difficile. Merci beaucoup !" },
      { y: ["Gern! Sie lernen es am schnellsten, indem Sie einfach viel ausprobieren.", "Gern! Sie lernen es am schnellsten, indem Sie einfach viel probieren aus.", "Gern! Sie lernen es am schnellsten, in dem Sie einfach viel ausprobieren."], en: "You're welcome! You'll learn fastest by simply trying things out a lot.", fr: "Avec plaisir ! Vous apprendrez le plus vite en essayant simplement beaucoup de choses.", why: "indem (one word); separable verb together at the end: ausprobieren.", why_fr: "indem (en un mot) ; verbe séparable réuni à la fin : ausprobieren." }
    ] },
  { id: "umfrageergebnisse", lesson: 84, level: "B2", icon: "chart-column", partner: "Herr Vogt", role: "your manager", role_fr: "ton supérieur",
    title: "Presenting survey results", title_fr: "Présenter les résultats d'un sondage",
    setting: "Your company has asked its customers how they use its app. In a meeting, you present the (internal) results to your manager, Herr Vogt.", setting_fr: "Ton entreprise a demandé à ses clients comment ils utilisent son application. En réunion, tu présentes les résultats (internes) à ton supérieur, Herr Vogt.",
    turns: [
      { p: "Dann zeigen Sie uns mal die Ergebnisse der Kundenumfrage.", en: "Go ahead and show us the results of the customer survey.", fr: "Montrez-nous donc les résultats de l'enquête clients." },
      { y: ["Gern. Das Schaubild zeigt, wie oft unsere Kunden die App nutzen. Befragt wurden 800 Personen.", "Gern. Das Schaubild zeigt, wie oft nutzen unsere Kunden die App. Befragt wurden 800 Personen.", "Gern. Das Schaubild zeigt, wie oft unsere Kunden die App nutzen. Befragt wurde 800 Personen."], en: "Of course. The chart shows how often our customers use the app. 800 people were surveyed.", fr: "Volontiers. Le graphique montre à quelle fréquence nos clients utilisent l'application. 800 personnes ont été interrogées.", why: "Indirect question: verb at the end; plural: wurden.", why_fr: "Interrogative indirecte : verbe à la fin ; pluriel : wurden." },
      { p: "Und? Wie hat sich die Nutzung entwickelt?", en: "And? How has usage developed?", fr: "Et alors ? Comment l'utilisation a-t-elle évolué ?" },
      { y: ["Der Anteil der täglichen Nutzer ist von 25 auf 40 Prozent gestiegen.", "Der Anteil der täglichen Nutzer ist um 25 auf 40 Prozent gestiegen.", "Der Anteil der täglichen Nutzer hat von 25 auf 40 Prozent gestiegen."], en: "The share of daily users rose from 25 to 40 per cent.", fr: "La part des utilisateurs quotidiens est passée de 25 à 40 %.", why: "von … auf; steigen takes sein.", why_fr: "von … auf ; steigen se conjugue avec sein." },
      { p: "Also um 15 Prozent?", en: "So by 15 per cent?", fr: "Donc de 15 % ?" },
      { y: ["Genauer gesagt um 15 Prozentpunkte. In Prozent ist das ein Anstieg von 60 Prozent.", "Genauer gesagt um 15 Prozente. In Prozent ist das ein Anstieg von 60 Prozent.", "Genauer gesagt um 15 Prozentpunkte. In Prozent ist das ein Anstieg auf 60 Prozent."], en: "To be precise, by 15 percentage points. In per cent, that's a rise of 60 per cent.", fr: "Plus précisément de 15 points de pourcentage. En pourcentage, c'est une hausse de 60 %.", why: "Percentage points for the difference; ein Anstieg von 60 Prozent (the size of the rise).", why_fr: "Points de pourcentage pour l'écart ; ein Anstieg von 60 Prozent (l'ampleur de la hausse)." },
      { p: "Sehr gut. Gibt es auch Unterschiede zwischen den Altersgruppen?", en: "Very good. Are there differences between age groups?", fr: "Très bien. Y a-t-il aussi des différences entre les tranches d'âge ?" },
      { y: ["Ja. Während die Jüngeren die App fast täglich nutzen, öffnen die Älteren sie eher selten.", "Ja. Während die Jüngeren nutzen die App fast täglich, öffnen die Älteren sie eher selten.", "Ja. Während die Jüngeren die App fast täglich nutzen, die Älteren öffnen sie eher selten."], en: "Yes. While younger people use the app almost every day, older people rarely open it.", fr: "Oui. Alors que les plus jeunes utilisent l'application presque tous les jours, les plus âgés l'ouvrent plutôt rarement.", why: "während: verb at the end; then the main verb comes first.", why_fr: "während : verbe à la fin ; puis le verbe principal en premier." },
      { p: "Woran könnte das liegen?", en: "What could be the reason for that?", fr: "À quoi est-ce que ça pourrait tenir ?" },
      { y: ["Vielleicht daran, dass die Schrift zu klein ist. Wir könnten das testen, indem wir eine größere Version anbieten.", "Vielleicht davon, dass die Schrift zu klein ist. Wir könnten das testen, indem wir eine größere Version anbieten.", "Vielleicht daran, dass die Schrift ist zu klein. Wir könnten das testen, indem wir eine größere Version anbieten."], en: "Perhaps because the font is too small. We could test that by offering a bigger version.", fr: "Peut-être au fait que les caractères sont trop petits. Nous pourrions le tester en proposant une version plus grande.", why: "liegen an → daran, dass…; indem for the means.", why_fr: "liegen an → daran, dass… ; indem pour le moyen." }
    ] }
  );

  W.READINGS.push({
    id: "zuse", level: "B2", icon: "book-open", title: "Konrad Zuse und die Z3", genre: "Portrait",
    intro: "In 1941, in the middle of the war, a young engineer presented a machine in Berlin that many consider the first working computer.",
    intro_fr: "En 1941, en pleine guerre, un jeune ingénieur présente à Berlin une machine que beaucoup considèrent comme le premier ordinateur en état de marche.",
    paragraphs: [
      { de: "Konrad Zuse, 1910 in Berlin geboren, arbeitete nach seinem Studium als Bauingenieur. Die vielen langweiligen Berechnungen, die dieser Beruf verlangte, brachten ihn auf eine Idee: Eine Maschine sollte sie übernehmen. Von 1936 bis 1938 baute er im Wohnzimmer seiner Eltern seinen ersten Rechner, die Z1.", en: "Konrad Zuse, born in Berlin in 1910, worked as a civil engineer after his studies. The many boring calculations that this job required gave him an idea: a machine should do them. From 1936 to 1938, he built his first computer, the Z1, in his parents' living room.", fr: "Konrad Zuse, né à Berlin en 1910, travaille comme ingénieur en génie civil après ses études. Les nombreux calculs fastidieux qu'exige ce métier lui donnent une idée : une machine devrait s'en charger. De 1936 à 1938, il construit son premier calculateur, la Z1, dans le salon de ses parents." },
      { de: "Am 12. Mai 1941 stellte Zuse in Berlin die Z3 vor. Die mit rund 2600 Relais arbeitende Maschine gilt als erster funktionsfähiger, frei programmierbarer und vollautomatischer Rechner der Welt. Programmiert wurde sie mithilfe eines gelochten Filmstreifens, sodass man Rechenaufgaben nicht jedes Mal von Hand eingeben musste.", en: "On 12 May 1941, Zuse presented the Z3 in Berlin. The machine, which worked with around 2,600 relays, is considered the world's first working, freely programmable and fully automatic computer. It was programmed using a punched strip of film, so that calculations didn't have to be entered by hand every time.", fr: "Le 12 mai 1941, Zuse présente la Z3 à Berlin. La machine, qui fonctionne avec environ 2 600 relais, est considérée comme le premier calculateur au monde en état de marche, librement programmable et entièrement automatique. On la programmait à l'aide d'une bande de film perforée, si bien qu'il n'était pas nécessaire de saisir les calculs à la main à chaque fois." },
      { de: "Die Z3 überlebte den Krieg nicht: 1943 wurde sie bei einem Bombenangriff zerstört. Anfang der 1960er-Jahre ließ Zuse einen Nachbau anfertigen, der heute im Deutschen Museum in München steht. Dort können Besucher die damals revolutionäre Technik aus der Nähe betrachten.", en: "The Z3 did not survive the war: in 1943 it was destroyed in a bombing raid. In the early 1960s, Zuse had a replica built, which is now in the Deutsches Museum in Munich. There, visitors can take a close look at what was then revolutionary technology.", fr: "La Z3 n'a pas survécu à la guerre : en 1943, elle a été détruite lors d'un bombardement. Au début des années 1960, Zuse en fit construire une réplique, qui se trouve aujourd'hui au Deutsches Museum de Munich. Les visiteurs peuvent y observer de près cette technique alors révolutionnaire." },
      { de: "Zuse dachte auch über die Sprache nach, mit der man Maschinen Befehle gibt. Sein „Plankalkül“ gilt als eine der ersten höheren Programmiersprachen. Lange Zeit blieb seine Arbeit außerhalb Deutschlands wenig bekannt; heute wird er oft als einer der Väter des Computers bezeichnet. Er starb 1995.", en: "Zuse also thought about the language used to give machines instructions. His “Plankalkül” is considered one of the first high-level programming languages. For a long time his work remained little known outside Germany; today he is often described as one of the fathers of the computer. He died in 1995.", fr: "Zuse réfléchit aussi au langage qui permet de donner des ordres aux machines. Son « Plankalkül » est considéré comme l'un des premiers langages de programmation de haut niveau. Longtemps, son travail est resté peu connu hors d'Allemagne ; aujourd'hui, on le présente souvent comme l'un des pères de l'ordinateur. Il est mort en 1995." }
    ],
    glossary: { "Studium": ["studies (at university)", "études (universitaires)"], "Bauingenieur": ["civil engineer", "ingénieur en génie civil"], "Berechnungen": ["calculations", "calculs"], "verlangte": ["required", "exigeait"], "Rechner": ["computer, calculator", "calculateur, ordinateur"], "stellte": ["(vorstellen) presented", "(vorstellen) présenta"], "Relais": ["relays", "relais"], "funktionsfähiger": ["working, functional", "en état de marche"], "programmierbarer": ["programmable", "programmable"], "vollautomatischer": ["fully automatic", "entièrement automatique"], "gelochten": ["punched", "perforé"], "Filmstreifens": ["strip of film", "bande de film"], "Rechenaufgaben": ["calculations, sums", "calculs"], "eingeben": ["to enter, to input", "saisir"], "überlebte": ["survived", "survécut"], "Bombenangriff": ["bombing raid", "bombardement"], "zerstört": ["destroyed", "détruit"], "Nachbau": ["replica", "réplique"], "anfertigen": ["to make, to produce", "fabriquer"], "revolutionäre": ["revolutionary", "révolutionnaire"], "betrachten": ["to look at, to observe", "observer"], "Befehle": ["commands, instructions", "ordres, instructions"], "Plankalkül": ["Plankalkül (Zuse's programming language)", "Plankalkül (le langage de programmation de Zuse)"], "Programmiersprachen": ["programming languages", "langages de programmation"], "bezeichnet": ["described, called", "désigné, qualifié"], "Väter": ["fathers", "pères"] },
    questions: [
      { q: "Was brachte Zuse auf die Idee, eine Rechenmaschine zu bauen?", o: ["Die vielen langweiligen Berechnungen in seinem Beruf", "Ein Auftrag der Regierung", "Ein Buch aus Amerika"], a: 0 },
      { q: "Wo baute er die Z1?", o: ["Im Wohnzimmer seiner Eltern", "In einer Fabrik in München", "An einer Universität"], a: 0 },
      { q: "Wann stellte er die Z3 vor?", o: ["Am 12. Mai 1941", "Im Jahr 1936", "Im Jahr 1995"], a: 0 },
      { q: "Was geschah 1943 mit der Z3?", o: ["Sie wurde bei einem Bombenangriff zerstört.", "Sie wurde ins Museum gebracht.", "Sie wurde nach Amerika verkauft."], a: 0 },
      { q: "Was ist der „Plankalkül“?", o: ["Eine der ersten höheren Programmiersprachen", "Ein Museum in München", "Ein Relais der Z3"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-b2-4", unit: "b2-4", level: "B2", icon: "bot",
    title: "Die Roboter-AG", title_fr: "Le club de robotique",
    context: "A school radio report. The reporter visits the robotics club and talks to Lotta, a pupil, and Herr Pfeiffer, the teacher in charge.", context_fr: "Un reportage de la radio de l'école. Le reporter rend visite au club de robotique et parle avec Lotta, une élève, et Herr Pfeiffer, le professeur responsable.",
    words: [["die AG (Arbeitsgemeinschaft)", "the after-school club", "le club, l'atelier"], ["der Sensor, -en", "the sensor", "le capteur"], ["ausweichen", "to avoid, to get out of the way", "éviter, contourner"], ["der Wettbewerb, -e", "the competition", "le concours"], ["tüfteln", "to tinker, to fiddle about", "bricoler, peaufiner"]],
    lines: [["Reporter", "Ich bin heute bei der Roboter-AG. Lotta, was ist das für ein kleines Fahrzeug?", "de-DE"], ["Lotta", "Das ist unser selbst gebauter Roboter. Er fährt durch ein Labyrinth, indem er mit zwei Sensoren die Wände erkennt.", "de-DE"], ["Reporter", "Und wenn ein Hindernis kommt?", "de-DE"], ["Lotta", "Dann weicht er automatisch aus. Am Anfang war er aber so schnell, dass er ständig gegen die Wand gefahren ist.", "de-DE"], ["Herr Pfeiffer", "Genau. Die Schüler haben wochenlang getüftelt, bis das Programm funktioniert hat. Dadurch lernen sie mehr als in jeder Mathestunde.", "de-DE"], ["Reporter", "Herr Pfeiffer, wie viele Schüler machen mit?", "de-DE"], ["Herr Pfeiffer", "Im Moment vierzehn, je nachdem, wie viele Klassenarbeiten gerade anstehen. Im Mai nehmen wir an einem regionalen Wettbewerb teil.", "de-DE"], ["Lotta", "Bis dahin müssen wir noch einiges verbessern. Aber ich bin optimistisch.", "de-DE"]],
    gist: ["Worum geht es in dem Bericht?", ["Um einen Roboter, den Schüler gebaut haben", "Um einen neuen Computer für die Schule", "Um eine Mathearbeit"]],
    detail: [["Wie erkennt der Roboter die Wände?", ["Mit zwei Sensoren", "Mit einer Kamera", "Gar nicht"]], ["Was war am Anfang das Problem?", ["Er war zu schnell und fuhr gegen die Wand.", "Er fuhr gar nicht.", "Er war zu laut."]], ["Wie viele Schüler machen im Moment mit?", ["Vierzehn", "Vier", "Vierzig"]], ["Was passiert im Mai?", ["Ein regionaler Wettbewerb", "Die Sommerferien", "Ein Besuch im Museum"]]],
    decode: ["Er fährt durch ein Labyrinth, indem er mit zwei Sensoren die Wände erkennt.", "Am Anfang war er aber so schnell, dass er ständig gegen die Wand gefahren ist."],
    tip: "When someone explains how something works, listen for indem (the means) and sodass or so …, dass (the result): they carry the logic of the explanation, and the verb you need comes at the very end of the clause.", tip_fr: "Quand quelqu'un explique comment fonctionne quelque chose, repère indem (le moyen) et sodass ou so …, dass (le résultat) : ils portent la logique de l'explication, et le verbe dont tu as besoin arrive tout à la fin de la proposition."
  }]);

  W.PROMPTS.push({ id: "de-b2-4", level: "B2", q: "Halte einen kurzen Vortrag: „Künstliche Intelligenz im Alltag – Chancen und Risiken“. Gib Beispiele, nenne Vor- und Nachteile und sag deine Meinung.", en: "Give a short talk: “Artificial intelligence in everyday life: opportunities and risks”. Give examples, list advantages and disadvantages, and say what you think.", fr: "Fais un court exposé : « L'intelligence artificielle au quotidien : chances et risques ». Donne des exemples, cite des avantages et des inconvénients, et dis ce que tu en penses.", time: 240,
    phrases: ["In meinem Vortrag geht es um…", "Ein bekanntes Beispiel ist…", "Ein großer Vorteil besteht darin, dass…", "Problematisch finde ich…", "Zusammenfassend lässt sich sagen, …"],
    model: "In meinem Vortrag geht es um künstliche Intelligenz im Alltag. Viele Menschen nutzen sie längst, ohne darüber nachzudenken: Ein bekanntes Beispiel sind Übersetzungsprogramme oder Navigations-Apps, die uns den schnellsten Weg zeigen. Ein großer Vorteil besteht darin, dass solche Programme uns lästige Arbeit abnehmen, sodass wir mehr Zeit für andere Dinge haben. Auch in der Medizin können Programme helfen, indem sie Röntgenbilder sehr schnell auswerten. Problematisch finde ich dagegen den Datenschutz: Viele Anwendungen speichern große Mengen persönlicher Daten, und oft weiß man nicht, wer Zugriff darauf hat. Außerdem machen auch Programme Fehler, die man nicht immer sofort erkennt. Zusammenfassend lässt sich sagen, dass künstliche Intelligenz ein nützliches Werkzeug ist, wenn wir kritisch bleiben und die Ergebnisse überprüfen." });

  W.WRITING_GUIDE["b2-4"] = { genre: "An opinion in an online forum (Goethe B2, writing part 1)", genre_fr: "Un avis sur un forum en ligne (Goethe B2, écrit partie 1)",
    plan: [["Report the opinion you are reacting to.", "Rapporte l'opinion à laquelle tu réagis."], ["Your position.", "Ta position."], ["An argument for, with an example.", "Un argument pour, avec un exemple."], ["An argument against.", "Un argument contre."], ["A proposal and a conclusion.", "Une proposition et une conclusion."]],
    marks: [["schreibt, Schüler sollten", "reporting the opinion (Konjunktiv)", "rapporter l'opinion (Konjunktiv)"], ["Ich sehe das differenzierter", "a nuanced position", "une position nuancée"], ["indem sie sich", "explaining a means with indem", "expliquer un moyen avec indem"], ["Ein Beispiel aus meinem eigenen Alltag", "an example", "un exemple"], ["Problematisch wird es allerdings", "the argument against", "l'argument contre"], ["Deshalb schlage ich vor", "a proposal", "une proposition"]] };

  /* Atelier de langue : champs allemands d'abord, puis anglais et français (voir localize.js). */
  W.LEXIS = W.LEXIS || {};
  W.LEXIS["b2-4"] = {
    colloc: [
      ["eine These aufstellen", "to put forward a thesis", "formuler une thèse", "Die Forscherin hat eine neue These aufgestellt.", "aufgestellt", ["gemacht", "gegeben"]],
      ["ein Experiment durchführen", "to carry out an experiment", "réaliser une expérience", "Im Labor wurde ein Experiment durchgeführt.", "durchgeführt", ["gestellt", "gelegt"]],
      ["Daten erheben", "to collect data", "collecter des données", "Für die Studie wurden Daten von 500 Personen erhoben.", "erhoben", ["gehoben", "genommen"]],
      ["eine Entdeckung machen", "to make a discovery", "faire une découverte", "Die Forscher haben eine überraschende Entdeckung gemacht.", "gemacht", ["getan", "gestellt"]],
      ["Fortschritte machen", "to make progress", "faire des progrès", "Die Medizin macht ständig Fortschritte.", "macht", ["tut", "gibt"]],
      ["Fragen aufwerfen", "to raise questions", "soulever des questions", "Die neue Technik wirft viele ethische Fragen auf.", "wirft", ["hebt", "zieht"]],
      ["Schlüsse ziehen", "to draw conclusions", "tirer des conclusions", "Aus diesen Daten kann man noch keine Schlüsse ziehen.", "ziehen", ["machen", "nehmen"]],
      ["ein Patent anmelden", "to apply for a patent", "déposer un brevet", "Die Firma hat ein Patent angemeldet.", "angemeldet", ["gestellt", "gemacht"]],
      ["auf Kritik stoßen", "to meet with criticism", "se heurter à des critiques", "Das Projekt stieß auf heftige Kritik.", "stieß", ["fiel", "ging"]],
      ["einen Zweck erfüllen", "to serve a purpose", "remplir sa fonction", "Das alte Gerät erfüllt noch seinen Zweck.", "erfüllt", ["macht", "tut"]]
    ],
    wf: [
      ["Die ___ des Telefons veränderte die Welt. (ERFINDEN)", "Erfindung"],
      ["Diese Theorie ist ___ nicht bewiesen. (WISSENSCHAFT)", "wissenschaftlich"],
      ["Die ___ der Daten dauerte drei Monate. (AUSWERTEN)", "Auswertung"],
      ["Die Ergebnisse der beiden Studien sind nicht ___. (VERGLEICHEN)", "vergleichbar"],
      ["Die ___ von Algorithmen nimmt zu. (BEDEUTEN)", "Bedeutung"],
      ["Der technische ___ ist kaum aufzuhalten. (FORTSCHREITEN)", "Fortschritt"],
      ["Das neue Gerät ist leicht ___. (BEDIENEN)", "bedienbar"],
      ["Viele Menschen sind künstlicher Intelligenz gegenüber ___. (MISSTRAUEN)", "misstrauisch"]
    ],
    kwt: [
      ["Die Methode, die von Forschern entwickelt wurde, ist neu.", "ENTWICKELTE", "Die ___ Methode ist neu.", "von Forschern entwickelte"],
      ["Der Verbrauch, der seit Jahren steigt, ist ein Problem.", "STEIGENDE", "Der ___ Verbrauch ist ein Problem.", "seit Jahren steigende"],
      ["Wenn man das Licht ausschaltet, spart man Energie.", "INDEM", "Man spart Energie, ___.", "indem man das Licht ausschaltet"],
      ["Es regnete stark. Deshalb fiel das Experiment aus.", "SODASS", "Es regnete stark, ___.", "sodass das Experiment ausfiel"],
      ["Der Anteil lag bei 20 Prozent, jetzt liegt er bei 30 Prozent.", "UM", "Der Anteil ist ___ gestiegen.", "um zehn Prozentpunkte|um 10 Prozentpunkte"],
      ["Die Zahl der Nutzer hat sich verdoppelt.", "DOPPELT", "Es gibt heute ___ Nutzer wie früher.", "doppelt so viele"]
    ],
    idioms: [
      ["das Rad neu erfinden", "etwas längst Bekanntes noch einmal entwickeln", "to reinvent the wheel", "réinventer la roue", "Wir müssen das Rad nicht neu erfinden.", "das Rad nicht neu erfinden"],
      ["der Groschen ist gefallen", "endlich hat jemand etwas verstanden", "the penny has dropped", "ça a fait tilt", "Nach der dritten Erklärung ist bei mir endlich der Groschen gefallen.", "der Groschen gefallen"],
      ["auf dem neuesten Stand sein", "aktuell informiert oder ausgestattet sein", "to be up to date", "être à la pointe, être à jour", "Unsere Software ist immer auf dem neuesten Stand.", "auf dem neuesten Stand"],
      ["Neuland betreten", "etwas ganz Neues machen", "to break new ground", "explorer un terrain inconnu", "Mit diesem Projekt betreten die Forscher Neuland.", "Neuland"],
      ["den Stecker ziehen", "etwas beenden", "to pull the plug", "débrancher, mettre fin à quelque chose", "Nach zwei Jahren hat die Firma den Stecker gezogen.", "den Stecker gezogen"],
      ["zwei Fliegen mit einer Klappe schlagen", "zwei Ziele mit einer Handlung erreichen", "to kill two birds with one stone", "faire d'une pierre deux coups", "Mit dem Fahrrad zur Arbeit schlage ich zwei Fliegen mit einer Klappe.", "zwei Fliegen mit einer Klappe"],
      ["etwas auf Herz und Nieren prüfen", "etwas sehr gründlich testen", "to put something through its paces", "examiner quelque chose sous toutes les coutures", "Die Ingenieure haben das Auto auf Herz und Nieren geprüft.", "auf Herz und Nieren"],
      ["jemandem die Daumen drücken", "jemandem Glück wünschen", "to keep one's fingers crossed for someone", "croiser les doigts pour quelqu'un", "Ich drücke dir für den Wettbewerb die Daumen!", "die Daumen"]
    ]
  };

  W.COURSE.push({ id: "b2-4", level: "B2", icon: "atom", title: "Science and technology", title_fr: "Sciences et technique",
    intro: "From Konrad Zuse's first computer to artificial intelligence: in this unit, you'll learn to read the long participle phrases of scientific German (die von Forschern entwickelte Methode), to explain how something works and what follows from it (indem, sodass, je nachdem), and to describe a chart precisely, without confusing per cent and percentage points.",
    intro_fr: "Du premier ordinateur de Konrad Zuse à l'intelligence artificielle : dans cette unité, tu vas apprendre à lire les longs groupes participiaux de l'allemand scientifique (die von Forschern entwickelte Methode), à expliquer comment une chose fonctionne et ce qui en découle (indem, sodass, je nachdem), et à décrire un graphique avec précision, sans confondre pourcentages et points de pourcentage.",
    can: ["Read and build extended participle phrases", "Explain a means with indem and a consequence with sodass", "Describe a chart: trends, shares and comparisons", "Tell per cent from percentage points", "Write a forum opinion of about 150 words (Goethe B2)"],
    can_fr: ["Lire et construire des groupes participiaux étendus", "Exprimer un moyen avec indem et une conséquence avec sodass", "Décrire un graphique : évolutions, parts et comparaisons", "Distinguer pourcentages et points de pourcentage", "Écrire un avis d'environ 150 mots sur un forum (Goethe B2)"],
    lessons: [82, 83, 84], vocab: ["forschungDE", "technikdatenDE"], reading: "zuse", prompt: "de-b2-4",
    writing: { task: "In a forum for parents and teachers, someone writes: “Pupils should be allowed to use AI tools for their homework.” Give your opinion (150-180 words): report the opinion, take a nuanced position, give an argument for with an example, an argument against, and make a proposal.", task_fr: "Sur un forum de parents et d'enseignants, quelqu'un écrit : « Les élèves devraient avoir le droit d'utiliser des outils d'IA pour leurs devoirs. » Donne ton avis (150 à 180 mots) : rapporte l'opinion, prends une position nuancée, donne un argument pour avec un exemple, un argument contre, et fais une proposition.", words: "150-180",
      tips: ["Ein Lehrer schreibt, Schüler sollten…", "Ich sehe das differenzierter.", "Ein Beispiel aus meinem eigenen Alltag: …", "Problematisch wird es allerdings, wenn…", "Deshalb schlage ich vor, …"],
      checklist: ["I reported the opinion I'm reacting to", "I took a nuanced position", "I gave an argument for with an example and an argument against", "I used indem or sodass at least once", "I wrote between 150 and 180 words"],
      checklist_fr: ["J'ai rapporté l'opinion à laquelle je réagis", "J'ai pris une position nuancée", "J'ai donné un argument pour avec un exemple et un argument contre", "J'ai employé au moins une fois indem ou sodass", "J'ai écrit entre 150 et 180 mots"],
      model: "Ein Lehrer schreibt, Schüler sollten bei den Hausaufgaben KI-Programme benutzen dürfen. Ich sehe das differenzierter.\n\nEinerseits gehören solche Programme längst zu unserem Alltag, und die Schule sollte junge Menschen darauf vorbereiten. Schüler können viel lernen, indem sie sich von einem Programm einen schwierigen Text erklären lassen oder ihre eigenen Sätze verbessern. Ein Beispiel aus meinem eigenen Alltag: Ich lasse mir manchmal eine Grammatikregel auf drei verschiedene Arten erklären, bis ich sie wirklich verstehe.\n\nProblematisch wird es allerdings, wenn das Programm die ganze Arbeit macht. Wer einen Aufsatz einfach generieren lässt, lernt nichts, sodass die Hausaufgabe ihren Zweck nicht mehr erfüllt. Außerdem enthalten die Antworten manchmal Fehler, die Schüler nicht erkennen. Wer sich blind auf die Maschine verlässt, merkt das oft erst in der Prüfung.\n\nDeshalb schlage ich vor, die Programme zu erlauben, aber klare Regeln aufzustellen: Schüler sollten angeben, wofür sie die KI benutzt haben, und wichtige Texte weiterhin in der Schule schreiben. So bleibt die eigene Leistung sichtbar." } });
})();
