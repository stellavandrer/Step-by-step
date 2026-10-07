/* Cours d'allemand, unité A2-1 « Work and jobs / Le travail et les métiers » : le prétérit de sein, haben et des
   verbes de modalité (war, hatte, musste), les subordonnées avec weil et dass (verbe à la fin), denn et deshalb,
   parler de son métier et l'entretien d'embauche. Explications et traductions en anglais ET en français.
   Personnages fictifs, prénoms allemands. Faits vérifiables seulement : la formation en alternance (duale
   Ausbildung) en entreprise et en école professionnelle (Berufsschule), en général deux à trois ans et demi ;
   le CV en tableau (tabellarischer Lebenslauf) ; le Feierabend ; formes neutres comme Studierende, Lehrkräfte. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "berufeDE", icon: "briefcase", title: "Jobs", title_fr: "Les métiers", level: "A2", words: [
    ["der Krankenpfleger, - / die Krankenpflegerin, -nen", "the nurse (m) / the nurse (f)", "l'infirmier / l'infirmière", "Sie arbeitet als Krankenpflegerin im Krankenhaus."],
    ["der Ingenieur, -e / die Ingenieurin, -nen", "the engineer (m) / the engineer (f)", "l'ingénieur / l'ingénieure", "Mein Bruder ist Ingenieur bei einer Autofirma."],
    ["der Verkäufer, - / die Verkäuferin, -nen", "the shop assistant (m) / (f)", "le vendeur / la vendeuse", "Die Verkäuferin ist sehr freundlich."],
    ["der Polizist, -en / die Polizistin, -nen", "the police officer (m) / (f)", "le policier / la policière", "Der Polizist zeigt uns den Weg."],
    ["der Mechaniker, - / die Mechanikerin, -nen", "the mechanic (m) / (f)", "le mécanicien / la mécanicienne", "Der Mechaniker repariert das Auto."],
    ["der Friseur, -e / die Friseurin, -nen", "the hairdresser (m) / (f)", "le coiffeur / la coiffeuse", "Ich habe morgen einen Termin beim Friseur."],
    ["der Programmierer, - / die Programmiererin, -nen", "the programmer (m) / (f)", "le programmeur / la programmeuse", "Sie ist Programmiererin bei einem Start-up."],
    ["der Anwalt, ¨-e / die Anwältin, -nen", "the lawyer (m) / (f)", "l'avocat / l'avocate", "Wir brauchen einen Anwalt."],
    ["der Handwerker, - / die Handwerkerin, -nen", "the tradesperson, the craftsman (m) / (f)", "l'artisan / l'artisane", "Der Handwerker kommt am Montag."],
    ["der Journalist, -en / die Journalistin, -nen", "the journalist (m) / (f)", "le journaliste / la journaliste", "Sie arbeitet als Journalistin für eine Zeitung."],
    ["der Architekt, -en / die Architektin, -nen", "the architect (m) / (f)", "l'architecte (m) / l'architecte (f)", "Der Architekt plant ein neues Haus."],
    ["der Beamte, -n / die Beamtin, -nen", "the civil servant (m) / (f)", "le fonctionnaire / la fonctionnaire", "Mein Vater ist Beamter bei der Stadt."],
    ["die Lehrkraft, ¨-e", "the teacher (neutral word)", "l'enseignant, l'enseignante (mot neutre)", "Die Lehrkräfte haben eine Konferenz."],
    ["die Studierenden (pl)", "the students (neutral word)", "les étudiants (mot neutre)", "Die Studierenden schreiben heute eine Prüfung."],
    ["arbeiten als", "to work as", "travailler comme", "Er arbeitet als Koch in einem Restaurant."],
    ["arbeiten bei", "to work for (a company)", "travailler chez, dans (une entreprise)", "Sie arbeitet bei einer Bank."],
    ["selbstständig", "self-employed", "indépendant, à son compte", "Meine Tante ist selbstständig."],
    ["arbeitslos", "unemployed", "au chômage, sans emploi", "Er ist seit zwei Monaten arbeitslos."]
  ] },
  { id: "arbeitsplatzDE", icon: "building", title: "At work", title_fr: "Au travail", level: "A2", words: [
    ["die Firma, Firmen", "the company, the firm", "l'entreprise, la société", "Die Firma hat zweihundert Mitarbeiter."],
    ["der Chef, -s / die Chefin, -nen", "the boss (m) / (f)", "le chef / la cheffe", "Meine Chefin ist sehr nett."],
    ["der Mitarbeiter, - / die Mitarbeiterin, -nen", "the employee, the colleague (m) / (f)", "le collaborateur / la collaboratrice", "Wir suchen neue Mitarbeiter."],
    ["die Stelle, -n", "the job, the position", "le poste, l'emploi", "Ich suche eine neue Stelle."],
    ["sich bewerben", "to apply (for a job)", "postuler, poser sa candidature", "Ich bewerbe mich als Verkäufer."],
    ["die Bewerbung, -en", "the application", "la candidature", "Ich schreibe eine Bewerbung."],
    ["der Lebenslauf, ¨-e", "the CV, the résumé", "le CV", "Bitte schicken Sie Ihren Lebenslauf."],
    ["das Vorstellungsgespräch, -e", "the job interview", "l'entretien d'embauche", "Morgen habe ich ein Vorstellungsgespräch."],
    ["verdienen", "to earn", "gagner (de l'argent)", "Er verdient gut."],
    ["das Gehalt, ¨-er", "the salary", "le salaire", "Das Gehalt ist nicht schlecht."],
    ["Vollzeit", "full-time", "à temps plein", "Sie arbeitet Vollzeit."],
    ["Teilzeit", "part-time", "à temps partiel", "Ich arbeite Teilzeit, zwanzig Stunden pro Woche."],
    ["die Überstunden (pl)", "overtime", "les heures supplémentaires", "Diese Woche habe ich viele Überstunden gemacht."],
    ["der Feierabend, -e", "the end of the working day; time off after work", "la fin de la journée de travail", "Endlich Feierabend!"],
    ["die Besprechung, -en", "the meeting", "la réunion", "Um zehn haben wir eine Besprechung."],
    ["die Erfahrung, -en", "the experience", "l'expérience", "Ich habe drei Jahre Erfahrung im Verkauf."],
    ["die Ausbildung, -en", "the vocational training, the apprenticeship", "la formation professionnelle, l'apprentissage", "Sie macht eine Ausbildung als Köchin."],
    ["kündigen", "to resign; to dismiss", "démissionner ; licencier", "Er hat gekündigt."]
  ] },
  { id: "meinungDE", icon: "messages-square", title: "Reasons and opinions", title_fr: "Raisons et opinions", level: "A2", words: [
    ["weil", "because (verb at the end)", "parce que (verbe à la fin)", "Ich lerne Deutsch, weil ich in Wien arbeite."],
    ["dass", "that (verb at the end)", "que (verbe à la fin)", "Ich glaube, dass er krank ist."],
    ["denn", "because, for (normal word order)", "car (ordre normal)", "Ich bleibe zu Hause, denn ich bin müde."],
    ["deshalb", "that's why, so", "c'est pourquoi, donc", "Ich bin müde, deshalb bleibe ich zu Hause."],
    ["Ich finde, dass…", "I think that… (opinion)", "je trouve que…", "Ich finde, dass die Arbeit interessant ist."],
    ["glauben", "to believe, to think", "croire, penser", "Ich glaube, das stimmt."],
    ["meinen", "to think, to mean", "penser, vouloir dire", "Was meinst du?"],
    ["zufrieden", "satisfied, happy", "satisfait", "Bist du mit deiner Arbeit zufrieden?"],
    ["stressig", "stressful", "stressant", "Die Arbeit ist manchmal stressig."],
    ["abwechslungsreich", "varied", "varié", "Mein Job ist abwechslungsreich."],
    ["anstrengend", "tiring, demanding", "fatigant, épuisant", "Die Nachtschicht ist anstrengend."],
    ["interessant", "interesting", "intéressant", "Das finde ich sehr interessant."],
    ["flexibel", "flexible", "flexible", "Meine Arbeitszeiten sind flexibel."],
    ["die Aufgabe, -n", "the task", "la tâche, la mission", "Meine Aufgaben sind sehr verschieden."],
    ["verantwortlich für", "responsible for", "responsable de", "Ich bin verantwortlich für das Marketing."],
    ["gefallen", "to please (das gefällt mir: I like it)", "plaire (das gefällt mir : ça me plaît)", "Mein neuer Job gefällt mir sehr."]
  ] });

  W.LESSONS.push(
  {
    id: 22, level: "A2", icon: "history",
    title: "Ich war, ich hatte, ich musste: the simple past of sein, haben and the modals", title_fr: "Ich war, ich hatte, ich musste : le prétérit de sein, haben et des verbes de modalité",
    subtitle: "For these verbs, Germans prefer the simple past even when they speak.", subtitle_fr: "Pour ces verbes, les Allemands préfèrent le prétérit, même à l'oral.",
    body: `
<h2>Sein and haben</h2>
<table>
<tr><th></th><th>sein</th><th>haben</th></tr>
<tr><td>ich</td><td><s-de>war</s-de></td><td><s-de>hatte</s-de></td></tr>
<tr><td>du</td><td><s-de>warst</s-de></td><td><s-de>hattest</s-de></td></tr>
<tr><td>er / sie / es</td><td><s-de>war</s-de></td><td><s-de>hatte</s-de></td></tr>
<tr><td>wir / sie / Sie</td><td><s-de>waren</s-de></td><td><s-de>hatten</s-de></td></tr>
<tr><td>ihr</td><td><s-de>wart</s-de></td><td><s-de>hattet</s-de></td></tr>
</table>
<h2>The modal verbs</h2>
<p>Add <b>-te</b> to the stem, and drop the umlaut: <s-de>können</s-de> → <s-de>ich konnte</s-de> · <s-de>müssen</s-de> → <s-de>ich musste</s-de> · <s-de>dürfen</s-de> → <s-de>ich durfte</s-de> · <s-de>wollen</s-de> → <s-de>ich wollte</s-de> · <s-de>sollen</s-de> → <s-de>ich sollte</s-de>. The endings are those of <s-de>hatte</s-de>: <s-de>du musstest</s-de>, <s-de>wir mussten</s-de>.</p>
<h2>When to use it</h2>
<p>For most verbs, spoken German uses the Perfekt: <s-de>Ich habe gearbeitet.</s-de> But with <s-de>sein</s-de>, <s-de>haben</s-de> and the modal verbs, the simple past (<b>Präteritum</b>) is the natural choice, even in conversation: <s-de>Ich war krank.</s-de> rather than <s-de>Ich bin krank gewesen.</s-de> · <s-de>Ich musste arbeiten.</s-de> rather than <s-de>Ich habe arbeiten müssen.</s-de></p>
<p>So a typical account mixes both: <s-de>Gestern war ich müde, weil ich viel gearbeitet habe.</s-de></p>
<div class="tip">Careful with <s-de>ich wollte</s-de>: it means "I wanted to", not "I would". <s-de>Ich wollte dich anrufen.</s-de> = I wanted to call you.</div>
`,
    body_fr: `
<h2>Sein et haben</h2>
<table>
<tr><th></th><th>sein</th><th>haben</th></tr>
<tr><td>ich</td><td><s-de>war</s-de></td><td><s-de>hatte</s-de></td></tr>
<tr><td>du</td><td><s-de>warst</s-de></td><td><s-de>hattest</s-de></td></tr>
<tr><td>er / sie / es</td><td><s-de>war</s-de></td><td><s-de>hatte</s-de></td></tr>
<tr><td>wir / sie / Sie</td><td><s-de>waren</s-de></td><td><s-de>hatten</s-de></td></tr>
<tr><td>ihr</td><td><s-de>wart</s-de></td><td><s-de>hattet</s-de></td></tr>
</table>
<h2>Les verbes de modalité</h2>
<p>On ajoute <b>-te</b> au radical, et on enlève l'Umlaut : <s-de>können</s-de> → <s-de>ich konnte</s-de> · <s-de>müssen</s-de> → <s-de>ich musste</s-de> · <s-de>dürfen</s-de> → <s-de>ich durfte</s-de> · <s-de>wollen</s-de> → <s-de>ich wollte</s-de> · <s-de>sollen</s-de> → <s-de>ich sollte</s-de>. Les terminaisons sont celles de <s-de>hatte</s-de> : <s-de>du musstest</s-de>, <s-de>wir mussten</s-de>.</p>
<h2>Quand l'employer</h2>
<p>Pour la plupart des verbes, l'oral emploie le Perfekt : <s-de>Ich habe gearbeitet.</s-de> Mais avec <s-de>sein</s-de>, <s-de>haben</s-de> et les verbes de modalité, le prétérit (<b>Präteritum</b>) est le choix naturel, même dans la conversation : <s-de>Ich war krank.</s-de> plutôt que <s-de>Ich bin krank gewesen.</s-de> · <s-de>Ich musste arbeiten.</s-de> plutôt que <s-de>Ich habe arbeiten müssen.</s-de></p>
<p>C'est un peu comme l'imparfait français à côté du passé composé : un récit typique mélange les deux : <s-de>Gestern war ich müde, weil ich viel gearbeitet habe.</s-de> (Hier, j'étais à bout parce que j'avais beaucoup travaillé.)</p>
<div class="tip">Le prétérit allemand ne correspond pas toujours à l'imparfait : <s-de>Ich musste gehen</s-de> peut vouloir dire « je devais partir » ou « j'ai dû partir ». C'est le contexte qui tranche.</div>
`,
    examples: [
      ["Früher war ich Kellner in Hamburg.", "I used to be a waiter in Hamburg.", "Avant, j'étais serveur à Hambourg."],
      ["Gestern hatte ich keine Zeit.", "Yesterday I didn't have time.", "Hier, je n'avais pas le temps."],
      ["Ich musste bis acht Uhr arbeiten.", "I had to work until eight.", "J'ai dû travailler jusqu'à vingt heures."],
      ["Als Kind wollte ich Pilotin werden.", "As a child I wanted to become a pilot.", "Enfant, je voulais devenir pilote."],
      ["Wir konnten nicht kommen, wir waren krank.", "We couldn't come, we were ill.", "Nous n'avons pas pu venir, nous étions malades."],
      ["Wo warst du am Wochenende?", "Where were you at the weekend?", "Où étais-tu ce week-end ?"],
      ["Im Büro durfte man früher rauchen.", "People used to be allowed to smoke in the office.", "Autrefois, on avait le droit de fumer au bureau."]
    ],
    quiz: [
      { q: "Complete: “Gestern ___ ich krank.” (sein)", q_fr: "Complète : « Gestern ___ ich krank. » (sein)", o: ["war", "bin gewesen", "hatte"], a: 0, ex: "With sein, the simple past is the natural choice: ich war.", ex_fr: "Avec sein, le prétérit est le choix naturel : ich war." },
      { q: "The simple past of “müssen” (ich):", q_fr: "Le prétérit de « müssen » (ich) :", o: ["ich müsste", "ich musste", "ich mussete"], a: 1, ex: "musste, without umlaut (müsste is another form, the conditional).", ex_fr: "musste, sans Umlaut (müsste est une autre forme, le conditionnel)." },
      { q: "Complete: “Du ___ keine Zeit.” (haben, past)", q_fr: "Complète : « Du ___ keine Zeit. » (haben, passé)", o: ["hattest", "hattst", "hatte"], a: 0, ex: "du hattest.", ex_fr: "du hattest." },
      { q: "“Ich wollte dich anrufen” means:", q_fr: "« Ich wollte dich anrufen » veut dire :", o: ["I wanted to call you.", "I would call you.", "I will call you."], o_fr: ["Je voulais t'appeler.", "Je t'appellerais.", "Je vais t'appeler."], a: 0, ex: "wollte = wanted to.", ex_fr: "wollte = voulais." },
      { q: "Which sounds most natural in conversation?", q_fr: "Quelle phrase est la plus naturelle à l'oral ?", o: ["Ich konnte nicht kommen.", "Ich habe nicht kommen können.", "Ich kam nicht können."], a: 0, ex: "Modal verbs prefer the simple past: ich konnte.", ex_fr: "Les verbes de modalité préfèrent le prétérit : ich konnte." }
    ]
  },
  {
    id: 23, level: "A2", icon: "split",
    title: "…, weil ich Deutsch lerne: weil, dass and the verb at the end", title_fr: "…, weil ich Deutsch lerne : weil, dass et le verbe à la fin",
    subtitle: "Give reasons and opinions: in a subordinate clause, the conjugated verb goes to the very end.", subtitle_fr: "Donner des raisons et des opinions : dans une subordonnée, le verbe conjugué part tout à la fin.",
    body: `
<h2>Weil and dass send the verb to the end</h2>
<p><s-de>Ich lerne Deutsch.</s-de> → <s-de>…, weil ich Deutsch lerne.</s-de> (because I'm learning German) · <s-de>Er ist krank.</s-de> → <s-de>Ich glaube, dass er krank ist.</s-de> (I think that he's ill). A comma always comes before <s-de>weil</s-de> and <s-de>dass</s-de>.</p>
<h2>With two verbs</h2>
<p>The conjugated verb is always the very last word: <s-de>…, weil ich arbeiten muss.</s-de> · <s-de>…, weil ich lange gearbeitet habe.</s-de> And separable verbs join up again: <s-de>Ich stehe früh auf.</s-de> → <s-de>…, weil ich früh aufstehe.</s-de></p>
<h2>Weil-clause first</h2>
<p>If the sentence starts with the <s-de>weil</s-de>-clause, the whole clause counts as the first element: the main verb comes right after it, then the subject: <s-de>Weil ich krank bin, bleibe ich zu Hause.</s-de> (verb, comma, verb)</p>
<h2>Denn and deshalb</h2>
<p><s-de>denn</s-de> (because, for) keeps normal word order: <s-de>Ich bleibe zu Hause, denn ich bin krank.</s-de> <s-de>deshalb</s-de> (that's why) counts as the first element, so the verb follows it: <s-de>Ich bin krank, deshalb bleibe ich zu Hause.</s-de></p>
<div class="tip">In spoken German, you'll hear many people say "weil" with normal word order: <s-de>…, weil ich bin krank.</s-de> It's very common, but in writing and in exams, put the verb at the end. To answer <s-de>Warum?</s-de>, a <s-de>weil</s-de>-clause alone is fine: <s-de>Warum lernst du Deutsch? — Weil ich in Wien arbeite.</s-de></div>
`,
    body_fr: `
<h2>Weil et dass envoient le verbe à la fin</h2>
<p><s-de>Ich lerne Deutsch.</s-de> → <s-de>…, weil ich Deutsch lerne.</s-de> (parce que j'apprends l'allemand) · <s-de>Er ist krank.</s-de> → <s-de>Ich glaube, dass er krank ist.</s-de> (je crois qu'il est malade). Une virgule précède toujours <s-de>weil</s-de> et <s-de>dass</s-de>, contrairement au français devant « parce que » et « que ».</p>
<h2>Avec deux verbes</h2>
<p>Le verbe conjugué est toujours le tout dernier mot : <s-de>…, weil ich arbeiten muss.</s-de> · <s-de>…, weil ich lange gearbeitet habe.</s-de> Et les verbes séparables se recollent : <s-de>Ich stehe früh auf.</s-de> → <s-de>…, weil ich früh aufstehe.</s-de></p>
<h2>La subordonnée en premier</h2>
<p>Si la phrase commence par la subordonnée en <s-de>weil</s-de>, elle compte comme premier élément : le verbe principal vient juste après, puis le sujet : <s-de>Weil ich krank bin, bleibe ich zu Hause.</s-de> (verbe, virgule, verbe)</p>
<h2>Denn et deshalb</h2>
<p><s-de>denn</s-de> (car) garde l'ordre normal : <s-de>Ich bleibe zu Hause, denn ich bin krank.</s-de> <s-de>deshalb</s-de> (c'est pourquoi) compte comme premier élément, donc le verbe le suit : <s-de>Ich bin krank, deshalb bleibe ich zu Hause.</s-de></p>
<div class="tip">À l'oral, tu entendras beaucoup de gens dire « weil » avec l'ordre normal : <s-de>…, weil ich bin krank.</s-de> C'est très courant, mais à l'écrit et aux examens, mets le verbe à la fin. Pour répondre à <s-de>Warum?</s-de>, une subordonnée seule suffit : <s-de>Warum lernst du Deutsch? — Weil ich in Wien arbeite.</s-de></div>
`,
    examples: [
      ["Ich lerne Deutsch, weil ich in Wien arbeite.", "I'm learning German because I work in Vienna.", "J'apprends l'allemand parce que je travaille à Vienne."],
      ["Ich glaube, dass die Besprechung um zehn beginnt.", "I think the meeting starts at ten.", "Je crois que la réunion commence à dix heures."],
      ["Er kommt später, weil er noch arbeiten muss.", "He's coming later because he still has to work.", "Il vient plus tard parce qu'il doit encore travailler."],
      ["Weil ich früh aufstehe, gehe ich früh schlafen.", "Because I get up early, I go to bed early.", "Comme je me lève tôt, je me couche tôt."],
      ["Ich bin müde, denn ich habe lange gearbeitet.", "I'm tired, because I've worked late.", "Je n'en peux plus, car j'ai travaillé tard."],
      ["Die Stelle ist interessant, deshalb bewerbe ich mich.", "The job is interesting, so I'm applying.", "Le poste est intéressant, c'est pourquoi je postule."],
      ["Ich finde, dass mein Job abwechslungsreich ist.", "I think my job is varied.", "Je trouve que mon travail est varié."]
    ],
    quiz: [
      { q: "Complete: “Ich lerne Deutsch, weil ich in Berlin ___.” (wohnen)", q_fr: "Complète : « Ich lerne Deutsch, weil ich in Berlin ___. » (wohnen)", o: ["wohne", "wohnen", "wohnt"], a: 0, ex: "The verb goes to the end of the weil-clause: ich wohne.", ex_fr: "Le verbe part à la fin de la subordonnée : ich wohne." },
      { q: "Which sentence is correct?", q_fr: "Quelle phrase est correcte ?", o: ["Ich glaube, dass er ist krank.", "Ich glaube, dass er krank ist.", "Ich glaube dass er krank ist."], a: 1, ex: "Verb at the end, and a comma before dass.", ex_fr: "Verbe à la fin, et virgule devant dass." },
      { q: "Complete: “…, weil ich früh ___.” (aufstehen)", q_fr: "Complète : « …, weil ich früh ___. » (aufstehen)", o: ["stehe auf", "aufstehe", "aufstehen"], a: 1, ex: "In a subordinate clause, the separable verb joins up again.", ex_fr: "Dans une subordonnée, le verbe séparable se recolle." },
      { q: "“Weil ich krank bin, ___ zu Hause.”", q_fr: "« Weil ich krank bin, ___ zu Hause. »", o: ["ich bleibe", "bleibe ich", "ich bleiben"], a: 1, ex: "After the weil-clause: verb first, then subject.", ex_fr: "Après la subordonnée : le verbe d'abord, puis le sujet." },
      { q: "“Ich bin müde, ___ gehe ich schlafen.”", q_fr: "« Ich bin müde, ___ gehe ich schlafen. »", o: ["weil", "denn", "deshalb"], a: 2, ex: "deshalb + verb second: deshalb gehe ich.", ex_fr: "deshalb + verbe en deuxième position : deshalb gehe ich." }
    ]
  },
  {
    id: 24, level: "A2", kind: "functional", icon: "briefcase",
    title: "Everyday German: talking about your job and the job interview", title_fr: "L'allemand de tous les jours : parler de son métier et l'entretien d'embauche",
    subtitle: "Say what you do, where and since when, and answer the classic interview questions.", subtitle_fr: "Dire ce que tu fais, où et depuis quand, et répondre aux questions classiques d'un entretien.",
    body: `
<h2>Saying what you do</h2>
<p><s-de>Was sind Sie von Beruf?</s-de> · <s-de>Was machst du beruflich?</s-de> — <s-de>Ich bin Ingenieurin.</s-de> (no article, like English "I'm an engineer" without "an") · <s-de>Ich arbeite als Verkäufer.</s-de> · <s-de>Ich arbeite bei Siemens.</s-de> (for a company: <s-de>bei</s-de>) · <s-de>Ich arbeite im Marketing.</s-de> · <s-de>Ich arbeite seit drei Jahren hier.</s-de> (for three years: <s-de>seit</s-de> + present tense!)</p>
<p>Job titles have a masculine and a feminine form: <s-de>der Lehrer</s-de>, <s-de>die Lehrerin</s-de>. In official and university texts you'll also see neutral forms such as <s-de>die Lehrkräfte</s-de> or <s-de>die Studierenden</s-de>.</p>
<h2>The job interview</h2>
<p><s-de>Erzählen Sie etwas über sich.</s-de> (Tell me about yourself.) · <s-de>Warum möchten Sie bei uns arbeiten?</s-de> · <s-de>Was sind Ihre Stärken?</s-de> (What are your strengths?) · <s-de>Wann können Sie anfangen?</s-de></p>
<p>Answers: <s-de>Ich habe drei Jahre Erfahrung im Verkauf.</s-de> · <s-de>Ich kann gut im Team arbeiten.</s-de> · <s-de>Ich interessiere mich für diese Stelle, weil…</s-de> · <s-de>Ich kann ab dem ersten Mai anfangen.</s-de></p>
<h2>A German CV</h2>
<p>A German CV (<s-de>Lebenslauf</s-de>) is usually a table (<s-de>tabellarischer Lebenslauf</s-de>), with dates on the left. A photo used to be standard; today it's optional.</p>
<div class="tip">After work, Germans have <s-de>Feierabend</s-de>: the end of the working day, and the time that follows. <s-de>Schönen Feierabend!</s-de> is a friendly goodbye to colleagues in the evening. And in many companies, colleagues say du to each other, especially in start-ups.</div>
`,
    body_fr: `
<h2>Dire ce que tu fais</h2>
<p><s-de>Was sind Sie von Beruf?</s-de> · <s-de>Was machst du beruflich?</s-de> — <s-de>Ich bin Ingenieurin.</s-de> (sans article, comme en français : « je suis ingénieure ») · <s-de>Ich arbeite als Verkäufer.</s-de> · <s-de>Ich arbeite bei Siemens.</s-de> (pour une entreprise : <s-de>bei</s-de>, comme « chez ») · <s-de>Ich arbeite im Marketing.</s-de> · <s-de>Ich arbeite seit drei Jahren hier.</s-de> (depuis trois ans : <s-de>seit</s-de> + présent, comme en français !)</p>
<p>Les noms de métier ont une forme masculine et une forme féminine : <s-de>der Lehrer</s-de>, <s-de>die Lehrerin</s-de>. Dans les textes officiels et universitaires, tu verras aussi des formes neutres comme <s-de>die Lehrkräfte</s-de> (le corps enseignant) ou <s-de>die Studierenden</s-de>.</p>
<h2>L'entretien d'embauche</h2>
<p><s-de>Erzählen Sie etwas über sich.</s-de> (Parlez-moi de vous.) · <s-de>Warum möchten Sie bei uns arbeiten?</s-de> · <s-de>Was sind Ihre Stärken?</s-de> (Quels sont vos points forts ?) · <s-de>Wann können Sie anfangen?</s-de></p>
<p>Réponses : <s-de>Ich habe drei Jahre Erfahrung im Verkauf.</s-de> · <s-de>Ich kann gut im Team arbeiten.</s-de> · <s-de>Ich interessiere mich für diese Stelle, weil…</s-de> · <s-de>Ich kann ab dem ersten Mai anfangen.</s-de></p>
<h2>Le CV allemand</h2>
<p>Le CV allemand (<s-de>Lebenslauf</s-de>) se présente en général sous forme de tableau (<s-de>tabellarischer Lebenslauf</s-de>), avec les dates à gauche. La photo a longtemps été la norme ; aujourd'hui, elle est facultative.</p>
<div class="tip">Après le travail, c'est le <s-de>Feierabend</s-de> : la fin de la journée de travail, et le temps libre qui suit. <s-de>Schönen Feierabend!</s-de> est un au revoir amical entre collègues le soir. Et dans beaucoup d'entreprises, les collègues se tutoient, surtout dans les start-ups.</div>
`,
    examples: [
      ["Was machst du beruflich?", "What do you do for a living?", "Tu fais quoi dans la vie ?"],
      ["Ich arbeite seit zwei Jahren bei einer Bank.", "I've been working at a bank for two years.", "Je travaille dans une banque depuis deux ans."],
      ["Erzählen Sie etwas über sich.", "Tell us about yourself.", "Parlez-nous de vous."],
      ["Ich habe drei Jahre Erfahrung im Verkauf.", "I have three years' experience in sales.", "J'ai trois ans d'expérience dans la vente."],
      ["Ich kann gut im Team arbeiten.", "I'm good at working in a team.", "Je sais bien travailler en équipe."],
      ["Wann können Sie anfangen? — Ab dem ersten Mai.", "When can you start? — From the first of May.", "Quand pouvez-vous commencer ? — À partir du premier mai."],
      ["Tschüss, schönen Feierabend!", "Bye, have a nice evening!", "Salut, bonne fin de journée !"]
    ],
    quiz: [
      { q: "“I'm a nurse.” (a woman)", q_fr: "« Je suis infirmière. »", o: ["Ich bin eine Krankenpflegerin.", "Ich bin Krankenpflegerin.", "Ich bin Krankenpfleger eine."], a: 1, ex: "No article before a job after sein.", ex_fr: "Pas d'article devant un métier après sein." },
      { q: "“I work for a bank.”", q_fr: "« Je travaille dans une banque. »", o: ["Ich arbeite bei einer Bank.", "Ich arbeite für einer Bank.", "Ich arbeite als eine Bank."], a: 0, ex: "For a company or employer: bei + dative.", ex_fr: "Pour une entreprise ou un employeur : bei + datif." },
      { q: "“I've been working here for three years.”", q_fr: "« Je travaille ici depuis trois ans. »", o: ["Ich arbeite seit drei Jahren hier.", "Ich habe seit drei Jahren hier gearbeitet.", "Ich arbeite für drei Jahre hier."], a: 0, ex: "seit + present tense, for something still going on.", ex_fr: "seit + présent, pour ce qui dure encore." },
      { q: "“Was sind Ihre Stärken?” asks about:", q_fr: "« Was sind Ihre Stärken? » demande :", o: ["your strengths", "your salary", "your hobbies"], o_fr: ["tes points forts", "ton salaire", "tes loisirs"], a: 0, ex: "die Stärke = strength.", ex_fr: "die Stärke = le point fort." },
      { q: "“Schönen Feierabend!” is said:", q_fr: "« Schönen Feierabend! » se dit :", o: ["to colleagues at the end of the working day", "at a birthday party", "in the morning at work"], o_fr: ["aux collègues en fin de journée", "à un anniversaire", "le matin au travail"], a: 0, ex: "Feierabend = the end of the working day.", ex_fr: "Feierabend = la fin de la journée de travail." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    22: {
      gap: [["Gestern ___ ich keine Zeit. (haben)", "hatte"], ["Wo ___ du am Samstag? (sein)", "warst"], ["Ich ___ bis acht Uhr arbeiten. (müssen)", "musste"], ["Als Kind ___ er Pilot werden. (wollen)", "wollte"]],
      fix: [["Gestern ich war krank.", "Gestern war ich krank.", "The verb stays second after Gestern.", "Le verbe reste en deuxième position après Gestern."], ["Ich müsste gestern arbeiten.", "Ich musste gestern arbeiten.", "The simple past of müssen has no umlaut: musste.", "Le prétérit de müssen n'a pas d'Umlaut : musste."]],
      task: ["Write four sentences about your past: what you were, had, wanted or had to do.", "Écris quatre phrases sur ton passé : ce que tu étais, avais, voulais ou devais faire.", "Als Kind wollte ich im Zoo arbeiten. Ich hatte einen Hund und zwei Katzen. In der Schule war ich gut in Biologie. Aber ich musste viel lernen!"]
    },
    23: {
      gap: [["Ich lerne Deutsch, weil ich in Wien ___. (arbeiten)", "arbeite"], ["Ich glaube, ___ er heute kommt.", "dass", "that", "que"], ["…, weil ich früh ___. (aufstehen)", "aufstehe"], ["Ich bin müde, ___ bleibe ich zu Hause.", "deshalb", "that's why", "c'est pourquoi"]],
      fix: [["Ich komme nicht, weil ich bin krank.", "Ich komme nicht, weil ich krank bin.", "In writing, the verb goes to the end of the weil-clause.", "À l'écrit, le verbe part à la fin de la subordonnée en weil."], ["Weil es regnet, ich bleibe zu Hause.", "Weil es regnet, bleibe ich zu Hause.", "After the weil-clause, the main verb comes first.", "Après la subordonnée, le verbe principal vient en premier."]],
      task: ["Answer: why are you learning German? Give three reasons with weil, dass or deshalb.", "Réponds : pourquoi apprends-tu l'allemand ? Donne trois raisons avec weil, dass ou deshalb.", "Ich lerne Deutsch, weil ich in Österreich arbeiten möchte. Außerdem finde ich, dass die Sprache schön klingt. Meine Partnerin kommt aus Bremen, deshalb möchte ich mit ihrer Familie sprechen."]
    },
    24: {
      gap: [["Was sind Sie von ___?", "Beruf", "job", "métier"], ["Ich arbeite ___ einer Bank.", "bei", "at, for", "chez, dans"], ["Ich arbeite ___ drei Jahren hier.", "seit", "for, since", "depuis"], ["Ich habe drei Jahre ___ im Verkauf.", "Erfahrung", "experience", "expérience"]],
      fix: [["Ich bin ein Lehrer.", "Ich bin Lehrer.", "No article before a job after sein.", "Pas d'article devant un métier après sein."], ["Ich arbeite hier für zwei Jahre.", "Ich arbeite seit zwei Jahren hier.", "Still going on: seit + present tense.", "Ce qui dure encore : seit + présent."]],
      task: ["Introduce yourself in a job interview: what you do, your experience, a strength and why you want the job (four sentences).", "Présente-toi dans un entretien d'embauche : ce que tu fais, ton expérience, un point fort et pourquoi tu veux ce poste (quatre phrases).", "Ich arbeite seit fünf Jahren im Verkauf, zurzeit bei einem Sportgeschäft in Köln. Ich habe viel Erfahrung mit Kunden. Ich kann gut im Team arbeiten und bin sehr flexibel. Ich möchte bei Ihnen arbeiten, weil ich mich für Mode interessiere."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "verspaetung", lesson: 23, level: "A2", icon: "clock", partner: "Frau Lindner", role: "your boss", role_fr: "ta cheffe",
    title: "Late for work", title_fr: "En retard au travail",
    setting: "You arrive at the office forty minutes late. Your boss, Frau Lindner, asks you what happened.", setting_fr: "Tu arrives au bureau avec quarante minutes de retard. Ta cheffe, Frau Lindner, te demande ce qui s'est passé.",
    turns: [
      { p: "Guten Morgen! Sie sind spät dran. Was ist passiert?", en: "Good morning! You're late. What happened?", fr: "Bonjour ! Vous êtes en retard. Que s'est-il passé ?" },
      { y: ["Entschuldigung! Ich bin zu spät, weil die S-Bahn nicht gefahren ist.", "Entschuldigung! Ich bin zu spät, weil die S-Bahn ist nicht gefahren.", "Entschuldigung! Ich bin zu spät, weil die S-Bahn nicht ist gefahren."], en: "Sorry! I'm late because the suburban train wasn't running.", fr: "Pardon ! Je suis en retard parce que le RER ne circulait pas.", why: "The conjugated verb (ist) goes to the very end of the weil-clause.", why_fr: "Le verbe conjugué (ist) part tout à la fin de la subordonnée en weil." },
      { p: "Schon wieder? Das war letzte Woche auch so.", en: "Again? It was the same last week.", fr: "Encore ? C'était pareil la semaine dernière." },
      { y: ["Ja, leider. Ich musste dann den Bus nehmen.", "Ja, leider. Ich müsste dann den Bus nehmen.", "Ja, leider. Ich habe dann den Bus nehmen gemusst."], en: "Yes, unfortunately. Then I had to take the bus.", fr: "Oui, malheureusement. J'ai dû prendre le bus.", why: "Past of müssen: musste (no umlaut).", why_fr: "Passé de müssen : musste (sans Umlaut)." },
      { p: "Gut, das kann passieren. Wir haben um zehn die Besprechung mit dem Kunden. Sind Sie vorbereitet?", en: "OK, that can happen. We have the meeting with the client at ten. Are you prepared?", fr: "Bon, ça peut arriver. Nous avons la réunion avec le client à dix heures. Tout est prêt de votre côté ?" },
      { y: ["Ja, ich glaube, dass alles fertig ist.", "Ja, ich glaube, dass alles ist fertig.", "Ja, ich glaube dass ist alles fertig."], en: "Yes, I think everything is ready.", fr: "Oui, je crois que tout est prêt.", why: "dass sends the verb to the end: dass alles fertig ist.", why_fr: "dass envoie le verbe à la fin : dass alles fertig ist." },
      { p: "Sehr gut. Und nächstes Mal schreiben Sie mir bitte eine kurze Nachricht, wenn Sie später kommen.", en: "Very good. And next time, please send me a short message if you're going to be late.", fr: "Très bien. Et la prochaine fois, envoyez-moi un petit message si vous arrivez plus tard, s'il vous plaît." },
      { y: ["Natürlich, das mache ich. Es tut mir leid.", "Natürlich, das mache ich. Es tut mich leid.", "Natürlich, das ich mache. Es tut mir leid."], en: "Of course, I'll do that. I'm sorry.", fr: "Bien sûr, je le ferai. Pardon.", why: "Es tut mir leid (dative mir); das mache ich: verb second.", why_fr: "Es tut mir leid (datif mir) ; das mache ich : verbe en deuxième position." }
    ] },
  { id: "bewerbung", lesson: 24, level: "A2", icon: "briefcase", partner: "Herr Engel", role: "a hotel manager", role_fr: "le directeur d'un hôtel",
    title: "The job interview", title_fr: "L'entretien d'embauche",
    setting: "You've applied for a job at the reception of a hotel in Salzburg. Herr Engel, the manager, interviews you.", setting_fr: "Tu as postulé pour un emploi à la réception d'un hôtel à Salzbourg. Herr Engel, le directeur, te reçoit en entretien.",
    turns: [
      { p: "Grüß Gott! Bitte, nehmen Sie Platz. Erzählen Sie doch etwas über sich.", en: "Hello! Please take a seat. Tell me a little about yourself.", fr: "Bonjour ! Asseyez-vous, je vous en prie. Parlez-moi un peu de vous." },
      { y: ["Gern. Ich arbeite seit drei Jahren in einem Hotel in Lyon, an der Rezeption.", "Gern. Ich arbeite für drei Jahre in einem Hotel in Lyon, an der Rezeption.", "Gern. Ich habe seit drei Jahren in einem Hotel in Lyon gearbeitet, an der Rezeption."], en: "Of course. I've been working at the reception of a hotel in Lyon for three years.", fr: "Volontiers. Je travaille depuis trois ans à la réception d'un hôtel à Lyon.", why: "Still going on: seit + present tense.", why_fr: "Ce qui dure encore : seit + présent." },
      { p: "Sehr schön. Warum möchten Sie bei uns arbeiten?", en: "Very good. Why would you like to work for us?", fr: "Très bien. Pourquoi aimeriez-vous travailler chez nous ?" },
      { y: ["Weil ich in Österreich leben möchte und weil Ihr Hotel einen sehr guten Ruf hat.", "Weil ich möchte in Österreich leben und weil Ihr Hotel hat einen sehr guten Ruf.", "Weil ich in Österreich leben möchte und weil Ihr Hotel hat einen sehr guten Ruf."], en: "Because I'd like to live in Austria and because your hotel has a very good reputation.", fr: "Parce que j'aimerais vivre en Autriche et parce que votre hôtel a une très bonne réputation.", why: "In both weil-clauses, the conjugated verb goes to the end.", why_fr: "Dans les deux subordonnées, le verbe conjugué part à la fin." },
      { p: "Was sind Ihre Stärken?", en: "What are your strengths?", fr: "Quels sont vos points forts ?" },
      { y: ["Ich kann gut im Team arbeiten und spreche drei Sprachen.", "Ich kann gut im Team arbeiten und sprechen drei Sprachen.", "Ich kann gut arbeiten im Team und spreche drei Sprachen."], en: "I'm good at working in a team and I speak three languages.", fr: "Je sais bien travailler en équipe et je parle trois langues.", why: "kann … arbeiten, then a new verb: spreche.", why_fr: "kann … arbeiten, puis un nouveau verbe : spreche." },
      { p: "Ausgezeichnet. Sie haben auch in einem Restaurant gearbeitet, steht hier im Lebenslauf?", en: "Excellent. It says here on your CV that you also worked in a restaurant?", fr: "Excellent. Vous avez aussi travaillé dans un restaurant, c'est écrit ici dans votre CV ?" },
      { y: ["Ja, während des Studiums. Ich hatte damals viel Kontakt mit Gästen.", "Ja, während des Studiums. Ich habe damals viel Kontakt mit Gästen gehabt gehabt.", "Ja, während des Studiums. Ich hat damals viel Kontakt mit Gästen."], en: "Yes, while I was studying. I had a lot of contact with guests back then.", fr: "Oui, pendant mes études. J'avais alors beaucoup de contact avec les clients.", why: "haben in the past: ich hatte.", why_fr: "haben au passé : ich hatte." },
      { p: "Sehr gut. Wann könnten Sie anfangen?", en: "Very good. When could you start?", fr: "Très bien. Quand pourriez-vous commencer ?" },
      { y: ["Ich kann ab dem ersten Juni anfangen.", "Ich kann ab dem ersten Juni anfängen.", "Ich kann ab erste Juni anfangen."], en: "I can start from the first of June.", fr: "Je peux commencer à partir du premier juin.", why: "ab dem ersten Juni (dative); anfangen in the infinitive at the end.", why_fr: "ab dem ersten Juni (datif) ; anfangen à l'infinitif, à la fin." }
    ] }
  );

  W.READINGS.push({
    id: "ausbildung", level: "A2", icon: "wrench", title: "Lernen und arbeiten: die Ausbildung", genre: "Article",
    intro: "Marlene, 19, is training to be a mechatronics technician. How does a German apprenticeship work? The past of sein and haben, weil and dass.",
    intro_fr: "Marlene, 19 ans, se forme au métier de mécatronicienne. Comment fonctionne l'apprentissage en Allemagne ? Le passé de sein et haben, weil et dass.",
    paragraphs: [
      { de: "Marlene ist neunzehn und macht eine Ausbildung als Mechatronikerin bei einer Firma in Stuttgart. Nach der Schule wusste sie nicht genau, was sie machen wollte. Sie wollte nicht studieren, weil sie lieber praktisch arbeitet.", en: "Marlene is nineteen and is training as a mechatronics technician at a company in Stuttgart. After school, she didn't know exactly what she wanted to do. She didn't want to go to university, because she prefers practical work.", fr: "Marlene a dix-neuf ans et suit une formation de mécatronicienne dans une entreprise de Stuttgart. Après l'école, elle ne savait pas exactement ce qu'elle voulait faire. Elle ne voulait pas faire d'études, parce qu'elle préfère le travail pratique." },
      { de: "In Deutschland ist die Ausbildung oft „dual“: Die Auszubildenden lernen in einer Firma und in einer Berufsschule. Marlene ist drei Tage pro Woche in der Firma und zwei Tage in der Schule. Sie verdient auch schon ein bisschen Geld.", en: "In Germany, vocational training is often “dual”: trainees learn in a company and at a vocational school. Marlene spends three days a week at the company and two days at school. She also already earns a little money.", fr: "En Allemagne, la formation professionnelle est souvent « en alternance » : les apprentis apprennent dans une entreprise et dans une école professionnelle. Marlene passe trois jours par semaine dans l'entreprise et deux jours à l'école. Elle gagne aussi déjà un peu d'argent." },
      { de: "„Am Anfang war es schwer“, erzählt sie. „Ich musste um sechs Uhr aufstehen, und ich hatte viele neue Kollegen. Aber ich finde, dass man in der Praxis am meisten lernt.“", en: "“At the beginning it was hard,” she says. “I had to get up at six, and I had lots of new colleagues. But I think you learn most by doing.”", fr: "« Au début, c'était dur », raconte-t-elle. « Je devais me lever à six heures, et j'avais beaucoup de nouveaux collègues. Mais je trouve qu'on apprend le plus dans la pratique. »" },
      { de: "Eine Ausbildung dauert meistens zwei bis dreieinhalb Jahre. Danach möchte Marlene in der Firma bleiben. „Mein Chef hat gesagt, dass ich gute Chancen habe“, sagt sie und lacht.", en: "Vocational training usually lasts two to three and a half years. Afterwards, Marlene would like to stay at the company. “My boss said I have a good chance,” she says, laughing.", fr: "Une formation dure en général de deux à trois ans et demi. Ensuite, Marlene aimerait rester dans l'entreprise. « Mon chef m'a dit que j'avais de bonnes chances », dit-elle en riant." }
    ],
    glossary: { "Mechatronikerin": ["mechatronics technician (a woman)", "mécatronicienne"], "wusste": ["knew", "savait"], "studieren": ["to go to university", "faire des études"], "praktisch": ["practical, practically", "pratique, concrètement"], "Auszubildenden": ["trainees, apprentices", "apprentis"], "Berufsschule": ["vocational school", "école professionnelle"], "Anfang": ["beginning", "début"], "Praxis": ["practice", "pratique"], "meisten": ["most", "le plus"], "dreieinhalb": ["three and a half", "trois et demi"], "Chancen": ["chances", "chances"], "lacht": ["laughs", "rit"] },
    questions: [
      { q: "Was macht Marlene?", o: ["Eine Ausbildung als Mechatronikerin", "Ein Studium an der Universität", "Ein Praktikum in einem Hotel"], a: 0 },
      { q: "Warum wollte Marlene nicht studieren?", o: ["Weil sie lieber praktisch arbeitet.", "Weil sie kein Geld hatte.", "Weil sie in Stuttgart wohnt."], a: 0 },
      { q: "Was bedeutet „duale“ Ausbildung?", o: ["Man lernt in einer Firma und in einer Berufsschule.", "Man lernt zwei Berufe.", "Man arbeitet in zwei Ländern."], a: 0 },
      { q: "Was war am Anfang schwer für Marlene?", o: ["Früh aufstehen und viele neue Kollegen", "Die Schule am Samstag", "Das Gehalt"], a: 0 },
      { q: "Wie lange dauert eine Ausbildung meistens?", o: ["Zwei bis dreieinhalb Jahre", "Sechs Monate", "Fünf bis sechs Jahre"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-a2-1", unit: "a2-1", level: "A2", icon: "briefcase",
    title: "Ein neuer Job", title_fr: "Un nouveau travail",
    context: "Petra meets her old friend Dieter in a café in Hanover. Dieter has just changed jobs.", context_fr: "Petra retrouve son vieil ami Dieter dans un café à Hanovre. Dieter vient de changer de travail.",
    words: [["wechseln", "to change (job)", "changer (de travail)"], ["das Team", "the team", "l'équipe"], ["die Kantine", "the canteen", "la cantine"], ["der Weg zur Arbeit", "the way to work, the commute", "le trajet jusqu'au travail"], ["sich lohnen", "to be worth it", "valoir la peine"]],
    lines: [["Petra", "Dieter! Ich habe gehört, dass du eine neue Stelle hast!", "de-DE"], ["Dieter", "Ja, seit einem Monat arbeite ich bei einer Softwarefirma.", "de-DE"], ["Petra", "Toll! Und warum hast du gewechselt? Du warst doch zehn Jahre bei der Versicherung.", "de-DE"], ["Dieter", "Weil die Arbeit dort langweilig war. Ich hatte jeden Tag die gleichen Aufgaben.", "de-DE"], ["Petra", "Und jetzt? Gefällt dir die neue Arbeit?", "de-DE"], ["Dieter", "Ja, sehr! Sie ist abwechslungsreich, und das Team ist super. Wir sagen alle du, auch zur Chefin.", "de-DE"], ["Petra", "Und das Gehalt?", "de-DE"], ["Dieter", "Ich verdiene ein bisschen weniger, aber ich arbeite nur vier Tage pro Woche. Das lohnt sich!", "de-DE"], ["Petra", "Vier Tage? Da bin ich neidisch! Ich musste letzte Woche jeden Abend Überstunden machen.", "de-DE"], ["Dieter", "Dann such dir doch auch eine neue Stelle!", "de-DE"]],
    gist: ["Worüber sprechen Petra und Dieter?", ["Über Dieters neue Stelle", "Über ihren Urlaub", "Über eine Versicherung"]],
    detail: [["Seit wann hat Dieter die neue Stelle?", ["Seit einem Monat", "Seit zehn Jahren", "Seit einer Woche"]], ["Warum hat er gewechselt?", ["Die Arbeit war langweilig.", "Er hatte zu viele Überstunden.", "Das Gehalt war zu klein."]], ["Wie viele Tage arbeitet er jetzt pro Woche?", ["Vier", "Fünf", "Drei"]], ["Was musste Petra letzte Woche machen?", ["Überstunden", "Eine Bewerbung schreiben", "Einen Kurs besuchen"]]],
    decode: ["Weil die Arbeit dort langweilig war.", "Ich musste letzte Woche jeden Abend Überstunden machen."],
    tip: "In a weil- or dass-clause, the key verb comes last: Weil die Arbeit dort langweilig… war. Keep the beginning in mind and wait for the end: German makes you a patient listener!", tip_fr: "Dans une subordonnée en weil ou dass, le verbe essentiel arrive en dernier : Weil die Arbeit dort langweilig… war. Garde le début en tête et attends la fin : l'allemand rend patient !"
  }]);

  W.PROMPTS.push({ id: "de-a2-1", level: "A2", q: "Was machst du beruflich (oder was möchtest du später machen)? Was gefällt dir daran, und warum?", en: "What do you do for a living (or what would you like to do later)? What do you like about it, and why?", fr: "Que fais-tu dans la vie (ou que voudrais-tu faire plus tard) ? Qu'est-ce qui te plaît dans ce métier, et pourquoi ?", time: 90,
    phrases: ["Ich arbeite seit … bei / als…", "Mir gefällt, dass…", "…, weil…", "Früher war ich / hatte ich…", "Ich finde, dass…"],
    model: "Ich arbeite seit vier Jahren bei einer kleinen Firma in Lyon, im Marketing. Mir gefällt meine Arbeit, weil sie abwechslungsreich ist: Ich schreibe Texte, plane Projekte und spreche mit Kunden. Früher war ich in einer großen Firma, aber dort hatte ich viel Stress. Ich finde, dass ein gutes Team das Wichtigste ist." });

  W.WRITING_GUIDE["a2-1"] = { genre: "An email to a friend about a new job", genre_fr: "Un e-mail à un ami sur ton nouveau travail",
    plan: [["Give your news: you have a new job.", "Annonce la nouvelle : tu as un nouveau travail."], ["Where you work and since when.", "Où tu travailles et depuis quand."], ["What you like, with weil or dass.", "Ce qui te plaît, avec weil ou dass."], ["What your old job was like (war, hatte).", "Comment était ton ancien travail (war, hatte)."], ["Suggest meeting up, and say goodbye.", "Propose de vous voir, et dis au revoir."]],
    marks: [["ich habe eine neue Stelle", "the news", "la nouvelle"], ["seit zwei Wochen", "seit + present tense", "seit + présent"], ["weil die Kollegen sehr nett sind", "weil: verb at the end", "weil : verbe à la fin"], ["Ich finde, dass", "giving an opinion", "donner son opinion"], ["Früher hatte ich", "the past of haben", "le passé de haben"], ["Hast du nächste Woche Zeit?", "suggesting a meeting", "proposer de se voir"]] };

  W.COURSE.push({ id: "a2-1", level: "A2", icon: "briefcase", title: "Work and jobs", title_fr: "Le travail et les métiers",
    intro: "Welcome to A2! In this unit, you'll talk about work: jobs and the workplace, the simple past of sein, haben and the modal verbs (ich war, ich hatte, ich musste), subordinate clauses with weil and dass that send the verb to the end, and what to say in a job interview.",
    intro_fr: "Bienvenue au niveau A2 ! Dans cette unité, tu vas parler de travail : les métiers et l'entreprise, le prétérit de sein, haben et des verbes de modalité (ich war, ich hatte, ich musste), les subordonnées avec weil et dass qui envoient le verbe à la fin, et ce qu'il faut dire dans un entretien d'embauche.",
    can: ["Talk about your job and your workplace", "Use war, hatte and the past of the modal verbs", "Give reasons and opinions with weil, dass, denn and deshalb", "Introduce yourself in a job interview"],
    can_fr: ["Parler de ton métier et de ton lieu de travail", "Employer war, hatte et le passé des verbes de modalité", "Donner des raisons et des opinions avec weil, dass, denn et deshalb", "Te présenter dans un entretien d'embauche"],
    lessons: [22, 23, 24], vocab: ["berufeDE", "arbeitsplatzDE", "meinungDE"], reading: "ausbildung", prompt: "de-a2-1",
    writing: { task: "You've started a new job. Write an email to your friend Sven (40-60 words): where you work, since when, what you like and why, what your old job was like, and suggest meeting up.", task_fr: "Tu as commencé un nouveau travail. Écris un e-mail à ton ami Sven (40 à 60 mots) : où tu travailles, depuis quand, ce qui te plaît et pourquoi, comment était ton ancien travail, et propose de vous voir.", words: "40-60",
      tips: ["Lieber Sven,", "ich habe eine neue Stelle!", "Ich arbeite seit…", "…, weil…", "Hast du … Zeit?"],
      checklist: ["I used seit + present tense", "In my weil / dass clauses, the verb is at the end", "I used war or hatte for the past", "I suggested meeting up", "I stayed between 40 and 60 words"],
      checklist_fr: ["J'ai employé seit + présent", "Dans mes subordonnées en weil / dass, le verbe est à la fin", "J'ai employé war ou hatte pour le passé", "J'ai proposé de nous voir", "J'ai écrit entre 40 et 60 mots"],
      model: "Lieber Sven,\n\nich habe eine neue Stelle! Ich arbeite seit zwei Wochen bei einer Firma in Köln, im Marketing. Die Arbeit gefällt mir, weil die Kollegen sehr nett sind. Ich finde, dass das sehr wichtig ist. Früher hatte ich viel Stress und war oft müde. Hast du nächste Woche Zeit? Dann erzähle ich dir alles!\n\nViele Grüße\nCamille" } });
})();
