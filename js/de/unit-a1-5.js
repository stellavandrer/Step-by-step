/* Cours d'allemand, unité A1-5 « Food and shopping / Manger et faire les courses » : möchten, mögen, gern, lieber,
   am liebsten ; les quantités (ein Kilo Äpfel) et les pronoms à l'accusatif (ihn, sie, es) ; au café et au
   restaurant (commander, payer, le pourboire). Explications et traductions en anglais ET en français.
   Personnages fictifs, prénoms allemands. Faits vérifiables seulement : la « culture du pain allemande » inscrite
   en décembre 2014 au registre national du patrimoine culturel immatériel ; plus de 3 000 spécialités au registre
   du pain des boulangers allemands ; Abendbrot ; « Zusammen oder getrennt? » ; arrondir l'addition (Stimmt so). */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "essenDE", icon: "apple", title: "Food and drink", title_fr: "Manger et boire", level: "A1", words: [
    ["das Brot, -e", "bread, a loaf", "le pain", "Ich kaufe ein Brot."],
    ["das Brötchen, -", "the bread roll", "le petit pain", "Zum Frühstück esse ich zwei Brötchen."],
    ["die Butter", "butter", "le beurre", "Brot mit Butter, bitte."],
    ["die Wurst, ¨-e", "sausage, cold meat", "la saucisse, la charcuterie", "Ich esse keine Wurst."],
    ["das Fleisch", "meat", "la viande", "Wir essen wenig Fleisch."],
    ["der Fisch, -e", "fish", "le poisson", "Am Freitag gibt es Fisch."],
    ["das Ei, -er", "the egg", "l'œuf", "Ich möchte ein Ei."],
    ["die Milch", "milk", "le lait", "Kaffee mit Milch, bitte."],
    ["das Obst", "fruit", "les fruits", "Ich esse jeden Tag Obst."],
    ["das Gemüse", "vegetables", "les légumes", "Das Gemüse ist frisch."],
    ["der Apfel, ¨", "the apple", "la pomme", "Ein Kilo Äpfel, bitte."],
    ["die Kartoffel, -n", "the potato", "la pomme de terre", "Es gibt Kartoffeln mit Salat."],
    ["der Salat, -e", "salad; lettuce", "la salade", "Ich nehme einen Salat."],
    ["die Nudeln (pl)", "pasta, noodles", "les pâtes", "Die Kinder essen gern Nudeln."],
    ["der Kuchen, -", "the cake", "le gâteau", "Möchtest du ein Stück Kuchen?"],
    ["das Wasser", "water", "l'eau", "Ein Glas Wasser, bitte."],
    ["der Saft, ¨-e", "juice", "le jus", "Ich trinke gern Apfelsaft."],
    ["der Tee, -s", "tea", "le thé", "Ich trinke lieber Tee."],
    ["das Bier, -e", "beer", "la bière", "Ein Bier, bitte!"],
    ["der Wein, -e", "wine", "le vin", "Magst du Rotwein?"],
    ["frisch", "fresh", "frais", "Die Brötchen sind ganz frisch."]
  ] },
  { id: "einkaufenDE", icon: "shopping-basket", title: "Shopping for food", title_fr: "Faire les courses", level: "A1", words: [
    ["ein Kilo", "a kilo", "un kilo", "Ein Kilo Kartoffeln, bitte."],
    ["hundert Gramm", "a hundred grams", "cent grammes", "Hundert Gramm Käse, bitte."],
    ["die Flasche, -n", "the bottle", "la bouteille", "Eine Flasche Wasser, bitte."],
    ["die Packung, -en", "the packet", "le paquet", "Eine Packung Nudeln."],
    ["das Stück, -e", "the piece", "le morceau, la part", "Ein Stück Kuchen, bitte."],
    ["der Liter, -", "the litre", "le litre", "Zwei Liter Milch."],
    ["das Glas, ¨-er", "the glass; the jar", "le verre ; le bocal", "Ein Glas Marmelade."],
    ["Was kostet das?", "how much is it?", "combien ça coûte ?", "Was kostet ein Kilo Tomaten?"],
    ["teuer", "expensive", "cher", "Das ist zu teuer!"],
    ["billig", "cheap", "bon marché, pas cher", "Die Äpfel sind heute billig."],
    ["das Angebot, -e", "the special offer", "l'offre, la promotion", "Heute ist Käse im Angebot."],
    ["bar", "in cash", "en liquide", "Ich bezahle bar."],
    ["mit Karte", "by card", "par carte", "Kann ich mit Karte zahlen?"],
    ["der Wochenmarkt, ¨-e", "the weekly market", "le marché (hebdomadaire)", "Am Samstag ist Wochenmarkt."],
    ["die Tüte, -n", "the (carrier) bag", "le sac (en plastique, en papier)", "Brauchen Sie eine Tüte?"],
    ["Sonst noch etwas?", "anything else?", "et avec ceci ?", "Sonst noch etwas? — Nein, danke."],
    ["Das ist alles.", "that's all", "c'est tout", "Danke, das ist alles."],
    ["Ich hätte gern…", "I'd like… (polite)", "je voudrais… (poli)", "Ich hätte gern fünf Brötchen."]
  ] },
  { id: "restaurantDE", icon: "utensils", title: "At the restaurant", title_fr: "Au restaurant", level: "A1", words: [
    ["die Speisekarte, -n", "the menu", "la carte, le menu", "Die Speisekarte, bitte."],
    ["bestellen", "to order", "commander", "Wir möchten bestellen."],
    ["der Kellner, - / die Kellnerin, -nen", "the waiter / the waitress", "le serveur / la serveuse", "Der Kellner kommt gleich."],
    ["die Rechnung, -en", "the bill", "l'addition", "Die Rechnung, bitte!"],
    ["zahlen", "to pay", "payer", "Zahlen, bitte!"],
    ["zusammen oder getrennt?", "together or separately?", "ensemble ou séparément ?", "Zusammen oder getrennt? — Getrennt, bitte."],
    ["das Trinkgeld, -er", "the tip", "le pourboire", "Wie viel Trinkgeld gibt man hier?"],
    ["Stimmt so!", "keep the change!", "gardez la monnaie !", "Achtzehn Euro? Hier sind zwanzig. Stimmt so!"],
    ["die Vorspeise, -n", "the starter", "l'entrée", "Als Vorspeise nehme ich eine Suppe."],
    ["das Hauptgericht, -e", "the main course", "le plat principal", "Als Hauptgericht nehme ich Fisch."],
    ["der Nachtisch, -e", "the dessert", "le dessert", "Möchten Sie einen Nachtisch?"],
    ["die Suppe, -n", "soup", "la soupe", "Die Suppe ist heiß."],
    ["lecker", "tasty, delicious", "délicieux, bon", "Das Essen ist sehr lecker!"],
    ["probieren", "to try, to taste", "goûter, essayer", "Möchtest du probieren?"],
    ["vegetarisch", "vegetarian", "végétarien", "Haben Sie auch etwas Vegetarisches?"],
    ["Guten Appetit!", "enjoy your meal!", "bon appétit !", "Guten Appetit! — Danke, gleichfalls!"],
    ["Hunger haben", "to be hungry", "avoir faim", "Ich habe Hunger!"],
    ["Durst haben", "to be thirsty", "avoir soif", "Hast du Durst?"]
  ] });

  W.LESSONS.push(
  {
    id: 13, level: "A1", icon: "coffee",
    title: "Ich möchte einen Kaffee: möchten, mögen and gern", title_fr: "Ich möchte einen Kaffee : möchten, mögen et gern",
    subtitle: "Say politely what you'd like, and what you like, prefer and like best.", subtitle_fr: "Dire poliment ce que tu voudrais, et ce que tu aimes, préfères et aimes le plus.",
    body: `
<h2>Möchten: I'd like</h2>
<p><s-de>ich möchte</s-de> · <s-de>du möchtest</s-de> · <s-de>er / sie / es möchte</s-de> · <s-de>wir möchten</s-de> · <s-de>ihr möchtet</s-de> · <s-de>sie / Sie möchten</s-de>. No -t with er / sie / es: <s-de>Sie möchte einen Tee.</s-de></p>
<p>The thing you'd like is an accusative object: <s-de>Ich möchte einen Kaffee.</s-de> With another verb, that verb goes to the end: <s-de>Ich möchte einen Kaffee trinken.</s-de> In a shop or a café, the most polite form is <s-de>Ich hätte gern…</s-de>: <s-de>Ich hätte gern zwei Brötchen.</s-de></p>
<h2>Mögen and gern: I like</h2>
<p>To say you like a thing: <s-de>mögen</s-de> + noun: <s-de>Ich mag Käse.</s-de> · <s-de>Magst du Fisch?</s-de> (<s-de>ich mag</s-de>, <s-de>du magst</s-de>, <s-de>er mag</s-de>). To say you like doing something: verb + <s-de>gern</s-de>: <s-de>Ich koche gern.</s-de> · <s-de>Ich trinke gern Tee.</s-de></p>
<p>Careful: English "I'd like" is <s-de>ich möchte</s-de>, but "I like" is <s-de>ich mag</s-de> or <s-de>gern</s-de>. <s-de>Ich möchte Kaffee</s-de> is an order, <s-de>Ich mag Kaffee</s-de> is a taste.</p>
<h2>Gern, lieber, am liebsten</h2>
<p><s-de>Ich trinke gern Tee.</s-de> (I like tea.) · <s-de>Ich trinke lieber Kaffee.</s-de> (I prefer coffee.) · <s-de>Ich trinke am liebsten Saft.</s-de> (I like juice best.) Not at all: <s-de>Ich esse nicht gern Fisch.</s-de></p>
<div class="tip">To refuse politely: <s-de>Nein, danke.</s-de> And watch out: <s-de>Danke!</s-de> alone, when someone offers you something, often means "no, thanks". If you want it, say <s-de>Ja, gern!</s-de> or <s-de>Ja, bitte!</s-de></div>
`,
    body_fr: `
<h2>Möchten : je voudrais</h2>
<p><s-de>ich möchte</s-de> · <s-de>du möchtest</s-de> · <s-de>er / sie / es möchte</s-de> · <s-de>wir möchten</s-de> · <s-de>ihr möchtet</s-de> · <s-de>sie / Sie möchten</s-de>. Pas de -t avec er / sie / es : <s-de>Sie möchte einen Tee.</s-de></p>
<p>Ce qu'on voudrait est un COD à l'accusatif : <s-de>Ich möchte einen Kaffee.</s-de> Avec un autre verbe, celui-ci part à la fin : <s-de>Ich möchte einen Kaffee trinken.</s-de> (Je voudrais boire un café.) Dans un magasin ou un café, la forme la plus polie est <s-de>Ich hätte gern…</s-de> : <s-de>Ich hätte gern zwei Brötchen.</s-de></p>
<h2>Mögen et gern : j'aime</h2>
<p>Pour dire qu'on aime une chose : <s-de>mögen</s-de> + nom : <s-de>Ich mag Käse.</s-de> · <s-de>Magst du Fisch?</s-de> (<s-de>ich mag</s-de>, <s-de>du magst</s-de>, <s-de>er mag</s-de>). Pour dire qu'on aime faire quelque chose : verbe + <s-de>gern</s-de> : <s-de>Ich koche gern.</s-de> (J'aime cuisiner.) · <s-de>Ich trinke gern Tee.</s-de> (J'aime le thé, j'en bois volontiers.)</p>
<p>Le français dit « j'aime » dans tous les cas, l'allemand distingue : <s-de>Ich mag Kaffee</s-de> (un goût), <s-de>Ich trinke gern Kaffee</s-de> (une habitude agréable), et <s-de>Ich möchte einen Kaffee</s-de> (une commande). Et pas d'article pour un goût général : « j'aime le fromage » = <s-de>Ich mag Käse</s-de>.</p>
<h2>Gern, lieber, am liebsten</h2>
<p><s-de>Ich trinke gern Tee.</s-de> (J'aime le thé.) · <s-de>Ich trinke lieber Kaffee.</s-de> (Je préfère le café.) · <s-de>Ich trinke am liebsten Saft.</s-de> (Ce que je préfère, c'est le jus.) Pas du tout : <s-de>Ich esse nicht gern Fisch.</s-de></p>
<div class="tip">Pour refuser poliment : <s-de>Nein, danke.</s-de> Et attention : un simple <s-de>Danke!</s-de>, quand on te propose quelque chose, veut souvent dire « non merci ». Si tu en veux, dis <s-de>Ja, gern!</s-de> ou <s-de>Ja, bitte!</s-de></div>
`,
    examples: [
      ["Ich möchte einen Kaffee, bitte.", "I'd like a coffee, please.", "Je voudrais un café, s'il vous plaît."],
      ["Möchtest du etwas trinken?", "Would you like something to drink?", "Tu veux boire quelque chose ?"],
      ["Ich hätte gern zwei Brötchen.", "I'd like two bread rolls, please.", "Je voudrais deux petits pains."],
      ["Magst du Fisch? — Nein, ich mag keinen Fisch.", "Do you like fish? — No, I don't like fish.", "Tu aimes le poisson ? — Non, je n'aime pas le poisson."],
      ["Ich koche gern, aber ich spüle nicht gern.", "I like cooking, but I don't like washing up.", "J'aime cuisiner, mais je n'aime pas faire la vaisselle."],
      ["Ich trinke lieber Tee als Kaffee.", "I prefer tea to coffee.", "Je préfère le thé au café."],
      ["Am liebsten esse ich Nudeln.", "I like pasta best.", "Ce que je préfère, ce sont les pâtes."]
    ],
    quiz: [
      { q: "In a café: “I'd like a tea.”", q_fr: "Au café : « Je voudrais un thé. »", o: ["Ich mag einen Tee.", "Ich möchte einen Tee.", "Ich möchte ein Tee."], a: 1, ex: "An order: möchte; der Tee → einen Tee.", ex_fr: "Une commande : möchte ; der Tee → einen Tee." },
      { q: "Complete: “Er ___ einen Saft.” (möchten)", q_fr: "Complète : « Er ___ einen Saft. » (möchten)", o: ["möchtet", "möchte", "möchtest"], a: 1, ex: "er möchte, without -t.", ex_fr: "er möchte, sans -t." },
      { q: "“I like cooking.”", q_fr: "« J'aime cuisiner. »", o: ["Ich mag kochen.", "Ich koche gern.", "Ich möchte kochen."], a: 1, ex: "Liking an activity: verb + gern.", ex_fr: "Aimer une activité : verbe + gern." },
      { q: "“I prefer coffee.”", q_fr: "« Je préfère le café. »", o: ["Ich trinke lieber Kaffee.", "Ich trinke gerner Kaffee.", "Ich trinke mehr gern Kaffee."], a: 0, ex: "gern → lieber → am liebsten.", ex_fr: "gern → lieber → am liebsten." },
      { q: "Someone offers you cake. You want some. You say:", q_fr: "On te propose du gâteau. Tu en veux. Tu dis :", o: ["Danke!", "Ja, gern!", "Nein, danke."], a: 1, ex: "Danke! alone often means no thanks. Ja, gern! means yes.", ex_fr: "Danke! tout seul veut souvent dire non merci. Ja, gern! veut dire oui." }
    ]
  },
  {
    id: 14, level: "A1", icon: "scale",
    title: "Ein Kilo Äpfel: quantities and the pronouns ihn, sie, es", title_fr: "Ein Kilo Äpfel : les quantités et les pronoms ihn, sie, es",
    subtitle: "Ask for the right amount, and say “I'll take it” with the right pronoun.", subtitle_fr: "Demander la bonne quantité, et dire « je le prends » avec le bon pronom.",
    body: `
<h2>Quantities: no "of"</h2>
<p>German puts the quantity directly before the noun, without any "of": <s-de>ein Kilo Äpfel</s-de> (a kilo of apples) · <s-de>eine Flasche Wasser</s-de> · <s-de>ein Stück Kuchen</s-de> · <s-de>hundert Gramm Käse</s-de> · <s-de>eine Packung Nudeln</s-de> · <s-de>ein Glas Marmelade</s-de>.</p>
<p>Units of measure stay singular after a number: <s-de>zwei Kilo</s-de>, <s-de>drei Liter</s-de>, <s-de>fünfhundert Gramm</s-de>. Containers take the plural: <s-de>zwei Flaschen</s-de>, <s-de>drei Packungen</s-de>.</p>
<h2>Prices</h2>
<p><s-de>Was kostet das?</s-de> · <s-de>Wie viel kosten die Tomaten?</s-de> — 2,50 € → <s-de>zwei Euro fünfzig</s-de> · 0,99 € → <s-de>neunundneunzig Cent</s-de>. Germans write a comma for decimals: 2,50 €.</p>
<h2>Him, her, it: ihn, sie, es</h2>
<table>
<tr><th>Subject</th><th>Object (accusative)</th></tr>
<tr><td><s-de>ich, du</s-de></td><td><s-de>mich, dich</s-de></td></tr>
<tr><td><s-de>er, sie, es</s-de></td><td><b><s-de>ihn</s-de></b>, <s-de>sie, es</s-de></td></tr>
<tr><td><s-de>wir, ihr</s-de></td><td><s-de>uns, euch</s-de></td></tr>
<tr><td><s-de>sie, Sie</s-de></td><td><s-de>sie, Sie</s-de></td></tr>
</table>
<p>The pronoun follows the German gender of the noun, even for things: <s-de>Der Käse ist gut. Ich nehme ihn.</s-de> (I'll take it.) · <s-de>Die Suppe? Ich probiere sie.</s-de> · <s-de>Das Brot? Ich kaufe es.</s-de> So English "it" can be <s-de>ihn</s-de>, <s-de>sie</s-de> or <s-de>es</s-de>.</p>
<div class="tip">At the market: <s-de>Ich hätte gern ein Kilo Äpfel.</s-de> — <s-de>Sonst noch etwas?</s-de> (Anything else?) — <s-de>Nein, danke, das ist alles.</s-de></div>
`,
    body_fr: `
<h2>Les quantités : pas de « de »</h2>
<p>L'allemand place la quantité juste devant le nom, sans « de » : <s-de>ein Kilo Äpfel</s-de> (un kilo de pommes) · <s-de>eine Flasche Wasser</s-de> (une bouteille d'eau) · <s-de>ein Stück Kuchen</s-de> · <s-de>hundert Gramm Käse</s-de> · <s-de>eine Packung Nudeln</s-de> · <s-de>ein Glas Marmelade</s-de>.</p>
<p>Les unités de mesure restent au singulier après un nombre : <s-de>zwei Kilo</s-de>, <s-de>drei Liter</s-de>, <s-de>fünfhundert Gramm</s-de>. Les contenants prennent le pluriel : <s-de>zwei Flaschen</s-de>, <s-de>drei Packungen</s-de>. Et pas de partitif : « du pain » = <s-de>Brot</s-de>, « de l'eau » = <s-de>Wasser</s-de>.</p>
<h2>Les prix</h2>
<p><s-de>Was kostet das?</s-de> · <s-de>Wie viel kosten die Tomaten?</s-de> — 2,50 € → <s-de>zwei Euro fünfzig</s-de> · 0,99 € → <s-de>neunundneunzig Cent</s-de>. Comme en France, on écrit les décimales avec une virgule.</p>
<h2>Le, la, les : ihn, sie, es</h2>
<table>
<tr><th>Sujet</th><th>COD (accusatif)</th></tr>
<tr><td><s-de>ich, du</s-de></td><td><s-de>mich, dich</s-de></td></tr>
<tr><td><s-de>er, sie, es</s-de></td><td><b><s-de>ihn</s-de></b>, <s-de>sie, es</s-de></td></tr>
<tr><td><s-de>wir, ihr</s-de></td><td><s-de>uns, euch</s-de></td></tr>
<tr><td><s-de>sie, Sie</s-de></td><td><s-de>sie, Sie</s-de></td></tr>
</table>
<p>Le pronom suit le genre allemand du nom, même pour les choses : <s-de>Der Käse ist gut. Ich nehme ihn.</s-de> (Je le prends.) · <s-de>Die Suppe? Ich probiere sie.</s-de> (Je la goûte.) · <s-de>Das Brot? Ich kaufe es.</s-de> Et sa place est après le verbe, pas devant comme en français : « je le prends » = <s-de>ich nehme ihn</s-de>.</p>
<div class="tip">Au marché : <s-de>Ich hätte gern ein Kilo Äpfel.</s-de> — <s-de>Sonst noch etwas?</s-de> (Et avec ceci ?) — <s-de>Nein, danke, das ist alles.</s-de> (Non merci, c'est tout.)</div>
`,
    examples: [
      ["Ein Kilo Tomaten, bitte.", "A kilo of tomatoes, please.", "Un kilo de tomates, s'il vous plaît."],
      ["Ich nehme zwei Flaschen Wasser.", "I'll take two bottles of water.", "Je prends deux bouteilles d'eau."],
      ["Was kosten die Äpfel? — Zwei Euro fünfzig das Kilo.", "How much are the apples? — Two fifty a kilo.", "Combien coûtent les pommes ? — Deux euros cinquante le kilo."],
      ["Der Käse ist lecker. Ich nehme ihn.", "The cheese is delicious. I'll take it.", "Le fromage est délicieux. Je le prends."],
      ["Die Suppe ist heiß. Probier sie mal!", "The soup is hot. Try it!", "La soupe est chaude. Goûte-la !"],
      ["Kennst du mich nicht mehr?", "Don't you remember me?", "Tu ne me reconnais plus ?"],
      ["Sonst noch etwas? — Nein, danke, das ist alles.", "Anything else? — No, thanks, that's all.", "Et avec ceci ? — Non merci, c'est tout."]
    ],
    quiz: [
      { q: "“A bottle of water”:", q_fr: "« Une bouteille d'eau » :", o: ["eine Flasche von Wasser", "eine Flasche Wasser", "eine Flasche mit Wasser"], a: 1, ex: "No “of” in German quantities.", ex_fr: "Pas de « de » dans les quantités allemandes." },
      { q: "“Three kilos of potatoes”:", q_fr: "« Trois kilos de pommes de terre » :", o: ["drei Kilos Kartoffeln", "drei Kilo Kartoffeln", "drei Kilo von Kartoffeln"], a: 1, ex: "Units stay singular after a number: drei Kilo.", ex_fr: "Les unités restent au singulier après un nombre : drei Kilo." },
      { q: "“Der Kuchen ist gut. Ich nehme ___.”", q_fr: "« Der Kuchen ist gut. Ich nehme ___. »", o: ["ihn", "sie", "es"], a: 0, ex: "der Kuchen → ihn (accusative of er).", ex_fr: "der Kuchen → ihn (accusatif de er)." },
      { q: "“Die Wurst? Ich mag ___ nicht.”", q_fr: "« Die Wurst? Ich mag ___ nicht. »", o: ["ihn", "sie", "es"], a: 1, ex: "die Wurst → sie.", ex_fr: "die Wurst → sie." },
      { q: "2,80 € is said:", q_fr: "2,80 € se dit :", o: ["zwei Euro achtzig", "zwei Komma achtzig Euro", "achtzig zwei Euro"], a: 0, ex: "zwei Euro achtzig.", ex_fr: "zwei Euro achtzig." }
    ]
  },
  {
    id: 15, level: "A1", kind: "functional", icon: "utensils",
    title: "Everyday German: in a café and at the restaurant", title_fr: "L'allemand de tous les jours : au café et au restaurant",
    subtitle: "Order, ask what's good, pay together or separately, and leave a tip the German way.", subtitle_fr: "Commander, demander ce qui est bon, payer ensemble ou séparément, et laisser un pourboire à l'allemande.",
    body: `
<h2>Ordering</h2>
<p><s-de>Die Speisekarte, bitte.</s-de> · <s-de>Was können Sie empfehlen?</s-de> (What do you recommend?) · <s-de>Ich hätte gern die Suppe.</s-de> · <s-de>Ich nehme den Fisch.</s-de> · <s-de>Für mich einen Salat, bitte.</s-de> · <s-de>Als Nachtisch nehme ich ein Eis.</s-de></p>
<p>The waiter may ask: <s-de>Was darf es sein?</s-de> (What can I get you?) · <s-de>Und zu trinken?</s-de> (And to drink?) · <s-de>Hat es Ihnen geschmeckt?</s-de> (Did you enjoy your meal?)</p>
<h2>Paying</h2>
<p><s-de>Zahlen, bitte!</s-de> or <s-de>Die Rechnung, bitte!</s-de> Then a typical question: <s-de>Zusammen oder getrennt?</s-de> (Together or separately?) In Germany, it's very common for friends to pay separately, each their own share.</p>
<p>Tipping: people usually round up the bill, often by about five to ten percent, and say the total they want to pay when they hand over the money: the bill is 27,40 €, you give 30 € and say <s-de>Dreißig, bitte.</s-de> or <s-de>Stimmt so!</s-de> (Keep the change.) Saying <s-de>Danke</s-de> as you hand over a note can be understood as "keep the change"!</p>
<h2>At the table</h2>
<p><s-de>Guten Appetit!</s-de> — <s-de>Danke, gleichfalls!</s-de> (Thanks, you too!) At work around lunchtime, many people greet each other with <s-de>Mahlzeit!</s-de></p>
<div class="tip">Water isn't always brought automatically: ask for <s-de>ein Glas Leitungswasser</s-de> (a glass of tap water) or <s-de>ein Mineralwasser</s-de>, and if you want it without bubbles, <s-de>ohne Kohlensäure</s-de>.</div>
`,
    body_fr: `
<h2>Commander</h2>
<p><s-de>Die Speisekarte, bitte.</s-de> · <s-de>Was können Sie empfehlen?</s-de> (Que nous conseillez-vous ?) · <s-de>Ich hätte gern die Suppe.</s-de> · <s-de>Ich nehme den Fisch.</s-de> · <s-de>Für mich einen Salat, bitte.</s-de> · <s-de>Als Nachtisch nehme ich ein Eis.</s-de> (En dessert, je prends une glace.)</p>
<p>Le serveur peut demander : <s-de>Was darf es sein?</s-de> (Qu'est-ce que je vous sers ?) · <s-de>Und zu trinken?</s-de> (Et comme boisson ?) · <s-de>Hat es Ihnen geschmeckt?</s-de> (Ça vous a plu ?)</p>
<h2>Payer</h2>
<p><s-de>Zahlen, bitte!</s-de> ou <s-de>Die Rechnung, bitte!</s-de> Puis une question typique : <s-de>Zusammen oder getrennt?</s-de> (Ensemble ou séparément ?) En Allemagne, il est très courant que des amis paient chacun leur part, même au restaurant : personne ne s'en étonne.</p>
<p>Le pourboire : on arrondit en général l'addition, souvent d'environ cinq à dix pour cent, et on annonce la somme qu'on veut payer en tendant l'argent : l'addition fait 27,40 €, tu donnes 30 € et tu dis <s-de>Dreißig, bitte.</s-de> ou <s-de>Stimmt so!</s-de> (Gardez la monnaie.) Dire <s-de>Danke</s-de> en tendant un billet peut être compris comme « gardez la monnaie » !</p>
<h2>À table</h2>
<p><s-de>Guten Appetit!</s-de> — <s-de>Danke, gleichfalls!</s-de> (Merci, vous aussi !) Au travail, vers midi, beaucoup de gens se saluent par <s-de>Mahlzeit!</s-de></p>
<div class="tip">L'eau n'est pas toujours servie d'office, et la carafe gratuite n'est pas une habitude partout : demande <s-de>ein Glas Leitungswasser</s-de> (un verre d'eau du robinet) ou <s-de>ein Mineralwasser</s-de>, et si tu la veux plate, <s-de>ohne Kohlensäure</s-de>.</div>
`,
    examples: [
      ["Was können Sie empfehlen?", "What do you recommend?", "Que nous conseillez-vous ?"],
      ["Für mich die Tomatensuppe, bitte.", "The tomato soup for me, please.", "Pour moi, la soupe de tomates, s'il vous plaît."],
      ["Und zu trinken? — Ein Mineralwasser ohne Kohlensäure.", "And to drink? — A still mineral water.", "Et comme boisson ? — Une eau minérale plate."],
      ["Zahlen, bitte! — Zusammen oder getrennt?", "The bill, please! — Together or separately?", "L'addition, s'il vous plaît ! — Ensemble ou séparément ?"],
      ["Das macht siebenundzwanzig Euro vierzig.", "That's twenty-seven euros forty.", "Ça fait vingt-sept euros quarante."],
      ["Dreißig, bitte. Stimmt so!", "Thirty, please. Keep the change!", "Trente, s'il vous plaît. Gardez la monnaie !"],
      ["Guten Appetit! — Danke, gleichfalls!", "Enjoy your meal! — Thanks, you too!", "Bon appétit ! — Merci, vous aussi !"]
    ],
    quiz: [
      { q: "You want the bill. You say:", q_fr: "Tu veux l'addition. Tu dis :", o: ["Zahlen, bitte!", "Bezahlung, bitte!", "Die Karte, bitte!"], a: 0, ex: "Zahlen, bitte! or Die Rechnung, bitte!", ex_fr: "Zahlen, bitte! ou Die Rechnung, bitte!" },
      { q: "“Zusammen oder getrennt?” means:", q_fr: "« Zusammen oder getrennt? » veut dire :", o: ["Together or separately?", "Here or to take away?", "Cash or card?"], o_fr: ["Ensemble ou séparément ?", "Sur place ou à emporter ?", "Liquide ou carte ?"], a: 0, ex: "Each person can pay their own share.", ex_fr: "Chacun peut payer sa part." },
      { q: "The bill is 18,60 €. You give 20 € and want to leave the rest. You say:", q_fr: "L'addition fait 18,60 €. Tu donnes 20 € et veux laisser le reste. Tu dis :", o: ["Stimmt so!", "Das ist alles.", "Zusammen, bitte."], a: 0, ex: "Stimmt so! = keep the change.", ex_fr: "Stimmt so! = gardez la monnaie." },
      { q: "Someone says “Guten Appetit!”. You answer:", q_fr: "Quelqu'un dit « Guten Appetit! ». Tu réponds :", o: ["Danke, gleichfalls!", "Bitte schön!", "Gute Nacht!"], a: 0, ex: "gleichfalls = likewise, you too.", ex_fr: "gleichfalls = de même, vous aussi." },
      { q: "“Still water” is:", q_fr: "« De l'eau plate » se dit :", o: ["Wasser ohne Kohlensäure", "Wasser mit Kohlensäure", "stilles Glas"], a: 0, ex: "ohne Kohlensäure = without bubbles.", ex_fr: "ohne Kohlensäure = sans bulles." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    13: {
      gap: [["Ich ___ einen Kaffee, bitte. (möchten)", "möchte"], ["___ du Käse? (mögen)", "Magst"], ["Ich trinke ___ Tee als Kaffee.", "lieber", "rather", "plutôt"], ["Was ___ du trinken? (möchten)", "möchtest"]],
      fix: [["Er möchtet einen Tee.", "Er möchte einen Tee.", "er möchte, without -t.", "er möchte, sans -t."], ["Ich mag kochen.", "Ich koche gern.", "To like doing something: verb + gern.", "Aimer faire quelque chose : verbe + gern."]],
      task: ["Say what you like, what you prefer and what you like best, for food and for drinks (four sentences).", "Dis ce que tu aimes, ce que tu préfères et ce que tu aimes le plus, pour manger et pour boire (quatre phrases).", "Ich esse gern Obst, aber ich esse lieber Gemüse. Am liebsten esse ich Nudeln mit Tomaten. Ich trinke gern Tee, und am liebsten trinke ich Apfelsaft. Fisch mag ich nicht."]
    },
    14: {
      gap: [["Ein Kilo ___, bitte. (der Apfel)", "Äpfel"], ["Ich nehme zwei ___ Wasser. (die Flasche)", "Flaschen"], ["Der Käse ist gut. Ich nehme ___.", "ihn", "it", "le"], ["Die Suppe? Ich probiere ___.", "sie", "it", "la"]],
      fix: [["Ein Kilo von Tomaten, bitte.", "Ein Kilo Tomaten, bitte.", "No “von” in quantities.", "Pas de « von » dans les quantités."], ["Der Kuchen ist lecker. Ich nehme es.", "Der Kuchen ist lecker. Ich nehme ihn.", "der Kuchen → ihn.", "der Kuchen → ihn."]],
      task: ["Write a shopping list with six items and their quantities.", "Écris une liste de courses de six produits avec leurs quantités.", "ein Kilo Kartoffeln, zwei Liter Milch, eine Flasche Apfelsaft, hundert Gramm Käse, sechs Eier, eine Packung Nudeln"]
    },
    15: {
      gap: [["Die ___, bitte!", "Rechnung", "the bill", "l'addition"], ["Zusammen oder ___?", "getrennt", "separately", "séparément"], ["Guten Appetit! — Danke, ___!", "gleichfalls", "you too", "vous aussi"], ["Was können Sie ___?", "empfehlen", "to recommend", "recommander"]],
      fix: [["Ein Wasser ohne Gas, bitte.", "Ein Wasser ohne Kohlensäure, bitte.", "Still water: ohne Kohlensäure.", "Eau plate : ohne Kohlensäure."], ["Ich bekomme einen Salat.", "Ich hätte gern einen Salat.|Ich nehme einen Salat.|Ich möchte einen Salat.", "To order: Ich hätte gern / Ich nehme / Ich möchte. (bekommen means to get, to receive.)", "Pour commander : Ich hätte gern / Ich nehme / Ich möchte. (bekommen veut dire recevoir.)"]],
      task: ["You're at a restaurant with a friend: write what you both order and how you pay (four sentences).", "Tu es au restaurant avec une amie : écris ce que vous commandez et comment vous payez (quatre phrases).", "Ich hätte gern die Tomatensuppe und danach den Fisch. Meine Freundin nimmt einen Salat. Zu trinken nehmen wir zwei Mineralwasser. Wir zahlen getrennt, und ich gebe zwei Euro Trinkgeld."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "baeckerei", lesson: 13, level: "A1", icon: "croissant", partner: "Monika", role: "a baker", role_fr: "la boulangère",
    title: "At the bakery", title_fr: "À la boulangerie",
    setting: "It's Sunday morning in Hamburg. You go to the bakery for breakfast. Monika serves you.", setting_fr: "C'est dimanche matin à Hambourg. Tu vas à la boulangerie pour le petit-déjeuner. Monika te sert.",
    turns: [
      { p: "Guten Morgen! Was darf es sein?", en: "Good morning! What can I get you?", fr: "Bonjour ! Qu'est-ce que je vous sers ?" },
      { y: ["Guten Morgen! Ich hätte gern vier Brötchen, bitte.", "Guten Morgen! Ich hätte gern vier Brötchens, bitte.", "Guten Morgen! Ich habe gern vier Brötchen, bitte."], en: "Good morning! I'd like four rolls, please.", fr: "Bonjour ! Je voudrais quatre petits pains, s'il vous plaît.", why: "Ich hätte gern… is the polite request; das Brötchen has no plural ending.", why_fr: "Ich hätte gern… est la demande polie ; das Brötchen ne prend pas de terminaison au pluriel." },
      { p: "Gern. Möchten Sie auch ein Brot? Das Roggenbrot ist ganz frisch.", en: "Certainly. Would you also like a loaf? The rye bread is very fresh.", fr: "Volontiers. Vous voulez aussi un pain ? Le pain de seigle est tout frais." },
      { y: ["Ja, das nehme ich.", "Ja, den nehme ich.", "Ja, die nehme ich."], en: "Yes, I'll take that.", fr: "Oui, je le prends.", why: "das Brot is neuter: das (or es).", why_fr: "das Brot est neutre : das (ou es)." },
      { p: "Sonst noch etwas?", en: "Anything else?", fr: "Et avec ceci ?" },
      { y: ["Zwei Stück Apfelkuchen, bitte. Ich mag Apfelkuchen sehr!", "Zwei Stücke von Apfelkuchen, bitte. Ich mag Apfelkuchen sehr!", "Zwei Stück Apfelkuchen, bitte. Ich möchte Apfelkuchen sehr!"], en: "Two pieces of apple cake, please. I really like apple cake!", fr: "Deux parts de tarte aux pommes, s'il vous plaît. J'adore la tarte aux pommes !", why: "zwei Stück, without of; a taste is mögen, not möchten.", why_fr: "zwei Stück, sans « de » ; un goût, c'est mögen, pas möchten." },
      { p: "Sehr gern. Das macht neun Euro achtzig.", en: "Certainly. That's nine euros eighty.", fr: "Avec plaisir. Ça fait neuf euros quatre-vingts." },
      { y: ["Kann ich mit Karte zahlen?", "Kann ich mit Karte zahle?", "Kann ich zahlen mit Karte?"], en: "Can I pay by card?", fr: "Je peux payer par carte ?", why: "With können, the second verb goes to the end, in the infinitive: zahlen.", why_fr: "Avec können, le deuxième verbe part à la fin, à l'infinitif : zahlen." },
      { p: "Natürlich. So, bitte schön! Schönen Sonntag!", en: "Of course. There you are! Have a nice Sunday!", fr: "Bien sûr. Voilà ! Bon dimanche !" },
      { y: ["Danke, Ihnen auch!", "Danke, Sie auch!", "Danke, dir auch!"], en: "Thanks, you too!", fr: "Merci, à vous aussi !", why: "To someone you say Sie to: Ihnen auch.", why_fr: "À quelqu'un qu'on vouvoie : Ihnen auch." }
    ] },
  { id: "restaurant", lesson: 15, level: "A1", icon: "utensils", partner: "Stefan", role: "a waiter", role_fr: "le serveur",
    title: "Dinner at a restaurant", title_fr: "Dîner au restaurant",
    setting: "You're having dinner in a restaurant in Stuttgart with a friend. Stefan is your waiter.", setting_fr: "Tu dînes dans un restaurant de Stuttgart avec une amie. Stefan est votre serveur.",
    turns: [
      { p: "Guten Abend! Haben Sie schon gewählt?", en: "Good evening! Have you chosen yet?", fr: "Bonsoir ! Vous avez choisi ?" },
      { y: ["Noch nicht. Was können Sie empfehlen?", "Noch nicht. Was können Sie empfehlt?", "Noch nicht. Was Sie können empfehlen?"], en: "Not yet. What do you recommend?", fr: "Pas encore. Que nous conseillez-vous ?", why: "können in second place, empfehlen in the infinitive at the end.", why_fr: "können en deuxième position, empfehlen à l'infinitif à la fin." },
      { p: "Die Maultaschen sind heute sehr gut. Das ist eine Spezialität aus Schwaben.", en: "The Maultaschen are very good today. It's a speciality from Swabia.", fr: "Les Maultaschen sont très bonnes aujourd'hui. C'est une spécialité souabe." },
      { y: ["Gut, die nehme ich. Und meine Freundin nimmt den Salat.", "Gut, den nehme ich. Und meine Freundin nimmt den Salat.", "Gut, die nehme ich. Und meine Freundin nehmt den Salat."], en: "Good, I'll have those. And my friend will have the salad.", fr: "D'accord, je les prends. Et mon amie prend la salade.", why: "die Maultaschen (plural) → die; nehmen → sie nimmt.", why_fr: "die Maultaschen (pluriel) → die ; nehmen → sie nimmt." },
      { p: "Sehr gern. Und zu trinken?", en: "Certainly. And to drink?", fr: "Très bien. Et comme boisson ?" },
      { y: ["Zwei Mineralwasser ohne Kohlensäure, bitte.", "Zwei Mineralwasser ohne Gas, bitte.", "Zwei Mineralwasser mit ohne Kohlensäure, bitte."], en: "Two still mineral waters, please.", fr: "Deux eaux minérales plates, s'il vous plaît.", why: "Still: ohne Kohlensäure.", why_fr: "Plate : ohne Kohlensäure." },
      { p: "(Later) Hat es Ihnen geschmeckt? Möchten Sie noch einen Nachtisch?", en: "(Later) Did you enjoy it? Would you like a dessert?", fr: "(Plus tard) Ça vous a plu ? Vous voulez un dessert ?" },
      { y: ["Es war sehr lecker, danke! Keinen Nachtisch, aber die Rechnung, bitte.", "Es war sehr lecker, danke! Nicht Nachtisch, aber die Rechnung, bitte.", "Es war sehr lecker, danke! Keine Nachtisch, aber die Rechnung, bitte."], en: "It was delicious, thanks! No dessert, but the bill, please.", fr: "C'était délicieux, merci ! Pas de dessert, mais l'addition, s'il vous plaît.", why: "The answer echoes the question (einen Nachtisch): keinen Nachtisch. Nachtisch is masculine, and a noun is negated with kein, not nicht.", why_fr: "La réponse reprend la question (einen Nachtisch) : keinen Nachtisch. Nachtisch est masculin, et un nom se nie avec kein, pas nicht." },
      { p: "Zusammen oder getrennt?", en: "Together or separately?", fr: "Ensemble ou séparément ?" },
      { y: ["Getrennt, bitte. Ich zahle die Maultaschen und das Wasser.", "Getrennt, bitte. Ich zahle der Maultaschen und das Wasser.", "Getrennt, bitte. Ich zahlen die Maultaschen und das Wasser."], en: "Separately, please. I'll pay for the Maultaschen and the water.", fr: "Séparément, s'il vous plaît. Je paie les Maultaschen et l'eau.", why: "zahlen + accusative: die Maultaschen; ich zahle.", why_fr: "zahlen + accusatif : die Maultaschen ; ich zahle." }
    ] }
  );

  W.READINGS.push({
    id: "brotkultur", level: "A1", icon: "croissant", title: "Brot, Brot, Brot!", genre: "Article",
    intro: "Rolls on Sunday, bread for dinner, thousands of kinds of bread: why bread matters so much in Germany. Food vocabulary, quantities and gern.",
    intro_fr: "Des petits pains le dimanche, du pain au dîner, des milliers de sortes de pain : pourquoi le pain compte tant en Allemagne. Le vocabulaire de l'alimentation, les quantités et gern.",
    paragraphs: [
      { de: "In Deutschland isst man gern und viel Brot. Es gibt helles Brot und dunkles Brot, Brot mit Körnern und Roggenbrot. Das deutsche Brotregister zählt mehr als dreitausend Brotsorten!", en: "In Germany, people like eating bread, and they eat a lot of it. There is white bread and dark bread, bread with grains and rye bread. The German bread register counts more than three thousand kinds of bread!", fr: "En Allemagne, on aime le pain et on en mange beaucoup. Il y a du pain blanc et du pain foncé, du pain aux céréales et du pain de seigle. Le registre allemand du pain compte plus de trois mille sortes de pain !" },
      { de: "Am Sonntagmorgen holen viele Familien frische Brötchen beim Bäcker. Zum Frühstück gibt es Brötchen mit Butter, Marmelade, Käse oder Wurst, ein Ei und einen Kaffee.", en: "On Sunday morning, many families get fresh rolls from the baker's. For breakfast there are rolls with butter, jam, cheese or cold meat, an egg and a coffee.", fr: "Le dimanche matin, beaucoup de familles vont chercher des petits pains frais chez le boulanger. Au petit-déjeuner, il y a des petits pains avec du beurre, de la confiture, du fromage ou de la charcuterie, un œuf et un café." },
      { de: "Und am Abend? Viele Deutsche essen warm zu Mittag und am Abend kalt: Brot mit Käse, Wurst und ein bisschen Gemüse. Diese Mahlzeit heißt Abendbrot.", en: "And in the evening? Many Germans have a hot meal at lunchtime and a cold one in the evening: bread with cheese, cold meat and a few vegetables. This meal is called Abendbrot, evening bread.", fr: "Et le soir ? Beaucoup d'Allemands mangent chaud à midi et froid le soir : du pain avec du fromage, de la charcuterie et quelques légumes. Ce repas s'appelle Abendbrot, le « pain du soir »." },
      { de: "Seit 2014 steht die deutsche Brotkultur im Verzeichnis des immateriellen Kulturerbes in Deutschland. Brot ist hier also nicht nur Essen: Es ist auch Kultur!", en: "Since 2014, German bread culture has been on the register of intangible cultural heritage in Germany. So here, bread isn't just food: it's culture too!", fr: "Depuis 2014, la culture du pain allemande figure au registre du patrimoine culturel immatériel en Allemagne. Ici, le pain n'est donc pas seulement de la nourriture : c'est aussi de la culture !" }
    ],
    glossary: { "helles": ["light, white", "clair, blanc"], "dunkles": ["dark", "foncé"], "Körnern": ["grains, seeds", "graines, céréales"], "Roggenbrot": ["rye bread", "pain de seigle"], "Brotregister": ["bread register", "registre du pain"], "zählt": ["counts", "compte"], "dreitausend": ["three thousand", "trois mille"], "Brotsorten": ["kinds of bread", "sortes de pain"], "Sonntagmorgen": ["Sunday morning", "dimanche matin"], "holen": ["fetch, get", "vont chercher"], "Marmelade": ["jam", "confiture"], "warm": ["", "chaud"], "kalt": ["cold", "froid"], "Mahlzeit": ["meal", "repas"], "Abendbrot": ["evening meal (literally evening bread)", "dîner (littéralement pain du soir)"], "Verzeichnis": ["register, list", "registre, liste"], "immateriellen": ["intangible", "immatériel"], "Kulturerbes": ["cultural heritage", "patrimoine culturel"], "Kultur": ["culture", ""] },
    questions: [
      { q: "Wie viele Brotsorten zählt das deutsche Brotregister?", o: ["Mehr als dreitausend", "Dreihundert", "Dreißig"], a: 0 },
      { q: "Was holen viele Familien am Sonntagmorgen?", o: ["Frische Brötchen", "Kuchen", "Wurst"], a: 0 },
      { q: "Was gibt es zum Frühstück?", o: ["Brötchen, ein Ei und Kaffee", "Suppe und Fisch", "Nudeln und Salat"], a: 0 },
      { q: "Was ist das Abendbrot?", o: ["Ein kaltes Essen am Abend mit Brot", "Ein warmes Essen am Mittag", "Ein Kuchen"], a: 0 },
      { q: "Seit wann steht die Brotkultur im Verzeichnis des Kulturerbes?", o: ["Seit 2014", "Seit 1990", "Seit 2020"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-a1-5", unit: "a1-5", level: "A1", icon: "shopping-basket",
    title: "Auf dem Wochenmarkt", title_fr: "Au marché",
    context: "Matthias does his Saturday shopping at the market in Freiburg. Ingrid sells fruit and vegetables.", context_fr: "Matthias fait ses courses du samedi au marché de Fribourg-en-Brisgau. Ingrid vend des fruits et légumes.",
    words: [["die Erdbeeren", "strawberries", "les fraises"], ["die Schale", "the punnet, the box", "la barquette"], ["der Spargel", "asparagus", "les asperges"], ["zusammen", "altogether", "en tout"], ["das Wechselgeld", "the change", "la monnaie"]],
    lines: [["Ingrid", "Guten Morgen! Was darf es sein?", "de-DE"], ["Matthias", "Guten Morgen! Ich hätte gern ein Kilo Kartoffeln und drei Tomaten.", "de-DE"], ["Ingrid", "Gern. Sonst noch etwas? Der Spargel ist heute ganz frisch.", "de-DE"], ["Matthias", "Was kostet der Spargel?", "de-DE"], ["Ingrid", "Neun Euro das Kilo.", "de-DE"], ["Matthias", "Hm, das ist ein bisschen teuer. Ich nehme ihn nicht. Aber die Erdbeeren sehen toll aus!", "de-DE"], ["Ingrid", "Die Schale kostet drei Euro fünfzig.", "de-DE"], ["Matthias", "Dann nehme ich zwei Schalen. Was macht das zusammen?", "de-DE"], ["Ingrid", "Zusammen sind das elf Euro zwanzig.", "de-DE"], ["Matthias", "Hier sind zwanzig Euro.", "de-DE"], ["Ingrid", "Und acht Euro achtzig zurück. Schönes Wochenende!", "de-DE"]],
    gist: ["Was macht Matthias?", ["Er kauft Obst und Gemüse auf dem Markt.", "Er bestellt im Restaurant.", "Er backt einen Kuchen."]],
    detail: [["Wie viele Kartoffeln kauft Matthias?", ["Ein Kilo", "Drei Kilo", "Hundert Gramm"]], ["Warum nimmt er den Spargel nicht?", ["Er ist zu teuer.", "Er ist nicht frisch.", "Er mag ihn nicht."]], ["Wie viele Schalen Erdbeeren kauft er?", ["Zwei", "Eine", "Drei"]], ["Wie viel bezahlt er zusammen?", ["11,20 €", "8,80 €", "20 €"]]],
    decode: ["Ich nehme ihn nicht.", "Was macht das zusammen?"],
    tip: "Prices come in two parts: Euro first, then the cents, without the word Cent: elf Euro zwanzig = 11,20 €. Write the euros as soon as you hear them, then the cents.", tip_fr: "Les prix arrivent en deux morceaux : les euros d'abord, puis les centimes, sans le mot Cent : elf Euro zwanzig = 11,20 €. Écris les euros dès que tu les entends, puis les centimes."
  }]);

  W.PROMPTS.push({ id: "de-a1-5", level: "A1", q: "Was isst und trinkst du gern? Was magst du nicht? Was isst du am liebsten?", en: "What do you like eating and drinking? What don't you like? What do you like best?", fr: "Qu'est-ce que tu aimes manger et boire ? Qu'est-ce que tu n'aimes pas ? Que préfères-tu ?", time: 60,
    phrases: ["Ich esse gern…", "Ich trinke lieber…", "Am liebsten esse ich…", "… mag ich nicht.", "Zum Frühstück esse ich…"],
    model: "Ich esse gern Obst und Gemüse, und ich koche oft Nudeln. Zum Frühstück esse ich ein Brötchen mit Marmelade. Ich trinke gern Tee, aber ich trinke lieber Kaffee. Fisch mag ich nicht so gern. Am liebsten esse ich Pizza mit meinen Freunden!" });

  W.WRITING_GUIDE["a1-5"] = { genre: "A note to a flatmate about the shopping", genre_fr: "Un mot à ta colocataire pour les courses",
    plan: [["Say hello and why you're writing.", "Salue et dis pourquoi tu écris."], ["Say what you need for dinner, with quantities.", "Dis ce qu'il faut pour le dîner, avec les quantités."], ["Say what your guests like or don't like.", "Dis ce que vos invités aiment ou n'aiment pas."], ["Say where to buy it, or where the money is.", "Dis où l'acheter, ou où est l'argent."], ["Thank them and say goodbye.", "Remercie et dis au revoir."]],
    marks: [["Kannst du bitte einkaufen?", "a polite request", "une demande polie"], ["ein Kilo Kartoffeln", "a quantity without “of”", "une quantité sans « de »"], ["zwei Flaschen Wein", "containers take the plural", "les contenants prennent le pluriel"], ["Jonas isst kein Fleisch", "kein: no, not any", "kein : pas de"], ["er mag Fisch sehr gern", "mögen + gern", "mögen + gern"], ["Vielen Dank!", "thanks", "merci"]] };

  W.COURSE.push({ id: "a1-5", level: "A1", icon: "shopping-basket", title: "Food and shopping", title_fr: "Manger et faire les courses",
    intro: "In this unit, you'll eat, drink and shop in German: möchten for polite requests, mögen and gern for your tastes, quantities without “of”, the pronouns ihn, sie and es, and everything you need at the bakery, at the market and at the restaurant, tipping included.",
    intro_fr: "Dans cette unité, tu vas manger, boire et faire tes courses en allemand : möchten pour demander poliment, mögen et gern pour tes goûts, les quantités sans « de », les pronoms ihn, sie et es, et tout ce qu'il faut à la boulangerie, au marché et au restaurant, pourboire compris.",
    can: ["Talk about food and your tastes (gern, lieber, am liebsten)", "Order politely with möchten and Ich hätte gern", "Ask for quantities and prices; use ihn, sie, es", "Order and pay at a restaurant, the German way"],
    can_fr: ["Parler de nourriture et de tes goûts (gern, lieber, am liebsten)", "Commander poliment avec möchten et Ich hätte gern", "Demander des quantités et des prix ; employer ihn, sie, es", "Commander et payer au restaurant, à l'allemande"],
    lessons: [13, 14, 15], vocab: ["essenDE", "einkaufenDE", "restaurantDE"], reading: "brotkultur", prompt: "de-a1-5",
    writing: { task: "You're having friends over for dinner. Leave a note (30-50 words) asking your flatmate Leonie to do the shopping: what to buy, how much, and what your guests like or don't like.", task_fr: "Tu reçois des amis à dîner. Laisse un mot (30 à 50 mots) à ta colocataire Leonie pour lui demander de faire les courses : quoi acheter, en quelle quantité, et ce que vos invités aiment ou n'aiment pas.", words: "30-50",
      tips: ["Liebe Leonie,", "Kannst du bitte…?", "ein Kilo / zwei Flaschen…", "… isst kein…", "Vielen Dank!"],
      checklist: ["I wrote quantities without “of” (ein Kilo Kartoffeln)", "Containers are in the plural (zwei Flaschen)", "I used gern, mögen or kein for tastes", "I asked politely (Kannst du bitte…?)", "I stayed between 30 and 50 words"],
      checklist_fr: ["J'ai écrit les quantités sans « de » (ein Kilo Kartoffeln)", "Les contenants sont au pluriel (zwei Flaschen)", "J'ai employé gern, mögen ou kein pour les goûts", "J'ai demandé poliment (Kannst du bitte…?)", "J'ai écrit entre 30 et 50 mots"],
      model: "Liebe Leonie,\n\nheute Abend kommen Jonas und Mia zum Essen. Kannst du bitte einkaufen? Wir brauchen ein Kilo Kartoffeln, Salat und zwei Flaschen Wein. Jonas isst kein Fleisch, aber er mag Fisch sehr gern. Das Geld ist auf dem Tisch.\n\nVielen Dank!\nCamille" } });
})();
