/* Oral B1 → C1 : phrases à répéter + sujets de prise de parole libre. */
window.SPEAKING.push(
{ id: "avis", level: "B1", icon: "message-square-more", title: "Donner son avis", phrases: [
  ["In my opinion, it's a great idea.", "À mon avis, c'est une super idée."],
  ["I'm not sure I agree with you.", "Je ne sais pas si je suis d'accord avec toi."],
  ["That's a good point, actually.", "C'est un bon argument, en fait."],
  ["I see what you mean, but…", "Je vois ce que tu veux dire, mais…"],
  ["It depends on the situation.", "Ça dépend de la situation."],
  ["I've changed my mind about it.", "J'ai changé d'avis là-dessus."],
  ["On the one hand it's cheap, on the other hand it's far.", "D'un côté c'est pas cher, de l'autre c'est loin."],
  ["As far as I'm concerned, it's not worth it.", "En ce qui me concerne, ça n'en vaut pas la peine."]
]},
{ id: "work", level: "B1", icon: "briefcase", title: "Au travail", phrases: [
  ["I've been working in this field for several years.", "Je travaille dans ce domaine depuis plusieurs années."],
  ["Could we schedule a call for next week?", "Pourrait-on prévoir un appel la semaine prochaine ?"],
  ["I'll send you the files by Friday.", "Je t'envoie les fichiers d'ici vendredi."],
  ["Let me check and get back to you.", "Je vérifie et je reviens vers toi."],
  ["What's the deadline for this project?", "Quelle est la date limite pour ce projet ?"],
  ["I'm afraid I can't make it to the meeting.", "J'ai bien peur de ne pas pouvoir venir à la réunion."],
  ["Thanks for your feedback, it's really helpful.", "Merci pour ton retour, ça m'aide beaucoup."],
  ["Could you clarify what you mean?", "Pourrais-tu préciser ce que tu veux dire ?"]
]},
{ id: "nuance", level: "B2", icon: "scale", title: "Argumenter et nuancer", phrases: [
  ["I take your point, but I'd see it slightly differently.", "Je comprends ton argument, mais je le verrais un peu autrement."],
  ["That's true to some extent.", "C'est vrai dans une certaine mesure."],
  ["Having said that, there are some drawbacks.", "Cela dit, il y a quelques inconvénients."],
  ["The main problem is that it's not sustainable.", "Le principal problème, c'est que ce n'est pas durable."],
  ["Even though it's expensive, I think it's worth it.", "Même si c'est cher, je pense que ça vaut le coup."],
  ["If I'd known that, I would have done things differently.", "Si j'avais su ça, j'aurais fait les choses autrement."],
  ["Let's weigh up the pros and cons.", "Pesons le pour et le contre."],
  ["You should have told me earlier.", "Tu aurais dû me le dire plus tôt."]
]},
{ id: "phrasal", level: "B2", icon: "magnet", title: "Phrasal verbs en contexte", phrases: [
  ["We need to come up with a better plan.", "Il faut qu'on trouve un meilleur plan."],
  ["I can't put up with this noise any longer.", "Je ne supporte plus ce bruit."],
  ["It turned out to be a great decision.", "Ça s'est avéré être une excellente décision."],
  ["Let's catch up over coffee next week.", "Prenons un café la semaine prochaine pour se donner des nouvelles."],
  ["She's going through a difficult time.", "Elle traverse une période difficile."],
  ["Don't worry, we'll sort it out.", "Ne t'inquiète pas, on va régler ça."],
  ["I ran into an old friend yesterday.", "Je suis tombée sur une vieille amie hier."],
  ["I've finally taken up yoga.", "Je me suis enfin mise au yoga."]
]},
{ id: "idioms", level: "C1", icon: "drama", title: "Expressions idiomatiques", phrases: [
  ["Let's not beat around the bush.", "Ne tournons pas autour du pot."],
  ["Losing that job was a blessing in disguise.", "Perdre ce travail a été un mal pour un bien."],
  ["I'm still on the fence about it.", "J'hésite encore."],
  ["Let me play devil's advocate for a moment.", "Laisse-moi me faire l'avocat du diable un instant."],
  ["We need to address the elephant in the room.", "Il faut aborder le sujet qu'on évite tous."],
  ["She always goes the extra mile.", "Elle en fait toujours plus que nécessaire."],
  ["I passed by the skin of my teeth.", "J'ai réussi de justesse."],
  ["Take it with a pinch of salt.", "Prends ça avec des pincettes."]
]},
{ id: "formal", level: "C1", icon: "gem", title: "Registre soutenu", phrases: [
  ["I would be grateful if you could send me further details.", "Je vous serais reconnaissante de m'envoyer davantage de détails."],
  ["Please do not hesitate to contact me should you need anything.", "N'hésitez pas à me contacter si vous avez besoin de quoi que ce soit."],
  ["It could be argued that the benefits outweigh the risks.", "On pourrait soutenir que les avantages l'emportent sur les risques."],
  ["Not only is it efficient, but it is also cost-effective.", "Non seulement c'est efficace, mais c'est aussi rentable."],
  ["What concerns me most is the lack of transparency.", "Ce qui me préoccupe le plus, c'est le manque de transparence."],
  ["Had I been informed earlier, I would have reacted differently.", "Si j'avais été informée plus tôt, j'aurais réagi autrement."],
  ["I'm inclined to think that a compromise is possible.", "J'ai tendance à penser qu'un compromis est possible."],
  ["By and large, the project has been a success.", "Dans l'ensemble, le projet a été une réussite."]
]}
);

/* Parler librement : une question, on répond à voix haute, puis on compare avec un modèle. */
window.PROMPTS = [
  { level: "A2", q: "Describe your typical day.", fr: "Décris ta journée type.", time: 60,
    phrases: ["I usually…", "In the morning, I…", "After that…", "In the evening…", "I never…"],
    model: "I usually get up at around seven. First, I have a coffee and check my emails. Then I start work at nine. I'm a designer, so I spend most of the day on my computer. At lunchtime, I often go for a walk. In the evening, I cook dinner and watch a series, and I go to bed at about eleven." },
  { level: "A2", q: "Tell me about your last holiday.", fr: "Parle-moi de tes dernières vacances.", time: 60,
    phrases: ["Last summer, I went to…", "I stayed in…", "We visited…", "The weather was…", "The best moment was…"],
    model: "Last summer, I went to Portugal with a friend. We stayed in a small hotel in Lisbon for a week. We visited lots of beautiful places and ate delicious fish. The weather was hot and sunny. The best moment was a boat trip on the river at sunset. I'd love to go back one day." },
  { level: "B1", q: "Why are you learning English?", fr: "Pourquoi apprends-tu l'anglais ?", time: 90,
    phrases: ["I've always wanted to…", "The main reason is that…", "It would help me to…", "I'm hoping to…", "At the moment, I find it…"],
    model: "I'm learning English for several reasons. The main one is that I'd love to travel without depending on other people to translate for me. It would also be really useful for my job, because a lot of my potential clients speak English. At the moment, I find speaking the most difficult part, but I'm hoping that if I practise every day, I'll feel more confident in a few months." },
  { level: "B1", q: "Describe a person who has influenced you.", fr: "Décris une personne qui t'a influencée.", time: 90,
    phrases: ["The person I'd like to talk about is…", "I've known her/him since…", "What I admire most is…", "She/He taught me…", "Thanks to her/him, I…"],
    model: "The person I'd like to talk about is my grandmother. She lived through some very difficult times, but she was always positive and generous. What I admire most about her is her patience: she never got angry, even when I was a really annoying child. She taught me to cook and, more importantly, to never give up. Thanks to her, I believe that you can learn anything if you take your time." },
  { level: "B1", q: "Do you prefer living in a city or in the countryside?", fr: "Tu préfères vivre en ville ou à la campagne ?", time: 90,
    phrases: ["Personally, I prefer…", "On the one hand…", "On the other hand…", "The main advantage is…", "If I had the choice, I would…"],
    model: "Personally, I prefer living in a city, at least for now. On the one hand, there's so much to do: museums, restaurants, concerts, and you can meet people from all over the world. On the other hand, cities can be noisy, expensive and stressful. If I had the choice, I would probably live in a small town near a big city, so that I could have the best of both worlds." },
  { level: "B2", q: "Is social media doing more harm than good?", fr: "Les réseaux sociaux font-ils plus de mal que de bien ?", time: 120,
    phrases: ["It's a complex question…", "On the positive side…", "However, there's a darker side…", "What worries me most is…", "All things considered, I'd say…"],
    model: "It's a complex question, and I don't think there's a simple answer. On the positive side, social media allows us to keep in touch with friends abroad, discover new ideas and even find work. However, there's a darker side: it can be incredibly addictive, and constantly comparing ourselves with others can damage our self-esteem. What worries me most is the effect on teenagers. All things considered, I'd say it's a tool, and the problem isn't the tool itself, but how we use it." },
  { level: "B2", q: "Tell me about a decision you regret, or a risk you're glad you took.", fr: "Parle-moi d'une décision que tu regrettes, ou d'un risque que tu ne regrettes pas d'avoir pris.", time: 120,
    phrases: ["A few years ago, I decided to…", "At the time, I was worried that…", "Looking back,…", "If I hadn't…, I would never have…", "I wish I had…"],
    model: "A few years ago, I decided to leave a stable job and start working for myself. At the time, I was really worried that I wouldn't find enough clients and that I'd regret it. The first year was tough, to be honest. But looking back, it was the best decision I've ever made. If I hadn't taken that risk, I would never have discovered how much I enjoy choosing my own projects. The only thing I wish I had done differently is to save a bit more money beforehand." },
  { level: "B2", q: "Should everyone learn a foreign language at school?", fr: "Tout le monde devrait-il apprendre une langue étrangère à l'école ?", time: 120,
    phrases: ["I strongly believe that…", "One of the main arguments is…", "Moreover,…", "Some people argue that…, but…", "To sum up,…"],
    model: "I strongly believe that every child should learn at least one foreign language. One of the main arguments is that it opens doors, both professionally and personally. Moreover, learning another language helps you understand your own language better, and makes you more open to other cultures. Some people argue that it's a waste of time because everyone speaks English anyway, but I think that misses the point: a language isn't just a tool, it's a way of seeing the world. To sum up, the benefits far outweigh the costs." },
  { level: "C1", q: "To what extent does technology make us more productive?", fr: "Dans quelle mesure la technologie nous rend-elle plus productifs ?", time: 150,
    phrases: ["It's undeniable that…", "That said, it could be argued that…", "What's often overlooked is…", "To some extent,…", "On balance, I'm inclined to think…"],
    model: "It's undeniable that technology has transformed the way we work: tasks that once took days can now be done in minutes. That said, it could be argued that the gains aren't as dramatic as we like to think. What's often overlooked is the hidden cost of constant connectivity: endless notifications, the pressure to reply instantly, and the difficulty of switching off. To some extent, we've traded deep, focused work for a kind of permanent busyness. On balance, I'm inclined to think that technology makes us more productive only when we use it deliberately, rather than letting it dictate how we spend our attention." },
  { level: "C1", q: "What makes a city a good place to live?", fr: "Qu'est-ce qui fait d'une ville un bon endroit où vivre ?", time: 150,
    phrases: ["There are a number of factors…", "First and foremost,…", "Arguably, the most underrated aspect is…", "Not only…, but also…", "Ultimately,…"],
    model: "There are a number of factors, and they probably vary depending on your stage of life. First and foremost, I'd say affordable housing, because if people can't afford to live somewhere, nothing else really matters. Good public transport and green spaces come close behind. Arguably, though, the most underrated aspect is a sense of community: not only knowing your neighbours, but also having places where people from different backgrounds naturally cross paths, like markets, libraries or parks. Ultimately, a good city is one that's designed for the people who live in it, rather than for cars or tourists." },
  { level: "C1", q: "Is it ever right to break the rules?", fr: "Est-il parfois juste d'enfreindre les règles ?", time: 150,
    phrases: ["It largely depends on…", "Admittedly,…", "History is full of examples where…", "The difficulty lies in…", "All in all,…"],
    model: "It largely depends on which rules we're talking about and why they exist. Admittedly, a society in which everyone decided for themselves which rules to follow would quickly become chaotic. And yet, history is full of examples where breaking an unjust law was the only way to bring about change; we now regard many of those rule-breakers as heroes. The difficulty lies in telling the difference between principled disobedience and simple self-interest. All in all, I'd say that rules deserve our respect, but not our blind obedience, and that if you do break one, you should be prepared to accept the consequences openly." },
  { level: "C1", q: "Describe a book, film or artwork that changed the way you see something.", fr: "Décris un livre, un film ou une œuvre qui a changé ta façon de voir quelque chose.", time: 150,
    phrases: ["What struck me most was…", "Until then, I had always assumed…", "It made me realise that…", "Looking back,…", "It's stayed with me because…"],
    model: "One film that really stayed with me is a documentary I watched a few years ago about people who repair old objects instead of throwing them away. What struck me most was the care they put into fixing something as ordinary as a toaster. Until then, I had always assumed that repairing things was a waste of time when you could simply buy a new one. It made me realise how disconnected we've become from the objects around us. Looking back, it changed not only the way I shop, but the way I think about design: I now try to create things that are meant to last." }
];
