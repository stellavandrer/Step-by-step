/* Cours d'allemand, unité B1-5 « Relationships / Les relations » : les relatives au datif, avec préposition et au
   génitif (dem, mit der, dessen, deren ; was, wo), les verbes réfléchis (sich + accusatif ou datif, réciproques) ;
   tutoyer ou vouvoyer, exprimer ses sentiments, s'excuser et se réconcilier. Explications en anglais ET en français.
   Personnages fictifs, prénoms allemands.
   Faits vérifiables seulement : seul le mariage civil (Standesamt) a une valeur juridique en Allemagne depuis 1875 ;
   le mariage religieux est facultatif ; Polterabend la veille ou quelques jours avant : on casse de la vaisselle
   (porcelaine, céramique) et les mariés balaient ensemble les morceaux ; dans certaines régions, les mariés scient
   un tronc ensemble ; mariage ouvert aux couples de même sexe depuis le 1er octobre 2017 (« Ehe für alle »).
   Tutoiement : traditionnellement proposé par la personne la plus âgée ou de rang plus élevé ; dans le doute, Sie.
   Écrit : e-mail personnel d'excuse (Goethe B1, partie 1, environ 80 mots). */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "beziehungDE", icon: "heart-handshake", title: "Relationships", title_fr: "Les relations", level: "B1", words: [
    ["die Beziehung, -en", "the relationship", "la relation", "Die beiden haben eine sehr gute Beziehung."],
    ["die Freundschaft, -en", "the friendship", "l'amitié", "Unsere Freundschaft hat schon zwanzig Jahre gehalten."],
    ["der Partner, -", "the partner", "le partenaire, le compagnon", "Sie lebt mit ihrem Partner in Bremen."],
    ["sich verlieben in", "to fall in love with", "tomber amoureux de", "Er hat sich im Urlaub in eine Spanierin verliebt."],
    ["sich trennen von", "to split up with", "se séparer de", "Nach acht Jahren haben sie sich getrennt."],
    ["die Hochzeit, -en", "the wedding", "le mariage (la fête)", "Die Hochzeit findet im Juni statt."],
    ["die Ehe, -n", "the marriage", "le mariage (l'union)", "Ihre Ehe ist sehr glücklich."],
    ["sich verstehen mit", "to get on with", "s'entendre avec", "Ich verstehe mich gut mit meinen Kollegen."],
    ["vertrauen", "to trust", "faire confiance à", "Ich vertraue dir."],
    ["das Vertrauen", "trust", "la confiance", "Ohne Vertrauen gibt es keine Freundschaft."],
    ["sich streiten", "to argue, to quarrel", "se disputer", "Meine Geschwister streiten sich oft."],
    ["sich versöhnen", "to make up", "se réconcilier", "Nach dem Streit haben sie sich schnell versöhnt."],
    ["der / die Bekannte, -n", "the acquaintance", "la connaissance (personne)", "Das ist kein Freund, nur ein Bekannter."],
    ["sich verabreden", "to arrange to meet", "se donner rendez-vous", "Wir haben uns für Freitag verabredet."],
    ["einander", "each other", "l'un l'autre", "Die beiden helfen einander, wo sie können."],
    ["die Verlobung, -en", "the engagement", "les fiançailles", "Sie haben ihre Verlobung mit Freunden gefeiert."]
  ] },
  { id: "gefuehleDE", icon: "heart", title: "Feelings and apologies", title_fr: "Sentiments et excuses", level: "B1", words: [
    ["enttäuscht", "disappointed", "déçu", "Ich bin ein bisschen enttäuscht von dir."],
    ["erleichtert", "relieved", "soulagé", "Nach der Prüfung war ich total erleichtert."],
    ["sauer", "cross, annoyed (colloquial); sour", "fâché (familier) ; acide", "Bist du noch sauer auf mich?"],
    ["eifersüchtig", "jealous", "jaloux", "Er ist eifersüchtig auf ihren neuen Kollegen."],
    ["einsam", "lonely", "seul (qui souffre de solitude)", "In der neuen Stadt fühlte sie sich zuerst einsam."],
    ["wütend", "angry, furious", "furieux", "Warum bist du so wütend?"],
    ["sich schämen", "to be ashamed", "avoir honte", "Ich schäme mich für meine Worte."],
    ["verzeihen", "to forgive", "pardonner", "Kannst du mir verzeihen?"],
    ["sich entschuldigen bei", "to apologise to", "s'excuser auprès de", "Ich möchte mich bei dir entschuldigen."],
    ["Das war nicht so gemeint.", "I didn't mean it like that.", "ce n'était pas méchant, je ne voulais pas dire ça", "Entschuldige, das war nicht so gemeint."],
    ["Schon gut.", "it's fine, never mind", "ce n'est rien, ça va", "Schon gut, vergessen wir das."],
    ["duzen", "to say du to someone", "tutoyer", "Unter Kollegen duzt man sich hier."],
    ["siezen", "to say Sie to someone", "vouvoyer", "Den Chef siezen alle."],
    ["die Geduld", "patience", "la patience", "Danke für deine Geduld!"]
  ] });

  W.LESSONS.push(
  {
    id: 55, level: "B1", icon: "users",
    title: "Die Freundin, mit der ich wohne: more relative clauses", title_fr: "Die Freundin, mit der ich wohne : les relatives, suite",
    subtitle: "Relative pronouns in the dative and genitive, with prepositions, and was / wo.", subtitle_fr: "Les pronoms relatifs au datif et au génitif, avec préposition, et was / wo.",
    body: `
<h2>All the relative pronouns</h2>
<p>At A2 you used <s-de>der, die, das</s-de> (subject) and <s-de>den</s-de> (object). The case always depends on the role in the relative clause. Dative: <s-de>der Freund, dem ich alles erzähle</s-de> (the friend I tell everything to). Note the plural dative: <s-de>denen</s-de>.</p>
<table>
<tr><th></th><th>masc.</th><th>fem.</th><th>neut.</th><th>pl.</th></tr>
<tr><td>nom.</td><td><s-de>der</s-de></td><td><s-de>die</s-de></td><td><s-de>das</s-de></td><td><s-de>die</s-de></td></tr>
<tr><td>acc.</td><td><s-de>den</s-de></td><td><s-de>die</s-de></td><td><s-de>das</s-de></td><td><s-de>die</s-de></td></tr>
<tr><td>dat.</td><td><s-de>dem</s-de></td><td><s-de>der</s-de></td><td><s-de>dem</s-de></td><td><s-de>denen</s-de></td></tr>
<tr><td>gen.</td><td><s-de>dessen</s-de></td><td><s-de>deren</s-de></td><td><s-de>dessen</s-de></td><td><s-de>deren</s-de></td></tr>
</table>
<h2>With a preposition</h2>
<p>The preposition comes first, as in formal English ("with whom"): <s-de>die Freundin, mit der ich wohne</s-de> (the friend I live with) · <s-de>die Leute, bei denen ich wohne</s-de> · <s-de>das Thema, über das wir gesprochen haben</s-de>. The preposition never goes to the end.</p>
<h2>whose: dessen, deren</h2>
<p><s-de>Das ist der Nachbar, dessen Hund immer bellt.</s-de> (whose dog) · <s-de>Das ist die Kollegin, deren Mann Koch ist.</s-de> <s-de>dessen</s-de> for a masculine or neuter owner, <s-de>deren</s-de> for a feminine or plural owner.</p>
<h2>was and wo</h2>
<p>After <s-de>alles, etwas, nichts, das</s-de>: <s-de>was</s-de>: <s-de>Das ist alles, was ich weiß.</s-de> For a place: <s-de>wo</s-de>: <s-de>die Stadt, wo ich geboren bin</s-de>.</p>
<div class="tip">English can put the preposition at the end ("the friend I live with"); German never can. Start with the preposition, then the pronoun in the case the preposition wants: <s-de>mit</s-de> + dative → <s-de>mit der, mit dem, mit denen</s-de>.</div>
`,
    body_fr: `
<h2>Tous les pronoms relatifs</h2>
<p>Au niveau A2, tu as employé <s-de>der, die, das</s-de> (sujet, « qui ») et <s-de>den</s-de> (complément, « que »). Le cas dépend toujours du rôle dans la relative. Au datif : <s-de>der Freund, dem ich alles erzähle</s-de> (l'ami à qui je raconte tout). Attention au datif pluriel : <s-de>denen</s-de>.</p>
<table>
<tr><th></th><th>masc.</th><th>fém.</th><th>neutre</th><th>pl.</th></tr>
<tr><td>nom.</td><td><s-de>der</s-de></td><td><s-de>die</s-de></td><td><s-de>das</s-de></td><td><s-de>die</s-de></td></tr>
<tr><td>acc.</td><td><s-de>den</s-de></td><td><s-de>die</s-de></td><td><s-de>das</s-de></td><td><s-de>die</s-de></td></tr>
<tr><td>dat.</td><td><s-de>dem</s-de></td><td><s-de>der</s-de></td><td><s-de>dem</s-de></td><td><s-de>denen</s-de></td></tr>
<tr><td>gén.</td><td><s-de>dessen</s-de></td><td><s-de>deren</s-de></td><td><s-de>dessen</s-de></td><td><s-de>deren</s-de></td></tr>
</table>
<h2>Avec une préposition</h2>
<p>La préposition vient en premier, comme « avec qui », « chez qui », « dont » : <s-de>die Freundin, mit der ich wohne</s-de> (l'amie avec qui j'habite) · <s-de>die Leute, bei denen ich wohne</s-de> (les gens chez qui j'habite) · <s-de>das Thema, über das wir gesprochen haben</s-de> (le sujet dont nous avons parlé).</p>
<h2>dont (possession) : dessen, deren</h2>
<p><s-de>Das ist der Nachbar, dessen Hund immer bellt.</s-de> (le voisin dont le chien aboie toujours) · <s-de>Das ist die Kollegin, deren Mann Koch ist.</s-de> <s-de>dessen</s-de> quand le possesseur est masculin ou neutre, <s-de>deren</s-de> quand il est féminin ou pluriel.</p>
<h2>was et wo</h2>
<p>Après <s-de>alles, etwas, nichts, das</s-de> : <s-de>was</s-de> : <s-de>Das ist alles, was ich weiß.</s-de> (C'est tout ce que je sais.) Pour un lieu : <s-de>wo</s-de> : <s-de>die Stadt, wo ich geboren bin</s-de> (la ville où j'ai vu le jour).</p>
<div class="tip">Le « dont » français a plusieurs traductions : possession → <s-de>dessen / deren</s-de> ; verbe avec von ou über → préposition + pronom (<s-de>das Buch, von dem ich spreche</s-de>). Demande-toi toujours quel verbe et quelle préposition se cachent derrière.</div>
`,
    examples: [
      ["Das ist der Freund, dem ich alles erzähle.", "That's the friend I tell everything to.", "C'est l'ami à qui je raconte tout."],
      ["Die Freundin, mit der ich wohne, kommt aus Wien.", "The friend I live with is from Vienna.", "L'amie avec qui j'habite vient de Vienne."],
      ["Die Leute, bei denen ich in Berlin gewohnt habe, waren sehr nett.", "The people I stayed with in Berlin were very nice.", "Les gens chez qui j'ai habité à Berlin étaient très gentils."],
      ["Das ist der Nachbar, dessen Hund immer bellt.", "That's the neighbour whose dog is always barking.", "C'est le voisin dont le chien aboie tout le temps."],
      ["Ich habe eine Kollegin, deren Mann Koch ist.", "I have a colleague whose husband is a cook.", "J'ai une collègue dont le mari est cuisinier."],
      ["Das ist alles, was ich darüber weiß.", "That's all I know about it.", "C'est tout ce que je sais à ce sujet."],
      ["Das Thema, über das wir gesprochen haben, war schwierig.", "The topic we talked about was difficult.", "Le sujet dont nous avons parlé était difficile."]
    ],
    quiz: [
      { q: "“Das ist der Freund, ___ ich vertraue.” (vertrauen + dative)", q_fr: "« Das ist der Freund, ___ ich vertraue. » (vertrauen + datif)", o: ["dem", "den", "der"], a: 0, ex: "vertrauen takes the dative: dem.", ex_fr: "vertrauen se construit avec le datif : dem." },
      { q: "“the colleague I work with” (die Kollegin)", q_fr: "« la collègue avec qui je travaille » (die Kollegin)", o: ["die Kollegin, mit der ich arbeite", "die Kollegin, der ich arbeite mit", "die Kollegin, mit die ich arbeite"], a: 0, ex: "mit + dative feminine: mit der; the preposition first.", ex_fr: "mit + datif féminin : mit der ; la préposition en premier." },
      { q: "“die Kinder, mit ___ ich spiele”", q_fr: "« die Kinder, mit ___ ich spiele »", o: ["denen", "den", "die"], a: 0, ex: "Dative plural relative pronoun: denen.", ex_fr: "Pronom relatif au datif pluriel : denen." },
      { q: "“the neighbour whose car is red” (der Nachbar)", q_fr: "« le voisin dont la voiture est rouge » (der Nachbar)", o: ["der Nachbar, dessen Auto rot ist", "der Nachbar, deren Auto rot ist", "der Nachbar, wessen Auto rot ist"], a: 0, ex: "Masculine owner: dessen.", ex_fr: "Possesseur masculin : dessen." },
      { q: "“Das ist alles, ___ ich weiß.”", q_fr: "« Das ist alles, ___ ich weiß. »", o: ["was", "das", "wo"], a: 0, ex: "After alles: was.", ex_fr: "Après alles : was." }
    ]
  },
  {
    id: 56, level: "B1", icon: "repeat",
    title: "sich freuen, sich verlieben: reflexive verbs", title_fr: "sich freuen, sich verlieben : les verbes réfléchis",
    subtitle: "mich or mir? Reflexive pronouns in the accusative and dative, and doing things to each other.", subtitle_fr: "mich ou mir ? Les pronoms réfléchis à l'accusatif et au datif, et la réciprocité.",
    body: `
<h2>Reflexive verbs</h2>
<p>Many German verbs need a reflexive pronoun, often where English doesn't: <s-de>sich freuen</s-de> (to be happy), <s-de>sich verlieben</s-de> (to fall in love), <s-de>sich beeilen</s-de> (to hurry), <s-de>sich erinnern</s-de> (to remember), <s-de>sich streiten</s-de> (to argue), <s-de>sich entschuldigen</s-de> (to apologise).</p>
<table>
<tr><th>Person</th><th>accusative</th><th>dative</th></tr>
<tr><td><s-de>ich</s-de></td><td><s-de>mich</s-de></td><td><s-de>mir</s-de></td></tr>
<tr><td><s-de>du</s-de></td><td><s-de>dich</s-de></td><td><s-de>dir</s-de></td></tr>
<tr><td><s-de>er / sie / es</s-de></td><td><s-de>sich</s-de></td><td><s-de>sich</s-de></td></tr>
<tr><td><s-de>wir</s-de></td><td><s-de>uns</s-de></td><td><s-de>uns</s-de></td></tr>
<tr><td><s-de>ihr</s-de></td><td><s-de>euch</s-de></td><td><s-de>euch</s-de></td></tr>
<tr><td><s-de>sie / Sie</s-de></td><td><s-de>sich</s-de></td><td><s-de>sich</s-de></td></tr>
</table>
<h2>mich or mir?</h2>
<p>Usually accusative: <s-de>Ich freue mich.</s-de> But when the sentence already has a direct object, the reflexive goes in the dative: <s-de>Ich wasche mich</s-de> (I wash myself) → <s-de>Ich wasche mir die Hände</s-de> (I wash my hands). Same with <s-de>sich etwas kaufen, sich etwas wünschen, sich etwas vorstellen, sich etwas merken</s-de>: <s-de>Ich wünsche mir ein Fahrrad.</s-de> · <s-de>Das kann ich mir nicht vorstellen.</s-de></p>
<h2>Each other</h2>
<p>In the plural, <s-de>sich</s-de> often means "each other": <s-de>Wir kennen uns seit der Schule.</s-de> (We've known each other since school.) · <s-de>Sie haben sich im Urlaub kennengelernt.</s-de> <s-de>einander</s-de> is more formal: <s-de>Sie helfen einander.</s-de></p>
<div class="tip">With body parts and clothes, German uses the dative and the article, not a possessive: <s-de>Ich putze mir die Zähne</s-de> (I brush my teeth) · <s-de>Er zieht sich die Jacke an</s-de>. In the Perfekt, reflexive verbs take <s-de>haben</s-de>: <s-de>Ich habe mich gefreut.</s-de></div>
`,
    body_fr: `
<h2>Les verbes réfléchis</h2>
<p>Beaucoup de verbes allemands sont réfléchis, parfois là où le français ne l'est pas, et inversement : <s-de>sich freuen</s-de> (se réjouir, être content), <s-de>sich verlieben</s-de> (tomber amoureux), <s-de>sich beeilen</s-de> (se dépêcher), <s-de>sich erinnern</s-de> (se souvenir), <s-de>sich streiten</s-de> (se disputer), <s-de>sich entschuldigen</s-de> (s'excuser).</p>
<table>
<tr><th>Personne</th><th>accusatif</th><th>datif</th></tr>
<tr><td><s-de>ich</s-de></td><td><s-de>mich</s-de></td><td><s-de>mir</s-de></td></tr>
<tr><td><s-de>du</s-de></td><td><s-de>dich</s-de></td><td><s-de>dir</s-de></td></tr>
<tr><td><s-de>er / sie / es</s-de></td><td><s-de>sich</s-de></td><td><s-de>sich</s-de></td></tr>
<tr><td><s-de>wir</s-de></td><td><s-de>uns</s-de></td><td><s-de>uns</s-de></td></tr>
<tr><td><s-de>ihr</s-de></td><td><s-de>euch</s-de></td><td><s-de>euch</s-de></td></tr>
<tr><td><s-de>sie / Sie</s-de></td><td><s-de>sich</s-de></td><td><s-de>sich</s-de></td></tr>
</table>
<h2>mich ou mir ?</h2>
<p>En général, l'accusatif : <s-de>Ich freue mich.</s-de> Mais quand la phrase a déjà un complément d'objet direct, le pronom réfléchi passe au datif : <s-de>Ich wasche mich</s-de> (je me lave) → <s-de>Ich wasche mir die Hände</s-de> (je me lave les mains). De même avec <s-de>sich etwas kaufen, sich etwas wünschen, sich etwas vorstellen, sich etwas merken</s-de> : <s-de>Ich wünsche mir ein Fahrrad.</s-de> · <s-de>Das kann ich mir nicht vorstellen.</s-de> (Je n'arrive pas à l'imaginer.)</p>
<h2>L'un l'autre</h2>
<p>Au pluriel, <s-de>sich</s-de> veut souvent dire « l'un l'autre », comme « se » en français : <s-de>Wir kennen uns seit der Schule.</s-de> (Nous nous connaissons depuis l'école.) · <s-de>Sie haben sich im Urlaub kennengelernt.</s-de> <s-de>einander</s-de> est plus soutenu : <s-de>Sie helfen einander.</s-de></p>
<div class="tip">Comme en français, on dit « je me lave les mains » et pas « je lave mes mains » : <s-de>Ich putze mir die Zähne</s-de> · <s-de>Er zieht sich die Jacke an</s-de>. Mais attention : au Perfekt, les verbes réfléchis prennent <s-de>haben</s-de>, pas « être » : <s-de>Ich habe mich gefreut.</s-de></div>
`,
    examples: [
      ["Ich freue mich sehr über dein Geschenk.", "I'm really pleased with your present.", "Ton cadeau me fait très plaisir."],
      ["Sie haben sich im Urlaub in Italien kennengelernt.", "They met on holiday in Italy.", "Ils se sont rencontrés en vacances en Italie."],
      ["Wasch dir bitte vor dem Essen die Hände!", "Please wash your hands before eating!", "Lave-toi les mains avant de manger, s'il te plaît !"],
      ["Ich wünsche mir zum Geburtstag nur Zeit mit euch.", "All I want for my birthday is time with you.", "Pour mon anniversaire, je ne veux que du temps avec vous."],
      ["Das kann ich mir gar nicht vorstellen.", "I can't imagine that at all.", "Je n'arrive pas du tout à l'imaginer."],
      ["Wir kennen uns schon seit der Grundschule.", "We've known each other since primary school.", "Nous nous connaissons depuis l'école primaire."],
      ["Beeil dich, der Zug fährt gleich!", "Hurry up, the train's about to leave!", "Dépêche-toi, le train va partir !"]
    ],
    quiz: [
      { q: "“Ich freue ___ auf das Wochenende.”", q_fr: "« Ich freue ___ auf das Wochenende. »", o: ["mich", "mir", "sich"], a: 0, ex: "No other object: accusative mich.", ex_fr: "Pas d'autre complément : accusatif mich." },
      { q: "“Ich wasche ___ die Hände.”", q_fr: "« Ich wasche ___ die Hände. »", o: ["mir", "mich", "meine"], a: 0, ex: "die Hände is the direct object: the reflexive goes in the dative.", ex_fr: "die Hände est le complément direct : le réfléchi passe au datif." },
      { q: "“We've known each other for years.”", q_fr: "« Nous nous connaissons depuis des années. »", o: ["Wir kennen uns seit Jahren.", "Wir kennen sich seit Jahren.", "Wir kennen einander uns seit Jahren."], a: 0, ex: "wir → uns.", ex_fr: "wir → uns." },
      { q: "“Kannst du ___ das vorstellen?”", q_fr: "« Kannst du ___ das vorstellen? »", o: ["dir", "dich", "sich"], a: 0, ex: "sich etwas vorstellen: das is the object, so dative dir.", ex_fr: "sich etwas vorstellen : das est le complément, donc datif dir." },
      { q: "The Perfekt of “sich freuen”:", q_fr: "Le Perfekt de « sich freuen » :", o: ["Ich habe mich gefreut.", "Ich bin mich gefreut.", "Ich habe mir gefreut."], a: 0, ex: "Reflexive verbs take haben.", ex_fr: "Les verbes réfléchis prennent haben." }
    ]
  },
  {
    id: 57, level: "B1", kind: "functional", icon: "heart-handshake",
    title: "Everyday German: du or Sie, feelings and apologies", title_fr: "L'allemand de tous les jours : du ou Sie, sentiments et excuses",
    subtitle: "When to switch to du, how to say how you feel, and how to make up after an argument.", subtitle_fr: "Quand passer au du, comment dire ce que tu ressens, et comment se réconcilier après une dispute.",
    body: `
<h2>du or Sie?</h2>
<p>With family, friends, children and in many student and sports settings, people say <s-de>du</s-de>. With adults you don't know, in shops, with officials and often at work, <s-de>Sie</s-de>. Traditionally, the older person or the one with the higher position offers the <s-de>du</s-de>: <s-de>Wollen wir uns duzen?</s-de> · <s-de>Sag doch du zu mir!</s-de> In many young companies, everyone says <s-de>du</s-de>. When in doubt, use <s-de>Sie</s-de> and wait.</p>
<h2>Saying how you feel</h2>
<p><s-de>Ich bin enttäuscht / erleichtert / sauer.</s-de> · <s-de>Es ärgert mich, dass…</s-de> · <s-de>Ich fühle mich ein bisschen einsam.</s-de> · <s-de>Das hat mich wirklich gefreut.</s-de> German adjectives after <s-de>sein</s-de> stay the same for everyone: <s-de>Ich bin enttäuscht</s-de>.</p>
<h2>Apologising</h2>
<p><s-de>Es tut mir leid, dass…</s-de> · <s-de>Entschuldige bitte!</s-de> · <s-de>Das war nicht so gemeint.</s-de> (I didn't mean it like that.) · <s-de>Ich möchte mich bei dir entschuldigen.</s-de> · <s-de>Kannst du mir verzeihen?</s-de></p>
<h2>Making up</h2>
<p><s-de>Schon gut.</s-de> · <s-de>Vergessen wir das.</s-de> · <s-de>Ist schon vergessen.</s-de> · <s-de>Lass uns in Ruhe darüber reden.</s-de> (Let's talk about it calmly.)</p>
<div class="tip">Switching back from <s-de>du</s-de> to <s-de>Sie</s-de> is very unusual, so the offer of <s-de>du</s-de> matters. If someone you <s-de>siez</s-de> offers it, accept warmly: <s-de>Gern! Ich heiße…</s-de></div>
`,
    body_fr: `
<h2>du ou Sie ?</h2>
<p>En famille, entre amis, avec les enfants et souvent entre étudiants ou dans un club de sport, on se dit <s-de>du</s-de>. Avec des adultes qu'on ne connaît pas, dans les magasins, dans l'administration et souvent au travail, on dit <s-de>Sie</s-de>. Traditionnellement, c'est la personne la plus âgée ou de rang plus élevé qui propose le <s-de>du</s-de> : <s-de>Wollen wir uns duzen?</s-de> (On se tutoie ?) · <s-de>Sag doch du zu mir!</s-de> Dans beaucoup de jeunes entreprises, tout le monde se tutoie. Dans le doute, emploie <s-de>Sie</s-de> et attends.</p>
<h2>Dire ce que tu ressens</h2>
<p><s-de>Ich bin enttäuscht / erleichtert / sauer.</s-de> · <s-de>Es ärgert mich, dass…</s-de> (Ça m'énerve que…) · <s-de>Ich fühle mich ein bisschen einsam.</s-de> · <s-de>Das hat mich wirklich gefreut.</s-de> Bonne nouvelle : en allemand, l'adjectif après <s-de>sein</s-de> ne s'accorde pas, <s-de>Ich bin enttäuscht</s-de> convient à tout le monde.</p>
<h2>S'excuser</h2>
<p><s-de>Es tut mir leid, dass…</s-de> · <s-de>Entschuldige bitte!</s-de> · <s-de>Das war nicht so gemeint.</s-de> (Je ne voulais pas dire ça.) · <s-de>Ich möchte mich bei dir entschuldigen.</s-de> · <s-de>Kannst du mir verzeihen?</s-de> (Tu peux me pardonner ?)</p>
<h2>Se réconcilier</h2>
<p><s-de>Schon gut.</s-de> (Ce n'est rien.) · <s-de>Vergessen wir das.</s-de> · <s-de>Ist schon vergessen.</s-de> · <s-de>Lass uns in Ruhe darüber reden.</s-de> (Parlons-en calmement.)</p>
<div class="tip">Revenir du <s-de>du</s-de> au <s-de>Sie</s-de> est très rare : la proposition de tutoiement compte donc. Si une personne que tu vouvoies te la fait, accepte chaleureusement : <s-de>Gern! Ich heiße…</s-de></div>
`,
    examples: [
      ["Wollen wir uns nicht duzen? Ich heiße Ingrid.", "Shall we say du to each other? I'm Ingrid.", "Et si on se tutoyait ? Je m'appelle Ingrid."],
      ["Gern! Ich heiße Jannik.", "Happily! I'm Jannik.", "Volontiers ! Je m'appelle Jannik."],
      ["Ich bin ein bisschen enttäuscht, dass du nicht gekommen bist.", "I'm a bit disappointed that you didn't come.", "Ça me déçoit un peu que tu n'aies pas pu venir."],
      ["Es tut mir leid, das war nicht so gemeint.", "I'm sorry, I didn't mean it like that.", "Pardon, je ne voulais pas dire ça."],
      ["Ich möchte mich bei dir entschuldigen.", "I'd like to apologise to you.", "Je voudrais te présenter mes excuses."],
      ["Schon gut, vergessen wir das.", "It's fine, let's forget it.", "Ce n'est rien, oublions ça."],
      ["Lass uns in Ruhe darüber reden.", "Let's talk about it calmly.", "Parlons-en calmement."]
    ],
    quiz: [
      { q: "Traditionally, who offers the du?", q_fr: "Traditionnellement, qui propose le du ?", o: ["The older person, or the one with the higher position", "The younger person", "Always the man"], o_fr: ["La personne la plus âgée, ou de rang plus élevé", "La personne la plus jeune", "Toujours l'homme"], a: 0, ex: "When in doubt, wait for the offer and use Sie.", ex_fr: "Dans le doute, attends qu'on te le propose et dis Sie." },
      { q: "“Shall we say du to each other?”", q_fr: "« On se tutoie ? »", o: ["Wollen wir uns duzen?", "Wollen wir uns siezen?", "Wollen wir du sagen uns?"], a: 0, ex: "duzen = to say du.", ex_fr: "duzen = tutoyer." },
      { q: "“I didn't mean it like that.”", q_fr: "« Je ne voulais pas dire ça. »", o: ["Das war nicht so gemeint.", "Das habe ich nicht gemeinsam.", "Das war nicht meine Meinung."], a: 0, ex: "meinen = to mean.", ex_fr: "meinen = vouloir dire." },
      { q: "Your friend apologises. You've already forgiven. You say:", q_fr: "Ton ami s'excuse. Tu as déjà pardonné. Tu dis :", o: ["Schon gut, vergessen wir das.", "Das tut mir leid.", "Entschuldige bitte!"], a: 0, ex: "Schon gut = it's fine, never mind.", ex_fr: "Schon gut = ce n'est rien." },
      { q: "“Can you forgive me?”", q_fr: "« Tu peux me pardonner ? »", o: ["Kannst du mir verzeihen?", "Kannst du mich verzeihen?", "Kannst du mir entschuldigen?"], a: 0, ex: "jemandem verzeihen: dative mir.", ex_fr: "jemandem verzeihen : datif mir." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    55: {
      gap: [["Das ist der Freund, ___ ich alles erzähle.", "dem"], ["Die Kollegin, mit ___ ich arbeite, ist sehr nett.", "der"], ["Die Leute, bei ___ ich wohne, kommen aus Graz.", "denen"], ["Das ist der Nachbar, ___ Hund immer bellt.", "dessen"]],
      fix: [["Das ist die Frau, die ich gestern mit gesprochen habe.", "Das ist die Frau, mit der ich gestern gesprochen habe.", "The preposition comes first: mit der.", "La préposition vient en premier : mit der."], ["Ich kenne eine Familie, dessen Kinder Französisch sprechen.", "Ich kenne eine Familie, deren Kinder Französisch sprechen.", "Feminine owner (die Familie): deren.", "Possesseur féminin (die Familie) : deren."]],
      task: ["Describe four people in your life with relative clauses using dem / der / denen, a preposition, and dessen or deren.", "Décris quatre personnes de ta vie avec des relatives en dem / der / denen, une préposition, et dessen ou deren.", "Meine Schwester ist die Person, der ich alles erzähle. Mein Kollege Timo, mit dem ich jeden Morgen Kaffee trinke, ist sehr lustig. Meine Großeltern, bei denen ich als Kind jeden Sommer war, wohnen am Meer. Und meine Nachbarin, deren Garten wunderschön ist, gibt mir oft Tomaten."]
    },
    56: {
      gap: [["Ich freue ___ sehr über dein Geschenk.", "mich"], ["Ich wasche ___ die Hände.", "mir"], ["Wir kennen ___ seit der Schule.", "uns"], ["Kannst du ___ das vorstellen?", "dir"]],
      fix: [["Ich bin mich gestern sehr gefreut.", "Ich habe mich gestern sehr gefreut.", "Reflexive verbs take haben in the Perfekt.", "Les verbes réfléchis prennent haben au Perfekt."], ["Ich putze meine Zähne mir.", "Ich putze mir die Zähne.", "Body parts: dative reflexive + article.", "Les parties du corps : réfléchi au datif + article."]],
      task: ["Tell how two people you know met and became close, in four sentences with reflexive verbs (sich kennenlernen, sich verlieben, sich streiten, sich verstehen…).", "Raconte comment deux personnes de ton entourage se sont rencontrées et rapprochées, en quatre phrases avec des verbes réfléchis (sich kennenlernen, sich verlieben, sich streiten, sich verstehen…).", "Meine Eltern haben sich in einem Chor kennengelernt. Mein Vater hat sich sofort verliebt, aber meine Mutter brauchte etwas länger. Sie streiten sich manchmal, aber sie versöhnen sich immer schnell. Nach dreißig Jahren verstehen sie sich immer noch wunderbar."]
    },
    57: {
      gap: [["Wollen wir uns ___? Ich heiße Ingrid.", "duzen", "say du", "se tutoyer"], ["Es tut mir ___, das war nicht so gemeint.", "leid"], ["Kannst du mir ___?", "verzeihen", "forgive", "pardonner"], ["Schon ___, vergessen wir das.", "gut"]],
      fix: [["Ich möchte mich zu dir entschuldigen.", "Ich möchte mich bei dir entschuldigen.", "sich entschuldigen bei + dative.", "sich entschuldigen bei + datif."], ["Kannst du mich verzeihen?", "Kannst du mir verzeihen?", "verzeihen takes the dative.", "verzeihen se construit avec le datif."]],
      task: ["You forgot your best friend's birthday. Write a short message (four sentences): apologise, explain, say how you feel, and suggest making up for it.", "Tu as oublié l'anniversaire de ton meilleur ami ou de ta meilleure amie. Écris un court message (quatre phrases) : excuse-toi, explique, dis ce que tu ressens, et propose de te rattraper.", "Es tut mir so leid, dass ich deinen Geburtstag vergessen habe! Ich hatte eine ganz stressige Woche, aber das ist keine Entschuldigung. Ich schäme mich wirklich. Darf ich dich am Samstag zum Frühstück einladen, um es wiedergutzumachen?"]
    }
  });

  W.ROLEPLAYS.push(
  { id: "hochzeitsfotos", lesson: 55, level: "B1", icon: "users", partner: "Clara", role: "a friend", role_fr: "une amie",
    title: "Looking at wedding photos", title_fr: "Regarder des photos de mariage",
    setting: "Your friend Clara got married last month. She shows you the photos and asks you about the people you remember.", setting_fr: "Ton amie Clara s'est mariée le mois dernier. Elle te montre les photos et te demande qui tu reconnais.",
    turns: [
      { p: "Schau mal, die Fotos von der Hochzeit sind da! Erkennst du den Mann mit dem Hut?", en: "Look, the wedding photos are here! Do you recognise the man with the hat?", fr: "Regarde, les photos du mariage sont arrivées ! Tu reconnais l'homme au chapeau ?" },
      { y: ["Ja, das ist doch der Onkel, mit dem ich so lange getanzt habe!", "Ja, das ist doch der Onkel, dem ich so lange mit getanzt habe!", "Ja, das ist doch der Onkel, mit den ich so lange getanzt habe!"], en: "Yes, that's the uncle I danced with for so long!", fr: "Oui, c'est l'oncle avec qui j'ai dansé si longtemps !", why: "mit + dative masculine: mit dem; the preposition first.", why_fr: "mit + datif masculin : mit dem ; la préposition en premier." },
      { p: "Genau! Und die Frau neben ihm?", en: "Exactly! And the woman next to him?", fr: "Exactement ! Et la femme à côté de lui ?" },
      { y: ["Ist das die Kollegin, deren Kuchen so lecker war?", "Ist das die Kollegin, dessen Kuchen so lecker war?", "Ist das die Kollegin, deren Kuchen war so lecker?"], en: "Is that the colleague whose cake was so delicious?", fr: "C'est la collègue dont le gâteau était si bon ?", why: "Feminine owner: deren; the verb at the end.", why_fr: "Possesseuse féminine : deren ; le verbe à la fin." },
      { p: "Ja, das ist Bettina. Sie hat sich riesig über deine Komplimente gefreut!", en: "Yes, that's Bettina. She was really pleased with your compliments!", fr: "Oui, c'est Bettina. Tes compliments lui ont fait très plaisir !" },
      { y: ["Das freut mich! Und wer sind die Kinder, denen alle so zugejubelt haben?", "Das freut mich! Und wer sind die Kinder, den alle so zugejubelt haben?", "Das freut mich! Und wer sind die Kinder, die alle so zugejubelt haben denen?"], en: "I'm glad! And who are the children everyone cheered so much?", fr: "Ça me fait plaisir ! Et qui sont les enfants que tout le monde a tant acclamés ?", why: "zujubeln + dative plural: denen.", why_fr: "zujubeln + datif pluriel : denen." },
      { p: "Das sind meine Nichten. Sie haben die Ringe gebracht. Und hier: Erinnerst du dich an das Spiel mit dem Baumstamm?", en: "Those are my nieces. They brought the rings. And here: do you remember the game with the log?", fr: "Ce sont mes nièces. Elles ont apporté les alliances. Et là : tu te souviens du jeu avec le tronc d'arbre ?" },
      { y: ["Natürlich erinnere ich mich daran! Ihr musstet ihn zusammen durchsägen.", "Natürlich erinnere ich mir daran! Ihr musstet ihn zusammen durchsägen.", "Natürlich ich erinnere mich daran! Ihr musstet ihn zusammen durchsägen."], en: "Of course I remember it! You had to saw through it together.", fr: "Bien sûr que je m'en souviens ! Vous deviez le scier ensemble.", why: "sich erinnern an: accusative mich, + daran; verb second.", why_fr: "sich erinnern an : accusatif mich, + daran ; verbe en deuxième position." },
      { p: "Das war das Schönste, was wir an dem Tag erlebt haben. Danke, dass du da warst!", en: "That was the loveliest thing we experienced that day. Thank you for being there!", fr: "C'était le plus beau moment de la journée. Merci d'avoir été là !" },
      { y: ["Ich danke euch! Es war ein Tag, an den ich mich lange erinnern werde.", "Ich danke euch! Es war ein Tag, den ich mich lange erinnern werde.", "Ich danke euch! Es war ein Tag, an dem ich mich lange erinnern werde."], en: "Thank you! It was a day I'll remember for a long time.", fr: "Merci à vous ! C'était une journée dont je me souviendrai longtemps.", why: "sich erinnern an + accusative: an den.", why_fr: "sich erinnern an + accusatif : an den." }
    ] },
  { id: "wgstreit", lesson: 57, level: "B1", icon: "heart-handshake", partner: "Hannes", role: "your flatmate", role_fr: "ton colocataire",
    title: "An argument in the flat-share", title_fr: "Une dispute dans la colocation",
    setting: "Your flatmate Hannes is annoyed: you borrowed his bike without asking, and you brought it back with a flat tyre.", setting_fr: "Ton colocataire Hannes est énervé : tu as emprunté son vélo sans demander, et tu l'as rapporté avec un pneu crevé.",
    turns: [
      { p: "Sag mal, hast du mein Fahrrad genommen? Der Reifen ist platt!", en: "Hey, did you take my bike? The tyre's flat!", fr: "Dis donc, tu as pris mon vélo ? Le pneu est à plat !" },
      { y: ["Ja, es tut mir wirklich leid. Ich hätte dich fragen sollen.", "Ja, es tut mich wirklich leid. Ich hätte dich fragen sollen.", "Ja, es tut mir wirklich leid. Ich hätte dich sollen fragen."], en: "Yes, I'm really sorry. I should have asked you.", fr: "Oui, je m'en veux vraiment. J'aurais dû te demander.", why: "es tut mir leid (dative); hätte … fragen sollen.", why_fr: "es tut mir leid (datif) ; hätte … fragen sollen." },
      { p: "Allerdings! Ich habe mich total geärgert, weil ich heute damit zur Arbeit wollte.", en: "You certainly should! I was really annoyed, because I wanted to ride it to work today.", fr: "Ça, c'est sûr ! Je me suis vraiment énervé, parce que je voulais aller au travail avec." },
      { y: ["Das verstehe ich. Ich habe mich auch geschämt, als ich es zurückgebracht habe.", "Das verstehe ich. Ich bin mich auch geschämt, als ich es zurückgebracht habe.", "Das verstehe ich. Ich habe mir auch geschämt, als ich es zurückgebracht habe."], en: "I understand. I felt ashamed too when I brought it back.", fr: "Je comprends. J'avais honte, moi aussi, en le rapportant.", why: "sich schämen: accusative mich, Perfekt with haben.", why_fr: "sich schämen : accusatif mich, Perfekt avec haben." },
      { p: "Hm. Und was machen wir jetzt mit dem Reifen?", en: "Hm. So what do we do about the tyre now?", fr: "Hum. Et maintenant, on fait quoi pour le pneu ?" },
      { y: ["Ich bringe es heute Nachmittag in die Werkstatt, mit der ich immer zufrieden bin, und bezahle natürlich alles.", "Ich bringe es heute Nachmittag in die Werkstatt, der ich immer mit zufrieden bin, und bezahle natürlich alles.", "Ich bringe es heute Nachmittag in die Werkstatt, mit die ich immer zufrieden bin, und bezahle natürlich alles."], en: "I'll take it to the workshop I'm always happy with this afternoon, and of course I'll pay for everything.", fr: "Je l'emmène cet après-midi à l'atelier qui me donne toujours satisfaction, et je paie tout, bien sûr.", why: "zufrieden mit + dative: mit der (die Werkstatt).", why_fr: "zufrieden mit + datif : mit der (die Werkstatt)." },
      { p: "Okay, das ist fair. Aber frag mich nächstes Mal bitte vorher.", en: "OK, that's fair. But please ask me first next time.", fr: "D'accord, c'est correct. Mais la prochaine fois, demande-moi avant, s'il te plaît." },
      { y: ["Versprochen. Kannst du mir verzeihen?", "Versprochen. Kannst du mich verzeihen?", "Versprochen. Kannst du mir verzeihst?"], en: "Promise. Can you forgive me?", fr: "Promis. Tu peux me pardonner ?", why: "jemandem verzeihen: dative mir.", why_fr: "jemandem verzeihen : datif mir." },
      { p: "Schon gut. Vergessen wir das. Kochst du heute Abend dafür?", en: "It's fine. Let's forget it. Are you cooking tonight to make up for it?", fr: "Ce n'est rien. On oublie. Tu cuisines ce soir pour te faire pardonner ?" },
      { y: ["Mit Vergnügen! Ich mache die Lasagne, über die du dich letztes Mal so gefreut hast.", "Mit Vergnügen! Ich mache die Lasagne, über der du dich letztes Mal so gefreut hast.", "Mit Vergnügen! Ich mache die Lasagne, die du dich letztes Mal so gefreut hast über."], en: "With pleasure! I'll make the lasagne you were so pleased with last time.", fr: "Avec plaisir ! Je fais les lasagnes qui t'avaient tant fait plaisir la dernière fois.", why: "sich freuen über + accusative: über die.", why_fr: "sich freuen über + accusatif : über die." }
    ] }
  );

  W.READINGS.push({
    id: "hochzeit", level: "B1", icon: "book-open", title: "Heiraten in Deutschland", genre: "Article",
    intro: "Smashing plates, sawing a log, and a ceremony at the registry office: German wedding customs.",
    intro_fr: "De la vaisselle cassée, un tronc à scier et une cérémonie à la mairie : les traditions de mariage en Allemagne.",
    paragraphs: [
      { de: "Wer in Deutschland heiraten möchte, muss zum Standesamt gehen. Nur die Trauung dort ist rechtlich gültig, und das schon seit 1875. Viele Paare feiern danach auch eine Hochzeit in der Kirche, aber die ist freiwillig.", en: "Anyone who wants to get married in Germany has to go to the registry office. Only the ceremony there is legally valid, and has been since 1875. Many couples then also celebrate a church wedding, but that is optional.", fr: "En Allemagne, celles et ceux qui veulent se marier doivent passer par le Standesamt, l'état civil. Seule la cérémonie qui y a lieu a une valeur juridique, et ce depuis 1875. Beaucoup de couples célèbrent ensuite aussi un mariage à l'église, mais il est facultatif." },
      { de: "Ein Brauch, den man in vielen Regionen kennt, ist der Polterabend. Vor der Hochzeit kommen Freunde und Familie zum Haus des Paares und werfen altes Geschirr aus Porzellan oder Keramik auf den Boden. Die Scherben sollen Glück bringen. Danach müssen die beiden zusammen alles aufkehren.", en: "One custom known in many regions is the Polterabend. Before the wedding, friends and family come to the couple's house and throw old porcelain or ceramic crockery on the ground. The broken pieces are supposed to bring luck. Afterwards, the two of them have to sweep everything up together.", fr: "Une coutume connue dans beaucoup de régions est le Polterabend. Avant le mariage, les amis et la famille viennent chez le couple et jettent par terre de la vieille vaisselle en porcelaine ou en céramique. Les morceaux sont censés porter bonheur. Ensuite, les deux doivent tout balayer ensemble." },
      { de: "Auch am Hochzeitstag gibt es Spiele, mit denen das Paar zeigen soll, dass es gut zusammenarbeitet. In manchen Gegenden müssen Braut und Bräutigam vor der Kirche gemeinsam einen Baumstamm durchsägen. Das geht nur, wenn beide im gleichen Rhythmus arbeiten.", en: "On the wedding day too, there are games through which the couple is supposed to show that they work well together. In some areas, the bride and groom have to saw through a log together in front of the church. That only works if both work in the same rhythm.", fr: "Le jour du mariage aussi, il y a des jeux par lesquels le couple doit montrer qu'il sait bien collaborer. Dans certaines régions, les mariés doivent scier ensemble un tronc d'arbre devant l'église. Cela ne marche que si les deux travaillent au même rythme." },
      { de: "Seit dem 1. Oktober 2017 dürfen in Deutschland auch zwei Männer oder zwei Frauen heiraten. Die Politik nannte das „Ehe für alle“. Wie die Hochzeit aussieht, entscheidet heute jedes Paar selbst: mit hundert Gästen oder ganz still zu zweit.", en: "Since 1 October 2017, two men or two women can also marry in Germany. Politicians called it “marriage for all”. Today each couple decides for themselves what their wedding looks like: with a hundred guests or quietly, just the two of them.", fr: "Depuis le 1er octobre 2017, deux hommes ou deux femmes peuvent aussi se marier en Allemagne. Les responsables politiques ont appelé cela le « mariage pour tous ». Aujourd'hui, chaque couple décide lui-même à quoi ressemble son mariage : avec cent invités ou en toute intimité, à deux." }
    ],
    glossary: { "Standesamt": ["registry office", "état civil, mairie"], "Trauung": ["wedding ceremony", "cérémonie de mariage"], "rechtlich": ["legally", "juridiquement"], "gültig": ["valid", "valable"], "Paare": ["couples", "couples"], "Paares": ["couple's", "du couple"], "Kirche": ["church", "église"], "freiwillig": ["voluntary, optional", "facultatif"], "Brauch": ["custom", "coutume"], "Regionen": ["regions", "régions"], "Geschirr": ["crockery, dishes", "vaisselle"], "Porzellan": ["porcelain", "porcelaine"], "Keramik": ["ceramics", "céramique"], "Boden": ["ground, floor", "sol"], "Scherben": ["broken pieces", "morceaux, éclats"], "aufkehren": ["to sweep up", "balayer"], "Hochzeitstag": ["wedding day", "jour du mariage"], "zusammenarbeitet": ["works together", "collabore"], "Gegenden": ["areas", "régions, contrées"], "Braut": ["bride", "mariée"], "Bräutigam": ["groom", "marié"], "Baumstamm": ["log, tree trunk", "tronc d'arbre"], "durchsägen": ["to saw through", "scier"], "Rhythmus": ["rhythm", "rythme"], "Politik": ["politics, politicians", "la politique, les responsables politiques"], "Gästen": ["guests", "invités"], "still": ["quiet(ly)", "tranquille, en silence"] },
    questions: [
      { q: "Welche Trauung ist in Deutschland rechtlich gültig?", o: ["Nur die Trauung beim Standesamt", "Nur die Trauung in der Kirche", "Beide sind Pflicht"], a: 0 },
      { q: "Was wirft man beim Polterabend auf den Boden?", o: ["Altes Geschirr aus Porzellan oder Keramik", "Blumen", "Geld"], a: 0 },
      { q: "Was müssen die beiden nach dem Polterabend tun?", o: ["Die Scherben zusammen aufkehren", "Neues Geschirr kaufen", "Ein Lied singen"], a: 0 },
      { q: "Was zeigt das Spiel mit dem Baumstamm?", o: ["Dass das Paar gut zusammenarbeitet", "Wer stärker ist", "Wer schneller ist"], a: 0 },
      { q: "Seit wann gibt es in Deutschland die „Ehe für alle“?", o: ["Seit dem 1. Oktober 2017", "Seit 1875", "Seit 1990"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-b1-5", unit: "b1-5", level: "B1", icon: "messages-square",
    title: "Wollen wir uns duzen?", title_fr: "On se tutoie ?",
    context: "After a successful project, Frau Lindner, a team leader, talks to her new colleague Herr Schmitt.", context_fr: "Après un projet réussi, Mme Lindner, cheffe d'équipe, parle avec son nouveau collègue, M. Schmitt.",
    words: [["anstoßen", "to clink glasses", "trinquer"], ["der Abteilungsleiter", "the head of department", "le chef de service"], ["üblich", "usual", "habituel"], ["die Hierarchie", "the hierarchy", "la hiérarchie"], ["gewöhnungsbedürftig", "something you have to get used to", "qui demande un temps d'adaptation"]],
    lines: [["Frau Lindner", "Herr Schmitt, das Projekt war ein voller Erfolg. Darauf sollten wir anstoßen!", "de-DE"], ["Herr Schmitt", "Sehr gern! Ich habe mich wirklich gefreut, dass alles so gut geklappt hat.", "de-DE"], ["Frau Lindner", "Wissen Sie was? Wir arbeiten jetzt seit drei Monaten zusammen. Wollen wir uns nicht duzen? Ich heiße Katrin.", "de-DE"], ["Herr Schmitt", "Gern! Ich bin Florian. Darf ich fragen: Duzen sich hier eigentlich alle?", "de-DE"], ["Katrin", "Im Team ja. Nur den Abteilungsleiter, mit dem wir selten zu tun haben, siezen wir noch.", "de-DE"], ["Florian", "In meiner alten Firma war das ganz anders. Dort hat man sich nach zehn Jahren noch gesiezt.", "de-DE"], ["Katrin", "Das ist bei uns nicht üblich. Wir sind eine junge Firma, deren Hierarchie sehr flach ist.", "de-DE"], ["Florian", "Für mich ist das am Anfang ein bisschen gewöhnungsbedürftig, aber ich finde es schön.", "de-DE"]],
    gist: ["Worum geht es im Gespräch?", ["Zwei Kollegen beschließen, sich zu duzen.", "Florian möchte die Firma verlassen.", "Katrin erklärt ein neues Projekt."]],
    detail: [["Warum stoßen sie an?", ["Das Projekt war ein Erfolg.", "Katrin hat Geburtstag.", "Florian hat eine neue Stelle."]], ["Wer bietet das Du an?", ["Katrin, die Teamleiterin", "Florian", "Der Abteilungsleiter"]], ["Wen siezen sie im Team noch?", ["Den Abteilungsleiter", "Alle Kunden", "Niemanden"]], ["Wie war es in Florians alter Firma?", ["Man hat sich auch nach Jahren noch gesiezt.", "Alle haben sich geduzt.", "Er hatte keine Kollegen."]]],
    decode: ["Nur den Abteilungsleiter, mit dem wir selten zu tun haben, siezen wir noch.", "eine junge Firma, deren Hierarchie sehr flach ist"],
    tip: "Notice how the speakers' names change in the transcript after the offer: Frau Lindner and Herr Schmitt become Katrin and Florian. With du, Germans also switch to first names.", tip_fr: "Remarque comment les noms changent dans la transcription après la proposition : Mme Lindner et M. Schmitt deviennent Katrin et Florian. Avec le du, on passe aussi aux prénoms."
  }]);

  W.PROMPTS.push({ id: "de-b1-5", level: "B1", q: "Was ist für dich ein guter Freund oder eine gute Freundin? Erzähl von einer Freundschaft, die dir wichtig ist.", en: "What makes a good friend for you? Talk about a friendship that matters to you.", fr: "Pour toi, qu'est-ce qu'un bon ami ou une bonne amie ? Parle d'une amitié qui compte pour toi.", time: 120,
    phrases: ["Ein guter Freund ist jemand, dem…", "Wir kennen uns seit…", "Wir haben uns … kennengelernt.", "Was ich an … schätze, ist…", "Wir streiten uns manchmal, aber…"],
    model: "Für mich ist ein guter Freund jemand, dem ich alles erzählen kann und auf den ich mich verlassen kann. Meine beste Freundin heißt Merle. Wir kennen uns seit dem ersten Schultag, an dem wir uns beide verlaufen hatten. Was ich an ihr besonders schätze, ist ihre Ehrlichkeit. Natürlich streiten wir uns manchmal, aber wir versöhnen uns immer schnell. Obwohl sie jetzt in Hamburg wohnt, telefonieren wir jede Woche." });

  W.WRITING_GUIDE["b1-5"] = { genre: "A personal email of apology (Goethe B1, writing part 1)", genre_fr: "Un e-mail personnel d'excuse (Goethe B1, écrit partie 1)",
    plan: [["Apologise straight away.", "Excuse-toi tout de suite."], ["Say how you felt before (reflexive verb).", "Dis ce que tu ressentais avant (verbe réfléchi)."], ["Explain what happened, with a relative clause.", "Explique ce qui s'est passé, avec une relative."], ["Show that the friendship matters to you.", "Montre que l'amitié compte pour toi."], ["Suggest how to make up for it.", "Propose une façon de te rattraper."]],
    marks: [["es tut mir wirklich leid, dass", "an apology", "des excuses"], ["Ich hatte mich so darauf gefreut", "a reflexive verb + darauf", "un verbe réfléchi + darauf"], ["deren Auto", "whose: a genitive relative pronoun", "dont : un pronom relatif au génitif"], ["das Geschenk, das ich für dich gekauft hatte", "a relative clause", "une relative"], ["Ich hoffe, du bist mir nicht böse", "caring about the friendship", "le souci de l'amitié"], ["Darf ich dich nächste Woche zum Essen einladen?", "a suggestion to make up", "une proposition pour se rattraper"]] };

  W.COURSE.push({ id: "b1-5", level: "B1", icon: "heart-handshake", title: "Relationships", title_fr: "Les relations",
    intro: "In this unit, you'll talk about the people in your life: relative clauses in the dative and genitive and with prepositions (die Freundin, mit der ich wohne; der Nachbar, dessen Hund…), reflexive verbs with mich or mir, when to switch from Sie to du, and how to say how you feel, apologise and make up.",
    intro_fr: "Dans cette unité, tu vas parler des gens qui comptent dans ta vie : les relatives au datif, au génitif et avec préposition (die Freundin, mit der ich wohne ; der Nachbar, dessen Hund…), les verbes réfléchis avec mich ou mir, quand passer du Sie au du, et comment dire ce que tu ressens, t'excuser et te réconcilier.",
    can: ["Use relative pronouns in every case, with prepositions and dessen / deren", "Use reflexive verbs with the accusative or the dative", "Know when to say du or Sie, and how to offer du", "Express feelings, apologise and make up", "Write a personal email of apology (Goethe B1)"],
    can_fr: ["Employer les pronoms relatifs à tous les cas, avec préposition et dessen / deren", "Employer les verbes réfléchis à l'accusatif ou au datif", "Savoir quand dire du ou Sie, et comment proposer le du", "Exprimer des sentiments, s'excuser et se réconcilier", "Écrire un e-mail personnel d'excuse (Goethe B1)"],
    lessons: [55, 56, 57], vocab: ["beziehungDE", "gefuehleDE"], reading: "hochzeit", prompt: "de-b1-5",
    writing: { task: "You missed your friend Clara's party last Saturday. Write her an email (80-100 words): apologise, explain what happened, and suggest how to make up for it.", task_fr: "Tu as manqué la fête de ton amie Clara samedi dernier. Écris-lui un e-mail (80 à 100 mots) : excuse-toi, explique ce qui s'est passé, et propose une façon de te rattraper.", words: "80-100",
      tips: ["Liebe Clara,", "es tut mir wirklich leid, dass…", "Ich hatte mich so darauf gefreut!", "…, deren / dessen …", "Darf ich dich … einladen?", "Liebe Grüße"],
      checklist: ["I apologised at the start", "I explained what happened", "I used a reflexive verb and a relative clause", "I suggested how to make up for it", "I wrote between 80 and 100 words"],
      checklist_fr: ["J'ai présenté mes excuses dès le début", "J'ai expliqué ce qui s'est passé", "J'ai employé un verbe réfléchi et une relative", "J'ai proposé une façon de me rattraper", "J'ai écrit entre 80 et 100 mots"],
      model: "Liebe Clara,\n\nes tut mir wirklich leid, dass ich am Samstag nicht zu deiner Feier gekommen bin. Ich hatte mich so darauf gefreut! Aber am Nachmittag hat mich meine Schwester angerufen, deren Auto auf der Autobahn kaputtgegangen war, und ich musste sie abholen. Ich habe mich sehr geärgert, weil ich dir das Geschenk, das ich für dich gekauft hatte, persönlich geben wollte. Ich hoffe, du bist mir nicht böse. Darf ich dich nächste Woche zum Essen einladen? Dann feiern wir zu zweit nach!\n\nLiebe Grüße\nAlex" } });
})();
