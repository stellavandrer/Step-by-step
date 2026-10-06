/* Cours de français, unité A1-5 « Food and shopping / Au marché » : le partitif (du, de la, des), les quantités,
   manger, boire, prendre, commander au café et à la boulangerie, les nombres de 70 à 100 et les prix.
   Personnages fictifs, prénoms français. Faits vérifiables seulement : septante et nonante en Belgique et en
   Suisse, le comté et le chèvre, le miel de lavande. Les prix sont des exemples, et les calculs sont justes. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "nourritureFR", icon: "shopping-basket", title: "Food", title_fr: "La nourriture", level: "A1", words: [
    ["le pain", "bread", "Une baguette, c'est du pain."],
    ["la baguette", "the baguette (French stick)", "Une baguette, s'il vous plaît."],
    ["le beurre", "butter", "Du pain avec du beurre."],
    ["la confiture", "jam", "J'adore la confiture de fraises."],
    ["l'œuf", "the egg (plural: les œufs)", "Six œufs, s'il vous plaît."],
    ["le lait", "milk", "Un café au lait."],
    ["le fromage", "cheese", "Il y a beaucoup de fromages en France."],
    ["la viande", "meat", "Je ne mange pas de viande."],
    ["le poulet", "chicken", "On mange du poulet ce soir."],
    ["le poisson", "fish", "Le vendredi, je mange du poisson."],
    ["les légumes", "vegetables", "Il faut manger des légumes."],
    ["la pomme", "the apple", "Un kilo de pommes, s'il vous plaît."],
    ["la fraise", "the strawberry", "Les fraises sont délicieuses en juin."],
    ["la pomme de terre", "the potato", "Des pommes de terre avec du poulet."],
    ["les pâtes", "pasta", "Les enfants adorent les pâtes."],
    ["le riz", "rice", "Du riz avec du poisson."],
    ["le sucre", "sugar", "Un café sans sucre, s'il vous plaît."],
    ["le sel", "salt", "Tu peux me passer le sel ?"],
    ["le gâteau", "the cake", "Un gâteau au chocolat !"],
    ["la soupe", "soup", "En hiver, je mange de la soupe."]
  ] },
  { id: "boissonsFR", icon: "coffee", title: "Drinks and quantities", title_fr: "Les boissons et les quantités", level: "A1", words: [
    ["l'eau", "water (feminine)", "Une carafe d'eau, s'il vous plaît."],
    ["le café", "coffee; the café", "Un café, s'il vous plaît."],
    ["le thé", "tea", "Je bois du thé le matin."],
    ["le jus d'orange", "orange juice", "Un jus d'orange pressée."],
    ["le vin", "wine", "Un verre de vin rouge."],
    ["la bière", "beer", "Une bière, s'il vous plaît."],
    ["le chocolat chaud", "hot chocolate", "Un chocolat chaud pour les enfants."],
    ["un verre de", "a glass of", "Un verre d'eau, s'il te plaît."],
    ["une bouteille de", "a bottle of", "Une bouteille de vin pour le dîner."],
    ["une tasse de", "a cup of", "Une tasse de thé ?"],
    ["un kilo de", "a kilo of", "Un kilo de tomates."],
    ["un morceau de", "a piece of", "Un morceau de fromage."],
    ["une tranche de", "a slice of", "Deux tranches de jambon."],
    ["un paquet de", "a packet of", "Un paquet de pâtes."],
    ["beaucoup de", "a lot of, many, much", "Je bois beaucoup d'eau."],
    ["un peu de", "a little", "Un peu de sucre ?"],
    ["l'addition", "the bill (in a restaurant)", "L'addition, s'il vous plaît."],
    ["à emporter", "to take away", "C'est à emporter."]
  ] },
  { id: "nombres3FR", icon: "euro", title: "Numbers from 70 to 100, and money", title_fr: "Les nombres de 70 à 100, et l'argent", level: "A1", words: [
    ["soixante-dix", "seventy (sixty-ten)", "Il a soixante-dix ans."],
    ["soixante et onze", "seventy-one", "Le bus soixante et onze."],
    ["soixante-quinze", "seventy-five", "Soixante-quinze centimes."],
    ["quatre-vingts", "eighty (four twenties)", "Ma grand-mère a quatre-vingts ans."],
    ["quatre-vingt-un", "eighty-one (no et)", "Quatre-vingt-un euros."],
    ["quatre-vingt-cinq", "eighty-five", "La chambre quatre-vingt-cinq."],
    ["quatre-vingt-dix", "ninety (four twenties ten)", "Quatre-vingt-dix kilomètres."],
    ["quatre-vingt-dix-neuf", "ninety-nine", "Quatre-vingt-dix-neuf euros !"],
    ["cent", "a hundred", "Cent grammes de jambon."],
    ["un euro", "a euro", "Une baguette coûte un euro vingt."],
    ["un centime", "a cent", "Ça fait cinquante centimes."],
    ["la monnaie", "change; currency", "Voici votre monnaie."],
    ["payer", "to pay", "Je peux payer par carte ?"],
    ["en espèces", "in cash", "Je paie en espèces."],
    ["cher / chère", "expensive (m) / expensive (f)", "C'est un peu cher."],
    ["coûter", "to cost", "Ça coûte combien ?"]
  ] });

  W.LESSONS.push(
  {
    id: 15, level: "A1", icon: "shopping-basket",
    title: "Du pain, de la confiture: the partitive", title_fr: "Du pain, de la confiture : le partitif",
    subtitle: "Some bread, some jam: French needs an article where English often has none.", subtitle_fr: "Du pain, de la confiture : le français met un article là où l'anglais n'en met souvent pas.",
    body: `
<h2>Some: du, de la, de l', des</h2>
<p>When you talk about an amount you don't count (some bread, some water), French uses the partitive article:</p>
<table>
<tr><th></th><th>French</th><th>English</th></tr>
<tr><td>masculine</td><td><s-fr>du pain</s-fr></td><td>(some) bread</td></tr>
<tr><td>feminine</td><td><s-fr>de la confiture</s-fr></td><td>(some) jam</td></tr>
<tr><td>before a vowel</td><td><s-fr>de l'eau</s-fr></td><td>(some) water</td></tr>
<tr><td>plural</td><td><s-fr>des pommes</s-fr></td><td>(some) apples</td></tr>
</table>
<p>English often leaves out "some": <s-fr>Je mange du pain.</s-fr> (I eat bread.) French can't: there must be an article.</p>
<h2>Liking or eating?</h2>
<p>With <s-fr>aimer</s-fr>, <s-fr>adorer</s-fr>, <s-fr>détester</s-fr>, you talk about the thing in general: <s-fr>le</s-fr>, <s-fr>la</s-fr>, <s-fr>les</s-fr>. With <s-fr>manger</s-fr>, <s-fr>boire</s-fr>, <s-fr>acheter</s-fr>, you talk about an amount: <s-fr>du</s-fr>, <s-fr>de la</s-fr>, <s-fr>des</s-fr>.</p>
<p><s-fr>J'aime le café, alors je bois du café tous les matins.</s-fr> (I like coffee, so I drink coffee every morning.)</p>
<h2>After a negative, and after a quantity: just de</h2>
<p><s-fr>Je ne mange pas de viande.</s-fr> · <s-fr>Il n'y a pas d'eau.</s-fr></p>
<p><s-fr>un kilo de tomates</s-fr> · <s-fr>une bouteille d'eau</s-fr> · <s-fr>beaucoup de sucre</s-fr> · <s-fr>un peu de lait</s-fr> · <s-fr>un morceau de fromage</s-fr>. No du, de la or des after a quantity.</p>
<div class="tip">Dishes are named with <s-fr>à</s-fr> + the flavour: <s-fr>un gâteau au chocolat</s-fr>, <s-fr>une tarte aux pommes</s-fr>, <s-fr>une glace à la vanille</s-fr>. Remember: à + le = au, à + les = aux.</div>
`,
    examples: [
      ["Je mange du pain avec de la confiture.", "I eat bread with jam."],
      ["Tu veux de l'eau ?", "Do you want some water?"],
      ["J'achète des pommes au marché.", "I buy apples at the market."],
      ["J'aime le fromage, mais je ne mange pas de viande.", "I like cheese, but I don't eat meat."],
      ["Un kilo de tomates, s'il vous plaît.", "A kilo of tomatoes, please."],
      ["Je bois beaucoup d'eau.", "I drink a lot of water."],
      ["Il n'y a plus de lait.", "There's no milk left."],
      ["Une tarte aux pommes, s'il vous plaît.", "An apple tart, please."]
    ],
    quiz: [
      { q: "Complete: “Je mange ___ pain.”", o: ["le", "du", "de"], a: 1, ex: "An amount of bread: du pain." },
      { q: "Complete: “Elle boit ___ eau.”", o: ["de l'", "du", "de la"], a: 0, ex: "Before a vowel: de l'eau." },
      { q: "“I don't eat meat” is:", o: ["Je ne mange pas de la viande.", "Je ne mange pas de viande.", "Je ne mange pas viande."], a: 1, ex: "After a negative: de." },
      { q: "“A bottle of water” is:", o: ["une bouteille de l'eau", "une bouteille d'eau", "une bouteille des eaux"], a: 1, ex: "After a quantity: de / d'." },
      { q: "Complete: “J'adore ___ chocolat.”", o: ["du", "le", "de"], a: 1, ex: "With adorer, the thing in general: le." }
    ]
  },
  {
    id: 16, level: "A1", icon: "utensils",
    title: "Manger, boire, prendre: eating and drinking", title_fr: "Manger, boire, prendre : manger et boire",
    subtitle: "Three verbs for every meal, two of them irregular.", subtitle_fr: "Trois verbes pour chaque repas, dont deux irréguliers.",
    body: `
<h2>Prendre (to take, to have)</h2>
<table>
<tr><th>Prendre</th><th>Boire (to drink)</th></tr>
<tr><td><s-fr>je prends</s-fr></td><td><s-fr>je bois</s-fr></td></tr>
<tr><td><s-fr>tu prends</s-fr></td><td><s-fr>tu bois</s-fr></td></tr>
<tr><td><s-fr>il prend</s-fr></td><td><s-fr>il boit</s-fr></td></tr>
<tr><td><s-fr>nous prenons</s-fr></td><td><s-fr>nous buvons</s-fr></td></tr>
<tr><td><s-fr>vous prenez</s-fr></td><td><s-fr>vous buvez</s-fr></td></tr>
<tr><td><s-fr>ils prennent</s-fr></td><td><s-fr>ils boivent</s-fr></td></tr>
</table>
<p><s-fr>prendre</s-fr> is the verb for ordering and for meals: <s-fr>Je prends un café.</s-fr> (I'll have a coffee.) · <s-fr>Je prends le petit-déjeuner à sept heures.</s-fr> It's also the verb for transport: <s-fr>Je prends le bus.</s-fr></p>
<p>Listen to the plural: <s-fr>ils prennent</s-fr> has an n sound that <s-fr>il prend</s-fr> doesn't have, and <s-fr>ils boivent</s-fr> has a v. That's how you hear the plural.</p>
<h2>Manger (to eat): regular, with one detail</h2>
<p><s-fr>manger</s-fr> is a regular -er verb, but keeps its e with nous: <s-fr>nous mangeons</s-fr>.</p>
<h2>The meals</h2>
<p><s-fr>le petit-déjeuner</s-fr> (breakfast) · <s-fr>le déjeuner</s-fr> (lunch) · <s-fr>le goûter</s-fr> (the afternoon snack, especially for children) · <s-fr>le dîner</s-fr> (dinner). The verbs <s-fr>déjeuner</s-fr> and <s-fr>dîner</s-fr> mean to have lunch and to have dinner.</p>
<div class="tip">At the table: <s-fr>Bon appétit !</s-fr> (Enjoy your meal!) · <s-fr>C'est délicieux !</s-fr> · <s-fr>Je n'ai plus faim, merci.</s-fr> (I'm full, thank you.) Don't say "je suis plein": it doesn't mean "I'm full" in this sense.</div>
`,
    examples: [
      ["Je prends un café, s'il vous plaît.", "I'll have a coffee, please."],
      ["Qu'est-ce que tu bois ?", "What are you drinking?"],
      ["Nous prenons le petit-déjeuner ensemble.", "We have breakfast together."],
      ["Ils boivent du thé.", "They drink tea."],
      ["Vous prenez le bus ou le métro ?", "Do you take the bus or the underground?"],
      ["Nous mangeons à midi et demi.", "We eat at half past twelve."],
      ["Bon appétit !", "Enjoy your meal!"],
      ["Je n'ai plus faim, merci.", "I'm full, thank you."]
    ],
    quiz: [
      { q: "Complete: “Ils ___ du thé.” (boire)", o: ["boivent", "buvent", "boient"], a: 0, ex: "ils boivent." },
      { q: "Complete: “Nous ___ le train.” (prendre)", o: ["prennons", "prenons", "prendons"], a: 1, ex: "nous prenons (one n)." },
      { q: "At the café, “I'll have a tea” is:", o: ["Je prends un thé.", "Je bois un thé maintenant.", "J'ai un thé."], a: 0, ex: "To order: je prends…" },
      { q: "“I'm full” (after a meal) is:", o: ["Je suis plein.", "Je n'ai plus faim.", "Je suis fini."], a: 1, ex: "Je n'ai plus faim. Je suis plein doesn't mean that." },
      { q: "Le goûter is…", o: ["breakfast", "the afternoon snack", "dinner"], a: 1, ex: "le goûter: the afternoon snack, around 4 pm." }
    ]
  },
  {
    id: 17, level: "A1", kind: "functional", icon: "croissant",
    title: "Everyday French: at the café and the shops, prices from 70 to 100", title_fr: "Le français de tous les jours : au café et dans les magasins, les prix de 70 à 100",
    subtitle: "Order politely, ask how much, understand the price and pay.", subtitle_fr: "Commander poliment, demander le prix, le comprendre et payer.",
    body: `
<h2>Ordering</h2>
<p><s-fr>Je voudrais une baguette, s'il vous plaît.</s-fr> (I would like…) · <s-fr>Je vais prendre un croissant.</s-fr> (I'll have…) · <s-fr>Pour moi, un café.</s-fr> (For me, a coffee.) Avoid <s-fr>Je veux</s-fr> (I want): it sounds rude to a shopkeeper.</p>
<h2>What you hear</h2>
<p><s-fr>Qu'est-ce que je vous sers ?</s-fr> (What can I get you?) · <s-fr>Et avec ceci ?</s-fr> (Anything else?) · <s-fr>Sur place ou à emporter ?</s-fr> (Eat in or take away?) · <s-fr>Ce sera tout ?</s-fr> (Will that be all?)</p>
<h2>Prices</h2>
<p><s-fr>C'est combien ?</s-fr> · <s-fr>Ça coûte combien ?</s-fr> (How much is it?) · <s-fr>Ça fait combien ?</s-fr> (How much is it altogether?) · <s-fr>Ça fait sept euros quatre-vingt-dix.</s-fr> (€7.90) · <s-fr>Je peux payer par carte ?</s-fr> · <s-fr>Je paie en espèces.</s-fr> (in cash) · <s-fr>L'addition, s'il vous plaît.</s-fr> (The bill, please.)</p>
<h2>The numbers from 70 to 100</h2>
<p>From 70, French counts in twenties:</p>
<table>
<tr><th>Number</th><th>French</th><th>Literally</th></tr>
<tr><td>70</td><td><s-fr>soixante-dix</s-fr></td><td>sixty-ten</td></tr>
<tr><td>71</td><td><s-fr>soixante et onze</s-fr></td><td>sixty and eleven</td></tr>
<tr><td>75</td><td><s-fr>soixante-quinze</s-fr></td><td>sixty-fifteen</td></tr>
<tr><td>80</td><td><s-fr>quatre-vingts</s-fr></td><td>four twenties</td></tr>
<tr><td>81</td><td><s-fr>quatre-vingt-un</s-fr></td><td>four twenty one (no et)</td></tr>
<tr><td>90</td><td><s-fr>quatre-vingt-dix</s-fr></td><td>four twenty ten</td></tr>
<tr><td>99</td><td><s-fr>quatre-vingt-dix-neuf</s-fr></td><td>four twenty nineteen</td></tr>
<tr><td>100</td><td><s-fr>cent</s-fr></td><td>a hundred</td></tr>
</table>
<p><s-fr>quatre-vingts</s-fr> takes an -s only when nothing follows it: <s-fr>quatre-vingts</s-fr> but <s-fr>quatre-vingt-deux</s-fr>.</p>
<div class="tip">In Belgium and Switzerland, people use simpler words: <s-fr>septante</s-fr> (70) and <s-fr>nonante</s-fr> (90). You'll hear them, but in France, it's soixante-dix and quatre-vingt-dix.</div>
`,
    examples: [
      ["Je voudrais une baguette et deux croissants, s'il vous plaît.", "I'd like a baguette and two croissants, please."],
      ["Et avec ceci ?", "Anything else?"],
      ["Sur place ou à emporter ?", "Eat in or take away?"],
      ["Ça fait combien ?", "How much is it altogether?"],
      ["Ça fait quatre-vingt-quinze euros.", "That's 95 euros."],
      ["Je peux payer par carte ?", "Can I pay by card?"],
      ["L'addition, s'il vous plaît.", "The bill, please."]
    ],
    quiz: [
      { q: "The polite way to order is:", o: ["Je veux un café.", "Je voudrais un café, s'il vous plaît.", "Donnez café."], a: 1, ex: "Je voudrais… s'il vous plaît." },
      { q: "“Et avec ceci ?” means:", o: ["Anything else?", "With what?", "Is that all?"], a: 0, ex: "Et avec ceci ? = Anything else?" },
      { q: "80 is:", o: ["huitante", "quatre-vingts", "quatre-vingt-dix"], a: 1, ex: "80 = four twenties: quatre-vingts. Huitante is only used in some parts of Switzerland." },
      { q: "92 is:", o: ["quatre-vingt-douze", "quatre-vingts-douze", "nonante-deux"], a: 0, ex: "92 = four twenty twelve: quatre-vingt-douze (no -s: something follows)." },
      { q: "“Can I pay by card?” is:", o: ["Je peux payer par carte ?", "Je peux payer en carte ?", "Je peux payer avec carte ?"], a: 0, ex: "par carte; en espèces (in cash)." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    15: {
      gap: [["Le matin, je mange ___ pain. (some)", "du"], ["Tu veux ___ confiture ? (some)", "de la"], ["Je ne bois pas ___ café. (negative)", "de"], ["Un kilo ___ tomates, s'il vous plaît. (of)", "de"]],
      fix: [["Je mange de le fromage.", "Je mange du fromage.", "de + le = du."], ["Il n'y a pas du lait.", "Il n'y a pas de lait.", "After a negative: de."]],
      task: ["Write what you eat and drink for breakfast, and what you never eat.", "Écris ce que tu manges et bois au petit-déjeuner, et ce que tu ne manges jamais.", "Au petit-déjeuner, je bois du thé avec un peu de lait. Je mange du pain avec du beurre et de la confiture, et parfois des fruits. Je ne mange jamais d'œufs le matin."]
    },
    16: {
      gap: [["Je ___ un café, s'il vous plaît. (prendre)", "prends"], ["Nous ___ de l'eau. (boire)", "buvons"], ["Ils ___ le bus. (prendre)", "prennent"], ["Vous ___ du vin ? (boire)", "buvez"]],
      fix: [["Nous prennons le train.", "Nous prenons le train.", "nous prenons: only one n."], ["Je suis plein, merci.", "Je n'ai plus faim, merci.", "To say you're full after a meal: je n'ai plus faim."]],
      task: ["Describe your meals on a normal day: when, what you eat, what you drink.", "Décris tes repas un jour normal : à quelle heure, ce que tu manges, ce que tu bois.", "Je prends le petit-déjeuner à sept heures : je bois un café. À midi, je mange à la cantine. Le soir, nous dînons à vingt heures, et mes enfants boivent un verre de lait."]
    },
    17: {
      gap: [["Je ___ une baguette, s'il vous plaît. (would like)", "voudrais"], ["Ça fait ___ ? (how much)", "combien"], ["Je peux payer ___ carte ? (by)", "par"], ["80 = ___", "quatre-vingts"]],
      fix: [["Je veux un croissant.", "Je voudrais un croissant, s'il vous plaît.|Je voudrais un croissant.", "Je veux sounds rude in a shop: je voudrais."], ["Ça fait soixante-dix-un euros.", "Ça fait soixante et onze euros.", "71 = sixty and eleven: soixante et onze."]],
      task: ["Write a short dialogue at the bakery: you order, ask the price and pay.", "Écris un court dialogue à la boulangerie : tu commandes, tu demandes le prix et tu paies.", "Bonjour ! Je voudrais une baguette et deux croissants, s'il vous plaît. — Et avec ceci ? — C'est tout, merci. Ça fait combien ? — Trois euros soixante. — Voilà. Bonne journée !"]
    }
  });

  W.ROLEPLAYS.push(
  { id: "aucafe", lesson: 17, level: "A1", icon: "coffee", partner: "Maxime", role: "a waiter",
    title: "At the café", title_fr: "Au café",
    setting: "You sit down on the terrace of a café in the morning. Maxime, the waiter, comes to take your order.", setting_fr: "Tu t'assois en terrasse d'un café, le matin. Maxime, le serveur, vient prendre ta commande.",
    turns: [
      { p: "Bonjour ! Qu'est-ce que je vous sers ?", fr: "Hello! What can I get you?" },
      { y: ["Bonjour ! Je voudrais un café et un croissant, s'il vous plaît.", "Bonjour ! Je veux café et croissant.", "Bonjour ! Je voudrais un café et une croissant, s'il vous plaît."], fr: "Hello! I'd like a coffee and a croissant, please.", why: "Je voudrais… s'il vous plaît is polite. Croissant is masculine: un croissant." },
      { p: "Un café et un croissant. Et avec ceci ?", fr: "A coffee and a croissant. Anything else?" },
      { y: ["Et une bouteille d'eau, s'il vous plaît.", "Et une bouteille de l'eau, s'il vous plaît.", "Et une bouteille des eaux, s'il vous plaît."], fr: "And a bottle of water, please.", why: "After a quantity, just de (d' before a vowel): une bouteille d'eau." },
      { p: "Voilà ! Bon appétit !", fr: "Here you are! Enjoy!" },
      { y: ["Merci ! … Excusez-moi, l'addition, s'il vous plaît.", "Merci ! … Excusez-moi, la note, s'il te plaît.", "Merci ! … Excusez-moi, le addition, s'il vous plaît."], fr: "Thanks! … Excuse me, the bill, please.", why: "With a waiter: s'il vous plaît. L'addition, before a vowel." },
      { p: "Bien sûr. Ça fait six euros quatre-vingt-dix.", fr: "Of course. That's €6.90." },
      { y: ["Je peux payer par carte ?", "Je peux payer en carte ?", "Je peux payer par la carte ?"], fr: "Can I pay by card?", why: "Par carte, without an article. En espèces = in cash." },
      { p: "Oui, bien sûr. Voilà, c'est bon. Merci et bonne journée !", fr: "Yes, of course. There you go, that's done. Thank you and have a nice day!" },
      { y: ["Merci, bonne journée à vous aussi !", "Merci, bon journée à vous aussi !", "Merci, bonne journée à toi aussi !"], fr: "Thank you, have a nice day too!", why: "Journée is feminine: bonne. With a waiter you say vous: à vous aussi." }
    ] }
  );

  W.READINGS.push({
    id: "marchesamedi", level: "A1", icon: "shopping-basket", title: "Le marché du samedi", genre: "Story",
    intro: "Every Saturday, Lucie goes to the market with her grandmother. The partitive, quantities, prices and food.",
    intro_fr: "Tous les samedis, Lucie va au marché avec sa grand-mère. Le partitif, les quantités, les prix et la nourriture.",
    paragraphs: [
      { en: "Tous les samedis, Lucie va au marché avec sa grand-mère, Jeanne. Le marché est sur la place, à côté de la mairie. Il y a du monde et ça sent bon !", fr: "Every Saturday, Lucie goes to the market with her grandmother, Jeanne. The market is on the square, next to the town hall. It's busy, and it smells good!" },
      { en: "D'abord, elles achètent des légumes : un kilo de tomates, des carottes et une salade. « Ça fait combien ? » demande Jeanne. « Quatre euros quatre-vingts, madame », répond le marchand.", fr: "First, they buy vegetables: a kilo of tomatoes, some carrots and a lettuce. “How much is it?” asks Jeanne. “Four euros eighty, madam,” answers the stallholder." },
      { en: "Ensuite, elles vont chez le fromager. Jeanne prend un morceau de comté et du chèvre. Lucie n'aime pas le fromage, mais elle adore le miel : elle achète un pot de miel de lavande.", fr: "Then they go to the cheese seller. Jeanne takes a piece of Comté and some goat's cheese. Lucie doesn't like cheese, but she loves honey: she buys a jar of lavender honey." },
      { en: "Pour finir, elles boivent quelque chose en terrasse. Jeanne prend un café, et Lucie un chocolat chaud avec un croissant. « Le marché, c'est mon moment préféré de la semaine », dit Jeanne.", fr: "To finish, they have a drink on a café terrace. Jeanne has a coffee, and Lucie a hot chocolate with a croissant. “The market is my favourite moment of the week,” says Jeanne." }
    ],
    glossary: { "monde": "people (il y a du monde = it's busy)", "sent": "smells", "achètent": "buy", "carottes": "carrots", "salade": "lettuce", "marchand": "stallholder", "fromager": "cheese seller", "morceau": "piece", "chèvre": "goat's cheese", "miel": "honey", "pot": "jar", "lavande": "lavender", "terrasse": "café terrace", "préféré": "favourite" },
    questions: [
      { q: "Quand est-ce que Lucie va au marché ?", o: ["Le dimanche", "Le samedi", "Tous les jours"], a: 1 },
      { q: "Qu'est-ce qu'elles achètent d'abord ?", o: ["Du fromage", "Des légumes", "Du miel"], a: 1 },
      { q: "Les légumes coûtent combien ?", o: ["Quatre euros quatre-vingts", "Quatre-vingts euros", "Quatorze euros"], a: 0 },
      { q: "Pourquoi Lucie n'achète pas de fromage ?", o: ["C'est trop cher.", "Elle n'aime pas le fromage.", "Il n'y a pas de fromager."], a: 1 },
      { q: "Qu'est-ce que Lucie boit ?", o: ["Un café", "Un chocolat chaud", "Un jus d'orange"], a: 1 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-a1-5", unit: "a1-5", level: "A1", icon: "croissant",
    title: "À la boulangerie", title_fr: "À la boulangerie",
    context: "Olivier buys bread and cakes at the bakery. Sabrina serves him.", context_fr: "Olivier achète du pain et des gâteaux à la boulangerie. Sabrina le sert.",
    words: [["une tarte aux pommes", "an apple tart"], ["un éclair au chocolat", "a chocolate éclair"], ["et avec ceci ?", "anything else?"], ["en espèces", "in cash"], ["la monnaie", "the change"]],
    lines: [["Sabrina", "Bonjour, monsieur ! Qu'est-ce que je vous sers ?", "fr-FR"], ["Olivier", "Bonjour ! Je voudrais une baguette et deux croissants, s'il vous plaît.", "fr-FR"], ["Sabrina", "Voilà. Et avec ceci ?", "fr-FR"], ["Olivier", "La tarte aux pommes, là, elle coûte combien ?", "fr-FR"], ["Sabrina", "Quinze euros. C'est pour six personnes.", "fr-FR"], ["Olivier", "Ah, c'est un peu cher… Alors, deux éclairs au chocolat, s'il vous plaît.", "fr-FR"], ["Sabrina", "Très bien. Ce sera tout ?", "fr-FR"], ["Olivier", "Oui, c'est tout. Ça fait combien ?", "fr-FR"], ["Sabrina", "Ça fait sept euros quatre-vingt-dix. Vous payez par carte ?", "fr-FR"], ["Olivier", "Non, en espèces. Voilà dix euros.", "fr-FR"], ["Sabrina", "Merci. Et voici votre monnaie : deux euros dix. Bonne journée !", "fr-FR"], ["Olivier", "Merci, bonne journée !", "fr-FR"]],
    gist: ["Qu'est-ce qu'Olivier fait ?", ["Il achète du pain et des gâteaux.", "Il commande un repas au restaurant.", "Il vend des croissants."]],
    detail: [["Combien de croissants Olivier prend ?", ["Deux", "Un", "Six"]], ["Pourquoi il ne prend pas la tarte aux pommes ?", ["Elle est un peu chère.", "Il n'aime pas les pommes.", "Il n'y en a plus."]], ["Ça fait combien en tout ?", ["Sept euros quatre-vingt-dix", "Quinze euros", "Dix euros"]], ["Comment Olivier paie ?", ["En espèces", "Par carte", "Avec son téléphone"]]],
    decode: ["Et avec ceci ?", "Ça fait sept euros quatre-vingt-dix."],
    tip: "Prices are said with euros in the middle: sept euros quatre-vingt-dix = €7.90. Listen for the word euros: what comes before is the euros, what comes after is the cents.", tip_fr: "Les prix se disent avec euros au milieu : sept euros quatre-vingt-dix = 7,90 €. Guette le mot euros : ce qui vient avant, ce sont les euros ; ce qui vient après, les centimes."
  }]);

  W.PROMPTS.push({ id: "fr-a1-5", level: "A1", q: "Qu'est-ce que tu manges et bois dans une journée normale ? Qu'est-ce que tu aimes, et qu'est-ce que tu n'aimes pas ?", fr: "What do you eat and drink on a normal day? What do you like, and what don't you like?", time: 90,
    phrases: ["Le matin, je bois… / je mange…", "À midi, je prends…", "Le soir, …", "J'adore le / la…", "Je ne mange pas de…"],
    model: "Le matin, je bois un café et je mange du pain avec du beurre et de la confiture. À midi, je prends souvent une salade ou des pâtes. Le soir, je mange de la soupe ou du poisson avec des légumes. J'adore le fromage, mais je ne mange pas de viande. Je bois beaucoup d'eau, et un peu de thé l'après-midi." });

  W.WRITING_GUIDE["a1-5"] = { genre: "A shopping message to a flatmate", genre_fr: "Un message de courses à un colocataire",
    plan: [["Say hello and explain the occasion.", "Dis bonjour et explique l'occasion."], ["What to buy at the market, with quantities.", "Ce qu'il faut acheter au marché, avec les quantités."], ["What to buy at the supermarket.", "Ce qu'il faut acheter au supermarché."], ["What not to buy, and why.", "Ce qu'il ne faut pas acheter, et pourquoi."], ["Thank your flatmate.", "Remercie ton colocataire."]],
    marks: [["un kilo de tomates", "a quantity + de", "une quantité + de"], ["des carottes", "des: some (plural)", "des : un pluriel indéfini"], ["du riz", "du: some (masculine)", "du : partitif masculin"], ["deux bouteilles de vin rouge", "a quantity + de, no article", "une quantité + de, sans article"], ["N'achète pas de dessert", "pas de after a negative", "pas de après une négation"], ["un gâteau au chocolat", "à + le = au in the name of a dish", "à + le = au dans le nom d'un plat"]] };

  W.COURSE.push({ id: "a1-5", level: "A1", icon: "shopping-basket", title: "Food and shopping", title_fr: "Au marché",
    intro: "Food is a big part of French life! In this unit, you'll learn the partitive (du pain, de la confiture), quantities, the verbs for eating and drinking, how to order politely, and the numbers from 70 to 100 for prices.",
    intro_fr: "La nourriture tient une grande place dans la vie française ! Dans cette unité, tu vas apprendre le partitif (du pain, de la confiture), les quantités, les verbes pour manger et boire, comment commander poliment, et les nombres de 70 à 100 pour les prix.",
    can: ["Use du, de la, des, and de after a negative or a quantity", "Use prendre, boire and manger", "Order at a café or a bakery and pay", "Understand prices with the numbers from 70 to 100"],
    can_fr: ["Utiliser du, de la, des, et de après une négation ou une quantité", "Utiliser prendre, boire et manger", "Commander dans un café ou une boulangerie et payer", "Comprendre les prix avec les nombres de 70 à 100"],
    lessons: [15, 16, 17], vocab: ["nourritureFR", "boissonsFR", "nombres3FR"], reading: "marchesamedi", prompt: "fr-a1-5",
    writing: { task: "You're having a dinner for six people on Saturday. Write a message (60-80 words) to your flatmate: what to buy at the market and the supermarket, with quantities.", task_fr: "Tu organises un dîner pour six personnes samedi. Écris un message (60 à 80 mots) à ton colocataire : ce qu'il faut acheter au marché et au supermarché, avec les quantités.", words: "60-80",
      tips: ["Tu peux faire les courses ?", "Il faut un kilo de…", "Prends aussi du / de la…", "N'achète pas de…", "Merci et à ce soir !"],
      checklist: ["I used du, de la, des for amounts", "I used de after quantities (un kilo de, une bouteille de)", "I used pas de after a negative", "I gave clear instructions (prends, achète)", "I stayed between 60 and 80 words"],
      model: "Salut Yanis !\n\nSamedi, on fait un dîner pour six personnes. Tu peux faire les courses au marché ? Il faut un kilo de tomates, une salade, des carottes et deux poulets. Au supermarché, prends aussi du riz, du beurre et deux bouteilles de vin rouge. N'achète pas de dessert : je fais un gâteau au chocolat ! L'argent est sur la table de la cuisine.\n\nMerci et à ce soir !\nAmandine" } });
})();
