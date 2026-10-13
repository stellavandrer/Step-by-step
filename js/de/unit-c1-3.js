/* Cours d'allemand, unité C1-3 « Generations and society / Générations et société » : des connecteurs pour nuancer
   (zumal, insofern … als, geschweige denn, zu …, als dass, nicht zuletzt), les adjectifs et participes employés
   comme noms (die Älteren, ein Angestellter, etwas Neues), animer une discussion. Personnages fictifs, prénoms
   allemands.
   Faits vérifiables seulement : assurances sociales sous Bismarck : maladie (1883), accidents du travail (1884),
   invalidité et vieillesse (1889) ; la pension de vieillesse commençait alors à 70 ans, âge abaissé à 65 ans en
   1916 ; réforme de 1957 : pension « dynamique » financée par répartition (les cotisations des actifs paient les
   pensions), ce qu'on appelle le « contrat entre les générations » ; l'âge légal de départ à la retraite augmente
   progressivement jusqu'à 67 ans (décision de 2007, mise en œuvre de 2012 à 2031) ; programme fédéral des maisons
   multigénérationnelles (Mehrgenerationenhäuser) ; le Bürgergeld remplace « Hartz IV » depuis 2023. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "generationenDE", icon: "users-round", title: "Generations", title_fr: "Les générations", level: "C1", words: [
    ["der Generationenkonflikt, -e", "the generation gap, the generational conflict", "le conflit de générations", "Beim Thema Klima gibt es einen deutlichen Generationenkonflikt."],
    ["der Rentner, - (die Rentnerin)", "the pensioner", "le retraité, la retraitée", "Viele Rentner engagieren sich ehrenamtlich."],
    ["das Rentenalter", "the retirement age", "l'âge de la retraite", "Das Rentenalter steigt schrittweise auf 67 Jahre."],
    ["der Ruhestand", "retirement", "la retraite", "Seit einem Jahr ist sie im Ruhestand."],
    ["die Lebenserwartung", "life expectancy", "l'espérance de vie", "Die Lebenserwartung ist in den letzten Jahrzehnten gestiegen."],
    ["die Altersarmut", "poverty in old age", "la pauvreté des personnes âgées", "Altersarmut betrifft besonders Frauen."],
    ["der demografische Wandel", "demographic change", "l'évolution démographique", "Der demografische Wandel verändert den Arbeitsmarkt."],
    ["die Pflege", "care, nursing", "les soins, la prise en charge", "Die Pflege der Eltern übernehmen oft die Töchter."],
    ["pflegebedürftig", "in need of care", "dépendant", "Ihr Vater ist seit dem Unfall pflegebedürftig."],
    ["das Pflegeheim, -e", "the care home", "la maison de retraite médicalisée", "Im Pflegeheim fehlt es an Personal."],
    ["der / die Angehörige, -n", "the relative", "le proche, la proche", "Viele Angehörige pflegen zu Hause."],
    ["die Kinderbetreuung", "childcare", "la garde d'enfants", "Ohne Kinderbetreuung können viele Eltern nicht arbeiten."],
    ["die Elternzeit", "parental leave", "le congé parental", "Er nimmt sechs Monate Elternzeit."],
    ["das Mehrgenerationenhaus, ¨-er", "the multigenerational centre", "la maison multigénérationnelle", "Im Mehrgenerationenhaus treffen sich Jung und Alt."],
    ["das Erbe", "the inheritance, the legacy", "l'héritage", "Sie hat das Erbe ihrer Großmutter angetreten."],
    ["der Enkel, - (die Enkelin)", "the grandchild", "le petit-fils, la petite-fille", "Am Wochenende kommen die Enkel zu Besuch."]
  ] },
  { id: "sozialstaatDE", icon: "shield", title: "The welfare state", title_fr: "L'État social", level: "C1", words: [
    ["der Sozialstaat", "the welfare state", "l'État social, l'État-providence", "Der Sozialstaat soll Menschen in Notlagen absichern."],
    ["die Sozialversicherung, -en", "social insurance", "la sécurité sociale", "Kranken- und Rentenversicherung gehören zur Sozialversicherung."],
    ["die Absicherung", "protection, security", "la protection, la couverture", "Selbstständige kümmern sich selbst um ihre Absicherung."],
    ["das Existenzminimum", "the subsistence minimum", "le minimum vital", "Das Bürgergeld soll das Existenzminimum sichern."],
    ["das Bürgergeld", "citizen's income (basic benefit in Germany)", "le revenu citoyen (aide de base en Allemagne)", "Das Bürgergeld hat 2023 Hartz IV abgelöst."],
    ["die Armut", "poverty", "la pauvreté", "Kinderarmut ist ein ernstes Problem."],
    ["die Ungleichheit, -en", "inequality", "l'inégalité", "Die soziale Ungleichheit wächst."],
    ["die Gerechtigkeit", "justice, fairness", "la justice, l'équité", "Es geht um Gerechtigkeit zwischen den Generationen."],
    ["umverteilen", "to redistribute", "redistribuer", "Steuern sollen Einkommen umverteilen."],
    ["die Umverteilung", "redistribution", "la redistribution", "Über die Umverteilung von Vermögen wird heftig gestritten."],
    ["die Solidarität", "solidarity", "la solidarité", "Das Rentensystem beruht auf Solidarität."],
    ["solidarisch", "showing solidarity", "solidaire", "Wir müssen solidarisch handeln."],
    ["der Beitragszahler, -", "the contributor", "le cotisant", "Auf jeden Rentner kommen immer weniger Beitragszahler."],
    ["das Umlageverfahren", "pay-as-you-go system", "le système par répartition", "Die Rente wird im Umlageverfahren finanziert."],
    ["die Altersvorsorge", "provision for old age", "la prévoyance vieillesse", "Junge Leute sollten früh an die Altersvorsorge denken."],
    ["der Generationenvertrag", "the intergenerational contract", "le contrat entre les générations", "Der Generationenvertrag ist kein echter Vertrag, sondern ein Prinzip."]
  ] });

  W.LESSONS.push(
  {
    id: 109, level: "C1", icon: "git-merge",
    title: "Zumal, insofern, geschweige denn: connectors for nuance", title_fr: "Zumal, insofern, geschweige denn : des connecteurs pour nuancer",
    subtitle: "The connectors that let you qualify, reinforce and limit an argument precisely.", subtitle_fr: "Les connecteurs qui permettent de nuancer, renforcer et limiter un argument avec précision.",
    body: `
<h2>Six connectors for C1</h2>
<table>
<tr><th>Connector</th><th>Meaning and example</th></tr>
<tr><td><s-de>zumal</s-de></td><td>especially as: <s-de>Ich bleibe zu Hause, zumal es regnet.</s-de></td></tr>
<tr><td><s-de>insofern …, als</s-de></td><td>in that, insofar as: <s-de>Die Reform ist insofern gerecht, als alle gleich viel zahlen.</s-de></td></tr>
<tr><td><s-de>geschweige denn</s-de></td><td>let alone (after a negative): <s-de>Er kann kaum gehen, geschweige denn laufen.</s-de></td></tr>
<tr><td><s-de>zu …, als dass</s-de> + Konj. II</td><td>too … for: <s-de>Das Problem ist zu komplex, als dass man es schnell lösen könnte.</s-de></td></tr>
<tr><td><s-de>umso mehr, als</s-de></td><td>all the more as: <s-de>Das freut mich umso mehr, als ich lange gewartet habe.</s-de></td></tr>
<tr><td><s-de>nicht zuletzt</s-de></td><td>not least: <s-de>Das liegt nicht zuletzt an den Kosten.</s-de></td></tr>
</table>
<h2>Word order</h2>
<p><s-de>zumal, als (dass)</s-de> introduce subordinate clauses: the verb goes to the end. <s-de>geschweige denn</s-de> is followed by just a word or phrase, usually an infinitive or a noun.</p>
<div class="tip">These words show your reader exactly how strong an argument is. <s-de>zumal</s-de> adds an extra reason, <s-de>insofern … als</s-de> limits a statement to one aspect, and <s-de>geschweige denn</s-de> rules out something even more demanding. Used well, one of them per paragraph makes a text sound unmistakably C1.</div>
`,
    body_fr: `
<h2>Six connecteurs pour le C1</h2>
<table>
<tr><th>Connecteur</th><th>Sens et exemple</th></tr>
<tr><td><s-de>zumal</s-de></td><td>d'autant plus que : <s-de>Ich bleibe zu Hause, zumal es regnet.</s-de></td></tr>
<tr><td><s-de>insofern …, als</s-de></td><td>dans la mesure où, en ce sens que : <s-de>Die Reform ist insofern gerecht, als alle gleich viel zahlen.</s-de></td></tr>
<tr><td><s-de>geschweige denn</s-de></td><td>et encore moins (après une négation) : <s-de>Er kann kaum gehen, geschweige denn laufen.</s-de></td></tr>
<tr><td><s-de>zu …, als dass</s-de> + Konj. II</td><td>trop … pour que : <s-de>Das Problem ist zu komplex, als dass man es schnell lösen könnte.</s-de></td></tr>
<tr><td><s-de>umso mehr, als</s-de></td><td>d'autant plus que : <s-de>Das freut mich umso mehr, als ich lange gewartet habe.</s-de></td></tr>
<tr><td><s-de>nicht zuletzt</s-de></td><td>notamment, pas seulement : <s-de>Das liegt nicht zuletzt an den Kosten.</s-de></td></tr>
</table>
<h2>L'ordre des mots</h2>
<p><s-de>zumal, als (dass)</s-de> introduisent des subordonnées : le verbe va à la fin. <s-de>geschweige denn</s-de> est suivi d'un simple mot ou groupe, souvent un infinitif ou un nom.</p>
<div class="tip">Ces mots indiquent au lecteur la force exacte d'un argument. <s-de>zumal</s-de> ajoute une raison de plus, <s-de>insofern … als</s-de> limite une affirmation à un aspect, et <s-de>geschweige denn</s-de> exclut quelque chose d'encore plus exigeant. Bien employé, l'un d'eux par paragraphe donne au texte une couleur nettement C1.</div>
`,
    examples: [
      ["Ich bleibe heute zu Hause, zumal es regnet.", "I'm staying at home today, especially as it's raining.", "Je reste à la maison aujourd'hui, d'autant plus qu'il pleut."],
      ["Die Reform ist insofern gerecht, als alle gleich viel zahlen.", "The reform is fair in that everyone pays the same.", "La réforme est juste dans la mesure où tout le monde paie autant."],
      ["Viele Rentner können kaum die Miete zahlen, geschweige denn reisen.", "Many pensioners can barely pay the rent, let alone travel.", "Beaucoup de retraités peuvent à peine payer leur loyer, et encore moins voyager."],
      ["Das Problem ist zu komplex, als dass man es schnell lösen könnte.", "The problem is too complex to be solved quickly.", "Le problème est trop complexe pour qu'on puisse le résoudre rapidement."],
      ["Das freut mich umso mehr, als ich lange darauf gewartet habe.", "I'm all the more pleased as I've waited a long time for it.", "Cela me fait d'autant plus plaisir que je l'ai attendu longtemps."],
      ["Die Rentenreform scheiterte nicht zuletzt am Widerstand der Gewerkschaften.", "The pension reform failed not least because of union resistance.", "La réforme des retraites a échoué notamment à cause de la résistance des syndicats."],
      ["Ich verstehe die Sorge, zumal die Zahl der Beitragszahler sinkt.", "I understand the concern, especially as the number of contributors is falling.", "Je comprends l'inquiétude, d'autant que le nombre de cotisants diminue."]
    ],
    quiz: [
      { q: "Ich bleibe zu Hause, ___ es regnet. (especially as)", q_fr: "Ich bleibe zu Hause, ___ es regnet. (d'autant plus que)", o: ["zumal", "geschweige denn", "insofern"], a: 0, ex: "zumal = especially as, verb at the end.", ex_fr: "zumal = d'autant plus que, verbe à la fin." },
      { q: "Er kann kaum Deutsch sprechen, ___ einen Roman lesen.", q_fr: "Er kann kaum Deutsch sprechen, ___ einen Roman lesen.", o: ["geschweige denn", "zumal", "umso mehr"], a: 0, ex: "geschweige denn = let alone.", ex_fr: "geschweige denn = et encore moins." },
      { q: "Das ist zu teuer, als dass wir es kaufen ___.", q_fr: "Das ist zu teuer, als dass wir es kaufen ___.", o: ["könnten", "können", "konnten"], a: 0, ex: "zu …, als dass + Konjunktiv II.", ex_fr: "zu …, als dass + Konjunktiv II." },
      { q: "Die Idee ist ___ gut, als sie wenig kostet.", q_fr: "Die Idee ist ___ gut, als sie wenig kostet.", o: ["insofern", "zumal", "geschweige"], a: 0, ex: "insofern … als = in that.", ex_fr: "insofern … als = dans la mesure où." },
      { q: "“not least because of the costs”", q_fr: "« notamment à cause des coûts »", o: ["nicht zuletzt wegen der Kosten", "nicht als letztes der Kosten", "zuletzt nicht wegen Kosten"], a: 0, ex: "nicht zuletzt = not least.", ex_fr: "nicht zuletzt = notamment." }
    ]
  },
  {
    id: 110, level: "C1", icon: "users",
    title: "Die Älteren, ein Angestellter, etwas Neues: adjectives as nouns", title_fr: "Die Älteren, ein Angestellter, etwas Neues : les adjectifs employés comme noms",
    subtitle: "Adjectives and participles that become nouns, but keep their adjective endings.", subtitle_fr: "Des adjectifs et des participes qui deviennent des noms, tout en gardant leurs terminaisons d'adjectif.",
    body: `
<h2>People</h2>
<p>Many words for people are adjectives or participles used as nouns: <s-de>der / die Angestellte</s-de> (employee), <s-de>Jugendliche, Erwachsene, Arbeitslose, Angehörige, Verwandte, Bekannte, Reisende, Pflegebedürftige</s-de>. They take a capital letter but keep their <b>adjective endings</b>:</p>
<table>
<tr><th>After…</th><th>Masculine</th><th>Feminine</th><th>Plural</th></tr>
<tr><td><s-de>der / die</s-de></td><td><s-de>der Angestellte</s-de></td><td><s-de>die Angestellte</s-de></td><td><s-de>die Angestellten</s-de></td></tr>
<tr><td><s-de>ein / eine</s-de>, no article</td><td><s-de>ein Angestellter</s-de></td><td><s-de>eine Angestellte</s-de></td><td><s-de>Angestellte</s-de></td></tr>
</table>
<p>And in the dative: <s-de>mit dem Angestellten, mit einer Angestellten, mit Angestellten</s-de>.</p>
<h2>Things and ideas</h2>
<p>Neuter adjectives as nouns name ideas: <s-de>das Gute, das Wichtigste, das Neue</s-de>. After <s-de>etwas, nichts, viel, wenig</s-de>, the ending is <s-de>-es</s-de>: <s-de>etwas Neues, nichts Besonderes, viel Gutes</s-de>. After <s-de>alles</s-de>, it's <s-de>-e</s-de>: <s-de>alles Gute, alles Wichtige</s-de>.</p>
<div class="tip">These forms are very common in public debates, because they let you talk about groups neutrally: <s-de>die Älteren, die Jüngeren, die Beschäftigten, die Studierenden</s-de>. The last two avoid choosing between a masculine and a feminine form.</div>
`,
    body_fr: `
<h2>Les personnes</h2>
<p>Beaucoup de mots désignant des personnes sont des adjectifs ou des participes employés comme noms : <s-de>der / die Angestellte</s-de> (l'employé, l'employée), <s-de>Jugendliche, Erwachsene, Arbeitslose, Angehörige, Verwandte, Bekannte, Reisende, Pflegebedürftige</s-de>. Ils prennent une majuscule mais gardent leurs <b>terminaisons d'adjectif</b> :</p>
<table>
<tr><th>Après…</th><th>Masculin</th><th>Féminin</th><th>Pluriel</th></tr>
<tr><td><s-de>der / die</s-de></td><td><s-de>der Angestellte</s-de></td><td><s-de>die Angestellte</s-de></td><td><s-de>die Angestellten</s-de></td></tr>
<tr><td><s-de>ein / eine</s-de>, sans article</td><td><s-de>ein Angestellter</s-de></td><td><s-de>eine Angestellte</s-de></td><td><s-de>Angestellte</s-de></td></tr>
</table>
<p>Et au datif : <s-de>mit dem Angestellten, mit einer Angestellten, mit Angestellten</s-de>.</p>
<h2>Les choses et les idées</h2>
<p>Les adjectifs neutres employés comme noms désignent des idées : <s-de>das Gute, das Wichtigste, das Neue</s-de>. Après <s-de>etwas, nichts, viel, wenig</s-de>, la terminaison est <s-de>-es</s-de> : <s-de>etwas Neues, nichts Besonderes, viel Gutes</s-de> (quelque chose de nouveau, rien de spécial). Après <s-de>alles</s-de>, c'est <s-de>-e</s-de> : <s-de>alles Gute, alles Wichtige</s-de>.</p>
<div class="tip">Ces formes sont très courantes dans les débats publics, car elles permettent de parler de groupes de façon neutre : <s-de>die Älteren, die Jüngeren, die Beschäftigten, die Studierenden</s-de>. Les deux dernières évitent de choisir entre une forme masculine et une forme féminine.</div>
`,
    examples: [
      ["Die Älteren sehen das oft ganz anders als die Jüngeren.", "Older people often see it quite differently from younger people.", "Les plus âgés voient souvent les choses tout autrement que les plus jeunes."],
      ["Mein Bruder ist Angestellter bei einer Versicherung.", "My brother is an employee at an insurance company.", "Mon frère est employé dans une compagnie d'assurances."],
      ["Ich habe mit einer Angestellten der Stadt gesprochen.", "I spoke to an employee of the town.", "J'ai parlé avec une employée de la ville."],
      ["Viele Angehörige pflegen ihre Eltern zu Hause.", "Many relatives look after their parents at home.", "Beaucoup de proches s'occupent de leurs parents à la maison."],
      ["Gibt es etwas Neues?", "Is there any news?", "Il y a du nouveau ?"],
      ["Das Wichtigste ist, dass niemand allein bleibt.", "The most important thing is that nobody is left alone.", "L'essentiel, c'est que personne ne reste seul."],
      ["Wir wünschen dir alles Gute zum Ruhestand!", "We wish you all the best for your retirement!", "Nous te souhaitons une très belle retraite !"]
    ],
    quiz: [
      { q: "Mein Vater ist ___ bei der Post. (employee)", q_fr: "Mein Vater ist ___ bei der Post. (employé)", o: ["Angestellter", "Angestellte", "Angestellten"], a: 0, ex: "No article, masculine: -er.", ex_fr: "Sans article, masculin : -er." },
      { q: "Ich habe mit dem ___ gesprochen.", q_fr: "Ich habe mit dem ___ gesprochen.", o: ["Angestellten", "Angestellter", "Angestellte"], a: 0, ex: "Dative after dem: -en.", ex_fr: "Datif après dem : -en." },
      { q: "Gibt es etwas ___?", q_fr: "Gibt es etwas ___?", o: ["Neues", "Neue", "Neuen"], a: 0, ex: "After etwas: -es.", ex_fr: "Après etwas : -es." },
      { q: "Wir wünschen dir alles ___!", q_fr: "Wir wünschen dir alles ___!", o: ["Gute", "Gutes", "Guten"], a: 0, ex: "After alles: -e.", ex_fr: "Après alles : -e." },
      { q: "Viele ___ haben keinen Job. (young people)", q_fr: "Viele ___ haben keinen Job. (jeunes)", o: ["Jugendliche", "Jugendlichen", "Jugendlicher"], a: 0, ex: "Plural without article: -e.", ex_fr: "Pluriel sans article : -e." }
    ]
  },
  {
    id: 111, level: "C1", kind: "functional", icon: "mic",
    title: "Everyday German: leading a discussion", title_fr: "L'allemand de tous les jours : animer une discussion",
    subtitle: "Open, give the floor, keep to the topic and time, sum up and close.", subtitle_fr: "Ouvrir, donner la parole, tenir le sujet et le temps, résumer et conclure.",
    body: `
<h2>Phrases for a moderator</h2>
<table>
<tr><th>To…</th><th>German</th></tr>
<tr><td>open</td><td><s-de>Ich begrüße Sie herzlich zu unserer Diskussion über…</s-de></td></tr>
<tr><td>give the floor</td><td><s-de>Frau Böhm, Sie haben das Wort.</s-de> · <s-de>Was meinen Sie dazu, Herr Lenz?</s-de></td></tr>
<tr><td>keep time</td><td><s-de>Darf ich Sie bitten, langsam zum Schluss zu kommen?</s-de></td></tr>
<tr><td>bring back to the topic</td><td><s-de>Lassen Sie uns zum eigentlichen Thema zurückkommen.</s-de></td></tr>
<tr><td>include others</td><td><s-de>Wir haben noch nicht gehört, wie die Jüngeren das sehen.</s-de></td></tr>
<tr><td>sum up</td><td><s-de>Wenn ich das kurz zusammenfassen darf: …</s-de></td></tr>
<tr><td>close</td><td><s-de>Damit sind wir am Ende unserer Diskussion. Vielen Dank an alle.</s-de></td></tr>
</table>
<div class="tip">A good moderator is neutral and fair: everyone gets roughly the same time, and you sum up the positions without taking sides. Phrases like <s-de>Wenn ich Sie richtig verstanden habe, …</s-de> help to check what someone means before passing the floor on.</div>
`,
    body_fr: `
<h2>Les formules de l'animateur</h2>
<table>
<tr><th>Pour…</th><th>En allemand</th></tr>
<tr><td>ouvrir</td><td><s-de>Ich begrüße Sie herzlich zu unserer Diskussion über…</s-de></td></tr>
<tr><td>donner la parole</td><td><s-de>Frau Böhm, Sie haben das Wort.</s-de> · <s-de>Was meinen Sie dazu, Herr Lenz?</s-de></td></tr>
<tr><td>gérer le temps</td><td><s-de>Darf ich Sie bitten, langsam zum Schluss zu kommen?</s-de></td></tr>
<tr><td>revenir au sujet</td><td><s-de>Lassen Sie uns zum eigentlichen Thema zurückkommen.</s-de></td></tr>
<tr><td>faire participer</td><td><s-de>Wir haben noch nicht gehört, wie die Jüngeren das sehen.</s-de></td></tr>
<tr><td>résumer</td><td><s-de>Wenn ich das kurz zusammenfassen darf: …</s-de></td></tr>
<tr><td>conclure</td><td><s-de>Damit sind wir am Ende unserer Diskussion. Vielen Dank an alle.</s-de></td></tr>
</table>
<div class="tip">Une bonne animation est neutre et équitable : chacun a à peu près le même temps de parole, et on résume les positions sans prendre parti. Des formules comme <s-de>Wenn ich Sie richtig verstanden habe, …</s-de> aident à vérifier ce que quelqu'un veut dire avant de passer la parole.</div>
`,
    examples: [
      ["Ich begrüße Sie herzlich zu unserer Diskussion über die Zukunft der Rente.", "A warm welcome to our discussion on the future of pensions.", "Je vous souhaite la bienvenue à notre débat sur l'avenir des retraites."],
      ["Frau Böhm, Sie haben das Wort.", "Frau Böhm, you have the floor.", "Madame Böhm, vous avez la parole."],
      ["Darf ich Sie bitten, langsam zum Schluss zu kommen?", "May I ask you to start wrapping up?", "Puis-je vous demander de conclure ?"],
      ["Lassen Sie uns zum eigentlichen Thema zurückkommen.", "Let's come back to the actual topic.", "Revenons au sujet qui nous occupe."],
      ["Wir haben noch nicht gehört, wie die Jüngeren das sehen.", "We haven't yet heard how the younger people see it.", "Nous n'avons pas encore entendu le point de vue des plus jeunes."],
      ["Wenn ich das kurz zusammenfassen darf: Alle wollen eine sichere Rente, aber nicht zu jedem Preis.", "If I may briefly sum up: everyone wants a secure pension, but not at any price.", "Si je peux résumer brièvement : tout le monde veut une retraite sûre, mais pas à n'importe quel prix."],
      ["Damit sind wir am Ende unserer Diskussion. Vielen Dank an alle.", "That brings us to the end of our discussion. Thank you all.", "Nous arrivons ainsi au terme de notre débat. Merci à tous."]
    ],
    quiz: [
      { q: "To give someone the floor:", q_fr: "Pour donner la parole :", o: ["Frau Böhm, Sie haben das Wort.", "Frau Böhm, Sie nehmen das Wort weg.", "Frau Böhm, reden Sie nicht."], a: 0, ex: "Sie haben das Wort.", ex_fr: "Sie haben das Wort." },
      { q: "To ask someone to finish:", q_fr: "Pour demander à quelqu'un de conclure :", o: ["Darf ich Sie bitten, langsam zum Schluss zu kommen?", "Hören Sie sofort auf!", "Sie reden zu viel."], a: 0, ex: "Polite and firm.", ex_fr: "Poli et ferme." },
      { q: "“Let's come back to the actual topic.”", q_fr: "« Revenons au sujet. »", o: ["Lassen Sie uns zum eigentlichen Thema zurückkommen.", "Lassen Sie uns das eigentliche Thema zurückkommen.", "Lassen Sie uns zum eigentlich Thema zurück."], a: 0, ex: "zu einem Thema zurückkommen.", ex_fr: "zu einem Thema zurückkommen." },
      { q: "A good moderator…", q_fr: "Un bon animateur…", o: ["stays neutral and shares speaking time fairly", "gives their own opinion first", "lets the loudest person talk most"], o_fr: ["reste neutre et répartit équitablement la parole", "donne d'abord son propre avis", "laisse parler le plus fort"], a: 0, ex: "Neutral and fair.", ex_fr: "Neutre et équitable." },
      { q: "“If I may briefly sum up…”", q_fr: "« Si je peux résumer brièvement… »", o: ["Wenn ich das kurz zusammenfassen darf…", "Wenn ich das kurz zusammen fasse darf…", "Wenn ich darf das kurz zusammenfassen…"], a: 0, ex: "Verb at the end of the wenn-clause.", ex_fr: "Verbe à la fin de la subordonnée en wenn." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    109: {
      gap: [["Ich bleibe zu Hause, ___ es regnet.", "zumal", "especially as", "d'autant plus que"], ["Er kann kaum gehen, ___ denn laufen.", "geschweige"], ["Das Problem ist zu komplex, als ___ man es schnell lösen könnte.", "dass"], ["Die Reform ist insofern gerecht, ___ alle gleich viel zahlen.", "als"]],
      fix: [["Ich bleibe zu Hause, zumal regnet es.", "Ich bleibe zu Hause, zumal es regnet.", "zumal: verb at the end.", "zumal : verbe à la fin."], ["Das ist zu teuer, als dass wir es kaufen können.", "Das ist zu teuer, als dass wir es kaufen könnten.", "zu …, als dass + Konjunktiv II.", "zu …, als dass + Konjunktiv II."]],
      task: ["Write four sentences about the pension system using zumal, insofern … als, geschweige denn and zu …, als dass.", "Écris quatre phrases sur le système de retraite avec zumal, insofern … als, geschweige denn et zu …, als dass.", "Junge Menschen sorgen sich um ihre Rente, zumal die Zahl der Beitragszahler sinkt. Das Umlageverfahren ist insofern solidarisch, als die Jungen für die Alten zahlen. Viele Rentnerinnen können kaum die Miete bezahlen, geschweige denn verreisen. Das Problem ist zu komplex, als dass es eine einfache Lösung gäbe."]
    },
    110: {
      gap: [["Mein Bruder ist ___ bei einer Bank. (angestellt)", "Angestellter"], ["Ich habe mit einer ___ der Stadt gesprochen. (angestellt)", "Angestellten"], ["Gibt es etwas ___? (neu)", "Neues"], ["Wir wünschen dir alles ___! (gut)", "Gute"]],
      fix: [["Viele Jugendlichen haben keinen Ausbildungsplatz.", "Viele Jugendliche haben keinen Ausbildungsplatz.", "After viele (no article): -e.", "Après viele (sans article) : -e."], ["Es gab nichts besonderes.", "Es gab nichts Besonderes.", "Adjective as noun after nichts: capital letter and -es.", "Adjectif employé comme nom après nichts : majuscule et -es."]],
      task: ["Write four sentences about a family celebration using adjectives as nouns: die Älteren, ein Verwandter / eine Verwandte, etwas Besonderes, das Schönste.", "Écris quatre phrases sur une fête de famille avec des adjectifs employés comme noms : die Älteren, ein Verwandter / eine Verwandte, etwas Besonderes, das Schönste.", "Beim Familienfest erzählten die Älteren Geschichten von früher. Eine Verwandte aus Hamburg war extra angereist. Für die Kinder gab es etwas Besonderes: eine Schatzsuche im Garten. Das Schönste war, dass alle Generationen zusammen gelacht haben."]
    },
    111: {
      gap: [["Frau Böhm, Sie haben das ___.", "Wort"], ["Darf ich Sie bitten, langsam zum ___ zu kommen?", "Schluss"], ["Lassen Sie uns zum eigentlichen Thema ___.", "zurückkommen"], ["Wenn ich das kurz ___ darf: …", "zusammenfassen"]],
      fix: [["Lassen Sie uns das Thema zurückkommen.", "Lassen Sie uns zum Thema zurückkommen.", "zu einem Thema zurückkommen.", "zu einem Thema zurückkommen."], ["Darf ich Sie bitten, zum Schluss kommen?", "Darf ich Sie bitten, zum Schluss zu kommen?", "bitten, … zu + infinitive.", "bitten, … zu + infinitif."]],
      task: ["You moderate a discussion on “Should grandparents look after grandchildren regularly?”. Write your opening, two interventions (giving the floor, keeping time) and your closing (about 60 words).", "Tu animes un débat sur « Les grands-parents devraient-ils garder régulièrement leurs petits-enfants ? ». Écris ton ouverture, deux interventions (donner la parole, gérer le temps) et ta conclusion (environ 60 mots).", "Ich begrüße Sie herzlich zu unserer Diskussion über die Rolle der Großeltern. Frau Weiß, Sie haben das Wort. Vielen Dank. Herr Lenz, darf ich Sie bitten, langsam zum Schluss zu kommen? Wenn ich das kurz zusammenfassen darf: Großeltern helfen gern, wollen aber auch Zeit für sich. Damit sind wir am Ende unserer Diskussion. Vielen Dank an alle."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "rentendebatte", lesson: 109, level: "C1", icon: "users-round", partner: "Heinz", role: "your grandfather", role_fr: "ton grand-père",
    title: "Pensions: a family debate", title_fr: "Les retraites : un débat en famille",
    setting: "At Sunday lunch, your grandfather Heinz says young people complain too much about pensions. You give him your point of view.", setting_fr: "Au déjeuner du dimanche, ton grand-père Heinz dit que les jeunes se plaignent trop au sujet des retraites. Tu lui donnes ton point de vue.",
    turns: [
      { p: "Ihr jungen Leute jammert immer über die Rente. Wir haben doch auch unser Leben lang eingezahlt!", en: "You young people always moan about pensions. We paid in all our lives too!", fr: "Vous, les jeunes, vous vous plaignez toujours des retraites. Nous aussi, nous avons cotisé toute notre vie !" },
      { y: ["Das stimmt, Opa. Aber wir machen uns Sorgen, zumal es immer weniger Beitragszahler gibt.", "Das stimmt, Opa. Aber wir machen uns Sorgen, zumal gibt es immer weniger Beitragszahler.", "Das stimmt, Opa. Aber wir machen uns Sorgen, geschweige denn es immer weniger Beitragszahler gibt."], en: "That's true, Grandad. But we're worried, especially as there are fewer and fewer contributors.", fr: "C'est vrai, papi. Mais on s'inquiète, d'autant qu'il y a de moins en moins de cotisants.", why: "zumal: verb at the end.", why_fr: "zumal : verbe à la fin." },
      { p: "Das war bei uns auch nicht anders. Man muss eben sparen.", en: "It was no different for us. You just have to save.", fr: "Ce n'était pas différent pour nous. Il faut économiser, voilà tout." },
      { y: ["Viele in meinem Alter können kaum die Miete zahlen, geschweige denn etwas sparen.", "Viele in meinem Alter können kaum die Miete zahlen, geschweige etwas sparen denn.", "Viele in meinem Alter können kaum die Miete zahlen, zumal denn etwas sparen."], en: "Many people my age can barely pay the rent, let alone save anything.", fr: "Beaucoup de gens de mon âge peuvent à peine payer leur loyer, et encore moins mettre de l'argent de côté.", why: "geschweige denn + infinitive phrase.", why_fr: "geschweige denn + groupe infinitif." },
      { p: "Hm. Aber das System ist doch gerecht, oder?", en: "Hm. But the system is fair, isn't it?", fr: "Hum. Mais le système est juste, non ?" },
      { y: ["Es ist insofern gerecht, als jede Generation für die vorherige zahlt. Aber die Rechnung geht nicht mehr so leicht auf.", "Es ist insofern gerecht, dass jede Generation für die vorherige zahlt. Aber die Rechnung geht nicht mehr so leicht auf.", "Es ist insofern gerecht, als jede Generation zahlt für die vorherige. Aber die Rechnung geht nicht mehr so leicht auf."], en: "It's fair in that each generation pays for the one before. But the sums don't add up so easily any more.", fr: "Il est juste dans la mesure où chaque génération paie pour la précédente. Mais le calcul ne tombe plus aussi juste.", why: "insofern …, als (not dass); verb at the end.", why_fr: "insofern …, als (pas dass) ; verbe à la fin." },
      { p: "Und was schlagt ihr Jüngeren dann vor?", en: "And what do you younger ones suggest, then?", fr: "Et vous, les plus jeunes, vous proposez quoi ?" },
      { y: ["Das Problem ist zu komplex, als dass es eine einfache Lösung gäbe. Aber wir sollten alle ehrlich darüber reden.", "Das Problem ist zu komplex, als dass es eine einfache Lösung gibt gäbe. Aber wir sollten alle ehrlich darüber reden.", "Das Problem ist zu komplex, dass es eine einfache Lösung gäbe. Aber wir sollten alle ehrlich darüber reden."], en: "The problem is too complex for there to be a simple solution. But we should all talk about it honestly.", fr: "Le problème est trop complexe pour qu'il y ait une solution simple. Mais nous devrions tous en parler honnêtement.", why: "zu …, als dass + Konjunktiv II (gäbe).", why_fr: "zu …, als dass + Konjunktiv II (gäbe)." },
      { p: "Na gut. Darauf trinken wir noch einen Kaffee.", en: "All right. Let's have another coffee to that.", fr: "Bon, d'accord. Buvons encore un café à ça." },
      { y: ["Gern. Und es freut mich umso mehr, als wir sonst nie über so etwas sprechen.", "Gern. Und es freut mich umso mehr, als wir sprechen sonst nie über so etwas.", "Gern. Und es freut mich umso mehr, dass als wir sonst nie über so etwas sprechen."], en: "Gladly. And I'm all the more pleased as we never usually talk about things like this.", fr: "Avec plaisir. Et cela me fait d'autant plus plaisir qu'on ne parle jamais de ce genre de choses d'habitude.", why: "umso mehr, als: verb at the end.", why_fr: "umso mehr, als : verbe à la fin." }
    ] },
  { id: "podiumsdiskussion", lesson: 111, level: "C1", icon: "mic", partner: "Frau Böhm", role: "a panel member", role_fr: "une participante au débat",
    title: "Moderating a panel", title_fr: "Animer une table ronde",
    setting: "You moderate a panel discussion at a multigenerational centre on “Young and old: who helps whom?”. Frau Böhm, a retired teacher, is one of the guests, and she likes to talk.", setting_fr: "Tu animes une table ronde dans une maison multigénérationnelle sur le thème « Jeunes et vieux : qui aide qui ? ». Frau Böhm, une enseignante à la retraite, fait partie des invités, et elle aime parler.",
    turns: [
      { p: "(Das Publikum wartet. Die Diskussion beginnt.)", en: "(The audience is waiting. The discussion is starting.)", fr: "(Le public attend. Le débat commence.)" },
      { y: ["Ich begrüße Sie herzlich zu unserer Diskussion. Frau Böhm, Sie haben das Wort.", "Ich begrüße Sie herzlich zu unsere Diskussion. Frau Böhm, Sie haben das Wort.", "Ich begrüße Ihnen herzlich zu unserer Diskussion. Frau Böhm, Sie haben das Wort."], en: "A warm welcome to our discussion. Frau Böhm, you have the floor.", fr: "Je vous souhaite la bienvenue à notre débat. Madame Böhm, vous avez la parole.", why: "begrüßen + accusative (Sie); zu + dative (unserer).", why_fr: "begrüßen + accusatif (Sie) ; zu + datif (unserer)." },
      { p: "Danke. Also, früher war alles anders. Als ich jung war, haben wir … und dann noch … und außerdem …", en: "Thank you. Well, everything was different in the past. When I was young, we … and then … and also …", fr: "Merci. Alors, autrefois, tout était différent. Quand j'étais jeune, on … et puis … et en plus …" },
      { y: ["Vielen Dank, Frau Böhm. Darf ich Sie bitten, langsam zum Schluss zu kommen? Wir haben noch nicht gehört, wie die Jüngeren das sehen.", "Vielen Dank, Frau Böhm. Darf ich Sie bitten, langsam zum Schluss kommen? Wir haben noch nicht gehört, wie die Jüngeren das sehen.", "Vielen Dank, Frau Böhm. Darf ich Ihnen bitten, langsam zum Schluss zu kommen? Wir haben noch nicht gehört, wie die Jüngeren das sehen."], en: "Thank you, Frau Böhm. May I ask you to start wrapping up? We haven't heard yet how the younger people see it.", fr: "Merci, Madame Böhm. Puis-je vous demander de conclure ? Nous n'avons pas encore entendu le point de vue des plus jeunes.", why: "jemanden bitten, … zu + infinitive.", why_fr: "jemanden bitten, … zu + infinitif." },
      { p: "Ja, aber ich wollte noch sagen, dass die Handys an allem schuld sind!", en: "Yes, but I wanted to say that mobile phones are to blame for everything!", fr: "Oui, mais je voulais encore dire que les portables sont responsables de tout !" },
      { y: ["Das ist ein interessanter Punkt, aber lassen Sie uns zum eigentlichen Thema zurückkommen: Wer hilft wem im Alltag?", "Das ist ein interessanter Punkt, aber lassen Sie uns das eigentliche Thema zurückkommen: Wer hilft wem im Alltag?", "Das ist ein interessanter Punkt, aber lassen Sie uns zum eigentlichen Thema zurückkommen: Wer hilft wen im Alltag?"], en: "That's an interesting point, but let's come back to the actual topic: who helps whom in everyday life?", fr: "C'est un point intéressant, mais revenons au sujet : qui aide qui au quotidien ?", why: "zum Thema zurückkommen; helfen + dative: wem.", why_fr: "zum Thema zurückkommen ; helfen + datif : wem." },
      { p: "Na schön. Ich gebe den Jugendlichen in unserem Haus Nachhilfe, und sie erklären mir mein Smartphone.", en: "Very well. I give the young people in our centre tutoring, and they explain my smartphone to me.", fr: "Bon. Je donne des cours particuliers aux jeunes de notre maison, et eux m'expliquent mon smartphone." },
      { y: ["Wenn ich das kurz zusammenfassen darf: Hier helfen die Älteren den Jüngeren und umgekehrt.", "Wenn ich das kurz zusammenfassen darf: Hier helfen die Älteren den Jüngere und umgekehrt.", "Wenn ich darf das kurz zusammenfassen: Hier helfen die Älteren den Jüngeren und umgekehrt."], en: "If I may briefly sum up: here the older people help the younger ones and vice versa.", fr: "Si je peux résumer : ici, les plus âgés aident les plus jeunes, et inversement.", why: "Adjectives as nouns: die Älteren, den Jüngeren (dative plural).", why_fr: "Adjectifs employés comme noms : die Älteren, den Jüngeren (datif pluriel)." },
      { p: "Genau so ist es!", en: "That's exactly how it is!", fr: "C'est exactement ça !" },
      { y: ["Damit sind wir am Ende unserer Diskussion. Vielen Dank an alle, und Ihnen, Frau Böhm, alles Gute!", "Damit sind wir am Ende unserer Diskussion. Vielen Dank an alle, und Ihnen, Frau Böhm, alles Gutes!", "Damit wir sind am Ende unserer Diskussion. Vielen Dank an alle, und Ihnen, Frau Böhm, alles Gute!"], en: "That brings us to the end of our discussion. Thank you all, and all the best to you, Frau Böhm!", fr: "Nous arrivons au terme de notre débat. Merci à tous, et à vous, Madame Böhm, tous nos vœux !", why: "Verb second after damit; alles Gute (-e after alles).", why_fr: "Verbe en deuxième position après damit ; alles Gute (-e après alles)." }
    ] }
  );

  W.READINGS.push({
    id: "sozialversicherung", level: "C1", icon: "book-open", title: "Bismarck und der Vertrag zwischen den Generationen", genre: "History",
    intro: "Germany was one of the first countries to introduce social insurance. How did it start, and why is the pension system under pressure today?",
    intro_fr: "L'Allemagne a été l'un des premiers pays à introduire des assurances sociales. Comment tout a-t-il commencé, et pourquoi le système des retraites est-il aujourd'hui sous pression ?",
    paragraphs: [
      { de: "In den 1880er-Jahren führte das Deutsche Reich unter Reichskanzler Otto von Bismarck eine Reihe von Sozialversicherungen ein: 1883 die Krankenversicherung, 1884 die Unfallversicherung und 1889 die Invaliditäts- und Altersversicherung. Bismarck handelte dabei nicht zuletzt aus politischem Kalkül, denn er wollte die Arbeiterbewegung schwächen, indem er den Arbeitern eine gewisse Absicherung bot.", en: "In the 1880s, the German Empire under Chancellor Otto von Bismarck introduced a series of social insurance schemes: health insurance in 1883, accident insurance in 1884 and invalidity and old-age insurance in 1889. Bismarck acted not least out of political calculation, as he wanted to weaken the labour movement by offering workers a degree of security.", fr: "Dans les années 1880, l'Empire allemand, sous la direction du chancelier Otto von Bismarck, introduit une série d'assurances sociales : l'assurance maladie en 1883, l'assurance accidents du travail en 1884 et l'assurance invalidité et vieillesse en 1889. Bismarck agit notamment par calcul politique : il veut affaiblir le mouvement ouvrier en offrant aux ouvriers une certaine protection." },
      { de: "Eine Altersrente bekam man damals erst mit 70 Jahren, zu einer Zeit, als nur wenige dieses Alter erreichten. 1916 wurde die Grenze auf 65 Jahre gesenkt. Wer heute an die Rente denkt, sollte also bedenken, wie sehr sich die Lebenserwartung seither verändert hat.", en: "At that time, you only received an old-age pension at 70, when few people reached that age. In 1916, the threshold was lowered to 65. Anyone thinking about pensions today should therefore bear in mind how much life expectancy has changed since then.", fr: "À l'époque, on ne touchait une pension de vieillesse qu'à 70 ans, alors que peu de gens atteignaient cet âge. En 1916, le seuil est abaissé à 65 ans. Quand on pense aujourd'hui aux retraites, il faut donc garder à l'esprit à quel point l'espérance de vie a changé depuis." },
      { de: "Mit der Rentenreform von 1957 entstand das System, das bis heute gilt: Die Beiträge der Erwerbstätigen werden direkt verwendet, um die Renten der Älteren zu bezahlen. Dieses Umlageverfahren beruht auf einem unausgesprochenen „Generationenvertrag“: Wer heute einzahlt, vertraut darauf, dass die nächste Generation später für ihn zahlt.", en: "The pension reform of 1957 created the system that still applies today: the contributions of people in work are used directly to pay older people's pensions. This pay-as-you-go system rests on an unspoken “intergenerational contract”: those who pay in today trust that the next generation will pay for them later.", fr: "La réforme des retraites de 1957 crée le système encore en vigueur aujourd'hui : les cotisations des actifs servent directement à payer les pensions des plus âgés. Ce système par répartition repose sur un « contrat entre les générations » tacite : celui qui cotise aujourd'hui compte sur la génération suivante pour payer pour lui plus tard." },
      { de: "Genau hier liegt das Problem, zumal die Menschen länger leben und weniger Kinder geboren werden: Auf jeden Rentner kommen immer weniger Beitragszahler. Die Politik hat unter anderem beschlossen, das Rentenalter schrittweise bis 2031 auf 67 Jahre anzuheben. Ob das genügt, ist umstritten; das Thema ist zu komplex, als dass es eine einfache Antwort gäbe.", en: "This is precisely where the problem lies, especially as people are living longer and fewer children are being born: there are fewer and fewer contributors for every pensioner. Among other things, politicians have decided to raise the retirement age gradually to 67 by 2031. Whether that is enough is disputed; the issue is too complex for there to be a simple answer.", fr: "C'est précisément là que se situe le problème, d'autant que l'on vit plus longtemps et que moins d'enfants naissent : il y a de moins en moins de cotisants pour chaque retraité. Les responsables politiques ont notamment décidé de relever progressivement l'âge de la retraite à 67 ans d'ici 2031. Cela suffira-t-il ? La question est débattue ; le sujet est trop complexe pour qu'il y ait une réponse simple." }
    ],
    glossary: { "Deutsche Reich": ["German Empire", "Empire allemand"], "Reichskanzler": ["Reich Chancellor", "chancelier du Reich"], "Reihe": ["series", "série"], "Krankenversicherung": ["health insurance", "assurance maladie"], "Unfallversicherung": ["accident insurance", "assurance accidents"], "Invaliditäts": ["invalidity", "invalidité"], "Altersversicherung": ["old-age insurance", "assurance vieillesse"], "Kalkül": ["calculation", "calcul"], "Arbeiterbewegung": ["labour movement", "mouvement ouvrier"], "schwächen": ["to weaken", "affaiblir"], "Arbeitern": ["workers", "ouvriers"], "bot": ["(bieten) offered", "(bieten) offrit"], "Altersrente": ["old-age pension", "pension de vieillesse"], "erreichten": ["reached", "atteignaient"], "gesenkt": ["lowered", "abaissé"], "bedenken": ["to bear in mind", "garder à l'esprit"], "Rentenreform": ["pension reform", "réforme des retraites"], "Erwerbstätigen": ["people in work", "actifs"], "beruht": ["rests, is based", "repose"], "unausgesprochenen": ["unspoken", "tacite"], "einzahlt": ["pays in", "cotise"], "vertraut": ["trusts", "fait confiance"], "anzuheben": ["to raise", "relever"], "genügt": ["is enough", "suffit"] },
    questions: [
      { q: "Welche Versicherung wurde 1883 eingeführt?", o: ["Die Krankenversicherung", "Die Altersversicherung", "Die Unfallversicherung"], a: 0 },
      { q: "Warum führte Bismarck laut Text die Sozialversicherungen ein?", o: ["Auch aus politischem Kalkül, um die Arbeiterbewegung zu schwächen", "Weil die Arbeiter es verlangten und er ihnen immer nachgab", "Weil die Kirche es vorschrieb"], a: 0 },
      { q: "Ab welchem Alter bekam man ursprünglich eine Altersrente?", o: ["Ab 70 Jahren", "Ab 65 Jahren", "Ab 67 Jahren"], a: 0 },
      { q: "Was bedeutet „Umlageverfahren“?", o: ["Die Beiträge der Erwerbstätigen bezahlen direkt die Renten.", "Jeder spart nur für sich selbst.", "Der Staat zahlt alles aus Steuern."], a: 0 },
      { q: "Was hat die Politik unter anderem beschlossen?", o: ["Das Rentenalter bis 2031 schrittweise auf 67 Jahre anzuheben", "Die Rente abzuschaffen", "Das Rentenalter auf 60 Jahre zu senken"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-c1-3", unit: "c1-3", level: "C1", icon: "radio",
    title: "Im Mehrgenerationenhaus", title_fr: "Dans la maison multigénérationnelle",
    context: "A radio report from a multigenerational centre. The reporter talks to Erika, a retired seamstress, and Leon, a student who comes every week.", context_fr: "Un reportage radio dans une maison multigénérationnelle. Le reporter parle avec Erika, couturière à la retraite, et Leon, un étudiant qui vient chaque semaine.",
    words: [["die Schneiderin, -nen", "the seamstress", "la couturière"], ["der Treffpunkt, -e", "the meeting place", "le lieu de rencontre"], ["die Einsamkeit", "loneliness", "la solitude"], ["voneinander", "from each other", "les uns des autres"], ["der Austausch", "exchange", "l'échange"]],
    lines: [["Reporter", "Erika, Sie kommen jeden Dienstag hierher. Warum?", "de-DE"], ["Erika", "Seit mein Mann gestorben ist, war ich viel allein. Hier treffe ich Menschen, und die Jüngeren fragen mich um Rat, zumal ich früher Schneiderin war. Neulich habe ich drei Studenten gezeigt, wie man einen Knopf annäht.", "de-DE"], ["Reporter", "Leon, und was bringt Ihnen das?", "de-DE"], ["Leon", "Ehrlich gesagt kam ich zuerst nur wegen des günstigen Mittagessens. Aber dann habe ich gemerkt, wie viel man voneinander lernen kann.", "de-DE"], ["Erika", "Er erklärt mir mein Tablet. Ohne ihn könnte ich kaum eine Nachricht schreiben, geschweige denn mit meiner Enkelin in Kanada telefonieren.", "de-DE"], ["Reporter", "Gibt es auch Konflikte zwischen den Generationen?", "de-DE"], ["Leon", "Natürlich, beim Thema Klima oder Rente sind wir oft anderer Meinung. Aber hier streitet man insofern anders, als man sich persönlich kennt.", "de-DE"], ["Erika", "Das Wichtigste ist, dass niemand allein bleibt. Das gilt für die Alten genauso wie für die Jungen.", "de-DE"]],
    gist: ["Worum geht es in dem Bericht?", ["Um Begegnungen zwischen Jung und Alt", "Um eine neue Rentenreform", "Um einen Nähkurs für Profis"]],
    detail: [["Warum kommt Erika ins Mehrgenerationenhaus?", ["Seit dem Tod ihres Mannes war sie viel allein.", "Sie arbeitet dort als Köchin.", "Ihre Enkelin wohnt dort."]], ["Warum kam Leon am Anfang?", ["Wegen des günstigen Mittagessens", "Weil seine Universität es verlangte", "Um Erika zu besuchen"]], ["Wobei hilft Leon Erika?", ["Bei ihrem Tablet", "Beim Nähen", "Beim Einkaufen"]], ["Was ist für Erika das Wichtigste?", ["Dass niemand allein bleibt", "Dass alle gleicher Meinung sind", "Dass es billiges Essen gibt"]]],
    decode: ["Ohne ihn könnte ich kaum eine Nachricht schreiben, geschweige denn mit meiner Enkelin in Kanada telefonieren.", "Aber hier streitet man insofern anders, als man sich persönlich kennt."],
    tip: "C1 connectors often arrive late in a sentence and change its meaning: zumal adds a reason, geschweige denn raises the stakes, insofern … als limits the claim. Keep listening after the first verb.", tip_fr: "Les connecteurs du C1 arrivent souvent tard dans la phrase et en changent le sens : zumal ajoute une raison, geschweige denn place la barre plus haut, insofern … als limite l'affirmation. Continue d'écouter après le premier verbe."
  }]);

  W.PROMPTS.push({ id: "de-c1-3", level: "C1", q: "Halte einen Vortrag (etwa drei bis vier Minuten): „Was schulden sich die Generationen gegenseitig?“ Gliedere deinen Vortrag, nenne Beispiele (Rente, Klima, Pflege, Wohnen) und komm zu einem begründeten Fazit.", en: "Give a talk (about three to four minutes): “What do the generations owe each other?” Structure your talk, give examples (pensions, climate, care, housing) and reach a reasoned conclusion.", fr: "Fais un exposé (environ trois à quatre minutes) : « Que se doivent les générations les unes aux autres ? » Structure ton exposé, donne des exemples (retraites, climat, soins, logement) et aboutis à une conclusion argumentée.", time: 240,
    phrases: ["Mein Vortrag gliedert sich in…", "Zunächst möchte ich auf … eingehen.", "Die Älteren…, die Jüngeren…", "…, zumal…", "Abschließend lässt sich festhalten, dass…"],
    model: "Mein Vortrag gliedert sich in drei Teile: was die Jüngeren den Älteren schulden, was die Älteren den Jüngeren schulden, und was daraus folgt. Zunächst möchte ich auf die Rente eingehen. Das Umlageverfahren beruht darauf, dass die Erwerbstätigen die Renten der Älteren finanzieren. Die Jüngeren übernehmen damit Verantwortung für eine Generation, die das Land aufgebaut hat. Umgekehrt tragen die Älteren Verantwortung für die Zukunft, zumal politische Entscheidungen beim Klimaschutz vor allem die Jüngeren betreffen werden. Ein weiteres Beispiel ist die Pflege: Viele Angehörige pflegen ihre Eltern zu Hause, oft mit großem persönlichem Einsatz. Gleichzeitig unterstützen viele Großeltern ihre Kinder bei der Kinderbetreuung. Abschließend lässt sich festhalten, dass die Generationen sich nicht als Gegner sehen sollten, sondern als Partner. Ein fairer Ausgleich ist zwar schwierig, aber nur gemeinsam erreichbar." });

  W.WRITING_GUIDE["c1-3"] = { genre: "An argued text (C1)", genre_fr: "Un texte argumenté (C1)",
    plan: [["A lead-in and your thesis.", "Une amorce et ta thèse."], ["An argument for, with evidence.", "Un argument pour, étayé."], ["An argument against.", "Un argument contre."], ["A nuanced weighing up.", "Une pesée nuancée."], ["A conclusion with a proposal.", "Une conclusion avec une proposition."]],
    marks: [["Seit Jahrzehnten steigt die Lebenserwartung", "a lead-in", "une amorce"], ["Ich halte eine solche Kopplung", "the thesis", "la thèse"], ["zumal", "a connector: zumal", "un connecteur : zumal"], ["Dachdecker", "a concrete example", "un exemple concret"], ["insofern", "a connector: insofern … als", "un connecteur : insofern … als"], ["Alles in allem", "the conclusion", "la conclusion"]] };

  /* Atelier de langue : champs allemands d'abord, puis anglais et français (voir localize.js). */
  W.LEXIS = W.LEXIS || {};
  W.LEXIS["c1-3"] = {
    colloc: [
      ["in Rente gehen", "to retire", "partir à la retraite", "Meine Mutter geht nächstes Jahr in Rente.", "geht", ["kommt", "fährt"]],
      ["Beiträge zahlen", "to pay contributions", "cotiser", "Wer arbeitet, zahlt Beiträge in die Rentenversicherung.", "zahlt", ["gibt", "macht"]],
      ["für jemanden sorgen", "to look after someone", "prendre soin de quelqu'un", "Sie sorgt für ihre kranke Mutter.", "sorgt", ["kümmert", "pflegt"]],
      ["eine Kluft überbrücken", "to bridge a gap", "combler un fossé", "Das Projekt soll die Kluft zwischen den Generationen überbrücken.", "überbrücken", ["überbauen", "übersetzen"]],
      ["Solidarität zeigen", "to show solidarity", "faire preuve de solidarité", "In der Krise zeigten viele Nachbarn Solidarität.", "zeigten", ["machten", "gaben"]],
      ["eine Lücke schließen", "to close a gap", "combler une lacune", "Das Gesetz soll eine Lücke in der Versorgung schließen.", "schließen", ["machen", "bauen"]],
      ["Vorsorge treffen", "to make provision", "prendre ses précautions", "Man sollte früh für das Alter Vorsorge treffen.", "treffen", ["stellen", "geben"]],
      ["den Lebensabend verbringen", "to spend one's twilight years", "passer ses vieux jours", "Sie möchte ihren Lebensabend am Meer verbringen.", "verbringen", ["vertreiben", "verbrauchen"]],
      ["eine Last tragen", "to bear a burden", "porter un fardeau", "Die junge Generation muss einen großen Teil der Last tragen.", "tragen", ["heben", "nehmen"]],
      ["Erfahrung sammeln", "to gain experience", "acquérir de l'expérience", "Im Ehrenamt hat er viel Erfahrung gesammelt.", "gesammelt", ["gesucht", "gelegt"]]
    ],
    wf: [
      ["Viele alte Menschen sind ___ und brauchen Hilfe. (PFLEGE)", "pflegebedürftig"],
      ["Die soziale ___ wächst. (GLEICH)", "Ungleichheit"],
      ["Die ___ der Renten ist eine politische Aufgabe. (SICHER)", "Sicherung"],
      ["Viele empfinden das System als ___. (GERECHT)", "ungerecht"],
      ["Die ___ der Kinder übernehmen oft die Großeltern. (BETREUEN)", "Betreuung"],
      ["Sie engagiert sich ___ in einem Pflegeheim. (EHRE)", "ehrenamtlich"],
      ["Die ___ hat in den letzten Jahren zugenommen. (ARM)", "Armut"],
      ["Wir müssen ___ handeln, nicht egoistisch. (SOLIDARITÄT)", "solidarisch"]
    ],
    kwt: [
      ["Ich bleibe zu Hause, vor allem weil es regnet.", "ZUMAL", "Ich bleibe zu Hause, ___ regnet.", "zumal es"],
      ["Er kann kaum gehen, und laufen kann er erst recht nicht.", "GESCHWEIGE", "Er kann kaum gehen, ___ laufen.", "geschweige denn"],
      ["Das Problem ist so komplex, dass man es nicht schnell lösen kann.", "ALS", "Das Problem ist zu komplex, ___ schnell lösen könnte.", "als dass man es"],
      ["Sie ist bei einer Firma angestellt.", "ANGESTELLTE", "Sie ist ___ bei einer Firma.", "eine Angestellte"],
      ["Ich habe nichts erfahren, was neu war.", "NEUES", "Ich habe ___ erfahren.", "nichts Neues"],
      ["Menschen, die jung sind, sehen das anders.", "JUNGEN", "Die ___ das anders.", "Jungen sehen"]
    ],
    idioms: [
      ["Der Apfel fällt nicht weit vom Stamm.", "Kinder ähneln ihren Eltern.", "The apple doesn't fall far from the tree.", "Les chiens ne font pas des chats.", "Sie ist Ärztin wie ihre Mutter: Der Apfel fällt nicht weit vom Stamm.", "Der Apfel fällt nicht weit vom Stamm"],
      ["zum alten Eisen gehören", "als zu alt und nutzlos gelten", "to be on the scrap heap", "être bon pour la casse", "Mit 60 gehört man noch lange nicht zum alten Eisen.", "zum alten Eisen"],
      ["ein alter Hase sein", "sehr erfahren sein", "to be an old hand", "être un vieux routier", "In der Firma ist er ein alter Hase.", "ein alter Hase"],
      ["grün hinter den Ohren sein", "jung und unerfahren sein", "to be wet behind the ears", "être un blanc-bec", "Mit 18 war ich noch grün hinter den Ohren.", "grün hinter den Ohren"],
      ["in jemandes Fußstapfen treten", "das Gleiche tun wie ein Vorgänger", "to follow in someone's footsteps", "marcher sur les traces de quelqu'un", "Sie tritt in die Fußstapfen ihres Vaters.", "in die Fußstapfen"],
      ["das Zepter übergeben", "die Führung an jemanden abgeben", "to hand over the reins", "passer le flambeau", "Mit 70 hat sie das Zepter an ihre Tochter übergeben.", "das Zepter"],
      ["von der Hand in den Mund leben", "kaum genug Geld zum Leben haben", "to live from hand to mouth", "vivre au jour le jour", "Viele Rentner leben von der Hand in den Mund.", "von der Hand in den Mund"],
      ["unter einem Dach leben", "zusammenwohnen", "to live under one roof", "vivre sous le même toit", "Bei uns leben drei Generationen unter einem Dach.", "unter einem Dach"]
    ]
  };

  W.COURSE.push({ id: "c1-3", level: "C1", icon: "users-round", title: "Generations and society", title_fr: "Générations et société",
    intro: "Pensions, care, the climate: what do the generations owe each other? In this unit, you'll learn connectors that let you qualify an argument precisely (zumal, insofern … als, geschweige denn, zu …, als dass), adjectives and participles used as nouns (die Älteren, ein Angestellter, etwas Neues), and how to lead a discussion fairly. You'll also discover how Bismarck's social insurance gave rise to today's “intergenerational contract”.",
    intro_fr: "Retraites, soins, climat : que se doivent les générations ? Dans cette unité, tu vas apprendre des connecteurs qui permettent de nuancer précisément un argument (zumal, insofern … als, geschweige denn, zu …, als dass), les adjectifs et participes employés comme noms (die Älteren, ein Angestellter, etwas Neues), et la façon d'animer équitablement une discussion. Tu découvriras aussi comment les assurances sociales de Bismarck ont donné naissance à l'actuel « contrat entre les générations ».",
    can: ["Qualify and reinforce arguments with zumal, insofern … als, geschweige denn and zu …, als dass", "Use adjectives and participles as nouns with the right endings", "Lead a discussion: give the floor, keep time, sum up", "Talk about pensions, care and the welfare state", "Write a nuanced argued text on a social question (C1)"],
    can_fr: ["Nuancer et renforcer des arguments avec zumal, insofern … als, geschweige denn et zu …, als dass", "Employer les adjectifs et participes comme noms avec les bonnes terminaisons", "Animer une discussion : donner la parole, gérer le temps, résumer", "Parler des retraites, des soins et de l'État social", "Écrire un texte argumenté nuancé sur une question de société (C1)"],
    lessons: [109, 110, 111], vocab: ["generationenDE", "sozialstaatDE"], reading: "sozialversicherung", prompt: "de-c1-3",
    writing: { task: "Write an argued text (220-260 words) on the question: “Should the retirement age be linked to life expectancy?” Include a lead-in and thesis, arguments for and against with examples, a nuanced weighing up and a conclusion.", task_fr: "Écris un texte argumenté (220 à 260 mots) sur la question : « Faut-il lier l'âge de la retraite à l'espérance de vie ? » Avec une amorce et une thèse, des arguments pour et contre illustrés d'exemples, une pesée nuancée et une conclusion.", words: "220-260",
      tips: ["Seit Jahrzehnten steigt…", "Ich halte … für…", "…, zumal…", "Diese Regel wäre insofern gerecht, als…", "Alles in allem…"],
      checklist: ["I wrote a lead-in and a clear thesis", "I gave arguments for and against with examples", "I used at least two connectors from this unit", "I weighed up the arguments in a nuanced way", "I wrote between 220 and 260 words"],
      checklist_fr: ["J'ai écrit une amorce et une thèse claire", "J'ai donné des arguments pour et contre, avec des exemples", "J'ai employé au moins deux connecteurs de cette unité", "J'ai pesé les arguments de façon nuancée", "J'ai écrit entre 220 et 260 mots"],
      model: "Seit Jahrzehnten steigt die Lebenserwartung, während die Zahl der Beitragszahler sinkt. Deshalb schlagen manche Fachleute vor, das Rentenalter automatisch an die Lebenserwartung zu koppeln. Ich halte eine solche Kopplung grundsätzlich für sinnvoll, allerdings nur mit wichtigen Ausnahmen.\n\nFür den Vorschlag spricht vor allem die Logik des Umlageverfahrens. Wer heute in Rente geht, bezieht sie im Durchschnitt deutlich länger als vor fünfzig Jahren. Wenn Menschen immer länger Rente beziehen, müssen die Jüngeren immer mehr zahlen. Eine Kopplung würde diese Last gerechter verteilen, zumal sie nach festen Regeln erfolgte und nicht von politischen Stimmungen abhinge.\n\nGegen eine starre Regel spricht jedoch, dass nicht alle Menschen gleich lange gesund bleiben. Wer jahrzehntelang körperlich schwer gearbeitet hat, etwa als Dachdecker oder in der Pflege, kann oft schon mit sechzig kaum noch arbeiten, geschweige denn bis siebzig. Für diese Menschen wäre ein höheres Rentenalter in Wirklichkeit eine Rentenkürzung.\n\nEine Kopplung wäre also nur insofern gerecht, als sie die unterschiedlichen Belastungen berücksichtigt. Denkbar wären flexible Modelle: Wer früh ins Berufsleben eingestiegen ist oder körperlich anstrengend gearbeitet hat, sollte früher in Rente gehen dürfen. Außerdem könnten Ältere, die freiwillig länger arbeiten möchten, dafür belohnt werden.\n\nAlles in allem plädiere ich für eine vorsichtige Kopplung mit klaren Ausnahmen. Das Problem ist zu komplex, als dass eine einzige Zahl es lösen könnte, aber es ist zu wichtig, als dass wir es weiter vor uns herschieben dürften." } });
})();
