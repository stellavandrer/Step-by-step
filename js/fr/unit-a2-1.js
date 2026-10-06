/* Cours de français, unité A2-1 « Last weekend / Le week-end dernier » : le passé composé avec avoir (participes
   réguliers et irréguliers), la négation et les questions au passé, raconter son week-end et réagir.
   Personnages fictifs, prénoms français. Faits vérifiables seulement : à Lyon, le Vieux-Lyon et ses traboules,
   la colline de Fourvière et sa basilique, les bouchons (restaurants lyonnais traditionnels). */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "passeFR", icon: "calendar-clock", title: "Talking about the past", title_fr: "Parler du passé", level: "A2", words: [
    ["hier", "yesterday", "Hier, j'ai travaillé tard."],
    ["avant-hier", "the day before yesterday", "Avant-hier, il a plu toute la journée."],
    ["hier soir", "last night", "Hier soir, on a regardé un film."],
    ["le week-end dernier", "last weekend", "Le week-end dernier, j'ai rendu visite à ma tante."],
    ["la semaine dernière", "last week", "La semaine dernière, j'ai commencé un nouveau travail."],
    ["l'année dernière", "last year", "L'année dernière, nous avons visité l'Écosse."],
    ["il y a deux jours", "two days ago", "Je l'ai vu il y a deux jours."],
    ["déjà", "already; ever", "Tu as déjà mangé des escargots ?"],
    ["pas encore", "not yet", "Je n'ai pas encore fini."],
    ["d'abord", "first", "D'abord, on a pris un café."],
    ["après", "after, afterwards", "Après, on a visité le musée."],
    ["enfin", "finally, at last", "Enfin, on est rentrés à la maison."],
    ["passer", "to spend (time); to pass", "J'ai passé un très bon week-end."],
    ["rendre visite à", "to visit (a person)", "J'ai rendu visite à mes grands-parents."],
    ["visiter", "to visit (a place)", "Nous avons visité la vieille ville."],
    ["oublier", "to forget", "J'ai oublié mon parapluie !"],
    ["rencontrer", "to meet (for the first time)", "J'ai rencontré une personne très sympa."],
    ["essayer", "to try", "J'ai essayé un nouveau restaurant."]
  ] },
  { id: "sortiesFR", icon: "ticket", title: "Going out", title_fr: "Les sorties", level: "A2", words: [
    ["une sortie", "an outing, a night out", "Une sortie au théâtre, ça te dit ?"],
    ["un spectacle", "a show", "Le spectacle commence à vingt heures."],
    ["une exposition", "an exhibition", "Nous avons vu une belle exposition de peinture."],
    ["une pièce de théâtre", "a play", "C'était une pièce de théâtre très drôle."],
    ["une soirée", "a party; an evening", "Il y a une soirée chez Paul samedi."],
    ["une boîte de nuit", "a nightclub", "On est allés en boîte de nuit."],
    ["un match", "a match, a game", "On a regardé le match au bar."],
    ["une balade", "a walk, a stroll", "On a fait une balade au bord de la rivière."],
    ["un pique-nique", "a picnic", "Nous avons fait un pique-nique au parc."],
    ["une place", "a ticket, a seat (for a show)", "J'ai réservé deux places pour le concert."],
    ["réserver", "to book", "Il faut réserver une table."],
    ["génial", "great, brilliant", "Le concert était génial !"],
    ["nul", "rubbish, useless (informal)", "Le film était nul."],
    ["ennuyeux / ennuyeuse", "boring (m) / boring (f)", "La pièce était un peu ennuyeuse."],
    ["s'ennuyer", "to be bored", "Les enfants se sont ennuyés."],
    ["rigoler", "to laugh, to have fun (informal)", "On a bien rigolé !"],
    ["le monde", "people, a crowd; the world", "Il y avait beaucoup de monde."]
  ] });

  W.LESSONS.push(
  {
    id: 24, level: "A2", icon: "calendar-clock",
    title: "J'ai mangé: the passé composé with avoir", title_fr: "J'ai mangé : le passé composé avec avoir",
    subtitle: "The tense for what happened: avoir in the present, plus a past participle.", subtitle_fr: "Le temps pour raconter ce qui s'est passé : avoir au présent, plus un participe passé.",
    body: `
<h2>The form</h2>
<p>The passé composé is made of two words: <s-fr>avoir</s-fr> in the present, and the past participle of the verb.</p>
<table>
<tr><th>French</th><th>English</th></tr>
<tr><td><s-fr>j'ai mangé</s-fr></td><td>I ate, I have eaten</td></tr>
<tr><td><s-fr>tu as mangé</s-fr></td><td>you ate</td></tr>
<tr><td><s-fr>il a mangé</s-fr> · <s-fr>elle a mangé</s-fr> · <s-fr>on a mangé</s-fr></td><td>he, she ate · we ate</td></tr>
<tr><td><s-fr>nous avons mangé</s-fr></td><td>we ate</td></tr>
<tr><td><s-fr>vous avez mangé</s-fr></td><td>you ate</td></tr>
<tr><td><s-fr>ils ont mangé</s-fr> · <s-fr>elles ont mangé</s-fr></td><td>they ate</td></tr>
</table>
<p>One French tense for two English ones: <s-fr>J'ai mangé</s-fr> means "I ate" and "I have eaten". French doesn't make the difference.</p>
<h2>Regular participles</h2>
<table>
<tr><th>Infinitive</th><th>Participle</th><th>Example</th></tr>
<tr><td>-er</td><td>-é</td><td><s-fr>parler</s-fr> → <s-fr>parlé</s-fr> · <s-fr>J'ai parlé avec Paul.</s-fr></td></tr>
<tr><td>-ir</td><td>-i</td><td><s-fr>finir</s-fr> → <s-fr>fini</s-fr> · <s-fr>Tu as fini ?</s-fr></td></tr>
<tr><td>-re</td><td>-u</td><td><s-fr>attendre</s-fr> → <s-fr>attendu</s-fr> · <s-fr>Nous avons attendu le bus.</s-fr></td></tr>
</table>
<p>The -er participle sounds exactly like the infinitive: <s-fr>parler</s-fr> and <s-fr>parlé</s-fr>. You only see the difference in writing, and the auxiliary tells you it's the past.</p>
<h2>When it happened</h2>
<p><s-fr>hier</s-fr> (yesterday) · <s-fr>hier soir</s-fr> (last night) · <s-fr>le week-end dernier</s-fr> · <s-fr>la semaine dernière</s-fr> · <s-fr>il y a deux jours</s-fr> (two days ago): <s-fr>il y a</s-fr> comes before the length of time, unlike "ago".</p>
<div class="tip">Short adverbs go between the two words: <s-fr>J'ai bien dormi.</s-fr> (I slept well.) · <s-fr>Tu as déjà fini ?</s-fr> (Have you already finished?) · <s-fr>Nous avons beaucoup marché.</s-fr></div>
`,
    examples: [
      ["Hier, j'ai travaillé jusqu'à vingt heures.", "Yesterday, I worked until 8 pm."],
      ["Tu as regardé le match ?", "Did you watch the match?"],
      ["Elle a fini son livre.", "She's finished her book."],
      ["Nous avons attendu le bus pendant vingt minutes.", "We waited for the bus for twenty minutes."],
      ["Vous avez visité le musée ?", "Did you visit the museum?"],
      ["Ils ont mangé dans un petit restaurant.", "They ate in a small restaurant."],
      ["J'ai rencontré Hugo il y a deux ans.", "I met Hugo two years ago."],
      ["J'ai très bien dormi.", "I slept very well."]
    ],
    quiz: [
      { q: "Complete: “Hier, nous ___ dîné chez Paul.”", o: ["avons", "sommes", "avez"], a: 0, ex: "Most verbs use avoir: nous avons dîné." },
      { q: "The participle of “finir” is:", o: ["finé", "fini", "finu"], a: 1, ex: "-ir → -i." },
      { q: "The participle of “attendre” is:", o: ["attendu", "attendé", "attendi"], a: 0, ex: "-re → -u." },
      { q: "“Two days ago” is:", o: ["deux jours il y a", "il y a deux jours", "il y a deux jours avant"], a: 1, ex: "il y a comes first: il y a deux jours." },
      { q: "“I slept well” is:", o: ["J'ai dormi bien.", "J'ai bien dormi.", "Bien j'ai dormi."], a: 1, ex: "Short adverbs go between avoir and the participle." }
    ]
  },
  {
    id: 25, level: "A2", icon: "list-checks",
    title: "Fait, pris, vu: irregular participles, the negative and questions", title_fr: "Fait, pris, vu : les participes irréguliers, la négation et les questions",
    subtitle: "The participles to learn by heart, and where ne… pas goes in the past.", subtitle_fr: "Les participes à apprendre par cœur, et la place de ne… pas au passé.",
    body: `
<h2>The irregular participles you need most</h2>
<table>
<tr><th>Infinitive</th><th>Participle</th><th>Example</th></tr>
<tr><td><s-fr>être</s-fr></td><td><s-fr>été</s-fr></td><td><s-fr>J'ai été malade.</s-fr></td></tr>
<tr><td><s-fr>avoir</s-fr></td><td><s-fr>eu</s-fr></td><td><s-fr>J'ai eu de la chance.</s-fr></td></tr>
<tr><td><s-fr>faire</s-fr></td><td><s-fr>fait</s-fr></td><td><s-fr>Qu'est-ce que tu as fait ?</s-fr></td></tr>
<tr><td><s-fr>prendre</s-fr></td><td><s-fr>pris</s-fr></td><td><s-fr>J'ai pris le train.</s-fr></td></tr>
<tr><td><s-fr>voir</s-fr></td><td><s-fr>vu</s-fr></td><td><s-fr>Tu as vu ce film ?</s-fr></td></tr>
<tr><td><s-fr>boire</s-fr></td><td><s-fr>bu</s-fr></td><td><s-fr>On a bu un verre.</s-fr></td></tr>
<tr><td><s-fr>lire</s-fr></td><td><s-fr>lu</s-fr></td><td><s-fr>J'ai lu un roman.</s-fr></td></tr>
<tr><td><s-fr>dire</s-fr> · <s-fr>écrire</s-fr></td><td><s-fr>dit</s-fr> · <s-fr>écrit</s-fr></td><td><s-fr>Il a dit oui.</s-fr> · <s-fr>Elle a écrit un message.</s-fr></td></tr>
<tr><td><s-fr>mettre</s-fr></td><td><s-fr>mis</s-fr></td><td><s-fr>J'ai mis un pull.</s-fr></td></tr>
<tr><td><s-fr>pouvoir</s-fr> · <s-fr>vouloir</s-fr> · <s-fr>devoir</s-fr></td><td><s-fr>pu</s-fr> · <s-fr>voulu</s-fr> · <s-fr>dû</s-fr></td><td><s-fr>Je n'ai pas pu venir.</s-fr></td></tr>
<tr><td><s-fr>ouvrir</s-fr></td><td><s-fr>ouvert</s-fr></td><td><s-fr>Il a ouvert la fenêtre.</s-fr></td></tr>
</table>
<h2>The negative</h2>
<p><s-fr>ne… pas</s-fr> goes around <s-fr>avoir</s-fr>, not around the participle: <s-fr>Je n'ai pas vu le film.</s-fr> · <s-fr>Nous n'avons jamais mangé d'escargots.</s-fr> · <s-fr>Je n'ai rien compris.</s-fr></p>
<h2>Questions</h2>
<p><s-fr>Tu as vu le film ?</s-fr> · <s-fr>Est-ce que tu as vu le film ?</s-fr> · <s-fr>As-tu vu le film ?</s-fr> (formal, inversion with avoir) · <s-fr>Qu'est-ce que vous avez fait ?</s-fr></p>
<div class="tip">With <s-fr>déjà</s-fr> (ever, already) and <s-fr>ne… jamais</s-fr> (never), you can talk about experiences: <s-fr>Tu as déjà vu la mer ?</s-fr> — <s-fr>Non, je n'ai jamais vu la mer.</s-fr></div>
`,
    examples: [
      ["Qu'est-ce que tu as fait ce week-end ?", "What did you do this weekend?"],
      ["J'ai pris le train pour aller à Lyon.", "I took the train to go to Lyon."],
      ["On a vu un très bon film.", "We saw a really good film."],
      ["Je n'ai pas pu venir, désolé.", "I couldn't come, sorry."],
      ["Elle a écrit une longue lettre.", "She wrote a long letter."],
      ["Nous n'avons rien compris !", "We didn't understand anything!"],
      ["Tu as déjà lu ce livre ?", "Have you ever read this book?"],
      ["Je n'ai jamais bu de champagne.", "I've never drunk champagne."]
    ],
    quiz: [
      { q: "The participle of “faire” is:", o: ["faisé", "fait", "fu"], a: 1, ex: "faire → fait." },
      { q: "The participle of “prendre” is:", o: ["prendu", "pris", "prit"], a: 1, ex: "prendre → pris." },
      { q: "“I didn't see the film” is:", o: ["Je n'ai vu pas le film.", "Je n'ai pas vu le film.", "Je ai ne pas vu le film."], a: 1, ex: "ne… pas around avoir." },
      { q: "The participle of “voir” is:", o: ["vu", "voi", "voyé"], a: 0, ex: "voir → vu." },
      { q: "“Have you ever seen the sea?” is:", o: ["Tu as jamais vu la mer ?", "Tu as déjà vu la mer ?", "Tu as vu déjà la mer ?"], a: 1, ex: "déjà, between avoir and the participle." }
    ]
  },
  {
    id: 26, level: "A2", kind: "functional", icon: "message-circle",
    title: "Everyday French: telling what you did, and reacting", title_fr: "Le français de tous les jours : raconter ce qu'on a fait, et réagir",
    subtitle: "Ask about someone's weekend, tell them about yours and react like a French speaker.", subtitle_fr: "Demander à quelqu'un comment s'est passé son week-end, raconter le tien et réagir comme un francophone.",
    body: `
<h2>Asking</h2>
<p><s-fr>Tu as passé un bon week-end ?</s-fr> (Did you have a good weekend?) · <s-fr>Qu'est-ce que tu as fait ?</s-fr> · <s-fr>C'était comment ?</s-fr> (What was it like?) · <s-fr>Tu as fait quelque chose de spécial ?</s-fr></p>
<h2>Telling, in order</h2>
<p><s-fr>D'abord</s-fr> (first) · <s-fr>ensuite</s-fr> / <s-fr>puis</s-fr> (then) · <s-fr>après</s-fr> (afterwards) · <s-fr>enfin</s-fr> (finally): <s-fr>D'abord, on a fait une balade. Ensuite, on a déjeuné au restaurant. Enfin, on a vu un film.</s-fr></p>
<h2>Giving your opinion: c'était</h2>
<p>To say what something was like, use <s-fr>c'était</s-fr> (it was), not <s-fr>c'a été</s-fr>:</p>
<table>
<tr><th>Positive</th><th>Negative</th></tr>
<tr><td><s-fr>C'était génial !</s-fr> · <s-fr>C'était super !</s-fr> · <s-fr>C'était très sympa.</s-fr></td><td><s-fr>C'était nul.</s-fr> · <s-fr>C'était un peu ennuyeux.</s-fr> · <s-fr>Bof…</s-fr> (meh)</td></tr>
</table>
<p>You'll learn this tense, the imparfait, in unit 3. For now, learn <s-fr>c'était</s-fr> and <s-fr>il y avait</s-fr> (there was, there were) as set phrases: <s-fr>Il y avait beaucoup de monde.</s-fr></p>
<h2>Reacting</h2>
<p><s-fr>Ah bon ?</s-fr> (Really?) · <s-fr>C'est vrai ?</s-fr> · <s-fr>Super !</s-fr> · <s-fr>Quelle chance !</s-fr> (Lucky you!) · <s-fr>Oh non, dommage !</s-fr> · <s-fr>Et alors ?</s-fr> (And then what?)</p>
<div class="tip">On Monday morning at work, French colleagues often ask <s-fr>Tu as passé un bon week-end ?</s-fr> A short answer is enough: <s-fr>Oui, très bien, merci ! Et toi ?</s-fr></div>
`,
    examples: [
      ["Tu as passé un bon week-end ?", "Did you have a good weekend?"],
      ["Qu'est-ce que tu as fait samedi ?", "What did you do on Saturday?"],
      ["D'abord, on a fait une balade, puis on a déjeuné au restaurant.", "First we went for a walk, then we had lunch at a restaurant."],
      ["C'était génial !", "It was brilliant!"],
      ["Il y avait beaucoup de monde.", "There were lots of people."],
      ["Ah bon ? C'est vrai ?", "Really? Is that true?"],
      ["Quelle chance !", "Lucky you!"]
    ],
    quiz: [
      { q: "“What was it like?” is:", o: ["C'était comment ?", "Comment c'est ?", "C'a été quoi ?"], a: 0, ex: "C'était comment ? = What was it like?" },
      { q: "“There were lots of people” is:", o: ["Il y avait beaucoup de monde.", "Il y a eu beaucoup de gens.", "Il était beaucoup de monde."], a: 0, ex: "il y avait = there was / there were." },
      { q: "To put events in order, you start with:", o: ["Enfin", "D'abord", "Après"], a: 1, ex: "d'abord = first; enfin = finally." },
      { q: "“Lucky you!” is:", o: ["Quelle chance !", "Bonne chance !", "Tu as chance !"], a: 0, ex: "Quelle chance ! Bonne chance = good luck." },
      { q: "“Bof…” means:", o: ["It was great!", "Meh, not very good.", "Thank you."], a: 1, ex: "Bof: not very enthusiastic." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    24: {
      gap: [["Hier, j'___ travaillé tard. (avoir)", "ai"], ["Nous avons ___ le bus. (attendre)", "attendu"], ["Tu as ___ ton travail ? (finir)", "fini"], ["Je l'ai vu il ___ a deux jours. (ago)", "y"]],
      fix: [["Hier, je mange au restaurant.", "Hier, j'ai mangé au restaurant.", "For a finished action in the past: the passé composé."], ["J'ai dormi bien.", "J'ai bien dormi.", "Short adverbs go between avoir and the participle."]],
      task: ["Write five sentences about what you did yesterday, with regular verbs.", "Écris cinq phrases sur ce que tu as fait hier, avec des verbes réguliers.", "Hier, j'ai travaillé à la maison. À midi, j'ai déjeuné avec ma voisine. L'après-midi, j'ai fini un livre. Le soir, nous avons regardé un film. J'ai très bien dormi !"]
    },
    25: {
      gap: [["Qu'est-ce que tu as ___ ? (faire)", "fait"], ["J'ai ___ le métro. (prendre)", "pris"], ["Tu as ___ ce film ? (voir)", "vu"], ["Je n'ai ___ compris ! (nothing)", "rien"]],
      fix: [["J'ai prendu le train.", "J'ai pris le train.", "prendre → pris."], ["Je n'ai vu pas le film.", "Je n'ai pas vu le film.", "ne… pas goes around avoir."]],
      task: ["Write about three things you've done in your life, and three things you've never done.", "Écris trois choses que tu as faites dans ta vie, et trois choses que tu n'as jamais faites.", "J'ai vu la tour Eiffel, j'ai lu Le Petit Prince en français et j'ai fait du ski. Je n'ai jamais pris l'avion de nuit, je n'ai jamais mangé d'escargots et je n'ai jamais vu d'aurore boréale."]
    },
    26: {
      gap: [["Tu as passé un bon ___ ? (weekend)", "week-end"], ["C'___ comment ? (was)", "était"], ["D'___, on a fait une balade. (first)", "abord"], ["Il y ___ beaucoup de monde. (there were)", "avait"]],
      fix: [["Ça a été génial !", "C'était génial !", "To say what something was like: c'était."], ["Bonne chance ! Tu as gagné un voyage ?", "Quelle chance ! Tu as gagné un voyage ?", "Lucky you = quelle chance. Bonne chance = good luck (for the future)."]],
      task: ["Tell a friend about your last weekend in order: d'abord, ensuite, après, enfin, and say what it was like.", "Raconte ton dernier week-end à un ami dans l'ordre : d'abord, ensuite, après, enfin, et dis comment c'était.", "D'abord, samedi matin, j'ai fait les courses au marché. Ensuite, j'ai déjeuné chez mes parents. Après, on a fait une balade au bord du lac. Enfin, dimanche soir, j'ai vu un spectacle de danse : c'était génial !"]
    }
  });

  W.ROLEPLAYS.push(
  { id: "lundimatin", lesson: 26, level: "A2", icon: "coffee", partner: "Vincent", role: "a colleague",
    title: "Monday morning at the office", title_fr: "Lundi matin au bureau",
    setting: "It's Monday morning. At the coffee machine, your colleague Vincent asks about your weekend.", setting_fr: "C'est lundi matin. À la machine à café, ton collègue Vincent te demande comment s'est passé ton week-end.",
    turns: [
      { p: "Salut ! Tu as passé un bon week-end ?", fr: "Hi! Did you have a good weekend?" },
      { y: ["Oui, très bon, merci ! J'ai fait une randonnée en montagne.", "Oui, très bon, merci ! J'ai faisé une randonnée en montagne.", "Oui, très bon, merci ! Je fais une randonnée en montagne hier."], fr: "Yes, very good, thanks! I went hiking in the mountains.", why: "faire → fait. For a finished action: the passé composé." },
      { p: "Ah, super ! C'était comment ?", fr: "Oh, great! What was it like?" },
      { y: ["C'était génial, mais il y avait beaucoup de monde.", "Ça a été génial, mais il y a eu beaucoup de monde.", "C'était génial, mais il était beaucoup de monde."], fr: "It was brilliant, but there were lots of people.", why: "To say what it was like: c'était, il y avait." },
      { p: "Et tu as vu le match samedi soir ?", fr: "And did you see the match on Saturday evening?" },
      { y: ["Non, je n'ai pas vu le match : j'ai dormi tôt !", "Non, je n'ai vu pas le match : j'ai dormi tôt !", "Non, je ne pas ai vu le match : j'ai dormi tôt !"], fr: "No, I didn't see the match: I went to sleep early!", why: "ne… pas around avoir: je n'ai pas vu." },
      { p: "Dommage, c'était un super match ! Moi, j'ai fait un barbecue avec ma famille.", fr: "What a shame, it was a great match! I had a barbecue with my family." },
      { y: ["Ah bon ? Il a fait beau chez vous ?", "Ah bon ? Il a été beau chez vous ?", "Ah bon ? Il faisait beau chez vous hier soir demain ?"], fr: "Really? Was the weather nice where you live?", why: "The weather in the passé composé: il a fait beau." },
      { p: "Oui, magnifique ! Bon, on va à la réunion ?", fr: "Yes, gorgeous! Right, shall we go to the meeting?" },
      { y: ["Oui, j'arrive ! Je prends juste mon café.", "Oui, je arrive ! Je prends juste mon café.", "Oui, j'arrive ! Je prend juste mon café."], fr: "Yes, I'm coming! I'm just getting my coffee.", why: "je + vowel: j'arrive. Je prends, with -s." }
    ] }
  );

  W.READINGS.push({
    id: "weekendlyon", level: "A2", icon: "landmark", title: "Un week-end à Lyon", genre: "Blog",
    intro: "Margaux tells the story of a weekend in Lyon with her sister. The passé composé with avoir, c'était and il y avait.",
    intro_fr: "Margaux raconte un week-end à Lyon avec sa sœur. Le passé composé avec avoir, c'était et il y avait.",
    paragraphs: [
      { en: "Le week-end dernier, ma sœur Lucie et moi, nous avons passé deux jours à Lyon. Nous avons pris le train vendredi soir, et nous avons dormi dans un petit hôtel près de la gare.", fr: "Last weekend, my sister Lucie and I spent two days in Lyon. We took the train on Friday evening, and we slept in a small hotel near the station." },
      { en: "Samedi matin, nous avons visité le Vieux-Lyon. Nous avons traversé des traboules : ce sont des passages secrets entre les immeubles. Ensuite, nous avons pris le funiculaire pour monter sur la colline de Fourvière. De là-haut, la vue sur la ville était magnifique !", fr: "On Saturday morning, we visited Old Lyon. We went through traboules: they're secret passages between the buildings. Then we took the funicular up Fourvière hill. From up there, the view over the city was magnificent!" },
      { en: "Le soir, nous avons dîné dans un bouchon, un restaurant typique de Lyon. J'ai goûté des spécialités locales, mais Lucie n'a pas aimé : elle a trouvé ça trop gras. Il y avait beaucoup de monde et beaucoup de bruit, mais c'était très sympa.", fr: "In the evening, we had dinner in a bouchon, a typical Lyon restaurant. I tried local specialities, but Lucie didn't like them: she found them too rich. There were lots of people and lots of noise, but it was really nice." },
      { en: "Dimanche, il a plu toute la journée. Alors nous avons visité un musée, puis nous avons acheté des souvenirs. Nous avons repris le train à dix-huit heures, fatiguées mais très contentes !", fr: "On Sunday, it rained all day. So we visited a museum, then we bought souvenirs. We took the train back at six, tired but very happy!" }
    ],
    glossary: { "immeubles": "buildings", "funiculaire": "funicular railway", "colline": "hill", "vue": "view", "magnifique": "magnificent", "bouchon": "traditional Lyon restaurant", "goûté": "tried, tasted", "spécialités": "specialities", "gras": "fatty, rich", "bruit": "noise", "plu": "rained", "repris": "took again" },
    questions: [
      { q: "Comment Margaux et Lucie sont venues à Lyon ?", o: ["En voiture", "En train", "En avion"], a: 1 },
      { q: "Qu'est-ce que c'est, une traboule ?", o: ["Un plat lyonnais", "Un passage entre les immeubles", "Une colline"], a: 1 },
      { q: "Pourquoi Lucie n'a pas aimé le dîner ?", o: ["C'était trop cher.", "C'était trop gras.", "Il y avait trop de monde."], a: 1 },
      { q: "Qu'est-ce qu'elles ont fait dimanche ?", o: ["Une randonnée", "Elles ont visité un musée et acheté des souvenirs.", "Elles ont dormi toute la journée."], a: 1 },
      { q: "Quel temps a-t-il fait dimanche ?", o: ["Il a fait beau.", "Il a plu.", "Il a neigé."], a: 1 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-a2-1", unit: "a2-1", level: "A2", icon: "phone",
    title: "Tu as fait quoi samedi ?", title_fr: "Tu as fait quoi samedi ?",
    context: "Mathilde calls her friend Romain on Sunday evening. Each of them tells the other about their Saturday.", context_fr: "Mathilde appelle son ami Romain dimanche soir. Chacun raconte son samedi à l'autre.",
    words: [["une fête", "a party"], ["un anniversaire", "a birthday"], ["perdre", "to lose"], ["les clés", "the keys"], ["heureusement", "luckily"]],
    lines: [["Mathilde", "Salut Romain ! Alors, tu as fait quoi samedi ?", "fr-FR"], ["Romain", "Le matin, j'ai joué au foot avec des collègues. On a perdu, mais on a bien rigolé !", "fr-FR"], ["Mathilde", "Et l'après-midi ?", "fr-FR"], ["Romain", "L'après-midi, j'ai fait le ménage, et le soir, j'ai vu un film au cinéma.", "fr-FR"], ["Mathilde", "Quel film ?", "fr-FR"], ["Romain", "Une comédie française. C'était drôle, mais un peu long. Et toi ?", "fr-FR"], ["Mathilde", "Moi, j'ai fêté l'anniversaire de ma cousine. On a dîné chez elle, il y avait vingt personnes !", "fr-FR"], ["Romain", "Vingt personnes ? Super !", "fr-FR"], ["Mathilde", "Oui, mais après la fête, j'ai cherché mes clés pendant une heure !", "fr-FR"], ["Romain", "Oh non ! Tu les as trouvées ?", "fr-FR"], ["Mathilde", "Oui, heureusement : dans mon manteau !", "fr-FR"]],
    gist: ["De quoi parlent Mathilde et Romain ?", ["De leur samedi", "De leurs vacances", "De leur travail"]],
    detail: [["Qu'est-ce que Romain a fait le matin ?", ["Il a joué au foot.", "Il a fait le ménage.", "Il a vu un film."]], ["Comment était le film ?", ["Drôle, mais un peu long", "Ennuyeux", "Triste"]], ["Combien de personnes il y avait à la fête ?", ["Vingt", "Dix", "Trente"]], ["Où étaient les clés de Mathilde ?", ["Dans son manteau", "Chez sa cousine", "Dans sa voiture"]]],
    decode: ["On a perdu, mais on a bien rigolé !", "j'ai cherché mes clés pendant une heure"],
    tip: "In fast speech, on a and il a are short and easy to miss: listen for the participle (perdu, rigolé, cherché). If you hear -é, -i or -u after a small word, it's very often the passé composé.", tip_fr: "À l'oral rapide, on a et il a sont courts et faciles à rater : guette le participe (perdu, rigolé, cherché). Si tu entends -é, -i ou -u après un petit mot, c'est très souvent le passé composé."
  }]);

  W.PROMPTS.push({ id: "fr-a2-1", level: "A2", q: "Raconte ton dernier week-end : ce que tu as fait, avec qui, et comment c'était.", fr: "Tell me about your last weekend: what you did, who with, and what it was like.", time: 90,
    phrases: ["Le week-end dernier, j'ai…", "D'abord… ensuite… enfin…", "J'ai vu / j'ai pris / j'ai fait…", "C'était…", "Il y avait…"],
    model: "Le week-end dernier, j'ai rendu visite à des amis à la campagne. Samedi, d'abord, nous avons fait une longue balade en forêt. Ensuite, nous avons préparé un grand repas ensemble. Le soir, nous avons joué aux cartes jusqu'à minuit : on a beaucoup rigolé ! Dimanche, il a plu, alors j'ai lu un roman au coin du feu. C'était très reposant." });

  W.WRITING_GUIDE["a2-1"] = { genre: "A blog post about a weekend", genre_fr: "Un billet de blog sur un week-end",
    plan: [["Where, when and who with.", "Où, quand et avec qui."], ["The first day, in order.", "Le premier jour, dans l'ordre."], ["A detail that made it special.", "Un détail qui l'a rendu spécial."], ["The second day, and a small problem.", "Le deuxième jour, et un petit problème."], ["What it was like, in one sentence.", "Comment c'était, en une phrase."]],
    marks: [["Le week-end dernier", "a time marker for the past", "un repère de temps passé"], ["nous avons loué", "the passé composé with avoir", "le passé composé avec avoir"], ["d'abord,", "the first step", "la première étape"], ["Il y avait", "il y avait to describe", "il y avait pour décrire"], ["nous n'avons pas pu", "the negative around avoir", "la négation autour d'avoir"], ["C'était", "c'était for your opinion", "c'était pour donner ton avis"]] };

  W.COURSE.push({ id: "a2-1", level: "A2", icon: "calendar-clock", title: "Last weekend", title_fr: "Le week-end dernier",
    intro: "Welcome to A2! This level is about telling stories and talking about the past. You start with the passé composé with avoir: regular and irregular participles, the negative, and how to tell someone about your weekend.",
    intro_fr: "Bienvenue au niveau A2 ! Ce niveau est celui des récits et du passé. Tu commences par le passé composé avec avoir : participes réguliers et irréguliers, la négation, et comment raconter ton week-end.",
    can: ["Form the passé composé with avoir", "Use the most common irregular participles", "Say what you didn't do, and ask questions about the past", "Tell someone about your weekend and react to their story"],
    can_fr: ["Former le passé composé avec avoir", "Utiliser les participes irréguliers les plus courants", "Dire ce que tu n'as pas fait, et poser des questions sur le passé", "Raconter ton week-end et réagir au récit de quelqu'un"],
    lessons: [24, 25, 26], vocab: ["passeFR", "sortiesFR"], reading: "weekendlyon", prompt: "fr-a2-1",
    writing: { task: "Write a short blog post (70-90 words) about a weekend you spent somewhere: what you did, in order, and what it was like.", task_fr: "Écris un court billet de blog (70 à 90 mots) sur un week-end passé quelque part : ce que tu as fait, dans l'ordre, et comment c'était.", words: "70-90",
      tips: ["Le week-end dernier, j'ai…", "D'abord, … Ensuite, … Enfin, …", "Il y avait…", "Je n'ai pas pu…", "C'était…"],
      checklist: ["I used the passé composé with avoir", "I used at least three irregular participles (fait, pris, vu…)", "I put the events in order (d'abord, ensuite, enfin)", "I gave my opinion with c'était", "I stayed between 70 and 90 words"],
      model: "Le week-end dernier, avec deux amis, nous avons loué une petite maison au bord de la mer. Samedi, d'abord, nous avons fait une grande balade sur la plage. Ensuite, nous avons mangé des fruits de mer dans un restaurant du port. Il y avait beaucoup de monde, mais le serveur a été très sympa. Dimanche, il a plu, alors nous n'avons pas pu faire de vélo. Nous avons joué aux cartes et lu tout l'après-midi. C'était simple, mais vraiment reposant !" } });
})();
