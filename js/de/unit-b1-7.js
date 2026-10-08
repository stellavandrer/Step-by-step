/* Cours d'allemand, unité B1-7 « Money and consumption / Argent et consommation » : le Konjunktiv II des hypothèses
   et des souhaits irréels (Wenn ich reich wäre, würde ich…), le Konjunktiv II passé (hätte gemacht, wäre gegangen,
   hätte … sollen) ; la banque, les contrats, réclamer et résilier par écrit. Explications en anglais ET en français.
   Personnages et entreprises fictifs.
   Faits vérifiables seulement : D-Mark introduit le 20 juin 1948 (réforme monétaire des zones occidentales) ; en
   RDA, D-Mark le 1er juillet 1990 (union monétaire) ; euro monnaie scripturale le 1er janvier 1999, pièces et
   billets le 1er janvier 2002 ; 1 euro = 1,95583 DM ; la Bundesbank échange toujours sans limite de temps les
   anciens billets et pièces en DM ; « Teuro » élu mot de l'année 2002 ; en Allemagne, on paie encore souvent en
   espèces, même si la carte progresse ; formule de résiliation « Hiermit kündige ich … fristgerecht zum
   nächstmöglichen Termin ». Écrit : réclamation formelle (Goethe B1, partie 3, un peu plus longue). */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "geldDE", icon: "wallet", title: "Money and banking", title_fr: "Argent et banque", level: "B1", words: [
    ["das Konto, Konten", "the (bank) account", "le compte (bancaire)", "Ich möchte ein Konto eröffnen."],
    ["abheben", "to withdraw (money)", "retirer (de l'argent)", "Ich muss noch Geld am Automaten abheben."],
    ["das Bargeld", "cash", "les espèces, le liquide", "Hast du Bargeld dabei?"],
    ["bar bezahlen", "to pay cash", "payer en espèces", "Kann ich hier mit Karte zahlen, oder nur bar?"],
    ["ausgeben", "to spend (money)", "dépenser", "Wie viel gibst du im Monat für Essen aus?"],
    ["die Ausgabe, -n", "the expense", "la dépense", "Unsere größte Ausgabe ist die Miete."],
    ["die Überweisung, -en", "the bank transfer", "le virement", "Die Überweisung ist schon unterwegs."],
    ["leihen", "to lend; to borrow (sich etwas leihen)", "prêter ; emprunter (sich etwas leihen)", "Kannst du mir zehn Euro leihen?"],
    ["die Schulden (pl)", "debts", "les dettes", "Er hat keine Schulden mehr."],
    ["der Kredit, -e", "the loan", "le crédit, le prêt", "Für die Wohnung haben sie einen Kredit aufgenommen."],
    ["die Zinsen (pl)", "interest", "les intérêts", "Die Zinsen sind im Moment niedrig."],
    ["sich leisten", "to afford", "se permettre, s'offrir", "Ein neues Auto kann ich mir nicht leisten."],
    ["das Taschengeld", "pocket money", "l'argent de poche", "Wie viel Taschengeld bekommst du?"],
    ["der Geldautomat, -en", "the cash machine", "le distributeur de billets", "Wo ist der nächste Geldautomat?"],
    ["die Geheimzahl, -en", "the PIN", "le code secret", "Ich habe meine Geheimzahl vergessen!"]
  ] },
  { id: "konsumDE", icon: "shopping-bag", title: "Buying and complaining", title_fr: "Acheter et réclamer", level: "B1", words: [
    ["die Bestellung, -en", "the order", "la commande", "Ihre Bestellung ist unterwegs."],
    ["die Lieferung, -en", "the delivery", "la livraison", "Die Lieferung dauert drei Tage."],
    ["liefern", "to deliver", "livrer", "Das Paket wird morgen geliefert."],
    ["reklamieren", "to make a complaint (about a product)", "faire une réclamation", "Ich möchte diesen Toaster reklamieren."],
    ["die Reklamation, -en", "the complaint", "la réclamation", "Ihre Reklamation wird bearbeitet."],
    ["die Garantie, -n", "the guarantee, the warranty", "la garantie", "Das Gerät hat zwei Jahre Garantie."],
    ["defekt", "faulty, defective", "défectueux", "Die Kaffeemaschine ist defekt."],
    ["das Gerät, -e", "the appliance, the device", "l'appareil", "Das Gerät funktioniert nicht mehr."],
    ["zurückschicken", "to send back", "renvoyer", "Ich habe die Schuhe zurückgeschickt."],
    ["erstatten", "to refund", "rembourser", "Wir erstatten Ihnen den vollen Preis."],
    ["die Quittung, -en", "the receipt (for a payment)", "le reçu", "Kann ich bitte eine Quittung bekommen?"],
    ["der Gutschein, -e", "the voucher", "le bon (d'achat)", "Ich schenke dir einen Gutschein."],
    ["die Kündigungsfrist, -en", "the notice period", "le délai de résiliation", "Die Kündigungsfrist beträgt drei Monate."],
    ["die Rücksendung, -en", "the return (of goods)", "le retour (d'un article)", "Die Rücksendung ist kostenlos."],
    ["sparsam", "thrifty, economical", "économe", "Meine Oma war immer sehr sparsam."]
  ] });

  W.LESSONS.push(
  {
    id: 61, level: "B1", icon: "sparkles",
    title: "Wenn ich reich wäre…: unreal conditions and wishes", title_fr: "Wenn ich reich wäre… : l'hypothèse et le souhait irréels",
    subtitle: "Imagine what would happen if things were different: the Konjunktiv II of the present.", subtitle_fr: "Imaginer ce qui se passerait si les choses étaient différentes : le Konjunktiv II du présent.",
    body: `
<h2>If… would…</h2>
<p>For something that isn't true now, German uses the Konjunktiv II in both parts: <s-de>Wenn ich mehr Geld hätte, würde ich reisen.</s-de> (If I had more money, I'd travel.) After <s-de>wenn</s-de>, the verb goes to the end; then the main clause starts with its verb.</p>
<h2>The forms</h2>
<p>Most verbs use <s-de>würde</s-de> + infinitive. But <s-de>sein, haben</s-de>, the modal verbs and <s-de>wissen</s-de> have their own forms, and they're very common:</p>
<table>
<tr><th>Verb</th><th>Konjunktiv II</th></tr>
<tr><td><s-de>sein</s-de></td><td><s-de>ich wäre</s-de></td></tr>
<tr><td><s-de>haben</s-de></td><td><s-de>ich hätte</s-de></td></tr>
<tr><td><s-de>können</s-de></td><td><s-de>ich könnte</s-de></td></tr>
<tr><td><s-de>müssen</s-de></td><td><s-de>ich müsste</s-de></td></tr>
<tr><td><s-de>dürfen</s-de></td><td><s-de>ich dürfte</s-de></td></tr>
<tr><td><s-de>wissen</s-de></td><td><s-de>ich wüsste</s-de></td></tr>
<tr><td>other verbs</td><td><s-de>ich würde kaufen</s-de></td></tr>
</table>
<p>In writing, you'll also meet <s-de>käme</s-de> (kommen) and <s-de>ginge</s-de> (gehen): <s-de>Wenn er käme, …</s-de></p>
<h2>Wishes</h2>
<p><s-de>Wenn ich doch mehr Zeit hätte!</s-de> (If only I had more time!) · <s-de>Ich wünschte, ich könnte fliegen.</s-de> · <s-de>Ich hätte gern ein Haus am Meer.</s-de></p>
<div class="tip">Never put <s-de>würde</s-de> in both parts: <s-de>Wenn ich Zeit hätte</s-de>, not "wenn ich Zeit haben würde". Like English: "if I had", not "if I would have". The <s-de>wenn</s-de> part can also come second: <s-de>Ich würde reisen, wenn ich mehr Geld hätte.</s-de></div>
`,
    body_fr: `
<h2>Si… -rais</h2>
<p>Pour ce qui n'est pas vrai en ce moment, l'allemand emploie le Konjunktiv II dans les deux parties, là où le français a l'imparfait après « si » et le conditionnel ensuite : <s-de>Wenn ich mehr Geld hätte, würde ich reisen.</s-de> (Si j'avais plus d'argent, je voyagerais.) Après <s-de>wenn</s-de>, le verbe va à la fin ; la principale commence ensuite par son verbe.</p>
<h2>Les formes</h2>
<p>La plupart des verbes se construisent avec <s-de>würde</s-de> + infinitif. Mais <s-de>sein, haben</s-de>, les verbes de modalité et <s-de>wissen</s-de> ont leur forme propre, très fréquente :</p>
<table>
<tr><th>Verbe</th><th>Konjunktiv II</th></tr>
<tr><td><s-de>sein</s-de></td><td><s-de>ich wäre</s-de></td></tr>
<tr><td><s-de>haben</s-de></td><td><s-de>ich hätte</s-de></td></tr>
<tr><td><s-de>können</s-de></td><td><s-de>ich könnte</s-de></td></tr>
<tr><td><s-de>müssen</s-de></td><td><s-de>ich müsste</s-de></td></tr>
<tr><td><s-de>dürfen</s-de></td><td><s-de>ich dürfte</s-de></td></tr>
<tr><td><s-de>wissen</s-de></td><td><s-de>ich wüsste</s-de></td></tr>
<tr><td>autres verbes</td><td><s-de>ich würde kaufen</s-de></td></tr>
</table>
<p>À l'écrit, tu rencontreras aussi <s-de>käme</s-de> (kommen) et <s-de>ginge</s-de> (gehen) : <s-de>Wenn er käme, …</s-de></p>
<h2>Les souhaits</h2>
<p><s-de>Wenn ich doch mehr Zeit hätte!</s-de> (Si seulement j'avais plus de temps !) · <s-de>Ich wünschte, ich könnte fliegen.</s-de> · <s-de>Ich hätte gern ein Haus am Meer.</s-de></p>
<div class="tip">Le piège francophone : dans la partie avec <s-de>wenn</s-de>, il faut aussi le Konjunktiv II, pas un passé : <s-de>Wenn ich Zeit hätte</s-de> (si j'avais le temps), et non « wenn ich Zeit hatte ». La partie avec <s-de>wenn</s-de> peut aussi venir en second : <s-de>Ich würde reisen, wenn ich mehr Geld hätte.</s-de></div>
`,
    examples: [
      ["Wenn ich mehr Geld hätte, würde ich eine Weltreise machen.", "If I had more money, I'd travel round the world.", "Si j'avais plus d'argent, je ferais le tour du monde."],
      ["Wenn ich du wäre, würde ich das Angebot annehmen.", "If I were you, I'd accept the offer.", "À ta place, j'accepterais l'offre."],
      ["Ich würde dir gern helfen, wenn ich Zeit hätte.", "I'd love to help you if I had time.", "Je t'aiderais volontiers si j'avais le temps."],
      ["Wenn wir näher an der Stadt wohnen würden, bräuchten wir kein Auto.", "If we lived closer to town, we wouldn't need a car.", "Si nous habitions plus près de la ville, nous n'aurions pas besoin de voiture."],
      ["Wenn ich doch nur im Lotto gewinnen könnte!", "If only I could win the lottery!", "Si seulement je pouvais gagner au loto !"],
      ["Ich wünschte, ich wüsste die Antwort.", "I wish I knew the answer.", "J'aimerais bien connaître la réponse."],
      ["Was würdest du machen, wenn du ein Jahr frei hättest?", "What would you do if you had a year off?", "Que ferais-tu si tu avais un an de libre ?"]
    ],
    quiz: [
      { q: "“Wenn ich Zeit ___, würde ich kommen.”", q_fr: "« Wenn ich Zeit ___, würde ich kommen. »", o: ["hätte", "hatte", "habe"], a: 0, ex: "Unreal: Konjunktiv II in the wenn part too: hätte.", ex_fr: "Irréel : Konjunktiv II aussi après wenn : hätte." },
      { q: "“If I were rich, I'd buy a house.”", q_fr: "« Si j'étais riche, j'achèterais une maison. »", o: ["Wenn ich reich wäre, würde ich ein Haus kaufen.", "Wenn ich reich war, würde ich ein Haus kaufen.", "Wenn ich reich wäre, ich würde ein Haus kaufen."], a: 0, ex: "wäre after wenn; then the main verb first: würde ich.", ex_fr: "wäre après wenn ; puis le verbe principal en tête : würde ich." },
      { q: "The Konjunktiv II of “wissen” (ich):", q_fr: "Le Konjunktiv II de « wissen » (ich) :", o: ["ich wüsste", "ich wusste", "ich würde wissen sein"], a: 0, ex: "wissen → wüsste (with an umlaut).", ex_fr: "wissen → wüsste (avec un tréma)." },
      { q: "“If only I had more time!”", q_fr: "« Si seulement j'avais plus de temps ! »", o: ["Wenn ich doch mehr Zeit hätte!", "Wenn ich doch mehr Zeit habe!", "Ob ich doch mehr Zeit hätte!"], a: 0, ex: "A wish: wenn … doch + Konjunktiv II.", ex_fr: "Un souhait : wenn … doch + Konjunktiv II." },
      { q: "Which sentence is correct?", q_fr: "Quelle phrase est correcte ?", o: ["Ich würde kommen, wenn ich könnte.", "Ich würde kommen, wenn ich würde können.", "Ich käme würde, wenn ich könnte."], a: 0, ex: "Modal verbs have their own form: könnte.", ex_fr: "Les verbes de modalité ont leur propre forme : könnte." }
    ]
  },
  {
    id: 62, level: "B1", icon: "rewind",
    title: "Hätte ich das gewusst…: the Konjunktiv II in the past", title_fr: "Hätte ich das gewusst… : le Konjunktiv II passé",
    subtitle: "Regrets and missed chances: what would have happened.", subtitle_fr: "Les regrets et les occasions manquées : ce qui se serait passé.",
    body: `
<h2>hätte or wäre + participle</h2>
<p>For an unreal past, use <s-de>hätte</s-de> or <s-de>wäre</s-de> (the same choice as in the Perfekt) + participle: <s-de>Wenn ich das gewusst hätte, wäre ich früher gekommen.</s-de> (If I had known, I would have come earlier.)</p>
<table>
<tr><th>Time</th><th>Example</th></tr>
<tr><td>present</td><td><s-de>Wenn ich Zeit hätte, würde ich kommen.</s-de></td></tr>
<tr><td>past</td><td><s-de>Wenn ich Zeit gehabt hätte, wäre ich gekommen.</s-de></td></tr>
</table>
<h2>Regrets</h2>
<p><s-de>Ich hätte mehr sparen sollen.</s-de> (I should have saved more.) · <s-de>Wir hätten früher losfahren müssen.</s-de> · <s-de>Das hättest du mir sagen können!</s-de> With a modal verb, the modal comes last, in the infinitive: <s-de>hätte … sparen sollen</s-de>.</p>
<h2>Without wenn</h2>
<p><s-de>Ohne deine Hilfe hätte ich das nicht geschafft.</s-de> (Without your help, I wouldn't have managed.) · <s-de>Fast wäre ich zu spät gekommen!</s-de> (I nearly arrived late!)</p>
<div class="tip">English "should have done" is <s-de>hätte … tun sollen</s-de>, and "could have done" is <s-de>hätte … tun können</s-de>: two infinitives at the end, the modal last. It looks strange at first, but it's always the same pattern.</div>
`,
    body_fr: `
<h2>hätte ou wäre + participe</h2>
<p>Pour un passé irréel, on emploie <s-de>hätte</s-de> ou <s-de>wäre</s-de> (le même choix qu'au Perfekt) + participe, comme le plus-que-parfait et le conditionnel passé français : <s-de>Wenn ich das gewusst hätte, wäre ich früher gekommen.</s-de> (Si j'avais su, j'aurais fait le trajet plus tôt.)</p>
<table>
<tr><th>Temps</th><th>Exemple</th></tr>
<tr><td>présent</td><td><s-de>Wenn ich Zeit hätte, würde ich kommen.</s-de></td></tr>
<tr><td>passé</td><td><s-de>Wenn ich Zeit gehabt hätte, wäre ich gekommen.</s-de></td></tr>
</table>
<h2>Les regrets</h2>
<p><s-de>Ich hätte mehr sparen sollen.</s-de> (J'aurais dû économiser davantage.) · <s-de>Wir hätten früher losfahren müssen.</s-de> · <s-de>Das hättest du mir sagen können!</s-de> (Tu aurais pu me le dire !) Avec un verbe de modalité, celui-ci vient en dernier, à l'infinitif : <s-de>hätte … sparen sollen</s-de>.</p>
<h2>Sans wenn</h2>
<p><s-de>Ohne deine Hilfe hätte ich das nicht geschafft.</s-de> (Sans ton aide, je n'aurais pas réussi.) · <s-de>Fast wäre ich zu spät gekommen!</s-de> (J'ai failli arriver en retard !)</p>
<div class="tip">« J'aurais dû faire » = <s-de>ich hätte … tun sollen</s-de> ; « j'aurais pu faire » = <s-de>ich hätte … tun können</s-de> : deux infinitifs à la fin, le verbe de modalité en dernier. C'est étrange au début, mais c'est toujours le même schéma.</div>
`,
    examples: [
      ["Wenn ich das gewusst hätte, hätte ich dich angerufen.", "If I'd known, I would have called you.", "Si j'avais su, je t'aurais passé un coup de fil."],
      ["Wenn wir früher losgefahren wären, hätten wir den Zug erreicht.", "If we'd set off earlier, we'd have caught the train.", "En partant plus tôt, nous aurions eu le train."],
      ["Ich hätte mehr sparen sollen.", "I should have saved more.", "J'aurais dû économiser davantage."],
      ["Das hättest du mir früher sagen können!", "You could have told me that earlier!", "Tu aurais pu me le dire plus tôt !"],
      ["Ohne deine Hilfe hätte ich die Prüfung nicht bestanden.", "Without your help I wouldn't have passed the exam.", "Sans ton aide, je n'aurais pas réussi l'examen."],
      ["Fast hätte ich meine Geheimzahl vergessen!", "I almost forgot my PIN!", "J'ai failli oublier mon code secret !"],
      ["An deiner Stelle hätte ich den Vertrag nicht unterschrieben.", "If I'd been you, I wouldn't have signed the contract.", "À ta place, je n'aurais pas signé le contrat."]
    ],
    quiz: [
      { q: "“If I had known, I would have come.”", q_fr: "« Si j'avais su, j'aurais fait le déplacement. »", o: ["Wenn ich das gewusst hätte, wäre ich gekommen.", "Wenn ich das gewusst hatte, wäre ich gekommen.", "Wenn ich das gewusst hätte, hätte ich gekommen."], a: 0, ex: "gewusst hätte; kommen takes sein: wäre gekommen.", ex_fr: "gewusst hätte ; kommen se conjugue avec sein : wäre gekommen." },
      { q: "“I should have saved more.”", q_fr: "« J'aurais dû économiser davantage. »", o: ["Ich hätte mehr sparen sollen.", "Ich sollte mehr gespart haben.", "Ich hätte mehr gespart sollen."], a: 0, ex: "hätte + infinitive + sollen at the end.", ex_fr: "hätte + infinitif + sollen à la fin." },
      { q: "“Wenn wir früher losgefahren ___, …”", q_fr: "« Wenn wir früher losgefahren ___, … »", o: ["wären", "hätten", "würden"], a: 0, ex: "losfahren takes sein: wären losgefahren.", ex_fr: "losfahren se conjugue avec sein : wären losgefahren." },
      { q: "“You could have told me!”", q_fr: "« Tu aurais pu me le dire ! »", o: ["Das hättest du mir sagen können!", "Das konntest du mir sagen!", "Das hättest du mir gesagt können!"], a: 0, ex: "hättest … sagen können.", ex_fr: "hättest … sagen können." },
      { q: "“Fast wäre ich gefallen.” means:", q_fr: "« Fast wäre ich gefallen. » veut dire :", o: ["I nearly fell.", "I fell quickly.", "I would fall soon."], o_fr: ["J'ai failli tomber.", "Ma chute a été rapide.", "Je vais bientôt tomber."], a: 0, ex: "fast + Konjunktiv II past = nearly.", ex_fr: "fast + Konjunktiv II passé = faillir." }
    ]
  },
  {
    id: 63, level: "B1", kind: "functional", icon: "wallet",
    title: "Everyday German: banks, contracts and complaints", title_fr: "L'allemand de tous les jours : banque, contrats et réclamations",
    subtitle: "Open an account, pay, cancel a contract and complain in writing, politely and firmly.", subtitle_fr: "Ouvrir un compte, payer, résilier un contrat et réclamer par écrit, poliment et fermement.",
    body: `
<h2>At the bank</h2>
<p><s-de>Ich möchte ein Konto eröffnen.</s-de> · <s-de>Ich brauche eine neue Bankkarte.</s-de> · <s-de>Wie hoch sind die Gebühren?</s-de> (What are the fees?) · <s-de>Ich möchte Geld überweisen.</s-de> In Germany, many people still pay cash in everyday life, even though card payment is spreading: it's worth having some <s-de>Bargeld</s-de> on you, as some small shops and cafés don't take cards.</p>
<h2>Cancelling a contract</h2>
<p>Gym, phone, internet: you usually cancel in writing. A classic formula: <s-de>Hiermit kündige ich meinen Vertrag (Nr. …) fristgerecht zum nächstmöglichen Termin.</s-de> (I hereby cancel my contract with due notice at the earliest possible date.) · <s-de>Bitte bestätigen Sie mir die Kündigung schriftlich.</s-de></p>
<h2>Complaining about a product</h2>
<p><s-de>Ich möchte diesen Artikel reklamieren.</s-de> · <s-de>Das Gerät ist defekt.</s-de> · <s-de>Ich wäre Ihnen dankbar, wenn Sie mir ein neues Gerät schicken könnten.</s-de> · <s-de>Falls das nicht möglich ist, hätte ich gern mein Geld zurück.</s-de> Keep your receipt (<s-de>Kassenbon</s-de>): you'll need it.</p>
<div class="tip">The Konjunktiv II makes a firm request sound polite: <s-de>Ich wäre Ihnen dankbar, wenn…</s-de> · <s-de>Könnten Sie bitte…?</s-de> In a complaint, be precise (date, order number, what's wrong) and say clearly what you want.</div>
`,
    body_fr: `
<h2>À la banque</h2>
<p><s-de>Ich möchte ein Konto eröffnen.</s-de> (Je voudrais ouvrir un compte.) · <s-de>Ich brauche eine neue Bankkarte.</s-de> · <s-de>Wie hoch sind die Gebühren?</s-de> (À combien s'élèvent les frais ?) · <s-de>Ich möchte Geld überweisen.</s-de> En Allemagne, on paie encore souvent en espèces dans la vie quotidienne, même si la carte progresse : mieux vaut avoir un peu de <s-de>Bargeld</s-de> sur soi, car certains petits commerces et cafés n'acceptent pas la carte.</p>
<h2>Résilier un contrat</h2>
<p>Salle de sport, téléphone, Internet : on résilie en général par écrit. Une formule classique : <s-de>Hiermit kündige ich meinen Vertrag (Nr. …) fristgerecht zum nächstmöglichen Termin.</s-de> (Par la présente, je résilie mon contrat dans le respect du préavis, à la date la plus proche possible.) · <s-de>Bitte bestätigen Sie mir die Kündigung schriftlich.</s-de></p>
<h2>Réclamer pour un produit</h2>
<p><s-de>Ich möchte diesen Artikel reklamieren.</s-de> · <s-de>Das Gerät ist defekt.</s-de> · <s-de>Ich wäre Ihnen dankbar, wenn Sie mir ein neues Gerät schicken könnten.</s-de> (Merci de bien vouloir… : en allemand, <s-de>dankbar</s-de> ne s'accorde jamais.) · <s-de>Falls das nicht möglich ist, hätte ich gern mein Geld zurück.</s-de> Garde ton ticket de caisse (<s-de>Kassenbon</s-de>) : tu en auras besoin.</p>
<div class="tip">Le Konjunktiv II rend polie une demande ferme : <s-de>Ich wäre Ihnen dankbar, wenn…</s-de> · <s-de>Könnten Sie bitte…?</s-de> Dans une réclamation, donne des détails précis (date, numéro de commande, problème) et dis clairement ce que tu veux.</div>
`,
    examples: [
      ["Ich möchte gern ein Girokonto eröffnen.", "I'd like to open a current account.", "Je voudrais ouvrir un compte courant."],
      ["Kann ich hier mit Karte zahlen, oder nur bar?", "Can I pay by card here, or only cash?", "Je peux payer par carte ici, ou seulement en espèces ?"],
      ["Hiermit kündige ich meinen Vertrag fristgerecht zum nächstmöglichen Termin.", "I hereby cancel my contract with due notice at the earliest possible date.", "Par la présente, je résilie mon contrat dans le respect du préavis, à la date la plus proche possible."],
      ["Bitte bestätigen Sie mir die Kündigung schriftlich.", "Please confirm the cancellation in writing.", "Merci de me confirmer la résiliation par écrit."],
      ["Ich möchte diesen Wasserkocher reklamieren, er ist defekt.", "I'd like to return this kettle, it's faulty.", "Je voudrais faire une réclamation pour cette bouilloire, elle est défectueuse."],
      ["Ich wäre Ihnen dankbar, wenn Sie mir das Geld erstatten könnten.", "I'd be grateful if you could refund the money.", "Merci de bien vouloir me rembourser."],
      ["Haben Sie noch den Kassenbon?", "Do you still have the receipt?", "Vous avez encore le ticket de caisse ?"]
    ],
    quiz: [
      { q: "“I'd like to open an account.”", q_fr: "« Je voudrais ouvrir un compte. »", o: ["Ich möchte ein Konto eröffnen.", "Ich möchte ein Konto aufmachen lassen werden.", "Ich möchte eine Rechnung öffnen."], a: 0, ex: "ein Konto eröffnen.", ex_fr: "ein Konto eröffnen." },
      { q: "How do you usually cancel a contract in Germany?", q_fr: "Comment résilie-t-on en général un contrat en Allemagne ?", o: ["In writing, respecting the notice period", "By just stopping payment", "Only in person"], o_fr: ["Par écrit, en respectant le préavis", "En arrêtant simplement de payer", "Seulement en personne"], a: 0, ex: "Hiermit kündige ich … fristgerecht …", ex_fr: "Hiermit kündige ich … fristgerecht …" },
      { q: "The politest request in a complaint:", q_fr: "La demande la plus polie dans une réclamation :", o: ["Ich wäre Ihnen dankbar, wenn Sie mir ein neues Gerät schicken könnten.", "Schicken Sie mir sofort ein neues Gerät!", "Ich will ein neues Gerät."], a: 0, ex: "Konjunktiv II: wäre, könnten.", ex_fr: "Konjunktiv II : wäre, könnten." },
      { q: "“das Bargeld” is:", q_fr: "« das Bargeld », c'est :", o: ["cash", "a bar bill", "a bank card"], o_fr: ["les espèces", "l'addition du bar", "une carte bancaire"], a: 0, ex: "bar bezahlen = to pay cash.", ex_fr: "bar bezahlen = payer en espèces." },
      { q: "“What are the fees?”", q_fr: "« À combien s'élèvent les frais ? »", o: ["Wie hoch sind die Gebühren?", "Wie viel sind die Zinsen hoch?", "Was kostet das Konto teuer?"], a: 0, ex: "die Gebühren = fees.", ex_fr: "die Gebühren = les frais." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    61: {
      gap: [["Wenn ich mehr Zeit ___, würde ich mehr lesen.", "hätte"], ["Wenn ich reich ___, würde ich reisen.", "wäre"], ["Ich ___ dir gern helfen, aber ich habe keine Zeit.", "würde"], ["Wenn ich die Antwort ___, würde ich sie dir sagen. (wissen)", "wüsste"]],
      fix: [["Wenn ich Zeit hatte, würde ich kommen.", "Wenn ich Zeit hätte, würde ich kommen.", "Unreal: Konjunktiv II after wenn too (hätte).", "Irréel : Konjunktiv II aussi après wenn (hätte)."], ["Wenn ich würde mehr verdienen, würde ich ein Auto kaufen.", "Wenn ich mehr verdienen würde, würde ich ein Auto kaufen.", "After wenn, the verb (würde) goes to the end.", "Après wenn, le verbe (würde) va à la fin."]],
      task: ["What would you do if you won 100,000 euros? Write four sentences with wenn and the Konjunktiv II.", "Que ferais-tu si tu gagnais 100 000 euros ? Écris quatre phrases avec wenn et le Konjunktiv II.", "Wenn ich hunderttausend Euro gewinnen würde, würde ich zuerst meine Schulden bezahlen. Dann würde ich mit meiner Familie nach Japan fliegen. Einen Teil würde ich sparen, damit ich später ein kleines Haus kaufen könnte. Und wenn noch etwas übrig wäre, würde ich einem Tierheim helfen."]
    },
    62: {
      gap: [["Wenn ich das gewusst ___, wäre ich gekommen.", "hätte"], ["Wenn wir früher losgefahren ___, hätten wir den Zug erreicht.", "wären"], ["Ich hätte mehr sparen ___.", "sollen", "should", "devoir"], ["Das hättest du mir sagen ___!", "können", "could", "pouvoir"]],
      fix: [["Wenn ich das gewusst hätte, hätte ich gekommen.", "Wenn ich das gewusst hätte, wäre ich gekommen.", "kommen takes sein: wäre gekommen.", "kommen se conjugue avec sein : wäre gekommen."], ["Ich hätte mehr gespart sollen.", "Ich hätte mehr sparen sollen.", "With a modal: two infinitives (sparen sollen).", "Avec un verbe de modalité : deux infinitifs (sparen sollen)."]],
      task: ["Think of a decision you regret. Write four sentences with hätte / wäre + participle and hätte … sollen.", "Pense à une décision que tu regrettes. Écris quatre phrases avec hätte / wäre + participe et hätte … sollen.", "Letztes Jahr habe ich ein sehr teures Handy gekauft. Ich hätte länger überlegen sollen. Wenn ich gewartet hätte, wäre es im Angebot viel billiger gewesen. Mit dem Geld wäre ich lieber in den Urlaub gefahren."]
    },
    63: {
      gap: [["Ich möchte ein Konto ___.", "eröffnen", "to open", "ouvrir"], ["Hiermit ___ ich meinen Vertrag fristgerecht.", "kündige"], ["Ich ___ Ihnen dankbar, wenn Sie mir helfen könnten.", "wäre"], ["Haben Sie noch den ___?", "Kassenbon", "receipt", "ticket de caisse"]],
      fix: [["Ich möchte meinen Vertrag kündigen, ab morgen sofort.", "Hiermit kündige ich meinen Vertrag fristgerecht zum nächstmöglichen Termin.", "The standard formula respects the notice period.", "La formule standard respecte le préavis."], ["Ich wäre Ihnen dankbar, wenn Sie mir das Geld erstatten.", "Ich wäre Ihnen dankbar, wenn Sie mir das Geld erstatten könnten.", "Keep the Konjunktiv II in both parts: könnten.", "Garde le Konjunktiv II dans les deux parties : könnten."]],
      task: ["Write a short formal letter cancelling your gym membership (contract number 7731), asking for written confirmation.", "Écris une courte lettre formelle pour résilier ton abonnement à la salle de sport (contrat n° 7731), en demandant une confirmation écrite.", "Sehr geehrte Damen und Herren, hiermit kündige ich meinen Vertrag Nr. 7731 fristgerecht zum nächstmöglichen Termin. Bitte bestätigen Sie mir die Kündigung und das Vertragsende schriftlich. Mit freundlichen Grüßen"]
    }
  });

  W.ROLEPLAYS.push(
  { id: "lottotraum", lesson: 61, level: "B1", icon: "sparkles", partner: "Nico", role: "a friend", role_fr: "un ami",
    title: "If we won the lottery", title_fr: "Si on gagnait au loto",
    setting: "Your friend Nico has just bought a lottery ticket and starts dreaming. Dream along with him.", setting_fr: "Ton ami Nico vient d'acheter un billet de loto et commence à rêver. Rêve avec lui.",
    turns: [
      { p: "Stell dir vor, wir würden eine Million gewinnen! Was würdest du als Erstes machen?", en: "Imagine we won a million! What would you do first?", fr: "Imagine qu'on gagne un million ! Qu'est-ce que tu ferais en premier ?" },
      { y: ["Ich würde meinen Job kündigen und ein Jahr lang reisen.", "Ich würde meinen Job kündigen und ein Jahr lang reisen würden.", "Ich werde meinen Job kündigen und ein Jahr lang reisen."], en: "I'd quit my job and travel for a year.", fr: "Je démissionnerais et je voyagerais pendant un an.", why: "würde + infinitives at the end.", why_fr: "würde + infinitifs à la fin." },
      { p: "Echt? Und wohin würdest du zuerst fahren?", en: "Really? And where would you go first?", fr: "Vraiment ? Et tu irais où en premier ?" },
      { y: ["Wenn ich könnte, würde ich zuerst nach Neuseeland fliegen.", "Wenn ich könnte, ich würde zuerst nach Neuseeland fliegen.", "Wenn ich würde können, würde ich zuerst nach Neuseeland fliegen."], en: "If I could, I'd fly to New Zealand first.", fr: "Si je pouvais, je partirais d'abord en Nouvelle-Zélande.", why: "Modal: könnte; then the main verb first: würde ich.", why_fr: "Modalité : könnte ; puis le verbe principal en tête : würde ich." },
      { p: "Schön! Ich würde mir ein Haus am See kaufen. Aber ich hätte auch Angst, dass alle nur noch mein Geld wollen.", en: "Lovely! I'd buy a house by a lake. But I'd also be afraid that everyone would only want my money.", fr: "Super ! Moi, je m'achèterais une maison au bord d'un lac. Mais j'aurais aussi peur que tout le monde ne veuille plus que mon argent." },
      { y: ["Das verstehe ich. Wenn ich du wäre, würde ich es niemandem erzählen.", "Das verstehe ich. Wenn ich du war, würde ich es niemandem erzählen.", "Das verstehe ich. Wenn ich du wäre, ich würde es niemandem erzählen."], en: "I get it. If I were you, I wouldn't tell anyone.", fr: "Je comprends. À ta place, je ne le dirais à personne.", why: "wäre after wenn; the main verb first.", why_fr: "wäre après wenn ; le verbe principal en tête." },
      { p: "Gute Idee. Ach, letzte Woche hatte ich übrigens fünf Richtige… aber ich hatte den Schein nicht abgegeben!", en: "Good idea. Oh, by the way, last week I had five right numbers… but I hadn't handed in the ticket!", fr: "Bonne idée. Ah, au fait, la semaine dernière, j'avais cinq bons numéros… mais je n'avais pas validé le billet !" },
      { y: ["Das gibt's doch nicht! Wenn du ihn abgegeben hättest, hättest du viel Geld gewonnen!", "Das gibt's doch nicht! Wenn du ihn abgegeben hattest, hättest du viel Geld gewonnen!", "Das gibt's doch nicht! Wenn du ihn abgegeben hättest, wärst du viel Geld gewonnen!"], en: "No way! If you'd handed it in, you'd have won a lot of money!", fr: "C'est pas vrai ! Si tu l'avais validé, tu aurais gagné beaucoup d'argent !", why: "Unreal past: abgegeben hättest … hättest gewonnen.", why_fr: "Passé irréel : abgegeben hättest … hättest gewonnen." },
      { p: "Hm, ehrlich gesagt waren es nur zehn Euro.", en: "Hm, to be honest, it was only ten euros.", fr: "Hum, pour être honnête, ça faisait seulement dix euros." },
      { y: ["Na, dann hättest du uns wenigstens einen Kaffee spendieren können!", "Na, dann hättest du uns wenigstens einen Kaffee spendieren gekonnt!", "Na, dann könntest du uns wenigstens einen Kaffee spendiert haben!"], en: "Well, then you could at least have bought us a coffee!", fr: "Bon, alors tu aurais au moins pu nous offrir un café !", why: "hättest … spendieren können: two infinitives, the modal last.", why_fr: "hättest … spendieren können : deux infinitifs, la modalité en dernier." }
    ] },
  { id: "handyvertrag", lesson: 63, level: "B1", icon: "phone-call", partner: "Frau Kraus", role: "an employee at your mobile phone company", role_fr: "une employée de ton opérateur de téléphonie",
    title: "A wrong phone bill", title_fr: "Une facture de téléphone erronée",
    setting: "Your phone bill is 30 euros too high. You call customer service. Frau Kraus answers.", setting_fr: "Ta facture de téléphone est trop élevée de 30 euros. Tu appelles le service client. Mme Kraus répond.",
    turns: [
      { p: "Kundenservice, mein Name ist Kraus. Wie kann ich Ihnen helfen?", en: "Customer service, my name is Kraus. How can I help you?", fr: "Service client, Kraus à l'appareil. Que puis-je faire pour vous ?" },
      { y: ["Guten Tag. Meine letzte Rechnung ist dreißig Euro zu hoch. Könnten Sie das bitte prüfen?", "Guten Tag. Meine letzte Rechnung ist dreißig Euro zu hoch. Konnten Sie das bitte prüfen?", "Guten Tag. Meine letzte Rechnung ist dreißig Euro zu hoch. Könnten Sie das bitte prüfen werden?"], en: "Hello. My last bill is thirty euros too high. Could you check it, please?", fr: "Bonjour. Ma dernière facture est trop élevée de trente euros. Pourriez-vous vérifier, s'il vous plaît ?", why: "Polite: könnten (Konjunktiv II), not konnten (past).", why_fr: "Poli : könnten (Konjunktiv II), pas konnten (passé)." },
      { p: "Einen Moment… Ich sehe hier Gespräche ins Ausland. Haben Sie im März aus dem Ausland telefoniert?", en: "One moment… I can see calls abroad here. Did you make calls from abroad in March?", fr: "Un instant… Je vois ici des appels vers l'étranger. Avez-vous téléphoné depuis l'étranger en mars ?" },
      { y: ["Nein. Wenn ich im Ausland gewesen wäre, hätte ich es gewusst!", "Nein. Wenn ich im Ausland gewesen hätte, hätte ich es gewusst!", "Nein. Wenn ich im Ausland war, hätte ich es gewusst!"], en: "No. If I'd been abroad, I'd have known!", fr: "Non. Si j'avais été à l'étranger, je le saurais !", why: "sein takes sein: gewesen wäre.", why_fr: "sein se conjugue avec sein : gewesen wäre." },
      { p: "Da haben Sie recht. Das muss ein Fehler sein. Ich erstatte Ihnen die dreißig Euro.", en: "You're right. It must be a mistake. I'll refund you the thirty euros.", fr: "Vous avez raison. Ce doit être une erreur. Je vous rembourse les trente euros." },
      { y: ["Vielen Dank. Ich wäre Ihnen dankbar, wenn Sie mir das schriftlich bestätigen könnten.", "Vielen Dank. Ich wäre Ihnen dankbar, wenn Sie mir das schriftlich bestätigen.", "Vielen Dank. Ich würde Ihnen dankbar, wenn Sie mir das schriftlich bestätigen könnten."], en: "Thank you very much. I'd be grateful if you could confirm that in writing.", fr: "Merci beaucoup. Merci de bien vouloir me le confirmer par écrit.", why: "Ich wäre Ihnen dankbar, wenn … könnten.", why_fr: "Ich wäre Ihnen dankbar, wenn … könnten." },
      { p: "Natürlich, Sie bekommen heute noch eine E-Mail. Kann ich sonst noch etwas für Sie tun?", en: "Of course, you'll get an email today. Is there anything else I can do for you?", fr: "Bien sûr, vous recevrez un e-mail aujourd'hui. Puis-je faire autre chose pour vous ?" },
      { y: ["Ja, eigentlich möchte ich meinen Vertrag kündigen. Wie lang ist die Kündigungsfrist?", "Ja, eigentlich möchte ich meinen Vertrag kündigen. Wie lang ist der Kündigungsfrist?", "Ja, eigentlich möchte ich meinen Vertrag kündigen. Wie lang die Kündigungsfrist ist?"], en: "Yes, actually I'd like to cancel my contract. How long is the notice period?", fr: "Oui, en fait, je voudrais résilier mon contrat. Quel est le délai de résiliation ?", why: "die Frist → die Kündigungsfrist; a direct question: verb second.", why_fr: "die Frist → die Kündigungsfrist ; question directe : verbe en deuxième position." },
      { p: "Einen Monat. Am einfachsten schicken Sie uns eine kurze Kündigung per E-Mail.", en: "One month. The easiest thing is to send us a short cancellation by email.", fr: "Un mois. Le plus simple est de nous envoyer une courte résiliation par e-mail." },
      { y: ["Gut, das mache ich noch heute. Auf Wiederhören!", "Gut, das ich mache noch heute. Auf Wiederhören!", "Gut, das mache ich noch heute. Auf Wiedersehen am Telefon!"], en: "Good, I'll do it today. Goodbye!", fr: "Bien, je le fais aujourd'hui même. Au revoir !", why: "Verb second after das; on the phone: Auf Wiederhören.", why_fr: "Verbe en deuxième position après das ; au téléphone : Auf Wiederhören." }
    ] }
  );

  W.READINGS.push({
    id: "dmarkeuro", level: "B1", icon: "book-open", title: "Von der D-Mark zum Euro", genre: "Article",
    intro: "1948, 1990, 2002: three dates that changed what Germans had in their wallets.",
    intro_fr: "1948, 1990, 2002 : trois dates qui ont changé ce que les Allemands avaient dans leur porte-monnaie.",
    paragraphs: [
      { de: "Am 20. Juni 1948 bekamen die Menschen in den westlichen Zonen Deutschlands eine neue Währung: die Deutsche Mark, kurz D-Mark. Für viele wurde sie zu einem Symbol für den wirtschaftlichen Aufschwung nach dem Krieg.", en: "On 20 June 1948, people in the western zones of Germany got a new currency: the Deutsche Mark, D-Mark for short. For many, it became a symbol of the economic recovery after the war.", fr: "Le 20 juin 1948, les habitants des zones occidentales de l'Allemagne reçurent une nouvelle monnaie : le Deutsche Mark, ou D-Mark. Pour beaucoup, il devint le symbole du redressement économique d'après-guerre." },
      { de: "In der DDR gab es eine eigene Mark. Am 1. Juli 1990, noch vor der Wiedervereinigung, wurde die D-Mark auch dort eingeführt. Viele Menschen in Ostdeutschland hatten lange auf diesen Tag gewartet.", en: "In the GDR there was a separate mark. On 1 July 1990, even before reunification, the D-Mark was introduced there too. Many people in East Germany had waited a long time for this day.", fr: "En RDA, il existait un mark à part. Le 1er juillet 1990, avant même la réunification, le D-Mark y fut introduit à son tour. Beaucoup d'Allemands de l'Est avaient longtemps attendu ce jour." },
      { de: "1999 kam der Euro, zuerst nur auf dem Konto. Am 1. Januar 2002 bekamen die Deutschen dann Euro-Münzen und Euro-Scheine. Für einen Euro musste man 1,95583 D-Mark bezahlen. Viele hatten das Gefühl, dass plötzlich alles teurer war, und das Wort „Teuro“ wurde zum Wort des Jahres 2002.", en: "In 1999 the euro arrived, at first only in bank accounts. Then, on 1 January 2002, Germans got euro coins and notes. One euro cost 1.95583 D-Marks. Many people felt that suddenly everything was more expensive, and the word “Teuro” (from teuer, expensive) became the word of the year 2002.", fr: "En 1999 arriva l'euro, d'abord seulement sur les comptes. Puis, le 1er janvier 2002, les Allemands reçurent les pièces et les billets en euros. Un euro valait 1,95583 D-Mark. Beaucoup eurent l'impression que tout était soudain plus cher, et le mot « Teuro » (de teuer, cher) devint le mot de l'année 2002." },
      { de: "Wer heute noch alte D-Mark zu Hause findet, hat Glück: Die Deutsche Bundesbank tauscht die Scheine und Münzen ohne Frist in Euro um. Wenn man also in einem alten Buch einen Hundertmarkschein entdecken würde, wäre er immer noch etwas wert.", en: "Anyone who still finds old D-Marks at home is in luck: the Deutsche Bundesbank exchanges the notes and coins for euros with no time limit. So if you found a hundred-mark note in an old book, it would still be worth something.", fr: "Si l'on retrouve aujourd'hui de vieux D-Mark chez soi, on a de la chance : la Bundesbank échange les billets et les pièces en euros, sans limite de temps. Si l'on découvrait un billet de cent marks dans un vieux livre, il vaudrait donc toujours quelque chose." }
    ],
    glossary: { "westlichen": ["western", "occidentales"], "Zonen": ["zones", "zones"], "Währung": ["currency", "monnaie"], "Symbol": ["symbol", "symbole"], "wirtschaftlichen": ["economic", "économique"], "Aufschwung": ["upturn, recovery", "essor, redressement"], "Krieg": ["war", "guerre"], "eigene": ["own, separate", "propre, à part"], "Wiedervereinigung": ["reunification", "réunification"], "eingeführt": ["introduced", "introduit"], "Ostdeutschland": ["East Germany", "Allemagne de l'Est"], "Münzen": ["coins", "pièces"], "Scheine": ["notes", "billets"], "Gefühl": ["feeling", "impression, sentiment"], "Teuro": ["“Teuro” (teuer + Euro)", "« Teuro » (teuer + Euro)"], "Bundesbank": ["German central bank", "Banque fédérale"], "tauscht": ["(umtauschen) exchanges", "(umtauschen) échange"], "Frist": ["time limit", "délai"], "Hundertmarkschein": ["hundred-mark note", "billet de cent marks"], "entdecken": ["to discover", "découvrir"], "wert": ["worth", "qui vaut"] },
    questions: [
      { q: "Wann wurde die D-Mark in den westlichen Zonen eingeführt?", o: ["Am 20. Juni 1948", "Am 1. Januar 2002", "Am 1. Juli 1990"], a: 0 },
      { q: "Was passierte am 1. Juli 1990 in der DDR?", o: ["Die D-Mark wurde eingeführt.", "Der Euro kam.", "Die Mauer wurde gebaut."], a: 0 },
      { q: "Seit wann gibt es Euro-Münzen und -Scheine in Deutschland?", o: ["Seit dem 1. Januar 2002", "Seit 1999", "Seit 1948"], a: 0 },
      { q: "Was bedeutet das Wort „Teuro“?", o: ["Das Gefühl, dass mit dem Euro alles teurer war", "Eine neue Münze", "Eine Bank"], a: 0 },
      { q: "Was macht die Bundesbank mit alten D-Mark?", o: ["Sie tauscht sie ohne Frist in Euro um.", "Sie nimmt sie nicht mehr an.", "Sie tauscht sie nur bis 2010 um."], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-b1-7", unit: "b1-7", level: "B1", icon: "messages-square",
    title: "Hätten wir doch gespart!", title_fr: "Si seulement on avait économisé !",
    context: "Pia and Konrad, a couple, look at their bank statement at the end of the month.", context_fr: "Pia et Konrad, en couple, regardent leur relevé de compte à la fin du mois.",
    words: [["der Kontoauszug", "the bank statement", "le relevé de compte"], ["das Abo", "the subscription", "l'abonnement"], ["der Streamingdienst", "the streaming service", "le service de streaming"], ["überziehen", "to overdraw", "être à découvert"], ["sich vornehmen", "to resolve, to plan", "se promettre, prévoir"]],
    lines: [["Pia", "Konrad, schau mal auf den Kontoauszug. Wir haben schon wieder das Konto überzogen.", "de-DE"], ["Konrad", "Oh nein. Ich hätte das neue Fahrrad nicht kaufen sollen.", "de-DE"], ["Pia", "Das Fahrrad ist es nicht nur. Schau: drei Abos für Streamingdienste! Wir schauen doch fast nur einen.", "de-DE"], ["Konrad", "Stimmt. Wenn wir zwei kündigen würden, würden wir jeden Monat zwanzig Euro sparen.", "de-DE"], ["Pia", "Und wir gehen zu oft essen. Wenn wir öfter zu Hause kochen würden, hätten wir am Ende des Monats mehr Geld.", "de-DE"], ["Konrad", "Ja… Hätten wir doch letztes Jahr angefangen zu sparen! Dann hätten wir jetzt genug für den Urlaub.", "de-DE"], ["Pia", "Jammern hilft nicht. Lass uns einen Plan machen: Jeden Monat legen wir hundert Euro zur Seite.", "de-DE"], ["Konrad", "Einverstanden. Und ab heute nehme ich mir vor, kein Geld mehr für Dinge auszugeben, die ich nicht brauche.", "de-DE"]],
    gist: ["Worüber sprechen Pia und Konrad?", ["Über ihre Ausgaben und wie sie sparen können", "Über ein neues Fahrrad für Pia", "Über ihren Urlaub in Italien"]],
    detail: [["Was ist mit dem Konto passiert?", ["Sie haben es überzogen.", "Sie haben viel Geld bekommen.", "Die Bank hat es geschlossen."]], ["Was bereut Konrad?", ["Den Kauf des neuen Fahrrads", "Den Urlaub", "Das Essen im Restaurant"]], ["Wie viel könnten sie mit weniger Abos sparen?", ["Zwanzig Euro pro Monat", "Hundert Euro pro Monat", "Zehn Euro pro Jahr"]], ["Was ist ihr Plan?", ["Jeden Monat hundert Euro zur Seite legen", "Ein neues Konto eröffnen", "Mehr essen gehen"]]],
    decode: ["Ich hätte das neue Fahrrad nicht kaufen sollen.", "Hätten wir doch letztes Jahr angefangen zu sparen!"],
    tip: "Listen for hätte, wäre and würde: they tell you that the speaker is imagining or regretting, not describing what really happened. Without them, the sentence would be about real facts.", tip_fr: "Repère hätte, wäre et würde : ils t'indiquent que la personne imagine ou regrette, et ne décrit pas ce qui s'est vraiment passé. Sans eux, la phrase parlerait de faits réels."
  }]);

  W.PROMPTS.push({ id: "de-b1-7", level: "B1", q: "Was würdest du machen, wenn du ein Jahr lang nicht arbeiten müsstest? Und gibt es eine Entscheidung, die du heute anders treffen würdest?", en: "What would you do if you didn't have to work for a year? And is there a decision you'd make differently today?", fr: "Que ferais-tu si tu n'avais pas à travailler pendant un an ? Et y a-t-il une décision que tu prendrais différemment aujourd'hui ?", time: 120,
    phrases: ["Wenn ich ein Jahr frei hätte, würde ich…", "Am liebsten würde ich…", "Ich hätte gern…", "Ich hätte … sollen.", "Wenn ich das gewusst hätte, …"],
    model: "Wenn ich ein Jahr frei hätte, würde ich zuerst Spanisch lernen, und zwar in Spanien. Danach würde ich mit dem Zug durch Europa fahren, ohne Plan. Am liebsten würde ich auch ein paar Monate auf einem Bauernhof arbeiten. Eine Entscheidung, die ich heute anders treffen würde? Ich hätte nach der Schule ein Jahr ins Ausland gehen sollen. Wenn ich das gemacht hätte, würde ich heute bestimmt besser Englisch sprechen." });

  W.WRITING_GUIDE["b1-7"] = { genre: "A formal complaint (Goethe B1, writing part 3)", genre_fr: "Une réclamation formelle (Goethe B1, écrit partie 3)",
    plan: [["A subject line with the order number.", "Un objet avec le numéro de commande."], ["What you ordered, and when.", "Ce que tu as commandé, et quand."], ["The problem, precisely.", "Le problème, précisément."], ["A polite but clear request (Konjunktiv II), and an alternative.", "Une demande polie mais claire (Konjunktiv II), et une alternative."], ["The attachment, and the formal closing.", "La pièce jointe, et la formule finale."]],
    marks: [["Betreff: Reklamation", "the subject line", "l'objet"], ["Leider war das Gerät bei der Lieferung kaputt", "the problem", "le problème"], ["Ich wäre Ihnen dankbar, wenn Sie mir", "a very polite request (Konjunktiv II)", "une demande très polie (Konjunktiv II)"], ["schicken könnten", "Konjunktiv II at the end of the wenn clause", "Konjunktiv II à la fin de la proposition en wenn"], ["hätte ich gern mein Geld zurück", "an alternative", "une alternative"], ["Fotos des Schadens", "the genitive", "le génitif"]] };

  W.COURSE.push({ id: "b1-7", level: "B1", icon: "wallet", title: "Money and consumption", title_fr: "Argent et consommation",
    intro: "In this unit, you'll talk about money, dreams and regrets: the Konjunktiv II for unreal conditions and wishes (Wenn ich reich wäre, würde ich…), the Konjunktiv II in the past for what could have been (hätte gemacht, wäre gekommen, hätte … sollen), and how to deal with banks, contracts and complaints. And you'll follow the story from the D-Mark to the euro.",
    intro_fr: "Dans cette unité, tu vas parler d'argent, de rêves et de regrets : le Konjunktiv II des hypothèses et des souhaits irréels (Wenn ich reich wäre, würde ich…), le Konjunktiv II passé pour ce qui aurait pu être (hätte gemacht, wäre gekommen, hätte … sollen), et comment t'y prendre avec la banque, les contrats et les réclamations. Et tu suivras l'histoire du D-Mark à l'euro.",
    can: ["Talk about unreal situations and wishes with the Konjunktiv II", "Express regrets with hätte / wäre + participle and hätte … sollen", "Open an account, pay and talk about money", "Cancel a contract and complain in writing", "Write a formal complaint (Goethe B1)"],
    can_fr: ["Parler de situations irréelles et de souhaits avec le Konjunktiv II", "Exprimer des regrets avec hätte / wäre + participe et hätte … sollen", "Ouvrir un compte, payer et parler d'argent", "Résilier un contrat et réclamer par écrit", "Écrire une réclamation formelle (Goethe B1)"],
    lessons: [61, 62, 63], vocab: ["geldDE", "konsumDE"], reading: "dmarkeuro", prompt: "de-b1-7",
    writing: { task: "You ordered a coffee machine online, and it arrived broken. Write a formal complaint to the shop (60-80 words): what you ordered and when, the problem, what you'd like (a new machine or a refund), and mention the photos attached.", task_fr: "Tu as commandé une machine à café en ligne, et elle est arrivée cassée. Écris une réclamation formelle au magasin (60 à 80 mots) : ce que tu as commandé et quand, le problème, ce que tu souhaites (une nouvelle machine ou un remboursement), et mentionne les photos jointes.", words: "60-80",
      tips: ["Betreff: Reklamation – Bestellung Nr. …", "Sehr geehrte Damen und Herren,", "Leider…", "Ich wäre Ihnen dankbar, wenn…", "Falls das nicht möglich ist, …", "Mit freundlichen Grüßen"],
      checklist: ["I wrote a subject line with the order number", "I described the problem precisely", "I made a request with the Konjunktiv II", "I offered an alternative (falls…)", "I wrote between 60 and 80 words"],
      checklist_fr: ["J'ai écrit un objet avec le numéro de commande", "J'ai décrit le problème précisément", "J'ai formulé une demande au Konjunktiv II", "J'ai proposé une alternative (falls…)", "J'ai écrit entre 60 et 80 mots"],
      model: "Betreff: Reklamation – Bestellung Nr. 48213\n\nSehr geehrte Damen und Herren,\n\nam 3. März habe ich bei Ihnen eine Kaffeemaschine bestellt. Leider war das Gerät bei der Lieferung kaputt: Der Wassertank ist gebrochen. Ich wäre Ihnen dankbar, wenn Sie mir so schnell wie möglich ein neues Gerät schicken könnten. Falls das nicht möglich ist, hätte ich gern mein Geld zurück. Fotos des Schadens finden Sie im Anhang.\n\nMit freundlichen Grüßen\nJo Brandt" } });
})();
