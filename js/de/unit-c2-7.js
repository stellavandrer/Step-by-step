/* Cours d'allemand, unité C2-7 « Language and power / Langue et pouvoir » : le cadrage (framing), les mots
   chargés et les euphémismes (Steuerlast / Steuerbeitrag, Fahnenwörter, Stigmawörter), masquer l'agent (passif
   sans agent, es kam zu, verbes intransitifs, man, nominalisation), poser des questions critiques. Personnages
   fictifs, prénoms allemands.
   Faits vérifiables seulement : l'« Unwort des Jahres » est choisi depuis 1991, à l'initiative du germaniste
   Horst Dieter Schlosser ; l'action est indépendante depuis 1994 ; jury composé surtout de linguistes, plus un
   invité ; propositions du public ; critères : atteinte à la dignité humaine ou aux principes démocratiques,
   discrimination, formulations qui voilent ou trompent ; exemples : « ausländerfrei » (1991), « Humankapital »
   (2004, réduit les êtres humains à des grandeurs économiques), « alternativlos » (2010, présente les décisions
   comme inévitables), « Lügenpresse » (2014, déjà employé par la propagande nazie), « Remigration » (2023,
   euphémisme employé dans les milieux d'extrême droite pour des expulsions massives). */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "sprachkritikDE", icon: "megaphone", title: "Language criticism", title_fr: "La critique du langage", level: "C2", words: [
    ["die Sprachkritik", "language criticism", "la critique du langage", "Sprachkritik fragt, was Wörter bewirken."],
    ["das Unwort, ¨-er", "the inappropriate word, the “non-word”", "le mot honteux, le « non-mot »", "Jedes Jahr wird ein Unwort des Jahres gewählt."],
    ["das Schlagwort, ¨-er", "the catchword, the slogan", "le slogan, le mot d'ordre", "Mit Schlagwörtern lassen sich keine Probleme lösen."],
    ["der Kampfbegriff, -e", "the polemical term", "le terme de combat", "„Lügenpresse“ ist ein Kampfbegriff."],
    ["das Fahnenwort, ¨-er", "the flag word (a positively loaded word)", "le mot-étendard", "„Freiheit“ ist ein typisches Fahnenwort."],
    ["das Stigmawort, ¨-er", "the stigma word (a negatively loaded word)", "le mot stigmatisant", "Der Gegner wird mit Stigmawörtern belegt."],
    ["die Verschleierung", "concealment, obfuscation", "la dissimulation", "Der Begriff dient der Verschleierung."],
    ["beschönigen", "to gloss over", "enjoliver, édulcorer", "Man sollte die Lage nicht beschönigen."],
    ["verharmlosen", "to play down", "minimiser, banaliser", "Der Ausdruck verharmlost die Gewalt."],
    ["abwerten", "to devalue, to belittle", "dévaloriser, rabaisser", "Solche Wörter werten Menschen ab."],
    ["die Deutungshoheit", "the power to define the terms of a debate", "la maîtrise du discours", "Wer die Deutungshoheit hat, bestimmt die Debatte."],
    ["die Hetze", "incitement, smear campaign", "la propagande haineuse, l'incitation à la haine", "Hetze im Netz ist strafbar, wenn sie zum Hass aufstachelt."],
    ["das Feindbild, -er", "the enemy image, the bogeyman", "l'image de l'ennemi", "Populisten brauchen ein klares Feindbild."],
    ["die Menschenwürde", "human dignity", "la dignité humaine", "Die Menschenwürde ist unantastbar."],
    ["das Reizwort, ¨-er", "the trigger word, the emotive word", "le mot qui fâche", "„Steuererhöhung“ ist im Wahlkampf ein Reizwort."],
    ["aufgeladen", "loaded, charged", "chargé (de sens, d'émotion)", "Der Begriff ist politisch stark aufgeladen."]
  ] },
  { id: "debatteDE", icon: "messages-square", title: "Public debate", title_fr: "Le débat public", level: "C2", words: [
    ["suggerieren", "to suggest, to insinuate", "suggérer, insinuer", "Die Überschrift suggeriert eine Gefahr, die es nicht gibt."],
    ["die Unterstellung, -en", "the insinuation, the imputation", "l'insinuation, l'imputation", "Das ist eine böswillige Unterstellung."],
    ["die Polemik", "polemic", "la polémique", "Sachliche Kritik ist keine Polemik."],
    ["polemisch", "polemical", "polémique", "Der Kommentar war sehr polemisch."],
    ["zuspitzen", "to sharpen, to exaggerate", "radicaliser, forcer le trait", "Die Medien spitzen den Konflikt zu."],
    ["die Zuspitzung, -en", "the sharpening, the escalation", "le durcissement, l'exacerbation", "Eine gewisse Zuspitzung gehört zur Debatte."],
    ["emotionalisieren", "to stir up emotions about", "jouer sur les émotions", "Der Wahlkampf wurde stark emotionalisiert."],
    ["die Stimmungsmache", "scaremongering, stirring up feeling", "la manipulation de l'opinion", "Das ist reine Stimmungsmache."],
    ["die Spaltung, -en", "the division, the split", "la division, la fracture", "Man spricht von einer Spaltung der Gesellschaft."],
    ["spalten", "to divide, to split", "diviser", "Das Thema spaltet das Land."],
    ["ausweichen (+ Dat.)", "to evade, to dodge", "éluder, esquiver", "Der Minister wich der Frage aus."],
    ["die Ausrede, -n", "the excuse", "l'excuse, le prétexte", "Das ist doch nur eine Ausrede."],
    ["beschwichtigen", "to appease, to placate", "apaiser, rassurer", "Die Regierung versuchte, die Bürger zu beschwichtigen."],
    ["nachhaken", "to follow up, to press (a point)", "insister, relancer", "Die Journalistin hakte nach."],
    ["die Nebelkerze, -n", "the smokescreen", "l'écran de fumée", "Mit dieser Debatte wirft er nur Nebelkerzen."],
    ["die Schönfärberei", "whitewashing, sugar-coating", "l'embellissement, le fait de tout voir en rose", "Der Bericht ist pure Schönfärberei."]
  ] });

  W.LESSONS.push(
  {
    id: 151, level: "C2", icon: "megaphone",
    title: "Steuerlast oder Steuerbeitrag?: framing and loaded words", title_fr: "Steuerlast ou Steuerbeitrag ? : cadrage et mots chargés",
    subtitle: "How words frame what we think: metaphors, euphemisms, flag words and stigma words.", subtitle_fr: "Comment les mots encadrent ce que nous pensons : métaphores, euphémismes, mots-étendards et mots stigmatisants.",
    body: `
<h2>Framing</h2>
<p>The same thing, two frames: <s-de>die Steuerlast</s-de> (a burden you want to get rid of) or <s-de>der Steuerbeitrag</s-de> (a contribution to the community). <s-de>Die Steueroase</s-de> makes tax avoidance sound like a holiday; a <s-de>Welle</s-de> or a <s-de>Strom</s-de> of people evokes a natural disaster.</p>
<h2>Euphemisms</h2>
<table>
<tr><td><s-de>Preisanpassung</s-de></td><td>price increase</td></tr>
<tr><td><s-de>Personal freisetzen</s-de></td><td>to lay off staff</td></tr>
<tr><td><s-de>Kollateralschaden</s-de></td><td>civilian deaths in war (the Unwort of 1999)</td></tr>
<tr><td><s-de>Nullwachstum</s-de></td><td>no growth, stagnation</td></tr>
</table>
<h2>Flag words and stigma words</h2>
<p><s-de>Fahnenwörter</s-de> carry a positive charge that a group claims for itself: <s-de>Freiheit, Reform, Zukunft</s-de>. <s-de>Stigmawörter</s-de> brand the opponent: <s-de>Bürokratie, Bevormundung</s-de>. Whoever succeeds in imposing their words gains the <s-de>Deutungshoheit</s-de>.</p>
<div class="tip">When a word strikes you, ask three questions: What picture does it create? What does it leave out? Who benefits from it? You don't have to avoid loaded words, but you should choose them knowingly.</div>
`,
    body_fr: `
<h2>Le cadrage</h2>
<p>La même chose, deux cadres : <s-de>die Steuerlast</s-de> (un fardeau dont on veut se débarrasser) ou <s-de>der Steuerbeitrag</s-de> (une contribution à la collectivité). <s-de>Die Steueroase</s-de> (le paradis fiscal, littéralement « oasis fiscale ») fait de l'évasion fiscale un séjour de vacances ; une <s-de>Welle</s-de> (vague) ou un <s-de>Strom</s-de> (flot) de personnes évoque une catastrophe naturelle.</p>
<h2>Les euphémismes</h2>
<table>
<tr><td><s-de>Preisanpassung</s-de></td><td>hausse des prix (« ajustement »)</td></tr>
<tr><td><s-de>Personal freisetzen</s-de></td><td>licencier (« libérer » du personnel)</td></tr>
<tr><td><s-de>Kollateralschaden</s-de></td><td>victimes civiles à la guerre (Unwort de 1999)</td></tr>
<tr><td><s-de>Nullwachstum</s-de></td><td>absence de croissance, stagnation</td></tr>
</table>
<h2>Mots-étendards et mots stigmatisants</h2>
<p>Les <s-de>Fahnenwörter</s-de> ont une charge positive qu'un groupe revendique pour lui-même : <s-de>Freiheit, Reform, Zukunft</s-de>. Les <s-de>Stigmawörter</s-de> marquent l'adversaire : <s-de>Bürokratie, Bevormundung</s-de>. Celui qui réussit à imposer ses mots gagne la <s-de>Deutungshoheit</s-de> (la maîtrise du discours).</p>
<div class="tip">Quand un mot te frappe, pose-toi trois questions : quelle image crée-t-il ? Que laisse-t-il de côté ? À qui profite-t-il ? Inutile d'éviter tous les mots chargés, mais choisis-les en connaissance de cause.</div>
`,
    examples: [
      ["Die Opposition spricht von Steuerlast, die Regierung von Steuerbeitrag.", "The opposition talks about the tax burden, the government about the tax contribution.", "L'opposition parle de fardeau fiscal, le gouvernement de contribution fiscale."],
      ["Die Firma kündigte eine Preisanpassung an.", "The company announced a “price adjustment”.", "L'entreprise a annoncé un « ajustement des prix »."],
      ["„Kollateralschaden“ wurde 1999 zum Unwort des Jahres gewählt.", "“Collateral damage” was chosen as the Unwort of the year in 1999.", "« Dommage collatéral » a été élu Unwort de l'année en 1999."],
      ["„Reform“ ist ein Fahnenwort: Niemand will gegen Reformen sein.", "“Reform” is a flag word: nobody wants to be against reforms.", "« Réforme » est un mot-étendard : personne ne veut être contre les réformes."],
      ["Wer die Deutungshoheit gewinnt, bestimmt die Debatte.", "Whoever gains control of the terms decides the debate.", "Qui maîtrise le discours mène le débat."],
      ["Das Wort „Welle“ ruft das Bild einer Naturkatastrophe hervor.", "The word “wave” evokes the image of a natural disaster.", "Le mot « vague » évoque l'image d'une catastrophe naturelle."],
      ["Der Begriff ist politisch stark aufgeladen.", "The term is politically highly charged.", "Le terme est politiquement très chargé."]
    ],
    quiz: [
      { q: "“Preisanpassung” for a price increase is…", q_fr: "« Preisanpassung » pour une hausse des prix est…", o: ["a euphemism", "a stigma word", "a neutral term"], o_fr: ["un euphémisme", "un mot stigmatisant", "un terme neutre"], a: 0, ex: "It softens the reality.", ex_fr: "Il adoucit la réalité." },
      { q: "“Freiheit”, “Reform”, “Zukunft” are typical…", q_fr: "« Freiheit », « Reform », « Zukunft » sont des…", o: ["Fahnenwörter", "Stigmawörter", "Unwörter"], a: 0, ex: "Positively loaded flag words.", ex_fr: "Mots-étendards à charge positive." },
      { q: "“Steuerlast” frames taxes as…", q_fr: "« Steuerlast » présente les impôts comme…", o: ["a burden", "a gift", "a duty to the community"], o_fr: ["un fardeau", "un cadeau", "un devoir envers la collectivité"], a: 0, ex: "Last = burden.", ex_fr: "Last = fardeau." },
      { q: "Whoever imposes their words gains the…", q_fr: "Celui qui impose ses mots gagne la…", o: ["Deutungshoheit", "Menschenwürde", "Stimmungsmache"], a: 0, ex: "Deutungshoheit = control over interpretation.", ex_fr: "Deutungshoheit = maîtrise du discours." },
      { q: "A “Welle” of people evokes…", q_fr: "Une « Welle » de personnes évoque…", o: ["a natural disaster", "a celebration", "a sports event"], o_fr: ["une catastrophe naturelle", "une fête", "un événement sportif"], a: 0, ex: "Water metaphors suggest a threat.", ex_fr: "Les métaphores aquatiques suggèrent une menace." }
    ]
  },
  {
    id: 152, level: "C2", icon: "user-round-search",
    title: "Fehler wurden gemacht: hiding the agent", title_fr: "Fehler wurden gemacht : masquer l'agent",
    subtitle: "Passives without an agent, es kam zu, intransitive verbs, man and nouns: who did it?", subtitle_fr: "Passifs sans agent, es kam zu, verbes intransitifs, man et nominalisations : qui l'a fait ?",
    body: `
<h2>Five ways to make the agent disappear</h2>
<table>
<tr><td>passive without agent</td><td><s-de>Fehler wurden gemacht.</s-de> (instead of <s-de>Ich habe Fehler gemacht.</s-de>)</td></tr>
<tr><td><s-de>es kam zu</s-de> + noun</td><td><s-de>Es kam zu Ausschreitungen.</s-de> (Who rioted?)</td></tr>
<tr><td>intransitive or reflexive verb</td><td><s-de>Die Preise sind gestiegen.</s-de> (instead of <s-de>Die Firma hat die Preise erhöht.</s-de>) · <s-de>Die Lage hat sich verschärft.</s-de></td></tr>
<tr><td><s-de>man</s-de></td><td><s-de>Man hat beschlossen, das Projekt zu stoppen.</s-de></td></tr>
<tr><td>nominalisation</td><td><s-de>Nach der Erhöhung der Mieten…</s-de> (Who raised them?)</td></tr>
</table>
<h2>Legitimate or evasive?</h2>
<p>These constructions are perfectly normal when the agent is unknown, obvious or unimportant: <s-de>Das Museum wurde 1902 gebaut.</s-de> They become evasive when someone hides their own responsibility: <s-de>Leider sind Daten verloren gegangen.</s-de></p>
<div class="tip">When you read political statements or company reports, ask the question that the grammar hides: <s-de>Wer?</s-de> Who made the mistakes, who raised the prices, who decided? In your own writing, name the agent whenever responsibility matters.</div>
`,
    body_fr: `
<h2>Cinq façons de faire disparaître l'agent</h2>
<table>
<tr><td>passif sans agent</td><td><s-de>Fehler wurden gemacht.</s-de> (Des erreurs ont été commises, au lieu de <s-de>Ich habe Fehler gemacht.</s-de>)</td></tr>
<tr><td><s-de>es kam zu</s-de> + nom</td><td><s-de>Es kam zu Ausschreitungen.</s-de> (Des violences ont éclaté. Commises par qui ?)</td></tr>
<tr><td>verbe intransitif ou pronominal</td><td><s-de>Die Preise sind gestiegen.</s-de> (au lieu de <s-de>Die Firma hat die Preise erhöht.</s-de>) · <s-de>Die Lage hat sich verschärft.</s-de></td></tr>
<tr><td><s-de>man</s-de></td><td><s-de>Man hat beschlossen, das Projekt zu stoppen.</s-de></td></tr>
<tr><td>nominalisation</td><td><s-de>Nach der Erhöhung der Mieten…</s-de> (Qui les a augmentés ?)</td></tr>
</table>
<h2>Légitime ou fuyant ?</h2>
<p>Ces constructions sont parfaitement normales quand l'agent est inconnu, évident ou sans importance : <s-de>Das Museum wurde 1902 gebaut.</s-de> Elles deviennent fuyantes quand quelqu'un cache sa propre responsabilité : <s-de>Leider sind Daten verloren gegangen.</s-de></p>
<div class="tip">Quand tu lis des déclarations politiques ou des rapports d'entreprise, pose la question que la grammaire cache : <s-de>Wer?</s-de> Qui a commis les erreurs, qui a augmenté les prix, qui a décidé ? Dans tes propres textes, nomme l'agent chaque fois que la responsabilité compte.</div>
`,
    examples: [
      ["Bei dem Projekt wurden Fehler gemacht.", "Mistakes were made in the project.", "Des erreurs ont été commises dans ce projet."],
      ["Ich habe bei dem Projekt Fehler gemacht.", "I made mistakes in the project.", "J'ai commis des erreurs dans ce projet."],
      ["Am Rande der Demonstration kam es zu Ausschreitungen.", "There were riots on the fringes of the demonstration.", "Des violences ont éclaté en marge de la manifestation."],
      ["Die Preise sind im letzten Jahr stark gestiegen.", "Prices rose sharply last year.", "Les prix ont fortement augmenté l'an dernier."],
      ["Die Firma hat die Preise im letzten Jahr stark erhöht.", "The company raised prices sharply last year.", "L'entreprise a fortement augmenté les prix l'an dernier."],
      ["Leider sind dabei Daten verloren gegangen.", "Unfortunately, data was lost in the process.", "Malheureusement, des données ont été perdues."],
      ["Nach der Erhöhung der Mieten zogen viele Familien weg.", "After the rent increase, many families moved away.", "Après la hausse des loyers, beaucoup de familles sont parties."]
    ],
    quiz: [
      { q: "Which sentence names the agent?", q_fr: "Quelle phrase nomme l'agent ?", o: ["Die Firma hat die Preise erhöht.", "Die Preise sind gestiegen.", "Es kam zu Preiserhöhungen."], a: 0, ex: "Die Firma = the agent.", ex_fr: "Die Firma = l'agent." },
      { q: "“Es kam zu Ausschreitungen” leaves open…", q_fr: "« Es kam zu Ausschreitungen » laisse ouvert…", o: ["who rioted", "where it happened", "whether it happened"], o_fr: ["qui a commis les violences", "où cela s'est passé", "si cela s'est passé"], a: 0, ex: "No agent.", ex_fr: "Pas d'agent." },
      { q: "When is an agentless passive perfectly normal?", q_fr: "Quand un passif sans agent est-il parfaitement normal ?", o: ["When the agent is unknown or unimportant", "When you made a mistake", "Never"], o_fr: ["Quand l'agent est inconnu ou sans importance", "Quand on a fait une erreur", "Jamais"], a: 0, ex: "Das Museum wurde 1902 gebaut.", ex_fr: "Das Museum wurde 1902 gebaut." },
      { q: "Leider sind Daten verloren ___.", q_fr: "Leider sind Daten verloren ___.", o: ["gegangen", "geworden", "gemacht"], a: 0, ex: "verloren gehen.", ex_fr: "verloren gehen." },
      { q: "The question to ask when the agent is missing:", q_fr: "La question à poser quand l'agent manque :", o: ["Wer?", "Wann?", "Wie viel?"], a: 0, ex: "Who did it?", ex_fr: "Qui l'a fait ?" }
    ]
  },
  {
    id: 153, level: "C2", kind: "functional", icon: "message-circle-question",
    title: "Everyday German: asking critical questions", title_fr: "L'allemand de tous les jours : poser des questions critiques",
    subtitle: "Ask for precision, responsibility and evidence, and politely refuse evasive answers.", subtitle_fr: "Demander de la précision, des responsabilités et des preuves, et refuser poliment les réponses évasives.",
    body: `
<h2>Precision</h2>
<p><s-de>Was genau meinen Sie mit …?</s-de> · <s-de>Wer ist mit „man“ gemeint?</s-de> · <s-de>Können Sie das an einem Beispiel festmachen?</s-de></p>
<h2>Responsibility</h2>
<p><s-de>Wer hat das entschieden?</s-de> · <s-de>Wer trägt dafür die Verantwortung?</s-de> · <s-de>Wer genau hat diese Fehler gemacht?</s-de></p>
<h2>Evidence</h2>
<p><s-de>Worauf stützen Sie diese Behauptung?</s-de> · <s-de>Gibt es dafür Belege?</s-de> · <s-de>Woher stammen diese Zahlen?</s-de></p>
<h2>Evasions</h2>
<p><s-de>Sie weichen meiner Frage aus.</s-de> · <s-de>Das war nicht meine Frage.</s-de> · <s-de>Darf ich da noch einmal nachhaken?</s-de> · polite but firm: <s-de>Mit Verlaub, …</s-de> · <s-de>Bei allem Respekt, …</s-de></p>
<div class="tip">Critical questions work best when they are short, precise and calm. One clear follow-up (<s-de>Wer genau?</s-de>) is more effective than a long accusation. And listen to the grammar of the answer: a sudden passive often shows where responsibility is being avoided.</div>
`,
    body_fr: `
<h2>La précision</h2>
<p><s-de>Was genau meinen Sie mit …?</s-de> · <s-de>Wer ist mit „man“ gemeint?</s-de> (Qui est ce « on » ?) · <s-de>Können Sie das an einem Beispiel festmachen?</s-de></p>
<h2>La responsabilité</h2>
<p><s-de>Wer hat das entschieden?</s-de> · <s-de>Wer trägt dafür die Verantwortung?</s-de> · <s-de>Wer genau hat diese Fehler gemacht?</s-de></p>
<h2>Les preuves</h2>
<p><s-de>Worauf stützen Sie diese Behauptung?</s-de> (Sur quoi fondez-vous cette affirmation ?) · <s-de>Gibt es dafür Belege?</s-de> · <s-de>Woher stammen diese Zahlen?</s-de></p>
<h2>Les esquives</h2>
<p><s-de>Sie weichen meiner Frage aus.</s-de> (Vous éludez ma question.) · <s-de>Das war nicht meine Frage.</s-de> · <s-de>Darf ich da noch einmal nachhaken?</s-de> · poli mais ferme : <s-de>Mit Verlaub, …</s-de> (Sauf votre respect…) · <s-de>Bei allem Respekt, …</s-de></p>
<div class="tip">Les questions critiques fonctionnent mieux quand elles sont courtes, précises et calmes. Une relance claire (<s-de>Wer genau?</s-de>) est plus efficace qu'une longue accusation. Et écoute la grammaire de la réponse : un passif soudain montre souvent où l'on évite la responsabilité.</div>
`,
    examples: [
      ["Was genau meinen Sie mit „Anpassung“?", "What exactly do you mean by “adjustment”?", "Qu'entendez-vous exactement par « ajustement » ?"],
      ["Wer ist mit „man“ gemeint?", "Who is meant by “one”?", "Qui est ce « on » ?"],
      ["Wer trägt dafür die Verantwortung?", "Who is responsible for that?", "Qui en porte la responsabilité ?"],
      ["Worauf stützen Sie diese Behauptung?", "What do you base this claim on?", "Sur quoi fondez-vous cette affirmation ?"],
      ["Sie weichen meiner Frage aus.", "You're evading my question.", "Vous éludez ma question."],
      ["Darf ich da noch einmal nachhaken?", "May I follow up on that?", "Puis-je revenir sur ce point ?"],
      ["Mit Verlaub, das beantwortet meine Frage nicht.", "With respect, that doesn't answer my question.", "Sauf votre respect, cela ne répond pas à ma question."]
    ],
    quiz: [
      { q: "“You're evading my question.”", q_fr: "« Vous éludez ma question. »", o: ["Sie weichen meiner Frage aus.", "Sie weichen meine Frage aus.", "Sie weichen von meiner Frage aus."], a: 0, ex: "ausweichen + dative.", ex_fr: "ausweichen + datif." },
      { q: "“What do you base this claim on?”", q_fr: "« Sur quoi fondez-vous cette affirmation ? »", o: ["Worauf stützen Sie diese Behauptung?", "Wovon stützen Sie diese Behauptung?", "Woran stützen Sie diese Behauptung?"], a: 0, ex: "etwas auf etwas stützen → worauf.", ex_fr: "etwas auf etwas stützen → worauf." },
      { q: "A polite but firm opener:", q_fr: "Une entrée en matière polie mais ferme :", o: ["Mit Verlaub, …", "Na und, …", "Egal, …"], a: 0, ex: "Mit Verlaub = with respect.", ex_fr: "Mit Verlaub = sauf votre respect." },
      { q: "Darf ich da noch einmal ___?", q_fr: "Darf ich da noch einmal ___?", o: ["nachhaken", "nachgehakt", "hakennach"], a: 0, ex: "Modal + infinitive.", ex_fr: "Verbe de modalité + infinitif." },
      { q: "The best follow-up is usually…", q_fr: "La meilleure relance est en général…", o: ["short, precise and calm", "long and emotional", "a personal attack"], o_fr: ["courte, précise et calme", "longue et émotive", "une attaque personnelle"], a: 0, ex: "Wer genau?", ex_fr: "Wer genau?" }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    151: {
      gap: [["Die Opposition spricht von Steuer___, die Regierung von Steuerbeitrag.", "last"], ["„Personal ___“ ist ein Euphemismus für „entlassen“.", "freisetzen"], ["„Freiheit“ ist ein typisches ___. (positiv aufgeladen)", "Fahnenwort"], ["Wer die ___ gewinnt, bestimmt die Debatte. (Deutung)", "Deutungshoheit"]],
      fix: [["„Preisanpassung“ ist ein neutrales Wort für Preiserhöhung.", "„Preisanpassung“ ist ein Euphemismus für Preiserhöhung.", "It softens the reality: a euphemism.", "Il adoucit la réalité : un euphémisme."], ["Das Wort ruft das Bild einer Naturkatastrophe auf.", "Das Wort ruft das Bild einer Naturkatastrophe hervor.", "ein Bild hervorrufen (to evoke).", "ein Bild hervorrufen (évoquer)."]],
      task: ["Find a neutral term for each of these loaded expressions and explain the frame in one sentence: Steueroase, Preisanpassung, Flüchtlingswelle.", "Trouve un terme neutre pour chacune de ces expressions chargées et explique le cadrage en une phrase : Steueroase, Preisanpassung, Flüchtlingswelle.", "Statt „Steueroase“ kann man „Niedrigsteuerland“ sagen; das Wort „Oase“ lässt Steuervermeidung wie einen Urlaub erscheinen. Statt „Preisanpassung“ sagt man ehrlicher „Preiserhöhung“; „Anpassung“ verschweigt die Richtung. Statt „Flüchtlingswelle“ spricht man besser von „steigenden Flüchtlingszahlen“; die Welle ruft das Bild einer Naturkatastrophe hervor."]
    },
    152: {
      gap: [["Bei dem Projekt ___ Fehler gemacht. (Passiv, Präteritum)", "wurden"], ["Am Rande der Demonstration ___ es zu Ausschreitungen.", "kam"], ["Leider sind Daten verloren ___.", "gegangen"], ["Die Preise sind stark ___. (steigen)", "gestiegen"]],
      fix: [["Es kam zu Fehlern. (Sie tragen die Verantwortung.)", "Ich habe Fehler gemacht.", "If you're responsible, say so: name the agent.", "Si tu es responsable, dis-le : nomme l'agent."], ["Die Mieten haben sich erhöht.", "Der Vermieter hat die Mieten erhöht.", "Name who acted.", "Nomme qui a agi."]],
      task: ["Rewrite this official statement so that every agent is named: Bei der Planung wurden Fehler gemacht. Es kam zu Verzögerungen. Die Kosten sind gestiegen. Man hat beschlossen, das Projekt fortzusetzen.", "Réécris ce communiqué officiel en nommant chaque agent : Bei der Planung wurden Fehler gemacht. Es kam zu Verzögerungen. Die Kosten sind gestiegen. Man hat beschlossen, das Projekt fortzusetzen.", "Das Planungsamt hat Fehler gemacht. Die Baufirma hat den Zeitplan nicht eingehalten. Die Stadt muss deshalb mehr bezahlen als geplant. Der Stadtrat hat beschlossen, das Projekt fortzusetzen."]
    },
    153: {
      gap: [["Sie weichen ___ Frage aus. (mein)", "meiner"], ["___ stützen Sie diese Behauptung?", "Worauf"], ["Wer ist mit „man“ ___?", "gemeint"], ["Mit ___, das beantwortet meine Frage nicht.", "Verlaub"]],
      fix: [["Sie weichen meine Frage aus.", "Sie weichen meiner Frage aus.", "ausweichen + dative.", "ausweichen + datif."], ["Wovon stützen Sie diese Behauptung?", "Worauf stützen Sie diese Behauptung?", "etwas auf etwas stützen → worauf.", "etwas auf etwas stützen → worauf."]],
      task: ["A spokesperson says: „Es wurden Fehler gemacht, und man arbeitet an einer Lösung.“ Write four critical follow-up questions.", "Un porte-parole dit : „Es wurden Fehler gemacht, und man arbeitet an einer Lösung.“ Écris quatre questions de relance critiques.", "Wer genau hat diese Fehler gemacht? Wer ist mit „man“ gemeint? Bis wann soll die Lösung vorliegen? Worauf stützen Sie die Annahme, dass sie funktionieren wird?"]
    }
  });

  W.ROLEPLAYS.push(
  { id: "pressemitteilung", lesson: 151, level: "C2", icon: "megaphone", partner: "Nils", role: "a colleague at a PR agency", role_fr: "un collègue d'une agence de communication",
    title: "Wording a press release", title_fr: "Formuler un communiqué",
    setting: "You work at a PR agency. Your colleague Nils wants to announce job cuts at a client company in very soft words. You disagree.", setting_fr: "Tu travailles dans une agence de communication. Ton collègue Nils veut annoncer des suppressions d'emplois chez un client avec des mots très doux. Tu n'es pas d'accord.",
    turns: [
      { p: "Für die Pressemitteilung schlage ich vor: „Wir passen unsere Personalstruktur an.“ Gut, oder?", en: "For the press release I suggest: “We are adjusting our staff structure.” Good, isn't it?", fr: "Pour le communiqué, je propose : « Nous adaptons notre structure du personnel. » Bien, non ?" },
      { y: ["Das klingt harmlos, verschleiert aber, dass 200 Menschen ihre Arbeit verlieren.", "Das klingt harmlos, verschleiert aber, dass 200 Menschen verlieren ihre Arbeit.", "Das klingt harmlos, verschleiert aber, dass 200 Menschen ihrer Arbeit verlieren."], en: "It sounds harmless, but it hides the fact that 200 people are losing their jobs.", fr: "Ça a l'air anodin, mais ça cache que 200 personnes perdent leur emploi.", why: "dass: verb at the end; ihre Arbeit (accusative).", why_fr: "dass : verbe à la fin ; ihre Arbeit (accusatif)." },
      { p: "Aber „Entlassungen“ klingt so hart.", en: "But “redundancies” sounds so harsh.", fr: "Mais « licenciements », ça sonne si dur." },
      { y: ["Gerade deshalb sollten wir das Kind beim Namen nennen; alles andere wirkt unehrlich.", "Gerade deshalb sollten wir das Kind beim Namen nennen; alles anderes wirkt unehrlich.", "Gerade deshalb sollten wir das Kind beim Namen nennen; alles andere wirken unehrlich."], en: "That's exactly why we should call a spade a spade; anything else looks dishonest.", fr: "C'est justement pour ça qu'il faut appeler un chat un chat ; tout le reste paraît malhonnête.", why: "alles andere (no -s); singular verb wirkt.", why_fr: "alles andere (sans -s) ; verbe au singulier wirkt." },
      { p: "Und wie wäre es mit „Wir setzen Mitarbeiter frei“?", en: "And what about “We are releasing employees”?", fr: "Et que dirais-tu de « Nous libérons des collaborateurs » ?" },
      { y: ["„Freisetzen“ ist ein Euphemismus; man könnte meinen, die Leute würden befreit.", "„Freisetzen“ ist ein Euphemismus; man könnte meinen, die Leute würden befreien.", "„Freisetzen“ ist ein Euphemismus; man könnte meinen, die Leute wurden befreit werden."], en: "“Freisetzen” is a euphemism; you'd think people were being set free.", fr: "« Freisetzen » est un euphémisme ; on pourrait croire que les gens sont libérés.", why: "Passive Konjunktiv II: würden + past participle.", why_fr: "Passif au Konjunktiv II : würden + participe passé." },
      { p: "Was schlägst du denn vor?", en: "So what do you suggest?", fr: "Qu'est-ce que tu proposes, alors ?" },
      { y: ["Wir sagen offen, dass das Unternehmen 200 Stellen abbaut, und erklären, warum.", "Wir sagen offen, dass das Unternehmen abbaut 200 Stellen, und erklären, warum.", "Wir sagen offen, dass das Unternehmen 200 Stellen abbauen, und erklären, warum."], en: "We say openly that the company is cutting 200 jobs, and we explain why.", fr: "On dit ouvertement que l'entreprise supprime 200 postes, et on explique pourquoi.", why: "Name the agent; dass: verb at the end, singular.", why_fr: "Nommer l'agent ; dass : verbe à la fin, au singulier." },
      { p: "Das wird aber Kritik geben.", en: "But there'll be criticism.", fr: "Mais il y aura des critiques." },
      { y: ["Die gibt es so oder so. Aber Ehrlichkeit schafft eher Vertrauen als Schönfärberei.", "Die gibt es so oder so. Aber Ehrlichkeit schafft eher Vertrauen wie Schönfärberei.", "Die gibt es so oder so. Aber Ehrlichkeit schaffen eher Vertrauen als Schönfärberei."], en: "There'll be criticism either way. But honesty builds trust better than whitewashing.", fr: "Il y en aura de toute façon. Mais l'honnêteté crée plus de confiance que l'embellissement.", why: "eher … als; singular verb with Ehrlichkeit.", why_fr: "eher … als ; verbe au singulier avec Ehrlichkeit." }
    ] },
  { id: "nachhaken", lesson: 153, level: "C2", icon: "message-circle-question", partner: "Herr Ostermann", role: "a city spokesman", role_fr: "le porte-parole de la ville",
    title: "Holding someone to account", title_fr: "Demander des comptes",
    setting: "You're a local journalist. You interview Herr Ostermann, the city's spokesman, about a building project that is late and over budget.", setting_fr: "Tu es journaliste local. Tu interviewes Herr Ostermann, porte-parole de la ville, sur un chantier en retard et hors budget.",
    turns: [
      { p: "Bei dem Projekt sind leider Fehler gemacht worden.", en: "Unfortunately, mistakes were made in the project.", fr: "Des erreurs ont malheureusement été commises dans ce projet." },
      { y: ["Wer genau hat diese Fehler gemacht?", "Wer genau haben diese Fehler gemacht?", "Wer genau hat diese Fehler gemachen?"], en: "Who exactly made these mistakes?", fr: "Qui a commis ces erreurs, exactement ?", why: "wer takes a singular verb; participle gemacht.", why_fr: "wer prend un verbe au singulier ; participe gemacht." },
      { p: "Nun, es kam zu Verzögerungen bei der Planung.", en: "Well, there were delays in the planning.", fr: "Eh bien, il y a eu des retards dans la planification." },
      { y: ["Sie weichen meiner Frage aus: Wer war für die Planung verantwortlich?", "Sie weichen meine Frage aus: Wer war für die Planung verantwortlich?", "Sie weichen meiner Frage aus: Wer war für die Planung verantwortlich gewesen ist?"], en: "You're evading my question: who was responsible for the planning?", fr: "Vous éludez ma question : qui était responsable de la planification ?", why: "ausweichen + dative: meiner Frage.", why_fr: "ausweichen + datif : meiner Frage." },
      { p: "Man hat damals mit anderen Zahlen gerechnet.", en: "At the time, one was working with different figures.", fr: "On comptait à l'époque sur d'autres chiffres." },
      { y: ["Wer ist mit „man“ gemeint? Der Stadtrat oder die Verwaltung?", "Wer ist mit „man“ gemeint? Den Stadtrat oder die Verwaltung?", "Wer ist mit „man“ meinen? Der Stadtrat oder die Verwaltung?"], en: "Who is meant by “one”? The city council or the administration?", fr: "Qui est ce « on » ? Le conseil municipal ou l'administration ?", why: "Nominative der Stadtrat; passive with gemeint.", why_fr: "Nominatif der Stadtrat ; passif avec gemeint." },
      { p: "Die Kosten haben sich leider verdoppelt.", en: "Unfortunately, the costs have doubled.", fr: "Les coûts ont malheureusement doublé." },
      { y: ["Worauf stützen Sie diese Zahl, und wer trägt die Mehrkosten?", "Worauf stützen Sie diese Zahl, und wer trägt den Mehrkosten?", "Worauf stützen Sie sich diese Zahl, und wer trägt die Mehrkosten?"], en: "What is this figure based on, and who bears the extra costs?", fr: "Sur quoi repose ce chiffre, et qui supporte les surcoûts ?", why: "etwas auf etwas stützen; die Mehrkosten (accusative plural).", why_fr: "etwas auf etwas stützen ; die Mehrkosten (accusatif pluriel)." },
      { p: "Dazu kann ich im Moment nichts sagen.", en: "I can't say anything about that at the moment.", fr: "Je ne peux rien dire à ce sujet pour le moment." },
      { y: ["Mit Verlaub, die Bürgerinnen und Bürger haben ein Recht auf eine Antwort.", "Mit Verlaub, die Bürgerinnen und Bürger haben ein Recht für eine Antwort.", "Mit Verlauben, die Bürgerinnen und Bürger haben ein Recht auf eine Antwort."], en: "With respect, the citizens have a right to an answer.", fr: "Sauf votre respect, les citoyens ont droit à une réponse.", why: "ein Recht auf + accusative; fixed phrase mit Verlaub.", why_fr: "ein Recht auf + accusatif ; tournure figée mit Verlaub." }
    ] }
  );

  W.READINGS.push({
    id: "unwort", level: "C2", icon: "megaphone", title: "Das Unwort des Jahres", genre: "Feature article",
    intro: "Every January, a jury of linguists names a word that misleads, conceals or wounds. Why the choice causes debate every year.",
    intro_fr: "Chaque mois de janvier, un jury de linguistes désigne un mot qui trompe, dissimule ou blesse. Pourquoi ce choix fait débat chaque année.",
    paragraphs: [
      { de: "Seit 1991 wird in Deutschland jedes Jahr ein „Unwort des Jahres“ gewählt. Die Aktion geht auf den Sprachwissenschaftler Horst Dieter Schlosser zurück und ist seit 1994 unabhängig. Jeder kann Vorschläge einreichen; über die Wahl entscheidet eine Jury, die vor allem aus Sprachwissenschaftlerinnen und Sprachwissenschaftlern besteht.", en: "Since 1991, a “non-word of the year” has been chosen in Germany every year. The initiative goes back to the linguist Horst Dieter Schlosser and has been independent since 1994. Anyone can submit suggestions; the choice is made by a jury consisting mainly of linguists.", fr: "Depuis 1991, un « Unwort de l'année » est désigné chaque année en Allemagne. L'initiative remonte au linguiste Horst Dieter Schlosser et elle est indépendante depuis 1994. Chacun peut faire des propositions ; le choix revient à un jury composé surtout de linguistes." },
      { de: "Gesucht werden Wörter, die gegen die Menschenwürde oder die Prinzipien der Demokratie verstoßen, die Gruppen diskriminieren oder die verschleiern und irreführen. Das erste Unwort war 1991 „ausländerfrei“. 2004 traf es „Humankapital“: Der Begriff, so die Jury, mache Menschen zu bloßen ökonomischen Größen.", en: "The jury looks for words that violate human dignity or the principles of democracy, that discriminate against groups, or that conceal and mislead. The first Unwort, in 1991, was “ausländerfrei” (free of foreigners). In 2004 it was “Humankapital” (human capital): the term, according to the jury, reduced people to mere economic quantities.", fr: "On cherche des mots qui portent atteinte à la dignité humaine ou aux principes de la démocratie, qui discriminent des groupes, ou qui dissimulent et trompent. Le premier Unwort, en 1991, fut « ausländerfrei » (sans étrangers). En 2004, ce fut « Humankapital » (capital humain) : selon le jury, ce terme réduisait les êtres humains à de simples grandeurs économiques." },
      { de: "Manche Unwörter klingen harmlos. „Alternativlos“, das Unwort von 2010, beleidigt niemanden. Die Jury kritisierte jedoch, dass es Entscheidungen als unausweichlich darstelle und so die Diskussion beende, bevor sie begonnen habe. Hier zeigt sich, wie Sprache Macht ausübt: nicht durch Lautstärke, sondern durch das, was sie als selbstverständlich hinstellt.", en: "Some Unwörter sound harmless. “Alternativlos” (without alternative), the Unwort of 2010, insults nobody. But the jury criticised it for presenting decisions as inevitable and thus ending the discussion before it had begun. This shows how language exercises power: not through volume, but through what it presents as self-evident.", fr: "Certains Unwörter semblent anodins. « Alternativlos » (sans alternative), l'Unwort de 2010, n'insulte personne. Le jury lui reprochait pourtant de présenter les décisions comme inévitables et de clore ainsi la discussion avant qu'elle n'ait commencé. On voit là comment la langue exerce le pouvoir : non par le volume, mais par ce qu'elle présente comme allant de soi." },
      { de: "Andere Unwörter haben eine dunkle Vorgeschichte. „Lügenpresse“ (2014) war bereits ein Kampfbegriff der NS-Propaganda. „Remigration“ (2023) wurde gewählt, weil der scheinbar neutrale Begriff in rechtsextremen Kreisen als beschönigende Tarnvokabel für massenhafte Ausweisungen dient. Kritiker werfen der Jury mitunter vor, politisch zu urteilen; für ihre Befürworter ist sie eine wichtige Stimme der Sprachkritik.", en: "Other Unwörter have a dark history. “Lügenpresse” (lying press, 2014) was already a polemical term of Nazi propaganda. “Remigration” (2023) was chosen because this apparently neutral term serves in far-right circles as a euphemistic code word for mass expulsions. Critics sometimes accuse the jury of judging politically; for its supporters, it is an important voice of language criticism.", fr: "D'autres Unwörter ont un passé sombre. « Lügenpresse » (presse mensongère, 2014) était déjà un terme de combat de la propagande nazie. « Remigration » (2023) a été choisi parce que ce terme en apparence neutre sert, dans les milieux d'extrême droite, de mot-écran euphémique pour des expulsions massives. Des critiques reprochent parfois au jury de juger politiquement ; pour ses partisans, c'est une voix importante de la critique du langage." }
    ],
    glossary: { "Unwort": ["inappropriate word, “non-word”", "mot honteux, « non-mot »"], "Sprachwissenschaftler": ["linguist", "linguiste"], "unabhängig": ["independent", "indépendant"], "einreichen": ["submit", "soumettre"], "Sprachwissenschaftlerinnen": ["linguists (women)", "linguistes"], "Sprachwissenschaftlern": ["linguists (dative)", "linguistes (datif)"], "Menschenwürde": ["human dignity", "dignité humaine"], "Prinzipien": ["principles", "principes"], "verstoßen": ["violate", "enfreignent"], "diskriminieren": ["discriminate against", "discriminent"], "verschleiern": ["conceal", "dissimulent"], "irreführen": ["mislead", "trompent"], "ausländerfrei": ["free of foreigners", "sans étrangers"], "Humankapital": ["human capital", "capital humain"], "ökonomischen": ["economic", "économiques"], "Größen": ["quantities", "grandeurs"], "Alternativlos": ["without alternative", "sans alternative"], "unausweichlich": ["inevitable", "inévitable"], "Lautstärke": ["volume, loudness", "volume sonore"], "hinstellt": ["presents (as)", "présente (comme)"], "Vorgeschichte": ["history, background", "passé, antécédents"], "Lügenpresse": ["lying press", "presse mensongère"], "Kampfbegriff": ["polemical term", "terme de combat"], "scheinbar": ["apparently", "apparemment"], "rechtsextremen": ["far-right", "d'extrême droite"], "beschönigende": ["euphemistic, glossing over", "euphémique"], "Tarnvokabel": ["code word, camouflage term", "mot-écran"], "Ausweisungen": ["expulsions", "expulsions"], "mitunter": ["sometimes", "parfois"] },
    questions: [
      { q: "Seit wann wird das Unwort des Jahres gewählt?", o: ["Seit 1991", "Seit 1945", "Seit 2010"], a: 0 },
      { q: "Wer kann Vorschläge einreichen?", o: ["Jeder", "Nur Mitglieder der Jury", "Nur Journalisten"], a: 0 },
      { q: "Warum wurde „Humankapital“ kritisiert?", o: ["Es mache Menschen zu bloßen ökonomischen Größen.", "Es sei ein Fremdwort.", "Es sei zu lang."], a: 0 },
      { q: "Was kritisierte die Jury an „alternativlos“?", o: ["Es beende die Diskussion, bevor sie begonnen habe.", "Es beleidige eine Gruppe.", "Es sei falsch geschrieben."], a: 0 },
      { q: "Was werfen Kritiker der Jury mitunter vor?", o: ["Politisch zu urteilen", "Zu langsam zu arbeiten", "Keine Wörter zu wählen"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-c2-7", unit: "c2-7", level: "C2", icon: "radio",
    title: "Wie Wörter Denken lenken", title_fr: "Comment les mots orientent la pensée",
    context: "A radio interview with Professor Lenz, a linguist, about framing in politics and the media.", context_fr: "Une interview radio avec le professeur Lenz, linguiste, sur le cadrage dans la politique et les médias.",
    words: [["der Rahmen, -", "the frame", "le cadre"], ["die Last, -en", "the burden", "le fardeau"], ["der Damm, ¨-e", "the dam, the dyke", "la digue"], ["verschleiern", "to conceal", "dissimuler"], ["prägen", "to coin, to shape", "forger, façonner"]],
    lines: [["Moderatorin", "Herr Lenz, Sie sagen, Wörter lenken unser Denken. Wie meinen Sie das?", "de-DE"], ["Prof. Lenz", "Nehmen Sie das Wort „Steuerlast“. Eine Last will jeder loswerden. Sprechen wir dagegen von einem „Steuerbeitrag“, denken wir an etwas, das man für die Gemeinschaft leistet. Es ist dieselbe Sache in einem anderen Rahmen.", "de-DE"], ["Moderatorin", "Das nennt man Framing?", "de-DE"], ["Prof. Lenz", "Genau. Ein solcher Rahmen ruft Bilder im Kopf hervor, oft ohne dass wir es merken. Wer von einer „Welle“ von Menschen spricht, erzeugt das Bild einer Naturkatastrophe, gegen die man Dämme bauen muss.", "de-DE"], ["Moderatorin", "Ist das schon Manipulation?", "de-DE"], ["Prof. Lenz", "Nicht unbedingt. Jede Sprache rahmt. Problematisch wird es, wenn ein Rahmen bewusst eingesetzt wird, um Tatsachen zu verschleiern, etwa wenn aus Entlassungen eine „Freisetzung“ wird.", "de-DE"], ["Moderatorin", "Was raten Sie unseren Hörerinnen und Hörern?", "de-DE"], ["Prof. Lenz", "Fragen Sie bei jedem auffälligen Wort: Wer hat es geprägt, und welches Bild soll es erzeugen? Wer das fragt, ist schon ein Stück unabhängiger.", "de-DE"]],
    gist: ["Worum geht es im Gespräch?", ["Darum, wie Wörter unser Denken beeinflussen", "Um eine Steuerreform", "Um den Bau eines Damms"]],
    detail: [["Woran denkt man laut Prof. Lenz bei „Steuerbeitrag“?", ["An etwas, das man für die Gemeinschaft leistet", "An eine Strafe", "An eine Last"]], ["Welches Bild erzeugt das Wort „Welle“?", ["Das Bild einer Naturkatastrophe", "Das Bild eines Festes", "Das Bild eines Sportereignisses"]], ["Wann wird Framing laut Prof. Lenz problematisch?", ["Wenn es bewusst eingesetzt wird, um Tatsachen zu verschleiern", "Immer", "Nie"]], ["Was rät er den Hörern?", ["Bei auffälligen Wörtern nach Urheber und Bild zu fragen", "Keine Nachrichten mehr zu hören", "Nur noch Fachsprache zu verwenden"]]],
    decode: ["Es ist dieselbe Sache in einem anderen Rahmen", "Wer hat es geprägt, und welches Bild soll es erzeugen"],
    tip: "Notice that Professor Lenz doesn't call framing manipulation as such (Nicht unbedingt. Jede Sprache rahmt.). At C2, listening means catching such nuances: the difference between a speaker's position and a simplified version of it.", tip_fr: "Remarque que le professeur Lenz ne qualifie pas le cadrage de manipulation en soi (Nicht unbedingt. Jede Sprache rahmt.). Au C2, écouter, c'est saisir ces nuances : la différence entre la position d'une personne et une version simplifiée de celle-ci."
  }]);

  W.PROMPTS.push({ id: "de-c2-7", level: "C2", q: "Halte einen Vortrag (etwa drei bis vier Minuten): „Wie Wörter unser Denken lenken.“ Erkläre das Prinzip des Framings an Beispielen aus Politik oder Werbung und zeige, wie man sich davor schützen kann.", en: "Give a talk (about three to four minutes): “How words steer our thinking.” Explain framing with examples from politics or advertising, and show how to protect yourself against it.", fr: "Fais un exposé (environ trois à quatre minutes) : « Comment les mots orientent notre pensée. » Explique le principe du cadrage à l'aide d'exemples tirés de la politique ou de la publicité, et montre comment s'en protéger.", time: 240,
    phrases: ["Nehmen wir ein Beispiel: …", "Es ist dieselbe Sache, aber…", "Problematisch wird es, wenn…", "Wer genau…?", "Letzten Endes…"],
    model: "Mein Thema ist die Frage, wie Wörter unser Denken lenken. Nehmen wir ein Beispiel: Ob wir von „Steuerlast“ oder von „Steuerbeitrag“ sprechen, ändert nichts an der Höhe der Steuern. Und doch denken wir im ersten Fall an ein Gewicht, das uns niederdrückt, im zweiten an einen Beitrag zur Gemeinschaft. Es ist dieselbe Sache, aber ein anderer Rahmen. Dieses Prinzip nennt man Framing. Auch die Werbung nutzt es: Ein Joghurt, der „97 Prozent fettfrei“ ist, wirkt gesünder als einer mit „drei Prozent Fett“, obwohl es keinen Unterschied gibt. Problematisch wird Framing, wenn es bewusst eingesetzt wird, um Tatsachen zu verschleiern, etwa wenn aus Entlassungen eine „Freisetzung“ wird oder wenn „Fehler gemacht wurden“, ohne dass jemand sie gemacht haben will. Wie kann man sich schützen? Indem man bei auffälligen Wörtern fragt, welches Bild sie erzeugen und wem sie nützen, und indem man bei jedem Passiv nachhakt: Wer genau? Letzten Endes ist Sprachbewusstsein die beste Verteidigung gegen Manipulation." });

  W.WRITING_GUIDE["c2-7"] = { genre: "An essay (C2)", genre_fr: "Un essai (C2)",
    plan: [["A recurring accusation and your thesis.", "Un reproche récurrent et ta thèse."], ["What language criticism does and doesn't do.", "Ce que fait et ne fait pas la critique du langage."], ["Why words matter.", "Pourquoi les mots comptent."], ["The dangers, taken seriously.", "Les dangers, pris au sérieux."], ["Criteria and a conclusion.", "Des critères et une conclusion."]],
    marks: [["Ich halte diesen Vorwurf für unbegründet", "the thesis", "la thèse"], ["Dass Wörter Wirkung haben, ist kaum zu bestreiten", "a subject clause with sein + zu", "une subordonnée sujet avec sein + zu"], ["nicht selten", "a litotes", "une litote"], ["Es wäre allerdings unredlich, die Gefahren zu verschweigen", "a fair concession", "une concession honnête"], ["eher Gespräche, als dass er sie ermöglicht", "eher …, als dass", "eher …, als dass"], ["Sand in die Augen streuen", "an idiom", "une expression idiomatique"]] };

  /* Atelier de langue : champs allemands d'abord, puis anglais et français (voir localize.js). */
  W.LEXIS = W.LEXIS || {};
  W.LEXIS["c2-7"] = {
    colloc: [
      ["Stimmung machen gegen", "to stir up feeling against", "monter l'opinion contre", "Die Zeitung machte Stimmung gegen die Reform.", "machte", ["tat", "gab"]],
      ["Ängste schüren", "to stoke fears", "attiser les peurs", "Die Kampagne schürte gezielt Ängste.", "schürte", ["schnürte", "spürte"]],
      ["einen Begriff besetzen", "to claim a term", "s'approprier un terme", "Die Partei versuchte, den Begriff „Freiheit“ zu besetzen.", "besetzen", ["besitzen", "besiegen"]],
      ["die Deutungshoheit gewinnen", "to gain control of the narrative", "gagner la maîtrise du discours", "Wer die Deutungshoheit gewinnt, bestimmt die Debatte.", "gewinnt", ["gewöhnt", "gewährt"]],
      ["Vorurteile bedienen", "to pander to prejudices", "flatter les préjugés", "Der Beitrag bediente alte Vorurteile.", "bediente", ["bedrohte", "bedeutete"]],
      ["die Verantwortung abschieben", "to shift the blame", "rejeter la responsabilité", "Der Minister schob die Verantwortung auf seine Mitarbeiter ab.", "schob", ["stieß", "zog"]],
      ["einer Frage ausweichen", "to dodge a question", "éluder une question", "Die Sprecherin wich der Frage geschickt aus.", "wich", ["wies", "wog"]],
      ["Tatsachen verschleiern", "to conceal facts", "dissimuler des faits", "Der Bericht verschleiert die wahren Kosten.", "verschleiert", ["verschleißt", "verschiebt"]],
      ["Zweifel säen", "to sow doubt", "semer le doute", "Die Kampagne säte Zweifel an der Wissenschaft.", "säte", ["sägte", "sah"]],
      ["sich von einer Äußerung distanzieren", "to distance oneself from a statement", "se démarquer d'une déclaration", "Die Partei distanzierte sich von der Äußerung.", "distanzierte", ["diskutierte", "dirigierte"]]
    ],
    wf: [
      ["Der Begriff dient der ___ von Tatsachen. (VERSCHLEIERN)", "Verschleierung"],
      ["Diese Formulierung ist ___. (IRREFÜHREN)", "irreführend"],
      ["Das ist eine böswillige ___. (UNTERSTELLEN)", "Unterstellung"],
      ["Der Kommentar war sehr ___. (POLEMIK)", "polemisch"],
      ["Die ___ des Konflikts nützt niemandem. (ZUSPITZEN)", "Zuspitzung"],
      ["Man spricht von einer ___ der Gesellschaft. (SPALTEN)", "Spaltung"],
      ["Der Ausdruck wirkt ___. (VERHARMLOSEN)", "verharmlosend"],
      ["Die Würde des Menschen ist ___. (ANTASTEN)", "unantastbar"]
    ],
    kwt: [
      ["Bei dem Projekt wurden Fehler gemacht.", "HAT", "Wer ___?", "hat bei dem Projekt Fehler gemacht"],
      ["Am Rande der Demonstration gab es Ausschreitungen.", "KAM", "Am Rande der Demonstration ___.", "kam es zu Ausschreitungen"],
      ["Der Sprecher beantwortete die Frage nicht direkt.", "WICH", "Der Sprecher ___.", "wich der Frage aus"],
      ["Die Kampagne machte den Menschen gezielt Angst.", "SCHÜRTE", "Die Kampagne ___.", "schürte gezielt Ängste"],
      ["Der Minister sagte, seine Mitarbeiter seien verantwortlich.", "VERANTWORTUNG", "Der Minister versuchte, ___.", "die Verantwortung auf seine Mitarbeiter abzuschieben"],
      ["Wir sollten offen sagen, was passiert.", "NAMEN", "Wir sollten ___.", "das Kind beim Namen nennen"]
    ],
    idioms: [
      ["jemandem Sand in die Augen streuen", "jemanden täuschen", "to pull the wool over someone's eyes", "jeter de la poudre aux yeux", "Mit diesen Zahlen will man uns Sand in die Augen streuen.", "Sand in die Augen streuen"],
      ["die Tatsachen verdrehen", "die Wahrheit falsch darstellen", "to twist the facts", "déformer les faits", "Im Interview verdrehte er die Tatsachen.", "verdrehte er die Tatsachen"],
      ["den Spieß umdrehen", "mit den Mitteln des Gegners zurückschlagen", "to turn the tables", "retourner la situation", "In der Debatte drehte sie den Spieß um.", "drehte sie den Spieß um"],
      ["die Fahne nach dem Wind hängen", "seine Meinung der jeweiligen Mehrheit anpassen", "to trim one's sails to the wind", "retourner sa veste", "Er hängt seine Fahne immer nach dem Wind.", "hängt seine Fahne immer nach dem Wind"],
      ["den Mantel des Schweigens über etwas breiten", "über etwas nicht mehr sprechen", "to draw a veil over something", "jeter un voile sur quelque chose", "Über den Skandal wurde der Mantel des Schweigens gebreitet.", "der Mantel des Schweigens gebreitet"],
      ["etwas schönreden", "etwas besser darstellen, als es ist", "to gloss over something", "enjoliver quelque chose", "Man sollte die Lage nicht schönreden.", "nicht schönreden"],
      ["die Kirche im Dorf lassen", "nicht übertreiben", "not to get carried away", "ne pas exagérer", "Lass mal die Kirche im Dorf: So schlimm ist es nicht.", "die Kirche im Dorf"],
      ["das Kind beim Namen nennen", "etwas offen und direkt aussprechen", "to call a spade a spade", "appeler un chat un chat", "Wir sollten das Kind beim Namen nennen.", "das Kind beim Namen nennen"]
    ]
  };

  W.COURSE.push({ id: "c2-7", level: "C2", icon: "megaphone", title: "Language and power", title_fr: "Langue et pouvoir",
    intro: "Words don't just describe the world; they frame it. In this unit, you'll learn to recognise framing, euphemisms and loaded words (Steuerlast or Steuerbeitrag?), to spot the grammar that hides who is responsible (Fehler wurden gemacht), and to ask critical questions politely but firmly. You'll also read about the “Unwort des Jahres”, a word chosen every year because it misleads, conceals or wounds.",
    intro_fr: "Les mots ne se contentent pas de décrire le monde : ils l'encadrent. Dans cette unité, tu vas apprendre à reconnaître le cadrage, les euphémismes et les mots chargés (Steuerlast ou Steuerbeitrag ?), à repérer la grammaire qui cache les responsables (Fehler wurden gemacht), et à poser des questions critiques avec politesse et fermeté. Tu liras aussi un texte sur l'« Unwort des Jahres », un mot choisi chaque année parce qu'il trompe, dissimule ou blesse.",
    can: ["Recognise framing, euphemisms, flag words and stigma words", "Spot and use constructions that hide the agent", "Ask critical follow-up questions and refuse evasive answers", "Talk about language criticism and public debate", "Write an essay on language and power (C2)"],
    can_fr: ["Reconnaître le cadrage, les euphémismes, les mots-étendards et les mots stigmatisants", "Repérer et employer les constructions qui masquent l'agent", "Poser des questions de relance critiques et refuser les réponses évasives", "Parler de critique du langage et de débat public", "Écrire un essai sur la langue et le pouvoir (C2)"],
    lessons: [151, 152, 153], vocab: ["sprachkritikDE", "debatteDE"], reading: "unwort", prompt: "de-c2-7",
    writing: { task: "Write an essay (300-350 words): “Language criticism: patronising or necessary vigilance?” Include a recurring accusation and your thesis, what language criticism does and doesn't do, why words matter, the dangers, and criteria for good language criticism.", task_fr: "Écris un essai (300 à 350 mots) : « La critique du langage : condescendance ou vigilance nécessaire ? » Avec un reproche récurrent et ta thèse, ce que fait et ne fait pas la critique du langage, pourquoi les mots comptent, les dangers, et des critères d'une bonne critique du langage.", words: "300-350",
      tips: ["Ich halte diesen Vorwurf für unbegründet: …", "Dass …, ist kaum zu bestreiten.", "Es wäre allerdings unredlich, … zu verschweigen.", "…, verhindert eher …, als dass…", "Letzten Endes…"],
      checklist: ["I wrote a lead-in and a clear thesis", "I gave concrete examples of loaded words", "I discussed the dangers fairly", "I proposed criteria", "I wrote between 300 and 350 words"],
      checklist_fr: ["J'ai écrit une amorce et une thèse claire", "J'ai donné des exemples concrets de mots chargés", "J'ai discuté honnêtement des dangers", "J'ai proposé des critères", "J'ai écrit entre 300 et 350 mots"],
      model: "Jedes Jahr im Januar, wenn das „Unwort des Jahres“ verkündet wird, folgt fast reflexartig der Vorwurf, hier maße sich eine Jury an, den Menschen vorzuschreiben, wie sie zu sprechen hätten. Von „Sprachpolizei“ ist dann die Rede. Ich halte diesen Vorwurf für unbegründet: Sprachkritik ist keine Bevormundung, sondern eine Einladung zum Nachdenken.\n\nZunächst einmal verbietet die Jury nichts. Sie begründet öffentlich, warum ein Wort ihrer Ansicht nach Menschen herabsetzt oder Tatsachen verschleiert, und jeder kann dieser Begründung widersprechen. Gerade das macht Sprachkritik demokratisch: Sie ersetzt nicht das eigene Urteil, sondern fordert es heraus. Niemand ist gezwungen, sich ihrem Urteil anzuschließen.\n\nDass Wörter Wirkung haben, ist kaum zu bestreiten. Wer von einer „Welle“ von Geflüchteten spricht, ruft das Bild einer Naturkatastrophe hervor; wer Entlassungen „Freisetzungen“ nennt, lässt die Betroffenen verschwinden. Solche Ausdrücke entstehen selten zufällig. Sie werden geprägt, wiederholt und nicht selten gezielt eingesetzt, um Stimmung zu machen oder Verantwortung zu verschleiern. Wer solche Mechanismen durchschaut, kann ihnen widerstehen.\n\nEs wäre allerdings unredlich, die Gefahren zu verschweigen. Sprachkritik kann selbst zum Kampfmittel werden, wenn sie vor allem dazu dient, politische Gegner moralisch abzuwerten. Wer jede unglückliche Formulierung skandalisiert, verhindert eher Gespräche, als dass er sie ermöglicht. Zudem verändert ein neues Wort allein noch keine Wirklichkeit: Eine schöne Bezeichnung für ein schlechtes Gesetz macht dieses nicht besser.\n\nEntscheidend ist meines Erachtens die Haltung. Sprachkritik überzeugt dann, wenn sie Argumente liefert statt Etiketten, wenn sie die Mächtigen stärker ins Visier nimmt als Einzelne und wenn sie die eigene Sprache nicht ausnimmt. Gute Sprachkritik fragt nicht in erster Linie, ob ein Wort erlaubt ist, sondern was es bewirkt und wem es nützt. Sie sollte zudem einräumen, dass sich Bedeutungen wandeln und dass nicht jedes umstrittene Wort böse gemeint ist.\n\nLetzten Endes ist wache Aufmerksamkeit für Sprache ein Zeichen demokratischer Reife. Wer genau hinhört, lässt sich weniger leicht Sand in die Augen streuen. Insofern ist das Unwort des Jahres weniger ein Verbot als eine jährliche Erinnerung daran, dass Wörter nie unschuldig sind." } });
})();
