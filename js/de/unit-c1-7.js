/* Cours d'allemand, unité C1-7 « Law and justice / Droit et justice » : le passif impersonnel et les autres formes
   passives (Hier wird nicht geraucht ; Er bekam die Kosten erstattet ; Das gehört verboten), les prépositions de la
   langue juridique (gemäß, kraft, seitens, vorbehaltlich, zuzüglich), former un recours (Widerspruch, Einspruch).
   Personnages fictifs, prénoms allemands.
   Faits vérifiables seulement : la Cour constitutionnelle fédérale siège à Karlsruhe depuis 1951 ; deux sénats de
   huit juges ; juges élus pour moitié par le Bundestag et pour moitié par le Bundesrat, à la majorité des deux tiers,
   pour douze ans sans réélection ; tout citoyen peut former un recours constitutionnel s'il estime ses droits
   fondamentaux violés par la puissance publique (en général après épuisement des voies de recours) ; seule une très
   petite partie aboutit ; arrêt Lüth (1958) ; arrêt sur le recensement (1983) et « droit à l'autodétermination
   informationnelle » ; échevins (Schöffen) : juges non professionnels dans les tribunaux pénaux, mandat de cinq
   ans, même droit de vote que les juges professionnels, âgés de 25 à 69 ans lors de leur nomination ; en Allemagne,
   les enregistrements audio et vidéo pendant les audiences sont en principe interdits ; délai de recours contre une
   décision administrative : en général un mois ; opposition à une amende (Bußgeldbescheid) : deux semaines. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "justizDE", icon: "scale", title: "Courts and justice", title_fr: "Tribunaux et justice", level: "C1", words: [
    ["das Gericht, -e", "the court", "le tribunal", "Der Fall kommt nächste Woche vor Gericht."],
    ["der Richter, - (die Richterin)", "the judge", "le juge, la juge", "Die Richterin hörte beide Seiten an."],
    ["die Klage, -n", "the lawsuit, the action", "la plainte, l'action en justice", "Die Mieter haben eine Klage eingereicht."],
    ["verklagen", "to sue", "poursuivre en justice", "Sie hat ihren früheren Arbeitgeber verklagt."],
    ["der / die Angeklagte, -n", "the defendant, the accused", "l'accusé, l'accusée", "Der Angeklagte bestreitet die Vorwürfe."],
    ["die Anklage, -n", "the charge, the indictment", "l'accusation", "Die Staatsanwaltschaft hat Anklage erhoben."],
    ["der Prozess, -e", "the trial", "le procès", "Der Prozess dauerte drei Monate."],
    ["das Urteil, -e", "the verdict, the judgment", "le jugement, le verdict", "Das Urteil wird am Freitag verkündet."],
    ["verurteilen", "to convict, to sentence", "condamner", "Er wurde zu einer Geldstrafe verurteilt."],
    ["freisprechen", "to acquit", "acquitter", "Die Angeklagte wurde aus Mangel an Beweisen freigesprochen."],
    ["der Freispruch, ¨-e", "the acquittal", "l'acquittement", "Der Freispruch überraschte viele Beobachter."],
    ["die Geldstrafe, -n", "the fine", "l'amende (pénale)", "Das Gericht verhängte eine hohe Geldstrafe."],
    ["der Zeuge, -n (die Zeugin)", "the witness", "le témoin", "Die Zeugin sagte vor Gericht aus."],
    ["die Aussage, -n", "the statement, the testimony", "la déposition, le témoignage", "Seine Aussage widersprach den Fakten."],
    ["die Berufung, -en", "the appeal", "l'appel", "Die Verteidigung hat Berufung eingelegt."],
    ["die Straftat, -en", "the criminal offence", "l'infraction pénale", "Betrug ist eine Straftat."]
  ] },
  { id: "verwaltungDE", icon: "file-text", title: "Official decisions and appeals", title_fr: "Décisions administratives et recours", level: "C1", words: [
    ["der Bescheid, -e", "the official notice, the decision", "la décision (administrative), l'avis", "Den Bescheid habe ich gestern bekommen."],
    ["der Widerspruch, ¨-e", "the objection, the appeal (to an authority)", "le recours (administratif)", "Gegen den Bescheid können Sie Widerspruch einlegen."],
    ["der Einspruch, ¨-e", "the objection (e.g. against a fine)", "l'opposition, la réclamation", "Gegen den Bußgeldbescheid habe ich Einspruch eingelegt."],
    ["fristgerecht", "within the time limit", "dans les délais", "Der Widerspruch ging fristgerecht ein."],
    ["zuständig (für + Akk.)", "responsible (for), competent", "compétent (pour)", "Welche Behörde ist dafür zuständig?"],
    ["die Begründung, -en", "the reasons, the justification", "la motivation, la justification", "Der Bescheid enthält keine Begründung."],
    ["der Antragsteller, - (die Antragstellerin)", "the applicant", "le demandeur, la demandeuse", "Der Antragsteller muss seine Einkünfte nachweisen."],
    ["bewilligen", "to grant, to approve", "accorder, approuver", "Der Zuschuss wurde für zwei Jahre bewilligt."],
    ["ablehnen", "to reject, to refuse", "refuser, rejeter", "Die Behörde hat meinen Antrag abgelehnt."],
    ["die Ablehnung, -en", "the rejection", "le refus", "Gegen die Ablehnung kann man vorgehen."],
    ["aufheben", "to revoke, to overturn", "annuler, abroger", "Das Gericht hob den Bescheid auf."],
    ["rechtskräftig", "final, legally binding", "définitif, exécutoire", "Das Urteil ist noch nicht rechtskräftig."],
    ["die Rechtsgrundlage, -n", "the legal basis", "la base juridique", "Für diese Gebühr fehlt eine Rechtsgrundlage."],
    ["der Bußgeldbescheid, -e", "the notice of a fine", "l'avis de contravention", "Der Bußgeldbescheid kam drei Wochen später."],
    ["die Gebühr, -en", "the fee", "les frais, la redevance", "Für den neuen Ausweis fällt eine Gebühr an."],
    ["der Verstoß, ¨-e (gegen + Akk.)", "the violation (of)", "l'infraction (à)", "Das war ein klarer Verstoß gegen die Hausordnung."]
  ] });

  W.LESSONS.push(
  {
    id: 121, level: "C1", icon: "ban",
    title: "Hier wird nicht geraucht: impersonal and other passive forms", title_fr: "Hier wird nicht geraucht : le passif impersonnel et les autres formes passives",
    subtitle: "Passives without a subject, passives with bekommen, and the colloquial gehören.", subtitle_fr: "Le passif sans sujet, le passif avec bekommen, et le gehören familier.",
    body: `
<h2>The impersonal passive</h2>
<p>German can make a passive from verbs without an object; the sentence then has no subject: <s-de>Hier wird nicht geraucht.</s-de> (There's no smoking here.) · <s-de>Am Sonntag wird nicht gearbeitet.</s-de> If nothing else is in first position, <s-de>es</s-de> fills it: <s-de>Es wird viel gelacht.</s-de> but <s-de>Bei uns wird viel gelacht.</s-de></p>
<p>The same form gives a firm instruction: <s-de>Jetzt wird aufgeräumt!</s-de> (Time to tidy up, now!)</p>
<h2>The bekommen passive</h2>
<p>When someone <b>receives</b> something, they can be the subject, with <s-de>bekommen</s-de> + participle: <s-de>Er bekam die Kosten erstattet.</s-de> = <s-de>Ihm wurden die Kosten erstattet.</s-de> · <s-de>Sie bekommt den Führerschein entzogen.</s-de> (Her licence is being taken away.)</p>
<h2>gehören + participle</h2>
<p>In speech, especially in southern Germany and Austria: <s-de>Das gehört verboten!</s-de> = that ought to be banned. Strong and colloquial: not for formal texts.</p>
<div class="tip">Rules and house regulations love the impersonal passive: <s-de>Im Hof wird nicht gegrillt. Nach 22 Uhr wird nicht gebohrt.</s-de> It states the rule without naming who has to follow it, which sounds both neutral and firm.</div>
`,
    body_fr: `
<h2>Le passif impersonnel</h2>
<p>L'allemand peut mettre au passif des verbes sans complément d'objet ; la phrase n'a alors pas de sujet : <s-de>Hier wird nicht geraucht.</s-de> (Ici, on ne fume pas.) · <s-de>Am Sonntag wird nicht gearbeitet.</s-de> Si rien d'autre n'occupe la première place, <s-de>es</s-de> la remplit : <s-de>Es wird viel gelacht.</s-de> mais <s-de>Bei uns wird viel gelacht.</s-de></p>
<p>La même forme sert de consigne ferme : <s-de>Jetzt wird aufgeräumt!</s-de> (Maintenant, on range !)</p>
<h2>Le passif avec bekommen</h2>
<p>Quand quelqu'un <b>reçoit</b> quelque chose, il peut devenir le sujet, avec <s-de>bekommen</s-de> + participe : <s-de>Er bekam die Kosten erstattet.</s-de> = <s-de>Ihm wurden die Kosten erstattet.</s-de> (On lui a remboursé les frais.) · <s-de>Sie bekommt den Führerschein entzogen.</s-de> (On lui retire son permis.)</p>
<h2>gehören + participe</h2>
<p>À l'oral, surtout dans le sud de l'Allemagne et en Autriche : <s-de>Das gehört verboten!</s-de> = ça devrait être interdit. Fort et familier : pas pour un texte soutenu.</p>
<div class="tip">Les règlements et les règlements d'immeuble adorent le passif impersonnel : <s-de>Im Hof wird nicht gegrillt. Nach 22 Uhr wird nicht gebohrt.</s-de> Il énonce la règle sans nommer qui doit la respecter, ce qui sonne à la fois neutre et ferme.</div>
`,
    examples: [
      ["Hier wird nicht geraucht.", "There's no smoking here.", "Ici, on ne fume pas."],
      ["Im Hof wird nach 22 Uhr nicht mehr gegrillt.", "There's no barbecuing in the courtyard after 10 pm.", "Dans la cour, on ne fait plus de barbecue après 22 heures."],
      ["Bei uns im Team wird viel gelacht.", "There's a lot of laughing in our team.", "Dans notre équipe, on rit beaucoup."],
      ["Jetzt wird aufgeräumt!", "Right, time to tidy up!", "Maintenant, on range !"],
      ["Er bekam die Reisekosten vollständig erstattet.", "He had his travel costs fully reimbursed.", "On lui a intégralement remboursé ses frais de déplacement."],
      ["Wer zu schnell fährt, bekommt unter Umständen den Führerschein entzogen.", "If you drive too fast, you may have your licence taken away.", "Si on roule trop vite, on peut se voir retirer son permis."],
      ["So etwas gehört verboten!", "That sort of thing ought to be banned!", "Ce genre de chose devrait être interdit !"]
    ],
    quiz: [
      { q: "“No working on Sundays.” (impersonal passive)", q_fr: "« Le dimanche, on ne travaille pas. » (passif impersonnel)", o: ["Am Sonntag wird nicht gearbeitet.", "Am Sonntag es wird nicht gearbeitet.", "Am Sonntag ist nicht gearbeitet."], a: 0, ex: "No subject; no es when something else is in first position.", ex_fr: "Pas de sujet ; pas de es quand autre chose occupe la première place." },
      { q: "___ wird getanzt. (nothing else first)", q_fr: "___ wird getanzt. (rien d'autre en tête)", o: ["Es", "Man", "Er"], a: 0, ex: "es fills the first position.", ex_fr: "es occupe la première place." },
      { q: "“He had the costs reimbursed.” (bekommen passive)", q_fr: "« On lui a remboursé les frais. » (passif avec bekommen)", o: ["Er bekam die Kosten erstattet.", "Er wurde die Kosten erstattet.", "Er bekam die Kosten erstatten."], a: 0, ex: "bekommen + participle; the receiver is the subject.", ex_fr: "bekommen + participe ; celui qui reçoit est le sujet." },
      { q: "“Das gehört verboten!” is…", q_fr: "« Das gehört verboten! », c'est…", o: ["colloquial: it ought to be banned", "a formal legal formula", "a past tense"], o_fr: ["familier : ça devrait être interdit", "une formule juridique soutenue", "un temps du passé"], a: 0, ex: "Colloquial, mainly southern.", ex_fr: "Familier, surtout dans le Sud." },
      { q: "A firm instruction: “___ wird aufgeräumt!”", q_fr: "Une consigne ferme : « ___ wird aufgeräumt! »", o: ["Jetzt", "Es ist", "Man"], a: 0, ex: "Jetzt wird aufgeräumt!", ex_fr: "Jetzt wird aufgeräumt!" }
    ]
  },
  {
    id: 122, level: "C1", icon: "gavel",
    title: "Gemäß, kraft, vorbehaltlich: prepositions of legal German", title_fr: "Gemäß, kraft, vorbehaltlich : les prépositions de la langue juridique",
    subtitle: "Read contracts, rules and official letters with confidence.", subtitle_fr: "Lire contrats, règlements et courriers officiels en toute confiance.",
    body: `
<h2>Prepositions of official German</h2>
<table>
<tr><th>Preposition</th><th>Meaning and example</th></tr>
<tr><td><s-de>gemäß</s-de> (+ dat.)</td><td>according to: <s-de>gemäß § 5 des Vertrags</s-de> · <s-de>dem Vertrag gemäß</s-de></td></tr>
<tr><td><s-de>entsprechend</s-de> (+ dat.)</td><td>in accordance with: <s-de>entsprechend Ihrem Wunsch</s-de></td></tr>
<tr><td><s-de>kraft</s-de> (+ gen.)</td><td>by virtue of: <s-de>kraft Gesetzes</s-de></td></tr>
<tr><td><s-de>seitens</s-de> (+ gen.)</td><td>on the part of: <s-de>seitens der Behörde</s-de></td></tr>
<tr><td><s-de>vorbehaltlich</s-de> (+ gen.)</td><td>subject to: <s-de>vorbehaltlich der Zustimmung</s-de></td></tr>
<tr><td><s-de>unbeschadet</s-de> (+ gen.)</td><td>without prejudice to: <s-de>unbeschadet weiterer Ansprüche</s-de></td></tr>
<tr><td><s-de>zuzüglich / abzüglich</s-de> (+ gen.)</td><td>plus / minus: <s-de>zuzüglich der Nebenkosten</s-de></td></tr>
</table>
<h2>Without an article</h2>
<p>When there's no article to show the genitive, these prepositions often take the dative or no visible case: <s-de>zuzüglich Versandkosten</s-de>, <s-de>gemäß Paragraf 5</s-de>.</p>
<div class="tip">You don't need to use all of these when you speak. But if you can read them, contracts, rental agreements and letters from the authorities become much less intimidating: <s-de>Die Kaution ist gemäß § 4 des Mietvertrags zuzüglich Zinsen zurückzuzahlen.</s-de></div>
`,
    body_fr: `
<h2>Les prépositions de l'allemand administratif</h2>
<table>
<tr><th>Préposition</th><th>Sens et exemple</th></tr>
<tr><td><s-de>gemäß</s-de> (+ dat.)</td><td>conformément à : <s-de>gemäß § 5 des Vertrags</s-de> · <s-de>dem Vertrag gemäß</s-de></td></tr>
<tr><td><s-de>entsprechend</s-de> (+ dat.)</td><td>conformément à : <s-de>entsprechend Ihrem Wunsch</s-de></td></tr>
<tr><td><s-de>kraft</s-de> (+ gén.)</td><td>en vertu de : <s-de>kraft Gesetzes</s-de></td></tr>
<tr><td><s-de>seitens</s-de> (+ gén.)</td><td>de la part de : <s-de>seitens der Behörde</s-de></td></tr>
<tr><td><s-de>vorbehaltlich</s-de> (+ gén.)</td><td>sous réserve de : <s-de>vorbehaltlich der Zustimmung</s-de></td></tr>
<tr><td><s-de>unbeschadet</s-de> (+ gén.)</td><td>sans préjudice de : <s-de>unbeschadet weiterer Ansprüche</s-de></td></tr>
<tr><td><s-de>zuzüglich / abzüglich</s-de> (+ gén.)</td><td>plus / moins : <s-de>zuzüglich der Nebenkosten</s-de></td></tr>
</table>
<h2>Sans article</h2>
<p>Quand aucun article ne marque le génitif, ces prépositions prennent souvent le datif ou aucun cas visible : <s-de>zuzüglich Versandkosten</s-de>, <s-de>gemäß Paragraf 5</s-de>.</p>
<div class="tip">Tu n'as pas besoin de toutes les employer à l'oral. Mais si tu sais les lire, les contrats, les baux et les courriers de l'administration deviennent bien moins intimidants : <s-de>Die Kaution ist gemäß § 4 des Mietvertrags zuzüglich Zinsen zurückzuzahlen.</s-de></div>
`,
    examples: [
      ["Gemäß § 5 des Vertrags beträgt die Kündigungsfrist drei Monate.", "In accordance with section 5 of the contract, the notice period is three months.", "Conformément à l'article 5 du contrat, le délai de préavis est de trois mois."],
      ["Entsprechend Ihrem Wunsch haben wir den Termin verschoben.", "In accordance with your request, we have postponed the appointment.", "Conformément à votre souhait, nous avons reporté le rendez-vous."],
      ["Kraft Gesetzes ist der Vertrag unwirksam.", "By virtue of the law, the contract is void.", "En vertu de la loi, le contrat est nul."],
      ["Seitens der Behörde gab es keine Einwände.", "There were no objections on the part of the authority.", "Il n'y a pas eu d'objection de la part de l'administration."],
      ["Vorbehaltlich der Zustimmung des Vermieters dürfen Sie einen Hund halten.", "Subject to the landlord's approval, you may keep a dog.", "Sous réserve de l'accord du propriétaire, vous pouvez avoir un chien."],
      ["Die Miete beträgt 800 Euro zuzüglich der Nebenkosten.", "The rent is 800 euros plus service charges.", "Le loyer s'élève à 800 euros, charges en sus."],
      ["Die Kaution ist abzüglich der Reparaturkosten zurückzuzahlen.", "The deposit is to be repaid minus the repair costs.", "La caution doit être restituée, déduction faite des frais de réparation."]
    ],
    quiz: [
      { q: "“subject to approval”", q_fr: "« sous réserve d'accord »", o: ["vorbehaltlich der Zustimmung", "gemäß der Zustimmung", "kraft die Zustimmung"], a: 0, ex: "vorbehaltlich + genitive.", ex_fr: "vorbehaltlich + génitif." },
      { q: "“on the part of the company”", q_fr: "« de la part de l'entreprise »", o: ["seitens der Firma", "seitens die Firma", "kraft der Firma"], a: 0, ex: "seitens + genitive.", ex_fr: "seitens + génitif." },
      { q: "800 Euro ___ Nebenkosten (plus)", q_fr: "800 Euro ___ Nebenkosten (en plus)", o: ["zuzüglich", "abzüglich", "unbeschadet"], a: 0, ex: "zuzüglich = plus.", ex_fr: "zuzüglich = en sus." },
      { q: "“by virtue of the law”", q_fr: "« en vertu de la loi »", o: ["kraft Gesetzes", "kraft dem Gesetz", "gemäß des Gesetzes kraft"], a: 0, ex: "kraft + genitive, often without an article.", ex_fr: "kraft + génitif, souvent sans article." },
      { q: "“In accordance with your request…”", q_fr: "« Conformément à votre souhait… »", o: ["Entsprechend Ihrem Wunsch…", "Entsprechend Ihres Wunsches…", "Gemäß Ihren Wunsch…"], a: 0, ex: "entsprechend + dative.", ex_fr: "entsprechend + datif." }
    ]
  },
  {
    id: 123, level: "C1", kind: "functional", icon: "file-text",
    title: "Everyday German: lodging an objection", title_fr: "L'allemand de tous les jours : former un recours",
    subtitle: "Contest an official decision clearly, within the deadline and with reasons.", subtitle_fr: "Contester une décision officielle clairement, dans les délais et avec des arguments.",
    body: `
<h2>Widerspruch or Einspruch?</h2>
<p>Against most decisions of an authority (<s-de>Bescheid</s-de>), you lodge a <s-de>Widerspruch</s-de>, usually within one month. Against a fine (<s-de>Bußgeldbescheid</s-de>), you lodge an <s-de>Einspruch</s-de>, usually within two weeks. The exact deadline is stated at the end of the notice (<s-de>Rechtsbehelfsbelehrung</s-de>): always read it.</p>
<h2>The structure</h2>
<table>
<tr><th>Part</th><th>German</th></tr>
<tr><td>reference</td><td><s-de>Ihr Bescheid vom 3. März, Aktenzeichen 12/345</s-de></td></tr>
<tr><td>the objection</td><td><s-de>Hiermit lege ich gegen den oben genannten Bescheid fristgerecht Widerspruch ein.</s-de></td></tr>
<tr><td>reasons</td><td><s-de>Zur Begründung führe ich Folgendes an: …</s-de> · <s-de>Der Bescheid beruht auf der falschen Annahme, dass…</s-de></td></tr>
<tr><td>request</td><td><s-de>Ich beantrage, den Bescheid aufzuheben.</s-de> · <s-de>Ich bitte um eine erneute Prüfung.</s-de></td></tr>
<tr><td>attachments</td><td><s-de>Anlagen: Kopie des Mietvertrags</s-de></td></tr>
</table>
<div class="tip">Stay factual and precise: dates, file number, documents. Send the objection in writing (keep a copy and proof of sending), and don't miss the deadline: after it, the decision becomes final (<s-de>bestandskräftig</s-de> or <s-de>rechtskräftig</s-de>). If in doubt, consumer advice centres, tenants' associations or a lawyer can help.</div>
`,
    body_fr: `
<h2>Widerspruch ou Einspruch ?</h2>
<p>Contre la plupart des décisions de l'administration (<s-de>Bescheid</s-de>), on forme un <s-de>Widerspruch</s-de> (recours), en général dans un délai d'un mois. Contre une amende (<s-de>Bußgeldbescheid</s-de>), on forme un <s-de>Einspruch</s-de> (opposition), en général dans un délai de deux semaines. Le délai exact figure à la fin de la décision (<s-de>Rechtsbehelfsbelehrung</s-de>, l'indication des voies de recours) : lis-la toujours.</p>
<h2>La structure</h2>
<table>
<tr><th>Partie</th><th>En allemand</th></tr>
<tr><td>la référence</td><td><s-de>Ihr Bescheid vom 3. März, Aktenzeichen 12/345</s-de></td></tr>
<tr><td>le recours</td><td><s-de>Hiermit lege ich gegen den oben genannten Bescheid fristgerecht Widerspruch ein.</s-de></td></tr>
<tr><td>les motifs</td><td><s-de>Zur Begründung führe ich Folgendes an: …</s-de> · <s-de>Der Bescheid beruht auf der falschen Annahme, dass…</s-de></td></tr>
<tr><td>la demande</td><td><s-de>Ich beantrage, den Bescheid aufzuheben.</s-de> · <s-de>Ich bitte um eine erneute Prüfung.</s-de></td></tr>
<tr><td>les pièces jointes</td><td><s-de>Anlagen: Kopie des Mietvertrags</s-de></td></tr>
</table>
<div class="tip">Reste factuel et précis : dates, numéro de dossier, justificatifs. Envoie le recours par écrit (garde une copie et une preuve d'envoi), et ne laisse pas passer le délai : ensuite, la décision devient définitive (<s-de>bestandskräftig</s-de> ou <s-de>rechtskräftig</s-de>). En cas de doute, les associations de consommateurs ou de locataires, ou un avocat, peuvent aider.</div>
`,
    examples: [
      ["Hiermit lege ich gegen den Bescheid vom 3. März fristgerecht Widerspruch ein.", "I hereby lodge an objection, within the time limit, against the decision of 3 March.", "Par la présente, je forme dans les délais un recours contre la décision du 3 mars."],
      ["Zur Begründung führe ich Folgendes an.", "In support of this, I would state the following.", "À l'appui de ce recours, je fais valoir ce qui suit."],
      ["Der Bescheid beruht auf der falschen Annahme, dass ich ein Auto besitze.", "The decision is based on the false assumption that I own a car.", "La décision repose sur l'hypothèse erronée selon laquelle je posséderais une voiture."],
      ["Ich beantrage, den Bescheid aufzuheben.", "I request that the decision be revoked.", "Je demande l'annulation de la décision."],
      ["Gegen den Bußgeldbescheid habe ich innerhalb von zwei Wochen Einspruch eingelegt.", "I lodged an objection to the fine within two weeks.", "J'ai fait opposition à l'avis de contravention dans un délai de deux semaines."],
      ["Als Anlage füge ich eine Kopie meines Mietvertrags bei.", "I enclose a copy of my rental agreement.", "Je joins une copie de mon bail."],
      ["Ich bitte um eine schriftliche Bestätigung des Eingangs.", "Please confirm receipt in writing.", "Je vous prie de bien vouloir m'accuser réception par écrit."]
    ],
    quiz: [
      { q: "Against a fine (Bußgeldbescheid), you usually lodge…", q_fr: "Contre une amende (Bußgeldbescheid), on forme en général…", o: ["an Einspruch, within two weeks", "a Widerspruch, within a year", "nothing: fines are final"], o_fr: ["un Einspruch, sous deux semaines", "un Widerspruch, sous un an", "rien : les amendes sont définitives"], a: 0, ex: "Einspruch, usually two weeks.", ex_fr: "Einspruch, en général deux semaines." },
      { q: "“I hereby lodge an objection.”", q_fr: "« Par la présente, je forme un recours. »", o: ["Hiermit lege ich Widerspruch ein.", "Hiermit mache ich Widerspruch ein.", "Hiermit lege ich Widerspruch an."], a: 0, ex: "Widerspruch einlegen.", ex_fr: "Widerspruch einlegen." },
      { q: "Where do you find the exact deadline?", q_fr: "Où trouve-t-on le délai exact ?", o: ["In the Rechtsbehelfsbelehrung at the end of the notice", "On the authority's website only", "Nowhere"], o_fr: ["Dans la Rechtsbehelfsbelehrung à la fin de la décision", "Seulement sur le site de l'administration", "Nulle part"], a: 0, ex: "Always read it.", ex_fr: "Lis-la toujours." },
      { q: "“I request that the decision be revoked.”", q_fr: "« Je demande l'annulation de la décision. »", o: ["Ich beantrage, den Bescheid aufzuheben.", "Ich beantrage, den Bescheid aufheben.", "Ich beantrage den Bescheid aufzuheben zu."], a: 0, ex: "beantragen, … zu + infinitive (separable: aufzuheben).", ex_fr: "beantragen, … zu + infinitif (séparable : aufzuheben)." },
      { q: "What happens if you miss the deadline?", q_fr: "Que se passe-t-il si l'on laisse passer le délai ?", o: ["The decision becomes final.", "The authority must extend it.", "Nothing changes."], o_fr: ["La décision devient définitive.", "L'administration doit le prolonger.", "Rien ne change."], a: 0, ex: "bestandskräftig / rechtskräftig.", ex_fr: "bestandskräftig / rechtskräftig." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    121: {
      gap: [["Hier wird nicht ___. (rauchen)", "geraucht"], ["___ wird viel gelacht.", "Es", "nothing else in first position", "rien d'autre en tête"], ["Er ___ die Kosten vollständig erstattet.", "bekam|bekommt"], ["So etwas ___ verboten!", "gehört"]],
      fix: [["Am Sonntag es wird nicht gearbeitet.", "Am Sonntag wird nicht gearbeitet.", "No es when another word is in first position.", "Pas de es quand un autre mot occupe la première place."], ["Er wurde die Kosten erstattet.", "Ihm wurden die Kosten erstattet. / Er bekam die Kosten erstattet.", "The receiver is dative with werden, or the subject with bekommen.", "Celui qui reçoit est au datif avec werden, ou sujet avec bekommen."]],
      task: ["Write four house rules for a shared flat using the impersonal passive, and one sentence with the bekommen passive.", "Écris quatre règles pour une colocation au passif impersonnel, et une phrase avec le passif en bekommen.", "In der Küche wird nicht geraucht. Nach 22 Uhr wird keine laute Musik mehr gespielt. Am Samstag wird gemeinsam geputzt. Im Bad wird nicht stundenlang geduscht. Wer für alle einkauft, bekommt das Geld aus der Gemeinschaftskasse erstattet."]
    },
    122: {
      gap: [["___ § 5 des Vertrags beträgt die Kündigungsfrist drei Monate.", "Gemäß|Laut|Nach", "according to", "conformément à"], ["___ der Zustimmung des Vermieters dürfen Sie einen Hund halten.", "Vorbehaltlich", "subject to", "sous réserve de"], ["Die Miete beträgt 800 Euro ___ der Nebenkosten.", "zuzüglich", "plus", "en sus"], ["___ der Behörde gab es keine Einwände.", "Seitens", "on the part of", "de la part de"]],
      fix: [["Entsprechend Ihres Wunsches haben wir den Termin verschoben.", "Entsprechend Ihrem Wunsch haben wir den Termin verschoben.", "entsprechend + dative.", "entsprechend + datif."], ["Vorbehaltlich die Zustimmung des Gerichts…", "Vorbehaltlich der Zustimmung des Gerichts…", "vorbehaltlich + genitive.", "vorbehaltlich + génitif."]],
      task: ["Explain this clause from a rental agreement in simple German: “Die Kaution ist gemäß § 4 vorbehaltlich etwaiger Schäden zuzüglich Zinsen zurückzuzahlen.”", "Explique en allemand simple cette clause d'un bail : « Die Kaution ist gemäß § 4 vorbehaltlich etwaiger Schäden zuzüglich Zinsen zurückzuzahlen. »", "Nach Paragraf 4 bekommt der Mieter die Kaution zurück, und zwar mit Zinsen. Wenn es Schäden in der Wohnung gibt, kann der Vermieter aber einen Teil davon behalten."]
    },
    123: {
      gap: [["Hiermit ___ ich gegen den Bescheid fristgerecht Widerspruch ein.", "lege"], ["Zur ___ führe ich Folgendes an.", "Begründung"], ["Ich beantrage, den Bescheid ___.", "aufzuheben"], ["Gegen den Bußgeldbescheid habe ich ___ eingelegt.", "Einspruch"]],
      fix: [["Hiermit mache ich Widerspruch gegen den Bescheid.", "Hiermit lege ich Widerspruch gegen den Bescheid ein.", "Widerspruch einlegen.", "Widerspruch einlegen."], ["Ich beantrage, den Bescheid aufheben.", "Ich beantrage, den Bescheid aufzuheben.", "beantragen + zu-infinitive; separable: aufzuheben.", "beantragen + infinitif avec zu ; séparable : aufzuheben."]],
      task: ["You received a decision charging you a fee for a dog you don't own. Write a short, formal objection (about 70 words): reference, objection, reasons, request.", "Tu as reçu une décision qui te réclame une taxe pour un chien que tu n'as pas. Écris un court recours formel (environ 70 mots) : référence, recours, motifs, demande.", "Ihr Bescheid vom 3. März, Aktenzeichen 12/345. Sehr geehrte Damen und Herren, hiermit lege ich gegen den oben genannten Bescheid fristgerecht Widerspruch ein. Zur Begründung führe ich Folgendes an: Ich besitze keinen Hund und habe auch nie einen angemeldet. Der Bescheid beruht offenbar auf einer Verwechslung. Ich beantrage daher, den Bescheid aufzuheben. Mit freundlichen Grüßen, Robin Keller"]
    }
  });

  W.ROLEPLAYS.push(
  { id: "hausordnung", lesson: 121, level: "C1", icon: "ban", partner: "Frau Riedel", role: "your neighbour", role_fr: "ta voisine",
    title: "The house rules", title_fr: "Le règlement de l'immeuble",
    setting: "You've just moved into a block of flats. Your neighbour, Frau Riedel, explains the house rules, rather strictly.", setting_fr: "Tu viens d'emménager dans un immeuble. Ta voisine, Frau Riedel, t'explique le règlement, de façon plutôt stricte.",
    turns: [
      { p: "Willkommen im Haus! Haben Sie die Hausordnung schon gelesen?", en: "Welcome to the building! Have you read the house rules yet?", fr: "Bienvenue dans l'immeuble ! Vous avez déjà lu le règlement ?" },
      { y: ["Noch nicht ganz. Wird hier im Hof gegrillt?", "Noch nicht ganz. Wird hier im Hof grillen?", "Noch nicht ganz. Es wird hier im Hof gegrillt?"], en: "Not entirely. Is barbecuing allowed in the courtyard?", fr: "Pas encore entièrement. On a le droit de faire des barbecues dans la cour ?", why: "Impersonal passive in a question: wird … gegrillt.", why_fr: "Passif impersonnel dans une question : wird … gegrillt." },
      { p: "Nur im Sommer und nur bis 22 Uhr. Danach ist Ruhe.", en: "Only in summer and only until 10 pm. After that it's quiet time.", fr: "Seulement l'été et jusqu'à 22 heures. Après, c'est le calme." },
      { y: ["Verstehe. Und am Sonntag wird sicher auch nicht gebohrt, oder?", "Verstehe. Und am Sonntag es wird sicher auch nicht gebohrt, oder?", "Verstehe. Und am Sonntag wird sicher auch nicht bohren, oder?"], en: "I see. And I suppose there's no drilling on Sundays either?", fr: "Je vois. Et le dimanche, on ne perce pas non plus, je suppose ?", why: "No es after am Sonntag in first position.", why_fr: "Pas de es après am Sonntag en tête." },
      { p: "Genau. Ein Nachbar hat das einmal ignoriert. Der bekam sofort eine Abmahnung geschickt!", en: "Exactly. A neighbour once ignored that. He immediately got a formal warning sent to him!", fr: "Exactement. Un voisin l'a ignoré une fois. Il a tout de suite reçu un avertissement !" },
      { y: ["Das ist ja streng. Bekommt man die Kaution bei so etwas trotzdem zurückgezahlt?", "Das ist ja streng. Bekommt man die Kaution bei so etwas trotzdem zurückzahlen?", "Das ist ja streng. Wird man die Kaution bei so etwas trotzdem zurückgezahlt?"], en: "That's strict. Do you still get your deposit back in a case like that?", fr: "C'est strict. On récupère quand même sa caution dans ce cas ?", why: "bekommen passive: bekommt … zurückgezahlt.", why_fr: "Passif avec bekommen : bekommt … zurückgezahlt." },
      { p: "Ja, natürlich. Aber die Mülltonnen, die stellt hier niemand richtig raus!", en: "Yes, of course. But the bins, nobody here puts them out properly!", fr: "Oui, bien sûr. Mais les poubelles, personne ne les sort correctement ici !" },
      { y: ["Keine Sorge, bei mir wird der Müll ordentlich getrennt.", "Keine Sorge, bei mir es wird der Müll ordentlich getrennt.", "Keine Sorge, bei mir wird der Müll ordentlich trennen."], en: "Don't worry, I separate my rubbish properly.", fr: "Ne vous inquiétez pas, chez moi, les déchets sont triés correctement.", why: "Passive with a subject (der Müll): wird … getrennt.", why_fr: "Passif avec sujet (der Müll) : wird … getrennt." },
      { p: "Sehr gut. Und wenn Sie Fragen haben, klingeln Sie einfach.", en: "Very good. And if you have questions, just ring the bell.", fr: "Très bien. Et si vous avez des questions, sonnez simplement." },
      { y: ["Danke, das mache ich gern. Bei Ihnen wird bestimmt gut auf alles geachtet.", "Danke, das mache ich gern. Bei Ihnen es wird bestimmt gut auf alles geachtet.", "Danke, das mache ich gern. Bei Ihnen wird bestimmt gut auf alles achten."], en: "Thank you, I'll gladly do that. You certainly keep an eye on everything here.", fr: "Merci, je n'y manquerai pas. Chez vous, on veille sûrement à tout.", why: "Impersonal passive with a prepositional object: wird … auf alles geachtet.", why_fr: "Passif impersonnel avec complément prépositionnel : wird … auf alles geachtet." }
    ] },
  { id: "rechtsberatung", lesson: 123, level: "C1", icon: "gavel", partner: "Herr Wendler", role: "a lawyer", role_fr: "un avocat",
    title: "A fine you didn't deserve", title_fr: "Une amende injustifiée",
    setting: "You've received a fine for speeding, but on that day your car was at the garage. You consult a lawyer, Herr Wendler.", setting_fr: "Tu as reçu une amende pour excès de vitesse, mais ce jour-là ta voiture était au garage. Tu consultes un avocat, Herr Wendler.",
    turns: [
      { p: "Was kann ich für Sie tun?", en: "What can I do for you?", fr: "Que puis-je faire pour vous ?" },
      { y: ["Ich habe einen Bußgeldbescheid bekommen, obwohl mein Auto an dem Tag in der Werkstatt war.", "Ich habe einen Bußgeldbescheid bekommen, obwohl mein Auto war an dem Tag in der Werkstatt.", "Ich habe einen Bußgeldbescheid bekommen, obwohl mein Auto an dem Tag in die Werkstatt war."], en: "I've received a fine, although my car was at the garage that day.", fr: "J'ai reçu un avis de contravention alors que ma voiture était au garage ce jour-là.", why: "obwohl: verb at the end; in der Werkstatt (where: dative).", why_fr: "obwohl : verbe à la fin ; in der Werkstatt (où : datif)." },
      { p: "Haben Sie einen Beleg dafür?", en: "Do you have proof of that?", fr: "Avez-vous une preuve ?" },
      { y: ["Ja, gemäß der Rechnung der Werkstatt stand das Auto vom 3. bis zum 5. Mai dort.", "Ja, gemäß die Rechnung der Werkstatt stand das Auto vom 3. bis zum 5. Mai dort.", "Ja, gemäß der Rechnung der Werkstatt das Auto stand vom 3. bis zum 5. Mai dort."], en: "Yes, according to the garage's invoice, the car was there from 3 to 5 May.", fr: "Oui, d'après la facture du garage, la voiture y était du 3 au 5 mai.", why: "gemäß + dative (der Rechnung); verb second.", why_fr: "gemäß + datif (der Rechnung) ; verbe en deuxième position." },
      { p: "Sehr gut. Wann haben Sie den Bescheid erhalten?", en: "Very good. When did you receive the notice?", fr: "Très bien. Quand avez-vous reçu l'avis ?" },
      { y: ["Vor fünf Tagen. Muss ich innerhalb einer bestimmten Frist reagieren?", "Vor fünf Tagen. Muss ich innerhalb eine bestimmte Frist reagieren?", "Seit fünf Tagen. Muss ich innerhalb einer bestimmten Frist reagieren?"], en: "Five days ago. Do I have to respond within a particular deadline?", fr: "Il y a cinq jours. Dois-je réagir dans un délai précis ?", why: "vor + time = ago; innerhalb + genitive.", why_fr: "vor + durée = il y a ; innerhalb + génitif." },
      { p: "Ja, gegen einen Bußgeldbescheid haben Sie zwei Wochen Zeit für den Einspruch.", en: "Yes, you have two weeks to lodge an objection against a fine.", fr: "Oui, vous avez deux semaines pour faire opposition à un avis de contravention." },
      { y: ["Dann lege ich sofort Einspruch ein und füge die Rechnung als Anlage bei.", "Dann lege ich sofort Einspruch und füge die Rechnung als Anlage bei ein.", "Dann ich lege sofort Einspruch ein und füge die Rechnung als Anlage bei."], en: "Then I'll lodge an objection straight away and enclose the invoice.", fr: "Alors je fais opposition tout de suite et je joins la facture.", why: "Two separable verbs: lege … ein, füge … bei.", why_fr: "Deux verbes séparables : lege … ein, füge … bei." },
      { p: "Gut. Vermutlich hat jemand das Kennzeichen falsch abgelesen.", en: "Good. Someone probably misread the number plate.", fr: "Bien. Quelqu'un a sans doute mal lu la plaque d'immatriculation." },
      { y: ["Das hoffe ich. Ich beantrage dann, den Bescheid aufzuheben, und bitte um eine schriftliche Bestätigung.", "Das hoffe ich. Ich beantrage dann, den Bescheid aufheben, und bitte um eine schriftliche Bestätigung.", "Das hoffe ich. Ich beantrage dann, den Bescheid aufzuheben, und bitte für eine schriftliche Bestätigung."], en: "I hope so. I'll then request that the notice be revoked and ask for written confirmation.", fr: "Je l'espère. Je demanderai alors l'annulation de l'avis et une confirmation écrite.", why: "beantragen + zu-infinitive; bitten um + accusative.", why_fr: "beantragen + infinitif avec zu ; bitten um + accusatif." }
    ] }
  );

  W.READINGS.push({
    id: "verfassungsgericht", level: "C1", icon: "book-open", title: "Karlsruhe hat entschieden", genre: "Explainer",
    intro: "When Germans say “Karlsruhe has ruled”, they mean the Federal Constitutional Court. How does it work, and why can any citizen turn to it?",
    intro_fr: "Quand les Allemands disent « Karlsruhe a tranché », ils parlent de la Cour constitutionnelle fédérale. Comment fonctionne-t-elle, et pourquoi tout citoyen peut-il la saisir ?",
    paragraphs: [
      { de: "Seit 1951 wacht das Bundesverfassungsgericht in Karlsruhe darüber, dass Staat und Gesetzgeber das Grundgesetz einhalten. Es besteht aus zwei Senaten mit je acht Richterinnen und Richtern. Diese werden je zur Hälfte vom Bundestag und vom Bundesrat gewählt, und zwar mit einer Zweidrittelmehrheit. Damit soll verhindert werden, dass eine einzelne Partei das Gericht nach ihren Wünschen besetzt.", en: "Since 1951, the Federal Constitutional Court in Karlsruhe has ensured that the state and the legislature respect the Basic Law. It consists of two senates, each with eight judges. Half of them are elected by the Bundestag and half by the Bundesrat, with a two-thirds majority. This is meant to prevent a single party from filling the court as it wishes.", fr: "Depuis 1951, la Cour constitutionnelle fédérale de Karlsruhe veille à ce que l'État et le législateur respectent la Loi fondamentale. Elle se compose de deux sénats de huit juges chacun. Ceux-ci sont élus pour moitié par le Bundestag et pour moitié par le Bundesrat, à la majorité des deux tiers. Il s'agit d'éviter qu'un seul parti compose la Cour à sa guise." },
      { de: "Die Amtszeit beträgt zwölf Jahre, eine Wiederwahl ist ausgeschlossen. So wird die Unabhängigkeit der Richter gestärkt: Niemand muss bei seinen Entscheidungen an eine zweite Amtszeit denken.", en: "The term of office is twelve years, and re-election is ruled out. This strengthens the judges' independence: nobody has to think about a second term when making decisions.", fr: "Le mandat dure douze ans, sans réélection possible. L'indépendance des juges s'en trouve renforcée : personne n'a à penser à un second mandat au moment de rendre ses décisions." },
      { de: "Eine Besonderheit ist die Verfassungsbeschwerde: Jeder, der sich durch die öffentliche Gewalt in seinen Grundrechten verletzt sieht, kann sich an das Gericht wenden, in der Regel nachdem er den Rechtsweg ausgeschöpft hat. Jedes Jahr gehen Tausende solcher Beschwerden ein; nur ein sehr kleiner Teil hat Erfolg. Dennoch haben einige davon das Land geprägt.", en: "One special feature is the constitutional complaint: anyone who feels that public authority has violated their fundamental rights can turn to the court, as a rule after exhausting all other legal remedies. Thousands of such complaints are received every year; only a very small proportion succeed. Even so, some of them have shaped the country.", fr: "Le recours constitutionnel est une particularité : toute personne qui s'estime lésée dans ses droits fondamentaux par la puissance publique peut saisir la Cour, en règle générale après avoir épuisé les voies de recours. Des milliers de recours arrivent chaque année ; seule une très petite partie aboutit. Certains ont pourtant marqué le pays." },
      { de: "So stellte das Gericht 1958 im Lüth-Urteil fest, dass die Grundrechte auch das Verhältnis zwischen Bürgern beeinflussen. Und 1983 leitete es im Volkszählungsurteil ein „Recht auf informationelle Selbstbestimmung“ ab: Jeder soll grundsätzlich selbst entscheiden können, wer welche Daten über ihn erhält. Kraft dieses Urteils gilt der Datenschutz in Deutschland bis heute als Grundrecht.", en: "In the Lüth ruling of 1958, for example, the court established that fundamental rights also affect relations between citizens. And in 1983, in the census ruling, it derived a “right to informational self-determination”: in principle, everyone should be able to decide for themselves who receives which data about them. By virtue of this ruling, data protection in Germany is still regarded as a fundamental right today.", fr: "Ainsi, dans l'arrêt Lüth de 1958, la Cour a établi que les droits fondamentaux influencent aussi les relations entre citoyens. Et en 1983, dans l'arrêt sur le recensement, elle a déduit un « droit à l'autodétermination informationnelle » : chacun doit en principe pouvoir décider lui-même qui reçoit quelles données le concernant. En vertu de cet arrêt, la protection des données est aujourd'hui encore considérée en Allemagne comme un droit fondamental." }
    ],
    glossary: { "wacht": ["(wachen über) watches over, ensures", "(wachen über) veille à"], "Gesetzgeber": ["legislature", "législateur"], "einhalten": ["to respect, to comply with", "respecter"], "Senaten": ["senates (chambers of the court)", "sénats (chambres de la Cour)"], "Zweidrittelmehrheit": ["two-thirds majority", "majorité des deux tiers"], "verhindert": ["prevented", "empêché"], "besetzt": ["fills (posts)", "pourvoit (des postes)"], "Amtszeit": ["term of office", "mandat"], "Wiederwahl": ["re-election", "réélection"], "ausgeschlossen": ["ruled out", "exclu"], "Unabhängigkeit": ["independence", "indépendance"], "gestärkt": ["strengthened", "renforcé"], "Verfassungsbeschwerde": ["constitutional complaint", "recours constitutionnel"], "öffentliche Gewalt": ["public authority", "puissance publique"], "verletzt": ["violated, injured", "lésé, violé"], "Rechtsweg": ["legal recourse", "voies de recours"], "ausgeschöpft": ["exhausted", "épuisé"], "Beschwerden": ["complaints", "recours, plaintes"], "geprägt": ["shaped", "marqué"], "Lüth-Urteil": ["Lüth ruling (1958)", "arrêt Lüth (1958)"], "Verhältnis": ["relationship", "relation"], "leitete": ["(ableiten) derived", "(ableiten) déduisit"], "Volkszählungsurteil": ["census ruling (1983)", "arrêt sur le recensement (1983)"], "informationelle Selbstbestimmung": ["informational self-determination", "autodétermination informationnelle"], "grundsätzlich": ["in principle", "en principe"] },
    questions: [
      { q: "Wie viele Richterinnen und Richter hat das Bundesverfassungsgericht insgesamt?", o: ["Sechzehn", "Acht", "Zwölf"], a: 0 },
      { q: "Wer wählt die Richter?", o: ["Je zur Hälfte der Bundestag und der Bundesrat", "Der Bundeskanzler", "Die Bürger direkt"], a: 0 },
      { q: "Warum ist eine Wiederwahl ausgeschlossen?", o: ["Um die Unabhängigkeit der Richter zu stärken", "Weil die Amtszeit zu kurz ist", "Weil es zu wenige Kandidaten gibt"], a: 0 },
      { q: "Wer kann eine Verfassungsbeschwerde einlegen?", o: ["Jeder, der sich in seinen Grundrechten verletzt sieht", "Nur Politiker", "Nur Anwälte"], a: 0 },
      { q: "Was leitete das Gericht 1983 ab?", o: ["Ein Recht auf informationelle Selbstbestimmung", "Ein Recht auf Arbeit", "Ein Verbot von Volkszählungen"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-c1-7", unit: "c1-7", level: "C1", icon: "radio",
    title: "Als Schöffin am Gericht", title_fr: "Juge non professionnelle au tribunal",
    context: "A radio report. The reporter talks to Frau Lindner, who serves as a lay judge (Schöffin) at a criminal court.", context_fr: "Un reportage radio. Le reporter parle avec Frau Lindner, qui siège comme échevine (Schöffin) dans un tribunal pénal.",
    words: [["die Schöffin, -nen (der Schöffe)", "the lay judge", "la juge non professionnelle, l'échevine"], ["die Amtszeit, -en", "the term of office", "le mandat"], ["das Stimmrecht", "the right to vote", "le droit de vote"], ["die Verhandlung, -en", "the hearing, the trial session", "l'audience"], ["unbefangen", "impartial, unbiased", "impartial"]],
    lines: [["Reporter", "Frau Lindner, Sie sind seit drei Jahren Schöffin. Was macht man da genau?", "de-DE"], ["Frau Lindner", "Wir sitzen bei Strafprozessen neben den Berufsrichtern und entscheiden mit, ob jemand verurteilt wird und wie hoch die Strafe ist. Dabei haben wir dasselbe Stimmrecht wie die Berufsrichter.", "de-DE"], ["Reporter", "Braucht man dafür eine juristische Ausbildung?", "de-DE"], ["Frau Lindner", "Nein, gerade nicht. Gesucht werden Menschen aus allen Bereichen der Gesellschaft, die zwischen 25 und 69 Jahre alt sind. Die Amtszeit beträgt fünf Jahre.", "de-DE"], ["Reporter", "Was war für Sie am schwierigsten?", "de-DE"], ["Frau Lindner", "Unbefangen zu bleiben. In einem Prozess wurde stundenlang über Details gestritten, und ich hatte mir schon eine Meinung gebildet. Dann kam eine neue Aussage, und alles sah plötzlich anders aus.", "de-DE"], ["Reporter", "Würden Sie es weiterempfehlen?", "de-DE"], ["Frau Lindner", "Unbedingt. Man lernt, wie sorgfältig im Gericht abgewogen wird, und man versteht, warum der Grundsatz gilt: im Zweifel für den Angeklagten.", "de-DE"]],
    gist: ["Worum geht es in dem Bericht?", ["Um die Arbeit als Laienrichterin an einem Strafgericht", "Um ein berühmtes Urteil", "Um die Ausbildung zur Anwältin"]],
    detail: [["Welches Stimmrecht haben Schöffen?", ["Dasselbe wie die Berufsrichter", "Gar keins", "Nur bei kleinen Fällen"]], ["Braucht man eine juristische Ausbildung?", ["Nein", "Ja, ein Jurastudium", "Ja, einen Kurs von fünf Jahren"]], ["Wie lange dauert die Amtszeit?", ["Fünf Jahre", "Ein Jahr", "Zwölf Jahre"]], ["Was fand Frau Lindner am schwierigsten?", ["Unbefangen zu bleiben", "Früh aufzustehen", "Die Fachbegriffe"]]],
    decode: ["Dabei haben wir dasselbe Stimmrecht wie die Berufsrichter.", "In einem Prozess wurde stundenlang über Details gestritten"],
    tip: "In reports on institutions, the impersonal passive is everywhere (es wird entschieden, es wird gestritten, gesucht werden…): it describes how things are done without saying who does them. Focus on the verb at the end to know what happens.", tip_fr: "Dans les reportages sur les institutions, le passif impersonnel est partout (es wird entschieden, es wird gestritten, gesucht werden…) : il décrit comment les choses se font sans dire qui les fait. Concentre-toi sur le verbe final pour savoir ce qui se passe."
  }]);

  W.PROMPTS.push({ id: "de-c1-7", level: "C1", q: "Halte einen Vortrag (etwa drei bis vier Minuten): „Laienrichter: Sollten Bürgerinnen und Bürger an Urteilen mitwirken?“ Erkläre das System der Schöffen, nenne Vor- und Nachteile und komm zu einem Fazit.", en: "Give a talk (about three to four minutes): “Lay judges: should citizens take part in verdicts?” Explain the system of lay judges, give advantages and disadvantages, and reach a conclusion.", fr: "Fais un exposé (environ trois à quatre minutes) : « Juges non professionnels : les citoyens doivent-ils participer aux jugements ? » Explique le système des échevins, cite des avantages et des inconvénients, et conclus.", time: 240,
    phrases: ["In Deutschland wird … von … mitentschieden.", "Gemäß dem Gesetz…", "Ein wichtiger Vorteil ist, dass…", "Kritiker wenden ein, dass…", "Alles in allem…"],
    model: "In Deutschland wird in vielen Strafprozessen nicht nur von Berufsrichtern entschieden, sondern auch von Schöffen, also von Bürgerinnen und Bürgern ohne juristische Ausbildung. Sie werden für fünf Jahre gewählt und haben im Gericht dasselbe Stimmrecht wie die Berufsrichter. Ein wichtiger Vorteil ist, dass so die Lebenserfahrung der Gesellschaft in die Urteile einfließt. Außerdem stärkt die Mitwirkung von Laien das Vertrauen in die Justiz, denn Urteile werden nicht nur von Fachleuten hinter verschlossenen Türen gefällt. Kritiker wenden ein, dass Laien sich leichter von Emotionen oder von der Darstellung in den Medien beeinflussen lassen. Zudem fehle ihnen das Fachwissen, um komplizierte Fälle zu beurteilen. Dieses Argument ist nicht ganz von der Hand zu weisen. Allerdings entscheiden Schöffen nie allein, sondern immer gemeinsam mit Berufsrichtern. Alles in allem halte ich das System für eine sinnvolle Verbindung von Fachwissen und Bürgernähe." });

  W.WRITING_GUIDE["c1-7"] = { genre: "An argued text (C1)", genre_fr: "Un texte argumenté (C1)",
    plan: [["A lead-in with the current situation.", "Une amorce avec la situation actuelle."], ["Your thesis.", "Ta thèse."], ["Arguments for.", "Des arguments pour."], ["Arguments against, with an example.", "Des arguments contre, avec un exemple."], ["A nuanced conclusion.", "Une conclusion nuancée."]],
    marks: [["In Deutschland sind Ton- und Filmaufnahmen", "the current situation", "la situation actuelle"], ["Meines Erachtens", "the thesis", "la thèse"], ["Befürworter", "the arguments for", "les arguments pour"], ["Dagegen spricht", "the arguments against", "les arguments contre"], ["gehört nicht ins Fernsehen", "a strong formulation", "une formulation forte"], ["Alles in allem", "the conclusion", "la conclusion"]] };

  /* Atelier de langue : champs allemands d'abord, puis anglais et français (voir localize.js). */
  W.LEXIS = W.LEXIS || {};
  W.LEXIS["c1-7"] = {
    colloc: [
      ["Klage erheben", "to bring an action", "intenter une action en justice", "Die Mieterin hat Klage gegen den Vermieter erhoben.", "erhoben", ["gehoben", "gestellt"]],
      ["ein Urteil fällen", "to pass judgment", "rendre un jugement", "Das Gericht wird morgen das Urteil fällen.", "fällen", ["fallen", "machen"]],
      ["Widerspruch einlegen", "to lodge an objection", "former un recours", "Gegen den Bescheid können Sie Widerspruch einlegen.", "einlegen", ["einstellen", "eintragen"]],
      ["eine Aussage machen", "to make a statement, to testify", "faire une déposition", "Die Zeugin hat vor Gericht eine Aussage gemacht.", "gemacht", ["gestellt", "getan"]],
      ["gegen ein Gesetz verstoßen", "to break a law", "enfreindre une loi", "Die Firma hat gegen das Gesetz verstoßen.", "verstoßen", ["gestoßen", "verletzt"]],
      ["einen Antrag ablehnen", "to reject an application", "rejeter une demande", "Die Behörde hat den Antrag abgelehnt.", "abgelehnt", ["abgesagt", "abgelegt"]],
      ["ein Verfahren einstellen", "to drop proceedings", "classer une procédure", "Die Staatsanwaltschaft hat das Verfahren eingestellt.", "eingestellt", ["ausgestellt", "eingelegt"]],
      ["jemanden zur Rechenschaft ziehen", "to hold someone accountable", "demander des comptes à quelqu'un", "Die Verantwortlichen müssen zur Rechenschaft gezogen werden.", "gezogen", ["gebracht", "gestellt"]],
      ["Recht bekommen", "to be proved right (in court)", "obtenir gain de cause", "Am Ende hat die Mieterin Recht bekommen.", "bekommen", ["genommen", "gemacht"]],
      ["eine Frist versäumen", "to miss a deadline", "laisser passer un délai", "Wer die Frist versäumt, verliert seinen Anspruch.", "versäumt", ["verspätet", "verschlafen"]]
    ],
    wf: [
      ["Das Gericht entschied auf ___. (FREISPRECHEN)", "Freispruch"],
      ["Die ___ des Zeugen war widersprüchlich. (AUSSAGEN)", "Aussage"],
      ["Das Urteil ist noch nicht ___. (KRAFT)", "rechtskräftig"],
      ["Die ___ des Antrags kam per Post. (ABLEHNEN)", "Ablehnung"],
      ["Die Richterin war völlig ___. (PARTEI)", "unparteiisch"],
      ["Das ist ein klarer ___ gegen die Regeln. (VERSTOSSEN)", "Verstoß"],
      ["Diese Klausel im Vertrag ist ___. (WIRKSAM)", "unwirksam"],
      ["Die ___ der Strafe wurde zur Bewährung ausgesetzt. (VOLLSTRECKEN)", "Vollstreckung"]
    ],
    kwt: [
      ["Hier darf man nicht rauchen.", "WIRD", "Hier ___.", "wird nicht geraucht"],
      ["Man hat ihm die Kosten erstattet.", "BEKAM", "Er ___.", "bekam die Kosten erstattet"],
      ["Nach dem Vertrag muss die Miete am Monatsanfang gezahlt werden.", "GEMÄẞ", "___ muss die Miete am Monatsanfang gezahlt werden.", "Gemäß dem Vertrag|Dem Vertrag gemäß|Gemäß Vertrag"],
      ["Wenn das Gericht zustimmt, gilt die Regel ab Mai.", "VORBEHALTLICH", "___ gilt die Regel ab Mai.", "Vorbehaltlich der Zustimmung des Gerichts"],
      ["Der Richter hat entschieden, dass sie unschuldig ist.", "FREIGESPROCHEN", "Sie ___.", "wurde freigesprochen"],
      ["Sie hat sich offiziell gegen den Bescheid gewehrt.", "WIDERSPRUCH", "Sie hat gegen den Bescheid ___.", "Widerspruch eingelegt"]
    ],
    idioms: [
      ["jemanden hinter Gitter bringen", "jemanden ins Gefängnis bringen", "to put someone behind bars", "mettre quelqu'un derrière les barreaux", "Die Beweise brachten den Betrüger hinter Gitter.", "hinter Gitter"],
      ["jemanden auf frischer Tat ertappen", "jemanden genau bei der Tat erwischen", "to catch someone red-handed", "prendre quelqu'un la main dans le sac", "Der Dieb wurde auf frischer Tat ertappt.", "auf frischer Tat"],
      ["eine weiße Weste haben", "nichts Unrechtes getan haben", "to have a clean record", "avoir les mains propres", "Der Kandidat hat eine weiße Weste.", "eine weiße Weste"],
      ["jemandem auf die Schliche kommen", "jemandes Tricks entdecken", "to get wise to someone", "découvrir le manège de quelqu'un", "Die Steuerfahnder kamen ihm schnell auf die Schliche.", "auf die Schliche"],
      ["jemandem den Prozess machen", "jemanden vor Gericht stellen", "to put someone on trial", "faire le procès de quelqu'un", "Man machte den Tätern in Frankfurt den Prozess.", "den Prozess"],
      ["Im Zweifel für den Angeklagten.", "Wenn Zweifel bestehen, wird nicht verurteilt.", "Innocent until proven guilty (the benefit of the doubt).", "Le doute profite à l'accusé.", "Es gilt der Grundsatz: Im Zweifel für den Angeklagten.", "Im Zweifel für den Angeklagten"],
      ["das Recht in die eigene Hand nehmen", "selbst für Gerechtigkeit sorgen, ohne Gericht", "to take the law into one's own hands", "se faire justice soi-même", "Niemand darf das Recht in die eigene Hand nehmen.", "in die eigene Hand"],
      ["Gnade vor Recht ergehen lassen", "milde urteilen", "to temper justice with mercy", "faire preuve de clémence", "Diesmal ließ die Richterin Gnade vor Recht ergehen.", "Gnade vor Recht"]
    ]
  };

  W.COURSE.push({ id: "c1-7", level: "C1", icon: "scale", title: "Law and justice", title_fr: "Droit et justice",
    intro: "Courts, rules, official decisions: in this unit, you'll learn the impersonal passive and other passive forms (Hier wird nicht geraucht; Er bekam die Kosten erstattet), the prepositions of legal German (gemäß, kraft, vorbehaltlich, zuzüglich), and how to contest an official decision within the deadline. You'll also discover the Federal Constitutional Court in Karlsruhe, which any citizen can turn to.",
    intro_fr: "Tribunaux, règlements, décisions administratives : dans cette unité, tu vas apprendre le passif impersonnel et les autres formes passives (Hier wird nicht geraucht ; Er bekam die Kosten erstattet), les prépositions de la langue juridique (gemäß, kraft, vorbehaltlich, zuzüglich), et la façon de contester une décision officielle dans les délais. Tu découvriras aussi la Cour constitutionnelle fédérale de Karlsruhe, que tout citoyen peut saisir.",
    can: ["Use the impersonal passive, the bekommen passive and colloquial gehören", "Read the prepositions of contracts and official letters", "Lodge a written objection with reasons and a request", "Talk about courts, trials and citizens' rights", "Write an argued text on a legal question (C1)"],
    can_fr: ["Employer le passif impersonnel, le passif avec bekommen et le gehören familier", "Lire les prépositions des contrats et des courriers officiels", "Former un recours écrit avec des motifs et une demande", "Parler des tribunaux, des procès et des droits des citoyens", "Écrire un texte argumenté sur une question juridique (C1)"],
    lessons: [121, 122, 123], vocab: ["justizDE", "verwaltungDE"], reading: "verfassungsgericht", prompt: "de-c1-7",
    writing: { task: "Write an argued text (220-260 words) on the question: “Should trials be filmed and broadcast on television?” Describe the current situation, give your thesis, arguments for and against with an example, and a nuanced conclusion.", task_fr: "Écris un texte argumenté (220 à 260 mots) sur la question : « Faudrait-il filmer les procès et les diffuser à la télévision ? » Décris la situation actuelle, donne ta thèse, des arguments pour et contre avec un exemple, et une conclusion nuancée.", words: "220-260",
      tips: ["In Deutschland sind … grundsätzlich nicht erlaubt.", "Meines Erachtens…", "Befürworter argumentieren, …", "Dagegen spricht, dass…", "Alles in allem…"],
      checklist: ["I described the current situation", "I gave a clear thesis", "I presented arguments for and against with an example", "I used a passive form or a legal preposition from this unit", "I wrote between 220 and 260 words"],
      checklist_fr: ["J'ai décrit la situation actuelle", "J'ai donné une thèse claire", "J'ai présenté des arguments pour et contre, avec un exemple", "J'ai employé une forme passive ou une préposition juridique de cette unité", "J'ai écrit entre 220 et 260 mots"],
      model: "In Deutschland sind Ton- und Filmaufnahmen während einer Gerichtsverhandlung grundsätzlich nicht erlaubt. In anderen Ländern dagegen werden spektakuläre Prozesse live im Fernsehen übertragen. Sollte Deutschland diesem Beispiel folgen? Meines Erachtens wäre das ein Fehler, auch wenn die Forderung nach mehr Transparenz berechtigt ist.\n\nBefürworter argumentieren, dass Gerichte im Namen des Volkes urteilen und die Öffentlichkeit daher genau sehen sollte, wie gearbeitet wird. Schon heute sind Verhandlungen in der Regel öffentlich; Kameras würden diesen Grundsatz nur konsequent weiterführen. Zudem könnten Übertragungen das Verständnis für die Justiz fördern und Vorurteile abbauen.\n\nDagegen spricht jedoch vor allem der Schutz der Beteiligten. Zeuginnen und Zeugen, die wissen, dass Millionen zuschauen, sagen möglicherweise nicht mehr frei aus. Angeklagte würden öffentlich vorgeführt, bevor überhaupt ein Urteil gefällt worden ist, und auch ein späterer Freispruch könnte ihren Ruf nicht mehr retten. Ein Beispiel aus dem Ausland zeigt, wie schnell ein Prozess zur Show werden kann: Anwälte sprechen dann eher zur Kamera als zum Gericht.\n\nEin Gerichtssaal ist kein Studio, und eine Verhandlung gehört nicht ins Fernsehen. Sinnvoll ist dagegen der Mittelweg, den die obersten Bundesgerichte bereits gehen dürfen: Die Verkündung wichtiger Urteile kann dort, vorbehaltlich der Zustimmung des Gerichts, gefilmt werden, die Verhandlung selbst nicht.\n\nAlles in allem überwiegt für mich der Schutz der Menschen vor Gericht. Transparenz lässt sich auch durch gute Berichterstattung erreichen, ohne dass die Würde der Beteiligten auf dem Spiel steht." } });
})();
