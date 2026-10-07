/* Cours d'allemand, unité A2-2 « Travel / Les voyages » : Wohin? + accusatif et Wo? + datif (prépositions à deux
   cas), nach / in / zu / an, legen et stellen ; le datif (mir, dir, ihm…, verbes et prépositions + datif) ; à la
   gare et à l'hôtel. Explications et traductions en anglais ET en français. Personnages fictifs.
   Faits vérifiables seulement : le Deutschlandticket (depuis mai 2023, abonnement mensuel valable dans les transports
   locaux et régionaux de toute l'Allemagne, pas dans les trains grandes lignes ICE, IC, EC) ; WLAN = Wi-Fi ;
   Gleis = voie / quai. Prix non cités (ils ont changé plusieurs fois). */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "reiseDE", icon: "luggage", title: "Travelling", title_fr: "Voyager", level: "A2", words: [
    ["reisen", "to travel", "voyager", "Ich reise gern mit dem Zug."],
    ["die Ferien (pl)", "the holidays (school, university)", "les vacances (scolaires)", "In den Ferien fahren wir nach Italien."],
    ["packen", "to pack", "faire (ses bagages)", "Hast du schon deinen Koffer gepackt?"],
    ["buchen", "to book", "réserver", "Wir haben einen Flug nach Wien gebucht."],
    ["der Flug, ¨-e", "the flight", "le vol", "Der Flug dauert zwei Stunden."],
    ["abfahren", "to leave, to depart", "partir (train, bus)", "Der Zug fährt um zehn Uhr ab."],
    ["die Abfahrt, -en", "the departure", "le départ", "Abfahrt ist um 9:15 Uhr."],
    ["die Ankunft", "the arrival", "l'arrivée", "Die Ankunft in Berlin ist um 14 Uhr."],
    ["das Gleis, -e", "the platform, the track", "la voie, le quai", "Der ICE fährt von Gleis fünf."],
    ["die Verspätung, -en", "the delay", "le retard", "Der Zug hat zehn Minuten Verspätung."],
    ["die Hinfahrt, -en", "the outward journey", "l'aller", "Die Hinfahrt war sehr lang."],
    ["die Rückfahrt, -en", "the return journey", "le retour", "Eine Fahrkarte mit Rückfahrt, bitte."],
    ["der Fahrplan, ¨-e", "the timetable", "l'horaire, les horaires", "Wo ist der Fahrplan?"],
    ["der Reisepass, ¨-e", "the passport", "le passeport", "Vergiss deinen Reisepass nicht!"],
    ["der Personalausweis, -e", "the identity card", "la carte d'identité", "In der EU reicht der Personalausweis."],
    ["das Ausland", "abroad, foreign countries", "l'étranger", "Wir fahren dieses Jahr ins Ausland."],
    ["die Sehenswürdigkeit, -en", "the sight, the landmark", "le lieu touristique, le monument", "Berlin hat viele Sehenswürdigkeiten."],
    ["der Strand, ¨-e", "the beach", "la plage", "Wir liegen den ganzen Tag am Strand."]
  ] },
  { id: "hotelDE", icon: "bed", title: "At the hotel", title_fr: "À l'hôtel", level: "A2", words: [
    ["die Unterkunft, ¨-e", "the accommodation", "l'hébergement, le logement", "Wir suchen eine günstige Unterkunft."],
    ["das Einzelzimmer, -", "the single room", "la chambre simple", "Ein Einzelzimmer für drei Nächte, bitte."],
    ["das Doppelzimmer, -", "the double room", "la chambre double", "Haben Sie noch ein Doppelzimmer frei?"],
    ["die Übernachtung, -en", "the night's stay", "la nuitée", "Die Übernachtung kostet achtzig Euro."],
    ["mit Frühstück", "with breakfast", "petit-déjeuner compris", "Ist das Zimmer mit Frühstück?"],
    ["reservieren", "to reserve, to book", "réserver", "Ich habe ein Zimmer reserviert."],
    ["die Jugendherberge, -n", "the youth hostel", "l'auberge de jeunesse", "Wir übernachten in einer Jugendherberge."],
    ["übernachten", "to stay the night", "passer la nuit, loger", "Wo übernachtet ihr in Wien?"],
    ["das WLAN", "Wi-Fi", "le wifi", "Wie ist das WLAN-Passwort?"],
    ["die Klimaanlage, -n", "the air conditioning", "la climatisation", "Die Klimaanlage funktioniert nicht."],
    ["sich beschweren", "to complain", "se plaindre", "Ich möchte mich beschweren."],
    ["kaputt", "broken", "cassé, en panne", "Die Dusche ist kaputt."],
    ["schmutzig", "dirty", "sale", "Das Handtuch ist schmutzig."],
    ["sauber", "clean", "propre", "Das Zimmer ist sehr sauber."],
    ["die Aussicht", "the view", "la vue", "Das Zimmer hat eine schöne Aussicht auf den See."],
    ["das Handtuch, ¨-er", "the towel", "la serviette (de toilette)", "Kann ich noch ein Handtuch bekommen?"],
    ["auschecken", "to check out", "libérer la chambre", "Bis wann müssen wir auschecken?"]
  ] },
  { id: "wohinDE", icon: "plane", title: "Where to?", title_fr: "Où aller ?", level: "A2", words: [
    ["nach Italien", "to Italy", "en Italie (direction)", "Im Sommer fahren wir nach Italien."],
    ["in die Schweiz", "to Switzerland", "en Suisse (direction)", "Wir fliegen in die Schweiz."],
    ["ans Meer", "to the seaside", "à la mer (direction)", "Im August fahren wir ans Meer."],
    ["an den See", "to the lake", "au lac (direction)", "Am Sonntag fahren wir an den See."],
    ["in die Berge", "to the mountains", "à la montagne (direction)", "Im Winter fahren wir in die Berge."],
    ["aufs Land", "to the countryside", "à la campagne (direction)", "Am Wochenende fahren wir aufs Land."],
    ["zu Freunden", "to friends' (place)", "chez des amis (direction)", "Ich fahre zu Freunden nach Köln."],
    ["nach Hause", "home (going home)", "à la maison (direction)", "Jetzt gehen wir nach Hause."],
    ["in die Stadt", "into town", "en ville (direction)", "Ich gehe kurz in die Stadt."],
    ["legen", "to put, to lay (flat)", "poser, mettre (à plat)", "Ich lege das Buch auf den Tisch."],
    ["stellen", "to put, to stand (upright)", "poser, mettre (debout)", "Stell die Flasche in den Kühlschrank!"],
    ["die Berge (pl)", "the mountains", "la montagne, les montagnes", "In den Bergen ist die Luft frisch."],
    ["der See, -n", "the lake", "le lac", "Der Bodensee ist sehr groß."],
    ["die Insel, -n", "the island", "l'île", "Wir machen Urlaub auf einer Insel."],
    ["die Küste, -n", "the coast", "la côte", "Die Küste ist im Sommer voll."]
  ] });

  W.LESSONS.push(
  {
    id: 25, level: "A2", icon: "navigation",
    title: "In die Stadt or in der Stadt? Wohin? and Wo?", title_fr: "In die Stadt ou in der Stadt ? Wohin ? et Wo ?",
    subtitle: "Movement towards a place takes the accusative, being in a place takes the dative.", subtitle_fr: "Le déplacement vers un lieu prend l'accusatif, la présence dans un lieu prend le datif.",
    body: `
<h2>Nine two-way prepositions</h2>
<p><s-de>in</s-de>, <s-de>an</s-de>, <s-de>auf</s-de>, <s-de>über</s-de>, <s-de>unter</s-de>, <s-de>vor</s-de>, <s-de>hinter</s-de>, <s-de>neben</s-de>, <s-de>zwischen</s-de> can take two cases. The question decides:</p>
<table>
<tr><th>Wohin? (where to?)</th><th>Wo? (where?)</th></tr>
<tr><td>accusative: movement</td><td>dative: position</td></tr>
<tr><td><s-de>Ich gehe in die Stadt.</s-de></td><td><s-de>Ich bin in der Stadt.</s-de></td></tr>
<tr><td><s-de>Ich lege das Buch auf den Tisch.</s-de></td><td><s-de>Das Buch liegt auf dem Tisch.</s-de></td></tr>
<tr><td><s-de>Wir fahren ans Meer.</s-de></td><td><s-de>Wir sind am Meer.</s-de></td></tr>
</table>
<p>Pairs of verbs help: movement with <s-de>legen</s-de> (to lay), <s-de>stellen</s-de> (to stand), <s-de>hängen</s-de> (to hang) + accusative; position with <s-de>liegen</s-de>, <s-de>stehen</s-de>, <s-de>hängen</s-de> + dative.</p>
<h2>Going to: nach, in, zu, an</h2>
<p><s-de>nach</s-de> + towns and most countries: <s-de>nach Berlin</s-de>, <s-de>nach Italien</s-de> · <s-de>in</s-de> + countries with an article: <s-de>in die Schweiz</s-de>, <s-de>in die USA</s-de> · <s-de>zu</s-de> + people and many places: <s-de>zu meiner Oma</s-de>, <s-de>zum Arzt</s-de> · <s-de>an</s-de> + water: <s-de>ans Meer</s-de>, <s-de>an den See</s-de> · <s-de>in</s-de> + mountains: <s-de>in die Berge</s-de> · home: <s-de>nach Hause</s-de> (but at home: <s-de>zu Hause</s-de>).</p>
<div class="tip">Short forms: <s-de>in das</s-de> → <s-de>ins</s-de> (<s-de>ins Kino</s-de>), <s-de>an das</s-de> → <s-de>ans</s-de> (<s-de>ans Meer</s-de>), <s-de>auf das</s-de> → <s-de>aufs</s-de> (<s-de>aufs Land</s-de>).</div>
`,
    body_fr: `
<h2>Neuf prépositions à deux cas</h2>
<p><s-de>in</s-de>, <s-de>an</s-de>, <s-de>auf</s-de>, <s-de>über</s-de>, <s-de>unter</s-de>, <s-de>vor</s-de>, <s-de>hinter</s-de>, <s-de>neben</s-de>, <s-de>zwischen</s-de> peuvent être suivies de deux cas. C'est la question qui décide :</p>
<table>
<tr><th>Wohin ? (où, vers où ?)</th><th>Wo ? (où ?)</th></tr>
<tr><td>accusatif : déplacement</td><td>datif : position</td></tr>
<tr><td><s-de>Ich gehe in die Stadt.</s-de></td><td><s-de>Ich bin in der Stadt.</s-de></td></tr>
<tr><td><s-de>Ich lege das Buch auf den Tisch.</s-de></td><td><s-de>Das Buch liegt auf dem Tisch.</s-de></td></tr>
<tr><td><s-de>Wir fahren ans Meer.</s-de></td><td><s-de>Wir sind am Meer.</s-de></td></tr>
</table>
<p>Le français dit « je vais en ville » et « je suis en ville » avec le même mot : l'allemand, lui, change l'article. Des paires de verbes aident : déplacement avec <s-de>legen</s-de> (poser à plat), <s-de>stellen</s-de> (poser debout), <s-de>hängen</s-de> (accrocher) + accusatif ; position avec <s-de>liegen</s-de>, <s-de>stehen</s-de>, <s-de>hängen</s-de> + datif.</p>
<h2>Aller à : nach, in, zu, an</h2>
<p><s-de>nach</s-de> + villes et la plupart des pays : <s-de>nach Berlin</s-de>, <s-de>nach Italien</s-de> · <s-de>in</s-de> + pays avec article : <s-de>in die Schweiz</s-de>, <s-de>in die USA</s-de> · <s-de>zu</s-de> + personnes et beaucoup de lieux : <s-de>zu meiner Oma</s-de> (chez ma mamie), <s-de>zum Arzt</s-de> (chez le médecin) · <s-de>an</s-de> + étendues d'eau : <s-de>ans Meer</s-de>, <s-de>an den See</s-de> · <s-de>in</s-de> + montagne : <s-de>in die Berge</s-de> · à la maison : <s-de>nach Hause</s-de> (mais être à la maison : <s-de>zu Hause</s-de>).</p>
<div class="tip">Contractions : <s-de>in das</s-de> → <s-de>ins</s-de> (<s-de>ins Kino</s-de>), <s-de>an das</s-de> → <s-de>ans</s-de> (<s-de>ans Meer</s-de>), <s-de>auf das</s-de> → <s-de>aufs</s-de> (<s-de>aufs Land</s-de>).</div>
`,
    examples: [
      ["Ich gehe heute Nachmittag in die Stadt.", "I'm going into town this afternoon.", "Cet après-midi, je vais en ville."],
      ["Ich wohne in der Stadt, nicht auf dem Land.", "I live in town, not in the countryside.", "J'habite en ville, pas à la campagne."],
      ["Leg den Pass bitte auf den Tisch.", "Put the passport on the table, please.", "Pose le passeport sur la table, s'il te plaît."],
      ["Der Pass liegt auf dem Tisch.", "The passport is on the table.", "Le passeport est sur la table."],
      ["Im August fahren wir ans Meer.", "In August we're going to the seaside.", "En août, nous allons à la mer."],
      ["Wir fliegen in die Schweiz, dann nach Österreich.", "We're flying to Switzerland, then to Austria.", "Nous prenons l'avion pour la Suisse, puis pour l'Autriche."],
      ["Morgen gehe ich zum Arzt.", "Tomorrow I'm going to the doctor's.", "Demain, je vais chez le médecin."]
    ],
    quiz: [
      { q: "“Ich gehe in ___ Kino.” (Wohin?)", q_fr: "« Ich gehe in ___ Kino. » (Wohin ?)", o: ["dem", "das", "der"], a: 1, ex: "Wohin? → accusative: in das Kino = ins Kino.", ex_fr: "Wohin ? → accusatif : in das Kino = ins Kino." },
      { q: "“Ich bin in ___ Kino.” (Wo?)", q_fr: "« Ich bin in ___ Kino. » (Wo ?)", o: ["dem", "das", "den"], a: 0, ex: "Wo? → dative: in dem Kino = im Kino.", ex_fr: "Wo ? → datif : in dem Kino = im Kino." },
      { q: "“We're going to Switzerland.”", q_fr: "« Nous allons en Suisse. »", o: ["Wir fahren nach Schweiz.", "Wir fahren in die Schweiz.", "Wir fahren zu der Schweiz."], a: 1, ex: "A country with an article: in die Schweiz.", ex_fr: "Un pays avec article : in die Schweiz." },
      { q: "“Ich ___ das Buch auf den Tisch.” (movement)", q_fr: "« Ich ___ das Buch auf den Tisch. » (déplacement)", o: ["liege", "lege", "stehe"], a: 1, ex: "Movement: legen + accusative.", ex_fr: "Déplacement : legen + accusatif." },
      { q: "“To the seaside”:", q_fr: "« À la mer » (direction) :", o: ["ans Meer", "im Meer", "nach Meer"], a: 0, ex: "Water: an → ans Meer.", ex_fr: "L'eau : an → ans Meer." }
    ]
  },
  {
    id: 26, level: "A2", icon: "gift",
    title: "Gib mir das Ticket! The dative", title_fr: "Gib mir das Ticket ! Le datif",
    subtitle: "To whom? Dative pronouns, verbs and prepositions that always take the dative.", subtitle_fr: "À qui ? Les pronoms au datif, et les verbes et prépositions toujours suivis du datif.",
    body: `
<h2>The indirect object</h2>
<p>With verbs such as <s-de>geben</s-de> (give), <s-de>zeigen</s-de> (show), <s-de>schenken</s-de> (give as a present), <s-de>schreiben</s-de>, the person who receives is in the dative: <s-de>Ich gebe dem Mann den Pass.</s-de> (I give the man the passport.) <s-de>Ich schenke meiner Mutter Blumen.</s-de></p>
<h2>Dative pronouns</h2>
<table>
<tr><th>Nominative</th><th>Dative</th></tr>
<tr><td><s-de>ich, du</s-de></td><td><s-de>mir, dir</s-de></td></tr>
<tr><td><s-de>er, sie, es</s-de></td><td><s-de>ihm, ihr, ihm</s-de></td></tr>
<tr><td><s-de>wir, ihr</s-de></td><td><s-de>uns, euch</s-de></td></tr>
<tr><td><s-de>sie, Sie</s-de></td><td><s-de>ihnen, Ihnen</s-de></td></tr>
</table>
<h2>Verbs that take the dative</h2>
<p><s-de>helfen</s-de> (help): <s-de>Kannst du mir helfen?</s-de> · <s-de>danken</s-de> (thank) · <s-de>gefallen</s-de> (please): <s-de>Das Hotel gefällt mir.</s-de> (I like the hotel: literally, the hotel pleases me) · <s-de>gehören</s-de> (belong): <s-de>Gehört der Koffer Ihnen?</s-de> · <s-de>schmecken</s-de> (taste good): <s-de>Schmeckt es dir?</s-de> · <s-de>passen</s-de> (suit, fit) · <s-de>wehtun</s-de> (hurt): <s-de>Mir tut der Kopf weh.</s-de></p>
<h2>Prepositions that always take the dative</h2>
<p><s-de>aus</s-de>, <s-de>bei</s-de>, <s-de>mit</s-de>, <s-de>nach</s-de>, <s-de>seit</s-de>, <s-de>von</s-de>, <s-de>zu</s-de>: <s-de>mit dem Zug</s-de> · <s-de>bei meinen Eltern</s-de> · <s-de>seit einem Jahr</s-de> · <s-de>nach dem Frühstück</s-de> · <s-de>vom Bahnhof</s-de>.</p>
<div class="tip">Many English speakers find "Das gefällt mir" upside down: the thing liked is the subject. Think of it as "that pleases me". And remember: with the dative plural, the noun takes an extra -n: <s-de>mit den Kindern</s-de>.</div>
`,
    body_fr: `
<h2>Le complément d'attribution</h2>
<p>Avec des verbes comme <s-de>geben</s-de> (donner), <s-de>zeigen</s-de> (montrer), <s-de>schenken</s-de> (offrir), <s-de>schreiben</s-de>, la personne qui reçoit est au datif, comme le « à » français : <s-de>Ich gebe dem Mann den Pass.</s-de> (Je donne le passeport à l'homme.) <s-de>Ich schenke meiner Mutter Blumen.</s-de> (J'offre des fleurs à ma mère.)</p>
<h2>Les pronoms au datif</h2>
<table>
<tr><th>Nominatif</th><th>Datif</th></tr>
<tr><td><s-de>ich, du</s-de></td><td><s-de>mir, dir</s-de></td></tr>
<tr><td><s-de>er, sie, es</s-de></td><td><s-de>ihm, ihr, ihm</s-de></td></tr>
<tr><td><s-de>wir, ihr</s-de></td><td><s-de>uns, euch</s-de></td></tr>
<tr><td><s-de>sie, Sie</s-de></td><td><s-de>ihnen, Ihnen</s-de></td></tr>
</table>
<p>Ce sont l'équivalent de « me, te, lui, nous, vous, leur ».</p>
<h2>Les verbes suivis du datif</h2>
<p><s-de>helfen</s-de> (aider) : <s-de>Kannst du mir helfen?</s-de> Attention, « aider quelqu'un » est un COD en français, mais un datif en allemand ! · <s-de>danken</s-de> (remercier) : même piège · <s-de>gefallen</s-de> (plaire) : <s-de>Das Hotel gefällt mir.</s-de> (L'hôtel me plaît.) · <s-de>gehören</s-de> (appartenir) : <s-de>Gehört der Koffer Ihnen?</s-de> · <s-de>schmecken</s-de> (être bon) : <s-de>Schmeckt es dir?</s-de> · <s-de>passen</s-de> (aller, convenir) · <s-de>wehtun</s-de> (faire mal) : <s-de>Mir tut der Kopf weh.</s-de> (J'ai mal à la tête.)</p>
<h2>Les prépositions toujours suivies du datif</h2>
<p><s-de>aus</s-de>, <s-de>bei</s-de>, <s-de>mit</s-de>, <s-de>nach</s-de>, <s-de>seit</s-de>, <s-de>von</s-de>, <s-de>zu</s-de> : <s-de>mit dem Zug</s-de> · <s-de>bei meinen Eltern</s-de> · <s-de>seit einem Jahr</s-de> · <s-de>nach dem Frühstück</s-de> · <s-de>vom Bahnhof</s-de>.</p>
<div class="tip">Les deux pièges des francophones : <s-de>helfen</s-de> et <s-de>danken</s-de> prennent le datif (<s-de>Ich helfe dir</s-de>, pas « dich »). Et au datif pluriel, le nom prend un -n de plus : <s-de>mit den Kindern</s-de>.</div>
`,
    examples: [
      ["Kannst du mir bitte helfen?", "Can you help me, please?", "Tu peux m'aider, s'il te plaît ?"],
      ["Das Hotel gefällt uns sehr.", "We really like the hotel.", "L'hôtel nous plaît beaucoup."],
      ["Gehört der Koffer Ihnen?", "Is this suitcase yours?", "Cette valise est à vous ?"],
      ["Ich gebe dem Mann meinen Pass.", "I give the man my passport.", "Je donne mon passeport à l'homme."],
      ["Wir fahren mit dem Zug zu meinen Eltern.", "We're going to my parents' by train.", "Nous allons chez mes parents en train."],
      ["Ich danke Ihnen für Ihre Hilfe.", "Thank you for your help.", "Je vous remercie de votre aide."],
      ["Mir tut der Rücken weh.", "My back hurts.", "J'ai mal au dos."]
    ],
    quiz: [
      { q: "“Can you help me?”", q_fr: "« Tu peux m'aider ? »", o: ["Kannst du mich helfen?", "Kannst du mir helfen?", "Kannst du ich helfen?"], a: 1, ex: "helfen takes the dative: mir.", ex_fr: "helfen prend le datif : mir." },
      { q: "“I like the room.”", q_fr: "« La chambre me plaît. »", o: ["Das Zimmer gefällt mir.", "Ich gefalle das Zimmer.", "Das Zimmer gefällt mich."], a: 0, ex: "The thing is the subject; the person is in the dative.", ex_fr: "La chose est le sujet ; la personne est au datif." },
      { q: "“Mit ___ Zug” (der Zug):", q_fr: "« Mit ___ Zug » (der Zug) :", o: ["den", "dem", "der"], a: 1, ex: "mit + dative: dem Zug.", ex_fr: "mit + datif : dem Zug." },
      { q: "“I'm giving her the key.”", q_fr: "« Je lui donne la clé. » (à elle)", o: ["Ich gebe sie den Schlüssel.", "Ich gebe ihr den Schlüssel.", "Ich gebe ihm den Schlüssel."], a: 1, ex: "sie → ihr in the dative.", ex_fr: "sie → ihr au datif." },
      { q: "“With the children”:", q_fr: "« Avec les enfants » :", o: ["mit die Kinder", "mit den Kindern", "mit den Kinder"], a: 1, ex: "Dative plural: den + noun + -n.", ex_fr: "Datif pluriel : den + nom + -n." }
    ]
  },
  {
    id: 27, level: "A2", kind: "functional", icon: "train-front",
    title: "Everyday German: at the station and at the hotel", title_fr: "L'allemand de tous les jours : à la gare et à l'hôtel",
    subtitle: "Buy a ticket, understand announcements and delays, book a room and complain politely.", subtitle_fr: "Acheter un billet, comprendre les annonces et les retards, réserver une chambre et te plaindre poliment.",
    body: `
<h2>At the station</h2>
<p><s-de>Eine Fahrkarte nach Heidelberg, bitte.</s-de> · <s-de>Einfach oder hin und zurück?</s-de> (Single or return?) · <s-de>Wann fährt der nächste Zug nach…?</s-de> · <s-de>Von welchem Gleis?</s-de> · <s-de>Muss ich umsteigen?</s-de></p>
<p>Announcements: <s-de>Der ICE nach München hat heute etwa zwanzig Minuten Verspätung.</s-de> · <s-de>Bitte beachten Sie die Gleisänderung.</s-de> (Please note the change of platform.) · <s-de>Der Zug fällt heute aus.</s-de> (The train is cancelled today.)</p>
<p>Since 2023, the <s-de>Deutschlandticket</s-de>, a monthly subscription, has let people use all local and regional transport across Germany: buses, trams, underground and regional trains, but not the fast long-distance trains (ICE, IC, EC).</p>
<h2>At the hotel</h2>
<p><s-de>Ich habe ein Doppelzimmer reserviert, auf den Namen Laurent.</s-de> · <s-de>Ist das Frühstück inklusive?</s-de> · <s-de>Wie ist das WLAN-Passwort?</s-de> · <s-de>Bis wann muss ich auschecken?</s-de></p>
<h2>Complaining politely</h2>
<p><s-de>Entschuldigung, die Heizung funktioniert nicht.</s-de> · <s-de>In meinem Zimmer gibt es kein warmes Wasser.</s-de> · <s-de>Das Zimmer ist leider sehr laut.</s-de> · <s-de>Könnten Sie bitte jemanden schicken?</s-de> (Could you send someone?) · <s-de>Kann ich ein anderes Zimmer bekommen?</s-de></p>
<div class="tip">Könnten Sie…? (Could you…?) is the polite form of können: it softens every request. You'll learn it fully in a later unit; for now, use it as a block.</div>
`,
    body_fr: `
<h2>À la gare</h2>
<p><s-de>Eine Fahrkarte nach Heidelberg, bitte.</s-de> · <s-de>Einfach oder hin und zurück?</s-de> (Aller simple ou aller-retour ?) · <s-de>Wann fährt der nächste Zug nach…?</s-de> · <s-de>Von welchem Gleis?</s-de> (De quelle voie ?) · <s-de>Muss ich umsteigen?</s-de></p>
<p>Annonces : <s-de>Der ICE nach München hat heute etwa zwanzig Minuten Verspätung.</s-de> · <s-de>Bitte beachten Sie die Gleisänderung.</s-de> (Attention, changement de voie.) · <s-de>Der Zug fällt heute aus.</s-de> (Le train est supprimé aujourd'hui.)</p>
<p>Depuis 2023, le <s-de>Deutschlandticket</s-de>, un abonnement mensuel, permet d'emprunter tous les transports locaux et régionaux d'Allemagne : bus, trams, métros et trains régionaux, mais pas les trains rapides grandes lignes (ICE, IC, EC).</p>
<h2>À l'hôtel</h2>
<p><s-de>Ich habe ein Doppelzimmer reserviert, auf den Namen Laurent.</s-de> (au nom de Laurent) · <s-de>Ist das Frühstück inklusive?</s-de> · <s-de>Wie ist das WLAN-Passwort?</s-de> · <s-de>Bis wann muss ich auschecken?</s-de> (Avant quelle heure dois-je libérer la chambre ?)</p>
<h2>Se plaindre poliment</h2>
<p><s-de>Entschuldigung, die Heizung funktioniert nicht.</s-de> · <s-de>In meinem Zimmer gibt es kein warmes Wasser.</s-de> · <s-de>Das Zimmer ist leider sehr laut.</s-de> · <s-de>Könnten Sie bitte jemanden schicken?</s-de> (Pourriez-vous envoyer quelqu'un ?) · <s-de>Kann ich ein anderes Zimmer bekommen?</s-de></p>
<div class="tip">Könnten Sie… ? (Pourriez-vous… ?) est la forme polie de können : elle adoucit toutes les demandes, comme le conditionnel français. Tu l'étudieras en détail plus tard ; pour l'instant, emploie-la en bloc.</div>
`,
    examples: [
      ["Eine Fahrkarte nach Heidelberg, bitte. Hin und zurück.", "A ticket to Heidelberg, please. Return.", "Un billet pour Heidelberg, s'il vous plaît. Aller-retour."],
      ["Von welchem Gleis fährt der Zug?", "Which platform does the train leave from?", "De quelle voie part le train ?"],
      ["Der Zug hat zwanzig Minuten Verspätung.", "The train is twenty minutes late.", "Le train a vingt minutes de retard."],
      ["Ich habe ein Zimmer auf den Namen Weber reserviert.", "I've booked a room in the name of Weber.", "J'ai réservé une chambre au nom de Weber."],
      ["Ist das Frühstück inklusive?", "Is breakfast included?", "Le petit-déjeuner est-il compris ?"],
      ["Entschuldigung, die Dusche funktioniert nicht.", "Excuse me, the shower isn't working.", "Excusez-moi, la douche ne marche pas."],
      ["Könnten Sie bitte jemanden schicken?", "Could you send someone, please?", "Pourriez-vous envoyer quelqu'un, s'il vous plaît ?"]
    ],
    quiz: [
      { q: "“Hin und zurück” means:", q_fr: "« Hin und zurück » veut dire :", o: ["return (there and back)", "single", "first class"], o_fr: ["aller-retour", "aller simple", "première classe"], a: 0, ex: "einfach = single; hin und zurück = return.", ex_fr: "einfach = aller simple ; hin und zurück = aller-retour." },
      { q: "“Der Zug fällt aus” means:", q_fr: "« Der Zug fällt aus » veut dire :", o: ["The train is cancelled.", "The train is late.", "The train is full."], o_fr: ["Le train est supprimé.", "Le train est en retard.", "Le train est plein."], a: 0, ex: "ausfallen = to be cancelled.", ex_fr: "ausfallen = être supprimé." },
      { q: "The Deutschlandticket is valid on:", q_fr: "Le Deutschlandticket est valable dans :", o: ["local and regional transport", "all trains, ICE included", "planes"], o_fr: ["les transports locaux et régionaux", "tous les trains, ICE compris", "les avions"], a: 0, ex: "Not on long-distance trains (ICE, IC, EC).", ex_fr: "Pas dans les trains grandes lignes (ICE, IC, EC)." },
      { q: "A polite complaint:", q_fr: "Une réclamation polie :", o: ["Die Heizung ist kaputt, machen Sie das!", "Entschuldigung, die Heizung funktioniert nicht.", "Heizung kaputt!"], a: 1, ex: "Entschuldigung + the problem, then a polite request.", ex_fr: "Entschuldigung + le problème, puis une demande polie." },
      { q: "“Is breakfast included?”", q_fr: "« Le petit-déjeuner est compris ? »", o: ["Ist das Frühstück inklusive?", "Ist das Frühstück zusammen?", "Gibt es das Frühstück mit?"], a: 0, ex: "inklusive = included.", ex_fr: "inklusive = compris." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    25: {
      gap: [["Ich gehe in ___ Stadt. (Wohin?)", "die"], ["Ich bin in ___ Stadt. (Wo?)", "der"], ["Im Sommer fahren wir ___ Meer.", "ans", "to the", "à la (mer)"], ["Wir fahren ___ Italien.", "nach", "to", "en, à"]],
      fix: [["Ich lege das Buch auf dem Tisch.", "Ich lege das Buch auf den Tisch.", "legen = movement: accusative, den Tisch.", "legen = déplacement : accusatif, den Tisch."], ["Wir fahren nach die Schweiz.", "Wir fahren in die Schweiz.", "A country with an article: in die Schweiz.", "Un pays avec article : in die Schweiz."]],
      task: ["Plan four holidays: where you go (Wohin?) and what you do there (Wo?).", "Prévois quatre voyages : où tu vas (Wohin ?) et ce que tu fais sur place (Wo ?).", "Im Sommer fahre ich ans Meer. Am Meer liege ich am Strand. Im Winter fahre ich in die Berge. In den Bergen wandere ich jeden Tag."]
    },
    26: {
      gap: [["Kannst du ___ helfen?", "mir", "me", "me, moi"], ["Das Hotel gefällt ___.", "uns", "us", "nous"], ["Wir fahren mit ___ Zug.", "dem", "the", "le"], ["Gehört der Koffer ___?", "Ihnen", "you, formal", "vous (forme de politesse)"]],
      fix: [["Kannst du mich helfen?", "Kannst du mir helfen?", "helfen takes the dative: mir.", "helfen prend le datif : mir."], ["Ich gefalle das Hotel.", "Das Hotel gefällt mir.", "The thing liked is the subject: das Hotel gefällt mir.", "Ce qui plaît est le sujet : das Hotel gefällt mir."]],
      task: ["Write four sentences about a trip, each with a dative (mir, dir, ihm, mit dem, bei…).", "Écris quatre phrases sur un voyage, chacune avec un datif (mir, dir, ihm, mit dem, bei…).", "Wir sind mit dem Zug nach Wien gefahren. Die Stadt hat mir sehr gefallen. Wir haben bei einer Freundin gewohnt, und ich habe ihr Blumen geschenkt. Sie hat uns viele Sehenswürdigkeiten gezeigt."]
    },
    27: {
      gap: [["Einfach oder hin und ___?", "zurück", "back", "retour"], ["Von welchem ___ fährt der Zug?", "Gleis", "platform", "voie"], ["Der Zug hat zehn Minuten ___.", "Verspätung", "delay", "retard"], ["___ Sie bitte jemanden schicken?", "Könnten", "could", "pourriez (poli)"]],
      fix: [["Ich habe ein Zimmer auf dem Namen Laurent reserviert.", "Ich habe ein Zimmer auf den Namen Laurent reserviert.", "A fixed phrase: auf den Namen…", "Une formule figée : auf den Namen…"], ["Die Heizung ist nicht funktioniert.", "Die Heizung funktioniert nicht.", "funktionieren is a normal verb: es funktioniert nicht.", "funktionieren est un verbe normal : es funktioniert nicht."]],
      task: ["At the hotel reception: say you've booked a room, ask about breakfast and the Wi-Fi, and report a problem (four sentences).", "À la réception de l'hôtel : dis que tu as réservé une chambre, pose une question sur le petit-déjeuner et le wifi, et signale un problème (quatre phrases).", "Guten Abend, ich habe ein Einzelzimmer auf den Namen Laurent reserviert. Ist das Frühstück inklusive? Wie ist das WLAN-Passwort, bitte? Ach, und leider funktioniert die Dusche in meinem Zimmer nicht."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "urlaubsplanung", lesson: 25, level: "A2", icon: "plane", partner: "Wolfgang", role: "a friend", role_fr: "un ami",
    title: "Planning a holiday", title_fr: "Préparer les vacances",
    setting: "You and your friend Wolfgang want to go on holiday together in July. Where to?", setting_fr: "Ton ami Wolfgang et toi voulez partir ensemble en juillet. Mais où ?",
    turns: [
      { p: "Also, wohin fahren wir im Juli? Ans Meer oder in die Berge?", en: "So, where are we going in July? To the seaside or to the mountains?", fr: "Alors, on va où en juillet ? À la mer ou à la montagne ?" },
      { y: ["Ich möchte lieber in die Berge fahren. Am Meer ist es im Juli zu voll.", "Ich möchte lieber in den Bergen fahren. Am Meer ist es im Juli zu voll.", "Ich möchte lieber in die Berge fahren. Ans Meer ist es im Juli zu voll."], en: "I'd rather go to the mountains. The seaside is too crowded in July.", fr: "Je préférerais aller à la montagne. À la mer, il y a trop de monde en juillet.", why: "Wohin? → in die Berge (accusative); Wo? → am Meer (dative).", why_fr: "Wohin ? → in die Berge (accusatif) ; Wo ? → am Meer (datif)." },
      { p: "Okay. In die Alpen? Nach Österreich oder in die Schweiz?", en: "OK. To the Alps? To Austria or to Switzerland?", fr: "D'accord. Dans les Alpes ? En Autriche ou en Suisse ?" },
      { y: ["Nach Österreich! Ich habe dort eine Freundin, wir können bei ihr übernachten.", "Nach Österreich! Ich habe dort eine Freundin, wir können bei sie übernachten.", "In Österreich! Ich habe dort eine Freundin, wir können bei ihr übernachten."], en: "To Austria! I have a friend there, we can stay at her place.", fr: "En Autriche ! J'y ai une amie, on peut loger chez elle.", why: "nach + country without article; bei + dative: bei ihr.", why_fr: "nach + pays sans article ; bei + datif : bei ihr." },
      { p: "Super Idee! Fahren wir mit dem Auto oder mit dem Zug?", en: "Great idea! Shall we go by car or by train?", fr: "Super idée ! On y va en voiture ou en train ?" },
      { y: ["Mit dem Zug, das ist entspannter. Ich kann dir die Verbindungen schicken.", "Mit den Zug, das ist entspannter. Ich kann dir die Verbindungen schicken.", "Mit dem Zug, das ist entspannter. Ich kann dich die Verbindungen schicken."], en: "By train, it's more relaxing. I can send you the connections.", fr: "En train, c'est plus reposant. Je peux t'envoyer les correspondances.", why: "mit + dative: dem Zug; schicken + dative person: dir.", why_fr: "mit + datif : dem Zug ; schicken + personne au datif : dir." },
      { p: "Perfekt. Und was nehmen wir mit?", en: "Perfect. And what shall we take?", fr: "Parfait. Et qu'est-ce qu'on emporte ?" },
      { y: ["Wanderschuhe, eine Regenjacke… und vergiss deinen Pass nicht!", "Wanderschuhe, eine Regenjacke… und vergiss dein Pass nicht!", "Wanderschuhe, eine Regenjacke… und vergisst deinen Pass nicht!"], en: "Hiking boots, a rain jacket… and don't forget your passport!", fr: "Des chaussures de randonnée, une veste de pluie… et n'oublie pas ton passeport !", why: "der Pass, object: deinen Pass; du imperative of vergessen: vergiss.", why_fr: "der Pass, COD : deinen Pass ; impératif de vergessen avec du : vergiss." }
    ] },
  { id: "hotelreklamation", lesson: 27, level: "A2", icon: "bed", partner: "Herr Seidel", role: "a hotel receptionist", role_fr: "le réceptionniste de l'hôtel",
    title: "A problem at the hotel", title_fr: "Un problème à l'hôtel",
    setting: "You're staying in a hotel in Dresden. It's 10 pm, and there's a problem in your room. You go down to reception.", setting_fr: "Tu loges dans un hôtel à Dresde. Il est 22 h, et il y a un problème dans ta chambre. Tu descends à la réception.",
    turns: [
      { p: "Guten Abend! Was kann ich für Sie tun?", en: "Good evening! What can I do for you?", fr: "Bonsoir ! Que puis-je faire pour vous ?" },
      { y: ["Guten Abend. Entschuldigung, in meinem Zimmer funktioniert die Heizung nicht.", "Guten Abend. Entschuldigung, in mein Zimmer funktioniert die Heizung nicht.", "Guten Abend. Entschuldigung, in meinem Zimmer die Heizung funktioniert nicht."], en: "Good evening. Excuse me, the heating isn't working in my room.", fr: "Bonsoir. Excusez-moi, le chauffage ne marche pas dans ma chambre.", why: "Wo? + dative: in meinem Zimmer; then the verb comes second.", why_fr: "Wo ? + datif : in meinem Zimmer ; puis le verbe en deuxième position." },
      { p: "Oh, das tut mir leid. Welche Zimmernummer haben Sie?", en: "Oh, I'm sorry. What's your room number?", fr: "Oh, je suis désolé. Quel est votre numéro de chambre ?" },
      { y: ["Zimmer zweihundertvierzehn. Mir ist sehr kalt.", "Zimmer zweihundertvierzehn. Ich bin sehr kalt.", "Zimmer zweihundertvierzehn. Ich habe sehr kalt."], en: "Room 214. I'm very cold.", fr: "Chambre deux cent quatorze. J'ai très froid.", why: "Feeling cold: mir ist kalt (dative). Ich bin kalt means you are a cold person!", why_fr: "Avoir froid : mir ist kalt (datif). « Ich bin kalt » voudrait dire que tu es une personne froide ! Et « ich habe kalt » n'existe pas." },
      { p: "Der Techniker ist leider schon nach Hause gegangen. Ich kann Ihnen aber ein anderes Zimmer geben.", en: "Unfortunately the technician has already gone home. But I can give you another room.", fr: "Le technicien est malheureusement déjà rentré chez lui. Mais je peux vous donner une autre chambre." },
      { y: ["Das ist sehr nett. Hat das Zimmer auch eine Dusche?", "Das ist sehr nett. Hat das Zimmer auch ein Dusche?", "Das ist sehr nett. Das Zimmer hat auch eine Dusche?"], en: "That's very kind. Does the room have a shower too?", fr: "C'est très gentil. La chambre a aussi une douche ?", why: "die Dusche → eine Dusche; a written yes or no question starts with the verb.", why_fr: "die Dusche → eine Dusche ; une question fermée écrite commence par le verbe." },
      { p: "Natürlich, und eine schöne Aussicht auf die Elbe. Hier ist Ihr neuer Schlüssel.", en: "Of course, and a beautiful view of the Elbe. Here's your new key.", fr: "Bien sûr, et une belle vue sur l'Elbe. Voici votre nouvelle clé." },
      { y: ["Vielen Dank! Das gefällt mir sehr. Gute Nacht!", "Vielen Dank! Das gefällt mich sehr. Gute Nacht!", "Vielen Dank! Ich gefalle das sehr. Gute Nacht!"], en: "Thank you very much! I really like that. Good night!", fr: "Merci beaucoup ! Ça me plaît beaucoup. Bonne nuit !", why: "gefallen + dative: das gefällt mir.", why_fr: "gefallen + datif : das gefällt mir." }
    ] }
  );

  W.READINGS.push({
    id: "deutschlandticket", level: "A2", icon: "train-front", title: "Mit dem Regionalzug durch Deutschland", genre: "Travel story",
    intro: "Leonie travels from Hamburg to Lake Constance with the Deutschlandticket, only on regional trains. Wohin? and Wo?, the dative, travel vocabulary.",
    intro_fr: "Leonie traverse l'Allemagne de Hambourg au lac de Constance avec le Deutschlandticket, seulement en trains régionaux. Wohin ? et Wo ?, le datif, le vocabulaire du voyage.",
    paragraphs: [
      { de: "Seit 2023 gibt es in Deutschland das Deutschlandticket. Mit diesem Abo kann man jeden Monat alle Busse, Straßenbahnen und Regionalzüge im ganzen Land benutzen. Nur die schnellen Fernzüge wie der ICE sind nicht dabei.", en: "Since 2023, Germany has had the Deutschlandticket. With this subscription you can use all buses, trams and regional trains in the whole country every month. Only the fast long-distance trains like the ICE aren't included.", fr: "Depuis 2023, il existe en Allemagne le Deutschlandticket. Avec cet abonnement, on peut utiliser chaque mois tous les bus, trams et trains régionaux du pays. Seuls les trains rapides grandes lignes comme l'ICE n'en font pas partie." },
      { de: "Leonie wohnt in Hamburg. Im Sommer wollte sie an den Bodensee fahren, ganz im Süden. Auch mit dem ICE ist die Reise lang. Leonie hatte aber Zeit, deshalb hat sie nur Regionalzüge genommen.", en: "Leonie lives in Hamburg. In the summer she wanted to go to Lake Constance, right in the south. Even by ICE it's a long journey. But Leonie had time, so she only took regional trains.", fr: "Leonie habite à Hambourg. Cet été, elle voulait aller au lac de Constance, tout au sud. Même en ICE, le voyage est long. Mais Leonie avait du temps, c'est pourquoi elle n'a pris que des trains régionaux." },
      { de: "„Ich musste sechsmal umsteigen, und ich war fast den ganzen Tag im Zug“, erzählt sie. „Aber das hat mir gefallen! Ich habe viel gelesen, ich habe mit anderen Reisenden gesprochen, und in Würzburg habe ich in der Pause einen Kaffee am Main getrunken.“", en: "“I had to change six times, and I was on the train almost all day,” she says. “But I liked it! I read a lot, I talked to other travellers, and in Würzburg I had a coffee by the River Main during the break.”", fr: "« J'ai dû changer six fois, et j'ai passé presque toute la journée dans le train », raconte-t-elle. « Mais ça m'a plu ! J'ai beaucoup lu, j'ai parlé avec d'autres voyageurs, et à Wurtzbourg, pendant la pause, j'ai bu un café au bord du Main. »" },
      { de: "Am Abend ist sie in Lindau angekommen, direkt am See. „Die Aussicht auf die Berge war wunderschön. Nächstes Mal fahre ich bestimmt wieder mit dem Regionalzug, aber vielleicht mit einer Übernachtung in der Mitte!“", en: "In the evening she arrived in Lindau, right on the lake. “The view of the mountains was beautiful. Next time I'll definitely go by regional train again, but maybe with a night's stay halfway!”", fr: "Le soir, elle est arrivée à Lindau, juste au bord du lac. « La vue sur les montagnes était magnifique. La prochaine fois, je reprendrai sûrement le train régional, mais peut-être avec une nuit à mi-chemin ! »" }
    ],
    glossary: { "Abo": ["subscription", "abonnement"], "benutzen": ["to use", "utiliser"], "Fernzüge": ["long-distance trains", "trains grandes lignes"], "dabei": ["included", "compris, inclus"], "Bodensee": ["Lake Constance", "le lac de Constance"], "Süden": ["the south", "le sud"], "Regionalzüge": ["regional trains", "trains régionaux"], "sechsmal": ["six times", "six fois"], "fast": ["almost", "presque"], "Reisenden": ["travellers", "voyageurs"], "Main": ["the River Main", "le Main"], "angekommen": ["arrived", "arrivée"], "bestimmt": ["definitely", "sûrement"], "Mitte": ["middle", "milieu"] },
    questions: [
      { q: "Was kann man mit dem Deutschlandticket benutzen?", o: ["Busse, Straßenbahnen und Regionalzüge", "Alle Züge, auch den ICE", "Nur die U-Bahn in Berlin"], a: 0 },
      { q: "Wohin wollte Leonie fahren?", o: ["An den Bodensee", "Ans Meer", "In die Schweiz"], a: 0 },
      { q: "Warum hat sie nur Regionalzüge genommen?", o: ["Weil sie Zeit hatte", "Weil der ICE kaputt war", "Weil sie kein Geld hatte"], a: 0 },
      { q: "Wie oft musste sie umsteigen?", o: ["Sechsmal", "Zweimal", "Keinmal"], a: 0 },
      { q: "Wo ist Leonie am Abend angekommen?", o: ["In Lindau, am See", "In Würzburg", "In Hamburg"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-a2-2", unit: "a2-2", level: "A2", icon: "ticket",
    title: "Am Fahrkartenschalter", title_fr: "Au guichet de la gare",
    context: "At Frankfurt station, Marlene buys a ticket to Heidelberg from Herr Kaiser at the ticket office.", context_fr: "À la gare de Francfort, Marlene achète un billet pour Heidelberg à Herr Kaiser, au guichet.",
    words: [["der Schalter", "the counter, the ticket office", "le guichet"], ["die Verbindung", "the connection", "la correspondance, la liaison"], ["direkt", "direct", "direct"], ["die BahnCard", "the railcard (discount card)", "la carte de réduction"], ["erreichen", "to catch, to reach", "attraper, atteindre"]],
    lines: [["Herr Kaiser", "Guten Tag! Wohin möchten Sie fahren?", "de-DE"], ["Marlene", "Guten Tag. Nach Heidelberg, bitte. Heute noch.", "de-DE"], ["Herr Kaiser", "Einfach oder hin und zurück?", "de-DE"], ["Marlene", "Hin und zurück. Ich komme am Sonntag zurück.", "de-DE"], ["Herr Kaiser", "Der nächste Zug fährt um 14:12 Uhr von Gleis sieben. Sie müssen in Mannheim umsteigen.", "de-DE"], ["Marlene", "Gibt es keine direkte Verbindung?", "de-DE"], ["Herr Kaiser", "Doch, um 15:05 Uhr, aber der Zug ist langsamer. Sie kommen dann erst um 16:20 Uhr an.", "de-DE"], ["Marlene", "Dann nehme ich lieber den Zug um 14:12 Uhr.", "de-DE"], ["Herr Kaiser", "Gut. Haben Sie eine BahnCard?", "de-DE"], ["Marlene", "Nein, leider nicht.", "de-DE"], ["Herr Kaiser", "Dann macht das zusammen achtunddreißig Euro.", "de-DE"], ["Marlene", "Hier, bitte. Von welchem Gleis noch mal?", "de-DE"], ["Herr Kaiser", "Gleis sieben. Achtung: Heute hat der Zug ein paar Minuten Verspätung. Gute Reise!", "de-DE"]],
    gist: ["Was macht Marlene am Schalter?", ["Sie kauft eine Fahrkarte nach Heidelberg.", "Sie reserviert ein Hotel.", "Sie fragt nach dem Bus zum Flughafen."]],
    detail: [["Was für eine Fahrkarte kauft sie?", ["Hin und zurück", "Einfach", "Eine Monatskarte"]], ["Wo muss sie umsteigen?", ["In Mannheim", "In Heidelberg", "In Frankfurt"]], ["Warum nimmt sie nicht den direkten Zug?", ["Er ist langsamer.", "Er ist teurer.", "Er fällt aus."]], ["Von welchem Gleis fährt ihr Zug?", ["Gleis sieben", "Gleis elf", "Gleis siebzehn"]]],
    decode: ["Sie müssen in Mannheim umsteigen.", "Heute hat der Zug ein paar Minuten Verspätung."],
    tip: "At the station, three numbers matter: the time (vierzehn Uhr zwölf), the platform (Gleis sieben) and the delay (ein paar Minuten Verspätung). Note them down as you hear them, and ask again if needed: Von welchem Gleis noch mal?", tip_fr: "À la gare, trois nombres comptent : l'heure (vierzehn Uhr zwölf), la voie (Gleis sieben) et le retard (ein paar Minuten Verspätung). Note-les dès que tu les entends, et redemande si besoin : Von welchem Gleis noch mal?"
  }]);

  W.PROMPTS.push({ id: "de-a2-2", level: "A2", q: "Erzähl von einer Reise: Wohin bist du gefahren, wie, mit wem? Wo hast du übernachtet? Was hat dir gefallen?", en: "Tell us about a trip: where did you go, how, with whom? Where did you stay? What did you like?", fr: "Raconte un voyage : où, comment, avec qui ? Où as-tu logé ? Qu'est-ce qui t'a plu ?", time: 90,
    phrases: ["Ich bin nach / in die / ans … gefahren.", "Wir sind mit dem Zug / mit dem Auto…", "Wir haben in einem Hotel / bei Freunden übernachtet.", "Am besten hat mir … gefallen.", "Leider…"],
    model: "Letzten Sommer bin ich mit zwei Freundinnen nach Wien gefahren, mit dem Nachtzug. Wir haben in einer kleinen Pension im Zentrum übernachtet. Die Stadt hat mir sehr gefallen: die Museen, die Kaffeehäuser und die Musik. Am besten hat mir das Schloss Schönbrunn gefallen. Leider war es sehr heiß, deshalb sind wir auch an die Donau gefahren und haben gebadet." });

  W.WRITING_GUIDE["a2-2"] = { genre: "A holiday email to a friend", genre_fr: "Un e-mail de vacances à un ami",
    plan: [["Greet your friend and say where you are.", "Salue ton ami et dis où tu es."], ["How you travelled (mit dem…).", "Comment tu as voyagé (mit dem…)."], ["Where you're staying and what it's like.", "Où tu loges et comment c'est."], ["What you've done and what you like (gefällt mir).", "Ce que tu as fait et ce qui te plaît (gefällt mir)."], ["When you're coming back, and goodbye.", "Quand tu rentres, et au revoir."]],
    marks: [["Grüße aus Salzburg!", "a typical holiday greeting", "une salutation typique de vacances"], ["mit dem Zug", "mit + dative", "mit + datif"], ["in einer kleinen Pension", "Wo? + dative", "Wo ? + datif"], ["Die Stadt gefällt mir sehr", "gefallen + dative", "gefallen + datif"], ["in die Berge", "Wohin? + accusative", "Wohin ? + accusatif"], ["Am Samstag fahre ich nach Hause.", "nach Hause: going home", "nach Hause : rentrer à la maison"]] };

  W.COURSE.push({ id: "a2-2", level: "A2", icon: "luggage", title: "Travel", title_fr: "Les voyages",
    intro: "In this unit, you'll travel in German: Wohin? with the accusative and Wo? with the dative (in die Stadt / in der Stadt), how to say where you're going (nach, in, zu, an), the dative with pronouns, verbs and prepositions, and everything you need at the station and at the hotel.",
    intro_fr: "Dans cette unité, tu vas voyager en allemand : Wohin ? avec l'accusatif et Wo ? avec le datif (in die Stadt / in der Stadt), comment dire où tu vas (nach, in, zu, an), le datif avec les pronoms, les verbes et les prépositions, et tout ce qu'il faut à la gare et à l'hôtel.",
    can: ["Say where you're going and where you are (Wohin? / Wo?)", "Use the dative: mir, dir, ihm…, helfen, gefallen, mit, bei", "Buy a train ticket and understand announcements", "Book a hotel room and complain politely"],
    can_fr: ["Dire où tu vas et où tu es (Wohin ? / Wo ?)", "Employer le datif : mir, dir, ihm…, helfen, gefallen, mit, bei", "Acheter un billet de train et comprendre les annonces", "Réserver une chambre d'hôtel et te plaindre poliment"],
    lessons: [25, 26, 27], vocab: ["reiseDE", "hotelDE", "wohinDE"], reading: "deutschlandticket", prompt: "de-a2-2",
    writing: { task: "You're on holiday. Write an email to your friend Henrik (40-60 words): where you are, how you travelled, where you're staying, what you like and when you're coming back.", task_fr: "Tu es en vacances. Écris un e-mail à ton ami Henrik (40 à 60 mots) : où tu es, comment tu as voyagé, où tu loges, ce qui te plaît et quand tu rentres.", words: "40-60",
      tips: ["Lieber Henrik,", "Grüße aus…!", "Ich bin mit dem … gefahren.", "… gefällt mir sehr.", "Bis bald!"],
      checklist: ["I used Wohin? + accusative and Wo? + dative correctly", "I used mit + dative for my transport", "I used gefallen + dative", "I said when I'm coming back", "I stayed between 40 and 60 words"],
      checklist_fr: ["J'ai bien employé Wohin ? + accusatif et Wo ? + datif", "J'ai employé mit + datif pour le transport", "J'ai employé gefallen + datif", "J'ai dit quand je rentre", "J'ai écrit entre 40 et 60 mots"],
      model: "Lieber Henrik,\n\nGrüße aus Salzburg! Ich bin am Montag mit dem Zug gekommen. Wir wohnen in einer kleinen Pension im Zentrum. Die Stadt gefällt mir sehr: Die Altstadt ist wunderschön, und das Essen ist lecker. Morgen fahren wir in die Berge und wandern. Am Samstag fahre ich nach Hause.\n\nBis bald!\nCamille" } });
})();
