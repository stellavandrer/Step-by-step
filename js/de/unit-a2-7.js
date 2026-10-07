/* Cours d'allemand, unité A2-7 « Nature and the future / Nature et avenir » : le futur avec werden (et le piège
   ich will ≠ I will), les propositions relatives au nominatif et à l'accusatif (der Mann, der… / den…), la météo,
   le tri des déchets et la consigne. Explications et traductions en anglais ET en français. Personnages fictifs.
   Faits vérifiables seulement : couleurs des poubelles variables selon les communes (papier souvent bleu, emballages
   dans la Gelbe Tonne / le Gelber Sack, biodéchets souvent marron), verre trié par couleur (blanc, vert, brun) ;
   consigne sur les bouteilles et canettes à usage unique introduite en 2003, aujourd'hui de 25 centimes.
   Wattenmeer : mer des Wadden (Pays-Bas, Allemagne, Danemark), plus grand système continu de vasières littorales
   au monde, patrimoine naturel mondial de l'UNESCO depuis 2009, trois parcs nationaux allemands (Schleswig-Holstein,
   Basse-Saxe, Hambourg) ; marées deux fois par jour ; randonnées dans le Watt avec un guide ; phoques sur les bancs
   de sable, des millions d'oiseaux migrateurs en escale. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "wetterDE", icon: "cloud-sun", title: "The weather", title_fr: "La météo", level: "A2", words: [
    ["der Wetterbericht, -e", "the weather forecast", "la météo, le bulletin météo", "Laut Wetterbericht wird es morgen schön."],
    ["Wie wird das Wetter morgen?", "what will the weather be like tomorrow?", "quel temps fera-t-il demain ?", "Wie wird das Wetter morgen? — Sonnig!"],
    ["der Regen", "the rain", "la pluie", "Nach dem Regen kommt die Sonne."],
    ["regnen", "to rain", "pleuvoir", "Es regnet schon den ganzen Tag."],
    ["der Schnee", "the snow", "la neige", "Im Winter liegt in den Alpen viel Schnee."],
    ["schneien", "to snow", "neiger", "Schau mal, es schneit!"],
    ["das Gewitter, -", "the thunderstorm", "l'orage", "Am Abend gibt es ein Gewitter."],
    ["die Wolke, -n", "the cloud", "le nuage", "Am Himmel ist keine Wolke."],
    ["bewölkt", "cloudy", "nuageux", "Heute ist es bewölkt, aber trocken."],
    ["sonnig", "sunny", "ensoleillé", "Morgen wird es sonnig und warm."],
    ["windig", "windy", "venteux (il y a du vent)", "An der Nordsee ist es oft windig."],
    ["der Nebel", "the fog", "le brouillard", "Am Morgen gab es dichten Nebel."],
    ["schwül", "humid and close", "lourd (temps)", "Im August ist es oft schwül."],
    ["die Hitze", "the heat", "la chaleur", "Bei dieser Hitze bleibe ich zu Hause."],
    ["die Kälte", "the cold", "le froid", "Ich mag die Kälte im Winter nicht."],
    ["… Grad", "… degrees", "… degrés", "Morgen werden es fünfundzwanzig Grad."],
    ["die Temperatur, -en", "the temperature", "la température", "Die Temperaturen liegen bei zehn Grad."]
  ] },
  { id: "umweltDE", icon: "leaf", title: "The environment", title_fr: "L'environnement", level: "A2", words: [
    ["die Umwelt", "the environment", "l'environnement", "Was tust du für die Umwelt?"],
    ["die Natur", "nature", "la nature", "Am Wochenende sind wir gern in der Natur."],
    ["der Müll", "rubbish, waste", "les déchets, les ordures", "Bring bitte den Müll runter!"],
    ["den Müll trennen", "to sort the rubbish", "trier les déchets", "In Deutschland trennt man den Müll."],
    ["die Mülltonne, -n", "the (rubbish) bin", "la poubelle", "Die Mülltonnen stehen im Hof."],
    ["der Biomüll", "food and garden waste", "les déchets organiques", "Kaffeefilter kommen in den Biomüll."],
    ["das Altpapier", "waste paper", "les vieux papiers", "Die Zeitungen kommen ins Altpapier."],
    ["das Altglas", "used glass", "le verre usagé", "Das Altglas bringe ich zum Container."],
    ["die Verpackung, -en", "the packaging", "l'emballage", "So viel Verpackung für so ein kleines Geschenk!"],
    ["das Pfand", "the deposit (on a bottle)", "la consigne", "Auf dieser Flasche sind 25 Cent Pfand."],
    ["die Pfandflasche, -n", "the returnable bottle", "la bouteille consignée", "Ich bringe die Pfandflaschen in den Supermarkt."],
    ["wegwerfen", "to throw away", "jeter", "Wirf die Flasche nicht weg, sie hat Pfand!"],
    ["recyceln", "to recycle", "recycler", "Papier kann man gut recyceln."],
    ["Energie sparen", "to save energy", "économiser l'énergie", "Mit LED-Lampen kann man Energie sparen."],
    ["das Klima", "the climate", "le climat", "Das Klima verändert sich."],
    ["schützen", "to protect", "protéger", "Wir müssen die Natur schützen."]
  ] },
  { id: "zukunftDE", icon: "sprout", title: "The future", title_fr: "L'avenir", level: "A2", words: [
    ["die Zukunft", "the future", "l'avenir, le futur", "Wie stellst du dir die Zukunft vor?"],
    ["sich vorstellen", "to imagine", "s'imaginer", "Ich kann mir ein Leben ohne Handy nicht vorstellen."],
    ["wahrscheinlich", "probably", "probablement", "Morgen regnet es wahrscheinlich."],
    ["bestimmt", "definitely, surely", "sûrement, certainement", "Das wird bestimmt ein schöner Tag."],
    ["hoffen", "to hope", "espérer", "Ich hoffe, dass wir uns bald wiedersehen."],
    ["der Traum, ¨-e", "the dream", "le rêve", "Mein Traum ist ein Haus am Meer."],
    ["träumen von", "to dream of", "rêver de", "Sie träumt von einer Reise nach Island."],
    ["das Ziel, -e", "the goal, the aim", "le but, l'objectif", "Mein Ziel ist das Zertifikat B1."],
    ["sich verändern", "to change", "changer, évoluer", "Die Stadt hat sich sehr verändert."],
    ["in zehn Jahren", "in ten years' time", "dans dix ans", "In zehn Jahren werde ich vielleicht in Wien wohnen."],
    ["eines Tages", "one day", "un jour", "Eines Tages werde ich Deutsch fließend sprechen."],
    ["die Technik", "technology; technique", "la technique, la technologie", "Die Technik verändert unser Leben."],
    ["das Elektroauto, -s", "the electric car", "la voiture électrique", "Unser nächstes Auto wird ein Elektroauto."],
    ["versprechen", "to promise", "promettre", "Ich verspreche dir, ich werde pünktlich sein."]
  ] });

  W.LESSONS.push(
  {
    id: 40, level: "A2", icon: "target",
    title: "Ich werde… The future with werden", title_fr: "Ich werde… Le futur avec werden",
    subtitle: "Predictions, promises and plans: werden + infinitive. And a trap: ich will doesn't mean “I will”.", subtitle_fr: "Prévisions, promesses et projets : werden + infinitif. Et un piège pour les anglophones : ich will veut dire « je veux ».",
    body: `
<h2>The present for the future</h2>
<p>Very often, German simply uses the present with a time word: <s-de>Morgen fahre ich nach Köln.</s-de> (Tomorrow I'm going to Cologne.) · <s-de>Nächste Woche haben wir frei.</s-de></p>
<h2>werden + infinitive</h2>
<p>For predictions, promises and firm intentions, use <s-de>werden</s-de> in second position and the infinitive at the end: <s-de>Morgen wird es regnen.</s-de> · <s-de>Ich werde dich anrufen, versprochen!</s-de> · <s-de>In zwanzig Jahren werden viele Menschen Elektroautos fahren.</s-de></p>
<table>
<tr><th>Person</th><th>werden</th></tr>
<tr><td><s-de>ich</s-de></td><td><s-de>werde</s-de></td></tr>
<tr><td><s-de>du</s-de></td><td><s-de>wirst</s-de></td></tr>
<tr><td><s-de>er / sie / es</s-de></td><td><s-de>wird</s-de></td></tr>
<tr><td><s-de>wir</s-de></td><td><s-de>werden</s-de></td></tr>
<tr><td><s-de>ihr</s-de></td><td><s-de>werdet</s-de></td></tr>
<tr><td><s-de>sie / Sie</s-de></td><td><s-de>werden</s-de></td></tr>
</table>
<p>With <s-de>wahrscheinlich</s-de> (probably), <s-de>bestimmt</s-de> (surely) or <s-de>vielleicht</s-de> (maybe): <s-de>Es wird bestimmt ein schöner Abend.</s-de></p>
<h2>A trap: will ≠ will</h2>
<p>German <s-de>ich will</s-de> means "I want to", not "I will": <s-de>Ich will nach Berlin fahren.</s-de> (I want to go to Berlin.) · <s-de>Ich werde nach Berlin fahren.</s-de> (I will go to Berlin.)</p>
<div class="tip"><s-de>werden</s-de> alone means "to become": <s-de>Sie wird Ärztin.</s-de> (She's going to be a doctor.) · <s-de>Es wird kalt.</s-de> (It's getting cold.) With an infinitive at the end, it's the future.</div>
`,
    body_fr: `
<h2>Le présent pour le futur</h2>
<p>Très souvent, l'allemand emploie simplement le présent avec un mot de temps, comme le français : <s-de>Morgen fahre ich nach Köln.</s-de> (Demain, je pars à Cologne.) · <s-de>Nächste Woche haben wir frei.</s-de> (La semaine prochaine, on est en congé.)</p>
<h2>werden + infinitif</h2>
<p>Pour les prévisions, les promesses et les intentions fermes, on emploie <s-de>werden</s-de> en deuxième position et l'infinitif à la fin : <s-de>Morgen wird es regnen.</s-de> (Demain, il pleuvra.) · <s-de>Ich werde dich anrufen, versprochen!</s-de> (Je t'appellerai, promis !) · <s-de>In zwanzig Jahren werden viele Menschen Elektroautos fahren.</s-de></p>
<table>
<tr><th>Personne</th><th>werden</th></tr>
<tr><td><s-de>ich</s-de></td><td><s-de>werde</s-de></td></tr>
<tr><td><s-de>du</s-de></td><td><s-de>wirst</s-de></td></tr>
<tr><td><s-de>er / sie / es</s-de></td><td><s-de>wird</s-de></td></tr>
<tr><td><s-de>wir</s-de></td><td><s-de>werden</s-de></td></tr>
<tr><td><s-de>ihr</s-de></td><td><s-de>werdet</s-de></td></tr>
<tr><td><s-de>sie / Sie</s-de></td><td><s-de>werden</s-de></td></tr>
</table>
<p>Avec <s-de>wahrscheinlich</s-de> (probablement), <s-de>bestimmt</s-de> (sûrement) ou <s-de>vielleicht</s-de> (peut-être) : <s-de>Es wird bestimmt ein schöner Abend.</s-de> (Ce sera sûrement une belle soirée.)</p>
<h2>Un piège : will</h2>
<p><s-de>Ich will</s-de> veut dire « je veux », pas « je vais » : <s-de>Ich will nach Berlin fahren.</s-de> (Je veux aller à Berlin.) · <s-de>Ich werde nach Berlin fahren.</s-de> (J'irai à Berlin.) Le piège est surtout pour les anglophones, chez qui « will » marque le futur.</p>
<div class="tip"><s-de>werden</s-de> seul veut dire « devenir » : <s-de>Sie wird Ärztin.</s-de> (Elle va devenir médecin.) · <s-de>Es wird kalt.</s-de> (Il commence à faire froid.) Avec un infinitif à la fin, c'est le futur.</div>
`,
    examples: [
      ["Morgen wird es regnen.", "It will rain tomorrow.", "Demain, il pleuvra."],
      ["Ich werde dich heute Abend anrufen, versprochen!", "I'll call you tonight, I promise!", "Je t'appellerai ce soir, promis !"],
      ["Wirst du im Sommer nach Österreich fahren?", "Will you go to Austria in the summer?", "Tu iras en Autriche cet été ?"],
      ["In zwanzig Jahren werden viele Menschen Elektroautos fahren.", "In twenty years, many people will drive electric cars.", "Dans vingt ans, beaucoup de gens rouleront en voiture électrique."],
      ["Es wird bestimmt ein schöner Abend.", "It's sure to be a lovely evening.", "Ce sera sûrement une belle soirée."],
      ["Ich will nach Berlin fahren, aber ich habe kein Geld.", "I want to go to Berlin, but I have no money.", "Je veux aller à Berlin, mais je n'ai pas d'argent."],
      ["Wir werden wahrscheinlich erst spät ankommen.", "We'll probably arrive late.", "Nous arriverons probablement tard."]
    ],
    quiz: [
      { q: "“It will rain tomorrow.”", q_fr: "« Il pleuvra demain. »", o: ["Morgen wird es regnen.", "Morgen will es regnen.", "Morgen wird es regnet."], a: 0, ex: "werden in second position, the infinitive at the end.", ex_fr: "werden en deuxième position, l'infinitif à la fin." },
      { q: "“Du ___ das schaffen!” (werden)", q_fr: "« Du ___ das schaffen! » (werden)", o: ["wirst", "wird", "werdest"], a: 0, ex: "du wirst.", ex_fr: "du wirst." },
      { q: "“Ich will nach Berlin fahren” means:", q_fr: "« Ich will nach Berlin fahren » veut dire :", o: ["I want to go to Berlin.", "I will go to Berlin.", "I visited Berlin."], o_fr: ["Je veux aller à Berlin.", "J'irai à Berlin.", "J'ai visité Berlin."], a: 0, ex: "wollen = to want; the future is werden.", ex_fr: "wollen = vouloir ; le futur, c'est werden." },
      { q: "“Sie wird Lehrerin.” Here, werden means:", q_fr: "« Sie wird Lehrerin. » Ici, werden veut dire :", o: ["to become", "will (future)", "to want"], o_fr: ["devenir", "le futur", "vouloir"], a: 0, ex: "No infinitive at the end: werden = to become.", ex_fr: "Pas d'infinitif à la fin : werden = devenir." },
      { q: "“We'll probably come later.”", q_fr: "« Nous viendrons probablement plus tard. »", o: ["Wir werden wahrscheinlich später kommen.", "Wir werden wahrscheinlich kommen später.", "Wir wahrscheinlich werden später kommen."], a: 0, ex: "werden second, kommen at the end.", ex_fr: "werden en deuxième position, kommen à la fin." }
    ]
  },
  {
    id: 41, level: "A2", icon: "book-open",
    title: "Der Mann, der… Relative clauses", title_fr: "Der Mann, der… Les propositions relatives",
    subtitle: "Describe a person or a thing with der, die, das: like “who”, “which” and “that”, with the verb at the end.", subtitle_fr: "Décrire une personne ou une chose avec der, die, das : comme « qui » et « que », avec le verbe à la fin.",
    body: `
<h2>who, which, that: der, die, das</h2>
<p>A relative clause describes a noun: <s-de>Das ist der Mann, der neben mir wohnt.</s-de> (That's the man who lives next to me.) The relative pronoun looks like the article: <s-de>der, die, das</s-de>, plural <s-de>die</s-de>. It agrees with the noun, and the verb goes to the <b>end</b>.</p>
<p><s-de>die Frau, die dort arbeitet</s-de> · <s-de>das Haus, das am Fluss steht</s-de> · <s-de>die Leute, die hier wohnen</s-de></p>
<h2>Nominative or accusative?</h2>
<p>It depends on its role in the relative clause. Subject → nominative: <s-de>der Mann, der dort steht</s-de> (the man who is standing there). Object → accusative: <s-de>der Mann, den ich kenne</s-de> (the man I know). Only the masculine changes: <s-de>der</s-de> → <s-de>den</s-de>.</p>
<table>
<tr><th></th><th>subject</th><th>object</th></tr>
<tr><td>masc.</td><td><s-de>der</s-de></td><td><s-de>den</s-de></td></tr>
<tr><td>fem.</td><td><s-de>die</s-de></td><td><s-de>die</s-de></td></tr>
<tr><td>neut.</td><td><s-de>das</s-de></td><td><s-de>das</s-de></td></tr>
<tr><td>plural</td><td><s-de>die</s-de></td><td><s-de>die</s-de></td></tr>
</table>
<p><s-de>Das ist der Film, den ich gestern gesehen habe.</s-de> · <s-de>Wo ist die Jacke, die ich gekauft habe?</s-de></p>
<div class="tip">English can drop the pronoun ("the book I'm reading"); German never can: <s-de>das Buch, das ich lese</s-de>. And there's always a comma before the relative clause, and after it if the sentence goes on: <s-de>Der Kuchen, den du gebacken hast, ist super.</s-de></div>
`,
    body_fr: `
<h2>qui et que : der, die, das</h2>
<p>Une relative décrit un nom : <s-de>Das ist der Mann, der neben mir wohnt.</s-de> (C'est l'homme qui habite à côté de chez moi.) Le pronom relatif ressemble à l'article : <s-de>der, die, das</s-de>, pluriel <s-de>die</s-de>. Il s'accorde avec le nom, et le verbe part à la <b>fin</b>.</p>
<p><s-de>die Frau, die dort arbeitet</s-de> · <s-de>das Haus, das am Fluss steht</s-de> · <s-de>die Leute, die hier wohnen</s-de></p>
<h2>Nominatif ou accusatif ?</h2>
<p>Tout dépend de son rôle dans la relative. Sujet (comme « qui ») → nominatif : <s-de>der Mann, der dort steht</s-de> (l'homme qui est là). Complément d'objet (comme « que ») → accusatif : <s-de>der Mann, den ich kenne</s-de> (l'homme que je connais). Seul le masculin change : <s-de>der</s-de> → <s-de>den</s-de>.</p>
<table>
<tr><th></th><th>sujet (qui)</th><th>objet (que)</th></tr>
<tr><td>masc.</td><td><s-de>der</s-de></td><td><s-de>den</s-de></td></tr>
<tr><td>fém.</td><td><s-de>die</s-de></td><td><s-de>die</s-de></td></tr>
<tr><td>neutre</td><td><s-de>das</s-de></td><td><s-de>das</s-de></td></tr>
<tr><td>pluriel</td><td><s-de>die</s-de></td><td><s-de>die</s-de></td></tr>
</table>
<p><s-de>Das ist der Film, den ich gestern gesehen habe.</s-de> (C'est le film que j'ai vu hier.) · <s-de>Wo ist die Jacke, die ich gekauft habe?</s-de></p>
<div class="tip">Attention : le genre est celui du mot allemand, pas du mot français. <s-de>der Tisch, den ich gekauft habe</s-de> (la table que j'ai achetée : Tisch est masculin). Et il y a toujours une virgule avant la relative, et après si la phrase continue : <s-de>Der Kuchen, den du gebacken hast, ist super.</s-de></div>
`,
    examples: [
      ["Das ist der Mann, der neben mir wohnt.", "That's the man who lives next to me.", "C'est l'homme qui habite à côté de chez moi."],
      ["Wie heißt die Frau, die dort arbeitet?", "What's the name of the woman who works there?", "Comment s'appelle la femme qui travaille là-bas ?"],
      ["Das ist der Film, den ich gestern gesehen habe.", "That's the film I saw yesterday.", "C'est le film que j'ai vu hier."],
      ["Wo ist das Buch, das du mir geschenkt hast?", "Where's the book you gave me?", "Où est le livre que tu m'as offert ?"],
      ["Die Leute, die hier wohnen, sind sehr nett.", "The people who live here are very nice.", "Les gens qui habitent ici sont très gentils."],
      ["Der Kuchen, den du gebacken hast, ist super.", "The cake you baked is great.", "Le gâteau que tu as fait est génial."],
      ["Ich suche eine Wohnung, die nicht so teuer ist.", "I'm looking for a flat that isn't so expensive.", "Je cherche un appartement qui ne soit pas trop cher."]
    ],
    quiz: [
      { q: "“Das ist der Mann, ___ neben mir wohnt.”", q_fr: "« Das ist der Mann, ___ neben mir wohnt. »", o: ["der", "den", "das"], a: 0, ex: "Subject of wohnt: nominative, der.", ex_fr: "Sujet de wohnt : nominatif, der." },
      { q: "“Das ist der Film, ___ ich gesehen habe.”", q_fr: "« Das ist der Film, ___ ich gesehen habe. »", o: ["den", "der", "dem"], a: 0, ex: "Object of gesehen: accusative, den.", ex_fr: "Complément de gesehen : accusatif, den." },
      { q: "Which sentence is correct?", q_fr: "Quelle phrase est correcte ?", o: ["Die Frau, die dort arbeitet, ist nett.", "Die Frau, die arbeitet dort, ist nett.", "Die Frau die dort arbeitet ist nett."], a: 0, ex: "Verb at the end, commas around the relative clause.", ex_fr: "Verbe à la fin, virgules autour de la relative." },
      { q: "“The book I'm reading”:", q_fr: "« Le livre que je lis » :", o: ["das Buch, das ich lese", "das Buch ich lese", "das Buch, das lese ich"], a: 0, ex: "German never drops the relative pronoun.", ex_fr: "L'allemand ne supprime jamais le pronom relatif." },
      { q: "“Die Kinder, ___ hier spielen, sind laut.”", q_fr: "« Die Kinder, ___ hier spielen, sind laut. »", o: ["die", "der", "das"], a: 0, ex: "Plural: die.", ex_fr: "Pluriel : die." }
    ]
  },
  {
    id: 42, level: "A2", kind: "functional", icon: "cloud-sun",
    title: "Everyday German: the weather and the environment", title_fr: "L'allemand de tous les jours : la météo et l'environnement",
    subtitle: "Talk about the weather, sort your rubbish like a German and get your bottle deposit back.", subtitle_fr: "Parler de la météo, trier tes déchets comme en Allemagne et récupérer la consigne de tes bouteilles.",
    body: `
<h2>Talking about the weather</h2>
<p><s-de>Wie ist das Wetter?</s-de> · <s-de>Es ist sonnig / bewölkt / windig / neblig.</s-de> · <s-de>Es regnet. Es schneit.</s-de> · <s-de>Es sind fünfundzwanzig Grad.</s-de> (in Celsius) · <s-de>Wie wird das Wetter morgen? — Morgen soll es regnen.</s-de> Here <s-de>soll</s-de> means "according to the forecast". Colloquial: <s-de>Was für ein Sauwetter!</s-de> (What awful weather!)</p>
<h2>Sorting rubbish</h2>
<p>In Germany, people sort their rubbish into several bins. The colours depend on the town, but often: paper in the blue bin, packaging (plastic, cans) in the <s-de>Gelbe Tonne</s-de> or the <s-de>Gelber Sack</s-de> (yellow), food waste in the <s-de>Biotonne</s-de> (often brown), and everything else in the <s-de>Restmüll</s-de>. Glass goes to bottle banks, sorted by colour: white, green and brown.</p>
<h2>Pfand: bottles are money</h2>
<p>Many drinks bottles and cans carry a deposit, the <s-de>Pfand</s-de>. Germany introduced it for single-use bottles and cans in 2003; today it is 25 cents. You get it back from a machine in the supermarket: <s-de>Ich bringe die Pfandflaschen zurück.</s-de> So never throw them away!</p>
<div class="tip">The question you'll ask most often: <s-de>Wohin kommt das?</s-de> (Where does this go?) — <s-de>Das kommt in den Gelben Sack.</s-de> · <s-de>Das kommt ins Altpapier.</s-de></div>
`,
    body_fr: `
<h2>Parler de la météo</h2>
<p><s-de>Wie ist das Wetter?</s-de> (Quel temps fait-il ?) · <s-de>Es ist sonnig / bewölkt / windig / neblig.</s-de> · <s-de>Es regnet. Es schneit.</s-de> · <s-de>Es sind fünfundzwanzig Grad.</s-de> (Il fait vingt-cinq degrés.) · <s-de>Wie wird das Wetter morgen? — Morgen soll es regnen.</s-de> Ici, <s-de>soll</s-de> veut dire « d'après la météo ». Familier : <s-de>Was für ein Sauwetter!</s-de> (Quel sale temps !)</p>
<h2>Trier ses déchets</h2>
<p>En Allemagne, on trie ses déchets dans plusieurs poubelles. Les couleurs dépendent des communes, mais souvent : le papier dans la poubelle bleue, les emballages (plastique, canettes) dans la <s-de>Gelbe Tonne</s-de> ou le <s-de>Gelber Sack</s-de> (jaune), les restes alimentaires dans la <s-de>Biotonne</s-de> (souvent marron), et tout le reste dans le <s-de>Restmüll</s-de>. Le verre va dans des conteneurs, trié par couleur : blanc, vert et brun.</p>
<h2>Pfand : les bouteilles, c'est de l'argent</h2>
<p>Beaucoup de bouteilles et de canettes sont consignées : c'est le <s-de>Pfand</s-de>. L'Allemagne l'a introduit pour les bouteilles et canettes à usage unique en 2003 ; aujourd'hui, il est de 25 centimes. On le récupère grâce à une machine au supermarché : <s-de>Ich bringe die Pfandflaschen zurück.</s-de> Ne les jette donc jamais !</p>
<div class="tip">La question que tu poseras le plus souvent : <s-de>Wohin kommt das?</s-de> (Ça va où ?) — <s-de>Das kommt in den Gelben Sack.</s-de> · <s-de>Das kommt ins Altpapier.</s-de></div>
`,
    examples: [
      ["Wie wird das Wetter morgen? — Morgen soll es regnen.", "What will the weather be like tomorrow? — It's supposed to rain.", "Quel temps fera-t-il demain ? — Il paraît qu'il va pleuvoir."],
      ["Heute ist es bewölkt, aber es sind zwanzig Grad.", "It's cloudy today, but it's twenty degrees.", "Aujourd'hui, c'est nuageux, mais il fait vingt degrés."],
      ["Was für ein Sauwetter! Es regnet schon den ganzen Tag.", "What awful weather! It's been raining all day.", "Quel sale temps ! Il pleut depuis ce matin."],
      ["Wohin kommt der Joghurtbecher? — In den Gelben Sack.", "Where does the yoghurt pot go? — In the yellow bag.", "Le pot de yaourt va où ? — Dans le sac jaune."],
      ["Die Zeitungen kommen ins Altpapier.", "The newspapers go in the waste paper.", "Les journaux vont dans les vieux papiers."],
      ["Auf dieser Dose sind fünfundzwanzig Cent Pfand.", "There's a 25-cent deposit on this can.", "Cette canette est consignée vingt-cinq centimes."],
      ["Ich bringe die Pfandflaschen in den Supermarkt zurück.", "I'm taking the returnable bottles back to the supermarket.", "Je rapporte les bouteilles consignées au supermarché."]
    ],
    quiz: [
      { q: "“Morgen soll es regnen.” This means:", q_fr: "« Morgen soll es regnen. » Cela veut dire :", o: ["According to the forecast, it will rain tomorrow.", "It must rain tomorrow.", "It rained yesterday."], o_fr: ["D'après la météo, il pleuvra demain.", "Il doit absolument pleuvoir demain.", "Il a plu hier."], a: 0, ex: "sollen = they say, according to the forecast.", ex_fr: "sollen = d'après ce qu'on dit, d'après la météo." },
      { q: "Where do plastic packaging and cans often go?", q_fr: "Où vont souvent les emballages en plastique et les canettes ?", o: ["In the Gelbe Tonne or the Gelber Sack", "In the Biotonne", "In the Altpapier"], o_fr: ["Dans la Gelbe Tonne ou le Gelber Sack", "Dans la Biotonne", "Dans l'Altpapier"], a: 0, ex: "Packaging: yellow.", ex_fr: "Les emballages : jaune." },
      { q: "The deposit on single-use bottles and cans is:", q_fr: "La consigne sur les bouteilles et canettes à usage unique est de :", o: ["25 cents", "5 cents", "1 euro"], o_fr: ["25 centimes", "5 centimes", "1 euro"], a: 0, ex: "25 cents, since the system started in 2003.", ex_fr: "25 centimes, depuis le système lancé en 2003." },
      { q: "“It's 30 degrees.”", q_fr: "« Il fait 30 degrés. »", o: ["Es sind dreißig Grad.", "Es macht dreißig Grad.", "Es gibt dreißig Grade."], a: 0, ex: "Es sind … Grad (in the south and in Austria, also: es hat … Grad).", ex_fr: "Es sind … Grad (dans le sud et en Autriche, aussi : es hat … Grad)." },
      { q: "“Where does this go?” (rubbish)", q_fr: "« Ça va où ? » (déchets)", o: ["Wohin kommt das?", "Wo kommt das her?", "Wann kommt das?"], a: 0, ex: "Wohin? = where to.", ex_fr: "Wohin? = où (direction)." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    40: {
      gap: [["Morgen ___ es regnen. (werden)", "wird"], ["___ du mich anrufen? (werden)", "Wirst"], ["Wir werden im Sommer nach Wien ___. (fahren)", "fahren"], ["Ich ___ in Wien studieren, das ist mein Traum. (wollen)", "will"]],
      fix: [["Ich werde dich morgen anrufen werden.", "Ich werde dich morgen anrufen.", "werden once, in second position; the infinitive at the end.", "werden une seule fois, en deuxième position ; l'infinitif à la fin."], ["Morgen will es schneien.", "Morgen wird es schneien.", "A prediction: werden. wollen means to want.", "Une prévision : werden. wollen veut dire vouloir."]],
      task: ["Make four predictions about your life in ten years with werden, wahrscheinlich and bestimmt.", "Fais quatre prévisions sur ta vie dans dix ans avec werden, wahrscheinlich et bestimmt.", "In zehn Jahren werde ich wahrscheinlich in einer anderen Stadt wohnen. Ich werde bestimmt fließend Deutsch sprechen. Vielleicht werde ich einen Hund haben. Und ich werde jeden Sommer ans Meer fahren."]
    },
    41: {
      gap: [["Das ist der Mann, ___ neben mir wohnt.", "der"], ["Das ist der Film, ___ ich gestern gesehen habe.", "den"], ["Wo ist das Buch, ___ du gekauft hast?", "das"], ["Die Leute, ___ hier wohnen, sind nett.", "die"]],
      fix: [["Das ist die Frau, die wohnt neben mir.", "Das ist die Frau, die neben mir wohnt.", "In a relative clause, the verb goes to the end.", "Dans une relative, le verbe part à la fin."], ["Das ist der Kuchen, der ich gebacken habe.", "Das ist der Kuchen, den ich gebacken habe.", "The cake is the object: accusative, den.", "Le gâteau est le complément : accusatif, den."]],
      task: ["Describe four people or things around you with relative clauses (der / die / das, den).", "Décris quatre personnes ou choses autour de toi avec des relatives (der / die / das, den).", "Mein Nachbar ist ein Mann, der jeden Morgen joggt. Ich habe eine Lampe, die mein Opa gebaut hat. Das Buch, das ich gerade lese, ist spannend. Und der Kaffee, den ich trinke, kommt aus Kolumbien."]
    },
    42: {
      gap: [["Wie ___ das Wetter morgen?", "wird"], ["Es ___ fünfundzwanzig Grad.", "sind"], ["Die Zeitungen kommen ins ___.", "Altpapier", "waste paper", "vieux papiers"], ["Auf dieser Flasche sind 25 Cent ___.", "Pfand", "deposit", "consigne"]],
      fix: [["Es macht heute dreißig Grad.", "Es sind heute dreißig Grad.|Es hat heute dreißig Grad.", "Temperatures: es sind … Grad (in the south, also es hat).", "La température : es sind … Grad (dans le sud, aussi es hat)."], ["Wo kommt die Dose? In den Gelben Sack.", "Wohin kommt die Dose? In den Gelben Sack.", "A direction: wohin.", "Une direction : wohin."]],
      task: ["Explain to a new flatmate how to sort the rubbish in your flat: four sentences with kommt in / kommt ins.", "Explique à une personne qui vient d'emménager comment trier les déchets chez vous : quatre phrases avec kommt in / kommt ins.", "Papier kommt in die blaue Tonne. Plastik und Dosen kommen in den Gelben Sack. Essensreste kommen in die Biotonne im Hof. Und die Pfandflaschen bringen wir in den Supermarkt zurück."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "muelltrennung", lesson: 42, level: "A2", icon: "leaf", partner: "Ole", role: "your new flatmate", role_fr: "ton nouveau colocataire",
    title: "Sorting the rubbish in the flat-share", title_fr: "Trier les déchets dans la colocation",
    setting: "You've just moved into a flat-share. Ole shows you how the rubbish is sorted.", setting_fr: "Tu viens d'emménager dans une colocation. Ole te montre comment on trie les déchets.",
    turns: [
      { p: "Willkommen in der WG! Hast du noch Fragen?", en: "Welcome to the flat-share! Do you have any questions?", fr: "Bienvenue dans la coloc ! Tu as des questions ?" },
      { y: ["Ja! Wohin kommt die Verpackung, die ich hier habe?", "Ja! Wohin kommt die Verpackung, die ich habe hier?", "Ja! Wohin kommt die Verpackung, der ich hier habe?"], en: "Yes! Where does the packaging I've got here go?", fr: "Oui ! Où va l'emballage que j'ai là ?", why: "die Verpackung → die; the verb at the end of the relative clause.", why_fr: "die Verpackung → die ; le verbe à la fin de la relative." },
      { p: "Plastik und Dosen kommen in den Gelben Sack. Der hängt in der Küche.", en: "Plastic and cans go in the yellow bag. It's hanging in the kitchen.", fr: "Le plastique et les canettes vont dans le sac jaune. Il est accroché dans la cuisine." },
      { y: ["Und was mache ich mit den Flaschen, die leer sind?", "Und was mache ich mit den Flaschen, die sind leer?", "Und was mache ich mit den Flaschen, das leer sind?"], en: "And what do I do with the bottles that are empty?", fr: "Et je fais quoi des bouteilles qui sont vides ?", why: "Plural: die; the verb at the end.", why_fr: "Pluriel : die ; le verbe à la fin." },
      { p: "Die meisten haben Pfand. Die bringen wir in den Supermarkt zurück.", en: "Most of them have a deposit. We take them back to the supermarket.", fr: "La plupart sont consignées. On les rapporte au supermarché." },
      { y: ["Gut, dann werde ich sie morgen zurückbringen.", "Gut, dann ich werde sie morgen zurückbringen.", "Gut, dann werde ich sie morgen zurückbringe."], en: "Good, then I'll take them back tomorrow.", fr: "D'accord, alors je les rapporterai demain.", why: "After dann, the verb comes second: werde ich; infinitive at the end.", why_fr: "Après dann, le verbe en deuxième position : werde ich ; infinitif à la fin." },
      { p: "Super. Und Essensreste kommen in die Biotonne. Die steht im Hof.", en: "Great. And food leftovers go in the organic bin. It's in the courtyard.", fr: "Super. Et les restes alimentaires vont dans la poubelle bio. Elle est dans la cour." },
      { y: ["Okay. Gibt es auch eine Tonne für Papier?", "Okay. Gibt es auch einen Tonne für Papier?", "Okay. Gibt es auch eine Tonne für Papieren?"], en: "OK. Is there also a bin for paper?", fr: "D'accord. Il y a aussi une poubelle pour le papier ?", why: "die Tonne → eine Tonne (accusative feminine).", why_fr: "die Tonne → eine Tonne (accusatif féminin)." },
      { p: "Ja, die blaue. Am Anfang ist das kompliziert, ich weiß.", en: "Yes, the blue one. It's complicated at first, I know.", fr: "Oui, la bleue. Au début, c'est compliqué, je sais." },
      { y: ["Kein Problem. Ich werde mir alles aufschreiben!", "Kein Problem. Ich werde mir alles aufschreibe!", "Kein Problem. Ich wird mir alles aufschreiben!"], en: "No problem. I'll write it all down!", fr: "Pas de problème. Je vais tout noter !", why: "ich werde + infinitive: aufschreiben.", why_fr: "ich werde + infinitif : aufschreiben." }
    ] },
  { id: "zukunftsplaene", lesson: 40, level: "A2", icon: "target", partner: "Ida", role: "a classmate from your German course", role_fr: "une camarade de ton cours d'allemand",
    title: "Plans for the future", title_fr: "Projets d'avenir",
    setting: "It's the last day of your German course. You talk with Ida about your plans.", setting_fr: "C'est le dernier jour de ton cours d'allemand. Tu parles de tes projets avec Ida.",
    turns: [
      { p: "Heute ist unser letzter Kurstag! Was wirst du im Sommer machen?", en: "Today's our last day of the course! What will you do in the summer?", fr: "C'est notre dernier jour de cours ! Qu'est-ce que tu feras cet été ?" },
      { y: ["Ich werde nach Hamburg fahren und dort Deutsch sprechen.", "Ich wird nach Hamburg fahren und dort Deutsch sprechen.", "Ich werde fahren nach Hamburg und dort Deutsch sprechen."], en: "I'll go to Hamburg and speak German there.", fr: "J'irai à Hambourg et j'y parlerai allemand.", why: "ich werde; the infinitives at the end.", why_fr: "ich werde ; les infinitifs à la fin." },
      { p: "Toll! Und wirst du weiter Deutsch lernen?", en: "Great! And will you keep learning German?", fr: "Génial ! Et tu vas continuer l'allemand ?" },
      { y: ["Bestimmt! Im Herbst will ich einen B1-Kurs machen.", "Bestimmt! Im Herbst ich will einen B1-Kurs machen.", "Bestimmt! Im Herbst will ich einen B1-Kurs zu machen."], en: "Definitely! In the autumn I want to do a B1 course.", fr: "Sûrement ! À l'automne, je veux suivre un cours de B1.", why: "will = want; verb second after Im Herbst; no zu after a modal.", why_fr: "will = vouloir ; verbe en deuxième position après Im Herbst ; pas de zu après un verbe de modalité." },
      { p: "Ich auch. Ich brauche B1 für die Stelle, die ich im Januar anfange.", en: "Me too. I need B1 for the job I'm starting in January.", fr: "Moi aussi. J'ai besoin du B1 pour le poste que je commence en janvier." },
      { y: ["Wow! Ist das die Firma, die Fahrräder baut?", "Wow! Ist das die Firma, der Fahrräder baut?", "Wow! Ist das die Firma, die baut Fahrräder?"], en: "Wow! Is that the company that makes bikes?", fr: "Waouh ! C'est l'entreprise qui fabrique des vélos ?", why: "die Firma → die; the verb at the end.", why_fr: "die Firma → die ; le verbe à la fin." },
      { p: "Genau! Ich werde dort im Marketing arbeiten. Und du, was ist dein Traum?", en: "Exactly! I'll work in marketing there. And you, what's your dream?", fr: "Exactement ! J'y travaillerai dans le marketing. Et toi, c'est quoi ton rêve ?" },
      { y: ["Ich möchte eines Tages in einer Stadt leben, die nicht so groß ist.", "Ich möchte eines Tages in einer Stadt leben, die ist nicht so groß.", "Ich möchte eines Tages in einer Stadt leben, das nicht so groß ist."], en: "One day I'd like to live in a town that isn't so big.", fr: "Un jour, j'aimerais vivre dans une ville qui ne soit pas trop grande.", why: "die Stadt → die; the verb at the end.", why_fr: "die Stadt → die ; le verbe à la fin." },
      { p: "Das klingt schön. Wir bleiben in Kontakt, ja?", en: "That sounds nice. We'll stay in touch, won't we?", fr: "Ça a l'air bien. On reste en contact, d'accord ?" },
      { y: ["Natürlich! Ich werde dir aus Hamburg schreiben.", "Natürlich! Ich werde dir aus Hamburg schreibe.", "Natürlich! Ich werde dich aus Hamburg schreiben."], en: "Of course! I'll write to you from Hamburg.", fr: "Bien sûr ! Je t'écrirai de Hambourg.", why: "jemandem schreiben: dative, dir.", why_fr: "jemandem schreiben : datif, dir." }
    ] }
  );

  W.READINGS.push({
    id: "wattenmeer", level: "A2", icon: "book-open", title: "Das Wattenmeer", genre: "Article",
    intro: "Twice a day, the sea goes away: a walk on the bottom of the North Sea, in a UNESCO World Heritage Site.",
    intro_fr: "Deux fois par jour, la mer se retire : une promenade au fond de la mer du Nord, dans un site du patrimoine mondial de l'UNESCO.",
    paragraphs: [
      { de: "Das Wattenmeer liegt an der Nordsee, an den Küsten der Niederlande, Deutschlands und Dänemarks. Es ist das größte zusammenhängende Wattgebiet der Welt: eine Landschaft aus Sand und Schlick, die es so nirgends sonst gibt.", en: "The Wadden Sea lies on the North Sea, along the coasts of the Netherlands, Germany and Denmark. It is the largest continuous area of mudflats in the world: a landscape of sand and mud that exists nowhere else like this.", fr: "La mer des Wadden se trouve au bord de la mer du Nord, le long des côtes des Pays-Bas, de l'Allemagne et du Danemark. C'est la plus grande zone continue de vasières au monde : un paysage de sable et de vase qui n'existe nulle part ailleurs sous cette forme." },
      { de: "Zweimal am Tag kommt das Wasser, das ist die Flut, und geht wieder, das ist die Ebbe. Bei Ebbe kann man auf dem Meeresboden laufen: Das nennt man eine Wattwanderung. Viele Leute laufen barfuß. Aber man sollte nur mit einem Wattführer oder einer Wattführerin gehen, denn die Flut kommt schnell zurück.", en: "Twice a day the water comes in, that's high tide, and goes out again, that's low tide. At low tide you can walk on the sea floor: it's called a mudflat hike. Many people walk barefoot. But you should only go with a guide, because the tide comes back quickly.", fr: "Deux fois par jour, l'eau monte, c'est la marée haute, puis se retire, c'est la marée basse. À marée basse, on peut marcher au fond de la mer : on appelle ça une randonnée dans le Watt. Beaucoup de gens marchent pieds nus. Mais il ne faut y aller qu'avec un guide, car la mer revient vite." },
      { de: "Im Watt leben viele Tiere: Würmer, Muscheln, Krebse und auch Seehunde, die man oft auf den Sandbänken sieht. Millionen von Vögeln, die im Herbst in den Süden fliegen, machen hier eine Pause und fressen sich satt.", en: "Many animals live in the mudflats: worms, mussels, crabs and also seals, which you can often see on the sandbanks. Millions of birds that fly south in the autumn stop here and eat their fill.", fr: "Dans le Watt vivent beaucoup d'animaux : des vers, des moules, des crabes et aussi des phoques, qu'on voit souvent sur les bancs de sable. Des millions d'oiseaux qui partent vers le sud à l'automne font une pause ici et se nourrissent." },
      { de: "Seit 2009 gehört das Wattenmeer zum Weltnaturerbe der UNESCO. In Deutschland gibt es drei Nationalparks im Wattenmeer: in Schleswig-Holstein, in Niedersachsen und in Hamburg. Sie schützen die Natur, und so werden auch unsere Enkelkinder das Watt noch sehen.", en: "Since 2009 the Wadden Sea has been a UNESCO World Natural Heritage Site. In Germany there are three national parks in the Wadden Sea: in Schleswig-Holstein, in Lower Saxony and in Hamburg. They protect nature, so that our grandchildren will still see the mudflats too.", fr: "Depuis 2009, la mer des Wadden fait partie du patrimoine naturel mondial de l'UNESCO. En Allemagne, il y a trois parcs nationaux dans la mer des Wadden : au Schleswig-Holstein, en Basse-Saxe et à Hambourg. Ils protègent la nature, et ainsi nos petits-enfants verront encore le Watt." }
    ],
    glossary: { "Wattenmeer": ["Wadden Sea", "mer des Wadden"], "Küsten": ["coasts", "côtes"], "Niederlande": ["the Netherlands", "les Pays-Bas"], "Dänemarks": ["Denmark's", "du Danemark"], "zusammenhängende": ["continuous", "continue"], "Wattgebiet": ["area of mudflats", "zone de vasières"], "Landschaft": ["landscape", "paysage"], "Schlick": ["mud, silt", "vase"], "nirgends": ["nowhere", "nulle part"], "Flut": ["high tide", "marée haute"], "Ebbe": ["low tide", "marée basse"], "Meeresboden": ["sea floor", "fond de la mer"], "Wattwanderung": ["mudflat hike", "randonnée dans le Watt"], "barfuß": ["barefoot", "pieds nus"], "Wattführer": ["mudflat guide", "guide du Watt"], "Wattführerin": ["mudflat guide (a woman)", "guide du Watt"], "Würmer": ["worms", "vers"], "Muscheln": ["mussels, shells", "moules, coquillages"], "Krebse": ["crabs", "crabes"], "Seehunde": ["seals", "phoques"], "Sandbänken": ["sandbanks", "bancs de sable"], "Vögeln": ["birds", "oiseaux"], "fressen": ["eat (animals)", "mangent (animaux)"], "satt": ["full (fressen sich satt: eat their fill)", "rassasié"], "Weltnaturerbe": ["world natural heritage", "patrimoine naturel mondial"], "Nationalparks": ["national parks", "parcs nationaux"], "Niedersachsen": ["Lower Saxony", "Basse-Saxe"], "Enkelkinder": ["grandchildren", "petits-enfants"] },
    questions: [
      { q: "Wo liegt das Wattenmeer?", o: ["An der Nordsee", "An der Ostsee", "In den Alpen"], a: 0 },
      { q: "Was kann man bei Ebbe machen?", o: ["Auf dem Meeresboden laufen", "Im tiefen Wasser schwimmen", "Mit dem Schiff über das Watt fahren"], a: 0 },
      { q: "Warum sollte man mit einem Wattführer gehen?", o: ["Die Flut kommt schnell zurück.", "Der Wattführer verkauft Muscheln.", "Das Watt ist nachts geschlossen."], a: 0 },
      { q: "Welche Tiere sieht man oft auf den Sandbänken?", o: ["Seehunde", "Bären", "Pferde"], a: 0 },
      { q: "Seit wann gehört das Wattenmeer zum Weltnaturerbe?", o: ["Seit 2009", "Seit 1985", "Seit 2020"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-a2-7", unit: "a2-7", level: "A2", icon: "messages-square",
    title: "Wetter für die Wattwanderung", title_fr: "La météo pour la randonnée dans le Watt",
    context: "Henrik and Nele are on holiday on the North Sea coast. They listen to the weather forecast on the radio.", context_fr: "Henrik et Nele sont en vacances au bord de la mer du Nord. Ils écoutent la météo à la radio.",
    words: [["der Wetterbericht", "the weather forecast", "la météo"], ["das Gewitter", "the thunderstorm", "l'orage"], ["die Führung", "the guided tour", "la visite guidée"], ["gefährlich", "dangerous", "dangereux"], ["barfuß", "barefoot", "pieds nus"]],
    lines: [["Radio", "Und jetzt das Wetter für Norddeutschland. Heute ist es zuerst bewölkt, am Nachmittag kommt die Sonne. Die Temperaturen liegen bei achtzehn Grad. Morgen wird es windig, und am Abend gibt es Gewitter.", "de-DE"], ["Henrik", "Hast du das gehört? Morgen gibt es Gewitter. Dann machen wir die Wattwanderung lieber heute.", "de-DE"], ["Nele", "Heute? Aber die Führung, die wir gebucht haben, ist erst morgen um zehn.", "de-DE"], ["Henrik", "Ich rufe den Wattführer an. Vielleicht hat er heute Nachmittag noch zwei Plätze.", "de-DE"], ["Nele", "Gute Idee. Bei Gewitter ist es im Watt bestimmt gefährlich.", "de-DE"], ["Henrik", "Er sagt, wir können um drei Uhr mitkommen. Wir treffen uns am Hafen.", "de-DE"], ["Nele", "Super! Dann nehme ich die Gummistiefel mit, die ich gestern gekauft habe.", "de-DE"], ["Henrik", "Gummistiefel? Im Watt laufen viele Leute barfuß. Das wirst du lieben!", "de-DE"]],
    gist: ["Worüber sprechen Henrik und Nele?", ["Wann sie die Wattwanderung machen", "Welche Schuhe sie kaufen", "Wo sie im Urlaub wohnen"]],
    detail: [["Wie wird das Wetter morgen?", ["Windig, am Abend Gewitter", "Sonnig und heiß", "Es schneit."]], ["Wann war die gebuchte Führung?", ["Morgen um zehn", "Heute um drei", "Heute Abend"]], ["Wo treffen sie den Wattführer?", ["Am Hafen", "Am Bahnhof", "Im Hotel"]], ["Wie laufen viele Leute im Watt?", ["Barfuß", "Mit Gummistiefeln", "Mit dem Fahrrad"]]],
    decode: ["Die Temperaturen liegen bei achtzehn Grad.", "die Führung, die wir gebucht haben"],
    tip: "Weather forecasts mix the future (Morgen wird es windig) and the present (Am Abend gibt es Gewitter). Listen for the time words, heute, morgen, am Nachmittag, to know which day they mean.", tip_fr: "La météo mélange le futur (Morgen wird es windig) et le présent (Am Abend gibt es Gewitter). Repère les mots de temps, heute, morgen, am Nachmittag, pour savoir de quel jour on parle."
  }]);

  W.PROMPTS.push({ id: "de-a2-7", level: "A2", q: "Was machst du für die Umwelt? Und wie wird die Welt in zwanzig Jahren aussehen?", en: "What do you do for the environment? And what will the world look like in twenty years?", fr: "Que fais-tu pour l'environnement ? Et à quoi ressemblera le monde dans vingt ans ?", time: 90,
    phrases: ["Ich trenne…", "Ich versuche, … zu …", "In zwanzig Jahren werden…", "Ich glaube, dass…", "Ich hoffe, dass…"],
    model: "Ich trenne meinen Müll und kaufe Getränke in Pfandflaschen. Ich versuche auch, weniger Fleisch zu essen. In zwanzig Jahren werden wahrscheinlich viele Menschen Elektroautos fahren. Ich glaube, dass es mehr heiße Sommer geben wird. Aber ich hoffe, dass die Städte grüner werden: mit mehr Parks und mehr Fahrradwegen." });

  W.WRITING_GUIDE["a2-7"] = { genre: "A forum post", genre_fr: "Un message sur un forum",
    plan: [["A friendly greeting for the group.", "Une salutation amicale pour le groupe."], ["What you already do (present).", "Ce que tu fais déjà (présent)."], ["A thing or a habit, described with a relative clause.", "Une chose ou une habitude, décrite avec une relative."], ["What you will do (werden).", "Ce que tu feras (werden)."], ["A question for the others, and goodbye.", "Une question pour les autres, et au revoir."]],
    marks: [["Hallo zusammen,", "a friendly greeting for a group", "une salutation amicale pour un groupe"], ["ich trenne meinen Müll", "what you already do (present)", "ce que tu fais déjà (présent)"], ["Das Auto, das ich früher hatte,", "a relative clause, between commas", "une relative, entre virgules"], ["werde ich keine Flugreise machen", "the future with werden", "le futur avec werden"], ["Was macht ihr für die Umwelt?", "a question for the others", "une question pour les autres"], ["Viele Grüße", "a friendly ending", "une formule finale amicale"]] };

  W.COURSE.push({ id: "a2-7", level: "A2", icon: "leaf", title: "Nature and the future", title_fr: "Nature et avenir",
    intro: "In this last A2 unit, you'll talk about nature and the future: the future with werden (and the trap of ich will), relative clauses to describe people and things (der Mann, der… / den ich kenne), the weather, and how to sort your rubbish and get your bottle deposit back in Germany.",
    intro_fr: "Dans cette dernière unité du niveau A2, tu vas parler de la nature et de l'avenir : le futur avec werden (et le piège de ich will), les relatives pour décrire des personnes et des choses (der Mann, der… / den ich kenne), la météo, et comment trier tes déchets et récupérer la consigne de tes bouteilles en Allemagne.",
    can: ["Talk about the future, make predictions and promises with werden", "Describe people and things with relative clauses", "Talk about the weather and understand a forecast", "Sort rubbish and talk about the environment"],
    can_fr: ["Parler de l'avenir, faire des prévisions et des promesses avec werden", "Décrire des personnes et des choses avec des relatives", "Parler de la météo et comprendre un bulletin", "Trier ses déchets et parler de l'environnement"],
    lessons: [40, 41, 42], vocab: ["wetterDE", "umweltDE", "zukunftDE"], reading: "wattenmeer", prompt: "de-a2-7",
    writing: { task: "Your language school's forum asks: “What do you do for the environment?” Write a post (40-60 words): what you already do, what you will do in the future, and a question for the others.", task_fr: "Le forum de ton école de langues demande : « Que faites-vous pour l'environnement ? » Écris un message (40 à 60 mots) : ce que tu fais déjà, ce que tu feras à l'avenir, et une question pour les autres.", words: "40-60",
      tips: ["Hallo zusammen,", "Ich trenne… / Ich kaufe…", "…, das ich früher hatte,", "Im Sommer werde ich…", "Und ihr? Was macht ihr…?"],
      checklist: ["I greeted the group", "I said what I already do, in the present", "I used a relative clause with commas", "I used werden for the future", "I stayed between 40 and 60 words"],
      checklist_fr: ["J'ai salué le groupe", "J'ai dit ce que je fais déjà, au présent", "J'ai employé une relative avec des virgules", "J'ai employé werden pour le futur", "J'ai écrit entre 40 et 60 mots"],
      model: "Hallo zusammen,\n\nich trenne meinen Müll und fahre fast immer mit dem Fahrrad. Das Auto, das ich früher hatte, habe ich verkauft. Ich kaufe auch weniger Plastik. Im Sommer werde ich keine Flugreise machen, sondern mit dem Zug nach Italien fahren. Und ihr? Was macht ihr für die Umwelt?\n\nViele Grüße\nSascha" } });
})();
