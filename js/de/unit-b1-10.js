/* Cours d'allemand, unité B1-10 « Society and civic life / Société et vie citoyenne » : la n-Deklination (der Kollege,
   den Kollegen ; der Name, des Namens ; Herrn), werden dans tous ses rôles (devenir, futur, passif, würde,
   supposition) ; démarches administratives (déclaration de domicile, formulaires, rendez-vous). Dernière unité du B1.
   Explications et traductions en anglais ET en français. Personnages fictifs, prénoms allemands.
   Faits vérifiables seulement : test « Leben in Deutschland » : 33 questions, dont 3 sur le Land ; catalogue de
   300 questions générales et 10 par Land ; 60 minutes ; au moins 17 bonnes réponses pour la naturalisation ;
   Loi fondamentale depuis 1949 ; 16 Länder ; Bundestag élu tous les quatre ans ; chancelier ou chancelière élu
   par le Bundestag ; droit de vote à 18 ans aux élections fédérales ; élections européennes ouvertes dès 16 ans en
   Allemagne depuis 2024, et dans certains Länder élections régionales dès 16 ans ; déclaration de domicile
   (Anmeldung) dans les deux semaines suivant l'emménagement, avec l'attestation du bailleur
   (Wohnungsgeberbestätigung). Écrit : avis sur un forum (Goethe B1, partie 2, environ 80 mots). */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "gesellschaftDE", icon: "landmark", title: "Society and politics", title_fr: "Société et politique", level: "B1", words: [
    ["die Gesellschaft, -en", "society; company", "la société", "In unserer Gesellschaft werden die Menschen immer älter."],
    ["die Regierung, -en", "the government", "le gouvernement", "Die Regierung hat ein neues Gesetz vorgeschlagen."],
    ["die Wahl, -en", "the election; the choice", "l'élection ; le choix", "Die nächste Wahl ist im Herbst."],
    ["wählen", "to vote; to choose", "voter ; choisir", "In Deutschland darf man ab 18 den Bundestag wählen."],
    ["die Partei, -en", "the (political) party", "le parti", "Welche Partei hat die Wahl gewonnen?"],
    ["die Demokratie, -n", "democracy", "la démocratie", "Freie Wahlen sind die Basis der Demokratie."],
    ["der Bürger, -", "the citizen", "le citoyen", "Die Bürger können ihre Meinung frei sagen."],
    ["die Bürgerin, -nen", "the citizen (a woman)", "la citoyenne", "Jede Bürgerin und jeder Bürger darf wählen."],
    ["das Ehrenamt, ¨-er", "voluntary work", "le bénévolat", "Sie hat ein Ehrenamt im Sportverein."],
    ["ehrenamtlich", "voluntary, as a volunteer", "bénévole, bénévolement", "Er arbeitet ehrenamtlich bei der Tafel."],
    ["sich engagieren für", "to be committed to, to get involved in", "s'engager pour", "Viele Jugendliche engagieren sich für den Klimaschutz."],
    ["die Meinungsfreiheit", "freedom of expression", "la liberté d'expression", "Die Meinungsfreiheit steht im Grundgesetz."],
    ["die Gleichberechtigung", "equal rights", "l'égalité des droits", "Männer und Frauen haben das Recht auf Gleichberechtigung."],
    ["die Mehrheit, -en", "the majority", "la majorité", "Die Mehrheit war dafür."],
    ["die Minderheit, -en", "the minority", "la minorité", "Auch Minderheiten haben Rechte."],
    ["abstimmen", "to vote (on something)", "voter (sur une question)", "Morgen stimmen wir über das Projekt ab."]
  ] },
  { id: "behoerdeDE", icon: "file-text", title: "Authorities and paperwork", title_fr: "Administration et formalités", level: "B1", words: [
    ["die Behörde, -n", "the (public) authority, the office", "l'administration, le service public", "Bei welcher Behörde bekomme ich den Pass?"],
    ["das Bürgeramt, ¨-er", "the citizens' office (registration office)", "le bureau des citoyens, la mairie", "Ich muss mich beim Bürgeramt anmelden."],
    ["die Unterlagen (pl)", "documents, paperwork", "les documents, le dossier", "Welche Unterlagen brauche ich für die Anmeldung?"],
    ["der Antrag, ¨-e", "the application (form)", "la demande (officielle)", "Ihr Antrag wird bearbeitet."],
    ["beantragen", "to apply for", "demander (officiellement)", "Ich möchte einen neuen Pass beantragen."],
    ["die Meldebescheinigung, -en", "the registration certificate", "l'attestation de domicile", "Die Bank möchte eine Meldebescheinigung sehen."],
    ["die Anschrift, -en", "the (postal) address (formal)", "l'adresse (formel)", "Bitte geben Sie Ihre vollständige Anschrift an."],
    ["die Unterschrift, -en", "the signature", "la signature", "Hier fehlt noch Ihre Unterschrift."],
    ["die Bescheinigung, -en", "the certificate, the confirmation", "l'attestation, le certificat", "Ich brauche eine Bescheinigung vom Arbeitgeber."],
    ["die Staatsangehörigkeit, -en", "the nationality, the citizenship", "la nationalité", "Welche Staatsangehörigkeit haben Sie?"],
    ["die Aufenthaltserlaubnis, -se", "the residence permit", "le titre de séjour", "Die Aufenthaltserlaubnis muss verlängert werden."],
    ["verlängern", "to extend, to renew", "prolonger, renouveler", "Ich muss meinen Vertrag verlängern."],
    ["einen Termin vereinbaren", "to make an appointment", "prendre rendez-vous", "Online kann man schnell einen Termin vereinbaren."],
    ["die Wartenummer, -n", "the queue number", "le numéro d'attente", "Ziehen Sie bitte eine Wartenummer."]
  ] });

  W.LESSONS.push(
  {
    id: 70, level: "B1", icon: "user",
    title: "den Kollegen, dem Kunden: the n-nouns", title_fr: "den Kollegen, dem Kunden : la n-Deklination",
    subtitle: "Some masculine nouns add -n or -en everywhere except the nominative.", subtitle_fr: "Certains noms masculins prennent -n ou -en partout, sauf au nominatif.",
    body: `
<h2>Which nouns?</h2>
<p>A group of masculine nouns, mostly for people and animals: those ending in <b>-e</b> (<s-de>der Kollege, der Kunde, der Junge, der Löwe</s-de>), some ending in <b>-ent, -ant, -ist</b> (<s-de>der Student, der Präsident, der Praktikant, der Polizist, der Journalist</s-de>) and a few others (<s-de>der Mensch, der Herr, der Nachbar, der Bauer</s-de>).</p>
<h2>The rule</h2>
<p>They add <b>-n</b> or <b>-en</b> in every case except the nominative singular:</p>
<table>
<tr><th>Case</th><th>der Kollege</th></tr>
<tr><td>nom.</td><td><s-de>der Kollege</s-de></td></tr>
<tr><td>acc.</td><td><s-de>den Kollegen</s-de></td></tr>
<tr><td>dat.</td><td><s-de>dem Kollegen</s-de></td></tr>
<tr><td>gen.</td><td><s-de>des Kollegen</s-de></td></tr>
<tr><td>plural</td><td><s-de>die Kollegen</s-de></td></tr>
</table>
<p><s-de>Ich frage den Kollegen.</s-de> · <s-de>Ich helfe dem Kunden.</s-de> · <s-de>Das ist das Büro des Präsidenten.</s-de> In letters: <s-de>Sehr geehrter Herr Schmidt</s-de> but <s-de>an Herrn Schmidt</s-de>, <s-de>für Herrn Schmidt</s-de>.</p>
<h2>Two special ones</h2>
<p><s-de>der Name</s-de> and <s-de>der Gedanke</s-de> also add <b>-s</b> in the genitive: <s-de>des Namens, des Gedankens</s-de>. <s-de>das Herz</s-de> (neuter!) has <s-de>dem Herzen, des Herzens</s-de>.</p>
<div class="tip">Feminine nouns ending in -e are not affected: <s-de>die Kollegin</s-de>, <s-de>die Kundin</s-de> never change in the singular. If you forget the -n in speech, people will understand you; in writing, it shows the difference between B1 and A2.</div>
`,
    body_fr: `
<h2>Quels noms ?</h2>
<p>Un groupe de noms masculins, surtout des personnes et des animaux : ceux en <b>-e</b> (<s-de>der Kollege, der Kunde, der Junge, der Löwe</s-de>), certains en <b>-ent, -ant, -ist</b> (<s-de>der Student, der Präsident, der Praktikant, der Polizist, der Journalist</s-de>) et quelques autres (<s-de>der Mensch, der Herr, der Nachbar, der Bauer</s-de>).</p>
<h2>La règle</h2>
<p>Ils prennent <b>-n</b> ou <b>-en</b> à tous les cas, sauf au nominatif singulier :</p>
<table>
<tr><th>Cas</th><th>der Kollege</th></tr>
<tr><td>nom.</td><td><s-de>der Kollege</s-de></td></tr>
<tr><td>acc.</td><td><s-de>den Kollegen</s-de></td></tr>
<tr><td>dat.</td><td><s-de>dem Kollegen</s-de></td></tr>
<tr><td>gén.</td><td><s-de>des Kollegen</s-de></td></tr>
<tr><td>pluriel</td><td><s-de>die Kollegen</s-de></td></tr>
</table>
<p><s-de>Ich frage den Kollegen.</s-de> (Je demande au collègue.) · <s-de>Ich helfe dem Kunden.</s-de> · <s-de>Das ist das Büro des Präsidenten.</s-de> Dans une lettre : <s-de>Sehr geehrter Herr Schmidt</s-de>, mais <s-de>an Herrn Schmidt</s-de>, <s-de>für Herrn Schmidt</s-de>.</p>
<h2>Deux cas particuliers</h2>
<p><s-de>der Name</s-de> et <s-de>der Gedanke</s-de> prennent en plus un <b>-s</b> au génitif : <s-de>des Namens, des Gedankens</s-de>. <s-de>das Herz</s-de> (neutre !) donne <s-de>dem Herzen, des Herzens</s-de>.</p>
<div class="tip">Les noms féminins en -e ne sont pas concernés : <s-de>die Kollegin</s-de>, <s-de>die Kundin</s-de> ne changent jamais au singulier. Si tu oublies le -n à l'oral, on te comprendra ; à l'écrit, c'est ce qui fait la différence entre un A2 et un B1.</div>
`,
    examples: [
      ["Kannst du bitte den Kollegen aus der IT fragen?", "Can you ask the colleague from IT, please?", "Tu peux demander au collègue de l'informatique, s'il te plaît ?"],
      ["Ich habe dem Kunden die Rechnung geschickt.", "I sent the customer the invoice.", "J'ai envoyé la facture au client."],
      ["Wir haben einen neuen Nachbarn.", "We've got a new neighbour.", "Nous avons un nouveau voisin."],
      ["Der Polizist hat den Jungen nach Hause gebracht.", "The police officer took the boy home.", "Le policier a ramené le garçon à la maison."],
      ["Die Rede des Präsidenten war sehr kurz.", "The president's speech was very short.", "Le discours du président était très court."],
      ["Wie war noch mal der Name des Hotels? Ich habe ihn vergessen.", "What was the hotel's name again? I've forgotten it.", "C'était quoi déjà, le nom de l'hôtel ? Je l'ai oublié."],
      ["Der Brief ist an Herrn Schmidt adressiert.", "The letter is addressed to Mr Schmidt.", "La lettre est adressée à M. Schmidt."]
    ],
    quiz: [
      { q: "“Ich helfe dem ___.” (der Kunde)", q_fr: "« Ich helfe dem ___. » (der Kunde)", o: ["Kunden", "Kunde", "Kundes"], a: 0, ex: "n-noun: -n in the dative.", ex_fr: "n-Deklination : -n au datif." },
      { q: "“Wir haben einen neuen ___.” (der Nachbar)", q_fr: "« Wir haben einen neuen ___. » (der Nachbar)", o: ["Nachbarn", "Nachbar", "Nachbars"], a: 0, ex: "Accusative: den Nachbarn.", ex_fr: "Accusatif : den Nachbarn." },
      { q: "“the president's speech”", q_fr: "« le discours du président »", o: ["die Rede des Präsidenten", "die Rede des Präsidents", "die Rede der Präsident"], a: 0, ex: "Genitive of an n-noun: -en, no -s.", ex_fr: "Génitif d'un nom en -n : -en, sans -s." },
      { q: "“a letter for Mr Weber”", q_fr: "« une lettre pour M. Weber »", o: ["ein Brief für Herrn Weber", "ein Brief für Herr Weber", "ein Brief für Herren Weber"], a: 0, ex: "Herr → Herrn outside the nominative.", ex_fr: "Herr → Herrn hors du nominatif." },
      { q: "“des ___” (der Name, genitive)", q_fr: "« des ___ » (der Name, génitif)", o: ["Namens", "Namen", "Name"], a: 0, ex: "Name and Gedanke: -ns in the genitive.", ex_fr: "Name et Gedanke : -ns au génitif." }
    ]
  },
  {
    id: 71, level: "B1", icon: "layers",
    title: "Er wird es schaffen: werden in all its roles", title_fr: "Er wird es schaffen : werden dans tous ses rôles",
    subtitle: "Become, future, passive, würde, and a guess about the present: one verb, five jobs.", subtitle_fr: "Devenir, futur, passif, würde, et une supposition : un seul verbe, cinq emplois.",
    body: `
<h2>One verb, five jobs</h2>
<table>
<tr><th>Use</th><th>Example</th></tr>
<tr><td>to become (alone)</td><td><s-de>Sie wird Ärztin.</s-de></td></tr>
<tr><td>future (+ infinitive)</td><td><s-de>Er wird morgen kommen.</s-de></td></tr>
<tr><td>passive (+ participle)</td><td><s-de>Das Gesetz wird geändert.</s-de></td></tr>
<tr><td>würde (+ infinitive)</td><td><s-de>Ich würde gern kommen.</s-de></td></tr>
<tr><td>a guess (+ wohl)</td><td><s-de>Er wird wohl krank sein.</s-de></td></tr>
</table>
<h2>How to tell them apart</h2>
<p>Look at the end of the sentence. A noun or an adjective: "become" (<s-de>Es wird kalt.</s-de>). An infinitive: future (<s-de>Es wird regnen.</s-de>). A participle: passive (<s-de>Hier wird gebaut.</s-de>). <s-de>würde</s-de> + infinitive: something imagined (<s-de>Ich würde helfen.</s-de>).</p>
<h2>Guessing about the present</h2>
<p><s-de>werden</s-de> + <s-de>wohl</s-de> or <s-de>sicher</s-de> + infinitive often expresses a guess, not the future: <s-de>Sie ist nicht da. Sie wird wohl im Stau stehen.</s-de> (She's probably stuck in traffic.) · <s-de>Das wird schon stimmen.</s-de> (That's probably right.)</p>
<div class="tip">In the past: <s-de>wurde</s-de> = became or was (passive): <s-de>Sie wurde Ärztin.</s-de> · <s-de>Das Haus wurde 1910 gebaut.</s-de> And the participle is <s-de>geworden</s-de> (became) but <s-de>worden</s-de> (passive): <s-de>Er ist Lehrer geworden.</s-de> · <s-de>Er ist gefragt worden.</s-de></div>
`,
    body_fr: `
<h2>Un verbe, cinq emplois</h2>
<table>
<tr><th>Emploi</th><th>Exemple</th></tr>
<tr><td>devenir (seul)</td><td><s-de>Sie wird Ärztin.</s-de></td></tr>
<tr><td>futur (+ infinitif)</td><td><s-de>Er wird morgen kommen.</s-de></td></tr>
<tr><td>passif (+ participe)</td><td><s-de>Das Gesetz wird geändert.</s-de></td></tr>
<tr><td>würde (+ infinitif)</td><td><s-de>Ich würde gern kommen.</s-de></td></tr>
<tr><td>supposition (+ wohl)</td><td><s-de>Er wird wohl krank sein.</s-de></td></tr>
</table>
<h2>Comment les distinguer</h2>
<p>Regarde la fin de la phrase. Un nom ou un adjectif : « devenir » (<s-de>Es wird kalt.</s-de> = il commence à faire froid). Un infinitif : futur (<s-de>Es wird regnen.</s-de>). Un participe : passif (<s-de>Hier wird gebaut.</s-de> = on construit ici). <s-de>würde</s-de> + infinitif : quelque chose d'imaginé (<s-de>Ich würde helfen.</s-de>).</p>
<h2>Supposer quelque chose au présent</h2>
<p><s-de>werden</s-de> + <s-de>wohl</s-de> ou <s-de>sicher</s-de> + infinitif exprime souvent une supposition, pas le futur, comme le futur français « il sera malade » : <s-de>Sie ist nicht da. Sie wird wohl im Stau stehen.</s-de> (Elle doit être dans les bouchons.) · <s-de>Das wird schon stimmen.</s-de> (Ça doit être vrai.)</p>
<div class="tip">Au passé : <s-de>wurde</s-de> = devint ou fut (passif) : <s-de>Sie wurde Ärztin.</s-de> · <s-de>Das Haus wurde 1910 gebaut.</s-de> Et le participe est <s-de>geworden</s-de> (devenu), mais <s-de>worden</s-de> au passif : <s-de>Er ist Lehrer geworden.</s-de> · <s-de>Er ist gefragt worden.</s-de></div>
`,
    examples: [
      ["Meine Schwester wird nächstes Jahr Ärztin.", "My sister is becoming a doctor next year.", "Ma sœur sera médecin l'année prochaine."],
      ["Es wird schon dunkel.", "It's already getting dark.", "Il commence déjà à faire nuit."],
      ["Die Regierung wird das Gesetz im Herbst ändern.", "The government will change the law in the autumn.", "Le gouvernement modifiera la loi à l'automne."],
      ["Das Gesetz wird gerade im Bundestag diskutiert.", "The law is being discussed in the Bundestag right now.", "La loi est en cours de discussion au Bundestag."],
      ["Ich würde gern mehr für die Umwelt tun.", "I'd like to do more for the environment.", "J'aimerais faire davantage pour l'environnement."],
      ["Er geht nicht ans Telefon. Er wird wohl noch schlafen.", "He's not answering the phone. He's probably still asleep.", "Il ne répond pas au téléphone. Il doit encore dormir."],
      ["Sie ist Lehrerin geworden, und ihr Bruder ist zum Bürgermeister gewählt worden.", "She became a teacher, and her brother has been elected mayor.", "Elle est devenue enseignante, et son frère a été élu maire."]
    ],
    quiz: [
      { q: "“Es wird kalt.” Here werden means:", q_fr: "« Es wird kalt. » Ici, werden veut dire :", o: ["to become", "future", "passive"], o_fr: ["devenir", "le futur", "le passif"], a: 0, ex: "werden + adjective: to become.", ex_fr: "werden + adjectif : devenir." },
      { q: "“Das Gesetz wird geändert.” Here werden is:", q_fr: "« Das Gesetz wird geändert. » Ici, werden est :", o: ["passive", "future", "to become"], o_fr: ["le passif", "le futur", "devenir"], a: 0, ex: "werden + participle: passive.", ex_fr: "werden + participe : passif." },
      { q: "“Sie ist nicht da. Sie wird wohl krank sein.” This expresses:", q_fr: "« Sie ist nicht da. Sie wird wohl krank sein. » Cela exprime :", o: ["a guess about now", "a plan for tomorrow", "an order"], o_fr: ["une supposition sur le présent", "un projet pour demain", "un ordre"], a: 0, ex: "werden + wohl + infinitive: probably.", ex_fr: "werden + wohl + infinitif : sans doute." },
      { q: "“He has been elected.”", q_fr: "« Il a été élu. »", o: ["Er ist gewählt worden.", "Er ist gewählt geworden.", "Er hat gewählt worden."], a: 0, ex: "Perfekt passive: ist … worden.", ex_fr: "Passif au Perfekt : ist … worden." },
      { q: "“She became a teacher.” (Perfekt)", q_fr: "« Elle est devenue enseignante. » (Perfekt)", o: ["Sie ist Lehrerin geworden.", "Sie ist Lehrerin worden.", "Sie hat Lehrerin geworden."], a: 0, ex: "werden alone: geworden, with sein.", ex_fr: "werden seul : geworden, avec sein." }
    ]
  },
  {
    id: 72, level: "B1", kind: "functional", icon: "file-text",
    title: "Everyday German: dealing with the authorities", title_fr: "L'allemand de tous les jours : les démarches administratives",
    subtitle: "Register your address, make an appointment, fill in a form and ask for help.", subtitle_fr: "Déclarer ton domicile, prendre rendez-vous, remplir un formulaire et demander de l'aide.",
    body: `
<h2>Registering your address</h2>
<p>When you move into a flat in Germany, you must register your address within two weeks at the <s-de>Bürgeramt</s-de> (in some towns, <s-de>Einwohnermeldeamt</s-de>). You need your passport or identity card and a confirmation from your landlord, the <s-de>Wohnungsgeberbestätigung</s-de>. In many towns, you book an appointment online.</p>
<h2>Useful sentences</h2>
<p><s-de>Ich möchte mich anmelden.</s-de> · <s-de>Ich möchte einen Termin vereinbaren.</s-de> · <s-de>Welche Unterlagen brauche ich?</s-de> (Which documents do I need?) · <s-de>Wo muss ich unterschreiben?</s-de> · <s-de>Könnten Sie mir beim Ausfüllen helfen?</s-de> · <s-de>Bis wann muss ich das abgeben?</s-de></p>
<h2>Forms</h2>
<p>Typical boxes: <s-de>Vorname, Familienname, Geburtsdatum, Geburtsort, Staatsangehörigkeit, Familienstand</s-de> (marital status), <s-de>Anschrift</s-de> (address), <s-de>Datum, Unterschrift</s-de>.</p>
<h2>If you don't understand</h2>
<p><s-de>Entschuldigung, könnten Sie das bitte einfacher erklären?</s-de> · <s-de>Was bedeutet dieses Wort?</s-de> · <s-de>Darf ich das Formular mitnehmen und zu Hause ausfüllen?</s-de></p>
<div class="tip">Official letters use a very formal style, with many passives and nouns: <s-de>Die Unterlagen sind bis zum 15. März einzureichen.</s-de> (The documents must be submitted by 15 March.) Look first for the dates and the verbs: they tell you what to do and by when.</div>
`,
    body_fr: `
<h2>Déclarer son domicile</h2>
<p>Quand on emménage dans un logement en Allemagne, il faut déclarer son adresse dans les deux semaines au <s-de>Bürgeramt</s-de> (dans certaines villes, <s-de>Einwohnermeldeamt</s-de>). Il faut son passeport ou sa carte d'identité et une attestation du bailleur, la <s-de>Wohnungsgeberbestätigung</s-de>. Dans beaucoup de villes, on prend rendez-vous en ligne.</p>
<h2>Phrases utiles</h2>
<p><s-de>Ich möchte mich anmelden.</s-de> (Je voudrais déclarer mon domicile.) · <s-de>Ich möchte einen Termin vereinbaren.</s-de> · <s-de>Welche Unterlagen brauche ich?</s-de> (De quels documents ai-je besoin ?) · <s-de>Wo muss ich unterschreiben?</s-de> · <s-de>Könnten Sie mir beim Ausfüllen helfen?</s-de> · <s-de>Bis wann muss ich das abgeben?</s-de></p>
<h2>Les formulaires</h2>
<p>Cases typiques : <s-de>Vorname, Familienname, Geburtsdatum, Geburtsort, Staatsangehörigkeit, Familienstand</s-de> (situation de famille), <s-de>Anschrift</s-de> (adresse), <s-de>Datum, Unterschrift</s-de>.</p>
<h2>Si tu ne comprends pas</h2>
<p><s-de>Entschuldigung, könnten Sie das bitte einfacher erklären?</s-de> · <s-de>Was bedeutet dieses Wort?</s-de> · <s-de>Darf ich das Formular mitnehmen und zu Hause ausfüllen?</s-de></p>
<div class="tip">Les courriers officiels ont un style très formel, avec beaucoup de passifs et de noms : <s-de>Die Unterlagen sind bis zum 15. März einzureichen.</s-de> (Les documents doivent être remis avant le 15 mars.) Cherche d'abord les dates et les verbes : ils te disent quoi faire et avant quand.</div>
`,
    examples: [
      ["Ich bin gerade umgezogen und möchte mich anmelden.", "I've just moved and would like to register my address.", "Je viens de déménager et je voudrais déclarer mon domicile."],
      ["Welche Unterlagen brauche ich für die Anmeldung?", "Which documents do I need to register?", "De quels documents ai-je besoin pour la déclaration ?"],
      ["Bitte bringen Sie die Wohnungsgeberbestätigung Ihres Vermieters mit.", "Please bring the confirmation from your landlord.", "Merci d'apporter l'attestation de votre bailleur."],
      ["Könnten Sie mir beim Ausfüllen des Formulars helfen?", "Could you help me fill in the form?", "Pourriez-vous m'aider à remplir le formulaire ?"],
      ["Wo muss ich unterschreiben? — Hier unten, neben dem Datum.", "Where do I have to sign? — Down here, next to the date.", "Où dois-je signer ? — Ici, en bas, à côté de la date."],
      ["Entschuldigung, könnten Sie das bitte einfacher erklären?", "Excuse me, could you explain that more simply, please?", "Excusez-moi, pourriez-vous l'expliquer plus simplement ?"],
      ["Die Unterlagen sind bis zum 15. März einzureichen.", "The documents must be submitted by 15 March.", "Les documents doivent être remis avant le 15 mars."]
    ],
    quiz: [
      { q: "After moving into a flat in Germany, you must register your address within:", q_fr: "Après avoir emménagé en Allemagne, il faut déclarer son domicile dans un délai de :", o: ["two weeks", "two days", "six months"], o_fr: ["deux semaines", "deux jours", "six mois"], a: 0, ex: "At the Bürgeramt, with the Wohnungsgeberbestätigung.", ex_fr: "Au Bürgeramt, avec la Wohnungsgeberbestätigung." },
      { q: "“Which documents do I need?”", q_fr: "« De quels documents ai-je besoin ? »", o: ["Welche Unterlagen brauche ich?", "Welche Papier brauche ich mir?", "Was für Dokument muss ich?"], a: 0, ex: "die Unterlagen = documents, paperwork.", ex_fr: "die Unterlagen = les documents, le dossier." },
      { q: "On a form, “Familienstand” asks for your:", q_fr: "Sur un formulaire, « Familienstand » demande :", o: ["marital status", "family address", "number of children"], o_fr: ["ta situation de famille", "l'adresse de ta famille", "le nombre d'enfants"], a: 0, ex: "ledig, verheiratet, geschieden…", ex_fr: "ledig, verheiratet, geschieden…" },
      { q: "“Could you help me fill it in?”", q_fr: "« Pourriez-vous m'aider à le remplir ? »", o: ["Könnten Sie mir beim Ausfüllen helfen?", "Könnten Sie mich beim Ausfüllen helfen?", "Könnten Sie mir zum Ausfüllen hilfen?"], a: 0, ex: "helfen + dative: mir; beim Ausfüllen.", ex_fr: "helfen + datif : mir ; beim Ausfüllen." },
      { q: "“Die Unterlagen sind bis zum 15. März einzureichen” means:", q_fr: "« Die Unterlagen sind bis zum 15. März einzureichen » veut dire :", o: ["The documents must be submitted by 15 March.", "The documents arrived on 15 March.", "The documents are ready on 15 March."], o_fr: ["Les documents doivent être remis avant le 15 mars.", "Les documents sont arrivés le 15 mars.", "Les documents seront prêts le 15 mars."], a: 0, ex: "sein + zu + infinitive = must be done.", ex_fr: "sein + zu + infinitif = doit être fait." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    70: {
      gap: [["Ich helfe dem ___. (der Kunde)", "Kunden"], ["Wir haben einen neuen ___. (der Nachbar)", "Nachbarn"], ["Die Rede des ___ war kurz. (der Präsident)", "Präsidenten"], ["Der Brief ist für ___ Weber. (der Herr)", "Herrn"]],
      fix: [["Ich habe den Kollege gefragt.", "Ich habe den Kollegen gefragt.", "n-noun: -n in the accusative.", "n-Deklination : -n à l'accusatif."], ["Ich habe den Name vergessen.", "Ich habe den Namen vergessen.", "der Name → den Namen.", "der Name → den Namen."]],
      task: ["Write four sentences about your work or your street with n-nouns (Kollege, Kunde, Nachbar, Herr, Student…) in the accusative, dative and genitive.", "Écris quatre phrases sur ton travail ou ta rue avec des noms en -n (Kollege, Kunde, Nachbar, Herr, Student…) à l'accusatif, au datif et au génitif.", "Heute habe ich einem Kunden aus Japan geholfen. Danach habe ich meinen Kollegen zum Mittagessen eingeladen. Am Abend habe ich den neuen Nachbarn im Treppenhaus getroffen. Er ist der Sohn eines bekannten Journalisten."]
    },
    71: {
      gap: [["Es ___ schon dunkel.", "wird", "becomes", "devient"], ["Das Gesetz ___ im Bundestag diskutiert.", "wird"], ["Sie ist Lehrerin ___.", "geworden"], ["Er ist zum Bürgermeister gewählt ___.", "worden"]],
      fix: [["Er ist gefragt geworden.", "Er ist gefragt worden.", "Passive Perfekt: worden.", "Passif au Perfekt : worden."], ["Sie ist Ärztin worden.", "Sie ist Ärztin geworden.", "werden alone (to become): geworden.", "werden seul (devenir) : geworden."]],
      task: ["Write five sentences, one for each use of werden: become, future, passive, würde, and a guess with wohl.", "Écris cinq phrases, une pour chaque emploi de werden : devenir, futur, passif, würde, et une supposition avec wohl.", "Mein Bruder wird bald Vater. Nächstes Jahr werde ich nach Wien ziehen. In unserer Straße wird gerade ein neuer Park gebaut. Ich würde gern öfter ehrenamtlich arbeiten. Meine Nachbarin ist nicht zu Hause, sie wird wohl noch im Büro sein."]
    },
    72: {
      gap: [["Ich möchte mich ___.", "anmelden", "register", "déclarer mon domicile"], ["Welche ___ brauche ich?", "Unterlagen", "documents", "documents"], ["Wo muss ich ___?", "unterschreiben", "sign", "signer"], ["Könnten Sie mir beim ___ helfen?", "Ausfüllen", "filling in", "remplir"]],
      fix: [["Könnten Sie mich beim Ausfüllen helfen?", "Könnten Sie mir beim Ausfüllen helfen?", "helfen + dative: mir.", "helfen + datif : mir."], ["Ich möchte einen Termin machen ausmachen.", "Ich möchte einen Termin vereinbaren.", "einen Termin vereinbaren (or ausmachen), not both.", "einen Termin vereinbaren (ou ausmachen), pas les deux."]],
      task: ["Write the sentences you'd need at the Bürgeramt: say why you're there, ask which documents you need, ask where to sign, and ask for help with a word you don't understand.", "Écris les phrases dont tu aurais besoin au Bürgeramt : dis pourquoi tu viens, demande quels documents il faut, où signer, et demande de l'aide pour un mot que tu ne comprends pas.", "Guten Tag, ich bin letzte Woche nach Köln gezogen und möchte mich anmelden. Welche Unterlagen brauche ich dafür? Wo muss ich unterschreiben? Entschuldigung, was bedeutet das Wort „Familienstand“?"]
    }
  });

  W.ROLEPLAYS.push(
  { id: "buergeramt", lesson: 72, level: "B1", icon: "file-text", partner: "Herr Pohl", role: "an official at the citizens' office", role_fr: "un agent du bureau des citoyens",
    title: "At the Bürgeramt", title_fr: "Au Bürgeramt",
    setting: "You've just moved to Cologne. You have an appointment at the Bürgeramt to register your address.", setting_fr: "Tu viens d'emménager à Cologne. Tu as rendez-vous au Bürgeramt pour déclarer ton domicile.",
    turns: [
      { p: "Guten Tag. Ihre Wartenummer, bitte. Was kann ich für Sie tun?", en: "Hello. Your queue number, please. What can I do for you?", fr: "Bonjour. Votre numéro d'attente, s'il vous plaît. Que puis-je faire pour vous ?" },
      { y: ["Guten Tag. Ich bin vor einer Woche umgezogen und möchte mich anmelden.", "Guten Tag. Ich bin vor einer Woche umgezogen und möchte mich anmelden zu.", "Guten Tag. Ich habe vor einer Woche umgezogen und möchte mich anmelden."], en: "Hello. I moved a week ago and would like to register my address.", fr: "Bonjour. J'ai déménagé il y a une semaine et je voudrais déclarer mon domicile.", why: "umziehen takes sein: bin umgezogen.", why_fr: "umziehen se conjugue avec sein : bin umgezogen." },
      { p: "Gut. Haben Sie Ihren Ausweis und die Wohnungsgeberbestätigung dabei?", en: "Good. Do you have your ID and the landlord's confirmation with you?", fr: "Bien. Vous avez votre pièce d'identité et l'attestation du bailleur ?" },
      { y: ["Hier ist mein Pass. Die Bestätigung des Vermieters habe ich auch.", "Hier ist mein Pass. Die Bestätigung von der Vermieter habe ich auch.", "Hier ist mein Pass. Die Bestätigung des Vermieter habe ich auch."], en: "Here's my passport. I've also got the landlord's confirmation.", fr: "Voici mon passeport. J'ai aussi l'attestation du propriétaire.", why: "Genitive masculine: des Vermieters.", why_fr: "Génitif masculin : des Vermieters." },
      { p: "Danke. Bitte füllen Sie noch dieses Formular aus. Hier tragen Sie Ihren Familienstand ein.", en: "Thank you. Please fill in this form too. Here you enter your marital status.", fr: "Merci. Veuillez encore remplir ce formulaire. Ici, vous indiquez votre situation de famille." },
      { y: ["Entschuldigung, könnten Sie mir beim Ausfüllen helfen? Ich verstehe nicht alle Wörter.", "Entschuldigung, könnten Sie mich beim Ausfüllen helfen? Ich verstehe nicht alle Wörter.", "Entschuldigung, könnten Sie mir zum Ausfüllen hilfen? Ich verstehe nicht alle Wörter."], en: "Excuse me, could you help me fill it in? I don't understand all the words.", fr: "Excusez-moi, pourriez-vous m'aider à le remplir ? Je ne comprends pas tous les mots.", why: "helfen + dative (mir); beim Ausfüllen.", why_fr: "helfen + datif (mir) ; beim Ausfüllen." },
      { p: "Natürlich. „Familienstand“ heißt: ledig, verheiratet oder geschieden.", en: "Of course. “Familienstand” means: single, married or divorced.", fr: "Bien sûr. « Familienstand », c'est : célibataire, marié ou divorcé." },
      { y: ["Ach so, danke! Und wo muss ich unterschreiben?", "Ach so, danke! Und wo muss ich unterschrieben?", "Ach so, danke! Und wo ich muss unterschreiben?"], en: "Oh, I see, thanks! And where do I have to sign?", fr: "Ah, d'accord, merci ! Et où dois-je signer ?", why: "After a modal: the infinitive at the end.", why_fr: "Après un verbe de modalité : l'infinitif à la fin." },
      { p: "Hier unten, bitte. So, Ihre Meldebescheinigung wird gleich gedruckt.", en: "Down here, please. Right, your registration certificate is being printed now.", fr: "Ici en bas, s'il vous plaît. Voilà, votre attestation de domicile est en cours d'impression." },
      { y: ["Vielen Dank, das ging ja schnell! Werde ich die Bescheinigung noch für andere Behörden brauchen?", "Vielen Dank, das ging ja schnell! Werde ich die Bescheinigung noch für andere Behörden gebraucht?", "Vielen Dank, das ging ja schnell! Würde ich die Bescheinigung noch für andere Behörden brauchen werden?"], en: "Thank you very much, that was quick! Will I need the certificate for other offices too?", fr: "Merci beaucoup, c'était rapide ! J'aurai encore besoin de l'attestation pour d'autres administrations ?", why: "Future: werde … brauchen.", why_fr: "Futur : werde … brauchen." }
    ] },
  { id: "ehrenamtgespraech", lesson: 70, level: "B1", icon: "hand-heart", partner: "Frau Schubert", role: "a neighbour who organises a neighbourhood project", role_fr: "une voisine qui organise un projet de quartier",
    title: "A neighbourhood project", title_fr: "Un projet de quartier",
    setting: "Your neighbour Frau Schubert is organising volunteers to help older people in the street. She asks if you'd like to join.", setting_fr: "Ta voisine, Mme Schubert, cherche des bénévoles pour aider les personnes âgées de la rue. Elle te demande si tu veux participer.",
    turns: [
      { p: "Hallo! Haben Sie schon von unserem Nachbarschaftsprojekt gehört?", en: "Hello! Have you heard about our neighbourhood project?", fr: "Bonjour ! Vous avez entendu parler de notre projet de quartier ?" },
      { y: ["Ja, ein bisschen. Ich habe mit dem Nachbarn aus dem ersten Stock darüber gesprochen.", "Ja, ein bisschen. Ich habe mit dem Nachbar aus dem ersten Stock darüber gesprochen.", "Ja, ein bisschen. Ich habe mit den Nachbar aus dem ersten Stock darüber gesprochen."], en: "Yes, a little. I talked about it with the neighbour from the first floor.", fr: "Oui, un peu. J'en ai parlé avec le voisin du premier étage.", why: "n-noun in the dative: dem Nachbarn.", why_fr: "n-Deklination au datif : dem Nachbarn." },
      { p: "Genau, Herr Lorenz macht auch mit. Wir gehen für ältere Menschen einkaufen und helfen bei Formularen.", en: "Exactly, Herr Lorenz is taking part too. We go shopping for older people and help with forms.", fr: "C'est ça, M. Lorenz participe aussi. Nous faisons les courses pour les personnes âgées et les aidons à remplir des formulaires." },
      { y: ["Das finde ich toll. Ich würde gern einmal pro Woche helfen.", "Das finde ich toll. Ich werde gern einmal pro Woche helfen würde.", "Das finde ich toll. Ich würde gern einmal pro Woche helfen zu."], en: "I think that's great. I'd like to help once a week.", fr: "Je trouve ça super. J'aimerais aider une fois par semaine.", why: "A wish: würde + infinitive.", why_fr: "Un souhait : würde + infinitif." },
      { p: "Wunderbar! Wir suchen noch jemanden für Herrn Becker. Er wird bald neunzig.", en: "Wonderful! We're still looking for someone for Herr Becker. He'll soon be ninety.", fr: "Formidable ! Nous cherchons encore quelqu'un pour M. Becker. Il va bientôt avoir quatre-vingt-dix ans." },
      { y: ["Gern. Was braucht Herr Becker denn genau?", "Gern. Was braucht Herrn Becker denn genau?", "Gern. Was braucht der Herrn Becker denn genau?"], en: "Gladly. What exactly does Herr Becker need?", fr: "Avec plaisir. De quoi M. Becker a-t-il besoin exactement ?", why: "Subject (nominative): Herr, without -n.", why_fr: "Sujet (nominatif) : Herr, sans -n." },
      { p: "Vor allem Hilfe beim Einkaufen. Seine Tochter wohnt in München, deshalb wird er manchmal ein bisschen einsam sein.", en: "Mostly help with shopping. His daughter lives in Munich, so he's probably a bit lonely sometimes.", fr: "Surtout de l'aide pour les courses. Sa fille habite à Munich, donc il doit parfois se sentir un peu seul." },
      { y: ["Das verstehe ich. Ich werde ihn am Samstag besuchen und mich vorstellen.", "Das verstehe ich. Ich werde ihm am Samstag besuchen und mich vorstellen.", "Das verstehe ich. Ich werde ihn am Samstag besuchen und mich vorgestellt."], en: "I understand. I'll visit him on Saturday and introduce myself.", fr: "Je comprends. J'irai le voir samedi et je me présenterai.", why: "besuchen + accusative (ihn); future: werde … besuchen.", why_fr: "besuchen + accusatif (ihn) ; futur : werde … besuchen." },
      { p: "Das ist sehr nett. Er wird sich freuen!", en: "That's very kind. He'll be delighted!", fr: "C'est très gentil. Il sera ravi !" },
      { y: ["Gern geschehen. Geben Sie mir einfach seine Nummer und die Adresse des Kollegen, mit dem ich mich abwechseln kann.", "Gern geschehen. Geben Sie mir einfach seine Nummer und die Adresse des Kollege, mit dem ich mich abwechseln kann.", "Gern geschehen. Geben Sie mir einfach seine Nummer und die Adresse von der Kollege, mit dem ich mich abwechseln kann."], en: "You're welcome. Just give me his number and the address of the colleague I can take turns with.", fr: "Je vous en prie. Donnez-moi simplement son numéro et l'adresse du bénévole avec qui je peux me relayer.", why: "Genitive of an n-noun: des Kollegen.", why_fr: "Génitif d'un nom en -n : des Kollegen." }
    ] }
  );

  W.READINGS.push({
    id: "lebenindeutschland", level: "B1", icon: "book-open", title: "Der Test „Leben in Deutschland“", genre: "Explainer",
    intro: "33 questions about politics, history and society: the test for German citizenship, and what it teaches about the country.",
    intro_fr: "33 questions sur la politique, l'histoire et la société : le test de la naturalisation allemande, et ce qu'il apprend sur le pays.",
    paragraphs: [
      { de: "Wer in Deutschland eingebürgert werden möchte, muss in der Regel einen Test machen: den Test „Leben in Deutschland“. Er hat 33 Fragen, und man hat 60 Minuten Zeit. Für die Einbürgerung braucht man mindestens 17 richtige Antworten.", en: "Anyone who wants to become a German citizen usually has to take a test: the “Life in Germany” test. It has 33 questions, and you have 60 minutes. To be naturalised, you need at least 17 correct answers.", fr: "Pour obtenir la nationalité allemande, il faut en général passer un test : le test « Vivre en Allemagne ». Il compte 33 questions, et on a 60 minutes. Pour la naturalisation, il faut au moins 17 bonnes réponses." },
      { de: "Die Fragen kommen aus einem Katalog mit 300 allgemeinen Fragen und zehn Fragen für jedes Bundesland. Drei der 33 Fragen betreffen das Bundesland, in dem man wohnt. Der Katalog ist öffentlich, man kann also gut üben.", en: "The questions come from a catalogue of 300 general questions and ten questions for each federal state. Three of the 33 questions concern the state you live in. The catalogue is public, so you can practise well.", fr: "Les questions viennent d'un catalogue de 300 questions générales et de dix questions par Land. Trois des 33 questions portent sur le Land où l'on habite. Le catalogue est public : on peut donc bien s'entraîner." },
      { de: "Viele Fragen betreffen die Politik. Seit 1949 gibt es das Grundgesetz, die Verfassung der Bundesrepublik. Deutschland besteht aus 16 Bundesländern. Der Bundestag wird alle vier Jahre gewählt, und die Abgeordneten wählen den Bundeskanzler oder die Bundeskanzlerin.", en: "Many questions concern politics. Since 1949 there has been the Basic Law, the constitution of the Federal Republic. Germany is made up of 16 federal states. The Bundestag is elected every four years, and its members elect the Federal Chancellor.", fr: "Beaucoup de questions portent sur la politique. Depuis 1949, il existe la Loi fondamentale, la constitution de la République fédérale. L'Allemagne se compose de 16 Länder. Le Bundestag est élu tous les quatre ans, et les députés élisent le chancelier ou la chancelière." },
      { de: "Andere Fragen betreffen Grundrechte wie die Meinungsfreiheit und die Gleichberechtigung, aber auch die Geschichte, zum Beispiel den Mauerfall 1989. Wer sich auf den Test vorbereitet, lernt also nicht nur für eine Prüfung, sondern auch viel über das Land, in dem er lebt.", en: "Other questions concern fundamental rights such as freedom of expression and equal rights, but also history, for example the fall of the Wall in 1989. So anyone preparing for the test isn't only studying for an exam, but also learning a lot about the country they live in.", fr: "D'autres questions portent sur les droits fondamentaux, comme la liberté d'expression et l'égalité des droits, mais aussi sur l'histoire, par exemple la chute du Mur en 1989. En se préparant au test, on n'apprend donc pas seulement pour un examen, mais aussi beaucoup sur le pays où l'on vit." }
    ],
    glossary: { "eingebürgert": ["naturalised (made a citizen)", "naturalisé"], "Einbürgerung": ["naturalisation", "naturalisation"], "Regel": ["(in der Regel) as a rule, usually", "(in der Regel) en général"], "Katalog": ["catalogue", "catalogue"], "allgemeinen": ["general", "générales"], "Bundesland": ["federal state", "Land (État fédéré)"], "betreffen": ["concern", "concernent"], "öffentlich": ["public", "public"], "Grundgesetz": ["Basic Law (German constitution)", "Loi fondamentale"], "Verfassung": ["constitution", "constitution"], "Bundesrepublik": ["Federal Republic", "République fédérale"], "besteht": ["(bestehen aus) consists of", "(bestehen aus) se compose de"], "Bundesländern": ["federal states", "Länder"], "Bundestag": ["German parliament", "Bundestag (Parlement)"], "Abgeordneten": ["members of parliament", "députés"], "Bundeskanzler": ["Federal Chancellor", "chancelier fédéral"], "Bundeskanzlerin": ["Federal Chancellor (a woman)", "chancelière fédérale"], "Grundrechte": ["fundamental rights", "droits fondamentaux"], "Mauerfall": ["fall of the Wall", "chute du Mur"] },
    questions: [
      { q: "Wie viele Fragen hat der Test „Leben in Deutschland“?", o: ["33", "17", "300"], a: 0 },
      { q: "Wie viele richtige Antworten braucht man für die Einbürgerung mindestens?", o: ["17", "33", "10"], a: 0 },
      { q: "Wie viele Fragen betreffen das eigene Bundesland?", o: ["Drei", "Zehn", "Keine"], a: 0 },
      { q: "Seit wann gibt es das Grundgesetz?", o: ["Seit 1949", "Seit 1989", "Seit 1990"], a: 0 },
      { q: "Wer wählt den Bundeskanzler oder die Bundeskanzlerin?", o: ["Die Abgeordneten des Bundestags", "Alle Bürger direkt", "Die Bundesländer"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-b1-10", unit: "b1-10", level: "B1", icon: "messages-square",
    title: "Beim Bürgeramt", title_fr: "Au bureau des citoyens",
    context: "Leonie has just moved to Leipzig. At the Bürgeramt, the official, Frau Wolff, helps her.", context_fr: "Leonie vient d'emménager à Leipzig. Au Bürgeramt, l'agente, Mme Wolff, l'aide.",
    words: [["die Meldebescheinigung", "the registration certificate", "l'attestation de domicile"], ["die Steuer-ID", "the tax identification number", "le numéro fiscal"], ["zuschicken", "to send (to someone)", "envoyer"], ["der Vermieter", "the landlord", "le propriétaire, le bailleur"], ["innerhalb", "within", "dans un délai de, en"]],
    lines: [["Frau Wolff", "Guten Morgen. Sie möchten sich anmelden?", "de-DE"], ["Leonie", "Ja, ich bin am Ersten nach Leipzig gezogen. Muss man das wirklich innerhalb von zwei Wochen machen?", "de-DE"], ["Frau Wolff", "Ja, das ist Pflicht. Sie sind aber pünktlich. Haben Sie die Bestätigung Ihres Vermieters?", "de-DE"], ["Leonie", "Hier, bitte. Mein Vermieter hat sie mir gestern geschickt.", "de-DE"], ["Frau Wolff", "Danke. Ihre Daten werden jetzt ins System eingegeben… So. Hier ist Ihre Meldebescheinigung.", "de-DE"], ["Leonie", "Super. Brauche ich die noch für etwas anderes?", "de-DE"], ["Frau Wolff", "Ja, zum Beispiel für die Bank. Und Ihre Steuer-ID wird Ihnen in ein paar Wochen per Post zugeschickt.", "de-DE"], ["Leonie", "Gut zu wissen. Und wenn ich wieder umziehe?", "de-DE"], ["Frau Wolff", "Dann melden Sie sich einfach wieder hier an, wieder innerhalb von zwei Wochen. Viel Spaß in Leipzig!", "de-DE"]],
    gist: ["Was macht Leonie beim Bürgeramt?", ["Sie meldet ihre neue Adresse an.", "Sie beantragt einen neuen Pass.", "Sie sucht eine Wohnung."]],
    detail: [["Innerhalb von wie vielen Wochen muss man sich anmelden?", ["Zwei Wochen", "Vier Wochen", "Einer Woche"]], ["Was hat Leonie vom Vermieter?", ["Eine Bestätigung", "Einen Schlüssel", "Eine Rechnung"]], ["Wofür braucht sie die Meldebescheinigung zum Beispiel?", ["Für die Bank", "Für das Kino", "Für die Arbeit beim Vermieter"]], ["Wie bekommt sie ihre Steuer-ID?", ["Per Post, in ein paar Wochen", "Sofort beim Bürgeramt", "Per Telefon"]]],
    decode: ["Ihre Daten werden jetzt ins System eingegeben", "Ihre Steuer-ID wird Ihnen in ein paar Wochen per Post zugeschickt"],
    tip: "Officials often speak in the passive (wird zugeschickt, werden eingegeben): they describe what the office does, not who does it. Listen for werden near the start and the participle at the end.", tip_fr: "Les agents parlent souvent au passif (wird zugeschickt, werden eingegeben) : ils décrivent ce que fait l'administration, pas qui le fait. Repère werden au début et le participe à la fin."
  }]);

  W.PROMPTS.push({ id: "de-b1-10", level: "B1", q: "Engagierst du dich für etwas, zum Beispiel ehrenamtlich, in einem Verein oder in deiner Nachbarschaft? Wofür würdest du dich gern engagieren?", en: "Are you involved in anything, for example as a volunteer, in a club or in your neighbourhood? What would you like to get involved in?", fr: "T'engages-tu pour quelque chose, par exemple comme bénévole, dans une association ou dans ton quartier ? Pour quoi aimerais-tu t'engager ?", time: 120,
    phrases: ["Ich engagiere mich für…", "Einmal pro Woche helfe ich…", "Wichtig finde ich, dass…", "Ich würde gern…", "In Zukunft werde ich…"],
    model: "Ich engagiere mich seit zwei Jahren ehrenamtlich bei einer Hausaufgabenhilfe. Einmal pro Woche helfe ich Kindern, deren Eltern wenig Deutsch sprechen. Wichtig finde ich, dass alle Kinder die gleichen Chancen haben. Manchmal ist es anstrengend, aber wenn ein Kind eine gute Note bekommt, freue ich mich riesig. Ich würde mich auch gern für den Umweltschutz engagieren. In Zukunft werde ich vielleicht bei einem Projekt mitmachen, das Bäume in der Stadt pflanzt." });

  W.WRITING_GUIDE["b1-10"] = { genre: "An opinion in an online forum (Goethe B1, writing part 2)", genre_fr: "Un avis sur un forum en ligne (Goethe B1, écrit partie 2)",
    plan: [["Your opinion in one sentence.", "Ton avis en une phrase."], ["A fact as an argument.", "Un fait comme argument."], ["An example.", "Un exemple."], ["A hypothesis (Konjunktiv II) and the counter-argument.", "Une hypothèse (Konjunktiv II) et l'argument contraire."], ["A proposal and your conclusion.", "Une proposition et ta conclusion."]],
    marks: [["Ich finde, Jugendliche sollten", "your opinion", "ton avis"], ["Bei der Europawahl ist das in Deutschland seit 2024 schon möglich", "a fact as an argument", "un fait comme argument"], ["für den Klimaschutz", "an example", "un exemple"], ["Wenn sie wählen dürften, würden die Parteien", "Konjunktiv II: a hypothesis", "Konjunktiv II : une hypothèse"], ["aber das gilt auch für viele Erwachsene", "answering the counter-argument", "la réponse à l'argument contraire"], ["wird unsere Demokratie dadurch stärker", "werden: to become", "werden : devenir"]] };

  W.COURSE.push({ id: "b1-10", level: "B1", icon: "landmark", title: "Society and civic life", title_fr: "Société et vie citoyenne",
    intro: "In this last B1 unit, you'll talk about society, politics and getting involved: the n-nouns (den Kollegen, dem Kunden, Herrn Schmidt), the verb werden in all its roles (become, future, passive, würde, a guess), and how to deal with German offices and forms. And you'll discover the test that people take to become German citizens.",
    intro_fr: "Dans cette dernière unité du B1, tu vas parler de société, de politique et d'engagement : les noms de la n-Deklination (den Kollegen, dem Kunden, Herrn Schmidt), le verbe werden dans tous ses rôles (devenir, futur, passif, würde, supposition), et comment t'y retrouver dans l'administration et les formulaires. Et tu découvriras le test que passent les personnes qui veulent devenir allemandes.",
    can: ["Decline n-nouns (Kollege, Kunde, Nachbar, Herr, Name)", "Recognise and use werden as become, future, passive, würde and a guess", "Register your address and deal with forms and offices", "Talk about society, politics and volunteering", "Give your opinion on a social question in a forum (Goethe B1)"],
    can_fr: ["Décliner les noms de la n-Deklination (Kollege, Kunde, Nachbar, Herr, Name)", "Reconnaître et employer werden comme devenir, futur, passif, würde et supposition", "Déclarer ton domicile et t'en sortir avec les formulaires et l'administration", "Parler de société, de politique et de bénévolat", "Donner ton avis sur une question de société dans un forum (Goethe B1)"],
    lessons: [70, 71, 72], vocab: ["gesellschaftDE", "behoerdeDE"], reading: "lebenindeutschland", prompt: "de-b1-10",
    writing: { task: "An online magazine asks: “Should young people be able to vote at 16?” Write your opinion for its forum (80-100 words): your position, a fact, an example, the counter-argument, and your conclusion.", task_fr: "Un magazine en ligne demande : « Les jeunes devraient-ils pouvoir voter dès 16 ans ? » Écris ton avis pour son forum (80 à 100 mots) : ta position, un fait, un exemple, l'argument contraire, et ta conclusion.", words: "80-100",
      tips: ["Ich finde, …", "Bei … ist das schon möglich.", "Wenn …, würden …", "Natürlich …, aber …", "Meiner Meinung nach …"],
      checklist: ["I gave my position clearly", "I used a fact or an example", "I used the Konjunktiv II for a hypothesis", "I answered the counter-argument", "I wrote between 80 and 100 words"],
      checklist_fr: ["J'ai donné clairement ma position", "J'ai employé un fait ou un exemple", "J'ai employé le Konjunktiv II pour une hypothèse", "J'ai répondu à l'argument contraire", "J'ai écrit entre 80 et 100 mots"],
      model: "Ich finde, Jugendliche sollten schon mit sechzehn wählen dürfen. Bei der Europawahl ist das in Deutschland seit 2024 schon möglich, und in einigen Bundesländern auch bei den Landtagswahlen. Viele junge Menschen interessieren sich sehr für Politik, zum Beispiel für den Klimaschutz. Wenn sie wählen dürften, würden die Parteien ihre Meinung ernster nehmen. Natürlich sind nicht alle Sechzehnjährigen gut informiert, aber das gilt auch für viele Erwachsene. Deshalb sollte man in der Schule mehr über Politik lernen. Meiner Meinung nach wird unsere Demokratie dadurch stärker." } });
})();
