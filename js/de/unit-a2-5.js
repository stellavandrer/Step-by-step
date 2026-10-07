/* Cours d'allemand, unité A2-5 « Celebrations and fairy tales / Fêtes et contes » : les questions indirectes avec
   ob et les mots interrogatifs, le prétérit des récits (Es war einmal… ging, kam, sah), les fêtes et les vœux.
   Explications et traductions en anglais ET en français. Personnages fictifs, prénoms allemands.
   Faits vérifiables seulement : Jacob (1785-1863) et Wilhelm Grimm (1786-1859), premier volume des Kinder- und
   Hausmärchen en 1812, la conteuse Dorothea Viehmann, le Deutsches Wörterbuch commencé par les deux frères et
   achevé en 1961 ; l'Avent (quatre dimanches, couronne à quatre bougies), la Saint-Nicolas le 6 décembre, les
   cadeaux le soir du 24 décembre (Heiligabend), Silvester et « Guten Rutsch! », « Dinner for One » à la télé le
   31 décembre ; ne pas souhaiter un anniversaire en avance (superstition). */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "festeDE", icon: "sparkles", title: "Celebrations", title_fr: "Les fêtes", level: "A2", words: [
    ["Weihnachten", "Christmas", "Noël", "Weihnachten feiern wir bei meinen Eltern."],
    ["der Heiligabend", "Christmas Eve", "le réveillon de Noël, le 24 décembre", "An Heiligabend gibt es die Geschenke."],
    ["Silvester", "New Year's Eve", "la Saint-Sylvestre", "An Silvester gibt es um Mitternacht ein Feuerwerk."],
    ["Neujahr", "New Year's Day", "le jour de l'An", "An Neujahr schlafen alle lange."],
    ["Ostern", "Easter", "Pâques", "An Ostern suchen die Kinder Eier."],
    ["der Karneval / der Fasching", "carnival", "le carnaval", "In Köln feiert man Karneval mit Kostümen und Umzügen."],
    ["der Advent", "Advent (the four weeks before Christmas)", "l'Avent", "Im Advent backen wir Plätzchen."],
    ["der Adventskalender, -", "the Advent calendar", "le calendrier de l'Avent", "Jeden Morgen öffnet sie ein Türchen im Adventskalender."],
    ["der Adventskranz, ¨-e", "the Advent wreath", "la couronne de l'Avent", "Am Adventskranz brennen vier Kerzen."],
    ["der Weihnachtsbaum, ¨-e", "the Christmas tree", "le sapin de Noël", "Wir schmücken den Weihnachtsbaum."],
    ["das Geschenk, -e", "the present, the gift", "le cadeau", "Danke für das schöne Geschenk!"],
    ["die Kerze, -n", "the candle", "la bougie", "Auf dem Kuchen sind dreißig Kerzen."],
    ["das Feuerwerk, -e", "the fireworks", "le feu d'artifice", "Um Mitternacht gibt es ein Feuerwerk."],
    ["um Mitternacht", "at midnight", "à minuit", "Um Mitternacht stoßen wir an."],
    ["anstoßen", "to clink glasses, to toast", "trinquer", "Lasst uns auf das neue Jahr anstoßen!"],
    ["Frohe Weihnachten!", "Merry Christmas!", "Joyeux Noël !", "Frohe Weihnachten und ein gutes neues Jahr!"],
    ["Guten Rutsch!", "Happy New Year! (before midnight)", "bonne année ! (avant minuit)", "Bis nächstes Jahr, guten Rutsch!"],
    ["Frohe Ostern!", "Happy Easter!", "Joyeuses Pâques !", "Frohe Ostern euch allen!"]
  ] },
  { id: "maerchenDE", icon: "castle", title: "Fairy tales", title_fr: "Les contes", level: "A2", words: [
    ["das Märchen, -", "the fairy tale", "le conte (de fées)", "Meine Oma erzählt gern Märchen."],
    ["Es war einmal…", "once upon a time…", "il était une fois…", "Es war einmal ein König."],
    ["der König, -e", "the king", "le roi", "Der König hatte drei Söhne."],
    ["die Königin, -nen", "the queen", "la reine", "Die Königin war sehr schön."],
    ["der Prinz, -en", "the prince", "le prince", "Der Prinz ritt in den Wald."],
    ["die Hexe, -n", "the witch", "la sorcière", "Die Hexe wohnte in einem Haus aus Lebkuchen."],
    ["der Zauberer, -", "the wizard, the magician", "le magicien", "Der Zauberer hatte einen langen Bart."],
    ["der Riese, -n", "the giant", "le géant", "Der Riese war sehr stark."],
    ["der Zwerg, -e", "the dwarf", "le nain", "Schneewittchen wohnt bei sieben Zwergen."],
    ["der Drache, -n", "the dragon", "le dragon", "Der Drache wohnt in einer Höhle."],
    ["böse", "wicked, evil; angry", "méchant ; fâché", "Die böse Stiefmutter hatte einen Plan."],
    ["arm", "poor", "pauvre", "Der Müller war sehr arm."],
    ["reich", "rich", "riche", "Am Ende waren sie reich."],
    ["verzaubern", "to enchant, to put a spell on", "ensorceler", "Die Hexe verzauberte den Prinzen in einen Frosch."],
    ["sich verlaufen", "to get lost", "se perdre", "Die Kinder haben sich im Wald verlaufen."],
    ["am Ende", "in the end", "à la fin", "Am Ende heiratete er die Prinzessin."],
    ["glücklich", "happy", "heureux", "Sie lebten glücklich bis an ihr Ende."]
  ] },
  { id: "fragenDE", icon: "circle-help", title: "Asking and knowing", title_fr: "Demander et savoir", level: "A2", words: [
    ["ob", "whether, if", "si (interrogation indirecte)", "Ich weiß nicht, ob er kommt."],
    ["Weißt du, …?", "do you know …?", "tu sais … ?", "Weißt du, wann der Zug fährt?"],
    ["Können Sie mir sagen, …?", "can you tell me …?", "pouvez-vous me dire … ?", "Können Sie mir sagen, wo die Post ist?"],
    ["Ich weiß nicht, …", "I don't know …", "je ne sais pas …", "Ich weiß nicht, wie das heißt."],
    ["sich erinnern an", "to remember", "se souvenir de", "Ich erinnere mich gut an dieses Fest."],
    ["erklären", "to explain", "expliquer", "Kannst du mir das erklären?"],
    ["die Tradition, -en", "the tradition", "la tradition", "Das ist eine alte Tradition."],
    ["der Brauch, ¨-e", "the custom", "la coutume", "Jede Region hat ihre Bräuche."],
    ["typisch", "typical", "typique", "Was ist typisch deutsch?"],
    ["die Feier, -n", "the party, the celebration", "la fête, la célébration", "Die Feier war wunderschön."],
    ["die Überraschung, -en", "the surprise", "la surprise", "Was für eine Überraschung!"],
    ["gratulieren", "to congratulate", "féliciter", "Ich gratuliere dir zum Geburtstag!"],
    ["wünschen", "to wish", "souhaiter", "Ich wünsche dir alles Gute!"],
    ["neugierig", "curious", "curieux", "Ich bin neugierig: Was ist in dem Paket?"],
    ["Ich bin gespannt.", "I can't wait to see.", "j'ai hâte de voir", "Ich bin gespannt auf das Geschenk!"],
    ["Herzlichen Dank!", "many thanks!", "merci de tout cœur !", "Herzlichen Dank für die Einladung!"]
  ] });

  W.LESSONS.push(
  {
    id: 34, level: "A2", icon: "circle-help",
    title: "Weißt du, ob…? Indirect questions", title_fr: "Weißt du, ob… ? Les questions indirectes",
    subtitle: "Ask politely and say what you don't know: the question goes inside a sentence, and the verb goes to the end.", subtitle_fr: "Demander poliment et dire ce que tu ne sais pas : la question entre dans une phrase, et le verbe part à la fin.",
    body: `
<h2>With a question word</h2>
<p>A question can become part of a sentence: <s-de>Wann fährt der Zug?</s-de> → <s-de>Weißt du, wann der Zug fährt?</s-de> The question word stays, and the verb goes to the end, as with <s-de>weil</s-de> and <s-de>dass</s-de>.</p>
<p><s-de>Wo ist die Post?</s-de> → <s-de>Können Sie mir sagen, wo die Post ist?</s-de> · <s-de>Wie heißt das?</s-de> → <s-de>Ich weiß nicht, wie das heißt.</s-de></p>
<h2>Yes or no questions: ob</h2>
<p>When there is no question word, use <s-de>ob</s-de> (whether, if): <s-de>Kommt er?</s-de> → <s-de>Ich weiß nicht, ob er kommt.</s-de> · <s-de>Ist das Museum heute offen?</s-de> → <s-de>Wissen Sie, ob das Museum heute offen ist?</s-de></p>
<p>Careful: English "if" can be <s-de>ob</s-de> (whether) or <s-de>wenn</s-de> (on condition that). <s-de>Ich frage, ob er kommt</s-de> (I'm asking if he's coming) is not <s-de>wenn</s-de>.</p>
<h2>Why it's useful</h2>
<p>Indirect questions are more polite than direct ones: <s-de>Können Sie mir sagen, wann der Markt öffnet?</s-de> sounds friendlier than <s-de>Wann öffnet der Markt?</s-de> And they let you report what someone asks: <s-de>Sie fragt, ob du mitkommst.</s-de></p>
<div class="tip">Separable verbs join up again at the end: <s-de>Wann fängt das Fest an?</s-de> → <s-de>Weißt du, wann das Fest anfängt?</s-de> And there is no question mark when the main sentence is a statement: <s-de>Ich weiß nicht, wo er wohnt.</s-de></div>
`,
    body_fr: `
<h2>Avec un mot interrogatif</h2>
<p>Une question peut s'insérer dans une phrase : <s-de>Wann fährt der Zug?</s-de> → <s-de>Weißt du, wann der Zug fährt?</s-de> (Tu sais quand part le train ?) Le mot interrogatif reste, et le verbe part à la fin, comme avec <s-de>weil</s-de> et <s-de>dass</s-de>.</p>
<p><s-de>Wo ist die Post?</s-de> → <s-de>Können Sie mir sagen, wo die Post ist?</s-de> · <s-de>Wie heißt das?</s-de> → <s-de>Ich weiß nicht, wie das heißt.</s-de></p>
<h2>Questions fermées : ob</h2>
<p>Quand il n'y a pas de mot interrogatif, on emploie <s-de>ob</s-de> (si) : <s-de>Kommt er?</s-de> → <s-de>Ich weiß nicht, ob er kommt.</s-de> (Je ne sais pas s'il vient.) · <s-de>Ist das Museum heute offen?</s-de> → <s-de>Wissen Sie, ob das Museum heute offen ist?</s-de></p>
<p>Attention : le « si » français se traduit par <s-de>ob</s-de> quand il introduit une question (je ne sais pas si…), et par <s-de>wenn</s-de> quand il exprime une condition (si tu viens, …). <s-de>Ich frage, ob er kommt</s-de>, jamais « wenn ».</p>
<h2>Pourquoi c'est utile</h2>
<p>Les questions indirectes sont plus polies que les questions directes : <s-de>Können Sie mir sagen, wann der Markt öffnet?</s-de> sonne plus aimable que <s-de>Wann öffnet der Markt?</s-de> Et elles permettent de rapporter une question : <s-de>Sie fragt, ob du mitkommst.</s-de> (Elle demande si tu viens avec nous.)</p>
<div class="tip">Les verbes séparables se recollent à la fin : <s-de>Wann fängt das Fest an?</s-de> → <s-de>Weißt du, wann das Fest anfängt?</s-de> Et pas de point d'interrogation quand la phrase principale est une affirmation : <s-de>Ich weiß nicht, wo er wohnt.</s-de></div>
`,
    examples: [
      ["Weißt du, wann der Weihnachtsmarkt öffnet?", "Do you know when the Christmas market opens?", "Tu sais quand ouvre le marché de Noël ?"],
      ["Können Sie mir sagen, wo das Rathaus ist?", "Can you tell me where the town hall is?", "Pouvez-vous me dire où se trouve la mairie ?"],
      ["Ich weiß nicht, ob Jonas zur Party kommt.", "I don't know if Jonas is coming to the party.", "Je ne sais pas si Jonas vient à la fête."],
      ["Wissen Sie, ob das Museum am Sonntag offen ist?", "Do you know if the museum is open on Sunday?", "Savez-vous si le musée est ouvert le dimanche ?"],
      ["Sie fragt, wie viel das Geschenk gekostet hat.", "She's asking how much the present cost.", "Elle demande combien a coûté le cadeau."],
      ["Ich erinnere mich nicht, wo ich die Schlüssel hingelegt habe.", "I don't remember where I put the keys.", "Je ne me souviens pas où j'ai posé les clés."],
      ["Weißt du, wann das Feuerwerk anfängt?", "Do you know when the fireworks start?", "Tu sais quand commence le feu d'artifice ?"]
    ],
    quiz: [
      { q: "“Weißt du, wann der Zug ___?” (fahren)", q_fr: "« Weißt du, wann der Zug ___? » (fahren)", o: ["fährt", "fahren", "fährst"], a: 0, ex: "Indirect question: verb at the end, conjugated: der Zug fährt.", ex_fr: "Question indirecte : verbe à la fin, conjugué : der Zug fährt." },
      { q: "“I don't know if he's coming.”", q_fr: "« Je ne sais pas s'il vient. »", o: ["Ich weiß nicht, wenn er kommt.", "Ich weiß nicht, ob er kommt.", "Ich weiß nicht, ob kommt er."], a: 1, ex: "A yes or no question inside a sentence: ob, verb at the end.", ex_fr: "Une question fermée dans une phrase : ob, verbe à la fin." },
      { q: "Which sentence is correct?", q_fr: "Quelle phrase est correcte ?", o: ["Können Sie mir sagen, wo ist die Post?", "Können Sie mir sagen, wo die Post ist?", "Können Sie mir sagen, die Post wo ist?"], a: 1, ex: "Question word, then subject, verb at the end.", ex_fr: "Mot interrogatif, puis sujet, verbe à la fin." },
      { q: "“Weißt du, wann das Konzert ___?” (anfangen)", q_fr: "« Weißt du, wann das Konzert ___? » (anfangen)", o: ["fängt an", "anfängt", "anfangen"], a: 1, ex: "The separable verb joins up at the end: anfängt.", ex_fr: "Le verbe séparable se recolle à la fin : anfängt." },
      { q: "The politest question:", q_fr: "La question la plus polie :", o: ["Wann öffnet der Markt?", "Können Sie mir sagen, wann der Markt öffnet?", "Der Markt öffnet wann?"], a: 1, ex: "An indirect question is more polite.", ex_fr: "Une question indirecte est plus polie." }
    ]
  },
  {
    id: 35, level: "A2", icon: "book-open",
    title: "Es war einmal: the simple past in stories", title_fr: "Es war einmal : le prétérit des récits",
    subtitle: "Fairy tales, novels and the news tell the past with the Präteritum. Learn to recognise it.", subtitle_fr: "Les contes, les romans et les informations racontent le passé au prétérit. Apprends à le reconnaître.",
    body: `
<h2>Speaking or writing?</h2>
<p>In conversation, Germans use the Perfekt: <s-de>Ich bin nach Hause gegangen.</s-de> In written stories, fairy tales and the news, they use the <b>Präteritum</b>: <s-de>Das Mädchen ging in den Wald.</s-de> At A2, the main thing is to recognise it when you read.</p>
<h2>Regular verbs: -te</h2>
<p>Stem + <b>-te</b>: <s-de>sagen</s-de> → <s-de>er sagte</s-de> · <s-de>wohnen</s-de> → <s-de>sie wohnte</s-de> · <s-de>leben</s-de> → <s-de>sie lebten</s-de> · <s-de>arbeiten</s-de> → <s-de>er arbeitete</s-de>. Endings: <s-de>ich sagte, du sagtest, er sagte, wir sagten, ihr sagtet, sie sagten</s-de>.</p>
<h2>Irregular verbs: a new vowel</h2>
<table>
<tr><th>Infinitive</th><th>Präteritum</th></tr>
<tr><td><s-de>gehen</s-de></td><td><s-de>ging</s-de></td></tr>
<tr><td><s-de>kommen</s-de></td><td><s-de>kam</s-de></td></tr>
<tr><td><s-de>sehen</s-de></td><td><s-de>sah</s-de></td></tr>
<tr><td><s-de>geben</s-de></td><td><s-de>gab</s-de></td></tr>
<tr><td><s-de>finden</s-de></td><td><s-de>fand</s-de></td></tr>
<tr><td><s-de>nehmen</s-de></td><td><s-de>nahm</s-de></td></tr>
<tr><td><s-de>sprechen</s-de></td><td><s-de>sprach</s-de></td></tr>
<tr><td><s-de>rufen</s-de></td><td><s-de>rief</s-de></td></tr>
<tr><td><s-de>laufen</s-de></td><td><s-de>lief</s-de></td></tr>
<tr><td><s-de>schlafen</s-de></td><td><s-de>schlief</s-de></td></tr>
<tr><td><s-de>essen</s-de></td><td><s-de>aß</s-de></td></tr>
<tr><td><s-de>bleiben</s-de></td><td><s-de>blieb</s-de></td></tr>
</table>
<p>No ending with <s-de>ich</s-de> and <s-de>er / sie / es</s-de>: <s-de>ich ging</s-de>, <s-de>er ging</s-de>; then <s-de>du gingst</s-de>, <s-de>wir gingen</s-de>, <s-de>sie gingen</s-de>. English works the same way: go → went, see → saw.</p>
<div class="tip">Fairy tales start with <s-de>Es war einmal…</s-de> (Once upon a time…) and often end with <s-de>Und wenn sie nicht gestorben sind, dann leben sie noch heute.</s-de> (And if they haven't died, they're still alive today.)</div>
`,
    body_fr: `
<h2>À l'oral ou à l'écrit ?</h2>
<p>Dans la conversation, les Allemands emploient le Perfekt : <s-de>Ich bin nach Hause gegangen.</s-de> Dans les récits écrits, les contes et les informations, ils emploient le <b>Präteritum</b> : <s-de>Das Mädchen ging in den Wald.</s-de> (La fillette alla dans la forêt.) C'est un peu le rôle du passé simple français, mais en bien plus courant. Au niveau A2, l'essentiel est de le reconnaître quand tu lis.</p>
<h2>Les verbes réguliers : -te</h2>
<p>Radical + <b>-te</b> : <s-de>sagen</s-de> → <s-de>er sagte</s-de> · <s-de>wohnen</s-de> → <s-de>sie wohnte</s-de> · <s-de>leben</s-de> → <s-de>sie lebten</s-de> · <s-de>arbeiten</s-de> → <s-de>er arbeitete</s-de>. Terminaisons : <s-de>ich sagte, du sagtest, er sagte, wir sagten, ihr sagtet, sie sagten</s-de>.</p>
<h2>Les verbes irréguliers : une nouvelle voyelle</h2>
<table>
<tr><th>Infinitif</th><th>Prétérit</th></tr>
<tr><td><s-de>gehen</s-de></td><td><s-de>ging</s-de></td></tr>
<tr><td><s-de>kommen</s-de></td><td><s-de>kam</s-de></td></tr>
<tr><td><s-de>sehen</s-de></td><td><s-de>sah</s-de></td></tr>
<tr><td><s-de>geben</s-de></td><td><s-de>gab</s-de></td></tr>
<tr><td><s-de>finden</s-de></td><td><s-de>fand</s-de></td></tr>
<tr><td><s-de>nehmen</s-de></td><td><s-de>nahm</s-de></td></tr>
<tr><td><s-de>sprechen</s-de></td><td><s-de>sprach</s-de></td></tr>
<tr><td><s-de>rufen</s-de></td><td><s-de>rief</s-de></td></tr>
<tr><td><s-de>laufen</s-de></td><td><s-de>lief</s-de></td></tr>
<tr><td><s-de>schlafen</s-de></td><td><s-de>schlief</s-de></td></tr>
<tr><td><s-de>essen</s-de></td><td><s-de>aß</s-de></td></tr>
<tr><td><s-de>bleiben</s-de></td><td><s-de>blieb</s-de></td></tr>
</table>
<p>Pas de terminaison avec <s-de>ich</s-de> et <s-de>er / sie / es</s-de> : <s-de>ich ging</s-de>, <s-de>er ging</s-de> ; puis <s-de>du gingst</s-de>, <s-de>wir gingen</s-de>, <s-de>sie gingen</s-de>.</p>
<div class="tip">Les contes commencent par <s-de>Es war einmal…</s-de> (Il était une fois…) et finissent souvent par <s-de>Und wenn sie nicht gestorben sind, dann leben sie noch heute.</s-de> (Et s'ils ne sont pas morts, ils vivent encore aujourd'hui.) C'est l'équivalent allemand de « ils vécurent heureux ».</div>
`,
    examples: [
      ["Es war einmal ein armer Müller.", "Once upon a time there was a poor miller.", "Il était une fois un pauvre meunier."],
      ["Das Mädchen ging in den Wald.", "The girl went into the forest.", "La fillette alla dans la forêt."],
      ["Dort sah sie ein kleines Haus.", "There she saw a little house.", "Là, elle vit une petite maison."],
      ["Die Hexe sagte: „Komm herein!“", "The witch said: “Come in!”", "La sorcière dit : « Entre ! »"],
      ["Der König gab ihm seine Tochter zur Frau.", "The king gave him his daughter in marriage.", "Le roi lui donna sa fille en mariage."],
      ["Am Abend kamen die sieben Zwerge nach Hause.", "In the evening the seven dwarfs came home.", "Le soir, les sept nains rentrèrent à la maison."],
      ["Und wenn sie nicht gestorben sind, dann leben sie noch heute.", "And if they haven't died, they're still alive today.", "Et s'ils ne sont pas morts, ils vivent encore aujourd'hui."]
    ],
    quiz: [
      { q: "The Präteritum of “gehen” (er):", q_fr: "Le prétérit de « gehen » (er) :", o: ["er gehte", "er ging", "er gang"], a: 1, ex: "gehen → ging (irregular).", ex_fr: "gehen → ging (irrégulier)." },
      { q: "The Präteritum of “sagen” (sie, plural):", q_fr: "Le prétérit de « sagen » (sie, pluriel) :", o: ["sie sagten", "sie sagen", "sie sagtet"], a: 0, ex: "Regular: stem + -te + -n: sagten.", ex_fr: "Régulier : radical + -te + -n : sagten." },
      { q: "“er sah” comes from:", q_fr: "« er sah » vient de :", o: ["sagen", "sehen", "sitzen"], a: 1, ex: "sehen → sah.", ex_fr: "sehen → sah." },
      { q: "Where is the Präteritum used most?", q_fr: "Où emploie-t-on surtout le prétérit ?", o: ["In written stories and the news", "In conversation", "Only in poems"], o_fr: ["Dans les récits écrits et les informations", "Dans la conversation", "Seulement dans les poèmes"], a: 0, ex: "In conversation, the Perfekt is more common.", ex_fr: "Dans la conversation, le Perfekt est plus courant." },
      { q: "“Es war einmal…” means:", q_fr: "« Es war einmal… » veut dire :", o: ["Once upon a time…", "It was once enough…", "There was one time only…"], o_fr: ["Il était une fois…", "C'était assez une fois…", "Il n'y avait qu'une fois…"], a: 0, ex: "The classic fairy-tale opening.", ex_fr: "Le début classique des contes." }
    ]
  },
  {
    id: 36, level: "A2", kind: "functional", icon: "sparkles",
    title: "Everyday German: celebrations and good wishes", title_fr: "L'allemand de tous les jours : les fêtes et les vœux",
    subtitle: "Christmas, New Year's Eve, Easter, birthdays: what Germans do, and what to say.", subtitle_fr: "Noël, la Saint-Sylvestre, Pâques, les anniversaires : ce que font les Allemands, et ce qu'il faut dire.",
    body: `
<h2>The Christmas season</h2>
<p>Advent covers the four Sundays before Christmas: on the <s-de>Adventskranz</s-de> (Advent wreath), you light one more candle each Sunday, and children open a door of the <s-de>Adventskalender</s-de> every day. On 6 December, <s-de>Nikolaustag</s-de>, children find sweets in the boots they put out the evening before. Presents are usually opened on the evening of 24 December, <s-de>Heiligabend</s-de>. Wish: <s-de>Frohe Weihnachten!</s-de></p>
<h2>New Year's Eve</h2>
<p>31 December is <s-de>Silvester</s-de>, with fireworks at midnight. Before midnight, people wish each other <s-de>Guten Rutsch!</s-de> (literally, a good slide into the new year), and after it, <s-de>Frohes neues Jahr!</s-de> A well-known tradition: watching the short British sketch "Dinner for One" on TV.</p>
<h2>Easter and carnival</h2>
<p><s-de>Frohe Ostern!</s-de> Children look for painted eggs. In the Rhineland, carnival (<s-de>Karneval</s-de>, in the south <s-de>Fasching</s-de>) is celebrated at the end of winter, in February or March, with costumes and parades.</p>
<h2>Birthdays</h2>
<p><s-de>Alles Gute zum Geburtstag!</s-de> · <s-de>Herzlichen Glückwunsch!</s-de> · <s-de>Ich wünsche dir alles Gute!</s-de> Careful: many Germans think it brings bad luck to wish someone a happy birthday before the day. Many people <s-de>reinfeiern</s-de>: they start the party the evening before and celebrate at midnight.</p>
<div class="tip">Answers to good wishes: <s-de>Danke, gleichfalls!</s-de> (Thanks, you too!) · <s-de>Danke, dir auch!</s-de> For a present: <s-de>Vielen Dank, das ist aber nett!</s-de> · <s-de>Oh, das wäre doch nicht nötig gewesen!</s-de> (Oh, you shouldn't have!)</div>
`,
    body_fr: `
<h2>La période de Noël</h2>
<p>L'Avent couvre les quatre dimanches avant Noël : sur l'<s-de>Adventskranz</s-de> (la couronne de l'Avent), on allume une bougie de plus chaque dimanche, et les enfants ouvrent chaque jour une fenêtre du <s-de>Adventskalender</s-de>. Le 6 décembre, <s-de>Nikolaustag</s-de> (la Saint-Nicolas), les enfants trouvent des friandises dans les bottes posées la veille. Les cadeaux s'ouvrent en général le soir du 24 décembre, <s-de>Heiligabend</s-de>, et non le 25 au matin. Vœux : <s-de>Frohe Weihnachten!</s-de></p>
<h2>La Saint-Sylvestre</h2>
<p>Le 31 décembre, c'est <s-de>Silvester</s-de>, avec un feu d'artifice à minuit. Avant minuit, on se souhaite <s-de>Guten Rutsch!</s-de> (littéralement, une bonne glissade vers la nouvelle année), et après, <s-de>Frohes neues Jahr!</s-de> Une tradition très connue : regarder à la télé le court sketch britannique « Dinner for One ».</p>
<h2>Pâques et le carnaval</h2>
<p><s-de>Frohe Ostern!</s-de> Les enfants cherchent des œufs peints. En Rhénanie, le carnaval (<s-de>Karneval</s-de>, dans le sud <s-de>Fasching</s-de>) se fête à la fin de l'hiver, en février ou en mars, avec des déguisements et des défilés.</p>
<h2>Les anniversaires</h2>
<p><s-de>Alles Gute zum Geburtstag!</s-de> · <s-de>Herzlichen Glückwunsch!</s-de> · <s-de>Ich wünsche dir alles Gute!</s-de> Attention : beaucoup d'Allemands pensent que souhaiter un anniversaire en avance porte malheur. Beaucoup <s-de>reinfeiern</s-de> : ils commencent la fête la veille et célèbrent à minuit.</p>
<div class="tip">Répondre à des vœux : <s-de>Danke, gleichfalls!</s-de> (Merci, à toi aussi !) · <s-de>Danke, dir auch!</s-de> Pour un cadeau : <s-de>Vielen Dank, das ist aber nett!</s-de> · <s-de>Oh, das wäre doch nicht nötig gewesen!</s-de> (Oh, il ne fallait pas !)</div>
`,
    examples: [
      ["Frohe Weihnachten und einen guten Rutsch!", "Merry Christmas and a happy New Year!", "Joyeux Noël et bonne année !"],
      ["An Heiligabend packen wir die Geschenke aus.", "On Christmas Eve we unwrap the presents.", "Le soir du 24, on déballe les cadeaux."],
      ["Am sechsten Dezember ist Nikolaustag.", "The sixth of December is St Nicholas' Day.", "Le six décembre, c'est la Saint-Nicolas."],
      ["Frohes neues Jahr! — Danke, gleichfalls!", "Happy New Year! — Thanks, you too!", "Bonne année ! — Merci, à toi aussi !"],
      ["Wir feiern heute Abend in meinen Geburtstag rein.", "We're celebrating the start of my birthday tonight.", "Ce soir, on fête le début de mon anniversaire."],
      ["Ich wünsche dir alles Gute zum Geburtstag!", "I wish you a very happy birthday!", "Je te souhaite un très joyeux anniversaire !"],
      ["Oh, das wäre doch nicht nötig gewesen!", "Oh, you shouldn't have!", "Oh, il ne fallait pas !"]
    ],
    quiz: [
      { q: "When do Germans usually open their Christmas presents?", q_fr: "Quand les Allemands ouvrent-ils en général leurs cadeaux de Noël ?", o: ["On the evening of 24 December", "On the morning of 25 December", "On 6 December"], o_fr: ["Le soir du 24 décembre", "Le matin du 25 décembre", "Le 6 décembre"], a: 0, ex: "On Heiligabend, the 24th, in the evening.", ex_fr: "À Heiligabend, le 24, le soir." },
      { q: "On 31 December, before midnight, you say:", q_fr: "Le 31 décembre, avant minuit, tu dis :", o: ["Guten Rutsch!", "Frohe Ostern!", "Gute Besserung!"], a: 0, ex: "Guten Rutsch! = Happy New Year (before midnight).", ex_fr: "Guten Rutsch! = bonne année (avant minuit)." },
      { q: "Wishing someone a happy birthday the day before is:", q_fr: "Souhaiter un anniversaire la veille, c'est :", o: ["often thought to bring bad luck", "the normal custom", "compulsory"], o_fr: ["souvent vu comme un porte-malheur", "la coutume normale", "obligatoire"], a: 0, ex: "Wait for the day, or celebrate at midnight (reinfeiern).", ex_fr: "Attends le jour même, ou fête à minuit (reinfeiern)." },
      { q: "Someone wishes you a happy New Year. You answer:", q_fr: "On te souhaite une bonne année. Tu réponds :", o: ["Danke, gleichfalls!", "Bitte schön!", "Gesundheit!"], a: 0, ex: "gleichfalls = you too.", ex_fr: "gleichfalls = toi aussi." },
      { q: "On Nikolaustag, children find sweets:", q_fr: "À la Saint-Nicolas, les enfants trouvent des friandises :", o: ["in their boots", "under the Christmas tree", "in the garden"], o_fr: ["dans leurs bottes", "sous le sapin", "dans le jardin"], a: 0, ex: "They put their boots out the evening before.", ex_fr: "Ils posent leurs bottes la veille au soir." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    34: {
      gap: [["Weißt du, wann der Markt ___? (öffnen)", "öffnet"], ["Ich weiß nicht, ___ er heute kommt.", "ob", "whether", "si"], ["Können Sie mir sagen, wo die Kirche ___? (sein)", "ist"], ["Weißt du, wann das Fest ___? (anfangen)", "anfängt"]],
      fix: [["Ich weiß nicht, wenn sie kommt.", "Ich weiß nicht, ob sie kommt.", "A yes or no question inside a sentence: ob, not wenn.", "Une question fermée dans une phrase : ob, pas wenn."], ["Weißt du, wo wohnt Lena?", "Weißt du, wo Lena wohnt?", "Indirect question: the verb goes to the end.", "Question indirecte : le verbe part à la fin."]],
      task: ["You're new in town. Ask four polite indirect questions about a festival (time, place, price…).", "Tu viens d'arriver dans une ville. Pose quatre questions indirectes polies sur une fête (heure, lieu, prix…).", "Können Sie mir sagen, wann das Stadtfest beginnt? Wissen Sie, wo die Konzerte stattfinden? Ich möchte auch wissen, ob der Eintritt frei ist. Und wissen Sie, wie lange das Feuerwerk dauert?"]
    },
    35: {
      gap: [["Das Mädchen ___ in den Wald. (gehen, Präteritum)", "ging"], ["Dort ___ sie ein kleines Haus. (sehen)", "sah"], ["Die Hexe ___: „Komm herein!“ (sagen)", "sagte"], ["Am Abend ___ die Zwerge nach Hause. (kommen)", "kamen"]],
      fix: [["Der König gehte in den Wald.", "Der König ging in den Wald.", "gehen is irregular: ging.", "gehen est irrégulier : ging."], ["Die Kinder sahen ein Haus und sie gingte hinein.", "Die Kinder sahen ein Haus und sie gingen hinein.", "gehen → ging, plural gingen.", "gehen → ging, pluriel gingen."]],
      task: ["Start your own fairy tale: four sentences in the Präteritum, beginning with Es war einmal.", "Commence ton propre conte : quatre phrases au prétérit, en commençant par Es war einmal.", "Es war einmal eine junge Bäckerin. Sie wohnte allein in einem kleinen Dorf am Wald. Eines Tages kam ein alter Mann in ihre Bäckerei. Er sagte: „Ich habe Hunger, aber kein Geld.“"]
    },
    36: {
      gap: [["Frohe ___! (Christmas)", "Weihnachten"], ["Guten ___! (Happy New Year, before midnight)", "Rutsch"], ["Danke, ___! (you too)", "gleichfalls"], ["Alles ___ zum Geburtstag!", "Gute", "all the best", "tous mes vœux"]],
      fix: [["Frohe Geburtstag!", "Alles Gute zum Geburtstag!|Herzlichen Glückwunsch zum Geburtstag!", "For birthdays: Alles Gute or Herzlichen Glückwunsch zum Geburtstag.", "Pour un anniversaire : Alles Gute ou Herzlichen Glückwunsch zum Geburtstag."], ["Guten Rutsch für das neue Jahr!", "Guten Rutsch ins neue Jahr!", "A fixed phrase: Guten Rutsch ins neue Jahr!", "Une formule figée : Guten Rutsch ins neue Jahr!"]],
      task: ["Write three short cards: a Christmas card, a New Year's message and a birthday card for German friends.", "Écris trois petits mots : une carte de Noël, un message pour le Nouvel An et une carte d'anniversaire pour des amis allemands.", "Liebe Familie Weber, frohe Weihnachten und schöne Feiertage! Lieber Malte, guten Rutsch ins neue Jahr! Liebe Paula, alles Gute zum Geburtstag und viel Glück im neuen Lebensjahr!"]
    }
  });

  W.ROLEPLAYS.push(
  { id: "stadtfest", lesson: 34, level: "A2", icon: "info", partner: "Frau Albrecht", role: "an employee at the tourist office", role_fr: "l'employée de l'office du tourisme",
    title: "Asking about the Christmas market", title_fr: "Se renseigner sur le marché de Noël",
    setting: "You're spending a weekend in Nuremberg in December. You ask at the tourist office about the Christmas market.", setting_fr: "Tu passes un week-end à Nuremberg en décembre. Tu te renseignes à l'office du tourisme sur le marché de Noël.",
    turns: [
      { p: "Grüß Gott! Was kann ich für Sie tun?", en: "Hello! What can I do for you?", fr: "Bonjour ! Que puis-je faire pour vous ?" },
      { y: ["Guten Tag! Können Sie mir sagen, wo der Weihnachtsmarkt ist?", "Guten Tag! Können Sie mir sagen, wo ist der Weihnachtsmarkt?", "Guten Tag! Können Sie mir sagen, der Weihnachtsmarkt wo ist?"], en: "Hello! Can you tell me where the Christmas market is?", fr: "Bonjour ! Pouvez-vous me dire où se trouve le marché de Noël ?", why: "Indirect question: wo + subject + verb at the end.", why_fr: "Question indirecte : wo + sujet + verbe à la fin." },
      { p: "Natürlich, auf dem Hauptmarkt, fünf Minuten zu Fuß von hier.", en: "Of course, on the main market square, five minutes' walk from here.", fr: "Bien sûr, sur la place du marché principal, à cinq minutes à pied d'ici." },
      { y: ["Und wissen Sie, bis wann er heute geöffnet ist?", "Und wissen Sie, bis wann ist er heute geöffnet?", "Und wissen Sie, ob wann er heute geöffnet ist?"], en: "And do you know until when it's open today?", fr: "Et savez-vous jusqu'à quelle heure il est ouvert aujourd'hui ?", why: "The verb (ist) goes to the end.", why_fr: "Le verbe (ist) part à la fin." },
      { p: "Bis einundzwanzig Uhr. Am Sonntag gibt es auch ein Konzert in der Kirche.", en: "Until 9 pm. On Sunday there's also a concert in the church.", fr: "Jusqu'à vingt et une heures. Dimanche, il y a aussi un concert à l'église." },
      { y: ["Toll! Wissen Sie, ob man Karten kaufen muss?", "Toll! Wissen Sie, wenn man Karten kaufen muss?", "Toll! Wissen Sie, ob muss man Karten kaufen?"], en: "Great! Do you know if you have to buy tickets?", fr: "Super ! Savez-vous s'il faut acheter des billets ?", why: "A yes or no question: ob; the modal at the very end.", why_fr: "Une question fermée : ob ; le verbe de modalité tout à la fin." },
      { p: "Nein, der Eintritt ist frei. Aber kommen Sie früh, es ist immer sehr voll!", en: "No, admission is free. But come early, it's always very crowded!", fr: "Non, l'entrée est libre. Mais venez tôt, il y a toujours beaucoup de monde !" },
      { y: ["Vielen Dank für die Informationen! Schönen Tag noch!", "Viele Dank für die Informationen! Schönen Tag noch!", "Vielen Dank für die Informationen! Schöne Tag noch!"], en: "Thank you very much for the information! Have a nice day!", fr: "Merci beaucoup pour les renseignements ! Bonne journée !", why: "Fixed phrases: vielen Dank, schönen Tag noch.", why_fr: "Formules figées : vielen Dank, schönen Tag noch." }
    ] },
  { id: "silvester", lesson: 36, level: "A2", icon: "sparkles", partner: "Lotte", role: "a German friend", role_fr: "une amie allemande",
    title: "New Year's Eve plans", title_fr: "Les projets de la Saint-Sylvestre",
    setting: "It's late December. Your German friend Lotte calls to ask about your plans for New Year's Eve.", setting_fr: "C'est la fin décembre. Ton amie allemande Lotte t'appelle pour connaître tes projets pour la Saint-Sylvestre.",
    turns: [
      { p: "Hallo! Na, hattest du schöne Weihnachten?", en: "Hi! So, did you have a nice Christmas?", fr: "Salut ! Alors, tu as passé un bon Noël ?" },
      { y: ["Ja, sehr schön! An Heiligabend war ich bei Freunden. Und du?", "Ja, sehr schön! An Heiligabend ich war bei Freunden. Und du?", "Ja, sehr schön! An Heiligabend war ich bei Freunde. Und du?"], en: "Yes, very nice! On Christmas Eve I was with friends. And you?", fr: "Oui, très bien ! Le soir du 24, j'étais chez des amis. Et toi ?", why: "Verb second after An Heiligabend; bei + dative plural: Freunden.", why_fr: "Verbe en deuxième position après An Heiligabend ; bei + datif pluriel : Freunden." },
      { p: "Ich war bei meiner Familie. Sag mal, was machst du an Silvester?", en: "I was with my family. Tell me, what are you doing on New Year's Eve?", fr: "J'étais chez ma famille. Dis-moi, tu fais quoi pour la Saint-Sylvestre ?" },
      { y: ["Ich weiß noch nicht, was ich mache. Hast du eine Idee?", "Ich weiß noch nicht, was mache ich. Hast du eine Idee?", "Ich weiß noch nicht, ob was ich mache. Hast du eine Idee?"], en: "I don't know yet what I'm doing. Do you have an idea?", fr: "Je ne sais pas encore ce que je fais. Tu as une idée ?", why: "Indirect question with was: the verb at the end.", why_fr: "Question indirecte avec was : le verbe à la fin." },
      { p: "Ja! Wir feiern bei mir. Um Mitternacht gehen wir zum Feuerwerk an den Fluss. Kommst du?", en: "Yes! We're celebrating at my place. At midnight we're going to the fireworks by the river. Are you coming?", fr: "Oui ! On fait la fête chez moi. À minuit, on va voir le feu d'artifice au bord de la rivière. Tu viens ?" },
      { y: ["Gern! Soll ich etwas mitbringen? Vielleicht einen Sekt zum Anstoßen?", "Gern! Soll ich etwas bringen mit? Vielleicht einen Sekt zum Anstoßen?", "Gern! Soll ich etwas mitbringen? Vielleicht ein Sekt zum Anstoßen?"], en: "I'd love to! Shall I bring something? Maybe some sparkling wine to toast with?", fr: "Avec plaisir ! J'apporte quelque chose ? Peut-être un mousseux pour trinquer ?", why: "mitbringen in one piece at the end; der Sekt → einen Sekt.", why_fr: "mitbringen en un seul morceau à la fin ; der Sekt → einen Sekt." },
      { p: "Super Idee! Und wir schauen natürlich „Dinner for One“. Das ist Tradition!", en: "Great idea! And of course we'll watch “Dinner for One”. It's a tradition!", fr: "Super idée ! Et on regarde « Dinner for One », évidemment. C'est la tradition !" },
      { y: ["Ich bin gespannt! Also bis Silvester, und guten Rutsch, falls wir uns vorher nicht sehen!", "Ich bin gespannt! Also bis Silvester, und frohe Ostern, falls wir uns vorher nicht sehen!", "Ich bin gespannt! Also bis Silvester, und gute Rutsch, falls wir uns vorher nicht sehen!"], en: "I can't wait! See you on New Year's Eve, and happy New Year in case we don't see each other before!", fr: "J'ai hâte ! À la Saint-Sylvestre, et bonne année au cas où on ne se verrait pas avant !", why: "Before New Year: Guten Rutsch (der Rutsch, accusative).", why_fr: "Avant le Nouvel An : Guten Rutsch (der Rutsch, accusatif)." }
    ] }
  );

  W.READINGS.push({
    id: "grimm", level: "A2", icon: "book-open", title: "Die Brüder Grimm", genre: "Article",
    intro: "Snow White, Hansel and Gretel, Little Red Riding Hood: two brothers collected these tales two hundred years ago. A text in the Präteritum.",
    intro_fr: "Blanche-Neige, Hänsel et Gretel, le Petit Chaperon rouge : deux frères ont recueilli ces contes il y a deux cents ans. Un texte au prétérit.",
    paragraphs: [
      { de: "Jacob und Wilhelm Grimm waren Brüder. Jacob kam 1785 zur Welt, Wilhelm ein Jahr später. Sie studierten Jura, aber am meisten interessierten sie sich für die deutsche Sprache und für alte Geschichten.", en: "Jacob and Wilhelm Grimm were brothers. Jacob was born in 1785, Wilhelm a year later. They studied law, but they were most interested in the German language and in old stories.", fr: "Jacob et Wilhelm Grimm étaient frères. Jacob vint au monde en 1785, Wilhelm un an plus tard. Ils étudièrent le droit, mais ce qui les intéressait le plus, c'était la langue allemande et les vieilles histoires." },
      { de: "Sie sammelten Märchen. Viele Menschen erzählten ihnen Geschichten, zum Beispiel die Erzählerin Dorothea Viehmann. Die Brüder schrieben alles auf. 1812 erschien der erste Band ihrer „Kinder- und Hausmärchen“.", en: "They collected fairy tales. Many people told them stories, for example the storyteller Dorothea Viehmann. The brothers wrote everything down. In 1812 the first volume of their “Children's and Household Tales” came out.", fr: "Ils recueillirent des contes. Beaucoup de gens leur racontèrent des histoires, par exemple la conteuse Dorothea Viehmann. Les frères notèrent tout. En 1812 parut le premier volume de leurs « Contes de l'enfance et du foyer »." },
      { de: "Heute kennt man ihre Märchen auf der ganzen Welt: Hänsel und Gretel, Rotkäppchen, Schneewittchen, Aschenputtel. In vielen Märchen gibt es böse Hexen, arme Kinder und dunkle Wälder, aber am Ende siegt meistens das Gute.", en: "Today their tales are known all over the world: Hansel and Gretel, Little Red Riding Hood, Snow White, Cinderella. In many tales there are wicked witches, poor children and dark forests, but in the end good usually wins.", fr: "Aujourd'hui, leurs contes sont connus dans le monde entier : Hänsel et Gretel, le Petit Chaperon rouge, Blanche-Neige, Cendrillon. Dans beaucoup de contes, il y a des sorcières méchantes, des enfants pauvres et des forêts sombres, mais à la fin, le bien l'emporte le plus souvent." },
      { de: "Die Brüder hatten noch ein großes Projekt: ein Wörterbuch der deutschen Sprache. Sie begannen es, aber sie konnten es nicht beenden. Das „Deutsche Wörterbuch“ war erst 1961 fertig, mehr als hundert Jahre nach ihrem Tod!", en: "The brothers had another big project: a dictionary of the German language. They started it, but they couldn't finish it. The “German Dictionary” was only finished in 1961, more than a hundred years after their death!", fr: "Les frères avaient encore un grand projet : un dictionnaire de la langue allemande. Ils le commencèrent, mais ne purent pas l'achever. Le « Dictionnaire allemand » ne fut terminé qu'en 1961, plus de cent ans après leur mort !" }
    ],
    glossary: { "Brüder": ["brothers", "frères"], "Jura": ["law (studies)", "droit (études)"], "sammelten": ["collected", "recueillirent"], "erzählten": ["told", "racontèrent"], "Erzählerin": ["storyteller (a woman)", "conteuse"], "schrieben": ["wrote", "écrivirent"], "erschien": ["came out, appeared", "parut"], "Band": ["volume", "volume, tome"], "Rotkäppchen": ["Little Red Riding Hood", "le Petit Chaperon rouge"], "Schneewittchen": ["Snow White", "Blanche-Neige"], "Aschenputtel": ["Cinderella", "Cendrillon"], "siegt": ["wins", "l'emporte"], "Gute": ["good", "bien"], "Wörterbuch": ["dictionary", "dictionnaire"], "begannen": ["began", "commencèrent"], "beenden": ["to finish", "achever"], "Tod": ["death", "mort"] },
    questions: [
      { q: "Was studierten Jacob und Wilhelm Grimm?", o: ["Jura", "Medizin", "Musik"], a: 0 },
      { q: "Was machten die Brüder mit den Geschichten?", o: ["Sie schrieben sie auf.", "Sie vergaßen sie.", "Sie verkauften sie."], a: 0 },
      { q: "Wann erschien der erste Band der Märchen?", o: ["1812", "1785", "1961"], a: 0 },
      { q: "Was passiert meistens am Ende der Märchen?", o: ["Das Gute siegt.", "Die Hexe gewinnt.", "Alle sind traurig."], a: 0 },
      { q: "Wann war das Deutsche Wörterbuch fertig?", o: ["1961", "1812", "1900"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-a2-5", unit: "a2-5", level: "A2", icon: "messages-square",
    title: "Weihnachten bei Familie Roth", title_fr: "Noël chez les Roth",
    context: "Torsten tells his colleague Ilse how his family celebrated Christmas.", context_fr: "Torsten raconte à sa collègue Ilse comment sa famille a fêté Noël.",
    words: [["der Gottesdienst", "the church service", "la messe, l'office"], ["die Bescherung", "the giving of Christmas presents", "la distribution des cadeaux"], ["der Kartoffelsalat", "potato salad", "la salade de pommes de terre"], ["die Würstchen", "sausages", "les saucisses"], ["die Gans", "the goose", "l'oie"]],
    lines: [["Ilse", "Na, Torsten, wie war Weihnachten bei euch?", "de-DE"], ["Torsten", "Sehr schön, aber anstrengend! An Heiligabend waren wir zu zwölft bei meinen Eltern.", "de-DE"], ["Ilse", "Zu zwölft? Was habt ihr gegessen?", "de-DE"], ["Torsten", "Ganz traditionell: Kartoffelsalat mit Würstchen. Das gibt es bei uns jedes Jahr an Heiligabend.", "de-DE"], ["Ilse", "Bei uns auch! Und wann war die Bescherung?", "de-DE"], ["Torsten", "Nach dem Essen, so um acht. Die Kinder waren schon total ungeduldig.", "de-DE"], ["Ilse", "Und was hast du bekommen?", "de-DE"], ["Torsten", "Ein Buch über die Brüder Grimm! Ich weiß nicht, wer meiner Frau die Idee gegeben hat, aber es ist toll.", "de-DE"], ["Ilse", "Und am ersten Weihnachtstag?", "de-DE"], ["Torsten", "Da gab es eine Gans, bei meiner Schwiegermutter. Ich habe so viel gegessen! Ich glaube, ich esse bis Silvester nichts mehr.", "de-DE"]],
    gist: ["Worüber spricht Torsten?", ["Über Weihnachten mit seiner Familie", "Über seinen Urlaub im Sommer", "Über ein Märchenbuch für Kinder"]],
    detail: [["Wie viele Personen waren an Heiligabend bei Torstens Eltern?", ["Zwölf", "Zwei", "Zwanzig"]], ["Was gibt es bei Torstens Familie an Heiligabend?", ["Kartoffelsalat mit Würstchen", "Eine Gans", "Fisch"]], ["Wann war die Bescherung?", ["Nach dem Essen, gegen acht", "Am Morgen", "Um Mitternacht"]], ["Was hat Torsten bekommen?", ["Ein Buch über die Brüder Grimm", "Einen Pullover", "Eine Gans"]]],
    decode: ["An Heiligabend waren wir zu zwölft bei meinen Eltern.", "Ich weiß nicht, wer meiner Frau die Idee gegeben hat"],
    tip: "Germans tell their own stories in the Perfekt, but with sein and haben in the simple past: waren wir, gab es, war die Bescherung. Listen for both forms in the same story.", tip_fr: "Les Allemands racontent leurs propres histoires au Perfekt, mais avec sein et haben au prétérit : waren wir, gab es, war die Bescherung. Écoute les deux formes dans le même récit."
  }]);

  W.PROMPTS.push({ id: "de-a2-5", level: "A2", q: "Welches Fest feierst du am liebsten? Wie feierst du es, und mit wem?", en: "Which celebration do you like best? How do you celebrate it, and with whom?", fr: "Quelle fête préfères-tu ? Comment la fêtes-tu, et avec qui ?", time: 90,
    phrases: ["Am liebsten feiere ich…", "Bei uns gibt es…", "Wir essen / schenken / singen…", "Letztes Jahr war ich…", "Ich weiß noch nicht, ob…"],
    model: "Am liebsten feiere ich Silvester. Bei uns gibt es kein großes Menü: Wir kochen zusammen mit Freunden. Um Mitternacht stoßen wir mit Sekt an und schauen das Feuerwerk vom Balkon. Letztes Jahr war ich in Berlin, und die Stimmung war fantastisch. Dieses Jahr weiß ich noch nicht, wo ich feiere, aber ich freue mich schon!" });

  W.WRITING_GUIDE["a2-5"] = { genre: "A thank-you email after a celebration", genre_fr: "Un e-mail de remerciement après une fête",
    plan: [["Thank your hosts warmly.", "Remercie chaleureusement tes hôtes."], ["What you liked about the evening.", "Ce qui t'a plu pendant la soirée."], ["Something you learnt about a tradition.", "Quelque chose que tu as appris sur une tradition."], ["A question with ob or a question word.", "Une question avec ob ou un mot interrogatif."], ["Good wishes and goodbye.", "Des vœux et au revoir."]],
    marks: [["Herzlichen Dank für den schönen Abend!", "warm thanks", "des remerciements chaleureux"], ["Das Essen war wunderbar", "war: the past of sein", "war : le passé de sein"], ["Ich wusste nicht, dass", "a new tradition", "une nouvelle tradition"], ["Könnt ihr mir sagen, wie man", "an indirect question", "une question indirecte"], ["guten Rutsch", "New Year wishes", "les vœux de Nouvel An"], ["Liebe Grüße", "a warm ending", "une fin chaleureuse"]] };

  W.COURSE.push({ id: "a2-5", level: "A2", icon: "sparkles", title: "Celebrations and fairy tales", title_fr: "Fêtes et contes",
    intro: "In this unit, you'll discover German celebrations and fairy tales: indirect questions with ob and question words (Weißt du, wann…?), the Präteritum of written stories (Es war einmal… ging, kam, sah), and the traditions and good wishes of the year, from Advent to New Year's Eve.",
    intro_fr: "Dans cette unité, tu vas découvrir les fêtes et les contes allemands : les questions indirectes avec ob et les mots interrogatifs (Weißt du, wann… ?), le prétérit des récits écrits (Es war einmal… ging, kam, sah), et les traditions et les vœux de l'année, de l'Avent à la Saint-Sylvestre.",
    can: ["Ask polite indirect questions with ob and question words", "Recognise and use the Präteritum in stories", "Talk about German celebrations and traditions", "Give good wishes and thank people for a celebration"],
    can_fr: ["Poser des questions indirectes polies avec ob et les mots interrogatifs", "Reconnaître et employer le prétérit dans les récits", "Parler des fêtes et des traditions allemandes", "Présenter des vœux et remercier pour une fête"],
    lessons: [34, 35, 36], vocab: ["festeDE", "maerchenDE", "fragenDE"], reading: "grimm", prompt: "de-a2-5",
    writing: { task: "Your German friends invited you to their Christmas dinner. Write them a thank-you email (40-60 words): what you liked, a tradition you discovered, a question, and your wishes for the New Year.", task_fr: "Tu as passé le repas de Noël chez des amis allemands. Écris-leur un e-mail de remerciement (40 à 60 mots) : ce qui t'a plu, une tradition que tu as découverte, une question, et tes vœux pour le Nouvel An.", words: "40-60",
      tips: ["Liebe Johanna, lieber Finn,", "Herzlichen Dank für…!", "Ich wusste nicht, dass…", "Kannst du mir sagen, wie / ob…?", "Guten Rutsch!"],
      checklist: ["I thanked my hosts warmly", "I used war or hatte for the past", "I asked an indirect question (verb at the end)", "I gave good wishes", "I stayed between 40 and 60 words"],
      checklist_fr: ["J'ai remercié chaleureusement mes hôtes", "J'ai employé war ou hatte pour le passé", "J'ai posé une question indirecte (verbe à la fin)", "J'ai présenté mes vœux", "J'ai écrit entre 40 et 60 mots"],
      model: "Liebe Johanna, lieber Finn,\n\nHerzlichen Dank für den schönen Abend! Das Essen war wunderbar, vor allem der Kartoffelsalat. Ich wusste nicht, dass man die Geschenke schon an Heiligabend auspackt. Könnt ihr mir sagen, wie man diese Plätzchen backt? Ich möchte das Rezept unbedingt haben. Euch einen guten Rutsch ins neue Jahr!\n\nLiebe Grüße\nCamille" } });
})();
