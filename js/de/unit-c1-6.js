/* Cours d'allemand, unité C1-6 « The economy and business / Économie et entreprise » : formuler des hypothèses
   (angenommen, gesetzt den Fall, unter der Voraussetzung, dass ; Konjunktiv II avec inversion et temps mêlés),
   décoder les mots composés de l'allemand économique (Fugen-s, abréviations), négocier. Personnages fictifs,
   prénoms allemands.
   Faits vérifiables seulement : réforme monétaire du 20 juin 1948 dans les zones occidentales, introduction du
   Deutsche Mark, 40 DM par personne comme premier « Kopfgeld » ; Ludwig Erhard supprime au même moment une grande
   partie du contrôle des prix ; les vitrines se remplissent ; la notion d'« économie sociale de marché » est
   associée à Alfred Müller-Armack ; Erhard est ministre de l'Économie de 1949 à 1963, puis chancelier de 1963 à
   1966 ; son livre « Wohlstand für Alle » paraît en 1957 ; « miracle économique » des années 1950 ; une GmbH
   exige un capital social de 25 000 euros, une UG (haftungsbeschränkt) peut être créée avec un euro. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "wirtschaftC1DE", icon: "trending-up", title: "Economy and markets", title_fr: "Économie et marchés", level: "C1", words: [
    ["die Konjunktur", "the economy, the economic situation", "la conjoncture", "Die Konjunktur hat sich abgekühlt."],
    ["der Aufschwung", "the upturn, the boom", "la reprise, l'essor", "Nach der Krise folgte ein kräftiger Aufschwung."],
    ["der Abschwung", "the downturn", "le ralentissement", "Ein Abschwung trifft vor allem kleine Betriebe."],
    ["die Kaufkraft", "purchasing power", "le pouvoir d'achat", "Die Inflation verringert die Kaufkraft."],
    ["der Wohlstand", "prosperity, affluence", "la prospérité", "Der Wohlstand ist ungleich verteilt."],
    ["das Bruttoinlandsprodukt (BIP)", "gross domestic product (GDP)", "le produit intérieur brut (PIB)", "Das Bruttoinlandsprodukt ist leicht gewachsen."],
    ["die Marktwirtschaft", "the market economy", "l'économie de marché", "Die soziale Marktwirtschaft verbindet Markt und sozialen Ausgleich."],
    ["die Planwirtschaft", "the planned economy", "l'économie planifiée", "In der DDR herrschte Planwirtschaft."],
    ["der Wettbewerb", "competition", "la concurrence", "Fairer Wettbewerb nützt den Verbrauchern."],
    ["die Staatsverschuldung", "public debt", "la dette publique", "Die Staatsverschuldung ist in der Krise gestiegen."],
    ["die Arbeitslosigkeit", "unemployment", "le chômage", "Die Arbeitslosigkeit ist regional sehr unterschiedlich."],
    ["die Vollbeschäftigung", "full employment", "le plein-emploi", "In manchen Regionen herrscht fast Vollbeschäftigung."],
    ["der Mittelstand", "small and medium-sized businesses", "les PME", "Der Mittelstand gilt als Rückgrat der deutschen Wirtschaft."],
    ["der Strukturwandel", "structural change", "la mutation économique", "Das Ruhrgebiet hat einen tiefen Strukturwandel erlebt."],
    ["die Insolvenz, -en", "insolvency, bankruptcy", "la faillite, l'insolvabilité", "Die Firma musste Insolvenz anmelden."],
    ["pleitegehen", "to go bust", "faire faillite", "Viele kleine Läden sind in der Krise pleitegegangen."]
  ] },
  { id: "verhandlungDE", icon: "handshake", title: "Negotiating", title_fr: "Négocier", level: "C1", words: [
    ["das Gegenangebot, -e", "the counter-offer", "la contre-proposition", "Wir machen Ihnen gern ein Gegenangebot."],
    ["das Zugeständnis, -se", "the concession", "la concession", "Ohne Zugeständnisse gibt es keine Einigung."],
    ["entgegenkommen (+ Dat.)", "to meet someone halfway, to accommodate", "faire un geste, se montrer conciliant", "Beim Preis können wir Ihnen etwas entgegenkommen."],
    ["der Mittelweg", "the middle course", "le juste milieu", "Lassen Sie uns einen Mittelweg finden."],
    ["die Verhandlungsbasis", "the basis for negotiation", "la base de négociation", "Der Preis ist Verhandlungsbasis."],
    ["die Bedingung, -en", "the condition", "la condition", "Unter diesen Bedingungen unterschreiben wir nicht."],
    ["nachgeben", "to give way, to yield", "céder", "Am Ende gab der Lieferant nach."],
    ["unterzeichnen", "to sign", "signer", "Der Vertrag wird morgen unterzeichnet."],
    ["der Vertragsentwurf, ¨-e", "the draft contract", "le projet de contrat", "Bitte prüfen Sie den Vertragsentwurf."],
    ["die Schmerzgrenze", "the limit, the pain threshold", "la limite à ne pas dépasser", "Mit diesem Preis ist unsere Schmerzgrenze erreicht."],
    ["beharren (auf + Dat.)", "to insist (on)", "insister (sur), camper (sur)", "Er beharrte auf seiner Forderung."],
    ["der Spielraum", "room for manoeuvre", "la marge de manœuvre", "Beim Liefertermin haben wir noch etwas Spielraum."],
    ["die Einigung, -en", "the agreement", "l'accord", "Nach langen Gesprächen kam es zu einer Einigung."],
    ["feilschen", "to haggle", "marchander", "Auf dem Flohmarkt wird gern gefeilscht."],
    ["die Konditionen (Pl.)", "the terms", "les conditions (commerciales)", "Die Konditionen sind fair."],
    ["der Verhandlungspartner, - (die Verhandlungspartnerin)", "the negotiating partner", "le ou la partenaire de négociation", "Respekt vor dem Verhandlungspartner zahlt sich aus."]
  ] });

  W.LESSONS.push(
  {
    id: 118, level: "C1", icon: "lightbulb",
    title: "Angenommen, die Firma ginge pleite: hypotheses", title_fr: "Angenommen, die Firma ginge pleite : formuler des hypothèses",
    subtitle: "Introduce a hypothesis, play through scenarios and mix past and present.", subtitle_fr: "Introduire une hypothèse, envisager des scénarios et mêler passé et présent.",
    body: `
<h2>Introducing a hypothesis</h2>
<table>
<tr><th>Expression</th><th>Example</th></tr>
<tr><td><s-de>angenommen, (dass)…</s-de></td><td><s-de>Angenommen, die Firma ginge pleite, was würde aus den Mitarbeitern?</s-de></td></tr>
<tr><td><s-de>gesetzt den Fall, (dass)…</s-de></td><td><s-de>Gesetzt den Fall, die Preise steigen weiter, müssen wir sparen.</s-de></td></tr>
<tr><td><s-de>im Fall(e), dass…</s-de></td><td><s-de>Im Falle, dass der Lieferant ausfällt, haben wir einen zweiten.</s-de></td></tr>
<tr><td><s-de>unter der Voraussetzung, dass…</s-de></td><td><s-de>Wir unterschreiben unter der Voraussetzung, dass der Preis bleibt.</s-de></td></tr>
<tr><td><s-de>mal angenommen…</s-de> (spoken)</td><td><s-de>Mal angenommen, du gewinnst im Lotto…</s-de></td></tr>
</table>
<p>With the indicative, the hypothesis is realistic; with the Konjunktiv II, it's imagined or unlikely.</p>
<h2>Without wenn, and with mixed times</h2>
<p><s-de>Wäre die Nachfrage höher, würden wir mehr produzieren.</s-de> A past condition can have a present consequence: <s-de>Hätten wir damals investiert, stünden wir heute besser da.</s-de> And the passive: <s-de>Die Firma wäre gerettet worden, wenn die Bank geholfen hätte.</s-de></p>
<div class="tip">In business meetings and exams, hypotheses let you explore options without committing yourself. <s-de>Gesetzt den Fall</s-de> and <s-de>unter der Voraussetzung, dass</s-de> are formal; in conversation, <s-de>mal angenommen</s-de> or simply <s-de>Was wäre, wenn…?</s-de> are more natural.</div>
`,
    body_fr: `
<h2>Introduire une hypothèse</h2>
<table>
<tr><th>Expression</th><th>Exemple</th></tr>
<tr><td><s-de>angenommen, (dass)…</s-de></td><td><s-de>Angenommen, die Firma ginge pleite, was würde aus den Mitarbeitern?</s-de></td></tr>
<tr><td><s-de>gesetzt den Fall, (dass)…</s-de></td><td><s-de>Gesetzt den Fall, die Preise steigen weiter, müssen wir sparen.</s-de></td></tr>
<tr><td><s-de>im Fall(e), dass…</s-de></td><td><s-de>Im Falle, dass der Lieferant ausfällt, haben wir einen zweiten.</s-de></td></tr>
<tr><td><s-de>unter der Voraussetzung, dass…</s-de></td><td><s-de>Wir unterschreiben unter der Voraussetzung, dass der Preis bleibt.</s-de></td></tr>
<tr><td><s-de>mal angenommen…</s-de> (oral)</td><td><s-de>Mal angenommen, du gewinnst im Lotto…</s-de></td></tr>
</table>
<p>Avec l'indicatif, l'hypothèse est réaliste ; avec le Konjunktiv II, elle est imaginaire ou peu probable.</p>
<h2>Sans wenn, et avec des temps mêlés</h2>
<p><s-de>Wäre die Nachfrage höher, würden wir mehr produzieren.</s-de> Une condition passée peut avoir une conséquence présente : <s-de>Hätten wir damals investiert, stünden wir heute besser da.</s-de> (Si nous avions investi à l'époque, nous serions mieux placés aujourd'hui.) Et au passif : <s-de>Die Firma wäre gerettet worden, wenn die Bank geholfen hätte.</s-de></p>
<div class="tip">En réunion comme à l'examen, les hypothèses permettent d'explorer des options sans s'engager. <s-de>Gesetzt den Fall</s-de> et <s-de>unter der Voraussetzung, dass</s-de> sont soutenus ; à l'oral, <s-de>mal angenommen</s-de> ou simplement <s-de>Was wäre, wenn…?</s-de> sont plus naturels.</div>
`,
    examples: [
      ["Angenommen, die Firma ginge pleite, was würde aus den Mitarbeitern?", "Supposing the company went bust, what would happen to the staff?", "Supposons que l'entreprise fasse faillite : que deviendraient les salariés ?"],
      ["Gesetzt den Fall, die Preise steigen weiter, müssen wir sparen.", "If prices keep rising, we'll have to save.", "Dans l'hypothèse où les prix continuent de monter, nous devrons économiser."],
      ["Im Falle, dass der Lieferant ausfällt, haben wir einen zweiten.", "In case the supplier drops out, we have a second one.", "Au cas où le fournisseur ferait défaut, nous en avons un deuxième."],
      ["Wir unterschreiben unter der Voraussetzung, dass der Preis gleich bleibt.", "We'll sign provided that the price stays the same.", "Nous signons à condition que le prix reste le même."],
      ["Wäre die Nachfrage höher, würden wir mehr produzieren.", "If demand were higher, we'd produce more.", "Si la demande était plus forte, nous produirions davantage."],
      ["Hätten wir damals investiert, stünden wir heute besser da.", "If we'd invested back then, we'd be in a better position today.", "Si nous avions investi à l'époque, nous serions mieux placés aujourd'hui."],
      ["Die Firma wäre gerettet worden, wenn die Bank geholfen hätte.", "The company would have been saved if the bank had helped.", "L'entreprise aurait été sauvée si la banque l'avait aidée."]
    ],
    quiz: [
      { q: "An unlikely, imagined hypothesis:", q_fr: "Une hypothèse imaginaire, peu probable :", o: ["Angenommen, die Firma ginge pleite, …", "Angenommen, die Firma geht morgen in Urlaub, …", "Die Firma geht pleite."], a: 0, ex: "Konjunktiv II (ginge) = imagined.", ex_fr: "Konjunktiv II (ginge) = imaginaire." },
      { q: "___ die Nachfrage höher, würden wir mehr produzieren.", q_fr: "___ die Nachfrage höher, würden wir mehr produzieren.", o: ["Wäre", "Ist", "Würde"], a: 0, ex: "Condition without wenn: verb first.", ex_fr: "Condition sans wenn : verbe en tête." },
      { q: "“If we'd invested then, we'd be better off now.”", q_fr: "« Si nous avions investi à l'époque, nous serions mieux placés aujourd'hui. »", o: ["Hätten wir damals investiert, stünden wir heute besser da.", "Hätten wir damals investiert, hätten wir heute besser dagestanden.", "Würden wir damals investieren, stünden wir heute besser da."], a: 0, ex: "Past condition, present consequence.", ex_fr: "Condition passée, conséquence présente." },
      { q: "“provided that…” (formal)", q_fr: "« à condition que… » (soutenu)", o: ["unter der Voraussetzung, dass…", "unter dem Fall, dass…", "gesetzt, dass ob…"], a: 0, ex: "unter der Voraussetzung, dass…", ex_fr: "unter der Voraussetzung, dass…" },
      { q: "“The company would have been saved.”", q_fr: "« L'entreprise aurait été sauvée. »", o: ["Die Firma wäre gerettet worden.", "Die Firma hätte gerettet worden.", "Die Firma würde gerettet geworden."], a: 0, ex: "Passive Konjunktiv II past: wäre … worden.", ex_fr: "Passif au Konjunktiv II passé : wäre … worden." }
    ]
  },
  {
    id: 119, level: "C1", icon: "layers",
    title: "Wirtschaftswachstumsprognose: decoding compounds", title_fr: "Wirtschaftswachstumsprognose : décoder les mots composés",
    subtitle: "Read long compounds from the end, recognise linking letters and common abbreviations.", subtitle_fr: "Lire les longs mots composés en partant de la fin, reconnaître les éléments de liaison et les abréviations courantes.",
    body: `
<h2>Read from the end</h2>
<p>The <b>last part</b> is the core of the compound and gives its gender: <s-de>die Wirtschaftswachstumsprognose</s-de> = <s-de>die Prognose</s-de> (forecast) of the <s-de>Wachstum</s-de> (growth) of the <s-de>Wirtschaft</s-de> (economy). Read it backwards: a forecast of the growth of the economy.</p>
<h2>Linking letters</h2>
<table>
<tr><th>Link</th><th>Examples</th></tr>
<tr><td><s-de>-s-</s-de></td><td><s-de>Arbeitsmarkt, Wirtschaftswachstum</s-de>; always after <s-de>-ung, -heit, -keit, -schaft, -tion</s-de>: <s-de>Rechnungsbetrag, Sicherheitsrisiko</s-de></td></tr>
<tr><td><s-de>-(e)n-</s-de></td><td><s-de>Sonnenenergie, Kundenservice</s-de></td></tr>
<tr><td><s-de>-er-</s-de></td><td><s-de>Kinderbetreuung</s-de></td></tr>
<tr><td>none</td><td><s-de>Hausaufgabe, Steuerberater</s-de></td></tr>
</table>
<h2>Abbreviations you'll meet</h2>
<p><s-de>BIP</s-de> (GDP), <s-de>GmbH</s-de> (limited company), <s-de>AG</s-de> (public limited company), <s-de>Azubi</s-de> (trainee, from <s-de>Auszubildende</s-de>), <s-de>Kita</s-de> (day nursery), <s-de>Kfz</s-de> (motor vehicle), <s-de>z. B., d. h., usw.</s-de></p>
<div class="tip">Very long compounds are typical of laws and administration. If you write one yourself, a hyphen can help the reader: <s-de>Mehrgenerationen-Wohnprojekt</s-de>. And never split a compound into separate words: <s-de>die Arbeitsmarkt Politik</s-de> is wrong.</div>
`,
    body_fr: `
<h2>Lire en partant de la fin</h2>
<p>La <b>dernière partie</b> est le cœur du mot composé et lui donne son genre : <s-de>die Wirtschaftswachstumsprognose</s-de> = <s-de>die Prognose</s-de> (prévision) de la <s-de>Wachstum</s-de> (croissance) de la <s-de>Wirtschaft</s-de> (économie). Lis-le à l'envers : une prévision de la croissance de l'économie. Le français fait l'inverse : il commence par le noyau.</p>
<h2>Les éléments de liaison</h2>
<table>
<tr><th>Liaison</th><th>Exemples</th></tr>
<tr><td><s-de>-s-</s-de></td><td><s-de>Arbeitsmarkt, Wirtschaftswachstum</s-de> ; toujours après <s-de>-ung, -heit, -keit, -schaft, -tion</s-de> : <s-de>Rechnungsbetrag, Sicherheitsrisiko</s-de></td></tr>
<tr><td><s-de>-(e)n-</s-de></td><td><s-de>Sonnenenergie, Kundenservice</s-de></td></tr>
<tr><td><s-de>-er-</s-de></td><td><s-de>Kinderbetreuung</s-de></td></tr>
<tr><td>aucune</td><td><s-de>Hausaufgabe, Steuerberater</s-de></td></tr>
</table>
<h2>Les abréviations courantes</h2>
<p><s-de>BIP</s-de> (PIB), <s-de>GmbH</s-de> (SARL), <s-de>AG</s-de> (SA), <s-de>Azubi</s-de> (apprenti, de <s-de>Auszubildende</s-de>), <s-de>Kita</s-de> (crèche), <s-de>Kfz</s-de> (véhicule à moteur), <s-de>z. B., d. h., usw.</s-de></p>
<div class="tip">Les très longs mots composés sont typiques des lois et de l'administration. Si tu en écris un toi-même, un trait d'union peut aider le lecteur : <s-de>Mehrgenerationen-Wohnprojekt</s-de>. Et ne coupe jamais un mot composé en mots séparés : <s-de>die Arbeitsmarkt Politik</s-de> est faux.</div>
`,
    examples: [
      ["Die Wirtschaftswachstumsprognose wurde nach unten korrigiert.", "The economic growth forecast was revised downwards.", "La prévision de croissance économique a été revue à la baisse."],
      ["Die Lage auf dem Arbeitsmarkt hat sich entspannt.", "The situation on the job market has eased.", "La situation sur le marché du travail s'est détendue."],
      ["Der Rechnungsbetrag ist innerhalb von 14 Tagen fällig.", "The invoice amount is due within 14 days.", "Le montant de la facture est payable sous 14 jours."],
      ["Die Firma ist eine GmbH mit zwölf Angestellten.", "The company is a limited company with twelve employees.", "L'entreprise est une SARL de douze salariés."],
      ["Unsere Azubis lernen drei Jahre lang im Betrieb und in der Berufsschule.", "Our trainees learn for three years at the company and at vocational school.", "Nos apprentis se forment pendant trois ans en entreprise et au centre de formation."],
      ["Ein fehlendes Update kann ein Sicherheitsrisiko sein.", "A missing update can be a security risk.", "Une mise à jour manquante peut constituer un risque de sécurité."],
      ["Das Bruttoinlandsprodukt, kurz BIP, ist im zweiten Quartal gestiegen.", "Gross domestic product, GDP for short, rose in the second quarter.", "Le produit intérieur brut, ou PIB, a progressé au deuxième trimestre."]
    ],
    quiz: [
      { q: "What is the gender of “Wirtschaftswachstumsprognose”?", q_fr: "Quel est le genre de « Wirtschaftswachstumsprognose » ?", o: ["die (from die Prognose)", "das (from das Wachstum)", "die (from die Wirtschaft) only by chance"], o_fr: ["die (de die Prognose)", "das (de das Wachstum)", "die (de die Wirtschaft), par hasard"], a: 0, ex: "The last part decides: die Prognose.", ex_fr: "C'est la dernière partie qui décide : die Prognose." },
      { q: "Rechnung + Betrag =", q_fr: "Rechnung + Betrag =", o: ["Rechnungsbetrag", "Rechnungbetrag", "Rechnungenbetrag"], a: 0, ex: "After -ung: always -s-.", ex_fr: "Après -ung : toujours -s-." },
      { q: "“Azubi” is short for…", q_fr: "« Azubi » est l'abréviation de…", o: ["Auszubildende (trainee)", "Autobus", "Arbeitszeit"], o_fr: ["Auszubildende (apprenti)", "Autobus", "Arbeitszeit"], a: 0, ex: "Azubi = Auszubildende(r).", ex_fr: "Azubi = Auszubildende(r)." },
      { q: "Which spelling is correct?", q_fr: "Quelle orthographe est correcte ?", o: ["die Arbeitsmarktpolitik", "die Arbeitsmarkt Politik", "die Arbeits Markt Politik"], a: 0, ex: "Compounds are written as one word.", ex_fr: "Les mots composés s'écrivent en un seul mot." },
      { q: "“BIP” means…", q_fr: "« BIP » signifie…", o: ["Bruttoinlandsprodukt (GDP)", "Bundesinstitut für Politik", "Betriebsinterne Planung"], o_fr: ["Bruttoinlandsprodukt (PIB)", "Bundesinstitut für Politik", "Betriebsinterne Planung"], a: 0, ex: "BIP = GDP.", ex_fr: "BIP = PIB." }
    ]
  },
  {
    id: 120, level: "C1", kind: "functional", icon: "handshake",
    title: "Everyday German: negotiating", title_fr: "L'allemand de tous les jours : négocier",
    subtitle: "Make an offer, react, concede and reach an agreement.", subtitle_fr: "Faire une offre, réagir, concéder et parvenir à un accord.",
    body: `
<h2>Phrases for a negotiation</h2>
<table>
<tr><th>To…</th><th>German</th></tr>
<tr><td>make an offer</td><td><s-de>Wir könnten Ihnen … anbieten.</s-de> · <s-de>Unser Angebot lautet…</s-de></td></tr>
<tr><td>react</td><td><s-de>Das liegt leider über unserem Budget.</s-de> · <s-de>Damit können wir uns nicht einverstanden erklären.</s-de></td></tr>
<tr><td>make a counter-offer</td><td><s-de>Wir schlagen stattdessen … vor.</s-de> · <s-de>Was halten Sie von…?</s-de></td></tr>
<tr><td>concede, with a condition</td><td><s-de>Wir kämen Ihnen beim Preis entgegen, wenn Sie…</s-de> · <s-de>Unter der Voraussetzung, dass…, wären wir bereit…</s-de></td></tr>
<tr><td>set a limit</td><td><s-de>Das ist unser letztes Angebot.</s-de> · <s-de>Weiter können wir nicht gehen.</s-de></td></tr>
<tr><td>agree</td><td><s-de>Dann sind wir uns einig.</s-de> · <s-de>Ich schicke Ihnen den Vertragsentwurf bis Freitag.</s-de></td></tr>
</table>
<div class="tip">The Konjunktiv II (<s-de>könnten, wären, kämen</s-de>) keeps offers flexible: you suggest without committing. Link every concession to something in return (<s-de>wenn…, unter der Voraussetzung, dass…</s-de>): that's what professional negotiators do in any language.</div>
`,
    body_fr: `
<h2>Les formules de la négociation</h2>
<table>
<tr><th>Pour…</th><th>En allemand</th></tr>
<tr><td>faire une offre</td><td><s-de>Wir könnten Ihnen … anbieten.</s-de> · <s-de>Unser Angebot lautet…</s-de></td></tr>
<tr><td>réagir</td><td><s-de>Das liegt leider über unserem Budget.</s-de> · <s-de>Damit können wir uns nicht einverstanden erklären.</s-de></td></tr>
<tr><td>faire une contre-proposition</td><td><s-de>Wir schlagen stattdessen … vor.</s-de> · <s-de>Was halten Sie von…?</s-de></td></tr>
<tr><td>concéder, sous condition</td><td><s-de>Wir kämen Ihnen beim Preis entgegen, wenn Sie…</s-de> · <s-de>Unter der Voraussetzung, dass…, wären wir bereit…</s-de></td></tr>
<tr><td>fixer une limite</td><td><s-de>Das ist unser letztes Angebot.</s-de> · <s-de>Weiter können wir nicht gehen.</s-de></td></tr>
<tr><td>conclure</td><td><s-de>Dann sind wir uns einig.</s-de> · <s-de>Ich schicke Ihnen den Vertragsentwurf bis Freitag.</s-de></td></tr>
</table>
<div class="tip">Le Konjunktiv II (<s-de>könnten, wären, kämen</s-de>) garde les offres souples : on propose sans s'engager. Lie chaque concession à une contrepartie (<s-de>wenn…, unter der Voraussetzung, dass…</s-de>) : c'est ce que font les négociateurs professionnels, dans toutes les langues.</div>
`,
    examples: [
      ["Wir könnten Ihnen einen Rabatt von fünf Prozent anbieten.", "We could offer you a five per cent discount.", "Nous pourrions vous accorder une remise de cinq pour cent."],
      ["Das liegt leider über unserem Budget.", "Unfortunately that's above our budget.", "Cela dépasse malheureusement notre budget."],
      ["Was halten Sie von einer längeren Vertragslaufzeit?", "What do you think of a longer contract term?", "Que diriez-vous d'un contrat de plus longue durée ?"],
      ["Wir kämen Ihnen beim Preis entgegen, wenn Sie die doppelte Menge bestellen.", "We'd meet you halfway on the price if you ordered twice the quantity.", "Nous ferions un geste sur le prix si vous commandiez le double."],
      ["Unter der Voraussetzung, dass Sie pünktlich zahlen, wären wir bereit, schneller zu liefern.", "Provided that you pay on time, we'd be willing to deliver faster.", "À condition que vous payiez dans les délais, nous serions prêts à livrer plus vite."],
      ["Das ist unser letztes Angebot. Weiter können wir nicht gehen.", "That's our final offer. We can't go any further.", "C'est notre dernière offre. Nous ne pouvons pas aller plus loin."],
      ["Dann sind wir uns einig. Ich schicke Ihnen den Vertragsentwurf bis Freitag.", "Then we're agreed. I'll send you the draft contract by Friday.", "Nous sommes donc d'accord. Je vous envoie le projet de contrat d'ici vendredi."]
    ],
    quiz: [
      { q: "A flexible, non-committal offer:", q_fr: "Une offre souple, qui n'engage pas :", o: ["Wir könnten Ihnen fünf Prozent anbieten.", "Wir bieten fünf Prozent, sonst nichts!", "Fünf Prozent oder gar nichts."], a: 0, ex: "Konjunktiv II keeps it flexible.", ex_fr: "Le Konjunktiv II garde l'offre souple." },
      { q: "“That's above our budget.”", q_fr: "« Cela dépasse notre budget. »", o: ["Das liegt über unserem Budget.", "Das liegt auf unserem Budget.", "Das geht über unser Budget hinaus über."], a: 0, ex: "über + dative (where).", ex_fr: "über + datif (où)." },
      { q: "A concession linked to a condition:", q_fr: "Une concession liée à une condition :", o: ["Wir kämen Ihnen entgegen, wenn Sie mehr bestellen.", "Wir kommen Ihnen einfach so entgegen.", "Wir geben sofort nach."], a: 0, ex: "Always ask for something in return.", ex_fr: "Toujours demander une contrepartie." },
      { q: "“Then we're agreed.”", q_fr: "« Nous sommes donc d'accord. »", o: ["Dann sind wir uns einig.", "Dann sind wir einig uns.", "Dann haben wir uns einig."], a: 0, ex: "sich einig sein.", ex_fr: "sich einig sein." },
      { q: "“We can't go any further.”", q_fr: "« Nous ne pouvons pas aller plus loin. »", o: ["Weiter können wir nicht gehen.", "Weiter können wir nicht kommen gehen.", "Mehr weiter gehen wir nicht können."], a: 0, ex: "Weiter können wir nicht gehen.", ex_fr: "Weiter können wir nicht gehen." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    118: {
      gap: [["___, die Firma ginge pleite, was würde aus den Mitarbeitern?", "Angenommen", "supposing", "supposons que"], ["___ die Nachfrage höher, würden wir mehr produzieren.", "Wäre"], ["Hätten wir damals investiert, ___ wir heute besser da.", "stünden|ständen"], ["Die Firma wäre gerettet ___, wenn die Bank geholfen hätte.", "worden"]],
      fix: [["Hätten wir investiert, wir stünden heute besser da.", "Hätten wir investiert, stünden wir heute besser da.", "After the condition, the main verb comes first.", "Après la condition, le verbe principal vient en premier."], ["Die Firma hätte gerettet worden.", "Die Firma wäre gerettet worden.", "Passive: wäre … worden.", "Passif : wäre … worden."]],
      task: ["Your small company faces rising costs. Write four hypotheses with angenommen, gesetzt den Fall, unter der Voraussetzung, dass, and a mixed-time Konjunktiv II.", "Ta petite entreprise fait face à la hausse des coûts. Écris quatre hypothèses avec angenommen, gesetzt den Fall, unter der Voraussetzung, dass, et un Konjunktiv II à temps mêlés.", "Angenommen, die Energiepreise stiegen weiter, müssten wir die Preise erhöhen. Gesetzt den Fall, ein großer Kunde springt ab, hätten wir ein ernstes Problem. Wir könnten expandieren, unter der Voraussetzung, dass die Bank uns einen Kredit gibt. Hätten wir früher in Solaranlagen investiert, wären unsere Kosten heute niedriger."]
    },
    119: {
      gap: [["die Wirtschafts___prognose (das Wachstum)", "wachstums"], ["der Rechnung___betrag", "s"], ["die Sonne___energie", "n"], ["die Kind___betreuung", "er"]],
      fix: [["die Arbeitsmarkt Politik", "die Arbeitsmarktpolitik", "Compounds are written as one word.", "Les mots composés s'écrivent en un seul mot."], ["das Wirtschaftswachstumsprognose", "die Wirtschaftswachstumsprognose", "The last part decides the gender: die Prognose.", "La dernière partie décide du genre : die Prognose."]],
      task: ["Decode these compounds into explanatory phrases: Arbeitsmarktpolitik, Sicherheitsrisiko, Kinderbetreuungskosten, Vertragslaufzeit.", "Décode ces mots composés en groupes explicatifs : Arbeitsmarktpolitik, Sicherheitsrisiko, Kinderbetreuungskosten, Vertragslaufzeit.", "die Politik für den Arbeitsmarkt; ein Risiko für die Sicherheit; die Kosten für die Betreuung von Kindern; die Laufzeit (Dauer) eines Vertrags"]
    },
    120: {
      gap: [["Wir ___ Ihnen einen Rabatt von fünf Prozent anbieten.", "könnten"], ["Das liegt leider über unserem ___.", "Budget"], ["Wir kämen Ihnen beim Preis ___, wenn Sie mehr bestellen.", "entgegen", "meet you halfway", "faire un geste"], ["Dann sind wir uns ___.", "einig"]],
      fix: [["Wir kommen Ihnen beim Preis entgegen kommen, wenn Sie mehr bestellen.", "Wir kämen Ihnen beim Preis entgegen, wenn Sie mehr bestellen.", "Separable verb, once: kämen … entgegen.", "Verbe séparable, une seule fois : kämen … entgegen."], ["Dann haben wir uns einig.", "Dann sind wir uns einig.", "sich einig sein (with sein).", "sich einig sein (avec sein)."]],
      task: ["You're buying 500 chairs for a conference centre. The supplier asks 80 euros per chair; your budget is 70. Write four sentences: react, make a counter-offer, concede something with a condition, and agree.", "Tu achètes 500 chaises pour un centre de conférences. Le fournisseur demande 80 euros la chaise ; ton budget est de 70. Écris quatre phrases : réagis, fais une contre-proposition, concède quelque chose sous condition, et conclus.", "80 Euro pro Stuhl liegen leider über unserem Budget. Wir schlagen stattdessen 70 Euro vor. Unter der Voraussetzung, dass Sie bis Ende Mai liefern, wären wir bereit, 74 Euro zu zahlen. Dann sind wir uns einig: Ich schicke Ihnen die Bestellung noch heute."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "krisensitzung", lesson: 118, level: "C1", icon: "lightbulb", partner: "Herr Haas", role: "the owner of a joinery", role_fr: "le patron d'une menuiserie",
    title: "Thinking through scenarios", title_fr: "Envisager des scénarios",
    setting: "You work for a small joinery whose owner, Herr Haas, is worried about rising wood prices. You think through possible scenarios with him.", setting_fr: "Tu travailles dans une petite menuiserie dont le patron, Herr Haas, s'inquiète de la hausse du prix du bois. Tu envisages avec lui différents scénarios.",
    turns: [
      { p: "Die Holzpreise sind schon wieder gestiegen. Was machen wir, wenn das so weitergeht?", en: "Wood prices have gone up again. What do we do if this carries on?", fr: "Le prix du bois a encore augmenté. Qu'est-ce qu'on fait si ça continue ?" },
      { y: ["Gesetzt den Fall, die Preise steigen weiter, müssten wir unsere Preise anpassen.", "Gesetzt den Fall, die Preise steigen weiter, wir müssten unsere Preise anpassen.", "Gesetzt der Fall, die Preise steigen weiter, müssten wir unsere Preise anpassen."], en: "If prices keep rising, we'd have to adjust our prices.", fr: "Dans l'hypothèse où les prix continuent de monter, nous devrions ajuster nos tarifs.", why: "Gesetzt den Fall, … then the main verb first.", why_fr: "Gesetzt den Fall, … puis le verbe principal en premier." },
      { p: "Aber dann verlieren wir vielleicht Kunden.", en: "But then we might lose customers.", fr: "Mais alors on risque de perdre des clients." },
      { y: ["Angenommen, wir verlören einige Kunden, könnten wir uns stärker auf Reparaturen konzentrieren.", "Angenommen, wir würden einige Kunden verlören, könnten wir uns stärker auf Reparaturen konzentrieren.", "Angenommen, wir verlören einige Kunden, wir könnten uns stärker auf Reparaturen konzentrieren."], en: "Supposing we lost some customers, we could focus more on repairs.", fr: "À supposer que nous perdions quelques clients, nous pourrions davantage nous concentrer sur les réparations.", why: "angenommen + Konjunktiv II (verlören); then the verb first.", why_fr: "angenommen + Konjunktiv II (verlören) ; puis le verbe en premier." },
      { p: "Reparaturen? Damit verdient man doch kaum etwas.", en: "Repairs? You hardly earn anything with those.", fr: "Des réparations ? Ça ne rapporte presque rien." },
      { y: ["Das kommt darauf an. Hätten wir früher eine Werbekampagne gemacht, wären wir heute bekannter.", "Das kommt darauf an. Hätten wir früher eine Werbekampagne gemacht, wir wären heute bekannter.", "Das kommt darauf an. Würden wir früher eine Werbekampagne gemacht, wären wir heute bekannter."], en: "That depends. If we'd done an advertising campaign earlier, we'd be better known today.", fr: "Ça dépend. Si nous avions fait une campagne publicitaire plus tôt, nous serions plus connus aujourd'hui.", why: "Past condition (hätten … gemacht), present consequence (wären).", why_fr: "Condition passée (hätten … gemacht), conséquence présente (wären)." },
      { p: "Hm. Und wenn die Bank uns keinen Kredit gibt?", en: "Hm. And if the bank won't give us a loan?", fr: "Hum. Et si la banque ne nous accorde pas de crédit ?" },
      { y: ["Wir könnten auch Fördermittel beantragen, unter der Voraussetzung, dass wir in Energiesparen investieren.", "Wir könnten auch Fördermittel beantragen, unter der Voraussetzung, dass wir investieren in Energiesparen.", "Wir könnten auch Fördermittel beantragen, unter dem Fall, dass wir in Energiesparen investieren."], en: "We could also apply for funding, provided that we invest in energy saving.", fr: "Nous pourrions aussi demander des aides, à condition d'investir dans les économies d'énergie.", why: "unter der Voraussetzung, dass: verb at the end.", why_fr: "unter der Voraussetzung, dass : verbe à la fin." },
      { p: "Gute Idee. Bereiten Sie das doch mal vor.", en: "Good idea. Why don't you prepare that?", fr: "Bonne idée. Préparez-moi donc ça." },
      { y: ["Gern. Wäre die Antwort positiv, könnten wir schon im Frühjahr anfangen.", "Gern. Wäre die Antwort positiv, wir könnten schon im Frühjahr anfangen.", "Gern. Würde die Antwort positiv, könnten wir schon im Frühjahr anfangen."], en: "Gladly. If the answer were positive, we could start as early as spring.", fr: "Volontiers. Si la réponse était positive, nous pourrions commencer dès le printemps.", why: "Condition without wenn: verb first, twice.", why_fr: "Condition sans wenn : verbe en tête, deux fois." }
    ] },
  { id: "preisverhandlung", lesson: 120, level: "C1", icon: "handshake", partner: "Frau Neubauer", role: "a supplier", role_fr: "une fournisseuse",
    title: "Negotiating a price", title_fr: "Négocier un prix",
    setting: "You're buying 500 chairs for a conference centre. Frau Neubauer, from a furniture manufacturer, makes you an offer.", setting_fr: "Tu achètes 500 chaises pour un centre de conférences. Frau Neubauer, d'un fabricant de meubles, te fait une offre.",
    turns: [
      { p: "Unser Angebot lautet 80 Euro pro Stuhl, Lieferung in acht Wochen.", en: "Our offer is 80 euros per chair, delivery in eight weeks.", fr: "Notre offre est de 80 euros la chaise, livraison sous huit semaines." },
      { y: ["Vielen Dank. Das liegt leider deutlich über unserem Budget.", "Vielen Dank. Das liegt leider deutlich über unser Budget.", "Vielen Dank. Das leider liegt deutlich über unserem Budget."], en: "Thank you. Unfortunately that's well above our budget.", fr: "Merci. Cela dépasse malheureusement largement notre budget.", why: "über + dative (where): über unserem Budget.", why_fr: "über + datif (où) : über unserem Budget." },
      { p: "Was hatten Sie sich denn vorgestellt?", en: "What did you have in mind, then?", fr: "Qu'aviez-vous en tête, alors ?" },
      { y: ["Wir schlagen stattdessen 70 Euro vor, bei einer Abnahme von 500 Stück.", "Wir schlagen stattdessen 70 Euro vor schlagen, bei einer Abnahme von 500 Stück.", "Wir vorschlagen stattdessen 70 Euro, bei einer Abnahme von 500 Stück."], en: "We suggest 70 euros instead, for an order of 500.", fr: "Nous proposons plutôt 70 euros, pour une commande de 500 pièces.", why: "Separable: schlagen … vor.", why_fr: "Séparable : schlagen … vor." },
      { p: "70 Euro? Damit decken wir kaum unsere Kosten.", en: "70 euros? That barely covers our costs.", fr: "70 euros ? Ça couvre à peine nos coûts." },
      { y: ["Wir kämen Ihnen entgegen, wenn Sie früher liefern könnten. Was halten Sie von 74 Euro bei Lieferung in fünf Wochen?", "Wir kämen Ihnen entgegen, wenn Sie früher liefern könnten. Was halten Sie über 74 Euro bei Lieferung in fünf Wochen?", "Wir kommen Ihnen entgegen kämen, wenn Sie früher liefern könnten. Was halten Sie von 74 Euro bei Lieferung in fünf Wochen?"], en: "We'd meet you halfway if you could deliver earlier. What do you think of 74 euros with delivery in five weeks?", fr: "Nous ferions un geste si vous pouviez livrer plus tôt. Que diriez-vous de 74 euros avec une livraison sous cinq semaines ?", why: "Konjunktiv II kämen; halten von (what do you think of).", why_fr: "Konjunktiv II kämen ; halten von (penser de)." },
      { p: "Fünf Wochen sind sportlich. Unter 76 Euro geht es dann aber nicht.", en: "Five weeks is ambitious. But then we can't go below 76 euros.", fr: "Cinq semaines, c'est ambitieux. Mais alors on ne peut pas descendre sous 76 euros." },
      { y: ["Unter der Voraussetzung, dass die Lieferung kostenlos ist, wären wir mit 75 Euro einverstanden. Weiter können wir nicht gehen.", "Unter der Voraussetzung, dass die Lieferung ist kostenlos, wären wir mit 75 Euro einverstanden. Weiter können wir nicht gehen.", "Unter der Voraussetzung, dass die Lieferung kostenlos ist, wir wären mit 75 Euro einverstanden. Weiter können wir nicht gehen."], en: "Provided that delivery is free, we'd agree to 75 euros. We can't go any further.", fr: "À condition que la livraison soit gratuite, nous serions d'accord pour 75 euros. Nous ne pouvons pas aller plus loin.", why: "dass: verb at the end; then the main verb first.", why_fr: "dass : verbe à la fin ; puis le verbe principal en premier." },
      { p: "Einverstanden. 75 Euro, Lieferung frei Haus in fünf Wochen.", en: "Agreed. 75 euros, free delivery in five weeks.", fr: "D'accord. 75 euros, livraison gratuite sous cinq semaines." },
      { y: ["Dann sind wir uns einig. Ich schicke Ihnen den Vertragsentwurf bis Freitag.", "Dann haben wir uns einig. Ich schicke Ihnen den Vertragsentwurf bis Freitag.", "Dann sind wir uns einig. Ich schicke Sie den Vertragsentwurf bis Freitag."], en: "Then we're agreed. I'll send you the draft contract by Friday.", fr: "Nous sommes donc d'accord. Je vous envoie le projet de contrat d'ici vendredi.", why: "sich einig sein; schicken + dative (Ihnen).", why_fr: "sich einig sein ; schicken + datif (Ihnen)." }
    ] }
  );

  W.READINGS.push({
    id: "waehrungsreform", level: "C1", icon: "book-open", title: "Über Nacht volle Schaufenster: die Währungsreform von 1948", genre: "History",
    intro: "On 20 June 1948, West Germans received a new currency, and almost overnight the shops filled up. The beginning of the “economic miracle”, and of a disputed myth.",
    intro_fr: "Le 20 juin 1948, les Allemands de l'Ouest reçoivent une nouvelle monnaie, et presque du jour au lendemain les magasins se remplissent. Le début du « miracle économique », et d'un mythe discuté.",
    paragraphs: [
      { de: "Nach dem Zweiten Weltkrieg war die Reichsmark kaum noch etwas wert. Viele Waren gab es nur auf dem Schwarzmarkt, wo Zigaretten als Ersatzwährung dienten. Am 20. Juni 1948 wurde in den drei westlichen Besatzungszonen die Deutsche Mark eingeführt. Jeder Einwohner erhielt zunächst 40 D-Mark als sogenanntes Kopfgeld.", en: "After the Second World War, the Reichsmark was worth almost nothing. Many goods were only available on the black market, where cigarettes served as a substitute currency. On 20 June 1948, the Deutsche Mark was introduced in the three western occupation zones. Every resident initially received 40 marks as so-called per-capita money.", fr: "Après la Seconde Guerre mondiale, le Reichsmark ne vaut presque plus rien. Beaucoup de marchandises ne s'obtiennent qu'au marché noir, où les cigarettes servent de monnaie de remplacement. Le 20 juin 1948, le Deutsche Mark est introduit dans les trois zones d'occupation occidentales. Chaque habitant reçoit d'abord 40 marks, le « Kopfgeld »." },
      { de: "Fast gleichzeitig hob Ludwig Erhard, damals Direktor der Verwaltung für Wirtschaft, einen großen Teil der staatlichen Preiskontrollen auf. Die Wirkung war spektakulär: Plötzlich waren die Schaufenster voller Waren, die Händler offenbar zurückgehalten hatten. Hätten die Menschen nicht schon am nächsten Tag einkaufen können, wäre das Vertrauen in die neue Währung vermutlich nicht so schnell gewachsen.", en: "Almost at the same time, Ludwig Erhard, then director of economic administration, lifted a large part of state price controls. The effect was spectacular: suddenly the shop windows were full of goods that traders had apparently been holding back. Had people not been able to shop the very next day, confidence in the new currency would probably not have grown so quickly.", fr: "Presque au même moment, Ludwig Erhard, alors directeur de l'administration économique, supprime une grande partie du contrôle des prix. L'effet est spectaculaire : soudain, les vitrines débordent de marchandises que les commerçants avaient visiblement retenues. Si les gens n'avaient pas pu faire leurs achats dès le lendemain, la confiance dans la nouvelle monnaie n'aurait sans doute pas grandi aussi vite." },
      { de: "Erhard verband sein Programm mit dem Begriff „soziale Marktwirtschaft“, den vor allem der Ökonom Alfred Müller-Armack geprägt hatte: freier Wettbewerb, aber mit sozialem Ausgleich durch den Staat. Von 1949 bis 1963 war Erhard Wirtschaftsminister, danach bis 1966 Bundeskanzler. 1957 erschien sein Buch „Wohlstand für Alle“, dessen Titel zum Schlagwort einer ganzen Epoche wurde.", en: "Erhard linked his programme to the term “social market economy”, coined above all by the economist Alfred Müller-Armack: free competition, but with social balance provided by the state. From 1949 to 1963 Erhard was economics minister, then federal chancellor until 1966. In 1957 his book “Prosperity for All” appeared, whose title became the slogan of an entire era.", fr: "Erhard associe son programme à la notion d'« économie sociale de marché », forgée surtout par l'économiste Alfred Müller-Armack : libre concurrence, mais avec un équilibre social assuré par l'État. De 1949 à 1963, Erhard est ministre de l'Économie, puis chancelier fédéral jusqu'en 1966. En 1957 paraît son livre « Wohlstand für Alle » (La prospérité pour tous), dont le titre devient le slogan de toute une époque." },
      { de: "Das sogenannte Wirtschaftswunder der Fünfzigerjahre wird oft allein Erhard zugeschrieben. Historiker relativieren das allerdings: Zum Aufschwung trugen auch die Hilfe des Marshallplans, eine große Nachfrage nach dem Wiederaufbau und Millionen gut ausgebildeter Arbeitskräfte bei. Angenommen, einer dieser Faktoren hätte gefehlt, wäre der Aufschwung wohl deutlich schwächer ausgefallen.", en: "The so-called economic miracle of the 1950s is often credited to Erhard alone. Historians, however, put this into perspective: Marshall Plan aid, strong demand for reconstruction and millions of well-trained workers also contributed to the boom. Supposing one of these factors had been missing, the upturn would probably have been much weaker.", fr: "On attribue souvent le « miracle économique » des années 1950 au seul Erhard. Les historiens relativisent toutefois : l'aide du plan Marshall, une forte demande liée à la reconstruction et des millions de travailleurs bien formés ont aussi contribué à l'essor. Si l'un de ces facteurs avait manqué, la reprise aurait sans doute été nettement plus faible." }
    ],
    glossary: { "Weltkrieg": ["world war", "guerre mondiale"], "Reichsmark": ["Reichsmark (former currency)", "Reichsmark (ancienne monnaie)"], "Schwarzmarkt": ["black market", "marché noir"], "Ersatzwährung": ["substitute currency", "monnaie de remplacement"], "dienten": ["served", "servaient"], "Besatzungszonen": ["occupation zones", "zones d'occupation"], "Einwohner": ["resident", "habitant"], "Kopfgeld": ["per-capita money (1948)", "somme versée par personne (1948)"], "hob": ["(aufheben) lifted, abolished", "(aufheben) supprima"], "Verwaltung": ["administration", "administration"], "Preiskontrollen": ["price controls", "contrôles des prix"], "spektakulär": ["spectacular", "spectaculaire"], "Schaufenster": ["shop windows", "vitrines"], "offenbar": ["apparently", "visiblement"], "zurückgehalten": ["held back", "retenu"], "Vertrauen": ["confidence, trust", "confiance"], "verband": ["(verbinden) linked", "(verbinden) associa"], "Ökonom": ["economist", "économiste"], "geprägt": ["coined, shaped", "forgé"], "Ausgleich": ["balance, compensation", "équilibre"], "Schlagwort": ["slogan, buzzword", "slogan"], "Wirtschaftswunder": ["economic miracle", "miracle économique"], "zugeschrieben": ["attributed, credited", "attribué"], "relativieren": ["to put into perspective", "relativiser"], "Marshallplans": ["Marshall Plan", "plan Marshall"], "Wiederaufbau": ["reconstruction", "reconstruction"], "ausgefallen": ["(ausfallen) turned out", "(ausfallen) aurait été"] },
    questions: [
      { q: "Was diente vor 1948 auf dem Schwarzmarkt als Ersatzwährung?", o: ["Zigaretten", "Gold", "Brot"], a: 0 },
      { q: "Wie viel Geld erhielt jeder Einwohner zunächst?", o: ["40 D-Mark", "400 D-Mark", "4 D-Mark"], a: 0 },
      { q: "Was tat Ludwig Erhard fast gleichzeitig mit der Währungsreform?", o: ["Er hob einen großen Teil der Preiskontrollen auf.", "Er führte neue Steuern ein.", "Er verbot den Handel."], a: 0 },
      { q: "Wer prägte vor allem den Begriff „soziale Marktwirtschaft“?", o: ["Alfred Müller-Armack", "Ludwig Erhard allein", "Der Marshallplan"], a: 0 },
      { q: "Was sagen Historiker über das Wirtschaftswunder?", o: ["Auch andere Faktoren wie der Marshallplan trugen zum Aufschwung bei.", "Es war allein Erhards Verdienst.", "Es hat nie stattgefunden."], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-c1-6", unit: "c1-6", level: "C1", icon: "radio",
    title: "Gründen in Deutschland", title_fr: "Créer une entreprise en Allemagne",
    context: "A business podcast. The host talks to Carla, who founded a small company making repairable headphones, about the first steps.", context_fr: "Un podcast économique. L'animateur parle avec Carla, qui a fondé une petite entreprise de casques audio réparables, de ses premiers pas.",
    words: [["gründen", "to found, to set up", "fonder, créer"], ["das Stammkapital", "the share capital", "le capital social"], ["haften", "to be liable", "être responsable (financièrement)"], ["der Businessplan, ¨-e", "the business plan", "le business plan"], ["der Investor, -en", "the investor", "l'investisseur"]],
    lines: [["Moderator", "Carla, Sie haben vor zwei Jahren Ihre eigene Firma gegründet. Was war der erste Schritt?", "de-DE"], ["Carla", "Die Wahl der Rechtsform. Für eine GmbH braucht man 25 000 Euro Stammkapital, das hatte ich nicht. Deshalb habe ich mit einer UG angefangen, die kann man schon mit einem Euro gründen.", "de-DE"], ["Moderator", "Und der Vorteil gegenüber einer Einzelfirma?", "de-DE"], ["Carla", "Man haftet nicht mit dem privaten Vermögen. Wäre die Firma pleitegegangen, hätte ich nicht mein Erspartes verloren.", "de-DE"], ["Moderator", "Wie haben Sie Investoren überzeugt?", "de-DE"], ["Carla", "Mit einem guten Businessplan und einer klaren Marktlücke: Kopfhörer, die man selbst reparieren kann. Angenommen, ein Kabel geht kaputt, tauscht man nur das Kabel aus, nicht das ganze Gerät.", "de-DE"], ["Moderator", "Und was würden Sie heute anders machen?", "de-DE"], ["Carla", "Ich hätte früher eine Steuerberaterin einschalten sollen. Die Bürokratie hat mich im ersten Jahr fast mehr Zeit gekostet als die Produktentwicklung.", "de-DE"]],
    gist: ["Worum geht es im Gespräch?", ["Um die Gründung einer kleinen Firma", "Um einen Kredit für ein Haus", "Um ein neues Gesetz"]],
    detail: [["Warum hat Carla mit einer UG angefangen?", ["Ihr fehlte das Stammkapital für eine GmbH.", "Eine UG ist steuerfrei.", "Ihr Investor wollte es so."]], ["Was ist der Vorteil gegenüber einer Einzelfirma?", ["Man haftet nicht mit dem privaten Vermögen.", "Man zahlt keine Steuern.", "Man braucht keinen Businessplan."]], ["Was ist die Marktlücke ihrer Firma?", ["Kopfhörer, die man selbst reparieren kann", "Besonders billige Kopfhörer", "Kopfhörer ohne Kabel"]], ["Was würde Carla heute anders machen?", ["Früher eine Steuerberaterin einschalten", "Keine Firma gründen", "Mehr Werbung machen"]]],
    decode: ["Wäre die Firma pleitegegangen, hätte ich nicht mein Erspartes verloren.", "Ich hätte früher eine Steuerberaterin einschalten sollen."],
    tip: "Founders' stories are full of hypotheses and regrets: wäre … gewesen, hätte … sollen, angenommen… When you hear a verb in the Konjunktiv II at the start of a sentence, expect a condition, and wait for the second half to know the consequence.", tip_fr: "Les récits de fondateurs regorgent d'hypothèses et de regrets : wäre … gewesen, hätte … sollen, angenommen… Quand tu entends un verbe au Konjunktiv II en début de phrase, attends-toi à une condition, et écoute la seconde moitié pour connaître la conséquence."
  }]);

  W.PROMPTS.push({ id: "de-c1-6", level: "C1", q: "Halte einen Vortrag (etwa drei bis vier Minuten): „Ein bedingungsloses Grundeinkommen – Chance oder Illusion?“ Erkläre die Idee, spiele mögliche Szenarien durch und komm zu einem begründeten Fazit.", en: "Give a talk (about three to four minutes): “A universal basic income: opportunity or illusion?” Explain the idea, play through possible scenarios and reach a reasoned conclusion.", fr: "Fais un exposé (environ trois à quatre minutes) : « Un revenu universel inconditionnel : chance ou illusion ? » Explique l'idée, envisage des scénarios et aboutis à une conclusion argumentée.", time: 240,
    phrases: ["Unter einem bedingungslosen Grundeinkommen versteht man…", "Angenommen, jeder erhielte…", "Gesetzt den Fall, …", "Befürworter argumentieren, dass…", "Unter der Voraussetzung, dass…"],
    model: "Unter einem bedingungslosen Grundeinkommen versteht man einen festen Betrag, den jeder Mensch regelmäßig vom Staat erhält, ohne Bedingungen und ohne Prüfung, ob er arbeitet. Angenommen, jeder erhielte monatlich einen solchen Betrag, was würde passieren? Befürworter argumentieren, dass niemand mehr in Armut leben müsste und dass Menschen freier entscheiden könnten, etwa für eine Weiterbildung oder die Pflege von Angehörigen. Außerdem fiele viel Bürokratie weg. Kritiker halten dagegen, dass ein solches Modell kaum zu finanzieren wäre und manche Menschen weniger arbeiten könnten. Gesetzt den Fall, viele würden ihre Stelle aufgeben, fehlten dem Staat die Steuereinnahmen, aus denen das Grundeinkommen bezahlt wird. Meiner Ansicht nach ist die Idee keine Illusion, aber sie müsste sorgfältig getestet werden. Unter der Voraussetzung, dass Pilotprojekte verlässliche Ergebnisse liefern, könnte man sie schrittweise einführen." });

  W.WRITING_GUIDE["c1-6"] = { genre: "An argued text (C1)", genre_fr: "Un texte argumenté (C1)",
    plan: [["A lead-in and your thesis.", "Une amorce et ta thèse."], ["Arguments for, with a hypothesis.", "Des arguments pour, avec une hypothèse."], ["Arguments against.", "Des arguments contre."], ["A weighing up with conditions.", "Une pesée avec des conditions."], ["A conclusion.", "Une conclusion."]],
    marks: [["Immer mehr Unternehmen", "a lead-in", "une amorce"], ["Ich halte die Vier-Tage-Woche", "the thesis", "la thèse"], ["Angenommen", "a hypothesis", "une hypothèse"], ["Dagegen spricht", "the arguments against", "les arguments contre"], ["unter der Voraussetzung, dass", "a condition", "une condition"], ["Alles in allem", "the conclusion", "la conclusion"]] };

  /* Atelier de langue : champs allemands d'abord, puis anglais et français (voir localize.js). */
  W.LEXIS = W.LEXIS || {};
  W.LEXIS["c1-6"] = {
    colloc: [
      ["eine Bilanz vorlegen", "to present a balance sheet", "présenter un bilan", "Das Unternehmen legte eine positive Bilanz vor.", "legte", ["stellte", "gab"]],
      ["in die roten Zahlen rutschen", "to slip into the red", "passer dans le rouge", "Wegen der Krise rutschte die Firma in die roten Zahlen.", "rutschte", ["fuhr", "sprang"]],
      ["Stellen abbauen", "to cut jobs", "supprimer des postes", "Der Konzern will 2000 Stellen abbauen.", "abbauen", ["abreißen", "abnehmen"]],
      ["einen Kredit aufnehmen", "to take out a loan", "contracter un crédit", "Für die neue Maschine hat sie einen Kredit aufgenommen.", "aufgenommen", ["angenommen", "abgenommen"]],
      ["Insolvenz anmelden", "to file for insolvency", "déposer le bilan", "Die Firma musste Insolvenz anmelden.", "anmelden", ["anmachen", "ansagen"]],
      ["Verhandlungen aufnehmen", "to open negotiations", "entamer des négociations", "Die Gewerkschaft hat Verhandlungen aufgenommen.", "aufgenommen", ["aufgemacht", "aufgestellt"]],
      ["Zugeständnisse machen", "to make concessions", "faire des concessions", "Beide Seiten mussten Zugeständnisse machen.", "machen", ["geben", "tun"]],
      ["den Zuschlag erhalten", "to win the contract", "remporter le marché", "Unsere Firma hat den Zuschlag erhalten.", "erhalten", ["gewonnen", "gemacht"]],
      ["auf der Stelle treten", "to mark time, to make no progress", "piétiner", "Die Verhandlungen treten seit Wochen auf der Stelle.", "treten", ["stehen", "gehen"]],
      ["eine Marktlücke entdecken", "to spot a gap in the market", "trouver un créneau", "Die Gründerin hat eine Marktlücke entdeckt.", "entdeckt", ["erfunden", "aufgedeckt"]]
    ],
    wf: [
      ["Die ___ ist auf ein Rekordtief gesunken. (ARBEITSLOS)", "Arbeitslosigkeit"],
      ["Das Unternehmen ist international sehr ___. (WETTBEWERB)", "wettbewerbsfähig"],
      ["Die Firma ist leider ___ und muss Insolvenz anmelden. (ZAHLEN)", "zahlungsunfähig"],
      ["Die ___ zwischen den Partnern waren schwierig. (VERHANDELN)", "Verhandlungen"],
      ["Der ___ der Wirtschaft kam unerwartet. (AUFSCHWINGEN)", "Aufschwung"],
      ["Das Geschäft ist sehr ___. (GEWINN)", "gewinnbringend"],
      ["Die ___ der Mitarbeiter hat sich verbessert. (ZUFRIEDEN)", "Zufriedenheit"],
      ["Die Regierung plant die ___ der Post. (PRIVAT)", "Privatisierung"]
    ],
    kwt: [
      ["Wenn die Nachfrage höher wäre, würden wir mehr produzieren.", "WÄRE", "___ höher, würden wir mehr produzieren.", "Wäre die Nachfrage"],
      ["Wir haben damals nicht investiert, deshalb geht es uns heute schlecht.", "HÄTTEN", "___, ginge es uns heute besser.", "Hätten wir damals investiert|Hätten wir investiert"],
      ["Nehmen wir an, die Firma geht pleite.", "ANGENOMMEN", "___ pleite.", "Angenommen, die Firma ginge|Angenommen die Firma ginge|Angenommen, die Firma geht"],
      ["Die Firma wurde nicht gerettet, weil die Bank nicht half.", "WORDEN", "Die Firma ___, wenn die Bank geholfen hätte.", "wäre gerettet worden"],
      ["Die Firma hat keine Schulden mehr.", "SCHULDENFREI", "Die Firma ___.", "ist schuldenfrei"],
      ["Wir kommen Ihnen entgegen, aber nur wenn Sie mehr bestellen.", "VORAUSSETZUNG", "Wir kommen Ihnen entgegen, ___ Sie mehr bestellen.", "unter der Voraussetzung, dass|unter der Voraussetzung dass"]
    ],
    idioms: [
      ["schwarze Zahlen schreiben", "Gewinn machen", "to be in the black", "être dans le vert", "Nach drei Jahren schreibt das Start-up endlich schwarze Zahlen.", "schwarze Zahlen"],
      ["Geld wie Heu haben", "sehr reich sein", "to have money to burn", "rouler sur l'or", "Der neue Investor hat Geld wie Heu.", "Geld wie Heu"],
      ["ein Fass ohne Boden", "etwas, das ständig Geld kostet, ohne Ergebnis", "a bottomless pit", "un gouffre financier", "Das Projekt ist ein Fass ohne Boden.", "ein Fass ohne Boden"],
      ["jemandem unter die Arme greifen", "jemandem helfen, oft mit Geld", "to help someone out", "donner un coup de pouce à quelqu'un", "Die Bank griff dem Betrieb unter die Arme.", "unter die Arme"],
      ["jemanden über den Tisch ziehen", "jemanden bei einem Geschäft übervorteilen", "to rip someone off in a deal", "rouler quelqu'un", "Bei den Verhandlungen wurden wir über den Tisch gezogen.", "über den Tisch gezogen"],
      ["mit jemandem ins Geschäft kommen", "eine Geschäftsbeziehung beginnen", "to do business with someone", "faire affaire avec quelqu'un", "Wir würden gern mit Ihnen ins Geschäft kommen.", "ins Geschäft kommen"],
      ["den Kürzeren ziehen", "verlieren, benachteiligt werden", "to come off worse", "être perdant", "Bei der Fusion zogen die kleinen Zulieferer den Kürzeren.", "den Kürzeren"],
      ["etwas in trockenen Tüchern haben", "etwas sicher abgeschlossen haben", "to have something in the bag", "c'est dans la poche, c'est bouclé", "Der Vertrag ist endlich in trockenen Tüchern.", "in trockenen Tüchern"]
    ]
  };

  W.COURSE.push({ id: "c1-6", level: "C1", icon: "trending-up", title: "The economy and business", title_fr: "Économie et entreprise",
    intro: "Booms, crises, negotiations: in this unit, you'll learn to formulate hypotheses and play through scenarios (angenommen, gesetzt den Fall, unter der Voraussetzung, dass; hätten wir damals investiert, stünden wir heute besser da), to decode the long compounds of business German, and to negotiate firmly but flexibly. You'll also read about the currency reform of 1948 and the birth of the social market economy.",
    intro_fr: "Croissance, crises, négociations : dans cette unité, tu vas apprendre à formuler des hypothèses et à envisager des scénarios (angenommen, gesetzt den Fall, unter der Voraussetzung, dass ; hätten wir damals investiert, stünden wir heute besser da), à décoder les longs mots composés de l'allemand économique, et à négocier avec fermeté et souplesse. Tu liras aussi l'histoire de la réforme monétaire de 1948 et de la naissance de l'économie sociale de marché.",
    can: ["Introduce hypotheses with angenommen, gesetzt den Fall and unter der Voraussetzung, dass", "Use the Konjunktiv II with inversion and mixed times", "Decode long compounds and common abbreviations", "Negotiate: offer, counter-offer, concede with conditions and agree", "Write an argued text on a question of work and the economy (C1)"],
    can_fr: ["Introduire des hypothèses avec angenommen, gesetzt den Fall et unter der Voraussetzung, dass", "Employer le Konjunktiv II avec inversion et temps mêlés", "Décoder les longs mots composés et les abréviations courantes", "Négocier : offre, contre-proposition, concession sous condition et accord", "Écrire un texte argumenté sur une question de travail et d'économie (C1)"],
    lessons: [118, 119, 120], vocab: ["wirtschaftC1DE", "verhandlungDE"], reading: "waehrungsreform", prompt: "de-c1-6",
    writing: { task: "Write an argued text (220-260 words) on the question: “Should the four-day week with full pay become the norm?” Include a lead-in and thesis, arguments for with a hypothesis, arguments against, a weighing up with conditions, and a conclusion.", task_fr: "Écris un texte argumenté (220 à 260 mots) sur la question : « La semaine de quatre jours sans baisse de salaire doit-elle devenir la norme ? » Avec une amorce et une thèse, des arguments pour avec une hypothèse, des arguments contre, une pesée avec des conditions, et une conclusion.", words: "220-260",
      tips: ["Immer mehr Unternehmen…", "Ich halte … für…", "Angenommen, …", "Dagegen spricht, dass…", "…, unter der Voraussetzung, dass…"],
      checklist: ["I wrote a lead-in and a clear thesis", "I used at least one hypothesis (angenommen, gesetzt den Fall…)", "I presented arguments against", "I weighed things up with a condition", "I wrote between 220 and 260 words"],
      checklist_fr: ["J'ai écrit une amorce et une thèse claire", "J'ai employé au moins une hypothèse (angenommen, gesetzt den Fall…)", "J'ai présenté des arguments contre", "J'ai pesé le pour et le contre avec une condition", "J'ai écrit entre 220 et 260 mots"],
      model: "Immer mehr Unternehmen experimentieren mit der Vier-Tage-Woche, und viele Beschäftigte wünschen sie sich. Ich halte die Vier-Tage-Woche bei vollem Lohn für eine sinnvolle Option, allerdings nicht für ein Modell, das überall passt.\n\nFür eine kürzere Arbeitswoche spricht vor allem die Gesundheit. Wer sich besser erholen kann, ist seltener krank und arbeitet konzentrierter. Wer ausgeruht in die Woche startet, macht zudem weniger Fehler. Angenommen, die Beschäftigten schafften in vier Tagen annähernd dasselbe wie bisher in fünf, profitierten beide Seiten: die Mitarbeiter durch mehr Freizeit, die Firmen durch motivierte und gesündere Teams. Hinzu kommt, dass Arbeitgeber mit einem solchen Angebot im Wettbewerb um Fachkräfte punkten könnten.\n\nDagegen spricht, dass sich nicht jede Arbeit verdichten lässt. In der Pflege, im Handel oder bei der Polizei muss jemand anwesend sein, und weniger Arbeitszeit bedeutet dort schlicht, dass mehr Personal gebraucht wird. Gerade dieses Personal fehlt jedoch schon heute. Für kleine Betriebe könnten die zusätzlichen Kosten zudem existenzbedrohend sein.\n\nEine allgemeine Pflicht wäre daher der falsche Weg. Sinnvoll wäre die Vier-Tage-Woche unter der Voraussetzung, dass die Arbeit sie zulässt und Betriebe sowie Beschäftigte sie gemeinsam gestalten. Pilotprojekte könnten zeigen, in welchen Branchen sie funktioniert. Auch eine Verteilung der Arbeitszeit auf viereinhalb Tage wäre denkbar.\n\nAlles in allem sollte die Vier-Tage-Woche eine Möglichkeit sein, keine Norm. Hätten wir vor zwanzig Jahren über das Homeoffice ähnlich nüchtern diskutiert, wäre manches später einfacher gewesen." } });
})();
