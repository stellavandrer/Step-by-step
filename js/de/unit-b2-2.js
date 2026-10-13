/* Cours d'allemand, unité B2-2 « The world of work / Le monde du travail » : le passif avec verbe de modalité et le
   Zustandspassiv (muss erledigt werden, ist geschlossen), les équivalents du passif (sich lassen, -bar, sein + zu,
   man), le message formel au travail (Goethe B2, Schreiben partie 2 : message formel d'environ 100 mots).
   Personnages fictifs, prénoms allemands.
   Faits vérifiables seulement : Betriebsverfassungsgesetz de 1952, refondu en 1972 ; un Betriebsrat peut être élu
   dans les établissements d'au moins cinq salariés permanents ayant le droit de vote ; élections régulières tous
   les quatre ans ; début et fin du temps de travail et répartition des pauses soumis à la codécision (§ 87) ;
   Mitbestimmungsgesetz de 1976 : sociétés de capitaux de plus de 2 000 salariés, conseil de surveillance paritaire,
   voix prépondérante du président, élu en pratique par le côté des actionnaires ; cogestion du charbon et de l'acier
   (Montan-Mitbestimmung) depuis 1951 ; le comité n'existe pas d'office, les salariés doivent organiser l'élection. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "arbeitsweltDE", icon: "briefcase", title: "Work in transition", title_fr: "Le travail en mutation", level: "B2", words: [
    ["die Belegschaft, -en", "the workforce, the staff", "le personnel, les salariés", "Die Belegschaft wurde über die Pläne informiert."],
    ["der Betriebsrat, ¨-e", "the works council", "le comité d'entreprise", "Der Betriebsrat vertritt die Interessen der Beschäftigten."],
    ["die Mitbestimmung", "co-determination", "la cogestion", "Mitbestimmung ist in Deutschland gesetzlich geregelt."],
    ["die Digitalisierung", "digitalisation", "la transformation numérique", "Die Digitalisierung verändert fast alle Berufe."],
    ["die Führungskraft, ¨-e", "the manager, the executive", "le cadre, le dirigeant", "Gute Führungskräfte hören ihrem Team zu."],
    ["die Fachkraft, ¨-e", "the skilled worker", "le travailleur qualifié", "In der Pflege werden dringend Fachkräfte gesucht."],
    ["der Fachkräftemangel", "the shortage of skilled workers", "la pénurie de main-d'œuvre qualifiée", "Viele Handwerksbetriebe leiden unter dem Fachkräftemangel."],
    ["die Vereinbarkeit von Familie und Beruf", "work–family balance", "la conciliation entre vie familiale et vie professionnelle", "Flexible Arbeitszeiten verbessern die Vereinbarkeit von Familie und Beruf."],
    ["die Gehaltserhöhung, -en", "the pay rise", "l'augmentation de salaire", "Nach drei Jahren hat sie um eine Gehaltserhöhung gebeten."],
    ["verhandeln (über + Akk.)", "to negotiate", "négocier", "Die Gewerkschaft verhandelt über höhere Löhne."],
    ["die Verantwortung", "responsibility", "la responsabilité", "Als Teamleiter trägt er die Verantwortung für das Projekt."],
    ["das Großraumbüro, -s", "the open-plan office", "l'open space", "Im Großraumbüro ist es oft zu laut."],
    ["die Schichtarbeit", "shift work", "le travail posté, le travail en équipes", "Schichtarbeit kann auf Dauer die Gesundheit belasten."],
    ["der Tarifvertrag, ¨-e", "the collective agreement", "la convention collective", "Der neue Tarifvertrag gilt ab Januar."],
    ["die Belastung, -en", "the strain, the burden", "la charge, la pression", "Die Belastung im Job hat stark zugenommen."],
    ["überlastet", "overloaded, overworked", "surchargé, débordé", "Das Team ist seit Wochen überlastet."]
  ] },
  { id: "buerokommDE", icon: "mail", title: "Formal communication at work", title_fr: "La communication formelle au travail", level: "B2", words: [
    ["das Anliegen, -", "the request, the concern", "la demande, la requête", "Mit welchem Anliegen kommen Sie zu uns?"],
    ["die Beschwerde, -n", "the complaint", "la réclamation, la plainte", "Wir haben Ihre Beschwerde an die zuständige Abteilung weitergeleitet."],
    ["die Rückmeldung, -en", "the feedback, the reply", "le retour, la réponse", "Ich freue mich auf Ihre Rückmeldung."],
    ["die Frist, -en", "the deadline, the time limit", "le délai", "Die Frist endet am 30. Juni."],
    ["genehmigen", "to approve, to authorise", "autoriser, approuver", "Mein Urlaub wurde endlich genehmigt."],
    ["die Genehmigung, -en", "the approval, the permit", "l'autorisation", "Für die Dienstreise brauchen Sie eine Genehmigung."],
    ["das Protokoll, -e", "the minutes (of a meeting)", "le compte rendu, le procès-verbal", "Wer schreibt heute das Protokoll?"],
    ["der Vorgesetzte, -n (die Vorgesetzte)", "the superior, the boss", "le supérieur hiérarchique, la supérieure hiérarchique", "Sprechen Sie zuerst mit Ihrem Vorgesetzten."],
    ["weiterleiten", "to forward", "transférer, transmettre", "Können Sie mir die E-Mail bitte weiterleiten?"],
    ["berücksichtigen", "to take into account", "tenir compte de", "Wir werden Ihre Wünsche gern berücksichtigen."],
    ["die Rücksprache", "consultation", "la concertation", "Nach Rücksprache mit der Chefin kann ich Ihnen den Termin bestätigen."],
    ["verbindlich", "binding, firm", "ferme, qui engage", "Bitte melden Sie sich bis Freitag verbindlich an."],
    ["umsetzen", "to implement, to put into practice", "mettre en œuvre", "Die Idee ist gut, aber schwer umzusetzen."],
    ["der Vorschlag, ¨-e", "the suggestion, the proposal", "la proposition", "Haben Sie einen besseren Vorschlag?"],
    ["sich wenden an (+ Akk.)", "to contact, to turn to", "s'adresser à", "Bei Fragen wenden Sie sich bitte an Frau Brandt."],
    ["zur Verfügung stehen", "to be available", "être à disposition", "Für Rückfragen stehe ich Ihnen gern zur Verfügung."]
  ] });

  W.LESSONS.push(
  {
    id: 76, level: "B2", icon: "list-checks",
    title: "Das muss erledigt werden: the passive with modal verbs", title_fr: "Das muss erledigt werden : le passif avec les verbes de modalité",
    subtitle: "What must, can or should be done, and the difference between an action and its result.", subtitle_fr: "Ce qui doit, peut ou devrait être fait, et la différence entre une action et son résultat.",
    body: `
<h2>The passive with a modal verb</h2>
<p>The modal verb is conjugated, then come the participle and <b>werden</b> at the end: <s-de>Der Antrag muss bis Freitag eingereicht werden.</s-de> (The application must be submitted by Friday.) · <s-de>Das Problem kann schnell gelöst werden.</s-de></p>
<table>
<tr><th>Tense</th><th>Example</th></tr>
<tr><td>present</td><td><s-de>Der Raum muss vorbereitet werden.</s-de></td></tr>
<tr><td>Präteritum</td><td><s-de>Der Raum musste vorbereitet werden.</s-de></td></tr>
<tr><td>subordinate clause</td><td><s-de>…, weil der Raum vorbereitet werden muss.</s-de></td></tr>
<tr><td>Konjunktiv II</td><td><s-de>Der Raum müsste vorbereitet werden.</s-de></td></tr>
</table>
<h2>An action or a result?</h2>
<p>The passive with <s-de>werden</s-de> describes an action (<s-de>Vorgangspassiv</s-de>): <s-de>Das Büro wird um 18 Uhr geschlossen.</s-de> (Someone closes it at six.) The passive with <s-de>sein</s-de> describes the result (<s-de>Zustandspassiv</s-de>): <s-de>Das Büro ist geschlossen.</s-de> (It is closed.)</p>
<p>In the past: <s-de>Das Büro war geschlossen.</s-de> (a state) · <s-de>Das Büro ist geschlossen worden.</s-de> (the Perfekt of the action: <s-de>worden</s-de>, never <s-de>geworden</s-de>).</p>
<div class="tip">In the past, use the Präteritum of the modal: <s-de>Die Verträge konnten nicht verschickt werden.</s-de> The Perfekt (<s-de>haben … verschickt werden können</s-de>) exists, but it's heavy: you can leave it for C1.</div>
`,
    body_fr: `
<h2>Le passif avec un verbe de modalité</h2>
<p>Le verbe de modalité est conjugué, puis viennent le participe et <b>werden</b> à la fin : <s-de>Der Antrag muss bis Freitag eingereicht werden.</s-de> (La demande doit être déposée d'ici vendredi.) · <s-de>Das Problem kann schnell gelöst werden.</s-de></p>
<table>
<tr><th>Temps</th><th>Exemple</th></tr>
<tr><td>présent</td><td><s-de>Der Raum muss vorbereitet werden.</s-de></td></tr>
<tr><td>prétérit</td><td><s-de>Der Raum musste vorbereitet werden.</s-de></td></tr>
<tr><td>subordonnée</td><td><s-de>…, weil der Raum vorbereitet werden muss.</s-de></td></tr>
<tr><td>Konjunktiv II</td><td><s-de>Der Raum müsste vorbereitet werden.</s-de></td></tr>
</table>
<h2>Une action ou un résultat ?</h2>
<p>Le passif avec <s-de>werden</s-de> décrit une action (<s-de>Vorgangspassiv</s-de>) : <s-de>Das Büro wird um 18 Uhr geschlossen.</s-de> (On le ferme à 18 heures.) Le passif avec <s-de>sein</s-de> décrit le résultat (<s-de>Zustandspassiv</s-de>) : <s-de>Das Büro ist geschlossen.</s-de> (Il est fermé.)</p>
<p>Au passé : <s-de>Das Büro war geschlossen.</s-de> (un état) · <s-de>Das Büro ist geschlossen worden.</s-de> (le parfait de l'action : <s-de>worden</s-de>, jamais <s-de>geworden</s-de>).</p>
<div class="tip">Au passé, on prend le prétérit du verbe de modalité : <s-de>Die Verträge konnten nicht verschickt werden.</s-de> Le parfait (<s-de>haben … verschickt werden können</s-de>) existe, mais il est lourd : tu peux le garder pour le C1.</div>
`,
    examples: [
      ["Der Antrag muss bis Freitag eingereicht werden.", "The application must be submitted by Friday.", "La demande doit être déposée d'ici vendredi."],
      ["Das Problem kann leider nicht sofort gelöst werden.", "Unfortunately, the problem can't be solved right away.", "Malheureusement, le problème ne peut pas être résolu tout de suite."],
      ["Die Verträge konnten gestern nicht verschickt werden.", "The contracts couldn't be sent yesterday.", "Les contrats n'ont pas pu être envoyés hier."],
      ["Ich glaube, dass der Termin verschoben werden muss.", "I think the appointment has to be postponed.", "Je crois que le rendez-vous doit être reporté."],
      ["Die Präsentation müsste noch einmal geprüft werden.", "The presentation ought to be checked again.", "La présentation devrait être vérifiée encore une fois."],
      ["Keine Sorge, der Raum ist schon reserviert.", "Don't worry, the room is already booked.", "Pas d'inquiétude, la salle est déjà réservée."],
      ["Die Kantine ist am Wochenende geschlossen.", "The canteen is closed at the weekend.", "La cantine est fermée le week-end."]
    ],
    quiz: [
      { q: "“The form must be filled in.”", q_fr: "« Le formulaire doit être rempli. »", o: ["Das Formular muss ausgefüllt werden.", "Das Formular muss ausgefüllt worden.", "Das Formular wird ausgefüllt müssen."], a: 0, ex: "modal + participle + werden.", ex_fr: "verbe de modalité + participe + werden." },
      { q: "“The contracts couldn't be sent.”", q_fr: "« Les contrats n'ont pas pu être envoyés. »", o: ["Die Verträge konnten nicht verschickt werden.", "Die Verträge wurden nicht verschickt können.", "Die Verträge konnten nicht verschickt geworden."], a: 0, ex: "Präteritum of the modal + participle + werden.", ex_fr: "prétérit du verbe de modalité + participe + werden." },
      { q: "“The shop is closed.” (a state)", q_fr: "« Le magasin est fermé. » (un état)", o: ["Das Geschäft ist geschlossen.", "Das Geschäft wird geschlossen.", "Das Geschäft hat geschlossen worden."], a: 0, ex: "A result: sein + participle (Zustandspassiv).", ex_fr: "Un résultat : sein + participe (Zustandspassiv)." },
      { q: "Ich weiß, dass das Problem schnell gelöst ___.", q_fr: "Ich weiß, dass das Problem schnell gelöst ___.", o: ["werden muss", "muss werden", "worden muss"], a: 0, ex: "Subordinate clause: the modal goes to the very end.", ex_fr: "Subordonnée : le verbe de modalité va tout à la fin." },
      { q: "Das Fenster ist gestern repariert ___.", q_fr: "Das Fenster ist gestern repariert ___.", o: ["worden", "geworden", "werden"], a: 0, ex: "Passive Perfekt: ist … worden.", ex_fr: "Parfait passif : ist … worden." }
    ]
  },
  {
    id: 77, level: "B2", icon: "repeat",
    title: "Das lässt sich lösen: alternatives to the passive", title_fr: "Das lässt sich lösen : les équivalents du passif",
    subtitle: "sich lassen, -bar, sein + zu and man: four ways to vary your style.", subtitle_fr: "sich lassen, -bar, sein + zu et man : quatre façons de varier ton style.",
    body: `
<h2>Four alternatives</h2>
<p>Official and professional texts avoid repeating <s-de>kann / muss … werden</s-de>. These forms say the same thing:</p>
<table>
<tr><th>Form</th><th>Example</th></tr>
<tr><td><s-de>man</s-de></td><td><s-de>Man kann das Problem lösen.</s-de></td></tr>
<tr><td><s-de>sich lassen</s-de> + infinitive</td><td><s-de>Das Problem lässt sich lösen.</s-de></td></tr>
<tr><td>adjective in <s-de>-bar</s-de></td><td><s-de>Das Problem ist lösbar.</s-de></td></tr>
<tr><td><s-de>sein</s-de> + <s-de>zu</s-de> + infinitive</td><td><s-de>Das Problem ist zu lösen.</s-de></td></tr>
</table>
<p>The last three all mean <s-de>Das Problem kann gelöst werden.</s-de></p>
<h2>sein + zu: can or must?</h2>
<p><s-de>sein + zu</s-de> means "can" or "must", depending on the context: <s-de>Der Antrag ist bis Freitag einzureichen.</s-de> (must: an instruction) · <s-de>Der Lärm ist kaum zu ertragen.</s-de> (can: it's hardly bearable). With separable verbs, <s-de>zu</s-de> goes in the middle: <s-de>einzureichen, auszufüllen</s-de>.</p>
<h2>-bar and un-…-bar</h2>
<p><s-de>machbar</s-de> (feasible), <s-de>erreichbar</s-de> (reachable), <s-de>vermeidbar</s-de> (avoidable) → <s-de>unvermeidbar</s-de> (unavoidable), <s-de>unbezahlbar</s-de> (unaffordable, or priceless).</p>
<div class="tip">You'll meet <s-de>sein + zu</s-de> above all in rules and on forms: <s-de>Das Formular ist vollständig auszufüllen.</s-de> It sounds official: in conversation, <s-de>man muss</s-de> is more natural.</div>
`,
    body_fr: `
<h2>Quatre équivalents</h2>
<p>Les textes officiels et professionnels évitent de répéter <s-de>kann / muss … werden</s-de>. Ces formes disent la même chose :</p>
<table>
<tr><th>Forme</th><th>Exemple</th></tr>
<tr><td><s-de>man</s-de></td><td><s-de>Man kann das Problem lösen.</s-de></td></tr>
<tr><td><s-de>sich lassen</s-de> + infinitif</td><td><s-de>Das Problem lässt sich lösen.</s-de></td></tr>
<tr><td>adjectif en <s-de>-bar</s-de></td><td><s-de>Das Problem ist lösbar.</s-de></td></tr>
<tr><td><s-de>sein</s-de> + <s-de>zu</s-de> + infinitif</td><td><s-de>Das Problem ist zu lösen.</s-de></td></tr>
</table>
<p>Les trois dernières veulent toutes dire <s-de>Das Problem kann gelöst werden.</s-de> (Le problème peut être résolu.) Le français a d'ailleurs les mêmes ressources : « ça se règle », « c'est soluble », « c'est à régler ».</p>
<h2>sein + zu : pouvoir ou devoir ?</h2>
<p><s-de>sein + zu</s-de> veut dire « pouvoir » ou « devoir », selon le contexte : <s-de>Der Antrag ist bis Freitag einzureichen.</s-de> (devoir : une consigne, « est à déposer ») · <s-de>Der Lärm ist kaum zu ertragen.</s-de> (pouvoir : le bruit est à peine supportable). Avec les verbes séparables, <s-de>zu</s-de> se glisse au milieu : <s-de>einzureichen, auszufüllen</s-de>.</p>
<h2>-bar et un-…-bar</h2>
<p><s-de>machbar</s-de> (faisable), <s-de>erreichbar</s-de> (joignable, accessible), <s-de>vermeidbar</s-de> (évitable) → <s-de>unvermeidbar</s-de> (inévitable), <s-de>unbezahlbar</s-de> (inabordable, ou inestimable).</p>
<div class="tip">Tu rencontreras <s-de>sein + zu</s-de> surtout dans les règlements et sur les formulaires : <s-de>Das Formular ist vollständig auszufüllen.</s-de> C'est un ton officiel : à l'oral, <s-de>man muss</s-de> est plus naturel.</div>
`,
    examples: [
      ["Das Problem lässt sich bestimmt lösen.", "The problem can certainly be solved.", "Le problème peut sûrement se régler."],
      ["Dieser Fehler war leider nicht zu vermeiden.", "Unfortunately, this mistake couldn't be avoided.", "Malheureusement, cette erreur était inévitable."],
      ["Urlaubsanträge sind zwei Wochen im Voraus einzureichen.", "Holiday requests must be submitted two weeks in advance.", "Les demandes de congé sont à déposer deux semaines à l'avance."],
      ["Das Projekt ist in drei Monaten kaum machbar.", "The project is hardly feasible in three months.", "Le projet est difficilement faisable en trois mois."],
      ["Die Chefin ist heute nur per E-Mail erreichbar.", "The boss can only be reached by email today.", "La cheffe n'est joignable que par e-mail aujourd'hui."],
      ["Die Mieten in der Innenstadt sind fast unbezahlbar.", "Rents in the city centre are almost unaffordable.", "Les loyers du centre-ville sont presque inabordables."],
      ["Das Fenster lässt sich nicht mehr öffnen.", "The window won't open any more.", "La fenêtre ne s'ouvre plus."]
    ],
    quiz: [
      { q: "“Das Problem lässt sich lösen.” means:", q_fr: "« Das Problem lässt sich lösen. » veut dire :", o: ["The problem can be solved.", "The problem has to be solved.", "Someone lets the problem be."], o_fr: ["Le problème peut être résolu.", "Le problème doit être résolu.", "Quelqu'un laisse le problème de côté."], a: 0, ex: "sich lassen + infinitive = can be …", ex_fr: "sich lassen + infinitif = peut être …" },
      { q: "“The application must be submitted by Friday.” (sein + zu)", q_fr: "« La demande est à déposer d'ici vendredi. » (sein + zu)", o: ["Der Antrag ist bis Freitag einzureichen.", "Der Antrag ist bis Freitag zu einreichen.", "Der Antrag hat bis Freitag einzureichen."], a: 0, ex: "Separable verb: ein-zu-reichen.", ex_fr: "Verbe séparable : ein-zu-reichen." },
      { q: "Something that can't be avoided is…", q_fr: "Quelque chose qu'on ne peut pas éviter est…", o: ["unvermeidbar", "vermeidbar", "unvermeidlos"], a: 0, ex: "un- + vermeid + -bar.", ex_fr: "un- + vermeid + -bar." },
      { q: "“Der Lärm ist kaum zu ertragen.” means:", q_fr: "« Der Lärm ist kaum zu ertragen. » veut dire :", o: ["The noise is hardly bearable.", "The noise must be borne.", "The noise is too far away."], o_fr: ["Le bruit est à peine supportable.", "Il faut supporter le bruit.", "Le bruit est trop loin."], a: 0, ex: "Here sein + zu = can.", ex_fr: "Ici, sein + zu = pouvoir." },
      { q: "Which sentence does NOT mean “the plan can be put into practice”?", q_fr: "Quelle phrase ne veut PAS dire « le plan peut être mis en œuvre » ?", o: ["Der Plan muss umgesetzt werden.", "Der Plan lässt sich umsetzen.", "Der Plan ist umsetzbar."], a: 0, ex: "muss … werden = must, not can.", ex_fr: "muss … werden = devoir, pas pouvoir." }
    ]
  },
  {
    id: 78, level: "B2", kind: "functional", icon: "mail",
    title: "Everyday German: a formal message at work", title_fr: "L'allemand de tous les jours : le message formel au travail",
    subtitle: "Write to a manager or a department politely, clearly and in the right order.", subtitle_fr: "Écrire à une supérieure ou à un service avec politesse, clarté et dans le bon ordre.",
    body: `
<h2>The structure</h2>
<p><b>Betreff</b> (subject line) · <b>greeting</b>: <s-de>Sehr geehrte Frau Dr. Brandt,</s-de> / <s-de>Sehr geehrter Herr Wolf,</s-de> / <s-de>Sehr geehrte Damen und Herren,</s-de> After the comma, carry on with a small letter (unless the word is a noun or <s-de>Sie</s-de>).</p>
<h2>Useful phrases</h2>
<table>
<tr><th>To…</th><th>German</th></tr>
<tr><td>give the reason</td><td><s-de>Ich wende mich an Sie, weil…</s-de> · <s-de>Bezug nehmend auf Ihre E-Mail vom 3. Mai…</s-de></td></tr>
<tr><td>explain a problem</td><td><s-de>Leider hat sich gezeigt, dass…</s-de></td></tr>
<tr><td>ask</td><td><s-de>Ich möchte Sie bitten, … zu…</s-de> · <s-de>Wäre es möglich, …?</s-de> · <s-de>Könnten Sie mir bitte mitteilen, …?</s-de></td></tr>
<tr><td>suggest</td><td><s-de>Ich schlage vor, dass…</s-de> · <s-de>Eine mögliche Lösung wäre…</s-de></td></tr>
<tr><td>close</td><td><s-de>Für Rückfragen stehe ich Ihnen gern zur Verfügung.</s-de> · <s-de>Ich freue mich auf Ihre Rückmeldung.</s-de></td></tr>
</table>
<p>Then <s-de>Mit freundlichen Grüßen</s-de> (no comma) and your name.</p>
<div class="tip">In the Goethe B2 exam (writing, part 2), you write a formal message of about 100 words in 25 minutes. What counts: every point of the task, a polite tone (Konjunktiv II: <s-de>könnten, wäre, würde</s-de>) and a clear structure. Never <s-de>Hallo</s-de> or <s-de>du</s-de> in a message like this.</div>
`,
    body_fr: `
<h2>La structure</h2>
<p><b>Betreff</b> (objet) · <b>appel</b> : <s-de>Sehr geehrte Frau Dr. Brandt,</s-de> / <s-de>Sehr geehrter Herr Wolf,</s-de> / <s-de>Sehr geehrte Damen und Herren,</s-de> Après la virgule, on continue avec une minuscule (sauf pour un nom ou <s-de>Sie</s-de>).</p>
<h2>Les formules utiles</h2>
<table>
<tr><th>Pour…</th><th>En allemand</th></tr>
<tr><td>donner le motif</td><td><s-de>Ich wende mich an Sie, weil…</s-de> · <s-de>Bezug nehmend auf Ihre E-Mail vom 3. Mai…</s-de></td></tr>
<tr><td>exposer un problème</td><td><s-de>Leider hat sich gezeigt, dass…</s-de></td></tr>
<tr><td>demander</td><td><s-de>Ich möchte Sie bitten, … zu…</s-de> · <s-de>Wäre es möglich, …?</s-de> · <s-de>Könnten Sie mir bitte mitteilen, …?</s-de></td></tr>
<tr><td>proposer</td><td><s-de>Ich schlage vor, dass…</s-de> · <s-de>Eine mögliche Lösung wäre…</s-de></td></tr>
<tr><td>conclure</td><td><s-de>Für Rückfragen stehe ich Ihnen gern zur Verfügung.</s-de> · <s-de>Ich freue mich auf Ihre Rückmeldung.</s-de></td></tr>
</table>
<p>Puis <s-de>Mit freundlichen Grüßen</s-de> (sans virgule) et ton nom.</p>
<div class="tip">À l'examen du Goethe B2 (écrit, partie 2), tu rédiges un message formel d'environ 100 mots en 25 minutes. Ce qui compte : traiter tous les points de la consigne, un ton poli (Konjunktiv II : <s-de>könnten, wäre, würde</s-de>) et une structure claire. Jamais de <s-de>Hallo</s-de> ni de <s-de>du</s-de> dans ce genre de message.</div>
`,
    examples: [
      ["Ich wende mich an Sie, weil ich eine Frage zu meiner Arbeitszeit habe.", "I'm writing to you because I have a question about my working hours.", "Je m'adresse à vous parce que j'ai une question sur mes horaires de travail."],
      ["Bezug nehmend auf Ihre E-Mail vom 3. Mai möchte ich Ihnen mitteilen, dass…", "With reference to your email of 3 May, I would like to inform you that…", "Suite à votre e-mail du 3 mai, je souhaite vous informer que…"],
      ["Leider hat sich gezeigt, dass der Drucker im zweiten Stock oft nicht funktioniert.", "Unfortunately, it has turned out that the printer on the second floor often doesn't work.", "Malheureusement, il s'est avéré que l'imprimante du deuxième étage tombe souvent en panne."],
      ["Wäre es möglich, die Besprechung auf Donnerstag zu verschieben?", "Would it be possible to move the meeting to Thursday?", "Serait-il possible de reporter la réunion à jeudi ?"],
      ["Könnten Sie mir bitte mitteilen, bis wann die Unterlagen vorliegen müssen?", "Could you please let me know by when the documents must be in?", "Pourriez-vous m'indiquer jusqu'à quand les documents doivent être remis ?"],
      ["Eine mögliche Lösung wäre ein gemeinsamer Kalender für das ganze Team.", "One possible solution would be a shared calendar for the whole team.", "Une solution possible serait un agenda commun pour toute l'équipe."],
      ["Für Rückfragen stehe ich Ihnen gern zur Verfügung.", "I'm happy to answer any further questions.", "Je reste à votre disposition pour toute question."]
    ],
    quiz: [
      { q: "Which greeting fits a formal message to an unknown department?", q_fr: "Quel appel convient pour un message formel à un service inconnu ?", o: ["Sehr geehrte Damen und Herren,", "Hallo zusammen,", "Liebe Leute,"], a: 0, ex: "The standard formal greeting.", ex_fr: "L'appel formel standard." },
      { q: "“Would it be possible to postpone the appointment?”", q_fr: "« Serait-il possible de reporter le rendez-vous ? »", o: ["Wäre es möglich, den Termin zu verschieben?", "Ist es möglich, den Termin verschieben?", "Wäre es möglich, dass den Termin verschieben?"], a: 0, ex: "Wäre es möglich, … zu + infinitive?", ex_fr: "Wäre es möglich, … zu + infinitif ?" },
      { q: "“I'm happy to answer any questions.”", q_fr: "« Je reste à votre disposition pour toute question. »", o: ["Für Rückfragen stehe ich Ihnen gern zur Verfügung.", "Für Rückfragen bin ich Ihnen gern zur Verfügung.", "Für Rückfragen stehe ich Sie gern zur Verfügung."], a: 0, ex: "jemandem (dative) zur Verfügung stehen.", ex_fr: "jemandem (datif) zur Verfügung stehen." },
      { q: "Which sign-off is correct?", q_fr: "Quelle formule finale est correcte ?", o: ["Mit freundlichen Grüßen", "Mit freundlichen Grüßen,", "Mit freundliche Grüße"], a: 0, ex: "No comma after the sign-off.", ex_fr: "Pas de virgule après la formule finale." },
      { q: "In the Goethe B2 formal message, you should write about…", q_fr: "Pour le message formel du Goethe B2, il faut écrire environ…", o: ["100 words", "30 words", "300 words"], o_fr: ["100 mots", "30 mots", "300 mots"], a: 0, ex: "About 100 words in 25 minutes.", ex_fr: "Environ 100 mots en 25 minutes." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    76: {
      gap: [["Der Antrag muss bis Freitag eingereicht ___.", "werden"], ["Die Verträge ___ gestern nicht verschickt werden. (können)", "konnten"], ["Das Büro ___ schon geschlossen. Wir kommen zu spät.", "ist", "a state, a result", "un état, un résultat"], ["Das Fenster ist gestern repariert ___.", "worden"]],
      fix: [["Das Problem muss schnell gelöst worden.", "Das Problem muss schnell gelöst werden.", "With a modal verb: werden, not worden.", "Avec un verbe de modalité : werden, pas worden."], ["Die Tür ist gestern geschlossen geworden.", "Die Tür ist gestern geschlossen worden.", "Passive Perfekt: worden, not geworden.", "Parfait passif : worden, pas geworden."]],
      task: ["Your team is preparing a trade fair. Write five things that must or should be done, using the passive with modal verbs.", "Ton équipe prépare un salon professionnel. Écris cinq choses qui doivent ou devraient être faites, au passif avec des verbes de modalité.", "Der Stand muss bis Mittwoch aufgebaut werden. Die Prospekte müssen noch gedruckt werden. Die Kunden sollten persönlich eingeladen werden. Das Hotel kann noch heute gebucht werden. Und die Präsentation müsste noch einmal geprüft werden."]
    },
    77: {
      gap: [["Das Problem lässt ___ lösen.", "sich"], ["Der Antrag ist bis Freitag ___. (einreichen)", "einzureichen"], ["Dieser Plan ist leider nicht ___. (machen)", "machbar"], ["Das Formular ist vollständig ___. (ausfüllen)", "auszufüllen"]],
      fix: [["Das lässt sich nicht ändern werden.", "Das lässt sich nicht ändern.", "sich lassen + infinitive alone: no werden.", "sich lassen + infinitif seul : pas de werden."], ["Der Antrag ist bis Montag zu einreichen.", "Der Antrag ist bis Montag einzureichen.", "Separable verb: zu goes between the prefix and the verb.", "Verbe séparable : zu se place entre la particule et le verbe."]],
      task: ["Rewrite these company rules with four different forms (sein + zu, man, sich lassen, -bar): holiday requests must be submitted two weeks in advance; the printer can be used freely; the problem can't be solved quickly; the IT team can be reached by phone.", "Réécris ces règles d'entreprise avec quatre formes différentes (sein + zu, man, sich lassen, -bar) : les demandes de congé doivent être déposées deux semaines à l'avance ; l'imprimante peut être utilisée librement ; le problème ne peut pas être résolu rapidement ; l'équipe informatique peut être jointe par téléphone.", "Urlaubsanträge sind zwei Wochen im Voraus einzureichen. Den Drucker kann man frei benutzen. Das Problem lässt sich nicht schnell lösen. Das IT-Team ist telefonisch erreichbar."]
    },
    78: {
      gap: [["Ich ___ mich an Sie, weil ich eine Frage zur Arbeitszeit habe.", "wende"], ["___ es möglich, den Termin zu verschieben?", "Wäre"], ["Für Rückfragen stehe ich Ihnen gern zur ___.", "Verfügung"], ["Ich freue mich auf Ihre ___.", "Rückmeldung"]],
      fix: [["Sehr geehrte Frau Brandt, Ich schreibe Ihnen wegen des Umzugs.", "Sehr geehrte Frau Brandt, ich schreibe Ihnen wegen des Umzugs.", "After the comma of the greeting, carry on with a small letter.", "Après la virgule de l'appel, on continue avec une minuscule."], ["Könnten Sie mir bitte mitteilen, wann ist die Besprechung?", "Könnten Sie mir bitte mitteilen, wann die Besprechung ist?", "Indirect question: the verb goes at the end.", "Interrogative indirecte : le verbe va à la fin."]],
      task: ["Write a short formal message (about 60 words) to the HR department: you'd like to attend a training course in March; ask whether the company can pay for it and whether you can have two days off for it.", "Écris un court message formel (environ 60 mots) au service du personnel : tu voudrais suivre une formation en mars ; demande si l'entreprise peut la financer et si tu peux avoir deux jours de congé pour la suivre.", "Sehr geehrte Damen und Herren, ich wende mich an Sie, weil ich im März gern an einer Weiterbildung zum Projektmanagement teilnehmen würde. Könnten Sie mir bitte mitteilen, ob die Kosten von der Firma übernommen werden können? Außerdem möchte ich Sie bitten, mir für den Kurs zwei Tage freizugeben. Mit freundlichen Grüßen, Robin Keller"]
    }
  });

  W.ROLEPLAYS.push(
  { id: "teamsitzung", lesson: 76, level: "B2", icon: "users", partner: "Jens", role: "your team leader", role_fr: "ton chef d'équipe",
    title: "What still needs doing?", title_fr: "Qu'est-ce qui reste à faire ?",
    setting: "Tomorrow an important client from Vienna is visiting. At the end of the day, your team leader Jens goes through the list with you.", setting_fr: "Demain, un client important vient de Vienne. En fin de journée, ton chef d'équipe Jens passe la liste en revue avec toi.",
    turns: [
      { p: "Morgen kommt der Kunde aus Wien. Was muss noch erledigt werden?", en: "The client from Vienna is coming tomorrow. What still needs to be done?", fr: "Le client de Vienne arrive demain. Qu'est-ce qui reste à faire ?" },
      { y: ["Der Besprechungsraum muss noch vorbereitet werden.", "Der Besprechungsraum muss noch vorbereitet worden.", "Der Besprechungsraum muss noch vorbereiten werden."], en: "The meeting room still needs to be prepared.", fr: "La salle de réunion doit encore être préparée.", why: "Modal + participle + werden.", why_fr: "Verbe de modalité + participe + werden." },
      { p: "Und die Präsentation? Ist die fertig?", en: "And the presentation? Is it ready?", fr: "Et la présentation ? Elle est prête ?" },
      { y: ["Ja, die ist fertig. Sie wurde gestern von Lea korrigiert.", "Ja, die ist fertig. Sie wurde gestern von Lea korrigieren.", "Ja, die ist fertig. Sie wurde gestern von Lea korrigiert worden."], en: "Yes, it's ready. Lea corrected it yesterday.", fr: "Oui, elle est prête. Lea l'a corrigée hier.", why: "Passive Präteritum: wurde + participle; the person: von + dative.", why_fr: "Passif au prétérit : wurde + participe ; la personne : von + datif." },
      { p: "Gut. Was ist mit dem Mittagessen?", en: "Good. What about lunch?", fr: "Bien. Et le déjeuner ?" },
      { y: ["Das Restaurant ist reserviert, aber die Zahl der Gäste muss noch bestätigt werden.", "Das Restaurant wird reserviert gewesen, aber die Zahl der Gäste muss noch bestätigt werden.", "Das Restaurant ist reserviert, aber die Zahl der Gäste muss noch bestätigen werden."], en: "The restaurant is booked, but the number of guests still has to be confirmed.", fr: "Le restaurant est réservé, mais le nombre d'invités doit encore être confirmé.", why: "A state: ist reserviert; then modal + participle + werden.", why_fr: "Un état : ist reserviert ; puis verbe de modalité + participe + werden." },
      { p: "Und die Verträge? Die sollten doch schon letzte Woche verschickt werden.", en: "And the contracts? They were supposed to go out last week.", fr: "Et les contrats ? Ils devaient être envoyés dès la semaine dernière." },
      { y: ["Stimmt, aber sie konnten nicht verschickt werden, weil noch eine Unterschrift fehlt.", "Stimmt, aber sie konnten nicht verschickt worden, weil noch eine Unterschrift fehlt.", "Stimmt, aber sie konnten nicht verschickt werden, weil fehlt noch eine Unterschrift."], en: "That's right, but they couldn't be sent because a signature is still missing.", fr: "C'est vrai, mais ils n'ont pas pu être envoyés parce qu'il manque encore une signature.", why: "konnten … verschickt werden; weil: the verb at the end.", why_fr: "konnten … verschickt werden ; weil : le verbe à la fin." },
      { p: "Kann das heute noch erledigt werden?", en: "Can that still be done today?", fr: "Est-ce que ça peut encore être fait aujourd'hui ?" },
      { y: ["Ja, das lässt sich bestimmt machen. Ich rufe gleich die Chefin an.", "Ja, das lässt bestimmt sich machen. Ich rufe gleich die Chefin an.", "Ja, das lässt sich bestimmt gemacht. Ich rufe gleich die Chefin an."], en: "Yes, that can certainly be done. I'll call the boss right away.", fr: "Oui, ça peut sûrement se faire. J'appelle la cheffe tout de suite.", why: "sich lassen + infinitive; sich comes straight after the verb.", why_fr: "sich lassen + infinitif ; sich vient juste après le verbe." }
    ] },
  { id: "homeofficeantrag", lesson: 78, level: "B2", icon: "handshake", partner: "Frau Brandt", role: "your manager", role_fr: "ta supérieure",
    title: "Asking for home-office days", title_fr: "Demander des jours de télétravail",
    setting: "Since you moved house, the journey to work takes a long time. You ask your manager, Frau Brandt, whether you could work from home two days a week.", setting_fr: "Depuis ton déménagement, le trajet jusqu'au travail est long. Tu demandes à ta supérieure, Frau Brandt, si tu pourrais travailler deux jours par semaine depuis chez toi.",
    turns: [
      { p: "Kommen Sie herein. Worum geht es?", en: "Come in. What's it about?", fr: "Entrez. De quoi s'agit-il ?" },
      { y: ["Ich möchte Sie um etwas bitten: Wäre es möglich, zwei Tage pro Woche im Homeoffice zu arbeiten?", "Ich möchte Sie um etwas bitten: Wäre es möglich, zwei Tage pro Woche im Homeoffice arbeiten?", "Ich möchte dich um etwas bitten: Wäre es möglich, zwei Tage pro Woche im Homeoffice zu arbeiten?"], en: "I'd like to ask you something: would it be possible to work from home two days a week?", fr: "J'aimerais vous demander quelque chose : serait-il possible de travailler deux jours par semaine en télétravail ?", why: "Wäre es möglich, … zu + infinitive; with your manager: Sie.", why_fr: "Wäre es möglich, … zu + infinitif ; avec ta supérieure : Sie." },
      { p: "Hm. Und warum gerade jetzt?", en: "Hm. And why now?", fr: "Hum. Et pourquoi maintenant ?" },
      { y: ["Seit dem Umzug brauche ich fast zwei Stunden für den Weg. Zu Hause könnte ich diese Zeit sinnvoller nutzen.", "Seit dem Umzug ich brauche fast zwei Stunden für den Weg. Zu Hause könnte ich diese Zeit sinnvoller nutzen.", "Seit dem Umzug brauche ich fast zwei Stunden für den Weg. Zu Hause kann ich diese Zeit sinnvoller nutzen würde."], en: "Since I moved, the journey takes me almost two hours. At home I could use that time more sensibly.", fr: "Depuis mon déménagement, il me faut presque deux heures de trajet. Chez moi, je pourrais utiliser ce temps plus utilement.", why: "The verb comes second after Seit dem Umzug; könnte for a hypothesis.", why_fr: "Le verbe en deuxième position après Seit dem Umzug ; könnte pour une hypothèse." },
      { p: "Ich verstehe. Aber wie soll die Zusammenarbeit mit dem Team funktionieren?", en: "I see. But how is working with the team supposed to work?", fr: "Je comprends. Mais comment le travail avec l'équipe va-t-il fonctionner ?" },
      { y: ["Ich bin jederzeit erreichbar, und die Teambesprechungen lassen sich auch online durchführen.", "Ich bin jederzeit erreichbar, und die Teambesprechungen lassen sich auch online durchgeführt.", "Ich bin jederzeit erreichbar, und die Teambesprechungen lassen auch online sich durchführen."], en: "I can be reached at any time, and team meetings can be held online too.", fr: "Je suis joignable à tout moment, et les réunions d'équipe peuvent aussi se faire en ligne.", why: "sich lassen + infinitive (durchführen).", why_fr: "sich lassen + infinitif (durchführen)." },
      { p: "Das klingt vernünftig. Allerdings muss das noch mit dem Betriebsrat abgestimmt werden.", en: "That sounds reasonable. However, it still has to be agreed with the works council.", fr: "Ça paraît raisonnable. Mais il faut encore en convenir avec le comité d'entreprise." },
      { y: ["Selbstverständlich. Sollen die Details schriftlich festgehalten werden?", "Selbstverständlich. Sollen die Details schriftlich festgehalten worden?", "Selbstverständlich. Sollen die Details schriftlich festhalten werden?"], en: "Of course. Should the details be put in writing?", fr: "Bien entendu. Faut-il mettre les détails par écrit ?", why: "Modal + participle (festgehalten) + werden.", why_fr: "Verbe de modalité + participe (festgehalten) + werden." },
      { p: "Ja, schicken Sie mir bitte bis Freitag einen kurzen Antrag.", en: "Yes, please send me a short written request by Friday.", fr: "Oui, envoyez-moi une courte demande écrite d'ici vendredi." },
      { y: ["Gern. Vielen Dank, dass Sie sich Zeit genommen haben.", "Gern. Vielen Dank, dass Sie sich Zeit genommen hast.", "Gern. Vielen Dank, dass Sie haben sich Zeit genommen."], en: "Gladly. Thank you for taking the time.", fr: "Volontiers. Merci d'avoir pris le temps.", why: "dass: the verb at the end; Sie → haben.", why_fr: "dass : le verbe à la fin ; Sie → haben." }
    ] }
  );

  W.READINGS.push({
    id: "mitbestimmung", level: "B2", icon: "book-open", title: "Mitbestimmung: Wenn die Belegschaft mitredet", genre: "Explainer",
    intro: "In German companies, employees often have a say in decisions. How co-determination works, and where it stops.",
    intro_fr: "Dans les entreprises allemandes, les salariés ont souvent leur mot à dire. Comment fonctionne la cogestion, et où elle s'arrête.",
    paragraphs: [
      { de: "In vielen deutschen Betrieben gibt es neben der Geschäftsleitung eine gewählte Vertretung der Beschäftigten: den Betriebsrat. Seine Grundlage ist das Betriebsverfassungsgesetz, das 1952 beschlossen und 1972 grundlegend erneuert wurde. Ein Betriebsrat kann in jedem Betrieb mit mindestens fünf ständigen wahlberechtigten Beschäftigten gewählt werden.", en: "In many German companies, alongside the management, there is an elected body representing the employees: the works council. It is based on the Works Constitution Act, which was passed in 1952 and fundamentally revised in 1972. A works council can be elected in any establishment with at least five permanent employees entitled to vote.", fr: "Dans beaucoup d'entreprises allemandes, il existe à côté de la direction une représentation élue des salariés : le comité d'entreprise (Betriebsrat). Il repose sur la loi sur l'organisation des entreprises, adoptée en 1952 et profondément remaniée en 1972. Un comité peut être élu dans tout établissement comptant au moins cinq salariés permanents ayant le droit de vote." },
      { de: "Die regelmäßigen Wahlen finden alle vier Jahre statt. Das Gesetz verlangt, dass Arbeitgeber und Betriebsrat vertrauensvoll zusammenarbeiten. Bei manchen Fragen darf der Arbeitgeber aber nicht allein entscheiden: Beginn und Ende der täglichen Arbeitszeit oder die Verteilung der Pausen müssen zum Beispiel mit dem Betriebsrat vereinbart werden.", en: "Regular elections take place every four years. The law requires the employer and the works council to work together in a spirit of trust. On some questions, however, the employer may not decide alone: the start and end of the working day or how breaks are distributed, for example, have to be agreed with the works council.", fr: "Les élections ordinaires ont lieu tous les quatre ans. La loi exige que l'employeur et le comité coopèrent en toute confiance. Sur certaines questions, l'employeur ne peut toutefois pas décider seul : le début et la fin de la journée de travail ou la répartition des pauses, par exemple, doivent être fixés en accord avec le comité." },
      { de: "In großen Unternehmen geht die Mitbestimmung noch weiter. Nach dem Mitbestimmungsgesetz von 1976 sitzen in Kapitalgesellschaften mit mehr als 2000 Beschäftigten gleich viele Vertreter der Arbeitnehmer und der Anteilseigner im Aufsichtsrat. Bei einem Patt entscheidet allerdings die Stimme des Vorsitzenden, der in der Praxis von der Seite der Anteilseigner bestimmt wird. In der Kohle- und Stahlindustrie gilt schon seit 1951 eine eigene, noch stärkere Form der Mitbestimmung.", en: "In large companies, co-determination goes even further. Under the Co-determination Act of 1976, in corporations with more than 2,000 employees, the supervisory board has equal numbers of employee and shareholder representatives. In a tie, however, the chair has the deciding vote, and in practice the chair is chosen by the shareholders' side. In the coal and steel industry, a separate and even stronger form of co-determination has applied since 1951.", fr: "Dans les grandes entreprises, la cogestion va encore plus loin. Selon la loi sur la cogestion de 1976, les sociétés de capitaux de plus de 2 000 salariés ont un conseil de surveillance où siègent autant de représentants des salariés que des actionnaires. En cas d'égalité, c'est toutefois la voix du président qui l'emporte, et celui-ci est en pratique désigné par le côté des actionnaires. Dans l'industrie du charbon et de l'acier, une forme propre et encore plus poussée de cogestion s'applique depuis 1951." },
      { de: "Ein Betriebsrat entsteht allerdings nicht automatisch: Die Beschäftigten müssen die Wahl selbst organisieren. Gerade in kleinen Firmen gibt es deshalb oft keinen. Befürworter sehen in der Mitbestimmung einen Grund für den sozialen Frieden in deutschen Betrieben; Kritiker halten sie für zu bürokratisch und zu langsam.", en: "A works council doesn't appear automatically, though: the employees have to organise the election themselves. That's why small firms in particular often don't have one. Supporters see co-determination as one reason for social peace in German companies; critics consider it too bureaucratic and too slow.", fr: "Un comité ne naît pourtant pas tout seul : les salariés doivent organiser eux-mêmes l'élection. C'est pourquoi les petites entreprises, en particulier, n'en ont souvent pas. Ses partisans voient dans la cogestion l'une des raisons de la paix sociale dans les entreprises allemandes ; ses critiques la jugent trop bureaucratique et trop lente." }
    ],
    glossary: { "Betrieben": ["companies, workplaces", "entreprises, établissements"], "Geschäftsleitung": ["management", "direction"], "gewählte": ["elected", "élue"], "Vertretung": ["representation", "représentation"], "Beschäftigten": ["employees", "salariés"], "Grundlage": ["basis", "fondement"], "Betriebsverfassungsgesetz": ["Works Constitution Act", "loi sur l'organisation des entreprises"], "beschlossen": ["passed, decided", "adopté, décidé"], "grundlegend": ["fundamentally", "profondément"], "erneuert": ["renewed, revised", "renouvelé, remanié"], "ständigen": ["permanent", "permanents"], "wahlberechtigten": ["entitled to vote", "ayant le droit de vote"], "verlangt": ["requires", "exige"], "vertrauensvoll": ["in a spirit of trust", "en toute confiance"], "zusammenarbeiten": ["to work together", "coopérer"], "Verteilung": ["distribution", "répartition"], "vereinbart": ["agreed", "convenu"], "Unternehmen": ["companies", "entreprises"], "Mitbestimmungsgesetz": ["Co-determination Act", "loi sur la cogestion"], "Kapitalgesellschaften": ["corporations", "sociétés de capitaux"], "Anteilseigner": ["shareholders", "actionnaires"], "Aufsichtsrat": ["supervisory board", "conseil de surveillance"], "Patt": ["tie, deadlock", "égalité des voix"], "Vorsitzenden": ["chair", "président"], "Kohle": ["coal", "charbon"], "Stahlindustrie": ["steel industry", "industrie de l'acier"], "entsteht": ["comes into being", "naît"], "Befürworter": ["supporters", "partisans"], "Frieden": ["peace", "paix"], "bürokratisch": ["bureaucratic", "bureaucratique"] },
    questions: [
      { q: "Wann wurde das Betriebsverfassungsgesetz grundlegend erneuert?", o: ["1972", "1952", "1976"], a: 0 },
      { q: "Ab wie vielen ständigen wahlberechtigten Beschäftigten kann ein Betriebsrat gewählt werden?", o: ["Ab fünf", "Ab zwanzig", "Ab zweitausend"], a: 0 },
      { q: "Was muss zum Beispiel mit dem Betriebsrat vereinbart werden?", o: ["Beginn und Ende der täglichen Arbeitszeit", "Der Preis der Produkte", "Die Wahl des Aufsichtsratsvorsitzenden"], a: 0 },
      { q: "Was passiert im Aufsichtsrat bei einem Patt?", o: ["Die Stimme des Vorsitzenden entscheidet.", "Die Arbeitnehmer entscheiden allein.", "Es gibt eine neue Wahl."], a: 0 },
      { q: "Warum gibt es in kleinen Firmen oft keinen Betriebsrat?", o: ["Die Beschäftigten müssen die Wahl selbst organisieren.", "Das Gesetz verbietet es.", "Kleine Firmen haben keine Pausen."], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-b2-2", unit: "b2-2", level: "B2", icon: "users",
    title: "Das neue Großraumbüro", title_fr: "Le nouvel open space",
    context: "At a team meeting, the manager Frau Brandt announces a change. Afterwards, two colleagues, Katrin and Olaf, talk about it.", context_fr: "En réunion d'équipe, la responsable, Frau Brandt, annonce un changement. Ensuite, deux collègues, Katrin et Olaf, en discutent.",
    words: [["verlegen", "to move, to relocate", "déplacer, transférer"], ["umbauen", "to convert, to rebuild", "transformer, réaménager"], ["einsehen", "to look at, to consult (documents)", "consulter"], ["der Ruheraum", "the quiet room", "la salle de calme"], ["absprechen", "to agree on, to discuss", "convenir de, se concerter"]],
    lines: [["Frau Brandt", "Ich habe eine wichtige Information für Sie alle. Ab März wird unsere Abteilung in den dritten Stock verlegt. Die alten Einzelbüros werden zu einem Großraumbüro umgebaut.", "de-DE"], ["Frau Brandt", "Die Pläne können ab Montag im Intranet eingesehen werden. Wünsche und Vorschläge sind bis zum 15. Februar bei mir einzureichen.", "de-DE"], ["Olaf", "Ein Großraumbüro? Da kann man sich doch überhaupt nicht konzentrieren.", "de-DE"], ["Katrin", "Warte mal. Das lässt sich vielleicht lösen. In anderen Firmen gibt es Ruheräume für Telefonate.", "de-DE"], ["Olaf", "Und wenn alle gleichzeitig telefonieren müssen? Das ist doch nicht machbar.", "de-DE"], ["Katrin", "Wir könnten feste Homeoffice-Tage vorschlagen. Dann wäre das Büro nie ganz voll.", "de-DE"], ["Olaf", "Gute Idee. Aber so etwas muss bestimmt mit dem Betriebsrat abgesprochen werden.", "de-DE"], ["Katrin", "Genau. Ich schreibe heute noch eine Mail an Frau Brandt. Liest du sie vorher?", "de-DE"]],
    gist: ["Worum geht es in dem Gespräch?", ["Um den Umbau der Büros zu einem Großraumbüro", "Um eine Gehaltserhöhung", "Um eine Dienstreise"]],
    detail: [["Ab wann zieht die Abteilung um?", ["Ab März", "Ab Februar", "Ab Montag"]], ["Wo kann man die Pläne sehen?", ["Im Intranet", "Im Büro von Frau Brandt", "In der Kantine"]], ["Bis wann kann man Vorschläge einreichen?", ["Bis zum 15. Februar", "Bis Ende März", "Bis Montag"]], ["Was möchte Katrin vorschlagen?", ["Feste Homeoffice-Tage", "Ein neues Gebäude", "Mehr Telefone"]]],
    decode: ["Wünsche und Vorschläge sind bis zum 15. Februar bei mir einzureichen.", "Das lässt sich vielleicht lösen."],
    tip: "In announcements at work, listen for the passive and its alternatives (wird verlegt, können eingesehen werden, sind einzureichen): they tell you what will happen and what you have to do, without saying who does it.", tip_fr: "Dans les annonces au travail, repère le passif et ses équivalents (wird verlegt, können eingesehen werden, sind einzureichen) : ils te disent ce qui va se passer et ce que tu dois faire, sans dire qui le fait."
  }]);

  W.PROMPTS.push({ id: "de-b2-2", level: "B2", q: "Halte einen kurzen Vortrag zum Thema „Homeoffice“: Beschreib die Situation in deinem Land, nenne Vor- und Nachteile und sag deine Meinung.", en: "Give a short talk on “working from home”: describe the situation in your country, give advantages and disadvantages, and say what you think.", fr: "Fais un court exposé sur le thème « télétravail » : décris la situation dans ton pays, donne des avantages et des inconvénients, et dis ce que tu en penses.", time: 240,
    phrases: ["Ich möchte heute über … sprechen.", "Ein großer Vorteil ist, dass…", "Dagegen spricht, dass…", "Meiner Meinung nach…", "Abschließend möchte ich sagen, …"],
    model: "Ich möchte heute über das Thema Homeoffice sprechen. Seit einigen Jahren arbeiten in vielen Ländern deutlich mehr Menschen zumindest teilweise von zu Hause aus. Ein großer Vorteil ist, dass der lange Arbeitsweg wegfällt: Diese Zeit lässt sich für die Familie oder für Sport nutzen. Außerdem kann man sich zu Hause oft besser konzentrieren als in einem lauten Großraumbüro. Dagegen spricht, dass der Kontakt zu den Kollegen leidet. Manche Probleme lassen sich in einem kurzen Gespräch an der Kaffeemaschine schneller lösen als per E-Mail. Und nicht jeder hat zu Hause einen ruhigen Arbeitsplatz. Meiner Meinung nach ist eine Mischung ideal: zwei oder drei Tage im Büro, die restlichen Tage zu Hause. Abschließend möchte ich sagen: Entscheidend ist, dass die Regeln im Team klar abgesprochen werden." });

  W.WRITING_GUIDE["b2-2"] = { genre: "A formal message at work (Goethe B2, writing part 2)", genre_fr: "Un message formel au travail (Goethe B2, écrit partie 2)",
    plan: [["A subject line and a formal greeting.", "Un objet et un appel formel."], ["Why you're writing.", "Le motif de ton message."], ["The problem, with a concrete detail.", "Le problème, avec un détail concret."], ["Your requests and suggestions, politely.", "Tes demandes et propositions, poliment."], ["A closing phrase and the sign-off.", "Une formule de conclusion et la formule finale."]],
    marks: [["Betreff: Geplantes Großraumbüro", "a clear subject line", "un objet clair"], ["Sehr geehrte Frau Dr. Brandt,", "the formal greeting", "l'appel formel"], ["wende ich mich deshalb an Sie", "the reason for writing", "le motif du message"], ["ließe sich das kaum ohne Störungen erledigen", "an alternative to the passive, in the Konjunktiv II", "un équivalent du passif, au Konjunktiv II"], ["Wir möchten Sie daher bitten", "a polite request", "une demande polie"], ["Wäre es möglich", "a polite question", "une question polie"], ["Für Rückfragen stehe ich Ihnen gern zur Verfügung.", "the closing phrase", "la formule de conclusion"]] };

  /* Atelier de langue : champs allemands d'abord, puis anglais et français (voir localize.js). */
  W.LEXIS = W.LEXIS || {};
  W.LEXIS["b2-2"] = {
    colloc: [
      ["einen Antrag stellen", "to submit an application", "déposer une demande", "Ich habe einen Antrag auf Elternzeit gestellt.", "gestellt", ["gemacht", "gegeben"]],
      ["eine Frist einhalten", "to meet a deadline", "respecter un délai", "Wir konnten die Frist leider nicht einhalten.", "einhalten", ["treffen", "machen"]],
      ["Verantwortung übernehmen", "to take on responsibility", "assumer une responsabilité", "Sie übernimmt die Verantwortung für das neue Projekt.", "übernimmt", ["nimmt", "macht"]],
      ["einen Kompromiss schließen", "to reach a compromise", "trouver un compromis", "Am Ende haben beide Seiten einen Kompromiss geschlossen.", "geschlossen", ["gebaut", "gestellt"]],
      ["Rücksicht nehmen auf", "to show consideration for", "avoir des égards pour", "Im Großraumbüro muss man Rücksicht auf die Kollegen nehmen.", "nehmen", ["geben", "machen"]],
      ["eine Besprechung leiten", "to chair a meeting", "animer une réunion", "Heute leitet Frau Brandt die Besprechung.", "leitet", ["fährt", "stellt"]],
      ["Überstunden machen", "to work overtime", "faire des heures supplémentaires", "Vor Weihnachten machen viele Verkäufer Überstunden.", "machen", ["tun", "stellen"]],
      ["einen Vorschlag machen", "to make a suggestion", "faire une proposition", "Darf ich einen Vorschlag machen?", "machen", ["geben", "stellen"]],
      ["in Kraft treten", "to come into force", "entrer en vigueur", "Die neue Regelung tritt am 1. Januar in Kraft.", "tritt", ["geht", "kommt"]],
      ["ein Ziel erreichen", "to achieve a goal", "atteindre un objectif", "Das Team hat sein Ziel früher als geplant erreicht.", "erreicht", ["gemacht", "getroffen"]]
    ],
    wf: [
      ["Die ___ von Familie und Beruf ist für viele Eltern schwierig. (VEREINBAREN)", "Vereinbarkeit"],
      ["Keine Sorge, das Problem ist ___. (LÖSEN)", "lösbar"],
      ["Leider war die Verspätung ___. (VERMEIDEN)", "unvermeidbar"],
      ["Die ___ der neuen Regeln beginnt im März. (UMSETZEN)", "Umsetzung"],
      ["Für die Dienstreise brauchen Sie eine ___. (GENEHMIGEN)", "Genehmigung"],
      ["Die psychische ___ am Arbeitsplatz nimmt zu. (BELASTEN)", "Belastung"],
      ["Sie arbeitet sehr ___ und macht kaum Fehler. (VERLASSEN)", "zuverlässig"],
      ["Der Plan ist in drei Wochen leider nicht ___. (MACHEN)", "machbar"]
    ],
    kwt: [
      ["Man muss den Antrag bis Freitag einreichen.", "WERDEN", "Der Antrag muss bis Freitag ___.", "eingereicht werden"],
      ["Das Problem kann gelöst werden.", "LÄSST", "Das Problem ___.", "lässt sich lösen"],
      ["Man kann diesen Fehler nicht vermeiden.", "ZU", "Dieser Fehler ist nicht ___.", "zu vermeiden"],
      ["Die Formulare müssen sofort ausgefüllt werden.", "SIND", "Die Formulare ___.", "sind sofort auszufüllen"],
      ["Man kann den Plan leicht umsetzen.", "UMSETZBAR", "Der Plan ist ___.", "leicht umsetzbar"],
      ["Jemand hat die Tür geschlossen.", "IST", "Die Tür ___.", "ist geschlossen|ist geschlossen worden"]
    ],
    idioms: [
      ["Feierabend machen", "aufhören zu arbeiten", "to call it a day", "finir sa journée", "Für heute mache ich Feierabend.", "Feierabend"],
      ["blaumachen", "nicht zur Arbeit gehen, ohne krank zu sein", "to skive off work", "sécher le travail", "Er hat am Montag einfach blaugemacht.", "blaugemacht"],
      ["den Faden verlieren", "nicht mehr wissen, was man sagen wollte", "to lose the thread", "perdre le fil", "Mitten im Vortrag hat sie den Faden verloren.", "den Faden verloren"],
      ["etwas auf die lange Bank schieben", "etwas immer wieder verschieben", "to put something off", "remettre quelque chose à plus tard", "Die Entscheidung wurde auf die lange Bank geschoben.", "auf die lange Bank geschoben"],
      ["jemandem über die Schulter schauen", "jemandem bei der Arbeit zusehen", "to look over someone's shoulder", "regarder par-dessus l'épaule de quelqu'un", "Am ersten Tag durfte ich der Kollegin über die Schulter schauen.", "über die Schulter schauen"],
      ["ins kalte Wasser springen", "etwas Neues ohne Vorbereitung beginnen", "to jump in at the deep end", "se jeter à l'eau", "Bei meiner neuen Stelle musste ich ins kalte Wasser springen.", "ins kalte Wasser springen"],
      ["Dienst nach Vorschrift machen", "nur das Nötigste tun, oft aus Protest", "to work to rule", "faire la grève du zèle", "Aus Protest machen die Angestellten Dienst nach Vorschrift.", "Dienst nach Vorschrift"],
      ["die Ärmel hochkrempeln", "mit viel Energie an die Arbeit gehen", "to roll up one's sleeves", "retrousser ses manches", "Jetzt heißt es: Ärmel hochkrempeln und anfangen!", "Ärmel hochkrempeln"]
    ]
  };

  W.COURSE.push({ id: "b2-2", level: "B2", icon: "briefcase", title: "The world of work", title_fr: "Le monde du travail",
    intro: "Work is changing: digitalisation, open-plan offices, working from home, the shortage of skilled workers. In this unit, you'll learn the passive with modal verbs and the forms that replace it (sich lassen, -bar, sein + zu), which fill every German official text, and you'll write a formal message at work, as in the Goethe B2 exam. You'll also discover how German employees have a say through co-determination.",
    intro_fr: "Le travail change : transformation numérique, open spaces, télétravail, pénurie de main-d'œuvre qualifiée. Dans cette unité, tu vas apprendre le passif avec les verbes de modalité et les formes qui le remplacent (sich lassen, -bar, sein + zu), omniprésentes dans les textes officiels allemands, et tu vas écrire un message formel au travail, comme à l'examen du Goethe B2. Tu découvriras aussi comment les salariés allemands ont leur mot à dire grâce à la cogestion.",
    can: ["Say what must, can or should be done with the passive and a modal verb", "Tell an action (wird geschlossen) from a result (ist geschlossen)", "Vary your style with sich lassen, -bar, sein + zu and man", "Write a polite, well-structured formal message of about 100 words (Goethe B2)", "Give a short talk on a topic from working life"],
    can_fr: ["Dire ce qui doit, peut ou devrait être fait avec le passif et un verbe de modalité", "Distinguer une action (wird geschlossen) d'un résultat (ist geschlossen)", "Varier ton style avec sich lassen, -bar, sein + zu et man", "Écrire un message formel poli et bien construit d'environ 100 mots (Goethe B2)", "Faire un court exposé sur un thème de la vie professionnelle"],
    lessons: [76, 77, 78], vocab: ["arbeitsweltDE", "buerokommDE"], reading: "mitbestimmung", prompt: "de-b2-2",
    writing: { task: "Your company plans to turn your department's offices into an open-plan office. Write to your manager, Frau Dr. Brandt (100-130 words): say why you're writing, explain a concern of the team, make two suggestions and ask for a meeting.", task_fr: "Ton entreprise prévoit de transformer les bureaux de ton service en open space. Écris à ta supérieure, Frau Dr. Brandt (100 à 130 mots) : dis pourquoi tu écris, explique une inquiétude de l'équipe, fais deux propositions et demande un entretien.", words: "100-130",
      tips: ["Sehr geehrte Frau Dr. Brandt,", "Ich wende mich an Sie, weil…", "Wir möchten Sie bitten, …", "Wäre es möglich, …?", "Für Rückfragen stehe ich Ihnen gern zur Verfügung."],
      checklist: ["I wrote a subject line and a formal greeting", "I said why I'm writing", "I explained the problem with a concrete detail", "I made two polite suggestions and asked for a meeting", "I wrote between 100 and 130 words"],
      checklist_fr: ["J'ai écrit un objet et un appel formel", "J'ai dit pourquoi j'écris", "J'ai expliqué le problème avec un détail concret", "J'ai fait deux propositions polies et demandé un entretien", "J'ai écrit entre 100 et 130 mots"],
      model: "Betreff: Geplantes Großraumbüro in der Abteilung Einkauf\n\nSehr geehrte Frau Dr. Brandt,\n\nin der letzten Teamsitzung wurde angekündigt, dass unsere Büros ab März zu einem Großraumbüro umgebaut werden sollen. Im Namen des Teams wende ich mich deshalb an Sie.\n\nViele von uns führen täglich lange Telefonate mit Lieferanten. In einem offenen Raum ließe sich das kaum ohne Störungen erledigen. Wir möchten Sie daher bitten, zusätzlich zwei kleine Ruheräume einzuplanen. Außerdem schlagen wir feste Homeoffice-Tage vor, damit das Büro nie ganz voll ist.\n\nWäre es möglich, diese Punkte in einem kurzen Gespräch zu besprechen? Für Rückfragen stehe ich Ihnen gern zur Verfügung.\n\nMit freundlichen Grüßen\nRobin Keller" } });
})();
