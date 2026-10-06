/* Unité B1 « The great outdoors » (b1-8), complète : leçons 159-160 et leurs exercices, texte, atelier d'écoute,
   jeu de rôle, sujet d'oral et guide d'écriture (pas d'atelier de langue au B1, comme les autres unités du niveau).
   Placée après Travel stories ; elle reprend le thème météo (meteoB1) et le texte roadtrip de b1-2.
   Personnes fictives. Faits vérifiables seulement : droit d'accès à la nature en Norvège (une ou deux nuits, à 150 m
   au moins des maisons), droit d'accès écossais depuis 2005, permis de camping près du Loch Lomond de mars à
   septembre, camping sauvage en principe interdit en Angleterre et au pays de Galles sauf à Dartmoor. */
(function () {
  const W = window;

  W.VOCAB.push({ id: "outdoorsB1", icon: "mountain", title: "The great outdoors", title_fr: "Au grand air", level: "B1", words: [
    ["to go for a hike", "faire une randonnée", "We went for a hike in the hills."],
    ["a trail", "un sentier (balisé)", "Follow the trail along the river."],
    ["a campsite", "un camping", "The campsite was full in August."],
    ["to pitch a tent", "monter une tente", "We pitched our tent near the lake."],
    ["a sleeping bag", "un sac de couchage", "My sleeping bag wasn't warm enough."],
    ["a rucksack", "un sac à dos (US : a backpack)", "Don't carry too much in your rucksack."],
    ["a torch", "une lampe de poche (US : a flashlight)", "Take a torch: it gets dark early."],
    ["waterproof", "imperméable, étanche", "You'll need a waterproof jacket."],
    ["a blister", "une ampoule (au pied)", "My new boots gave me blisters."],
    ["steep", "raide, en pente forte", "The last part of the path is very steep."],
    ["slippery", "glissant", "The rocks are slippery after the rain."],
    ["a cliff", "une falaise", "Don't walk too close to the edge of the cliff."],
    ["the scenery", "le paysage", "The scenery in the mountains was beautiful."],
    ["muddy", "boueux", "The path was so muddy that we turned back."],
    ["a signpost", "un panneau indicateur", "We followed the signposts to the waterfall."],
    ["insect repellent", "un produit anti-moustiques", "Put on some insect repellent before dinner."],
    ["sunburn", "un coup de soleil", "I got terrible sunburn on my neck."],
    ["a campfire", "un feu de camp", "We sat around the campfire and told stories."],
    ["a ranger", "un garde (de parc naturel)", "Ask the ranger if the trail is open."],
    ["to turn back", "faire demi-tour", "The fog was so thick that we had to turn back."]
  ] });

  W.LESSONS.push(
  {
    id: 159, after: 95, level: "B1", icon: "signpost",
    title: "Have to, don't have to, be allowed to: rules and permission", title_fr: "Have to, don't have to, be allowed to : règles et autorisations",
    subtitle: "Say what's necessary, what's optional and what's forbidden, today and in the past.", subtitle_fr: "Dire ce qui est obligatoire, facultatif ou interdit, aujourd'hui et dans le passé.",
    body: `
<h2>Necessary, not necessary, forbidden, allowed</h2>
<table>
<tr><th>Meaning</th><th>Present</th><th>Past</th></tr>
<tr><td>Necessary</td><td><s-en>You have to pay.</s-en> · <s-en>You must pay.</s-en></td><td><s-en>We had to pay.</s-en></td></tr>
<tr><td>Not necessary (you can if you want)</td><td><s-en>You don't have to pay.</s-en> · <s-en>You don't need to pay.</s-en></td><td><s-en>We didn't have to pay.</s-en> · <s-en>We didn't need to pay.</s-en></td></tr>
<tr><td>Forbidden</td><td><s-en>You mustn't camp here.</s-en> · <s-en>You can't camp here.</s-en> · <s-en>You aren't allowed to camp here.</s-en></td><td><s-en>We couldn't camp there.</s-en> · <s-en>We weren't allowed to camp there.</s-en></td></tr>
<tr><td>Allowed</td><td><s-en>You can camp here.</s-en> · <s-en>You're allowed to camp here.</s-en></td><td><s-en>We could camp there.</s-en> · <s-en>We were allowed to camp there.</s-en></td></tr>
</table>
<h2>The big trap: mustn't is not the opposite of must</h2>
<p>Many languages use similar words for both ideas, but in English they are very different:</p>
<p><s-en>You mustn't swim here.</s-en> = it's forbidden, it's dangerous. · <s-en>You don't have to swim.</s-en> = it isn't necessary; you can if you want.</p>
<p>So: <s-en>Entry is free: you don't have to pay.</s-en> If you said <s-en>you mustn't pay</s-en>, paying would be against the rules!</p>
<h2>Be allowed to: permission and rules</h2>
<p><s-en>Be allowed to</s-en> is the passive of <s-en>allow</s-en>. The subject is the person: <s-en>I'm allowed to…</s-en>, <s-en>We weren't allowed to…</s-en>, <s-en>Are we allowed to…?</s-en></p>
<p>On signs and in rules, the subject is often the activity: <s-en>Camping is not allowed.</s-en> · <s-en>Dogs are allowed on a lead.</s-en></p>
<p>Don't say <s-en>It's not allowed to camp here</s-en>: say <s-en>You're not allowed to camp here</s-en> or <s-en>Camping is not allowed here</s-en>.</p>
<h2>Must has no past and no future</h2>
<p>Use <s-en>had to</s-en> for the past and <s-en>will have to</s-en> for the future: <s-en>When I was a scout, we had to carry all our water.</s-en> · <s-en>If the path is closed, we'll have to turn back.</s-en></p>
<p>Same with permission: <s-en>could</s-en> or <s-en>was allowed to</s-en> in the past, <s-en>will be allowed to</s-en> in the future: <s-en>Next year, visitors won't be allowed to drive into the park.</s-en></p>
<div class="tip">On a campsite or in a national park: <s-en>You have to book in advance.</s-en> · <s-en>You don't have to bring a tent: you can rent one.</s-en> · <s-en>You're not allowed to light fires.</s-en> · <s-en>Dogs must be kept on a lead.</s-en></div>
`,
    body_fr: `
<h2>Obligatoire, pas nécessaire, interdit, autorisé</h2>
<table>
<tr><th>Sens</th><th>Présent</th><th>Passé</th></tr>
<tr><td>Obligatoire</td><td><s-en>You have to pay.</s-en> · <s-en>You must pay.</s-en> (il faut payer)</td><td><s-en>We had to pay.</s-en> (on a dû payer)</td></tr>
<tr><td>Pas nécessaire (tu peux si tu veux)</td><td><s-en>You don't have to pay.</s-en> · <s-en>You don't need to pay.</s-en> (tu n'as pas besoin de payer)</td><td><s-en>We didn't have to pay.</s-en> · <s-en>We didn't need to pay.</s-en> (on n'a pas eu besoin de payer)</td></tr>
<tr><td>Interdit</td><td><s-en>You mustn't camp here.</s-en> · <s-en>You can't camp here.</s-en> · <s-en>You aren't allowed to camp here.</s-en> (tu n'as pas le droit de camper ici)</td><td><s-en>We couldn't camp there.</s-en> · <s-en>We weren't allowed to camp there.</s-en> (on n'avait pas le droit d'y camper)</td></tr>
<tr><td>Autorisé</td><td><s-en>You can camp here.</s-en> · <s-en>You're allowed to camp here.</s-en> (tu as le droit de camper ici)</td><td><s-en>We could camp there.</s-en> · <s-en>We were allowed to camp there.</s-en> (on avait le droit d'y camper)</td></tr>
</table>
<h2>Le grand piège : mustn't n'est pas le contraire de must</h2>
<p>En français, « tu ne dois pas » peut vouloir dire deux choses. En anglais, ce sont deux formes bien distinctes :</p>
<p><s-en>You mustn't swim here.</s-en> = c'est interdit, c'est dangereux. · <s-en>You don't have to swim.</s-en> = ce n'est pas nécessaire ; tu peux si tu veux.</p>
<p>Donc : <s-en>Entry is free: you don't have to pay.</s-en> (l'entrée est gratuite : tu n'as pas à payer). Si tu disais <s-en>you mustn't pay</s-en>, payer serait interdit !</p>
<h2>Be allowed to : la permission et les règles</h2>
<p><s-en>Be allowed to</s-en> est le passif de <s-en>allow</s-en> (autoriser). Le sujet est la personne : <s-en>I'm allowed to…</s-en> (j'ai le droit de…), <s-en>We weren't allowed to…</s-en> (on n'avait pas le droit de…), <s-en>Are we allowed to…?</s-en> (est-ce qu'on a le droit de… ?)</p>
<p>Sur les panneaux et dans les règlements, le sujet est souvent l'activité : <s-en>Camping is not allowed.</s-en> (camping interdit) · <s-en>Dogs are allowed on a lead.</s-en> (les chiens sont acceptés en laisse)</p>
<p>Ne dis pas <s-en>It's not allowed to camp here</s-en> (calque de « il n'est pas permis de ») : dis <s-en>You're not allowed to camp here</s-en> ou <s-en>Camping is not allowed here</s-en>.</p>
<h2>Must n'a ni passé ni futur</h2>
<p>On utilise <s-en>had to</s-en> pour le passé et <s-en>will have to</s-en> pour le futur : <s-en>When I was a scout, we had to carry all our water.</s-en> (quand j'étais scout, on devait porter toute notre eau) · <s-en>If the path is closed, we'll have to turn back.</s-en> (si le chemin est fermé, on devra faire demi-tour)</p>
<p>Pareil pour la permission : <s-en>could</s-en> ou <s-en>was allowed to</s-en> au passé, <s-en>will be allowed to</s-en> au futur : <s-en>Next year, visitors won't be allowed to drive into the park.</s-en> (l'an prochain, les visiteurs n'auront plus le droit d'entrer dans le parc en voiture)</p>
<div class="tip">Dans un camping ou un parc national : <s-en>You have to book in advance.</s-en> (il faut réserver à l'avance) · <s-en>You don't have to bring a tent: you can rent one.</s-en> (pas besoin d'apporter une tente : on peut en louer une) · <s-en>You're not allowed to light fires.</s-en> (les feux sont interdits) · <s-en>Dogs must be kept on a lead.</s-en> (les chiens doivent être tenus en laisse)</div>
`,
    examples: [
      ["You have to book the campsite in advance in summer.", "En été, il faut réserver le camping à l'avance."],
      ["You don't have to bring a tent: you can rent one there.", "Pas besoin d'apporter une tente : tu peux en louer une sur place."],
      ["You mustn't swim here: the current is dangerous.", "Il ne faut pas nager ici : le courant est dangereux."],
      ["You're not allowed to light fires in the park.", "Il est interdit d'allumer des feux dans le parc."],
      ["When I was at school, we weren't allowed to use our phones.", "Quand j'étais à l'école, on n'avait pas le droit d'utiliser nos téléphones."],
      ["We had to turn back because of the fog.", "On a dû faire demi-tour à cause du brouillard."],
      ["We didn't need to take a map: the trail was well signposted.", "On n'a pas eu besoin de prendre une carte : le sentier était bien balisé."],
      ["If it rains, we'll have to cancel the picnic.", "S'il pleut, on devra annuler le pique-nique."]
    ],
    quiz: [
      { q: "Entry to the park is free. You ___ pay.", q_fr: "Complète : « Entry to the park is free. You ___ pay. »", o: ["mustn't", "don't have to", "aren't allowed to"], a: 1, ex: "Free = it isn't necessary to pay: don't have to. Mustn't would mean that paying is forbidden!", ex_fr: "Gratuit = pas besoin de payer : don't have to. Mustn't voudrait dire qu'il est interdit de payer !" },
      { q: "Yesterday we ___ walk for three hours to find the campsite.", q_fr: "Complète : « Yesterday we ___ walk for three hours to find the campsite. »", o: ["must", "had to", "have to"], a: 1, ex: "Must has no past form: use had to.", ex_fr: "Must n'a pas de passé : on utilise had to." },
      { q: "Which sentence is correct?", q_fr: "Quelle phrase est correcte ?", o: ["It's not allowed to camp here.", "You're not allowed to camp here.", "You don't allow to camp here."], a: 1, ex: "A person + be allowed to: You're not allowed to… Or: Camping is not allowed.", ex_fr: "Une personne + be allowed to : You're not allowed to… Ou : Camping is not allowed." },
      { q: "The water in this lake is polluted. You ___ drink it.", q_fr: "Complète : « The water in this lake is polluted. You ___ drink it. »", o: ["mustn't", "don't have to", "didn't need to"], a: 0, ex: "Dangerous or forbidden: mustn't.", ex_fr: "Dangereux ou interdit : mustn't." },
      { q: "When my grandmother was young, girls ___ wear trousers at her school.", q_fr: "Complète : « When my grandmother was young, girls ___ wear trousers at her school. »", o: ["didn't allow to", "weren't allowed to", "mustn't"], a: 1, ex: "Permission in the past: was / were (not) allowed to.", ex_fr: "La permission au passé : was / were (not) allowed to." }
    ]
  },
  {
    id: 160, after: 95, level: "B1", kind: "functional", icon: "calendar-clock",
    title: "Everyday English: making and changing plans", title_fr: "Anglais pratique : organiser et changer des projets",
    subtitle: "Fix a time and a place, check that the plan is still on, and postpone or cancel politely.", subtitle_fr: "Fixer une heure et un lieu, vérifier que le projet tient toujours, et repousser ou annuler poliment.",
    body: `
<h2>Fixing the details</h2>
<table>
<tr><th>What you want to do</th><th>Examples</th></tr>
<tr><td>Suggest a day or a time</td><td><s-en>Are you free on Saturday?</s-en> · <s-en>Does Sunday morning work for you?</s-en> · <s-en>What time suits you?</s-en></td></tr>
<tr><td>Agree</td><td><s-en>Saturday's perfect.</s-en> · <s-en>Let's say nine o'clock at the car park.</s-en> · <s-en>See you there!</s-en></td></tr>
<tr><td>Be flexible</td><td><s-en>I'm easy.</s-en> (I don't mind) · <s-en>Whatever suits you.</s-en> · <s-en>Let's play it by ear.</s-en> (let's decide later, depending on the situation)</td></tr>
</table>
<h2>Checking the plan</h2>
<p><s-en>Are we still on for Saturday?</s-en> · <s-en>Is the hike still happening?</s-en> · <s-en>I'll text you in the morning to confirm.</s-en></p>
<h2>Changing or cancelling</h2>
<p>Give a reason, apologise, and suggest another time:</p>
<p><s-en>Something's come up, I'm afraid.</s-en> (something unexpected) · <s-en>I'm really sorry, but I can't make it on Saturday.</s-en> · <s-en>Could we put it off until next weekend?</s-en> · <s-en>Can we move it to Sunday instead?</s-en> · <s-en>The forecast is awful: shall we call it off?</s-en></p>
<p>Two phrasal verbs to know: <s-en>put off</s-en> = postpone (do it later) · <s-en>call off</s-en> = cancel (not do it at all). And <s-en>make it</s-en> = manage to come: <s-en>I can't make it.</s-en></p>
<h2>Answering</h2>
<p><s-en>No problem, these things happen.</s-en> · <s-en>That's a shame, but I understand.</s-en> · <s-en>Sunday works for me.</s-en> · <s-en>Let me check and get back to you.</s-en></p>
<div class="tip">Two false friends: <s-en>actually</s-en> means "in fact", not "now": <s-en>Actually, I can't make it.</s-en> And <s-en>I'm free on Saturday</s-en> means you have time, not that you cost nothing!</div>
`,
    body_fr: `
<h2>Fixer les détails</h2>
<table>
<tr><th>Ce que tu veux faire</th><th>Exemples</th></tr>
<tr><td>Proposer un jour ou une heure</td><td><s-en>Are you free on Saturday?</s-en> (tu es libre samedi ?) · <s-en>Does Sunday morning work for you?</s-en> (dimanche matin, ça te va ?) · <s-en>What time suits you?</s-en> (quelle heure t'arrange ?)</td></tr>
<tr><td>Accepter</td><td><s-en>Saturday's perfect.</s-en> (samedi, c'est parfait) · <s-en>Let's say nine o'clock at the car park.</s-en> (disons neuf heures au parking) · <s-en>See you there!</s-en> (à tout à l'heure là-bas !)</td></tr>
<tr><td>Être arrangeante</td><td><s-en>I'm easy.</s-en> (ça m'est égal) · <s-en>Whatever suits you.</s-en> (comme ça t'arrange) · <s-en>Let's play it by ear.</s-en> (on verra sur le moment)</td></tr>
</table>
<h2>Vérifier que le projet tient</h2>
<p><s-en>Are we still on for Saturday?</s-en> (c'est toujours bon pour samedi ?) · <s-en>Is the hike still happening?</s-en> (la rando est maintenue ?) · <s-en>I'll text you in the morning to confirm.</s-en> (je t'envoie un texto le matin pour confirmer)</p>
<h2>Changer ou annuler</h2>
<p>Donne une raison, excuse-toi, et propose un autre moment :</p>
<p><s-en>Something's come up, I'm afraid.</s-en> (j'ai un imprévu, malheureusement) · <s-en>I'm really sorry, but I can't make it on Saturday.</s-en> (je suis vraiment désolée, mais je ne pourrai pas venir samedi) · <s-en>Could we put it off until next weekend?</s-en> (on pourrait repousser au week-end prochain ?) · <s-en>Can we move it to Sunday instead?</s-en> (on peut décaler à dimanche ?) · <s-en>The forecast is awful: shall we call it off?</s-en> (la météo est affreuse : on annule ?)</p>
<p>Deux phrasal verbs à connaître : <s-en>put off</s-en> = repousser (le faire plus tard) · <s-en>call off</s-en> = annuler (ne pas le faire du tout). Et <s-en>make it</s-en> = réussir à venir : <s-en>I can't make it.</s-en> (je ne pourrai pas venir)</p>
<h2>Répondre</h2>
<p><s-en>No problem, these things happen.</s-en> (pas de souci, ça arrive) · <s-en>That's a shame, but I understand.</s-en> (dommage, mais je comprends) · <s-en>Sunday works for me.</s-en> (dimanche me va) · <s-en>Let me check and get back to you.</s-en> (je vérifie et je te redis)</p>
<div class="tip">Deux faux amis : <s-en>actually</s-en> veut dire « en fait », pas « actuellement » : <s-en>Actually, I can't make it.</s-en> (en fait, je ne peux pas venir). Et <s-en>I'm free on Saturday</s-en> veut dire que tu es disponible, pas que tu es gratuite !</div>
`,
    examples: [
      ["Are you free on Saturday morning?", "Tu es libre samedi matin ?"],
      ["Does nine o'clock work for you?", "Neuf heures, ça te va ?"],
      ["Are we still on for Sunday?", "C'est toujours bon pour dimanche ?"],
      ["Something's come up, I'm afraid.", "J'ai un imprévu, malheureusement."],
      ["I'm really sorry, but I can't make it on Friday.", "Je suis vraiment désolée, mais je ne pourrai pas venir vendredi."],
      ["Could we put it off until next weekend?", "On pourrait repousser au week-end prochain ?"],
      ["The forecast is terrible: shall we call it off?", "La météo est catastrophique : on annule ?"]
    ],
    quiz: [
      { q: "“Let's play it by ear” means:", q_fr: "« Let's play it by ear » veut dire :", o: ["Let's decide later, depending on the situation.", "Let's listen to some music.", "Let's cancel the plan."], a: 0, ex: "Play it by ear = decide later, when you know more.", ex_fr: "Play it by ear = on verra sur le moment." },
      { q: "To do the plan later, you ask:", q_fr: "Pour faire le projet plus tard, tu demandes :", o: ["Could we call it off?", "Could we put it off until Sunday?", "Could we put it on until Sunday?"], a: 1, ex: "Put off = postpone. Call off = cancel.", ex_fr: "Put off = repousser. Call off = annuler." },
      { q: "Your friend says “Something's come up.” This means:", q_fr: "Ton amie dit « Something's come up. » Ça veut dire :", o: ["She has an unexpected problem.", "She's arriving soon.", "She's found something."], a: 0, ex: "Something's come up = an unexpected event (un imprévu).", ex_fr: "Something's come up = il y a un imprévu." },
      { q: "Which sentence is correct?", q_fr: "Quelle phrase est correcte ?", o: ["I can't make it on Saturday.", "I don't can come on Saturday.", "I can't to come on Saturday."], a: 0, ex: "Make it = manage to come. Can't is followed by the verb without to.", ex_fr: "Make it = réussir à venir. Can't est suivi du verbe sans to." },
      { q: "To check that the plan is still happening, you ask:", q_fr: "Pour vérifier que le projet tient toujours, tu demandes :", o: ["Are we still on for Saturday?", "Are we still in Saturday?", "Is Saturday still off?"], a: 0, ex: "Are we still on for…? = is the plan still happening?", ex_fr: "Are we still on for… ? = c'est toujours bon pour… ?" }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    159: {
      gap: [["You ___ book: there's always space. (ne pas être obligé)", "don't have to|don't need to"], ["Dogs ___ allowed on the beach in summer. (ne pas être)", "aren't|are not"], ["There was no shop, so we ___ to carry our own water. (devoir, passé)", "had"], ["You ___ feed the animals: it's bad for them. (interdit)", "mustn't|can't"]],
      fix: [["It's not allowed to light fires here.", "You're not allowed to light fires here.|You aren't allowed to light fires here.|Lighting fires is not allowed here.|Fires are not allowed here.", "Use a person + be allowed to, or the activity + is not allowed."], ["Last year we must leave the campsite at ten.", "Last year we had to leave the campsite at ten.", "Must has no past: use had to."]],
      task: ["Write the rules of a place you know (a campsite, a park, your school or your workplace): two things you have to do, one thing you don't have to do and two things you aren't allowed to do.", "Écris le règlement d'un lieu que tu connais (un camping, un parc, ton école ou ton lieu de travail) : deux choses obligatoires, une chose facultative et deux choses interdites.", "At my local swimming pool, you have to wear a swimming cap, and you have to take a shower before you swim. You don't have to book, except on Sundays. You aren't allowed to run near the pool, and you mustn't eat in the changing rooms."]
    },
    160: {
      gap: [["Does Sunday ___ for you? (convenir)", "work|suit"], ["Are we still ___ for Saturday? (toujours d'accord)", "on"], ["I'm sorry, I can't ___ it on Friday. (réussir à venir)", "make"], ["Shall we put it ___ until next week? (repousser)", "off"]],
      fix: [["Sorry, I have an unforeseen, so I can't come.", "Sorry, something's come up, so I can't come.|Sorry, something has come up, so I can't come.|Sorry, something's come up and I can't come.", "Un imprévu = something's come up."], ["Can we cancel it to next Sunday?", "Can we put it off until next Sunday?|Can we postpone it until next Sunday?|Can we move it to next Sunday?|Can we put it off to next Sunday?", "Cancel = don't do it at all. To change the date: put off until, postpone until, move to."]],
      task: ["Write a message to a friend: you can't go on a trip you had planned together. Apologise, give a reason, and suggest another date.", "Écris un message à un ami : tu ne peux pas faire une sortie que vous aviez prévue ensemble. Excuse-toi, donne une raison et propose une autre date.", "Hi Sam, I'm really sorry, but something's come up and I can't make it on Saturday: my sister needs help with her move. Could we put the hike off until next weekend? Sunday works for me, if you're free. Let me know!"]
    }
  });

  W.ROLEPLAYS.push(
  { id: "hikeplans", lesson: 160, level: "B1", icon: "calendar-clock", partner: "Sam", role: "a friend",
    title: "Changing weekend plans", title_fr: "Changer les projets du week-end",
    setting: "You and your friend Sam planned a hike for Saturday, but the weather forecast is terrible. You call Sam.", setting_fr: "Ton ami Sam et toi aviez prévu une randonnée samedi, mais la météo annonce un temps affreux. Tu appelles Sam.",
    turns: [
      { p: "Hi! Are we still on for Saturday? I've just bought new walking boots!", fr: "Salut ! C'est toujours bon pour samedi ? Je viens d'acheter de nouvelles chaussures de rando !" },
      { y: ["That's the thing: have you seen the forecast? It's going to pour down all day.", "That's the problem: have you seen the weather prevision? It's going to pour down all day.", "That's the thing: have you seen the forecast? It's going to pour down all the day."], fr: "Justement : tu as vu la météo ? Il va pleuvoir à verse toute la journée.", why: "The weather forecast, not prevision. All day, without the." },
      { p: "Oh no, really? I was looking forward to it.", fr: "Oh non, vraiment ? J'avais vraiment hâte." },
      { y: ["Me too. Shall we put it off until next weekend instead?", "Me too. Shall we put it on until next weekend instead?", "Me too. Shall we cancel it until next weekend?"], fr: "Moi aussi. On repousse plutôt au week-end prochain ?", why: "Put off = postpone. Cancel means you don't do it at all." },
      { p: "Next Saturday's tricky: I'm working in the morning. Does Sunday work for you?", fr: "Samedi prochain, c'est compliqué : je travaille le matin. Dimanche, ça te va ?" },
      { y: ["Sunday's perfect. What time suits you?", "Sunday's perfect. What hour suits you?", "Sunday's perfect. Which time it suits you?"], fr: "Dimanche, c'est parfait. Quelle heure t'arrange ?", why: "What time…? (not what hour). No it in the question." },
      { p: "Let's say eight o'clock at the car park. It's a long walk, and it gets dark early.", fr: "Disons huit heures au parking. C'est une longue marche, et il fait nuit tôt." },
      { y: ["Great. Do I have to bring anything?", "Great. Must I to bring anything?", "Great. Do I must bring anything?"], fr: "Super. Je dois apporter quelque chose ?", why: "Do I have to…? is the natural question. Must is never followed by to, and never used with do." },
      { p: "Just water and lunch. You don't have to bring a map: I know the trail really well.", fr: "Juste de l'eau et ton déjeuner. Pas besoin d'apporter de carte : je connais très bien le sentier." },
      { y: ["Perfect. I'll text you on Saturday evening to confirm, in case the weather changes again.", "Perfect. I'll text you on Saturday evening for confirm, in case the weather will change again.", "Perfect. I text you on Saturday evening to confirm, in case the weather change again."], fr: "Parfait. Je t'envoie un texto samedi soir pour confirmer, au cas où la météo changerait encore.", why: "To confirm (purpose). After in case, use the present: in case the weather changes. I'll for a promise." },
      { p: "Good idea. And if it's raining on Sunday too, we'll play it by ear.", fr: "Bonne idée. Et s'il pleut aussi dimanche, on verra sur le moment." },
      { y: ["Sounds good. See you on Sunday, then!", "Sounds well. See you on Sunday, so!", "It sounds good. We see us on Sunday!"], fr: "Ça marche. À dimanche, alors !", why: "Sound + adjective: sounds good. See you on Sunday, then!" }
    ] }
  );

  W.READINGS.push({
    id: "wildcamp", level: "B1", icon: "trees", title: "Can I sleep here? The rules of wild camping", title_fr: "Puis-je dormir ici ? Les règles du camping sauvage", genre: "Article",
    intro: "An article about wild camping in different countries. Rules and permission (have to, don't have to, be allowed to) and the vocabulary of the outdoors.",
    intro_fr: "Un article sur le camping sauvage dans différents pays. Règles et autorisations (have to, don't have to, be allowed to) et vocabulaire du plein air.",
    paragraphs: [
      { en: "Imagine waking up next to a quiet lake, with no other tents in sight and no campsite fees to pay. This is the dream of wild camping: sleeping outdoors in nature, away from official campsites. But before you pack your rucksack, there is an important question to answer: are you actually allowed to do it? The answer depends a lot on where you are.", fr: "Imagine-toi te réveiller au bord d'un lac tranquille, sans aucune autre tente en vue et sans frais de camping à payer. C'est le rêve du camping sauvage : dormir dehors, dans la nature, loin des campings officiels. Mais avant de préparer ton sac à dos, il y a une question importante à se poser : as-tu vraiment le droit de le faire ? La réponse dépend beaucoup de l'endroit où tu te trouves." },
      { en: "In Norway, the rules are generous. A long tradition called the “right of public access” means that you can walk, and even camp, on most land, including private land. You don't have to ask for permission if you stay for one or two nights and pitch your tent at least 150 metres from the nearest house. Sweden and Finland have similar traditions. However, this freedom comes with responsibilities: you have to respect nature, animals and the people who live there.", fr: "En Norvège, les règles sont souples. Une longue tradition appelée « droit d'accès public » permet de marcher, et même de camper, sur la plupart des terrains, y compris privés. Tu n'as pas besoin de demander l'autorisation si tu restes une ou deux nuits et que tu montes ta tente à 150 mètres au moins de la maison la plus proche. La Suède et la Finlande ont des traditions semblables. Mais cette liberté s'accompagne de responsabilités : tu dois respecter la nature, les animaux et les gens qui vivent là." },
      { en: "Scotland has similar rules. Since 2005, a law has allowed people to camp on most unfenced land, as long as they behave responsibly. But there are exceptions: near Loch Lomond, one of the most popular areas, campers have to buy a permit between March and September. In England and Wales, the situation is very different. Wild camping is generally not allowed without the landowner's permission, and Dartmoor, in the south-west of England, is the main exception.", fr: "L'Écosse a des règles comparables. Depuis 2005, une loi permet de camper sur la plupart des terrains non clôturés, à condition de se comporter de façon responsable. Mais il y a des exceptions : près du Loch Lomond, l'un des secteurs les plus fréquentés, les campeurs doivent acheter un permis entre mars et septembre. En Angleterre et au pays de Galles, la situation est très différente. Le camping sauvage y est en général interdit sans l'accord du propriétaire du terrain, et Dartmoor, dans le sud-ouest de l'Angleterre, est la principale exception." },
      { en: "Wherever you go, experienced campers follow the same simple principles, often called “Leave No Trace”. You have to take all your rubbish home with you, including food. You shouldn't light a fire unless it is clearly allowed: in dry weather, a single campfire can destroy a whole forest. And you mustn't wash yourself or your dishes directly in rivers or lakes, because soap pollutes the water.", fr: "Où que tu ailles, les campeurs expérimentés suivent les mêmes principes simples, souvent appelés « Leave No Trace » (ne laisser aucune trace). Tu dois rapporter tous tes déchets chez toi, y compris la nourriture. Tu ne devrais pas allumer de feu sauf si c'est clairement autorisé : par temps sec, un seul feu de camp peut détruire une forêt entière. Et il ne faut pas te laver ni laver ta vaisselle directement dans les rivières ou les lacs, parce que le savon pollue l'eau." },
      { en: "Lou, a nurse from Bristol who has been wild camping for ten years, says the rules are mostly common sense. “When I started, I didn't have to think about any of this: I just went to campsites,” she explains. “Now I always check the rules before I leave, I arrive late and I leave early. The best compliment for a wild camper is that nobody knows you were there.”", fr: "Lou, une infirmière de Bristol qui fait du camping sauvage depuis dix ans, estime que ces règles relèvent surtout du bon sens. « Quand j'ai commencé, je n'avais pas à me poser toutes ces questions : j'allais simplement dans des campings, explique-t-elle. Maintenant, je vérifie toujours les règles avant de partir, j'arrive tard et je repars tôt. Le plus beau compliment pour un campeur sauvage, c'est que personne ne sache qu'il est passé par là. »" }
    ],
    glossary: { "in sight": "en vue", "fees": "frais, tarifs", "generous": "généreux, souple", "permission": "autorisation", "freedom": "liberté", "unfenced": "non clôturé", "behave": "se comporter", "permit": "permis, autorisation", "landowner": "propriétaire du terrain", "experienced": "expérimenté", "rubbish": "déchets", "destroy": "détruire", "pollutes": "pollue", "common sense": "bon sens" },
    questions: [
      { q: "What is wild camping?", o: ["Sleeping in nature, away from official campsites", "Camping only in winter", "Sleeping in a campsite without a tent"], a: 0 },
      { q: "In Norway, when don't you have to ask for permission?", o: ["When you camp right next to a house", "When you stay one or two nights, far enough from houses", "When you camp in a big group"], a: 1 },
      { q: "What happens near Loch Lomond between March and September?", o: ["Camping is free for everyone", "Campers have to buy a permit", "Camping is completely forbidden"], a: 1 },
      { q: "Why mustn't you wash your dishes in a lake?", o: ["Because the water is too cold", "Because soap pollutes the water", "Because it takes too much time"], a: 1 },
      { q: "What does Lou mean by “the best compliment”?", o: ["Nobody can tell that she camped there", "Other campers thank her", "She always finds the best place"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-b1-8", unit: "b1-8", level: "B1", icon: "signpost",
    title: "At the visitor centre", title_fr: "Au centre d'accueil du parc",
    context: "Tom, an American hiker, asks Helen, a ranger, about a walk to the summit and the park's rules.", context_fr: "Tom, un randonneur américain, interroge Helen, une garde du parc, sur une randonnée jusqu'au sommet et sur le règlement du parc.",
    words: [["the summit", "le sommet"], ["visibility", "la visibilité"], ["a viewpoint", "un point de vue"], ["a shortcut", "un raccourci"], ["to collapse", "s'effondrer"]],
    lines: [["Tom", "Hi there. My friend and I want to walk up to the summit this afternoon. How long does it take?", "en-US"], ["Helen", "It depends on how fit you are, but most people take about four hours there and back. Have you got proper walking boots?", "en-GB"], ["Tom", "Yes, we have. And waterproofs, just in case.", "en-US"], ["Helen", "Good, because you'll need them. The forecast says it's going to rain from about three o'clock, and visibility at the top could be very poor.", "en-GB"], ["Tom", "Oh. Is it still safe to go?", "en-US"], ["Helen", "It's safe if you're sensible. You don't have to go all the way to the top: there's a lovely viewpoint about halfway up. If the cloud comes down, I'd turn back there.", "en-GB"], ["Tom", "OK. Is there a shortcut on the way down? Someone told us there's a path through the forest.", "en-US"], ["Helen", "There is, but you're not allowed to use it at the moment. Part of it collapsed last winter, and it's closed until the repairs are finished.", "en-GB"], ["Tom", "Right. And can we camp near the lake tonight?", "en-US"], ["Helen", "You can, but you have to pick up a permit here first. It's three pounds per tent. And please don't light a fire: fires aren't allowed anywhere in the park.", "en-GB"], ["Tom", "No problem. We'll take one permit, then. Thanks for your help!", "en-US"]],
    gist: ["What is the conversation mainly about?", ["Planning a walk safely and following the park's rules", "Booking a room in a hotel", "Reporting an accident on the mountain"]],
    detail: [["How long does the walk usually take?", ["About four hours there and back", "About two hours", "A whole day"]], ["What does Helen suggest if the weather gets worse?", ["Turning back at the viewpoint", "Taking the shortcut", "Waiting at the summit"]], ["Why can't they use the shortcut?", ["Part of the path collapsed and it's closed.", "It's private land.", "It's too dangerous in the dark."]], ["What do they need to camp near the lake?", ["A permit from the visitor centre", "Nothing: it's free", "A reservation online"]]],
    decode: ["You don't have to go all the way to the top", "you're not allowed to use it at the moment"],
    tip: "In fast speech, have to often sounds like hafta, and don't have to like dontafta. Listen carefully for don't: it changes a rule (you have to) into a choice (you don't have to).", tip_fr: "À l'oral rapide, have to se prononce souvent « hafta », et don't have to « dontafta ». Guette bien le don't : il transforme une règle (you have to) en choix (you don't have to)."
  }]);

  W.PROMPTS.push({ id: "b1-outdoors", level: "B1", q: "Describe a place in nature that you love, or a day outdoors you remember well.", fr: "Décris un lieu dans la nature que tu aimes, ou une journée en plein air dont tu te souviens bien.", time: 90,
    phrases: ["One of my favourite places is…", "To get there, you have to…", "You aren't allowed to…, but you can…", "What I love about it is…", "Last time I went,…"],
    model: "One of my favourite places is a small beach at the end of a long coastal path. To get there, you have to walk for about forty minutes, so it's never crowded. You aren't allowed to camp there, but you can swim, and the water is incredibly clear in September. What I love about it is the silence: you can only hear the wind and the sea. Last time I went, the path was so muddy that I nearly fell twice, but it was worth it." });

  W.WRITING_GUIDE["b1-8"] = { genre: "A story from a first sentence (B1 Preliminary)", genre_fr: "Une histoire à partir d'une première phrase (B1 Preliminary)",
    plan: [["Start with the sentence given, then set the scene: who and where.", "Commence par la phrase donnée, puis plante le décor : qui et où."], ["Go back in time: what had happened before?", "Remonte le temps : que s'était-il passé avant ?"], ["The problem gets worse.", "Le problème s'aggrave."], ["The turning point.", "Le retournement."], ["The ending, and what you learnt.", "La fin, et ce que tu en as retenu."]],
    marks: [["It had rained all night", "past perfect: what happened before", "plus-que-parfait : ce qui s'était passé avant"], ["which was a terrible idea", "which commenting on the whole sentence", "which qui commente toute la phrase"], ["We had to pack everything in the dark", "had to: an obligation in the past", "had to : une obligation dans le passé"], ["Unfortunately,", "the problem gets worse", "le problème s'aggrave"], ["Luckily,", "the turning point", "le retournement"], ["In the end,", "the ending", "le dénouement"]] };

  /* The unit, after Travel stories; the weather theme and the road-trip text move here from b1-2. */
  const move = (from, key, ids) => { const u = W.COURSE.find((x) => x.id === from); if (u) u[key] = (u[key] || []).filter((x) => !ids.includes(x)); };
  move("b1-2", "vocab", ["meteoB1"]); move("b1-2", "extra", ["roadtrip"]);
  const unit = { id: "b1-8", level: "B1", icon: "mountain", title: "The great outdoors", title_fr: "Au grand air",
    intro: "Hiking, camping, a day by the sea: in this unit, you'll talk about time outdoors. You'll explain rules (what you have to do, what you're allowed to do), make plans with friends and change them when the weather doesn't cooperate, and tell the story of an adventure that went wrong.",
    intro_fr: "Randonnée, camping, une journée à la mer : dans cette unité, tu parleras du temps passé en plein air. Tu expliqueras des règles (ce qu'on doit faire, ce qu'on a le droit de faire), tu organiseras des sorties avec des amis et tu les changeras quand la météo ne suit pas, et tu raconteras une aventure qui a mal tourné.",
    can: ["Explain rules and permission, now and in the past (have to, don't have to, be allowed to)", "Make plans with friends, and change or cancel them politely", "Understand safety advice and an article about camping rules", "Write a short story from a first sentence"],
    can_fr: ["Expliquer des règles et des autorisations, au présent et au passé (have to, don't have to, be allowed to)", "Organiser des sorties avec des amis, et les changer ou les annuler poliment", "Comprendre des consignes de sécurité et un article sur les règles du camping", "Écrire une courte histoire à partir d'une première phrase"],
    lessons: [159, 160], vocab: ["outdoorsB1", "meteoB1"], reading: "wildcamp", extra: ["roadtrip"], prompt: "b1-outdoors",
    writing: { task: "Write a story (100-130 words) that begins with this sentence: “When I woke up, the tent was full of water.”", task_fr: "Écris une histoire (100-130 mots) qui commence par cette phrase : « When I woke up, the tent was full of water. »", words: "100-130",
      tips: ["When I woke up,…", "It had… all night", "We had to…", "Unfortunately,… / Luckily,…", "In the end,…"],
      checklist: ["My story starts with the sentence given", "I used the past simple and at least one past perfect", "I used had to or was / were allowed to", "My story has a problem, a turning point and an ending", "I stayed between 100 and 130 words"],
      model: "When I woke up, the tent was full of water. My sleeping bag was soaked, and my friend Nadia was still asleep in a puddle. It had rained all night, and we had pitched our tent at the bottom of a hill, which was a terrible idea. We had to pack everything in the dark, because the campsite rules said we had to leave by eight. Unfortunately, the path back to the car was so muddy that Nadia slipped and fell. We were cold, wet and very hungry. Luckily, a farmer saw us and invited us into his kitchen for tea and toast. In the end, it was the best breakfast of my life, and now we always check the forecast before we go camping." } };
  W.COURSE.splice(W.COURSE.findIndex((u) => u.id === "b1-3"), 0, unit);
})();
