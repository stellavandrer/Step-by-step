/* Cours d'allemand, unité B2-6 « The economy and consumers / Économie et consommation » : les conditions de
   l'allemand soutenu (falls, sofern, vorausgesetzt, es sei denn, Sollten Sie…), l'opposition et la concession
   (während, wohingegen, selbst wenn, so … auch), faire valoir ses droits de consommateur. Personnages fictifs,
   prénoms allemands.
   Faits vérifiables seulement : droit de rétractation de 14 jours pour les achats à distance (directive européenne
   2011/83/UE, en Allemagne § 355 BGB), avec des exceptions (biens fabriqués selon les souhaits du client, denrées
   périssables…) ; garantie légale de conformité de deux ans pour les biens neufs, due par le vendeur, distincte de
   la garantie commerciale facultative du fabricant ; des Verbraucherzentralen dans chaque Land. Stiftung Warentest :
   fondée le 4 décembre 1964 sur décision du gouvernement fédéral, siège à Berlin, magazine « test » depuis 1966,
   « Finanztest » depuis 1991, achète les produits anonymement dans le commerce, pas de publicité dans ses magazines,
   notes de « sehr gut » à « mangelhaft », financée surtout par la vente de ses publications. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "wirtschaftDE", icon: "trending-up", title: "The economy", title_fr: "L'économie", level: "B2", words: [
    ["die Wirtschaft", "the economy", "l'économie", "Die Wirtschaft wächst nur langsam."],
    ["wirtschaftlich", "economic(ally)", "économique(ment)", "Die wirtschaftliche Lage ist schwierig."],
    ["das Wachstum", "growth", "la croissance", "Das Wachstum lag unter den Erwartungen."],
    ["der Gewinn, -e", "the profit", "le bénéfice", "Die Firma hat einen Rekordgewinn gemacht."],
    ["der Verlust, -e", "the loss", "la perte", "Das Geschäft macht seit Jahren Verluste."],
    ["die Kosten (Pl.)", "the costs", "les coûts, les frais", "Die Kosten für Energie sind gestiegen."],
    ["die Konkurrenz", "the competition, the competitors", "la concurrence", "Die Konkurrenz im Online-Handel ist groß."],
    ["die Nachfrage", "demand", "la demande", "Die Nachfrage nach E-Bikes ist gestiegen."],
    ["der Verbraucher, - (die Verbraucherin)", "the consumer", "le consommateur, la consommatrice", "Die Verbraucher achten stärker auf den Preis."],
    ["der Hersteller, -", "the manufacturer", "le fabricant", "Der Hersteller gibt fünf Jahre Garantie."],
    ["die Marke, -n", "the brand", "la marque", "Teure Marken sind nicht immer besser."],
    ["investieren", "to invest", "investir", "Die Stadt investiert in neue Radwege."],
    ["die Krise, -n", "the crisis", "la crise", "Viele Betriebe haben die Krise gut überstanden."],
    ["der Handel", "trade, retail", "le commerce", "Der Handel klagt über weniger Kunden in den Innenstädten."],
    ["die Lieferkette, -n", "the supply chain", "la chaîne d'approvisionnement", "Wegen Problemen in der Lieferkette fehlten Ersatzteile."],
    ["die Preissteigerung, -en", "the price increase", "la hausse des prix", "Die Preissteigerungen treffen vor allem Familien."]
  ] },
  { id: "verbraucherrechteDE", icon: "scale", title: "Consumer rights", title_fr: "Les droits du consommateur", level: "B2", words: [
    ["das Widerrufsrecht", "the right of withdrawal", "le droit de rétractation", "Bei Online-Käufen haben Sie ein Widerrufsrecht von 14 Tagen."],
    ["widerrufen", "to withdraw from, to cancel", "se rétracter, annuler", "Ich möchte meinen Kauf widerrufen."],
    ["die Gewährleistung", "the legal guarantee", "la garantie légale", "Die gesetzliche Gewährleistung beträgt zwei Jahre."],
    ["der Mangel, ¨-", "the defect, the fault", "le défaut, le vice", "Der Mangel war schon beim Kauf vorhanden."],
    ["mangelhaft", "defective; poor (as a grade)", "défectueux ; insuffisant (comme note)", "Das Produkt wurde als mangelhaft bewertet."],
    ["die Rückerstattung, -en", "the refund", "le remboursement", "Die Rückerstattung dauert einige Tage."],
    ["der Umtausch", "the exchange (of goods)", "l'échange (d'un article)", "Ein Umtausch ist nur mit Kassenbon möglich."],
    ["der Kaufvertrag, ¨-e", "the purchase contract", "le contrat de vente", "Lesen Sie den Kaufvertrag genau durch."],
    ["das Kleingedruckte", "the small print", "les petits caractères", "Im Kleingedruckten stand, dass der Versand extra kostet."],
    ["die Allgemeinen Geschäftsbedingungen (AGB)", "the terms and conditions", "les conditions générales de vente (CGV)", "Mit dem Kauf akzeptieren Sie unsere AGB."],
    ["die Verbraucherzentrale, -n", "the consumer advice centre", "l'association de défense des consommateurs", "Die Verbraucherzentrale hat mir bei meiner Beschwerde geholfen."],
    ["die Ratenzahlung, -en", "payment in instalments", "le paiement échelonné", "Das Sofa kann man auch per Ratenzahlung kaufen."],
    ["die Mahnung, -en", "the payment reminder", "la lettre de relance", "Weil ich die Rechnung vergessen hatte, bekam ich eine Mahnung."],
    ["der Fehlkauf, ¨-e", "the bad buy", "le mauvais achat", "Die teure Kaffeemaschine war ein Fehlkauf."],
    ["die Bewertung, -en", "the review, the rating", "l'avis, la note", "Vor dem Kauf lese ich immer die Bewertungen."],
    ["die Kulanz", "goodwill (towards a customer)", "le geste commercial", "Der Händler hat das Gerät aus Kulanz umgetauscht."]
  ] });

  W.LESSONS.push(
  {
    id: 88, level: "B2", icon: "split",
    title: "Sofern, es sei denn, sollten Sie…: conditions in formal German", title_fr: "Sofern, es sei denn, sollten Sie… : les conditions en allemand soutenu",
    subtitle: "Beyond wenn: provided that, unless, should you…", subtitle_fr: "Au-delà de wenn : à condition que, à moins que, si jamais…",
    body: `
<h2>Other ways of saying "if"</h2>
<table>
<tr><th>Conjunction</th><th>Meaning</th></tr>
<tr><td><s-de>falls</s-de></td><td>in case, if (a possibility)</td></tr>
<tr><td><s-de>sofern</s-de></td><td>provided that, as long as</td></tr>
<tr><td><s-de>vorausgesetzt, (dass)</s-de></td><td>provided (that)</td></tr>
<tr><td><s-de>es sei denn, …</s-de></td><td>unless</td></tr>
<tr><td><s-de>außer wenn</s-de></td><td>except if</td></tr>
</table>
<p><s-de>Falls es regnet, nehmen wir den Bus.</s-de> · <s-de>Sie können das Gerät zurückgeben, sofern es unbeschädigt ist.</s-de> · <s-de>Ich helfe dir, vorausgesetzt, du hilfst mir auch.</s-de></p>
<h2>es sei denn: main-clause word order</h2>
<p>After <s-de>es sei denn,</s-de> the verb stays in second place: <s-de>Wir kommen, es sei denn, es regnet.</s-de> (We'll come unless it rains.) With <s-de>dass</s-de>, it goes to the end: <s-de>…, es sei denn, dass es regnet.</s-de></p>
<h2>Conditions without a conjunction</h2>
<p>The verb can come first and replace <s-de>wenn</s-de>: <s-de>Hast du Zeit, (dann) komm vorbei.</s-de> In formal letters, <s-de>sollte</s-de> + verb first is very common: <s-de>Sollten Sie Fragen haben, stehe ich Ihnen gern zur Verfügung.</s-de> (Should you have any questions…)</p>
<div class="tip">The nominal style from unit 3 is another option: <s-de>Bei Fragen wenden Sie sich an…</s-de> · <s-de>Im Fall eines Defekts…</s-de> You'll find all these forms in contracts and terms and conditions: reading them carefully is a real-life skill.</div>
`,
    body_fr: `
<h2>D'autres façons de dire « si »</h2>
<table>
<tr><th>Conjonction</th><th>Sens</th></tr>
<tr><td><s-de>falls</s-de></td><td>au cas où, si (une éventualité)</td></tr>
<tr><td><s-de>sofern</s-de></td><td>pourvu que, dans la mesure où</td></tr>
<tr><td><s-de>vorausgesetzt, (dass)</s-de></td><td>à condition que</td></tr>
<tr><td><s-de>es sei denn, …</s-de></td><td>à moins que</td></tr>
<tr><td><s-de>außer wenn</s-de></td><td>sauf si</td></tr>
</table>
<p><s-de>Falls es regnet, nehmen wir den Bus.</s-de> · <s-de>Sie können das Gerät zurückgeben, sofern es unbeschädigt ist.</s-de> · <s-de>Ich helfe dir, vorausgesetzt, du hilfst mir auch.</s-de></p>
<h2>es sei denn : l'ordre de la principale</h2>
<p>Après <s-de>es sei denn,</s-de> le verbe reste en deuxième position : <s-de>Wir kommen, es sei denn, es regnet.</s-de> (Nous viendrons, à moins qu'il ne pleuve.) Avec <s-de>dass</s-de>, il va à la fin : <s-de>…, es sei denn, dass es regnet.</s-de></p>
<h2>Des conditions sans conjonction</h2>
<p>Le verbe peut venir en tête et remplacer <s-de>wenn</s-de> : <s-de>Hast du Zeit, (dann) komm vorbei.</s-de> Dans les lettres formelles, <s-de>sollte</s-de> en tête est très courant : <s-de>Sollten Sie Fragen haben, stehe ich Ihnen gern zur Verfügung.</s-de> (Si vous aviez des questions…)</p>
<div class="tip">Le style nominal de l'unité 3 est une autre possibilité : <s-de>Bei Fragen wenden Sie sich an…</s-de> · <s-de>Im Fall eines Defekts…</s-de> Tu trouveras toutes ces formes dans les contrats et les conditions générales : savoir les lire attentivement est une vraie compétence de la vie quotidienne.</div>
`,
    examples: [
      ["Falls es regnet, nehmen wir den Bus.", "If it rains, we'll take the bus.", "S'il pleut, nous prendrons le bus."],
      ["Sie können das Gerät zurückgeben, sofern es unbeschädigt ist.", "You can return the device provided it's undamaged.", "Vous pouvez rendre l'appareil, pourvu qu'il ne soit pas endommagé."],
      ["Ich leihe dir das Geld, vorausgesetzt, du zahlst es bis Ende des Monats zurück.", "I'll lend you the money, provided you pay it back by the end of the month.", "Je te prête l'argent, à condition que tu me le rendes avant la fin du mois."],
      ["Wir kommen, es sei denn, es regnet.", "We'll come unless it rains.", "Nous viendrons, à moins qu'il ne pleuve."],
      ["Sollten Sie Fragen haben, stehe ich Ihnen gern zur Verfügung.", "Should you have any questions, I'm happy to help.", "Si vous aviez des questions, je reste à votre disposition."],
      ["Sollte das Paket beschädigt sein, nehmen Sie es bitte nicht an.", "Should the parcel be damaged, please don't accept it.", "Si le colis était endommagé, veuillez ne pas l'accepter."],
      ["Im Fall eines Defekts wenden Sie sich bitte an den Händler.", "In the event of a defect, please contact the retailer.", "En cas de défaut, veuillez vous adresser au vendeur."]
    ],
    quiz: [
      { q: "“We'll come unless it rains.”", q_fr: "« Nous viendrons, à moins qu'il ne pleuve. »", o: ["Wir kommen, es sei denn, es regnet.", "Wir kommen, es sei denn, regnet es.", "Wir kommen, es sei denn, es regnen."], a: 0, ex: "After es sei denn: verb in second place.", ex_fr: "Après es sei denn : le verbe en deuxième position." },
      { q: "___ Sie Fragen haben, rufen Sie uns an.", q_fr: "___ Sie Fragen haben, rufen Sie uns an.", o: ["Sollten", "Sollen", "Sofern dass"], a: 0, ex: "Formal condition: Sollten Sie…", ex_fr: "Condition formelle : Sollten Sie…" },
      { q: "Which conjunction means “provided that”?", q_fr: "Quelle conjonction veut dire « pourvu que, dans la mesure où » ?", o: ["sofern", "obwohl", "sodass"], a: 0, ex: "sofern = provided that.", ex_fr: "sofern = pourvu que." },
      { q: "“Hast du Zeit, komm vorbei.” means:", q_fr: "« Hast du Zeit, komm vorbei. » veut dire :", o: ["If you have time, drop by.", "Do you have time? Don't come.", "You had time and came by."], o_fr: ["Si tu as le temps, passe me voir.", "Tu as le temps ? Ne viens pas.", "Tu avais le temps et tu es passé."], a: 0, ex: "Verb first = a condition without wenn.", ex_fr: "Verbe en tête = une condition sans wenn." },
      { q: "In the event of a defect… (nominal style)", q_fr: "En cas de défaut… (style nominal)", o: ["Im Fall eines Defekts…", "Im Fall ein Defekt…", "Falls eines Defekts…"], a: 0, ex: "im Fall + genitive.", ex_fr: "im Fall + génitif." }
    ]
  },
  {
    id: 89, level: "B2", icon: "scale",
    title: "Während, wohingegen, selbst wenn: contrast and concession", title_fr: "Während, wohingegen, selbst wenn : l'opposition et la concession",
    subtitle: "Compare two facts, and say that something happens in spite of everything.", subtitle_fr: "Comparer deux faits, et dire qu'une chose arrive malgré tout.",
    body: `
<h2>Contrast: two facts side by side</h2>
<p><s-de>während</s-de> doesn't only mean "while" (time); it also means "whereas": <s-de>Mein Bruder spart, während meine Schwester alles ausgibt.</s-de> More formal: <s-de>wohingegen</s-de>. In the main clause: <s-de>dagegen / hingegen</s-de> (on the other hand): <s-de>Online ist es billiger. Im Laden bekommt man dagegen eine Beratung.</s-de> With a noun: <s-de>im Gegensatz zu</s-de> + dative.</p>
<h2>Concession: in spite of that</h2>
<table>
<tr><th>Form</th><th>Example</th></tr>
<tr><td><s-de>obwohl</s-de></td><td><s-de>Obwohl das Gerät neu war, funktionierte es nicht.</s-de></td></tr>
<tr><td><s-de>auch wenn / selbst wenn</s-de> (even if)</td><td><s-de>Selbst wenn es billiger wäre, würde ich es nicht kaufen.</s-de></td></tr>
<tr><td><s-de>trotzdem / dennoch</s-de></td><td><s-de>Es war teuer. Dennoch hat es sich gelohnt.</s-de></td></tr>
<tr><td><s-de>so … auch</s-de> (however…)</td><td><s-de>So teuer es auch ist, ich kaufe es.</s-de></td></tr>
</table>
<p>After a <s-de>so … auch</s-de> clause, the main clause can keep its normal order: <s-de>So teuer es auch ist, ich kaufe es.</s-de></p>
<div class="tip"><s-de>während</s-de> + genitive is a preposition (time): <s-de>während des Urlaubs</s-de>. <s-de>während</s-de> + clause can be time or contrast; the context decides: <s-de>Während ich koche, hört sie Musik</s-de> (at the same time) · <s-de>Während er spart, gibt sie alles aus</s-de> (whereas).</div>
`,
    body_fr: `
<h2>L'opposition : deux faits côte à côte</h2>
<p><s-de>während</s-de> ne veut pas seulement dire « pendant que » ; il veut aussi dire « alors que, tandis que » : <s-de>Mein Bruder spart, während meine Schwester alles ausgibt.</s-de> Plus soutenu : <s-de>wohingegen</s-de>. Dans la principale : <s-de>dagegen / hingegen</s-de> (en revanche) : <s-de>Online ist es billiger. Im Laden bekommt man dagegen eine Beratung.</s-de> Avec un nom : <s-de>im Gegensatz zu</s-de> + datif.</p>
<h2>La concession : malgré tout</h2>
<table>
<tr><th>Forme</th><th>Exemple</th></tr>
<tr><td><s-de>obwohl</s-de></td><td><s-de>Obwohl das Gerät neu war, funktionierte es nicht.</s-de></td></tr>
<tr><td><s-de>auch wenn / selbst wenn</s-de> (même si)</td><td><s-de>Selbst wenn es billiger wäre, würde ich es nicht kaufen.</s-de></td></tr>
<tr><td><s-de>trotzdem / dennoch</s-de></td><td><s-de>Es war teuer. Dennoch hat es sich gelohnt.</s-de></td></tr>
<tr><td><s-de>so … auch</s-de> (si … que)</td><td><s-de>So teuer es auch ist, ich kaufe es.</s-de></td></tr>
</table>
<p>Après une proposition en <s-de>so … auch</s-de>, la principale peut garder son ordre normal : <s-de>So teuer es auch ist, ich kaufe es.</s-de> (Si cher que ce soit, je l'achète.)</p>
<div class="tip"><s-de>während</s-de> + génitif est une préposition (le temps) : <s-de>während des Urlaubs</s-de>. <s-de>während</s-de> + subordonnée peut exprimer le temps ou l'opposition ; c'est le contexte qui tranche : <s-de>Während ich koche, hört sie Musik</s-de> (en même temps) · <s-de>Während er spart, gibt sie alles aus</s-de> (alors que).</div>
`,
    examples: [
      ["Mein Bruder spart jeden Cent, während meine Schwester alles ausgibt.", "My brother saves every cent, whereas my sister spends everything.", "Mon frère économise chaque centime, alors que ma sœur dépense tout."],
      ["Online ist es billiger. Im Laden bekommt man dagegen eine gute Beratung.", "It's cheaper online. In the shop, on the other hand, you get good advice.", "C'est moins cher en ligne. En magasin, en revanche, on est bien conseillé."],
      ["Im Gegensatz zu ihrem Bruder kauft sie nur gebrauchte Kleidung.", "Unlike her brother, she only buys second-hand clothes.", "Contrairement à son frère, elle n'achète que des vêtements d'occasion."],
      ["Obwohl das Gerät neu war, funktionierte es nicht.", "Although the device was new, it didn't work.", "Bien que l'appareil soit neuf, il ne fonctionnait pas."],
      ["Selbst wenn es billiger wäre, würde ich es nicht kaufen.", "Even if it were cheaper, I wouldn't buy it.", "Même si c'était moins cher, je ne l'achèterais pas."],
      ["Die Reparatur war teuer. Dennoch hat sie sich gelohnt.", "The repair was expensive. Even so, it was worth it.", "La réparation était chère. Elle en valait pourtant la peine."],
      ["So verlockend das Angebot auch ist, ich warte lieber noch.", "However tempting the offer is, I'd rather wait.", "Si alléchante que soit l'offre, je préfère encore attendre."]
    ],
    quiz: [
      { q: "Er spart, ___ sie alles ausgibt. (whereas)", q_fr: "Er spart, ___ sie alles ausgibt. (alors que)", o: ["während", "obwohl", "trotzdem"], a: 0, ex: "Contrast between two facts: während.", ex_fr: "Opposition entre deux faits : während." },
      { q: "“Even if it were free, I wouldn't take it.”", q_fr: "« Même si c'était gratuit, je ne le prendrais pas. »", o: ["Selbst wenn es kostenlos wäre, würde ich es nicht nehmen.", "Selbst wenn es kostenlos wäre, ich würde es nicht nehmen würde.", "Trotzdem es kostenlos wäre, würde ich es nicht nehmen."], a: 0, ex: "selbst wenn + Konjunktiv II.", ex_fr: "selbst wenn + Konjunktiv II." },
      { q: "Es war teuer. ___ hat es sich gelohnt.", q_fr: "Es war teuer. ___ hat es sich gelohnt.", o: ["Dennoch", "Obwohl", "Während"], a: 0, ex: "An adverb in the main clause: dennoch / trotzdem.", ex_fr: "Un adverbe dans la principale : dennoch / trotzdem." },
      { q: "“Unlike her brother…”", q_fr: "« Contrairement à son frère… »", o: ["Im Gegensatz zu ihrem Bruder…", "Im Gegensatz von ihrem Bruder…", "Gegen ihren Bruder…"], a: 0, ex: "im Gegensatz zu + dative.", ex_fr: "im Gegensatz zu + datif." },
      { q: "___ teuer es auch ist, ich kaufe es.", q_fr: "___ teuer es auch ist, ich kaufe es.", o: ["So", "Wie", "Obwohl"], a: 0, ex: "so + adjective … auch = however…", ex_fr: "so + adjectif … auch = si … que." }
    ]
  },
  {
    id: 90, level: "B2", kind: "functional", icon: "shield",
    title: "Everyday German: standing up for your rights as a customer", title_fr: "L'allemand de tous les jours : faire valoir tes droits de consommateur",
    subtitle: "The right of withdrawal, the legal guarantee, and a firm but polite letter.", subtitle_fr: "Le droit de rétractation, la garantie légale, et une lettre ferme mais polie.",
    body: `
<h2>Two rights to know (in the EU)</h2>
<p><b>Widerrufsrecht</b>: for purchases made online or by phone, you can withdraw from the contract within <b>14 days</b> without giving a reason (there are exceptions, for example goods made to your specifications). <b>Gewährleistung</b>: for new goods, the seller is liable for defects for <b>two years</b>. Don't confuse it with the <s-de>Garantie</s-de>, which is a voluntary promise by the manufacturer.</p>
<h2>Phrases for a firm letter</h2>
<table>
<tr><th>To…</th><th>German</th></tr>
<tr><td>withdraw</td><td><s-de>Hiermit widerrufe ich den Kaufvertrag vom 2. Mai.</s-de></td></tr>
<tr><td>describe the defect</td><td><s-de>Das Gerät weist folgenden Mangel auf: …</s-de></td></tr>
<tr><td>state your right</td><td><s-de>Ich mache meinen Anspruch auf Gewährleistung geltend.</s-de></td></tr>
<tr><td>ask for a solution</td><td><s-de>Ich bitte Sie, das Gerät zu reparieren oder zu ersetzen.</s-de></td></tr>
<tr><td>set a deadline</td><td><s-de>Ich setze Ihnen dafür eine Frist bis zum 20. Juni.</s-de></td></tr>
<tr><td>announce the next step</td><td><s-de>Andernfalls werde ich mich an die Verbraucherzentrale wenden.</s-de></td></tr>
</table>
<div class="tip">Stay factual: dates, order number, a precise description of the problem. Firm doesn't mean rude: no exclamation marks, no insults, but clear demands and a deadline. In Germany, every federal state has a <s-de>Verbraucherzentrale</s-de> that gives advice.</div>
`,
    body_fr: `
<h2>Deux droits à connaître (dans l'UE)</h2>
<p><b>Widerrufsrecht</b> : pour un achat en ligne ou par téléphone, tu peux te rétracter dans un délai de <b>14 jours</b> sans donner de raison (il y a des exceptions, par exemple pour un article fabriqué selon tes indications). <b>Gewährleistung</b> : pour un bien neuf, le vendeur répond des défauts pendant <b>deux ans</b>. Ne la confonds pas avec la <s-de>Garantie</s-de>, qui est un engagement facultatif du fabricant. C'est la même distinction qu'en France entre garantie légale et garantie commerciale.</p>
<h2>Les formules d'une lettre ferme</h2>
<table>
<tr><th>Pour…</th><th>En allemand</th></tr>
<tr><td>te rétracter</td><td><s-de>Hiermit widerrufe ich den Kaufvertrag vom 2. Mai.</s-de></td></tr>
<tr><td>décrire le défaut</td><td><s-de>Das Gerät weist folgenden Mangel auf: …</s-de></td></tr>
<tr><td>invoquer ton droit</td><td><s-de>Ich mache meinen Anspruch auf Gewährleistung geltend.</s-de></td></tr>
<tr><td>demander une solution</td><td><s-de>Ich bitte Sie, das Gerät zu reparieren oder zu ersetzen.</s-de></td></tr>
<tr><td>fixer un délai</td><td><s-de>Ich setze Ihnen dafür eine Frist bis zum 20. Juni.</s-de></td></tr>
<tr><td>annoncer la suite</td><td><s-de>Andernfalls werde ich mich an die Verbraucherzentrale wenden.</s-de></td></tr>
</table>
<div class="tip">Reste factuel : dates, numéro de commande, description précise du problème. Ferme ne veut pas dire impoli : pas de points d'exclamation, pas d'insultes, mais des demandes claires et un délai. En Allemagne, chaque Land a une <s-de>Verbraucherzentrale</s-de> qui donne des conseils.</div>
`,
    examples: [
      ["Hiermit widerrufe ich den Kaufvertrag vom 2. Mai.", "I hereby withdraw from the purchase contract of 2 May.", "Par la présente, je me rétracte du contrat de vente du 2 mai."],
      ["Das Gerät weist folgenden Mangel auf: Der Bildschirm bleibt schwarz.", "The device has the following defect: the screen stays black.", "L'appareil présente le défaut suivant : l'écran reste noir."],
      ["Ich mache meinen Anspruch auf Gewährleistung geltend.", "I am claiming my rights under the legal guarantee.", "Je fais valoir mon droit à la garantie légale."],
      ["Ich bitte Sie, das Gerät zu reparieren oder zu ersetzen.", "I ask you to repair or replace the device.", "Je vous prie de réparer ou de remplacer l'appareil."],
      ["Ich setze Ihnen dafür eine Frist bis zum 20. Juni.", "I'm giving you until 20 June to do so.", "Je vous accorde pour cela un délai jusqu'au 20 juin."],
      ["Andernfalls werde ich mich an die Verbraucherzentrale wenden.", "Otherwise I will contact the consumer advice centre.", "À défaut, je m'adresserai à l'association de défense des consommateurs."],
      ["Die Garantie des Herstellers ist abgelaufen, die Gewährleistung aber nicht.", "The manufacturer's guarantee has expired, but the legal guarantee hasn't.", "La garantie du fabricant a expiré, mais pas la garantie légale."]
    ],
    quiz: [
      { q: "How long is the right of withdrawal for online purchases in the EU?", q_fr: "Combien de temps dure le droit de rétractation pour un achat en ligne dans l'UE ?", o: ["14 days", "2 days", "2 years"], o_fr: ["14 jours", "2 jours", "2 ans"], a: 0, ex: "14 days (with some exceptions).", ex_fr: "14 jours (avec quelques exceptions)." },
      { q: "Who is liable under the Gewährleistung?", q_fr: "Qui est responsable au titre de la Gewährleistung ?", o: ["The seller", "The manufacturer only", "The consumer advice centre"], o_fr: ["Le vendeur", "Seulement le fabricant", "L'association de consommateurs"], a: 0, ex: "The seller, for two years for new goods.", ex_fr: "Le vendeur, pendant deux ans pour un bien neuf." },
      { q: "“I'm giving you a deadline of 20 June.”", q_fr: "« Je vous accorde un délai jusqu'au 20 juin. »", o: ["Ich setze Ihnen eine Frist bis zum 20. Juni.", "Ich stelle Ihnen eine Frist bis zum 20. Juni.", "Ich mache Ihnen eine Frist bis 20. Juni."], a: 0, ex: "eine Frist setzen.", ex_fr: "eine Frist setzen." },
      { q: "“Otherwise…” (formal)", q_fr: "« À défaut… » (formel)", o: ["Andernfalls…", "Anderswo…", "Andersrum…"], a: 0, ex: "andernfalls = otherwise.", ex_fr: "andernfalls = à défaut, sinon." },
      { q: "Which tone is right for this letter?", q_fr: "Quel ton convient à cette lettre ?", o: ["Factual, firm and polite", "Angry, with exclamation marks", "Very casual"], o_fr: ["Factuel, ferme et poli", "En colère, avec des points d'exclamation", "Très familier"], a: 0, ex: "Facts, clear demands, a deadline.", ex_fr: "Des faits, des demandes claires, un délai." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    88: {
      gap: [["Wir kommen, es sei ___, es regnet.", "denn"], ["___ Sie Fragen haben, stehe ich Ihnen gern zur Verfügung.", "Sollten"], ["Sie können das Gerät zurückgeben, ___ es unbeschädigt ist.", "sofern|falls|wenn", "provided that", "pourvu que"], ["Im Fall ___ Defekts wenden Sie sich an den Händler.", "eines"]],
      fix: [["Wir kommen, es sei denn, regnet es.", "Wir kommen, es sei denn, es regnet.", "After es sei denn: normal order, verb second.", "Après es sei denn : ordre normal, verbe en deuxième position."], ["Sollten Sie Fragen haben, Sie rufen mich bitte an.", "Sollten Sie Fragen haben, rufen Sie mich bitte an.", "After the condition, the main verb comes first.", "Après la condition, le verbe principal vient en premier."]],
      task: ["Write four sentences for a shop's terms and conditions with falls, sofern, es sei denn and Sollten … .", "Écris quatre phrases pour les conditions générales d'un magasin avec falls, sofern, es sei denn et Sollten … .", "Falls Sie mit der Ware nicht zufrieden sind, können Sie sie innerhalb von 14 Tagen zurückschicken. Der Umtausch ist möglich, sofern die Ware unbenutzt ist. Die Rücksendung ist kostenlos, es sei denn, Sie haben mehr als fünf Artikel bestellt. Sollten Sie Fragen haben, erreichen Sie uns telefonisch."]
    },
    89: {
      gap: [["Mein Bruder spart, ___ meine Schwester alles ausgibt.", "während|wohingegen", "whereas", "alors que"], ["___ wenn es billiger wäre, würde ich es nicht kaufen.", "Selbst|Auch", "even if", "même si"], ["Die Reparatur war teuer. ___ hat sie sich gelohnt.", "Dennoch|Trotzdem"], ["Im Gegensatz ___ ihrem Bruder kauft sie gebraucht.", "zu"]],
      fix: [["Obwohl war das Gerät neu, funktionierte es nicht.", "Obwohl das Gerät neu war, funktionierte es nicht.", "obwohl: verb at the end.", "obwohl : verbe à la fin."], ["Es war teuer. Trotzdem es hat sich gelohnt.", "Es war teuer. Trotzdem hat es sich gelohnt.", "After trotzdem, the verb comes next.", "Après trotzdem, le verbe vient tout de suite."]],
      task: ["Compare shopping online and in a shop: two contrasts (während, dagegen) and two concessions (selbst wenn, dennoch).", "Compare les achats en ligne et en magasin : deux oppositions (während, dagegen) et deux concessions (selbst wenn, dennoch).", "Während man online rund um die Uhr einkaufen kann, haben Läden feste Öffnungszeiten. Im Laden kann man die Ware dagegen anfassen und ausprobieren. Selbst wenn ein Produkt online billiger ist, kaufe ich Schuhe lieber im Geschäft. Die Beratung kostet Zeit, dennoch spart sie mir oft einen Fehlkauf."]
    },
    90: {
      gap: [["Hiermit ___ ich den Kaufvertrag vom 2. Mai.", "widerrufe", "withdraw from", "me rétracte de"], ["Das Gerät weist folgenden Mangel ___: Der Bildschirm bleibt schwarz.", "auf"], ["Ich setze Ihnen eine ___ bis zum 20. Juni.", "Frist", "deadline", "délai"], ["___ werde ich mich an die Verbraucherzentrale wenden.", "Andernfalls|Sonst", "otherwise", "à défaut"]],
      fix: [["Ich mache meinen Anspruch auf Gewährleistung geltend machen.", "Ich mache meinen Anspruch auf Gewährleistung geltend.", "etwas geltend machen: one machen only.", "etwas geltend machen : un seul machen."], ["Die Garantie vom Hersteller ist abgelaufen, also habe ich keine Rechte mehr.", "Die Garantie des Herstellers ist abgelaufen, aber die Gewährleistung gilt noch.", "The legal guarantee (two years) is separate from the manufacturer's guarantee.", "La garantie légale (deux ans) est distincte de la garantie du fabricant."]],
      task: ["Your headphones, bought online four months ago, have stopped working. Write a short, firm message (about 60 words) to the shop: describe the defect, claim your right, ask for a repair or replacement and set a deadline.", "Ton casque audio, acheté en ligne il y a quatre mois, ne fonctionne plus. Écris un court message ferme (environ 60 mots) au magasin : décris le défaut, fais valoir ton droit, demande une réparation ou un remplacement et fixe un délai.", "Sehr geehrte Damen und Herren, am 5. Februar habe ich bei Ihnen Kopfhörer bestellt (Bestellnummer 48213). Seit einer Woche funktioniert der linke Kopfhörer nicht mehr. Ich mache meinen Anspruch auf Gewährleistung geltend und bitte Sie, das Gerät zu reparieren oder zu ersetzen. Dafür setze ich Ihnen eine Frist bis zum 15. Juni. Mit freundlichen Grüßen, Robin Keller"]
    }
  });

  W.ROLEPLAYS.push(
  { id: "tarifwechsel", lesson: 88, level: "B2", icon: "smartphone", partner: "Herr Becker", role: "customer service", role_fr: "le service client",
    title: "Changing your phone contract", title_fr: "Changer de forfait mobile",
    setting: "You'd like more mobile data. You call your phone company's customer service and talk to Herr Becker about the conditions.", setting_fr: "Tu voudrais plus de données mobiles. Tu appelles le service client de ton opérateur et tu parles des conditions avec Herr Becker.",
    turns: [
      { p: "Kundenservice, Becker am Apparat. Was kann ich für Sie tun?", en: "Customer service, Becker speaking. What can I do for you?", fr: "Service client, Becker à l'appareil. Que puis-je faire pour vous ?" },
      { y: ["Ich möchte meinen Tarif wechseln, sofern das vor Ende der Laufzeit möglich ist.", "Ich möchte meinen Tarif wechseln, sofern ist das vor Ende der Laufzeit möglich.", "Ich möchte meinen Tarif wechseln, es sei denn, das vor Ende der Laufzeit möglich ist."], en: "I'd like to change my plan, provided that's possible before the end of the contract term.", fr: "J'aimerais changer de forfait, pour autant que ce soit possible avant la fin de la période contractuelle.", why: "sofern: verb at the end.", why_fr: "sofern : verbe à la fin." },
      { p: "Das geht, allerdings nur in einen höheren Tarif.", en: "That's possible, but only to a higher plan.", fr: "C'est possible, mais seulement vers un forfait supérieur." },
      { y: ["Falls ich in einen höheren Tarif wechsle, bekomme ich dann mehr Datenvolumen?", "Falls ich wechsle in einen höheren Tarif, bekomme ich dann mehr Datenvolumen?", "Falls ich in einen höheren Tarif wechsle, ich bekomme dann mehr Datenvolumen?"], en: "If I switch to a higher plan, do I get more data?", fr: "Si je passe à un forfait supérieur, j'aurai plus de données ?", why: "falls: verb at the end; then the main verb first.", why_fr: "falls : verbe à la fin ; puis le verbe principal en premier." },
      { p: "Ja, 20 Gigabyte statt 5. Und ein neues Handy gibt es dazu, vorausgesetzt, Sie verlängern den Vertrag um zwei Jahre.", en: "Yes, 20 gigabytes instead of 5. And you get a new phone too, provided you extend the contract by two years.", fr: "Oui, 20 gigaoctets au lieu de 5. Et un nouveau téléphone en plus, à condition de prolonger le contrat de deux ans." },
      { y: ["Zwei Jahre möchte ich eigentlich nicht, es sei denn, der Preis bleibt gleich.", "Zwei Jahre möchte ich eigentlich nicht, es sei denn, bleibt der Preis gleich.", "Zwei Jahre möchte ich eigentlich nicht, es sei, der Preis bleibt gleich."], en: "I don't really want two years, unless the price stays the same.", fr: "Je ne veux pas vraiment m'engager deux ans, à moins que le prix reste le même.", why: "es sei denn + normal word order.", why_fr: "es sei denn + ordre normal." },
      { p: "Ich kann Ihnen zehn Prozent Rabatt auf den neuen Tarif anbieten.", en: "I can offer you ten per cent off the new plan.", fr: "Je peux vous proposer dix pour cent de réduction sur le nouveau forfait." },
      { y: ["Einverstanden. Sollten sich die Bedingungen ändern, informieren Sie mich bitte schriftlich.", "Einverstanden. Sollten sich die Bedingungen ändern, Sie informieren mich bitte schriftlich.", "Einverstanden. Sollen sich die Bedingungen ändern, informieren Sie mich bitte schriftlich."], en: "Agreed. Should the conditions change, please inform me in writing.", fr: "D'accord. Si les conditions venaient à changer, informez-moi par écrit, s'il vous plaît.", why: "Sollten + verb first; then the main verb first.", why_fr: "Sollten en tête ; puis le verbe principal en premier." },
      { p: "Selbstverständlich. Sie bekommen heute noch eine Bestätigung per E-Mail.", en: "Of course. You'll receive a confirmation by email today.", fr: "Bien sûr. Vous recevrez une confirmation par e-mail dès aujourd'hui." },
      { y: ["Vielen Dank. Falls etwas unklar ist, melde ich mich wieder.", "Vielen Dank. Falls etwas ist unklar, melde ich mich wieder.", "Vielen Dank. Falls etwas unklar ist, ich melde mich wieder."], en: "Thank you very much. If anything is unclear, I'll get back to you.", fr: "Merci beaucoup. Si quelque chose n'est pas clair, je vous recontacterai.", why: "falls: verb at the end; then the main verb first.", why_fr: "falls : verbe à la fin ; puis le verbe principal en premier." }
    ] },
  { id: "waschmaschine", lesson: 90, level: "B2", icon: "shield", partner: "Frau Schulte", role: "the online shop", role_fr: "la boutique en ligne",
    title: "The broken washing machine", title_fr: "La machine à laver en panne",
    setting: "Your washing machine, bought online fourteen months ago, has broken down. You call the shop and talk to Frau Schulte.", setting_fr: "Ta machine à laver, achetée en ligne il y a quatorze mois, est tombée en panne. Tu appelles la boutique et tu parles avec Frau Schulte.",
    turns: [
      { p: "Elektro-Versand, Schulte. Wie kann ich Ihnen helfen?", en: "Elektro-Versand, Schulte speaking. How can I help you?", fr: "Elektro-Versand, Schulte. Comment puis-je vous aider ?" },
      { y: ["Ich habe vor 14 Monaten bei Ihnen eine Waschmaschine gekauft. Sie pumpt das Wasser nicht mehr ab.", "Ich habe vor 14 Monaten bei Ihnen eine Waschmaschine gekauft. Sie pumpt das Wasser nicht mehr weg ab.", "Ich habe seit 14 Monaten bei Ihnen eine Waschmaschine gekauft. Sie pumpt das Wasser nicht mehr ab."], en: "I bought a washing machine from you 14 months ago. It no longer pumps out the water.", fr: "Je vous ai acheté une machine à laver il y a 14 mois. Elle ne vidange plus l'eau.", why: "vor + time = ago; separable verb abpumpen.", why_fr: "vor + durée = il y a ; verbe séparable abpumpen." },
      { p: "Das tut mir leid. Aber die Herstellergarantie gilt nur ein Jahr.", en: "I'm sorry. But the manufacturer's guarantee only lasts one year.", fr: "Je suis désolée. Mais la garantie du fabricant ne vaut qu'un an." },
      { y: ["Das mag sein, aber die gesetzliche Gewährleistung beträgt zwei Jahre, und dafür sind Sie als Verkäufer zuständig.", "Das mag sein, aber die gesetzliche Gewährleistung beträgt zwei Jahre, und dafür ist der Hersteller allein zuständig.", "Das mag sein, aber die gesetzliche Gewährleistung beträgt zwei Jahren, und dafür sind Sie als Verkäufer zuständig."], en: "That may be, but the legal guarantee is two years, and you as the seller are responsible for it.", fr: "C'est possible, mais la garantie légale est de deux ans, et c'est vous, en tant que vendeur, qui en êtes responsable.", why: "The Gewährleistung concerns the seller; zwei Jahre.", why_fr: "La Gewährleistung concerne le vendeur ; zwei Jahre." },
      { p: "Hm. Wir müssten aber erst prüfen, ob der Mangel schon beim Kauf vorhanden war.", en: "Hm. But we'd first have to check whether the defect was already there when you bought it.", fr: "Hum. Mais nous devrions d'abord vérifier si le défaut existait déjà au moment de l'achat." },
      { y: ["Das verstehe ich. Ich bitte Sie, die Maschine zu reparieren oder zu ersetzen.", "Das verstehe ich. Ich bitte Sie, die Maschine reparieren oder ersetzen.", "Das verstehe ich. Ich bitte Ihnen, die Maschine zu reparieren oder zu ersetzen."], en: "I understand. I ask you to repair or replace the machine.", fr: "Je comprends. Je vous prie de réparer ou de remplacer la machine.", why: "jemanden bitten, … zu + infinitive.", why_fr: "jemanden bitten, … zu + infinitif." },
      { p: "Gut. Ein Techniker könnte in etwa drei Wochen kommen.", en: "All right. A technician could come in about three weeks.", fr: "Bien. Un technicien pourrait passer dans trois semaines environ." },
      { y: ["Drei Wochen ohne Waschmaschine sind zu lang. Ich setze Ihnen eine Frist bis Ende nächster Woche.", "Drei Wochen ohne Waschmaschine ist zu lang. Ich setze Ihnen eine Frist bis Ende nächster Woche.", "Drei Wochen ohne Waschmaschine sind zu lang. Ich mache Ihnen eine Frist bis Ende nächster Woche."], en: "Three weeks without a washing machine is too long. I'm giving you until the end of next week.", fr: "Trois semaines sans machine à laver, c'est trop long. Je vous accorde un délai jusqu'à la fin de la semaine prochaine.", why: "eine Frist setzen.", why_fr: "eine Frist setzen." },
      { p: "Ich sehe, was ich tun kann. Aus Kulanz übernehmen wir auch die Anfahrtskosten.", en: "I'll see what I can do. As a goodwill gesture, we'll also cover the call-out costs.", fr: "Je vais voir ce que je peux faire. À titre commercial, nous prenons aussi en charge les frais de déplacement." },
      { y: ["Das ist fair, danke. Andernfalls hätte ich mich an die Verbraucherzentrale gewandt.", "Das ist fair, danke. Andernfalls hätte ich mich an die Verbraucherzentrale gewendet haben.", "Das ist fair, danke. Andernfalls ich hätte mich an die Verbraucherzentrale gewandt."], en: "That's fair, thank you. Otherwise I would have contacted the consumer advice centre.", fr: "C'est correct, merci. Sinon, j'aurais fait appel à l'association de consommateurs.", why: "Konjunktiv II past: hätte … gewandt; andernfalls + verb.", why_fr: "Konjunktiv II passé : hätte … gewandt ; andernfalls + verbe." }
    ] }
  );

  W.READINGS.push({
    id: "warentest", level: "B2", icon: "book-open", title: "Stiftung Warentest: „gut“ oder „mangelhaft“?", genre: "Explainer",
    intro: "For decades, many Germans have checked one magazine before buying a washing machine or a pair of headphones. How does product testing work?",
    intro_fr: "Depuis des décennies, beaucoup d'Allemands consultent un magazine avant d'acheter une machine à laver ou un casque audio. Comment fonctionnent ces tests ?",
    paragraphs: [
      { de: "Die Stiftung Warentest wurde am 4. Dezember 1964 auf Beschluss der Bundesregierung gegründet und hat ihren Sitz in Berlin. Ihre Aufgabe ist es, Waren und Dienstleistungen unabhängig zu prüfen und die Verbraucher über die Ergebnisse zu informieren. 1966 erschien die erste Ausgabe der Zeitschrift „test“; seit 1991 gibt es außerdem „Finanztest“.", en: "Stiftung Warentest was founded on 4 December 1964 by decision of the federal government and is based in Berlin. Its task is to test goods and services independently and to inform consumers of the results. The first issue of the magazine “test” appeared in 1966; since 1991 there has also been “Finanztest”.", fr: "La Stiftung Warentest a été fondée le 4 décembre 1964 sur décision du gouvernement fédéral et siège à Berlin. Sa mission est de tester des produits et des services en toute indépendance et d'informer les consommateurs des résultats. Le premier numéro du magazine « test » est paru en 1966 ; depuis 1991, il existe aussi « Finanztest »." },
      { de: "Damit die Tests fair bleiben, kauft die Stiftung die Produkte anonym im normalen Handel ein, statt sie von den Herstellern zu verlangen. Anschließend werden sie in spezialisierten Laboren geprüft, wobei für jede Produktgruppe eigene Kriterien gelten: Bei Fahrradhelmen zählt die Sicherheit, bei Waschmaschinen auch der Verbrauch an Wasser und Strom.", en: "To keep the tests fair, the foundation buys the products anonymously in ordinary shops instead of asking the manufacturers for them. They are then tested in specialised laboratories, with separate criteria for each product group: for bike helmets, safety counts; for washing machines, water and electricity consumption count too.", fr: "Pour que les tests restent équitables, la fondation achète les produits de façon anonyme dans le commerce, au lieu de les demander aux fabricants. Ils sont ensuite examinés dans des laboratoires spécialisés, avec des critères propres à chaque catégorie : pour les casques de vélo, c'est la sécurité qui compte ; pour les machines à laver, aussi la consommation d'eau et d'électricité." },
      { de: "Die Ergebnisse werden mit Noten zusammengefasst, die an die Schule erinnern: von „sehr gut“ bis „mangelhaft“. Während ein „gut“ für Hersteller eine willkommene Werbung ist, kann ein „mangelhaft“ den Verkauf eines Produkts stark beeinflussen. Die Hefte selbst enthalten jedoch keine Werbung.", en: "The results are summarised with grades reminiscent of school: from “very good” to “poor”. While a “good” is welcome advertising for manufacturers, a “poor” can strongly affect a product's sales. The magazines themselves, however, contain no advertising.", fr: "Les résultats sont résumés par des notes qui rappellent l'école : de « très bien » à « insuffisant ». Alors qu'un « bien » est une publicité bienvenue pour les fabricants, un « insuffisant » peut peser lourdement sur les ventes d'un produit. Les magazines eux-mêmes ne contiennent en revanche aucune publicité." },
      { de: "Finanziert wird die Stiftung vor allem durch den Verkauf ihrer Zeitschriften und Online-Angebote. Selbst wenn nicht alle Verbraucher die Tests lesen, prägen sie die Debatte: Viele Händler werben mit dem Testurteil, und manche Hersteller verbessern ihre Produkte, nachdem sie schlecht abgeschnitten haben.", en: "The foundation is financed mainly by sales of its magazines and online services. Even if not all consumers read the tests, they shape the debate: many retailers advertise with the test verdict, and some manufacturers improve their products after doing badly.", fr: "La fondation est financée surtout par la vente de ses magazines et de ses offres en ligne. Même si tous les consommateurs ne lisent pas les tests, ceux-ci pèsent sur le débat : beaucoup de commerçants font de la publicité avec la note obtenue, et certains fabricants améliorent leurs produits après de mauvais résultats." }
    ],
    glossary: { "Stiftung": ["foundation", "fondation"], "Beschluss": ["decision", "décision"], "Bundesregierung": ["federal government", "gouvernement fédéral"], "Sitz": ["seat, headquarters", "siège"], "Waren": ["goods", "marchandises"], "Dienstleistungen": ["services", "services"], "unabhängig": ["independently", "de façon indépendante"], "Ausgabe": ["issue, edition", "numéro, édition"], "anonym": ["anonymously", "anonymement"], "verlangen": ["to ask for, to demand", "demander, exiger"], "spezialisierten": ["specialised", "spécialisé"], "wobei": ["whereby, with", "sachant que, où"], "Produktgruppe": ["product group", "catégorie de produits"], "Kriterien": ["criteria", "critères"], "Fahrradhelmen": ["bike helmets", "casques de vélo"], "zusammengefasst": ["summarised", "résumé"], "willkommene": ["welcome", "bienvenue"], "Verkauf": ["sales", "vente"], "Hefte": ["issues, magazines", "numéros, magazines"], "Online-Angebote": ["online services", "offres en ligne"], "prägen": ["to shape", "marquer, façonner"], "werben": ["to advertise", "faire de la publicité"], "Testurteil": ["test verdict", "note du test"], "abgeschnitten": ["(abschneiden) performed, done", "(abschneiden) obtenu un résultat"] },
    questions: [
      { q: "Wann wurde die Stiftung Warentest gegründet?", o: ["Am 4. Dezember 1964", "Im Jahr 1991", "Im Jahr 1966"], a: 0 },
      { q: "Wie kommt die Stiftung an die Produkte?", o: ["Sie kauft sie anonym im Handel.", "Die Hersteller schicken sie kostenlos.", "Die Verbraucher bringen sie vorbei."], a: 0 },
      { q: "Was zählt laut Text bei Waschmaschinen auch?", o: ["Der Verbrauch an Wasser und Strom", "Die Farbe", "Der Name der Marke"], a: 0 },
      { q: "Was enthalten die Hefte nicht?", o: ["Werbung", "Testergebnisse", "Noten"], a: 0 },
      { q: "Wie wird die Stiftung vor allem finanziert?", o: ["Durch den Verkauf ihrer Zeitschriften und Online-Angebote", "Durch Werbung der Hersteller", "Durch Spenden der Händler"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-b2-6", unit: "b2-6", level: "B2", icon: "radio",
    title: "Verbrauchertipps im Radio", title_fr: "Conseils aux consommateurs à la radio",
    context: "A consumer-advice slot on the radio. The presenter talks to Frau Wendt from a consumer advice centre, then a listener, Kai, calls with a question.", context_fr: "Une chronique consommation à la radio. Le présentateur parle avec Frau Wendt, d'une association de consommateurs, puis un auditeur, Kai, appelle avec une question.",
    words: [["der Online-Kauf, ¨-e", "the online purchase", "l'achat en ligne"], ["die Begründung, -en", "the reason, the justification", "la justification"], ["angefertigt", "made (to order)", "fabriqué (sur mesure)"], ["der Verkäufer, -", "the seller", "le vendeur"], ["freiwillig", "voluntary", "facultatif, volontaire"]],
    lines: [["Moderator", "Frau Wendt, viele Hörer fragen uns: Kann man alles, was man online kauft, einfach zurückschicken?", "de-DE"], ["Frau Wendt", "Fast alles. Bei Online-Käufen haben Sie ein Widerrufsrecht von 14 Tagen, und zwar ohne Begründung. Es gibt allerdings Ausnahmen, etwa wenn ein Produkt nach Ihren Wünschen angefertigt wurde.", "de-DE"], ["Moderator", "Und wenn etwas nach einem Jahr kaputtgeht?", "de-DE"], ["Frau Wendt", "Dann gilt die gesetzliche Gewährleistung. Sie beträgt bei neuen Produkten zwei Jahre, und zuständig ist der Verkäufer, nicht der Hersteller.", "de-DE"], ["Moderator", "Wir haben einen Anrufer in der Leitung. Kai, Ihre Frage?", "de-DE"], ["Kai", "Mein Laptop ist nach 18 Monaten kaputt. Der Händler sagt, die Garantie sei abgelaufen.", "de-DE"], ["Frau Wendt", "Die Garantie ist eine freiwillige Leistung des Herstellers, während die Gewährleistung gesetzlich ist. Sie können sich also an den Händler wenden, sofern der Mangel nicht durch Sie verursacht wurde.", "de-DE"], ["Kai", "Gut zu wissen. Dann schreibe ich ihm heute noch und setze eine Frist.", "de-DE"]],
    gist: ["Worum geht es in der Sendung?", ["Um die Rechte von Verbrauchern", "Um günstige Laptops", "Um Werbung im Radio"]],
    detail: [["Wie lange gilt das Widerrufsrecht bei Online-Käufen?", ["14 Tage", "Zwei Jahre", "Einen Monat"]], ["Wer ist für die Gewährleistung zuständig?", ["Der Verkäufer", "Der Hersteller", "Die Verbraucherzentrale"]], ["Was ist Kais Problem?", ["Sein Laptop ist nach 18 Monaten kaputt.", "Er hat zu viel bezahlt.", "Sein Paket ist nicht angekommen."]], ["Was will Kai jetzt tun?", ["Dem Händler schreiben und eine Frist setzen", "Einen neuen Laptop kaufen", "Den Hersteller anrufen"]]],
    decode: ["Bei Online-Käufen haben Sie ein Widerrufsrecht von 14 Tagen, und zwar ohne Begründung.", "Sie können sich also an den Händler wenden, sofern der Mangel nicht durch Sie verursacht wurde."],
    tip: "Experts often add conditions and exceptions at the end of a sentence: sofern…, es sei denn…, allerdings…, etwa wenn… Listen to the end: that's where the important detail usually is.", tip_fr: "Les experts ajoutent souvent des conditions et des exceptions en fin de phrase : sofern…, es sei denn…, allerdings…, etwa wenn… Écoute jusqu'au bout : c'est souvent là que se trouve le détail important."
  }]);

  W.PROMPTS.push({ id: "de-b2-6", level: "B2", q: "Halte einen kurzen Vortrag: „Kaufen wir zu viel?“ Beschreib das Konsumverhalten in deinem Land, nenne Vor- und Nachteile und gib deine Meinung.", en: "Give a short talk: “Do we buy too much?” Describe consumer habits in your country, give advantages and disadvantages, and give your opinion.", fr: "Fais un court exposé : « Achetons-nous trop ? » Décris les habitudes de consommation dans ton pays, cite des avantages et des inconvénients, et donne ton avis.", time: 240,
    phrases: ["Mein Thema lautet…", "Während früher…, …heute…", "Einerseits… andererseits…", "Selbst wenn…, …", "Abschließend möchte ich betonen, dass…"],
    model: "Mein Thema lautet: Kaufen wir zu viel? Während man früher Kleidung oder Geräte oft jahrelang benutzt hat, werden sie heute schnell ersetzt. Online-Shops machen das Einkaufen besonders bequem: Ein Klick genügt, und am nächsten Tag ist das Paket da. Einerseits ist das praktisch, und der Handel schafft viele Arbeitsplätze. Andererseits entstehen dadurch Berge von Verpackungsmüll, und viele Produkte landen nach kurzer Zeit im Abfall. Selbst wenn ein Produkt billig ist, hat seine Herstellung Ressourcen gekostet. Ich versuche deshalb, vor jedem Kauf kurz zu überlegen, ob ich die Sache wirklich brauche, und kaufe öfter gebraucht. Abschließend möchte ich betonen, dass jeder Einzelne etwas ändern kann, sofern er bewusster einkauft." });

  W.WRITING_GUIDE["b2-6"] = { genre: "An opinion in an online forum (Goethe B2, writing part 1)", genre_fr: "Un avis sur un forum en ligne (Goethe B2, écrit partie 1)",
    plan: [["Refer to the statement you are reacting to.", "Fais référence à l'affirmation à laquelle tu réagis."], ["Your position, with a nuance.", "Ta position, avec une nuance."], ["A contrast between the two sides.", "Une opposition entre les deux côtés."], ["An example from your own experience.", "Un exemple tiré de ton expérience."], ["A conclusion with a condition.", "Une conclusion avec une condition."]],
    marks: [["Die Behauptung, der Online-Handel zerstöre unsere Innenstädte", "reporting the claim (Konjunktiv I)", "rapporter l'affirmation (Konjunktiv I)"], ["ist mir zu einfach", "a nuanced position", "une position nuancée"], ["Während man online", "a contrast with während", "une opposition avec während"], ["Ein Beispiel aus meiner Stadt", "an example", "un exemple"], ["Selbst wenn", "a concession", "une concession"], ["sofern", "a condition", "une condition"]] };

  /* Atelier de langue : champs allemands d'abord, puis anglais et français (voir localize.js). */
  W.LEXIS = W.LEXIS || {};
  W.LEXIS["b2-6"] = {
    colloc: [
      ["einen Vertrag abschließen", "to conclude a contract", "conclure un contrat", "Wir haben einen neuen Vertrag abgeschlossen.", "abgeschlossen", ["gemacht", "gestellt"]],
      ["einen Vertrag kündigen", "to cancel a contract", "résilier un contrat", "Ich habe meinen Handyvertrag gekündigt.", "gekündigt", ["gelöscht", "entlassen"]],
      ["eine Rechnung begleichen", "to settle a bill", "régler une facture", "Bitte begleichen Sie die Rechnung innerhalb von 14 Tagen.", "begleichen", ["gleichen", "machen"]],
      ["einen Gewinn erzielen", "to make a profit", "réaliser un bénéfice", "Die Firma hat einen hohen Gewinn erzielt.", "erzielt", ["gezielt", "getroffen"]],
      ["die Kosten senken", "to cut costs", "réduire les coûts", "Das Unternehmen will die Kosten senken.", "senken", ["sinken", "fallen"]],
      ["eine Beschwerde einreichen", "to lodge a complaint", "déposer une réclamation", "Ich habe bei der Firma eine Beschwerde eingereicht.", "eingereicht", ["eingegeben", "eingestellt"]],
      ["Anspruch auf etwas haben", "to be entitled to something", "avoir droit à quelque chose", "Sie haben Anspruch auf eine Erstattung.", "haben", ["machen", "stellen"]],
      ["die Nachfrage steigt", "demand is rising", "la demande augmente", "Im Sommer steigt die Nachfrage nach Ventilatoren.", "steigt", ["hebt", "erhöht"]],
      ["Werbung machen", "to advertise", "faire de la publicité", "Viele Influencer machen Werbung für Kosmetik.", "machen", ["tun", "geben"]],
      ["eine Frist setzen", "to set a deadline", "fixer un délai", "Ich habe dem Händler eine Frist gesetzt.", "gesetzt", ["gemacht", "gestellt"]]
    ],
    wf: [
      ["Die ___ nach Fahrrädern ist stark gestiegen. (FRAGEN)", "Nachfrage"],
      ["Das Start-up ist sehr ___. (ERFOLG)", "erfolgreich"],
      ["Ein ___ ist nur mit Kassenbon möglich. (UMTAUSCHEN)", "Umtausch"],
      ["Das Land hat große ___ Probleme. (WIRTSCHAFT)", "wirtschaftliche"],
      ["Die ___ des Kaufpreises dauert einige Tage. (ERSTATTEN)", "Erstattung"],
      ["Dieser Gutschein ist leider ___. (GÜLTIG)", "ungültig"],
      ["Der Preis ist ___ hoch. (VERHÄLTNIS)", "verhältnismäßig"],
      ["Die ___ zwischen den Supermärkten ist groß. (KONKURRIEREN)", "Konkurrenz"]
    ],
    kwt: [
      ["Wenn Sie Fragen haben, rufen Sie uns an.", "SOLLTEN", "___, rufen Sie uns an.", "Sollten Sie Fragen haben"],
      ["Wir kommen, wenn es nicht regnet.", "DENN", "Wir kommen, ___ regnet.", "es sei denn, es|es sei denn es"],
      ["Ich helfe dir, aber nur wenn du mir auch hilfst.", "VORAUSGESETZT", "Ich helfe dir, ___ du mir auch hilfst.", "vorausgesetzt, dass|vorausgesetzt dass"],
      ["Mein Bruder spart, aber meine Schwester gibt alles aus.", "WÄHREND", "Mein Bruder spart, ___.", "während meine Schwester alles ausgibt"],
      ["Auch wenn es sehr teuer ist, kaufe ich es.", "SO", "___ es auch ist, ich kaufe es.", "So teuer"],
      ["Das Gerät war neu. Trotzdem funktionierte es nicht.", "OBWOHL", "___, funktionierte es nicht.", "Obwohl das Gerät neu war"]
    ],
    idioms: [
      ["über seine Verhältnisse leben", "mehr Geld ausgeben, als man hat", "to live beyond one's means", "vivre au-dessus de ses moyens", "Viele Familien leben über ihre Verhältnisse.", "über ihre Verhältnisse"],
      ["die Katze im Sack kaufen", "etwas kaufen, ohne es geprüft zu haben", "to buy a pig in a poke", "acheter les yeux fermés", "Online kauft man manchmal die Katze im Sack.", "die Katze im Sack"],
      ["jemanden übers Ohr hauen", "jemanden betrügen", "to rip someone off", "arnaquer quelqu'un", "Der Händler hat mich übers Ohr gehauen.", "übers Ohr gehauen"],
      ["das Geld zum Fenster hinauswerfen", "Geld verschwenden", "to throw money down the drain", "jeter l'argent par les fenêtres", "Für so ein Gerät wirfst du das Geld zum Fenster hinaus.", "das Geld zum Fenster hinaus"],
      ["ein Schnäppchen machen", "etwas sehr günstig kaufen", "to get a bargain", "faire une bonne affaire", "Im Ausverkauf habe ich ein Schnäppchen gemacht.", "ein Schnäppchen"],
      ["auf großem Fuß leben", "luxuriös leben", "to live in grand style", "mener grand train", "Seit der Erbschaft lebt er auf großem Fuß.", "auf großem Fuß"],
      ["keinen Pfifferling wert sein", "nichts wert sein", "not to be worth a bean", "ne pas valoir un clou", "Diese Garantie ist keinen Pfifferling wert.", "keinen Pfifferling"],
      ["jeden Cent zweimal umdrehen", "sehr sparsam sein müssen", "to count every penny", "compter chaque centime", "Am Monatsende muss ich jeden Cent zweimal umdrehen.", "jeden Cent zweimal umdrehen"]
    ]
  };

  W.COURSE.push({ id: "b2-6", level: "B2", icon: "banknote", title: "The economy and consumers", title_fr: "Économie et consommation",
    intro: "Contracts, terms and conditions, online shopping: in this unit, you'll learn the conditions of formal German (sofern, es sei denn, Sollten Sie Fragen haben…), how to express contrast and concession (während, selbst wenn, so teuer es auch ist), and how to stand up for your rights as a customer in the EU. You'll also discover Stiftung Warentest, the foundation that has been testing products since 1964.",
    intro_fr: "Contrats, conditions générales, achats en ligne : dans cette unité, tu vas apprendre les conditions de l'allemand soutenu (sofern, es sei denn, Sollten Sie Fragen haben…), l'expression de l'opposition et de la concession (während, selbst wenn, so teuer es auch ist), et la façon de faire valoir tes droits de consommateur dans l'UE. Tu découvriras aussi la Stiftung Warentest, qui teste des produits depuis 1964.",
    can: ["Express conditions with falls, sofern, vorausgesetzt and es sei denn", "Use formal conditions without wenn (Sollten Sie…)", "Contrast two facts and express concession", "Know and claim your rights as a customer", "Write a forum opinion of about 150 words (Goethe B2)"],
    can_fr: ["Exprimer une condition avec falls, sofern, vorausgesetzt et es sei denn", "Employer des conditions formelles sans wenn (Sollten Sie…)", "Opposer deux faits et exprimer une concession", "Connaître et faire valoir tes droits de consommateur", "Écrire un avis d'environ 150 mots sur un forum (Goethe B2)"],
    lessons: [88, 89, 90], vocab: ["wirtschaftDE", "verbraucherrechteDE"], reading: "warentest", prompt: "de-b2-6",
    writing: { task: "In a forum about your town, someone writes: “Online shopping is destroying our town centres.” Give your opinion (150-180 words): refer to the claim, take a nuanced position, contrast the two sides, give an example and conclude with a condition.", task_fr: "Sur un forum consacré à ta ville, quelqu'un écrit : « Le commerce en ligne détruit nos centres-villes. » Donne ton avis (150 à 180 mots) : fais référence à l'affirmation, prends une position nuancée, oppose les deux côtés, donne un exemple et conclus avec une condition.", words: "150-180",
      tips: ["Die Behauptung, …, ist mir zu einfach.", "Während man online…, bietet der Laden…", "Ein Beispiel aus meiner Stadt: …", "Selbst wenn…", "…, sofern…"],
      checklist: ["I referred to the claim", "I took a nuanced position", "I contrasted the two sides (während, dagegen)", "I gave an example", "I wrote between 150 and 180 words"],
      checklist_fr: ["J'ai fait référence à l'affirmation", "J'ai pris une position nuancée", "J'ai opposé les deux côtés (während, dagegen)", "J'ai donné un exemple", "J'ai écrit entre 150 et 180 mots"],
      model: "Die Behauptung, der Online-Handel zerstöre unsere Innenstädte, ist mir zu einfach, auch wenn sie einen wahren Kern hat.\n\nWährend man online rund um die Uhr bestellen und Preise vergleichen kann, bietet der Laden vor Ort etwas, das kein Shop im Internet ersetzt: persönliche Beratung und die Möglichkeit, ein Produkt anzufassen. Viele kleine Geschäfte haben es trotzdem schwer, weil die Mieten in der Innenstadt hoch sind und die Kunden immer häufiger im Netz kaufen.\n\nEin Beispiel aus meiner Stadt: Die alte Buchhandlung am Marktplatz verkauft ihre Bücher inzwischen auch online und organisiert jeden Monat eine Lesung. Dadurch ist sie wieder ein Treffpunkt geworden.\n\nSelbst wenn wir nicht auf Online-Shopping verzichten wollen, können wir also etwas tun. Meiner Meinung nach haben die Innenstädte eine Zukunft, sofern sie mehr bieten als nur Geschäfte: Cafés, Kultur und Orte, an denen man sich gern aufhält. Und sofern wir als Kunden bewusst entscheiden, wo wir unser Geld ausgeben." } });
})();
