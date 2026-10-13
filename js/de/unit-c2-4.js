/* Cours d'allemand, unité C2-4 « Thinking for yourself / Penser par soi-même » : les subordonnées sujets et
   compléments en tête de phrase (Dass …, ist … ; Ob …, weiß … ; Was …, …) et leurs corrélats (daran, darauf),
   la langue du raisonnement (folglich, mithin, demnach ; condition nécessaire et suffisante ; sophismes :
   Zirkelschluss, Totschlagargument), clarifier les notions dans une discussion. Personnages fictifs, prénoms
   allemands.
   Faits vérifiables seulement : en décembre 1784, la « Berlinische Monatsschrift » publie « Beantwortung der Frage:
   Was ist Aufklärung? » d'Emmanuel Kant (Königsberg, 1724-1804) ; première phrase : « Aufklärung ist der Ausgang des
   Menschen aus seiner selbstverschuldeten Unmündigkeit. » ; « Sapere aude! Habe Mut, dich deines eigenen
   Verstandes zu bedienen! » ; paresse et lâcheté comme causes ; usage public de la raison (en savant, devant le
   public des lecteurs) et usage privé (dans une charge, p. ex. officier, ecclésiastique) ; formule prêtée au
   souverain (Frédéric II) : « Räsonniert, so viel ihr wollt, und worüber ihr wollt; aber gehorcht! » ; Kant n'a
   presque jamais quitté la région de Königsberg (aujourd'hui Kaliningrad, Russie) ; 300e anniversaire en 2024.
   Essai de 1797 « Über ein vermeintes Recht aus Menschenliebe zu lügen » : on ne devrait pas mentir même à un
   meurtrier. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "philosophieDE", icon: "lightbulb", title: "Philosophy", title_fr: "La philosophie", level: "C2", words: [
    ["die Vernunft", "reason", "la raison", "Kant fordert, von der eigenen Vernunft Gebrauch zu machen."],
    ["der Verstand", "the intellect, understanding", "l'entendement, l'intelligence", "Habe Mut, dich deines eigenen Verstandes zu bedienen!"],
    ["die Freiheit, -en", "freedom", "la liberté", "Für Kant braucht Aufklärung vor allem Freiheit."],
    ["die Moral", "morality, morals", "la morale", "Moral beginnt dort, wo niemand zusieht."],
    ["die Pflicht, -en", "the duty", "le devoir", "Für Kant ist die Wahrhaftigkeit eine unbedingte Pflicht."],
    ["mündig", "of age; able to think for oneself", "majeur ; capable de juger par soi-même", "Mündige Bürger bilden sich ihr eigenes Urteil."],
    ["die Unmündigkeit", "immaturity, tutelage", "la minorité, l'état de tutelle", "Kant spricht von selbstverschuldeter Unmündigkeit."],
    ["der Begriff, -e", "the concept, the term", "le concept, la notion", "Zuerst müssen wir den Begriff klären."],
    ["der Grundsatz, ¨-e", "the principle", "le principe", "Sie bleibt ihren Grundsätzen treu."],
    ["die Urteilskraft", "judgement (the faculty)", "la faculté de juger", "Urteilskraft lässt sich nicht aus Büchern lernen."],
    ["die Weltanschauung, -en", "the world view", "la vision du monde", "Jede Weltanschauung beruht auf bestimmten Annahmen."],
    ["das Dasein", "existence", "l'existence", "Die Frage nach dem Sinn des Daseins ist uralt."],
    ["die Aufklärung", "the Enlightenment; clarification", "les Lumières ; l'éclaircissement", "Kant gilt als wichtigster Philosoph der Aufklärung."],
    ["die Wahrheit, -en", "the truth", "la vérité", "Die Wahrheit liegt oft in der Mitte."],
    ["der Zweifel, -", "the doubt", "le doute", "Der Zweifel ist der Anfang des Denkens."],
    ["die Tugend, -en", "the virtue", "la vertu", "Geduld ist eine Tugend."]
  ] },
  { id: "argumentationDE", icon: "brain", title: "Reasoning", title_fr: "Le raisonnement", level: "C2", words: [
    ["die Prämisse, -n", "the premise", "la prémisse", "Wenn die Prämisse falsch ist, ist auch der Schluss fragwürdig."],
    ["der Fehlschluss, ¨-e", "the fallacy, the false conclusion", "le raisonnement fallacieux", "Das ist ein klassischer Fehlschluss."],
    ["der Zirkelschluss, ¨-e", "circular reasoning", "le raisonnement circulaire", "Er setzt voraus, was er beweisen will: ein Zirkelschluss."],
    ["die Voraussetzung, -en", "the precondition, the assumption", "la condition préalable, le présupposé", "Bildung ist eine Voraussetzung für Mündigkeit."],
    ["hinreichend", "sufficient", "suffisant", "Regen ist eine hinreichende Bedingung für nasse Straßen."],
    ["notwendig", "necessary", "nécessaire", "Sauerstoff ist eine notwendige Bedingung für Feuer."],
    ["widersprüchlich", "contradictory", "contradictoire", "Seine Aussagen sind widersprüchlich."],
    ["stichhaltig", "sound, valid", "solide, pertinent", "Sie brachte stichhaltige Argumente vor."],
    ["schlüssig", "conclusive, coherent", "concluant, cohérent", "Die Argumentation ist nicht schlüssig."],
    ["folgerichtig", "logical, consistent", "logique, cohérent", "Diese Entscheidung ist folgerichtig."],
    ["das Totschlagargument, -e", "the conversation-stopper", "l'argument qui coupe court à toute discussion", "„Das war schon immer so“ ist ein Totschlagargument."],
    ["entkräften", "to refute, to invalidate", "réfuter, invalider", "Mit einem Gegenbeispiel entkräftete sie die These."],
    ["begründen", "to justify, to give reasons for", "justifier, motiver", "Bitte begründen Sie Ihre Meinung."],
    ["das Gegenbeispiel, -e", "the counterexample", "le contre-exemple", "Ein einziges Gegenbeispiel genügt, um die Regel zu widerlegen."],
    ["die Logik", "logic", "la logique", "Nach dieser Logik dürfte niemand mehr Auto fahren."],
    ["folgern", "to conclude, to infer", "conclure, déduire", "Daraus kann man nicht folgern, dass alle so denken."]
  ] });

  W.LESSONS.push(
  {
    id: 142, level: "C2", icon: "lightbulb",
    title: "Dass wir frei sind, bezweifelt niemand: subject and object clauses", title_fr: "Dass wir frei sind, bezweifelt niemand : les subordonnées sujets et compléments",
    subtitle: "Start a sentence with a whole clause, and link it with es, das or a da(r)- word.", subtitle_fr: "Commencer une phrase par une proposition entière, et la relier avec es, das ou un mot en da(r)-.",
    body: `
<h2>A clause as the subject</h2>
<p><s-de>Es ist offensichtlich, dass er recht hat.</s-de> → <s-de>Dass er recht hat, ist offensichtlich.</s-de> When the clause comes first, the placeholder <s-de>es</s-de> disappears.</p>
<p>Also with <s-de>ob</s-de> and question words: <s-de>Ob der Wille frei ist, ist umstritten.</s-de> · <s-de>Wie es weitergeht, weiß niemand.</s-de></p>
<h2>A clause as the object</h2>
<p><s-de>Was er meint, verstehe ich nicht.</s-de> · <s-de>Wen sie eingeladen hat, hat sie mir nicht gesagt.</s-de></p>
<h2>Linking with da(r)-</h2>
<p>With prepositional verbs, the clause is picked up by a <s-de>da(r)-</s-de> word: <s-de>Dass wir uns irren können, daran zweifelt niemand.</s-de> · <s-de>Ob wir gewinnen, davon hängt alles ab.</s-de> · <s-de>Worauf es ankommt, ist der Mut zum eigenen Urteil.</s-de></p>
<h2>Free relative clauses</h2>
<p><s-de>Wer A sagt, muss auch B sagen.</s-de> · <s-de>Was lange währt, wird endlich gut.</s-de> (proverbs)</p>
<div class="tip">Putting a clause first gives it weight and links it to what came before: typical of philosophical and academic prose. Don't forget that the clause counts as one element: the main verb follows straight after the comma.</div>
`,
    body_fr: `
<h2>Une proposition comme sujet</h2>
<p><s-de>Es ist offensichtlich, dass er recht hat.</s-de> → <s-de>Dass er recht hat, ist offensichtlich.</s-de> (Qu'il ait raison est évident.) Quand la proposition vient en tête, le <s-de>es</s-de> de remplissage disparaît.</p>
<p>De même avec <s-de>ob</s-de> et les mots interrogatifs : <s-de>Ob der Wille frei ist, ist umstritten.</s-de> (La question de savoir si la volonté est libre est controversée.) · <s-de>Wie es weitergeht, weiß niemand.</s-de></p>
<h2>Une proposition comme complément</h2>
<p><s-de>Was er meint, verstehe ich nicht.</s-de> (Ce qu'il veut dire, je ne le comprends pas.) · <s-de>Wen sie eingeladen hat, hat sie mir nicht gesagt.</s-de></p>
<h2>La reprise par da(r)-</h2>
<p>Avec les verbes à préposition, la proposition est reprise par un mot en <s-de>da(r)-</s-de> : <s-de>Dass wir uns irren können, daran zweifelt niemand.</s-de> · <s-de>Ob wir gewinnen, davon hängt alles ab.</s-de> · <s-de>Worauf es ankommt, ist der Mut zum eigenen Urteil.</s-de></p>
<h2>Les relatives sans antécédent</h2>
<p><s-de>Wer A sagt, muss auch B sagen.</s-de> (Quand le vin est tiré, il faut le boire.) · <s-de>Was lange währt, wird endlich gut.</s-de> (proverbes)</p>
<div class="tip">Placer une proposition en tête lui donne du poids et la relie à ce qui précède : c'est typique de la prose philosophique et scientifique. N'oublie pas que la proposition compte pour un seul élément : le verbe principal suit directement la virgule.</div>
`,
    examples: [
      ["Dass der Mensch irren kann, ist unbestritten.", "That human beings can err is undisputed.", "Que l'être humain puisse se tromper est incontesté."],
      ["Ob der Wille frei ist, ist seit Jahrhunderten umstritten.", "Whether the will is free has been disputed for centuries.", "La question de savoir si la volonté est libre est débattue depuis des siècles."],
      ["Was Kant unter Aufklärung versteht, erklärt er gleich im ersten Satz.", "What Kant means by Enlightenment he explains in the very first sentence.", "Ce que Kant entend par Lumières, il l'explique dès la première phrase."],
      ["Dass wir uns irren können, daran zweifelt niemand.", "That we can be wrong, nobody doubts.", "Que nous puissions nous tromper, personne n'en doute."],
      ["Ob wir gewinnen, davon hängt alles ab.", "Everything depends on whether we win.", "Tout dépend de notre victoire."],
      ["Worauf es ankommt, ist der Mut zum eigenen Urteil.", "What matters is the courage to judge for oneself.", "Ce qui compte, c'est le courage de juger par soi-même."],
      ["Wer A sagt, muss auch B sagen.", "In for a penny, in for a pound.", "Quand le vin est tiré, il faut le boire."]
    ],
    quiz: [
      { q: "Dass er recht hat, ___ offensichtlich.", q_fr: "Dass er recht hat, ___ offensichtlich.", o: ["ist", "es ist", "ist es"], a: 0, ex: "Clause first: no es, verb right after the comma.", ex_fr: "Proposition en tête : pas de es, verbe juste après la virgule." },
      { q: "Ob der Wille frei ___, ist umstritten.", q_fr: "Ob der Wille frei ___, ist umstritten.", o: ["ist", "sei es", "ist es"], a: 0, ex: "Verb at the end of the ob-clause.", ex_fr: "Verbe à la fin de la proposition en ob." },
      { q: "Dass wir uns irren können, ___ zweifelt niemand.", q_fr: "Dass wir uns irren können, ___ zweifelt niemand.", o: ["daran", "darauf", "davon"], a: 0, ex: "zweifeln an → daran.", ex_fr: "zweifeln an → daran." },
      { q: "___ A sagt, muss auch B sagen.", q_fr: "___ A sagt, muss auch B sagen.", o: ["Wer", "Der", "Was"], a: 0, ex: "Free relative clause with wer.", ex_fr: "Relative sans antécédent avec wer." },
      { q: "Ob wir gewinnen, ___ hängt alles ab.", q_fr: "Ob wir gewinnen, ___ hängt alles ab.", o: ["davon", "daran", "dafür"], a: 0, ex: "abhängen von → davon.", ex_fr: "abhängen von → davon." }
    ]
  },
  {
    id: 143, level: "C2", icon: "workflow",
    title: "Folglich, mithin, demnach: the language of reasoning", title_fr: "Folglich, mithin, demnach : la langue du raisonnement",
    subtitle: "Premises and conclusions, necessary and sufficient conditions, and how to name a fallacy.", subtitle_fr: "Prémisses et conclusions, conditions nécessaires et suffisantes, et comment nommer un sophisme.",
    body: `
<h2>From premises to a conclusion</h2>
<p><s-de>Alle Menschen sind sterblich. Sokrates ist ein Mensch. Folglich ist Sokrates sterblich.</s-de></p>
<p>Connectors, from neutral to formal: <s-de>also, daher, folglich, somit, demnach, mithin</s-de> · <s-de>Daraus folgt, dass…</s-de> · <s-de>Daraus lässt sich schließen, dass…</s-de></p>
<h2>Conditions</h2>
<table>
<tr><td>necessary</td><td><s-de>Sauerstoff ist eine notwendige Bedingung für Feuer.</s-de> (no fire without it)</td></tr>
<tr><td>sufficient</td><td><s-de>Regen ist eine hinreichende Bedingung für nasse Straßen.</s-de> (enough on its own)</td></tr>
</table>
<p><s-de>Voraussetzung dafür ist, dass…</s-de> · <s-de>nur dann, wenn…</s-de> · <s-de>immer dann, wenn…</s-de></p>
<h2>Naming a fallacy</h2>
<p><s-de>Das ist ein Zirkelschluss: Er setzt voraus, was erst zu beweisen wäre.</s-de> · <s-de>„Das war schon immer so“ ist ein Totschlagargument.</s-de> · <s-de>Daraus folgt keineswegs, dass…</s-de> · <s-de>Das ist ein Angriff auf die Person, nicht auf das Argument.</s-de></p>
<div class="tip">In a debate, naming the structure of an argument is often more effective than contradicting its content: <s-de>Ihr Schluss wäre richtig, wenn die Prämisse stimmte. Aber stimmt sie?</s-de></div>
`,
    body_fr: `
<h2>Des prémisses à la conclusion</h2>
<p><s-de>Alle Menschen sind sterblich. Sokrates ist ein Mensch. Folglich ist Sokrates sterblich.</s-de> (Tous les hommes sont mortels. Socrate est un homme. Donc Socrate est mortel.)</p>
<p>Connecteurs, du neutre au soutenu : <s-de>also, daher, folglich, somit, demnach, mithin</s-de> (donc, par conséquent, partant) · <s-de>Daraus folgt, dass…</s-de> · <s-de>Daraus lässt sich schließen, dass…</s-de></p>
<h2>Les conditions</h2>
<table>
<tr><td>nécessaire</td><td><s-de>Sauerstoff ist eine notwendige Bedingung für Feuer.</s-de> (pas de feu sans elle)</td></tr>
<tr><td>suffisante</td><td><s-de>Regen ist eine hinreichende Bedingung für nasse Straßen.</s-de> (elle suffit à elle seule)</td></tr>
</table>
<p><s-de>Voraussetzung dafür ist, dass…</s-de> · <s-de>nur dann, wenn…</s-de> (seulement si) · <s-de>immer dann, wenn…</s-de> (chaque fois que)</p>
<h2>Nommer un sophisme</h2>
<p><s-de>Das ist ein Zirkelschluss: Er setzt voraus, was erst zu beweisen wäre.</s-de> (C'est une pétition de principe.) · <s-de>„Das war schon immer so“ ist ein Totschlagargument.</s-de> · <s-de>Daraus folgt keineswegs, dass…</s-de> · <s-de>Das ist ein Angriff auf die Person, nicht auf das Argument.</s-de></p>
<div class="tip">Dans un débat, nommer la structure d'un argument est souvent plus efficace que d'en contester le contenu : <s-de>Ihr Schluss wäre richtig, wenn die Prämisse stimmte. Aber stimmt sie?</s-de></div>
`,
    examples: [
      ["Alle Menschen sind sterblich. Sokrates ist ein Mensch. Folglich ist Sokrates sterblich.", "All men are mortal. Socrates is a man. Therefore Socrates is mortal.", "Tous les hommes sont mortels. Socrate est un homme. Donc Socrate est mortel."],
      ["Die Prämisse ist falsch; mithin ist auch der Schluss nicht haltbar.", "The premise is false; hence the conclusion doesn't hold either.", "La prémisse est fausse ; partant, la conclusion n'est pas tenable non plus."],
      ["Sauerstoff ist eine notwendige, aber keine hinreichende Bedingung für Feuer.", "Oxygen is a necessary but not a sufficient condition for fire.", "L'oxygène est une condition nécessaire mais non suffisante du feu."],
      ["Voraussetzung dafür ist, dass alle die Regeln kennen.", "The precondition is that everyone knows the rules.", "Il faut pour cela que tout le monde connaisse les règles."],
      ["Das ist ein Zirkelschluss: Er setzt voraus, was erst zu beweisen wäre.", "That's circular reasoning: it assumes what has yet to be proved.", "C'est un raisonnement circulaire : il présuppose ce qu'il faudrait démontrer."],
      ["Daraus folgt keineswegs, dass alle so denken.", "It by no means follows that everyone thinks so.", "Il ne s'ensuit nullement que tout le monde pense ainsi."],
      ["„Das war schon immer so“ ist ein Totschlagargument.", "“It's always been like that” is a conversation-stopper.", "« Ça a toujours été comme ça » est un argument qui coupe court à la discussion."]
    ],
    quiz: [
      { q: "The most formal word for “therefore”:", q_fr: "Le mot le plus soutenu pour « donc » :", o: ["mithin", "also", "halt"], a: 0, ex: "mithin is very formal.", ex_fr: "mithin est très soutenu." },
      { q: "“Without it, it's impossible” describes…", q_fr: "« Sans elle, c'est impossible » décrit…", o: ["a necessary condition", "a sufficient condition", "a fallacy"], o_fr: ["une condition nécessaire", "une condition suffisante", "un sophisme"], a: 0, ex: "notwendig = necessary.", ex_fr: "notwendig = nécessaire." },
      { q: "An argument that assumes what it should prove is…", q_fr: "Un argument qui présuppose ce qu'il doit prouver est…", o: ["ein Zirkelschluss", "ein Gegenbeispiel", "eine Prämisse"], a: 0, ex: "Zirkelschluss = circular reasoning.", ex_fr: "Zirkelschluss = raisonnement circulaire." },
      { q: "Daraus ___ keineswegs, dass alle so denken.", q_fr: "Daraus ___ keineswegs, dass alle so denken.", o: ["folgt", "folgert", "führt"], a: 0, ex: "Daraus folgt, dass…", ex_fr: "Daraus folgt, dass…" },
      { q: "“Das war schon immer so” is…", q_fr: "« Das war schon immer so » est…", o: ["ein Totschlagargument", "ein stichhaltiges Argument", "eine hinreichende Bedingung"], a: 0, ex: "It ends the discussion instead of answering.", ex_fr: "Il clôt la discussion au lieu de répondre." }
    ]
  },
  {
    id: 144, level: "C2", kind: "functional", icon: "messages-square",
    title: "Everyday German: clarifying concepts in a discussion", title_fr: "L'allemand de tous les jours : clarifier les notions dans une discussion",
    subtitle: "Ask for definitions, check your understanding, use thought experiments and spot weak arguments.", subtitle_fr: "Demander des définitions, vérifier sa compréhension, utiliser des expériences de pensée et repérer les arguments faibles.",
    body: `
<h2>Asking for a definition</h2>
<p><s-de>Was genau verstehen Sie unter …?</s-de> · <s-de>Wie definieren Sie …?</s-de> · <s-de>Meinen Sie … im engeren oder im weiteren Sinn?</s-de></p>
<h2>Checking your understanding</h2>
<p><s-de>Wenn ich Sie richtig verstehe, meinen Sie, dass…</s-de> · <s-de>Sie wollen also sagen, dass…?</s-de></p>
<h2>Distinguishing and testing</h2>
<p><s-de>Hier muss man zwischen … und … unterscheiden.</s-de> · <s-de>Nehmen wir einmal an, …</s-de> · <s-de>Stellen wir uns vor, …</s-de> · <s-de>Das setzt voraus, dass…</s-de></p>
<h2>Conceding and objecting</h2>
<p><s-de>In diesem Punkt gebe ich Ihnen recht, aber…</s-de> · <s-de>Daraus folgt aber nicht, dass…</s-de> · <s-de>Das ist ein Zirkelschluss.</s-de></p>
<div class="tip">Many disagreements are really disagreements about words. Before you argue about whether something is “fair” or “free”, agree on what the word means. It saves time, and it often shows that you're closer than you thought.</div>
`,
    body_fr: `
<h2>Demander une définition</h2>
<p><s-de>Was genau verstehen Sie unter …?</s-de> (Qu'entendez-vous exactement par… ?) · <s-de>Wie definieren Sie …?</s-de> · <s-de>Meinen Sie … im engeren oder im weiteren Sinn?</s-de> (au sens strict ou au sens large ?)</p>
<h2>Vérifier sa compréhension</h2>
<p><s-de>Wenn ich Sie richtig verstehe, meinen Sie, dass…</s-de> · <s-de>Sie wollen also sagen, dass…?</s-de></p>
<h2>Distinguer et tester</h2>
<p><s-de>Hier muss man zwischen … und … unterscheiden.</s-de> · <s-de>Nehmen wir einmal an, …</s-de> (Admettons que…) · <s-de>Stellen wir uns vor, …</s-de> · <s-de>Das setzt voraus, dass…</s-de> (Cela présuppose que…)</p>
<h2>Concéder et objecter</h2>
<p><s-de>In diesem Punkt gebe ich Ihnen recht, aber…</s-de> · <s-de>Daraus folgt aber nicht, dass…</s-de> · <s-de>Das ist ein Zirkelschluss.</s-de></p>
<div class="tip">Beaucoup de désaccords sont en réalité des désaccords sur les mots. Avant de débattre pour savoir si une chose est « juste » ou « libre », mettez-vous d'accord sur le sens du mot. On gagne du temps, et on découvre souvent qu'on est plus proches qu'on ne le pensait.</div>
`,
    examples: [
      ["Was genau verstehen Sie unter Freiheit?", "What exactly do you mean by freedom?", "Qu'entendez-vous exactement par liberté ?"],
      ["Wenn ich Sie richtig verstehe, meinen Sie, dass Lügen immer falsch ist.", "If I understand you correctly, you mean that lying is always wrong.", "Si je vous comprends bien, vous voulez dire que mentir est toujours mal."],
      ["Hier muss man zwischen Handeln und Unterlassen unterscheiden.", "Here we have to distinguish between acting and refraining from acting.", "Ici, il faut distinguer entre agir et s'abstenir."],
      ["Nehmen wir einmal an, niemand würde je davon erfahren.", "Let's assume nobody would ever find out.", "Admettons que personne ne l'apprenne jamais."],
      ["Das setzt voraus, dass alle die gleichen Chancen haben.", "That presupposes that everyone has the same chances.", "Cela présuppose que tout le monde a les mêmes chances."],
      ["In diesem Punkt gebe ich Ihnen recht, aber daraus folgt nicht, dass Sie insgesamt recht haben.", "I agree with you on this point, but it doesn't follow that you're right overall.", "Sur ce point, je vous donne raison, mais il ne s'ensuit pas que vous ayez raison sur le tout."],
      ["Meinen Sie Freiheit im engeren oder im weiteren Sinn?", "Do you mean freedom in the narrow or the broad sense?", "Parlez-vous de liberté au sens strict ou au sens large ?"]
    ],
    quiz: [
      { q: "“What exactly do you mean by…?”", q_fr: "« Qu'entendez-vous exactement par… ? »", o: ["Was genau verstehen Sie unter …?", "Was genau meinen Sie von …?", "Wie genau verstehen Sie über …?"], a: 0, ex: "verstehen unter + dative.", ex_fr: "verstehen unter + datif." },
      { q: "Wenn ich Sie richtig verstehe, ___ Sie, dass…", q_fr: "Wenn ich Sie richtig verstehe, ___ Sie, dass…", o: ["meinen", "Sie meinen", "meinten Sie es"], a: 0, ex: "After the wenn-clause: verb first.", ex_fr: "Après la proposition en wenn : le verbe en premier." },
      { q: "“Let's assume…”", q_fr: "« Admettons que… »", o: ["Nehmen wir einmal an, …", "Nehmen wir einmal ein, …", "Wir nehmen einmal auf, …"], a: 0, ex: "annehmen = to assume.", ex_fr: "annehmen = supposer." },
      { q: "In diesem Punkt gebe ich ___ recht.", q_fr: "In diesem Punkt gebe ich ___ recht.", o: ["Ihnen", "Sie", "Ihr"], a: 0, ex: "jemandem (dative) recht geben.", ex_fr: "jemandem (datif) recht geben." },
      { q: "Why clarify concepts first?", q_fr: "Pourquoi clarifier d'abord les notions ?", o: ["Many disagreements are really about words.", "To make the discussion longer.", "To avoid giving one's opinion."], o_fr: ["Beaucoup de désaccords portent en fait sur les mots.", "Pour allonger la discussion.", "Pour éviter de donner son avis."], a: 0, ex: "Agree on meanings, then argue.", ex_fr: "S'accorder sur le sens, puis débattre." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    142: {
      gap: [["Dass er recht hat, ___ offensichtlich.", "ist"], ["___ der Wille frei ist, ist umstritten.", "Ob"], ["Dass wir uns irren können, ___ zweifelt niemand.", "daran"], ["___ A sagt, muss auch B sagen.", "Wer"]],
      fix: [["Dass er recht hat, es ist offensichtlich.", "Dass er recht hat, ist offensichtlich.", "Clause first: no es.", "Proposition en tête : pas de es."], ["Ob wir gewinnen, darauf hängt alles ab.", "Ob wir gewinnen, davon hängt alles ab.", "abhängen von → davon.", "abhängen von → davon."]],
      task: ["Rewrite these sentences so that they begin with the clause: Es ist unklar, ob die Theorie stimmt. Es ist bekannt, dass Kant Königsberg kaum verließ. Ich verstehe nicht, was er meint. Niemand zweifelt daran, dass Bildung wichtig ist.", "Réécris ces phrases pour qu'elles commencent par la subordonnée : Es ist unklar, ob die Theorie stimmt. Es ist bekannt, dass Kant Königsberg kaum verließ. Ich verstehe nicht, was er meint. Niemand zweifelt daran, dass Bildung wichtig ist.", "Ob die Theorie stimmt, ist unklar. Dass Kant Königsberg kaum verließ, ist bekannt. Was er meint, verstehe ich nicht. Dass Bildung wichtig ist, daran zweifelt niemand."]
    },
    143: {
      gap: [["Sokrates ist ein Mensch. ___ ist Sokrates sterblich.", "Folglich|Also|Somit|Mithin|Demnach"], ["Sauerstoff ist eine ___ Bedingung für Feuer. (nötig)", "notwendige"], ["Das ist ein ___: Er setzt voraus, was er beweisen will.", "Zirkelschluss"], ["Daraus ___ keineswegs, dass alle so denken.", "folgt"]],
      fix: [["Regen ist eine notwendige Bedingung für nasse Straßen.", "Regen ist eine hinreichende Bedingung für nasse Straßen.", "Streets can be wet without rain: rain is sufficient, not necessary.", "Les rues peuvent être mouillées sans pluie : la pluie est suffisante, pas nécessaire."], ["Folglich Sokrates ist sterblich.", "Folglich ist Sokrates sterblich.", "folglich in first position: verb next.", "folglich en tête : verbe juste après."]],
      task: ["Analyse this argument and say what is wrong with it: Alle Vögel können fliegen. Pinguine sind Vögel. Folglich können Pinguine fliegen.", "Analyse cet argument et dis ce qui ne va pas : Alle Vögel können fliegen. Pinguine sind Vögel. Folglich können Pinguine fliegen.", "Der Schluss ist formal korrekt, aber die erste Prämisse ist falsch: Nicht alle Vögel können fliegen. Pinguine sind ein Gegenbeispiel. Mithin ist auch der Schluss nicht haltbar."]
    },
    144: {
      gap: [["Was genau verstehen Sie ___ Gerechtigkeit?", "unter"], ["Wenn ich Sie richtig verstehe, ___ Sie, dass Lügen immer falsch ist.", "meinen"], ["Hier muss man zwischen Handeln und Unterlassen ___.", "unterscheiden"], ["___ wir einmal an, niemand würde davon erfahren.", "Nehmen"]],
      fix: [["Was genau verstehen Sie von Freiheit?", "Was genau verstehen Sie unter Freiheit?", "verstehen unter (to mean by).", "verstehen unter (entendre par)."], ["In diesem Punkt gebe ich Sie recht.", "In diesem Punkt gebe ich Ihnen recht.", "jemandem recht geben: dative.", "jemandem recht geben : datif."]],
      task: ["A friend says: „Freiheit heißt, tun zu können, was man will.“ Write four sentences in which you clarify the concept, test it with a thought experiment and concede a point.", "Une amie dit : „Freiheit heißt, tun zu können, was man will.“ Écris quatre phrases dans lesquelles tu clarifies la notion, la testes par une expérience de pensée et concèdes un point.", "Was genau verstehst du unter „wollen“? Nehmen wir einmal an, jemand will einem anderen schaden: Wäre das dann auch Freiheit? In einem Punkt gebe ich dir recht: Ohne Wahlmöglichkeiten gibt es keine Freiheit. Daraus folgt aber nicht, dass Freiheit keine Grenzen kennt."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "freierwille", lesson: 142, level: "C2", icon: "brain", partner: "Fabian", role: "a friend who studies philosophy", role_fr: "un ami qui étudie la philosophie",
    title: "Is the will free?", title_fr: "La volonté est-elle libre ?",
    setting: "Late in the evening, your friend Fabian, a philosophy student, starts a discussion about free will.", setting_fr: "Tard le soir, ton ami Fabian, étudiant en philosophie, lance une discussion sur le libre arbitre.",
    turns: [
      { p: "Ich glaube, unser Wille ist gar nicht frei. Alles ist durch das Gehirn bestimmt.", en: "I don't think our will is free at all. Everything is determined by the brain.", fr: "Je crois que notre volonté n'est pas du tout libre. Tout est déterminé par le cerveau." },
      { y: ["Ob der Wille frei ist, ist seit Jahrhunderten umstritten.", "Ob der Wille frei ist, es ist seit Jahrhunderten umstritten.", "Ob der Wille ist frei, ist seit Jahrhunderten umstritten."], en: "Whether the will is free has been disputed for centuries.", fr: "La question de savoir si la volonté est libre est débattue depuis des siècles.", why: "Clause first: no es; verb at the end of the ob-clause.", why_fr: "Proposition en tête : pas de es ; verbe à la fin de la proposition en ob." },
      { p: "Aber die Hirnforschung zeigt doch, dass Entscheidungen schon vorher feststehen!", en: "But brain research shows that decisions are fixed in advance!", fr: "Mais la recherche sur le cerveau montre bien que les décisions sont prises d'avance !" },
      { y: ["Was sie genau zeigt, ist unter Fachleuten umstritten.", "Was zeigt sie genau, ist unter Fachleuten umstritten.", "Was sie genau zeigt, das ist unter Fachleuten umstritten ist."], en: "What exactly it shows is disputed among experts.", fr: "Ce qu'elle montre exactement est controversé parmi les spécialistes.", why: "Free relative clause: verb at the end; one main verb.", why_fr: "Relative sans antécédent : verbe à la fin ; un seul verbe principal." },
      { p: "Und wenn der Wille nicht frei ist, kann man niemanden für etwas verantwortlich machen.", en: "And if the will isn't free, you can't hold anyone responsible for anything.", fr: "Et si la volonté n'est pas libre, on ne peut tenir personne pour responsable de rien." },
      { y: ["Dass wir Menschen verantwortlich machen, setzt Freiheit voraus, da hast du recht.", "Dass wir Menschen verantwortlich machen, voraussetzt Freiheit, da hast du recht.", "Dass machen wir Menschen verantwortlich, setzt Freiheit voraus, da hast du recht."], en: "That we hold people responsible presupposes freedom, you're right there.", fr: "Que l'on tienne les gens pour responsables présuppose la liberté, là tu as raison.", why: "dass-clause as subject; voraussetzen is separable.", why_fr: "Proposition en dass comme sujet ; voraussetzen est séparable." },
      { p: "Also gibt es gar keine Schuld?", en: "So there's no guilt at all?", fr: "Donc la culpabilité n'existe pas ?" },
      { y: ["Daraus folgt nicht, dass es keine Schuld gibt; es kommt darauf an, wie man Freiheit definiert.", "Daraus folgt nicht, dass es gibt keine Schuld; es kommt darauf an, wie man Freiheit definiert.", "Daraus folgt nicht, dass es keine Schuld gibt; es kommt davon an, wie man Freiheit definiert."], en: "It doesn't follow that there's no guilt; it depends on how you define freedom.", fr: "Il ne s'ensuit pas que la culpabilité n'existe pas ; tout dépend de la façon dont on définit la liberté.", why: "dass: verb at the end; ankommen auf → darauf.", why_fr: "dass : verbe à la fin ; ankommen auf → darauf." },
      { p: "Na gut. Wer recht hat, werden wir heute Nacht wohl nicht klären.", en: "All right. We probably won't settle who's right tonight.", fr: "Bon. Qui a raison, on ne le saura sans doute pas cette nuit." },
      { y: ["Wer recht hat, ist offen; aber darüber nachzudenken, lohnt sich.", "Wer hat recht, ist offen; aber darüber nachzudenken, lohnt sich.", "Wer recht hat, ist offen; aber darüber nachdenken zu, lohnt sich."], en: "Who's right is an open question; but thinking about it is worth it.", fr: "Qui a raison reste ouvert ; mais y réfléchir en vaut la peine.", why: "Free relative clause as subject; verb at the end.", why_fr: "Relative sans antécédent comme sujet ; verbe à la fin." }
    ] },
  { id: "gedankenexperiment", lesson: 144, level: "C2", icon: "messages-square", partner: "Frau Dr. Weiss", role: "the host of a philosophy café", role_fr: "l'animatrice d'un café philo",
    title: "A thought experiment", title_fr: "Une expérience de pensée",
    setting: "At a philosophy café, the host, Frau Dr. Weiss, presents a famous thought experiment and asks for your view.", setting_fr: "Dans un café philo, l'animatrice, Frau Dr. Weiss, présente une célèbre expérience de pensée et te demande ton avis.",
    turns: [
      { p: "Nehmen wir einmal an, eine Straßenbahn rast auf fünf Menschen zu. Sie können eine Weiche umstellen, dann stirbt nur ein Mensch. Was ist richtig?", en: "Let's assume a tram is racing towards five people. You can switch the points; then only one person dies. What is right?", fr: "Admettons qu'un tramway fonce sur cinq personnes. Vous pouvez actionner un aiguillage ; alors une seule personne meurt. Qu'est-ce qui est juste ?" },
      { y: ["Bevor ich antworte: Was genau verstehen Sie unter „richtig“, die beste Folge oder die richtige Regel?", "Bevor antworte ich: Was genau verstehen Sie unter „richtig“, die beste Folge oder die richtige Regel?", "Bevor ich antworte: Was genau verstehen Sie unter „richtig“, die beste Folge oder der richtigen Regel?"], en: "Before I answer: what exactly do you mean by “right”, the best outcome or the right rule?", fr: "Avant de répondre : qu'entendez-vous exactement par « juste » : la meilleure conséquence ou la bonne règle ?", why: "bevor: verb at the end; clarify the concept first.", why_fr: "bevor : verbe à la fin ; clarifier d'abord la notion." },
      { p: "Gute Frage. Sagen wir: das moralisch Richtige.", en: "Good question. Let's say: what's morally right.", fr: "Bonne question. Disons : ce qui est moralement juste." },
      { y: ["Wenn ich Sie richtig verstehe, wollen Sie wissen, ob man Leben gegeneinander aufrechnen darf.", "Wenn ich Sie richtig verstehe, Sie wollen wissen, ob man Leben gegeneinander aufrechnen darf.", "Wenn ich Sie richtig verstehe, wollen Sie wissen, ob man darf Leben gegeneinander aufrechnen."], en: "If I understand you correctly, you want to know whether lives may be weighed against each other.", fr: "Si je vous comprends bien, vous voulez savoir si l'on peut mettre des vies en balance.", why: "After the wenn-clause: verb first; ob: verb at the end.", why_fr: "Après la proposition en wenn : verbe en premier ; ob : verbe à la fin." },
      { p: "Genau. Viele würden die Weiche umstellen. Sie auch?", en: "Exactly. Many people would switch the points. Would you?", fr: "Exactement. Beaucoup actionneraient l'aiguillage. Et vous ?" },
      { y: ["Hier muss man zwischen Handeln und Unterlassen unterscheiden.", "Hier muss man zwischen Handeln und Unterlassen zu unterscheiden.", "Hier muss man zwischen Handeln und Unterlassen unterscheidet."], en: "Here we have to distinguish between acting and refraining from acting.", fr: "Ici, il faut distinguer entre agir et s'abstenir.", why: "Modal verb + infinitive without zu.", why_fr: "Verbe de modalité + infinitif sans zu." },
      { p: "Aber auch Nichtstun ist doch eine Entscheidung!", en: "But doing nothing is also a decision!", fr: "Mais ne rien faire, c'est aussi une décision !" },
      { y: ["In diesem Punkt gebe ich Ihnen recht, aber daraus folgt nicht, dass beides moralisch gleichwertig ist.", "In diesem Punkt gebe ich Sie recht, aber daraus folgt nicht, dass beides moralisch gleichwertig ist.", "In diesem Punkt gebe ich Ihnen recht, aber daraus folgt nicht, dass beides ist moralisch gleichwertig."], en: "I agree with you on this point, but it doesn't follow that both are morally equivalent.", fr: "Sur ce point je vous donne raison, mais il ne s'ensuit pas que les deux se valent moralement.", why: "jemandem recht geben; dass: verb at the end.", why_fr: "jemandem recht geben ; dass : verbe à la fin." },
      { p: "Und Ihre Antwort?", en: "And your answer?", fr: "Et votre réponse ?" },
      { y: ["Gesetzt den Fall, ich müsste mich entscheiden, würde ich die Weiche wohl umstellen, aber mit schlechtem Gewissen.", "Gesetzt den Fall, ich müsste mich entscheiden, würde ich die Weiche wohl umstellen, aber mit schlechten Gewissen.", "Gesetzt den Fall, ich müsste mich entscheiden, würde ich die Weiche wohl umstellen, aber mit schlechtem Gewissen haben."], en: "Supposing I had to decide, I'd probably switch the points, but with a bad conscience.", fr: "À supposer que je doive décider, j'actionnerais sans doute l'aiguillage, mais avec mauvaise conscience.", why: "mit + dative: mit schlechtem Gewissen.", why_fr: "mit + datif : mit schlechtem Gewissen." }
    ] }
  );

  W.READINGS.push({
    id: "kant", level: "C2", icon: "lightbulb", title: "„Habe Mut, dich deines eigenen Verstandes zu bedienen!“", genre: "Feature article",
    intro: "A short essay from 1784, a famous first sentence and a motto that still challenges us: Kant's answer to the question “What is Enlightenment?”.",
    intro_fr: "Un court essai de 1784, une première phrase célèbre et une devise qui nous interpelle encore : la réponse de Kant à la question « Qu'est-ce que les Lumières ? ».",
    paragraphs: [
      { de: "Im Dezember 1784 erschien in der „Berlinischen Monatsschrift“ ein kurzer Aufsatz des Königsberger Philosophen Immanuel Kant. Er trug den Titel „Beantwortung der Frage: Was ist Aufklärung?“. Schon sein erster Satz ist berühmt geworden: „Aufklärung ist der Ausgang des Menschen aus seiner selbstverschuldeten Unmündigkeit.“", en: "In December 1784, the “Berlinische Monatsschrift” published a short essay by the Königsberg philosopher Immanuel Kant. It was entitled “An Answer to the Question: What is Enlightenment?”. Its very first sentence has become famous: “Enlightenment is man's emergence from his self-incurred immaturity.”", fr: "En décembre 1784 parut dans la « Berlinische Monatsschrift » un court essai du philosophe de Königsberg Emmanuel Kant, intitulé « Réponse à la question : Qu'est-ce que les Lumières ? ». Sa première phrase est devenue célèbre : « Les Lumières sont la sortie de l'homme hors de l'état de minorité dont il est lui-même responsable. »" },
      { de: "Unmündig ist nach Kant, wer sich seines Verstandes nicht ohne die Leitung eines anderen bedienen kann. Selbstverschuldet sei dieser Zustand, wenn es nicht am Verstand fehle, sondern an Entschlossenheit und Mut. Daher sein Wahlspruch: „Sapere aude! Habe Mut, dich deines eigenen Verstandes zu bedienen!“ Als Ursachen nennt Kant Faulheit und Feigheit, denn es sei bequem, unmündig zu sein.", en: "According to Kant, immature is whoever cannot use their understanding without guidance from another. This state is self-incurred if what is lacking is not understanding but resolve and courage. Hence his motto: “Sapere aude! Have the courage to use your own understanding!” Kant names laziness and cowardice as the causes, for it is comfortable to be immature.", fr: "Est mineur, selon Kant, celui qui ne peut se servir de son entendement sans être dirigé par un autre. Cet état est imputable à soi-même lorsque ce n'est pas l'entendement qui manque, mais la résolution et le courage. D'où sa devise : « Sapere aude ! Aie le courage de te servir de ton propre entendement ! » Kant nomme pour causes la paresse et la lâcheté, car il est commode d'être mineur." },
      { de: "Aufklärung braucht nach Kant vor allem Freiheit, nämlich die Freiheit, von seiner Vernunft öffentlichen Gebrauch zu machen: als Gelehrter vor dem Publikum der Leser. In einem Amt dagegen, etwa als Offizier oder Geistlicher, müsse man gehorchen. Die Haltung seines Königs, Friedrichs II. von Preußen, fasste Kant in die Formel: „Räsonniert, so viel ihr wollt, und worüber ihr wollt; aber gehorcht!“", en: "According to Kant, Enlightenment needs above all freedom, namely the freedom to make public use of one's reason: as a scholar before the reading public. In an office, by contrast, as an officer or a clergyman for example, one must obey. Kant summed up the attitude of his king, Frederick II of Prussia, in the formula: “Argue as much as you like and about whatever you like; but obey!”", fr: "Les Lumières exigent avant tout, selon Kant, la liberté, à savoir celle de faire un usage public de sa raison : en tant que savant, devant le public des lecteurs. Dans une charge, en revanche, par exemple comme officier ou ecclésiastique, il faudrait obéir. Kant résuma l'attitude de son roi, Frédéric II de Prusse, par la formule : « Raisonnez tant que vous voudrez et sur tout ce que vous voudrez, mais obéissez ! »" },
      { de: "Kant, 1724 in Königsberg geboren, verließ die Gegend um seine Heimatstadt zeit seines Lebens kaum. Dennoch wurde er zu einem der einflussreichsten Denker der Neuzeit. Königsberg heißt heute Kaliningrad und gehört zu Russland. 2024 wurde vielerorts an Kants 300. Geburtstag erinnert; seine Aufforderung zum Selbstdenken hat nichts von ihrer Aktualität verloren.", en: "Kant, born in Königsberg in 1724, hardly ever left the area around his home town. Nevertheless he became one of the most influential thinkers of the modern era. Königsberg is now called Kaliningrad and belongs to Russia. In 2024, the 300th anniversary of Kant's birth was marked in many places; his call to think for oneself has lost none of its relevance.", fr: "Né en 1724 à Königsberg, Kant ne quitta presque jamais les environs de sa ville natale. Il devint pourtant l'un des penseurs les plus influents de l'époque moderne. Königsberg s'appelle aujourd'hui Kaliningrad et appartient à la Russie. En 2024, on a commémoré en de nombreux endroits le 300e anniversaire de la naissance de Kant ; son appel à penser par soi-même n'a rien perdu de son actualité." }
    ],
    glossary: { "Berlinischen": ["Berlin (adj.)", "berlinois"], "Monatsschrift": ["monthly journal", "revue mensuelle"], "Aufsatz": ["essay", "essai"], "Königsberger": ["of Königsberg", "de Königsberg"], "Beantwortung": ["answer", "réponse"], "Ausgang": ["way out, emergence", "sortie"], "selbstverschuldeten": ["self-incurred", "dont on est soi-même responsable"], "Unmündigkeit": ["immaturity, tutelage", "minorité, état de tutelle"], "Leitung": ["guidance", "direction"], "Zustand": ["state, condition", "état"], "Entschlossenheit": ["resolve", "résolution"], "Wahlspruch": ["motto", "devise"], "Faulheit": ["laziness", "paresse"], "Feigheit": ["cowardice", "lâcheté"], "bequem": ["comfortable, convenient", "commode"], "Gelehrter": ["scholar", "savant"], "Amt": ["office, post", "charge, fonction"], "Geistlicher": ["clergyman", "ecclésiastique"], "gehorchen": ["obey", "obéir"], "Haltung": ["attitude", "attitude"], "Preußen": ["Prussia", "Prusse"], "Räsonniert": ["argue, reason (old-fashioned)", "raisonnez (vieilli)"], "gehorcht": ["obey", "obéissez"], "einflussreichsten": ["most influential", "les plus influents"], "Neuzeit": ["modern era", "époque moderne"], "Selbstdenken": ["thinking for oneself", "penser par soi-même"], "Aktualität": ["relevance", "actualité"] },
    questions: [
      { q: "Wo erschien Kants Aufsatz?", o: ["In der „Berlinischen Monatsschrift“", "In einer Königsberger Tageszeitung", "In einem Schulbuch"], a: 0 },
      { q: "Wann ist Unmündigkeit nach Kant „selbstverschuldet“?", o: ["Wenn es nicht am Verstand, sondern an Mut und Entschlossenheit fehlt", "Wenn man noch ein Kind ist", "Wenn man kein Geld hat"], a: 0 },
      { q: "Welche Ursachen nennt Kant?", o: ["Faulheit und Feigheit", "Armut und Krankheit", "Krieg und Hunger"], a: 0 },
      { q: "Was versteht Kant unter dem öffentlichen Gebrauch der Vernunft?", o: ["Das freie Urteil als Gelehrter vor dem Publikum der Leser", "Das Gehorchen im Amt", "Das Schweigen in der Öffentlichkeit"], a: 0 },
      { q: "Wie heißt Königsberg heute?", o: ["Kaliningrad", "Danzig", "Riga"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-c2-4", unit: "c2-4", level: "C2", icon: "radio",
    title: "Das philosophische Café", title_fr: "Le café philo",
    context: "A recording from a philosophy café. The question tonight: may you lie to protect someone?", context_fr: "Un enregistrement dans un café philo. La question du soir : a-t-on le droit de mentir pour protéger quelqu'un ?",
    words: [["belügen", "to lie to", "mentir à"], ["der Mörder, -", "the murderer", "le meurtrier"], ["die Wahrhaftigkeit", "truthfulness", "la véracité"], ["unbedingt", "unconditional", "inconditionnel"], ["verweigern", "to refuse", "refuser"]],
    lines: [["Moderatorin", "Willkommen im philosophischen Café. Unsere Frage heute: Darf man lügen, um jemanden zu schützen?", "de-DE"], ["Herr Brückner", "Kant hätte geantwortet: nein, niemals. In einem Aufsatz von 1797 vertritt er die These, dass man nicht einmal einen Mörder belügen dürfe.", "de-DE"], ["Frau Kessler", "Das halte ich für unmenschlich. Wenn ich Sie richtig verstehe, müsste ich einem Mörder sagen, wo sich mein Freund versteckt?", "de-DE"], ["Herr Brückner", "Genau das folgt aus seinem Grundsatz. Für Kant ist die Wahrhaftigkeit eine unbedingte Pflicht.", "de-DE"], ["Moderatorin", "Was genau verstehen wir hier unter einer Lüge? Ist Schweigen auch eine Lüge?", "de-DE"], ["Frau Kessler", "Nein, und das ist der springende Punkt. Ich muss nicht lügen, ich kann auch die Antwort verweigern.", "de-DE"], ["Herr Brückner", "Gesetzt den Fall, Schweigen ist nicht möglich. Dann bleibt das Dilemma bestehen.", "de-DE"], ["Moderatorin", "Daraus folgt vielleicht, dass Grundsätze miteinander in Konflikt geraten können. Darüber sprechen wir nach der Pause.", "de-DE"]],
    gist: ["Worum geht es in der Diskussion?", ["Ob man lügen darf, um jemanden zu schützen", "Wie man ein Café eröffnet", "Wer Kants Bücher veröffentlicht hat"]],
    detail: [["Was vertritt Kant laut Herrn Brückner?", ["Man darf nicht einmal einen Mörder belügen.", "Lügen ist immer erlaubt.", "Lügen ist nur unter Freunden verboten."]], ["Wie findet Frau Kessler diese Position?", ["Unmenschlich", "Überzeugend", "Langweilig"]], ["Welchen Ausweg schlägt Frau Kessler vor?", ["Die Antwort zu verweigern", "Den Mörder anzuzeigen", "Wegzuziehen"]], ["Was folgt laut der Moderatorin vielleicht aus der Diskussion?", ["Grundsätze können miteinander in Konflikt geraten.", "Kant hatte immer recht.", "Man sollte nie diskutieren."]]],
    decode: ["In einem Aufsatz von 1797 vertritt er die These, dass man nicht einmal einen Mörder belügen dürfe", "Gesetzt den Fall, Schweigen ist nicht möglich"],
    tip: "Listen for the moves of a philosophical discussion: a thesis (vertritt die These), a check (Wenn ich Sie richtig verstehe), a clarification of concepts (Was genau verstehen wir unter…?), a hypothesis (Gesetzt den Fall) and a conclusion (Daraus folgt). Recognising the moves makes even abstract talk easy to follow.", tip_fr: "Repère les étapes d'une discussion philosophique : une thèse (vertritt die These), une vérification (Wenn ich Sie richtig verstehe), une clarification des notions (Was genau verstehen wir unter…?), une hypothèse (Gesetzt den Fall) et une conclusion (Daraus folgt). Les reconnaître rend même un échange abstrait facile à suivre."
  }]);

  W.PROMPTS.push({ id: "de-c2-4", level: "C2", q: "Halte einen Vortrag (etwa drei bis vier Minuten): „Habe Mut, dich deines eigenen Verstandes zu bedienen!“ Ist Kants Aufforderung heute noch aktuell? Erkläre den Gedanken, beziehe ihn auf die Gegenwart und nimm Stellung.", en: "Give a talk (about three to four minutes): “Have the courage to use your own understanding!” Is Kant's call still relevant today? Explain the idea, relate it to the present and take a position.", fr: "Fais un exposé (environ trois à quatre minutes) : « Aie le courage de te servir de ton propre entendement ! » L'appel de Kant est-il encore actuel ? Explique l'idée, rattache-la au présent et prends position.", time: 240,
    phrases: ["Was Kant unter Aufklärung versteht, …", "Dass …, liegt auf der Hand.", "Daraus folgt für mich, dass…", "In einem Punkt muss man jedoch unterscheiden: …", "Folglich…"],
    model: "Was Kant unter Aufklärung versteht, sagt er gleich im ersten Satz seines berühmten Aufsatzes von 1784: den Ausgang des Menschen aus seiner selbstverschuldeten Unmündigkeit. Unmündig ist, wer sich seines Verstandes nicht ohne fremde Leitung bedient, und zwar aus Faulheit oder Feigheit. Ist diese Diagnose heute noch aktuell? Meines Erachtens mehr denn je. Dass uns noch nie so viele Informationen zur Verfügung standen, liegt auf der Hand. Doch gerade deshalb ist die Versuchung groß, sich das Denken abnehmen zu lassen: von Algorithmen, die uns zeigen, was wir lesen sollen, oder von Meinungsführern, deren Urteil wir ungeprüft übernehmen. In einem Punkt muss man jedoch unterscheiden: Wer sich auf Fachleute verlässt, ist nicht automatisch unmündig. Niemand kann alles selbst prüfen. Mündig ist, wer weiß, wem er vertraut, und warum. Daraus folgt für mich, dass Aufklärung heute vor allem Medienkompetenz bedeutet: Quellen prüfen, Widersprüche erkennen, Zweifel zulassen. Folglich bleibt Kants Aufforderung eine Aufgabe für jede Generation." });

  W.WRITING_GUIDE["c2-4"] = { genre: "An essay (C2)", genre_fr: "Un essai (C2)",
    plan: [["A prejudice to overturn, and your thesis.", "Un préjugé à renverser, et ta thèse."], ["What philosophy teaches.", "Ce que la philosophie enseigne."], ["Young people's questions.", "Les questions des jeunes."], ["Objections and answers.", "Objections et réponses."], ["A conclusion linked to Kant.", "Une conclusion en lien avec Kant."]],
    marks: [["Dass Philosophie praktisch nutzlos sei, ist ein verbreitetes Vorurteil", "a subject clause", "une subordonnée sujet"], ["bin der Überzeugung", "the thesis", "la thèse"], ["Was Philosophie lehrt, ist", "a free relative clause", "une relative sans antécédent"], ["Gegner eines solchen Pflichtfachs wenden ein", "the objections", "les objections"], ["Folglich", "a logical conclusion", "une conclusion logique"], ["Dass dieser Mut nicht angeboren ist", "a subject clause in the conclusion", "une subordonnée sujet dans la conclusion"]] };

  /* Atelier de langue : champs allemands d'abord, puis anglais et français (voir localize.js). */
  W.LEXIS = W.LEXIS || {};
  W.LEXIS["c2-4"] = {
    colloc: [
      ["ein Argument entkräften", "to refute an argument", "réfuter un argument", "Sie entkräftete jedes Argument mit einem Gegenbeispiel.", "entkräftete", ["entfernte", "entwarf"]],
      ["Position beziehen", "to take a stand", "prendre position", "Kant bezog klar Position für die Freiheit des Denkens.", "bezog", ["zog", "bog"]],
      ["von etwas Gebrauch machen", "to make use of something", "faire usage de quelque chose", "Kant fordert, von der eigenen Vernunft Gebrauch zu machen.", "machen", ["nehmen", "haben"]],
      ["einen Widerspruch auflösen", "to resolve a contradiction", "résoudre une contradiction", "Es gelang ihr, den Widerspruch aufzulösen.", "aufzulösen", ["aufzulesen", "aufzuladen"]],
      ["eine Unterscheidung treffen", "to draw a distinction", "faire une distinction", "Kant trifft eine wichtige Unterscheidung.", "trifft", ["stellt", "legt"]],
      ["etwas in Zweifel ziehen", "to call something into question", "mettre quelque chose en doute", "Niemand zog seine Ehrlichkeit in Zweifel.", "zog", ["nahm", "stellte"]],
      ["sich ein Urteil bilden", "to form a judgement", "se faire une opinion", "Bilde dir selbst ein Urteil!", "Bilde", ["Mache", "Baue"]],
      ["Mut fassen", "to pluck up courage", "prendre son courage à deux mains", "Endlich fasste sie den Mut, ihre Meinung zu sagen.", "fasste", ["griff", "packte"]],
      ["eine These verteidigen", "to defend a thesis", "défendre une thèse", "Er verteidigte seine These gegen alle Einwände.", "verteidigte", ["verteilte", "vertiefte"]],
      ["einen Gedanken zu Ende denken", "to think a thought through", "aller au bout d'une idée", "Man muss diesen Gedanken zu Ende denken.", "denken", ["machen", "sagen"]]
    ],
    wf: [
      ["Kant fordert den Mut zur ___. (MÜNDIG)", "Mündigkeit"],
      ["Seine Begründung ist nicht ___. (SCHLUSS)", "schlüssig"],
      ["Der Text ist voller ___. (WIDERSPRECHEN)", "Widersprüche"],
      ["Die ___ des Begriffs ist umstritten. (DEFINIEREN)", "Definition"],
      ["Kant gilt als einer der ___ Denker der Neuzeit. (EINFLUSS)", "einflussreichsten"],
      ["Er schwieg aus reiner ___. (FEIGE)", "Feigheit"],
      ["Diese ___ ist nicht belegt. (BEHAUPTEN)", "Behauptung"],
      ["Die Argumentation ist logisch ___. (FOLGERN)", "folgerichtig"]
    ],
    kwt: [
      ["Es ist umstritten, ob der Wille frei ist.", "OB", "___ umstritten.", "Ob der Wille frei ist, ist"],
      ["Niemand zweifelt daran, dass wir uns irren können.", "DARAN", "Dass wir uns irren können, ___.", "daran zweifelt niemand"],
      ["Ich verstehe nicht, was er meint.", "WAS", "___ verstehe ich nicht.", "Was er meint,|Was er meint"],
      ["Also ist Sokrates sterblich.", "FOLGLICH", "___ sterblich.", "Folglich ist Sokrates"],
      ["Kant fordert, dass man die eigene Vernunft gebraucht.", "GEBRAUCH", "Kant fordert, ___ zu machen.", "von der eigenen Vernunft Gebrauch"],
      ["Niemand bezweifelte seine Ehrlichkeit.", "ZWEIFEL", "Niemand ___.", "zog seine Ehrlichkeit in Zweifel"]
    ],
    idioms: [
      ["ein Widerspruch in sich", "etwas, das sich selbst widerspricht", "a contradiction in terms", "une contradiction dans les termes", "Eine gezwungene Freiwilligkeit ist ein Widerspruch in sich.", "ein Widerspruch in sich"],
      ["Wer A sagt, muss auch B sagen.", "Wer etwas beginnt, muss auch die Folgen tragen", "In for a penny, in for a pound.", "Quand le vin est tiré, il faut le boire.", "Du hast zugesagt; wer A sagt, muss auch B sagen.", "wer A sagt, muss auch B sagen"],
      ["der springende Punkt", "das Entscheidende", "the crucial point", "le point essentiel", "Das ist der springende Punkt.", "der springende Punkt"],
      ["über seinen eigenen Schatten springen", "etwas gegen die eigene Gewohnheit tun", "to overcome one's own nature", "se faire violence", "Er musste über seinen eigenen Schatten springen und sich entschuldigen.", "über seinen eigenen Schatten springen"],
      ["etwas für bare Münze nehmen", "etwas ungeprüft glauben", "to take something at face value", "prendre quelque chose pour argent comptant", "Man sollte nicht alles für bare Münze nehmen.", "für bare Münze nehmen"],
      ["jemandem geht ein Licht auf", "jemand versteht plötzlich etwas", "the penny drops", "avoir une illumination", "Beim zweiten Lesen ging mir ein Licht auf.", "ging mir ein Licht auf"],
      ["eine Milchmädchenrechnung", "eine naive, falsche Rechnung", "a naive miscalculation", "un calcul simpliste", "Das ist eine Milchmädchenrechnung: Die Kosten fehlen.", "eine Milchmädchenrechnung"],
      ["Äpfel mit Birnen vergleichen", "Dinge vergleichen, die nicht vergleichbar sind", "to compare apples and oranges", "comparer des choux et des carottes", "Hier vergleichst du Äpfel mit Birnen.", "Äpfel mit Birnen"]
    ]
  };

  W.COURSE.push({ id: "c2-4", level: "C2", icon: "lightbulb", title: "Thinking for yourself", title_fr: "Penser par soi-même",
    intro: "Philosophy is the art of thinking clearly. In this unit, you'll learn to start sentences with whole clauses (Dass wir frei sind, bezweifelt niemand), the language of reasoning (folglich, mithin, necessary and sufficient conditions, fallacies), and how to clarify concepts in a discussion. You'll also read Kant's famous answer to the question “What is Enlightenment?”.",
    intro_fr: "La philosophie est l'art de penser clairement. Dans cette unité, tu vas apprendre à commencer une phrase par une proposition entière (Dass wir frei sind, bezweifelt niemand), la langue du raisonnement (folglich, mithin, conditions nécessaires et suffisantes, sophismes), et la façon de clarifier les notions dans une discussion. Tu liras aussi la célèbre réponse de Kant à la question « Qu'est-ce que les Lumières ? ».",
    can: ["Use subject and object clauses in first position, with their correlates", "Structure and analyse an argument, and name fallacies", "Clarify concepts and use thought experiments in a discussion", "Talk about philosophy and reasoning", "Write an essay on education and critical thinking (C2)"],
    can_fr: ["Employer en tête de phrase des subordonnées sujets et compléments, avec leurs corrélats", "Structurer et analyser un argument, et nommer les sophismes", "Clarifier les notions et utiliser des expériences de pensée dans une discussion", "Parler de philosophie et de raisonnement", "Écrire un essai sur l'éducation et l'esprit critique (C2)"],
    lessons: [142, 143, 144], vocab: ["philosophieDE", "argumentationDE"], reading: "kant", prompt: "de-c2-4",
    writing: { task: "Write an essay (300-350 words): “Should philosophy be a compulsory subject in every secondary school?” Include a prejudice to overturn and your thesis, what philosophy teaches, young people's own questions, objections and answers, and a conclusion.", task_fr: "Écris un essai (300 à 350 mots) : « La philosophie devrait-elle être obligatoire dans tous les établissements secondaires ? » Avec un préjugé à renverser et ta thèse, ce que la philosophie enseigne, les questions des jeunes eux-mêmes, des objections et des réponses, et une conclusion.", words: "300-350",
      tips: ["Dass …, ist ein verbreitetes Vorurteil.", "Was … lehrt, ist…", "Gegner … wenden ein, …", "Folglich…", "Dass …, liegt auf der Hand."],
      checklist: ["I wrote a lead-in and a clear thesis", "I started at least two sentences with a subject or object clause", "I answered the objections", "I used logical connectors (folglich, somit, mithin)", "I wrote between 300 and 350 words"],
      checklist_fr: ["J'ai écrit une amorce et une thèse claire", "J'ai commencé au moins deux phrases par une subordonnée sujet ou complément", "J'ai répondu aux objections", "J'ai employé des connecteurs logiques (folglich, somit, mithin)", "J'ai écrit entre 300 et 350 mots"],
      model: "Wer an Philosophie denkt, hat oft ältere Herren vor Augen, die über Fragen grübeln, die niemand beantworten kann. Dass Philosophie praktisch nutzlos sei, ist ein verbreitetes Vorurteil. Ich halte es für falsch und bin der Überzeugung, dass Philosophie als Pflichtfach an alle weiterführenden Schulen gehört.\n\nWas Philosophie lehrt, ist zunächst eine Methode: genau hinzusehen, Begriffe zu klären und Argumente zu prüfen. Wer gelernt hat, einen Zirkelschluss zu erkennen oder zwischen einer notwendigen und einer hinreichenden Bedingung zu unterscheiden, lässt sich weniger leicht von Parolen täuschen. In einer Zeit, in der Meinungen im Sekundentakt verbreitet werden, ist diese Fähigkeit wichtiger denn je.\n\nHinzu kommt, dass Jugendliche ohnehin philosophische Fragen stellen. Ob es gerecht ist, dass manche reich und andere arm sind, ob man lügen darf, um einen Freund zu schützen, was ein gutes Leben ausmacht: Darüber denken junge Menschen nach, ob die Schule es will oder nicht. Es wäre fahrlässig, sie mit diesen Fragen allein zu lassen. Im Philosophieunterricht lernen sie, ihre eigenen Antworten zu begründen und die Antworten anderer zu prüfen.\n\nGegner eines solchen Pflichtfachs wenden ein, der Stundenplan sei schon heute überfüllt. Zudem fehle es an ausgebildeten Lehrkräften. Diese Einwände sind ernst zu nehmen, doch sie betreffen die Umsetzung, nicht das Ziel. Philosophische Fragen lassen sich auch in bestehende Fächer einbinden, etwa in Deutsch, Geschichte oder Biologie, solange es eigene Stunden für das gemeinsame Nachdenken gibt.\n\nEin weiteres Argument lautet, Philosophie liefere keine eindeutigen Antworten. Gerade darin liegt jedoch ihr Wert. Wer erfährt, dass kluge Menschen seit Jahrtausenden über dieselben Fragen streiten, lernt Bescheidenheit und Toleranz. Folglich schadet die Offenheit der Philosophie nicht; sie bereitet vielmehr auf eine Welt vor, in der es selten einfache Lösungen gibt.\n\nKant forderte vor über zweihundert Jahren, jeder solle den Mut haben, sich seines eigenen Verstandes zu bedienen. Dass dieser Mut nicht angeboren ist, sondern geübt werden muss, liegt auf der Hand. Die Schule ist der Ort, an dem dieses Üben beginnen sollte." } });
})();
