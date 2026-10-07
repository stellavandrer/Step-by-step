/* Cours d'allemand, unité B1-3 « Housing and neighbours / Logement et voisinage » : le passif (présent, prétérit,
   Perfekt, avec un verbe de modalité), le passif impersonnel (Hier wird nicht geraucht) ; le règlement intérieur,
   les heures de calme, se plaindre poliment, signaler une panne. Explications en anglais ET en français.
   Faits vérifiables seulement : beaucoup d'immeubles ont une Hausordnung ; calme de nuit en général de 22 h à 6 h ;
   dimanches et jours fériés protégés par la loi comme jours de repos ; « Kehrwoche » souabe (nettoyage de l'escalier
   et du trottoir à tour de rôle). Schrebergarten : nom donné en hommage au médecin leipzigois Moritz Schreber
   (1808-1861) ; association fondée à Leipzig en 1864, premier terrain (Schreberplatz) en 1865, d'abord une aire de
   jeux pour les enfants ; environ 900 000 jardins familiaux en Allemagne ; loi fédérale sur les jardins familiaux :
   cabane (Laube) de 24 m² au plus, pas d'habitation permanente, culture de fruits et légumes. Écrit au format du
   Goethe-Zertifikat B1 (Schreiben, partie 3 : message formel court). */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "hausDE", icon: "building", title: "Living in a building", title_fr: "Vivre en immeuble", level: "B1", words: [
    ["die Hausordnung, -en", "the house rules", "le règlement intérieur", "Laut Hausordnung ist ab 22 Uhr Ruhe."],
    ["das Treppenhaus, ¨-er", "the stairwell", "la cage d'escalier", "Im Treppenhaus dürfen keine Fahrräder stehen."],
    ["der Hausmeister, -", "the caretaker", "le gardien, le concierge", "Der Hausmeister kommt jeden Dienstag."],
    ["der Mieter, -", "the tenant", "le locataire", "Alle Mieter haben einen Kellerraum."],
    ["die Nebenkosten (pl)", "service charges, bills (heating, water…)", "les charges", "Die Miete beträgt 750 Euro plus Nebenkosten."],
    ["der Einzug", "moving in", "l'emménagement", "Am Samstag feiern wir unseren Einzug."],
    ["die Ruhezeit, -en", "the quiet time", "les heures de calme", "Bitte beachten Sie die Ruhezeiten."],
    ["der Lärm", "the noise", "le bruit", "Der Lärm von der Baustelle ist unerträglich."],
    ["sich beschweren über", "to complain about", "se plaindre de", "Der Nachbar hat sich über die Musik beschwert."],
    ["die Nachbarschaft", "the neighbourhood; the neighbours", "le voisinage, le quartier", "Wir verstehen uns gut in der Nachbarschaft."],
    ["der Keller, -", "the cellar, the basement", "la cave", "Die Fahrräder stehen im Keller."],
    ["der Aufzug, ¨-e", "the lift, the elevator", "l'ascenseur", "Der Aufzug funktioniert leider nicht."],
    ["der Briefkasten, ¨", "the letterbox", "la boîte aux lettres", "Ich habe einen Zettel in deinen Briefkasten geworfen."],
    ["abschließen", "to lock", "fermer à clé", "Bitte schließen Sie nachts die Haustür ab."],
    ["renovieren", "to renovate", "rénover", "Das Haus wurde letztes Jahr renoviert."],
    ["die Rücksicht", "consideration", "les égards, le respect", "Bitte nehmen Sie Rücksicht auf Ihre Nachbarn."]
  ] },
  { id: "reparaturDE", icon: "wrench", title: "Repairs and problems", title_fr: "Pannes et réparations", level: "B1", words: [
    ["reparieren", "to repair", "réparer", "Wann wird die Heizung repariert?"],
    ["der Handwerker, -", "the tradesperson (plumber, electrician…)", "l'artisan, l'ouvrier", "Morgen kommt ein Handwerker."],
    ["der Wasserhahn, ¨-e", "the tap", "le robinet", "Der Wasserhahn in der Küche tropft."],
    ["tropfen", "to drip", "goutter", "Der Wasserhahn tropft die ganze Nacht."],
    ["verstopft", "blocked", "bouché", "Das Waschbecken ist verstopft."],
    ["die Steckdose, -n", "the socket, the plug", "la prise (électrique)", "Die Steckdose im Bad funktioniert nicht."],
    ["die Glühbirne, -n", "the light bulb", "l'ampoule", "Im Flur muss eine Glühbirne ausgetauscht werden."],
    ["austauschen", "to replace, to change", "remplacer, changer", "Die alten Fenster werden ausgetauscht."],
    ["der Schimmel", "mould", "la moisissure", "Im Bad ist Schimmel an der Wand."],
    ["undicht", "leaky", "qui fuit, pas étanche", "Das Fenster ist undicht, es zieht."],
    ["der Schaden, ¨", "the damage", "le dommage, les dégâts", "Der Schaden wird von der Versicherung bezahlt."],
    ["die Versicherung, -en", "the insurance", "l'assurance", "Hast du eine Haftpflichtversicherung?"],
    ["dringend", "urgent(ly)", "urgent, d'urgence", "Das muss dringend repariert werden."],
    ["melden", "to report", "signaler", "Bitte melden Sie Schäden sofort dem Hausmeister."]
  ] });

  W.LESSONS.push(
  {
    id: 49, level: "B1", icon: "settings",
    title: "Hier wird nicht geraucht: the passive", title_fr: "Hier wird nicht geraucht : le passif",
    subtitle: "When the action matters more than who does it: werden + participle.", subtitle_fr: "Quand l'action compte plus que la personne qui la fait : werden + participe.",
    body: `
<h2>Active or passive?</h2>
<p>In the active, we say who does something: <s-de>Der Hausmeister putzt die Treppe.</s-de> In the passive, the action is what matters: <s-de>Die Treppe wird geputzt.</s-de> (The stairs are cleaned.)</p>
<h2>werden + participle</h2>
<p>The present passive: a form of <s-de>werden</s-de> in second position, the participle at the end: <s-de>Der Müll wird am Montag abgeholt.</s-de> · <s-de>Die Wohnungen werden renoviert.</s-de></p>
<table>
<tr><th>Person</th><th>Passive</th></tr>
<tr><td><s-de>ich</s-de></td><td><s-de>werde gefragt</s-de></td></tr>
<tr><td><s-de>du</s-de></td><td><s-de>wirst gefragt</s-de></td></tr>
<tr><td><s-de>er / sie / es</s-de></td><td><s-de>wird gefragt</s-de></td></tr>
<tr><td><s-de>wir</s-de></td><td><s-de>werden gefragt</s-de></td></tr>
<tr><td><s-de>ihr</s-de></td><td><s-de>werdet gefragt</s-de></td></tr>
<tr><td><s-de>sie / Sie</s-de></td><td><s-de>werden gefragt</s-de></td></tr>
</table>
<h2>By whom? von + dative</h2>
<p><s-de>Die Treppe wird vom Hausmeister geputzt.</s-de> Very often, though, there's no "by" at all: that's the point of the passive.</p>
<h2>Signs and rules: the impersonal passive</h2>
<p><s-de>Hier wird nicht geraucht.</s-de> (No smoking here.) · <s-de>Im Treppenhaus wird nicht gespielt.</s-de> · <s-de>Hier wird Deutsch gesprochen.</s-de></p>
<div class="tip">English makes the passive with "be", German with <s-de>werden</s-de>: "the car is repaired" = <s-de>Das Auto wird repariert</s-de>. With <s-de>sein</s-de>, it's a state: <s-de>Das Auto ist repariert</s-de> means it's already fixed.</div>
`,
    body_fr: `
<h2>Actif ou passif ?</h2>
<p>À l'actif, on dit qui fait l'action : <s-de>Der Hausmeister putzt die Treppe.</s-de> (Le gardien nettoie l'escalier.) Au passif, c'est l'action qui compte : <s-de>Die Treppe wird geputzt.</s-de> (L'escalier est nettoyé.)</p>
<h2>werden + participe</h2>
<p>Le passif au présent : une forme de <s-de>werden</s-de> en deuxième position, le participe à la fin : <s-de>Der Müll wird am Montag abgeholt.</s-de> (Les poubelles sont ramassées le lundi.) · <s-de>Die Wohnungen werden renoviert.</s-de></p>
<table>
<tr><th>Personne</th><th>Passif</th></tr>
<tr><td><s-de>ich</s-de></td><td><s-de>werde gefragt</s-de></td></tr>
<tr><td><s-de>du</s-de></td><td><s-de>wirst gefragt</s-de></td></tr>
<tr><td><s-de>er / sie / es</s-de></td><td><s-de>wird gefragt</s-de></td></tr>
<tr><td><s-de>wir</s-de></td><td><s-de>werden gefragt</s-de></td></tr>
<tr><td><s-de>ihr</s-de></td><td><s-de>werdet gefragt</s-de></td></tr>
<tr><td><s-de>sie / Sie</s-de></td><td><s-de>werden gefragt</s-de></td></tr>
</table>
<h2>Par qui ? von + datif</h2>
<p><s-de>Die Treppe wird vom Hausmeister geputzt.</s-de> (par le gardien). Mais très souvent, on ne dit pas par qui : c'est tout l'intérêt du passif, comme le « on » français (<s-de>Hier wird Deutsch gesprochen</s-de> = ici, on parle allemand).</p>
<h2>Panneaux et règles : le passif impersonnel</h2>
<p><s-de>Hier wird nicht geraucht.</s-de> (Ici, on ne fume pas.) · <s-de>Im Treppenhaus wird nicht gespielt.</s-de> (On ne joue pas dans l'escalier.) · <s-de>Hier wird Deutsch gesprochen.</s-de></p>
<div class="tip">Le français fait le passif avec « être », l'allemand avec <s-de>werden</s-de> : « la voiture est réparée (en ce moment) » = <s-de>Das Auto wird repariert</s-de>. Avec <s-de>sein</s-de>, c'est un état : <s-de>Das Auto ist repariert</s-de> veut dire qu'elle est déjà réparée.</div>
`,
    examples: [
      ["Der Müll wird am Montag abgeholt.", "The rubbish is collected on Monday.", "Les poubelles sont ramassées le lundi."],
      ["Die Treppe wird jede Woche vom Hausmeister geputzt.", "The stairs are cleaned by the caretaker every week.", "L'escalier est nettoyé chaque semaine par le gardien."],
      ["Hier wird nicht geraucht.", "No smoking here.", "Ici, on ne fume pas."],
      ["Die alten Fenster werden im Sommer ausgetauscht.", "The old windows are being replaced in the summer.", "Les vieilles fenêtres seront remplacées cet été."],
      ["In diesem Laden wird auch Englisch gesprochen.", "English is spoken in this shop too.", "Dans ce magasin, on parle aussi anglais."],
      ["Die Miete wird am Anfang des Monats überwiesen.", "The rent is transferred at the start of the month.", "Le loyer est viré au début du mois."],
      ["Wie wird dieses Wort geschrieben?", "How is this word spelt?", "Comment s'écrit ce mot ?"]
    ],
    quiz: [
      { q: "“The rubbish is collected on Monday.”", q_fr: "« Les poubelles sont ramassées le lundi. »", o: ["Der Müll wird am Montag abgeholt.", "Der Müll ist am Montag abholt.", "Der Müll wird am Montag abholen."], a: 0, ex: "werden + participle at the end.", ex_fr: "werden + participe à la fin." },
      { q: "“Die Wohnungen ___ renoviert.”", q_fr: "« Die Wohnungen ___ renoviert. »", o: ["werden", "wird", "sind worden"], a: 0, ex: "Plural subject: werden.", ex_fr: "Sujet au pluriel : werden." },
      { q: "“The stairs are cleaned by the caretaker.”", q_fr: "« L'escalier est nettoyé par le gardien. »", o: ["Die Treppe wird vom Hausmeister geputzt.", "Die Treppe wird durch den Hausmeister putzt.", "Die Treppe wird bei dem Hausmeister geputzt."], a: 0, ex: "By someone: von + dative (vom).", ex_fr: "Par quelqu'un : von + datif (vom)." },
      { q: "A sign says “Hier wird nicht geraucht.” It means:", q_fr: "Un panneau dit « Hier wird nicht geraucht. » Cela veut dire :", o: ["No smoking here.", "Nobody smokes here any more.", "Smoking is allowed here."], o_fr: ["Ici, on ne fume pas.", "Plus personne ne fume ici.", "Ici, on a le droit de fumer."], a: 0, ex: "The impersonal passive gives rules.", ex_fr: "Le passif impersonnel sert à donner des règles." },
      { q: "“Das Auto ist repariert” means:", q_fr: "« Das Auto ist repariert » veut dire :", o: ["The car has been fixed (it's ready).", "The car is being repaired right now.", "The car will be repaired."], o_fr: ["La voiture est réparée (elle est prête).", "La voiture est en cours de réparation.", "La voiture sera réparée."], a: 0, ex: "sein + participle = a state; werden + participle = the action.", ex_fr: "sein + participe = un état ; werden + participe = l'action." }
    ]
  },
  {
    id: 50, level: "B1", icon: "wrench",
    title: "Das muss repariert werden: the passive in the past and with modals", title_fr: "Das muss repariert werden : le passif au passé et avec les verbes de modalité",
    subtitle: "wurde gebaut, ist repariert worden, muss gemacht werden.", subtitle_fr: "wurde gebaut, ist repariert worden, muss gemacht werden.",
    body: `
<h2>The passive in the past</h2>
<p>Präteritum: <s-de>wurde</s-de> + participle: <s-de>Das Haus wurde 1910 gebaut.</s-de> · <s-de>Die Wohnung wurde letztes Jahr renoviert.</s-de> Perfekt: <s-de>ist</s-de> + participle + <s-de>worden</s-de>: <s-de>Die Heizung ist gestern repariert worden.</s-de></p>
<h2>With a modal verb</h2>
<p>The modal in second position, then participle + <s-de>werden</s-de> at the end: <s-de>Die Heizung muss repariert werden.</s-de> · <s-de>Fahrräder dürfen nicht im Treppenhaus abgestellt werden.</s-de> · <s-de>Kann das Fenster geöffnet werden?</s-de></p>
<table>
<tr><th>Tense</th><th>Example</th></tr>
<tr><td>present</td><td><s-de>Das Haus wird gebaut.</s-de></td></tr>
<tr><td>Präteritum</td><td><s-de>Das Haus wurde gebaut.</s-de></td></tr>
<tr><td>Perfekt</td><td><s-de>Das Haus ist gebaut worden.</s-de></td></tr>
<tr><td>with a modal</td><td><s-de>Das Haus muss gebaut werden.</s-de></td></tr>
</table>
<div class="tip">In the Perfekt passive, it's <s-de>worden</s-de>, not <s-de>geworden</s-de>: <s-de>Er ist Arzt geworden</s-de> (he became a doctor) but <s-de>Er ist operiert worden</s-de> (he has been operated on). For writing about history and buildings, the Präteritum (<s-de>wurde</s-de>) is the most common.</div>
`,
    body_fr: `
<h2>Le passif au passé</h2>
<p>Prétérit : <s-de>wurde</s-de> + participe : <s-de>Das Haus wurde 1910 gebaut.</s-de> (La maison a été construite en 1910.) · <s-de>Die Wohnung wurde letztes Jahr renoviert.</s-de> Perfekt : <s-de>ist</s-de> + participe + <s-de>worden</s-de> : <s-de>Die Heizung ist gestern repariert worden.</s-de> (Le chauffage a été réparé hier.)</p>
<h2>Avec un verbe de modalité</h2>
<p>Le verbe de modalité en deuxième position, puis participe + <s-de>werden</s-de> à la fin : <s-de>Die Heizung muss repariert werden.</s-de> (Le chauffage doit être réparé.) · <s-de>Fahrräder dürfen nicht im Treppenhaus abgestellt werden.</s-de> · <s-de>Kann das Fenster geöffnet werden?</s-de></p>
<table>
<tr><th>Temps</th><th>Exemple</th></tr>
<tr><td>présent</td><td><s-de>Das Haus wird gebaut.</s-de></td></tr>
<tr><td>prétérit</td><td><s-de>Das Haus wurde gebaut.</s-de></td></tr>
<tr><td>Perfekt</td><td><s-de>Das Haus ist gebaut worden.</s-de></td></tr>
<tr><td>avec modalité</td><td><s-de>Das Haus muss gebaut werden.</s-de></td></tr>
</table>
<div class="tip">Au Perfekt passif, c'est <s-de>worden</s-de>, pas <s-de>geworden</s-de> : <s-de>Er ist Arzt geworden</s-de> (il est devenu médecin), mais <s-de>Er ist operiert worden</s-de> (il a été opéré). Pour parler d'histoire et de bâtiments, le prétérit (<s-de>wurde</s-de>) est le plus courant.</div>
`,
    examples: [
      ["Das Haus wurde 1910 gebaut.", "The house was built in 1910.", "La maison a été construite en 1910."],
      ["Die Wohnung wurde letztes Jahr komplett renoviert.", "The flat was completely renovated last year.", "L'appartement a été entièrement rénové l'année dernière."],
      ["Die Heizung ist gestern endlich repariert worden.", "The heating was finally repaired yesterday.", "Le chauffage a enfin été réparé hier."],
      ["Die Glühbirne im Flur muss ausgetauscht werden.", "The light bulb in the hall needs to be changed.", "L'ampoule du couloir doit être changée."],
      ["Fahrräder dürfen nicht im Treppenhaus abgestellt werden.", "Bikes may not be left in the stairwell.", "Les vélos ne doivent pas être laissés dans la cage d'escalier."],
      ["Kann der Schaden bis Freitag repariert werden?", "Can the damage be repaired by Friday?", "Les dégâts peuvent-ils être réparés d'ici vendredi ?"],
      ["Mein Fahrrad ist gestohlen worden!", "My bike has been stolen!", "On m'a volé mon vélo !"]
    ],
    quiz: [
      { q: "“The house was built in 1910.”", q_fr: "« La maison a été construite en 1910. »", o: ["Das Haus wurde 1910 gebaut.", "Das Haus wird 1910 gebaut.", "Das Haus war 1910 bauen."], a: 0, ex: "Präteritum passive: wurde + participle.", ex_fr: "Passif au prétérit : wurde + participe." },
      { q: "“Die Heizung ist repariert ___.”", q_fr: "« Die Heizung ist repariert ___. »", o: ["worden", "geworden", "werden"], a: 0, ex: "Perfekt passive: ist … worden.", ex_fr: "Passif au Perfekt : ist … worden." },
      { q: "“The light bulb needs to be changed.”", q_fr: "« L'ampoule doit être changée. »", o: ["Die Glühbirne muss ausgetauscht werden.", "Die Glühbirne muss werden ausgetauscht.", "Die Glühbirne wird ausgetauscht müssen."], a: 0, ex: "Modal second, participle + werden at the end.", ex_fr: "Modalité en deuxième position, participe + werden à la fin." },
      { q: "“Er ist Arzt ___.” (became)", q_fr: "« Er ist Arzt ___. » (devenu)", o: ["geworden", "worden", "gewurden"], a: 0, ex: "werden as a full verb: geworden.", ex_fr: "werden comme verbe plein : geworden." },
      { q: "“My bike has been stolen!”", q_fr: "« On m'a volé mon vélo ! »", o: ["Mein Fahrrad ist gestohlen worden!", "Mein Fahrrad hat gestohlen worden!", "Mein Fahrrad ist gestohlen geworden!"], a: 0, ex: "ist … worden.", ex_fr: "ist … worden." }
    ]
  },
  {
    id: 51, level: "B1", kind: "functional", icon: "building",
    title: "Everyday German: neighbours, house rules and repairs", title_fr: "L'allemand de tous les jours : voisins, règlement et réparations",
    subtitle: "Quiet times, complaining politely, reacting to a complaint and reporting a problem.", subtitle_fr: "Les heures de calme, se plaindre poliment, réagir à une plainte et signaler un problème.",
    body: `
<h2>The house rules</h2>
<p>Many buildings have house rules, the <s-de>Hausordnung</s-de>: quiet times, who cleans the stairs, where bikes and buggies go. At night, it's usually quiet from 10 pm to 6 am, and Sundays and public holidays are protected by law as days of rest. Many house rules add a quiet time at lunchtime. In Swabia, the <s-de>Kehrwoche</s-de> is a famous tradition: tenants take turns to clean the stairs and the pavement.</p>
<h2>Complaining politely</h2>
<p><s-de>Entschuldigen Sie, ich wohne unter Ihnen.</s-de> · <s-de>Könnten Sie die Musik bitte etwas leiser machen?</s-de> · <s-de>Es wäre nett, wenn Sie nach 22 Uhr leiser wären.</s-de> · <s-de>Mich stört, dass…</s-de></p>
<h2>Reacting to a complaint</h2>
<p><s-de>Oh, das tut mir leid, das wusste ich nicht.</s-de> · <s-de>Ich werde in Zukunft darauf achten.</s-de> · <s-de>Das kommt nicht wieder vor.</s-de> (It won't happen again.)</p>
<h2>Reporting a problem</h2>
<p><s-de>Die Heizung funktioniert seit Montag nicht.</s-de> · <s-de>Der Wasserhahn tropft.</s-de> · <s-de>Das Waschbecken ist verstopft.</s-de> · <s-de>Wann kann das repariert werden?</s-de></p>
<div class="tip">Before a party, many people hang a note in the stairwell: <s-de>Liebe Nachbarn, am Samstag feiern wir unseren Einzug. Es könnte etwas lauter werden. Wir bitten um Verständnis!</s-de> It's polite, and it really helps.</div>
`,
    body_fr: `
<h2>Le règlement intérieur</h2>
<p>Beaucoup d'immeubles ont un règlement, la <s-de>Hausordnung</s-de> : les heures de calme, qui nettoie l'escalier, où vont les vélos et les poussettes. La nuit, on respecte en général le calme de 22 h à 6 h, et les dimanches et jours fériés sont protégés par la loi comme jours de repos. Beaucoup de règlements ajoutent un moment de calme à l'heure du déjeuner. En Souabe, la <s-de>Kehrwoche</s-de> est une tradition célèbre : les locataires nettoient à tour de rôle l'escalier et le trottoir.</p>
<h2>Se plaindre poliment</h2>
<p><s-de>Entschuldigen Sie, ich wohne unter Ihnen.</s-de> (Excusez-moi, j'habite en dessous de chez vous.) · <s-de>Könnten Sie die Musik bitte etwas leiser machen?</s-de> · <s-de>Es wäre nett, wenn Sie nach 22 Uhr leiser wären.</s-de> · <s-de>Mich stört, dass…</s-de> (Ce qui me dérange, c'est que…)</p>
<h2>Réagir à une plainte</h2>
<p><s-de>Oh, das tut mir leid, das wusste ich nicht.</s-de> · <s-de>Ich werde in Zukunft darauf achten.</s-de> (J'y ferai attention à l'avenir.) · <s-de>Das kommt nicht wieder vor.</s-de> (Ça ne se reproduira pas.)</p>
<h2>Signaler un problème</h2>
<p><s-de>Die Heizung funktioniert seit Montag nicht.</s-de> · <s-de>Der Wasserhahn tropft.</s-de> · <s-de>Das Waschbecken ist verstopft.</s-de> · <s-de>Wann kann das repariert werden?</s-de></p>
<div class="tip">Avant une fête, beaucoup de gens accrochent un mot dans la cage d'escalier : <s-de>Liebe Nachbarn, am Samstag feiern wir unseren Einzug. Es könnte etwas lauter werden. Wir bitten um Verständnis!</s-de> C'est poli, et ça aide vraiment.</div>
`,
    examples: [
      ["Laut Hausordnung ist von 22 bis 6 Uhr Ruhe.", "According to the house rules, it's quiet from 10 pm to 6 am.", "D'après le règlement, le calme est de rigueur de 22 h à 6 h."],
      ["Entschuldigen Sie, könnten Sie die Musik bitte etwas leiser machen?", "Excuse me, could you turn the music down a little, please?", "Excusez-moi, pourriez-vous baisser un peu la musique, s'il vous plaît ?"],
      ["Oh, das tut mir leid, das wusste ich nicht.", "Oh, I'm sorry, I didn't know.", "Oh, pardon, je ne savais pas."],
      ["Das kommt nicht wieder vor.", "It won't happen again.", "Ça ne se reproduira pas."],
      ["Der Wasserhahn in der Küche tropft seit gestern.", "The kitchen tap has been dripping since yesterday.", "Le robinet de la cuisine goutte depuis hier."],
      ["Wann kann die Heizung repariert werden?", "When can the heating be repaired?", "Quand le chauffage peut-il être réparé ?"],
      ["Liebe Nachbarn, am Samstag feiern wir unseren Einzug. Wir bitten um Verständnis!", "Dear neighbours, on Saturday we're having a house-warming party. Thank you for your understanding!", "Chers voisins, samedi nous fêtons notre emménagement. Merci de votre compréhension !"]
    ],
    quiz: [
      { q: "Usual quiet time at night in German buildings:", q_fr: "Les heures de calme habituelles la nuit dans les immeubles allemands :", o: ["from 10 pm to 6 am", "from midnight to 8 am", "there's no rule"], o_fr: ["de 22 h à 6 h", "de minuit à 8 h", "il n'y a pas de règle"], a: 0, ex: "Nachtruhe: usually 22 to 6 Uhr.", ex_fr: "La Nachtruhe : en général de 22 h à 6 h." },
      { q: "The politest way to ask a neighbour to be quieter:", q_fr: "La façon la plus polie de demander à un voisin de faire moins de bruit :", o: ["Könnten Sie die Musik bitte etwas leiser machen?", "Machen Sie sofort die Musik leiser!", "Ihre Musik ist schrecklich."], a: 0, ex: "Könnten Sie … bitte …?", ex_fr: "Könnten Sie … bitte …?" },
      { q: "“It won't happen again.”", q_fr: "« Ça ne se reproduira pas. »", o: ["Das kommt nicht wieder vor.", "Das geht nicht wieder.", "Das kommt nicht mehr an."], a: 0, ex: "vorkommen = to happen, to occur.", ex_fr: "vorkommen = se produire." },
      { q: "“The tap is dripping.”", q_fr: "« Le robinet goutte. »", o: ["Der Wasserhahn tropft.", "Der Wasserhahn läuft weg.", "Der Wasserhahn ist verstopft."], a: 0, ex: "tropfen = to drip.", ex_fr: "tropfen = goutter." },
      { q: "What is the Kehrwoche?", q_fr: "Qu'est-ce que la Kehrwoche ?", o: ["A Swabian tradition: tenants take turns cleaning the stairs", "A week of holiday in spring", "A street market"], o_fr: ["Une tradition souabe : les locataires nettoient l'escalier à tour de rôle", "Une semaine de vacances au printemps", "Un marché de rue"], a: 0, ex: "kehren = to sweep.", ex_fr: "kehren = balayer." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    49: {
      gap: [["Der Müll ___ am Montag abgeholt.", "wird"], ["Die Fenster werden morgen ___. (putzen)", "geputzt"], ["Hier ___ nicht geraucht.", "wird"], ["Die Treppe wird ___ Hausmeister geputzt.", "vom", "by the", "par le"]],
      fix: [["Die Wohnung ist jedes Jahr renoviert.", "Die Wohnung wird jedes Jahr renoviert.", "An action that is done: werden + participle.", "Une action qui est faite : werden + participe."], ["Die Briefe werden vom Postbote gebracht.", "Die Briefe werden vom Postboten gebracht.", "von + dative; der Postbote → dem Postboten.", "von + datif ; der Postbote → dem Postboten."]],
      task: ["Describe what happens in your building or street every week, in four passive sentences.", "Décris ce qui se passe chaque semaine dans ton immeuble ou ta rue, en quatre phrases au passif.", "Jeden Montag wird der Müll abgeholt. Am Mittwoch wird die Treppe geputzt. Die Post wird jeden Morgen um zehn gebracht. Und am Samstag wird auf dem Platz vor dem Haus ein Markt aufgebaut."]
    },
    50: {
      gap: [["Das Haus ___ 1910 gebaut.", "wurde"], ["Die Heizung ist gestern repariert ___.", "worden"], ["Die Glühbirne muss ausgetauscht ___.", "werden"], ["Mein Fahrrad ist gestohlen ___!", "worden"]],
      fix: [["Die Heizung ist repariert geworden.", "Die Heizung ist repariert worden.", "Perfekt passive: worden, not geworden.", "Passif au Perfekt : worden, pas geworden."], ["Das muss werden repariert.", "Das muss repariert werden.", "Participle first, werden last.", "D'abord le participe, werden à la toute fin."]],
      task: ["Your flat needs work. Write four sentences: what was done last year, and what must still be done.", "Ton logement a besoin de travaux. Écris quatre phrases : ce qui a été fait l'année dernière, et ce qui doit encore être fait.", "Letztes Jahr wurde die Küche renoviert. Die alten Fenster sind auch ausgetauscht worden. Jetzt muss das Bad dringend renoviert werden. Und die Heizung sollte vor dem Winter kontrolliert werden."]
    },
    51: {
      gap: [["Könnten Sie die Musik bitte etwas ___ machen?", "leiser", "quieter", "moins fort"], ["Das tut mir ___, das wusste ich nicht.", "leid"], ["Das kommt nicht wieder ___.", "vor"], ["Der Wasserhahn ___ seit gestern.", "tropft", "drips", "goutte"]],
      fix: [["Machen Sie die Musik leiser!", "Könnten Sie die Musik bitte leiser machen?", "To a neighbour, be polite: Könnten Sie … bitte …?", "Avec un voisin, reste poli : Könnten Sie … bitte …?"], ["Laut Hausordnung ist von 22 bis 6 Uhr Lärm.", "Laut Hausordnung ist von 22 bis 6 Uhr Ruhe.", "Quiet time: Ruhe (Lärm means noise).", "Le calme : Ruhe (Lärm veut dire bruit)."]],
      task: ["Write a short note for your stairwell: you're having a party on Saturday, apologise in advance and give your phone number.", "Écris un petit mot pour ta cage d'escalier : tu fais une fête samedi, excuse-toi d'avance et donne ton numéro.", "Liebe Nachbarn, am Samstag feiern wir unseren Einzug. Es könnte bis Mitternacht etwas lauter werden. Wir bitten um Verständnis! Wenn es Sie stört, rufen Sie uns einfach an: 0176 1234567. Viele Grüße aus dem zweiten Stock."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "nachbarlaerm", lesson: 51, level: "B1", icon: "building", partner: "Frau Hartmann", role: "your neighbour from downstairs", role_fr: "ta voisine du dessous",
    title: "A complaint about noise", title_fr: "Une plainte pour le bruit",
    setting: "You had friends round last night. The next morning, your neighbour Frau Hartmann rings your doorbell.", setting_fr: "Tu as reçu des amis hier soir. Le lendemain matin, ta voisine, Mme Hartmann, sonne à ta porte.",
    turns: [
      { p: "Guten Morgen. Ich wohne unter Ihnen. Gestern Abend war es bis zwei Uhr sehr laut bei Ihnen.", en: "Good morning. I live below you. Last night it was very loud at your place until two.", fr: "Bonjour. J'habite en dessous de chez vous. Hier soir, il y a eu beaucoup de bruit chez vous jusqu'à deux heures." },
      { y: ["Oh, das tut mir wirklich leid. Ich hatte ein paar Freunde eingeladen.", "Oh, das tut mir wirklich leid. Ich hatte ein paar Freunde einladen.", "Oh, das tut mich wirklich leid. Ich hatte ein paar Freunde eingeladen."], en: "Oh, I'm really sorry. I'd invited a few friends round.", fr: "Oh, toutes mes excuses. J'avais invité quelques amis.", why: "es tut mir leid (dative); Plusquamperfekt: hatte … eingeladen.", why_fr: "es tut mir leid (datif) ; plus-que-parfait : hatte … eingeladen." },
      { p: "Das ist ja kein Problem. Aber laut Hausordnung ist ab 22 Uhr Ruhe, und ich muss um sechs aufstehen.", en: "That's not the problem. But according to the house rules it's quiet time from 10 pm, and I have to get up at six.", fr: "Ce n'est pas le problème. Mais d'après le règlement, le calme est de rigueur à partir de 22 heures, et je dois me lever à six heures." },
      { y: ["Das wusste ich nicht, ich bin erst seit zwei Wochen hier. Das kommt nicht wieder vor.", "Das wusste ich nicht, ich bin erst seit zwei Wochen hier. Das kommt nicht wieder an.", "Das weißte ich nicht, ich bin erst seit zwei Wochen hier. Das kommt nicht wieder vor."], en: "I didn't know that, I've only been here two weeks. It won't happen again.", fr: "Je ne le savais pas, je ne suis là que depuis deux semaines. Ça ne se reproduira pas.", why: "wissen → wusste; vorkommen: Das kommt nicht wieder vor.", why_fr: "wissen → wusste ; vorkommen : Das kommt nicht wieder vor." },
      { p: "Gut. Ach, und noch etwas: Ihr Fahrrad steht im Treppenhaus. Das ist leider nicht erlaubt.", en: "Good. Oh, and one more thing: your bike is in the stairwell. Unfortunately that's not allowed.", fr: "Bien. Ah, et encore une chose : votre vélo est dans la cage d'escalier. Ce n'est malheureusement pas permis." },
      { y: ["Ach so! Wo dürfen die Fahrräder denn abgestellt werden?", "Ach so! Wo dürfen die Fahrräder denn abstellen werden?", "Ach so! Wo dürfen die Fahrräder denn werden abgestellt?"], en: "Oh, I see! So where can bikes be left?", fr: "Ah bon ! Alors, où peut-on ranger les vélos ?", why: "Passive with a modal: dürfen … abgestellt werden.", why_fr: "Passif avec modalité : dürfen … abgestellt werden." },
      { p: "Im Keller. Der Schlüssel hängt beim Hausmeister, Herrn Brenner.", en: "In the cellar. The key is with the caretaker, Herr Brenner.", fr: "À la cave. La clé est chez le gardien, M. Brenner." },
      { y: ["Danke für den Tipp! Ich bringe es heute Abend in den Keller.", "Danke für den Tipp! Ich bringe es heute Abend im Keller.", "Danke für der Tipp! Ich bringe es heute Abend in den Keller."], en: "Thanks for the tip! I'll take it down to the cellar this evening.", fr: "Merci pour le conseil ! Je la descends à la cave ce soir.", why: "A direction: in den Keller (accusative).", why_fr: "Une direction : in den Keller (accusatif)." },
      { p: "Sehr schön. Und herzlich willkommen im Haus!", en: "Very good. And a warm welcome to the building!", fr: "Très bien. Et bienvenue dans l'immeuble !" },
      { y: ["Vielen Dank! Und nochmals Entschuldigung für gestern.", "Vielen Dank! Und nochmals Entschuldigung von gestern.", "Vielen Dank! Und nochmal Entschuldigen für gestern."], en: "Thank you very much! And sorry again about yesterday.", fr: "Merci beaucoup ! Et encore pardon pour hier.", why: "Entschuldigung für…", why_fr: "Entschuldigung für…" }
    ] },
  { id: "heizungkaputt", lesson: 50, level: "B1", icon: "wrench", partner: "Herr Brenner", role: "the caretaker", role_fr: "le gardien de l'immeuble",
    title: "The heating has broken down", title_fr: "Le chauffage est en panne",
    setting: "It's January and the heating in your flat doesn't work. You call the caretaker, Herr Brenner.", setting_fr: "Nous sommes en janvier et le chauffage de ton logement ne marche pas. Tu appelles le gardien, M. Brenner.",
    turns: [
      { p: "Brenner, guten Tag.", en: "Brenner speaking, hello.", fr: "Brenner, bonjour." },
      { y: ["Guten Tag, Herr Brenner. Ich wohne im dritten Stock. Meine Heizung funktioniert seit gestern nicht.", "Guten Tag, Herr Brenner. Ich wohne im dritten Stock. Meine Heizung funktioniert seit gestern nicht mehr funktioniert.", "Guten Tag, Herr Brenner. Ich wohne in dritten Stock. Meine Heizung funktioniert seit gestern nicht."], en: "Hello, Herr Brenner. I live on the third floor. My heating hasn't worked since yesterday.", fr: "Bonjour, M. Brenner. J'habite au troisième étage. Mon chauffage ne fonctionne plus depuis hier.", why: "seit + present for something still going on; im (in dem) dritten Stock.", why_fr: "seit + présent pour ce qui dure encore ; im (in dem) dritten Stock." },
      { p: "Oh, schon wieder! Die Heizung ist erst im Dezember repariert worden.", en: "Oh, not again! The heating was only repaired in December.", fr: "Oh, encore ! Le chauffage a pourtant été réparé en décembre." },
      { y: ["Ja, ich weiß. Muss vielleicht ein Teil ausgetauscht werden?", "Ja, ich weiß. Muss vielleicht ein Teil ausgetauscht worden?", "Ja, ich weiß. Muss vielleicht ein Teil austauschen werden?"], en: "Yes, I know. Perhaps a part needs to be replaced?", fr: "Oui, je sais. Il faut peut-être remplacer une pièce ?", why: "Modal + participle + werden.", why_fr: "Modalité + participe + werden." },
      { p: "Das kann gut sein. Ich rufe sofort die Firma an.", en: "That may well be. I'll call the company right away.", fr: "C'est bien possible. J'appelle tout de suite l'entreprise." },
      { y: ["Danke! Wann kann das ungefähr repariert werden? Es ist sehr kalt.", "Danke! Wann kann das ungefähr repariert wird? Es ist sehr kalt.", "Danke! Wann wird das ungefähr repariert werden können sein? Es ist sehr kalt."], en: "Thank you! Roughly when can it be repaired? It's very cold.", fr: "Merci ! Ça pourra être réparé quand, à peu près ? Il fait très froid.", why: "kann … repariert werden.", why_fr: "kann … repariert werden." },
      { p: "Heute schafft das niemand mehr. Aber morgen Vormittag kommt bestimmt ein Handwerker.", en: "Nobody will manage it today. But a technician will definitely come tomorrow morning.", fr: "Aujourd'hui, personne ne pourra plus venir. Mais demain matin, un technicien passera sûrement." },
      { y: ["Gut. Ich bin morgen ab acht Uhr zu Hause. Wird mir der Termin noch bestätigt?", "Gut. Ich bin morgen ab acht Uhr zu Hause. Wird mir der Termin noch bestätigen?", "Gut. Ich bin morgen ab acht Uhr zu Hause. Werde mir der Termin noch bestätigt?"], en: "Good. I'll be at home from eight tomorrow. Will the appointment be confirmed to me?", fr: "D'accord. Je serai là demain à partir de huit heures. On me confirmera le rendez-vous ?", why: "Passive question: Wird … bestätigt?", why_fr: "Question au passif : Wird … bestätigt?" },
      { p: "Ja, ich schicke Ihnen heute noch eine Nachricht. Bis dahin: Ziehen Sie sich warm an!", en: "Yes, I'll send you a message today. Until then: dress warmly!", fr: "Oui, je vous envoie un message aujourd'hui. D'ici là, couvrez-vous bien !" },
      { y: ["Das mache ich. Vielen Dank für Ihre Hilfe, auf Wiederhören!", "Das mache ich. Vielen Dank für Ihre Hilfe, auf Wiedersehen am Telefon!", "Das mache ich. Vielen Dank von Ihre Hilfe, auf Wiederhören!"], en: "I will. Thank you for your help, goodbye!", fr: "C'est ce que je vais faire. Merci de votre aide, au revoir !", why: "Danke für + accusative; on the phone: auf Wiederhören.", why_fr: "Danke für + accusatif ; au téléphone : auf Wiederhören." }
    ] }
  );

  W.READINGS.push({
    id: "schrebergarten", level: "B1", icon: "book-open", title: "Der Schrebergarten", genre: "Article",
    intro: "Around 900,000 small gardens, a summer house of 24 square metres at most, and a name from Leipzig: the German allotment.",
    intro_fr: "Environ 900 000 petits jardins, une cabane de 24 mètres carrés au plus et un nom venu de Leipzig : le jardin familial allemand.",
    paragraphs: [
      { de: "In Deutschland gibt es ungefähr 900.000 Kleingärten. Viele Menschen nennen sie „Schrebergärten“. Sie liegen meistens am Rand der Städte, oft zwischen Bahnlinien und Wohnblöcken, und sind in Vereinen organisiert.", en: "There are about 900,000 allotment gardens in Germany. Many people call them “Schrebergärten”. They usually lie on the edge of towns, often between railway lines and blocks of flats, and are organised in associations.", fr: "Il y a environ 900 000 jardins familiaux en Allemagne. Beaucoup de gens les appellent « Schrebergärten ». Ils se trouvent le plus souvent en bordure des villes, souvent entre des voies ferrées et des immeubles, et sont organisés en associations." },
      { de: "Der Name kommt von Moritz Schreber, einem Arzt aus Leipzig. Er wollte, dass Kinder in der Stadt mehr an der frischen Luft spielen. Nach seinem Tod wurde 1864 in Leipzig ein Verein gegründet, der seinen Namen bekam. Ein Jahr später wurde der erste „Schreberplatz“ eröffnet, zuerst eine Spielwiese für Kinder.", en: "The name comes from Moritz Schreber, a doctor from Leipzig. He wanted children in the city to play more in the fresh air. After his death, an association was founded in Leipzig in 1864 and given his name. A year later the first “Schreberplatz” was opened, at first a playing field for children.", fr: "Le nom vient de Moritz Schreber, un médecin de Leipzig. Il voulait que les enfants des villes jouent davantage au grand air. Après sa mort, une association fut fondée à Leipzig en 1864 et reçut son nom. Un an plus tard, le premier « Schreberplatz » fut ouvert : d'abord un terrain de jeux pour les enfants." },
      { de: "Später wurden am Rand des Platzes kleine Beete angelegt, und bald kümmerten sich ganze Familien um ihre Gärten. In schweren Zeiten, zum Beispiel nach den Weltkriegen, wurden dort Obst und Gemüse angebaut, die viele Familien dringend brauchten.", en: "Later, small beds were laid out at the edge of the field, and soon whole families were looking after their gardens. In hard times, for example after the world wars, fruit and vegetables that many families urgently needed were grown there.", fr: "Plus tard, de petites plates-bandes furent aménagées au bord du terrain, et bientôt des familles entières s'occupèrent de leurs jardins. Dans les périodes difficiles, par exemple après les guerres mondiales, on y cultiva des fruits et des légumes dont beaucoup de familles avaient grand besoin." },
      { de: "Heute regelt ein Gesetz, was im Kleingarten erlaubt ist. Die Gartenlaube darf höchstens 24 Quadratmeter groß sein, und man darf dort nicht dauerhaft wohnen. Ein Teil des Gartens muss für Obst und Gemüse genutzt werden. Trotz der vielen Regeln sind die Gärten sehr beliebt, besonders bei jungen Familien.", en: "Today a law sets out what is allowed in an allotment. The summer house may be at most 24 square metres, and you may not live there permanently. Part of the garden must be used for fruit and vegetables. Despite all the rules, the gardens are very popular, especially with young families.", fr: "Aujourd'hui, une loi précise ce qui est permis dans un jardin familial. La cabane ne doit pas dépasser 24 mètres carrés, et on n'a pas le droit d'y habiter en permanence. Une partie du jardin doit servir à cultiver des fruits et des légumes. Malgré toutes ces règles, les jardins sont très appréciés, surtout par les jeunes familles." }
    ],
    glossary: { "Kleingärten": ["allotment gardens", "jardins familiaux"], "Rand": ["edge", "bord, bordure"], "Bahnlinien": ["railway lines", "voies ferrées"], "Wohnblöcken": ["blocks of flats", "immeubles"], "Vereinen": ["associations, clubs", "associations"], "Verein": ["association, club", "association"], "Arzt": ["doctor", "médecin"], "frischen": ["fresh", "frais"], "Tod": ["death", "mort"], "gegründet": ["founded", "fondé"], "eröffnet": ["opened", "ouvert, inauguré"], "Spielwiese": ["playing field", "terrain de jeux"], "Beete": ["(flower or vegetable) beds", "plates-bandes"], "angelegt": ["laid out", "aménagé"], "kümmerten": ["(sich kümmern um) looked after", "(sich kümmern um) s'occupèrent de"], "schweren": ["hard, difficult", "difficiles"], "Weltkriegen": ["world wars", "guerres mondiales"], "Obst": ["fruit", "fruits"], "Gemüse": ["vegetables", "légumes"], "angebaut": ["grown", "cultivé"], "regelt": ["regulates", "règle, encadre"], "Gesetz": ["law", "loi"], "Gartenlaube": ["summer house (in a garden)", "cabane de jardin"], "Quadratmeter": ["square metres", "mètres carrés"], "dauerhaft": ["permanently", "en permanence"], "genutzt": ["used", "utilisé"], "beliebt": ["popular", "apprécié, populaire"] },
    questions: [
      { q: "Wie viele Kleingärten gibt es ungefähr in Deutschland?", o: ["900.000", "9.000", "9 Millionen"], a: 0 },
      { q: "Wer war Moritz Schreber?", o: ["Ein Arzt aus Leipzig", "Ein Gärtner aus Berlin", "Ein Politiker aus München"], a: 0 },
      { q: "Was war der erste Schreberplatz zuerst?", o: ["Eine Spielwiese für Kinder", "Ein Gemüsegarten", "Ein Parkplatz"], a: 0 },
      { q: "Wie groß darf die Gartenlaube höchstens sein?", o: ["24 Quadratmeter", "50 Quadratmeter", "100 Quadratmeter"], a: 0 },
      { q: "Was ist im Kleingarten nicht erlaubt?", o: ["Dort dauerhaft zu wohnen", "Gemüse anzubauen", "Freunde einzuladen"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-b1-3", unit: "b1-3", level: "B1", icon: "messages-square",
    title: "Die Mieterversammlung", title_fr: "La réunion des locataires",
    context: "At a tenants' meeting, the caretaker Herr Brenner announces the building work, and a tenant, Frau Jansen, asks questions.", context_fr: "Lors d'une réunion des locataires, le gardien, M. Brenner, annonce des travaux, et une locataire, Mme Jansen, pose des questions.",
    words: [["die Mieterversammlung", "the tenants' meeting", "la réunion des locataires"], ["das Dach", "the roof", "le toit"], ["das Gerüst", "the scaffolding", "l'échafaudage"], ["der Fahrradraum", "the bike room", "le local à vélos"], ["vorübergehend", "temporarily", "provisoirement"]],
    lines: [["Herr Brenner", "Guten Abend zusammen. Ich möchte Sie über die Arbeiten im Frühling informieren. Ab März wird das Dach neu gedeckt.", "de-DE"], ["Frau Jansen", "Wie lange dauert das denn?", "de-DE"], ["Herr Brenner", "Ungefähr sechs Wochen. In dieser Zeit wird vor dem Haus ein Gerüst aufgebaut.", "de-DE"], ["Frau Jansen", "Und wird dann auch gearbeitet, wenn wir zu Hause sind? Ich arbeite nämlich nachts.", "de-DE"], ["Herr Brenner", "Gearbeitet wird nur von Montag bis Freitag, von acht bis siebzehn Uhr. Am Wochenende ist es ruhig.", "de-DE"], ["Frau Jansen", "Gut. Und was passiert mit dem Fahrradraum?", "de-DE"], ["Herr Brenner", "Der Fahrradraum muss leider vorübergehend geschlossen werden. Die Fahrräder können im Keller abgestellt werden.", "de-DE"], ["Frau Jansen", "Und die Mieter, die im fünften Stock wohnen? Kommt dann Wasser rein, wenn es regnet?", "de-DE"], ["Herr Brenner", "Nein, keine Sorge. Das Dach wird jeden Abend mit einer Plane abgedeckt.", "de-DE"]],
    gist: ["Worum geht es in der Versammlung?", ["Um Bauarbeiten am Dach", "Um eine neue Hausordnung", "Um eine Erhöhung der Miete"]],
    detail: [["Ab wann wird das Dach neu gedeckt?", ["Ab März", "Ab Januar", "Ab Juli"]], ["Wie lange dauern die Arbeiten?", ["Ungefähr sechs Wochen", "Zwei Wochen", "Sechs Monate"]], ["Wann wird gearbeitet?", ["Montag bis Freitag, von acht bis siebzehn Uhr", "Jeden Tag, auch nachts", "Nur am Wochenende"]], ["Wo können die Fahrräder abgestellt werden?", ["Im Keller", "Im Treppenhaus", "Vor dem Haus"]]],
    decode: ["In dieser Zeit wird vor dem Haus ein Gerüst aufgebaut.", "Der Fahrradraum muss leider vorübergehend geschlossen werden."],
    tip: "Announcements and notices are full of passives (wird aufgebaut, muss geschlossen werden): the action is what matters, not who does it. Listen for werden near the start, and wait for the participle at the end: it carries the meaning.", tip_fr: "Les annonces et les avis sont pleins de passifs (wird aufgebaut, muss geschlossen werden) : c'est l'action qui compte, pas qui la fait. Repère werden au début, et attends le participe à la fin : c'est lui qui porte le sens."
  }]);

  W.PROMPTS.push({ id: "de-b1-3", level: "B1", q: "Wie wohnst du? Was ist dir bei einer Wohnung und in der Nachbarschaft wichtig?", en: "How do you live? What matters to you in a home and in a neighbourhood?", fr: "Comment habites-tu ? Qu'est-ce qui compte pour toi dans un logement et dans le voisinage ?", time: 120,
    phrases: ["Ich wohne in…", "Mir ist wichtig, dass…", "Was mich manchmal stört, ist…", "In meinem Haus wird…", "Ich würde gern…"],
    model: "Ich wohne in einer Altbauwohnung im dritten Stock, mitten in der Stadt. Das Haus wurde vor hundert Jahren gebaut und letztes Jahr renoviert. Mir ist wichtig, dass meine Wohnung hell ist und dass ich zu Fuß einkaufen kann. Was mich manchmal stört, ist der Lärm von der Straße. In unserem Haus wird jeden Sommer ein Hoffest organisiert, und so lernen sich alle Nachbarn kennen. Später würde ich gern eine Wohnung mit Balkon haben." });

  W.WRITING_GUIDE["b1-3"] = { genre: "A short formal message (Goethe B1, writing part 3)", genre_fr: "Un court message formel (Goethe B1, écrit partie 3)",
    plan: [["A formal greeting with the person's name.", "Une formule d'appel formelle avec le nom de la personne."], ["The problem, and since when.", "Le problème, et depuis quand."], ["A second problem or a detail (passive).", "Un deuxième problème ou une précision (passif)."], ["A polite request: when will it be repaired?", "Une demande polie : quand sera-ce réparé ?"], ["When you're at home, thanks, formal closing.", "Quand tu es chez toi, des remerciements, la formule finale."]],
    marks: [["Sehr geehrter Herr Brenner,", "a formal greeting with the name", "une formule d'appel avec le nom"], ["seit Montag funktioniert die Heizung", "seit + present: still going on", "seit + présent : ça dure encore"], ["wurde das Licht im Treppenhaus noch nicht repariert", "passive in the Präteritum", "passif au prétérit"], ["Könnten Sie mir bitte mitteilen", "a polite request", "une demande polie"], ["wann die Heizung repariert wird", "an indirect question in the passive", "une question indirecte au passif"], ["Mit freundlichen Grüßen", "the formal closing", "la formule finale"]] };

  W.COURSE.push({ id: "b1-3", level: "B1", icon: "building", title: "Housing and neighbours", title_fr: "Logement et voisinage",
    intro: "In this unit, you'll talk about where you live: the passive in the present, the past and with modal verbs (Der Müll wird abgeholt, Das Haus wurde 1910 gebaut, Das muss repariert werden), German house rules and quiet times, and how to complain, apologise and report a problem politely.",
    intro_fr: "Dans cette unité, tu vas parler de ton logement : le passif au présent, au passé et avec les verbes de modalité (Der Müll wird abgeholt, Das Haus wurde 1910 gebaut, Das muss repariert werden), le règlement intérieur et les heures de calme, et comment se plaindre, s'excuser et signaler un problème poliment.",
    can: ["Use the passive in the present, the Präteritum and the Perfekt", "Use the passive with modal verbs (muss repariert werden)", "Understand house rules and quiet times", "Complain, apologise and react politely as a neighbour", "Write a short formal message about a problem (Goethe B1)"],
    can_fr: ["Employer le passif au présent, au prétérit et au Perfekt", "Employer le passif avec les verbes de modalité (muss repariert werden)", "Comprendre un règlement intérieur et les heures de calme", "Se plaindre, s'excuser et réagir poliment entre voisins", "Écrire un court message formel sur un problème (Goethe B1)"],
    lessons: [49, 50, 51], vocab: ["hausDE", "reparaturDE"], reading: "schrebergarten", prompt: "de-b1-3",
    writing: { task: "The heating in your flat has not worked since Monday, and the light in the stairwell is still broken. Write to the caretaker, Herr Brenner (50-70 words): describe the problems, ask when they will be repaired, and say when you're at home.", task_fr: "Le chauffage de ton logement ne marche plus depuis lundi, et la lumière de la cage d'escalier est toujours en panne. Écris au gardien, M. Brenner (50 à 70 mots) : décris les problèmes, demande quand ils seront réparés, et dis quand tu es chez toi.", words: "50-70",
      tips: ["Sehr geehrter Herr Brenner,", "seit … funktioniert … nicht mehr", "Außerdem wurde … noch nicht repariert.", "Könnten Sie mir bitte mitteilen, wann…?", "Mit freundlichen Grüßen"],
      checklist: ["I used a formal greeting and closing", "I described the problem and since when", "I used the passive at least once", "I asked politely when it will be repaired", "I wrote between 50 and 70 words"],
      checklist_fr: ["J'ai employé une formule d'appel et une formule finale formelles", "J'ai décrit le problème et depuis quand", "J'ai employé au moins une fois le passif", "J'ai demandé poliment quand ce sera réparé", "J'ai écrit entre 50 et 70 mots"],
      model: "Sehr geehrter Herr Brenner,\n\nseit Montag funktioniert die Heizung in meiner Wohnung nicht mehr, und es ist nachts sehr kalt. Außerdem wurde das Licht im Treppenhaus noch nicht repariert. Könnten Sie mir bitte mitteilen, wann die Heizung repariert wird? Ich bin jeden Tag ab 17 Uhr zu Hause.\n\nVielen Dank im Voraus!\n\nMit freundlichen Grüßen\nKim Sander" } });
})();
