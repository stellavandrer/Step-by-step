/* Cours d'allemand, unité A2-6 « Media and communication / Médias et communication » : le Konjunktiv II de politesse,
   des souhaits et des conseils (könnte, hätte, wäre, würde, sollte), l'infinitif avec zu, le téléphone et l'e-mail formel.
   Explications et traductions en anglais ET en français. Personnages fictifs, prénoms allemands.
   Faits vérifiables seulement : au téléphone, on répond souvent par son nom de famille et on se quitte sur
   « Auf Wiederhören » ; l'alphabet d'épellation officiel (DIN 5009) utilise des noms de villes depuis 2022
   (A wie Aachen, B wie Berlin…), l'ancien (A wie Anton…) reste courant ; pas de virgule après « Mit freundlichen
   Grüßen », minuscule après la formule d'appel. Philipp Reis (1834-1874), enseignant à Friedrichsdorf près de
   Francfort, présente en octobre 1861 à Francfort un appareil qu'il appelle « Telephon » ; la phrase « Das Pferd
   frisst keinen Gurkensalat » est rapportée par la tradition (présentée comme telle) ; brevet de Bell en 1876. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "medienDE", icon: "smartphone", title: "Media and phones", title_fr: "Les médias et le portable", level: "A2", words: [
    ["das Ladegerät, -e", "the charger", "le chargeur", "Hast du ein Ladegerät für mein Handy?"],
    ["aufladen", "to charge (a battery)", "recharger", "Kann ich hier mein Handy aufladen?"],
    ["der Akku, -s", "the (rechargeable) battery", "la batterie", "Mein Akku ist fast leer."],
    ["die Nachricht, -en", "the message; (pl) the news", "le message ; (pl) les informations", "Ich schreibe dir gleich eine Nachricht."],
    ["schicken", "to send", "envoyer", "Schick mir bitte die Adresse!"],
    ["der Anhang, ¨-e", "the attachment", "la pièce jointe", "Die Rechnung finden Sie im Anhang."],
    ["herunterladen", "to download", "télécharger", "Du kannst die App kostenlos herunterladen."],
    ["das Passwort, ¨-er", "the password", "le mot de passe", "Ich habe mein Passwort vergessen."],
    ["der Bildschirm, -e", "the screen", "l'écran", "Der Bildschirm von meinem Handy ist kaputt."],
    ["die Zeitung, -en", "the newspaper", "le journal", "Mein Opa liest jeden Morgen die Zeitung."],
    ["die Zeitschrift, -en", "the magazine", "le magazine, la revue", "Am Kiosk gibt es viele Zeitschriften."],
    ["der Sender, -", "the (TV or radio) channel, the station", "la chaîne, la station", "Auf welchem Sender läuft das Spiel?"],
    ["die Sendung, -en", "the programme, the show", "l'émission", "Die Sendung fängt um acht an."],
    ["die Nachrichten (pl)", "the news", "les informations, le journal télévisé", "Um acht Uhr kommen die Nachrichten."],
    ["im Internet surfen", "to surf the internet", "surfer sur Internet", "Abends surfe ich oft im Internet."],
    ["die Werbung", "advertising, adverts", "la publicité", "Die Werbung im Fernsehen nervt mich."],
    ["benutzen", "to use", "utiliser", "Wie lange benutzt du dein Handy am Tag?"]
  ] },
  { id: "telefonDE", icon: "phone-call", title: "On the phone", title_fr: "Au téléphone", level: "A2", words: [
    ["zurückrufen", "to call back", "rappeler", "Können Sie mich bitte zurückrufen?"],
    ["… am Apparat.", "… speaking (on the phone)", "… à l'appareil", "Lehmann am Apparat."],
    ["Wer spricht da, bitte?", "who's speaking, please?", "qui est à l'appareil, s'il vous plaît ?", "Hallo? Wer spricht da, bitte?"],
    ["Einen Moment, bitte.", "one moment, please", "un instant, s'il vous plaît", "Einen Moment, bitte, ich schaue nach."],
    ["Ich verbinde Sie.", "I'll put you through.", "je vous passe la communication", "Einen Moment, ich verbinde Sie mit Herrn Krause."],
    ["besetzt", "engaged, busy (line); taken (seat)", "occupé", "Ich rufe an, aber es ist immer besetzt."],
    ["erreichen", "to reach (someone)", "joindre", "Ich habe dich gestern nicht erreicht."],
    ["die Mailbox, -en", "the voicemail", "la messagerie vocale, le répondeur", "Ich spreche dir auf die Mailbox."],
    ["eine Nachricht hinterlassen", "to leave a message", "laisser un message", "Möchten Sie eine Nachricht hinterlassen?"],
    ["auflegen", "to hang up", "raccrocher", "Bitte legen Sie nicht auf!"],
    ["sich verwählen", "to dial the wrong number", "se tromper de numéro", "Entschuldigung, ich habe mich verwählt."],
    ["die Leitung, -en", "the (phone) line", "la ligne (téléphonique)", "Die Leitung ist leider besetzt."],
    ["die Verbindung, -en", "the connection, the line", "la connexion, la communication", "Die Verbindung ist sehr schlecht."],
    ["die Durchwahl, -en", "the direct line, the extension", "la ligne directe, le poste", "Meine Durchwahl ist die 214."],
    ["Auf Wiederhören!", "goodbye (on the phone)", "au revoir (au téléphone)", "Vielen Dank, auf Wiederhören!"]
  ] },
  { id: "hoeflichDE", icon: "handshake", title: "Asking politely", title_fr: "Demander poliment", level: "A2", words: [
    ["Könnten Sie …?", "could you …?", "pourriez-vous … ?", "Könnten Sie mir bitte helfen?"],
    ["Würden Sie …?", "would you …?", "voudriez-vous … ?", "Würden Sie bitte das Fenster schließen?"],
    ["Hätten Sie …?", "would you have …?", "auriez-vous … ?", "Hätten Sie kurz Zeit?"],
    ["Wäre es möglich, …?", "would it be possible …?", "serait-il possible … ?", "Wäre es möglich, den Termin zu verschieben?"],
    ["Ich würde gern …", "I'd like to …", "j'aimerais …", "Ich würde gern einen Deutschkurs machen."],
    ["Du solltest …", "you should …", "tu devrais …", "Du solltest mehr schlafen."],
    ["An deiner Stelle würde ich …", "if I were you, I'd …", "à ta place, je …", "An deiner Stelle würde ich das Handy ausschalten."],
    ["der Ratschlag, ¨-e", "the piece of advice", "le conseil", "Kannst du mir einen Ratschlag geben?"],
    ["versuchen", "to try", "essayer", "Ich versuche, jeden Tag Deutsch zu sprechen."],
    ["vorhaben", "to plan, to intend", "prévoir, avoir l'intention de", "Was hast du am Wochenende vor?"],
    ["sich bedanken", "to say thank you", "remercier", "Ich möchte mich für Ihre Hilfe bedanken."],
    ["die Bitte, -n", "the request", "la demande, la prière", "Ich habe eine Bitte: Könnten Sie mir helfen?"],
    ["Es ist wichtig, … zu …", "it's important to …", "il est important de …", "Es ist wichtig, genug zu schlafen."],
    ["Sehr geehrte Damen und Herren,", "Dear Sir or Madam,", "Madame, Monsieur,", "Sehr geehrte Damen und Herren, ich habe eine Frage zu Ihrem Kurs."],
    ["Mit freundlichen Grüßen", "Yours sincerely, kind regards", "cordialement, veuillez agréer…", "Mit freundlichen Grüßen, Lea Sommer"],
    ["der Betreff", "the subject (of an email)", "l'objet (d'un e-mail)", "Betreff: Anmeldung zum Abendkurs"],
    ["im Voraus", "in advance", "d'avance", "Vielen Dank im Voraus!"]
  ] });

  W.LESSONS.push(
  {
    id: 37, level: "A2", icon: "message-circle",
    title: "Könnten Sie…? Polite requests, wishes and advice", title_fr: "Könnten Sie… ? Demandes polies, souhaits et conseils",
    subtitle: "The Konjunktiv II makes a request softer, like English “could” and “would”.", subtitle_fr: "Le Konjunktiv II adoucit une demande, comme le conditionnel français.",
    body: `
<h2>Being polite: könnte, hätte, wäre, würde</h2>
<p>To make a request softer, German uses the <b>Konjunktiv II</b>, like English "could" and "would": <s-de>Kannst du mir helfen?</s-de> → <s-de>Könntest du mir helfen?</s-de> · <s-de>Haben Sie Zeit?</s-de> → <s-de>Hätten Sie kurz Zeit?</s-de> · <s-de>Ist es möglich?</s-de> → <s-de>Wäre es möglich?</s-de></p>
<table>
<tr><th>Verb</th><th>ich, er, sie</th><th>wir, Sie</th></tr>
<tr><td><s-de>können</s-de></td><td><s-de>könnte</s-de></td><td><s-de>könnten</s-de></td></tr>
<tr><td><s-de>haben</s-de></td><td><s-de>hätte</s-de></td><td><s-de>hätten</s-de></td></tr>
<tr><td><s-de>sein</s-de></td><td><s-de>wäre</s-de></td><td><s-de>wären</s-de></td></tr>
<tr><td><s-de>werden</s-de></td><td><s-de>würde</s-de></td><td><s-de>würden</s-de></td></tr>
<tr><td><s-de>sollen</s-de></td><td><s-de>sollte</s-de></td><td><s-de>sollten</s-de></td></tr>
</table>
<p>With <s-de>du</s-de>, add -st: <s-de>du könntest, du hättest, du wärst, du würdest, du solltest</s-de>. For most other verbs, use <s-de>würde</s-de> + the infinitive at the end: <s-de>Würden Sie bitte langsamer sprechen?</s-de></p>
<h2>Wishes: ich würde gern, ich hätte gern</h2>
<p><s-de>Ich würde gern nach Wien fahren.</s-de> (I'd like to go to Vienna.) · <s-de>Ich hätte gern einen Kaffee.</s-de> (I'd like a coffee.) · <s-de>Ich wäre jetzt gern am Meer.</s-de> (I'd love to be at the seaside now.)</p>
<h2>Advice: du solltest</h2>
<p><s-de>Du solltest mehr schlafen.</s-de> (You should sleep more.) · <s-de>Du könntest einen Kurs machen.</s-de> (You could take a course.) · <s-de>An deiner Stelle würde ich zum Arzt gehen.</s-de> (If I were you, I'd go to the doctor.)</p>
<div class="tip">The umlaut makes all the difference: <s-de>konnte</s-de> is the past (was able to), <s-de>könnte</s-de> is polite or possible (could); <s-de>hatte</s-de> = had, <s-de>hätte</s-de> = would have. Only <s-de>sollte</s-de> has no umlaut.</div>
`,
    body_fr: `
<h2>Être poli : könnte, hätte, wäre, würde</h2>
<p>Pour adoucir une demande, l'allemand emploie le <b>Konjunktiv II</b>, qui joue le rôle du conditionnel français : <s-de>Kannst du mir helfen?</s-de> → <s-de>Könntest du mir helfen?</s-de> (Tu pourrais m'aider ?) · <s-de>Haben Sie Zeit?</s-de> → <s-de>Hätten Sie kurz Zeit?</s-de> (Auriez-vous un moment ?) · <s-de>Ist es möglich?</s-de> → <s-de>Wäre es möglich?</s-de> (Serait-il possible ?)</p>
<table>
<tr><th>Verbe</th><th>ich, er, sie</th><th>wir, Sie</th></tr>
<tr><td><s-de>können</s-de></td><td><s-de>könnte</s-de></td><td><s-de>könnten</s-de></td></tr>
<tr><td><s-de>haben</s-de></td><td><s-de>hätte</s-de></td><td><s-de>hätten</s-de></td></tr>
<tr><td><s-de>sein</s-de></td><td><s-de>wäre</s-de></td><td><s-de>wären</s-de></td></tr>
<tr><td><s-de>werden</s-de></td><td><s-de>würde</s-de></td><td><s-de>würden</s-de></td></tr>
<tr><td><s-de>sollen</s-de></td><td><s-de>sollte</s-de></td><td><s-de>sollten</s-de></td></tr>
</table>
<p>Avec <s-de>du</s-de>, on ajoute -st : <s-de>du könntest, du hättest, du wärst, du würdest, du solltest</s-de>. Pour la plupart des autres verbes, on emploie <s-de>würde</s-de> + l'infinitif à la fin : <s-de>Würden Sie bitte langsamer sprechen?</s-de> (Pourriez-vous parler plus lentement ?)</p>
<h2>Les souhaits : ich würde gern, ich hätte gern</h2>
<p><s-de>Ich würde gern nach Wien fahren.</s-de> (J'aimerais aller à Vienne.) · <s-de>Ich hätte gern einen Kaffee.</s-de> (Je voudrais un café.) · <s-de>Ich wäre jetzt gern am Meer.</s-de> (J'aimerais être à la mer en ce moment.)</p>
<h2>Les conseils : du solltest</h2>
<p><s-de>Du solltest mehr schlafen.</s-de> (Tu devrais dormir plus.) · <s-de>Du könntest einen Kurs machen.</s-de> (Tu pourrais suivre un cours.) · <s-de>An deiner Stelle würde ich zum Arzt gehen.</s-de> (À ta place, j'irais chez le médecin.)</p>
<div class="tip">C'est le tréma qui fait toute la différence : <s-de>konnte</s-de> est le passé (pouvait, a pu), <s-de>könnte</s-de> est poli ou hypothétique (pourrait) ; <s-de>hatte</s-de> = avait, <s-de>hätte</s-de> = aurait. Seul <s-de>sollte</s-de> n'a pas de tréma.</div>
`,
    examples: [
      ["Könnten Sie mir bitte helfen?", "Could you help me, please?", "Pourriez-vous m'aider, s'il vous plaît ?"],
      ["Hätten Sie kurz Zeit für mich?", "Would you have a moment for me?", "Auriez-vous un moment pour moi ?"],
      ["Wäre es möglich, morgen anzurufen?", "Would it be possible to call tomorrow?", "Serait-il possible d'appeler demain ?"],
      ["Ich würde gern im Sommer nach Hamburg fahren.", "I'd like to go to Hamburg in the summer.", "J'aimerais aller à Hambourg cet été."],
      ["Würden Sie bitte etwas langsamer sprechen?", "Would you speak a little more slowly, please?", "Pourriez-vous parler un peu plus lentement, s'il vous plaît ?"],
      ["Du solltest nicht so lange am Handy sein.", "You shouldn't spend so long on your phone.", "Tu ne devrais pas passer autant de temps sur ton portable."],
      ["An deiner Stelle würde ich das Handy nachts ausschalten.", "If I were you, I'd switch my phone off at night.", "À ta place, j'éteindrais mon portable la nuit."]
    ],
    quiz: [
      { q: "“___ Sie mir bitte helfen?” (polite)", q_fr: "« ___ Sie mir bitte helfen? » (poli)", o: ["Könnten", "Konnten", "Können"], a: 0, ex: "Polite request: könnten (Konjunktiv II). Konnten is the past.", ex_fr: "Demande polie : könnten (Konjunktiv II). Konnten est le passé." },
      { q: "“Ich ___ gern ein Glas Wasser.”", q_fr: "« Ich ___ gern ein Glas Wasser. »", o: ["hätte", "hatte", "hätten"], a: 0, ex: "Ich hätte gern = I'd like (polite).", ex_fr: "Ich hätte gern = je voudrais (poli)." },
      { q: "Advice: “You should go to the doctor.”", q_fr: "Un conseil : « Tu devrais aller chez le médecin. »", o: ["Du solltest zum Arzt gehen.", "Du sollst zum Arzt gehen.", "Du solltest gehen zum Arzt."], a: 0, ex: "Advice: solltest; the infinitive at the end.", ex_fr: "Un conseil : solltest ; l'infinitif à la fin." },
      { q: "“If I were you, I'd stay at home.”", q_fr: "« À ta place, je resterais à la maison. »", o: ["An deiner Stelle würde ich zu Hause bleiben.", "An deiner Stelle ich würde zu Hause bleiben.", "An deiner Stelle würde ich bleiben zu Hause."], a: 0, ex: "Verb second (würde ich), infinitive at the end.", ex_fr: "Verbe en deuxième position (würde ich), infinitif à la fin." },
      { q: "“Would it be possible?”", q_fr: "« Serait-il possible ? »", o: ["Wäre es möglich?", "War es möglich?", "Würde es möglich?"], a: 0, ex: "sein → wäre.", ex_fr: "sein → wäre." }
    ]
  },
  {
    id: 38, level: "A2", icon: "target",
    title: "Hast du Lust, … zu …? The infinitive with zu", title_fr: "Hast du Lust, … zu … ? L'infinitif avec zu",
    subtitle: "After many verbs and expressions, the second verb goes to the end with zu, like English “to”.", subtitle_fr: "Après beaucoup de verbes et d'expressions, le deuxième verbe part à la fin avec zu, comme « de » ou « à » en français.",
    body: `
<h2>zu + infinitive at the end</h2>
<p>After many verbs and expressions, the second verb goes to the very end with <s-de>zu</s-de>, like English "to": <s-de>Ich versuche, jeden Tag Deutsch zu sprechen.</s-de> · <s-de>Hast du Lust, ins Kino zu gehen?</s-de> · <s-de>Ich habe keine Zeit, die E-Mail zu lesen.</s-de> · <s-de>Es ist wichtig, genug zu schlafen.</s-de></p>
<p>Common verbs and expressions: <s-de>versuchen, vergessen, anfangen, aufhören, vorhaben, hoffen, Lust haben, Zeit haben, es ist wichtig / schön / schwer</s-de>. A comma usually comes before the zu part.</p>
<h2>Separable verbs: zu in the middle</h2>
<p><s-de>anrufen</s-de> → <s-de>anzurufen</s-de> · <s-de>aufhören</s-de> → <s-de>aufzuhören</s-de> · <s-de>einkaufen</s-de> → <s-de>einzukaufen</s-de>: <s-de>Vergiss nicht, mich anzurufen!</s-de> · <s-de>Ich habe vor, morgen einzukaufen.</s-de></p>
<h2>No zu after modal verbs</h2>
<p><s-de>Ich muss heute arbeiten.</s-de> (not "zu arbeiten") · <s-de>Ich möchte dich anrufen.</s-de> · <s-de>Ich würde gern kommen.</s-de> English does the same: "I must work", not "I must to work".</p>
<div class="tip">Careful with the word order: everything else comes before <s-de>zu</s-de> + infinitive. English says "I try to speak German every day"; German says <s-de>Ich versuche, jeden Tag Deutsch zu sprechen</s-de>, with the verb last.</div>
`,
    body_fr: `
<h2>zu + infinitif à la fin</h2>
<p>Après beaucoup de verbes et d'expressions, le deuxième verbe part tout à la fin avec <s-de>zu</s-de>, qui correspond au « de » ou au « à » français : <s-de>Ich versuche, jeden Tag Deutsch zu sprechen.</s-de> (J'essaie de parler allemand tous les jours.) · <s-de>Hast du Lust, ins Kino zu gehen?</s-de> (Tu as envie d'aller au cinéma ?) · <s-de>Ich habe keine Zeit, die E-Mail zu lesen.</s-de> · <s-de>Es ist wichtig, genug zu schlafen.</s-de></p>
<p>Verbes et expressions courants : <s-de>versuchen, vergessen, anfangen, aufhören, vorhaben, hoffen, Lust haben, Zeit haben, es ist wichtig / schön / schwer</s-de>. On met en général une virgule avant le groupe avec zu.</p>
<h2>Les verbes séparables : zu au milieu</h2>
<p><s-de>anrufen</s-de> → <s-de>anzurufen</s-de> · <s-de>aufhören</s-de> → <s-de>aufzuhören</s-de> · <s-de>einkaufen</s-de> → <s-de>einzukaufen</s-de> : <s-de>Vergiss nicht, mich anzurufen!</s-de> (N'oublie pas de m'appeler !) · <s-de>Ich habe vor, morgen einzukaufen.</s-de></p>
<h2>Pas de zu après les verbes de modalité</h2>
<p><s-de>Ich muss heute arbeiten.</s-de> (et non « zu arbeiten ») · <s-de>Ich möchte dich anrufen.</s-de> · <s-de>Ich würde gern kommen.</s-de> Le français fait pareil : « je dois travailler », sans « de ».</p>
<div class="tip">Attention à l'ordre des mots : tout le reste vient avant <s-de>zu</s-de> + infinitif. Le français dit « j'essaie de parler allemand tous les jours » ; l'allemand dit <s-de>Ich versuche, jeden Tag Deutsch zu sprechen</s-de>, avec le verbe en dernier.</div>
`,
    examples: [
      ["Ich versuche, jeden Tag zehn Minuten Deutsch zu hören.", "I try to listen to German for ten minutes every day.", "J'essaie d'écouter de l'allemand dix minutes par jour."],
      ["Hast du Lust, heute Abend einen Film zu sehen?", "Do you feel like watching a film tonight?", "Tu as envie de regarder un film ce soir ?"],
      ["Ich habe keine Zeit, alle Nachrichten zu lesen.", "I don't have time to read all the messages.", "Je n'ai pas le temps de lire tous les messages."],
      ["Vergiss nicht, deine Oma anzurufen!", "Don't forget to call your grandma!", "N'oublie pas d'appeler ta grand-mère !"],
      ["Es ist wichtig, ein gutes Passwort zu haben.", "It's important to have a good password.", "Il est important d'avoir un bon mot de passe."],
      ["Ich habe aufgehört, abends Videos zu schauen.", "I've stopped watching videos in the evening.", "J'ai arrêté de regarder des vidéos le soir."],
      ["Wir haben vor, im Herbst umzuziehen.", "We're planning to move in the autumn.", "Nous prévoyons de déménager à l'automne."]
    ],
    quiz: [
      { q: "“Hast du Lust, ins Kino ___?”", q_fr: "« Hast du Lust, ins Kino ___? »", o: ["zu gehen", "gehen", "zu gehst"], a: 0, ex: "Lust haben + zu + infinitive at the end.", ex_fr: "Lust haben + zu + infinitif à la fin." },
      { q: "“Vergiss nicht, mich ___!” (anrufen)", q_fr: "« Vergiss nicht, mich ___! » (anrufen)", o: ["anzurufen", "zu anrufen", "anrufen"], a: 0, ex: "Separable verb: zu in the middle, anzurufen.", ex_fr: "Verbe séparable : zu au milieu, anzurufen." },
      { q: "Which sentence is correct?", q_fr: "Quelle phrase est correcte ?", o: ["Ich muss heute arbeiten.", "Ich muss heute zu arbeiten.", "Ich muss zu heute arbeiten."], a: 0, ex: "No zu after modal verbs.", ex_fr: "Pas de zu après les verbes de modalité." },
      { q: "“It's important to sleep enough.”", q_fr: "« Il est important de dormir suffisamment. »", o: ["Es ist wichtig, genug zu schlafen.", "Es ist wichtig, zu schlafen genug.", "Es ist wichtig, genug schlafen."], a: 0, ex: "Everything else first, zu + infinitive last.", ex_fr: "Tout le reste d'abord, zu + infinitif en dernier." },
      { q: "“Ich habe aufgehört, so viel Kaffee ___.”", q_fr: "« Ich habe aufgehört, so viel Kaffee ___. »", o: ["zu trinken", "trinken", "getrunken"], a: 0, ex: "aufhören + zu + infinitive.", ex_fr: "aufhören + zu + infinitif." }
    ]
  },
  {
    id: 39, level: "A2", kind: "functional", icon: "phone-call",
    title: "Everyday German: on the phone and formal emails", title_fr: "L'allemand de tous les jours : au téléphone et par e-mail",
    subtitle: "Answer and make a call, leave a message, spell your name, and write a formal email.", subtitle_fr: "Répondre et appeler, laisser un message, épeler ton nom, et écrire un e-mail formel.",
    body: `
<h2>Answering the phone</h2>
<p>Many Germans answer the phone with their surname: <s-de>Lehmann.</s-de> or <s-de>Lehmann, guten Tag.</s-de> When you call, say who you are: <s-de>Guten Tag, hier ist Lea Sommer.</s-de> (Hello, this is Lea Sommer.) Then: <s-de>Ich möchte bitte Herrn Krause sprechen.</s-de></p>
<h2>Useful phrases</h2>
<p><s-de>Einen Moment, bitte, ich verbinde Sie.</s-de> (One moment, I'll put you through.) · <s-de>Herr Krause ist gerade nicht da. Möchten Sie eine Nachricht hinterlassen?</s-de> · <s-de>Könnten Sie das bitte wiederholen?</s-de> · <s-de>Die Verbindung ist schlecht.</s-de> At the end, you don't say <s-de>Auf Wiedersehen</s-de> (see you again) but <s-de>Auf Wiederhören!</s-de> (hear you again): on the phone, you don't see each other.</p>
<h2>Spelling your name</h2>
<p>To spell on the phone, many people say <s-de>A wie Anton, B wie Berta…</s-de> Since 2022, the official German spelling alphabet (the DIN 5009 standard) uses city names: <s-de>A wie Aachen, B wie Berlin, C wie Chemnitz…</s-de> Both are understood. <s-de>Sommer: S wie Salzwedel, O wie Offenbach, M wie München, M wie München, E wie Essen, R wie Rostock.</s-de></p>
<h2>A formal email</h2>
<p><s-de>Betreff: Anfrage zum Abendkurs</s-de> (Subject: enquiry about the evening course) · <s-de>Sehr geehrte Frau Weber,</s-de> or, if you don't know the name, <s-de>Sehr geehrte Damen und Herren,</s-de> After the comma, the next line starts with a <b>lower-case</b> letter (unless it's a noun or <s-de>Sie</s-de>): <s-de>ich interessiere mich für Ihren Kurs.</s-de> To finish: <s-de>Mit freundlichen Grüßen</s-de>, with no comma, then your name.</p>
<div class="tip">In a formal email, always use <s-de>Sie</s-de>, and write <s-de>Sie, Ihnen, Ihr</s-de> with a capital letter. Polite forms from lesson 37 are perfect here: <s-de>Könnten Sie mir bitte sagen, …?</s-de> · <s-de>Ich wäre Ihnen dankbar, wenn…</s-de></div>
`,
    body_fr: `
<h2>Répondre au téléphone</h2>
<p>Beaucoup d'Allemands répondent au téléphone par leur nom de famille : <s-de>Lehmann.</s-de> ou <s-de>Lehmann, guten Tag.</s-de> Quand tu appelles, dis qui tu es : <s-de>Guten Tag, hier ist Lea Sommer.</s-de> (Bonjour, c'est Lea Sommer.) Puis : <s-de>Ich möchte bitte Herrn Krause sprechen.</s-de> (Je voudrais parler à M. Krause.)</p>
<h2>Expressions utiles</h2>
<p><s-de>Einen Moment, bitte, ich verbinde Sie.</s-de> (Un instant, je vous le passe.) · <s-de>Herr Krause ist gerade nicht da. Möchten Sie eine Nachricht hinterlassen?</s-de> · <s-de>Könnten Sie das bitte wiederholen?</s-de> · <s-de>Die Verbindung ist schlecht.</s-de> À la fin, on ne dit pas <s-de>Auf Wiedersehen</s-de> (au plaisir de se revoir) mais <s-de>Auf Wiederhören!</s-de> (au plaisir de s'entendre) : au téléphone, on ne se voit pas.</p>
<h2>Épeler son nom</h2>
<p>Pour épeler au téléphone, beaucoup de gens disent <s-de>A wie Anton, B wie Berta…</s-de> (A comme Anton…). Depuis 2022, l'alphabet d'épellation officiel allemand (la norme DIN 5009) utilise des noms de villes : <s-de>A wie Aachen, B wie Berlin, C wie Chemnitz…</s-de> Les deux sont compris. <s-de>Sommer: S wie Salzwedel, O wie Offenbach, M wie München, M wie München, E wie Essen, R wie Rostock.</s-de></p>
<h2>Un e-mail formel</h2>
<p><s-de>Betreff: Anfrage zum Abendkurs</s-de> (Objet : demande d'informations sur le cours du soir) · <s-de>Sehr geehrte Frau Weber,</s-de> ou, si tu ne connais pas le nom, <s-de>Sehr geehrte Damen und Herren,</s-de> (Madame, Monsieur,). Après la virgule, la ligne suivante commence par une <b>minuscule</b> (sauf un nom ou <s-de>Sie</s-de>) : <s-de>ich interessiere mich für Ihren Kurs.</s-de> Pour finir : <s-de>Mit freundlichen Grüßen</s-de>, sans virgule, puis ton nom.</p>
<div class="tip">Dans un e-mail formel, on emploie toujours <s-de>Sie</s-de>, et on écrit <s-de>Sie, Ihnen, Ihr</s-de> avec une majuscule. Les formes polies de la leçon 37 sont parfaites ici : <s-de>Könnten Sie mir bitte sagen, …?</s-de> · <s-de>Ich wäre Ihnen dankbar, wenn…</s-de> (une formule de remerciement très polie).</div>
`,
    examples: [
      ["Lehmann, guten Tag.", "Lehmann speaking, hello.", "Lehmann, bonjour."],
      ["Guten Tag, hier ist Lea Sommer. Ich möchte bitte Herrn Krause sprechen.", "Hello, this is Lea Sommer. I'd like to speak to Mr Krause, please.", "Bonjour, c'est Lea Sommer. Je voudrais parler à M. Krause, s'il vous plaît."],
      ["Einen Moment, bitte, ich verbinde Sie.", "One moment, please, I'll put you through.", "Un instant, s'il vous plaît, je vous le passe."],
      ["Herr Krause ist gerade in einer Besprechung. Möchten Sie eine Nachricht hinterlassen?", "Mr Krause is in a meeting at the moment. Would you like to leave a message?", "M. Krause est en réunion. Voulez-vous laisser un message ?"],
      ["Könnten Sie Ihren Namen bitte buchstabieren?", "Could you spell your name, please?", "Pourriez-vous épeler votre nom, s'il vous plaît ?"],
      ["Vielen Dank, auf Wiederhören!", "Thank you very much, goodbye!", "Merci beaucoup, au revoir !"],
      ["Sehr geehrte Damen und Herren, ich interessiere mich für Ihren Abendkurs.", "Dear Sir or Madam, I'm interested in your evening course.", "Madame, Monsieur, votre cours du soir m'intéresse."]
    ],
    quiz: [
      { q: "At home, many Germans answer the phone with:", q_fr: "Chez eux, beaucoup d'Allemands répondent au téléphone par :", o: ["their surname: “Lehmann.”", "“Hallo, wer ist das?”", "“Ja, bitte, ich höre.”"], o_fr: ["leur nom de famille : « Lehmann. »", "« Hallo, wer ist das? »", "« Ja, bitte, ich höre. »"], a: 0, ex: "Lehmann. / Lehmann, guten Tag.", ex_fr: "Lehmann. / Lehmann, guten Tag." },
      { q: "At the end of a phone call:", q_fr: "À la fin d'un appel :", o: ["Auf Wiederhören!", "Auf Wiedersehen am Telefon!", "Bis zum Hören!"], a: 0, ex: "On the phone, you hear each other: Auf Wiederhören.", ex_fr: "Au téléphone, on s'entend : Auf Wiederhören." },
      { q: "“I'll put you through.”", q_fr: "« Je vous passe la communication. »", o: ["Ich verbinde Sie.", "Ich verbinde Ihnen.", "Ich verbinde mich Sie."], a: 0, ex: "jemanden verbinden: accusative, Sie.", ex_fr: "jemanden verbinden : accusatif, Sie." },
      { q: "After “Sehr geehrte Frau Weber,” the next word:", q_fr: "Après « Sehr geehrte Frau Weber, », le mot suivant :", o: ["starts with a lower-case letter (unless it's a noun or Sie)", "always starts with a capital letter", "is always “Ich”"], o_fr: ["commence par une minuscule (sauf un nom ou Sie)", "commence toujours par une majuscule", "est toujours « Ich »"], a: 0, ex: "ich interessiere mich…, with a lower-case i.", ex_fr: "ich interessiere mich…, avec un i minuscule." },
      { q: "“Mit freundlichen Grüßen” is:", q_fr: "« Mit freundlichen Grüßen », c'est :", o: ["the formal closing of an email or a letter", "a greeting at the start of an email", "what you say when you meet a friend"], o_fr: ["la formule de politesse à la fin d'un e-mail ou d'une lettre", "une formule d'appel au début d'un e-mail", "ce qu'on dit quand on croise un ami"], a: 0, ex: "Yours sincerely / Kind regards, with no comma after it.", ex_fr: "Cordialement / Veuillez agréer…, sans virgule après." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    37: {
      gap: [["___ Sie mir bitte helfen?", "Könnten", "können, polite", "können, poli"], ["Ich ___ gern einen Tee.", "hätte", "haben, polite", "haben, poli"], ["___ es möglich, morgen zu kommen? (sein)", "Wäre"], ["Du ___ mehr schlafen.", "solltest", "sollen, advice", "sollen, conseil"]],
      fix: [["Konnten Sie mir bitte helfen?", "Könnten Sie mir bitte helfen?", "Polite request: könnten, with an umlaut. Konnten is the past.", "Demande polie : könnten, avec un tréma. Konnten est le passé."], ["An deiner Stelle ich würde mehr lernen.", "An deiner Stelle würde ich mehr lernen.", "After An deiner Stelle, the verb comes second: würde ich.", "Après An deiner Stelle, le verbe vient en deuxième position : würde ich."]],
      task: ["A friend spends too much time on the phone. Give four pieces of advice with du solltest, du könntest and an deiner Stelle würde ich.", "Une personne de ton entourage passe trop de temps sur son portable. Donne quatre conseils avec du solltest, du könntest et an deiner Stelle würde ich.", "Du solltest das Handy abends in die Küche legen. Du könntest einen richtigen Wecker kaufen. An deiner Stelle würde ich die Nachrichten von den Apps ausschalten. Und du solltest am Wochenende mehr nach draußen gehen."]
    },
    38: {
      gap: [["Hast du Lust, ins Kino ___? (gehen)", "zu gehen"], ["Vergiss nicht, mich ___! (anrufen)", "anzurufen"], ["Ich versuche, jeden Tag Deutsch ___. (sprechen)", "zu sprechen"], ["Ich muss heute lange ___.", "arbeiten", "arbeiten; no zu after a modal verb", "arbeiten ; pas de zu après un verbe de modalité"]],
      fix: [["Ich habe keine Zeit, die E-Mail lesen.", "Ich habe keine Zeit, die E-Mail zu lesen.", "After keine Zeit haben: zu + infinitive.", "Après keine Zeit haben : zu + infinitif."], ["Ich habe vergessen, dich zu anrufen.", "Ich habe vergessen, dich anzurufen.", "Separable verb: zu goes in the middle, anzurufen.", "Verbe séparable : zu se place au milieu, anzurufen."]],
      task: ["Write four sentences about your plans and habits with versuchen, vorhaben, Lust haben and aufhören + zu.", "Écris quatre phrases sur tes projets et tes habitudes avec versuchen, vorhaben, Lust haben et aufhören + zu.", "Ich versuche, jeden Abend zwanzig Minuten zu lesen. Im Sommer habe ich vor, nach Österreich zu fahren. Heute habe ich keine Lust zu kochen. Und ich möchte aufhören, so viel Kaffee zu trinken."]
    },
    39: {
      gap: [["Lehmann am ___.", "Apparat"], ["Einen Moment, bitte, ich ___ Sie.", "verbinde"], ["Vielen Dank, auf ___!", "Wiederhören", "on the phone", "au téléphone"], ["Mit freundlichen ___", "Grüßen"]],
      fix: [["Sehr geehrte Damen und Herren, Ich habe eine Frage.", "Sehr geehrte Damen und Herren, ich habe eine Frage.", "After the greeting and its comma, start with a lower-case letter.", "Après la formule d'appel et sa virgule, on commence par une minuscule."], ["Am Telefon: Vielen Dank, auf Wiedersehen!", "Am Telefon: Vielen Dank, auf Wiederhören!", "On the phone, you don't see each other: auf Wiederhören.", "Au téléphone, on ne se voit pas : auf Wiederhören."]],
      task: ["Write what you say on the phone: you call a hotel, ask for the manager, Frau Bauer, who isn't there, and leave a message with your number.", "Écris ce que tu dis au téléphone : tu appelles un hôtel, tu demandes la directrice, Mme Bauer, qui n'est pas là, et tu laisses un message avec ton numéro.", "Guten Tag, hier ist Robin Keller. Ich möchte bitte Frau Bauer sprechen. Ach, sie ist nicht da? Könnte ich eine Nachricht hinterlassen? Frau Bauer soll mich bitte zurückrufen. Meine Nummer ist 0171 2345678. Vielen Dank, auf Wiederhören!"]
    }
  });

  W.ROLEPLAYS.push(
  { id: "internetservice", lesson: 39, level: "A2", icon: "phone-call", partner: "Herr Vogel", role: "an employee at your internet provider's customer service", role_fr: "un employé du service client de ton fournisseur d'accès",
    title: "Calling customer service", title_fr: "Appeler le service client",
    setting: "Your internet hasn't worked since yesterday. You call the customer service of your provider.", setting_fr: "Ton Internet ne marche plus depuis hier. Tu appelles le service client de ton fournisseur.",
    turns: [
      { p: "Kundenservice, Sie sprechen mit Jan Vogel. Was kann ich für Sie tun?", en: "Customer service, you're speaking to Jan Vogel. What can I do for you?", fr: "Service client, Jan Vogel à l'appareil. Que puis-je faire pour vous ?" },
      { y: ["Guten Tag! Mein Internet funktioniert seit gestern nicht mehr.", "Guten Tag! Mein Internet seit gestern nicht mehr funktioniert.", "Guten Tag! Mein Internet funktioniert nicht seit gestern mehr."], en: "Hello! My internet hasn't worked since yesterday.", fr: "Bonjour ! Mon Internet ne marche plus depuis hier.", why: "Main clause: the verb comes second; nicht mehr goes together.", why_fr: "Proposition principale : le verbe en deuxième position ; nicht mehr va ensemble." },
      { p: "Das tut mir leid. Könnten Sie mir bitte Ihre Kundennummer sagen?", en: "I'm sorry. Could you tell me your customer number, please?", fr: "Je suis désolé. Pourriez-vous me donner votre numéro client, s'il vous plaît ?" },
      { y: ["Ja, natürlich. Einen Moment, ich suche sie.", "Ja, natürlich. Einen Moment, ich sie suche.", "Ja, natürlich. Ein Moment, ich suche sie."], en: "Yes, of course. One moment, I'm looking for it.", fr: "Oui, bien sûr. Un instant, je le cherche.", why: "Einen Moment (accusative); the verb second: ich suche sie.", why_fr: "Einen Moment (accusatif) ; le verbe en deuxième position : ich suche sie." },
      { p: "Danke. Haben Sie schon versucht, den Router neu zu starten?", en: "Thank you. Have you already tried restarting the router?", fr: "Merci. Avez-vous déjà essayé de redémarrer le routeur ?" },
      { y: ["Ja, das habe ich schon zweimal versucht.", "Ja, das ich habe schon zweimal versucht.", "Ja, das habe ich schon zweimal versuchen."], en: "Yes, I've already tried twice.", fr: "Oui, j'ai déjà essayé deux fois.", why: "Perfekt: habe … versucht; verb second after das.", why_fr: "Perfekt : habe … versucht ; verbe en deuxième position après das." },
      { p: "Hm. Dann schicke ich Ihnen einen Techniker. Wäre Ihnen Donnerstag um zehn Uhr recht?", en: "Hm. Then I'll send you a technician. Would Thursday at ten suit you?", fr: "Hum. Alors je vous envoie un technicien. Jeudi à dix heures, ça vous irait ?" },
      { y: ["Donnerstag ist schlecht. Wäre es auch am Freitag möglich?", "Donnerstag ist schlecht. Wäre es auch am Freitag möglich sein?", "Donnerstag ist schlecht. Ist es auch am Freitag möglich wäre?"], en: "Thursday is bad. Would Friday also be possible?", fr: "Jeudi, ça ne va pas. Ce serait possible vendredi ?", why: "Wäre es möglich? (wäre replaces ist; no sein).", why_fr: "Wäre es möglich? (wäre remplace ist ; pas de sein)." },
      { p: "Ja, Freitag um vierzehn Uhr geht. Brauchen Sie sonst noch etwas?", en: "Yes, Friday at 2 pm is fine. Do you need anything else?", fr: "Oui, vendredi à quatorze heures, c'est possible. Vous avez besoin d'autre chose ?" },
      { y: ["Nein, danke. Könnten Sie mir die Uhrzeit bitte per E-Mail schicken?", "Nein, danke. Konnten Sie mir die Uhrzeit bitte per E-Mail schicken?", "Nein, danke. Könnten Sie mir die Uhrzeit bitte per E-Mail zu schicken?"], en: "No, thank you. Could you send me the time by email, please?", fr: "Non, merci. Pourriez-vous m'envoyer l'heure par e-mail, s'il vous plaît ?", why: "Polite: könnten (with an umlaut); no zu after a modal verb.", why_fr: "Poli : könnten (avec un tréma) ; pas de zu après un verbe de modalité." },
      { p: "Selbstverständlich. Vielen Dank für Ihren Anruf!", en: "Of course. Thank you for your call!", fr: "Bien sûr. Merci pour votre appel !" },
      { y: ["Ich danke Ihnen. Auf Wiederhören!", "Ich danke Ihnen. Auf Wiedersehen am Telefon!", "Ich danke Sie. Auf Wiederhören!"], en: "Thank you. Goodbye!", fr: "Merci à vous. Au revoir !", why: "danken + dative: Ihnen; on the phone: Auf Wiederhören.", why_fr: "danken + datif : Ihnen ; au téléphone : Auf Wiederhören." }
    ] },
  { id: "handyzeit", lesson: 38, level: "A2", icon: "smartphone", partner: "Mats", role: "a friend", role_fr: "un ami",
    title: "Too much screen time", title_fr: "Trop d'écran",
    setting: "Your friend Mats looks very tired. You talk about it and give him some advice.", setting_fr: "Ton ami Mats a l'air très fatigué. Vous en parlez et tu lui donnes quelques conseils.",
    turns: [
      { p: "Ich bin total müde. Ich schlafe seit Wochen schlecht.", en: "I'm totally exhausted. I've been sleeping badly for weeks.", fr: "Je suis complètement crevé. Je dors mal depuis des semaines." },
      { y: ["Oh nein! Wie lange bist du abends am Handy?", "Oh nein! Wie lange du bist abends am Handy?", "Oh nein! Wie lange bist du abends an Handy?"], en: "Oh no! How long are you on your phone in the evening?", fr: "Oh non ! Tu restes combien de temps sur ton portable le soir ?", why: "Question word, then the verb: Wie lange bist du…; am Handy.", why_fr: "Mot interrogatif, puis le verbe : Wie lange bist du… ; am Handy." },
      { p: "Ehrlich gesagt bis Mitternacht. Ich schaue Videos im Bett.", en: "To be honest, until midnight. I watch videos in bed.", fr: "Pour être honnête, jusqu'à minuit. Je regarde des vidéos au lit." },
      { y: ["An deiner Stelle würde ich das Handy um zehn ausschalten.", "An deiner Stelle ich würde das Handy um zehn ausschalten.", "An deiner Stelle würde ich das Handy um zehn ausschalten zu."], en: "If I were you, I'd switch the phone off at ten.", fr: "À ta place, j'éteindrais le portable à dix heures.", why: "Verb second: würde ich; the infinitive at the end, without zu.", why_fr: "Verbe en deuxième position : würde ich ; l'infinitif à la fin, sans zu." },
      { p: "Das ist schwer. Was soll ich denn im Bett machen?", en: "That's hard. So what am I supposed to do in bed?", fr: "C'est dur. Je fais quoi au lit, alors ?" },
      { y: ["Du könntest versuchen, ein Buch zu lesen.", "Du könntest versuchen, ein Buch lesen.", "Du könntest versuchen, ein Buch zu liest."], en: "You could try reading a book.", fr: "Tu pourrais essayer de lire un livre.", why: "versuchen + zu + infinitive.", why_fr: "versuchen + zu + infinitif." },
      { p: "Gute Idee. Und was machst du gegen Stress?", en: "Good idea. And what do you do about stress?", fr: "Bonne idée. Et toi, tu fais quoi contre le stress ?" },
      { y: ["Ich habe angefangen, jeden Morgen spazieren zu gehen.", "Ich habe angefangen, jeden Morgen zu spazieren gehen.", "Ich habe angefangen, jeden Morgen spazieren gehen."], en: "I've started going for a walk every morning.", fr: "J'ai commencé à aller me promener tous les matins.", why: "zu goes just before the last verb: spazieren zu gehen.", why_fr: "zu se place juste avant le dernier verbe : spazieren zu gehen." },
      { p: "Das klingt gut. Darf ich mal mitkommen?", en: "That sounds good. Can I come along some time?", fr: "Ça a l'air bien. Je peux venir avec toi, une fois ?" },
      { y: ["Klar! Hast du Lust, morgen um sieben mitzukommen?", "Klar! Hast du Lust, morgen um sieben zu mitkommen?", "Klar! Hast du Lust, morgen um sieben mitkommen?"], en: "Sure! Do you feel like coming along tomorrow at seven?", fr: "Bien sûr ! Tu as envie de venir demain à sept heures ?", why: "Separable verb: zu in the middle, mitzukommen.", why_fr: "Verbe séparable : zu au milieu, mitzukommen." },
      { p: "Um sieben? Okay… aber nur, wenn du mich anrufst!", en: "At seven? OK… but only if you call me!", fr: "À sept heures ? D'accord… mais seulement si tu m'appelles !" },
      { y: ["Versprochen! Und du solltest heute früh ins Bett gehen.", "Versprochen! Und du solltest heute früh ins Bett zu gehen.", "Versprochen! Und du solltet heute früh ins Bett gehen."], en: "Promise! And you should go to bed early tonight.", fr: "Promis ! Et tu devrais te coucher tôt ce soir.", why: "du solltest + infinitive, without zu.", why_fr: "du solltest + infinitif, sans zu." }
    ] }
  );

  W.READINGS.push({
    id: "philippreis", level: "A2", icon: "book-open", title: "Das Pferd frisst keinen Gurkensalat", genre: "Article",
    intro: "A German teacher built a “Telephon” fifteen years before Bell's patent. A text in the Präteritum.",
    intro_fr: "Un enseignant allemand a construit un « Telephon » quinze ans avant le brevet de Bell. Un texte au prétérit.",
    paragraphs: [
      { de: "Philipp Reis war Lehrer in Friedrichsdorf, einer kleinen Stadt bei Frankfurt am Main. In seiner Freizeit baute er technische Apparate. Er hatte eine große Idee: Er wollte Töne und Stimmen mit Strom übertragen.", en: "Philipp Reis was a teacher in Friedrichsdorf, a small town near Frankfurt am Main. In his free time he built technical devices. He had a big idea: he wanted to transmit sounds and voices with electricity.", fr: "Philipp Reis était enseignant à Friedrichsdorf, une petite ville près de Francfort-sur-le-Main. Pendant son temps libre, il construisait des appareils techniques. Il avait une grande idée : il voulait transmettre des sons et des voix grâce à l'électricité." },
      { de: "Im Oktober 1861 stellte er seinen Apparat in Frankfurt vor. Er nannte ihn „Telephon“. Ein Mensch sprach oder sang in den Apparat, und in einem anderen Raum konnte man ihn hören. Musik hörte man ziemlich gut, aber Wörter waren schwer zu verstehen.", en: "In October 1861 he presented his device in Frankfurt. He called it “Telephon”. A person spoke or sang into the device, and in another room you could hear them. You could hear music quite well, but words were hard to understand.", fr: "En octobre 1861, il présenta son appareil à Francfort. Il l'appela « Telephon ». Une personne parlait ou chantait dans l'appareil, et dans une autre pièce, on pouvait l'entendre. On entendait assez bien la musique, mais les mots étaient difficiles à comprendre." },
      { de: "Man erzählt, dass jemand bei einem Test einen seltsamen Satz in den Apparat sprach: „Das Pferd frisst keinen Gurkensalat.“ Warum so ein komischer Satz? Niemand konnte ihn raten. Wer ihn verstand, hatte ihn also wirklich gehört.", en: "People say that during a test, someone spoke a strange sentence into the device: “The horse doesn't eat cucumber salad.” Why such a funny sentence? Nobody could guess it. So anyone who understood it had really heard it.", fr: "On raconte que, lors d'un test, quelqu'un prononça une phrase étrange dans l'appareil : « Le cheval ne mange pas de salade de concombres. » Pourquoi une phrase aussi bizarre ? Personne ne pouvait la deviner. Celui qui la comprenait l'avait donc vraiment entendue." },
      { de: "Philipp Reis starb 1874, mit nur 40 Jahren. Zwei Jahre später bekam der Erfinder Alexander Graham Bell ein Patent für sein Telefon. Das Wort „Telephon“ aber hatte Philipp Reis schon fünfzehn Jahre früher benutzt.", en: "Philipp Reis died in 1874, aged only 40. Two years later, the inventor Alexander Graham Bell got a patent for his telephone. But Philipp Reis had already used the word “Telephon” fifteen years earlier.", fr: "Philipp Reis mourut en 1874, à seulement 40 ans. Deux ans plus tard, l'inventeur Alexander Graham Bell obtint un brevet pour son téléphone. Mais Philipp Reis avait déjà employé le mot « Telephon » quinze ans plus tôt." }
    ],
    glossary: { "Freizeit": ["free time", "temps libre"], "baute": ["built", "construisait"], "technische": ["technical", "techniques"], "Apparate": ["devices", "appareils"], "Apparat": ["device", "appareil"], "Töne": ["sounds", "sons"], "Stimmen": ["voices", "voix"], "Strom": ["electricity", "électricité"], "übertragen": ["to transmit", "transmettre"], "stellte": ["(stellte vor) presented", "(stellte vor) présenta"], "nannte": ["called, named", "appela"], "sang": ["sang", "chantait"], "Raum": ["room", "pièce"], "ziemlich": ["quite", "assez"], "seltsamen": ["strange", "étrange"], "Pferd": ["horse", "cheval"], "frisst": ["eats (an animal)", "mange (un animal)"], "Gurkensalat": ["cucumber salad", "salade de concombres"], "komischer": ["funny, strange", "bizarre"], "raten": ["to guess", "deviner"], "starb": ["died", "mourut"], "Erfinder": ["inventor", "inventeur"], "Patent": ["patent", "brevet"] },
    questions: [
      { q: "Was war Philipp Reis von Beruf?", o: ["Lehrer", "Arzt", "Bäcker"], a: 0 },
      { q: "Wie nannte Reis seinen Apparat?", o: ["„Telephon“", "„Radio“", "„Handy“"], a: 0 },
      { q: "Was konnte man mit dem Apparat ziemlich gut hören?", o: ["Musik", "Wörter", "Nichts"], a: 0 },
      { q: "Warum war der Satz über das Pferd gut für einen Test?", o: ["Niemand konnte ihn raten.", "Er war sehr kurz.", "Pferde mögen Gurkensalat."], a: 0 },
      { q: "Wann bekam Bell ein Patent für sein Telefon?", o: ["1876", "1861", "1874"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-a2-6", unit: "a2-6", level: "A2", icon: "messages-square",
    title: "Drei Nachrichten auf der Mailbox", title_fr: "Trois messages sur le répondeur",
    context: "Lea Sommer listens to the three new messages on her voicemail.", context_fr: "Lea Sommer écoute les trois nouveaux messages de sa messagerie.",
    words: [["die Autowerkstatt", "the garage (car repairs)", "le garage (réparations)"], ["abholen", "to pick up, to collect", "aller chercher, récupérer"], ["die Karte", "the ticket", "le billet"], ["verschieben", "to postpone, to move", "reporter, décaler"], ["die Praxis", "the (doctor's) practice", "le cabinet médical"]],
    lines: [["Mailbox", "Sie haben drei neue Nachrichten. Erste Nachricht:", "de-DE"], ["Herr Brandt", "Guten Tag, Frau Sommer, hier ist Brandt von der Autowerkstatt Brandt. Ihr Auto ist fertig. Sie können es ab drei Uhr abholen. Wir haben bis achtzehn Uhr geöffnet. Auf Wiederhören!", "de-DE"], ["Mailbox", "Zweite Nachricht:", "de-DE"], ["Svenja", "Hi Lea, ich bin's, Svenja! Hast du Lust, am Samstag mit uns ins Konzert zu gehen? Ich habe noch eine Karte. Ruf mich doch bitte bis morgen zurück! Tschüss!", "de-DE"], ["Mailbox", "Dritte Nachricht:", "de-DE"], ["Frau Kühn", "Guten Tag, hier ist Kühn von der Praxis Dr. Albers. Wir müssen Ihren Termin am Dienstag leider verschieben. Könnten Sie uns bitte zurückrufen? Unsere Nummer ist null sechs neun, zwei drei vier, fünf sechs. Vielen Dank!", "de-DE"]],
    gist: ["Was hört Lea?", ["Drei Nachrichten auf ihrer Mailbox", "Eine Sendung im Radio", "Ein Gespräch mit ihrer Chefin"]],
    detail: [["Ab wann kann Lea ihr Auto abholen?", ["Ab drei Uhr", "Ab achtzehn Uhr", "Ab Samstag"]], ["Was möchte Svenja?", ["Mit Lea ins Konzert gehen", "Ihr Auto abholen", "Einen Termin verschieben"]], ["Bis wann soll Lea Svenja zurückrufen?", ["Bis morgen", "Bis Samstag", "Bis Dienstag"]], ["Warum ruft die Praxis an?", ["Sie muss den Termin am Dienstag verschieben.", "Lea hat ihre Karte vergessen.", "Das Auto ist fertig."]]],
    decode: ["Sie können es ab drei Uhr abholen.", "Ruf mich doch bitte bis morgen zurück!"],
    tip: "Voicemail messages follow a pattern: who is calling, why, what to do (call back, pick something up, confirm), and a time or a number. Listen for these four things first; separable verbs (abholen, zurückrufen) put their prefix at the very end, so wait for it.", tip_fr: "Les messages vocaux suivent un schéma : qui appelle, pourquoi, quoi faire (rappeler, aller chercher, confirmer), et une heure ou un numéro. Écoute d'abord ces quatre éléments ; les verbes séparables (abholen, zurückrufen) mettent leur préfixe tout à la fin : attends-le."
  }]);

  W.PROMPTS.push({ id: "de-a2-6", level: "A2", q: "Wie benutzt du dein Handy und andere Medien? Was würdest du gern ändern?", en: "How do you use your phone and other media? What would you like to change?", fr: "Comment utilises-tu ton portable et les autres médias ? Qu'est-ce que tu aimerais changer ?", time: 90,
    phrases: ["Ich benutze mein Handy vor allem für…", "Jeden Tag lese / schaue / höre ich…", "Ich versuche, … zu …", "Ich würde gern weniger / mehr…", "Ich sollte…"],
    model: "Ich benutze mein Handy vor allem für Nachrichten und Musik. Jeden Morgen höre ich im Bus einen Podcast auf Deutsch. Abends schaue ich oft Serien, manchmal zu lange. Ich würde gern weniger am Handy sein. Ich versuche jetzt, nach zehn Uhr keine Videos mehr zu schauen. Ich sollte auch öfter ein Buch lesen!" });

  W.WRITING_GUIDE["a2-6"] = { genre: "A formal email asking for information", genre_fr: "Un e-mail formel pour demander des renseignements",
    plan: [["A subject line and a formal greeting.", "L'objet et la formule d'appel."], ["Why you're writing.", "Pourquoi tu écris."], ["Two polite questions with könnten or wäre.", "Deux questions polies avec könnten ou wäre."], ["Thank them in advance.", "Remercie d'avance."], ["The formal closing and your name.", "La formule de politesse et ton nom."]],
    marks: [["Sehr geehrte Damen und Herren,", "the formal greeting", "la formule d'appel formelle"], ["ich interessiere mich für", "a lower-case letter after the comma", "une minuscule après la virgule"], ["Könnten Sie mir bitte sagen", "a polite request (Konjunktiv II)", "une demande polie (Konjunktiv II)"], ["Wäre es auch möglich", "wäre: would it be", "wäre : serait-il"], ["einen Einstufungstest zu machen", "zu + infinitive", "zu + infinitif"], ["Vielen Dank im Voraus!", "thanks in advance", "merci d'avance"], ["Mit freundlichen Grüßen", "the formal closing, with no comma", "la formule finale, sans virgule"]] };

  W.COURSE.push({ id: "a2-6", level: "A2", icon: "smartphone", title: "Media and communication", title_fr: "Médias et communication",
    intro: "In this unit, you'll learn to communicate politely: the Konjunktiv II for requests, wishes and advice (Könnten Sie…? Ich würde gern… Du solltest…), the infinitive with zu (Hast du Lust, … zu …?), and the phrases you need on the phone and in a formal email.",
    intro_fr: "Dans cette unité, tu vas apprendre à communiquer poliment : le Konjunktiv II pour les demandes, les souhaits et les conseils (Könnten Sie… ? Ich würde gern… Du solltest…), l'infinitif avec zu (Hast du Lust, … zu … ?), et les expressions qu'il te faut au téléphone et dans un e-mail formel.",
    can: ["Make polite requests and give advice with könnte, hätte, wäre, würde and sollte", "Use the infinitive with zu after verbs like versuchen, vergessen and Lust haben", "Make and answer a phone call, and leave a message", "Write a short formal email"],
    can_fr: ["Faire des demandes polies et donner des conseils avec könnte, hätte, wäre, würde et sollte", "Employer l'infinitif avec zu après des verbes comme versuchen, vergessen et Lust haben", "Passer et recevoir un appel, et laisser un message", "Écrire un court e-mail formel"],
    lessons: [37, 38, 39], vocab: ["medienDE", "telefonDE", "hoeflichDE"], reading: "philippreis", prompt: "de-a2-6",
    writing: { task: "Write a formal email to a language school (40-60 words): ask when the evening course starts, how much it costs, and one more polite question.", task_fr: "Écris un e-mail formel à une école de langues (40 à 60 mots) : demande quand commence le cours du soir, combien il coûte, et pose une autre question polie.", words: "40-60",
      tips: ["Betreff: …", "Sehr geehrte Damen und Herren,", "Könnten Sie mir bitte sagen, …?", "Wäre es möglich, … zu …?", "Mit freundlichen Grüßen"],
      checklist: ["I wrote a subject line and a formal greeting", "I started the first sentence with a lower-case letter", "I asked two polite questions (könnten, wäre)", "I wrote Sie and Ihr with capital letters", "I stayed between 40 and 60 words"],
      checklist_fr: ["J'ai écrit un objet et une formule d'appel formelle", "J'ai commencé la première phrase par une minuscule", "J'ai posé deux questions polies (könnten, wäre)", "J'ai écrit Sie et Ihr avec une majuscule", "J'ai écrit entre 40 et 60 mots"],
      model: "Betreff: Abendkurs Deutsch B1\n\nSehr geehrte Damen und Herren,\n\nich interessiere mich für Ihren Abendkurs im Herbst. Könnten Sie mir bitte sagen, wann der Kurs beginnt und wie viel er kostet? Wäre es auch möglich, vorher einen Einstufungstest zu machen? Ich würde gern auf dem richtigen Niveau anfangen.\n\nVielen Dank im Voraus!\n\nMit freundlichen Grüßen\nRobin Keller" } });
})();
