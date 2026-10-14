/* Cours d'allemand, unité C2-10 « Words about words / Des mots sur les mots » : traduire (faux amis pour
   anglophones et pour francophones, mots dits intraduisibles, équivalence idiomatique), les mots qu'on confond
   (scheinbar / anscheinend, wieder / wider, seit / seid, das / dass, lehren / lernen, endlich / schließlich), relire
   et corriger son propre texte. Dernière unité du cours. Personnages fictifs, prénoms allemands.
   Faits vérifiables seulement : les frères Jacob et Wilhelm Grimm publient en 1812 le premier volume des
   « Kinder- und Hausmärchen » ; en 1837 ils font partie des « Sept de Göttingen », professeurs révoqués pour avoir
   protesté contre l'abrogation de la constitution du royaume de Hanovre ; en 1838 ils acceptent l'offre d'un
   éditeur d'écrire un grand dictionnaire de la langue allemande (de Luther à Goethe, avec des citations) ;
   premier volume en 1854 ; Wilhelm meurt en 1859, Jacob en 1863, en plein travail sur le mot « Frucht » ; le
   travail se poursuit au XXe siècle à Berlin-Est et à Göttingen ; achèvement en 1961, plus de 120 ans après le
   début ; 32 volumes, environ 320 000 entrées ; consultable gratuitement en ligne. Une « Billion » allemande vaut
   mille milliards (douze zéros). « Wolkenkratzer » est un calque de « skyscraper ». */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "uebersetzungDE", icon: "languages", title: "Translation", title_fr: "La traduction", level: "C2", words: [
    ["der falsche Freund, -e", "the false friend", "le faux ami", "„Eventuell“ ist für Englischsprachige ein falscher Freund."],
    ["die Übersetzung, -en", "the translation", "la traduction", "Die Übersetzung klingt, als wäre sie auf Deutsch geschrieben."],
    ["sinngemäß", "in essence, freely", "librement, selon le sens", "Er hat den Satz sinngemäß übersetzt."],
    ["die Entsprechung, -en", "the equivalent", "l'équivalent", "Für „Feierabend“ gibt es im Englischen keine genaue Entsprechung."],
    ["der Dolmetscher, - (die Dolmetscherin)", "the interpreter", "l'interprète", "Die Dolmetscherin übersetzte die Rede simultan."],
    ["dolmetschen", "to interpret", "faire l'interprète", "Bei dem Gespräch musste ich dolmetschen."],
    ["die Zielsprache, -n", "the target language", "la langue cible", "Man übersetzt am besten in die eigene Muttersprache als Zielsprache."],
    ["die Ausgangssprache, -n", "the source language", "la langue source", "Die Ausgangssprache des Romans ist Französisch."],
    ["unübersetzbar", "untranslatable", "intraduisible", "Manche Wortspiele sind praktisch unübersetzbar."],
    ["die Mehrdeutigkeit, -en", "ambiguity", "l'ambiguïté", "Die Mehrdeutigkeit des Satzes ist gewollt."],
    ["die Lehnübersetzung, -en", "the calque, the loan translation", "le calque", "„Wolkenkratzer“ ist eine Lehnübersetzung von „skyscraper“."],
    ["die Wiedergabe", "the rendering, the reproduction", "la restitution, le rendu", "Die Wiedergabe der Ironie ist besonders schwierig."],
    ["treffsicher", "accurate, unerring", "juste, précis", "Sie findet immer treffsicher das richtige Wort."],
    ["das Fingerspitzengefühl", "tact, a delicate touch", "le doigté", "Übersetzen erfordert viel Fingerspitzengefühl."],
    ["der Kummerspeck", "weight gained from comfort eating", "les kilos du chagrin", "Nach der Trennung hat er Kummerspeck angesetzt."],
    ["die Torschlusspanik", "fear of missing the boat", "la peur de rater le coche", "Mit vierzig bekam sie Torschlusspanik."]
  ] },
  { id: "woerterbuchDE", icon: "book-marked", title: "Dictionaries and spelling", title_fr: "Dictionnaires et orthographe", level: "C2", words: [
    ["das Wörterbuch, ¨-er", "the dictionary", "le dictionnaire", "Ein gutes Wörterbuch zeigt auch, wie ein Wort gebraucht wird."],
    ["das Stichwort, -e / ¨-er", "the headword, the entry word", "l'entrée, le mot-vedette", "Das Grimm'sche Wörterbuch enthält rund 320 000 Stichwörter."],
    ["der Eintrag, ¨-e", "the entry", "l'article (de dictionnaire)", "Der Eintrag zu „Frucht“ ist besonders lang."],
    ["die Wortfamilie, -n", "the word family", "la famille de mots", "„Fahren, Fahrt, Fahrer“ gehören zu einer Wortfamilie."],
    ["das Gegenteil, -e", "the opposite", "le contraire", "Das Gegenteil von „scheinbar“ ist nicht „anscheinend“."],
    ["die Etymologie", "etymology", "l'étymologie", "Die Etymologie erklärt die Herkunft der Wörter."],
    ["das Nachschlagewerk, -e", "the reference work", "l'ouvrage de référence", "Der Duden ist ein bekanntes Nachschlagewerk."],
    ["nachschlagen", "to look up", "chercher (dans un ouvrage)", "Schlag das Wort doch im Wörterbuch nach!"],
    ["der Zweifelsfall, ¨-e", "the doubtful case", "le cas douteux", "Im Zweifelsfall hilft ein Blick ins Wörterbuch."],
    ["die Groß- und Kleinschreibung", "capitalisation", "l'emploi des majuscules et des minuscules", "Die Groß- und Kleinschreibung ist im Deutschen eine Herausforderung."],
    ["korrekturlesen", "to proofread", "relire, corriger", "Kannst du meinen Text korrekturlesen?"],
    ["der Tippfehler, -", "the typo", "la faute de frappe", "Im Brief waren drei Tippfehler."],
    ["die Stilblüte, -n", "the howler, the unintentionally funny phrase", "la perle (formulation involontairement comique)", "Die Klassenarbeit enthielt einige herrliche Stilblüten."],
    ["die Silbentrennung", "hyphenation", "la césure (des mots)", "Die Silbentrennung richtet sich nach den Sprechsilben."],
    ["die Abkürzung, -en", "the abbreviation", "l'abréviation", "„Usw.“ ist die Abkürzung für „und so weiter“."],
    ["das Komma, -s / Kommata", "the comma", "la virgule", "Vor „dass“ steht immer ein Komma."]
  ] });

  W.LESSONS.push(
  {
    id: 160, level: "C2", icon: "languages",
    title: "Eventuell, aktuell, bekommen: false friends and translation", title_fr: "Konkurs, Promotion, brav : faux amis et traduction",
    subtitle: "The traps of words that look familiar, and how to translate meaning rather than words.", subtitle_fr: "Les pièges des mots qui semblent familiers, et comment traduire le sens plutôt que les mots.",
    body: `
<h2>False friends for English speakers</h2>
<table>
<tr><th>German</th><th>means</th><th>not</th></tr>
<tr><td><s-de>bekommen</s-de></td><td>to receive</td><td>to become (<s-de>werden</s-de>)</td></tr>
<tr><td><s-de>eventuell</s-de></td><td>possibly</td><td>eventually (<s-de>schließlich</s-de>)</td></tr>
<tr><td><s-de>aktuell</s-de></td><td>current</td><td>actual (<s-de>tatsächlich</s-de>)</td></tr>
<tr><td><s-de>das Gift</s-de></td><td>poison</td><td>gift (<s-de>das Geschenk</s-de>)</td></tr>
<tr><td><s-de>die Billion</s-de></td><td>trillion (10¹²)</td><td>billion (<s-de>die Milliarde</s-de>)</td></tr>
<tr><td><s-de>sensibel</s-de></td><td>sensitive</td><td>sensible (<s-de>vernünftig</s-de>)</td></tr>
<tr><td><s-de>also</s-de></td><td>so, therefore</td><td>also (<s-de>auch</s-de>)</td></tr>
<tr><td><s-de>spenden</s-de></td><td>to donate</td><td>to spend (<s-de>ausgeben</s-de>)</td></tr>
</table>
<h2>Words that resist translation</h2>
<p><s-de>Feierabend</s-de> (the end of the working day, with its sense of freedom), <s-de>Kummerspeck</s-de> (weight gained from comfort eating), <s-de>Torschlusspanik</s-de> (fear of missing the boat). They are not untranslatable, but you need more words.</p>
<h2>Translate meaning, not words</h2>
<p><s-de>Das ist mir Wurst.</s-de> is not about sausage: “I couldn't care less.” Look for the expression a native speaker would use in the same situation.</p>
<div class="tip">Distrust every word that seems too easy. When a German word looks like an English one, check it in a dictionary before you rely on it.</div>
`,
    body_fr: `
<h2>Faux amis pour les francophones</h2>
<table>
<tr><th>allemand</th><th>veut dire</th><th>et non</th></tr>
<tr><td><s-de>der Konkurs</s-de></td><td>la faillite</td><td>le concours (<s-de>der Wettbewerb</s-de>)</td></tr>
<tr><td><s-de>die Promotion</s-de></td><td>le doctorat</td><td>la promotion (<s-de>die Beförderung</s-de>)</td></tr>
<tr><td><s-de>brav</s-de></td><td>sage, obéissant</td><td>brave (<s-de>mutig</s-de>)</td></tr>
<tr><td><s-de>der Termin</s-de></td><td>le rendez-vous</td><td>le terme (<s-de>das Ende, die Frist</s-de>)</td></tr>
<tr><td><s-de>das Lokal</s-de></td><td>le bistrot, le restaurant</td><td>le local (<s-de>der Raum</s-de>)</td></tr>
<tr><td><s-de>die Dose</s-de></td><td>la boîte de conserve</td><td>la dose (<s-de>die Dosis</s-de>)</td></tr>
<tr><td><s-de>die Marmelade</s-de></td><td>la confiture</td><td>la marmelade (<s-de>das Kompott</s-de>)</td></tr>
<tr><td><s-de>das Tablett</s-de></td><td>le plateau</td><td>la tablette (<s-de>das Tablet</s-de>)</td></tr>
</table>
<h2>Les mots qui résistent à la traduction</h2>
<p><s-de>Feierabend</s-de> (la fin de la journée de travail, avec son goût de liberté), <s-de>Kummerspeck</s-de> (les kilos pris en mangeant pour se consoler), <s-de>Torschlusspanik</s-de> (la peur de rater le coche). Ils ne sont pas intraduisibles, mais il faut plus de mots.</p>
<h2>Traduire le sens, pas les mots</h2>
<p><s-de>Das ist mir Wurst.</s-de> ne parle pas de saucisse : « Je m'en fiche. » Cherche l'expression qu'emploierait un locuteur natif dans la même situation.</p>
<div class="tip">Méfie-toi de chaque mot qui paraît trop facile. Quand un mot allemand ressemble à un mot français, vérifie-le dans un dictionnaire avant de t'y fier.</div>
`,
    examples: [
      ["Das Konzert findet eventuell im Freien statt.", "The concert may possibly take place outdoors.", "Le concert aura éventuellement lieu en plein air."],
      ["Das Thema ist gerade sehr aktuell.", "The topic is very topical right now.", "Le sujet est très actuel en ce moment."],
      ["Ich bekomme morgen ein Paket.", "I'm getting a parcel tomorrow.", "Je reçois un colis demain."],
      ["Eine Billion hat zwölf Nullen.", "A German Billion (a trillion) has twelve zeros.", "Un « Billion » allemand (mille milliards) a douze zéros."],
      ["Die Firma hat Konkurs angemeldet.", "The company has filed for bankruptcy.", "L'entreprise a déposé le bilan."],
      ["Nach ihrer Promotion trägt sie den Doktortitel.", "After her doctorate she holds the title of doctor.", "Après son doctorat, elle porte le titre de docteur."],
      ["Endlich Feierabend! Jetzt geht's nach Hause.", "Finally, work's over! Time to go home.", "Enfin la fin de la journée ! On rentre."]
    ],
    quiz: [
      { q: "„Eventuell“ bedeutet…", q_fr: "« Eventuell » veut dire…", o: ["vielleicht", "schließlich", "sicher"], a: 0, ex: "eventuell = possibly.", ex_fr: "eventuell = éventuellement, peut-être." },
      { q: "„Der Konkurs“ ist…", q_fr: "« Der Konkurs » est…", o: ["die Pleite einer Firma", "ein Wettbewerb", "eine Prüfung"], a: 0, ex: "Konkurs = bankruptcy.", ex_fr: "Konkurs = faillite." },
      { q: "Eine Billion sind…", q_fr: "Un « Billion », c'est…", o: ["tausend Milliarden", "tausend Millionen", "hundert Milliarden"], a: 0, ex: "Twelve zeros.", ex_fr: "Douze zéros." },
      { q: "„Ich bekomme ein Paket“ heißt…", q_fr: "« Ich bekomme ein Paket » veut dire…", o: ["Ich erhalte ein Paket.", "Ich werde ein Paket.", "Ich schicke ein Paket."], a: 0, ex: "bekommen = erhalten.", ex_fr: "bekommen = erhalten (recevoir)." },
      { q: "„Feierabend“ ist…", q_fr: "« Feierabend » est…", o: ["das Ende des Arbeitstags", "ein Fest am Abend", "ein Feiertag"], a: 0, ex: "When work is over.", ex_fr: "Quand le travail est fini." }
    ]
  },
  {
    id: 161, level: "C2", icon: "spell-check",
    title: "Scheinbar oder anscheinend?: commonly confused words", title_fr: "Scheinbar ou anscheinend ? : les mots qu'on confond",
    subtitle: "Pairs that even many native speakers mix up, and how to tell them apart.", subtitle_fr: "Des paires que même beaucoup de germanophones confondent, et comment les distinguer.",
    body: `
<h2>Meaning</h2>
<table>
<tr><td><s-de>scheinbar</s-de></td><td>only seemingly (but not really): <s-de>Er ist nur scheinbar ruhig.</s-de></td></tr>
<tr><td><s-de>anscheinend</s-de></td><td>apparently, probably: <s-de>Sie ist anscheinend krank.</s-de></td></tr>
<tr><td><s-de>endlich</s-de></td><td>at last (after waiting): <s-de>Endlich ist sie da!</s-de></td></tr>
<tr><td><s-de>schließlich</s-de></td><td>in the end; after all: <s-de>Schließlich einigten sie sich.</s-de></td></tr>
<tr><td><s-de>lehren / lernen</s-de></td><td>to teach / to learn: <s-de>Sie lehrt Deutsch; ich lerne Deutsch.</s-de></td></tr>
<tr><td><s-de>mindestens / zumindest</s-de></td><td>at least (a quantity) / at least (a restriction): <s-de>mindestens drei Jahre</s-de> · <s-de>Zumindest hat er angerufen.</s-de></td></tr>
</table>
<h2>Spelling</h2>
<table>
<tr><td><s-de>wieder</s-de> (again) / <s-de>wider</s-de> (against)</td><td><s-de>wiederholen</s-de> · <s-de>widersprechen</s-de></td></tr>
<tr><td><s-de>seit</s-de> (since) / <s-de>seid</s-de> (you are)</td><td><s-de>seit drei Jahren</s-de> · <s-de>Ihr seid spät dran.</s-de></td></tr>
<tr><td><s-de>das</s-de> (article, pronoun) / <s-de>dass</s-de> (conjunction)</td><td><s-de>das Buch, das ich lese</s-de> · <s-de>Ich hoffe, dass…</s-de></td></tr>
</table>
<div class="tip">A test for das / dass: if you can replace the word with <s-de>dieses</s-de> or <s-de>welches</s-de>, write <s-de>das</s-de>; otherwise <s-de>dass</s-de>. And for scheinbar / anscheinend: <s-de>scheinbar</s-de> always means that the appearance is false.</div>
`,
    body_fr: `
<h2>Le sens</h2>
<table>
<tr><td><s-de>scheinbar</s-de></td><td>seulement en apparence (mais pas en réalité) : <s-de>Er ist nur scheinbar ruhig.</s-de></td></tr>
<tr><td><s-de>anscheinend</s-de></td><td>apparemment, sans doute : <s-de>Sie ist anscheinend krank.</s-de></td></tr>
<tr><td><s-de>endlich</s-de></td><td>enfin (après une attente) : <s-de>Endlich ist sie da!</s-de></td></tr>
<tr><td><s-de>schließlich</s-de></td><td>finalement ; après tout : <s-de>Schließlich einigten sie sich.</s-de></td></tr>
<tr><td><s-de>lehren / lernen</s-de></td><td>enseigner / apprendre : <s-de>Sie lehrt Deutsch; ich lerne Deutsch.</s-de></td></tr>
<tr><td><s-de>mindestens / zumindest</s-de></td><td>au moins (quantité) / du moins (restriction) : <s-de>mindestens drei Jahre</s-de> · <s-de>Zumindest hat er angerufen.</s-de></td></tr>
</table>
<h2>L'orthographe</h2>
<table>
<tr><td><s-de>wieder</s-de> (de nouveau) / <s-de>wider</s-de> (contre)</td><td><s-de>wiederholen</s-de> · <s-de>widersprechen</s-de></td></tr>
<tr><td><s-de>seit</s-de> (depuis) / <s-de>seid</s-de> (vous êtes)</td><td><s-de>seit drei Jahren</s-de> · <s-de>Ihr seid spät dran.</s-de></td></tr>
<tr><td><s-de>das</s-de> (article, pronom) / <s-de>dass</s-de> (conjonction)</td><td><s-de>das Buch, das ich lese</s-de> · <s-de>Ich hoffe, dass…</s-de></td></tr>
</table>
<div class="tip">Un test pour das / dass : si tu peux remplacer le mot par <s-de>dieses</s-de> ou <s-de>welches</s-de>, écris <s-de>das</s-de> ; sinon <s-de>dass</s-de>. Et pour scheinbar / anscheinend : <s-de>scheinbar</s-de> signifie toujours que l'apparence est trompeuse.</div>
`,
    examples: [
      ["Er ist nur scheinbar ruhig; in Wahrheit ist er sehr nervös.", "He only seems calm; in reality he's very nervous.", "Il n'est calme qu'en apparence ; en réalité, il est très nerveux."],
      ["Sie ist anscheinend krank, denn sie ist nicht gekommen.", "She's apparently ill, because she didn't come.", "Elle est apparemment malade, car elle n'est pas venue."],
      ["Nach drei Stunden war die Sitzung endlich vorbei.", "After three hours, the meeting was finally over.", "Au bout de trois heures, la réunion était enfin terminée."],
      ["Schließlich einigten sich alle auf einen Kompromiss.", "In the end, everyone agreed on a compromise.", "Finalement, tout le monde se mit d'accord sur un compromis."],
      ["Ich widerspreche Ihnen nur ungern, aber das stimmt nicht.", "I don't like contradicting you, but that's not true.", "Je n'aime pas vous contredire, mais ce n'est pas exact."],
      ["Wir wohnen seit drei Jahren in Wien.", "We've been living in Vienna for three years.", "Nous habitons à Vienne depuis trois ans."],
      ["Das Buch, das ich lese, zeigt, dass Sprache sich ständig wandelt.", "The book I'm reading shows that language is constantly changing.", "Le livre que je lis montre que la langue change sans cesse."]
    ],
    quiz: [
      { q: "Er ist nur ___ freundlich; in Wahrheit mag er uns nicht.", q_fr: "Er ist nur ___ freundlich; in Wahrheit mag er uns nicht.", o: ["scheinbar", "anscheinend", "offenbar"], a: 0, ex: "scheinbar = the appearance is false.", ex_fr: "scheinbar = l'apparence est trompeuse." },
      { q: "Ich ___ Ihnen in diesem Punkt.", q_fr: "Ich ___ Ihnen in diesem Punkt.", o: ["widerspreche", "wiederspreche", "wider spreche"], a: 0, ex: "wider = against.", ex_fr: "wider = contre." },
      { q: "Wir wohnen ___ zwei Jahren hier.", q_fr: "Wir wohnen ___ zwei Jahren hier.", o: ["seit", "seid", "seitdem"], a: 0, ex: "seit = since, for.", ex_fr: "seit = depuis." },
      { q: "Ich hoffe, ___ du kommst.", q_fr: "Ich hoffe, ___ du kommst.", o: ["dass", "das", "daß es"], a: 0, ex: "Conjunction: dass.", ex_fr: "Conjonction : dass." },
      { q: "Die Professorin ___ an der Universität Wien.", q_fr: "Die Professorin ___ an der Universität Wien.", o: ["lehrt", "lernt", "lehrnt"], a: 0, ex: "lehren = to teach.", ex_fr: "lehren = enseigner." }
    ]
  },
  {
    id: 162, level: "C2", kind: "functional", icon: "pen",
    title: "Everyday German: polishing your own text", title_fr: "L'allemand de tous les jours : peaufiner son propre texte",
    subtitle: "Read several times with a different focus each time: content, register, grammar, spelling, style.", subtitle_fr: "Relire plusieurs fois, avec chaque fois un autre angle : fond, registre, grammaire, orthographe, style.",
    body: `
<h2>Five readings</h2>
<table>
<tr><td>1. content</td><td>Have I answered the question? Is every paragraph necessary?</td></tr>
<tr><td>2. register</td><td>Does the tone fit the reader? (<s-de>Sie</s-de> or <s-de>du</s-de>, formal or casual)</td></tr>
<tr><td>3. grammar</td><td>verb position, cases after prepositions, adjective endings, agreement</td></tr>
<tr><td>4. spelling</td><td><s-de>das / dass, seit / seid, wieder / wider</s-de>, capital <s-de>Sie / Ihr</s-de>, nouns from verbs (<s-de>das Lernen</s-de>), commas before subordinate clauses</td></tr>
<tr><td>5. style</td><td>repetitions, sentences that are too long, filler words (<s-de>eigentlich, irgendwie</s-de>)</td></tr>
</table>
<h2>Useful habits</h2>
<p>Leave time between writing and correcting. Read aloud: what sounds bumpy is often wrong. Keep a list of your own typical mistakes and check them first.</p>
<h2>Correcting someone else's text</h2>
<p><s-de>Hier fehlt ein Komma.</s-de> · <s-de>„Dass“ schreibt man hier mit zwei s.</s-de> · <s-de>Die höfliche Anrede schreibt man groß.</s-de> · <s-de>Vielleicht könntest du diesen Satz kürzen?</s-de></p>
<div class="tip">Even at C2, everyone makes mistakes. What distinguishes an excellent writer is not the absence of mistakes in the first draft, but a reliable method for finding them before anyone else does.</div>
`,
    body_fr: `
<h2>Cinq relectures</h2>
<table>
<tr><td>1. le fond</td><td>Ai-je répondu à la question ? Chaque paragraphe est-il nécessaire ?</td></tr>
<tr><td>2. le registre</td><td>Le ton convient-il au lecteur ? (<s-de>Sie</s-de> ou <s-de>du</s-de>, soutenu ou familier)</td></tr>
<tr><td>3. la grammaire</td><td>place du verbe, cas après les prépositions, terminaisons des adjectifs, accords</td></tr>
<tr><td>4. l'orthographe</td><td><s-de>das / dass, seit / seid, wieder / wider</s-de>, majuscule de <s-de>Sie / Ihr</s-de>, verbes substantivés (<s-de>das Lernen</s-de>), virgule devant les subordonnées</td></tr>
<tr><td>5. le style</td><td>répétitions, phrases trop longues, mots de remplissage (<s-de>eigentlich, irgendwie</s-de>)</td></tr>
</table>
<h2>Les bonnes habitudes</h2>
<p>Laisse passer du temps entre l'écriture et la correction. Lis à voix haute : ce qui accroche est souvent faux. Tiens une liste de tes fautes habituelles et vérifie-les en premier.</p>
<h2>Corriger le texte de quelqu'un d'autre</h2>
<p><s-de>Hier fehlt ein Komma.</s-de> · <s-de>„Dass“ schreibt man hier mit zwei s.</s-de> · <s-de>Die höfliche Anrede schreibt man groß.</s-de> · <s-de>Vielleicht könntest du diesen Satz kürzen?</s-de></p>
<div class="tip">Même au C2, tout le monde fait des fautes. Ce qui distingue une excellente plume, ce n'est pas l'absence de fautes au premier jet, mais une méthode fiable pour les trouver avant tout le monde.</div>
`,
    examples: [
      ["Hier fehlt ein Komma vor „dass“.", "There's a comma missing before “dass”.", "Il manque une virgule devant « dass »."],
      ["„Dass“ schreibt man hier mit zwei s.", "“Dass” is spelt with two s here.", "Ici, « dass » s'écrit avec deux s."],
      ["Die höfliche Anrede schreibt man groß: „Ihre Antwort“.", "The polite form of address is capitalised: “Ihre Antwort”.", "Le vouvoiement prend une majuscule : « Ihre Antwort »."],
      ["Vielleicht könntest du diesen Satz kürzen?", "Maybe you could shorten this sentence?", "Tu pourrais peut-être raccourcir cette phrase ?"],
      ["Lies den Text laut: Was holprig klingt, ist oft falsch.", "Read the text aloud: what sounds bumpy is often wrong.", "Lis le texte à voix haute : ce qui accroche est souvent faux."],
      ["Ich lese den Text mehrmals, jedes Mal mit einem anderen Schwerpunkt.", "I read the text several times, each time with a different focus.", "Je relis le texte plusieurs fois, chaque fois avec un autre angle."],
      ["Beim Lernen hilft eine Liste der eigenen typischen Fehler.", "A list of your own typical mistakes helps when learning.", "Pour apprendre, une liste de ses propres fautes habituelles aide beaucoup."]
    ],
    quiz: [
      { q: "Ich hoffe, ___ es Ihnen gut geht.", q_fr: "Ich hoffe, ___ es Ihnen gut geht.", o: ["dass", "das", "daß"], a: 0, ex: "Conjunction: dass (ß is the old spelling).", ex_fr: "Conjonction : dass (ß est l'ancienne orthographe)." },
      { q: "Vielen Dank für ___ Nachricht. (polite)", q_fr: "Vielen Dank für ___ Nachricht. (vouvoiement)", o: ["Ihre", "ihre", "Ihren"], a: 0, ex: "Capital I, feminine accusative.", ex_fr: "Majuscule, accusatif féminin." },
      { q: "Which reading checks whether the tone fits the reader?", q_fr: "Quelle relecture vérifie si le ton convient au lecteur ?", o: ["The register reading", "The spelling reading", "The content reading"], o_fr: ["La relecture du registre", "La relecture de l'orthographe", "La relecture du fond"], a: 0, ex: "Sie or du, formal or casual.", ex_fr: "Sie ou du, soutenu ou familier." },
      { q: "Beim ___ hilft eine Fehlerliste. (lernen)", q_fr: "Beim ___ hilft eine Fehlerliste. (lernen)", o: ["Lernen", "lernen", "Lernens"], a: 0, ex: "A verb used as a noun is capitalised.", ex_fr: "Un verbe substantivé prend une majuscule." },
      { q: "A good habit when correcting:", q_fr: "Une bonne habitude pour corriger :", o: ["Read the text aloud.", "Correct immediately after writing, in one go.", "Only check the spelling."], o_fr: ["Lire le texte à voix haute.", "Corriger tout de suite après avoir écrit, en une seule fois.", "Ne vérifier que l'orthographe."], a: 0, ex: "What sounds bumpy is often wrong.", ex_fr: "Ce qui accroche est souvent faux." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    160: {
      gap: [["„Eventuell“ bedeutet „___“.", "vielleicht|möglicherweise"], ["Eine Billion hat zwölf ___.", "Nullen"], ["Die Firma hat ___ angemeldet. (Pleite)", "Konkurs|Insolvenz"], ["Nach der Arbeit beginnt der ___.", "Feierabend"]],
      fix: [["Es bekommt kalt.", "Es wird kalt.", "bekommen = to receive; werden = to become.", "bekommen = recevoir ; werden = devenir."], ["Sie hat den Konkurs gewonnen und einen Preis bekommen.", "Sie hat den Wettbewerb gewonnen und einen Preis bekommen.", "Konkurs = bankruptcy; a competition = Wettbewerb.", "Konkurs = faillite ; un concours = Wettbewerb."]],
      task: ["Explain in German the difference between: bekommen / werden; eventuell / schließlich; Konkurs / Wettbewerb.", "Explique en allemand la différence entre : bekommen / werden ; eventuell / schließlich ; Konkurs / Wettbewerb.", "„Bekommen“ heißt „erhalten“, „werden“ beschreibt dagegen eine Veränderung. „Eventuell“ bedeutet „vielleicht“, „schließlich“ dagegen „am Ende“. „Konkurs“ ist die Pleite einer Firma, ein „Wettbewerb“ dagegen ein Vergleich, bei dem man gewinnen kann."]
    },
    161: {
      gap: [["Er ist nur ___ ruhig; in Wahrheit ist er nervös.", "scheinbar"], ["Sie ist ___ krank, denn sie ist nicht gekommen.", "anscheinend"], ["Ich hoffe, ___ du kommst.", "dass"], ["Wir wohnen ___ zwei Jahren hier.", "seit"]],
      fix: [["Ich wiederspreche Ihnen.", "Ich widerspreche Ihnen.", "wider = against: widersprechen.", "wider = contre : widersprechen."], ["Der Lehrer lernt die Kinder Deutsch.", "Der Lehrer lehrt die Kinder Deutsch.", "lehren = to teach; lernen = to learn.", "lehren = enseigner ; lernen = apprendre."]],
      task: ["Write four sentences that use these pairs correctly: scheinbar / anscheinend; endlich / schließlich.", "Écris quatre phrases qui emploient correctement ces paires : scheinbar / anscheinend ; endlich / schließlich.", "Das Problem ist nur scheinbar einfach. Anscheinend hat niemand daran gedacht. Nach drei Stunden war die Sitzung endlich vorbei. Schließlich einigten sich alle auf einen Kompromiss."]
    },
    162: {
      gap: [["Ich hoffe, ___ Sie zufrieden sind.", "dass"], ["Wir arbeiten ___ drei Jahren zusammen.", "seit"], ["Das ___ unserer Vereinbarung. (widersprechen)", "widerspricht"], ["Ich freue mich auf ___ Antwort. (höfliche Anrede)", "Ihre"]],
      fix: [["Ich hoffe das Sie kommen.", "Ich hoffe, dass Sie kommen.", "Comma before dass, and dass with ss.", "Virgule devant dass, et dass avec ss."], ["Vielen Dank für ihre schnelle Antwort.", "Vielen Dank für Ihre schnelle Antwort.", "Polite address: capital I.", "Vouvoiement : majuscule."]],
      task: ["Correct this email (6 mistakes): Sehr geehrte Frau Lang, ich hoffe das es ihnen gut geht. Seid unserem Treffen habe ich wiedermal an dem Projekt gearbeitet. Ich freue mich auf ihre Antwort.", "Corrige ce courriel (6 fautes) : Sehr geehrte Frau Lang, ich hoffe das es ihnen gut geht. Seid unserem Treffen habe ich wiedermal an dem Projekt gearbeitet. Ich freue mich auf ihre Antwort.", "Sehr geehrte Frau Lang, ich hoffe, dass es Ihnen gut geht. Seit unserem Treffen habe ich wieder einmal an dem Projekt gearbeitet. Ich freue mich auf Ihre Antwort."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "falschefreunde", lesson: 160, level: "C2", icon: "languages", partner: "Sophie", role: "a fellow learner", role_fr: "une camarade de cours",
    title: "False friends", title_fr: "Les faux amis",
    setting: "In your German course, your classmate Sophie is puzzled by some words in a newspaper article. You explain them.", setting_fr: "Dans ton cours d'allemand, ta camarade Sophie bute sur quelques mots d'un article de journal. Tu les lui expliques.",
    turns: [
      { p: "Hier steht: „Das Konzert findet eventuell statt.“ Heißt das, es findet am Ende doch statt?", en: "It says here: “Das Konzert findet eventuell statt.” Does that mean it'll take place in the end?", fr: "Ici, c'est écrit : « Das Konzert findet eventuell statt. » Ça veut dire qu'il aura lieu finalement ?" },
      { y: ["Nein, „eventuell“ heißt „vielleicht“; ob es stattfindet, ist noch offen.", "Nein, „eventuell“ heißt „vielleicht“; ob findet es statt, ist noch offen.", "Nein, „eventuell“ heißt „vielleicht“; ob es stattfindet, ist noch offen ist."], en: "No, “eventuell” means “maybe”; whether it takes place is still open.", fr: "Non, « eventuell » veut dire « peut-être » ; on ne sait pas encore s'il aura lieu.", why: "ob-clause: verb at the end; one main verb.", why_fr: "Proposition en ob : verbe à la fin ; un seul verbe principal." },
      { p: "Und hier: „Die Firma hat Konkurs angemeldet.“ Hat sie einen Wettbewerb organisiert?", en: "And here: “Die Firma hat Konkurs angemeldet.” Did it organise a competition?", fr: "Et là : « Die Firma hat Konkurs angemeldet. » Elle a organisé un concours ?" },
      { y: ["Leider nicht: „Konkurs“ bedeutet, dass die Firma pleite ist.", "Leider nicht: „Konkurs“ bedeutet, dass die Firma ist pleite.", "Leider nicht: „Konkurs“ bedeutet, das die Firma pleite ist."], en: "Unfortunately not: “Konkurs” means the company is bankrupt.", fr: "Hélas non : « Konkurs » veut dire que l'entreprise a fait faillite.", why: "dass with ss; verb at the end.", why_fr: "dass avec ss ; verbe à la fin." },
      { p: "Oh. Und der Staat hat Schulden von „zwei Billionen“. Das klingt ja harmlos.", en: "Oh. And the state has debts of “zwei Billionen”. That sounds harmless.", fr: "Ah. Et l'État a des dettes de « zwei Billionen ». Ça n'a pas l'air énorme." },
      { y: ["Ganz im Gegenteil: Eine deutsche Billion sind tausend Milliarden.", "Ganz im Gegenteil: Eine deutsche Billion sind tausend Milliarde.", "Ganz im Gegenteil: Einen deutschen Billion sind tausend Milliarden."], en: "Quite the opposite: a German Billion is a thousand billion (a trillion).", fr: "Bien au contraire : un « Billion » allemand, ce sont mille milliards.", why: "Plural Milliarden; nominative eine deutsche Billion.", why_fr: "Pluriel Milliarden ; nominatif eine deutsche Billion." },
      { p: "Und warum ist die „Promotion“ der Ministerin ein Skandal? Wurde sie befördert?", en: "And why is the minister's “Promotion” a scandal? Was she promoted?", fr: "Et pourquoi la « Promotion » de la ministre fait-elle scandale ? Elle a été promue ?" },
      { y: ["Nein, eine Promotion ist im Deutschen eine Doktorarbeit; anscheinend gibt es Zweifel daran.", "Nein, eine Promotion ist im Deutschen eine Doktorarbeit; scheinbar gibt es Zweifel daran.", "Nein, eine Promotion ist im Deutschen eine Doktorarbeit; anscheinend es gibt Zweifel daran."], en: "No, a Promotion in German is a doctorate; apparently there are doubts about it.", fr: "Non, en allemand, une « Promotion » est un doctorat ; il y a apparemment des doutes à son sujet.", why: "anscheinend = apparently; scheinbar would mean the doubts aren't real.", why_fr: "anscheinend = apparemment ; scheinbar voudrait dire que les doutes ne sont pas réels." },
      { p: "Puh, das sind ja viele Fallen!", en: "Phew, that's a lot of traps!", fr: "Ouf, ça en fait des pièges !" },
      { y: ["Stimmt. Am besten misstraut man jedem Wort, das einem zu bekannt vorkommt.", "Stimmt. Am besten misstraut man jedem Wort, das einem zu bekannt vorkommen.", "Stimmt. Am besten misstraut man jedes Wort, das einem zu bekannt vorkommt."], en: "True. It's best to distrust every word that seems too familiar.", fr: "C'est vrai. Le mieux, c'est de se méfier de chaque mot qui paraît trop familier.", why: "misstrauen + dative; relative clause: verb at the end.", why_fr: "misstrauen + datif ; relative : verbe à la fin." }
    ] },
  { id: "korrekturlesen", lesson: 162, level: "C2", icon: "pen", partner: "Herr Wendt", role: "a colleague", role_fr: "un collègue",
    title: "Proofreading an email", title_fr: "Relire un courriel",
    setting: "Your colleague Herr Wendt asks you to proofread an important email to a client before he sends it.", setting_fr: "Ton collègue Herr Wendt te demande de relire un courriel important à une cliente avant de l'envoyer.",
    turns: [
      { p: "Kannst du kurz meine E-Mail lesen? Ich schreibe: „Ich hoffe das Sie zufrieden sind.“", en: "Could you read my email quickly? I've written: “Ich hoffe das Sie zufrieden sind.”", fr: "Tu peux jeter un œil à mon courriel ? J'écris : « Ich hoffe das Sie zufrieden sind. »" },
      { y: ["Hier fehlt ein Komma, und „dass“ schreibt man mit zwei s, weil es eine Konjunktion ist.", "Hier fehlt ein Komma, und „dass“ schreibt man mit zwei s, weil es ist eine Konjunktion.", "Hier fehlt ein Komma, und „dass“ schreibt man mit zwei s, weil es eine Konjunktion sind."], en: "There's a comma missing, and “dass” is spelt with two s because it's a conjunction.", fr: "Il manque une virgule, et « dass » s'écrit avec deux s parce que c'est une conjonction.", why: "weil: verb at the end; singular ist.", why_fr: "weil : verbe à la fin ; singulier ist." },
      { p: "Danke. Weiter: „Wir arbeiten seid drei Jahren zusammen.“", en: "Thanks. Next: “Wir arbeiten seid drei Jahren zusammen.”", fr: "Merci. Ensuite : « Wir arbeiten seid drei Jahren zusammen. »" },
      { y: ["„Seit“ mit t: Es geht um die Zeit; „seid“ ist eine Form von „sein“.", "„Seit“ mit t: Es geht um der Zeit; „seid“ ist eine Form von „sein“.", "„Seit“ mit t: Es geht um die Zeit; „seid“ ist einen Form von „sein“."], en: "“Seit” with a t: it's about time; “seid” is a form of “sein”.", fr: "« Seit » avec un t : il s'agit du temps ; « seid » est une forme de « sein ».", why: "um + accusative: um die Zeit; nominative eine Form.", why_fr: "um + accusatif : um die Zeit ; nominatif eine Form." },
      { p: "Und: „Das wiederspricht nicht unserer Vereinbarung.“ Richtig so?", en: "And: “Das wiederspricht nicht unserer Vereinbarung.” Is that right?", fr: "Et : « Das wiederspricht nicht unserer Vereinbarung. » C'est juste ?" },
      { y: ["„Widerspricht“ ohne e, denn „wider“ bedeutet „gegen“, „wieder“ dagegen „noch einmal“.", "„Widerspricht“ ohne e, weil „wider“ bedeutet „gegen“, „wieder“ dagegen „noch einmal“.", "„Widerspricht“ ohne e, denn „wider“ bedeuten „gegen“, „wieder“ dagegen „noch einmal“."], en: "“Widerspricht” without an e, because “wider” means “against” and “wieder” means “again”.", fr: "« Widerspricht » sans e, car « wider » veut dire « contre », et « wieder » « de nouveau ».", why: "denn + normal word order (weil would need the verb at the end).", why_fr: "denn + ordre normal (weil demanderait le verbe à la fin)." },
      { p: "Zum Schluss: „Ich freue mich auf ihre Antwort.“", en: "Finally: “Ich freue mich auf ihre Antwort.”", fr: "Pour finir : « Ich freue mich auf ihre Antwort. »" },
      { y: ["Die höfliche Anrede schreibt man groß: „Ihre Antwort“.", "Die höfliche Anrede schreibt man klein: „ihre Antwort“.", "Die höfliche Anrede schreibt man groß: „Ihren Antwort“."], en: "The polite form of address is capitalised: “Ihre Antwort”.", fr: "Le vouvoiement prend une majuscule : « Ihre Antwort ».", why: "Capital Ihr; die Antwort → Ihre (accusative feminine).", why_fr: "Majuscule à Ihr ; die Antwort → Ihre (accusatif féminin)." },
      { p: "Danke! Wie schaffst du es, so viele Fehler zu finden?", en: "Thanks! How do you manage to find so many mistakes?", fr: "Merci ! Comment fais-tu pour trouver autant de fautes ?" },
      { y: ["Ich lese den Text mehrmals, jedes Mal mit einem anderen Schwerpunkt.", "Ich lese den Text mehrmals, jedes Mal mit einen anderen Schwerpunkt.", "Ich lese den Text mehrmals, jede Mal mit einem anderen Schwerpunkt."], en: "I read the text several times, each time with a different focus.", fr: "Je relis le texte plusieurs fois, chaque fois avec un autre angle.", why: "mit + dative: einem anderen Schwerpunkt; jedes Mal.", why_fr: "mit + datif : einem anderen Schwerpunkt ; jedes Mal." }
    ] }
  );

  W.READINGS.push({
    id: "grimmwoerterbuch", level: "C2", icon: "book-marked", title: "Das Wörterbuch der Brüder Grimm", genre: "Feature article",
    intro: "Two brothers famous for fairy tales, a political protest, and a dictionary that took more than 120 years to finish.",
    intro_fr: "Deux frères célèbres pour leurs contes, une protestation politique, et un dictionnaire qu'il a fallu plus de 120 ans pour achever.",
    paragraphs: [
      { de: "Die meisten kennen Jacob und Wilhelm Grimm als Sammler von Märchen: 1812 erschien der erste Band ihrer „Kinder- und Hausmärchen“. Weniger bekannt ist, dass die Brüder auch ein gewaltiges Wörterbuch begannen, das sie selbst bei Weitem überdauern sollte.", en: "Most people know Jacob and Wilhelm Grimm as collectors of fairy tales: the first volume of their “Children's and Household Tales” appeared in 1812. Less well known is that the brothers also began an enormous dictionary that was to outlast them by far.", fr: "La plupart des gens connaissent Jacob et Wilhelm Grimm comme collecteurs de contes : le premier volume de leurs « Contes de l'enfance et du foyer » parut en 1812. On sait moins que les deux frères commencèrent aussi un dictionnaire gigantesque qui allait leur survivre de très loin." },
      { de: "1837 gehörten beide zu den „Göttinger Sieben“, sieben Professoren, die gegen die Aufhebung der Verfassung im Königreich Hannover protestierten und deshalb ihre Stellen verloren. Ohne Einkommen nahmen sie 1838 das Angebot eines Verlags an, ein großes Wörterbuch der deutschen Sprache zu verfassen. Es sollte den Wortschatz von Luther bis Goethe dokumentieren, mit Belegen aus der Literatur.", en: "In 1837, both were among the “Göttingen Seven”, seven professors who protested against the repeal of the constitution in the Kingdom of Hanover and lost their posts as a result. Without income, in 1838 they accepted a publisher's offer to write a large dictionary of the German language. It was to document the vocabulary from Luther to Goethe, with examples from literature.", fr: "En 1837, tous deux faisaient partie des « Sept de Göttingen », sept professeurs qui protestèrent contre l'abrogation de la constitution du royaume de Hanovre et perdirent pour cela leur poste. Privés de revenus, ils acceptèrent en 1838 l'offre d'un éditeur : rédiger un grand dictionnaire de la langue allemande. Il devait documenter le vocabulaire de Luther à Goethe, avec des citations tirées de la littérature." },
      { de: "Die Arbeit erwies sich als weit umfangreicher als gedacht. 1854 erschien der erste Band. Wilhelm starb 1859, Jacob 1863, mitten in der Arbeit am Wort „Frucht“. Generationen von Sprachwissenschaftlern setzten das Werk fort, nach dem Zweiten Weltkrieg in Ost-Berlin und in Göttingen.", en: "The work turned out to be far more extensive than expected. The first volume appeared in 1854. Wilhelm died in 1859, Jacob in 1863, in the middle of working on the word “Frucht” (fruit). Generations of linguists continued the work, after the Second World War in East Berlin and in Göttingen.", fr: "Le travail se révéla bien plus vaste que prévu. Le premier volume parut en 1854. Wilhelm mourut en 1859, Jacob en 1863, en plein travail sur le mot « Frucht » (fruit). Des générations de linguistes poursuivirent l'œuvre, après la Seconde Guerre mondiale à Berlin-Est et à Göttingen." },
      { de: "Erst 1961 war das „Deutsche Wörterbuch“ vollendet, mehr als 120 Jahre nach seinem Beginn. Es umfasst 32 Bände und rund 320 000 Stichwörter. Heute ist es im Internet frei zugänglich, und wer wissen will, wie ein Wort früher gebraucht wurde, findet dort oft überraschende Antworten.", en: "Only in 1961 was the “German Dictionary” completed, more than 120 years after it was begun. It comprises 32 volumes and around 320,000 headwords. Today it is freely available online, and anyone who wants to know how a word used to be used often finds surprising answers there.", fr: "Ce n'est qu'en 1961 que le « Deutsches Wörterbuch » fut achevé, plus de 120 ans après son début. Il compte 32 volumes et environ 320 000 entrées. Il est aujourd'hui librement accessible en ligne, et qui veut savoir comment un mot s'employait autrefois y trouve souvent des réponses surprenantes." }
    ],
    glossary: { "Sammler": ["collectors", "collecteurs"], "Märchen": ["fairy tales", "contes"], "Hausmärchen": ["household tales", "contes du foyer"], "gewaltiges": ["enormous", "gigantesque"], "Weitem": ["(bei Weitem) by far", "(bei Weitem) de loin"], "überdauern": ["outlast", "survivre à"], "Göttinger": ["of Göttingen", "de Göttingen"], "Aufhebung": ["repeal", "abrogation"], "Verfassung": ["constitution", "constitution"], "Königreich": ["kingdom", "royaume"], "Hannover": ["Hanover", "Hanovre"], "protestierten": ["protested", "protestèrent"], "Stellen": ["posts, jobs", "postes"], "Einkommen": ["income", "revenus"], "Verlags": ["publisher's", "d'un éditeur"], "verfassen": ["write", "rédiger"], "dokumentieren": ["document", "documenter"], "Belegen": ["examples, citations", "citations, attestations"], "erwies": ["(sich erweisen) turned out", "(sich erweisen) se révéla"], "umfangreicher": ["more extensive", "plus vaste"], "Frucht": ["fruit", "fruit"], "Generationen": ["generations", "générations"], "vollendet": ["completed", "achevé"], "umfasst": ["comprises", "compte"], "Bände": ["volumes", "volumes"], "Stichwörter": ["headwords", "entrées"], "zugänglich": ["accessible", "accessible"] },
    questions: [
      { q: "Wofür sind die Brüder Grimm vor allem bekannt?", o: ["Für ihre Märchensammlung", "Für ihre Gedichte", "Für ihre Romane"], a: 0 },
      { q: "Warum verloren sie 1837 ihre Stellen?", o: ["Weil sie gegen die Aufhebung der Verfassung protestierten", "Weil sie ein Wörterbuch schrieben", "Weil sie nach Berlin zogen"], a: 0 },
      { q: "Was sollte das Wörterbuch dokumentieren?", o: ["Den Wortschatz von Luther bis Goethe", "Nur moderne Wörter", "Die Märchen der Brüder"], a: 0 },
      { q: "An welchem Wort arbeitete Jacob Grimm, als er starb?", o: ["„Frucht“", "„Freiheit“", "„Märchen“"], a: 0 },
      { q: "Wann wurde das Wörterbuch vollendet?", o: ["1961", "1863", "1912"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-c2-10", unit: "c2-10", level: "C2", icon: "radio",
    title: "Zwischen den Sprachen", title_fr: "Entre les langues",
    context: "A radio interview with Herr Brandes, who has been translating novels from English and French into German for thirty years.", context_fr: "Une interview radio avec Herr Brandes, qui traduit depuis trente ans des romans de l'anglais et du français vers l'allemand.",
    words: [["umschreiben", "to paraphrase", "paraphraser"], ["berüchtigt", "notorious", "tristement célèbre"], ["tückisch", "treacherous, tricky", "traître, sournois"], ["misstrauen (+ Dat.)", "to distrust", "se méfier de"], ["anmerken", "to notice (in someone or something)", "remarquer (chez quelqu'un)"]],
    lines: [["Moderatorin", "Herr Brandes, Sie übersetzen seit dreißig Jahren aus dem Englischen und dem Französischen. Gibt es unübersetzbare Wörter?", "de-DE"], ["Herr Brandes", "Unübersetzbar ist streng genommen kaum etwas; man braucht manchmal nur mehr Wörter. Nehmen Sie „Feierabend“: Im Englischen muss man umschreiben, was das Wort an Erleichterung und Freiheit enthält.", "de-DE"], ["Moderatorin", "Und die berüchtigten falschen Freunde?", "de-DE"], ["Herr Brandes", "Die sind tückisch, gerade weil sie so vertraut wirken. Ein Kollege hat einmal „eventually“ mit „eventuell“ übersetzt. Aus einem sicheren Ende wurde so eine bloße Möglichkeit.", "de-DE"], ["Moderatorin", "Wie vermeiden Sie solche Fehler?", "de-DE"], ["Herr Brandes", "Indem ich jedem Wort misstraue, das mir zu leicht vorkommt. Und ich lese meine Übersetzungen immer laut, mit etwas Abstand. Was holprig klingt, ist meistens falsch.", "de-DE"], ["Moderatorin", "Was macht für Sie eine gute Übersetzung aus?", "de-DE"], ["Herr Brandes", "Dass man ihr nicht anmerkt, dass sie eine ist. Der Leser soll den Autor hören, nicht den Übersetzer.", "de-DE"]],
    gist: ["Worum geht es im Gespräch?", ["Um die Arbeit eines Übersetzers und ihre Schwierigkeiten", "Um einen Sprachkurs", "Um die Geschichte eines Wörterbuchs"]],
    detail: [["Was sagt Herr Brandes über unübersetzbare Wörter?", ["Man braucht manchmal nur mehr Wörter.", "Es gibt sehr viele davon.", "Man sollte sie weglassen."]], ["Was geschah, als ein Kollege „eventually“ mit „eventuell“ übersetzte?", ["Aus einem sicheren Ende wurde eine bloße Möglichkeit.", "Der Text wurde lustiger.", "Nichts, das war korrekt."]], ["Wie vermeidet er Fehler?", ["Er misstraut Wörtern, die zu leicht wirken, und liest laut.", "Er übersetzt sehr schnell.", "Er benutzt nur eine Software."]], ["Was macht für ihn eine gute Übersetzung aus?", ["Man merkt ihr nicht an, dass sie eine ist.", "Sie ist möglichst wörtlich.", "Sie ist kürzer als das Original."]]],
    decode: ["Unübersetzbar ist streng genommen kaum etwas", "Dass man ihr nicht anmerkt, dass sie eine ist"],
    tip: "Herr Brandes uses several C2 structures naturally: a subject in first position for emphasis (Unübersetzbar ist kaum etwas), a free relative clause (Was holprig klingt, ist meistens falsch) and a dass-clause as a complete answer. Listening for such structures helps you follow even fast, dense speech.", tip_fr: "Herr Brandes emploie naturellement plusieurs structures de niveau C2 : un attribut en tête pour insister (Unübersetzbar ist kaum etwas), une relative sans antécédent (Was holprig klingt, ist meistens falsch) et une proposition en dass comme réponse complète. Repérer ces structures aide à suivre même un discours rapide et dense."
  }]);

  W.PROMPTS.push({ id: "de-c2-10", level: "C2", q: "Halte einen Vortrag (etwa drei bis vier Minuten): „Braucht man im Zeitalter der maschinellen Übersetzung noch Fremdsprachen?“ Wäge ab, was Maschinen leisten und was nicht, und komm zu einem persönlichen Fazit.", en: "Give a talk (about three to four minutes): “In the age of machine translation, do we still need foreign languages?” Weigh up what machines can and can't do, and reach a personal conclusion.", fr: "Fais un exposé (environ trois à quatre minutes) : « À l'heure de la traduction automatique, a-t-on encore besoin des langues étrangères ? » Pèse ce que les machines savent faire et ce qu'elles ne savent pas faire, et conclus de façon personnelle.", time: 240,
    phrases: ["Zweifellos…", "Doch eine Übersetzung ersetzt nicht…", "Weder … noch…", "Was eine Sprache wirklich ausmacht, ist…", "Für mich persönlich…"],
    model: "Brauchen wir im Zeitalter der maschinellen Übersetzung noch Fremdsprachen? Zweifellos leisten Übersetzungsprogramme heute Erstaunliches: Eine Speisekarte, eine Gebrauchsanweisung oder eine einfache E-Mail lassen sich in Sekunden übertragen. Für viele Alltagssituationen mag das genügen. Doch eine Übersetzung ersetzt nicht das eigene Verstehen. Ein Programm bemerkt weder die Ironie in einem Satz noch den falschen Freund, der den Sinn verdreht, und es weiß nicht, ob ein Ausdruck in Wien anders klingt als in Zürich. Vor allem aber verändert es die Begegnung zwischen Menschen: Wer durch ein Gerät spricht, bleibt immer ein wenig Gast. Was eine Sprache wirklich ausmacht, ist nicht nur ihr Wortschatz, sondern die Kultur, der Humor und die Geschichte, die in ihr stecken. Für mich persönlich war das Deutschlernen deshalb nie nur ein Mittel zum Zweck. Es hat mir Bücher, Gespräche und Freundschaften eröffnet, die mir sonst verschlossen geblieben wären. Mein Fazit lautet daher: Maschinen können helfen, aber sie können uns die Mühe und das Glück des Lernens nicht abnehmen." });

  W.WRITING_GUIDE["c2-10"] = { genre: "An essay (C2)", genre_fr: "Un essai (C2)",
    plan: [["Questions as a lead-in, and your thesis.", "Des questions en guise d'amorce, et ta thèse."], ["Register and tone.", "Le registre et le ton."], ["What is not said: irony and culture.", "Ce qui ne se dit pas : ironie et culture."], ["The objection of machine translation.", "L'objection de la traduction automatique."], ["Variety, and a personal conclusion.", "La diversité, et une conclusion personnelle."]],
    marks: [["Meines Erachtens beherrscht man eine Sprache nicht dann", "the thesis with nicht …, sondern", "la thèse avec nicht …, sondern"], ["Zunächst gehört dazu", "the first criterion", "le premier critère"], ["das Verstehen dessen, was nicht ausgesprochen wird", "dessen + relative clause", "dessen + relative"], ["Man könnte einwenden, all das sei", "the objection in the Konjunktiv I", "l'objection au Konjunktiv I"], ["weder einen falschen Freund noch", "weder … noch", "weder … noch"], ["nicht Perfektion, sondern Souveränität", "an antithesis in the conclusion", "une antithèse dans la conclusion"]] };

  /* Atelier de langue : champs allemands d'abord, puis anglais et français (voir localize.js). */
  W.LEXIS = W.LEXIS || {};
  W.LEXIS["c2-10"] = {
    colloc: [
      ["eine Bedeutung nachschlagen", "to look up a meaning", "chercher le sens d'un mot", "Ich habe die Bedeutung im Wörterbuch nachgeschlagen.", "nachgeschlagen", ["nachgezogen", "nachgegeben"]],
      ["einen Fehler ausbessern", "to correct a mistake", "corriger une faute", "Sie besserte den Fehler sofort aus.", "besserte", ["bastelte", "bettete"]],
      ["den Sinn erfassen", "to grasp the meaning", "saisir le sens", "Er erfasste sofort den Sinn des Satzes.", "erfasste", ["erfand", "erfuhr"]],
      ["eine Entsprechung finden", "to find an equivalent", "trouver un équivalent", "Für „Feierabend“ findet man im Englischen keine genaue Entsprechung.", "findet", ["macht", "stellt"]],
      ["sich an die Vorlage halten", "to stick to the original", "rester fidèle à l'original", "Ein guter Übersetzer hält sich eng an die Vorlage.", "hält", ["stellt", "legt"]],
      ["einen Text Korrektur lesen", "to proofread a text", "relire un texte", "Kannst du meinen Text Korrektur lesen?", "lesen", ["schreiben", "machen"]],
      ["Nuancen wiedergeben", "to render nuances", "rendre les nuances", "Die Übersetzung gibt alle Nuancen des Originals wieder.", "gibt", ["nimmt", "macht"]],
      ["einen Begriff erläutern", "to explain a term", "expliquer un terme", "Im Glossar werden alle Fachbegriffe erläutert.", "erläutert", ["erleichtert", "erlaubt"]],
      ["einen Fehler übersehen", "to overlook a mistake", "laisser passer une faute", "Beim Korrekturlesen hat er zwei Fehler übersehen.", "übersehen", ["übersetzt", "überzogen"]],
      ["ein Wörterbuch zurate ziehen", "to consult a dictionary", "consulter un dictionnaire", "Im Zweifelsfall sollte man ein Wörterbuch zurate ziehen.", "ziehen", ["nehmen", "holen"]]
    ],
    wf: [
      ["Manche Wortspiele gelten als ___. (ÜBERSETZEN)", "unübersetzbar"],
      ["Sie arbeitet als ___ bei der Europäischen Union. (DOLMETSCHEN)", "Dolmetscherin|Dolmetscher"],
      ["Die ___ des Wortes ist umstritten. (HERKOMMEN)", "Herkunft"],
      ["Bitte lies den Text noch einmal ___. (SORGFALT)", "sorgfältig"],
      ["Das Wörterbuch der Brüder Grimm ist ein ___ Werk. (GEWALT)", "gewaltiges"],
      ["Jacob Grimm erlebte die ___ des Werkes nicht mehr. (VOLLENDEN)", "Vollendung"],
      ["Wegen ihres ___ verloren die Brüder ihre Stellen. (PROTESTIEREN)", "Protests|Protestes"],
      ["Ihre Übersetzungen sind immer erstaunlich ___. (TREFFSICHERHEIT)", "treffsicher"]
    ],
    kwt: [
      ["Dieses Wort kann man praktisch nicht übersetzen.", "UNÜBERSETZBAR", "Dieses Wort ___.", "ist praktisch unübersetzbar"],
      ["Er ist nur dem Anschein nach ruhig, in Wirklichkeit ist er nervös.", "SCHEINBAR", "Er ___, in Wirklichkeit ist er nervös.", "ist nur scheinbar ruhig"],
      ["Wahrscheinlich hat niemand daran gedacht.", "ANSCHEINEND", "___ daran gedacht.", "Anscheinend hat niemand"],
      ["Ich habe im Wörterbuch nachgesehen, was das Wort bedeutet.", "NACHGESCHLAGEN", "Ich habe ___.", "die Bedeutung im Wörterbuch nachgeschlagen"],
      ["Für „Feierabend“ gibt es im Englischen kein genaues Gegenstück.", "ENTSPRECHUNG", "Für „Feierabend“ ___.", "gibt es im Englischen keine genaue Entsprechung"],
      ["Jacob Grimm arbeitete bis zu seinem Tod am Wörterbuch.", "STARB", "Jacob Grimm ___.", "starb mitten in der Arbeit am Wörterbuch|starb während der Arbeit am Wörterbuch"]
    ],
    idioms: [
      ["nur Bahnhof verstehen", "überhaupt nichts verstehen", "it's all Greek to me", "ne rien comprendre", "Bei seinem Fachjargon verstehe ich nur Bahnhof.", "verstehe ich nur Bahnhof"],
      ["das A und O", "das Wichtigste", "the be-all and end-all", "l'essentiel, la clé", "Beim Übersetzen ist Genauigkeit das A und O.", "das A und O"],
      ["etwas klipp und klar sagen", "etwas sehr deutlich sagen", "to say something plainly", "dire quelque chose clairement et nettement", "Sie hat ihm klipp und klar gesagt, was sie denkt.", "klipp und klar"],
      ["mit Händen und Füßen reden", "sich mit Gesten verständlich machen", "to communicate with gestures", "parler avec les mains", "Ohne gemeinsame Sprache redeten wir mit Händen und Füßen.", "mit Händen und Füßen"],
      ["für jemanden ein Fremdwort sein", "jemandem völlig unbekannt sein", "to be a foreign concept to someone", "être un mot inconnu pour quelqu'un", "Pünktlichkeit ist für ihn ein Fremdwort.", "für ihn ein Fremdwort"],
      ["das i-Tüpfelchen", "das letzte, vollendende Detail", "the finishing touch", "la touche finale, la cerise sur le gâteau", "Die Fußnoten sind das i-Tüpfelchen der Übersetzung.", "das i-Tüpfelchen"],
      ["nach Strich und Faden", "gründlich, in jeder Hinsicht", "thoroughly, good and proper", "dans les grandes largeurs", "Der Kritiker hat den Roman nach Strich und Faden verrissen.", "nach Strich und Faden"],
      ["jemandem fehlen die Worte", "jemand ist sprachlos", "to be lost for words", "rester sans voix", "Bei dieser Nachricht fehlten mir die Worte.", "fehlten mir die Worte"]
    ]
  };

  W.COURSE.push({ id: "c2-10", level: "C2", icon: "book-marked", title: "Words about words", title_fr: "Des mots sur les mots",
    intro: "This is the last unit of the course. In it, you'll learn to avoid the false friends that trap English and French speakers (eventuell, Konkurs, Billion), to distinguish words that even native speakers confuse (scheinbar or anscheinend, wieder or wider, das or dass), and to polish your own texts with a reliable method. You'll also read the story of the Grimm brothers' dictionary, which took more than 120 years to complete. After this unit, the C2 exam is waiting for you. Congratulations on coming this far!",
    intro_fr: "Voici la dernière unité du cours. Tu vas y apprendre à éviter les faux amis qui piègent anglophones et francophones (eventuell, Konkurs, Billion), à distinguer des mots que même les germanophones confondent (scheinbar ou anscheinend, wieder ou wider, das ou dass), et à peaufiner tes textes avec une méthode fiable. Tu liras aussi l'histoire du dictionnaire des frères Grimm, qu'il a fallu plus de 120 ans pour achever. Après cette unité, place à l'examen C2. Félicitations pour tout ce chemin parcouru !",
    can: ["Recognise and avoid false friends, and translate meaning rather than words", "Distinguish commonly confused words and spellings", "Proofread and polish your own texts and those of others", "Talk about translation, dictionaries and language learning", "Write a reflective essay on mastering a language (C2)"],
    can_fr: ["Reconnaître et éviter les faux amis, et traduire le sens plutôt que les mots", "Distinguer les mots et les graphies qu'on confond souvent", "Relire et peaufiner ses propres textes et ceux des autres", "Parler de traduction, de dictionnaires et d'apprentissage des langues", "Écrire un essai réflexif sur la maîtrise d'une langue (C2)"],
    lessons: [160, 161, 162], vocab: ["uebersetzungDE", "woerterbuchDE"], reading: "grimmwoerterbuch", prompt: "de-c2-10",
    writing: { task: "Write a reflective essay (300-350 words): “What does it mean to master a language?” Include questions as a lead-in and your thesis, register and tone, what is not said (irony, culture), the objection of machine translation, variety, and a personal conclusion.", task_fr: "Écris un essai réflexif (300 à 350 mots) : « Que signifie maîtriser une langue ? » Avec des questions en guise d'amorce et ta thèse, le registre et le ton, ce qui ne se dit pas (ironie, culture), l'objection de la traduction automatique, la diversité, et une conclusion personnelle.", words: "300-350",
      tips: ["Meines Erachtens…, nicht …, sondern…", "Zunächst gehört dazu…", "Man könnte einwenden, …", "weder … noch…", "Letzten Endes…"],
      checklist: ["I opened with questions and stated a clear thesis", "I discussed at least three aspects of mastering a language", "I answered the objection of machine translation", "I reread my text five times with a different focus", "I wrote between 300 and 350 words"],
      checklist_fr: ["J'ai commencé par des questions et formulé une thèse claire", "J'ai abordé au moins trois aspects de la maîtrise d'une langue", "J'ai répondu à l'objection de la traduction automatique", "J'ai relu mon texte cinq fois avec un angle différent", "J'ai écrit entre 300 et 350 mots"],
      model: "Wann beherrscht man eine Sprache? Wenn man fehlerfrei schreibt, wenn man jeden Witz versteht, wenn man im Ausland nicht mehr als Fremder erkannt wird? Je länger ich Deutsch lerne, desto mehr bezweifle ich, dass es darauf eine einfache Antwort gibt. Meines Erachtens beherrscht man eine Sprache nicht dann, wenn man keine Fehler mehr macht, sondern wenn man bewusst mit ihr umgehen kann.\n\nZunächst gehört dazu die Fähigkeit, den richtigen Ton zu treffen. Ein und dieselbe Bitte kann höflich, kühl oder anmaßend wirken, je nachdem, wie man sie formuliert. Wer im Bewerbungsschreiben dieselben Worte wählt wie in einer Nachricht an Freunde, mag grammatisch korrekt schreiben und dennoch scheitern. Sprachbeherrschung zeigt sich gerade darin, zwischen Registern wechseln zu können, vom Amtsdeutsch bis zur Umgangssprache.\n\nEbenso wichtig ist das Verstehen dessen, was nicht ausgesprochen wird. Ironie, Anspielungen und Untertöne erschließen sich erst, wenn man die Kultur kennt, aus der eine Sprache kommt. Wer über Loriot lachen kann, hat mehr verstanden als jemand, der nur seine Sätze übersetzt.\n\nMan könnte einwenden, all das sei angesichts guter Übersetzungsprogramme überflüssig geworden. Tatsächlich liefern Maschinen heute in vielen Fällen brauchbare Texte. Doch eine Übersetzung ersetzt nicht das eigene Verstehen. Wer sich allein auf ein Programm verlässt, bemerkt weder einen falschen Freund noch einen ironischen Unterton, und er verpasst die Begegnung mit Menschen in ihrer eigenen Sprache.\n\nSchließlich bedeutet Sprachbeherrschung auch, die Vielfalt einer Sprache anzuerkennen. Das Deutsche klingt in Wien anders als in Zürich oder Hamburg, und keine dieser Formen ist falscher als die andere. Wer das begriffen hat, hört auf, nach dem einen richtigen Deutsch zu suchen, und beginnt, die vielen Stimmen der Sprache zu genießen.\n\nLetzten Endes ist das Ziel also nicht Perfektion, sondern Souveränität: die Gelassenheit, mit Fehlern umzugehen, und die Neugier, immer weiter zu lernen. In diesem Sinne ist man mit einer Sprache nie ganz fertig, und gerade das macht sie so reizvoll." } });
})();
