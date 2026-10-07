/* Cours d'allemand, unité A1-6 « Home / Chez moi » : la question Wo? et le datif après les prépositions de lieu
   (auf dem Tisch, in der Küche), les verbes de modalité (können, müssen, wollen, dürfen), chercher un logement et
   une colocation (WG). Explications et traductions en anglais ET en français. Personnages fictifs.
   Faits vérifiables seulement : la caution (Kaution) limitée à trois loyers hors charges et payable en trois fois
   (§ 551 BGB) ; Kaltmiete, Warmmiete, Nebenkosten ; WG et « WG-Casting » ; le Putzplan. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "wohnungDE", icon: "house", title: "The home", title_fr: "Le logement", level: "A1", words: [
    ["das Wohnzimmer, -", "the living room", "le salon, la salle de séjour", "Das Wohnzimmer ist hell und groß."],
    ["das Schlafzimmer, -", "the bedroom", "la chambre", "Mein Schlafzimmer ist klein."],
    ["die Küche, -n", "the kitchen", "la cuisine", "Wir essen in der Küche."],
    ["das Bad, ¨-er", "the bathroom", "la salle de bains", "Das Bad hat eine Dusche."],
    ["die Toilette, -n", "the toilet", "les toilettes", "Die Toilette ist links."],
    ["der Flur, -e", "the hall, the corridor", "le couloir, l'entrée", "Die Schuhe stehen im Flur."],
    ["der Balkon, -e", "the balcony", "le balcon", "Im Sommer frühstücken wir auf dem Balkon."],
    ["die Miete, -n", "the rent", "le loyer", "Die Miete ist zu hoch."],
    ["mieten", "to rent", "louer (comme locataire)", "Wir mieten eine Wohnung in Köln."],
    ["umziehen", "to move (house)", "déménager", "Im Mai ziehe ich um."],
    ["die WG, -s", "the flat share (Wohngemeinschaft)", "la colocation (Wohngemeinschaft)", "Ich wohne in einer WG."],
    ["der Mitbewohner, - / die Mitbewohnerin, -nen", "the flatmate (m) / the flatmate (f)", "le colocataire / la colocataire", "Meine Mitbewohnerin heißt Ronja."],
    ["hell", "bright, light", "clair, lumineux", "Die Küche ist sehr hell."],
    ["dunkel", "dark", "sombre", "Der Flur ist ein bisschen dunkel."],
    ["gemütlich", "cosy", "confortable, douillet, agréable", "Unser Wohnzimmer ist gemütlich."],
    ["praktisch", "practical", "pratique", "Die Küche ist klein, aber praktisch."],
    ["der Vermieter, - / die Vermieterin, -nen", "the landlord / the landlady", "le propriétaire / la propriétaire (qui loue)", "Der Vermieter wohnt im Erdgeschoss."],
    ["die Heizung, -en", "the heating", "le chauffage", "Die Heizung funktioniert nicht."]
  ] },
  { id: "moebelDE", icon: "sofa", title: "Furniture and things at home", title_fr: "Les meubles et les objets", level: "A1", words: [
    ["das Bett, -en", "the bed", "le lit", "Das Bett ist sehr bequem."],
    ["der Schrank, ¨-e", "the cupboard, the wardrobe", "l'armoire, le placard", "Die Gläser sind im Schrank."],
    ["das Sofa, -s", "the sofa", "le canapé", "Die Katze schläft auf dem Sofa."],
    ["der Sessel, -", "the armchair", "le fauteuil", "Mein Opa sitzt im Sessel."],
    ["das Regal, -e", "the shelf, the bookcase", "l'étagère", "Die Bücher stehen im Regal."],
    ["der Teppich, -e", "the rug, the carpet", "le tapis", "Der Teppich ist rot."],
    ["der Kühlschrank, ¨-e", "the fridge", "le réfrigérateur, le frigo", "Die Milch ist im Kühlschrank."],
    ["der Herd, -e", "the cooker, the stove", "la cuisinière", "Die Suppe steht auf dem Herd."],
    ["die Waschmaschine, -n", "the washing machine", "la machine à laver", "Die Waschmaschine ist im Bad."],
    ["der Spiegel, -", "the mirror", "le miroir", "Der Spiegel hängt im Flur."],
    ["das Bild, -er", "the picture", "le tableau, l'image", "Das Bild hängt über dem Sofa."],
    ["der Fernseher, -", "the TV set", "la télévision (l'appareil)", "Der Fernseher ist neu."],
    ["die Pflanze, -n", "the plant", "la plante", "Am Fenster stehen viele Pflanzen."],
    ["die Wand, ¨-e", "the wall", "le mur", "An der Wand hängt ein Bild."],
    ["der Boden, ¨", "the floor", "le sol, le plancher", "Die Tasche liegt auf dem Boden."],
    ["bequem", "comfortable", "confortable", "Der Sessel ist sehr bequem."],
    ["stehen", "to stand; to be (upright)", "être debout ; être posé (debout)", "Die Flasche steht auf dem Tisch."],
    ["liegen", "to lie; to be (lying flat)", "être couché ; être posé (à plat)", "Das Buch liegt auf dem Bett."],
    ["hängen", "to hang", "être accroché, pendre", "Die Lampe hängt über dem Tisch."]
  ] },
  { id: "woDE", icon: "map-pin", title: "Where is it?", title_fr: "Où est-ce ?", level: "A1", words: [
    ["auf dem Tisch", "on the table", "sur la table", "Der Schlüssel liegt auf dem Tisch."],
    ["unter dem Bett", "under the bed", "sous le lit", "Die Katze ist unter dem Bett."],
    ["neben dem Sofa", "next to the sofa", "à côté du canapé", "Die Lampe steht neben dem Sofa."],
    ["hinter der Tür", "behind the door", "derrière la porte", "Die Jacke hängt hinter der Tür."],
    ["vor dem Haus", "in front of the house", "devant la maison", "Das Fahrrad steht vor dem Haus."],
    ["über dem Bett", "above the bed", "au-dessus du lit", "Über dem Bett hängt ein Bild."],
    ["an der Wand", "on the wall", "au mur", "An der Wand hängt ein Spiegel."],
    ["im Schrank", "in the cupboard", "dans le placard", "Die Teller sind im Schrank."],
    ["in der Küche", "in the kitchen", "dans la cuisine", "Der Kaffee ist in der Küche."],
    ["zwischen den Fenstern", "between the windows", "entre les fenêtres", "Zwischen den Fenstern steht ein Regal."],
    ["oben", "upstairs, at the top", "en haut", "Das Bad ist oben."],
    ["unten", "downstairs, at the bottom", "en bas", "Die Küche ist unten."],
    ["drinnen", "inside, indoors", "dedans, à l'intérieur", "Heute bleiben wir drinnen."],
    ["draußen", "outside, outdoors", "dehors", "Die Kinder spielen draußen."],
    ["überall", "everywhere", "partout", "Überall liegen Bücher!"],
    ["Wo ist…?", "where is…?", "où est… ?", "Wo ist mein Handy?"]
  ] });

  W.LESSONS.push(
  {
    id: 16, level: "A1", icon: "map-pin",
    title: "Auf dem Tisch: where? and the dative", title_fr: "Auf dem Tisch : où ? et le datif",
    subtitle: "Say where things are: after in, auf, unter, neben… the article changes again.", subtitle_fr: "Dire où sont les choses : après in, auf, unter, neben… l'article change encore.",
    body: `
<h2>Prepositions of place</h2>
<p><s-de>in</s-de> (in) · <s-de>auf</s-de> (on, on top of) · <s-de>an</s-de> (on, at: against a vertical surface, at the edge) · <s-de>unter</s-de> (under) · <s-de>über</s-de> (above) · <s-de>neben</s-de> (next to) · <s-de>vor</s-de> (in front of) · <s-de>hinter</s-de> (behind) · <s-de>zwischen</s-de> (between)</p>
<h2>Wo? + dative</h2>
<p>When you answer the question <s-de>Wo?</s-de> (where?), these prepositions take the <b>dative</b>, a third form of the article:</p>
<table>
<tr><th></th><th>the</th><th>a</th></tr>
<tr><td>masculine</td><td><s-de>dem Tisch</s-de></td><td><s-de>einem Tisch</s-de></td></tr>
<tr><td>feminine</td><td><s-de>der Tür</s-de></td><td><s-de>einer Tür</s-de></td></tr>
<tr><td>neuter</td><td><s-de>dem Bett</s-de></td><td><s-de>einem Bett</s-de></td></tr>
<tr><td>plural</td><td><s-de>den Fenstern</s-de></td><td>—</td></tr>
</table>
<p>Note: feminine <s-de>die</s-de> becomes <s-de>der</s-de>, and the plural noun takes an extra <b>-n</b>: <s-de>zwischen den Fenstern</s-de>. Short forms: <s-de>in dem</s-de> → <s-de>im</s-de>, <s-de>an dem</s-de> → <s-de>am</s-de>.</p>
<h2>Stehen, liegen, hängen</h2>
<p>German rarely says "is" for things: it says how they are. Upright: <s-de>Die Flasche steht auf dem Tisch.</s-de> Lying flat: <s-de>Das Buch liegt auf dem Bett.</s-de> Hanging: <s-de>Das Bild hängt an der Wand.</s-de> In everyday speech, <s-de>ist</s-de> is also fine: <s-de>Der Schlüssel ist auf dem Tisch.</s-de></p>
<div class="tip">You've already used the dative without knowing it: <s-de>im Café</s-de>, <s-de>in der Nacht</s-de>, <s-de>mit dem Bus</s-de>, <s-de>zum Bahnhof</s-de>. Learn the place expressions as blocks, with their article: <s-de>auf dem Tisch</s-de>, <s-de>in der Küche</s-de>.</div>
`,
    body_fr: `
<h2>Les prépositions de lieu</h2>
<p><s-de>in</s-de> (dans) · <s-de>auf</s-de> (sur, posé dessus) · <s-de>an</s-de> (contre, à : sur une surface verticale, au bord) · <s-de>unter</s-de> (sous) · <s-de>über</s-de> (au-dessus de) · <s-de>neben</s-de> (à côté de) · <s-de>vor</s-de> (devant) · <s-de>hinter</s-de> (derrière) · <s-de>zwischen</s-de> (entre)</p>
<h2>Wo ? + datif</h2>
<p>Quand on répond à la question <s-de>Wo?</s-de> (où ?), ces prépositions sont suivies du <b>datif</b>, une troisième forme de l'article :</p>
<table>
<tr><th></th><th>le, la</th><th>un, une</th></tr>
<tr><td>masculin</td><td><s-de>dem Tisch</s-de></td><td><s-de>einem Tisch</s-de></td></tr>
<tr><td>féminin</td><td><s-de>der Tür</s-de></td><td><s-de>einer Tür</s-de></td></tr>
<tr><td>neutre</td><td><s-de>dem Bett</s-de></td><td><s-de>einem Bett</s-de></td></tr>
<tr><td>pluriel</td><td><s-de>den Fenstern</s-de></td><td>—</td></tr>
</table>
<p>Attention : le féminin <s-de>die</s-de> devient <s-de>der</s-de>, et le nom au pluriel prend un <b>-n</b> de plus : <s-de>zwischen den Fenstern</s-de>. Contractions : <s-de>in dem</s-de> → <s-de>im</s-de>, <s-de>an dem</s-de> → <s-de>am</s-de>, comme « à le » devient « au ».</p>
<h2>Stehen, liegen, hängen</h2>
<p>Pour les objets, l'allemand dit rarement « est » : il précise la position. Debout : <s-de>Die Flasche steht auf dem Tisch.</s-de> (La bouteille est sur la table.) À plat : <s-de>Das Buch liegt auf dem Bett.</s-de> Accroché : <s-de>Das Bild hängt an der Wand.</s-de> À l'oral, <s-de>ist</s-de> passe aussi : <s-de>Der Schlüssel ist auf dem Tisch.</s-de></p>
<div class="tip">Tu as déjà employé le datif sans le savoir : <s-de>im Café</s-de>, <s-de>in der Nacht</s-de>, <s-de>mit dem Bus</s-de>, <s-de>zum Bahnhof</s-de>. Apprends les expressions de lieu en bloc, avec leur article : <s-de>auf dem Tisch</s-de>, <s-de>in der Küche</s-de>.</div>
`,
    examples: [
      ["Wo ist mein Handy? — Auf dem Tisch.", "Where's my phone? — On the table.", "Où est mon portable ? — Sur la table."],
      ["Die Katze schläft unter dem Bett.", "The cat sleeps under the bed.", "Le chat dort sous le lit."],
      ["Die Milch steht im Kühlschrank.", "The milk is in the fridge.", "Le lait est dans le frigo."],
      ["Das Bild hängt an der Wand, über dem Sofa.", "The picture hangs on the wall, above the sofa.", "Le tableau est accroché au mur, au-dessus du canapé."],
      ["Die Tasche liegt neben der Tür.", "The bag is next to the door.", "Le sac est à côté de la porte."],
      ["Zwischen den Fenstern steht ein Regal.", "There's a bookcase between the windows.", "Entre les fenêtres, il y a une étagère."],
      ["Mein Fahrrad steht vor dem Haus.", "My bike is in front of the house.", "Mon vélo est devant la maison."]
    ],
    quiz: [
      { q: "Complete: “Das Buch liegt auf ___ Tisch.”", q_fr: "Complète : « Das Buch liegt auf ___ Tisch. »", o: ["der", "dem", "den"], a: 1, ex: "Wo? + dative: der Tisch → dem Tisch.", ex_fr: "Wo ? + datif : der Tisch → dem Tisch." },
      { q: "Complete: “Die Jacke hängt hinter ___ Tür.”", q_fr: "Complète : « Die Jacke hängt hinter ___ Tür. »", o: ["die", "der", "dem"], a: 1, ex: "Feminine dative: die → der.", ex_fr: "Datif féminin : die → der." },
      { q: "“In the kitchen”:", q_fr: "« Dans la cuisine » :", o: ["in die Küche", "in der Küche", "im Küche"], a: 1, ex: "die Küche, dative: in der Küche.", ex_fr: "die Küche, au datif : in der Küche." },
      { q: "A bottle on a table, upright: “Die Flasche ___ auf dem Tisch.”", q_fr: "Une bouteille debout sur la table : « Die Flasche ___ auf dem Tisch. »", o: ["liegt", "steht", "hängt"], a: 1, ex: "Upright: stehen. Lying flat: liegen.", ex_fr: "Debout : stehen. À plat : liegen." },
      { q: "“Between the windows”:", q_fr: "« Entre les fenêtres » :", o: ["zwischen die Fenster", "zwischen den Fenstern", "zwischen dem Fenster"], a: 1, ex: "Plural dative: den + noun + -n.", ex_fr: "Datif pluriel : den + nom + -n." }
    ]
  },
  {
    id: 17, level: "A1", icon: "key-round",
    title: "Ich kann, ich muss: the modal verbs", title_fr: "Ich kann, ich muss : les verbes de modalité",
    subtitle: "Can, must, want, may: say what's possible, necessary or allowed, and send the other verb to the end.", subtitle_fr: "Pouvoir, devoir, vouloir, avoir le droit : dire ce qui est possible, nécessaire ou permis, et envoyer l'autre verbe à la fin.",
    body: `
<h2>Four useful modal verbs</h2>
<p><b>können</b> (can): <s-de>ich kann</s-de>, <s-de>du kannst</s-de>, <s-de>er kann</s-de>, <s-de>wir können</s-de></p>
<p><b>müssen</b> (must): <s-de>ich muss</s-de>, <s-de>du musst</s-de>, <s-de>er muss</s-de>, <s-de>wir müssen</s-de></p>
<p><b>wollen</b> (to want to): <s-de>ich will</s-de>, <s-de>du willst</s-de>, <s-de>er will</s-de>, <s-de>wir wollen</s-de></p>
<p><b>dürfen</b> (may): <s-de>ich darf</s-de>, <s-de>du darfst</s-de>, <s-de>er darf</s-de>, <s-de>wir dürfen</s-de></p>
<p>No ending with <s-de>ich</s-de> and <s-de>er / sie / es</s-de>, and a different vowel in the singular. <s-de>können</s-de> = can, to be able to · <s-de>müssen</s-de> = must, to have to · <s-de>wollen</s-de> = to want to · <s-de>dürfen</s-de> = may, to be allowed to.</p>
<h2>The other verb goes to the end</h2>
<p>The modal verb takes second place, and the main verb goes to the end, in the infinitive: <s-de>Ich muss heute die Wohnung putzen.</s-de> · <s-de>Kannst du mir helfen?</s-de> · <s-de>Hier darf man nicht rauchen.</s-de></p>
<h2>Two traps for English speakers</h2>
<p><b>1.</b> <s-de>Ich will</s-de> means "I want to", not "I will": <s-de>Ich will umziehen.</s-de> = I want to move. <b>2.</b> <s-de>du musst nicht</s-de> means "you don't have to", not "you mustn't". "You mustn't" is <s-de>du darfst nicht</s-de>: <s-de>Du musst nicht kommen</s-de> (no need to come) / <s-de>Du darfst nicht kommen</s-de> (you're not allowed to come).</p>
<div class="tip">Ask permission politely: <s-de>Darf ich hier parken?</s-de> · <s-de>Kann ich das Fenster aufmachen?</s-de> And with the impersonal <s-de>man</s-de> (one, you, people): <s-de>Hier darf man nicht parken.</s-de></div>
`,
    body_fr: `
<h2>Quatre verbes de modalité utiles</h2>
<p><b>können</b> (pouvoir): <s-de>ich kann</s-de>, <s-de>du kannst</s-de>, <s-de>er kann</s-de>, <s-de>wir können</s-de></p>
<p><b>müssen</b> (devoir): <s-de>ich muss</s-de>, <s-de>du musst</s-de>, <s-de>er muss</s-de>, <s-de>wir müssen</s-de></p>
<p><b>wollen</b> (vouloir): <s-de>ich will</s-de>, <s-de>du willst</s-de>, <s-de>er will</s-de>, <s-de>wir wollen</s-de></p>
<p><b>dürfen</b> (avoir le droit): <s-de>ich darf</s-de>, <s-de>du darfst</s-de>, <s-de>er darf</s-de>, <s-de>wir dürfen</s-de></p>
<p>Pas de terminaison avec <s-de>ich</s-de> et <s-de>er / sie / es</s-de>, et une autre voyelle au singulier. <s-de>können</s-de> = pouvoir, savoir faire · <s-de>müssen</s-de> = devoir, être obligé de · <s-de>wollen</s-de> = vouloir · <s-de>dürfen</s-de> = avoir le droit de, pouvoir (permission).</p>
<h2>L'autre verbe part à la fin</h2>
<p>Le verbe de modalité prend la deuxième place, et le verbe principal part à la fin, à l'infinitif : <s-de>Ich muss heute die Wohnung putzen.</s-de> (Je dois faire le ménage aujourd'hui.) · <s-de>Kannst du mir helfen?</s-de> · <s-de>Hier darf man nicht rauchen.</s-de></p>
<h2>Deux pièges pour les francophones</h2>
<p><b>1.</b> Le français « pouvoir » a deux traductions : <s-de>können</s-de> (être capable, avoir la possibilité) et <s-de>dürfen</s-de> (avoir la permission). « Je peux entrer ? » = <s-de>Darf ich reinkommen?</s-de> <b>2.</b> <s-de>du musst nicht</s-de> veut dire « tu n'es pas obligé », pas « tu ne dois pas ». « Tu ne dois pas » (interdiction) = <s-de>du darfst nicht</s-de> : <s-de>Du musst nicht kommen</s-de> (inutile de venir) / <s-de>Du darfst nicht kommen</s-de> (tu n'as pas le droit de venir).</p>
<div class="tip">Pour demander la permission poliment : <s-de>Darf ich hier parken?</s-de> · <s-de>Kann ich das Fenster aufmachen?</s-de> Et avec le pronom <s-de>man</s-de> (on) : <s-de>Hier darf man nicht parken.</s-de> (On n'a pas le droit de se garer ici.)</div>
`,
    examples: [
      ["Ich muss heute die Wohnung putzen.", "I have to clean the flat today.", "Je dois faire le ménage aujourd'hui."],
      ["Kannst du mir beim Umzug helfen?", "Can you help me with the move?", "Tu peux m'aider pour le déménagement ?"],
      ["Hier darf man nicht rauchen.", "You're not allowed to smoke here.", "On n'a pas le droit de fumer ici."],
      ["Wir wollen eine größere Wohnung mieten.", "We want to rent a bigger flat.", "Nous voulons louer un appartement plus grand."],
      ["Du musst nicht kommen, ich schaffe das allein.", "You don't have to come, I can manage on my own.", "Pas besoin de venir, je peux le faire sans aide."],
      ["Darf ich das Fenster aufmachen?", "May I open the window?", "Je peux ouvrir la fenêtre ?"],
      ["Sie kann sehr gut kochen.", "She can cook very well.", "Elle sait très bien cuisiner."]
    ],
    quiz: [
      { q: "Complete: “Er ___ heute arbeiten.” (müssen)", q_fr: "Complète : « Er ___ heute arbeiten. » (müssen)", o: ["müsst", "muss", "musst"], a: 1, ex: "er muss: no ending, no umlaut in the singular.", ex_fr: "er muss : pas de terminaison, pas d'Umlaut au singulier." },
      { q: "Which sentence is correct?", q_fr: "Quelle phrase est correcte ?", o: ["Ich kann spielen Gitarre.", "Ich kann Gitarre spielen.", "Ich spielen kann Gitarre."], a: 1, ex: "The modal second, the infinitive at the end.", ex_fr: "Le verbe de modalité en deuxième position, l'infinitif à la fin." },
      { q: "“Ich will umziehen” means:", q_fr: "« Ich will umziehen » veut dire :", o: ["I want to move.", "I will move.", "I must move."], o_fr: ["Je veux déménager.", "Je vais déménager.", "Je dois déménager."], a: 0, ex: "wollen = to want to.", ex_fr: "wollen = vouloir." },
      { q: "“You mustn't park here” (it's forbidden):", q_fr: "« Tu ne dois pas te garer ici » (c'est interdit) :", o: ["Du musst hier nicht parken.", "Du darfst hier nicht parken.", "Du kannst hier nicht parken."], a: 1, ex: "Not allowed: nicht dürfen. Nicht müssen = no need.", ex_fr: "Interdit : nicht dürfen. Nicht müssen = pas besoin." },
      { q: "Asking permission: “May I come in?”", q_fr: "Demander la permission : « Je peux entrer ? »", o: ["Darf ich reinkommen?", "Muss ich reinkommen?", "Will ich reinkommen?"], a: 0, ex: "Permission: dürfen.", ex_fr: "La permission : dürfen." }
    ]
  },
  {
    id: 18, level: "A1", kind: "functional", icon: "key",
    title: "Everyday German: looking for a flat (or a room in a WG)", title_fr: "L'allemand de tous les jours : chercher un appartement (ou une chambre en WG)",
    subtitle: "Read a flat ad, ask the right questions on the phone, and survive a WG interview.", subtitle_fr: "Lire une annonce, poser les bonnes questions au téléphone, et réussir un entretien de colocation.",
    body: `
<h2>Reading an ad</h2>
<table>
<tr><th>Ad</th><th>Meaning</th></tr>
<tr><td><s-de>3-Zi.-Whg.</s-de></td><td>3-room flat (<s-de>Zimmer</s-de>, <s-de>Wohnung</s-de>): bedrooms and living room, not counting kitchen and bathroom</td></tr>
<tr><td><s-de>65 m²</s-de></td><td><s-de>fünfundsechzig Quadratmeter</s-de></td></tr>
<tr><td><s-de>EBK</s-de></td><td>fitted kitchen (<s-de>Einbauküche</s-de>)</td></tr>
<tr><td><s-de>KM 700 €</s-de></td><td>"cold rent" (<s-de>Kaltmiete</s-de>): rent without charges</td></tr>
<tr><td><s-de>NK 150 €</s-de></td><td>charges (<s-de>Nebenkosten</s-de>): water, rubbish, often heating</td></tr>
<tr><td><s-de>WM 850 €</s-de></td><td>"warm rent" (<s-de>Warmmiete</s-de>): what you actually pay each month</td></tr>
<tr><td><s-de>KT 2.100 €</s-de></td><td>deposit (<s-de>Kaution</s-de>)</td></tr>
</table>
<p>By law, the deposit may not be more than three months' cold rent, and you may pay it in three instalments.</p>
<h2>On the phone</h2>
<p><s-de>Ist die Wohnung noch frei?</s-de> · <s-de>Wie hoch ist die Miete?</s-de> · <s-de>Ist das die Kaltmiete oder die Warmmiete?</s-de> · <s-de>Ab wann ist die Wohnung frei?</s-de> (From when?) · <s-de>Darf man Haustiere haben?</s-de> (Are pets allowed?) · <s-de>Wann kann ich die Wohnung besichtigen?</s-de> (When can I view the flat?)</p>
<h2>The WG</h2>
<p>Many students and young people in Germany live in a <s-de>WG</s-de> (<s-de>Wohngemeinschaft</s-de>), a flat share. To choose a new flatmate, the people living there often hold a <s-de>WG-Casting</s-de>: an informal interview over a coffee. Typical questions: <s-de>Was machst du so?</s-de> · <s-de>Kochst du gern?</s-de> · <s-de>Wie stellst du dir das WG-Leben vor?</s-de> And many WGs have a <s-de>Putzplan</s-de>, a cleaning rota.</p>
<div class="tip">In a WG, people say du at once, even to someone they've just met. With a landlord, use Sie.</div>
`,
    body_fr: `
<h2>Lire une annonce</h2>
<table>
<tr><th>Annonce</th><th>Sens</th></tr>
<tr><td><s-de>3-Zi.-Whg.</s-de></td><td>appartement de 3 pièces (<s-de>Zimmer</s-de>, <s-de>Wohnung</s-de>) : chambres et salon, sans compter cuisine et salle de bains, comme un T3</td></tr>
<tr><td><s-de>65 m²</s-de></td><td><s-de>fünfundsechzig Quadratmeter</s-de></td></tr>
<tr><td><s-de>EBK</s-de></td><td>cuisine équipée (<s-de>Einbauküche</s-de>)</td></tr>
<tr><td><s-de>KM 700 €</s-de></td><td>« loyer froid » (<s-de>Kaltmiete</s-de>) : loyer hors charges</td></tr>
<tr><td><s-de>NK 150 €</s-de></td><td>charges (<s-de>Nebenkosten</s-de>) : eau, ordures, souvent chauffage</td></tr>
<tr><td><s-de>WM 850 €</s-de></td><td>« loyer chaud » (<s-de>Warmmiete</s-de>) : ce que tu paies vraiment chaque mois</td></tr>
<tr><td><s-de>KT 2.100 €</s-de></td><td>caution (<s-de>Kaution</s-de>)</td></tr>
</table>
<p>La loi limite la caution à trois mois de loyer hors charges, et tu as le droit de la payer en trois fois.</p>
<h2>Au téléphone</h2>
<p><s-de>Ist die Wohnung noch frei?</s-de> (L'appartement est-il encore libre ?) · <s-de>Wie hoch ist die Miete?</s-de> · <s-de>Ist das die Kaltmiete oder die Warmmiete?</s-de> · <s-de>Ab wann ist die Wohnung frei?</s-de> (À partir de quand ?) · <s-de>Darf man Haustiere haben?</s-de> (Les animaux sont-ils acceptés ?) · <s-de>Wann kann ich die Wohnung besichtigen?</s-de> (Quand puis-je visiter ?)</p>
<h2>La WG</h2>
<p>En Allemagne, beaucoup d'étudiants et de jeunes vivent en <s-de>WG</s-de> (<s-de>Wohngemeinschaft</s-de>), en colocation. Pour choisir un nouveau colocataire, les habitants organisent souvent un <s-de>WG-Casting</s-de> : un entretien détendu autour d'un café. Questions typiques : <s-de>Was machst du so?</s-de> (Tu fais quoi dans la vie ?) · <s-de>Kochst du gern?</s-de> · <s-de>Wie stellst du dir das WG-Leben vor?</s-de> (Comment imagines-tu la vie en coloc ?) Et beaucoup de WG ont un <s-de>Putzplan</s-de>, un planning de ménage.</p>
<div class="tip">En WG, on se tutoie tout de suite, même avec quelqu'un qu'on vient de rencontrer. Avec un propriétaire, on vouvoie.</div>
`,
    examples: [
      ["Ist die Wohnung noch frei?", "Is the flat still available?", "L'appartement est-il encore libre ?"],
      ["Wie hoch ist die Warmmiete?", "How much is the rent including charges?", "À combien s'élève le loyer charges comprises ?"],
      ["Die Wohnung hat drei Zimmer, Küche und Bad.", "The flat has three rooms, a kitchen and a bathroom.", "L'appartement a trois pièces, une cuisine et une salle de bains."],
      ["Wann kann ich die Wohnung besichtigen?", "When can I view the flat?", "Quand puis-je visiter l'appartement ?"],
      ["Darf man Haustiere haben?", "Are pets allowed?", "Les animaux sont-ils acceptés ?"],
      ["Ab wann ist das Zimmer frei? — Ab dem ersten März.", "From when is the room free? — From the first of March.", "À partir de quand la chambre est-elle libre ? — À partir du premier mars."],
      ["In unserer WG gibt es einen Putzplan.", "There's a cleaning rota in our flat share.", "Dans notre coloc, il y a un planning de ménage."]
    ],
    quiz: [
      { q: "“Kaltmiete” is:", q_fr: "« Kaltmiete », c'est :", o: ["the rent without charges", "the rent with heating", "the deposit"], o_fr: ["le loyer hors charges", "le loyer avec chauffage", "la caution"], a: 0, ex: "Kaltmiete + Nebenkosten = Warmmiete.", ex_fr: "Kaltmiete + Nebenkosten = Warmmiete." },
      { q: "In an ad, “EBK” means:", q_fr: "Dans une annonce, « EBK » veut dire :", o: ["fitted kitchen", "balcony", "lift"], o_fr: ["cuisine équipée", "balcon", "ascenseur"], a: 0, ex: "EBK = Einbauküche.", ex_fr: "EBK = Einbauküche." },
      { q: "How do you ask when you can view the flat?", q_fr: "Comment demander quand tu peux visiter l'appartement ?", o: ["Wann kann ich die Wohnung besichtigen?", "Wann kann ich besichtigen die Wohnung?", "Wann ich kann die Wohnung besichtigen?"], a: 0, ex: "kann second, besichtigen at the end.", ex_fr: "kann en deuxième position, besichtigen à la fin." },
      { q: "The cold rent is 600 €. The deposit can be at most:", q_fr: "Le loyer hors charges est de 600 €. La caution peut être au maximum de :", o: ["1 800 €", "600 €", "3 000 €"], a: 0, ex: "At most three months' cold rent: 3 × 600 €.", ex_fr: "Au maximum trois loyers hors charges : 3 × 600 €." },
      { q: "At a WG interview, you say to the flatmates:", q_fr: "À un entretien de coloc, tu dis aux colocataires :", o: ["du / ihr", "Sie", "it depends on their age"], o_fr: ["du / ihr", "Sie", "ça dépend de leur âge"], a: 0, ex: "In a WG, people say du at once.", ex_fr: "En WG, on se tutoie tout de suite." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    16: {
      gap: [["Der Schlüssel liegt auf ___ Tisch.", "dem", "the", "le, la"], ["Die Jacke hängt hinter ___ Tür.", "der", "the", "le, la"], ["Die Milch steht ___ Kühlschrank.", "im", "in the", "dans le"], ["Das Bild ___ an der Wand. (hängen)", "hängt"]],
      fix: [["Die Katze schläft unter das Bett.", "Die Katze schläft unter dem Bett.", "Wo? + dative: das Bett → dem Bett.", "Wo ? + datif : das Bett → dem Bett."], ["Wir essen in die Küche.", "Wir essen in der Küche.", "Where? + dative: die Küche → der Küche.", "Où ? + datif : die Küche → der Küche."]],
      task: ["Describe your room or living room in four sentences: where are the furniture and the things?", "Décris ta chambre ou ton salon en quatre phrases : où sont les meubles et les objets ?", "Mein Bett steht neben dem Fenster. Über dem Bett hängt ein Bild. Der Schrank steht an der Wand, und meine Bücher liegen im Regal. Unter dem Tisch schläft meine Katze."]
    },
    17: {
      gap: [["Ich ___ heute arbeiten. (müssen)", "muss"], ["___ du mir helfen? (können)", "Kannst"], ["Hier ___ man nicht rauchen. (dürfen)", "darf"], ["Wir wollen eine Wohnung ___. (to rent)", "mieten"]],
      fix: [["Ich kann spielen Klavier.", "Ich kann Klavier spielen.", "The modal second, the infinitive at the end.", "Le verbe de modalité en deuxième position, l'infinitif à la fin."], ["Du musst hier nicht rauchen, das ist verboten.", "Du darfst hier nicht rauchen, das ist verboten.", "Forbidden: nicht dürfen. Nicht müssen means there's no need.", "Interdit : nicht dürfen. Nicht müssen veut dire que ce n'est pas nécessaire."]],
      task: ["Write the rules of a flat share: four sentences with dürfen, müssen and können.", "Écris le règlement d'une colocation : quatre phrases avec dürfen, müssen et können.", "In unserer WG darf man nicht rauchen. Jeder muss einmal pro Woche putzen. Man kann Freunde einladen, aber nach zehn Uhr muss es ruhig sein. Die Katze darf auf dem Sofa schlafen!"]
    },
    18: {
      gap: [["Ist die Wohnung noch ___?", "frei", "available", "libre"], ["Wie hoch ist die ___? (the rent)", "Miete"], ["Wann kann ich die Wohnung ___? (to view)", "besichtigen"], ["Kaltmiete + Nebenkosten = ___", "Warmmiete"]],
      fix: [["Wann ich kann die Wohnung besichtigen?", "Wann kann ich die Wohnung besichtigen?", "After the question word: the modal, the subject, and the infinitive at the end.", "Après le mot interrogatif : le verbe de modalité, le sujet, et l'infinitif à la fin."], ["Darf man Haustiere zu haben?", "Darf man Haustiere haben?", "After a modal verb: the infinitive without zu.", "Après un verbe de modalité : l'infinitif sans zu."]],
      task: ["Write four questions you'd ask a landlord on the phone.", "Écris quatre questions que tu poserais à un propriétaire au téléphone.", "Ist die Wohnung noch frei? Wie hoch ist die Warmmiete? Ab wann ist die Wohnung frei? Wann kann ich sie besichtigen?"]
    }
  });

  W.ROLEPLAYS.push(
  { id: "kueche", lesson: 16, level: "A1", icon: "chef-hat", partner: "Kai", role: "a friend", role_fr: "un ami",
    title: "Where's the coffee?", title_fr: "Où est le café ?",
    setting: "You're staying with your friend Kai in Bremen. In the morning, you want to make coffee, but you can't find anything.", setting_fr: "Tu dors chez ton ami Kai à Brême. Le matin, tu veux faire du café, mais tu ne trouves rien.",
    turns: [
      { p: "Guten Morgen! Gut geschlafen?", en: "Good morning! Did you sleep well?", fr: "Bonjour ! Bien dormi ?" },
      { y: ["Ja, danke! Sag mal, wo ist der Kaffee?", "Ja, danke! Sag mal, wo ist das Kaffee?", "Ja, danke! Sag mal, wo gibt es der Kaffee?"], en: "Yes, thanks! Tell me, where's the coffee?", fr: "Oui, merci ! Dis-moi, où est le café ?", why: "der Kaffee is masculine; Wo ist…? asks where something is, es gibt says what exists.", why_fr: "der Kaffee est masculin ; Wo ist… ? demande où se trouve une chose, es gibt dit ce qui existe." },
      { p: "Im Schrank über dem Herd, neben den Tassen.", en: "In the cupboard above the cooker, next to the cups.", fr: "Dans le placard au-dessus de la cuisinière, à côté des tasses." },
      { y: ["Danke! Und die Milch? Ist sie im Kühlschrank?", "Danke! Und die Milch? Ist er im Kühlschrank?", "Danke! Und die Milch? Ist sie in Kühlschrank?"], en: "Thanks! And the milk? Is it in the fridge?", fr: "Merci ! Et le lait ? Il est dans le frigo ?", why: "die Milch → sie; in dem Kühlschrank → im Kühlschrank.", why_fr: "die Milch → sie (féminin en allemand !) ; in dem Kühlschrank → im Kühlschrank." },
      { p: "Ja, ganz unten. Und die Brötchen liegen auf dem Tisch.", en: "Yes, right at the bottom. And the rolls are on the table.", fr: "Oui, tout en bas. Et les petits pains sont sur la table." },
      { y: ["Super! Kann ich auch ein Ei kochen?", "Super! Kann ich auch ein Ei kochen kann?", "Super! Kann ich auch kochen ein Ei?"], en: "Great! Can I boil an egg too?", fr: "Super ! Je peux aussi faire cuire un œuf ?", why: "A yes or no question starts with the modal; the infinitive at the end.", why_fr: "Une question fermée commence par le verbe de modalité ; l'infinitif à la fin." },
      { p: "Klar! Aber du musst den Herd danach ausmachen, er ist ein bisschen alt.", en: "Sure! But you have to turn the cooker off afterwards, it's a bit old.", fr: "Bien sûr ! Mais tu dois éteindre la cuisinière après, elle est un peu vieille." },
      { y: ["Kein Problem, das mache ich. Willst du auch einen Kaffee?", "Kein Problem, das mache ich. Willst du auch ein Kaffee?", "Kein Problem, das mache ich. Wirst du auch einen Kaffee?"], en: "No problem, I'll do that. Do you want a coffee too?", fr: "Pas de problème, je m'en occupe. Tu veux un café aussi ?", why: "wollen: du willst; der Kaffee → einen Kaffee.", why_fr: "wollen : du willst ; der Kaffee → einen Kaffee." }
    ] },
  { id: "wgcasting", lesson: 18, level: "A1", icon: "users", partner: "Ronja", role: "a student in a flat share", role_fr: "une étudiante en colocation",
    title: "The WG interview", title_fr: "L'entretien de colocation",
    setting: "You'd like a room in a flat share in Münster. Ronja, who lives there, invites you for a coffee to get to know you.", setting_fr: "Tu aimerais une chambre dans une colocation à Münster. Ronja, qui y habite, t'invite à prendre un café pour faire connaissance.",
    turns: [
      { p: "Hi, komm rein! Ich bin Ronja. Möchtest du einen Kaffee?", en: "Hi, come in! I'm Ronja. Would you like a coffee?", fr: "Salut, entre ! Je suis Ronja. Tu veux un café ?" },
      { y: ["Ja, gern! Danke. Ich bin Sacha.", "Ja, gern! Danke. Ich heißt Sacha.", "Danke! Ich bin Sacha."], en: "Yes, please! Thanks. I'm Sacha.", fr: "Oui, avec plaisir ! Merci. Moi, c'est Sacha.", why: "To accept, say Ja, gern! — Danke! alone could mean no thanks.", why_fr: "Pour accepter, dis Ja, gern! — Danke! seul pourrait vouloir dire non merci." },
      { p: "Also, Sacha, was machst du so?", en: "So, Sacha, what do you do?", fr: "Alors, Sacha, tu fais quoi dans la vie ?" },
      { y: ["Ich studiere Biologie hier in Münster. Ich muss oft in der Bibliothek lernen.", "Ich studiere Biologie hier in Münster. Ich muss oft lernen in der Bibliothek.", "Ich studiere Biologie hier in Münster. Ich muss oft in die Bibliothek lernen."], en: "I study biology here in Münster. I often have to study in the library.", fr: "J'étudie la biologie ici à Münster. Je dois souvent travailler à la bibliothèque.", why: "lernen at the end; Wo? + dative: in der Bibliothek.", why_fr: "lernen à la fin ; Wo ? + datif : in der Bibliothek." },
      { p: "Cool. Kochst du gern? Wir kochen oft zusammen.", en: "Cool. Do you like cooking? We often cook together.", fr: "Cool. Tu aimes cuisiner ? On cuisine souvent ensemble." },
      { y: ["Ja, ich kann ganz gut kochen, vor allem Nudeln!", "Ja, ich kann kochen ganz gut, vor allem Nudeln!", "Ja, ich will ganz gut kochen, vor allem Nudeln!"], en: "Yes, I can cook quite well, especially pasta!", fr: "Oui, je cuisine plutôt bien, surtout les pâtes !", why: "Being able to: können; the infinitive kochen at the end.", why_fr: "Savoir faire : können ; l'infinitif kochen à la fin." },
      { p: "Super. Bei uns gibt es einen Putzplan. Jeder muss einmal pro Woche das Bad putzen. Ist das okay?", en: "Great. We have a cleaning rota. Everyone has to clean the bathroom once a week. Is that OK?", fr: "Super. Chez nous, il y a un planning de ménage. Chacun doit nettoyer la salle de bains une fois par semaine. Ça te va ?" },
      { y: ["Klar, das ist okay. Darf ich das Zimmer mal sehen?", "Klar, das ist okay. Muss ich das Zimmer mal sehen?", "Klar, das ist okay. Darf ich mal sehen das Zimmer?"], en: "Sure, that's fine. May I see the room?", fr: "Bien sûr, ça me va. Je peux voir la chambre ?", why: "Asking permission: dürfen; sehen at the end.", why_fr: "Demander la permission : dürfen ; sehen à la fin." }
    ] }
  );

  W.READINGS.push({
    id: "wgleben", level: "A1", icon: "house", title: "Unsere WG", genre: "Personal story",
    intro: "Elias describes the flat share he lives in with three other students in Leipzig. Rooms, furniture, Wo? + dative and modal verbs.",
    intro_fr: "Elias décrit la colocation où il vit avec trois autres étudiants à Leipzig. Les pièces, les meubles, Wo ? + datif et les verbes de modalité.",
    paragraphs: [
      { de: "Ich heiße Elias und ich wohne in einer WG in Leipzig. Wir sind vier: Birgit, Nils, Hanna und ich. Die Wohnung hat vier Zimmer, eine große Küche, ein Bad und einen kleinen Balkon.", en: "My name is Elias and I live in a flat share in Leipzig. There are four of us: Birgit, Nils, Hanna and me. The flat has four rooms, a big kitchen, a bathroom and a small balcony.", fr: "Je m'appelle Elias et j'habite dans une colocation à Leipzig. Nous sommes quatre : Birgit, Nils, Hanna et moi. L'appartement a quatre chambres, une grande cuisine, une salle de bains et un petit balcon." },
      { de: "Mein Zimmer ist klein, aber gemütlich. Das Bett steht unter dem Fenster, und neben dem Bett steht ein Regal mit vielen Büchern. Über dem Schreibtisch hängt eine Karte von Europa.", en: "My room is small but cosy. The bed is under the window, and next to the bed there's a bookcase with lots of books. Above the desk hangs a map of Europe.", fr: "Ma chambre est petite, mais agréable. Le lit est sous la fenêtre, et à côté du lit, il y a une étagère avec beaucoup de livres. Au-dessus du bureau est accrochée une carte de l'Europe." },
      { de: "Die Küche ist unser Lieblingsort. Wir kochen oft zusammen und sitzen lange am Tisch. Aber es gibt auch Regeln: Jeder muss einmal pro Woche putzen, und im Bad darf man nicht lange duschen. Es gibt nur ein Bad!", en: "The kitchen is our favourite place. We often cook together and sit at the table for a long time. But there are rules too: everyone has to clean once a week, and you mustn't take long showers. There's only one bathroom!", fr: "La cuisine est notre endroit préféré. On cuisine souvent ensemble et on reste longtemps à table. Mais il y a aussi des règles : chacun doit faire le ménage une fois par semaine, et on n'a pas le droit de prendre de longues douches. Il n'y a qu'une salle de bains !" },
      { de: "Die Miete ist nicht hoch: Ich zahle dreihundertachtzig Euro warm. Im Sommer will Birgit ausziehen. Wir müssen also eine neue Mitbewohnerin oder einen neuen Mitbewohner finden. Das WG-Casting ist am Samstag!", en: "The rent isn't high: I pay three hundred and eighty euros including charges. In the summer Birgit wants to move out. So we have to find a new flatmate. The WG interviews are on Saturday!", fr: "Le loyer n'est pas élevé : je paie trois cent quatre-vingts euros charges comprises. Cet été, Birgit veut partir. Nous devons donc trouver une nouvelle colocataire ou un nouveau colocataire. Le casting de coloc, c'est samedi !" }
    ],
    glossary: { "Schreibtisch": ["desk", "bureau (meuble)"], "Karte": ["map", "carte"], "Lieblingsort": ["favourite place", "endroit préféré"], "sitzen": ["sit", "être assis"], "Regeln": ["rules", "règles"], "jeder": ["everyone", "chacun"], "pro": ["per", "par"], "putzen": ["clean", "faire le ménage"], "hoch": ["high", "élevé"], "dreihundertachtzig": ["three hundred and eighty", "trois cent quatre-vingts"], "ausziehen": ["move out", "déménager, quitter le logement"], "neue": ["new", "nouvelle"], "neuen": ["new", "nouveau"] },
    questions: [
      { q: "Wo wohnt Elias?", o: ["In einer WG in Leipzig", "Allein in Berlin", "Bei seinen Eltern"], a: 0 },
      { q: "Wo steht das Bett von Elias?", o: ["Unter dem Fenster", "Neben der Tür", "Im Wohnzimmer"], a: 0 },
      { q: "Welcher Raum ist der Lieblingsort der WG?", o: ["Die Küche", "Das Bad", "Der Balkon"], a: 0 },
      { q: "Was muss jeder einmal pro Woche machen?", o: ["Putzen", "Kochen", "Einkaufen"], a: 0 },
      { q: "Warum gibt es am Samstag ein WG-Casting?", o: ["Birgit will ausziehen.", "Die Miete ist zu hoch.", "Die Wohnung ist zu klein."], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-a1-6", unit: "a1-6", level: "A1", icon: "phone",
    title: "Die Wohnungsanzeige", title_fr: "L'annonce d'appartement",
    context: "Hanna calls Herr Behrens about his ad for a two-room flat in Kiel.", context_fr: "Hanna appelle Herr Behrens au sujet de son annonce pour un deux-pièces à Kiel.",
    words: [["die Anzeige", "the ad", "l'annonce"], ["die Nebenkosten", "the charges", "les charges"], ["besichtigen", "to view (a flat)", "visiter (un logement)"], ["der Aufzug", "the lift", "l'ascenseur"], ["die Haustiere", "pets", "les animaux domestiques"]],
    lines: [["Herr Behrens", "Behrens, guten Tag.", "de-DE"], ["Hanna", "Guten Tag, Herr Behrens. Hier ist Hanna Fischer. Ich rufe wegen der Anzeige an. Ist die Wohnung noch frei?", "de-DE"], ["Herr Behrens", "Ja, sie ist noch frei. Zwei Zimmer, fünfzig Quadratmeter, im dritten Stock.", "de-DE"], ["Hanna", "Gibt es einen Aufzug?", "de-DE"], ["Herr Behrens", "Nein, leider nicht. Aber die Wohnung ist sehr hell, und es gibt einen Balkon.", "de-DE"], ["Hanna", "Wie hoch ist die Miete?", "de-DE"], ["Herr Behrens", "Die Kaltmiete ist fünfhundertzwanzig Euro, plus hundertzwanzig Euro Nebenkosten.", "de-DE"], ["Hanna", "Also sechshundertvierzig warm. Darf man Haustiere haben? Ich habe eine Katze.", "de-DE"], ["Herr Behrens", "Eine Katze ist kein Problem. Möchten Sie die Wohnung besichtigen?", "de-DE"], ["Hanna", "Ja, gern! Wann kann ich kommen?", "de-DE"], ["Herr Behrens", "Am Donnerstag um sechs Uhr?", "de-DE"], ["Hanna", "Das passt. Vielen Dank, bis Donnerstag!", "de-DE"]],
    gist: ["Warum ruft Hanna an?", ["Sie interessiert sich für eine Wohnung.", "Sie möchte ein Zimmer im Hotel.", "Sie hat ein Problem mit der Heizung."]],
    detail: [["Wie groß ist die Wohnung?", ["Fünfzig Quadratmeter", "Fünfzehn Quadratmeter", "Achtzig Quadratmeter"]], ["Gibt es einen Aufzug?", ["Nein", "Ja", "Nur im Sommer"]], ["Wie hoch ist die Warmmiete?", ["640 Euro", "520 Euro", "120 Euro"]], ["Wann besichtigt Hanna die Wohnung?", ["Am Donnerstag um sechs", "Am Dienstag um sieben", "Am Samstag um zehn"]]],
    decode: ["Ich rufe wegen der Anzeige an.", "Darf man Haustiere haben?"],
    tip: "On the phone, Germans answer with their surname: Behrens, guten Tag. Do the same when you call: Hier ist Hanna Fischer. And ask for the warm rent: that's what you really pay.", tip_fr: "Au téléphone, les Allemands répondent par leur nom de famille : Behrens, guten Tag. Fais pareil quand tu appelles : Hier ist Hanna Fischer. Et demande le loyer charges comprises : c'est ce que tu paies vraiment."
  }]);

  W.PROMPTS.push({ id: "de-a1-6", level: "A1", q: "Beschreib deine Wohnung oder dein Zimmer: Wie viele Zimmer gibt es? Wie ist es? Was steht wo?", en: "Describe your flat or your room: how many rooms are there? What's it like? What is where?", fr: "Décris ton logement ou ta chambre : combien de pièces y a-t-il ? Comment est-il ? Qu'est-ce qui est où ?", time: 75,
    phrases: ["Meine Wohnung hat … Zimmer.", "Das Wohnzimmer ist hell / gemütlich…", "Das Bett steht neben…", "An der Wand hängt…", "Ich muss / kann / möchte…"],
    model: "Ich wohne in einer kleinen Wohnung im zweiten Stock. Sie hat zwei Zimmer, eine Küche und ein Bad. Das Wohnzimmer ist hell und gemütlich: Das Sofa steht vor dem Fenster, und an der Wand hängt ein großes Bild. Die Küche ist klein, aber praktisch. Leider gibt es keinen Balkon. Ich möchte später eine Wohnung mit Garten mieten." });

  W.WRITING_GUIDE["a1-6"] = { genre: "An email answering a flat ad", genre_fr: "Un e-mail en réponse à une annonce de logement",
    plan: [["A formal greeting.", "Une formule d'appel formelle."], ["Say which ad you're writing about.", "Dis à quelle annonce tu réponds."], ["Introduce yourself in one sentence.", "Présente-toi en une phrase."], ["Ask two questions (rent, date, pets…).", "Pose deux questions (loyer, date, animaux…)."], ["Ask to view it, and a formal ending.", "Demande une visite, et une formule de fin formelle."]],
    marks: [["Sehr geehrter Herr Behrens,", "Dear Mr… (formal)", "Monsieur… (formel)"], ["Ihre Anzeige", "your ad (formal Ihr, with a capital)", "votre annonce (Ihr de politesse, avec majuscule)"], ["Ist die Wohnung noch frei?", "a key question", "une question essentielle"], ["Darf man Haustiere haben?", "dürfen: asking about a rule", "dürfen : demander une règle"], ["Wann kann ich die Wohnung besichtigen?", "modal + infinitive at the end", "verbe de modalité + infinitif à la fin"], ["Mit freundlichen Grüßen", "Yours sincerely (formal ending)", "Cordialement (formule de fin)"]] };

  W.COURSE.push({ id: "a1-6", level: "A1", icon: "house", title: "Home", title_fr: "Chez moi",
    intro: "In this unit, you'll talk about where you live: rooms and furniture, where things are with Wo? and the dative (auf dem Tisch, in der Küche), the modal verbs können, müssen, wollen and dürfen, and how to read a flat ad, call a landlord and get through a WG interview.",
    intro_fr: "Dans cette unité, tu vas parler de ton logement : les pièces et les meubles, où sont les choses avec Wo ? et le datif (auf dem Tisch, in der Küche), les verbes de modalité können, müssen, wollen et dürfen, et comment lire une annonce, appeler un propriétaire et réussir un entretien de colocation.",
    can: ["Describe your home and say where things are", "Use the dative after prepositions of place", "Use können, müssen, wollen and dürfen", "Understand a flat ad and ask a landlord the right questions"],
    can_fr: ["Décrire ton logement et dire où sont les choses", "Utiliser le datif après les prépositions de lieu", "Utiliser können, müssen, wollen et dürfen", "Comprendre une annonce et poser les bonnes questions à un propriétaire"],
    lessons: [16, 17, 18], vocab: ["wohnungDE", "moebelDE", "woDE"], reading: "wgleben", prompt: "de-a1-6",
    writing: { task: "You've seen an ad for a flat from Herr Behrens. Write him an email (30-50 words): introduce yourself, ask two questions and ask when you can view the flat.", task_fr: "Tu as vu une annonce de logement de Herr Behrens. Écris-lui un e-mail (30 à 50 mots) : présente-toi, pose deux questions et demande quand tu peux visiter.", words: "30-50",
      tips: ["Sehr geehrter Herr Behrens,", "Ich interessiere mich für…", "Ist die Wohnung noch frei?", "Wann kann ich…?", "Mit freundlichen Grüßen"],
      checklist: ["I used a formal greeting and ending", "I wrote Sie and Ihr with a capital letter", "With a modal verb, the infinitive is at the end", "I asked two questions and asked to view the flat", "I stayed between 30 and 50 words"],
      checklist_fr: ["J'ai employé une formule d'appel et de fin formelles", "J'ai écrit Sie et Ihr avec une majuscule", "Avec un verbe de modalité, l'infinitif est à la fin", "J'ai posé deux questions et demandé une visite", "J'ai écrit entre 30 et 50 mots"],
      model: "Sehr geehrter Herr Behrens,\n\nich interessiere mich für Ihre Anzeige. Ich studiere in Kiel und suche eine kleine Wohnung. Ist die Wohnung noch frei? Darf man Haustiere haben? Ich habe eine Katze. Wann kann ich die Wohnung besichtigen?\n\nMit freundlichen Grüßen\nCamille Laurent" } });
})();
