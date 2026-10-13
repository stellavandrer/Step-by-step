/* Cours d'allemand, unité C2-1 « Style and register / Style et registre » : les niveaux de langue (gehoben,
   neutre, familier, relâché, grossier : speisen, essen, futtern), les formes anciennes encore vivantes (datif en
   -e : zu Hause, im Grunde ; génitifs adverbiaux : eines Tages, letzten Endes, meines Erachtens ; anciens
   Konjunktiv II : stünde, hülfe ; prétérits rares : buk, molk, frug), réécrire un texte dans un autre registre.
   Personnages fictifs, prénoms allemands.
   Faits vérifiables seulement : en mai 1521, après la diète de Worms, Frédéric le Sage fait enlever Luther pour
   le cacher à la Wartburg près d'Eisenach (« Junker Jörg ») ; mise au ban de l'Empire peu après ; traduction du
   Nouveau Testament à partir du grec en onze semaines environ ; parution en septembre 1522 (« Septembertestament »),
   rééditions rapides grâce à l'imprimerie ; Bible complète en 1534, avec des collaborateurs ; « Sendbrief vom
   Dolmetschen » (1530) : demander à la mère à la maison, aux enfants dans la rue, à l'homme du commun au marché,
   et leur « regarder la bouche » ; Luther dit s'appuyer sur la langue de la chancellerie saxonne ; nombreuses
   expressions issues de sa traduction (sein Licht unter den Scheffel stellen, Mt 5,15). Seconde mutation
   consonantique (haut / bas allemand), Nibelungenlied en moyen haut allemand, Gutenberg vers 1450, « Fenster »
   emprunté au latin, « Hochzeit » = fête en général autrefois, « Weltschmerz » créé au XIXe siècle. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "stilebenenDE", icon: "pen-tool", title: "Style", title_fr: "Le style", level: "C2", words: [
    ["derb", "coarse, crude", "grossier, cru", "Der Ausdruck ist derb und passt nicht in eine Rede."],
    ["veraltet", "obsolete, dated", "vieilli, désuet", "Das Wort „Fräulein“ gilt heute als veraltet."],
    ["salopp", "casual, slangy", "familier, relâché", "Unter Freunden darf man ruhig salopp reden."],
    ["förmlich", "formal", "formel, cérémonieux", "Der Brief war sehr förmlich formuliert."],
    ["geschraubt", "stilted, convoluted", "ampoulé, alambiqué", "Sein Stil wirkt oft geschraubt."],
    ["schwülstig", "bombastic, overblown", "boursouflé, pompeux", "Die Rede war schwülstig und voller Phrasen."],
    ["nüchtern", "sober, matter-of-fact", "sobre, factuel", "Der Bericht ist nüchtern geschrieben."],
    ["prägnant", "concise, succinct", "concis, percutant", "Fass deine Argumente prägnant zusammen."],
    ["weitschweifig", "long-winded, rambling", "prolixe, verbeux", "Seine Antwort war viel zu weitschweifig."],
    ["die Floskel, -n", "the empty phrase, the cliché", "la formule creuse, le cliché", "Der Text besteht fast nur aus Floskeln."],
    ["der Schachtelsatz, ¨-e", "the convoluted sentence", "la phrase à rallonge", "Lange Schachtelsätze ermüden die Leser."],
    ["das Füllwort, ¨-er", "the filler word", "le mot de remplissage", "„Eigentlich“ ist oft nur ein Füllwort."],
    ["die Wortwahl", "the choice of words", "le choix des mots", "Achte in einer Bewerbung auf deine Wortwahl."],
    ["holprig", "clumsy, bumpy", "maladroit, heurté", "Die Übersetzung klingt noch holprig."],
    ["treffend", "apt, fitting", "juste, pertinent", "Das ist eine treffende Beschreibung."],
    ["bildhaft", "vivid, figurative", "imagé", "Sie erzählt sehr bildhaft."]
  ] },
  { id: "sprachgeschichteDE", icon: "scroll", title: "The history of German", title_fr: "L'histoire de l'allemand", level: "C2", words: [
    ["die Schriftsprache", "the written language", "la langue écrite", "Eine gemeinsame Schriftsprache entstand nur langsam."],
    ["die Kanzleisprache", "chancery language", "la langue de chancellerie", "Luther orientierte sich an der sächsischen Kanzleisprache."],
    ["die Lautverschiebung, -en", "the sound shift", "la mutation consonantique", "Die zweite Lautverschiebung trennt das Hochdeutsche vom Niederdeutschen."],
    ["der Bedeutungswandel", "semantic change", "l'évolution du sens", "Durch Bedeutungswandel bezeichnet „Hochzeit“ heute nur noch die Heirat."],
    ["das Lehnwort, ¨-er", "the loanword", "le mot d'emprunt", "„Fenster“ ist ein Lehnwort aus dem Lateinischen."],
    ["althochdeutsch", "Old High German", "vieux haut allemand", "Die ältesten althochdeutschen Texte stammen aus dem 8. Jahrhundert."],
    ["mittelhochdeutsch", "Middle High German", "moyen haut allemand", "Das Nibelungenlied ist ein mittelhochdeutsches Epos."],
    ["der Buchdruck", "printing", "l'imprimerie", "Gutenberg entwickelte um 1450 in Mainz den Buchdruck mit beweglichen Lettern."],
    ["die Flugschrift, -en", "the pamphlet", "le pamphlet, le tract", "Flugschriften verbreiteten die Ideen der Reformation."],
    ["der Sprachwandel", "language change", "l'évolution de la langue", "Sprachwandel ist ein ganz natürlicher Vorgang."],
    ["die Redewendung, -en", "the idiom", "l'expression idiomatique", "Viele Redewendungen stammen aus der Bibel."],
    ["das Sprichwort, ¨-er", "the proverb", "le proverbe", "„Übung macht den Meister“ ist ein bekanntes Sprichwort."],
    ["gebräuchlich", "common, in use", "usuel, courant", "Dieses Wort ist heute kaum noch gebräuchlich."],
    ["die Bibel, -n", "the Bible", "la Bible", "Luther übersetzte die Bibel ins Deutsche."],
    ["die Wortschöpfung, -en", "the coinage, the new word", "la création lexicale", "„Weltschmerz“ ist eine Wortschöpfung des 19. Jahrhunderts."],
    ["die Verbreitung", "spread, distribution", "la diffusion", "Der Buchdruck beschleunigte die Verbreitung von Ideen."]
  ] });

  W.LESSONS.push(
  {
    id: 133, level: "C2", icon: "pen-tool",
    title: "Speisen, essen, futtern: stylistic levels", title_fr: "Speisen, essen, futtern : les niveaux de langue",
    subtitle: "From elevated to coarse: choose the right word for the situation, and use the contrast on purpose.", subtitle_fr: "Du soutenu au grossier : choisir le mot juste pour la situation, et jouer sur le contraste.",
    body: `
<h2>Five levels</h2>
<p>German dictionaries mark words as <s-de>gehoben</s-de> (elevated), neutral, <s-de>umgangssprachlich</s-de> (colloquial), <s-de>salopp</s-de> (very casual) or <s-de>derb</s-de> (coarse), and sometimes <s-de>veraltet</s-de> (obsolete).</p>
<table>
<tr><th>elevated</th><th>neutral</th><th>casual or coarse</th></tr>
<tr><td><s-de>speisen</s-de></td><td><s-de>essen</s-de></td><td><s-de>futtern</s-de></td></tr>
<tr><td><s-de>entschlafen</s-de></td><td><s-de>sterben</s-de></td><td><s-de>abkratzen</s-de></td></tr>
<tr><td><s-de>das Haupt</s-de></td><td><s-de>der Kopf</s-de></td><td><s-de>die Birne</s-de></td></tr>
<tr><td><s-de>das Antlitz</s-de></td><td><s-de>das Gesicht</s-de></td><td><s-de>die Visage</s-de></td></tr>
<tr><td><s-de>das Ross</s-de></td><td><s-de>das Pferd</s-de></td><td><s-de>der Gaul</s-de></td></tr>
<tr><td><s-de>sich begeben</s-de></td><td><s-de>gehen</s-de></td><td><s-de>latschen</s-de></td></tr>
</table>
<h2>Mixing on purpose</h2>
<p>A sudden change of level creates irony: <s-de>Wir speisten an einer Würstchenbude.</s-de> (We dined at a sausage stand.) Used by mistake, the same mix sounds clumsy or disrespectful.</p>
<div class="tip">At C2, the challenge isn't knowing elevated words but dosing them. Too many make a text <s-de>geschraubt</s-de> or <s-de>schwülstig</s-de>; one well-placed word gives it weight. Check the register marks in a good dictionary before you use a word you've only read.</div>
`,
    body_fr: `
<h2>Cinq niveaux</h2>
<p>Les dictionnaires allemands marquent les mots comme <s-de>gehoben</s-de> (soutenu), neutres, <s-de>umgangssprachlich</s-de> (familier), <s-de>salopp</s-de> (relâché) ou <s-de>derb</s-de> (grossier), et parfois <s-de>veraltet</s-de> (vieilli).</p>
<table>
<tr><th>soutenu</th><th>neutre</th><th>relâché ou grossier</th></tr>
<tr><td><s-de>speisen</s-de></td><td><s-de>essen</s-de></td><td><s-de>futtern</s-de></td></tr>
<tr><td><s-de>entschlafen</s-de></td><td><s-de>sterben</s-de></td><td><s-de>abkratzen</s-de></td></tr>
<tr><td><s-de>das Haupt</s-de></td><td><s-de>der Kopf</s-de></td><td><s-de>die Birne</s-de></td></tr>
<tr><td><s-de>das Antlitz</s-de></td><td><s-de>das Gesicht</s-de></td><td><s-de>die Visage</s-de></td></tr>
<tr><td><s-de>das Ross</s-de></td><td><s-de>das Pferd</s-de></td><td><s-de>der Gaul</s-de></td></tr>
<tr><td><s-de>sich begeben</s-de></td><td><s-de>gehen</s-de></td><td><s-de>latschen</s-de></td></tr>
</table>
<p>Le français a les mêmes échelles : se restaurer, manger, bouffer ; s'éteindre, mourir, crever.</p>
<h2>Mélanger exprès</h2>
<p>Un changement brusque de niveau crée de l'ironie : <s-de>Wir speisten an einer Würstchenbude.</s-de> (Nous avons dîné à une baraque à saucisses.) Fait par erreur, le même mélange paraît maladroit ou irrespectueux.</p>
<div class="tip">Au C2, la difficulté n'est pas de connaître les mots soutenus mais de les doser. Trop nombreux, ils rendent un texte <s-de>geschraubt</s-de> ou <s-de>schwülstig</s-de> ; un seul mot bien placé lui donne du poids. Vérifie les marques de registre dans un bon dictionnaire avant d'employer un mot que tu n'as fait que lire.</div>
`,
    examples: [
      ["Nach dem Konzert speisten die Gäste im Schlossrestaurant.", "After the concert, the guests dined in the castle restaurant.", "Après le concert, les invités dînèrent au restaurant du château."],
      ["Die Großmutter ist friedlich entschlafen.", "Grandmother passed away peacefully.", "La grand-mère s'est éteinte paisiblement."],
      ["Der König neigte sein Haupt.", "The king bowed his head.", "Le roi inclina la tête."],
      ["Sie begab sich in den Garten.", "She proceeded into the garden.", "Elle se rendit au jardin."],
      ["Die Kinder futtern schon wieder Gummibärchen.", "The kids are munching gummy bears again.", "Les enfants s'empiffrent encore de bonbons."],
      ["Wir speisten an einer Würstchenbude.", "We dined at a sausage stand.", "Nous avons dîné à une baraque à saucisses."],
      ["Das Wort „Fräulein“ gilt heute als veraltet.", "The word “Fräulein” is now considered dated.", "Le mot « Fräulein » est aujourd'hui considéré comme vieilli."]
    ],
    quiz: [
      { q: "Elevated equivalent of “essen”:", q_fr: "Équivalent soutenu de « essen » :", o: ["speisen", "futtern", "fressen"], a: 0, ex: "speisen = gehoben.", ex_fr: "speisen = soutenu." },
      { q: "Which word is coarse?", q_fr: "Quel mot est grossier ?", o: ["abkratzen", "entschlafen", "versterben"], a: 0, ex: "abkratzen (derb) = to die.", ex_fr: "abkratzen (grossier) = mourir." },
      { q: "“das Haupt” is…", q_fr: "« das Haupt » est…", o: ["an elevated word for “der Kopf”", "a colloquial word for “der Kopf”", "an obsolete word for “das Haus”"], o_fr: ["un mot soutenu pour « der Kopf »", "un mot familier pour « der Kopf »", "un mot vieilli pour « das Haus »"], a: 0, ex: "Haupt = gehoben.", ex_fr: "Haupt = soutenu." },
      { q: "“Wir speisten an einer Würstchenbude” is…", q_fr: "« Wir speisten an einer Würstchenbude » est…", o: ["ironic", "very formal", "incorrect"], o_fr: ["ironique", "très formel", "incorrect"], a: 0, ex: "Elevated verb + ordinary place = irony.", ex_fr: "Verbe soutenu + lieu ordinaire = ironie." },
      { q: "A text full of elevated words often sounds…", q_fr: "Un texte plein de mots soutenus paraît souvent…", o: ["geschraubt", "prägnant", "nüchtern"], a: 0, ex: "geschraubt = stilted.", ex_fr: "geschraubt = ampoulé." }
    ]
  },
  {
    id: 134, level: "C2", icon: "scroll",
    title: "Eines Tages, zu Hause, stünde: old forms in modern German", title_fr: "Eines Tages, zu Hause, stünde : les formes anciennes dans l'allemand d'aujourd'hui",
    subtitle: "The old dative -e, adverbial genitives, old Konjunktiv II forms and rare past tenses.", subtitle_fr: "L'ancien datif en -e, les génitifs adverbiaux, les anciennes formes du Konjunktiv II et les prétérits rares.",
    body: `
<h2>The old dative -e</h2>
<p>It survives in fixed phrases: <s-de>zu Hause, nach Hause, im Grunde, zu Tode, im Laufe der Zeit, im Sinne des Gesetzes</s-de>. Elsewhere it sounds elevated or old-fashioned: <s-de>auf dem Lande, am Tage</s-de>.</p>
<h2>Adverbial genitives</h2>
<p><s-de>eines Tages</s-de> (one day), <s-de>eines Abends</s-de>, <s-de>meines Erachtens</s-de> (in my view), <s-de>letzten Endes</s-de> (in the end), <s-de>guten Mutes</s-de> (in good spirits), <s-de>schweren Herzens</s-de> (with a heavy heart), <s-de>stehenden Fußes</s-de> (immediately), <s-de>unverrichteter Dinge</s-de> (without having achieved anything).</p>
<h2>Old Konjunktiv II forms</h2>
<p>Some are still common: <s-de>stünde</s-de> (or <s-de>stände</s-de>), <s-de>wüsste, käme, ginge</s-de>. Others sound literary and are usually replaced by <s-de>würde</s-de> + infinitive: <s-de>hülfe</s-de> (helfen), <s-de>stürbe</s-de> (sterben), <s-de>würfe</s-de> (werfen), <s-de>begönne</s-de> (beginnen).</p>
<h2>Rare past tenses</h2>
<p>In older texts: <s-de>buk</s-de> (backte), <s-de>molk</s-de> (melkte), <s-de>frug</s-de> (fragte, regional or humorous today).</p>
<div class="tip">Use the fixed phrases freely: <s-de>eines Tages, letzten Endes, meines Erachtens, im Grunde</s-de> belong to good modern German. Recognise the rest in literature, and use <s-de>hülfe</s-de> or <s-de>frug</s-de> only for effect.</div>
`,
    body_fr: `
<h2>L'ancien datif en -e</h2>
<p>Il survit dans des tournures figées : <s-de>zu Hause, nach Hause, im Grunde, zu Tode, im Laufe der Zeit, im Sinne des Gesetzes</s-de>. Ailleurs, il paraît soutenu ou désuet : <s-de>auf dem Lande, am Tage</s-de>.</p>
<h2>Les génitifs adverbiaux</h2>
<p><s-de>eines Tages</s-de> (un jour), <s-de>eines Abends</s-de>, <s-de>meines Erachtens</s-de> (à mon avis), <s-de>letzten Endes</s-de> (en fin de compte), <s-de>guten Mutes</s-de> (plein d'entrain), <s-de>schweren Herzens</s-de> (le cœur lourd), <s-de>stehenden Fußes</s-de> (sur-le-champ), <s-de>unverrichteter Dinge</s-de> (bredouille).</p>
<h2>Les anciennes formes du Konjunktiv II</h2>
<p>Certaines restent courantes : <s-de>stünde</s-de> (ou <s-de>stände</s-de>), <s-de>wüsste, käme, ginge</s-de>. D'autres sont littéraires et en général remplacées par <s-de>würde</s-de> + infinitif : <s-de>hülfe</s-de> (helfen), <s-de>stürbe</s-de> (sterben), <s-de>würfe</s-de> (werfen), <s-de>begönne</s-de> (beginnen). Un peu comme l'imparfait du subjonctif en français.</p>
<h2>Les prétérits rares</h2>
<p>Dans les textes anciens : <s-de>buk</s-de> (backte), <s-de>molk</s-de> (melkte), <s-de>frug</s-de> (fragte, régional ou humoristique aujourd'hui).</p>
<div class="tip">Emploie librement les tournures figées : <s-de>eines Tages, letzten Endes, meines Erachtens, im Grunde</s-de> appartiennent au bon allemand d'aujourd'hui. Reconnais le reste en littérature, et n'emploie <s-de>hülfe</s-de> ou <s-de>frug</s-de> que pour l'effet.</div>
`,
    examples: [
      ["Eines Tages wirst du das verstehen.", "One day you'll understand.", "Un jour, tu comprendras."],
      ["Letzten Endes hat sich die Mühe gelohnt.", "In the end, the effort was worth it.", "En fin de compte, l'effort en valait la peine."],
      ["Meines Erachtens ist das ein Fehler.", "In my view, that's a mistake.", "À mon avis, c'est une erreur."],
      ["Schweren Herzens verließ sie ihre Heimatstadt.", "With a heavy heart, she left her home town.", "Le cœur lourd, elle quitta sa ville natale."],
      ["Sie kehrten unverrichteter Dinge zurück.", "They came back empty-handed.", "Ils revinrent bredouilles."],
      ["Wenn das so einfach wäre, stünde es in jedem Lehrbuch.", "If it were that easy, it would be in every textbook.", "Si c'était aussi simple, ce serait dans tous les manuels."],
      ["Die Großmutter buk jeden Sonntag einen Kuchen.", "Grandmother baked a cake every Sunday.", "La grand-mère faisait un gâteau chaque dimanche."]
    ],
    quiz: [
      { q: "“One day…”", q_fr: "« Un jour… »", o: ["Eines Tages…", "Einen Tag…", "An einem Tages…"], a: 0, ex: "Adverbial genitive.", ex_fr: "Génitif adverbial." },
      { q: "“In the end…”", q_fr: "« En fin de compte… »", o: ["Letzten Endes…", "Letztes Ende…", "Am letzten Endes…"], a: 0, ex: "letzten Endes.", ex_fr: "letzten Endes." },
      { q: "Old Konjunktiv II of “helfen”:", q_fr: "Ancien Konjunktiv II de « helfen » :", o: ["hülfe", "hälfe", "helfte"], a: 0, ex: "hülfe (today usually: würde helfen).", ex_fr: "hülfe (aujourd'hui en général : würde helfen)." },
      { q: "Which phrase keeps the old dative -e?", q_fr: "Quelle tournure garde l'ancien datif en -e ?", o: ["im Grunde", "im Tische", "im Hunde"], a: 0, ex: "Only in fixed phrases: im Grunde, zu Hause.", ex_fr: "Seulement dans les tournures figées : im Grunde, zu Hause." },
      { q: "“Sie kehrten unverrichteter Dinge zurück” means…", q_fr: "« Sie kehrten unverrichteter Dinge zurück » veut dire…", o: ["They came back without having achieved anything.", "They came back with many things.", "They came back very late."], o_fr: ["Ils revinrent sans avoir rien obtenu.", "Ils revinrent avec beaucoup de choses.", "Ils revinrent très tard."], a: 0, ex: "unverrichteter Dinge = empty-handed.", ex_fr: "unverrichteter Dinge = bredouille." }
    ]
  },
  {
    id: 135, level: "C2", kind: "functional", icon: "file-text",
    title: "Everyday German: rewriting a text in another register", title_fr: "L'allemand de tous les jours : réécrire un texte dans un autre registre",
    subtitle: "From a casual message to a formal letter, and from heavy officialese to clear language.", subtitle_fr: "D'un message familier à une lettre soutenue, et d'un jargon administratif lourd à une langue claire.",
    body: `
<h2>Four steps</h2>
<p>1. Who is the reader, and why are you writing? 2. Replace the words. 3. Rebuild the sentences. 4. Add the formulas of the genre.</p>
<h2>From casual to formal</h2>
<table>
<tr><th>casual</th><th>formal</th></tr>
<tr><td><s-de>Hi Leute, kurze Info: Das Meeting morgen fällt flach.</s-de></td><td><s-de>Liebe Kolleginnen und Kollegen, die Besprechung morgen entfällt.</s-de></td></tr>
<tr><td><s-de>Hab die Unterlagen noch nicht gekriegt.</s-de></td><td><s-de>Die Unterlagen habe ich leider noch nicht erhalten.</s-de></td></tr>
<tr><td><s-de>Könnt ihr mal checken, ob das passt?</s-de></td><td><s-de>Könnten Sie bitte prüfen, ob der Termin passt?</s-de></td></tr>
</table>
<p>Typical changes: full sentences instead of fragments (<s-de>Hab…</s-de> → <s-de>Ich habe…</s-de>), neutral words (<s-de>kriegen → erhalten, checken → prüfen, Infos → Informationen</s-de>), the Konjunktiv II for requests, connectors instead of dashes and exclamation marks.</p>
<h2>From officialese to clear German</h2>
<p><s-de>Die Inanspruchnahme der Leistung setzt eine fristgerechte Antragstellung voraus.</s-de> → <s-de>Wer die Leistung nutzen will, muss den Antrag rechtzeitig stellen.</s-de> Turn nouns back into verbs, address the reader, cut long sentences (unit C2-8).</p>
<div class="tip">Rewriting a text for another reader is a classic C2 exercise. Keep all the information: the content stays the same, only the form changes. Then read your version as the new reader would.</div>
`,
    body_fr: `
<h2>Quatre étapes</h2>
<p>1. Qui lit, et pourquoi écris-tu ? 2. Remplace les mots. 3. Reconstruis les phrases. 4. Ajoute les formules du genre.</p>
<h2>Du familier au soutenu</h2>
<table>
<tr><th>familier</th><th>soutenu</th></tr>
<tr><td><s-de>Hi Leute, kurze Info: Das Meeting morgen fällt flach.</s-de></td><td><s-de>Liebe Kolleginnen und Kollegen, die Besprechung morgen entfällt.</s-de></td></tr>
<tr><td><s-de>Hab die Unterlagen noch nicht gekriegt.</s-de></td><td><s-de>Die Unterlagen habe ich leider noch nicht erhalten.</s-de></td></tr>
<tr><td><s-de>Könnt ihr mal checken, ob das passt?</s-de></td><td><s-de>Könnten Sie bitte prüfen, ob der Termin passt?</s-de></td></tr>
</table>
<p>Changements typiques : des phrases complètes au lieu de fragments (<s-de>Hab…</s-de> → <s-de>Ich habe…</s-de>), des mots neutres (<s-de>kriegen → erhalten, checken → prüfen, Infos → Informationen</s-de>), le Konjunktiv II pour les demandes, des connecteurs au lieu des tirets et des points d'exclamation.</p>
<h2>Du jargon administratif à l'allemand clair</h2>
<p><s-de>Die Inanspruchnahme der Leistung setzt eine fristgerechte Antragstellung voraus.</s-de> → <s-de>Wer die Leistung nutzen will, muss den Antrag rechtzeitig stellen.</s-de> Retransforme les noms en verbes, adresse-toi au lecteur, coupe les phrases trop longues (unité C2-8).</p>
<div class="tip">Réécrire un texte pour un autre lecteur est un exercice classique du C2. Garde toutes les informations : le fond reste le même, seule la forme change. Puis relis ta version comme le ferait le nouveau lecteur.</div>
`,
    examples: [
      ["Liebe Kolleginnen und Kollegen, die Besprechung morgen entfällt.", "Dear colleagues, tomorrow's meeting is cancelled.", "Chères et chers collègues, la réunion de demain est annulée."],
      ["Die Unterlagen habe ich leider noch nicht erhalten.", "Unfortunately I haven't received the documents yet.", "Je n'ai malheureusement pas encore reçu les documents."],
      ["Könnten Sie bitte prüfen, ob der Termin passt?", "Could you please check whether the date suits?", "Pourriez-vous vérifier si la date convient ?"],
      ["Leider verzögert sich die Lieferung um eine Woche.", "Unfortunately the delivery is delayed by a week.", "La livraison a malheureusement une semaine de retard."],
      ["Wir bitten Sie, die Verzögerung zu entschuldigen.", "We apologise for the delay.", "Nous vous prions d'excuser ce retard."],
      ["Wer die Leistung nutzen will, muss den Antrag rechtzeitig stellen.", "Anyone who wants to use the service must apply in time.", "Pour bénéficier de la prestation, il faut déposer la demande à temps."],
      ["Für Rückfragen stehen wir Ihnen gern zur Verfügung.", "We'll be happy to answer any questions.", "Nous restons à votre disposition pour toute question."]
    ],
    quiz: [
      { q: "Formal equivalent of “gekriegt”:", q_fr: "Équivalent soutenu de « gekriegt » :", o: ["erhalten", "gecheckt", "abgekriegt"], a: 0, ex: "kriegen → erhalten.", ex_fr: "kriegen → erhalten." },
      { q: "“Das Meeting fällt flach” in a formal email:", q_fr: "« Das Meeting fällt flach » dans un courriel soutenu :", o: ["Die Besprechung entfällt.", "Die Besprechung fällt um.", "Die Besprechung ist flach."], a: 0, ex: "entfallen = to be cancelled.", ex_fr: "entfallen = être annulé." },
      { q: "A polite formal request:", q_fr: "Une demande polie et soutenue :", o: ["Könnten Sie bitte prüfen, ob…?", "Checkt mal, ob…!", "Prüfen, ob…!"], a: 0, ex: "Sie + Konjunktiv II + bitte.", ex_fr: "Sie + Konjunktiv II + bitte." },
      { q: "When you rewrite a text for another reader…", q_fr: "Quand on réécrit un texte pour un autre lecteur…", o: ["the content stays the same, only the form changes", "you can leave out the difficult parts", "you add your own opinion"], o_fr: ["le fond reste le même, seule la forme change", "on peut laisser de côté les passages difficiles", "on ajoute son propre avis"], a: 0, ex: "Keep all the information.", ex_fr: "Garder toutes les informations." },
      { q: "Clear German for “eine fristgerechte Antragstellung”:", q_fr: "En allemand clair, « eine fristgerechte Antragstellung » :", o: ["den Antrag rechtzeitig stellen", "die Frist gerecht anstellen", "den Antrag gerecht befristen"], a: 0, ex: "Turn nouns back into verbs.", ex_fr: "Retransformer les noms en verbes." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    133: {
      gap: [["Nach dem Konzert ___ die Gäste im Schlossrestaurant. (gehoben für: aßen)", "speisten"], ["Der König neigte sein ___. (gehoben für: Kopf)", "Haupt"], ["Die Großmutter ist friedlich ___. (gehoben für: gestorben)", "entschlafen"], ["Sie ___ sich in den Garten. (gehoben für: ging)", "begab"]],
      fix: [["Liebe Trauergemeinde, unser Freund ist leider abgekratzt.", "Liebe Trauergemeinde, unser Freund ist leider von uns gegangen.", "abkratzen is coarse; at a funeral, use a respectful phrase.", "abkratzen est grossier ; à un enterrement, on emploie une formule respectueuse."], ["Sehr geehrte Damen und Herren, ich hab die Infos gekriegt.", "Sehr geehrte Damen und Herren, ich habe die Informationen erhalten.", "Don't mix a formal salutation with colloquial words.", "Ne mélange pas une formule d'appel soutenue et des mots familiers."]],
      task: ["Write the same news three times, as a text to a friend, an email to a colleague and a formal letter: you can't come to a meeting on Monday.", "Écris la même nouvelle trois fois, en SMS à un ami, en courriel à une collègue et en lettre soutenue : tu ne peux pas venir à une réunion lundi.", "SMS: Hey, schaff's Montag leider nicht, sorry! E-Mail: Hallo Frau Brandt, leider kann ich am Montag nicht an der Besprechung teilnehmen. Brief: Sehr geehrte Frau Brandt, leider ist es mir nicht möglich, an der Besprechung am Montag teilzunehmen. Ich bitte Sie, mein Fehlen zu entschuldigen."]
    },
    134: {
      gap: [["Wir bleiben heute zu ___. (Haus)", "Hause"], ["___ Tages wird sie die Wahrheit erfahren. (ein)", "Eines"], ["Meines ___ ist das falsch. (Erachten)", "Erachtens"], ["Wenn er Zeit hätte, ___ er uns. (helfen, alte Form)", "hülfe"]],
      fix: [["Einen Tages traf sie ihn wieder.", "Eines Tages traf sie ihn wieder.", "Adverbial genitive: eines Tages.", "Génitif adverbial : eines Tages."], ["Letzter Ende war alles gut.", "Letzten Endes war alles gut.", "Adverbial genitive: letzten Endes.", "Génitif adverbial : letzten Endes."]],
      task: ["Write four sentences with eines Tages, letzten Endes, meines Erachtens and schweren Herzens.", "Écris quatre phrases avec eines Tages, letzten Endes, meines Erachtens et schweren Herzens.", "Eines Tages werde ich nach Wien ziehen. Letzten Endes zählt nur, was man daraus macht. Meines Erachtens ist das eine gute Entscheidung. Schweren Herzens verabschiedete sie sich von ihren Freunden."]
    },
    135: {
      gap: [["Ich habe die Unterlagen noch nicht ___. (formell für: gekriegt)", "erhalten"], ["Die Besprechung morgen ___. (formell für: fällt flach)", "entfällt"], ["Für Rückfragen stehe ich Ihnen gern zur ___.", "Verfügung"], ["Wir bitten Sie, die Verzögerung zu ___.", "entschuldigen"]],
      fix: [["Hi Frau Hoffmann, die Lieferung kommt später, sorry!", "Sehr geehrte Frau Hoffmann, leider verzögert sich die Lieferung.", "Formal salutation and neutral wording.", "Formule d'appel soutenue et formulation neutre."], ["Könnt ihr mal checken, ob das passt?", "Könnten Sie bitte prüfen, ob der Termin passt?", "Sie, Konjunktiv II and prüfen instead of checken.", "Sie, Konjunktiv II et prüfen au lieu de checken."]],
      task: ["Rewrite this message as a formal letter to a client: Hi! Hab Ihre Mail gekriegt. Die Ersatzteile sind leider aus, kommen aber nächste Woche wieder rein. Melden Sie sich einfach, wenn's Fragen gibt!", "Réécris ce message en lettre soutenue à un client : Hi! Hab Ihre Mail gekriegt. Die Ersatzteile sind leider aus, kommen aber nächste Woche wieder rein. Melden Sie sich einfach, wenn's Fragen gibt!", "Sehr geehrte Damen und Herren, vielen Dank für Ihre Nachricht. Die gewünschten Ersatzteile sind derzeit leider nicht vorrätig, werden jedoch voraussichtlich in der kommenden Woche wieder geliefert. Für Rückfragen stehen wir Ihnen gern zur Verfügung. Mit freundlichen Grüßen"]
    }
  });

  W.ROLEPLAYS.push(
  { id: "festrede", lesson: 133, level: "C2", icon: "pen-tool", partner: "Paula", role: "a friend who has to give a speech", role_fr: "une amie qui doit faire un discours",
    title: "A speech for Grandma", title_fr: "Un discours pour la grand-mère",
    setting: "Your friend Paula has to give a speech at her grandmother's 90th birthday. She asks you to help her find the right tone.", setting_fr: "Ton amie Paula doit faire un discours pour les 90 ans de sa grand-mère. Elle te demande de l'aider à trouver le ton juste.",
    turns: [
      { p: "Ich habe geschrieben: „Oma ist echt 'ne super Frau.“ Geht das für eine Rede?", en: "I've written: “Grandma's a really great woman.” Is that OK for a speech?", fr: "J'ai écrit : « Mamie, c'est vraiment une super femme. » Ça va pour un discours ?" },
      { y: ["Für eine Festrede ist das etwas salopp. Wie wäre es mit: „Unsere Großmutter ist eine wunderbare Frau“?", "Für eine Festrede ist das etwas salopp. Wie wäre es mit: „Unsere Großmutter ist eine wunderbaren Frau“?", "Für eine Festrede ist das etwas salopp. Wie wär's mit: „Oma ist mega“?"], en: "For a formal speech that's a bit casual. How about: “Our grandmother is a wonderful woman”?", fr: "Pour un discours de fête, c'est un peu familier. Que dirais-tu de : « Notre grand-mère est une femme merveilleuse » ?", why: "A neutral to elevated register; eine wunderbare Frau.", why_fr: "Un registre neutre à soutenu ; eine wunderbare Frau." },
      { p: "Gut. Und dann: „Sie hat immer total viel für uns gemacht.“", en: "Good. And then: “She always did loads for us.”", fr: "Bien. Et ensuite : « Elle a toujours fait plein de trucs pour nous. »" },
      { y: ["Vielleicht: „Sie hat stets alles für uns getan.“ Das klingt feierlicher.", "Vielleicht: „Sie hat stets alles für uns tun.“ Das klingt feierlicher.", "Vielleicht: „Sie hat stets alles für uns getant.“ Das klingt feierlicher."], en: "Maybe: “She always did everything for us.” That sounds more solemn.", fr: "Peut-être : « Elle a toujours tout fait pour nous. » Ça sonne plus solennel.", why: "stets and tun are more elevated; past participle getan.", why_fr: "stets et tun sont plus soutenus ; participe passé getan." },
      { p: "Und am Ende will ich sagen, dass sie hoffentlich noch lange lebt.", en: "And at the end I want to say that I hope she lives a long time yet.", fr: "Et à la fin, je veux dire que j'espère qu'elle vivra encore longtemps." },
      { y: ["Schön wäre: „Mögest du noch viele Jahre bei uns sein.“", "Schön wäre: „Mögest du noch viele Jahre bei uns bist.“", "Schön wäre: „Hoffentlich kratzt du nicht so bald ab.“"], en: "It would be nice to say: “May you be with us for many more years.”", fr: "Ce serait joli : « Puisses-tu rester encore de longues années parmi nous. »", why: "A wish in the Konjunktiv I (mögest) + infinitive; abkratzen is coarse.", why_fr: "Un souhait au Konjunktiv I (mögest) + infinitif ; abkratzen est grossier." },
      { p: "Ist „mögest“ nicht ein bisschen altmodisch?", en: "Isn't “mögest” a bit old-fashioned?", fr: "« Mögest », ce n'est pas un peu vieillot ?" },
      { y: ["Ein wenig schon, aber in einer Festrede passt ein gehobener Ton.", "Ein wenig schon, aber in einer Festrede passt ein gehobenes Ton.", "Ein wenig schon, aber in einer Festrede passt einen gehobenen Ton."], en: "A little, yes, but an elevated tone suits a formal speech.", fr: "Un peu, oui, mais un ton soutenu convient à un discours de fête.", why: "der Ton (masculine, subject): ein gehobener Ton.", why_fr: "der Ton (masculin, sujet) : ein gehobener Ton." },
      { p: "Und wenn ich einen Witz einbauen will?", en: "And if I want to put a joke in?", fr: "Et si je veux glisser une blague ?" },
      { y: ["Gern, aber nur einen kleinen, und lieber am Anfang als am Schluss.", "Gern, aber nur einen kleinen, und lieber am Anfang wie am Schluss.", "Gern, aber nur ein kleinen, und lieber am Anfang als am Schluss."], en: "Sure, but only a small one, and preferably at the beginning rather than at the end.", fr: "Volontiers, mais une petite seulement, et plutôt au début qu'à la fin.", why: "lieber … als; einen kleinen (Witz, accusative).", why_fr: "lieber … als ; einen kleinen (Witz, accusatif)." }
    ] },
  { id: "umformulieren", lesson: 135, level: "C2", icon: "file-text", partner: "Herr Albrecht", role: "your boss", role_fr: "ton chef",
    title: "Rewriting an email to a client", title_fr: "Réécrire un courriel à une cliente",
    setting: "A colleague has drafted a very casual email to an important client, Frau Hoffmann. Your boss, Herr Albrecht, asks you to rewrite it with him.", setting_fr: "Un collègue a rédigé un courriel très familier à une cliente importante, Frau Hoffmann. Ton chef, Herr Albrecht, te demande de le réécrire avec lui.",
    turns: [
      { p: "Unser Kollege hat geschrieben: „Hi, die Lieferung kommt später, sorry!“ Wie fangen wir an?", en: "Our colleague wrote: “Hi, the delivery's coming later, sorry!” How do we start?", fr: "Notre collègue a écrit : « Salut, la livraison arrive plus tard, désolé ! » Comment commençons-nous ?" },
      { y: ["„Sehr geehrte Frau Hoffmann, leider verzögert sich die Lieferung.“", "„Sehr geehrte Frau Hoffmann, leider die Lieferung verzögert sich.“", "„Hallo Frau Hoffmann, sorry, die Lieferung kommt später.“"], en: "“Dear Frau Hoffmann, unfortunately the delivery is delayed.”", fr: "« Chère Madame, la livraison a malheureusement du retard. »", why: "Formal salutation; verb second after leider.", why_fr: "Formule d'appel soutenue ; verbe en deuxième position après leider." },
      { p: "Gut. Er schreibt weiter: „Grund: Probleme beim Zulieferer.“", en: "Good. He goes on: “Reason: problems at the supplier's.”", fr: "Bien. Il continue : « Raison : problèmes chez le fournisseur. »" },
      { y: ["„Grund dafür sind Schwierigkeiten bei einem unserer Zulieferer.“", "„Grund dafür ist Schwierigkeiten bei einem unserer Zulieferer.“", "„Grund dafür sind Schwierigkeiten bei einer unserer Zulieferer.“"], en: "“The reason is difficulties at one of our suppliers.”", fr: "« Cela est dû à des difficultés chez l'un de nos fournisseurs. »", why: "Full sentence; the verb agrees with Schwierigkeiten; einem (masculine dative).", why_fr: "Phrase complète ; le verbe s'accorde avec Schwierigkeiten ; einem (datif masculin)." },
      { p: "Und: „Kommt dann so Ende nächster Woche.“", en: "And: “It'll come end of next week or so.”", fr: "Et : « Ça arrivera genre fin de la semaine prochaine. »" },
      { y: ["„Voraussichtlich erhalten Sie die Ware Ende nächster Woche.“", "„Voraussichtlich Sie erhalten die Ware Ende nächster Woche.“", "„Voraussichtlich erhalten Sie die Ware Ende nächste Woche.“"], en: "“You will probably receive the goods at the end of next week.”", fr: "« Vous recevrez vraisemblablement la marchandise à la fin de la semaine prochaine. »", why: "Verb second; genitive: Ende nächster Woche.", why_fr: "Verbe en deuxième position ; génitif : Ende nächster Woche." },
      { p: "Sehr gut. Und das „sorry“?", en: "Very good. And the “sorry”?", fr: "Très bien. Et le « désolé » ?" },
      { y: ["„Wir bitten Sie, die Verzögerung zu entschuldigen.“", "„Wir bitten Sie, die Verzögerung entschuldigen.“", "„Wir bitten Sie, um die Verzögerung zu entschuldigen.“"], en: "“We apologise for the delay.”", fr: "« Nous vous prions d'excuser ce retard. »", why: "jemanden bitten, etwas zu tun: zu + infinitive.", why_fr: "jemanden bitten, etwas zu tun : zu + infinitif." },
      { p: "Fehlt noch der Schluss.", en: "We still need the closing.", fr: "Il manque encore la fin." },
      { y: ["„Für Rückfragen stehen wir Ihnen jederzeit gern zur Verfügung. Mit freundlichen Grüßen“", "„Für Rückfragen stehen wir Sie jederzeit gern zur Verfügung. Mit freundlichen Grüßen“", "„Für Rückfragen stehen wir Ihnen jederzeit gern zur Verfügung. Mit freundliche Grüße“"], en: "“We are always happy to answer any questions. Kind regards”", fr: "« Nous restons à votre entière disposition pour toute question. Avec nos salutations distinguées »", why: "jemandem (dative) zur Verfügung stehen; fixed closing.", why_fr: "jemandem (datif) zur Verfügung stehen ; formule finale figée." }
    ] }
  );

  W.READINGS.push({
    id: "luther", level: "C2", icon: "book-open", title: "„Dem Volk aufs Maul schauen“: Luthers Bibel", genre: "Feature article",
    intro: "A monk in hiding, eleven weeks of work and a printing press: how Luther's translation shaped written German.",
    intro_fr: "Un moine caché, onze semaines de travail et une presse d'imprimerie : comment la traduction de Luther a façonné l'allemand écrit.",
    paragraphs: [
      { de: "Im Mai 1521, nach dem Reichstag zu Worms, ließ Kurfürst Friedrich der Weise seinen Untertanen Martin Luther zum Schein überfallen und auf die Wartburg bei Eisenach bringen. Kurz darauf wurde über Luther die Reichsacht verhängt. Als „Junker Jörg“ verkleidet, begann er dort, das Neue Testament aus dem Griechischen ins Deutsche zu übersetzen, und brauchte dafür nur etwa elf Wochen.", en: "In May 1521, after the Diet of Worms, Elector Frederick the Wise had his subject Martin Luther ambushed in a staged attack and taken to the Wartburg near Eisenach. Shortly afterwards, Luther was placed under the imperial ban. Disguised as “Junker Jörg”, he began translating the New Testament from Greek into German there, and needed only about eleven weeks.", fr: "En mai 1521, après la diète de Worms, le prince électeur Frédéric le Sage fit enlever son sujet Martin Luther lors d'une fausse attaque et le fit conduire à la Wartburg, près d'Eisenach. Peu après, Luther fut mis au ban de l'Empire. Déguisé en « Junker Jörg », il y commença à traduire le Nouveau Testament du grec en allemand, et n'eut besoin que d'environ onze semaines." },
      { de: "Im September 1522 erschien die Übersetzung, das sogenannte Septembertestament. Dank des Buchdrucks verbreitete sie sich rasch, und schon nach kurzer Zeit wurde eine zweite Auflage nötig. 1534 lag schließlich die vollständige Bibel auf Deutsch vor, an der Luther gemeinsam mit mehreren Gelehrten gearbeitet hatte.", en: "The translation appeared in September 1522, the so-called September Testament. Thanks to printing, it spread quickly, and after a short time a second edition was needed. In 1534 the complete Bible was finally available in German; Luther had worked on it together with several scholars.", fr: "La traduction parut en septembre 1522 : c'est le « Testament de septembre ». Grâce à l'imprimerie, elle se répandit rapidement, et une deuxième édition fut bientôt nécessaire. En 1534 parut enfin la Bible complète en allemand, à laquelle Luther avait travaillé avec plusieurs savants." },
      { de: "Luther wollte eine Sprache, die jeder verstand. In seinem „Sendbrief vom Dolmetschen“ von 1530 schrieb er sinngemäß, man müsse die Mutter im Haus, die Kinder auf der Gasse und den einfachen Mann auf dem Markt fragen und ihnen „aufs Maul sehen“, wie sie reden. Daraus wurde die bekannte Formel, man solle „dem Volk aufs Maul schauen“.", en: "Luther wanted a language that everyone understood. In his “Open Letter on Translating” of 1530, he wrote in essence that one must ask the mother at home, the children in the street and the common man in the market, and “look at their mouths” to see how they speak. This became the famous formula that one should “look the people in the mouth”.", fr: "Luther voulait une langue que tout le monde comprenne. Dans sa « Lettre ouverte sur la traduction » de 1530, il écrivit en substance qu'il fallait interroger la mère à la maison, les enfants dans la rue et l'homme du peuple au marché, et « regarder leur bouche » pour voir comment ils parlent. C'est devenu la célèbre formule selon laquelle il faut « écouter le peuple parler »." },
      { de: "Als Grundlage diente ihm nach eigener Aussage die Sprache der sächsischen Kanzlei, die in vielen Regionen verstanden wurde. Über Generationen wurde seine Bibel in Kirchen, Schulen und Familien gelesen und trug so wesentlich zur Entstehung einer gemeinsamen deutschen Schriftsprache bei. Viele Redewendungen, etwa „sein Licht unter den Scheffel stellen“, sind durch seine Übersetzung bis heute lebendig.", en: "By his own account, his basis was the language of the Saxon chancery, which was understood in many regions. For generations his Bible was read in churches, schools and families, and so contributed substantially to the emergence of a common written German. Many idioms, such as “to hide one's light under a bushel”, are still alive today thanks to his translation.", fr: "Il s'appuya, selon ses propres dires, sur la langue de la chancellerie saxonne, comprise dans de nombreuses régions. Pendant des générations, sa Bible fut lue dans les églises, les écoles et les familles, et contribua ainsi largement à l'émergence d'une langue écrite allemande commune. Beaucoup d'expressions, comme « cacher sa lumière sous le boisseau », sont encore vivantes grâce à sa traduction." }
    ],
    glossary: { "Reichstag": ["Imperial Diet", "diète d'Empire"], "Kurfürst": ["Elector (prince)", "prince électeur"], "Untertanen": ["subject", "sujet"], "Schein": ["(zum Schein) for appearances", "(zum Schein) pour la forme, en apparence"], "überfallen": ["attack, ambush", "attaquer"], "Wartburg": ["Wartburg (castle near Eisenach)", "Wartburg (château près d'Eisenach)"], "Eisenach": ["Eisenach (town in Thuringia)", "Eisenach (ville de Thuringe)"], "Reichsacht": ["imperial ban", "ban de l'Empire"], "verhängt": ["imposed", "prononcé, infligé"], "Junker": ["squire, young nobleman", "hobereau, jeune noble"], "verkleidet": ["disguised", "déguisé"], "Septembertestament": ["September Testament (Luther's New Testament, 1522)", "Testament de septembre (Nouveau Testament de Luther, 1522)"], "rasch": ["quickly", "rapidement"], "Auflage": ["edition", "édition, tirage"], "vollständige": ["complete", "complète"], "Gelehrten": ["scholars", "savants"], "Sendbrief": ["open letter", "lettre ouverte"], "Dolmetschen": ["translating", "traduction"], "sinngemäß": ["in essence", "en substance"], "Gasse": ["lane, street", "ruelle, rue"], "Maul": ["mouth (of an animal; colloquial for a person)", "gueule, bouche (familier)"], "Formel": ["formula", "formule"], "Grundlage": ["basis", "base"], "sächsischen": ["Saxon", "saxonne"], "Kanzlei": ["chancery", "chancellerie"], "Entstehung": ["emergence", "naissance, émergence"], "Scheffel": ["bushel", "boisseau"] },
    questions: [
      { q: "Wo übersetzte Luther das Neue Testament?", o: ["Auf der Wartburg bei Eisenach", "In Worms", "In Rom"], a: 0 },
      { q: "Aus welcher Sprache übersetzte er das Neue Testament?", o: ["Aus dem Griechischen", "Aus dem Französischen", "Aus dem Englischen"], a: 0 },
      { q: "Was ist das „Septembertestament“?", o: ["Luthers Übersetzung des Neuen Testaments von 1522", "Ein Vertrag aus dem Jahr 1521", "Die vollständige Bibel von 1534"], a: 0 },
      { q: "Was meinte Luther mit „aufs Maul sehen“?", o: ["Man solle darauf achten, wie die einfachen Leute sprechen.", "Man solle nur lateinisch schreiben.", "Man solle den Menschen den Mund verbieten."], a: 0 },
      { q: "Welche Sprache diente ihm als Grundlage?", o: ["Die Sprache der sächsischen Kanzlei", "Das Plattdeutsche", "Die Sprache des Papstes"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-c2-1", unit: "c2-1", level: "C2", icon: "radio",
    title: "Die Sprachsprechstunde", title_fr: "La consultation linguistique",
    context: "A radio call-in programme about language. Lea, a listener, asks the linguist Dr. Wiegand about an email that went wrong.", context_fr: "Une émission de radio sur la langue, avec appels d'auditeurs. Lea, une auditrice, interroge le linguiste Dr. Wiegand sur un courriel mal reçu.",
    words: [["aufeinanderprallen", "to clash", "se heurter"], ["die Stilebene, -n", "the register, the stylistic level", "le niveau de langue"], ["die Führungskraft, ¨-e", "the manager, the executive", "le cadre, la personne qui dirige"], ["spiegeln", "to mirror", "refléter"], ["das Gegenüber", "the other person", "l'interlocuteur"]],
    lines: [["Moderatorin", "Willkommen zur Sprachsprechstunde. Am Telefon ist Lea aus Kassel. Worum geht es?", "de-DE"], ["Lea", "Ich habe meinem neuen Chef geschrieben: „Hi Herr Krause, hab Ihre Mail gekriegt, passt alles.“ Seitdem ist er ziemlich kühl zu mir.", "de-DE"], ["Dr. Wiegand", "Da prallen zwei Stilebenen aufeinander. „Herr Krause“ und „Ihre“ sind förmlich, „Hi“, „hab“ und „gekriegt“ sind umgangssprachlich. Diese Mischung wirkt auf viele unsicher oder sogar respektlos.", "de-DE"], ["Lea", "Aber man schreibt doch heute überall so locker!", "de-DE"], ["Dr. Wiegand", "Unter Kollegen vielleicht. Bei einer ersten Nachricht an eine Führungskraft ist man meines Erachtens mit „Guten Tag, Herr Krause, vielen Dank für Ihre Nachricht“ auf der sicheren Seite.", "de-DE"], ["Moderatorin", "Und wenn der Chef selbst locker schreibt?", "de-DE"], ["Dr. Wiegand", "Dann kann man sich seinem Ton anpassen. Letzten Endes gilt: Wer den Stil seines Gegenübers spiegelt, liegt selten falsch.", "de-DE"], ["Lea", "Gut, dann schreibe ich ihm morgen noch einmal, diesmal im richtigen Ton.", "de-DE"]],
    gist: ["Worum geht es in dem Anruf?", ["Um eine E-Mail im falschen Stil", "Um einen Rechtschreibfehler", "Um eine Bewerbung"]],
    detail: [["Was hat Lea geschrieben?", ["Eine lockere Nachricht an ihren neuen Chef", "Eine Beschwerde an die Firma", "Eine Kündigung"]], ["Warum wirkt die Nachricht problematisch?", ["Sie mischt förmliche und umgangssprachliche Elemente.", "Sie ist viel zu lang.", "Sie enthält viele Fehler."]], ["Was empfiehlt Dr. Wiegand für eine erste Nachricht?", ["Einen höflichen, förmlichen Anfang", "Gar nicht zu schreiben", "Nur kurze Sätze ohne Anrede"]], ["Was gilt laut Dr. Wiegand letzten Endes?", ["Wer den Stil des Gegenübers spiegelt, liegt selten falsch.", "Man sollte immer duzen.", "E-Mails sind unwichtig."]]],
    decode: ["Da prallen zwei Stilebenen aufeinander", "Wer den Stil seines Gegenübers spiegelt, liegt selten falsch"],
    tip: "Notice how Dr. Wiegand himself shifts register: on air he uses elevated fixed phrases (meines Erachtens, letzten Endes) and an idiom (auf der sicheren Seite sein), while Lea speaks casually. Listening for register is part of understanding at C2.", tip_fr: "Remarque que Dr. Wiegand change lui-même de registre : à l'antenne, il emploie des tournures figées soutenues (meines Erachtens, letzten Endes) et une expression (auf der sicheren Seite sein), tandis que Lea parle de façon familière. Repérer le registre fait partie de la compréhension au C2."
  }]);

  W.PROMPTS.push({ id: "de-c2-1", level: "C2", q: "Halte einen Vortrag (etwa drei bis vier Minuten): „Verkümmert unsere Sprache durch Kurznachrichten?“ Nimm Stellung, berücksichtige Gegenargumente und mach einen Vorschlag.", en: "Give a talk (about three to four minutes): “Is our language withering because of text messages?” Take a position, consider counter-arguments and make a proposal.", fr: "Fais un exposé (environ trois à quatre minutes) : « Notre langue s'appauvrit-elle à cause des messages courts ? » Prends position, tiens compte des contre-arguments et fais une proposition.", time: 240,
    phrases: ["Auf den ersten Blick scheint vieles dafür zu sprechen, dass…", "Meines Erachtens greift diese Sorge zu kurz.", "Entscheidend ist nicht…, sondern…", "Letzten Endes…", "Ich plädiere daher für…"],
    model: "Mein Thema ist die Frage, ob unsere Sprache durch Kurznachrichten verkümmert. Auf den ersten Blick scheint vieles dafür zu sprechen: Abkürzungen, fehlende Satzzeichen, Emojis statt Worten. Meines Erachtens greift diese Sorge jedoch zu kurz. Klagen über den angeblichen Verfall der Sprache sind nicht neu, und Sprachwandel ist ein ganz natürlicher Vorgang. Entscheidend ist nicht, wie wir chatten, sondern ob wir zwischen verschiedenen Stilebenen wechseln können. Wer einer Freundin „bin gleich da“ schreibt, kann trotzdem einen tadellosen Geschäftsbrief verfassen. Problematisch wird es erst, wenn jemand nur noch einen einzigen, saloppen Ton beherrscht. Hier ist die Schule gefragt: Sie sollte bewusst machen, dass jede Situation ihren eigenen Stil verlangt, und Gelegenheiten schaffen, gehobene, neutrale und lockere Texte zu schreiben. Letzten Endes ist sprachliche Vielfalt kein Verlust, sondern ein Reichtum. Ich plädiere daher für Gelassenheit, aber auch für mehr Sprachbewusstsein." });

  W.WRITING_GUIDE["c2-1"] = { genre: "An essay (C2)", genre_fr: "Un essai (C2)",
    plan: [["A lead-in that shows the tension, and your thesis.", "Une amorce qui montre la tension, et ta thèse."], ["Arguments for elevated language.", "Les arguments en faveur de la langue soutenue."], ["The other side.", "L'autre versant."], ["Your solution.", "Ta solution."], ["A conclusion with an image.", "Une conclusion avec une image."]],
    marks: [["Meines Erachtens", "a fixed genitive for your thesis", "un génitif figé pour la thèse"], ["Zunächst spricht vieles für", "the first argument", "le premier argument"], ["Gerade darin liegt jedoch auch die Kehrseite", "the turn to the other side", "le passage à l'autre versant"], ["Wie lässt sich dieser Widerspruch auflösen?", "a question leading to your solution", "une question qui mène à ta solution"], ["Letzten Endes", "a fixed genitive for the conclusion", "un génitif figé pour la conclusion"], ["unser Licht nicht unter den Scheffel stellen", "a biblical idiom", "une expression biblique"]] };

  /* Atelier de langue : champs allemands d'abord, puis anglais et français (voir localize.js). */
  W.LEXIS = W.LEXIS || {};
  W.LEXIS["c2-1"] = {
    colloc: [
      ["sich gewählt ausdrücken", "to express oneself in a refined way", "s'exprimer dans une langue choisie", "Sie drückt sich stets sehr gewählt aus.", "drückt", ["druckt", "bringt"]],
      ["den richtigen Ton treffen", "to strike the right note", "trouver le ton juste", "In seiner Rede traf er genau den richtigen Ton.", "traf", ["trat", "traute"]],
      ["einen Text überarbeiten", "to revise a text", "remanier un texte", "Sie überarbeitete den Text dreimal.", "überarbeitete", ["überholte", "übertrieb"]],
      ["ins Deutsche übertragen", "to translate into German", "traduire en allemand", "Luther übertrug das Neue Testament ins Deutsche.", "übertrug", ["übertraf", "überzog"]],
      ["eine Wendung prägen", "to coin a phrase", "forger une expression", "Luther prägte viele bekannte Wendungen.", "prägte", ["prüfte", "pflegte"]],
      ["Anstoß erregen", "to cause offence", "choquer, faire scandale", "Seine derbe Wortwahl erregte Anstoß.", "erregte", ["erreichte", "ergriff"]],
      ["sich im Ton vergreifen", "to strike the wrong tone", "se tromper de ton", "In der E-Mail hat er sich im Ton vergriffen.", "vergriffen", ["vergraben", "verglichen"]],
      ["einen Sachverhalt darlegen", "to set out the facts", "exposer les faits", "Bitte legen Sie den Sachverhalt kurz dar.", "legen", ["setzen", "machen"]],
      ["Fremdwörter vermeiden", "to avoid foreign words", "éviter les mots savants d'origine étrangère", "In Leichter Sprache vermeidet man Fremdwörter.", "vermeidet", ["vermisst", "vermietet"]],
      ["einen Ausdruck abschwächen", "to tone down an expression", "atténuer une expression", "Statt „falsch“ schrieb sie „nicht ganz zutreffend“ und schwächte den Ausdruck so ab.", "schwächte", ["schwächelte", "schwärmte"]]
    ],
    wf: [
      ["Seine ___ ist sehr gewählt. (AUSDRÜCKEN)", "Ausdrucksweise"],
      ["Durch die vielen Fremdwörter wirkt der Text ___. (SCHRAUBEN)", "geschraubt"],
      ["Das ist eine sehr ___ Beschreibung. (TREFFEN)", "treffende"],
      ["Die ___ des Textes dauerte eine Woche. (ÜBERARBEITEN)", "Überarbeitung"],
      ["Luthers Bibel trug zur ___ der Schriftsprache bei. (EINHEITLICH)", "Vereinheitlichung"],
      ["Dieses Wort ist heute kaum noch ___. (GEBRAUCHEN)", "gebräuchlich"],
      ["Die Rednerin erklärte alles sehr ___. (ANSCHAUEN)", "anschaulich"],
      ["Die ___ des Buchdrucks veränderte Europa. (ERFINDEN)", "Erfindung"]
    ],
    kwt: [
      ["Ich finde, dass dieser Stil zu geschraubt ist.", "ERACHTENS", "___ zu geschraubt.", "Meines Erachtens ist dieser Stil"],
      ["Irgendwann wird er es verstehen.", "TAGES", "___ verstehen.", "Eines Tages wird er es"],
      ["Am Ende hat sich die Mühe gelohnt.", "ENDES", "___ gelohnt.", "Letzten Endes hat sich die Mühe"],
      ["Es fiel ihr schwer, aber sie verabschiedete sich.", "HERZENS", "___ sich.", "Schweren Herzens verabschiedete sie"],
      ["Er spricht immer sehr sorgfältig und gepflegt.", "GEWÄHLT", "Er ___ aus.", "drückt sich immer sehr gewählt"],
      ["Luther übersetzte das Neue Testament ins Deutsche.", "ÜBERTRUG", "Luther ___.", "übertrug das Neue Testament ins Deutsche"]
    ],
    idioms: [
      ["sein Licht unter den Scheffel stellen", "seine Fähigkeiten verbergen, zu bescheiden sein", "to hide one's light under a bushel", "cacher ses talents", "Du musst dein Licht nicht unter den Scheffel stellen.", "dein Licht nicht unter den Scheffel stellen"],
      ["Perlen vor die Säue werfen", "etwas Wertvolles an jemanden verschwenden, der es nicht schätzt", "to cast pearls before swine", "donner de la confiture aux cochons", "Ihm Gedichte vorzulesen, hieße Perlen vor die Säue werfen.", "Perlen vor die Säue werfen"],
      ["auf Sand gebaut haben", "sich auf etwas Unsicheres verlassen", "to have built on sand", "bâtir sur du sable", "Mit diesem Plan hat die Firma auf Sand gebaut.", "auf Sand gebaut"],
      ["seine Hände in Unschuld waschen", "jede Verantwortung von sich weisen", "to wash one's hands of it", "s'en laver les mains", "Nach dem Skandal wusch der Minister seine Hände in Unschuld.", "seine Hände in Unschuld"],
      ["jemandem ein Dorn im Auge sein", "jemanden sehr stören", "to be a thorn in someone's side", "être une épine dans le pied de quelqu'un", "Die neue Regel ist vielen ein Dorn im Auge.", "ein Dorn im Auge"],
      ["der Stein des Anstoßes", "die Ursache eines Streits", "the bone of contention", "la pierre d'achoppement", "Der Stein des Anstoßes war ein einziges Wort.", "Der Stein des Anstoßes"],
      ["die Spreu vom Weizen trennen", "das Wertvolle vom Wertlosen unterscheiden", "to separate the wheat from the chaff", "séparer le bon grain de l'ivraie", "Die Prüfung soll die Spreu vom Weizen trennen.", "die Spreu vom Weizen trennen"],
      ["ein Wolf im Schafspelz", "jemand, der harmlos wirkt, aber gefährlich ist", "a wolf in sheep's clothing", "un loup déguisé en agneau", "Hinter dem freundlichen Lächeln steckt ein Wolf im Schafspelz.", "ein Wolf im Schafspelz"]
    ]
  };

  W.COURSE.push({ id: "c2-1", level: "C2", icon: "pen-tool", title: "Style and register", title_fr: "Style et registre",
    intro: "Welcome to C2. At this level, the question is no longer whether you can say something, but how. In this unit, you'll learn the stylistic levels of German (speisen, essen, futtern), the old forms that still live in modern German (eines Tages, letzten Endes, stünde), and how to rewrite a text for a different reader. You'll also read how Martin Luther's Bible translation shaped written German.",
    intro_fr: "Bienvenue au C2. À ce niveau, la question n'est plus de savoir si tu peux dire quelque chose, mais comment. Dans cette unité, tu vas apprendre les niveaux de langue de l'allemand (speisen, essen, futtern), les formes anciennes encore vivantes (eines Tages, letzten Endes, stünde), et la façon de réécrire un texte pour un autre lecteur. Tu liras aussi comment la traduction de la Bible par Martin Luther a façonné l'allemand écrit.",
    can: ["Recognise and choose stylistic levels, and use contrast on purpose", "Use adverbial genitives and recognise old forms", "Rewrite a text in another register without losing information", "Talk about style and the history of German", "Write an essay on language and society (C2)"],
    can_fr: ["Reconnaître et choisir les niveaux de langue, et jouer sur le contraste", "Employer les génitifs adverbiaux et reconnaître les formes anciennes", "Réécrire un texte dans un autre registre sans perdre d'information", "Parler du style et de l'histoire de l'allemand", "Écrire un essai sur la langue et la société (C2)"],
    lessons: [133, 134, 135], vocab: ["stilebenenDE", "sprachgeschichteDE"], reading: "luther", prompt: "de-c2-1",
    writing: { task: "Write an essay (300-350 words): “Elevated language: a sign of education or a means of exclusion?” Include a lead-in and thesis, arguments for elevated language, the other side, your solution, and a conclusion.", task_fr: "Écris un essai (300 à 350 mots) : « La langue soutenue : signe de culture ou instrument d'exclusion ? » Avec une amorce et une thèse, les arguments en faveur de la langue soutenue, l'autre versant, ta solution, et une conclusion.", words: "300-350",
      tips: ["Meines Erachtens…", "Zunächst spricht vieles für…", "Gerade darin liegt jedoch auch die Kehrseite: …", "Wie lässt sich dieser Widerspruch auflösen?", "Letzten Endes…"],
      checklist: ["I wrote a lead-in and a clear thesis", "I presented both sides with examples", "I proposed a solution", "I varied my register on purpose and used at least one fixed genitive", "I wrote between 300 and 350 words"],
      checklist_fr: ["J'ai écrit une amorce et une thèse claire", "J'ai présenté les deux versants avec des exemples", "J'ai proposé une solution", "J'ai varié le registre à dessein et employé au moins un génitif figé", "J'ai écrit entre 300 et 350 mots"],
      model: "Wer „speisen“ statt „essen“ sagt oder von einem „Antlitz“ statt von einem „Gesicht“ spricht, erntet oft zweierlei: Bewunderung für seine Bildung oder den Vorwurf, sich über andere zu erheben. Gehobene Sprache ist also nie nur eine Frage des Stils, sondern auch eine Frage der Zugehörigkeit. Meines Erachtens ist sie weder grundsätzlich elitär noch per se ein Zeichen von Bildung; entscheidend ist, wie und wo man sie einsetzt.\n\nZunächst spricht vieles für einen bewussten Umgang mit gehobenen Ausdrücken. Sie erlauben Nuancen, die die Alltagssprache nicht kennt: Wer sagt, jemand sei „entschlafen“, drückt Trauer und Respekt aus, die im nüchternen „gestorben“ nicht mitschwingen. Zudem öffnet ein großer Wortschatz den Zugang zu Literatur, Wissenschaft und Politik. Wer ihn nicht beherrscht, bleibt von wichtigen Debatten leicht ausgeschlossen. Nicht zuletzt kann ein einziges, gut gewähltes Wort einem Text Gewicht verleihen.\n\nGerade darin liegt jedoch auch die Kehrseite. Behörden, Gerichte und manche Fachleute bedienen sich einer Sprache, die viele Menschen kaum verstehen. Ob gewollt oder nicht: Ein geschraubter Satz kann ebenso ausgrenzen wie ein verschlossenes Tor. Wer einen Bescheid dreimal lesen muss, um ihn zu verstehen, fühlt sich zu Recht nicht ernst genommen. Nicht umsonst gibt es inzwischen Bestrebungen, wichtige Informationen auch in Leichter Sprache anzubieten.\n\nWie lässt sich dieser Widerspruch auflösen? Ich halte es für entscheidend, die gehobene Sprache nicht abzuschaffen, sondern allen zugänglich zu machen. Schulen sollten nicht nur Rechtschreibung lehren, sondern auch ein Gespür für Stilebenen vermitteln. Wer weiß, wann ein gewählter Ausdruck angemessen ist und wann er abschreckt, kann frei zwischen den Registern wechseln.\n\nLetzten Endes ist Sprache ein Werkzeug. Ein Hammer ist weder gut noch böse; es kommt darauf an, ob man mit ihm ein Haus baut oder eine Scheibe einschlägt. Ebenso kann gehobene Sprache verbinden oder trennen. Gebildet ist meines Erachtens nicht, wer möglichst viele seltene Wörter kennt, sondern wer seinen Ausdruck dem Gegenüber anpasst. In diesem Sinne sollten wir unser Licht nicht unter den Scheffel stellen, aber auch niemanden mit unserem Wortschatz erschlagen." } });
})();
