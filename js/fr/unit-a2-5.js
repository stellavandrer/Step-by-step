/* Cours de français, unité A2-5 « Health / La santé » : le corps, avoir mal à, se casser le bras (article et non
   possessif), depuis / il y a / pendant / dans, chez le médecin et à la pharmacie, il faut et l'impératif pour
   conseiller. Personnages fictifs, prénoms français. Faits vérifiables seulement : en France, le 15 (SAMU), le 18
   (pompiers) et le 112 (numéro d'urgence européen). Conseils de santé généraux uniquement. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "corpsFR", icon: "user-round", title: "The body", title_fr: "Le corps", level: "A2", words: [
    ["la tête", "the head", "J'ai mal à la tête."],
    ["le visage", "the face", "Elle a un joli visage."],
    ["l'oreille", "the ear", "J'ai mal à l'oreille."],
    ["le nez", "the nose", "J'ai le nez qui coule."],
    ["la bouche", "the mouth", "Ouvrez la bouche, s'il vous plaît."],
    ["la dent", "the tooth", "J'ai mal aux dents."],
    ["la gorge", "the throat", "J'ai mal à la gorge."],
    ["le cou", "the neck", "Il porte une écharpe autour du cou."],
    ["l'épaule", "the shoulder", "Je me suis fait mal à l'épaule."],
    ["le bras", "the arm", "Il s'est cassé le bras."],
    ["la main", "the hand", "Lave-toi les mains !"],
    ["le doigt", "the finger", "Je me suis coupé le doigt."],
    ["le dos", "the back", "J'ai mal au dos."],
    ["le ventre", "the stomach, the tummy", "J'ai mal au ventre."],
    ["la jambe", "the leg", "Elle s'est cassé la jambe au ski."],
    ["le genou", "the knee", "J'ai mal au genou quand je cours."],
    ["le pied", "the foot", "J'ai mal aux pieds."],
    ["le cœur", "the heart", "Le cœur bat vite après le sport."]
  ] },
  { id: "santeFR", icon: "heart", title: "Health and illness", title_fr: "La santé et la maladie", level: "A2", words: [
    ["malade", "ill, sick", "Je suis malade depuis lundi."],
    ["la fièvre", "a temperature, a fever", "Il a de la fièvre."],
    ["la toux", "the cough", "J'ai une toux qui ne passe pas."],
    ["tousser", "to cough", "Je tousse beaucoup la nuit."],
    ["le rhume", "the cold", "J'ai attrapé un rhume."],
    ["la grippe", "the flu", "Toute la famille a la grippe."],
    ["l'ordonnance", "the prescription", "Le médecin m'a fait une ordonnance."],
    ["le médicament", "the medicine", "Prenez ce médicament après le repas."],
    ["le comprimé", "the tablet, the pill", "Un comprimé trois fois par jour."],
    ["le sirop", "the syrup (for a cough)", "Un sirop contre la toux."],
    ["se sentir", "to feel", "Je ne me sens pas bien."],
    ["aller mieux", "to feel better", "Je vais mieux, merci."],
    ["la douleur", "the pain", "Où est la douleur ?"],
    ["se blesser", "to hurt yourself", "Il s'est blessé en jouant au foot."],
    ["se faire mal", "to hurt yourself", "Je me suis fait mal au dos."],
    ["les urgences", "accident and emergency, the ER", "Il est allé aux urgences."],
    ["en bonne santé", "healthy, in good health", "Mes grands-parents sont en bonne santé."],
    ["être en forme", "to be fit, to feel good", "Aujourd'hui, je suis en forme !"]
  ] });

  W.LESSONS.push(
  {
    id: 36, level: "A2", icon: "user-round",
    title: "J'ai mal à la tête: the body and avoir mal à", title_fr: "J'ai mal à la tête : le corps et avoir mal à",
    subtitle: "Say where it hurts, and why French says “the” where English says “my”.", subtitle_fr: "Dire où on a mal, et pourquoi le français dit « le » là où l'anglais dit « my ».",
    body: `
<h2>Avoir mal à</h2>
<p>To say that something hurts, French uses <s-fr>avoir mal à</s-fr> + the part of the body, with the article: à + le = au, à + les = aux.</p>
<table>
<tr><th>French</th><th>English</th></tr>
<tr><td><s-fr>J'ai mal à la tête.</s-fr></td><td>I have a headache. (my head hurts)</td></tr>
<tr><td><s-fr>J'ai mal au dos.</s-fr></td><td>My back hurts.</td></tr>
<tr><td><s-fr>J'ai mal à l'oreille.</s-fr></td><td>I have earache.</td></tr>
<tr><td><s-fr>J'ai mal aux dents.</s-fr></td><td>I have toothache.</td></tr>
<tr><td><s-fr>Où avez-vous mal ?</s-fr></td><td>Where does it hurt?</td></tr>
</table>
<h2>The article, not the possessive</h2>
<p>With parts of the body, French usually says "the", not "my": <s-fr>Je me suis cassé la jambe.</s-fr> (I broke my leg.) · <s-fr>Il s'est coupé le doigt.</s-fr> (He cut his finger.) · <s-fr>Lave-toi les mains !</s-fr> (Wash your hands!) The reflexive pronoun already says whose leg it is.</p>
<p>Notice: in <s-fr>je me suis cassé la jambe</s-fr>, the participle doesn't agree, because <s-fr>la jambe</s-fr> comes after the verb.</p>
<h2>Feeling well, or not</h2>
<p><s-fr>Je ne me sens pas bien.</s-fr> (I don't feel well.) · <s-fr>J'ai de la fièvre.</s-fr> · <s-fr>Je tousse.</s-fr> · <s-fr>J'ai le nez qui coule.</s-fr> (I have a runny nose.) · <s-fr>Je vais mieux.</s-fr> (I'm feeling better.)</p>
<div class="tip"><s-fr>avoir mal au cœur</s-fr> doesn't mean heart pain: it means to feel sick (nauseous). <s-fr>J'ai mal au cœur en voiture.</s-fr> (I get car sick.)</div>
`,
    examples: [
      ["J'ai mal à la tête depuis ce matin.", "I've had a headache since this morning."],
      ["Tu as mal au dos ?", "Does your back hurt?"],
      ["Elle a mal aux dents.", "She has toothache."],
      ["Où avez-vous mal ?", "Where does it hurt?"],
      ["Je me suis cassé le bras.", "I broke my arm."],
      ["Lave-toi les mains avant de manger.", "Wash your hands before eating."],
      ["Je ne me sens pas bien.", "I don't feel well."],
      ["J'ai mal au cœur en bateau.", "I feel sick on boats."]
    ],
    quiz: [
      { q: "“My back hurts” is:", o: ["Mon dos a mal.", "J'ai mal au dos.", "J'ai mal à le dos."], a: 1, ex: "avoir mal à + le = au dos." },
      { q: "“I have toothache” is:", o: ["J'ai mal aux dents.", "J'ai mal à les dents.", "J'ai mal de dents."], a: 0, ex: "à + les = aux." },
      { q: "“I broke my leg” is:", o: ["J'ai cassé ma jambe.", "Je me suis cassé la jambe.", "Je me suis cassée ma jambe."], a: 1, ex: "Reflexive verb + the article: je me suis cassé la jambe." },
      { q: "“J'ai mal au cœur” means:", o: ["I have heart pain.", "I feel sick.", "I'm sad."], a: 1, ex: "avoir mal au cœur = to feel nauseous." },
      { q: "“Wash your hands” is:", o: ["Lave tes mains !", "Lave-toi les mains !", "Both are possible, but the second is more natural."], a: 2, ex: "Lave-toi les mains is the natural French form." }
    ]
  },
  {
    id: 37, level: "A2", icon: "clock",
    title: "Depuis, il y a, pendant, dans: time expressions", title_fr: "Depuis, il y a, pendant, dans : les expressions de temps",
    subtitle: "The big trap for English speakers: depuis takes the present.", subtitle_fr: "Le grand piège pour les anglophones : depuis se construit avec le présent.",
    body: `
<h2>Depuis + the present</h2>
<p>For something that started in the past and is still going on, French uses <s-fr>depuis</s-fr> with the present tense, where English uses "have been" or "have had":</p>
<table>
<tr><th>French</th><th>English</th></tr>
<tr><td><s-fr>Je suis malade depuis trois jours.</s-fr></td><td>I've been ill for three days.</td></tr>
<tr><td><s-fr>J'habite ici depuis 2019.</s-fr></td><td>I've lived here since 2019.</td></tr>
<tr><td><s-fr>Tu apprends le français depuis quand ?</s-fr></td><td>How long have you been learning French?</td></tr>
</table>
<p><s-fr>depuis</s-fr> means both "for" and "since". Never use the passé composé here: <s-fr>J'ai été malade depuis trois jours</s-fr> is wrong.</p>
<h2>Il y a, pendant, dans</h2>
<table>
<tr><th>Expression</th><th>Meaning</th><th>Example</th></tr>
<tr><td><s-fr>il y a</s-fr> + past</td><td>ago</td><td><s-fr>Je suis tombé malade il y a trois jours.</s-fr></td></tr>
<tr><td><s-fr>pendant</s-fr></td><td>for, during (a finished period)</td><td><s-fr>J'ai dormi pendant dix heures.</s-fr></td></tr>
<tr><td><s-fr>dans</s-fr> + future</td><td>in (from now)</td><td><s-fr>Le médecin arrive dans dix minutes.</s-fr></td></tr>
<tr><td><s-fr>en</s-fr></td><td>in (how long it takes)</td><td><s-fr>J'ai fini en une heure.</s-fr></td></tr>
</table>
<h2>Compare</h2>
<p><s-fr>J'ai mal au dos depuis une semaine.</s-fr> (still now) · <s-fr>J'ai eu mal au dos pendant une semaine.</s-fr> (it's over) · <s-fr>J'ai commencé à avoir mal il y a une semaine.</s-fr> (when it started)</p>
<div class="tip">English speakers often say <s-fr>pour</s-fr> for "for three days". It's almost never right: <s-fr>pendant trois jours</s-fr> (finished) or <s-fr>depuis trois jours</s-fr> (still going on). <s-fr>pour</s-fr> is only used for a planned future period: <s-fr>Je pars pour une semaine.</s-fr></div>
`,
    examples: [
      ["Je tousse depuis trois jours.", "I've been coughing for three days."],
      ["Il habite à Paris depuis 2020.", "He's lived in Paris since 2020."],
      ["Tu as mal depuis quand ?", "Since when have you been in pain?"],
      ["Je suis allé chez le médecin il y a deux jours.", "I went to the doctor's two days ago."],
      ["J'ai dormi pendant douze heures !", "I slept for twelve hours!"],
      ["Le médecin arrive dans un quart d'heure.", "The doctor will be here in a quarter of an hour."],
      ["Je pars pour deux semaines.", "I'm going away for two weeks."]
    ],
    quiz: [
      { q: "“I've been ill for three days” is:", o: ["J'ai été malade depuis trois jours.", "Je suis malade depuis trois jours.", "Je suis malade pour trois jours."], a: 1, ex: "depuis + present for something still going on." },
      { q: "“I slept for ten hours” (finished) is:", o: ["J'ai dormi pendant dix heures.", "Je dors depuis dix heures.", "J'ai dormi pour dix heures."], a: 0, ex: "A finished period: pendant." },
      { q: "“Two days ago” is:", o: ["depuis deux jours", "il y a deux jours", "dans deux jours"], a: 1, ex: "il y a = ago." },
      { q: "“The bus comes in five minutes” is:", o: ["Le bus arrive dans cinq minutes.", "Le bus arrive en cinq minutes.", "Le bus arrive il y a cinq minutes."], a: 0, ex: "dans = in (from now)." },
      { q: "“How long have you lived here?” is:", o: ["Tu habites ici depuis quand ?", "Tu as habité ici pendant quand ?", "Tu habites ici pour combien ?"], a: 0, ex: "depuis quand + present." }
    ]
  },
  {
    id: 38, level: "A2", kind: "functional", icon: "heart",
    title: "Everyday French: at the doctor's and the pharmacy", title_fr: "Le français de tous les jours : chez le médecin et à la pharmacie",
    subtitle: "Describe your symptoms, understand advice, and know what to do in an emergency.", subtitle_fr: "Décrire tes symptômes, comprendre les conseils et savoir quoi faire en cas d'urgence.",
    body: `
<h2>At the doctor's</h2>
<p>The doctor asks: <s-fr>Qu'est-ce qui ne va pas ?</s-fr> (What's wrong?) · <s-fr>Où avez-vous mal ?</s-fr> · <s-fr>Depuis quand ?</s-fr> · <s-fr>Vous avez de la fièvre ?</s-fr> · <s-fr>Vous êtes allergique à quelque chose ?</s-fr></p>
<p>You answer: <s-fr>J'ai mal à la gorge depuis trois jours.</s-fr> · <s-fr>Je tousse la nuit.</s-fr> · <s-fr>J'ai de la fièvre : trente-huit cinq.</s-fr> (38.5°C)</p>
<h2>Understanding advice</h2>
<p>Doctors give advice with the imperative, <s-fr>il faut</s-fr> or <s-fr>devoir</s-fr>: <s-fr>Reposez-vous.</s-fr> · <s-fr>Buvez beaucoup d'eau.</s-fr> · <s-fr>Il faut prendre ce médicament trois fois par jour.</s-fr> · <s-fr>Vous devez rester au lit deux jours.</s-fr> · <s-fr>Je vous fais une ordonnance.</s-fr> (I'll write you a prescription.)</p>
<p><s-fr>il faut</s-fr> + infinitive means "you have to, it's necessary": it never changes. <s-fr>Il ne faut pas</s-fr> means "you mustn't".</p>
<h2>At the pharmacy</h2>
<p>French pharmacists give a lot of advice: <s-fr>Vous avez quelque chose contre la toux ?</s-fr> (Have you got something for a cough?) · <s-fr>C'est sans ordonnance ?</s-fr> (Is it available without a prescription?) · <s-fr>Combien de fois par jour ?</s-fr></p>
<div class="tip">Emergencies in France: <s-fr>le 15</s-fr> (medical emergency, the SAMU), <s-fr>le 18</s-fr> (the fire brigade), and <s-fr>le 112</s-fr> (the European emergency number, from any phone). For something less urgent, go to a pharmacy: look for the green cross.</div>
`,
    examples: [
      ["Qu'est-ce qui ne va pas ?", "What's wrong?"],
      ["J'ai mal à la gorge depuis trois jours.", "I've had a sore throat for three days."],
      ["Vous êtes allergique à quelque chose ?", "Are you allergic to anything?"],
      ["Reposez-vous et buvez beaucoup d'eau.", "Rest and drink plenty of water."],
      ["Il faut prendre un comprimé trois fois par jour.", "You have to take one tablet three times a day."],
      ["Je vous fais une ordonnance.", "I'll write you a prescription."],
      ["Vous avez quelque chose contre la toux ?", "Have you got something for a cough?"]
    ],
    quiz: [
      { q: "“What's wrong?” (the doctor) is:", o: ["Qu'est-ce qui ne va pas ?", "Qu'est-ce que tu as faux ?", "C'est quoi le mal ?"], a: 0, ex: "Qu'est-ce qui ne va pas ?" },
      { q: "“Il faut prendre ce médicament” means:", o: ["You have to take this medicine.", "You can take this medicine.", "Don't take this medicine."], a: 0, ex: "il faut + infinitive = you have to." },
      { q: "“Il ne faut pas boire d'alcool” means:", o: ["You don't have to drink alcohol.", "You mustn't drink alcohol.", "There's no alcohol."], a: 1, ex: "il ne faut pas = you mustn't." },
      { q: "“Something for a cough” is:", o: ["quelque chose pour la toux", "quelque chose contre la toux", "Both are used, but contre is the most common."], a: 2, ex: "Both are heard; contre la toux is the usual phrase." },
      { q: "In France, the medical emergency number is:", o: ["le 15", "le 999", "le 911"], a: 0, ex: "le 15 (SAMU), or le 112 from any phone." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    36: {
      gap: [["J'ai mal ___ dos. (à + le)", "au"], ["Elle a mal ___ dents. (à + les)", "aux"], ["Je me suis cassé ___ bras. (the)", "le"], ["Je ne me ___ pas bien. (se sentir)", "sens"]],
      fix: [["Mon tête a mal.", "J'ai mal à la tête.", "French says avoir mal à + the body part."], ["Je me suis cassé mon bras.", "Je me suis cassé le bras.", "With a reflexive verb, the article, not the possessive."]],
      task: ["Describe how you feel when you have a cold: where it hurts and what you do.", "Décris comment tu te sens quand tu as un rhume : où tu as mal et ce que tu fais.", "Quand j'ai un rhume, j'ai mal à la tête et à la gorge, et j'ai le nez qui coule. Je tousse beaucoup la nuit. Je bois du thé avec du miel et je me couche tôt. Après trois jours, je vais mieux."]
    },
    37: {
      gap: [["J'habite ici ___ cinq ans. (for, still now)", "depuis"], ["Je suis arrivé il ___ a deux jours. (ago)", "y"], ["J'ai travaillé ___ trois heures. (for, finished)", "pendant"], ["Le train part ___ dix minutes. (in)", "dans"]],
      fix: [["J'ai été malade depuis lundi.", "Je suis malade depuis lundi.", "depuis + present for something still going on."], ["J'ai dormi pour dix heures.", "J'ai dormi pendant dix heures.|J'ai dormi dix heures.", "A finished period: pendant (or nothing)."]],
      task: ["Answer: How long have you been learning French? When did you start? How long do you study each day? When is your next lesson?", "Réponds : Depuis quand tu apprends le français ? Quand as-tu commencé ? Pendant combien de temps tu étudies chaque jour ? Ton prochain cours, c'est quand ?", "J'apprends le français depuis six mois. J'ai commencé il y a six mois, en mars. J'étudie pendant trente minutes chaque jour. Mon prochain cours est dans deux jours."]
    },
    38: {
      gap: [["Qu'est-ce qui ne ___ pas ? (to go)", "va"], ["Il ___ prendre ce médicament. (it's necessary)", "faut"], ["Je vous fais une ___. (prescription)", "ordonnance"], ["Vous avez quelque chose ___ la toux ? (for, against)", "contre"]],
      fix: [["Il faut que prendre un comprimé.", "Il faut prendre un comprimé.", "il faut + infinitive, without que."], ["J'ai fièvre depuis hier.", "J'ai de la fièvre depuis hier.", "avoir de la fièvre: with de la."]],
      task: ["Write what you say to a doctor: your symptoms, since when, and one question about the medicine.", "Écris ce que tu dis à un médecin : tes symptômes, depuis quand, et une question sur le médicament.", "Bonjour, docteur. J'ai mal à la gorge et je tousse depuis quatre jours. J'ai aussi un peu de fièvre depuis hier soir. Je dois prendre ce médicament combien de fois par jour ?"]
    }
  });

  W.ROLEPLAYS.push(
  { id: "medecin", lesson: 38, level: "A2", icon: "heart", partner: "Dr Lambert", role: "a GP",
    title: "At the doctor's", title_fr: "Chez le médecin",
    setting: "You've had a sore throat and a cough for several days. You see Dr Lambert, a GP.", setting_fr: "Tu as mal à la gorge et tu tousses depuis plusieurs jours. Tu consultes le docteur Lambert, un médecin généraliste.",
    turns: [
      { p: "Bonjour ! Asseyez-vous. Qu'est-ce qui ne va pas ?", fr: "Hello! Take a seat. What's wrong?" },
      { y: ["J'ai mal à la gorge et je tousse depuis cinq jours.", "J'ai mal à la gorge et j'ai toussé depuis cinq jours.", "Ma gorge a mal et je tousse depuis cinq jours."], fr: "I've had a sore throat and a cough for five days.", why: "avoir mal à; depuis + present (je tousse)." },
      { p: "Je vois. Vous avez de la fièvre ?", fr: "I see. Do you have a temperature?" },
      { y: ["Oui, un peu : trente-huit hier soir.", "Oui, un peu : trente-huit hier soir, j'ai fièvre.", "Oui, j'ai de la fièvre pour hier soir."], fr: "Yes, a little: 38 last night.", why: "Give the temperature simply; avoir de la fièvre, not avoir fièvre." },
      { p: "Vous êtes allergique à quelque chose ?", fr: "Are you allergic to anything?" },
      { y: ["Non, à rien, je crois.", "Non, je ne suis pas allergique à quelque chose.", "Non, je suis allergique à rien."], fr: "No, to nothing, I think.", why: "Short answer: à rien. In a sentence: je ne suis allergique à rien." },
      { p: "Bon. C'est une angine. Je vous fais une ordonnance. Il faut prendre un comprimé trois fois par jour, pendant six jours.", fr: "Right. It's a throat infection. I'll write you a prescription. You have to take one tablet three times a day, for six days." },
      { y: ["Trois fois par jour pendant six jours. Je dois les prendre pendant les repas ?", "Trois fois par jour depuis six jours. Je dois les prendre pendant les repas ?", "Trois fois par jour pendant six jours. Je dois prendre les pendant les repas ?"], fr: "Three times a day for six days. Should I take them with meals?", why: "pendant six jours (a set period). The pronoun goes before the infinitive: les prendre." },
      { p: "Oui, c'est mieux. Et reposez-vous ! Si ça ne va pas mieux dans trois jours, revenez me voir.", fr: "Yes, that's better. And rest! If you're not feeling better in three days, come back and see me." },
      { y: ["D'accord, merci beaucoup, docteur. Au revoir !", "D'accord, merci beaucoup, docteur. Bonne revoir !", "D'accord, merci beaucoup, monsieur le docteur. Au revoir !"], fr: "OK, thank you very much, doctor. Goodbye!", why: "Merci, docteur: that's how you address a doctor." }
    ] }
  );

  W.READINGS.push({
    id: "rhume", level: "A2", icon: "heart", title: "Un rhume ? Les bons réflexes", genre: "Advice article",
    intro: "A short article with simple advice for a cold, and when to see a doctor. Il faut, the imperative, depuis and the body.",
    intro_fr: "Un court article avec des conseils simples contre le rhume, et quand consulter un médecin. Il faut, l'impératif, depuis et le corps.",
    paragraphs: [
      { en: "Vous avez le nez qui coule, mal à la gorge et un peu mal à la tête ? C'est sans doute un rhume. C'est désagréable, mais ce n'est pas grave : en général, un rhume passe en une semaine.", fr: "Do you have a runny nose, a sore throat and a slight headache? It's probably a cold. It's unpleasant, but it isn't serious: a cold usually goes away in a week." },
      { en: "D'abord, reposez-vous. Si vous êtes fatigué, ne vous forcez pas à aller au sport. Il faut aussi boire beaucoup : de l'eau, de la tisane, ou du thé avec du miel et du citron.", fr: "First, rest. If you're tired, don't force yourself to go to the gym. You should also drink a lot: water, herbal tea, or tea with honey and lemon." },
      { en: "Pensez aussi aux autres ! Lavez-vous souvent les mains, et toussez dans votre coude, pas dans votre main. Au travail, ouvrez la fenêtre de temps en temps.", fr: "Think of others too! Wash your hands often, and cough into your elbow, not into your hand. At work, open the window from time to time." },
      { en: "Mais attention : si vous avez beaucoup de fièvre depuis plus de trois jours, ou si vous avez du mal à respirer, il ne faut pas attendre. Appelez votre médecin. Et la nuit ou le week-end, demandez conseil à votre pharmacien.", fr: "But be careful: if you've had a high temperature for more than three days, or if you find it hard to breathe, don't wait. Call your doctor. And at night or at the weekend, ask your pharmacist for advice." }
    ],
    glossary: { "coule": "runs", "désagréable": "unpleasant", "grave": "serious", "passe": "goes away", "reposez": "rest", "forcez": "force", "tisane": "herbal tea", "miel": "honey", "citron": "lemon", "coude": "elbow", "fenêtre": "window", "respirer": "to breathe", "attendre": "to wait", "pharmacien": "pharmacist" },
    questions: [
      { q: "Combien de temps dure un rhume, en général ?", o: ["Un jour", "Une semaine", "Un mois"], a: 1 },
      { q: "Qu'est-ce qu'il faut boire ?", o: ["Du café et de l'alcool", "De l'eau, de la tisane, du thé avec du miel", "Rien"], a: 1 },
      { q: "Comment il faut tousser ?", o: ["Dans la main", "Dans le coude", "Dans un mouchoir seulement"], a: 1 },
      { q: "Quand il faut appeler le médecin ?", o: ["Si on a le nez qui coule", "Si on a beaucoup de fièvre depuis plus de trois jours", "Le premier jour"], a: 1 },
      { q: "Qui peut aider la nuit ou le week-end ?", o: ["Le pharmacien", "Le professeur", "Le voisin"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-a2-5", unit: "a2-5", level: "A2", icon: "heart",
    title: "À la pharmacie", title_fr: "À la pharmacie",
    context: "Mehdi has a cough. He asks Sylvie, the pharmacist, for advice.", context_fr: "Mehdi tousse. Il demande conseil à Sylvie, la pharmacienne.",
    words: [["une toux sèche", "a dry cough"], ["une pastille", "a lozenge"], ["somnolent", "drowsy"], ["sans ordonnance", "over the counter"], ["mieux", "better"]],
    lines: [["Sylvie", "Bonjour, monsieur. Je vous écoute.", "fr-FR"], ["Mehdi", "Bonjour. Je tousse beaucoup, surtout la nuit. Vous avez quelque chose contre la toux ?", "fr-FR"], ["Sylvie", "Vous toussez depuis quand ?", "fr-FR"], ["Mehdi", "Depuis trois jours. Et j'ai un peu mal à la gorge.", "fr-FR"], ["Sylvie", "C'est une toux sèche ou grasse ?", "fr-FR"], ["Mehdi", "Plutôt sèche, je crois. Ça me gratte.", "fr-FR"], ["Sylvie", "Vous avez de la fièvre ?", "fr-FR"], ["Mehdi", "Non, pas de fièvre.", "fr-FR"], ["Sylvie", "Alors je vous conseille ce sirop, sans ordonnance. Une cuillère trois fois par jour. Attention : il peut rendre un peu somnolent, alors ne conduisez pas après.", "fr-FR"], ["Mehdi", "D'accord. Et pour la gorge ?", "fr-FR"], ["Sylvie", "Prenez ces pastilles au miel. Et buvez beaucoup d'eau. Si ça ne va pas mieux dans cinq jours, allez voir votre médecin.", "fr-FR"], ["Mehdi", "Merci beaucoup, madame.", "fr-FR"]],
    gist: ["Pourquoi Mehdi va à la pharmacie ?", ["Il tousse.", "Il s'est cassé le bras.", "Il a une ordonnance."]],
    detail: [["Depuis quand Mehdi tousse ?", ["Depuis trois jours", "Depuis cinq jours", "Depuis une semaine"]], ["Combien de fois par jour il doit prendre le sirop ?", ["Trois fois", "Une fois", "Cinq fois"]], ["Pourquoi il ne doit pas conduire ?", ["Le sirop peut rendre somnolent.", "Il a de la fièvre.", "Il n'a pas de voiture."]], ["Quand doit-il aller voir le médecin ?", ["Si ça ne va pas mieux dans cinq jours", "Tout de suite", "Demain"]]],
    decode: ["Vous toussez depuis quand ?", "il peut rendre un peu somnolent"],
    tip: "Pharmacists end with a warning (attention…) and a condition (si ça ne va pas mieux…). Those two parts are the most important: listen for attention and si.", tip_fr: "Les pharmaciens finissent par une mise en garde (attention…) et une condition (si ça ne va pas mieux…). Ce sont les deux parties les plus importantes : guette attention et si."
  }]);

  W.PROMPTS.push({ id: "fr-a2-5", level: "A2", q: "Qu'est-ce que tu fais pour rester en forme ? Et qu'est-ce que tu fais quand tu es malade ?", fr: "What do you do to stay fit? And what do you do when you're ill?", time: 120,
    phrases: ["Pour rester en forme, je…", "Je fais du sport depuis…", "Quand j'ai un rhume, …", "Il faut…", "Je vais chez le médecin quand…"],
    model: "Pour rester en forme, je marche au moins trente minutes par jour et je fais du yoga depuis deux ans. Je mange beaucoup de légumes et j'essaie de dormir huit heures. Quand j'ai un rhume, je bois du thé avec du miel et je me repose. Je vais chez le médecin seulement quand j'ai de la fièvre depuis plusieurs jours. Il faut aussi écouter son corps !" });

  W.WRITING_GUIDE["a2-5"] = { genre: "A message to say you're ill", genre_fr: "Un message pour prévenir qu'on est malade",
    plan: [["Say who you're writing to, politely.", "Adresse-toi poliment à la personne."], ["Say you're ill, and since when.", "Dis que tu es malade, et depuis quand."], ["Your symptoms and the doctor's advice.", "Tes symptômes et les conseils du médecin."], ["What you can't do, and what you suggest.", "Ce que tu ne peux pas faire, et ce que tu proposes."], ["Thank the person and say goodbye.", "Remercie la personne et dis au revoir."]],
    marks: [["depuis hier soir", "depuis + present", "depuis + présent"], ["j'ai mal à la gorge", "avoir mal à", "avoir mal à"], ["Le médecin m'a dit", "the passé composé", "le passé composé"], ["je dois rester", "devoir + infinitive", "devoir + infinitif"], ["pendant trois jours", "pendant for a set period", "pendant pour une durée fixée"], ["Je vous remercie", "a polite thank-you", "un remerciement poli"]] };

  W.COURSE.push({ id: "a2-5", level: "A2", icon: "heart", title: "Health", title_fr: "La santé",
    intro: "In this unit, you'll talk about your body and your health: avoir mal à, the time expressions that trap English speakers (depuis, il y a, pendant), and what to say at the doctor's and the pharmacy.",
    intro_fr: "Dans cette unité, tu vas parler de ton corps et de ta santé : avoir mal à, les expressions de temps qui piègent les anglophones (depuis, il y a, pendant), et ce qu'il faut dire chez le médecin et à la pharmacie.",
    can: ["Name the parts of the body and say where it hurts", "Use depuis, il y a, pendant and dans correctly", "Describe your symptoms to a doctor or a pharmacist", "Understand advice with il faut and the imperative"],
    can_fr: ["Nommer les parties du corps et dire où tu as mal", "Utiliser correctement depuis, il y a, pendant et dans", "Décrire tes symptômes à un médecin ou à un pharmacien", "Comprendre des conseils avec il faut et l'impératif"],
    lessons: [36, 37, 38], vocab: ["corpsFR", "santeFR"], reading: "rhume", prompt: "fr-a2-5",
    writing: { task: "You're ill and you can't go to your French class (or to work) this week. Write an email (70-90 words) to your teacher or your manager: your symptoms, since when, the doctor's advice, and what you suggest.", task_fr: "Tu es malade et tu ne peux pas aller à ton cours de français (ou au travail) cette semaine. Écris un e-mail (70 à 90 mots) à ton professeur ou à ton responsable : tes symptômes, depuis quand, les conseils du médecin, et ce que tu proposes.", words: "70-90",
      tips: ["Bonjour Madame / Monsieur…,", "Je suis malade depuis…", "J'ai mal à…", "Le médecin m'a dit de…", "Je vous remercie,"],
      checklist: ["I used depuis with the present", "I used avoir mal à", "I reported the doctor's advice (le médecin m'a dit de…)", "I suggested a solution", "I stayed between 70 and 90 words"],
      model: "Bonjour Madame Girard,\n\nJe suis désolé, mais je ne peux pas venir au cours de jeudi. Je suis malade depuis hier soir : j'ai mal à la gorge, je tousse beaucoup et j'ai de la fièvre. Le médecin m'a dit que c'était une grippe et je dois rester à la maison pendant trois jours. Est-ce que vous pouvez m'envoyer les exercices par e-mail ? Je vais les faire dès que je vais mieux.\n\nJe vous remercie,\nThomas" } });
})();
