/* "Everyday English" lessons (functional language), C2: 126 to 130. */
window.LESSONS.push(
{
  id: 126, after: 79, level: "C2", kind: "functional", icon: "handshake",
  title: "Everyday English: diplomatic language", title_fr: "Anglais pratique : le langage diplomatique",
  subtitle: "Saying no, criticising and disagreeing without damaging a relationship.", subtitle_fr: "Dire non, critiquer et contredire sans abîmer une relation.",
  body: `
<p>At C2, the challenge is not finding the words but finding the right <b>tone</b>. Diplomatic English softens the message while keeping it clear.</p>
<h2>Softening techniques</h2>
<table>
<tr><th>Technique</th><th>Direct</th><th>Diplomatic</th></tr>
<tr><td>Past tense for distance</td><td>I want to ask you something.</td><td>I was wondering if I could ask you something.</td></tr>
<tr><td>Negative question</td><td>We should wait.</td><td>Wouldn't it be better to wait?</td></tr>
<tr><td>Qualifiers</td><td>It's a problem.</td><td>It might be slightly problematic.</td></tr>
<tr><td>Not + positive word</td><td>That's a bad idea.</td><td>I'm not sure that's the best approach.</td></tr>
<tr><td>We instead of you</td><td>You made a mistake.</td><td>It seems we've overlooked something.</td></tr>
</table>
<h2>Saying no</h2>
<p><s-en>I'm afraid that won't be possible on this occasion.</s-en> · <s-en>I'd love to help, but my hands are tied.</s-en> · <s-en>Let me see what I can do, but I can't promise anything.</s-en></p>
<h2>Criticising constructively</h2>
<p><s-en>There's a lot to like here. One thing I'd reconsider is…</s-en> · <s-en>Have you thought about…?</s-en> · <s-en>It might be worth looking again at…</s-en></p>
<div class="tip">Diplomatic doesn't mean vague: say clearly what you want, just wrap it carefully. Too much softening can sound insincere.</div>
`,
  body_fr: `
<p>Au C2, la difficulté n'est plus de trouver les mots, mais le bon <b>ton</b>. L'anglais diplomatique adoucit le message tout en le gardant clair.</p>
<h2>Les techniques pour adoucir</h2>
<table>
<tr><th>Technique</th><th>Direct</th><th>Diplomatique</th></tr>
<tr><td>Le passé pour prendre de la distance</td><td>I want to ask you something.</td><td>I was wondering if I could ask you something. (Je me demandais si je pouvais te demander quelque chose.)</td></tr>
<tr><td>La question négative</td><td>We should wait.</td><td>Wouldn't it be better to wait? (Ne vaudrait-il pas mieux attendre ?)</td></tr>
<tr><td>Les atténuateurs</td><td>It's a problem.</td><td>It might be slightly problematic. (Cela pourrait poser un léger problème.)</td></tr>
<tr><td>Not + mot positif</td><td>That's a bad idea.</td><td>I'm not sure that's the best approach. (Je doute que ce soit la meilleure approche.)</td></tr>
<tr><td>« We » plutôt que « you »</td><td>You made a mistake.</td><td>It seems we've overlooked something. (On dirait que quelque chose nous a échappé.)</td></tr>
</table>
<h2>Dire non</h2>
<p><s-en>I'm afraid that won't be possible on this occasion.</s-en> (J'ai bien peur que ce ne soit pas possible cette fois-ci.) · <s-en>I'd love to help, but my hands are tied.</s-en> (J'aimerais aider, mais j'ai les mains liées.) · <s-en>Let me see what I can do, but I can't promise anything.</s-en></p>
<h2>Critiquer de façon constructive</h2>
<p><s-en>There's a lot to like here. One thing I'd reconsider is…</s-en> (Il y a beaucoup de bonnes choses. Une chose que je reverrais, c'est…) · <s-en>Have you thought about…?</s-en> · <s-en>It might be worth looking again at…</s-en> (Ça vaudrait peut-être la peine de revoir…)</p>
<div class="tip">Diplomatique ne veut pas dire flou : dis clairement ce que tu veux, emballe-le simplement avec soin. Trop d'adoucissement peut paraître hypocrite.</div>
`,
  examples: [
    ["I was wondering whether we could push the deadline back a little.", "Je me demandais si nous pourrions repousser un peu l'échéance."],
    ["Wouldn't it make more sense to start with the budget?", "Ne serait-il pas plus logique de commencer par le budget ?"],
    ["I'm afraid we're not in a position to accept.", "J'ai bien peur que nous ne soyons pas en mesure d'accepter."],
    ["It might be worth having another look at the colours.", "Ça vaudrait peut-être la peine de revoir les couleurs."],
    ["I see where you're coming from, but I'd see it slightly differently.", "Je comprends ton point de vue, mais je le verrais un peu autrement."]
  ],
  quiz: [
    { q: "The most diplomatic way to say “Your report is late”:", q_fr: "La façon la plus diplomatique de dire « Your report is late » :", o: ["Your report is late again.", "I was just wondering where we are with the report.", "Why is your report late?"], a: 1, ex: "Past continuous + we: soft but clear.", ex_fr: "Passé continu + we : doux mais clair." },
    { q: "“My hands are tied” means:", q_fr: "« My hands are tied » signifie :", o: ["I'm too busy.", "I'd like to help but I'm not allowed to.", "I don't want to help."], a: 1, ex: "Someone or something else prevents you.", ex_fr: "Quelqu'un ou quelque chose d'autre t'en empêche." },
    { q: "Which softens a criticism?", q_fr: "Laquelle adoucit une critique ?", o: ["It's wrong.", "I'm not sure it's quite right.", "It isn't right at all."], a: 1, ex: "Not sure + quite: softer.", ex_fr: "Not sure + quite : plus doux." },
    { q: "Too much softening can sound…", q_fr: "Trop d'adoucissement peut paraître…", o: ["insincere", "aggressive", "informal"], a: 0, ex: "Be clear, just polite.", ex_fr: "Reste claire, simplement polie." }
  ]
},
{
  id: 127, after: 77, level: "C2", kind: "functional", icon: "users-round",
  title: "Everyday English: chairing a meeting and managing conflict", title_fr: "Anglais pratique : présider une réunion et gérer un conflit",
  subtitle: "Keeping a discussion on track when tensions rise.", subtitle_fr: "Garder le cap quand les tensions montent.",
  body: `
<h2>Opening and steering</h2>
<p><s-en>Right, shall we get started?</s-en> · <s-en>The aim of today's meeting is to…</s-en> · <s-en>Let's stick to the agenda, if we can.</s-en> · <s-en>I'm afraid we're running short of time, so let's move on.</s-en></p>
<h2>Giving and taking the floor</h2>
<p><s-en>Anna, you've been quiet: what's your take on this?</s-en> · <s-en>Could you let Tom finish, please?</s-en> · <s-en>Let's hear from the other side.</s-en></p>
<h2>Calming tension</h2>
<p><s-en>I can see this matters a great deal to both of you.</s-en> · <s-en>Let's take a step back for a moment.</s-en> · <s-en>We all want the same outcome; we just disagree on how to get there.</s-en> · <s-en>Perhaps we could take this offline.</s-en></p>
<h2>Summarising and deciding</h2>
<p><s-en>So, if I've understood correctly, there are two positions…</s-en> · <s-en>Can we agree on the following?</s-en> · <s-en>Let's put it to a vote.</s-en> · <s-en>To sum up, we've agreed to… and Maya will…</s-en></p>
<div class="tip">A good chair reformulates both sides fairly before deciding: people accept a decision more easily when they feel heard.</div>
`,
  body_fr: `
<h2>Ouvrir et orienter</h2>
<p><s-en>Right, shall we get started?</s-en> (Bien, on commence ?) · <s-en>The aim of today's meeting is to…</s-en> · <s-en>Let's stick to the agenda, if we can.</s-en> (Tenons-nous-en à l'ordre du jour.) · <s-en>I'm afraid we're running short of time, so let's move on.</s-en></p>
<h2>Donner et reprendre la parole</h2>
<p><s-en>Anna, you've been quiet: what's your take on this?</s-en> (Anna, tu n'as rien dit : qu'en penses-tu ?) · <s-en>Could you let Tom finish, please?</s-en> · <s-en>Let's hear from the other side.</s-en></p>
<h2>Apaiser les tensions</h2>
<p><s-en>I can see this matters a great deal to both of you.</s-en> (Je vois que c'est très important pour vous deux.) · <s-en>Let's take a step back for a moment.</s-en> (Prenons un peu de recul.) · <s-en>We all want the same outcome; we just disagree on how to get there.</s-en> · <s-en>Perhaps we could take this offline.</s-en> (Peut-être pourrions-nous en reparler en dehors de la réunion.)</p>
<h2>Résumer et décider</h2>
<p><s-en>So, if I've understood correctly, there are two positions…</s-en> · <s-en>Can we agree on the following?</s-en> · <s-en>Let's put it to a vote.</s-en> (Passons au vote.) · <s-en>To sum up, we've agreed to… and Maya will…</s-en></p>
<div class="tip">Une bonne présidente reformule équitablement les deux positions avant de trancher : on accepte plus facilement une décision quand on s'est senti écouté.</div>
`,
  examples: [
    ["Let's stick to the agenda, if we can.", "Tenons-nous-en à l'ordre du jour, si possible."],
    ["What's your take on this, Anna?", "Qu'en penses-tu, Anna ?"],
    ["Let's take a step back for a moment.", "Prenons un peu de recul."],
    ["Perhaps we could discuss this after the meeting.", "Peut-être pourrions-nous en parler après la réunion."],
    ["To sum up, we've agreed to postpone the launch.", "Pour résumer, nous avons convenu de reporter le lancement."]
  ],
  quiz: [
    { q: "“Let's take this offline” means:", q_fr: "« Let's take this offline » signifie :", o: ["Let's discuss it later, outside this meeting.", "Let's turn off the computers.", "Let's cancel the project."], a: 0, ex: "Not now, not in front of everyone.", ex_fr: "Pas maintenant, pas devant tout le monde." },
    { q: "To invite a quiet colleague to speak:", q_fr: "Pour inviter une collègue silencieuse à parler :", o: ["Why don't you ever speak?", "What's your take on this?", "You must say something."], a: 1, ex: "Open and polite.", ex_fr: "Ouvert et poli." },
    { q: "Which phrase calms a conflict?", q_fr: "Quelle phrase apaise un conflit ?", o: ["You're both wrong.", "We all want the same outcome.", "Let's stop now."], a: 1, ex: "It highlights the shared goal.", ex_fr: "Elle souligne l'objectif commun." },
    { q: "Complete: “Let's put it to a ___.”", q_fr: "Complète : « Let's put it to a ___. »", o: ["vote", "decide", "choice"], a: 0, ex: "Put something to a vote.", ex_fr: "Put something to a vote (passer au vote)." }
  ]
},
{
  id: 128, after: 75, level: "C2", kind: "functional", icon: "presentation",
  title: "Everyday English: handling difficult questions", title_fr: "Anglais pratique : répondre aux questions difficiles",
  subtitle: "After a talk, an interview or a pitch.", subtitle_fr: "Après un exposé, un entretien ou une présentation.",
  body: `
<h2>Buying time</h2>
<p><s-en>That's a very good question.</s-en> · <s-en>Let me think about how best to put this.</s-en> · <s-en>If I understand you correctly, you're asking whether…</s-en></p>
<h2>When you don't know</h2>
<p><s-en>I don't have the figures to hand, but I'll get back to you.</s-en> · <s-en>That's outside my area of expertise, I'm afraid.</s-en> · <s-en>I'd rather not speculate.</s-en></p>
<h2>Hostile or loaded questions</h2>
<p><s-en>I don't accept the premise of the question.</s-en> · <s-en>I think that's a slight oversimplification.</s-en> · <s-en>With respect, that's not quite what I said.</s-en></p>
<h2>Bridging: coming back to your message</h2>
<p><s-en>What really matters here is…</s-en> · <s-en>The bigger picture is…</s-en> · <s-en>That brings me back to my main point…</s-en></p>
<h2>Closing</h2>
<p><s-en>Does that answer your question?</s-en> · <s-en>I'm afraid we only have time for one more question.</s-en> · <s-en>Thank you all for your questions.</s-en></p>
<div class="tip">Rephrasing a question before answering gives you time, shows you've listened, and lets you remove any hostile wording.</div>
`,
  body_fr: `
<h2>Gagner du temps</h2>
<p><s-en>That's a very good question.</s-en> · <s-en>Let me think about how best to put this.</s-en> (Laissez-moi réfléchir à la meilleure façon de le dire.) · <s-en>If I understand you correctly, you're asking whether…</s-en></p>
<h2>Quand on ne sait pas</h2>
<p><s-en>I don't have the figures to hand, but I'll get back to you.</s-en> (Je n'ai pas les chiffres sous la main, mais je reviendrai vers vous.) · <s-en>That's outside my area of expertise, I'm afraid.</s-en> · <s-en>I'd rather not speculate.</s-en> (Je préfère ne pas faire de suppositions.)</p>
<h2>Les questions hostiles ou orientées</h2>
<p><s-en>I don't accept the premise of the question.</s-en> (Je conteste le postulat de votre question.) · <s-en>I think that's a slight oversimplification.</s-en> · <s-en>With respect, that's not quite what I said.</s-en></p>
<h2>Faire le pont : revenir à son message</h2>
<p><s-en>What really matters here is…</s-en> · <s-en>The bigger picture is…</s-en> (Plus globalement…) · <s-en>That brings me back to my main point…</s-en></p>
<h2>Conclure</h2>
<p><s-en>Does that answer your question?</s-en> · <s-en>I'm afraid we only have time for one more question.</s-en> · <s-en>Thank you all for your questions.</s-en></p>
<div class="tip">Reformuler une question avant d'y répondre te donne du temps, montre que tu as écouté, et permet d'enlever toute formulation hostile.</div>
`,
  examples: [
    ["I don't have the exact figures to hand.", "Je n'ai pas les chiffres exacts sous la main."],
    ["I'd rather not speculate about that.", "Je préfère ne pas faire de suppositions à ce sujet."],
    ["With respect, that's not quite what I said.", "Sauf votre respect, ce n'est pas tout à fait ce que j'ai dit."],
    ["The bigger picture is that demand keeps growing.", "Plus globalement, la demande ne cesse d'augmenter."],
    ["We only have time for one more question.", "Nous n'avons le temps que pour une dernière question."]
  ],
  quiz: [
    { q: "You don't know the answer. The best reply:", q_fr: "Tu ne connais pas la réponse. La meilleure réplique :", o: ["I don't know.", "I don't have that information to hand, but I'll get back to you.", "That's a stupid question."], a: 1, ex: "Honest and professional.", ex_fr: "Honnête et professionnel." },
    { q: "“I don't accept the premise of the question” is used when:", q_fr: "« I don't accept the premise of the question » s'utilise quand :", o: ["the question contains a false assumption", "you didn't hear the question", "you agree completely"], a: 0, ex: "You reject what the question takes for granted.", ex_fr: "Tu refuses ce que la question tient pour acquis." },
    { q: "“Bridging” means:", q_fr: "« Bridging » signifie :", o: ["changing the subject rudely", "linking your answer back to your key message", "ending the talk"], a: 1, ex: "What really matters here is…", ex_fr: "What really matters here is…" },
    { q: "Why rephrase a question before answering?", q_fr: "Pourquoi reformuler une question avant d'y répondre ?", o: ["To gain time and show you've listened", "To avoid answering", "To repeat yourself"], a: 0, ex: "And to remove hostile wording.", ex_fr: "Et pour enlever les formulations hostiles." }
  ]
},
{
  id: 129, after: 80, level: "C2", kind: "functional", icon: "laugh",
  title: "Everyday English: humour, irony and banter", title_fr: "Anglais pratique : humour, ironie et taquineries",
  subtitle: "Getting the joke, and playing along.", subtitle_fr: "Comprendre la blague, et jouer le jeu.",
  body: `
<p>Humour is often the last barrier for advanced learners. In Britain especially, people joke constantly, often with a straight face.</p>
<h2>Recognising irony</h2>
<p>Context + tone: <s-en>Oh, perfect timing!</s-en> (when something goes wrong) · <s-en>Well, that went well.</s-en> (it didn't) · <s-en>Thanks for your help.</s-en> (to someone who did nothing)</p>
<h2>Self-deprecation</h2>
<p>Making fun of yourself is very common and shows confidence: <s-en>I'm not exactly a natural athlete.</s-en> · <s-en>Cooking isn't my strong point, as you're about to discover.</s-en></p>
<h2>Banter: friendly teasing</h2>
<p><s-en>Nice of you to join us!</s-en> (to a late colleague) · <s-en>Don't give up the day job!</s-en> (after a bad song or joke) · <s-en>Are you always this cheerful in the morning?</s-en></p>
<h2>Responding</h2>
<p>Play along: <s-en>I do my best.</s-en> · <s-en>Guilty as charged!</s-en> · <s-en>Touché.</s-en> · <s-en>Very funny.</s-en> (dry, mock-offended) · If you're not sure: <s-en>Sorry, was that a joke?</s-en> (said with a smile, it's perfectly acceptable)</p>
<div class="warn">Banter is for people you know. With strangers or at a first meeting, stay kind and keep teasing light.</div>
`,
  body_fr: `
<p>L'humour est souvent la dernière barrière pour les apprenants avancés. Au Royaume-Uni surtout, on plaisante sans cesse, souvent avec un air parfaitement sérieux.</p>
<h2>Reconnaître l'ironie</h2>
<p>Le contexte + le ton : <s-en>Oh, perfect timing!</s-en> (quand quelque chose tourne mal) · <s-en>Well, that went well.</s-en> (ce n'est pas le cas) · <s-en>Thanks for your help.</s-en> (à quelqu'un qui n'a rien fait)</p>
<h2>L'autodérision</h2>
<p>Se moquer de soi est très courant et montre de l'assurance : <s-en>I'm not exactly a natural athlete.</s-en> (Je ne suis pas vraiment une grande sportive.) · <s-en>Cooking isn't my strong point, as you're about to discover.</s-en></p>
<h2>Les taquineries amicales (banter)</h2>
<p><s-en>Nice of you to join us!</s-en> (à un collègue en retard : « Content que tu nous rejoignes ! ») · <s-en>Don't give up the day job!</s-en> (après une chanson ou une blague ratée : « Garde ton boulot ! ») · <s-en>Are you always this cheerful in the morning?</s-en></p>
<h2>Répondre</h2>
<p>Jouer le jeu : <s-en>I do my best.</s-en> · <s-en>Guilty as charged!</s-en> (Coupable !) · <s-en>Touché.</s-en> · <s-en>Very funny.</s-en> (pince-sans-rire, faussement vexé) · En cas de doute : <s-en>Sorry, was that a joke?</s-en> (dit avec le sourire, c'est tout à fait acceptable)</p>
<div class="warn">Les taquineries, c'est entre gens qui se connaissent. Avec des inconnus ou à une première rencontre, reste bienveillante et légère.</div>
`,
  examples: [
    ["Well, that went well.", "Bon, c'était réussi… (ironique)"],
    ["Nice of you to join us!", "Content que tu nous rejoignes ! (à quelqu'un en retard)"],
    ["I'm not exactly a morning person.", "Je ne suis pas vraiment du matin."],
    ["Guilty as charged!", "Coupable !"],
    ["Sorry, was that a joke?", "Pardon, c'était une blague ?"]
  ],
  quiz: [
    { q: "Your colleague spills coffee on the report and says “Brilliant.” They mean:", q_fr: "Ta collègue renverse du café sur le rapport et dit « Brilliant. » Elle veut dire :", o: ["It's excellent.", "It's a disaster.", "It's bright."], a: 1, ex: "Irony: the opposite of the words.", ex_fr: "Ironie : le contraire des mots." },
    { q: "“Don't give up the day job!” after a song means:", q_fr: "« Don't give up the day job! » après une chanson signifie :", o: ["You sang badly (teasing).", "You should become a singer.", "Go back to work now."], a: 0, ex: "Friendly teasing.", ex_fr: "Taquinerie amicale." },
    { q: "A good reply to “Late again?” from a friend:", q_fr: "Une bonne réponse à « Late again? » de la part d'une amie :", o: ["Guilty as charged!", "How dare you?", "No."], a: 0, ex: "Playing along with banter.", ex_fr: "Jouer le jeu de la taquinerie." },
    { q: "“I'm not exactly a great cook” is an example of:", q_fr: "« I'm not exactly a great cook » est un exemple de :", o: ["self-deprecation", "hyperbole", "rudeness"], a: 0, ex: "Gently making fun of yourself.", ex_fr: "Se moquer gentiment de soi." }
  ]
},
{
  id: 130, after: 78, level: "C2", kind: "functional", icon: "graduation-cap",
  title: "Everyday English: academic discussion and critique", title_fr: "Anglais pratique : discussion universitaire et esprit critique",
  subtitle: "Seminar language: questioning, building on, citing.", subtitle_fr: "Le langage du séminaire : questionner, prolonger, citer.",
  body: `
<h2>Questioning an argument</h2>
<p><s-en>What evidence is this based on?</s-en> · <s-en>Isn't there a risk of confusing correlation with causation?</s-en> · <s-en>To what extent can we generalise from such a small sample?</s-en> · <s-en>The argument seems to rest on the assumption that…</s-en></p>
<h2>Building on someone's point</h2>
<p><s-en>Building on what Sam said…</s-en> · <s-en>I'd like to take that point a step further.</s-en> · <s-en>That ties in with…</s-en></p>
<h2>Referring to sources</h2>
<p><s-en>According to…</s-en> · <s-en>As Smith points out…</s-en> · <s-en>Recent research suggests that…</s-en> · <s-en>This is in line with / at odds with…</s-en></p>
<h2>Offering an interpretation</h2>
<p><s-en>One way of reading this is…</s-en> · <s-en>An alternative interpretation would be…</s-en> · <s-en>I'd argue that…</s-en> · <s-en>It could be argued that…</s-en></p>
<h2>Conceding and qualifying</h2>
<p><s-en>That's a fair point, although…</s-en> · <s-en>I take your point, but…</s-en> · <s-en>That holds true up to a point.</s-en></p>
<div class="tip">Criticise ideas, never people: “The argument overlooks…”, not “You don't understand…”.</div>
`,
  body_fr: `
<h2>Questionner un argument</h2>
<p><s-en>What evidence is this based on?</s-en> (Sur quelles données cela repose-t-il ?) · <s-en>Isn't there a risk of confusing correlation with causation?</s-en> (Ne risque-t-on pas de confondre corrélation et causalité ?) · <s-en>To what extent can we generalise from such a small sample?</s-en> · <s-en>The argument seems to rest on the assumption that…</s-en> (L'argument semble reposer sur l'hypothèse que…)</p>
<h2>Prolonger l'idée de quelqu'un</h2>
<p><s-en>Building on what Sam said…</s-en> (Pour prolonger ce qu'a dit Sam…) · <s-en>I'd like to take that point a step further.</s-en> · <s-en>That ties in with…</s-en> (Ça rejoint…)</p>
<h2>Citer des sources</h2>
<p><s-en>According to…</s-en> · <s-en>As Smith points out…</s-en> · <s-en>Recent research suggests that…</s-en> · <s-en>This is in line with / at odds with…</s-en> (Cela concorde avec / va à l'encontre de…)</p>
<h2>Proposer une interprétation</h2>
<p><s-en>One way of reading this is…</s-en> · <s-en>An alternative interpretation would be…</s-en> · <s-en>I'd argue that…</s-en> · <s-en>It could be argued that…</s-en></p>
<h2>Concéder et nuancer</h2>
<p><s-en>That's a fair point, although…</s-en> · <s-en>I take your point, but…</s-en> · <s-en>That holds true up to a point.</s-en> (C'est vrai jusqu'à un certain point.)</p>
<div class="tip">Critique les idées, jamais les personnes : « The argument overlooks… », pas « You don't understand… ».</div>
`,
  examples: [
    ["What evidence is this claim based on?", "Sur quelles données repose cette affirmation ?"],
    ["Building on Sam's point, I'd add that…", "Pour prolonger l'idée de Sam, j'ajouterais que…"],
    ["This is at odds with earlier findings.", "Cela va à l'encontre de résultats antérieurs."],
    ["An alternative interpretation would be that she was afraid.", "Une autre interprétation serait qu'elle avait peur."],
    ["That holds true up to a point.", "C'est vrai jusqu'à un certain point."]
  ],
  quiz: [
    { q: "To challenge a generalisation politely:", q_fr: "Pour contester poliment une généralisation :", o: ["That's rubbish.", "To what extent can we generalise from this?", "Everyone knows that's wrong."], a: 1, ex: "A question that opens the discussion.", ex_fr: "Une question qui ouvre la discussion." },
    { q: "“This is at odds with…” means:", q_fr: "« This is at odds with… » signifie :", o: ["This agrees with…", "This contradicts…", "This is strange."], a: 1, ex: "At odds with = in conflict with.", ex_fr: "At odds with = en contradiction avec." },
    { q: "Complete: “___ on what Sam said, …”", q_fr: "Complète : « ___ on what Sam said, … »", o: ["Building", "Taking", "Putting"], a: 0, ex: "Building on = developing an idea further.", ex_fr: "Building on = prolonger une idée." },
    { q: "In a seminar, you should criticise:", q_fr: "En séminaire, on critique :", o: ["the person", "the argument", "nothing"], a: 1, ex: "Ideas, not people.", ex_fr: "Les idées, pas les personnes." }
  ]
}
);
