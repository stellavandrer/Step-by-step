/* Cours d'allemand, unité A1-3 « Daily life / Le quotidien » : les jours et les moments de la journée, le verbe en
   deuxième position (Am Montag arbeite ich), les verbes à particule séparable (Ich stehe um sieben auf), dire
   l'heure (halb acht = 7 h 30). Explications et traductions en anglais ET en français. Personnages fictifs.
   Faits vérifiables seulement : halb acht = 7 h 30 en allemand, « half eight » = 8 h 30 en anglais britannique ;
   viertel acht / dreiviertel acht (7 h 15 / 7 h 45) dans une partie de l'est et du sud de l'Allemagne et en
   Autriche ; l'heure officielle sur 24 heures. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "alltagDE", icon: "sun", title: "Daily routine", title_fr: "La journée", level: "A1", words: [
    ["aufstehen", "to get up", "se lever", "Ich stehe um sieben Uhr auf."],
    ["frühstücken", "to have breakfast", "prendre le petit-déjeuner", "Wir frühstücken zusammen."],
    ["duschen", "to have a shower", "se doucher", "Ich dusche am Morgen."],
    ["anfangen", "to start", "commencer", "Die Arbeit fängt um neun Uhr an."],
    ["aufhören", "to stop, to finish", "arrêter, finir", "Um fünf Uhr höre ich auf."],
    ["einkaufen", "to do the shopping", "faire les courses", "Am Samstag kaufe ich ein."],
    ["kochen", "to cook", "cuisiner, faire à manger", "Mein Mann kocht sehr gut."],
    ["zu Mittag essen", "to have lunch", "déjeuner", "Wir essen um zwölf zu Mittag."],
    ["zu Abend essen", "to have dinner", "dîner", "Um sieben essen wir zu Abend."],
    ["anrufen", "to call (on the phone)", "appeler, téléphoner", "Ich rufe meine Mutter an."],
    ["fernsehen", "to watch TV", "regarder la télé", "Am Abend sehe ich fern."],
    ["schlafen gehen", "to go to bed", "aller se coucher", "Ich gehe um elf Uhr schlafen."],
    ["müde", "tired", "fatigué", "Am Abend bin ich müde."],
    ["die Arbeit, -en", "work", "le travail", "Die Arbeit beginnt um acht."],
    ["die Schule, -n", "school", "l'école", "Die Kinder gehen in die Schule."],
    ["nach Hause", "home (going home)", "à la maison (direction)", "Um sechs gehe ich nach Hause."],
    ["zu Hause", "at home", "à la maison (lieu)", "Am Sonntag bin ich zu Hause."],
    ["mit dem Bus", "by bus", "en bus", "Ich fahre mit dem Bus zur Arbeit."]
  ] },
  { id: "wochentageDE", icon: "calendar-days", title: "Days and times of day", title_fr: "Les jours et les moments de la journée", level: "A1", words: [
    ["der Montag, -e", "Monday", "lundi", "Am Montag arbeite ich."],
    ["der Dienstag, -e", "Tuesday", "mardi", "Am Dienstag habe ich Deutschkurs."],
    ["der Mittwoch, -e", "Wednesday", "mercredi", "Am Mittwoch gehe ich schwimmen."],
    ["der Donnerstag, -e", "Thursday", "jeudi", "Am Donnerstag kommt meine Oma."],
    ["der Freitag, -e", "Friday", "vendredi", "Am Freitag gehen wir ins Kino."],
    ["der Samstag, -e", "Saturday", "samedi", "Am Samstag kaufe ich ein."],
    ["der Sonntag, -e", "Sunday", "dimanche", "Am Sonntag schlafe ich lange."],
    ["das Wochenende, -n", "the weekend", "le week-end", "Schönes Wochenende!"],
    ["der Morgen, -", "the morning", "le matin", "Am Morgen trinke ich Kaffee."],
    ["der Vormittag, -e", "the morning (before noon)", "la matinée", "Am Vormittag habe ich Unterricht."],
    ["der Mittag, -e", "noon, midday", "midi", "Am Mittag esse ich in der Kantine."],
    ["der Nachmittag, -e", "the afternoon", "l'après-midi", "Am Nachmittag gehe ich spazieren."],
    ["der Abend, -e", "the evening", "le soir", "Am Abend lese ich."],
    ["die Nacht, ¨-e", "the night", "la nuit", "In der Nacht schlafe ich."],
    ["montags", "on Mondays", "le lundi (chaque lundi)", "Montags gehe ich schwimmen."],
    ["jeden Tag", "every day", "tous les jours", "Ich lerne jeden Tag Deutsch."],
    ["früh", "early", "tôt", "Ich stehe früh auf."],
    ["spät", "late", "tard", "Es ist schon spät."],
    ["nie", "never", "jamais", "Ich sehe nie fern."]
  ] },
  { id: "uhrzeitDE", icon: "clock", title: "Telling the time", title_fr: "Dire l'heure", level: "A1", words: [
    ["Wie spät ist es?", "what time is it?", "quelle heure est-il ?", "Entschuldigung, wie spät ist es?"],
    ["Wie viel Uhr ist es?", "what time is it?", "quelle heure est-il ?", "Wie viel Uhr ist es? — Drei Uhr."],
    ["die Uhr, -en", "the clock, the watch; o'clock", "l'horloge, la montre ; heure(s)", "Es ist acht Uhr."],
    ["die Stunde, -n", "the hour (duration)", "l'heure (durée)", "Der Kurs dauert eine Stunde."],
    ["halb", "half (halb acht = 7:30)", "demi (halb acht = 7 h 30)", "Es ist halb acht."],
    ["Viertel nach", "quarter past", "et quart", "Es ist Viertel nach drei."],
    ["Viertel vor", "quarter to", "moins le quart", "Es ist Viertel vor neun."],
    ["fünf nach acht", "five past eight", "huit heures cinq", "Der Bus kommt um fünf nach acht."],
    ["zehn vor zwölf", "ten to twelve", "midi moins dix", "Es ist zehn vor zwölf."],
    ["um acht Uhr", "at eight o'clock", "à huit heures", "Der Film beginnt um acht Uhr."],
    ["von … bis …", "from … to …", "de … à …", "Ich arbeite von neun bis fünf."],
    ["der Termin, -e", "the appointment", "le rendez-vous", "Ich habe um drei einen Termin."],
    ["pünktlich", "on time, punctual", "à l'heure, ponctuel", "Der Zug ist pünktlich."],
    ["zu spät", "too late, late", "en retard, trop tard", "Entschuldigung, ich bin zu spät!"],
    ["die Pause, -n", "the break", "la pause", "Um zwölf machen wir Pause."],
    ["die Viertelstunde, -n", "a quarter of an hour", "un quart d'heure", "Der Bus kommt in einer Viertelstunde."],
    ["ungefähr", "about, around", "environ, à peu près", "Ich komme ungefähr um sechs."]
  ] });

  W.LESSONS.push(
  {
    id: 7, level: "A1", icon: "calendar-days",
    title: "Am Montag arbeite ich: days, times and the verb in second place", title_fr: "Am Montag arbeite ich : les jours, les moments et le verbe en deuxième position",
    subtitle: "Say when you do things, and keep the verb in its place when the sentence starts with a time.", subtitle_fr: "Dire quand tu fais les choses, et garder le verbe à sa place quand la phrase commence par un moment.",
    body: `
<h2>Days and parts of the day</h2>
<p><s-de>am Montag</s-de> (on Monday) · <s-de>am Wochenende</s-de> (at the weekend) · <s-de>am Morgen</s-de>, <s-de>am Vormittag</s-de>, <s-de>am Mittag</s-de>, <s-de>am Nachmittag</s-de>, <s-de>am Abend</s-de> · but <s-de>in der Nacht</s-de> (at night). With a time: <s-de>um acht Uhr</s-de> (at eight). Every Monday: <s-de>montags</s-de>, every evening: <s-de>abends</s-de>, with a small letter and -s.</p>
<h2>The verb stays second</h2>
<p>In a German statement, the conjugated verb is always the <b>second element</b>. When the sentence starts with something else than the subject, a time for example, the subject moves after the verb:</p>
<table>
<tr><th>1</th><th>2 (verb)</th><th>…</th></tr>
<tr><td><s-de>Ich</s-de></td><td><s-de>arbeite</s-de></td><td><s-de>am Montag.</s-de></td></tr>
<tr><td><s-de>Am Montag</s-de></td><td><s-de>arbeite</s-de></td><td><s-de>ich.</s-de></td></tr>
<tr><td><s-de>Um acht Uhr</s-de></td><td><s-de>frühstücken</s-de></td><td><s-de>wir.</s-de></td></tr>
</table>
<p>English never does this ("On Monday I work"), so "Am Montag ich arbeite" is the most common mistake of English speakers. Starting with a time sounds very natural in German: use it!</p>
<h2>Two spelling rules for the present tense</h2>
<p>Verbs whose stem ends in <b>-t</b> or <b>-d</b> add an <b>e</b> before -st and -t, so you can hear the ending: <s-de>arbeiten</s-de> → <s-de>du arbeitest</s-de>, <s-de>er arbeitet</s-de>; <s-de>finden</s-de> → <s-de>er findet</s-de>. Verbs whose stem ends in <b>-s</b>, <b>-ß</b> or <b>-z</b> take only -t with du: <s-de>tanzen</s-de> → <s-de>du tanzt</s-de>.</p>
<div class="tip">To say what you like doing, add <s-de>gern</s-de> after the verb: <s-de>Ich lese gern.</s-de> (I like reading.) <s-de>Ich koche nicht gern.</s-de> (I don't like cooking.)</div>
`,
    body_fr: `
<h2>Les jours et les moments de la journée</h2>
<p><s-de>am Montag</s-de> (lundi, ce lundi-là) · <s-de>am Wochenende</s-de> (le week-end) · <s-de>am Morgen</s-de>, <s-de>am Vormittag</s-de>, <s-de>am Mittag</s-de>, <s-de>am Nachmittag</s-de>, <s-de>am Abend</s-de> · mais <s-de>in der Nacht</s-de> (la nuit). Avec une heure : <s-de>um acht Uhr</s-de> (à huit heures). Tous les lundis : <s-de>montags</s-de>, tous les soirs : <s-de>abends</s-de>, avec une minuscule et un -s.</p>
<h2>Le verbe reste en deuxième position</h2>
<p>Dans une phrase déclarative allemande, le verbe conjugué est toujours le <b>deuxième élément</b>. Quand la phrase commence par autre chose que le sujet, par exemple un moment, le sujet passe après le verbe :</p>
<table>
<tr><th>1</th><th>2 (verbe)</th><th>…</th></tr>
<tr><td><s-de>Ich</s-de></td><td><s-de>arbeite</s-de></td><td><s-de>am Montag.</s-de></td></tr>
<tr><td><s-de>Am Montag</s-de></td><td><s-de>arbeite</s-de></td><td><s-de>ich.</s-de></td></tr>
<tr><td><s-de>Um acht Uhr</s-de></td><td><s-de>frühstücken</s-de></td><td><s-de>wir.</s-de></td></tr>
</table>
<p>En français, on dit « Lundi, je travaille » : le sujet reste devant le verbe. En allemand, c'est « Lundi travaille je ». « Am Montag ich arbeite » est l'erreur la plus fréquente des francophones. Commencer par un moment est très naturel en allemand : n'hésite pas !</p>
<h2>Deux règles d'orthographe au présent</h2>
<p>Les verbes dont le radical se termine par <b>-t</b> ou <b>-d</b> ajoutent un <b>e</b> devant -st et -t, pour qu'on entende la terminaison : <s-de>arbeiten</s-de> → <s-de>du arbeitest</s-de>, <s-de>er arbeitet</s-de> ; <s-de>finden</s-de> → <s-de>er findet</s-de>. Les verbes dont le radical se termine par <b>-s</b>, <b>-ß</b> ou <b>-z</b> ne prennent que -t avec du : <s-de>tanzen</s-de> → <s-de>du tanzt</s-de>.</p>
<div class="tip">Pour dire ce que tu aimes faire, ajoute <s-de>gern</s-de> après le verbe : <s-de>Ich lese gern.</s-de> (J'aime lire.) <s-de>Ich koche nicht gern.</s-de> (Je n'aime pas cuisiner.)</div>
`,
    examples: [
      ["Am Montag arbeite ich von neun bis fünf.", "On Monday I work from nine to five.", "Le lundi, je travaille de neuf heures à dix-sept heures."],
      ["Um acht Uhr frühstücken wir.", "We have breakfast at eight.", "Nous prenons le petit-déjeuner à huit heures."],
      ["Am Wochenende schlafe ich lange.", "At the weekend I sleep in.", "Le week-end, je fais la grasse matinée."],
      ["Montags gehe ich schwimmen.", "On Mondays I go swimming.", "Le lundi, je vais nager."],
      ["Arbeitest du heute?", "Are you working today?", "Tu travailles aujourd'hui ?"],
      ["Ich lese gern, aber ich koche nicht gern.", "I like reading, but I don't like cooking.", "J'aime lire, mais je n'aime pas cuisiner."],
      ["In der Nacht ist es hier sehr ruhig.", "At night it's very quiet here.", "La nuit, c'est très calme ici."]
    ],
    quiz: [
      { q: "Which sentence is correct?", q_fr: "Quelle phrase est correcte ?", o: ["Am Montag ich arbeite.", "Am Montag arbeite ich.", "Am Montag arbeiten ich."], a: 1, ex: "The verb stays second; the subject comes after it.", ex_fr: "Le verbe reste en deuxième position ; le sujet passe après." },
      { q: "Complete: “Er ___ in Berlin.” (arbeiten)", q_fr: "Complète : « Er ___ in Berlin. » (arbeiten)", o: ["arbeitt", "arbeitet", "arbeit"], a: 1, ex: "Stem in -t: an extra e, er arbeitet.", ex_fr: "Radical en -t : un e en plus, er arbeitet." },
      { q: "“At night” is:", q_fr: "« La nuit » se dit :", o: ["am Nacht", "in der Nacht", "um Nacht"], a: 1, ex: "am Morgen, am Abend, but in der Nacht.", ex_fr: "am Morgen, am Abend, mais in der Nacht." },
      { q: "“Every Sunday” is:", q_fr: "« Tous les dimanches » se dit :", o: ["sonntags", "am Sonntags", "Sonntag"], a: 0, ex: "sonntags, with a small letter and -s.", ex_fr: "sonntags, avec une minuscule et un -s." },
      { q: "“I like cooking.”", q_fr: "« J'aime cuisiner. »", o: ["Ich koche gern.", "Ich gern koche.", "Ich mag kochen gern."], a: 0, ex: "gern comes after the verb.", ex_fr: "gern vient après le verbe." }
    ]
  },
  {
    id: 8, level: "A1", icon: "alarm-clock",
    title: "Ich stehe um sieben auf: separable verbs", title_fr: "Ich stehe um sieben auf : les verbes à particule séparable",
    subtitle: "Aufstehen, einkaufen, anrufen: the little word that jumps to the end of the sentence.", subtitle_fr: "Aufstehen, einkaufen, anrufen : la petite particule qui saute à la fin de la phrase.",
    body: `
<h2>One verb, two pieces</h2>
<p>Many everyday verbs start with a little word, a <b>prefix</b>: <s-de>auf|stehen</s-de> (to get up), <s-de>ein|kaufen</s-de> (to do the shopping), <s-de>an|rufen</s-de> (to call), <s-de>fern|sehen</s-de> (to watch TV), <s-de>an|fangen</s-de> (to start), <s-de>auf|hören</s-de> (to stop). In the present tense, the verb goes second as usual, and the prefix goes to <b>the very end</b> of the sentence:</p>
<table>
<tr><th>Infinitive</th><th>Sentence</th></tr>
<tr><td><s-de>aufstehen</s-de></td><td><s-de>Ich stehe um sieben Uhr auf.</s-de></td></tr>
<tr><td><s-de>einkaufen</s-de></td><td><s-de>Am Samstag kaufen wir im Supermarkt ein.</s-de></td></tr>
<tr><td><s-de>anrufen</s-de></td><td><s-de>Rufst du deine Mutter an?</s-de></td></tr>
<tr><td><s-de>fernsehen</s-de></td><td><s-de>Er sieht jeden Abend fern.</s-de></td></tr>
</table>
<p>It works a bit like English phrasal verbs (to get up, to call back), except that German sends the little word right to the end, however long the sentence is. Germans call this the "sentence bracket": the two pieces of the verb frame the rest.</p>
<h2>How to recognise them</h2>
<p>The prefix is stressed: <s-de>AUFstehen</s-de>, <s-de>EINkaufen</s-de>. Frequent separable prefixes: <s-de>an-</s-de>, <s-de>auf-</s-de>, <s-de>aus-</s-de>, <s-de>ein-</s-de>, <s-de>mit-</s-de>, <s-de>zu-</s-de>, <s-de>fern-</s-de>. But <s-de>be-</s-de>, <s-de>ver-</s-de>, <s-de>er-</s-de> are never separated and never stressed: <s-de>Ich verstehe.</s-de> · <s-de>Ich bezahle.</s-de></p>
<p>Irregular verbs stay irregular with a prefix: <s-de>fernsehen</s-de> → <s-de>er sieht fern</s-de>; <s-de>anfangen</s-de> → <s-de>der Film fängt an</s-de>.</p>
<div class="tip">In a dictionary, look up the whole verb, prefix included: <s-de>Ich rufe dich an</s-de> is under <s-de>anrufen</s-de>, not under <s-de>rufen</s-de> (to shout). Always read German sentences to the end before you translate!</div>
`,
    body_fr: `
<h2>Un verbe en deux morceaux</h2>
<p>Beaucoup de verbes du quotidien commencent par une petite particule : <s-de>auf|stehen</s-de> (se lever), <s-de>ein|kaufen</s-de> (faire les courses), <s-de>an|rufen</s-de> (appeler), <s-de>fern|sehen</s-de> (regarder la télé), <s-de>an|fangen</s-de> (commencer), <s-de>auf|hören</s-de> (arrêter). Au présent, le verbe se met en deuxième position comme d'habitude, et la particule part <b>tout à la fin</b> de la phrase :</p>
<table>
<tr><th>Infinitif</th><th>Phrase</th></tr>
<tr><td><s-de>aufstehen</s-de></td><td><s-de>Ich stehe um sieben Uhr auf.</s-de></td></tr>
<tr><td><s-de>einkaufen</s-de></td><td><s-de>Am Samstag kaufen wir im Supermarkt ein.</s-de></td></tr>
<tr><td><s-de>anrufen</s-de></td><td><s-de>Rufst du deine Mutter an?</s-de></td></tr>
<tr><td><s-de>fernsehen</s-de></td><td><s-de>Er sieht jeden Abend fern.</s-de></td></tr>
</table>
<p>Le français n'a rien de tel : c'est un peu comme si l'on disait « je lève me à sept heures ». Les Allemands parlent de « parenthèse » (Satzklammer) : les deux morceaux du verbe encadrent le reste de la phrase, aussi longue soit-elle.</p>
<h2>Comment les reconnaître</h2>
<p>La particule est accentuée : <s-de>AUFstehen</s-de>, <s-de>EINkaufen</s-de>. Particules séparables fréquentes : <s-de>an-</s-de>, <s-de>auf-</s-de>, <s-de>aus-</s-de>, <s-de>ein-</s-de>, <s-de>mit-</s-de>, <s-de>zu-</s-de>, <s-de>fern-</s-de>. En revanche, <s-de>be-</s-de>, <s-de>ver-</s-de>, <s-de>er-</s-de> ne se séparent jamais et ne sont jamais accentués : <s-de>Ich verstehe.</s-de> · <s-de>Ich bezahle.</s-de></p>
<p>Les verbes irréguliers restent irréguliers avec une particule : <s-de>fernsehen</s-de> → <s-de>er sieht fern</s-de> ; <s-de>anfangen</s-de> → <s-de>der Film fängt an</s-de>.</p>
<div class="tip">Dans le dictionnaire, cherche le verbe entier, particule comprise : <s-de>Ich rufe dich an</s-de> se trouve à <s-de>anrufen</s-de> (appeler au téléphone), pas à <s-de>rufen</s-de> (crier). Lis toujours une phrase allemande jusqu'au bout avant de la traduire !</div>
`,
    examples: [
      ["Ich stehe jeden Tag um halb sieben auf.", "I get up at half past six every day.", "Je me lève tous les jours à six heures et demie."],
      ["Wann fängt der Film an?", "When does the film start?", "Quand le film commence-t-il ?"],
      ["Am Samstag kaufe ich auf dem Markt ein.", "On Saturday I do my shopping at the market.", "Le samedi, je fais mes courses au marché."],
      ["Ich rufe dich heute Abend an.", "I'll call you this evening.", "Je t'appelle ce soir."],
      ["Siehst du oft fern?", "Do you often watch TV?", "Tu regardes souvent la télé ?"],
      ["Um sechs Uhr hört Katrin mit der Arbeit auf.", "Katrin finishes work at six.", "Katrin finit le travail à six heures."],
      ["Entschuldigung, ich verstehe das nicht.", "Sorry, I don't understand.", "Excusez-moi, je ne comprends pas."]
    ],
    quiz: [
      { q: "Which sentence is correct?", q_fr: "Quelle phrase est correcte ?", o: ["Ich aufstehe um sieben.", "Ich stehe um sieben auf.", "Ich stehe auf um sieben."], a: 1, ex: "The verb second, the prefix at the very end.", ex_fr: "Le verbe en deuxième position, la particule tout à la fin." },
      { q: "Complete: “Er ___ jeden Abend ___.” (fernsehen)", q_fr: "Complète : « Er ___ jeden Abend ___. » (fernsehen)", o: ["sieht … fern", "fernsieht …", "seht … fern"], a: 0, ex: "sehen is irregular: er sieht; fern goes to the end.", ex_fr: "sehen est irrégulier : er sieht ; fern part à la fin." },
      { q: "Which verb is NOT separable?", q_fr: "Quel verbe n'est PAS séparable ?", o: ["anrufen", "verstehen", "einkaufen"], a: 1, ex: "ver- is never separated: ich verstehe.", ex_fr: "ver- ne se sépare jamais : ich verstehe." },
      { q: "“Ich rufe dich an” is in the dictionary under:", q_fr: "« Ich rufe dich an » se trouve dans le dictionnaire à :", o: ["rufen", "anrufen", "an"], a: 1, ex: "Look up the whole verb: anrufen, to call.", ex_fr: "Cherche le verbe entier : anrufen, appeler." },
      { q: "Where is the stress in “einkaufen”?", q_fr: "Où est l'accent dans « einkaufen » ?", o: ["EINkaufen", "einKAUfen", "einkauFEN"], a: 0, ex: "Separable prefixes are stressed.", ex_fr: "Les particules séparables sont accentuées." }
    ]
  },
  {
    id: 9, level: "A1", kind: "functional", icon: "clock",
    title: "Everyday German: telling the time", title_fr: "L'allemand de tous les jours : dire l'heure",
    subtitle: "Ask the time, give it the official way and the everyday way, and never be an hour late because of halb.", subtitle_fr: "Demander l'heure, la donner de façon officielle et de façon courante, et ne jamais arriver en retard à cause de halb.",
    body: `
<h2>Asking</h2>
<p><s-de>Wie spät ist es?</s-de> · <s-de>Wie viel Uhr ist es?</s-de> (What time is it?) · <s-de>Um wie viel Uhr…?</s-de> / <s-de>Wann…?</s-de> (At what time…? When…?) — <s-de>Es ist drei Uhr.</s-de> · <s-de>Um drei.</s-de></p>
<h2>The official time</h2>
<p>Timetables, the radio and the news use the 24-hour clock: 19:30 → <s-de>neunzehn Uhr dreißig</s-de>, 8:05 → <s-de>acht Uhr fünf</s-de>.</p>
<h2>The everyday time</h2>
<table>
<tr><th>Time</th><th>German</th></tr>
<tr><td>3:00</td><td><s-de>drei Uhr</s-de> · <s-de>drei</s-de></td></tr>
<tr><td>3:05</td><td><s-de>fünf nach drei</s-de></td></tr>
<tr><td>3:15</td><td><s-de>Viertel nach drei</s-de></td></tr>
<tr><td>3:30</td><td><s-de>halb vier</s-de></td></tr>
<tr><td>3:45</td><td><s-de>Viertel vor vier</s-de></td></tr>
<tr><td>3:50</td><td><s-de>zehn vor vier</s-de></td></tr>
</table>
<p><b>The trap:</b> <s-de>halb vier</s-de> means "half way to four", so 3:30. In British English, "half four" means 4:30: a German and an English person agreeing to meet at <s-de>halb vier</s-de> / "half four" will miss each other by an hour! Around the half hour, Germans also say <s-de>fünf vor halb vier</s-de> (3:25) and <s-de>fünf nach halb vier</s-de> (3:35).</p>
<p>In parts of eastern and southern Germany and in Austria, you'll also hear <s-de>viertel vier</s-de> (3:15) and <s-de>dreiviertel vier</s-de> (3:45). If in doubt, ask: <s-de>Also um Viertel nach drei?</s-de></p>
<div class="tip">From... to: <s-de>von neun bis fünf</s-de>. About: <s-de>ungefähr um sechs</s-de>, <s-de>gegen sechs</s-de>. And Germans value punctuality: if you're going to be late, a quick message is appreciated: <s-de>Ich bin zehn Minuten zu spät, sorry!</s-de></div>
`,
    body_fr: `
<h2>Demander l'heure</h2>
<p><s-de>Wie spät ist es?</s-de> · <s-de>Wie viel Uhr ist es?</s-de> (Quelle heure est-il ?) · <s-de>Um wie viel Uhr…?</s-de> / <s-de>Wann…?</s-de> (À quelle heure… ? Quand… ?) — <s-de>Es ist drei Uhr.</s-de> · <s-de>Um drei.</s-de></p>
<h2>L'heure officielle</h2>
<p>Comme en France, les horaires, la radio et les informations utilisent les 24 heures : 19 h 30 → <s-de>neunzehn Uhr dreißig</s-de>, 8 h 05 → <s-de>acht Uhr fünf</s-de>.</p>
<h2>L'heure de tous les jours</h2>
<table>
<tr><th>Heure</th><th>Allemand</th></tr>
<tr><td>3 h</td><td><s-de>drei Uhr</s-de> · <s-de>drei</s-de></td></tr>
<tr><td>3 h 05</td><td><s-de>fünf nach drei</s-de></td></tr>
<tr><td>3 h 15</td><td><s-de>Viertel nach drei</s-de></td></tr>
<tr><td>3 h 30</td><td><s-de>halb vier</s-de></td></tr>
<tr><td>3 h 45</td><td><s-de>Viertel vor vier</s-de></td></tr>
<tr><td>3 h 50</td><td><s-de>zehn vor vier</s-de></td></tr>
</table>
<p><b>Le piège :</b> <s-de>halb vier</s-de> veut dire « à mi-chemin de quatre heures », donc 3 h 30, et non « quatre heures et demie ». C'est l'erreur classique des francophones : on arrive avec une heure de retard ! Autour de la demie, on dit aussi <s-de>fünf vor halb vier</s-de> (3 h 25) et <s-de>fünf nach halb vier</s-de> (3 h 35).</p>
<p>Dans une partie de l'est et du sud de l'Allemagne et en Autriche, on entend aussi <s-de>viertel vier</s-de> (3 h 15) et <s-de>dreiviertel vier</s-de> (3 h 45). En cas de doute, demande : <s-de>Also um Viertel nach drei?</s-de></p>
<div class="tip">De… à… : <s-de>von neun bis fünf</s-de>. Vers : <s-de>ungefähr um sechs</s-de>, <s-de>gegen sechs</s-de>. Et la ponctualité compte beaucoup en Allemagne : si tu vas être en retard, un petit message est apprécié : <s-de>Ich bin zehn Minuten zu spät, sorry!</s-de></div>
`,
    examples: [
      ["Entschuldigung, wie spät ist es?", "Excuse me, what time is it?", "Excusez-moi, quelle heure est-il ?"],
      ["Es ist halb acht.", "It's half past seven.", "Il est sept heures et demie."],
      ["Der Zug fährt um neunzehn Uhr dreißig.", "The train leaves at 19:30.", "Le train part à dix-neuf heures trente."],
      ["Wir treffen uns um Viertel nach drei.", "We're meeting at a quarter past three.", "On se retrouve à trois heures et quart."],
      ["Der Kurs ist von neun bis halb elf.", "The class is from nine to half past ten.", "Le cours a lieu de neuf heures à dix heures et demie."],
      ["Es ist zehn vor zwölf.", "It's ten to twelve.", "Il est midi moins dix."],
      ["Ich bin zehn Minuten zu spät, sorry!", "I'm ten minutes late, sorry!", "J'ai dix minutes de retard, pardon !"]
    ],
    quiz: [
      { q: "“Es ist halb sechs.” What time is it?", q_fr: "« Es ist halb sechs. » Quelle heure est-il ?", o: ["6:30", "5:30", "6:00"], o_fr: ["6 h 30", "5 h 30", "6 h"], a: 1, ex: "halb sechs = half way to six: 5:30.", ex_fr: "halb sechs = à mi-chemin de six heures : 5 h 30." },
      { q: "8:45 is:", q_fr: "8 h 45 se dit :", o: ["Viertel nach acht", "Viertel vor neun", "halb neun"], a: 1, ex: "A quarter to nine: Viertel vor neun.", ex_fr: "Neuf heures moins le quart : Viertel vor neun." },
      { q: "On the radio you hear “zwanzig Uhr fünfzehn”. It's:", q_fr: "À la radio, tu entends « zwanzig Uhr fünfzehn ». Il est :", o: ["8:15 pm", "8:50 pm", "2:15 pm"], o_fr: ["20 h 15", "20 h 50", "14 h 15"], a: 0, ex: "The official 24-hour time: 20:15.", ex_fr: "L'heure officielle sur 24 heures : 20 h 15." },
      { q: "How do you ask the time?", q_fr: "Comment demander l'heure ?", o: ["Wie spät ist es?", "Wie Uhr ist es?", "Wann ist es?"], a: 0, ex: "Wie spät ist es? or Wie viel Uhr ist es?", ex_fr: "Wie spät ist es? ou Wie viel Uhr ist es?" },
      { q: "“fünf vor halb drei” is:", q_fr: "« fünf vor halb drei », c'est :", o: ["2:25", "2:55", "3:25"], o_fr: ["2 h 25", "2 h 55", "3 h 25"], a: 0, ex: "halb drei = 2:30, five minutes before: 2:25.", ex_fr: "halb drei = 2 h 30, cinq minutes avant : 2 h 25." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    7: {
      gap: [["Am Montag ___ ich. (arbeiten)", "arbeite"], ["Um acht Uhr ___ wir. (frühstücken)", "frühstücken"], ["Er ___ in München. (arbeiten)", "arbeitet"], ["___ der Nacht schlafe ich.", "In", "at", "pendant (la nuit)"]],
      fix: [["Am Sonntag ich schlafe lange.", "Am Sonntag schlafe ich lange.", "The verb stays second: after Am Sonntag comes the verb, then ich.", "Le verbe reste en deuxième position : après Am Sonntag vient le verbe, puis ich."], ["Ich gern lese.", "Ich lese gern.", "gern comes after the verb.", "gern se place après le verbe."]],
      task: ["Write four sentences about your week, each starting with a day or a time of day.", "Écris quatre phrases sur ta semaine, chacune commençant par un jour ou un moment de la journée.", "Am Montag arbeite ich von neun bis fünf. Am Mittwoch gehe ich schwimmen. Am Freitagabend koche ich für meine Freunde. Am Sonntag schlafe ich lange."]
    },
    8: {
      gap: [["Ich stehe um sieben Uhr ___.", "auf", "aufstehen"], ["Am Samstag kaufen wir ___.", "ein", "einkaufen"], ["Er ___ jeden Abend fern.", "sieht", "fernsehen"], ["Wann fängt der Film ___?", "an", "anfangen"]],
      fix: [["Ich anrufe meine Mutter.", "Ich rufe meine Mutter an.", "Separable verb: the verb second, the prefix at the very end.", "Verbe séparable : le verbe en deuxième position, la particule tout à la fin."], ["Er fernseht jeden Abend.", "Er sieht jeden Abend fern.", "sehen is irregular (er sieht), and fern goes to the end.", "sehen est irrégulier (er sieht), et fern part à la fin."]],
      task: ["Describe your morning in four sentences, with at least two separable verbs.", "Décris ta matinée en quatre phrases, avec au moins deux verbes séparables.", "Ich stehe um halb sieben auf. Dann dusche ich und frühstücke. Um acht fängt meine Arbeit an. Am Mittag rufe ich oft meine Schwester an."]
    },
    9: {
      gap: [["7:30 = Es ist ___ acht.", "halb"], ["9:15 = Es ist Viertel ___ neun.", "nach"], ["10:45 = Es ist Viertel ___ elf.", "vor"], ["Wie ___ ist es? — Drei Uhr.", "spät", "late (what time)", "tard (quelle heure)"]],
      fix: [["Es ist halb acht. (8:30)", "Es ist halb neun.", "8:30 is half way to nine: halb neun.", "8 h 30, c'est à mi-chemin de neuf heures : halb neun."], ["Es ist Viertel nach sieben. (6:45)", "Es ist Viertel vor sieben.", "6:45 is a quarter to seven: Viertel vor sieben.", "6 h 45, c'est sept heures moins le quart : Viertel vor sieben."]],
      task: ["Write your timetable for a typical day, with five times, in the everyday way.", "Écris l'emploi du temps d'une journée type, avec cinq heures, de façon courante.", "Um halb sieben stehe ich auf. Um Viertel nach sieben frühstücke ich. Von acht bis zwölf arbeite ich. Um eins esse ich zu Mittag. Um halb elf gehe ich schlafen."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "verabredung", lesson: 8, level: "A1", icon: "calendar-days", partner: "Florian", role: "a friend", role_fr: "un ami",
    title: "Finding a time to meet", title_fr: "Trouver un moment pour se voir",
    setting: "Your friend Florian sends you a voice message: he'd like to go swimming with you this week.", setting_fr: "Ton ami Florian t'envoie un message vocal : il aimerait aller nager avec toi cette semaine.",
    turns: [
      { p: "Hey! Wollen wir diese Woche zusammen schwimmen gehen?", en: "Hey! Shall we go swimming together this week?", fr: "Salut ! On va nager ensemble cette semaine ?" },
      { y: ["Ja, gern! Am Montag arbeite ich bis sechs, aber am Dienstag habe ich Zeit.", "Ja, gern! Am Montag ich arbeite bis sechs, aber am Dienstag habe ich Zeit.", "Ja, gern! Am Montag arbeite ich bis sechs, aber am Dienstag ich habe Zeit."], en: "Yes, I'd love to! On Monday I work until six, but on Tuesday I have time.", fr: "Oui, avec plaisir ! Lundi je travaille jusqu'à six heures, mais mardi j'ai le temps.", why: "After Am Montag and am Dienstag, the verb comes second, then the subject.", why_fr: "Après Am Montag et am Dienstag, le verbe vient en deuxième position, puis le sujet." },
      { p: "Dienstag ist gut. Um wie viel Uhr? Das Schwimmbad macht um sieben auf.", en: "Tuesday is good. What time? The pool opens at seven.", fr: "Mardi, c'est bien. À quelle heure ? La piscine ouvre à sept heures." },
      { y: ["Um sieben ist zu früh. Ich stehe um halb sieben auf!", "Um sieben ist zu früh. Ich aufstehe um halb sieben!", "Um sieben ist zu früh. Ich stehe auf um halb sieben!"], en: "Seven is too early. I get up at half past six!", fr: "Sept heures, c'est trop tôt. Je me lève à six heures et demie !", why: "aufstehen is separable: ich stehe … auf, with auf at the very end.", why_fr: "aufstehen est séparable : ich stehe … auf, avec auf tout à la fin." },
      { p: "Haha, okay. Und am Abend? Um halb acht?", en: "Haha, OK. And in the evening? At half past seven?", fr: "Haha, d'accord. Et le soir ? À sept heures et demie ?" },
      { y: ["Halb acht passt gut. Wo treffen wir uns?", "Halb acht passt gut. Wo treffen uns wir?", "Halb acht passt gut. Wo wir treffen uns?"], en: "Half past seven suits me. Where shall we meet?", fr: "Sept heures et demie, ça me va. On se retrouve où ?", why: "A question with Wo: the verb right after the question word, then the subject.", why_fr: "Question avec Wo : le verbe juste après le mot interrogatif, puis le sujet." },
      { p: "Vor dem Schwimmbad. Ich rufe dich am Dienstag noch mal an, okay?", en: "In front of the pool. I'll call you again on Tuesday, OK?", fr: "Devant la piscine. Je te rappelle mardi, d'accord ?" },
      { y: ["Super, bis Dienstag! Und sei pünktlich!", "Super, bis Dienstag! Und sei pünktlich an!", "Super, am Dienstag bis! Und sei pünktlich!"], en: "Great, see you on Tuesday! And be on time!", fr: "Super, à mardi ! Et sois à l'heure !", why: "bis Dienstag = see you on Tuesday, a fixed phrase.", why_fr: "bis Dienstag = à mardi, une formule figée." }
    ] },
  { id: "arzttermin", lesson: 9, level: "A1", icon: "stethoscope", partner: "Frau Weber", role: "a doctor's receptionist", role_fr: "la secrétaire médicale",
    title: "Booking a doctor's appointment", title_fr: "Prendre rendez-vous chez le médecin",
    setting: "You call a doctor's practice in Cologne to make an appointment. Frau Weber answers.", setting_fr: "Tu appelles un cabinet médical à Cologne pour prendre rendez-vous. Frau Weber répond.",
    turns: [
      { p: "Praxis Dr. Hartmann, Weber am Apparat. Guten Morgen!", en: "Dr Hartmann's practice, Weber speaking. Good morning!", fr: "Cabinet du docteur Hartmann, Weber à l'appareil. Bonjour !" },
      { y: ["Guten Morgen! Ich möchte einen Termin, bitte.", "Guten Morgen! Ich möchte ein Termin, bitte.", "Guten Morgen! Ich möchte einen Termin, danke."], en: "Good morning! I'd like an appointment, please.", fr: "Bonjour ! Je voudrais un rendez-vous, s'il vous plaît.", why: "der Termin is masculine: einen Termin after möchte (like after haben).", why_fr: "der Termin est masculin : einen Termin après möchte (comme après haben)." },
      { p: "Gern. Passt es Ihnen am Donnerstag um Viertel nach zehn?", en: "Certainly. Does Thursday at a quarter past ten suit you?", fr: "Volontiers. Jeudi à dix heures et quart, ça vous va ?" },
      { y: ["Am Donnerstag arbeite ich leider. Geht es auch am Freitag?", "Am Donnerstag ich arbeite leider. Geht es auch am Freitag?", "Am Donnerstag arbeite ich leider. Es geht auch am Freitag?"], en: "Unfortunately I work on Thursday. Is Friday possible too?", fr: "Jeudi, je travaille, malheureusement. Vendredi, c'est possible aussi ?", why: "The verb second after Am Donnerstag; a yes or no question starts with the verb.", why_fr: "Le verbe en deuxième position après Am Donnerstag ; une question fermée commence par le verbe." },
      { p: "Am Freitag haben wir noch einen Termin um halb fünf.", en: "On Friday we still have an appointment at half past four.", fr: "Vendredi, il nous reste un rendez-vous à quatre heures et demie." },
      { y: ["Um halb fünf, also um sechzehn Uhr dreißig? Das passt gut.", "Um halb fünf, also um siebzehn Uhr dreißig? Das passt gut.", "Um halb fünf, also um fünfzehn Uhr dreißig? Das passt gut."], en: "At half past four, so at 16:30? That suits me.", fr: "À quatre heures et demie, donc à seize heures trente ? Ça me va.", why: "halb fünf = half way to five: 4:30, so 16:30.", why_fr: "halb fünf = à mi-chemin de cinq heures : 4 h 30, donc 16 h 30." },
      { p: "Genau. Wie ist Ihr Name, bitte?", en: "Exactly. What's your name, please?", fr: "Exactement. Quel est votre nom, s'il vous plaît ?" },
      { y: ["Robin Lefèvre. Vielen Dank, bis Freitag!", "Robin Lefèvre. Viele Dank, bis Freitag!", "Robin Lefèvre. Vielen Dank, bis Freitags!"], en: "Robin Lefèvre. Thank you very much, see you on Friday!", fr: "Robin Lefèvre. Merci beaucoup, à vendredi !", why: "vielen Dank; bis Freitag (see you on Friday), without -s.", why_fr: "vielen Dank ; bis Freitag (à vendredi), sans -s." }
    ] }
  );

  W.READINGS.push({
    id: "baeckertag", level: "A1", icon: "croissant", title: "Henriks Tag", genre: "Personal story",
    intro: "Henrik is a baker in Lübeck: his day starts when others go to sleep. Daily routine, times and separable verbs.",
    intro_fr: "Henrik est boulanger à Lübeck : sa journée commence quand les autres vont se coucher. Le quotidien, l'heure et les verbes séparables.",
    paragraphs: [
      { de: "Henrik ist Bäcker in Lübeck. Sein Tag ist ein bisschen anders: Er steht jeden Tag um zwei Uhr auf! Er trinkt schnell einen Kaffee und fährt mit dem Fahrrad zur Bäckerei.", en: "Henrik is a baker in Lübeck. His day is a little different: he gets up at two o'clock every day! He drinks a quick coffee and cycles to the bakery.", fr: "Henrik est boulanger à Lübeck. Sa journée est un peu différente : il se lève tous les jours à deux heures du matin ! Il boit vite un café et va à la boulangerie à vélo." },
      { de: "Um halb drei fängt er mit der Arbeit an. Er macht Brot, Brötchen und Kuchen. Um sechs Uhr öffnet die Bäckerei, und die ersten Kunden kommen.", en: "At half past two he starts work. He makes bread, rolls and cakes. At six o'clock the bakery opens and the first customers arrive.", fr: "À deux heures et demie, il commence le travail. Il fait du pain, des petits pains et des gâteaux. À six heures, la boulangerie ouvre, et les premiers clients arrivent." },
      { de: "Um elf Uhr hört Henrik auf. Er geht nach Hause, isst zu Mittag und schläft dann bis vier Uhr nachmittags.", en: "At eleven Henrik stops work. He goes home, has lunch and then sleeps until four in the afternoon.", fr: "À onze heures, Henrik s'arrête. Il rentre à la maison, déjeune et dort ensuite jusqu'à seize heures." },
      { de: "Am Abend kauft er ein oder ruft seine Freunde an. Er sieht nie lange fern: Um halb neun geht er schlafen. Und am Sonntag? Da schläft Henrik, so lange er will!", en: "In the evening he does his shopping or calls his friends. He never watches TV for long: at half past eight he goes to bed. And on Sunday? Then Henrik sleeps as long as he likes!", fr: "Le soir, il fait ses courses ou appelle ses amis. Il ne regarde jamais longtemps la télé : à huit heures et demie, il va se coucher. Et le dimanche ? Là, Henrik dort aussi longtemps qu'il veut !" }
    ],
    glossary: { "Bäcker": ["baker", "boulanger"], "anders": ["different", "différent"], "Fahrrad": ["bicycle", "vélo"], "Bäckerei": ["bakery", "boulangerie"], "Brot": ["bread", "pain"], "Brötchen": ["bread rolls", "petits pains"], "Kuchen": ["cake", "gâteau"], "öffnet": ["opens", "ouvre"], "ersten": ["first", "premiers"], "Kunden": ["customers", "clients"], "nachmittags": ["in the afternoon", "l'après-midi"], "lange": ["for a long time", "longtemps"] },
    questions: [
      { q: "Was ist Henrik von Beruf?", o: ["Bäcker", "Koch", "Lehrer"], a: 0 },
      { q: "Wann steht Henrik auf?", o: ["Um zwei Uhr", "Um sechs Uhr", "Um halb drei"], a: 0 },
      { q: "Wann öffnet die Bäckerei?", o: ["Um sechs Uhr", "Um elf Uhr", "Um zwei Uhr"], a: 0 },
      { q: "Was macht Henrik nach der Arbeit?", o: ["Er isst zu Mittag und schläft.", "Er sieht lange fern.", "Er geht schwimmen."], a: 0 },
      { q: "Wann geht er am Abend schlafen?", o: ["Um halb neun", "Um neun Uhr", "Um halb zehn"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-a1-3", unit: "a1-3", level: "A1", icon: "phone",
    title: "Kino heute Abend?", title_fr: "Ciné ce soir ?",
    context: "Greta calls Sven to go to the cinema tonight. They need to agree on the time.", context_fr: "Greta appelle Sven pour aller au cinéma ce soir. Ils doivent se mettre d'accord sur l'heure.",
    words: [["das Kino", "the cinema", "le cinéma"], ["der Film", "the film", "le film"], ["anfangen", "to start", "commencer"], ["sich treffen", "to meet", "se retrouver"], ["vorher", "before (that)", "avant (cela)"]],
    lines: [["Greta", "Hallo Sven! Gehen wir heute Abend ins Kino?", "de-DE"], ["Sven", "Hallo Greta! Gern. Wann fängt der Film an?", "de-DE"], ["Greta", "Um Viertel vor neun.", "de-DE"], ["Sven", "Viertel vor neun… Also um zwanzig Uhr fünfundvierzig?", "de-DE"], ["Greta", "Genau. Wollen wir vorher etwas essen?", "de-DE"], ["Sven", "Ja, aber ich arbeite heute bis sieben. Um halb acht vielleicht?", "de-DE"], ["Greta", "Halb acht ist gut. Wir treffen uns vor dem Kino, okay?", "de-DE"], ["Sven", "Okay. Ach nein, warte! Ich rufe noch meine Schwester an. Sagen wir Viertel vor acht?", "de-DE"], ["Greta", "Kein Problem. Also Viertel vor acht vor dem Kino. Bis später!", "de-DE"], ["Sven", "Bis später, tschüss!", "de-DE"]],
    gist: ["Was planen Greta und Sven?", ["Essen und dann ins Kino gehen", "Am Wochenende schwimmen gehen", "Zusammen arbeiten"]],
    detail: [["Wann fängt der Film an?", ["Um 20:45 Uhr", "Um 19:30 Uhr", "Um 21:15 Uhr"]], ["Bis wann arbeitet Sven heute?", ["Bis sieben", "Bis halb acht", "Bis acht"]], ["Wen ruft Sven noch an?", ["Seine Schwester", "Seine Mutter", "Seinen Bruder"]], ["Wann treffen sie sich?", ["Um Viertel vor acht", "Um halb acht", "Um Viertel nach acht"]]],
    decode: ["Um Viertel vor neun.", "Sagen wir Viertel vor acht?"],
    tip: "Germans often repeat a time in the official form to check it: Viertel vor neun, also zwanzig Uhr fünfundvierzig? Do the same: it avoids every misunderstanding.", tip_fr: "Les Allemands répètent souvent une heure sous sa forme officielle pour vérifier : Viertel vor neun, also zwanzig Uhr fünfundvierzig? Fais pareil : ça évite tous les malentendus."
  }]);

  W.PROMPTS.push({ id: "de-a1-3", level: "A1", q: "Wie sieht dein Tag aus? Wann stehst du auf, was machst du am Vormittag, am Nachmittag und am Abend?", en: "What does your day look like? When do you get up, what do you do in the morning, the afternoon and the evening?", fr: "À quoi ressemble ta journée ? À quelle heure te lèves-tu, que fais-tu le matin, l'après-midi et le soir ?", time: 75,
    phrases: ["Ich stehe um … auf.", "Am Vormittag…", "Um halb…", "Am Abend sehe ich … fern / lese ich…", "Ich gehe um … schlafen."],
    model: "Ich stehe meistens um sieben Uhr auf. Ich dusche und frühstücke, dann fahre ich mit dem Bus zur Arbeit. Von neun bis fünf arbeite ich im Büro. Am Mittag esse ich mit Kollegen zu Mittag. Am Abend kaufe ich ein oder rufe Freunde an. Um halb elf gehe ich schlafen." });

  W.WRITING_GUIDE["a1-3"] = { genre: "A message to arrange a meeting", genre_fr: "Un message pour fixer un rendez-vous",
    plan: [["Say hello.", "Salue."], ["Say when you aren't free this week.", "Dis quand tu n'es pas libre cette semaine."], ["Propose a day and a time.", "Propose un jour et une heure."], ["Suggest a place to meet.", "Propose un lieu de rendez-vous."], ["Ask for an answer and say goodbye.", "Demande une réponse et dis au revoir."]],
    marks: [["am Montag und am Dienstag arbeite ich", "the verb second after a time", "le verbe en deuxième position après un moment"], ["bis sechs Uhr", "until (a time)", "jusqu'à (une heure)"], ["am Mittwoch um halb acht", "halb acht = 7:30", "halb acht = 7 h 30"], ["Wir treffen uns", "we meet (sich treffen)", "on se retrouve (sich treffen)"], ["Ruf mich an", "a separable verb in the imperative: anrufen", "un verbe séparable à l'impératif : anrufen"], ["Bis bald!", "see you soon", "à bientôt"]] };

  W.COURSE.push({ id: "a1-3", level: "A1", icon: "sun", title: "Daily life", title_fr: "Le quotidien",
    intro: "In this unit, you'll describe your day and your week: the days and times of day, the verb that stays in second place (Am Montag arbeite ich), separable verbs such as aufstehen and anrufen, and how to tell the time, including the famous halb.",
    intro_fr: "Dans cette unité, tu vas décrire ta journée et ta semaine : les jours et les moments de la journée, le verbe qui reste en deuxième position (Am Montag arbeite ich), les verbes séparables comme aufstehen et anrufen, et l'heure, y compris le fameux halb.",
    can: ["Describe your day and your week", "Keep the verb in second place after a time expression", "Use separable verbs (aufstehen, einkaufen, anrufen)", "Ask and tell the time, officially and in everyday German"],
    can_fr: ["Décrire ta journée et ta semaine", "Garder le verbe en deuxième position après un complément de temps", "Utiliser les verbes séparables (aufstehen, einkaufen, anrufen)", "Demander et dire l'heure, de façon officielle et courante"],
    lessons: [7, 8, 9], vocab: ["alltagDE", "wochentageDE", "uhrzeitDE"], reading: "baeckertag", prompt: "de-a1-3",
    writing: { task: "Your friend Nele wants to meet this week. Write her a message (30-50 words): when you're busy, which day and time suit you, and where to meet.", task_fr: "Ton amie Nele veut te voir cette semaine. Écris-lui un message (30 à 50 mots) : quand tu n'es pas libre, quel jour et quelle heure te conviennent, et où vous retrouver.", words: "30-50",
      tips: ["Liebe Nele,", "Am … arbeite ich bis…", "Hast du am … Zeit?", "Wir treffen uns um … vor…", "Bis bald!"],
      checklist: ["The verb is second after a day or a time", "My separable verbs have their prefix at the end", "I wrote the times correctly (halb acht = 7:30)", "I proposed a day, a time and a place", "I stayed between 30 and 50 words"],
      checklist_fr: ["Le verbe est en deuxième position après un jour ou une heure", "La particule de mes verbes séparables est à la fin", "J'ai bien écrit les heures (halb acht = 7 h 30)", "J'ai proposé un jour, une heure et un lieu", "J'ai écrit entre 30 et 50 mots"],
      model: "Liebe Nele,\n\nam Montag und am Dienstag arbeite ich bis sechs Uhr. Hast du am Mittwoch um halb acht Zeit? Wir treffen uns vor dem Café am Markt und essen zusammen. Ruf mich an oder schreib mir!\n\nBis bald!\nCamille" } });
})();
