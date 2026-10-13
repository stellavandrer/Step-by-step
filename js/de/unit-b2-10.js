/* Cours d'allemand, unité B2-10 « Politics and Europe / Politique et Europe » : structurer une argumentation (zum
   einen … zum anderen, darüber hinaus, folglich, alles in allem), les adverbes prépositionnels qui annoncent une
   proposition (Ich setze mich dafür ein, dass… ; Wir rechnen damit, dass…), résumer un texte. Dernière unité du B2.
   Personnages fictifs, prénoms allemands.
   Faits vérifiables seulement : la Loi fondamentale est promulguée le 23 mai 1949 à Bonn ; nom choisi parce que
   l'Allemagne était divisée (texte pensé comme provisoire) ; article 1 : « Die Würde des Menschen ist
   unantastbar. » ; égalité des hommes et des femmes (art. 3), liberté de la presse (art. 5) ; État fédéral de
   16 Länder ; Bundestag élu tous les quatre ans ; les Länder participent à la législation par le Bundesrat ;
   depuis la réunification de 1990, elle s'applique à toute l'Allemagne ; 1957 : la RFA est l'un des six États
   fondateurs de la Communauté économique européenne (traités de Rome) ; aux élections européennes de 2024, on peut
   voter en Allemagne dès 16 ans. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "politikB2DE", icon: "landmark", title: "Politics and institutions", title_fr: "Politique et institutions", level: "B2", words: [
    ["der / die Abgeordnete, -n", "the member of parliament", "le député, la députée", "Die Abgeordnete beantwortet Fragen der Bürger."],
    ["das Parlament, -e", "the parliament", "le parlement", "Das Parlament stimmt am Donnerstag ab."],
    ["der Bundestag", "the Bundestag (federal parliament)", "le Bundestag (parlement fédéral)", "Der Bundestag sitzt im Reichstagsgebäude in Berlin."],
    ["die Koalition, -en", "the coalition", "la coalition", "Die Koalition hat sich auf einen Kompromiss geeinigt."],
    ["die Verfassung, -en", "the constitution", "la constitution", "Die Verfassung garantiert die Grundrechte."],
    ["das Gesetz, -e", "the law", "la loi", "Das neue Gesetz tritt im Januar in Kraft."],
    ["verabschieden", "to pass (a law); to say goodbye", "adopter (une loi) ; dire au revoir", "Das Gesetz wurde mit großer Mehrheit verabschiedet."],
    ["die Abstimmung, -en", "the vote", "le vote, le scrutin", "Die Abstimmung war geheim."],
    ["das Wahlrecht", "the right to vote", "le droit de vote", "Das Wahlrecht ist ein Grundpfeiler der Demokratie."],
    ["das Grundrecht, -e", "the fundamental right", "le droit fondamental", "Die Meinungsfreiheit ist ein Grundrecht."],
    ["der Bundeskanzler, - (die Bundeskanzlerin)", "the Federal Chancellor", "le chancelier fédéral, la chancelière fédérale", "Der Bundeskanzler wird vom Bundestag gewählt."],
    ["der Föderalismus", "federalism", "le fédéralisme", "Wegen des Föderalismus ist die Schule Sache der Länder."],
    ["der Wahlkampf, ¨-e", "the election campaign", "la campagne électorale", "Im Wahlkampf hängen überall Plakate."],
    ["kandidieren", "to stand (for election)", "être candidat, se présenter", "Sie kandidiert zum ersten Mal für den Stadtrat."],
    ["die Stimme, -n", "the vote; the voice", "la voix", "Jede Stimme zählt."],
    ["die Würde", "dignity", "la dignité", "Die Würde des Menschen ist unantastbar."]
  ] },
  { id: "europaDE", icon: "globe", title: "Europe", title_fr: "L'Europe", level: "B2", words: [
    ["die Europäische Union (EU)", "the European Union", "l'Union européenne", "Die Europäische Union hat 27 Mitgliedstaaten."],
    ["der Mitgliedstaat, -en", "the member state", "l'État membre", "Jeder Mitgliedstaat schickt Abgeordnete nach Straßburg."],
    ["europäisch", "European", "européen", "Wir brauchen eine europäische Lösung."],
    ["die Freizügigkeit", "freedom of movement", "la libre circulation", "Dank der Freizügigkeit kann man in jedem EU-Land arbeiten."],
    ["die Währung, -en", "the currency", "la monnaie", "Der Euro ist die gemeinsame Währung vieler EU-Länder."],
    ["der Binnenmarkt", "the single market", "le marché intérieur", "Der Binnenmarkt erleichtert den Handel."],
    ["die Zusammenarbeit", "cooperation", "la coopération", "Die Zusammenarbeit zwischen den Ländern ist eng."],
    ["die Grenzkontrolle, -n", "the border check", "le contrôle aux frontières", "Zwischen vielen Ländern gibt es keine Grenzkontrollen mehr."],
    ["der Beitritt", "accession, joining", "l'adhésion", "Über den Beitritt neuer Länder wird lange verhandelt."],
    ["austreten (aus + Dat.)", "to leave (an organisation)", "quitter, sortir de", "Großbritannien ist aus der EU ausgetreten."],
    ["das Bündnis, -se", "the alliance", "l'alliance", "Die beiden Parteien haben ein Bündnis geschlossen."],
    ["die Gleichheit", "equality", "l'égalité", "Gleichheit vor dem Gesetz gilt für alle."],
    ["das Gründungsmitglied, -er", "the founding member", "le membre fondateur", "Frankreich und Deutschland sind Gründungsmitglieder."],
    ["sich einsetzen (für + Akk.)", "to stand up for, to campaign for", "s'engager (pour)", "Sie setzt sich für mehr Klimaschutz ein."],
    ["die Herausforderung, -en", "the challenge", "le défi", "Der Klimawandel ist eine gemeinsame Herausforderung."],
    ["die Wiedervereinigung", "reunification", "la réunification", "Nach der Wiedervereinigung 1990 wurde Berlin wieder Hauptstadt."]
  ] });

  W.LESSONS.push(
  {
    id: 100, level: "B2", icon: "list-ordered",
    title: "Zum einen…, zum anderen…: building an argument", title_fr: "Zum einen…, zum anderen… : construire une argumentation",
    subtitle: "The connectors that guide your reader through an argument.", subtitle_fr: "Les connecteurs qui guident ton lecteur dans une argumentation.",
    body: `
<h2>Connectors by function</h2>
<table>
<tr><th>Function</th><th>Connectors</th></tr>
<tr><td>listing</td><td><s-de>erstens, zweitens, schließlich</s-de> · <s-de>zum einen … zum anderen</s-de></td></tr>
<tr><td>adding</td><td><s-de>außerdem, darüber hinaus, zudem</s-de> · <s-de>nicht nur …, sondern auch</s-de></td></tr>
<tr><td>consequence</td><td><s-de>deshalb, daher, folglich, somit</s-de></td></tr>
<tr><td>contrast</td><td><s-de>jedoch, allerdings, dagegen</s-de></td></tr>
<tr><td>conclusion</td><td><s-de>zusammenfassend, alles in allem, insgesamt</s-de></td></tr>
</table>
<h2>Word order</h2>
<p>Most of these words are adverbs: in first position, the verb comes right after them: <s-de>Darüber hinaus ist das Projekt günstig.</s-de> · <s-de>Folglich hat die Partei Stimmen verloren.</s-de> <s-de>jedoch</s-de> and <s-de>allerdings</s-de> can also go in the middle: <s-de>Das Projekt ist allerdings teuer.</s-de></p>
<h2>Zum einen … zum anderen</h2>
<p>Two arguments of equal weight: <s-de>Zum einen ist das Wahlalter 16 gerecht, zum anderen fördert es das Interesse an Politik.</s-de></p>
<div class="tip">One connector per idea is enough: a text with <s-de>außerdem</s-de> in every sentence feels mechanical. Vary them, and use the strongest position for your best argument, often the last one, introduced by <s-de>vor allem</s-de> or <s-de>entscheidend ist, dass…</s-de></div>
`,
    body_fr: `
<h2>Les connecteurs selon leur fonction</h2>
<table>
<tr><th>Fonction</th><th>Connecteurs</th></tr>
<tr><td>énumérer</td><td><s-de>erstens, zweitens, schließlich</s-de> · <s-de>zum einen … zum anderen</s-de></td></tr>
<tr><td>ajouter</td><td><s-de>außerdem, darüber hinaus, zudem</s-de> · <s-de>nicht nur …, sondern auch</s-de></td></tr>
<tr><td>la conséquence</td><td><s-de>deshalb, daher, folglich, somit</s-de></td></tr>
<tr><td>l'opposition</td><td><s-de>jedoch, allerdings, dagegen</s-de></td></tr>
<tr><td>conclure</td><td><s-de>zusammenfassend, alles in allem, insgesamt</s-de></td></tr>
</table>
<h2>L'ordre des mots</h2>
<p>La plupart de ces mots sont des adverbes : en première position, le verbe vient juste après : <s-de>Darüber hinaus ist das Projekt günstig.</s-de> (De plus, le projet est bon marché.) · <s-de>Folglich hat die Partei Stimmen verloren.</s-de> <s-de>jedoch</s-de> et <s-de>allerdings</s-de> peuvent aussi se placer au milieu : <s-de>Das Projekt ist allerdings teuer.</s-de></p>
<h2>Zum einen … zum anderen</h2>
<p>Deux arguments de même poids (d'une part … d'autre part) : <s-de>Zum einen ist das Wahlalter 16 gerecht, zum anderen fördert es das Interesse an Politik.</s-de></p>
<div class="tip">Un connecteur par idée suffit : un texte avec <s-de>außerdem</s-de> à chaque phrase paraît mécanique. Varie-les, et garde la meilleure place pour ton argument le plus fort, souvent le dernier, introduit par <s-de>vor allem</s-de> ou <s-de>entscheidend ist, dass…</s-de></div>
`,
    examples: [
      ["Zum einen ist das Projekt teuer, zum anderen dauert es sehr lange.", "On the one hand the project is expensive, on the other it takes a very long time.", "D'une part le projet est cher, d'autre part il prend beaucoup de temps."],
      ["Darüber hinaus ist die neue Regelung leicht verständlich.", "Moreover, the new rule is easy to understand.", "De plus, la nouvelle règle est facile à comprendre."],
      ["Die Partei hat ihre Versprechen nicht gehalten. Folglich hat sie viele Stimmen verloren.", "The party didn't keep its promises. As a result, it lost many votes.", "Le parti n'a pas tenu ses promesses. Par conséquent, il a perdu de nombreuses voix."],
      ["Das Gesetz ist allerdings umstritten.", "The law is, however, controversial.", "La loi est toutefois controversée."],
      ["Die Reform hilft nicht nur den Familien, sondern auch den Schulen.", "The reform helps not only families but also schools.", "La réforme aide non seulement les familles, mais aussi les écoles."],
      ["Alles in allem überwiegen die Vorteile.", "All in all, the advantages outweigh the disadvantages.", "Tout bien considéré, les avantages l'emportent."],
      ["Entscheidend ist jedoch, dass alle Bürger mitreden können.", "What matters most, however, is that all citizens can have a say.", "Ce qui compte avant tout, c'est que tous les citoyens puissent donner leur avis."]
    ],
    quiz: [
      { q: "___ ist das Projekt günstig. (moreover)", q_fr: "___ ist das Projekt günstig. (de plus)", o: ["Darüber hinaus", "Folglich", "Zusammenfassend"], a: 0, ex: "Adding an argument: darüber hinaus.", ex_fr: "Ajouter un argument : darüber hinaus." },
      { q: "Folglich ___ die Partei Stimmen verloren.", q_fr: "Folglich ___ die Partei Stimmen verloren.", o: ["hat", "die Partei hat", "hatte haben"], a: 0, ex: "Adverb in first position: the verb comes next.", ex_fr: "Adverbe en tête : le verbe vient juste après." },
      { q: "“On the one hand …, on the other hand …” (two equal arguments)", q_fr: "« D'une part …, d'autre part … » (deux arguments égaux)", o: ["zum einen …, zum anderen …", "einerseits …, deshalb …", "erstens …, jedoch …"], a: 0, ex: "zum einen … zum anderen.", ex_fr: "zum einen … zum anderen." },
      { q: "To conclude:", q_fr: "Pour conclure :", o: ["Alles in allem…", "Darüber hinaus…", "Zum einen…"], a: 0, ex: "alles in allem = all in all.", ex_fr: "alles in allem = tout bien considéré." },
      { q: "Which connector expresses a consequence?", q_fr: "Quel connecteur exprime une conséquence ?", o: ["somit", "jedoch", "zudem"], a: 0, ex: "somit = thus, therefore.", ex_fr: "somit = ainsi, par conséquent." }
    ]
  },
  {
    id: 101, level: "B2", icon: "link",
    title: "Ich setze mich dafür ein, dass…: verbs with prepositions + clauses", title_fr: "Ich setze mich dafür ein, dass… : verbes à préposition + proposition",
    subtitle: "When the preposition is followed by a whole clause: darauf, dafür, damit…", subtitle_fr: "Quand la préposition est suivie de toute une proposition : darauf, dafür, damit…",
    body: `
<h2>da(r) + preposition announces the clause</h2>
<p>Many verbs need a preposition: <s-de>sich einsetzen für, rechnen mit, achten auf, bestehen auf, sich freuen auf, abhängen von</s-de>. If what follows is a whole clause (<s-de>dass…</s-de>) or an infinitive with <s-de>zu</s-de>, the preposition becomes <s-de>da-</s-de> + preposition (<s-de>dar-</s-de> before a vowel) and stays in the main clause:</p>
<table>
<tr><th>With a noun</th><th>With a clause</th></tr>
<tr><td><s-de>Ich setze mich für mehr Radwege ein.</s-de></td><td><s-de>Ich setze mich dafür ein, dass es mehr Radwege gibt.</s-de></td></tr>
<tr><td><s-de>Wir rechnen mit höheren Preisen.</s-de></td><td><s-de>Wir rechnen damit, dass die Preise steigen.</s-de></td></tr>
<tr><td><s-de>Sie besteht auf einer Antwort.</s-de></td><td><s-de>Sie besteht darauf, eine Antwort zu bekommen.</s-de></td></tr>
</table>
<h2>Asking the question</h2>
<p>For things: <s-de>wo(r)</s-de> + preposition: <s-de>Wofür setzt du dich ein?</s-de> · <s-de>Worauf achtest du?</s-de> For people: preposition + <s-de>wen / wem</s-de>: <s-de>Für wen stimmst du?</s-de> · <s-de>Mit wem sprichst du?</s-de></p>
<div class="tip">Learn each verb with its preposition and case, as one block: <s-de>sich einsetzen für</s-de> (+ acc.), <s-de>rechnen mit</s-de> (+ dat.). Then the <s-de>da-</s-de> form comes naturally: <s-de>für</s-de> → <s-de>dafür</s-de>, <s-de>mit</s-de> → <s-de>damit</s-de>, <s-de>auf</s-de> → <s-de>darauf</s-de>.</div>
`,
    body_fr: `
<h2>da(r) + préposition annonce la proposition</h2>
<p>Beaucoup de verbes demandent une préposition : <s-de>sich einsetzen für, rechnen mit, achten auf, bestehen auf, sich freuen auf, abhängen von</s-de>. Si ce qui suit est toute une proposition (<s-de>dass…</s-de>) ou un infinitif avec <s-de>zu</s-de>, la préposition devient <s-de>da-</s-de> + préposition (<s-de>dar-</s-de> devant une voyelle) et reste dans la principale, un peu comme « à ce que » ou « de ce que » en français :</p>
<table>
<tr><th>Avec un nom</th><th>Avec une proposition</th></tr>
<tr><td><s-de>Ich setze mich für mehr Radwege ein.</s-de></td><td><s-de>Ich setze mich dafür ein, dass es mehr Radwege gibt.</s-de></td></tr>
<tr><td><s-de>Wir rechnen mit höheren Preisen.</s-de></td><td><s-de>Wir rechnen damit, dass die Preise steigen.</s-de></td></tr>
<tr><td><s-de>Sie besteht auf einer Antwort.</s-de></td><td><s-de>Sie besteht darauf, eine Antwort zu bekommen.</s-de></td></tr>
</table>
<h2>Poser la question</h2>
<p>Pour les choses : <s-de>wo(r)</s-de> + préposition : <s-de>Wofür setzt du dich ein?</s-de> · <s-de>Worauf achtest du?</s-de> Pour les personnes : préposition + <s-de>wen / wem</s-de> : <s-de>Für wen stimmst du?</s-de> · <s-de>Mit wem sprichst du?</s-de></p>
<div class="tip">Apprends chaque verbe avec sa préposition et son cas, en bloc : <s-de>sich einsetzen für</s-de> (+ acc.), <s-de>rechnen mit</s-de> (+ dat.). La forme en <s-de>da-</s-de> vient alors toute seule : <s-de>für</s-de> → <s-de>dafür</s-de>, <s-de>mit</s-de> → <s-de>damit</s-de>, <s-de>auf</s-de> → <s-de>darauf</s-de>.</div>
`,
    examples: [
      ["Ich setze mich dafür ein, dass es mehr Radwege gibt.", "I'm campaigning for more cycle lanes.", "Je m'engage pour qu'il y ait plus de pistes cyclables."],
      ["Wir rechnen damit, dass die Wahlbeteiligung steigt.", "We expect turnout to rise.", "Nous nous attendons à ce que la participation augmente."],
      ["Sie besteht darauf, eine schriftliche Antwort zu bekommen.", "She insists on getting a written answer.", "Elle tient absolument à recevoir une réponse écrite."],
      ["Achte bitte darauf, dass du deinen Ausweis mitnimmst.", "Please make sure you take your ID with you.", "Fais attention à bien prendre ta pièce d'identité."],
      ["Ob das Gesetz kommt, hängt davon ab, wie der Bundesrat abstimmt.", "Whether the law goes through depends on how the Bundesrat votes.", "L'adoption de la loi dépend de la façon dont le Bundesrat votera."],
      ["Wofür setzt sich die Initiative eigentlich ein?", "What is the initiative actually campaigning for?", "Pour quoi l'initiative s'engage-t-elle, au juste ?"],
      ["Für wen hast du bei der letzten Wahl gestimmt?", "Who did you vote for in the last election?", "Pour qui as-tu voté aux dernières élections ?"]
    ],
    quiz: [
      { q: "Wir rechnen ___, dass die Preise steigen.", q_fr: "Wir rechnen ___, dass die Preise steigen.", o: ["damit", "davon", "darauf"], a: 0, ex: "rechnen mit → damit.", ex_fr: "rechnen mit → damit." },
      { q: "Sie besteht ___, eine Antwort zu bekommen.", q_fr: "Sie besteht ___, eine Antwort zu bekommen.", o: ["darauf", "dafür", "damit"], a: 0, ex: "bestehen auf → darauf.", ex_fr: "bestehen auf → darauf." },
      { q: "“What are you campaigning for?”", q_fr: "« Pour quoi t'engages-tu ? »", o: ["Wofür setzt du dich ein?", "Für was setzt du dich ein dafür?", "Wo setzt du dich für ein?"], a: 0, ex: "For things: wo(r) + preposition.", ex_fr: "Pour les choses : wo(r) + préposition." },
      { q: "“Who are you voting for?” (a person)", q_fr: "« Pour qui votes-tu ? » (une personne)", o: ["Für wen stimmst du?", "Wofür stimmst du?", "Dafür stimmst du?"], a: 0, ex: "For people: preposition + wen / wem.", ex_fr: "Pour les personnes : préposition + wen / wem." },
      { q: "Das hängt ___ ab, ob es regnet.", q_fr: "Das hängt ___ ab, ob es regnet.", o: ["davon", "damit", "darauf"], a: 0, ex: "abhängen von → davon.", ex_fr: "abhängen von → davon." }
    ]
  },
  {
    id: 102, level: "B2", kind: "functional", icon: "file-text",
    title: "Everyday German: summarising a text", title_fr: "L'allemand de tous les jours : résumer un texte",
    subtitle: "Say what a text is about and render its ideas neutrally, in your own words.", subtitle_fr: "Dire de quoi parle un texte et restituer ses idées de façon neutre, avec tes propres mots.",
    body: `
<h2>Three parts</h2>
<table>
<tr><th>Part</th><th>German</th></tr>
<tr><td>introduction</td><td><s-de>In dem Artikel „…“ aus der Zeitung … geht es um…</s-de> · <s-de>Der Text behandelt das Thema…</s-de></td></tr>
<tr><td>main ideas</td><td><s-de>Die Autorin vertritt die These, dass…</s-de> · <s-de>Sie begründet dies damit, dass…</s-de> · <s-de>Laut Text…</s-de> · <s-de>Außerdem weist sie darauf hin, dass…</s-de></td></tr>
<tr><td>conclusion</td><td><s-de>Abschließend stellt sie fest, dass…</s-de> · <s-de>Zum Schluss fordert der Autor…</s-de></td></tr>
</table>
<h2>The rules</h2>
<p>Write in the present tense, in your own words, and much shorter than the original (often about a third). Leave out examples and details, and <b>don't give your own opinion</b>. Report the author's statements with <s-de>laut</s-de>, <s-de>sie meint, dass…</s-de> or the Konjunktiv I from unit 1: <s-de>Der Autor schreibt, die Wahlbeteiligung sei gestiegen.</s-de></p>
<div class="tip">Before writing, underline the key sentence of each paragraph and turn each one into a short sentence of your own. Summaries are useful far beyond exams: at work, at university, and for checking that you've really understood what you've read.</div>
`,
    body_fr: `
<h2>Trois parties</h2>
<table>
<tr><th>Partie</th><th>En allemand</th></tr>
<tr><td>introduction</td><td><s-de>In dem Artikel „…“ aus der Zeitung … geht es um…</s-de> · <s-de>Der Text behandelt das Thema…</s-de></td></tr>
<tr><td>idées principales</td><td><s-de>Die Autorin vertritt die These, dass…</s-de> · <s-de>Sie begründet dies damit, dass…</s-de> · <s-de>Laut Text…</s-de> · <s-de>Außerdem weist sie darauf hin, dass…</s-de></td></tr>
<tr><td>conclusion</td><td><s-de>Abschließend stellt sie fest, dass…</s-de> · <s-de>Zum Schluss fordert der Autor…</s-de></td></tr>
</table>
<h2>Les règles</h2>
<p>Écris au présent, avec tes propres mots, et beaucoup plus court que l'original (souvent environ un tiers). Laisse de côté les exemples et les détails, et <b>ne donne pas ton avis</b>. Rapporte les affirmations de l'auteur avec <s-de>laut</s-de>, <s-de>sie meint, dass…</s-de> ou le Konjunktiv I de l'unité 1 : <s-de>Der Autor schreibt, die Wahlbeteiligung sei gestiegen.</s-de></p>
<div class="tip">Avant d'écrire, souligne la phrase clé de chaque paragraphe et transforme-la en une courte phrase personnelle. Le résumé sert bien au-delà des examens : au travail, à l'université, et pour vérifier que tu as vraiment compris ce que tu as lu.</div>
`,
    examples: [
      ["In dem Artikel „Wählen ab 16?“ geht es um die Frage, ob Jugendliche wählen sollten.", "The article “Voting from 16?” is about whether young people should vote.", "L'article « Voter dès 16 ans ? » traite de la question de savoir si les jeunes devraient voter."],
      ["Die Autorin vertritt die These, dass Jugendliche reif genug sind.", "The author argues that young people are mature enough.", "L'autrice défend la thèse selon laquelle les jeunes sont assez mûrs."],
      ["Sie begründet dies damit, dass Jugendliche von politischen Entscheidungen besonders lange betroffen sind.", "She justifies this by saying that young people are affected by political decisions for an especially long time.", "Elle le justifie en disant que les jeunes sont concernés particulièrement longtemps par les décisions politiques."],
      ["Außerdem weist sie darauf hin, dass in einigen Bundesländern schon ab 16 gewählt wird.", "She also points out that in some federal states people already vote from 16.", "Elle souligne en outre que dans certains Länder, on vote déjà dès 16 ans."],
      ["Laut Text interessieren sich viele Jugendliche für Klima und Bildung.", "According to the text, many young people are interested in climate and education.", "D'après le texte, beaucoup de jeunes s'intéressent au climat et à l'éducation."],
      ["Der Autor schreibt, die Wahlbeteiligung sei gestiegen.", "The author writes that turnout has risen.", "L'auteur écrit que la participation aurait augmenté."],
      ["Abschließend stellt sie fest, dass die Demokratie davon profitieren würde.", "Finally, she concludes that democracy would benefit from it.", "Pour finir, elle constate que la démocratie en profiterait."]
    ],
    quiz: [
      { q: "Which sentence belongs in a summary?", q_fr: "Quelle phrase a sa place dans un résumé ?", o: ["Die Autorin vertritt die These, dass…", "Ich finde das total richtig!", "Das erinnert mich an meinen Urlaub."], a: 0, ex: "A summary is neutral: no personal opinion.", ex_fr: "Un résumé est neutre : pas d'avis personnel." },
      { q: "Which tense do you usually use in a summary?", q_fr: "Quel temps emploie-t-on en général dans un résumé ?", o: ["The present", "The Präteritum", "The future"], o_fr: ["Le présent", "Le prétérit", "Le futur"], a: 0, ex: "The present tense.", ex_fr: "Le présent." },
      { q: "“She justifies this by saying that…”", q_fr: "« Elle le justifie en disant que… »", o: ["Sie begründet dies damit, dass…", "Sie begründet dies dafür, dass…", "Sie gründet dies damit, dass…"], a: 0, ex: "etwas damit begründen, dass…", ex_fr: "etwas damit begründen, dass…" },
      { q: "“She points out that…”", q_fr: "« Elle souligne que… »", o: ["Sie weist darauf hin, dass…", "Sie weist dafür hin, dass…", "Sie zeigt darauf hin, dass…"], a: 0, ex: "auf etwas hinweisen → darauf hinweisen.", ex_fr: "auf etwas hinweisen → darauf hinweisen." },
      { q: "How long should a summary be, roughly?", q_fr: "Quelle longueur doit faire un résumé, à peu près ?", o: ["About a third of the original", "As long as the original", "Twice as long"], o_fr: ["Environ un tiers de l'original", "Aussi long que l'original", "Deux fois plus long"], a: 0, ex: "Much shorter: often about a third.", ex_fr: "Beaucoup plus court : souvent un tiers environ." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    100: {
      gap: [["Zum einen ist das Projekt teuer, zum ___ dauert es lange.", "anderen"], ["Darüber ___ ist die Regelung leicht verständlich.", "hinaus"], ["Die Partei hat ihre Versprechen gebrochen. Folglich ___ sie Stimmen verloren.", "hat"], ["Alles in ___ überwiegen die Vorteile.", "allem"]],
      fix: [["Darüber hinaus das Projekt ist günstig.", "Darüber hinaus ist das Projekt günstig.", "Adverb in first position: the verb comes next.", "Adverbe en tête : le verbe vient juste après."], ["Zum einen ist es teuer, zum zweiten dauert es lange.", "Zum einen ist es teuer, zum anderen dauert es lange.", "The pair is zum einen … zum anderen.", "Le couple est zum einen … zum anderen."]],
      task: ["Write five sentences arguing for more cycle lanes in your town, using zum einen … zum anderen, darüber hinaus, folglich and alles in allem.", "Écris cinq phrases pour défendre plus de pistes cyclables dans ta ville, avec zum einen … zum anderen, darüber hinaus, folglich et alles in allem.", "Zum einen sind Radwege gut für die Umwelt, zum anderen machen sie den Verkehr sicherer. Darüber hinaus bewegen sich die Menschen mehr. Viele würden gern Rad fahren, haben aber Angst vor den Autos. Folglich braucht die Stadt getrennte Radwege. Alles in allem überwiegen die Vorteile deutlich."]
    },
    101: {
      gap: [["Ich setze mich ___ ein, dass es mehr Radwege gibt.", "dafür"], ["Wir rechnen ___, dass die Wahlbeteiligung steigt.", "damit"], ["Sie besteht ___, eine schriftliche Antwort zu bekommen.", "darauf"], ["Ob das Gesetz kommt, hängt ___ ab, wie der Bundesrat abstimmt.", "davon"]],
      fix: [["Wir rechnen mit, dass die Preise steigen.", "Wir rechnen damit, dass die Preise steigen.", "Before a clause: da(r) + preposition.", "Devant une proposition : da(r) + préposition."], ["Für was setzt du dich ein?", "Wofür setzt du dich ein?", "For things: wo(r) + preposition.", "Pour les choses : wo(r) + préposition."]],
      task: ["You're standing for the student council. Write four sentences about what you'll campaign for, using sich einsetzen für, achten auf, rechnen mit and sich freuen auf with clauses.", "Tu te présentes au conseil des élèves ou des étudiants. Écris quatre phrases sur ce que tu défendras, avec sich einsetzen für, achten auf, rechnen mit et sich freuen auf suivis d'une proposition.", "Ich setze mich dafür ein, dass die Bibliothek länger geöffnet ist. Ich werde darauf achten, dass alle ihre Ideen einbringen können. Ich rechne damit, dass nicht alles sofort klappt. Aber ich freue mich darauf, mit euch zusammenzuarbeiten."]
    },
    102: {
      gap: [["In dem Artikel ___ es um die Frage, ob Jugendliche wählen sollten.", "geht"], ["Die Autorin ___ die These, dass Jugendliche reif genug sind.", "vertritt", "argues, holds", "défend"], ["Sie begründet dies ___, dass Jugendliche lange betroffen sind.", "damit"], ["Außerdem weist sie ___ hin, dass manche Länder schon ab 16 wählen.", "darauf"]],
      fix: [["Die Autorin hat recht: Jugendliche sind reif genug.", "Die Autorin ist der Meinung, dass Jugendliche reif genug sind.", "A summary reports the author's view neutrally, without your own judgement.", "Un résumé rapporte l'avis de l'auteur de façon neutre, sans ton propre jugement."], ["Die Autorin hat geschrieben, dass Jugendliche reif genug waren.", "Die Autorin schreibt, dass Jugendliche reif genug sind.", "Summaries are written in the present.", "Un résumé s'écrit au présent."]],
      task: ["Summarise the reading text of this unit (Das Grundgesetz) in four or five sentences, neutrally and in your own words.", "Résume le texte de lecture de cette unité (Das Grundgesetz) en quatre ou cinq phrases, de façon neutre et avec tes propres mots.", "In dem Text geht es um das Grundgesetz, die Verfassung der Bundesrepublik Deutschland. Es wurde 1949 verkündet und war ursprünglich als vorläufig gedacht, weil Deutschland geteilt war. Der Text nennt die wichtigsten Grundrechte und erklärt, dass Deutschland ein Bundesstaat ist. Außerdem weist er darauf hin, dass die Bundesrepublik zu den Gründungsmitgliedern der europäischen Gemeinschaft gehörte."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "jugendparlament", lesson: 101, level: "B2", icon: "landmark", partner: "Frau Hoffmann", role: "the chair of the youth council", role_fr: "la présidente du conseil des jeunes",
    title: "At the youth council", title_fr: "Au conseil des jeunes",
    setting: "Your town has a youth council. You present a proposal for a skate park. The chair, Frau Hoffmann, asks you questions.", setting_fr: "Ta ville a un conseil des jeunes. Tu présentes une proposition de skatepark. La présidente, Frau Hoffmann, te pose des questions.",
    turns: [
      { p: "Sie haben das Wort. Wofür setzen Sie sich ein?", en: "You have the floor. What are you campaigning for?", fr: "Vous avez la parole. Pour quoi vous engagez-vous ?" },
      { y: ["Ich setze mich dafür ein, dass unsere Stadt einen Skatepark bekommt.", "Ich setze mich dafür ein, dass unsere Stadt bekommt einen Skatepark.", "Ich setze mich dafür, dass unsere Stadt einen Skatepark bekommt."], en: "I'm campaigning for our town to get a skate park.", fr: "Je m'engage pour que notre ville ait un skatepark.", why: "sich dafür einsetzen, dass… (verb at the end).", why_fr: "sich dafür einsetzen, dass… (verbe à la fin)." },
      { p: "Und warum ist das so wichtig?", en: "And why is that so important?", fr: "Et pourquoi est-ce si important ?" },
      { y: ["Zum einen gibt es für Jugendliche kaum Treffpunkte, zum anderen fahren viele jetzt auf dem Marktplatz.", "Zum einen gibt es für Jugendliche kaum Treffpunkte, zum zweiten fahren viele jetzt auf dem Marktplatz.", "Zum einen es gibt für Jugendliche kaum Treffpunkte, zum anderen fahren viele jetzt auf dem Marktplatz."], en: "On the one hand there are hardly any meeting places for young people, on the other many now skate in the market square.", fr: "D'une part, il n'y a presque pas de lieux de rencontre pour les jeunes, d'autre part beaucoup roulent maintenant sur la place du marché.", why: "zum einen … zum anderen; verb second.", why_fr: "zum einen … zum anderen ; verbe en deuxième position." },
      { p: "Die Anwohner befürchten aber Lärm.", en: "But the residents are worried about noise.", fr: "Mais les riverains craignent le bruit." },
      { y: ["Wir achten darauf, dass der Park weit genug von den Häusern entfernt ist.", "Wir achten darauf, dass der Park ist weit genug von den Häusern entfernt.", "Wir achten dafür, dass der Park weit genug von den Häusern entfernt ist."], en: "We'll make sure the park is far enough from the houses.", fr: "Nous veillerons à ce que le parc soit assez loin des maisons.", why: "achten auf → darauf, dass…", why_fr: "achten auf → darauf, dass…" },
      { p: "Mit welchen Kosten rechnen Sie?", en: "What costs are you expecting?", fr: "À quels coûts vous attendez-vous ?" },
      { y: ["Wir rechnen damit, dass ein Teil durch Spenden finanziert werden kann. Darüber hinaus gibt es Fördergelder vom Land.", "Wir rechnen darauf, dass ein Teil durch Spenden finanziert werden kann. Darüber hinaus gibt es Fördergelder vom Land.", "Wir rechnen damit, dass ein Teil durch Spenden finanziert werden kann. Darüber hinaus es gibt Fördergelder vom Land."], en: "We expect part of it can be financed through donations. In addition, there's funding from the state.", fr: "Nous comptons sur le fait qu'une partie puisse être financée par des dons. En outre, il existe des subventions du Land.", why: "rechnen mit → damit; darüber hinaus + verb.", why_fr: "rechnen mit → damit ; darüber hinaus + verbe." },
      { p: "Gut. Wir stimmen nächste Woche ab.", en: "Good. We'll vote next week.", fr: "Bien. Nous voterons la semaine prochaine." },
      { y: ["Vielen Dank. Ich freue mich darauf, das Projekt gemeinsam umzusetzen.", "Vielen Dank. Ich freue mich darüber, das Projekt gemeinsam umsetzen.", "Vielen Dank. Ich freue mich darauf, das Projekt gemeinsam zu umsetzen."], en: "Thank you. I'm looking forward to putting the project into practice together.", fr: "Merci beaucoup. Je me réjouis de mettre ce projet en œuvre ensemble.", why: "sich freuen auf (future) → darauf, … zu; separable: umzusetzen.", why_fr: "sich freuen auf (futur) → darauf, … zu ; séparable : umzusetzen." }
    ] },
  { id: "wahlalter", lesson: 100, level: "B2", icon: "vote", partner: "Paula", role: "a fellow student", role_fr: "une camarade de cours",
    title: "Voting at 16?", title_fr: "Voter à 16 ans ?",
    setting: "In your German class, you discuss whether the voting age should be 16 for all elections. Your classmate Paula is against it.", setting_fr: "En cours d'allemand, vous discutez de la question de savoir si le droit de vote devrait commencer à 16 ans pour toutes les élections. Ta camarade Paula est contre.",
    turns: [
      { p: "Mit 16 interessiert man sich doch noch gar nicht für Politik.", en: "At 16 you're not interested in politics yet.", fr: "À 16 ans, on ne s'intéresse pas encore du tout à la politique." },
      { y: ["Das sehe ich anders. Zum einen engagieren sich viele Jugendliche für das Klima, zum anderen betreffen politische Entscheidungen sie besonders lange.", "Das sehe ich anders. Zum einen engagieren sich viele Jugendliche für das Klima, zum anderen politische Entscheidungen betreffen sie besonders lange.", "Das sehe ich anders. Zum einen viele Jugendliche engagieren sich für das Klima, zum anderen betreffen politische Entscheidungen sie besonders lange."], en: "I see it differently. On the one hand many young people are active on climate issues, on the other political decisions affect them for an especially long time.", fr: "Je vois les choses autrement. D'une part, beaucoup de jeunes s'engagent pour le climat ; d'autre part, les décisions politiques les concernent particulièrement longtemps.", why: "zum einen / zum anderen in first position: verb next.", why_fr: "zum einen / zum anderen en tête : le verbe juste après." },
      { p: "Aber viele wissen gar nicht, wie das politische System funktioniert.", en: "But many don't know how the political system works.", fr: "Mais beaucoup ne savent pas comment fonctionne le système politique." },
      { y: ["Das stimmt teilweise. Folglich müsste die Schule mehr über Politik unterrichten.", "Das stimmt teilweise. Folglich die Schule müsste mehr über Politik unterrichten.", "Das stimmt teilweise. Folglich müsste die Schule mehr über Politik unterrichtet."], en: "That's partly true. So schools ought to teach more about politics.", fr: "C'est vrai en partie. Par conséquent, l'école devrait enseigner davantage la politique.", why: "folglich + verb.", why_fr: "folglich + verbe." },
      { p: "Und wenn sie einfach wählen, was ihre Eltern wählen?", en: "And what if they just vote the way their parents do?", fr: "Et s'ils votent simplement comme leurs parents ?" },
      { y: ["Das hängt davon ab, wie selbstständig sie sind. Darüber hinaus machen das auch viele Erwachsene.", "Das hängt damit ab, wie selbstständig sie sind. Darüber hinaus machen das auch viele Erwachsene.", "Das hängt davon ab, wie sie selbstständig sind sind. Darüber hinaus machen das auch viele Erwachsene."], en: "That depends on how independent they are. Besides, many adults do that too.", fr: "Ça dépend de leur degré d'autonomie. En outre, beaucoup d'adultes font la même chose.", why: "abhängen von → davon ab, wie…", why_fr: "abhängen von → davon ab, wie…" },
      { p: "Okay. Und bei der Europawahl?", en: "OK. And for the European elections?", fr: "D'accord. Et pour les élections européennes ?" },
      { y: ["Da durften 2024 in Deutschland schon Sechzehnjährige wählen. Alles in allem finde ich das richtig.", "Da durften 2024 in Deutschland schon Sechzehnjährige wählen. Alles in allem ich finde das richtig.", "Da durften 2024 in Deutschland schon Sechzehnjährige wählen. Allem in allem finde ich das richtig."], en: "In Germany, 16-year-olds were already allowed to vote in 2024. All in all, I think that's right.", fr: "En Allemagne, les jeunes de 16 ans ont déjà pu voter en 2024. Tout bien considéré, je trouve ça juste.", why: "alles in allem + verb.", why_fr: "alles in allem + verbe." },
      { p: "Hm. Vielleicht muss ich darüber noch einmal nachdenken.", en: "Hm. Maybe I need to think about it again.", fr: "Hum. Il faut peut-être que j'y réfléchisse encore." },
      { y: ["Gern. Ich bin gespannt darauf, was du nächste Woche sagst.", "Gern. Ich bin gespannt dafür, was du nächste Woche sagst.", "Gern. Ich bin gespannt darauf, was sagst du nächste Woche."], en: "Sure. I'm curious to hear what you'll say next week.", fr: "Volontiers. J'ai hâte de savoir ce que tu diras la semaine prochaine.", why: "gespannt sein auf → darauf; indirect question: verb at the end.", why_fr: "gespannt sein auf → darauf ; interrogative indirecte : verbe à la fin." }
    ] }
  );

  W.READINGS.push({
    id: "grundgesetz", level: "B2", icon: "book-open", title: "Das Grundgesetz: ein Provisorium, das geblieben ist", genre: "Explainer",
    intro: "Germany's constitution was meant to be temporary. More than seventy years later, it is one of the country's foundations.",
    intro_fr: "La constitution allemande devait être provisoire. Plus de soixante-dix ans plus tard, elle est l'un des fondements du pays.",
    paragraphs: [
      { de: "Am 23. Mai 1949 wurde in Bonn das Grundgesetz verkündet. Der Name war bewusst gewählt: Weil Deutschland geteilt war, wollte man keine endgültige Verfassung beschließen, sondern eine Ordnung für eine Übergangszeit. Folglich sprach man lange von einem „Provisorium“.", en: "On 23 May 1949, the Basic Law was promulgated in Bonn. The name was chosen deliberately: because Germany was divided, people didn't want to adopt a final constitution, but a set of rules for a transitional period. As a result, it was long described as “provisional”.", fr: "Le 23 mai 1949, la Loi fondamentale est promulguée à Bonn. Le nom est choisi à dessein : l'Allemagne étant divisée, on ne veut pas adopter une constitution définitive, mais un cadre pour une période de transition. C'est pourquoi on parle longtemps d'un « provisoire »." },
      { de: "Der erste Artikel ist wohl der berühmteste Satz des Grundgesetzes: „Die Würde des Menschen ist unantastbar.“ Darauf folgen die Grundrechte, zum Beispiel die Gleichberechtigung von Männern und Frauen und die Freiheit der Presse. Darüber hinaus legt das Grundgesetz fest, wie der Staat aufgebaut ist.", en: "The first article is probably the most famous sentence in the Basic Law: “Human dignity shall be inviolable.” It is followed by the fundamental rights, for example equal rights for men and women and freedom of the press. In addition, the Basic Law lays down how the state is organised.", fr: "Le premier article est sans doute la phrase la plus célèbre de la Loi fondamentale : « La dignité de l'être humain est intangible. » Suivent les droits fondamentaux, par exemple l'égalité entre les hommes et les femmes et la liberté de la presse. En outre, la Loi fondamentale fixe l'organisation de l'État." },
      { de: "Deutschland ist ein Bundesstaat aus 16 Ländern. Die Bürgerinnen und Bürger wählen alle vier Jahre den Bundestag, und die Länder wirken über den Bundesrat an der Gesetzgebung mit. Nach der Wiedervereinigung 1990 gilt das Grundgesetz für ganz Deutschland: Aus dem Provisorium ist eine dauerhafte Grundlage geworden.", en: "Germany is a federal state made up of 16 Länder. Citizens elect the Bundestag every four years, and the Länder take part in legislation through the Bundesrat. Since reunification in 1990, the Basic Law has applied to the whole of Germany: the provisional arrangement has become a lasting foundation.", fr: "L'Allemagne est un État fédéral composé de 16 Länder. Les citoyennes et les citoyens élisent le Bundestag tous les quatre ans, et les Länder participent à la législation par l'intermédiaire du Bundesrat. Depuis la réunification de 1990, la Loi fondamentale s'applique à toute l'Allemagne : le provisoire est devenu un fondement durable." },
      { de: "Auch Europa hat das Land geprägt. 1957 gehörte die Bundesrepublik zu den sechs Staaten, die in Rom die Europäische Wirtschaftsgemeinschaft gründeten, einen Vorläufer der heutigen EU. Bei der Europawahl 2024 durften in Deutschland zum ersten Mal schon Sechzehnjährige abstimmen.", en: "Europe has shaped the country too. In 1957, the Federal Republic was one of the six states that founded the European Economic Community in Rome, a forerunner of today's EU. In the 2024 European elections, 16-year-olds in Germany were allowed to vote for the first time.", fr: "L'Europe a elle aussi marqué le pays. En 1957, la République fédérale fait partie des six États qui fondent à Rome la Communauté économique européenne, ancêtre de l'actuelle UE. Aux élections européennes de 2024, les jeunes de 16 ans ont pu voter pour la première fois en Allemagne." }
    ],
    glossary: { "Grundgesetz": ["Basic Law (Germany's constitution)", "Loi fondamentale (la constitution allemande)"], "verkündet": ["promulgated, proclaimed", "promulgué"], "bewusst": ["deliberately", "délibérément"], "geteilt": ["divided", "divisé"], "endgültige": ["final, definitive", "définitif"], "Ordnung": ["order, set of rules", "ordre, cadre"], "Übergangszeit": ["transitional period", "période de transition"], "Provisorium": ["provisional arrangement", "provisoire"], "Artikel": ["article", "article"], "unantastbar": ["inviolable", "intangible, inviolable"], "Gleichberechtigung": ["equal rights", "égalité des droits"], "Presse": ["press", "presse"], "legt": ["(festlegen) lays down", "(festlegen) fixe"], "aufgebaut": ["organised, structured", "organisé, structuré"], "Bundesstaat": ["federal state", "État fédéral"], "wirken": ["(mitwirken) take part", "(mitwirken) participent"], "Bundesrat": ["Bundesrat (chamber of the Länder)", "Bundesrat (chambre des Länder)"], "Gesetzgebung": ["legislation", "législation"], "dauerhafte": ["lasting, permanent", "durable"], "Grundlage": ["foundation, basis", "fondement"], "geprägt": ["shaped", "marqué"], "Europäische Wirtschaftsgemeinschaft": ["European Economic Community", "Communauté économique européenne"], "Vorläufer": ["forerunner", "précurseur, ancêtre"], "Europawahl": ["European election", "élection européenne"], "Sechzehnjährige": ["sixteen-year-olds", "jeunes de seize ans"] },
    questions: [
      { q: "Wann wurde das Grundgesetz verkündet?", o: ["Am 23. Mai 1949", "1957", "1990"], a: 0 },
      { q: "Warum wählte man den Namen „Grundgesetz“ statt „Verfassung“?", o: ["Weil Deutschland geteilt war und es nur für eine Übergangszeit gedacht war", "Weil das Wort kürzer ist", "Weil es aus Rom kam"], a: 0 },
      { q: "Was steht im ersten Artikel?", o: ["Die Würde des Menschen ist unantastbar.", "Deutschland hat 16 Länder.", "Der Bundestag wird alle vier Jahre gewählt."], a: 0 },
      { q: "Wie wirken die Länder an der Gesetzgebung mit?", o: ["Über den Bundesrat", "Über das Europäische Parlament", "Gar nicht"], a: 0 },
      { q: "Was war 2024 bei der Europawahl neu?", o: ["Sechzehnjährige durften in Deutschland wählen.", "Es gab keine Wahl.", "Nur Erwachsene über 21 durften wählen."], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-b2-10", unit: "b2-10", level: "B2", icon: "mic",
    title: "Straßenumfrage: Was bringt uns Europa?", title_fr: "Micro-trottoir : qu'est-ce que l'Europe nous apporte ?",
    context: "A street survey for a radio programme. The reporter asks three passers-by, Frau Lehmann, Ben and Herr Vogel, what the EU means to them.", context_fr: "Un micro-trottoir pour une émission de radio. La reporter demande à trois passants, Frau Lehmann, Ben et Herr Vogel, ce que l'UE représente pour eux.",
    words: [["der Passant, -en", "the passer-by", "le passant"], ["die Bürokratie", "bureaucracy", "la bureaucratie"], ["selbstverständlich", "obvious, taken for granted", "évident, allant de soi"], ["das Auslandssemester, -", "the semester abroad", "le semestre à l'étranger"], ["vereinfachen", "to simplify", "simplifier"]],
    lines: [["Reporterin", "Entschuldigung, darf ich Sie kurz fragen: Was bringt Ihnen die EU ganz persönlich?", "de-DE"], ["Frau Lehmann", "Zum einen kann ich ohne Grenzkontrollen zu meiner Tochter nach Frankreich fahren, zum anderen bezahle ich dort mit Euro. Das finde ich inzwischen selbstverständlich.", "de-DE"], ["Ben", "Ich habe ein Auslandssemester in Spanien gemacht. Darüber hinaus habe ich dort Freunde aus fünf Ländern gefunden. Ohne die EU wäre das viel schwieriger gewesen.", "de-DE"], ["Reporterin", "Und Sie? Sie sehen skeptisch aus.", "de-DE"], ["Herr Vogel", "Ich habe als Handwerker viel mit Bürokratie zu tun, und manche Vorschriften aus Brüssel sind mir zu kompliziert. Ich setze mich dafür ein, dass das vereinfacht wird.", "de-DE"], ["Reporterin", "Würden Sie trotzdem sagen, dass die EU eine gute Sache ist?", "de-DE"], ["Herr Vogel", "Alles in allem schon. Es hängt aber davon ab, ob man auf die Bürger hört.", "de-DE"], ["Reporterin", "Vielen Dank. Am Sonntag ist übrigens Europawahl. Wir rechnen damit, dass viele junge Leute wählen gehen.", "de-DE"]],
    gist: ["Worum geht es in der Umfrage?", ["Was die EU für die Menschen persönlich bedeutet", "Welche Partei die Leute wählen", "Wie teuer das Leben in Europa ist"]],
    detail: [["Was schätzt Frau Lehmann an der EU?", ["Reisen ohne Grenzkontrollen und den Euro", "Billige Flüge", "Ihre Arbeit in Brüssel"]], ["Was hat Ben gemacht?", ["Ein Auslandssemester in Spanien", "Ein Praktikum in Brüssel", "Urlaub in Italien"]], ["Was kritisiert Herr Vogel?", ["Zu komplizierte Vorschriften", "Zu viele Grenzkontrollen", "Den Euro"]], ["Womit rechnet die Reporterin?", ["Dass viele junge Leute wählen gehen", "Dass niemand wählen geht", "Dass die Wahl verschoben wird"]]],
    decode: ["Zum einen kann ich ohne Grenzkontrollen zu meiner Tochter nach Frankreich fahren, zum anderen bezahle ich dort mit Euro.", "Es hängt aber davon ab, ob man auf die Bürger hört."],
    tip: "In a survey, each speaker structures their answer with small signposts: zum einen… zum anderen, darüber hinaus, alles in allem. Use them to follow the structure, even when you miss a word.", tip_fr: "Dans un micro-trottoir, chaque personne structure sa réponse avec de petits repères : zum einen… zum anderen, darüber hinaus, alles in allem. Sers-t'en pour suivre la structure, même quand un mot t'échappe."
  }]);

  W.PROMPTS.push({ id: "de-b2-10", level: "B2", q: "Halte einen kurzen Vortrag: „Sollte das Wahlalter bei allen Wahlen auf 16 Jahre gesenkt werden?“ Nenne Argumente dafür und dagegen, strukturiere deinen Vortrag und gib deine Meinung.", en: "Give a short talk: “Should the voting age be lowered to 16 for all elections?” Give arguments for and against, structure your talk and give your opinion.", fr: "Fais un court exposé : « Faut-il abaisser le droit de vote à 16 ans pour toutes les élections ? » Donne des arguments pour et contre, structure ton exposé et donne ton avis.", time: 240,
    phrases: ["In meinem Vortrag geht es um die Frage, ob…", "Zum einen…, zum anderen…", "Darüber hinaus…", "Kritiker weisen darauf hin, dass…", "Alles in allem…"],
    model: "In meinem Vortrag geht es um die Frage, ob man schon mit 16 Jahren wählen sollte. In Deutschland ist das bei manchen Wahlen bereits möglich, zum Beispiel bei der Europawahl 2024. Für ein niedrigeres Wahlalter sprechen vor allem zwei Gründe. Zum einen betreffen politische Entscheidungen, etwa beim Klima oder bei der Rente, junge Menschen besonders lange. Zum anderen könnte das Wahlrecht das Interesse an Politik fördern. Darüber hinaus engagieren sich viele Jugendliche schon heute in Vereinen und Initiativen. Kritiker weisen jedoch darauf hin, dass manche Sechzehnjährige noch wenig über Politik wissen und leicht zu beeinflussen sind. Das ist ein ernstes Argument; folglich müsste die Schule mehr politische Bildung anbieten. Alles in allem bin ich dafür, das Wahlalter zu senken, vorausgesetzt, dass junge Menschen gut vorbereitet werden." });

  W.WRITING_GUIDE["b2-10"] = { genre: "An opinion in an online forum (Goethe B2, writing part 1)", genre_fr: "Un avis sur un forum en ligne (Goethe B2, écrit partie 1)",
    plan: [["Report the proposal you are reacting to.", "Rapporte la proposition à laquelle tu réagis."], ["Your position.", "Ta position."], ["Two arguments, clearly linked.", "Deux arguments, clairement reliés."], ["The other side.", "L'autre point de vue."], ["A conclusion.", "Une conclusion."]],
    marks: [["schlägt jemand vor, eine Wahlpflicht einzuführen", "reporting the proposal", "rapporter la proposition"], ["Ich halte das für keine gute Idee", "your position", "ta position"], ["Zum einen", "the first argument", "le premier argument"], ["Zum anderen", "the second argument", "le second argument"], ["Allerdings", "the other side", "l'autre point de vue"], ["Alles in allem", "the conclusion", "la conclusion"]] };

  /* Atelier de langue : champs allemands d'abord, puis anglais et français (voir localize.js). */
  W.LEXIS = W.LEXIS || {};
  W.LEXIS["b2-10"] = {
    colloc: [
      ["ein Gesetz verabschieden", "to pass a law", "adopter une loi", "Der Bundestag hat das Gesetz verabschiedet.", "verabschiedet", ["gemacht", "abgegeben"]],
      ["seine Stimme abgeben", "to cast one's vote", "voter, déposer son bulletin", "Am Sonntag habe ich meine Stimme abgegeben.", "abgegeben", ["ausgegeben", "abgenommen"]],
      ["eine Koalition bilden", "to form a coalition", "former une coalition", "Zwei Parteien wollen eine Koalition bilden.", "bilden", ["bauen", "stellen"]],
      ["einen Antrag einbringen", "to table a motion", "déposer une motion", "Die Opposition hat einen Antrag eingebracht.", "eingebracht", ["eingeführt", "eingegeben"]],
      ["eine Rede halten", "to give a speech", "prononcer un discours", "Die Kanzlerin hielt eine Rede vor dem Parlament.", "hielt", ["gab", "sagte"]],
      ["eine Wahl gewinnen", "to win an election", "gagner une élection", "Die Partei hat die Wahl knapp gewonnen.", "gewonnen", ["verdient", "erreicht"]],
      ["Druck ausüben", "to exert pressure", "exercer une pression", "Die Demonstranten wollen Druck auf die Regierung ausüben.", "ausüben", ["ausmachen", "ausgeben"]],
      ["einen Kompromiss eingehen", "to agree to a compromise", "accepter un compromis", "Beide Seiten mussten einen Kompromiss eingehen.", "eingehen", ["gehen", "treffen"]],
      ["Stellung beziehen", "to take a stand", "prendre position", "Der Minister wollte nicht Stellung beziehen.", "beziehen", ["ziehen", "holen"]],
      ["das Wort ergreifen", "to take the floor", "prendre la parole", "Dann ergriff die Abgeordnete das Wort.", "ergriff", ["nahm", "fasste"]]
    ],
    wf: [
      ["Die ___ fand am Sonntag statt. (WÄHLEN)", "Wahl"],
      ["Nach der ___ 1990 wurde Berlin wieder Hauptstadt. (VEREINIGEN)", "Wiedervereinigung"],
      ["Die ___ der Bürger an der Politik ist wichtig. (BETEILIGEN)", "Beteiligung"],
      ["Die Entscheidung war ___: Alle stimmten zu. (STIMME)", "einstimmig"],
      ["Viele junge Leute sind politisch sehr ___. (ENGAGEMENT)", "engagiert"],
      ["Die ___ zwischen den Ländern funktioniert gut. (ZUSAMMENARBEITEN)", "Zusammenarbeit"],
      ["Das neue Gesetz ist nicht mit der Verfassung ___. (VEREINBAREN)", "vereinbar"],
      ["Die ___ des Bundestages beträgt vier Jahre. (WÄHLEN)", "Wahlperiode"]
    ],
    kwt: [
      ["Erstens ist es teuer, und zweitens dauert es lange.", "EINEN", "___ ist es teuer, zum anderen dauert es lange.", "Zum einen"],
      ["Außerdem ist das Projekt umweltfreundlich.", "HINAUS", "___ ist das Projekt umweltfreundlich.", "Darüber hinaus"],
      ["Wir erwarten, dass die Preise steigen.", "DAMIT", "Wir rechnen ___ die Preise steigen.", "damit, dass|damit dass"],
      ["Sie will unbedingt, dass alle pünktlich sind.", "BESTEHT", "Sie ___ alle pünktlich sind.", "besteht darauf, dass|besteht darauf dass"],
      ["Die Autorin meint, dass Wählen Pflicht sein sollte.", "VERTRITT", "Die Autorin ___, dass Wählen Pflicht sein sollte.", "vertritt die Meinung|vertritt die Ansicht|vertritt die These|vertritt die Auffassung"],
      ["Die Partei hat deshalb viele Stimmen verloren.", "FOLGLICH", "___ viele Stimmen verloren.", "Folglich hat die Partei"]
    ],
    idioms: [
      ["das Zünglein an der Waage sein", "bei einer Entscheidung den Ausschlag geben", "to tip the balance", "faire pencher la balance", "Die kleine Partei war das Zünglein an der Waage.", "das Zünglein an der Waage"],
      ["etwas auf den Weg bringen", "etwas beginnen, in Gang setzen", "to get something under way", "mettre quelque chose sur les rails", "Die Regierung hat eine Reform auf den Weg gebracht.", "auf den Weg gebracht"],
      ["an einem Strang ziehen", "gemeinsam dasselbe Ziel verfolgen", "to pull together", "tirer dans le même sens", "In der Krise müssen alle an einem Strang ziehen.", "an einem Strang"],
      ["jemandem den Rücken stärken", "jemanden unterstützen", "to back someone up", "soutenir quelqu'un", "Die Partei hat ihrer Kandidatin den Rücken gestärkt.", "den Rücken gestärkt"],
      ["das Ruder herumreißen", "eine Situation grundlegend ändern", "to turn things around", "redresser la barre", "Kurz vor der Wahl konnte er das Ruder noch herumreißen.", "das Ruder"],
      ["leere Versprechungen machen", "Dinge versprechen, die man nicht halten wird", "to make empty promises", "faire des promesses en l'air", "Im Wahlkampf werden oft leere Versprechungen gemacht.", "leere Versprechungen"],
      ["im selben Boot sitzen", "in derselben schwierigen Lage sein", "to be in the same boat", "être dans le même bateau", "In Europa sitzen wir alle im selben Boot.", "im selben Boot"],
      ["Farbe bekennen", "seine Meinung offen sagen", "to nail one's colours to the mast", "annoncer la couleur", "Vor der Abstimmung muss jede Partei Farbe bekennen.", "Farbe bekennen"]
    ]
  };

  W.COURSE.push({ id: "b2-10", level: "B2", icon: "landmark", title: "Politics and Europe", title_fr: "Politique et Europe",
    intro: "The last unit of B2: institutions, elections and Europe. You'll learn to build a clear argument with connectors (zum einen … zum anderen, darüber hinaus, folglich), to use verbs with prepositions before a whole clause (Ich setze mich dafür ein, dass…), and to summarise a text neutrally. You'll also read about Germany's Basic Law, a “provisional” constitution that has lasted since 1949.",
    intro_fr: "Dernière unité du B2 : institutions, élections et Europe. Tu vas apprendre à construire une argumentation claire avec des connecteurs (zum einen … zum anderen, darüber hinaus, folglich), à employer des verbes à préposition devant toute une proposition (Ich setze mich dafür ein, dass…), et à résumer un texte de façon neutre. Tu liras aussi l'histoire de la Loi fondamentale allemande, une constitution « provisoire » en vigueur depuis 1949.",
    can: ["Structure an argument with connectors", "Use da(r) + preposition before a clause, and ask with wo(r) + preposition", "Summarise a text neutrally in your own words", "Talk about politics, elections and Europe", "Write a well-structured forum opinion of about 150 words (Goethe B2)"],
    can_fr: ["Structurer une argumentation avec des connecteurs", "Employer da(r) + préposition devant une proposition, et poser la question avec wo(r) + préposition", "Résumer un texte de façon neutre avec tes propres mots", "Parler de politique, d'élections et d'Europe", "Écrire un avis bien structuré d'environ 150 mots sur un forum (Goethe B2)"],
    lessons: [100, 101, 102], vocab: ["politikB2DE", "europaDE"], reading: "grundgesetz", prompt: "de-b2-10",
    writing: { task: "In a forum about democracy, someone suggests making voting compulsory, with a fine for anyone who doesn't vote. Give your opinion (150-180 words): report the proposal, take a position, give two clearly linked arguments, present the other side and conclude.", task_fr: "Sur un forum consacré à la démocratie, quelqu'un propose de rendre le vote obligatoire, avec une amende pour les abstentionnistes. Donne ton avis (150 à 180 mots) : rapporte la proposition, prends position, donne deux arguments clairement reliés, présente l'autre point de vue et conclus.", words: "150-180",
      tips: ["Jemand schlägt vor, …", "Ich halte das für keine gute Idee.", "Zum einen…, zum anderen…", "Allerdings…", "Alles in allem…"],
      checklist: ["I reported the proposal", "I took a clear position", "I linked two arguments with zum einen … zum anderen or darüber hinaus", "I presented the other side", "I wrote between 150 and 180 words"],
      checklist_fr: ["J'ai rapporté la proposition", "J'ai pris une position claire", "J'ai relié deux arguments avec zum einen … zum anderen ou darüber hinaus", "J'ai présenté l'autre point de vue", "J'ai écrit entre 150 et 180 mots"],
      model: "In diesem Forum schlägt jemand vor, eine Wahlpflicht einzuführen und Nichtwähler mit einem Bußgeld zu bestrafen. Ich halte das für keine gute Idee.\n\nZum einen gehört zur Freiheit auch das Recht, nicht zu wählen. Wer sich bewusst gegen alle Parteien entscheidet, sollte dafür nicht bestraft werden. Zum anderen löst eine Pflicht das eigentliche Problem nicht: Viele Menschen gehen nicht wählen, weil sie sich von der Politik nicht ernst genommen fühlen. Wenn man sie zwingt, wählen sie vielleicht zufällig oder aus Protest.\n\nAllerdings verstehe ich die Sorge hinter dem Vorschlag. Eine niedrige Wahlbeteiligung schwächt die Demokratie, und folglich sollte der Staat etwas dagegen tun. Darüber hinaus zeigen Länder mit Wahlpflicht, dass dort deutlich mehr Menschen wählen.\n\nAlles in allem setze ich mich lieber dafür ein, dass Politik verständlicher wird: durch mehr politische Bildung in der Schule, durch Informationen in einfacher Sprache und durch Politikerinnen und Politiker, die den Bürgern wirklich zuhören. Das wäre in meinen Augen der bessere Weg." } });
})();
