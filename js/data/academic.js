/* Compétences universitaires B2 → C2 (1/3 : B2). Le contenu d'un module d'anglais universitaire (EAP).
   Chapitre : { id, level, icon, kind ("read" | "write" | "speak" : étape de l'unité où il apparaît), units,
     title(_fr), subtitle(_fr), can(_fr) (objectifs), body(_fr) (balises de leçon : <s-en>, <ipa>, <st>, tip, warn),
     source? { title(_fr), paras | blocks [{h, paras}], fr? (texte en français), note(_fr)? } = texte de travail,
     lecture? { title(_fr), paras } = cours magistral lu à voix haute, data? { title, head, rows, note(_fr) },
     bank [{ h, h_fr, items [[en, fr]] }] = banque de phrases,
     quiz (mcq par défaut ; src: true = le texte de travail s'affiche au-dessus ; types stress/type/fix/match/seq),
     task { task(_fr), words, checklist(_fr), model, speak? } = vraie production, avec modèle et correction par Claude,
     more? [{ name, desc(_fr), q }] = pour aller plus loin (lien de recherche) } */
window.ACAD = [
/* ============================== B2 ============================== */
{ id: "ac-reading", level: "B2", icon: "book-open-text", kind: "read", units: ["b2-1"],
  title: "Reading academic texts", title_fr: "Lire des textes universitaires",
  subtitle: "Skim, scan, find the argument, read critically", subtitle_fr: "Survoler, repérer, trouver l'argument, lire de façon critique",
  can: ["Choose the right reading strategy for your purpose", "Find the main claim and the evidence in an academic text", "Follow the writer's reasoning through signal words", "Ask critical questions about a source"],
  can_fr: ["Choisir la bonne stratégie de lecture selon ton objectif", "Trouver l'idée principale et les preuves dans un texte universitaire", "Suivre le raisonnement de l'auteur grâce aux mots de liaison", "Poser des questions critiques sur une source"],
  body: `<p>At university you'll have far more to read than you can read word by word. Good academic readers don't simply read faster: they <b>read with a purpose</b> and choose a strategy.</p>
<h3>Three ways of reading</h3>
<ul>
<li><b>Skimming</b>: a quick look to get the general idea. Read the title, the abstract or introduction, the headings, the first sentence of each paragraph, and the conclusion.</li>
<li><b>Scanning</b>: looking for one specific piece of information (a date, a name, a figure). Your eyes move fast until they find it.</li>
<li><b>Close reading</b>: reading carefully, often several times, to understand an argument in detail and take notes.</li>
</ul>
<h3>Before, during, after: SQ3R</h3>
<p>A classic method (Robinson, 1946): <b>Survey</b> the text, turn the headings into <b>Questions</b>, <b>Read</b> to answer them, <b>Recite</b> the answers without looking, and <b>Review</b> later. It turns passive reading into active recall.</p>
<h3>Following the argument</h3>
<p>In most academic paragraphs, the first sentence (the <b>topic sentence</b>) gives the main idea, and the rest supports it. Signal words show how ideas connect: <s-en>however</s-en> (contrast), <s-en>therefore</s-en> (consequence), <s-en>for instance</s-en> (example), <s-en>moreover</s-en> (addition), <s-en>in other words</s-en> (reformulation). Learn to separate four things: the writer's <b>claim</b>, the <b>evidence</b>, the <b>examples</b>, and the opinions of <b>other people</b> that the writer reports, and may disagree with.</p>
<h3>Reading critically</h3>
<ul>
<li>Who wrote it, when, and for whom? Is it a peer-reviewed study, a textbook, a newspaper article or a blog?</li>
<li>What is the evidence: data, studies, expert opinion, or anecdotes?</li>
<li>Does the conclusion really follow from the evidence?</li>
<li>What is missing: other explanations, other points of view?</li>
</ul>
<div class="tip">Don't look up every word. Guess from the context and from the parts of the word (<i>un-</i>, <i>-able</i>, <i>-ity</i>), and only check a word if it keeps coming back or blocks the meaning.</div>`,
  body_fr: `<p>À l'université, tu auras bien plus à lire que tu ne pourras lire mot à mot. Les bons lecteurs universitaires ne lisent pas simplement plus vite : ils <b>lisent avec un objectif</b> et choisissent une stratégie.</p>
<h3>Trois façons de lire</h3>
<ul>
<li><b>Survoler (skimming)</b> : un coup d'œil rapide pour saisir l'idée générale. Lis le titre, le résumé ou l'introduction, les intertitres, la première phrase de chaque paragraphe et la conclusion.</li>
<li><b>Repérer (scanning)</b> : chercher une information précise (une date, un nom, un chiffre). Tes yeux défilent vite jusqu'à la trouver.</li>
<li><b>Lire en détail</b> : lire attentivement, souvent plusieurs fois, pour comprendre un raisonnement en profondeur et prendre des notes.</li>
</ul>
<h3>Avant, pendant, après : SQ3R</h3>
<p>Une méthode classique (Robinson, 1946) : <b>Survey</b> (survole le texte), <b>Question</b> (transforme les intertitres en questions), <b>Read</b> (lis pour y répondre), <b>Recite</b> (redis les réponses sans regarder), <b>Review</b> (révise plus tard). Elle transforme la lecture passive en rappel actif.</p>
<h3>Suivre l'argumentation</h3>
<p>Dans la plupart des paragraphes universitaires, la première phrase (la <b>phrase-clé</b>) donne l'idée principale, et le reste l'appuie. Les mots de liaison montrent comment les idées s'enchaînent : <s-en>however</s-en> (opposition), <s-en>therefore</s-en> (conséquence), <s-en>for instance</s-en> (exemple), <s-en>moreover</s-en> (ajout), <s-en>in other words</s-en> (reformulation). Apprends à distinguer quatre choses : la <b>thèse</b> de l'auteur, les <b>preuves</b>, les <b>exemples</b>, et les opinions d'<b>autres personnes</b> que l'auteur rapporte, et avec lesquelles il peut être en désaccord.</p>
<h3>Lire de façon critique</h3>
<ul>
<li>Qui l'a écrit, quand, et pour qui ? Est-ce une étude évaluée par des pairs, un manuel, un article de presse ou un blog ?</li>
<li>Quelles sont les preuves : des données, des études, l'avis d'experts, ou des anecdotes ?</li>
<li>La conclusion découle-t-elle vraiment des preuves ?</li>
<li>Que manque-t-il : d'autres explications, d'autres points de vue ?</li>
</ul>
<div class="tip">Ne cherche pas chaque mot. Devine grâce au contexte et aux morceaux du mot (<i>un-</i>, <i>-able</i>, <i>-ity</i>), et ne vérifie un mot que s'il revient souvent ou s'il bloque le sens.</div>`,
  source: { title: "Do cities need more trees?", title_fr: "Les villes ont-elles besoin de plus d'arbres ?", paras: [
    "Urban planners increasingly argue that trees are not a luxury but a form of public infrastructure. Their main claim is that green spaces improve both physical and mental health. Several large studies have found that people who live near parks tend to report lower levels of stress, and doctors in some countries now “prescribe” time outdoors.",
    "However, the evidence is not entirely straightforward. Wealthier neighbourhoods usually have more green space, so it is difficult to know whether trees themselves make people healthier, or whether healthier, richer people simply live near trees. For instance, a leafy suburb may also have better housing, cleaner air and less noise. Researchers are therefore cautious: most studies show a correlation, not a cause.",
    "Nevertheless, even sceptics agree that trees provide shade, which matters more and more as summers grow hotter. In my view, cities should plant more trees, but they should present them as one part of a wider health policy rather than as a miracle cure."] },
  bank: [
    { h: "Signal words", h_fr: "Mots de liaison", items: [["However, …", "Cependant, …"], ["Nevertheless, …", "Néanmoins, …"], ["In contrast, …", "À l'inverse, …"], ["Therefore, …", "Par conséquent, …"], ["As a result, …", "En conséquence, …"], ["For instance, …", "Par exemple, …"], ["Moreover, …", "De plus, …"], ["In other words, …", "Autrement dit, …"], ["Similarly, …", "De même, …"]] },
    { h: "Talking about a text", h_fr: "Parler d'un texte", items: [["The text argues that …", "Le texte soutient que …"], ["The main claim is that …", "L'idée principale est que …"], ["The evidence suggests that …", "Les données suggèrent que …"], ["The author acknowledges that …", "L'auteur reconnaît que …"], ["One limitation is that …", "Une limite est que …"]] }
  ],
  quiz: [
    { q: "You need the date of a study in a long article. Which strategy do you use?", q_fr: "Tu cherches la date d'une étude dans un long article. Quelle stratégie utilises-tu ?", o: ["scanning", "skimming", "close reading"], a: 0 },
    { q: "Skimming means…", q_fr: "Le skimming consiste à…", o: ["reading quickly for the general idea", "reading every word carefully", "looking for one specific figure"], a: 0 },
    { q: "In SQ3R, what do you do with the headings?", q_fr: "Dans SQ3R, que fais-tu des intertitres ?", o: ["turn them into questions", "copy them into your notes", "skip them"], a: 0 },
    { src: true, q: "What is the writer's own position, in the last sentence?", q_fr: "Quelle est la position de l'auteur, dans la dernière phrase ?", o: ["Cities should plant more trees, as one part of a wider health policy.", "Trees are a miracle cure for stress.", "Only rich people should live near trees."], a: 0 },
    { src: true, q: "“However, the evidence is not entirely straightforward.” What does “however” introduce?", q_fr: "« However, the evidence is not entirely straightforward. » Qu'introduit « however » ?", o: ["a limitation of the previous idea", "an example", "the conclusion"], a: 0 },
    { src: true, q: "Why are researchers cautious, according to the text?", q_fr: "Pourquoi les chercheurs sont-ils prudents, d'après le texte ?", o: ["most studies show a correlation, not a cause", "there are no studies at all", "trees are too expensive"], a: 0 },
    { src: true, q: "“For instance, a leafy suburb may also have better housing…” This sentence is…", q_fr: "« For instance, a leafy suburb may also have better housing… » Cette phrase est…", o: ["an example", "the main claim", "the writer's conclusion"], a: 0 },
    { src: true, q: "Which sentence gives the writer's own opinion?", q_fr: "Quelle phrase donne l'opinion de l'auteur ?", o: ["In my view, cities should plant more trees…", "Urban planners increasingly argue that…", "Several large studies have found that…"], a: 0 },
    { src: true, q: "“Nevertheless, even sceptics agree…” Nevertheless means…", q_fr: "« Nevertheless, even sceptics agree… » Nevertheless signifie…", o: ["despite that", "because of that", "for example"], a: 0 },
    { type: "match", q: "Match each signal word with its function.", q_fr: "Associe chaque mot de liaison à sa fonction.", pairs: [["however", "contrast"], ["therefore", "consequence"], ["for instance", "example"], ["moreover", "addition"], ["in other words", "reformulation"]] },
    { q: "When you meet an unknown word, the best first step is to…", q_fr: "Face à un mot inconnu, le meilleur premier réflexe est de…", o: ["guess from the context and the parts of the word", "look it up immediately", "stop reading"], a: 0 },
    { q: "Which source is usually the most reliable for academic work?", q_fr: "Quelle source est en général la plus fiable pour un travail universitaire ?", o: ["a peer-reviewed journal article", "an anonymous blog post", "a comment on social media"], a: 0 }
  ],
  task: { task: "Choose a short article in English on a subject you like (for example on The Conversation, where researchers write for the general public), or use the text above. Write 80-100 words: the main claim, two pieces of evidence, and one limitation or question you have.", task_fr: "Choisis un court article en anglais sur un sujet qui te plaît (par exemple sur The Conversation, où des chercheurs écrivent pour le grand public), ou utilise le texte ci-dessus. Écris 80 à 100 mots : l'idée principale, deux éléments de preuve, et une limite ou une question que tu te poses.", words: "80-100",
    checklist: ["I state the main claim in one sentence, in my own words.", "I give two pieces of evidence, not examples or opinions.", "I mention one limitation or one question.", "I use at least two signal words (however, therefore…)."],
    checklist_fr: ["J'énonce l'idée principale en une phrase, avec mes mots.", "Je donne deux éléments de preuve, pas des exemples ni des opinions.", "Je mentionne une limite ou une question.", "J'utilise au moins deux mots de liaison (however, therefore…)."],
    model: "The article argues that cities should treat trees as part of their public health infrastructure. Its first piece of evidence is that people who live near parks tend to report lower stress. Its second is that trees provide shade, which matters more as summers become hotter. However, the article admits that most studies show a correlation rather than a cause, since wealthier areas usually have more green space. One question I still have is how much of the benefit comes from the trees themselves rather than from quieter, cleaner neighbourhoods." },
  more: [{ name: "The Conversation", desc: "Short articles written by researchers for the general public: ideal academic reading from B2.", desc_fr: "De courts articles écrits par des chercheurs pour le grand public : la lecture universitaire idéale dès le B2.", q: "The Conversation articles" }] },

{ id: "ac-notes", level: "B2", icon: "notebook-pen", kind: "read", units: ["b2-2"],
  title: "Taking notes from lectures and texts", title_fr: "Prendre des notes en cours et en lisant",
  subtitle: "The Cornell method, symbols, a real lecture", subtitle_fr: "La méthode Cornell, les symboles, un vrai cours magistral",
  can: ["Use a note-taking system (Cornell, outline, mind map)", "Write faster with abbreviations and symbols", "Recognise the signposts lecturers use", "Turn your notes into a summary"],
  can_fr: ["Utiliser une méthode de prise de notes (Cornell, plan, carte mentale)", "Écrire plus vite grâce aux abréviations et aux symboles", "Reconnaître les annonces de plan des enseignants", "Transformer tes notes en résumé"],
  body: `<p>Taking notes isn't copying: it's <b>selecting and reorganising</b>. A well-known study (Mueller and Oppenheimer, 2014) suggested that students who type a lecture word for word process the ideas less deeply; later studies found smaller effects, but the lesson stands: don't transcribe, select. Whatever your tool, write less and think more.</p>
<h3>Three systems</h3>
<ul>
<li><b>The Cornell method</b> (Walter Pauk, Cornell University): divide the page into a wide column for notes, a narrow column for key words and questions, and a space at the bottom for a summary. After the lecture, cover the notes and answer your own questions.</li>
<li><b>Outline notes</b>: main points and sub-points, with numbers and indentation. Good for well-structured lectures.</li>
<li><b>Mind maps</b>: the topic in the centre, branches for the ideas. Good for seeing links.</li>
</ul>
<h3>Abbreviations and symbols</h3>
<p>→ leads to, causes · ↑ increase · ↓ decrease · = is, equals · ≠ is different from · ∴ therefore · ∵ because · vs versus · <i>e.g.</i> for example · <i>i.e.</i> that is · <i>cf.</i> compare · <i>c.</i> approximately · w/ with · w/o without · NB important. Invent your own for the words of your field, and use them consistently.</p>
<h3>Listening to a lecture: the signposts</h3>
<p>Lecturers announce their structure: <s-en>Today I'd like to look at three causes.</s-en> <s-en>The key point here is…</s-en> <s-en>Let's move on to…</s-en> <s-en>To put it another way…</s-en> <s-en>To sum up…</s-en> Write down what follows these phrases. Repetition, a slower pace and strong stress also signal what matters.</p>
<div class="tip">Review your notes within 24 hours, fill the gaps and write a three-line summary. It's the spaced repetition and active recall of the method page, applied to lectures. Try it now with the lecture below.</div>`,
  body_fr: `<p>Prendre des notes, ce n'est pas recopier : c'est <b>sélectionner et réorganiser</b>. Une étude célèbre (Mueller et Oppenheimer, 2014) a suggéré que les étudiants qui tapent un cours mot à mot traitent les idées moins en profondeur ; des études plus récentes ont trouvé un effet plus faible, mais la leçon reste valable : ne transcris pas, sélectionne. Quel que soit ton outil, écris moins et réfléchis plus.</p>
<h3>Trois méthodes</h3>
<ul>
<li><b>La méthode Cornell</b> (Walter Pauk, université Cornell) : divise la page en une large colonne pour les notes, une colonne étroite pour les mots-clés et les questions, et un espace en bas pour un résumé. Après le cours, cache les notes et réponds à tes propres questions.</li>
<li><b>Les notes en plan</b> : idées principales et secondaires, avec numéros et retraits. Idéal pour les cours bien structurés.</li>
<li><b>Les cartes mentales</b> : le sujet au centre, des branches pour les idées. Idéal pour voir les liens.</li>
</ul>
<h3>Abréviations et symboles</h3>
<p>→ entraîne, cause · ↑ hausse · ↓ baisse · = est, égale · ≠ est différent de · ∴ donc · ∵ parce que · vs contre · <i>e.g.</i> par exemple · <i>i.e.</i> c'est-à-dire · <i>cf.</i> comparer · <i>c.</i> environ · w/ avec · w/o sans · NB important. Invente les tiens pour les mots de ton domaine, et garde-les toujours identiques.</p>
<h3>Écouter un cours : les annonces</h3>
<p>Les enseignants annoncent leur plan : <s-en>Today I'd like to look at three causes.</s-en> <s-en>The key point here is…</s-en> <s-en>Let's move on to…</s-en> <s-en>To put it another way…</s-en> <s-en>To sum up…</s-en> Note ce qui suit ces phrases. La répétition, un débit plus lent et une forte accentuation signalent aussi ce qui compte.</p>
<div class="tip">Relis tes notes dans les 24 heures, complète les trous et écris un résumé de trois lignes. C'est la répétition espacée et le rappel actif de la page « La méthode », appliqués aux cours. Essaie tout de suite avec le cours ci-dessous.</div>`,
  lecture: { title: "Lecture: Why we forget, and how to remember", title_fr: "Cours : pourquoi on oublie, et comment retenir", paras: [
    "Good morning, everyone. Today I'd like to look at a question that matters to every student: why do we forget, and what can we do about it? I'll cover three points: first, the forgetting curve; second, the spacing effect; and third, what this means for the way you study.",
    "So, let's start with the forgetting curve. In the 1880s, the German psychologist Hermann Ebbinghaus tested his own memory by learning lists of nonsense syllables and measuring how much he remembered over time. The key point here is that forgetting was fastest at the beginning: a large part of what he had learnt was gone within the first day, and after that, the loss slowed down.",
    "Now, let's move on to the second point, the spacing effect. Ebbinghaus also noticed that he needed less effort to relearn a list if his practice was spread out over several days. Since then, hundreds of studies have confirmed this: the same amount of study time is far more effective when it is spaced out than when it is crammed into one session.",
    "Finally, what does this mean for you? To put it another way, it isn't just how long you study, but when. Reviewing new material after one day, then after a few days, then after a week or two, interrupts the forgetting curve each time, and the memory becomes more stable. It also helps to test yourself rather than simply reread your notes, because retrieving information strengthens it.",
    "To sum up: we forget quickly at first, spacing our practice slows forgetting down, and testing ourselves makes memories last. Next week, we'll look at sleep and memory. Thank you."] },
  bank: [
    { h: "Lecture signposts", h_fr: "Les annonces de plan en cours", items: [["Today I'd like to look at …", "Aujourd'hui, j'aimerais examiner …"], ["I'll cover three points.", "Je vais aborder trois points."], ["Let's start with …", "Commençons par …"], ["The key point here is …", "Le point essentiel ici, c'est …"], ["Let's move on to …", "Passons à …"], ["To put it another way, …", "Autrement dit, …"], ["Bear in mind that …", "Gardez à l'esprit que …"], ["To sum up, …", "Pour résumer, …"]] }
  ],
  quiz: [
    { from: "Lecture", q: "How many points does the lecturer announce?", q_fr: "Combien de points l'enseignant annonce-t-il ?", o: ["three", "two", "four"], a: 0 },
    { from: "Lecture", q: "What did Ebbinghaus learn in his experiments?", q_fr: "Qu'apprenait Ebbinghaus dans ses expériences ?", o: ["lists of nonsense syllables", "foreign vocabulary", "poems"], a: 0 },
    { from: "Lecture", q: "When was forgetting fastest?", q_fr: "Quand l'oubli était-il le plus rapide ?", o: ["at the beginning", "after a week", "it was the same all the time"], a: 0 },
    { from: "Lecture", q: "What is the spacing effect?", q_fr: "Qu'est-ce que l'effet d'espacement ?", o: ["practice spread over time is more effective than cramming", "studying in a quiet space", "forgetting everything after a week"], a: 0 },
    { from: "Lecture", q: "Which signpost introduces the conclusion?", q_fr: "Quelle annonce introduit la conclusion ?", o: ["To sum up", "Now, let's move on to", "The key point here is"], a: 0 },
    { from: "Lecture", q: "What will the next lecture be about?", q_fr: "Sur quoi portera le prochain cours ?", o: ["sleep and memory", "the forgetting curve", "exams"], a: 0 },
    { type: "match", q: "Match each symbol with its meaning.", q_fr: "Associe chaque symbole à son sens.", pairs: [["→", "leads to"], ["↑", "increase"], ["∴", "therefore"], ["≠", "is different from"], ["e.g.", "for example"], ["i.e.", "that is"]] },
    { q: "In the Cornell method, the narrow column is for…", q_fr: "Dans la méthode Cornell, la colonne étroite sert…", o: ["key words and questions", "the full text of the lecture", "drawings only"], a: 0 },
    { q: "The best notes are…", q_fr: "Les meilleures notes sont…", o: ["selective and reorganised", "a word-for-word copy", "as long as possible"], a: 0 },
    { q: "“To put it another way…” signals…", q_fr: "« To put it another way… » annonce…", o: ["a reformulation of the same idea", "a new topic", "the end of the lecture"], a: 0 },
    { q: "When should you review your notes?", q_fr: "Quand faut-il relire tes notes ?", o: ["within 24 hours, then again later", "only before the exam", "never: once is enough"], a: 0 },
    { type: "type", q: "Write the abbreviation for “that is” (from the Latin id est).", q_fr: "Écris l'abréviation de « that is » (du latin id est).", answer: "i.e.", accept: ["ie"] }
  ],
  task: { task: "From your notes on the lecture, write a summary of 80-100 words, without looking at the transcript.", task_fr: "À partir de tes notes sur le cours, écris un résumé de 80 à 100 mots, sans regarder la transcription.", words: "80-100",
    checklist: ["I cover the three points of the lecture.", "I use my own words, not the lecturer's sentences.", "I don't add my own opinion.", "My summary is between 80 and 100 words."],
    checklist_fr: ["Je couvre les trois points du cours.", "J'utilise mes mots, pas les phrases de l'enseignant.", "Je n'ajoute pas mon opinion.", "Mon résumé fait entre 80 et 100 mots."],
    model: "The lecture explained why we forget and how we can remember better. First, Ebbinghaus's experiments in the 1880s showed that forgetting is fastest at the beginning and then slows down. Second, he and many later researchers found that practice spread over several days is more effective than cramming the same amount of study into one session. Finally, the lecturer concluded that students should review new material at increasing intervals and test themselves instead of rereading, because spacing and retrieval make memories more stable." } },

{ id: "ac-paraphrase", level: "B2", icon: "repeat", kind: "write", units: ["b2-6"],
  title: "Paraphrasing and summarising", title_fr: "Paraphraser et résumer",
  subtitle: "Your own words, without plagiarism", subtitle_fr: "Avec tes propres mots, sans plagiat",
  can: ["Paraphrase a sentence without copying its structure", "Summarise a text in about a third of its length", "Introduce other people's ideas with reporting phrases", "Avoid plagiarism and patchwriting"],
  can_fr: ["Paraphraser une phrase sans recopier sa structure", "Résumer un texte en un tiers de sa longueur environ", "Introduire les idées des autres avec des formules de rapport", "Éviter le plagiat et le « rapiéçage »"],
  body: `<p>At university, most of what you write uses other people's ideas. You must show that you've understood them, in <b>your own words</b>, and say where they come from. Copying sentences without quotation marks is plagiarism, even if you cite the author.</p>
<h3>Paraphrasing: four techniques, combined</h3>
<ol>
<li><b>Synonyms</b>, carefully: <s-en>increase</s-en> → <s-en>rise</s-en>, <s-en>important</s-en> → <s-en>significant</s-en>. Keep technical terms (you don't paraphrase “photosynthesis”), and check that the new word fits the context.</li>
<li><b>Change the word class</b>: <s-en>Prices rose sharply.</s-en> → <s-en>There was a sharp rise in prices.</s-en></li>
<li><b>Change the structure</b>: active ↔ passive, the order of the clauses, one long sentence ↔ two short ones.</li>
<li><b>Change the starting point</b>: begin with a different element of the idea.</li>
</ol>
<p>Original: <i>“Children who read for pleasure tend to have a larger vocabulary than those who rarely read.”</i><br>Paraphrase: <i>“Reading for enjoyment appears to be linked to a wider vocabulary in young people.”</i> (+ the reference)</p>
<div class="warn"><b>Patchwriting</b>, a term coined by Rebecca Moore Howard, means changing a few words but keeping the original structure. It's still too close to the source. The safest method: read, close the text, write from memory, then check.</div>
<h3>Summarising</h3>
<p>A summary gives the <b>main ideas only</b>, in about a third of the length or less: no examples, no details, no opinion of your own. Steps: (1) read and understand; (2) find the main idea of each paragraph; (3) write without looking; (4) compare with the original to check that it's accurate.</p>
<h3>Reporting phrases</h3>
<p>Introduce the source: <s-en>According to the author,…</s-en>, <s-en>The author argues that…</s-en>, <s-en>The study found that…</s-en>. At C1, the chapter on using sources shows the nuances of these verbs.</p>`,
  body_fr: `<p>À l'université, presque tout ce que tu écris s'appuie sur les idées des autres. Tu dois montrer que tu les as comprises, avec <b>tes propres mots</b>, et dire d'où elles viennent. Recopier des phrases sans guillemets, c'est du plagiat, même si tu cites l'auteur.</p>
<h3>Paraphraser : quatre techniques, combinées</h3>
<ol>
<li><b>Les synonymes</b>, avec prudence : <s-en>increase</s-en> → <s-en>rise</s-en>, <s-en>important</s-en> → <s-en>significant</s-en>. Garde les termes techniques (on ne paraphrase pas « photosynthesis »), et vérifie que le nouveau mot convient au contexte.</li>
<li><b>Changer la nature du mot</b> : <s-en>Prices rose sharply.</s-en> → <s-en>There was a sharp rise in prices.</s-en></li>
<li><b>Changer la structure</b> : actif ↔ passif, l'ordre des propositions, une longue phrase ↔ deux courtes.</li>
<li><b>Changer le point de départ</b> : commencer par un autre élément de l'idée.</li>
</ol>
<p>Original : <i>« Children who read for pleasure tend to have a larger vocabulary than those who rarely read. »</i><br>Paraphrase : <i>« Reading for enjoyment appears to be linked to a wider vocabulary in young people. »</i> (+ la référence)</p>
<div class="warn">Le <b>patchwriting</b> (« rapiéçage »), un terme de Rebecca Moore Howard, consiste à changer quelques mots en gardant la structure d'origine. C'est encore trop proche de la source. La méthode la plus sûre : lire, fermer le texte, écrire de mémoire, puis vérifier.</div>
<h3>Résumer</h3>
<p>Un résumé ne donne que <b>les idées principales</b>, en un tiers de la longueur ou moins : pas d'exemples, pas de détails, pas d'opinion personnelle. Étapes : (1) lire et comprendre ; (2) trouver l'idée principale de chaque paragraphe ; (3) écrire sans regarder ; (4) comparer avec l'original pour vérifier l'exactitude.</p>
<h3>Les formules pour rapporter</h3>
<p>Introduis la source : <s-en>According to the author,…</s-en>, <s-en>The author argues that…</s-en>, <s-en>The study found that…</s-en>. Au C1, le chapitre sur l'usage des sources montre les nuances de ces verbes.</p>`,
  source: { title: "Why do we procrastinate?", title_fr: "Pourquoi remet-on à plus tard ?", paras: [
    "Procrastination is often described as a problem of time management, but many psychologists now see it differently. In their view, people do not delay tasks because they are lazy or disorganised, but because the task triggers unpleasant feelings, such as boredom, anxiety or self-doubt. Putting the task off brings immediate relief, which makes the behaviour more likely to happen again. This explains why simply buying a better planner rarely solves the problem.",
    "Instead, researchers suggest strategies that deal with emotions directly: breaking a task into very small steps, starting with just five minutes, and treating oneself with kindness after a failure rather than with criticism. One study found that students who forgave themselves for procrastinating before a first exam procrastinated less before the next one. The message is encouraging: procrastination is not a fixed personality trait, but a habit that can be changed."] },
  bank: [
    { h: "Reporting and summarising", h_fr: "Rapporter et résumer", items: [["According to the author, …", "D'après l'auteur, …"], ["The author argues that …", "L'auteur soutient que …"], ["The text suggests that …", "Le texte suggère que …"], ["The study found that …", "L'étude a montré que …"], ["The main point is that …", "L'idée principale est que …"], ["In short, …", "En bref, …"], ["Overall, the author concludes that …", "Dans l'ensemble, l'auteur conclut que …"]] }
  ],
  quiz: [
    { q: "Original: “Prices rose sharply in 2022.” Which is the best paraphrase?", q_fr: "Original : « Prices rose sharply in 2022. » Quelle est la meilleure paraphrase ?", o: ["There was a sharp rise in prices in 2022.", "Prices rose sharply in the year 2022.", "Prices fell sharply in 2022."], a: 0, ex: "The second copies the structure; the third changes the meaning.", ex_fr: "La deuxième recopie la structure ; la troisième change le sens." },
    { q: "Original: “Many psychologists now see procrastination as an emotional problem.” Best paraphrase?", q_fr: "Original : « Many psychologists now see procrastination as an emotional problem. » Meilleure paraphrase ?", o: ["Procrastination is increasingly viewed by psychologists as a matter of emotions.", "Many psychologists now see procrastination as an emotional issue.", "Psychologists have always agreed that procrastination is about laziness."], a: 0 },
    { q: "Original: “Putting the task off brings immediate relief.” Best paraphrase?", q_fr: "Original : « Putting the task off brings immediate relief. » Meilleure paraphrase ?", o: ["Delaying the task makes people feel better straight away.", "Putting the task off brings instant relief.", "People never feel relieved when they delay tasks."], a: 0 },
    { q: "What is patchwriting?", q_fr: "Qu'est-ce que le patchwriting ?", o: ["changing a few words but keeping the original structure", "writing in very short paragraphs", "quoting with quotation marks"], a: 0 },
    { q: "A summary should…", q_fr: "Un résumé doit…", o: ["give the main ideas only, without your opinion", "include all the examples", "be longer than the original"], a: 0 },
    { q: "When you paraphrase an idea, you…", q_fr: "Quand tu paraphrases une idée, tu…", o: ["still cite the source", "don't need to cite, because the words are yours", "must use quotation marks"], a: 0 },
    { type: "type", q: "Change the word class: “The population grew rapidly.” → “There was a rapid ___ in the population.”", q_fr: "Change la nature du mot : « The population grew rapidly. » → « There was a rapid ___ in the population. »", answer: "growth", accept: ["increase", "rise"] },
    { type: "type", q: "Make it passive: “The results surprised the researchers.” → “The researchers ___ surprised by the results.”", q_fr: "Mets au passif : « The results surprised the researchers. » → « The researchers ___ surprised by the results. »", answer: "were" },
    { src: true, q: "What is the main idea of the text?", q_fr: "Quelle est l'idée principale du texte ?", o: ["Procrastination is an emotional habit that can be changed.", "A better planner solves procrastination.", "Lazy students procrastinate more."], a: 0 },
    { src: true, q: "Which detail would you leave out of a short summary?", q_fr: "Quel détail laisserais-tu de côté dans un résumé court ?", o: ["starting with just five minutes", "procrastination is linked to unpleasant feelings", "it is a habit that can be changed"], a: 0, ex: "It's an example of a strategy: summaries keep the main ideas, not the examples.", ex_fr: "C'est un exemple de stratégie : un résumé garde les idées principales, pas les exemples." },
    { q: "The safest way to avoid copying a source is to…", q_fr: "La façon la plus sûre de ne pas recopier une source est de…", o: ["close the text, write from memory, then check", "replace every word with a synonym", "translate it into French and back"], a: 0 }
  ],
  task: { task: "Summarise the text “Why do we procrastinate?” in 60-80 words, in your own words. Start with: According to many psychologists, …", task_fr: "Résume le texte « Why do we procrastinate? » en 60 à 80 mots, avec tes propres mots. Commence par : According to many psychologists, …", words: "60-80",
    checklist: ["My summary is 60-80 words.", "I kept only the main ideas (no examples, no opinion).", "I didn't copy any sentence from the text.", "I used at least one reporting phrase."],
    checklist_fr: ["Mon résumé fait 60 à 80 mots.", "Je n'ai gardé que les idées principales (pas d'exemples, pas d'opinion).", "Je n'ai recopié aucune phrase du texte.", "J'ai utilisé au moins une formule pour rapporter."],
    model: "According to many psychologists, procrastination is caused not by laziness or poor organisation but by the negative emotions that some tasks provoke, such as boredom or anxiety. Delaying the task brings quick relief, so the habit tends to repeat itself. As a result, researchers recommend strategies that address these emotions, such as dividing work into tiny steps and reacting to failure with kindness, and they conclude that procrastination is a habit that people can change." },
  more: [{ name: "Academic Phrasebank (University of Manchester)", desc: "Thousands of model phrases for every part of academic writing, free online.", desc_fr: "Des milliers de formules modèles pour chaque partie d'un écrit universitaire, gratuites en ligne.", q: "Academic Phrasebank University of Manchester" }] },

{ id: "ac-essay", level: "B2", icon: "file-text", kind: "write", units: ["b2-5"],
  title: "The essay: question, thesis and paragraphs", title_fr: "L'essai : question, thèse et paragraphes",
  subtitle: "Introduction, PEEL paragraphs, conclusion", subtitle_fr: "Introduction, paragraphes PEEL, conclusion",
  can: ["Analyse an essay question and its instruction word", "Write an introduction with a clear thesis statement", "Build body paragraphs with the PEEL structure", "Write a conclusion that answers the question"],
  can_fr: ["Analyser un sujet d'essai et son mot-consigne", "Écrire une introduction avec une thèse claire", "Construire des paragraphes selon la structure PEEL", "Écrire une conclusion qui répond à la question"],
  body: `<p>An academic essay is an <b>answer to a question</b>, defended with arguments. Everything in it must serve that answer.</p>
<h3>1. Analyse the question</h3>
<p>Underline the <b>instruction word</b> and the <b>topic</b>. <i>Discuss</i>: present different sides, then give your view. <i>Evaluate</i>: judge strengths and weaknesses. <i>Compare / contrast</i>: similarities / differences. <i>Analyse</i>: break into parts and explain. <i>To what extent…?</i>: give a nuanced answer (completely, partly, hardly at all).</p>
<h3>2. The introduction: a funnel</h3>
<ol><li>General context (one or two sentences).</li><li>Narrow the focus: why the question matters.</li><li>The <b>thesis statement</b>: your answer, in one clear sentence.</li><li>Optionally, an outline: how the essay is organised.</li></ol>
<h3>3. Body paragraphs: PEEL</h3>
<ul><li><b>Point</b>: a topic sentence with one idea.</li><li><b>Evidence</b>: facts, data, examples, sources.</li><li><b>Explanation</b>: why the evidence supports the point.</li><li><b>Link</b>: back to the question, or on to the next paragraph.</li></ul>
<p>One paragraph = one idea. If you have two ideas, write two paragraphs.</p>
<h3>4. The conclusion</h3>
<p>Restate your thesis in new words, sum up the main points, and end with a wider implication or a recommendation. <b>No new arguments</b> in the conclusion.</p>
<h3>Common types of essay</h3>
<p>Argumentative (one position, defended), discursive (for and against, then your view), problem-solution, and compare and contrast. In the Cambridge B2 First exam, the essay is 140-190 words: you develop two ideas given in the question, plus one of your own.</p>`,
  body_fr: `<p>Un essai universitaire est une <b>réponse à une question</b>, défendue par des arguments. Tout ce qu'il contient doit servir cette réponse.</p>
<h3>1. Analyser le sujet</h3>
<p>Souligne le <b>mot-consigne</b> et le <b>thème</b>. <i>Discuss</i> : présenter les différents points de vue, puis donner le tien. <i>Evaluate</i> : juger les forces et les faiblesses. <i>Compare / contrast</i> : ressemblances / différences. <i>Analyse</i> : décomposer et expliquer. <i>To what extent…?</i> (dans quelle mesure… ?) : répondre de façon nuancée (complètement, en partie, à peine).</p>
<h3>2. L'introduction : un entonnoir</h3>
<ol><li>Le contexte général (une ou deux phrases).</li><li>Resserrer : pourquoi la question est importante.</li><li>La <b>thèse</b> : ta réponse, en une phrase claire.</li><li>Éventuellement, l'annonce du plan.</li></ol>
<h3>3. Les paragraphes : PEEL</h3>
<ul><li><b>Point</b> : une phrase-clé avec une idée.</li><li><b>Evidence</b> : faits, données, exemples, sources.</li><li><b>Explanation</b> : pourquoi ces éléments appuient l'idée.</li><li><b>Link</b> : retour à la question, ou transition vers le paragraphe suivant.</li></ul>
<p>Un paragraphe = une idée. Si tu as deux idées, écris deux paragraphes.</p>
<h3>4. La conclusion</h3>
<p>Reformule ta thèse avec d'autres mots, résume les points principaux, et termine par une ouverture ou une recommandation. <b>Pas de nouvel argument</b> dans la conclusion.</p>
<h3>Les types d'essai courants</h3>
<p>Argumentatif (une position, défendue), discursif (pour et contre, puis ton avis), problème-solution, et comparaison. À l'examen Cambridge B2 First, l'essai fait 140 à 190 mots : tu développes deux idées données dans le sujet, plus une idée à toi.</p>`,
  bank: [
    { h: "Introduction", h_fr: "Introduction", items: [["It is often argued that …", "On dit souvent que …"], ["This essay argues that …", "Cet essai soutient que …"], ["This essay will first consider …, then …", "Cet essai examinera d'abord …, puis …"]] },
    { h: "Body paragraphs", h_fr: "Paragraphes", items: [["The main advantage of … is that …", "Le principal avantage de … est que …"], ["A further point is that …", "Un autre argument est que …"], ["This shows that …", "Cela montre que …"], ["On the other hand, …", "D'un autre côté, …"]] },
    { h: "Conclusion", h_fr: "Conclusion", items: [["In conclusion, …", "En conclusion, …"], ["On balance, …", "Tout bien considéré, …"], ["It therefore seems clear that …", "Il semble donc clair que …"]] }
  ],
  quiz: [
    { q: "In “Discuss the advantages and disadvantages of online learning”, the instruction word is…", q_fr: "Dans « Discuss the advantages and disadvantages of online learning », le mot-consigne est…", o: ["discuss", "advantages", "online"], a: 0 },
    { q: "“To what extent…?” asks you to…", q_fr: "« To what extent…? » te demande de…", o: ["give a nuanced answer: completely, partly or hardly at all", "list facts without an opinion", "describe a process"], a: 0 },
    { q: "Which is the best thesis statement?", q_fr: "Quelle est la meilleure thèse ?", o: ["Although online learning offers flexibility, it cannot fully replace face-to-face teaching for most students.", "Online learning is a very interesting topic.", "In this essay, I will talk about online learning."], a: 0 },
    { type: "seq", q: "Put the sentences of this introduction in order.", q_fr: "Remets les phrases de cette introduction dans l'ordre.", items: ["Over the past decade, online courses have become a normal part of education.", "Yet many teachers wonder whether they help students learn as well as traditional classes.", "This essay argues that online learning works best as a complement to face-to-face teaching, not a replacement.", "It first considers its flexibility, then its limits for motivation and discussion."] },
    { q: "In PEEL, the second E stands for…", q_fr: "Dans PEEL, le second E signifie…", o: ["Explanation", "Example", "Ending"], a: 0 },
    { q: "A topic sentence…", q_fr: "Une phrase-clé (topic sentence)…", o: ["gives the main idea of a paragraph", "ends the essay", "quotes a source"], a: 0 },
    { q: "How many ideas should one body paragraph develop?", q_fr: "Combien d'idées un paragraphe doit-il développer ?", o: ["one", "as many as possible", "three"], a: 0 },
    { q: "What should NOT appear in a conclusion?", q_fr: "Qu'est-ce qui ne doit PAS apparaître dans une conclusion ?", o: ["a new argument", "a restatement of the thesis", "a summary of the main points"], a: 0 },
    { q: "In a discursive (for and against) essay, you…", q_fr: "Dans un essai discursif (pour et contre), tu…", o: ["present both sides, then give your view", "defend only one side", "describe a graph"], a: 0 },
    { type: "match", q: "Match each instruction word with what it asks you to do.", q_fr: "Associe chaque mot-consigne à ce qu'il demande.", pairs: [["evaluate", "judge strengths and weaknesses"], ["compare", "show similarities"], ["contrast", "show differences"], ["analyse", "break into parts and explain"], ["discuss", "consider different sides"]] },
    { q: "How long is the essay in the B2 First exam?", q_fr: "Quelle longueur fait l'essai de l'examen B2 First ?", o: ["140-190 words", "50-80 words", "400-500 words"], a: 0 }
  ],
  task: { task: "Essay (Cambridge B2 First style): “Some people say that universities should teach practical skills for work rather than academic subjects. Do you agree?” Write about: 1. jobs and employers; 2. personal development; 3. your own idea.", task_fr: "Essai (format Cambridge B2 First) : « Certains disent que les universités devraient enseigner des compétences pratiques pour le travail plutôt que des matières académiques. Es-tu d'accord ? » Parle de : 1. l'emploi et les employeurs ; 2. le développement personnel ; 3. une idée à toi.", words: "140-190",
    checklist: ["My introduction ends with a clear thesis statement.", "Each body paragraph starts with a topic sentence and develops one idea.", "I covered the two given points and added my own idea.", "My conclusion answers the question without new arguments.", "I used linking words (on the one hand, however, in conclusion…).", "My essay is 140-190 words."],
    checklist_fr: ["Mon introduction se termine par une thèse claire.", "Chaque paragraphe commence par une phrase-clé et développe une idée.", "J'ai traité les deux points donnés et ajouté une idée à moi.", "Ma conclusion répond à la question sans nouvel argument.", "J'ai utilisé des mots de liaison (on the one hand, however, in conclusion…).", "Mon essai fait 140 à 190 mots."],
    model: "Universities have traditionally focused on academic knowledge, but today many students expect their degree to lead directly to a job. Should universities therefore concentrate on practical skills? In my view, they should combine both.\n\nOn the one hand, employers often complain that graduates are not ready for the workplace. Teaching skills such as teamwork, project management or digital tools would clearly help young people find a job more quickly.\n\nOn the other hand, university is not only about employment. Studying history, philosophy or science teaches students to think critically, to question information and to express complex ideas. These abilities are useful in any job, even if they are not directly practical.\n\nFinally, the job market changes so fast that specific skills may become out of date within a few years. A solid academic education gives people the foundation to keep learning throughout their lives.\n\nIn conclusion, universities should not abandon academic subjects, but they could include more practical projects and work placements, so that students leave with both knowledge and experience." },
  more: [{ name: "UEfAP: Using English for Academic Purposes", desc: "A free reference site on academic reading, writing, listening and speaking, by the EAP teacher Andy Gillett.", desc_fr: "Un site de référence gratuit sur la lecture, l'écriture, l'écoute et l'oral universitaires, par l'enseignant Andy Gillett.", q: "UEfAP Using English for Academic Purposes" }] },

{ id: "ac-data", level: "B2", icon: "chart-line", kind: "write", units: ["b2-3"],
  title: "Describing graphs and data", title_fr: "Décrire des graphiques et des données",
  subtitle: "Trends, figures, comparisons: the IELTS Task 1 skill", subtitle_fr: "Tendances, chiffres, comparaisons : la compétence de l'IELTS Task 1",
  can: ["Describe trends with precise verbs and adverbs", "Use the right prepositions with figures", "Write an overview of the main features", "Compare data accurately"],
  can_fr: ["Décrire des tendances avec des verbes et des adverbes précis", "Utiliser les bonnes prépositions avec les chiffres", "Écrire une vue d'ensemble des points principaux", "Comparer des données avec exactitude"],
  body: `<p>Charts and tables are everywhere: in studies, reports, presentations and the TOEIC. Describing them well means <b>selecting</b> the important features, not reading out every number.</p>
<h3>The structure</h3>
<ol><li><b>Introduce</b> what the chart shows (paraphrase the title): <s-en>The table shows how people travelled to work between 2000 and 2020.</s-en></li>
<li>Give an <b>overview</b>: the two or three main trends, without numbers: <s-en>Overall, cycling became more popular, while car use declined.</s-en></li>
<li>Give the <b>details</b>: the key figures, grouped logically, with comparisons.</li></ol>
<h3>Trends</h3>
<ul><li>Up: <s-en>rise</s-en>, <s-en>increase</s-en>, <s-en>grow</s-en>, <s-en>climb</s-en>; very fast: <s-en>soar</s-en>, <s-en>surge</s-en>.</li>
<li>Down: <s-en>fall</s-en>, <s-en>decrease</s-en>, <s-en>decline</s-en>, <s-en>drop</s-en>; very fast: <s-en>plummet</s-en>, <s-en>plunge</s-en>.</li>
<li>No change: <s-en>remain stable</s-en>, <s-en>level off</s-en>; up and down: <s-en>fluctuate</s-en>; the highest or lowest point: <s-en>peak at</s-en>, <s-en>reach a low of</s-en>.</li>
<li>How much: <s-en>dramatically</s-en>, <s-en>sharply</s-en>, <s-en>significantly</s-en>, <s-en>steadily</s-en>, <s-en>gradually</s-en>, <s-en>slightly</s-en>. Or with nouns: <s-en>a sharp rise</s-en>, <s-en>a slight fall</s-en>.</li></ul>
<h3>Prepositions with figures</h3>
<p><s-en>Car use fell from 60% to 41%.</s-en> (start and end) · <s-en>It fell by 19 points.</s-en> (the difference) · <s-en>It stood at 60% in 2000.</s-en> (a value) · <s-en>It peaked at 25%.</s-en> · <s-en>a rise of 15%</s-en>.</p>
<h3>Comparing</h3>
<p><s-en>twice as many cyclists as in 2000</s-en>, <s-en>the highest proportion</s-en>, <s-en>slightly more than a quarter</s-en>, <s-en>whereas bus use remained stable</s-en>. Careful with percentages: from 10% to 15% is a rise of <b>5 percentage points</b>, or of <b>50%</b>.</p>
<div class="tip">Tenses: past simple for past data (<i>fell</i>), present simple for what the chart shows (<i>the table shows</i>), and <s-en>is expected to</s-en> or <s-en>is projected to</s-en> for forecasts. This is exactly Task 1 of the IELTS Academic writing test.</div>`,
  body_fr: `<p>Les graphiques et les tableaux sont partout : dans les études, les rapports, les présentations et le TOEIC. Bien les décrire, c'est <b>sélectionner</b> les éléments importants, pas lire chaque chiffre.</p>
<h3>La structure</h3>
<ol><li><b>Présenter</b> ce que montre le graphique (reformule le titre) : <s-en>The table shows how people travelled to work between 2000 and 2020.</s-en></li>
<li>Donner une <b>vue d'ensemble</b> : les deux ou trois grandes tendances, sans chiffres : <s-en>Overall, cycling became more popular, while car use declined.</s-en></li>
<li>Donner les <b>détails</b> : les chiffres clés, regroupés logiquement, avec des comparaisons.</li></ol>
<h3>Les tendances</h3>
<ul><li>À la hausse : <s-en>rise</s-en>, <s-en>increase</s-en>, <s-en>grow</s-en>, <s-en>climb</s-en> ; très vite : <s-en>soar</s-en>, <s-en>surge</s-en>.</li>
<li>À la baisse : <s-en>fall</s-en>, <s-en>decrease</s-en>, <s-en>decline</s-en>, <s-en>drop</s-en> ; très vite : <s-en>plummet</s-en>, <s-en>plunge</s-en>.</li>
<li>Pas de changement : <s-en>remain stable</s-en>, <s-en>level off</s-en> (se stabiliser) ; en dents de scie : <s-en>fluctuate</s-en> ; le point le plus haut ou le plus bas : <s-en>peak at</s-en>, <s-en>reach a low of</s-en>.</li>
<li>Dans quelle mesure : <s-en>dramatically</s-en>, <s-en>sharply</s-en>, <s-en>significantly</s-en>, <s-en>steadily</s-en>, <s-en>gradually</s-en>, <s-en>slightly</s-en>. Ou avec des noms : <s-en>a sharp rise</s-en>, <s-en>a slight fall</s-en>.</li></ul>
<h3>Les prépositions avec les chiffres</h3>
<p><s-en>Car use fell from 60% to 41%.</s-en> (départ et arrivée) · <s-en>It fell by 19 points.</s-en> (l'écart) · <s-en>It stood at 60% in 2000.</s-en> (une valeur) · <s-en>It peaked at 25%.</s-en> · <s-en>a rise of 15%</s-en>.</p>
<h3>Comparer</h3>
<p><s-en>twice as many cyclists as in 2000</s-en>, <s-en>the highest proportion</s-en>, <s-en>slightly more than a quarter</s-en>, <s-en>whereas bus use remained stable</s-en>. Attention aux pourcentages : passer de 10 % à 15 %, c'est une hausse de <b>5 points</b>, ou de <b>50 %</b>.</p>
<div class="tip">Les temps : prétérit pour les données passées (<i>fell</i>), présent pour ce que montre le graphique (<i>the table shows</i>), et <s-en>is expected to</s-en> ou <s-en>is projected to</s-en> pour les prévisions. C'est exactement la Task 1 de l'épreuve écrite de l'IELTS Academic.</div>`,
  data: { title: "How people travelled to work in Greenford, 2000-2020 (% of workers)", note: "Fictional data, for practice.", note_fr: "Données fictives, pour l'entraînement.", head: ["Mode of transport", "2000", "2010", "2020"], rows: [["Car", "60", "52", "41"], ["Bus", "18", "18", "17"], ["Bicycle", "6", "11", "24"], ["Walking", "12", "13", "14"], ["Other", "4", "6", "4"]] },
  bank: [
    { h: "Introducing and summarising", h_fr: "Présenter et résumer", items: [["The table shows …", "Le tableau montre …"], ["The graph illustrates …", "Le graphique illustre …"], ["Overall, …", "Dans l'ensemble, …"]] },
    { h: "Trends and figures", h_fr: "Tendances et chiffres", items: [["… rose sharply from … to …", "… a fortement augmenté de … à …"], ["… remained stable at around …", "… est resté stable autour de …"], ["… reached a peak of …", "… a atteint un pic de …"], ["… accounted for …", "… représentait …"]] },
    { h: "Comparing", h_fr: "Comparer", items: [["twice as many … as …", "deux fois plus de … que …"], ["… whereas …", "… alors que …"], ["the highest proportion of …", "la plus grande proportion de …"]] }
  ],
  quiz: [
    { type: "type", q: "Complete: “Car use fell from 60% ___ 41%.”", q_fr: "Complète : « Car use fell from 60% ___ 41%. »", answer: "to" },
    { type: "type", q: "Complete: “Car use fell ___ 19 percentage points.”", q_fr: "Complète : « Car use fell ___ 19 percentage points. »", answer: "by" },
    { q: "Which verb means “to fall very fast”?", q_fr: "Quel verbe signifie « chuter très vite » ?", o: ["plummet", "level off", "fluctuate"], a: 0 },
    { q: "Which sentence is a good overview?", q_fr: "Quelle phrase est une bonne vue d'ensemble ?", o: ["Overall, cycling became much more popular, while car use declined.", "In 2010, 11% of workers cycled.", "The table has four columns."], a: 0 },
    { src: true, q: "Cycling rose from 6% to 24%. That's…", q_fr: "Le vélo est passé de 6 % à 24 %. C'est…", o: ["four times as many cyclists", "twice as many cyclists", "a rise of 6 points"], a: 0 },
    { src: true, q: "Bus use went from 18% to 17%. It…", q_fr: "Le bus est passé de 18 % à 17 %. Il…", o: ["remained almost stable", "plummeted", "soared"], a: 0 },
    { q: "From 10% to 15% is a rise of…", q_fr: "Passer de 10 % à 15 %, c'est une hausse de…", o: ["5 percentage points, or 50%", "5%", "15 points"], a: 0 },
    { type: "match", q: "Match each word with its meaning.", q_fr: "Associe chaque mot à son sens.", pairs: [["soar", "rise very fast"], ["level off", "stop changing"], ["fluctuate", "go up and down"], ["peak", "reach the highest point"], ["decline", "go down"]] },
    { q: "For a forecast: “Car use ___ fall further by 2030.”", q_fr: "Pour une prévision : « Car use ___ fall further by 2030. »", o: ["is expected to", "fell", "has fallen"], a: 0 },
    { type: "type", q: "Use a noun: “Prices rose slightly.” → “There was a slight ___ in prices.”", q_fr: "Utilise un nom : « Prices rose slightly. » → « There was a slight ___ in prices. »", answer: "rise", accept: ["increase"] },
    { q: "Which is correct?", q_fr: "Laquelle est correcte ?", o: ["The proportion of cyclists stood at 6% in 2000.", "The proportion of cyclists stood on 6% in 2000.", "The proportion of cyclists stood by 6% in 2000."], a: 0 }
  ],
  task: { task: "Describe the table in 120-150 words: an introduction, an overview, then the key details with comparisons.", task_fr: "Décris le tableau en 120 à 150 mots : une introduction, une vue d'ensemble, puis les détails clés avec des comparaisons.", words: "120-150",
    checklist: ["My first sentence paraphrases the title.", "I wrote an overview of the main trends, without numbers.", "I selected the key figures instead of listing them all.", "I used precise verbs, adverbs and prepositions (fell by, rose from… to…).", "I made at least two comparisons."],
    checklist_fr: ["Ma première phrase reformule le titre.", "J'ai écrit une vue d'ensemble des grandes tendances, sans chiffres.", "J'ai choisi les chiffres clés au lieu de tous les lister.", "J'ai utilisé des verbes, adverbes et prépositions précis (fell by, rose from… to…).", "J'ai fait au moins deux comparaisons."],
    model: "The table shows how workers in the town of Greenford travelled to work in 2000, 2010 and 2020.\n\nOverall, cycling became far more popular over the period, while the car, although still the most common means of transport, lost a large share of its users.\n\nIn 2000, 60% of workers drove to work, but this figure fell steadily to 52% in 2010 and then to 41% in 2020, a drop of 19 percentage points. By contrast, the proportion of cyclists rose from just 6% to 11% and then to 24%, which means that four times as many people cycled to work at the end of the period as at the beginning.\n\nThe other modes changed much less. Bus use remained almost stable at around 17-18%, walking increased slightly from 12% to 14%, and other forms of transport accounted for between 4% and 6%." } },

{ id: "ac-present", level: "B2", icon: "presentation", kind: "speak", units: ["b2-4"],
  title: "Academic presentations", title_fr: "Les présentations universitaires",
  subtitle: "Structure, signposting, slides and questions", subtitle_fr: "Structure, annonces de plan, diapositives et questions",
  can: ["Structure a presentation with a clear introduction and conclusion", "Guide your audience with signposting", "Refer to your slides and visuals", "Handle questions politely, even difficult ones"],
  can_fr: ["Structurer une présentation avec une introduction et une conclusion claires", "Guider ton public grâce aux annonces de plan", "Faire référence à tes diapositives et visuels", "Gérer les questions avec politesse, même les plus difficiles"],
  body: `<h3>Structure: tell them three times</h3>
<p>The classic advice: tell the audience what you're going to say, say it, then tell them what you've said. Listeners can't go back a page, so a clear structure matters even more than in writing.</p>
<ul><li><b>Introduction</b>: greet and introduce yourself; state the topic and <b>why it matters</b>; give the outline.</li>
<li><b>Body</b>: two to four main points, each announced and closed with signposts.</li>
<li><b>Conclusion</b>: summarise, give one take-home message, thank the audience and invite questions.</li></ul>
<h3>Slides</h3>
<p>One idea per slide, a few key words rather than sentences, large images and simple charts. Don't read your slides: they support you, they aren't your script. Refer to them explicitly: <s-en>As you can see on this chart, …</s-en>, <s-en>This slide shows …</s-en>, <s-en>I'd like to draw your attention to …</s-en></p>
<h3>Questions</h3>
<ul><li>Listen to the end, thank the person, and rephrase the question if needed: <s-en>If I understand correctly, you're asking whether …</s-en></li>
<li>Buy time: <s-en>That's a good question. Let me think about that for a second.</s-en></li>
<li>If you don't know, say so honestly: <s-en>I'm afraid I don't have the figures with me, but I can send them to you.</s-en></li>
<li>If it's off-topic: <s-en>That's slightly beyond the scope of this talk, but I'd be happy to discuss it afterwards.</s-en></li></ul>
<div class="tip">Your voice matters as much as your words: pauses, pace and emphasis are covered in the pronunciation chapter <a href="#/prononciation/p-speech">Speaking to an audience</a>. Rehearse out loud at least three times, and time yourself.</div>`,
  body_fr: `<h3>La structure : le dire trois fois</h3>
<p>Le conseil classique : dis au public ce que tu vas dire, dis-le, puis dis-lui ce que tu as dit. À l'oral, on ne peut pas revenir une page en arrière : une structure claire compte encore plus qu'à l'écrit.</p>
<ul><li><b>Introduction</b> : salue et présente-toi ; annonce le sujet et <b>pourquoi il est important</b> ; donne le plan.</li>
<li><b>Développement</b> : deux à quatre points principaux, chacun annoncé et conclu par des transitions.</li>
<li><b>Conclusion</b> : résume, donne un message à retenir, remercie le public et invite les questions.</li></ul>
<h3>Les diapositives</h3>
<p>Une idée par diapositive, quelques mots-clés plutôt que des phrases, de grandes images et des graphiques simples. Ne lis pas tes diapositives : elles t'accompagnent, ce ne sont pas ton texte. Fais-y référence clairement : <s-en>As you can see on this chart, …</s-en>, <s-en>This slide shows …</s-en>, <s-en>I'd like to draw your attention to …</s-en></p>
<h3>Les questions</h3>
<ul><li>Écoute jusqu'au bout, remercie la personne, et reformule la question si besoin : <s-en>If I understand correctly, you're asking whether …</s-en></li>
<li>Gagner du temps : <s-en>That's a good question. Let me think about that for a second.</s-en></li>
<li>Si tu ne sais pas, dis-le honnêtement : <s-en>I'm afraid I don't have the figures with me, but I can send them to you.</s-en></li>
<li>Si c'est hors sujet : <s-en>That's slightly beyond the scope of this talk, but I'd be happy to discuss it afterwards.</s-en></li></ul>
<div class="tip">Ta voix compte autant que tes mots : pauses, débit et insistance sont traités dans le chapitre de prononciation <a href="#/prononciation/p-speech">Parler devant un public</a>. Répète à voix haute au moins trois fois, en te chronométrant.</div>`,
  bank: [
    { h: "Opening", h_fr: "Ouverture", items: [["Good morning, everyone, and thank you for coming.", "Bonjour à tous, et merci d'être venus."], ["Today I'd like to talk about …", "Aujourd'hui, j'aimerais vous parler de …"], ["This matters because …", "C'est important parce que …"], ["I'll look at three things: …", "Je vais aborder trois points : …"]] },
    { h: "Signposting", h_fr: "Transitions", items: [["Let's move on to …", "Passons à …"], ["As you can see on this chart, …", "Comme vous le voyez sur ce graphique, …"], ["Going back to my first point, …", "Pour revenir à mon premier point, …"], ["To sum up, …", "Pour résumer, …"]] },
    { h: "Questions", h_fr: "Questions", items: [["That's a good question.", "C'est une bonne question."], ["If I understand correctly, you're asking whether …", "Si je comprends bien, vous demandez si …"], ["I'm afraid I don't know, but I can find out.", "Je crains de ne pas savoir, mais je peux me renseigner."], ["Could I come back to that at the end?", "Puis-je y revenir à la fin ?"]] }
  ],
  quiz: [
    { type: "seq", q: "Put the parts of this opening in order.", q_fr: "Remets les parties de cette ouverture dans l'ordre.", items: ["Good morning, everyone, and thank you for coming.", "My name is Stella, and I'm a designer.", "Today I'd like to talk about why simple websites often work better.", "This matters because many visitors decide very quickly whether to stay on a page.", "I'll look at three things: speed, clarity and trust."] },
    { q: "What should a good introduction include?", q_fr: "Que doit contenir une bonne introduction ?", o: ["the topic, why it matters and the outline", "all your data", "a long joke"], a: 0 },
    { q: "Slides should contain…", q_fr: "Les diapositives doivent contenir…", o: ["a few key words and clear visuals", "your full script", "as much text as possible"], a: 0 },
    { q: "Someone asks a question you can't answer. Best response?", q_fr: "On te pose une question à laquelle tu ne sais pas répondre. Meilleure réponse ?", o: ["I'm afraid I don't know, but I can find out and get back to you.", "That's not important.", "Next question, please."], a: 0 },
    { q: "“If I understand correctly, you're asking whether…” is used to…", q_fr: "« If I understand correctly, you're asking whether… » sert à…", o: ["check that you've understood the question", "end the presentation", "change the topic"], a: 0 },
    { type: "match", q: "Match each signpost with its function.", q_fr: "Associe chaque transition à sa fonction.", pairs: [["Let's move on to…", "changing to the next point"], ["As you can see on this chart…", "referring to a visual"], ["To sum up…", "concluding"], ["Going back to my first point…", "returning to an earlier idea"], ["For example…", "illustrating"]] },
    { q: "A take-home message is…", q_fr: "Un message à retenir (take-home message), c'est…", o: ["the one idea you want the audience to remember", "a printed handout", "the title of the talk"], a: 0 },
    { q: "How should you use your slides?", q_fr: "Comment utiliser tes diapositives ?", o: ["refer to them, but don't read them aloud", "read every slide word for word", "turn your back to the audience to read them"], a: 0 },
    { q: "“That's slightly beyond the scope of this talk” is a polite way to…", q_fr: "« That's slightly beyond the scope of this talk » est une façon polie de…", o: ["say a question is off-topic", "admit a mistake", "ask for help"], a: 0 },
    { q: "The classic advice on structure is…", q_fr: "Le conseil classique sur la structure, c'est…", o: ["tell them what you'll say, say it, tell them what you've said", "start with your conclusion only", "never repeat anything"], a: 0 }
  ],
  task: { speak: true, task: "Prepare a 3-minute presentation on a topic you know well (a design principle, a city you love, a book…). Write your script or a detailed outline (150-200 words) with signposting, then record yourself presenting it.", task_fr: "Prépare une présentation de 3 minutes sur un sujet que tu connais bien (un principe de design, une ville que tu aimes, un livre…). Écris ton texte ou un plan détaillé (150 à 200 mots) avec des transitions, puis enregistre-toi en le présentant.", words: "150-200",
    checklist: ["My introduction gives the topic, why it matters and an outline.", "I announce each point with a signpost.", "My conclusion summarises and gives one take-home message.", "I invite questions at the end.", "I recorded myself and listened to it at least once."],
    checklist_fr: ["Mon introduction donne le sujet, son intérêt et le plan.", "J'annonce chaque point par une transition.", "Ma conclusion résume et donne un message à retenir.", "J'invite les questions à la fin.", "Je me suis enregistrée et réécoutée au moins une fois."],
    model: "Good morning, everyone. Today I'd like to talk about a simple idea that changes the way you look at any page: white space. I'll cover three points: what white space is, why it matters, and how to use it.\n\nFirst of all, what is white space? It's simply the empty space between the elements of a page: the margins, the gaps between paragraphs, the space around an image. It doesn't have to be white; it just has to be empty.\n\nNow, why does it matter? Empty space gives the eye a rest. It helps readers see what is important, and it makes a page feel calm and professional rather than crowded.\n\nLet's move on to the last point: how to use it. My advice is to start with more space than you think you need, to group related elements together, and to remove anything that doesn't serve the message.\n\nTo sum up, white space isn't wasted space: it's what makes the content readable. Thank you for listening. I'd be happy to answer any questions." } },

{ id: "ac-seminar", level: "B2", icon: "messages-square", kind: "speak", units: ["b2-6"],
  title: "Seminars and group discussions", title_fr: "Séminaires et discussions de groupe",
  subtitle: "Take part, agree, disagree, build on ideas", subtitle_fr: "Participer, approuver, contester, rebondir",
  can: ["Prepare contributions for a seminar", "Agree and disagree politely and with nuance", "Build on other people's ideas and bring others in", "Ask for clarification and interrupt politely"],
  can_fr: ["Préparer tes interventions pour un séminaire", "Approuver et contester avec politesse et nuance", "Rebondir sur les idées des autres et faire participer", "Demander des précisions et interrompre poliment"],
  body: `<p>In English-speaking universities, much of the learning happens in <b>seminars</b>: small groups discussing a reading with a tutor. You're expected to take part, and your contribution may even be assessed. Staying silent is often interpreted as not having prepared.</p>
<h3>Before: prepare two or three contributions</h3>
<p>Read the text, then note one point you agree with, one you find questionable, and one question. Prepared contributions make it much easier to speak spontaneously.</p>
<h3>During: the language of discussion</h3>
<ul>
<li>Giving your view: <s-en>It seems to me that…</s-en>, <s-en>I'd argue that…</s-en></li>
<li>Agreeing and building: <s-en>I'd go along with that, and I'd add that…</s-en>, <s-en>Building on what Sam said, …</s-en></li>
<li>Disagreeing politely: <s-en>I see your point, but I'm not sure I agree.</s-en>, <s-en>That's true to some extent, but…</s-en></li>
<li>Asking for clarification: <s-en>Sorry, could you say a bit more about what you mean by…?</s-en></li>
<li>Interrupting politely: <s-en>Sorry to interrupt, but…</s-en>, <s-en>Could I just come in here?</s-en></li>
<li>Bringing others in: <s-en>What do you think, Anna?</s-en>, <s-en>We haven't heard from Tom yet.</s-en></li>
<li>Keeping on track: <s-en>Going back to the question, …</s-en></li>
</ul>
<div class="warn">Direct disagreement (<i>“You're wrong.”</i>, <i>“No, that's not true.”</i>) often sounds ruder in English than in a French debate. Soften it: acknowledge the other view first, then disagree with the <b>idea</b>, not the person.</div>
<div class="tip">Practise out loud: the role-play <a href="#/dialogue/seminar">seminar discussion</a>, or a seminar simulation with Claude on the page <a href="#/conversation">Talk with someone</a>.</div>`,
  body_fr: `<p>Dans les universités anglophones, une grande partie de l'apprentissage se fait en <b>séminaire</b> : de petits groupes qui discutent d'une lecture avec un enseignant. On attend de toi que tu participes, et ta participation peut même être notée. Rester silencieuse est souvent interprété comme un manque de préparation.</p>
<h3>Avant : prépare deux ou trois interventions</h3>
<p>Lis le texte, puis note un point avec lequel tu es d'accord, un point qui te semble discutable, et une question. Avec des interventions préparées, il est bien plus facile de parler spontanément.</p>
<h3>Pendant : la langue de la discussion</h3>
<ul>
<li>Donner ton avis : <s-en>It seems to me that…</s-en>, <s-en>I'd argue that…</s-en></li>
<li>Approuver et compléter : <s-en>I'd go along with that, and I'd add that…</s-en>, <s-en>Building on what Sam said, …</s-en></li>
<li>Contester poliment : <s-en>I see your point, but I'm not sure I agree.</s-en>, <s-en>That's true to some extent, but…</s-en></li>
<li>Demander des précisions : <s-en>Sorry, could you say a bit more about what you mean by…?</s-en></li>
<li>Interrompre poliment : <s-en>Sorry to interrupt, but…</s-en>, <s-en>Could I just come in here?</s-en></li>
<li>Faire participer : <s-en>What do you think, Anna?</s-en>, <s-en>We haven't heard from Tom yet.</s-en></li>
<li>Recentrer : <s-en>Going back to the question, …</s-en></li>
</ul>
<div class="warn">Un désaccord direct (<i>« You're wrong. »</i>, <i>« No, that's not true. »</i>) sonne souvent plus brutal en anglais que dans un débat à la française. Adoucis-le : reconnais d'abord l'autre point de vue, puis conteste l'<b>idée</b>, pas la personne.</div>
<div class="tip">Entraîne-toi à voix haute : le jeu de rôle <a href="#/dialogue/seminar">discussion de séminaire</a>, ou une simulation de séminaire avec Claude sur la page <a href="#/conversation">Parler avec quelqu'un</a>.</div>`,
  bank: [
    { h: "Opinions and agreement", h_fr: "Avis et accord", items: [["It seems to me that …", "Il me semble que …"], ["I'd argue that …", "Je dirais que …"], ["I'd go along with that.", "Je suis assez d'accord avec ça."], ["Building on what you said, …", "Pour rebondir sur ce que tu as dit, …"]] },
    { h: "Disagreeing and clarifying", h_fr: "Contester et clarifier", items: [["I see your point, but …", "Je comprends ton point de vue, mais …"], ["That's true to some extent, but …", "C'est vrai dans une certaine mesure, mais …"], ["Could you say a bit more about …?", "Pourrais-tu en dire un peu plus sur … ?"], ["Sorry to interrupt, but …", "Désolée de t'interrompre, mais …"], ["What do you think?", "Qu'en penses-tu ?"]] }
  ],
  quiz: [
    { q: "Which is the most appropriate way to disagree in a seminar?", q_fr: "Quelle est la façon la plus appropriée de contester en séminaire ?", o: ["I see your point, but I'm not sure that's always the case.", "You're wrong.", "That's a stupid idea."], a: 0 },
    { q: "“Could I just come in here?” is used to…", q_fr: "« Could I just come in here? » sert à…", o: ["interrupt politely", "leave the room", "end the discussion"], a: 0 },
    { q: "“Building on what Sam said, …” shows that you…", q_fr: "« Building on what Sam said, … » montre que tu…", o: ["are developing someone else's idea", "disagree strongly", "didn't listen"], a: 0 },
    { q: "Before a seminar, the best preparation is to…", q_fr: "Avant un séminaire, la meilleure préparation est de…", o: ["note two or three points and a question about the reading", "learn the whole text by heart", "prepare nothing, to be spontaneous"], a: 0 },
    { q: "To bring a quiet student into the discussion, you can say…", q_fr: "Pour faire participer une étudiante silencieuse, tu peux dire…", o: ["What do you think, Anna?", "Anna, you never speak.", "Let's ignore Anna."], a: 0 },
    { type: "match", q: "Match each phrase with its function.", q_fr: "Associe chaque phrase à sa fonction.", pairs: [["Could you say a bit more about…?", "asking for clarification"], ["I'd go along with that.", "agreeing"], ["That's true to some extent, but…", "partly disagreeing"], ["Going back to the question, …", "keeping on track"], ["Sorry to interrupt, but…", "interrupting"]] },
    { q: "Staying silent in a seminar is often interpreted as…", q_fr: "Rester silencieuse en séminaire est souvent interprété comme…", o: ["not having prepared", "being very polite", "being an expert"], a: 0 },
    { q: "When you disagree, you criticise…", q_fr: "Quand tu contestes, tu critiques…", o: ["the idea, not the person", "the person, not the idea", "nobody: never disagree"], a: 0 },
    { q: "“That's true to some extent” means…", q_fr: "« That's true to some extent » signifie…", o: ["partly true", "completely true", "not true at all"], a: 0 },
    { q: "Which phrase gives a tentative opinion?", q_fr: "Quelle phrase donne un avis prudent ?", o: ["It seems to me that…", "Obviously,…", "Everybody knows that…"], a: 0 }
  ],
  task: { speak: true, task: "Seminar question: “Should all university courses include a compulsory work placement?” Prepare three contributions (120-150 words in total): your view with a reason, a polite disagreement with an opposing argument, and a question for the group. Then say them out loud, or practise them with Claude.", task_fr: "Question de séminaire : « Tous les cursus universitaires devraient-ils inclure un stage obligatoire ? » Prépare trois interventions (120 à 150 mots en tout) : ton avis avec une raison, un désaccord poli avec un argument opposé, et une question pour le groupe. Puis dis-les à voix haute, ou entraîne-toi avec Claude.", words: "120-150",
    checklist: ["My view includes a reason.", "My disagreement acknowledges the other side first.", "I used at least three phrases from the language bank.", "My question opens the discussion to others."],
    checklist_fr: ["Mon avis contient une raison.", "Mon désaccord reconnaît d'abord l'autre point de vue.", "J'ai utilisé au moins trois phrases de la banque de phrases.", "Ma question ouvre la discussion aux autres."],
    model: "1. My view: It seems to me that a short work placement would benefit most students, because it shows them how their subject is used in real life and makes it easier to find a first job.\n\n2. A polite disagreement: I see the point that placements prepare students for work, but I'm not sure they should be compulsory for everyone. In subjects like philosophy or mathematics, a placement might take time away from deep study, and good placements aren't available in every field.\n\n3. A question for the group: What do you think would be fairer: a compulsory placement, or a choice between a placement and an extended research project?" } }
];
