/* Cours d'allemand, unité B1-9 « Media and culture / Médias et culture » : les participes employés comme adjectifs
   (das schlafende Kind, das gelesene Buch), lassen (faire faire, laisser, permettre, lass uns) et sehen / hören +
   infinitif ; parler de livres et de films, écrire une critique. Explications en anglais ET en français.
   Personnages fictifs, prénoms allemands ; le film de la critique modèle n'est pas nommé (fiction).
   Faits vérifiables seulement : Johannes Gutenberg (vers 1400-1468), de Mayence, met au point vers 1450
   l'imprimerie à caractères mobiles en métal ; la Bible de Gutenberg est achevée vers 1454-1455, environ 180
   exemplaires, dont 49 subsistent (pas tous complets) ; procès avec son bailleur de fonds Johann Fust en 1455 ;
   musée Gutenberg à Mayence. Écrit : critique sur un forum (Goethe B1, partie 2, environ 80 mots). */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "buchfilmDE", icon: "clapperboard", title: "Books and films", title_fr: "Livres et films", level: "B1", words: [
    ["der Roman, -e", "the novel", "le roman", "Ich lese gerade einen spannenden Roman."],
    ["die Hauptfigur, -en", "the main character", "le personnage principal", "Die Hauptfigur ist eine junge Ärztin."],
    ["der Schauspieler, -", "the actor", "l'acteur", "Der Schauspieler hat einen Preis gewonnen."],
    ["die Schauspielerin, -nen", "the actress", "l'actrice", "Die Schauspielerin spielt sehr überzeugend."],
    ["die Handlung, -en", "the plot, the story", "l'intrigue, l'action", "Die Handlung spielt in Hamburg."],
    ["handeln von", "to be about", "parler de, traiter de", "Der Roman handelt von einer Familie in Bayern."],
    ["Es geht um …", "it's about …", "il s'agit de …", "Es geht um eine große Liebe."],
    ["berührend", "touching, moving", "touchant, émouvant", "Das Ende ist sehr berührend."],
    ["überzeugend", "convincing", "convaincant", "Die Schauspieler sind überzeugend."],
    ["die Kritik, -en", "the review; criticism", "la critique", "Der Film hat gute Kritiken bekommen."],
    ["der Autor, -en", "the author", "l'auteur", "Der Autor liest heute Abend in der Buchhandlung."],
    ["die Autorin, -nen", "the author (a woman)", "l'auteure, l'autrice", "Die Autorin hat schon zehn Bücher geschrieben."],
    ["die Folge, -n", "the episode; the consequence", "l'épisode ; la conséquence", "Ich habe gestern drei Folgen hintereinander geschaut."],
    ["der Untertitel, -", "the subtitle", "le sous-titre", "Ich schaue Filme auf Deutsch mit deutschen Untertiteln."],
    ["veröffentlichen", "to publish", "publier", "Das Buch wurde 2019 veröffentlicht."],
    ["empfehlenswert", "worth recommending", "à recommander", "Der Film ist wirklich empfehlenswert."]
  ] },
  { id: "kulturDE", icon: "drama", title: "Art and cultural events", title_fr: "Art et sorties culturelles", level: "B1", words: [
    ["die Ausstellung, -en", "the exhibition", "l'exposition", "Die Ausstellung ist noch bis Mai geöffnet."],
    ["das Gemälde, -", "the painting", "le tableau, la peinture", "Das berühmteste Gemälde hängt im ersten Stock."],
    ["der Künstler, -", "the artist", "l'artiste", "Der Künstler war bei der Eröffnung dabei."],
    ["die Künstlerin, -nen", "the artist (a woman)", "l'artiste (femme)", "Die Künstlerin arbeitet mit Holz und Glas."],
    ["die Bühne, -n", "the stage", "la scène", "Nach dem Konzert kamen alle noch einmal auf die Bühne."],
    ["die Vorstellung, -en", "the performance, the showing", "la représentation, la séance", "Die Vorstellung beginnt um 20 Uhr."],
    ["ausverkauft", "sold out", "complet (épuisé)", "Leider ist das Konzert schon ausverkauft."],
    ["die Lesung, -en", "the (author's) reading", "la lecture publique", "Heute Abend gibt es eine Lesung in der Bibliothek."],
    ["das Theaterstück, -e", "the play", "la pièce de théâtre", "Das Theaterstück dauert drei Stunden mit Pause."],
    ["die Veranstaltung, -en", "the event", "l'événement, la manifestation", "Alle Veranstaltungen finden Sie im Programm."],
    ["das Publikum", "the audience", "le public", "Das Publikum hat lange geklatscht."],
    ["kulturell", "cultural", "culturel", "Die Stadt hat ein großes kulturelles Angebot."],
    ["die Buchhandlung, -en", "the bookshop", "la librairie", "In der Buchhandlung am Markt gibt es auch Lesungen."],
    ["lassen", "to let; to leave; to have something done", "laisser ; faire (faire)", "Ich lasse mein Fahrrad reparieren."]
  ] });

  W.LESSONS.push(
  {
    id: 67, level: "B1", icon: "type",
    title: "das schlafende Kind, das gelesene Buch: participles as adjectives", title_fr: "das schlafende Kind, das gelesene Buch : les participes employés comme adjectifs",
    subtitle: "Two participles that work like adjectives: one for what is happening, one for what has been done.", subtitle_fr: "Deux participes qui fonctionnent comme des adjectifs : l'un pour ce qui se passe, l'autre pour ce qui a été fait.",
    body: `
<h2>Partizip I: -ing</h2>
<p>Infinitive + <b>d</b>: <s-de>lachen</s-de> → <s-de>lachend</s-de>, <s-de>schlafen</s-de> → <s-de>schlafend</s-de>. It describes something happening at the same time, like English "-ing": <s-de>das schlafende Kind</s-de> (the sleeping child) · <s-de>ein spannender Film</s-de> (an exciting film: <s-de>spannen</s-de> → <s-de>spannend</s-de>). As an adverb: <s-de>Sie kam lachend herein.</s-de> (She came in laughing.)</p>
<h2>Partizip II: done, finished</h2>
<p>The participle you know from the Perfekt, used before a noun: <s-de>das gelesene Buch</s-de> (the book that has been read) · <s-de>die reparierte Heizung</s-de> · <s-de>frisch gebackenes Brot</s-de> (freshly baked bread). It often has a passive meaning.</p>
<table>
<tr><th>Participle</th><th>Example</th></tr>
<tr><td>I: happening now</td><td><s-de>die lesende Frau</s-de></td></tr>
<tr><td>II: done, passive</td><td><s-de>das gelesene Buch</s-de></td></tr>
</table>
<h2>Endings</h2>
<p>Before a noun, both take normal adjective endings: <s-de>ein berührender Film</s-de>, <s-de>mit dem reparierten Fahrrad</s-de>, <s-de>die gestohlenen Bilder</s-de>.</p>
<div class="tip">Many common adjectives are really participles: <s-de>spannend</s-de> (exciting), <s-de>überzeugend</s-de> (convincing), <s-de>berührend</s-de> (touching), <s-de>bekannt</s-de> (known), <s-de>verheiratet</s-de> (married). Recognising them helps you guess new words: <s-de>das lachende Publikum</s-de> = the laughing audience.</div>
`,
    body_fr: `
<h2>Le Partizip I : le participe présent</h2>
<p>Infinitif + <b>d</b> : <s-de>lachen</s-de> → <s-de>lachend</s-de>, <s-de>schlafen</s-de> → <s-de>schlafend</s-de>. Il décrit ce qui se passe en même temps, comme le participe présent ou une relative en « qui » : <s-de>das schlafende Kind</s-de> (l'enfant qui dort, l'enfant endormi) · <s-de>ein spannender Film</s-de> (un film passionnant : <s-de>spannen</s-de> → <s-de>spannend</s-de>). Comme adverbe : <s-de>Sie kam lachend herein.</s-de> (Elle entra en riant.)</p>
<h2>Le Partizip II : ce qui est fait</h2>
<p>Le participe que tu connais du Perfekt, placé devant un nom : <s-de>das gelesene Buch</s-de> (le livre lu) · <s-de>die reparierte Heizung</s-de> (le chauffage réparé) · <s-de>frisch gebackenes Brot</s-de> (du pain frais sorti du four). Il a souvent un sens passif, comme le participe passé français.</p>
<table>
<tr><th>Participe</th><th>Exemple</th></tr>
<tr><td>I : en train de se faire</td><td><s-de>die lesende Frau</s-de></td></tr>
<tr><td>II : fait, passif</td><td><s-de>das gelesene Buch</s-de></td></tr>
</table>
<h2>Les terminaisons</h2>
<p>Devant un nom, les deux prennent les terminaisons normales de l'adjectif : <s-de>ein berührender Film</s-de>, <s-de>mit dem reparierten Fahrrad</s-de>, <s-de>die gestohlenen Bilder</s-de>.</p>
<div class="tip">Beaucoup d'adjectifs courants sont en fait des participes : <s-de>spannend</s-de> (passionnant), <s-de>überzeugend</s-de> (convaincant), <s-de>berührend</s-de> (touchant), <s-de>bekannt</s-de> (connu), <s-de>verheiratet</s-de> (marié). Les reconnaître aide à deviner des mots nouveaux : <s-de>das lachende Publikum</s-de> = le public qui rit.</div>
`,
    examples: [
      ["Leise, das schlafende Kind soll nicht aufwachen!", "Quiet, the sleeping child mustn't wake up!", "Chut, l'enfant qui dort ne doit pas se réveiller !"],
      ["Das war ein wirklich spannender Film.", "That was a really exciting film.", "C'était un film vraiment passionnant."],
      ["Sie kam lachend ins Zimmer.", "She came into the room laughing.", "Elle entra dans la pièce en riant."],
      ["Das gelesene Buch lege ich ins Regal zurück.", "I put the book I've read back on the shelf.", "Je remets le livre lu sur l'étagère."],
      ["Es riecht nach frisch gebackenem Brot.", "It smells of freshly baked bread.", "Ça sent le pain frais."],
      ["Die gestohlenen Bilder wurden nach zehn Jahren gefunden.", "The stolen paintings were found after ten years.", "Les tableaux volés ont été retrouvés au bout de dix ans."],
      ["Das klatschende Publikum wollte die Musiker nicht gehen lassen.", "The clapping audience didn't want to let the musicians go.", "Le public qui applaudissait ne voulait pas laisser partir les musiciens."]
    ],
    quiz: [
      { q: "“the sleeping child”", q_fr: "« l'enfant qui dort »", o: ["das schlafende Kind", "das geschlafene Kind", "das schlafte Kind"], a: 0, ex: "Happening now: Partizip I (schlafend) + ending.", ex_fr: "En train de se passer : Partizip I (schlafend) + terminaison." },
      { q: "“the repaired heating” (reparieren)", q_fr: "« le chauffage réparé » (reparieren)", o: ["die reparierte Heizung", "die reparierende Heizung", "die repariert Heizung"], a: 0, ex: "Done: Partizip II + adjective ending.", ex_fr: "Fait : Partizip II + terminaison d'adjectif." },
      { q: "“an exciting film” (spannend)", q_fr: "« un film passionnant » (spannend)", o: ["ein spannender Film", "ein spannende Film", "ein gespannter Film"], a: 0, ex: "After ein, masculine nominative: -er.", ex_fr: "Après ein, masculin nominatif : -er." },
      { q: "“Sie kam ___ herein.” (laughing)", q_fr: "« Sie kam ___ herein. » (en riant)", o: ["lachend", "gelacht", "zu lachen"], a: 0, ex: "As an adverb, Partizip I has no ending.", ex_fr: "Comme adverbe, le Partizip I ne prend pas de terminaison." },
      { q: "“frisch ___ Brot” (backen, no article)", q_fr: "« frisch ___ Brot » (backen, sans article)", o: ["gebackenes", "backendes", "gebacken"], a: 0, ex: "Partizip II, neuter without article: -es.", ex_fr: "Partizip II, neutre sans article : -es." }
    ]
  },
  {
    id: 68, level: "B1", icon: "wrench",
    title: "Ich lasse mein Fahrrad reparieren: the verb lassen", title_fr: "Ich lasse mein Fahrrad reparieren : le verbe lassen",
    subtitle: "Have something done, let someone do something, leave something, and “let's”.", subtitle_fr: "Faire faire, laisser faire, laisser quelque part, et « allons-y ».",
    body: `
<h2>Four uses of lassen</h2>
<p><b>Have something done</b>: <s-de>Ich lasse mein Fahrrad reparieren.</s-de> (I'm having my bike repaired.) · <s-de>Sie lässt sich die Haare schneiden.</s-de> <b>Let, allow</b>: <s-de>Meine Eltern lassen mich allein reisen.</s-de> <b>Leave</b>: <s-de>Ich lasse das Handy zu Hause.</s-de> <b>Let's</b>: <s-de>Lass uns ins Kino gehen!</s-de> · <s-de>Lasst uns anfangen!</s-de></p>
<table>
<tr><th>Person</th><th>lassen</th></tr>
<tr><td><s-de>ich</s-de></td><td><s-de>lasse</s-de></td></tr>
<tr><td><s-de>du</s-de></td><td><s-de>lässt</s-de></td></tr>
<tr><td><s-de>er / sie / es</s-de></td><td><s-de>lässt</s-de></td></tr>
<tr><td><s-de>wir / sie / Sie</s-de></td><td><s-de>lassen</s-de></td></tr>
<tr><td><s-de>ihr</s-de></td><td><s-de>lasst</s-de></td></tr>
</table>
<h2>In the Perfekt: two infinitives</h2>
<p>With another verb, the Perfekt of <s-de>lassen</s-de> is like a modal verb: <s-de>Ich habe mein Auto reparieren lassen.</s-de> (not "gelassen"). Alone: <s-de>Ich habe das Handy zu Hause gelassen.</s-de></p>
<h2>sehen, hören + infinitive</h2>
<p>Perception verbs also take an infinitive without <s-de>zu</s-de>: <s-de>Ich höre die Nachbarn singen.</s-de> (I hear the neighbours singing.) · <s-de>Wir sehen die Kinder spielen.</s-de></p>
<div class="tip">French and English say "have something done" with "faire faire" or "have / get"; German uses <s-de>lassen</s-de> + infinitive: <s-de>Ich lasse mir die Haare schneiden.</s-de> And never "zu" after <s-de>lassen</s-de>: <s-de>Ich lasse ihn gehen.</s-de></div>
`,
    body_fr: `
<h2>Quatre emplois de lassen</h2>
<p><b>Faire faire</b> : <s-de>Ich lasse mein Fahrrad reparieren.</s-de> (Je fais réparer mon vélo.) · <s-de>Sie lässt sich die Haare schneiden.</s-de> (Elle se fait couper les cheveux.) <b>Laisser, permettre</b> : <s-de>Meine Eltern lassen mich allein reisen.</s-de> (Mes parents me laissent partir en voyage sans eux.) <b>Laisser quelque part</b> : <s-de>Ich lasse das Handy zu Hause.</s-de> <b>Allons-y</b> : <s-de>Lass uns ins Kino gehen!</s-de> (Allons au cinéma !) · <s-de>Lasst uns anfangen!</s-de></p>
<table>
<tr><th>Personne</th><th>lassen</th></tr>
<tr><td><s-de>ich</s-de></td><td><s-de>lasse</s-de></td></tr>
<tr><td><s-de>du</s-de></td><td><s-de>lässt</s-de></td></tr>
<tr><td><s-de>er / sie / es</s-de></td><td><s-de>lässt</s-de></td></tr>
<tr><td><s-de>wir / sie / Sie</s-de></td><td><s-de>lassen</s-de></td></tr>
<tr><td><s-de>ihr</s-de></td><td><s-de>lasst</s-de></td></tr>
</table>
<h2>Au Perfekt : deux infinitifs</h2>
<p>Avec un autre verbe, le Perfekt de <s-de>lassen</s-de> se construit comme celui d'un verbe de modalité : <s-de>Ich habe mein Auto reparieren lassen.</s-de> (J'ai fait réparer ma voiture ; pas « gelassen ».) Seul : <s-de>Ich habe das Handy zu Hause gelassen.</s-de></p>
<h2>sehen, hören + infinitif</h2>
<p>Les verbes de perception se construisent aussi avec un infinitif sans <s-de>zu</s-de>, comme en français : <s-de>Ich höre die Nachbarn singen.</s-de> (J'entends les voisins chanter.) · <s-de>Wir sehen die Kinder spielen.</s-de></p>
<div class="tip">« Faire faire » se dit <s-de>lassen</s-de> + infinitif : <s-de>Ich lasse mir die Haare schneiden</s-de> (je me fais couper les cheveux). Et jamais de « zu » après <s-de>lassen</s-de> : <s-de>Ich lasse ihn gehen.</s-de></div>
`,
    examples: [
      ["Ich lasse mein Fahrrad in der Werkstatt reparieren.", "I'm having my bike repaired at the workshop.", "Je fais réparer mon vélo à l'atelier."],
      ["Sie lässt sich jeden Monat die Haare schneiden.", "She has her hair cut every month.", "Elle se fait couper les cheveux tous les mois."],
      ["Meine Eltern lassen mich am Wochenende lange schlafen.", "My parents let me sleep in at the weekend.", "Mes parents me laissent dormir tard le week-end."],
      ["Lass uns heute Abend ins Kino gehen!", "Let's go to the cinema tonight!", "Allons au cinéma ce soir !"],
      ["Ich habe mein Handy im Café liegen lassen.", "I left my phone lying in the café.", "J'ai oublié mon portable au café."],
      ["Wir haben die Wohnung streichen lassen.", "We had the flat painted.", "Nous avons fait repeindre l'appartement."],
      ["Ich höre die Nachbarn jeden Abend Klavier spielen.", "I hear the neighbours playing the piano every evening.", "J'entends les voisins jouer du piano tous les soirs."]
    ],
    quiz: [
      { q: "“I'm having my car repaired.”", q_fr: "« Je fais réparer ma voiture. »", o: ["Ich lasse mein Auto reparieren.", "Ich lasse mein Auto zu reparieren.", "Ich mache mein Auto reparieren."], a: 0, ex: "lassen + infinitive, no zu.", ex_fr: "lassen + infinitif, sans zu." },
      { q: "“Er ___ sich die Haare schneiden.”", q_fr: "« Er ___ sich die Haare schneiden. »", o: ["lässt", "lasst", "lass"], a: 0, ex: "er lässt (with an umlaut).", ex_fr: "er lässt (avec un tréma)." },
      { q: "“I had the flat painted.”", q_fr: "« J'ai fait repeindre l'appartement. »", o: ["Ich habe die Wohnung streichen lassen.", "Ich habe die Wohnung streichen gelassen.", "Ich habe die Wohnung gestrichen lassen."], a: 0, ex: "With another verb: two infinitives (streichen lassen).", ex_fr: "Avec un autre verbe : deux infinitifs (streichen lassen)." },
      { q: "“Let's start!” (to several friends)", q_fr: "« Allons-y, commençons ! » (à plusieurs amis)", o: ["Lasst uns anfangen!", "Lass uns anfangen zu!", "Lassen wir anfangen!"], a: 0, ex: "ihr → Lasst uns…", ex_fr: "ihr → Lasst uns…" },
      { q: "“I hear the children singing.”", q_fr: "« J'entends les enfants chanter. »", o: ["Ich höre die Kinder singen.", "Ich höre die Kinder zu singen.", "Ich höre die Kinder gesungen."], a: 0, ex: "hören + infinitive without zu.", ex_fr: "hören + infinitif sans zu." }
    ]
  },
  {
    id: 69, level: "B1", kind: "functional", icon: "clapperboard",
    title: "Everyday German: talking about books and films", title_fr: "L'allemand de tous les jours : parler de livres et de films",
    subtitle: "Say what it's about, what you thought, and whether you'd recommend it.", subtitle_fr: "Dire de quoi ça parle, ce que tu en as pensé, et si tu le recommandes.",
    body: `
<h2>What it's about</h2>
<p><s-de>Der Film handelt von…</s-de> · <s-de>Es geht um…</s-de> · <s-de>Die Geschichte spielt in Berlin, im Jahr 1989.</s-de> · <s-de>Die Hauptfigur ist…</s-de> Tell the story in the present, as Germans do in reviews: <s-de>Am Anfang zieht die Hauptfigur nach Wien…</s-de></p>
<h2>What you thought</h2>
<p><s-de>Ich fand den Film spannend / berührend / langweilig / zu lang.</s-de> · <s-de>Die Schauspieler sind sehr überzeugend.</s-de> · <s-de>Besonders gut hat mir … gefallen.</s-de> · <s-de>Was mich gestört hat, war…</s-de></p>
<h2>Recommending</h2>
<p><s-de>Ich kann den Film nur empfehlen.</s-de> · <s-de>Das Buch ist ein Muss für alle, die…</s-de> · <s-de>Ehrlich gesagt würde ich ihn nicht empfehlen, weil…</s-de> And never give away the ending: <s-de>Mehr verrate ich nicht!</s-de> (I won't say any more!)</p>
<div class="tip">German has the useful verb <s-de>gefallen</s-de> + dative: <s-de>Der Film hat mir gefallen.</s-de> (I liked the film.) And <s-de>spannend</s-de> is the word for exciting, gripping: a good thriller is <s-de>spannend</s-de>, not "aufregend".</div>
`,
    body_fr: `
<h2>De quoi ça parle</h2>
<p><s-de>Der Film handelt von…</s-de> (Le film parle de…) · <s-de>Es geht um…</s-de> (Il s'agit de…) · <s-de>Die Geschichte spielt in Berlin, im Jahr 1989.</s-de> (L'histoire se passe à Berlin, en 1989.) · <s-de>Die Hauptfigur ist…</s-de> Raconte l'histoire au présent, comme on le fait dans les critiques : <s-de>Am Anfang zieht die Hauptfigur nach Wien…</s-de></p>
<h2>Ce que tu en as pensé</h2>
<p><s-de>Ich fand den Film spannend / berührend / langweilig / zu lang.</s-de> · <s-de>Die Schauspieler sind sehr überzeugend.</s-de> · <s-de>Besonders gut hat mir … gefallen.</s-de> (Ce qui m'a particulièrement plu, c'est…) · <s-de>Was mich gestört hat, war…</s-de></p>
<h2>Recommander</h2>
<p><s-de>Ich kann den Film nur empfehlen.</s-de> (Je ne peux que le recommander.) · <s-de>Das Buch ist ein Muss für alle, die…</s-de> · <s-de>Ehrlich gesagt würde ich ihn nicht empfehlen, weil…</s-de> Et ne dévoile jamais la fin : <s-de>Mehr verrate ich nicht!</s-de> (Je n'en dis pas plus !)</p>
<div class="tip">L'allemand a le verbe bien pratique <s-de>gefallen</s-de> + datif : <s-de>Der Film hat mir gefallen.</s-de> (Le film m'a plu.) Et « passionnant, palpitant » se dit <s-de>spannend</s-de> : un bon polar est <s-de>spannend</s-de>.</div>
`,
    examples: [
      ["Der Roman handelt von einer Familie, die nach Kanada auswandert.", "The novel is about a family who emigrate to Canada.", "Le roman parle d'une famille qui émigre au Canada."],
      ["Es geht um eine Freundschaft zwischen zwei sehr verschiedenen Menschen.", "It's about a friendship between two very different people.", "Il s'agit d'une amitié entre deux personnes très différentes."],
      ["Die Geschichte spielt in Leipzig im Herbst 1989.", "The story is set in Leipzig in autumn 1989.", "L'histoire se passe à Leipzig à l'automne 1989."],
      ["Besonders gut hat mir die Musik gefallen.", "I particularly liked the music.", "Ce qui m'a particulièrement plu, c'est la musique."],
      ["Was mich gestört hat, war das offene Ende.", "What bothered me was the open ending.", "Ce qui me gênait, c'est la fin ouverte."],
      ["Ich kann das Buch allen empfehlen, die gern Krimis lesen.", "I can recommend the book to anyone who likes reading crime novels.", "Je recommande ce livre à tous ceux qui aiment les polars."],
      ["Mehr verrate ich nicht, du musst ihn selbst sehen!", "I won't say any more, you have to see it yourself!", "Je n'en dis pas plus, tu dois le voir toi-même !"]
    ],
    quiz: [
      { q: "“The film is about …”", q_fr: "« Le film parle de … »", o: ["Der Film handelt von…", "Der Film handelt über…", "Der Film geht von…"], a: 0, ex: "handeln von + dative; or Es geht um…", ex_fr: "handeln von + datif ; ou Es geht um…" },
      { q: "“I liked the film.”", q_fr: "« Le film m'a plu. »", o: ["Der Film hat mir gefallen.", "Der Film hat mich gefallen.", "Ich habe den Film gefallen."], a: 0, ex: "gefallen + dative: mir.", ex_fr: "gefallen + datif : mir." },
      { q: "“The story is set in Vienna.”", q_fr: "« L'histoire se passe à Vienne. »", o: ["Die Geschichte spielt in Wien.", "Die Geschichte ist gesetzt in Wien.", "Die Geschichte passiert sich in Wien."], a: 0, ex: "spielen in = to be set in.", ex_fr: "spielen in = se passer à." },
      { q: "In a review, you tell the story in:", q_fr: "Dans une critique, on raconte l'histoire :", o: ["the present", "the Präteritum", "the future"], o_fr: ["au présent", "au prétérit", "au futur"], a: 0, ex: "Am Anfang zieht sie nach Wien…", ex_fr: "Am Anfang zieht sie nach Wien…" },
      { q: "“I won't say any more!”", q_fr: "« Je n'en dis pas plus ! »", o: ["Mehr verrate ich nicht!", "Mehr sage ich nicht mehr!", "Ich verrate nicht mehr nichts!"], a: 0, ex: "verraten = to give away, to reveal.", ex_fr: "verraten = dévoiler, révéler." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    67: {
      gap: [["Das ___ Kind soll nicht aufwachen. (schlafen)", "schlafende"], ["Das war ein ___ Film! (spannend)", "spannender"], ["Die ___ Bilder wurden gefunden. (stehlen)", "gestohlenen"], ["Sie kam ___ herein. (lachen)", "lachend"]],
      fix: [["Das ist ein gelesen Buch.", "Das ist ein gelesenes Buch.", "Before a noun, the participle takes an ending.", "Devant un nom, le participe prend une terminaison."], ["Das schlafte Kind ist süß.", "Das schlafende Kind ist süß.", "Partizip I: infinitive + d.", "Partizip I : infinitif + d."]],
      task: ["Describe a picture of a busy street in four sentences, using at least two Partizip I and two Partizip II forms before nouns.", "Décris l'image d'une rue animée en quatre phrases, avec au moins deux Partizip I et deux Partizip II devant des noms.", "Auf dem Bild sieht man spielende Kinder vor einem Café. Eine lesende Frau sitzt auf einer Bank. Neben ihr steht ein frisch gestrichenes Fahrrad. Und vor dem geschlossenen Laden wartet ein bellender Hund."]
    },
    68: {
      gap: [["Ich ___ mein Fahrrad reparieren.", "lasse"], ["Sie ___ sich die Haare schneiden.", "lässt"], ["___ uns ins Kino gehen!", "Lass"], ["Wir haben die Wohnung streichen ___.", "lassen"]],
      fix: [["Ich lasse mein Auto zu reparieren.", "Ich lasse mein Auto reparieren.", "No zu after lassen.", "Pas de zu après lassen."], ["Ich habe meine Uhr reparieren gelassen.", "Ich habe meine Uhr reparieren lassen.", "With another verb: two infinitives, not gelassen.", "Avec un autre verbe : deux infinitifs, pas gelassen."]],
      task: ["Write four sentences with lassen: something you have done by others, something your parents let (or used to let) you do, something you leave at home, and a suggestion with Lass uns…", "Écris quatre phrases avec lassen : quelque chose que tu fais faire, quelque chose qu'on te laisse (ou laissait) faire, quelque chose que tu laisses à la maison, et une proposition avec Lass uns…", "Ich lasse meine Steuererklärung von einer Freundin prüfen. Als Kind ließen mich meine Eltern nie allein ins Kino gehen. Im Urlaub lasse ich meinen Laptop zu Hause. Lass uns am Samstag eine Ausstellung besuchen!"]
    },
    69: {
      gap: [["Der Film ___ von einer großen Liebe.", "handelt"], ["Es geht ___ zwei Schwestern.", "um"], ["Der Film hat ___ sehr gefallen.", "mir"], ["Die Geschichte ___ in Wien.", "spielt", "is set", "se passe"]],
      fix: [["Der Film handelt über eine Familie.", "Der Film handelt von einer Familie.", "handeln von + dative.", "handeln von + datif."], ["Ich habe den Film sehr gefallen.", "Der Film hat mir sehr gefallen.", "gefallen: the film is the subject, you are in the dative.", "gefallen : le film est le sujet, toi au datif."]],
      task: ["Recommend a book or film you like in four sentences: what it's about, where it's set, what you liked, and who it's for.", "Recommande en quatre phrases un livre ou un film que tu aimes : de quoi il parle, où il se passe, ce qui t'a plu, et pour qui il est fait.", "Der Roman handelt von einem alten Mann, der mit achtzig Jahren noch einmal Fahrrad fahren lernt. Die Geschichte spielt in einem kleinen Dorf an der Ostsee. Besonders gut hat mir der Humor gefallen. Das Buch ist ein Muss für alle, die lustige und berührende Geschichten mögen."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "fahrradwerkstatt", lesson: 68, level: "B1", icon: "wrench", partner: "Herr Lindemann", role: "the owner of a bike repair shop", role_fr: "le patron d'un atelier de réparation de vélos",
    title: "At the bike repair shop", title_fr: "À l'atelier de vélos",
    setting: "Your bike's gears and brakes aren't working properly. You take it to Herr Lindemann's repair shop.", setting_fr: "Les vitesses et les freins de ton vélo ne marchent plus bien. Tu l'emmènes à l'atelier de M. Lindemann.",
    turns: [
      { p: "Guten Tag! Was kann ich für Sie tun?", en: "Hello! What can I do for you?", fr: "Bonjour ! Que puis-je faire pour vous ?" },
      { y: ["Guten Tag. Ich möchte mein Fahrrad reparieren lassen. Die Bremsen funktionieren nicht gut.", "Guten Tag. Ich möchte mein Fahrrad zu reparieren lassen. Die Bremsen funktionieren nicht gut.", "Guten Tag. Ich möchte mein Fahrrad reparieren gelassen. Die Bremsen funktionieren nicht gut."], en: "Hello. I'd like to have my bike repaired. The brakes don't work well.", fr: "Bonjour. Je voudrais faire réparer mon vélo. Les freins ne marchent pas bien.", why: "lassen + infinitive, no zu.", why_fr: "lassen + infinitif, sans zu." },
      { p: "Zeigen Sie mal… Ja, die Bremsen sind ziemlich alt. Und die Gangschaltung auch.", en: "Let me see… Yes, the brakes are quite old. And so are the gears.", fr: "Montrez voir… Oui, les freins sont assez vieux. Et les vitesses aussi." },
      { y: ["Können Sie beides reparieren? Ich habe das Fahrrad letztes Jahr schon einmal reparieren lassen.", "Können Sie beides reparieren? Ich habe das Fahrrad letztes Jahr schon einmal reparieren gelassen.", "Können Sie beides reparieren? Ich habe das Fahrrad letztes Jahr schon einmal repariert lassen."], en: "Can you repair both? I already had the bike repaired once last year.", fr: "Vous pouvez réparer les deux ? J'ai déjà fait réparer le vélo une fois l'année dernière.", why: "Perfekt with another verb: reparieren lassen.", why_fr: "Perfekt avec un autre verbe : reparieren lassen." },
      { p: "Natürlich. Die Bremsen tausche ich aus. Bis Donnerstag ist alles fertig.", en: "Of course. I'll replace the brakes. Everything will be ready by Thursday.", fr: "Bien sûr. Je change les freins. Tout sera prêt jeudi." },
      { y: ["Prima. Kann ich das Fahrrad gleich hier lassen?", "Prima. Kann ich das Fahrrad gleich hier gelassen?", "Prima. Kann ich das Fahrrad gleich hier zu lassen?"], en: "Great. Can I leave the bike here straight away?", fr: "Parfait. Je peux laisser le vélo ici tout de suite ?", why: "lassen = to leave; after a modal, the infinitive.", why_fr: "lassen = laisser ; après un verbe de modalité, l'infinitif." },
      { p: "Ja, stellen Sie es einfach dort zu den reparierten Rädern.", en: "Yes, just put it over there with the repaired bikes.", fr: "Oui, posez-le là-bas, avec les vélos réparés." },
      { y: ["Danke. Ach, und könnten Sie auch das quietschende Hinterrad prüfen?", "Danke. Ach, und könnten Sie auch das quietschend Hinterrad prüfen?", "Danke. Ach, und könnten Sie auch das gequietschte Hinterrad prüfen?"], en: "Thank you. Oh, and could you also check the squeaking back wheel?", fr: "Merci. Ah, et vous pourriez aussi vérifier la roue arrière qui grince ?", why: "Partizip I + ending: das quietschende Hinterrad.", why_fr: "Partizip I + terminaison : das quietschende Hinterrad." },
      { p: "Mache ich. Ich rufe Sie an, wenn es fertig ist.", en: "Will do. I'll call you when it's ready.", fr: "Entendu. Je vous appelle quand il sera prêt." },
      { y: ["Vielen Dank! Dann lasse ich Ihnen meine Nummer da.", "Vielen Dank! Dann lasse ich Ihnen meine Nummer zu da.", "Vielen Dank! Dann lass ich Sie meine Nummer da."], en: "Thank you very much! I'll leave you my number, then.", fr: "Merci beaucoup ! Je vous laisse mon numéro, alors.", why: "jemandem etwas dalassen: Ihnen (dative).", why_fr: "jemandem etwas dalassen : Ihnen (datif)." }
    ] },
  { id: "buchclub", lesson: 69, level: "B1", icon: "book-open", partner: "Frieda", role: "a member of your book club", role_fr: "une membre de ton club de lecture",
    title: "At the book club", title_fr: "Au club de lecture",
    setting: "At your book club, Frieda asks what you thought of this month's novel.", setting_fr: "À ton club de lecture, Frieda te demande ce que tu as pensé du roman du mois.",
    turns: [
      { p: "Und, wie hat dir der Roman gefallen?", en: "So, how did you like the novel?", fr: "Alors, comment as-tu trouvé le roman ?" },
      { y: ["Er hat mir sehr gefallen. Es geht um eine Familie, die nach dem Krieg ein Hotel eröffnet.", "Er hat mich sehr gefallen. Es geht um eine Familie, die nach dem Krieg ein Hotel eröffnet.", "Er hat mir sehr gefallen. Es geht von eine Familie, die nach dem Krieg ein Hotel eröffnet."], en: "I really liked it. It's about a family who open a hotel after the war.", fr: "Il m'a beaucoup plu. Il s'agit d'une famille qui ouvre un hôtel après la guerre.", why: "gefallen + dative (mir); Es geht um + accusative.", why_fr: "gefallen + datif (mir) ; Es geht um + accusatif." },
      { p: "Ja, und die Hauptfigur, die Großmutter, fand ich wunderbar. Und du?", en: "Yes, and I thought the main character, the grandmother, was wonderful. And you?", fr: "Oui, et le personnage principal, la grand-mère, je l'ai trouvé formidable. Et toi ?" },
      { y: ["Ich auch! Sie ist eine sehr überzeugende Figur. Besonders gut hat mir der Humor gefallen.", "Ich auch! Sie ist eine sehr überzeugend Figur. Besonders gut hat mir der Humor gefallen.", "Ich auch! Sie ist eine sehr überzeugte Figur. Besonders gut hat mir der Humor gefallen."], en: "Me too! She's a very convincing character. I particularly liked the humour.", fr: "Moi aussi ! C'est un personnage très convaincant. Ce qui m'a particulièrement plu, c'est l'humour.", why: "Partizip I as an adjective + ending: überzeugende.", why_fr: "Partizip I comme adjectif + terminaison : überzeugende." },
      { p: "Gab es auch etwas, was dich gestört hat?", en: "Was there anything that bothered you?", fr: "Il y a quelque chose qui ne t'a pas plu ?" },
      { y: ["Ja, der Anfang war zwar spannend, aber die Mitte war etwas zu lang.", "Ja, der Anfang war zwar spannend, aber die Mitte war etwas zu lang gewesen worden.", "Ja, der Anfang war zwar spannender, aber die Mitte war zu etwas lang."], en: "Yes, the beginning was admittedly gripping, but the middle was a bit too long.", fr: "Oui, le début était certes prenant, mais le milieu un peu trop long.", why: "zwar … aber; spannend after sein: no ending.", why_fr: "zwar … aber ; spannend après sein : pas de terminaison." },
      { p: "Stimmt. Und das Ende? Ich will nichts verraten, falls die anderen es noch nicht gelesen haben…", en: "True. And the ending? I don't want to give anything away, in case the others haven't read it yet…", fr: "C'est vrai. Et la fin ? Je ne veux rien dévoiler, au cas où les autres ne l'auraient pas encore lu…" },
      { y: ["Ich verrate auch nichts! Nur so viel: Es hat mich zum Weinen gebracht.", "Ich verrate auch nichts! Nur so viel: Es hat mich zu weinen gebracht.", "Ich verrate auch nicht nichts! Nur so viel: Es hat mich zum Weinen gebracht."], en: "I won't give anything away either! Just this: it made me cry.", fr: "Moi non plus, je ne dévoile rien ! Seulement : ça m'a fait pleurer.", why: "jemanden zum Weinen bringen = to make someone cry.", why_fr: "jemanden zum Weinen bringen = faire pleurer quelqu'un." },
      { p: "Mich auch! Was lesen wir nächsten Monat?", en: "Me too! What shall we read next month?", fr: "Moi aussi ! On lit quoi le mois prochain ?" },
      { y: ["Lass uns einen Krimi lesen. Ich habe einen sehr empfehlenswerten gefunden.", "Lass uns einen Krimi zu lesen. Ich habe einen sehr empfehlenswerten gefunden.", "Lassen uns einen Krimi lesen. Ich habe einen sehr empfehlenswerten gefunden."], en: "Let's read a crime novel. I've found a very good one.", fr: "Lisons un polar. J'en ai trouvé un que je recommande vivement.", why: "Lass uns + infinitive, no zu.", why_fr: "Lass uns + infinitif, sans zu." }
    ] }
  );

  W.READINGS.push({
    id: "gutenberg", level: "B1", icon: "book-open", title: "Johannes Gutenberg und der Buchdruck", genre: "Article",
    intro: "A goldsmith from Mainz, movable letters made of metal, and a Bible that changed the world.",
    intro_fr: "Un orfèvre de Mayence, des lettres mobiles en métal et une Bible qui a changé le monde.",
    paragraphs: [
      { de: "Vor dem 15. Jahrhundert wurden Bücher in Europa meistens mit der Hand abgeschrieben. Für ein einziges Buch brauchte ein Schreiber oft Monate. Bücher waren deshalb sehr teuer, und nur wenige Menschen besaßen welche.", en: "Before the 15th century, books in Europe were mostly copied by hand. A scribe often needed months for a single book. Books were therefore very expensive, and only a few people owned any.", fr: "Avant le XVe siècle, les livres étaient le plus souvent recopiés à la main en Europe. Un copiste mettait souvent des mois pour un seul livre. Les livres étaient donc très chers, et peu de gens en possédaient." },
      { de: "Um 1450 entwickelte Johannes Gutenberg in Mainz eine neue Technik: den Druck mit beweglichen Buchstaben aus Metall. Die einzelnen Buchstaben konnten immer wieder neu zusammengesetzt werden. So ließ sich eine Seite viel schneller drucken als abschreiben.", en: "Around 1450, Johannes Gutenberg in Mainz developed a new technique: printing with movable letters made of metal. The individual letters could be put together again and again. That way a page could be printed much faster than it could be copied.", fr: "Vers 1450, Johannes Gutenberg mit au point à Mayence une nouvelle technique : l'impression avec des caractères mobiles en métal. Les lettres pouvaient être réassemblées encore et encore. Une page pouvait ainsi être imprimée bien plus vite qu'elle n'était recopiée." },
      { de: "Sein bekanntestes Werk ist die Gutenberg-Bibel, die um 1454 fertig wurde. Man schätzt, dass etwa 180 Exemplare gedruckt wurden; heute existieren noch 49, nicht alle vollständig. Reich wurde Gutenberg trotzdem nicht: Nach einem Prozess mit seinem Geldgeber Johann Fust verlor er 1455 einen Teil seiner Werkstatt.", en: "His best-known work is the Gutenberg Bible, completed around 1454. It's estimated that about 180 copies were printed; 49 still exist today, not all of them complete. Even so, Gutenberg didn't become rich: after a lawsuit with his financial backer Johann Fust, he lost part of his workshop in 1455.", fr: "Son œuvre la plus connue est la Bible de Gutenberg, achevée vers 1454. On estime qu'environ 180 exemplaires furent imprimés ; il en existe encore 49 aujourd'hui, pas tous complets. Gutenberg ne devint pourtant pas riche : après un procès avec son bailleur de fonds, Johann Fust, il perdit en 1455 une partie de son atelier." },
      { de: "Die Erfindung veränderte Europa. Bücher wurden billiger, mehr Menschen lernten lesen, und neue Ideen verbreiteten sich viel schneller. In Mainz kann man heute im Gutenberg-Museum sehen, wie die ersten gedruckten Seiten entstanden sind.", en: "The invention changed Europe. Books became cheaper, more people learned to read, and new ideas spread much faster. Today, in the Gutenberg Museum in Mainz, you can see how the first printed pages were made.", fr: "L'invention transforma l'Europe. Les livres devinrent moins chers, davantage de gens apprirent à lire, et les idées nouvelles se répandirent beaucoup plus vite. Aujourd'hui, au musée Gutenberg de Mayence, on peut voir comment les premières pages imprimées sont nées." }
    ],
    glossary: { "Jahrhundert": ["century", "siècle"], "abgeschrieben": ["copied (by hand)", "recopié"], "einziges": ["single", "seul"], "Schreiber": ["scribe", "copiste"], "besaßen": ["owned", "possédaient"], "entwickelte": ["developed", "mit au point"], "Technik": ["technique", "technique"], "Druck": ["printing", "impression"], "beweglichen": ["movable", "mobiles"], "Buchstaben": ["letters (of the alphabet)", "lettres, caractères"], "zusammengesetzt": ["put together", "assemblé"], "drucken": ["to print", "imprimer"], "bekanntestes": ["best-known", "le plus connu"], "Werk": ["work", "œuvre"], "schätzt": ["estimates", "estime"], "Exemplare": ["copies", "exemplaires"], "existieren": ["exist", "existent"], "vollständig": ["complete", "complet"], "Prozess": ["lawsuit, trial", "procès"], "Geldgeber": ["financial backer", "bailleur de fonds"], "Erfindung": ["invention", "invention"], "veränderte": ["changed", "transforma"], "verbreiteten": ["(sich verbreiten) spread", "(sich verbreiten) se répandirent"], "gedruckten": ["printed", "imprimées"], "entstanden": ["came into being, were made", "sont nées, furent créées"] },
    questions: [
      { q: "Wie wurden Bücher vor Gutenberg meistens hergestellt?", o: ["Mit der Hand abgeschrieben", "Mit Maschinen gedruckt", "Am Computer geschrieben"], a: 0 },
      { q: "Was war Gutenbergs neue Technik?", o: ["Der Druck mit beweglichen Buchstaben aus Metall", "Das Papier", "Die Brille"], a: 0 },
      { q: "Wie viele Exemplare der Gutenberg-Bibel existieren heute noch?", o: ["49", "180", "1454"], a: 0 },
      { q: "Warum wurde Gutenberg nicht reich?", o: ["Nach einem Prozess verlor er einen Teil seiner Werkstatt.", "Niemand kaufte seine Bücher.", "Er schenkte alle Bücher weg."], a: 0 },
      { q: "Was passierte nach der Erfindung?", o: ["Bücher wurden billiger, und Ideen verbreiteten sich schneller.", "Niemand las mehr Bücher.", "Bücher wurden noch teurer."], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-b1-9", unit: "b1-9", level: "B1", icon: "messages-square",
    title: "Nach dem Kino", title_fr: "Après le cinéma",
    context: "Hanna and Jasper have just seen a film. They talk about it on the way home.", context_fr: "Hanna et Jasper viennent de voir un film. Ils en parlent en rentrant.",
    words: [["die Fabrik", "the factory", "l'usine"], ["verlassen", "abandoned", "abandonné"], ["die Kamera", "the camera (work)", "la caméra, l'image"], ["vorhersehbar", "predictable", "prévisible"], ["verraten", "to give away", "dévoiler"]],
    lines: [["Hanna", "Und, wie fandest du den Film?", "de-DE"], ["Jasper", "Ehrlich gesagt hat er mir am Anfang nicht so gefallen. Die ersten zwanzig Minuten in der verlassenen Fabrik waren mir zu langsam.", "de-DE"], ["Hanna", "Das stimmt, aber danach wurde es richtig spannend. Und die Musik war wunderschön.", "de-DE"], ["Jasper", "Ja, und die Schauspielerin, die die Polizistin spielt, war sehr überzeugend.", "de-DE"], ["Hanna", "Fandest du das Ende nicht ein bisschen vorhersehbar?", "de-DE"], ["Jasper", "Nein, gar nicht! Ich habe bis zum Schluss nicht gewusst, wer der Täter ist.", "de-DE"], ["Hanna", "Ich schon, aber ich verrate dir nicht, wann ich es gemerkt habe.", "de-DE"], ["Jasper", "Typisch! Lass uns nächste Woche wieder ins Kino gehen. Dann suche ich den Film aus.", "de-DE"]],
    gist: ["Worüber sprechen Hanna und Jasper?", ["Über einen Film, den sie gerade gesehen haben", "Über ein Buch für ihren Lesekreis", "Über ein Konzert am Wochenende"]],
    detail: [["Was hat Jasper am Anfang nicht gefallen?", ["Die ersten zwanzig Minuten waren ihm zu langsam.", "Die Musik", "Die Schauspielerin"]], ["Wie findet Hanna die Musik?", ["Wunderschön", "Zu laut", "Langweilig"]], ["Wer war sehr überzeugend?", ["Die Schauspielerin, die die Polizistin spielt", "Der Täter", "Der Regisseur"]], ["Was schlägt Jasper am Ende vor?", ["Nächste Woche wieder ins Kino zu gehen", "Das Buch zum Film zu lesen", "Den Film noch einmal zu sehen"]]],
    decode: ["Die ersten zwanzig Minuten in der verlassenen Fabrik waren mir zu langsam.", "Lass uns nächste Woche wieder ins Kino gehen."],
    tip: "When people give opinions, the important word often comes at the end of the sentence: zu langsam, richtig spannend, sehr überzeugend. Keep listening until the end before you decide whether they liked it.", tip_fr: "Quand on donne son avis, le mot important arrive souvent en fin de phrase : zu langsam, richtig spannend, sehr überzeugend. Écoute jusqu'au bout avant de décider si la personne a aimé."
  }]);

  W.PROMPTS.push({ id: "de-b1-9", level: "B1", q: "Erzähl von einem Buch, einem Film oder einer Serie, die dich beeindruckt hat. Worum geht es, und warum gefällt es dir?", en: "Tell us about a book, film or series that impressed you. What's it about, and why do you like it?", fr: "Parle d'un livre, d'un film ou d'une série qui t'a marqué. De quoi ça parle, et pourquoi ça te plaît ?", time: 120,
    phrases: ["Es geht um…", "Die Geschichte spielt in…", "Die Hauptfigur ist…", "Besonders gut hat mir … gefallen.", "Ich kann … nur empfehlen."],
    model: "Vor kurzem habe ich eine Serie gesehen, die mich sehr beeindruckt hat. Es geht um eine Gruppe von Freunden, die in einer kleinen Stadt ein altes Kino retten wollen. Die Geschichte spielt in den achtziger Jahren. Die Hauptfigur ist eine junge Lehrerin, die immer wieder neue Ideen hat. Besonders gut hat mir gefallen, wie die Figuren sich verändern. Die Folgen sind kurz, deshalb kann man sie gut nach der Arbeit schauen. Ich kann die Serie allen empfehlen, die berührende Geschichten mögen." });

  W.WRITING_GUIDE["b1-9"] = { genre: "A film review in a forum (Goethe B1, writing part 2)", genre_fr: "Une critique de film sur un forum (Goethe B1, écrit partie 2)",
    plan: [["What you saw, and your overall opinion.", "Ce que tu as vu, et ton avis général."], ["What it's about (in the present).", "De quoi ça parle (au présent)."], ["What you liked: actors, music, story.", "Ce qui t'a plu : acteurs, musique, histoire."], ["A weak point.", "Un point faible."], ["Your recommendation.", "Ta recommandation."]],
    marks: [["einen Film gesehen, den ich nur empfehlen kann", "a recommendation with a relative clause", "une recommandation avec une relative"], ["Es geht um", "what it's about", "de quoi ça parle"], ["ihr fast verlassenes Heimatdorf", "a participle used as an adjective", "un participe employé comme adjectif"], ["sehr berührend", "Partizip I: touching", "Partizip I : touchant"], ["zum Weinen bringen lassen", "lassen + infinitive in the Perfekt", "lassen + infinitif au Perfekt"], ["Trotzdem ist er für alle", "the conclusion", "la conclusion"]] };

  W.COURSE.push({ id: "b1-9", level: "B1", icon: "clapperboard", title: "Media and culture", title_fr: "Médias et culture",
    intro: "In this unit, you'll talk about books, films and culture: participles used as adjectives (das schlafende Kind, das gelesene Buch), the many uses of lassen (Ich lasse mein Fahrrad reparieren, Lass uns gehen!), and how to talk about a film or a book and write a review. And you'll discover how Gutenberg changed the world from Mainz.",
    intro_fr: "Dans cette unité, tu vas parler de livres, de films et de culture : les participes employés comme adjectifs (das schlafende Kind, das gelesene Buch), les nombreux emplois de lassen (Ich lasse mein Fahrrad reparieren, Lass uns gehen!), et comment parler d'un film ou d'un livre et en écrire une critique. Et tu découvriras comment Gutenberg a changé le monde depuis Mayence.",
    can: ["Use Partizip I and II as adjectives", "Use lassen to have something done, let, leave and suggest", "Say what a book or a film is about and give your opinion", "Recommend (or not) a book, a film or an event", "Write a short review for a forum (Goethe B1)"],
    can_fr: ["Employer le Partizip I et le Partizip II comme adjectifs", "Employer lassen pour faire faire, laisser, permettre et proposer", "Dire de quoi parle un livre ou un film et donner ton avis", "Recommander (ou non) un livre, un film ou une sortie", "Écrire une courte critique pour un forum (Goethe B1)"],
    lessons: [67, 68, 69], vocab: ["buchfilmDE", "kulturDE"], reading: "gutenberg", prompt: "de-b1-9",
    writing: { task: "A cinema's online forum asks: “Which film have you seen recently?” Write a short review (80-100 words): what it's about, what you liked, a weak point, and your recommendation.", task_fr: "Le forum en ligne d'un cinéma demande : « Quel film avez-vous vu récemment ? » Écris une courte critique (80 à 100 mots) : de quoi il parle, ce qui t'a plu, un point faible, et ta recommandation.", words: "80-100",
      tips: ["Gestern habe ich … gesehen.", "Es geht um…", "Besonders gut hat mir … gefallen.", "Ein Nachteil: …", "Ich kann den Film nur empfehlen."],
      checklist: ["I said what it's about, in the present", "I used a participle as an adjective", "I used lassen or gefallen", "I mentioned a weak point", "I wrote between 80 and 100 words"],
      checklist_fr: ["J'ai dit de quoi il parle, au présent", "J'ai employé un participe comme adjectif", "J'ai employé lassen ou gefallen", "J'ai mentionné un point faible", "J'ai écrit entre 80 et 100 mots"],
      model: "Gestern habe ich im Kino einen Film gesehen, den ich nur empfehlen kann. Es geht um eine junge Ärztin, die in ihr fast verlassenes Heimatdorf zurückkehrt. Die Handlung ist zwar langsam, aber sehr berührend. Besonders die Hauptdarstellerin spielt überzeugend: Man glaubt ihr jedes Wort. Am Ende habe ich mich von der traurigen Musik sogar zum Weinen bringen lassen. Ein Nachteil: Mit zweieinhalb Stunden ist der Film etwas zu lang. Trotzdem ist er für alle, die ruhige Filme mögen, ein Muss." } });
})();
