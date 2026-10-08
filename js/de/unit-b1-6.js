/* Cours d'allemand, unité B1-6 « Health and sport / Santé et sport » : la déclinaison complète de l'adjectif (après
   der, après ein, sans article), le comparatif dans la phrase (je … desto, immer besser, so … wie, als) ; donner son
   avis, approuver et contredire dans une discussion. Explications en anglais ET en français. Personnages fictifs.
   Faits vérifiables seulement : Friedrich Ludwig Jahn (1778-1852), « Turnvater », ouvre en 1811 le premier terrain
   de gymnastique public sur la Hasenheide à Berlin ; on lui attribue la barre fixe (Reck) et les barres parallèles
   (Barren) ; mouvement aussi politique (contre l'occupation napoléonienne), interdiction de la gymnastique en Prusse
   de 1820 à 1842 (« Turnsperre ») ; aujourd'hui le Deutscher Turner-Bund est l'une des plus grandes fédérations
   sportives du pays, et l'Allemagne compte plus de 85 000 clubs de sport. Écrit : avis sur un forum (Goethe B1,
   partie 2, environ 80 mots). */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "sportB1DE", icon: "dumbbell", title: "Sport and fitness", title_fr: "Sport et forme", level: "B1", words: [
    ["die Sportart, -en", "the (kind of) sport", "le sport (la discipline)", "Welche Sportart machst du am liebsten?"],
    ["das Training, -s", "the training (session)", "l'entraînement", "Das Training ist zweimal pro Woche."],
    ["trainieren", "to train", "s'entraîner", "Sie trainiert für einen Marathon."],
    ["die Mannschaft, -en", "the team", "l'équipe", "Unsere Mannschaft hat drei Spiele gewonnen."],
    ["verlieren", "to lose", "perdre", "Leider haben wir das Spiel verloren."],
    ["der Wettkampf, ¨-e", "the competition", "la compétition", "Am Wochenende hat sie ihren ersten Wettkampf."],
    ["die Ausdauer", "stamina, endurance", "l'endurance", "Schwimmen ist gut für die Ausdauer."],
    ["die Kraft, ¨-e", "strength", "la force", "Für Klettern braucht man viel Kraft."],
    ["sich verletzen", "to get injured", "se blesser", "Er hat sich beim Fußball am Knie verletzt."],
    ["die Verletzung, -en", "the injury", "la blessure", "Wegen einer Verletzung kann sie nicht spielen."],
    ["sich bewegen", "to move, to exercise", "bouger", "Man sollte sich jeden Tag bewegen."],
    ["die Bewegung", "movement, exercise", "le mouvement, l'activité physique", "Bewegung an der frischen Luft tut gut."],
    ["sich aufwärmen", "to warm up", "s'échauffer", "Vor dem Training wärmen wir uns zehn Minuten auf."],
    ["der Muskel, -n", "the muscle", "le muscle", "Nach dem Training tun mir alle Muskeln weh."],
    ["schwitzen", "to sweat", "transpirer", "Beim Joggen schwitze ich sehr."],
    ["fit", "fit, in shape", "en forme", "Seit ich schwimme, fühle ich mich viel fitter."]
  ] },
  { id: "lebensstilDE", icon: "heart-pulse", title: "A healthy lifestyle", title_fr: "Une vie saine", level: "B1", words: [
    ["sich ernähren", "to eat, to feed yourself", "se nourrir, s'alimenter", "Ich versuche, mich gesund zu ernähren."],
    ["die Ernährung", "diet, nutrition", "l'alimentation", "Eine ausgewogene Ernährung ist wichtig."],
    ["ausgewogen", "balanced", "équilibré", "Sie isst sehr ausgewogen."],
    ["ungesund", "unhealthy", "mauvais pour la santé", "Zu viel Zucker ist ungesund."],
    ["der Zucker", "sugar", "le sucre", "Ich trinke Kaffee ohne Zucker."],
    ["abnehmen", "to lose weight", "maigrir", "Er hat fünf Kilo abgenommen."],
    ["zunehmen", "to put on weight", "grossir", "Im Urlaub habe ich zwei Kilo zugenommen."],
    ["das Gewicht", "weight", "le poids", "Achten Sie auf Ihr Gewicht."],
    ["sich entspannen", "to relax", "se détendre", "Beim Yoga kann ich mich gut entspannen."],
    ["die Entspannung", "relaxation", "la détente", "Ich brauche mehr Entspannung."],
    ["der Schlaf", "sleep", "le sommeil", "Genug Schlaf ist wichtig für die Gesundheit."],
    ["vorbeugen", "to prevent", "prévenir", "Mit Sport kann man vielen Krankheiten vorbeugen."],
    ["das Übergewicht", "excess weight", "le surpoids", "Bewegung hilft gegen Übergewicht."],
    ["die Gewohnheit, -en", "the habit", "l'habitude", "Gesunde Gewohnheiten muss man üben."]
  ] });

  W.LESSONS.push(
  {
    id: 58, level: "B1", icon: "type",
    title: "ein gesundes Leben: adjective endings", title_fr: "ein gesundes Leben : la terminaison des adjectifs",
    subtitle: "The full system in three tables, and one simple idea behind it.", subtitle_fr: "Tout le système en trois tableaux, et une idée simple derrière.",
    body: `
<h2>The key idea</h2>
<p>Before a noun, an adjective takes an ending. If the article already shows the gender and the case (<s-de>der, dem, des</s-de>), the adjective only needs <b>-e</b> or <b>-en</b>. If the article doesn't show it (<s-de>ein</s-de>) or there is no article, the adjective takes the "strong" ending itself: <s-de>ein neuer Verein</s-de>, <s-de>frisches Obst</s-de>.</p>
<h2>After der, die, das (and dieser, jeder)</h2>
<table>
<tr><th></th><th>nom.</th><th>acc.</th><th>dat.</th></tr>
<tr><td>masc.</td><td><s-de>der neue</s-de></td><td><s-de>den neuen</s-de></td><td><s-de>dem neuen</s-de></td></tr>
<tr><td>fem.</td><td><s-de>die neue</s-de></td><td><s-de>die neue</s-de></td><td><s-de>der neuen</s-de></td></tr>
<tr><td>neut.</td><td><s-de>das neue</s-de></td><td><s-de>das neue</s-de></td><td><s-de>dem neuen</s-de></td></tr>
<tr><td>pl.</td><td><s-de>die neuen</s-de></td><td><s-de>die neuen</s-de></td><td><s-de>den neuen</s-de></td></tr>
</table>
<h2>After ein, kein, mein</h2>
<table>
<tr><th></th><th>nom.</th><th>acc.</th><th>dat.</th></tr>
<tr><td>masc.</td><td><s-de>ein neuer</s-de></td><td><s-de>einen neuen</s-de></td><td><s-de>einem neuen</s-de></td></tr>
<tr><td>fem.</td><td><s-de>eine neue</s-de></td><td><s-de>eine neue</s-de></td><td><s-de>einer neuen</s-de></td></tr>
<tr><td>neut.</td><td><s-de>ein neues</s-de></td><td><s-de>ein neues</s-de></td><td><s-de>einem neuen</s-de></td></tr>
<tr><td>pl.</td><td><s-de>keine neuen</s-de></td><td><s-de>keine neuen</s-de></td><td><s-de>keinen neuen</s-de></td></tr>
</table>
<h2>Without an article</h2>
<table>
<tr><th></th><th>nom.</th><th>acc.</th><th>dat.</th></tr>
<tr><td>masc.</td><td><s-de>neuer</s-de></td><td><s-de>neuen</s-de></td><td><s-de>neuem</s-de></td></tr>
<tr><td>fem.</td><td><s-de>neue</s-de></td><td><s-de>neue</s-de></td><td><s-de>neuer</s-de></td></tr>
<tr><td>neut.</td><td><s-de>neues</s-de></td><td><s-de>neues</s-de></td><td><s-de>neuem</s-de></td></tr>
<tr><td>pl.</td><td><s-de>neue</s-de></td><td><s-de>neue</s-de></td><td><s-de>neuen</s-de></td></tr>
</table>
<div class="tip">In the dative, it's always <b>-en</b> after an article: <s-de>mit dem neuen, mit einer neuen, mit meinen neuen</s-de>. And after <s-de>sein</s-de>, the adjective has no ending at all: <s-de>Der Verein ist neu.</s-de> In the genitive (mostly written), it's <b>-en</b> after an article: <s-de>trotz des schlechten Wetters</s-de>.</div>
`,
    body_fr: `
<h2>L'idée clé</h2>
<p>Devant un nom, l'adjectif prend une terminaison. Si l'article montre déjà le genre et le cas (<s-de>der, dem, des</s-de>), l'adjectif se contente de <b>-e</b> ou <b>-en</b>. Si l'article ne le montre pas (<s-de>ein</s-de>) ou s'il n'y a pas d'article, c'est l'adjectif qui prend la terminaison « forte » : <s-de>ein neuer Verein</s-de>, <s-de>frisches Obst</s-de>.</p>
<h2>Après der, die, das (et dieser, jeder)</h2>
<table>
<tr><th></th><th>nom.</th><th>acc.</th><th>dat.</th></tr>
<tr><td>masc.</td><td><s-de>der neue</s-de></td><td><s-de>den neuen</s-de></td><td><s-de>dem neuen</s-de></td></tr>
<tr><td>fém.</td><td><s-de>die neue</s-de></td><td><s-de>die neue</s-de></td><td><s-de>der neuen</s-de></td></tr>
<tr><td>neutre</td><td><s-de>das neue</s-de></td><td><s-de>das neue</s-de></td><td><s-de>dem neuen</s-de></td></tr>
<tr><td>pl.</td><td><s-de>die neuen</s-de></td><td><s-de>die neuen</s-de></td><td><s-de>den neuen</s-de></td></tr>
</table>
<h2>Après ein, kein, mein</h2>
<table>
<tr><th></th><th>nom.</th><th>acc.</th><th>dat.</th></tr>
<tr><td>masc.</td><td><s-de>ein neuer</s-de></td><td><s-de>einen neuen</s-de></td><td><s-de>einem neuen</s-de></td></tr>
<tr><td>fém.</td><td><s-de>eine neue</s-de></td><td><s-de>eine neue</s-de></td><td><s-de>einer neuen</s-de></td></tr>
<tr><td>neutre</td><td><s-de>ein neues</s-de></td><td><s-de>ein neues</s-de></td><td><s-de>einem neuen</s-de></td></tr>
<tr><td>pl.</td><td><s-de>keine neuen</s-de></td><td><s-de>keine neuen</s-de></td><td><s-de>keinen neuen</s-de></td></tr>
</table>
<h2>Sans article</h2>
<table>
<tr><th></th><th>nom.</th><th>acc.</th><th>dat.</th></tr>
<tr><td>masc.</td><td><s-de>neuer</s-de></td><td><s-de>neuen</s-de></td><td><s-de>neuem</s-de></td></tr>
<tr><td>fém.</td><td><s-de>neue</s-de></td><td><s-de>neue</s-de></td><td><s-de>neuer</s-de></td></tr>
<tr><td>neutre</td><td><s-de>neues</s-de></td><td><s-de>neues</s-de></td><td><s-de>neuem</s-de></td></tr>
<tr><td>pl.</td><td><s-de>neue</s-de></td><td><s-de>neue</s-de></td><td><s-de>neuen</s-de></td></tr>
</table>
<div class="tip">Au datif, c'est toujours <b>-en</b> après un article : <s-de>mit dem neuen, mit einer neuen, mit meinen neuen</s-de>. Et après <s-de>sein</s-de>, l'adjectif ne prend aucune terminaison : <s-de>Der Verein ist neu.</s-de> Au génitif (surtout à l'écrit), c'est <b>-en</b> après un article : <s-de>trotz des schlechten Wetters</s-de>.</div>
`,
    examples: [
      ["Ich suche einen netten Verein in der Nähe.", "I'm looking for a nice club nearby.", "Je cherche un club sympa près de chez moi."],
      ["Der neue Trainer ist sehr streng.", "The new coach is very strict.", "Le nouvel entraîneur est très strict."],
      ["Mit dem richtigen Schuh läuft man besser.", "You run better with the right shoe.", "Avec la bonne chaussure, on court mieux."],
      ["Frisches Obst und kaltes Wasser, mehr brauche ich nach dem Training nicht.", "Fresh fruit and cold water: that's all I need after training.", "Des fruits frais et de l'eau fraîche, je n'ai besoin de rien d'autre après l'entraînement."],
      ["Sie hat eine kleine Verletzung am rechten Knie.", "She has a small injury to her right knee.", "Elle a une petite blessure au genou droit."],
      ["Wir spielen mit unseren alten Freunden aus der Schule.", "We play with our old friends from school.", "Nous jouons avec nos vieux amis de l'école."],
      ["Ein gesundes Leben ist mehr als Sport.", "A healthy life is more than sport.", "Une vie saine, c'est plus que du sport."]
    ],
    quiz: [
      { q: "“Ich habe ___ Fahrrad.” (neu, das Fahrrad)", q_fr: "« Ich habe ___ Fahrrad. » (neu, das Fahrrad)", o: ["ein neues", "ein neue", "ein neuen"], a: 0, ex: "ein doesn't show neuter: the adjective does: neues.", ex_fr: "ein ne montre pas le neutre : c'est l'adjectif qui le fait : neues." },
      { q: "“Der ___ Trainer kommt aus Köln.” (neu)", q_fr: "« Der ___ Trainer kommt aus Köln. » (neu)", o: ["neue", "neuer", "neuen"], a: 0, ex: "After der in the nominative: -e.", ex_fr: "Après der au nominatif : -e." },
      { q: "“mit ___ Freundin” (meine, gut)", q_fr: "« mit ___ Freundin » (meine, gut)", o: ["meiner guten", "meiner gute", "meine guten"], a: 0, ex: "Dative after an article: always -en.", ex_fr: "Au datif après un article : toujours -en." },
      { q: "“___ Wasser ist gesund.” (frisch, no article)", q_fr: "« ___ Wasser ist gesund. » (frisch, sans article)", o: ["Frisches", "Frische", "Frischen"], a: 0, ex: "No article, neuter: -es.", ex_fr: "Sans article, neutre : -es." },
      { q: "“Ich suche ___ Verein.” (ein, nett)", q_fr: "« Ich suche ___ Verein. » (ein, nett)", o: ["einen netten", "einen netter", "ein netten"], a: 0, ex: "Accusative masculine: einen + -en.", ex_fr: "Accusatif masculin : einen + -en." }
    ]
  },
  {
    id: 59, level: "B1", icon: "trending-up",
    title: "Je mehr, desto besser: comparisons in sentences", title_fr: "Je mehr, desto besser : la comparaison dans la phrase",
    subtitle: "je … desto, immer besser, so … wie, als, and the irregular comparatives.", subtitle_fr: "je … desto, immer besser, so … wie, als, et les comparatifs irréguliers.",
    body: `
<h2>je … desto: the more …, the more …</h2>
<p><s-de>Je mehr ich trainiere, desto fitter werde ich.</s-de> After <s-de>je</s-de> + comparative, the verb goes to the end; after <s-de>desto</s-de> + comparative, the verb comes straight after. You can also say <s-de>umso</s-de> instead of <s-de>desto</s-de>: <s-de>Je früher, umso besser.</s-de></p>
<h2>immer + comparative: more and more</h2>
<p><s-de>Ich laufe immer schneller.</s-de> (faster and faster) · <s-de>Immer mehr Menschen machen Yoga.</s-de></p>
<h2>so … wie and als</h2>
<p>Equal: <s-de>so</s-de> + adjective + <s-de>wie</s-de>: <s-de>Sie ist so fit wie ihr Bruder.</s-de> Different: comparative + <s-de>als</s-de>: <s-de>Schwimmen ist gesünder als Joggen.</s-de></p>
<h2>Irregular forms</h2>
<table>
<tr><th>Adjective</th><th>Comparative</th><th>Superlative</th></tr>
<tr><td><s-de>gut</s-de></td><td><s-de>besser</s-de></td><td><s-de>am besten</s-de></td></tr>
<tr><td><s-de>viel</s-de></td><td><s-de>mehr</s-de></td><td><s-de>am meisten</s-de></td></tr>
<tr><td><s-de>gern</s-de></td><td><s-de>lieber</s-de></td><td><s-de>am liebsten</s-de></td></tr>
<tr><td><s-de>hoch</s-de></td><td><s-de>höher</s-de></td><td><s-de>am höchsten</s-de></td></tr>
<tr><td><s-de>nah</s-de></td><td><s-de>näher</s-de></td><td><s-de>am nächsten</s-de></td></tr>
</table>
<div class="tip">Comparatives before a noun take the normal endings too: <s-de>ein besseres Training</s-de>, <s-de>die schnelleren Läufer</s-de>. And English "than" is <s-de>als</s-de>, never <s-de>wie</s-de>: <s-de>größer als ich</s-de>.</div>
`,
    body_fr: `
<h2>je … desto : plus …, plus …</h2>
<p><s-de>Je mehr ich trainiere, desto fitter werde ich.</s-de> (Plus je m'entraîne, plus je suis en forme.) Après <s-de>je</s-de> + comparatif, le verbe part à la fin ; après <s-de>desto</s-de> + comparatif, le verbe vient juste après. On peut aussi dire <s-de>umso</s-de> à la place de <s-de>desto</s-de> : <s-de>Je früher, umso besser.</s-de> (Le plus tôt sera le mieux.)</p>
<h2>immer + comparatif : de plus en plus</h2>
<p><s-de>Ich laufe immer schneller.</s-de> (de plus en plus vite) · <s-de>Immer mehr Menschen machen Yoga.</s-de> (De plus en plus de gens font du yoga.)</p>
<h2>so … wie et als</h2>
<p>Égalité : <s-de>so</s-de> + adjectif + <s-de>wie</s-de> (aussi … que) : <s-de>Sie ist so fit wie ihr Bruder.</s-de> Différence : comparatif + <s-de>als</s-de> (plus … que) : <s-de>Schwimmen ist gesünder als Joggen.</s-de></p>
<h2>Les formes irrégulières</h2>
<table>
<tr><th>Adjectif</th><th>Comparatif</th><th>Superlatif</th></tr>
<tr><td><s-de>gut</s-de></td><td><s-de>besser</s-de></td><td><s-de>am besten</s-de></td></tr>
<tr><td><s-de>viel</s-de></td><td><s-de>mehr</s-de></td><td><s-de>am meisten</s-de></td></tr>
<tr><td><s-de>gern</s-de></td><td><s-de>lieber</s-de></td><td><s-de>am liebsten</s-de></td></tr>
<tr><td><s-de>hoch</s-de></td><td><s-de>höher</s-de></td><td><s-de>am höchsten</s-de></td></tr>
<tr><td><s-de>nah</s-de></td><td><s-de>näher</s-de></td><td><s-de>am nächsten</s-de></td></tr>
</table>
<div class="tip">Les comparatifs placés devant un nom prennent eux aussi les terminaisons normales : <s-de>ein besseres Training</s-de>, <s-de>die schnelleren Läufer</s-de>. Et le « que » de la comparaison se dit <s-de>als</s-de>, jamais <s-de>wie</s-de> : <s-de>größer als ich</s-de> (plus grand que moi).</div>
`,
    examples: [
      ["Je mehr ich trainiere, desto fitter werde ich.", "The more I train, the fitter I get.", "Plus je m'entraîne, plus je suis en forme."],
      ["Je älter man wird, desto wichtiger wird die Gesundheit.", "The older you get, the more important your health becomes.", "Plus on vieillit, plus la santé devient importante."],
      ["Immer mehr Menschen fahren mit dem Fahrrad zur Arbeit.", "More and more people cycle to work.", "De plus en plus de gens vont au travail à vélo."],
      ["Schwimmen ist für die Gelenke gesünder als Joggen.", "Swimming is healthier for the joints than jogging.", "La natation est meilleure pour les articulations que la course."],
      ["Meine Schwester ist so sportlich wie mein Vater.", "My sister is as sporty as my father.", "Ma sœur est aussi sportive que mon père."],
      ["Am liebsten gehe ich am Sonntagmorgen schwimmen.", "What I like best is going swimming on Sunday mornings.", "Ce que je préfère, c'est aller nager le dimanche matin."],
      ["Je früher wir anfangen, umso besser.", "The sooner we start, the better.", "Le plus tôt nous commencerons, le mieux ce sera."]
    ],
    quiz: [
      { q: "“The more you sleep, the better you feel.”", q_fr: "« Plus on dort, mieux on se sent. »", o: ["Je mehr man schläft, desto besser fühlt man sich.", "Je mehr man schläft, desto man fühlt sich besser.", "Je mehr schläft man, desto besser fühlt man sich."], a: 0, ex: "je + verb at the end; desto + comparative + verb.", ex_fr: "je + verbe à la fin ; desto + comparatif + verbe." },
      { q: "“Schwimmen ist gesünder ___ Joggen.”", q_fr: "« Schwimmen ist gesünder ___ Joggen. »", o: ["als", "wie", "dann"], a: 0, ex: "Comparative + als.", ex_fr: "Comparatif + als." },
      { q: "“Sie ist ___ fit wie ihr Bruder.”", q_fr: "« Sie ist ___ fit wie ihr Bruder. »", o: ["so", "als", "mehr"], a: 0, ex: "Equal: so … wie.", ex_fr: "Égalité : so … wie." },
      { q: "“more and more people”", q_fr: "« de plus en plus de gens »", o: ["immer mehr Menschen", "mehr und mehr als Menschen", "noch mehr Menschen"], a: 0, ex: "immer + comparative.", ex_fr: "immer + comparatif." },
      { q: "The superlative of “gern”:", q_fr: "Le superlatif de « gern » :", o: ["am liebsten", "am gernsten", "am meisten"], a: 0, ex: "gern, lieber, am liebsten.", ex_fr: "gern, lieber, am liebsten." }
    ]
  },
  {
    id: 60, level: "B1", kind: "functional", icon: "messages-square",
    title: "Everyday German: agreeing and disagreeing", title_fr: "L'allemand de tous les jours : approuver et contredire",
    subtitle: "Give your opinion, agree, disagree politely and find a compromise.", subtitle_fr: "Donner ton avis, approuver, contredire poliment et trouver un compromis.",
    body: `
<h2>Giving your opinion</h2>
<p><s-de>Ich finde / glaube / denke, dass…</s-de> · <s-de>Meiner Meinung nach…</s-de> · <s-de>Ich bin der Meinung, dass…</s-de> · <s-de>Für mich ist wichtig, dass…</s-de></p>
<h2>Agreeing</h2>
<p><s-de>Da hast du recht.</s-de> · <s-de>Da bin ich ganz deiner Meinung.</s-de> · <s-de>Genau!</s-de> · <s-de>Das sehe ich genauso.</s-de></p>
<h2>Disagreeing politely</h2>
<p><s-de>Das sehe ich anders.</s-de> · <s-de>Da bin ich nicht so sicher.</s-de> · <s-de>Das stimmt zwar, aber…</s-de> (That's true, but…) · <s-de>Ich gebe dir recht, aber…</s-de> · <s-de>Da muss ich widersprechen.</s-de> Germans often disagree quite directly: it's not rude, it's part of a good discussion.</p>
<h2>Finding a compromise</h2>
<p><s-de>Wie wäre es, wenn…?</s-de> · <s-de>Was hältst du davon, wenn…?</s-de> · <s-de>Können wir uns darauf einigen, dass…?</s-de> (Can we agree that…?)</p>
<div class="tip">In a discussion, first repeat the other person's idea, then add yours: <s-de>Du meinst also, dass Sport Pflicht sein sollte. Das stimmt zwar, aber…</s-de> It shows you've listened, and it gives you time to think.</div>
`,
    body_fr: `
<h2>Donner ton avis</h2>
<p><s-de>Ich finde / glaube / denke, dass…</s-de> · <s-de>Meiner Meinung nach…</s-de> · <s-de>Ich bin der Meinung, dass…</s-de> · <s-de>Für mich ist wichtig, dass…</s-de></p>
<h2>Approuver</h2>
<p><s-de>Da hast du recht.</s-de> (Tu as raison.) · <s-de>Da bin ich ganz deiner Meinung.</s-de> · <s-de>Genau!</s-de> · <s-de>Das sehe ich genauso.</s-de> (Je vois les choses de la même façon.)</p>
<h2>Contredire poliment</h2>
<p><s-de>Das sehe ich anders.</s-de> · <s-de>Da bin ich nicht so sicher.</s-de> · <s-de>Das stimmt zwar, aber…</s-de> (C'est vrai, mais…) · <s-de>Ich gebe dir recht, aber…</s-de> · <s-de>Da muss ich widersprechen.</s-de> En Allemagne, on contredit souvent assez directement : ce n'est pas impoli, cela fait partie d'une bonne discussion.</p>
<h2>Trouver un compromis</h2>
<p><s-de>Wie wäre es, wenn…?</s-de> (Et si… ?) · <s-de>Was hältst du davon, wenn…?</s-de> · <s-de>Können wir uns darauf einigen, dass…?</s-de> (Peut-on se mettre d'accord sur… ?)</p>
<div class="tip">Dans une discussion, reformule d'abord l'idée de l'autre, puis ajoute la tienne : <s-de>Du meinst also, dass Sport Pflicht sein sollte. Das stimmt zwar, aber…</s-de> Cela montre que tu as écouté, et te laisse le temps de réfléchir.</div>
`,
    examples: [
      ["Ich bin der Meinung, dass Sport in der Schule sehr wichtig ist.", "I think sport at school is very important.", "Je suis d'avis que le sport à l'école est très important."],
      ["Da hast du recht, das sehe ich genauso.", "You're right, I see it the same way.", "Tu as raison, je vois les choses de la même façon."],
      ["Das stimmt zwar, aber nicht alle Kinder mögen Mannschaftssport.", "That's true, but not all children like team sports.", "C'est vrai, mais tous les enfants n'aiment pas les sports d'équipe."],
      ["Da muss ich widersprechen: Bewegung ist für alle wichtig.", "I have to disagree there: exercise is important for everyone.", "Là, je ne suis pas d'accord : l'activité physique est importante pour tout le monde."],
      ["Wie wäre es, wenn jede Schule mehrere Sportarten anbietet?", "What if every school offered several sports?", "Et si chaque école proposait plusieurs sports ?"],
      ["Können wir uns darauf einigen, dass jeder sich jeden Tag bewegen sollte?", "Can we agree that everyone should exercise every day?", "Peut-on se mettre d'accord sur le fait que chacun devrait bouger tous les jours ?"],
      ["Du meinst also, dass Fitness-Apps nützlich sind?", "So you think fitness apps are useful?", "Tu penses donc que les applis de sport sont utiles ?"]
    ],
    quiz: [
      { q: "To agree completely:", q_fr: "Pour être tout à fait d'accord :", o: ["Da bin ich ganz deiner Meinung.", "Das sehe ich anders.", "Da muss ich widersprechen."], a: 0, ex: "ganz deiner Meinung = totally of your opinion.", ex_fr: "ganz deiner Meinung = tout à fait de ton avis." },
      { q: "“That's true, but…”", q_fr: "« C'est vrai, mais… »", o: ["Das stimmt zwar, aber…", "Das ist zwar wahr, oder…", "Das stimmt, sondern…"], a: 0, ex: "zwar … aber.", ex_fr: "zwar … aber." },
      { q: "To suggest a compromise:", q_fr: "Pour proposer un compromis :", o: ["Wie wäre es, wenn…?", "Das ist falsch.", "Genau!"], a: 0, ex: "Wie wäre es, wenn… = what if…", ex_fr: "Wie wäre es, wenn… = et si…" },
      { q: "“You're right.”", q_fr: "« Tu as raison. »", o: ["Da hast du recht.", "Da bist du recht.", "Da hast du richtig."], a: 0, ex: "recht haben.", ex_fr: "recht haben." },
      { q: "Disagreeing directly in a German discussion is usually seen as:", q_fr: "Contredire directement dans une discussion en allemand, c'est en général perçu comme :", o: ["normal, part of a good discussion", "very rude", "forbidden"], o_fr: ["normal, cela fait partie d'une bonne discussion", "très impoli", "interdit"], a: 0, ex: "Be clear, but stay polite.", ex_fr: "Exprime-toi clairement, mais avec politesse." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    58: {
      gap: [["Ich suche einen ___ Verein. (nett)", "netten"], ["Das ist ein ___ Training. (gut)", "gutes"], ["Mit dem ___ Trainer bin ich zufrieden. (neu)", "neuen"], ["___ Obst ist gesund.", "Frisches", "frisch, no article", "frisch, sans article"]],
      fix: [["Sie hat einen neue Trainer.", "Sie hat einen neuen Trainer.", "Accusative masculine: einen + -en.", "Accusatif masculin : einen + -en."], ["Ich spiele mit meine gute Freundin.", "Ich spiele mit meiner guten Freundin.", "mit + dative: meiner, and -en after an article in the dative.", "mit + datif : meiner, et -en après un article au datif."]],
      task: ["Describe your sports kit or your gym in four sentences with adjective + noun (after der, after ein, and without an article).", "Décris ton équipement de sport ou ta salle en quatre phrases avec adjectif + nom (après der, après ein, et sans article).", "Ich habe neue Laufschuhe und eine leichte Jacke. Mein Fitnessstudio hat einen großen Raum für Yoga. Mit der kleinen Flasche Wasser gehe ich nie ohne. Und nach dem Training trinke ich gern einen heißen Tee."]
    },
    59: {
      gap: [["Je mehr ich schlafe, ___ besser fühle ich mich.", "desto|umso"], ["Schwimmen ist gesünder ___ Joggen.", "als"], ["Sie ist so fit ___ ihr Bruder.", "wie"], ["Ich laufe immer ___. (schnell)", "schneller"]],
      fix: [["Je mehr ich trainiere, desto ich werde fitter.", "Je mehr ich trainiere, desto fitter werde ich.", "desto + comparative, then the verb.", "desto + comparatif, puis le verbe."], ["Mein Bruder ist größer wie ich.", "Mein Bruder ist größer als ich.", "After a comparative: als.", "Après un comparatif : als."]],
      task: ["Write four sentences about sport and health with je … desto, immer + comparative, so … wie and als.", "Écris quatre phrases sur le sport et la santé avec je … desto, immer + comparatif, so … wie et als.", "Je regelmäßiger ich jogge, desto weniger Stress habe ich. Immer mehr meiner Freunde machen Yoga. Mein Opa ist mit achtzig noch so aktiv wie ich. Und Radfahren macht mir mehr Spaß als Joggen."]
    },
    60: {
      gap: [["Da hast du ___.", "recht", "you're right", "tu as raison"], ["Das stimmt ___, aber nicht alle mögen Sport.", "zwar"], ["Das sehe ich ___.", "anders", "differently", "autrement"], ["Wie ___ es, wenn wir das morgen besprechen?", "wäre"]],
      fix: [["Da hast du richtig.", "Da hast du recht.", "recht haben = to be right.", "recht haben = avoir raison."], ["Das stimmt zwar, sondern ich sehe das anders.", "Das stimmt zwar, aber ich sehe das anders.", "zwar … aber.", "zwar … aber."]],
      task: ["A friend says: “Sport should be compulsory every day at school.” React in four sentences: repeat the idea, agree partly, disagree, and suggest a compromise.", "Quelqu'un te dit : « Le sport devrait être obligatoire tous les jours à l'école. » Réagis en quatre phrases : reformule l'idée, approuve en partie, contredis, et propose un compromis.", "Du meinst also, dass Kinder jeden Tag Sport machen sollten. Das stimmt zwar, denn Bewegung ist wichtig. Aber nicht alle Kinder mögen klassischen Sport. Wie wäre es, wenn die Schulen auch Tanzen oder Klettern anbieten?"]
    }
  });

  W.ROLEPLAYS.push(
  { id: "volleyballverein", lesson: 58, level: "B1", icon: "dumbbell", partner: "Ralf", role: "the coach of a volleyball club", role_fr: "l'entraîneur d'un club de volley",
    title: "Joining a sports club", title_fr: "S'inscrire dans un club de sport",
    setting: "You've just moved to a new town and want to play volleyball again. You go to a training session of the local club and talk to the coach, Ralf.", setting_fr: "Tu viens d'emménager dans une nouvelle ville et tu veux rejouer au volley. Tu vas à un entraînement du club local et tu parles avec l'entraîneur, Ralf.",
    turns: [
      { p: "Hallo! Bist du neu hier? Ich bin Ralf, der Trainer.", en: "Hi! Are you new here? I'm Ralf, the coach.", fr: "Salut ! Tu viens d'arriver ? Je suis Ralf, l'entraîneur." },
      { y: ["Ja, ich bin gerade umgezogen und suche einen netten Verein.", "Ja, ich bin gerade umgezogen und suche einen nette Verein.", "Ja, ich bin gerade umgezogen und suche ein netten Verein."], en: "Yes, I've just moved here and I'm looking for a nice club.", fr: "Oui, je viens de déménager et je cherche un club sympa.", why: "Accusative masculine: einen netten.", why_fr: "Accusatif masculin : einen netten." },
      { p: "Dann bist du hier richtig! Hast du schon mal in einer Mannschaft gespielt?", en: "Then you've come to the right place! Have you played in a team before?", fr: "Alors tu es au bon endroit ! Tu as déjà joué dans une équipe ?" },
      { y: ["Ja, fünf Jahre in einer kleinen Mannschaft in meiner alten Stadt.", "Ja, fünf Jahre in einer kleine Mannschaft in meiner alten Stadt.", "Ja, fünf Jahre in einer kleinen Mannschaft in meine alte Stadt."], en: "Yes, five years in a small team in my old town.", fr: "Oui, cinq ans dans une petite équipe dans mon ancienne ville.", why: "in + dative: einer kleinen, meiner alten (-en after an article in the dative).", why_fr: "in + datif : einer kleinen, meiner alten (-en après un article au datif)." },
      { p: "Super. Wir trainieren dienstags und donnerstags. Je öfter du kommst, desto schneller lernst du das Team kennen.", en: "Great. We train on Tuesdays and Thursdays. The more often you come, the faster you'll get to know the team.", fr: "Super. On s'entraîne le mardi et le jeudi. Plus tu viens souvent, plus vite tu connaîtras l'équipe." },
      { y: ["Ich komme so oft wie möglich! Brauche ich besondere Schuhe?", "Ich komme so oft als möglich! Brauche ich besondere Schuhe?", "Ich komme so oft wie möglich! Brauche ich besonderen Schuhe?"], en: "I'll come as often as possible! Do I need special shoes?", fr: "Je viendrai aussi souvent que possible ! J'ai besoin de chaussures spéciales ?", why: "so … wie; plural without an article: besondere.", why_fr: "so … wie ; pluriel sans article : besondere." },
      { p: "Ja, Hallenschuhe mit hellen Sohlen. Und eine Flasche Wasser, natürlich.", en: "Yes, indoor shoes with light-coloured soles. And a bottle of water, of course.", fr: "Oui, des chaussures de salle à semelles claires. Et une bouteille d'eau, bien sûr." },
      { y: ["Kein Problem. Kann ich heute schon mittrainieren, mit meinen alten Schuhen?", "Kein Problem. Kann ich heute schon mittrainieren, mit meine alten Schuhe?", "Kein Problem. Kann ich heute schon mittrainieren, mit meinen alte Schuhen?"], en: "No problem. Can I join in today, with my old shoes?", fr: "Pas de problème. Je peux déjà m'entraîner avec vous aujourd'hui, avec mes vieilles chaussures ?", why: "mit + dative plural: meinen alten Schuhen.", why_fr: "mit + datif pluriel : meinen alten Schuhen." },
      { p: "Klar! Wärm dich einfach mit den anderen auf. Wir fangen in fünf Minuten an.", en: "Sure! Just warm up with the others. We start in five minutes.", fr: "Bien sûr ! Échauffe-toi avec les autres. On commence dans cinq minutes." },
      { y: ["Perfekt, dann bis gleich!", "Perfekt, dann bis gleiche!", "Perfekt, dann zu gleich!"], en: "Perfect, see you in a minute!", fr: "Parfait, à tout de suite !", why: "bis gleich = see you in a moment.", why_fr: "bis gleich = à tout de suite." }
    ] },
  { id: "schulsportdebatte", lesson: 60, level: "B1", icon: "messages-square", partner: "Greta", role: "a friend", role_fr: "une amie",
    title: "Sport at school: a discussion", title_fr: "Le sport à l'école : une discussion",
    setting: "Your friend Greta has read that some schools want daily sport lessons. She's enthusiastic; you're less sure. Discuss.", setting_fr: "Ton amie Greta a lu que certaines écoles veulent un cours de sport chaque jour. Elle est enthousiaste ; tu l'es moins. Discutez.",
    turns: [
      { p: "Ich finde, Sport sollte in jeder Schule jeden Tag Pflicht sein. Kinder bewegen sich viel zu wenig!", en: "I think sport should be compulsory every day in every school. Children don't move enough!", fr: "Je trouve que le sport devrait être obligatoire tous les jours dans toutes les écoles. Les enfants ne bougent pas assez !" },
      { y: ["Da hast du recht, Bewegung ist wichtig. Aber jeden Tag? Da bin ich nicht so sicher.", "Da bist du recht, Bewegung ist wichtig. Aber jeden Tag? Da bin ich nicht so sicher.", "Da hast du richtig, Bewegung ist wichtig. Aber jeden Tag? Da bin ich nicht so sicher."], en: "You're right, exercise is important. But every day? I'm not so sure.", fr: "Tu as raison, l'activité physique est importante. Mais tous les jours ? J'ai des doutes.", why: "recht haben; a polite doubt: Da bin ich nicht so sicher.", why_fr: "recht haben ; un doute poli : Da bin ich nicht so sicher." },
      { p: "Warum nicht? Je mehr Sport, desto gesünder die Kinder.", en: "Why not? The more sport, the healthier the children.", fr: "Pourquoi pas ? Plus il y a de sport, plus les enfants sont en bonne santé." },
      { y: ["Das stimmt zwar, aber nicht alle Kinder mögen Mannschaftssport.", "Das stimmt zwar, sondern nicht alle Kinder mögen Mannschaftssport.", "Das stimmt zwar, aber nicht alle Kinder Mannschaftssport mögen."], en: "That's true, but not all children like team sports.", fr: "C'est vrai, mais tous les enfants n'aiment pas les sports d'équipe.", why: "zwar … aber; main clause: the verb second.", why_fr: "zwar … aber ; principale : le verbe en deuxième position." },
      { p: "Hm, das ist ein Punkt. Ich war früher auch nicht gern beim Fußball.", en: "Hm, that's a fair point. I didn't like football either when I was younger.", fr: "Hum, c'est un argument. Moi non plus, je n'aimais pas trop le foot quand j'étais petite." },
      { y: ["Wie wäre es, wenn die Kinder zwischen verschiedenen Sportarten wählen könnten?", "Wie wäre es, wenn die Kinder könnten zwischen verschiedenen Sportarten wählen?", "Wie wäre es, wenn die Kinder zwischen verschiedene Sportarten wählen könnten?"], en: "What if the children could choose between different sports?", fr: "Et si les enfants pouvaient choisir entre différents sports ?", why: "wenn: the verb at the end; zwischen + dative plural: verschiedenen.", why_fr: "wenn : le verbe à la fin ; zwischen + datif pluriel : verschiedenen." },
      { p: "Gute Idee! Tanzen, Klettern, Schwimmen… Dann hätte jedes Kind etwas, das ihm Spaß macht.", en: "Good idea! Dancing, climbing, swimming… Then every child would have something they enjoy.", fr: "Bonne idée ! Danse, escalade, natation… Chaque enfant aurait alors quelque chose qui lui plaît." },
      { y: ["Genau. Können wir uns darauf einigen, dass Bewegung wichtig ist, aber ohne Zwang?", "Genau. Können wir uns darüber einigen, dass Bewegung wichtig ist, aber ohne Zwang?", "Genau. Können wir uns darauf einigen, dass Bewegung ist wichtig, aber ohne Zwang?"], en: "Exactly. Can we agree that exercise is important, but without pressure?", fr: "Exactement. Peut-on se mettre d'accord : l'activité physique est importante, mais sans contrainte ?", why: "sich einigen auf → darauf; dass + verb at the end.", why_fr: "sich einigen auf → darauf ; dass + verbe à la fin." },
      { p: "Abgemacht! Du bist ein guter Diskussionspartner.", en: "Deal! You're good to argue with.", fr: "Marché conclu ! C'est agréable de discuter avec toi." },
      { y: ["Danke, du auch! Das sehe ich genauso.", "Danke, du auch! Das sehe ich gleich so.", "Danke, du auch! Das sehe ich genau so wie."], en: "Thanks, you too! I see it the same way.", fr: "Merci, toi aussi ! Je vois les choses de la même façon.", why: "Das sehe ich genauso = I agree completely.", why_fr: "Das sehe ich genauso = je suis tout à fait d'accord." }
    ] }
  );

  W.READINGS.push({
    id: "turnvaterjahn", level: "B1", icon: "book-open", title: "Turnvater Jahn und die deutschen Sportvereine", genre: "Article",
    intro: "Why do so many Germans do sport in clubs? The story begins on a field in Berlin in 1811.",
    intro_fr: "Pourquoi tant d'Allemands font-ils du sport en club ? L'histoire commence sur un terrain de Berlin en 1811.",
    paragraphs: [
      { de: "Im Jahr 1811 eröffnete der Lehrer Friedrich Ludwig Jahn auf der Hasenheide in Berlin einen besonderen Platz: den ersten öffentlichen Turnplatz. Junge Männer liefen, sprangen, kletterten und übten dort an Geräten. Viele nannten Jahn bald „Turnvater“.", en: "In 1811, the teacher Friedrich Ludwig Jahn opened a special place on the Hasenheide in Berlin: the first public gymnastics ground. Young men ran, jumped, climbed and practised on apparatus there. Many soon called Jahn the “father of gymnastics”.", fr: "En 1811, l'enseignant Friedrich Ludwig Jahn ouvrit sur la Hasenheide, à Berlin, un lieu particulier : le premier terrain de gymnastique public. Des jeunes hommes y couraient, sautaient, grimpaient et s'exerçaient sur des agrès. Beaucoup appelèrent bientôt Jahn le « père de la gymnastique »." },
      { de: "Einige Geräte, die man heute in jeder Turnhalle findet, gehen auf Jahn zurück, zum Beispiel das Reck und der Barren. Für Jahn war Turnen aber mehr als Sport: Zu dieser Zeit war Deutschland von Napoleon besetzt, und die Turner wollten stark werden, um für ihr Land zu kämpfen.", en: "Some of the apparatus found in every gym today goes back to Jahn, for example the horizontal bar and the parallel bars. But for Jahn, gymnastics was more than sport: at that time, Germany was occupied by Napoleon, and the gymnasts wanted to become strong in order to fight for their country.", fr: "Certains agrès qu'on trouve aujourd'hui dans tous les gymnases remontent à Jahn, par exemple la barre fixe et les barres parallèles. Mais pour Jahn, la gymnastique était plus qu'un sport : à cette époque, l'Allemagne était occupée par Napoléon, et les gymnastes voulaient devenir forts pour se battre pour leur pays." },
      { de: "Diese politische Seite gefiel den Regierungen später gar nicht. Von 1820 bis 1842 war das Turnen in Preußen sogar verboten. Trotzdem gründeten Menschen in ganz Deutschland immer mehr Turnvereine, in denen sie gemeinsam Sport trieben.", en: "The governments later disliked this political side intensely. From 1820 to 1842, gymnastics was even banned in Prussia. Even so, people all over Germany founded more and more gymnastics clubs, in which they did sport together.", fr: "Ce côté politique déplut fortement aux gouvernements par la suite. De 1820 à 1842, la gymnastique fut même interdite en Prusse. Pourtant, partout en Allemagne, on fonda de plus en plus de clubs de gymnastique, où l'on faisait du sport ensemble." },
      { de: "Diese Tradition lebt bis heute weiter. In Deutschland gibt es mehr als 85.000 Sportvereine, und der Deutsche Turner-Bund gehört zu den größten Sportverbänden des Landes. Im Verein geht es nicht nur um Leistung: Man trifft Freunde, feiert zusammen und hilft ehrenamtlich mit.", en: "This tradition lives on to this day. Germany has more than 85,000 sports clubs, and the German Gymnastics Federation is one of the largest sports federations in the country. In a club, it's not only about performance: you meet friends, celebrate together and help out as a volunteer.", fr: "Cette tradition vit encore aujourd'hui. L'Allemagne compte plus de 85 000 clubs de sport, et la Fédération allemande de gymnastique est l'une des plus grandes fédérations sportives du pays. Au club, il ne s'agit pas seulement de performance : on y retrouve des amis, on fait la fête ensemble et on aide bénévolement." }
    ],
    glossary: { "öffentlichen": ["public", "public"], "Turnplatz": ["gymnastics ground", "terrain de gymnastique"], "sprangen": ["jumped", "sautaient"], "kletterten": ["climbed", "grimpaient"], "übten": ["practised", "s'exerçaient"], "Geräten": ["apparatus, equipment", "agrès, appareils"], "Geräte": ["apparatus, equipment", "agrès, appareils"], "Turnvater": ["father of gymnastics", "père de la gymnastique"], "Turnhalle": ["gym (hall)", "gymnase"], "Reck": ["horizontal bar", "barre fixe"], "Barren": ["parallel bars", "barres parallèles"], "Turnen": ["gymnastics", "la gymnastique"], "besetzt": ["occupied", "occupé"], "Turner": ["gymnasts", "gymnastes"], "kämpfen": ["to fight", "se battre"], "politische": ["political", "politique"], "Seite": ["side", "côté"], "gefiel": ["pleased", "plut"], "Regierungen": ["governments", "gouvernements"], "Preußen": ["Prussia", "la Prusse"], "Turnvereine": ["gymnastics clubs", "clubs de gymnastique"], "trieben": ["(Sport treiben) did (sport)", "(Sport treiben) faisaient (du sport)"], "Sportvereine": ["sports clubs", "clubs de sport"], "Sportverbänden": ["sports federations", "fédérations sportives"], "Leistung": ["performance", "performance"], "ehrenamtlich": ["as a volunteer", "bénévolement"] },
    questions: [
      { q: "Was eröffnete Jahn 1811 in Berlin?", o: ["Den ersten öffentlichen Turnplatz", "Ein Fußballstadion", "Eine Sportschule für Kinder"], a: 0 },
      { q: "Welche Geräte gehen auf Jahn zurück?", o: ["Das Reck und der Barren", "Der Ball und das Netz", "Das Fahrrad und das Boot"], a: 0 },
      { q: "Warum war Turnen für Jahn mehr als Sport?", o: ["Die Turner wollten stark werden, um für ihr Land zu kämpfen.", "Er wollte damit Geld verdienen.", "Er wollte Olympiasieger werden."], a: 0 },
      { q: "Was passierte von 1820 bis 1842 in Preußen?", o: ["Das Turnen war verboten.", "Es gab keine Schulen.", "Jahn war König."], a: 0 },
      { q: "Wie viele Sportvereine gibt es heute in Deutschland?", o: ["Mehr als 85.000", "Etwa 850", "Genau 1.811"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-b1-6", unit: "b1-6", level: "B1", icon: "messages-square",
    title: "Die erste Stunde im Fitnessstudio", title_fr: "La première séance à la salle de sport",
    context: "Herr Wagner has just joined a gym. The trainer, Jule, shows him around and gives him advice.", context_fr: "M. Wagner vient de s'inscrire dans une salle de sport. L'entraîneuse, Jule, lui fait visiter et lui donne des conseils.",
    words: [["das Laufband", "the treadmill", "le tapis de course"], ["die Rückenschmerzen", "backache", "le mal de dos"], ["übertreiben", "to overdo it", "en faire trop"], ["der Trainingsplan", "the training plan", "le programme d'entraînement"], ["regelmäßig", "regularly", "régulièrement"]],
    lines: [["Jule", "Willkommen, Herr Wagner! Was ist denn Ihr Ziel?", "de-DE"], ["Herr Wagner", "Ich sitze den ganzen Tag im Büro und habe oft Rückenschmerzen. Ich möchte einfach fitter werden.", "de-DE"], ["Jule", "Ein gutes Ziel! Dann fangen wir mit leichten Übungen für den Rücken an. Und zehn Minuten auf dem Laufband, zum Aufwärmen.", "de-DE"], ["Herr Wagner", "Wie oft sollte ich am Anfang kommen?", "de-DE"], ["Jule", "Zweimal pro Woche reicht. Je regelmäßiger Sie trainieren, desto schneller sehen Sie Ergebnisse. Aber übertreiben Sie es nicht!", "de-DE"], ["Herr Wagner", "Mein Bruder trainiert jeden Tag zwei Stunden. Er ist viel stärker als ich.", "de-DE"], ["Jule", "Vergleichen Sie sich lieber nicht. Wichtig ist, dass Sie sich gut fühlen. Ich schreibe Ihnen einen einfachen Trainingsplan.", "de-DE"], ["Herr Wagner", "Danke! Und was soll ich nach dem Training essen?", "de-DE"], ["Jule", "Etwas Leichtes: frisches Obst, ein Joghurt oder ein Vollkornbrot. Und viel Wasser trinken!", "de-DE"]],
    gist: ["Was möchte Herr Wagner?", ["Fitter werden und weniger Rückenschmerzen haben", "Einen Marathon laufen", "Trainer werden"]],
    detail: [["Womit fangen sie an?", ["Mit leichten Übungen für den Rücken", "Mit schweren Gewichten", "Mit Schwimmen"]], ["Wie oft soll Herr Wagner am Anfang kommen?", ["Zweimal pro Woche", "Jeden Tag", "Einmal im Monat"]], ["Was sagt Jule über den Bruder?", ["Herr Wagner soll sich nicht mit ihm vergleichen.", "Er soll auch kommen.", "Er trainiert falsch."]], ["Was soll er nach dem Training essen?", ["Etwas Leichtes, zum Beispiel frisches Obst", "Ein großes Steak", "Nichts"]]],
    decode: ["Je regelmäßiger Sie trainieren, desto schneller sehen Sie Ergebnisse.", "Etwas Leichtes: frisches Obst"],
    tip: "Adjective endings are hard to hear in fast speech: listen for the end of the article (einen, dem, der) instead. It usually tells you the case, and the adjective ending follows from it.", tip_fr: "Les terminaisons d'adjectifs sont difficiles à entendre quand on parle vite : écoute plutôt la fin de l'article (einen, dem, der). Elle te donne en général le cas, et la terminaison de l'adjectif en découle."
  }]);

  W.PROMPTS.push({ id: "de-b1-6", level: "B1", q: "Was machst du für deine Gesundheit? Was würdest du gern ändern?", en: "What do you do for your health? What would you like to change?", fr: "Que fais-tu pour ta santé ? Qu'est-ce que tu aimerais changer ?", time: 120,
    phrases: ["Ich versuche, …", "Je mehr…, desto…", "Am liebsten…", "…, aber ich sollte…", "Mein Ziel ist…"],
    model: "Ich versuche, mich jeden Tag zu bewegen: Ich fahre mit dem Fahrrad zur Arbeit und gehe einmal pro Woche schwimmen. Am liebsten schwimme ich früh am Morgen, wenn das Bad noch leer ist. Je regelmäßiger ich Sport mache, desto besser schlafe ich. Ich esse meistens gesund, aber ich sollte weniger Süßigkeiten essen. Mein Ziel für dieses Jahr ist ein kleiner Lauf über zehn Kilometer." });

  W.WRITING_GUIDE["b1-6"] = { genre: "An opinion in an online forum (Goethe B1, writing part 2)", genre_fr: "Un avis sur un forum en ligne (Goethe B1, écrit partie 2)",
    plan: [["Your experience and your opinion.", "Ton expérience et ton avis."], ["What works well, with an example.", "Ce qui marche bien, avec un exemple."], ["A je … desto sentence.", "Une phrase avec je … desto."], ["The limits (trotzdem).", "Les limites (trotzdem)."], ["Your conclusion.", "Ta conclusion."]],
    marks: [["eine kleine Fitness-App", "adjective after ein (accusative, feminine)", "adjectif après ein (accusatif, féminin)"], ["Je mehr ich mich bewege, desto besser schlafe ich", "je … desto", "je … desto"], ["die kurzen Übungen", "adjective after die (plural)", "adjectif après die (pluriel)"], ["Trotzdem finde ich", "the other side", "l'autre point de vue"], ["Ein gesundes Leben", "adjective after ein (neuter)", "adjectif après ein (neutre)"], ["gutes Essen", "adjective without an article", "adjectif sans article"]] };

  W.COURSE.push({ id: "b1-6", level: "B1", icon: "dumbbell", title: "Health and sport", title_fr: "Santé et sport",
    intro: "In this unit, you'll talk about sport and a healthy life: the whole system of adjective endings, comparisons in sentences (je mehr, desto besser; immer schneller; so fit wie), and how to give your opinion, agree, disagree and find a compromise. You'll also discover why so many Germans do sport in clubs.",
    intro_fr: "Dans cette unité, tu vas parler de sport et de vie saine : tout le système des terminaisons d'adjectifs, la comparaison dans la phrase (je mehr, desto besser ; immer schneller ; so fit wie), et comment donner ton avis, approuver, contredire et trouver un compromis. Tu découvriras aussi pourquoi tant d'Allemands font du sport en club.",
    can: ["Use adjective endings after der, after ein and without an article", "Compare with je … desto, immer + comparative, so … wie and als", "Talk about sport, fitness and a healthy lifestyle", "Agree, disagree politely and suggest a compromise", "Give your opinion in an online forum (Goethe B1)"],
    can_fr: ["Employer les terminaisons d'adjectifs après der, après ein et sans article", "Comparer avec je … desto, immer + comparatif, so … wie et als", "Parler de sport, de forme et de vie saine", "Approuver, contredire poliment et proposer un compromis", "Donner ton avis sur un forum en ligne (Goethe B1)"],
    lessons: [58, 59, 60], vocab: ["sportB1DE", "lebensstilDE"], reading: "turnvaterjahn", prompt: "de-b1-6",
    writing: { task: "A health magazine asks its readers: “Do fitness apps make us healthier?” Write your opinion for its online forum (80-100 words): your experience, what works, the limits, and your conclusion.", task_fr: "Un magazine santé demande à ses lecteurs : « Les applis de sport nous rendent-elles plus sains ? » Écris ton avis pour son forum en ligne (80 à 100 mots) : ton expérience, ce qui marche, les limites, et ta conclusion.", words: "80-100",
      tips: ["Ich benutze seit…", "Je mehr…, desto…", "Außerdem…", "Trotzdem finde ich, dass…", "Meiner Meinung nach…"],
      checklist: ["I said what my experience is", "I used at least three adjectives with the right endings", "I used je … desto", "I mentioned a limit with trotzdem or aber", "I wrote between 80 and 100 words"],
      checklist_fr: ["J'ai parlé de mon expérience", "J'ai employé au moins trois adjectifs avec la bonne terminaison", "J'ai employé je … desto", "J'ai évoqué une limite avec trotzdem ou aber", "J'ai écrit entre 80 et 100 mots"],
      model: "Ich benutze seit einem Jahr eine kleine Fitness-App, und meiner Meinung nach hat sie mir sehr geholfen. Sie zeigt mir jeden Abend, wie viele Schritte ich gemacht habe. Je mehr ich mich bewege, desto besser schlafe ich. Außerdem motivieren mich die kurzen Übungen am Morgen. Trotzdem finde ich, dass man nicht jeden einzelnen Wert kontrollieren sollte. Ein gesundes Leben bedeutet auch gutes Essen, genug Schlaf und schöne Zeit mit Freunden. Eine App ist ein nützliches Werkzeug, aber kein Arzt. Deshalb nutze ich sie weiter, aber ohne Stress." } });
})();
