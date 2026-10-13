/* Cours d'allemand, unité B2-7 « Education and studying / Éducation et études » : les tournures verbo-nominales
   (eine Entscheidung treffen, in Frage kommen, zur Verfügung stellen), les relatives avec was, wo(r)- et wer,
   écrire à un enseignant et aller à sa permanence (Sprechstunde). Personnages fictifs, prénoms allemands.
   Faits vérifiables seulement : Wilhelm von Humboldt (1767-1835) ; l'université de Berlin est fondée en 1810 ;
   idéal de l'unité de la recherche et de l'enseignement, liberté d'enseigner et d'étudier ; depuis 1949, elle
   s'appelle Humboldt-Universität zu Berlin, du nom de Wilhelm et de son frère Alexander ; dans la plupart des
   Länder, pas de frais de scolarité dans les établissements publics, seulement une contribution semestrielle ;
   exception : étudiants hors UE en Bade-Wurtemberg depuis 2017. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "hochschuleDE", icon: "graduation-cap", title: "Studying at university", title_fr: "Étudier à l'université", level: "B2", words: [
    ["die Hochschule, -n", "the university, the college", "l'établissement d'enseignement supérieur", "Sie studiert an einer Hochschule für Musik."],
    ["der Studiengang, ¨-e", "the degree programme", "le cursus, la filière", "Welchen Studiengang hast du gewählt?"],
    ["sich einschreiben", "to enrol", "s'inscrire", "Bis zum 15. Juli muss man sich einschreiben."],
    ["die Zulassung, -en", "the admission", "l'admission", "Für Medizin ist die Zulassung sehr schwer."],
    ["die Studiengebühr, -en", "the tuition fee", "les frais de scolarité", "In vielen Ländern sind die Studiengebühren hoch."],
    ["der Semesterbeitrag, ¨-e", "the semester fee", "la contribution semestrielle", "Der Semesterbeitrag enthält oft ein Ticket für Bus und Bahn."],
    ["das Stipendium, Stipendien", "the scholarship", "la bourse d'études", "Dank eines Stipendiums kann sie im Ausland studieren."],
    ["die Sprechstunde, -n", "the office hours", "la permanence (d'un enseignant)", "Die Professorin hat dienstags Sprechstunde."],
    ["die Hausarbeit, -en", "the term paper", "le mémoire de séminaire, le devoir", "Meine Hausarbeit muss zwanzig Seiten lang sein."],
    ["die Abgabefrist, -en", "the submission deadline", "la date limite de remise", "Die Abgabefrist ist der 31. März."],
    ["die Klausur, -en", "the written exam", "l'examen écrit, le partiel", "Die Klausur dauert drei Stunden."],
    ["der Dozent, -en (die Dozentin)", "the lecturer", "l'enseignant, l'enseignante (à l'université)", "Unsere Dozentin erklärt sehr anschaulich."],
    ["die Abschlussarbeit, -en", "the dissertation, the thesis", "le mémoire de fin d'études", "Er schreibt seine Abschlussarbeit über Windenergie."],
    ["das Referat, -e", "the presentation (in class)", "l'exposé", "Nächste Woche halte ich ein Referat über Kafka."],
    ["das Wohnheim, -e", "the hall of residence", "la résidence universitaire", "Im Wohnheim habe ich viele Leute kennengelernt."],
    ["die Mensa, Mensen", "the university canteen", "le restaurant universitaire", "In der Mensa ist das Essen günstig."]
  ] },
  { id: "bildungsdebatteDE", icon: "school", title: "Education debates", title_fr: "Débats sur l'éducation", level: "B2", words: [
    ["die Chancengleichheit", "equal opportunities", "l'égalité des chances", "Chancengleichheit beginnt schon im Kindergarten."],
    ["die Herkunft", "origin, background", "l'origine (sociale)", "Der Bildungserfolg sollte nicht von der Herkunft abhängen."],
    ["fördern", "to support, to encourage", "encourager, soutenir", "Die Schule fördert besonders begabte Kinder."],
    ["benachteiligt", "disadvantaged", "défavorisé", "Kinder aus benachteiligten Familien brauchen mehr Unterstützung."],
    ["der Lehrplan, ¨-e", "the curriculum", "le programme scolaire", "Programmieren steht jetzt auf dem Lehrplan."],
    ["die Nachhilfe", "private tutoring", "les cours particuliers, le soutien scolaire", "Viele Eltern bezahlen ihren Kindern Nachhilfe."],
    ["die Begabung, -en", "the talent, the gift", "le don, le talent", "Sie hat eine besondere Begabung für Sprachen."],
    ["begabt", "gifted, talented", "doué", "Er ist mathematisch sehr begabt."],
    ["die Lernmethode, -n", "the learning method", "la méthode d'apprentissage", "Jeder muss seine eigene Lernmethode finden."],
    ["beherrschen", "to master", "maîtriser", "Nach drei Jahren beherrscht sie die Sprache fließend."],
    ["der Quereinsteiger, - (die Quereinsteigerin)", "the career changer", "la personne en reconversion", "An unserer Schule unterrichten auch Quereinsteiger."],
    ["der Schulabschluss, ¨-e", "the school-leaving qualification", "le diplôme de fin d'études secondaires", "Ohne Schulabschluss ist es schwer, eine Lehrstelle zu finden."],
    ["die Schulpflicht", "compulsory schooling", "la scolarité obligatoire", "In Deutschland gibt es eine Schulpflicht."],
    ["die Ganztagsschule, -n", "the all-day school", "l'école à journée complète", "In der Ganztagsschule essen die Kinder mittags zusammen."],
    ["das lebenslange Lernen", "lifelong learning", "l'apprentissage tout au long de la vie", "Lebenslanges Lernen ist heute in vielen Berufen nötig."],
    ["der Lernerfolg, -e", "learning success", "la réussite (dans l'apprentissage)", "Regelmäßige Wiederholung verbessert den Lernerfolg."]
  ] });

  W.LESSONS.push(
  {
    id: 91, level: "B2", icon: "puzzle",
    title: "Eine Entscheidung treffen: noun-verb combinations", title_fr: "Eine Entscheidung treffen : les tournures verbo-nominales",
    subtitle: "The fixed pairs of a noun and a verb that make German sound formal and precise.", subtitle_fr: "Les associations figées d'un nom et d'un verbe, qui donnent un allemand soutenu et précis.",
    body: `
<h2>A noun does the meaning, the verb does the grammar</h2>
<p>Instead of <s-de>entscheiden</s-de>, formal German often says <s-de>eine Entscheidung treffen</s-de>. In these combinations (<s-de>Nomen-Verb-Verbindungen</s-de>), the noun carries the meaning and the verb is almost empty: you have to learn the pair as a block.</p>
<h2>The most useful ones, by verb</h2>
<table>
<tr><th>Verb</th><th>Combinations</th></tr>
<tr><td><s-de>bringen</s-de></td><td><s-de>zum Ausdruck bringen</s-de> (to express) · <s-de>zur Sprache bringen</s-de> (to raise a topic)</td></tr>
<tr><td><s-de>kommen</s-de></td><td><s-de>in Frage kommen</s-de> (to be an option) · <s-de>zur Sprache kommen</s-de> (to be raised) · <s-de>zu einem Ergebnis kommen</s-de></td></tr>
<tr><td><s-de>nehmen</s-de></td><td><s-de>in Kauf nehmen</s-de> (to accept a drawback) · <s-de>in Anspruch nehmen</s-de> (to make use of) · <s-de>Stellung nehmen</s-de></td></tr>
<tr><td><s-de>stellen</s-de></td><td><s-de>eine Frage / einen Antrag stellen</s-de> · <s-de>zur Verfügung stellen</s-de> (to provide)</td></tr>
<tr><td><s-de>stehen</s-de></td><td><s-de>zur Verfügung stehen</s-de> (to be available) · <s-de>zur Diskussion stehen</s-de> · <s-de>unter Druck stehen</s-de></td></tr>
<tr><td><s-de>treffen</s-de></td><td><s-de>eine Entscheidung / eine Vereinbarung treffen</s-de></td></tr>
</table>
<h2>Active and passive pairs</h2>
<p>Some pairs work like active and passive: <s-de>Sie brachte das Problem zur Sprache.</s-de> (She raised the problem.) → <s-de>Das Problem kam zur Sprache.</s-de> (The problem was raised.) Likewise <s-de>zur Verfügung stellen</s-de> (to provide) → <s-de>zur Verfügung stehen</s-de> (to be available).</p>
<div class="tip">These combinations are typical of exams, official letters and university texts. Learn each one with an example, and check the preposition and the article: <s-de>in Frage</s-de> (no article), <s-de>zur Verfügung</s-de> (zu + der).</div>
`,
    body_fr: `
<h2>Le nom porte le sens, le verbe porte la grammaire</h2>
<p>Au lieu de <s-de>entscheiden</s-de>, l'allemand soutenu dit souvent <s-de>eine Entscheidung treffen</s-de> (prendre une décision). Dans ces tournures (<s-de>Nomen-Verb-Verbindungen</s-de>), c'est le nom qui porte le sens, et le verbe est presque vide : il faut apprendre le couple en bloc. Le français en a beaucoup aussi : « prendre une décision », « mettre à disposition ».</p>
<h2>Les plus utiles, classées par verbe</h2>
<table>
<tr><th>Verbe</th><th>Tournures</th></tr>
<tr><td><s-de>bringen</s-de></td><td><s-de>zum Ausdruck bringen</s-de> (exprimer) · <s-de>zur Sprache bringen</s-de> (aborder un sujet)</td></tr>
<tr><td><s-de>kommen</s-de></td><td><s-de>in Frage kommen</s-de> (entrer en ligne de compte) · <s-de>zur Sprache kommen</s-de> (être abordé) · <s-de>zu einem Ergebnis kommen</s-de></td></tr>
<tr><td><s-de>nehmen</s-de></td><td><s-de>in Kauf nehmen</s-de> (accepter un inconvénient) · <s-de>in Anspruch nehmen</s-de> (recourir à) · <s-de>Stellung nehmen</s-de></td></tr>
<tr><td><s-de>stellen</s-de></td><td><s-de>eine Frage / einen Antrag stellen</s-de> · <s-de>zur Verfügung stellen</s-de> (mettre à disposition)</td></tr>
<tr><td><s-de>stehen</s-de></td><td><s-de>zur Verfügung stehen</s-de> (être à disposition) · <s-de>zur Diskussion stehen</s-de> · <s-de>unter Druck stehen</s-de></td></tr>
<tr><td><s-de>treffen</s-de></td><td><s-de>eine Entscheidung / eine Vereinbarung treffen</s-de></td></tr>
</table>
<h2>Des couples actif et passif</h2>
<p>Certaines tournures fonctionnent comme un actif et un passif : <s-de>Sie brachte das Problem zur Sprache.</s-de> (Elle a abordé le problème.) → <s-de>Das Problem kam zur Sprache.</s-de> (Le problème a été abordé.) De même : <s-de>zur Verfügung stellen</s-de> (mettre à disposition) → <s-de>zur Verfügung stehen</s-de> (être à disposition).</p>
<div class="tip">Ces tournures sont typiques des examens, des lettres officielles et des textes universitaires. Apprends chacune avec un exemple, et vérifie la préposition et l'article : <s-de>in Frage</s-de> (sans article), <s-de>zur Verfügung</s-de> (zu + der).</div>
`,
    examples: [
      ["Bis Ende Juni muss ich eine Entscheidung treffen.", "I have to make a decision by the end of June.", "Je dois prendre une décision d'ici fin juin."],
      ["Ein Studium im Ausland kommt für mich durchaus in Frage.", "Studying abroad is definitely an option for me.", "Des études à l'étranger sont tout à fait envisageables pour moi."],
      ["Für die gute Lage nehme ich die höhere Miete in Kauf.", "I accept the higher rent for the good location.", "J'accepte le loyer plus élevé pour le bon emplacement."],
      ["Die Universität stellt den Studierenden Computer zur Verfügung.", "The university provides computers for the students.", "L'université met des ordinateurs à la disposition des étudiants."],
      ["In der Sitzung kam auch das Thema Prüfungsstress zur Sprache.", "The topic of exam stress also came up in the meeting.", "Le sujet du stress des examens a aussi été abordé pendant la réunion."],
      ["Viele Studierende nehmen die psychologische Beratung in Anspruch.", "Many students make use of the counselling service.", "Beaucoup d'étudiants ont recours au service de soutien psychologique."],
      ["In ihrer Rede brachte sie ihren Dank zum Ausdruck.", "In her speech she expressed her thanks.", "Dans son discours, elle a exprimé ses remerciements."]
    ],
    quiz: [
      { q: "entscheiden = eine Entscheidung ___", q_fr: "entscheiden = eine Entscheidung ___", o: ["treffen", "machen", "nehmen"], a: 0, ex: "eine Entscheidung treffen.", ex_fr: "eine Entscheidung treffen." },
      { q: "“That's not an option for me.”", q_fr: "« Pour moi, ça n'entre pas en ligne de compte. »", o: ["Das kommt für mich nicht in Frage.", "Das steht für mich nicht in Frage.", "Das kommt für mich nicht in die Frage."], a: 0, ex: "in Frage kommen (no article).", ex_fr: "in Frage kommen (sans article)." },
      { q: "“The university provides rooms.”", q_fr: "« L'université met des salles à disposition. »", o: ["Die Universität stellt Räume zur Verfügung.", "Die Universität steht Räume zur Verfügung.", "Die Universität gibt Räume zur Verfügung."], a: 0, ex: "zur Verfügung stellen (active).", ex_fr: "zur Verfügung stellen (actif)." },
      { q: "Das Problem ___ in der Sitzung zur Sprache. (was raised)", q_fr: "Das Problem ___ in der Sitzung zur Sprache. (a été abordé)", o: ["kam", "brachte", "stellte"], a: 0, ex: "zur Sprache kommen = to be raised.", ex_fr: "zur Sprache kommen = être abordé." },
      { q: "“to accept a drawback” =", q_fr: "« accepter un inconvénient » =", o: ["etwas in Kauf nehmen", "etwas in Anspruch nehmen", "etwas zur Sprache bringen"], a: 0, ex: "in Kauf nehmen.", ex_fr: "in Kauf nehmen." }
    ]
  },
  {
    id: 92, level: "B2", icon: "link-2",
    title: "Alles, was ich weiß: relative clauses with was, wo(r)- and wer", title_fr: "Alles, was ich weiß : les relatives avec was, wo(r)- et wer",
    subtitle: "When the relative pronoun isn't der, die or das.", subtitle_fr: "Quand le pronom relatif n'est pas der, die ou das.",
    body: `
<h2>was</h2>
<p>After <s-de>alles, nichts, etwas, vieles, das</s-de>, after a superlative used as a noun, and to refer to a whole clause, use <s-de>was</s-de>:</p>
<p><s-de>Das ist alles, was ich weiß.</s-de> · <s-de>Das Beste, was du tun kannst, ist üben.</s-de> · <s-de>Sie hat die Prüfung bestanden, was mich sehr freut.</s-de></p>
<h2>wo(r) + preposition</h2>
<p>If the verb needs a preposition, <s-de>was</s-de> becomes <s-de>wo-</s-de> + preposition (<s-de>wor-</s-de> before a vowel): <s-de>Das ist etwas, worüber ich nachdenken muss.</s-de> · <s-de>Sie hat bestanden, worauf sie sehr stolz ist.</s-de></p>
<h2>wo for places and times</h2>
<p><s-de>die Stadt, wo ich studiere</s-de> (= <s-de>in der</s-de>) · <s-de>in dem Moment, wo das Telefon klingelte</s-de> (= <s-de>als</s-de>; more colloquial).</p>
<h2>wer … (der)</h2>
<p><s-de>wer</s-de> means "whoever, anyone who": <s-de>Wer viel liest, (der) schreibt besser.</s-de> The proverb: <s-de>Wer nicht fragt, bleibt dumm.</s-de> If the second part needs another case, the pronoun changes: <s-de>Wer Hilfe braucht, dem helfen wir.</s-de></p>
<div class="tip">A useful check: if the relative refers to a <b>noun</b>, use <s-de>der / die / das</s-de>: <s-de>das Buch, das ich lese</s-de>. If it refers to <s-de>alles, nichts, etwas</s-de> or to a whole idea, use <s-de>was</s-de>: <s-de>alles, was ich lese</s-de>.</div>
`,
    body_fr: `
<h2>was</h2>
<p>Après <s-de>alles, nichts, etwas, vieles, das</s-de>, après un superlatif employé comme nom, et pour reprendre toute une proposition, on emploie <s-de>was</s-de> :</p>
<p><s-de>Das ist alles, was ich weiß.</s-de> (C'est tout ce que je sais.) · <s-de>Das Beste, was du tun kannst, ist üben.</s-de> · <s-de>Sie hat die Prüfung bestanden, was mich sehr freut.</s-de> (… ce qui me fait très plaisir.)</p>
<h2>wo(r) + préposition</h2>
<p>Si le verbe demande une préposition, <s-de>was</s-de> devient <s-de>wo-</s-de> + préposition (<s-de>wor-</s-de> devant une voyelle) : <s-de>Das ist etwas, worüber ich nachdenken muss.</s-de> (… à quoi je dois réfléchir.) · <s-de>Sie hat bestanden, worauf sie sehr stolz ist.</s-de></p>
<h2>wo pour les lieux et les moments</h2>
<p><s-de>die Stadt, wo ich studiere</s-de> (= <s-de>in der</s-de>) · <s-de>in dem Moment, wo das Telefon klingelte</s-de> (= <s-de>als</s-de> ; plus familier). Comme le « où » français, qui sert aussi pour le temps.</p>
<h2>wer … (der)</h2>
<p><s-de>wer</s-de> veut dire « celui qui, quiconque » : <s-de>Wer viel liest, (der) schreibt besser.</s-de> Le proverbe : <s-de>Wer nicht fragt, bleibt dumm.</s-de> Si la seconde partie demande un autre cas, le pronom change : <s-de>Wer Hilfe braucht, dem helfen wir.</s-de></p>
<div class="tip">Un test pratique : si la relative reprend un <b>nom</b>, on prend <s-de>der / die / das</s-de> : <s-de>das Buch, das ich lese</s-de>. Si elle reprend <s-de>alles, nichts, etwas</s-de> ou toute une idée, on prend <s-de>was</s-de> : <s-de>alles, was ich lese</s-de>.</div>
`,
    examples: [
      ["Das ist alles, was ich über das Thema weiß.", "That's all I know about the subject.", "C'est tout ce que je sais sur le sujet."],
      ["Das Beste, was du vor einer Prüfung tun kannst, ist gut schlafen.", "The best thing you can do before an exam is sleep well.", "La meilleure chose à faire avant un examen, c'est bien dormir."],
      ["Er hat ein Stipendium bekommen, was seine Eltern sehr freut.", "He got a scholarship, which makes his parents very happy.", "Il a obtenu une bourse, ce qui réjouit beaucoup ses parents."],
      ["Es gibt vieles, worüber wir noch sprechen müssen.", "There's a lot we still need to talk about.", "Il y a beaucoup de choses dont nous devons encore parler."],
      ["Leipzig ist die Stadt, wo ich studiert habe.", "Leipzig is the city where I studied.", "Leipzig est la ville où j'ai fait mes études."],
      ["Wer regelmäßig wiederholt, vergisst weniger.", "Anyone who revises regularly forgets less.", "Qui révise régulièrement oublie moins."],
      ["Wer Fragen hat, dem helfe ich gern.", "I'm happy to help anyone who has questions.", "J'aide volontiers quiconque a des questions."]
    ],
    quiz: [
      { q: "Das ist alles, ___ ich weiß.", q_fr: "Das ist alles, ___ ich weiß.", o: ["was", "das", "wo"], a: 0, ex: "After alles: was.", ex_fr: "Après alles : was." },
      { q: "Sie hat bestanden, ___ sie sich sehr freut. (sich freuen über)", q_fr: "Sie hat bestanden, ___ sie sich sehr freut. (sich freuen über)", o: ["worüber", "was", "über das"], a: 0, ex: "A whole clause + preposition: wo(r) + preposition.", ex_fr: "Toute une proposition + préposition : wo(r) + préposition." },
      { q: "___ viel liest, schreibt besser.", q_fr: "___ viel liest, schreibt besser.", o: ["Wer", "Der", "Was"], a: 0, ex: "wer = whoever, anyone who.", ex_fr: "wer = celui qui, quiconque." },
      { q: "das Buch, ___ ich gerade lese", q_fr: "das Buch, ___ ich gerade lese", o: ["das", "was", "wo"], a: 0, ex: "It refers to a noun: das.", ex_fr: "Il reprend un nom : das." },
      { q: "Wer Hilfe braucht, ___ helfen wir.", q_fr: "Wer Hilfe braucht, ___ helfen wir.", o: ["dem", "der", "den"], a: 0, ex: "helfen + dative: dem.", ex_fr: "helfen + datif : dem." }
    ]
  },
  {
    id: 93, level: "B2", kind: "functional", icon: "mail",
    title: "Everyday German: emails to lecturers and office hours", title_fr: "L'allemand de tous les jours : écrire à un enseignant et aller à sa permanence",
    subtitle: "Address a professor correctly, ask for an extension and prepare your questions.", subtitle_fr: "S'adresser correctement à un professeur, demander un délai et préparer ses questions.",
    body: `
<h2>The right greeting</h2>
<p><s-de>Sehr geehrte Frau Professorin Lang,</s-de> / <s-de>Sehr geehrter Herr Professor Brandl,</s-de> · with a doctorate: <s-de>Sehr geehrte Frau Dr. Weber,</s-de> · if you don't know the title: <s-de>Sehr geehrte Frau Lang,</s-de> is fine. At university, you use <s-de>Sie</s-de> unless your lecturer offers <s-de>du</s-de>.</p>
<h2>Useful phrases</h2>
<table>
<tr><th>To…</th><th>German</th></tr>
<tr><td>introduce yourself</td><td><s-de>Ich besuche Ihr Seminar „…“ (dienstags, 10 Uhr).</s-de></td></tr>
<tr><td>ask for an extension</td><td><s-de>Ich möchte Sie bitten, die Abgabefrist für meine Hausarbeit um eine Woche zu verlängern.</s-de></td></tr>
<tr><td>give a reason</td><td><s-de>Der Grund dafür ist, dass…</s-de></td></tr>
<tr><td>ask for a meeting</td><td><s-de>Ich würde gern in Ihre Sprechstunde kommen, um … zu besprechen.</s-de></td></tr>
<tr><td>in the meeting</td><td><s-de>Ich hätte eine Frage zu…</s-de> · <s-de>Wäre es möglich, das Thema etwas einzugrenzen?</s-de></td></tr>
</table>
<div class="tip">Keep it short and precise: name the course, your question and, if needed, the reason. Before office hours, prepare two or three concrete questions; lecturers appreciate students who come with a plan rather than with "I don't know what to write".</div>
`,
    body_fr: `
<h2>Le bon appel</h2>
<p><s-de>Sehr geehrte Frau Professorin Lang,</s-de> / <s-de>Sehr geehrter Herr Professor Brandl,</s-de> · avec un doctorat : <s-de>Sehr geehrte Frau Dr. Weber,</s-de> · si tu ne connais pas le titre : <s-de>Sehr geehrte Frau Lang,</s-de> convient. À l'université, on vouvoie (<s-de>Sie</s-de>), sauf si l'enseignant propose le <s-de>du</s-de>. En Allemagne, on mentionne volontiers les titres universitaires, davantage qu'en France.</p>
<h2>Les formules utiles</h2>
<table>
<tr><th>Pour…</th><th>En allemand</th></tr>
<tr><td>te présenter</td><td><s-de>Ich besuche Ihr Seminar „…“ (dienstags, 10 Uhr).</s-de></td></tr>
<tr><td>demander un délai</td><td><s-de>Ich möchte Sie bitten, die Abgabefrist für meine Hausarbeit um eine Woche zu verlängern.</s-de></td></tr>
<tr><td>donner une raison</td><td><s-de>Der Grund dafür ist, dass…</s-de></td></tr>
<tr><td>demander un rendez-vous</td><td><s-de>Ich würde gern in Ihre Sprechstunde kommen, um … zu besprechen.</s-de></td></tr>
<tr><td>pendant l'entretien</td><td><s-de>Ich hätte eine Frage zu…</s-de> · <s-de>Wäre es möglich, das Thema etwas einzugrenzen?</s-de></td></tr>
</table>
<div class="tip">Va droit au but : le nom du cours, ta question et, si besoin, la raison. Avant la permanence, prépare deux ou trois questions concrètes ; les enseignants apprécient les étudiants qui arrivent avec un plan plutôt qu'avec un « je ne sais pas quoi écrire ».</div>
`,
    examples: [
      ["Sehr geehrte Frau Professorin Lang, ich besuche Ihr Seminar zur Literatur der Romantik.", "Dear Professor Lang, I'm attending your seminar on Romantic literature.", "Madame la Professeure, je suis votre séminaire sur la littérature romantique."],
      ["Ich möchte Sie bitten, die Abgabefrist für meine Hausarbeit um eine Woche zu verlängern.", "I'd like to ask you to extend the deadline for my term paper by one week.", "Je souhaiterais vous demander de prolonger d'une semaine le délai de remise de mon devoir."],
      ["Der Grund dafür ist, dass ich zwei Wochen krank war.", "The reason is that I was ill for two weeks.", "La raison en est que j'ai été malade pendant deux semaines."],
      ["Ich würde gern in Ihre Sprechstunde kommen, um mein Thema zu besprechen.", "I'd like to come to your office hours to discuss my topic.", "J'aimerais venir à votre permanence pour discuter de mon sujet."],
      ["Ich hätte eine Frage zur Gliederung meiner Arbeit.", "I have a question about the structure of my paper.", "J'aurais une question sur le plan de mon travail."],
      ["Wäre es möglich, das Thema etwas einzugrenzen?", "Would it be possible to narrow the topic down a little?", "Serait-il possible de délimiter un peu le sujet ?"],
      ["Vielen Dank für Ihre Zeit und Ihre hilfreichen Hinweise.", "Thank you very much for your time and your helpful advice.", "Merci beaucoup pour votre temps et vos conseils précieux."]
    ],
    quiz: [
      { q: "Writing to a female professor:", q_fr: "Pour écrire à une professeure :", o: ["Sehr geehrte Frau Professorin Lang,", "Hallo Frau Lang!", "Liebe Professorin,"], a: 0, ex: "Formal greeting with the title.", ex_fr: "Appel formel avec le titre." },
      { q: "“to extend the deadline by a week”", q_fr: "« prolonger le délai d'une semaine »", o: ["die Frist um eine Woche verlängern", "die Frist für eine Woche verlängern", "die Frist mit einer Woche verlangen"], a: 0, ex: "um + amount of change.", ex_fr: "um + valeur du changement." },
      { q: "“I'd like to come to your office hours.”", q_fr: "« J'aimerais venir à votre permanence. »", o: ["Ich würde gern in Ihre Sprechstunde kommen.", "Ich würde gern in Ihrer Sprechstunde kommen.", "Ich würde gern zu Ihre Sprechstunde kommen."], a: 0, ex: "in + accusative (direction): in Ihre Sprechstunde.", ex_fr: "in + accusatif (direction) : in Ihre Sprechstunde." },
      { q: "“The reason is that…”", q_fr: "« La raison en est que… »", o: ["Der Grund dafür ist, dass…", "Der Grund davon ist, weil…", "Der Grund ist dafür, dass…"], a: 0, ex: "Der Grund dafür ist, dass…", ex_fr: "Der Grund dafür ist, dass…" },
      { q: "At a German university, you usually address lecturers…", q_fr: "Dans une université allemande, on s'adresse en général aux enseignants…", o: ["with Sie, unless they offer du", "always with du", "by their first name"], o_fr: ["en les vouvoyant, sauf s'ils proposent le du", "toujours en les tutoyant", "par leur prénom"], a: 0, ex: "Sie, unless the lecturer offers du.", ex_fr: "Sie, sauf si l'enseignant propose le du." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    91: {
      gap: [["Bis Ende Juni muss ich eine Entscheidung ___.", "treffen"], ["Ein Studium im Ausland kommt für mich in ___.", "Frage"], ["Die Universität stellt den Studierenden Computer zur ___.", "Verfügung"], ["Für die gute Lage nehme ich die höhere Miete in ___.", "Kauf", "I accept the drawback", "j'accepte l'inconvénient"]],
      fix: [["Ich muss bald eine Entscheidung machen.", "Ich muss bald eine Entscheidung treffen.", "eine Entscheidung treffen.", "eine Entscheidung treffen."], ["Das kommt für mich nicht in die Frage.", "Das kommt für mich nicht in Frage.", "in Frage kommen: no article.", "in Frage kommen : sans article."]],
      task: ["Rewrite with noun-verb combinations: I must decide soon; this job is an option for me; the library provides laptops; she expressed her criticism clearly.", "Réécris avec des tournures verbo-nominales : je dois décider bientôt ; ce poste est envisageable pour moi ; la bibliothèque met des ordinateurs portables à disposition ; elle a exprimé clairement ses critiques.", "Ich muss bald eine Entscheidung treffen. Diese Stelle kommt für mich in Frage. Die Bibliothek stellt Laptops zur Verfügung. Sie hat ihre Kritik deutlich zum Ausdruck gebracht."]
    },
    92: {
      gap: [["Das ist alles, ___ ich weiß.", "was"], ["Es gibt vieles, ___ wir noch sprechen müssen. (sprechen über)", "worüber"], ["___ regelmäßig wiederholt, vergisst weniger.", "Wer", "whoever", "quiconque"], ["Leipzig ist die Stadt, ___ ich studiert habe.", "wo|in der"]],
      fix: [["Das Beste, das du tun kannst, ist üben.", "Das Beste, was du tun kannst, ist üben.", "After a superlative used as a noun: was.", "Après un superlatif employé comme nom : was."], ["Sie hat bestanden, über was sie sich freut.", "Sie hat bestanden, worüber sie sich freut.", "Preposition + was → wo(r) + preposition.", "Préposition + was → wo(r) + préposition."]],
      task: ["Write four sentences about learning German with alles, was…; …, worüber…; wer…; and das Beste, was….", "Écris quatre phrases sur l'apprentissage de l'allemand avec alles, was… ; …, worüber… ; wer… ; et das Beste, was….", "Alles, was ich auf Deutsch lese, hilft mir. Ich habe letzte Woche einen Film ohne Untertitel verstanden, worüber ich mich sehr gefreut habe. Wer jeden Tag ein bisschen übt, kommt schneller voran. Das Beste, was man tun kann, ist mit Muttersprachlern zu sprechen."]
    },
    93: {
      gap: [["Sehr geehrte Frau ___ Lang,", "Professorin|Prof.|Dr."], ["Ich möchte Sie bitten, die Abgabefrist um eine Woche zu ___.", "verlängern"], ["Ich würde gern in Ihre ___ kommen.", "Sprechstunde", "office hours", "permanence"], ["Der Grund ___ ist, dass ich krank war.", "dafür"]],
      fix: [["Hallo Frau Professorin Lang, kann ich die Hausarbeit später abgeben?", "Sehr geehrte Frau Professorin Lang, wäre es möglich, die Hausarbeit später abzugeben?", "Formal greeting and a polite question.", "Appel formel et question polie."], ["Ich möchte Sie bitten, die Frist verlängern.", "Ich möchte Sie bitten, die Frist zu verlängern.", "bitten, … zu + infinitive.", "bitten, … zu + infinitif."]],
      task: ["Write a short email (about 60 words) to Dr. Weber: you attend her seminar on Tuesdays, you'd like to come to her office hours to discuss the topic of your term paper, and you ask when it would be possible.", "Écris un court e-mail (environ 60 mots) à Dr. Weber : tu suis son séminaire du mardi, tu aimerais venir à sa permanence pour discuter du sujet de ton devoir, et tu demandes quand ce serait possible.", "Sehr geehrte Frau Dr. Weber, ich besuche Ihr Seminar am Dienstag. Ich würde gern in Ihre Sprechstunde kommen, um das Thema meiner Hausarbeit zu besprechen, denn ich bin mir bei der Fragestellung noch unsicher. Könnten Sie mir mitteilen, wann das möglich wäre? Vielen Dank im Voraus. Mit freundlichen Grüßen, Robin Keller"]
    }
  });

  W.ROLEPLAYS.push(
  { id: "studienberatung", lesson: 91, level: "B2", icon: "graduation-cap", partner: "Frau Neumann", role: "a study adviser", role_fr: "une conseillère d'orientation",
    title: "At the student advice centre", title_fr: "Au service d'orientation",
    setting: "You'd like to study in Germany and go to the university's student advice centre. You talk to the adviser, Frau Neumann.", setting_fr: "Tu aimerais étudier en Allemagne et tu te rends au service d'orientation de l'université. Tu parles avec la conseillère, Frau Neumann.",
    turns: [
      { p: "Guten Tag! Wie kann ich Ihnen helfen?", en: "Hello! How can I help you?", fr: "Bonjour ! Que puis-je faire pour vous ?" },
      { y: ["Ich möchte ab Oktober hier studieren und muss bald eine Entscheidung treffen.", "Ich möchte ab Oktober hier studieren und muss bald eine Entscheidung machen.", "Ich möchte ab Oktober hier studieren und muss bald eine Entscheidung treffen sein."], en: "I'd like to study here from October and have to make a decision soon.", fr: "J'aimerais étudier ici à partir d'octobre et je dois bientôt prendre une décision.", why: "eine Entscheidung treffen.", why_fr: "eine Entscheidung treffen." },
      { p: "Gut. Was interessiert Sie denn?", en: "Good. What are you interested in?", fr: "Bien. Qu'est-ce qui vous intéresse ?" },
      { y: ["Vor allem Umweltwissenschaften. Welche Studiengänge kommen für mich in Frage?", "Vor allem Umweltwissenschaften. Welche Studiengänge kommen für mich in die Frage?", "Vor allem Umweltwissenschaften. Welche Studiengänge stehen für mich in Frage?"], en: "Mainly environmental sciences. Which degree programmes are options for me?", fr: "Surtout les sciences de l'environnement. Quels cursus peuvent me convenir ?", why: "in Frage kommen (no article).", why_fr: "in Frage kommen (sans article)." },
      { p: "Da gibt es zwei. Der eine ist hier in der Stadt, der andere an unserem Campus auf dem Land, eine Stunde entfernt.", en: "There are two. One is here in town, the other at our campus in the countryside, an hour away.", fr: "Il y en a deux. L'un est ici en ville, l'autre sur notre campus à la campagne, à une heure d'ici." },
      { y: ["Wenn das Programm besser passt, nehme ich die lange Fahrt gern in Kauf.", "Wenn das Programm besser passt, nehme ich die lange Fahrt gern in Anspruch.", "Wenn das Programm besser passt, ich nehme die lange Fahrt gern in Kauf."], en: "If the programme suits me better, I'm happy to put up with the long journey.", fr: "Si le programme me convient mieux, j'accepte volontiers le long trajet.", why: "in Kauf nehmen = accept a drawback; verb first after the wenn-clause.", why_fr: "in Kauf nehmen = accepter un inconvénient ; verbe en tête après la subordonnée." },
      { p: "Gibt es sonst noch etwas, was Sie wissen möchten?", en: "Is there anything else you'd like to know?", fr: "Y a-t-il autre chose que vous aimeriez savoir ?" },
      { y: ["Ja. Alles, was mit der Zulassung zu tun hat, ist mir noch unklar.", "Ja. Alles, das mit der Zulassung zu tun hat, ist mir noch unklar.", "Ja. Alles, was mit der Zulassung zu tun hat, mir ist noch unklar."], en: "Yes. Everything to do with admission is still unclear to me.", fr: "Oui. Tout ce qui concerne l'admission n'est pas encore clair pour moi.", why: "After alles: was.", why_fr: "Après alles : was." },
      { p: "Dafür gibt es eine Infoveranstaltung am Donnerstag. Die Unterlagen stellen wir Ihnen auch online zur Verfügung.", en: "There's an information session on Thursday. We also provide the documents online.", fr: "Il y a une réunion d'information jeudi. Nous mettons aussi les documents à votre disposition en ligne." },
      { y: ["Prima. Dann nehme ich Ihr Angebot gern in Anspruch. Vielen Dank!", "Prima. Dann nehme ich Ihr Angebot gern in Kauf. Vielen Dank!", "Prima. Dann nehme ich Ihr Angebot gern zum Anspruch. Vielen Dank!"], en: "Great. Then I'll gladly make use of your offer. Thank you!", fr: "Parfait. Alors je profiterai volontiers de votre offre. Merci beaucoup !", why: "in Anspruch nehmen = to make use of.", why_fr: "in Anspruch nehmen = recourir à, profiter de." }
    ] },
  { id: "sprechstunde", lesson: 93, level: "B2", icon: "user-round", partner: "Frau Professorin Lang", role: "your professor", role_fr: "ta professeure",
    title: "In office hours", title_fr: "À la permanence",
    setting: "You've been ill and are behind with your term paper. You go to your professor's office hours to ask for an extension and some advice.", setting_fr: "Tu as été malade et tu as pris du retard sur ton devoir. Tu vas à la permanence de ta professeure pour demander un délai et quelques conseils.",
    turns: [
      { p: "Kommen Sie rein. Was führt Sie zu mir?", en: "Come in. What brings you to me?", fr: "Entrez. Qu'est-ce qui vous amène ?" },
      { y: ["Ich besuche Ihr Seminar zur Romantik und hätte eine Bitte bezüglich meiner Hausarbeit.", "Ich besuche Ihr Seminar zur Romantik und hätte eine Bitte bezüglich meine Hausarbeit.", "Ich besuche Ihr Seminar zur Romantik und habe eine Bitte bezüglich meiner Hausarbeit gehabt."], en: "I'm in your seminar on Romanticism and I have a request about my term paper.", fr: "Je suis votre séminaire sur le romantisme et j'aurais une demande concernant mon devoir.", why: "bezüglich + genitive; hätte for politeness.", why_fr: "bezüglich + génitif ; hätte par politesse." },
      { p: "Ja, bitte?", en: "Yes?", fr: "Oui ?" },
      { y: ["Ich war zwei Wochen krank. Wäre es möglich, die Abgabefrist um eine Woche zu verlängern?", "Ich war zwei Wochen krank. Wäre es möglich, die Abgabefrist um eine Woche verlängern?", "Ich war zwei Wochen krank. Wäre es möglich, die Abgabefrist für eine Woche zu verlängern?"], en: "I was ill for two weeks. Would it be possible to extend the deadline by a week?", fr: "J'ai été malade pendant deux semaines. Serait-il possible de prolonger le délai d'une semaine ?", why: "Wäre es möglich, … zu + infinitive; um + amount.", why_fr: "Wäre es möglich, … zu + infinitif ; um + valeur." },
      { p: "Das lässt sich machen, wenn Sie mir eine Krankmeldung schicken. Wie weit sind Sie denn?", en: "That can be arranged if you send me a sick note. How far have you got?", fr: "C'est possible si vous m'envoyez un certificat médical. Où en êtes-vous ?" },
      { y: ["Ich habe schon viel gelesen, aber das Thema ist zu breit, was mir Sorgen macht.", "Ich habe schon viel gelesen, aber das Thema ist zu breit, das mir Sorgen macht.", "Ich habe schon viel gelesen, aber das Thema ist zu breit, was macht mir Sorgen."], en: "I've already read a lot, but the topic is too broad, which worries me.", fr: "J'ai déjà beaucoup lu, mais le sujet est trop large, ce qui m'inquiète.", why: "was refers to the whole clause; verb at the end.", why_fr: "was reprend toute la proposition ; verbe à la fin." },
      { p: "Dann sollten Sie es eingrenzen. Worüber möchten Sie denn am liebsten schreiben?", en: "Then you should narrow it down. What would you most like to write about?", fr: "Alors il faudrait le délimiter. Sur quoi aimeriez-vous écrire le plus ?" },
      { y: ["Am meisten interessiert mich das Motiv der Nacht, worüber ich schon einiges gefunden habe.", "Am meisten interessiert mich das Motiv der Nacht, über was ich schon einiges gefunden habe.", "Am meisten interessiert mich das Motiv der Nacht, worüber habe ich schon einiges gefunden."], en: "What interests me most is the motif of night, on which I've already found quite a lot.", fr: "Ce qui m'intéresse le plus, c'est le motif de la nuit, sur lequel j'ai déjà trouvé pas mal de choses.", why: "wo(r) + preposition; verb at the end.", why_fr: "wo(r) + préposition ; verbe à la fin." },
      { p: "Sehr gut, das ist ein klares Thema. Schicken Sie mir bis Freitag eine kurze Gliederung.", en: "Very good, that's a clear topic. Send me a short outline by Friday.", fr: "Très bien, c'est un sujet clair. Envoyez-moi un plan succinct d'ici vendredi." },
      { y: ["Das mache ich. Vielen Dank für Ihre Zeit und Ihre hilfreichen Hinweise.", "Das mache ich. Vielen Dank für Ihre Zeit und Ihren hilfreichen Hinweise.", "Das mache ich. Vielen Dank für Ihre Zeit und Ihre hilfreiche Hinweisen."], en: "I'll do that. Thank you very much for your time and your helpful advice.", fr: "Je le ferai. Merci beaucoup pour votre temps et vos conseils précieux.", why: "für + accusative plural: Ihre hilfreichen Hinweise.", why_fr: "für + accusatif pluriel : Ihre hilfreichen Hinweise." }
    ] }
  );

  W.READINGS.push({
    id: "humboldtuni", level: "B2", icon: "book-open", title: "Humboldt und die Idee der Universität", genre: "Explainer",
    intro: "Why do German universities combine research and teaching, and why is studying there mostly free? A short history.",
    intro_fr: "Pourquoi les universités allemandes associent-elles recherche et enseignement, et pourquoi y étudier est-il le plus souvent gratuit ? Petite histoire.",
    paragraphs: [
      { de: "Im Jahr 1810 wurde in Berlin eine neue Universität gegründet. Einer ihrer wichtigsten Wegbereiter war der Gelehrte und Politiker Wilhelm von Humboldt. Was ihm vorschwebte, war eine Hochschule, an der Professoren nicht nur fertiges Wissen weitergeben, sondern selbst forschen und ihre Studierenden an dieser Forschung beteiligen.", en: "In 1810, a new university was founded in Berlin. One of its most important pioneers was the scholar and politician Wilhelm von Humboldt. What he had in mind was a university where professors don't just pass on ready-made knowledge, but do research themselves and involve their students in it.", fr: "En 1810, une nouvelle université est fondée à Berlin. L'un de ses principaux initiateurs est le savant et homme politique Wilhelm von Humboldt. Ce qu'il imaginait, c'était un établissement où les professeurs ne se contentent pas de transmettre un savoir tout fait, mais font eux-mêmes de la recherche et y associent leurs étudiants." },
      { de: "Daraus entstand ein Ideal, das bis heute zitiert wird: die Einheit von Forschung und Lehre. Dazu gehörte auch die Freiheit von Lehre und Studium. Wer studierte, sollte selbstständig denken lernen, statt nur Prüfungsstoff auswendig zu lernen.", en: "This gave rise to an ideal that is still quoted today: the unity of research and teaching. It also included the freedom to teach and to study. Anyone who studied was to learn to think independently, instead of just memorising material for exams.", fr: "Il en est né un idéal encore cité aujourd'hui : l'unité de la recherche et de l'enseignement. Il incluait aussi la liberté d'enseigner et d'étudier. Celui qui étudiait devait apprendre à penser par lui-même, au lieu de seulement apprendre par cœur la matière des examens." },
      { de: "Seit 1949 trägt die Universität den Namen Humboldt-Universität zu Berlin, und zwar nach Wilhelm und seinem Bruder Alexander, dem berühmten Naturforscher. Das Humboldt'sche Ideal hat Universitäten in vielen Ländern beeinflusst, auch wenn Kritiker heute bemängeln, dass Massenvorlesungen und straffe Studienpläne wenig Raum dafür lassen.", en: "Since 1949, the university has borne the name Humboldt-Universität zu Berlin, after Wilhelm and his brother Alexander, the famous naturalist. The Humboldtian ideal has influenced universities in many countries, even if critics today complain that mass lectures and tight study schedules leave little room for it.", fr: "Depuis 1949, l'université porte le nom de Humboldt-Universität zu Berlin, d'après Wilhelm et son frère Alexander, le célèbre naturaliste. L'idéal humboldtien a influencé les universités de nombreux pays, même si ses critiques déplorent aujourd'hui que les cours en amphithéâtre bondé et les programmes serrés lui laissent peu de place." },
      { de: "Eine Besonderheit, worüber sich viele ausländische Studierende wundern: In den meisten Bundesländern zahlt man an staatlichen Hochschulen keine Studiengebühren, sondern nur einen Semesterbeitrag. Ausnahmen gibt es allerdings, etwa für Studierende aus Ländern außerhalb der EU in Baden-Württemberg seit 2017.", en: "One special feature that surprises many international students: in most federal states, there are no tuition fees at public universities, only a semester fee. There are exceptions, though, for example for students from outside the EU in Baden-Württemberg since 2017.", fr: "Une particularité qui étonne beaucoup d'étudiants étrangers : dans la plupart des Länder, on ne paie pas de frais de scolarité dans les établissements publics, seulement une contribution semestrielle. Il existe toutefois des exceptions, par exemple pour les étudiants hors UE dans le Bade-Wurtemberg depuis 2017." }
    ],
    glossary: { "Wegbereiter": ["pioneer, forerunner", "précurseur, initiateur"], "Gelehrte": ["scholar", "savant, érudit"], "vorschwebte": ["(vorschweben) had in mind", "(vorschweben) avait en tête"], "fertiges": ["ready-made", "tout fait"], "weitergeben": ["to pass on", "transmettre"], "beteiligen": ["to involve", "associer, faire participer"], "Ideal": ["ideal", "idéal"], "zitiert": ["quoted", "cité"], "Einheit": ["unity", "unité"], "Lehre": ["teaching", "enseignement"], "Freiheit": ["freedom", "liberté"], "selbstständig": ["independently", "de façon autonome"], "Prüfungsstoff": ["exam material", "matière d'examen"], "Naturforscher": ["naturalist", "naturaliste"], "bemängeln": ["to criticise, to complain", "déplorer, critiquer"], "Massenvorlesungen": ["mass lectures", "cours magistraux bondés"], "straffe": ["tight, strict", "serré, strict"], "Studienpläne": ["study schedules, curricula", "programmes d'études"], "Raum": ["room, space", "place, espace"], "Besonderheit": ["special feature", "particularité"], "wundern": ["(sich wundern) to be surprised", "(sich wundern) s'étonner"], "staatlichen": ["public, state", "public, d'État"] },
    questions: [
      { q: "Wann wurde die Universität in Berlin gegründet?", o: ["1810", "1949", "2017"], a: 0 },
      { q: "Was war Humboldts Idee?", o: ["Professoren sollten forschen und ihre Studierenden daran beteiligen.", "Studierende sollten nur auswendig lernen.", "Universitäten sollten Geld verdienen."], a: 0 },
      { q: "Nach wem ist die Universität seit 1949 benannt?", o: ["Nach Wilhelm und Alexander von Humboldt", "Nur nach Alexander von Humboldt", "Nach der Stadt Berlin"], a: 0 },
      { q: "Was kritisieren manche heute?", o: ["Massenvorlesungen und straffe Studienpläne lassen wenig Raum für das Ideal.", "Es gibt zu viel Forschung.", "Die Universität ist zu klein."], a: 0 },
      { q: "Was zahlt man in den meisten Bundesländern an staatlichen Hochschulen?", o: ["Nur einen Semesterbeitrag", "Hohe Studiengebühren", "Gar nichts, auch keinen Semesterbeitrag"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-b2-7", unit: "b2-7", level: "B2", icon: "radio",
    title: "Das erste Semester", title_fr: "Le premier semestre",
    context: "A campus radio programme. Two students, Mia and Felix, talk about their first semester at university.", context_fr: "Une émission de la radio du campus. Deux étudiants, Mia et Felix, parlent de leur premier semestre à l'université.",
    words: [["der Hörsaal, Hörsäle", "the lecture hall", "l'amphithéâtre"], ["die Lerngruppe, -n", "the study group", "le groupe de travail"], ["sich zurechtfinden", "to find one's way around", "se repérer, s'y retrouver"], ["der Stundenplan, ¨-e", "the timetable", "l'emploi du temps"], ["unterschätzen", "to underestimate", "sous-estimer"]],
    lines: [["Moderatorin", "Mia, Felix, ihr habt gerade euer erstes Semester hinter euch. Was hat euch am meisten überrascht?", "de-DE"], ["Mia", "Was mich am meisten überrascht hat, war die Freiheit. Niemand kontrolliert, ob man zur Vorlesung kommt.", "de-DE"], ["Felix", "Genau. Und wer nicht regelmäßig lernt, merkt das spätestens bei den Klausuren. Das habe ich am Anfang unterschätzt.", "de-DE"], ["Moderatorin", "Wie habt ihr euch am Anfang zurechtgefunden?", "de-DE"], ["Mia", "In der ersten Woche gab es eine Einführung, wo man den Campus und die Bibliothek kennenlernen konnte. Das kam für mich genau richtig.", "de-DE"], ["Felix", "Am meisten geholfen hat mir unsere Lerngruppe. Alles, was ich allein nicht verstanden habe, haben wir zusammen besprochen.", "de-DE"], ["Moderatorin", "Und euer Tipp für die Neuen?", "de-DE"], ["Mia", "Geht in die Sprechstunden! Die Dozenten stehen dafür zur Verfügung, und viele Probleme lassen sich in zehn Minuten klären.", "de-DE"]],
    gist: ["Worüber sprechen Mia und Felix?", ["Über ihre Erfahrungen im ersten Semester", "Über ihre Ferien", "Über einen neuen Job"]],
    detail: [["Was hat Mia am meisten überrascht?", ["Die Freiheit", "Die Größe des Campus", "Das Essen in der Mensa"]], ["Was hat Felix am Anfang unterschätzt?", ["Dass man regelmäßig lernen muss", "Die Kosten", "Den langen Weg zur Uni"]], ["Was hat Felix am meisten geholfen?", ["Seine Lerngruppe", "Ein Stipendium", "Ein Online-Kurs"]], ["Welchen Tipp gibt Mia?", ["In die Sprechstunden zu gehen", "Weniger zu lernen", "Keine Vorlesungen zu besuchen"]]],
    decode: ["Was mich am meisten überrascht hat, war die Freiheit.", "Alles, was ich allein nicht verstanden habe, haben wir zusammen besprochen."],
    tip: "Sentences that start with was or wer (Was mich überrascht hat, … / Wer nicht lernt, …) put the important information at the end: keep listening until the second verb.", tip_fr: "Les phrases qui commencent par was ou wer (Was mich überrascht hat, … / Wer nicht lernt, …) placent l'information importante à la fin : continue d'écouter jusqu'au second verbe."
  }]);

  W.PROMPTS.push({ id: "de-b2-7", level: "B2", q: "Sollte ein Studium für alle kostenlos sein? Nimm Stellung, nenne Argumente dafür und dagegen und beschreib die Situation in deinem Land.", en: "Should university be free for everyone? Take a position, give arguments for and against, and describe the situation in your country.", fr: "Les études supérieures devraient-elles être gratuites pour tous ? Prends position, donne des arguments pour et contre, et décris la situation dans ton pays.", time: 180,
    phrases: ["In meinem Land…", "Dafür spricht vor allem, dass…", "Wer…, der…", "Man muss allerdings in Kauf nehmen, dass…", "Für mich kommt nur… in Frage."],
    model: "In meinem Land kostet ein Studium an staatlichen Universitäten relativ wenig, an privaten Hochschulen dagegen sehr viel. Ich bin der Ansicht, dass ein Studium für alle kostenlos sein sollte. Dafür spricht vor allem die Chancengleichheit: Wer begabt ist, sollte studieren können, egal aus welcher Familie er kommt. Außerdem profitiert die ganze Gesellschaft von gut ausgebildeten Menschen. Man muss allerdings in Kauf nehmen, dass der Staat dafür viel Geld braucht, das über Steuern finanziert wird. Kritiker meinen auch, dass kostenlose Studienplätze nicht immer geschätzt werden. Trotzdem kommt für mich nur ein System in Frage, in dem die Herkunft nicht über die Bildung entscheidet." });

  W.WRITING_GUIDE["b2-7"] = { genre: "An opinion in an online forum (Goethe B2, writing part 1)", genre_fr: "Un avis sur un forum en ligne (Goethe B2, écrit partie 1)",
    plan: [["Report the opinion you are reacting to.", "Rapporte l'opinion à laquelle tu réagis."], ["Your position.", "Ta position."], ["A first argument with an example.", "Un premier argument avec un exemple."], ["The other side.", "L'autre point de vue."], ["A proposal and a conclusion.", "Une proposition et une conclusion."]],
    marks: [["schreibt, Noten seien", "reporting the opinion (Konjunktiv I)", "rapporter l'opinion (Konjunktiv I)"], ["Ich kann diesen Gedanken gut nachvollziehen", "your position", "ta position"], ["Wer nur für die Note lernt", "a relative clause with wer", "une relative avec wer"], ["was ich bei meiner jüngeren Schwester beobachte", "a relative clause with was", "une relative avec was"], ["Andererseits", "the other side", "l'autre point de vue"], ["Mein Vorschlag wäre deshalb", "a proposal", "une proposition"]] };

  /* Atelier de langue : champs allemands d'abord, puis anglais et français (voir localize.js). */
  W.LEXIS = W.LEXIS || {};
  W.LEXIS["b2-7"] = {
    colloc: [
      ["eine Prüfung ablegen", "to take an exam", "passer un examen", "Im Juni legt sie ihre letzte Prüfung ab.", "legt", ["stellt", "gibt"]],
      ["ein Referat halten", "to give a presentation", "faire un exposé", "Morgen muss ich ein Referat über Kafka halten.", "halten", ["geben", "führen"]],
      ["eine Frist verlängern", "to extend a deadline", "prolonger un délai", "Die Professorin hat die Frist um eine Woche verlängert.", "verlängert", ["verlangt", "gelängt"]],
      ["Kenntnisse erwerben", "to acquire knowledge", "acquérir des connaissances", "Im Praktikum erwirbt man wertvolle Kenntnisse.", "erwirbt", ["verdient", "kauft"]],
      ["sich Wissen aneignen", "to acquire knowledge", "s'approprier un savoir", "Sie hat sich das Wissen selbst angeeignet.", "angeeignet", ["angenommen", "angezogen"]],
      ["Wert legen auf", "to attach importance to", "attacher de l'importance à", "Unsere Schule legt viel Wert auf Fremdsprachen.", "legt", ["stellt", "setzt"]],
      ["einen Abschluss machen", "to get a qualification", "obtenir un diplôme", "Er hat seinen Abschluss in Wien gemacht.", "gemacht", ["getan", "gestellt"]],
      ["Nachhilfe geben", "to give private tutoring", "donner des cours particuliers", "Meine Schwester gibt Nachhilfe in Mathe.", "gibt", ["stellt", "hält"]],
      ["in Frage kommen", "to be an option", "entrer en ligne de compte", "Ein Studium im Ausland kommt für mich in Frage.", "kommt", ["geht", "steht"]],
      ["zum Ausdruck bringen", "to express", "exprimer", "Sie hat ihre Kritik deutlich zum Ausdruck gebracht.", "gebracht", ["gegeben", "gestellt"]]
    ],
    wf: [
      ["Die ___ für das Studium kam per Post. (ZULASSEN)", "Zulassung"],
      ["Sie ist musikalisch sehr ___. (BEGABUNG)", "begabt"],
      ["Die ___ von Kindern aus armen Familien muss besser werden. (FÖRDERN)", "Förderung"],
      ["Ihre ___ im Englischen sind beeindruckend. (KENNEN)", "Kenntnisse"],
      ["Das ___ Lernen gehört heute zum Berufsleben. (LEBEN)", "lebenslange"],
      ["Die ___ der Prüfung findet im Juli statt. (WIEDERHOLEN)", "Wiederholung"],
      ["Wer ___ lernt, kommt schneller voran. (DISZIPLIN)", "diszipliniert"],
      ["Die Frage kam für alle ___. (ERWARTEN)", "unerwartet"]
    ],
    kwt: [
      ["Wir müssen bald entscheiden.", "ENTSCHEIDUNG", "Wir müssen bald ___.", "eine Entscheidung treffen"],
      ["Ein Studium im Ausland ist für mich eine Möglichkeit.", "FRAGE", "Ein Studium im Ausland ___.", "kommt für mich in Frage"],
      ["Das ist alles. Mehr weiß ich nicht.", "WAS", "Das ist alles, ___.", "was ich weiß"],
      ["Sie hat bestanden. Darüber freut sie sich.", "WORÜBER", "Sie hat bestanden, ___.", "worüber sie sich freut"],
      ["Jemand, der viel liest, schreibt besser.", "WER", "___ schreibt besser.", "Wer viel liest|Wer viel liest,"],
      ["Man hat ihr ein Zimmer im Wohnheim gegeben.", "VERFÜGUNG", "Man hat ihr ein Zimmer im Wohnheim ___.", "zur Verfügung gestellt"]
    ],
    idioms: [
      ["jemandem auf die Sprünge helfen", "jemandem helfen, etwas zu verstehen oder sich zu erinnern", "to jog someone's memory", "mettre quelqu'un sur la voie", "Kannst du mir kurz auf die Sprünge helfen?", "auf die Sprünge"],
      ["büffeln", "intensiv lernen", "to cram, to swot", "bûcher", "Vor der Klausur habe ich nächtelang gebüffelt.", "gebüffelt"],
      ["etwas aus dem Effeff können", "etwas perfekt können", "to know something inside out", "connaître quelque chose sur le bout des doigts", "Die Grammatik kann sie aus dem Effeff.", "aus dem Effeff"],
      ["ein Brett vor dem Kopf haben", "etwas Einfaches nicht verstehen", "to be slow on the uptake", "avoir l'esprit bouché", "Heute habe ich echt ein Brett vor dem Kopf.", "ein Brett vor dem Kopf"],
      ["sich den Kopf zerbrechen", "lange über etwas nachdenken", "to rack one's brains", "se creuser la tête", "Ich zerbreche mir den Kopf über diese Aufgabe.", "zerbreche mir den Kopf"],
      ["den Nagel auf den Kopf treffen", "genau das Richtige sagen", "to hit the nail on the head", "mettre le doigt dessus", "Mit deiner Antwort hast du den Nagel auf den Kopf getroffen.", "den Nagel auf den Kopf"],
      ["Übung macht den Meister.", "Wer viel übt, wird gut.", "Practice makes perfect.", "C'est en forgeant qu'on devient forgeron.", "Keine Sorge, Übung macht den Meister!", "Übung macht den Meister"],
      ["durch eine Prüfung rasseln", "eine Prüfung nicht bestehen", "to flunk an exam", "se planter à un examen", "Er ist zum zweiten Mal durch die Prüfung gerasselt.", "durch die Prüfung gerasselt"]
    ]
  };

  W.COURSE.push({ id: "b2-7", level: "B2", icon: "graduation-cap", title: "Education and studying", title_fr: "Éducation et études",
    intro: "From school to university: in this unit, you'll learn the noun-verb combinations that fill formal German (eine Entscheidung treffen, in Frage kommen, zur Verfügung stellen), relative clauses with was, wo(r)- and wer (alles, was ich weiß; wer viel liest…), and how to write to a lecturer and make the most of office hours. You'll also discover the ideal behind German universities, born in Berlin in 1810.",
    intro_fr: "De l'école à l'université : dans cette unité, tu vas apprendre les tournures verbo-nominales de l'allemand soutenu (eine Entscheidung treffen, in Frage kommen, zur Verfügung stellen), les relatives avec was, wo(r)- et wer (alles, was ich weiß ; wer viel liest…), et la façon d'écrire à un enseignant et de tirer parti de sa permanence. Tu découvriras aussi l'idéal des universités allemandes, né à Berlin en 1810.",
    can: ["Use common noun-verb combinations", "Build relative clauses with was, wo(r)- and wer", "Write a polite email to a lecturer", "Ask for an extension and discuss your work in office hours", "Write a forum opinion of about 150 words (Goethe B2)"],
    can_fr: ["Employer les tournures verbo-nominales courantes", "Construire des relatives avec was, wo(r)- et wer", "Écrire un e-mail poli à un enseignant", "Demander un délai et parler de ton travail lors d'une permanence", "Écrire un avis d'environ 150 mots sur un forum (Goethe B2)"],
    lessons: [91, 92, 93], vocab: ["hochschuleDE", "bildungsdebatteDE"], reading: "humboldtuni", prompt: "de-b2-7",
    writing: { task: "In an education forum, a teacher writes: “Grades should be abolished: they only create pressure.” Give your opinion (150-180 words): report the opinion, take a position, give an argument with an example, present the other side, and make a proposal.", task_fr: "Sur un forum consacré à l'éducation, un enseignant écrit : « Il faudrait supprimer les notes : elles ne créent que de la pression. » Donne ton avis (150 à 180 mots) : rapporte l'opinion, prends position, donne un argument avec un exemple, présente l'autre point de vue et fais une proposition.", words: "150-180",
      tips: ["Ein Lehrer schreibt, Noten seien…", "Ich kann diesen Gedanken gut nachvollziehen.", "Wer nur für die Note lernt, …", "Andererseits…", "Mein Vorschlag wäre deshalb, …"],
      checklist: ["I reported the opinion with the Konjunktiv I", "I took a clear position", "I used a relative clause with was or wer", "I presented the other side", "I wrote between 150 and 180 words"],
      checklist_fr: ["J'ai rapporté l'opinion au Konjunktiv I", "J'ai pris une position claire", "J'ai employé une relative avec was ou wer", "J'ai présenté l'autre point de vue", "J'ai écrit entre 150 et 180 mots"],
      model: "Ein Lehrer schreibt, Noten seien überflüssig, weil sie nur Druck erzeugten. Ich kann diesen Gedanken gut nachvollziehen, teile ihn aber nicht ganz.\n\nEs stimmt, dass Noten viele Schüler unter Druck setzen. Wer nur für die Note lernt, vergisst den Stoff oft direkt nach der Prüfung. Das ist auch etwas, was ich bei meiner jüngeren Schwester beobachte: Vor jeder Klausur lernt sie die ganze Nacht, aber eine Woche später weiß sie kaum noch etwas. Außerdem sagt eine Zahl wenig darüber aus, was ein Kind wirklich kann.\n\nAndererseits geben Noten eine schnelle Orientierung, sowohl den Schülern als auch den Eltern. Ohne Noten wäre es schwieriger, Leistungen zu vergleichen, zum Beispiel bei der Bewerbung um einen Ausbildungsplatz.\n\nMein Vorschlag wäre deshalb, Noten nicht ganz abzuschaffen, sondern sie zu ergänzen: durch schriftliche Rückmeldungen, die zeigen, was schon gut klappt und woran man noch arbeiten muss. So würden Schüler mehr über ihr Lernen erfahren als durch eine einzige Zahl." } });
})();
