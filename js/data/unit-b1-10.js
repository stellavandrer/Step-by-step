/* Unité B1 « Food and celebrations » (b1-10), complète : leçons 163-164 et leurs exercices, texte, atelier d'écoute,
   jeu de rôle, sujet d'oral et guide d'écriture. Placée avant At work, qui reste la dernière unité du B1 ;
   elle reprend le thème cuisine (cuisineB1) de b1-6.
   Personnes fictives. Faits vérifiables seulement : raviolis du Nouvel An en Chine du Nord (forme des anciens
   lingots, poisson dont le nom évoque l'abondance), douze raisins à minuit en Espagne, douceurs offertes à Diwali,
   Thanksgiving le quatrième jeudi de novembre aux États-Unis. */
(function () {
  const W = window;

  W.VOCAB.push({ id: "celebrationsB1", icon: "party-popper", title: "Celebrations and special meals", title_fr: "Fêtes et repas de fête", level: "B1", words: [
    ["a custom", "une coutume", "It's a custom to give money in red envelopes at New Year."],
    ["a feast", "un festin", "After the wedding, there was a huge feast."],
    ["to make a toast", "porter un toast", "Her father made a toast to the happy couple."],
    ["the host", "l'hôte (la personne qui reçoit)", "Always thank the host before you leave."],
    ["a wedding reception", "une réception de mariage", "The wedding reception was in an old barn."],
    ["a gathering", "une réunion (de famille, d'amis)", "Christmas is a big family gathering for us."],
    ["leftovers", "les restes", "We ate the leftovers for lunch the next day."],
    ["a potluck", "un repas où chacun apporte un plat", "It's a potluck, so bring something to share."],
    ["a speech", "un discours", "I was nervous about giving a speech at the wedding."],
    ["savoury", "salé (par opposition à sucré)", "I prefer savoury snacks to sweet ones."],
    ["mouth-watering", "appétissant, qui met l'eau à la bouche", "The smell from the kitchen was mouth-watering."],
    ["crunchy", "croquant", "I love crunchy vegetables."],
    ["juicy", "juteux", "These peaches are really juicy."],
    ["greasy", "gras, graisseux", "The chips were far too greasy."],
    ["a street stall", "un stand (de rue)", "We bought noodles from a street stall."],
    ["to date back to", "remonter à", "This festival dates back to the Middle Ages."],
    ["a parade", "un défilé", "Thousands of people watched the parade."],
    ["fancy dress", "un déguisement (US : a costume)", "Everyone came to the party in fancy dress."],
    ["a treat", "un petit plaisir, une gâterie", "On Sundays, we have pancakes as a treat."],
    ["to clear the table", "débarrasser la table", "Can you help me clear the table?"]
  ] });

  W.LESSONS.push(
  {
    id: 163, after: 87, level: "B1", icon: "utensils",
    title: "What's it like? Like, as and the verbs of the senses", title_fr: "What's it like? Like, as et les verbes de perception",
    subtitle: "Ask for and give descriptions, compare with like, and choose between like and as.", subtitle_fr: "Demander et donner une description, comparer avec like, et choisir entre like et as.",
    body: `
<h2>Four questions not to mix up</h2>
<table>
<tr><th>Question</th><th>It asks about…</th><th>Possible answer</th></tr>
<tr><td><s-en>What's it like?</s-en> · <s-en>What's she like?</s-en></td><td>a description, an opinion, someone's personality</td><td><s-en>It's delicious, a bit spicy.</s-en> · <s-en>She's friendly and funny.</s-en></td></tr>
<tr><td><s-en>What does it look like?</s-en> · <s-en>What does she look like?</s-en></td><td>appearance</td><td><s-en>It looks like a small pancake.</s-en> · <s-en>She's tall, with curly hair.</s-en></td></tr>
<tr><td><s-en>What does she like?</s-en></td><td>preferences (the verb like)</td><td><s-en>She likes jazz and spicy food.</s-en></td></tr>
<tr><td><s-en>How is she?</s-en></td><td>health, how someone is today</td><td><s-en>She's fine, thanks.</s-en></td></tr>
</table>
<p>Never <s-en>How is it like?</s-en>: it's <s-en>What is it like?</s-en></p>
<h2>Look, sound, smell, taste, feel</h2>
<p>+ <b>adjective</b>: <s-en>It smells good.</s-en> · <s-en>This soup tastes salty.</s-en> · <s-en>Your plan sounds great.</s-en> · <s-en>The bread feels soft.</s-en></p>
<p>+ <b>like + noun</b>: <s-en>It smells like coffee.</s-en> · <s-en>It tastes like chicken.</s-en> · <s-en>That sounds like a good idea.</s-en> · <s-en>It looks like rain.</s-en></p>
<p>These verbs are followed by an adjective, not an adverb: <s-en>It smells good</s-en>, not <s-en>It smells well</s-en>. And no <s-en>like</s-en> before an adjective: <s-en>It tastes delicious</s-en>, not <s-en>It tastes like delicious</s-en>.</p>
<h2>Like or as?</h2>
<table>
<tr><th></th><th>Meaning</th><th>Examples</th></tr>
<tr><td><s-en>like</s-en> + noun</td><td>similar to (it isn't really the same thing)</td><td><s-en>She cooks like a professional.</s-en> (she isn't one)</td></tr>
<tr><td><s-en>as</s-en> + noun</td><td>a role, a job, a function (it really is)</td><td><s-en>She works as a chef.</s-en> (she is one) · <s-en>We used the box as a table.</s-en></td></tr>
<tr><td><s-en>as</s-en> in fixed expressions</td><td></td><td><s-en>as usual</s-en> · <s-en>as you know</s-en> · <s-en>as I said</s-en></td></tr>
<tr><td><s-en>such as</s-en></td><td>for example</td><td><s-en>festivals such as Diwali and Thanksgiving</s-en></td></tr>
</table>
<div class="tip">Describing food: <s-en>What's it like?</s-en> — <s-en>It's a bit like a thick soup, quite spicy.</s-en> · <s-en>It looks like a cake, but it's savoury.</s-en> · <s-en>It tastes a bit like coconut.</s-en> · <s-en>It smells amazing!</s-en></div>
`,
    body_fr: `
<h2>Quatre questions à ne pas confondre</h2>
<table>
<tr><th>Question</th><th>Elle porte sur…</th><th>Réponse possible</th></tr>
<tr><td><s-en>What's it like?</s-en> · <s-en>What's she like?</s-en> (c'est comment ? elle est comment ?)</td><td>une description, une opinion, le caractère de quelqu'un</td><td><s-en>It's delicious, a bit spicy.</s-en> · <s-en>She's friendly and funny.</s-en></td></tr>
<tr><td><s-en>What does it look like?</s-en> · <s-en>What does she look like?</s-en> (à quoi ça ressemble ? à quoi elle ressemble ?)</td><td>l'apparence</td><td><s-en>It looks like a small pancake.</s-en> · <s-en>She's tall, with curly hair.</s-en></td></tr>
<tr><td><s-en>What does she like?</s-en> (qu'est-ce qu'elle aime ?)</td><td>les goûts (le verbe like)</td><td><s-en>She likes jazz and spicy food.</s-en></td></tr>
<tr><td><s-en>How is she?</s-en> (comment va-t-elle ?)</td><td>la santé, l'état du jour</td><td><s-en>She's fine, thanks.</s-en></td></tr>
</table>
<p>Jamais <s-en>How is it like?</s-en> (calque de « comment c'est ? ») : on dit <s-en>What is it like?</s-en></p>
<h2>Look, sound, smell, taste, feel</h2>
<p>+ <b>adjectif</b> : <s-en>It smells good.</s-en> (ça sent bon) · <s-en>This soup tastes salty.</s-en> (cette soupe est salée) · <s-en>Your plan sounds great.</s-en> (ton projet a l'air génial) · <s-en>The bread feels soft.</s-en> (le pain est moelleux au toucher)</p>
<p>+ <b>like + nom</b> : <s-en>It smells like coffee.</s-en> (ça sent le café) · <s-en>It tastes like chicken.</s-en> (ça a le goût du poulet) · <s-en>That sounds like a good idea.</s-en> (ça m'a l'air d'une bonne idée) · <s-en>It looks like rain.</s-en> (on dirait qu'il va pleuvoir)</p>
<p>Ces verbes sont suivis d'un adjectif, pas d'un adverbe : <s-en>It smells good</s-en>, pas <s-en>It smells well</s-en>. Et pas de <s-en>like</s-en> devant un adjectif : <s-en>It tastes delicious</s-en>, pas <s-en>It tastes like delicious</s-en>.</p>
<h2>Like ou as ?</h2>
<p>Les deux se traduisent souvent par « comme », mais ils ne disent pas la même chose :</p>
<table>
<tr><th></th><th>Sens</th><th>Exemples</th></tr>
<tr><td><s-en>like</s-en> + nom</td><td>semblable à (ce n'est pas vraiment la même chose)</td><td><s-en>She cooks like a professional.</s-en> (elle cuisine comme une pro, mais elle n'en est pas une)</td></tr>
<tr><td><s-en>as</s-en> + nom</td><td>un rôle, un métier, une fonction (c'est vraiment le cas)</td><td><s-en>She works as a chef.</s-en> (elle est cheffe) · <s-en>We used the box as a table.</s-en> (la boîte nous a servi de table)</td></tr>
<tr><td><s-en>as</s-en> dans des expressions figées</td><td></td><td><s-en>as usual</s-en> (comme d'habitude) · <s-en>as you know</s-en> (comme tu le sais) · <s-en>as I said</s-en> (comme je l'ai dit)</td></tr>
<tr><td><s-en>such as</s-en></td><td>par exemple</td><td><s-en>festivals such as Diwali and Thanksgiving</s-en> (des fêtes comme Diwali et Thanksgiving)</td></tr>
</table>
<div class="tip">Pour décrire un plat : <s-en>What's it like?</s-en> (c'est comment ?) — <s-en>It's a bit like a thick soup, quite spicy.</s-en> (c'est un peu comme une soupe épaisse, assez épicée) · <s-en>It looks like a cake, but it's savoury.</s-en> (on dirait un gâteau, mais c'est salé) · <s-en>It tastes a bit like coconut.</s-en> (ça a un petit goût de noix de coco) · <s-en>It smells amazing!</s-en> (ça sent divinement bon !)</div>
`,
    examples: [
      ["What's the food like in Vietnam?", "Comment est la cuisine au Vietnam ?"],
      ["What does your new flat look like?", "À quoi ressemble ton nouvel appartement ?"],
      ["This cake smells amazing.", "Ce gâteau sent divinement bon."],
      ["It tastes a bit like coconut.", "Ça a un petit goût de noix de coco."],
      ["That sounds like a great idea!", "Ça m'a l'air d'une super idée !"],
      ["My brother works as a chef in Lyon.", "Mon frère travaille comme chef à Lyon."],
      ["She makes pasta like an Italian grandmother.", "Elle fait les pâtes comme une grand-mère italienne."],
      ["As usual, we ate far too much.", "Comme d'habitude, on a beaucoup trop mangé."]
    ],
    quiz: [
      { q: "“What's your new boss like?” The best answer:", q_fr: "« What's your new boss like? » La meilleure réponse :", o: ["She's very kind and patient.", "She likes tennis.", "She's fine, thanks."], a: 0, ex: "What's she like? = describe her personality.", ex_fr: "What's she like? = décris son caractère." },
      { q: "This soup tastes ___.", q_fr: "Complète : « This soup tastes ___. »", o: ["like delicious", "deliciously", "delicious"], a: 2, ex: "A sense verb + an adjective: tastes delicious.", ex_fr: "Un verbe de perception + un adjectif : tastes delicious." },
      { q: "Before becoming a teacher, he worked ___ a waiter.", q_fr: "Complète : « Before becoming a teacher, he worked ___ a waiter. »", o: ["like", "as", "such as"], a: 1, ex: "A real job: as. He really was a waiter.", ex_fr: "Un vrai métier : as. Il était vraiment serveur." },
      { q: "I love spicy dishes, ___ curry and chilli.", q_fr: "Complète : « I love spicy dishes, ___ curry and chilli. »", o: ["such as", "as", "as like"], a: 0, ex: "such as = for example.", ex_fr: "such as = par exemple." },
      { q: "“What does it look like?” asks about:", q_fr: "« What does it look like? » porte sur :", o: ["its appearance", "its taste", "its price"], a: 0, ex: "look like = appearance.", ex_fr: "look like = l'apparence." }
    ]
  },
  {
    id: 164, after: 87, level: "B1", kind: "functional", icon: "heart-handshake",
    title: "Everyday English: being a guest and a host", title_fr: "Anglais pratique : être invité et recevoir",
    subtitle: "Welcome guests, offer food and drinks, accept or refuse politely, and thank your hosts.", subtitle_fr: "Accueillir des invités, proposer à boire et à manger, accepter ou refuser poliment, et remercier ses hôtes.",
    body: `
<h2>The host</h2>
<p>Welcoming: <s-en>Come in! Let me take your coat.</s-en> · <s-en>Make yourself at home.</s-en></p>
<p>Offering: <s-en>Can I get you something to drink?</s-en> · <s-en>Help yourself to salad.</s-en> · <s-en>Would you like some more?</s-en> · <s-en>Dinner's ready!</s-en></p>
<h2>The guest</h2>
<p>Arriving: <s-en>Thanks for having me.</s-en> · <s-en>I've brought you a little something.</s-en></p>
<p>During the meal: <s-en>This is delicious! Did you make it yourself?</s-en> · <s-en>Could you pass the bread, please?</s-en> · <s-en>Could I have the recipe?</s-en></p>
<h2>Accepting and refusing politely</h2>
<table>
<tr><th>Accepting</th><th>Refusing</th></tr>
<tr><td><s-en>Yes, please, I'd love some.</s-en> · <s-en>Just a little, thanks.</s-en> · <s-en>Go on, then!</s-en> (informal: you let yourself be persuaded)</td><td><s-en>I'm fine, thanks.</s-en> · <s-en>No more for me, thanks: it was lovely.</s-en> · <s-en>I couldn't eat another thing!</s-en></td></tr>
</table>
<p>If there's something you can't eat, say it early and simply: <s-en>I'm vegetarian: I hope that's OK.</s-en> · <s-en>I'm allergic to nuts.</s-en> · <s-en>I don't eat pork.</s-en></p>
<h2>Leaving</h2>
<p><s-en>I'm afraid I'd better get going.</s-en> · <s-en>Thank you for a lovely evening.</s-en> · <s-en>Next time, it's my turn!</s-en></p>
<div class="tip">Saying "No, thank you" is perfectly polite in English, especially with a compliment: <s-en>No more for me, thanks, but it was delicious.</s-en> Two false friends: <s-en>a recipe</s-en> is what you need to cook a dish; <s-en>a receipt</s-en> is the paper a shop gives you after you pay. And to thank a host, say <s-en>Thanks for having me</s-en>, not <s-en>Thanks for receiving me</s-en>.</div>
`,
    body_fr: `
<h2>L'hôte</h2>
<p>Accueillir : <s-en>Come in! Let me take your coat.</s-en> (entre ! donne-moi ton manteau) · <s-en>Make yourself at home.</s-en> (fais comme chez toi)</p>
<p>Proposer : <s-en>Can I get you something to drink?</s-en> (je te sers quelque chose à boire ?) · <s-en>Help yourself to salad.</s-en> (sers-toi de salade) · <s-en>Would you like some more?</s-en> (tu en reprends ?) · <s-en>Dinner's ready!</s-en> (à table !)</p>
<h2>L'invité</h2>
<p>En arrivant : <s-en>Thanks for having me.</s-en> (merci de m'avoir invitée) · <s-en>I've brought you a little something.</s-en> (je t'ai apporté un petit quelque chose)</p>
<p>Pendant le repas : <s-en>This is delicious! Did you make it yourself?</s-en> (c'est délicieux ! tu l'as fait toi-même ?) · <s-en>Could you pass the bread, please?</s-en> (tu peux me passer le pain, s'il te plaît ?) · <s-en>Could I have the recipe?</s-en> (je pourrais avoir la recette ?)</p>
<h2>Accepter et refuser poliment</h2>
<table>
<tr><th>Accepter</th><th>Refuser</th></tr>
<tr><td><s-en>Yes, please, I'd love some.</s-en> (oui, avec plaisir) · <s-en>Just a little, thanks.</s-en> (juste un peu, merci) · <s-en>Go on, then!</s-en> (allez, d'accord ! : tu te laisses convaincre)</td><td><s-en>I'm fine, thanks.</s-en> (ça va, merci) · <s-en>No more for me, thanks: it was lovely.</s-en> (plus pour moi, merci : c'était délicieux) · <s-en>I couldn't eat another thing!</s-en> (je ne pourrais plus rien avaler !)</td></tr>
</table>
<p>S'il y a quelque chose que tu ne peux pas manger, dis-le tôt et simplement : <s-en>I'm vegetarian: I hope that's OK.</s-en> (je suis végétarienne : j'espère que ça ne pose pas de problème) · <s-en>I'm allergic to nuts.</s-en> (je suis allergique aux fruits à coque) · <s-en>I don't eat pork.</s-en> (je ne mange pas de porc)</p>
<h2>Partir</h2>
<p><s-en>I'm afraid I'd better get going.</s-en> (je crains de devoir y aller) · <s-en>Thank you for a lovely evening.</s-en> (merci pour cette belle soirée) · <s-en>Next time, it's my turn!</s-en> (la prochaine fois, c'est moi qui invite !)</p>
<div class="tip">Dire « No, thank you » est tout à fait poli en anglais, surtout avec un compliment : <s-en>No more for me, thanks, but it was delicious.</s-en> Deux faux amis : <s-en>a recipe</s-en> est une recette de cuisine ; <s-en>a receipt</s-en> est le reçu, le ticket de caisse. Et pour remercier quelqu'un de t'avoir reçue, dis <s-en>Thanks for having me</s-en>, pas <s-en>Thanks for receiving me</s-en>.</div>
`,
    examples: [
      ["Come in, and make yourself at home.", "Entre, et fais comme chez toi."],
      ["Can I get you something to drink?", "Je te sers quelque chose à boire ?"],
      ["Help yourself to some salad.", "Sers-toi de la salade."],
      ["Thanks for having me.", "Merci de m'avoir invitée."],
      ["This is delicious! Did you make it yourself?", "C'est délicieux ! Tu l'as fait toi-même ?"],
      ["No more for me, thanks: I couldn't eat another thing!", "Plus pour moi, merci : je ne pourrais plus rien avaler !"],
      ["Thank you for a lovely evening.", "Merci pour cette belle soirée."]
    ],
    quiz: [
      { q: "Your host says “Help yourself.” It means:", q_fr: "Ton hôte dit « Help yourself. » Ça veut dire :", o: ["Take what you want.", "Do it yourself.", "Can you help me?"], a: 0, ex: "Help yourself = servez-vous.", ex_fr: "Help yourself = servez-vous." },
      { q: "To refuse more food politely, you say:", q_fr: "Pour refuser poliment d'être resservie, tu dis :", o: ["No more for me, thanks: it was lovely.", "No, I don't want.", "Stop, please."], a: 0, ex: "Refuse, then add a compliment.", ex_fr: "Refuse, puis ajoute un compliment." },
      { q: "When you arrive, you say:", q_fr: "En arrivant, tu dis :", o: ["Thanks for having me.", "Thanks for receiving me.", "Thanks to invite me."], a: 0, ex: "Thanks for having me = thank you for inviting me. Receive is a false friend here.", ex_fr: "Thanks for having me = merci de m'avoir invitée. Receive est un faux ami ici." },
      { q: "“Make yourself at home” means:", q_fr: "« Make yourself at home » veut dire :", o: ["Relax and feel comfortable.", "Go home now.", "Cook your own dinner."], a: 0, ex: "Make yourself at home = fais comme chez toi.", ex_fr: "Make yourself at home = fais comme chez toi." },
      { q: "Which sentence is correct?", q_fr: "Quelle phrase est correcte ?", o: ["Could I have the recipe?", "Could I have the receipt of your cake?", "Could you give me the recipe of it?"], a: 0, ex: "A recipe = une recette. A receipt = un reçu.", ex_fr: "A recipe = une recette. A receipt = un reçu." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    163: {
      gap: [["What's the weather ___ in Edinburgh in May? (comment est)", "like"], ["This bread smells ___. (bon)", "good|great|delicious|amazing|lovely"], ["She works ___ a nurse at the local hospital. (en tant que)", "as"], ["It ___ like chicken, but it's tofu. (avoir le goût)", "tastes"]],
      fix: [["What does he look? He's tall and dark.", "What does he look like? He's tall and dark.", "What does he look like? asks about appearance: like is needed."], ["This sauce tastes like really good.", "This sauce tastes really good.", "A sense verb + an adjective, without like. Use like only before a noun."]],
      task: ["Describe a dish you love for someone who has never tried it: what it looks like, what it tastes and smells like, and what it's like to eat.", "Décris un plat que tu adores à quelqu'un qui ne l'a jamais goûté : à quoi il ressemble, quel goût et quelle odeur il a, et ce que ça fait de le manger.", "Crêpes look like very thin pancakes. A sweet crêpe smells like warm butter, and it tastes a bit like a soft biscuit. The savoury ones, made with buckwheat, taste nutty and slightly salty. Eating them is like a little party: everyone chooses their own filling."]
    },
    164: {
      gap: [["Come in, and make yourself at ___. (comme chez toi)", "home"], ["Please help ___ to more potatoes. (sers-toi)", "yourself"], ["Thanks for ___ me. (m'avoir invité)", "having|inviting"], ["Just a ___, thanks: I'm not very hungry. (un petit peu)", "little|bit"]],
      fix: [["Thank you to receive me.", "Thank you for having me.|Thanks for having me.|Thank you for inviting me.|Thanks for inviting me.", "Thank you for + -ing. Receive is a false friend here: use have or invite."], ["Could you give me the receipt of your cake?", "Could you give me the recipe for your cake?|Could I have the recipe for your cake?|Could you give me the recipe of your cake?", "Une recette = a recipe. A receipt is what a shop gives you after you pay."]],
      task: ["Write a short dialogue (8 to 10 lines) between a host and a guest: arriving, a drink, a compliment about the food, refusing more, and leaving.", "Écris un court dialogue (8 à 10 répliques) entre un hôte et un invité : l'arrivée, une boisson, un compliment sur le plat, un refus poli, et le départ.", "Host: Come in! Let me take your coat. Guest: Thanks for having me. I've brought you some flowers. Host: They're lovely! Can I get you something to drink? Guest: Just some water, please. Host: Dinner's ready! Help yourself to some bread. Guest: This soup is delicious! Did you make it yourself? Host: Would you like some more? Guest: No more for me, thanks: it was lovely. I'm afraid I'd better get going. Thank you for a lovely evening."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "dinnerguest", lesson: 164, level: "B1", icon: "utensils", partner: "Grace", role: "your host",
    title: "Dinner at a friend's place", title_fr: "Dîner chez une amie",
    setting: "Your friend Grace has invited you to dinner at her new flat. You arrive with some flowers.", setting_fr: "Ton amie Grace t'a invitée à dîner dans son nouvel appartement. Tu arrives avec des fleurs.",
    turns: [
      { p: "Hi, come in! Let me take your coat.", fr: "Salut, entre ! Donne-moi ton manteau." },
      { y: ["Thanks for having me! I've brought you a little something for the flat.", "Thanks to have me! I've brought you a little something for the flat.", "Thanks for receiving me! I've brought you a little something for the flat."], fr: "Merci de m'avoir invitée ! Je t'ai apporté un petit quelque chose pour l'appartement.", why: "Thanks for + -ing: Thanks for having me. Receive is a false friend here." },
      { p: "Oh, flowers! They're beautiful, thank you. Make yourself at home. Can I get you something to drink?", fr: "Oh, des fleurs ! Elles sont magnifiques, merci. Fais comme chez toi. Je te sers quelque chose à boire ?" },
      { y: ["Just some sparkling water, please. Your flat is lovely! What's the neighbourhood like?", "Just some sparkling water, please. Your flat is lovely! How is the neighbourhood like?", "Just some sparkling water, please. Your flat is lovely! What does the neighbourhood like?"], fr: "Juste de l'eau gazeuse, s'il te plaît. Ton appartement est superbe ! Le quartier est comment ?", why: "What's it like? asks for a description. Never How is it like?" },
      { p: "It's really lively: there's a great market on Sundays. Right, dinner's ready! It's a Moroccan tagine. Help yourself to bread.", fr: "Il est très animé : il y a un super marché le dimanche. Bon, à table ! C'est un tajine marocain. Sers-toi de pain." },
      { y: ["It smells amazing! What's in it?", "It smells amazingly! What's in it?", "It smells like amazing! What there is in it?"], fr: "Ça sent divinement bon ! Qu'est-ce qu'il y a dedans ?", why: "A sense verb + an adjective: smells amazing. What's in it? is the natural question." },
      { p: "Chicken, lemons, olives and lots of spices. Would you like some more?", fr: "Du poulet, des citrons, des olives et plein d'épices. Tu en reprends ?" },
      { y: ["No more for me, thanks: it was delicious. Could I have the recipe?", "No, I don't want more. Could I have the receipt?", "No more for me, thanks: it was delicious. Could I have the receipt?"], fr: "Plus pour moi, merci : c'était délicieux. Je pourrais avoir la recette ?", why: "Refuse with a compliment. A recipe (une recette), not a receipt (un reçu)." },
      { p: "Of course, I'll send it to you. Oh, I hope you like lemon cake: I made one for dessert.", fr: "Bien sûr, je te l'enverrai. Oh, j'espère que tu aimes le gâteau au citron : j'en ai fait un pour le dessert." },
      { y: ["Go on, then, just a small piece! It looks like the one my grandmother used to make.", "Go on, then, just a small piece! It looks the one my grandmother used to make.", "Go on, then, just a small piece! It looks like the one my grandmother was used to make."], fr: "Allez, d'accord, juste un petit morceau ! Il ressemble à celui que faisait ma grand-mère.", why: "Look like + a noun. Used to + verb for a past habit, not was used to." },
      { p: "That's the nicest compliment I could get! Stay as long as you like.", fr: "C'est le plus beau compliment qu'on puisse me faire ! Reste aussi longtemps que tu veux." },
      { y: ["That's kind, but I'd better get going soon: I've got an early start. Thank you for a lovely evening!", "That's kind, but I'd better to get going soon: I've got an early start. Thank you for a lovely evening!", "That's kind, but I had better going soon: I've got an early start. Thank you for a lovely evening!"], fr: "C'est gentil, mais je vais bientôt devoir y aller : je commence tôt demain. Merci pour cette belle soirée !", why: "'d better + the verb without to." }
    ] }
  );

  W.READINGS.push({
    id: "festivefood", level: "B1", icon: "party-popper", title: "Food that brings people together", title_fr: "Ces plats qui rassemblent", genre: "Article",
    intro: "An article about the dishes of four celebrations around the world. Descriptions with like and as, and the vocabulary of food and celebrations.",
    intro_fr: "Un article sur les plats de quatre fêtes à travers le monde. Descriptions avec like et as, et vocabulaire de la cuisine et des fêtes.",
    paragraphs: [
      { en: "Think of a celebration you love, and you will probably think of food. All over the world, special days have their own special dishes, and these dishes are rarely just about taste. They tell stories, carry wishes for the future and, above all, bring people together around a table.", fr: "Pense à une fête que tu aimes, et tu penseras sans doute à de la nourriture. Partout dans le monde, les jours spéciaux ont leurs plats spéciaux, et ces plats ne sont presque jamais qu'une question de goût. Ils racontent des histoires, portent des vœux pour l'avenir et, surtout, réunissent les gens autour d'une table." },
      { en: "In northern China, families often spend New Year's Eve making dumplings together. Everyone has a job: one person makes the dough, another prepares the filling, and the others fold. Some dumplings look like the small gold and silver bars that were once used as money in China, so eating them is said to bring wealth in the new year. Fish is often served too, because in Chinese the word for fish sounds like the word for “surplus”: a wish to have more than enough.", fr: "Dans le nord de la Chine, les familles passent souvent la veille du Nouvel An à préparer des raviolis ensemble. Chacun a sa tâche : l'un fait la pâte, un autre prépare la farce, et les autres plient. Certains raviolis ressemblent aux petits lingots d'or et d'argent qui servaient autrefois de monnaie en Chine : on dit donc qu'en manger apporte la richesse pour la nouvelle année. On sert souvent du poisson aussi, parce qu'en chinois le mot « poisson » se prononce comme le mot « surplus » : le souhait d'avoir plus que nécessaire." },
      { en: "In Spain, New Year is celebrated in a very different way. At midnight, people try to eat twelve grapes, one with each of the twelve chimes of the clock. It sounds easy, but it isn't: the chimes come every few seconds, and many people end up laughing with their mouths full. Each grape is supposed to bring a month of good luck.", fr: "En Espagne, on fête le Nouvel An de façon très différente. À minuit, on essaie de manger douze grains de raisin, un à chacun des douze coups de l'horloge. Ça a l'air facile, mais ça ne l'est pas : les coups s'enchaînent toutes les quelques secondes, et beaucoup finissent par rire la bouche pleine. Chaque grain est censé apporter un mois de chance." },
      { en: "In India, Diwali, the festival of lights, is a time for sweets. Families prepare or buy boxes of colourful sweets, often made with milk, sugar, nuts and spices, and give them to neighbours, friends and colleagues. In the United States, Thanksgiving, on the fourth Thursday of November, is famous for its roast turkey, but for many Americans, the real tradition is the long meal with family, and the leftovers that follow for days.", fr: "En Inde, Diwali, la fête des lumières, est le temps des douceurs. Les familles préparent ou achètent des boîtes de sucreries colorées, souvent à base de lait, de sucre, de fruits à coque et d'épices, et les offrent aux voisins, aux amis et aux collègues. Aux États-Unis, Thanksgiving, le quatrième jeudi de novembre, est célèbre pour sa dinde rôtie, mais pour beaucoup d'Américains, la vraie tradition, c'est le long repas en famille, et les restes qu'on mange pendant des jours." },
      { en: "What do all these traditions have in common? The food itself is not always complicated or expensive. What matters is that people cook it together, share it, and repeat it every year. In a way, a festive dish is like a family photo album: every time you taste it, you remember the people you shared it with.", fr: "Qu'ont en commun toutes ces traditions ? La nourriture elle-même n'est pas toujours compliquée ni chère. Ce qui compte, c'est qu'on la prépare ensemble, qu'on la partage et qu'on recommence chaque année. D'une certaine façon, un plat de fête est comme un album de photos de famille : chaque fois que tu le goûtes, tu te souviens des gens avec qui tu l'as partagé." }
    ],
    glossary: { "rarely": "rarement", "wishes": "vœux, souhaits", "dumplings": "raviolis, boulettes de pâte", "dough": "pâte", "filling": "farce, garniture", "fold": "plier", "bars": "lingots, barres", "wealth": "richesse", "grapes": "grains de raisin", "chimes": "coups (d'horloge)", "end up": "finir par", "colourful": "coloré", "nuts": "fruits à coque", "roast turkey": "dinde rôtie", "festive": "de fête" },
    questions: [
      { q: "According to the first paragraph, festive dishes…", o: ["are only about taste", "tell stories and bring people together", "are always expensive"], a: 1 },
      { q: "Why are some Chinese dumplings said to bring wealth?", o: ["They look like old gold and silver money", "They are very expensive to make", "They are made by children"], a: 0 },
      { q: "Why is eating twelve grapes at midnight difficult?", o: ["The grapes are very big", "The chimes come every few seconds", "You aren't allowed to laugh"], a: 1 },
      { q: "What do people do with sweets at Diwali?", o: ["They sell them at markets", "They give them to neighbours, friends and colleagues", "They keep them for the next year"], a: 1 },
      { q: "What is the main idea of the last paragraph?", o: ["Festive food has to be complicated", "Cooking, sharing and repeating the meal is what matters", "Old traditions are disappearing"], a: 1 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-b1-10", unit: "b1-10", level: "B1", icon: "utensils",
    title: "Planning a potluck", title_fr: "Organiser un repas partagé",
    context: "Kate, an American, invites her British friend Oliver to a potluck dinner and explains how it works.", context_fr: "Kate, une Américaine, invite son ami britannique Oliver à un repas partagé et lui explique comment ça marche.",
    words: [["a potluck", "un repas où chacun apporte un plat"], ["lentils", "des lentilles"], ["hot", "fort, épicé (piment)"], ["corn bread", "un pain de maïs"], ["savoury", "salé"]],
    lines: [["Kate", "So, for Saturday, I was thinking we could do a potluck. Everyone brings one dish, and we share everything.", "en-US"], ["Oliver", "A potluck? Sorry, what's that like? We don't really do that where I grew up.", "en-GB"], ["Kate", "It's really relaxed. The host makes the main dish, and the guests bring starters, salads or desserts. Nobody has to cook for hours.", "en-US"], ["Oliver", "Sounds great. What should I bring, then? I'm not a very good cook.", "en-GB"], ["Kate", "Anything you like! What about that Indian dish you made last month? The one with lentils?", "en-US"], ["Oliver", "The dal? It's actually really easy. It tastes a bit like a thick, spicy soup. But some people might find it too hot.", "en-GB"], ["Kate", "Just don't put in as much chilli. And it's vegetarian, right? Because Paul doesn't eat meat.", "en-US"], ["Oliver", "Completely vegetarian. What are you making?", "en-GB"], ["Kate", "My grandmother's corn bread. It looks like a cake, but it's savoury, not sweet. She used to make it for every family gathering.", "en-US"], ["Oliver", "I can't wait. Oh, and should I bring something to drink as well?", "en-GB"], ["Kate", "If you want. But honestly, we always have far too much. Last time, we were eating leftovers for three days!", "en-US"]],
    gist: ["What are Kate and Oliver talking about?", ["What to bring to a shared meal", "A restaurant they went to", "A cooking competition"]],
    detail: [["Who usually makes the main dish at a potluck?", ["The host", "Each guest", "A restaurant"]], ["What is Oliver's dal like?", ["Like a thick, spicy soup", "Like a cake", "Like a salad"]], ["Why does the dish need to be vegetarian?", ["Paul doesn't eat meat.", "Kate is allergic to meat.", "Meat is too expensive."]], ["What is surprising about the corn bread?", ["It looks like a cake, but it isn't sweet.", "It's very spicy.", "It comes from India."]]],
    decode: ["It tastes a bit like a thick, spicy soup.", "It looks like a cake, but it's savoury, not sweet."],
    tip: "When people describe food, they compare: it tastes like…, it looks like…, it's a bit like…. Listen for like: the most useful information usually comes just after it.", tip_fr: "Quand on décrit un plat, on compare : it tastes like…, it looks like…, it's a bit like…. Guette le like : l'information la plus utile arrive en général juste après."
  }]);

  W.PROMPTS.push({ id: "b1-food", level: "B1", q: "Describe a celebration or a special meal that is important to you.", fr: "Décris une fête ou un repas spécial qui compte pour toi.", time: 90,
    phrases: ["Every year, we…", "The main dish is…", "It tastes a bit like…", "What I love about it is…", "As usual,…"],
    model: "Every year, my whole family meets at my aunt's house for a big lunch on the first Sunday of summer. The main dish is a huge paella that my uncle cooks outside on a wood fire. It tastes a bit smoky, and the rice at the bottom of the pan is crunchy, which is the best part. What I love about it is that everyone has a job: the children set the table, and the grandparents tell the same old stories. As usual, we eat far too much and finish with a long walk." });

  W.WRITING_GUIDE["b1-10"] = { genre: "An article for a website (B1 Preliminary)", genre_fr: "Un article pour un site web (B1 Preliminary)",
    plan: [["A title and a question to catch the reader's attention.", "Un titre et une question pour accrocher le lecteur."], ["What the celebration is, and when it takes place.", "La fête, et quand elle a lieu."], ["The food, described with like and adjectives.", "La nourriture, décrite avec like et des adjectifs."], ["Why you love it: the atmosphere, the people.", "Pourquoi tu l'aimes : l'ambiance, les gens."], ["A final sentence that speaks to the reader.", "Une phrase finale qui s'adresse au lecteur."]],
    marks: [["Have you ever had dinner outside", "a question to involve the reader", "une question pour impliquer le lecteur"], ["It takes place on the longest day of the year", "take place: when it happens", "take place : quand ça a lieu"], ["so it's a real feast", "so: the result", "so : la conséquence"], ["which tastes like summer itself", "taste like + noun", "taste like + nom"], ["What I love most is", "putting what you love first", "mettre en relief ce que tu aimes"], ["as usual,", "as in a fixed expression", "as dans une expression figée"], ["If you ever get the chance", "a final sentence to the reader", "une phrase finale au lecteur"]] };

  /* The unit, before At work (still the last unit of B1); the cooking theme moves here from b1-6. */
  const move = (from, key, ids) => { const u = W.COURSE.find((x) => x.id === from); if (u) u[key] = (u[key] || []).filter((x) => !ids.includes(x)); };
  move("b1-6", "vocab", ["cuisineB1"]);
  const unit = { id: "b1-10", level: "B1", icon: "party-popper", title: "Food and celebrations", title_fr: "Fêtes et repas",
    intro: "Food brings people together, especially at celebrations. In this unit, you'll describe dishes, places and people with like (What's it like? It tastes like…), be a polite guest and a generous host, read about food traditions around the world and write an article about a celebration you love.",
    intro_fr: "La nourriture rassemble, surtout les jours de fête. Dans cette unité, tu décriras des plats, des lieux et des personnes avec like (What's it like? It tastes like…), tu seras une invitée polie et une hôte généreuse, tu liras un article sur des traditions culinaires du monde entier et tu écriras un article sur une fête que tu aimes.",
    can: ["Describe things and people with like, as and the verbs of the senses (it tastes like…)", "Be a polite guest and host: offer, accept, refuse and thank", "Understand an article about food traditions around the world", "Write an article for a website"],
    can_fr: ["Décrire des choses et des personnes avec like, as et les verbes de perception (it tastes like…)", "Être une invitée et une hôte polie : proposer, accepter, refuser et remercier", "Comprendre un article sur des traditions culinaires du monde entier", "Écrire un article pour un site web"],
    lessons: [163, 164], vocab: ["celebrationsB1", "cuisineB1"], reading: "festivefood", prompt: "b1-food",
    writing: { task: "You see this notice on an English-language website: “Articles wanted! A celebration I love. What happens? What do people eat? Why do you love it?” Write your article (100-130 words).", task_fr: "Tu vois cette annonce sur un site en anglais : « On cherche des articles ! Une fête que j'aime. Que se passe-t-il ? Que mange-t-on ? Pourquoi l'aimes-tu ? » Écris ton article (100-130 mots).", words: "100-130",
      tips: ["Have you ever…? (a question to start)", "It takes place…", "The main dish is…, which tastes like…", "What I love most is…", "If you ever get the chance,…"],
      checklist: ["My article has a title and an opening question to catch the reader's attention", "I answered the three questions: what happens, what people eat, why I love it", "I used like or as correctly at least twice (it tastes like…, as usual)", "I used vocabulary from the unit (a feast, leftovers, a custom…)", "I stayed between 100 and 130 words"],
      model: "Midsummer by the lake\n\nHave you ever had dinner outside at ten o'clock at night, while it was still light? That's what happens at my favourite celebration, the midsummer party in my village.\n\nIt takes place on the longest day of the year. Everyone brings a dish to share, so it's a real feast: salads, grilled vegetables, homemade bread and, of course, cakes. The highlight is my neighbour's strawberry tart, which tastes like summer itself.\n\nWhat I love most is the atmosphere. Children run around with lanterns, someone always plays the guitar, and as usual, the oldest man in the village makes a funny speech.\n\nIf you ever get the chance to join a party like this, don't miss it!" } };
  W.COURSE.splice(W.COURSE.findIndex((u) => u.id === "b1-7"), 0, unit);
})();
