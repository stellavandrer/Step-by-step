/* Cours d'allemand, unité B1-4 « Education and learning / Éducation et apprentissage » : le but (um … zu, damit, wozu),
   les verbes à préposition fixe et les adverbes pronominaux (darauf, worauf, auf wen), faire une présentation
   (Goethe B1, oral partie 2). Explications et traductions en anglais ET en français. Personnages fictifs.
   Faits vérifiables seulement : Friedrich Fröbel (1782-1852) ouvre le premier « Kindergarten » en 1840 à Bad
   Blankenburg (Thuringe) ; l'image des enfants comme plantes et de l'éducatrice comme jardinière ; ses « Spielgaben »
   (balle, cube, cylindre…) ; interdiction des jardins d'enfants en Prusse de 1851 à 1860 ; le mot est passé tel quel
   en anglais ; en Allemagne, droit à une place en crèche dès un an depuis août 2013. École : primaire de quatre ans
   dans la plupart des Länder (six à Berlin et dans le Brandebourg) ; l'Abitur peut aussi se passer dans beaucoup de
   Gesamtschulen. Présentation Goethe B1 : sujet, expérience personnelle, situation dans ton pays, avantages et
   inconvénients avec ton avis, conclusion et remerciements. Écrit : e-mail personnel (partie 1, environ 80 mots). */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "bildungDE", icon: "graduation-cap", title: "School and studies", title_fr: "L'école et les études", level: "B1", words: [
    ["die Bildung", "education", "l'éducation, la formation", "Bildung ist in Deutschland Sache der Bundesländer."],
    ["die Grundschule, -n", "the primary school", "l'école primaire", "Die Grundschule dauert meistens vier Jahre."],
    ["das Gymnasium, Gymnasien", "the grammar school (academic secondary school)", "le lycée (filière générale)", "Nach der Grundschule ging sie aufs Gymnasium."],
    ["das Abitur", "the school-leaving exam (A levels)", "le baccalauréat", "Er hat letztes Jahr Abitur gemacht."],
    ["die Note, -n", "the mark, the grade", "la note", "In Deutschland ist die Eins die beste Note."],
    ["das Fach, ¨-er", "the subject", "la matière", "Mein Lieblingsfach war Geschichte."],
    ["das Studium, Studien", "university studies", "les études (supérieures)", "Das Studium dauert drei Jahre."],
    ["die Vorlesung, -en", "the lecture", "le cours magistral", "Die Vorlesung beginnt um acht Uhr."],
    ["der Abschluss, ¨-e", "the qualification, the degree", "le diplôme (de fin d'études)", "Mit diesem Abschluss findet man leicht eine Stelle."],
    ["durchfallen", "to fail (an exam)", "échouer, rater (un examen)", "Leider ist er durch die Prüfung gefallen."],
    ["sich vorbereiten auf", "to prepare for", "se préparer à", "Sie bereitet sich auf das Abitur vor."],
    ["wiederholen", "to revise, to repeat", "réviser, répéter", "Vor der Prüfung wiederhole ich alle Wörter."],
    ["der Kindergarten, ¨", "the nursery school, the kindergarten", "le jardin d'enfants, la maternelle", "Unser Sohn geht seit Mai in den Kindergarten."],
    ["teilnehmen an", "to take part in", "participer à", "Ich nehme an einem Sprachkurs teil."],
    ["sich interessieren für", "to be interested in", "s'intéresser à", "Wofür interessierst du dich?"],
    ["sich kümmern um", "to look after, to take care of", "s'occuper de", "Wer kümmert sich um die Kinder?"]
  ] },
  { id: "praesentierenDE", icon: "presentation", title: "Presenting and discussing", title_fr: "Présenter et discuter", level: "B1", words: [
    ["die Präsentation, -en", "the presentation", "la présentation, l'exposé", "Morgen halte ich eine Präsentation."],
    ["der Vortrag, ¨-e", "the talk, the lecture", "la conférence, l'exposé", "Der Vortrag war sehr interessant."],
    ["die Folie, -n", "the slide", "la diapositive", "Auf der nächsten Folie sehen Sie eine Grafik."],
    ["der Vorteil, -e", "the advantage", "l'avantage", "Ein Vorteil ist, dass man flexibel ist."],
    ["der Nachteil, -e", "the disadvantage", "l'inconvénient", "Ein Nachteil sind die hohen Kosten."],
    ["einerseits … andererseits", "on the one hand … on the other hand", "d'un côté … de l'autre", "Einerseits ist es teuer, andererseits lernt man viel."],
    ["im Vergleich zu", "compared with", "par rapport à", "Im Vergleich zu Frankreich gibt es hier weniger Ferien."],
    ["zusammenfassen", "to sum up", "résumer", "Ich fasse kurz zusammen."],
    ["erwähnen", "to mention", "mentionner", "Ich möchte noch etwas erwähnen."],
    ["zum Schluss", "finally, to finish", "pour finir", "Zum Schluss möchte ich Ihnen danken."],
    ["Mein Thema heißt …", "my topic is …", "mon sujet s'intitule …", "Mein Thema heißt: Lernen mit dem Handy."],
    ["Vielen Dank fürs Zuhören!", "thank you for listening!", "merci de votre attention !", "Das war meine Präsentation. Vielen Dank fürs Zuhören!"],
    ["Haben Sie noch Fragen?", "do you have any questions?", "avez-vous des questions ?", "Haben Sie noch Fragen? Dann gern!"],
    ["Wozu?", "what for?", "pour quoi faire ?", "Wozu brauchst du so viele Bücher?"]
  ] });

  W.LESSONS.push(
  {
    id: 52, level: "B1", icon: "target",
    title: "um … zu, damit: saying why you do something", title_fr: "um … zu, damit : dire dans quel but",
    subtitle: "The purpose of an action, with the same subject or a different one.", subtitle_fr: "Le but d'une action, avec le même sujet ou un autre.",
    body: `
<h2>um … zu: in order to</h2>
<p>To give a purpose, like English "(in order) to": <s-de>Ich lerne Deutsch, um in Wien zu studieren.</s-de> <s-de>um</s-de> opens the clause, <s-de>zu</s-de> + infinitive closes it. With separable verbs, <s-de>zu</s-de> goes in the middle: <s-de>Ich gehe früh ins Bett, um früh aufzustehen.</s-de> This works when the person is the same in both parts.</p>
<h2>damit: so that</h2>
<p>When the person changes, use <s-de>damit</s-de>, with the verb at the end: <s-de>Ich spreche langsam, damit mich alle verstehen.</s-de> (so that everyone understands me) · <s-de>Die Eltern sparen, damit ihre Tochter studieren kann.</s-de></p>
<table>
<tr><th>Word</th><th>When</th></tr>
<tr><td><s-de>um … zu</s-de></td><td>same person: <s-de>Ich lerne, um die Prüfung zu bestehen.</s-de></td></tr>
<tr><td><s-de>damit</s-de></td><td>another person: <s-de>Ich erkläre es, damit du es verstehst.</s-de></td></tr>
</table>
<h2>Asking: wozu?</h2>
<p><s-de>Wozu brauchst du das?</s-de> (What do you need that for?) asks about the purpose; <s-de>warum</s-de> asks about the reason.</p>
<div class="tip">English "for" + noun is <s-de>für</s-de>: <s-de>für die Prüfung</s-de>. But "for" + an action is usually <s-de>um … zu</s-de>: "I need it for cooking" = <s-de>Ich brauche es, um zu kochen</s-de>.</div>
`,
    body_fr: `
<h2>um … zu : pour + infinitif</h2>
<p>Pour exprimer un but, comme « pour + infinitif » : <s-de>Ich lerne Deutsch, um in Wien zu studieren.</s-de> (J'apprends l'allemand pour étudier à Vienne.) <s-de>um</s-de> ouvre la proposition, <s-de>zu</s-de> + infinitif la ferme. Avec un verbe séparable, <s-de>zu</s-de> se place au milieu : <s-de>Ich gehe früh ins Bett, um früh aufzustehen.</s-de> Cela fonctionne quand le sujet est le même dans les deux parties.</p>
<h2>damit : pour que</h2>
<p>Quand le sujet change, on emploie <s-de>damit</s-de>, avec le verbe à la fin : <s-de>Ich spreche langsam, damit mich alle verstehen.</s-de> (Je parle lentement pour que tout le monde me comprenne.) · <s-de>Die Eltern sparen, damit ihre Tochter studieren kann.</s-de> Bonne nouvelle : pas de subjonctif après <s-de>damit</s-de>, contrairement à « pour que ».</p>
<table>
<tr><th>Mot</th><th>Quand</th></tr>
<tr><td><s-de>um … zu</s-de></td><td>même sujet : <s-de>Ich lerne, um die Prüfung zu bestehen.</s-de></td></tr>
<tr><td><s-de>damit</s-de></td><td>autre sujet : <s-de>Ich erkläre es, damit du es verstehst.</s-de></td></tr>
</table>
<h2>Poser la question : wozu ?</h2>
<p><s-de>Wozu brauchst du das?</s-de> (Pour quoi faire en as-tu besoin ?) porte sur le but ; <s-de>warum</s-de> porte sur la cause.</p>
<div class="tip">« Pour » + nom se dit <s-de>für</s-de> : <s-de>für die Prüfung</s-de> (pour l'examen). Mais « pour » + verbe se dit <s-de>um … zu</s-de> : <s-de>um die Prüfung zu bestehen</s-de> (pour réussir l'examen). Ne confonds pas les deux !</div>
`,
    examples: [
      ["Ich lerne Deutsch, um in Wien zu studieren.", "I'm learning German in order to study in Vienna.", "J'apprends l'allemand pour étudier à Vienne."],
      ["Sie steht um sechs auf, um vor der Arbeit zu joggen.", "She gets up at six to go jogging before work.", "Elle se lève à six heures pour courir avant le travail."],
      ["Ich spreche langsam, damit mich alle verstehen.", "I speak slowly so that everyone understands me.", "Je parle lentement pour que tout le monde me comprenne."],
      ["Die Eltern sparen, damit ihre Tochter studieren kann.", "The parents are saving so that their daughter can go to university.", "Les parents économisent pour que leur fille puisse faire des études."],
      ["Wozu brauchst du so viele Bücher? — Um mich auf die Prüfung vorzubereiten.", "What do you need so many books for? — To prepare for the exam.", "Pour quoi faire, tous ces livres ? — Pour me préparer à l'examen."],
      ["Ich schreibe die Wörter auf Karten, damit ich sie besser behalte.", "I write the words on cards so that I remember them better.", "J'écris les mots sur des fiches pour mieux les retenir."],
      ["Um die Stelle zu bekommen, braucht man das Zertifikat B1.", "To get the job, you need the B1 certificate.", "Pour obtenir le poste, il faut le certificat B1."]
    ],
    quiz: [
      { q: "“Ich lerne viel, ___ die Prüfung zu bestehen.”", q_fr: "« Ich lerne viel, ___ die Prüfung zu bestehen. »", o: ["um", "damit", "für"], a: 0, ex: "Same person, zu + infinitive: um … zu.", ex_fr: "Même sujet, zu + infinitif : um … zu." },
      { q: "“Ich erkläre es dir, ___ du es verstehst.”", q_fr: "« Ich erkläre es dir, ___ du es verstehst. »", o: ["damit", "um", "weil"], a: 0, ex: "Another person (du): damit + verb at the end.", ex_fr: "Un autre sujet (du) : damit + verbe à la fin." },
      { q: "“I get up early to go jogging.”", q_fr: "« Je me lève tôt pour aller courir. »", o: ["Ich stehe früh auf, um joggen zu gehen.", "Ich stehe früh auf, um zu joggen gehen.", "Ich stehe früh auf, für joggen zu gehen."], a: 0, ex: "zu goes just before the last verb: joggen zu gehen.", ex_fr: "zu se place juste avant le dernier verbe : joggen zu gehen." },
      { q: "“Ich gehe früh ins Bett, um früh ___.” (aufstehen)", q_fr: "« Ich gehe früh ins Bett, um früh ___. » (aufstehen)", o: ["aufzustehen", "zu aufstehen", "aufstehen"], a: 0, ex: "Separable verb: zu in the middle.", ex_fr: "Verbe séparable : zu au milieu." },
      { q: "To ask about the purpose:", q_fr: "Pour demander le but :", o: ["Wozu?", "Woher?", "Wann?"], a: 0, ex: "Wozu? = what for?", ex_fr: "Wozu? = pour quoi faire ?" }
    ]
  },
  {
    id: 53, level: "B1", icon: "link",
    title: "Worauf wartest du? Verbs with prepositions", title_fr: "Worauf wartest du ? Les verbes à préposition",
    subtitle: "warten auf, denken an, sich freuen auf: and how to say “on it”, “about it”, “what for?”.", subtitle_fr: "warten auf, denken an, sich freuen auf : et comment dire « en », « y », « à quoi ? ».",
    body: `
<h2>Verbs with a fixed preposition</h2>
<p>Many German verbs come with a preposition, like English "wait for" or "think of": <s-de>warten auf</s-de> (+ accusative), <s-de>denken an</s-de> (+ acc.), <s-de>sich interessieren für</s-de>, <s-de>sich freuen auf</s-de> (to look forward to), <s-de>sich freuen über</s-de> (to be pleased about), <s-de>sprechen über</s-de>, <s-de>träumen von</s-de>, <s-de>Angst haben vor</s-de> (+ dative), <s-de>sich kümmern um</s-de>, <s-de>teilnehmen an</s-de> (+ dat.). Learn each verb with its preposition and its case.</p>
<h2>Things: da- and wo-</h2>
<p>For a thing, replace preposition + noun with <s-de>da(r)-</s-de> + preposition: <s-de>Ich warte auf den Bus. — Ich warte darauf.</s-de> Ask with <s-de>wo(r)-</s-de>: <s-de>Worauf wartest du?</s-de> · <s-de>Wofür interessierst du dich?</s-de> Add an <b>r</b> before a vowel: <s-de>darauf, darüber, daran, worauf, woran</s-de>.</p>
<h2>People: preposition + pronoun</h2>
<p><s-de>Ich warte auf meine Schwester. — Ich warte auf sie.</s-de> · <s-de>Auf wen wartest du?</s-de> · <s-de>Mit wem sprichst du?</s-de></p>
<table>
<tr><th>Verb</th><th>a thing</th><th>a person</th></tr>
<tr><td><s-de>warten auf</s-de></td><td><s-de>darauf · worauf?</s-de></td><td><s-de>auf ihn · auf wen?</s-de></td></tr>
<tr><td><s-de>denken an</s-de></td><td><s-de>daran · woran?</s-de></td><td><s-de>an sie · an wen?</s-de></td></tr>
<tr><td><s-de>sprechen über</s-de></td><td><s-de>darüber · worüber?</s-de></td><td><s-de>über ihn · über wen?</s-de></td></tr>
</table>
<h2>With a whole clause</h2>
<p>The <s-de>da</s-de>-word announces what follows: <s-de>Ich freue mich darauf, dich zu sehen.</s-de> · <s-de>Denk daran, dass morgen Prüfung ist!</s-de></p>
<div class="tip">The prepositions often differ from English: proud <i>of</i> = <s-de>stolz auf</s-de>, afraid <i>of</i> = <s-de>Angst vor</s-de>, think <i>of</i> = <s-de>denken an</s-de>, interested <i>in</i> = <s-de>interessiert an</s-de> or <s-de>sich interessieren für</s-de>. Learn them as one block, with an example.</div>
`,
    body_fr: `
<h2>Les verbes à préposition fixe</h2>
<p>Beaucoup de verbes allemands vont avec une préposition, comme « penser à » ou « rêver de » : <s-de>warten auf</s-de> (attendre, + accusatif), <s-de>denken an</s-de> (penser à, + acc.), <s-de>sich interessieren für</s-de> (s'intéresser à), <s-de>sich freuen auf</s-de> (se réjouir à l'avance de), <s-de>sich freuen über</s-de> (être content de), <s-de>sprechen über</s-de> (parler de), <s-de>träumen von</s-de> (rêver de), <s-de>Angst haben vor</s-de> (avoir peur de, + datif), <s-de>sich kümmern um</s-de> (s'occuper de), <s-de>teilnehmen an</s-de> (participer à, + dat.). Apprends chaque verbe avec sa préposition et son cas.</p>
<h2>Les choses : da- et wo-</h2>
<p>Pour une chose, on remplace préposition + nom par <s-de>da(r)-</s-de> + préposition, comme « y » ou « en » en français : <s-de>Ich warte auf den Bus. — Ich warte darauf.</s-de> (Je l'attends.) On pose la question avec <s-de>wo(r)-</s-de> : <s-de>Worauf wartest du?</s-de> (Qu'est-ce que tu attends ?) · <s-de>Wofür interessierst du dich?</s-de> (À quoi t'intéresses-tu ?) On ajoute un <b>r</b> devant une voyelle : <s-de>darauf, darüber, daran, worauf, woran</s-de>.</p>
<h2>Les personnes : préposition + pronom</h2>
<p><s-de>Ich warte auf meine Schwester. — Ich warte auf sie.</s-de> · <s-de>Auf wen wartest du?</s-de> (Qui attends-tu ?) · <s-de>Mit wem sprichst du?</s-de></p>
<table>
<tr><th>Verbe</th><th>une chose</th><th>une personne</th></tr>
<tr><td><s-de>warten auf</s-de></td><td><s-de>darauf · worauf?</s-de></td><td><s-de>auf ihn · auf wen?</s-de></td></tr>
<tr><td><s-de>denken an</s-de></td><td><s-de>daran · woran?</s-de></td><td><s-de>an sie · an wen?</s-de></td></tr>
<tr><td><s-de>sprechen über</s-de></td><td><s-de>darüber · worüber?</s-de></td><td><s-de>über ihn · über wen?</s-de></td></tr>
</table>
<h2>Avec une proposition entière</h2>
<p>Le mot en <s-de>da-</s-de> annonce ce qui suit : <s-de>Ich freue mich darauf, dich zu sehen.</s-de> (J'ai hâte de te voir.) · <s-de>Denk daran, dass morgen Prüfung ist!</s-de> (Pense au fait que demain, il y a l'examen !)</p>
<div class="tip">Les prépositions diffèrent souvent du français : fier <i>de</i> = <s-de>stolz auf</s-de>, avoir peur <i>de</i> = <s-de>Angst vor</s-de>, penser <i>à</i> = <s-de>denken an</s-de>, s'intéresser <i>à</i> = <s-de>sich interessieren für</s-de>. Apprends-les en bloc, avec un exemple.</div>
`,
    examples: [
      ["Ich warte schon seit einer Stunde auf den Bus.", "I've been waiting for the bus for an hour.", "J'attends le bus depuis une heure."],
      ["Worauf wartest du? — Auf die Ergebnisse der Prüfung.", "What are you waiting for? — For the exam results.", "Qu'est-ce que tu attends ? — Les résultats de l'examen."],
      ["Ich freue mich schon auf die Ferien. Und du? — Ich freue mich auch darauf!", "I'm already looking forward to the holidays. And you? — I'm looking forward to them too!", "J'ai déjà hâte d'être en vacances. Et toi ? — Moi aussi !"],
      ["Wofür interessierst du dich? — Für Geschichte und Musik.", "What are you interested in? — History and music.", "À quoi t'intéresses-tu ? — À l'histoire et à la musique."],
      ["Denk daran, dass wir morgen um acht anfangen!", "Remember that we start at eight tomorrow!", "N'oublie pas que nous commençons demain à huit heures !"],
      ["Mit wem hast du über das Problem gesprochen?", "Who did you talk to about the problem?", "Avec qui as-tu parlé du problème ?"],
      ["Viele Studierende haben Angst vor der mündlichen Prüfung.", "Many students are afraid of the oral exam.", "Beaucoup d'étudiants ont peur de l'oral."]
    ],
    quiz: [
      { q: "“Ich warte ___ den Bus.”", q_fr: "« Ich warte ___ den Bus. »", o: ["auf", "für", "an"], a: 0, ex: "warten auf + accusative.", ex_fr: "warten auf + accusatif." },
      { q: "“Ich denke oft an die Ferien.” → “Ich denke oft ___.”", q_fr: "« Ich denke oft an die Ferien. » → « Ich denke oft ___. »", o: ["daran", "an sie", "darauf"], a: 0, ex: "A thing: da(r) + an = daran.", ex_fr: "Une chose : da(r) + an = daran." },
      { q: "“Ich warte auf meinen Bruder.” → “Ich warte ___.”", q_fr: "« Ich warte auf meinen Bruder. » → « Ich warte ___. »", o: ["auf ihn", "darauf", "worauf"], a: 0, ex: "A person: preposition + pronoun.", ex_fr: "Une personne : préposition + pronom." },
      { q: "“What are you interested in?”", q_fr: "« À quoi t'intéresses-tu ? »", o: ["Wofür interessierst du dich?", "Für was interessierst dich du?", "Worauf interessierst du dich?"], a: 0, ex: "sich interessieren für → wofür?", ex_fr: "sich interessieren für → wofür?" },
      { q: "“I'm looking forward to seeing you.”", q_fr: "« J'ai hâte de te voir. »", o: ["Ich freue mich darauf, dich zu sehen.", "Ich freue mich darüber, dich zu sehen.", "Ich freue mich auf, dich zu sehen."], a: 0, ex: "sich freuen auf (something to come) → darauf, + zu.", ex_fr: "sich freuen auf (quelque chose à venir) → darauf, + zu." }
    ]
  },
  {
    id: 54, level: "B1", kind: "functional", icon: "presentation",
    title: "Everyday German: giving a presentation", title_fr: "L'allemand de tous les jours : faire une présentation",
    subtitle: "Five steps, as in the Goethe B1 speaking exam: the topic, your experience, your country, pros and cons, the end.", subtitle_fr: "Cinq étapes, comme à l'oral du Goethe B1 : le sujet, ton expérience, ton pays, le pour et le contre, la fin.",
    body: `
<h2>The five steps</h2>
<p>In the Goethe-Zertifikat B1 speaking exam (part 2), you present a topic for about three minutes, following five points. It's a good structure for any presentation.</p>
<ol>
<li><b>The topic</b>: <s-de>Mein Thema heißt…</s-de> · <s-de>Ich möchte heute über … sprechen.</s-de> · <s-de>Zuerst erzähle ich…, dann…, und zum Schluss…</s-de></li>
<li><b>Your experience</b>: <s-de>Ich habe selbst … erlebt.</s-de> · <s-de>Als ich … war, …</s-de></li>
<li><b>Your country</b>: <s-de>In meinem Heimatland ist es so, dass…</s-de> · <s-de>Im Vergleich zu Deutschland…</s-de></li>
<li><b>Pros and cons, your opinion</b>: <s-de>Ein Vorteil ist…</s-de> · <s-de>Ein Nachteil ist…</s-de> · <s-de>Einerseits…, andererseits…</s-de> · <s-de>Meiner Meinung nach…</s-de></li>
<li><b>The end</b>: <s-de>Ich fasse kurz zusammen: …</s-de> · <s-de>Vielen Dank fürs Zuhören! Haben Sie noch Fragen?</s-de></li>
</ol>
<h2>Answering questions</h2>
<p>After the presentation, people ask you questions (part 3): <s-de>Das ist eine gute Frage.</s-de> · <s-de>Darüber habe ich noch nicht nachgedacht, aber…</s-de> · <s-de>Wie meinen Sie das genau?</s-de> And you ask a question about someone else's presentation: <s-de>Mich würde interessieren, ob…</s-de></p>
<div class="tip">Announce each step: listeners follow better when they know where you are going. Speak slowly, look at your audience, and use the connectors you know (<s-de>deshalb, obwohl, trotzdem, um … zu</s-de>): they show your level.</div>
`,
    body_fr: `
<h2>Les cinq étapes</h2>
<p>À l'oral du Goethe-Zertifikat B1 (partie 2), tu présentes un sujet pendant environ trois minutes, en suivant cinq points. C'est une bonne structure pour n'importe quelle présentation.</p>
<ol>
<li><b>Le sujet</b> : <s-de>Mein Thema heißt…</s-de> · <s-de>Ich möchte heute über … sprechen.</s-de> · <s-de>Zuerst erzähle ich…, dann…, und zum Schluss…</s-de></li>
<li><b>Ton expérience</b> : <s-de>Ich habe selbst … erlebt.</s-de> · <s-de>Als ich … war, …</s-de></li>
<li><b>Ton pays</b> : <s-de>In meinem Heimatland ist es so, dass…</s-de> · <s-de>Im Vergleich zu Deutschland…</s-de></li>
<li><b>Le pour et le contre, ton avis</b> : <s-de>Ein Vorteil ist…</s-de> · <s-de>Ein Nachteil ist…</s-de> · <s-de>Einerseits…, andererseits…</s-de> · <s-de>Meiner Meinung nach…</s-de></li>
<li><b>La fin</b> : <s-de>Ich fasse kurz zusammen: …</s-de> · <s-de>Vielen Dank fürs Zuhören! Haben Sie noch Fragen?</s-de></li>
</ol>
<h2>Répondre aux questions</h2>
<p>Après la présentation, on te pose des questions (partie 3) : <s-de>Das ist eine gute Frage.</s-de> · <s-de>Darüber habe ich noch nicht nachgedacht, aber…</s-de> (Je n'y avais pas encore réfléchi, mais…) · <s-de>Wie meinen Sie das genau?</s-de> Et tu poses toi-même une question sur la présentation d'une autre personne : <s-de>Mich würde interessieren, ob…</s-de></p>
<div class="tip">Annonce chaque étape : on suit mieux quand on sait où tu vas. Parle lentement, regarde ton public, et utilise les connecteurs que tu connais (<s-de>deshalb, obwohl, trotzdem, um … zu</s-de>) : ce sont eux qui montrent ton niveau.</div>
`,
    examples: [
      ["Mein Thema heißt: Lernen mit dem Handy.", "My topic is: learning with your phone.", "Mon sujet s'intitule : apprendre avec son portable."],
      ["Zuerst erzähle ich von meinen Erfahrungen, dann spreche ich über die Situation in meinem Heimatland.", "First I'll talk about my experiences, then about the situation in my home country.", "D'abord, je parlerai de mon expérience, puis de la situation dans mon pays."],
      ["Im Vergleich zu Deutschland sind die Schultage bei uns länger.", "Compared with Germany, school days are longer where I'm from.", "Par rapport à l'Allemagne, les journées d'école sont plus longues chez nous."],
      ["Einerseits ist Online-Lernen flexibel, andererseits fehlt der Kontakt mit den anderen.", "On the one hand online learning is flexible; on the other hand, you miss contact with the others.", "D'un côté, apprendre en ligne est flexible ; de l'autre, le contact avec les autres manque."],
      ["Ich fasse kurz zusammen: Das Handy ist ein gutes Werkzeug, aber kein Lehrer.", "To sum up briefly: the phone is a good tool, but not a teacher.", "Je résume : le portable est un bon outil, mais pas un professeur."],
      ["Vielen Dank fürs Zuhören! Haben Sie noch Fragen?", "Thank you for listening! Do you have any questions?", "Merci de votre attention ! Avez-vous des questions ?"],
      ["Darüber habe ich noch nicht nachgedacht, aber das ist ein guter Punkt.", "I hadn't thought about that, but it's a good point.", "Je n'y avais pas encore réfléchi, mais c'est une bonne remarque."]
    ],
    quiz: [
      { q: "How to start a presentation:", q_fr: "Comment commencer une présentation :", o: ["Mein Thema heißt…", "Zum Schluss…", "Vielen Dank fürs Zuhören!"], a: 0, ex: "Introduce the topic first.", ex_fr: "D'abord, présente le sujet." },
      { q: "“On the one hand … on the other hand …”", q_fr: "« D'un côté … de l'autre … »", o: ["Einerseits … andererseits …", "Zuerst … zum Schluss …", "Weder … noch …"], a: 0, ex: "Einerseits … andererseits.", ex_fr: "Einerseits … andererseits." },
      { q: "How many points does the Goethe B1 presentation follow?", q_fr: "Combien de points suit la présentation du Goethe B1 ?", o: ["Five", "Two", "Ten"], o_fr: ["Cinq", "Deux", "Dix"], a: 0, ex: "Topic, experience, your country, pros and cons, the end.", ex_fr: "Sujet, expérience, ton pays, pour et contre, fin." },
      { q: "Someone asks a question you hadn't thought of. You say:", q_fr: "On te pose une question à laquelle tu n'avais pas pensé. Tu dis :", o: ["Darüber habe ich noch nicht nachgedacht, aber…", "Das weiß ich nicht. Nächste Frage!", "Das ist falsch."], a: 0, ex: "Gain time politely, then answer.", ex_fr: "Gagne du temps poliment, puis réponds." },
      { q: "“Compared with Germany…”", q_fr: "« Par rapport à l'Allemagne… »", o: ["Im Vergleich zu Deutschland…", "Im Gegenteil zu Deutschland…", "Mit Vergleich von Deutschland…"], a: 0, ex: "im Vergleich zu + dative.", ex_fr: "im Vergleich zu + datif." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    52: {
      gap: [["Ich lerne Deutsch, ___ in Berlin zu arbeiten.", "um"], ["Ich spreche langsam, ___ mich alle verstehen.", "damit"], ["Ich stehe früh auf, um den Zug ___. (nehmen)", "zu nehmen"], ["Er geht früh ins Bett, um früh ___. (aufstehen)", "aufzustehen"]],
      fix: [["Ich spare Geld für ein Auto zu kaufen.", "Ich spare Geld, um ein Auto zu kaufen.", "A purpose with a verb: um … zu, not für.", "Un but avec un verbe : um … zu, pas für."], ["Ich erkläre es langsam, um du es verstehst.", "Ich erkläre es langsam, damit du es verstehst.", "Another person (du): damit.", "Un autre sujet (du) : damit."]],
      task: ["Why are you learning German? Write four sentences with um … zu and damit.", "Pourquoi apprends-tu l'allemand ? Écris quatre phrases avec um … zu et damit.", "Ich lerne Deutsch, um mit meiner Familie in Österreich sprechen zu können. Ich höre jeden Tag Podcasts, um mein Hörverstehen zu verbessern. Meine Lehrerin spricht langsam, damit wir alles verstehen. Und ich schreibe Wörter auf Karten, damit ich sie nicht vergesse."]
    },
    53: {
      gap: [["Ich warte ___ den Bus.", "auf"], ["Ich denke oft an die Ferien. Ich denke oft ___.", "daran"], ["___ interessierst du dich? — Für Musik.", "Wofür"], ["Wir freuen uns ___, dich zu sehen.", "darauf"]],
      fix: [["Ich warte für den Bus.", "Ich warte auf den Bus.", "warten auf, not für.", "warten auf, pas für."], ["Ich habe Angst von der Prüfung.", "Ich habe Angst vor der Prüfung.", "Angst haben vor + dative.", "Angst haben vor + datif."]],
      task: ["Answer these questions in full sentences, using darauf, daran, dafür or a pronoun: Worauf freust du dich? Woran denkst du oft? Wofür interessierst du dich? Mit wem sprichst du über deine Probleme?", "Réponds à ces questions par des phrases complètes, avec darauf, daran, dafür ou un pronom : Worauf freust du dich? Woran denkst du oft? Wofür interessierst du dich? Mit wem sprichst du über deine Probleme?", "Ich freue mich auf den Sommer, weil ich dann ans Meer fahre. Ich denke oft an meine Großeltern. Ich interessiere mich für Fotografie, und ich spare gerade für eine neue Kamera. Über meine Probleme spreche ich meistens mit meiner besten Freundin, denn ich kann ihr alles erzählen."]
    },
    54: {
      gap: [["Mein ___ heißt: Lernen im Ausland.", "Thema"], ["Ein ___ ist, dass man eine neue Sprache lernt.", "Vorteil", "advantage", "avantage"], ["___ ist es teuer, andererseits lernt man viel.", "Einerseits"], ["Vielen Dank fürs ___!", "Zuhören"]],
      fix: [["Ein Vorteil ist, dass man ist flexibel.", "Ein Vorteil ist, dass man flexibel ist.", "dass: the verb at the end.", "dass : le verbe à la fin."], ["Im Vergleich mit Deutschland sind die Schulferien bei uns länger.", "Im Vergleich zu Deutschland sind die Schulferien bei uns länger.", "The usual expression is im Vergleich zu.", "L'expression habituelle est im Vergleich zu."]],
      task: ["Prepare the first and last sentences of a presentation on “Studying abroad”: announce your plan, then sum up and thank your audience.", "Prépare la première et la dernière partie d'une présentation sur « Étudier à l'étranger » : annonce ton plan, puis résume et remercie ton public.", "Mein Thema heißt: Studieren im Ausland. Zuerst erzähle ich von meinem Jahr in Leipzig, dann spreche ich über die Situation in meinem Heimatland, und zum Schluss nenne ich Vor- und Nachteile. … Ich fasse kurz zusammen: Ein Auslandsjahr ist teuer, aber man lernt unglaublich viel. Vielen Dank fürs Zuhören! Haben Sie noch Fragen?"]
    }
  });

  W.ROLEPLAYS.push(
  { id: "sprachschuleinfo", lesson: 52, level: "B1", icon: "graduation-cap", partner: "Frau Petersen", role: "an adviser at a language school", role_fr: "une conseillère dans une école de langues",
    title: "Choosing a German course", title_fr: "Choisir un cours d'allemand",
    setting: "You'd like to take an intensive German course. Frau Petersen at the language school asks about your goals.", setting_fr: "Tu voudrais suivre un cours intensif d'allemand. Mme Petersen, à l'école de langues, te pose des questions sur tes objectifs.",
    turns: [
      { p: "Guten Tag! Sie interessieren sich für einen Intensivkurs? Wozu brauchen Sie Deutsch?", en: "Hello! You're interested in an intensive course? What do you need German for?", fr: "Bonjour ! Vous vous intéressez à un cours intensif ? Pour quoi faire avez-vous besoin de l'allemand ?" },
      { y: ["Ich brauche Deutsch, um in Freiburg Medizin zu studieren.", "Ich brauche Deutsch, um in Freiburg Medizin studieren.", "Ich brauche Deutsch, damit in Freiburg Medizin zu studieren."], en: "I need German to study medicine in Freiburg.", fr: "J'ai besoin de l'allemand pour étudier la médecine à Fribourg-en-Brisgau.", why: "Same person: um … zu + infinitive at the end.", why_fr: "Même sujet : um … zu + infinitif à la fin." },
      { p: "Verstehe. Dafür brauchen Sie meistens das Niveau C1. Worauf möchten Sie sich besonders konzentrieren?", en: "I see. For that you usually need level C1. What would you like to focus on in particular?", fr: "Je vois. Pour cela, il faut en général le niveau C1. Sur quoi voulez-vous vous concentrer particulièrement ?" },
      { y: ["Vor allem auf das Sprechen. Darauf habe ich bis jetzt zu wenig geachtet.", "Vor allem auf das Sprechen. Dafür habe ich bis jetzt zu wenig geachtet.", "Vor allem auf das Sprechen. Darauf ich habe bis jetzt zu wenig geachtet."], en: "Above all on speaking. I haven't paid enough attention to it so far.", fr: "Surtout sur l'oral. Jusqu'ici, je n'y ai pas assez fait attention.", why: "achten auf → darauf; verb second after darauf.", why_fr: "achten auf → darauf ; verbe en deuxième position après darauf." },
      { p: "Gut. In unseren Kursen sprechen die Lehrkräfte nur Deutsch, damit Sie sich schnell daran gewöhnen.", en: "Good. In our courses the teachers speak only German, so that you get used to it quickly.", fr: "Bien. Dans nos cours, les enseignants ne parlent qu'allemand, pour que vous vous y habituiez vite." },
      { y: ["Das finde ich gut. Gibt es auch Angebote, damit man nachmittags mit anderen üben kann?", "Das finde ich gut. Gibt es auch Angebote, damit man kann nachmittags mit anderen üben?", "Das finde ich gut. Gibt es auch Angebote, um man nachmittags mit anderen üben kann?"], en: "I like that. Are there also activities so that you can practise with others in the afternoon?", fr: "Ça me plaît. Il y a aussi des activités pour pouvoir s'entraîner avec d'autres l'après-midi ?", why: "damit + the verb at the end (kann).", why_fr: "damit + le verbe à la fin (kann)." },
      { p: "Ja, wir haben ein Sprachcafé und Ausflüge am Wochenende. Haben Sie noch Fragen?", en: "Yes, we have a language café and trips at the weekend. Do you have any other questions?", fr: "Oui, nous avons un café des langues et des sorties le week-end. Avez-vous d'autres questions ?" },
      { y: ["Ja, mit wem kann ich über die Kosten sprechen?", "Ja, mit wer kann ich über die Kosten sprechen?", "Ja, womit kann ich über die Kosten sprechen?"], en: "Yes: who can I talk to about the costs?", fr: "Oui : avec qui puis-je parler des frais ?", why: "A person: mit wem? (dative).", why_fr: "Une personne : mit wem? (datif)." },
      { p: "Mit mir! Ich gebe Ihnen gleich unsere Preisliste.", en: "With me! I'll give you our price list right away.", fr: "Avec moi ! Je vous donne tout de suite notre liste de prix." },
      { y: ["Vielen Dank. Ich freue mich schon auf den Kurs!", "Vielen Dank. Ich freue mich schon über den Kurs!", "Vielen Dank. Ich freue mich schon an den Kurs!"], en: "Thank you very much. I'm already looking forward to the course!", fr: "Merci beaucoup. J'ai déjà hâte de commencer le cours !", why: "Something to come: sich freuen auf.", why_fr: "Quelque chose à venir : sich freuen auf." }
    ] },
  { id: "praesentationfragen", lesson: 54, level: "B1", icon: "presentation", partner: "Frau Busch", role: "your German teacher", role_fr: "ta professeure d'allemand",
    title: "After your presentation", title_fr: "Après ta présentation",
    setting: "You've just given a presentation on “Learning online” in your German class. Your teacher, Frau Busch, asks you questions.", setting_fr: "Tu viens de faire une présentation sur « Apprendre en ligne » en cours d'allemand. Ta professeure, Mme Busch, te pose des questions.",
    turns: [
      { p: "Vielen Dank für Ihre Präsentation! Darf ich Ihnen ein paar Fragen stellen?", en: "Thank you for your presentation! May I ask you a few questions?", fr: "Merci pour votre présentation ! Puis-je vous poser quelques questions ?" },
      { y: ["Ja, gern. Ich freue mich über Ihr Interesse.", "Ja, gern. Ich freue mich auf Ihr Interesse.", "Ja, gern. Ich freue mich über Ihrem Interesse."], en: "Yes, of course. I'm pleased you're interested.", fr: "Oui, bien sûr. Merci de votre intérêt.", why: "Something already there: sich freuen über + accusative.", why_fr: "Quelque chose de déjà là : sich freuen über + accusatif." },
      { p: "Sie haben gesagt, dass Sie mit einer App lernen. Wozu benutzen Sie die App genau?", en: "You said you learn with an app. What exactly do you use the app for?", fr: "Vous avez dit que vous apprenez avec une appli. À quoi vous sert-elle exactement ?" },
      { y: ["Ich benutze sie, um jeden Tag Vokabeln zu wiederholen.", "Ich benutze sie, um jeden Tag Vokabeln wiederholen.", "Ich benutze sie, damit jeden Tag Vokabeln zu wiederholen."], en: "I use it to revise vocabulary every day.", fr: "Je m'en sers pour réviser du vocabulaire tous les jours.", why: "um … zu + infinitive at the end.", why_fr: "um … zu + infinitif à la fin." },
      { p: "Und haben Sie keine Angst, dass Ihnen der Kontakt mit anderen fehlt?", en: "And aren't you afraid you'll miss contact with others?", fr: "Et vous n'avez pas peur que le contact avec les autres vous manque ?" },
      { y: ["Doch, davor habe ich ein bisschen Angst. Deshalb treffe ich mich einmal pro Woche mit einer Tandempartnerin.", "Doch, darauf habe ich ein bisschen Angst. Deshalb treffe ich mich einmal pro Woche mit einer Tandempartnerin.", "Doch, davor habe ich ein bisschen Angst. Deshalb ich treffe mich einmal pro Woche mit einer Tandempartnerin."], en: "Yes, I'm a bit afraid of that. That's why I meet a tandem partner once a week.", fr: "Si, j'en ai un peu peur. C'est pourquoi je retrouve une partenaire de tandem une fois par semaine.", why: "Angst haben vor → davor; deshalb + verb.", why_fr: "Angst haben vor → davor ; deshalb + verbe." },
      { p: "Eine gute Idee! Worüber sprechen Sie mit ihr?", en: "A good idea! What do you talk to her about?", fr: "Bonne idée ! De quoi parlez-vous avec elle ?" },
      { y: ["Über alles: über Filme, über die Arbeit und darüber, was wir am Wochenende gemacht haben.", "Über alles: über Filme, über die Arbeit und darauf, was wir am Wochenende gemacht haben.", "Über alles: über Filme, über die Arbeit und darüber, was wir haben am Wochenende gemacht."], en: "About everything: films, work and what we did at the weekend.", fr: "De tout : de films, du travail et de ce que nous avons fait le week-end.", why: "sprechen über → darüber, was…; verb at the end.", why_fr: "sprechen über → darüber, was… ; verbe à la fin." },
      { p: "Sehr schön. Und was würden Sie anderen Lernenden empfehlen?", en: "Very good. And what would you recommend to other learners?", fr: "Très bien. Et que recommanderiez-vous à d'autres apprenants ?" },
      { y: ["Ich würde empfehlen, jeden Tag ein bisschen zu lernen, damit man nichts vergisst.", "Ich würde empfehlen, jeden Tag ein bisschen lernen, damit man nichts vergisst.", "Ich würde empfehlen, jeden Tag ein bisschen zu lernen, damit man vergisst nichts."], en: "I'd recommend learning a little every day, so that you don't forget anything.", fr: "Je recommanderais d'apprendre un peu chaque jour, pour ne rien oublier.", why: "empfehlen + zu; damit + verb at the end.", why_fr: "empfehlen + zu ; damit + verbe à la fin." }
    ] }
  );

  W.READINGS.push({
    id: "kindergarten", level: "B1", icon: "book-open", title: "Ein deutsches Wort für die ganze Welt: der Kindergarten", genre: "Article",
    intro: "Why do English speakers say “kindergarten”? The story of Friedrich Fröbel and his garden of children.",
    intro_fr: "Pourquoi les anglophones disent-ils « kindergarten » ? L'histoire de Friedrich Fröbel et de son jardin d'enfants.",
    paragraphs: [
      { de: "In vielen Sprachen sagt man „Kindergarten“, zum Beispiel auf Englisch. Das Wort kommt aus Deutschland, genauer gesagt aus Thüringen. Dort eröffnete der Pädagoge Friedrich Fröbel 1840 in Bad Blankenburg den ersten Kindergarten.", en: "In many languages people say “kindergarten”, for example in English. The word comes from Germany, more precisely from Thuringia. There, in 1840, the educator Friedrich Fröbel opened the first kindergarten, in Bad Blankenburg.", fr: "Dans beaucoup de langues, on dit « kindergarten », par exemple en anglais. Le mot vient d'Allemagne, plus précisément de Thuringe. C'est là qu'en 1840, le pédagogue Friedrich Fröbel ouvrit le premier jardin d'enfants, à Bad Blankenburg." },
      { de: "Fröbel hatte eine einfache Idee: Kinder sind wie kleine Pflanzen, die Zeit, Licht und Pflege brauchen, um zu wachsen. Die Erzieherinnen und Erzieher sollten sich um sie kümmern wie Gärtner um einen Garten. Deshalb wählte er den Namen „Kindergarten“.", en: "Fröbel had a simple idea: children are like little plants that need time, light and care in order to grow. The teachers were to look after them like gardeners look after a garden. That's why he chose the name “kindergarten”.", fr: "Fröbel avait une idée simple : les enfants sont comme de petites plantes qui ont besoin de temps, de lumière et de soins pour grandir. Les éducatrices et les éducateurs devaient s'occuper d'eux comme des jardiniers d'un jardin. C'est pourquoi il choisit le nom de « jardin d'enfants »." },
      { de: "Für ihn war das Spielen keine Zeitverschwendung, sondern die wichtigste Art zu lernen. Er entwickelte dafür besondere Spielsachen, die „Spielgaben“: einen Ball, einen Würfel, einen Zylinder. Mit ihnen sollten die Kinder Formen und Farben entdecken.", en: "For him, playing wasn't a waste of time but the most important way to learn. For this he developed special toys, the “Spielgaben” (play gifts): a ball, a cube, a cylinder. With them, children were to discover shapes and colours.", fr: "Pour lui, le jeu n'était pas une perte de temps, mais la façon d'apprendre la plus importante. Il créa pour cela des jouets particuliers, les « Spielgaben » (dons de jeu) : une balle, un cube, un cylindre. Grâce à eux, les enfants devaient découvrir les formes et les couleurs." },
      { de: "Nicht alle waren damit einverstanden: In Preußen wurden Kindergärten 1851 sogar verboten, bis 1860. Trotzdem verbreitete sich die Idee in viele Länder. Heute hat in Deutschland jedes Kind ab einem Jahr ein Recht auf einen Platz in einer Kita, und zwar seit August 2013.", en: "Not everyone agreed: in Prussia, kindergartens were even banned in 1851, until 1860. Nevertheless, the idea spread to many countries. Today in Germany, every child aged one or over has the right to a place in a daycare centre, and has done since August 2013.", fr: "Tout le monde n'était pas d'accord : en Prusse, les jardins d'enfants furent même interdits en 1851, jusqu'en 1860. L'idée se répandit pourtant dans de nombreux pays. Aujourd'hui, en Allemagne, chaque enfant a droit à une place en crèche dès l'âge d'un an, et ce depuis août 2013." }
    ],
    glossary: { "genauer": ["more precisely", "plus précisément"], "Thüringen": ["Thuringia", "la Thuringe"], "eröffnete": ["opened", "ouvrit"], "Pädagoge": ["educator", "pédagogue"], "Pflanzen": ["plants", "plantes"], "Pflege": ["care", "soins"], "wachsen": ["to grow", "grandir, pousser"], "Erzieherinnen": ["nursery teachers (women)", "éducatrices"], "Erzieher": ["nursery teachers", "éducateurs"], "Gärtner": ["gardeners", "jardiniers"], "wählte": ["chose", "choisit"], "Zeitverschwendung": ["waste of time", "perte de temps"], "Art": ["way, kind", "manière, façon"], "entwickelte": ["developed", "créa, développa"], "Spielsachen": ["toys", "jouets"], "Würfel": ["cube; dice", "cube ; dé"], "Zylinder": ["cylinder", "cylindre"], "Formen": ["shapes", "formes"], "entdecken": ["to discover", "découvrir"], "einverstanden": ["in agreement", "d'accord"], "Preußen": ["Prussia", "la Prusse"], "verboten": ["banned", "interdit"], "verbreitete": ["(sich verbreiten) spread", "(sich verbreiten) se répandit"], "Recht": ["right", "droit"], "Kita": ["daycare centre (Kindertagesstätte)", "crèche, garderie"] },
    questions: [
      { q: "Wo eröffnete Fröbel den ersten Kindergarten?", o: ["In Bad Blankenburg in Thüringen", "In Berlin", "In London"], a: 0 },
      { q: "Wie sah Fröbel die Kinder?", o: ["Wie kleine Pflanzen, die Pflege brauchen", "Wie kleine Erwachsene", "Wie Schüler, die still sitzen müssen"], a: 0 },
      { q: "Was war für Fröbel die wichtigste Art zu lernen?", o: ["Das Spielen", "Das Lesen", "Das Schreiben"], a: 0 },
      { q: "Was passierte 1851 in Preußen?", o: ["Kindergärten wurden verboten.", "Der erste Kindergarten wurde eröffnet.", "Fröbel bekam einen Preis."], a: 0 },
      { q: "Ab welchem Alter hat ein Kind in Deutschland heute ein Recht auf einen Kita-Platz?", o: ["Ab einem Jahr", "Ab drei Jahren", "Ab sechs Jahren"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-b1-4", unit: "b1-4", level: "B1", icon: "messages-square",
    title: "Welche Schule nach der Grundschule?", title_fr: "Quelle école après le primaire ?",
    context: "Anke and Holger talk about which secondary school their daughter Mia should go to after primary school.", context_fr: "Anke et Holger se demandent dans quelle école leur fille Mia ira après l'école primaire.",
    words: [["entscheiden", "to decide", "décider"], ["empfehlen", "to recommend", "recommander"], ["die Gesamtschule", "the comprehensive school", "l'établissement secondaire polyvalent"], ["der Tag der offenen Tür", "the open day", "la journée portes ouvertes"], ["mitentscheiden", "to have a say", "participer à la décision"]],
    lines: [["Anke", "Holger, wir müssen bald entscheiden, auf welche Schule Mia nach der Grundschule geht.", "de-DE"], ["Holger", "Ich weiß. Ihre Lehrerin empfiehlt das Gymnasium, weil ihre Noten so gut sind.", "de-DE"], ["Anke", "Ja, aber Mia hat ein bisschen Angst davor. Ihre beste Freundin geht nämlich auf die Gesamtschule.", "de-DE"], ["Holger", "An der Gesamtschule kann man doch auch das Abitur machen, oder?", "de-DE"], ["Anke", "An dieser schon. Ich habe mich gestern darüber informiert. Und sie hat dort mehr Zeit, um sich zu entscheiden.", "de-DE"], ["Holger", "Dann gehen wir zum Tag der offenen Tür, damit Mia beide Schulen kennenlernt.", "de-DE"], ["Anke", "Gute Idee. Und am Ende soll sie selbst mitentscheiden. Es geht ja um ihre Zukunft.", "de-DE"]],
    gist: ["Worüber sprechen Anke und Holger?", ["Über die Schule für Mia nach der Grundschule", "Über ihren Urlaub", "Über Mias Geburtstag"]],
    detail: [["Was empfiehlt die Lehrerin?", ["Das Gymnasium", "Die Gesamtschule", "Eine Schule im Ausland"]], ["Warum hat Mia Angst vor dem Gymnasium?", ["Ihre beste Freundin geht auf die Gesamtschule.", "Ihre Noten sind schlecht.", "Das Gymnasium ist zu weit weg."]], ["Worüber hat sich Anke informiert?", ["Darüber, ob man an der Gesamtschule Abitur machen kann", "Über die Preise der Schulen", "Über die Ferien"]], ["Was wollen sie tun, damit Mia beide Schulen kennenlernt?", ["Zum Tag der offenen Tür gehen", "Die Lehrerin anrufen", "Ein Buch kaufen"]]],
    decode: ["Ich habe mich gestern darüber informiert.", "damit Mia beide Schulen kennenlernt"],
    tip: "Words like davor, darüber, daran point back to something already said. When you hear one, ask yourself what it refers to: here, darüber means “about the Abitur at the Gesamtschule”.", tip_fr: "Les mots comme davor, darüber, daran renvoient à quelque chose de déjà dit. Quand tu en entends un, demande-toi à quoi il renvoie : ici, darüber veut dire « sur l'Abitur à la Gesamtschule »."
  }]);

  W.PROMPTS.push({ id: "de-b1-4", level: "B1", q: "Halte eine kurze Präsentation zum Thema „Im Ausland studieren“: deine Erfahrungen, die Situation in deinem Land, Vor- und Nachteile, deine Meinung.", en: "Give a short presentation on “Studying abroad”: your experience, the situation in your country, pros and cons, your opinion.", fr: "Fais une courte présentation sur le thème « Étudier à l'étranger » : ton expérience, la situation dans ton pays, les avantages et les inconvénients, ton avis.", time: 180,
    phrases: ["Mein Thema heißt…", "Ich habe selbst…", "In meinem Heimatland…", "Einerseits…, andererseits…", "Vielen Dank fürs Zuhören!"],
    model: "Mein Thema heißt: Im Ausland studieren. Zuerst erzähle ich von meiner Erfahrung, dann spreche ich über mein Land und zum Schluss über Vor- und Nachteile. Ich habe selbst ein Semester in Wien studiert, um mein Deutsch zu verbessern. In meinem Heimatland machen das viele Studierende, weil die Universitäten Austauschprogramme anbieten. Einerseits lernt man eine neue Sprache und eine andere Kultur kennen, andererseits ist so ein Jahr oft teuer. Meiner Meinung nach lohnt es sich trotzdem. Vielen Dank fürs Zuhören!" });

  W.WRITING_GUIDE["b1-4"] = { genre: "A personal email giving advice (Goethe B1, writing part 1)", genre_fr: "Un e-mail personnel pour donner des conseils (Goethe B1, écrit partie 1)",
    plan: [["React to your friend's news.", "Réagis à la nouvelle de ton ami ou de ton amie."], ["How you learn, and why (um … zu).", "Comment tu apprends, et pourquoi (um … zu)."], ["What helps you most (damit).", "Ce qui t'aide le plus (damit)."], ["A verb with a preposition (darauf, worauf).", "Un verbe à préposition (darauf, worauf)."], ["A suggestion to meet, and goodbye.", "Une proposition de rendez-vous, et au revoir."]],
    marks: [["um neue Wörter zu wiederholen", "um … zu: a purpose (same person)", "um … zu : un but (même sujet)"], ["damit sich mein Ohr an die Sprache gewöhnt", "damit: a purpose (another subject)", "damit : un but (autre sujet)"], ["Am meisten hilft mir", "what helps you most", "ce qui t'aide le plus"], ["worauf wir Lust haben", "Lust haben auf → worauf", "Lust haben auf → worauf"], ["Ich freue mich schon darauf", "sich freuen auf → darauf", "sich freuen auf → darauf"], ["Wollen wir uns nächsten Samstag", "a suggestion", "une proposition"]] };

  W.COURSE.push({ id: "b1-4", level: "B1", icon: "graduation-cap", title: "Education and learning", title_fr: "Éducation et apprentissage",
    intro: "In this unit, you'll talk about school, studies and learning: saying why you do something with um … zu and damit, verbs with fixed prepositions and the da- and wo- words (darauf, worauf?), and how to give a presentation in five steps, as in the Goethe B1 speaking exam. And you'll find out where the word kindergarten comes from.",
    intro_fr: "Dans cette unité, tu vas parler d'école, d'études et d'apprentissage : dire dans quel but tu fais quelque chose avec um … zu et damit, les verbes à préposition fixe et les mots en da- et wo- (darauf, worauf ?), et comment faire une présentation en cinq étapes, comme à l'oral du Goethe B1. Et tu découvriras d'où vient le mot kindergarten.",
    can: ["Give a purpose with um … zu and damit", "Use verbs with prepositions, and darauf, worauf, auf wen", "Talk about the German school system and studies", "Give a short structured presentation and answer questions (Goethe B1)", "Write a personal email giving advice"],
    can_fr: ["Exprimer un but avec um … zu et damit", "Employer les verbes à préposition, et darauf, worauf, auf wen", "Parler du système scolaire allemand et des études", "Faire une courte présentation structurée et répondre aux questions (Goethe B1)", "Écrire un e-mail personnel pour donner des conseils"],
    lessons: [52, 53, 54], vocab: ["bildungDE", "praesentierenDE"], reading: "kindergarten", prompt: "de-b1-4",
    writing: { task: "Your friend Lena wants to start learning German and asks you for tips. Write her an email (80-100 words): how you learn, what helps you most, and suggest practising together.", task_fr: "Ton amie Lena veut commencer l'allemand et te demande des conseils. Écris-lui un e-mail (80 à 100 mots) : comment tu apprends, ce qui t'aide le plus, et propose-lui de vous entraîner ensemble.", words: "80-100",
      tips: ["Liebe Lena,", "Ich …, um … zu …", "…, damit …", "Am meisten hilft mir…", "Ich freue mich schon darauf, …", "Viele Grüße"],
      checklist: ["I reacted to Lena's news", "I used um … zu and damit", "I used a verb with a preposition (darauf, worauf…)", "I suggested meeting", "I wrote between 80 and 100 words"],
      checklist_fr: ["J'ai réagi à la nouvelle de Lena", "J'ai employé um … zu et damit", "J'ai employé un verbe à préposition (darauf, worauf…)", "J'ai proposé un rendez-vous", "J'ai écrit entre 80 et 100 mots"],
      model: "Liebe Lena,\n\nsuper, dass du Deutsch lernen willst! Ich lerne jeden Morgen zwanzig Minuten mit einer App, um neue Wörter zu wiederholen. Außerdem höre ich deutsche Podcasts, damit sich mein Ohr an die Sprache gewöhnt. Am meisten hilft mir aber ein Tandem: Ich treffe mich jede Woche mit Paul, der Französisch lernt. Wir sprechen über alles, worauf wir Lust haben. Ich freue mich schon darauf, mit dir zu üben! Wollen wir uns nächsten Samstag im Café treffen?\n\nViele Grüße\nSam" } });
})();
