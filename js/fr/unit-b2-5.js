/* Cours de français, unité B2-5 « Health and wellbeing / Santé et bien-être » : le subjonctif après les
   conjonctions (avant que, jusqu'à ce que, sans que, à moins que, pourvu que, de peur que) et le ne explétif,
   le subjonctif passé, recommander et convaincre. Personnages fictifs, prénoms français. Faits vérifiables
   seulement : en France, les adultes déclarent un médecin traitant (parcours de soins coordonnés), ce qui permet
   un meilleur remboursement ; conseils de santé généraux (horaires réguliers, lumière des écrans le soir,
   caféine l'après-midi, chambre sombre et fraîche, bouger régulièrement au bureau). */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "bienetreFR", icon: "heart-pulse", title: "Wellbeing", title_fr: "Le bien-être", level: "B2", words: [
    ["le bien-être", "wellbeing", "Le bien-être des salariés est une priorité."],
    ["le sommeil", "sleep", "Le manque de sommeil fatigue le cerveau."],
    ["l'alimentation", "diet, food", "Une alimentation variée est essentielle."],
    ["équilibré / équilibrée", "balanced (m) / balanced (f)", "Elle mange de façon équilibrée."],
    ["se détendre", "to relax", "Je me détends en jardinant."],
    ["la détente", "relaxation", "Le dimanche, c'est le jour de la détente."],
    ["la méditation", "meditation", "Dix minutes de méditation le matin m'aident beaucoup."],
    ["l'activité physique", "physical activity, exercise", "Une activité physique régulière est recommandée."],
    ["sédentaire", "sedentary, inactive", "Un travail de bureau est souvent sédentaire."],
    ["le surmenage", "overwork", "Il est arrêté pour surmenage."],
    ["la santé mentale", "mental health", "On parle enfin de santé mentale au travail."],
    ["l'anxiété", "anxiety", "Les examens provoquent de l'anxiété."],
    ["récupérer", "to recover, to get one's strength back", "Il faut du temps pour récupérer après un marathon."],
    ["le mode de vie", "lifestyle", "Elle a complètement changé de mode de vie."],
    ["le dépistage", "screening", "Le dépistage précoce sauve des vies."],
    ["le médecin traitant", "the regular GP", "Parlez-en à votre médecin traitant."],
    ["l'hygiène de vie", "healthy habits, lifestyle", "Une bonne hygiène de vie aide à bien dormir."],
    ["se ménager", "to take it easy, not to overdo it", "Après ton opération, ménage-toi !"]
  ] },
  { id: "soinsFR", icon: "stethoscope", title: "Medical care", title_fr: "Les soins", level: "B2", words: [
    ["le symptôme", "the symptom", "Quels sont vos symptômes ?"],
    ["le diagnostic", "the diagnosis", "Le diagnostic a été rapide."],
    ["le traitement", "the treatment", "Le traitement dure trois semaines."],
    ["l'effet secondaire", "the side effect", "Ce médicament a peu d'effets secondaires."],
    ["l'allergie", "the allergy", "J'ai une allergie aux arachides."],
    ["la blessure", "the injury, the wound", "Sa blessure au genou guérit lentement."],
    ["guérir", "to heal, to cure, to get better", "Elle est complètement guérie."],
    ["soigner", "to treat, to take care of", "Les infirmiers soignent les patients."],
    ["la guérison", "recovery, cure", "Sa guérison a été rapide."],
    ["contagieux / contagieuse", "contagious (m) / contagious (f)", "La grippe est très contagieuse."],
    ["la rééducation", "rehabilitation, physiotherapy", "Après l'accident, il a fait six mois de rééducation."],
    ["le kinésithérapeute / la kinésithérapeute", "the physiotherapist (m) / (f)", "Mon kinésithérapeute m'a donné des exercices."],
    ["opérer", "to operate on", "Elle a été opérée du genou."],
    ["l'anesthésie", "the anaesthetic", "L'opération se fait sous anesthésie locale."],
    ["la piqûre", "the injection; the sting", "Je n'aime pas les piqûres."],
    ["la prise de sang", "the blood test", "J'ai une prise de sang demain matin."],
    ["le cabinet médical", "the doctor's surgery", "Le cabinet médical ouvre à huit heures."],
    ["la radiographie", "the X-ray", "La radiographie ne montre rien de cassé."]
  ] });

  W.LESSONS.push(
  {
    id: 87, level: "B2", icon: "link",
    title: "À moins que, pourvu que: conjunctions with the subjunctive", title_fr: "À moins que, pourvu que : les conjonctions suivies du subjonctif",
    subtitle: "Before, until, without, unless, provided that, for fear that: and the little ne that isn't negative.", subtitle_fr: "Avant que, jusqu'à ce que, sans que, à moins que, pourvu que, de peur que : et le petit ne qui n'est pas une négation.",
    body: `
<h2>Conjunctions + subjunctive</h2>
<table>
<tr><th>French</th><th>English</th><th>Example</th></tr>
<tr><td><s-fr>avant que</s-fr></td><td>before</td><td><s-fr>Rentre avant qu'il fasse nuit.</s-fr></td></tr>
<tr><td><s-fr>jusqu'à ce que</s-fr></td><td>until</td><td><s-fr>Reste au lit jusqu'à ce que la fièvre baisse.</s-fr></td></tr>
<tr><td><s-fr>en attendant que</s-fr></td><td>while waiting for</td><td><s-fr>Repose-toi en attendant que le médecin arrive.</s-fr></td></tr>
<tr><td><s-fr>sans que</s-fr></td><td>without</td><td><s-fr>Il est parti sans que personne le sache.</s-fr></td></tr>
<tr><td><s-fr>à moins que</s-fr></td><td>unless</td><td><s-fr>Je viendrai, à moins que tu sois malade.</s-fr></td></tr>
<tr><td><s-fr>pourvu que</s-fr>, <s-fr>à condition que</s-fr></td><td>provided that</td><td><s-fr>Tu peux sortir, pourvu que tu rentres avant minuit.</s-fr></td></tr>
<tr><td><s-fr>de peur que</s-fr>, <s-fr>de crainte que</s-fr></td><td>for fear that</td><td><s-fr>Il a fermé la fenêtre de peur que le bébé prenne froid.</s-fr></td></tr>
</table>
<h2>Same subject: the infinitive</h2>
<p>When the subject doesn't change, use the preposition: <s-fr>avant de</s-fr>, <s-fr>sans</s-fr>, <s-fr>à moins de</s-fr>, <s-fr>à condition de</s-fr>, <s-fr>de peur de</s-fr>: <s-fr>Il est parti sans dire au revoir</s-fr> but <s-fr>Il est parti sans qu'elle le sache</s-fr>.</p>
<h2>The ne that isn't negative</h2>
<p>In careful French, <s-fr>avant que</s-fr>, <s-fr>à moins que</s-fr> and <s-fr>de peur que</s-fr> are often followed by a <s-fr>ne</s-fr> with no negative meaning (the <i>ne explétif</i>): <s-fr>Rentre avant qu'il ne pleuve.</s-fr> It's optional: you need to recognise it, not to use it.</p>
<div class="tip"><s-fr>Pourvu que</s-fr> on its own means "let's hope that": <s-fr>Pourvu qu'il fasse beau demain !</s-fr> (Let's hope the weather's nice tomorrow!)</div>
`,
    examples: [
      ["Prends ce sirop jusqu'à ce que la toux passe.", "Take this syrup until the cough goes away."],
      ["Rentre avant qu'il ne fasse nuit.", "Come home before it gets dark."],
      ["Il est sorti de l'hôpital sans que sa famille soit prévenue.", "He left hospital without his family being told."],
      ["Je viendrai à la randonnée, à moins qu'il pleuve.", "I'll come on the hike, unless it rains."],
      ["Tu peux reprendre le sport, à condition que tu ailles doucement.", "You can start sport again, provided you take it easy."],
      ["Elle se lave souvent les mains de peur que les enfants tombent malades.", "She washes her hands often for fear the children get ill."],
      ["Repose-toi en attendant que le médecin arrive.", "Rest while you wait for the doctor to arrive."],
      ["Pourvu que les résultats soient bons !", "Let's hope the results are good!"]
    ],
    quiz: [
      { q: "“Stay here until he comes back” is:", o: ["Reste ici jusqu'à ce qu'il revient.", "Reste ici jusqu'à ce qu'il revienne.", "Reste ici jusqu'à il revienne."], a: 1, ex: "jusqu'à ce que + subjunctive." },
      { q: "“Unless it's too late” is:", o: ["à moins qu'il est trop tard", "à moins qu'il soit trop tard", "sauf qu'il soit trop tard"], a: 1, ex: "à moins que + subjunctive." },
      { q: "“He left without saying goodbye” (same subject):", o: ["Il est parti sans dire au revoir.", "Il est parti sans qu'il dise au revoir.", "Il est parti sans disant au revoir."], a: 0, ex: "Same subject: sans + infinitive." },
      { q: "In “Rentre avant qu'il ne pleuve”, ne means:", o: ["not", "nothing: it's the ne explétif", "never"], a: 1, ex: "A formal ne with no negative meaning." },
      { q: "“Pourvu qu'il fasse beau !” means:", o: ["It will be nice.", "Let's hope it's nice!", "It was nice."], a: 1, ex: "pourvu que alone = let's hope that." }
    ]
  },
  {
    id: 88, level: "B2", icon: "rewind",
    title: "Qu'il ait compris: the past subjunctive", title_fr: "Qu'il ait compris : le subjonctif passé",
    subtitle: "When the action after que happened before the main verb.", subtitle_fr: "Quand l'action après que a eu lieu avant le verbe principal.",
    body: `
<h2>Forming it</h2>
<p>The present subjunctive of <s-fr>avoir</s-fr> or <s-fr>être</s-fr> + the past participle: <s-fr>que j'aie fini</s-fr>, <s-fr>que tu aies compris</s-fr>, <s-fr>qu'elle soit partie</s-fr>, <s-fr>que nous nous soyons trompés</s-fr>.</p>
<h2>When to use it</h2>
<p>After a word that needs the subjunctive, when the action is earlier than the main verb:</p>
<table>
<tr><th>Present subjunctive (same time or later)</th><th>Past subjunctive (earlier)</th></tr>
<tr><td><s-fr>Ça me fait plaisir qu'il vienne.</s-fr> (he's coming)</td><td><s-fr>Ça me fait plaisir qu'il soit venu.</s-fr> (he came)</td></tr>
<tr><td><s-fr>Je doute qu'elle comprenne.</s-fr></td><td><s-fr>Je doute qu'elle ait compris.</s-fr></td></tr>
<tr><td><s-fr>Il faut que tu finisses avant midi.</s-fr></td><td><s-fr>Il faut que tu aies fini avant midi.</s-fr> (finished by then)</td></tr>
</table>
<h2>Common uses</h2>
<p>Feelings about something that happened: <s-fr>C'est dommage que vous n'ayez pas vu le spectacle.</s-fr> · Doubt about the past: <s-fr>Je ne crois pas qu'ils soient déjà arrivés.</s-fr> · Concession: <s-fr>Bien qu'elle ait beaucoup travaillé, elle a échoué.</s-fr> · After <s-fr>avant que</s-fr> or <s-fr>jusqu'à ce que</s-fr> with a deadline: <s-fr>Attends jusqu'à ce que le médecin soit passé.</s-fr></p>
<div class="tip">The agreements are those of the passé composé: <s-fr>qu'elle soit partie</s-fr>, <s-fr>la lettre qu'il ait écrite</s-fr>… And remember <s-fr>aie</s-fr>, <s-fr>aies</s-fr>, <s-fr>ait</s-fr> sound the same as <s-fr>ai</s-fr> or <s-fr>est</s-fr> in fast speech: in writing, the spelling shows the mood.</div>
`,
    examples: [
      ["Ça me fait plaisir que tu aies pu venir.", "I'm so glad you were able to come."],
      ["C'est dommage que vous n'ayez pas vu le spectacle.", "It's a pity you didn't see the show."],
      ["Je doute qu'il ait bien compris la consigne.", "I doubt he understood the instruction properly."],
      ["Bien qu'elle ait beaucoup travaillé, elle a raté l'examen.", "Although she worked hard, she failed the exam."],
      ["Je ne crois pas qu'ils soient déjà arrivés.", "I don't think they've arrived yet."],
      ["Il faut que tu aies terminé avant vendredi.", "You need to have finished by Friday."],
      ["Il est possible que le médecin se soit trompé.", "The doctor may have made a mistake."],
      ["Attends jusqu'à ce que la fièvre soit passée.", "Wait until the fever has gone down."]
    ],
    quiz: [
      { q: "“I'm glad you came” (it's over):", o: ["Ça me fait plaisir que tu viennes.", "Ça me fait plaisir que tu sois venu.", "Ça me fait plaisir que tu es venu."], a: 1, ex: "Earlier action: past subjunctive." },
      { q: "“I doubt she understood”:", o: ["Je doute qu'elle a compris.", "Je doute qu'elle ait compris.", "Je doute qu'elle comprenne hier."], a: 1, ex: "douter que + past subjunctive for the past." },
      { q: "The past subjunctive of partir with elle is:", o: ["qu'elle ait parti", "qu'elle soit partie", "qu'elle est partie"], a: 1, ex: "partir takes être: soit partie." },
      { q: "“Although he slept well, he's tired”:", o: ["Bien qu'il ait bien dormi, il est fatigué.", "Bien qu'il a bien dormi, il est fatigué.", "Bien qu'il dorme bien hier, il est fatigué."], a: 0, ex: "bien que + past subjunctive for an earlier action." },
      { q: "“It's possible they made a mistake”:", o: ["Il est possible qu'ils se soient trompés.", "Il est possible qu'ils se sont trompés.", "Il est possible qu'ils aient trompés."], a: 0, ex: "se tromper takes être: se soient trompés." }
    ]
  },
  {
    id: 89, level: "B2", kind: "functional", icon: "heart-pulse",
    title: "Everyday French: recommending and persuading", title_fr: "Le français de tous les jours : recommander et convaincre",
    subtitle: "Formal recommendations, friendly persuasion, and how to answer when you're not convinced.", subtitle_fr: "Recommandations formelles, persuasion amicale, et comment répondre sans être d'accord.",
    body: `
<h2>Formal recommendations</h2>
<p><s-fr>Il est recommandé de</s-fr> + infinitive · <s-fr>Il est conseillé de…</s-fr> · <s-fr>Il est essentiel que</s-fr> + subjunctive · <s-fr>Il vaudrait mieux que</s-fr> + subjunctive · <s-fr>Évitez de…</s-fr> · <s-fr>Pensez à…</s-fr></p>
<h2>Friendly persuasion</h2>
<p><s-fr>Je t'encourage à…</s-fr> · <s-fr>N'hésite pas à…</s-fr> · <s-fr>Et si tu essayais… ?</s-fr> · <s-fr>Ça vaut la peine d'essayer.</s-fr> · <s-fr>Tu verras, ça change tout.</s-fr> · <s-fr>Fais-moi confiance.</s-fr></p>
<h2>Answering</h2>
<p><s-fr>Tu as sans doute raison, mais…</s-fr> · <s-fr>Je vais y réfléchir.</s-fr> · <s-fr>Je doute que ça marche pour moi.</s-fr> · <s-fr>D'accord, je vais essayer, à condition que tu viennes avec moi !</s-fr></p>
<h2>Seeing a doctor in France</h2>
<p>Adults usually declare <s-fr>un médecin traitant</s-fr>, a regular GP. Going through this doctor first is part of the coordinated care pathway, and consultations are then better reimbursed.</p>
<div class="tip">In a recommendation, the subjunctive appears after impersonal phrases with a person: <s-fr>il est essentiel que vous dormiez</s-fr>. Without a person, use the infinitive: <s-fr>il est essentiel de dormir</s-fr>.</div>
`,
    examples: [
      ["Il est recommandé de boire au moins un litre et demi d'eau par jour.", "It's recommended to drink at least a litre and a half of water a day."],
      ["Il est essentiel que vous preniez ce traitement jusqu'au bout.", "It's essential that you take this treatment to the end."],
      ["Évitez les écrans une heure avant de dormir.", "Avoid screens for an hour before going to sleep."],
      ["Il vaudrait mieux que tu consultes ton médecin traitant.", "It would be better if you saw your GP."],
      ["Je t'encourage à essayer la méditation.", "I encourage you to try meditation."],
      ["N'hésite pas à m'appeler si ça ne va pas.", "Don't hesitate to call me if you're not OK."],
      ["Tu as sans doute raison, je vais y réfléchir.", "You're probably right, I'll think about it."]
    ],
    quiz: [
      { q: "“It's essential that you rest” is:", o: ["Il est essentiel que vous vous reposez.", "Il est essentiel que vous vous reposiez.", "Il est essentiel de vous reposez."], a: 1, ex: "il est essentiel que + subjunctive." },
      { q: "“It's recommended to walk every day”:", o: ["Il est recommandé de marcher tous les jours.", "Il est recommandé que marcher tous les jours.", "Il est recommandé marcher tous les jours."], a: 0, ex: "Without a person: de + infinitive." },
      { q: "“Don't hesitate to ask” (tu):", o: ["N'hésite pas à demander.", "N'hésite pas de demander.", "Hésite pas demander."], a: 0, ex: "hésiter à + infinitive." },
      { q: "A polite way to say you're not convinced:", o: ["N'importe quoi !", "Je vais y réfléchir.", "C'est nul."], a: 1, ex: "Je vais y réfléchir." },
      { q: "In France, a médecin traitant is:", o: ["a hospital specialist", "your regular GP", "a pharmacist"], a: 1, ex: "The GP you declare, part of the coordinated care pathway." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    87: {
      gap: [["Reste au lit jusqu'à ce que la fièvre ___. (baisser)", "baisse"], ["Je viendrai, à moins qu'il ___ trop tard. (être)", "soit"], ["Il est parti sans que personne le ___. (savoir)", "sache"], ["___ qu'il fasse beau demain ! (let's hope)", "Pourvu"]],
      fix: [["Attends ici jusqu'à ce qu'il revient.", "Attends ici jusqu'à ce qu'il revienne.", "jusqu'à ce que + subjunctive."], ["Elle est partie sans qu'elle dise au revoir.", "Elle est partie sans dire au revoir.", "Same subject: sans + infinitive."]],
      task: ["Give four health instructions to a friend who has the flu, with jusqu'à ce que, avant que, à moins que and à condition que.", "Donne quatre consignes de santé à un ami qui a la grippe, avec jusqu'à ce que, avant que, à moins que et à condition que.", "Reste au lit jusqu'à ce que la fièvre soit passée. Bois beaucoup d'eau avant que la fièvre monte. Ne va pas travailler, à moins que ce soit vraiment urgent. Tu pourras reprendre le sport à condition que tu ailles doucement la première semaine."]
    },
    88: {
      gap: [["Ça me fait plaisir que tu ___ pu venir. (avoir)", "aies"], ["Je doute qu'elle ___ compris. (avoir)", "ait"], ["Bien qu'il ___ parti tôt, il est arrivé en retard. (être)", "soit"], ["C'est dommage que vous n'___ pas vu le film. (avoir)", "ayez"]],
      fix: [["Je ne crois pas qu'ils ont déjà fini.", "Je ne crois pas qu'ils aient déjà fini.", "A negative opinion about the past: past subjunctive."], ["Il est possible qu'elle a oublié.", "Il est possible qu'elle ait oublié.", "il est possible que + subjunctive (past here)."]],
      task: ["React to three pieces of news with the past subjunctive: your friend passed an exam, your neighbour moved without saying goodbye, a colleague lost his job.", "Réagis à trois nouvelles avec le subjonctif passé : ton ami a réussi un examen, ta voisine a déménagé sans dire au revoir, un collègue a perdu son travail.", "Ça me fait vraiment plaisir que tu aies réussi ton examen, bravo ! C'est dommage que ma voisine soit partie sans dire au revoir. Et je suis triste que mon collègue ait perdu son travail : j'espère qu'il en trouvera vite un autre."]
    },
    89: {
      gap: [["Il est ___ de dormir sept heures par nuit. (recommended)", "recommandé"], ["Il est essentiel que vous ___ ce traitement. (prendre)", "preniez"], ["N'hésite pas ___ m'appeler. (to)", "à"], ["Je vais y ___. (think about it)", "réfléchir"]],
      fix: [["Il est essentiel que tu dors bien.", "Il est essentiel que tu dormes bien.", "il est essentiel que + subjunctive."], ["Il est conseillé que boire de l'eau.", "Il est conseillé de boire de l'eau.", "Without a person: de + infinitive."]],
      task: ["A colleague sleeps badly and is always tired. Give four recommendations, mixing formal and friendly phrases.", "Un collègue dort mal et il est toujours fatigué. Donne quatre recommandations, en mêlant phrases formelles et amicales.", "Il est recommandé de se coucher et de se lever à heures fixes, même le week-end. Évite les écrans une heure avant de dormir. Il vaudrait mieux que tu arrêtes le café après seize heures. Et si ça ne va pas mieux, n'hésite pas à en parler à ton médecin traitant."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "amistresse", lesson: 89, level: "B2", icon: "heart-pulse", partner: "Alexandre", role: "a friend",
    title: "A friend under pressure", title_fr: "Un ami sous pression",
    setting: "Your friend Alexandre works too much, sleeps badly and has stopped all sport. Persuade him to take care of himself.", setting_fr: "Ton ami Alexandre travaille trop, dort mal et a arrêté le sport. Convaincs-le de prendre soin de lui.",
    turns: [
      { p: "Je suis épuisé… Je travaille jusqu'à minuit tous les soirs, et je dors à peine cinq heures.", fr: "I'm exhausted… I work until midnight every evening, and I hardly sleep five hours." },
      { y: ["Il faudrait que tu te reposes, à moins que tu veuilles finir en surmenage.", "Il faudrait que tu te reposes, à moins que tu veux finir en surmenage.", "Il faudrait que tu te reposes, à moins de tu veuilles finir en surmenage."], fr: "You need to rest, unless you want to end up burnt out.", why: "à moins que + subjunctive (veuilles)." },
      { p: "Je sais, mais j'ai un énorme projet à rendre. Je me reposerai après.", fr: "I know, but I've got a huge project to hand in. I'll rest afterwards." },
      { y: ["Tu ne tiendras pas jusqu'à ce que le projet soit fini. Pense à ta santé !", "Tu ne tiendras pas jusqu'à ce que le projet est fini. Pense à ta santé !", "Tu ne tiendras pas jusqu'à le projet soit fini. Pense à ta santé !"], fr: "You won't last until the project is finished. Think of your health!", why: "jusqu'à ce que + subjunctive (soit)." },
      { p: "Tu as peut-être raison… Avant, je courais trois fois par semaine. J'ai tout arrêté.", fr: "Maybe you're right… I used to run three times a week. I've stopped everything." },
      { y: ["C'est dommage que tu aies arrêté ! Et si on courait ensemble le samedi matin ?", "C'est dommage que tu as arrêté ! Et si on courait ensemble le samedi matin ?", "C'est dommage que tu aies arrêté ! Et si on courrait ensemble le samedi matin ?"], fr: "It's a shame you stopped! How about running together on Saturday mornings?", why: "c'est dommage que + past subjunctive; et si + imparfait (courait)." },
      { p: "Le samedi ? Pourquoi pas… à condition que ce ne soit pas trop tôt !", fr: "On Saturdays? Why not… provided it's not too early!" },
      { y: ["Promis. Et il est essentiel que tu éteignes ton ordinateur avant minuit.", "Promis. Et il est essentiel que tu éteins ton ordinateur avant minuit.", "Promis. Et il est essentiel de tu éteignes ton ordinateur avant minuit."], fr: "Promise. And it's essential that you switch your computer off before midnight.", why: "il est essentiel que + subjunctive (éteignes)." },
      { p: "D'accord, d'accord ! Tu es pire que mon médecin…", fr: "OK, OK! You're worse than my doctor…" },
      { y: ["Ça me fait plaisir que tu m'aies écouté. Je t'encourage à tenir bon !", "Ça me fait plaisir que tu m'as écouté. Je t'encourage à tenir bon !", "Ça me fait plaisir que tu m'aies écouté. Je t'encourage de tenir bon !"], fr: "I'm glad you listened to me. I encourage you to stick with it!", why: "ça me fait plaisir que + past subjunctive; encourager à + infinitive." }
    ] }
  );

  W.READINGS.push({
    id: "sommeil", level: "B2", icon: "moon", title: "Le sommeil, ce grand oublié", genre: "Health article",
    intro: "We spend a third of our lives asleep, yet we often sacrifice sleep first. Simple, well-known advice to sleep better. Conjunctions with the subjunctive and health vocabulary.",
    intro_fr: "Nous passons un tiers de notre vie à dormir, et pourtant le sommeil est souvent le premier sacrifié. Des conseils simples et reconnus pour mieux dormir. Les conjonctions suivies du subjonctif et le vocabulaire de la santé.",
    paragraphs: [
      { en: "Nous passons environ un tiers de notre vie à dormir. Pourtant, dès que les journées sont chargées, c'est souvent le sommeil que l'on sacrifie en premier : on travaille tard, on regarde un épisode de plus, on se lève tôt. Jusqu'à ce que la fatigue nous rattrape.", fr: "We spend about a third of our lives asleep. Yet as soon as our days are busy, sleep is often the first thing we sacrifice: we work late, we watch one more episode, we get up early. Until tiredness catches up with us." },
      { en: "Or le sommeil n'est pas du temps perdu. C'est pendant la nuit que le corps récupère et que le cerveau trie les informations de la journée. Un manque de sommeil régulier peut avoir des effets sur la concentration, l'humeur et la santé en général.", fr: "Yet sleep isn't wasted time. It's at night that the body recovers and the brain sorts the day's information. A regular lack of sleep can affect concentration, mood and health in general." },
      { en: "Les conseils des spécialistes sont simples, à condition qu'on les applique tous les jours. D'abord, se coucher et se lever à heures fixes, même le week-end. Ensuite, éviter les écrans une heure avant de dormir, car leur lumière retarde l'endormissement. Il vaut mieux aussi limiter le café l'après-midi, et dormir dans une chambre sombre et plutôt fraîche.", fr: "Specialists' advice is simple, provided you follow it every day. First, go to bed and get up at fixed times, even at weekends. Next, avoid screens for an hour before sleeping, because their light delays falling asleep. It's also better to limit coffee in the afternoon, and to sleep in a dark, rather cool bedroom." },
      { en: "Et la sieste ? Elle peut être bénéfique, pourvu qu'elle reste courte : une vingtaine de minutes en début d'après-midi suffisent, sans que le sommeil de la nuit soit perturbé.", fr: "And naps? They can be beneficial, provided they stay short: about twenty minutes in the early afternoon is enough, without disturbing night-time sleep." },
      { en: "Enfin, si les difficultés durent plusieurs semaines, mieux vaut en parler à son médecin traitant, avant que la fatigue ne s'installe vraiment. Bien dormir, ce n'est pas un luxe : c'est la base d'une bonne hygiène de vie.", fr: "Finally, if the difficulties last several weeks, it's best to talk to your GP before the tiredness really sets in. Sleeping well isn't a luxury: it's the foundation of healthy habits." }
    ],
    glossary: { "tiers": "third", "sacrifie": "sacrifices", "épisode": "episode", "rattrape": "catches up with", "cerveau": "brain", "trie": "sorts", "concentration": "concentration", "applique": "applies, follows", "fixes": "fixed, set", "retarde": "delays", "endormissement": "falling asleep", "sombre": "dark", "sieste": "nap", "bénéfique": "beneficial", "perturbé": "disturbed", "base": "basis, foundation" },
    questions: [
      { q: "Quelle part de notre vie passons-nous à dormir ?", o: ["Environ un tiers", "Environ la moitié", "Environ un quart"], a: 0 },
      { q: "Que fait le cerveau pendant la nuit ?", o: ["Il se repose complètement.", "Il trie les informations de la journée.", "Il oublie tout."], a: 1 },
      { q: "Pourquoi éviter les écrans avant de dormir ?", o: ["Ils font du bruit.", "Ils coûtent cher.", "Leur lumière retarde l'endormissement."], a: 2 },
      { q: "À quelle condition la sieste est-elle bénéfique ?", o: ["Si elle reste courte", "Si elle dure deux heures", "Si on la fait le soir"], a: 0 },
      { q: "Que faire si les difficultés durent plusieurs semaines ?", o: ["Boire plus de café", "En parler à son médecin traitant", "Dormir le jour"], a: 1 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-b2-5", unit: "b2-5", level: "B2", icon: "radio",
    title: "Mal au dos au bureau", title_fr: "Mal au dos au bureau",
    context: "In a radio health programme, Karine calls Dr Moreau: she has back pain from working at a computer all day.", context_fr: "Dans une émission de santé à la radio, Karine appelle le Dr Moreau : elle a mal au dos à force de travailler toute la journée sur ordinateur.",
    words: [["à force de", "as a result of"], ["la posture", "the posture"], ["à hauteur des yeux", "at eye level"], ["s'étirer", "to stretch"], ["persister", "to persist"]],
    lines: [["Animateur", "Nous retrouvons Karine au téléphone. Bonjour Karine, vous avez une question pour le docteur Moreau ?", "fr-FR"], ["Karine", "Bonjour. Voilà : je travaille huit heures par jour devant un ordinateur, et depuis quelques mois, j'ai mal au dos tous les soirs. Je ne sais plus quoi faire.", "fr-FR"], ["Dr Moreau", "Bonjour Karine. C'est un problème très fréquent. D'abord, il est essentiel que votre poste de travail soit bien réglé : l'écran doit être à hauteur des yeux, et vos pieds bien à plat sur le sol.", "fr-FR"], ["Karine", "D'accord. Mais même quand je fais attention, j'ai mal en fin de journée.", "fr-FR"], ["Dr Moreau", "C'est normal : le corps n'est pas fait pour rester immobile. Il est recommandé de se lever au moins une fois par heure, même deux minutes, pour marcher un peu ou s'étirer.", "fr-FR"], ["Karine", "Je ne pense jamais à me lever, je suis trop concentrée.", "fr-FR"], ["Dr Moreau", "Alors mettez une alarme sur votre téléphone, jusqu'à ce que ça devienne une habitude. Et en dehors du travail, une activité comme la natation ou le yoga peut beaucoup vous aider.", "fr-FR"], ["Karine", "Et si la douleur ne passe pas ?", "fr-FR"], ["Dr Moreau", "Si elle persiste plus de quelques semaines, ou si elle descend dans la jambe, il vaudrait mieux que vous consultiez votre médecin traitant, avant que le problème ne s'aggrave. Il pourra vous prescrire des séances de kinésithérapie.", "fr-FR"], ["Karine", "Merci beaucoup, docteur.", "fr-FR"]],
    gist: ["Pourquoi Karine appelle-t-elle ?", ["Elle a mal au dos à cause du travail sur ordinateur.", "Elle dort mal.", "Elle veut changer de travail."]],
    detail: [["Où doit être l'écran ?", ["À hauteur des yeux", "Plus bas que la table", "Très loin"]], ["Que recommande le docteur toutes les heures ?", ["Se lever, marcher ou s'étirer", "Boire un café", "Fermer les yeux"]], ["Quelle activité peut aider ?", ["La natation ou le yoga", "Le football", "La course de vitesse"]], ["Quand faut-il consulter le médecin traitant ?", ["Si la douleur persiste plusieurs semaines ou descend dans la jambe", "Tout de suite", "Jamais"]]],
    decode: ["il est essentiel que votre poste de travail soit bien réglé", "jusqu'à ce que ça devienne une habitude"],
    tip: "Medical advice often comes as il est essentiel que, il est recommandé de, il vaudrait mieux que. Listen for these openings: the advice itself comes right after.", tip_fr: "Les conseils médicaux arrivent souvent avec il est essentiel que, il est recommandé de, il vaudrait mieux que. Guette ces débuts de phrase : le conseil suit juste après."
  }]);

  W.LEXIS = W.LEXIS || {};
  W.LEXIS["b2-5"] = {
    colloc: [
      ["prendre soin de", "to take care of", "Il faut prendre soin de sa santé.", "prendre", ["faire", "porter"]],
      ["garder la ligne", "to stay slim", "Elle fait du sport pour garder la ligne.", "garder", ["tenir", "suivre"]],
      ["reprendre des forces", "to regain one's strength", "Après la grippe, il lui a fallu une semaine pour reprendre des forces.", "reprendre", ["remettre", "rendre"]],
      ["faire de l'exercice", "to exercise", "Je fais de l'exercice trois fois par semaine.", "fais", ["prends", "joue"]],
      ["passer une nuit blanche", "to have a sleepless night", "J'ai passé une nuit blanche à cause du bruit.", "passé", ["mené", "tenu"]],
      ["prendre du poids", "to put on weight", "Il a pris du poids pendant l'hiver.", "pris", ["fait", "mis"]],
      ["suivre un traitement", "to follow a course of treatment", "Elle suit un traitement depuis un mois.", "suit", ["porte", "tient"]],
      ["tomber malade", "to fall ill", "Il tombe malade chaque hiver.", "tombe", ["va", "vient"]],
      ["souffrir de", "to suffer from", "Il souffre de maux de tête.", "souffre", ["subit", "porte"]],
      ["se remettre de", "to recover from", "Elle s'est vite remise de son opération.", "remise", ["reprise", "rendue"]]
    ],
    wf: [
      ["Sa ___ a été plus rapide que prévu. (GUÉRIR)", "guérison"],
      ["Les ___ dentaires coûtent cher. (SOIGNER)", "soins"],
      ["La ___ s'accumule en fin de semaine. (FATIGUER)", "fatigue"],
      ["Le yoga aide à contrôler sa ___. (RESPIRER)", "respiration"],
      ["Mangez de façon ___. (ÉQUILIBRE)", "équilibrée"],
      ["Cette maladie est très ___. (CONTAGION)", "contagieuse"],
      ["L'opération n'a pas été ___. (DOULEUR)", "douloureuse"],
      ["Rester assis toute la journée, c'est ___. (SAIN)", "malsain"]
    ],
    kwt: [
      ["Je partirai si tu ne m'appelles pas avant.", "MOINS", "Je partirai, ___ m'appelles avant.", "à moins que tu ne|à moins que tu"],
      ["Elle est sortie ; ses parents ne l'ont pas su.", "SANS", "Elle est sortie ___ le sachent.", "sans que ses parents"],
      ["Attends ici ; il va revenir.", "JUSQU'À", "Attends ici ___ revienne.", "jusqu'à ce qu'il"],
      ["J'espère vraiment qu'il fera beau demain !", "POURVU", "___ beau demain !", "Pourvu qu'il fasse"],
      ["Elle a beaucoup travaillé, mais elle a échoué.", "AIT", "Bien qu'elle ___, elle a échoué.", "ait beaucoup travaillé"],
      ["C'est dommage : tu n'as pas vu le spectacle.", "AIES", "C'est dommage que tu n'___ le spectacle.", "aies pas vu"]
    ],
    idioms: [
      ["avoir un coup de barre", "se sentir soudain très fatigué", "to hit a wall (with tiredness)", "Vers quinze heures, j'ai toujours un coup de barre.", "un coup de barre"],
      ["être sur les rotules", "être épuisé", "to be exhausted", "Après la randonnée, on était tous sur les rotules.", "sur les rotules"],
      ["se faire un sang d'encre", "s'inquiéter beaucoup", "to be worried sick", "Sa mère se faisait un sang d'encre.", "se faisait un sang d'encre"],
      ["avoir les nerfs à fleur de peau", "être très nerveux, irritable", "to be on edge", "Avant l'examen, il avait les nerfs à fleur de peau.", "les nerfs à fleur de peau"],
      ["garder le moral", "rester optimiste", "to keep one's spirits up", "Malgré la maladie, elle garde le moral.", "garde le moral"],
      ["reprendre du poil de la bête", "retrouver des forces, aller mieux", "to get back on one's feet", "Après deux semaines de repos, il reprend du poil de la bête.", "reprend du poil de la bête"],
      ["être patraque", "être un peu malade", "to be under the weather", "Je suis un peu patraque aujourd'hui.", "patraque"],
      ["avoir une faim de loup", "avoir très faim", "to be starving", "Après le sport, j'ai une faim de loup !", "une faim de loup"]
    ]
  };

  W.PROMPTS.push({ id: "fr-b2-5", level: "B2", q: "Qu'est-ce que tu fais pour prendre soin de toi ? Qu'est-ce que tu aimerais changer dans ton hygiène de vie ?", fr: "What do you do to take care of yourself? What would you like to change in your lifestyle?", time: 180,
    phrases: ["Pour prendre soin de moi, …", "J'essaie de… à condition que…", "Il faudrait que je…", "C'est dommage que…", "Pourvu que…"],
    model: "Pour prendre soin de moi, j'essaie de marcher au moins trente minutes par jour, même quand il pleut. Je cuisine presque tous les soirs, pour que mon alimentation soit plus équilibrée. En revanche, il faudrait que je dorme davantage : je me couche souvent tard, sans que ce soit vraiment nécessaire. C'est dommage que j'aie arrêté la natation l'année dernière, parce que ça me faisait beaucoup de bien. J'aimerais reprendre en septembre, pourvu que je trouve un créneau qui convienne à mon emploi du temps !" });

  W.WRITING_GUIDE["b2-5"] = { genre: "A formal proposal letter (DELF B2)", genre_fr: "Une lettre formelle de propositions (DELF B2)",
    plan: [["Open formally and say why you're writing.", "Commence de façon formelle et dis pourquoi tu écris."], ["Describe the problem, with a concession (bien que).", "Décris le problème, avec une concession (bien que)."], ["Make three concrete proposals with the subjunctive.", "Fais trois propositions concrètes avec le subjonctif."], ["Show the benefits and answer the cost objection.", "Montre les avantages et réponds à l'objection du coût."], ["Close formally.", "Termine de façon formelle."]],
    marks: [["Bien que la charge de travail ait augmenté", "bien que + past subjunctive", "bien que + subjonctif passé"], ["Il est donc essentiel que nous agissions", "il est essentiel que + subjunctive", "il est essentiel que + subjonctif"], ["avant que la situation ne s'aggrave", "avant que + the ne explétif", "avant que + ne explétif"], ["dans laquelle chacun pourrait", "a compound relative pronoun", "un pronom relatif composé"], ["à condition qu'elles restent facultatives", "à condition que + subjunctive", "à condition que + subjonctif"], ["afin que chacun puisse", "afin que + subjunctive", "afin que + subjonctif"]] };

  W.COURSE.push({ id: "b2-5", level: "B2", icon: "heart-pulse", title: "Health and wellbeing", title_fr: "Santé et bien-être",
    intro: "In this unit, you'll talk about health and wellbeing: the conjunctions that take the subjunctive (avant que, jusqu'à ce que, à moins que, pourvu que), the past subjunctive, and the French you need to recommend, persuade and understand medical advice.",
    intro_fr: "Dans cette unité, tu vas parler de santé et de bien-être : les conjonctions suivies du subjonctif (avant que, jusqu'à ce que, à moins que, pourvu que), le subjonctif passé, et le français qu'il faut pour recommander, convaincre et comprendre des conseils médicaux.",
    can: ["Use conjunctions with the subjunctive, and the infinitive when the subject is the same", "Recognise the ne explétif", "Use the past subjunctive", "Make formal recommendations and persuade a friend", "Write a formal letter with proposals"],
    can_fr: ["Utiliser les conjonctions suivies du subjonctif, et l'infinitif quand le sujet est le même", "Reconnaître le ne explétif", "Utiliser le subjonctif passé", "Faire des recommandations formelles et convaincre un ami", "Écrire une lettre formelle de propositions"],
    lessons: [87, 88, 89], vocab: ["bienetreFR", "soinsFR"], reading: "sommeil", prompt: "fr-b2-5",
    writing: { task: "On behalf of your colleagues, write to the director of your company (250-280 words): describe the problem of tiredness at work, propose three measures to improve wellbeing, and show their benefits.", task_fr: "Au nom de tes collègues, écris à la directrice de ton entreprise (250 à 280 mots) : décris le problème de la fatigue au travail, propose trois mesures pour améliorer le bien-être, et montre leurs avantages.", words: "250-280",
      tips: ["Au nom de…, je me permets de…", "Bien que…, …", "Il est essentiel que…", "Nous souhaiterions que…", "Dans l'attente de votre réponse, …"],
      checklist: ["I opened and closed formally", "I used at least three conjunctions with the subjunctive", "I used the past subjunctive", "I answered the cost objection", "I wrote between 250 and 280 words"],
      model: "Objet : Propositions pour améliorer le bien-être au travail\n\nMadame la Directrice,\n\nAu nom du comité des salariés, je me permets de vous adresser quelques propositions pour améliorer le bien-être dans notre entreprise, à la suite de l'enquête menée le mois dernier.\n\nLes résultats de cette enquête sont préoccupants : beaucoup de collègues se disent épuisés, et plusieurs ont dû s'arrêter pour surmenage cette année. Certains disent même qu'ils n'arrivent plus à se déconnecter le soir, de peur qu'on leur reproche de ne pas répondre. Bien que la charge de travail ait augmenté, nos méthodes d'organisation n'ont pas changé. Il est donc essentiel que nous agissions avant que la situation ne s'aggrave.\n\nNous proposons d'abord d'aménager une salle de détente, dans laquelle chacun pourrait faire une vraie pause, loin des écrans. Ensuite, il serait utile d'organiser des séances de yoga ou de marche pendant la pause de midi, à condition qu'elles restent facultatives. Elles pourraient être animées par des intervenants extérieurs. Enfin, nous souhaiterions que les réunions ne soient plus programmées après dix-huit heures, afin que chacun puisse préserver sa vie privée.\n\nCes mesures représentent un coût limité. En revanche, elles pourraient réduire les absences et améliorer l'ambiance générale, ce qui profiterait à toute l'entreprise. D'autres entreprises de notre secteur les ont d'ailleurs déjà mises en place avec succès.\n\nNous serions heureux d'en discuter avec vous lors d'une prochaine réunion. Dans l'attente de votre réponse, je vous prie d'agréer, Madame la Directrice, l'expression de mes salutations respectueuses.\n\nLou Martin, pour le comité des salariés" } });
})();
