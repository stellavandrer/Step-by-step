/* Cours d'allemand, unité C1-5 « Media and the public sphere / Médias et espace public » : l'ordre des mots pour la
   mise en relief (Vorfeld, Mittelfeld, Nachfeld), les mots de reprise qui donnent sa cohérence à un texte
   (Ersteres, Letzterer, derselbe, dies), mener une interview. Personnages fictifs, prénoms allemands.
   Faits vérifiables seulement : l'affaire du Spiegel (1962) : l'article « Bedingt abwehrbereit » (octobre 1962) sur
   l'exercice de l'OTAN Fallex 62 ; perquisition des locaux du Spiegel à Hambourg à partir du 26 octobre 1962 ;
   Rudolf Augstein détenu 103 jours, accusé de trahison ; le ministre de la Défense Franz Josef Strauß, qui avait
   induit le Bundestag en erreur sur son rôle, quitte le gouvernement ; protestations publiques ; en 1966, la Cour
   constitutionnelle souligne dans son « arrêt Spiegel » l'importance d'une presse libre pour la démocratie ; le
   terme « Filterblase » a été rendu célèbre par le livre d'Eli Pariser (2011). */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "oeffentlichkeitDE", icon: "newspaper", title: "Journalism and the public", title_fr: "Journalisme et espace public", level: "C1", words: [
    ["die Öffentlichkeit", "the public; the public sphere", "le public ; l'espace public", "Der Bericht wurde der Öffentlichkeit vorgestellt."],
    ["die Recherche, -n", "the research, the investigation", "l'enquête, la recherche (journalistique)", "Die Recherche dauerte acht Monate."],
    ["recherchieren", "to research, to investigate", "enquêter, se documenter", "Sie hat den Fall gründlich recherchiert."],
    ["investigativ", "investigative", "d'investigation", "Investigativer Journalismus ist teuer, aber unverzichtbar."],
    ["die Enthüllung, -en", "the revelation, the exposé", "la révélation", "Die Enthüllungen führten zum Rücktritt des Ministers."],
    ["enthüllen", "to reveal, to expose", "révéler, dévoiler", "Die Zeitung enthüllte die geheimen Verträge."],
    ["der Informant, -en (die Informantin)", "the informant, the source", "l'informateur, l'informatrice", "Der Informant blieb anonym."],
    ["der Quellenschutz", "protection of sources", "la protection des sources", "Der Quellenschutz ist für die Pressefreiheit zentral."],
    ["zensieren", "to censor", "censurer", "In manchen Ländern werden Zeitungen zensiert."],
    ["die Berichterstattung", "the reporting, the coverage", "la couverture médiatique", "Die Berichterstattung über den Prozess war sehr ausführlich."],
    ["der Leitartikel, -", "the editorial, the leader", "l'éditorial", "Der Chefredakteur schreibt jeden Samstag den Leitartikel."],
    ["das Ressort, -s", "the section, the department (of a newspaper)", "la rubrique, le service", "Sie arbeitet im Ressort Politik."],
    ["das Medienecho", "the media response", "l'écho médiatique", "Der Fall löste ein enormes Medienecho aus."],
    ["die vierte Gewalt", "the fourth estate", "le quatrième pouvoir", "Die Presse wird oft als vierte Gewalt bezeichnet."],
    ["die Durchsuchung, -en", "the search, the raid", "la perquisition", "Die Durchsuchung der Redaktion löste Proteste aus."],
    ["der Landesverrat", "treason", "la trahison (envers l'État)", "Den Journalisten wurde Landesverrat vorgeworfen."]
  ] },
  { id: "netzoeffentlichkeitDE", icon: "globe", title: "The digital public sphere", title_fr: "L'espace public numérique", level: "C1", words: [
    ["die Filterblase, -n", "the filter bubble", "la bulle de filtres", "In der Filterblase sieht man nur Meinungen, die der eigenen ähneln."],
    ["die Echokammer, -n", "the echo chamber", "la chambre d'écho", "In Echokammern verstärken sich extreme Ansichten."],
    ["die Hassrede", "hate speech", "le discours de haine", "Hassrede im Netz kann strafbar sein."],
    ["die Desinformation", "disinformation", "la désinformation", "Desinformation wird gezielt verbreitet, um zu verunsichern."],
    ["die Verschwörungstheorie, -n", "the conspiracy theory", "la théorie du complot", "Verschwörungstheorien verbreiten sich besonders schnell."],
    ["die Reichweite", "the reach", "la portée, l'audience", "Der Kanal hat eine enorme Reichweite."],
    ["die Medienkompetenz", "media literacy", "l'éducation aux médias", "Medienkompetenz sollte ein Schulfach sein."],
    ["der Faktencheck, -s", "the fact check", "la vérification des faits", "Ein Faktencheck widerlegte die Behauptung."],
    ["die Plattform, -en", "the platform", "la plateforme", "Die Plattform löscht nur wenige Hasskommentare."],
    ["die Selbstdarstellung", "self-presentation, self-promotion", "la mise en scène de soi", "In sozialen Netzwerken geht es oft um Selbstdarstellung."],
    ["polarisieren", "to polarise", "polariser, diviser", "Das Thema polarisiert die Gesellschaft."],
    ["die Polarisierung", "polarisation", "la polarisation", "Die Polarisierung der Debatte macht Kompromisse schwer."],
    ["sich empören (über + Akk.)", "to be outraged (at)", "s'indigner (de)", "Viele Nutzer empörten sich über das Video."],
    ["reißerisch", "sensationalist", "racoleur, sensationnaliste", "Die Überschrift ist reißerisch und irreführend."],
    ["der Kommentarbereich, -e", "the comments section", "l'espace commentaires", "Den Kommentarbereich lese ich lieber nicht."],
    ["irreführend", "misleading", "trompeur", "Die Grafik war bewusst irreführend."]
  ] });

  W.LESSONS.push(
  {
    id: 115, level: "C1", icon: "move",
    title: "Den Artikel habe ich nicht gelesen: word order for emphasis", title_fr: "Den Artikel habe ich nicht gelesen : l'ordre des mots pour la mise en relief",
    subtitle: "The three fields of the German sentence, and how to use them to stress what matters.", subtitle_fr: "Les trois champs de la phrase allemande, et comment s'en servir pour mettre en valeur l'essentiel.",
    body: `
<h2>Three fields around the verb bracket</h2>
<table>
<tr><th>Vorfeld</th><th>verb 1</th><th>Mittelfeld</th><th>verb 2</th><th>Nachfeld</th></tr>
<tr><td><s-de>Den Artikel</s-de></td><td><s-de>habe</s-de></td><td><s-de>ich gestern nicht</s-de></td><td><s-de>gelesen</s-de></td><td>–</td></tr>
<tr><td><s-de>Sie</s-de></td><td><s-de>hat</s-de></td><td><s-de>mehr</s-de></td><td><s-de>recherchiert</s-de></td><td><s-de>als alle anderen</s-de></td></tr>
</table>
<h2>The Vorfeld: the starting point</h2>
<p>Anything can go first. The subject is neutral; another element there creates <b>contrast</b> or <b>emphasis</b>, or links to the previous sentence: <s-de>Den Artikel habe ich nicht gelesen, das Interview aber schon.</s-de> · <s-de>Gerade diese Frage hat niemand gestellt.</s-de></p>
<h2>The Mittelfeld: the usual order</h2>
<p>Pronouns come first (<s-de>Sie hat es ihm gegeben</s-de>); with two nouns, dative before accusative (<s-de>Sie gab dem Redakteur den Text</s-de>), but an accusative pronoun goes before the dative (<s-de>Sie gab ihn dem Redakteur</s-de>). Adverbials usually follow time – reason – manner – place. New, important information tends to come late.</p>
<h2>The Nachfeld: after the bracket</h2>
<p>Comparisons and long phrases often go after the second verb: <s-de>Sie hat mehr recherchiert als alle anderen.</s-de> In speech, Germans also "take out" prepositional phrases: <s-de>Ich habe mich sehr gefreut über deinen Artikel.</s-de></p>
<div class="tip">In writing, use the Vorfeld to build cohesion: start the sentence with what links to the previous one (<s-de>Diese Entwicklung…, Dabei…, Trotzdem…</s-de>) and keep the new information for the end of the Mittelfeld.</div>
`,
    body_fr: `
<h2>Trois champs autour de la parenthèse verbale</h2>
<table>
<tr><th>Vorfeld</th><th>verbe 1</th><th>Mittelfeld</th><th>verbe 2</th><th>Nachfeld</th></tr>
<tr><td><s-de>Den Artikel</s-de></td><td><s-de>habe</s-de></td><td><s-de>ich gestern nicht</s-de></td><td><s-de>gelesen</s-de></td><td>–</td></tr>
<tr><td><s-de>Sie</s-de></td><td><s-de>hat</s-de></td><td><s-de>mehr</s-de></td><td><s-de>recherchiert</s-de></td><td><s-de>als alle anderen</s-de></td></tr>
</table>
<h2>Le Vorfeld : le point de départ</h2>
<p>Tout peut venir en tête. Le sujet y est neutre ; un autre élément y crée un <b>contraste</b> ou une <b>mise en relief</b>, ou fait le lien avec la phrase précédente : <s-de>Den Artikel habe ich nicht gelesen, das Interview aber schon.</s-de> (L'article, je ne l'ai pas lu, mais l'interview, si.) · <s-de>Gerade diese Frage hat niemand gestellt.</s-de></p>
<h2>Le Mittelfeld : l'ordre habituel</h2>
<p>Les pronoms d'abord (<s-de>Sie hat es ihm gegeben</s-de>) ; avec deux noms, le datif avant l'accusatif (<s-de>Sie gab dem Redakteur den Text</s-de>), mais un pronom à l'accusatif passe avant le datif (<s-de>Sie gab ihn dem Redakteur</s-de>). Les compléments suivent en général l'ordre temps – cause – manière – lieu. L'information nouvelle et importante tend à venir tard.</p>
<h2>Le Nachfeld : après la parenthèse</h2>
<p>Les comparaisons et les groupes longs se placent souvent après le second verbe : <s-de>Sie hat mehr recherchiert als alle anderen.</s-de> À l'oral, on « sort » aussi les groupes prépositionnels : <s-de>Ich habe mich sehr gefreut über deinen Artikel.</s-de></p>
<div class="tip">À l'écrit, sers-toi du Vorfeld pour créer de la cohérence : commence la phrase par ce qui la relie à la précédente (<s-de>Diese Entwicklung…, Dabei…, Trotzdem…</s-de>) et garde l'information nouvelle pour la fin du Mittelfeld.</div>
`,
    examples: [
      ["Den Artikel habe ich nicht gelesen, das Interview aber schon.", "I haven't read the article, but I have read the interview.", "L'article, je ne l'ai pas lu, mais l'interview, si."],
      ["Gerade diese Frage hat in der Pressekonferenz niemand gestellt.", "That very question was asked by nobody at the press conference.", "Justement cette question, personne ne l'a posée à la conférence de presse."],
      ["Sie gab den Text gestern Abend dem Redakteur.", "She gave the text to the editor yesterday evening.", "Elle a remis le texte au rédacteur hier soir."],
      ["Sie gab ihn dem Redakteur noch vor Redaktionsschluss.", "She gave it to the editor before the deadline.", "Elle l'a remis au rédacteur avant le bouclage."],
      ["Sie hat für den Bericht mehr recherchiert als alle anderen.", "She did more research for the report than anyone else.", "Elle a fait plus de recherches pour le reportage que tous les autres."],
      ["Ich habe mich sehr gefreut über deinen Kommentar.", "I was really pleased about your comment. (spoken)", "Ton commentaire m'a fait très plaisir. (oral)"],
      ["Diese Entwicklung hatte damals kaum jemand vorhergesehen.", "Hardly anyone had foreseen this development at the time.", "Presque personne n'avait prévu cette évolution à l'époque."]
    ],
    quiz: [
      { q: "Which sentence stresses “the article” by contrast?", q_fr: "Quelle phrase met « l'article » en relief par contraste ?", o: ["Den Artikel habe ich nicht gelesen.", "Ich habe den Artikel nicht gelesen.", "Ich habe nicht den Artikel gelesen gehabt."], a: 0, ex: "The object in the Vorfeld creates emphasis.", ex_fr: "Le complément dans le Vorfeld crée la mise en relief." },
      { q: "Sie gab ___ dem Redakteur. (the text = pronoun)", q_fr: "Sie gab ___ dem Redakteur. (le texte = pronom)", o: ["ihn", "ihm", "es den"], a: 0, ex: "Accusative pronoun before the dative noun.", ex_fr: "Pronom à l'accusatif avant le nom au datif." },
      { q: "Where does “als alle anderen” usually go?", q_fr: "Où se place en général « als alle anderen » ?", o: ["After the second verb (Nachfeld)", "Before the first verb", "Between subject and verb"], o_fr: ["Après le second verbe (Nachfeld)", "Avant le premier verbe", "Entre le sujet et le verbe"], a: 0, ex: "Comparisons usually go in the Nachfeld.", ex_fr: "Les comparaisons vont en général dans le Nachfeld." },
      { q: "Sie hat ___ gegeben. (it to him)", q_fr: "Sie hat ___ gegeben. (le lui)", o: ["es ihm", "ihm es", "es zu ihm"], a: 0, ex: "Two pronouns: accusative before dative.", ex_fr: "Deux pronoms : accusatif avant datif." },
      { q: "A good way to link to the previous sentence:", q_fr: "Une bonne façon de faire le lien avec la phrase précédente :", o: ["Diese Entwicklung hatte kaum jemand vorhergesehen.", "Kaum jemand hatte vorhergesehen diese Entwicklung.", "Vorhergesehen kaum jemand hatte diese Entwicklung."], a: 0, ex: "Start with what refers back.", ex_fr: "Commencer par ce qui renvoie à ce qui précède." }
    ]
  },
  {
    id: 116, level: "C1", icon: "link-2",
    title: "Ersteres, Letzterer, derselbe: referring back in a text", title_fr: "Ersteres, Letzterer, derselbe : les mots de reprise",
    subtitle: "Make a text flow without repeating yourself.", subtitle_fr: "Faire couler un texte sans se répéter.",
    body: `
<h2>Words that point back</h2>
<table>
<tr><th>Word</th><th>Use and example</th></tr>
<tr><td><s-de>dies / das</s-de></td><td>a whole idea: <s-de>Die Auflage sinkt. Dies hat mehrere Gründe.</s-de></td></tr>
<tr><td><s-de>Ersterer / Letzterer</s-de></td><td>the former / the latter: <s-de>Es sprachen ein Journalist und eine Politikerin; Letztere wich allen Fragen aus.</s-de></td></tr>
<tr><td><s-de>derselbe, dieselbe, dasselbe</s-de></td><td>the same one: <s-de>Sie trug dasselbe Kleid wie gestern.</s-de></td></tr>
<tr><td><s-de>ein solcher, eine solche</s-de></td><td>such a: <s-de>Ein solcher Fehler darf nicht passieren.</s-de></td></tr>
<tr><td><s-de>dabei, dadurch, davon, hierbei</s-de></td><td>refer back with a preposition: <s-de>Die Zeitung prüfte die Quellen. Dabei fiel ihr ein Widerspruch auf.</s-de></td></tr>
<tr><td><s-de>besagt</s-de> (formal)</td><td>the aforementioned: <s-de>Besagter Artikel erschien im Mai.</s-de></td></tr>
</table>
<h2>Endings</h2>
<p><s-de>derselbe</s-de> is written as one word and both parts change: <s-de>derselbe Mann, mit demselben Mann, dieselben Leute</s-de>. <s-de>Ersterer, Letzterer</s-de> take adjective endings: <s-de>Letztere</s-de> (feminine or plural), <s-de>Letzteres</s-de> (neuter, also a whole idea).</p>
<div class="tip">German distinguishes <s-de>derselbe</s-de> (the very same one) from <s-de>der gleiche</s-de> (an identical one), at least in careful writing: <s-de>Wir wohnen im selben Haus</s-de> but <s-de>Wir haben das gleiche Auto</s-de> (two cars of the same model). In everyday speech, the difference is often ignored.</div>
`,
    body_fr: `
<h2>Les mots qui renvoient en arrière</h2>
<table>
<tr><th>Mot</th><th>Emploi et exemple</th></tr>
<tr><td><s-de>dies / das</s-de></td><td>toute une idée : <s-de>Die Auflage sinkt. Dies hat mehrere Gründe.</s-de></td></tr>
<tr><td><s-de>Ersterer / Letzterer</s-de></td><td>le premier / ce dernier : <s-de>Es sprachen ein Journalist und eine Politikerin; Letztere wich allen Fragen aus.</s-de></td></tr>
<tr><td><s-de>derselbe, dieselbe, dasselbe</s-de></td><td>le même : <s-de>Sie trug dasselbe Kleid wie gestern.</s-de></td></tr>
<tr><td><s-de>ein solcher, eine solche</s-de></td><td>un tel, une telle : <s-de>Ein solcher Fehler darf nicht passieren.</s-de></td></tr>
<tr><td><s-de>dabei, dadurch, davon, hierbei</s-de></td><td>reprise avec une préposition : <s-de>Die Zeitung prüfte die Quellen. Dabei fiel ihr ein Widerspruch auf.</s-de></td></tr>
<tr><td><s-de>besagt</s-de> (soutenu)</td><td>ledit, ladite : <s-de>Besagter Artikel erschien im Mai.</s-de></td></tr>
</table>
<h2>Les terminaisons</h2>
<p><s-de>derselbe</s-de> s'écrit en un mot et ses deux parties varient : <s-de>derselbe Mann, mit demselben Mann, dieselben Leute</s-de>. <s-de>Ersterer, Letzterer</s-de> prennent les terminaisons de l'adjectif : <s-de>Letztere</s-de> (féminin ou pluriel), <s-de>Letzteres</s-de> (neutre, aussi pour toute une idée).</p>
<div class="tip">L'allemand distingue <s-de>derselbe</s-de> (le même, unique) de <s-de>der gleiche</s-de> (un identique), du moins à l'écrit soigné : <s-de>Wir wohnen im selben Haus</s-de> mais <s-de>Wir haben das gleiche Auto</s-de> (deux voitures du même modèle). À l'oral, la différence est souvent ignorée.</div>
`,
    examples: [
      ["Die Auflage der Zeitungen sinkt. Dies hat mehrere Gründe.", "Newspaper circulation is falling. There are several reasons for this.", "Le tirage des journaux baisse. Cela s'explique par plusieurs raisons."],
      ["Es sprachen ein Journalist und eine Politikerin; Letztere wich allen Fragen aus.", "A journalist and a politician spoke; the latter avoided every question.", "Un journaliste et une responsable politique ont pris la parole ; cette dernière a éludé toutes les questions."],
      ["Er erzählte dieselbe Geschichte wie letztes Jahr.", "He told the same story as last year.", "Il a raconté la même histoire que l'an dernier."],
      ["Ein solcher Fehler darf einer seriösen Zeitung nicht passieren.", "A reputable newspaper mustn't make a mistake like that.", "Un journal sérieux ne doit pas commettre une telle erreur."],
      ["Die Redaktion prüfte die Quellen. Dabei fiel ihr ein Widerspruch auf.", "The editorial team checked the sources. In doing so, it noticed a contradiction.", "La rédaction a vérifié les sources. Ce faisant, elle a remarqué une contradiction."],
      ["Besagter Artikel erschien im Mai.", "The article in question appeared in May.", "Ledit article est paru en mai."],
      ["Wir wohnen im selben Haus, haben aber nie miteinander gesprochen.", "We live in the same building but have never spoken to each other.", "Nous habitons le même immeuble, mais nous ne nous sommes jamais parlé."]
    ],
    quiz: [
      { q: "Ein Journalist und eine Politikerin sprachen; ___ wich allen Fragen aus. (the latter = she)", q_fr: "Ein Journalist und eine Politikerin sprachen; ___ wich allen Fragen aus. (cette dernière)", o: ["Letztere", "Letzterer", "Ersterer"], a: 0, ex: "The latter, feminine: Letztere.", ex_fr: "Cette dernière, féminin : Letztere." },
      { q: "Er trug ___ Hemd wie gestern. (the very same)", q_fr: "Er trug ___ Hemd wie gestern. (le même)", o: ["dasselbe", "das selbe gleiche", "dieselbe"], a: 0, ex: "Neuter: dasselbe (one word).", ex_fr: "Neutre : dasselbe (en un mot)." },
      { q: "Ich spreche mit ___ Kollegin wie gestern.", q_fr: "Ich spreche mit ___ Kollegin wie gestern.", o: ["derselben", "dieselbe", "dasselben"], a: 0, ex: "Dative feminine: derselben.", ex_fr: "Datif féminin : derselben." },
      { q: "“A mistake like that…”", q_fr: "« Une telle erreur… »", o: ["Ein solcher Fehler…", "Ein so Fehler…", "Ein solches Fehler…"], a: 0, ex: "solch- with adjective endings.", ex_fr: "solch- avec les terminaisons de l'adjectif." },
      { q: "Two people own cars of the same model. They have…", q_fr: "Deux personnes ont une voiture du même modèle. Elles ont…", o: ["das gleiche Auto", "dasselbe Auto", "ein selbes Auto"], a: 0, ex: "Identical, not the very same: das gleiche.", ex_fr: "Identique, pas la même : das gleiche." }
    ]
  },
  {
    id: 117, level: "C1", kind: "functional", icon: "mic",
    title: "Everyday German: conducting an interview", title_fr: "L'allemand de tous les jours : mener une interview",
    subtitle: "Open questions, follow-up questions and polite persistence.", subtitle_fr: "Questions ouvertes, relances et insistance polie.",
    body: `
<h2>Asking open questions</h2>
<p>Open questions get longer answers: <s-de>Wie sind Sie auf das Thema gekommen?</s-de> · <s-de>Was hat Sie dabei am meisten überrascht?</s-de> · <s-de>Inwiefern hat sich Ihre Arbeit verändert?</s-de></p>
<h2>Following up</h2>
<table>
<tr><th>To…</th><th>German</th></tr>
<tr><td>ask for details</td><td><s-de>Wie meinen Sie das genau?</s-de> · <s-de>Können Sie ein Beispiel nennen?</s-de></td></tr>
<tr><td>rephrase</td><td><s-de>Wenn ich Sie richtig verstehe, …</s-de></td></tr>
<tr><td>insist politely</td><td><s-de>Lassen Sie mich da noch einmal nachhaken: …</s-de> · <s-de>Sie haben meine Frage noch nicht ganz beantwortet.</s-de></td></tr>
<tr><td>change the subject</td><td><s-de>Lassen Sie uns zu einem anderen Punkt kommen.</s-de></td></tr>
<tr><td>close</td><td><s-de>Zum Schluss noch eine persönliche Frage: …</s-de> · <s-de>Vielen Dank für das Gespräch.</s-de></td></tr>
</table>
<div class="tip">The best follow-up questions come from listening, not from your list. If the answer is vague, ask for an example; if it avoids the question, rephrase it calmly. <s-de>nachhaken</s-de> (to probe, to press for an answer) is the key verb of interviewers.</div>
`,
    body_fr: `
<h2>Poser des questions ouvertes</h2>
<p>Les questions ouvertes appellent des réponses développées : <s-de>Wie sind Sie auf das Thema gekommen?</s-de> · <s-de>Was hat Sie dabei am meisten überrascht?</s-de> · <s-de>Inwiefern hat sich Ihre Arbeit verändert?</s-de></p>
<h2>Relancer</h2>
<table>
<tr><th>Pour…</th><th>En allemand</th></tr>
<tr><td>demander des précisions</td><td><s-de>Wie meinen Sie das genau?</s-de> · <s-de>Können Sie ein Beispiel nennen?</s-de></td></tr>
<tr><td>reformuler</td><td><s-de>Wenn ich Sie richtig verstehe, …</s-de></td></tr>
<tr><td>insister poliment</td><td><s-de>Lassen Sie mich da noch einmal nachhaken: …</s-de> · <s-de>Sie haben meine Frage noch nicht ganz beantwortet.</s-de></td></tr>
<tr><td>changer de sujet</td><td><s-de>Lassen Sie uns zu einem anderen Punkt kommen.</s-de></td></tr>
<tr><td>conclure</td><td><s-de>Zum Schluss noch eine persönliche Frage: …</s-de> · <s-de>Vielen Dank für das Gespräch.</s-de></td></tr>
</table>
<div class="tip">Les meilleures relances naissent de l'écoute, pas de ta liste. Si la réponse est vague, demande un exemple ; si elle élude la question, reformule-la calmement. <s-de>nachhaken</s-de> (insister, relancer) est le verbe clé des intervieweurs.</div>
`,
    examples: [
      ["Wie sind Sie auf das Thema gekommen?", "How did you come to this subject?", "Comment avez-vous découvert ce sujet ?"],
      ["Inwiefern hat sich Ihre Arbeit durch das Internet verändert?", "In what way has the internet changed your work?", "Dans quelle mesure Internet a-t-il changé votre travail ?"],
      ["Wie meinen Sie das genau?", "What exactly do you mean by that?", "Que voulez-vous dire exactement ?"],
      ["Können Sie ein konkretes Beispiel nennen?", "Can you give a concrete example?", "Pouvez-vous donner un exemple concret ?"],
      ["Lassen Sie mich da noch einmal nachhaken.", "Let me press you on that point.", "Permettez-moi d'insister sur ce point."],
      ["Sie haben meine Frage noch nicht ganz beantwortet.", "You haven't quite answered my question yet.", "Vous n'avez pas encore tout à fait répondu à ma question."],
      ["Zum Schluss noch eine persönliche Frage: Was lesen Sie selbst am liebsten?", "Finally, a personal question: what do you most like to read yourself?", "Pour finir, une question personnelle : que lisez-vous vous-même le plus volontiers ?"]
    ],
    quiz: [
      { q: "Which is an open question?", q_fr: "Laquelle est une question ouverte ?", o: ["Wie sind Sie auf das Thema gekommen?", "Sind Sie zufrieden?", "Haben Sie das gewusst?"], a: 0, ex: "Open questions start with a W-word.", ex_fr: "Les questions ouvertes commencent par un mot en W." },
      { q: "To press for an answer politely:", q_fr: "Pour insister poliment :", o: ["Lassen Sie mich da noch einmal nachhaken.", "Antworten Sie endlich!", "Das ist keine Antwort, sagen Sie die Wahrheit."], a: 0, ex: "nachhaken = to probe.", ex_fr: "nachhaken = insister, relancer." },
      { q: "“What exactly do you mean?”", q_fr: "« Que voulez-vous dire exactement ? »", o: ["Wie meinen Sie das genau?", "Was meinen Sie das genau?", "Wie sagen Sie das genau?"], a: 0, ex: "Wie meinen Sie das?", ex_fr: "Wie meinen Sie das?" },
      { q: "“In what way…?”", q_fr: "« Dans quelle mesure… ? »", o: ["Inwiefern…?", "Wiefern…?", "Inwieweit dass…?"], a: 0, ex: "inwiefern = in what way, to what extent.", ex_fr: "inwiefern = dans quelle mesure." },
      { q: "When the answer is vague, ask…", q_fr: "Quand la réponse est vague, demande…", o: ["for a concrete example", "the same question again, louder", "nothing, and move on"], o_fr: ["un exemple concret", "la même question, plus fort", "rien, et passe à autre chose"], a: 0, ex: "Können Sie ein Beispiel nennen?", ex_fr: "Können Sie ein Beispiel nennen?" }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    115: {
      gap: [["___ Artikel habe ich nicht gelesen, das Interview aber schon.", "Den"], ["Sie gab ___ dem Redakteur. (den Text → Pronomen)", "ihn"], ["Sie hat ___ ihm gegeben. (das Buch → Pronomen)", "es"], ["Sie hat mehr recherchiert ___ alle anderen.", "als"]],
      fix: [["Sie hat ihm es gegeben.", "Sie hat es ihm gegeben.", "Two pronouns: accusative before dative.", "Deux pronoms : accusatif avant datif."], ["Den Artikel ich habe nicht gelesen.", "Den Artikel habe ich nicht gelesen.", "Whatever is in the Vorfeld, the verb comes second.", "Quoi qu'il y ait dans le Vorfeld, le verbe est en deuxième position."]],
      task: ["Rewrite these neutral sentences to stress the words in capitals: Ich habe DEN FILM nicht gesehen (but the series). Niemand hat GERADE DIESE FRAGE gestellt. Wir haben DIESE ENTWICKLUNG nicht vorhergesehen.", "Réécris ces phrases neutres pour mettre en relief les mots en capitales : Ich habe DEN FILM nicht gesehen (mais la série). Niemand hat GERADE DIESE FRAGE gestellt. Wir haben DIESE ENTWICKLUNG nicht vorhergesehen.", "Den Film habe ich nicht gesehen, die Serie aber schon. Gerade diese Frage hat niemand gestellt. Diese Entwicklung haben wir nicht vorhergesehen."]
    },
    116: {
      gap: [["Ein Journalist und eine Politikerin sprachen; ___ wich allen Fragen aus.", "Letztere", "the latter (she)", "cette dernière"], ["Er erzählte ___ Geschichte wie letztes Jahr.", "dieselbe"], ["Ein ___ Fehler darf nicht passieren.", "solcher"], ["Die Redaktion prüfte die Quellen. ___ fiel ihr ein Widerspruch auf.", "Dabei|Hierbei", "in doing so", "ce faisant"]],
      fix: [["Er trug den selben Anzug wie gestern.", "Er trug denselben Anzug wie gestern.", "derselbe is written as one word.", "derselbe s'écrit en un mot."], ["Ich spreche mit dieselben Leuten wie gestern.", "Ich spreche mit denselben Leuten wie gestern.", "Dative plural: denselben.", "Datif pluriel : denselben."]],
      task: ["Link these sentences with reference words (dies, Letzterer, dabei, ein solcher): A minister and a journalist met. The journalist asked about the contracts. The minister avoided the question. Many viewers noticed it. Such behaviour damages trust.", "Relie ces phrases avec des mots de reprise (dies, Letzterer, dabei, ein solcher) : Une ministre et un journaliste se sont rencontrés. Le journaliste a posé une question sur les contrats. La ministre a éludé la question. Beaucoup de téléspectateurs l'ont remarqué. Un tel comportement nuit à la confiance.", "Eine Ministerin und ein Journalist trafen sich zum Interview. Letzterer fragte nach den Verträgen. Dabei wich die Ministerin der Frage aus. Dies fiel vielen Zuschauern auf. Ein solches Verhalten schadet dem Vertrauen."]
    },
    117: {
      gap: [["Wie ___ Sie das genau?", "meinen"], ["Können Sie ein konkretes Beispiel ___?", "nennen"], ["Lassen Sie mich da noch einmal ___.", "nachhaken", "press the point", "insister"], ["___ hat sich Ihre Arbeit verändert?", "Inwiefern", "in what way", "dans quelle mesure"]],
      fix: [["Was meinen Sie das genau?", "Wie meinen Sie das genau?", "Wie meinen Sie das?", "Wie meinen Sie das?"], ["Können Sie ein Beispiel geben nennen?", "Können Sie ein Beispiel nennen?", "One verb: ein Beispiel nennen.", "Un seul verbe : ein Beispiel nennen."]],
      task: ["Prepare an interview with a local journalist: write three open questions, one follow-up question and a closing question.", "Prépare une interview avec un journaliste local : écris trois questions ouvertes, une relance et une question de conclusion.", "Wie sind Sie zum Journalismus gekommen? Was hat sich durch die sozialen Medien an Ihrer Arbeit verändert? Wie prüfen Sie, ob eine Quelle verlässlich ist? Können Sie dafür ein konkretes Beispiel nennen? Zum Schluss noch eine persönliche Frage: Welchen Artikel würden Sie gern noch schreiben?"]
    }
  });

  W.ROLEPLAYS.push(
  { id: "redaktionskonferenz", lesson: 115, level: "C1", icon: "newspaper", partner: "Herr Kühn", role: "the editor-in-chief", role_fr: "le rédacteur en chef",
    title: "The morning editorial meeting", title_fr: "La conférence de rédaction du matin",
    setting: "You work at a regional newspaper. In the morning meeting, the editor-in-chief, Herr Kühn, asks what should go on the front page.", setting_fr: "Tu travailles dans un journal régional. Lors de la conférence du matin, le rédacteur en chef, Herr Kühn, demande ce qu'il faut mettre en une.",
    turns: [
      { p: "Was bringen wir morgen auf Seite eins? Die neue Brücke oder das Stadtfest?", en: "What shall we put on page one tomorrow? The new bridge or the town festival?", fr: "Qu'est-ce qu'on met en une demain ? Le nouveau pont ou la fête de la ville ?" },
      { y: ["Die Brücke würde ich auf Seite eins bringen, das Stadtfest eher in den Lokalteil.", "Die Brücke ich würde auf Seite eins bringen, das Stadtfest eher in den Lokalteil.", "Die Brücke würde ich bringen auf Seite eins, das Stadtfest eher in den Lokalteil."], en: "I'd put the bridge on page one, and the festival in the local section.", fr: "Le pont, je le mettrais en une, la fête plutôt dans les pages locales.", why: "Object in the Vorfeld for contrast; verb second.", why_fr: "Complément dans le Vorfeld pour le contraste ; verbe en deuxième position." },
      { p: "Warum gerade die Brücke? Darüber haben wir doch schon oft berichtet.", en: "Why the bridge? We've reported on it many times.", fr: "Pourquoi justement le pont ? On en a déjà souvent parlé." },
      { y: ["Gerade diese Kosten hat bisher niemand genau recherchiert. Sie sind doppelt so hoch wie geplant.", "Gerade diese Kosten niemand hat bisher genau recherchiert. Sie sind doppelt so hoch wie geplant.", "Gerade diese Kosten hat bisher niemand recherchiert genau. Sie sind doppelt so hoch wie geplant."], en: "Nobody has looked closely at these costs so far. They're twice as high as planned.", fr: "Justement ces coûts, personne ne s'est penché dessus jusqu'ici. Ils sont deux fois plus élevés que prévu.", why: "Emphasis in the Vorfeld; verb second.", why_fr: "Mise en relief dans le Vorfeld ; verbe en deuxième position." },
      { p: "Doppelt so hoch? Haben Sie dafür Belege?", en: "Twice as high? Do you have evidence for that?", fr: "Deux fois plus élevés ? Vous avez des preuves ?" },
      { y: ["Ja, eine Informantin hat mir die Unterlagen gezeigt. Ich habe sie gestern dem Kollegen aus der Wirtschaftsredaktion gegeben.", "Ja, eine Informantin hat mir die Unterlagen gezeigt. Ich habe ihnen sie gestern dem Kollegen aus der Wirtschaftsredaktion gegeben.", "Ja, eine Informantin hat die Unterlagen mir gezeigt. Ich habe sie gestern dem Kollegen aus der Wirtschaftsredaktion gegeben."], en: "Yes, an informant showed me the documents. I gave them to the colleague from the business desk yesterday.", fr: "Oui, une informatrice m'a montré les documents. Je les ai remis hier au collègue du service économie.", why: "Pronoun before noun (mir die Unterlagen); accusative pronoun before dative noun (sie dem Kollegen).", why_fr: "Pronom avant le nom (mir die Unterlagen) ; pronom à l'accusatif avant le nom au datif (sie dem Kollegen)." },
      { p: "Gut. Und der Quellenschutz?", en: "Good. And protecting the source?", fr: "Bien. Et la protection de la source ?" },
      { y: ["Ihren Namen nennen wir natürlich nicht. Das habe ich ihr versprochen.", "Ihren Namen wir nennen natürlich nicht. Das habe ich ihr versprochen.", "Ihren Namen nennen wir natürlich nicht. Das habe ich versprochen ihr."], en: "Of course we won't name her. I promised her that.", fr: "Son nom, nous ne le citerons évidemment pas. Je le lui ai promis.", why: "Object in the Vorfeld; dative pronoun in the Mittelfeld.", why_fr: "Complément dans le Vorfeld ; pronom au datif dans le Mittelfeld." },
      { p: "Einverstanden. Dann machen wir die Brücke zum Aufmacher.", en: "Agreed. Then the bridge will be our lead story.", fr: "D'accord. Alors le pont fera notre ouverture." },
      { y: ["Danke. Den Text schicke ich Ihnen bis drei Uhr, mit einem Kommentar dazu.", "Danke. Den Text ich schicke Ihnen bis drei Uhr, mit einem Kommentar dazu.", "Danke. Den Text schicke ich bis drei Uhr Ihnen, mit einem Kommentar dazu ihn."], en: "Thank you. I'll send you the text by three o'clock, with a commentary.", fr: "Merci. Je vous envoie le texte d'ici trois heures, avec un commentaire.", why: "Object in the Vorfeld, then verb, subject and the pronoun Ihnen.", why_fr: "Complément dans le Vorfeld, puis le verbe, le sujet et le pronom Ihnen." }
    ] },
  { id: "pressegespraech", lesson: 117, level: "C1", icon: "mic", partner: "Frau Marquardt", role: "an investigative journalist", role_fr: "une journaliste d'investigation",
    title: "Interviewing a journalist", title_fr: "Interviewer une journaliste",
    setting: "For your university radio, you interview Frau Marquardt, an (invented) investigative journalist, about her work and the pressures on it.", setting_fr: "Pour la radio de ton université, tu interviewes Frau Marquardt, une journaliste d'investigation (inventée), sur son travail et les pressions qu'elle subit.",
    turns: [
      { p: "Hallo, schön, dass ich hier sein darf.", en: "Hello, nice to be here.", fr: "Bonjour, ravie d'être ici." },
      { y: ["Danke, dass Sie gekommen sind. Wie sind Sie zum investigativen Journalismus gekommen?", "Danke, dass Sie gekommen sind. Wie sind Sie zum investigative Journalismus gekommen?", "Danke, dass Sie sind gekommen. Wie sind Sie zum investigativen Journalismus gekommen?"], en: "Thank you for coming. How did you come to investigative journalism?", fr: "Merci d'être venue. Comment en êtes-vous venue au journalisme d'investigation ?", why: "An open W-question; zum investigativen (dative).", why_fr: "Une question ouverte en W ; zum investigativen (datif)." },
      { p: "Eher zufällig. Bei einer Recherche über Mieten bin ich auf Ungereimtheiten gestoßen.", en: "More by chance. While researching rents, I came across inconsistencies.", fr: "Plutôt par hasard. En enquêtant sur les loyers, je suis tombée sur des incohérences." },
      { y: ["Wie meinen Sie das genau? Können Sie ein Beispiel nennen?", "Was meinen Sie das genau? Können Sie ein Beispiel nennen?", "Wie meinen Sie das genau? Können Sie ein Beispiel geben nennen?"], en: "What exactly do you mean? Can you give an example?", fr: "Que voulez-vous dire exactement ? Pouvez-vous donner un exemple ?", why: "Wie meinen Sie das? + ein Beispiel nennen.", why_fr: "Wie meinen Sie das? + ein Beispiel nennen." },
      { p: "Ein Vermieter hatte dieselbe Wohnung gleichzeitig an drei Familien vermietet.", en: "A landlord had let the same flat to three families at the same time.", fr: "Un propriétaire avait loué le même appartement à trois familles en même temps." },
      { y: ["Unglaublich. Inwiefern hat sich Ihre Arbeit seitdem durch die sozialen Medien verändert?", "Unglaublich. Wiefern hat sich Ihre Arbeit seitdem durch die sozialen Medien verändert?", "Unglaublich. Inwiefern Ihre Arbeit hat sich seitdem durch die sozialen Medien verändert?"], en: "Incredible. In what way has your work changed since then because of social media?", fr: "Incroyable. Dans quelle mesure votre travail a-t-il changé depuis à cause des réseaux sociaux ?", why: "inwiefern + verb second.", why_fr: "inwiefern + verbe en deuxième position." },
      { p: "Nun ja, es gibt viele Vorteile, aber auch Nachteile.", en: "Well, there are many advantages, but also disadvantages.", fr: "Eh bien, il y a beaucoup d'avantages, mais aussi des inconvénients." },
      { y: ["Lassen Sie mich da noch einmal nachhaken: Welche Nachteile meinen Sie konkret?", "Lassen Sie mich da noch einmal nachgehakt: Welche Nachteile meinen Sie konkret?", "Lassen Sie mir da noch einmal nachhaken: Welche Nachteile meinen Sie konkret?"], en: "Let me press you on that: which disadvantages do you mean, specifically?", fr: "Permettez-moi d'insister : à quels inconvénients pensez-vous concrètement ?", why: "lassen + accusative (mich) + infinitive.", why_fr: "lassen + accusatif (mich) + infinitif." },
      { p: "Vor allem Hassnachrichten. Nach einem Artikel bekam ich Hunderte davon.", en: "Mainly hate messages. After one article I received hundreds of them.", fr: "Surtout des messages haineux. Après un article, j'en ai reçu des centaines." },
      { y: ["Das tut mir leid. Zum Schluss noch eine persönliche Frage: Was gibt Ihnen die Kraft weiterzumachen?", "Das tut mir leid. Zum Schluss noch eine persönliche Frage: Was gibt Ihnen die Kraft weiter zu machen machen?", "Das tut mich leid. Zum Schluss noch eine persönliche Frage: Was gibt Ihnen die Kraft weiterzumachen?"], en: "I'm sorry to hear that. Finally, a personal question: what gives you the strength to carry on?", fr: "Ça doit être très dur. Pour finir, une question personnelle : qu'est-ce qui vous donne la force de continuer ?", why: "Das tut mir leid; separable: weiterzumachen.", why_fr: "Das tut mir leid ; séparable : weiterzumachen." }
    ] }
  );

  W.READINGS.push({
    id: "spiegelaffaere", level: "C1", icon: "book-open", title: "Die Spiegel-Affäre: als die Pressefreiheit auf dem Spiel stand", genre: "History",
    intro: "In 1962, police searched the offices of a news magazine and arrested its publisher. The scandal became a turning point for press freedom in West Germany.",
    intro_fr: "En 1962, la police perquisitionne les locaux d'un magazine d'information et arrête son éditeur. Le scandale devient un tournant pour la liberté de la presse en Allemagne de l'Ouest.",
    paragraphs: [
      { de: "Im Oktober 1962 veröffentlichte das Nachrichtenmagazin „Der Spiegel“ einen Artikel mit dem Titel „Bedingt abwehrbereit“. Darin ging es um ein NATO-Manöver, das Schwächen der Bundeswehr offengelegt haben sollte. Die Regierung reagierte heftig: Den Journalisten wurde Landesverrat vorgeworfen.", en: "In October 1962, the news magazine “Der Spiegel” published an article entitled “Conditionally ready for defence”. It dealt with a NATO exercise that was said to have exposed weaknesses in the Bundeswehr. The government reacted strongly: the journalists were accused of treason.", fr: "En octobre 1962, le magazine d'information « Der Spiegel » publie un article intitulé « Bedingt abwehrbereit » (« Prêt à se défendre, sous conditions »). Il y est question d'une manœuvre de l'OTAN qui aurait révélé des faiblesses de la Bundeswehr. Le gouvernement réagit violemment : les journalistes sont accusés de trahison." },
      { de: "Ab dem 26. Oktober durchsuchte die Polizei die Redaktionsräume in Hamburg, und zwar wochenlang. Der Herausgeber Rudolf Augstein wurde verhaftet und verbrachte 103 Tage in Untersuchungshaft. Eine solche Durchsuchung einer Redaktion hatte es in der jungen Bundesrepublik noch nicht gegeben.", en: "From 26 October, police searched the editorial offices in Hamburg, for weeks on end. The publisher Rudolf Augstein was arrested and spent 103 days in custody. Such a search of a newsroom had never happened before in the young Federal Republic.", fr: "À partir du 26 octobre, la police perquisitionne les locaux de la rédaction à Hambourg, pendant des semaines. L'éditeur Rudolf Augstein est arrêté et passe 103 jours en détention provisoire. Une telle perquisition dans une rédaction ne s'était encore jamais vue dans la jeune République fédérale." },
      { de: "Bald stellte sich heraus, dass Verteidigungsminister Franz Josef Strauß eine größere Rolle gespielt hatte, als er dem Bundestag gegenüber zugegeben hatte. Dies löste eine Regierungskrise aus; Strauß musste das Kabinett verlassen. Gleichzeitig protestierten in vielen Städten Studierende und Intellektuelle für die Freiheit der Presse.", en: "It soon emerged that Defence Minister Franz Josef Strauß had played a bigger role than he had admitted to the Bundestag. This triggered a government crisis; Strauß had to leave the cabinet. At the same time, students and intellectuals in many cities protested for the freedom of the press.", fr: "Il apparaît bientôt que le ministre de la Défense Franz Josef Strauß a joué un rôle plus important qu'il ne l'avait admis devant le Bundestag. Cela déclenche une crise gouvernementale ; Strauß doit quitter le gouvernement. Au même moment, dans de nombreuses villes, étudiants et intellectuels manifestent pour la liberté de la presse." },
      { de: "1966 betonte das Bundesverfassungsgericht in seinem „Spiegel-Urteil“ die besondere Bedeutung einer freien Presse für die Demokratie. Heute gilt die Affäre als Wendepunkt: Letzteres zeigt sich auch daran, dass sie in fast jedem Geschichtsbuch über die Bundesrepublik vorkommt. Die Frage, wie weit der Staat bei Ermittlungen gegen Journalisten gehen darf, ist bis heute aktuell.", en: "In 1966, the Federal Constitutional Court stressed in its “Spiegel ruling” the special importance of a free press for democracy. Today the affair is regarded as a turning point: the latter can also be seen in the fact that it features in almost every history book about the Federal Republic. The question of how far the state may go in investigations against journalists is still relevant today.", fr: "En 1966, la Cour constitutionnelle fédérale souligne dans son « arrêt Spiegel » l'importance particulière d'une presse libre pour la démocratie. Aujourd'hui, l'affaire est considérée comme un tournant : ce dernier point se voit aussi au fait qu'elle figure dans presque tous les livres d'histoire consacrés à la République fédérale. La question de savoir jusqu'où l'État peut aller dans les enquêtes visant des journalistes reste d'actualité." }
    ],
    glossary: { "Nachrichtenmagazin": ["news magazine", "magazine d'information"], "Bedingt abwehrbereit": ["conditionally ready for defence", "prêt à se défendre, sous conditions"], "Manöver": ["(military) exercise", "manœuvre"], "Schwächen": ["weaknesses", "faiblesses"], "Bundeswehr": ["German armed forces", "armée allemande"], "offengelegt": ["exposed, revealed", "révélé"], "vorgeworfen": ["(vorwerfen) accused of", "(vorwerfen) reproché"], "durchsuchte": ["searched", "perquisitionna"], "Redaktionsräume": ["editorial offices", "locaux de la rédaction"], "Herausgeber": ["publisher", "éditeur"], "verhaftet": ["arrested", "arrêté"], "Untersuchungshaft": ["custody, pre-trial detention", "détention provisoire"], "stellte": ["(sich herausstellen) emerged", "(sich herausstellen) apparut"], "Verteidigungsminister": ["defence minister", "ministre de la Défense"], "zugegeben": ["admitted", "admis"], "Regierungskrise": ["government crisis", "crise gouvernementale"], "Kabinett": ["cabinet", "gouvernement"], "Intellektuelle": ["intellectuals", "intellectuels"], "Bundesverfassungsgericht": ["Federal Constitutional Court", "Cour constitutionnelle fédérale"], "Urteil": ["ruling, judgment", "arrêt, jugement"], "Wendepunkt": ["turning point", "tournant"], "Geschichtsbuch": ["history book", "livre d'histoire"], "vorkommt": ["(vorkommen) appears, features", "(vorkommen) figure, apparaît"], "Ermittlungen": ["investigations", "enquêtes"] },
    questions: [
      { q: "Worum ging es im Artikel „Bedingt abwehrbereit“?", o: ["Um ein NATO-Manöver und Schwächen der Bundeswehr", "Um einen Skandal in Hamburg", "Um die Pressefreiheit in anderen Ländern"], a: 0 },
      { q: "Was wurde den Journalisten vorgeworfen?", o: ["Landesverrat", "Steuerhinterziehung", "Falsche Zahlen"], a: 0 },
      { q: "Wie lange war Rudolf Augstein in Untersuchungshaft?", o: ["103 Tage", "Drei Wochen", "Ein Jahr"], a: 0 },
      { q: "Was stellte sich über Franz Josef Strauß heraus?", o: ["Er hatte eine größere Rolle gespielt, als er zugegeben hatte.", "Er hatte den Artikel selbst geschrieben.", "Er war gar nicht beteiligt."], a: 0 },
      { q: "Was betonte das Bundesverfassungsgericht 1966?", o: ["Die besondere Bedeutung einer freien Presse für die Demokratie", "Dass der Spiegel verboten werden müsse", "Dass Journalisten keine Quellen schützen dürfen"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-c1-5", unit: "c1-5", level: "C1", icon: "radio",
    title: "Gefangen in der Filterblase?", title_fr: "Prisonniers de la bulle de filtres ?",
    context: "A radio podcast. The host talks to a media researcher, Dr. Hofmann, about filter bubbles and how to get out of them.", context_fr: "Un podcast radio. L'animateur parle avec une chercheuse en médias, Dr. Hofmann, des bulles de filtres et de la façon d'en sortir.",
    words: [["der Medienforscher, - (die Medienforscherin)", "the media researcher", "le chercheur, la chercheuse en médias"], ["der Begriff, -e", "the term", "la notion, le terme"], ["bestätigen", "to confirm", "confirmer"], ["bewusst", "consciously, deliberately", "consciemment"], ["der Widerspruch, ¨-e", "the contradiction, the objection", "la contradiction"]],
    lines: [["Moderator", "Frau Dr. Hofmann, alle reden von Filterblasen. Woher kommt der Begriff eigentlich?", "de-DE"], ["Dr. Hofmann", "Bekannt gemacht hat ihn der amerikanische Autor Eli Pariser mit seinem Buch von 2011. Gemeint ist, dass Algorithmen uns vor allem Inhalte zeigen, die zu unseren bisherigen Klicks passen.", "de-DE"], ["Moderator", "Und das ist gefährlich?", "de-DE"], ["Dr. Hofmann", "Das kommt darauf an. Wer nur noch Meinungen sieht, die seine eigene bestätigen, hält diese irgendwann für die Meinung aller. Dadurch kann die Polarisierung zunehmen.", "de-DE"], ["Moderator", "Manche Forscher bezweifeln aber, dass die Blasen so dicht sind.", "de-DE"], ["Dr. Hofmann", "Das stimmt, und Letzteres finde ich wichtig: Die meisten Menschen nutzen mehrere Quellen. Die Gefahr liegt weniger in der Technik als in unserer Bequemlichkeit.", "de-DE"], ["Moderator", "Was raten Sie unseren Hörern?", "de-DE"], ["Dr. Hofmann", "Bewusst auch Medien zu lesen, die anderer Meinung sind, und Widerspruch auszuhalten. Genau das trainiert Medienkompetenz.", "de-DE"]],
    gist: ["Worum geht es in dem Gespräch?", ["Um Filterblasen und den Umgang damit", "Um ein neues soziales Netzwerk", "Um die Geschichte des Radios"]],
    detail: [["Wer hat den Begriff bekannt gemacht?", ["Der Autor Eli Pariser", "Dr. Hofmann", "Eine deutsche Zeitung"]], ["Warum können Filterblasen gefährlich sein?", ["Man hält die eigene Meinung für die Meinung aller.", "Sie kosten viel Geld.", "Sie löschen Nachrichten."]], ["Wo sieht Dr. Hofmann die größte Gefahr?", ["In unserer Bequemlichkeit", "In der Technik allein", "In den Zeitungen"]], ["Was rät sie den Hörern?", ["Bewusst auch Medien mit anderer Meinung zu lesen", "Keine Medien mehr zu nutzen", "Nur noch Radio zu hören"]]],
    decode: ["Wer nur noch Meinungen sieht, die seine eigene bestätigen, hält diese irgendwann für die Meinung aller.", "Das stimmt, und Letzteres finde ich wichtig"],
    tip: "Reference words like dies, Letzteres or dadurch point back to something said before. When you hear one, quickly ask yourself what it refers to: that's often where the argument turns.", tip_fr: "Les mots de reprise comme dies, Letzteres ou dadurch renvoient à quelque chose qui a été dit avant. Quand tu en entends un, demande-toi vite à quoi il renvoie : c'est souvent là que l'argument bascule."
  }]);

  W.PROMPTS.push({ id: "de-c1-5", level: "C1", q: "Halte einen Vortrag (etwa drei bis vier Minuten): „Brauchen wir strengere Regeln für soziale Netzwerke?“ Gliedere deinen Vortrag, nenne Beispiele (Hassrede, Desinformation, Jugendschutz) und wäge Freiheit und Schutz gegeneinander ab.", en: "Give a talk (about three to four minutes): “Do we need stricter rules for social networks?” Structure your talk, give examples (hate speech, disinformation, protecting young people) and weigh freedom against protection.", fr: "Fais un exposé (environ trois à quatre minutes) : « Faut-il des règles plus strictes pour les réseaux sociaux ? » Structure ton exposé, donne des exemples (discours de haine, désinformation, protection des jeunes) et pèse liberté et protection.", time: 240,
    phrases: ["Mein Vortrag gliedert sich in…", "Gerade bei … zeigt sich, dass…", "Letzteres ist besonders wichtig, weil…", "Dem steht entgegen, dass…", "Abschließend lässt sich festhalten, dass…"],
    model: "Mein Vortrag gliedert sich in drei Teile: die Probleme, die Gefahren zu strenger Regeln und ein Fazit. Soziale Netzwerke haben die Öffentlichkeit grundlegend verändert. Jeder kann heute ein großes Publikum erreichen, und das ist zunächst ein Gewinn für die Meinungsfreiheit. Gerade bei Hassrede und Desinformation zeigt sich jedoch, dass die Plattformen ihre Verantwortung oft nicht ernst genug nehmen. Hasskommentare bleiben tagelang stehen, und Falschmeldungen erreichen in kurzer Zeit eine enorme Reichweite. Besonders problematisch ist dies für Jugendliche; Letzteres ist wichtig, weil sie viele Stunden täglich online verbringen. Dem steht entgegen, dass zu strenge Regeln auch legitime Meinungen unterdrücken könnten. Wer entscheidet, was eine Falschmeldung ist? Eine solche Macht sollte weder allein bei Konzernen noch allein beim Staat liegen. Abschließend lässt sich festhalten, dass wir klare Regeln für das Löschen illegaler Inhalte brauchen, zugleich aber mehr Medienkompetenz, damit Nutzerinnen und Nutzer selbst kritischer werden." });

  W.WRITING_GUIDE["c1-5"] = { genre: "An argued text (C1)", genre_fr: "Un texte argumenté (C1)",
    plan: [["A lead-in and your thesis.", "Une amorce et ta thèse."], ["An argument for, with an example.", "Un argument pour, avec un exemple."], ["The opposing view.", "Le point de vue opposé."], ["Your answer, using reference words for cohesion.", "Ta réponse, avec des mots de reprise pour la cohérence."], ["A conclusion with a proposal.", "Une conclusion avec une proposition."]],
    marks: [["Täglich werden in sozialen Netzwerken", "a lead-in", "une amorce"], ["Meines Erachtens", "the thesis", "la thèse"], ["Ein Beispiel", "an example", "un exemple"], ["Kritiker halten dem entgegen", "the opposing view", "le point de vue opposé"], ["Letzteres", "a reference word", "un mot de reprise"], ["Alles in allem", "the conclusion", "la conclusion"]] };

  /* Atelier de langue : champs allemands d'abord, puis anglais et français (voir localize.js). */
  W.LEXIS = W.LEXIS || {};
  W.LEXIS["c1-5"] = {
    colloc: [
      ["Recherchen anstellen", "to carry out investigations", "mener des recherches", "Die Journalistin hat monatelang Recherchen angestellt.", "angestellt", ["gestellt", "gelegt"]],
      ["einen Skandal aufdecken", "to uncover a scandal", "révéler un scandale", "Die Zeitung hat einen Skandal aufgedeckt.", "aufgedeckt", ["abgedeckt", "zugedeckt"]],
      ["an die Öffentlichkeit gehen", "to go public", "rendre public, s'adresser au public", "Die Informantin ging an die Öffentlichkeit.", "ging", ["kam", "fuhr"]],
      ["eine Debatte entfachen", "to spark a debate", "déclencher un débat", "Der Artikel hat eine heftige Debatte entfacht.", "entfacht", ["entfernt", "entlassen"]],
      ["Vorwürfe erheben", "to make accusations", "porter des accusations", "Die Opposition erhob schwere Vorwürfe gegen den Minister.", "erhob", ["hob", "machte"]],
      ["seine Quellen schützen", "to protect one's sources", "protéger ses sources", "Journalisten müssen ihre Quellen schützen.", "schützen", ["schließen", "stützen"]],
      ["ein Interview führen", "to conduct an interview", "mener une interview", "Sie führte ein Interview mit der Ministerin.", "führte", ["leitete", "hielt"]],
      ["Einfluss nehmen auf", "to exert influence on", "exercer une influence sur", "Die Regierung versuchte, Einfluss auf die Berichterstattung zu nehmen.", "nehmen", ["machen", "geben"]],
      ["eine Meldung dementieren", "to deny a report", "démentir une information", "Das Ministerium hat die Meldung dementiert.", "dementiert", ["demontiert", "dekoriert"]],
      ["ins Kreuzfeuer geraten", "to come under fire", "être sous le feu des critiques", "Der Sender geriet ins Kreuzfeuer der Kritik.", "geriet", ["ging", "fiel"]]
    ],
    wf: [
      ["Die ___ dauerte mehrere Monate. (RECHERCHIEREN)", "Recherche"],
      ["Die ___ des Skandals überraschte alle. (ENTHÜLLEN)", "Enthüllung"],
      ["Die Überschrift war sehr ___. (REISSEN)", "reißerisch"],
      ["Die ___ der Gesellschaft nimmt zu. (POLARISIEREN)", "Polarisierung"],
      ["Die ___ von Falschmeldungen ist ein Problem. (VERBREITEN)", "Verbreitung"],
      ["Die Berichterstattung war leider sehr ___. (SEITE)", "einseitig"],
      ["Die ___ der Presse ist gesetzlich geschützt. (ABHÄNGIG)", "Unabhängigkeit"],
      ["Viele Leser reagierten ___ auf den Artikel. (EMPÖREN)", "empört"]
    ],
    kwt: [
      ["Ich habe den Artikel nicht gelesen, aber das Interview schon.", "DEN", "___ habe ich nicht gelesen, das Interview aber schon.", "Den Artikel"],
      ["Sie gab das Buch ihrem Bruder.", "IHM", "Sie gab ___.", "es ihm"],
      ["Ein Präsident und ein Minister sprachen; der Minister kam zu spät.", "LETZTERER", "Ein Präsident und ein Minister sprachen; ___ zu spät.", "Letzterer kam|letzterer kam"],
      ["Er trug wieder den Anzug von gestern.", "DENSELBEN", "Er trug ___ wie gestern.", "denselben Anzug"],
      ["Die Journalisten deckten den Skandal auf.", "AUFGEDECKT", "Der Skandal ___.", "wurde von den Journalisten aufgedeckt"],
      ["Was genau meinen Sie damit?", "GENAU", "Wie meinen Sie ___?", "das genau"]
    ],
    idioms: [
      ["jemanden an den Pranger stellen", "jemanden öffentlich bloßstellen", "to pillory someone", "clouer quelqu'un au pilori", "Die Zeitung stellte den Politiker an den Pranger.", "an den Pranger"],
      ["sich in die Nesseln setzen", "sich durch eine Äußerung Ärger einhandeln", "to get into hot water", "se mettre dans le pétrin", "Mit diesem Post hat er sich in die Nesseln gesetzt.", "in die Nesseln"],
      ["Öl ins Feuer gießen", "einen Konflikt verschärfen", "to add fuel to the fire", "jeter de l'huile sur le feu", "Der Kommentar hat nur Öl ins Feuer gegossen.", "Öl ins Feuer"],
      ["die Wogen glätten", "einen Streit beruhigen", "to pour oil on troubled waters", "calmer les esprits", "Die Sprecherin versuchte, die Wogen zu glätten.", "die Wogen zu glätten"],
      ["aus einer Mücke einen Elefanten machen", "etwas stark übertreiben", "to make a mountain out of a molehill", "faire une montagne d'un rien", "Die Medien machen aus einer Mücke einen Elefanten.", "aus einer Mücke einen Elefanten"],
      ["hinter vorgehaltener Hand", "inoffiziell, im Vertrauen", "off the record", "en privé, sous le manteau", "Hinter vorgehaltener Hand geben viele Abgeordnete Fehler zu.", "Hinter vorgehaltener Hand"],
      ["das Gras wachsen hören", "aus kleinsten Anzeichen zu viel herauslesen", "to read too much into things", "voir des signes partout", "Manche Kommentatoren hören das Gras wachsen.", "das Gras wachsen"],
      ["in aller Munde sein", "überall bekannt sein und besprochen werden", "to be on everyone's lips", "être sur toutes les lèvres", "Seit dem Skandal ist ihr Name in aller Munde.", "in aller Munde"]
    ]
  };

  W.COURSE.push({ id: "c1-5", level: "C1", icon: "newspaper", title: "Media and the public sphere", title_fr: "Médias et espace public",
    intro: "Investigative journalism, filter bubbles, hate speech: in this unit, you'll learn how German word order lets you stress what matters (Den Artikel habe ich nicht gelesen), how reference words make a text flow (dies, Letzterer, derselbe), and how to conduct an interview and press for answers. You'll also read about the Spiegel affair of 1962, a turning point for press freedom in West Germany.",
    intro_fr: "Journalisme d'investigation, bulles de filtres, discours de haine : dans cette unité, tu vas apprendre comment l'ordre des mots allemand permet de mettre en relief l'essentiel (Den Artikel habe ich nicht gelesen), comment les mots de reprise font couler un texte (dies, Letzterer, derselbe), et comment mener une interview en relançant tes interlocuteurs. Tu liras aussi l'histoire de l'affaire du Spiegel en 1962, un tournant pour la liberté de la presse en Allemagne de l'Ouest.",
    can: ["Use the Vorfeld, Mittelfeld and Nachfeld to stress information", "Order pronouns and nouns correctly in the Mittelfeld", "Make a text cohesive with reference words", "Conduct an interview with open and follow-up questions", "Write an argued text on media and the public sphere (C1)"],
    can_fr: ["Employer le Vorfeld, le Mittelfeld et le Nachfeld pour mettre une information en relief", "Ordonner correctement pronoms et noms dans le Mittelfeld", "Donner sa cohérence à un texte avec des mots de reprise", "Mener une interview avec des questions ouvertes et des relances", "Écrire un texte argumenté sur les médias et l'espace public (C1)"],
    lessons: [115, 116, 117], vocab: ["oeffentlichkeitDE", "netzoeffentlichkeitDE"], reading: "spiegelaffaere", prompt: "de-c1-5",
    writing: { task: "Write an argued text (220-260 words) on the question: “Should platforms be legally liable for hate comments?” Include a lead-in and thesis, an argument with an example, the opposing view, your answer using reference words, and a conclusion.", task_fr: "Écris un texte argumenté (220 à 260 mots) sur la question : « Les plateformes devraient-elles être juridiquement responsables des commentaires haineux ? » Avec une amorce et une thèse, un argument illustré d'un exemple, le point de vue opposé, ta réponse avec des mots de reprise, et une conclusion.", words: "220-260",
      tips: ["Täglich werden … veröffentlicht.", "Meines Erachtens…", "Ein Beispiel: …", "Kritiker halten dem entgegen, dass…", "Letzteres…"],
      checklist: ["I wrote a lead-in and a clear thesis", "I gave an argument with an example", "I presented the opposing view", "I used reference words (dies, Letzteres, ein solcher…)", "I wrote between 220 and 260 words"],
      checklist_fr: ["J'ai écrit une amorce et une thèse claire", "J'ai donné un argument illustré d'un exemple", "J'ai présenté le point de vue opposé", "J'ai employé des mots de reprise (dies, Letzteres, ein solcher…)", "J'ai écrit entre 220 et 260 mots"],
      model: "Täglich werden in sozialen Netzwerken unzählige Kommentare veröffentlicht, darunter viele, die Menschen beleidigen, bedrohen oder herabsetzen. Wer trägt dafür die Verantwortung? Meines Erachtens sollten die Plattformen stärker haften als bisher, allerdings nach klaren und überprüfbaren Regeln.\n\nFür eine Haftung spricht vor allem, dass die Plattformen mit der Aufmerksamkeit ihrer Nutzer Geld verdienen. Je mehr Empörung ein Beitrag auslöst, desto häufiger wird er geteilt, und desto mehr Werbung wird angezeigt. Ein Beispiel: Eine Lokalpolitikerin aus meiner Region erhielt nach einem Interview hunderte Hassnachrichten. Gelöscht wurden sie erst nach Wochen, und dies auch nur, nachdem sie Anzeige erstattet hatte. Ein solches Vorgehen ist für die Betroffenen unzumutbar. Viele ziehen sich danach ganz aus der Öffentlichkeit zurück.\n\nKritiker halten dem entgegen, dass eine strenge Haftung zu übertriebenem Löschen führen könnte. Aus Angst vor Strafen würden die Unternehmen im Zweifel auch zulässige, aber unbequeme Meinungen entfernen. Letzteres wäre in der Tat ein ernstes Problem für die Meinungsfreiheit, die gerade in einer Demokratie unverzichtbar ist.\n\nDieses Risiko lässt sich jedoch begrenzen. Die Plattformen müssten nicht jeden Beitrag vorab prüfen, sondern gemeldete Inhalte innerhalb einer festen Frist bearbeiten und ihre Entscheidungen begründen. Wer sich zu Unrecht gelöscht fühlt, sollte zudem Widerspruch einlegen können.\n\nAlles in allem halte ich eine Haftung mit klaren Fristen und einem fairen Beschwerdeverfahren für den besten Weg. So würden die Plattformen in die Pflicht genommen, ohne dass die Meinungsfreiheit Schaden nähme." } });
})();
