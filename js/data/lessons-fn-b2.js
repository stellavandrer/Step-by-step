/* "Everyday English" lessons (functional language), B2. */
window.LESSONS.push(
{
  id: 119, after: 36, level: "B2", kind: "functional", icon: "feather",
  title: "Everyday English: being tactful", title_fr: "Anglais pratique : avoir du tact",
  subtitle: "Criticise, refuse and give bad news without hurting anyone.", subtitle_fr: "Critiquer, refuser et annoncer une mauvaise nouvelle sans blesser.",
  body: `
<h2>Why tact matters in English</h2>
<p>English speakers, especially British ones, rarely say things directly. A sentence that sounds polite in French can sound rude when translated word for word. The trick: <b>soften</b> the message.</p>
<h2>Five ways to soften a message</h2>
<table>
<tr><th>Technique</th><th>Direct</th><th>Tactful</th></tr>
<tr><td>Use a modal</td><td>This is wrong.</td><td>This might not be quite right.</td></tr>
<tr><td>Use a negative question</td><td>We should wait.</td><td>Shouldn't we wait a little?</td></tr>
<tr><td>Use "a bit", "slightly"</td><td>It's expensive.</td><td>It's a bit expensive.</td></tr>
<tr><td>Use "not very" + positive adjective</td><td>It's ugly.</td><td>It's not very attractive.</td></tr>
<tr><td>Start with a softener</td><td>No.</td><td>I'm afraid that won't be possible.</td></tr>
</table>
<h2>Useful softeners</h2>
<p><s-en>I'm afraid…</s-en> · <s-en>To be honest,…</s-en> · <s-en>I'm sorry to say that…</s-en> · <s-en>It might be better if…</s-en> · <s-en>I was wondering if…</s-en> · <s-en>I see what you mean, but…</s-en></p>
<div class="tip">The "compliment sandwich": something positive, then the criticism, then something positive again. <s-en>I really like the design. The text is a bit long, though. But overall, it's a great start!</s-en></div>
`,
  body_fr: `
<h2>Pourquoi le tact compte en anglais</h2>
<p>Les anglophones, surtout les Britanniques, disent rarement les choses directement. Une phrase polie en français peut sembler brutale traduite mot à mot. L'astuce : <b>adoucir</b> le message.</p>
<h2>Cinq façons d'adoucir un message</h2>
<table>
<tr><th>Technique</th><th>Direct</th><th>Avec tact</th></tr>
<tr><td>Utiliser un modal</td><td>C'est faux.</td><td>This might not be quite right. (Ce n'est peut-être pas tout à fait juste.)</td></tr>
<tr><td>Poser une question négative</td><td>On devrait attendre.</td><td>Shouldn't we wait a little? (On ne devrait pas attendre un peu ?)</td></tr>
<tr><td>Ajouter « a bit », « slightly »</td><td>C'est cher.</td><td>It's a bit expensive. (C'est un peu cher.)</td></tr>
<tr><td>« not very » + adjectif positif</td><td>C'est moche.</td><td>It's not very attractive. (Ce n'est pas très joli.)</td></tr>
<tr><td>Commencer par un adoucisseur</td><td>Non.</td><td>I'm afraid that won't be possible. (Je crains que ce ne soit pas possible.)</td></tr>
</table>
<h2>Adoucisseurs utiles</h2>
<p><s-en>I'm afraid…</s-en> (Je crains que…) · <s-en>To be honest,…</s-en> (Pour être honnête) · <s-en>I'm sorry to say that…</s-en> (J'ai le regret de dire que…) · <s-en>It might be better if…</s-en> (Ce serait peut-être mieux si…) · <s-en>I was wondering if…</s-en> (Je me demandais si…) · <s-en>I see what you mean, but…</s-en> (Je vois ce que tu veux dire, mais…)</p>
<div class="tip">Le « sandwich de compliments » : du positif, puis la critique, puis encore du positif. <s-en>I really like the design. The text is a bit long, though. But overall, it's a great start!</s-en> (J'adore le design. Le texte est un peu long, par contre. Mais dans l'ensemble, c'est un super début !)</div>
`,
  examples: [
    ["I'm afraid we can't accept your offer.", "Je crains que nous ne puissions pas accepter votre offre."],
    ["It might be better if we met next week.", "Ce serait peut-être mieux si on se voyait la semaine prochaine."],
    ["The colours are not very bright.", "Les couleurs ne sont pas très vives."],
    ["Shouldn't we ask the client first?", "On ne devrait pas demander au client d'abord ?"],
    ["To be honest, I'm not completely convinced.", "Pour être honnête, je ne suis pas complètement convaincue."]
  ],
  quiz: [
    { q: "The most tactful way to say “Your report is bad”:", q_fr: "La façon la plus diplomate de dire « Ton rapport est mauvais » :", o: ["Your report is bad.", "Your report isn't quite ready yet.", "Your report is terrible."], a: 1, ex: "“not quite” + a neutral word softens the criticism.", ex_fr: "« not quite » + un mot neutre adoucit la critique." },
    { q: "Complete: “I'm ___, but the room is already booked.”", q_fr: "Complète : « I'm ___, but the room is already booked. »", o: ["afraid", "fear", "scared"], a: 0, ex: "I'm afraid… = je crains que… (polite).", ex_fr: "I'm afraid… = je crains que… (poli)." },
    { q: "Which sentence is a softened suggestion?", q_fr: "Quelle phrase est une suggestion adoucie ?", o: ["Change the title.", "Wouldn't it be better to change the title?", "You must change the title."], a: 1, ex: "A negative question sounds like a suggestion, not an order.", ex_fr: "Une question négative sonne comme une suggestion, pas un ordre." },
    { q: "“It's not very cheap” really means:", q_fr: "« It's not very cheap » veut vraiment dire :", o: ["It's quite cheap.", "It's expensive.", "It's free."], a: 1, ex: "not very + positive word = a polite way to say the opposite.", ex_fr: "not very + mot positif = façon polie de dire le contraire." }
  ]
},
{
  id: 117, after: 68, level: "B2", kind: "functional", icon: "chart-line",
  title: "Everyday English: describing graphs and trends", title_fr: "Anglais pratique : décrire graphiques et tendances",
  subtitle: "Rise, fall, peak and level off: talk about figures like a professional.", subtitle_fr: "Augmenter, baisser, culminer, se stabiliser : parler de chiffres comme une pro.",
  body: `
<h2>Verbs of movement</h2>
<table>
<tr><th>Up</th><th>Down</th><th>No change</th></tr>
<tr><td>to rise · to increase · to grow · to go up</td><td>to fall · to drop · to decrease · to go down</td><td>to remain stable · to stay the same · to level off</td></tr>
<tr><td>to peak (= reach the highest point)</td><td>to hit a low</td><td>to fluctuate (= go up and down)</td></tr>
</table>
<h2>How much? How fast?</h2>
<p><b>Big:</b> sharply · dramatically · significantly — <b>Small:</b> slightly · gradually · steadily</p>
<p>Two structures: <s-en>Sales rose sharply.</s-en> (verb + adverb) = <s-en>There was a sharp rise in sales.</s-en> (adjective + noun)</p>
<h2>The prepositions (a classic TOEIC trap)</h2>
<p><s-en>Prices rose <b>from</b> 10 <b>to</b> 15 euros.</s-en> (start and end point)</p>
<p><s-en>Prices rose <b>by</b> 5 euros.</s-en> (the difference)</p>
<p><s-en>Prices reached a peak <b>of</b> 15 euros.</s-en> · <s-en>a rise <b>of</b> 50%</s-en> · <s-en>a rise <b>in</b> prices</s-en></p>
<div class="tip">Approximations make you sound natural: <s-en>roughly</s-en>, <s-en>just over</s-en>, <s-en>just under</s-en>, <s-en>nearly</s-en>, <s-en>almost half</s-en>.</div>
`,
  body_fr: `
<h2>Les verbes de mouvement</h2>
<table>
<tr><th>En hausse</th><th>En baisse</th><th>Sans changement</th></tr>
<tr><td>to rise · to increase · to grow · to go up (augmenter)</td><td>to fall · to drop · to decrease · to go down (baisser)</td><td>to remain stable · to stay the same (rester stable) · to level off (se stabiliser)</td></tr>
<tr><td>to peak (atteindre un pic)</td><td>to hit a low (atteindre un plancher)</td><td>to fluctuate (fluctuer)</td></tr>
</table>
<h2>De combien ? À quelle vitesse ?</h2>
<p><b>Fort :</b> sharply (fortement) · dramatically (spectaculairement) · significantly (nettement) — <b>Faible :</b> slightly (légèrement) · gradually (progressivement) · steadily (régulièrement)</p>
<p>Deux structures : <s-en>Sales rose sharply.</s-en> (verbe + adverbe) = <s-en>There was a sharp rise in sales.</s-en> (adjectif + nom) : les ventes ont fortement augmenté.</p>
<h2>Les prépositions (piège classique du TOEIC)</h2>
<p><s-en>Prices rose <b>from</b> 10 <b>to</b> 15 euros.</s-en> (point de départ et d'arrivée)</p>
<p><s-en>Prices rose <b>by</b> 5 euros.</s-en> (l'écart : de 5 euros)</p>
<p><s-en>Prices reached a peak <b>of</b> 15 euros.</s-en> · <s-en>a rise <b>of</b> 50%</s-en> (une hausse de 50 %) · <s-en>a rise <b>in</b> prices</s-en> (une hausse des prix)</p>
<div class="tip">Les approximations rendent ton anglais naturel : <s-en>roughly</s-en> (environ), <s-en>just over</s-en> (un peu plus de), <s-en>just under</s-en> (un peu moins de), <s-en>nearly</s-en> (presque), <s-en>almost half</s-en> (presque la moitié).</div>
`,
  examples: [
    ["Sales rose sharply in the first quarter.", "Les ventes ont fortement augmenté au premier trimestre."],
    ["There was a slight drop in prices in May.", "Il y a eu une légère baisse des prix en mai."],
    ["The number of visitors peaked in August.", "Le nombre de visiteurs a atteint un pic en août."],
    ["Profits increased by 12% last year.", "Les bénéfices ont augmenté de 12 % l'an dernier."],
    ["After that, the figures levelled off.", "Ensuite, les chiffres se sont stabilisés."]
  ],
  quiz: [
    { q: "Prices went from 20 to 25 euros. They rose ___ 5 euros.", q_fr: "Les prix sont passés de 20 à 25 euros. Ils ont augmenté ___ 5 euros.", o: ["of", "by", "to"], a: 1, ex: "by = the difference.", ex_fr: "by = l'écart." },
    { q: "Which word means “to reach the highest point”?", q_fr: "Quel mot veut dire « atteindre le point le plus haut » ?", o: ["to level off", "to peak", "to fluctuate"], a: 1, ex: "to peak = atteindre un pic.", ex_fr: "to peak = atteindre un pic." },
    { q: "“There was a ___ increase in sales.” (= big)", q_fr: "« There was a ___ increase in sales. » (= fort)", o: ["sharply", "sharp", "slight"], a: 1, ex: "Before a noun: an adjective (sharp), not an adverb.", ex_fr: "Devant un nom : un adjectif (sharp), pas un adverbe." },
    { q: "“The figures levelled off” means they…", q_fr: "« The figures levelled off » veut dire qu'ils…", o: ["went up quickly", "stopped changing", "went down"], a: 1, ex: "to level off = se stabiliser.", ex_fr: "to level off = se stabiliser." }
  ]
},
{
  id: 118, after: 41, level: "B2", kind: "functional", icon: "presentation",
  title: "Everyday English: giving a presentation", title_fr: "Anglais pratique : faire une présentation",
  subtitle: "Signposting: guide your audience from the introduction to the questions.", subtitle_fr: "Les « panneaux » : guider ton public de l'introduction aux questions.",
  body: `
<h2>Signposting language</h2>
<p>In a presentation, signposts tell the audience where you are and where you're going.</p>
<table>
<tr><th>Stage</th><th>What you say</th></tr>
<tr><td>Introduction</td><td>Today I'd like to talk about… · I've divided my talk into three parts.</td></tr>
<tr><td>Moving on</td><td>Let's move on to… · This brings me to my next point. · Turning now to…</td></tr>
<tr><td>Giving an example</td><td>Let me give you an example. · Take… for instance.</td></tr>
<tr><td>Showing a visual</td><td>As you can see on this slide,… · If you look at this graph,…</td></tr>
<tr><td>Summing up</td><td>To sum up,… · So, to recap the main points,…</td></tr>
<tr><td>Questions</td><td>I'd be happy to answer any questions. · That's a good question.</td></tr>
</table>
<h2>When you don't know the answer</h2>
<p><s-en>I'm not sure off the top of my head, but I'll find out and get back to you.</s-en> · <s-en>Could you repeat the question, please?</s-en></p>
<div class="tip">Rule of three: people remember lists of three. <s-en>It's faster, cheaper and greener.</s-en> Pause after each important idea: silence makes you sound confident.</div>
`,
  body_fr: `
<h2>Les mots-panneaux</h2>
<p>Dans une présentation, ces formules indiquent au public où tu en es et où tu vas.</p>
<table>
<tr><th>Étape</th><th>Ce que tu dis</th></tr>
<tr><td>Introduction</td><td>Today I'd like to talk about… (Aujourd'hui, j'aimerais vous parler de…) · I've divided my talk into three parts. (J'ai divisé mon intervention en trois parties.)</td></tr>
<tr><td>Passer à la suite</td><td>Let's move on to… (Passons à…) · This brings me to my next point. (Ce qui m'amène au point suivant.) · Turning now to… (Venons-en à…)</td></tr>
<tr><td>Donner un exemple</td><td>Let me give you an example. (Je vais vous donner un exemple.) · Take… for instance. (Prenez… par exemple.)</td></tr>
<tr><td>Montrer un visuel</td><td>As you can see on this slide,… (Comme vous le voyez sur cette diapo…) · If you look at this graph,… (Si vous regardez ce graphique…)</td></tr>
<tr><td>Résumer</td><td>To sum up,… (Pour résumer) · So, to recap the main points,… (Récapitulons les points principaux…)</td></tr>
<tr><td>Questions</td><td>I'd be happy to answer any questions. (Je répondrai volontiers à vos questions.) · That's a good question. (C'est une bonne question.)</td></tr>
</table>
<h2>Quand tu ne connais pas la réponse</h2>
<p><s-en>I'm not sure off the top of my head, but I'll find out and get back to you.</s-en> (Je ne sais pas comme ça de tête, mais je vais me renseigner et je reviens vers vous.) · <s-en>Could you repeat the question, please?</s-en> (Pourriez-vous répéter la question ?)</p>
<div class="tip">La règle de trois : on retient les listes de trois. <s-en>It's faster, cheaper and greener.</s-en> (C'est plus rapide, moins cher et plus écologique.) Fais une pause après chaque idée importante : le silence te donne l'air sûre de toi.</div>
`,
  examples: [
    ["Today I'd like to talk about our new website.", "Aujourd'hui, j'aimerais vous parler de notre nouveau site."],
    ["This brings me to my next point.", "Ce qui m'amène au point suivant."],
    ["As you can see on this slide, sales have doubled.", "Comme vous le voyez sur cette diapo, les ventes ont doublé."],
    ["To sum up, the project was a success.", "Pour résumer, le projet a été un succès."],
    ["I'll find out and get back to you.", "Je vais me renseigner et je reviens vers vous."]
  ],
  quiz: [
    { q: "You want to change topic. You say:", q_fr: "Tu veux changer de sujet. Tu dis :", o: ["Let's move on to the budget.", "Let's go to the budget.", "Now the budget, OK?"], a: 0, ex: "Let's move on to… is the standard signpost.", ex_fr: "Let's move on to… est la formule standard." },
    { q: "Which phrase introduces a conclusion?", q_fr: "Quelle formule introduit une conclusion ?", o: ["Take this for instance", "To sum up", "Turning now to"], a: 1, ex: "To sum up = pour résumer.", ex_fr: "To sum up = pour résumer." },
    { q: "Someone asks a question you can't answer. You say:", q_fr: "On te pose une question dont tu ne connais pas la réponse. Tu dis :", o: ["I don't know.", "I'll find out and get back to you.", "Next question."], a: 1, ex: "Polite and professional: you promise an answer later.", ex_fr: "Poli et professionnel : tu promets une réponse plus tard." },
    { q: "Translate: « Comme vous le voyez sur cette diapo »", o: ["Like you see on this slide", "As you can see on this slide", "As you look this slide"], a: 1, ex: "As you can see…", ex_fr: "As you can see…" }
  ]
},
{
  id: 116, after: 43, level: "B2", kind: "functional", icon: "messages-square",
  title: "Everyday English: taking part in a discussion", title_fr: "Anglais pratique : participer à une discussion",
  subtitle: "Agree, disagree politely, interrupt and keep the floor.", subtitle_fr: "Être d'accord, ne pas l'être poliment, interrompre et garder la parole.",
  body: `
<h2>Agreeing (from strong to partial)</h2>
<p><s-en>I couldn't agree more.</s-en> · <s-en>Absolutely.</s-en> · <s-en>That's a good point.</s-en> · <s-en>I agree up to a point, but…</s-en></p>
<h2>Disagreeing politely</h2>
<p><s-en>I'm not sure I agree.</s-en> · <s-en>I see your point, but…</s-en> · <s-en>I take your point, but have you considered…?</s-en> · <s-en>I'm afraid I see things differently.</s-en></p>
<div class="tip">Avoid “You're wrong” or “I don't agree with you” alone: they sound aggressive. Always add a softener or a reason.</div>
<h2>Interrupting, and not being interrupted</h2>
<table>
<tr><th>You want to…</th><th>Say…</th></tr>
<tr><td>Interrupt politely</td><td>Sorry to interrupt, but… · Can I just add something?</td></tr>
<tr><td>Keep speaking</td><td>Just a moment, let me finish. · If I could just finish my point…</td></tr>
<tr><td>Come back to your idea</td><td>As I was saying,… · Going back to what I said earlier,…</td></tr>
<tr><td>Invite someone</td><td>What do you think, Sam? · We haven't heard from you yet.</td></tr>
</table>
<h2>Asking for clarification</h2>
<p><s-en>What exactly do you mean by…?</s-en> · <s-en>So, if I understand correctly, you're saying that…</s-en></p>
`,
  body_fr: `
<h2>Être d'accord (du plus fort au partiel)</h2>
<p><s-en>I couldn't agree more.</s-en> (Je suis entièrement d'accord.) · <s-en>Absolutely.</s-en> (Absolument.) · <s-en>That's a good point.</s-en> (C'est juste.) · <s-en>I agree up to a point, but…</s-en> (Je suis d'accord jusqu'à un certain point, mais…)</p>
<h2>Exprimer son désaccord poliment</h2>
<p><s-en>I'm not sure I agree.</s-en> (Je ne suis pas sûre d'être d'accord.) · <s-en>I see your point, but…</s-en> (Je vois ce que tu veux dire, mais…) · <s-en>I take your point, but have you considered…?</s-en> (J'entends bien, mais as-tu pensé à… ?) · <s-en>I'm afraid I see things differently.</s-en> (Je crains de voir les choses autrement.)</p>
<div class="tip">Évite « You're wrong » ou « I don't agree with you » tout seuls : ça sonne agressif. Ajoute toujours un adoucisseur ou une raison.</div>
<h2>Interrompre, et ne pas se laisser interrompre</h2>
<table>
<tr><th>Tu veux…</th><th>Dis…</th></tr>
<tr><td>Interrompre poliment</td><td>Sorry to interrupt, but… (Désolée de vous interrompre, mais…) · Can I just add something? (Je peux ajouter quelque chose ?)</td></tr>
<tr><td>Garder la parole</td><td>Just a moment, let me finish. (Un instant, laissez-moi finir.) · If I could just finish my point… (Si je peux juste terminer…)</td></tr>
<tr><td>Revenir à ton idée</td><td>As I was saying,… (Comme je disais…) · Going back to what I said earlier,… (Pour revenir à ce que je disais…)</td></tr>
<tr><td>Donner la parole</td><td>What do you think, Sam? (Qu'en penses-tu, Sam ?) · We haven't heard from you yet. (On ne t'a pas encore entendu.)</td></tr>
</table>
<h2>Demander une précision</h2>
<p><s-en>What exactly do you mean by…?</s-en> (Qu'entends-tu exactement par… ?) · <s-en>So, if I understand correctly, you're saying that…</s-en> (Donc, si je comprends bien, tu dis que…)</p>
`,
  examples: [
    ["I couldn't agree more.", "Je suis entièrement d'accord."],
    ["I see your point, but it's too expensive.", "Je vois ce que tu veux dire, mais c'est trop cher."],
    ["Sorry to interrupt, but can I just add something?", "Désolée de vous interrompre, mais je peux ajouter quelque chose ?"],
    ["As I was saying, we need more time.", "Comme je disais, nous avons besoin de plus de temps."],
    ["What exactly do you mean by “soon”?", "Qu'entends-tu exactement par « bientôt » ?"]
  ],
  quiz: [
    { q: "“I couldn't agree more” means:", q_fr: "« I couldn't agree more » veut dire :", o: ["I completely agree.", "I don't agree at all.", "I can't decide."], a: 0, ex: "It's the strongest way to agree.", ex_fr: "C'est la façon la plus forte d'être d'accord." },
    { q: "The most polite way to disagree:", q_fr: "La façon la plus polie de ne pas être d'accord :", o: ["You're wrong.", "I take your point, but have you considered the cost?", "No, that's stupid."], a: 1, ex: "Acknowledge the idea, then add yours.", ex_fr: "Reconnais l'idée, puis ajoute la tienne." },
    { q: "Someone interrupts you. You say:", q_fr: "Quelqu'un te coupe la parole. Tu dis :", o: ["Stop talking.", "If I could just finish my point…", "Be quiet, please."], a: 1, ex: "Polite but firm.", ex_fr: "Poli mais ferme." },
    { q: "Complete: “I agree ___ a point.”", q_fr: "Complète : « I agree ___ a point. »", o: ["to", "up to", "until"], a: 1, ex: "up to a point = jusqu'à un certain point.", ex_fr: "up to a point = jusqu'à un certain point." }
  ]
},
{
  id: 120, after: 44, level: "B2", kind: "functional", icon: "circle-help",
  title: "Everyday English: certainty and doubt", title_fr: "Anglais pratique : certitude et doute",
  subtitle: "Say how sure you are, and question a claim like a critical thinker.", subtitle_fr: "Dire à quel point on est sûr, et remettre en question une affirmation.",
  body: `
<h2>A scale of certainty</h2>
<table>
<tr><th>How sure?</th><th>Expressions</th></tr>
<tr><td>100%</td><td>It's bound to… · There's no doubt that… · It's definitely…</td></tr>
<tr><td>About 80%</td><td>It's highly likely that… · It's very probable that… · I'd be surprised if it didn't…</td></tr>
<tr><td>About 50%</td><td>It may or may not… · There's a fair chance that…</td></tr>
<tr><td>About 20%</td><td>It's unlikely that… · I doubt (that)…</td></tr>
<tr><td>0%</td><td>There's no way… · It's out of the question.</td></tr>
</table>
<p>Careful with the structure: <s-en>He's likely <b>to</b> win.</s-en> = <s-en>It's likely <b>that</b> he'll win.</s-en></p>
<h2>Questioning a claim</h2>
<p><s-en>Where does this information come from?</s-en> · <s-en>Is there any evidence for that?</s-en> · <s-en>I'm not convinced by that argument.</s-en> · <s-en>That's a bit of an exaggeration.</s-en> · <s-en>It depends on how you look at it.</s-en></p>
<div class="tip">“Evidence” is uncountable: <s-en>There is <b>no</b> evidence</s-en>, <s-en>a piece of evidence</s-en>, never “an evidence”. And it's a false friend: « une évidence » = something obvious.</div>
`,
  body_fr: `
<h2>Une échelle de certitude</h2>
<table>
<tr><th>Degré</th><th>Expressions</th></tr>
<tr><td>100 %</td><td>It's bound to… (C'est sûr que ça va…) · There's no doubt that… (Il ne fait aucun doute que…) · It's definitely… (C'est sans aucun doute…)</td></tr>
<tr><td>Environ 80 %</td><td>It's highly likely that… (Il est très probable que…) · I'd be surprised if it didn't… (Ça m'étonnerait que ça ne… pas)</td></tr>
<tr><td>Environ 50 %</td><td>It may or may not… (Ça se peut ou pas…) · There's a fair chance that… (Il y a de bonnes chances que…)</td></tr>
<tr><td>Environ 20 %</td><td>It's unlikely that… (Il est peu probable que…) · I doubt (that)… (Je doute que…)</td></tr>
<tr><td>0 %</td><td>There's no way… (Il est impossible que…) · It's out of the question. (C'est hors de question.)</td></tr>
</table>
<p>Attention à la structure : <s-en>He's likely <b>to</b> win.</s-en> = <s-en>It's likely <b>that</b> he'll win.</s-en> (Il va probablement gagner.)</p>
<h2>Remettre en question une affirmation</h2>
<p><s-en>Where does this information come from?</s-en> (D'où vient cette information ?) · <s-en>Is there any evidence for that?</s-en> (Y a-t-il des preuves ?) · <s-en>I'm not convinced by that argument.</s-en> (Cet argument ne me convainc pas.) · <s-en>That's a bit of an exaggeration.</s-en> (C'est un peu exagéré.) · <s-en>It depends on how you look at it.</s-en> (Ça dépend du point de vue.)</p>
<div class="tip">« Evidence » est indénombrable : <s-en>There is <b>no</b> evidence</s-en>, <s-en>a piece of evidence</s-en>, jamais « an evidence ». Et c'est un faux ami : « une évidence » = something obvious.</div>
`,
  examples: [
    ["The train is bound to be late again.", "Le train va forcément être encore en retard."],
    ["It's highly likely that prices will rise.", "Il est très probable que les prix augmentent."],
    ["I doubt she'll come to the meeting.", "Je doute qu'elle vienne à la réunion."],
    ["Is there any evidence for that?", "Y a-t-il des preuves de cela ?"],
    ["That's a bit of an exaggeration.", "C'est un peu exagéré."]
  ],
  quiz: [
    { q: "Which expression shows the most certainty?", q_fr: "Quelle expression montre le plus de certitude ?", o: ["It's unlikely that…", "It's bound to…", "It may or may not…"], a: 1, ex: "bound to = certain to.", ex_fr: "bound to = c'est sûr que." },
    { q: "Complete: “She's likely ___ the job.”", q_fr: "Complète : « She's likely ___ the job. »", o: ["get", "to get", "getting"], a: 1, ex: "be likely to + verb.", ex_fr: "be likely to + verbe." },
    { q: "Which sentence is correct?", q_fr: "Quelle phrase est correcte ?", o: ["There is an evidence.", "There are many evidences.", "There is no evidence."], a: 2, ex: "Evidence is uncountable.", ex_fr: "Evidence est indénombrable." },
    { q: "You think a claim is too strong. You say:", q_fr: "Tu trouves une affirmation trop forte. Tu dis :", o: ["That's a bit of an exaggeration.", "That's bound to happen.", "I couldn't agree more."], a: 0, ex: "a bit of an exaggeration = un peu exagéré.", ex_fr: "a bit of an exaggeration = un peu exagéré." }
  ]
}
);
