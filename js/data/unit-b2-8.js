/* Unité B2 « Money matters » (b2-8), complète : leçons 133-134 et leurs exercices, texte, atelier d'écoute,
   jeu de rôle, sujet d'oral, guide d'écriture et atelier de langue. Elle regroupe les thèmes argent et consommation
   (consommation, business et businessB2 venaient de b2-3, idiomsB2 de b2-6) et le texte « noclothes ».
   Personnes, boutique et salle de sport fictives. Faits vérifiés : l'expérience de Dan Ariely sur les abonnements
   au magazine The Economist (59 $ en ligne, 125 $ papier, 125 $ les deux ; sans l'offre papier seule, la majorité
   choisit l'offre en ligne), rembourser d'abord la dette au taux le plus élevé. */
(function () {
  const W = window;

  W.LESSONS.push(
  {
    id: 133, after: 41, level: "B2", icon: "scale",
    title: "A great deal of, hardly any, few or a few? Talking about amounts", title_fr: "A great deal of, hardly any, few ou a few ? Parler de quantités",
    subtitle: "Say exactly how much or how many, from the vast majority to hardly any.", subtitle_fr: "Dire exactement combien, de « la grande majorité » à « presque aucun ».",
    body: `
<h2>Can you count it?</h2>
<p>The first question is always the same: can you count it? <s-en>customers, coins, shops</s-en> are countable; <s-en>money, time, advice, information</s-en> are uncountable.</p>
<table>
<tr><th></th><th>Countable (plural)</th><th>Uncountable</th><th>Both</th></tr>
<tr><td>A lot</td><td><s-en>a large number of customers</s-en> · <s-en>many shops</s-en></td><td><s-en>a great deal of money</s-en> · <s-en>much time</s-en></td><td><s-en>a lot of · lots of · plenty of</s-en></td></tr>
<tr><td>A small amount</td><td><s-en>a few coins</s-en> · <s-en>a handful of shops</s-en></td><td><s-en>a little money</s-en> · <s-en>a bit of advice</s-en></td><td></td></tr>
<tr><td>Almost none</td><td><s-en>few customers</s-en></td><td><s-en>little money</s-en></td><td><s-en>hardly any</s-en></td></tr>
</table>
<h2>Few or a few? Little or a little?</h2>
<p>A tiny difference in form, a big difference in meaning. <s-en>A few</s-en> and <s-en>a little</s-en> are positive: some, enough. <s-en>Few</s-en> and <s-en>little</s-en> are negative: not enough, almost none.</p>
<p><s-en>I've got a few euros left: let's get a coffee.</s-en> (some: good news) · <s-en>Few people can afford a flat in the centre.</s-en> (almost nobody: a problem)</p>
<p>In conversation, <s-en>few</s-en> and <s-en>little</s-en> sound rather formal; people usually say <s-en>not many</s-en>, <s-en>not much</s-en> or <s-en>hardly any</s-en>.</p>
<div class="tip">A trap: <s-en>quite a few</s-en> means "a fairly large number", not "a few". <s-en>Quite a few shops have closed.</s-en> = many shops have closed.</div>
<h2>Proportions</h2>
<p><s-en>the vast majority of shoppers</s-en> (almost all) · <s-en>most people</s-en> · <s-en>a minority of customers</s-en> · <s-en>none of the shops</s-en>.</p>
<p>Careful with <s-en>most</s-en>: <s-en>most people</s-en> (people in general, no "the", no "of"), but <s-en>most of the people I know</s-en> (a specific group: use <s-en>of</s-en> before <s-en>the, my, these…</s-en>).</p>
`,
    body_fr: `
<h2>Est-ce que ça se compte ?</h2>
<p>La première question est toujours la même : est-ce que ça se compte ? <s-en>customers, coins, shops</s-en> (clients, pièces, magasins) sont dénombrables ; <s-en>money, time, advice, information</s-en> (argent, temps, conseils, informations) sont indénombrables.</p>
<table>
<tr><th></th><th>Dénombrable (pluriel)</th><th>Indénombrable</th><th>Les deux</th></tr>
<tr><td>Beaucoup</td><td><s-en>a large number of customers</s-en> · <s-en>many shops</s-en></td><td><s-en>a great deal of money</s-en> · <s-en>much time</s-en></td><td><s-en>a lot of · lots of · plenty of</s-en></td></tr>
<tr><td>Un peu</td><td><s-en>a few coins</s-en> · <s-en>a handful of shops</s-en> (une poignée)</td><td><s-en>a little money</s-en> · <s-en>a bit of advice</s-en></td><td></td></tr>
<tr><td>Presque rien</td><td><s-en>few customers</s-en></td><td><s-en>little money</s-en></td><td><s-en>hardly any</s-en></td></tr>
</table>
<h2>Few ou a few ? Little ou a little ?</h2>
<p>Une toute petite différence de forme, une grande différence de sens. <s-en>A few</s-en> et <s-en>a little</s-en> sont positifs : quelques-uns, un peu, assez. <s-en>Few</s-en> et <s-en>little</s-en> sont négatifs : pas assez, presque pas.</p>
<p><s-en>I've got a few euros left: let's get a coffee.</s-en> (il me reste quelques euros : une bonne nouvelle) · <s-en>Few people can afford a flat in the centre.</s-en> (peu de gens peuvent s'offrir un appartement dans le centre : un problème)</p>
<p>À l'oral, <s-en>few</s-en> et <s-en>little</s-en> sonnent assez soutenus ; on dit plutôt <s-en>not many</s-en>, <s-en>not much</s-en> ou <s-en>hardly any</s-en>.</p>
<div class="tip">Un piège : <s-en>quite a few</s-en> veut dire « un assez grand nombre », pas « quelques-uns ». <s-en>Quite a few shops have closed.</s-en> = pas mal de magasins ont fermé.</div>
<h2>Les proportions</h2>
<p><s-en>the vast majority of shoppers</s-en> (la grande majorité des clients) · <s-en>most people</s-en> (la plupart des gens) · <s-en>a minority of customers</s-en> (une minorité de clients) · <s-en>none of the shops</s-en> (aucun des magasins).</p>
<p>Attention à <s-en>most</s-en> : <s-en>most people</s-en> (les gens en général, sans « the » ni « of »), mais <s-en>most of the people I know</s-en> (un groupe précis : <s-en>of</s-en> devant <s-en>the, my, these…</s-en>).</p>
`,
    examples: [
      ["A large number of shops closed during the crisis.", "Un grand nombre de magasins ont fermé pendant la crise."],
      ["They spent a great deal of money on advertising.", "Ils ont dépensé énormément d'argent en publicité."],
      ["There were hardly any customers in the shop.", "Il n'y avait presque aucun client dans le magasin."],
      ["I've got a few euros left: let's get a coffee.", "Il me reste quelques euros : allons prendre un café."],
      ["Few people can afford a flat in the city centre.", "Peu de gens peuvent s'offrir un appartement en centre-ville."],
      ["Quite a few of my friends buy their clothes second-hand.", "Pas mal de mes amis achètent leurs vêtements d'occasion."],
      ["The vast majority of shoppers compare prices online.", "La grande majorité des consommateurs comparent les prix en ligne."],
      ["Don't worry, we've got plenty of time.", "Ne t'inquiète pas, on a tout notre temps."]
    ],
    quiz: [
      { q: "They spent a great ___ of money on the new shop.", q_fr: "Complète : « They spent a great ___ of money on the new shop. »", o: ["number", "deal", "many"], a: 1, ex: "a great deal of + uncountable (money). A large number of + plural.", ex_fr: "a great deal of + indénombrable (money). A large number of + pluriel." },
      { q: "I've got ___ friends who could help: I'm lucky.", q_fr: "Complète : « I've got ___ friends who could help: I'm lucky. »", o: ["few", "little", "a few"], a: 2, ex: "a few = some (positive). Few = almost none (negative).", ex_fr: "a few = quelques-uns (positif). Few = presque aucun (négatif)." },
      { q: "“Quite a few shops have closed” means:", q_fr: "« Quite a few shops have closed » veut dire :", o: ["Many shops have closed.", "Only one or two shops have closed.", "No shops have closed."], a: 0, ex: "quite a few = a fairly large number.", ex_fr: "quite a few = un assez grand nombre." },
      { q: "There's ___ milk left: can you buy some?", q_fr: "Complète : « There's ___ milk left: can you buy some? »", o: ["a few", "hardly any", "plenty of"], a: 1, ex: "hardly any = almost no. Milk is uncountable, so not a few.", ex_fr: "hardly any = presque pas de. Milk est indénombrable : pas a few." },
      { q: "Which sentence is correct?", q_fr: "Quelle phrase est correcte ?", o: ["Most of people shop online.", "The most people shop online.", "Most people shop online."], a: 2, ex: "most + noun for people in general; most of the / my + noun for a specific group.", ex_fr: "most + nom pour les gens en général ; most of the / my + nom pour un groupe précis." }
    ]
  },
  {
    id: 134, after: 41, level: "B2", kind: "functional", icon: "scale",
    title: "Everyday English: comparing offers and recommending", title_fr: "Anglais pratique : comparer des offres et recommander",
    subtitle: "Weigh up two options, explain the pros and cons, and say which one you'd go for.", subtitle_fr: "Peser deux options, expliquer les avantages et les inconvénients, et dire laquelle tu choisirais.",
    body: `
<h2>Comparing the options</h2>
<p><s-en>The first one is slightly cheaper, but the second one includes more data.</s-en> · <s-en>It works out cheaper in the long run.</s-en> · <s-en>There isn't much difference between them.</s-en> · <s-en>The second plan is far better value for money.</s-en></p>
<h2>Pros and cons</h2>
<table>
<tr><th>Advantages</th><th>Disadvantages</th></tr>
<tr><td><s-en>The main advantage is that…</s-en></td><td><s-en>The main drawback is that…</s-en></td></tr>
<tr><td><s-en>What I like about it is…</s-en></td><td><s-en>The catch is that…</s-en> (the hidden problem)</td></tr>
<tr><td><s-en>On the plus side,…</s-en></td><td><s-en>On the downside,…</s-en></td></tr>
</table>
<h2>Asking the right questions</h2>
<p><s-en>Is there a minimum contract?</s-en> · <s-en>Are there any hidden fees?</s-en> · <s-en>What happens if I cancel?</s-en> · <s-en>Does the price go up after the first year?</s-en></p>
<h2>Recommending</h2>
<p><s-en>If I were you, I'd go for the second one.</s-en> · <s-en>It depends on how much you use it.</s-en> · <s-en>I'd recommend the cheaper one, unless you travel a lot.</s-en> · <s-en>On balance, the first one makes more sense.</s-en></p>
<div class="tip">Grammar: <s-en>recommend</s-en> is followed by a noun, an -ing form or a that-clause: <s-en>I recommend this plan.</s-en> · <s-en>I recommend comparing prices.</s-en> · <s-en>I recommend that you compare prices.</s-en> Avoid <s-en>I recommend you to compare</s-en>.</div>
`,
    body_fr: `
<h2>Comparer les options</h2>
<p><s-en>The first one is slightly cheaper, but the second one includes more data.</s-en> (la première est un peu moins chère, mais la seconde inclut plus de données) · <s-en>It works out cheaper in the long run.</s-en> (ça revient moins cher à long terme) · <s-en>There isn't much difference between them.</s-en> (il n'y a pas beaucoup de différence) · <s-en>The second plan is far better value for money.</s-en> (le second forfait a un bien meilleur rapport qualité-prix)</p>
<h2>Avantages et inconvénients</h2>
<table>
<tr><th>Avantages</th><th>Inconvénients</th></tr>
<tr><td><s-en>The main advantage is that…</s-en> (le principal avantage, c'est que…)</td><td><s-en>The main drawback is that…</s-en> (le principal inconvénient, c'est que…)</td></tr>
<tr><td><s-en>What I like about it is…</s-en> (ce qui me plaît, c'est…)</td><td><s-en>The catch is that…</s-en> (le piège, c'est que…)</td></tr>
<tr><td><s-en>On the plus side,…</s-en> (côté positif…)</td><td><s-en>On the downside,…</s-en> (côté négatif…)</td></tr>
</table>
<h2>Poser les bonnes questions</h2>
<p><s-en>Is there a minimum contract?</s-en> (y a-t-il une durée d'engagement ?) · <s-en>Are there any hidden fees?</s-en> (y a-t-il des frais cachés ?) · <s-en>What happens if I cancel?</s-en> (que se passe-t-il si je résilie ?) · <s-en>Does the price go up after the first year?</s-en> (le prix augmente-t-il après la première année ?)</p>
<h2>Recommander</h2>
<p><s-en>If I were you, I'd go for the second one.</s-en> (à ta place, je prendrais la deuxième) · <s-en>It depends on how much you use it.</s-en> (ça dépend de combien tu t'en sers) · <s-en>I'd recommend the cheaper one, unless you travel a lot.</s-en> (je recommanderais la moins chère, sauf si tu voyages beaucoup) · <s-en>On balance, the first one makes more sense.</s-en> (tout bien pesé, la première est plus logique)</p>
<div class="tip">Grammaire : <s-en>recommend</s-en> est suivi d'un nom, d'une forme en -ing ou d'une proposition en that : <s-en>I recommend this plan.</s-en> · <s-en>I recommend comparing prices.</s-en> · <s-en>I recommend that you compare prices.</s-en> Évite <s-en>I recommend you to compare</s-en>.</div>
`,
    examples: [
      ["The first one is slightly cheaper, but the second one includes more data.", "La première est un peu moins chère, mais la seconde inclut plus de données."],
      ["It works out cheaper in the long run.", "Ça revient moins cher à long terme."],
      ["The main drawback is the twelve-month contract.", "Le principal inconvénient, c'est l'engagement de douze mois."],
      ["Are there any hidden fees?", "Y a-t-il des frais cachés ?"],
      ["The catch is that the price goes up after six months.", "Le piège, c'est que le prix augmente au bout de six mois."],
      ["If I were you, I'd go for the second one.", "À ta place, je prendrais la deuxième."],
      ["I'd recommend the cheaper one, unless you travel a lot.", "Je recommanderais la moins chère, sauf si tu voyages beaucoup."]
    ],
    quiz: [
      { q: "“It works out cheaper” means:", q_fr: "« It works out cheaper » veut dire :", o: ["It isn't working.", "In the end, it costs less.", "It's cheap because it's for sport."], a: 1, ex: "work out = come to (a total) in the end.", ex_fr: "work out = revenir à (un total), au final." },
      { q: "“The catch is that…” introduces:", q_fr: "« The catch is that… » introduit :", o: ["a hidden problem", "an advantage", "a price"], a: 0, ex: "the catch = the hidden problem in an offer that looks good.", ex_fr: "the catch = le piège caché d'une offre qui semble bonne." },
      { q: "Which sentence is correct?", q_fr: "Quelle phrase est correcte ?", o: ["I recommend to take the first one.", "I recommend you to take the first one.", "I recommend taking the first one."], a: 2, ex: "recommend + -ing (or recommend that…).", ex_fr: "recommend + -ing (ou recommend that…)." },
      { q: "If I were you, I'd ___ for the cheaper plan.", q_fr: "Complète : « If I were you, I'd ___ for the cheaper plan. »", o: ["take", "go", "choose"], a: 1, ex: "go for = choose (informal).", ex_fr: "go for = choisir (familier)." },
      { q: "To ask about extra costs, you say:", q_fr: "Pour demander s'il y a des coûts en plus, tu dis :", o: ["Are there any hidden fees?", "Is it hidden?", "Are there hidden prices?"], a: 0, ex: "fees = money you pay for a service; hidden fees = frais cachés.", ex_fr: "fees = frais ; hidden fees = frais cachés." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    133: {
      gap: [["There were ___ customers today: almost nobody came. (presque aucun)", "hardly any"], ["We've got ___ of time: the shop's open until ten. (plein de)", "plenty"], ["A large ___ of people shop online. (nombre)", "number"], ["___ of my friends have a credit card. (la plupart)", "Most"]],
      fix: [["I have few money left until the end of the month.", "I have little money left until the end of the month.|I have very little money left until the end of the month.|I don't have much money left until the end of the month.", "Money is uncountable: little, not few."], ["The most people prefer to pay by card.", "Most people prefer to pay by card.", "No the before most when you mean people in general."]],
      task: ["Write four sentences about shopping habits in your country, with the vast majority of, quite a few, hardly any and a great deal of.", "Écris quatre phrases sur les habitudes de consommation dans ton pays, avec the vast majority of, quite a few, hardly any et a great deal of.", "The vast majority of people buy their food in supermarkets. Quite a few of my friends sell their old clothes online. Hardly anyone pays by cheque anymore. Young people spend a great deal of money on their phones."]
    },
    134: {
      gap: [["The main ___ is that you have to sign for two years. (inconvénient)", "drawback|disadvantage"], ["It works ___ cheaper if you pay for the whole year. (revenir)", "out"], ["If I ___ you, I'd wait for the sales. (être)", "were|was"], ["Are there any ___ fees? (cachés)", "hidden"]],
      fix: [["I recommend you to compare the two offers.", "I recommend comparing the two offers.|I recommend that you compare the two offers.|I'd recommend comparing the two offers.", "Recommend + -ing or recommend that…, not recommend you to."], ["This offer is a good affair.", "This offer is a good deal.|This is a good deal.", "Une bonne affaire = a good deal (an affair is a relationship or an event)."]],
      task: ["A friend hesitates between two phone plans: 15 euros a month with a one-year contract, or 20 euros a month with no contract. Write a short message comparing them and recommending one.", "Une amie hésite entre deux forfaits : 15 euros par mois avec un engagement d'un an, ou 20 euros par mois sans engagement. Écris un court message pour les comparer et en recommander un.", "The first one works out cheaper: you'd save sixty euros over a year. The catch is that you're stuck with it for twelve months. The second one is more flexible, which is useful if you might move abroad. If I were you, I'd go for the first one, unless you think you'll change soon."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "twogyms", lesson: 134, level: "B2", icon: "dumbbell", partner: "Jess", role: "your friend",
    title: "Helping a friend choose", title_fr: "Aider une amie à choisir",
    setting: "Your friend Jess wants to join a gym and can't decide between two offers. Help her compare them.", setting_fr: "Ton amie Jess veut s'inscrire dans une salle de sport et hésite entre deux offres. Aide-la à les comparer.",
    turns: [
      { p: "I need your help. The big gym in town is thirty euros a month, but you have to sign up for a year. The council gym is forty a month, with no contract. Which would you go for?", fr: "J'ai besoin de toi. La grande salle du centre coûte trente euros par mois, mais il faut s'engager pour un an. La salle municipale coûte quarante par mois, sans engagement. Tu prendrais laquelle ?" },
      { y: ["It depends on how often you'll actually go. The first one works out cheaper, but only if you go for the whole year.", "It depends of how often you go. The first is cheaper.", "It depends on how often you'll actually go. The first one works cheaper, but only if you go for the whole year."], fr: "Ça dépend de la fréquence à laquelle tu iras vraiment. La première revient moins cher, mais seulement si tu y vas toute l'année.", why: "It depends on, not of. Works out cheaper: the phrasal verb needs out." },
      { p: "Honestly? Last time I joined a gym, I stopped going after two months.", fr: "Honnêtement ? La dernière fois que je me suis inscrite dans une salle, j'ai arrêté d'y aller au bout de deux mois." },
      { y: ["In that case, the catch with the first one is that you'd still have to pay for the other ten months.", "Then the first one is a trap, you pay all.", "In that case, the catch of the first one is that you'd still have to pay for the ten other months."], fr: "Dans ce cas, le piège avec la première, c'est que tu devrais quand même payer les dix autres mois.", why: "The catch with… And the other ten months: the number comes after other." },
      { p: "Good point. But forty a month is a lot. Is there anything else I should check?", fr: "Bien vu. Mais quarante par mois, c'est beaucoup. Il y a autre chose que je devrais vérifier ?" },
      { y: ["Ask if there are any hidden fees. Some gyms charge a joining fee, so it's worth asking before you sign.", "Ask the fees hidden. Ask before.", "Ask if there are any hidden fees. Some gyms charge a joining fee, so it's worth to ask before you sign."], fr: "Demande s'il y a des frais cachés. Certaines salles font payer des frais d'inscription, donc ça vaut le coup de demander avant de signer.", why: "It's worth + -ing: it's worth asking." },
      { p: "Oh, and the big gym has a pool. The council one doesn't.", fr: "Ah, et la grande salle a une piscine. La municipale, non." },
      { y: ["On the plus side, then, you'd get more for your money, as long as you really use the pool.", "So the big gym is better, because pool.", "On the plus side, then, you'd get more for your money, as long as you will really use the pool."], fr: "Côté positif, alors, tu en aurais plus pour ton argent, à condition de vraiment utiliser la piscine.", why: "As long as + present, not will." },
      { p: "So, what would you do if you were me?", fr: "Alors, tu ferais quoi à ma place ?" },
      { y: ["If I were you, I'd go for the council gym for a couple of months, and switch if you're still going regularly.", "I go for the council gym if I am you.", "If I would be you, I'd go for the council gym for a couple of months."], fr: "À ta place, je prendrais la salle municipale pendant deux ou trois mois, et je changerais si tu y vas toujours régulièrement.", why: "If I were you, I'd… (second conditional, no would after if)." }
    ] }
  );

  W.READINGS.push({
    id: "spendmore", level: "B2", icon: "shopping-bag", title: "Why we spend more than we mean to", title_fr: "Pourquoi on dépense plus que prévu", genre: "Feature article",
    intro: "A feature article about the tricks that make us spend more. Quantity words (a great deal of, hardly any, quite a few), money vocabulary and cautious claims.",
    intro_fr: "Un article de fond sur les astuces qui nous font dépenser plus. Mots de quantité (a great deal of, hardly any, quite a few), vocabulaire de l'argent et affirmations prudentes.",
    paragraphs: [
      { en: "You go into a shop to buy a pair of socks and come out with socks, a scarf and a candle you had never even thought of. If this sounds familiar, you are not alone, and it is not entirely your fault. A great deal of research suggests that the way products are priced and presented is carefully designed to make us spend more than we planned.", fr: "Tu entres dans un magasin pour acheter une paire de chaussettes et tu ressors avec des chaussettes, une écharpe et une bougie à laquelle tu n'avais même jamais pensé. Si ça te dit quelque chose, tu n'es pas la seule, et ce n'est pas entièrement ta faute. De très nombreuses recherches suggèrent que la façon dont les produits sont présentés et leurs prix fixés est soigneusement conçue pour nous faire dépenser plus que prévu." },
      { en: "Take the “decoy effect”. In a well-known experiment described by the behavioural economist Dan Ariely, students were offered three subscriptions to a magazine: online only for 59 dollars, print only for 125 dollars, or print and online together for 125 dollars. Hardly anyone chose the print-only offer, but its presence made the combined offer look like a bargain, and most students went for it. When the print-only option was removed, the majority chose the cheaper online subscription instead.", fr: "Prenons l'« effet leurre ». Dans une expérience célèbre décrite par l'économiste comportemental Dan Ariely, on proposait à des étudiants trois abonnements à un magazine : en ligne seulement pour 59 dollars, papier seulement pour 125 dollars, ou papier et en ligne pour 125 dollars. Presque personne n'a choisi l'offre papier seule, mais sa présence donnait à l'offre combinée l'air d'une bonne affaire, et la plupart des étudiants l'ont prise. Quand l'option papier seule a été retirée, la majorité a choisi à la place l'abonnement en ligne, moins cher." },
      { en: "Then there is “anchoring”. The first price we see becomes a reference point for everything that follows. A jacket marked “was 200 euros, now 120” feels like a good deal, even if 120 euros is far more than we would normally pay. Restaurants use a similar trick: a very expensive dish at the top of the menu makes everything else look reasonable, even though few customers actually order it.", fr: "Il y a ensuite l'« ancrage ». Le premier prix que nous voyons devient un point de référence pour tout ce qui suit. Une veste affichée « 200 euros, maintenant 120 » donne l'impression d'une bonne affaire, même si 120 euros, c'est bien plus que ce que nous paierions normalement. Les restaurants utilisent une astuce semblable : un plat très cher en haut de la carte rend tout le reste raisonnable, alors que peu de clients le commandent vraiment." },
      { en: "How we pay matters too. Handing over banknotes is mildly painful; tapping a card or a phone is hardly noticeable. Several studies suggest that people tend to spend more when they pay by card than when they pay in cash, and “buy now, pay later” services make the pain of paying feel even more distant. The money still leaves our account, of course: we simply notice it less.", fr: "La façon de payer compte aussi. Tendre des billets est légèrement douloureux ; effleurer une carte ou un téléphone se remarque à peine. Plusieurs études suggèrent qu'on a tendance à dépenser plus quand on paie par carte que quand on paie en espèces, et les services de paiement fractionné rendent la douleur de payer encore plus lointaine. L'argent quitte quand même notre compte, bien sûr : nous le remarquons simplement moins." },
      { en: "None of this means that every shop is trying to trick us, or that we are helpless. Quite a few simple habits can help. Making a list before going shopping, waiting twenty-four hours before any purchase over a certain amount, and comparing the price per kilo or per use rather than the total price are all surprisingly effective.", fr: "Rien de tout cela ne signifie que chaque magasin essaie de nous piéger, ni que nous sommes impuissants. Pas mal d'habitudes simples peuvent aider. Faire une liste avant d'aller faire les courses, attendre vingt-quatre heures avant tout achat au-dessus d'un certain montant, et comparer le prix au kilo ou à l'utilisation plutôt que le prix total sont des méthodes étonnamment efficaces." },
      { en: "Perhaps the most useful question, though, is the simplest: would I still want this if it weren't on sale? If the honest answer is no, it probably isn't a bargain, however good the deal looks.", fr: "La question la plus utile est peut-être pourtant la plus simple : est-ce que je le voudrais encore s'il n'était pas en promotion ? Si la réponse honnête est non, ce n'est probablement pas une bonne affaire, aussi alléchante que l'offre paraisse." }
    ],
    glossary: { "socks": "chaussettes", "scarf": "écharpe", "candle": "bougie", "decoy": "leurre", "subscriptions": "abonnements", "bargain": "bonne affaire", "removed": "retiré", "dish": "plat", "banknotes": "billets", "mildly": "légèrement", "tapping": "effleurer", "helpless": "impuissants", "purchase": "achat", "trick": "piéger, astuce", "honest": "honnête" },
    questions: [
      { q: "What is the main idea of the article?", o: ["Prices and shops are often designed to make us spend more", "People should never use cards", "Socks are overpriced"], a: 0 },
      { q: "In the magazine experiment, why was the print-only offer useful to the seller?", o: ["Many students bought it", "It was the cheapest offer", "It made the combined offer look like a bargain"], a: 2 },
      { q: "What is “anchoring”?", o: ["Using the first price we see as a reference", "Paying only in cash", "Putting expensive products near the door"], a: 0 },
      { q: "Why might paying by card make us spend more?", o: ["Cards have hidden fees", "We notice the money leaving less", "Shops refuse cash"], a: 1 },
      { q: "Which habit does the article NOT suggest?", o: ["Waiting a day before a big purchase", "Making a list", "Only shopping during the sales"], a: 2 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-b2-8", unit: "b2-8", level: "B2", icon: "radio",
    title: "A phone-in about debt", title_fr: "Une émission sur les dettes",
    context: "On a radio phone-in, the presenter, Kate, and a money expert, Mark, take a call from Ben, who is worried about his debts.", context_fr: "Dans une émission de radio où les auditeurs appellent, l'animatrice, Kate, et un expert en finances, Mark, répondent à Ben, inquiet de ses dettes.",
    words: [["a phone-in", "une émission avec appels d'auditeurs"], ["interest", "les intérêts"], ["to pay off", "rembourser entièrement"], ["the minimum payment", "le remboursement minimum"], ["to cut back on", "réduire (ses dépenses en)"]],
    lines: [["Kate", "Our next caller is Ben. Ben, you're on the line. What's your question?", "en-GB"], ["Ben", "Hi Kate. So, I've got about four thousand pounds of debt on two credit cards, and I can only manage the minimum payment every month. It never seems to go down.", "en-AU"], ["Mark", "Ben, first of all, well done for calling. So many people in your situation just try not to think about it. The reason it never goes down is interest. If you only pay the minimum, most of your payment goes on interest, and hardly any of it reduces the debt itself.", "en-US"], ["Ben", "Right. So what should I do?", "en-AU"], ["Mark", "Step one: write down exactly what you owe, and the interest rate on each card. Step two: keep paying the minimum on both, but put every extra pound you can find towards the card with the highest rate. Once that's paid off, move on to the other one.", "en-US"], ["Kate", "And should he stop using the cards completely?", "en-GB"], ["Mark", "While he's paying them off, absolutely. And Ben, be careful with “buy now, pay later” offers. They feel like free money, but they're just another kind of debt.", "en-US"], ["Ben", "That's fair. I've used a couple of those. What if I can't find any extra money?", "en-AU"], ["Mark", "Then make a budget: list everything you spend in a month. Most people find a few things they can cut back on. And if it still doesn't add up, there are free debt advice services that can help you talk to the banks. Don't pay a company to do it.", "en-US"], ["Kate", "Great advice. Good luck, Ben.", "en-GB"]],
    gist: ["What is Ben's problem?", ["His credit card debts aren't going down", "He has lost his credit card", "He wants to borrow money for a car"]],
    detail: [["Why does Ben's debt never seem to go down?", ["Most of his payments go on interest.", "He forgets to pay.", "The bank made a mistake."]], ["Which card should he pay off first?", ["The one with the highest interest rate", "The one with the smallest debt", "The newest one"]], ["What does Mark say about “buy now, pay later”?", ["It's another kind of debt.", "It's free money.", "It's the best way to pay off a card."]], ["What should Ben do if he can't find any extra money?", ["Make a budget, and contact a free advice service if necessary.", "Pay a company to talk to the banks.", "Get a third credit card."]]],
    decode: ["hardly any of it reduces the debt itself", "Most people find a few things they can cut back on."],
    tip: "Experts organise their advice in steps: step one, step two, once that's done… Listen for these signposts, and for the quantity words of the unit: hardly any of it, a few things, so many people.", tip_fr: "Les experts organisent leurs conseils en étapes : step one, step two, once that's done… Guette ces repères, et les mots de quantité de l'unité : hardly any of it, a few things, so many people."
  }]);

  W.PROMPTS.push({ id: "b2-money", level: "B2", q: "Are you a saver or a spender? Tell me about something you bought that you didn't really need.", fr: "Es-tu plutôt du genre à économiser ou à dépenser ? Parle-moi d'un achat dont tu n'avais pas vraiment besoin.", time: 90,
    phrases: ["I'd say I'm more of a…", "I couldn't resist…", "It was a bit of an impulse buy.", "Looking back, it wasn't worth it.", "These days, I try to…"],
    model: "I'd say I'm more of a saver, but I do have my weak moments. Last winter, I walked past a kitchen shop and saw a very expensive coffee machine in the window. It was on sale, so I couldn't resist. To be honest, it was a bit of an impulse buy: I already had a perfectly good coffee maker at home. Looking back, it wasn't really worth it, because I hardly ever use the fancy functions. These days, I try to wait a few days before buying anything over fifty euros. Most of the time, I realise I don't need it after all." });

  W.WRITING_GUIDE["b2-8"] = { genre: "A review (B2 First)", genre_fr: "Une critique (B2 First)",
    plan: [["A title and an opening that hook the reader.", "Un titre et une ouverture qui accrochent le lecteur."], ["Describe the place: what it is, where it is, what it sells.", "Décris le lieu : ce que c'est, où il se trouve, ce qu'il vend."], ["What's good, with a precise example.", "Ce qui est bien, avec un exemple précis."], ["What could be better.", "Ce qui pourrait être mieux."], ["Your verdict, and who you'd recommend it to.", "Ton verdict, et à qui tu le recommanderais."]],
    marks: [["second-hand, first-class", "a catchy title with a contrast", "un titre accrocheur avec un contraste"], ["If you're looking for good clothes at hardly any cost, look no further.", "an opening that speaks to the reader", "une ouverture qui s'adresse au lecteur"], ["What I like most about it is the choice.", "a cleft sentence to introduce the strengths", "une phrase clivée pour amener les points forts"], ["Quite a few of the clothes", "quite a few = a fairly large number", "quite a few = un assez grand nombre"], ["I picked up a wool coat for twelve euros", "a precise example", "un exemple précis"], ["would have cost an arm and a leg", "an idiom, with the third conditional", "une expression, avec le conditionnel passé"], ["The only drawback is that", "introducing the weakness", "amener le point faible"], ["Overall,", "starting the verdict", "commencer le verdict"], ["excellent value for money", "a key collocation for reviews", "une collocation clé des critiques"], ["I'd recommend it to anyone on a tight budget", "saying who it's for", "dire pour qui c'est"]] };

  W.LEXIS["b2-8"] = {
    colloc: [
      ["save up for", "économiser pour", "I'm saving up for a new laptop.", "saving", ["economising", "sparing"]],
      ["a good deal", "une bonne affaire", "Fifty euros for three months is a really good deal.", "deal", ["affair", "business"]],
      ["make a profit", "faire des bénéfices", "The shop made a profit for the first time last year.", "made", ["did", "won"]],
      ["get into debt", "s'endetter", "Many students get into debt during their studies.", "get", ["make", "take"]],
      ["a full refund", "un remboursement intégral", "The shop gave me a full refund.", "full", ["whole", "integral"]],
      ["spend money on", "dépenser de l'argent pour", "I spend too much money on clothes.", "on", ["for", "to"]],
      ["value for money", "un bon rapport qualité-prix", "The meals are excellent value for money.", "value", ["worth", "price"]],
      ["a tight budget", "un budget serré", "We're on a tight budget this month.", "tight", ["narrow", "short"]],
      ["withdraw money", "retirer de l'argent", "I need to withdraw some money from the cash machine.", "withdraw", ["remove", "retire"]],
      ["make ends meet", "joindre les deux bouts", "With prices rising, many families struggle to make ends meet.", "ends", ["sides", "edges"]]
    ],
    wf: [
      ["The ___ of the new shopping centre created two hundred jobs. (OPEN)", "opening"],
      ["Prices have risen ___ over the past year. (DRAMATIC)", "dramatically"],
      ["These headphones were a bit ___, but they're worth it. (PRICE)", "pricey|pricy"],
      ["Most ___ now buy something online at least once a week. (CONSUME)", "consumers"],
      ["His business was so ___ that he retired at fifty. (PROFIT)", "profitable"],
      ["She's very ___ with money: she never wastes a penny. (CARE)", "careful"],
      ["It's ___ to compare prices before you buy. (ADVISE)", "advisable"],
      ["The ___ of the euro made our holiday more expensive. (WEAK)", "weakness|weakening"]
    ],
    kwt: [
      ["There were very few customers in the shop.", "HARDLY", "There ___ customers in the shop.", "were hardly any"],
      ["We have a lot of time before the shop closes.", "PLENTY", "We ___ time before the shop closes.", "have plenty of|have got plenty of|'ve got plenty of"],
      ["Not many people can afford a house in the city centre.", "FEW", "___ afford a house in the city centre.", "few people can|very few people can"],
      ["It isn't worth buying the cheapest phone.", "POINT", "There's ___ the cheapest phone.", "no point in buying|no point buying"],
      ["I can't afford a new car.", "ENOUGH", "I don't ___ a new car.", "have enough money for|have enough money to buy|have enough to buy"],
      ["The tickets were so expensive that we didn't buy them.", "TOO", "The tickets were ___ buy.", "too expensive for us to|too expensive to"]
    ],
    idioms: [
      ["cost an arm and a leg", "be very expensive", "coûter les yeux de la tête", "That watch cost an arm and a leg.", "cost an arm and a leg"],
      ["a rip-off", "something that costs far too much", "une arnaque (un prix abusif)", "Ten euros for a coffee? What a rip-off!", "a rip-off"],
      ["strapped for cash", "having very little money", "à court d'argent", "I'm a bit strapped for cash until payday.", "strapped for cash"],
      ["pay through the nose", "pay far too much", "payer le prix fort", "We paid through the nose for those concert tickets.", "paid through the nose"],
      ["pick up", "buy something, often cheaply", "dénicher, acheter", "I picked up this jacket in the sales.", "picked up"],
      ["live beyond your means", "spend more than you earn", "vivre au-dessus de ses moyens", "They had been living beyond their means for years.", "living beyond their means"],
      ["chip in", "each give some money for something", "se cotiser, mettre au pot", "We all chipped in to buy her a present.", "chipped in"],
      ["well off", "quite rich", "aisé", "His parents are quite well off.", "well off"]
    ]
  };

  /* The unit, before Building an argument; the money themes and the "noclothes" text move here. */
  const move = (from, key, ids) => { const u = W.COURSE.find((x) => x.id === from); if (u) u[key] = (u[key] || []).filter((x) => !ids.includes(x)); };
  move("b2-3", "vocab", ["consommation", "business", "businessB2"]); move("b2-6", "vocab", ["idiomsB2"]); move("b2-3", "extra", ["noclothes"]);
  const unit = { id: "b2-8", level: "B2", icon: "wallet", title: "Money matters", title_fr: "Questions d'argent",
    intro: "Prices, deals, debts, and the small choices we make every day as consumers: money is a subject we can hardly avoid. In this unit, you'll talk about amounts precisely, compare offers, understand how shops influence what we buy, and write a review.",
    intro_fr: "Les prix, les bonnes affaires, les dettes et les petits choix que nous faisons chaque jour en tant que consommateurs : l'argent est un sujet qu'on ne peut guère éviter. Dans cette unité, tu parleras de quantités avec précision, tu compareras des offres, tu comprendras comment les magasins influencent nos achats et tu rédigeras une critique.",
    can: ["Talk about amounts precisely (a great deal of, few or a few, hardly any)", "Compare two offers and recommend one", "Understand how prices and ways of paying influence what we buy", "Write a review of a shop or a service"],
    can_fr: ["Parler de quantités avec précision (a great deal of, few ou a few, hardly any)", "Comparer deux offres et en recommander une", "Comprendre comment les prix et les moyens de paiement influencent nos achats", "Rédiger la critique d'une boutique ou d'un service"],
    lessons: [133, 134], vocab: ["consommation", "business", "businessB2", "idiomsB2"], reading: "spendmore", extra: ["noclothes"], prompt: "b2-money",
    writing: { task: "Write a review (150-180 words) for a consumer website of a shop, a market or a website where you buy second-hand things. Describe it, say what is good value and what could be better, and say who you would recommend it to.", task_fr: "Rédige une critique (150-180 mots) pour un site de consommateurs sur une boutique, un marché ou un site où tu achètes d'occasion. Décris-le, dis ce qui est une bonne affaire et ce qui pourrait être mieux, et dis à qui tu le recommanderais.", words: "150-180",
      tips: ["If you're looking for…, look no further.", "What I like most about it is…", "The only drawback is that…", "It's excellent value for money.", "I'd recommend it to anyone who…"],
      checklist: ["My title and first sentence make the reader want to read on", "I described the place with precise details", "I gave both strengths and a weakness", "I used at least two quantity expressions (quite a few, hardly any, a great deal of…)", "I said clearly who I'd recommend it to"],
      model: "The Swap Shop, Mill Street: second-hand, first-class\n\nIf you're looking for good clothes at hardly any cost, look no further. The Swap Shop, a small charity shop near the station, has become my favourite place to buy clothes.\n\nWhat I like most about it is the choice. Quite a few of the clothes are almost new, and some still have their original labels. Last month, I picked up a wool coat for twelve euros; in a high-street shop, the same coat would have cost an arm and a leg. The staff, all volunteers, are friendly and helpful.\n\nThe only drawback is that the shop is tiny, so on Saturday mornings it can get very crowded. It also sells very few shoes, and it closes at five.\n\nOverall, the Swap Shop is excellent value for money, and every purchase supports a local charity. I'd recommend it to anyone on a tight budget, and to anyone who wants to buy fewer new clothes. Just go early!" } };
  W.COURSE.splice(W.COURSE.findIndex((u) => u.id === "b2-5"), 0, unit);
})();
