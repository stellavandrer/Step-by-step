/* "Everyday English" lessons (functional language), C1. */
window.LESSONS.push(
{
  id: 121, after: 46, level: "C1", kind: "functional", icon: "megaphone",
  title: "Everyday English: persuading an audience", title_fr: "Anglais pratique : convaincre un auditoire",
  subtitle: "Rhetorical techniques used by the best speakers.", subtitle_fr: "Les techniques rhétoriques des meilleurs orateurs.",
  body: `
<h2>Six techniques that work</h2>
<table>
<tr><th>Technique</th><th>Example</th></tr>
<tr><td>Rhetorical question</td><td>How many more years can we afford to wait?</td></tr>
<tr><td>Rule of three</td><td>It's cheaper, faster and fairer.</td></tr>
<tr><td>Contrast</td><td>This isn't a cost; it's an investment.</td></tr>
<tr><td>Repetition</td><td>We need courage. We need vision. We need action.</td></tr>
<tr><td>Concession, then rebuttal</td><td>Admittedly, the plan is ambitious. But ambition is exactly what we need.</td></tr>
<tr><td>Inclusive "we"</td><td>Together, we can change this.</td></tr>
</table>
<h2>Making a point sound stronger</h2>
<p><s-en>The fact of the matter is…</s-en> · <s-en>There's no denying that…</s-en> · <s-en>Make no mistake:…</s-en> · <s-en>It's no exaggeration to say that…</s-en> · <s-en>Let's be clear about one thing:…</s-en></p>
<h2>Appealing to your audience</h2>
<p><b>Logic:</b> <s-en>The evidence clearly shows that…</s-en> — <b>Emotion:</b> <s-en>Imagine for a moment that…</s-en> — <b>Credibility:</b> <s-en>Having worked in this field for ten years, I can tell you that…</s-en></p>
<div class="tip">Persuasion is not manipulation. At C1, the best arguments acknowledge the other side before answering it: it makes you sound fair, and therefore more convincing.</div>
`,
  body_fr: `
<h2>Six techniques qui marchent</h2>
<table>
<tr><th>Technique</th><th>Exemple</th></tr>
<tr><td>Question rhétorique</td><td>How many more years can we afford to wait? (Combien d'années pouvons-nous encore nous permettre d'attendre ?)</td></tr>
<tr><td>Règle de trois</td><td>It's cheaper, faster and fairer. (C'est moins cher, plus rapide et plus juste.)</td></tr>
<tr><td>Contraste</td><td>This isn't a cost; it's an investment. (Ce n'est pas une dépense, c'est un investissement.)</td></tr>
<tr><td>Répétition</td><td>We need courage. We need vision. We need action. (Il nous faut du courage, de la vision, de l'action.)</td></tr>
<tr><td>Concession, puis réfutation</td><td>Admittedly, the plan is ambitious. But ambition is exactly what we need. (Certes, le plan est ambitieux. Mais c'est justement d'ambition que nous avons besoin.)</td></tr>
<tr><td>« Nous » inclusif</td><td>Together, we can change this. (Ensemble, nous pouvons changer cela.)</td></tr>
</table>
<h2>Donner plus de force à une idée</h2>
<p><s-en>The fact of the matter is…</s-en> (La réalité, c'est que…) · <s-en>There's no denying that…</s-en> (On ne peut nier que…) · <s-en>Make no mistake:…</s-en> (Ne nous y trompons pas :…) · <s-en>It's no exaggeration to say that…</s-en> (Il n'est pas exagéré de dire que…) · <s-en>Let's be clear about one thing:…</s-en> (Soyons clairs sur un point :…)</p>
<h2>S'adresser à son public</h2>
<p><b>La logique :</b> <s-en>The evidence clearly shows that…</s-en> (Les faits montrent clairement que…) — <b>L'émotion :</b> <s-en>Imagine for a moment that…</s-en> (Imaginez un instant que…) — <b>La crédibilité :</b> <s-en>Having worked in this field for ten years, I can tell you that…</s-en> (Ayant travaillé dix ans dans ce domaine, je peux vous dire que…)</p>
<div class="tip">Convaincre n'est pas manipuler. Au niveau C1, les meilleurs arguments reconnaissent le point de vue adverse avant d'y répondre : on paraît juste, donc plus convaincant.</div>
`,
  examples: [
    ["This isn't a cost; it's an investment.", "Ce n'est pas une dépense, c'est un investissement."],
    ["There's no denying that the situation has improved.", "On ne peut nier que la situation s'est améliorée."],
    ["Admittedly, it won't be easy.", "Certes, ce ne sera pas facile."],
    ["Imagine for a moment that you lost everything.", "Imaginez un instant que vous perdiez tout."],
    ["Make no mistake: this decision will affect all of us.", "Ne nous y trompons pas : cette décision nous concernera tous."]
  ],
  quiz: [
    { q: "“Can we really afford to do nothing?” is an example of…", q_fr: "« Can we really afford to do nothing? » est un exemple de…", o: ["a rhetorical question", "a concession", "the rule of three"], a: 0, ex: "The speaker doesn't expect an answer.", ex_fr: "L'orateur n'attend pas de réponse." },
    { q: "Which phrase introduces a concession?", q_fr: "Quelle formule introduit une concession ?", o: ["Make no mistake", "Admittedly", "The fact of the matter is"], a: 1, ex: "Admittedly = certes, il faut l'admettre.", ex_fr: "Admittedly = certes." },
    { q: "Complete: “There's no ___ that prices have risen.”", q_fr: "Complète : « There's no ___ that prices have risen. »", o: ["deny", "denying", "denial to"], a: 1, ex: "There's no denying that… = on ne peut nier que…", ex_fr: "There's no denying that… = on ne peut nier que…" },
    { q: "Why acknowledge the opposing view before answering it?", q_fr: "Pourquoi reconnaître le point de vue adverse avant d'y répondre ?", o: ["To sound fair and more convincing", "To fill time", "To change your mind"], a: 0, ex: "Fairness builds credibility.", ex_fr: "L'équité renforce la crédibilité." }
  ]
},
{
  id: 122, after: 70, level: "C1", kind: "functional", icon: "file-text",
  title: "Everyday English: writing a report", title_fr: "Anglais pratique : rédiger un rapport",
  subtitle: "Structure, impersonal style and the key phrases of professional reports.", subtitle_fr: "Structure, style impersonnel et formules clés des rapports professionnels.",
  body: `
<h2>A clear structure</h2>
<p>A report is written for a reader who is busy: use <b>headings</b>, short paragraphs and a recommendation at the end.</p>
<table>
<tr><th>Section</th><th>Key phrases</th></tr>
<tr><td>Introduction</td><td>The aim of this report is to… · This report sets out to…</td></tr>
<tr><td>Findings</td><td>It was found that… · The majority of respondents felt that… · A significant proportion of…</td></tr>
<tr><td>Interpreting</td><td>This would appear to suggest that… · This can be attributed to…</td></tr>
<tr><td>Recommendations</td><td>It is recommended that… · It would be advisable to… · Serious consideration should be given to…</td></tr>
<tr><td>Conclusion</td><td>In light of the above,… · On balance,…</td></tr>
</table>
<h2>An impersonal style</h2>
<p>Avoid "I think". Use the passive and impersonal structures: <s-en>It is widely acknowledged that…</s-en> · <s-en>It is worth noting that…</s-en> · <s-en>There appears to be…</s-en></p>
<div class="tip">After "recommend that" and "suggest that", formal English uses the base form of the verb (the subjunctive): <s-en>It is recommended that the company <b>review</b> its policy.</s-en> (not "reviews").</div>
`,
  body_fr: `
<h2>Une structure claire</h2>
<p>Un rapport s'adresse à un lecteur pressé : utilise des <b>titres</b>, des paragraphes courts et une recommandation à la fin.</p>
<table>
<tr><th>Partie</th><th>Formules clés</th></tr>
<tr><td>Introduction</td><td>The aim of this report is to… (Ce rapport a pour objet de…) · This report sets out to… (Ce rapport se propose de…)</td></tr>
<tr><td>Résultats</td><td>It was found that… (Il est apparu que…) · The majority of respondents felt that… (La majorité des personnes interrogées estimaient que…) · A significant proportion of… (Une part importante de…)</td></tr>
<tr><td>Interprétation</td><td>This would appear to suggest that… (Cela semblerait indiquer que…) · This can be attributed to… (Cela peut s'expliquer par…)</td></tr>
<tr><td>Recommandations</td><td>It is recommended that… (Il est recommandé que…) · It would be advisable to… (Il serait judicieux de…) · Serious consideration should be given to… (Il conviendrait d'envisager sérieusement…)</td></tr>
<tr><td>Conclusion</td><td>In light of the above,… (Au vu de ce qui précède…) · On balance,… (Tout bien considéré…)</td></tr>
</table>
<h2>Un style impersonnel</h2>
<p>Évite « I think ». Utilise le passif et les tournures impersonnelles : <s-en>It is widely acknowledged that…</s-en> (Il est largement admis que…) · <s-en>It is worth noting that…</s-en> (Il convient de noter que…) · <s-en>There appears to be…</s-en> (Il semble y avoir…)</p>
<div class="tip">Après « recommend that » et « suggest that », l'anglais soutenu emploie la base verbale (le subjonctif) : <s-en>It is recommended that the company <b>review</b> its policy.</s-en> (et non « reviews »).</div>
`,
  examples: [
    ["The aim of this report is to evaluate the new system.", "Ce rapport a pour objet d'évaluer le nouveau système."],
    ["The majority of respondents felt that the training was useful.", "La majorité des personnes interrogées ont trouvé la formation utile."],
    ["This can be attributed to a lack of communication.", "Cela peut s'expliquer par un manque de communication."],
    ["It is recommended that staff be given more flexibility.", "Il est recommandé d'accorder davantage de souplesse au personnel."],
    ["In light of the above, the project should continue.", "Au vu de ce qui précède, le projet devrait se poursuivre."]
  ],
  quiz: [
    { q: "Which sentence suits a formal report?", q_fr: "Quelle phrase convient à un rapport formel ?", o: ["I think people liked it.", "It was found that most staff were satisfied.", "Everybody loved it!"], a: 1, ex: "Impersonal passive structure.", ex_fr: "Tournure passive impersonnelle." },
    { q: "Complete: “It is recommended that the manager ___ the budget.”", q_fr: "Complète : « It is recommended that the manager ___ the budget. »", o: ["reviews", "review", "will review"], a: 1, ex: "Formal subjunctive: base form.", ex_fr: "Subjonctif soutenu : base verbale." },
    { q: "“This can be attributed to…” introduces…", q_fr: "« This can be attributed to… » introduit…", o: ["a cause", "a recommendation", "a title"], a: 0, ex: "attributed to = dû à, expliqué par.", ex_fr: "attributed to = dû à." },
    { q: "Translate: « Il convient de noter que… »", o: ["It is worth noting that…", "It is worth to note that…", "It is noted worth that…"], a: 0, ex: "It is worth + -ing.", ex_fr: "It is worth + -ing." }
  ]
},
{
  id: 123, after: 54, level: "C1", kind: "functional", icon: "coffee",
  title: "Everyday English: the art of small talk", title_fr: "Anglais pratique : l'art de la conversation légère",
  subtitle: "Start, keep going and politely end a conversation with anyone.", subtitle_fr: "Lancer, entretenir et terminer poliment une conversation avec n'importe qui.",
  body: `
<h2>Starting a conversation</h2>
<p>Comment on the shared situation: <s-en>Lovely venue, isn't it?</s-en> · <s-en>How do you know the host?</s-en> · <s-en>Have you come far?</s-en></p>
<h2>Keeping it going</h2>
<p>Ask open questions and pick up on details: <s-en>Oh, you work in publishing? That must be fascinating. How did you get into that?</s-en></p>
<p>Show you're listening: <s-en>Really? I had no idea.</s-en> · <s-en>That makes sense.</s-en> · <s-en>Funnily enough, the same thing happened to me.</s-en></p>
<h2>Safe topics, risky topics</h2>
<p><b>Safe:</b> travel, food, the weather, films, the event itself. <b>Avoid with strangers:</b> salary, politics, religion, age.</p>
<h2>Ending politely (the hardest part!)</h2>
<table>
<tr><th>Situation</th><th>What to say</th></tr>
<tr><td>At a party</td><td>I'm going to grab another drink. Lovely talking to you!</td></tr>
<tr><td>At a work event</td><td>I won't keep you any longer. Shall we swap contact details?</td></tr>
<tr><td>Classic exit</td><td>Anyway, I'll let you get on. It was great to meet you.</td></tr>
</table>
<div class="tip">British small talk relies on understatement: <s-en>It's a bit chilly</s-en> (= it's freezing), <s-en>Not bad at all</s-en> (= excellent).</div>
`,
  body_fr: `
<h2>Engager la conversation</h2>
<p>Commente la situation que vous partagez : <s-en>Lovely venue, isn't it?</s-en> (Joli lieu, non ?) · <s-en>How do you know the host?</s-en> (Comment connaissez-vous l'hôte ?) · <s-en>Have you come far?</s-en> (Vous venez de loin ?)</p>
<h2>Faire durer l'échange</h2>
<p>Pose des questions ouvertes et rebondis sur les détails : <s-en>Oh, you work in publishing? That must be fascinating. How did you get into that?</s-en> (Ah, vous travaillez dans l'édition ? Ça doit être passionnant. Comment êtes-vous arrivé là ?)</p>
<p>Montre que tu écoutes : <s-en>Really? I had no idea.</s-en> (Vraiment ? Je n'en avais aucune idée.) · <s-en>That makes sense.</s-en> (Ça se comprend.) · <s-en>Funnily enough, the same thing happened to me.</s-en> (Curieusement, il m'est arrivé la même chose.)</p>
<h2>Sujets sûrs, sujets risqués</h2>
<p><b>Sûrs :</b> les voyages, la cuisine, la météo, les films, l'événement lui-même. <b>À éviter avec des inconnus :</b> le salaire, la politique, la religion, l'âge.</p>
<h2>Conclure poliment (le plus difficile !)</h2>
<table>
<tr><th>Situation</th><th>Quoi dire</th></tr>
<tr><td>En soirée</td><td>I'm going to grab another drink. Lovely talking to you! (Je vais me chercher un autre verre. Ravie d'avoir discuté !)</td></tr>
<tr><td>Événement professionnel</td><td>I won't keep you any longer. Shall we swap contact details? (Je ne vous retiens pas plus longtemps. On échange nos coordonnées ?)</td></tr>
<tr><td>Sortie classique</td><td>Anyway, I'll let you get on. It was great to meet you. (Bon, je vous laisse. Ravie de vous avoir rencontré.)</td></tr>
</table>
<div class="tip">La conversation britannique repose sur l'euphémisme : <s-en>It's a bit chilly</s-en> (= il gèle), <s-en>Not bad at all</s-en> (= excellent).</div>
`,
  examples: [
    ["How do you know the host?", "Comment connaissez-vous l'hôte ?"],
    ["That must be fascinating. How did you get into that?", "Ça doit être passionnant. Comment vous êtes-vous lancé là-dedans ?"],
    ["Funnily enough, I've just been there.", "Curieusement, je viens d'y aller."],
    ["I won't keep you any longer.", "Je ne vous retiens pas plus longtemps."],
    ["Anyway, I'll let you get on.", "Bon, je vous laisse."]
  ],
  quiz: [
    { q: "A good way to start a conversation at a wedding:", q_fr: "Une bonne façon d'engager la conversation à un mariage :", o: ["How much do you earn?", "How do you know the couple?", "Who did you vote for?"], a: 1, ex: "Comment on the shared situation; avoid money and politics.", ex_fr: "Parle de la situation commune ; évite l'argent et la politique." },
    { q: "“I'll let you get on” is used to…", q_fr: "« I'll let you get on » sert à…", o: ["start a conversation", "end a conversation politely", "ask for help"], a: 1, ex: "Literally: I'll let you continue what you were doing.", ex_fr: "Littéralement : je vous laisse continuer ce que vous faisiez." },
    { q: "A British person says the film was “not bad at all”. They mean…", q_fr: "Un Britannique dit que le film était « not bad at all ». Il veut dire…", o: ["it was average", "it was very good", "it was bad"], a: 1, ex: "Understatement: it often means very good.", ex_fr: "Euphémisme : ça veut souvent dire très bien." },
    { q: "Which question keeps the conversation going best?", q_fr: "Quelle question relance le mieux la conversation ?", o: ["Do you like your job?", "How did you get into that?", "Is it far?"], a: 1, ex: "Open question = longer answer.", ex_fr: "Question ouverte = réponse plus longue." }
  ]
},
{
  id: 124, after: 51, level: "C1", kind: "functional", icon: "list-collapse",
  title: "Everyday English: summarising and paraphrasing", title_fr: "Anglais pratique : résumer et paraphraser",
  subtitle: "Report what a text says in your own words: a key skill for exams and work.", subtitle_fr: "Restituer un texte avec tes propres mots : une compétence clé pour les examens et le travail.",
  body: `
<h2>Introducing a source</h2>
<p><s-en>According to the author,…</s-en> · <s-en>The article argues / claims / suggests that…</s-en> · <s-en>The writer points out that…</s-en> · <s-en>In the author's view,…</s-en></p>
<p>Choose the reporting verb carefully: <b>claims</b> (you're not sure it's true), <b>shows</b> (it's proven), <b>suggests</b> (it's tentative), <b>maintains</b> (they insist).</p>
<h2>Four ways to paraphrase</h2>
<table>
<tr><th>Technique</th><th>Original → Paraphrase</th></tr>
<tr><td>Synonyms</td><td>a huge increase → a dramatic rise</td></tr>
<tr><td>Change the word class</td><td>Prices rose sharply. → There was a sharp rise in prices.</td></tr>
<tr><td>Active ↔ passive</td><td>Scientists discovered… → It was discovered that…</td></tr>
<tr><td>Change the structure</td><td>Although it was cheap, nobody bought it. → Despite its low price, it didn't sell.</td></tr>
</table>
<h2>Summarising</h2>
<p><s-en>The main point is that…</s-en> · <s-en>In short / In a nutshell,…</s-en> · <s-en>The text essentially makes two points:…</s-en> · <s-en>Broadly speaking,…</s-en></p>
<div class="tip">A good summary keeps the ideas, not the examples. Remove the details, the figures and the anecdotes; keep the argument.</div>
`,
  body_fr: `
<h2>Présenter une source</h2>
<p><s-en>According to the author,…</s-en> (Selon l'auteur…) · <s-en>The article argues / claims / suggests that…</s-en> (L'article soutient / affirme / laisse entendre que…) · <s-en>The writer points out that…</s-en> (L'auteur fait remarquer que…) · <s-en>In the author's view,…</s-en> (Pour l'auteur…)</p>
<p>Choisis bien le verbe introducteur : <b>claims</b> (tu n'es pas sûre que ce soit vrai), <b>shows</b> (c'est prouvé), <b>suggests</b> (c'est prudent), <b>maintains</b> (l'auteur insiste).</p>
<h2>Quatre façons de paraphraser</h2>
<table>
<tr><th>Technique</th><th>Original → Paraphrase</th></tr>
<tr><td>Synonymes</td><td>a huge increase → a dramatic rise (une énorme hausse → une hausse spectaculaire)</td></tr>
<tr><td>Changer la nature du mot</td><td>Prices rose sharply. → There was a sharp rise in prices.</td></tr>
<tr><td>Actif ↔ passif</td><td>Scientists discovered… → It was discovered that…</td></tr>
<tr><td>Changer la structure</td><td>Although it was cheap, nobody bought it. → Despite its low price, it didn't sell. (Malgré son prix bas, il ne s'est pas vendu.)</td></tr>
</table>
<h2>Résumer</h2>
<p><s-en>The main point is that…</s-en> (L'idée principale est que…) · <s-en>In short / In a nutshell,…</s-en> (Bref / En un mot…) · <s-en>The text essentially makes two points:…</s-en> (Le texte avance essentiellement deux idées :…) · <s-en>Broadly speaking,…</s-en> (De manière générale…)</p>
<div class="tip">Un bon résumé garde les idées, pas les exemples. Supprime les détails, les chiffres et les anecdotes ; garde l'argumentation.</div>
`,
  examples: [
    ["The article claims that remote work increases productivity.", "L'article affirme que le télétravail augmente la productivité."],
    ["The writer points out that the data is incomplete.", "L'auteur fait remarquer que les données sont incomplètes."],
    ["In a nutshell, the plan is too expensive.", "En un mot, le projet coûte trop cher."],
    ["Broadly speaking, the results are positive.", "De manière générale, les résultats sont positifs."],
    ["Despite its low price, the product didn't sell.", "Malgré son prix bas, le produit ne s'est pas vendu."]
  ],
  quiz: [
    { q: "You doubt the author's statement. Which verb do you use?", q_fr: "Tu doutes de l'affirmation de l'auteur. Quel verbe utilises-tu ?", o: ["shows", "claims", "proves"], a: 1, ex: "claims = affirms, without proof.", ex_fr: "claims = affirme, sans preuve." },
    { q: "Paraphrase: “Sales fell dramatically.”", q_fr: "Paraphrase : « Sales fell dramatically. »", o: ["There was a dramatic fall in sales.", "Sales dramatically fell down.", "Sales were dramatic."], a: 0, ex: "Verb + adverb → adjective + noun.", ex_fr: "Verbe + adverbe → adjectif + nom." },
    { q: "What should a good summary remove?", q_fr: "Que doit supprimer un bon résumé ?", o: ["The main argument", "The examples and details", "The conclusion"], a: 1, ex: "Keep ideas, remove details.", ex_fr: "Garde les idées, supprime les détails." },
    { q: "Translate: « En un mot… »", o: ["In a word of…", "In a nutshell…", "In one sentence of…"], a: 1, ex: "In a nutshell = en un mot, en bref.", ex_fr: "In a nutshell = en un mot, en bref." }
  ]
},
{
  id: 125, after: 53, level: "C1", kind: "functional", icon: "handshake",
  title: "Everyday English: negotiating and handling objections", title_fr: "Anglais pratique : négocier et répondre aux objections",
  subtitle: "Concede, counter-argue and reach a compromise with diplomacy.", subtitle_fr: "Concéder, contre-argumenter et trouver un compromis avec diplomatie.",
  body: `
<h2>Conceding a point (without giving up)</h2>
<p><s-en>Granted, …, but…</s-en> · <s-en>That's a fair point; however,…</s-en> · <s-en>I take your point, but be that as it may,…</s-en> · <s-en>I'll give you that.</s-en></p>
<h2>Making and conditioning offers</h2>
<p><s-en>If you could…, we'd be prepared to…</s-en> · <s-en>We could consider…, provided that…</s-en> · <s-en>On condition that…</s-en> · <s-en>That would depend on…</s-en></p>
<h2>Rejecting diplomatically</h2>
<p><s-en>I'm afraid that's not something we can agree to.</s-en> · <s-en>That's a little more than we had in mind.</s-en> · <s-en>I'm not sure that would work for us.</s-en></p>
<h2>Moving towards agreement</h2>
<table>
<tr><th>Goal</th><th>Phrase</th></tr>
<tr><td>Find common ground</td><td>We both want… so let's focus on that.</td></tr>
<tr><td>Suggest a compromise</td><td>How about we meet halfway?</td></tr>
<tr><td>Check agreement</td><td>So, if I've understood correctly, we've agreed that…</td></tr>
<tr><td>Close</td><td>I think we have a deal. · Let's put that in writing.</td></tr>
</table>
<div class="tip">"Provided that" and "as long as" are followed by the present, even for the future: <s-en>We'll sign, provided that the price <b>stays</b> the same.</s-en></div>
`,
  body_fr: `
<h2>Concéder un point (sans céder)</h2>
<p><s-en>Granted, …, but…</s-en> (Certes…, mais…) · <s-en>That's a fair point; however,…</s-en> (C'est juste ; cependant…) · <s-en>I take your point, but be that as it may,…</s-en> (J'entends bien, mais quoi qu'il en soit…) · <s-en>I'll give you that.</s-en> (Je te l'accorde.)</p>
<h2>Faire des offres sous condition</h2>
<p><s-en>If you could…, we'd be prepared to…</s-en> (Si vous pouviez…, nous serions prêts à…) · <s-en>We could consider…, provided that…</s-en> (Nous pourrions envisager…, à condition que…) · <s-en>On condition that…</s-en> (À condition que…) · <s-en>That would depend on…</s-en> (Cela dépendrait de…)</p>
<h2>Refuser avec diplomatie</h2>
<p><s-en>I'm afraid that's not something we can agree to.</s-en> (Je crains que nous ne puissions pas accepter cela.) · <s-en>That's a little more than we had in mind.</s-en> (C'est un peu plus que ce que nous avions prévu.) · <s-en>I'm not sure that would work for us.</s-en> (Je ne suis pas sûre que cela nous convienne.)</p>
<h2>Aller vers un accord</h2>
<table>
<tr><th>Objectif</th><th>Formule</th></tr>
<tr><td>Trouver un terrain d'entente</td><td>We both want… so let's focus on that. (Nous voulons tous les deux…, concentrons-nous là-dessus.)</td></tr>
<tr><td>Proposer un compromis</td><td>How about we meet halfway? (Et si on coupait la poire en deux ?)</td></tr>
<tr><td>Vérifier l'accord</td><td>So, if I've understood correctly, we've agreed that… (Donc, si j'ai bien compris, nous sommes d'accord pour…)</td></tr>
<tr><td>Conclure</td><td>I think we have a deal. (Je crois que nous sommes d'accord.) · Let's put that in writing. (Mettons-le par écrit.)</td></tr>
</table>
<div class="tip">« Provided that » et « as long as » sont suivis du présent, même pour le futur : <s-en>We'll sign, provided that the price <b>stays</b> the same.</s-en> (Nous signerons, à condition que le prix reste le même.)</div>
`,
  examples: [
    ["Granted, it's expensive, but the quality is excellent.", "Certes, c'est cher, mais la qualité est excellente."],
    ["We'd be prepared to lower the price if you ordered more.", "Nous serions prêts à baisser le prix si vous commandiez davantage."],
    ["That's a little more than we had in mind.", "C'est un peu plus que ce que nous avions prévu."],
    ["How about we meet halfway?", "Et si on coupait la poire en deux ?"],
    ["We'll agree, provided that delivery is free.", "Nous acceptons, à condition que la livraison soit gratuite."]
  ],
  quiz: [
    { q: "Complete: “We'll sign, provided that the price ___ the same.”", q_fr: "Complète : « We'll sign, provided that the price ___ the same. »", o: ["will stay", "stays", "stayed"], a: 1, ex: "Present after provided that.", ex_fr: "Présent après provided that." },
    { q: "The most diplomatic way to refuse a price:", q_fr: "La façon la plus diplomate de refuser un prix :", o: ["That's too expensive.", "No way.", "That's a little more than we had in mind."], a: 2, ex: "Understatement softens the refusal.", ex_fr: "L'euphémisme adoucit le refus." },
    { q: "“Let's meet halfway” means…", q_fr: "« Let's meet halfway » veut dire…", o: ["let's meet in the middle of the road", "let's compromise", "let's stop negotiating"], a: 1, ex: "Each side gives up part of what it wants.", ex_fr: "Chacun fait la moitié du chemin." },
    { q: "Which phrase concedes a point?", q_fr: "Quelle formule concède un point ?", o: ["I'll give you that.", "I'm afraid not.", "Let's put that in writing."], a: 0, ex: "I'll give you that = je te l'accorde.", ex_fr: "I'll give you that = je te l'accorde." }
  ]
}
);
