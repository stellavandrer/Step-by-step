/* Cours de français, unité B2-9 « Economy and consumption / Économie et consommation » : la cause et la
   conséquence (étant donné que, vu que, faute de, à force de, sous prétexte que, si bien que, de sorte que, d'où),
   le temps (à mesure que, au fur et à mesure, tant que, aussitôt que, maintenant que, chaque fois que), les droits
   du consommateur. Personnages et entreprises fictifs, prénoms français. Faits vérifiables seulement : en France
   et dans l'Union européenne, droit de rétractation de quatorze jours pour un achat à distance ; garantie légale de
   conformité de deux ans pour un produit neuf ; le SMIC est le salaire minimum ; indice de réparabilité depuis 2021
   et bonus réparation depuis fin 2022 en France. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "economieFR", icon: "banknote", title: "The economy", title_fr: "L'économie", level: "B2", words: [
    ["le pouvoir d'achat", "purchasing power", "Le pouvoir d'achat est au cœur du débat."],
    ["la hausse des prix", "the rise in prices", "La hausse des prix touche surtout l'alimentation."],
    ["les dépenses", "spending, expenses", "Nous avons réduit nos dépenses."],
    ["les revenus", "income", "Ses revenus ont baissé cette année."],
    ["le SMIC", "the French minimum wage", "Il est payé au SMIC."],
    ["la croissance", "growth", "La croissance a ralenti."],
    ["la crise", "the crisis", "La crise a touché de nombreuses entreprises."],
    ["la dette", "the debt", "Ils ont remboursé toutes leurs dettes."],
    ["l'épargne", "savings", "Les ménages ont augmenté leur épargne."],
    ["le consommateur / la consommatrice", "the consumer (m) / (f)", "Les consommateurs comparent les prix en ligne."],
    ["la consommation", "consumption", "La consommation de viande diminue."],
    ["la surconsommation", "overconsumption", "La surconsommation épuise les ressources."],
    ["la concurrence", "competition", "La concurrence fait baisser les prix."],
    ["le rapport qualité-prix", "value for money", "Ce restaurant a un excellent rapport qualité-prix."],
    ["les ménages", "households", "Les ménages dépensent plus pour le logement."],
    ["rentable", "profitable", "Ce magasin n'est plus rentable."],
    ["la faillite", "bankruptcy", "L'entreprise a fait faillite."],
    ["le chiffre d'affaires", "turnover, revenue", "Le chiffre d'affaires a augmenté de dix pour cent."]
  ] },
  { id: "consoFR", icon: "shopping-cart", title: "Consumer rights", title_fr: "Les droits du consommateur", level: "B2", words: [
    ["le droit de rétractation", "the right of withdrawal", "Vous avez quatorze jours pour exercer votre droit de rétractation."],
    ["la garantie légale", "the legal guarantee", "La garantie légale dure deux ans."],
    ["le service après-vente", "after-sales service", "J'ai appelé le service après-vente."],
    ["le bon de commande", "the order form", "Signez le bon de commande."],
    ["retourner un produit", "to return a product", "Vous pouvez retourner le produit sans frais."],
    ["défectueux / défectueuse", "faulty (m) / (f)", "La machine est arrivée défectueuse."],
    ["l'achat en ligne", "online purchase", "Les achats en ligne ont beaucoup augmenté."],
    ["le paiement en plusieurs fois", "payment in instalments", "Le paiement en plusieurs fois est possible."],
    ["résilier", "to cancel (a contract)", "J'ai résilié mon abonnement internet."],
    ["la résiliation", "the cancellation (of a contract)", "La résiliation prend effet dans un mois."],
    ["les conditions générales de vente", "the terms and conditions", "Lisez les conditions générales de vente."],
    ["l'arnaque", "the scam, the rip-off", "Ce site est une arnaque."],
    ["arnaquer", "to rip off, to con", "Je me suis fait arnaquer sur internet."],
    ["le litige", "the dispute", "En cas de litige, contactez le médiateur."],
    ["l'avis client", "the customer review", "Je lis toujours les avis clients."],
    ["le remplacement", "the replacement", "J'ai demandé le remplacement de l'appareil."],
    ["la mise en demeure", "the formal notice", "Il a envoyé une mise en demeure au vendeur."],
    ["le vendeur professionnel", "the professional seller", "Le vendeur professionnel doit respecter la garantie."]
  ] });

  W.LESSONS.push(
  {
    id: 99, level: "B2", icon: "workflow",
    title: "Étant donné que, faute de, si bien que: cause and consequence", title_fr: "Étant donné que, faute de, si bien que : cause et conséquence",
    subtitle: "More precise ways to explain why, and what it led to.", subtitle_fr: "Des façons plus précises d'expliquer pourquoi, et ce que ça a entraîné.",
    body: `
<h2>Cause</h2>
<table>
<tr><th>French</th><th>+</th><th>Example</th></tr>
<tr><td><s-fr>étant donné que</s-fr>, <s-fr>vu que</s-fr></td><td>indicative</td><td><s-fr>Étant donné que les prix augmentent, on consomme moins.</s-fr></td></tr>
<tr><td><s-fr>du fait de</s-fr>, <s-fr>en raison de</s-fr></td><td>noun</td><td><s-fr>Du fait de la crise, l'usine a fermé.</s-fr></td></tr>
<tr><td><s-fr>faute de</s-fr></td><td>noun or infinitive</td><td><s-fr>Faute d'argent, il n'a rien acheté.</s-fr> (for lack of)</td></tr>
<tr><td><s-fr>à force de</s-fr></td><td>infinitive or noun</td><td><s-fr>À force de comparer les prix, j'ai économisé deux cents euros.</s-fr></td></tr>
<tr><td><s-fr>sous prétexte que</s-fr></td><td>indicative</td><td><s-fr>Il ne paie pas, sous prétexte que l'article est abîmé.</s-fr> (and we doubt it)</td></tr>
</table>
<h2>Consequence</h2>
<p><s-fr>si bien que</s-fr>, <s-fr>de sorte que</s-fr> + indicative (with the result that): <s-fr>Le colis est arrivé en retard, si bien que j'ai annulé la commande.</s-fr> · <s-fr>au point que</s-fr> (to the point that): <s-fr>Les prix ont augmenté au point que beaucoup de familles renoncent aux vacances.</s-fr> · <s-fr>d'où</s-fr> + noun (hence): <s-fr>Les ventes baissent, d'où la fermeture du magasin.</s-fr></p>
<div class="tip"><s-fr>de sorte que</s-fr> + indicative expresses a result; + subjunctive, a purpose: <s-fr>Il a parlé fort, de sorte que tout le monde l'a entendu</s-fr> (result) / <s-fr>Parle fort, de sorte que tout le monde t'entende</s-fr> (purpose).</div>
`,
    examples: [
      ["Étant donné que les prix augmentent, nous réduisons nos dépenses.", "Given that prices are rising, we're cutting our spending."],
      ["Vu qu'il pleuvait, le marché a été annulé.", "Since it was raining, the market was cancelled."],
      ["Faute de clients, la boutique a fermé.", "For lack of customers, the shop closed."],
      ["À force de comparer, j'ai trouvé le meilleur prix.", "By comparing again and again, I found the best price."],
      ["Il refuse de rembourser, sous prétexte que l'article a été utilisé.", "He refuses to refund, on the pretext that the item has been used."],
      ["Le colis est arrivé abîmé, si bien que je l'ai renvoyé.", "The parcel arrived damaged, so I sent it back."],
      ["Les loyers ont augmenté au point que les jeunes quittent le centre.", "Rents have risen to the point where young people are leaving the centre."],
      ["Les ventes baissent, d'où la fermeture du magasin.", "Sales are falling, hence the closure of the shop."]
    ],
    quiz: [
      { q: "“Given that prices are rising” is:", o: ["Étant donné que les prix augmentent", "Étant donné les prix augmentent", "Étant que les prix augmentent"], a: 0, ex: "étant donné que + indicative." },
      { q: "“For lack of time” is:", o: ["faute de temps", "à force de temps", "en raison du temps"], a: 0, ex: "faute de = for lack of." },
      { q: "“By trying again and again, he succeeded” is:", o: ["À force d'essayer, il a réussi.", "Faute d'essayer, il a réussi.", "Sous prétexte d'essayer, il a réussi."], a: 0, ex: "à force de = by dint of." },
      { q: "“Sales are falling, hence the closure”:", o: ["Les ventes baissent, d'où la fermeture.", "Les ventes baissent, dont la fermeture.", "Les ventes baissent, où la fermeture."], a: 0, ex: "d'où + noun = hence." },
      { q: "“sous prétexte que” suggests that:", o: ["the speaker agrees", "the speaker doubts the reason", "it's a consequence"], a: 1, ex: "On the pretext that: the reason is doubtful." }
    ]
  },
  {
    id: 100, level: "B2", icon: "timer",
    title: "À mesure que, tant que, maintenant que: expressing time", title_fr: "À mesure que, tant que, maintenant que : exprimer le temps",
    subtitle: "Things that change together, how long something lasts, what happens right after, and what has changed.", subtitle_fr: "Ce qui évolue ensemble, ce qui dure, ce qui suit immédiatement, et ce qui a changé.",
    body: `
<h2>Changing together</h2>
<p><s-fr>à mesure que</s-fr> / <s-fr>au fur et à mesure que</s-fr> + indicative (as): <s-fr>À mesure que les prix augmentent, on consomme moins.</s-fr> On its own: <s-fr>Je range au fur et à mesure.</s-fr> (I tidy up as I go.)</p>
<h2>How long</h2>
<p><s-fr>tant que</s-fr> + indicative (as long as): <s-fr>Tant que tu n'as pas reçu le colis, ne paie pas.</s-fr> Compare with <s-fr>jusqu'à ce que</s-fr> + subjunctive (until): <s-fr>Attends jusqu'à ce que le colis arrive.</s-fr></p>
<h2>Right after</h2>
<p><s-fr>dès que</s-fr>, <s-fr>aussitôt que</s-fr>, <s-fr>une fois que</s-fr> + indicative (futur antérieur for an earlier future action): <s-fr>Aussitôt que vous aurez reçu l'article, vérifiez-le.</s-fr></p>
<h2>Repetition and change</h2>
<p><s-fr>chaque fois que</s-fr> (every time): <s-fr>Chaque fois que je vais au marché, je dépense trop.</s-fr> · <s-fr>maintenant que</s-fr> (now that): <s-fr>Maintenant que je travaille, je peux mettre de côté.</s-fr> · <s-fr>alors que</s-fr> (while, when): <s-fr>Le téléphone a sonné alors que je payais.</s-fr></p>
<div class="tip">Don't confuse <s-fr>tant que</s-fr> (as long as, + indicative) and <s-fr>jusqu'à ce que</s-fr> (until, + subjunctive). And <s-fr>pendant que</s-fr> (while) only describes two actions at the same time, never a contrast: for a contrast, use <s-fr>alors que</s-fr> or <s-fr>tandis que</s-fr>.</div>
`,
    examples: [
      ["À mesure que les prix augmentent, les ménages consomment moins.", "As prices rise, households consume less."],
      ["Je note mes dépenses au fur et à mesure.", "I write down my spending as I go."],
      ["Tant que l'article n'est pas livré, vous pouvez annuler.", "As long as the item hasn't been delivered, you can cancel."],
      ["Aussitôt que vous aurez reçu le colis, vérifiez son contenu.", "As soon as you've received the parcel, check its contents."],
      ["Chaque fois que je vais en ville, je dépense trop.", "Every time I go into town, I spend too much."],
      ["Maintenant que j'ai un salaire, je peux économiser.", "Now that I have a salary, I can save."],
      ["Le téléphone a sonné alors que je payais.", "The phone rang while I was paying."],
      ["Attendez jusqu'à ce que le remboursement soit confirmé.", "Wait until the refund is confirmed."]
    ],
    quiz: [
      { q: "“As prices rise” is:", o: ["à mesure que les prix augmentent", "à mesure que les prix augmentent-ils", "au fur que les prix augmentent"], a: 0, ex: "à mesure que + indicative." },
      { q: "“As long as you haven't paid” is:", o: ["tant que tu n'as pas payé", "jusqu'à ce que tu n'as pas payé", "pendant que tu n'aies pas payé"], a: 0, ex: "tant que + indicative." },
      { q: "“Now that I live here” is:", o: ["Maintenant que j'habite ici", "Maintenant j'habite que ici", "Depuis maintenant que j'habite ici"], a: 0, ex: "maintenant que + indicative." },
      { q: "“Until it arrives” is:", o: ["tant qu'il arrive", "jusqu'à ce qu'il arrive", "jusqu'à qu'il arrive"], a: 1, ex: "jusqu'à ce que + subjunctive." },
      { q: "“As soon as you've received it, call me” is:", o: ["Dès que tu l'as reçu, appelle-moi.", "Dès que tu l'auras reçu, appelle-moi.", "Dès que tu le recevais, appelle-moi."], a: 1, ex: "An earlier future action: futur antérieur." }
    ]
  },
  {
    id: 101, level: "B2", kind: "functional", icon: "shield",
    title: "Everyday French: knowing and using your consumer rights", title_fr: "Le français de tous les jours : connaître et faire valoir ses droits de consommateur",
    subtitle: "Return an item, get a faulty product replaced, and talk to customer service.", subtitle_fr: "Renvoyer un article, faire remplacer un produit défectueux, et parler au service client.",
    body: `
<h2>Your rights in France and the EU</h2>
<p>For a purchase made at a distance (online, by phone), you have fourteen days to change your mind: <s-fr>le droit de rétractation</s-fr>. For a new product bought from a professional seller, the <s-fr>garantie légale de conformité</s-fr> lasts two years: if the product is faulty, you can ask for it to be repaired or replaced.</p>
<h2>Making your request</h2>
<p><s-fr>Je souhaite exercer mon droit de rétractation.</s-fr> · <s-fr>L'article reçu est défectueux.</s-fr> · <s-fr>Il ne correspond pas à la description.</s-fr> · <s-fr>Conformément à la garantie légale de conformité, je vous demande de procéder au remplacement de l'appareil.</s-fr> · <s-fr>Sans réponse de votre part sous huit jours, je vous enverrai une mise en demeure.</s-fr></p>
<h2>On the phone</h2>
<p><s-fr>J'appelle au sujet de la commande numéro…</s-fr> · <s-fr>Vous pouvez me donner un numéro de dossier ?</s-fr> · <s-fr>Pouvez-vous me le confirmer par écrit ?</s-fr> · <s-fr>À qui dois-je m'adresser ?</s-fr></p>
<h2>Repair rather than replace</h2>
<p>In France, many appliances show an <s-fr>indice de réparabilité</s-fr> (a repairability score), and a <s-fr>bonus réparation</s-fr> pays part of the cost of some repairs at approved repairers.</p>
<div class="tip">Keep proof of everything: the order confirmation, photos of the defect, and a written record of your exchanges. A clear file and a calm tone are your best arguments.</div>
`,
    examples: [
      ["Je souhaite exercer mon droit de rétractation.", "I wish to exercise my right of withdrawal."],
      ["L'aspirateur est arrivé défectueux.", "The vacuum cleaner arrived faulty."],
      ["L'article ne correspond pas à la description du site.", "The item doesn't match the description on the website."],
      ["Je vous demande de procéder au remplacement de l'appareil.", "I am asking you to replace the appliance."],
      ["J'appelle au sujet de la commande numéro 4521.", "I'm calling about order number 4521."],
      ["Vous pouvez me donner un numéro de dossier ?", "Can you give me a case number?"],
      ["Cet appareil a un bon indice de réparabilité.", "This appliance has a good repairability score."]
    ],
    quiz: [
      { q: "For an online purchase in the EU, the withdrawal period is:", o: ["seven days", "fourteen days", "one month"], a: 1, ex: "Fourteen days." },
      { q: "The legal guarantee of conformity for a new product lasts:", o: ["six months", "one year", "two years"], a: 2, ex: "Two years." },
      { q: "“The item is faulty” is:", o: ["L'article est défectueux.", "L'article est défaillé.", "L'article est fautif."], a: 0, ex: "défectueux." },
      { q: "“Can you give me a case number?” is:", o: ["Vous pouvez me donner un numéro de dossier ?", "Vous pouvez me donner un numéro de cas ?", "Vous pouvez me donner un nombre de dossier ?"], a: 0, ex: "un numéro de dossier." },
      { q: "“Une mise en demeure” is:", o: ["a formal notice", "a home delivery", "a discount"], a: 0, ex: "A formal letter demanding action by a deadline." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    99: {
      gap: [["___ donné que les prix augmentent, on consomme moins. (given)", "Étant"], ["___ d'argent, il n'a rien acheté. (for lack of)", "Faute"], ["À ___ de comparer, j'ai trouvé moins cher. (by dint of)", "force"], ["Les ventes baissent, d'___ la fermeture du magasin. (hence)", "où"]],
      fix: [["Faute de pas avoir le temps, je n'ai pas cuisiné.", "Faute de temps, je n'ai pas cuisiné.", "faute de + noun (or infinitive), never with pas."], ["Les prix augmentent, d'où que les gens achètent moins.", "Les prix augmentent, si bien que les gens achètent moins.|Les prix augmentent, d'où une baisse des achats.", "d'où + a noun; before a clause, si bien que."]],
      task: ["Explain why a local shop closed, with étant donné que, faute de, à force de and si bien que.", "Explique pourquoi un commerce de ton quartier a fermé, avec étant donné que, faute de, à force de et si bien que.", "Étant donné que les loyers ont beaucoup augmenté, la librairie du quartier ne gagnait plus assez. Faute de clients en semaine, elle n'ouvrait plus que trois jours. À force de perdre de l'argent, la propriétaire a dû fermer, si bien que le quartier n'a plus de librairie."]
    },
    100: {
      gap: [["À ___ que les prix augmentent, on consomme moins. (as)", "mesure"], ["___ que tu n'as pas reçu le colis, ne paie pas. (as long as)", "Tant"], ["___ que je travaille, je peux économiser. (now that)", "Maintenant"], ["Aussitôt que vous ___ reçu l'article, vérifiez-le. (avoir, futur antérieur)", "aurez"]],
      fix: [["Tant que le colis arrive, attends.", "Attends jusqu'à ce que le colis arrive.|Tant que le colis n'est pas arrivé, attends.", "until = jusqu'à ce que + subjunctive; tant que = as long as."], ["Chaque fois que je vais au marché, je dépensais trop.", "Chaque fois que je vais au marché, je dépense trop.|Chaque fois que j'allais au marché, je dépensais trop.", "Keep the same time frame in both clauses."]],
      task: ["Describe how your spending has changed, with à mesure que, maintenant que, chaque fois que and tant que.", "Décris comment tes dépenses ont changé, avec à mesure que, maintenant que, chaque fois que et tant que.", "À mesure que les prix ont augmenté, j'ai changé mes habitudes. Maintenant que je cuisine tous les jours, je dépense beaucoup moins. Chaque fois que j'ai envie d'acheter un vêtement, j'attends une semaine. Et tant que mon vieux téléphone fonctionne, je n'en achèterai pas de nouveau."]
    },
    101: {
      gap: [["Je souhaite exercer mon droit de ___. (withdrawal)", "rétractation"], ["L'article reçu est ___. (faulty, m)", "défectueux"], ["J'appelle au ___ de la commande 4521. (about)", "sujet"], ["Vous pouvez me donner un numéro de ___ ? (case)", "dossier"]],
      fix: [["L'appareil ne correspond pas avec la description.", "L'appareil ne correspond pas à la description.", "correspondre à."], ["Conformément de la garantie, je demande un remplacement.", "Conformément à la garantie, je demande un remplacement.", "conformément à."]],
      task: ["Write a short message to an online shop: your new headphones stopped working after a month. Ask for a replacement under the legal guarantee.", "Écris un court message à une boutique en ligne : ton nouveau casque ne marche plus après un mois. Demande un remplacement au titre de la garantie légale.", "Bonjour, j'ai reçu le casque de la commande 7832 il y a un mois, et il ne fonctionne plus depuis hier. Conformément à la garantie légale de conformité, je vous demande de procéder à son remplacement. Vous trouverez en pièce jointe la facture et une vidéo du problème. Merci de me confirmer la procédure par écrit."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "serviceapresvente", lesson: 101, level: "B2", icon: "shield", partner: "Samia", role: "a customer service adviser",
    title: "A faulty vacuum cleaner", title_fr: "L'aspirateur défectueux",
    setting: "Three weeks ago, you received a vacuum cleaner bought online. It has stopped working. You call customer service.", setting_fr: "Il y a trois semaines, tu as reçu un aspirateur acheté en ligne. Il ne marche plus. Tu appelles le service client.",
    turns: [
      { p: "Service client, Samia à l'appareil, bonjour. Que puis-je faire pour vous ?", fr: "Customer service, Samia speaking, hello. How can I help you?" },
      { y: ["Bonjour. J'appelle au sujet de la commande 4521 : l'aspirateur que j'ai reçu est défectueux.", "Bonjour. J'appelle au sujet de la commande 4521 : l'aspirateur que j'ai reçu est défectueuse.", "Bonjour. J'appelle au sujet de la commande 4521 : l'aspirateur qui j'ai reçu est défectueux."], fr: "Hello. I'm calling about order 4521: the vacuum cleaner I received is faulty.", why: "un aspirateur → défectueux; que (the object)." },
      { p: "Je suis désolée. Vous l'avez reçu quand ?", fr: "I'm sorry. When did you receive it?" },
      { y: ["Il y a trois semaines. Il a fonctionné quelques jours, puis il s'est arrêté, si bien que je ne peux plus l'utiliser.", "Il y a trois semaines. Il a fonctionné quelques jours, puis il s'est arrêté, si bien que je ne puisse plus l'utiliser.", "Il y a trois semaines. Il a fonctionné quelques jours, puis il s'est arrêté, d'où je ne peux plus l'utiliser."], fr: "Three weeks ago. It worked for a few days, then it stopped, so I can't use it any more.", why: "si bien que + indicative; d'où only + a noun." },
      { p: "Ah, trois semaines… Le délai de rétractation de quatorze jours est dépassé. Je ne peux pas vous le reprendre.", fr: "Ah, three weeks… The fourteen-day withdrawal period has passed. I can't take it back." },
      { y: ["Je ne demande pas une rétractation : conformément à la garantie légale de conformité, je souhaite qu'il soit remplacé.", "Je ne demande pas une rétractation : conformément à la garantie légale de conformité, je souhaite qu'il est remplacé.", "Je ne demande pas une rétractation : conformément de la garantie légale de conformité, je souhaite qu'il soit remplacé."], fr: "I'm not asking to withdraw: under the legal guarantee of conformity, I'd like it to be replaced.", why: "souhaiter que + subjunctive; conformément à." },
      { p: "Vous avez raison, la garantie s'applique. Il faudra nous renvoyer l'appareil.", fr: "You're right, the guarantee applies. You'll need to send the appliance back to us." },
      { y: ["D'accord. Aussitôt que j'aurai reçu l'étiquette de retour, je vous l'enverrai. Vous pouvez me donner un numéro de dossier ?", "D'accord. Aussitôt que j'ai reçu l'étiquette de retour, je vous l'enverrai. Vous pouvez me donner un numéro de dossier ?", "D'accord. Aussitôt que j'aurai reçu l'étiquette de retour, je vous le enverrai. Vous pouvez me donner un numéro de dossier ?"], fr: "OK. As soon as I've received the return label, I'll send it to you. Can you give me a case number?", why: "aussitôt que + futur antérieur; vous + le = vous l'." },
      { p: "Bien sûr : dossier 78-B. Vous recevrez l'étiquette par e-mail dans une heure.", fr: "Of course: case 78-B. You'll receive the label by email within the hour." },
      { y: ["Parfait. Pouvez-vous me confirmer tout cela par écrit, s'il vous plaît ?", "Parfait. Pouvez-vous me confirmer tout cela en écrit, s'il vous plaît ?", "Parfait. Pouvez-vous confirmer me tout cela par écrit, s'il vous plaît ?"], fr: "Perfect. Could you confirm all that in writing, please?", why: "par écrit; me before the infinitive." }
    ] }
  );

  W.READINGS.push({
    id: "reparer", level: "B2", icon: "settings", title: "Réparer plutôt que jeter", genre: "Article",
    intro: "Broken toasters, cracked screens, leaking washing machines: more and more people repair instead of throwing away. Cause, consequence and time markers.",
    intro_fr: "Grille-pain en panne, écrans fissurés, lave-linge qui fuient : de plus en plus de gens réparent au lieu de jeter. La cause, la conséquence et l'expression du temps.",
    paragraphs: [
      { en: "Un grille-pain qui ne chauffe plus, un téléphone dont l'écran est fissuré, un lave-linge qui fuit : pendant longtemps, le réflexe a été de jeter et de racheter. Mais à mesure que les prix augmentent et que les préoccupations écologiques progressent, de plus en plus de consommateurs choisissent de réparer.", fr: "A toaster that no longer heats, a phone with a cracked screen, a leaking washing machine: for a long time, the reflex was to throw away and buy again. But as prices rise and environmental concerns grow, more and more consumers choose to repair." },
      { en: "Pour les y encourager, la France a pris plusieurs mesures. Depuis 2021, de nombreux appareils électroniques affichent un indice de réparabilité, une note sur dix qui indique s'ils sont faciles à réparer. Et depuis fin 2022, un bonus réparation finance une partie du coût de certaines réparations, à condition de passer par un réparateur labellisé.", fr: "To encourage them, France has taken several measures. Since 2021, many electronic devices display a repairability score, a mark out of ten showing whether they're easy to repair. And since the end of 2022, a repair bonus pays part of the cost of some repairs, provided you use an approved repairer." },
      { en: "Les repair cafés connaissent aussi un vrai succès. Le principe : des bénévoles bricoleurs aident gratuitement les habitants à réparer leurs objets. Maintenant que je sais changer une prise, je ne jette plus rien, raconte Martine, une habituée.", fr: "Repair cafés are also very successful. The idea: volunteers who are good with their hands help residents repair their things for free. Now that I know how to change a plug, I don't throw anything away, says Martine, a regular." },
      { en: "Tout n'est pas simple pour autant. Faute de pièces détachées, certains appareils restent impossibles à réparer, et une réparation coûte parfois presque aussi cher qu'un produit neuf. C'est pourquoi les associations de consommateurs demandent que les fabricants rendent les pièces disponibles plus longtemps.", fr: "It's not all simple, though. For lack of spare parts, some appliances remain impossible to repair, and a repair sometimes costs almost as much as a new product. That's why consumer associations are asking manufacturers to make parts available for longer." },
      { en: "Réparer, c'est donc à la fois faire des économies et réduire ses déchets. À force de petits gestes, ce sont des tonnes d'objets qui échappent chaque année à la poubelle.", fr: "Repairing, then, means both saving money and reducing your waste. Through small actions repeated over and over, tonnes of objects escape the bin every year." }
    ],
    glossary: { "grille-pain": "toaster", "chauffe": "heats up", "fissuré": "cracked", "lave-linge": "washing machine", "fuit": "leaks", "réflexe": "reflex", "racheter": "to buy again", "préoccupations": "concerns", "affichent": "display", "réparabilité": "repairability", "labellisé": "approved, certified", "bricoleurs": "people good at DIY", "prise": "plug, socket", "habituée": "regular", "détachées": "spare (pièces détachées)", "fabricants": "manufacturers", "échappent": "escape" },
    questions: [
      { q: "Pourquoi de plus en plus de consommateurs réparent-ils ?", o: ["À cause de la hausse des prix et des préoccupations écologiques", "Parce que les produits neufs n'existent plus", "Parce que c'est obligatoire"], a: 0 },
      { q: "Qu'est-ce que l'indice de réparabilité ?", o: ["Une note sur dix qui indique si un appareil est facile à réparer", "Le prix d'une réparation", "Une garantie de cinq ans"], a: 0 },
      { q: "À quelle condition le bonus réparation s'applique-t-il ?", o: ["Il faut acheter un produit neuf.", "Il faut passer par un réparateur labellisé.", "Il faut réparer soi-même."], a: 1 },
      { q: "Que font les bénévoles des repair cafés ?", o: ["Ils vendent des pièces détachées.", "Ils aident gratuitement les habitants à réparer leurs objets.", "Ils fabriquent des appareils."], a: 1 },
      { q: "Quel problème reste-t-il ?", o: ["Le manque de bénévoles", "Le manque de pièces détachées et le coût de certaines réparations", "Le manque d'intérêt du public"], a: 1 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-b2-9", unit: "b2-9", level: "B2", icon: "radio",
    title: "La chronique conso : les arnaques en ligne", title_fr: "La chronique conso : les arnaques en ligne",
    context: "On a radio programme, Nicolas gives advice to avoid online scams.", context_fr: "Dans une émission de radio, Nicolas donne des conseils pour éviter les arnaques en ligne.",
    words: [["les mentions légales", "the legal notice (on a website)"], ["passer son chemin", "to move on"], ["une capture d'écran", "a screenshot"], ["faire opposition", "to stop (a bank card)"], ["sécurisé", "secure"]],
    lines: [["Animatrice", "Et voici la chronique conso de Nicolas. Bonjour Nicolas ! Aujourd'hui, vous nous parlez des arnaques en ligne.", "fr-FR"], ["Nicolas", "Bonjour ! Oui, parce qu'à mesure que les achats en ligne se développent, les arnaques se multiplient. Premier conseil : méfiez-vous des prix trop bas. Si un téléphone neuf est vendu à moitié prix, c'est probablement une arnaque.", "fr-FR"], ["Animatrice", "Comment reconnaître un site sérieux ?", "fr-FR"], ["Nicolas", "Regardez les mentions légales : un vrai vendeur indique son nom, son adresse et un moyen de le contacter. Faute de ces informations, passez votre chemin. Lisez aussi les avis clients, mais pas seulement les cinq étoiles : certains sont faux.", "fr-FR"], ["Animatrice", "Et pour payer ?", "fr-FR"], ["Nicolas", "Ne payez jamais par virement à un inconnu, et vérifiez que la page de paiement est sécurisée. Et tant que la commande n'est pas livrée, gardez une trace de tout : captures d'écran, e-mails, numéro de commande.", "fr-FR"], ["Animatrice", "Et si on se fait quand même arnaquer ?", "fr-FR"], ["Nicolas", "Contactez immédiatement votre banque pour faire opposition, puis portez plainte. Plus vous réagissez vite, plus vous avez de chances de récupérer votre argent.", "fr-FR"]],
    gist: ["De quoi parle la chronique ?", ["Des arnaques en ligne", "Des soldes d'été", "Des nouveaux téléphones"]],
    detail: [["Que faut-il penser d'un téléphone neuf vendu à moitié prix ?", ["C'est probablement une arnaque.", "C'est une bonne affaire.", "C'est un produit d'occasion."]], ["Que doit indiquer un vrai vendeur ?", ["Son nom, son adresse et un moyen de le contacter", "Seulement ses prix", "Ses avis cinq étoiles"]], ["Comment ne faut-il jamais payer un inconnu ?", ["Par virement", "Par carte, sur une page sécurisée", "En plusieurs fois"]], ["Que faire en cas d'arnaque ?", ["Contacter sa banque, puis porter plainte", "Attendre une semaine", "Écrire un avis"]]],
    decode: ["à mesure que les achats en ligne se développent", "Faute de ces informations, passez votre chemin"],
    tip: "Consumer advice is full of conditions and warnings: si, tant que, faute de, méfiez-vous, ne… jamais. Turn each warning into a short rule as you listen.", tip_fr: "Les conseils aux consommateurs sont pleins de conditions et de mises en garde : si, tant que, faute de, méfiez-vous, ne… jamais. Transforme chaque mise en garde en une courte règle en écoutant."
  }]);

  W.LEXIS = W.LEXIS || {};
  W.LEXIS["b2-9"] = {
    colloc: [
      ["boucler son budget", "to make ends meet", "Beaucoup de familles ont du mal à boucler leur budget.", "boucler", ["fermer", "nouer"]],
      ["passer une commande", "to place an order", "J'ai passé une commande hier soir.", "passé", ["mis", "porté"]],
      ["régler une facture", "to pay a bill", "Il faut régler la facture avant la fin du mois.", "régler", ["fixer", "tenir"]],
      ["faire faillite", "to go bankrupt", "L'entreprise a fait faillite.", "fait", ["pris", "tombé"]],
      ["casser les prix", "to slash prices", "Ce magasin casse les prix pour les soldes.", "casse", ["brise", "rompt"]],
      ["souscrire un abonnement", "to take out a subscription", "J'ai souscrit un abonnement de deux ans.", "souscrit", ["inscrit", "écrit"]],
      ["rompre un contrat", "to break a contract", "Il a rompu son contrat avant la fin.", "rompu", ["cassé", "brisé"]],
      ["faire jouer la concurrence", "to shop around", "Faites jouer la concurrence avant d'acheter.", "jouer", ["marcher", "tourner"]],
      ["être en rupture de stock", "to be out of stock", "Ce modèle est en rupture de stock.", "rupture", ["panne", "fin"]],
      ["tenir ses comptes", "to keep one's accounts", "Elle tient ses comptes dans un carnet.", "tient", ["garde", "porte"]]
    ],
    wf: [
      ["La ___ d'énergie a baissé cet hiver. (CONSOMMER)", "consommation"],
      ["Les ___ comparent les prix en ligne. (ACHETER)", "acheteurs"],
      ["Nous avons réduit nos ___ de loisirs. (DÉPENSER)", "dépenses"],
      ["La ___ de ce magasin est insuffisante. (RENTABLE)", "rentabilité"],
      ["Le ___ en plusieurs fois est possible. (PAYER)", "paiement"],
      ["La ___ légale dure deux ans. (GARANTIR)", "garantie"],
      ["Malheureusement, cet appareil n'est pas ___. (RÉPARER)", "réparable"],
      ["La ___ économique a ralenti. (CROÎTRE)", "croissance"]
    ],
    kwt: [
      ["Comme les prix ont augmenté, les ventes baissent.", "ÉTANT", "___ les prix ont augmenté, les ventes baissent.", "Étant donné que"],
      ["Il a beaucoup économisé et il a pu s'acheter une voiture.", "FORCE", "À ___, il a pu s'acheter une voiture.", "force d'économiser"],
      ["Les prix augmentent et, en même temps, on consomme moins.", "MESURE", "À ___ augmentent, on consomme moins.", "mesure que les prix"],
      ["Ne paie pas avant d'avoir reçu le colis.", "TANT", "___ tu n'as pas reçu le colis, ne paie pas.", "Tant que"],
      ["Il n'avait pas d'argent, donc il n'a rien acheté.", "FAUTE", "___, il n'a rien acheté.", "Faute d'argent"],
      ["Le magasin a fermé ; je n'ai donc pas pu échanger l'article.", "SORTE", "Le magasin a fermé, ___ je n'ai pas pu échanger l'article.", "de sorte que"]
    ],
    idioms: [
      ["joindre les deux bouts", "réussir à payer ses dépenses avec ses revenus", "to make ends meet", "Avec un seul salaire, ils ont du mal à joindre les deux bouts.", "joindre les deux bouts"],
      ["jeter l'argent par les fenêtres", "dépenser sans compter", "to throw money down the drain", "Acheter ça, c'est jeter l'argent par les fenêtres.", "jeter l'argent par les fenêtres"],
      ["ne pas coûter un rond", "ne rien coûter", "not to cost a penny", "Ce concert ne coûte pas un rond.", "ne coûte pas un rond"],
      ["être sur la paille", "ne plus avoir d'argent", "to be penniless", "Après la faillite, il était sur la paille.", "sur la paille"],
      ["se serrer la ceinture", "faire des économies, se priver", "to tighten one's belt", "Ce mois-ci, il va falloir se serrer la ceinture.", "se serrer la ceinture"],
      ["en avoir pour son argent", "obtenir quelque chose qui vaut ce qu'on a payé", "to get one's money's worth", "Le spectacle dure trois heures : on en a pour son argent !", "on en a pour son argent"],
      ["acheter chat en poche", "acheter sans vérifier", "to buy a pig in a poke", "Ne payez pas avant de voir l'appartement : n'achetez pas chat en poche.", "n'achetez pas chat en poche"],
      ["coûter un bras", "coûter très cher", "to cost an arm and a leg", "Ce manteau m'a coûté un bras.", "coûté un bras"]
    ]
  };

  W.PROMPTS.push({ id: "fr-b2-9", level: "B2", q: "Est-ce que tu fais attention à ta façon de consommer ? Qu'est-ce qui a changé dans tes habitudes ces dernières années ?", fr: "Do you pay attention to the way you consume? What has changed in your habits in recent years?", time: 180,
    phrases: ["Étant donné que…", "Maintenant que…", "À force de…", "Chaque fois que…", "si bien que…"],
    model: "Oui, de plus en plus. Étant donné que les prix ont beaucoup augmenté, j'ai commencé à comparer avant d'acheter. Maintenant que je connais quelques applications d'occasion, j'achète presque tous mes vêtements de seconde main. À force de réparer mes objets, j'ai même appris à bricoler ! Chaque fois que j'ai envie d'un nouvel appareil, je me demande si j'en ai vraiment besoin, si bien que mes dépenses ont nettement baissé." });

  W.WRITING_GUIDE["b2-9"] = { genre: "An argumentative essay (DELF B2)", genre_fr: "Un essai argumenté (DELF B2)",
    plan: [["Introduce the debate and ask the question.", "Présente le débat et pose la question."], ["First part: why consuming less is necessary (causes).", "Première partie : pourquoi consommer moins est nécessaire (les causes)."], ["Second part: the limits and inequalities (consequences).", "Deuxième partie : les limites et les inégalités (les conséquences)."], ["Use advanced cause, consequence and time markers.", "Utilise des marqueurs avancés de cause, de conséquence et de temps."], ["Conclude with a nuanced answer and a proposal.", "Conclus avec une réponse nuancée et une proposition."]],
    marks: [["Étant donné que les ressources", "étant donné que", "étant donné que"], ["À force d'acheter", "à force de", "à force de"], ["maintenant que je répare", "maintenant que", "maintenant que"], ["si bien que les ménages modestes", "si bien que", "si bien que"], ["Faute d'aides suffisantes", "faute de", "faute de"], ["Tant que les solutions durables resteront", "tant que", "tant que"]] };

  W.COURSE.push({ id: "b2-9", level: "B2", icon: "banknote", title: "Economy and consumption", title_fr: "Économie et consommation",
    intro: "In this unit, you'll talk about money, prices and the way we consume: advanced cause and consequence (étant donné que, faute de, à force de, si bien que), expressing time (à mesure que, tant que, maintenant que), and the French you need to use your consumer rights.",
    intro_fr: "Dans cette unité, tu vas parler d'argent, de prix et de notre façon de consommer : la cause et la conséquence avancées (étant donné que, faute de, à force de, si bien que), l'expression du temps (à mesure que, tant que, maintenant que), et le français qu'il faut pour faire valoir tes droits de consommateur.",
    can: ["Express cause and consequence precisely", "Express time relations (à mesure que, tant que, maintenant que)", "Know your consumer rights in France and the EU", "Call customer service and get a faulty product replaced", "Write an argumentative essay on consumption"],
    can_fr: ["Exprimer la cause et la conséquence avec précision", "Exprimer des relations de temps (à mesure que, tant que, maintenant que)", "Connaître tes droits de consommateur en France et dans l'UE", "Appeler le service client et faire remplacer un produit défectueux", "Écrire un essai argumenté sur la consommation"],
    lessons: [99, 100, 101], vocab: ["economieFR", "consoFR"], reading: "reparer", prompt: "fr-b2-9",
    writing: { task: "Write an argumentative essay (250-280 words): Consuming less: a necessity or a luxury? Weigh the arguments and give a nuanced answer.", task_fr: "Rédige un essai argumenté (250 à 280 mots) : Consommer moins, une nécessité ou un luxe ? Pèse les arguments et donne une réponse nuancée.", words: "250-280",
      tips: ["Depuis quelques années, …", "Étant donné que…", "Toutefois, …", "Faute de…", "En définitive, …"],
      checklist: ["My introduction asks a clear question", "I used at least three cause or consequence markers", "I used at least two time markers", "My conclusion is nuanced", "I wrote between 250 and 280 words"],
      model: "Consommer moins : une nécessité ou un luxe ?\n\nDepuis quelques années, le mot sobriété est partout : dans les discours politiques, dans les magazines et jusque dans nos conversations. Pourtant, consommer moins n'a pas le même sens pour tout le monde. Faut-il y voir une nécessité pour tous, ou un luxe réservé à ceux qui en ont les moyens ?\n\nÉtant donné que les ressources de la planète sont limitées, réduire notre consommation semble indispensable. À force d'acheter des vêtements qu'on porte trois fois et des appareils qu'on remplace au lieu de les réparer, nous produisons une quantité énorme de déchets. Consommer moins, c'est donc d'abord une question de responsabilité collective. C'est aussi une source d'économies : maintenant que je répare mes objets et que j'achète d'occasion, je dépense nettement moins qu'avant.\n\nToutefois, il serait injuste d'ignorer les inégalités. Pour une famille qui a du mal à boucler son budget, la sobriété n'est pas un choix : c'est une contrainte quotidienne. Par ailleurs, les produits durables coûtent souvent plus cher à l'achat, si bien que les ménages modestes n'y ont pas toujours accès. Faute d'aides suffisantes, demander à tous les mêmes efforts reviendrait à faire peser la transition sur les plus fragiles.\n\nEn définitive, consommer moins est une nécessité, mais cela ne doit pas devenir un privilège. Tant que les solutions durables resteront plus chères, le discours sur la sobriété sera difficile à entendre. Il serait donc souhaitable que l'État encourage la réparation et l'occasion, pour que chacun puisse consommer mieux, quels que soient ses revenus." } });
})();
