/* Cours d'allemand, unité C2-9 « One language, many Germans / Une langue, plusieurs allemands » : les mots
   d'Autriche et de Suisse (Jänner, Paradeiser, Erdäpfel, Velo, parkieren, Gipfeli), la grammaire régionale et
   familière (dem Peter sein Auto, ich bin gesessen, der Mann, wo…, am Arbeiten sein, wegen + datif), se
   débrouiller en Autriche, en Suisse et face aux dialectes. Personnages fictifs, prénoms allemands.
   Faits vérifiables seulement : l'allemand est langue officielle en Allemagne, en Autriche, en Suisse, au
   Liechtenstein et au Luxembourg, ainsi que dans des parties de la Belgique et de l'Italie ; langue
   pluricentrique ; « Österreichisches Wörterbuch » depuis 1951 ; lors de l'adhésion de l'Autriche à l'UE en 1995,
   un protocole reconnaît 23 termes alimentaires autrichiens (dont Erdäpfel, Topfen) ; en Suisse alémanique, presque
   tout le monde parle dialecte au quotidien, l'allemand standard sert surtout à l'écrit et dans les situations
   formelles (diglossie) ; pas de ß en Suisse (Strasse) ; « ich bin gesessen » en Autriche, en Suisse et dans le
   sud de l'Allemagne. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "austriazismenDE", icon: "store", title: "Austrian German", title_fr: "L'allemand d'Autriche", level: "C2", words: [
    ["der Jänner (österr.)", "January (Austria)", "janvier (Autriche)", "Im Jänner ist es in Wien oft sehr kalt."],
    ["der Paradeiser, - (österr.)", "the tomato (Austria)", "la tomate (Autriche)", "Am Markt gibt es frische Paradeiser."],
    ["der Erdapfel, ¨- (österr.)", "the potato (Austria)", "la pomme de terre (Autriche)", "Zum Schnitzel gibt es Erdäpfelsalat."],
    ["die Marille, -n (österr.)", "the apricot (Austria)", "l'abricot (Autriche)", "Die Wachau ist für ihre Marillen bekannt."],
    ["der Topfen (österr.)", "quark, curd cheese (Austria)", "le fromage blanc (Autriche)", "Für den Strudel brauchst du Topfen."],
    ["das Schlagobers (österr.)", "whipped cream (Austria)", "la crème fouettée (Autriche)", "Einen Kaffee mit Schlagobers, bitte."],
    ["das Sackerl, -n (österr.)", "the (shopping) bag (Austria)", "le sachet, le sac (Autriche)", "Brauchen Sie ein Sackerl?"],
    ["heuer (österr., süddt.)", "this year", "cette année", "Heuer fahren wir nicht in den Urlaub."],
    ["die Matura (österr., schweiz.)", "the school-leaving exam (Austria, Switzerland)", "le baccalauréat (Autriche, Suisse)", "Nach der Matura will sie in Graz studieren."],
    ["die Jause, -n (österr.)", "the snack (Austria)", "le casse-croûte (Autriche)", "Am Nachmittag gibt es eine kleine Jause."],
    ["das Beisl, -n (österr.)", "the pub, the small restaurant (Austria)", "le bistrot (Autriche)", "Wir essen heute in einem kleinen Beisl."],
    ["das Kipferl, -n (österr.)", "the crescent roll (Austria)", "le croissant (Autriche)", "Zum Frühstück gibt es ein Kipferl."],
    ["die Semmel, -n (österr., süddt.)", "the bread roll (Austria, Bavaria)", "le petit pain (Autriche, Bavière)", "Zwei Semmeln, bitte."],
    ["die Stiege, -n (österr.)", "the staircase (Austria)", "l'escalier (Autriche)", "Die Wohnung liegt auf Stiege 2."],
    ["der Kasten, ¨- (österr.)", "the wardrobe (Austria)", "l'armoire (Autriche)", "Häng die Jacke in den Kasten."],
    ["der Polster, - (österr.)", "the pillow (Austria)", "l'oreiller (Autriche)", "Im Hotel waren die Polster sehr weich."]
  ] },
  { id: "helvetismenDE", icon: "map", title: "Swiss German and varieties", title_fr: "L'allemand de Suisse et les variétés", level: "C2", words: [
    ["das Velo, -s (schweiz.)", "the bicycle (Switzerland)", "le vélo (Suisse)", "In Zürich fahren viele mit dem Velo zur Arbeit."],
    ["parkieren (schweiz.)", "to park (Switzerland)", "garer (Suisse)", "Hier darf man nicht parkieren."],
    ["grillieren (schweiz.)", "to grill, to barbecue (Switzerland)", "faire des grillades (Suisse)", "Am Wochenende grillieren wir am See."],
    ["das Billett, -e (schweiz.)", "the ticket (Switzerland)", "le billet (Suisse)", "Das Billett kaufst du am Automaten."],
    ["das Gipfeli, - (schweiz.)", "the croissant (Switzerland)", "le croissant (Suisse)", "Zum Kaffee nehme ich ein Gipfeli."],
    ["das Rüebli, - (schweiz.)", "the carrot (Switzerland)", "la carotte (Suisse)", "Die Rüeblitorte ist eine Spezialität aus dem Aargau."],
    ["das Znüni (schweiz.)", "the mid-morning snack (Switzerland)", "la collation de dix heures (Suisse)", "Um zehn Uhr gibt es Znüni."],
    ["der Zmittag (schweiz.)", "lunch (Switzerland)", "le déjeuner (Suisse)", "Zum Zmittag gehen wir in die Kantine."],
    ["der Abwart, -e (schweiz.)", "the caretaker (Switzerland)", "le concierge (Suisse)", "Melde den Schaden beim Abwart."],
    ["der Estrich (schweiz.)", "the attic (Switzerland)", "le grenier (Suisse)", "Die alten Möbel stehen im Estrich."],
    ["die Badi, -s (schweiz.)", "the outdoor pool (Switzerland)", "la piscine en plein air (Suisse)", "Im Sommer treffen wir uns in der Badi."],
    ["das Schweizerdeutsch", "Swiss German (the dialects)", "le suisse allemand", "Im Büro wird Schweizerdeutsch gesprochen."],
    ["plurizentrisch", "pluricentric", "pluricentrique", "Deutsch ist eine plurizentrische Sprache."],
    ["die Varietät, -en", "the variety (of a language)", "la variété (d'une langue)", "Das österreichische Deutsch ist eine eigene Varietät."],
    ["der Austriazismus, Austriazismen", "the Austrian expression", "l'autrichianisme", "„Paradeiser“ ist ein Austriazismus."],
    ["der Helvetismus, Helvetismen", "the Swiss expression", "l'helvétisme", "„Velo“ ist ein Helvetismus."]
  ] });

  W.LESSONS.push(
  {
    id: 157, level: "C2", icon: "store",
    title: "Paradeiser, Velo, Gipfeli: the German of Austria and Switzerland", title_fr: "Paradeiser, Velo, Gipfeli : l'allemand d'Autriche et de Suisse",
    subtitle: "Three standard varieties: different words, genders, spellings and even some grammar.", subtitle_fr: "Trois variétés standard : des mots, des genres, une orthographe et même une grammaire en partie différents.",
    body: `
<h2>A pluricentric language</h2>
<p>German has several equal standard varieties: those of Germany, Austria and Switzerland. Austrian or Swiss words are not dialect but correct standard German in their country.</p>
<h2>Words</h2>
<table>
<tr><th>Germany</th><th>Austria</th><th>Switzerland</th></tr>
<tr><td><s-de>Januar</s-de></td><td><s-de>Jänner</s-de></td><td><s-de>Januar</s-de></td></tr>
<tr><td><s-de>Tomate</s-de></td><td><s-de>Paradeiser</s-de></td><td><s-de>Tomate</s-de></td></tr>
<tr><td><s-de>Kartoffel</s-de></td><td><s-de>Erdapfel</s-de></td><td><s-de>Kartoffel</s-de></td></tr>
<tr><td><s-de>Sahne</s-de></td><td><s-de>Schlagobers</s-de></td><td><s-de>Rahm</s-de></td></tr>
<tr><td><s-de>Fahrrad</s-de></td><td><s-de>Fahrrad</s-de></td><td><s-de>Velo</s-de></td></tr>
<tr><td><s-de>Fahrkarte</s-de></td><td><s-de>Fahrkarte</s-de></td><td><s-de>Billett</s-de></td></tr>
<tr><td><s-de>Abitur</s-de></td><td><s-de>Matura</s-de></td><td><s-de>Matura</s-de></td></tr>
</table>
<h2>Gender, spelling, grammar</h2>
<p>Gender: <s-de>das Tram</s-de> (Switzerland), <s-de>das E-Mail</s-de> (Austria, Switzerland, also southern Germany). Spelling: no <s-de>ß</s-de> in Switzerland (<s-de>Strasse</s-de>). Grammar: <s-de>ich bin gesessen, gestanden, gelegen</s-de> in Austria, Switzerland and southern Germany, <s-de>ich habe gesessen</s-de> in the north. Swiss verbs often end in <s-de>-ieren</s-de>: <s-de>parkieren, grillieren</s-de>.</p>
<div class="tip">You don't have to use these words yourself, but you should understand them, especially in texts from Austria and Switzerland. Using a local word now and then (an Austrian <s-de>Sackerl</s-de> at the market) is usually appreciated; imitating a whole dialect is not.</div>
`,
    body_fr: `
<h2>Une langue pluricentrique</h2>
<p>L'allemand a plusieurs variétés standard d'égale valeur : celles d'Allemagne, d'Autriche et de Suisse. Les mots autrichiens ou suisses ne sont pas du dialecte, mais de l'allemand standard correct dans leur pays, un peu comme le « septante » de la Suisse romande et de la Belgique.</p>
<h2>Les mots</h2>
<table>
<tr><th>Allemagne</th><th>Autriche</th><th>Suisse</th></tr>
<tr><td><s-de>Januar</s-de></td><td><s-de>Jänner</s-de></td><td><s-de>Januar</s-de></td></tr>
<tr><td><s-de>Tomate</s-de></td><td><s-de>Paradeiser</s-de></td><td><s-de>Tomate</s-de></td></tr>
<tr><td><s-de>Kartoffel</s-de></td><td><s-de>Erdapfel</s-de></td><td><s-de>Kartoffel</s-de></td></tr>
<tr><td><s-de>Sahne</s-de></td><td><s-de>Schlagobers</s-de></td><td><s-de>Rahm</s-de></td></tr>
<tr><td><s-de>Fahrrad</s-de></td><td><s-de>Fahrrad</s-de></td><td><s-de>Velo</s-de></td></tr>
<tr><td><s-de>Fahrkarte</s-de></td><td><s-de>Fahrkarte</s-de></td><td><s-de>Billett</s-de></td></tr>
<tr><td><s-de>Abitur</s-de></td><td><s-de>Matura</s-de></td><td><s-de>Matura</s-de></td></tr>
</table>
<h2>Genre, orthographe, grammaire</h2>
<p>Le genre : <s-de>das Tram</s-de> (Suisse), <s-de>das E-Mail</s-de> (Autriche, Suisse, et aussi sud de l'Allemagne). L'orthographe : pas de <s-de>ß</s-de> en Suisse (<s-de>Strasse</s-de>). La grammaire : <s-de>ich bin gesessen, gestanden, gelegen</s-de> en Autriche, en Suisse et dans le sud de l'Allemagne, <s-de>ich habe gesessen</s-de> dans le nord. Les verbes suisses se terminent souvent en <s-de>-ieren</s-de> : <s-de>parkieren, grillieren</s-de>.</p>
<div class="tip">Rien ne t'oblige à employer ces mots toi-même, mais tu dois les comprendre, surtout dans les textes autrichiens et suisses. Employer de temps en temps un mot local (un <s-de>Sackerl</s-de> autrichien au marché) est en général apprécié ; imiter tout un dialecte ne l'est pas.</div>
`,
    examples: [
      ["Im Jänner ist es in Wien oft sehr kalt.", "In January it's often very cold in Vienna.", "En janvier, il fait souvent très froid à Vienne."],
      ["Ein Kilo Erdäpfel und ein paar Paradeiser, bitte.", "A kilo of potatoes and a few tomatoes, please.", "Un kilo de pommes de terre et quelques tomates, s'il vous plaît."],
      ["In Zürich fahren viele mit dem Velo zur Arbeit.", "In Zurich, many people cycle to work.", "À Zurich, beaucoup vont au travail à vélo."],
      ["Hier darf man nicht parkieren.", "You can't park here.", "On n'a pas le droit de se garer ici."],
      ["Ich bin den ganzen Tag im Büro gesessen.", "I sat in the office all day.", "J'ai passé toute la journée sur ma chaise, au bureau."],
      ["Das Billett kaufst du am Automaten.", "You buy the ticket at the machine.", "Le billet, tu l'achètes au distributeur."],
      ["In der Schweiz schreibt man „Strasse“ ohne ß.", "In Switzerland, “Strasse” is written without ß.", "En Suisse, on écrit « Strasse » sans ß."]
    ],
    quiz: [
      { q: "In Austria, “Tomaten” are…", q_fr: "En Autriche, les « Tomaten » sont des…", o: ["Paradeiser", "Marillen", "Erdäpfel"], a: 0, ex: "Marillen = apricots, Erdäpfel = potatoes.", ex_fr: "Marillen = abricots, Erdäpfel = pommes de terre." },
      { q: "A Swiss “Velo” is…", q_fr: "Un « Velo » suisse est…", o: ["a bicycle", "a car", "a tram"], o_fr: ["un vélo", "une voiture", "un tramway"], a: 0, ex: "Velo = Fahrrad.", ex_fr: "Velo = Fahrrad." },
      { q: "“Ich bin gesessen” is…", q_fr: "« Ich bin gesessen » est…", o: ["standard in Austria, Switzerland and southern Germany", "always wrong", "only used in Hamburg"], o_fr: ["standard en Autriche, en Suisse et dans le sud de l'Allemagne", "toujours faux", "employé seulement à Hambourg"], a: 0, ex: "In the north: ich habe gesessen.", ex_fr: "Dans le nord : ich habe gesessen." },
      { q: "Which letter is not used in Switzerland?", q_fr: "Quelle lettre n'est pas utilisée en Suisse ?", o: ["ß", "ü", "ä"], a: 0, ex: "Strasse, not Straße.", ex_fr: "Strasse, pas Straße." },
      { q: "German is called “plurizentrisch” because…", q_fr: "On dit que l'allemand est « plurizentrisch » parce que…", o: ["it has several equal standard varieties", "it has many dialects only", "it is spoken in many cities"], o_fr: ["il a plusieurs variétés standard d'égale valeur", "il a seulement beaucoup de dialectes", "on le parle dans beaucoup de villes"], a: 0, ex: "Germany, Austria, Switzerland.", ex_fr: "Allemagne, Autriche, Suisse." }
    ]
  },
  {
    id: 158, level: "C2", icon: "map-pin",
    title: "Dem Peter sein Auto: regional and colloquial grammar", title_fr: "Dem Peter sein Auto : la grammaire régionale et familière",
    subtitle: "Recognise the non-standard structures you'll hear every day, and know when they're acceptable.", subtitle_fr: "Reconnaître les structures non standard qu'on entend tous les jours, et savoir quand elles sont acceptables.",
    body: `
<h2>Very common in speech</h2>
<table>
<tr><td><s-de>dem Peter sein Auto</s-de></td><td>= <s-de>Peters Auto</s-de> (possessive dative)</td></tr>
<tr><td><s-de>wegen dem Wetter</s-de></td><td>= <s-de>wegen des Wetters</s-de></td></tr>
<tr><td><s-de>Ich bin am Arbeiten.</s-de></td><td>= <s-de>Ich arbeite gerade.</s-de></td></tr>
<tr><td><s-de>Du brauchst nicht kommen.</s-de></td><td>= <s-de>Du brauchst nicht zu kommen.</s-de></td></tr>
<tr><td><s-de>der Peter, die Anna</s-de></td><td>article with first names (south, colloquial)</td></tr>
</table>
<h2>Regional</h2>
<table>
<tr><td><s-de>der Mann, wo da steht</s-de></td><td>= <s-de>der Mann, der da steht</s-de> (south)</td></tr>
<tr><td><s-de>Ich tu grad kochen.</s-de></td><td>= <s-de>Ich koche gerade.</s-de> (tun + infinitive)</td></tr>
<tr><td><s-de>Ich bin gesessen.</s-de></td><td>standard in Austria, Switzerland and the south</td></tr>
</table>
<h2>Spoken forms</h2>
<p><s-de>Ich hab's.</s-de> · <s-de>Haste mal Zeit?</s-de> (hast du) · <s-de>nix</s-de> (nichts) · <s-de>'n Kaffee</s-de> (einen) · north German <s-de>nee</s-de>, <s-de>Moin</s-de>; Berlin <s-de>icke, wat</s-de>.</p>
<div class="tip">These forms are not “mistakes” in conversation; they are part of everyday German. Recognise them, enjoy them, and use standard forms in formal writing. The only exception: <s-de>ich bin gesessen</s-de> is perfectly standard in Austria and Switzerland.</div>
`,
    body_fr: `
<h2>Très courant à l'oral</h2>
<table>
<tr><td><s-de>dem Peter sein Auto</s-de></td><td>= <s-de>Peters Auto</s-de> (datif possessif, comme « la voiture à Peter »)</td></tr>
<tr><td><s-de>wegen dem Wetter</s-de></td><td>= <s-de>wegen des Wetters</s-de></td></tr>
<tr><td><s-de>Ich bin am Arbeiten.</s-de></td><td>= <s-de>Ich arbeite gerade.</s-de> (je suis en train de travailler)</td></tr>
<tr><td><s-de>Du brauchst nicht kommen.</s-de></td><td>= <s-de>Du brauchst nicht zu kommen.</s-de></td></tr>
<tr><td><s-de>der Peter, die Anna</s-de></td><td>article devant les prénoms (sud, familier)</td></tr>
</table>
<h2>Régional</h2>
<table>
<tr><td><s-de>der Mann, wo da steht</s-de></td><td>= <s-de>der Mann, der da steht</s-de> (sud)</td></tr>
<tr><td><s-de>Ich tu grad kochen.</s-de></td><td>= <s-de>Ich koche gerade.</s-de> (tun + infinitif)</td></tr>
<tr><td><s-de>Ich bin gesessen.</s-de></td><td>standard en Autriche, en Suisse et dans le sud</td></tr>
</table>
<h2>Formes orales</h2>
<p><s-de>Ich hab's.</s-de> · <s-de>Haste mal Zeit?</s-de> (hast du) · <s-de>nix</s-de> (nichts) · <s-de>'n Kaffee</s-de> (einen) · nord de l'Allemagne <s-de>nee</s-de>, <s-de>Moin</s-de> ; Berlin <s-de>icke, wat</s-de>.</p>
<div class="tip">Ces formes ne sont pas des « fautes » dans la conversation : elles font partie de l'allemand de tous les jours. Reconnais-les, apprécie-les, et emploie les formes standard à l'écrit soutenu. Seule exception : <s-de>ich bin gesessen</s-de> est parfaitement standard en Autriche et en Suisse.</div>
`,
    examples: [
      ["Das ist dem Peter sein Auto.", "That's Peter's car.", "C'est la voiture à Peter."],
      ["Wegen dem Wetter fällt das Fest aus.", "Because of the weather, the party is cancelled.", "À cause du temps, la fête est annulée."],
      ["Ich bin gerade am Arbeiten, ruf später an.", "I'm working right now, call later.", "Je suis en train de travailler, rappelle plus tard."],
      ["Du brauchst nicht kommen, wir schaffen das allein.", "You don't need to come, we'll manage on our own.", "Pas besoin de venir, on s'en sort seuls."],
      ["Der Mann, wo da drüben steht, ist mein Onkel.", "The man standing over there is my uncle.", "L'homme là-bas, c'est mon oncle."],
      ["Haste mal 'n Moment Zeit?", "Got a moment?", "T'as une minute ?"],
      ["Nee, da ist nix mehr zu machen.", "Nope, there's nothing more to be done.", "Non, il n'y a plus rien à faire."]
    ],
    quiz: [
      { q: "Standard German for “dem Peter sein Auto”:", q_fr: "En allemand standard, « dem Peter sein Auto » :", o: ["Peters Auto", "Peter sein Auto", "dem Auto von Peters"], a: 0, ex: "Genitive -s with names.", ex_fr: "Génitif en -s avec les prénoms." },
      { q: "“Ich bin am Arbeiten” means…", q_fr: "« Ich bin am Arbeiten » veut dire…", o: ["I'm working right now.", "I'm at work tomorrow.", "I've finished working."], o_fr: ["Je suis en train de travailler.", "Je serai au travail demain.", "J'ai fini de travailler."], a: 0, ex: "The colloquial progressive.", ex_fr: "La forme progressive familière." },
      { q: "In formal writing, “wegen dem Wetter” becomes…", q_fr: "À l'écrit soutenu, « wegen dem Wetter » devient…", o: ["wegen des Wetters", "wegen das Wetter", "wegen dem Wetters"], a: 0, ex: "wegen + genitive.", ex_fr: "wegen + génitif." },
      { q: "“der Mann, wo da steht” is typical of…", q_fr: "« der Mann, wo da steht » est typique…", o: ["southern German speech", "formal written German", "Swiss legal texts"], o_fr: ["de l'oral du sud", "de l'écrit soutenu", "des textes juridiques suisses"], a: 0, ex: "Standard: der Mann, der da steht.", ex_fr: "Standard : der Mann, der da steht." },
      { q: "Which form is standard in Austria?", q_fr: "Quelle forme est standard en Autriche ?", o: ["Ich bin gesessen.", "Ich tu sitzen.", "Ich bin am Sitzen gewesen worden."], a: 0, ex: "sein for posture verbs in the south.", ex_fr: "sein avec les verbes de position dans le sud." }
    ]
  },
  {
    id: 159, level: "C2", kind: "functional", icon: "map",
    title: "Everyday German: getting by in Austria, Switzerland and among dialect speakers", title_fr: "L'allemand de tous les jours : se débrouiller en Autriche, en Suisse et face aux dialectes",
    subtitle: "Local greetings, polite ways to ask for clarification, and when to adapt.", subtitle_fr: "Les salutations locales, les façons polies de demander des précisions, et quand s'adapter.",
    body: `
<h2>Greetings and goodbyes</h2>
<table>
<tr><td>Austria, Bavaria</td><td><s-de>Grüß Gott! · Servus! · Auf Wiederschauen!</s-de></td></tr>
<tr><td>Switzerland</td><td><s-de>Grüezi! · Hoi! · Merci vielmal! · Ade!</s-de></td></tr>
<tr><td>Northern Germany</td><td><s-de>Moin! · Tschüss!</s-de></td></tr>
</table>
<h2>When you don't understand</h2>
<p><s-de>Entschuldigung, das habe ich nicht ganz verstanden. Können Sie das noch einmal sagen?</s-de> · <s-de>Was bedeutet …?</s-de> · <s-de>Sagt man das hier so?</s-de></p>
<p>In Switzerland, people usually switch to standard German for you: <s-de>Wäre es in Ordnung, wenn wir Hochdeutsch sprechen?</s-de> Ask kindly, never as a demand.</p>
<h2>Adapting</h2>
<p>Using local greetings and a few local words is appreciated: <s-de>Grüezi</s-de> in Zurich, a <s-de>Semmel</s-de> in Vienna. Imitating a dialect, on the other hand, can sound mocking.</p>
<div class="tip">Many Swiss and Austrians are used to Germans who expect “their” German to be the norm. Showing that you know there are several standards (and asking about local words with curiosity) is a great way to make friends.</div>
`,
    body_fr: `
<h2>Saluer et prendre congé</h2>
<table>
<tr><td>Autriche, Bavière</td><td><s-de>Grüß Gott! · Servus! · Auf Wiederschauen!</s-de></td></tr>
<tr><td>Suisse</td><td><s-de>Grüezi! · Hoi! · Merci vielmal! · Ade!</s-de></td></tr>
<tr><td>Nord de l'Allemagne</td><td><s-de>Moin! · Tschüss!</s-de></td></tr>
</table>
<h2>Quand on ne comprend pas</h2>
<p><s-de>Entschuldigung, das habe ich nicht ganz verstanden. Können Sie das noch einmal sagen?</s-de> · <s-de>Was bedeutet …?</s-de> · <s-de>Sagt man das hier so?</s-de> (C'est comme ça qu'on dit ici ?)</p>
<p>En Suisse, on passe en général à l'allemand standard pour toi : <s-de>Wäre es in Ordnung, wenn wir Hochdeutsch sprechen?</s-de> Demande-le gentiment, jamais comme une exigence.</p>
<h2>S'adapter</h2>
<p>Employer les salutations locales et quelques mots du pays est apprécié : <s-de>Grüezi</s-de> à Zurich, une <s-de>Semmel</s-de> à Vienne. Imiter un dialecte, en revanche, peut paraître moqueur.</p>
<div class="tip">Beaucoup de Suisses et d'Autrichiens ont l'habitude d'Allemands qui considèrent « leur » allemand comme la norme. Montrer qu'on sait qu'il existe plusieurs standards (et s'intéresser avec curiosité aux mots locaux) est un excellent moyen de se faire des amis.</div>
`,
    examples: [
      ["Grüß Gott! Was darf's sein?", "Good day! What can I get you?", "Bonjour ! Qu'est-ce que je vous sers ?"],
      ["Grüezi! Haben Sie gut hergefunden?", "Hello! Did you find your way here all right?", "Bonjour ! Vous avez trouvé facilement ?"],
      ["Entschuldigung, das habe ich nicht ganz verstanden. Können Sie das noch einmal sagen?", "Sorry, I didn't quite understand. Could you say that again?", "Pardon, je n'ai pas bien compris. Vous pouvez répéter ?"],
      ["Was bedeutet „Sackerl“?", "What does “Sackerl” mean?", "Que veut dire « Sackerl » ?"],
      ["Sagt man das hier so?", "Is that what people say here?", "C'est comme ça qu'on dit ici ?"],
      ["Wäre es in Ordnung, wenn wir Hochdeutsch sprechen?", "Would it be all right if we spoke standard German?", "Est-ce que ça irait si on parlait allemand standard ?"],
      ["Merci vielmal und ade!", "Thanks a lot and goodbye!", "Merci beaucoup et au revoir !"]
    ],
    quiz: [
      { q: "A typical Swiss greeting:", q_fr: "Une salutation typiquement suisse :", o: ["Grüezi!", "Moin!", "Servus!"], a: 0, ex: "Moin = north, Servus = Austria and Bavaria.", ex_fr: "Moin = nord, Servus = Autriche et Bavière." },
      { q: "“Auf Wiederschauen!” is typical of…", q_fr: "« Auf Wiederschauen! » est typique de…", o: ["Austria and southern Germany", "Hamburg", "Zurich only"], o_fr: ["l'Autriche et du sud de l'Allemagne", "Hambourg", "Zurich seulement"], a: 0, ex: "North: Auf Wiedersehen, Tschüss.", ex_fr: "Nord : Auf Wiedersehen, Tschüss." },
      { q: "A polite way to ask for standard German:", q_fr: "Une façon polie de demander l'allemand standard :", o: ["Wäre es in Ordnung, wenn wir Hochdeutsch sprechen?", "Sprechen Sie endlich richtig!", "Ihr Deutsch ist falsch."], a: 0, ex: "Konjunktiv II, as a question.", ex_fr: "Konjunktiv II, sous forme de question." },
      { q: "“Merci vielmal” means…", q_fr: "« Merci vielmal » veut dire…", o: ["thank you very much (Switzerland)", "goodbye (Austria)", "excuse me (Bavaria)"], o_fr: ["merci beaucoup (Suisse)", "au revoir (Autriche)", "pardon (Bavière)"], a: 0, ex: "Swiss.", ex_fr: "Suisse." },
      { q: "What can sound mocking?", q_fr: "Qu'est-ce qui peut paraître moqueur ?", o: ["Imitating a whole dialect", "Saying Grüezi in Zurich", "Asking what a word means"], o_fr: ["Imiter tout un dialecte", "Dire Grüezi à Zurich", "Demander ce que veut dire un mot"], a: 0, ex: "Local words: yes; imitation: careful.", ex_fr: "Les mots locaux : oui ; l'imitation : prudence." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    157: {
      gap: [["Im ___ ist es in Wien oft sehr kalt. (österreichisch für Januar)", "Jänner"], ["Ein Kilo ___ und ein paar Paradeiser, bitte. (österreichisch für Kartoffeln)", "Erdäpfel"], ["In Zürich fährt sie mit dem ___ zur Arbeit. (schweizerisch für Fahrrad)", "Velo"], ["Ich ___ den ganzen Tag im Büro gesessen. (österreichisch)", "bin"]],
      fix: [["In der Schweiz schreibt man „Straße“.", "In der Schweiz schreibt man „Strasse“.", "No ß in Switzerland.", "Pas de ß en Suisse."], ["„Paradeiser“ ist ein Dialektwort und kein Standarddeutsch.", "„Paradeiser“ ist österreichisches Standarddeutsch.", "Austrian standard German, not dialect.", "Allemand standard d'Autriche, pas du dialecte."]],
      task: ["Translate this shopping list into Austrian German: Kartoffeln, Tomaten, Aprikosen, Sahne, Quark, eine Tüte.", "Traduis cette liste de courses en allemand d'Autriche : Kartoffeln, Tomaten, Aprikosen, Sahne, Quark, eine Tüte.", "Erdäpfel, Paradeiser, Marillen, Schlagobers, Topfen, ein Sackerl."]
    },
    158: {
      gap: [["Standard: Das ist ___ Auto. (dem Peter sein Auto)", "Peters"], ["Standard: wegen ___ Wetters (wegen dem Wetter)", "des"], ["Standard: Du brauchst nicht ___ kommen.", "zu"], ["Standard: der Mann, ___ da steht (der Mann, wo da steht)", "der"]],
      fix: [["Wegen dem Regen wurde das Spiel abgesagt. (in einem Zeitungsbericht)", "Wegen des Regens wurde das Spiel abgesagt.", "Formal writing: wegen + genitive.", "Écrit soutenu : wegen + génitif."], ["Der Mann, wo da steht, ist der Direktor. (in einem Brief)", "Der Mann, der dort steht, ist der Direktor.", "Standard relative pronoun: der.", "Pronom relatif standard : der."]],
      task: ["Rewrite this message in standard written German: Du, ich bin grad am Kochen. Wegen dem Regen brauchst du nicht kommen. Dem Peter sein Auto ist eh kaputt.", "Réécris ce message en allemand écrit standard : Du, ich bin grad am Kochen. Wegen dem Regen brauchst du nicht kommen. Dem Peter sein Auto ist eh kaputt.", "Ich koche gerade. Wegen des Regens brauchst du nicht zu kommen. Peters Auto ist ohnehin kaputt."]
    },
    159: {
      gap: [["In Zürich sagt man zur Begrüßung: „___!“", "Grüezi"], ["In Wien verabschiedet man sich mit „Auf ___!“", "Wiederschauen"], ["___ es in Ordnung, wenn wir Hochdeutsch sprechen?", "Wäre"], ["Entschuldigung, was ___ „Sackerl“?", "bedeutet"]],
      fix: [["Sprechen Sie bitte richtiges Deutsch!", "Wäre es in Ordnung, wenn wir Hochdeutsch sprechen?", "Ask kindly; Swiss German is not “wrong” German.", "Demande gentiment ; le suisse allemand n'est pas un allemand « faux »."], ["Ich wäre es in Ordnung, wenn …", "Wäre es in Ordnung, wenn …", "Fixed phrase: Wäre es in Ordnung, wenn…", "Tournure figée : Wäre es in Ordnung, wenn…"]],
      task: ["You've just started a job in Zurich. Write four sentences you could say on your first day: a greeting, a request for standard German, a question about a local word, and a thank-you.", "Tu viens de commencer un travail à Zurich. Écris quatre phrases que tu pourrais dire le premier jour : une salutation, une demande d'allemand standard, une question sur un mot local et un remerciement.", "Grüezi miteinander! Wäre es in Ordnung, wenn wir in Sitzungen Hochdeutsch sprechen? Was bedeutet eigentlich „Znüni“? Merci vielmal für den herzlichen Empfang!"]
    }
  });

  W.ROLEPLAYS.push(
  { id: "naschmarkt", lesson: 157, level: "C2", icon: "store", partner: "Herr Hofer", role: "a market trader in Vienna", role_fr: "un marchand du marché à Vienne",
    title: "At a Viennese market", title_fr: "Au marché à Vienne",
    setting: "You're shopping at a market in Vienna. Herr Hofer, the trader, speaks Austrian German.", setting_fr: "Tu fais tes courses sur un marché de Vienne. Herr Hofer, le marchand, parle l'allemand d'Autriche.",
    turns: [
      { p: "Grüß Gott! Was darf's sein?", en: "Good day! What can I get you?", fr: "Bonjour ! Qu'est-ce que je vous sers ?" },
      { y: ["Grüß Gott! Ich hätte gern ein Kilo Erdäpfel und ein paar Paradeiser.", "Grüß Gott! Ich hätte gern einen Kilo Erdäpfel und ein paar Paradeiser.", "Grüß Gott! Ich hätte gern ein Kilo Erdäpfel und ein paar Paradeisern."], en: "Good day! I'd like a kilo of potatoes and a few tomatoes.", fr: "Bonjour ! Je voudrais un kilo de pommes de terre et quelques tomates.", why: "das Kilo → ein Kilo; plural die Paradeiser (no -n).", why_fr: "das Kilo → ein Kilo ; pluriel die Paradeiser (sans -n)." },
      { p: "Gern. Die Marillen sind heuer besonders süß. Möchten Sie welche?", en: "Certainly. The apricots are especially sweet this year. Would you like some?", fr: "Volontiers. Les abricots sont particulièrement sucrés cette année. Vous en voulez ?" },
      { y: ["Ja, gern. „Heuer“ heißt „dieses Jahr“, oder?", "Ja, gern. „Heuer“ heißt „diesem Jahr“, oder?", "Ja, gern. „Heuer“ heißt „dieses Jahres“, oder?"], en: "Yes, please. “Heuer” means “this year”, doesn't it?", fr: "Oui, volontiers. « Heuer » veut dire « cette année », non ?", why: "Accusative of time: dieses Jahr.", why_fr: "Accusatif de temps : dieses Jahr." },
      { p: "Genau. Brauchen Sie ein Sackerl?", en: "Exactly. Do you need a bag?", fr: "Exactement. Il vous faut un sac ?" },
      { y: ["Nein danke, ich habe eine Tasche dabei.", "Nein danke, ich habe einen Tasche dabei.", "Nein danke, ich habe eine Tasche dabei hat."], en: "No thanks, I've got a bag with me.", fr: "Non merci, j'ai un sac avec moi.", why: "die Tasche → eine Tasche.", why_fr: "die Tasche → eine Tasche." },
      { p: "Und vielleicht noch Topfen für einen Strudel?", en: "And maybe some Topfen for a strudel?", fr: "Et peut-être du Topfen pour un strudel ?" },
      { y: ["Gute Idee. Topfen ist doch das, was man in Deutschland Quark nennt, nicht wahr?", "Gute Idee. Topfen ist doch das, das man in Deutschland Quark nennt, nicht wahr?", "Gute Idee. Topfen ist doch das, was man in Deutschland Quark nennen, nicht wahr?"], en: "Good idea. Topfen is what they call Quark in Germany, isn't it?", fr: "Bonne idée. Le Topfen, c'est bien ce qu'on appelle Quark en Allemagne, non ?", why: "das, was …; man + singular verb.", why_fr: "das, was … ; man + verbe au singulier." },
      { p: "Richtig. Das macht dann elf Euro achtzig.", en: "Right. That comes to eleven euros eighty.", fr: "Exact. Ça fait onze euros quatre-vingts." },
      { y: ["Hier sind zwölf Euro. Stimmt so, und auf Wiederschauen!", "Hier ist zwölf Euro. Stimmt so, und auf Wiederschauen!", "Hier sind zwölf Euros. Stimmt so, und auf Wiederschauen!"], en: "Here's twelve euros. Keep the change, and goodbye!", fr: "Voici douze euros. Gardez la monnaie, et au revoir !", why: "Plural verb sind; Euro has no -s plural.", why_fr: "Verbe au pluriel sind ; Euro ne prend pas de -s." }
    ] },
  { id: "zuerich", lesson: 159, level: "C2", icon: "map", partner: "Frau Meier", role: "a new colleague in Zurich", role_fr: "une nouvelle collègue à Zurich",
    title: "First day in Zurich", title_fr: "Premier jour à Zurich",
    setting: "It's your first day at a company in Zurich. Your colleague Frau Meier welcomes you.", setting_fr: "C'est ton premier jour dans une entreprise à Zurich. Ta collègue Frau Meier t'accueille.",
    turns: [
      { p: "Grüezi! Haben Sie gut hergefunden?", en: "Hello! Did you find your way here all right?", fr: "Bonjour ! Vous avez trouvé facilement ?" },
      { y: ["Grüezi! Ja, danke. Mit dem Tram ging es ganz schnell.", "Grüezi! Ja, danke. Mit das Tram ging es ganz schnell.", "Grüezi! Ja, danke. Mit dem Tram ging es ganz schneller."], en: "Hello! Yes, thanks. It was very quick by tram.", fr: "Bonjour ! Oui, merci. En tram, c'était très rapide.", why: "In Switzerland das Tram; mit + dative: dem Tram.", why_fr: "En Suisse das Tram ; mit + datif : dem Tram." },
      { p: "Möchten Sie einen Kaffee? Und vielleicht ein Gipfeli?", en: "Would you like a coffee? And maybe a croissant?", fr: "Vous voulez un café ? Et peut-être un croissant ?" },
      { y: ["Gern, merci! Ein Gipfeli ist ein Croissant, oder?", "Gern, merci! Ein Gipfeli ist einen Croissant, oder?", "Gern, merci! Ein Gipfeli sind ein Croissant, oder?"], en: "Yes please, thanks! A Gipfeli is a croissant, isn't it?", fr: "Volontiers, merci ! Un Gipfeli, c'est un croissant, non ?", why: "Nominative after sein.", why_fr: "Nominatif après sein." },
      { p: "Genau. Am Nachmittag sprechen die Kollegen übrigens oft Mundart. Verstehen Sie Schweizerdeutsch?", en: "Exactly. By the way, in the afternoon the colleagues often speak dialect. Do you understand Swiss German?", fr: "Exactement. L'après-midi, les collègues parlent d'ailleurs souvent dialecte. Vous comprenez le suisse allemand ?" },
      { y: ["Leider nur wenig. Wäre es in Ordnung, wenn ich manchmal um Hochdeutsch bitte?", "Leider nur wenig. Wäre es in Ordnung, wenn ich manchmal für Hochdeutsch bitte?", "Leider nur wenig. Wäre es in Ordnung, wenn ich manchmal um Hochdeutsch bitten?"], en: "Only a little, unfortunately. Would it be all right if I sometimes asked for standard German?", fr: "Malheureusement très peu. Est-ce que ça irait si je demandais parfois l'allemand standard ?", why: "um etwas bitten; wenn: verb at the end.", why_fr: "um etwas bitten ; wenn : verbe à la fin." },
      { p: "Natürlich, das ist kein Problem. Viele wechseln dann ganz automatisch.", en: "Of course, no problem. Many people switch quite automatically.", fr: "Bien sûr, aucun problème. Beaucoup changent alors tout naturellement." },
      { y: ["Das ist sehr freundlich. Ich möchte aber auch ein paar Ausdrücke lernen, damit ich mich schneller einlebe.", "Das ist sehr freundlich. Ich möchte aber auch ein paar Ausdrücke lernen, damit ich schneller mich einlebe.", "Das ist sehr freundlich. Ich möchte aber auch ein paar Ausdrücke lernen, damit ich mich schneller einleben."], en: "That's very kind. But I'd also like to learn a few expressions so that I settle in faster.", fr: "C'est très gentil. Mais j'aimerais aussi apprendre quelques expressions pour m'intégrer plus vite.", why: "damit: verb at the end; reflexive pronoun early.", why_fr: "damit : verbe à la fin ; pronom réfléchi en début de proposition." },
      { p: "Dann fangen wir gleich an: „Merci vielmal“ heißt „vielen Dank“.", en: "Then let's start right away: “Merci vielmal” means “thank you very much”.", fr: "Alors commençons tout de suite : « Merci vielmal » veut dire « merci beaucoup »." },
      { y: ["Merci vielmal für den Tipp! Den merke ich mir.", "Merci vielmal für dem Tipp! Den merke ich mir.", "Merci vielmal für den Tipp! Der merke ich mir."], en: "Thanks a lot for the tip! I'll remember that one.", fr: "Merci beaucoup pour l'astuce ! Je la retiens.", why: "für + accusative; den Tipp → den.", why_fr: "für + accusatif ; den Tipp → den." }
    ] }
  );

  W.READINGS.push({
    id: "plurizentrisch", level: "C2", icon: "map", title: "Ein Deutsch, drei Standards", genre: "Feature article",
    intro: "Paradeiser in Vienna, Velo in Zurich, Tomaten and Fahrrad in Hamburg: why there is more than one correct German.",
    intro_fr: "Paradeiser à Vienne, Velo à Zurich, Tomaten et Fahrrad à Hambourg : pourquoi il existe plus d'un allemand correct.",
    paragraphs: [
      { de: "Deutsch ist nicht nur in Deutschland Amtssprache, sondern auch in Österreich, der Schweiz, Liechtenstein und Luxemburg, außerdem in Teilen Belgiens und Italiens. Sprachwissenschaftler sprechen deshalb von einer plurizentrischen Sprache: Es gibt nicht ein einziges richtiges Deutsch, sondern mehrere gleichberechtigte Standardvarietäten.", en: "German is an official language not only in Germany but also in Austria, Switzerland, Liechtenstein and Luxembourg, as well as in parts of Belgium and Italy. Linguists therefore speak of a pluricentric language: there is not a single correct German, but several equal standard varieties.", fr: "L'allemand est langue officielle non seulement en Allemagne, mais aussi en Autriche, en Suisse, au Liechtenstein et au Luxembourg, ainsi que dans certaines parties de la Belgique et de l'Italie. Les linguistes parlent donc d'une langue pluricentrique : il n'existe pas un seul allemand correct, mais plusieurs variétés standard d'égale valeur." },
      { de: "Am deutlichsten zeigt sich das im Wortschatz. Wer in Wien Paradeiser und Marillen kauft, kauft dasselbe wie in Hamburg Tomaten und Aprikosen. In Österreich gilt seit 1951 das „Österreichische Wörterbuch“ als maßgebliches Nachschlagewerk. Beim Beitritt Österreichs zur Europäischen Union 1995 wurde in einem Protokoll sogar festgehalten, dass 23 österreichische Bezeichnungen für Lebensmittel, darunter „Erdäpfel“ und „Topfen“, gleichberechtigt verwendet werden dürfen.", en: "The clearest differences are in vocabulary. Someone who buys Paradeiser and Marillen in Vienna is buying the same thing as someone buying Tomaten and Aprikosen in Hamburg. In Austria, the “Österreichisches Wörterbuch” has been the authoritative reference work since 1951. When Austria joined the European Union in 1995, a protocol even stated that 23 Austrian terms for foodstuffs, including “Erdäpfel” and “Topfen”, may be used on an equal footing.", fr: "C'est dans le vocabulaire que cela se voit le mieux. Qui achète des Paradeiser et des Marillen à Vienne achète la même chose qu'à Hambourg des Tomaten et des Aprikosen. En Autriche, l'« Österreichisches Wörterbuch » fait autorité depuis 1951. Lors de l'adhésion de l'Autriche à l'Union européenne en 1995, un protocole a même établi que 23 termes autrichiens désignant des aliments, dont « Erdäpfel » et « Topfen », peuvent être employés à égalité." },
      { de: "In der Schweiz ist die Lage besonders. Im Alltag sprechen fast alle Deutschschweizer Mundart, und zwar unabhängig von Alter und Bildung; das Hochdeutsche dient vor allem als Schriftsprache und in formellen Situationen. Fachleute nennen diese Arbeitsteilung Diglossie. Das ß wird in der Schweiz seit Langem nicht mehr verwendet: Man schreibt „Strasse“ statt „Straße“.", en: "The situation in Switzerland is special. In everyday life, almost all German-speaking Swiss speak dialect, regardless of age and education; standard German serves mainly as the written language and in formal situations. Experts call this division of labour diglossia. The ß has not been used in Switzerland for a long time: people write “Strasse” instead of “Straße”.", fr: "En Suisse, la situation est particulière. Au quotidien, presque tous les Suisses alémaniques parlent dialecte, quels que soient leur âge et leur niveau d'études ; l'allemand standard sert surtout de langue écrite et dans les situations formelles. Les spécialistes appellent ce partage des rôles la diglossie. Le ß n'est plus utilisé en Suisse depuis longtemps : on écrit « Strasse » au lieu de « Straße »." },
      { de: "Auch die Grammatik variiert. In Österreich, der Schweiz und Süddeutschland sagt man „Ich bin gesessen“, im Norden „Ich habe gesessen“; beide Formen sind korrekt. Wer Deutsch auf hohem Niveau beherrschen will, muss nicht jede Variante selbst verwenden. Er sollte sie aber erkennen und wissen, dass „anders“ nicht „falsch“ bedeutet.", en: "Grammar varies too. In Austria, Switzerland and southern Germany people say “Ich bin gesessen”, in the north “Ich habe gesessen”; both are correct. Anyone who wants to master German at a high level doesn't have to use every variant. But they should recognise them and know that “different” doesn't mean “wrong”.", fr: "La grammaire varie aussi. En Autriche, en Suisse et dans le sud de l'Allemagne, on dit « Ich bin gesessen », dans le nord « Ich habe gesessen » ; les deux formes sont correctes. Pour maîtriser l'allemand à un haut niveau, il n'est pas nécessaire d'employer soi-même chaque variante. Mais il faut les reconnaître et savoir que « différent » ne veut pas dire « faux »." }
    ],
    glossary: { "Amtssprache": ["official language", "langue officielle"], "Liechtenstein": ["Liechtenstein", "Liechtenstein"], "Luxemburg": ["Luxembourg", "Luxembourg"], "Belgiens": ["of Belgium", "de la Belgique"], "Italiens": ["of Italy", "de l'Italie"], "plurizentrischen": ["pluricentric", "pluricentrique"], "gleichberechtigte": ["equal", "d'égale valeur"], "Standardvarietäten": ["standard varieties", "variétés standard"], "Paradeiser": ["tomatoes (Austria)", "tomates (Autriche)"], "Marillen": ["apricots (Austria)", "abricots (Autriche)"], "Aprikosen": ["apricots", "abricots"], "maßgebliches": ["authoritative", "qui fait autorité"], "Nachschlagewerk": ["reference work", "ouvrage de référence"], "Beitritt": ["accession, joining", "adhésion"], "Protokoll": ["protocol", "protocole"], "festgehalten": ["laid down, recorded", "établi, consigné"], "Bezeichnungen": ["terms, names", "termes, désignations"], "Lebensmittel": ["food", "aliments"], "Erdäpfel": ["potatoes (Austria)", "pommes de terre (Autriche)"], "Topfen": ["quark (Austria)", "fromage blanc (Autriche)"], "Deutschschweizer": ["German-speaking Swiss", "Suisses alémaniques"], "Mundart": ["dialect", "dialecte"], "Schriftsprache": ["written language", "langue écrite"], "Arbeitsteilung": ["division of labour", "répartition des rôles"], "Diglossie": ["diglossia", "diglossie"], "variiert": ["varies", "varie"], "Variante": ["variant", "variante"] },
    questions: [
      { q: "Warum nennt man Deutsch eine plurizentrische Sprache?", o: ["Weil es mehrere gleichberechtigte Standardvarietäten gibt", "Weil es viele Dialekte hat", "Weil es in Europa gesprochen wird"], a: 0 },
      { q: "Was wurde beim EU-Beitritt Österreichs 1995 festgehalten?", o: ["Dass 23 österreichische Bezeichnungen für Lebensmittel gleichberechtigt verwendet werden dürfen", "Dass Österreich nur noch deutsche Wörter verwenden muss", "Dass Englisch Amtssprache wird"], a: 0 },
      { q: "Wann sprechen Deutschschweizer vor allem Hochdeutsch?", o: ["Beim Schreiben und in formellen Situationen", "Immer zu Hause", "Nur im Urlaub"], a: 0 },
      { q: "Wie schreibt man in der Schweiz „Straße“?", o: ["Strasse", "Strase", "Straße"], a: 0 },
      { q: "Was soll man laut Text wissen?", o: ["Dass „anders“ nicht „falsch“ bedeutet", "Dass nur das deutsche Deutsch korrekt ist", "Dass man alle Varianten selbst verwenden muss"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-c2-9", unit: "c2-9", level: "C2", icon: "radio",
    title: "Ein Kölner in Zürich", title_fr: "Un Colonais à Zurich",
    context: "A radio interview with Jonas Weber, who moved from Cologne to Zurich three years ago.", context_fr: "Une interview radio avec Jonas Weber, qui a quitté Cologne pour Zurich il y a trois ans.",
    words: [["die Sitzung, -en", "the meeting", "la réunion"], ["gemischt", "mixed", "mitigé"], ["die Anbiederung", "ingratiation, currying favour", "la flagornerie, le fait de chercher à plaire"], ["einstreuen", "to sprinkle in", "glisser, parsemer"], ["entspannt", "relaxed", "détendu"]],
    lines: [["Moderatorin", "Herr Weber, Sie sind vor drei Jahren von Köln nach Zürich gezogen. Was hat Sie am meisten überrascht?", "de-DE"], ["Jonas Weber", "Dass ich am Anfang fast nichts verstanden habe, obwohl alle Deutsch sprachen. Im Büro wird Schweizerdeutsch gesprochen; nur in Sitzungen mit Gästen wechselt man ins Hochdeutsche.", "de-DE"], ["Moderatorin", "Und die Wörter?", "de-DE"], ["Jonas Weber", "Da gab es einige Überraschungen. Mein Kollege sagte, er habe sein Velo vor dem Haus parkiert. Ich musste erst einmal nachfragen, was ein Velo ist.", "de-DE"], ["Moderatorin", "Haben Sie versucht, selbst Schweizerdeutsch zu sprechen?", "de-DE"], ["Jonas Weber", "Einmal, auf einer Party. Die Reaktionen waren eher gemischt. Viele finden es charmant, wenn man es versucht; manche empfinden es aber als Anbiederung. Inzwischen bleibe ich beim Hochdeutschen und streue ab und zu ein „merci“ ein.", "de-DE"], ["Moderatorin", "Und fühlen Sie sich heute zu Hause?", "de-DE"], ["Jonas Weber", "Ja. Seit ich verstehe, dass Schweizerdeutsch kein schlechtes Deutsch ist, sondern eine eigene Varietät, bin ich viel entspannter. Und mein Znüni lasse ich mir nicht mehr nehmen.", "de-DE"]],
    gist: ["Worum geht es im Gespräch?", ["Um die Erfahrungen eines Deutschen in der Schweiz", "Um eine Reise nach Köln", "Um einen Sprachkurs für Schweizer"]],
    detail: [["Wann wechselt man in seinem Büro ins Hochdeutsche?", ["In Sitzungen mit Gästen", "Jeden Montag", "Nie"]], ["Was ist ein Velo?", ["Ein Fahrrad", "Ein Auto", "Ein Bus"]], ["Wie reagieren manche, wenn Deutsche Schweizerdeutsch sprechen?", ["Sie empfinden es als Anbiederung.", "Alle sind begeistert.", "Niemand bemerkt es."]], ["Was hat Herrn Weber geholfen, entspannter zu werden?", ["Zu verstehen, dass Schweizerdeutsch eine eigene Varietät ist", "Ein Umzug nach Bern", "Ein neuer Job"]]],
    decode: ["Mein Kollege sagte, er habe sein Velo vor dem Haus parkiert", "Seit ich verstehe, dass Schweizerdeutsch kein schlechtes Deutsch ist, sondern eine eigene Varietät"],
    tip: "Jonas Weber reports his colleague's words in the Konjunktiv I (er habe sein Velo parkiert) even in a relaxed interview: a sign of an educated speaker. Notice also the Swiss words he has adopted (Velo, merci, Znüni): mentioning them is part of his story.", tip_fr: "Jonas Weber rapporte les paroles de son collègue au Konjunktiv I (er habe sein Velo parkiert) même dans une interview détendue : signe d'un locuteur cultivé. Remarque aussi les mots suisses qu'il a adoptés (Velo, merci, Znüni) : les mentionner fait partie de son histoire."
  }]);

  W.PROMPTS.push({ id: "de-c2-9", level: "C2", q: "Halte einen Vortrag (etwa drei bis vier Minuten): „Dialekt: Heimat oder Hindernis?“ Gehe auf die Situation in Deutschland, Österreich und der Schweiz ein und nimm Stellung.", en: "Give a talk (about three to four minutes): “Dialect: a sense of home or an obstacle?” Discuss the situation in Germany, Austria and Switzerland and take a position.", fr: "Fais un exposé (environ trois à quatre minutes) : « Le dialecte : un ancrage ou un obstacle ? » Évoque la situation en Allemagne, en Autriche et en Suisse et prends position.", time: 240,
    phrases: ["Lange galt der Dialekt als…", "In der Schweiz ist die Lage besonders: …", "Dieser Einwand ist nicht von der Hand zu weisen.", "Nicht …, sondern…", "Letzten Endes…"],
    model: "Lange galt der Dialekt in Deutschland als Zeichen mangelnder Bildung. Wer Karriere machen wollte, sollte „ordentliches“ Hochdeutsch sprechen. Doch dieses Bild ist zu einfach. In der Schweiz ist die Lage besonders: Dort sprechen fast alle Deutschschweizer im Alltag Mundart, und zwar unabhängig von Bildung und Beruf; Hochdeutsch dient vor allem als Schriftsprache. Niemand würde dort behaupten, Dialekt sei ein Hindernis. In Österreich wiederum gehören Wörter wie „Paradeiser“ oder „Jänner“ sogar zur Standardsprache. Natürlich kann ein starker Dialekt im Beruf auch Nachteile haben, etwa wenn Kunden aus anderen Regionen nichts verstehen. Dieser Einwand ist nicht von der Hand zu weisen. Die Lösung liegt meines Erachtens nicht darin, Dialekte abzuschaffen, sondern darin, zwischen Dialekt und Standardsprache wechseln zu können. Wer das beherrscht, ist nicht weniger gebildet, sondern im Gegenteil besonders sprachgewandt. Letzten Endes ist Dialekt beides: ein Stück Heimat und ein Werkzeug, das man bewusst einsetzen sollte." });

  W.WRITING_GUIDE["c2-9"] = { genre: "An essay (C2)", genre_fr: "Un essai (C2)",
    plan: [["A familiar phrase and your thesis.", "Une phrase familière et ta thèse."], ["Dialect is not “wrong” German.", "Le dialecte n'est pas un allemand « faux »."], ["Culture and identity.", "Culture et identité."], ["The objection of disadvantage, and your answer.", "L'objection du désavantage, et ta réponse."], ["Concrete proposals and a conclusion.", "Des propositions concrètes et une conclusion."]],
    marks: [["Ich bin der Auffassung", "the thesis", "la thèse"], ["ist ein Dialekt keine fehlerhafte Form des Hochdeutschen, sondern", "nicht …, sondern", "nicht …, sondern"], ["Hinzu kommt, dass", "the second argument", "le deuxième argument"], ["Dieser Einwand ist nicht von der Hand zu weisen", "a concession with an idiom", "une concession avec une expression idiomatique"], ["Wie könnte das konkret aussehen?", "a question leading to proposals", "une question qui mène aux propositions"], ["nicht provinzieller, sondern reicher", "an antithesis in the conclusion", "une antithèse dans la conclusion"]] };

  /* Atelier de langue : champs allemands d'abord, puis anglais et français (voir localize.js). */
  W.LEXIS = W.LEXIS || {};
  W.LEXIS["c2-9"] = {
    colloc: [
      ["in den Dialekt verfallen", "to lapse into dialect", "retomber dans son dialecte", "Zu Hause verfällt sie sofort in ihren Dialekt.", "verfällt", ["verlässt", "verfolgt"]],
      ["sich einen Akzent abgewöhnen", "to lose an accent", "perdre un accent", "Er hat sich seinen Akzent nie abgewöhnt.", "abgewöhnt", ["abgewiesen", "abgewendet"]],
      ["sich verständigen", "to communicate, to make oneself understood", "se comprendre, communiquer", "Wir konnten uns problemlos auf Hochdeutsch verständigen.", "verständigen", ["verständlich", "verstecken"]],
      ["sich einleben", "to settle in", "s'acclimater, s'intégrer", "Sie hat sich in Zürich schnell eingelebt.", "eingelebt", ["eingeladen", "eingelegt"]],
      ["unter Heimweh leiden", "to suffer from homesickness", "avoir le mal du pays", "Anfangs litt er unter Heimweh.", "litt", ["lag", "ließ"]],
      ["mit einem Akzent sprechen", "to speak with an accent", "parler avec un accent", "Sie spricht mit einem leichten Wiener Akzent.", "spricht", ["sagt", "erzählt"]],
      ["jemandem auf die Sprünge helfen", "to help someone along", "mettre quelqu'un sur la voie", "Die Kollegin half mir beim Schweizerdeutsch auf die Sprünge.", "half", ["gab", "machte"]],
      ["sich in einer Sprache zurechtfinden", "to find one's way around a language", "s'y retrouver dans une langue", "Nach einem Jahr fand sie sich im Schweizerdeutschen gut zurecht.", "fand", ["nahm", "gab"]],
      ["einen Ausdruck aufschnappen", "to pick up an expression", "attraper une expression au vol", "In Wien habe ich viele neue Ausdrücke aufgeschnappt.", "aufgeschnappt", ["aufgeschnallt", "aufgeschlagen"]],
      ["sich an den Klang gewöhnen", "to get used to the sound", "s'habituer à la sonorité", "Man gewöhnt sich schnell an den Klang des Dialekts.", "gewöhnt", ["gewährt", "gewinnt"]]
    ],
    wf: [
      ["Sie spricht mit einem leichten ___ Akzent. (WIEN)", "Wiener"],
      ["„Paradeiser“ ist ein typischer ___. (ÖSTERREICH)", "Austriazismus"],
      ["Das österreichische Deutsch ist eine eigene ___. (VARIIEREN)", "Varietät"],
      ["Sie spricht ___, wenn sie mit ihrer Familie telefoniert. (SCHWEIZ)", "Schweizerdeutsch"],
      ["Viele Wörter sind nur ___ verbreitet. (REGION)", "regional"],
      ["Die ___ der Sprachen in der Schweiz ist beeindruckend. (VIEL)", "Vielfalt"],
      ["Er ist zweisprachig ___. (AUFWACHSEN)", "aufgewachsen"],
      ["Ihre ___ verrät, dass sie aus Wien kommt. (AUSSPRECHEN)", "Aussprache"]
    ],
    kwt: [
      ["Dieses Jahr fahren wir nicht in den Urlaub. (österreichisch)", "HEUER", "___ in den Urlaub.", "Heuer fahren wir nicht"],
      ["Das ist Peters Auto. (umgangssprachlich)", "SEIN", "Das ist ___.", "dem Peter sein Auto"],
      ["Ich arbeite gerade. (umgangssprachlich)", "AM", "Ich bin ___.", "gerade am Arbeiten"],
      ["Wegen dem Regen fällt das Fest aus. (Standard)", "REGENS", "___ fällt das Fest aus.", "Wegen des Regens"],
      ["Am Anfang vermisste er seine Heimat sehr.", "HEIMWEH", "Am Anfang ___.", "litt er sehr unter Heimweh|hatte er großes Heimweh"],
      ["Wir konnten miteinander auf Hochdeutsch sprechen.", "VERSTÄNDIGEN", "Wir konnten ___.", "uns auf Hochdeutsch verständigen"]
    ],
    idioms: [
      ["Das ist mir Wurst.", "Das ist mir egal", "I couldn't care less.", "Je m'en fiche.", "Ob wir Erdäpfel oder Kartoffeln sagen, ist mir Wurst.", "ist mir Wurst"],
      ["seinen Senf dazugeben", "ungefragt seine Meinung äußern", "to put one's oar in", "mettre son grain de sel", "Mein Onkel muss immer seinen Senf dazugeben.", "seinen Senf dazugeben"],
      ["eine Extrawurst verlangen", "eine Sonderbehandlung wollen", "to want special treatment", "vouloir un traitement de faveur", "Er verlangt immer eine Extrawurst.", "eine Extrawurst"],
      ["Alles in Butter!", "Alles in Ordnung", "Everything's fine!", "Tout baigne !", "Keine Sorge, alles in Butter!", "alles in Butter"],
      ["Das ist nicht mein Bier.", "Das geht mich nichts an", "That's not my problem.", "Ce ne sont pas mes oignons.", "Wie die Firma das löst, ist nicht mein Bier.", "nicht mein Bier"],
      ["Tomaten auf den Augen haben", "etwas Offensichtliches nicht sehen", "to be blind to the obvious", "ne pas voir ce qui crève les yeux", "Hast du Tomaten auf den Augen? Das Schild steht doch da!", "Tomaten auf den Augen"],
      ["die beleidigte Leberwurst spielen", "übertrieben gekränkt reagieren", "to sulk", "faire la tête", "Jetzt spiel nicht die beleidigte Leberwurst!", "die beleidigte Leberwurst"],
      ["sich freuen wie ein Schnitzel", "sich sehr freuen", "to be over the moon", "être aux anges", "Als sie die Zusage bekam, freute sie sich wie ein Schnitzel.", "freute sie sich wie ein Schnitzel"]
    ]
  };

  W.COURSE.push({ id: "c2-9", level: "C2", icon: "map", title: "One language, many Germans", title_fr: "Une langue, plusieurs allemands",
    intro: "German doesn't sound the same in Hamburg, Vienna and Zurich, and that's not a problem but a richness. In this unit, you'll learn the most important words and forms of Austrian and Swiss standard German (Jänner, Paradeiser, Velo, ich bin gesessen), the regional and colloquial grammar you hear every day (dem Peter sein Auto, ich bin am Arbeiten), and how to get by politely among dialect speakers. You'll also read why German has not one but three standards.",
    intro_fr: "L'allemand ne sonne pas pareil à Hambourg, à Vienne et à Zurich, et ce n'est pas un problème mais une richesse. Dans cette unité, tu vas apprendre les mots et formes les plus importants de l'allemand standard d'Autriche et de Suisse (Jänner, Paradeiser, Velo, ich bin gesessen), la grammaire régionale et familière qu'on entend tous les jours (dem Peter sein Auto, ich bin am Arbeiten), et la façon de te débrouiller poliment parmi les locuteurs de dialectes. Tu liras aussi pourquoi l'allemand n'a pas un, mais trois standards.",
    can: ["Understand Austrian and Swiss standard German words and forms", "Recognise regional and colloquial grammar and convert it to standard German", "Greet, ask for clarification and adapt politely in different regions", "Talk about dialects, varieties and identity", "Write an essay on dialect and school (C2)"],
    can_fr: ["Comprendre les mots et formes de l'allemand standard d'Autriche et de Suisse", "Reconnaître la grammaire régionale et familière et la transposer en allemand standard", "Saluer, demander des précisions et s'adapter poliment selon les régions", "Parler de dialectes, de variétés et d'identité", "Écrire un essai sur le dialecte à l'école (C2)"],
    lessons: [157, 158, 159], vocab: ["austriazismenDE", "helvetismenDE"], reading: "plurizentrisch", prompt: "de-c2-9",
    writing: { task: "Write an essay (300-350 words): “Should schools promote dialects?” Include a familiar phrase and your thesis, why dialect is not “wrong” German, culture and identity, the objection of disadvantage and your answer, and concrete proposals.", task_fr: "Écris un essai (300 à 350 mots) : « L'école devrait-elle encourager les dialectes ? » Avec une phrase familière et ta thèse, pourquoi le dialecte n'est pas un allemand « faux », culture et identité, l'objection du désavantage et ta réponse, et des propositions concrètes.", words: "300-350",
      tips: ["Ich bin der Auffassung, dass…", "… ist keine …, sondern…", "Hinzu kommt, dass…", "Dieser Einwand ist nicht von der Hand zu weisen.", "Wie könnte das konkret aussehen?"],
      checklist: ["I wrote a lead-in and a clear thesis", "I explained the difference between dialect and error", "I answered the strongest objection", "I made concrete proposals", "I wrote between 300 and 350 words"],
      checklist_fr: ["J'ai écrit une amorce et une thèse claire", "J'ai expliqué la différence entre dialecte et faute", "J'ai répondu à l'objection la plus forte", "J'ai fait des propositions concrètes", "J'ai écrit entre 300 et 350 mots"],
      model: "„Sprich ordentlich!“ Diesen Satz haben Generationen von Kindern gehört, die zu Hause Bairisch, Schwäbisch oder Plattdeutsch sprachen. Lange galt der Dialekt als Zeichen mangelnder Bildung, als Hindernis auf dem Weg zum Erfolg. Inzwischen hat sich der Blick gewandelt. Ich bin der Auffassung, dass Schulen Dialekte nicht bekämpfen, sondern bewusst fördern sollten, ohne dabei die Standardsprache zu vernachlässigen.\n\nZunächst einmal ist ein Dialekt keine fehlerhafte Form des Hochdeutschen, sondern eine eigene Varietät mit eigener Grammatik und eigenem Wortschatz. Wer „dem Peter sein Auto“ sagt, macht keinen Fehler, sondern folgt den Regeln seiner Mundart. Diese Unterscheidung ist wichtig, denn Kinder, denen man ihre Sprache als falsch darstellt, verlieren leicht das Vertrauen in ihre Ausdrucksfähigkeit. Sprachgeschichtlich betrachtet sind viele Dialekte sogar älter als die Standardsprache.\n\nHinzu kommt, dass Dialekte ein Stück Kultur und Identität sind. Mit ihnen verschwinden Wörter, Lieder und Redensarten, die über Jahrhunderte gewachsen sind. Für viele Menschen ist der Dialekt die Sprache der Kindheit und der Familie. Wer zwischen Dialekt und Standardsprache wechseln kann, verfügt zudem über eine Fähigkeit, die man sonst mit Mehrsprachigkeit verbindet: das bewusste Umschalten zwischen Registern.\n\nKritiker geben zu bedenken, Kinder mit starkem Dialekt hätten in der Schule und später im Beruf Nachteile. Dieser Einwand ist nicht von der Hand zu weisen. Gerade deshalb muss die Schule beides leisten: Sie sollte die Standardsprache sicher vermitteln und den Dialekt zugleich wertschätzen. Ein Widerspruch ist das nicht; im Gegenteil, wer die Unterschiede kennt, beherrscht beide Varietäten besser.\n\nWie könnte das konkret aussehen? Lehrerinnen und Lehrer könnten Dialektwörter mit ihren hochdeutschen Entsprechungen vergleichen lassen, regionale Literatur lesen oder Großeltern als Zeitzeugen ihrer Sprache in den Unterricht einladen. Ein Blick nach Österreich und in die Schweiz zeigt zudem, dass regionale Formen sogar Teil der Standardsprache sein können. Auch Lieder und Theaterstücke in Mundart eignen sich hervorragend für den Unterricht.\n\nLetzten Endes geht es nicht um die Frage, ob Dialekt oder Hochdeutsch, sondern darum, wie beide nebeneinander bestehen können. Eine Schule, die das vermittelt, macht ihre Schülerinnen und Schüler nicht provinzieller, sondern reicher." } });
})();
