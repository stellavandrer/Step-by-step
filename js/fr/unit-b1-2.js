/* Cours de français, unité B1-2 « Telling stories / Raconter » : le plus-que-parfait, les trois temps du récit
   (imparfait, passé composé, plus-que-parfait) et les marqueurs de temps, raconter une anecdote et réagir.
   Personnages fictifs, prénoms français. Faits vérifiables seulement : les trains de nuit pour les Alpes partent de
   la gare d'Austerlitz, à Paris ; la Défense est le quartier d'affaires à l'ouest de Paris. Note : dans
   « se rendre compte », le participe ne s'accorde pas (elle s'est rendu compte) : tournure neutre utilisée dans
   les modèles. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "recitFR", icon: "history", title: "Telling a story", title_fr: "Raconter une histoire", level: "B1", words: [
    ["se passer", "to happen, to take place", "Qu'est-ce qui s'est passé ?"],
    ["se rendre compte", "to realise", "Elle s'est rendu compte qu'elle avait oublié ses clés."],
    ["brusquement", "abruptly, suddenly", "La voiture s'est arrêtée brusquement."],
    ["pendant ce temps", "meanwhile", "Pendant ce temps, les enfants dormaient."],
    ["ce jour-là", "that day", "Ce jour-là, il pleuvait."],
    ["la veille", "the day before, the night before", "La veille, j'avais très mal dormi."],
    ["le lendemain", "the next day", "Le lendemain, tout allait mieux."],
    ["à ce moment-là", "at that moment, just then", "À ce moment-là, le téléphone a sonné."],
    ["au bout d'un moment", "after a while", "Au bout d'un moment, il est revenu."],
    ["au début", "at first, at the beginning", "Au début, personne ne me croyait."],
    ["finalement", "in the end, eventually", "Finalement, tout s'est bien terminé."],
    ["quelques jours plus tard", "a few days later", "Quelques jours plus tard, il a reçu une lettre."],
    ["heureusement", "fortunately, luckily", "Heureusement, j'avais mon téléphone."],
    ["malheureusement", "unfortunately", "Malheureusement, le magasin était fermé."],
    ["l'anecdote", "the anecdote, the funny story", "Il raconte toujours la même anecdote."],
    ["se tromper de", "to get the wrong (train, day…)", "Il s'est trompé de train."],
    ["tomber en panne", "to break down", "La voiture est tombée en panne sur l'autoroute."],
    ["avoir de la chance", "to be lucky", "On a eu de la chance : il restait une place."]
  ] },
  { id: "emotionsFR", icon: "smile", title: "Feelings", title_fr: "Les sentiments", level: "B1", words: [
    ["surpris / surprise", "surprised (m) / surprised (f)", "Elle était très surprise de me voir."],
    ["déçu / déçue", "disappointed (m) / disappointed (f)", "Il était déçu du résultat."],
    ["inquiet / inquiète", "worried (m) / worried (f)", "Sa mère était inquiète."],
    ["soulagé / soulagée", "relieved (m) / relieved (f)", "Nous étions tous soulagés."],
    ["gêné / gênée", "embarrassed (m) / embarrassed (f)", "Elle était un peu gênée."],
    ["fier / fière", "proud (m) / proud (f)", "Ses parents sont très fiers de lui."],
    ["avoir honte", "to be ashamed", "Il a eu honte de son erreur."],
    ["en colère", "angry", "Le client était en colère."],
    ["ému / émue", "moved, touched (m) / moved, touched (f)", "Elle était très émue par sa lettre."],
    ["jaloux / jalouse", "jealous (m) / jealous (f)", "Il est un peu jaloux de sa sœur."],
    ["ravi / ravie", "delighted (m) / delighted (f)", "Elle est ravie de son nouveau travail."],
    ["effrayé / effrayée", "frightened (m) / frightened (f)", "Le chat était effrayé par l'orage."],
    ["furieux / furieuse", "furious (m) / furious (f)", "Le voisin était furieux."],
    ["triste", "sad", "Ce film est vraiment triste."],
    ["énervé / énervée", "annoyed, irritated (m) / annoyed, irritated (f)", "Il est énervé quand il a faim."],
    ["stressé / stressée", "stressed (m) / stressed (f)", "Avant un examen, elle est toujours stressée."],
    ["avoir le trac", "to have stage fright, to be nervous", "Il avait le trac avant de monter sur scène."],
    ["étonné / étonnée", "amazed, astonished (m) / amazed, astonished (f)", "Tout le monde était étonné."]
  ] });

  W.LESSONS.push(
  {
    id: 48, level: "B1", icon: "rewind",
    title: "J'avais oublié: the plus-que-parfait", title_fr: "J'avais oublié : le plus-que-parfait",
    subtitle: "The past before the past, and the tense English often skips.", subtitle_fr: "Le passé avant le passé, et le temps que l'anglais oublie souvent.",
    body: `
<h2>Forming it</h2>
<p>The imparfait of <s-fr>avoir</s-fr> or <s-fr>être</s-fr> + the past participle. The choice of auxiliary and the agreement work exactly as in the passé composé.</p>
<table>
<tr><th>with avoir</th><th>with être</th></tr>
<tr><td><s-fr>j'avais fini</s-fr></td><td><s-fr>j'étais parti / partie</s-fr></td></tr>
<tr><td><s-fr>tu avais fini</s-fr></td><td><s-fr>tu étais parti / partie</s-fr></td></tr>
<tr><td><s-fr>il / elle / on avait fini</s-fr></td><td><s-fr>il était parti, elle était partie</s-fr></td></tr>
<tr><td><s-fr>nous avions fini</s-fr></td><td><s-fr>nous étions partis / parties</s-fr></td></tr>
<tr><td><s-fr>vous aviez fini</s-fr></td><td><s-fr>vous étiez partis / parties</s-fr></td></tr>
<tr><td><s-fr>ils / elles avaient fini</s-fr></td><td><s-fr>ils étaient partis, elles étaient parties</s-fr></td></tr>
</table>
<h2>When to use it</h2>
<p>For an action that happened before another past action: <s-fr>Quand Léa est arrivée à la gare, le train était déjà parti.</s-fr> (The train had already left.) Compare: <s-fr>Quand Léa est arrivée, le train est parti.</s-fr> (She arrived, then the train left.)</p>
<p>To explain a past situation: <s-fr>Il était fatigué parce qu'il avait mal dormi.</s-fr> And in a regret: <s-fr>Si seulement j'avais su !</s-fr> (If only I'd known!)</p>
<h2>Words that often come with it</h2>
<p><s-fr>déjà</s-fr> (already), <s-fr>pas encore</s-fr> (not yet), <s-fr>la veille</s-fr> (the day before), <s-fr>avant</s-fr>, <s-fr>jamais</s-fr>: <s-fr>Je n'avais jamais vu la mer.</s-fr> (I had never seen the sea.)</p>
<div class="tip">English often uses the simple past where French needs the plus-que-parfait: "I realised I forgot my keys" is <s-fr>Je me suis rendu compte que j'avais oublié mes clés.</s-fr> If the action came first, go one step further back.</div>
`,
    examples: [
      ["Quand Léa est arrivée, le film avait déjà commencé.", "When Léa arrived, the film had already started."],
      ["Il était fatigué parce qu'il avait mal dormi.", "He was tired because he'd slept badly."],
      ["Je me suis rendu compte que j'avais oublié mes clés.", "I realised I'd forgotten my keys."],
      ["Ils étaient partis avant la fin du concert.", "They had left before the end of the concert."],
      ["Elle n'avait jamais pris l'avion.", "She had never flown before."],
      ["La veille, nous avions préparé toutes nos valises.", "The day before, we'd packed all our cases."],
      ["Il m'a dit qu'il avait trouvé un nouveau travail.", "He told me he'd found a new job."],
      ["Si seulement j'avais su !", "If only I'd known!"]
    ],
    quiz: [
      { q: "“When we arrived, the train had already left”:", o: ["… le train est déjà parti.", "… le train était déjà parti.", "… le train avait déjà parti."], a: 1, ex: "partir takes être: était parti." },
      { q: "“She was tired because she'd worked all night”:", o: ["… parce qu'elle avait travaillé toute la nuit.", "… parce qu'elle travaillait toute la nuit.", "… parce qu'elle était travaillé toute la nuit."], a: 0, ex: "The earlier action: avait travaillé." },
      { q: "“I had never seen the sea” is:", o: ["Je n'ai jamais vu la mer.", "Je n'avais jamais vu la mer.", "Je ne voyais jamais la mer."], a: 1, ex: "Before a past moment: the plus-que-parfait." },
      { q: "The plus-que-parfait is formed with:", o: ["the present of avoir / être + participle", "the imparfait of avoir / être + participle", "the future of avoir / être + participle"], a: 1, ex: "j'avais fini, j'étais parti." },
      { q: "“I realised I'd lost my phone” is:", o: ["Je me suis rendu compte que j'avais perdu mon téléphone.", "Je me suis rendu compte que je perdais mon téléphone.", "J'ai rendu compte que j'avais perdu mon téléphone."], a: 0, ex: "se rendre compte + the plus-que-parfait for the earlier action." }
    ]
  },
  {
    id: 49, level: "B1", icon: "book-open",
    title: "Telling a story: three tenses and time words", title_fr: "Raconter : trois temps et les mots du temps",
    subtitle: "The scene, the events, what had happened before, and the words that hold a story together.", subtitle_fr: "Le décor, les événements, ce qui s'était passé avant, et les mots qui tiennent une histoire.",
    body: `
<h2>Three tenses, three jobs</h2>
<table>
<tr><th>Tense</th><th>Job</th><th>Example</th></tr>
<tr><td>imparfait</td><td>the scene: weather, people, what was going on</td><td><s-fr>Il faisait nuit et je rentrais chez moi.</s-fr></td></tr>
<tr><td>passé composé</td><td>the events, one after the other</td><td><s-fr>Tout à coup, j'ai entendu un bruit.</s-fr></td></tr>
<tr><td>plus-que-parfait</td><td>what had happened before</td><td><s-fr>J'avais laissé la fenêtre ouverte.</s-fr></td></tr>
</table>
<p>Ask yourself: is it the background (imparfait), does the story move forward (passé composé), or do we go back in time (plus-que-parfait)?</p>
<h2>Time words</h2>
<p>To start: <s-fr>Un jour,</s-fr> · <s-fr>Il y a deux ans,</s-fr> · <s-fr>Ce jour-là,</s-fr></p>
<p>Before and after: <s-fr>la veille</s-fr> (the day before) · <s-fr>le lendemain</s-fr> (the next day) · <s-fr>deux jours plus tard</s-fr> · <s-fr>quelques minutes avant</s-fr></p>
<p>A sudden event: <s-fr>soudain</s-fr>, <s-fr>tout à coup</s-fr>, <s-fr>à ce moment-là</s-fr>. A long time: <s-fr>au bout d'un moment</s-fr> (after a while), <s-fr>pendant des heures</s-fr>.</p>
<p>To finish: <s-fr>finalement</s-fr> (in the end), <s-fr>enfin</s-fr> (at last, with relief), <s-fr>à la fin</s-fr> (at the end of something: <s-fr>à la fin du film</s-fr>).</p>
<h2>Keeping it alive</h2>
<p>In speech, French speakers often say <s-fr>Et là,</s-fr> (and then), <s-fr>Du coup,</s-fr> (so, as a result) and <s-fr>Bref,</s-fr> (anyway, to cut a long story short).</p>
<div class="tip"><s-fr>enfin</s-fr> isn't the same as "finally" in every case: <s-fr>enfin</s-fr> = at last (we'd been waiting), <s-fr>finalement</s-fr> = in the end (it turned out that…). <s-fr>Enfin !</s-fr> on its own also means "well…" or "I mean…".</div>
`,
    examples: [
      ["Il faisait beau et nous étions sur la plage.", "The weather was nice and we were on the beach."],
      ["Soudain, le ciel est devenu noir.", "Suddenly, the sky went black."],
      ["La veille, la météo avait annoncé un orage.", "The day before, the forecast had announced a storm."],
      ["Au bout d'un moment, il a commencé à pleuvoir.", "After a while, it started to rain."],
      ["Le lendemain, tout était calme.", "The next day, everything was calm."],
      ["Enfin, le bus est arrivé !", "At last, the bus arrived!"],
      ["Finalement, on n'est pas partis.", "In the end, we didn't leave."],
      ["Bref, on a passé une soirée incroyable.", "Anyway, we had an amazing evening."]
    ],
    quiz: [
      { q: "The weather in a story is usually in:", o: ["the passé composé", "the imparfait", "the plus-que-parfait"], a: 1, ex: "The background: the imparfait." },
      { q: "“Suddenly, someone knocked at the door”:", o: ["Soudain, quelqu'un frappait à la porte.", "Soudain, quelqu'un a frappé à la porte.", "Soudain, quelqu'un avait frappé à la porte."], a: 1, ex: "A sudden event: the passé composé." },
      { q: "“The next day” is:", o: ["la veille", "le lendemain", "le jour après demain"], a: 1, ex: "le lendemain = the next day; la veille = the day before." },
      { q: "“At last, you're here!” (we were waiting) is:", o: ["Finalement, tu es là !", "Enfin, tu es là !", "À la fin, tu es là !"], a: 1, ex: "enfin = at last." },
      { q: "“After a while” is:", o: ["au bout d'un moment", "à la fin d'un moment", "après un moment de"], a: 0, ex: "au bout d'un moment." }
    ]
  },
  {
    id: 50, level: "B1", kind: "functional", icon: "laugh",
    title: "Everyday French: telling an anecdote and reacting", title_fr: "Le français de tous les jours : raconter une anecdote et réagir",
    subtitle: "Hook your listener, keep them hanging on, and react like a French speaker.", subtitle_fr: "Accrocher ton auditoire, le tenir en haleine, et réagir comme un francophone.",
    body: `
<h2>Starting</h2>
<p><s-fr>Tu ne devineras jamais ce qui m'est arrivé !</s-fr> (You'll never guess what happened to me!) · <s-fr>Il faut que je te raconte un truc !</s-fr> (I have to tell you something!) · <s-fr>Tu sais ce qui s'est passé hier ?</s-fr></p>
<p>Note: <s-fr>arriver</s-fr> (to happen) takes <s-fr>être</s-fr>, and the person it happens to is an indirect object: <s-fr>il m'est arrivé</s-fr>, <s-fr>qu'est-ce qui t'est arrivé ?</s-fr></p>
<h2>Reacting</h2>
<table>
<tr><th>To show…</th><th>French</th></tr>
<tr><td>surprise</td><td><s-fr>Non ?! · Sans blague ! · Ça alors ! · C'est pas vrai !</s-fr></td></tr>
<tr><td>sympathy</td><td><s-fr>Oh non ! · Mince ! · Le pauvre ! · La pauvre !</s-fr></td></tr>
<tr><td>relief</td><td><s-fr>Ouf ! · Heureusement !</s-fr></td></tr>
<tr><td>that you want more</td><td><s-fr>Et alors ? · Et après ? · Qu'est-ce que tu as fait ?</s-fr></td></tr>
</table>
<h2>Ending</h2>
<p><s-fr>Bref, finalement, tout s'est bien terminé.</s-fr> · <s-fr>On en rit encore !</s-fr> (We still laugh about it!) · <s-fr>Plus jamais ça !</s-fr> (Never again!)</p>
<div class="tip">Two traps. <s-fr>Oh là là</s-fr> shows worry or dismay, not excitement. And don't say <s-fr>je suis excité</s-fr> for "I'm excited": in French it often has a sexual meaning. Say <s-fr>j'ai hâte</s-fr> (I can't wait) or <s-fr>c'est génial</s-fr>.</div>
`,
    examples: [
      ["Tu ne devineras jamais ce qui m'est arrivé !", "You'll never guess what happened to me!"],
      ["Il faut que je te raconte un truc !", "I've got to tell you something!"],
      ["Qu'est-ce qui t'est arrivé ?", "What happened to you?"],
      ["Sans blague ! Et alors ?", "No kidding! And then what?"],
      ["Oh non, la pauvre !", "Oh no, poor thing!"],
      ["Ouf, heureusement !", "Phew, thank goodness!"],
      ["Bref, on en rit encore.", "Anyway, we still laugh about it."],
      ["J'ai hâte de partir en vacances !", "I can't wait to go on holiday!"]
    ],
    quiz: [
      { q: "“What happened to you?” is:", o: ["Qu'est-ce qui t'a arrivé ?", "Qu'est-ce qui t'est arrivé ?", "Qu'est-ce que tu es arrivé ?"], a: 1, ex: "arriver takes être: qu'est-ce qui t'est arrivé ?" },
      { q: "To show surprise, you can say:", o: ["Sans blague !", "Bref !", "Du coup !"], a: 0, ex: "Sans blague ! = No kidding!" },
      { q: "“I'm excited about the trip” is best said:", o: ["Je suis excité pour le voyage.", "J'ai hâte de partir en voyage.", "Je suis excitant du voyage."], a: 1, ex: "j'ai hâte de…: excité often has a sexual meaning." },
      { q: "“Et alors ?” in a story means:", o: ["So what?", "And then what?", "Both, depending on the tone."], a: 2, ex: "Curious tone: and then? Flat tone: so what?" },
      { q: "“Never again!” is:", o: ["Jamais encore !", "Plus jamais ça !", "Pas encore ça !"], a: 1, ex: "Plus jamais ça !" }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    48: {
      gap: [["Quand Paul est arrivé, le film ___ déjà commencé. (avoir)", "avait"], ["Elle était fatiguée parce qu'elle ___ mal dormi. (avoir)", "avait"], ["Ils ___ partis avant la fin. (être)", "étaient"], ["Je me suis rendu compte que j'___ oublié mes clés. (avoir)", "avais"]],
      fix: [["Quand Léa est arrivée, le train est déjà parti.", "Quand Léa est arrivée, le train était déjà parti.", "The earlier action: the plus-que-parfait."], ["Il avait allé au marché la veille.", "Il était allé au marché la veille.", "aller takes être, in the plus-que-parfait too."]],
      task: ["Tell what had gone wrong before a bad morning: what you had forgotten, what had happened the day before.", "Raconte ce qui s'était mal passé avant une mauvaise matinée : ce que tu avais oublié, ce qui s'était passé la veille.", "Ce matin-là, rien n'allait. La veille, j'avais travaillé jusqu'à minuit et j'avais oublié de mettre mon réveil. Je n'avais pas fait les courses, alors il n'y avait rien pour le petit-déjeuner. Et quand j'ai voulu prendre le bus, je me suis rendu compte que j'avais laissé mon portefeuille au bureau !"]
    },
    49: {
      gap: [["Il ___ nuit et il pleuvait. (faire, imparfait)", "faisait"], ["Tout à ___, j'ai entendu un bruit. (all of a sudden)", "coup"], ["Le ___, tout allait mieux. (the next day)", "lendemain"], ["La ___, j'avais très mal dormi. (the day before)", "veille"]],
      fix: [["Soudain, quelqu'un frappait à la porte.", "Soudain, quelqu'un a frappé à la porte.", "A sudden event: the passé composé, not the imparfait."], ["Ce jour-là, il a fait très froid et la neige est tombée depuis le matin.", "Ce jour-là, il faisait très froid et la neige tombait depuis le matin.", "The background (weather, what was going on): the imparfait."]],
      task: ["Tell a short story that begins: Il était minuit et je rentrais chez moi…", "Raconte une courte histoire qui commence par : Il était minuit et je rentrais chez moi…", "Il était minuit et je rentrais chez moi à pied. Il faisait froid et la rue était vide. Tout à coup, j'ai entendu des pas derrière moi. J'ai accéléré, mais les pas aussi ! Au bout d'un moment, quelqu'un a crié mon prénom : c'était mon voisin, qui avait trouvé mon écharpe dans le bus. Finalement, on a bien ri."]
    },
    50: {
      gap: [["Tu ne ___ jamais ce qui m'est arrivé ! (deviner, future)", "devineras"], ["Sans ___ ! (no kidding)", "blague"], ["Et ___ ? Qu'est-ce que tu as fait ? (and then)", "alors"], ["___, finalement, tout s'est bien terminé. (anyway)", "Bref"]],
      fix: [["Qu'est-ce qui t'a arrivé ?", "Qu'est-ce qui t'est arrivé ?", "arriver takes être: il m'est arrivé, qu'est-ce qui t'est arrivé ?"], ["Je suis très excité par mon voyage !", "J'ai très hâte de partir en voyage !|J'ai hâte de partir en voyage !", "excité often has a sexual meaning in French: say j'ai hâte de…"]],
      task: ["Write a short dialogue: a friend tells you how they lost their passport at the airport, and you react at each step.", "Écris un court dialogue : un ami te raconte comment il a perdu son passeport à l'aéroport, et tu réagis à chaque étape.", "— Tu ne devineras jamais ce qui m'est arrivé ! — Non, raconte ! — À l'aéroport, je me suis rendu compte que j'avais perdu mon passeport. — Oh non ! Et alors ? — J'ai couru partout pendant une heure. Finalement, une dame l'avait trouvé et l'avait donné à la police. — Ouf ! Heureusement !"]
    }
  });

  W.ROLEPLAYS.push(
  { id: "anecdote", lesson: 50, level: "B1", icon: "laugh", partner: "Clément", role: "a friend",
    title: "Locked out!", title_fr: "Les clés à l'intérieur !",
    setting: "Over coffee, you tell your friend Clément what happened to you on Saturday: you got locked out of your flat.", setting_fr: "Autour d'un café, tu racontes à ton ami Clément ce qui t'est arrivé samedi : la porte de ton appartement s'est fermée, et tes clés étaient à l'intérieur.",
    turns: [
      { p: "Salut ! Alors, ce week-end, c'était bien ?", fr: "Hi! So, how was your weekend?" },
      { y: ["Tu ne devineras jamais ce qui m'est arrivé samedi !", "Tu ne devineras jamais ce qui m'a arrivé samedi !", "Tu ne devines jamais ce qui m'est arrivé samedi !"], fr: "You'll never guess what happened to me on Saturday!", why: "arriver takes être: ce qui m'est arrivé; deviner in the future." },
      { p: "Non ? Raconte !", fr: "No? Tell me!" },
      { y: ["Je descendais les poubelles quand la porte s'est fermée derrière moi.", "J'ai descendu les poubelles quand la porte se fermait derrière moi.", "Je descendais les poubelles quand la porte se fermait derrière moi."], fr: "I was taking the bins down when the door closed behind me.", why: "The background: imparfait (je descendais); the sudden event: passé composé (s'est fermée)." },
      { p: "Oh non ! Et tes clés ?", fr: "Oh no! And your keys?" },
      { y: ["Je les avais laissées sur la table de la cuisine, évidemment !", "Je les ai laissé sur la table de la cuisine, évidemment !", "Je les avais laissé sur la table de la cuisine, évidemment !"], fr: "I'd left them on the kitchen table, of course!", why: "Before the door closed: the plus-que-parfait. les (the keys) comes first, so laissées agrees." },
      { p: "Ça alors ! Et qu'est-ce que tu as fait ?", fr: "Good grief! And what did you do?" },
      { y: ["J'ai sonné chez la voisine, mais elle était partie en week-end.", "J'ai sonné chez la voisine, mais elle avait parti en week-end.", "J'ai sonné chez la voisine, mais elle était partit en week-end."], fr: "I rang my neighbour's bell, but she'd gone away for the weekend.", why: "partir takes être: elle était partie." },
      { p: "Mince ! Tu as appelé un serrurier ?", fr: "Oh dear! Did you call a locksmith?" },
      { y: ["Oui, mais il n'est arrivé qu'au bout de deux heures, et ça m'a coûté cent cinquante euros !", "Oui, mais il est arrivé que au bout de deux heures, et ça m'a coûté cent cinquante euros !", "Oui, mais il n'est pas arrivé qu'au bout de deux heures, et ça m'a coûté cent cinquante euros !"], fr: "Yes, but he only got there after two hours, and it cost me a hundred and fifty euros!", why: "ne… que = only: il n'est arrivé qu'au bout de deux heures." },
      { p: "Cent cinquante euros ?! Sans blague ! La prochaine fois, laisse-moi un double de tes clés !", fr: "A hundred and fifty euros?! No kidding! Next time, leave me a spare set of your keys!" },
      { y: ["Bonne idée ! Plus jamais je ne sortirai sans mes clés.", "Bonne idée ! Jamais plus je sortirai pas sans mes clés.", "Bonne idée ! Plus jamais je ne sortirai pas sans mes clés."], fr: "Good idea! I'll never go out without my keys again.", why: "plus jamais… ne: never add pas." }
    ] }
  );

  W.READINGS.push({
    id: "trainnuit", level: "B1", icon: "train-front", title: "Le train de nuit", genre: "Short story",
    intro: "A short story about a missed ticket and an old man on a night train. The three tenses of a story, and the plus-que-parfait.",
    intro_fr: "Une nouvelle : un billet oublié et un vieux monsieur dans un train de nuit. Les trois temps du récit, et le plus-que-parfait.",
    paragraphs: [
      { en: "Ce soir-là, Agathe était en retard. Elle avait travaillé tard, elle avait raté le métro, et quand elle est arrivée à la gare d'Austerlitz, le train de nuit était sur le point de partir. Elle a couru sur le quai et elle est montée dans la dernière voiture juste avant la fermeture des portes.", fr: "That evening, Agathe was late. She had worked late, she had missed the metro, and when she got to the Gare d'Austerlitz, the night train was about to leave. She ran along the platform and got into the last carriage just before the doors closed." },
      { en: "Dans son compartiment, un vieux monsieur lisait un journal. Il lui a souri et lui a dit qu'elle avait eu de la chance. Agathe s'est assise et a cherché son billet dans son sac. Rien. Elle s'est rendu compte qu'elle l'avait oublié sur son bureau, à côté de son ordinateur.", fr: "In her compartment, an old man was reading a newspaper. He smiled at her and told her she'd been lucky. Agathe sat down and looked for her ticket in her bag. Nothing. She realised she'd left it on her desk, next to her computer." },
      { en: "Au bout d'un moment, le contrôleur est arrivé. Agathe, très gênée, lui a expliqué ce qui s'était passé. Heureusement, elle avait acheté son billet en ligne et elle a pu le montrer sur son téléphone. Elle était tellement soulagée qu'elle a éclaté de rire.", fr: "After a while, the ticket inspector came. Agathe, very embarrassed, explained what had happened. Luckily, she had bought her ticket online and was able to show it on her phone. She was so relieved that she burst out laughing." },
      { en: "Le vieux monsieur s'appelait Armand. Il lui a raconté qu'il avait pris ce même train cinquante ans plus tôt, pour son premier poste d'instituteur dans un village de montagne. Cette nuit-là, il avait rencontré une jeune femme dans le couloir. Deux ans plus tard, elle était devenue sa femme.", fr: "The old man's name was Armand. He told her he had taken this same train fifty years earlier, for his first job as a primary school teacher in a mountain village. That night, he had met a young woman in the corridor. Two years later, she had become his wife." },
      { en: "Le lendemain matin, quand le train est arrivé dans les Alpes, il neigeait. Armand est descendu et a disparu dans la foule. Agathe a regardé la montagne et s'est dit que les plus belles histoires commencent souvent par un retard.", fr: "The next morning, when the train arrived in the Alps, it was snowing. Armand got off and disappeared into the crowd. Agathe looked at the mountains and thought that the best stories often begin with being late." }
    ],
    glossary: { "raté": "missed", "fermeture": "closing", "compartiment": "compartment", "souri": "smiled", "assise": "sat down", "contrôleur": "ticket inspector", "gênée": "embarrassed", "soulagée": "relieved", "éclaté": "burst (éclater de rire: to burst out laughing)", "instituteur": "primary school teacher", "devenue": "become", "disparu": "disappeared", "foule": "crowd", "retard": "being late, delay" },
    questions: [
      { q: "Pourquoi Agathe était en retard ?", o: ["Elle avait travaillé tard et raté le métro.", "Elle avait oublié son billet.", "Le train était parti en avance."], a: 0 },
      { q: "Qu'est-ce qu'elle avait oublié sur son bureau ?", o: ["Son téléphone", "Son billet", "Son sac"], a: 1 },
      { q: "Comment a-t-elle résolu le problème ?", o: ["Elle a payé une amende.", "Elle a montré son billet sur son téléphone.", "Armand lui a donné son billet."], a: 1 },
      { q: "Qu'est-ce qui s'était passé dans ce train, cinquante ans plus tôt ?", o: ["Armand avait rencontré sa future femme.", "Armand avait perdu son travail.", "Armand avait raté le train."], a: 0 },
      { q: "Quel temps faisait-il quand le train est arrivé ?", o: ["Il pleuvait.", "Il neigeait.", "Il faisait beau."], a: 1 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-b1-2", unit: "b1-2", level: "B1", icon: "radio",
    title: "Racontez-nous !", title_fr: "Racontez-nous !",
    context: "On a radio show, listeners phone in to tell a true story. Tonight, Bruno talks to the presenter, Nathalie.", context_fr: "Dans une émission de radio, les auditeurs appellent pour raconter une histoire vraie. Ce soir, Bruno parle avec l'animatrice, Nathalie.",
    words: [["l'auditeur", "the listener"], ["une tour", "a tower block"], ["en costume", "in a suit"], ["bloqué", "stuck"], ["le parcours", "the background, the career path"]],
    lines: [["Nathalie", "Bonsoir, vous êtes bien sur Radio Azur, et c'est l'heure de notre émission Racontez-nous ! Notre premier auditeur s'appelle Bruno. Bonsoir, Bruno !", "fr-FR"], ["Bruno", "Bonsoir ! Alors voilà : il y a trois ans, j'avais un entretien d'embauche très important, au dixième étage d'une grande tour à la Défense.", "fr-FR"], ["Nathalie", "Et vous étiez stressé ?", "fr-FR"], ["Bruno", "Très ! La veille, je n'avais presque pas dormi. Bref, je suis monté dans l'ascenseur avec un homme en costume, et tout à coup, l'ascenseur s'est arrêté entre deux étages.", "fr-FR"], ["Nathalie", "Non ! Sans blague !", "fr-FR"], ["Bruno", "Si, si ! On est restés bloqués pendant une heure. Au début, je ne disais rien, mais au bout d'un moment, on a commencé à discuter : de mon parcours, de mes projets, de tout.", "fr-FR"], ["Nathalie", "Et alors ?", "fr-FR"], ["Bruno", "Quand les techniciens nous ont enfin libérés, j'ai couru à mon entretien. J'ai ouvert la porte du bureau, et qui était assis derrière la table ? L'homme de l'ascenseur ! C'était le directeur.", "fr-FR"], ["Nathalie", "Ça alors ! Et vous avez eu le poste ?", "fr-FR"], ["Bruno", "Oui ! Il m'a dit qu'il avait déjà fait l'entretien, dans l'ascenseur !", "fr-FR"], ["Nathalie", "Quelle histoire ! Merci, Bruno, et bonne soirée.", "fr-FR"]],
    gist: ["De quoi parle Bruno ?", ["D'un entretien d'embauche surprenant", "D'un accident de voiture", "De ses vacances"]],
    detail: [["Où était l'entretien ?", ["Au dixième étage d'une tour", "Au rez-de-chaussée", "Dans un café"]], ["Combien de temps sont-ils restés bloqués ?", ["Une heure", "Dix minutes", "Toute la nuit"]], ["Qui était l'homme de l'ascenseur ?", ["Le directeur", "Un technicien", "Un autre candidat"]], ["Est-ce que Bruno a eu le poste ?", ["Oui", "Non", "On ne sait pas"]]],
    decode: ["je n'avais presque pas dormi", "il avait déjà fait l'entretien"],
    tip: "In a spoken story, listen for the markers: la veille, tout à coup, au bout d'un moment, quand… They tell you where you are in the story, even if you miss a few words.", tip_fr: "Dans une histoire racontée à l'oral, guette les marqueurs : la veille, tout à coup, au bout d'un moment, quand… Ils te disent où tu en es dans l'histoire, même si tu rates quelques mots."
  }]);

  W.PROMPTS.push({ id: "fr-b1-2", level: "B1", q: "Raconte un moment où tu as eu beaucoup de chance, ou pas de chance du tout.", fr: "Tell about a time when you were very lucky, or not lucky at all.", time: 150,
    phrases: ["Il y a deux ans, …", "La veille, j'avais…", "Tout à coup, …", "Heureusement, …", "Finalement, …"],
    model: "Il y a deux ans, je partais en vacances en Grèce. La veille, j'avais tout préparé, mais le matin, mon réveil n'a pas sonné. J'ai pris un taxi, et à l'aéroport, je me suis rendu compte que j'avais oublié mon passeport ! J'ai appelé ma sœur, qui me l'a apporté en trente minutes. Heureusement, le vol avait du retard. Finalement, j'ai eu mon avion de justesse, et je ne pars plus jamais sans vérifier mon sac deux fois !" });

  W.WRITING_GUIDE["b1-2"] = { genre: "A story on a forum (DELF B1)", genre_fr: "Un récit sur un forum (DELF B1)",
    plan: [["Say what you're going to tell and when it happened.", "Annonce ce que tu vas raconter et quand c'était."], ["Set the scene: what you had planned (plus-que-parfait) and the background (imparfait).", "Plante le décor : ce que tu avais prévu (plus-que-parfait) et la situation (imparfait)."], ["Tell the events in order, with time words.", "Raconte les événements dans l'ordre, avec des mots de temps."], ["Say how it ended and how you felt.", "Dis comment ça s'est terminé et ce que tu as ressenti."], ["Finish with what you learnt.", "Termine par ce que tu en as appris."]],
    marks: [["j'avais réservé les hôtels", "the plus-que-parfait", "le plus-que-parfait"], ["Le premier jour, il pleuvait", "the imparfait for the background", "l'imparfait pour le décor"], ["Le lendemain", "a time word", "un mot de temps"], ["Au bout d'une heure", "au bout de", "au bout de"], ["Finalement", "the ending", "la fin du récit"], ["ce que j'avais imaginé", "ce que + plus-que-parfait", "ce que + plus-que-parfait"]] };

  W.COURSE.push({ id: "b1-2", level: "B1", icon: "book-open", title: "Telling stories", title_fr: "Raconter",
    intro: "In this unit, you'll learn to tell a story the French way: the plus-que-parfait, the job of each past tense, the time words that hold a story together, and how to react when someone tells you one.",
    intro_fr: "Dans cette unité, tu vas apprendre à raconter une histoire à la française : le plus-que-parfait, le rôle de chaque temps du passé, les mots de temps qui tiennent un récit, et comment réagir quand on te raconte une histoire.",
    can: ["Use the plus-que-parfait for what had happened before", "Choose between imparfait, passé composé and plus-que-parfait in a story", "Link a story with time words (la veille, le lendemain, tout à coup…)", "Tell an anecdote and react to one", "Write a story of 160 to 180 words"],
    can_fr: ["Utiliser le plus-que-parfait pour ce qui s'était passé avant", "Choisir entre imparfait, passé composé et plus-que-parfait dans un récit", "Relier un récit avec des mots de temps (la veille, le lendemain, tout à coup…)", "Raconter une anecdote et réagir à une anecdote", "Écrire un récit de 160 à 180 mots"],
    lessons: [48, 49, 50], vocab: ["recitFR", "emotionsFR"], reading: "trainnuit", prompt: "fr-b1-2",
    writing: { task: "On a travel forum, tell about a trip that didn't go as planned (160-180 words): what you had planned, what happened, how it ended, and what you learnt.", task_fr: "Sur un forum de voyage, raconte un voyage qui ne s'est pas passé comme prévu (160 à 180 mots) : ce que tu avais prévu, ce qui s'est passé, comment ça s'est terminé, et ce que tu en as appris.", words: "160-180",
      tips: ["Je voudrais vous raconter…", "J'avais tout prévu : …", "Le lendemain, …", "Au bout d'une heure, …", "Depuis, j'ai appris que…"],
      checklist: ["I used the three past tenses", "I used at least four time words", "I said how I felt", "I finished with what I learnt", "I wrote between 160 and 180 words"],
      model: "Bonjour à tous,\n\nJe voudrais vous raconter mes premières vacances en Écosse, l'été dernier. J'avais tout organisé : j'avais réservé les hôtels, la voiture de location et même les restaurants. Mais rien ne s'est passé comme prévu !\n\nLe premier jour, il pleuvait tellement que la route vers les Highlands était fermée. Le lendemain, la voiture est tombée en panne au milieu de nulle part. Je n'avais plus de réseau, et il n'y avait personne. Au bout d'une heure, un vieux fermier s'est arrêté avec son tracteur. Il m'a emmené chez lui, sa femme m'a préparé une soupe, et ils m'ont raconté l'histoire de leur village toute la soirée.\n\nFinalement, j'ai passé trois jours chez eux, pendant que la voiture était au garage. Ces vacances ne ressemblaient pas du tout à ce que j'avais imaginé, mais ce sont les plus belles de ma vie. Depuis, j'ai appris une chose : il ne faut pas tout prévoir, et les imprévus font souvent les meilleurs souvenirs !\n\nBonne route à tous,\nAlex" } });
})();
