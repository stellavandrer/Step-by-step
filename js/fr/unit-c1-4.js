/* Cours de français, unité C1-4 « Education and knowledge / Éducation et savoirs » : le subjonctif dans les relatives
   (le seul qui sache, un livre qui soit, personne qui puisse), la proposition infinitive (sans avoir lu, pour avoir
   triché, verbes + à / de + infinitif), le compte rendu. Personnages fictifs, prénoms français. Faits vérifiables
   seulement : FUN MOOC, plateforme publique française de cours en ligne, lancée en 2013 ; dans la plupart des cours en
   ligne ouverts à tous, moins d'un inscrit sur dix va jusqu'au bout ; Montaigne et la « tête bien faite » (Essais,
   livre I, chapitre 26). */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "savoirsFR", icon: "brain", title: "Knowledge", title_fr: "Les savoirs", level: "C1", words: [
    ["le savoir", "knowledge, learning", "Le savoir ne se réduit pas aux diplômes."],
    ["la connaissance", "knowledge (of something)", "Sa connaissance du sujet est impressionnante."],
    ["la culture générale", "general knowledge", "Ce jeu teste la culture générale."],
    ["l'érudition", "erudition, scholarship", "Son érudition force le respect."],
    ["le savoir-faire", "know-how, skill", "Ce métier demande un vrai savoir-faire."],
    ["vulgariser", "to popularise, to make accessible", "Elle sait vulgariser des idées complexes."],
    ["la vulgarisation", "popularisation (of science)", "Cette émission fait de la vulgarisation scientifique."],
    ["l'autodidacte", "the self-taught person", "Ce peintre est un autodidacte."],
    ["cultivé", "cultured, well-read", "C'est une personne très cultivée."],
    ["l'ignorance", "ignorance", "L'ignorance n'est pas une faute, mais elle se soigne."],
    ["l'illettrisme", "functional illiteracy (after schooling)", "L'illettrisme touche aussi des adultes qui ont été scolarisés."],
    ["l'analphabétisme", "illiteracy (never having learnt to read)", "L'analphabétisme recule dans le monde."],
    ["l'instruction", "education, schooling", "L'instruction est obligatoire en France dès trois ans."],
    ["la curiosité", "curiosity", "La curiosité est le premier moteur de l'apprentissage."],
    ["approfondir", "to go deeper into", "Je voudrais approfondir ce point."],
    ["se documenter", "to read up, to research", "Avant d'écrire, il s'est longuement documenté."],
    ["la mémorisation", "memorisation", "La mémorisation fonctionne mieux par petites séances."],
    ["le compte rendu", "the report, the minutes", "Elle a rédigé le compte rendu de la réunion."]
  ] },
  { id: "ecoleFR", icon: "graduation-cap", title: "The education system", title_fr: "Le système éducatif", level: "C1", words: [
    ["le système éducatif", "the education system", "Le système éducatif français est très centralisé."],
    ["l'enseignement supérieur", "higher education", "L'enseignement supérieur s'est beaucoup ouvert."],
    ["l'échec scolaire", "failure at school", "L'échec scolaire commence souvent très tôt."],
    ["le décrochage scolaire", "dropping out of school", "Le décrochage scolaire touche surtout les garçons."],
    ["le redoublement", "repeating a year", "Le redoublement est de moins en moins pratiqué."],
    ["redoubler", "to repeat a year", "Il a redoublé sa seconde."],
    ["l'égalité des chances", "equal opportunities", "L'école doit garantir l'égalité des chances."],
    ["les grandes écoles", "the grandes écoles (elite higher education)", "Les grandes écoles recrutent sur concours."],
    ["le concours", "the competitive exam", "Elle prépare un concours d'enseignement."],
    ["la classe préparatoire", "the preparatory class (for the grandes écoles)", "Il a fait deux ans de classe préparatoire."],
    ["le cursus", "the course of study", "Son cursus mêle droit et économie."],
    ["la thèse", "the doctoral thesis", "Elle soutiendra sa thèse en juin."],
    ["la pédagogie", "teaching methods, pedagogy", "Ce professeur a une pédagogie remarquable."],
    ["l'orientation", "careers and study guidance", "L'orientation se joue dès le lycée."],
    ["la sélection", "selection (for admission)", "La sélection à l'entrée de l'université fait débat."],
    ["le programme scolaire", "the school curriculum", "Le programme scolaire a été allégé."],
    ["le baccalauréat", "the baccalaureate (end of secondary school exam)", "Le baccalauréat a été créé en 1808."],
    ["l'établissement", "the school, the institution", "L'établissement accueille mille élèves."]
  ] });

  W.LESSONS.push(
  {
    id: 114, level: "C1", icon: "search-check",
    title: "Le seul qui sache, un livre qui soit: the subjunctive in relative clauses", title_fr: "Le seul qui sache, un livre qui soit : le subjonctif dans les relatives",
    subtitle: "When what you describe is unique, sought after or doesn't exist, the relative clause can take the subjunctive.", subtitle_fr: "Quand ce que tu décris est unique, recherché ou inexistant, la relative peut passer au subjonctif.",
    body: `
<h2>After a superlative or le seul, le premier, le dernier</h2>
<p><s-fr>C'est le meilleur professeur que j'aie eu.</s-fr> · <s-fr>C'est la seule personne qui sache répondre.</s-fr> The subjunctive adds a subjective note; the indicative states a plain fact: <s-fr>C'est le premier élève qui est arrivé.</s-fr></p>
<h2>When the thing is sought but may not exist</h2>
<p><s-fr>Je cherche un livre qui soit accessible aux débutants.</s-fr> (I don't know if one exists) / <s-fr>J'ai trouvé un livre qui est accessible.</s-fr> (it exists)</p>
<h2>After a negative or doubtful antecedent</h2>
<p><s-fr>Je ne connais personne qui puisse m'aider.</s-fr> · <s-fr>Il n'y a rien qui me plaise ici.</s-fr> · <s-fr>Il n'existe pas de méthode qui soit parfaite.</s-fr> · In a question: <s-fr>Connais-tu quelqu'un qui parle chinois ?</s-fr> (or <s-fr>qui parle</s-fr>, both possible)</p>
<h2>Two conjunctions to watch</h2>
<p><s-fr>de sorte que</s-fr> + indicative = result; + subjunctive = purpose: <s-fr>Il a parlé fort, de sorte que tout le monde l'a entendu</s-fr> / <s-fr>Parle fort, de sorte que tout le monde t'entende.</s-fr> · <s-fr>après que</s-fr> takes the indicative in careful French: <s-fr>après qu'il est parti</s-fr>.</p>
<div class="tip">Ask yourself: does the thing exist for sure? If yes, indicative. If it's unique in your judgement, hoped for or absent, subjunctive. It's the same logic as for the subjunctive after verbs: certainty versus doubt or wish.</div>
`,
    examples: [
      ["C'est le meilleur professeur que j'aie eu.", "He's the best teacher I've ever had."],
      ["C'est la seule personne qui sache répondre.", "She's the only person who can answer."],
      ["Je cherche un livre qui soit accessible aux débutants.", "I'm looking for a book that's accessible to beginners."],
      ["J'ai trouvé un livre qui est accessible aux débutants.", "I've found a book that's accessible to beginners."],
      ["Je ne connais personne qui puisse m'aider.", "I don't know anyone who can help me."],
      ["Il n'existe pas de méthode qui soit parfaite.", "There's no method that's perfect."],
      ["Parle fort, de sorte que tout le monde t'entende.", "Speak up, so that everyone can hear you."],
      ["Il a parlé fort, de sorte que tout le monde l'a entendu.", "He spoke loudly, so everyone heard him."]
    ],
    quiz: [
      { q: "“I'm looking for a flat that has a garden” (not sure one exists):", o: ["Je cherche un appartement qui ait un jardin.", "Je cherche un appartement qui a un jardin.", "Je cherche un appartement qu'il ait un jardin."], a: 0, ex: "Sought, maybe nonexistent: subjunctive." },
      { q: "“There's nobody who knows the answer” is:", o: ["Il n'y a personne qui sache la réponse.", "Il n'y a personne qui sait la réponse.", "Il n'y a personne que sache la réponse."], a: 0, ex: "Negative antecedent: subjunctive." },
      { q: "“It's the most beautiful city I've ever seen” is:", o: ["C'est la plus belle ville que j'aie jamais vue.", "C'est la plus belle ville que j'ai jamais voir.", "C'est la plus belle ville qui j'aie jamais vue."], a: 0, ex: "After a superlative, the subjunctive is usual." },
      { q: "De sorte que + subjunctive expresses:", o: ["purpose", "result", "cause"], a: 0, ex: "With the indicative, it expresses result." },
      { q: "In careful French, après que takes:", o: ["the indicative", "the subjunctive", "the infinitive"], a: 0, ex: "après qu'il est parti (it happened)." }
    ]
  },
  {
    id: 115, level: "C1", icon: "list-checks",
    title: "Sans avoir lu, pour avoir triché: infinitive clauses", title_fr: "Sans avoir lu, pour avoir triché : la proposition infinitive",
    subtitle: "Past infinitives, infinitives instead of the subjunctive, and the verbs that need à or de.", subtitle_fr: "L'infinitif passé, l'infinitif à la place du subjonctif, et les verbes qui demandent à ou de.",
    body: `
<h2>The past infinitive</h2>
<p><s-fr>avoir</s-fr> or <s-fr>être</s-fr> + past participle: <s-fr>sans avoir lu le livre</s-fr> (without having read) · <s-fr>après être rentrée</s-fr> · <s-fr>pour</s-fr> + past infinitive expresses a cause: <s-fr>Il a été sanctionné pour avoir triché.</s-fr> (for cheating)</p>
<h2>Same subject: infinitive, not subjunctive</h2>
<p><s-fr>J'ai peur d'échouer.</s-fr> / <s-fr>J'ai peur que tu échoues.</s-fr> · <s-fr>Je partirai avant de finir.</s-fr> / <s-fr>Je partirai avant que tu finisses.</s-fr> · <s-fr>Elle travaille pour réussir.</s-fr> / <s-fr>Elle travaille pour que ses enfants réussissent.</s-fr></p>
<h2>Verbs + à or de + infinitive</h2>
<p>With <s-fr>de</s-fr>: <s-fr>s'efforcer de</s-fr> (to strive to), <s-fr>s'empresser de</s-fr> (to hurry to), <s-fr>s'abstenir de</s-fr> (to refrain from), <s-fr>se garder de</s-fr> (to be careful not to) · With <s-fr>à</s-fr>: <s-fr>parvenir à</s-fr> (to manage to), <s-fr>se résoudre à</s-fr> (to bring oneself to), <s-fr>tenir à</s-fr> (to be keen to), <s-fr>s'obstiner à</s-fr> (to persist in), <s-fr>renoncer à</s-fr> (to give up)</p>
<h2>The infinitive on its own</h2>
<p>For a question you ask yourself: <s-fr>Que faire ?</s-fr> · <s-fr>Comment expliquer ce résultat ?</s-fr> · For instructions: <s-fr>Lire attentivement le sujet.</s-fr></p>
<div class="tip">If both clauses have the same subject, French prefers the infinitive: <s-fr>Je veux réussir</s-fr>, never <s-fr>je veux que je réussisse</s-fr>. The subjunctive is for a second, different subject.</div>
`,
    examples: [
      ["Il a répondu sans avoir lu le texte.", "He answered without having read the text."],
      ["Il a été sanctionné pour avoir triché.", "He was punished for cheating."],
      ["J'ai peur d'échouer.", "I'm afraid of failing."],
      ["J'ai peur que tu échoues.", "I'm afraid you'll fail."],
      ["Elle s'efforce de lire un article par jour.", "She makes an effort to read one article a day."],
      ["Il n'est jamais parvenu à apprendre l'allemand.", "He never managed to learn German."],
      ["Je tiens à vous remercier.", "I'm keen to thank you."],
      ["Que faire face à l'échec scolaire ?", "What should be done about failure at school?"]
    ],
    quiz: [
      { q: "“He was fined for speeding” (cause) is:", o: ["Il a été verbalisé pour avoir roulé trop vite.", "Il a été verbalisé pour rouler trop vite.", "Il a été verbalisé pour qu'il ait roulé trop vite."], a: 0, ex: "pour + past infinitive = cause." },
      { q: "“I want to succeed” is:", o: ["Je veux réussir.", "Je veux que je réussisse.", "Je veux de réussir."], a: 0, ex: "Same subject: infinitive." },
      { q: "“She managed to finish” is:", o: ["Elle est parvenue à finir.", "Elle est parvenue de finir.", "Elle a parvenu à finir."], a: 0, ex: "parvenir à, with être." },
      { q: "“He refrained from replying” is:", o: ["Il s'est abstenu de répondre.", "Il s'est abstenu à répondre.", "Il a abstenu de répondre."], a: 0, ex: "s'abstenir de." },
      { q: "“After going home, she called her mother” is:", o: ["Après être rentrée, elle a appelé sa mère.", "Après avoir rentrée, elle a appelé sa mère.", "Après rentrer, elle a appelé sa mère."], a: 0, ex: "rentrer takes être: après être rentrée." }
    ]
  },
  {
    id: 116, level: "C1", kind: "functional", icon: "notebook-pen",
    title: "Everyday French: writing a report (le compte rendu)", title_fr: "Le français de tous les jours : rédiger un compte rendu",
    subtitle: "A faithful, condensed account of a meeting or a lecture, for people who weren't there.", subtitle_fr: "Un récit fidèle et condensé d'une réunion ou d'une conférence, pour ceux qui n'y étaient pas.",
    body: `
<h2>What it is</h2>
<p>A compte rendu reports what was said or decided, in fewer words, without your opinion. It's neither a transcription nor a commentary.</p>
<h2>The structure</h2>
<p>A header: <s-fr>Objet</s-fr>, <s-fr>Date</s-fr>, <s-fr>Lieu</s-fr>, <s-fr>Participants</s-fr> or <s-fr>Intervenants</s-fr>. Then the main points, grouped logically rather than in strict chronological order. Finally, decisions and next steps.</p>
<h2>Reporting verbs</h2>
<p><s-fr>présenter</s-fr>, <s-fr>exposer</s-fr>, <s-fr>rappeler</s-fr>, <s-fr>souligner</s-fr>, <s-fr>préciser</s-fr>, <s-fr>évoquer</s-fr>, <s-fr>aborder</s-fr>, <s-fr>s'interroger sur</s-fr>, <s-fr>reconnaître</s-fr>, <s-fr>conclure</s-fr>: <s-fr>La directrice a rappelé que…</s-fr> · <s-fr>Plusieurs participants ont souligné…</s-fr> · <s-fr>La question du budget a été abordée.</s-fr></p>
<h2>Decisions</h2>
<p>Impersonal and passive phrasing: <s-fr>Il a été décidé que…</s-fr> · <s-fr>Il a été convenu de…</s-fr> · <s-fr>Une décision sera prise lors de la prochaine réunion.</s-fr></p>
<div class="tip">Write it while it's fresh, ideally within a day. One idea per paragraph, short titles, and reported speech in the past: <s-fr>Elle a estimé qu'aucun système n'était parfait.</s-fr></div>
`,
    examples: [
      ["Objet : réunion de l'équipe pédagogique du 12 mars.", "Subject: teaching team meeting of 12 March."],
      ["La directrice a rappelé que les inscriptions ferment le 30 avril.", "The head reminded everyone that registration closes on 30 April."],
      ["Plusieurs participants ont souligné le manque de salles.", "Several participants stressed the lack of rooms."],
      ["La question du budget a été abordée en fin de séance.", "The question of the budget was raised at the end of the meeting."],
      ["Elle a estimé qu'aucun système n'était parfait.", "She considered that no system was perfect."],
      ["Il a été décidé de reporter la sortie au mois de mai.", "It was decided to postpone the school trip until May."],
      ["Une décision sera prise lors de la prochaine réunion.", "A decision will be taken at the next meeting."]
    ],
    quiz: [
      { q: "A compte rendu contains:", o: ["what was said and decided, without your opinion", "your opinion on the meeting", "a word-for-word transcription"], a: 0, ex: "Faithful and condensed." },
      { q: "“It was decided to postpone” is:", o: ["Il a été décidé de reporter", "Il a décidé de reporter", "Il était décidé de reporter"], a: 0, ex: "Impersonal passive: il a été décidé de." },
      { q: "“The question was raised” is:", o: ["La question a été abordée.", "La question a été abordé.", "La question s'est abordée."], a: 0, ex: "Passive with agreement: abordée." },
      { q: "She said: “No system is perfect.” In the report:", o: ["Elle a estimé qu'aucun système n'était parfait.", "Elle a estimé qu'aucun système n'est parfait pas.", "Elle a estimé : aucun système est parfait."], a: 0, ex: "Reported speech in the past: n'était." },
      { q: "The header of a compte rendu gives:", o: ["the subject, date, place and participants", "your conclusions", "a summary of the next meeting"], a: 0, ex: "Objet, date, lieu, participants." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    114: {
      gap: [["Je cherche un livre qui ___ accessible aux débutants. (être)", "soit"], ["Je ne connais personne qui ___ m'aider. (pouvoir)", "puisse"], ["C'est le meilleur cours que j'___ suivi. (avoir)", "aie"], ["Parle fort, de sorte que tout le monde t'___. (entendre)", "entende"]],
      fix: [["Il n'y a rien qui me plaît dans ce programme.", "Il n'y a rien qui me plaise dans ce programme.", "Negative antecedent (rien): subjunctive."], ["Après qu'il soit parti, la réunion a continué.", "Après qu'il est parti, la réunion a continué.", "In careful French, après que takes the indicative."]],
      task: ["Describe the ideal school you're looking for, with je cherche une école qui…, il n'existe pas de… qui…, le seul… qui… and de sorte que.", "Décris l'école idéale que tu cherches, avec je cherche une école qui…, il n'existe pas de… qui…, le seul… qui… et de sorte que.", "Je cherche une école qui fasse confiance aux élèves et qui leur laisse du temps pour chercher. Il n'existe sans doute pas d'établissement qui soit parfait, mais certains s'en approchent. Le seul critère qui compte vraiment, à mes yeux, c'est la curiosité. J'aimerais que les cours soient organisés de sorte que chacun puisse avancer à son rythme."]
    },
    115: {
      gap: [["Il a répondu sans ___ lu le texte. (having)", "avoir"], ["Il a été sanctionné pour ___ triché. (having)", "avoir"], ["Elle s'efforce ___ lire un article par jour. (preposition)", "de"], ["Il n'est jamais parvenu ___ apprendre l'allemand. (preposition)", "à"]],
      fix: [["Je veux que je réussisse cet examen.", "Je veux réussir cet examen.", "Same subject: infinitive, not que + subjunctive."], ["Il a renoncé de partir.", "Il a renoncé à partir.", "renoncer à + infinitive."]],
      task: ["Write four sentences about learning on your own, with sans avoir, pour avoir, s'efforcer de and parvenir à.", "Écris quatre phrases sur l'apprentissage en autonomie, avec sans avoir, pour avoir, s'efforcer de et parvenir à.", "On ne peut pas comprendre un texte difficile sans l'avoir lu plusieurs fois. Pour avoir abandonné trop de cours en ligne, je sais que la motivation ne suffit pas. Aujourd'hui, je m'efforce de travailler un peu chaque jour plutôt que beaucoup une fois par semaine. C'est ainsi que je parviens aujourd'hui à lire des romans en français."]
    },
    116: {
      gap: [["La directrice a ___ que les inscriptions ferment le 30 avril. (reminded)", "rappelé"], ["La question du budget a été ___ en fin de séance. (raised, f)", "abordée"], ["Il a été ___ de reporter la sortie. (decided)", "décidé"], ["___ : réunion de l'équipe du 12 mars. (subject, in a header)", "Objet"]],
      fix: [["Elle a dit qu'aucun système n'est pas parfait.", "Elle a dit qu'aucun système n'était parfait.", "aucun… ne, without pas; reported speech in the past: était."], ["Il a été décidé que nous reporterions la sortie, je trouve que c'est dommage.", "Il a été décidé de reporter la sortie.|Il a été décidé que la sortie serait reportée.", "No personal opinion in a compte rendu."]],
      task: ["Write the beginning of a report on a parents' meeting: header, then two points that were raised.", "Écris le début d'un compte rendu de réunion de parents d'élèves : l'en-tête, puis deux points abordés.", "Objet : réunion des parents d'élèves de la classe de quatrième. Date : 14 novembre. Intervenants : la professeure principale et douze parents. La professeure a d'abord présenté le programme du trimestre et rappelé les dates des conseils de classe. Plusieurs parents ont ensuite souligné le poids des devoirs le week-end. Il a été convenu d'en reparler lors de la prochaine réunion."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "conference", lesson: 116, level: "C1", icon: "notebook-pen", partner: "Léonie", role: "a colleague who missed the lecture",
    title: "Reporting on a lecture", title_fr: "Rendre compte d'une conférence",
    setting: "You work at a school. Yesterday you attended a lecture on artificial intelligence in education. Your colleague Léonie couldn't come, and asks you what was said.", setting_fr: "Tu travailles dans un établissement scolaire. Hier, tu as assisté à une conférence sur l'intelligence artificielle à l'école. Ta collègue Léonie n'a pas pu venir et te demande ce qui s'est dit.",
    turns: [
      { p: "Alors, cette conférence sur l'intelligence artificielle à l'école ? J'ai dû la manquer.", fr: "So, this lecture on artificial intelligence at school? I had to miss it." },
      { y: ["La conférencière a d'abord rappelé que les élèves utilisent déjà ces outils, qu'on le veuille ou non.", "La conférencière a d'abord rappelé que les élèves utilisent déjà ces outils, qu'on le veut ou non.", "La conférencière a d'abord rappelé de les élèves utilisent déjà ces outils, qu'on le veuille ou non."], fr: "The speaker first pointed out that pupils already use these tools, whether we like it or not.", why: "qu'on le veuille ou non: subjunctive; rappeler que + clause." },
      { p: "Et elle était pour ou contre ?", fr: "And was she for or against?" },
      { y: ["Ni l'un ni l'autre : elle a souligné les risques tout en insistant sur les usages utiles.", "Ni l'un ni l'autre : elle a souligné les risques tout en insistant des usages utiles.", "Ni l'un ni l'autre : elle a souligné les risques tout en insistant à les usages utiles."], fr: "Neither: she stressed the risks while insisting on the useful uses.", why: "insister sur." },
      { p: "Elle a donné des exemples concrets ?", fr: "Did she give concrete examples?" },
      { y: ["Oui : elle a évoqué un professeur qui fait corriger par ses élèves des textes produits par une machine.", "Oui : elle a évoqué un professeur qui faire corriger par ses élèves des textes produits par une machine.", "Oui : elle a évoqué d'un professeur qui fait corriger par ses élèves des textes produits par une machine."], fr: "Yes: she mentioned a teacher who has his pupils correct texts produced by a machine.", why: "évoquer + noun, without de; faire + infinitive." },
      { p: "Intéressant. Et sa conclusion ?", fr: "Interesting. And her conclusion?" },
      { y: ["Elle a conclu qu'il n'existe pas d'outil qui puisse remplacer un enseignant, mais qu'il faut apprendre à s'en servir.", "Elle a conclu qu'il n'existe pas d'outil qui peut remplacer un enseignant, mais qu'il faut apprendre à s'en servir.", "Elle a conclu qu'il n'existe pas d'outil qui puisse remplacer un enseignant, mais qu'il faut apprendre à se servir."], fr: "She concluded that there's no tool that can replace a teacher, but that we need to learn how to use them.", why: "Negative antecedent: subjunctive (puisse); se servir de → s'en servir." },
      { p: "Tu pourrais m'envoyer un petit compte rendu ?", fr: "Could you send me a short report?" },
      { y: ["Bien sûr. Je te l'envoie ce soir, après avoir relu mes notes.", "Bien sûr. Je te l'envoie ce soir, après relire mes notes.", "Bien sûr. Je te l'envoie ce soir, après avoir relues mes notes."], fr: "Of course. I'll send it to you tonight, after rereading my notes.", why: "après + past infinitive; no agreement with avoir when the object comes after." }
    ] }
  );

  W.READINGS.push({
    id: "autodidacte", level: "C1", icon: "library", title: "Apprendre seul : le rêve et la réalité", genre: "Article",
    intro: "Online courses, tutorials, apps: never has learning alone been so easy. So why do so few people finish? The subjunctive in relative clauses and infinitive clauses.",
    intro_fr: "Cours en ligne, tutoriels, applications : jamais apprendre seul n'a été aussi facile. Alors pourquoi si peu de gens vont-ils au bout ? Le subjonctif dans les relatives et les propositions infinitives.",
    paragraphs: [
      { en: "Jamais il n'a été aussi facile d'apprendre seul. Cours en ligne, tutoriels, applications : en quelques clics, chacun peut suivre un cours donné par une grande université. En France, la plateforme publique FUN MOOC propose ainsi des cours en ligne gratuits depuis 2013.", fr: "It has never been so easy to learn on your own. Online courses, tutorials, apps: in a few clicks, anyone can follow a course given by a major university. In France, the public platform FUN MOOC has been offering free online courses since 2013." },
      { en: "Le rêve d'un savoir accessible à tous semble donc à portée de main. Pourtant, les chiffres invitent à la prudence : dans la plupart des cours en ligne ouverts à tous, moins d'un inscrit sur dix va jusqu'au bout. S'inscrire est facile ; persévérer, beaucoup moins.", fr: "The dream of knowledge accessible to all therefore seems within reach. Yet the figures call for caution: in most open online courses, fewer than one in ten people who sign up see it through. Signing up is easy; persevering, much less so." },
      { en: "Qu'est-ce qui fait défaut ? Avant tout, un cadre. Sans enseignant qui fixe des échéances, sans camarades avec qui échanger, la motivation s'émousse. Il n'y a guère que les apprenants déjà très autonomes qui parviennent à tirer pleinement profit de ces outils.", fr: "What's missing? Above all, a structure. Without a teacher setting deadlines, without classmates to talk to, motivation fades. Hardly anyone but already very independent learners manages to get the full benefit from these tools." },
      { en: "Les autodidactes qui réussissent ont d'ailleurs souvent un point commun : ils se fixent un objectif précis et s'efforcent de le partager. Rejoindre un groupe, s'engager à rendre un travail, expliquer à quelqu'un ce qu'on vient d'apprendre : autant de moyens de recréer le cadre que l'école offrait.", fr: "Self-taught people who succeed often have one thing in common: they set themselves a precise goal and make an effort to share it. Joining a group, committing to hand in a piece of work, explaining to someone what you've just learnt: so many ways of recreating the structure that school provided." },
      { en: "Internet n'a donc pas rendu l'école inutile. Il a plutôt révélé ce qu'elle apporte de plus précieux : non pas seulement des savoirs, mais un rythme, des pairs, et quelqu'un qui croie en nos progrès.", fr: "So the internet hasn't made school useless. Rather, it has revealed what's most precious about it: not just knowledge, but a rhythm, peers, and someone who believes in our progress." }
    ],
    glossary: { "tutoriels": "tutorials", "plateforme": "platform", "portée": "reach (à portée de main: within reach)", "inscrit": "person signed up", "persévérer": "to persevere", "défaut": "lack (faire défaut: to be missing)", "échéances": "deadlines", "émousse": "becomes blunt, fades", "apprenants": "learners", "profit": "benefit (tirer profit de: to benefit from)", "recréer": "to recreate", "précieux": "precious", "pairs": "peers", "croie": "believes (subjunctive of croire)" },
    questions: [
      { q: "Depuis quand FUN MOOC propose-t-elle des cours en ligne gratuits ?", o: ["Depuis 2013", "Depuis 2003", "Depuis 2020"], a: 0 },
      { q: "Quelle part des inscrits va jusqu'au bout de la plupart des cours en ligne ?", o: ["Moins d'un sur dix", "La moitié", "Presque tous"], a: 0 },
      { q: "Selon l'auteur, qu'est-ce qui fait surtout défaut quand on apprend seul ?", o: ["Un cadre", "Des outils", "De l'argent"], a: 0 },
      { q: "Que font les autodidactes qui réussissent ?", o: ["Ils se fixent un objectif précis et le partagent.", "Ils évitent tout contact.", "Ils changent souvent de cours."], a: 0 },
      { q: "Qu'est-ce qu'internet a révélé, selon l'auteur ?", o: ["Ce que l'école apporte de plus précieux", "L'inutilité de l'école", "La fin des diplômes"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-c1-4", unit: "c1-4", level: "C1", icon: "school",
    title: "Débat : faut-il supprimer les notes ?", title_fr: "Débat : faut-il supprimer les notes ?",
    context: "On the radio, Nadia, a teacher in a school without marks, debates with Olivier, a parent.", context_fr: "À la radio, Nadia, professeure dans un collège sans notes, débat avec Olivier, parent d'élève.",
    words: [["les compétences", "skills"], ["se décourager", "to lose heart"], ["sceptique", "sceptical"], ["les lacunes", "gaps (in knowledge)"], ["faire marche arrière", "to backtrack"]],
    lines: [["Animateur", "Les notes sur vingt : une tradition à laquelle beaucoup de familles sont attachées. Faut-il pour autant les garder ? Nadia, vous enseignez dans un collège qui a supprimé les notes en sixième.", "fr-FR"], ["Nadia", "Oui, depuis trois ans. Nous évaluons des compétences, avec des couleurs. Le but n'est pas de supprimer l'évaluation, mais d'éviter qu'un élève se décourage pour avoir eu un deux sur vingt dès septembre.", "fr-FR"], ["Animateur", "Olivier, vous êtes parent d'élève, et plutôt sceptique.", "fr-FR"], ["Olivier", "Je cherche une évaluation qui soit claire pour tout le monde. Avec les couleurs, je ne sais jamais vraiment où en est mon fils. Une note, au moins, tout le monde la comprend.", "fr-FR"], ["Nadia", "Je comprends, mais une note ne dit pas ce qu'il faut retravailler. Un douze peut cacher des réussites et des lacunes très différentes. Il n'existe pas de système qui soit parfait, mais celui-ci aide les élèves à progresser sans avoir peur de l'erreur.", "fr-FR"], ["Olivier", "Encore faudrait-il que les parents soient mieux informés. Je ne demande qu'à être convaincu.", "fr-FR"], ["Nadia", "Vous avez raison : nous devons mieux l'expliquer. C'est d'ailleurs pour avoir négligé cette étape que certaines écoles ont fait marche arrière.", "fr-FR"]],
    gist: ["Quel est le sujet du débat ?", ["La suppression des notes à l'école", "Le prix des fournitures scolaires", "Les vacances scolaires"]],
    detail: [["Comment le collège de Nadia évalue-t-il les élèves ?", ["Par compétences, avec des couleurs", "Avec des notes sur cent", "Il ne les évalue plus du tout"]], ["Que reproche Olivier aux couleurs ?", ["Il ne sait pas vraiment où en est son fils.", "Elles coûtent cher.", "Elles sont trop sévères."]], ["Selon Nadia, quel est le défaut d'une note ?", ["Elle ne dit pas ce qu'il faut retravailler.", "Elle est trop facile à obtenir.", "Elle n'existe qu'en France."]], ["Pourquoi certaines écoles ont-elles fait marche arrière ?", ["Pour avoir négligé d'informer les parents", "Par manque d'argent", "À cause des élèves"]]],
    decode: ["Je cherche une évaluation qui soit claire pour tout le monde", "pour avoir négligé cette étape"],
    tip: "In a debate, each speaker reformulates the other's view before answering it: je comprends, mais…; vous avez raison :… These turns show you how the positions move closer.", tip_fr: "Dans un débat, chacun reformule l'avis de l'autre avant d'y répondre : je comprends, mais… ; vous avez raison :… Ces tournures te montrent comment les positions se rapprochent."
  }]);

  W.LEXIS = W.LEXIS || {};
  W.LEXIS["c1-4"] = {
    colloc: [
      ["acquérir des connaissances", "to acquire knowledge", "Il a acquis des connaissances solides en histoire.", "acquis", ["gagné", "pris"]],
      ["approfondir un sujet", "to study a subject in depth", "Elle veut approfondir ce sujet en master.", "approfondir", ["profonder", "enfoncer"]],
      ["combler son retard", "to catch up", "Il a travaillé l'été pour combler son retard.", "combler", ["remplir", "boucher"]],
      ["suivre un cursus", "to follow a course of study", "Elle suit un cursus de droit.", "suit", ["tient", "porte"]],
      ["soutenir une thèse", "to defend a thesis", "Il a soutenu sa thèse l'an dernier.", "soutenu", ["tenu", "porté"]],
      ["décrocher un diplôme", "to get a degree", "Elle a décroché son diplôme avec mention.", "décroché", ["arraché", "attrapé"]],
      ["redoubler une classe", "to repeat a year", "Il a redoublé sa seconde.", "redoublé", ["doublé", "répété"]],
      ["dispenser un enseignement", "to provide teaching", "Cette école dispense un enseignement bilingue.", "dispense", ["distribue", "verse"]],
      ["faire ses preuves", "to prove oneself, to prove its worth", "Cette méthode a fait ses preuves.", "fait", ["donné", "montré"]],
      ["éveiller la curiosité", "to arouse curiosity", "Ce professeur sait éveiller la curiosité de ses élèves.", "éveiller", ["réveiller", "lever"]]
    ],
    wf: [
      ["L'___ scolaire touche d'abord les élèves les plus fragiles. (ÉCHOUER)", "échec"],
      ["Elle a fait preuve d'une grande ___. (CURIEUX)", "curiosité"],
      ["Le ___ coûte cher et aide peu les élèves. (REDOUBLER)", "redoublement"],
      ["La ___ scientifique passionne le grand public. (VULGAIRE)", "vulgarisation"],
      ["Ce chercheur est d'une ___ impressionnante. (ÉRUDIT)", "érudition"],
      ["Cette méthode s'est révélée ___ : les résultats n'ont pas progressé. (EFFICACE)", "inefficace"],
      ["Les ___ apprennent souvent plus lentement mais plus durablement. (AUTODIDACTE)", "autodidactes"],
      ["La ___ des élèves se fait désormais par compétences. (ÉVALUER)", "évaluation"]
    ],
    kwt: [
      ["Je ne connais personne capable de m'aider.", "PUISSE", "Je ne connais personne ___.", "qui puisse m'aider"],
      ["Il a été puni parce qu'il avait triché.", "AVOIR", "Il a été puni ___.", "pour avoir triché"],
      ["Il est parti et n'a pas dit au revoir.", "SANS", "Il est parti ___ au revoir.", "sans dire|sans avoir dit"],
      ["C'est le meilleur livre que j'ai lu cette année.", "AIE", "C'est le meilleur livre ___ cette année.", "que j'aie lu"],
      ["Il fait tout ce qu'il peut pour comprendre.", "EFFORCE", "Il ___ comprendre.", "s'efforce de"],
      ["Il a fini par accepter, à contrecœur.", "RÉSOLU", "Il ___ accepter.", "s'est résolu à"]
    ],
    idioms: [
      ["sécher les cours", "ne pas aller en cours volontairement", "to skip class", "Au lycée, il séchait les cours pour aller au cinéma.", "séchait les cours"],
      ["être un puits de science", "savoir énormément de choses", "to be a fount of knowledge", "Demande à ta grand-mère : c'est un puits de science.", "un puits de science"],
      ["avoir la bosse des maths", "être très doué en mathématiques", "to have a head for figures", "Sa fille a la bosse des maths.", "a la bosse des maths"],
      ["en connaître un rayon", "très bien connaître un sujet", "to know a thing or two", "En histoire de l'art, elle en connaît un rayon.", "en connaît un rayon"],
      ["se creuser la tête", "réfléchir intensément", "to rack one's brains", "Je me suis creusé la tête pour trouver la réponse.", "me suis creusé la tête"],
      ["être fort en thème", "être un élève très scolaire et appliqué", "to be a swot", "C'était l'élève fort en thème de la classe.", "fort en thème"],
      ["c'est en forgeant qu'on devient forgeron", "c'est par la pratique qu'on progresse", "practice makes perfect", "Ne te décourage pas : c'est en forgeant qu'on devient forgeron.", "c'est en forgeant qu'on devient forgeron"],
      ["une tête bien faite plutôt que bien pleine", "mieux vaut savoir réfléchir qu'accumuler des connaissances (d'après Montaigne)", "better a well-formed mind than a well-filled one", "Pour Montaigne, l'éducation devait former une tête bien faite plutôt que bien pleine.", "une tête bien faite plutôt que bien pleine"]
    ]
  };

  W.PROMPTS.push({ id: "fr-c1-4", level: "C1", q: "Qui t'a donné le goût d'apprendre ? Raconte, et explique ce que tu en as retenu.", fr: "Who gave you a taste for learning? Tell the story, and explain what you took from it.", time: 180,
    phrases: ["le plus beau souvenir que j'aie…", "la seule… qui sache…", "sans avoir…", "pour avoir…", "je m'efforce de…"],
    model: "Le plus beau souvenir d'école que j'aie, c'est ma professeure de sciences au lycée. C'était la seule enseignante qui sache rendre passionnant un chapitre sur les volcans ! Elle ne nous donnait jamais la réponse sans nous avoir d'abord laissé le temps de chercher. Pour avoir eu la chance de suivre ses cours, j'ai compris une chose : il n'y a pas de question qui soit bête. Aujourd'hui encore, je m'efforce d'apprendre comme elle nous l'a appris, en cherchant par moi-même avant de lire la solution." });

  W.WRITING_GUIDE["c1-4"] = { genre: "A report (compte rendu)", genre_fr: "Un compte rendu",
    plan: [["Give a title and a header: subject, speakers.", "Donne un titre et un en-tête : objet, intervenants."], ["First point: the first speaker's position.", "Premier point : la position du premier intervenant."], ["Second point: the second speaker's reservations.", "Deuxième point : les réserves du second intervenant."], ["Report the exchange of arguments, in the past.", "Rapporte l'échange d'arguments, au passé."], ["End with the point of agreement and a proposal for the readers.", "Termine par le point d'accord et une proposition pour les lecteurs."]],
    marks: [["Objet : présentation", "the header: the subject", "l'en-tête : l'objet"], ["Nadia a d'abord présenté", "a reporting verb", "un verbe introducteur"], ["Elle a souligné que", "reporting in the past", "rapporter au passé"], ["Il souhaite une évaluation qui soit compréhensible", "the subjunctive in a relative clause", "le subjonctif dans une relative"], ["aucun système n'était parfait", "reported speech in the past", "le discours rapporté au passé"], ["pour l'avoir négligée", "pour + past infinitive: cause", "pour + infinitif passé : la cause"]] };

  W.COURSE.push({ id: "c1-4", level: "C1", icon: "graduation-cap", title: "Education and knowledge", title_fr: "Éducation et savoirs",
    intro: "In this unit, you'll talk about school, knowledge and learning: the subjunctive in relative clauses (le seul qui sache, un livre qui soit), infinitive clauses (sans avoir lu, pour avoir triché) and writing a report, a genre you'll need at university and at work.",
    intro_fr: "Dans cette unité, tu vas parler d'école, de savoirs et d'apprentissage : le subjonctif dans les relatives (le seul qui sache, un livre qui soit), la proposition infinitive (sans avoir lu, pour avoir triché) et le compte rendu, un genre utile à l'université comme au travail.",
    can: ["Choose between indicative and subjunctive in relative clauses", "Use past infinitives and infinitive clauses", "Discuss education systems, inequality and self-learning", "Report a meeting or a debate faithfully, in the past", "Write a structured compte rendu"],
    can_fr: ["Choisir entre indicatif et subjonctif dans les relatives", "Employer l'infinitif passé et les propositions infinitives", "Débattre des systèmes éducatifs, des inégalités et de l'autoformation", "Rapporter fidèlement une réunion ou un débat, au passé", "Rédiger un compte rendu structuré"],
    lessons: [114, 115, 116], vocab: ["savoirsFR", "ecoleFR"], reading: "autodidacte", prompt: "fr-c1-4",
    writing: { task: "Write a report (220-250 words) of this unit's radio debate on marks at school, for a parents' association newsletter. Report the positions faithfully, in the past, without giving your opinion.", task_fr: "Rédige un compte rendu (220 à 250 mots) du débat radiophonique de cette unité sur les notes à l'école, pour la lettre d'une association de parents. Rapporte fidèlement les positions, au passé, sans donner ton avis.", words: "220-250",
      tips: ["Objet : …", "… a d'abord présenté…", "… a souligné que…", "En réponse, … a rappelé que…", "Les deux intervenants se sont accordés sur…"],
      checklist: ["My report has a title and a header", "Each paragraph covers one point", "I used varied reporting verbs", "I reported speech in the past", "There is no personal opinion", "I wrote between 220 and 250 words"],
      model: "Compte rendu : faut-il supprimer les notes ?\n\nObjet : présentation, à l'intention des membres de l'association, d'un débat radiophonique sur l'évaluation sans notes.\nIntervenants : Nadia, professeure dans un collège qui a supprimé les notes en sixième ; Olivier, parent d'élève.\n\n1. L'expérience d'un collège sans notes\nNadia a d'abord présenté le système mis en place dans son établissement depuis trois ans : les élèves sont évalués par compétences, à l'aide de couleurs. Elle a souligné que l'objectif n'était pas de supprimer l'évaluation, mais d'éviter qu'un élève se décourage dès les premières semaines.\n\n2. Les réserves d'un parent\nOlivier a exprimé son scepticisme. Il souhaite une évaluation qui soit compréhensible par tous et estime que les couleurs ne lui permettent pas de savoir où en est son enfant. À ses yeux, la note présente l'avantage de la clarté. Il a toutefois précisé qu'il ne demandait qu'à être convaincu.\n\n3. Les arguments échangés\nEn réponse, Nadia a rappelé qu'une note ne précise pas ce qu'il faut retravailler : une même note peut cacher des profils très différents. Elle a reconnu qu'aucun système n'était parfait, tout en défendant une méthode qui aide les élèves à progresser sans craindre l'erreur.\n\n4. Le point d'accord\nLes deux intervenants se sont accordés sur un point : l'information des parents est indispensable. Selon Nadia, c'est pour l'avoir négligée que certains établissements sont revenus aux notes.\n\nProposition : inviter Nadia à une prochaine réunion de l'association." } });
})();
