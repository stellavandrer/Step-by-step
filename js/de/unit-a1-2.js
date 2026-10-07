/* Cours d'allemand, unité A1-2 « My family / Ma famille » : der, die, das (le genre et le pluriel des noms), haben,
   les possessifs mein, dein, sein, ihr, la négation kein, les nombres de 21 à 100, l'âge et les anniversaires.
   Explications et traductions en anglais ET en français. Personnages fictifs, prénoms allemands.
   Faits vérifiables seulement : der Mond / die Sonne (genre inverse du français), das Mädchen (neutre à cause de
   -chen), 21 = einundzwanzig (l'unité avant la dizaine), dreißig avec ß, « four and twenty blackbirds »
   (comptine anglaise). */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "familieDE", icon: "users", title: "The family", title_fr: "La famille", level: "A1", words: [
    ["die Familie, -n", "the family", "la famille", "Meine Familie wohnt in Bremen."],
    ["die Mutter, ¨", "the mother", "la mère", "Meine Mutter heißt Sabine."],
    ["der Vater, ¨", "the father", "le père", "Mein Vater ist Koch."],
    ["die Eltern (pl)", "the parents", "les parents", "Meine Eltern wohnen in Köln."],
    ["die Schwester, -n", "the sister", "la sœur", "Ich habe eine Schwester."],
    ["der Bruder, ¨", "the brother", "le frère", "Mein Bruder ist zwölf."],
    ["die Geschwister (pl)", "brothers and sisters, siblings", "les frères et sœurs", "Hast du Geschwister?"],
    ["das Kind, -er", "the child", "l'enfant", "Wir haben zwei Kinder."],
    ["die Tochter, ¨", "the daughter", "la fille (de quelqu'un)", "Ihre Tochter heißt Mia."],
    ["der Sohn, ¨-e", "the son", "le fils", "Sein Sohn wohnt in Wien."],
    ["die Oma, -s", "grandma", "la mamie, la grand-mère", "Meine Oma ist achtzig."],
    ["der Opa, -s", "grandpa", "le papi, le grand-père", "Mein Opa spielt gern Karten."],
    ["die Großeltern (pl)", "the grandparents", "les grands-parents", "Meine Großeltern wohnen in Bayern."],
    ["die Tante, -n", "the aunt", "la tante", "Meine Tante ist Ärztin."],
    ["der Onkel, -", "the uncle", "l'oncle", "Mein Onkel wohnt in Kanada."],
    ["verheiratet", "married", "marié", "Meine Schwester ist verheiratet."],
    ["ledig", "single (not married)", "célibataire", "Mein Bruder ist ledig."],
    ["geschieden", "divorced", "divorcé", "Meine Eltern sind geschieden."],
    ["der Hund, -e", "the dog", "le chien", "Wir haben einen Hund."],
    ["die Katze, -n", "the cat", "le chat", "Die Katze heißt Mimi."]
  ] },
  { id: "zahlen100DE", icon: "calculator", title: "Numbers from 21 to 100", title_fr: "Les nombres de 21 à 100", level: "A1", words: [
    ["einundzwanzig", "twenty-one", "vingt et un", "Er ist einundzwanzig Jahre alt."],
    ["zweiundzwanzig", "twenty-two", "vingt-deux", "Der Bus zweiundzwanzig fährt zum Zentrum."],
    ["dreißig", "thirty (with ß)", "trente (avec ß)", "Das kostet dreißig Euro."],
    ["vierzig", "forty", "quarante", "Meine Mutter ist vierzig."],
    ["fünfzig", "fifty", "cinquante", "Das Zimmer hat fünfzig Quadratmeter."],
    ["sechzig", "sixty (sechs loses its s)", "soixante (sechs perd son s)", "Mein Vater ist sechzig."],
    ["siebzig", "seventy (sieben loses -en)", "soixante-dix (sieben perd -en)", "Meine Oma wird bald siebzig."],
    ["achtzig", "eighty", "quatre-vingts", "Meine Oma ist achtzig."],
    ["neunzig", "ninety", "quatre-vingt-dix", "Der Film dauert neunzig Minuten."],
    ["hundert", "a hundred", "cent", "Hundert Gäste kommen zur Hochzeit."],
    ["fünfundvierzig", "forty-five", "quarante-cinq", "Fünfundvierzig Minuten, bitte warten!"],
    ["achtundneunzig", "ninety-eight", "quatre-vingt-dix-huit", "Die Uroma ist achtundneunzig!"],
    ["der Geburtstag, -e", "the birthday", "l'anniversaire", "Heute ist mein Geburtstag."],
    ["Herzlichen Glückwunsch!", "congratulations!, happy birthday!", "félicitations !, joyeux anniversaire !", "Herzlichen Glückwunsch zum Geburtstag!"],
    ["Alles Gute!", "all the best!", "tous mes vœux !", "Alles Gute zum Geburtstag, Paula!"],
    ["jung", "young", "jeune", "Mein Onkel ist noch jung."],
    ["wie viel", "how much", "combien", "Wie viel kostet das?"],
    ["wie viele", "how many", "combien de", "Wie viele Geschwister hast du?"]
  ] },
  { id: "personenDE", icon: "smile", title: "Describing people", title_fr: "Décrire les gens", level: "A1", words: [
    ["nett", "nice, kind", "gentil, sympathique", "Deine Schwester ist sehr nett."],
    ["lustig", "funny", "drôle", "Mein Opa ist lustig."],
    ["sympathisch", "likeable", "sympathique", "Der neue Kollege ist sympathisch."],
    ["freundlich", "friendly", "aimable", "Die Nachbarn sind freundlich."],
    ["ruhig", "quiet, calm", "calme", "Meine Tochter ist ruhig."],
    ["laut", "loud, noisy", "bruyant, fort", "Die Kinder sind laut!"],
    ["fleißig", "hard-working", "travailleur", "Mein Sohn ist fleißig."],
    ["faul", "lazy", "paresseux", "Unser Hund ist faul."],
    ["schüchtern", "shy", "timide", "Mein Bruder ist ein bisschen schüchtern."],
    ["sportlich", "sporty", "sportif", "Meine Tante ist sehr sportlich."],
    ["kreativ", "creative", "créatif", "Meine Cousine ist kreativ."],
    ["schlank", "slim", "mince", "Der Vater ist groß und schlank."],
    ["hübsch", "pretty", "joli", "Das Baby ist hübsch."],
    ["die Haare (pl)", "hair", "les cheveux", "Sie hat lange Haare."],
    ["lang", "long", "long", "Er hat lange Haare."],
    ["kurz", "short", "court", "Mein Opa hat kurze Haare."],
    ["die Brille, -n", "glasses", "les lunettes", "Mein Vater trägt eine Brille."],
    ["aussehen", "to look (like)", "avoir l'air, ressembler", "Wie sieht deine Schwester aus?"]
  ] });

  W.LESSONS.push(
  {
    id: 4, level: "A1", icon: "layout-grid",
    title: "Der, die, das: nouns, gender and plural", title_fr: "Der, die, das : les noms, le genre et le pluriel",
    subtitle: "Every German noun has a gender. Learn it with the noun, from day one, and its plural with it.", subtitle_fr: "Chaque nom allemand a un genre. Apprends-le avec le nom, dès le premier jour, et son pluriel avec.",
    body: `
<h2>Three genders</h2>
<table>
<tr><th>Gender</th><th>the</th><th>a</th><th>Example</th></tr>
<tr><td>masculine</td><td><s-de>der</s-de></td><td><s-de>ein</s-de></td><td><s-de>der Vater</s-de>, <s-de>ein Hund</s-de></td></tr>
<tr><td>feminine</td><td><s-de>die</s-de></td><td><s-de>eine</s-de></td><td><s-de>die Mutter</s-de>, <s-de>eine Katze</s-de></td></tr>
<tr><td>neuter</td><td><s-de>das</s-de></td><td><s-de>ein</s-de></td><td><s-de>das Kind</s-de>, <s-de>ein Buch</s-de></td></tr>
<tr><td>plural (all genders)</td><td><s-de>die</s-de></td><td>no article</td><td><s-de>die Kinder</s-de>, <s-de>Kinder</s-de></td></tr>
</table>
<p>English has no gender for things, so the gender of a German noun can seem random: <s-de>der Tisch</s-de> (the table), <s-de>die Tür</s-de> (the door), <s-de>das Fenster</s-de> (the window). The only reliable method: always learn the noun with its article, as a block. That's why this course always shows <s-de>der</s-de>, <s-de>die</s-de> or <s-de>das</s-de>.</p>
<h2>A few rules that help</h2>
<p>People usually follow their sex: <s-de>der Bruder</s-de>, <s-de>die Schwester</s-de>. Nouns ending in <b>-ung</b>, <b>-heit</b>, <b>-keit</b>, <b>-ion</b> are feminine: <s-de>die Wohnung</s-de>, <s-de>die Freiheit</s-de>. Nouns ending in <b>-chen</b> or <b>-lein</b> (small things) are neuter, even for people: <s-de>das Mädchen</s-de> (the girl). In a compound noun, the last word gives the gender: <s-de>das Haus</s-de> + <s-de>die Tür</s-de> = <s-de>die Haustür</s-de> (the front door).</p>
<h2>He, she, it… for things too</h2>
<p>A noun is replaced by the pronoun of its gender: <s-de>der Tisch</s-de> → <s-de>er</s-de>, <s-de>die Tür</s-de> → <s-de>sie</s-de>, <s-de>das Fenster</s-de> → <s-de>es</s-de>. So <s-de>Wo ist der Tisch? Er ist hier.</s-de> (Where is the table? It's here.)</p>
<h2>The plural</h2>
<p>German has several plural endings, often with an umlaut: <s-de>der Hund, die Hunde</s-de> (-e) · <s-de>das Kind, die Kinder</s-de> (-er) · <s-de>die Katze, die Katzen</s-de> (-n) · <s-de>das Auto, die Autos</s-de> (-s) · <s-de>der Onkel, die Onkel</s-de> (no change) · <s-de>die Mutter, die Mütter</s-de> (umlaut only). Dictionaries write it short: <s-de>der Hund, -e</s-de>; <s-de>die Mutter, ¨</s-de>.</p>
<div class="tip">Colours help your memory: many learners write masculine nouns in blue, feminine in red and neuter in green. And say the article out loud every time: <s-de>der Hund</s-de>, never just <s-de>Hund</s-de>.</div>
`,
    body_fr: `
<h2>Trois genres</h2>
<table>
<tr><th>Genre</th><th>le, la</th><th>un, une</th><th>Exemple</th></tr>
<tr><td>masculin</td><td><s-de>der</s-de></td><td><s-de>ein</s-de></td><td><s-de>der Vater</s-de>, <s-de>ein Hund</s-de></td></tr>
<tr><td>féminin</td><td><s-de>die</s-de></td><td><s-de>eine</s-de></td><td><s-de>die Mutter</s-de>, <s-de>eine Katze</s-de></td></tr>
<tr><td>neutre</td><td><s-de>das</s-de></td><td><s-de>ein</s-de></td><td><s-de>das Kind</s-de>, <s-de>ein Buch</s-de></td></tr>
<tr><td>pluriel (tous genres)</td><td><s-de>die</s-de></td><td>pas d'article</td><td><s-de>die Kinder</s-de>, <s-de>Kinder</s-de></td></tr>
</table>
<p>L'allemand a un genre de plus que le français, le neutre, et le genre d'un nom ne correspond souvent pas au français : <s-de>der Mond</s-de> (la lune est masculine), <s-de>die Sonne</s-de> (le soleil est féminin), <s-de>das Auto</s-de> (la voiture est neutre). Ne te fie donc jamais au genre français : apprends toujours le nom avec son article, d'un bloc. C'est pourquoi ce cours affiche toujours <s-de>der</s-de>, <s-de>die</s-de> ou <s-de>das</s-de>.</p>
<h2>Quelques règles qui aident</h2>
<p>Pour les personnes, le genre suit en général le sexe : <s-de>der Bruder</s-de>, <s-de>die Schwester</s-de>. Les noms en <b>-ung</b>, <b>-heit</b>, <b>-keit</b>, <b>-ion</b> sont féminins : <s-de>die Wohnung</s-de>, <s-de>die Freiheit</s-de>. Les noms en <b>-chen</b> ou <b>-lein</b> (petites choses) sont neutres, même pour des personnes : <s-de>das Mädchen</s-de> (la jeune fille). Dans un nom composé, c'est le dernier mot qui donne le genre : <s-de>das Haus</s-de> + <s-de>die Tür</s-de> = <s-de>die Haustür</s-de> (la porte d'entrée).</p>
<h2>Il, elle… pour les choses aussi</h2>
<p>Un nom se remplace par le pronom de son genre allemand : <s-de>der Tisch</s-de> → <s-de>er</s-de>, <s-de>die Tür</s-de> → <s-de>sie</s-de>, <s-de>das Fenster</s-de> → <s-de>es</s-de>. Ainsi : <s-de>Wo ist der Tisch? Er ist hier.</s-de> (Où est la table ? Elle est ici.) La table est féminine en français, mais <s-de>der Tisch</s-de> devient <s-de>er</s-de>.</p>
<h2>Le pluriel</h2>
<p>L'allemand a plusieurs terminaisons de pluriel, souvent avec un Umlaut : <s-de>der Hund, die Hunde</s-de> (-e) · <s-de>das Kind, die Kinder</s-de> (-er) · <s-de>die Katze, die Katzen</s-de> (-n) · <s-de>das Auto, die Autos</s-de> (-s) · <s-de>der Onkel, die Onkel</s-de> (pas de changement) · <s-de>die Mutter, die Mütter</s-de> (Umlaut seul). Les dictionnaires l'écrivent en abrégé : <s-de>der Hund, -e</s-de> ; <s-de>die Mutter, ¨</s-de>.</p>
<div class="tip">Les couleurs aident la mémoire : beaucoup d'apprenants écrivent les noms masculins en bleu, les féminins en rouge et les neutres en vert. Et dis l'article à voix haute à chaque fois : <s-de>der Hund</s-de>, jamais <s-de>Hund</s-de> tout seul.</div>
`,
    examples: [
      ["Das ist der Vater von Lena.", "This is Lena's father.", "C'est le père de Lena."],
      ["Der Hund heißt Bruno. Er ist drei.", "The dog is called Bruno. He's three.", "Le chien s'appelle Bruno. Il a trois ans."],
      ["Die Sonne scheint, der Mond nicht.", "The sun is shining, the moon isn't.", "Le soleil brille, la lune non."],
      ["Das Mädchen heißt Mia.", "The girl is called Mia.", "La fillette s'appelle Mia."],
      ["Wir haben zwei Kinder und drei Katzen.", "We have two children and three cats.", "Nous avons deux enfants et trois chats."],
      ["Wo ist die Brille? — Sie ist hier.", "Where are the glasses? — They're here.", "Où sont les lunettes ? — Elles sont ici."],
      ["Das ist eine Tante von Jonas.", "This is an aunt of Jonas's.", "C'est une tante de Jonas."]
    ],
    quiz: [
      { q: "Which article? ___ Mädchen", q_fr: "Quel article ? ___ Mädchen", o: ["der", "die", "das"], a: 2, ex: "Nouns in -chen are neuter: das Mädchen.", ex_fr: "Les noms en -chen sont neutres : das Mädchen." },
      { q: "Which article? ___ Wohnung (the flat)", q_fr: "Quel article ? ___ Wohnung (l'appartement)", o: ["der", "die", "das"], a: 1, ex: "Nouns in -ung are feminine.", ex_fr: "Les noms en -ung sont féminins." },
      { q: "Der Tisch ist neu. → ___ ist neu.", q_fr: "Der Tisch ist neu. → ___ ist neu.", o: ["Er", "Sie", "Es"], a: 0, ex: "der → er, even for a thing.", ex_fr: "der → er, même pour une chose." },
      { q: "The plural of das Kind is:", q_fr: "Le pluriel de das Kind est :", o: ["die Kinds", "die Kinder", "die Kinden"], a: 1, ex: "das Kind, -er → die Kinder.", ex_fr: "das Kind, -er → die Kinder." },
      { q: "das Haus + die Tür = ___ Haustür", q_fr: "das Haus + die Tür = ___ Haustür", o: ["das", "die", "der"], a: 1, ex: "The last word gives the gender: die Tür → die Haustür.", ex_fr: "Le dernier mot donne le genre : die Tür → die Haustür." }
    ]
  },
  {
    id: 5, level: "A1", icon: "users",
    title: "Ich habe einen Bruder: haben, mein / dein and kein", title_fr: "Ich habe einen Bruder : haben, mein / dein et kein",
    subtitle: "Talk about your family: what you have, whose it is, and what you don't have.", subtitle_fr: "Parler de ta famille : ce que tu as, à qui c'est, et ce que tu n'as pas.",
    body: `
<h2>Haben (to have)</h2>
<p><s-de>ich habe</s-de> · <s-de>du hast</s-de> · <s-de>er / sie / es hat</s-de> · <s-de>wir haben</s-de> · <s-de>ihr habt</s-de> · <s-de>sie / Sie haben</s-de></p>
<h2>Einen: the masculine changes after haben</h2>
<p>After <s-de>haben</s-de>, the thing or person you have is the object of the verb. In German, the object takes the <b>accusative</b>, and only one form changes: masculine <s-de>ein</s-de> becomes <s-de>einen</s-de>.</p>
<table>
<tr><th></th><th>Subject</th><th>After haben</th></tr>
<tr><td>masculine</td><td><s-de>Das ist ein Bruder.</s-de></td><td><s-de>Ich habe einen Bruder.</s-de></td></tr>
<tr><td>feminine</td><td><s-de>Das ist eine Schwester.</s-de></td><td><s-de>Ich habe eine Schwester.</s-de></td></tr>
<tr><td>neuter</td><td><s-de>Das ist ein Kind.</s-de></td><td><s-de>Ich habe ein Kind.</s-de></td></tr>
</table>
<h2>My, your, his, her</h2>
<p><s-de>mein</s-de> (my) · <s-de>dein</s-de> (your) · <s-de>sein</s-de> (his, its) · <s-de>ihr</s-de> (her, their) · <s-de>unser</s-de> (our) · <s-de>euer</s-de> (your, plural) · <s-de>Ihr</s-de> (your, formal). They take the same endings as <s-de>ein</s-de>: <s-de>mein Vater</s-de>, <s-de>meine Mutter</s-de>, <s-de>mein Kind</s-de>, <s-de>meine Eltern</s-de>, and after haben, <s-de>Ich habe meinen Schlüssel.</s-de> (I've got my key.)</p>
<p>Like English, <s-de>sein</s-de> and <s-de>ihr</s-de> depend on the owner: Jonas and <s-de>seine Schwester</s-de> (his sister), Lena and <s-de>ihre Schwester</s-de> (her sister). The ending then agrees with the noun that follows.</p>
<h2>Kein: not a, no</h2>
<p>To say you don't have something, use <s-de>kein</s-de>, the negative of <s-de>ein</s-de>, with the same endings: <s-de>Ich habe keinen Bruder.</s-de> · <s-de>keine Schwester</s-de> · <s-de>kein Auto</s-de> · <s-de>keine Geschwister</s-de>. Use <s-de>nicht</s-de> for everything else: <s-de>Er ist nicht verheiratet.</s-de></p>
<div class="tip">Ask about someone's family: <s-de>Hast du Geschwister?</s-de> (Do you have brothers or sisters?) · <s-de>Hast du Kinder?</s-de> · <s-de>Wie heißt deine Schwester?</s-de> · <s-de>Wie alt ist dein Bruder?</s-de></div>
`,
    body_fr: `
<h2>Haben (avoir)</h2>
<p><s-de>ich habe</s-de> · <s-de>du hast</s-de> · <s-de>er / sie / es hat</s-de> · <s-de>wir haben</s-de> · <s-de>ihr habt</s-de> · <s-de>sie / Sie haben</s-de></p>
<h2>Einen : le masculin change après haben</h2>
<p>Après <s-de>haben</s-de>, ce qu'on a est le complément d'objet direct. En allemand, ce complément se met à l'<b>accusatif</b>, et une seule forme change : le masculin <s-de>ein</s-de> devient <s-de>einen</s-de>.</p>
<table>
<tr><th></th><th>Sujet</th><th>Après haben</th></tr>
<tr><td>masculin</td><td><s-de>Das ist ein Bruder.</s-de></td><td><s-de>Ich habe einen Bruder.</s-de></td></tr>
<tr><td>féminin</td><td><s-de>Das ist eine Schwester.</s-de></td><td><s-de>Ich habe eine Schwester.</s-de></td></tr>
<tr><td>neutre</td><td><s-de>Das ist ein Kind.</s-de></td><td><s-de>Ich habe ein Kind.</s-de></td></tr>
</table>
<h2>Mon, ton, son…</h2>
<p><s-de>mein</s-de> (mon) · <s-de>dein</s-de> (ton) · <s-de>sein</s-de> (son, à lui) · <s-de>ihr</s-de> (son, à elle ; leur) · <s-de>unser</s-de> (notre) · <s-de>euer</s-de> (votre, à plusieurs que l'on tutoie) · <s-de>Ihr</s-de> (votre, politesse). Ils prennent les mêmes terminaisons que <s-de>ein</s-de> : <s-de>mein Vater</s-de>, <s-de>meine Mutter</s-de>, <s-de>mein Kind</s-de>, <s-de>meine Eltern</s-de>, et après haben, <s-de>Ich habe meinen Schlüssel.</s-de> (J'ai ma clé.)</p>
<p><b>Le grand piège pour un francophone :</b> en français, « sa sœur » ne dit pas si c'est la sœur d'un homme ou d'une femme. En allemand, si : <s-de>sein</s-de> quand le possesseur est masculin, <s-de>ihr</s-de> quand il est féminin. Jonas et <s-de>seine Schwester</s-de> (la sœur de Jonas), Lena et <s-de>ihre Schwester</s-de> (la sœur de Lena). La terminaison s'accorde ensuite avec le nom qui suit.</p>
<h2>Kein : pas de</h2>
<p>Pour dire qu'on n'a pas quelque chose, on emploie <s-de>kein</s-de>, la négation de <s-de>ein</s-de>, avec les mêmes terminaisons : <s-de>Ich habe keinen Bruder.</s-de> (Je n'ai pas de frère.) · <s-de>keine Schwester</s-de> · <s-de>kein Auto</s-de> · <s-de>keine Geschwister</s-de>. Pour tout le reste, c'est <s-de>nicht</s-de> : <s-de>Er ist nicht verheiratet.</s-de></p>
<div class="tip">Pour poser des questions sur la famille : <s-de>Hast du Geschwister?</s-de> (Tu as des frères et sœurs ?) · <s-de>Hast du Kinder?</s-de> · <s-de>Wie heißt deine Schwester?</s-de> · <s-de>Wie alt ist dein Bruder?</s-de></div>
`,
    examples: [
      ["Ich habe einen Bruder und eine Schwester.", "I have a brother and a sister.", "J'ai un frère et une sœur."],
      ["Hast du Geschwister?", "Do you have any brothers or sisters?", "Tu as des frères et sœurs ?"],
      ["Mein Vater heißt Klaus, meine Mutter heißt Ute.", "My father is called Klaus, my mother Ute.", "Mon père s'appelle Klaus, ma mère Ute."],
      ["Jonas und seine Schwester wohnen in Bonn.", "Jonas and his sister live in Bonn.", "Jonas et sa sœur habitent à Bonn."],
      ["Lena und ihr Bruder sind sehr sportlich.", "Lena and her brother are very sporty.", "Lena et son frère sont très sportifs."],
      ["Wir haben keinen Hund, aber eine Katze.", "We don't have a dog, but we have a cat.", "Nous n'avons pas de chien, mais un chat."],
      ["Ist das Ihr Sohn?", "Is this your son? (formal)", "C'est votre fils ?"]
    ],
    quiz: [
      { q: "Complete: “Ich habe ___ Bruder.”", q_fr: "Complète : « Ich habe ___ Bruder. »", o: ["ein", "einen", "eine"], a: 1, ex: "After haben, masculine ein becomes einen.", ex_fr: "Après haben, le masculin ein devient einen." },
      { q: "You're talking about Lena's brother: “Das ist ___ Bruder.”", q_fr: "Tu parles du frère de Lena : « Das ist ___ Bruder. »", o: ["sein", "ihr", "ihre"], a: 1, ex: "The owner is Lena (a woman): ihr. Bruder is masculine, subject: no ending.", ex_fr: "La propriétaire est Lena (une femme) : ihr. Bruder est masculin et sujet : pas de terminaison." },
      { q: "“I don't have a car.”", q_fr: "« Je n'ai pas de voiture. »", o: ["Ich habe nicht ein Auto.", "Ich habe kein Auto.", "Ich habe keine Auto."], a: 1, ex: "kein, the negative of ein: das Auto → kein Auto.", ex_fr: "kein, la négation de ein : das Auto → kein Auto." },
      { q: "Complete: “Du ___ zwei Kinder.” (haben)", q_fr: "Complète : « Du ___ zwei Kinder. » (haben)", o: ["habst", "hast", "hat"], a: 1, ex: "du hast: the b disappears.", ex_fr: "du hast : le b disparaît." },
      { q: "Jonas and ___ sister (his sister):", q_fr: "Jonas et sa sœur (la sœur de Jonas) :", o: ["seine Schwester", "ihre Schwester", "sein Schwester"], a: 0, ex: "Owner masculine: sein; Schwester is feminine: seine.", ex_fr: "Possesseur masculin : sein ; Schwester est féminin : seine." }
    ]
  },
  {
    id: 6, level: "A1", kind: "functional", icon: "cake",
    title: "Everyday German: numbers to 100, age and birthdays", title_fr: "L'allemand de tous les jours : compter jusqu'à 100, l'âge et les anniversaires",
    subtitle: "Count to a hundred the German way (one-and-twenty!), ask someone's age and wish a happy birthday.", subtitle_fr: "Compter jusqu'à cent à l'allemande (un-et-vingt !), demander l'âge de quelqu'un et souhaiter un bon anniversaire.",
    body: `
<h2>The tens</h2>
<p><s-de>zwanzig</s-de> (20) · <s-de>dreißig</s-de> (30, with ß) · <s-de>vierzig</s-de> · <s-de>fünfzig</s-de> · <s-de>sechzig</s-de> (no s) · <s-de>siebzig</s-de> (no -en) · <s-de>achtzig</s-de> · <s-de>neunzig</s-de> · <s-de>hundert</s-de></p>
<h2>21 = one-and-twenty</h2>
<p>German says the unit first, then <s-de>und</s-de>, then the ten, all in one word: <s-de>einundzwanzig</s-de> (21), <s-de>zweiundzwanzig</s-de> (22), <s-de>fünfundvierzig</s-de> (45), <s-de>achtundneunzig</s-de> (98). English once did the same: the old nursery rhyme says "four and twenty blackbirds". With 1, it's <s-de>ein</s-de>, not <s-de>eins</s-de>: <s-de>einunddreißig</s-de>.</p>
<p>Listening tip: in 45, you hear the 5 first. Write the second digit as soon as you hear it, then the first.</p>
<h2>Age</h2>
<p><s-de>Wie alt bist du?</s-de> · <s-de>Wie alt sind Sie?</s-de> · <s-de>Ich bin vierunddreißig (Jahre alt).</s-de> Like English, German uses "to be": <s-de>sein</s-de>.</p>
<h2>Birthdays</h2>
<p><s-de>Wann hast du Geburtstag?</s-de> (When is your birthday? literally, when do you have birthday?) · <s-de>Heute ist mein Geburtstag!</s-de> · <s-de>Herzlichen Glückwunsch zum Geburtstag!</s-de> · <s-de>Alles Gute zum Geburtstag!</s-de> (Happy birthday!)</p>
<div class="tip">How much? <s-de>Wie viel kostet das?</s-de> — <s-de>Neunundzwanzig Euro.</s-de> How many? <s-de>Wie viele Geschwister hast du?</s-de> Viel for things you can't count, viele for things you can.</div>
`,
    body_fr: `
<h2>Les dizaines</h2>
<p><s-de>zwanzig</s-de> (20) · <s-de>dreißig</s-de> (30, avec ß) · <s-de>vierzig</s-de> · <s-de>fünfzig</s-de> · <s-de>sechzig</s-de> (sans s) · <s-de>siebzig</s-de> (sans -en) · <s-de>achtzig</s-de> · <s-de>neunzig</s-de> · <s-de>hundert</s-de></p>
<p>Bonne nouvelle : pas de « soixante-dix » ni de « quatre-vingts » en allemand. 70 se dit simplement « sept-dix » (<s-de>siebzig</s-de>), 80 « huit-dix » (<s-de>achtzig</s-de>), 90 « neuf-dix » (<s-de>neunzig</s-de>), comme en Belgique et en Suisse avec septante et nonante.</p>
<h2>21 = un-et-vingt</h2>
<p>L'allemand dit l'unité d'abord, puis <s-de>und</s-de>, puis la dizaine, le tout en un seul mot : <s-de>einundzwanzig</s-de> (21), <s-de>zweiundzwanzig</s-de> (22), <s-de>fünfundvierzig</s-de> (45), <s-de>achtundneunzig</s-de> (98). Avec 1, c'est <s-de>ein</s-de>, pas <s-de>eins</s-de> : <s-de>einunddreißig</s-de>.</p>
<p>Astuce d'écoute : dans 45, tu entends le 5 en premier. Écris le deuxième chiffre dès que tu l'entends, puis le premier.</p>
<h2>L'âge</h2>
<p><s-de>Wie alt bist du?</s-de> · <s-de>Wie alt sind Sie?</s-de> · <s-de>Ich bin vierunddreißig (Jahre alt).</s-de> Attention : pour l'âge, l'allemand utilise <s-de>sein</s-de> (être), jamais <s-de>haben</s-de> : « je suis trente-quatre ans ».</p>
<h2>Les anniversaires</h2>
<p><s-de>Wann hast du Geburtstag?</s-de> (Quand est ton anniversaire ? littéralement, quand as-tu anniversaire ?) · <s-de>Heute ist mein Geburtstag!</s-de> · <s-de>Herzlichen Glückwunsch zum Geburtstag!</s-de> · <s-de>Alles Gute zum Geburtstag!</s-de> (Joyeux anniversaire !)</p>
<div class="tip">Combien ? <s-de>Wie viel kostet das?</s-de> — <s-de>Neunundzwanzig Euro.</s-de> Combien de ? <s-de>Wie viele Geschwister hast du?</s-de> viel pour ce qui ne se compte pas, viele pour ce qui se compte.</div>
`,
    examples: [
      ["Wie alt bist du? — Ich bin dreiundzwanzig.", "How old are you? — I'm twenty-three.", "Tu as quel âge ? — J'ai vingt-trois ans."],
      ["Mein Opa ist neunzig Jahre alt.", "My grandpa is ninety years old.", "Mon papi a quatre-vingt-dix ans."],
      ["Das kostet siebenundvierzig Euro.", "That costs forty-seven euros.", "Ça coûte quarante-sept euros."],
      ["Wann hast du Geburtstag?", "When is your birthday?", "Quand est ton anniversaire ?"],
      ["Herzlichen Glückwunsch zum Geburtstag!", "Happy birthday!", "Joyeux anniversaire !"],
      ["Wie viele Kinder haben Sie?", "How many children do you have?", "Combien d'enfants avez-vous ?"],
      ["Einunddreißig, nicht dreizehn!", "Thirty-one, not thirteen!", "Trente et un, pas treize !"]
    ],
    quiz: [
      { q: "How do you say 34?", q_fr: "Comment dit-on 34 ?", o: ["dreißigvier", "vierunddreißig", "dreiundvierzig"], a: 1, ex: "The unit first: vier-und-dreißig. Dreiundvierzig is 43.", ex_fr: "L'unité d'abord : vier-und-dreißig. Dreiundvierzig, c'est 43." },
      { q: "Which number is written correctly?", q_fr: "Quel nombre est bien écrit ?", o: ["dreizig", "dreißig", "dreissig"], a: 1, ex: "30 = dreißig, with ß (dreissig only in Switzerland, where ß isn't used).", ex_fr: "30 = dreißig, avec ß (dreissig seulement en Suisse, où l'on n'utilise pas le ß)." },
      { q: "You hear “siebenundsechzig”. You write:", q_fr: "Tu entends « siebenundsechzig ». Tu écris :", o: ["76", "67", "77"], a: 1, ex: "sieben (7) + und + sechzig (60) = 67.", ex_fr: "sieben (7) + und + sechzig (60) = 67." },
      { q: "“I'm 25.”", q_fr: "« J'ai 25 ans. »", o: ["Ich habe fünfundzwanzig Jahre.", "Ich bin fünfundzwanzig.", "Ich bin zwanzigfünf."], a: 1, ex: "Age with sein: ich bin fünfundzwanzig (Jahre alt).", ex_fr: "L'âge avec sein : ich bin fünfundzwanzig (Jahre alt)." },
      { q: "Wie ___ Geschwister hast du?", q_fr: "Wie ___ Geschwister hast du?", o: ["viel", "viele", "vieles"], a: 1, ex: "Geschwister can be counted: viele.", ex_fr: "Geschwister se compte : viele." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    4: {
      gap: [["___ Mädchen heißt Mia.", "Das", "the", "le, la"], ["___ Wohnung ist schön.", "Die", "the", "le, la"], ["Wo ist der Hund? — ___ ist im Garten.", "Er", "he, it", "il"], ["Ich habe zwei ___. (das Kind)", "Kinder"]],
      fix: [["Die Mädchen heißt Mia.", "Das Mädchen heißt Mia.", "Nouns in -chen are neuter: das Mädchen.", "Les noms en -chen sont neutres : das Mädchen."], ["Wo ist der Tisch? Es ist hier.", "Wo ist der Tisch? Er ist hier.", "der Tisch is masculine: it becomes er.", "der Tisch est masculin : il devient er."]],
      task: ["Look around you and name six things with their article: two der, two die, two das.", "Regarde autour de toi et nomme six choses avec leur article : deux der, deux die, deux das.", "der Tisch, der Stuhl, die Lampe, die Tür, das Fenster, das Buch."]
    },
    5: {
      gap: [["Ich habe ___ Bruder.", "einen", "a", "un"], ["Lena und ___ Mutter wohnen in Bonn.", "ihre", "her", "sa (à elle)"], ["Wir haben ___ Auto.", "kein", "no", "pas de"], ["Du ___ zwei Schwestern.", "hast", "haben"]],
      fix: [["Ich habe nicht einen Hund.", "Ich habe keinen Hund.", "To say you don't have something: kein, with the endings of ein.", "Pour dire qu'on n'a pas quelque chose : kein, avec les terminaisons de ein."], ["Jonas und ihre Schwester wohnen in Wien.", "Jonas und seine Schwester wohnen in Wien.", "The owner is Jonas, a man: sein, then -e for Schwester.", "Le possesseur est Jonas, un homme : sein, puis -e pour Schwester."]],
      task: ["Write four sentences about a family you know (yours or an invented one): who there is, names, what they have or don't have.", "Écris quatre phrases sur une famille que tu connais (la tienne ou une famille inventée) : qui il y a, les prénoms, ce qu'ils ont ou n'ont pas.", "Ich habe einen Bruder und eine Schwester. Mein Bruder heißt Finn und ist sehr sportlich. Meine Schwester hat zwei Kinder, aber keinen Hund. Meine Eltern wohnen in Graz."]
    },
    6: {
      gap: [["21 = ___", "einundzwanzig"], ["30 = ___", "dreißig"], ["Wie ___ bist du? — Ich bin zwanzig.", "alt", "old", "âgé, vieux"], ["___ Glückwunsch zum Geburtstag!", "Herzlichen", "warm", "chaleureux"]],
      fix: [["Ich habe dreißig Jahre.", "Ich bin dreißig Jahre alt.|Ich bin dreißig.", "Age with sein: ich bin dreißig (Jahre alt).", "L'âge avec sein : ich bin dreißig (Jahre alt)."], ["Mein Opa ist achtzigsieben.", "Mein Opa ist siebenundachtzig.", "The unit first: sieben-und-achtzig.", "L'unité d'abord : sieben-und-achtzig."]],
      task: ["Give the age of four people you know, in full words.", "Donne l'âge de quatre personnes que tu connais, en toutes lettres.", "Meine Mutter ist neunundfünfzig. Mein Vater ist dreiundsechzig. Meine Schwester ist einunddreißig, und ihr Sohn ist vier."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "familienfoto", lesson: 5, level: "A1", icon: "image", partner: "Leonie", role: "a new colleague", role_fr: "une nouvelle collègue",
    title: "The family photo", title_fr: "La photo de famille",
    setting: "At lunch, Leonie, a new colleague, sees a photo on your phone and asks about your family.", setting_fr: "Au déjeuner, Leonie, une nouvelle collègue, voit une photo sur ton téléphone et te pose des questions sur ta famille.",
    turns: [
      { p: "Oh, ein schönes Foto! Ist das deine Familie?", en: "Oh, a nice photo! Is that your family?", fr: "Oh, une jolie photo ! C'est ta famille ?" },
      { y: ["Ja, das sind meine Eltern und mein Bruder.", "Ja, das sind mein Eltern und mein Bruder.", "Ja, das sind meine Eltern und meinen Bruder."], en: "Yes, those are my parents and my brother.", fr: "Oui, ce sont mes parents et mon frère.", why: "Eltern is plural: meine; Bruder is the subject here: mein, not meinen.", why_fr: "Eltern est au pluriel : meine ; Bruder est ici sujet : mein, pas meinen." },
      { p: "Wie heißt dein Bruder? Er sieht nett aus!", en: "What's your brother's name? He looks nice!", fr: "Comment s'appelle ton frère ? Il a l'air gentil !" },
      { y: ["Er heißt Tobias. Er ist dreiundzwanzig und sehr lustig.", "Er heißt Tobias. Er hat dreiundzwanzig und sehr lustig.", "Er heißt Tobias. Er ist zwanzigdrei und sehr lustig."], en: "He's called Tobias. He's twenty-three and very funny.", fr: "Il s'appelle Tobias. Il a vingt-trois ans et il est très drôle.", why: "Age with sein, and the unit first: dreiundzwanzig.", why_fr: "L'âge avec sein, et l'unité d'abord : dreiundzwanzig." },
      { p: "Und hast du auch Schwestern?", en: "And do you have sisters too?", fr: "Et tu as aussi des sœurs ?" },
      { y: ["Nein, ich habe keine Schwester. Und du?", "Nein, ich habe nicht Schwester. Und du?", "Nein, ich habe keinen Schwester. Und du?"], en: "No, I don't have a sister. And you?", fr: "Non, je n'ai pas de sœur. Et toi ?", why: "kein + feminine noun: keine Schwester.", why_fr: "kein + nom féminin : keine Schwester." },
      { p: "Ich habe zwei Brüder und einen Hund! Mein Hund heißt Bruno.", en: "I have two brothers and a dog! My dog is called Bruno.", fr: "J'ai deux frères et un chien ! Mon chien s'appelle Bruno." },
      { y: ["Wie süß! Wie alt ist er?", "Wie süß! Wie alt ist sie?", "Wie süß! Wie alt ist es?"], en: "How sweet! How old is he?", fr: "Trop mignon ! Il a quel âge ?", why: "der Hund → er.", why_fr: "der Hund → er." },
      { p: "Er ist acht. Er ist schon alt, aber noch sehr sportlich!", en: "He's eight. He's already old, but still very sporty!", fr: "Il a huit ans. Il est déjà vieux, mais encore très sportif !" },
      { y: ["Toll! Hast du ein Foto von Bruno?", "Toll! Hast du einen Foto von Bruno?", "Toll! Hast du eine Foto von Bruno?"], en: "Great! Do you have a photo of Bruno?", fr: "Super ! Tu as une photo de Bruno ?", why: "das Foto is neuter: ein Foto, even after haben.", why_fr: "das Foto est neutre : ein Foto, même après haben." }
    ] },
  { id: "geburtstag", lesson: 6, level: "A1", icon: "cake", partner: "Moritz", role: "a friend", role_fr: "un ami",
    title: "A birthday phone call", title_fr: "Un appel d'anniversaire",
    setting: "Your friend Moritz calls you. Today is his birthday.", setting_fr: "Ton ami Moritz t'appelle. Aujourd'hui, c'est son anniversaire.",
    turns: [
      { p: "Hallo! Hier ist Moritz. Weißt du, was heute ist?", en: "Hello! It's Moritz. Do you know what today is?", fr: "Allô ! C'est Moritz. Tu sais quel jour on est ?" },
      { y: ["Natürlich! Herzlichen Glückwunsch zum Geburtstag!", "Natürlich! Herzliche Glückwunsch zum Geburtstag!", "Natürlich! Herzlichen Glückwunsch für Geburtstag!"], en: "Of course! Happy birthday!", fr: "Bien sûr ! Joyeux anniversaire !", why: "The fixed phrase: Herzlichen Glückwunsch zum Geburtstag.", why_fr: "La formule figée : Herzlichen Glückwunsch zum Geburtstag." },
      { p: "Danke! Ich bin jetzt dreißig. Das ist alt, oder?", en: "Thanks! I'm thirty now. That's old, isn't it?", fr: "Merci ! J'ai trente ans maintenant. C'est vieux, non ?" },
      { y: ["Nein, dreißig ist nicht alt! Mein Opa ist neunzig!", "Nein, dreißig ist kein alt! Mein Opa ist neunzig!", "Nein, dreißig ist nicht alt! Mein Opa hat neunzig!"], en: "No, thirty isn't old! My grandpa is ninety!", fr: "Non, trente ans, ce n'est pas vieux ! Mon papi a quatre-vingt-dix ans !", why: "nicht with an adjective (alt); age with sein.", why_fr: "nicht devant un adjectif (alt) ; l'âge avec sein." },
      { p: "Haha! Heute Abend ist eine Party bei mir. Kommst du?", en: "Haha! There's a party at my place tonight. Are you coming?", fr: "Haha ! Ce soir, il y a une fête chez moi. Tu viens ?" },
      { y: ["Ja, gern! Wie viele Leute kommen?", "Ja, gern! Wie viel Leute kommen?", "Ja, gern! Wie viele Leute kommt?"], en: "Yes, I'd love to! How many people are coming?", fr: "Oui, avec plaisir ! Combien de personnes viennent ?", why: "People can be counted: wie viele; Leute is plural: kommen.", why_fr: "Les gens se comptent : wie viele ; Leute est au pluriel : kommen." },
      { p: "Ungefähr fünfundzwanzig. Meine Schwester kommt auch, mit ihren zwei Kindern.", en: "About twenty-five. My sister is coming too, with her two children.", fr: "Environ vingt-cinq. Ma sœur vient aussi, avec ses deux enfants." },
      { y: ["Super! Bis heute Abend, Moritz!", "Super! Bis heute Abend, Moritz?", "Super! Bis heute Morgen, Moritz!"], en: "Great! See you tonight, Moritz!", fr: "Super ! À ce soir, Moritz !", why: "Bis heute Abend: see you tonight. Heute Morgen is this morning, already over.", why_fr: "Bis heute Abend : à ce soir. Heute Morgen, c'est ce matin, déjà passé." }
    ] }
  );

  W.READINGS.push({
    id: "meinefamilie", level: "A1", icon: "users", title: "Meine Familie", genre: "Personal story",
    intro: "Annika introduces her family: parents, brother, grandmother and a very lazy cat. Gender, plural, possessives and ages.",
    intro_fr: "Annika présente sa famille : ses parents, son frère, sa grand-mère et un chat très paresseux. Le genre, le pluriel, les possessifs et l'âge.",
    paragraphs: [
      { de: "Hallo! Ich heiße Annika und ich bin vierundzwanzig Jahre alt. Ich wohne in Freiburg, aber meine Familie wohnt in Bremen.", en: "Hello! My name is Annika and I'm twenty-four. I live in Freiburg, but my family lives in Bremen.", fr: "Bonjour ! Je m'appelle Annika et j'ai vingt-quatre ans. J'habite à Fribourg-en-Brisgau, mais ma famille habite à Brême." },
      { de: "Mein Vater heißt Bernd. Er ist achtundfünfzig und arbeitet als Koch in einem Restaurant. Meine Mutter heißt Heike. Sie ist Lehrerin und sehr sportlich.", en: "My father is called Bernd. He's fifty-eight and works as a cook in a restaurant. My mother is called Heike. She's a teacher and very sporty.", fr: "Mon père s'appelle Bernd. Il a cinquante-huit ans et travaille comme cuisinier dans un restaurant. Ma mère s'appelle Heike. Elle est professeure et très sportive." },
      { de: "Ich habe einen Bruder, aber keine Schwester. Mein Bruder Timo ist einunddreißig. Er ist verheiratet und hat zwei Kinder, eine Tochter und einen Sohn.", en: "I have a brother, but no sister. My brother Timo is thirty-one. He's married and has two children, a daughter and a son.", fr: "J'ai un frère, mais pas de sœur. Mon frère Timo a trente et un ans. Il est marié et il a deux enfants, une fille et un fils." },
      { de: "Meine Oma ist dreiundachtzig, aber sie ist noch sehr fit. Sie wohnt mit ihrer Katze Mimi zusammen. Mimi ist faul und schläft den ganzen Tag!", en: "My grandma is eighty-three, but she's still very fit. She lives with her cat Mimi. Mimi is lazy and sleeps all day!", fr: "Ma mamie a quatre-vingt-trois ans, mais elle est encore très en forme. Elle habite avec sa chatte Mimi. Mimi est paresseuse et dort toute la journée !" }
    ],
    glossary: { "arbeitet": ["works", "travaille"], "als": ["as", "comme, en tant que"], "Koch": ["cook", "cuisinier"], "Restaurant": ["", ""], "Lehrerin": ["teacher (a woman)", "professeure"], "fit": ["", "en forme"], "ihrer": ["her (dative)", "sa (à elle, datif)"], "schläft": ["sleeps", "dort"], "ganzen": ["whole", "entier, toute la"] },
    questions: [
      { q: "Wo wohnt Annika?", o: ["In Freiburg", "In Bremen", "In Hamburg"], a: 0 },
      { q: "Was ist Annikas Vater von Beruf?", o: ["Koch", "Lehrer", "Arzt"], a: 0 },
      { q: "Hat Annika eine Schwester?", o: ["Nein, sie hat nur einen Bruder.", "Ja, eine Schwester.", "Ja, zwei Schwestern."], a: 0 },
      { q: "Wie viele Kinder hat Timo?", o: ["Zwei", "Eins", "Drei"], a: 0 },
      { q: "Wie ist die Katze Mimi?", o: ["Faul", "Sportlich", "Laut"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-a1-2", unit: "a1-2", level: "A1", icon: "image",
    title: "Das Hochzeitsfoto", title_fr: "La photo de mariage",
    context: "Finn shows Jana a photo of his cousin's wedding and tells her who is who.", context_fr: "Finn montre à Jana une photo du mariage de son cousin et lui explique qui est qui.",
    words: [["die Hochzeit", "the wedding", "le mariage"], ["der Cousin / die Cousine", "the cousin (m) / the cousin (f)", "le cousin / la cousine"], ["links / rechts", "on the left / on the right", "à gauche / à droite"], ["neben", "next to", "à côté de"], ["die Braut", "the bride", "la mariée"]],
    lines: [["Jana", "Was ist das für ein Foto, Finn?", "de-DE"], ["Finn", "Das ist die Hochzeit von meinem Cousin Lars. Er ist jetzt verheiratet!", "de-DE"], ["Jana", "Schön! Und wer ist die Frau neben ihm?", "de-DE"], ["Finn", "Das ist seine Frau, Wiebke. Sie ist Ärztin in Kiel.", "de-DE"], ["Jana", "Und die zwei Kinder links?", "de-DE"], ["Finn", "Das sind die Kinder von meiner Tante Elke. Ole ist sieben und Lotte ist zwölf.", "de-DE"], ["Jana", "Und der Mann rechts, mit der Brille?", "de-DE"], ["Finn", "Das ist mein Opa! Er ist sechsundachtzig, aber er tanzt noch sehr gut.", "de-DE"], ["Jana", "Sechsundachtzig? Toll! Und wo bist du?", "de-DE"], ["Finn", "Ich bin nicht auf dem Foto. Ich mache das Foto!", "de-DE"]],
    gist: ["Was zeigt Finn?", ["Ein Foto von einer Hochzeit", "Ein Foto von seinem Geburtstag", "Ein Foto von seiner Wohnung"]],
    detail: [["Wer ist Lars?", ["Finns Cousin", "Finns Bruder", "Finns Opa"]], ["Was ist Wiebke von Beruf?", ["Ärztin", "Lehrerin", "Köchin"]], ["Wie alt ist Lotte?", ["Zwölf", "Sieben", "Zwanzig"]], ["Wie alt ist Finns Opa?", ["Sechsundachtzig", "Achtundsechzig", "Sechsundsiebzig"]]],
    decode: ["Das ist seine Frau, Wiebke.", "Er ist sechsundachtzig"],
    tip: "In a big number, listen for the unit first: sechs-und-achtzig is 86, not 68. Write the second digit first, then the first.", tip_fr: "Dans un grand nombre, écoute d'abord l'unité : sechs-und-achtzig, c'est 86, pas 68. Écris le deuxième chiffre d'abord, puis le premier."
  }]);

  W.PROMPTS.push({ id: "de-a1-2", level: "A1", q: "Erzähl von deiner Familie oder von einer Familie, die du kennst: Wer ist das? Wie alt sind die Personen? Wie sind sie?", en: "Talk about your family, or a family you know: who are they? How old are they? What are they like?", fr: "Parle de ta famille, ou d'une famille que tu connais : qui sont ces personnes ? Quel âge ont-elles ? Comment sont-elles ?", time: 60,
    phrases: ["Ich habe einen Bruder / eine Schwester…", "Er / Sie ist … Jahre alt.", "Mein Vater / Meine Mutter heißt…", "Er / Sie ist sehr…", "Ich habe keine…"],
    model: "Meine Familie ist klein. Ich habe einen Bruder, aber keine Schwester. Mein Bruder heißt Lukas und ist neunundzwanzig. Er ist sehr lustig. Meine Mutter ist fünfundfünfzig und sehr sportlich. Mein Vater ist ruhig und spielt gern Gitarre. Und wir haben eine Katze!" });

  W.WRITING_GUIDE["a1-2"] = { genre: "An email to a pen friend about your family", genre_fr: "Un e-mail à un ou une correspondante sur ta famille",
    plan: [["Say hello and thank them for their email.", "Salue et remercie pour son e-mail."], ["Who is in your family: names and ages.", "Qui fait partie de ta famille : prénoms et âges."], ["One or two adjectives to describe them.", "Un ou deux adjectifs pour les décrire."], ["Something you don't have (kein).", "Quelque chose que tu n'as pas (kein)."], ["Ask a question and say goodbye.", "Pose une question et dis au revoir."]],
    marks: [["Liebe Merle,", "Liebe (to a woman) / Lieber (to a man): Dear", "Liebe (à une femme) / Lieber (à un homme) : Chère, Cher"], ["Ich habe eine Schwester und einen Bruder", "haben + einen (masculine)", "haben + einen (masculin)"], ["Sie ist siebenundzwanzig", "age with sein", "l'âge avec sein"], ["Wir haben keinen Hund", "kein + -en (masculine after haben)", "kein + -en (masculin après haben)"], ["Hast du Geschwister?", "a question to keep the conversation going", "une question pour relancer l'échange"], ["Viele Grüße", "Best wishes (end of a friendly email)", "Amitiés (fin d'un e-mail amical)"]] };

  W.COURSE.push({ id: "a1-2", level: "A1", icon: "users", title: "My family", title_fr: "Ma famille",
    intro: "In this unit, you'll talk about your family: the gender of German nouns (der, die, das) and their plural, the verb haben with einen, the possessives mein, dein, sein and ihr, the negation kein, and the numbers up to a hundred to give anyone's age.",
    intro_fr: "Dans cette unité, tu vas parler de ta famille : le genre des noms allemands (der, die, das) et leur pluriel, le verbe haben avec einen, les possessifs mein, dein, sein et ihr, la négation kein, et les nombres jusqu'à cent pour dire l'âge de chacun.",
    can: ["Talk about your family and describe people simply", "Use der, die, das and the plural of nouns", "Use haben, the possessives and kein", "Count to 100, give your age and wish a happy birthday"],
    can_fr: ["Parler de ta famille et décrire simplement des personnes", "Utiliser der, die, das et le pluriel des noms", "Utiliser haben, les possessifs et kein", "Compter jusqu'à 100, dire ton âge et souhaiter un bon anniversaire"],
    lessons: [4, 5, 6], vocab: ["familieDE", "zahlen100DE", "personenDE"], reading: "meinefamilie", prompt: "de-a1-2",
    writing: { task: "Your new pen friend Merle asked about your family. Write her an email (30-50 words): who is in your family, their ages, what they are like, and what you don't have.", task_fr: "Merle, ta nouvelle correspondante, te pose des questions sur ta famille. Écris-lui un e-mail (30 à 50 mots) : qui fait partie de ta famille, leur âge, comment ils sont, et ce que tu n'as pas.", words: "30-50",
      tips: ["Liebe Merle,", "Ich habe einen / eine / ein…", "Er / Sie ist … Jahre alt.", "Ich habe keinen / keine / kein…", "Viele Grüße"],
      checklist: ["I used einen for a masculine noun after haben", "I gave ages with sein (er ist…)", "I wrote the numbers the German way (unit first)", "I used kein for something I don't have", "I stayed between 30 and 50 words"],
      checklist_fr: ["J'ai mis einen devant un nom masculin après haben", "J'ai donné les âges avec sein (er ist…)", "J'ai écrit les nombres à l'allemande (l'unité d'abord)", "J'ai employé kein pour ce que je n'ai pas", "J'ai écrit entre 30 et 50 mots"],
      model: "Liebe Merle,\n\ndanke für deine E-Mail! Ich habe eine Schwester und einen Bruder. Meine Schwester heißt Johanna. Sie ist siebenundzwanzig und sehr kreativ. Mein Bruder Kai ist zweiundzwanzig. Wir haben keinen Hund, aber zwei Katzen. Hast du Geschwister?\n\nViele Grüße\nCamille" } });
})();
