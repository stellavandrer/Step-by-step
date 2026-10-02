/* Leçons complémentaires (55 à 70). Le champ « after » place chaque leçon
   juste après une leçon existante dans le parcours (l'identifiant reste stable). */
window.LESSONS.push(
{
  id: 55, after: 4, level: "A1", icon: "calculator",
  title: "Les nombres, l'heure et la date",
  subtitle: "Compter, donner l'heure, dire une date (très utile au TOEIC aussi).",
  body: `
<h2>Les nombres</h2>
<table>
<tr><th>Nombre</th><th>Anglais</th><th>Nombre</th><th>Anglais</th></tr>
<tr><td>1 · 2 · 3</td><td>one · two · three</td><td>13 · 30</td><td>thirteen · thirty</td></tr>
<tr><td>4 · 5 · 6</td><td>four · five · six</td><td>14 · 40</td><td>fourteen · forty</td></tr>
<tr><td>7 · 8 · 9</td><td>seven · eight · nine</td><td>15 · 50</td><td>fifteen · fifty</td></tr>
<tr><td>10 · 11 · 12</td><td>ten · eleven · twelve</td><td>21 · 99</td><td>twenty-one · ninety-nine</td></tr>
<tr><td>100</td><td>a hundred</td><td>1,000</td><td>a thousand</td></tr>
</table>
<div class="warn"><b>thirteen</b> (13) et <b>thirty</b> (30) se ressemblent. Dans <s-en>thirteen</s-en>, l'accent est sur la fin : thir-<b>TEEN</b>. Dans <s-en>thirty</s-en>, il est sur le début : <b>THIR</b>-ty. C'est un piège classique des exercices d'écoute.</div>
<div class="tip">La virgule et le point sont inversés par rapport au français : <s-en>2.5</s-en> se lit « two point five » (2,5), et <s-en>1,000</s-en> = mille.</div>
<h2>L'heure</h2>
<p><s-en>What time is it?</s-en> — <s-en>It's seven o'clock.</s-en></p>
<table>
<tr><th>Heure</th><th>Façon classique</th><th>Façon « digitale »</th></tr>
<tr><td>7:15</td><td>quarter past seven</td><td>seven fifteen</td></tr>
<tr><td>7:30</td><td>half past seven</td><td>seven thirty</td></tr>
<tr><td>7:45</td><td>quarter to eight</td><td>seven forty-five</td></tr>
<tr><td>7:10</td><td>ten past seven</td><td>seven ten</td></tr>
<tr><td>7:50</td><td>ten to eight</td><td>seven fifty</td></tr>
</table>
<p>On n'utilise presque pas le format 24 h à l'oral : <b>a.m.</b> = le matin, <b>p.m.</b> = l'après-midi et le soir. <s-en>The meeting is at 3 p.m.</s-en></p>
<h2>La date</h2>
<p>Pour les dates, on utilise les nombres ordinaux : <s-en>first, second, third, fourth, fifth</s-en>, puis on ajoute <b>-th</b> (sixth, tenth, twentieth), sauf twenty-<b>first</b>, twenty-<b>second</b>, twenty-<b>third</b>.</p>
<p><s-en>My birthday is on the twelfth of March.</s-en> (UK) · <s-en>March twelfth</s-en> (US)</p>
<p>Les années se lisent par paires : <s-en>1994</s-en> = « nineteen ninety-four », <s-en>2025</s-en> = « twenty twenty-five ».</p>
<div class="tip">Les jours et les mois prennent toujours une majuscule : <s-en>Monday</s-en>, <s-en>March</s-en>.</div>
`,
  examples: [
    ["What time is it? — It's half past six.", "Quelle heure est-il ? — Il est six heures et demie."],
    ["The train leaves at 7:45 a.m.", "Le train part à 7 h 45."],
    ["My birthday is on the 12th of March.", "Mon anniversaire est le 12 mars."],
    ["It costs fifteen pounds fifty.", "Ça coûte quinze livres cinquante."],
    ["I was born in 1994.", "Je suis née en 1994."],
    ["We have thirty students, not thirteen.", "Nous avons trente élèves, pas treize."]
  ],
  quiz: [
    { q: "« 7 h 30 » se dit :", o: ["half past seven", "half to seven", "seven and half"], a: 0, ex: "Half past = et demie." },
    { q: "« 8 h 45 » se dit :", o: ["quarter past eight", "quarter to nine", "eight and three quarters"], a: 1, ex: "Quarter to nine = neuf heures moins le quart." },
    { q: "Le 3 mai :", o: ["the three of May", "the third of May", "the thirdth of May"], a: 1, ex: "Ordinal : third." },
    { q: "« 2,5 millions » s'écrit :", o: ["2,5 million", "2.5 million"], a: 1, ex: "Le point remplace notre virgule." },
    { q: "Où est l'accent dans « fifteen » ?", o: ["FIF-teen", "fif-TEEN"], a: 1, ex: "Les nombres en -teen sont accentués à la fin." }
  ]
},
{
  id: 57, after: 7, level: "A1", icon: "palette",
  title: "Décrire et relier : adjectifs, and, but, because",
  subtitle: "Faire des phrases plus riches.",
  body: `
<h2>L'adjectif se place avant le nom</h2>
<p><s-en>a red car</s-en> (une voiture rouge) · <s-en>an interesting book</s-en> · <s-en>a big old house</s-en></p>
<p>Avec <b>be</b>, il se place après : <s-en>The car is red.</s-en></p>
<div class="warn">L'adjectif ne s'accorde jamais : <s-en>two red cars</s-en>, <s-en>she is tall</s-en>, <s-en>they are tall</s-en>.</div>
<h2>Plusieurs adjectifs</h2>
<p>Ordre naturel : <b>opinion → taille → âge → couleur → origine</b>. <s-en>a beautiful little old French village</s-en>. Dans la vie courante, deux adjectifs suffisent : <s-en>a nice big flat</s-en>.</p>
<h2>Nuancer : very, really, quite, a bit</h2>
<p><s-en>very good</s-en> (très) · <s-en>really nice</s-en> (vraiment) · <s-en>quite expensive</s-en> (assez) · <s-en>a bit tired</s-en> (un peu, souvent négatif)</p>
<h2>Relier ses phrases</h2>
<table>
<tr><th>Mot</th><th>Sens</th><th>Exemple</th></tr>
<tr><td>and</td><td>et</td><td>I like tea and coffee.</td></tr>
<tr><td>but</td><td>mais</td><td>It's small but cosy.</td></tr>
<tr><td>or</td><td>ou</td><td>Tea or coffee?</td></tr>
<tr><td>because</td><td>parce que</td><td>I'm tired because I worked late.</td></tr>
<tr><td>so</td><td>donc, alors</td><td>It was late, so I went home.</td></tr>
</table>
<div class="tip">Avec ces cinq petits mots, tu passes de phrases « robot » (<i>I am tired. I go home.</i>) à des phrases naturelles (<s-en>I'm tired, so I'm going home.</s-en>).</div>
`,
  examples: [
    ["I live in a small flat in Paris.", "J'habite dans un petit appartement à Paris."],
    ["She has long brown hair.", "Elle a de longs cheveux bruns."],
    ["It's quite expensive, but it's really good.", "C'est assez cher, mais c'est vraiment bon."],
    ["I'm learning English because I want to travel.", "J'apprends l'anglais parce que je veux voyager."],
    ["It was raining, so we stayed at home.", "Il pleuvait, donc on est restés à la maison."]
  ],
  quiz: [
    { q: "« Une maison blanche » :", o: ["a house white", "a white house", "a whites house"], a: 1, ex: "L'adjectif se place avant le nom." },
    { q: "« Deux grandes villes » :", o: ["two bigs cities", "two big cities", "two cities bigs"], a: 1, ex: "L'adjectif est invariable." },
    { q: "« Il est fatigué parce qu'il a couru » :", o: ["He's tired so he ran.", "He's tired because he ran."], a: 1, ex: "Because = parce que (la cause)." },
    { q: "« C'est petit mais confortable » :", o: ["It's small but comfortable.", "It's small so comfortable."], a: 0, ex: "But = mais (opposition)." }
  ]
},
{
  id: 56, after: 8, level: "A1", icon: "megaphone",
  title: "L'impératif : Sit down! Don't worry! Let's go!",
  subtitle: "Donner une consigne, un conseil, proposer.",
  body: `
<h2>L'impératif : le verbe seul</h2>
<p>C'est la forme la plus simple de l'anglais : le verbe de base, sans sujet.</p>
<p><s-en>Sit down.</s-en> · <s-en>Open the window, please.</s-en> · <s-en>Turn left.</s-en></p>
<h2>La négation : Don't</h2>
<p><s-en>Don't worry!</s-en> (Ne t'inquiète pas !) · <s-en>Don't touch that!</s-en></p>
<h2>Proposer : Let's</h2>
<p><b>Let's</b> (= let us) = « allons-y », « faisons » : <s-en>Let's go!</s-en> · <s-en>Let's have lunch.</s-en> · <s-en>Let's not talk about it.</s-en></p>
<h2>Être poli</h2>
<p>L'impératif peut sembler sec. On l'adoucit avec <b>please</b>, ou on utilise une question :</p>
<p><s-en>Close the door, please.</s-en> → <s-en>Could you close the door, please?</s-en> (plus poli)</p>
<div class="tip">L'impératif est partout : recettes, itinéraires, modes d'emploi, panneaux. Au TOEIC, les consignes et les annonces en sont pleines.</div>
`,
  examples: [
    ["Come in and sit down.", "Entre et assieds-toi."],
    ["Don't forget your keys!", "N'oublie pas tes clés !"],
    ["Let's take a break.", "Faisons une pause."],
    ["Go straight on, then turn right.", "Allez tout droit, puis tournez à droite."],
    ["Please call me back.", "Rappelle-moi, s'il te plaît."]
  ],
  quiz: [
    { q: "« Ne t'inquiète pas ! » :", o: ["Not worry!", "Don't worry!", "No worry you!"], a: 1, ex: "Négation de l'impératif : Don't + verbe." },
    { q: "« Allons au cinéma ! » :", o: ["Let's go to the cinema!", "Let go to the cinema!", "We go to cinema!"], a: 0, ex: "Let's = let us." },
    { q: "La version la plus polie :", o: ["Give me the salt.", "Could you pass me the salt, please?"], a: 1, ex: "Une question avec could + please est très polie." },
    { q: "« N'en parlons pas » :", o: ["Let's don't talk about it.", "Let's not talk about it."], a: 1, ex: "Let's not + verbe." }
  ]
},
{
  id: 61, after: 12, level: "A2", icon: "dumbbell",
  title: "Could et was able to : la capacité au passé",
  subtitle: "Je savais nager / J'ai réussi à nager jusqu'à la plage.",
  body: `
<h2>Could : une capacité générale dans le passé</h2>
<p><s-en>I could swim when I was five.</s-en> (Je savais nager à cinq ans.)</p>
<p><s-en>She could speak three languages.</s-en></p>
<h2>Was able to / managed to : une réussite précise</h2>
<p>Pour une action réussie à un moment précis (souvent malgré une difficulté), on n'utilise pas « could » :</p>
<p><s-en>The sea was rough, but we were able to swim to the beach.</s-en></p>
<p><s-en>I managed to finish on time.</s-en> (J'ai réussi à finir à temps.)</p>
<h2>À la négation : couldn't marche toujours</h2>
<p><s-en>I couldn't sleep last night.</s-en> · <s-en>We couldn't find the hotel.</s-en></p>
<h2>Au futur et au present perfect</h2>
<p>Can n'a pas de futur ni de participe : on utilise <b>be able to</b>.</p>
<p><s-en>I'll be able to help you tomorrow.</s-en> · <s-en>I haven't been able to call her.</s-en></p>
<div class="tip">Avec les verbes de perception (see, hear, smell…), « could » est très naturel : <s-en>I could hear music.</s-en> (J'entendais de la musique.)</div>
`,
  examples: [
    ["I couldn't sleep last night.", "Je n'ai pas réussi à dormir cette nuit."],
    ["She could read when she was four.", "Elle savait lire à quatre ans."],
    ["We managed to get tickets!", "On a réussi à avoir des billets !"],
    ["Will you be able to come?", "Est-ce que tu pourras venir ?"],
    ["I could hear the sea from my room.", "J'entendais la mer depuis ma chambre."]
  ],
  quiz: [
    { q: "« Je savais lire à 5 ans » :", o: ["I could read when I was five.", "I was able to reading at five."], a: 0, ex: "Capacité générale → could." },
    { q: "« Malgré la neige, nous avons réussi à arriver » :", o: ["Despite the snow, we could arrive.", "Despite the snow, we managed to arrive."], a: 1, ex: "Réussite précise → managed to / was able to." },
    { q: "« Je pourrai t'aider demain » :", o: ["I'll can help you tomorrow.", "I'll be able to help you tomorrow."], a: 1, ex: "Can n'a pas de futur : will be able to." },
    { q: "« Je n'ai pas trouvé mes clés » (je n'ai pas réussi) :", o: ["I couldn't find my keys.", "I didn't could find my keys."], a: 0, ex: "Couldn't + verbe." }
  ]
},
{
  id: 60, after: 15, level: "A2", icon: "user-round",
  title: "Myself, yourself : les pronoms réfléchis",
  subtitle: "Et pourquoi « se lever » n'est pas réfléchi en anglais.",
  body: `
<table>
<tr><th>Sujet</th><th>Réfléchi</th></tr>
<tr><td>I</td><td>myself</td></tr>
<tr><td>you</td><td>yourself (un) / yourselves (plusieurs)</td></tr>
<tr><td>he / she / it</td><td>himself / herself / itself</td></tr>
<tr><td>we</td><td>ourselves</td></tr>
<tr><td>they</td><td>themselves</td></tr>
</table>
<h2>Quand les utiliser</h2>
<ul>
<li>Quand le sujet fait l'action sur lui-même : <s-en>I cut myself.</s-en> · <s-en>Enjoy yourselves!</s-en></li>
<li>Pour dire « moi-même », « tout seul » : <s-en>I made it myself.</s-en> · <s-en>She lives by herself.</s-en></li>
</ul>
<h2>Le grand piège : beaucoup de verbes pronominaux français ne le sont pas en anglais</h2>
<table>
<tr><th>Français</th><th>Anglais</th></tr>
<tr><td>se lever</td><td>get up</td></tr>
<tr><td>se souvenir</td><td>remember</td></tr>
<tr><td>se sentir</td><td>feel</td></tr>
<tr><td>se dépêcher</td><td>hurry</td></tr>
<tr><td>se détendre</td><td>relax</td></tr>
<tr><td>se marier</td><td>get married</td></tr>
<tr><td>s'appeler</td><td>be called</td></tr>
</table>
<div class="warn">On dit <s-en>I feel tired.</s-en> et jamais « I feel myself tired ». Et <s-en>Relax!</s-en>, pas « relax yourself ».</div>
<h2>Each other : l'un l'autre</h2>
<p>« Ils s'aiment » = <s-en>They love each other.</s-en> (et pas « themselves », qui voudrait dire que chacun s'aime lui-même !)</p>
`,
  examples: [
    ["I taught myself to play the guitar.", "J'ai appris la guitare toute seule."],
    ["Help yourself!", "Sers-toi !"],
    ["She lives by herself.", "Elle vit seule."],
    ["We've known each other for years.", "On se connaît depuis des années."],
    ["I don't feel well.", "Je ne me sens pas bien."]
  ],
  quiz: [
    { q: "« Je me sens fatiguée » :", o: ["I feel myself tired.", "I feel tired."], a: 1, ex: "Feel n'est pas réfléchi en anglais." },
    { q: "« Ils se parlent tous les jours » :", o: ["They talk to themselves every day.", "They talk to each other every day."], a: 1, ex: "L'un à l'autre = each other." },
    { q: "« Amusez-vous bien ! » (à plusieurs) :", o: ["Enjoy yourselves!", "Enjoy yourself!", "Enjoy you!"], a: 0, ex: "Plusieurs personnes → yourselves." },
    { q: "« Je l'ai fait moi-même » :", o: ["I did it me.", "I did it myself."], a: 1, ex: "Moi-même = myself." }
  ]
},
{
  id: 58, after: 16, level: "A2", icon: "ruler",
  title: "Too et enough : trop, assez",
  subtitle: "Trop cher, pas assez grand, trop de monde.",
  body: `
<h2>Too : trop (avec un problème)</h2>
<p><b>too</b> + adjectif : <s-en>It's too expensive.</s-en> · <s-en>You're driving too fast.</s-en></p>
<p><b>too much</b> + indénombrable, <b>too many</b> + pluriel : <s-en>too much noise</s-en> · <s-en>too many people</s-en></p>
<h2>Enough : assez</h2>
<p>Attention à la place ! <b>adjectif + enough</b>, mais <b>enough + nom</b> :</p>
<p><s-en>It isn't big enough.</s-en> (pas assez grand)</p>
<p><s-en>We don't have enough time.</s-en> (pas assez de temps)</p>
<h2>Avec un verbe : to</h2>
<p><s-en>It's too cold to swim.</s-en> (trop froid pour nager)</p>
<p><s-en>She's old enough to drive.</s-en> (assez âgée pour conduire)</p>
<div class="warn">« Trop » n'est pas toujours négatif en français (« c'est trop bien ! »). En anglais, <b>too</b> exprime toujours un problème. Pour « c'est trop bien », on dit <s-en>It's so good!</s-en> ou <s-en>It's really good!</s-en></div>
`,
  examples: [
    ["This coffee is too hot.", "Ce café est trop chaud."],
    ["There are too many people here.", "Il y a trop de monde ici."],
    ["I don't have enough money.", "Je n'ai pas assez d'argent."],
    ["Is the room big enough?", "La pièce est-elle assez grande ?"],
    ["It's too late to call him.", "Il est trop tard pour l'appeler."]
  ],
  quiz: [
    { q: "« Pas assez chaud » :", o: ["not enough warm", "not warm enough"], a: 1, ex: "Adjectif + enough." },
    { q: "« Trop de voitures » :", o: ["too much cars", "too many cars"], a: 1, ex: "Cars se compte → too many." },
    { q: "« Assez de temps » :", o: ["enough time", "time enough"], a: 0, ex: "Enough + nom." },
    { q: "« Ce film est trop bien ! » (enthousiasme) :", o: ["This film is too good!", "This film is so good!"], a: 1, ex: "Too = problème. Pour l'enthousiasme : so / really." }
  ]
},
{
  id: 59, after: 17, level: "A2", icon: "smile",
  title: "Bored ou boring ? Les adjectifs en -ed et -ing",
  subtitle: "Une erreur qui peut te faire dire le contraire de ce que tu penses.",
  body: `
<p>Beaucoup d'adjectifs existent en deux versions :</p>
<ul>
<li><b>-ed</b> : ce que <b>la personne ressent</b>. <s-en>I'm bored.</s-en> (je m'ennuie)</li>
<li><b>-ing</b> : <b>ce qui provoque</b> le sentiment. <s-en>The film is boring.</s-en> (le film est ennuyeux)</li>
</ul>
<div class="warn">« I'm boring » veut dire « je suis ennuyeuse » ! Pour dire que tu t'ennuies : <s-en>I'm bored.</s-en></div>
<table>
<tr><th>Ressenti (-ed)</th><th>Cause (-ing)</th></tr>
<tr><td>interested</td><td>interesting</td></tr>
<tr><td>tired</td><td>tiring</td></tr>
<tr><td>excited</td><td>exciting</td></tr>
<tr><td>surprised</td><td>surprising</td></tr>
<tr><td>confused</td><td>confusing</td></tr>
<tr><td>embarrassed</td><td>embarrassing</td></tr>
<tr><td>disappointed</td><td>disappointing</td></tr>
<tr><td>relaxed</td><td>relaxing</td></tr>
</table>
<p><s-en>I'm interested in art. Art is interesting.</s-en></p>
<p><s-en>The trip was tiring, so we were very tired.</s-en></p>
`,
  examples: [
    ["I'm really excited about the trip.", "Je suis vraiment impatiente de faire ce voyage."],
    ["The news was very surprising.", "La nouvelle était très surprenante."],
    ["I was so embarrassed!", "J'étais tellement gênée !"],
    ["This grammar is confusing.", "Cette grammaire est déroutante."],
    ["A hot bath is very relaxing.", "Un bain chaud, c'est très relaxant."]
  ],
  quiz: [
    { q: "« Je m'ennuie » :", o: ["I'm boring.", "I'm bored."], a: 1, ex: "Ce que je ressens → -ed." },
    { q: "« Ce livre est passionnant » :", o: ["This book is exciting.", "This book is excited."], a: 0, ex: "Ce qui provoque → -ing." },
    { q: "« Je suis intéressée par le design » :", o: ["I'm interesting in design.", "I'm interested in design."], a: 1, ex: "Ressenti → interested (in)." },
    { q: "« Une journée fatigante » :", o: ["a tired day", "a tiring day"], a: 1, ex: "La journée provoque la fatigue → tiring." }
  ]
},
{
  id: 62, after: 19, level: "A2", icon: "circle-help",
  title: "Who called you? / Who did you call?",
  subtitle: "Questions sur le sujet ou sur le complément.",
  body: `
<p>Avec <b>who</b> et <b>what</b>, il y a deux sortes de questions, et la différence change tout.</p>
<h2>Question sur le sujet : pas de do / did</h2>
<p>On cherche <b>qui fait l'action</b>. L'ordre reste celui d'une phrase normale :</p>
<p><s-en>Who called you?</s-en> (Qui t'a appelée ? → Tom m'a appelée.)</p>
<p><s-en>What happened?</s-en> (Qu'est-ce qui s'est passé ?)</p>
<p><s-en>Who lives here?</s-en></p>
<h2>Question sur le complément : avec do / did</h2>
<p>On cherche <b>qui subit l'action</b> :</p>
<p><s-en>Who did you call?</s-en> (Qui as-tu appelé ? → J'ai appelé Tom.)</p>
<p><s-en>What did you buy?</s-en></p>
<table>
<tr><th>Question</th><th>Réponse</th></tr>
<tr><td>Who saw Anna?</td><td>Tom saw Anna.</td></tr>
<tr><td>Who did Anna see?</td><td>Anna saw Tom.</td></tr>
</table>
<div class="warn">On ne dit jamais « What did happen? » ni « Who did call you? » pour une question sur le sujet.</div>
<h2>La préposition à la fin</h2>
<p>En anglais courant : <s-en>Who are you talking to?</s-en> · <s-en>What are you looking for?</s-en> · <s-en>Where are you from?</s-en></p>
`,
  examples: [
    ["What happened?", "Qu'est-ce qui s'est passé ?"],
    ["Who told you that?", "Qui t'a dit ça ?"],
    ["Who did you meet at the party?", "Qui as-tu rencontré à la fête ?"],
    ["What made you laugh?", "Qu'est-ce qui t'a fait rire ?"],
    ["Who are you waiting for?", "Qui attends-tu ?"]
  ],
  quiz: [
    { q: "« Qu'est-ce qui s'est passé ? » :", o: ["What did happen?", "What happened?"], a: 1, ex: "Question sur le sujet → pas de did." },
    { q: "« Qui as-tu vu ? » :", o: ["Who saw you?", "Who did you see?"], a: 1, ex: "Question sur le complément → did." },
    { q: "« Qui a cassé la tasse ? » :", o: ["Who broke the cup?", "Who did break the cup?"], a: 0, ex: "On cherche le sujet → ordre normal." },
    { q: "« Avec qui travailles-tu ? » (naturel) :", o: ["With who you work?", "Who do you work with?"], a: 1, ex: "La préposition se place en fin de question." }
  ]
},
{
  id: 63, after: 29, level: "B1", icon: "message-circle-question",
  title: "Could you tell me where…? : les questions indirectes",
  subtitle: "Poser une question poliment (indispensable au travail).",
  body: `
<p>Pour être plus poli, on « emballe » la question dans une formule : <b>Could you tell me…? Do you know…? I was wondering…</b></p>
<h2>L'ordre des mots redevient normal</h2>
<table>
<tr><th>Question directe</th><th>Question indirecte</th></tr>
<tr><td>Where is the station?</td><td>Could you tell me where the station is?</td></tr>
<tr><td>What time does it open?</td><td>Do you know what time it opens?</td></tr>
<tr><td>Why did she leave?</td><td>I wonder why she left.</td></tr>
</table>
<div class="warn">Dans la question indirecte : pas d'inversion, pas de do / does / did. <s-en>Do you know where he lives?</s-en> et jamais « where does he live ».</div>
<h2>Questions fermées : if / whether</h2>
<p>« Is it free? » → <s-en>Do you know if it's free?</s-en></p>
<p>« Can I pay by card? » → <s-en>Could you tell me whether I can pay by card?</s-en></p>
<h2>Les formules les plus utiles</h2>
<ul>
<li><s-en>Could you tell me…?</s-en> (Pourriez-vous me dire… ?)</li>
<li><s-en>Do you happen to know…?</s-en> (Sauriez-vous par hasard… ?)</li>
<li><s-en>I was wondering if you could help me.</s-en> (très poli, très courant à l'écrit pro)</li>
<li><s-en>Would you mind telling me…?</s-en></li>
</ul>
`,
  examples: [
    ["Could you tell me where the toilets are?", "Pourriez-vous m'indiquer où sont les toilettes ?"],
    ["Do you know what time the shop closes?", "Savez-vous à quelle heure ferme le magasin ?"],
    ["I was wondering if you could help me.", "Je me demandais si vous pourriez m'aider."],
    ["Do you know if she's coming?", "Tu sais si elle vient ?"],
    ["I'm not sure what he means.", "Je ne suis pas sûre de ce qu'il veut dire."]
  ],
  quiz: [
    { q: "« Savez-vous où il habite ? » :", o: ["Do you know where does he live?", "Do you know where he lives?"], a: 1, ex: "Question indirecte → ordre normal, pas de does." },
    { q: "« Pourriez-vous me dire combien ça coûte ? » :", o: ["Could you tell me how much it costs?", "Could you tell me how much does it cost?"], a: 0, ex: "Pas d'auxiliaire dans la question indirecte." },
    { q: "« Tu sais si c'est ouvert ? » :", o: ["Do you know is it open?", "Do you know if it's open?"], a: 1, ex: "Question fermée → if / whether." },
    { q: "La formule la plus polie :", o: ["Help me.", "I was wondering if you could help me."], a: 1, ex: "I was wondering if… est très poli." }
  ]
},
{
  id: 64, after: 30, level: "B1", icon: "link",
  title: "Depend on, good at : les prépositions qui suivent",
  subtitle: "Ces petits mots qu'on ne peut pas deviner.",
  body: `
<p>Certains verbes et adjectifs sont toujours suivis de la même préposition, et elle ne correspond souvent pas au français. Il faut les apprendre comme un bloc.</p>
<h2>Verbes + préposition</h2>
<table>
<tr><th>Anglais</th><th>Français</th></tr>
<tr><td>depend on</td><td>dépendre de</td></tr>
<tr><td>listen to</td><td>écouter (quelque chose)</td></tr>
<tr><td>wait for</td><td>attendre (quelqu'un)</td></tr>
<tr><td>look for</td><td>chercher</td></tr>
<tr><td>pay for</td><td>payer (quelque chose)</td></tr>
<tr><td>apply for</td><td>postuler à</td></tr>
<tr><td>agree with</td><td>être d'accord avec</td></tr>
<tr><td>think about / of</td><td>penser à</td></tr>
<tr><td>arrive in (ville) / at (lieu)</td><td>arriver à</td></tr>
</table>
<h2>Adjectifs + préposition</h2>
<table>
<tr><th>Anglais</th><th>Français</th></tr>
<tr><td>good at / bad at</td><td>doué(e) / nul(le) en</td></tr>
<tr><td>interested in</td><td>intéressé(e) par</td></tr>
<tr><td>afraid of</td><td>avoir peur de</td></tr>
<tr><td>proud of</td><td>fier de</td></tr>
<tr><td>responsible for</td><td>responsable de</td></tr>
<tr><td>married to</td><td>marié(e) à</td></tr>
<tr><td>different from</td><td>différent de</td></tr>
<tr><td>similar to</td><td>similaire à</td></tr>
</table>
<div class="warn">Pièges fréquents : <s-en>It depends on the weather.</s-en> (pas « depends of ») · <s-en>I'm waiting for you.</s-en> (pas « waiting you ») · <s-en>Listen to me.</s-en> (pas « listen me »).</div>
<div class="tip">Ces associations sont un grand classique de la partie 5 du TOEIC. Le meilleur moyen de les retenir : des phrases entières, apprises à voix haute.</div>
`,
  examples: [
    ["It depends on the price.", "Ça dépend du prix."],
    ["I'm waiting for the bus.", "J'attends le bus."],
    ["She's very good at maths.", "Elle est très forte en maths."],
    ["I'm proud of you.", "Je suis fière de toi."],
    ["Who's responsible for this project?", "Qui est responsable de ce projet ?"],
    ["We arrived in London at noon.", "Nous sommes arrivés à Londres à midi."]
  ],
  quiz: [
    { q: "« Ça dépend de toi » :", o: ["It depends of you.", "It depends on you."], a: 1, ex: "Depend on." },
    { q: "« Elle est douée en dessin » :", o: ["She's good in drawing.", "She's good at drawing."], a: 1, ex: "Good at + -ing." },
    { q: "« J'attends ta réponse » :", o: ["I'm waiting your answer.", "I'm waiting for your answer."], a: 1, ex: "Wait for." },
    { q: "« Je postule à ce poste » :", o: ["I'm applying for this job.", "I'm applying to this job."], a: 0, ex: "Apply for a job (apply to a company)." },
    { q: "« Nous sommes arrivés à la gare » :", o: ["We arrived to the station.", "We arrived at the station."], a: 1, ex: "Arrive at + lieu précis (jamais « arrive to »)." }
  ]
},
{
  id: 65, after: 31, level: "B1", icon: "chart-pie",
  title: "All, most, some, none of : parler de proportions",
  subtitle: "La plupart des gens, aucun d'entre eux, la moitié du temps.",
  body: `
<h2>Most : le piège n°1</h2>
<p>« La plupart des gens » = <s-en>most people</s-en> (sans « the », sans « of »).</p>
<p>Mais si on parle d'un groupe précis : <s-en>most of the people I know</s-en>, <s-en>most of my friends</s-en>.</p>
<div class="warn">Jamais « the most of people ». Et « la plupart du temps » = <s-en>most of the time</s-en>.</div>
<h2>Les quantificateurs + of + groupe précis</h2>
<table>
<tr><th>Anglais</th><th>Français</th></tr>
<tr><td>all of them</td><td>tous</td></tr>
<tr><td>most of them</td><td>la plupart</td></tr>
<tr><td>some of them</td><td>certains</td></tr>
<tr><td>a few of them</td><td>quelques-uns</td></tr>
<tr><td>half of them</td><td>la moitié</td></tr>
<tr><td>none of them</td><td>aucun</td></tr>
<tr><td>both of them</td><td>les deux</td></tr>
</table>
<p>Avec un pronom, <b>of</b> est obligatoire : <s-en>all of us</s-en>, <s-en>none of them</s-en>.</p>
<h2>No, none, any</h2>
<p><s-en>There's no milk.</s-en> (no + nom) · <s-en>None of the answers is correct.</s-en> (none of + groupe) · <s-en>Is there any coffee left? — No, there's none.</s-en></p>
<div class="tip">Ces structures reviennent énormément dans les graphiques et rapports (TOEIC partie 7) : <s-en>Most of the respondents said…</s-en>, <s-en>Half of the staff…</s-en></div>
`,
  examples: [
    ["Most people like music.", "La plupart des gens aiment la musique."],
    ["Most of my friends live in Paris.", "La plupart de mes amis habitent à Paris."],
    ["None of us knew the answer.", "Aucun d'entre nous ne connaissait la réponse."],
    ["Half of the staff work from home.", "La moitié du personnel télétravaille."],
    ["I spend most of the time reading.", "Je passe la plupart du temps à lire."]
  ],
  quiz: [
    { q: "« La plupart des gens » :", o: ["the most of people", "most people", "most of people"], a: 1, ex: "Généralité → most people." },
    { q: "« La plupart de mes collègues » :", o: ["most my colleagues", "most of my colleagues"], a: 1, ex: "Groupe précis → most of my…" },
    { q: "« Aucun d'eux n'est venu » :", o: ["No of them came.", "None of them came."], a: 1, ex: "None of + pronom." },
    { q: "« Nous tous » :", o: ["all us", "all of us"], a: 1, ex: "Avec un pronom, of est obligatoire." }
  ]
},
{
  id: 66, after: 34, level: "B1", icon: "messages-square",
  title: "Say, tell, speak, talk… et make ou do",
  subtitle: "Les verbes qu'on confond le plus.",
  body: `
<h2>Say, tell, speak, talk</h2>
<table>
<tr><th>Verbe</th><th>Usage</th><th>Exemple</th></tr>
<tr><td>say</td><td>dire quelque chose (les mots)</td><td>She said hello.</td></tr>
<tr><td>tell</td><td>dire à quelqu'un, raconter</td><td>Tell me the truth. Tell a story.</td></tr>
<tr><td>speak</td><td>parler (une langue, en public, formel)</td><td>Do you speak English?</td></tr>
<tr><td>talk</td><td>parler, discuter (conversation)</td><td>We talked for hours.</td></tr>
</table>
<p>Expressions figées avec tell : <s-en>tell the truth</s-en>, <s-en>tell a lie</s-en>, <s-en>tell a joke</s-en>, <s-en>tell the time</s-en>.</p>
<h2>Make ou do ?</h2>
<p>Règle générale : <b>make</b> = créer, fabriquer, produire quelque chose. <b>do</b> = faire une activité, une tâche.</p>
<table>
<tr><th>Make</th><th>Do</th></tr>
<tr><td>make a cake, make a decision</td><td>do your homework, do the shopping</td></tr>
<tr><td>make a mistake, make money</td><td>do a job, do business</td></tr>
<tr><td>make a phone call, make friends</td><td>do sport, do your best</td></tr>
<tr><td>make an appointment, make progress</td><td>do someone a favour, do research</td></tr>
</table>
<div class="tip">Au TOEIC, « make an appointment », « make a reservation », « do business with » et « make a decision » tombent très souvent.</div>
`,
  examples: [
    ["What did she say?", "Qu'est-ce qu'elle a dit ?"],
    ["Can you tell me a story?", "Tu peux me raconter une histoire ?"],
    ["I'd like to speak to the manager.", "Je voudrais parler au responsable."],
    ["We need to talk.", "Il faut qu'on parle."],
    ["I made a mistake.", "J'ai fait une erreur."],
    ["Could you do me a favour?", "Tu pourrais me rendre un service ?"]
  ],
  quiz: [
    { q: "« Dis-moi ce qui s'est passé » :", o: ["Say me what happened.", "Tell me what happened."], a: 1, ex: "Dire à quelqu'un → tell." },
    { q: "« Prendre rendez-vous » :", o: ["do an appointment", "make an appointment", "take an appointment"], a: 1, ex: "Make an appointment." },
    { q: "« Faire les courses » :", o: ["make the shopping", "do the shopping"], a: 1, ex: "Une tâche → do." },
    { q: "« Il parle trois langues » :", o: ["He talks three languages.", "He speaks three languages."], a: 1, ex: "Une langue → speak." },
    { q: "« Gagner de l'argent » :", o: ["make money", "do money", "win money"], a: 0, ex: "Make money (win = gagner au jeu)." }
  ]
},
{
  id: 67, after: 38, level: "B2", icon: "rewind",
  title: "Le futur dans le passé : I was going to…",
  subtitle: "Les projets qui n'ont pas eu lieu, et les prédictions d'hier.",
  body: `
<h2>Was / were going to : un projet passé (souvent annulé)</h2>
<p><s-en>I was going to call you, but I forgot.</s-en> (J'allais t'appeler, mais j'ai oublié.)</p>
<p><s-en>We were going to move to Spain.</s-en></p>
<h2>Would : le futur vu depuis le passé</h2>
<p>Dans un récit au passé, « will » devient « would » :</p>
<p><s-en>I knew you would like it.</s-en> (Je savais que tu aimerais.)</p>
<p><s-en>She promised she would come.</s-en></p>
<h2>Was about to : être sur le point de</h2>
<p><s-en>I was about to leave when you called.</s-en></p>
<h2>Was supposed to : était censé</h2>
<p><s-en>The meeting was supposed to start at nine.</s-en> (et ça n'a pas été le cas)</p>
<div class="tip">Ces structures sont très naturelles pour s'excuser ou expliquer un changement de plan : <s-en>I was going to send the report today, but…</s-en></div>
`,
  examples: [
    ["I was going to tell you, I promise.", "J'allais te le dire, je te le promets."],
    ["I never thought I would live abroad.", "Je n'aurais jamais pensé vivre à l'étranger."],
    ["We were about to give up.", "On était sur le point d'abandonner."],
    ["The train was supposed to arrive at six.", "Le train était censé arriver à six heures."],
    ["He said he would help us.", "Il a dit qu'il nous aiderait."]
  ],
  quiz: [
    { q: "« J'allais partir, mais il a commencé à pleuvoir » :", o: ["I will leave, but…", "I was going to leave, but…"], a: 1, ex: "Projet passé non réalisé → was going to." },
    { q: "« Je savais qu'elle réussirait » :", o: ["I knew she will succeed.", "I knew she would succeed."], a: 1, ex: "Futur dans le passé → would." },
    { q: "« J'étais sur le point de t'écrire » :", o: ["I was about to write to you.", "I was near to write you."], a: 0, ex: "Be about to = être sur le point de." },
    { q: "« La livraison était censée arriver hier » :", o: ["The delivery was supposed to arrive yesterday.", "The delivery would arrive yesterday."], a: 0, ex: "Was supposed to = était censé." }
  ]
},
{
  id: 68, after: 36, level: "B2", icon: "chart-line",
  title: "Comparer avec finesse : the more…, the more",
  subtitle: "Far better, twice as much, getting better and better.",
  body: `
<h2>Plus…, plus… : the + comparatif, the + comparatif</h2>
<p><s-en>The more you practise, the better you get.</s-en> (Plus tu pratiques, plus tu progresses.)</p>
<p><s-en>The sooner, the better.</s-en> (Le plus tôt sera le mieux.)</p>
<h2>De plus en plus : comparatif + and + comparatif</h2>
<p><s-en>My English is getting better and better.</s-en> · <s-en>It's becoming more and more expensive.</s-en></p>
<h2>Nuancer l'écart</h2>
<table>
<tr><th>Écart</th><th>Exemples</th></tr>
<tr><td>grand</td><td>much / far / a lot better, by far the best</td></tr>
<tr><td>petit</td><td>slightly / a bit / a little cheaper</td></tr>
<tr><td>multiplicateur</td><td>twice as big as, three times more expensive</td></tr>
<tr><td>égalité niée</td><td>not nearly as good as, nowhere near as fast as</td></tr>
</table>
<div class="warn">« Deux fois plus grand que » = <s-en>twice as big as</s-en> (et pas « two times bigger than », qu'on entend mais qui est moins correct à l'écrit).</div>
<div class="tip">Ces structures sont précieuses pour commenter un graphique ou comparer des offres (TOEIC partie 7, et à l'oral au travail).</div>
`,
  examples: [
    ["The more I read, the more I understand.", "Plus je lis, plus je comprends."],
    ["It's getting colder and colder.", "Il fait de plus en plus froid."],
    ["This one is far better.", "Celui-ci est bien meilleur."],
    ["Sales were slightly higher than last year.", "Les ventes ont été légèrement plus élevées que l'an dernier."],
    ["Their flat is twice as big as ours.", "Leur appartement est deux fois plus grand que le nôtre."]
  ],
  quiz: [
    { q: "« Plus c'est simple, mieux c'est » :", o: ["The simpler, the better.", "More simple, more better."], a: 0, ex: "The + comparatif, the + comparatif." },
    { q: "« De plus en plus cher » :", o: ["more and more expensive", "most and most expensive"], a: 0, ex: "More and more + adjectif long." },
    { q: "« Bien meilleur » :", o: ["very better", "far better"], a: 1, ex: "On ne dit pas « very » devant un comparatif : much / far." },
    { q: "« Deux fois plus grand que » :", o: ["twice as big as", "two times as big than"], a: 0, ex: "Twice as … as." }
  ]
},
{
  id: 69, after: 43, level: "B2", icon: "a-large-small",
  title: "Les articles : les vrais pièges",
  subtitle: "The ou rien ? Les cas où même les bons élèves se trompent.",
  body: `
<h2>Rappel : pas d'article pour les généralités</h2>
<p><s-en>Life is short.</s-en> · <s-en>I love art.</s-en> · <s-en>Women earn less than men.</s-en></p>
<h2>Institutions : go to school / go to the school</h2>
<p>Sans article quand on y va pour leur fonction : <s-en>go to school</s-en>, <s-en>be in hospital</s-en> (UK), <s-en>go to bed</s-en>, <s-en>go to church</s-en>, <s-en>be in prison</s-en>.</p>
<p>Avec « the » quand on parle du bâtiment : <s-en>I went to the school to pick up my son.</s-en></p>
<h2>Géographie</h2>
<table>
<tr><th>Sans article</th><th>Avec the</th></tr>
<tr><td>France, Japan, London</td><td>the UK, the USA, the Netherlands</td></tr>
<tr><td>Lake Geneva, Mount Everest</td><td>the Alps, the Thames, the Atlantic</td></tr>
<tr><td>Oxford Street</td><td>the Eiffel Tower, the British Museum</td></tr>
</table>
<h2>The + adjectif = un groupe de personnes</h2>
<p><s-en>the rich</s-en> (les riches), <s-en>the elderly</s-en> (les personnes âgées), <s-en>the unemployed</s-en> (les chômeurs). Verbe au pluriel : <s-en>The elderly are…</s-en></p>
<h2>Repas, moyens de transport, langues : pas d'article</h2>
<p><s-en>have lunch</s-en>, <s-en>by car</s-en>, <s-en>by train</s-en>, <s-en>She speaks Italian.</s-en></p>
<div class="tip">Et toujours <b>the</b> devant les superlatifs et les ordinaux : <s-en>the best</s-en>, <s-en>the first time</s-en>.</div>
`,
  examples: [
    ["Children should go to school.", "Les enfants doivent aller à l'école."],
    ["She lives in the Netherlands.", "Elle vit aux Pays-Bas."],
    ["We went skiing in the Alps.", "Nous sommes allés skier dans les Alpes."],
    ["The unemployed need more support.", "Les chômeurs ont besoin de plus de soutien."],
    ["I usually go to work by bike.", "En général, je vais au travail à vélo."]
  ],
  quiz: [
    { q: "« Elle vit aux États-Unis » :", o: ["She lives in USA.", "She lives in the USA."], a: 1, ex: "États (pluriel) → the USA." },
    { q: "« Je vais au lit » :", o: ["I'm going to the bed.", "I'm going to bed."], a: 1, ex: "Fonction → pas d'article." },
    { q: "« Les riches » :", o: ["the rich", "the riches", "rich people's"], a: 0, ex: "The + adjectif, invariable." },
    { q: "« Le lac Léman » :", o: ["the Lake Geneva", "Lake Geneva"], a: 1, ex: "Les lacs : pas d'article." },
    { q: "« En voiture » :", o: ["by the car", "by car"], a: 1, ex: "Moyen de transport → by + nom seul." }
  ]
},
{
  id: 70, after: 52, level: "C1", icon: "puzzle",
  title: "Noms et adjectifs composés : a ten-minute walk",
  subtitle: "Condenser l'information comme les anglophones.",
  body: `
<h2>Nombre + nom = adjectif (au singulier !)</h2>
<p><s-en>a walk of ten minutes</s-en> → <s-en>a ten-minute walk</s-en></p>
<p><s-en>a five-star hotel</s-en>, <s-en>a two-hour meeting</s-en>, <s-en>a three-year contract</s-en>, <s-en>a 20-page report</s-en></p>
<div class="warn">Le nom reste au singulier quand il devient adjectif : « a ten-minutes walk » est faux.</div>
<h2>Les adjectifs composés courants</h2>
<table>
<tr><th>Composé</th><th>Sens</th></tr>
<tr><td>well-known, well-paid</td><td>connu, bien payé</td></tr>
<tr><td>long-term, short-term</td><td>à long terme, à court terme</td></tr>
<tr><td>time-consuming</td><td>chronophage</td></tr>
<tr><td>self-employed, self-confident</td><td>à son compte, sûr de soi</td></tr>
<tr><td>user-friendly</td><td>facile à utiliser</td></tr>
<tr><td>high-quality, low-cost</td><td>de haute qualité, à bas prix</td></tr>
<tr><td>open-minded, short-sighted</td><td>ouvert d'esprit, qui manque de vision</td></tr>
</table>
<h2>Nom + nom : le premier décrit le second</h2>
<p><s-en>a coffee cup</s-en> (une tasse à café) ≠ <s-en>a cup of coffee</s-en> (une tasse de café)</p>
<p><s-en>a customer service manager</s-en> : le manager du service client. On lit de droite à gauche !</p>
<h2>Le trait d'union</h2>
<p>Avant le nom : <s-en>a well-known designer</s-en>. Après le verbe être, souvent sans : <s-en>The designer is well known.</s-en></p>
`,
  examples: [
    ["It's a ten-minute walk from the station.", "C'est à dix minutes à pied de la gare."],
    ["She signed a two-year contract.", "Elle a signé un contrat de deux ans."],
    ["The app is very user-friendly.", "L'appli est très facile à utiliser."],
    ["It's a time-consuming process.", "C'est un processus chronophage."],
    ["We need a long-term solution.", "Il nous faut une solution à long terme."]
  ],
  quiz: [
    { q: "« Une réunion de deux heures » :", o: ["a two-hours meeting", "a two-hour meeting"], a: 1, ex: "Le nom-adjectif reste au singulier." },
    { q: "« Une tasse de thé » (pleine) :", o: ["a tea cup", "a cup of tea"], a: 1, ex: "A tea cup = une tasse à thé (l'objet)." },
    { q: "« Un auteur très connu » :", o: ["a very well-known author", "a very known-well author"], a: 0, ex: "Well-known, avec trait d'union devant le nom." },
    { q: "« Chronophage » :", o: ["time-eating", "time-consuming"], a: 1, ex: "Time-consuming." }
  ]
}
);
