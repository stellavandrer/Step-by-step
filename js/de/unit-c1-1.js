/* Cours d'allemand, unité C1-1 « Language and communication / Langue et communication » : le discours indirect à
   tous les temps (er habe gesagt, sie werde kommen) avec les déplacements de pronoms et de repères temporels, et
   les verbes introducteurs nuancés (einräumen, bestreiten, versichern) ; les registres de langue (bekommen /
   erhalten / kriegen) ; le texte argumenté de niveau C1. Première unité du C1. Personnages fictifs, prénoms
   allemands ; le maire et l'interview du dialogue sont inventés.
   Faits vérifiables seulement : Konrad Duden (1829-1911) publie en 1880 son « Vollständiges Orthographisches
   Wörterbuch der deutschen Sprache » ; la conférence orthographique de Berlin (1901) fixe des règles communes ;
   en 1955, une décision des ministres de l'Éducation des Länder fait du Duden la référence en cas de doute ;
   réforme de l'orthographe adoptée en 1996, en vigueur le 1er août 1998, avec une période de transition jusqu'en
   2005 et une révision en 2006 ; le Conseil pour l'orthographe allemande (Rat für deutsche Rechtschreibung) existe
   depuis 2004 ; l'allemand standard et les dialectes coexistent ; le bas allemand (Niederdeutsch) est reconnu
   comme langue régionale au titre de la Charte européenne des langues régionales. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "spracheC1DE", icon: "languages", title: "Language and usage", title_fr: "Langue et usage", level: "C1", words: [
    ["die Rechtschreibung", "spelling, orthography", "l'orthographe", "Die Rechtschreibung wurde 1996 reformiert."],
    ["die Zeichensetzung", "punctuation", "la ponctuation", "Bei der Zeichensetzung machen auch Muttersprachler Fehler."],
    ["der Wortschatz", "vocabulary", "le vocabulaire", "Lesen ist der beste Weg, den Wortschatz zu erweitern."],
    ["die Ausdrucksweise, -n", "the way of expressing oneself", "la façon de s'exprimer", "Ihre Ausdrucksweise ist sehr gewählt."],
    ["die Mundart, -en", "the dialect", "le dialecte, le parler régional", "Im Dorf spricht man noch Mundart."],
    ["die Umgangssprache", "colloquial language", "la langue familière", "In der Umgangssprache sagt man oft „kriegen“."],
    ["umgangssprachlich", "colloquial", "familier", "Dieses Wort ist zu umgangssprachlich für einen Bewerbungsbrief."],
    ["gehoben", "elevated, formal", "soutenu", "„Erhalten“ klingt gehobener als „bekommen“."],
    ["die Standardsprache", "standard language", "la langue standard", "In den Nachrichten wird Standardsprache gesprochen."],
    ["der Anglizismus, Anglizismen", "the anglicism", "l'anglicisme", "„Meeting“ ist ein typischer Anglizismus."],
    ["der Fachbegriff, -e", "the technical term", "le terme technique", "Erklären Sie bitte die Fachbegriffe."],
    ["mehrdeutig", "ambiguous", "ambigu", "Der Satz ist mehrdeutig und sollte umformuliert werden."],
    ["eindeutig", "clear, unambiguous", "clair, sans équivoque", "Die Antwort war eindeutig: Nein."],
    ["sprachlich", "linguistic(ally)", "linguistique(ment)", "Sprachlich ist der Text sehr anspruchsvoll."],
    ["das Sprachgefühl", "feel for language", "le sens de la langue", "Sie hat ein feines Sprachgefühl."],
    ["die Verständigung", "communication, understanding", "la compréhension mutuelle", "Trotz der Dialekte klappte die Verständigung gut."]
  ] },
  { id: "kommunikationC1DE", icon: "messages-square", title: "Reporting and discussing", title_fr: "Rapporter et discuter", level: "C1", words: [
    ["einräumen", "to concede, to admit", "concéder, reconnaître", "Der Minister räumte ein, Fehler gemacht zu haben."],
    ["bestreiten", "to deny, to dispute", "contester, nier", "Sie bestreitet, davon gewusst zu haben."],
    ["versichern", "to assure", "assurer, garantir", "Er versicherte, das Problem werde bald gelöst."],
    ["andeuten", "to hint at, to imply", "laisser entendre", "Sie deutete an, dass sie kündigen wolle."],
    ["unterstellen", "to insinuate, to impute", "insinuer, prêter (une intention)", "Unterstellen Sie mir bitte nichts!"],
    ["sich äußern (zu + Dat.)", "to comment (on)", "s'exprimer (sur)", "Die Firma wollte sich nicht zu den Vorwürfen äußern."],
    ["die Äußerung, -en", "the statement, the remark", "la déclaration, le propos", "Seine Äußerung sorgte für Empörung."],
    ["verschweigen", "to keep quiet about, to conceal", "passer sous silence, taire", "Er hat uns die Wahrheit verschwiegen."],
    ["die Anspielung, -en", "the allusion, the hint", "l'allusion", "Die Anspielung auf den Skandal verstand jeder."],
    ["der Tonfall", "the tone of voice", "le ton", "Am Tonfall merkte ich, dass sie verärgert war."],
    ["die Überzeugungskraft", "persuasiveness", "la force de conviction", "Seiner Rede fehlte es an Überzeugungskraft."],
    ["die Körpersprache", "body language", "le langage corporel", "Die Körpersprache verrät oft mehr als Worte."],
    ["der Einwand, ¨-e", "the objection", "l'objection", "Gibt es Einwände gegen den Vorschlag?"],
    ["missverstehen", "to misunderstand", "mal comprendre", "Bitte missverstehen Sie mich nicht."],
    ["sich verständigen", "to communicate, to make oneself understood", "se faire comprendre, communiquer", "Wir haben uns auf Englisch verständigt."],
    ["schlagfertig", "quick-witted", "qui a la répartie", "Sie ist so schlagfertig, dass ihr niemand widerspricht."]
  ] });

  W.LESSONS.push(
  {
    id: 103, level: "C1", icon: "quote",
    title: "Er sagte, er habe es gewusst: indirect speech in all tenses", title_fr: "Er sagte, er habe es gewusst : le discours indirect à tous les temps",
    subtitle: "Past and future in reported speech, shifting pronouns and time words, and verbs that add nuance.", subtitle_fr: "Le passé et le futur au discours indirect, les déplacements de pronoms et de repères temporels, et les verbes qui nuancent.",
    body: `
<h2>Three times in the Konjunktiv I</h2>
<table>
<tr><th>Direct speech</th><th>Reported speech</th></tr>
<tr><td><s-de>„Ich bin müde.“</s-de> (present)</td><td><s-de>Er sagte, er sei müde.</s-de></td></tr>
<tr><td><s-de>„Ich war / bin / wäre gestern krank gewesen.“</s-de> (any past)</td><td><s-de>Er sagte, er sei krank gewesen.</s-de></td></tr>
<tr><td><s-de>„Ich werde kommen.“</s-de> (future)</td><td><s-de>Sie sagte, sie werde kommen.</s-de></td></tr>
</table>
<p>All past tenses become one form: <s-de>habe / sei</s-de> + participle. When the Konjunktiv I looks like the indicative (<s-de>sie haben, sie werden</s-de>), use the Konjunktiv II: <s-de>Sie sagten, sie hätten nichts gewusst</s-de> · <s-de>sie würden kommen</s-de>.</p>
<h2>Shifting the point of view</h2>
<p>Reported speech changes the speaker's perspective: pronouns (<s-de>ich → er / sie</s-de>, <s-de>wir → sie</s-de>), place (<s-de>hier → dort</s-de>) and time, when you report later: <s-de>heute → an diesem Tag</s-de>, <s-de>gestern → am Vortag</s-de>, <s-de>morgen → am nächsten Tag</s-de>.</p>
<p><s-de>„Ich komme morgen hierher“, sagte sie.</s-de> → <s-de>Sie sagte, sie komme am nächsten Tag dorthin.</s-de></p>
<h2>Verbs that add nuance</h2>
<p>The verb you choose shows how you see the statement: <s-de>behaupten</s-de> (claim, with doubt), <s-de>betonen</s-de> (stress), <s-de>einräumen</s-de> (concede), <s-de>bestreiten</s-de> (deny), <s-de>versichern</s-de> (assure), <s-de>andeuten</s-de> (hint). A request in formal style: <s-de>Er bat, man möge ihn zurückrufen.</s-de></p>
<div class="tip">In newspapers you'll often find the reporting verb only once, then a whole paragraph in the Konjunktiv I: the subjunctive alone shows that the text is still reporting. That's typical of C1 reading texts.</div>
`,
    body_fr: `
<h2>Trois temps au Konjunktiv I</h2>
<table>
<tr><th>Discours direct</th><th>Discours indirect</th></tr>
<tr><td><s-de>„Ich bin müde.“</s-de> (présent)</td><td><s-de>Er sagte, er sei müde.</s-de></td></tr>
<tr><td><s-de>„Ich war / bin / wäre gestern krank gewesen.“</s-de> (tout passé)</td><td><s-de>Er sagte, er sei krank gewesen.</s-de></td></tr>
<tr><td><s-de>„Ich werde kommen.“</s-de> (futur)</td><td><s-de>Sie sagte, sie werde kommen.</s-de></td></tr>
</table>
<p>Tous les temps du passé se ramènent à une seule forme : <s-de>habe / sei</s-de> + participe. Quand le Konjunktiv I ressemble à l'indicatif (<s-de>sie haben, sie werden</s-de>), on prend le Konjunktiv II : <s-de>Sie sagten, sie hätten nichts gewusst</s-de> · <s-de>sie würden kommen</s-de>.</p>
<h2>Changer de point de vue</h2>
<p>Le discours indirect déplace le point de vue : les pronoms (<s-de>ich → er / sie</s-de>, <s-de>wir → sie</s-de>), le lieu (<s-de>hier → dort</s-de>) et le temps, quand on rapporte plus tard : <s-de>heute → an diesem Tag</s-de>, <s-de>gestern → am Vortag</s-de>, <s-de>morgen → am nächsten Tag</s-de>. Exactement comme en français (« demain » → « le lendemain »).</p>
<p><s-de>„Ich komme morgen hierher“, sagte sie.</s-de> → <s-de>Sie sagte, sie komme am nächsten Tag dorthin.</s-de></p>
<h2>Des verbes qui nuancent</h2>
<p>Le verbe choisi montre comment tu considères l'affirmation : <s-de>behaupten</s-de> (prétendre, avec doute), <s-de>betonen</s-de> (souligner), <s-de>einräumen</s-de> (concéder), <s-de>bestreiten</s-de> (contester), <s-de>versichern</s-de> (assurer), <s-de>andeuten</s-de> (laisser entendre). Une demande en style soutenu : <s-de>Er bat, man möge ihn zurückrufen.</s-de></p>
<div class="tip">Dans la presse, on trouve souvent le verbe introducteur une seule fois, puis tout un paragraphe au Konjunktiv I : le subjonctif suffit à montrer que le texte rapporte encore des propos. C'est typique des textes de lecture du C1.</div>
`,
    examples: [
      ["Er sagte, er sei am Vortag krank gewesen.", "He said he had been ill the day before.", "Il a dit qu'il avait été malade la veille."],
      ["Sie versicherte, sie werde das Problem bis Freitag lösen.", "She assured us she would solve the problem by Friday.", "Elle a assuré qu'elle réglerait le problème d'ici vendredi."],
      ["Die Forscher räumten ein, sie hätten die Daten nicht vollständig geprüft.", "The researchers conceded they had not fully checked the data.", "Les chercheurs ont reconnu ne pas avoir entièrement vérifié les données."],
      ["Der Sprecher bestritt, dass es Probleme gegeben habe.", "The spokesperson denied that there had been any problems.", "Le porte-parole a nié qu'il y ait eu des problèmes."],
      ["Sie sagte, sie komme am nächsten Tag dorthin.", "She said she would come there the next day.", "Elle a dit qu'elle y viendrait le lendemain."],
      ["Der Kunde bat, man möge ihn so bald wie möglich zurückrufen.", "The customer asked to be called back as soon as possible.", "Le client a demandé qu'on le rappelle dès que possible."],
      ["Die Ministerin deutete an, das Gesetz könne sich noch ändern.", "The minister hinted that the law might still change.", "La ministre a laissé entendre que la loi pourrait encore changer."]
    ],
    quiz: [
      { q: "„Ich habe nichts gesehen.“ → Er sagte, er ___ nichts gesehen.", q_fr: "« Ich habe nichts gesehen. » → Er sagte, er ___ nichts gesehen.", o: ["habe", "hat", "hatte"], a: 0, ex: "Past in the Konjunktiv I: habe + participle.", ex_fr: "Passé au Konjunktiv I : habe + participe." },
      { q: "„Wir werden pünktlich sein.“ → Sie sagten, sie ___ pünktlich sein.", q_fr: "« Wir werden pünktlich sein. » → Sie sagten, sie ___ pünktlich sein.", o: ["würden", "werden", "werde"], a: 0, ex: "sie werden = indicative, so Konjunktiv II: würden.", ex_fr: "sie werden = indicatif, donc Konjunktiv II : würden." },
      { q: "„Ich komme morgen.“ (reported a week later) → Sie sagte, sie komme ___.", q_fr: "« Ich komme morgen. » (rapporté une semaine plus tard) → Sie sagte, sie komme ___.", o: ["am nächsten Tag", "morgen", "gestern"], a: 0, ex: "morgen → am nächsten Tag.", ex_fr: "morgen → am nächsten Tag (le lendemain)." },
      { q: "Which verb means “to concede”?", q_fr: "Quel verbe veut dire « concéder » ?", o: ["einräumen", "bestreiten", "unterstellen"], a: 0, ex: "einräumen = to concede.", ex_fr: "einräumen = concéder." },
      { q: "A formal reported request:", q_fr: "Une demande rapportée en style soutenu :", o: ["Er bat, man möge ihn anrufen.", "Er bat, man mag ihn anrufen.", "Er bat, ruft ihn an."], a: 0, ex: "mögen in the Konjunktiv I: möge.", ex_fr: "mögen au Konjunktiv I : möge." }
    ]
  },
  {
    id: 104, level: "C1", icon: "sliders-horizontal",
    title: "Kriegen, bekommen, erhalten: registers", title_fr: "Kriegen, bekommen, erhalten : les registres de langue",
    subtitle: "Choose your words for the situation: colloquial, neutral or formal.", subtitle_fr: "Choisir ses mots selon la situation : familier, neutre ou soutenu.",
    body: `
<h2>Three levels</h2>
<table>
<tr><th>Colloquial</th><th>Neutral</th><th>Formal</th></tr>
<tr><td><s-de>kriegen</s-de></td><td><s-de>bekommen</s-de></td><td><s-de>erhalten</s-de></td></tr>
<tr><td><s-de>loslegen</s-de></td><td><s-de>anfangen</s-de></td><td><s-de>beginnen</s-de></td></tr>
<tr><td><s-de>holen</s-de></td><td><s-de>kaufen</s-de></td><td><s-de>erwerben</s-de></td></tr>
<tr><td><s-de>hin, kaputt</s-de></td><td><s-de>kaputt</s-de></td><td><s-de>defekt</s-de></td></tr>
<tr><td><s-de>echt, voll</s-de></td><td><s-de>sehr</s-de></td><td><s-de>äußerst</s-de></td></tr>
<tr><td><s-de>schuften</s-de></td><td><s-de>arbeiten</s-de></td><td><s-de>tätig sein</s-de></td></tr>
</table>
<h2>Colloquial grammar</h2>
<p>Spoken German shortens and simplifies: <s-de>Ich hab's</s-de> (habe es), <s-de>'ne Frage</s-de> (eine), <s-de>wegen dem Wetter</s-de> (dative instead of genitive), and <s-de>weil</s-de> with main-clause order after a pause: <s-de>…, weil – ich hab keine Zeit.</s-de> All very common, but avoid them in formal writing.</p>
<h2>Formal style</h2>
<p>Formal German prefers nouns and precise verbs: <s-de>eine Entscheidung treffen</s-de> rather than <s-de>entscheiden</s-de>, <s-de>mitteilen</s-de> rather than <s-de>sagen</s-de>, <s-de>sich befinden</s-de> rather than <s-de>sein</s-de>: <s-de>Das Büro befindet sich im zweiten Stock.</s-de></p>
<div class="tip">C1 doesn't mean always writing formally, but choosing the right register on purpose. A text message to a friend in perfect formal German sounds as strange as a job application in slang.</div>
`,
    body_fr: `
<h2>Trois niveaux</h2>
<table>
<tr><th>Familier</th><th>Neutre</th><th>Soutenu</th></tr>
<tr><td><s-de>kriegen</s-de></td><td><s-de>bekommen</s-de></td><td><s-de>erhalten</s-de></td></tr>
<tr><td><s-de>loslegen</s-de></td><td><s-de>anfangen</s-de></td><td><s-de>beginnen</s-de></td></tr>
<tr><td><s-de>holen</s-de></td><td><s-de>kaufen</s-de></td><td><s-de>erwerben</s-de></td></tr>
<tr><td><s-de>hin, kaputt</s-de></td><td><s-de>kaputt</s-de></td><td><s-de>defekt</s-de></td></tr>
<tr><td><s-de>echt, voll</s-de></td><td><s-de>sehr</s-de></td><td><s-de>äußerst</s-de></td></tr>
<tr><td><s-de>schuften</s-de></td><td><s-de>arbeiten</s-de></td><td><s-de>tätig sein</s-de></td></tr>
</table>
<h2>La grammaire familière</h2>
<p>L'allemand parlé raccourcit et simplifie : <s-de>Ich hab's</s-de> (habe es), <s-de>'ne Frage</s-de> (eine), <s-de>wegen dem Wetter</s-de> (datif au lieu du génitif), et <s-de>weil</s-de> avec l'ordre de la principale après une pause : <s-de>…, weil – ich hab keine Zeit.</s-de> Tout cela est très courant, mais à éviter à l'écrit soutenu.</p>
<h2>Le style soutenu</h2>
<p>L'allemand soutenu préfère les noms et les verbes précis : <s-de>eine Entscheidung treffen</s-de> plutôt que <s-de>entscheiden</s-de>, <s-de>mitteilen</s-de> plutôt que <s-de>sagen</s-de>, <s-de>sich befinden</s-de> plutôt que <s-de>sein</s-de> : <s-de>Das Büro befindet sich im zweiten Stock.</s-de></p>
<div class="tip">Le C1, ce n'est pas écrire toujours de façon soutenue, mais choisir le bon registre en connaissance de cause. Un SMS à un ami dans un allemand parfaitement soutenu paraît aussi étrange qu'une lettre de candidature en argot.</div>
`,
    examples: [
      ["Hast du meine Nachricht gekriegt?", "Did you get my message? (colloquial)", "T'as eu mon message ? (familier)"],
      ["Wir haben Ihre Bewerbung erhalten.", "We have received your application.", "Nous avons bien reçu votre candidature."],
      ["Die Firma hat das Grundstück im Jahr 2020 erworben.", "The company acquired the plot of land in 2020.", "L'entreprise a acquis le terrain en 2020."],
      ["Mein Handy ist hin.", "My phone's had it. (colloquial)", "Mon portable est mort. (familier)"],
      ["Das Gerät ist leider defekt.", "Unfortunately the device is faulty.", "L'appareil est malheureusement défectueux."],
      ["Ich hab's dir doch gesagt!", "I told you so! (colloquial)", "Je te l'avais bien dit ! (familier)"],
      ["Das Büro befindet sich im zweiten Stock.", "The office is located on the second floor.", "Le bureau se trouve au deuxième étage."]
    ],
    quiz: [
      { q: "The formal equivalent of “bekommen”:", q_fr: "L'équivalent soutenu de « bekommen » :", o: ["erhalten", "kriegen", "holen"], a: 0, ex: "kriegen (colloquial) – bekommen – erhalten (formal).", ex_fr: "kriegen (familier) – bekommen – erhalten (soutenu)." },
      { q: "Which sentence suits a formal letter?", q_fr: "Quelle phrase convient à une lettre formelle ?", o: ["Das Gerät ist leider defekt.", "Das Ding ist echt hin.", "Das Teil ist voll kaputt."], a: 0, ex: "defekt is the formal choice.", ex_fr: "defekt est le choix soutenu." },
      { q: "“wegen dem Wetter” is…", q_fr: "« wegen dem Wetter », c'est…", o: ["colloquial (formal: wegen des Wetters)", "the only correct form", "a dialect only used in Switzerland"], o_fr: ["familier (soutenu : wegen des Wetters)", "la seule forme correcte", "un dialecte uniquement suisse"], a: 0, ex: "Very common in speech; genitive in writing.", ex_fr: "Très courant à l'oral ; génitif à l'écrit." },
      { q: "The formal equivalent of “kaufen”:", q_fr: "L'équivalent soutenu de « kaufen » :", o: ["erwerben", "holen", "kriegen"], a: 0, ex: "erwerben = to acquire.", ex_fr: "erwerben = acquérir." },
      { q: "What does C1 mean for register?", q_fr: "Que signifie le C1 pour le registre ?", o: ["Choosing the right register on purpose", "Always writing formally", "Always using colloquial words"], o_fr: ["Choisir le bon registre en connaissance de cause", "Toujours écrire de façon soutenue", "Toujours employer des mots familiers"], a: 0, ex: "The right register for each situation.", ex_fr: "Le bon registre pour chaque situation." }
    ]
  },
  {
    id: 105, level: "C1", kind: "functional", icon: "pen-line",
    title: "Everyday German: writing an argued text at C1", title_fr: "L'allemand de tous les jours : le texte argumenté au niveau C1",
    subtitle: "A clear thesis, well-supported arguments, a fair counter-argument and a careful tone.", subtitle_fr: "Une thèse claire, des arguments étayés, un contre-argument loyal et un ton mesuré.",
    body: `
<h2>Structure</h2>
<table>
<tr><th>Part</th><th>German</th></tr>
<tr><td>lead-in and thesis</td><td><s-de>Kaum ein Thema wird derzeit so kontrovers diskutiert wie…</s-de> · <s-de>Ich vertrete die Auffassung, dass…</s-de></td></tr>
<tr><td>arguments with evidence</td><td><s-de>Dafür spricht zunächst, dass…</s-de> · <s-de>Dies lässt sich am Beispiel … verdeutlichen.</s-de></td></tr>
<tr><td>counter-argument</td><td><s-de>Zwar wird häufig eingewandt, dass…, doch…</s-de> · <s-de>Dieses Argument greift jedoch zu kurz, weil…</s-de></td></tr>
<tr><td>conclusion and outlook</td><td><s-de>Abschließend lässt sich festhalten, dass…</s-de> · <s-de>Es bleibt abzuwarten, ob…</s-de></td></tr>
</table>
<h2>Cohesion</h2>
<p>Link your sentences with words that refer back: <s-de>dies, diese Entwicklung, ein solcher Ansatz, Letzteres</s-de>. They avoid repetition and make the logic visible.</p>
<h2>A careful tone</h2>
<p>At C1, strong claims are softened: <s-de>Es ist davon auszugehen, dass…</s-de> · <s-de>Vieles deutet darauf hin, dass…</s-de> · <s-de>tendenziell, in gewisser Hinsicht, weitgehend</s-de>.</p>
<div class="tip">In exams such as the Goethe-Zertifikat C1, the main writing task is a structured argued text of a little over 200 words. What makes it C1: a clear line of argument, a counter-argument you take seriously, varied connectors and precise vocabulary, not long sentences for their own sake.</div>
`,
    body_fr: `
<h2>La structure</h2>
<table>
<tr><th>Partie</th><th>En allemand</th></tr>
<tr><td>amorce et thèse</td><td><s-de>Kaum ein Thema wird derzeit so kontrovers diskutiert wie…</s-de> · <s-de>Ich vertrete die Auffassung, dass…</s-de></td></tr>
<tr><td>arguments étayés</td><td><s-de>Dafür spricht zunächst, dass…</s-de> · <s-de>Dies lässt sich am Beispiel … verdeutlichen.</s-de></td></tr>
<tr><td>contre-argument</td><td><s-de>Zwar wird häufig eingewandt, dass…, doch…</s-de> · <s-de>Dieses Argument greift jedoch zu kurz, weil…</s-de></td></tr>
<tr><td>conclusion et ouverture</td><td><s-de>Abschließend lässt sich festhalten, dass…</s-de> · <s-de>Es bleibt abzuwarten, ob…</s-de></td></tr>
</table>
<h2>La cohésion</h2>
<p>Relie tes phrases avec des mots de reprise : <s-de>dies, diese Entwicklung, ein solcher Ansatz, Letzteres</s-de>. Ils évitent les répétitions et rendent la logique visible.</p>
<h2>Un ton mesuré</h2>
<p>Au C1, on nuance les affirmations fortes : <s-de>Es ist davon auszugehen, dass…</s-de> · <s-de>Vieles deutet darauf hin, dass…</s-de> · <s-de>tendenziell, in gewisser Hinsicht, weitgehend</s-de>.</p>
<div class="tip">Dans des examens comme le Goethe-Zertifikat C1, la principale épreuve écrite est un texte argumenté structuré d'un peu plus de 200 mots. Ce qui en fait un C1 : une ligne argumentative claire, un contre-argument pris au sérieux, des connecteurs variés et un vocabulaire précis, pas de longues phrases pour le plaisir.</div>
`,
    examples: [
      ["Kaum ein Thema wird derzeit so kontrovers diskutiert wie künstliche Intelligenz.", "Hardly any topic is currently debated as fiercely as artificial intelligence.", "Peu de sujets sont actuellement aussi débattus que l'intelligence artificielle."],
      ["Ich vertrete die Auffassung, dass Fremdsprachenunterricht unverzichtbar bleibt.", "I take the view that foreign language teaching remains indispensable.", "Je suis d'avis que l'enseignement des langues étrangères reste indispensable."],
      ["Dies lässt sich am Beispiel der Medizin verdeutlichen.", "This can be illustrated by the example of medicine.", "On peut l'illustrer par l'exemple de la médecine."],
      ["Zwar wird häufig eingewandt, dass Übersetzungsprogramme genügen, doch sie erfassen keine Zwischentöne.", "It's often objected that translation programs are enough, but they don't capture nuances.", "On objecte souvent que les logiciels de traduction suffisent, mais ils ne saisissent pas les nuances."],
      ["Dieses Argument greift jedoch zu kurz.", "This argument, however, falls short.", "Cet argument est toutefois un peu court."],
      ["Vieles deutet darauf hin, dass sich dieser Trend fortsetzt.", "There is much to suggest that this trend will continue.", "Tout porte à croire que cette tendance va se poursuivre."],
      ["Abschließend lässt sich festhalten, dass beide Seiten berechtigte Anliegen haben.", "In conclusion, it can be said that both sides have legitimate concerns.", "En conclusion, on peut retenir que les deux camps ont des préoccupations légitimes."]
    ],
    quiz: [
      { q: "A careful, C1-style way to state a probability:", q_fr: "Une façon mesurée, de niveau C1, d'exprimer une probabilité :", o: ["Es ist davon auszugehen, dass…", "Es ist total klar, dass…", "Jeder weiß, dass…"], a: 0, ex: "A hedged formulation.", ex_fr: "Une formulation nuancée." },
      { q: "To introduce and answer a counter-argument:", q_fr: "Pour introduire et réfuter un contre-argument :", o: ["Zwar wird häufig eingewandt, dass…, doch…", "Außerdem…", "Zum Schluss…"], a: 0, ex: "zwar …, doch…", ex_fr: "zwar …, doch…" },
      { q: "“This argument falls short.”", q_fr: "« Cet argument est un peu court. »", o: ["Dieses Argument greift zu kurz.", "Dieses Argument fällt zu kurz.", "Dieses Argument ist zu klein."], a: 0, ex: "zu kurz greifen.", ex_fr: "zu kurz greifen." },
      { q: "A word that refers back to the previous idea:", q_fr: "Un mot qui reprend l'idée précédente :", o: ["diese Entwicklung", "zunächst", "abschließend"], a: 0, ex: "Reference words build cohesion.", ex_fr: "Les mots de reprise créent la cohésion." },
      { q: "What makes an argued text C1?", q_fr: "Qu'est-ce qui fait d'un texte argumenté un C1 ?", o: ["A clear line of argument and a serious counter-argument", "Very long sentences", "As many rare words as possible"], o_fr: ["Une ligne argumentative claire et un contre-argument sérieux", "Des phrases très longues", "Le plus de mots rares possible"], a: 0, ex: "Clarity, nuance and precision.", ex_fr: "Clarté, nuance et précision." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    103: {
      gap: [["Er sagte, er ___ am Vortag krank gewesen.", "sei"], ["Sie versicherte, sie ___ das Problem bis Freitag lösen.", "werde"], ["Die Forscher räumten ein, sie ___ die Daten nicht geprüft.", "hätten"], ["„Ich komme morgen.“ → Sie sagte, sie komme am ___ Tag.", "nächsten|folgenden"]],
      fix: [["Er sagte, er hat nichts gewusst.", "Er sagte, er habe nichts gewusst.", "In reported speech: Konjunktiv I (habe).", "Au discours indirect : Konjunktiv I (habe)."], ["Sie sagten, sie haben keine Zeit.", "Sie sagten, sie hätten keine Zeit.", "sie haben = indicative, so Konjunktiv II: hätten.", "sie haben = indicatif, donc Konjunktiv II : hätten."]],
      task: ["Report this statement by a (fictional) company spokesperson, made last Monday, in the Konjunktiv I: “We had problems with the software yesterday. We are working on a solution and will inform customers tomorrow.”", "Rapporte au Konjunktiv I cette déclaration d'un porte-parole d'entreprise (fictif), faite lundi dernier : « Nous avons eu des problèmes avec le logiciel hier. Nous travaillons à une solution et informerons les clients demain. »", "Der Sprecher erklärte, man habe am Vortag Probleme mit der Software gehabt. Man arbeite an einer Lösung und werde die Kunden am nächsten Tag informieren."]
    },
    104: {
      gap: [["Wir haben Ihre Bewerbung ___.", "erhalten", "formal for bekommen", "soutenu pour bekommen"], ["Das Gerät ist leider ___.", "defekt", "formal for kaputt", "soutenu pour kaputt"], ["Die Firma hat das Grundstück ___.", "erworben", "formal for gekauft", "soutenu pour gekauft"], ["Das Büro ___ sich im zweiten Stock.", "befindet", "formal for ist", "soutenu pour ist"]],
      fix: [["Sehr geehrte Damen und Herren, ich hab Ihre Mail gekriegt.", "Sehr geehrte Damen und Herren, ich habe Ihre E-Mail erhalten.", "Formal letter: no colloquial forms.", "Lettre formelle : pas de formes familières."], ["Wegen dem Streik konnte ich leider nicht kommen.", "Wegen des Streiks konnte ich leider nicht kommen.", "In formal writing: wegen + genitive.", "À l'écrit soutenu : wegen + génitif."]],
      task: ["Rewrite this message to a friend as a formal email to your landlord: “Hi! The heating's had it again. Can you send someone? I'm home all day tomorrow. Cheers!”", "Réécris ce message à un ami sous forme d'e-mail formel à ton propriétaire : « Salut ! Le chauffage est encore mort. Tu peux envoyer quelqu'un ? Je suis là toute la journée demain. Bises ! »", "Sehr geehrter Herr Kramer, leider ist die Heizung in meiner Wohnung erneut defekt. Ich möchte Sie bitten, so bald wie möglich einen Techniker zu beauftragen. Morgen bin ich den ganzen Tag zu Hause. Mit freundlichen Grüßen, Robin Keller"]
    },
    105: {
      gap: [["Ich ___ die Auffassung, dass Sprachunterricht unverzichtbar bleibt.", "vertrete"], ["Dies lässt sich am Beispiel der Medizin ___.", "verdeutlichen|veranschaulichen|zeigen"], ["Dieses Argument greift jedoch zu ___.", "kurz"], ["Vieles ___ darauf hin, dass sich der Trend fortsetzt.", "deutet"]],
      fix: [["Es ist total klar, dass KI alles verändert.", "Es ist davon auszugehen, dass KI vieles verändert.", "C1 style: careful, nuanced claims.", "Style C1 : des affirmations mesurées et nuancées."], ["Zwar wird eingewandt, dass Programme genügen, aber doch erfassen sie keine Nuancen.", "Zwar wird eingewandt, dass Programme genügen, doch sie erfassen keine Nuancen.", "zwar …, doch / aber (one of the two).", "zwar …, doch / aber (un seul des deux)."]],
      task: ["Write the introduction (thesis) and the counter-argument paragraph of a text on: “Should social media be banned for under-16s?” (about 80 words).", "Écris l'introduction (avec la thèse) et le paragraphe de contre-argument d'un texte sur : « Faut-il interdire les réseaux sociaux aux moins de 16 ans ? » (environ 80 mots).", "Kaum eine Frage wird unter Eltern derzeit so kontrovers diskutiert wie der Umgang Jugendlicher mit sozialen Medien. Ich vertrete die Auffassung, dass ein Verbot das Problem nicht löst. Zwar wird häufig eingewandt, dass Kinder vor schädlichen Inhalten geschützt werden müssen, doch ein Verbot lässt sich leicht umgehen. Dieses Argument greift daher zu kurz: Wirksamer wäre es, Medienkompetenz in der Schule zu vermitteln."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "interviewbericht", lesson: 103, level: "C1", icon: "newspaper", partner: "Frau Engel", role: "your editor", role_fr: "ta rédactrice en chef",
    title: "Reporting an interview", title_fr: "Rendre compte d'une interview",
    setting: "You're doing an internship at a local newspaper. Yesterday you interviewed the (fictional) mayor. Your editor, Frau Engel, wants to know what he said, in reported speech for the article.", setting_fr: "Tu fais un stage dans un journal local. Hier, tu as interviewé le maire (fictif). Ta rédactrice en chef, Frau Engel, veut savoir ce qu'il a dit, au discours indirect pour l'article.",
    turns: [
      { p: "Und? Was hat der Bürgermeister zum neuen Bahnhof gesagt?", en: "Well? What did the mayor say about the new station?", fr: "Alors ? Qu'a dit le maire à propos de la nouvelle gare ?" },
      { y: ["Er sagte, die Bauarbeiten hätten sich wegen fehlender Materialien verzögert.", "Er sagte, die Bauarbeiten haben sich wegen fehlender Materialien verzögert.", "Er sagte, die Bauarbeiten hätten sich wegen fehlender Materialien verzögern."], en: "He said the construction work had been delayed because of missing materials.", fr: "Il a dit que les travaux avaient pris du retard faute de matériaux.", why: "Plural past: Konjunktiv II (hätten) + participle, because haben = indicative.", why_fr: "Passé au pluriel : Konjunktiv II (hätten) + participe, car haben = indicatif." },
      { p: "Hat er einen neuen Termin genannt?", en: "Did he give a new date?", fr: "A-t-il donné une nouvelle date ?" },
      { y: ["Ja. Er versicherte, der Bahnhof werde im Herbst eröffnet.", "Ja. Er versicherte, der Bahnhof wird im Herbst eröffnet.", "Ja. Er versicherte, der Bahnhof werde im Herbst eröffnen werden."], en: "Yes. He assured me the station would open in the autumn.", fr: "Oui. Il a assuré que la gare ouvrirait à l'automne.", why: "Future in reported speech: werde + participle (passive: werde … eröffnet).", why_fr: "Futur au discours indirect : werde + participe (passif : werde … eröffnet)." },
      { p: "Und die Kosten? Die sind doch enorm gestiegen.", en: "And the costs? They've risen enormously.", fr: "Et les coûts ? Ils ont énormément augmenté." },
      { y: ["Er räumte ein, dass die Kosten höher seien als geplant, bestritt aber, dass die Stadt Fehler gemacht habe.", "Er räumte ein, dass die Kosten höher sind als geplant, bestritt aber, dass die Stadt Fehler gemacht hat.", "Er räumte ein, dass die Kosten höher seien als geplant, bestritt aber, dass die Stadt Fehler gemacht sei."], en: "He conceded that the costs were higher than planned, but denied that the town had made mistakes.", fr: "Il a reconnu que les coûts étaient plus élevés que prévu, mais il a nié que la ville ait commis des erreurs.", why: "einräumen / bestreiten + Konjunktiv I; Fehler machen → habe gemacht.", why_fr: "einräumen / bestreiten + Konjunktiv I ; Fehler machen → habe gemacht." },
      { p: "Hat er noch etwas Persönliches gesagt?", en: "Did he say anything personal?", fr: "A-t-il dit quelque chose de plus personnel ?" },
      { y: ["Er deutete an, dass er bei der nächsten Wahl nicht mehr kandidieren werde.", "Er deutete an, dass er bei der nächsten Wahl nicht mehr kandidieren wird werde.", "Er deutete an, dass er bei der nächsten Wahl nicht mehr kandidiere werden."], en: "He hinted that he wouldn't stand again at the next election.", fr: "Il a laissé entendre qu'il ne se représenterait pas aux prochaines élections.", why: "andeuten + future in the Konjunktiv I: werde + infinitive.", why_fr: "andeuten + futur au Konjunktiv I : werde + infinitif." },
      { p: "Das ist ja eine Schlagzeile! Hat er das wirklich so gesagt?", en: "That's a headline! Did he really say that?", fr: "Mais c'est un gros titre ! Il l'a vraiment dit comme ça ?" },
      { y: ["Nicht direkt. Deshalb schreibe ich „deutete an“ und nicht „kündigte an“, um nichts zu unterstellen.", "Nicht direkt. Deshalb schreibe ich „deutete an“ und nicht „kündigte an“, um nichts zu unterstellt.", "Nicht direkt. Deshalb ich schreibe „deutete an“ und nicht „kündigte an“, um nichts zu unterstellen."], en: "Not directly. That's why I'm writing “hinted” and not “announced”, so as not to insinuate anything.", fr: "Pas directement. C'est pour ça que j'écris « a laissé entendre » et non « a annoncé », pour ne rien lui prêter.", why: "um … zu + infinitive; the choice of reporting verb shows nuance.", why_fr: "um … zu + infinitif ; le choix du verbe introducteur exprime la nuance." }
    ] },
  { id: "registerwechsel", lesson: 104, level: "C1", icon: "sliders-horizontal", partner: "Jonas", role: "a friend", role_fr: "un ami",
    title: "Making it sound formal", title_fr: "Passer au registre soutenu",
    setting: "Your friend Jonas has written an email to a company about a faulty product. It sounds far too casual. He asks you to help him improve it.", setting_fr: "Ton ami Jonas a écrit un e-mail à une entreprise au sujet d'un produit défectueux. Le ton est beaucoup trop familier. Il te demande de l'aider à l'améliorer.",
    turns: [
      { p: "Schau mal: „Hallo Leute, ich hab euren Mixer gekriegt, aber das Ding ist schon hin.“ Geht das so?", en: "Look: “Hi guys, I got your blender, but the thing's already had it.” Is that OK?", fr: "Regarde : « Salut les gars, j'ai eu votre mixeur, mais le truc est déjà mort. » Ça va comme ça ?" },
      { y: ["Na ja, das ist sehr umgangssprachlich. Schreib lieber: „Ich habe Ihren Mixer erhalten, er ist jedoch bereits defekt.“", "Na ja, das ist sehr umgangssprachlich. Schreib lieber: „Ich habe Ihren Mixer gekriegt, er ist jedoch bereits defekt.“", "Na ja, das ist sehr umgangssprachlich. Schreib lieber: „Ich habe euren Mixer erhalten, er ist jedoch bereits hin.“"], en: "Well, that's very colloquial. Better write: “I have received your blender; however, it is already faulty.”", fr: "Bon, c'est très familier. Écris plutôt : « J'ai bien reçu votre mixeur, mais il est déjà défectueux. »", why: "Formal: Ihren, erhalten, defekt.", why_fr: "Soutenu : Ihren, erhalten, defekt." },
      { p: "Okay. Und am Anfang? „Hallo Leute“ ist wohl nichts?", en: "OK. And at the start? “Hi guys” is no good, I suppose?", fr: "D'accord. Et au début ? « Salut les gars », ça ne va pas, j'imagine ?" },
      { y: ["Genau. „Sehr geehrte Damen und Herren“ ist die übliche Anrede, wenn man den Namen nicht kennt.", "Genau. „Sehr geehrten Damen und Herren“ ist die übliche Anrede, wenn man den Namen nicht kennt.", "Genau. „Sehr geehrte Damen und Herren“ ist die übliche Anrede, wenn man kennt den Namen nicht."], en: "Exactly. “Dear Sir or Madam” is the usual greeting when you don't know the name.", fr: "Exactement. « Madame, Monsieur » est la formule habituelle quand on ne connaît pas le nom.", why: "Sehr geehrte Damen und Herren; wenn: verb at the end.", why_fr: "Sehr geehrte Damen und Herren ; wenn : verbe à la fin." },
      { p: "Und dann: „Wegen dem Ding will ich mein Geld zurück.“", en: "And then: “Because of the thing I want my money back.”", fr: "Et ensuite : « À cause du truc, je veux être remboursé. »" },
      { y: ["Besser: „Aufgrund des Defekts bitte ich Sie, mir den Kaufpreis zu erstatten.“", "Besser: „Aufgrund dem Defekt bitte ich Sie, mir den Kaufpreis zu erstatten.“", "Besser: „Aufgrund des Defekts bitte ich Sie, mir den Kaufpreis erstatten.“"], en: "Better: “Owing to the defect, I ask you to refund the purchase price.”", fr: "Mieux : « En raison du défaut, je vous prie de me rembourser le prix d'achat. »", why: "aufgrund + genitive; bitten, … zu + infinitive.", why_fr: "aufgrund + génitif ; bitten, … zu + infinitif." },
      { p: "Klingt gut. Und zum Schluss? Ich hatte „Danke und tschüss“.", en: "Sounds good. And at the end? I had “Thanks and bye”.", fr: "Ça sonne bien. Et pour finir ? J'avais mis « Merci et salut »." },
      { y: ["Schreib: „Für eine baldige Rückmeldung wäre ich Ihnen dankbar. Mit freundlichen Grüßen“.", "Schreib: „Für eine baldige Rückmeldung wäre ich Sie dankbar. Mit freundlichen Grüßen“.", "Schreib: „Für eine baldige Rückmeldung wäre ich Ihnen dankbar. Mit freundliche Grüße“."], en: "Write: “I would be grateful for a prompt reply. Kind regards”.", fr: "Écris : « Je vous serais reconnaissant d'une réponse rapide. Cordialement »." , why: "jemandem (dative) dankbar sein; Mit freundlichen Grüßen.", why_fr: "jemandem (datif) dankbar sein ; Mit freundlichen Grüßen." },
      { p: "Wow, das klingt plötzlich total seriös. Danke!", en: "Wow, that suddenly sounds really professional. Thanks!", fr: "Waouh, ça fait tout de suite très sérieux. Merci !" },
      { y: ["Gern. Und bei deinen Freunden darfst du gern weiter „kriegen“ sagen.", "Gern. Und bei deinen Freunden darfst du gern weiter „kriegen“ sagen dürfen.", "Gern. Und bei deine Freunden darfst du gern weiter „kriegen“ sagen."], en: "You're welcome. And with your friends you can carry on saying “kriegen”.", fr: "Avec plaisir. Et avec tes amis, tu peux continuer à dire « kriegen »." , why: "bei + dative: bei deinen Freunden.", why_fr: "bei + datif : bei deinen Freunden." }
    ] }
  );

  W.READINGS.push({
    id: "duden", level: "C1", icon: "book-open", title: "Wer bestimmt, wie man Deutsch schreibt?", genre: "Feature article",
    intro: "For many Germans, “the Duden” simply means the right spelling. But who actually decides the rules? A story of dictionaries, conferences and a long-disputed reform.",
    intro_fr: "Pour beaucoup d'Allemands, « le Duden » veut tout simplement dire la bonne orthographe. Mais qui décide vraiment des règles ? Une histoire de dictionnaires, de conférences et d'une réforme longtemps contestée.",
    paragraphs: [
      { de: "Bis ins 19. Jahrhundert schrieb man im deutschen Sprachraum, wie man es in der Schule gelernt hatte, und das war je nach Region verschieden. Der Gymnasiallehrer Konrad Duden wollte das ändern: 1880 veröffentlichte er sein „Vollständiges Orthographisches Wörterbuch der deutschen Sprache“. Es verbreitete sich rasch und trug wesentlich dazu bei, dass sich eine einheitliche Schreibung durchsetzte.", en: "Until the 19th century, people in German-speaking countries wrote the way they had learnt at school, and that varied from region to region. The grammar-school teacher Konrad Duden wanted to change that: in 1880 he published his “Complete Orthographic Dictionary of the German Language”. It spread quickly and contributed significantly to the establishment of a uniform spelling.", fr: "Jusqu'au XIXe siècle, on écrit dans l'espace germanophone comme on l'a appris à l'école, et cela varie selon les régions. Konrad Duden, professeur de lycée, veut y remédier : en 1880, il publie son « Dictionnaire orthographique complet de la langue allemande ». L'ouvrage se diffuse rapidement et contribue largement à l'adoption d'une orthographe unifiée." },
      { de: "Verbindliche Regeln für ganz Deutschland legte 1901 eine Orthographische Konferenz in Berlin fest. Im Jahr 1955 beschlossen die Kultusminister der westdeutschen Länder, dass in Zweifelsfällen der Duden maßgeblich sein solle. Damit wurde ein privates Wörterbuch für Jahrzehnte zur heimlichen Instanz der Rechtschreibung.", en: "In 1901, an orthographic conference in Berlin laid down binding rules for the whole of Germany. In 1955, the education ministers of the West German Länder decided that in cases of doubt the Duden should be authoritative. A private dictionary thus became, for decades, the unofficial authority on spelling.", fr: "En 1901, une conférence orthographique réunie à Berlin fixe des règles contraignantes pour toute l'Allemagne. En 1955, les ministres de l'Éducation des Länder ouest-allemands décident qu'en cas de doute, le Duden fera référence. Un dictionnaire privé devient ainsi, pendant des décennies, l'autorité officieuse de l'orthographe." },
      { de: "Das änderte sich mit der Rechtschreibreform. 1996 einigten sich die deutschsprachigen Staaten auf neue Regeln, die am 1. August 1998 in Kraft traten. Die Reform war heftig umstritten: Kritiker bemängelten, sie schaffe mehr Verwirrung als Klarheit, und einige Zeitungen kehrten zeitweise zur alten Schreibung zurück. Nach einer Übergangszeit bis 2005 wurde das Regelwerk 2006 noch einmal überarbeitet.", en: "That changed with the spelling reform. In 1996, the German-speaking states agreed on new rules, which came into force on 1 August 1998. The reform was fiercely disputed: critics complained that it created more confusion than clarity, and some newspapers temporarily returned to the old spelling. After a transitional period until 2005, the rules were revised once more in 2006.", fr: "Les choses changent avec la réforme de l'orthographe. En 1996, les États germanophones s'accordent sur de nouvelles règles, entrées en vigueur le 1er août 1998. La réforme est vivement contestée : ses détracteurs lui reprochent de créer plus de confusion que de clarté, et certains journaux reviennent temporairement à l'ancienne graphie. Après une période de transition jusqu'en 2005, les règles sont encore révisées en 2006." },
      { de: "Seit 2004 beobachtet der Rat für deutsche Rechtschreibung, ein Gremium aus mehreren Ländern, wie sich die Schreibung entwickelt, und schlägt bei Bedarf Änderungen vor. Der Duden ist seither ein Nachschlagewerk unter anderen, wenn auch das bekannteste. Und im Alltag zeigt sich: Neben der Standardsprache leben die Dialekte weiter, vom Schweizerdeutschen bis zum Niederdeutschen, das als Regionalsprache anerkannt ist.", en: "Since 2004, the Council for German Orthography, a body representing several countries, has been monitoring how spelling develops and proposes changes when needed. Since then, the Duden has been one reference work among others, albeit the best known. And everyday life shows that alongside the standard language, dialects live on, from Swiss German to Low German, which is recognised as a regional language.", fr: "Depuis 2004, le Conseil pour l'orthographe allemande, un organisme qui réunit plusieurs pays, observe l'évolution de l'écrit et propose des modifications si nécessaire. Le Duden n'est plus depuis qu'un ouvrage de référence parmi d'autres, même s'il reste le plus connu. Et au quotidien, on le constate : à côté de la langue standard, les dialectes continuent de vivre, du suisse alémanique au bas allemand, reconnu comme langue régionale." }
    ],
    glossary: { "Sprachraum": ["language area", "espace linguistique"], "Gymnasiallehrer": ["grammar-school teacher", "professeur de lycée"], "veröffentlichte": ["published", "publia"], "Vollständiges": ["complete", "complet"], "Orthographisches": ["orthographic", "orthographique"], "verbreitete": ["spread", "se répandit"], "rasch": ["quickly", "rapidement"], "wesentlich": ["significantly", "largement"], "einheitliche": ["uniform", "unifié"], "Schreibung": ["spelling", "graphie, écriture"], "durchsetzte": ["became established", "s'imposa"], "Verbindliche": ["binding", "contraignant"], "Kultusminister": ["education ministers (of the Länder)", "ministres de l'Éducation (des Länder)"], "Zweifelsfällen": ["cases of doubt", "cas de doute"], "maßgeblich": ["authoritative, decisive", "déterminant, faisant autorité"], "heimlichen": ["secret, unofficial", "secret, officieux"], "Instanz": ["authority", "instance, autorité"], "Rechtschreibreform": ["spelling reform", "réforme de l'orthographe"], "einigten": ["agreed", "s'accordèrent"], "bemängelten": ["complained, criticised", "reprochaient"], "Verwirrung": ["confusion", "confusion"], "Klarheit": ["clarity", "clarté"], "zeitweise": ["temporarily", "temporairement"], "Regelwerk": ["set of rules", "ensemble des règles"], "überarbeitet": ["revised", "révisé"], "Gremium": ["body, committee", "organisme, comité"], "Bedarf": ["need", "besoin"], "Nachschlagewerk": ["reference work", "ouvrage de référence"], "Schweizerdeutschen": ["Swiss German", "suisse alémanique"], "Niederdeutschen": ["Low German", "bas allemand"], "Regionalsprache": ["regional language", "langue régionale"] },
    questions: [
      { q: "Was wollte Konrad Duden mit seinem Wörterbuch erreichen?", o: ["Eine einheitliche Schreibung", "Neue Wörter erfinden", "Die Dialekte abschaffen"], a: 0 },
      { q: "Was wurde 1955 beschlossen?", o: ["Der Duden sollte in Zweifelsfällen maßgeblich sein.", "Die Rechtschreibreform trat in Kraft.", "Der Rat für deutsche Rechtschreibung wurde gegründet."], a: 0 },
      { q: "Wann traten die neuen Regeln der Reform in Kraft?", o: ["Am 1. August 1998", "1880", "2004"], a: 0 },
      { q: "Was bemängelten Kritiker an der Reform?", o: ["Sie schaffe mehr Verwirrung als Klarheit.", "Sie sei zu spät gekommen.", "Sie betreffe nur die Schweiz."], a: 0 },
      { q: "Welche Rolle hat der Duden heute?", o: ["Er ist ein Nachschlagewerk unter anderen, wenn auch das bekannteste.", "Er entscheidet allein über alle Regeln.", "Er wird nicht mehr veröffentlicht."], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-c1-1", unit: "c1-1", level: "C1", icon: "radio",
    title: "Dialekt oder Hochdeutsch?", title_fr: "Dialecte ou allemand standard ?",
    context: "A radio phone-in about dialects. In the studio, the linguist Dr. Kessler; on the phone, a listener, Toni, from a village in Bavaria.", context_fr: "Une émission de radio avec appels d'auditeurs sur les dialectes. En studio, la linguiste Dr. Kessler ; au téléphone, un auditeur, Toni, d'un village de Bavière.",
    words: [["die Sprachwissenschaftlerin, -nen", "the linguist", "la linguiste"], ["sich schämen für", "to be ashamed of", "avoir honte de"], ["das Vorstellungsgespräch, -e", "the job interview", "l'entretien d'embauche"], ["die Vielfalt", "diversity", "la diversité"], ["umschalten", "to switch", "basculer, passer (d'un registre à l'autre)"]],
    lines: [["Moderator", "Frau Dr. Kessler, sterben die Dialekte aus?", "de-DE"], ["Dr. Kessler", "Das lässt sich so pauschal nicht sagen. In manchen Regionen werden sie seltener gesprochen, in anderen sind sie sehr lebendig. Viele Menschen schalten heute ganz selbstverständlich zwischen Dialekt und Standardsprache um.", "de-DE"], ["Moderator", "Wir haben Toni am Telefon. Toni, Sie sprechen Bairisch?", "de-DE"], ["Toni", "Ja, zu Hause und mit meinen Freunden immer. Aber als ich zum Studium nach Hamburg gezogen bin, haben mich am Anfang manche kaum verstanden.", "de-DE"], ["Moderator", "Haben Sie sich dafür geschämt?", "de-DE"], ["Toni", "Ein bisschen, ehrlich gesagt. Bei einem Vorstellungsgespräch hat mir sogar jemand geraten, meinen Dialekt abzulegen. Ich hätte nicht gedacht, dass das heute noch ein Thema ist.", "de-DE"], ["Dr. Kessler", "Leider kommt das vor. Dabei ist es doch eine Stärke, zwischen Dialekt und Standardsprache wechseln zu können. Ein Dialekt ist kein Fehler, sondern ein Teil der sprachlichen Vielfalt.", "de-DE"], ["Toni", "Das sehe ich inzwischen genauso. Ich bin stolz darauf, dass ich beides kann.", "de-DE"]],
    gist: ["Worum geht es in der Sendung?", ["Um Dialekte und Standardsprache im Alltag", "Um die Rechtschreibreform", "Um Fremdsprachen in der Schule"]],
    detail: [["Was sagt Dr. Kessler über das Aussterben der Dialekte?", ["Man kann es nicht pauschal sagen; es kommt auf die Region an.", "Alle Dialekte sterben aus.", "Dialekte werden immer häufiger."]], ["Was passierte Toni in Hamburg?", ["Manche verstanden ihn am Anfang kaum.", "Er verlernte seinen Dialekt.", "Er fand keine Wohnung."]], ["Was riet man Toni bei einem Vorstellungsgespräch?", ["Seinen Dialekt abzulegen", "Mehr Englisch zu sprechen", "Langsamer zu sprechen"]], ["Wie sieht Toni seinen Dialekt heute?", ["Er ist stolz darauf, beides zu können.", "Er schämt sich immer noch.", "Er spricht nur noch Hochdeutsch."]]],
    decode: ["Das lässt sich so pauschal nicht sagen.", "Ich hätte nicht gedacht, dass das heute noch ein Thema ist."],
    tip: "Experts at C1 level rarely say yes or no: they qualify (pauschal, in manchen Regionen, leider kommt das vor…). Listen for these qualifiers: they're where the real answer lies.", tip_fr: "Au niveau C1, les experts répondent rarement par oui ou par non : ils nuancent (pauschal, in manchen Regionen, leider kommt das vor…). Repère ces nuances : c'est là que se trouve la vraie réponse."
  }]);

  W.PROMPTS.push({ id: "de-c1-1", level: "C1", q: "Halte einen Vortrag (etwa drei bis vier Minuten): „Anglizismen im Deutschen – Bereicherung oder Bedrohung?“ Strukturiere deinen Vortrag, nenne Beispiele, wäge Argumente ab und komm zu einem Fazit.", en: "Give a talk (about three to four minutes): “Anglicisms in German: enrichment or threat?” Structure your talk, give examples, weigh up arguments and reach a conclusion.", fr: "Fais un exposé (environ trois à quatre minutes) : « Les anglicismes en allemand : enrichissement ou menace ? » Structure ton exposé, donne des exemples, pèse les arguments et conclus.", time: 240,
    phrases: ["Ich möchte mich heute mit der Frage beschäftigen, ob…", "Zunächst möchte ich klären, was man unter … versteht.", "Befürworter betonen, dass…", "Kritiker wenden dagegen ein, dass…", "Abschließend lässt sich festhalten, dass…"],
    model: "Ich möchte mich heute mit der Frage beschäftigen, ob Anglizismen das Deutsche bereichern oder bedrohen. Zunächst möchte ich klären, was man darunter versteht: Gemeint sind Wörter aus dem Englischen wie „Meeting“, „Homeoffice“ oder „liken“. Interessant ist, dass manche davon im Englischen gar nicht existieren oder etwas anderes bedeuten, zum Beispiel das „Handy“. Befürworter betonen, dass Sprachen sich schon immer gegenseitig beeinflusst haben; schließlich stammen auch viele deutsche Wörter aus dem Lateinischen oder Französischen. Außerdem füllen Anglizismen oft Lücken, besonders in der Technik. Kritiker wenden dagegen ein, dass vorhandene deutsche Wörter verdrängt würden und dass ältere Menschen manche Texte nicht mehr verstünden. Dieses Argument nehme ich ernst, denn Verständlichkeit ist wichtig, etwa in Behörden. Abschließend lässt sich festhalten, dass Anglizismen keine Bedrohung sind, solange man bewusst mit ihnen umgeht und dort, wo es ein gutes deutsches Wort gibt, dieses auch verwendet." });

  W.WRITING_GUIDE["c1-1"] = { genre: "An argued text (C1)", genre_fr: "Un texte argumenté (C1)",
    plan: [["A lead-in and your thesis.", "Une amorce et ta thèse."], ["A first argument with an example.", "Un premier argument avec un exemple."], ["A second argument.", "Un deuxième argument."], ["A counter-argument, taken seriously, and your answer.", "Un contre-argument pris au sérieux, et ta réponse."], ["A conclusion with an outlook.", "Une conclusion avec une ouverture."]],
    marks: [["Kaum eine Frage wird", "a lead-in", "une amorce"], ["Ich vertrete die Auffassung", "the thesis", "la thèse"], ["Dies lässt sich am Beispiel", "an example", "un exemple"], ["Zwar wird häufig eingewandt", "the counter-argument", "le contre-argument"], ["greift jedoch zu kurz", "answering the counter-argument", "la réponse au contre-argument"], ["Abschließend lässt sich festhalten", "the conclusion", "la conclusion"]] };

  /* Atelier de langue : champs allemands d'abord, puis anglais et français (voir localize.js). */
  W.LEXIS = W.LEXIS || {};
  W.LEXIS["c1-1"] = {
    colloc: [
      ["eine Behauptung aufstellen", "to make a claim", "avancer une affirmation", "Er hat eine gewagte Behauptung aufgestellt.", "aufgestellt", ["gemacht", "gestellt"]],
      ["einen Einwand erheben", "to raise an objection", "émettre une objection", "Gegen den Vorschlag wurde ein Einwand erhoben.", "erhoben", ["gehoben", "gemacht"]],
      ["eine These untermauern", "to back up a thesis", "étayer une thèse", "Sie untermauert ihre These mit Zahlen.", "untermauert", ["ummauert", "untermalt"]],
      ["sich Gehör verschaffen", "to make oneself heard", "se faire entendre", "In der lauten Runde konnte sie sich kaum Gehör verschaffen.", "verschaffen", ["schaffen", "machen"]],
      ["Missverständnisse ausräumen", "to clear up misunderstandings", "dissiper des malentendus", "Im Gespräch wurden alle Missverständnisse ausgeräumt.", "ausgeräumt", ["aufgeräumt", "abgeräumt"]],
      ["das Wort an jemanden richten", "to address someone", "adresser la parole à quelqu'un", "Der Präsident richtete das Wort an die Bürger.", "richtete", ["stellte", "gab"]],
      ["eine Andeutung machen", "to drop a hint", "faire une allusion", "Sie machte eine Andeutung über ihre Pläne.", "machte", ["tat", "legte"]],
      ["Klartext reden", "to speak plainly", "parler franchement", "Jetzt muss ich mal Klartext reden.", "reden", ["machen", "halten"]],
      ["ins Gewicht fallen", "to carry weight", "peser dans la balance", "Dieses Argument fällt besonders ins Gewicht.", "fällt", ["kommt", "geht"]],
      ["den Ton angeben", "to set the tone, to call the tune", "donner le ton", "In der Diskussion gab sie den Ton an.", "gab", ["machte", "setzte"]]
    ],
    wf: [
      ["Die ___ der Regeln führte zu Protesten. (VEREINFACHEN)", "Vereinfachung"],
      ["Seine Aussage war ___ und ließ viele Fragen offen. (DEUTEN)", "mehrdeutig|zweideutig"],
      ["Die ___ der Schreibung dauerte Jahrzehnte. (EINHEIT)", "Vereinheitlichung"],
      ["Ihre ___ war sehr überzeugend. (ARGUMENTIEREN)", "Argumentation"],
      ["Das ist ein ___ Ausdruck, den man im Brief vermeiden sollte. (UMGANG)", "umgangssprachlicher"],
      ["Der Satz ist grammatisch ___. (EINWAND)", "einwandfrei"],
      ["Die ___ zwischen Dialekt und Standardsprache ist nicht immer klar. (GRENZE)", "Abgrenzung"],
      ["Er drückte sich leider ___ aus, sodass alle etwas anderes verstanden. (VERSTEHEN)", "missverständlich"]
    ],
    kwt: [
      ["„Ich habe den Brief nie bekommen“, sagte er.", "HABE", "Er sagte, er ___.", "habe den Brief nie bekommen|habe den Brief nie erhalten"],
      ["„Ich werde morgen kommen“, versprach sie.", "WERDE", "Sie versprach, sie ___ kommen.", "werde am nächsten Tag|werde am folgenden Tag|werde morgen"],
      ["Er gibt zu, dass er sich geirrt hat.", "RÄUMT", "Er ___, dass er sich geirrt hat.", "räumt ein"],
      ["Sie sagt, dass das nicht stimmt.", "BESTREITET", "Sie ___ stimmt.", "bestreitet, dass das|bestreitet dass das"],
      ["Ich habe das Geld bekommen.", "ERHALTEN", "Ich ___.", "habe das Geld erhalten"],
      ["Er fing pünktlich mit dem Vortrag an.", "BEGANN", "Er ___.", "begann pünktlich mit dem Vortrag|begann den Vortrag pünktlich"]
    ],
    idioms: [
      ["kein Blatt vor den Mund nehmen", "offen und direkt sagen, was man denkt", "not to mince one's words", "ne pas mâcher ses mots", "Sie nimmt kein Blatt vor den Mund.", "kein Blatt vor den Mund"],
      ["etwas durch die Blume sagen", "etwas indirekt und höflich verhüllt sagen", "to say something in a roundabout way", "dire quelque chose à mots couverts", "Er hat mir durch die Blume gesagt, dass mein Text zu lang ist.", "durch die Blume"],
      ["etwas auf den Punkt bringen", "das Wesentliche kurz sagen", "to sum something up in a nutshell", "résumer l'essentiel", "Kannst du das kurz auf den Punkt bringen?", "auf den Punkt"],
      ["jemandem das Wort im Mund umdrehen", "jemandes Aussage absichtlich falsch wiedergeben", "to twist someone's words", "déformer les propos de quelqu'un", "Dreh mir nicht das Wort im Mund um!", "das Wort im Mund"],
      ["aneinander vorbeireden", "miteinander sprechen, ohne sich zu verstehen", "to talk at cross purposes", "parler chacun de son côté", "Ich glaube, wir reden aneinander vorbei.", "aneinander vorbei"],
      ["zwischen den Zeilen lesen", "verstehen, was nicht direkt gesagt wird", "to read between the lines", "lire entre les lignes", "Bei diesem Brief muss man zwischen den Zeilen lesen.", "zwischen den Zeilen"],
      ["nicht um Worte verlegen sein", "immer eine Antwort parat haben", "never to be lost for words", "avoir toujours réponse à tout", "Sie ist nie um Worte verlegen.", "um Worte verlegen"],
      ["das letzte Wort haben", "eine Diskussion entscheiden", "to have the last word", "avoir le dernier mot", "Bei uns hat meine Großmutter immer das letzte Wort.", "das letzte Wort"]
    ]
  };

  W.COURSE.push({ id: "c1-1", level: "C1", icon: "languages", title: "Language and communication", title_fr: "Langue et communication",
    intro: "Welcome to C1. At this level, it's no longer just about being understood, but about expressing yourself precisely and appropriately. In this unit, you'll master reported speech in all tenses (er sagte, er habe es gewusst) and the verbs that add nuance (einräumen, bestreiten, andeuten), learn to switch consciously between colloquial, neutral and formal German, and write an argued text at C1 level. You'll also discover who decides how German is spelt.",
    intro_fr: "Bienvenue au C1. À ce niveau, il ne s'agit plus seulement de se faire comprendre, mais de s'exprimer avec précision et à bon escient. Dans cette unité, tu vas maîtriser le discours indirect à tous les temps (er sagte, er habe es gewusst) et les verbes qui nuancent (einräumen, bestreiten, andeuten), apprendre à passer consciemment de l'allemand familier au neutre et au soutenu, et écrire un texte argumenté de niveau C1. Tu découvriras aussi qui décide de l'orthographe allemande.",
    can: ["Report statements in all tenses, shifting pronouns and time words", "Choose reporting verbs that express nuance", "Recognise and use colloquial, neutral and formal registers", "Write a structured argued text with a counter-argument and a careful tone", "Give a structured talk of three to four minutes"],
    can_fr: ["Rapporter des propos à tous les temps, en déplaçant pronoms et repères temporels", "Choisir des verbes introducteurs qui expriment la nuance", "Reconnaître et employer les registres familier, neutre et soutenu", "Écrire un texte argumenté structuré, avec un contre-argument et un ton mesuré", "Faire un exposé structuré de trois à quatre minutes"],
    lessons: [103, 104, 105], vocab: ["spracheC1DE", "kommunikationC1DE"], reading: "duden", prompt: "de-c1-1",
    writing: { task: "Write an argued text (220-260 words) on the question: “In an age of AI translators, do we still need foreign language teaching at school?” Include a lead-in and a thesis, two arguments with examples, a counter-argument you take seriously, and a conclusion.", task_fr: "Écris un texte argumenté (220 à 260 mots) sur la question : « À l'heure des traducteurs automatiques, a-t-on encore besoin d'enseigner les langues étrangères à l'école ? » Avec une amorce et une thèse, deux arguments illustrés d'exemples, un contre-argument pris au sérieux et une conclusion.", words: "220-260",
      tips: ["Kaum eine Frage wird derzeit so kontrovers diskutiert wie…", "Ich vertrete die Auffassung, dass…", "Dies lässt sich am Beispiel … verdeutlichen.", "Zwar wird häufig eingewandt, dass…, doch…", "Abschließend lässt sich festhalten, dass…"],
      checklist: ["I wrote a lead-in and a clear thesis", "I supported two arguments with examples", "I took a counter-argument seriously and answered it", "I used a careful, nuanced tone", "I wrote between 220 and 260 words"],
      checklist_fr: ["J'ai écrit une amorce et une thèse claire", "J'ai étayé deux arguments par des exemples", "J'ai pris au sérieux un contre-argument et j'y ai répondu", "J'ai employé un ton mesuré et nuancé", "J'ai écrit entre 220 et 260 mots"],
      model: "Kaum eine Frage wird an Schulen derzeit so kontrovers diskutiert wie diese: Brauchen wir noch Fremdsprachenunterricht, wenn Übersetzungsprogramme jeden Text in Sekunden übertragen? Ich vertrete die Auffassung, dass der Unterricht unverzichtbar bleibt, allerdings in veränderter Form.\n\nDafür spricht zunächst, dass Sprache mehr ist als ein Werkzeug zur Informationsübertragung. Wer eine Sprache lernt, lernt zugleich eine andere Art, die Welt zu sehen. Dies lässt sich am Beispiel der Höflichkeit verdeutlichen: Ob man duzt oder siezt, wie direkt man Kritik äußert, all das erfasst ein Programm nur unzureichend, weil es den Kontext kaum kennt.\n\nHinzu kommt, dass echte Begegnungen von Spontaneität leben. Ein Gespräch, in dem man ständig auf ein Gerät schaut, schafft Distanz statt Nähe. Gerade im Beruf, etwa in Verhandlungen, entscheidet oft der persönliche Kontakt. Wer seinem Gegenüber in dessen Sprache antwortet, signalisiert Respekt und baut schneller Vertrauen auf.\n\nZwar wird häufig eingewandt, dass die Programme immer besser würden und das mühsame Vokabellernen daher Zeitverschwendung sei. Dieses Argument greift jedoch zu kurz. Denn um eine Übersetzung beurteilen zu können, muss man die Sprache selbst zumindest in Grundzügen beherrschen. Es ist davon auszugehen, dass Fehler maschineller Übersetzungen gerade in heiklen Situationen gravierende Folgen haben können.\n\nAbschließend lässt sich festhalten, dass Übersetzungsprogramme den Unterricht nicht ersetzen, ihn aber verändern sollten: weniger Auswendiglernen, mehr Kommunikation und ein kritischer Umgang mit digitalen Hilfsmitteln. Es bleibt abzuwarten, ob die Lehrpläne mit dieser Entwicklung Schritt halten." } });
})();
