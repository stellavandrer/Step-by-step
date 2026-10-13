/* Cours d'allemand, unité B2-9 « Living together / Vivre ensemble » : le Konjunktiv II passé avec un verbe de
   modalité (ich hätte früher anfangen sollen ; …, dass ich hätte kommen sollen), les emplois de es (es geht um,
   es kommt darauf an, es fällt mir schwer, Ich finde es wichtig, dass…), dissiper un malentendu interculturel.
   Personnages fictifs, prénoms allemands.
   Faits vérifiables seulement : accords de recrutement de main-d'œuvre de la RFA avec l'Italie (1955), l'Espagne et
   la Grèce (1960), la Turquie (1961), le Maroc (1963), le Portugal (1964), la Tunisie (1965) et la Yougoslavie
   (1968) ; le 10 septembre 1964, le Portugais Armando Rodrigues de Sá, accueilli à la gare de Köln-Deutz comme le
   millionième « travailleur invité », reçoit un cyclomoteur ; arrêt du recrutement en novembre 1973 ; beaucoup
   restent et font venir leur famille ; la RDA recrutait des « Vertragsarbeiter », notamment du Vietnam et du
   Mozambique ; citation de Max Frisch (1965) : « Man hat Arbeitskräfte gerufen, und es kommen Menschen. » */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "migrationDE", icon: "plane-landing", title: "Migration", title_fr: "La migration", level: "B2", words: [
    ["die Einwanderung", "immigration", "l'immigration", "Die Einwanderung hat die Stadt stark geprägt."],
    ["einwandern", "to immigrate", "immigrer", "Ihre Großeltern sind in den Sechzigerjahren eingewandert."],
    ["der Einwanderer, - (die Einwanderin)", "the immigrant", "l'immigré, l'immigrée", "Viele Einwanderer haben eigene Firmen gegründet."],
    ["einbürgern", "to naturalise", "naturaliser", "Er wurde nach acht Jahren eingebürgert."],
    ["die Einbürgerung", "naturalisation", "la naturalisation", "Für die Einbürgerung braucht man gute Deutschkenntnisse."],
    ["das Asyl", "asylum", "l'asile", "Sie hat in Deutschland Asyl beantragt."],
    ["der / die Geflüchtete, -n", "the refugee", "le réfugié, la réfugiée", "Viele Geflüchtete besuchen einen Integrationskurs."],
    ["das Heimweh", "homesickness", "le mal du pays", "Im ersten Winter hatte ich starkes Heimweh."],
    ["die Vielfalt", "diversity, variety", "la diversité", "Die Vielfalt der Kulturen macht die Stadt spannend."],
    ["mehrsprachig", "multilingual", "multilingue, plurilingue", "Unsere Kinder wachsen mehrsprachig auf."],
    ["die Anerkennung", "recognition", "la reconnaissance", "Die Anerkennung ausländischer Abschlüsse dauert oft lange."],
    ["anerkennen", "to recognise", "reconnaître", "Ihr Diplom wurde in Deutschland anerkannt."],
    ["die Arbeitskraft, ¨-e", "the worker; labour", "la main-d'œuvre, le travailleur", "In den Sechzigern fehlten in Deutschland Arbeitskräfte."],
    ["die Zugehörigkeit", "belonging", "l'appartenance", "Ein Verein kann ein Gefühl der Zugehörigkeit geben."],
    ["die Identität, -en", "the identity", "l'identité", "Sprache ist ein wichtiger Teil der Identität."],
    ["aufnehmen", "to take in, to welcome", "accueillir", "Die Stadt hat viele Familien aufgenommen."]
  ] },
  { id: "zusammenlebenDE", icon: "users", title: "Living together", title_fr: "Vivre ensemble", level: "B2", words: [
    ["das Vorurteil, -e", "the prejudice", "le préjugé", "Begegnungen helfen gegen Vorurteile."],
    ["die Gemeinschaft, -en", "the community", "la communauté", "Im Dorf ist die Gemeinschaft sehr eng."],
    ["der Zusammenhalt", "solidarity, cohesion", "la cohésion, la solidarité", "Nach dem Hochwasser war der Zusammenhalt groß."],
    ["das Missverständnis, -se", "the misunderstanding", "le malentendu", "Das war nur ein Missverständnis."],
    ["üblich", "usual, customary", "habituel, d'usage", "In Deutschland ist es üblich, pünktlich zu sein."],
    ["fremd", "foreign, strange, unfamiliar", "étranger, inconnu", "Am Anfang war mir hier alles fremd."],
    ["sich anpassen (an + Akk.)", "to adapt (to)", "s'adapter (à)", "Kinder passen sich schnell an eine neue Umgebung an."],
    ["die Sitte, -n", "the custom", "la coutume, les mœurs", "Jedes Land hat seine eigenen Sitten."],
    ["respektvoll", "respectful", "respectueux", "Wir sollten respektvoll miteinander umgehen."],
    ["die Höflichkeit", "politeness", "la politesse", "Höflichkeit sieht in jedem Land anders aus."],
    ["die Begegnung, -en", "the encounter, the meeting", "la rencontre", "Die Begegnung mit anderen Kulturen hat mich verändert."],
    ["sich einleben", "to settle in", "s'acclimater, s'habituer", "Hast du dich schon gut eingelebt?"],
    ["die Offenheit", "openness", "l'ouverture d'esprit", "Mit Offenheit und Humor kommt man weit."],
    ["die Ausgrenzung", "exclusion", "l'exclusion", "Niemand sollte Ausgrenzung erleben müssen."],
    ["der Austausch", "exchange", "l'échange", "Der Austausch zwischen Jung und Alt ist wichtig."],
    ["jemandem zu nahe treten", "to offend someone", "froisser quelqu'un", "Ich wollte Ihnen nicht zu nahe treten."]
  ] });

  W.LESSONS.push(
  {
    id: 97, level: "B2", icon: "rewind",
    title: "Ich hätte früher anfangen sollen: regrets and criticism", title_fr: "Ich hätte früher anfangen sollen : regrets et reproches",
    subtitle: "What should, could or shouldn't have happened: the Konjunktiv II past with modal verbs.", subtitle_fr: "Ce qui aurait dû, aurait pu ou n'aurait pas dû arriver : le Konjunktiv II passé avec les verbes de modalité.",
    body: `
<h2>hätte + two infinitives</h2>
<p>For a regret or a reproach about the past, German uses <s-de>hätte</s-de> + infinitive + modal verb in the infinitive (the "double infinitive"): <s-de>Ich hätte früher Deutsch lernen sollen.</s-de> (I should have learnt German earlier.)</p>
<table>
<tr><th>Meaning</th><th>Example</th></tr>
<tr><td>regret, advice too late</td><td><s-de>Ich hätte mich früher anmelden sollen.</s-de></td></tr>
<tr><td>a missed possibility, a reproach</td><td><s-de>Du hättest mich anrufen können!</s-de></td></tr>
<tr><td>something not allowed</td><td><s-de>Das hätte nicht passieren dürfen.</s-de></td></tr>
<tr><td>a necessity that didn't happen</td><td><s-de>Wir hätten nicht so lange warten müssen.</s-de></td></tr>
</table>
<h2>In a subordinate clause</h2>
<p>Careful: <s-de>hätte</s-de> doesn't go to the end, but <b>before</b> the two infinitives: <s-de>Mir ist klar, dass ich früher hätte anfangen sollen.</s-de></p>
<h2>The same pattern in the Perfekt</h2>
<p>Modal verbs in the Perfekt also use the double infinitive: <s-de>Ich habe nicht kommen können.</s-de> (I wasn't able to come.) In speech, the Präteritum is more common: <s-de>Ich konnte nicht kommen.</s-de></p>
<div class="tip"><s-de>Du hättest mich anrufen können</s-de> can be a neutral statement or a clear reproach: the tone decides. Add <s-de>wenigstens</s-de> or <s-de>doch</s-de> and it's definitely a reproach: <s-de>Du hättest doch wenigstens anrufen können!</s-de></div>
`,
    body_fr: `
<h2>hätte + deux infinitifs</h2>
<p>Pour un regret ou un reproche sur le passé, l'allemand emploie <s-de>hätte</s-de> + infinitif + verbe de modalité à l'infinitif (le « double infinitif ») : <s-de>Ich hätte früher Deutsch lernen sollen.</s-de> (J'aurais dû apprendre l'allemand plus tôt.)</p>
<table>
<tr><th>Sens</th><th>Exemple</th></tr>
<tr><td>regret, conseil trop tardif</td><td><s-de>Ich hätte mich früher anmelden sollen.</s-de></td></tr>
<tr><td>possibilité manquée, reproche</td><td><s-de>Du hättest mich anrufen können!</s-de> (Tu aurais pu m'appeler !)</td></tr>
<tr><td>quelque chose d'inadmissible</td><td><s-de>Das hätte nicht passieren dürfen.</s-de></td></tr>
<tr><td>une nécessité qui n'a pas eu lieu</td><td><s-de>Wir hätten nicht so lange warten müssen.</s-de></td></tr>
</table>
<h2>Dans une subordonnée</h2>
<p>Attention : <s-de>hätte</s-de> ne va pas à la fin, mais <b>devant</b> les deux infinitifs : <s-de>Mir ist klar, dass ich früher hätte anfangen sollen.</s-de></p>
<h2>Le même schéma au parfait</h2>
<p>Les verbes de modalité au parfait emploient aussi le double infinitif : <s-de>Ich habe nicht kommen können.</s-de> (Je n'ai pas pu venir.) À l'oral, le prétérit est plus courant : <s-de>Ich konnte nicht kommen.</s-de></p>
<div class="tip"><s-de>Du hättest mich anrufen können</s-de> peut être un simple constat ou un vrai reproche : c'est le ton qui décide. Ajoute <s-de>wenigstens</s-de> ou <s-de>doch</s-de>, et c'est clairement un reproche : <s-de>Du hättest doch wenigstens anrufen können!</s-de></div>
`,
    examples: [
      ["Ich hätte früher Deutsch lernen sollen.", "I should have learnt German earlier.", "J'aurais dû apprendre l'allemand plus tôt."],
      ["Du hättest mich doch wenigstens anrufen können!", "You could at least have called me!", "Tu aurais au moins pu m'appeler !"],
      ["Das hätte nicht passieren dürfen.", "That should never have happened.", "Ça n'aurait pas dû arriver."],
      ["Wir hätten nicht so lange auf den Termin warten müssen.", "We needn't have waited so long for the appointment.", "Nous n'aurions pas eu besoin d'attendre si longtemps ce rendez-vous."],
      ["Mir ist klar, dass ich mich früher hätte anmelden sollen.", "I realise I should have registered earlier.", "Je me rends compte que j'aurais dû m'inscrire plus tôt."],
      ["Leider habe ich gestern nicht kommen können.", "Unfortunately I wasn't able to come yesterday.", "Malheureusement, je n'ai pas pu venir hier."],
      ["Mit mehr Geduld hätten wir das Missverständnis vermeiden können.", "With more patience we could have avoided the misunderstanding.", "Avec plus de patience, nous aurions pu éviter le malentendu."]
    ],
    quiz: [
      { q: "“I should have asked.”", q_fr: "« J'aurais dû demander. »", o: ["Ich hätte fragen sollen.", "Ich hätte gefragt sollen.", "Ich sollte gefragt haben."], a: 0, ex: "hätte + infinitive + sollen.", ex_fr: "hätte + infinitif + sollen." },
      { q: "“You could have told me!”", q_fr: "« Tu aurais pu me le dire ! »", o: ["Du hättest es mir sagen können!", "Du könntest es mir gesagt haben!", "Du hast es mir sagen gekonnt!"], a: 0, ex: "hätte + infinitive + können.", ex_fr: "hätte + infinitif + können." },
      { q: "Ich weiß, dass ich früher ___", q_fr: "Ich weiß, dass ich früher ___", o: ["hätte anfangen sollen.", "anfangen sollen hätte.", "anfangen hätte sollen."], a: 0, ex: "Subordinate clause: hätte before the two infinitives.", ex_fr: "Subordonnée : hätte devant les deux infinitifs." },
      { q: "“That shouldn't have happened.”", q_fr: "« Ça n'aurait pas dû arriver. »", o: ["Das hätte nicht passieren dürfen.", "Das hätte nicht passiert dürfen.", "Das dürfte nicht passiert haben."], a: 0, ex: "hätte … passieren dürfen.", ex_fr: "hätte … passieren dürfen." },
      { q: "“I wasn't able to come.” (Perfekt)", q_fr: "« Je n'ai pas pu venir. » (parfait)", o: ["Ich habe nicht kommen können.", "Ich habe nicht kommen gekonnt.", "Ich bin nicht kommen können."], a: 0, ex: "Modal in the Perfekt: double infinitive.", ex_fr: "Verbe de modalité au parfait : double infinitif." }
    ]
  },
  {
    id: 98, level: "B2", icon: "info",
    title: "Es geht um…, es kommt darauf an: the many uses of es", title_fr: "Es geht um…, es kommt darauf an : les nombreux emplois de es",
    subtitle: "Fixed phrases with es, and when es appears or disappears.", subtitle_fr: "Les tournures figées avec es, et quand es apparaît ou disparaît.",
    body: `
<h2>Fixed phrases with es</h2>
<table>
<tr><th>Phrase</th><th>Meaning</th></tr>
<tr><td><s-de>Es geht um…</s-de> (+ acc.)</td><td>it's about…</td></tr>
<tr><td><s-de>Es handelt sich um…</s-de> (+ acc.)</td><td>it's a matter of…, it is… (formal)</td></tr>
<tr><td><s-de>Es kommt auf … an.</s-de></td><td>it depends on…</td></tr>
<tr><td><s-de>Es lohnt sich (, … zu …).</s-de></td><td>it's worth it</td></tr>
<tr><td><s-de>Es fällt mir leicht / schwer (, … zu …).</s-de></td><td>I find it easy / hard</td></tr>
<tr><td><s-de>Es gibt…</s-de> (+ acc.)</td><td>there is / there are</td></tr>
</table>
<p><s-de>In dem Film geht es um eine Familie, die auswandert.</s-de> · <s-de>Ob ich bleibe, kommt auf die Arbeit an.</s-de> · <s-de>Es fällt mir schwer, Nein zu sagen.</s-de></p>
<h2>es that announces a clause</h2>
<p><s-de>es</s-de> can stand in for a <s-de>dass</s-de>-clause or an infinitive that comes later: <s-de>Ich finde es wichtig, dass alle mitreden.</s-de> · <s-de>Es freut mich, dass du gekommen bist.</s-de> If the clause comes first, or another word takes first position, <s-de>es</s-de> disappears: <s-de>Dass du gekommen bist, freut mich.</s-de> · <s-de>Mich freut, dass du gekommen bist.</s-de></p>
<div class="tip"><s-de>es gibt</s-de> is for things that exist in general: <s-de>In der Stadt gibt es viele Vereine.</s-de> For something located in a specific place, prefer a precise verb: <s-de>Auf dem Tisch liegt ein Brief.</s-de></div>
`,
    body_fr: `
<h2>Les tournures figées avec es</h2>
<table>
<tr><th>Tournure</th><th>Sens</th></tr>
<tr><td><s-de>Es geht um…</s-de> (+ acc.)</td><td>il s'agit de…, ça parle de…</td></tr>
<tr><td><s-de>Es handelt sich um…</s-de> (+ acc.)</td><td>il s'agit de… (soutenu)</td></tr>
<tr><td><s-de>Es kommt auf … an.</s-de></td><td>ça dépend de…</td></tr>
<tr><td><s-de>Es lohnt sich (, … zu …).</s-de></td><td>ça vaut la peine</td></tr>
<tr><td><s-de>Es fällt mir leicht / schwer (, … zu …).</s-de></td><td>ça m'est facile / difficile</td></tr>
<tr><td><s-de>Es gibt…</s-de> (+ acc.)</td><td>il y a</td></tr>
</table>
<p><s-de>In dem Film geht es um eine Familie, die auswandert.</s-de> · <s-de>Ob ich bleibe, kommt auf die Arbeit an.</s-de> · <s-de>Es fällt mir schwer, Nein zu sagen.</s-de></p>
<h2>Le es qui annonce une proposition</h2>
<p><s-de>es</s-de> peut annoncer une proposition en <s-de>dass</s-de> ou un infinitif placés plus loin : <s-de>Ich finde es wichtig, dass alle mitreden.</s-de> · <s-de>Es freut mich, dass du gekommen bist.</s-de> Si la proposition vient en tête, ou qu'un autre mot occupe la première place, <s-de>es</s-de> disparaît : <s-de>Dass du gekommen bist, freut mich.</s-de> · <s-de>Mich freut, dass du gekommen bist.</s-de></p>
<div class="tip"><s-de>es gibt</s-de> sert pour ce qui existe en général : <s-de>In der Stadt gibt es viele Vereine.</s-de> Pour un objet situé à un endroit précis, préfère un verbe précis : <s-de>Auf dem Tisch liegt ein Brief.</s-de></div>
`,
    examples: [
      ["In dem Film geht es um eine Familie, die nach Kanada auswandert.", "The film is about a family who emigrate to Canada.", "Le film parle d'une famille qui émigre au Canada."],
      ["Bei dem Fund handelt es sich um eine römische Münze.", "The find is a Roman coin.", "Il s'agit d'une pièce de monnaie romaine."],
      ["Ob ich in Deutschland bleibe, kommt auf die Arbeit an.", "Whether I stay in Germany depends on the job.", "Que je reste en Allemagne dépend du travail."],
      ["Es lohnt sich, die Sprache des Landes zu lernen.", "It's worth learning the language of the country.", "Ça vaut la peine d'apprendre la langue du pays."],
      ["Es fällt mir immer noch schwer, am Telefon Deutsch zu sprechen.", "I still find it hard to speak German on the phone.", "J'ai encore du mal à parler allemand au téléphone."],
      ["Ich finde es wichtig, dass alle mitreden dürfen.", "I think it's important that everyone has a say.", "Je trouve important que tout le monde puisse donner son avis."],
      ["Mich freut, dass du dich hier so schnell eingelebt hast.", "I'm glad you've settled in here so quickly.", "Ça me fait plaisir de voir que tu as trouvé tes marques si vite ici."]
    ],
    quiz: [
      { q: "“The book is about…”", q_fr: "« Le livre parle de… »", o: ["In dem Buch geht es um…", "Das Buch geht es um…", "In dem Buch handelt um…"], a: 0, ex: "In dem Buch geht es um + accusative.", ex_fr: "In dem Buch geht es um + accusatif." },
      { q: "“It depends on the weather.”", q_fr: "« Ça dépend du temps. »", o: ["Es kommt auf das Wetter an.", "Es kommt von dem Wetter an.", "Es hängt auf das Wetter."], a: 0, ex: "es kommt auf … an.", ex_fr: "es kommt auf … an." },
      { q: "“I find it hard to wait.”", q_fr: "« J'ai du mal à attendre. »", o: ["Es fällt mir schwer zu warten.", "Es fällt mich schwer zu warten.", "Ich falle schwer zu warten."], a: 0, ex: "es fällt mir (dative) schwer.", ex_fr: "es fällt mir (datif) schwer." },
      { q: "Dass du gekommen bist, ___ mich.", q_fr: "Dass du gekommen bist, ___ mich.", o: ["freut", "freut es", "es freut"], a: 0, ex: "The clause comes first: no es.", ex_fr: "La proposition est en tête : pas de es." },
      { q: "“It's worth visiting the museum.”", q_fr: "« Ça vaut la peine de visiter le musée. »", o: ["Es lohnt sich, das Museum zu besuchen.", "Es lohnt, das Museum besuchen.", "Es ist lohnend sich das Museum."], a: 0, ex: "es lohnt sich, … zu + infinitive.", ex_fr: "es lohnt sich, … zu + infinitif." }
    ]
  },
  {
    id: 99, level: "B2", kind: "functional", icon: "handshake",
    title: "Everyday German: clearing up a misunderstanding", title_fr: "L'allemand de tous les jours : dissiper un malentendu",
    subtitle: "Explain what you meant, talk about cultural differences and smooth things over.", subtitle_fr: "Expliquer ce que tu voulais dire, parler des différences culturelles et apaiser la situation.",
    body: `
<h2>Explaining what you meant</h2>
<p><s-de>Das habe ich nicht so gemeint.</s-de> · <s-de>Da liegt wohl ein Missverständnis vor.</s-de> · <s-de>Ich wollte Ihnen nicht zu nahe treten.</s-de> · <s-de>Entschuldigung, das war ungeschickt von mir.</s-de></p>
<h2>Talking about differences</h2>
<p><s-de>Bei uns ist es üblich, dass…</s-de> · <s-de>Mir ist aufgefallen, dass man hier…</s-de> · <s-de>In meinem Land würde man eher…</s-de> · <s-de>Wie macht man das hier eigentlich?</s-de></p>
<h2>Smoothing things over</h2>
<p><s-de>Gut, dass wir darüber gesprochen haben.</s-de> · <s-de>Kein Problem, das kann passieren.</s-de> · <s-de>Wollen wir uns nicht duzen?</s-de></p>
<h2>Sie or du?</h2>
<p>A classic source of misunderstanding. Adults who don't know each other usually say <s-de>Sie</s-de>, especially with older people, at work or with officials. Among students, young people and in many sports clubs, <s-de>du</s-de> is normal. The switch to <s-de>du</s-de> is usually offered by the older or more senior person.</p>
<div class="tip">Explaining a misunderstanding works best with "I" sentences and curiosity rather than judgement: <s-de>Mir ist aufgefallen, dass…</s-de> rather than <s-de>Hier sind alle so…</s-de> Asking <s-de>Wie ist das bei Ihnen?</s-de> turns a conflict into a conversation.</div>
`,
    body_fr: `
<h2>Expliquer ce que tu voulais dire</h2>
<p><s-de>Das habe ich nicht so gemeint.</s-de> (Ce n'est pas ce que je voulais dire.) · <s-de>Da liegt wohl ein Missverständnis vor.</s-de> · <s-de>Ich wollte Ihnen nicht zu nahe treten.</s-de> (Je ne voulais pas vous froisser.) · <s-de>Entschuldigung, das war ungeschickt von mir.</s-de></p>
<h2>Parler des différences</h2>
<p><s-de>Bei uns ist es üblich, dass…</s-de> · <s-de>Mir ist aufgefallen, dass man hier…</s-de> · <s-de>In meinem Land würde man eher…</s-de> · <s-de>Wie macht man das hier eigentlich?</s-de></p>
<h2>Apaiser la situation</h2>
<p><s-de>Gut, dass wir darüber gesprochen haben.</s-de> · <s-de>Kein Problem, das kann passieren.</s-de> · <s-de>Wollen wir uns nicht duzen?</s-de></p>
<h2>Sie ou du ?</h2>
<p>Une source classique de malentendus. Les adultes qui ne se connaissent pas se vouvoient en général (<s-de>Sie</s-de>), surtout avec les personnes âgées, au travail ou dans l'administration. Entre étudiants, entre jeunes et dans beaucoup de clubs de sport, le <s-de>du</s-de> est normal. C'est en général la personne la plus âgée ou la plus haut placée qui propose de passer au <s-de>du</s-de>, à peu près comme en France.</p>
<div class="tip">Pour expliquer un malentendu, mieux vaut parler à la première personne et montrer de la curiosité plutôt que juger : <s-de>Mir ist aufgefallen, dass…</s-de> plutôt que <s-de>Hier sind alle so…</s-de> Demander <s-de>Wie ist das bei Ihnen?</s-de> transforme un conflit en conversation.</div>
`,
    examples: [
      ["Das habe ich wirklich nicht so gemeint.", "I really didn't mean it like that.", "Ce n'est vraiment pas ce que je voulais dire."],
      ["Da liegt wohl ein Missverständnis vor.", "There must be a misunderstanding.", "Il doit y avoir un malentendu."],
      ["Ich wollte Ihnen nicht zu nahe treten.", "I didn't mean to offend you.", "Je ne voulais pas vous froisser."],
      ["Bei uns ist es üblich, dass man sich zur Begrüßung umarmt.", "Where I come from, it's usual to hug when you say hello.", "Chez nous, il est d'usage de se prendre dans les bras pour se saluer."],
      ["Mir ist aufgefallen, dass man hier sonntags keinen Lärm macht.", "I've noticed that people here don't make noise on Sundays.", "J'ai remarqué qu'ici, on ne fait pas de bruit le dimanche."],
      ["Wie macht man das hier eigentlich mit dem Müll?", "How do you actually deal with the rubbish here?", "Comment fait-on ici, au juste, pour les déchets ?"],
      ["Gut, dass wir darüber gesprochen haben.", "I'm glad we talked about it.", "C'est bien qu'on en ait parlé."]
    ],
    quiz: [
      { q: "“I didn't mean it like that.”", q_fr: "« Ce n'est pas ce que je voulais dire. »", o: ["Das habe ich nicht so gemeint.", "Das habe ich nicht so gedacht gemeint.", "Das meine ich nicht so gehabt."], a: 0, ex: "etwas so meinen.", ex_fr: "etwas so meinen." },
      { q: "“I didn't mean to offend you.”", q_fr: "« Je ne voulais pas vous froisser. »", o: ["Ich wollte Ihnen nicht zu nahe treten.", "Ich wollte Sie nicht zu nahe treten.", "Ich wollte Ihnen nicht zu nah kommen treten."], a: 0, ex: "jemandem (dative) zu nahe treten.", ex_fr: "jemandem (datif) zu nahe treten." },
      { q: "“Where I come from, it's usual to…”", q_fr: "« Chez nous, il est d'usage de… »", o: ["Bei uns ist es üblich, …", "Bei uns ist es gewohnt, …", "Von uns ist es üblich, …"], a: 0, ex: "Bei uns ist es üblich, dass… / … zu…", ex_fr: "Bei uns ist es üblich, dass… / … zu…" },
      { q: "Who usually offers to switch to du?", q_fr: "Qui propose en général de passer au du ?", o: ["The older or more senior person", "The younger person", "Nobody: you just start"], o_fr: ["La personne la plus âgée ou la plus haut placée", "La personne la plus jeune", "Personne : on commence directement"], a: 0, ex: "The older or more senior person.", ex_fr: "La personne la plus âgée ou la plus haut placée." },
      { q: "A curious, non-judgemental way to start:", q_fr: "Une façon curieuse, sans jugement, de commencer :", o: ["Mir ist aufgefallen, dass…", "Hier sind alle so unfreundlich.", "Das ist doch komisch bei euch."], a: 0, ex: "An “I” sentence.", ex_fr: "Une phrase à la première personne." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    97: {
      gap: [["Ich hätte früher Deutsch lernen ___.", "sollen"], ["Du ___ mich doch wenigstens anrufen können!", "hättest"], ["Das hätte nicht passieren ___.", "dürfen"], ["Mir ist klar, dass ich mich früher hätte anmelden ___.", "sollen"]],
      fix: [["Ich hätte früher gefragt sollen.", "Ich hätte früher fragen sollen.", "Two infinitives: fragen sollen.", "Deux infinitifs : fragen sollen."], ["Ich weiß, dass ich früher anfangen sollen hätte.", "Ich weiß, dass ich früher hätte anfangen sollen.", "Subordinate clause: hätte before the two infinitives.", "Subordonnée : hätte devant les deux infinitifs."]],
      task: ["Think about your first weeks in a new place (a city, a job, a school). Write four sentences with hätte … sollen / können / müssen / dürfen.", "Repense à tes premières semaines dans un nouvel endroit (une ville, un travail, une école). Écris quatre phrases avec hätte … sollen / können / müssen / dürfen.", "Ich hätte mich früher bei der Stadt anmelden sollen. Ich hätte auch schon vorher einen Sprachkurs machen können. Für die Wohnung hätte ich nicht so viel Kaution zahlen müssen. Und den Vertrag hätte ich nicht ohne Übersetzung unterschreiben dürfen."]
    },
    98: {
      gap: [["In dem Film ___ es um eine Familie, die auswandert.", "geht"], ["Ob ich bleibe, kommt auf die Arbeit ___.", "an"], ["Es fällt ___ schwer, am Telefon Deutsch zu sprechen.", "mir"], ["Bei dem Fund handelt es sich ___ eine römische Münze.", "um"]],
      fix: [["Das Buch geht es um die Liebe.", "In dem Buch geht es um die Liebe.", "es geht um: the topic is in a phrase with in.", "es geht um : le livre devient un complément avec in."], ["Dass du gekommen bist, freut es mich.", "Dass du gekommen bist, freut mich.", "The clause comes first: no es.", "La proposition est en tête : pas de es."]],
      task: ["Talk about your experience with a new language in four sentences, using es geht um, es kommt darauf an, es fällt mir leicht / schwer and es lohnt sich.", "Parle de ton expérience avec une nouvelle langue en quatre phrases, avec es geht um, es kommt darauf an, es fällt mir leicht / schwer et es lohnt sich.", "Beim Sprachenlernen geht es nicht nur um Grammatik, sondern auch um Mut. Wie schnell man Fortschritte macht, kommt auf die Übung an. Es fällt mir leicht, Texte zu lesen, aber es fällt mir schwer, schnell zu antworten. Trotzdem lohnt es sich, jeden Tag ein bisschen zu sprechen."]
    },
    99: {
      gap: [["Das habe ich nicht so ___.", "gemeint"], ["Da liegt wohl ein ___ vor.", "Missverständnis", "misunderstanding", "malentendu"], ["Ich wollte Ihnen nicht zu nahe ___.", "treten"], ["Bei uns ist es ___, dass man sich umarmt.", "üblich", "usual", "d'usage"]],
      fix: [["Ich wollte Sie nicht zu nahe treten.", "Ich wollte Ihnen nicht zu nahe treten.", "jemandem (dative) zu nahe treten.", "jemandem (datif) zu nahe treten."], ["Mir ist aufgefallen, dass man hier sonntags macht keinen Lärm.", "Mir ist aufgefallen, dass man hier sonntags keinen Lärm macht.", "dass: verb at the end.", "dass : verbe à la fin."]],
      task: ["A colleague seemed offended because you said du to them on your first day. Write four sentences to clear up the misunderstanding.", "Un collègue a semblé vexé parce que tu l'as tutoyé dès ton premier jour. Écris quatre phrases pour dissiper le malentendu.", "Ich glaube, da liegt ein Missverständnis vor. Ich wollte Ihnen mit dem „Du“ nicht zu nahe treten. Bei meiner letzten Firma war es üblich, dass sich alle duzen. Wie macht man das hier eigentlich: Sagt man im Team Sie oder du?"]
    }
  });

  W.ROLEPLAYS.push(
  { id: "rueckblick", lesson: 97, level: "B2", icon: "rewind", partner: "Theresa", role: "a friend", role_fr: "une amie",
    title: "Looking back on the first year", title_fr: "Bilan de la première année",
    setting: "You moved to Germany a year ago. Over dinner, your friend Theresa asks you what you'd do differently if you could start again.", setting_fr: "Tu vis en Allemagne depuis un an. Au dîner, ton amie Theresa te demande ce que tu ferais autrement si tu pouvais recommencer.",
    turns: [
      { p: "Ein Jahr schon! Was würdest du heute anders machen?", en: "A year already! What would you do differently today?", fr: "Déjà un an ! Qu'est-ce que tu ferais autrement aujourd'hui ?" },
      { y: ["Ich hätte schon vor dem Umzug einen Sprachkurs machen sollen.", "Ich hätte schon vor dem Umzug einen Sprachkurs gemacht sollen.", "Ich sollte schon vor dem Umzug einen Sprachkurs machen haben."], en: "I should have done a language course before the move.", fr: "J'aurais dû suivre un cours de langue avant le déménagement.", why: "hätte + infinitive + sollen.", why_fr: "hätte + infinitif + sollen." },
      { p: "Aber du hast doch so schnell gelernt!", en: "But you learnt so quickly!", fr: "Mais tu as appris tellement vite !" },
      { y: ["Am Anfang fiel es mir aber sehr schwer, am Telefon zu sprechen.", "Am Anfang fiel mir es aber sehr schwer, am Telefon zu sprechen.", "Am Anfang fiel es mich aber sehr schwer, am Telefon zu sprechen."], en: "But at the beginning I found it very hard to speak on the phone.", fr: "Mais au début, j'avais beaucoup de mal à parler au téléphone.", why: "es fiel mir (dative) schwer.", why_fr: "es fiel mir (datif) schwer." },
      { p: "Und die Wohnungssuche? Das war doch ein Albtraum.", en: "And the flat hunting? That was a nightmare.", fr: "Et la recherche d'appartement ? C'était un cauchemar." },
      { y: ["Stimmt. Mir ist jetzt klar, dass ich früher hätte suchen sollen.", "Stimmt. Mir ist jetzt klar, dass ich früher suchen sollen hätte.", "Stimmt. Mir ist jetzt klar, dass ich hätte früher gesucht sollen."], en: "True. I realise now that I should have started looking earlier.", fr: "C'est vrai. Je me rends compte maintenant que j'aurais dû chercher plus tôt.", why: "Subordinate clause: hätte before the two infinitives.", why_fr: "Subordonnée : hätte devant les deux infinitifs." },
      { p: "Hättest du mich gefragt, hätte ich dir geholfen!", en: "If you'd asked me, I would have helped you!", fr: "Si tu me l'avais demandé, je t'aurais donné un coup de main !" },
      { y: ["Ich weiß. Ich hätte dich wirklich fragen können, aber ich wollte niemanden stören.", "Ich weiß. Ich hätte dich wirklich fragen gekonnt, aber ich wollte niemanden stören.", "Ich weiß. Ich könnte dich wirklich gefragt haben, aber ich wollte niemanden stören."], en: "I know. I really could have asked you, but I didn't want to bother anyone.", fr: "Je sais. J'aurais vraiment pu te demander, mais je ne voulais déranger personne.", why: "hätte + infinitive + können.", why_fr: "hätte + infinitif + können." },
      { p: "Und? Bist du trotzdem froh, dass du gekommen bist?", en: "And? Are you glad you came, all the same?", fr: "Alors ? Tu ne regrettes pas d'avoir fait le pas ?" },
      { y: ["Auf jeden Fall. Es hat sich gelohnt, und ich fühle mich hier inzwischen wie zu Hause.", "Auf jeden Fall. Es hat gelohnt sich, und ich fühle mich hier inzwischen wie zu Hause.", "Auf jeden Fall. Es hat sich gelohnt, und ich fühle mir hier inzwischen wie zu Hause."], en: "Definitely. It was worth it, and I feel at home here now.", fr: "Absolument. Ça en valait la peine, et je me sens chez moi ici maintenant.", why: "es hat sich gelohnt; sich fühlen (accusative): ich fühle mich.", why_fr: "es hat sich gelohnt ; sich fühlen (accusatif) : ich fühle mich." }
    ] },
  { id: "duodersie", lesson: 99, level: "B2", icon: "handshake", partner: "Herr Krause", role: "your neighbour", role_fr: "ton voisin",
    title: "Du or Sie?", title_fr: "Du ou Sie ?",
    setting: "Your older neighbour, Herr Krause, seemed a little cold since you said du to him at the bus stop. You meet him in the stairwell and want to clear things up.", setting_fr: "Ton voisin âgé, Herr Krause, a l'air un peu froid depuis que tu l'as tutoyé à l'arrêt de bus. Tu le croises dans l'escalier et tu veux mettre les choses au clair.",
    turns: [
      { p: "Guten Tag.", en: "Good afternoon.", fr: "Bonjour." },
      { y: ["Guten Tag, Herr Krause. Darf ich Sie kurz etwas fragen? Ich glaube, da liegt ein Missverständnis vor.", "Guten Tag, Herr Krause. Darf ich dich kurz etwas fragen? Ich glaube, da liegt ein Missverständnis vor.", "Guten Tag, Herr Krause. Darf ich Sie kurz etwas fragen? Ich glaube, da liegt ein Missverständnis bevor."], en: "Hello, Herr Krause. May I ask you something? I think there's been a misunderstanding.", fr: "Bonjour, Herr Krause. Puis-je vous demander quelque chose ? Je crois qu'il y a un malentendu.", why: "With an older neighbour: Sie; vorliegen.", why_fr: "Avec un voisin âgé : Sie ; vorliegen." },
      { p: "So? Welches denn?", en: "Oh? What's that?", fr: "Ah bon ? Lequel ?" },
      { y: ["Neulich an der Haltestelle habe ich „du“ gesagt. Ich wollte Ihnen damit nicht zu nahe treten.", "Neulich an der Haltestelle habe ich „du“ gesagt. Ich wollte Sie damit nicht zu nahe treten.", "Neulich an der Haltestelle habe ich „du“ gesagt. Ich wollte Ihnen damit nicht zu nah getreten."], en: "The other day at the bus stop I said du. I didn't mean to offend you.", fr: "L'autre jour à l'arrêt de bus, je vous ai tutoyé. Je ne voulais pas vous froisser.", why: "jemandem (dative) zu nahe treten.", why_fr: "jemandem (datif) zu nahe treten." },
      { p: "Na ja, ich war schon etwas überrascht. Wir kennen uns ja kaum.", en: "Well, I was a bit surprised. We hardly know each other.", fr: "Eh bien, j'étais un peu surpris. Nous nous connaissons à peine." },
      { y: ["Das verstehe ich. In meinem Land ist es üblich, dass man sich unter Nachbarn duzt.", "Das verstehe ich. In meinem Land ist es üblich, dass man duzt sich unter Nachbarn.", "Das verstehe ich. In meinem Land ist es gewöhnt, dass man sich unter Nachbarn duzt."], en: "I understand. In my country it's usual for neighbours to say du.", fr: "Je comprends. Dans mon pays, il est d'usage de se tutoyer entre voisins.", why: "es ist üblich, dass…: verb at the end.", why_fr: "es ist üblich, dass… : verbe à la fin." },
      { p: "Ach so! Das wusste ich nicht. Hier ist man da etwas förmlicher.", en: "Oh, I see! I didn't know that. People are a bit more formal here.", fr: "Ah, je vois ! Je ne le savais pas. Ici, on est un peu plus formel." },
      { y: ["Ich hätte Sie einfach fragen sollen. Wie macht man das hier eigentlich?", "Ich hätte Sie einfach fragen gesollt. Wie macht man das hier eigentlich?", "Ich sollte Sie einfach gefragt haben. Wie macht man das hier eigentlich?"], en: "I should simply have asked you. How do people do it here, actually?", fr: "J'aurais simplement dû vous demander. Comment ça se passe ici, au juste ?", why: "hätte + infinitive + sollen.", why_fr: "hätte + infinitif + sollen." },
      { p: "Meistens bietet der Ältere das Du an. Und wissen Sie was? Ich bin Werner.", en: "Usually the older person offers du. And you know what? I'm Werner.", fr: "En général, c'est le plus âgé qui propose le tutoiement. Et vous savez quoi ? Je m'appelle Werner." },
      { y: ["Das freut mich sehr! Gut, dass wir darüber gesprochen haben.", "Das freut es mich sehr! Gut, dass wir darüber gesprochen haben.", "Das freut mich sehr! Gut, dass wir haben darüber gesprochen."], en: "I'm very pleased! I'm glad we talked about it.", fr: "Ça me fait très plaisir ! C'est bien qu'on en ait parlé.", why: "Das freut mich (das already in first place: no es); dass: verb at the end.", why_fr: "Das freut mich (das déjà en tête : pas de es) ; dass : verbe à la fin." }
    ] }
  );

  W.READINGS.push({
    id: "gastarbeiter", level: "B2", icon: "book-open", title: "Gerufen wurden Arbeitskräfte", genre: "History",
    intro: "From 1955, West Germany signed agreements to recruit workers abroad. Many came for a few years and stayed for good.",
    intro_fr: "À partir de 1955, l'Allemagne de l'Ouest signe des accords pour recruter de la main-d'œuvre à l'étranger. Beaucoup sont venus pour quelques années et sont restés pour toujours.",
    paragraphs: [
      { de: "In den Fünfzigerjahren wuchs die westdeutsche Wirtschaft so schnell, dass Arbeitskräfte fehlten. Deshalb schloss die Bundesrepublik 1955 ein erstes Anwerbeabkommen mit Italien. Es folgten Spanien und Griechenland (1960), die Türkei (1961), Marokko (1963), Portugal (1964), Tunesien (1965) und Jugoslawien (1968).", en: "In the 1950s, the West German economy grew so fast that there weren't enough workers. That is why in 1955 the Federal Republic signed a first recruitment agreement with Italy. Spain and Greece (1960), Turkey (1961), Morocco (1963), Portugal (1964), Tunisia (1965) and Yugoslavia (1968) followed.", fr: "Dans les années 1950, l'économie ouest-allemande croît si vite que la main-d'œuvre manque. C'est pourquoi la République fédérale signe en 1955 un premier accord de recrutement avec l'Italie. Suivent l'Espagne et la Grèce (1960), la Turquie (1961), le Maroc (1963), le Portugal (1964), la Tunisie (1965) et la Yougoslavie (1968)." },
      { de: "Man nannte die Menschen „Gastarbeiter“, denn man ging davon aus, dass sie nach einigen Jahren zurückkehren würden. Am 10. September 1964 wurde der Portugiese Armando Rodrigues de Sá am Bahnhof Köln-Deutz als millionster Gastarbeiter begrüßt und bekam ein Moped geschenkt. Das Foto davon wurde berühmt.", en: "They were called “guest workers”, because it was assumed that they would go home after a few years. On 10 September 1964, the Portuguese Armando Rodrigues de Sá was welcomed at Cologne-Deutz station as the millionth guest worker and was given a moped. The photo of the moment became famous.", fr: "On appelle ces personnes des « Gastarbeiter » (travailleurs invités), car on part du principe qu'elles repartiront au bout de quelques années. Le 10 septembre 1964, le Portugais Armando Rodrigues de Sá est accueilli à la gare de Köln-Deutz comme le millionième travailleur invité et reçoit un cyclomoteur en cadeau. La photo devient célèbre." },
      { de: "Im November 1973 stoppte die Bundesregierung die Anwerbung. Viele Gastarbeiter blieben jedoch und holten ihre Familien nach. Der Schweizer Schriftsteller Max Frisch hatte das 1965 in einem berühmten Satz zusammengefasst: „Man hat Arbeitskräfte gerufen, und es kommen Menschen.“", en: "In November 1973, the federal government stopped recruitment. Many guest workers, however, stayed and brought their families over. The Swiss writer Max Frisch had summed this up in 1965 in a famous sentence: “We asked for workers, and human beings came.”", fr: "En novembre 1973, le gouvernement fédéral met fin au recrutement. Beaucoup de travailleurs invités restent pourtant et font venir leur famille. L'écrivain suisse Max Frisch l'avait résumé en 1965 dans une phrase célèbre : « On a appelé des bras, et ce sont des hommes qui sont venus. »" },
      { de: "Auch die DDR holte Arbeitskräfte ins Land, die sogenannten Vertragsarbeiter, unter anderem aus Vietnam und Mosambik. Heute haben Millionen Menschen in Deutschland Eltern oder Großeltern, die damals gekommen sind. Viele sagen im Rückblick, man hätte schon damals mehr für Sprachkurse und Integration tun sollen.", en: "East Germany also brought in workers, the so-called contract workers, among others from Vietnam and Mozambique. Today, millions of people in Germany have parents or grandparents who came at that time. Looking back, many say that more should have been done for language courses and integration even then.", fr: "La RDA fait elle aussi venir de la main-d'œuvre, les « Vertragsarbeiter » (travailleurs sous contrat), notamment du Vietnam et du Mozambique. Aujourd'hui, des millions de personnes en Allemagne ont des parents ou des grands-parents arrivés à cette époque. Avec le recul, beaucoup estiment qu'on aurait dû, dès cette époque, faire davantage pour les cours de langue et l'intégration." }
    ],
    glossary: { "Fünfzigerjahren": ["the fifties", "les années cinquante"], "westdeutsche": ["West German", "ouest-allemand"], "fehlten": ["were lacking", "manquaient"], "schloss": ["(schließen) concluded, signed", "(schließen) conclut, signa"], "Bundesrepublik": ["Federal Republic", "République fédérale"], "Anwerbeabkommen": ["recruitment agreement", "accord de recrutement"], "folgten": ["followed", "suivirent"], "Gastarbeiter": ["guest worker", "travailleur invité"], "davon": ["(davon ausgehen) to assume", "(davon ausgehen) partir du principe"], "zurückkehren": ["to return", "rentrer, revenir"], "Portugiese": ["Portuguese man", "Portugais"], "millionster": ["millionth", "millionième"], "begrüßt": ["welcomed", "accueilli"], "Moped": ["moped", "cyclomoteur"], "stoppte": ["stopped", "arrêta"], "Anwerbung": ["recruitment", "recrutement"], "holten": ["(nachholen) brought over", "(nachholen) firent venir"], "Schweizer": ["Swiss", "suisse"], "zusammengefasst": ["summed up", "résumé"], "DDR": ["GDR, East Germany", "RDA"], "sogenannten": ["so-called", "dits, ce qu'on appelle"], "Vertragsarbeiter": ["contract workers", "travailleurs sous contrat"], "Mosambik": ["Mozambique", "Mozambique"], "Rückblick": ["retrospect", "rétrospective, recul"], "Integration": ["integration", "intégration"] },
    questions: [
      { q: "Warum suchte die Bundesrepublik in den Fünfzigerjahren Arbeitskräfte im Ausland?", o: ["Die Wirtschaft wuchs so schnell, dass Arbeitskräfte fehlten.", "Es gab zu viele Arbeitslose.", "Die Fabriken wurden geschlossen."], a: 0 },
      { q: "Mit welchem Land wurde das erste Abkommen geschlossen?", o: ["Mit Italien", "Mit der Türkei", "Mit Portugal"], a: 0 },
      { q: "Wer wurde 1964 als millionster Gastarbeiter begrüßt?", o: ["Armando Rodrigues de Sá", "Max Frisch", "Ein Arbeiter aus Spanien ohne Namen"], a: 0 },
      { q: "Was geschah im November 1973?", o: ["Die Anwerbung wurde gestoppt.", "Das erste Abkommen wurde geschlossen.", "Die DDR holte Vertragsarbeiter."], a: 0 },
      { q: "Was meinte Max Frisch mit seinem Satz?", o: ["Es kamen nicht nur Arbeitskräfte, sondern Menschen mit Familien und Leben.", "Es kamen zu wenige Arbeitskräfte.", "Die Arbeitskräfte wollten sofort zurück."], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-b2-9", unit: "b2-9", level: "B2", icon: "radio",
    title: "Mehrsprachig aufwachsen", title_fr: "Grandir en plusieurs langues",
    context: "A radio report. The reporter talks to Laura, whose grandparents came to Germany from Italy, about growing up with two languages.", context_fr: "Un reportage radio. Le reporter parle avec Laura, dont les grands-parents sont venus d'Italie en Allemagne, de son enfance avec deux langues.",
    words: [["aufwachsen", "to grow up", "grandir"], ["die Muttersprache, -n", "the mother tongue", "la langue maternelle"], ["sich schämen", "to be ashamed", "avoir honte"], ["der Vorteil, -e", "the advantage", "l'avantage"], ["weitergeben", "to pass on", "transmettre"]],
    lines: [["Reporter", "Laura, deine Großeltern sind in den Sechzigern aus Italien gekommen. Welche Sprache hast du als Kind gesprochen?", "de-DE"], ["Laura", "Zu Hause Italienisch, in der Schule Deutsch. Bei uns ging es beim Essen immer laut und auf Italienisch zu.", "de-DE"], ["Reporter", "War das immer einfach?", "de-DE"], ["Laura", "Nein. Als Jugendliche habe ich mich manchmal geschämt, wenn meine Oma mich auf Italienisch vom Bus abgeholt hat. Heute weiß ich: Ich hätte stolz darauf sein sollen.", "de-DE"], ["Reporter", "Und deine Großeltern? Haben sie Deutsch gelernt?", "de-DE"], ["Laura", "Mein Opa ein bisschen. Es gab damals kaum Kurse, und nach zehn Stunden in der Fabrik fiel es ihm schwer, abends noch zu lernen.", "de-DE"], ["Reporter", "Sprichst du mit deinen eigenen Kindern Italienisch?", "de-DE"], ["Laura", "Ja, unbedingt. Es kommt nicht darauf an, perfekt zu sprechen. Es geht darum, die Sprache weiterzugeben. Das ist ein Teil von uns.", "de-DE"]],
    gist: ["Worum geht es in dem Gespräch?", ["Um Lauras Leben mit zwei Sprachen", "Um eine Reise nach Italien", "Um Lauras Arbeit in einer Fabrik"]],
    detail: [["Welche Sprache sprach Laura zu Hause?", ["Italienisch", "Deutsch", "Englisch"]], ["Warum hat sie sich als Jugendliche manchmal geschämt?", ["Ihre Oma sprach Italienisch mit ihr vor anderen.", "Sie konnte kein Deutsch.", "Sie hatte schlechte Noten."]], ["Warum hat Lauras Opa wenig Deutsch gelernt?", ["Es gab kaum Kurse, und nach der Arbeit war er müde.", "Er wollte nicht.", "Er war nur ein Jahr in Deutschland."]], ["Was ist Laura heute wichtig?", ["Die Sprache an ihre Kinder weiterzugeben", "Perfekt Italienisch zu sprechen", "Nach Italien zu ziehen"]]],
    decode: ["Heute weiß ich: Ich hätte stolz darauf sein sollen.", "Es kommt nicht darauf an, perfekt zu sprechen."],
    tip: "With es-phrases, the meaning is in the whole block, not in es: es geht um, es kommt darauf an, es fällt mir schwer. Learn to hear them as one unit, like a single word.", tip_fr: "Avec les tournures en es, le sens est dans le bloc entier, pas dans es : es geht um, es kommt darauf an, es fällt mir schwer. Apprends à les entendre comme une seule unité, comme un seul mot."
  }]);

  W.PROMPTS.push({ id: "de-b2-9", level: "B2", q: "Was ist wichtig, damit Menschen, die in ein neues Land ziehen, sich dort wohlfühlen? Nenne Beispiele und gib deine Meinung.", en: "What matters so that people who move to a new country feel at home there? Give examples and your opinion.", fr: "Qu'est-ce qui compte pour que les personnes qui s'installent dans un nouveau pays s'y sentent bien ? Donne des exemples et ton avis.", time: 180,
    phrases: ["Meiner Meinung nach geht es vor allem um…", "Es kommt auch darauf an, ob…", "Ich finde es wichtig, dass…", "Im Rückblick hätte man…", "Es lohnt sich, …"],
    model: "Meiner Meinung nach geht es vor allem um zwei Dinge: die Sprache und die Begegnung mit Menschen. Wer die Sprache nicht spricht, bleibt oft außen vor, auch wenn er sich große Mühe gibt. Deshalb finde ich es wichtig, dass es genug günstige Sprachkurse gibt, auch abends und für Eltern mit kleinen Kindern. Es kommt aber auch darauf an, ob die Nachbarn offen sind. Ein Verein, ein Chor oder ein Sportteam kann viel bewirken, weil man dort ganz natürlich Kontakte knüpft. Ich habe selbst erlebt, wie schwer der Anfang ist: Im Rückblick hätte ich viel früher in einen Verein gehen sollen. Es lohnt sich, den ersten Schritt zu machen, auch wenn es am Anfang Überwindung kostet." });

  W.WRITING_GUIDE["b2-9"] = { genre: "An opinion in an online forum (Goethe B2, writing part 1)", genre_fr: "Un avis sur un forum en ligne (Goethe B2, écrit partie 1)",
    plan: [["Report the opinion you are reacting to.", "Rapporte l'opinion à laquelle tu réagis."], ["Your position.", "Ta position."], ["An argument with an example.", "Un argument avec un exemple."], ["The other side, and your answer.", "L'autre point de vue, et ta réponse."], ["A conclusion.", "Une conclusion."]],
    marks: [["schreibt, Eltern sollten", "reporting the opinion (Konjunktiv)", "rapporter l'opinion (Konjunktiv)"], ["Da bin ich anderer Meinung", "your position", "ta position"], ["Es fällt Kindern leicht", "an es-phrase", "une tournure en es"], ["Meine Nachbarin", "an example", "un exemple"], ["hätten mit mir ihre Sprache sprechen sollen", "a regret with hätte … sollen", "un regret avec hätte … sollen"], ["Ich finde es deshalb wichtig", "the conclusion", "la conclusion"]] };

  /* Atelier de langue : champs allemands d'abord, puis anglais et français (voir localize.js). */
  W.LEXIS = W.LEXIS || {};
  W.LEXIS["b2-9"] = {
    colloc: [
      ["Vorurteile abbauen", "to break down prejudice", "combattre les préjugés", "Begegnungen helfen, Vorurteile abzubauen.", "abzubauen", ["abzunehmen", "abzustellen"]],
      ["Fuß fassen", "to gain a foothold", "prendre pied", "In der neuen Stadt hat sie schnell Fuß gefasst.", "gefasst", ["genommen", "gestellt"]],
      ["Kontakte knüpfen", "to make contacts", "nouer des contacts", "Im Sprachkurs kann man leicht Kontakte knüpfen.", "knüpfen", ["binden", "stellen"]],
      ["Wurzeln schlagen", "to put down roots", "s'enraciner", "Nach zehn Jahren hat die Familie hier Wurzeln geschlagen.", "geschlagen", ["gemacht", "gesetzt"]],
      ["Brücken bauen", "to build bridges", "jeter des ponts", "Sprachen können Brücken zwischen Kulturen bauen.", "bauen", ["machen", "legen"]],
      ["sich Mühe geben", "to make an effort", "se donner du mal", "Er gibt sich große Mühe mit der Aussprache.", "gibt", ["nimmt", "stellt"]],
      ["Verständnis zeigen", "to show understanding", "faire preuve de compréhension", "Die Nachbarn zeigten viel Verständnis.", "zeigten", ["machten", "gaben"]],
      ["ein Missverständnis aufklären", "to clear up a misunderstanding", "dissiper un malentendu", "Zum Glück konnten wir das Missverständnis schnell aufklären.", "aufklären", ["aufmachen", "ausmachen"]],
      ["Anschluss finden", "to fit in, to make friends", "trouver sa place, se faire des amis", "Im Verein hat er schnell Anschluss gefunden.", "gefunden", ["gemacht", "geholt"]],
      ["eine Sprache beherrschen", "to master a language", "maîtriser une langue", "Sie beherrscht drei Sprachen fließend.", "beherrscht", ["besitzt", "bewohnt"]]
    ],
    wf: [
      ["Die ___ ausländischer Abschlüsse dauert oft lange. (ANERKENNEN)", "Anerkennung"],
      ["Viele Kinder wachsen heute ___ auf. (SPRACHE)", "mehrsprachig"],
      ["Die kulturelle ___ macht die Stadt interessant. (VIEL)", "Vielfalt"],
      ["Ein kleines ___ führte zu einem Streit. (VERSTEHEN)", "Missverständnis"],
      ["Die ___ dauerte acht Jahre. (EINBÜRGERN)", "Einbürgerung"],
      ["Der Kellner war ziemlich ___. (HÖFLICH)", "unhöflich"],
      ["Nach einem Jahr fühlte sie sich in Hamburg ___. (HEIMAT)", "heimisch"],
      ["Nach der ___ suchte die Familie eine Wohnung. (ANKOMMEN)", "Ankunft"]
    ],
    kwt: [
      ["Es war ein Fehler, dass ich nicht früher angefangen habe.", "HÄTTE", "Ich ___ anfangen sollen.", "hätte früher"],
      ["Warum hast du mich nicht angerufen? Es war doch möglich.", "KÖNNEN", "Du hättest mich ___.", "anrufen können"],
      ["Das Thema des Artikels ist die Integration.", "GEHT", "In dem Artikel ___ die Integration.", "geht es um"],
      ["Das hängt vom Wetter ab.", "KOMMT", "Es ___ an.", "kommt auf das Wetter|kommt aufs Wetter"],
      ["Deutsch zu sprechen ist für mich noch schwer.", "FÄLLT", "Es ___, Deutsch zu sprechen.", "fällt mir noch schwer|fällt mir schwer"],
      ["Ich freue mich, dass du gekommen bist.", "ES", "___, dass du gekommen bist.", "Es freut mich"]
    ],
    idioms: [
      ["über den Tellerrand schauen", "offen für Neues und Fremdes sein", "to look beyond one's own little world", "voir plus loin que le bout de son nez", "Im Ausland lernt man, über den Tellerrand zu schauen.", "über den Tellerrand"],
      ["ins Fettnäpfchen treten", "aus Versehen etwas Peinliches sagen oder tun", "to put one's foot in it", "mettre les pieds dans le plat", "Mit dieser Frage bin ich voll ins Fettnäpfchen getreten.", "ins Fettnäpfchen getreten"],
      ["jemanden mit offenen Armen empfangen", "jemanden herzlich aufnehmen", "to welcome someone with open arms", "accueillir quelqu'un à bras ouverts", "Die Nachbarn haben uns mit offenen Armen empfangen.", "mit offenen Armen"],
      ["das Eis brechen", "eine angespannte Stimmung lockern", "to break the ice", "briser la glace", "Ein kleiner Witz hat das Eis gebrochen.", "das Eis gebrochen"],
      ["auf einer Wellenlänge liegen", "sich sehr gut verstehen", "to be on the same wavelength", "être sur la même longueur d'onde", "Wir liegen total auf einer Wellenlänge.", "auf einer Wellenlänge"],
      ["Andere Länder, andere Sitten.", "In jedem Land gelten andere Regeln.", "Other countries, other customs.", "Autres pays, autres mœurs.", "Andere Länder, andere Sitten: Hier gibt man sich zur Begrüßung die Hand.", "Andere Länder, andere Sitten"],
      ["sich wie zu Hause fühlen", "sich wohl und angenommen fühlen", "to feel at home", "se sentir chez soi", "Nach einem Jahr fühle ich mich hier wie zu Hause.", "wie zu Hause"],
      ["außen vor bleiben", "nicht dazugehören, ausgeschlossen sein", "to be left out", "rester sur la touche", "Wer die Sprache nicht spricht, bleibt oft außen vor.", "außen vor"]
    ]
  };

  W.COURSE.push({ id: "b2-9", level: "B2", icon: "users", title: "Living together", title_fr: "Vivre ensemble",
    intro: "Moving to a new country, finding your place, understanding different customs: in this unit, you'll learn to talk about regrets and criticism in the past (ich hätte früher anfangen sollen), the many fixed phrases with es (es geht um, es kommt darauf an, es fällt mir schwer), and how to clear up a misunderstanding, including the classic dilemma of du or Sie. You'll also read the story of the “guest workers” who changed West Germany.",
    intro_fr: "S'installer dans un nouveau pays, trouver sa place, comprendre d'autres coutumes : dans cette unité, tu vas apprendre à exprimer des regrets et des reproches sur le passé (ich hätte früher anfangen sollen), les nombreuses tournures figées avec es (es geht um, es kommt darauf an, es fällt mir schwer), et la façon de dissiper un malentendu, y compris le dilemme classique du du ou du Sie. Tu liras aussi l'histoire des « Gastarbeiter », qui ont transformé l'Allemagne de l'Ouest.",
    can: ["Express regrets and criticism with hätte + double infinitive", "Use fixed phrases with es, and know when es disappears", "Clear up a misunderstanding politely", "Talk about cultural differences without judging", "Write a forum opinion of about 150 words (Goethe B2)"],
    can_fr: ["Exprimer regrets et reproches avec hätte + double infinitif", "Employer les tournures figées avec es, et savoir quand es disparaît", "Dissiper poliment un malentendu", "Parler des différences culturelles sans juger", "Écrire un avis d'environ 150 mots sur un forum (Goethe B2)"],
    lessons: [97, 98, 99], vocab: ["migrationDE", "zusammenlebenDE"], reading: "gastarbeiter", prompt: "de-b2-9",
    writing: { task: "In a parents' forum, someone writes: “Families who move to Germany should only speak German with their children.” Give your opinion (150-180 words): report the opinion, take a position, give an argument with an example, present the other side and conclude.", task_fr: "Sur un forum de parents, quelqu'un écrit : « Les familles qui s'installent en Allemagne ne devraient parler qu'allemand avec leurs enfants. » Donne ton avis (150 à 180 mots) : rapporte l'opinion, prends position, donne un argument avec un exemple, présente l'autre point de vue et conclus.", words: "150-180",
      tips: ["Jemand schreibt, Eltern sollten…", "Da bin ich anderer Meinung.", "Es fällt Kindern leicht, …", "Natürlich ist es wichtig, dass…", "Ich finde es deshalb wichtig, …"],
      checklist: ["I reported the opinion", "I took a clear position", "I gave an argument with an example", "I presented the other side", "I wrote between 150 and 180 words"],
      checklist_fr: ["J'ai rapporté l'opinion", "J'ai pris une position claire", "J'ai donné un argument avec un exemple", "J'ai présenté l'autre point de vue", "J'ai écrit entre 150 et 180 mots"],
      model: "Jemand schreibt, Eltern sollten mit ihren Kindern nur Deutsch sprechen, wenn sie nach Deutschland ziehen. Da bin ich anderer Meinung.\n\nEs fällt Kindern leicht, zwei oder sogar drei Sprachen gleichzeitig zu lernen, und Mehrsprachigkeit ist ein großer Vorteil, sowohl im Beruf als auch im Leben. Außerdem ist die Familiensprache ein Teil der Identität. Meine Nachbarin hat als Kind nur Deutsch gesprochen, weil ihre Eltern das für besser hielten. Heute bedauert sie es sehr, denn mit ihrer Großmutter konnte sie sich nie richtig unterhalten. „Meine Eltern hätten mit mir ihre Sprache sprechen sollen“, sagt sie heute.\n\nNatürlich ist es wichtig, dass Kinder gut Deutsch lernen, denn in der Schule kommt es darauf an. Aber dafür sorgen Kita, Schule und Freunde meistens ganz von selbst.\n\nIch finde es deshalb wichtig, dass Eltern die Sprache sprechen, in der sie sich am wohlsten fühlen. Gute Deutschkurse für die ganze Familie sind sinnvoller als ein Verbot der eigenen Sprache." } });
})();
