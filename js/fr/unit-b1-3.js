/* Cours de français, unité B1-3 « Money and dreams / L'argent et les rêves » : le conditionnel présent (politesse,
   souhait, conseil), si + imparfait → conditionnel, à ta place / si j'étais toi, demander et donner des conseils,
   la banque. Personnages et banque fictifs, prénoms français. Faits vérifiables seulement : en France, le RIB
   (relevé d'identité bancaire) donne l'IBAN du compte et on le demande pour recevoir un salaire ou payer par
   prélèvement ; un congé sans solde est un congé non payé accordé par l'employeur. Aucune affirmation sur des
   études ou des chiffres. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "argentFR", icon: "wallet", title: "Money", title_fr: "L'argent", level: "B1", words: [
    ["le compte en banque", "the bank account", "J'ai ouvert un compte en banque."],
    ["la carte bancaire", "the bank card", "Je peux payer par carte bancaire ?"],
    ["le distributeur", "the cash machine", "Il y a un distributeur près de la gare ?"],
    ["retirer de l'argent", "to withdraw money", "Je dois retirer de l'argent."],
    ["dépenser", "to spend (money)", "Il dépense tout son salaire en vêtements."],
    ["économiser", "to save (money)", "J'économise pour partir en vacances."],
    ["faire des économies", "to save up", "On fait des économies pour acheter une maison."],
    ["mettre de côté", "to put aside", "Je mets cent euros de côté chaque mois."],
    ["emprunter", "to borrow", "J'ai emprunté de l'argent à mon frère."],
    ["prêter", "to lend", "Tu peux me prêter dix euros ?"],
    ["le prêt", "the loan", "Ils ont fait un prêt pour la maison."],
    ["les impôts", "taxes", "Je déclare mes impôts en ligne."],
    ["la facture", "the bill, the invoice", "La facture d'électricité est arrivée."],
    ["l'abonnement", "the subscription", "J'ai arrêté mon abonnement à la salle de sport."],
    ["le virement", "the bank transfer", "Je t'ai fait un virement hier."],
    ["les frais", "the fees, the charges", "Il y a des frais de livraison ?"],
    ["gratuit / gratuite", "free of charge (m) / free of charge (f)", "L'entrée est gratuite le dimanche."],
    ["être fauché / fauchée", "to be broke (m) / to be broke (f)", "Ce mois-ci, il est complètement fauché."]
  ] },
  { id: "souhaitsFR", icon: "sparkles", title: "Wishes and advice", title_fr: "Souhaits et conseils", level: "B1", words: [
    ["le souhait", "the wish", "Fais un souhait !"],
    ["réaliser un rêve", "to make a dream come true", "Elle a réalisé son rêve : elle vit à Tahiti."],
    ["rêver de", "to dream of", "Je rêve de voir les aurores boréales."],
    ["avoir envie de", "to feel like, to want to", "J'ai envie de changer de vie."],
    ["gagner au loto", "to win the lottery", "Si je gagnais au loto, je ferais le tour du monde."],
    ["faire le tour du monde", "to travel around the world", "Ils ont fait le tour du monde en voilier."],
    ["changer de vie", "to change your life", "Il a tout quitté pour changer de vie."],
    ["s'offrir", "to treat yourself to", "Je me suis offert un bon restaurant."],
    ["le luxe", "luxury", "Un week-end à Venise, quel luxe !"],
    ["riche", "rich", "Il n'est pas riche, mais il est heureux."],
    ["une association", "a charity, a non-profit organisation", "Elle donne de l'argent à une association."],
    ["le bénévolat", "voluntary work", "Je fais du bénévolat le samedi."],
    ["à ta place", "if I were you", "À ta place, j'accepterais."],
    ["si j'étais toi", "if I were you", "Si j'étais toi, je refuserais."],
    ["il vaudrait mieux", "it would be better", "Il vaudrait mieux partir tôt."],
    ["ça vaut le coup", "it's worth it", "C'est cher, mais ça vaut le coup."],
    ["hésiter", "to hesitate, to be unsure", "J'hésite entre le rouge et le bleu."],
    ["ça coûte les yeux de la tête", "it costs an arm and a leg", "Ce sac coûte les yeux de la tête !"]
  ] });

  W.LESSONS.push(
  {
    id: 51, level: "B1", icon: "sparkles",
    title: "Je voudrais, tu devrais: the conditional", title_fr: "Je voudrais, tu devrais : le conditionnel présent",
    subtitle: "The future's stem, the imparfait's endings: for being polite, wishing and advising.", subtitle_fr: "Le radical du futur, les terminaisons de l'imparfait : pour la politesse, les souhaits et les conseils.",
    body: `
<h2>Forming it</h2>
<p>Take the stem of the future and add the endings of the imparfait: <s-fr>-ais, -ais, -ait, -ions, -iez, -aient</s-fr>.</p>
<table>
<tr><th>parler</th><th>être</th><th>pouvoir</th></tr>
<tr><td><s-fr>je parlerais</s-fr></td><td><s-fr>je serais</s-fr></td><td><s-fr>je pourrais</s-fr></td></tr>
<tr><td><s-fr>tu parlerais</s-fr></td><td><s-fr>tu serais</s-fr></td><td><s-fr>tu pourrais</s-fr></td></tr>
<tr><td><s-fr>il / elle / on parlerait</s-fr></td><td><s-fr>il / elle / on serait</s-fr></td><td><s-fr>il / elle / on pourrait</s-fr></td></tr>
<tr><td><s-fr>nous parlerions</s-fr></td><td><s-fr>nous serions</s-fr></td><td><s-fr>nous pourrions</s-fr></td></tr>
<tr><td><s-fr>vous parleriez</s-fr></td><td><s-fr>vous seriez</s-fr></td><td><s-fr>vous pourriez</s-fr></td></tr>
<tr><td><s-fr>ils / elles parleraient</s-fr></td><td><s-fr>ils / elles seraient</s-fr></td><td><s-fr>ils / elles pourraient</s-fr></td></tr>
</table>
<p>The irregular stems are the same as in the future: <s-fr>j'aurais, j'irais, je ferais, je voudrais, je viendrais, je verrais, je devrais, je saurais, il faudrait</s-fr>, and <s-fr>il vaudrait mieux</s-fr> (it would be better).</p>
<h2>Three everyday uses</h2>
<p><b>Being polite:</b> <s-fr>Je voudrais un café.</s-fr> · <s-fr>Pourriez-vous m'aider ?</s-fr> · <s-fr>Vous auriez l'heure ?</s-fr></p>
<p><b>Wishing:</b> <s-fr>J'aimerais vivre au bord de la mer.</s-fr> · <s-fr>Ça me plairait beaucoup.</s-fr></p>
<p><b>Advising:</b> <s-fr>Tu devrais te reposer.</s-fr> (You should rest.) · <s-fr>Vous pourriez demander à la banque.</s-fr> · <s-fr>Il vaudrait mieux attendre.</s-fr></p>
<div class="tip">Future or conditional? <s-fr>je ferai</s-fr> (I will do) and <s-fr>je ferais</s-fr> (I would do) sound the same for many French speakers. In writing, the final s makes all the difference: check that it's polite, a wish, advice or a condition before you add it.</div>
`,
    examples: [
      ["Je voudrais un grand café, s'il vous plaît.", "I'd like a large coffee, please."],
      ["Pourriez-vous parler plus lentement ?", "Could you speak more slowly?"],
      ["Vous auriez cinq minutes ?", "Would you have five minutes?"],
      ["J'aimerais vivre au bord de la mer.", "I'd love to live by the sea."],
      ["Tu devrais te reposer un peu.", "You should rest a bit."],
      ["On pourrait aller au cinéma ce soir.", "We could go to the cinema tonight."],
      ["Il vaudrait mieux réserver à l'avance.", "It would be better to book in advance."],
      ["Ce serait génial !", "That would be great!"]
    ],
    quiz: [
      { q: "“I'd like a tea” (politely) is:", o: ["Je voudrai un thé.", "Je voudrais un thé.", "Je veux un thé."], a: 1, ex: "Polite request: the conditional, je voudrais." },
      { q: "“You should rest” is:", o: ["Tu devras te reposer.", "Tu devrais te reposer.", "Tu devrais de te reposer."], a: 1, ex: "Advice: devoir in the conditional, + infinitive." },
      { q: "The conditional endings are those of:", o: ["the present", "the imparfait", "the passé composé"], a: 1, ex: "Future stem + imparfait endings." },
      { q: "“We could go out” is:", o: ["On pourrait sortir.", "On pourra sortir.", "On pouvait sortir."], a: 0, ex: "A suggestion: the conditional." },
      { q: "“Il vaudrait mieux partir” means:", o: ["It would be better to leave.", "It's worth leaving.", "He would like to leave."], a: 0, ex: "il vaudrait mieux = it would be better." }
    ]
  },
  {
    id: 52, level: "B1", icon: "lightbulb",
    title: "Si j'avais le temps…: imagining", title_fr: "Si j'avais le temps… : imaginer",
    subtitle: "Si + imparfait, then the conditional: for dreams, unlikely situations and advice.", subtitle_fr: "Si + imparfait, puis le conditionnel : pour les rêves, les situations peu probables et les conseils.",
    body: `
<h2>Si + imparfait → conditionnel</h2>
<p>For something imaginary or unlikely, French uses <s-fr>si</s-fr> + the imparfait, then the conditional: <s-fr>Si j'avais de l'argent, je ferais le tour du monde.</s-fr> (If I had money, I'd travel around the world.)</p>
<p>Never the conditional right after <s-fr>si</s-fr>: <s-fr>si j'aurais</s-fr> is a classic mistake, even among native speakers. The si clause can also come second: <s-fr>Je ferais le tour du monde si j'avais de l'argent.</s-fr></p>
<h2>Real or imaginary?</h2>
<table>
<tr><th>French</th><th>Meaning</th></tr>
<tr><td><s-fr>Si j'ai le temps, je viendrai.</s-fr></td><td>It's possible: I'll see.</td></tr>
<tr><td><s-fr>Si j'avais le temps, je viendrais.</s-fr></td><td>I don't really have the time.</td></tr>
</table>
<h2>À ta place, si j'étais toi</h2>
<p>Two ways to give advice: <s-fr>Si j'étais toi, je refuserais.</s-fr> = <s-fr>À ta place, je refuserais.</s-fr> With vous: <s-fr>si j'étais vous</s-fr>, <s-fr>à votre place</s-fr>.</p>
<h2>Suggestions and regrets</h2>
<p><s-fr>Et si on partait en week-end ?</s-fr> (How about going away for the weekend?) · <s-fr>Si seulement j'avais plus de temps !</s-fr> (If only I had more time!)</p>
<div class="tip">English "would" isn't always the conditional. For a habit in the past, French uses the imparfait: "When we were kids, we would go to the beach" = <s-fr>Quand nous étions enfants, nous allions à la plage.</s-fr></div>
`,
    examples: [
      ["Si j'avais de l'argent, je ferais le tour du monde.", "If I had money, I'd travel around the world."],
      ["Si tu habitais plus près, on se verrait plus souvent.", "If you lived closer, we'd see each other more often."],
      ["Qu'est-ce que tu ferais si tu gagnais au loto ?", "What would you do if you won the lottery?"],
      ["À ta place, j'accepterais.", "If I were you, I'd accept."],
      ["Si j'étais toi, je ne dirais rien.", "If I were you, I wouldn't say anything."],
      ["Et si on allait au cinéma ?", "How about going to the cinema?"],
      ["Si seulement il faisait beau !", "If only the weather were nice!"],
      ["Elle viendrait si elle n'était pas malade.", "She'd come if she weren't ill."]
    ],
    quiz: [
      { q: "“If I had time, I would come” is:", o: ["Si j'aurais le temps, je viendrais.", "Si j'avais le temps, je viendrais.", "Si j'avais le temps, je viendrai."], a: 1, ex: "si + imparfait, then the conditional." },
      { q: "“Si j'ai le temps, je viendrai” suggests that:", o: ["it's possible", "it's impossible", "it already happened"], a: 0, ex: "si + present: a real possibility." },
      { q: "“If I were you, I'd refuse” is:", o: ["Si je serais toi, je refuserais.", "À ta place, je refuserais.", "À ta place, je refuserai."], a: 1, ex: "À ta place + the conditional." },
      { q: "“How about going out?” is:", o: ["Et si on sortait ?", "Et si on sortirait ?", "Et si on sort ?"], a: 0, ex: "Et si + imparfait for a suggestion." },
      { q: "“When I was little, I would read every night” (habit):", o: ["… je lirais tous les soirs.", "… je lisais tous les soirs.", "… j'ai lu tous les soirs."], a: 1, ex: "A past habit: the imparfait, not the conditional." }
    ]
  },
  {
    id: 53, level: "B1", kind: "functional", icon: "message-circle",
    title: "Everyday French: asking for and giving advice", title_fr: "Le français de tous les jours : demander et donner des conseils",
    subtitle: "From gentle suggestions to firm warnings, and a few words for the bank.", subtitle_fr: "De la suggestion douce à la mise en garde, et quelques mots pour la banque.",
    body: `
<h2>Asking for advice</h2>
<p><s-fr>Qu'est-ce que tu me conseilles ?</s-fr> · <s-fr>Tu ferais quoi, toi, à ma place ?</s-fr> · <s-fr>J'hésite entre… et…</s-fr> · <s-fr>Tu crois que je devrais… ?</s-fr></p>
<h2>Giving advice, from soft to strong</h2>
<table>
<tr><th>French</th><th>Strength</th></tr>
<tr><td><s-fr>Tu pourrais peut-être…</s-fr> · <s-fr>Pourquoi tu ne… pas ?</s-fr></td><td>gentle suggestion</td></tr>
<tr><td><s-fr>À ta place, je…</s-fr> · <s-fr>Tu devrais…</s-fr> · <s-fr>Je te conseille de…</s-fr></td><td>clear advice</td></tr>
<tr><td><s-fr>Tu ferais mieux de…</s-fr> · <s-fr>Il vaut mieux…</s-fr></td><td>strong advice</td></tr>
<tr><td><s-fr>Surtout, ne… pas !</s-fr> · <s-fr>Fais attention à…</s-fr></td><td>warning</td></tr>
</table>
<p>With an infinitive, <s-fr>ne pas</s-fr> stays together: <s-fr>Je te conseille de ne pas signer tout de suite.</s-fr></p>
<p>Worth it or not? <s-fr>Ça vaut le coup !</s-fr> (It's worth it!) · <s-fr>Ça ne vaut pas la peine.</s-fr> (It's not worth it.)</p>
<h2>At the bank</h2>
<p><s-fr>Je voudrais ouvrir un compte.</s-fr> · <s-fr>Il y a des frais ?</s-fr> · <s-fr>Je voudrais faire un virement.</s-fr> · <s-fr>Ma carte a été avalée par le distributeur.</s-fr> (The machine swallowed my card.)</p>
<div class="tip">In France, you're often asked for a <s-fr>RIB</s-fr> (<s-fr>relevé d'identité bancaire</s-fr>): a document with your account details and IBAN. Employers need it to pay your salary, and landlords or phone companies to set up a direct debit (<s-fr>un prélèvement</s-fr>).</div>
`,
    examples: [
      ["Qu'est-ce que tu me conseilles ?", "What do you advise me to do?"],
      ["Tu ferais quoi, à ma place ?", "What would you do in my place?"],
      ["Tu pourrais peut-être en parler à ton chef.", "Perhaps you could talk to your boss about it."],
      ["Je te conseille de ne pas signer tout de suite.", "I'd advise you not to sign straight away."],
      ["Tu ferais mieux de partir tôt.", "You'd better leave early."],
      ["C'est cher, mais ça vaut le coup.", "It's expensive, but it's worth it."],
      ["Je voudrais ouvrir un compte, s'il vous plaît.", "I'd like to open an account, please."]
    ],
    quiz: [
      { q: "The gentlest advice is:", o: ["Tu ferais mieux de partir.", "Tu pourrais peut-être partir.", "Surtout, ne reste pas !"], a: 1, ex: "Tu pourrais peut-être… is a soft suggestion." },
      { q: "“I'd advise you not to buy it” is:", o: ["Je te conseille de ne pas l'acheter.", "Je te conseille de l'acheter pas.", "Je ne te conseille pas de l'acheter pas."], a: 0, ex: "ne pas stays together before an infinitive." },
      { q: "“It's worth it” is:", o: ["Ça vaut la peine de rien.", "Ça vaut le coup.", "C'est le coup."], a: 1, ex: "Ça vaut le coup !" },
      { q: "“Tu ferais mieux de te taire” means:", o: ["You'd better keep quiet.", "You'd do it better quietly.", "You'd be better quiet."], a: 0, ex: "Tu ferais mieux de… = you'd better…" },
      { q: "A RIB is:", o: ["a bank document with your account details", "a type of loan", "a tax form"], a: 0, ex: "Relevé d'identité bancaire: your account details and IBAN." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    51: {
      gap: [["Je ___ un café, s'il vous plaît. (vouloir, polite)", "voudrais"], ["Tu ___ te reposer. (devoir, advice)", "devrais"], ["___-vous m'aider ? (pouvoir, polite)", "Pourriez"], ["J'___ vivre au bord de la mer. (aimer, wish)", "aimerais"]],
      fix: [["Je voudrai un thé, s'il vous plaît.", "Je voudrais un thé, s'il vous plaît.", "A polite request: the conditional, je voudrais."], ["Tu devrais de te reposer.", "Tu devrais te reposer.", "devoir + infinitive directly, without de."]],
      task: ["Write four polite requests or wishes with the conditional: at a café, in a shop, to a colleague, and a dream.", "Écris quatre demandes polies ou souhaits avec le conditionnel : au café, dans un magasin, à un collègue, et un rêve.", "Je voudrais un grand café, s'il vous plaît. Pourriez-vous me montrer ce pull en bleu ? Tu aurais deux minutes pour relire mon e-mail ? Un jour, j'aimerais vivre dans une petite maison au bord de la mer."]
    },
    52: {
      gap: [["Si j'___ riche, je voyagerais tout le temps. (être)", "étais"], ["Si tu avais le temps, tu ___ avec nous ? (venir)", "viendrais"], ["À ta ___, je refuserais. (if I were you)", "place"], ["Et si on ___ en week-end ? (partir, suggestion)", "partait"]],
      fix: [["Si j'aurais de l'argent, j'achèterais une maison.", "Si j'avais de l'argent, j'achèterais une maison.", "Never the conditional after si: si + imparfait."], ["Quand nous étions enfants, nous irions à la plage chaque été.", "Quand nous étions enfants, nous allions à la plage chaque été.", "English would for a past habit = the imparfait in French."]],
      task: ["Answer: Si tu gagnais au loto, qu'est-ce que tu ferais ? Give at least four things.", "Réponds : Si tu gagnais au loto, qu'est-ce que tu ferais ? Donne au moins quatre choses.", "Si je gagnais au loto, d'abord, je rembourserais le prêt de mes parents. Ensuite, je ferais le tour du monde pendant un an. Je donnerais une partie de l'argent à une association. Et je ne changerais pas trop ma vie : je garderais mes amis et mon quartier !"]
    },
    53: {
      gap: [["Qu'est-ce que tu ___ à ma place ? (faire)", "ferais"], ["Tu ferais ___ de partir tôt. (better)", "mieux"], ["Ça ___ le coup ! (it's worth it)", "vaut"], ["Je te conseille de ne ___ signer. (not)", "pas"]],
      fix: [["Je te conseille d'acheter pas cette voiture.", "Je te conseille de ne pas acheter cette voiture.", "Before an infinitive, ne pas stays together: de ne pas acheter."], ["À ta place, je vais attendre.", "À ta place, j'attendrais.", "À ta place + the conditional."]],
      task: ["A friend hesitates between a cheap flat far from work and an expensive one in the centre. Give your advice in four sentences.", "Un ami hésite entre un appartement pas cher loin de son travail et un appartement cher dans le centre. Donne ton avis en quatre phrases.", "À ta place, je prendrais l'appartement dans le centre. Bien sûr, le loyer est plus cher, mais tu ferais des économies de transport et tu gagnerais une heure par jour. Tu pourrais aussi chercher un colocataire pour payer moins. Je te conseille de ne pas décider trop vite : va voir les deux quartiers le soir !"]
    }
  });

  W.ROLEPLAYS.push(
  { id: "prime", lesson: 53, level: "B1", icon: "piggy-bank", partner: "Sophie", role: "a friend",
    title: "What to do with a bonus?", title_fr: "Que faire d'une prime ?",
    setting: "Your friend Sophie has just received a bonus at work. She can't decide: a trip to Japan, or savings? She asks for your advice.", setting_fr: "Ton amie Sophie vient de recevoir une prime au travail. Elle hésite : un voyage au Japon, ou des économies ? Elle te demande conseil.",
    turns: [
      { p: "J'ai une super nouvelle : je viens de recevoir une prime de trois mille euros ! Mais je ne sais pas quoi en faire.", fr: "I've got great news: I've just got a three-thousand-euro bonus! But I don't know what to do with it." },
      { y: ["Génial ! Qu'est-ce que tu aimerais faire avec ?", "Génial ! Qu'est-ce que tu aimerait faire avec ?", "Génial ! Qu'est-ce que tu aimerai faire avec ?"], fr: "Great! What would you like to do with it?", why: "With tu, the conditional ends in -ais: tu aimerais." },
      { p: "J'hésite. J'aimerais partir au Japon, mais je devrais peut-être mettre l'argent de côté. Tu ferais quoi, toi, à ma place ?", fr: "I can't decide. I'd love to go to Japan, but maybe I should put the money aside. What would you do in my place?" },
      { y: ["À ta place, je garderais la moitié et je partirais en voyage avec le reste.", "À ta place, je garderai la moitié et je partirai en voyage avec le reste.", "À ta place, je gardais la moitié et je partais en voyage avec le reste."], fr: "If I were you, I'd keep half and go on a trip with the rest.", why: "À ta place + the conditional (-ais)." },
      { p: "La moitié ? Mais le Japon, ça coûte les yeux de la tête…", fr: "Half? But Japan costs an arm and a leg…" },
      { y: ["Tu pourrais partir hors saison : les billets seraient moins chers.", "Tu pouvais partir hors saison : les billets seraient moins chers.", "Tu pourrais partir hors saison : les billets seront moins chers si."], fr: "You could go off-season: the tickets would be cheaper.", why: "Advice: tu pourrais (the conditional of pouvoir)." },
      { p: "C'est vrai. Et si j'avais un problème pendant le voyage ? Je n'ai aucune économie.", fr: "That's true. And what if I had a problem during the trip? I haven't got any savings." },
      { y: ["Justement, il vaudrait mieux garder un peu d'argent pour les imprévus.", "Justement, il vaudrait mieux de garder un peu d'argent pour les imprévus.", "Justement, il vaudrait meilleur garder un peu d'argent pour les imprévus."], fr: "Exactly, it would be better to keep a bit of money for emergencies.", why: "il vaudrait mieux + infinitive, without de." },
      { p: "Tu as raison. Bon, alors : mille cinq cents euros pour le Japon, et mille cinq cents sur mon compte épargne !", fr: "You're right. OK then: fifteen hundred euros for Japan, and fifteen hundred in my savings account!" },
      { y: ["Parfait ! Et si tu as besoin d'une valise, je peux te prêter la mienne.", "Parfait ! Et si tu aurais besoin d'une valise, je peux te prêter la mienne.", "Parfait ! Et si tu as besoin d'une valise, je peux te prêter le mien."], fr: "Perfect! And if you need a suitcase, I can lend you mine.", why: "si + present for a real possibility; la mienne for la valise." }
    ] }
  );

  W.READINGS.push({
    id: "unmillion", level: "B1", icon: "sparkles", title: "Et si vous gagniez un million ?", genre: "Street survey",
    intro: "A magazine asked four people in the street what they would do with a million euros. Si + imparfait and the conditional.",
    intro_fr: "Un magazine a demandé à quatre passants ce qu'ils feraient avec un million d'euros. Si + imparfait et le conditionnel.",
    paragraphs: [
      { en: "Si vous gagniez un million d'euros demain, que feriez-vous ? Nous avons posé la question à quatre personnes, dans les rues de Bordeaux. Leurs réponses nous ont surpris.", fr: "If you won a million euros tomorrow, what would you do? We asked four people in the streets of Bordeaux. Their answers surprised us." },
      { en: "Yasmine, 31 ans, infirmière : Je ne quitterais pas mon travail, j'aime trop mes patients ! Mais je travaillerais à temps partiel, et j'achèterais enfin un appartement. Le reste, je le mettrais de côté pour les études de mes enfants.", fr: "Yasmine, 31, nurse: I wouldn't leave my job, I love my patients too much! But I'd work part-time, and I'd finally buy a flat. The rest, I'd put aside for my children's education." },
      { en: "Gérard, 67 ans, retraité : Moi, je ne changerais rien. À mon âge, on n'a plus besoin de grand-chose. Je donnerais presque tout à des associations, et je garderais juste de quoi offrir un beau voyage à mes petits-enfants.", fr: "Gérard, 67, retired: Me, I wouldn't change a thing. At my age, you don't need much any more. I'd give almost everything to charities, and just keep enough to treat my grandchildren to a nice trip." },
      { en: "Lou, 19 ans, étudiante : J'ouvrirais un café-librairie, un endroit où les gens pourraient lire, discuter et jouer à des jeux de société. Ce serait mon rêve ! Et si l'argent suffisait, je créerais une bourse pour les étudiants qui n'ont pas les moyens.", fr: "Lou, 19, student: I'd open a café-bookshop, a place where people could read, chat and play board games. That would be my dream! And if the money was enough, I'd set up a grant for students who can't afford their studies." },
      { en: "Karim, 45 ans, chauffeur de bus : Honnêtement ? Je partirais tout de suite faire le tour du monde avec ma femme. Nous en rêvons depuis vingt ans. Mais je reviendrais : il n'y a rien de mieux que chez soi !", fr: "Karim, 45, bus driver: Honestly? I'd leave straight away to travel around the world with my wife. We've been dreaming of it for twenty years. But I'd come back: there's no place like home!" }
    ],
    glossary: { "gagniez": "won", "feriez": "would do", "quitterais": "would leave", "partiel": "part-time (à temps partiel)", "côté": "side (mettre de côté: to put aside)", "associations": "charities", "librairie": "bookshop", "endroit": "place", "suffisait": "was enough", "créerais": "would create, would set up", "bourse": "grant", "moyens": "means (ne pas avoir les moyens: not to be able to afford)", "chauffeur": "driver", "honnêtement": "honestly", "rêvons": "dream" },
    questions: [
      { q: "Où le magazine a-t-il posé la question ?", o: ["Dans les rues de Bordeaux", "À Paris", "À la radio"], a: 0 },
      { q: "Que ferait Yasmine avec l'argent ?", o: ["Elle quitterait son travail.", "Elle achèterait un appartement et travaillerait à temps partiel.", "Elle ferait le tour du monde."], a: 1 },
      { q: "Que ferait Gérard ?", o: ["Il donnerait presque tout à des associations.", "Il achèterait une maison.", "Il ouvrirait un café."], a: 0 },
      { q: "Quel est le rêve de Lou ?", o: ["Ouvrir un café-librairie", "Devenir infirmière", "Partir au Japon"], a: 0 },
      { q: "Pourquoi Karim reviendrait de son voyage ?", o: ["Il n'aurait plus d'argent.", "Pour lui, il n'y a rien de mieux que chez soi.", "Sa femme voudrait rentrer."], a: 1 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-b1-3", unit: "b1-3", level: "B1", icon: "landmark",
    title: "Ouvrir un compte", title_fr: "Ouvrir un compte",
    context: "Nour has just arrived in France for her master's degree. She opens a bank account with an adviser, M. Duval.", context_fr: "Nour vient d'arriver en France pour son master. Elle ouvre un compte avec un conseiller, M. Duval.",
    words: [["un justificatif de domicile", "a proof of address"], ["la tenue de compte", "account management (fees)"], ["un retrait", "a withdrawal"], ["la zone euro", "the eurozone"], ["gérer", "to manage"]],
    lines: [["M. Duval", "Bonjour, madame. Asseyez-vous. Vous voudriez ouvrir un compte, c'est bien ça ?", "fr-FR"], ["Nour", "Oui. Je viens d'arriver en France pour mon master, et j'aurais besoin d'un compte pour recevoir ma bourse.", "fr-FR"], ["M. Duval", "Très bien. Vous avez apporté une pièce d'identité et un justificatif de domicile ?", "fr-FR"], ["Nour", "Oui, voici mon passeport et mon contrat de location.", "fr-FR"], ["M. Duval", "Parfait. Pour les étudiants, nous avons une offre sans frais de tenue de compte la première année. Ensuite, la carte bancaire coûterait deux euros par mois.", "fr-FR"], ["Nour", "D'accord. Et si je retirais de l'argent à l'étranger, je paierais des frais ?", "fr-FR"], ["M. Duval", "Un peu : un euro par retrait hors de la zone euro. Mais dans la zone euro, c'est gratuit.", "fr-FR"], ["Nour", "Et je pourrais gérer mon compte sur mon téléphone ?", "fr-FR"], ["M. Duval", "Bien sûr, avec notre application. Vous recevrez votre carte par courrier dans une semaine, et votre RIB tout de suite : je vous l'imprime.", "fr-FR"], ["Nour", "Merci beaucoup. C'était plus simple que prévu !", "fr-FR"]],
    gist: ["Pourquoi Nour va à la banque ?", ["Pour ouvrir un compte", "Pour demander un prêt", "Pour changer de l'argent"]],
    detail: [["Pourquoi Nour a besoin d'un compte ?", ["Pour recevoir sa bourse", "Pour payer son loyer", "Pour acheter une voiture"]], ["Qu'est-ce qui est gratuit la première année ?", ["La tenue de compte", "Les retraits hors de la zone euro", "Rien"]], ["Combien coûte un retrait hors de la zone euro ?", ["Un euro", "Deux euros", "C'est gratuit"]], ["Quand va-t-elle recevoir sa carte ?", ["Dans une semaine", "Tout de suite", "Dans un mois"]]],
    decode: ["j'aurais besoin d'un compte", "si je retirais de l'argent à l'étranger"],
    tip: "The conditional is everywhere in polite requests: vous voudriez, j'aurais besoin, je pourrais. Listen for the endings -ais, -ait, -iez: they tell you it's polite or hypothetical.", tip_fr: "Le conditionnel est partout dans les demandes polies : vous voudriez, j'aurais besoin, je pourrais. Guette les terminaisons -ais, -ait, -iez : elles signalent la politesse ou l'hypothèse."
  }]);

  W.PROMPTS.push({ id: "fr-b1-3", level: "B1", q: "Si tu pouvais changer une chose dans ta vie, qu'est-ce que ce serait ? Pourquoi ?", fr: "If you could change one thing in your life, what would it be? Why?", time: 150,
    phrases: ["Si je pouvais, je…", "J'aimerais…", "Ce serait…", "Il faudrait…", "Mais je ne changerais pas…"],
    model: "Si je pouvais changer une chose, je travaillerais moins et je passerais plus de temps dehors. J'aimerais habiter à la campagne, avec un grand jardin. Ce serait plus calme, et j'aurais le temps de cuisiner et de lire. Mais il faudrait une voiture, et je n'aime pas conduire ! Alors, je commencerais peut-être par un petit changement : un jour de télétravail par semaine, dans une maison de campagne louée avec des amis." });

  W.WRITING_GUIDE["b1-3"] = { genre: "Advice on a forum (DELF B1)", genre_fr: "Des conseils sur un forum (DELF B1)",
    plan: [["Greet the person and show you understand the situation.", "Salue la personne et montre que tu comprends sa situation."], ["Give your main advice with à ta place or si j'étais toi.", "Donne ton conseil principal avec à ta place ou si j'étais toi."], ["Add two or three practical suggestions (tu devrais, tu pourrais, il vaudrait mieux).", "Ajoute deux ou trois suggestions pratiques (tu devrais, tu pourrais, il vaudrait mieux)."], ["Imagine what could happen (si + imparfait).", "Imagine ce qui pourrait se passer (si + imparfait)."], ["Encourage the person.", "Encourage la personne."]],
    marks: [["À ta place, je ne quitterais pas", "à ta place + the conditional", "à ta place + conditionnel"], ["Si j'étais toi, je commencerais", "si + imparfait, then the conditional", "si + imparfait, puis le conditionnel"], ["Tu devrais aussi", "devoir in the conditional (advice)", "devoir au conditionnel (conseil)"], ["Il vaudrait mieux", "il vaudrait mieux + infinitive", "il vaudrait mieux + infinitif"], ["si ton projet ne marchait pas", "an imaginary condition", "une condition imaginaire"], ["Bon courage", "an encouraging ending", "une fin encourageante"]] };

  W.COURSE.push({ id: "b1-3", level: "B1", icon: "piggy-bank", title: "Money and dreams", title_fr: "L'argent et les rêves",
    intro: "In this unit, you'll talk about money, wishes and advice: the conditional for being polite and giving advice, si + imparfait to imagine, and the French you need to ask for and give advice, and to deal with a bank.",
    intro_fr: "Dans cette unité, tu vas parler d'argent, de souhaits et de conseils : le conditionnel pour la politesse et les conseils, si + imparfait pour imaginer, et le français qu'il faut pour demander et donner des conseils, et pour aller à la banque.",
    can: ["Form and use the conditional (politeness, wishes, advice)", "Imagine situations with si + imparfait", "Ask for advice and give it, from gentle to firm", "Deal with a bank in French", "Write a reply giving advice on a forum"],
    can_fr: ["Former et utiliser le conditionnel (politesse, souhaits, conseils)", "Imaginer des situations avec si + imparfait", "Demander et donner des conseils, du plus doux au plus ferme", "Te débrouiller à la banque en français", "Écrire une réponse pleine de conseils sur un forum"],
    lessons: [51, 52, 53], vocab: ["argentFR", "souhaitsFR"], reading: "unmillion", prompt: "fr-b1-3",
    writing: { task: "On a forum, Matthieu writes: I'm 25, I earn a good living, but I'm bored at work. I dream of giving it all up to open a B&B in Brittany. What would you do in my place? Reply with your advice (160-180 words).", task_fr: "Sur un forum, Matthieu écrit : J'ai 25 ans, je gagne bien ma vie, mais je m'ennuie au travail. Je rêve de tout quitter pour ouvrir une chambre d'hôtes en Bretagne. Qu'est-ce que vous feriez à ma place ? Réponds-lui avec tes conseils (160 à 180 mots).", words: "160-180",
      tips: ["J'ai lu ton message avec intérêt…", "À ta place, je…", "Si j'étais toi, je…", "Tu devrais / tu pourrais…", "Bon courage !"],
      checklist: ["I used à ta place or si j'étais toi", "I used si + imparfait with the conditional", "I gave at least three pieces of advice", "I encouraged the person", "I wrote between 160 and 180 words"],
      model: "Bonjour Matthieu,\n\nJ'ai lu ton message avec beaucoup d'intérêt, parce que j'ai vécu une situation assez semblable il y a quelques années, à peu près à ton âge.\n\nÀ ta place, je ne quitterais pas mon travail tout de suite. Ouvrir une chambre d'hôtes, c'est un beau projet, mais ce serait aussi un gros risque. Si j'étais toi, je commencerais par passer quelques week-ends chez des propriétaires de chambres d'hôtes, pour voir si ce métier te plaît vraiment.\n\nTu devrais aussi préparer un budget précis : combien coûteraient la maison, les travaux, l'assurance ? Il vaudrait mieux avoir assez d'économies pour tenir au moins un an.\n\nTu pourrais aussi en parler avec ta famille, qui te connaît bien. Enfin, tu pourrais demander un congé sans solde à ton employeur : si ton projet ne marchait pas, tu retrouverais ton poste.\n\nJe sais que ce n'est pas très romantique, mais un rêve bien préparé a beaucoup plus de chances de réussir. Bon courage, et tiens-nous au courant !\n\nCamille" } });
})();
