/* Cours de français, unité B1-10 « Celebrations and traditions / Fêtes et traditions » : les indéfinis (chaque,
   chacun, quelques, plusieurs, certains, tout / tous / toute / toutes, n'importe qui / quoi / où), reconnaître le
   passé simple dans un récit écrit, souhaits et invitations. Dernière unité du B1. Personnages fictifs, prénoms
   français. Faits vérifiables seulement : galette des rois à l'Épiphanie (6 janvier) et pendant tout janvier,
   frangipane au nord / brioche des rois au sud, la fève (haricot, puis figurines en porcelaine au XIXe siècle), le
   plus jeune sous la table ; Chandeleur le 2 février (crêpes, pièce dans la main) ; muguet le 1er mai ; fête de la
   musique le 21 juin ; 14 Juillet ; vœux jusqu'à la fin janvier ; la bise varie selon les régions ; Victor Hugo
   est né en 1802 ; la Saint-Patrick (17 mars) est la fête nationale irlandaise. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "fetesFR", icon: "party-popper", title: "Celebrations", title_fr: "Les fêtes", level: "B1", words: [
    ["le jour férié", "the public holiday", "Le 1er mai est un jour férié."],
    ["la fête nationale", "the national holiday", "La fête nationale française, c'est le 14 Juillet."],
    ["le feu d'artifice", "the fireworks", "On a regardé le feu d'artifice sur la plage."],
    ["le défilé", "the parade", "Le défilé passe à dix heures."],
    ["le réveillon", "Christmas Eve or New Year's Eve dinner", "Le réveillon a duré jusqu'à deux heures du matin."],
    ["la bûche de Noël", "the Yule log (cake)", "Ma tante prépare toujours la bûche de Noël."],
    ["la galette des rois", "the Epiphany cake", "On partage la galette des rois en janvier."],
    ["la fève", "the charm hidden in the Epiphany cake", "C'est moi qui ai eu la fève !"],
    ["la Chandeleur", "Candlemas (crêpe day, 2 February)", "À la Chandeleur, on mange des crêpes."],
    ["le muguet", "lily of the valley", "Le 1er mai, on offre du muguet."],
    ["le poisson d'avril", "the April Fool's joke", "Il m'a fait un poisson d'avril !"],
    ["la fête de la musique", "the music festival (21 June)", "À la fête de la musique, il y a des concerts partout."],
    ["les vœux", "wishes, greetings", "Je vous présente tous mes vœux pour la nouvelle année."],
    ["célébrer", "to celebrate", "Ils ont célébré leurs trente ans de mariage."],
    ["trinquer", "to clink glasses, to drink a toast", "Trinquons aux mariés !"],
    ["porter un toast", "to propose a toast", "Je voudrais porter un toast à Marie."],
    ["la naissance", "the birth", "Félicitations pour la naissance de votre fils !"],
    ["les fiançailles", "the engagement", "Ils ont annoncé leurs fiançailles."]
  ] },
  { id: "cuisineFR", icon: "chef-hat", title: "Cooking", title_fr: "La cuisine", level: "B1", words: [
    ["la recette", "the recipe", "C'est la recette de ma grand-mère."],
    ["l'ingrédient", "the ingredient", "Il faut seulement quatre ingrédients."],
    ["éplucher", "to peel", "Épluche les pommes de terre."],
    ["mélanger", "to mix, to stir", "Mélangez la farine et les œufs."],
    ["faire cuire", "to cook", "Faites cuire les pâtes dix minutes."],
    ["faire fondre", "to melt", "Faites fondre le chocolat."],
    ["verser", "to pour", "Versez le lait petit à petit."],
    ["battre", "to beat, to whisk", "Battez les œufs en neige."],
    ["la pâte", "the dough, the batter", "Laissez reposer la pâte une heure."],
    ["la farine", "flour", "Deux cent cinquante grammes de farine."],
    ["la poêle", "the frying pan", "Fais chauffer la poêle."],
    ["la casserole", "the saucepan", "Mets l'eau dans la casserole."],
    ["à feu doux", "on a low heat", "Laissez cuire à feu doux."],
    ["une pincée de", "a pinch of", "Ajoutez une pincée de sel."],
    ["la cuillère à soupe", "the tablespoon", "Deux cuillères à soupe d'huile."],
    ["saler", "to salt", "N'oublie pas de saler l'eau."],
    ["réchauffer", "to heat up, to warm up", "Je réchauffe la soupe."],
    ["mettre la table", "to lay the table", "Les enfants, mettez la table !"]
  ] });

  W.LESSONS.push(
  {
    id: 72, level: "B1", icon: "users",
    title: "Chaque, tous, quelques: indefinite words", title_fr: "Chaque, tous, quelques : les indéfinis",
    subtitle: "Each, every, all, a few, several, some, anyone at all: and how to pronounce tous.", subtitle_fr: "Chaque, chacun, tous, quelques, plusieurs, certains, n'importe qui : et comment prononcer tous.",
    body: `
<h2>Chaque and chacun</h2>
<p><s-fr>chaque</s-fr> + a singular noun: <s-fr>chaque année</s-fr>, <s-fr>chaque invité</s-fr>. On its own, use <s-fr>chacun</s-fr> or <s-fr>chacune</s-fr>: <s-fr>Chacun apporte un plat.</s-fr> (Everyone brings a dish.)</p>
<h2>Quelques, plusieurs, certains</h2>
<p><s-fr>quelques</s-fr> (a few) + plural noun: <s-fr>quelques amis</s-fr>; on its own: <s-fr>quelques-uns</s-fr>, <s-fr>quelques-unes</s-fr>. <s-fr>plusieurs</s-fr> (several) never changes: <s-fr>plusieurs fois</s-fr>. <s-fr>certains</s-fr>, <s-fr>certaines</s-fr> (some, certain): <s-fr>Certains invités sont partis tôt.</s-fr> · <s-fr>Certains pensent que…</s-fr></p>
<h2>Tout, toute, tous, toutes</h2>
<table>
<tr><th>French</th><th>English</th></tr>
<tr><td><s-fr>tout le gâteau</s-fr> · <s-fr>toute la nuit</s-fr></td><td>the whole cake · all night</td></tr>
<tr><td><s-fr>tous les jours</s-fr> · <s-fr>toutes les semaines</s-fr></td><td>every day · every week</td></tr>
<tr><td><s-fr>Tout est prêt.</s-fr></td><td>Everything is ready.</td></tr>
<tr><td><s-fr>Ils sont tous venus.</s-fr></td><td>They all came.</td></tr>
</table>
<h2>N'importe…</h2>
<p><s-fr>n'importe qui</s-fr> (anyone at all), <s-fr>n'importe quoi</s-fr> (anything at all), <s-fr>n'importe où</s-fr>, <s-fr>n'importe quand</s-fr>, <s-fr>n'importe comment</s-fr>. And a classic: <s-fr>Tu dis n'importe quoi !</s-fr> (You're talking nonsense!)</p>
<div class="tip">Pronunciation: <s-fr>tous</s-fr> before a noun rhymes with <s-fr>vous</s-fr> (<s-fr>tous les jours</s-fr>), but as a pronoun the s is pronounced (<s-fr>Ils sont tous là</s-fr>).</div>
`,
    examples: [
      ["Chaque année, nous fêtons Noël chez mes grands-parents.", "Every year, we celebrate Christmas at my grandparents'."],
      ["Chacun apporte quelque chose à manger.", "Everyone brings something to eat."],
      ["J'ai invité quelques amis.", "I've invited a few friends."],
      ["Il a essayé plusieurs fois.", "He tried several times."],
      ["Certains invités sont arrivés en retard.", "Some guests arrived late."],
      ["Toute la famille était là.", "The whole family was there."],
      ["Ils sont tous venus.", "They all came."],
      ["Tu dis n'importe quoi !", "You're talking nonsense!"]
    ],
    quiz: [
      { q: "“Every guest” is:", o: ["chaque invités", "chaque invité", "chacun invité"], a: 1, ex: "chaque + a singular noun." },
      { q: "“Everyone brings a dessert” is:", o: ["Chaque apporte un dessert.", "Chacun apporte un dessert.", "Tous apporte un dessert."], a: 1, ex: "On its own: chacun." },
      { q: "“The whole family” is:", o: ["tout la famille", "toute la famille", "tous la famille"], a: 1, ex: "tout agrees: toute la famille." },
      { q: "“Several times” is:", o: ["plusieurs fois", "plusieures fois", "quelque fois"], a: 0, ex: "plusieurs never changes." },
      { q: "“Anywhere at all” is:", o: ["n'importe où", "n'importe quoi", "n'importe qui"], a: 0, ex: "où = where." }
    ]
  },
  {
    id: 73, level: "B1", icon: "scroll",
    title: "Il était une fois: recognising the passé simple", title_fr: "Il était une fois : reconnaître le passé simple",
    subtitle: "The tense of novels, tales and history books: you won't need to say it, but you'll read it everywhere.", subtitle_fr: "Le temps des romans, des contes et des livres d'histoire : pas besoin de le dire, mais tu le liras partout.",
    body: `
<h2>The tense of written stories</h2>
<p>In novels, fairy tales and history books, the <b>passé simple</b> replaces the passé composé for events. Nobody uses it in conversation, but you need to recognise it to read French literature.</p>
<h2>Recognising it</h2>
<p>The third person is by far the most common:</p>
<table>
<tr><th>Verb</th><th>il / elle</th><th>ils / elles</th><th>= passé composé</th></tr>
<tr><td><s-fr>parler</s-fr></td><td><s-fr>il parla</s-fr></td><td><s-fr>ils parlèrent</s-fr></td><td><s-fr>il a parlé</s-fr></td></tr>
<tr><td><s-fr>finir</s-fr></td><td><s-fr>il finit</s-fr></td><td><s-fr>ils finirent</s-fr></td><td><s-fr>il a fini</s-fr></td></tr>
<tr><td><s-fr>prendre</s-fr></td><td><s-fr>il prit</s-fr></td><td><s-fr>ils prirent</s-fr></td><td><s-fr>il a pris</s-fr></td></tr>
<tr><td><s-fr>être</s-fr></td><td><s-fr>il fut</s-fr></td><td><s-fr>ils furent</s-fr></td><td><s-fr>il a été</s-fr></td></tr>
<tr><td><s-fr>avoir</s-fr></td><td><s-fr>il eut</s-fr></td><td><s-fr>ils eurent</s-fr></td><td><s-fr>il a eu</s-fr></td></tr>
<tr><td><s-fr>faire</s-fr></td><td><s-fr>il fit</s-fr></td><td><s-fr>ils firent</s-fr></td><td><s-fr>il a fait</s-fr></td></tr>
<tr><td><s-fr>venir</s-fr></td><td><s-fr>il vint</s-fr></td><td><s-fr>ils vinrent</s-fr></td><td><s-fr>il est venu</s-fr></td></tr>
<tr><td><s-fr>voir</s-fr></td><td><s-fr>il vit</s-fr></td><td><s-fr>ils virent</s-fr></td><td><s-fr>il a vu</s-fr></td></tr>
<tr><td><s-fr>naître</s-fr></td><td><s-fr>il naquit</s-fr></td><td><s-fr>ils naquirent</s-fr></td><td><s-fr>il est né</s-fr></td></tr>
</table>
<p>Regular -er verbs end in <s-fr>-a</s-fr> / <s-fr>-èrent</s-fr>; most others in <s-fr>-it</s-fr> / <s-fr>-irent</s-fr> or <s-fr>-ut</s-fr> / <s-fr>-urent</s-fr> (<s-fr>il voulut, il put, il lut</s-fr>).</p>
<h2>In a story</h2>
<p>The imparfait still sets the scene, and the passé simple tells the events: <s-fr>Il était une fois une reine qui vivait dans un château. Un jour, elle décida de partir.</s-fr></p>
<div class="tip">Watch out for look-alikes: <s-fr>il fit</s-fr> (he did), <s-fr>il vit</s-fr> (he saw, but also he lives, from vivre), <s-fr>il dit</s-fr> (he said, same as the present). The context of a past story tells you which it is.</div>
`,
    examples: [
      ["Il était une fois un roi qui avait trois filles.", "Once upon a time there was a king who had three daughters."],
      ["Un jour, le prince arriva au château.", "One day, the prince arrived at the castle."],
      ["Elle ouvrit la porte et entra.", "She opened the door and went in."],
      ["Ils se marièrent et eurent beaucoup d'enfants.", "They got married and had lots of children."],
      ["Victor Hugo naquit à Besançon en 1802.", "Victor Hugo was born in Besançon in 1802."],
      ["Ce fut une soirée inoubliable.", "It was an unforgettable evening."],
      ["Il fit un long voyage en Orient.", "He went on a long journey to the East."],
      ["Quand ils virent la mer, ils restèrent silencieux.", "When they saw the sea, they fell silent."]
    ],
    quiz: [
      { q: "“Il fut” is the passé simple of:", o: ["faire", "être", "falloir"], a: 1, ex: "il fut = il a été." },
      { q: "“Ils eurent” means:", o: ["they had", "they were", "they will have"], a: 0, ex: "eurent: avoir." },
      { q: "“Elle décida” is the passé simple of:", o: ["décider", "dire", "devoir"], a: 0, ex: "-er verb: -a." },
      { q: "In conversation, “Il prit le train” becomes:", o: ["Il prit le train.", "Il a pris le train.", "Il prenait le train."], a: 1, ex: "In speech: the passé composé." },
      { q: "“Il naquit en 1802” means:", o: ["He died in 1802.", "He was born in 1802.", "He arrived in 1802."], a: 1, ex: "naquit: naître." }
    ]
  },
  {
    id: 74, level: "B1", kind: "functional", icon: "gift",
    title: "Everyday French: wishes, toasts and being a guest", title_fr: "Le français de tous les jours : souhaits, toasts et invitations",
    subtitle: "The right wish for every occasion, what to say at the table, and how to be a good guest.", subtitle_fr: "Le bon souhait pour chaque occasion, ce qu'on dit à table, et comment être un bon invité.",
    body: `
<h2>Wishes for every occasion</h2>
<table>
<tr><th>Occasion</th><th>French</th></tr>
<tr><td>a birthday</td><td><s-fr>Joyeux anniversaire !</s-fr> · <s-fr>Bon anniversaire !</s-fr></td></tr>
<tr><td>Christmas, New Year</td><td><s-fr>Joyeux Noël !</s-fr> · <s-fr>Bonne année !</s-fr> · <s-fr>Meilleurs vœux !</s-fr></td></tr>
<tr><td>a wedding, a birth, an exam passed</td><td><s-fr>Félicitations !</s-fr> (always plural)</td></tr>
<tr><td>before something difficult</td><td><s-fr>Bon courage !</s-fr></td></tr>
<tr><td>someone who is ill</td><td><s-fr>Bon rétablissement !</s-fr></td></tr>
<tr><td>someone leaving for something new</td><td><s-fr>Bonne continuation !</s-fr></td></tr>
<tr><td>a death</td><td><s-fr>Toutes mes condoléances.</s-fr></td></tr>
</table>
<h2>At the table</h2>
<p><s-fr>Santé !</s-fr> · <s-fr>À la vôtre !</s-fr> (vous) · <s-fr>À la tienne !</s-fr> (tu) · <s-fr>Bon appétit !</s-fr> · <s-fr>C'est délicieux !</s-fr> · <s-fr>Je peux en reprendre ?</s-fr> (Can I have some more?)</p>
<h2>Being a guest</h2>
<p>Before: <s-fr>Qu'est-ce que je peux apporter ?</s-fr> · <s-fr>J'apporte le dessert ?</s-fr> Arriving: <s-fr>Merci pour l'invitation !</s-fr> Leaving: <s-fr>On a passé une excellente soirée.</s-fr> · <s-fr>C'était parfait, merci encore !</s-fr></p>
<div class="tip">In France, you can wish people <s-fr>Bonne année</s-fr> until the end of January. And <s-fr>la bise</s-fr> (kissing on the cheeks) varies by region, from one to four kisses: let the other person lead.</div>
`,
    examples: [
      ["Joyeux anniversaire, ma chérie !", "Happy birthday, darling!"],
      ["Bonne année et meilleurs vœux !", "Happy New Year and best wishes!"],
      ["Félicitations pour votre mariage !", "Congratulations on your wedding!"],
      ["Bon courage pour ton examen !", "Good luck with your exam!"],
      ["Bon rétablissement !", "Get well soon!"],
      ["À la vôtre !", "Cheers!"],
      ["Qu'est-ce que je peux apporter ?", "What can I bring?"],
      ["On a passé une excellente soirée, merci !", "We had a wonderful evening, thank you!"]
    ],
    quiz: [
      { q: "For Christmas, you say:", o: ["Bonne Noël !", "Joyeux Noël !", "Joyeuse Noël !"], a: 1, ex: "Joyeux Noël !" },
      { q: "To someone who is ill:", o: ["Bon courage !", "Bon rétablissement !", "Bonne continuation !"], a: 1, ex: "Bon rétablissement = get well soon." },
      { q: "“Félicitations” is always:", o: ["singular", "plural", "masculine"], a: 1, ex: "Félicitations, with an s." },
      { q: "When you clink glasses with someone you call vous:", o: ["À la tienne !", "À la vôtre !", "À la nôtre seulement !"], a: 1, ex: "À la vôtre ! (vous)" },
      { q: "You can say Bonne année until:", o: ["1 January", "the end of January", "Easter"], a: 1, ex: "Traditionally until the end of January." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    72: {
      gap: [["___ invité apporte un plat. (each)", "Chaque"], ["Ils sont ___ venus. (all)", "tous"], ["J'ai invité ___ amis. (a few)", "quelques"], ["Tu dis n'importe ___ ! (nonsense)", "quoi"]],
      fix: [["Chaque invités apporte un dessert.", "Chaque invité apporte un dessert.", "chaque + a singular noun."], ["Tous la famille était là.", "Toute la famille était là.", "tout agrees: la famille → toute."]],
      task: ["Describe a family celebration with chaque, chacun, tous, toute, quelques and plusieurs.", "Décris une fête de famille avec chaque, chacun, tous, toute, quelques et plusieurs.", "Chaque année, toute la famille se retrouve chez mes grands-parents pour Noël. Chacun apporte un plat : ma tante fait toujours la bûche. Nous sommes une vingtaine, et plusieurs cousins viennent de loin. Après le repas, quelques-uns jouent aux cartes, et tous les enfants ouvrent leurs cadeaux."]
    },
    73: {
      gap: [["Un jour, le roi ___ un grand bal. (organiser, passé simple)", "organisa"], ["Elle ___ la porte et partit. (ouvrir, passé simple)", "ouvrit"], ["Ils se ___ en 1914. (rencontrer, passé simple)", "rencontrèrent"], ["Victor Hugo ___ en 1802. (naître, passé simple)", "naquit"]],
      fix: [["Hier soir, on alla au cinéma.", "Hier soir, on est allés au cinéma.|Hier soir, on est allé au cinéma.", "In conversation, the passé composé, never the passé simple."], ["Il eut de la chance et il gagna.", "Il a eu de la chance et il a gagné.", "To tell it out loud: the passé composé."]],
      task: ["Rewrite this tale in spoken French (passé composé): Un jour, le prince arriva au château. Il frappa à la porte, mais personne ne répondit. Alors, il entra.", "Réécris ce conte en français parlé (passé composé) : Un jour, le prince arriva au château. Il frappa à la porte, mais personne ne répondit. Alors, il entra.", "Un jour, le prince est arrivé au château. Il a frappé à la porte, mais personne n'a répondu. Alors, il est entré."]
    },
    74: {
      gap: [["___ anniversaire ! (happy)", "Joyeux"], ["Meilleurs ___ pour la nouvelle année ! (wishes)", "vœux"], ["À la ___ ! (cheers, to someone you call vous)", "vôtre"], ["Bon ___ ! (get well soon)", "rétablissement"]],
      fix: [["Bonne Noël !", "Joyeux Noël !", "For Christmas: Joyeux Noël."], ["Félicitation pour ton diplôme !", "Félicitations pour ton diplôme !", "félicitations is always plural."]],
      task: ["Write three short messages: for a friend's birthday, for a colleague's new baby, and for a friend about to take an exam.", "Écris trois courts messages : pour l'anniversaire d'un ami, pour la naissance du bébé d'un collègue, et pour un ami qui va passer un examen.", "Joyeux anniversaire ! Je te souhaite une magnifique journée et plein de bonnes choses pour cette nouvelle année. Toutes mes félicitations pour la naissance de votre petite fille, et bienvenue à elle ! Bon courage pour ton examen demain : tu as bien travaillé, tu vas réussir !"]
    }
  });

  W.ROLEPLAYS.push(
  { id: "dineranniversaire", lesson: 74, level: "B1", icon: "cake", partner: "Hélène", role: "your French host",
    title: "A birthday dinner", title_fr: "Un dîner d'anniversaire",
    setting: "Hélène, a French friend's mother, has invited you to dinner for her fiftieth birthday. You arrive with flowers.", setting_fr: "Hélène, la mère d'une amie française, t'a invité à dîner pour ses cinquante ans. Tu arrives avec des fleurs.",
    turns: [
      { p: "Ah, bonsoir ! Entrez, entrez ! Je suis contente que vous ayez pu venir.", fr: "Ah, good evening! Come in, come in! I'm so glad you could come." },
      { y: ["Bonsoir, Hélène ! Joyeux anniversaire ! Tenez, ce sont des fleurs pour vous.", "Bonsoir, Hélène ! Joyeuse anniversaire ! Tenez, ce sont des fleurs pour vous.", "Bonsoir, Hélène ! Joyeux anniversaire ! Tiens, ce sont des fleurs pour vous."], fr: "Good evening, Hélène! Happy birthday! Here, these flowers are for you.", why: "un anniversaire → joyeux; with vous, tenez (not tiens)." },
      { p: "Oh, elles sont magnifiques, merci ! Asseyez-vous. On commence par une coupe de champagne ?", fr: "Oh, they're beautiful, thank you! Sit down. Shall we start with a glass of champagne?" },
      { y: ["Avec plaisir ! À la vôtre, et à vos cinquante ans !", "Avec plaisir ! À la tienne, et à vos cinquante ans !", "Avec plaisir ! À la vôtre, et à votres cinquante ans !"], fr: "With pleasure! Cheers, and here's to your fifty years!", why: "With vous: à la vôtre; plural: vos." },
      { p: "Merci ! Bon, à table ! J'ai préparé une blanquette de veau, c'est la recette de ma grand-mère.", fr: "Thank you! Right, let's eat! I've made a blanquette de veau, it's my grandmother's recipe." },
      { y: ["Ça sent très bon ! C'est la première fois que je goûte ce plat.", "Ça sent très bien ! C'est la première fois que je goûte ce plat.", "Ça sent très bon ! C'est la première fois que je goûte cette plat."], fr: "It smells wonderful! It's the first time I've tried this dish.", why: "ça sent bon (not bien); un plat → ce plat." },
      { p: "Alors, ça vous plaît ?", fr: "So, do you like it?" },
      { y: ["C'est délicieux ! Vous pourriez me donner la recette ?", "C'est délicieuse ! Vous pourriez me donner la recette ?", "C'est délicieux ! Vous pourriez me la recette donner ?"], fr: "It's delicious! Could you give me the recipe?", why: "c'est + masculine adjective; the infinitive comes before its object." },
      { p: "Avec plaisir, je vous l'écrirai. Encore un peu de dessert ?", fr: "Of course, I'll write it down for you. A little more dessert?" },
      { y: ["Non merci, je n'ai plus faim, mais c'était parfait. Merci pour cette excellente soirée !", "Non merci, je n'ai plus faim, mais c'était parfait. Merci pour cette excellent soirée !", "Non merci, je ne suis plus faim, mais c'était parfait. Merci pour cette excellente soirée !"], fr: "No thank you, I'm full, but it was perfect. Thank you for a wonderful evening!", why: "avoir faim; une soirée → excellente." }
    ] }
  );

  W.READINGS.push({
    id: "galette", level: "B1", icon: "cake", title: "La galette des rois, mode d'emploi", genre: "Article",
    intro: "Every January, France shares a cake with a hidden charm. Where does the tradition come from, and what are the rules? Indefinite words and a passé simple.",
    intro_fr: "Chaque mois de janvier, la France partage un gâteau qui cache une fève. D'où vient la tradition, et quelles sont les règles ? Les indéfinis et un passé simple.",
    paragraphs: [
      { en: "Chaque année, en janvier, les boulangeries françaises se remplissent de galettes des rois. On les mange pour l'Épiphanie, le 6 janvier, mais en réalité, on en partage pendant tout le mois : en famille, entre amis, au bureau…", fr: "Every year, in January, French bakeries fill up with galettes des rois. People eat them for Epiphany, on 6 January, but in fact they share them all month long: with family, with friends, at the office…" },
      { en: "Dans la moitié nord de la France, la galette est faite de pâte feuilletée et de frangipane, une crème aux amandes. Dans le Sud, on préfère souvent la brioche des rois, une couronne de brioche décorée de fruits confits.", fr: "In the northern half of France, the galette is made of puff pastry and frangipane, an almond cream. In the south, people often prefer the brioche des rois, a ring of brioche decorated with candied fruit." },
      { en: "Dans chaque galette, il y a une fève cachée. À l'origine, c'était un vrai haricot sec. Au dix-neuvième siècle, les fèves furent remplacées par de petites figurines en porcelaine, que certaines personnes collectionnent aujourd'hui.", fr: "In every galette, there's a hidden charm. Originally, it was a real dried bean. In the nineteenth century, the beans were replaced by small porcelain figurines, which some people collect today." },
      { en: "La tradition est toujours la même : le plus jeune de la famille se met sous la table et, sans regarder, dit à qui donner chaque part. Celui ou celle qui trouve la fève devient le roi ou la reine du jour. On lui met une couronne en papier sur la tête.", fr: "The tradition is always the same: the youngest in the family goes under the table and, without looking, says who gets each slice. Whoever finds the charm becomes king or queen for the day. They're given a paper crown to wear." },
      { en: "Et souvent, le roi ou la reine doit acheter la prochaine galette… C'est pour ça qu'en janvier, on en mange plusieurs !", fr: "And often, the king or queen has to buy the next galette… That's why, in January, people eat several!" }
    ],
    glossary: { "remplissent": "fill up", "épiphanie": "Epiphany", "réalité": "reality (en réalité: in fact)", "feuilletée": "flaky (la pâte feuilletée: puff pastry)", "amandes": "almonds", "couronne": "crown; ring", "décorée": "decorated", "confits": "candied", "cachée": "hidden", "haricot": "bean", "siècle": "century", "furent": "were (passé simple of être)", "porcelaine": "porcelain", "collectionnent": "collect", "part": "slice, share", "roi": "king", "reine": "queen" },
    questions: [
      { q: "Quand mange-t-on la galette des rois ?", o: ["En décembre", "En janvier", "En été"], a: 1 },
      { q: "Qu'est-ce que la frangipane ?", o: ["Un fruit confit", "Une figurine", "Une crème aux amandes"], a: 2 },
      { q: "Qu'est-ce qui a remplacé les vraies fèves au dix-neuvième siècle ?", o: ["Des figurines en porcelaine", "Des bonbons", "Des pièces d'argent"], a: 0 },
      { q: "Que fait le plus jeune de la famille ?", o: ["Il coupe la galette.", "Il se met sous la table et dit à qui donner chaque part.", "Il achète la galette."], a: 1 },
      { q: "Que doit souvent faire le roi ou la reine ?", o: ["Faire la vaisselle", "Chanter une chanson", "Acheter la prochaine galette"], a: 2 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-b1-10", unit: "b1-10", level: "B1", icon: "chef-hat",
    title: "Les crêpes de la Chandeleur", title_fr: "Les crêpes de la Chandeleur",
    context: "On 2 February, Odette makes crêpes with her grandson Lucas and tells him about a tradition.", context_fr: "Le 2 février, Odette fait des crêpes avec son petit-fils Lucas et lui raconte une tradition.",
    words: [["fondu", "melted"], ["les grumeaux", "lumps"], ["une louche", "a ladle"], ["retourner", "to turn over"], ["faire sauter", "to toss, to flip"]],
    lines: [["Odette", "Aujourd'hui, c'est le 2 février, c'est la Chandeleur ! Alors on fait des crêpes. Lucas, tu m'aides ?", "fr-FR"], ["Lucas", "Oui ! Qu'est-ce qu'il faut ?", "fr-FR"], ["Odette", "Deux cent cinquante grammes de farine, quatre œufs, un demi-litre de lait, une pincée de sel et cinquante grammes de beurre fondu.", "fr-FR"], ["Lucas", "Je mets tout ensemble ?", "fr-FR"], ["Odette", "Non, d'abord la farine et le sel. Ensuite, tu ajoutes les œufs et tu mélanges bien. Puis tu verses le lait petit à petit, pour éviter les grumeaux. À la fin, le beurre.", "fr-FR"], ["Lucas", "Et on les fait cuire tout de suite ?", "fr-FR"], ["Odette", "Non, il vaut mieux laisser reposer la pâte une heure. Après, on fait chauffer la poêle, on verse une petite louche de pâte, et on attend une minute avant de retourner la crêpe.", "fr-FR"], ["Lucas", "Mamie, c'est vrai qu'il faut tenir une pièce dans la main ?", "fr-FR"], ["Odette", "Oui ! C'est la tradition : tu fais sauter la crêpe avec la main droite, en tenant une pièce dans la main gauche. Si la crêpe retombe bien dans la poêle, tu auras de l'argent toute l'année !", "fr-FR"], ["Lucas", "Alors je vais m'entraîner !", "fr-FR"]],
    gist: ["Que préparent Odette et Lucas ?", ["Des crêpes pour la Chandeleur", "Une galette des rois", "Un gâteau d'anniversaire"]],
    detail: [["Combien d'œufs faut-il ?", ["Quatre", "Deux", "Six"]], ["Pourquoi verser le lait petit à petit ?", ["Pour éviter les grumeaux", "Pour que la pâte soit sucrée", "Pour aller plus vite"]], ["Combien de temps laisse-t-on reposer la pâte ?", ["Une heure", "Dix minutes", "Toute la nuit"]], ["Que tient-on dans la main gauche en faisant sauter la crêpe ?", ["Une pièce", "Une louche", "Une fourchette"]]],
    decode: ["pour éviter les grumeaux", "en tenant une pièce dans la main gauche"],
    tip: "Recipes follow an order: d'abord, ensuite, puis, à la fin, avant de… Listen for these words and number the steps as you go.", tip_fr: "Les recettes suivent un ordre : d'abord, ensuite, puis, à la fin, avant de… Guette ces mots et numérote les étapes au fur et à mesure."
  }]);

  W.PROMPTS.push({ id: "fr-b1-10", level: "B1", q: "Quelle est ta fête préférée de l'année ? Comment la célèbre-t-on chez toi ?", fr: "What's your favourite celebration of the year? How is it celebrated where you live?", time: 150,
    phrases: ["Ma fête préférée, c'est…", "Chaque année, …", "Toute la famille…", "On mange…", "Ce que j'aime le plus, c'est…"],
    model: "Ma fête préférée, c'est le réveillon du Nouvel An. Chaque année, on se retrouve chez des amis, à une dizaine. Chacun prépare un plat, et on dîne très tard. À minuit, tout le monde s'embrasse et se souhaite une bonne année, puis on sort regarder le feu d'artifice. Ce que j'aime le plus, c'est le premier janvier : on se promène tous ensemble au bord de la mer, même s'il fait froid !" });

  W.WRITING_GUIDE["b1-10"] = { genre: "An email about a celebration (DELF B1)", genre_fr: "Un e-mail sur une fête (DELF B1)",
    plan: [["Answer your friend's question: which celebration, when.", "Réponds à la question de ton ami : quelle fête, quand."], ["Describe the traditions (chaque, tous, certains…).", "Décris les traditions (chaque, tous, certains…)."], ["Say what people eat and do.", "Dis ce qu'on mange et ce qu'on fait."], ["Invite your friend (et si tu venais…).", "Invite ton ami (et si tu venais…)."], ["End in a friendly way.", "Termine de façon amicale."]],
    marks: [["Chaque année, toutes les villes et tous les villages", "chaque, toutes, tous", "chaque, toutes, tous"], ["Tout le monde porte du vert", "tout le monde", "tout le monde"], ["Certains se peignent même le visage", "certains as a pronoun", "certains comme pronom"], ["n'importe qui peut chanter", "n'importe qui", "n'importe qui"], ["Et si tu venais la fêter avec nous", "a suggestion (si + imparfait)", "une proposition (si + imparfait)"], ["Dis-moi vite si ça te tente", "a friendly ending", "une fin amicale"]] };

  W.COURSE.push({ id: "b1-10", level: "B1", icon: "party-popper", title: "Celebrations and traditions", title_fr: "Fêtes et traditions",
    intro: "In this last B1 unit, you'll discover French celebrations and traditions: indefinite words (chaque, tous, quelques, certains, n'importe qui), recognising the passé simple of written stories, and the French you need for wishes, toasts and being a guest.",
    intro_fr: "Dans cette dernière unité du B1, tu vas découvrir les fêtes et les traditions françaises : les indéfinis (chaque, tous, quelques, certains, n'importe qui), reconnaître le passé simple des récits écrits, et le français qu'il faut pour les souhaits, les toasts et les invitations.",
    can: ["Use chaque, chacun, tout, quelques, plusieurs, certains and n'importe…", "Recognise the passé simple in a written story", "Give the right wish for each occasion", "Behave as a guest and talk at the table", "Describe a celebration and invite a friend to it"],
    can_fr: ["Utiliser chaque, chacun, tout, quelques, plusieurs, certains et n'importe…", "Reconnaître le passé simple dans un récit écrit", "Faire le bon souhait pour chaque occasion", "Te comporter en invité et parler à table", "Décrire une fête et y inviter un ami"],
    lessons: [72, 73, 74], vocab: ["fetesFR", "cuisineFR"], reading: "galette", prompt: "fr-b1-10",
    writing: { task: "A French friend asks how a celebration is held in your country. Write an email (160-180 words): the celebration, the traditions, what people eat, and invite your friend to celebrate it with you.", task_fr: "Un ami français te demande comment on fête une fête de ton pays. Écris-lui un e-mail (160 à 180 mots) : la fête, les traditions, ce qu'on mange, et invite-le à la fêter avec toi.", words: "160-180",
      tips: ["Tu me demandais comment…", "Chaque année, …", "Tout le monde…", "Certains…", "Et si tu venais… ?"],
      checklist: ["I named the celebration and its date", "I used chaque, tout and certains", "I described what people eat and do", "I invited my friend", "I wrote between 160 and 180 words"],
      model: "Salut Antoine,\n\nTu me demandais dans ton dernier message comment on fête la Saint-Patrick en Irlande. C'est notre fête nationale, le 17 mars, et c'est sûrement le jour le plus joyeux de l'année !\n\nChaque année, toutes les villes et tous les villages organisent un défilé. À Dublin, des centaines de milliers de personnes viennent le voir. Tout le monde porte du vert, et beaucoup de gens accrochent un trèfle à leur veste : c'est le symbole de l'Irlande. Certains se peignent même le visage !\n\nAprès le défilé, on se retrouve en famille ou entre amis. Il n'y a pas de plat obligatoire, mais chez moi, on mange toujours un ragoût d'agneau, la recette de ma grand-mère. Le soir, on va écouter de la musique traditionnelle dans un pub : n'importe qui peut chanter ou danser, même sans savoir !\n\nEt si tu venais la fêter avec nous l'année prochaine ? Tu pourrais dormir chez moi, et je te présenterais toute ma famille. Tu adorerais, c'est promis !\n\nDis-moi vite si ça te tente !\n\nÀ bientôt,\nMorgan" } });
})();
