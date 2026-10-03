/* "Everyday English" lessons (functional language), B1. */
window.LESSONS.push(
{
  id: 112, after: 25, level: "B1", kind: "functional", icon: "messages-square",
  title: "Everyday English: telling stories and reacting", title_fr: "Anglais pratique : raconter et réagir",
  subtitle: "Organise a story, and show interest when someone tells one.", subtitle_fr: "Organiser un récit, et montrer de l'intérêt quand on t'en raconte un.",
  body: `
<h2>Organising a story</h2>
<p><b>Start:</b> <s-en>You'll never guess what happened yesterday.</s-en> · <s-en>Did I tell you about…?</s-en></p>
<p><b>Order the events:</b> <s-en>First,…</s-en> · <s-en>Then…</s-en> · <s-en>After that,…</s-en> · <s-en>Suddenly,…</s-en> · <s-en>In the end,…</s-en></p>
<p><b>Add drama:</b> <s-en>The funny thing is…</s-en> · <s-en>And guess what?</s-en> · <s-en>To make things worse,…</s-en></p>
<h2>Reacting when someone tells you a story</h2>
<table>
<tr><th>Feeling</th><th>Reaction</th></tr>
<tr><td>Surprise</td><td>Really? · No way! · You're joking!</td></tr>
<tr><td>Interest</td><td>And then what happened? · What did you do?</td></tr>
<tr><td>Sympathy</td><td>Oh no! · That's awful. · Poor you!</td></tr>
<tr><td>Happiness</td><td>That's great! · Lucky you! · Good for you!</td></tr>
</table>
<div class="tip">Short reactions with the auxiliary are very natural: <s-en>I've lost my job. — Have you? Oh no!</s-en> (see the lesson on question tags).</div>
`,
  body_fr: `
<h2>Organiser un récit</h2>
<p><b>Commencer :</b> <s-en>You'll never guess what happened yesterday.</s-en> (Tu ne devineras jamais ce qui s'est passé hier.) · <s-en>Did I tell you about…?</s-en> (Je t'ai parlé de… ?)</p>
<p><b>Ordonner les événements :</b> <s-en>First,…</s-en> (D'abord) · <s-en>Then…</s-en> (Puis) · <s-en>After that,…</s-en> (Ensuite) · <s-en>Suddenly,…</s-en> (Soudain) · <s-en>In the end,…</s-en> (Finalement)</p>
<p><b>Ajouter du suspense :</b> <s-en>The funny thing is…</s-en> (Le plus drôle, c'est que…) · <s-en>And guess what?</s-en> (Et devine quoi ?) · <s-en>To make things worse,…</s-en> (Pour couronner le tout,…)</p>
<h2>Réagir quand on te raconte une histoire</h2>
<table>
<tr><th>Émotion</th><th>Réaction</th></tr>
<tr><td>Surprise</td><td>Really? (C'est vrai ?) · No way! (Pas possible !) · You're joking! (Tu plaisantes !)</td></tr>
<tr><td>Intérêt</td><td>And then what happened? (Et après ?) · What did you do? (Qu'est-ce que tu as fait ?)</td></tr>
<tr><td>Compassion</td><td>Oh no! · That's awful. (C'est affreux.) · Poor you! (Mon pauvre / ma pauvre !)</td></tr>
<tr><td>Joie</td><td>That's great! · Lucky you! (Quelle chance !) · Good for you! (Tant mieux pour toi !)</td></tr>
</table>
<div class="tip">Les réactions courtes avec l'auxiliaire sont très naturelles : <s-en>I've lost my job. — Have you? Oh no!</s-en> (voir la leçon sur les question tags).</div>
`,
  examples: [
    ["You'll never guess what happened to me yesterday.", "Tu ne devineras jamais ce qui m'est arrivé hier."],
    ["And then what happened?", "Et ensuite, qu'est-ce qui s'est passé ?"],
    ["No way! You're joking!", "Pas possible ! Tu plaisantes !"],
    ["To make things worse, it started to rain.", "Pour couronner le tout, il s'est mis à pleuvoir."],
    ["In the end, everything was fine.", "Finalement, tout s'est bien passé."]
  ],
  quiz: [
    { q: "Your friend says she won a competition. You react:", q_fr: "Ton amie dit qu'elle a gagné un concours. Tu réagis :", o: ["Poor you!", "Good for you!", "That's awful."], a: 1, ex: "Good for you! = tant mieux pour toi.", ex_fr: "Good for you! = tant mieux pour toi." },
    { q: "Which word introduces the last event of a story?", q_fr: "Quel mot introduit le dernier événement d'un récit ?", o: ["First", "Suddenly", "In the end"], a: 2, ex: "In the end = finalement.", ex_fr: "In the end = finalement." },
    { q: "“I've broken my leg.” — A natural reaction:", q_fr: "« I've broken my leg. » — Une réaction naturelle :", o: ["Have you? Oh no!", "Did you? Great!", "Lucky you!"], a: 0, ex: "Short question with the auxiliary + sympathy.", ex_fr: "Petite question avec l'auxiliaire + compassion." },
    { q: "Translate: « Pour couronner le tout… »", o: ["To make things worse…", "To finish everything…", "For the crown…"], a: 0, ex: "To make things worse.", ex_fr: "To make things worse." }
  ]
},
{
  id: 111, after: 27, level: "B1", kind: "functional", icon: "hand-heart",
  title: "Everyday English: requests and offers", title_fr: "Anglais pratique : demander et proposer un service",
  subtitle: "Ask politely, ask for permission, offer help.", subtitle_fr: "Demander poliment, demander la permission, proposer son aide.",
  body: `
<h2>Requests: from direct to very polite</h2>
<table>
<tr><th>Level</th><th>Example</th></tr>
<tr><td>Direct (friends)</td><td>Can you pass me the salt?</td></tr>
<tr><td>Polite</td><td>Could you send me the file, please?</td></tr>
<tr><td>Very polite</td><td>Would you mind sending me the file?</td></tr>
<tr><td>Very formal</td><td>I was wondering if you could help me.</td></tr>
</table>
<div class="warn"><b>Would you mind</b> + -ing! And the answer is surprising: <s-en>Would you mind closing the door? — No, not at all.</s-en> (“No” = “I don't mind” = OK!)</div>
<h2>Asking for permission</h2>
<p><s-en>Can I use your phone?</s-en> · <s-en>Could I leave early today?</s-en> · <s-en>Do you mind if I open the window?</s-en> · <s-en>Is it OK if I sit here?</s-en></p>
<h2>Offering help</h2>
<p><s-en>Shall I carry that for you?</s-en> · <s-en>I'll do it.</s-en> · <s-en>Would you like me to call a taxi?</s-en> · <s-en>Let me help you.</s-en></p>
<h2>Answering</h2>
<p>Yes: <s-en>Sure.</s-en> · <s-en>Of course.</s-en> · <s-en>No problem.</s-en> · <s-en>Go ahead.</s-en></p>
<p>No (politely): <s-en>I'm afraid I can't right now.</s-en> · <s-en>Sorry, I'd rather you didn't.</s-en></p>
`,
  body_fr: `
<h2>Les demandes : du direct au très poli</h2>
<table>
<tr><th>Niveau</th><th>Exemple</th></tr>
<tr><td>Direct (amis)</td><td>Can you pass me the salt? (Tu peux me passer le sel ?)</td></tr>
<tr><td>Poli</td><td>Could you send me the file, please? (Pourriez-vous m'envoyer le fichier ?)</td></tr>
<tr><td>Très poli</td><td>Would you mind sending me the file? (Cela vous dérangerait-il de m'envoyer le fichier ?)</td></tr>
<tr><td>Très formel</td><td>I was wondering if you could help me. (Je me demandais si vous pourriez m'aider.)</td></tr>
</table>
<div class="warn"><b>Would you mind</b> + -ing ! Et la réponse est surprenante : <s-en>Would you mind closing the door? — No, not at all.</s-en> (« No » = « ça ne me dérange pas » = d'accord !)</div>
<h2>Demander la permission</h2>
<p><s-en>Can I use your phone?</s-en> · <s-en>Could I leave early today?</s-en> (Pourrais-je partir plus tôt ?) · <s-en>Do you mind if I open the window?</s-en> (Ça vous dérange si j'ouvre la fenêtre ?) · <s-en>Is it OK if I sit here?</s-en></p>
<h2>Proposer son aide</h2>
<p><s-en>Shall I carry that for you?</s-en> (Je vous le porte ?) · <s-en>I'll do it.</s-en> (Je m'en occupe.) · <s-en>Would you like me to call a taxi?</s-en> (Voulez-vous que j'appelle un taxi ?) · <s-en>Let me help you.</s-en></p>
<h2>Répondre</h2>
<p>Oui : <s-en>Sure.</s-en> · <s-en>Of course.</s-en> · <s-en>No problem.</s-en> · <s-en>Go ahead.</s-en> (Allez-y.)</p>
<p>Non (poliment) : <s-en>I'm afraid I can't right now.</s-en> (J'ai bien peur de ne pas pouvoir maintenant.) · <s-en>Sorry, I'd rather you didn't.</s-en> (Je préférerais que non.)</p>
`,
  examples: [
    ["Could you send me the invoice, please?", "Pourriez-vous m'envoyer la facture, s'il vous plaît ?"],
    ["Would you mind waiting a few minutes?", "Cela vous dérangerait-il d'attendre quelques minutes ?"],
    ["Do you mind if I open the window?", "Ça vous dérange si j'ouvre la fenêtre ?"],
    ["Shall I make some coffee?", "Je fais du café ?"],
    ["Would you like me to help you?", "Voulez-vous que je vous aide ?"]
  ],
  quiz: [
    { q: "Complete: “Would you mind ___ the door?”", q_fr: "Complète : « Would you mind ___ the door? »", o: ["to close", "closing", "close"], a: 1, ex: "Would you mind + -ing.", ex_fr: "Would you mind + -ing." },
    { q: "“Would you mind helping me?” — You agree. You say:", q_fr: "« Would you mind helping me? » — Tu acceptes. Tu dis :", o: ["Yes, I mind.", "No, not at all.", "Yes, I would."], a: 1, ex: "No = it doesn't bother me = OK.", ex_fr: "No = ça ne me dérange pas = d'accord." },
    { q: "Offer to carry a bag:", q_fr: "Propose de porter un sac :", o: ["Shall I carry your bag?", "Do I carry your bag?", "Will I carrying your bag?"], a: 0, ex: "Shall I…? = an offer.", ex_fr: "Shall I…? = une proposition." },
    { q: "The most formal request:", q_fr: "La demande la plus formelle :", o: ["Help me.", "Can you help me?", "I was wondering if you could help me."], a: 2, ex: "I was wondering if… is very formal.", ex_fr: "I was wondering if… est très formel." }
  ]
},
{
  id: 113, after: 29, level: "B1", kind: "functional", icon: "triangle-alert",
  title: "Everyday English: complaining and apologising", title_fr: "Anglais pratique : se plaindre et s'excuser",
  subtitle: "Complain without being rude, and apologise well.", subtitle_fr: "Se plaindre sans être impoli, et bien s'excuser.",
  body: `
<h2>Complaining politely (the British way)</h2>
<p><s-en>I'm sorry to bother you, but…</s-en> · <s-en>I'm afraid there's a problem with…</s-en> · <s-en>I'd like to make a complaint.</s-en></p>
<p><s-en>I ordered the fish, but this is chicken.</s-en> · <s-en>The heating doesn't seem to be working.</s-en></p>
<p>Say what you want: <s-en>Could you change it, please?</s-en> · <s-en>I'd like a refund.</s-en> · <s-en>Could I speak to the manager?</s-en></p>
<div class="tip">“doesn't seem to be working” is softer than “doesn't work”: British people often soften complaints. It's more effective, not weaker.</div>
<h2>Apologising</h2>
<table>
<tr><th>Situation</th><th>What to say</th></tr>
<tr><td>Small problem</td><td>Sorry! · Oops, sorry about that.</td></tr>
<tr><td>Bigger problem</td><td>I'm really sorry. · I do apologise.</td></tr>
<tr><td>Explaining</td><td>I'm sorry I'm late, my train was cancelled.</td></tr>
<tr><td>Promising</td><td>It won't happen again.</td></tr>
</table>
<h2>Accepting an apology</h2>
<p><s-en>That's OK.</s-en> · <s-en>No worries.</s-en> · <s-en>Don't worry about it.</s-en> · <s-en>It doesn't matter.</s-en></p>
<div class="warn">Answer “Sorry” with <s-en>That's OK</s-en> or <s-en>No worries</s-en>, not with “You're welcome” (which answers “Thank you”).</div>
`,
  body_fr: `
<h2>Se plaindre poliment (à la britannique)</h2>
<p><s-en>I'm sorry to bother you, but…</s-en> (Désolée de vous déranger, mais…) · <s-en>I'm afraid there's a problem with…</s-en> (J'ai bien peur qu'il y ait un problème avec…) · <s-en>I'd like to make a complaint.</s-en> (J'aimerais faire une réclamation.)</p>
<p><s-en>I ordered the fish, but this is chicken.</s-en> · <s-en>The heating doesn't seem to be working.</s-en> (Le chauffage n'a pas l'air de fonctionner.)</p>
<p>Dis ce que tu veux : <s-en>Could you change it, please?</s-en> · <s-en>I'd like a refund.</s-en> (Je voudrais être remboursée.) · <s-en>Could I speak to the manager?</s-en></p>
<div class="tip">« doesn't seem to be working » est plus doux que « doesn't work » : les Britanniques adoucissent souvent leurs plaintes. C'est plus efficace, pas plus faible.</div>
<h2>S'excuser</h2>
<table>
<tr><th>Situation</th><th>Que dire</th></tr>
<tr><td>Petit souci</td><td>Sorry! · Oops, sorry about that.</td></tr>
<tr><td>Plus grave</td><td>I'm really sorry. · I do apologise. (Je vous présente mes excuses.)</td></tr>
<tr><td>Expliquer</td><td>I'm sorry I'm late, my train was cancelled.</td></tr>
<tr><td>Promettre</td><td>It won't happen again. (Ça ne se reproduira pas.)</td></tr>
</table>
<h2>Accepter des excuses</h2>
<p><s-en>That's OK.</s-en> · <s-en>No worries.</s-en> (Pas de souci.) · <s-en>Don't worry about it.</s-en> · <s-en>It doesn't matter.</s-en> (Ce n'est pas grave.)</p>
<div class="warn">On répond à « Sorry » par <s-en>That's OK</s-en> ou <s-en>No worries</s-en>, pas par « You're welcome » (qui répond à « Thank you »).</div>
`,
  examples: [
    ["I'm sorry to bother you, but my room is very cold.", "Désolée de vous déranger, mais ma chambre est très froide."],
    ["I'm afraid there's a mistake on the bill.", "J'ai bien peur qu'il y ait une erreur sur l'addition."],
    ["I'd like a refund, please.", "Je voudrais être remboursée, s'il vous plaît."],
    ["I'm really sorry. It won't happen again.", "Je suis vraiment désolée. Ça ne se reproduira pas."],
    ["Don't worry about it.", "Ne t'en fais pas."]
  ],
  quiz: [
    { q: "Someone says “Sorry!”. You answer:", q_fr: "Quelqu'un dit « Sorry! ». Tu réponds :", o: ["You're welcome.", "No worries.", "Please."], a: 1, ex: "You're welcome answers “Thank you”.", ex_fr: "You're welcome répond à « Thank you »." },
    { q: "The softest complaint:", q_fr: "La réclamation la plus douce :", o: ["Your heating is broken!", "The heating doesn't seem to be working.", "Heating doesn't work, fix it."], a: 1, ex: "doesn't seem to be… softens the complaint.", ex_fr: "doesn't seem to be… adoucit la plainte." },
    { q: "Translate: « Ça ne se reproduira pas. »", o: ["It won't happen again.", "It doesn't arrive again.", "It will not repeat."], a: 0, ex: "It won't happen again.", ex_fr: "It won't happen again." },
    { q: "Translate: « Je voudrais être remboursée. »", o: ["I'd like a refund.", "I'd like to be reimbursed me.", "I want my money back now."], a: 0, ex: "A refund = un remboursement.", ex_fr: "A refund = un remboursement." }
  ]
},
{
  id: 114, after: 64, level: "B1", kind: "functional", icon: "briefcase",
  title: "Everyday English: job interviews", title_fr: "Anglais pratique : l'entretien d'embauche",
  subtitle: "Understand the classic questions and answer them well.", subtitle_fr: "Comprendre les questions classiques et bien y répondre.",
  body: `
<h2>The classic questions</h2>
<table>
<tr><th>Question</th><th>What they want to know</th></tr>
<tr><td>Tell me about yourself.</td><td>Your career in 1 minute</td></tr>
<tr><td>Why do you want this job?</td><td>Your motivation</td></tr>
<tr><td>What are your strengths?</td><td>Your best qualities</td></tr>
<tr><td>What is your greatest weakness?</td><td>Your honesty and self-awareness</td></tr>
<tr><td>Where do you see yourself in five years?</td><td>Your ambitions</td></tr>
<tr><td>Do you have any questions for us?</td><td>Your interest in the company</td></tr>
</table>
<h2>Useful answers</h2>
<p><s-en>I've been working in this field for several years.</s-en> (present perfect continuous!)</p>
<p><s-en>I have experience in managing projects.</s-en> · <s-en>I'm good at working under pressure.</s-en></p>
<p><s-en>I'm passionate about visual communication.</s-en> · <s-en>I'd like to develop my management skills.</s-en></p>
<p>Weakness: <s-en>I sometimes spend too much time on details, but I've learnt to set clear deadlines.</s-en></p>
<div class="tip">Always prepare one or two questions for the end: <s-en>What does a typical day look like?</s-en> · <s-en>What are the next steps?</s-en></div>
`,
  body_fr: `
<h2>Les questions classiques</h2>
<table>
<tr><th>Question</th><th>Ce qu'ils veulent savoir</th></tr>
<tr><td>Tell me about yourself. (Parlez-moi de vous.)</td><td>Ton parcours en 1 minute</td></tr>
<tr><td>Why do you want this job?</td><td>Ta motivation</td></tr>
<tr><td>What are your strengths? (Vos points forts ?)</td><td>Tes meilleures qualités</td></tr>
<tr><td>What is your greatest weakness? (Votre principal défaut ?)</td><td>Ton honnêteté et ta lucidité</td></tr>
<tr><td>Where do you see yourself in five years?</td><td>Tes ambitions</td></tr>
<tr><td>Do you have any questions for us?</td><td>Ton intérêt pour l'entreprise</td></tr>
</table>
<h2>Des réponses utiles</h2>
<p><s-en>I've been working in this field for several years.</s-en> (Je travaille dans ce domaine depuis plusieurs années : present perfect continu !)</p>
<p><s-en>I have experience in managing projects.</s-en> (J'ai de l'expérience en…) · <s-en>I'm good at working under pressure.</s-en> (Je travaille bien sous pression.)</p>
<p><s-en>I'm passionate about visual communication.</s-en> · <s-en>I'd like to develop my management skills.</s-en> (J'aimerais développer mes compétences en management.)</p>
<p>Défaut : <s-en>I sometimes spend too much time on details, but I've learnt to set clear deadlines.</s-en> (Je passe parfois trop de temps sur les détails, mais j'ai appris à me fixer des échéances claires.)</p>
<div class="tip">Prépare toujours une ou deux questions pour la fin : <s-en>What does a typical day look like?</s-en> (À quoi ressemble une journée type ?) · <s-en>What are the next steps?</s-en> (Quelles sont les prochaines étapes ?)</div>
`,
  examples: [
    ["Tell me a little about yourself.", "Parlez-moi un peu de vous."],
    ["I've been working in this field for ten years.", "Je travaille dans ce domaine depuis dix ans."],
    ["I'm good at working with clients.", "Je suis à l'aise avec les clients."],
    ["I'd like to develop my skills in animation.", "J'aimerais développer mes compétences en animation."],
    ["What are the next steps?", "Quelles sont les prochaines étapes ?"]
  ],
  quiz: [
    { q: "Translate: « Je travaille ici depuis dix ans. »", o: ["I am working here since ten years.", "I've been working here for ten years.", "I work here for ten years."], a: 1, ex: "« Depuis » → present perfect (continuous) + for.", ex_fr: "« Depuis » → present perfect (continu) + for." },
    { q: "“What are your strengths?” asks about:", q_fr: "« What are your strengths? » porte sur :", o: ["your salary", "your best qualities", "your physical strength"], a: 1, ex: "Strengths = points forts.", ex_fr: "Strengths = points forts." },
    { q: "Complete: “I'm good ___ working in a team.”", q_fr: "Complète : « I'm good ___ working in a team. »", o: ["in", "at", "for"], a: 1, ex: "Good at + -ing.", ex_fr: "Good at + -ing." },
    { q: "A good question to ask at the end:", q_fr: "Une bonne question à poser à la fin :", o: ["How much holiday do I get?", "What does a typical day look like?", "Can I leave now?"], a: 1, ex: "Show interest in the job itself.", ex_fr: "Montre de l'intérêt pour le poste lui-même." }
  ]
},
{
  id: 115, after: 66, level: "B1", kind: "functional", icon: "mail",
  title: "Everyday English: formal and informal emails", title_fr: "Anglais pratique : e-mails formels et informels",
  subtitle: "Open, organise and close an email in the right tone.", subtitle_fr: "Commencer, organiser et conclure un e-mail sur le bon ton.",
  body: `
<table>
<tr><th></th><th>Formal</th><th>Informal</th></tr>
<tr><td>Opening</td><td>Dear Mr Smith, / Dear Sir or Madam,</td><td>Hi Tom, / Hello Anna,</td></tr>
<tr><td>Reason</td><td>I am writing to enquire about…</td><td>Just a quick message about…</td></tr>
<tr><td>Replying</td><td>Thank you for your email of 3 May.</td><td>Thanks for your message!</td></tr>
<tr><td>Attachment</td><td>Please find attached the invoice.</td><td>I've attached the photos.</td></tr>
<tr><td>Request</td><td>I would be grateful if you could…</td><td>Could you…?</td></tr>
<tr><td>Ending</td><td>I look forward to hearing from you.</td><td>Speak soon! / Talk soon!</td></tr>
<tr><td>Signing off</td><td>Kind regards, / Yours sincerely,</td><td>Best, / Cheers, / Love,</td></tr>
</table>
<div class="tip"><b>Yours sincerely</b> when you know the name (Dear Mr Smith), <b>Yours faithfully</b> when you don't (Dear Sir or Madam). For most professional emails today, <b>Kind regards</b> or <b>Best regards</b> is perfect.</div>
<div class="warn"><s-en>I look forward to hearing from you</s-en>: look forward to + <b>-ing</b>. Never “to hear”.</div>
`,
  body_fr: `
<table>
<tr><th></th><th>Formel</th><th>Informel</th></tr>
<tr><td>Ouverture</td><td>Dear Mr Smith, / Dear Sir or Madam, (Madame, Monsieur)</td><td>Hi Tom, / Hello Anna,</td></tr>
<tr><td>Objet</td><td>I am writing to enquire about… (Je vous écris pour me renseigner sur…)</td><td>Just a quick message about… (Petit message au sujet de…)</td></tr>
<tr><td>Répondre</td><td>Thank you for your email of 3 May. (Merci pour votre e-mail du 3 mai.)</td><td>Thanks for your message!</td></tr>
<tr><td>Pièce jointe</td><td>Please find attached the invoice. (Veuillez trouver ci-joint la facture.)</td><td>I've attached the photos.</td></tr>
<tr><td>Demande</td><td>I would be grateful if you could… (Je vous serais reconnaissante de…)</td><td>Could you…?</td></tr>
<tr><td>Conclusion</td><td>I look forward to hearing from you. (Dans l'attente de votre réponse.)</td><td>Speak soon! / Talk soon!</td></tr>
<tr><td>Formule finale</td><td>Kind regards, / Yours sincerely, (Cordialement / Veuillez agréer…)</td><td>Best, / Cheers, / Love,</td></tr>
</table>
<div class="tip"><b>Yours sincerely</b> quand tu connais le nom (Dear Mr Smith), <b>Yours faithfully</b> quand tu ne le connais pas (Dear Sir or Madam). Pour la plupart des e-mails professionnels aujourd'hui, <b>Kind regards</b> ou <b>Best regards</b> est parfait.</div>
<div class="warn"><s-en>I look forward to hearing from you</s-en> : look forward to + <b>-ing</b>. Jamais « to hear ».</div>
`,
  examples: [
    ["Dear Sir or Madam, I am writing to enquire about your design course.", "Madame, Monsieur, je vous écris pour me renseigner sur votre formation en design."],
    ["Please find attached my portfolio.", "Veuillez trouver ci-joint mon portfolio."],
    ["I would be grateful if you could reply by Friday.", "Je vous serais reconnaissante de me répondre d'ici vendredi."],
    ["I look forward to hearing from you.", "Dans l'attente de votre réponse."],
    ["Thanks for your message! Talk soon, Stella", "Merci pour ton message ! À bientôt, Stella"]
  ],
  quiz: [
    { q: "You don't know the person's name. You start with:", q_fr: "Tu ne connais pas le nom de la personne. Tu commences par :", o: ["Hi!", "Dear Sir or Madam,", "Hello you,"], a: 1, ex: "Dear Sir or Madam (formal, name unknown).", ex_fr: "Dear Sir or Madam (formel, nom inconnu)." },
    { q: "Complete: “I look forward to ___ from you.”", q_fr: "Complète : « I look forward to ___ from you. »", o: ["hear", "hearing", "heard"], a: 1, ex: "Look forward to + -ing.", ex_fr: "Look forward to + -ing." },
    { q: "Translate: « Veuillez trouver ci-joint la facture. »", o: ["Please find attached the invoice.", "Please find joined the bill.", "You will find here the facture."], a: 0, ex: "Please find attached…", ex_fr: "Please find attached…" },
    { q: "Which sign-off is informal?", q_fr: "Quelle formule finale est informelle ?", o: ["Yours faithfully,", "Kind regards,", "Cheers,"], a: 2, ex: "Cheers = informal (UK).", ex_fr: "Cheers = informel (UK)." }
  ]
}
);
