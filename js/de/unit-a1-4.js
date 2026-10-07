/* Cours d'allemand, unité A1-4 « In town / En ville » : l'accusatif (den, einen, keinen) et es gibt, l'impératif
   (Sie, du, ihr), demander et indiquer le chemin, les transports. Explications et traductions en anglais ET en
   français. Personnages fictifs, prénoms allemands.
   Faits vérifiables seulement : l'Ampelmännchen dessiné en 1961 par le psychologue de la circulation Karl Peglau
   pour la RDA, menacé de remplacement après la réunification puis sauvé par un comité de citoyens ; U-Bahn, S-Bahn,
   Straßenbahn ; dans beaucoup de villes, un billet papier doit être composté (entwerten). */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "stadtDE", icon: "building-2", title: "Places in town", title_fr: "Les lieux de la ville", level: "A1", words: [
    ["der Bahnhof, ¨-e", "the station", "la gare", "Wo ist der Bahnhof, bitte?"],
    ["der Hauptbahnhof, ¨-e", "the main station", "la gare centrale", "Der Bus fährt zum Hauptbahnhof."],
    ["die Haltestelle, -n", "the stop (bus, tram)", "l'arrêt (bus, tram)", "Die Haltestelle ist hier links."],
    ["die Post", "the post office", "la poste", "Die Post ist neben der Bank."],
    ["die Bank, -en", "the bank", "la banque", "Gibt es hier eine Bank?"],
    ["die Apotheke, -n", "the pharmacy", "la pharmacie", "Ich suche eine Apotheke."],
    ["das Krankenhaus, ¨-er", "the hospital", "l'hôpital", "Das Krankenhaus ist nicht weit."],
    ["das Rathaus, ¨-er", "the town hall", "la mairie, l'hôtel de ville", "Das Rathaus ist sehr alt."],
    ["die Kirche, -n", "the church", "l'église", "Die Kirche ist am Marktplatz."],
    ["das Museum, Museen", "the museum", "le musée", "Das Museum ist montags geschlossen."],
    ["die Bibliothek, -en", "the library", "la bibliothèque", "Ich lerne oft in der Bibliothek."],
    ["der Park, -s", "the park", "le parc", "Es gibt einen schönen Park hier."],
    ["der Platz, ¨-e", "the square; the space, the seat", "la place", "Wir treffen uns auf dem Platz."],
    ["die Brücke, -n", "the bridge", "le pont", "Gehen Sie über die Brücke."],
    ["der Flughafen, ¨", "the airport", "l'aéroport", "Wie komme ich zum Flughafen?"],
    ["die Polizei", "the police", "la police", "Die Polizei ist gleich hier."],
    ["das Geschäft, -e", "the shop", "le magasin", "Die Geschäfte sind sonntags zu."],
    ["geschlossen", "closed", "fermé", "Die Post ist heute geschlossen."],
    ["geöffnet", "open", "ouvert", "Die Apotheke ist bis acht Uhr geöffnet."]
  ] },
  { id: "wegDE", icon: "signpost", title: "Directions and transport", title_fr: "Le chemin et les transports", level: "A1", words: [
    ["geradeaus", "straight on", "tout droit", "Gehen Sie geradeaus."],
    ["nach links", "to the left", "à gauche (direction)", "Gehen Sie hier nach links."],
    ["nach rechts", "to the right", "à droite (direction)", "Dann nach rechts."],
    ["die Ampel, -n", "the traffic lights", "le feu (de circulation)", "An der Ampel gehen Sie links."],
    ["die Kreuzung, -en", "the crossroads", "le carrefour", "An der Kreuzung rechts."],
    ["die Ecke, -n", "the corner", "le coin", "Die Bäckerei ist an der Ecke."],
    ["gegenüber", "opposite", "en face", "Die Post ist gegenüber vom Bahnhof."],
    ["in der Nähe", "nearby", "à proximité, près d'ici", "Gibt es hier in der Nähe eine Apotheke?"],
    ["weit", "far", "loin", "Ist es weit?"],
    ["nah", "near, close", "proche, près", "Das Museum ist ganz nah."],
    ["die U-Bahn, -en", "the underground, the subway", "le métro", "Ich fahre mit der U-Bahn."],
    ["die S-Bahn, -en", "the suburban train", "le train de banlieue, le RER", "Die S-Bahn fährt zum Flughafen."],
    ["die Straßenbahn, -en", "the tram", "le tramway", "Nehmen Sie die Straßenbahn Nummer vier."],
    ["das Fahrrad, ¨-er", "the bicycle", "le vélo", "Ich fahre mit dem Fahrrad zur Arbeit."],
    ["die Fahrkarte, -n", "the ticket", "le billet, le ticket", "Eine Fahrkarte, bitte."],
    ["einsteigen", "to get on (a bus, a train)", "monter (dans un bus, un train)", "Steigen Sie hier ein."],
    ["aussteigen", "to get off", "descendre (d'un bus, d'un train)", "Wir steigen am Marktplatz aus."],
    ["umsteigen", "to change (trains, buses)", "changer (de ligne)", "Sie müssen am Hauptbahnhof umsteigen."],
    ["die nächste Haltestelle", "the next stop", "le prochain arrêt", "Wir steigen an der nächsten Haltestelle aus."]
  ] },
  { id: "akkusativDE", icon: "search", title: "Verbs with an object", title_fr: "Verbes avec un complément", level: "A1", words: [
    ["suchen", "to look for", "chercher", "Ich suche den Bahnhof."],
    ["brauchen", "to need", "avoir besoin de", "Ich brauche einen Stadtplan."],
    ["es gibt", "there is, there are", "il y a", "Hier gibt es einen Park."],
    ["besuchen", "to visit", "visiter, rendre visite à", "Wir besuchen das Museum."],
    ["nehmen", "to take", "prendre", "Nimm den Bus!"],
    ["kennen", "to know (a person, a place)", "connaître", "Kennst du den Weg?"],
    ["der Weg, -e", "the way, the path", "le chemin", "Wie ist der Weg zum Bahnhof?"],
    ["der Stadtplan, ¨-e", "the town map", "le plan de la ville", "Haben Sie einen Stadtplan?"],
    ["der Schlüssel, -", "the key", "la clé", "Ich suche meinen Schlüssel."],
    ["der Regenschirm, -e", "the umbrella", "le parapluie", "Nimm einen Regenschirm!"],
    ["die Tasche, -n", "the bag", "le sac", "Hast du meine Tasche?"],
    ["das Ticket, -s", "the ticket (informal)", "le ticket", "Hast du ein Ticket?"],
    ["zeigen", "to show", "montrer", "Können Sie mir den Weg zeigen?"],
    ["fragen", "to ask", "demander", "Frag doch die Frau da!"],
    ["helfen", "to help", "aider", "Kann ich Ihnen helfen?"],
    ["der Tourist, -en / die Touristin, -nen", "the tourist (m) / the tourist (f)", "le touriste / la touriste", "Viele Touristen besuchen Berlin."]
  ] });

  W.LESSONS.push(
  {
    id: 10, level: "A1", icon: "search",
    title: "Ich suche den Bahnhof: the accusative and es gibt", title_fr: "Ich suche den Bahnhof : l'accusatif et es gibt",
    subtitle: "What you look for, need, see or visit: the object of the verb, and the masculine that changes.", subtitle_fr: "Ce que tu cherches, ce dont tu as besoin, ce que tu vois ou visites : le complément d'objet, et le masculin qui change.",
    body: `
<h2>Subject and object</h2>
<p>In <s-de>Der Mann sucht den Bahnhof</s-de>, the man is the <b>subject</b> (who is looking?) and the station is the <b>object</b> (what is he looking for?). In German, the object is in the <b>accusative</b>, and you can see it: only the masculine changes.</p>
<table>
<tr><th></th><th>Subject</th><th>Object</th></tr>
<tr><td>masculine</td><td><s-de>der</s-de>, <s-de>ein</s-de></td><td><b><s-de>den</s-de>, <s-de>einen</s-de></b></td></tr>
<tr><td>feminine</td><td><s-de>die</s-de>, <s-de>eine</s-de></td><td><s-de>die</s-de>, <s-de>eine</s-de></td></tr>
<tr><td>neuter</td><td><s-de>das</s-de>, <s-de>ein</s-de></td><td><s-de>das</s-de>, <s-de>ein</s-de></td></tr>
<tr><td>plural</td><td><s-de>die</s-de></td><td><s-de>die</s-de></td></tr>
</table>
<p><s-de>kein</s-de> and the possessives follow <s-de>ein</s-de>: <s-de>keinen</s-de>, <s-de>meinen</s-de>, <s-de>deinen</s-de>. You already know it from <s-de>Ich habe einen Bruder</s-de>. Many common verbs take an accusative object: <s-de>haben</s-de>, <s-de>suchen</s-de>, <s-de>brauchen</s-de>, <s-de>sehen</s-de>, <s-de>finden</s-de>, <s-de>kaufen</s-de>, <s-de>nehmen</s-de>, <s-de>besuchen</s-de>, <s-de>kennen</s-de>.</p>
<h2>Why it matters</h2>
<p>Because the article shows who does what, German word order is free-er than in English: <s-de>Den Bahnhof sucht der Mann.</s-de> still means "the man is looking for the station". Listen to the article, not just to the position!</p>
<h2>Es gibt: there is, there are</h2>
<p><s-de>es gibt</s-de> + accusative, for singular and plural alike: <s-de>Hier gibt es einen Park.</s-de> (There's a park here.) · <s-de>Es gibt keinen Supermarkt.</s-de> · <s-de>Gibt es hier eine Apotheke?</s-de> · <s-de>Es gibt viele Museen.</s-de></p>
<div class="tip">The verb <s-de>sein</s-de> never takes an accusative: <s-de>Das ist der Bahnhof.</s-de> (subject = what it is). Only the masculine shows the difference: <s-de>Das ist ein Park</s-de> / <s-de>Es gibt einen Park</s-de>.</div>
`,
    body_fr: `
<h2>Sujet et complément</h2>
<p>Dans <s-de>Der Mann sucht den Bahnhof</s-de>, l'homme est le <b>sujet</b> (qui cherche ?) et la gare le <b>complément d'objet direct</b> (que cherche-t-il ?). En allemand, ce complément se met à l'<b>accusatif</b>, et cela se voit : seul le masculin change.</p>
<table>
<tr><th></th><th>Sujet</th><th>COD</th></tr>
<tr><td>masculin</td><td><s-de>der</s-de>, <s-de>ein</s-de></td><td><b><s-de>den</s-de>, <s-de>einen</s-de></b></td></tr>
<tr><td>féminin</td><td><s-de>die</s-de>, <s-de>eine</s-de></td><td><s-de>die</s-de>, <s-de>eine</s-de></td></tr>
<tr><td>neutre</td><td><s-de>das</s-de>, <s-de>ein</s-de></td><td><s-de>das</s-de>, <s-de>ein</s-de></td></tr>
<tr><td>pluriel</td><td><s-de>die</s-de></td><td><s-de>die</s-de></td></tr>
</table>
<p><s-de>kein</s-de> et les possessifs suivent <s-de>ein</s-de> : <s-de>keinen</s-de>, <s-de>meinen</s-de>, <s-de>deinen</s-de>. Tu le connais déjà avec <s-de>Ich habe einen Bruder</s-de>. Beaucoup de verbes courants ont un complément à l'accusatif : <s-de>haben</s-de>, <s-de>suchen</s-de>, <s-de>brauchen</s-de>, <s-de>sehen</s-de>, <s-de>finden</s-de>, <s-de>kaufen</s-de>, <s-de>nehmen</s-de>, <s-de>besuchen</s-de>, <s-de>kennen</s-de>. Attention aux faux amis de construction : <s-de>Ich brauche einen Stadtplan</s-de> (j'ai besoin d'un plan) n'a pas de préposition en allemand.</p>
<h2>Pourquoi c'est important</h2>
<p>Comme l'article montre qui fait quoi, l'ordre des mots est plus libre qu'en français : <s-de>Den Bahnhof sucht der Mann.</s-de> veut toujours dire « l'homme cherche la gare ». Écoute l'article, pas seulement la place du mot !</p>
<h2>Es gibt : il y a</h2>
<p><s-de>es gibt</s-de> + accusatif, au singulier comme au pluriel : <s-de>Hier gibt es einen Park.</s-de> (Il y a un parc ici.) · <s-de>Es gibt keinen Supermarkt.</s-de> · <s-de>Gibt es hier eine Apotheke?</s-de> · <s-de>Es gibt viele Museen.</s-de></p>
<div class="tip">Le verbe <s-de>sein</s-de> ne prend jamais d'accusatif : <s-de>Das ist der Bahnhof.</s-de> (c'est la gare). Seul le masculin montre la différence : <s-de>Das ist ein Park</s-de> / <s-de>Es gibt einen Park</s-de>.</div>
`,
    examples: [
      ["Ich suche den Bahnhof.", "I'm looking for the station.", "Je cherche la gare."],
      ["Hier gibt es einen schönen Park.", "There's a beautiful park here.", "Il y a un beau parc ici."],
      ["Gibt es hier in der Nähe eine Apotheke?", "Is there a pharmacy near here?", "Y a-t-il une pharmacie près d'ici ?"],
      ["Wir brauchen keinen Stadtplan.", "We don't need a map.", "Nous n'avons pas besoin de plan."],
      ["Kennst du den Weg zum Museum?", "Do you know the way to the museum?", "Tu connais le chemin du musée ?"],
      ["Ich nehme das Fahrrad, du nimmst den Bus.", "I'll take the bike, you take the bus.", "Je prends le vélo, tu prends le bus."],
      ["Den Schlüssel finde ich nicht!", "I can't find the key!", "La clé, je ne la trouve pas !"]
    ],
    quiz: [
      { q: "Complete: “Ich suche ___ Bahnhof.”", q_fr: "Complète : « Ich suche ___ Bahnhof. »", o: ["der", "den", "dem"], a: 1, ex: "der Bahnhof is the object of suchen: den.", ex_fr: "der Bahnhof est le COD de suchen : den." },
      { q: "Complete: “Gibt es hier ___ Apotheke?”", q_fr: "Complète : « Gibt es hier ___ Apotheke? »", o: ["einen", "eine", "ein"], a: 1, ex: "die Apotheke is feminine: eine doesn't change.", ex_fr: "die Apotheke est féminin : eine ne change pas." },
      { q: "Complete: “Das ist ___ Park.”", q_fr: "Complète : « Das ist ___ Park. »", o: ["ein", "einen", "eine"], a: 0, ex: "sein takes no accusative: Das ist ein Park.", ex_fr: "sein ne prend pas d'accusatif : Das ist ein Park." },
      { q: "“Den Hund sieht die Frau.” Who sees whom?", q_fr: "« Den Hund sieht die Frau. » Qui voit qui ?", o: ["The woman sees the dog.", "The dog sees the woman."], o_fr: ["La femme voit le chien.", "Le chien voit la femme."], a: 0, ex: "den Hund is the object: the woman is the subject, even though she comes last.", ex_fr: "den Hund est le COD : c'est la femme qui voit, même si elle vient à la fin." },
      { q: "“There's no supermarket here.”", q_fr: "« Il n'y a pas de supermarché ici. »", o: ["Hier gibt es keinen Supermarkt.", "Hier ist es kein Supermarkt.", "Hier gibt es kein Supermarkt."], a: 0, ex: "es gibt + accusative: keinen Supermarkt.", ex_fr: "es gibt + accusatif : keinen Supermarkt." }
    ]
  },
  {
    id: 11, level: "A1", icon: "megaphone",
    title: "Gehen Sie geradeaus! The imperative", title_fr: "Gehen Sie geradeaus! L'impératif",
    subtitle: "Give directions and instructions to someone you say Sie, du or ihr to.", subtitle_fr: "Donner des indications et des consignes à quelqu'un que tu vouvoies, tutoies, ou à plusieurs personnes.",
    body: `
<h2>Three forms</h2>
<table>
<tr><th>To</th><th>How</th><th>Example</th></tr>
<tr><td>Sie</td><td>verb + Sie</td><td><s-de>Gehen Sie geradeaus!</s-de></td></tr>
<tr><td>du</td><td>stem, no du</td><td><s-de>Geh geradeaus!</s-de></td></tr>
<tr><td>ihr</td><td>ihr form, no ihr</td><td><s-de>Geht geradeaus!</s-de></td></tr>
</table>
<p>The <b>Sie</b> form is the easiest: the infinitive, then <s-de>Sie</s-de>: <s-de>Nehmen Sie den Bus!</s-de> The <b>du</b> form is the stem, without -st and without <s-de>du</s-de>: <s-de>komm!</s-de>, <s-de>frag!</s-de>, <s-de>warte!</s-de> (with an extra e after -t or -d). Verbs that change e to i keep it: <s-de>nehmen</s-de> → <s-de>Nimm den Bus!</s-de>, <s-de>sprechen</s-de> → <s-de>Sprich langsam!</s-de> But a → ä does not: <s-de>Fahr langsam!</s-de></p>
<h2>Separable verbs</h2>
<p>The prefix goes to the end, as usual: <s-de>Steigen Sie am Marktplatz aus!</s-de> · <s-de>Ruf mich an!</s-de></p>
<h2>Being polite</h2>
<p>An imperative alone can sound abrupt. Add <s-de>bitte</s-de>, and often <s-de>doch</s-de> or <s-de>mal</s-de>, which make it friendlier: <s-de>Kommen Sie bitte herein!</s-de> · <s-de>Frag doch die Frau da!</s-de> (Why don't you ask that woman?) · <s-de>Warte mal!</s-de> (Wait a sec!)</p>
<p>The irregular one: <s-de>sein</s-de> → <s-de>Seien Sie pünktlich!</s-de> · <s-de>Sei pünktlich!</s-de></p>
<div class="tip">German signs often use the infinitive as a polite order: <s-de>Bitte nicht rauchen!</s-de> (No smoking, please.) · <s-de>Bitte einsteigen!</s-de> (Please get on.)</div>
`,
    body_fr: `
<h2>Trois formes</h2>
<table>
<tr><th>À qui</th><th>Comment</th><th>Exemple</th></tr>
<tr><td>Sie</td><td>verbe + Sie</td><td><s-de>Gehen Sie geradeaus!</s-de></td></tr>
<tr><td>du</td><td>radical, sans du</td><td><s-de>Geh geradeaus!</s-de></td></tr>
<tr><td>ihr</td><td>forme de ihr, sans ihr</td><td><s-de>Geht geradeaus!</s-de></td></tr>
</table>
<p>La forme de politesse est la plus simple : l'infinitif, puis <s-de>Sie</s-de> : <s-de>Nehmen Sie den Bus!</s-de> (Prenez le bus !) À la différence du français, on garde le pronom. La forme <b>du</b> est le radical, sans -st et sans <s-de>du</s-de> : <s-de>komm!</s-de>, <s-de>frag!</s-de>, <s-de>warte!</s-de> (avec un e en plus après -t ou -d). Les verbes qui changent e en i le gardent : <s-de>nehmen</s-de> → <s-de>Nimm den Bus!</s-de>, <s-de>sprechen</s-de> → <s-de>Sprich langsam!</s-de> Mais pas a → ä : <s-de>Fahr langsam!</s-de></p>
<h2>Les verbes séparables</h2>
<p>La particule part à la fin, comme d'habitude : <s-de>Steigen Sie am Marktplatz aus!</s-de> (Descendez à la place du marché !) · <s-de>Ruf mich an!</s-de> (Appelle-moi !)</p>
<h2>Rester poli</h2>
<p>Un impératif seul peut sembler sec. Ajoute <s-de>bitte</s-de>, et souvent <s-de>doch</s-de> ou <s-de>mal</s-de>, qui l'adoucissent : <s-de>Kommen Sie bitte herein!</s-de> (Entrez, je vous en prie !) · <s-de>Frag doch die Frau da!</s-de> (Demande donc à la dame, là !) · <s-de>Warte mal!</s-de> (Attends une seconde !)</p>
<p>L'irrégulier : <s-de>sein</s-de> → <s-de>Seien Sie pünktlich!</s-de> · <s-de>Sei pünktlich!</s-de></p>
<div class="tip">Les panneaux allemands emploient souvent l'infinitif comme ordre poli, un peu comme le français « Ne pas fumer » : <s-de>Bitte nicht rauchen!</s-de> · <s-de>Bitte einsteigen!</s-de> (Montez, s'il vous plaît.)</div>
`,
    examples: [
      ["Gehen Sie geradeaus und dann links.", "Go straight on and then left.", "Allez tout droit, puis à gauche."],
      ["Nimm die U-Bahn, das ist schneller!", "Take the underground, it's faster!", "Prends le métro, c'est plus rapide !"],
      ["Steigen Sie am Rathaus aus.", "Get off at the town hall.", "Descendez à la mairie."],
      ["Wartet hier, ich komme gleich!", "Wait here, I'll be right back!", "Attendez ici, je reviens tout de suite !"],
      ["Frag doch die Frau da!", "Why don't you ask that woman?", "Demande donc à la dame, là !"],
      ["Sprechen Sie bitte langsam.", "Please speak slowly.", "Parlez lentement, s'il vous plaît."],
      ["Sei bitte pünktlich!", "Please be on time!", "Sois à l'heure, s'il te plaît !"]
    ],
    quiz: [
      { q: "To a stranger: “Take the bus!”", q_fr: "À une personne inconnue : « Prenez le bus ! »", o: ["Nehmen Sie den Bus!", "Nimm den Bus!", "Sie nehmen den Bus!"], a: 0, ex: "With Sie: infinitive + Sie.", ex_fr: "Avec Sie : infinitif + Sie." },
      { q: "To a friend: “Take the bus!”", q_fr: "À un ami : « Prends le bus ! »", o: ["Nehm den Bus!", "Nimm den Bus!", "Nimmst den Bus!"], a: 1, ex: "nehmen → du nimmst → Nimm!", ex_fr: "nehmen → du nimmst → Nimm!" },
      { q: "To two friends: “Wait!”", q_fr: "À deux amis : « Attendez ! »", o: ["Wartet!", "Warten!", "Wartest!"], a: 0, ex: "The ihr form without ihr: Wartet!", ex_fr: "La forme de ihr, sans ihr : Wartet!" },
      { q: "“Get off here!” (aussteigen, Sie)", q_fr: "« Descendez ici ! » (aussteigen, Sie)", o: ["Aussteigen Sie hier!", "Steigen Sie hier aus!", "Steigen Sie aus hier!"], a: 1, ex: "The prefix goes to the end.", ex_fr: "La particule part à la fin." },
      { q: "To a friend: “Be on time!”", q_fr: "À un ami : « Sois à l'heure ! »", o: ["Bist pünktlich!", "Sei pünktlich!", "Seien pünktlich!"], a: 1, ex: "sein is irregular: Sei! (du), Seien Sie! (Sie).", ex_fr: "sein est irrégulier : Sei! (du), Seien Sie! (Sie)." }
    ]
  },
  {
    id: 12, level: "A1", kind: "functional", icon: "map",
    title: "Everyday German: asking the way and taking public transport", title_fr: "L'allemand de tous les jours : demander son chemin et prendre les transports",
    subtitle: "Ask a passer-by, understand the answer, and find your way by underground, tram or bus.", subtitle_fr: "Interroger un passant, comprendre la réponse, et te repérer en métro, en tram ou en bus.",
    body: `
<h2>Asking</h2>
<p><s-de>Entschuldigung, wo ist der Bahnhof?</s-de> · <s-de>Wie komme ich zum Bahnhof?</s-de> (How do I get to the station?) · <s-de>Gibt es hier in der Nähe eine Apotheke?</s-de> · <s-de>Ist das weit?</s-de> · <s-de>Wie weit ist es zu Fuß?</s-de></p>
<p><s-de>zum</s-de> (to the) is used before masculine and neuter places: <s-de>zum Bahnhof</s-de>, <s-de>zum Museum</s-de>; <s-de>zur</s-de> before feminine ones: <s-de>zur Post</s-de>, <s-de>zur Haltestelle</s-de>. Learn them as blocks for now.</p>
<h2>Understanding the answer</h2>
<p><s-de>Gehen Sie geradeaus.</s-de> · <s-de>Gehen Sie die erste Straße links / die zweite rechts.</s-de> · <s-de>An der Ampel nach rechts.</s-de> · <s-de>Über die Brücke.</s-de> · <s-de>Das ist gegenüber vom Rathaus.</s-de> · <s-de>Das ist gleich da vorne.</s-de> (It's just up ahead.) · <s-de>Etwa fünf Minuten zu Fuß.</s-de></p>
<h2>Public transport</h2>
<p><s-de>die U-Bahn</s-de> (underground) · <s-de>die S-Bahn</s-de> (suburban train) · <s-de>die Straßenbahn</s-de> (tram) · <s-de>der Bus</s-de>. <s-de>Welche Linie fährt zum Flughafen?</s-de> · <s-de>Wo muss ich umsteigen?</s-de> · <s-de>Wo muss ich aussteigen?</s-de> · <s-de>Eine Fahrkarte nach Potsdam, bitte.</s-de></p>
<p>In many German cities, a paper ticket has to be stamped (<s-de>entwerten</s-de>) in a small machine before the journey: an unstamped ticket counts as no ticket.</p>
<div class="tip">Didn't understand? <s-de>Wie bitte?</s-de> (Sorry?) · <s-de>Können Sie das bitte wiederholen?</s-de> (Can you repeat that?) · <s-de>Können Sie mir das auf der Karte zeigen?</s-de> (Can you show me on the map?)</div>
`,
    body_fr: `
<h2>Demander</h2>
<p><s-de>Entschuldigung, wo ist der Bahnhof?</s-de> · <s-de>Wie komme ich zum Bahnhof?</s-de> (Comment aller à la gare ?) · <s-de>Gibt es hier in der Nähe eine Apotheke?</s-de> · <s-de>Ist das weit?</s-de> · <s-de>Wie weit ist es zu Fuß?</s-de> (C'est à combien à pied ?)</p>
<p><s-de>zum</s-de> (au, à la) s'emploie devant les lieux masculins et neutres : <s-de>zum Bahnhof</s-de>, <s-de>zum Museum</s-de> ; <s-de>zur</s-de> devant les féminins : <s-de>zur Post</s-de>, <s-de>zur Haltestelle</s-de>. Pour l'instant, apprends-les en bloc.</p>
<h2>Comprendre la réponse</h2>
<p><s-de>Gehen Sie geradeaus.</s-de> · <s-de>Gehen Sie die erste Straße links / die zweite rechts.</s-de> · <s-de>An der Ampel nach rechts.</s-de> · <s-de>Über die Brücke.</s-de> · <s-de>Das ist gegenüber vom Rathaus.</s-de> (C'est en face de la mairie.) · <s-de>Das ist gleich da vorne.</s-de> (C'est juste là, devant.) · <s-de>Etwa fünf Minuten zu Fuß.</s-de></p>
<h2>Les transports en commun</h2>
<p><s-de>die U-Bahn</s-de> (métro) · <s-de>die S-Bahn</s-de> (train de banlieue, comme le RER) · <s-de>die Straßenbahn</s-de> (tramway) · <s-de>der Bus</s-de>. <s-de>Welche Linie fährt zum Flughafen?</s-de> · <s-de>Wo muss ich umsteigen?</s-de> (Où dois-je changer ?) · <s-de>Wo muss ich aussteigen?</s-de> · <s-de>Eine Fahrkarte nach Potsdam, bitte.</s-de></p>
<p>Dans beaucoup de villes allemandes, un billet papier doit être composté (<s-de>entwerten</s-de>) dans une petite machine avant le trajet : un billet non composté compte comme pas de billet du tout.</p>
<div class="tip">Tu n'as pas compris ? <s-de>Wie bitte?</s-de> (Pardon ?) · <s-de>Können Sie das bitte wiederholen?</s-de> (Vous pouvez répéter ?) · <s-de>Können Sie mir das auf der Karte zeigen?</s-de> (Vous pouvez me le montrer sur le plan ?)</div>
`,
    examples: [
      ["Entschuldigung, wie komme ich zum Bahnhof?", "Excuse me, how do I get to the station?", "Excusez-moi, comment aller à la gare ?"],
      ["Gehen Sie die erste Straße rechts.", "Take the first street on the right.", "Prenez la première rue à droite."],
      ["An der Ampel gehen Sie nach links.", "At the traffic lights, go left.", "Au feu, allez à gauche."],
      ["Die Post ist gegenüber vom Rathaus.", "The post office is opposite the town hall.", "La poste est en face de la mairie."],
      ["Ist das weit? — Nein, etwa fünf Minuten zu Fuß.", "Is it far? — No, about five minutes on foot.", "C'est loin ? — Non, à environ cinq minutes à pied."],
      ["Wo muss ich umsteigen?", "Where do I have to change?", "Où dois-je changer ?"],
      ["Wie bitte? Können Sie das bitte wiederholen?", "Sorry? Can you repeat that, please?", "Pardon ? Vous pouvez répéter, s'il vous plaît ?"]
    ],
    quiz: [
      { q: "“How do I get to the post office?”", q_fr: "« Comment aller à la poste ? »", o: ["Wie komme ich zur Post?", "Wie komme ich zum Post?", "Wo komme ich zur Post?"], a: 0, ex: "die Post is feminine: zur Post.", ex_fr: "die Post est féminin : zur Post." },
      { q: "“Gegenüber vom Bahnhof” means:", q_fr: "« Gegenüber vom Bahnhof » veut dire :", o: ["opposite the station", "next to the station", "behind the station"], o_fr: ["en face de la gare", "à côté de la gare", "derrière la gare"], a: 0, ex: "gegenüber = opposite.", ex_fr: "gegenüber = en face." },
      { q: "You don't understand. You say:", q_fr: "Tu n'as pas compris. Tu dis :", o: ["Wie bitte?", "Bitte schön!", "Was bitte?"], a: 0, ex: "Wie bitte? is the polite way to ask someone to repeat.", ex_fr: "Wie bitte? est la façon polie de faire répéter." },
      { q: "die S-Bahn is…", q_fr: "die S-Bahn, c'est…", o: ["a suburban train", "a bus", "a taxi"], o_fr: ["un train de banlieue", "un bus", "un taxi"], a: 0, ex: "U-Bahn: underground; S-Bahn: suburban train; Straßenbahn: tram.", ex_fr: "U-Bahn : métro ; S-Bahn : train de banlieue ; Straßenbahn : tramway." },
      { q: "“Where do I have to get off?”", q_fr: "« Où dois-je descendre ? »", o: ["Wo muss ich aussteigen?", "Wo muss ich einsteigen?", "Wo muss ich umsteigen?"], a: 0, ex: "aussteigen = to get off; einsteigen = to get on; umsteigen = to change.", ex_fr: "aussteigen = descendre ; einsteigen = monter ; umsteigen = changer." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    10: {
      gap: [["Ich suche ___ Bahnhof.", "den", "the", "le, la"], ["Hier gibt es ___ Park.", "einen", "a", "un"], ["Wir brauchen ___ Stadtplan.", "keinen", "no", "pas de"], ["Das ist ___ Kirche.", "eine", "a", "une"]],
      fix: [["Ich suche der Bahnhof.", "Ich suche den Bahnhof.", "der Bahnhof is the object of suchen: den.", "der Bahnhof est le COD de suchen : den."], ["Hier ist es eine Apotheke.", "Hier gibt es eine Apotheke.", "There is = es gibt.", "Il y a = es gibt."]],
      task: ["Describe your neighbourhood in four sentences with es gibt and kein.", "Décris ton quartier en quatre phrases avec es gibt et kein.", "In meinem Viertel gibt es einen Park und zwei Bäckereien. Es gibt auch eine Bibliothek. Aber es gibt keinen Supermarkt und kein Kino. Ich brauche also immer das Fahrrad."]
    },
    11: {
      gap: [["___ Sie geradeaus! (gehen)", "Gehen"], ["___ den Bus, Tim! (nehmen)", "Nimm"], ["Steigen Sie am Rathaus ___!", "aus", "aussteigen"], ["___ pünktlich, Lena! (sein)", "Sei"]],
      fix: [["Nehmst den Bus!", "Nimm den Bus!", "nehmen → du nimmst → Nimm!", "nehmen → du nimmst → Nimm!"], ["Aussteigen Sie hier!", "Steigen Sie hier aus!", "The prefix goes to the end.", "La particule part à la fin."]],
      task: ["Give four instructions to a friend who visits your town (du form).", "Donne quatre consignes à un ami qui visite ta ville (forme du).", "Nimm am Bahnhof die Straßenbahn Nummer drei. Steig am Marktplatz aus. Geh dann geradeaus und frag nach dem Museum. Und ruf mich an, wenn du da bist!"]
    },
    12: {
      gap: [["Wie komme ich ___ Bahnhof?", "zum", "to the", "à la, au"], ["Wie komme ich ___ Post?", "zur", "to the", "à la, au"], ["Die Bank ist ___ vom Rathaus.", "gegenüber", "opposite", "en face"], ["Wo muss ich ___? (to get off)", "aussteigen", "aussteigen"]],
      fix: [["Wie komme ich zum Haltestelle?", "Wie komme ich zur Haltestelle?", "die Haltestelle is feminine: zur.", "die Haltestelle est féminin : zur."], ["Wo bitte? Ich verstehe nicht.", "Wie bitte? Ich verstehe nicht.", "To ask someone to repeat: Wie bitte?", "Pour faire répéter : Wie bitte?"]],
      task: ["Explain the way from a station to a place you know, in four sentences (Sie form).", "Explique le chemin d'une gare jusqu'à un lieu que tu connais, en quatre phrases (forme Sie).", "Gehen Sie aus dem Bahnhof und dann nach rechts. Gehen Sie geradeaus bis zur Ampel. Dort gehen Sie über die Brücke. Das Museum ist gleich da vorne, gegenüber vom Rathaus."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "touristinfo", lesson: 10, level: "A1", icon: "info", partner: "Herr Brandt", role: "an employee at the tourist office", role_fr: "l'employé de l'office du tourisme",
    title: "At the tourist office", title_fr: "À l'office du tourisme",
    setting: "You've just arrived in Weimar for a weekend. You go to the tourist office.", setting_fr: "Tu viens d'arriver à Weimar pour un week-end. Tu vas à l'office du tourisme.",
    turns: [
      { p: "Guten Tag! Wie kann ich Ihnen helfen?", en: "Hello! How can I help you?", fr: "Bonjour ! Que puis-je faire pour vous ?" },
      { y: ["Guten Tag! Ich brauche einen Stadtplan, bitte.", "Guten Tag! Ich brauche ein Stadtplan, bitte.", "Guten Tag! Ich brauche der Stadtplan, bitte."], en: "Hello! I need a town map, please.", fr: "Bonjour ! J'ai besoin d'un plan de la ville, s'il vous plaît.", why: "der Stadtplan is the object of brauchen: einen.", why_fr: "der Stadtplan est le COD de brauchen : einen." },
      { p: "Hier, bitte. Was möchten Sie besuchen?", en: "Here you are. What would you like to visit?", fr: "Tenez. Qu'aimeriez-vous visiter ?" },
      { y: ["Gibt es hier ein Museum?", "Ist es hier ein Museum?", "Gibt es hier einen Museum?"], en: "Is there a museum here?", fr: "Y a-t-il un musée ici ?", why: "There is = es gibt; das Museum is neuter: ein.", why_fr: "Il y a = es gibt ; das Museum est neutre : ein." },
      { p: "Ja, es gibt viele Museen! Das Goethe-Nationalmuseum ist ganz nah, am Frauenplan.", en: "Yes, there are many museums! The Goethe National Museum is very close, on Frauenplan square.", fr: "Oui, il y a beaucoup de musées ! Le musée national Goethe est tout près, sur la place Frauenplan." },
      { y: ["Toll! Und wo finde ich einen Supermarkt?", "Toll! Und wo finde ich ein Supermarkt?", "Toll! Und wo finde ich einer Supermarkt?"], en: "Great! And where can I find a supermarket?", fr: "Super ! Et où est-ce que je trouve un supermarché ?", why: "der Supermarkt, object of finden: einen.", why_fr: "der Supermarkt, COD de finden : einen." },
      { p: "Gleich hier gegenüber. Brauchen Sie auch eine Fahrkarte für den Bus?", en: "Right opposite. Do you also need a bus ticket?", fr: "Juste en face. Vous avez aussi besoin d'un ticket de bus ?" },
      { y: ["Nein danke, ich brauche keine Fahrkarte. Ich gehe zu Fuß!", "Nein danke, ich brauche keinen Fahrkarte. Ich gehe zu Fuß!", "Nein danke, ich brauche nicht Fahrkarte. Ich gehe zu Fuß!"], en: "No thanks, I don't need a ticket. I'm walking!", fr: "Non merci, je n'ai pas besoin de ticket. J'y vais à pied !", why: "die Fahrkarte is feminine: keine.", why_fr: "die Fahrkarte est féminin : keine." }
    ] },
  { id: "wegfragen", lesson: 12, level: "A1", icon: "signpost", partner: "Franziska", role: "a passer-by", role_fr: "une passante",
    title: "Asking the way", title_fr: "Demander son chemin",
    setting: "You're in Leipzig and looking for the main station. You stop a woman in the street.", setting_fr: "Tu es à Leipzig et tu cherches la gare centrale. Tu arrêtes une femme dans la rue.",
    turns: [
      { p: "Ja, bitte?", en: "Yes?", fr: "Oui ?" },
      { y: ["Entschuldigung, wie komme ich zum Hauptbahnhof?", "Entschuldigung, wie komme ich zur Hauptbahnhof?", "Entschuldigung, wo komme ich zum Hauptbahnhof?"], en: "Excuse me, how do I get to the main station?", fr: "Excusez-moi, comment aller à la gare centrale ?", why: "der Hauptbahnhof is masculine: zum. How do I get = Wie komme ich.", why_fr: "der Hauptbahnhof est masculin : zum. Comment aller = Wie komme ich." },
      { p: "Zum Hauptbahnhof? Gehen Sie hier geradeaus bis zur Ampel, dann nach rechts.", en: "To the main station? Go straight on here to the traffic lights, then right.", fr: "À la gare centrale ? Allez tout droit jusqu'au feu, puis à droite." },
      { y: ["Bis zur Ampel und dann nach rechts. Ist das weit?", "Bis zum Ampel und dann nach rechts. Ist das weit?", "Bis zur Ampel und dann nach rechts. Ist es weiter?"], en: "To the lights and then right. Is it far?", fr: "Jusqu'au feu, puis à droite. C'est loin ?", why: "die Ampel is feminine: zur. Repeating the directions is a good way to check.", why_fr: "die Ampel est féminin : zur. Répéter les indications permet de vérifier." },
      { p: "Nein, etwa zehn Minuten zu Fuß. Oder nehmen Sie die Straßenbahn, Linie vier.", en: "No, about ten minutes on foot. Or take the tram, line four.", fr: "Non, environ dix minutes à pied. Ou prenez le tram, ligne quatre." },
      { y: ["Wo ist die Haltestelle, bitte?", "Wo gibt es die Haltestelle, bitte?", "Wo ist der Haltestelle, bitte?"], en: "Where is the stop, please?", fr: "Où est l'arrêt, s'il vous plaît ?", why: "To ask where a known place is: Wo ist…? die Haltestelle is feminine.", why_fr: "Pour demander où se trouve un lieu précis : Wo ist… ? die Haltestelle est féminin." },
      { p: "Gleich da vorne, gegenüber von der Apotheke.", en: "Just up ahead, opposite the pharmacy.", fr: "Juste là, devant, en face de la pharmacie." },
      { y: ["Vielen Dank! Schönen Tag noch!", "Viel Dank! Schönen Tag noch!", "Vielen Dank! Schöne Tag noch!"], en: "Thank you very much! Have a nice day!", fr: "Merci beaucoup ! Bonne journée !", why: "Fixed phrases: vielen Dank, schönen Tag noch.", why_fr: "Formules figées : vielen Dank, schönen Tag noch." }
    ] }
  );

  W.READINGS.push({
    id: "ampelmaennchen", level: "A1", icon: "landmark", title: "Das Ampelmännchen", genre: "Article",
    intro: "A little man with a hat on the traffic lights: the story of a symbol of Berlin. The accusative, es gibt and the town.",
    intro_fr: "Un petit bonhomme à chapeau sur les feux : l'histoire d'un symbole de Berlin. L'accusatif, es gibt et la ville.",
    paragraphs: [
      { de: "In Berlin gibt es viele Ampeln. Und auf vielen Ampeln sieht man einen kleinen Mann mit Hut: das Ampelmännchen. Grün heißt: Gehen Sie! Rot heißt: Bitte warten!", en: "In Berlin there are many traffic lights. And on many of them you can see a little man with a hat: the Ampelmännchen. Green means: go! Red means: please wait!", fr: "À Berlin, il y a beaucoup de feux. Et sur beaucoup d'entre eux, on voit un petit bonhomme à chapeau : l'Ampelmännchen. Vert veut dire : traversez ! Rouge veut dire : attendez, s'il vous plaît !" },
      { de: "Das Ampelmännchen kommt aus der DDR, dem früheren Ostdeutschland. Der Verkehrspsychologe Karl Peglau zeichnet es im Jahr 1961.", en: "The Ampelmännchen comes from the GDR, the former East Germany. The traffic psychologist Karl Peglau draws it in 1961.", fr: "L'Ampelmännchen vient de la RDA, l'ancienne Allemagne de l'Est. Le psychologue de la circulation Karl Peglau le dessine en 1961." },
      { de: "Nach der Wiedervereinigung möchte man die alten Ampeln im Osten ersetzen. Aber viele Menschen protestieren: Sie lieben das kleine Männchen! Ein Komitee kämpft für das Ampelmännchen, und es bleibt.", en: "After reunification, the old traffic lights in the east are to be replaced. But many people protest: they love the little man! A committee fights for the Ampelmännchen, and it stays.", fr: "Après la réunification, on veut remplacer les anciens feux de l'Est. Mais beaucoup de gens protestent : ils aiment le petit bonhomme ! Un comité se bat pour l'Ampelmännchen, et il reste." },
      { de: "Heute sieht man das Ampelmännchen in Berlin und in vielen Städten im Osten. Es gibt auch Geschäfte mit Tassen, Taschen und T-Shirts. Viele Touristen kaufen einen Ampelmann als Souvenir!", en: "Today you can see the Ampelmännchen in Berlin and in many towns in the east. There are also shops with mugs, bags and T-shirts. Many tourists buy an Ampelmann as a souvenir!", fr: "Aujourd'hui, on voit l'Ampelmännchen à Berlin et dans beaucoup de villes de l'Est. Il existe aussi des boutiques de tasses, de sacs et de t-shirts. Beaucoup de touristes achètent un Ampelmann en souvenir !" }
    ],
    glossary: { "Ampeln": ["traffic lights", "feux"], "Hut": ["hat", "chapeau"], "Grün": ["green", "vert"], "Rot": ["red", "rouge"], "DDR": ["GDR (East Germany)", "RDA (Allemagne de l'Est)"], "früheren": ["former", "ancien"], "Ostdeutschland": ["East Germany", "l'Allemagne de l'Est"], "Verkehrspsychologe": ["traffic psychologist", "psychologue de la circulation"], "zeichnet": ["draws", "dessine"], "Wiedervereinigung": ["reunification", "réunification"], "ersetzen": ["to replace", "remplacer"], "Menschen": ["people", "gens"], "protestieren": ["protest", "protestent"], "lieben": ["love", "aiment"], "Komitee": ["committee", "comité"], "kämpft": ["fights", "se bat"], "Osten": ["the east", "l'Est"], "Tassen": ["mugs, cups", "tasses"] },
    questions: [
      { q: "Was sieht man auf vielen Ampeln in Berlin?", o: ["Einen kleinen Mann mit Hut", "Eine Frau mit Fahrrad", "Einen Hund"], a: 0 },
      { q: "Woher kommt das Ampelmännchen?", o: ["Aus der DDR", "Aus Österreich", "Aus Westdeutschland"], a: 0 },
      { q: "Wann zeichnet Karl Peglau das Ampelmännchen?", o: ["1961", "1990", "2001"], a: 0 },
      { q: "Was machen viele Menschen nach der Wiedervereinigung?", o: ["Sie protestieren für das Ampelmännchen.", "Sie kaufen neue Ampeln.", "Sie fahren nach Westen."], a: 0 },
      { q: "Was kaufen viele Touristen?", o: ["Einen Ampelmann als Souvenir", "Eine Ampel", "Ein Fahrrad"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-a1-4", unit: "a1-4", level: "A1", icon: "bus",
    title: "Zum Hauptbahnhof", title_fr: "Vers la gare centrale",
    context: "Till is in Munich with a big suitcase. He asks Franziska how to get to the main station.", context_fr: "Till est à Munich avec une grosse valise. Il demande à Franziska comment aller à la gare centrale.",
    words: [["der Koffer", "the suitcase", "la valise"], ["die Linie", "the line (bus, tram)", "la ligne"], ["die Station", "the stop, the station", "la station"], ["schwer", "heavy", "lourd"], ["direkt", "directly, right", "directement"]],
    lines: [["Till", "Entschuldigung, wie komme ich zum Hauptbahnhof?", "de-DE"], ["Franziska", "Zum Hauptbahnhof? Zu Fuß sind das ungefähr zwanzig Minuten.", "de-DE"], ["Till", "Zwanzig Minuten? Oh, mein Koffer ist sehr schwer!", "de-DE"], ["Franziska", "Dann nehmen Sie die Straßenbahn. Die Haltestelle ist da vorne, an der Ampel.", "de-DE"], ["Till", "Welche Linie, bitte?", "de-DE"], ["Franziska", "Die Linie neunzehn. Fahren Sie drei Stationen und steigen Sie am Hauptbahnhof aus.", "de-DE"], ["Till", "Drei Stationen. Muss ich umsteigen?", "de-DE"], ["Franziska", "Nein, die Neunzehn fährt direkt. Und kaufen Sie die Fahrkarte am Automaten!", "de-DE"], ["Till", "Vielen Dank für Ihre Hilfe!", "de-DE"], ["Franziska", "Gern geschehen. Gute Reise!", "de-DE"]],
    gist: ["Was sucht Till?", ["Den Weg zum Hauptbahnhof", "Ein Hotel", "Eine Apotheke"]],
    detail: [["Wie lange geht man zu Fuß?", ["Ungefähr zwanzig Minuten", "Zehn Minuten", "Eine Stunde"]], ["Wo ist die Haltestelle?", ["An der Ampel", "Am Rathaus", "Neben der Bank"]], ["Welche Linie nimmt Till?", ["Die Linie neunzehn", "Die Linie neun", "Die Linie drei"]], ["Muss Till umsteigen?", ["Nein, die Linie fährt direkt.", "Ja, einmal.", "Ja, zweimal."]]],
    decode: ["Zu Fuß sind das ungefähr zwanzig Minuten.", "Fahren Sie drei Stationen"],
    tip: "Directions come in small blocks: where (an der Ampel), which (Linie neunzehn), how many (drei Stationen). Repeat each block to check it, as Till does: Drei Stationen?", tip_fr: "Les indications arrivent par petits blocs : où (an der Ampel), laquelle (Linie neunzehn), combien (drei Stationen). Répète chaque bloc pour vérifier, comme Till : Drei Stationen?"
  }]);

  W.PROMPTS.push({ id: "de-a1-4", level: "A1", q: "Beschreib deine Stadt oder dein Viertel: Was gibt es dort? Was gibt es nicht? Wie fährst du in die Stadt?", en: "Describe your town or your neighbourhood: what is there? What isn't there? How do you get into town?", fr: "Décris ta ville ou ton quartier : qu'est-ce qu'il y a ? Qu'est-ce qu'il n'y a pas ? Comment vas-tu en ville ?", time: 75,
    phrases: ["In meinem Viertel gibt es…", "Es gibt keinen / keine / kein…", "Ich fahre mit der U-Bahn / mit dem Bus…", "… ist gegenüber von…", "Ich finde … schön."],
    model: "Ich wohne in einem kleinen Viertel im Norden der Stadt. Hier gibt es einen Park, zwei Bäckereien und eine Bibliothek. Es gibt aber kein Kino und keinen großen Supermarkt. In die Stadt fahre ich mit der Straßenbahn: Die Haltestelle ist direkt gegenüber von meiner Wohnung. Ich finde mein Viertel ruhig und sehr schön." });

  W.WRITING_GUIDE["a1-4"] = { genre: "A message explaining the way", genre_fr: "Un message pour expliquer le chemin",
    plan: [["Say hello and thank them for coming.", "Salue et remercie pour la visite."], ["Which transport to take, and where to get off.", "Quel transport prendre, et où descendre."], ["The way on foot, step by step (imperative).", "Le chemin à pied, étape par étape (impératif)."], ["A landmark that helps (opposite, next to…).", "Un repère utile (en face de, à côté de…)."], ["What to do if they get lost, and goodbye.", "Que faire en cas de souci, et au revoir."]],
    marks: [["nimm am Bahnhof die U-Bahn", "imperative du: nehmen → nimm", "impératif du : nehmen → nimm"], ["steig am Rathaus aus", "separable verb: the prefix at the end", "verbe séparable : la particule à la fin"], ["Geh dann geradeaus bis zur Ampel", "zur + feminine place", "zur + lieu féminin"], ["gegenüber vom Park", "opposite", "en face de"], ["ruf mich an", "anrufen in the imperative", "anrufen à l'impératif"], ["Bis Samstag!", "see you on Saturday", "à samedi"]] };

  W.COURSE.push({ id: "a1-4", level: "A1", icon: "building-2", title: "In town", title_fr: "En ville",
    intro: "In this unit, you'll find your way around a German town: the accusative (den Bahnhof, einen Park) and es gibt, the imperative to give directions (Gehen Sie geradeaus!), and how to ask the way and take the underground, the tram or the bus.",
    intro_fr: "Dans cette unité, tu vas te repérer dans une ville allemande : l'accusatif (den Bahnhof, einen Park) et es gibt, l'impératif pour indiquer le chemin (Gehen Sie geradeaus!), et comment demander ta route et prendre le métro, le tram ou le bus.",
    can: ["Name places in town and say what there is", "Use the accusative: den, einen, keinen", "Give instructions with the imperative (Sie, du, ihr)", "Ask the way, understand directions and use public transport"],
    can_fr: ["Nommer les lieux de la ville et dire ce qu'il y a", "Utiliser l'accusatif : den, einen, keinen", "Donner des consignes à l'impératif (Sie, du, ihr)", "Demander ton chemin, comprendre les indications et prendre les transports"],
    lessons: [10, 11, 12], vocab: ["stadtDE", "wegDE", "akkusativDE"], reading: "ampelmaennchen", prompt: "de-a1-4",
    writing: { task: "Your friend Jan is visiting you on Saturday. Write him a message (30-50 words) explaining how to get from the station to your home.", task_fr: "Ton ami Jan vient te voir samedi. Écris-lui un message (30 à 50 mots) pour lui expliquer comment venir de la gare jusque chez toi.", words: "30-50",
      tips: ["Hallo Jan,", "Nimm…", "Steig am … aus.", "Geh geradeaus / nach links…", "Bis Samstag!"],
      checklist: ["I used the du imperative (nimm, geh, steig … aus)", "The prefixes of separable verbs are at the end", "I used zum / zur correctly", "I gave a landmark", "I stayed between 30 and 50 words"],
      checklist_fr: ["J'ai employé l'impératif avec du (nimm, geh, steig … aus)", "Les particules des verbes séparables sont à la fin", "J'ai bien employé zum / zur", "J'ai donné un repère", "J'ai écrit entre 30 et 50 mots"],
      model: "Hallo Jan,\n\nnimm am Bahnhof die U-Bahn, Linie zwei, und steig am Rathaus aus. Geh dann geradeaus bis zur Ampel und nach links. Mein Haus ist gegenüber vom Park, Nummer zwölf. Wenn du Probleme hast, ruf mich an!\n\nBis Samstag!\nCamille" } });
})();
