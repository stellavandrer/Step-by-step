/* Cours de français, unité B1-9 « Studying / Les études » : les adverbes en -ment (et -amment, -emment), leur place,
   le but et le temps avec l'infinitif (pour, afin de, pour que, avant de, après avoir, sans), l'e-mail formel et
   les démarches. Personnages fictifs, prénoms français. Faits vérifiables seulement : en France, la licence se fait
   en trois ans et le master en deux ; la carte Vitale est la carte d'assurance maladie ; les démarches demandent
   souvent un justificatif de domicile de moins de trois mois ; l'inscription des étudiants à l'Assurance maladie
   est gratuite ; Erasmus est le programme d'échanges européen ; Toulouse est au bord de la Garonne. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "etudesFR", icon: "graduation-cap", title: "University studies", title_fr: "Les études", level: "B1", words: [
    ["la fac", "uni (informal for université)", "Je vais à la fac à vélo."],
    ["la licence", "the bachelor's degree (three years in France)", "Elle prépare une licence de lettres."],
    ["le doctorat", "the PhD", "Il fait un doctorat en chimie."],
    ["le cours magistral", "the lecture", "Le cours magistral a lieu dans un grand amphithéâtre."],
    ["les travaux dirigés", "seminars, tutorials (TD)", "En travaux dirigés, on est vingt."],
    ["l'exposé", "the presentation (in class)", "Je dois faire un exposé sur Victor Hugo."],
    ["le mémoire", "the dissertation", "J'écris mon mémoire de master."],
    ["la note", "the mark, the grade", "J'ai eu une bonne note à l'examen."],
    ["réviser", "to revise, to study for an exam", "Je révise pour mes partiels."],
    ["passer un examen", "to take an exam", "Je passe un examen demain."],
    ["échouer à", "to fail", "Il a échoué à son permis de conduire."],
    ["la bourse", "the grant, the scholarship", "Elle a obtenu une bourse d'études."],
    ["le camarade / la camarade", "the classmate (m) / the classmate (f)", "Mes camarades m'ont prêté leurs notes."],
    ["prendre des notes", "to take notes", "Je prends des notes sur mon ordinateur."],
    ["le partiel", "the mid-term exam", "Les partiels ont lieu en janvier."],
    ["le semestre", "the semester, the term", "Le deuxième semestre commence en février."],
    ["l'amphithéâtre", "the lecture hall", "L'amphithéâtre peut accueillir trois cents étudiants."],
    ["la bibliothèque universitaire", "the university library", "On révise à la bibliothèque universitaire."]
  ] },
  { id: "adminFR", icon: "file-text", title: "Paperwork", title_fr: "Les démarches administratives", level: "B1", words: [
    ["le formulaire", "the form", "Remplissez ce formulaire, s'il vous plaît."],
    ["remplir", "to fill in", "J'ai rempli le formulaire en ligne."],
    ["la pièce justificative", "the supporting document", "Il manque une pièce justificative."],
    ["le justificatif de domicile", "the proof of address", "Un justificatif de domicile de moins de trois mois."],
    ["l'attestation", "the certificate, the official statement", "Je vous envoie mon attestation d'inscription."],
    ["la date limite", "the deadline", "La date limite est le 30 juin."],
    ["le délai", "the time limit; the waiting time", "Quel est le délai pour recevoir la carte ?"],
    ["la démarche", "the step, the procedure", "Les démarches administratives prennent du temps."],
    ["l'inscription", "the registration, the enrolment", "L'inscription se fait en ligne."],
    ["s'inscrire", "to register, to enrol", "Il s'est inscrit à un cours de chant."],
    ["joindre", "to attach, to enclose", "Joignez une photo d'identité."],
    ["en pièce jointe", "attached (to an email)", "Vous trouverez mon CV en pièce jointe."],
    ["la carte de séjour", "the residence permit", "Elle a renouvelé sa carte de séjour."],
    ["la carte Vitale", "the French health insurance card", "N'oubliez pas votre carte Vitale chez le médecin."],
    ["la mutuelle", "top-up health insurance", "Ma mutuelle rembourse une partie des lunettes."],
    ["obtenir", "to get, to obtain", "Comment obtenir un rendez-vous ?"],
    ["fournir", "to provide, to supply", "Il faut fournir trois documents."],
    ["la scolarité", "the student office (at a university)", "Allez à la scolarité pour votre inscription."]
  ] });

  W.LESSONS.push(
  {
    id: 69, level: "B1", icon: "pen-line",
    title: "Lentement, évidemment: adverbs", title_fr: "Lentement, évidemment : les adverbes",
    subtitle: "How to build -ment adverbs, the ones that end in -amment or -emment, and where to put them.", subtitle_fr: "Comment former les adverbes en -ment, ceux en -amment et -emment, et où les placer.",
    body: `
<h2>Feminine adjective + -ment</h2>
<p>Most adverbs are formed from the feminine of the adjective: <s-fr>lente</s-fr> → <s-fr>lentement</s-fr> · <s-fr>heureuse</s-fr> → <s-fr>heureusement</s-fr> · <s-fr>sérieuse</s-fr> → <s-fr>sérieusement</s-fr> · <s-fr>douce</s-fr> → <s-fr>doucement</s-fr>.</p>
<p>When the adjective ends in a vowel, start from the masculine: <s-fr>vrai</s-fr> → <s-fr>vraiment</s-fr> · <s-fr>poli</s-fr> → <s-fr>poliment</s-fr> · <s-fr>absolu</s-fr> → <s-fr>absolument</s-fr>.</p>
<h2>-amment and -emment</h2>
<table>
<tr><th>Adjective</th><th>Adverb</th></tr>
<tr><td><s-fr>courant</s-fr>, <s-fr>constant</s-fr></td><td><s-fr>couramment</s-fr>, <s-fr>constamment</s-fr></td></tr>
<tr><td><s-fr>évident</s-fr>, <s-fr>récent</s-fr>, <s-fr>prudent</s-fr></td><td><s-fr>évidemment</s-fr>, <s-fr>récemment</s-fr>, <s-fr>prudemment</s-fr></td></tr>
</table>
<p>Both endings sound the same: <s-fr>évidemment</s-fr> rhymes with <s-fr>couramment</s-fr>.</p>
<h2>A few irregular ones</h2>
<p><s-fr>gentil</s-fr> → <s-fr>gentiment</s-fr> · <s-fr>bref</s-fr> → <s-fr>brièvement</s-fr> · <s-fr>bon</s-fr> → <s-fr>bien</s-fr> · <s-fr>mauvais</s-fr> → <s-fr>mal</s-fr> · <s-fr>rapide</s-fr> → <s-fr>rapidement</s-fr> (or <s-fr>vite</s-fr>).</p>
<h2>Where they go</h2>
<p>After a simple verb: <s-fr>Il parle lentement.</s-fr> In compound tenses, short common adverbs go between the auxiliary and the participle: <s-fr>J'ai bien compris.</s-fr> · <s-fr>Elle a déjà fini.</s-fr> · <s-fr>Tu as beaucoup travaillé.</s-fr> Longer -ment adverbs usually come after the participle: <s-fr>Il a répondu rapidement.</s-fr></p>
<div class="tip">Never put an adverb between the subject and the verb as in English ("I often go"): it's <s-fr>Je vais souvent au cinéma</s-fr>, not <s-fr>je souvent vais</s-fr>.</div>
`,
    examples: [
      ["Parlez lentement, s'il vous plaît.", "Speak slowly, please."],
      ["Heureusement, j'avais mon parapluie.", "Luckily, I had my umbrella."],
      ["Elle parle couramment quatre langues.", "She speaks four languages fluently."],
      ["Évidemment, il est encore en retard.", "Of course, he's late again."],
      ["J'ai récemment changé de travail.", "I recently changed jobs."],
      ["Tu as bien dormi ?", "Did you sleep well?"],
      ["Elle a déjà fini son mémoire.", "She's already finished her dissertation."],
      ["Je vais souvent à la bibliothèque.", "I often go to the library."]
    ],
    quiz: [
      { q: "The adverb from lent is:", o: ["lentment", "lentement", "lentemment"], a: 1, ex: "Feminine lente + -ment." },
      { q: "The adverb from évident is:", o: ["évidemment", "évidamment", "évidentement"], a: 0, ex: "-ent → -emment." },
      { q: "The adverb from courant is:", o: ["couramment", "couremment", "courantement"], a: 0, ex: "-ant → -amment." },
      { q: "“I understood well” is:", o: ["J'ai compris bien.", "J'ai bien compris.", "Je bien ai compris."], a: 1, ex: "A short adverb goes between the auxiliary and the participle." },
      { q: "“I often go to the cinema” is:", o: ["Je souvent vais au cinéma.", "Je vais souvent au cinéma.", "Souvent je vais au cinéma souvent."], a: 1, ex: "After the verb." }
    ]
  },
  {
    id: 70, level: "B1", icon: "target",
    title: "Pour, avant de, après avoir: purpose and time", title_fr: "Pour, avant de, après avoir : le but et le temps",
    subtitle: "Infinitive when the subject is the same, que + subjunctive when it changes, and the past infinitive.", subtitle_fr: "L'infinitif quand le sujet est le même, que + subjonctif quand il change, et l'infinitif passé.",
    body: `
<h2>Purpose: pour, afin de, pour que</h2>
<p>Same subject: <s-fr>pour</s-fr> or <s-fr>afin de</s-fr> (more formal) + infinitive: <s-fr>Je révise pour réussir.</s-fr> Different subject: <s-fr>pour que</s-fr> or <s-fr>afin que</s-fr> + subjunctive: <s-fr>Le professeur parle lentement pour que nous comprenions.</s-fr></p>
<h2>Before: avant de, avant que</h2>
<p><s-fr>Relis ta copie avant de la rendre.</s-fr> (same subject) · <s-fr>Rends ton dossier avant qu'il soit trop tard.</s-fr> (different subject, subjunctive)</p>
<h2>After: après + past infinitive</h2>
<p><s-fr>après avoir</s-fr> or <s-fr>après être</s-fr> + the past participle, with the same agreement as in the passé composé: <s-fr>Après avoir passé son bac, elle est partie à Lyon.</s-fr> · <s-fr>Après être rentrés, ils ont dîné.</s-fr> With a different subject: <s-fr>après que</s-fr> + indicative.</p>
<h2>Sans + infinitive</h2>
<p><s-fr>Il est parti sans dire au revoir.</s-fr> (without saying goodbye)</p>
<table>
<tr><th>English</th><th>French</th></tr>
<tr><td>before leaving</td><td><s-fr>avant de partir</s-fr></td></tr>
<tr><td>after eating</td><td><s-fr>après avoir mangé</s-fr></td></tr>
<tr><td>without saying</td><td><s-fr>sans dire</s-fr></td></tr>
<tr><td>instead of sleeping</td><td><s-fr>au lieu de dormir</s-fr></td></tr>
</table>
<div class="tip">After a preposition, English uses -ing; French uses the infinitive. The only exception is <s-fr>en</s-fr>, which takes the -ant form (the gérondif): <s-fr>en travaillant</s-fr>.</div>
`,
    examples: [
      ["Je révise tous les soirs pour réussir mes partiels.", "I revise every evening to pass my exams."],
      ["Je vous écris afin de vous demander un rendez-vous.", "I am writing to ask you for an appointment."],
      ["Le professeur répète pour que tout le monde comprenne.", "The teacher repeats so that everyone understands."],
      ["Relis ton texte avant de l'envoyer.", "Reread your text before sending it."],
      ["Partons avant qu'il pleuve.", "Let's go before it rains."],
      ["Après avoir fini ses études, il a voyagé un an.", "After finishing his studies, he travelled for a year."],
      ["Après être arrivées à Paris, elles ont cherché un logement.", "After arriving in Paris, they looked for somewhere to live."],
      ["Il est sorti sans fermer la porte.", "He went out without closing the door."]
    ],
    quiz: [
      { q: "“I study to pass” is:", o: ["J'étudie pour réussir.", "J'étudie pour que je réussisse.", "J'étudie pour réussissant."], a: 0, ex: "Same subject: pour + infinitive." },
      { q: "“So that you understand” is:", o: ["pour tu comprends", "pour que tu comprennes", "pour comprendre tu"], a: 1, ex: "Different subject: pour que + subjunctive." },
      { q: "“Before leaving” is:", o: ["avant partir", "avant de partir", "avant partant"], a: 1, ex: "avant de + infinitive." },
      { q: "“After eating” is:", o: ["après manger", "après avoir mangé", "après mangeant"], a: 1, ex: "après + past infinitive." },
      { q: "“Without saying anything” is:", o: ["sans rien dire", "sans disant rien", "sans dire pas"], a: 0, ex: "sans + infinitive; rien before it." }
    ]
  },
  {
    id: 71, level: "B1", kind: "functional", icon: "file-text",
    title: "Everyday French: formal emails and paperwork", title_fr: "Le français de tous les jours : l'e-mail formel et les démarches",
    subtitle: "Write to a university or an office, ask for information, and understand the documents you're asked for.", subtitle_fr: "Écrire à une université ou à une administration, demander des informations, et comprendre les documents demandés.",
    body: `
<h2>Opening</h2>
<p>If you don't know the person: <s-fr>Madame, Monsieur,</s-fr> If you do: <s-fr>Madame Durand,</s-fr> Keep <s-fr>Chère Madame</s-fr> or <s-fr>Cher Monsieur</s-fr> for people you already know. Never <s-fr>Bonjour</s-fr> alone in a very formal letter.</p>
<h2>The request</h2>
<p><s-fr>Je me permets de vous écrire afin de…</s-fr> · <s-fr>Je souhaiterais obtenir des informations sur…</s-fr> · <s-fr>Pourriez-vous m'indiquer… ?</s-fr> · <s-fr>Vous trouverez en pièce jointe…</s-fr> · <s-fr>Je vous remercie de bien vouloir…</s-fr> (a formal and neutral way to ask)</p>
<h2>Closing</h2>
<p>A short email: <s-fr>Je vous remercie par avance de votre réponse. Cordialement,</s-fr> (or <s-fr>Bien cordialement,</s-fr>). A formal letter: <s-fr>Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.</s-fr></p>
<h2>Paperwork in France</h2>
<p>At university, the <s-fr>licence</s-fr> takes three years and the <s-fr>master</s-fr> two. For many procedures, you'll be asked for <s-fr>un justificatif de domicile de moins de trois mois</s-fr> (a recent bill, for example). Your health insurance card is <s-fr>la carte Vitale</s-fr>, and a <s-fr>mutuelle</s-fr> pays part of what it doesn't cover.</p>
<div class="tip">Always fill in the <s-fr>Objet</s-fr> line (subject) of a formal email: <s-fr>Objet : demande d'informations sur l'inscription en master</s-fr>. It's the first thing the office reads.</div>
`,
    examples: [
      ["Madame, Monsieur,", "Dear Sir or Madam,"],
      ["Je me permets de vous écrire afin d'obtenir des informations.", "I am writing to request some information."],
      ["Pourriez-vous m'indiquer la date limite d'inscription ?", "Could you tell me the registration deadline?"],
      ["Vous trouverez en pièce jointe mon relevé de notes.", "Please find my transcript attached."],
      ["Je vous remercie par avance de votre réponse.", "Thank you in advance for your reply."],
      ["Bien cordialement,", "Kind regards,"],
      ["Il faut fournir un justificatif de domicile de moins de trois mois.", "You need to provide proof of address less than three months old."]
    ],
    quiz: [
      { q: "To a person you don't know, you start with:", o: ["Cher ami,", "Madame, Monsieur,", "Salut,"], a: 1, ex: "Madame, Monsieur," },
      { q: "“Please find attached…” is:", o: ["Vous trouverez en pièce jointe…", "Regardez attaché…", "Vous trouverez joint en pièce…"], a: 0, ex: "Vous trouverez en pièce jointe…" },
      { q: "A short formal email ends with:", o: ["Bisous,", "Cordialement,", "À plus,"], a: 1, ex: "Cordialement, or Bien cordialement," },
      { q: "In France, a licence takes:", o: ["two years", "three years", "five years"], a: 1, ex: "Three years; then a master in two." },
      { q: "La carte Vitale is:", o: ["a student card", "the health insurance card", "a bank card"], a: 1, ex: "The French health insurance card." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    69: {
      gap: [["Il conduit ___. (lent)", "lentement"], ["___, il a réussi. (heureux)", "Heureusement"], ["Elle parle ___ anglais. (courant)", "couramment"], ["J'ai ___ compris. (bon → adverb)", "bien"]],
      fix: [["Il a répondu très rapidamente.", "Il a répondu très rapidement.", "rapide → rapidement."], ["Évidement, il est en retard.", "Évidemment, il est en retard.", "évident → évidemment, with -emment."]],
      task: ["Describe how you study: how often, how fast, how well, with at least five adverbs.", "Décris comment tu étudies : à quelle fréquence, à quel rythme, avec quel résultat, avec au moins cinq adverbes.", "J'étudie régulièrement, environ trente minutes par jour. Je lis lentement, mais je comprends bien. Je révise surtout le soir, tranquillement, avec un thé. Malheureusement, j'oublie vite le vocabulaire, alors je le répète souvent. Évidemment, je progresse plus vite quand je parle avec des francophones !"]
    },
    70: {
      gap: [["Je révise ___ réussir l'examen. (in order to)", "pour"], ["Le professeur parle lentement pour que nous ___. (comprendre)", "comprenions"], ["Relis ta copie avant ___ la rendre. (before)", "de"], ["Après ___ mangé, ils sont sortis. (having)", "avoir"]],
      fix: [["Il est parti sans disant au revoir.", "Il est parti sans dire au revoir.", "After sans, the infinitive."], ["Avant partir, ferme la porte.", "Avant de partir, ferme la porte.", "avant de + infinitive."]],
      task: ["Give advice to a new student for exam week, with pour, avant de, après avoir and sans.", "Donne des conseils à un nouvel étudiant pour la semaine des examens, avec pour, avant de, après avoir et sans.", "Pour bien réviser, fais un planning dès le début du semestre. Avant de commencer un chapitre, relis tes notes du cours. Après avoir révisé deux heures, fais une vraie pause. Et ne va jamais à un examen sans avoir dormi au moins sept heures !"]
    },
    71: {
      gap: [["Je me ___ de vous écrire afin de… (allow myself)", "permets"], ["Vous trouverez en pièce ___ mon CV. (attached)", "jointe"], ["Je vous remercie par ___ de votre réponse. (in advance)", "avance"], ["___ cordialement, (kind regards)", "Bien"]],
      fix: [["Cher Madame,", "Chère Madame,|Madame,", "With Madame, cher becomes chère; for someone you don't know, Madame alone."], ["Merci pour votre réponse. Salut !", "Merci pour votre réponse. Cordialement,|Je vous remercie de votre réponse. Cordialement,", "A formal email never ends with salut: use Cordialement."]],
      task: ["Write a short formal email to a university to ask for the registration deadline and the documents needed.", "Écris un court e-mail formel à une université pour demander la date limite d'inscription et les documents nécessaires.", "Madame, Monsieur, je me permets de vous écrire afin d'obtenir des informations sur l'inscription en master de littérature. Pourriez-vous m'indiquer la date limite d'inscription et la liste des pièces justificatives à fournir ? Je vous remercie par avance de votre réponse. Cordialement, Kim Lambert"]
    }
  });

  W.ROLEPLAYS.push(
  { id: "scolarite", lesson: 71, level: "B1", icon: "graduation-cap", partner: "Mme Perrin", role: "a member of staff at the student office",
    title: "Registering at university", title_fr: "L'inscription à la fac",
    setting: "You've just arrived in France to study. At the student office, Mme Perrin checks your registration file.", setting_fr: "Tu viens d'arriver en France pour tes études. À la scolarité, Mme Perrin vérifie ton dossier d'inscription.",
    turns: [
      { p: "Bonjour, je vous écoute.", fr: "Hello, how can I help you?" },
      { y: ["Bonjour, madame. Je viens pour mon inscription en licence de lettres. Voici mon dossier.", "Bonjour, madame. Je viens pour ma inscription en licence de lettres. Voici mon dossier.", "Bonjour, madame. Je viens pour mon inscription à licence de lettres. Voici mon dossier."], fr: "Hello. I've come to register for a literature degree. Here's my file.", why: "mon before a vowel (mon inscription); en licence." },
      { p: "Merci. Alors… Il manque un justificatif de domicile. Vous l'avez ?", fr: "Thank you. Let's see… A proof of address is missing. Do you have it?" },
      { y: ["Ah non, je ne l'ai pas apporté. Je peux vous l'envoyer par e-mail ?", "Ah non, je ne l'ai pas apporté. Je peux vous le envoyer par e-mail ?", "Ah non, je ne l'ai apporté pas. Je peux vous l'envoyer par e-mail ?"], fr: "Oh no, I didn't bring it. Can I send it to you by email?", why: "vous + le → vous l'envoyer; ne… pas around the auxiliary." },
      { p: "Oui, mais il doit dater de moins de trois mois. Une facture d'électricité, par exemple.", fr: "Yes, but it must be less than three months old. An electricity bill, for example." },
      { y: ["D'accord. Je vous l'envoie dès que je rentre, afin que le dossier soit complet.", "D'accord. Je vous l'envoie dès que je rentre, afin que le dossier est complet.", "D'accord. Je vous l'envoie dès que je rentre, afin de le dossier soit complet."], fr: "OK. I'll send it as soon as I get home, so that the file is complete.", why: "afin que + subjunctive (soit)." },
      { p: "Parfait. Et vous avez une carte Vitale ?", fr: "Perfect. And do you have a Carte Vitale?" },
      { y: ["Pas encore, je viens d'arriver. Comment est-ce qu'on fait pour en obtenir une ?", "Pas encore, je viens d'arriver. Comment est-ce qu'on fait pour obtenir en une ?", "Pas encore, je viens d'arriver. Comment on fait est-ce pour en obtenir une ?"], fr: "Not yet, I've just arrived. How do you get one?", why: "en goes before the infinitive: pour en obtenir une." },
      { p: "Il faut vous inscrire à l'Assurance maladie, sur leur site. Pour les étudiants, c'est gratuit.", fr: "You need to register with the national health insurance, on their website. For students, it's free." },
      { y: ["Merci beaucoup, c'est très clair. Je m'en occupe rapidement.", "Merci beaucoup, c'est très clair. Je m'occupe en rapidement.", "Merci beaucoup, c'est très clair. Je m'en occupe rapidamente."], fr: "Thank you very much, that's very clear. I'll deal with it quickly.", why: "s'occuper de → je m'en occupe; rapide → rapidement." }
    ] }
  );

  W.READINGS.push({
    id: "erasmus", level: "B1", icon: "graduation-cap", title: "Mon semestre Erasmus à Toulouse", genre: "Blog post",
    intro: "Clara, a student from Spain, tells how French university surprised her. Adverbs, purpose and the vocabulary of studies.",
    intro_fr: "Clara, étudiante espagnole, raconte ce qui l'a surprise à l'université en France. Les adverbes, le but et le vocabulaire des études.",
    paragraphs: [
      { en: "Je m'appelle Clara, j'ai vingt et un ans et je viens de Valence, en Espagne. Ce semestre, je fais un échange Erasmus à l'université de Toulouse, afin d'améliorer mon français et de découvrir une autre façon d'étudier.", fr: "My name's Clara, I'm twenty-one and I'm from Valencia, in Spain. This semester, I'm on an Erasmus exchange at the university of Toulouse, to improve my French and discover another way of studying." },
      { en: "Ce qui m'a d'abord surprise, ce sont les cours magistraux : on est parfois trois cents dans un amphithéâtre, et le professeur parle rapidement pendant deux heures. Heureusement, il y a aussi les travaux dirigés, en petits groupes, où on peut poser des questions et faire des exposés.", fr: "What surprised me first were the lectures: there are sometimes three hundred of us in a lecture hall, and the lecturer speaks fast for two hours. Fortunately, there are also seminars, in small groups, where you can ask questions and give presentations." },
      { en: "Au début, je prenais difficilement des notes : j'écrivais tout, sans rien comprendre ! Pour progresser, j'ai demandé à une étudiante française de me prêter ses notes. Maintenant, nous révisons ensemble avant chaque partiel, et elle est devenue une amie.", fr: "At first, I found it hard to take notes: I wrote everything down without understanding anything! To improve, I asked a French student to lend me her notes. Now we revise together before every exam, and she's become a friend." },
      { en: "La vie étudiante me plaît énormément. Après avoir passé la journée à la fac, je retrouve mes amis au resto U, où on mange un repas complet pour quelques euros, puis on se promène au bord de la Garonne.", fr: "I love student life. After spending the day at uni, I meet my friends at the university canteen, where you get a full meal for a few euros, then we walk along the Garonne." },
      { en: "Mon conseil pour les futurs étudiants Erasmus ? N'ayez pas peur de parler, même avec des fautes. On apprend vraiment une langue en la vivant tous les jours.", fr: "My advice for future Erasmus students? Don't be afraid to speak, even with mistakes. You really learn a language by living it every day." }
    ],
    glossary: { "échange": "exchange", "améliorer": "to improve", "magistraux": "lectures (cours magistraux)", "amphithéâtre": "lecture hall", "dirigés": "seminars (travaux dirigés)", "exposés": "presentations", "difficilement": "with difficulty", "progresser": "to improve, to progress", "partiel": "mid-term exam", "énormément": "enormously, a lot", "resto": "restaurant (le resto U: the university canteen)", "complet": "full, complete", "fautes": "mistakes", "vivant": "living" },
    questions: [
      { q: "Pourquoi Clara fait-elle un échange Erasmus ?", o: ["Pour trouver un travail", "Pour améliorer son français et découvrir une autre façon d'étudier", "Parce que sa famille habite à Toulouse"], a: 1 },
      { q: "Qu'est-ce qui l'a surprise d'abord ?", o: ["Le prix des livres", "Le climat", "Les cours magistraux dans un grand amphithéâtre"], a: 2 },
      { q: "Comment a-t-elle progressé pour la prise de notes ?", o: ["Une étudiante française lui a prêté ses notes.", "Elle a acheté un ordinateur.", "Elle a enregistré les cours."], a: 0 },
      { q: "Où mange-t-elle avec ses amis ?", o: ["Chez elle", "Au resto U", "Dans un restaurant chic"], a: 1 },
      { q: "Quel est son conseil ?", o: ["Étudier seul", "Ne parler que sa langue", "Ne pas avoir peur de parler, même avec des fautes"], a: 2 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-b1-9", unit: "b1-9", level: "B1", icon: "school",
    title: "Le premier cours", title_fr: "Le premier cours",
    context: "Mme Lacroix, a history lecturer, explains how her course will work this semester.", context_fr: "Mme Lacroix, professeure d'histoire, explique comment son cours va se passer ce semestre.",
    words: [["la présence", "attendance"], ["obligatoire", "compulsory"], ["un tiers", "a third"], ["la permanence", "office hours"], ["le cahier", "the notebook"]],
    lines: [["Mme Lacroix", "Bonjour à tous et bienvenue dans ce cours d'histoire contemporaine. Avant de commencer, je voudrais vous expliquer comment le semestre va se passer.", "fr-FR"], ["Mme Lacroix", "Le cours magistral a lieu ici, dans l'amphithéâtre B, tous les mardis à dix heures. Les travaux dirigés commencent la semaine prochaine, en petits groupes. La présence en TD est obligatoire : après trois absences, vous ne pourrez pas passer l'examen.", "fr-FR"], ["Mme Lacroix", "Pour l'évaluation, il y aura deux partiels, un en novembre et un en janvier, et un exposé en groupe de trois. L'exposé compte pour un tiers de la note finale.", "fr-FR"], ["Mme Lacroix", "Si vous avez des questions, vous pouvez venir me voir pendant ma permanence, le jeudi de quatorze à seize heures, au bureau 214.", "fr-FR"], ["Mme Lacroix", "Et quand vous m'écrivez un e-mail, s'il vous plaît, commencez par Madame, expliquez clairement votre demande, et n'oubliez pas de signer. Je ne réponds pas aux messages qui commencent par Salut !", "fr-FR"], ["Mme Lacroix", "Bien. Maintenant, ouvrez vos cahiers : nous commençons en 1914.", "fr-FR"]],
    gist: ["Que fait la professeure ?", ["Elle explique comment le semestre va se passer.", "Elle rend les copies d'examen.", "Elle présente un livre."]],
    detail: [["Quand a lieu le cours magistral ?", ["Le mardi à dix heures", "Le jeudi à quatorze heures", "Le lundi à dix heures"]], ["Que se passe-t-il après trois absences en TD ?", ["On ne peut pas passer l'examen.", "On doit faire un exposé.", "Rien"]], ["Combien compte l'exposé ?", ["Un tiers de la note finale", "La moitié de la note", "Rien du tout"]], ["Quand est la permanence de la professeure ?", ["Le jeudi de quatorze à seize heures", "Le mardi matin", "Tous les jours"]]],
    decode: ["Avant de commencer", "commencez par Madame, expliquez clairement votre demande"],
    tip: "Lectures are full of time and purpose markers: avant de, après, pour, afin de. Note them down: they give you the structure of what is said.", tip_fr: "Les cours sont pleins de marqueurs de temps et de but : avant de, après, pour, afin de. Note-les : ils te donnent la structure de ce qui est dit."
  }]);

  W.PROMPTS.push({ id: "fr-b1-9", level: "B1", q: "Comment est-ce que tu apprends le mieux : en autonomie, en groupe, avec un professeur ? Donne des exemples.", fr: "How do you learn best: on your own, in a group, with a teacher? Give examples.", time: 150,
    phrases: ["J'apprends mieux quand…", "Pour retenir…, je…", "Avant de…, je…", "Après avoir…, je…", "Malheureusement, …"],
    model: "J'apprends mieux en autonomie, à mon rythme, mais avec un professeur de temps en temps. Pour retenir le vocabulaire, je l'écris sur des petites cartes et je le répète régulièrement. Avant de lire un texte difficile, je regarde rapidement les mots que je ne connais pas. Après avoir étudié une leçon, j'essaie de l'expliquer à voix haute, comme si j'étais le professeur. Malheureusement, je n'ai pas toujours le temps de parler avec des francophones !" });

  W.WRITING_GUIDE["b1-9"] = { genre: "A formal email asking for information (DELF B1)", genre_fr: "Un e-mail formel de demande d'informations (DELF B1)",
    plan: [["Write the subject line and open formally.", "Écris l'objet et commence de façon formelle."], ["Say why you're writing (afin de…).", "Dis pourquoi tu écris (afin de…)."], ["Introduce yourself and your level.", "Présente-toi et ton niveau."], ["Ask your questions politely.", "Pose tes questions poliment."], ["Mention attachments and close formally.", "Mentionne les pièces jointes et termine de façon formelle."]],
    marks: [["Je me permets de vous écrire afin d'obtenir", "a formal opening with afin de", "une entrée formelle avec afin de"], ["régulièrement", "an adverb in -ment", "un adverbe en -ment"], ["afin de pouvoir passer", "purpose: afin de + infinitive", "le but : afin de + infinitif"], ["Pourriez-vous m'indiquer", "a polite question", "une question polie"], ["avant de s'inscrire", "avant de + infinitive", "avant de + infinitif"], ["Je vous remercie par avance", "a formal closing", "une formule finale"]] };

  W.COURSE.push({ id: "b1-9", level: "B1", icon: "graduation-cap", title: "Studying", title_fr: "Les études",
    intro: "In this unit, you'll talk about studying and deal with paperwork in French: adverbs in -ment and where to put them, purpose and time with infinitives (pour, avant de, après avoir, sans), and how to write a formal email.",
    intro_fr: "Dans cette unité, tu vas parler des études et faire des démarches en français : les adverbes en -ment et leur place, le but et le temps avec l'infinitif (pour, avant de, après avoir, sans), et comment écrire un e-mail formel.",
    can: ["Form adverbs in -ment, -amment and -emment and place them correctly", "Express purpose and time with pour, afin de, avant de, après avoir, sans", "Understand how French universities work", "Write a formal email asking for information", "Understand the documents asked for in procedures"],
    can_fr: ["Former les adverbes en -ment, -amment et -emment et les placer correctement", "Exprimer le but et le temps avec pour, afin de, avant de, après avoir, sans", "Comprendre le fonctionnement de l'université en France", "Écrire un e-mail formel pour demander des informations", "Comprendre les documents demandés dans les démarches"],
    lessons: [69, 70, 71], vocab: ["etudesFR", "adminFR"], reading: "erasmus", prompt: "fr-b1-9",
    writing: { task: "You'd like to take a summer French course at a French university. Write to its international office (160-180 words): introduce yourself and your level, and ask about dates, prices, accommodation and the placement test.", task_fr: "Tu voudrais suivre un cours d'été de français dans une université française. Écris au service des relations internationales (160 à 180 mots) : présente-toi, ton niveau, et pose des questions sur les dates, les prix, le logement et le test de niveau.", words: "160-180",
      tips: ["Objet : …", "Madame, Monsieur,", "Je me permets de vous écrire afin de…", "Pourriez-vous m'indiquer… ?", "Je vous remercie par avance de votre réponse."],
      checklist: ["I wrote a subject line", "I opened and closed formally", "I used afin de or pour + infinitive", "I asked at least three polite questions", "I wrote between 160 and 180 words"],
      model: "Objet : Demande d'informations sur les cours d'été de français\n\nMadame, Monsieur,\n\nJe me permets de vous écrire afin d'obtenir des informations sur vos cours de français pour étudiants étrangers, cet été.\n\nJe m'appelle Kim Lambert, j'ai vingt-quatre ans et je travaille dans un grand hôpital à Dublin. J'apprends le français très régulièrement depuis deux ans, et j'ai actuellement un niveau B1. Je souhaiterais suivre un cours intensif de quatre semaines, afin de pouvoir passer le DELF B2 l'année prochaine.\n\nPourriez-vous m'indiquer les dates exactes des sessions de juillet et d'août, ainsi que le prix exact des cours ? J'aimerais également savoir si vous proposez un logement en résidence universitaire ou chez l'habitant. Enfin, faut-il passer un test de niveau avant de s'inscrire, ou le jour de l'arrivée ?\n\nVous trouverez en pièce jointe une attestation de mon école de langues.\n\nJe vous remercie par avance de votre réponse et vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.\n\nKim Lambert" } });
})();
