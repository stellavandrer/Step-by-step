/* Cours de français, unité B2-2 « What if…? / Avec des si… » : si + plus-que-parfait → conditionnel passé, les
   hypothèses mixtes, le discours rapporté au passé (concordance des temps et des repères de temps), exprimer le
   regret, faire un reproche, consoler. Personnages fictifs, prénoms français. Fait vérifiable : le moyen
   mnémotechnique scolaire « les scies n'aiment pas les raies » (pas de conditionnel après si). */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "regretsFR", icon: "signpost", title: "Choices and regrets", title_fr: "Choix et regrets", level: "B2", words: [
    ["le choix", "the choice", "C'était un choix difficile."],
    ["regretter", "to regret, to be sorry", "Je ne regrette rien."],
    ["s'en vouloir", "to be angry with oneself", "Je m'en veux de ne pas l'avoir appelé."],
    ["avoir des remords", "to feel remorse", "Il a des remords d'avoir menti."],
    ["la culpabilité", "guilt", "Elle vit avec un sentiment de culpabilité."],
    ["se sentir coupable", "to feel guilty", "Ne te sens pas coupable, ce n'est pas ta faute."],
    ["l'occasion manquée", "the missed opportunity", "Ce voyage, c'est une occasion manquée."],
    ["rater une occasion", "to miss an opportunity", "Tu as raté une belle occasion."],
    ["le tournant", "the turning point", "Cette rencontre a été un tournant dans sa vie."],
    ["revenir en arrière", "to go back (in time)", "On ne peut pas revenir en arrière."],
    ["tirer les leçons de", "to learn lessons from", "Il faut tirer les leçons de cet échec."],
    ["assumer ses choix", "to stand by one's choices", "J'assume mes choix, même les mauvais."],
    ["avoir la conscience tranquille", "to have a clear conscience", "J'ai fait de mon mieux, j'ai la conscience tranquille."],
    ["le destin", "fate, destiny", "C'était peut-être le destin."],
    ["par hasard", "by chance", "Ils se sont rencontrés par hasard."],
    ["avec le recul", "with hindsight", "Avec le recul, c'était la bonne décision."],
    ["l'échec", "the failure", "Un échec peut être une leçon."],
    ["prendre du recul", "to step back, to get some perspective", "J'ai besoin de prendre du recul."]
  ] },
  { id: "rapporterFR", icon: "quote", title: "Reporting verbs", title_fr: "Les verbes pour rapporter des paroles", level: "B2", words: [
    ["affirmer", "to state, to claim", "Il affirme qu'il n'était pas au courant."],
    ["déclarer", "to declare, to announce", "Le ministre a déclaré qu'il démissionnait."],
    ["avouer", "to confess, to admit", "Elle a avoué qu'elle avait menti."],
    ["reconnaître", "to acknowledge, to admit", "Il reconnaît qu'il s'est trompé."],
    ["nier", "to deny", "Le suspect nie tout."],
    ["promettre", "to promise", "Il m'a promis qu'il viendrait."],
    ["assurer", "to assure", "Elle m'a assuré que tout irait bien."],
    ["avertir", "to warn", "On l'avait averti du danger."],
    ["répliquer", "to retort, to reply", "« Pas question », a-t-il répliqué."],
    ["s'exclamer", "to exclaim", "« Bravo ! » s'est-elle exclamée."],
    ["murmurer", "to whisper, to murmur", "Il a murmuré quelque chose à son oreille."],
    ["exiger", "to demand", "Les clients exigent un remboursement."],
    ["supplier", "to beg", "Elle l'a supplié de rester."],
    ["annoncer", "to announce", "Ils ont annoncé leur mariage."],
    ["ajouter", "to add", "Il a ajouté qu'il était désolé."],
    ["préciser", "to specify, to point out", "La police précise que l'enquête continue."],
    ["se demander", "to wonder", "Je me demande s'il a reçu mon message."],
    ["raconter", "to tell (a story)", "Elle m'a raconté son voyage."]
  ] });

  W.LESSONS.push(
  {
    id: 78, level: "B2", icon: "split",
    title: "Si j'avais su…: imagining the past", title_fr: "Si j'avais su… : imaginer le passé",
    subtitle: "Si + plus-que-parfait, the past conditional, and mixed conditionals.", subtitle_fr: "Si + plus-que-parfait, le conditionnel passé, et les hypothèses mixtes.",
    body: `
<h2>Three kinds of si</h2>
<table>
<tr><th>Situation</th><th>Structure</th><th>Example</th></tr>
<tr><td>possible</td><td>si + present → future</td><td><s-fr>S'il fait beau, on ira à la plage.</s-fr></td></tr>
<tr><td>imaginary, now</td><td>si + imparfait → conditional</td><td><s-fr>S'il faisait beau, on irait à la plage.</s-fr></td></tr>
<tr><td>imaginary, in the past</td><td>si + plus-que-parfait → past conditional</td><td><s-fr>S'il avait fait beau, on serait allés à la plage.</s-fr></td></tr>
</table>
<p>The third one talks about something that didn't happen: the past can't change. <s-fr>Si elle avait su, elle serait venue.</s-fr> (If she'd known, she would have come.)</p>
<h2>Mixed conditionals</h2>
<p>A past condition with a present result: <s-fr>Si j'avais accepté ce poste, je vivrais à Montréal aujourd'hui.</s-fr> A present condition with a past result: <s-fr>S'il n'était pas si timide, il aurait demandé de l'aide.</s-fr></p>
<h2>Without si</h2>
<p><s-fr>Sans ton aide, je n'aurais jamais réussi.</s-fr> · <s-fr>À ta place, j'aurais refusé.</s-fr> · <s-fr>Avec un peu plus de chance, on aurait gagné.</s-fr></p>
<div class="tip">Never the conditional right after <s-fr>si</s-fr>: <s-fr>si j'aurais su</s-fr> is a famous mistake. French schoolchildren learn the pun <s-fr>les scies n'aiment pas les raies</s-fr> (saws don't like stripes): si doesn't like -rais.</div>
`,
    examples: [
      ["Si j'avais su, je n'aurais rien dit.", "If I'd known, I wouldn't have said anything."],
      ["Si elle avait pris le train de huit heures, elle serait arrivée à temps.", "If she'd taken the eight o'clock train, she'd have arrived on time."],
      ["S'il avait fait beau, on aurait mangé dehors.", "If the weather had been nice, we'd have eaten outside."],
      ["Si nous étions partis plus tôt, nous n'aurions pas raté l'avion.", "If we'd left earlier, we wouldn't have missed the plane."],
      ["Si j'avais accepté ce poste, je vivrais à Montréal aujourd'hui.", "If I'd accepted that job, I'd be living in Montreal now."],
      ["S'il n'était pas si timide, il aurait demandé de l'aide.", "If he weren't so shy, he'd have asked for help."],
      ["Sans ton aide, je n'aurais jamais réussi.", "Without your help, I'd never have succeeded."],
      ["Avec un peu plus de chance, on aurait gagné.", "With a bit more luck, we'd have won."]
    ],
    quiz: [
      { q: "“If I had known, I would have come”:", o: ["Si j'aurais su, je serais venu.", "Si j'avais su, je serais venu.", "Si je savais, je serais venu."], a: 1, ex: "si + plus-que-parfait → past conditional." },
      { q: "“If she had left earlier, she wouldn't have missed the train”:", o: ["Si elle était partie plus tôt, elle n'aurait pas raté le train.", "Si elle partait plus tôt, elle n'aurait pas raté le train.", "Si elle serait partie plus tôt, elle n'aurait pas raté le train."], a: 0, ex: "si + plus-que-parfait (était partie)." },
      { q: "“If I'd studied medicine, I'd be a doctor now” (mixed):", o: ["Si j'avais fait médecine, je serais médecin aujourd'hui.", "Si j'avais fait médecine, j'aurais été médecin aujourd'hui.", "Si je faisais médecine, je serais médecin aujourd'hui."], a: 0, ex: "Past condition, present result: conditionnel présent." },
      { q: "Which sentence is correct?", o: ["Si tu aurais demandé, je t'aurais aidé.", "Si tu avais demandé, je t'aurais aidé.", "Si tu demandais, je t'aurais aidé hier."], a: 1, ex: "No conditional after si." },
      { q: "“Without you, we would have lost”:", o: ["Sans toi, on aurait perdu.", "Sans toi, on perdrait hier.", "Sans toi, on avait perdu."], a: 0, ex: "A hidden condition: past conditional." }
    ]
  },
  {
    id: 79, level: "B2", icon: "quote",
    title: "Il a dit qu'il viendrait: reported speech in the past", title_fr: "Il a dit qu'il viendrait : le discours rapporté au passé",
    subtitle: "When the reporting verb is in the past, tenses and time words move one step back.", subtitle_fr: "Quand le verbe introducteur est au passé, les temps et les repères de temps reculent d'un cran.",
    body: `
<h2>Tenses move back</h2>
<table>
<tr><th>Direct speech</th><th>Reported (il a dit que…)</th></tr>
<tr><td>present: <s-fr>Je suis fatigué.</s-fr></td><td>imparfait: <s-fr>Il a dit qu'il était fatigué.</s-fr></td></tr>
<tr><td>passé composé: <s-fr>J'ai fini.</s-fr></td><td>plus-que-parfait: <s-fr>Il a dit qu'il avait fini.</s-fr></td></tr>
<tr><td>future: <s-fr>Je viendrai.</s-fr></td><td>conditional: <s-fr>Il a dit qu'il viendrait.</s-fr></td></tr>
<tr><td>futur antérieur: <s-fr>J'aurai fini.</s-fr></td><td>past conditional: <s-fr>Il a dit qu'il aurait fini.</s-fr></td></tr>
<tr><td>imperative: <s-fr>Attends-moi !</s-fr></td><td>de + infinitive: <s-fr>Il m'a dit de l'attendre.</s-fr></td></tr>
</table>
<p>The imparfait, the plus-que-parfait and the conditional don't change.</p>
<h2>Time and place words</h2>
<p><s-fr>aujourd'hui</s-fr> → <s-fr>ce jour-là</s-fr> · <s-fr>hier</s-fr> → <s-fr>la veille</s-fr> · <s-fr>demain</s-fr> → <s-fr>le lendemain</s-fr> · <s-fr>la semaine prochaine</s-fr> → <s-fr>la semaine suivante</s-fr> · <s-fr>il y a deux jours</s-fr> → <s-fr>deux jours plus tôt</s-fr> · <s-fr>ici</s-fr> → <s-fr>là</s-fr></p>
<h2>Questions</h2>
<p><s-fr>Elle m'a demandé si j'avais fini.</s-fr> · <s-fr>Il voulait savoir où j'habitais.</s-fr> · <s-fr>Ils se demandaient ce qui s'était passé.</s-fr></p>
<div class="tip">If what was said is still true, speakers often keep the present: <s-fr>Il m'a dit qu'il habite à Lyon</s-fr> (he still does). It's accepted in speech, but in a written exam, follow the rule.</div>
`,
    examples: [
      ["Elle a dit qu'elle était fatiguée.", "She said she was tired."],
      ["Il m'a expliqué qu'il avait perdu ses clés.", "He explained to me that he had lost his keys."],
      ["Ils ont promis qu'ils viendraient le lendemain.", "They promised they would come the next day."],
      ["Elle a assuré qu'elle aurait fini avant midi.", "She assured us she would have finished before noon."],
      ["Le médecin m'a dit de rester au lit.", "The doctor told me to stay in bed."],
      ["Il m'a demandé si j'avais reçu son message.", "He asked me if I had received his message."],
      ["Elle voulait savoir ce que je faisais ce jour-là.", "She wanted to know what I was doing that day."],
      ["Il a avoué qu'il était parti la veille.", "He admitted that he had left the day before."]
    ],
    quiz: [
      { q: "“Je viendrai demain.” → Il a dit qu'il…", o: ["… viendra demain.", "… viendrait le lendemain.", "… venait demain."], a: 1, ex: "future → conditional; demain → le lendemain." },
      { q: "“J'ai perdu mon téléphone.” → Elle a dit qu'elle…", o: ["… a perdu son téléphone.", "… avait perdu son téléphone.", "… perdait son téléphone."], a: 1, ex: "passé composé → plus-que-parfait." },
      { q: "“Tu as fini ?” → Il m'a demandé…", o: ["… si j'avais fini.", "… est-ce que j'avais fini.", "… que j'avais fini."], a: 0, ex: "si + plus-que-parfait." },
      { q: "“hier” in reported speech becomes:", o: ["le lendemain", "la veille", "ce jour-là"], a: 1, ex: "hier → la veille." },
      { q: "“Ferme la fenêtre !” → Elle m'a dit…", o: ["… que je ferme la fenêtre.", "… de fermer la fenêtre.", "… fermer la fenêtre."], a: 1, ex: "An order: de + infinitive." }
    ]
  },
  {
    id: 80, level: "B2", kind: "functional", icon: "heart-handshake",
    title: "Everyday French: regret, reproach and comfort", title_fr: "Le français de tous les jours : regretter, reprocher, consoler",
    subtitle: "Say what you regret, tell someone off without hurting them, and find the right words to comfort.", subtitle_fr: "Dire ce que tu regrettes, faire un reproche sans blesser, et trouver les mots pour consoler.",
    body: `
<h2>Expressing regret</h2>
<p><s-fr>Je regrette de ne pas être venu</s-fr> (<s-fr>venue</s-fr>) — or, more neutral: <s-fr>Je regrette de ne pas avoir pu venir.</s-fr> · <s-fr>Je m'en veux de…</s-fr> (I'm angry with myself for…) · <s-fr>Si seulement j'avais écouté !</s-fr> · <s-fr>J'aurais tellement voulu…</s-fr> · <s-fr>C'est trop bête !</s-fr> (What a stupid thing to happen!)</p>
<h2>Reproaching, with care</h2>
<p><s-fr>Tu aurais pu me prévenir.</s-fr> · <s-fr>Tu aurais dû en parler avant.</s-fr> · <s-fr>Je ne te le reproche pas, mais…</s-fr> · <s-fr>La prochaine fois, ce serait bien de…</s-fr> Ironic, so careful: <s-fr>Ça ne t'est pas venu à l'idée de demander ?</s-fr></p>
<h2>Comforting</h2>
<p><s-fr>Ne t'en fais pas.</s-fr> (Don't worry.) · <s-fr>Ce n'est pas de ta faute.</s-fr> · <s-fr>Tu n'y pouvais rien.</s-fr> (There was nothing you could do.) · <s-fr>Tu as fait de ton mieux.</s-fr> · <s-fr>Avec le recul, tu verras les choses autrement.</s-fr> · <s-fr>À quelque chose malheur est bon.</s-fr> (Every cloud has a silver lining.)</p>
<div class="tip"><s-fr>Je regrette</s-fr> also means "I'm sorry" in formal refusals: <s-fr>Je regrette, ce n'est pas possible.</s-fr> And remember the infinitive after regretter de: <s-fr>Je regrette de ne pas avoir appelé</s-fr> (past infinitive for something already done).</div>
`,
    examples: [
      ["Je regrette de ne pas avoir pu venir.", "I'm sorry I couldn't come."],
      ["Je m'en veux de lui avoir parlé comme ça.", "I'm angry with myself for talking to him like that."],
      ["Si seulement j'avais écouté tes conseils !", "If only I had listened to your advice!"],
      ["Tu aurais pu me prévenir.", "You could have warned me."],
      ["Ne t'en fais pas, ce n'est pas de ta faute.", "Don't worry, it's not your fault."],
      ["Tu n'y pouvais rien.", "There was nothing you could do."],
      ["À quelque chose malheur est bon.", "Every cloud has a silver lining."]
    ],
    quiz: [
      { q: "“I'm angry with myself for forgetting” is:", o: ["Je suis en colère avec moi d'oublier.", "Je m'en veux d'avoir oublié.", "Je me veux d'oublier."], a: 1, ex: "s'en vouloir de + past infinitive." },
      { q: "To comfort someone:", o: ["Tu aurais dû faire attention.", "Ce n'est pas de ta faute.", "C'est trop bête."], a: 1, ex: "Ce n'est pas de ta faute." },
      { q: "“There was nothing you could do” is:", o: ["Tu n'y pouvais rien.", "Tu ne pouvais rien y.", "Tu n'avais rien pu."], a: 0, ex: "Tu n'y pouvais rien." },
      { q: "“Je regrette, ce n'est pas possible” is:", o: ["a regret about the past", "a polite refusal", "a reproach"], a: 1, ex: "In formal French, je regrette = I'm sorry." },
      { q: "“Every cloud has a silver lining” is:", o: ["À quelque chose malheur est bon.", "Après la pluie, le beau temps seulement.", "Tout est bien qui finit mal."], a: 0, ex: "À quelque chose malheur est bon." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    78: {
      gap: [["Si j'___ su, j'aurais dit non. (avoir, plus-que-parfait)", "avais"], ["S'il avait fait beau, on ___ dehors. (manger, past conditional)", "aurait mangé"], ["Si elle avait accepté, elle ___ à Montréal aujourd'hui. (vivre, mixed)", "vivrait"], ["Sans ton aide, je n'___ jamais réussi. (avoir)", "aurais"]],
      fix: [["Si j'aurais su, je n'aurais rien dit.", "Si j'avais su, je n'aurais rien dit.", "Never the conditional after si: si + plus-que-parfait."], ["S'il avait pris le bus, il arriverait à l'heure hier.", "S'il avait pris le bus, il serait arrivé à l'heure hier.", "A past result: the past conditional."]],
      task: ["Imagine three things that would have been different if you hadn't started learning French.", "Imagine trois choses qui auraient été différentes si tu n'avais pas commencé le français.", "Si je n'avais pas commencé le français, je n'aurais jamais lu Le Petit Prince en version originale. Je n'aurais pas rencontré mes amis de Lyon, et je ne serais pas en train d'écrire cette phrase ! Surtout, je n'aurais pas découvert le plaisir de penser dans une autre langue."]
    },
    79: {
      gap: [["Elle a dit qu'elle ___ fatiguée. (être)", "était"], ["Il m'a promis qu'il ___ le lendemain. (venir)", "viendrait"], ["Ils ont expliqué qu'ils ___ leurs clés. (perdre)", "avaient perdu"], ["Elle m'a demandé ___ j'avais fini. (if)", "si"]],
      fix: [["Il a dit qu'il viendra demain.", "Il a dit qu'il viendrait le lendemain.", "Reporting verb in the past: future → conditional, demain → le lendemain."], ["Elle m'a demandé qu'est-ce que je faisais.", "Elle m'a demandé ce que je faisais.", "In reported questions: ce que, not qu'est-ce que."]],
      task: ["Report a conversation you had yesterday with a colleague: two statements, one question, one request.", "Rapporte une conversation que tu as eue hier avec un collègue : deux affirmations, une question, une demande.", "Hier, ma collègue m'a dit qu'elle était épuisée et qu'elle partirait en vacances la semaine suivante. Elle m'a demandé si je pouvais m'occuper de ses dossiers pendant son absence. Elle m'a aussi demandé de ne rien dire au directeur avant le lendemain."]
    },
    80: {
      gap: [["Je m'en ___ d'avoir oublié ton anniversaire. (vouloir)", "veux"], ["Ne t'en ___ pas, ce n'est pas grave. (faire)", "fais"], ["Tu n'y ___ rien. (pouvoir, imparfait)", "pouvais"], ["Si ___ j'avais écouté ! (only)", "seulement"]],
      fix: [["Je regrette de ne pas venir hier.", "Je regrette de ne pas être venu hier.|Je regrette de ne pas être venue hier.|Je regrette de ne pas avoir pu venir hier.", "A regret about the past: the past infinitive."], ["Ce n'est pas ta faute de.", "Ce n'est pas de ta faute.|Ce n'est pas ta faute.", "Ce n'est pas (de) ta faute."]],
      task: ["A friend failed an exam after working hard. Write four sentences to comfort them.", "Un ami a raté un examen après avoir beaucoup travaillé. Écris quatre phrases pour le consoler.", "Ne t'en fais pas, tu as fait de ton mieux. Tu n'y pouvais rien : le sujet était vraiment difficile cette année. Tu pourras le repasser en septembre, et tu seras encore mieux préparé. Et puis, à quelque chose malheur est bon : tu sauras exactement quoi réviser !"]
    }
  });

  W.ROLEPLAYS.push(
  { id: "dateratee", lesson: 80, level: "B2", icon: "heart-handshake", partner: "Nathan", role: "a friend",
    title: "The missed deadline", title_fr: "La date limite ratée",
    setting: "Your friend Nathan missed the deadline for a job he really wanted. He's upset. Comfort him and help him see what to do.", setting_fr: "Ton ami Nathan a raté la date limite pour un poste qu'il voulait vraiment. Il est abattu. Console-le et aide-le à voir ce qu'il peut faire.",
    turns: [
      { p: "Je suis dégoûté… J'ai raté la date limite pour le poste à Lyon. Le dossier devait être envoyé hier.", fr: "I'm gutted… I missed the deadline for the job in Lyon. The application had to be sent yesterday." },
      { y: ["Oh non ! Si tu me l'avais dit, je t'aurais aidé à le finir.", "Oh non ! Si tu me l'aurais dit, je t'aurais aidé à le finir.", "Oh non ! Si tu me l'avais dit, je t'avais aidé à le finir."], fr: "Oh no! If you'd told me, I would have helped you finish it.", why: "si + plus-que-parfait → past conditional." },
      { p: "Je sais… Je m'en veux tellement. J'étais sûr que la date limite était aujourd'hui.", fr: "I know… I'm so angry with myself. I was sure the deadline was today." },
      { y: ["Ne t'en fais pas, ça arrive à tout le monde. Tu as appelé l'entreprise ?", "Ne te fais pas, ça arrive à tout le monde. Tu as appelé l'entreprise ?", "Ne t'en fait pas, ça arrive à tout le monde. Tu as appelé l'entreprise ?"], fr: "Don't worry, it happens to everyone. Have you called the company?", why: "s'en faire: ne t'en fais pas." },
      { p: "Oui. La recruteuse m'a dit de l'envoyer quand même, et qu'elle verrait ce qu'elle pouvait faire.", fr: "Yes. The recruiter told me to send it anyway, and that she'd see what she could do." },
      { y: ["Elle t'a dit de l'envoyer quand même ? Alors tout n'est pas perdu !", "Elle t'a dit d'envoyer le quand même ? Alors tout n'est pas perdu !", "Elle t'a dit que l'envoyer quand même ? Alors tout n'est pas perdu !"], fr: "She told you to send it anyway? Then all is not lost!", why: "dire de + infinitive; the pronoun goes before the infinitive." },
      { p: "Tu crois ? Avec ma chance, ils auront déjà choisi quelqu'un…", fr: "You think so? With my luck, they'll already have chosen someone…" },
      { y: ["Tu n'y pouvais rien, et ton dossier est excellent. Si j'étais toi, je l'enverrais ce soir.", "Tu n'y pouvais rien, et ton dossier est excellent. Si j'étais toi, je l'envoyais ce soir.", "Tu ne pouvais rien y, et ton dossier est excellent. Si j'étais toi, je l'enverrais ce soir."], fr: "There was nothing you could do, and your application is excellent. If I were you, I'd send it tonight.", why: "si + imparfait → conditional (je l'enverrais); tu n'y pouvais rien." },
      { p: "Tu as raison. Et si ça ne marche pas, tant pis : j'aurai appris quelque chose.", fr: "You're right. And if it doesn't work, too bad: I'll have learnt something." },
      { y: ["Exactement ! À quelque chose malheur est bon.", "Exactement ! À quelque chose malheur est mal.", "Exactement ! Quelque chose malheur est bon."], fr: "Exactly! Every cloud has a silver lining.", why: "The fixed expression: à quelque chose malheur est bon." }
    ] }
  );

  W.READINGS.push({
    id: "autrevie", level: "B2", icon: "split", title: "La vie qu'on n'a pas vécue", genre: "Magazine column",
    intro: "What would your life be like if you had made another choice? A column about Margot's choice, and what psychologists say about this question. Si + plus-que-parfait and reported speech in the past.",
    intro_fr: "Que serait ta vie si tu avais fait un autre choix ? Une chronique sur le choix de Margot, et ce qu'en disent les psychologues. Si + plus-que-parfait et discours rapporté au passé.",
    paragraphs: [
      { en: "Vous êtes-vous déjà demandé ce que serait votre vie si vous aviez fait un autre choix ? Si vous aviez étudié à l'étranger, si vous aviez accepté ce travail, si vous n'aviez pas pris ce train-là… Le cinéma adore cette question : plusieurs films racontent deux versions d'une même vie, selon qu'un personnage attrape ou rate un métro.", fr: "Have you ever wondered what your life would be like if you'd made another choice? If you'd studied abroad, if you'd accepted that job, if you hadn't taken that particular train… Cinema loves this question: several films tell two versions of the same life, depending on whether a character catches or misses a metro." },
      { en: "Margot, trente-quatre ans, connaît bien ce sentiment. Il y a dix ans, elle avait le choix entre deux propositions : un contrat dans une grande banque à Londres, et un poste de professeure dans un lycée de Rennes. Ses amis lui avaient conseillé Londres. Sa mère lui avait dit qu'elle serait plus heureuse en Bretagne.", fr: "Margot, thirty-four, knows this feeling well. Ten years ago, she had a choice between two offers: a contract with a big bank in London, and a teaching job at a secondary school in Rennes. Her friends had advised London. Her mother had told her she would be happier in Brittany." },
      { en: "Elle a choisi Rennes. Si j'étais partie à Londres, j'aurais sûrement gagné beaucoup plus d'argent, raconte-t-elle. Mais je n'aurais jamais rencontré mon mari, qui enseignait dans le même lycée, et nous n'aurions pas nos deux enfants.", fr: "She chose Rennes. If I'd gone to London, I'd certainly have earned a lot more money, she says. But I'd never have met my husband, who taught at the same school, and we wouldn't have our two children." },
      { en: "Les psychologues appellent cela la pensée contrefactuelle : imaginer ce qui se serait passé si… Selon eux, cet exercice peut être utile quand il aide à tirer les leçons d'une erreur. En revanche, il devient nocif quand on passe son temps à regretter une vie qu'on n'a pas vécue.", fr: "Psychologists call this counterfactual thinking: imagining what would have happened if… According to them, this exercise can be useful when it helps us learn from a mistake. On the other hand, it becomes harmful when we spend our time regretting a life we haven't lived." },
      { en: "Margot, elle, a trouvé sa réponse. Quand on me demande si j'ai des regrets, je réponds que je ne connaîtrai jamais l'autre version de ma vie. Alors autant aimer celle-ci !", fr: "Margot has found her answer. When people ask me if I have any regrets, I say I'll never know the other version of my life. So I might as well love this one!" }
    ],
    glossary: { "attrape": "catches", "propositions": "offers", "conseillé": "advised", "enseignait": "taught", "psychologues": "psychologists", "contrefactuelle": "counterfactual", "nocif": "harmful", "vécue": "lived", "autant": "might as well (autant aimer…)" },
    questions: [
      { q: "Qu'est-ce que le cinéma aime raconter ?", o: ["La vie à Londres", "Deux versions d'une même vie", "L'histoire d'une banque"], a: 1 },
      { q: "Entre quoi Margot devait-elle choisir ?", o: ["Un contrat dans une banque à Londres et un poste de professeure à Rennes", "Deux universités", "Deux appartements à Rennes"], a: 0 },
      { q: "Que n'aurait-elle pas vécu si elle était partie à Londres ?", o: ["Elle n'aurait pas gagné d'argent.", "Elle n'aurait pas appris l'anglais.", "Elle n'aurait pas rencontré son mari."], a: 2 },
      { q: "Selon les psychologues, quand cette façon de penser est-elle utile ?", o: ["Quand elle aide à tirer les leçons d'une erreur", "Quand on regrette sa vie", "Jamais"], a: 0 },
      { q: "Quelle est la conclusion de Margot ?", o: ["Elle aurait dû partir à Londres.", "Il vaut mieux aimer la vie qu'on a.", "Elle veut changer de vie."], a: 1 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-b2-2", unit: "b2-2", level: "B2", icon: "radio",
    title: "Le jour où j'ai dit non", title_fr: "Le jour où j'ai dit non",
    context: "On a radio programme, Grégoire tells Claire about the job in New York he turned down five years ago.", context_fr: "Dans une émission de radio, Grégoire raconte à Claire le poste à New York qu'il a refusé il y a cinq ans.",
    words: [["la recruteuse", "the recruiter (f)"], ["sur le papier", "on paper"], ["élevé", "high"], ["le décès", "the death"], ["prestigieux", "prestigious"]],
    lines: [["Claire", "Grégoire, vous avez refusé un poste à New York il y a cinq ans. Racontez-nous.", "fr-FR"], ["Grégoire", "À l'époque, je travaillais dans une petite agence de design à Nantes. Un jour, une grande entreprise américaine m'a appelé. La recruteuse m'a dit qu'elle avait vu mon travail en ligne et qu'elle voulait me proposer un poste à New York.", "fr-FR"], ["Claire", "C'était le rêve, non ?", "fr-FR"], ["Grégoire", "Sur le papier, oui. Elle m'a expliqué que le salaire serait trois fois plus élevé et que je pourrais commencer le mois suivant. Elle m'a demandé si j'étais intéressé, et je lui ai répondu que j'avais besoin de réfléchir.", "fr-FR"], ["Claire", "Et finalement, vous avez dit non. Pourquoi ?", "fr-FR"], ["Grégoire", "Mon père était malade à ce moment-là. Je savais que si je partais, je ne pourrais pas m'occuper de lui. Quand j'ai rappelé la recruteuse, elle m'a dit que je faisais une erreur et que je le regretterais.", "fr-FR"], ["Claire", "Et vous l'avez regretté ?", "fr-FR"], ["Grégoire", "Parfois, au début. Si j'étais parti, j'aurais sans doute une carrière plus prestigieuse aujourd'hui. Mais j'ai passé deux années précieuses avec mon père avant son décès. Ça, aucun salaire ne l'aurait remplacé.", "fr-FR"], ["Claire", "Et aujourd'hui ?", "fr-FR"], ["Grégoire", "J'ai créé ma propre agence à Nantes. Et vous savez quoi ? L'an dernier, la même entreprise américaine est devenue l'une de mes clientes !", "fr-FR"]],
    gist: ["De quoi parle Grégoire ?", ["D'un poste à l'étranger qu'il a refusé", "D'un voyage aux États-Unis", "De la maladie de sa mère"]],
    detail: [["Comment la recruteuse avait-elle connu son travail ?", ["Elle l'avait vu en ligne.", "Par un ami.", "Dans un magazine."]], ["Qu'est-ce qu'elle lui a dit quand il a refusé ?", ["Qu'il faisait une erreur et qu'il le regretterait", "Qu'elle comprenait", "Qu'elle le rappellerait l'année suivante"]], ["Pourquoi a-t-il refusé ?", ["Son père était malade.", "Il n'aimait pas New York.", "Le salaire était trop bas."]], ["Que s'est-il passé l'an dernier ?", ["L'entreprise américaine est devenue sa cliente.", "Il est parti à New York.", "Il a fermé son agence."]]],
    decode: ["elle voulait me proposer un poste à New York", "Si j'étais parti, j'aurais sans doute"],
    tip: "In a story told in the past, reported speech moves the tenses back: elle m'a dit qu'elle voulait, que je pourrais, que je le regretterais. Listen for que: it opens what someone said.", tip_fr: "Dans un récit au passé, le discours rapporté fait reculer les temps : elle m'a dit qu'elle voulait, que je pourrais, que je le regretterais. Guette que : il ouvre les paroles de quelqu'un."
  }]);

  W.LEXIS = W.LEXIS || {};
  W.LEXIS["b2-2"] = {
    colloc: [
      ["faire un choix", "to make a choice", "Il faut faire un choix maintenant.", "faire", ["prendre", "donner"]],
      ["commettre une erreur", "to make a mistake", "J'ai commis une erreur de calcul.", "commis", ["mis", "pris"]],
      ["tirer une leçon", "to learn a lesson", "Il a tiré une leçon de cet échec.", "tiré", ["porté", "mené"]],
      ["saisir une occasion", "to seize an opportunity", "Elle a saisi l'occasion de partir.", "saisi", ["attrapé", "tenu"]],
      ["prendre conscience", "to become aware", "J'ai pris conscience de mon erreur.", "pris", ["fait", "mis"]],
      ["faire marche arrière", "to back down", "Le gouvernement a fait marche arrière.", "marche", ["route", "pas"]],
      ["éprouver des regrets", "to feel regret", "Il n'éprouve aucun regret.", "éprouve", ["tient", "porte"]],
      ["tenir une promesse", "to keep a promise", "Elle a toujours tenu ses promesses.", "tenu", ["gardé", "fait"]],
      ["rendre service", "to do a favour", "Tu peux me rendre un service ?", "rendre", ["faire", "donner"]],
      ["donner sa parole", "to give one's word", "Je te donne ma parole.", "donne", ["fais", "mets"]]
    ],
    wf: [
      ["Son ___ à l'examen l'a beaucoup déçu. (ÉCHOUER)", "échec"],
      ["Il a exprimé ses ___ après l'accident. (REGRETTER)", "regrets"],
      ["C'était une décision ___ : il n'avait pas le choix. (ÉVITER)", "inévitable"],
      ["Elle a parlé avec beaucoup de ___. (SINCÈRE)", "sincérité"],
      ["Sa ___ du danger lui a sauvé la vie. (CONSCIENT)", "conscience"],
      ["Il a nié les faits de manière ___. (CATÉGORIE)", "catégorique"],
      ["Je ne veux pas être ___ de ton malheur. (RESPONSABILITÉ)", "responsable"],
      ["C'est une erreur ___ : tout le monde en fait. (PARDONNER)", "pardonnable"]
    ],
    kwt: [
      ["Je n'ai pas su la vérité, donc je n'ai rien dit.", "AVAIS", "Si j'___ la vérité, j'aurais dit quelque chose.", "avais su|avais connu"],
      ["Elle a dit : « Je partirai demain. »", "PARTIRAIT", "Elle a dit qu'elle ___.", "partirait le lendemain"],
      ["Il m'a demandé : « Tu as fini ? »", "SI", "Il m'a demandé ___.", "si j'avais fini|si j'avais terminé"],
      ["Je regrette de ne pas avoir écouté tes conseils.", "SEULEMENT", "Si ___ tes conseils !", "seulement j'avais écouté|seulement j'avais suivi"],
      ["Je n'ai pas pris le train parce que j'étais en retard.", "AURAIS", "Si je n'avais pas été en retard, j'___ le train.", "aurais pris"],
      ["Il a reconnu qu'il avait menti.", "AVOUÉ", "Il ___ menti.", "a avoué avoir|a avoué qu'il avait"]
    ],
    idioms: [
      ["s'en mordre les doigts", "regretter amèrement", "to kick oneself", "Il n'a pas accepté l'offre, et maintenant il s'en mord les doigts.", "s'en mord les doigts"],
      ["avec des si, on mettrait Paris en bouteille", "on ne peut pas refaire le passé avec des hypothèses", "if ifs and ands were pots and pans", "J'aurais pu gagner… Bah, avec des si, on mettrait Paris en bouteille !", "avec des si, on mettrait Paris en bouteille"],
      ["ce qui est fait est fait", "on ne peut pas changer le passé", "what's done is done", "Bon, ce qui est fait est fait : on passe à autre chose.", "ce qui est fait est fait"],
      ["rater le coche", "manquer une occasion", "to miss the boat", "Les inscriptions sont fermées : tu as raté le coche.", "raté le coche"],
      ["tourner la page", "passer à autre chose", "to move on", "Après son divorce, elle a décidé de tourner la page.", "tourner la page"],
      ["avoir un pincement au cœur", "ressentir une petite tristesse", "to feel a pang", "En quittant la maison, elle a eu un pincement au cœur.", "un pincement au cœur"],
      ["mettre les points sur les i", "dire les choses clairement", "to spell it out", "Il est temps de mettre les points sur les i.", "mettre les points sur les i"],
      ["tomber des nues", "être très surpris", "to be flabbergasted", "Quand elle lui a annoncé son départ, il est tombé des nues.", "tombé des nues"]
    ]
  };

  W.PROMPTS.push({ id: "fr-b2-2", level: "B2", q: "Raconte un choix important que tu as fait. Si tu avais fait un autre choix, qu'est-ce qui aurait changé ?", fr: "Tell about an important choice you made. If you had made another choice, what would have changed?", time: 180,
    phrases: ["À l'époque, …", "On m'a dit que…", "Si j'avais…, j'aurais…", "Avec le recul, …", "Je ne regrette pas…"],
    model: "Il y a quatre ans, j'ai décidé d'apprendre le français au lieu de l'espagnol. À l'époque, tout le monde m'a dit que l'espagnol serait plus utile. Si j'avais suivi leurs conseils, je parlerais peut-être espagnol aujourd'hui, et je n'aurais jamais découvert la littérature française. Avec le recul, je ne regrette pas du tout ce choix : grâce au français, j'ai rencontré des gens formidables et j'ai fait deux voyages inoubliables en France. Si c'était à refaire, je le referais sans hésiter !" });

  W.WRITING_GUIDE["b2-2"] = { genre: "A personal story with reflection (DELF B2)", genre_fr: "Un récit personnel avec réflexion (DELF B2)",
    plan: [["Present the situation and the choice you faced.", "Présente la situation et le choix qui s'offrait à toi."], ["Report what people told you (reported speech in the past).", "Rapporte ce qu'on t'a dit (discours rapporté au passé)."], ["Say what you chose and what happened.", "Dis ce que tu as choisi et ce qui s'est passé."], ["Imagine the other path (si + plus-que-parfait).", "Imagine l'autre chemin (si + plus-que-parfait)."], ["Conclude with some perspective.", "Conclus avec du recul."]],
    marks: [["Mes parents m'ont dit que l'offre parisienne était", "reported speech in the past", "le discours rapporté au passé"], ["m'a demandé ce que je voulais", "a reported question", "une question rapportée"], ["Si j'avais accepté le poste à Paris, j'aurais sans doute gagné", "si + plus-que-parfait → past conditional", "si + plus-que-parfait → conditionnel passé"], ["J'aurais peut-être aussi une carrière", "a mixed conditional", "une hypothèse mixte"], ["je n'aurais jamais découvert", "the past conditional in the negative", "le conditionnel passé à la forme négative"], ["Avec le recul", "a nuance to conclude", "une nuance pour conclure"]] };

  W.COURSE.push({ id: "b2-2", level: "B2", icon: "split", title: "What if…?", title_fr: "Avec des si…",
    intro: "In this unit, you'll talk about choices, regrets and what might have been: si + plus-que-parfait and mixed conditionals, reported speech in the past with all its tense changes, and the French you need to express regret, reproach someone and comfort them.",
    intro_fr: "Dans cette unité, tu vas parler de choix, de regrets et de ce qui aurait pu être : si + plus-que-parfait et les hypothèses mixtes, le discours rapporté au passé avec tous ses changements de temps, et le français qu'il faut pour regretter, faire un reproche et consoler.",
    can: ["Imagine the past with si + plus-que-parfait and the past conditional", "Use mixed conditionals", "Report speech in the past, changing tenses and time words", "Express regret, make a reproach and comfort someone", "Write a personal story with reflection"],
    can_fr: ["Imaginer le passé avec si + plus-que-parfait et le conditionnel passé", "Utiliser les hypothèses mixtes", "Rapporter des paroles au passé, en changeant les temps et les repères", "Exprimer un regret, faire un reproche et consoler", "Écrire un récit personnel avec du recul"],
    lessons: [78, 79, 80], vocab: ["regretsFR", "rapporterFR"], reading: "autrevie", prompt: "fr-b2-2",
    writing: { task: "Tell the story of a difficult choice you made (real or imagined), 250-280 words: what people told you, what you chose, what would have happened if you'd chosen differently, and what you think about it now.", task_fr: "Raconte un choix difficile que tu as fait (réel ou imaginé), en 250 à 280 mots : ce qu'on t'a dit, ce que tu as choisi, ce qui se serait passé si tu avais choisi autrement, et ce que tu en penses aujourd'hui.", words: "250-280",
      tips: ["Il y a… ans, j'ai dû faire un choix difficile.", "On m'a dit que…", "Si j'avais…, j'aurais…", "Je n'aurais jamais…", "Avec le recul, …"],
      checklist: ["I reported what people said, with the right tenses", "I used si + plus-que-parfait at least twice", "I used a mixed conditional", "I concluded with some perspective", "I wrote between 250 and 280 words"],
      model: "Le choix qui a tout changé\n\nIl y a six ans, j'ai dû faire un choix difficile. Je venais de finir mes études d'architecture, et deux offres m'attendaient : un poste dans une grande agence à Paris, et un contrat de six mois dans une petite association qui construisait des écoles au Sénégal.\n\nMes parents m'ont dit que l'offre parisienne était une chance unique et que je risquais de la regretter toute ma vie. Mon professeur, lui, m'a demandé ce que je voulais vraiment faire de mon métier. Il m'a conseillé de choisir le projet qui me ferait grandir, même s'il était moins bien payé.\n\nJ'ai finalement choisi le Sénégal. Ces six mois ont été les plus intenses de ma vie : j'ai appris à construire avec des matériaux locaux, à travailler avec des équipes qui ne parlaient pas ma langue, et à me contenter de peu.\n\nSi j'avais accepté le poste à Paris, j'aurais sans doute gagné plus d'argent, et plus vite. J'aurais peut-être aussi une carrière plus classique aujourd'hui. Mais je n'aurais jamais découvert ce qui me passionne vraiment : l'architecture durable. D'ailleurs, à mon retour, c'est grâce à cette expérience qu'une agence spécialisée m'a proposé un poste.\n\nEst-ce que j'ai des regrets ? Parfois, quand je vois les beaux bureaux parisiens de mes anciens camarades, je me demande à quoi ressemblerait ma vie. Mais au fond, je crois que j'ai fait le bon choix. Avec le recul, je dirais qu'un choix n'est jamais parfait : l'important, c'est de pouvoir l'assumer." } });
})();
