/* Cours de français, unité A2-4 « Shopping and services / Courses et services » : les pronoms compléments
   directs (le, la, les) et indirects (lui, leur), acheter des vêtements, échanger, se faire rembourser,
   écrire une réclamation. Personnages fictifs, prénoms français, enseignes et produits inventés. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "magasinsFR", icon: "shopping-cart", title: "Shopping", title_fr: "Faire du shopping", level: "A2", words: [
    ["la boutique", "the shop, the boutique", "Une petite boutique de vêtements."],
    ["le centre commercial", "the shopping centre, the mall", "Le centre commercial est ouvert le dimanche."],
    ["les soldes", "the sales", "Les soldes commencent en janvier."],
    ["la taille", "the size (clothes)", "Quelle taille faites-vous ?"],
    ["la pointure", "the shoe size", "Je fais du trente-neuf de pointure."],
    ["la cabine d'essayage", "the fitting room", "Les cabines d'essayage sont au fond."],
    ["le rayon", "the department, the section", "Le rayon enfants est au premier étage."],
    ["la caisse", "the checkout, the till", "Vous pouvez payer à la caisse."],
    ["le ticket de caisse", "the receipt", "Gardez votre ticket de caisse."],
    ["échanger", "to exchange", "Je voudrais échanger ce pull."],
    ["rembourser", "to refund", "Le magasin m'a remboursé."],
    ["une réduction", "a discount", "Il y a une réduction de vingt pour cent."],
    ["une promotion", "a special offer", "Ce shampooing est en promotion."],
    ["en ligne", "online", "J'ai commandé une veste en ligne."],
    ["la livraison", "the delivery", "La livraison est gratuite."],
    ["livrer", "to deliver", "Le colis est livré en deux jours."],
    ["serré / serrée", "tight (m) / tight (f)", "Ce pantalon est trop serré."],
    ["large", "loose, wide (not large!)", "Cette chemise est un peu large."],
    ["aller bien à quelqu'un", "to suit someone", "Cette couleur te va très bien !"]
  ] },
  { id: "servicesFR", icon: "wallet", title: "Services and problems", title_fr: "Services et problèmes", level: "A2", words: [
    ["le colis", "the parcel", "J'attends un colis."],
    ["le coiffeur / la coiffeuse", "the hairdresser (m) / (f)", "J'ai rendez-vous chez le coiffeur."],
    ["le pressing", "the dry cleaner's", "Je dépose ma veste au pressing."],
    ["la réparation", "the repair", "La réparation coûte cinquante euros."],
    ["réparer", "to repair", "Vous pouvez réparer mon téléphone ?"],
    ["cassé / cassée", "broken (m) / broken (f)", "L'écran est cassé."],
    ["un défaut", "a fault, a flaw", "Il y a un défaut sur la manche."],
    ["marcher", "to work (a machine); to walk", "Le lave-linge ne marche plus."],
    ["en panne", "broken down, out of order", "L'ascenseur est en panne."],
    ["la garantie", "the guarantee, the warranty", "L'appareil est sous garantie."],
    ["rendre", "to give back, to return", "Je dois rendre ce livre."],
    ["se plaindre", "to complain", "Je voudrais me plaindre du service."],
    ["la réclamation", "the complaint (formal)", "J'ai fait une réclamation par e-mail."],
    ["le service client", "customer service", "J'ai appelé le service client."],
    ["le remboursement", "the refund", "J'attends mon remboursement."],
    ["la commande", "the order", "Ma commande n'est pas arrivée."]
  ] });

  W.LESSONS.push(
  {
    id: 33, level: "A2", icon: "shopping-cart",
    title: "Je le prends: le, la, les", title_fr: "Je le prends : le, la, les",
    subtitle: "Direct object pronouns, and their place before the verb.", subtitle_fr: "Les pronoms compléments directs, et leur place devant le verbe.",
    body: `
<h2>Replacing a thing or a person</h2>
<p>To avoid repeating a noun, French uses <s-fr>le</s-fr> (him, it), <s-fr>la</s-fr> (her, it) and <s-fr>les</s-fr> (them). Before a vowel, le and la become <s-fr>l'</s-fr>.</p>
<table>
<tr><th>Without a pronoun</th><th>With a pronoun</th></tr>
<tr><td><s-fr>Je prends le pull.</s-fr></td><td><s-fr>Je le prends.</s-fr></td></tr>
<tr><td><s-fr>J'essaie la veste.</s-fr></td><td><s-fr>Je l'essaie.</s-fr></td></tr>
<tr><td><s-fr>J'achète les chaussures.</s-fr></td><td><s-fr>Je les achète.</s-fr></td></tr>
<tr><td><s-fr>Tu connais Paul ?</s-fr></td><td><s-fr>Tu le connais ?</s-fr></td></tr>
</table>
<p>The other persons: <s-fr>me</s-fr> (me), <s-fr>te</s-fr> (you), <s-fr>nous</s-fr> (us), <s-fr>vous</s-fr> (you): <s-fr>Tu m'appelles ce soir ?</s-fr> · <s-fr>Je vous attends.</s-fr></p>
<h2>The big difference with English: the pronoun goes before the verb</h2>
<table>
<tr><th>Tense</th><th>Example</th></tr>
<tr><td>present</td><td><s-fr>Je la regarde.</s-fr> (I'm watching it.)</td></tr>
<tr><td>negative</td><td><s-fr>Je ne la regarde pas.</s-fr></td></tr>
<tr><td>near future</td><td><s-fr>Je vais la regarder.</s-fr> (before the infinitive)</td></tr>
<tr><td>passé composé</td><td><s-fr>Je l'ai regardée.</s-fr> (before avoir)</td></tr>
</table>
<p>In the passé composé, the participle agrees with <s-fr>la</s-fr> or <s-fr>les</s-fr> placed before it: <s-fr>La veste ? Je l'ai achetée hier.</s-fr> You usually don't hear it; you see it in writing.</p>
<div class="tip">Some verbs take a direct object in French but not in English: <s-fr>attendre</s-fr> (to wait for), <s-fr>chercher</s-fr> (to look for), <s-fr>écouter</s-fr> (to listen to), <s-fr>regarder</s-fr> (to look at): <s-fr>Je t'attends.</s-fr> (I'm waiting for you.) · <s-fr>Je la cherche.</s-fr> (I'm looking for it.)</div>
`,
    examples: [
      ["Le pull bleu ? Je le prends.", "The blue jumper? I'll take it."],
      ["Cette veste, je peux l'essayer ?", "This jacket, can I try it on?"],
      ["Tes clés ? Je les cherche partout !", "Your keys? I'm looking for them everywhere!"],
      ["Je ne la connais pas.", "I don't know her."],
      ["Je vais les acheter en ligne.", "I'm going to buy them online."],
      ["La robe rouge ? Je l'ai achetée pendant les soldes.", "The red dress? I bought it in the sales."],
      ["Je t'attends devant le magasin.", "I'm waiting for you in front of the shop."],
      ["Vous m'entendez ?", "Can you hear me?"]
    ],
    quiz: [
      { q: "“The jacket? I'll take it.” — “La veste ? Je ___ prends.”", o: ["le", "la", "lui"], a: 1, ex: "veste is feminine: la." },
      { q: "Where does the pronoun go? “I'm going to buy them.”", o: ["Je les vais acheter.", "Je vais les acheter.", "Je vais acheter les."], a: 1, ex: "Before the infinitive: je vais les acheter." },
      { q: "“I don't know him” is:", o: ["Je ne connais pas le.", "Je ne le connais pas.", "Je le ne connais pas."], a: 1, ex: "ne + pronoun + verb + pas." },
      { q: "“I'm waiting for you” is:", o: ["J'attends pour toi.", "Je t'attends.", "Je attends toi."], a: 1, ex: "attendre takes a direct object: je t'attends." },
      { q: "“The shoes? I bought them.” — “Les chaussures ? Je les ai ___.”", o: ["acheté", "achetées", "achetés"], a: 1, ex: "les (chaussures, feminine plural) before avoir: achetées." }
    ]
  },
  {
    id: 34, level: "A2", icon: "message-circle",
    title: "Je lui parle: lui and leur", title_fr: "Je lui parle : lui et leur",
    subtitle: "Indirect object pronouns, for verbs followed by à.", subtitle_fr: "Les pronoms compléments indirects, pour les verbes suivis de à.",
    body: `
<h2>Verbs with à + a person</h2>
<p>Many verbs of communication and giving are followed by <s-fr>à</s-fr> + a person: <s-fr>parler à</s-fr>, <s-fr>téléphoner à</s-fr>, <s-fr>écrire à</s-fr>, <s-fr>répondre à</s-fr>, <s-fr>demander à</s-fr>, <s-fr>donner à</s-fr>, <s-fr>offrir à</s-fr>, <s-fr>dire à</s-fr>. To replace à + a person, use:</p>
<table>
<tr><th>Person</th><th>Pronoun</th><th>Example</th></tr>
<tr><td>to him, to her</td><td><s-fr>lui</s-fr></td><td><s-fr>Je parle à Léa.</s-fr> → <s-fr>Je lui parle.</s-fr></td></tr>
<tr><td>to them</td><td><s-fr>leur</s-fr></td><td><s-fr>J'écris à mes parents.</s-fr> → <s-fr>Je leur écris.</s-fr></td></tr>
<tr><td>to me, to you, to us, to you</td><td><s-fr>me</s-fr>, <s-fr>te</s-fr>, <s-fr>nous</s-fr>, <s-fr>vous</s-fr></td><td><s-fr>Tu me téléphones ?</s-fr></td></tr>
</table>
<p><s-fr>lui</s-fr> is for a man and for a woman: <s-fr>Je lui offre des fleurs</s-fr> can mean to him or to her.</p>
<h2>Same place as le, la, les</h2>
<p><s-fr>Je ne lui parle pas.</s-fr> · <s-fr>Je vais leur écrire.</s-fr> · <s-fr>Je lui ai répondu.</s-fr> (no agreement with lui and leur).</p>
<h2>Watch out: English and French don't match</h2>
<table>
<tr><th>French</th><th>English</th></tr>
<tr><td><s-fr>téléphoner à quelqu'un</s-fr> → <s-fr>Je lui téléphone.</s-fr></td><td>to call someone (no "to")</td></tr>
<tr><td><s-fr>demander à quelqu'un</s-fr> → <s-fr>Je lui demande.</s-fr></td><td>to ask someone</td></tr>
<tr><td><s-fr>attendre quelqu'un</s-fr> → <s-fr>Je l'attends.</s-fr></td><td>to wait for someone</td></tr>
</table>
<div class="tip">Don't confuse <s-fr>leur</s-fr> the pronoun (to them, never with -s) and <s-fr>leur</s-fr> / <s-fr>leurs</s-fr> the possessive (their): <s-fr>Je leur donne leurs cadeaux.</s-fr> (I give them their presents.)</div>
`,
    examples: [
      ["Je lui téléphone ce soir.", "I'm calling him / her tonight."],
      ["Tu leur as répondu ?", "Did you reply to them?"],
      ["Je vais lui offrir un livre.", "I'm going to give him / her a book."],
      ["Le vendeur nous a donné une réduction.", "The shop assistant gave us a discount."],
      ["Je ne lui parle plus.", "I don't talk to him / her any more."],
      ["Demande-lui le prix !", "Ask him / her the price!"],
      ["Je leur écris une carte postale.", "I'm writing them a postcard."]
    ],
    quiz: [
      { q: "“Je parle à mon frère.” → “Je ___ parle.”", o: ["le", "lui", "leur"], a: 1, ex: "à + one person: lui." },
      { q: "“J'écris à mes amis.” → “Je ___ écris.”", o: ["les", "leur", "leurs"], a: 1, ex: "à + several people: leur (no -s)." },
      { q: "“I'm calling her” is:", o: ["Je l'appelle.", "Je lui téléphone.", "Both are correct."], a: 2, ex: "appeler takes a direct object (la), téléphoner à an indirect one (lui)." },
      { q: "“I didn't answer him” is:", o: ["Je ne lui ai pas répondu.", "Je ne l'ai pas répondu.", "Je lui n'ai pas répondu."], a: 0, ex: "répondre à → lui; ne before the pronoun." },
      { q: "“I give them their presents” is:", o: ["Je leurs donne leur cadeaux.", "Je leur donne leurs cadeaux.", "Je les donne leurs cadeaux."], a: 1, ex: "The pronoun leur never takes -s; the possessive leurs agrees." }
    ]
  },
  {
    id: 35, level: "A2", kind: "functional", icon: "shirt",
    title: "Everyday French: buying clothes, exchanging and complaining", title_fr: "Le français de tous les jours : acheter des vêtements, échanger et réclamer",
    subtitle: "Ask for a size, try things on, and get an exchange or a refund politely.", subtitle_fr: "Demander une taille, essayer, et obtenir un échange ou un remboursement poliment.",
    body: `
<h2>In the shop</h2>
<p><s-fr>Je cherche une veste noire.</s-fr> · <s-fr>Vous l'avez en quarante ?</s-fr> (Do you have it in a 40?) · <s-fr>Je peux l'essayer ?</s-fr> · <s-fr>Où sont les cabines d'essayage ?</s-fr></p>
<p>What you hear: <s-fr>Quelle taille faites-vous ?</s-fr> · <s-fr>Quelle est votre pointure ?</s-fr> (for shoes) · <s-fr>Ça vous va très bien !</s-fr> (It really suits you!)</p>
<h2>Saying what's wrong</h2>
<p><s-fr>C'est trop petit.</s-fr> · <s-fr>C'est un peu serré.</s-fr> (tight) · <s-fr>C'est trop large.</s-fr> (loose) · <s-fr>Vous l'avez en plus grand ?</s-fr> · <s-fr>Vous l'avez dans une autre couleur ?</s-fr></p>
<h2>Exchanging, getting a refund</h2>
<p><s-fr>Je voudrais échanger ce pull : il est trop petit.</s-fr> · <s-fr>Est-ce que vous pouvez me rembourser ?</s-fr> · <s-fr>Il y a un défaut.</s-fr> (There's a fault.) · <s-fr>Voici le ticket de caisse.</s-fr> (Here's the receipt.)</p>
<p>The shop may answer: <s-fr>On peut vous faire un avoir.</s-fr> (We can give you a credit note.) · <s-fr>Vous avez trente jours pour échanger.</s-fr></p>
<div class="tip">False friend: <s-fr>large</s-fr> means wide or loose, not "large". For "large" (size), French says <s-fr>grand</s-fr>: <s-fr>en taille L</s-fr>, <s-fr>en plus grand</s-fr>. And French sizes aren't British or American sizes: always try things on!</div>
`,
    examples: [
      ["Je cherche une veste noire.", "I'm looking for a black jacket."],
      ["Vous l'avez en quarante ?", "Do you have it in a 40?"],
      ["Je peux l'essayer ?", "Can I try it on?"],
      ["Ça vous va très bien !", "It really suits you!"],
      ["C'est un peu serré. Vous l'avez en plus grand ?", "It's a bit tight. Do you have it in a bigger size?"],
      ["Je voudrais échanger ce pull : il y a un défaut.", "I'd like to exchange this jumper: there's a fault."],
      ["Voici le ticket de caisse.", "Here's the receipt."]
    ],
    quiz: [
      { q: "“Can I try it on?” (a jacket) is:", o: ["Je peux l'essayer ?", "Je peux essayer la ?", "Je la peux essayer ?"], a: 0, ex: "The pronoun goes before the infinitive." },
      { q: "“Ça vous va très bien” means:", o: ["It really suits you.", "You're going well.", "It's very good value."], a: 0, ex: "aller bien à quelqu'un = to suit someone." },
      { q: "“Large” in French usually means:", o: ["big", "wide, loose", "expensive"], a: 1, ex: "large = wide, loose; big = grand." },
      { q: "“Here's the receipt” is:", o: ["Voici la recette.", "Voici le ticket de caisse.", "Voici le reçu de cuisine."], a: 1, ex: "le ticket de caisse (une recette = a recipe!)." },
      { q: "“Il y a un défaut” means:", o: ["There's a fault.", "There's a default price.", "It's missing."], a: 0, ex: "un défaut = a fault, a flaw." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    33: {
      gap: [["La veste ? Je ___ prends. (it)", "la"], ["Les chaussures ? Je vais ___ essayer. (them)", "les"], ["Paul ? Je ne ___ connais pas. (him)", "le"], ["Je t'___ devant la gare. (attendre)", "attends"]],
      fix: [["Je vais acheter le.", "Je vais l'acheter.", "The pronoun goes before the infinitive, and le becomes l' before a vowel."], ["J'attends pour toi.", "Je t'attends.", "attendre quelqu'un: no preposition."]],
      task: ["Answer these questions with le, la, les: Tu prends le bus ? Tu regardes la télé le soir ? Tu aimes les épinards ? Tu connais tes voisins ?", "Réponds avec le, la, les : Tu prends le bus ? Tu regardes la télé le soir ? Tu aimes les épinards ? Tu connais tes voisins ?", "Oui, je le prends tous les matins. Non, je ne la regarde jamais. Non, je ne les aime pas du tout ! Oui, je les connais bien."]
    },
    34: {
      gap: [["Je parle à Inès. → Je ___ parle.", "lui"], ["J'écris à mes parents. → Je ___ écris.", "leur"], ["Tu ___ téléphones ce soir ? (me)", "me"], ["Je ne ___ ai pas répondu. (to him)", "lui"]],
      fix: [["Je leurs téléphone tous les dimanches.", "Je leur téléphone tous les dimanches.", "The pronoun leur never takes -s."], ["Je l'ai demandé le chemin.", "Je lui ai demandé le chemin.", "demander à quelqu'un: lui."]],
      task: ["Write what you're going to give or say to four people you know, with lui and leur.", "Écris ce que tu vas offrir ou dire à quatre personnes que tu connais, avec lui et leur.", "Pour son anniversaire, je vais offrir un livre à ma sœur : je vais lui offrir un roman policier. Mes parents ? Je leur téléphone tous les dimanches. Mon collègue m'a aidé, alors je vais lui dire merci. Mes voisins sont partis : je vais leur écrire."]
    },
    35: {
      gap: [["Vous l'avez en ___ grand ? (bigger)", "plus"], ["Quelle ___ faites-vous ? (size)", "taille"], ["Je voudrais ___ ce pull. (exchange)", "échanger"], ["Voici le ___ de caisse. (receipt)", "ticket"]],
      fix: [["Ce pantalon est trop large, j'ai besoin d'une taille plus large.", "Ce pantalon est trop serré, j'ai besoin d'une taille plus grande.|Ce pantalon est trop petit, j'ai besoin d'une taille plus grande.", "For a bigger size: plus grand(e); large means loose."], ["Ça vous va très bon !", "Ça vous va très bien !", "aller bien à quelqu'un: bien, not bon."]],
      task: ["Write the dialogue in a shop: you want to exchange a jumper that's too small.", "Écris le dialogue dans un magasin : tu veux échanger un pull trop petit.", "Bonjour, je voudrais échanger ce pull : il est trop petit. — Vous avez le ticket de caisse ? — Oui, le voici. — Très bien. Vous voulez la taille au-dessus ? — Oui, s'il vous plaît. Je peux l'essayer ?"]
    }
  });

  W.ROLEPLAYS.push(
  { id: "vetements", lesson: 35, level: "A2", icon: "shirt", partner: "Margot", role: "a shop assistant",
    title: "Trying on a jacket", title_fr: "Essayer une veste",
    setting: "You're looking for a jacket in a clothes shop. Margot, the shop assistant, helps you.", setting_fr: "Tu cherches une veste dans un magasin de vêtements. Margot, la vendeuse, t'aide.",
    turns: [
      { p: "Bonjour ! Je peux vous aider ?", fr: "Hello! Can I help you?" },
      { y: ["Oui, merci. Je cherche une veste en cuir, plutôt noire.", "Oui, merci. Je cherche une noire veste en cuir.", "Oui, merci. Je cherche pour une veste en cuir, plutôt noire."], fr: "Yes, thank you. I'm looking for a leather jacket, black if possible.", why: "chercher takes no preposition. Colours come after the noun." },
      { p: "Nous avons ce modèle. Quelle taille faites-vous ?", fr: "We have this model. What size are you?" },
      { y: ["Je fais du quarante, en général. Je peux l'essayer ?", "Je fais du quarante, en général. Je peux essayer la ?", "Je fais du quarante, en général. Je la peux essayer ?"], fr: "I'm usually a 40. Can I try it on?", why: "The pronoun goes before the infinitive: je peux l'essayer." },
      { p: "Bien sûr. Les cabines sont au fond, à gauche. … Alors, elle vous va ?", fr: "Of course. The fitting rooms are at the back, on the left. … So, does it fit?" },
      { y: ["Elle est un peu serrée. Vous l'avez en plus grand ?", "Elle est un peu large. Vous l'avez en plus large ?", "Elle est un peu serrée. Vous l'avez en plus large ?"], fr: "It's a bit tight. Do you have it in a bigger size?", why: "Too tight: serrée; a bigger size: plus grand (large means loose)." },
      { p: "Oui, voilà le quarante-deux. … Ah, elle vous va très bien !", fr: "Yes, here's the 42. … Oh, it really suits you!" },
      { y: ["Merci ! Je la prends. Je peux payer par carte ?", "Merci ! Je le prends. Je peux payer par carte ?", "Merci ! Je prends la. Je peux payer par carte ?"], fr: "Thank you! I'll take it. Can I pay by card?", why: "veste is feminine: je la prends." },
      { p: "Bien sûr. Gardez bien votre ticket : vous avez trente jours pour l'échanger.", fr: "Of course. Keep your receipt: you have thirty days to exchange it." },
      { y: ["Parfait, merci beaucoup. Bonne journée !", "Parfait, merci beaucoup. Bon journée !", "Parfait, merci beaucoup. Bonne jour !"], fr: "Perfect, thank you very much. Have a nice day!", why: "Journée is feminine: bonne journée." }
    ] }
  );

  W.READINGS.push({
    id: "magasinouinternet", level: "A2", icon: "shopping-cart", title: "En magasin ou sur Internet ?", genre: "Forum",
    intro: "On a forum, three people explain where they prefer to shop, and why. Object pronouns, opinions and shopping vocabulary.",
    intro_fr: "Sur un forum, trois personnes expliquent où elles préfèrent faire leurs achats, et pourquoi. Les pronoms compléments, les opinions et le vocabulaire des achats.",
    paragraphs: [
      { en: "Question du jour : vous achetez vos vêtements en magasin ou sur Internet ?", fr: "Question of the day: do you buy your clothes in shops or online?" },
      { en: "Amandine : Moi, je les achète presque toujours en ligne. C'est rapide, et la livraison est souvent gratuite. Le seul problème, c'est la taille : quand un vêtement ne me va pas, je dois le renvoyer, et ça prend du temps.", fr: "Amandine: I almost always buy them online. It's quick, and delivery is often free. The only problem is the size: when something doesn't fit me, I have to send it back, and it takes time." },
      { en: "Kévin : Je préfère les magasins. J'aime toucher les vêtements et les essayer. Et quand je ne sais pas quoi choisir, je demande à la vendeuse et je lui fais confiance. En plus, j'aime aider les petites boutiques de mon quartier.", fr: "Kévin: I prefer shops. I like touching clothes and trying them on. And when I don't know what to choose, I ask the shop assistant and I trust her. What's more, I like supporting the small shops in my neighbourhood." },
      { en: "Sandrine : Un peu les deux ! Je regarde les vêtements en magasin, puis je les commande en ligne pendant les soldes. Une fois, j'ai acheté une robe sur un site, mais elle avait un défaut. J'ai écrit au service client et ils m'ont remboursée en trois jours. Je leur ai dit merci !", fr: "Sandrine: A bit of both! I look at clothes in shops, then I order them online during the sales. Once, I bought a dress on a website, but it had a fault. I wrote to customer service and they refunded me in three days. I thanked them!" }
    ],
    glossary: { "achetez": "buy", "presque": "almost", "rapide": "quick", "gratuite": "free", "seul": "only", "renvoyer": "send back", "prend": "takes", "toucher": "touch", "choisir": "choose", "confiance": "trust", "en plus": "what's more", "aider": "help, support", "défaut": "fault", "remboursée": "refunded" },
    questions: [
      { q: "Où Amandine achète ses vêtements ?", o: ["En magasin", "En ligne", "Au marché"], a: 1 },
      { q: "Quel est le problème des achats en ligne pour Amandine ?", o: ["La taille", "Le prix", "La livraison"], a: 0 },
      { q: "Pourquoi Kévin préfère les magasins ?", o: ["Il aime toucher et essayer les vêtements.", "C'est moins cher.", "Il n'a pas Internet."], a: 0 },
      { q: "Qu'est-ce que Sandrine fait pendant les soldes ?", o: ["Elle va dans les petites boutiques.", "Elle commande en ligne.", "Elle ne fait pas d'achats."], a: 1 },
      { q: "Qu'est-ce qui s'est passé avec la robe de Sandrine ?", o: ["Elle était trop petite.", "Elle avait un défaut, et Sandrine a été remboursée.", "Elle n'est jamais arrivée."], a: 1 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-a2-4", unit: "a2-4", level: "A2", icon: "shopping-cart",
    title: "Un échange difficile", title_fr: "Un échange difficile",
    context: "Benoît wants to return a jumper he bought as a present. Rémi, at the shop, explains the rules.", context_fr: "Benoît veut rapporter un pull qu'il a acheté comme cadeau. Rémi, au magasin, explique les règles.",
    words: [["rapporter", "to bring back"], ["un avoir", "a credit note"], ["l'étiquette", "the label, the tag"], ["la taille au-dessus", "the next size up"], ["porter", "to wear"]],
    lines: [["Benoît", "Bonjour. J'ai acheté ce pull la semaine dernière pour mon frère, mais il ne lui va pas.", "fr-FR"], ["Rémi", "D'accord. Il est trop petit ?", "fr-FR"], ["Benoît", "Oui, beaucoup trop petit. Je voudrais être remboursé, s'il vous plaît.", "fr-FR"], ["Rémi", "Vous avez le ticket de caisse ?", "fr-FR"], ["Benoît", "Oui, le voici.", "fr-FR"], ["Rémi", "Merci. Ah, je suis désolé : pour les articles en promotion, on ne rembourse pas. Mais je peux vous faire un avoir, ou un échange.", "fr-FR"], ["Benoît", "Un avoir ? C'est-à-dire ?", "fr-FR"], ["Rémi", "C'est un bon d'achat : vous l'utilisez dans le magasin, pendant un an.", "fr-FR"], ["Benoît", "Bon… Alors je préfère l'échanger. Vous l'avez dans la taille au-dessus ?", "fr-FR"], ["Rémi", "Oui, en L. Votre frère l'a porté ?", "fr-FR"], ["Benoît", "Non, jamais ! Regardez, il a encore l'étiquette.", "fr-FR"], ["Rémi", "Parfait. Voilà le pull en L. Et si ça ne va toujours pas, revenez me voir !", "fr-FR"]],
    gist: ["Pourquoi Benoît vient au magasin ?", ["Pour échanger ou rendre un pull", "Pour acheter un cadeau", "Pour se plaindre du vendeur"]],
    detail: [["Pourquoi le pull ne va pas ?", ["Il est trop petit.", "Il a un défaut.", "La couleur ne plaît pas."]], ["Pourquoi le magasin ne rembourse pas ?", ["Le pull était en promotion.", "Benoît n'a pas le ticket.", "Le pull est porté."]], ["Qu'est-ce qu'un avoir ?", ["Un bon d'achat pour le magasin", "Un remboursement en espèces", "Une réduction sur Internet"]], ["Qu'est-ce que Benoît choisit finalement ?", ["Un échange en L", "Un avoir", "Un remboursement"]]],
    decode: ["pour les articles en promotion, on ne rembourse pas", "Vous l'avez dans la taille au-dessus ?"],
    tip: "Shop assistants often say no politely with je suis désolé and then offer another solution (mais je peux…). Listen for mais: the useful part of the answer usually comes just after it.", tip_fr: "Les vendeurs disent souvent non poliment avec je suis désolé, puis proposent une autre solution (mais je peux…). Guette le mais : la partie utile de la réponse vient en général juste après."
  }]);

  W.PROMPTS.push({ id: "fr-a2-4", level: "A2", q: "Tu préfères acheter en magasin ou sur Internet ? Pourquoi ? Raconte ton dernier achat.", fr: "Do you prefer to buy things in shops or online? Why? Tell me about the last thing you bought.", time: 120,
    phrases: ["Je préfère… parce que…", "En magasin, je peux…", "Sur Internet, c'est…", "La dernière fois, j'ai acheté…", "Je l'ai… / je lui ai…"],
    model: "Je préfère acheter en magasin, parce que j'aime essayer les vêtements et demander conseil. Sur Internet, c'est pratique, mais je me trompe souvent de taille. La dernière fois, j'ai acheté des chaussures de sport dans une petite boutique près de chez moi. Le vendeur m'a beaucoup aidé : il m'a conseillé un modèle très confortable. Je les porte tous les jours !" });

  W.WRITING_GUIDE["a2-4"] = { genre: "A complaint email", genre_fr: "Un e-mail de réclamation",
    plan: [["A formal greeting.", "Une formule de politesse au début."], ["What you ordered, and when.", "Ce que tu as commandé, et quand."], ["The problem, clearly.", "Le problème, clairement."], ["What you would like: an exchange or a refund.", "Ce que tu souhaites : un échange ou un remboursement."], ["A formal ending.", "Une formule de politesse à la fin."]],
    marks: [["Madame, Monsieur,", "a formal greeting", "une formule d'appel formelle"], ["j'ai commandé", "the passé composé", "le passé composé"], ["Je l'ai reçue", "a direct pronoun before avoir", "un pronom direct devant avoir"], ["il y a un défaut", "the problem", "le problème"], ["Je voudrais l'échanger", "the pronoun before the infinitive", "le pronom devant l'infinitif"], ["Cordialement,", "a formal ending", "une formule finale formelle"]] };

  W.COURSE.push({ id: "a2-4", level: "A2", icon: "shopping-cart", title: "Shopping and services", title_fr: "Courses et services",
    intro: "In this unit, you'll go shopping and deal with problems: the object pronouns le, la, les, lui and leur, which go before the verb, buying clothes, exchanging, and writing a complaint.",
    intro_fr: "Dans cette unité, tu vas faire des achats et régler des problèmes : les pronoms compléments le, la, les, lui et leur, qui se placent devant le verbe, acheter des vêtements, faire un échange et écrire une réclamation.",
    can: ["Use the direct object pronouns le, la, les", "Use the indirect object pronouns lui and leur", "Buy clothes, ask for a size and try things on", "Exchange an item and write a complaint"],
    can_fr: ["Utiliser les pronoms compléments directs le, la, les", "Utiliser les pronoms compléments indirects lui et leur", "Acheter des vêtements, demander une taille et essayer", "Échanger un article et écrire une réclamation"],
    lessons: [33, 34, 35], vocab: ["magasinsFR", "servicesFR"], reading: "magasinouinternet", prompt: "fr-a2-4",
    writing: { task: "You ordered a jacket online, but it has a fault. Write an email (80-100 words) to customer service: what you ordered, the problem, and what you would like.", task_fr: "Tu as commandé une veste en ligne, mais elle a un défaut. Écris un e-mail (80 à 100 mots) au service client : ce que tu as commandé, le problème, et ce que tu souhaites.", words: "80-100",
      tips: ["Madame, Monsieur,", "Le…, j'ai commandé…", "Je l'ai reçue…, mais…", "Je voudrais l'échanger… / Merci de me rembourser…", "Cordialement,"],
      checklist: ["I used a formal greeting and ending", "I used the passé composé to tell what happened", "I used at least two object pronouns (le, la, les, lui…)", "I said clearly what I want", "I stayed between 80 and 100 words"],
      model: "Madame, Monsieur,\n\nLe 3 mars, j'ai commandé une veste en laine bleue sur votre site, en taille M (commande numéro 4587). Je l'ai reçue hier, mais il y a un défaut : une manche est déchirée. De plus, la couleur n'est pas la même que sur la photo. Je ne l'ai pas portée et je l'ai remise dans son emballage. Je voudrais l'échanger contre la même veste, sans défaut. Si ce n'est pas possible, merci de me rembourser.\n\nCordialement,\nChloé Martin" } });
})();
