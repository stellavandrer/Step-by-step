/* Cours d'allemand, unité A1-7 « Free time and plans / Loisirs et projets » : le parfait (Perfekt) avec haben et
   sein, les mois, les saisons et les dates (am dritten Oktober), inviter, accepter, refuser. Explications et
   traductions en anglais ET en français. Personnages fictifs, prénoms allemands.
   Faits vérifiables seulement : le Perfekt est le temps du passé courant à l'oral ; le 3 octobre, Tag der Deutschen
   Einheit, fête nationale ; le Schwarzwald en Bade-Wurtemberg, le coucou et la Schwarzwälder Kirschtorte ;
   magasins en général fermés le dimanche. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "freizeitDE", icon: "bike", title: "Free time", title_fr: "Les loisirs", level: "A1", words: [
    ["die Freizeit", "free time", "le temps libre, les loisirs", "In meiner Freizeit lese ich viel."],
    ["das Hobby, -s", "the hobby", "le loisir, le hobby", "Mein Hobby ist Fotografieren."],
    ["wandern", "to hike", "faire de la randonnée", "Am Wochenende wandern wir im Wald."],
    ["Rad fahren", "to cycle", "faire du vélo", "Ich fahre gern Rad."],
    ["Fußball spielen", "to play football", "jouer au football", "Die Kinder spielen Fußball."],
    ["joggen", "to jog", "faire du jogging, courir", "Ich jogge jeden Morgen im Park."],
    ["Musik hören", "to listen to music", "écouter de la musique", "Am Abend höre ich Musik."],
    ["singen", "to sing", "chanter", "Sie singt in einem Chor."],
    ["malen", "to paint", "peindre", "Mein Opa malt gern Bilder."],
    ["fotografieren", "to take photos", "faire de la photo", "Im Urlaub fotografiere ich viel."],
    ["ins Kino gehen", "to go to the cinema", "aller au cinéma", "Gehen wir heute ins Kino?"],
    ["Freunde treffen", "to meet friends", "voir des amis", "Am Samstag treffe ich Freunde."],
    ["feiern", "to celebrate, to party", "faire la fête, fêter", "Wir feiern seinen Geburtstag."],
    ["der Verein, -e", "the club, the association", "le club, l'association", "Ich spiele Tennis in einem Verein."],
    ["der Wald, ¨-er", "the forest", "la forêt", "Wir wandern gern im Wald."],
    ["das Konzert, -e", "the concert", "le concert", "Das Konzert beginnt um acht."],
    ["Lust haben", "to feel like (doing)", "avoir envie", "Hast du Lust auf ein Eis?"],
    ["langweilig", "boring", "ennuyeux", "Der Film war langweilig."],
    ["spannend", "exciting, gripping", "passionnant", "Das Buch ist sehr spannend."]
  ] },
  { id: "monateDE", icon: "calendar", title: "Months, seasons, dates", title_fr: "Les mois, les saisons, les dates", level: "A1", words: [
    ["der Januar", "January", "janvier", "Im Januar ist es kalt."],
    ["der Februar", "February", "février", "Mein Geburtstag ist im Februar."],
    ["der März", "March", "mars", "Im März beginnt der Frühling."],
    ["der Mai", "May", "mai", "Am ersten Mai ist ein Feiertag."],
    ["der Juli", "July", "juillet", "Im Juli haben wir Urlaub."],
    ["der Oktober", "October", "octobre", "Am dritten Oktober ist Feiertag."],
    ["der Dezember", "December", "décembre", "Im Dezember gibt es Weihnachtsmärkte."],
    ["der Frühling", "spring", "le printemps", "Im Frühling blühen die Bäume."],
    ["der Sommer", "summer", "l'été", "Im Sommer gehen wir schwimmen."],
    ["der Herbst", "autumn", "l'automne", "Im Herbst wandern wir gern."],
    ["der Winter", "winter", "l'hiver", "Im Winter fahren wir Ski."],
    ["das Datum, Daten", "the date", "la date", "Welches Datum ist heute?"],
    ["der Feiertag, -e", "the public holiday", "le jour férié", "Morgen ist ein Feiertag."],
    ["der erste", "the first", "le premier", "Heute ist der erste Juni."],
    ["der dritte", "the third", "le troisième, le trois", "Heute ist der dritte Mai."],
    ["gestern", "yesterday", "hier", "Gestern war ich im Kino."],
    ["letzte Woche", "last week", "la semaine dernière", "Letzte Woche habe ich viel gearbeitet."],
    ["nächstes Jahr", "next year", "l'année prochaine", "Nächstes Jahr fahre ich nach Wien."]
  ] },
  { id: "einladungDE", icon: "party-popper", title: "Invitations and plans", title_fr: "Invitations et projets", level: "A1", words: [
    ["die Einladung, -en", "the invitation", "l'invitation", "Danke für die Einladung!"],
    ["Hast du Lust…?", "do you feel like…?", "ça te dit de… ?", "Hast du Lust, ins Kino zu gehen?"],
    ["Wollen wir…?", "shall we…?", "on… ?", "Wollen wir zusammen kochen?"],
    ["Gute Idee!", "good idea!", "bonne idée !", "Ein Picknick? Gute Idee!"],
    ["Leider kann ich nicht.", "unfortunately I can't", "malheureusement, je ne peux pas", "Am Freitag? Leider kann ich nicht."],
    ["Schade!", "what a pity!", "dommage !", "Du kannst nicht kommen? Schade!"],
    ["ein anderes Mal", "another time", "une autre fois", "Vielleicht ein anderes Mal!"],
    ["mitbringen", "to bring (along)", "apporter", "Soll ich einen Salat mitbringen?"],
    ["zusagen", "to accept (an invitation)", "accepter (une invitation)", "Ich sage gern zu!"],
    ["absagen", "to cancel, to decline", "annuler, se décommander", "Leider muss ich absagen."],
    ["das Fest, -e", "the party, the celebration", "la fête", "Das Sommerfest ist am Samstag."],
    ["grillen", "to have a barbecue, to grill", "faire un barbecue, griller", "Am Sonntag grillen wir im Garten."],
    ["Viel Spaß!", "have fun!", "amuse-toi bien !", "Viel Spaß beim Konzert!"],
    ["sich freuen auf", "to look forward to", "se réjouir de", "Ich freue mich auf das Fest!"],
    ["Bis dann!", "see you then!", "à plus tard !, à tout à l'heure !", "Um acht vor dem Kino. Bis dann!"],
    ["Wie wäre es mit…?", "how about…?", "que dirais-tu de… ?", "Wie wäre es mit Samstag?"]
  ] });

  W.LESSONS.push(
  {
    id: 19, level: "A1", icon: "history",
    title: "Ich habe gegessen, ich bin gefahren: the perfect tense", title_fr: "Ich habe gegessen, ich bin gefahren : le parfait (Perfekt)",
    subtitle: "Talk about what you did: the past tense Germans use every day when they speak.", subtitle_fr: "Raconter ce que tu as fait : le temps du passé que les Allemands emploient tous les jours à l'oral.",
    body: `
<h2>How it's built</h2>
<p>The <b>Perfekt</b> = <s-de>haben</s-de> or <s-de>sein</s-de> in second place + the <b>past participle</b> at the end: <s-de>Ich habe Pizza gegessen.</s-de> · <s-de>Lena ist nach Wien gefahren.</s-de> The two parts frame the sentence, like separable verbs and modal verbs.</p>
<h2>The past participle</h2>
<table>
<tr><th>Type</th><th>Infinitive</th><th>Participle</th></tr>
<tr><td>regular: ge- … -t</td><td><s-de>machen</s-de>, <s-de>arbeiten</s-de></td><td><s-de>gemacht</s-de>, <s-de>gearbeitet</s-de></td></tr>
<tr><td>irregular: ge- … -en</td><td><s-de>essen</s-de>, <s-de>sehen</s-de>, <s-de>trinken</s-de></td><td><s-de>gegessen</s-de>, <s-de>gesehen</s-de>, <s-de>getrunken</s-de></td></tr>
<tr><td>separable: ge in the middle</td><td><s-de>einkaufen</s-de>, <s-de>fernsehen</s-de></td><td><s-de>eingekauft</s-de>, <s-de>ferngesehen</s-de></td></tr>
<tr><td>no ge-: -ieren, be-, ver-, er-</td><td><s-de>studieren</s-de>, <s-de>besuchen</s-de>, <s-de>verstehen</s-de></td><td><s-de>studiert</s-de>, <s-de>besucht</s-de>, <s-de>verstanden</s-de></td></tr>
</table>
<p>Irregular participles must be learnt, like English "eaten, seen, drunk": <s-de>schreiben</s-de> → <s-de>geschrieben</s-de>, <s-de>treffen</s-de> → <s-de>getroffen</s-de>, <s-de>gehen</s-de> → <s-de>gegangen</s-de>.</p>
<h2>Haben or sein?</h2>
<p>Most verbs take <s-de>haben</s-de>. Verbs of <b>movement from one place to another</b> and of <b>change of state</b> take <s-de>sein</s-de>: <s-de>gehen</s-de>, <s-de>fahren</s-de>, <s-de>kommen</s-de>, <s-de>fliegen</s-de>, <s-de>aufstehen</s-de> (<s-de>ich bin aufgestanden</s-de>), and also <s-de>sein</s-de> and <s-de>bleiben</s-de>: <s-de>Ich bin zu Hause geblieben.</s-de></p>
<h2>When to use it</h2>
<p>In everyday German, the Perfekt is <b>the</b> past tense, even for a finished time: <s-de>Gestern habe ich Tennis gespielt.</s-de> = Yesterday I played tennis (not "have played"). Only <s-de>sein</s-de> and <s-de>haben</s-de> prefer another form: <s-de>Ich war im Kino.</s-de> · <s-de>Ich hatte keine Zeit.</s-de></p>
<div class="tip">In a question: <s-de>Was hast du am Wochenende gemacht?</s-de> · <s-de>Bist du schon mal in Berlin gewesen?</s-de> The participle is always at the very end.</div>
`,
    body_fr: `
<h2>Comment il se forme</h2>
<p>Le <b>Perfekt</b> = <s-de>haben</s-de> ou <s-de>sein</s-de> en deuxième position + le <b>participe passé</b> à la fin : <s-de>Ich habe Pizza gegessen.</s-de> (J'ai mangé une pizza.) · <s-de>Lena ist nach Wien gefahren.</s-de> (Lena est allée à Vienne.) Les deux morceaux encadrent la phrase, comme pour les verbes séparables et les verbes de modalité.</p>
<h2>Le participe passé</h2>
<table>
<tr><th>Type</th><th>Infinitif</th><th>Participe</th></tr>
<tr><td>régulier : ge- … -t</td><td><s-de>machen</s-de>, <s-de>arbeiten</s-de></td><td><s-de>gemacht</s-de>, <s-de>gearbeitet</s-de></td></tr>
<tr><td>irrégulier : ge- … -en</td><td><s-de>essen</s-de>, <s-de>sehen</s-de>, <s-de>trinken</s-de></td><td><s-de>gegessen</s-de>, <s-de>gesehen</s-de>, <s-de>getrunken</s-de></td></tr>
<tr><td>séparable : ge au milieu</td><td><s-de>einkaufen</s-de>, <s-de>fernsehen</s-de></td><td><s-de>eingekauft</s-de>, <s-de>ferngesehen</s-de></td></tr>
<tr><td>sans ge- : -ieren, be-, ver-, er-</td><td><s-de>studieren</s-de>, <s-de>besuchen</s-de>, <s-de>verstehen</s-de></td><td><s-de>studiert</s-de>, <s-de>besucht</s-de>, <s-de>verstanden</s-de></td></tr>
</table>
<p>Les participes irréguliers s'apprennent par cœur, comme « pris, mis, vu » en français : <s-de>schreiben</s-de> → <s-de>geschrieben</s-de>, <s-de>treffen</s-de> → <s-de>getroffen</s-de>, <s-de>gehen</s-de> → <s-de>gegangen</s-de>.</p>
<h2>Haben ou sein ?</h2>
<p>La plupart des verbes prennent <s-de>haben</s-de>. Les verbes de <b>déplacement d'un lieu à un autre</b> et de <b>changement d'état</b> prennent <s-de>sein</s-de>, un peu comme « être » en français : <s-de>gehen</s-de>, <s-de>fahren</s-de>, <s-de>kommen</s-de>, <s-de>fliegen</s-de>, <s-de>aufstehen</s-de> (<s-de>ich bin aufgestanden</s-de>), et aussi <s-de>sein</s-de> et <s-de>bleiben</s-de> : <s-de>Ich bin zu Hause geblieben.</s-de> Attention : le participe allemand ne s'accorde jamais : <s-de>Lena ist gekommen</s-de>, <s-de>die Kinder sind gekommen</s-de>.</p>
<h2>Quand l'employer</h2>
<p>À l'oral, le Perfekt est <b>le</b> temps du passé, comme le passé composé en français : <s-de>Gestern habe ich Tennis gespielt.</s-de> (Hier, j'ai joué au tennis.) Seuls <s-de>sein</s-de> et <s-de>haben</s-de> préfèrent une autre forme : <s-de>Ich war im Kino.</s-de> (J'étais au cinéma, j'ai été au cinéma.) · <s-de>Ich hatte keine Zeit.</s-de></p>
<div class="tip">Dans une question : <s-de>Was hast du am Wochenende gemacht?</s-de> · <s-de>Bist du schon mal in Berlin gewesen?</s-de> Le participe est toujours tout à la fin.</div>
`,
    examples: [
      ["Was hast du am Wochenende gemacht?", "What did you do at the weekend?", "Qu'est-ce que tu as fait ce week-end ?"],
      ["Ich habe meine Großeltern besucht.", "I visited my grandparents.", "J'ai rendu visite à mes grands-parents."],
      ["Meine Eltern sind nach Hamburg gefahren.", "My parents went to Hamburg.", "Mes parents sont allés à Hambourg."],
      ["Am Samstag habe ich lange geschlafen.", "On Saturday I slept in.", "Samedi, j'ai fait la grasse matinée."],
      ["Lena ist um sieben aufgestanden.", "Lena got up at seven.", "Lena s'est levée à sept heures."],
      ["Hast du den Film schon gesehen?", "Have you seen the film yet?", "Tu as déjà vu le film ?"],
      ["Gestern war ich müde und bin zu Hause geblieben.", "Yesterday I was tired and stayed at home.", "Hier, je manquais d'énergie et je n'ai pas bougé de chez moi."]
    ],
    quiz: [
      { q: "Complete: “Ich ___ Pizza gegessen.”", q_fr: "Complète : « Ich ___ Pizza gegessen. »", o: ["bin", "habe", "hat"], a: 1, ex: "essen takes haben: ich habe gegessen.", ex_fr: "essen se conjugue avec haben : ich habe gegessen." },
      { q: "Complete: “Wir ___ nach Wien gefahren.”", q_fr: "Complète : « Wir ___ nach Wien gefahren. »", o: ["haben", "sind", "seid"], a: 1, ex: "Movement from one place to another: sein.", ex_fr: "Déplacement d'un lieu à un autre : sein." },
      { q: "The participle of “einkaufen” is:", q_fr: "Le participe de « einkaufen » est :", o: ["geeinkauft", "eingekauft", "eingekaufen"], a: 1, ex: "Separable verb: ge goes between the prefix and the verb.", ex_fr: "Verbe séparable : ge se place entre la particule et le verbe." },
      { q: "The participle of “besuchen” is:", q_fr: "Le participe de « besuchen » est :", o: ["gebesucht", "besucht", "besuchen"], a: 1, ex: "Verbs with be-, ver-, er- take no ge-.", ex_fr: "Les verbes en be-, ver-, er- ne prennent pas ge-." },
      { q: "Which sentence is correct?", q_fr: "Quelle phrase est correcte ?", o: ["Ich habe gestern gearbeitet.", "Ich habe gearbeitet gestern.", "Ich gearbeitet habe gestern."], a: 0, ex: "habe second, the participle at the very end.", ex_fr: "habe en deuxième position, le participe tout à la fin." }
    ]
  },
  {
    id: 20, level: "A1", icon: "calendar",
    title: "Am dritten Oktober: months, seasons and dates", title_fr: "Am dritten Oktober : les mois, les saisons et les dates",
    subtitle: "Im Mai, am Montag, um acht: the right little word for each time, and how to say a date.", subtitle_fr: "Im Mai, am Montag, um acht : le bon petit mot pour chaque moment, et comment dire une date.",
    body: `
<h2>Months and seasons</h2>
<p><s-de>Januar, Februar, März, April, Mai, Juni, Juli, August, September, Oktober, November, Dezember</s-de> · <s-de>der Frühling, der Sommer, der Herbst, der Winter</s-de>. All are masculine.</p>
<h2>Im, am, um</h2>
<table>
<tr><th>Word</th><th>With</th><th>Example</th></tr>
<tr><td><s-de>im</s-de></td><td>months, seasons</td><td><s-de>im Mai</s-de>, <s-de>im Sommer</s-de></td></tr>
<tr><td><s-de>am</s-de></td><td>days, dates, parts of the day</td><td><s-de>am Montag</s-de>, <s-de>am dritten Oktober</s-de></td></tr>
<tr><td><s-de>um</s-de></td><td>clock times</td><td><s-de>um acht Uhr</s-de></td></tr>
</table>
<p>A year has no preposition: <s-de>Ich bin 1998 geboren.</s-de> (or <s-de>im Jahr 1998</s-de>). Years are said in hundreds: 1998 → <s-de>neunzehnhundertachtundneunzig</s-de>; from 2000: <s-de>zweitausendfünfundzwanzig</s-de>.</p>
<h2>Dates: ordinal numbers</h2>
<p>To give a date, German uses ordinal numbers: <s-de>der erste</s-de> (1st), <s-de>der zweite</s-de>, <s-de>der dritte</s-de> (3rd, irregular), <s-de>der vierte</s-de>… <s-de>der siebte</s-de> (7th), <s-de>der achte</s-de> (8th): add <b>-te</b> up to 19, then <b>-ste</b>: <s-de>der zwanzigste</s-de>, <s-de>der einunddreißigste</s-de>. In writing: a full stop after the number: 3. Oktober = <s-de>der dritte Oktober</s-de>.</p>
<p><s-de>Welches Datum ist heute?</s-de> — <s-de>Heute ist der dritte Oktober.</s-de> · On a date, with <s-de>am</s-de>, the ending becomes <b>-en</b>: <s-de>am dritten Oktober</s-de>, <s-de>am ersten Mai</s-de>.</p>
<div class="tip">The 3rd of October, <s-de>der Tag der Deutschen Einheit</s-de> (German Unity Day), is Germany's national holiday. And the order of a date is like British English: day, month, year: 03.10.2025.</div>
`,
    body_fr: `
<h2>Les mois et les saisons</h2>
<p><s-de>Januar, Februar, März, April, Mai, Juni, Juli, August, September, Oktober, November, Dezember</s-de> · <s-de>der Frühling, der Sommer, der Herbst, der Winter</s-de>. Tous sont masculins.</p>
<h2>Im, am, um</h2>
<table>
<tr><th>Mot</th><th>Avec</th><th>Exemple</th></tr>
<tr><td><s-de>im</s-de></td><td>mois, saisons</td><td><s-de>im Mai</s-de>, <s-de>im Sommer</s-de></td></tr>
<tr><td><s-de>am</s-de></td><td>jours, dates, moments</td><td><s-de>am Montag</s-de>, <s-de>am dritten Oktober</s-de></td></tr>
<tr><td><s-de>um</s-de></td><td>heures</td><td><s-de>um acht Uhr</s-de></td></tr>
</table>
<p>Une année n'a pas de préposition : <s-de>Ich bin 1998 geboren.</s-de> (ou <s-de>im Jahr 1998</s-de>). On dit les années en centaines : 1998 → <s-de>neunzehnhundertachtundneunzig</s-de> (« dix-neuf cent quatre-vingt-dix-huit ») ; à partir de 2000 : <s-de>zweitausendfünfundzwanzig</s-de>.</p>
<h2>Les dates : les nombres ordinaux</h2>
<p>Pour une date, l'allemand emploie les ordinaux, là où le français dit « le trois octobre » : <s-de>der erste</s-de> (1er), <s-de>der zweite</s-de>, <s-de>der dritte</s-de> (3e, irrégulier), <s-de>der vierte</s-de>… <s-de>der siebte</s-de> (7e), <s-de>der achte</s-de> (8e) : on ajoute <b>-te</b> jusqu'à 19, puis <b>-ste</b> : <s-de>der zwanzigste</s-de>, <s-de>der einunddreißigste</s-de>. À l'écrit, un point après le nombre : 3. Oktober = <s-de>der dritte Oktober</s-de>.</p>
<p><s-de>Welches Datum ist heute?</s-de> — <s-de>Heute ist der dritte Oktober.</s-de> · Pour une date avec <s-de>am</s-de>, la terminaison devient <b>-en</b> : <s-de>am dritten Oktober</s-de>, <s-de>am ersten Mai</s-de>.</p>
<div class="tip">Le 3 octobre, <s-de>der Tag der Deutschen Einheit</s-de> (jour de l'Unité allemande), est la fête nationale allemande. Et l'ordre des dates est le même qu'en français : jour, mois, année : 03.10.2025.</div>
`,
    examples: [
      ["Im Sommer fahren wir an die Ostsee.", "In summer we go to the Baltic Sea.", "L'été, nous allons au bord de la Baltique."],
      ["Am Montag habe ich einen Termin.", "I have an appointment on Monday.", "J'ai un rendez-vous lundi."],
      ["Wann hast du Geburtstag? — Am zwölften März.", "When is your birthday? — On the twelfth of March.", "C'est quand ton anniversaire ? — Le douze mars."],
      ["Heute ist der dritte Oktober, ein Feiertag.", "Today is the third of October, a public holiday.", "Aujourd'hui, c'est le trois octobre, un jour férié."],
      ["Ich bin 1998 geboren.", "I was born in 1998.", "J'ai vu le jour en 1998."],
      ["Der Kurs beginnt am ersten September um neun Uhr.", "The course starts on the first of September at nine.", "Le cours commence le premier septembre à neuf heures."],
      ["Im Winter ist es hier sehr kalt.", "In winter it's very cold here.", "L'hiver, il fait très froid ici."]
    ],
    quiz: [
      { q: "“In July”:", q_fr: "« En juillet » :", o: ["am Juli", "im Juli", "um Juli"], a: 1, ex: "Months and seasons: im.", ex_fr: "Mois et saisons : im." },
      { q: "“On Friday”:", q_fr: "« Vendredi » (ce vendredi) :", o: ["im Freitag", "am Freitag", "um Freitag"], a: 1, ex: "Days: am.", ex_fr: "Les jours : am." },
      { q: "“The 3rd of May” (Today is…):", q_fr: "« Le 3 mai » (Aujourd'hui, c'est…) :", o: ["der dreite Mai", "der dritte Mai", "der drei Mai"], a: 1, ex: "3rd = dritte, irregular.", ex_fr: "3e = dritte, irrégulier." },
      { q: "“On the 20th of June”:", q_fr: "« Le 20 juin » (date d'un événement) :", o: ["am zwanzigten Juni", "am zwanzigsten Juni", "am zwanzig Juni"], a: 1, ex: "From 20: -ste; with am: -sten.", ex_fr: "À partir de 20 : -ste ; avec am : -sten." },
      { q: "Germany's national holiday is:", q_fr: "La fête nationale allemande est :", o: ["the 3rd of October", "the 14th of July", "the 1st of May"], o_fr: ["le 3 octobre", "le 14 juillet", "le 1er mai"], a: 0, ex: "Der Tag der Deutschen Einheit, on the 3rd of October.", ex_fr: "Der Tag der Deutschen Einheit, le 3 octobre." }
    ]
  },
  {
    id: 21, level: "A1", kind: "functional", icon: "party-popper",
    title: "Everyday German: inviting, accepting, declining", title_fr: "L'allemand de tous les jours : inviter, accepter, refuser",
    subtitle: "Suggest something, say yes with pleasure, say no without offending, and fix a time.", subtitle_fr: "Proposer quelque chose, accepter avec plaisir, refuser sans vexer, et fixer un rendez-vous.",
    body: `
<h2>Suggesting</h2>
<p><s-de>Hast du Lust, ins Kino zu gehen?</s-de> (Do you feel like going to the cinema?) · <s-de>Hast du Lust auf ein Eis?</s-de> · <s-de>Wollen wir zusammen kochen?</s-de> (Shall we cook together?) · <s-de>Wie wäre es mit Samstag?</s-de> (How about Saturday?) · <s-de>Ich lade dich zu meiner Party ein.</s-de> (I'm inviting you to my party.)</p>
<h2>Saying yes</h2>
<p><s-de>Ja, gern!</s-de> · <s-de>Gute Idee!</s-de> · <s-de>Super, ich komme gern!</s-de> · <s-de>Ich freue mich darauf!</s-de> (I'm looking forward to it!) · <s-de>Soll ich etwas mitbringen?</s-de> (Shall I bring something?)</p>
<h2>Saying no</h2>
<p>Germans often give a short reason, with <s-de>leider</s-de> (unfortunately): <s-de>Leider kann ich nicht, ich muss arbeiten.</s-de> · <s-de>Am Samstag habe ich leider keine Zeit.</s-de> · <s-de>Vielleicht ein anderes Mal?</s-de> (Maybe another time?) And the answer: <s-de>Schade!</s-de> (What a pity!) · <s-de>Kein Problem!</s-de></p>
<h2>Fixing the time and place</h2>
<p><s-de>Wann treffen wir uns?</s-de> · <s-de>Um wie viel Uhr?</s-de> · <s-de>Wo treffen wir uns?</s-de> · <s-de>Treffen wir uns um acht vor dem Kino?</s-de> · <s-de>Bis dann!</s-de> (See you then!)</p>
<div class="tip">If you're invited to someone's home, it's usual to bring something small (flowers, a bottle of wine, chocolates) and to arrive on time. And if you can't come after all, cancel early: <s-de>Es tut mir leid, ich muss leider absagen.</s-de> (I'm sorry, I have to cancel.)</div>
`,
    body_fr: `
<h2>Proposer</h2>
<p><s-de>Hast du Lust, ins Kino zu gehen?</s-de> (Ça te dit d'aller au cinéma ?) · <s-de>Hast du Lust auf ein Eis?</s-de> (Tu as envie d'une glace ?) · <s-de>Wollen wir zusammen kochen?</s-de> (On cuisine ensemble ?) · <s-de>Wie wäre es mit Samstag?</s-de> (Et si on disait samedi ?) · <s-de>Ich lade dich zu meiner Party ein.</s-de> (Je t'invite à ma fête.)</p>
<h2>Accepter</h2>
<p><s-de>Ja, gern!</s-de> · <s-de>Gute Idee!</s-de> · <s-de>Super, ich komme gern!</s-de> · <s-de>Ich freue mich darauf!</s-de> (J'ai hâte !) · <s-de>Soll ich etwas mitbringen?</s-de> (Je dois apporter quelque chose ?)</p>
<h2>Refuser</h2>
<p>On donne souvent une courte raison, avec <s-de>leider</s-de> (malheureusement) : <s-de>Leider kann ich nicht, ich muss arbeiten.</s-de> · <s-de>Am Samstag habe ich leider keine Zeit.</s-de> · <s-de>Vielleicht ein anderes Mal?</s-de> (Peut-être une autre fois ?) Et la réponse : <s-de>Schade!</s-de> (Dommage !) · <s-de>Kein Problem!</s-de></p>
<h2>Fixer l'heure et le lieu</h2>
<p><s-de>Wann treffen wir uns?</s-de> · <s-de>Um wie viel Uhr?</s-de> · <s-de>Wo treffen wir uns?</s-de> · <s-de>Treffen wir uns um acht vor dem Kino?</s-de> · <s-de>Bis dann!</s-de> (À tout à l'heure !)</p>
<div class="tip">Quand on est invité chez quelqu'un, on apporte en général un petit quelque chose (des fleurs, une bouteille de vin, des chocolats) et on arrive à l'heure : le « quart d'heure de politesse » n'est pas une habitude allemande. Et si tu ne peux finalement pas venir, préviens tôt : <s-de>Es tut mir leid, ich muss leider absagen.</s-de> (Je regrette, je dois annuler.)</div>
`,
    examples: [
      ["Hast du Lust, am Samstag wandern zu gehen?", "Do you feel like going hiking on Saturday?", "Ça te dit d'aller randonner samedi ?"],
      ["Gute Idee! Ich komme gern mit.", "Good idea! I'd love to come along.", "Bonne idée ! Je viens volontiers."],
      ["Leider kann ich nicht, ich muss arbeiten.", "Unfortunately I can't, I have to work.", "Malheureusement, je ne peux pas, je dois travailler."],
      ["Schade! Vielleicht ein anderes Mal.", "What a pity! Maybe another time.", "Dommage ! Une autre fois, peut-être."],
      ["Wie wäre es mit Sonntag um drei?", "How about Sunday at three?", "Et dimanche à quinze heures ?"],
      ["Soll ich einen Kuchen mitbringen?", "Shall I bring a cake?", "J'apporte un gâteau ?"],
      ["Ich freue mich auf deine Party!", "I'm looking forward to your party!", "J'ai hâte d'être à ta fête !"]
    ],
    quiz: [
      { q: "You want to suggest going to the cinema:", q_fr: "Tu veux proposer d'aller au cinéma :", o: ["Hast du Lust, ins Kino zu gehen?", "Hast du Zeit Kino?", "Du gehst ins Kino?"], a: 0, ex: "Hast du Lust, … zu + infinitive?", ex_fr: "Hast du Lust, … zu + infinitif ?" },
      { q: "A polite refusal:", q_fr: "Un refus poli :", o: ["Nein.", "Leider kann ich nicht, ich muss arbeiten.", "Ich will nicht."], a: 1, ex: "leider + a short reason.", ex_fr: "leider + une courte raison." },
      { q: "Your friend can't come. You say:", q_fr: "Ton ami ne peut pas venir. Tu dis :", o: ["Schade!", "Gute Idee!", "Viel Spaß!"], a: 0, ex: "Schade! = What a pity!", ex_fr: "Schade! = Dommage !" },
      { q: "“Shall I bring something?”", q_fr: "« J'apporte quelque chose ? »", o: ["Soll ich etwas mitbringen?", "Soll ich etwas bringen mit?", "Muss ich mitbringen etwas?"], a: 0, ex: "mitbringen stays together in the infinitive, at the end.", ex_fr: "mitbringen reste attaché à l'infinitif, à la fin." },
      { q: "“I'm looking forward to the party.”", q_fr: "« J'ai hâte d'être à la fête. »", o: ["Ich freue mich auf die Party.", "Ich freue mich über die Party morgen.", "Ich freue auf die Party."], a: 0, ex: "sich freuen auf = to look forward to (something in the future).", ex_fr: "sich freuen auf = se réjouir de (quelque chose à venir)." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    19: {
      gap: [["Ich habe Pizza ___. (essen)", "gegessen"], ["Wir ___ nach Wien gefahren.", "sind", "sein / haben"], ["Hast du am Samstag ___? (einkaufen)", "eingekauft"], ["Ich habe meine Oma ___. (besuchen)", "besucht"]],
      fix: [["Ich habe nach Berlin gefahren.", "Ich bin nach Berlin gefahren.", "Movement from one place to another: sein.", "Déplacement d'un lieu à un autre : sein."], ["Gestern ich habe Tennis gespielt.", "Gestern habe ich Tennis gespielt.", "The auxiliary stays in second place after Gestern.", "L'auxiliaire reste en deuxième position après Gestern."]],
      task: ["Write four sentences about last weekend, in the Perfekt, with haben and sein.", "Écris quatre phrases sur ton week-end dernier, au Perfekt, avec haben et sein.", "Am Samstag bin ich spät aufgestanden. Dann habe ich mit meiner Schwester eingekauft. Am Abend sind wir ins Kino gegangen. Am Sonntag habe ich gelesen und lange geschlafen."]
    },
    20: {
      gap: [["___ Sommer fahren wir ans Meer.", "Im", "in", "en"], ["___ Freitag habe ich frei.", "Am", "on", "le, ce"], ["Heute ist der ___ Oktober. (3.)", "dritte"], ["Ich habe am ___ März Geburtstag. (1.)", "ersten"]],
      fix: [["Am Juli fahren wir nach Italien.", "Im Juli fahren wir nach Italien.", "Months: im.", "Les mois : im."], ["Heute ist der dreite Mai.", "Heute ist der dritte Mai.", "3rd is irregular: dritte.", "3e est irrégulier : dritte."]],
      task: ["Give the dates of four important days for you (birthdays, holidays…).", "Donne les dates de quatre jours importants pour toi (anniversaires, fêtes…).", "Mein Geburtstag ist am zwölften März. Meine Mutter hat am ersten Juli Geburtstag. Am dritten Oktober ist in Deutschland ein Feiertag. Im Dezember feiern wir Weihnachten."]
    },
    21: {
      gap: [["Hast du ___, ins Kino zu gehen?", "Lust", "do you feel like", "envie"], ["___ kann ich nicht, ich muss arbeiten.", "Leider", "unfortunately", "malheureusement"], ["Du kannst nicht kommen? ___!", "Schade", "what a pity", "dommage"], ["Soll ich einen Salat ___?", "mitbringen", "to bring", "apporter"]],
      fix: [["Hast du Lust ins Kino gehen?", "Hast du Lust, ins Kino zu gehen?", "After Lust: zu + infinitive at the end.", "Après Lust : zu + infinitif à la fin."], ["Ich freue mich über deine Party morgen.", "Ich freue mich auf deine Party morgen.", "Something in the future: sich freuen auf.", "Quelque chose à venir : sich freuen auf."]],
      task: ["Invite a friend to do something on Saturday: suggest an activity, a time and a place (four sentences).", "Invite un ami à faire quelque chose samedi : propose une activité, une heure et un lieu (quatre phrases).", "Hallo Jonas! Hast du Lust, am Samstag wandern zu gehen? Wir können um zehn Uhr am Bahnhof losfahren. Ich bringe Brötchen mit. Sag mir bis Freitag Bescheid!"]
    }
  });

  W.ROLEPLAYS.push(
  { id: "wochenende", lesson: 19, level: "A1", icon: "history", partner: "Sabine", role: "a colleague", role_fr: "une collègue",
    title: "How was your weekend?", title_fr: "C'était bien, ton week-end ?",
    setting: "It's Monday morning. At the coffee machine, your colleague Sabine asks about your weekend.", setting_fr: "C'est lundi matin. Devant la machine à café, ta collègue Sabine te demande comment s'est passé ton week-end.",
    turns: [
      { p: "Guten Morgen! Na, wie war dein Wochenende?", en: "Good morning! So, how was your weekend?", fr: "Bonjour ! Alors, ton week-end ?" },
      { y: ["Sehr schön, danke! Ich bin nach Heidelberg gefahren.", "Sehr schön, danke! Ich habe nach Heidelberg gefahren.", "Sehr schön, danke! Ich bin nach Heidelberg gefahrt."], en: "Very nice, thanks! I went to Heidelberg.", fr: "Très bien, merci ! J'ai passé le week-end à Heidelberg.", why: "fahren: movement, so sein; participle gefahren.", why_fr: "fahren : déplacement, donc sein ; participe gefahren." },
      { p: "Oh, schön! Was hast du dort gemacht?", en: "Oh, nice! What did you do there?", fr: "Oh, chouette ! Qu'est-ce que tu as fait là-bas ?" },
      { y: ["Ich habe das Schloss besucht und viele Fotos gemacht.", "Ich habe das Schloss gebesucht und viele Fotos gemacht.", "Ich bin das Schloss besucht und viele Fotos gemacht."], en: "I visited the castle and took lots of photos.", fr: "J'ai visité le château et fait beaucoup de photos.", why: "besuchen takes haben and no ge-: besucht.", why_fr: "besuchen prend haben et pas de ge- : besucht." },
      { p: "Und am Sonntag?", en: "And on Sunday?", fr: "Et dimanche ?" },
      { y: ["Am Sonntag habe ich lange geschlafen und gelesen.", "Am Sonntag ich habe lange geschlafen und gelesen.", "Am Sonntag habe ich lange geschlaft und gelesen."], en: "On Sunday I slept in and read.", fr: "Dimanche, j'ai fait la grasse matinée et j'ai lu.", why: "habe second after Am Sonntag; schlafen → geschlafen.", why_fr: "habe en deuxième position après Am Sonntag ; schlafen → geschlafen." },
      { p: "Klingt super! Ich war leider krank und bin zu Hause geblieben.", en: "Sounds great! Unfortunately I was ill and stayed at home.", fr: "Super ! Moi, j'étais malade, malheureusement, et je suis restée à la maison." },
      { y: ["Oh, das tut mir leid! Geht es dir jetzt besser?", "Oh, das tut mir leid! Geht es dich jetzt besser?", "Oh, das tut mich leid! Geht es dir jetzt besser?"], en: "Oh, I'm sorry! Are you feeling better now?", fr: "Oh, ça me fait de la peine ! Tu vas mieux maintenant ?", why: "Fixed phrases with the dative: es tut mir leid, geht es dir besser?", why_fr: "Formules figées au datif : es tut mir leid, geht es dir besser ?" }
    ] },
  { id: "einladung", lesson: 21, level: "A1", icon: "party-popper", partner: "Moritz", role: "a friend", role_fr: "un ami",
    title: "An invitation to a barbecue", title_fr: "Une invitation à un barbecue",
    setting: "Your friend Moritz calls you: he's having a barbecue in his garden.", setting_fr: "Ton ami Moritz t'appelle : il organise un barbecue dans son jardin.",
    turns: [
      { p: "Hey! Am Samstag grillen wir bei mir im Garten. Hast du Lust zu kommen?", en: "Hey! On Saturday we're having a barbecue in my garden. Do you feel like coming?", fr: "Salut ! Samedi, on fait un barbecue chez moi dans le jardin. Ça te dit de venir ?" },
      { y: ["Ja, gern! Um wie viel Uhr?", "Ja, gern! Um wie viele Uhr?", "Ja, gern! Wie viel Uhr um?"], en: "Yes, I'd love to! What time?", fr: "Oui, avec plaisir ! À quelle heure ?", why: "Um wie viel Uhr? = at what time?", why_fr: "Um wie viel Uhr? = à quelle heure ?" },
      { p: "Ab sechs. Meine Schwester und ein paar Kollegen kommen auch.", en: "From six. My sister and a few colleagues are coming too.", fr: "À partir de six heures. Ma sœur et quelques collègues viennent aussi." },
      { y: ["Super! Soll ich etwas mitbringen?", "Super! Soll ich etwas bringen mit?", "Super! Soll ich mitbringen etwas?"], en: "Great! Shall I bring something?", fr: "Super ! J'apporte quelque chose ?", why: "After soll, the infinitive mitbringen goes to the end, in one piece.", why_fr: "Après soll, l'infinitif mitbringen part à la fin, en un seul morceau." },
      { p: "Vielleicht einen Salat? Ach, und am Sonntag machen wir eine Radtour. Kommst du auch mit?", en: "Maybe a salad? Oh, and on Sunday we're going on a bike ride. Are you coming too?", fr: "Peut-être une salade ? Ah, et dimanche, on fait une balade à vélo. Tu viens aussi ?" },
      { y: ["Am Sonntag kann ich leider nicht, ich besuche meine Eltern.", "Am Sonntag ich kann leider nicht, ich besuche meine Eltern.", "Am Sonntag kann ich leider nicht, ich besuche meinen Eltern."], en: "Unfortunately I can't on Sunday, I'm visiting my parents.", fr: "Dimanche, malheureusement, je ne peux pas, je rends visite à mes parents.", why: "kann second after Am Sonntag; die Eltern (plural) → meine Eltern.", why_fr: "kann en deuxième position après Am Sonntag ; die Eltern (pluriel) → meine Eltern." },
      { p: "Schade! Aber Samstag ist super. Also, bis Samstag!", en: "What a pity! But Saturday is great. So, see you on Saturday!", fr: "Dommage ! Mais samedi, c'est super. Alors, à samedi !" },
      { y: ["Bis Samstag! Ich freue mich darauf!", "Bis Samstag! Ich freue mich darüber!", "Bis Samstag! Ich freue darauf!"], en: "See you on Saturday! I'm looking forward to it!", fr: "À samedi ! J'ai hâte !", why: "Looking forward to something in the future: sich freuen auf → darauf.", why_fr: "Se réjouir de quelque chose à venir : sich freuen auf → darauf." }
    ] }
  );

  W.READINGS.push({
    id: "schwarzwald", level: "A1", icon: "trees", title: "Ein Wochenende im Schwarzwald", genre: "Personal story",
    intro: "Paula tells her friend about a weekend in the Black Forest: hiking, cake and a cuckoo clock. The Perfekt with haben and sein.",
    intro_fr: "Paula raconte à son amie un week-end en Forêt-Noire : randonnée, gâteau et horloge à coucou. Le Perfekt avec haben et sein.",
    paragraphs: [
      { de: "Liebe Merle, letztes Wochenende bin ich mit Jan in den Schwarzwald gefahren. Der Schwarzwald liegt im Südwesten von Deutschland, in Baden-Württemberg.", en: "Dear Merle, last weekend I went to the Black Forest with Jan. The Black Forest is in the south-west of Germany, in Baden-Württemberg.", fr: "Chère Merle, le week-end dernier, je suis allée en Forêt-Noire avec Jan. La Forêt-Noire se trouve dans le sud-ouest de l'Allemagne, dans le Bade-Wurtemberg." },
      { de: "Am Samstag sind wir früh aufgestanden und sind fünf Stunden gewandert. Der Wald war wunderschön! Am Mittag haben wir an einem See gegessen.", en: "On Saturday we got up early and hiked for five hours. The forest was beautiful! At lunchtime we ate by a lake.", fr: "Samedi, nous nous sommes levés tôt et nous avons marché cinq heures. La forêt était magnifique ! À midi, nous avons mangé au bord d'un lac." },
      { de: "Am Nachmittag haben wir in einem Café eine Schwarzwälder Kirschtorte probiert. Mit Schokolade, Kirschen und viel Sahne: sehr lecker, aber sehr groß!", en: "In the afternoon we tried a Black Forest gateau in a café. With chocolate, cherries and lots of cream: very tasty, but very big!", fr: "L'après-midi, nous avons goûté une forêt-noire dans un café. Avec du chocolat, des cerises et beaucoup de crème : très bon, mais énorme !" },
      { de: "Am Sonntag hat es geregnet. Wir sind in ein Museum gegangen und haben viele Kuckucksuhren gesehen. Jan hat eine kleine Kuckucksuhr gekauft. Jetzt hängt sie in unserer Küche! Und du, was hast du am Wochenende gemacht? Liebe Grüße, Paula", en: "On Sunday it rained. We went to a museum and saw lots of cuckoo clocks. Jan bought a little cuckoo clock. Now it's hanging in our kitchen! And you, what did you do at the weekend? Love, Paula", fr: "Dimanche, il a plu. Nous sommes allés dans un musée et nous avons vu beaucoup d'horloges à coucou. Jan a acheté une petite horloge à coucou. Maintenant, elle est accrochée dans notre cuisine ! Et toi, qu'as-tu fait ce week-end ? Bises, Paula" }
    ],
    glossary: { "Schwarzwald": ["the Black Forest", "la Forêt-Noire"], "Südwesten": ["the south-west", "le sud-ouest"], "liegt": ["is (situated)", "se trouve"], "gewandert": ["hiked", "randonné"], "wunderschön": ["beautiful", "magnifique"], "See": ["lake", "lac"], "Kirschtorte": ["cherry gateau", "gâteau aux cerises"], "Schokolade": ["chocolate", "chocolat"], "Kirschen": ["cherries", "cerises"], "Sahne": ["cream", "crème"], "geregnet": ["rained", "plu"], "Kuckucksuhren": ["cuckoo clocks", "horloges à coucou"], "Kuckucksuhr": ["cuckoo clock", "horloge à coucou"], "Grüße": ["greetings (Liebe Grüße: love)", "salutations (Liebe Grüße : bises)"] },
    questions: [
      { q: "Wo liegt der Schwarzwald?", o: ["Im Südwesten von Deutschland", "Im Norden von Deutschland", "In Österreich"], a: 0 },
      { q: "Was haben Paula und Jan am Samstag gemacht?", o: ["Sie sind gewandert.", "Sie sind geschwommen.", "Sie sind zu Hause geblieben."], a: 0 },
      { q: "Was haben sie im Café probiert?", o: ["Eine Schwarzwälder Kirschtorte", "Eine Pizza", "Einen Apfelkuchen"], a: 0 },
      { q: "Wie war das Wetter am Sonntag?", o: ["Es hat geregnet.", "Es war sehr heiß.", "Es hat geschneit."], a: 0 },
      { q: "Was hat Jan gekauft?", o: ["Eine kleine Kuckucksuhr", "Ein Bild", "Einen Kuchen"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-a1-7", unit: "a1-7", level: "A1", icon: "messages-square",
    title: "Und dein Wochenende?", title_fr: "Et ton week-end ?",
    context: "On Monday, Uwe and Johanna talk about their weekends during the lunch break.", context_fr: "Lundi, Uwe et Johanna parlent de leur week-end pendant la pause de midi.",
    words: [["das Spiel", "the match, the game", "le match, le jeu"], ["gewonnen", "won (gewinnen)", "gagné (gewinnen)"], ["das Stadion", "the stadium", "le stade"], ["anstrengend", "tiring, exhausting", "fatigant"], ["der Umzug", "the move (house)", "le déménagement"]],
    lines: [["Uwe", "Hallo Johanna! Wie war dein Wochenende?", "de-DE"], ["Johanna", "Anstrengend! Meine Schwester ist umgezogen, und ich habe ihr geholfen.", "de-DE"], ["Uwe", "Oh je. Den ganzen Samstag?", "de-DE"], ["Johanna", "Ja, von acht Uhr morgens bis zehn Uhr abends! Und am Sonntag habe ich nur geschlafen. Und du?", "de-DE"], ["Uwe", "Ich bin am Samstag mit meinem Sohn ins Stadion gegangen. Wir haben das Spiel gesehen.", "de-DE"], ["Johanna", "Und? Hat eure Mannschaft gewonnen?", "de-DE"], ["Uwe", "Ja, zwei zu eins! Danach haben wir in der Stadt gegessen.", "de-DE"], ["Johanna", "Toll! Und am Sonntag?", "de-DE"], ["Uwe", "Am Sonntag hatte meine Frau Geburtstag. Wir haben im Garten gefeiert, mit der ganzen Familie.", "de-DE"], ["Johanna", "Schön! Du hattest also ein besseres Wochenende als ich!", "de-DE"]],
    gist: ["Worüber sprechen Uwe und Johanna?", ["Über ihr Wochenende", "Über ihre Arbeit", "Über ihren Urlaub"]],
    detail: [["Was hat Johanna am Samstag gemacht?", ["Sie hat ihrer Schwester beim Umzug geholfen.", "Sie ist ins Stadion gegangen.", "Sie hat geschlafen."]], ["Wohin ist Uwe mit seinem Sohn gegangen?", ["Ins Stadion", "Ins Kino", "Ins Museum"]], ["Wie ist das Spiel ausgegangen?", ["Zwei zu eins", "Eins zu null", "Drei zu zwei"]], ["Was ist am Sonntag bei Uwe passiert?", ["Seine Frau hat Geburtstag gefeiert.", "Er ist umgezogen.", "Er hat gearbeitet."]]],
    decode: ["Meine Schwester ist umgezogen", "Hat eure Mannschaft gewonnen?"],
    tip: "In the Perfekt, the information comes at the end: Ich bin… ins Stadion… gegangen. Keep listening until the participle: it tells you what actually happened.", tip_fr: "Au Perfekt, l'information arrive à la fin : Ich bin… ins Stadion… gegangen. Écoute jusqu'au participe : c'est lui qui dit ce qui s'est vraiment passé."
  }]);

  W.PROMPTS.push({ id: "de-a1-7", level: "A1", q: "Was hast du letztes Wochenende gemacht? Erzähl!", en: "What did you do last weekend? Tell us!", fr: "Qu'as-tu fait le week-end dernier ? Raconte !", time: 75,
    phrases: ["Am Samstag bin ich…", "Ich habe … gemacht / gegessen / gesehen.", "Am Abend sind wir…", "Am Sonntag habe ich…", "Es war schön / langweilig / anstrengend."],
    model: "Am Samstag bin ich früh aufgestanden und habe auf dem Markt eingekauft. Am Nachmittag habe ich eine Freundin getroffen, und wir sind im Park spazieren gegangen. Am Abend haben wir zusammen gekocht und einen Film gesehen. Am Sonntag bin ich zu Hause geblieben und habe gelesen. Es war ein ruhiges, aber sehr schönes Wochenende." });

  W.WRITING_GUIDE["a1-7"] = { genre: "A reply to an invitation", genre_fr: "Une réponse à une invitation",
    plan: [["Thank them for the invitation.", "Remercie pour l'invitation."], ["Say yes, or no with a short reason.", "Dis oui, ou non avec une courte raison."], ["If yes, offer to bring something; if no, suggest another day.", "Si oui, propose d'apporter quelque chose ; si non, propose un autre jour."], ["Ask a practical question (time, place).", "Pose une question pratique (heure, lieu)."], ["A friendly ending.", "Une fin chaleureuse."]],
    marks: [["vielen Dank für die Einladung", "thanking for the invitation", "remercier pour l'invitation"], ["Ich komme sehr gern!", "accepting with pleasure", "accepter avec plaisir"], ["Soll ich einen Kuchen mitbringen?", "offering to bring something", "proposer d'apporter quelque chose"], ["Um wie viel Uhr", "asking the time", "demander l'heure"], ["am sechsten Juni", "a date: am + ordinal in -en", "une date : am + ordinal en -en"], ["Ich freue mich darauf!", "looking forward to it", "dire qu'on a hâte"]] };

  W.COURSE.push({ id: "a1-7", level: "A1", icon: "bike", title: "Free time and plans", title_fr: "Loisirs et projets",
    intro: "In this last A1 unit, you'll talk about your free time, tell what you did with the Perfekt (ich habe gegessen, ich bin gefahren), give months and dates (am dritten Oktober), and invite people, accept and decline politely.",
    intro_fr: "Dans cette dernière unité du niveau A1, tu vas parler de tes loisirs, raconter ce que tu as fait au Perfekt (ich habe gegessen, ich bin gefahren), donner les mois et les dates (am dritten Oktober), et inviter, accepter et refuser poliment.",
    can: ["Talk about your hobbies and free time", "Say what you did with the Perfekt (haben or sein)", "Give months, seasons and dates", "Invite someone, accept and decline politely"],
    can_fr: ["Parler de tes loisirs", "Raconter ce que tu as fait au Perfekt (haben ou sein)", "Donner les mois, les saisons et les dates", "Inviter, accepter et refuser poliment"],
    lessons: [19, 20, 21], vocab: ["freizeitDE", "monateDE", "einladungDE"], reading: "schwarzwald", prompt: "de-a1-7",
    writing: { task: "Your friend Svenja invites you to her birthday party. Reply (30-50 words): thank her, say yes, offer to bring something and ask a question.", task_fr: "Ton amie Svenja t'invite à sa fête d'anniversaire. Réponds-lui (30 à 50 mots) : remercie-la, accepte, propose d'apporter quelque chose et pose une question.", words: "30-50",
      tips: ["Liebe Svenja,", "vielen Dank für die Einladung!", "Ich komme sehr gern!", "Soll ich … mitbringen?", "Ich freue mich darauf!"],
      checklist: ["I thanked her for the invitation", "I accepted (or declined with a reason)", "With soll / kann, the infinitive is at the end", "I wrote the date correctly (am sechsten Juni)", "I stayed between 30 and 50 words"],
      checklist_fr: ["J'ai remercié pour l'invitation", "J'ai accepté (ou refusé avec une raison)", "Avec soll / kann, l'infinitif est à la fin", "J'ai bien écrit la date (am sechsten Juni)", "J'ai écrit entre 30 et 50 mots"],
      model: "Liebe Svenja,\n\nvielen Dank für die Einladung! Ich komme sehr gern! Soll ich einen Kuchen mitbringen? Ich backe gern. Um wie viel Uhr beginnt die Party am sechsten Juni? Und darf ich meinen Freund mitbringen? Ich freue mich darauf!\n\nBis bald\nCamille" } });
})();
