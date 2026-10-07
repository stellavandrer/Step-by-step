/* Cours d'allemand, unité A1-1 « Hello! / Bonjour ! » : saluer, du ou Sie, le verbe sein et le présent des verbes
   réguliers, les questions avec Wie, Woher, Wo, épeler (ä, ö, ü, ß), les nombres de 0 à 20.
   Explications et traductions en anglais ET en français (js/de/localize.js garde celles de l'interface).
   Personnages fictifs, prénoms allemands. Faits vérifiables seulement : Moin dans le nord de l'Allemagne,
   Grüß Gott et Servus dans le sud et en Autriche, Sie toujours avec une majuscule, zwo pour zwei au téléphone,
   ae / oe / ue / ss quand on ne peut pas taper ä, ö, ü, ß. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "essentielsDE", icon: "hand", title: "The essentials", title_fr: "Les indispensables", level: "A1", words: [
    ["Hallo!", "hello, hi", "salut, bonjour", "Hallo, Lena!"],
    ["Guten Morgen!", "good morning", "bonjour (le matin)", "Guten Morgen, Frau Weber!"],
    ["Guten Tag!", "hello (formal, during the day)", "bonjour (poli, dans la journée)", "Guten Tag, Herr Schmidt!"],
    ["Guten Abend!", "good evening", "bonsoir", "Guten Abend und willkommen!"],
    ["Gute Nacht!", "good night", "bonne nuit", "Gute Nacht, bis morgen!"],
    ["Tschüss!", "bye (informal)", "salut, au revoir (familier)", "Tschüss, Finn!"],
    ["Auf Wiedersehen!", "goodbye", "au revoir", "Danke und auf Wiedersehen!"],
    ["bis bald", "see you soon", "à bientôt", "Tschüss, bis bald!"],
    ["bis morgen", "see you tomorrow", "à demain", "Gute Nacht, bis morgen!"],
    ["danke", "thank you", "merci", "Danke, Jonas!"],
    ["vielen Dank", "thank you very much", "merci beaucoup", "Vielen Dank, Frau Wolf!"],
    ["bitte", "please; you're welcome", "s'il te plaît, s'il vous plaît ; de rien", "Einen Kaffee, bitte."],
    ["Entschuldigung!", "excuse me, sorry", "excusez-moi, pardon", "Entschuldigung, wo ist der Bahnhof?"],
    ["ja", "yes", "oui", "Ja, ich komme aus Frankreich."],
    ["nein", "no", "non", "Nein, ich wohne nicht in Berlin."],
    ["Wie geht's?", "how are you? (informal)", "ça va ? (familier)", "Hallo, Finn! Wie geht's?"],
    ["Wie geht es Ihnen?", "how are you? (formal)", "comment allez-vous ?", "Guten Tag, Frau Weber! Wie geht es Ihnen?"],
    ["gut", "good, well", "bien, bon", "Gut, danke. Und dir?"],
    ["Freut mich!", "nice to meet you", "ça me fait plaisir de vous rencontrer", "Ich bin Lena. — Freut mich!"]
  ] },
  { id: "laenderDE", icon: "globe", title: "Countries and languages", title_fr: "Pays et langues", level: "A1", words: [
    ["Deutschland", "Germany", "l'Allemagne", "Ich wohne in Deutschland."],
    ["Österreich", "Austria", "l'Autriche", "Wien ist in Österreich."],
    ["die Schweiz", "Switzerland", "la Suisse", "Zürich ist in der Schweiz."],
    ["Frankreich", "France", "la France", "Ich komme aus Frankreich."],
    ["Belgien", "Belgium", "la Belgique", "Brüssel ist in Belgien."],
    ["Kanada", "Canada", "le Canada", "Julia kommt aus Kanada."],
    ["Großbritannien", "Great Britain", "la Grande-Bretagne", "Tom kommt aus Großbritannien."],
    ["die USA", "the USA", "les États-Unis", "Emma kommt aus den USA."],
    ["Spanien", "Spain", "l'Espagne", "Madrid ist in Spanien."],
    ["Italien", "Italy", "l'Italie", "Rom ist in Italien."],
    ["kommen aus", "to come from", "venir de", "Woher kommst du? — Ich komme aus Belgien."],
    ["wohnen in", "to live in", "habiter à, habiter en", "Ich wohne in Hamburg."],
    ["sprechen", "to speak", "parler", "Ich spreche Englisch und ein bisschen Deutsch."],
    ["Deutsch", "German (the language)", "l'allemand (la langue)", "Sprichst du Deutsch?"],
    ["Englisch", "English (the language)", "l'anglais (la langue)", "Lukas spricht sehr gut Englisch."],
    ["Französisch", "French (the language)", "le français (la langue)", "Ich spreche Französisch."],
    ["Spanisch", "Spanish (the language)", "l'espagnol (la langue)", "Sprechen Sie Spanisch?"],
    ["ein bisschen", "a little", "un peu", "Ich spreche ein bisschen Deutsch."],
    ["die Stadt, ¨-e", "the town, the city", "la ville", "Graz ist eine Stadt in Österreich."]
  ] },
  { id: "angabenDE", icon: "notebook-pen", title: "Personal details", title_fr: "Informations personnelles", level: "A1", words: [
    ["der Name, -n", "the name", "le nom", "Mein Name ist Lena Hoffmann."],
    ["der Vorname, -n", "the first name", "le prénom", "Mein Vorname ist Lena."],
    ["der Nachname, -n", "the surname", "le nom de famille", "Wie ist Ihr Nachname?"],
    ["heißen", "to be called", "s'appeler", "Wie heißt du? — Ich heiße Jonas."],
    ["die Adresse, -n", "the address", "l'adresse", "Wie ist Ihre Adresse?"],
    ["die Straße, -n", "the street", "la rue", "Ich wohne in der Goethestraße."],
    ["die Telefonnummer, -n", "the phone number", "le numéro de téléphone", "Wie ist deine Telefonnummer?"],
    ["das Handy, -s", "the mobile phone", "le téléphone portable", "Wie ist deine Handynummer?"],
    ["die E-Mail-Adresse, -n", "the email address", "l'adresse e-mail", "Wie ist Ihre E-Mail-Adresse?"],
    ["alt", "old", "vieux, âgé", "Wie alt bist du?"],
    ["das Jahr, -e", "the year", "l'année, l'an", "Ich bin neunzehn Jahre alt."],
    ["buchstabieren", "to spell", "épeler", "Können Sie das bitte buchstabieren?"],
    ["das Formular, -e", "the form", "le formulaire", "Bitte schreiben Sie Ihren Namen in das Formular."],
    ["der Beruf, -e", "the job, the profession", "le métier, la profession", "Was sind Sie von Beruf?"],
    ["die Sprache, -n", "the language", "la langue", "Welche Sprachen sprichst du?"],
    ["Herr", "Mr", "monsieur", "Guten Tag, Herr Becker!"],
    ["Frau", "Mrs, Ms; woman", "madame ; femme", "Guten Abend, Frau Wolf!"],
    ["wie", "how", "comment", "Wie heißen Sie?"],
    ["woher", "where from", "d'où", "Woher kommen Sie?"],
    ["wo", "where", "où", "Wo wohnst du?"]
  ] },
  { id: "zahlenDE", icon: "calculator", title: "Numbers from 0 to 20", title_fr: "Les nombres de 0 à 20", level: "A1", words: [
    ["null", "zero", "zéro", "Meine Nummer beginnt mit null."],
    ["eins", "one", "un", "Eins, zwei, drei, los!"],
    ["zwei", "two (on the phone, often zwo)", "deux (au téléphone, souvent zwo)", "Zwei Kaffee, bitte."],
    ["drei", "three", "trois", "Wir sind drei."],
    ["vier", "four", "quatre", "Das Zimmer hat vier Fenster."],
    ["fünf", "five", "cinq", "Das kostet fünf Euro."],
    ["sechs", "six", "six", "Ich habe sechs Bücher."],
    ["sieben", "seven", "sept", "Das Frühstück beginnt um sieben Uhr."],
    ["acht", "eight", "huit", "Zimmer acht, bitte."],
    ["neun", "nine", "neuf", "Es ist neun Uhr."],
    ["zehn", "ten", "dix", "Zehn Minuten, bitte."],
    ["elf", "eleven", "onze", "Der Bus elf fährt zum Bahnhof."],
    ["zwölf", "twelve", "douze", "Zwölf Eier, bitte."],
    ["dreizehn", "thirteen", "treize", "Sie ist dreizehn Jahre alt."],
    ["vierzehn", "fourteen", "quatorze", "Wir haben vierzehn Tage Urlaub."],
    ["fünfzehn", "fifteen", "quinze", "Fünfzehn Studenten sind hier."],
    ["sechzehn", "sixteen (sechs loses its s)", "seize (sechs perd son s)", "Er ist sechzehn."],
    ["siebzehn", "seventeen (sieben loses -en)", "dix-sept (sieben perd -en)", "Zimmer siebzehn ist frei."],
    ["achtzehn", "eighteen", "dix-huit", "Mit achtzehn Jahren darf man wählen."],
    ["neunzehn", "nineteen", "dix-neuf", "Das macht neunzehn Euro."],
    ["zwanzig", "twenty", "vingt", "Es ist zwanzig Minuten zu Fuß."]
  ] });

  W.LESSONS.push(
  {
    id: 1, level: "A1", kind: "functional", icon: "hand",
    title: "Everyday German: hello, goodbye, du or Sie?", title_fr: "L'allemand de tous les jours : saluer, du ou Sie ?",
    subtitle: "Greet people at any time of day, introduce yourself and choose between du and Sie.", subtitle_fr: "Saluer à tout moment de la journée, te présenter et choisir entre du et Sie.",
    body: `
<h2>Saying hello</h2>
<table>
<tr><th>German</th><th>When</th></tr>
<tr><td><s-de>Hallo!</s-de></td><td>Hi, hello: with friends, family, colleagues, and in many shops.</td></tr>
<tr><td><s-de>Guten Morgen!</s-de></td><td>Good morning: until about 11 am.</td></tr>
<tr><td><s-de>Guten Tag!</s-de></td><td>Hello: during the day, in more formal situations.</td></tr>
<tr><td><s-de>Guten Abend!</s-de></td><td>Good evening: from about 6 pm.</td></tr>
</table>
<p>Greetings change with the region. In northern Germany you'll hear <s-de>Moin!</s-de> at any time of day; in southern Germany and in Austria, <s-de>Grüß Gott!</s-de>, and among friends <s-de>Servus!</s-de>, which means both hi and bye.</p>
<h2>Saying goodbye</h2>
<p><s-de>Tschüss!</s-de> (bye) · <s-de>Auf Wiedersehen!</s-de> (goodbye, more formal) · <s-de>Bis bald!</s-de> (see you soon) · <s-de>Bis morgen!</s-de> (see you tomorrow) · <s-de>Schönen Tag noch!</s-de> (have a nice day) · <s-de>Gute Nacht!</s-de> (good night: only when someone is going to bed)</p>
<h2>Du or Sie?</h2>
<p>German has two words for "you" when you speak to one person. <s-de>du</s-de> is informal: friends, family, children, and often colleagues or young people among themselves. <s-de>Sie</s-de> is formal: people you don't know, in a shop, an office or a hotel. Formal <s-de>Sie</s-de> always takes a capital S, and its verb is the same as for "they": <s-de>Sie kommen</s-de>.</p>
<p>Not sure? Use <s-de>Sie</s-de>. The other person may then suggest: <s-de>Wir können uns duzen.</s-de> (We can say du.)</p>
<table>
<tr><th></th><th>With du</th><th>With Sie</th></tr>
<tr><td>How are you?</td><td><s-de>Wie geht's?</s-de></td><td><s-de>Wie geht es Ihnen?</s-de></td></tr>
<tr><td>What's your name?</td><td><s-de>Wie heißt du?</s-de></td><td><s-de>Wie heißen Sie?</s-de></td></tr>
<tr><td>And you? (after How are you?)</td><td><s-de>Und dir?</s-de></td><td><s-de>Und Ihnen?</s-de></td></tr>
</table>
<h2>Answering, and saying who you are</h2>
<p><s-de>Gut, danke.</s-de> · <s-de>Sehr gut!</s-de> · <s-de>Es geht.</s-de> (so-so) · <s-de>Nicht so gut.</s-de> · <s-de>Ich heiße Lena.</s-de> (my name is Lena) · <s-de>Ich bin Lena.</s-de> (I'm Lena) · <s-de>Mein Name ist Lena Hoffmann.</s-de> · <s-de>Freut mich!</s-de> (nice to meet you)</p>
<div class="tip">In German, every noun starts with a capital letter: <s-de>der Tag</s-de>, <s-de>die Stadt</s-de>, <s-de>das Jahr</s-de>. It's a great help when you read: you see the nouns at once.</div>
`,
    body_fr: `
<h2>Dire bonjour</h2>
<table>
<tr><th>Allemand</th><th>Quand</th></tr>
<tr><td><s-de>Hallo!</s-de></td><td>Salut, bonjour : avec les amis, la famille, les collègues, et dans beaucoup de magasins.</td></tr>
<tr><td><s-de>Guten Morgen!</s-de></td><td>Bonjour le matin : jusque vers 11 h.</td></tr>
<tr><td><s-de>Guten Tag!</s-de></td><td>Bonjour : dans la journée, dans les situations plus formelles.</td></tr>
<tr><td><s-de>Guten Abend!</s-de></td><td>Bonsoir : à partir de 18 h environ.</td></tr>
</table>
<p>Les salutations changent selon les régions. Dans le nord de l'Allemagne, on entend <s-de>Moin!</s-de> à toute heure de la journée ; dans le sud de l'Allemagne et en Autriche, <s-de>Grüß Gott!</s-de>, et entre amis <s-de>Servus!</s-de>, qui veut dire à la fois salut et au revoir.</p>
<h2>Dire au revoir</h2>
<p><s-de>Tschüss!</s-de> (salut, au revoir) · <s-de>Auf Wiedersehen!</s-de> (au revoir, plus formel) · <s-de>Bis bald!</s-de> (à bientôt) · <s-de>Bis morgen!</s-de> (à demain) · <s-de>Schönen Tag noch!</s-de> (bonne journée) · <s-de>Gute Nacht!</s-de> (bonne nuit : seulement quand quelqu'un va se coucher)</p>
<h2>Du ou Sie ?</h2>
<p>Comme le français avec tu et vous, l'allemand a deux mots pour s'adresser à une personne. <s-de>du</s-de> correspond à tu : amis, famille, enfants, et souvent collègues ou jeunes entre eux. <s-de>Sie</s-de> correspond au vous de politesse : personnes inconnues, dans un magasin, un bureau, un hôtel. Ce <s-de>Sie</s-de> prend toujours une majuscule, et son verbe est le même que pour « ils » : <s-de>Sie kommen</s-de>.</p>
<p>Un doute ? Dis <s-de>Sie</s-de>. L'autre personne proposera peut-être : <s-de>Wir können uns duzen.</s-de> (On peut se tutoyer.)</p>
<table>
<tr><th></th><th>Avec du</th><th>Avec Sie</th></tr>
<tr><td>Ça va ? / Comment allez-vous ?</td><td><s-de>Wie geht's?</s-de></td><td><s-de>Wie geht es Ihnen?</s-de></td></tr>
<tr><td>Comment tu t'appelles ? / vous vous appelez ?</td><td><s-de>Wie heißt du?</s-de></td><td><s-de>Wie heißen Sie?</s-de></td></tr>
<tr><td>Et toi ? / Et vous ? (après « ça va ? »)</td><td><s-de>Und dir?</s-de></td><td><s-de>Und Ihnen?</s-de></td></tr>
</table>
<h2>Répondre et dire qui on est</h2>
<p><s-de>Gut, danke.</s-de> · <s-de>Sehr gut!</s-de> · <s-de>Es geht.</s-de> (couci-couça) · <s-de>Nicht so gut.</s-de> · <s-de>Ich heiße Lena.</s-de> (je m'appelle Lena) · <s-de>Ich bin Lena.</s-de> (je suis Lena) · <s-de>Mein Name ist Lena Hoffmann.</s-de> · <s-de>Freut mich!</s-de> (ça me fait plaisir de faire ta connaissance)</p>
<div class="tip">En allemand, tous les noms prennent une majuscule : <s-de>der Tag</s-de>, <s-de>die Stadt</s-de>, <s-de>das Jahr</s-de>. C'est une aide précieuse à la lecture : tu repères les noms d'un coup d'œil.</div>
`,
    examples: [
      ["Guten Morgen, Frau Weber!", "Good morning, Mrs Weber!", "Bonjour, madame Weber !"],
      ["Hallo, Finn! Wie geht's?", "Hi, Finn! How are you?", "Salut, Finn ! Ça va ?"],
      ["Gut, danke. Und dir?", "Fine, thanks. And you?", "Bien, merci. Et toi ?"],
      ["Wie geht es Ihnen?", "How are you? (formal)", "Comment allez-vous ?"],
      ["Ich heiße Jonas. Und wie heißen Sie?", "My name is Jonas. And what's your name?", "Je m'appelle Jonas. Et vous, comment vous appelez-vous ?"],
      ["Wir können uns duzen.", "We can say du to each other.", "On peut se tutoyer."],
      ["Tschüss, bis morgen!", "Bye, see you tomorrow!", "Salut, à demain !"]
    ],
    quiz: [
      { q: "You walk into a bakery in Hamburg at 9 am. You say:", q_fr: "Tu entres dans une boulangerie à Hambourg à 9 h. Tu dis :", o: ["Gute Nacht!", "Guten Morgen!", "Guten Abend!"], a: 1, ex: "Guten Morgen until about 11 am. Gute Nacht is only for bedtime.", ex_fr: "Guten Morgen jusque vers 11 h. Gute Nacht, c'est seulement au moment d'aller se coucher." },
      { q: "You speak to the new director for the first time. Which question?", q_fr: "Tu parles pour la première fois à la nouvelle directrice. Quelle question ?", o: ["Wie geht's?", "Wie heißt du?", "Wie geht es Ihnen?"], a: 2, ex: "Someone you don't know, in a formal situation: Sie.", ex_fr: "Une personne que tu ne connais pas, dans une situation formelle : Sie." },
      { q: "Formal Sie is always written…", q_fr: "Le Sie de politesse s'écrit toujours…", o: ["with a capital S", "with a small s", "with ß"], o_fr: ["avec un S majuscule", "avec un s minuscule", "avec ß"], a: 0, ex: "Formal Sie always has a capital letter, even in the middle of a sentence.", ex_fr: "Le Sie de politesse prend toujours une majuscule, même au milieu d'une phrase." },
      { q: "“Wie heißt du?” means:", q_fr: "« Wie heißt du? » veut dire :", o: ["How are you?", "What's your name?", "Where are you from?"], o_fr: ["Ça va ?", "Comment tu t'appelles ?", "D'où viens-tu ?"], a: 1, ex: "heißen = to be called.", ex_fr: "heißen = s'appeler." },
      { q: "In northern Germany, people often say hello with:", q_fr: "Dans le nord de l'Allemagne, on dit souvent bonjour avec :", o: ["Moin!", "Servus!", "Grüß Gott!"], a: 0, ex: "Moin in the north; Grüß Gott and Servus in the south and in Austria.", ex_fr: "Moin dans le nord ; Grüß Gott et Servus dans le sud et en Autriche." }
    ]
  },
  {
    id: 2, level: "A1", icon: "user-round",
    title: "Ich bin…, ich heiße…: sein, the pronouns and the present tense", title_fr: "Ich bin…, ich heiße… : sein, les pronoms et le présent",
    subtitle: "To be, and the endings of regular verbs: what you need to say who you are and where you're from.", subtitle_fr: "Être, et les terminaisons des verbes réguliers : de quoi dire qui tu es et d'où tu viens.",
    body: `
<h2>Sein (to be)</h2>
<table>
<tr><th>German</th><th>English</th></tr>
<tr><td><s-de>ich bin</s-de></td><td>I am</td></tr>
<tr><td><s-de>du bist</s-de></td><td>you are (one person, informal)</td></tr>
<tr><td><s-de>er ist</s-de> · <s-de>sie ist</s-de> · <s-de>es ist</s-de></td><td>he is · she is · it is</td></tr>
<tr><td><s-de>wir sind</s-de></td><td>we are</td></tr>
<tr><td><s-de>ihr seid</s-de></td><td>you are (several people, informal)</td></tr>
<tr><td><s-de>sie sind</s-de> · <s-de>Sie sind</s-de></td><td>they are · you are (formal)</td></tr>
</table>
<h2>Regular verbs: one stem, six endings</h2>
<p>Take the infinitive, <s-de>wohnen</s-de> (to live), remove <b>-en</b>: the stem is <s-de>wohn-</s-de>. Then add the ending of each person: <s-de>ich wohne</s-de>, <s-de>du wohnst</s-de>, <s-de>er wohnt</s-de>, <s-de>wir wohnen</s-de>, <s-de>ihr wohnt</s-de>, <s-de>sie wohnen</s-de>, <s-de>Sie wohnen</s-de>. Unlike English, every person has its own ending: listen for it.</p>
<p>The same with <s-de>kommen</s-de> (to come), <s-de>lernen</s-de> (to learn), <s-de>machen</s-de> (to do, to make) and <s-de>heißen</s-de> (to be called), where <s-de>du heißt</s-de> takes only <b>-t</b>, because of the ß. Some verbs change their vowel with du and er / sie / es: <s-de>sprechen</s-de> → <s-de>du sprichst</s-de>, <s-de>er spricht</s-de>.</p>
<h2>Questions</h2>
<p>With a question word, the word comes first and the verb second: <s-de>Wie heißt du?</s-de> · <s-de>Woher kommst du?</s-de> (where are you from?) · <s-de>Wo wohnst du?</s-de> (where do you live?) · <s-de>Was machst du?</s-de> (what do you do?). For a yes or no question, start with the verb: <s-de>Kommst du aus Berlin?</s-de> No "do" in German!</p>
<h2>Three things English speakers need to know</h2>
<p><b>1. sie = she, they, or you.</b> The verb tells you which: <s-de>sie ist</s-de> (she is), <s-de>sie sind</s-de> (they are), and with a capital letter, <s-de>Sie sind</s-de> (you are, formal).</p>
<p><b>2. The verb comes second.</b> In a statement, the conjugated verb is always the second element: <s-de>Ich wohne in Wien.</s-de> → <s-de>In Wien wohne ich.</s-de> (In Vienna I live.)</p>
<p><b>3. Countries without the.</b> Most countries take no article: <s-de>Ich komme aus Frankreich.</s-de> A few do: <s-de>aus der Schweiz</s-de>, <s-de>aus den USA</s-de>. Nationality words change with the person (<s-de>der Franzose</s-de>, <s-de>die Französin</s-de>), so beginners usually just say where they come from.</p>
<div class="tip">To say "not", put <s-de>nicht</s-de> after the verb: <s-de>Ich wohne nicht in Berlin.</s-de></div>
`,
    body_fr: `
<h2>Sein (être)</h2>
<table>
<tr><th>Allemand</th><th>Français</th></tr>
<tr><td><s-de>ich bin</s-de></td><td>je suis</td></tr>
<tr><td><s-de>du bist</s-de></td><td>tu es</td></tr>
<tr><td><s-de>er ist</s-de> · <s-de>sie ist</s-de> · <s-de>es ist</s-de></td><td>il est · elle est · il / elle est (neutre)</td></tr>
<tr><td><s-de>wir sind</s-de></td><td>nous sommes, on est</td></tr>
<tr><td><s-de>ihr seid</s-de></td><td>vous êtes (plusieurs personnes que l'on tutoie)</td></tr>
<tr><td><s-de>sie sind</s-de> · <s-de>Sie sind</s-de></td><td>ils / elles sont · vous êtes (politesse)</td></tr>
</table>
<h2>Les verbes réguliers : un radical, six terminaisons</h2>
<p>Prends l'infinitif, <s-de>wohnen</s-de> (habiter), enlève <b>-en</b> : le radical est <s-de>wohn-</s-de>. Ajoute ensuite la terminaison de chaque personne : <s-de>ich wohne</s-de>, <s-de>du wohnst</s-de>, <s-de>er wohnt</s-de>, <s-de>wir wohnen</s-de>, <s-de>ihr wohnt</s-de>, <s-de>sie wohnen</s-de>, <s-de>Sie wohnen</s-de>. Contrairement au français, presque toutes ces terminaisons s'entendent : prononce-les bien.</p>
<p>Même chose avec <s-de>kommen</s-de> (venir), <s-de>lernen</s-de> (apprendre), <s-de>machen</s-de> (faire) et <s-de>heißen</s-de> (s'appeler), où <s-de>du heißt</s-de> ne prend que <b>-t</b>, à cause du ß. Certains verbes changent de voyelle avec du et er / sie / es : <s-de>sprechen</s-de> → <s-de>du sprichst</s-de>, <s-de>er spricht</s-de>.</p>
<h2>Les questions</h2>
<p>Avec un mot interrogatif, le mot vient en premier et le verbe en deuxième : <s-de>Wie heißt du?</s-de> · <s-de>Woher kommst du?</s-de> (d'où viens-tu ?) · <s-de>Wo wohnst du?</s-de> (où habites-tu ?) · <s-de>Was machst du?</s-de> (que fais-tu ?). Pour une question fermée (oui ou non), commence par le verbe : <s-de>Kommst du aus Berlin?</s-de> Pas de « est-ce que » en allemand !</p>
<h2>Trois choses à savoir quand on parle français</h2>
<p><b>1. sie = elle, ils / elles, ou vous.</b> Le verbe indique lequel : <s-de>sie ist</s-de> (elle est), <s-de>sie sind</s-de> (ils sont), et avec une majuscule, <s-de>Sie sind</s-de> (vous êtes).</p>
<p><b>2. Le verbe en deuxième position.</b> Dans une phrase déclarative, le verbe conjugué est toujours le deuxième élément : <s-de>Ich wohne in Wien.</s-de> → <s-de>In Wien wohne ich.</s-de> (À Vienne habite je.)</p>
<p><b>3. Les pays sans article.</b> La plupart des pays n'ont pas d'article : <s-de>Ich komme aus Frankreich.</s-de> (Je viens de France.) Quelques-uns en ont un : <s-de>aus der Schweiz</s-de>, <s-de>aus den USA</s-de>. Les noms de nationalité changent selon la personne (<s-de>der Franzose</s-de>, <s-de>die Französin</s-de>) : au début, on dit simplement d'où l'on vient.</p>
<div class="tip">Pour la négation, mets <s-de>nicht</s-de> après le verbe : <s-de>Ich wohne nicht in Berlin.</s-de> (Je n'habite pas à Berlin.)</div>
`,
    examples: [
      ["Ich bin Lena, und das ist Jonas.", "I'm Lena, and this is Jonas.", "Je suis Lena, et voici Jonas."],
      ["Woher kommst du?", "Where are you from?", "D'où viens-tu ?"],
      ["Ich komme aus Frankreich, aus Lyon.", "I'm from France, from Lyon.", "Je viens de France, de Lyon."],
      ["Wo wohnen Sie?", "Where do you live? (formal)", "Où habitez-vous ?"],
      ["Wir wohnen in München.", "We live in Munich.", "Nous habitons à Munich."],
      ["Sprichst du Deutsch?", "Do you speak German?", "Tu parles allemand ?"],
      ["Paula und Elias kommen aus Österreich.", "Paula and Elias are from Austria.", "Paula et Elias viennent d'Autriche."],
      ["Ich wohne nicht in Berlin, ich wohne in Hamburg.", "I don't live in Berlin, I live in Hamburg.", "Je n'habite pas à Berlin, j'habite à Hambourg."]
    ],
    quiz: [
      { q: "Complete: “Wir ___ aus Belgien.” (kommen)", q_fr: "Complète : « Wir ___ aus Belgien. » (kommen)", o: ["kommt", "kommen", "kommst"], a: 1, ex: "wir kommen: with wir, the verb looks like the infinitive.", ex_fr: "wir kommen : avec wir, le verbe ressemble à l'infinitif." },
      { q: "“Sie sind aus Kanada” can mean:", q_fr: "« Sie sind aus Kanada » peut vouloir dire :", o: ["They are from Canada, or You are from Canada", "She is from Canada", "We are from Canada"], o_fr: ["Ils sont du Canada, ou Vous êtes du Canada", "Elle est du Canada", "Nous sommes du Canada"], a: 0, ex: "sie sind = they are; Sie sind = you are (formal). At the start of a sentence, both have a capital letter.", ex_fr: "sie sind = ils / elles sont ; Sie sind = vous êtes. En début de phrase, les deux prennent une majuscule." },
      { q: "Complete: “Du ___ sehr gut Deutsch.” (sprechen)", q_fr: "Complète : « Du ___ sehr gut Deutsch. » (sprechen)", o: ["sprechst", "sprichst", "spricht"], a: 1, ex: "sprechen changes its vowel: du sprichst, er spricht.", ex_fr: "sprechen change de voyelle : du sprichst, er spricht." },
      { q: "Which question is correct?", q_fr: "Quelle question est correcte ?", o: ["Woher du kommst?", "Woher kommst du?", "Woher kommen du?"], a: 1, ex: "The question word first, then the verb, then the subject.", ex_fr: "Le mot interrogatif d'abord, puis le verbe, puis le sujet." },
      { q: "Complete: “In Wien ___ ich.” (wohnen)", q_fr: "Complète : « In Wien ___ ich. » (wohnen)", o: ["wohne", "wohnst", "wohnen"], a: 0, ex: "The verb stays in second position, and ich takes -e.", ex_fr: "Le verbe reste en deuxième position, et ich prend -e." }
    ]
  },
  {
    id: 3, level: "A1", kind: "functional", icon: "spell-check",
    title: "Everyday German: spelling and the numbers from 0 to 20", title_fr: "L'allemand de tous les jours : épeler et compter de 0 à 20",
    subtitle: "Spell your name, say ä, ö, ü and ß, give a phone number and count to twenty.", subtitle_fr: "Épeler ton nom, dire ä, ö, ü et ß, donner un numéro de téléphone et compter jusqu'à vingt.",
    body: `
<h2>The alphabet</h2>
<p>German letters have their own names. The ones that surprise English speakers most: <s-de>A</s-de> ("ah"), <s-de>E</s-de> ("eh"), <s-de>I</s-de> ("ee"), <s-de>J</s-de> (<s-de>jott</s-de>, with a y sound), <s-de>V</s-de> (<s-de>fau</s-de>, like an f), <s-de>W</s-de> (<s-de>we</s-de>, like an English v), <s-de>Y</s-de> (<s-de>Ypsilon</s-de>), <s-de>Z</s-de> (<s-de>zett</s-de>, said "ts").</p>
<h2>Four extra letters</h2>
<table>
<tr><th>Letter</th><th>Name</th><th>Example</th></tr>
<tr><td>ä</td><td><s-de>A-Umlaut</s-de></td><td><s-de>Käse</s-de> (cheese)</td></tr>
<tr><td>ö</td><td><s-de>O-Umlaut</s-de></td><td><s-de>Österreich</s-de></td></tr>
<tr><td>ü</td><td><s-de>U-Umlaut</s-de></td><td><s-de>fünf</s-de></td></tr>
<tr><td>ß</td><td><s-de>Eszett</s-de></td><td><s-de>Straße</s-de> (street)</td></tr>
</table>
<p>ß sounds like a strong s. On a keyboard without these letters, write ae, oe, ue and ss: <s-de>Müller</s-de> becomes Mueller. This app accepts both.</p>
<h2>Numbers from 0 to 20</h2>
<p><s-de>null, eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn</s-de></p>
<p><s-de>elf, zwölf, dreizehn, vierzehn, fünfzehn, sechzehn, siebzehn, achtzehn, neunzehn, zwanzig</s-de></p>
<p>From 13, the teens are built like in English: three + ten = <s-de>dreizehn</s-de>. Two traps: <s-de>sechzehn</s-de> (16) drops the s of <s-de>sechs</s-de>, and <s-de>siebzehn</s-de> (17) drops the -en of <s-de>sieben</s-de>.</p>
<h2>Phone numbers</h2>
<p>Germans often give phone numbers digit by digit: 0151… → <s-de>null, eins, fünf, eins</s-de>. On the phone, many say <s-de>zwo</s-de> instead of <s-de>zwei</s-de>, so that it can't be mixed up with <s-de>drei</s-de>.</p>
<div class="tip">Useful questions: <s-de>Wie schreibt man das?</s-de> (How do you spell that?) · <s-de>Können Sie das bitte buchstabieren?</s-de> (Can you spell it, please?) · <s-de>Noch einmal, bitte.</s-de> (Once more, please.) · <s-de>Langsamer, bitte.</s-de> (More slowly, please.)</div>
`,
    body_fr: `
<h2>L'alphabet</h2>
<p>Les lettres allemandes ont leur propre nom. Celles qui surprennent le plus quand on parle français : <s-de>E</s-de> (« é »), <s-de>H</s-de> (<s-de>ha</s-de>, avec un h qui se prononce, comme un souffle), <s-de>J</s-de> (<s-de>jott</s-de>, prononcé « yott »), <s-de>U</s-de> (« ou »), <s-de>V</s-de> (<s-de>fau</s-de>, comme un f), <s-de>W</s-de> (<s-de>we</s-de>, prononcé « vé »), <s-de>Y</s-de> (<s-de>Ypsilon</s-de>), <s-de>Z</s-de> (<s-de>zett</s-de>, prononcé « tsett »).</p>
<h2>Quatre lettres en plus</h2>
<table>
<tr><th>Lettre</th><th>Nom</th><th>Exemple</th></tr>
<tr><td>ä</td><td><s-de>A-Umlaut</s-de></td><td><s-de>Käse</s-de> (fromage)</td></tr>
<tr><td>ö</td><td><s-de>O-Umlaut</s-de></td><td><s-de>Österreich</s-de></td></tr>
<tr><td>ü</td><td><s-de>U-Umlaut</s-de></td><td><s-de>fünf</s-de></td></tr>
<tr><td>ß</td><td><s-de>Eszett</s-de></td><td><s-de>Straße</s-de> (rue)</td></tr>
</table>
<p>Bonne nouvelle : ö et ü se prononcent à peu près comme le « eu » et le « u » du français, des sons qui posent problème à beaucoup d'apprenants, mais pas à toi. ß se prononce comme un s dur. Sur un clavier sans ces lettres, écris ae, oe, ue et ss : <s-de>Müller</s-de> devient Mueller. L'appli accepte les deux.</p>
<h2>Les nombres de 0 à 20</h2>
<p><s-de>null, eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn</s-de></p>
<p><s-de>elf, zwölf, dreizehn, vierzehn, fünfzehn, sechzehn, siebzehn, achtzehn, neunzehn, zwanzig</s-de></p>
<p>À partir de 13, on dit l'unité puis dix : trois + dix = <s-de>dreizehn</s-de>. Deux pièges : <s-de>sechzehn</s-de> (16) perd le s de <s-de>sechs</s-de>, et <s-de>siebzehn</s-de> (17) perd le -en de <s-de>sieben</s-de>.</p>
<h2>Les numéros de téléphone</h2>
<p>En Allemagne, on donne souvent les numéros chiffre par chiffre : 0151… → <s-de>null, eins, fünf, eins</s-de>. Au téléphone, beaucoup disent <s-de>zwo</s-de> au lieu de <s-de>zwei</s-de>, pour ne pas le confondre avec <s-de>drei</s-de>.</p>
<div class="tip">Questions utiles : <s-de>Wie schreibt man das?</s-de> (Comment ça s'écrit ?) · <s-de>Können Sie das bitte buchstabieren?</s-de> (Vous pouvez épeler, s'il vous plaît ?) · <s-de>Noch einmal, bitte.</s-de> (Encore une fois, s'il vous plaît.) · <s-de>Langsamer, bitte.</s-de> (Plus lentement, s'il vous plaît.)</div>
`,
    examples: [
      ["Können Sie das bitte buchstabieren?", "Can you spell it, please?", "Vous pouvez épeler, s'il vous plaît ?"],
      ["Weber: W, E, B, E, R.", "Weber: W, E, B, E, R.", "Weber : W, E, B, E, R."],
      ["Straße schreibt man mit ß.", "Straße is spelled with ß.", "Straße s'écrit avec ß."],
      ["Meine Nummer ist null, eins, sieben, zwo, drei.", "My number is 0-1-7-2-3.", "Mon numéro, c'est zéro, un, sept, deux, trois."],
      ["Hier sind sechzehn Studenten.", "There are sixteen students here.", "Il y a seize étudiants ici."],
      ["Noch einmal, bitte. Langsamer, bitte.", "Once more, please. More slowly, please.", "Encore une fois, s'il vous plaît. Plus lentement, s'il vous plaît."],
      ["Wie schreibt man das?", "How do you spell that?", "Comment ça s'écrit ?"]
    ],
    quiz: [
      { q: "How do you say 16?", q_fr: "Comment dit-on 16 ?", o: ["sechszehn", "sechzehn", "sechzig"], a: 1, ex: "16 = sechzehn: the s of sechs disappears. Sechzig is 60.", ex_fr: "16 = sechzehn : le s de sechs disparaît. Sechzig, c'est 60." },
      { q: "The German letter W sounds like…", q_fr: "La lettre allemande W se prononce comme…", o: ["an English v", "an English w", "an English f"], o_fr: ["un v français", "le w de l'anglais", "un f"], a: 0, ex: "W (we) sounds like v: Wien, wohnen. And V (fau) sounds like f.", ex_fr: "W (we) se prononce v : Wien, wohnen. Et V (fau) se prononce f." },
      { q: "Your keyboard has no ü. You write Müller as:", q_fr: "Ton clavier n'a pas de ü. Tu écris Müller :", o: ["Mueller", "Muller", "Mieller"], a: 0, ex: "ä, ö, ü → ae, oe, ue, and ß → ss.", ex_fr: "ä, ö, ü → ae, oe, ue, et ß → ss." },
      { q: "On the phone, zwei often becomes…", q_fr: "Au téléphone, zwei devient souvent…", o: ["zwo", "zwölf", "zehn"], a: 0, ex: "zwo, so that it isn't mixed up with drei.", ex_fr: "zwo, pour ne pas le confondre avec drei." },
      { q: "You ask a customer to spell their name. You say:", q_fr: "Tu demandes à un client d'épeler son nom. Tu dis :", o: ["Können Sie das bitte buchstabieren?", "Kannst du das buchstabieren?", "Buchstabieren!"], a: 0, ex: "With a customer, use Sie, and add bitte.", ex_fr: "Avec un client, on vouvoie : Sie, et on ajoute bitte." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    1: {
      gap: [["___ Morgen, Frau Weber!", "Guten", "good morning", "bonjour, le matin"], ["Wie ___ du? — Ich heiße Finn.", "heißt", "heißen"], ["Gut, danke. Und ___?", "dir", "and you, informal", "et toi"], ["Auf ___, Herr Becker!", "Wiedersehen", "goodbye", "au revoir"]],
      fix: [["Hallo, Herr Becker! Wie geht's?", "Guten Tag, Herr Becker! Wie geht es Ihnen?|Guten Morgen, Herr Becker! Wie geht es Ihnen?|Guten Abend, Herr Becker! Wie geht es Ihnen?", "With Herr or Frau, use Sie: Guten Tag and Wie geht es Ihnen?", "Avec Herr ou Frau, on vouvoie : Guten Tag et Wie geht es Ihnen ?"], ["Gute Nacht, Frau Wolf! Wie geht es Ihnen?", "Guten Abend, Frau Wolf! Wie geht es Ihnen?", "Gute Nacht is only for bedtime; to say hello in the evening: Guten Abend.", "Gute Nacht s'emploie seulement au coucher ; pour dire bonsoir : Guten Abend."]],
      task: ["Write a short dialogue (4 lines) in which you meet someone from your building for the first time.", "Écris un court dialogue (4 répliques) où tu rencontres pour la première fois une personne de ton immeuble.", "Guten Tag! Ich heiße Paula Krüger. — Guten Tag, Frau Krüger! Ich bin Tim Neumann. Freut mich! — Freut mich auch! Wie geht es Ihnen? — Gut, danke. Und Ihnen?"]
    },
    2: {
      gap: [["Ich ___ aus Frankreich.", "komme", "kommen"], ["Wo ___ du?", "wohnst", "wohnen"], ["Wir ___ in Wien.", "sind", "sein"], ["Er ___ Englisch und Deutsch.", "spricht", "sprechen"]],
      fix: [["Du heißst Jonas?", "Du heißt Jonas?", "After ß, the du ending is just -t: du heißt.", "Après ß, la terminaison de du est seulement -t : du heißt."], ["Woher du kommst?", "Woher kommst du?", "In a question, the verb comes right after the question word.", "Dans une question, le verbe vient juste après le mot interrogatif."]],
      task: ["Write four sentences about you and people you know: where you come from, where you live, which languages you speak.", "Écris quatre phrases sur toi et des personnes que tu connais : d'où vous venez, où vous habitez, quelles langues vous parlez.", "Ich komme aus Frankreich und wohne in Lille. Ich spreche Französisch und ein bisschen Deutsch. Paula kommt aus Österreich. Sie wohnt in Graz und spricht drei Sprachen."]
    },
    3: {
      gap: [["Können Sie das bitte ___?", "buchstabieren", "to spell", "épeler"], ["7 + 9 = ___", "sechzehn"], ["10 + 10 = ___", "zwanzig"], ["8 + 9 = ___", "siebzehn"]],
      fix: [["Ich bin sechszehn Jahre alt.", "Ich bin sechzehn Jahre alt.", "16 is sechzehn: the s of sechs disappears.", "16 se dit sechzehn : le s de sechs disparaît."], ["Ich bin siebenzehn Jahre alt.", "Ich bin siebzehn Jahre alt.", "17 is siebzehn: sieben loses its -en.", "17 se dit siebzehn : sieben perd son -en."]],
      task: ["Spell your first name in German, then give a phone number digit by digit (you can invent one).", "Épelle ton prénom en allemand, puis donne un numéro de téléphone chiffre par chiffre (tu peux l'inventer).", "Ich heiße Chloé: C, H, L, O, E. Meine Handynummer ist null, eins, sieben, null, zwo, drei, vier, fünf, sechs, sieben, acht."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "nachbarin", lesson: 1, level: "A1", icon: "hand", partner: "Svenja", role: "your new neighbour", role_fr: "ta nouvelle voisine",
    title: "Meeting a new neighbour", title_fr: "Rencontrer une nouvelle voisine",
    setting: "You meet your new neighbour, Svenja, on the stairs of your building in Leipzig. You don't know each other yet.", setting_fr: "Tu croises ta nouvelle voisine, Svenja, dans l'escalier de ton immeuble à Leipzig. Vous ne vous connaissez pas encore.",
    turns: [
      { p: "Hallo! Wohnen Sie auch hier?", en: "Hello! Do you live here too?", fr: "Bonjour ! Vous habitez ici aussi ?" },
      { y: ["Guten Tag! Ja, ich wohne hier. Ich heiße Alex.", "Guten Tag! Ja, ich wohnst hier. Ich heiße Alex.", "Guten Tag! Ja, ich wohne hier. Ich heißt Alex."], en: "Hello! Yes, I live here. My name is Alex.", fr: "Bonjour ! Oui, j'habite ici. Je m'appelle Alex.", why: "With ich, the ending is -e: ich wohne, ich heiße.", why_fr: "Avec ich, la terminaison est -e : ich wohne, ich heiße." },
      { p: "Freut mich, Alex! Ich bin Svenja Krause. Woher kommen Sie?", en: "Nice to meet you, Alex! I'm Svenja Krause. Where are you from?", fr: "Enchantée, Alex ! Je suis Svenja Krause. D'où venez-vous ?" },
      { y: ["Freut mich auch! Ich komme aus Frankreich, aus Nantes.", "Freut mich auch! Ich komme von Frankreich, aus Nantes.", "Freut mich auch! Ich kommen aus Frankreich, aus Nantes."], en: "Nice to meet you too! I'm from France, from Nantes.", fr: "Moi de même ! Je viens de France, de Nantes.", why: "kommen aus + country, and ich komme.", why_fr: "kommen aus + pays, et ich komme." },
      { p: "Ah, toll! Sie sprechen aber gut Deutsch!", en: "Oh, great! You speak good German!", fr: "Ah, super ! Vous parlez bien allemand !" },
      { y: ["Danke! Ich lerne Deutsch, ich spreche ein bisschen.", "Danke! Ich lerne Deutsch, ich sprecht ein bisschen.", "Danke! Ich lernst Deutsch, ich spreche ein bisschen."], en: "Thank you! I'm learning German, I speak a little.", fr: "Merci ! J'apprends l'allemand, je parle un peu.", why: "ich lerne, ich spreche: -e with ich.", why_fr: "ich lerne, ich spreche : -e avec ich." },
      { p: "Wir können uns duzen, oder? Wir sind ja Nachbarn!", en: "We can say du, can't we? We're neighbours, after all!", fr: "On peut se tutoyer, non ? On est voisins !" },
      { y: ["Ja, gern! Woher kommst du, Svenja?", "Ja, gern! Woher kommen du, Svenja?", "Ja, gern! Woher kommt du, Svenja?"], en: "Yes, gladly! Where are you from, Svenja?", fr: "Oui, avec plaisir ! D'où viens-tu, Svenja ?", why: "Now it's du: du kommst.", why_fr: "Maintenant, c'est du : du kommst." },
      { p: "Aus Dresden. Also, bis bald, Alex! Schönen Abend noch!", en: "From Dresden. Well, see you soon, Alex! Have a nice evening!", fr: "De Dresde. Bon, à bientôt, Alex ! Bonne soirée !" },
      { y: ["Danke, dir auch! Tschüss, bis bald!", "Danke, du auch! Tschüss, bis bald!", "Danke, Sie auch! Tschüss, bis bald!"], en: "Thanks, you too! Bye, see you soon!", fr: "Merci, à toi aussi ! Salut, à bientôt !", why: "You too, to someone you say du to: dir auch. Du auch is a common mistake.", why_fr: "Toi aussi, à quelqu'un qu'on tutoie : dir auch. « Du auch » est une erreur fréquente." }
    ] },
  { id: "sprachschule", lesson: 3, level: "A1", icon: "school", partner: "Herr Wagner", role: "a receptionist at a language school", role_fr: "l'accueil d'une école de langues",
    title: "Signing up for a German course", title_fr: "S'inscrire à un cours d'allemand",
    setting: "You want to sign up for a German course in Munich. Herr Wagner, at the reception desk, fills in your form.", setting_fr: "Tu veux t'inscrire à un cours d'allemand à Munich. Herr Wagner, à l'accueil, remplit ton formulaire.",
    turns: [
      { p: "Guten Morgen! Was kann ich für Sie tun?", en: "Good morning! What can I do for you?", fr: "Bonjour ! Que puis-je faire pour vous ?" },
      { y: ["Guten Morgen! Den Deutschkurs, bitte.", "Gute Morgen! Den Deutschkurs, bitte.", "Guten Morgen! Den Deutschkurs, danke."], en: "Good morning! The German course, please.", fr: "Bonjour ! Le cours d'allemand, s'il vous plaît.", why: "Guten Morgen, with -en; and bitte when you ask for something.", why_fr: "Guten Morgen, avec -en ; et bitte quand on demande quelque chose." },
      { p: "Gern. Wie ist Ihr Name, bitte?", en: "Certainly. What's your name, please?", fr: "Volontiers. Quel est votre nom, s'il vous plaît ?" },
      { y: ["Mein Name ist Camille Laurent.", "Mein Name heißt Camille Laurent.", "Ich Name ist Camille Laurent."], en: "My name is Camille Laurent.", fr: "Je m'appelle Camille Laurent.", why: "Mein Name ist… or Ich heiße…: a name doesn't call itself!", why_fr: "Mein Name ist… ou Ich heiße… : un nom ne « s'appelle » pas !" },
      { p: "Und wie alt sind Sie?", en: "And how old are you?", fr: "Et quel âge avez-vous ?" },
      { y: ["Ich bin neunzehn Jahre alt.", "Ich habe neunzehn Jahre.", "Ich bin neunzehn Jahre."], en: "I'm nineteen years old.", fr: "J'ai dix-neuf ans.", why: "For age, German uses sein, like English: ich bin neunzehn (Jahre alt), with alt at the end.", why_fr: "Pour l'âge, l'allemand utilise sein (être) : ich bin neunzehn (Jahre alt), avec alt à la fin. « Ich habe neunzehn Jahre » est un calque du français." },
      { p: "Woher kommen Sie?", en: "Where are you from?", fr: "D'où venez-vous ?" },
      { y: ["Ich komme aus Belgien, aus Lüttich.", "Ich komme aus der Belgien, aus Lüttich.", "Ich komme in Belgien, aus Lüttich."], en: "I'm from Belgium, from Liège.", fr: "Je viens de Belgique, de Liège.", why: "No article with most countries, and aus for where you come from.", why_fr: "Pas d'article devant la plupart des pays, et aus pour dire d'où l'on vient." },
      { p: "Sehr gut. Der Kurs beginnt am Montag um neun Uhr. Herzlich willkommen!", en: "Very good. The course starts on Monday at nine. A warm welcome!", fr: "Très bien. Le cours commence lundi à neuf heures. Bienvenue !" },
      { y: ["Vielen Dank! Auf Wiedersehen!", "Vielen Danke! Auf Wiedersehen!", "Viel Dank! Auf Wiedersehen!"], en: "Thank you very much! Goodbye!", fr: "Merci beaucoup ! Au revoir !", why: "A fixed phrase: vielen Dank.", why_fr: "Une formule figée : vielen Dank." }
    ] }
  );

  W.READINGS.push({
    id: "ichbinjonas", level: "A1", icon: "user-round", title: "Hallo, ich bin Jonas!", genre: "Personal story",
    intro: "Jonas introduces himself and his friends in Berlin. The verb sein, countries and languages.",
    intro_fr: "Jonas se présente, puis présente ses amis à Berlin. Le verbe sein, les pays et les langues.",
    paragraphs: [
      { de: "Hallo! Ich heiße Jonas und ich bin neunzehn Jahre alt. Ich komme aus Österreich, aus Graz, aber ich wohne jetzt in Berlin. Ich studiere Informatik.", en: "Hello! My name is Jonas and I'm nineteen. I'm from Austria, from Graz, but I live in Berlin now. I study computer science.", fr: "Salut ! Je m'appelle Jonas et j'ai dix-neuf ans. Je viens d'Autriche, de Graz, mais maintenant j'habite à Berlin. J'étudie l'informatique." },
      { de: "Das ist Merle. Sie kommt aus Hamburg und sie wohnt auch in Berlin. Merle ist Ärztin. Sie spricht Deutsch, Englisch und ein bisschen Spanisch.", en: "This is Merle. She's from Hamburg and she lives in Berlin too. Merle is a doctor. She speaks German, English and a little Spanish.", fr: "Voici Merle. Elle vient de Hambourg et elle habite aussi à Berlin. Merle est médecin. Elle parle allemand, anglais et un peu espagnol." },
      { de: "Und das sind Ole und Ronja. Sie kommen aus der Schweiz, aus Zürich. Sie sprechen Deutsch, Französisch und Englisch!", en: "And these are Ole and Ronja. They're from Switzerland, from Zurich. They speak German, French and English!", fr: "Et voici Ole et Ronja. Ils viennent de Suisse, de Zurich. Ils parlent allemand, français et anglais !" },
      { de: "Am Wochenende sind wir oft zusammen im Café. Wir sprechen Deutsch, aber Ole und Ronja sprechen manchmal Schweizerdeutsch. Das ist schwer für mich!", en: "At the weekend we're often together at the café. We speak German, but Ole and Ronja sometimes speak Swiss German. That's hard for me!", fr: "Le week-end, on est souvent ensemble au café. On parle allemand, mais Ole et Ronja parlent parfois le suisse allemand. C'est difficile pour moi !" }
    ],
    glossary: { "aber": ["but", "mais"], "jetzt": ["now", "maintenant"], "studiere": ["I study", "j'étudie"], "Informatik": ["computer science", "l'informatique"], "auch": ["too, also", "aussi"], "Ärztin": ["doctor (a woman)", "médecin (une femme)"], "Wochenende": ["weekend", "week-end"], "oft": ["often", "souvent"], "zusammen": ["together", "ensemble"], "manchmal": ["sometimes", "parfois"], "Schweizerdeutsch": ["Swiss German", "le suisse allemand"], "schwer": ["hard, difficult", "difficile"] },
    questions: [
      { q: "Woher kommt Jonas?", o: ["Aus Österreich", "Aus Berlin", "Aus der Schweiz"], a: 0 },
      { q: "Wo wohnt Jonas jetzt?", o: ["In Graz", "In Berlin", "In Hamburg"], a: 1 },
      { q: "Was ist Merle von Beruf?", o: ["Ärztin", "Studentin", "Lehrerin"], a: 0 },
      { q: "Welche Sprachen sprechen Ole und Ronja?", o: ["Deutsch, Französisch und Englisch", "Nur Deutsch", "Deutsch und Spanisch"], a: 0 },
      { q: "Was ist schwer für Jonas?", o: ["Schweizerdeutsch", "Englisch", "Informatik"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-a1-1", unit: "a1-1", level: "A1", icon: "hotel",
    title: "An der Rezeption", title_fr: "À la réception",
    context: "Malte arrives at a hotel in Vienna. Frieda, the receptionist, checks his booking.", context_fr: "Malte arrive dans un hôtel à Vienne. Frieda, à la réception, vérifie sa réservation.",
    words: [["die Reservierung", "the booking", "la réservation"], ["buchstabieren", "to spell", "épeler"], ["das Zimmer", "the room", "la chambre"], ["das Frühstück", "breakfast", "le petit-déjeuner"], ["der Aufzug", "the lift", "l'ascenseur"]],
    lines: [["Frieda", "Guten Abend und herzlich willkommen im Hotel Lindenhof!", "de-DE"], ["Malte", "Guten Abend! Ich habe eine Reservierung für zwei Nächte.", "de-DE"], ["Frieda", "Sehr gut. Wie ist Ihr Name, bitte?", "de-DE"], ["Malte", "Brandt. Malte Brandt.", "de-DE"], ["Frieda", "Können Sie das bitte buchstabieren?", "de-DE"], ["Malte", "B, R, A, N, D, T.", "de-DE"], ["Frieda", "Danke. Ah ja: Herr Brandt, zwei Nächte. Sie haben Zimmer siebzehn, im ersten Stock.", "de-DE"], ["Malte", "Entschuldigung, Zimmer siebzehn oder siebzig?", "de-DE"], ["Frieda", "Siebzehn: eins, sieben. Der Aufzug ist rechts.", "de-DE"], ["Malte", "Danke! Und wann ist das Frühstück?", "de-DE"], ["Frieda", "Von sieben bis zehn Uhr, hier im Erdgeschoss. Schönen Abend noch!", "de-DE"], ["Malte", "Danke, Ihnen auch!", "de-DE"]],
    gist: ["Warum spricht Malte mit Frieda?", ["Er kommt im Hotel an.", "Er sucht ein Restaurant.", "Er möchte ein Taxi."]],
    detail: [["Wie viele Nächte bleibt Malte?", ["Zwei", "Drei", "Eine"]], ["Welche Zimmernummer hat er?", ["Siebzehn", "Siebzig", "Sieben"]], ["Wo ist der Aufzug?", ["Rechts", "Links", "Im Erdgeschoss"]], ["Wann beginnt das Frühstück?", ["Um sieben Uhr", "Um zehn Uhr", "Um acht Uhr"]]],
    decode: ["Können Sie das bitte buchstabieren?", "Zimmer siebzehn oder siebzig?"],
    tip: "Siebzehn (17) and siebzig (70) are easy to mix up: listen to the end, -zehn or -zig. When it matters, check digit by digit: Eins, sieben?", tip_fr: "Siebzehn (17) et siebzig (70) se confondent facilement : écoute la fin, -zehn ou -zig. Quand c'est important, vérifie chiffre par chiffre : Eins, sieben?"
  }]);

  W.PROMPTS.push({ id: "de-a1-1", level: "A1", q: "Stell dich vor: dein Name, woher du kommst, wo du wohnst und welche Sprachen du sprichst.", en: "Introduce yourself: your name, where you're from, where you live and which languages you speak.", fr: "Présente-toi : ton nom, d'où tu viens, où tu habites et quelles langues tu parles.", time: 60,
    phrases: ["Ich heiße…", "Ich komme aus…", "Ich wohne in…", "Ich spreche…", "ein bisschen"],
    model: "Hallo! Ich heiße Camille. Ich komme aus Frankreich, aus Toulouse, aber ich wohne in Brüssel. Ich spreche Französisch, Englisch und ein bisschen Deutsch. Ich lerne Deutsch, das macht Spaß!" });

  W.WRITING_GUIDE["a1-1"] = { genre: "A short message to introduce yourself", genre_fr: "Un court message pour te présenter",
    plan: [["Say hello to everyone.", "Salue tout le monde."], ["Your name and where you come from.", "Ton nom et d'où tu viens."], ["Where you live and the languages you speak.", "Où tu habites et les langues que tu parles."], ["Someone close to you, in one or two sentences.", "Une personne proche, en une ou deux phrases."], ["A friendly ending.", "Une fin chaleureuse."]],
    marks: [["Hallo zusammen!", "hello to a group", "bonjour à un groupe"], ["ich komme aus Belgien", "kommen aus + country", "kommen aus + pays"], ["Ich wohne in Lüttich", "wohnen in + city", "wohnen in + ville"], ["ein bisschen Deutsch", "a little", "un peu"], ["Er spricht", "sprechen: er spricht (e → i)", "sprechen : er spricht (e → i)"], ["Bis bald,", "a friendly goodbye", "un au revoir amical"]] };

  W.COURSE.push({ id: "a1-1", level: "A1", icon: "hand", title: "Hello!", title_fr: "Bonjour !",
    intro: "Welcome to German! In this first unit, you'll learn to greet people politely, to choose between du and Sie, to say who you are and where you're from with sein and your first regular verbs, and to spell your name and count to twenty.",
    intro_fr: "Bienvenue en allemand ! Dans cette première unité, tu vas apprendre à saluer poliment, à choisir entre du et Sie, à dire qui tu es et d'où tu viens avec sein et tes premiers verbes réguliers, à épeler ton nom et à compter jusqu'à vingt.",
    can: ["Say hello and goodbye, formally and informally", "Introduce yourself: name, country, city, languages", "Use sein and the present tense of regular verbs", "Spell your name and count to 20"],
    can_fr: ["Saluer et prendre congé, de façon formelle et informelle", "Te présenter : nom, pays, ville, langues", "Utiliser sein et le présent des verbes réguliers", "Épeler ton nom et compter jusqu'à 20"],
    lessons: [1, 2, 3], vocab: ["essentielsDE", "laenderDE", "angabenDE", "zahlenDE"], reading: "ichbinjonas", prompt: "de-a1-1",
    writing: { task: "Write a short message (30-50 words) on your German class forum to introduce yourself: your name, where you're from, where you live and the languages you speak.", task_fr: "Écris un court message (30 à 50 mots) sur le forum de ton cours d'allemand pour te présenter : ton nom, d'où tu viens, où tu habites et les langues que tu parles.", words: "30-50",
      tips: ["Hallo zusammen!", "Ich heiße…", "Ich komme aus…", "Ich wohne in…", "Bis bald!"],
      checklist: ["I used the right endings (ich wohne, er wohnt…)", "The verb is in second position", "No article before most countries (aus Frankreich)", "I said hello and goodbye", "I stayed between 30 and 50 words"],
      checklist_fr: ["J'ai mis les bonnes terminaisons (ich wohne, er wohnt…)", "Le verbe est en deuxième position", "Pas d'article devant la plupart des pays (aus Frankreich)", "J'ai salué au début et à la fin", "J'ai écrit entre 30 et 50 mots"],
      model: "Hallo zusammen!\n\nIch heiße Camille und ich komme aus Belgien. Ich wohne in Lüttich. Ich spreche Französisch, Englisch und ein bisschen Deutsch. Mein Freund Lukas kommt aus Köln. Er spricht sehr gut Französisch!\n\nBis bald,\nCamille" } });
})();
