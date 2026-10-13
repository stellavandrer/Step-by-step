/* Cours d'allemand, unité C2-8 « Officialese and plain language / Jargon administratif et langue claire » :
   déchiffrer l'allemand administratif (erfolgen, vornehmen, chaînes de génitifs, sein + zu, abréviations ggf.,
   i. d. R., d. M.), écrire en Leichte Sprache et en einfache Sprache, la médiation (expliquer un courrier
   officiel avec des mots simples). Personnages fictifs, prénoms allemands.
   Faits vérifiables seulement : la Leichte Sprache s'adresse d'abord aux personnes ayant des difficultés
   d'apprentissage ; racines notamment dans le mouvement « People First » né aux États-Unis ; le Netzwerk Leichte
   Sprache est fondé en 2006 et établit des règles (une idée par phrase, pas de mots étrangers sans explication,
   si possible ni subjonctif, ni génitif, ni négation, mots longs coupés par un tiret) ; depuis 2011, une
   ordonnance oblige les administrations fédérales à proposer certaines informations en Leichte Sprache sur leurs
   sites ; il existe des programmes électoraux, des informations et des romans en Leichte Sprache ; débat sur le
   tiret ou le point médian (Mediopunkt) ; l'einfache Sprache suit des règles moins strictes. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "amtsdeutschDE", icon: "stamp", title: "Official language", title_fr: "La langue administrative", level: "C2", words: [
    ["die Bearbeitung", "the processing", "le traitement", "Die Bearbeitung Ihres Antrags dauert etwa vier Wochen."],
    ["die Auszahlung, -en", "the payment, the payout", "le versement", "Die Auszahlung erfolgt am Monatsende."],
    ["der Nachweis, -e", "the proof, the evidence", "le justificatif", "Bitte legen Sie einen Nachweis über Ihr Einkommen bei."],
    ["die Vorsprache", "the personal visit (to an office)", "la présentation en personne", "Eine persönliche Vorsprache ist erforderlich."],
    ["das Lichtbild, -er", "the photograph (official)", "la photo d'identité", "Bringen Sie ein aktuelles Lichtbild mit."],
    ["die Gültigkeit", "validity", "la validité", "Ihr Ausweis verliert am 30. November seine Gültigkeit."],
    ["die Zuständigkeit, -en", "the responsibility, the competence", "la compétence (administrative)", "Das fällt nicht in unsere Zuständigkeit."],
    ["die Rückfrage, -n", "the query", "la demande de précision", "Bei Rückfragen wenden Sie sich bitte an Frau Berger."],
    ["die Vorlage", "the presentation (of a document)", "la présentation (d'un document)", "Die Auszahlung erfolgt nur gegen Vorlage einer Quittung."],
    ["einreichen", "to submit", "déposer, remettre", "Die Unterlagen sind bis zum 15. einzureichen."],
    ["die Kürzung, -en", "the cut, the reduction", "la réduction", "Bei Nichterscheinen droht eine Kürzung der Leistungen."],
    ["die Belehrung, -en", "the instruction, the notice of rights", "l'information (sur les droits et voies de recours)", "Am Ende des Bescheids steht eine Rechtsbehelfsbelehrung."],
    ["das Aktenzeichen, -", "the file number, the reference", "le numéro de dossier", "Bitte geben Sie bei Antwort das Aktenzeichen an."],
    ["gegebenenfalls (ggf.)", "if necessary, where applicable", "le cas échéant", "Gegebenenfalls melden wir uns bei Ihnen."],
    ["sämtlich", "all, the entire", "l'ensemble de, tous", "Bitte reichen Sie sämtliche Unterlagen ein."],
    ["die Anlage, -n", "the enclosure, the attachment", "la pièce jointe, l'annexe", "In der Anlage finden Sie das Formular."]
  ] },
  { id: "klarespracheDE", icon: "book-open", title: "Clear language", title_fr: "La langue claire", level: "C2", words: [
    ["verständlich", "comprehensible, clear", "compréhensible", "Bitte formulieren Sie den Brief verständlicher."],
    ["die Verständlichkeit", "comprehensibility", "la clarté, l'intelligibilité", "Verständlichkeit ist eine Frage des Respekts."],
    ["unverständlich", "incomprehensible", "incompréhensible", "Der Bescheid war für sie völlig unverständlich."],
    ["die Leichte Sprache", "Easy Language (rule-based)", "la langue facile (le FALC)", "Das Ministerium bietet Informationen in Leichter Sprache an."],
    ["die einfache Sprache", "plain language", "la langue simple", "Einfache Sprache folgt keinen festen Regeln."],
    ["die Barrierefreiheit", "accessibility", "l'accessibilité", "Barrierefreiheit betrifft auch Texte."],
    ["barrierefrei", "accessible, barrier-free", "accessible", "Die Website ist noch nicht barrierefrei."],
    ["die Teilhabe", "participation, inclusion", "la participation", "Verständliche Texte ermöglichen Teilhabe."],
    ["die Lernschwierigkeiten (Pl.)", "learning difficulties", "les difficultés d'apprentissage", "Leichte Sprache richtet sich an Menschen mit Lernschwierigkeiten."],
    ["die Zielgruppe, -n", "the target group", "le public cible", "Für welche Zielgruppe schreiben Sie?"],
    ["vereinfachen", "to simplify", "simplifier", "Man kann komplexe Inhalte vereinfachen, ohne sie zu verfälschen."],
    ["umformulieren", "to rephrase", "reformuler", "Kannst du den Satz umformulieren?"],
    ["der Fachjargon", "technical jargon", "le jargon", "Vermeiden Sie Fachjargon."],
    ["das Amtsdeutsch", "officialese", "le jargon administratif", "Viele Bürger stöhnen über das Amtsdeutsch."],
    ["die Lesbarkeit", "readability", "la lisibilité", "Kurze Sätze erhöhen die Lesbarkeit."],
    ["entschlüsseln", "to decode, to decipher", "déchiffrer", "Den Bescheid musste ich erst entschlüsseln."]
  ] });

  W.LESSONS.push(
  {
    id: 154, level: "C2", icon: "stamp",
    title: "Die Auszahlung erfolgt…: decoding officialese", title_fr: "Die Auszahlung erfolgt… : déchiffrer le jargon administratif",
    subtitle: "Empty verbs, chains of genitives, sein + zu and the usual abbreviations of official letters.", subtitle_fr: "Verbes vides, chaînes de génitifs, sein + zu et abréviations courantes des courriers officiels.",
    body: `
<h2>Empty verbs and nouns</h2>
<p>Officialese puts the action into a noun and adds an empty verb: <s-de>Die Auszahlung erfolgt am Monatsende.</s-de> = <s-de>Wir zahlen das Geld am Monatsende aus.</s-de> · <s-de>Wir nehmen eine Prüfung vor.</s-de> = <s-de>Wir prüfen.</s-de></p>
<h2>Chains and attributes</h2>
<p>Genitive chains: <s-de>die Prüfung der Unterlagen des Antragstellers</s-de>. Extended participles: <s-de>die von Ihnen eingereichten Unterlagen</s-de> (the documents you submitted).</p>
<h2>Obligation without a modal verb</h2>
<p><s-de>Die Unterlagen sind bis zum 15. einzureichen.</s-de> = must be submitted · <s-de>Die Gebühr ist bar zu entrichten.</s-de> = must be paid in cash</p>
<h2>Prepositions and abbreviations</h2>
<p><s-de>gemäß, zwecks, seitens, mittels, bezüglich, hinsichtlich</s-de></p>
<table>
<tr><td><s-de>ggf.</s-de></td><td>gegebenenfalls (if necessary)</td></tr>
<tr><td><s-de>i. d. R.</s-de></td><td>in der Regel (as a rule)</td></tr>
<tr><td><s-de>u. U.</s-de></td><td>unter Umständen (possibly)</td></tr>
<tr><td><s-de>d. M.</s-de></td><td>dieses Monats (of this month)</td></tr>
<tr><td><s-de>z. Hd.</s-de></td><td>zu Händen (for the attention of)</td></tr>
<tr><td><s-de>i. A.</s-de></td><td>im Auftrag (on behalf of)</td></tr>
<tr><td><s-de>Az.</s-de></td><td>Aktenzeichen (reference number)</td></tr>
</table>
<div class="tip">To decode a sentence, turn the nouns back into verbs and ask three questions: Who does what? By when? What do I have to do? <s-de>Die Bearbeitung erfolgt nach Eingang sämtlicher Unterlagen</s-de> becomes: <s-de>Wir bearbeiten Ihren Antrag, wenn alle Unterlagen da sind.</s-de></div>
`,
    body_fr: `
<h2>Verbes vides et noms</h2>
<p>Le jargon administratif met l'action dans un nom et ajoute un verbe vide : <s-de>Die Auszahlung erfolgt am Monatsende.</s-de> = <s-de>Wir zahlen das Geld am Monatsende aus.</s-de> (Le versement intervient en fin de mois = Nous versons l'argent en fin de mois.) · <s-de>Wir nehmen eine Prüfung vor.</s-de> = <s-de>Wir prüfen.</s-de></p>
<h2>Chaînes et attributs</h2>
<p>Chaînes de génitifs : <s-de>die Prüfung der Unterlagen des Antragstellers</s-de>. Participes étendus : <s-de>die von Ihnen eingereichten Unterlagen</s-de> (les documents que vous avez déposés).</p>
<h2>L'obligation sans verbe de modalité</h2>
<p><s-de>Die Unterlagen sind bis zum 15. einzureichen.</s-de> = doivent être déposés · <s-de>Die Gebühr ist bar zu entrichten.</s-de> = doit être réglée en espèces</p>
<h2>Prépositions et abréviations</h2>
<p><s-de>gemäß, zwecks, seitens, mittels, bezüglich, hinsichtlich</s-de> (conformément à, en vue de, de la part de, au moyen de, concernant)</p>
<table>
<tr><td><s-de>ggf.</s-de></td><td>gegebenenfalls (le cas échéant)</td></tr>
<tr><td><s-de>i. d. R.</s-de></td><td>in der Regel (en règle générale)</td></tr>
<tr><td><s-de>u. U.</s-de></td><td>unter Umständen (éventuellement)</td></tr>
<tr><td><s-de>d. M.</s-de></td><td>dieses Monats (du mois en cours)</td></tr>
<tr><td><s-de>z. Hd.</s-de></td><td>zu Händen (à l'attention de)</td></tr>
<tr><td><s-de>i. A.</s-de></td><td>im Auftrag (par délégation)</td></tr>
<tr><td><s-de>Az.</s-de></td><td>Aktenzeichen (numéro de dossier)</td></tr>
</table>
<div class="tip">Pour déchiffrer une phrase, retransforme les noms en verbes et pose trois questions : qui fait quoi ? Pour quand ? Que dois-je faire ? <s-de>Die Bearbeitung erfolgt nach Eingang sämtlicher Unterlagen</s-de> devient : <s-de>Wir bearbeiten Ihren Antrag, wenn alle Unterlagen da sind.</s-de></div>
`,
    examples: [
      ["Die Auszahlung erfolgt am Monatsende.", "Payment is made at the end of the month.", "Le versement intervient en fin de mois."],
      ["Wir nehmen eine Prüfung Ihrer Angaben vor.", "We will check your details.", "Nous procédons à une vérification de vos données."],
      ["Die von Ihnen eingereichten Unterlagen sind unvollständig.", "The documents you submitted are incomplete.", "Les documents que vous avez déposés sont incomplets."],
      ["Die Unterlagen sind bis zum 15. d. M. einzureichen.", "The documents must be submitted by the 15th of this month.", "Les documents doivent être déposés avant le 15 du mois en cours."],
      ["Die Gebühr ist bar zu entrichten.", "The fee must be paid in cash.", "Les frais doivent être réglés en espèces."],
      ["Ggf. erfolgt eine Rückfrage durch den zuständigen Sachbearbeiter.", "If necessary, the responsible officer will contact you.", "Le cas échéant, l'agent compétent vous contactera."],
      ["Die Bearbeitung erfolgt i. d. R. innerhalb von vier Wochen.", "Processing usually takes up to four weeks.", "Le traitement s'effectue en règle générale sous quatre semaines."]
    ],
    quiz: [
      { q: "“Die Auszahlung erfolgt am Monatsende” means…", q_fr: "« Die Auszahlung erfolgt am Monatsende » veut dire…", o: ["We pay the money at the end of the month.", "You must pay at the end of the month.", "The office closes at the end of the month."], o_fr: ["Nous versons l'argent en fin de mois.", "Vous devez payer en fin de mois.", "Le bureau ferme en fin de mois."], a: 0, ex: "erfolgen + noun = the action happens.", ex_fr: "erfolgen + nom = l'action a lieu." },
      { q: "“Die Unterlagen sind einzureichen” expresses…", q_fr: "« Die Unterlagen sind einzureichen » exprime…", o: ["an obligation", "a possibility", "a wish"], o_fr: ["une obligation", "une possibilité", "un souhait"], a: 0, ex: "sein + zu = must be done.", ex_fr: "sein + zu = doit être fait." },
      { q: "“ggf.” stands for…", q_fr: "« ggf. » signifie…", o: ["gegebenenfalls", "ganz gewiss", "gegen Gebühr"], a: 0, ex: "ggf. = if necessary.", ex_fr: "ggf. = le cas échéant." },
      { q: "“d. M.” stands for…", q_fr: "« d. M. » signifie…", o: ["dieses Monats", "der Mitarbeiter", "durch Mail"], a: 0, ex: "of this month.", ex_fr: "du mois en cours." },
      { q: "Plain German for “Wir nehmen eine Prüfung vor”:", q_fr: "En allemand simple, « Wir nehmen eine Prüfung vor » :", o: ["Wir prüfen.", "Wir nehmen etwas.", "Wir sind vorne."], a: 0, ex: "vornehmen = empty verb.", ex_fr: "vornehmen = verbe vide." }
    ]
  },
  {
    id: 155, level: "C2", icon: "book-open",
    title: "Leichte Sprache, einfache Sprache: writing clearly", title_fr: "Leichte Sprache, einfache Sprache : écrire clairement",
    subtitle: "The rules of Easy Language, the freedom of plain language, and how to rewrite an official sentence.", subtitle_fr: "Les règles du FALC, la liberté de la langue simple, et comment réécrire une phrase officielle.",
    body: `
<h2>Leichte Sprache</h2>
<p>A rule-based form of German, mainly for people with learning difficulties. Some of its rules:</p>
<table>
<tr><td>one idea per sentence</td><td><s-de>Sie haben einen Termin. Bitte kommen Sie pünktlich.</s-de></td></tr>
<tr><td>active verbs, no Konjunktiv</td><td><s-de>Das Amt prüft Ihre Unterlagen.</s-de></td></tr>
<tr><td>no genitive</td><td><s-de>das Haus von meinem Vater</s-de></td></tr>
<tr><td>avoid negation</td><td><s-de>Bitte bleiben Sie ruhig.</s-de> rather than <s-de>Bitte regen Sie sich nicht auf.</s-de></td></tr>
<tr><td>split long words</td><td><s-de>Bundes-Tag</s-de></td></tr>
<tr><td>explain difficult words</td><td><s-de>Der Bundes-Tag ist das Parlament von Deutschland.</s-de></td></tr>
</table>
<h2>Einfache Sprache</h2>
<p>Plain language follows no fixed rules: normal grammar, but short sentences, familiar words and a clear structure. It addresses a much wider readership.</p>
<h2>One sentence, three versions</h2>
<p>Officialese: <s-de>Bei Nichterscheinen zum vereinbarten Termin erfolgt eine Kürzung der Leistungen.</s-de></p>
<p>Plain: <s-de>Wenn Sie nicht zum Termin kommen, bekommen Sie weniger Geld.</s-de></p>
<p>Easy: <s-de>Sie haben einen Termin. Bitte kommen Sie zu dem Termin. Wenn Sie nicht kommen: Sie bekommen weniger Geld.</s-de></p>
<div class="tip">Writing simply is not simple; it's a craft. Rewriting officialese into plain German is excellent C2 practice: you have to understand every nuance before you can leave out what isn't needed.</div>
`,
    body_fr: `
<h2>Leichte Sprache</h2>
<p>Une forme d'allemand fondée sur des règles, surtout pour les personnes ayant des difficultés d'apprentissage (l'équivalent du FALC, « facile à lire et à comprendre »). Quelques règles :</p>
<table>
<tr><td>une idée par phrase</td><td><s-de>Sie haben einen Termin. Bitte kommen Sie pünktlich.</s-de></td></tr>
<tr><td>verbes actifs, pas de Konjunktiv</td><td><s-de>Das Amt prüft Ihre Unterlagen.</s-de></td></tr>
<tr><td>pas de génitif</td><td><s-de>das Haus von meinem Vater</s-de></td></tr>
<tr><td>éviter la négation</td><td><s-de>Bitte bleiben Sie ruhig.</s-de> plutôt que <s-de>Bitte regen Sie sich nicht auf.</s-de></td></tr>
<tr><td>couper les mots longs</td><td><s-de>Bundes-Tag</s-de></td></tr>
<tr><td>expliquer les mots difficiles</td><td><s-de>Der Bundes-Tag ist das Parlament von Deutschland.</s-de></td></tr>
</table>
<h2>Einfache Sprache</h2>
<p>La langue simple ne suit pas de règles fixes : grammaire normale, mais phrases courtes, mots connus et structure claire. Elle s'adresse à un public beaucoup plus large.</p>
<h2>Une phrase, trois versions</h2>
<p>Jargon administratif : <s-de>Bei Nichterscheinen zum vereinbarten Termin erfolgt eine Kürzung der Leistungen.</s-de></p>
<p>Langue simple : <s-de>Wenn Sie nicht zum Termin kommen, bekommen Sie weniger Geld.</s-de></p>
<p>Leichte Sprache : <s-de>Sie haben einen Termin. Bitte kommen Sie zu dem Termin. Wenn Sie nicht kommen: Sie bekommen weniger Geld.</s-de></p>
<div class="tip">Écrire simplement n'est pas simple : c'est un savoir-faire. Réécrire du jargon administratif en allemand clair est un excellent exercice de niveau C2 : il faut comprendre chaque nuance avant de pouvoir laisser de côté ce qui est inutile.</div>
`,
    examples: [
      ["Sie haben einen Termin. Bitte kommen Sie pünktlich.", "You have an appointment. Please come on time.", "Vous avez un rendez-vous. Merci de venir à l'heure."],
      ["Das Amt prüft Ihre Unterlagen.", "The office checks your documents.", "Le service vérifie vos documents."],
      ["Der Bundes-Tag ist das Parlament von Deutschland.", "The Bundestag is the parliament of Germany.", "Le Bundestag est le parlement de l'Allemagne."],
      ["Wenn Sie nicht zum Termin kommen, bekommen Sie weniger Geld.", "If you don't come to the appointment, you'll get less money.", "Si vous ne venez pas au rendez-vous, vous recevrez moins d'argent."],
      ["Bitte bleiben Sie ruhig.", "Please stay calm.", "Merci de rester calme."],
      ["Einfache Sprache folgt keinen festen Regeln.", "Plain language follows no fixed rules.", "La langue simple ne suit pas de règles fixes."],
      ["Kurze Sätze erhöhen die Lesbarkeit.", "Short sentences improve readability.", "Les phrases courtes améliorent la lisibilité."]
    ],
    quiz: [
      { q: "Leichte Sprache is mainly intended for…", q_fr: "La Leichte Sprache s'adresse surtout…", o: ["people with learning difficulties", "lawyers", "children under six"], o_fr: ["aux personnes ayant des difficultés d'apprentissage", "aux juristes", "aux enfants de moins de six ans"], a: 0, ex: "Though many others benefit too.", ex_fr: "Même si beaucoup d'autres en profitent." },
      { q: "In Leichte Sprache, “das Haus meines Vaters” becomes…", q_fr: "En Leichte Sprache, « das Haus meines Vaters » devient…", o: ["das Haus von meinem Vater", "des Vaters Haus", "das väterliche Haus"], a: 0, ex: "No genitive.", ex_fr: "Pas de génitif." },
      { q: "Which is a rule of Leichte Sprache?", q_fr: "Laquelle est une règle de la Leichte Sprache ?", o: ["One idea per sentence", "Use as many foreign words as possible", "Prefer the Konjunktiv"], o_fr: ["Une idée par phrase", "Employer le plus de mots étrangers possible", "Préférer le Konjunktiv"], a: 0, ex: "Short, simple sentences.", ex_fr: "Des phrases courtes et simples." },
      { q: "Einfache Sprache, compared with Leichte Sprache…", q_fr: "L'einfache Sprache, comparée à la Leichte Sprache…", o: ["follows no fixed rules", "is stricter", "is only for children"], o_fr: ["ne suit pas de règles fixes", "est plus stricte", "est seulement pour les enfants"], a: 0, ex: "Normal grammar, clear style.", ex_fr: "Grammaire normale, style clair." },
      { q: "“Bei Nichterscheinen” in plain German:", q_fr: "« Bei Nichterscheinen » en langue simple :", o: ["Wenn Sie nicht kommen", "Wenn Sie nichts sehen", "Wenn nichts erscheint"], a: 0, ex: "Turn the noun into a verb.", ex_fr: "Retransformer le nom en verbe." }
    ]
  },
  {
    id: 156, level: "C2", kind: "functional", icon: "hand-heart",
    title: "Everyday German: explaining an official letter in plain words", title_fr: "L'allemand de tous les jours : expliquer un courrier officiel avec des mots simples",
    subtitle: "Mediation: pick out what the person needs to know, translate officialese, and separate facts from guesses.", subtitle_fr: "La médiation : dégager ce que la personne doit savoir, traduire le jargon, et distinguer les faits des suppositions.",
    body: `
<h2>Start with the core</h2>
<p><s-de>Kurz gesagt: …</s-de> · <s-de>Das Wichtigste ist: …</s-de> · <s-de>Im Klartext heißt das: …</s-de></p>
<h2>Translate the officialese</h2>
<table>
<tr><td><s-de>persönliche Vorsprache</s-de></td><td><s-de>Du musst selbst hingehen.</s-de></td></tr>
<tr><td><s-de>unter Vorlage eines Lichtbildes</s-de></td><td><s-de>Du musst ein Foto mitbringen.</s-de></td></tr>
<tr><td><s-de>binnen eines Monats</s-de></td><td><s-de>innerhalb eines Monats</s-de></td></tr>
<tr><td><s-de>Die Zahlung erfolgt…</s-de></td><td><s-de>Sie zahlen dir…</s-de></td></tr>
</table>
<h2>Facts and guesses</h2>
<p><s-de>Das steht ausdrücklich im Brief.</s-de> · <s-de>Davon steht nichts im Brief, aber ich würde…</s-de> · <s-de>Da würde ich sicherheitshalber noch einmal nachfragen.</s-de></p>
<h2>Check and offer help</h2>
<p><s-de>Ist das jetzt klarer?</s-de> · <s-de>Soll ich dir beim Formular helfen?</s-de></p>
<div class="tip">Mediation is not word-for-word translation. Choose what the person needs to know and do, say it in their words, and be honest about what you don't know: an invented answer can cost someone a deadline.</div>
`,
    body_fr: `
<h2>Commencer par l'essentiel</h2>
<p><s-de>Kurz gesagt: …</s-de> (Bref…) · <s-de>Das Wichtigste ist: …</s-de> · <s-de>Im Klartext heißt das: …</s-de> (En clair, ça veut dire…)</p>
<h2>Traduire le jargon</h2>
<table>
<tr><td><s-de>persönliche Vorsprache</s-de></td><td><s-de>Du musst selbst hingehen.</s-de> (Tu dois y aller en personne.)</td></tr>
<tr><td><s-de>unter Vorlage eines Lichtbildes</s-de></td><td><s-de>Du musst ein Foto mitbringen.</s-de></td></tr>
<tr><td><s-de>binnen eines Monats</s-de></td><td><s-de>innerhalb eines Monats</s-de> (dans un délai d'un mois)</td></tr>
<tr><td><s-de>Die Zahlung erfolgt…</s-de></td><td><s-de>Sie zahlen dir…</s-de></td></tr>
</table>
<h2>Faits et suppositions</h2>
<p><s-de>Das steht ausdrücklich im Brief.</s-de> · <s-de>Davon steht nichts im Brief, aber ich würde…</s-de> · <s-de>Da würde ich sicherheitshalber noch einmal nachfragen.</s-de></p>
<h2>Vérifier et proposer son aide</h2>
<p><s-de>Ist das jetzt klarer?</s-de> · <s-de>Soll ich dir beim Formular helfen?</s-de></p>
<div class="tip">La médiation n'est pas une traduction mot à mot. Choisis ce que la personne doit savoir et faire, dis-le avec ses mots à elle, et sois honnête sur ce que tu ne sais pas : une réponse inventée peut faire manquer un délai.</div>
`,
    examples: [
      ["Kurz gesagt: Dein Personalausweis ist nur noch bis Ende November gültig.", "In short: your ID card is only valid until the end of November.", "Bref : ta carte d'identité n'est plus valable que jusqu'à fin novembre."],
      ["Im Klartext heißt das: Du musst selbst zum Bürgeramt gehen.", "In plain words: you have to go to the citizens' office yourself.", "En clair : tu dois aller toi-même au service des citoyens."],
      ["Du musst ein aktuelles Foto mitbringen.", "You have to bring a recent photo.", "Tu dois apporter une photo récente."],
      ["Davon steht nichts im Brief, aber ich würde vorher anrufen.", "The letter doesn't say anything about that, but I'd call beforehand.", "La lettre n'en dit rien, mais j'appellerais avant."],
      ["Da würde ich sicherheitshalber noch einmal nachfragen.", "I'd check again to be on the safe side.", "Par précaution, je redemanderais."],
      ["Ist das jetzt klarer?", "Is that clearer now?", "C'est plus clair, maintenant ?"],
      ["Soll ich dir beim Formular helfen?", "Shall I help you with the form?", "Tu veux que je t'aide pour le formulaire ?"]
    ],
    quiz: [
      { q: "“persönliche Vorsprache erforderlich” means…", q_fr: "« persönliche Vorsprache erforderlich » veut dire…", o: ["You have to go there in person.", "You have to speak first.", "You need a personal letter."], o_fr: ["Il faut y aller en personne.", "Il faut parler en premier.", "Il faut une lettre personnelle."], a: 0, ex: "Vorsprache = visit to an office.", ex_fr: "Vorsprache = présentation en personne." },
      { q: "What should mediation start with?", q_fr: "Par quoi la médiation doit-elle commencer ?", o: ["The core message", "A word-for-word translation", "The date of the letter"], o_fr: ["Le message essentiel", "Une traduction mot à mot", "La date du courrier"], a: 0, ex: "Kurz gesagt: …", ex_fr: "Kurz gesagt: …" },
      { q: "“binnen eines Monats” in plain German:", q_fr: "« binnen eines Monats » en allemand simple :", o: ["innerhalb eines Monats", "nach einem Monat", "vor einem Monat"], a: 0, ex: "binnen = innerhalb.", ex_fr: "binnen = innerhalb." },
      { q: "If the letter doesn't say something, you say…", q_fr: "Si le courrier ne dit pas quelque chose, tu dis…", o: ["Davon steht nichts im Brief, aber…", "Das ist ganz sicher so.", "Das ist nicht wichtig."], o_fr: ["Davon steht nichts im Brief, aber…", "C'est certainement comme ça.", "Ce n'est pas important."], a: 0, ex: "Separate facts from guesses.", ex_fr: "Distinguer les faits des suppositions." },
      { q: "Soll ich dir ___ Formular helfen?", q_fr: "Soll ich dir ___ Formular helfen?", o: ["beim", "das", "mit das"], a: 0, ex: "jemandem bei etwas helfen.", ex_fr: "jemandem bei etwas helfen." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    154: {
      gap: [["Die Auszahlung ___ am Monatsende.", "erfolgt"], ["Die Unterlagen sind bis zum 15. ___. (einreichen)", "einzureichen"], ["Wir nehmen eine Prüfung Ihrer Angaben ___.", "vor"], ["„Ggf.“ bedeutet „___“.", "gegebenenfalls"]],
      fix: [["Die Unterlagen sind bis Freitag einreichen.", "Die Unterlagen sind bis Freitag einzureichen.", "sein + zu-infinitive: einzureichen.", "sein + infinitif en zu : einzureichen."], ["Die von Ihnen eingereicht Unterlagen sind unvollständig.", "Die von Ihnen eingereichten Unterlagen sind unvollständig.", "An extended participle takes adjective endings.", "Un participe étendu prend les terminaisons de l'adjectif."]],
      task: ["Rewrite these official sentences in normal German with active verbs: Die Auszahlung erfolgt nach Prüfung der Unterlagen. Die Gebühr ist bar zu entrichten. Ggf. erfolgt eine Rückfrage durch den zuständigen Sachbearbeiter.", "Réécris ces phrases officielles en allemand courant avec des verbes actifs : Die Auszahlung erfolgt nach Prüfung der Unterlagen. Die Gebühr ist bar zu entrichten. Ggf. erfolgt eine Rückfrage durch den zuständigen Sachbearbeiter.", "Wir zahlen das Geld aus, sobald wir die Unterlagen geprüft haben. Sie müssen die Gebühr bar bezahlen. Wenn nötig, ruft Sie der zuständige Sachbearbeiter an."]
    },
    155: {
      gap: [["In Leichter Sprache steht ___ Idee in jedem Satz.", "eine"], ["Leichte Sprache vermeidet den ___. (das Haus meines Vaters)", "Genitiv"], ["Lange Wörter trennt man: Bundes-___.", "Tag"], ["___ Sprache folgt keinen festen Regeln.", "Einfache"]],
      fix: [["Das ist das Haus meines Vaters. (in Leichter Sprache)", "Das ist das Haus von meinem Vater.", "Easy Language avoids the genitive.", "La Leichte Sprache évite le génitif."], ["Wenn Sie nicht kommen sollten, würden Sie weniger Geld bekommen. (in Leichter Sprache)", "Wenn Sie nicht kommen: Sie bekommen weniger Geld.", "No Konjunktiv in Easy Language.", "Pas de Konjunktiv en Leichte Sprache."]],
      task: ["Rewrite this sentence first in plain language, then in Easy Language: Die Inanspruchnahme der Beratung ist für Bürgerinnen und Bürger kostenfrei und setzt keine vorherige Terminvereinbarung voraus.", "Réécris cette phrase d'abord en langue simple, puis en Leichte Sprache : Die Inanspruchnahme der Beratung ist für Bürgerinnen und Bürger kostenfrei und setzt keine vorherige Terminvereinbarung voraus.", "Einfache Sprache: Die Beratung ist kostenlos, und Sie können ohne Termin kommen. Leichte Sprache: Sie können eine Beratung bekommen. Die Beratung kostet kein Geld. Sie brauchen keinen Termin. Sie können einfach kommen."]
    },
    156: {
      gap: [["Kurz ___: Dein Ausweis ist bald ungültig.", "gesagt"], ["Im ___ heißt das: Du musst selbst hingehen.", "Klartext"], ["Davon ___ nichts im Brief.", "steht"], ["Soll ich dir ___ Formular helfen?", "beim"]],
      fix: [["Persönliche Vorsprache heißt, du musst persönlich vorsprechen.", "Persönliche Vorsprache heißt, du musst selbst hingehen.", "Explain with other, simpler words.", "Explique avec d'autres mots, plus simples."], ["Das steht bestimmt so im Brief. (Du weißt es nicht.)", "Da würde ich sicherheitshalber noch einmal nachfragen.", "Don't invent: say when you're not sure.", "N'invente pas : dis-le quand tu as un doute."]],
      task: ["Explain this letter to a neighbour in plain German (about 60 words): „Ihr Personalausweis verliert am 30.11. seine Gültigkeit. Zur Beantragung eines neuen Ausweises ist eine persönliche Vorsprache unter Vorlage eines biometrischen Lichtbildes erforderlich.“", "Explique ce courrier à un voisin en allemand simple (environ 60 mots) : „Ihr Personalausweis verliert am 30.11. seine Gültigkeit. Zur Beantragung eines neuen Ausweises ist eine persönliche Vorsprache unter Vorlage eines biometrischen Lichtbildes erforderlich.“", "Kurz gesagt: Dein Personalausweis gilt nur noch bis zum 30. November. Du brauchst also einen neuen. Dafür musst du selbst zum Bürgeramt gehen. Bring ein Passfoto mit, das die offiziellen Regeln erfüllt; das machst du am besten beim Fotografen. Ob du einen Termin brauchst, steht nicht im Brief. Ich würde sicherheitshalber vorher anrufen."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "amtsdeutsch", lesson: 154, level: "C2", icon: "stamp", partner: "Frau Berger", role: "a civil servant", role_fr: "une employée de l'administration",
    title: "Decoding the official", title_fr: "Déchiffrer l'employée",
    setting: "You've applied for housing benefit. On the phone, Frau Berger from the office speaks pure officialese. You check that you've understood.", setting_fr: "Tu as demandé une aide au logement. Au téléphone, Frau Berger, de l'administration, parle en pur jargon administratif. Tu vérifies que tu as bien compris.",
    turns: [
      { p: "Die Bearbeitung Ihres Antrags erfolgt nach Eingang sämtlicher Unterlagen.", en: "Your application will be processed once all documents have been received.", fr: "Le traitement de votre demande interviendra après réception de l'ensemble des pièces." },
      { y: ["Sie meinen also, dass Sie meinen Antrag erst bearbeiten, wenn alle Unterlagen da sind?", "Sie meinen also, dass Sie meinen Antrag erst bearbeiten, wenn alle Unterlagen sind da?", "Sie meinen also, dass Sie bearbeiten meinen Antrag erst, wenn alle Unterlagen da sind?"], en: "So you mean you'll only process my application once all the documents are there?", fr: "Vous voulez dire que vous ne traiterez ma demande que quand tous les documents seront là ?", why: "dass and wenn: verb at the end.", why_fr: "dass et wenn : verbe à la fin." },
      { p: "Korrekt. Es fehlt noch der Nachweis über Ihr Einkommen.", en: "Correct. The proof of your income is still missing.", fr: "Exact. Il manque encore le justificatif de vos revenus." },
      { y: ["Welchen Nachweis genau brauchen Sie? Reicht eine Gehaltsabrechnung?", "Welcher Nachweis genau brauchen Sie? Reicht eine Gehaltsabrechnung?", "Welchen Nachweis genau brauchen Sie? Reicht einer Gehaltsabrechnung?"], en: "Which proof exactly do you need? Is a payslip enough?", fr: "Quel justificatif vous faut-il exactement ? Une fiche de paie suffit ?", why: "Accusative welchen Nachweis; nominative eine Gehaltsabrechnung.", why_fr: "Accusatif welchen Nachweis ; nominatif eine Gehaltsabrechnung." },
      { p: "Ja, die letzten drei. Diese sind bis zum 15. d. M. einzureichen.", en: "Yes, the last three. They must be submitted by the 15th of this month.", fr: "Oui, les trois dernières. Elles doivent être déposées avant le 15 du mois en cours." },
      { y: ["„d. M.“ heißt „dieses Monats“, richtig? Also bis zum 15. Oktober?", "„d. M.“ heißt „diesem Monat“, richtig? Also bis zum 15. Oktober?", "„d. M.“ heißt „dieser Monat“, richtig? Also bis zum 15. Oktober?"], en: "“d. M.” means “dieses Monats” (of this month), right? So by 15 October?", fr: "« d. M. » veut dire « dieses Monats », c'est ça ? Donc avant le 15 octobre ?", why: "Genitive: dieses Monats.", why_fr: "Génitif : dieses Monats." },
      { p: "Ggf. erfolgt eine Rückfrage durch den zuständigen Sachbearbeiter.", en: "If necessary, the responsible officer will contact you with questions.", fr: "Le cas échéant, l'agent compétent vous contactera pour des précisions." },
      { y: ["Das heißt, falls nötig, meldet sich der zuständige Sachbearbeiter bei mir?", "Das heißt, falls nötig, der zuständige Sachbearbeiter meldet sich bei mir?", "Das heißt, falls nötig, meldet sich der zuständige Sachbearbeiter bei mich?"], en: "That means the responsible officer will get in touch with me if necessary?", fr: "Ça veut dire que l'agent compétent me contactera si nécessaire ?", why: "Verb second after falls nötig; bei + dative.", why_fr: "Verbe en deuxième position après falls nötig ; bei + datif." },
      { p: "Genau. Haben Sie sonst noch Fragen?", en: "Exactly. Do you have any other questions?", fr: "Exactement. Avez-vous d'autres questions ?" },
      { y: ["Nein, danke. Sie haben mir sehr geholfen, das Amtsdeutsch zu entschlüsseln.", "Nein, danke. Sie haben mich sehr geholfen, das Amtsdeutsch zu entschlüsseln.", "Nein, danke. Sie haben mir sehr geholfen, das Amtsdeutsch entschlüsseln."], en: "No, thank you. You've helped me a lot to decode the officialese.", fr: "Non, merci. Votre aide m'a été précieuse pour déchiffrer le jargon administratif.", why: "helfen + dative; zu-infinitive.", why_fr: "helfen + datif ; infinitif en zu." }
    ] },
  { id: "sprachmittlung", lesson: 156, level: "C2", icon: "hand-heart", partner: "Frau Schreiber", role: "an elderly neighbour", role_fr: "une voisine âgée",
    title: "A letter from the city", title_fr: "Un courrier de la mairie",
    setting: "Your elderly neighbour, Frau Schreiber, has received a letter from the citizens' office and doesn't understand it. You explain it in plain words.", setting_fr: "Ta voisine âgée, Frau Schreiber, a reçu un courrier du service des citoyens et ne le comprend pas. Tu le lui expliques avec des mots simples.",
    turns: [
      { p: "Kannst du mir diesen Brief erklären? Ich verstehe kein Wort.", en: "Can you explain this letter to me? I don't understand a word.", fr: "Tu peux m'expliquer cette lettre ? Je n'y comprends rien." },
      { y: ["Gern. Kurz gesagt: Dein Personalausweis ist nur noch bis Ende November gültig.", "Gern. Kurz gesagt: Dein Personalausweis ist nur noch bis Ende November gültigen.", "Gern. Kurz gesagt: Deinen Personalausweis ist nur noch bis Ende November gültig."], en: "Of course. In short: your ID card is only valid until the end of November.", fr: "Volontiers. Bref : ta carte d'identité n'est plus valable que jusqu'à fin novembre.", why: "Nominative dein Personalausweis; predicative adjective without ending.", why_fr: "Nominatif dein Personalausweis ; adjectif attribut sans terminaison." },
      { p: "Und was heißt „persönliche Vorsprache“?", en: "And what does “persönliche Vorsprache” mean?", fr: "Et que veut dire « persönliche Vorsprache » ?" },
      { y: ["Das bedeutet, dass du selbst zum Bürgeramt gehen musst; per Post geht es nicht.", "Das bedeutet, dass du musst selbst zum Bürgeramt gehen; per Post geht es nicht.", "Das bedeutet, dass du selbst zum Bürgeramt gehen musst; per Post geht es nichts."], en: "It means you have to go to the citizens' office yourself; it can't be done by post.", fr: "Ça veut dire que tu dois aller toi-même au service des citoyens ; par la poste, ce n'est pas possible.", why: "dass: verb at the end.", why_fr: "dass : verbe à la fin." },
      { p: "Und dieses „biometrische Lichtbild“?", en: "And this “biometric photograph”?", fr: "Et cette « photo biométrique » ?" },
      { y: ["Das ist ein Passfoto, das bestimmte Regeln erfüllt. Am besten lässt du es beim Fotografen machen.", "Das ist ein Passfoto, der bestimmte Regeln erfüllt. Am besten lässt du es beim Fotografen machen.", "Das ist ein Passfoto, das bestimmte Regeln erfüllt. Am besten lässt du es beim Fotografen machen lassen."], en: "It's a passport photo that meets certain rules. It's best to have it done at a photographer's.", fr: "C'est une photo d'identité qui respecte certaines règles. Le mieux, c'est de la faire faire chez un photographe.", why: "Relative pronoun das (das Passfoto); lassen only once.", why_fr: "Pronom relatif das (das Passfoto) ; lassen une seule fois." },
      { p: "Muss ich vorher anrufen?", en: "Do I have to call beforehand?", fr: "Je dois appeler avant ?" },
      { y: ["Davon steht nichts im Brief, aber ich würde sicherheitshalber einen Termin vereinbaren.", "Davon steht nichts im Brief, aber ich würde sicherheitshalber ein Termin vereinbaren.", "Davon steht nichts im Brief, aber ich würde sicherheitshalber einen Termin vereinbart."], en: "The letter doesn't say, but I'd make an appointment to be on the safe side.", fr: "La lettre n'en dit rien, mais par précaution je prendrais rendez-vous.", why: "würde + infinitive; einen Termin (accusative).", why_fr: "würde + infinitif ; einen Termin (accusatif)." },
      { p: "Danke! Warum schreiben die das nicht einfach so?", en: "Thank you! Why don't they just write it like that?", fr: "Merci ! Pourquoi ils n'écrivent pas tout simplement comme ça ?" },
      { y: ["Gute Frage. Manche Behörden bieten ihre Briefe inzwischen auch in einfacher Sprache an.", "Gute Frage. Manche Behörden bieten ihre Briefe inzwischen auch in einfache Sprache an.", "Gute Frage. Manche Behörden bieten inzwischen ihre Briefe an auch in einfacher Sprache."], en: "Good question. Some authorities now offer their letters in plain language too.", fr: "Bonne question. Certaines administrations proposent désormais aussi leurs courriers en langue simple.", why: "in + dative; anbieten is separable: an at the end.", why_fr: "in + datif ; anbieten est séparable : an à la fin." }
    ] }
  );

  W.READINGS.push({
    id: "leichtesprache", level: "C2", icon: "book-open", title: "Leichte Sprache: Verständlichkeit als Recht", genre: "Feature article",
    intro: "Short sentences, no genitive, hyphens in long words: a form of German that aims to give everyone access to information.",
    intro_fr: "Des phrases courtes, pas de génitif, des tirets dans les mots longs : une forme d'allemand qui veut donner à chacun accès à l'information.",
    paragraphs: [
      { de: "„Der Bundes-Tag ist das Parlament von Deutschland.“ So oder ähnlich klingen Texte in Leichter Sprache: kurze Sätze, bekannte Wörter, lange Wörter durch einen Bindestrich getrennt. Leichte Sprache richtet sich vor allem an Menschen mit Lernschwierigkeiten. Sie soll ihnen ermöglichen, wichtige Informationen selbstständig zu verstehen.", en: "“The Bundes-Tag is the parliament of Germany.” This is roughly how texts in Easy Language sound: short sentences, familiar words, long words split by a hyphen. Easy Language is aimed mainly at people with learning difficulties. It is meant to enable them to understand important information on their own.", fr: "« Le Bundes-Tag est le parlement de l'Allemagne. » Voilà à peu près à quoi ressemblent les textes en Leichte Sprache : phrases courtes, mots connus, mots longs coupés par un tiret. La Leichte Sprache s'adresse surtout aux personnes ayant des difficultés d'apprentissage. Elle doit leur permettre de comprendre seules des informations importantes." },
      { de: "Die Idee hat ihre Wurzeln unter anderem in der „People First“-Bewegung aus den USA, in der sich Menschen mit Lernschwierigkeiten selbst für ihre Rechte einsetzen. In Deutschland wurde 2006 das Netzwerk Leichte Sprache gegründet, das Regeln aufgestellt hat: ein Gedanke pro Satz, keine Fremdwörter ohne Erklärung, möglichst kein Konjunktiv, kein Genitiv und keine Verneinung.", en: "The idea has its roots partly in the “People First” movement from the USA, in which people with learning difficulties stand up for their own rights. In Germany, the Netzwerk Leichte Sprache (Easy Language Network) was founded in 2006 and drew up rules: one thought per sentence, no foreign words without explanation, if possible no Konjunktiv, no genitive and no negation.", fr: "L'idée a notamment ses racines dans le mouvement « People First », venu des États-Unis, dans lequel des personnes ayant des difficultés d'apprentissage défendent elles-mêmes leurs droits. En Allemagne, le Netzwerk Leichte Sprache, fondé en 2006, a établi des règles : une idée par phrase, pas de mots étrangers sans explication, si possible ni Konjunktiv, ni génitif, ni négation." },
      { de: "Seit 2011 verpflichtet eine Verordnung die Bundesbehörden, auf ihren Internetseiten bestimmte Informationen auch in Leichter Sprache anzubieten. Inzwischen gibt es Wahlprogramme, Nachrichten und sogar Romane in Leichter Sprache. Davon profitieren nicht nur Menschen mit Lernschwierigkeiten, sondern auch viele, die gerade Deutsch lernen.", en: "Since 2011, a regulation has obliged federal authorities to offer certain information on their websites in Easy Language as well. There are now election manifestos, news and even novels in Easy Language. Not only people with learning difficulties benefit, but also many who are learning German.", fr: "Depuis 2011, une ordonnance oblige les administrations fédérales à proposer aussi certaines informations en Leichte Sprache sur leurs sites. Il existe désormais des programmes électoraux, des informations et même des romans en Leichte Sprache. Les personnes ayant des difficultés d'apprentissage n'en sont pas les seules bénéficiaires : beaucoup de personnes qui apprennent l'allemand en profitent aussi." },
      { de: "Umstritten ist die Leichte Sprache dennoch. Manche halten sie für bevormundend oder befürchten, komplexe Sachverhalte würden zu stark verkürzt. Andere betonen, verständliche Informationen seien die Voraussetzung für gleichberechtigte Teilhabe. Selbst ob man lange Wörter mit einem Bindestrich oder mit einem Punkt in der Mitte trennt, wird unter Fachleuten diskutiert. Weniger streng ist die einfache Sprache: Sie folgt keinen festen Regeln, will aber ebenfalls möglichst viele Menschen erreichen.", en: "Easy Language is nevertheless controversial. Some consider it patronising or fear that complex matters are oversimplified. Others stress that understandable information is the precondition for equal participation. Even whether long words should be split with a hyphen or a dot in the middle is debated among experts. Plain language is less strict: it follows no fixed rules but also aims to reach as many people as possible.", fr: "La Leichte Sprache reste pourtant controversée. Certains la jugent infantilisante ou craignent que des questions complexes soient trop simplifiées. D'autres soulignent qu'une information compréhensible est la condition d'une participation égale. Même la question de savoir s'il faut couper les mots longs par un tiret ou par un point médian fait débat entre spécialistes. Moins stricte, la langue simple ne suit pas de règles fixes, mais vise elle aussi à toucher le plus de monde possible." }
    ],
    glossary: { "Bundes-Tag": ["Bundestag (federal parliament)", "Bundestag (parlement fédéral)"], "Parlament": ["parliament", "parlement"], "Bindestrich": ["hyphen", "tiret, trait d'union"], "getrennt": ["separated, split", "séparé, coupé"], "richtet": ["(sich richten an) is aimed at", "(sich richten an) s'adresse à"], "Lernschwierigkeiten": ["learning difficulties", "difficultés d'apprentissage"], "selbstständig": ["independently", "de façon autonome"], "Wurzeln": ["roots", "racines"], "Bewegung": ["movement", "mouvement"], "einsetzen": ["(sich einsetzen für) stand up for", "(sich einsetzen für) défendre"], "Netzwerk": ["network", "réseau"], "aufgestellt": ["drawn up", "établi"], "Fremdwörter": ["foreign words", "mots d'origine étrangère"], "Verneinung": ["negation", "négation"], "verpflichtet": ["obliges", "oblige"], "Verordnung": ["regulation, ordinance", "ordonnance, règlement"], "Bundesbehörden": ["federal authorities", "administrations fédérales"], "Internetseiten": ["websites", "sites internet"], "Wahlprogramme": ["election manifestos", "programmes électoraux"], "profitieren": ["benefit", "profitent"], "Umstritten": ["controversial", "controversé"], "bevormundend": ["patronising", "infantilisant"], "befürchten": ["fear", "craignent"], "Sachverhalte": ["matters, facts", "questions, faits"], "verkürzt": ["shortened, oversimplified", "raccourci, simplifié"], "gleichberechtigte": ["equal", "égale"], "Teilhabe": ["participation", "participation"], "streng": ["strict", "strict"] },
    questions: [
      { q: "An wen richtet sich Leichte Sprache vor allem?", o: ["An Menschen mit Lernschwierigkeiten", "An Juristen", "An Kinder unter sechs Jahren"], a: 0 },
      { q: "Wann wurde das Netzwerk Leichte Sprache gegründet?", o: ["2006", "1991", "2020"], a: 0 },
      { q: "Welche Regel gehört zur Leichten Sprache?", o: ["Ein Gedanke pro Satz", "Möglichst viele Fremdwörter", "Möglichst viel Konjunktiv"], a: 0 },
      { q: "Wozu verpflichtet eine Verordnung seit 2011 die Bundesbehörden?", o: ["Bestimmte Informationen auch in Leichter Sprache anzubieten", "Alle Briefe auf Englisch zu schreiben", "Keine Internetseiten mehr zu haben"], a: 0 },
      { q: "Was befürchten manche Kritiker?", o: ["Dass komplexe Sachverhalte zu stark verkürzt werden", "Dass die Texte zu lang sind", "Dass niemand die Texte liest"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-c2-8", unit: "c2-8", level: "C2", icon: "radio",
    title: "Übersetzen ins Einfache", title_fr: "Traduire vers le simple",
    context: "A radio interview with Frau Jansen, who translates official texts into Easy Language.", context_fr: "Une interview radio avec Frau Jansen, qui traduit des textes administratifs en Leichte Sprache.",
    words: [["versteckt", "hidden", "caché"], ["die Handlung, -en", "the action", "l'action"], ["kindlich", "childlike, childish", "enfantin"], ["duzen", "to address as du", "tutoyer"], ["der Beamte, -n", "the civil servant", "le fonctionnaire"]],
    lines: [["Moderator", "Frau Jansen, Sie übersetzen Behördentexte in Leichte Sprache. Wie gehen Sie vor?", "de-DE"], ["Frau Jansen", "Zuerst muss ich den Text selbst verstehen, und das ist oft das Schwierigste. Ein Satz wie „Die Auszahlung erfolgt nach Prüfung der Unterlagen“ enthält gleich zwei versteckte Handlungen.", "de-DE"], ["Moderator", "Welche denn?", "de-DE"], ["Frau Jansen", "Jemand prüft die Unterlagen, und jemand zahlt das Geld aus. In Leichter Sprache schreibe ich: „Das Amt prüft Ihre Unterlagen. Dann bekommen Sie das Geld.“", "de-DE"], ["Moderator", "Klingt das nicht ein bisschen kindlich?", "de-DE"], ["Frau Jansen", "Diesen Vorwurf höre ich oft. Aber einfach ist nicht dasselbe wie kindlich. Wir duzen niemanden, und wir behandeln die Leserinnen und Leser als Erwachsene.", "de-DE"], ["Moderator", "Wer liest Ihre Texte?", "de-DE"], ["Frau Jansen", "Vor allem Menschen mit Lernschwierigkeiten, aber auch viele Ältere und Menschen, die Deutsch lernen. Und, ehrlich gesagt, manche Beamte, die ihre eigenen Bescheide endlich verstehen.", "de-DE"]],
    gist: ["Worum geht es im Gespräch?", ["Um die Arbeit einer Übersetzerin für Leichte Sprache", "Um einen neuen Sprachkurs", "Um die Reform einer Behörde"]],
    detail: [["Was ist für Frau Jansen oft das Schwierigste?", ["Den Ausgangstext selbst zu verstehen", "Schöne Wörter zu finden", "Schnell zu schreiben"]], ["Was steckt in „Die Auszahlung erfolgt nach Prüfung der Unterlagen“?", ["Zwei versteckte Handlungen", "Ein Rechtschreibfehler", "Eine Frage"]], ["Wie antwortet sie auf den Vorwurf, Leichte Sprache sei kindlich?", ["Einfach ist nicht dasselbe wie kindlich.", "Sie gibt ihm recht.", "Sie schreibt nur für Kinder."]], ["Wer liest ihre Texte, außer Menschen mit Lernschwierigkeiten?", ["Ältere, Deutschlernende und manche Beamte", "Nur Journalisten", "Niemand sonst"]]],
    decode: ["Die Auszahlung erfolgt nach Prüfung der Unterlagen", "Aber einfach ist nicht dasselbe wie kindlich"],
    tip: "Frau Jansen's method is exactly the C2 decoding technique: find the hidden actions in the nouns (Auszahlung, Prüfung), then ask who does them. Notice, too, her ironic final remark about civil servants: understanding it requires catching the tone, not just the words.", tip_fr: "La méthode de Frau Jansen est exactement la technique de décodage du C2 : trouver les actions cachées dans les noms (Auszahlung, Prüfung), puis se demander qui les accomplit. Remarque aussi sa remarque finale ironique sur les fonctionnaires : pour la comprendre, il faut saisir le ton, pas seulement les mots."
  }]);

  W.PROMPTS.push({ id: "de-c2-8", level: "C2", q: "Halte einen Vortrag (etwa drei bis vier Minuten): „Sollten alle Behördenbriefe in einfacher Sprache geschrieben werden?“ Erkläre das Problem an einem Beispiel, wäge Vor- und Nachteile ab und mach einen Vorschlag.", en: "Give a talk (about three to four minutes): “Should all official letters be written in plain language?” Explain the problem with an example, weigh up the pros and cons, and make a proposal.", fr: "Fais un exposé (environ trois à quatre minutes) : « Tous les courriers administratifs devraient-ils être rédigés en langue simple ? » Explique le problème à l'aide d'un exemple, pèse le pour et le contre, et fais une proposition.", time: 240,
    phrases: ["Nehmen wir einen typischen Satz: …", "Im Klartext heißt das: …", "Kritiker wenden ein, …", "Präzision und Klarheit schließen einander nicht aus.", "Mein Vorschlag lautet daher: …"],
    model: "Nehmen wir einen typischen Satz aus einem Behördenbrief: „Die Bearbeitung Ihres Antrags erfolgt nach Eingang sämtlicher Unterlagen.“ Im Klartext heißt das: Wir bearbeiten Ihren Antrag, wenn alle Unterlagen da sind. Der zweite Satz ist kürzer, aktiver und für alle verständlich. Warum also schreiben Behörden so selten so? Ein Grund ist die Tradition: Amtsdeutsch gilt als präzise und rechtssicher. Kritiker wenden ein, jede Vereinfachung könne zu Missverständnissen mit rechtlichen Folgen führen. Dieses Argument ist ernst zu nehmen. Doch Präzision und Klarheit schließen einander nicht aus: Ein aktiver Satz mit einem klaren Subjekt ist oft sogar genauer, weil er sagt, wer handelt. Hinzu kommt, dass unverständliche Briefe Rückfragen und Widersprüche nach sich ziehen, die Zeit und Geld kosten. Mein Vorschlag lautet daher: Behörden sollten ihre Standardbriefe in einfacher Sprache überarbeiten und bei Bedarf zusätzlich Fassungen in Leichter Sprache anbieten. Letzten Endes geht es um Respekt: Wer verstanden werden will, muss so schreiben, dass man ihn versteht." });

  W.WRITING_GUIDE["c2-8"] = { genre: "An essay (C2)", genre_fr: "Un essai (C2)",
    plan: [["A familiar experience and your thesis.", "Une expérience familière et ta thèse."], ["Comprehensibility and justice.", "Clarté et justice."], ["The cost of incomprehensible texts.", "Le coût des textes incompréhensibles."], ["The objection of legal precision, and your answer.", "L'objection de la précision juridique, et ta réponse."], ["Proposals and a conclusion.", "Des propositions et une conclusion."]],
    marks: [["Ich bin überzeugt, dass ein demokratischer Staat verpflichtet ist", "the thesis", "la thèse"], ["Zunächst ist Verständlichkeit eine Frage der Gerechtigkeit", "the first argument", "le premier argument"], ["Hinzu kommt, dass", "the second argument", "le deuxième argument"], ["Kritiker wenden ein, Rechtssprache müsse präzise sein", "the objection in reported speech", "l'objection au discours indirect"], ["Präzision und Klarheit schließen einander nicht aus", "the rebuttal", "la réfutation"], ["Letzten Endes ist Verständlichkeit kein Entgegenkommen, sondern eine Form von Respekt", "the conclusion", "la conclusion"]] };

  /* Atelier de langue : champs allemands d'abord, puis anglais et français (voir localize.js). */
  W.LEXIS = W.LEXIS || {};
  W.LEXIS["c2-8"] = {
    colloc: [
      ["einen Bescheid erlassen", "to issue a decision", "rendre une décision", "Das Amt erließ einen neuen Bescheid.", "erließ", ["erlaubte", "verließ"]],
      ["Unterlagen einreichen", "to submit documents", "déposer des documents", "Bitte reichen Sie die Unterlagen bis Freitag ein.", "reichen", ["stellen", "legen"]],
      ["Auskunft erteilen", "to give information", "donner des renseignements", "Die Behörde erteilte keine Auskunft.", "erteilte", ["teilte", "erstellte"]],
      ["eine Gebühr entrichten", "to pay a fee", "acquitter des frais", "Die Gebühr ist bar zu entrichten.", "entrichten", ["errichten", "entrinnen"]],
      ["einen Vorgang bearbeiten", "to process a case", "traiter un dossier", "Ihr Vorgang wird derzeit bearbeitet.", "bearbeitet", ["bewirtet", "berichtet"]],
      ["eine Bescheinigung ausstellen", "to issue a certificate", "délivrer une attestation", "Das Amt stellte eine Bescheinigung aus.", "stellte", ["legte", "setzte"]],
      ["Rücksprache halten", "to consult", "en référer, se concerter", "Ich halte Rücksprache mit meinem Vorgesetzten.", "halte", ["mache", "führe"]],
      ["eine Ausnahme gewähren", "to grant an exception", "accorder une dérogation", "Die Behörde gewährte eine Ausnahme.", "gewährte", ["gewöhnte", "bewährte"]],
      ["einen Anspruch geltend machen", "to assert a claim", "faire valoir un droit", "Sie können Ihren Anspruch schriftlich geltend machen.", "geltend", ["gültig", "gelten"]],
      ["Barrieren abbauen", "to remove barriers", "supprimer des obstacles", "Leichte Sprache soll Barrieren abbauen.", "abbauen", ["aufbauen", "anbauen"]]
    ],
    wf: [
      ["Die ___ des Textes lässt zu wünschen übrig. (VERSTEHEN)", "Verständlichkeit"],
      ["Das Rathaus ist inzwischen ___. (BARRIERE)", "barrierefrei"],
      ["Die ___ der Unterlagen dauert zwei Wochen. (BEARBEITEN)", "Bearbeitung"],
      ["Ihr Ausweis verliert bald seine ___. (GÜLTIG)", "Gültigkeit"],
      ["Für diese Frage bin ich leider nicht ___. (ZUSTÄNDIGKEIT)", "zuständig"],
      ["Verständliche Texte ermöglichen ___. (TEILHABEN)", "Teilhabe"],
      ["Bitte legen Sie alle ___ Unterlagen bei. (ERFORDERN)", "erforderlichen"],
      ["Mit kurzen Sätzen ist ein Text leichter ___. (LESEN)", "lesbar"]
    ],
    kwt: [
      ["Das Geld wird am Monatsende ausgezahlt.", "ERFOLGT", "Die Auszahlung ___.", "erfolgt am Monatsende"],
      ["Die Unterlagen müssen bis Freitag eingereicht werden.", "SIND", "Die Unterlagen ___.", "sind bis Freitag einzureichen"],
      ["Falls nötig, rufen wir Sie an.", "GEGEBENENFALLS", "Wir ___.", "rufen Sie gegebenenfalls an"],
      ["Die Behörde hat Ihren Antrag noch nicht bearbeitet.", "BEARBEITUNG", "Die ___ noch nicht erfolgt.", "Bearbeitung Ihres Antrags ist"],
      ["Sie müssen selbst ins Bürgeramt kommen.", "VORSPRACHE", "Eine ___ erforderlich.", "persönliche Vorsprache im Bürgeramt ist"],
      ["Wer nicht zum Termin kommt, bekommt weniger Geld.", "NICHTERSCHEINEN", "Bei ___.", "Nichterscheinen werden die Leistungen gekürzt|Nichterscheinen erfolgt eine Kürzung der Leistungen"]
    ],
    idioms: [
      ["Der Amtsschimmel wiehert.", "Die Bürokratie ist übertrieben umständlich", "Red tape gone mad.", "La paperasserie dans toute sa splendeur.", "Drei Formulare für einen Parkausweis? Da wiehert der Amtsschimmel.", "wiehert der Amtsschimmel"],
      ["der Papierkrieg", "mühsamer Schriftverkehr mit Behörden", "the paperwork battle", "la paperasserie", "Nach dem Umzug begann der Papierkrieg.", "der Papierkrieg"],
      ["Die Mühlen der Bürokratie mahlen langsam.", "Behörden brauchen viel Zeit", "The wheels of bureaucracy turn slowly.", "L'administration prend son temps.", "Wir warten seit Monaten; die Mühlen der Bürokratie mahlen langsam.", "die Mühlen der Bürokratie mahlen langsam"],
      ["nach Schema F", "mechanisch, ohne den Einzelfall zu beachten", "by the book, mechanically", "de façon routinière", "Der Antrag wurde nach Schema F bearbeitet.", "nach Schema F"],
      ["das Kleingedruckte", "die oft übersehenen Bedingungen eines Vertrags", "the small print", "les petits caractères", "Lies unbedingt das Kleingedruckte!", "das Kleingedruckte"],
      ["von Pontius zu Pilatus laufen", "von einer Stelle zur nächsten geschickt werden", "to run from pillar to post", "être renvoyé de service en service", "Für eine einzige Bescheinigung musste ich von Pontius zu Pilatus laufen.", "von Pontius zu Pilatus"],
      ["durch alle Instanzen gehen", "bis zur höchsten zuständigen Stelle verfolgt werden", "to go through all the courts", "aller jusqu'au bout de la procédure", "Der Streit ging durch alle Instanzen.", "durch alle Instanzen"],
      ["etwas schwarz auf weiß haben", "etwas schriftlich als Beweis haben", "to have something in black and white", "avoir quelque chose noir sur blanc", "Ich will die Zusage schwarz auf weiß haben.", "schwarz auf weiß"]
    ]
  };

  W.COURSE.push({ id: "c2-8", level: "C2", icon: "stamp", title: "Officialese and plain language", title_fr: "Jargon administratif et langue claire",
    intro: "Official German can be a language of its own. In this unit, you'll learn to decode officialese (Die Auszahlung erfolgt…, sind einzureichen, ggf.), to write in plain language and Easy Language, and to explain an official letter to someone in simple words. You'll also read about Leichte Sprache, a form of German that aims to give everyone access to information.",
    intro_fr: "L'allemand administratif est presque une langue à part. Dans cette unité, tu vas apprendre à déchiffrer le jargon administratif (Die Auszahlung erfolgt…, sind einzureichen, ggf.), à écrire en langue simple et en Leichte Sprache, et à expliquer un courrier officiel à quelqu'un avec des mots simples. Tu liras aussi un texte sur la Leichte Sprache, une forme d'allemand qui veut donner à chacun accès à l'information.",
    can: ["Decode officialese and its abbreviations", "Rewrite official sentences in plain language and Easy Language", "Explain an official letter to someone in plain words", "Talk about bureaucracy, accessibility and clear language", "Write an essay on comprehensibility in public life (C2)"],
    can_fr: ["Déchiffrer le jargon administratif et ses abréviations", "Réécrire des phrases officielles en langue simple et en Leichte Sprache", "Expliquer un courrier officiel à quelqu'un avec des mots simples", "Parler de bureaucratie, d'accessibilité et de langue claire", "Écrire un essai sur la clarté dans la vie publique (C2)"],
    lessons: [154, 155, 156], vocab: ["amtsdeutschDE", "klarespracheDE"], reading: "leichtesprache", prompt: "de-c2-8",
    writing: { task: "Write an essay (300-350 words): “Comprehensibility as a civic right: must the state write more simply?” Include a familiar experience and your thesis, comprehensibility and justice, the cost of incomprehensible texts, the objection of legal precision and your answer, and proposals.", task_fr: "Écris un essai (300 à 350 mots) : « La clarté, un droit du citoyen : l'État doit-il écrire plus simplement ? » Avec une expérience familière et ta thèse, clarté et justice, le coût des textes incompréhensibles, l'objection de la précision juridique et ta réponse, et des propositions.", words: "300-350",
      tips: ["Ich bin überzeugt, dass…", "Zunächst ist … eine Frage der…", "Hinzu kommt, dass…", "Kritiker wenden ein, …", "Letzten Endes…"],
      checklist: ["I started with a concrete example", "I gave at least two arguments", "I reported the objection in reported speech and answered it", "I made concrete proposals", "I wrote between 300 and 350 words"],
      checklist_fr: ["J'ai commencé par un exemple concret", "J'ai donné au moins deux arguments", "J'ai rapporté l'objection au discours indirect et j'y ai répondu", "J'ai fait des propositions concrètes", "J'ai écrit entre 300 et 350 mots"],
      model: "Wer schon einmal einen Bescheid vom Finanzamt erhalten hat, kennt das Gefühl: Man liest einen Satz dreimal und weiß danach weniger als vorher. Formulierungen wie „Die Auszahlung erfolgt nach Prüfung der eingereichten Unterlagen“ sind grammatisch korrekt, aber für viele Menschen kaum zu entschlüsseln. Ich bin überzeugt, dass ein demokratischer Staat verpflichtet ist, sich verständlich auszudrücken.\n\nZunächst ist Verständlichkeit eine Frage der Gerechtigkeit. Behördenbriefe betreffen Rechte und Pflichten: Fristen, Zahlungen, Leistungen. Wer einen Bescheid nicht versteht, verpasst womöglich eine Frist oder verzichtet auf Geld, das ihm zusteht. Betroffen sind gerade diejenigen, die ohnehin benachteiligt sind: Menschen mit Lernschwierigkeiten, Ältere, Zugewanderte. Eine Sprache, die sie ausschließt, verstärkt bestehende Ungleichheiten.\n\nHinzu kommt, dass unverständliche Texte auch der Verwaltung selbst schaden. Jeder Brief, den niemand versteht, führt zu Rückfragen, Anrufen und Widersprüchen, die Zeit und Geld kosten. Ein klarer Text erspart also nicht nur den Bürgerinnen und Bürgern Mühe, sondern auch den Ämtern. Klarheit ist insofern auch eine Frage der Wirtschaftlichkeit.\n\nKritiker wenden ein, Rechtssprache müsse präzise sein; jede Vereinfachung berge die Gefahr von Missverständnissen mit rechtlichen Folgen. Dieses Argument ist berechtigt, doch es richtet sich gegen schlechte Vereinfachung, nicht gegen Verständlichkeit an sich. Präzision und Klarheit schließen einander nicht aus. Ein Satz wie „Wir zahlen Ihnen das Geld aus, sobald wir Ihre Unterlagen geprüft haben“ ist genauso präzise wie die Nominalkette und dabei viel leichter zu verstehen.\n\nWas folgt daraus? Behörden sollten ihre Standardbriefe systematisch überarbeiten, aktive Verben verwenden und die wichtigsten Informationen an den Anfang stellen. Wo es nötig ist, sollten sie zusätzlich Fassungen in Leichter Sprache anbieten. Mitarbeiterinnen und Mitarbeiter müssten darin geschult werden, für ihre Leserinnen und Leser zu schreiben statt für die Akte. Dafür braucht es keine Revolution, sondern Ausdauer und gute Vorlagen.\n\nLetzten Endes ist Verständlichkeit kein Entgegenkommen, sondern eine Form von Respekt. Ein Staat, der verstanden werden will, muss so sprechen, dass man ihn versteht. Und er gewinnt dadurch etwas, das sich mit keiner Verordnung erzwingen lässt: Vertrauen." } });
})();
