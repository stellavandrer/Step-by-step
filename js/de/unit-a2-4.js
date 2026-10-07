/* Cours d'allemand, unité A2-4 « Clothes and shopping / Les vêtements et les achats » : les terminaisons des
   adjectifs (der rote Pullover, einen roten Pullover, ein rotes Kleid), le comparatif et le superlatif
   (größer als, so groß wie, am größten), dans un magasin de vêtements (taille, cabine, échange).
   Explications et traductions en anglais ET en français. Personnages fictifs, prénoms allemands.
   Faits vérifiables seulement : l'Oktoberfest remonte au mariage du prince héritier Ludwig et de Thérèse, le
   12 octobre 1810, avec une course de chevaux sur la Theresienwiese (« die Wiesn ») ; aujourd'hui, il commence
   en septembre et beaucoup de visiteurs portent la Tracht (Dirndl, Lederhose) ; achats en ligne : droit de
   rétractation de 14 jours ; en magasin, l'échange d'un article sans défaut est un geste commercial. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "kleidungDE", icon: "shirt", title: "Clothes", title_fr: "Les vêtements", level: "A2", words: [
    ["die Kleidung", "clothes, clothing", "les vêtements", "Ich kaufe meine Kleidung oft secondhand."],
    ["die Hose, -n", "the trousers", "le pantalon", "Die Hose ist zu lang."],
    ["das Hemd, -en", "the shirt", "la chemise", "Er trägt ein weißes Hemd."],
    ["die Bluse, -n", "the blouse", "le chemisier", "Die Bluse ist aus Baumwolle."],
    ["der Pullover, -", "the jumper, the sweater", "le pull", "Im Winter trage ich einen dicken Pullover."],
    ["das Kleid, -er", "the dress", "la robe", "Sie trägt ein rotes Kleid."],
    ["der Rock, ¨-e", "the skirt", "la jupe", "Der Rock ist zu kurz."],
    ["der Mantel, ¨", "the coat", "le manteau", "Nimm deinen Mantel mit, es ist kalt!"],
    ["der Anzug, ¨-e", "the suit", "le costume", "Für die Hochzeit kauft er einen Anzug."],
    ["der Schuh, -e", "the shoe", "la chaussure", "Diese Schuhe sind sehr bequem."],
    ["der Stiefel, -", "the boot", "la botte", "Im Winter trage ich Stiefel."],
    ["die Socke, -n", "the sock", "la chaussette", "Wo ist meine andere Socke?"],
    ["der Schal, -s", "the scarf", "l'écharpe", "Der Schal ist aus Wolle."],
    ["die Mütze, -n", "the hat, the beanie", "le bonnet", "Zieh eine Mütze an!"],
    ["die Handschuhe (pl)", "gloves", "les gants", "Ich habe meine Handschuhe vergessen."],
    ["anziehen", "to put on (clothes)", "mettre, enfiler (un vêtement)", "Ich ziehe meine Jacke an."],
    ["ausziehen", "to take off (clothes); to move out", "enlever (un vêtement) ; quitter un logement", "Zieh bitte die Schuhe aus."],
    ["tragen", "to wear", "porter", "Sie trägt gern Kleider."]
  ] },
  { id: "farbenDE", icon: "palette", title: "Colours and materials", title_fr: "Les couleurs et les matières", level: "A2", words: [
    ["die Farbe, -n", "the colour", "la couleur", "Welche Farbe hat dein Auto?"],
    ["rot", "red", "rouge", "Ich mag rote Schuhe."],
    ["blau", "blue", "bleu", "Der Himmel ist blau."],
    ["grün", "green", "vert", "Sie trägt einen grünen Mantel."],
    ["gelb", "yellow", "jaune", "Die Bananen sind gelb."],
    ["schwarz", "black", "noir", "Er trägt immer schwarze Kleidung."],
    ["weiß", "white", "blanc", "Ein weißes Hemd passt immer."],
    ["grau", "grey", "gris", "Der Himmel ist heute grau."],
    ["braun", "brown", "marron, brun", "Ich suche braune Stiefel."],
    ["rosa", "pink", "rose", "Das rosa Kleid ist süß."],
    ["lila", "purple", "violet", "Sie hat eine lila Mütze."],
    ["bunt", "colourful", "coloré, multicolore", "Das Hemd ist sehr bunt."],
    ["hellblau", "light blue", "bleu clair", "Ich nehme die hellblaue Bluse."],
    ["dunkelgrün", "dark green", "vert foncé", "Der Pullover ist dunkelgrün."],
    ["die Baumwolle", "cotton", "le coton", "Das T-Shirt ist aus Baumwolle."],
    ["die Wolle", "wool", "la laine", "Der Schal ist aus Wolle."],
    ["das Leder", "leather", "le cuir", "Die Tasche ist aus Leder."],
    ["gestreift", "striped", "rayé", "Er trägt ein gestreiftes Hemd."],
    ["kariert", "checked", "à carreaux", "Ich mag karierte Hemden."]
  ] },
  { id: "modeDE", icon: "shopping-bag", title: "In a clothes shop", title_fr: "Dans un magasin de vêtements", level: "A2", words: [
    ["die Größe, -n", "the size", "la taille", "Welche Größe haben Sie?"],
    ["anprobieren", "to try on", "essayer", "Kann ich die Hose anprobieren?"],
    ["die Umkleidekabine, -n", "the fitting room", "la cabine d'essayage", "Die Umkleidekabinen sind dort hinten."],
    ["Das steht dir gut.", "That suits you.", "Ça te va bien.", "Die blaue Jacke steht dir sehr gut!"],
    ["zu eng", "too tight", "trop serré", "Die Hose ist mir zu eng."],
    ["zu groß", "too big", "trop grand", "Der Pullover ist mir zu groß."],
    ["passen", "to fit; to go with", "aller (bien), être à la bonne taille", "Die Schuhe passen perfekt."],
    ["umtauschen", "to exchange", "échanger", "Kann ich den Pullover umtauschen?"],
    ["zurückgeben", "to return, to give back", "rendre, rapporter", "Ich möchte die Jacke zurückgeben."],
    ["der Kassenbon, -s", "the receipt", "le ticket de caisse", "Haben Sie den Kassenbon noch?"],
    ["die Kasse, -n", "the till, the checkout", "la caisse", "Bitte zahlen Sie an der Kasse."],
    ["das Sonderangebot, -e", "the special offer", "la promotion", "Die Schuhe sind im Sonderangebot."],
    ["der Rabatt, -e", "the discount", "la réduction, la remise", "Heute gibt es zwanzig Prozent Rabatt."],
    ["reduziert", "reduced", "soldé, à prix réduit", "Alle Mäntel sind reduziert."],
    ["modisch", "fashionable", "à la mode", "Sie ist immer sehr modisch angezogen."],
    ["elegant", "elegant", "élégant", "Für die Hochzeit suche ich etwas Elegantes."],
    ["welcher, welche, welches", "which", "quel, quelle", "Welche Farbe gefällt dir besser?"]
  ] });

  W.LESSONS.push(
  {
    id: 31, level: "A2", icon: "palette",
    title: "Der rote Pullover, ein rotes Kleid: adjective endings", title_fr: "Der rote Pullover, ein rotes Kleid : les terminaisons des adjectifs",
    subtitle: "An adjective before a noun takes an ending. Two simple patterns cover most cases.", subtitle_fr: "Un adjectif devant un nom prend une terminaison. Deux schémas simples couvrent la plupart des cas.",
    body: `
<h2>After the noun: no ending</h2>
<p>After <s-de>sein</s-de>, the adjective never changes: <s-de>Der Pullover ist rot.</s-de> · <s-de>Die Jacke ist rot.</s-de> · <s-de>Die Schuhe sind rot.</s-de></p>
<h2>Before the noun, after der / die / das</h2>
<p>The article already shows the gender, so the adjective takes a short ending: <b>-e</b> or <b>-en</b>.</p>
<table>
<tr><th></th><th>Subject</th><th>Object</th></tr>
<tr><td>masc.</td><td><s-de>der rote Pullover</s-de></td><td><s-de>den roten Pullover</s-de></td></tr>
<tr><td>fem.</td><td><s-de>die rote Jacke</s-de></td><td><s-de>die rote Jacke</s-de></td></tr>
<tr><td>neuter</td><td><s-de>das rote Kleid</s-de></td><td><s-de>das rote Kleid</s-de></td></tr>
<tr><td>plural</td><td><s-de>die roten Schuhe</s-de></td><td><s-de>die roten Schuhe</s-de></td></tr>
</table>
<h2>After ein / kein / mein</h2>
<p>Here, when the article doesn't show the gender (<s-de>ein</s-de> could be masculine or neuter), the adjective shows it: <s-de>ein roter Pullover</s-de> (-er, masculine), <s-de>ein rotes Kleid</s-de> (-es, neuter), <s-de>eine rote Jacke</s-de>, and in the accusative <s-de>einen roten Pullover</s-de>. Plural without article: <s-de>rote Schuhe</s-de>.</p>
<p>The trick: the ending -er / -e / -es echoes <s-de>der</s-de> / <s-de>die</s-de> / <s-de>das</s-de>. Some colours never change: <s-de>rosa</s-de>, <s-de>lila</s-de> (<s-de>ein lila Schal</s-de>).</p>
<div class="tip">Ask with <s-de>welcher</s-de> (which), which takes the endings of der: <s-de>Welcher Pullover?</s-de> · <s-de>Welche Jacke?</s-de> · <s-de>Welches Kleid?</s-de> · <s-de>Welchen Rock nimmst du?</s-de> The answer often uses <s-de>dieser</s-de> (this one): <s-de>Diesen hier!</s-de></div>
`,
    body_fr: `
<h2>Après le nom : pas de terminaison</h2>
<p>Après <s-de>sein</s-de>, l'adjectif ne change jamais, contrairement au français : <s-de>Der Pullover ist rot.</s-de> · <s-de>Die Jacke ist rot.</s-de> (La veste est rouge.) · <s-de>Die Schuhe sind rot.</s-de> (Les chaussures sont rouges.)</p>
<h2>Devant le nom, après der / die / das</h2>
<p>L'article montre déjà le genre : l'adjectif prend une terminaison courte, <b>-e</b> ou <b>-en</b>. Et il se place toujours devant le nom : « le pull rouge » = <s-de>der rote Pullover</s-de>.</p>
<table>
<tr><th></th><th>Sujet</th><th>COD</th></tr>
<tr><td>masc.</td><td><s-de>der rote Pullover</s-de></td><td><s-de>den roten Pullover</s-de></td></tr>
<tr><td>fém.</td><td><s-de>die rote Jacke</s-de></td><td><s-de>die rote Jacke</s-de></td></tr>
<tr><td>neutre</td><td><s-de>das rote Kleid</s-de></td><td><s-de>das rote Kleid</s-de></td></tr>
<tr><td>pluriel</td><td><s-de>die roten Schuhe</s-de></td><td><s-de>die roten Schuhe</s-de></td></tr>
</table>
<h2>Après ein / kein / mein</h2>
<p>Ici, quand l'article ne montre pas le genre (<s-de>ein</s-de> peut être masculin ou neutre), c'est l'adjectif qui le montre : <s-de>ein roter Pullover</s-de> (-er, masculin), <s-de>ein rotes Kleid</s-de> (-es, neutre), <s-de>eine rote Jacke</s-de>, et à l'accusatif <s-de>einen roten Pullover</s-de>. Au pluriel sans article : <s-de>rote Schuhe</s-de>.</p>
<p>L'astuce : la terminaison -er / -e / -es rappelle <s-de>der</s-de> / <s-de>die</s-de> / <s-de>das</s-de>. Certaines couleurs ne changent jamais : <s-de>rosa</s-de>, <s-de>lila</s-de> (<s-de>ein lila Schal</s-de>).</p>
<div class="tip">Pour demander, <s-de>welcher</s-de> (quel) prend les terminaisons de der : <s-de>Welcher Pullover?</s-de> · <s-de>Welche Jacke?</s-de> · <s-de>Welches Kleid?</s-de> · <s-de>Welchen Rock nimmst du?</s-de> La réponse emploie souvent <s-de>dieser</s-de> (celui-ci) : <s-de>Diesen hier!</s-de></div>
`,
    examples: [
      ["Der rote Pullover ist schön.", "The red jumper is nice.", "Le pull rouge est joli."],
      ["Ich nehme den roten Pullover.", "I'll take the red jumper.", "Je prends le pull rouge."],
      ["Sie trägt ein schwarzes Kleid.", "She's wearing a black dress.", "Elle porte une robe noire."],
      ["Ich suche einen warmen Mantel.", "I'm looking for a warm coat.", "Je cherche un manteau chaud."],
      ["Die neuen Schuhe sind sehr bequem.", "The new shoes are very comfortable.", "Les nouvelles chaussures sont très confortables."],
      ["Welche Jacke gefällt dir besser? — Diese hier.", "Which jacket do you like better? — This one.", "Quelle veste te plaît le plus ? — Celle-ci."],
      ["Er hat ein gestreiftes Hemd und eine graue Hose an.", "He's wearing a striped shirt and grey trousers.", "Il porte une chemise rayée et un pantalon gris."]
    ],
    quiz: [
      { q: "Complete: “Der ___ Mantel ist teuer.” (schwarz)", q_fr: "Complète : « Der ___ Mantel ist teuer. » (schwarz)", o: ["schwarze", "schwarzer", "schwarzen"], a: 0, ex: "After der, subject: -e.", ex_fr: "Après der, sujet : -e." },
      { q: "Complete: “Ich kaufe den ___ Mantel.” (schwarz)", q_fr: "Complète : « Ich kaufe den ___ Mantel. » (schwarz)", o: ["schwarze", "schwarzer", "schwarzen"], a: 2, ex: "Masculine object: den … -en.", ex_fr: "Masculin COD : den … -en." },
      { q: "Complete: “Das ist ein ___ Kleid.” (schön)", q_fr: "Complète : « Das ist ein ___ Kleid. » (schön)", o: ["schöne", "schönes", "schöner"], a: 1, ex: "ein + neuter: the adjective shows das: -es.", ex_fr: "ein + neutre : l'adjectif montre das : -es." },
      { q: "Complete: “Er trägt einen ___ Pullover.” (grün)", q_fr: "Complète : « Er trägt einen ___ Pullover. » (grün)", o: ["grüner", "grünen", "grüne"], a: 1, ex: "einen … -en (masculine accusative).", ex_fr: "einen … -en (masculin accusatif)." },
      { q: "“The jacket is red.”", q_fr: "« La veste est rouge. »", o: ["Die Jacke ist rote.", "Die Jacke ist rot.", "Die rote Jacke ist."], a: 1, ex: "After sein, no ending.", ex_fr: "Après sein, pas de terminaison." }
    ]
  },
  {
    id: 32, level: "A2", icon: "chart-column",
    title: "Größer, am größten: comparing", title_fr: "Größer, am größten : comparer",
    subtitle: "Bigger than, as big as, the biggest: compare clothes, prices and anything else.", subtitle_fr: "Plus grand que, aussi grand que, le plus grand : comparer des vêtements, des prix et tout le reste.",
    body: `
<h2>The comparative: -er + als</h2>
<p>Add <b>-er</b>, whatever the length of the adjective: <s-de>billig</s-de> → <s-de>billiger</s-de> · <s-de>teuer</s-de> → <s-de>teurer</s-de> · <s-de>elegant</s-de> → <s-de>eleganter</s-de> (no "more elegant"!). Many short adjectives take an umlaut: <s-de>groß</s-de> → <s-de>größer</s-de>, <s-de>alt</s-de> → <s-de>älter</s-de>, <s-de>jung</s-de> → <s-de>jünger</s-de>, <s-de>warm</s-de> → <s-de>wärmer</s-de>, <s-de>kurz</s-de> → <s-de>kürzer</s-de>.</p>
<p>"Than" is <s-de>als</s-de>: <s-de>Die Jacke ist teurer als der Pullover.</s-de> "As … as" is <s-de>so … wie</s-de>: <s-de>Der Rock ist so teuer wie die Bluse.</s-de></p>
<h2>The superlative</h2>
<p>After a verb: <s-de>am …sten</s-de>: <s-de>Dieser Mantel ist am wärmsten.</s-de> Before a noun: <s-de>der / die / das …ste</s-de>: <s-de>der wärmste Mantel</s-de>. After -t, -d, -s, -ß, -z, add an e: <s-de>am ältesten</s-de>, <s-de>am kürzesten</s-de>.</p>
<h2>Irregular</h2>
<p><s-de>gut</s-de> → <s-de>besser</s-de> → <s-de>am besten</s-de> · <s-de>viel</s-de> → <s-de>mehr</s-de> → <s-de>am meisten</s-de> · <s-de>gern</s-de> → <s-de>lieber</s-de> → <s-de>am liebsten</s-de> · <s-de>hoch</s-de> → <s-de>höher</s-de> → <s-de>am höchsten</s-de> · <s-de>nah</s-de> → <s-de>näher</s-de> → <s-de>am nächsten</s-de></p>
<div class="tip">Before a noun, the comparative takes the normal adjective endings too: <s-de>Haben Sie eine größere Größe?</s-de> (Do you have a bigger size?) · <s-de>Ich suche einen wärmeren Mantel.</s-de></div>
`,
    body_fr: `
<h2>Le comparatif : -er + als</h2>
<p>On ajoute <b>-er</b>, quelle que soit la longueur de l'adjectif : <s-de>billig</s-de> → <s-de>billiger</s-de> (moins cher) · <s-de>teuer</s-de> → <s-de>teurer</s-de> · <s-de>elegant</s-de> → <s-de>eleganter</s-de>. Pas de « plus » comme en français : la terminaison suffit. Beaucoup d'adjectifs courts prennent un Umlaut : <s-de>groß</s-de> → <s-de>größer</s-de>, <s-de>alt</s-de> → <s-de>älter</s-de>, <s-de>jung</s-de> → <s-de>jünger</s-de>, <s-de>warm</s-de> → <s-de>wärmer</s-de>, <s-de>kurz</s-de> → <s-de>kürzer</s-de>.</p>
<p>« Que » se dit <s-de>als</s-de> : <s-de>Die Jacke ist teurer als der Pullover.</s-de> « Aussi … que » se dit <s-de>so … wie</s-de> : <s-de>Der Rock ist so teuer wie die Bluse.</s-de></p>
<h2>Le superlatif</h2>
<p>Après un verbe : <s-de>am …sten</s-de> : <s-de>Dieser Mantel ist am wärmsten.</s-de> (C'est ce manteau qui est le plus chaud.) Devant un nom : <s-de>der / die / das …ste</s-de> : <s-de>der wärmste Mantel</s-de>. Après -t, -d, -s, -ß, -z, on ajoute un e : <s-de>am ältesten</s-de>, <s-de>am kürzesten</s-de>.</p>
<h2>Les irréguliers</h2>
<p><s-de>gut</s-de> → <s-de>besser</s-de> → <s-de>am besten</s-de> · <s-de>viel</s-de> → <s-de>mehr</s-de> → <s-de>am meisten</s-de> · <s-de>gern</s-de> → <s-de>lieber</s-de> → <s-de>am liebsten</s-de> · <s-de>hoch</s-de> → <s-de>höher</s-de> → <s-de>am höchsten</s-de> · <s-de>nah</s-de> → <s-de>näher</s-de> → <s-de>am nächsten</s-de></p>
<div class="tip">Devant un nom, le comparatif prend lui aussi les terminaisons normales des adjectifs : <s-de>Haben Sie eine größere Größe?</s-de> (Vous avez une taille au-dessus ?) · <s-de>Ich suche einen wärmeren Mantel.</s-de></div>
`,
    examples: [
      ["Die Jacke ist teurer als der Pullover.", "The jacket is more expensive than the jumper.", "La veste est plus chère que le pull."],
      ["Mein Bruder ist älter als ich.", "My brother is older than me.", "Mon frère est plus âgé que moi."],
      ["Der Rock ist so teuer wie die Bluse.", "The skirt is as expensive as the blouse.", "La jupe est aussi chère que le chemisier."],
      ["Welcher Mantel ist am wärmsten?", "Which coat is the warmest?", "Quel manteau est le plus chaud ?"],
      ["Das ist das schönste Kleid im Laden.", "That's the most beautiful dress in the shop.", "C'est la plus belle robe du magasin."],
      ["Haben Sie eine größere Größe?", "Do you have a bigger size?", "Vous avez une taille au-dessus ?"],
      ["Am liebsten trage ich Jeans und T-Shirt.", "I like wearing jeans and a T-shirt best.", "Ce que je préfère porter, c'est un jean et un t-shirt."]
    ],
    quiz: [
      { q: "“Cheaper than”:", q_fr: "« Moins cher que » :", o: ["billiger wie", "billiger als", "mehr billig als"], a: 1, ex: "Comparative + als.", ex_fr: "Comparatif + als." },
      { q: "The comparative of “groß”:", q_fr: "Le comparatif de « groß » :", o: ["großer", "größer", "mehr groß"], a: 1, ex: "Short adjectives often take an umlaut: größer.", ex_fr: "Les adjectifs courts prennent souvent un Umlaut : größer." },
      { q: "“As expensive as”:", q_fr: "« Aussi cher que » :", o: ["so teuer wie", "so teuer als", "teurer wie"], a: 0, ex: "so … wie.", ex_fr: "so … wie." },
      { q: "The superlative of “gut” (after a verb):", q_fr: "Le superlatif de « gut » (après un verbe) :", o: ["am gutesten", "am besten", "am bessersten"], a: 1, ex: "gut → besser → am besten.", ex_fr: "gut → besser → am besten." },
      { q: "“Do you have a bigger size?”", q_fr: "« Vous avez une taille au-dessus ? »", o: ["Haben Sie eine größer Größe?", "Haben Sie eine größere Größe?", "Haben Sie eine mehr große Größe?"], a: 1, ex: "Before a noun, the comparative takes the ending: größere.", ex_fr: "Devant un nom, le comparatif prend la terminaison : größere." }
    ]
  },
  {
    id: 33, level: "A2", kind: "functional", icon: "shopping-bag",
    title: "Everyday German: shopping for clothes", title_fr: "L'allemand de tous les jours : acheter des vêtements",
    subtitle: "Ask for a size, try things on, say what suits you and exchange an item.", subtitle_fr: "Demander une taille, essayer, dire ce qui te va et échanger un article.",
    body: `
<h2>In the shop</h2>
<p><s-de>Kann ich Ihnen helfen?</s-de> — <s-de>Danke, ich schaue nur.</s-de> (I'm just looking.) · <s-de>Ich suche eine Jacke.</s-de> · <s-de>Welche Größe haben Sie?</s-de> — <s-de>Größe M / Größe 38.</s-de> · <s-de>Kann ich das anprobieren?</s-de> · <s-de>Wo sind die Umkleidekabinen?</s-de></p>
<h2>Does it fit? Does it suit me?</h2>
<p><s-de>passen</s-de> = the right size: <s-de>Die Hose passt.</s-de> · <s-de>Die Hose ist mir zu eng / zu weit / zu lang.</s-de> <s-de>stehen</s-de> + dative = to suit: <s-de>Die Farbe steht dir gut!</s-de> (That colour suits you!) <s-de>gefallen</s-de> + dative = to like: <s-de>Die Jacke gefällt mir.</s-de></p>
<h2>Paying and exchanging</h2>
<p><s-de>Ich nehme sie.</s-de> (I'll take it.) · <s-de>Kann ich mit Karte zahlen?</s-de> · <s-de>Kann ich das umtauschen, wenn es nicht passt?</s-de> · <s-de>Ich möchte diesen Pullover umtauschen. Hier ist der Kassenbon.</s-de></p>
<p>Good to know: in a shop, exchanging an item that isn't faulty is a goodwill gesture, not a right, so keep the receipt and ask before you pay. When you buy online in the EU, you usually have 14 days to change your mind and send it back.</p>
<div class="tip">Clothes sizes differ from country to country: a German size 38 for women corresponds roughly to a French 40 and a British 12. Always try things on, or check the size chart.</div>
`,
    body_fr: `
<h2>Dans le magasin</h2>
<p><s-de>Kann ich Ihnen helfen?</s-de> — <s-de>Danke, ich schaue nur.</s-de> (Je regarde seulement.) · <s-de>Ich suche eine Jacke.</s-de> · <s-de>Welche Größe haben Sie?</s-de> — <s-de>Größe M / Größe 38.</s-de> · <s-de>Kann ich das anprobieren?</s-de> · <s-de>Wo sind die Umkleidekabinen?</s-de></p>
<h2>Est-ce que ça va ? Est-ce que ça me va ?</h2>
<p>Le français dit « ça me va » dans les deux sens, l'allemand distingue : <s-de>passen</s-de> = la bonne taille : <s-de>Die Hose passt.</s-de> · <s-de>Die Hose ist mir zu eng / zu weit / zu lang.</s-de> <s-de>stehen</s-de> + datif = aller bien (style) : <s-de>Die Farbe steht dir gut!</s-de> (Cette couleur te va bien !) <s-de>gefallen</s-de> + datif = plaire : <s-de>Die Jacke gefällt mir.</s-de></p>
<h2>Payer et échanger</h2>
<p><s-de>Ich nehme sie.</s-de> (Je la prends.) · <s-de>Kann ich mit Karte zahlen?</s-de> · <s-de>Kann ich das umtauschen, wenn es nicht passt?</s-de> · <s-de>Ich möchte diesen Pullover umtauschen. Hier ist der Kassenbon.</s-de></p>
<p>Bon à savoir : en magasin, échanger un article sans défaut est un geste commercial, pas un droit : garde le ticket et demande avant de payer. Pour un achat en ligne dans l'UE, tu as en général 14 jours pour changer d'avis et le renvoyer.</p>
<div class="tip">Les tailles de vêtements changent d'un pays à l'autre : un 38 allemand pour femme correspond à peu près à un 40 français. Essaie toujours, ou regarde le tableau des tailles.</div>
`,
    examples: [
      ["Danke, ich schaue nur.", "Thanks, I'm just looking.", "Merci, je regarde seulement."],
      ["Kann ich die Hose anprobieren?", "Can I try on the trousers?", "Je peux essayer le pantalon ?"],
      ["Die Jacke ist mir zu eng. Haben Sie eine größere?", "The jacket is too tight. Do you have a bigger one?", "La veste est trop serrée. Vous en avez une plus grande ?"],
      ["Die Farbe steht dir wirklich gut!", "That colour really suits you!", "Cette couleur te va vraiment bien !"],
      ["Ich nehme den Mantel.", "I'll take the coat.", "Je prends le manteau."],
      ["Kann ich das umtauschen, wenn es nicht passt?", "Can I exchange it if it doesn't fit?", "Je peux l'échanger si ça ne va pas ?"],
      ["Ich möchte diesen Pullover umtauschen. Hier ist der Kassenbon.", "I'd like to exchange this jumper. Here's the receipt.", "J'aimerais échanger ce pull. Voici le ticket de caisse."]
    ],
    quiz: [
      { q: "The shop assistant asks if they can help. You don't need help:", q_fr: "La vendeuse propose son aide. Tu n'en as pas besoin :", o: ["Danke, ich schaue nur.", "Nein, ich kaufe nicht.", "Ich suche nichts."], a: 0, ex: "Ich schaue nur = I'm just looking.", ex_fr: "Ich schaue nur = je regarde seulement." },
      { q: "The trousers are the right size:", q_fr: "Le pantalon est à la bonne taille :", o: ["Die Hose passt.", "Die Hose steht.", "Die Hose gefällt."], a: 0, ex: "passen = the right size.", ex_fr: "passen = la bonne taille." },
      { q: "“That colour suits you!”", q_fr: "« Cette couleur te va bien ! »", o: ["Die Farbe passt dich gut!", "Die Farbe steht dir gut!", "Die Farbe gefällt du gut!"], a: 1, ex: "stehen + dative: steht dir.", ex_fr: "stehen + datif : steht dir." },
      { q: "In a shop, exchanging an item that isn't faulty is:", q_fr: "En magasin, échanger un article sans défaut, c'est :", o: ["a goodwill gesture", "always a legal right", "forbidden"], o_fr: ["un geste commercial", "toujours un droit", "interdit"], a: 0, ex: "Ask before you pay and keep the receipt.", ex_fr: "Demande avant de payer et garde le ticket." },
      { q: "“Where are the fitting rooms?”", q_fr: "« Où sont les cabines d'essayage ? »", o: ["Wo sind die Umkleidekabinen?", "Wo sind die Kassen?", "Wo sind die Größen?"], a: 0, ex: "die Umkleidekabine = the fitting room.", ex_fr: "die Umkleidekabine = la cabine d'essayage." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    31: {
      gap: [["Der ___ Mantel ist warm. (grau)", "graue"], ["Ich kaufe den ___ Mantel. (grau)", "grauen"], ["Das ist ein ___ Kleid. (rot)", "rotes"], ["Er sucht einen ___ Pullover. (warm)", "warmen"]],
      fix: [["Ich trage einen schwarze Mantel.", "Ich trage einen schwarzen Mantel.", "einen … -en (masculine accusative).", "einen … -en (masculin accusatif)."], ["Die Schuhe sind braune.", "Die Schuhe sind braun.", "After sein, no ending.", "Après sein, pas de terminaison."]],
      task: ["Describe what you're wearing today, in four sentences with adjectives.", "Décris ce que tu portes aujourd'hui, en quatre phrases avec des adjectifs.", "Heute trage ich eine blaue Jeans und ein weißes T-Shirt. Darüber trage ich einen grauen Pullover. Meine Schuhe sind schwarz und sehr bequem. Und weil es kalt ist, habe ich einen roten Schal."]
    },
    32: {
      gap: [["Die Jacke ist ___ als der Pullover. (teuer)", "teurer"], ["Mein Bruder ist ___ als ich. (alt)", "älter"], ["Der Rock ist so teuer ___ die Bluse.", "wie", "as", "que"], ["Dieser Mantel ist am ___. (warm)", "wärmsten"]],
      fix: [["Die Jacke ist mehr teuer als der Pullover.", "Die Jacke ist teurer als der Pullover.", "No “mehr”: just -er.", "Pas de « mehr » : seulement -er."], ["Der Pullover ist billiger wie die Jacke.", "Der Pullover ist billiger als die Jacke.", "Comparative + als; so … wie only for equality.", "Comparatif + als ; so … wie seulement pour l'égalité."]],
      task: ["Compare two shops, two cities or two people you know, in four sentences.", "Compare deux magasins, deux villes ou deux personnes que tu connais, en quatre phrases.", "Berlin ist größer als München, aber München ist teurer. In Berlin gibt es mehr Museen. Die Luft ist in München vielleicht besser, weil die Berge näher sind. Am liebsten wohne ich aber in Hamburg!"]
    },
    33: {
      gap: [["Welche ___ haben Sie?", "Größe", "size", "la taille"], ["Kann ich die Hose ___?", "anprobieren", "to try on", "essayer (un vêtement)"], ["Die Farbe ___ dir gut.", "steht", "suits", "va bien (à quelqu'un)"], ["Ich möchte den Pullover ___.", "umtauschen", "to exchange", "échanger"]],
      fix: [["Die Farbe passt dich gut.", "Die Farbe steht dir gut.", "To suit: stehen + dative.", "Aller bien : stehen + datif."], ["Ich möchte diesen Pullover tauschen um.", "Ich möchte diesen Pullover umtauschen.", "After möchte, the separable verb stays in one piece at the end.", "Après möchte, le verbe séparable reste en un seul morceau, à la fin."]],
      task: ["In a shop: ask for a size, try something on, say it's too small and ask for another size (four sentences).", "Dans un magasin : demande une taille, essaie un vêtement, dis qu'il est trop petit et demande une autre taille (quatre phrases).", "Guten Tag, ich suche eine Jacke in Größe M. Kann ich diese hier anprobieren? Hm, sie ist mir leider zu eng. Haben Sie die Jacke auch in Größe L?"]
    }
  });

  W.ROLEPLAYS.push(
  { id: "geschenk", lesson: 32, level: "A2", icon: "gift", partner: "Greta", role: "a friend", role_fr: "une amie",
    title: "Choosing a present", title_fr: "Choisir un cadeau",
    setting: "You and your friend Greta are in a shop: you're looking for a birthday present for your friend Lukas.", setting_fr: "Ton amie Greta et toi êtes dans un magasin : vous cherchez un cadeau d'anniversaire pour votre ami Lukas.",
    turns: [
      { p: "Was meinst du: den blauen Pullover oder den grünen Schal?", en: "What do you think: the blue jumper or the green scarf?", fr: "Qu'est-ce que tu en penses : le pull bleu ou l'écharpe verte ?" },
      { y: ["Ich finde den blauen Pullover schöner.", "Ich finde den blaue Pullover schöner.", "Ich finde den blauen Pullover mehr schön."], en: "I think the blue jumper is nicer.", fr: "Je trouve le pull bleu plus joli.", why: "den blauen Pullover (accusative, -en); comparative schöner, no mehr.", why_fr: "den blauen Pullover (accusatif, -en) ; comparatif schöner, sans mehr." },
      { p: "Ja, aber der Pullover ist viel teurer als der Schal.", en: "Yes, but the jumper is much more expensive than the scarf.", fr: "Oui, mais le pull est beaucoup plus cher que l'écharpe." },
      { y: ["Wie viel kostet er denn?", "Wie viel kostet sie denn?", "Wie viele kostet er denn?"], en: "How much is it, then?", fr: "Il coûte combien, alors ?", why: "der Pullover → er; a price: wie viel.", why_fr: "der Pullover → er ; un prix : wie viel." },
      { p: "Neunundfünfzig Euro. Der Schal kostet nur fünfundzwanzig.", en: "Fifty-nine euros. The scarf is only twenty-five.", fr: "Cinquante-neuf euros. L'écharpe coûte seulement vingt-cinq." },
      { y: ["Wir können zusammen zahlen, dann ist es nicht so teuer.", "Wir können zusammen zahlen, dann ist es nicht so teuer als.", "Wir können zusammen zahlen, dann es ist nicht so teuer."], en: "We can pay together, then it's not so expensive.", fr: "On peut payer ensemble, comme ça ce n'est pas si cher.", why: "dann counts as the first element: dann ist es…", why_fr: "dann compte comme premier élément : dann ist es…" },
      { p: "Gute Idee! Aber welche Größe hat Lukas? Er ist größer als du, oder?", en: "Good idea! But what size is Lukas? He's taller than you, isn't he?", fr: "Bonne idée ! Mais quelle taille fait Lukas ? Il est plus grand que toi, non ?" },
      { y: ["Ja, er ist am größten von uns allen. Nehmen wir Größe L.", "Ja, er ist der größten von uns allen. Nehmen wir Größe L.", "Ja, er ist am größte von uns allen. Nehmen wir Größe L."], en: "Yes, he's the tallest of us all. Let's take size L.", fr: "Oui, c'est le plus grand de nous tous. Prenons la taille L.", why: "After sein: am größten.", why_fr: "Après sein : am größten." }
    ] },
  { id: "umtausch", lesson: 33, level: "A2", icon: "shopping-bag", partner: "Herr Schulz", role: "a shop assistant", role_fr: "le vendeur",
    title: "Exchanging a jumper", title_fr: "Échanger un pull",
    setting: "Last week you bought a jumper in a shop in Leipzig. It's too small. You go back with the receipt.", setting_fr: "La semaine dernière, tu as acheté un pull dans un magasin à Leipzig. Il est trop petit. Tu y retournes avec le ticket.",
    turns: [
      { p: "Guten Tag! Kann ich Ihnen helfen?", en: "Hello! Can I help you?", fr: "Bonjour ! Je peux vous aider ?" },
      { y: ["Ja, ich möchte diesen Pullover umtauschen. Er ist mir zu klein.", "Ja, ich möchte diesen Pullover tauschen um. Er ist mir zu klein.", "Ja, ich möchte dieser Pullover umtauschen. Er ist mir zu klein."], en: "Yes, I'd like to exchange this jumper. It's too small for me.", fr: "Oui, j'aimerais échanger ce pull. Il est trop petit pour moi.", why: "umtauschen stays together after möchte; diesen Pullover (accusative).", why_fr: "umtauschen reste en un seul morceau après möchte ; diesen Pullover (accusatif)." },
      { p: "Haben Sie den Kassenbon noch?", en: "Do you still have the receipt?", fr: "Vous avez encore le ticket de caisse ?" },
      { y: ["Ja, hier ist er. Haben Sie den Pullover eine Größe größer?", "Ja, hier ist er. Haben Sie den Pullover eine Größe größere?", "Ja, hier ist sie. Haben Sie den Pullover eine Größe größer?"], en: "Yes, here it is. Do you have the jumper one size bigger?", fr: "Oui, le voici. Vous avez le pull une taille au-dessus ?", why: "der Kassenbon → er; eine Größe größer (no ending after the noun).", why_fr: "der Kassenbon → er ; eine Größe größer (pas de terminaison après le nom)." },
      { p: "In Blau leider nicht mehr. Aber in Grau haben wir ihn noch in Größe L.", en: "Not in blue any more, unfortunately. But we still have it in grey in size L.", fr: "En bleu, malheureusement plus. Mais en gris, nous l'avons encore en taille L." },
      { y: ["Kann ich den grauen Pullover anprobieren?", "Kann ich den graue Pullover anprobieren?", "Kann ich anprobieren den grauen Pullover?"], en: "Can I try on the grey jumper?", fr: "Je peux essayer le pull gris ?", why: "den grauen Pullover (-en); anprobieren at the end.", why_fr: "den grauen Pullover (-en) ; anprobieren à la fin." },
      { p: "Natürlich, die Umkleidekabinen sind dort hinten. (Später) Und? Passt er?", en: "Of course, the fitting rooms are at the back. (Later) So? Does it fit?", fr: "Bien sûr, les cabines sont au fond. (Plus tard) Alors ? Il vous va ?" },
      { y: ["Ja, er passt perfekt, und die Farbe gefällt mir sogar besser.", "Ja, er steht perfekt, und die Farbe gefällt mich sogar besser.", "Ja, er passt perfekt, und die Farbe gefällt mir sogar mehr gut."], en: "Yes, it fits perfectly, and I even like the colour better.", fr: "Oui, il me va parfaitement, et la couleur me plaît même davantage.", why: "The right size: passen; gefallen + dative mir; gut → besser.", why_fr: "La bonne taille : passen ; gefallen + datif mir ; gut → besser." }
    ] }
  );

  W.READINGS.push({
    id: "oktoberfest", level: "A2", icon: "beer", title: "Dirndl und Lederhose auf der Wiesn", genre: "Article",
    intro: "Why do so many people wear traditional dress at the Oktoberfest? A royal wedding, a horse race and adjectives describing clothes.",
    intro_fr: "Pourquoi tant de gens portent-ils le costume traditionnel à l'Oktoberfest ? Un mariage royal, une course de chevaux et des adjectifs pour décrire les vêtements.",
    paragraphs: [
      { de: "Das Oktoberfest in München ist das größte Volksfest der Welt. Die Münchner sagen einfach „die Wiesn“. Und obwohl es Oktoberfest heißt, beginnt das Fest schon im September!", en: "The Oktoberfest in Munich is the biggest folk festival in the world. People in Munich simply call it “die Wiesn”. And although it's called the Oktoberfest, it already starts in September!", fr: "L'Oktoberfest de Munich est la plus grande fête populaire du monde. Les Munichois disent simplement « die Wiesn ». Et bien qu'elle s'appelle Oktoberfest, la fête commence déjà en septembre !" },
      { de: "Die Geschichte beginnt am 12. Oktober 1810: Der bayerische Kronprinz Ludwig heiratet die Prinzessin Therese. Zur Hochzeit gibt es ein großes Pferderennen auf einer Wiese vor der Stadt. Diese Wiese heißt bis heute Theresienwiese, nach der Braut.", en: "The story begins on 12 October 1810: the Bavarian Crown Prince Ludwig marries Princess Therese. For the wedding there's a big horse race on a meadow outside the town. This meadow is still called the Theresienwiese today, after the bride.", fr: "L'histoire commence le 12 octobre 1810 : le prince héritier de Bavière, Ludwig, épouse la princesse Thérèse. Pour le mariage, il y a une grande course de chevaux sur un pré devant la ville. Ce pré s'appelle encore aujourd'hui la Theresienwiese, d'après le nom de la mariée." },
      { de: "Heute tragen viele Besucher Tracht: Die Männer tragen eine kurze Lederhose, ein kariertes Hemd und dicke Socken. Die Frauen tragen ein Dirndl: ein langes Kleid mit einer weißen Bluse und einer bunten Schürze.", en: "Today many visitors wear traditional dress: men wear short leather trousers, a checked shirt and thick socks. Women wear a dirndl: a long dress with a white blouse and a colourful apron.", fr: "Aujourd'hui, beaucoup de visiteurs portent la Tracht : les hommes portent une culotte de cuir courte, une chemise à carreaux et de grosses chaussettes. Les femmes portent un Dirndl : une longue robe avec un chemisier blanc et un tablier coloré." },
      { de: "Eine gute Lederhose kann teurer sein als ein Anzug, aber sie hält viele Jahre. Und wer keine Tracht hat? Kein Problem: Auf der Wiesn sind Jeans und T-Shirt genauso willkommen!", en: "A good pair of leather trousers can cost more than a suit, but it lasts for many years. And what about people who don't have traditional dress? No problem: at the Wiesn, jeans and a T-shirt are just as welcome!", fr: "Une bonne culotte de cuir peut coûter plus cher qu'un costume, mais elle dure de nombreuses années. Et ceux qui n'ont pas de Tracht ? Pas de problème : à la Wiesn, un jean et un t-shirt sont tout aussi bienvenus !" }
    ],
    glossary: { "Volksfest": ["folk festival, funfair", "fête populaire"], "Welt": ["world", "monde"], "obwohl": ["although", "bien que"], "Geschichte": ["story, history", "histoire"], "bayerische": ["Bavarian", "bavarois"], "Kronprinz": ["crown prince", "prince héritier"], "heiratet": ["marries", "épouse"], "Prinzessin": ["princess", "princesse"], "Pferderennen": ["horse race", "course de chevaux"], "Wiese": ["meadow", "pré"], "Besucher": ["visitors", "visiteurs"], "Tracht": ["traditional dress", "costume traditionnel"], "dicke": ["thick", "épais, gros"], "Schürze": ["apron", "tablier"], "hält": ["lasts", "dure"], "genauso": ["just as", "tout aussi"] },
    questions: [
      { q: "Wann beginnt das Oktoberfest?", o: ["Im September", "Im Oktober", "Im November"], a: 0 },
      { q: "Was ist am 12. Oktober 1810 passiert?", o: ["Kronprinz Ludwig hat Prinzessin Therese geheiratet.", "Das erste Bier wurde gebraut.", "München wurde gegründet."], a: 0 },
      { q: "Woher hat die Theresienwiese ihren Namen?", o: ["Von der Braut, Therese", "Von einer Kirche", "Von einem Bier"], a: 0 },
      { q: "Was tragen die Frauen in Tracht?", o: ["Ein Dirndl", "Eine Lederhose", "Einen Anzug"], a: 0 },
      { q: "Muss man auf der Wiesn Tracht tragen?", o: ["Nein, Jeans und T-Shirt sind auch willkommen.", "Ja, immer.", "Nur am Wochenende."], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-a2-4", unit: "a2-4", level: "A2", icon: "shirt",
    title: "Im Modegeschäft", title_fr: "Dans la boutique de vêtements",
    context: "Nele is looking for a coat. Frau Hoffmann, the shop assistant, helps her.", context_fr: "Nele cherche un manteau. Frau Hoffmann, la vendeuse, l'aide.",
    words: [["der Wintermantel", "the winter coat", "le manteau d'hiver"], ["dunkelblau", "dark blue", "bleu foncé"], ["wasserdicht", "waterproof", "imperméable"], ["die Kapuze", "the hood", "la capuche"], ["reduziert", "reduced", "soldé"]],
    lines: [["Frau Hoffmann", "Guten Tag! Kann ich Ihnen helfen?", "de-DE"], ["Nele", "Ja, gern. Ich suche einen warmen Wintermantel.", "de-DE"], ["Frau Hoffmann", "Welche Größe haben Sie?", "de-DE"], ["Nele", "Größe achtunddreißig.", "de-DE"], ["Frau Hoffmann", "Wie gefällt Ihnen dieser hier? Er ist dunkelblau, wasserdicht und hat eine Kapuze.", "de-DE"], ["Nele", "Schön! Was kostet er?", "de-DE"], ["Frau Hoffmann", "Hundertneunundvierzig Euro. Der graue Mantel ist billiger, er ist reduziert: neunundachtzig Euro.", "de-DE"], ["Nele", "Der graue ist billiger, aber der blaue ist wärmer, oder?", "de-DE"], ["Frau Hoffmann", "Ja, der blaue ist am wärmsten. Möchten Sie ihn anprobieren?", "de-DE"], ["Nele", "Ja, gern. … Er passt perfekt! Ich nehme den blauen.", "de-DE"], ["Frau Hoffmann", "Eine gute Wahl! Sie können an der Kasse mit Karte zahlen.", "de-DE"]],
    gist: ["Was kauft Nele?", ["Einen blauen Wintermantel", "Einen grauen Pullover", "Eine Jacke mit Kapuze für ein Kind"]],
    detail: [["Welche Größe hat Nele?", ["Achtunddreißig", "Achtundvierzig", "Sechsunddreißig"]], ["Wie viel kostet der blaue Mantel?", ["149 Euro", "89 Euro", "119 Euro"]], ["Warum ist der graue Mantel billiger?", ["Er ist reduziert.", "Er ist kleiner.", "Er ist nicht wasserdicht."]], ["Warum nimmt Nele den blauen Mantel?", ["Er ist am wärmsten und passt perfekt.", "Er ist am billigsten.", "Er hat keine Kapuze."]]],
    decode: ["Der graue Mantel ist billiger, er ist reduziert", "der blaue ist am wärmsten"],
    tip: "When people compare, listen for -er and als, and for am …sten: billiger, wärmer, am wärmsten. They tell you which option wins.", tip_fr: "Quand on compare, écoute les -er et les als, et les am …sten : billiger, wärmer, am wärmsten. Ils te disent quelle option l'emporte."
  }]);

  W.PROMPTS.push({ id: "de-a2-4", level: "A2", q: "Was ziehst du gern an? Beschreib deine Lieblingskleidung und sag, wo du gern einkaufst.", en: "What do you like wearing? Describe your favourite clothes and say where you like to shop.", fr: "Qu'aimes-tu porter ? Décris tes vêtements préférés et dis où tu aimes faire tes achats.", time: 90,
    phrases: ["Am liebsten trage ich…", "Meine Lieblingsjacke ist…", "… ist bequemer als…", "Ich kaufe gern in / bei…", "Ich finde … schöner."],
    model: "Am liebsten trage ich bequeme Kleidung: eine blaue Jeans, ein weißes T-Shirt und meine alten Turnschuhe. Meine Lieblingsjacke ist eine grüne Regenjacke, sie ist leicht und praktisch. Ich kaufe gern auf Flohmärkten, weil die Kleidung dort billiger und oft origineller ist als im Geschäft. Für die Arbeit trage ich manchmal eine schwarze Hose und eine elegante Bluse." });

  W.WRITING_GUIDE["a2-4"] = { genre: "An email about a new purchase", genre_fr: "Un e-mail sur un nouvel achat",
    plan: [["Greet your friend and give the news.", "Salue ton ami et donne la nouvelle."], ["Describe what you bought (colour, material).", "Décris ce que tu as acheté (couleur, matière)."], ["Compare it with something else (als, so … wie).", "Compare-le avec autre chose (als, so … wie)."], ["Say why you like it.", "Dis pourquoi il te plaît."], ["Ask a question and say goodbye.", "Pose une question et dis au revoir."]],
    marks: [["einen dunkelgrünen Mantel", "accusative adjective ending -en", "terminaison -en à l'accusatif"], ["aus Wolle", "aus + material", "aus + matière"], ["wärmer als mein alter Mantel", "comparative + als", "comparatif + als"], ["Die Farbe steht mir gut", "stehen + dative: to suit", "stehen + datif : aller bien"], ["am schönsten", "superlative", "superlatif"], ["Was hast du dir gekauft?", "a question to your friend", "une question à ton ami"]] };

  W.COURSE.push({ id: "a2-4", level: "A2", icon: "shirt", title: "Clothes and shopping", title_fr: "Les vêtements et les achats",
    intro: "In this unit, you'll shop for clothes in German: colours and materials, adjective endings (der rote Pullover, einen roten Pullover, ein rotes Kleid), comparisons (größer als, so groß wie, am größten), and what to say in a clothes shop, from the fitting room to the exchange counter.",
    intro_fr: "Dans cette unité, tu vas acheter des vêtements en allemand : les couleurs et les matières, les terminaisons des adjectifs (der rote Pullover, einen roten Pullover, ein rotes Kleid), les comparaisons (größer als, so groß wie, am größten), et ce qu'il faut dire dans un magasin, de la cabine d'essayage à l'échange.",
    can: ["Describe clothes: colours, materials, patterns", "Use adjective endings after der and ein", "Compare with -er als, so … wie, am …sten", "Ask for a size, try on and exchange clothes"],
    can_fr: ["Décrire des vêtements : couleurs, matières, motifs", "Employer les terminaisons des adjectifs après der et ein", "Comparer avec -er als, so … wie, am …sten", "Demander une taille, essayer et échanger un vêtement"],
    lessons: [31, 32, 33], vocab: ["kleidungDE", "farbenDE", "modeDE"], reading: "oktoberfest", prompt: "de-a2-4",
    writing: { task: "You've bought something new. Write an email to your friend Jana (40-60 words): describe it, compare it with something else and say why you like it.", task_fr: "Tu as acheté quelque chose de nouveau. Écris un e-mail à ton amie Jana (40 à 60 mots) : décris-le, compare-le avec autre chose et dis pourquoi il te plaît.", words: "40-60",
      tips: ["Liebe Jana,", "Ich habe einen / eine / ein … gekauft.", "Er / Sie / Es ist … als…", "… steht mir gut.", "Was hast du…?"],
      checklist: ["My adjective endings match the article", "I compared with -er als or so … wie", "I used stehen or gefallen + dative", "I asked my friend a question", "I stayed between 40 and 60 words"],
      checklist_fr: ["Mes terminaisons d'adjectifs vont avec l'article", "J'ai comparé avec -er als ou so … wie", "J'ai employé stehen ou gefallen + datif", "J'ai posé une question à mon amie", "J'ai écrit entre 40 et 60 mots"],
      model: "Liebe Jana,\n\nich war am Samstag in der Stadt und habe einen dunkelgrünen Mantel gekauft! Er ist aus Wolle und viel wärmer als mein alter Mantel. Die Farbe steht mir gut, finde ich. Er war nicht billig, aber von allen Mänteln im Geschäft war er am schönsten. Was hast du dir gekauft?\n\nViele Grüße\nCamille" } });
})();
