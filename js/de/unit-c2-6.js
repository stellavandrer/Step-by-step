/* Cours d'allemand, unité C2-6 « Humour and irony / Humour et ironie » : reconnaître l'ironie, le sarcasme,
   l'euphémisme et l'autodérision (Na toll! ; Das war nicht ganz optimal), les mots qui changent de genre ou de
   pluriel selon le sens (der See / die See, die Bänke / die Banken, die Wörter / die Worte), raconter une anecdote
   et réagir à l'humour. Personnages fictifs, prénoms allemands.
   Faits vérifiables seulement : Loriot, de son vrai nom Bernhard-Victor Christoph-Carl von Bülow (Vicco von Bülow),
   né en 1923 à Brandenburg an der Havel, mort en 2011 au bord du lac de Starnberg ; « Loriot » = le loriot (Pirol),
   animal héraldique de sa famille ; d'abord dessinateur (petits bonshommes au nez en patate) ; série « Loriot »
   pour Radio Bremen de 1976 à 1978, avec Evelyn Hamann ; sketchs « Das Frühstücksei », « Weihnachten bei
   Hoppenstedts » (« Früher war mehr Lametta ») ; films « Ödipussi » (1988) et « Pappa ante Portas » (1991) ;
   « Ein Leben ohne Mops ist möglich, aber sinnlos. » Kurt Tucholsky, 1919 : « Was darf die Satire? Alles. » */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "humorDE", icon: "laugh", title: "Humour", title_fr: "L'humour", level: "C2", words: [
    ["der Witz, -e", "the joke", "la blague", "Kennst du den Witz mit den zwei Jägern?"],
    ["der Kalauer, -", "the corny pun", "le calembour, la blague facile", "Mein Vater liebt Kalauer."],
    ["der Sarkasmus", "sarcasm", "le sarcasme", "Sein Sarkasmus verletzt manchmal."],
    ["die Selbstironie", "self-irony", "l'autodérision", "Mit Selbstironie nimmt sie ihre Fehler gelassen."],
    ["die Komik", "comedy, the comic element", "le comique", "Die Komik der Szene liegt in ihrer Ernsthaftigkeit."],
    ["die Situationskomik", "situational comedy", "le comique de situation", "Situationskomik versteht man in jeder Sprache."],
    ["das Missgeschick, -e", "the mishap", "la mésaventure", "Über kleine Missgeschicke kann man oft lachen."],
    ["albern", "silly", "bête, puéril", "Hör auf, so albern zu sein!"],
    ["humorlos", "humourless", "dépourvu d'humour", "Er ist nicht humorlos, nur schüchtern."],
    ["verschmitzt", "mischievous", "malicieux", "Sie lächelte verschmitzt."],
    ["schmunzeln", "to smile (in amusement)", "sourire (d'un air amusé)", "Bei dieser Szene muss man schmunzeln."],
    ["sich lustig machen (über + Akk.)", "to make fun (of)", "se moquer (de)", "Er macht sich gern über Bürokraten lustig."],
    ["sich totlachen", "to die laughing", "mourir de rire", "Wir haben uns totgelacht."],
    ["der Scherz, -e", "the joke, the jest", "la plaisanterie", "Das war nur ein Scherz."],
    ["der Spaßvogel, ¨-", "the joker, the wag", "le farceur, le plaisantin", "Unser Kollege ist ein echter Spaßvogel."],
    ["augenzwinkernd", "with a wink, tongue in cheek", "avec un clin d'œil", "Er sagte es augenzwinkernd."]
  ] },
  { id: "kabarettDE", icon: "drama", title: "Comedy and cabaret", title_fr: "Comédie et cabaret", level: "C2", words: [
    ["das Kabarett, -s", "political cabaret", "le cabaret satirique", "Im Kabarett wird über Politik gelacht."],
    ["der Kabarettist, -en (die Kabarettistin)", "the cabaret artist", "l'humoriste (de cabaret satirique)", "Die Kabarettistin nahm den Minister aufs Korn."],
    ["die Parodie, -n", "the parody", "la parodie", "Die Parodie war besser als das Original."],
    ["die Karikatur, -en", "the caricature, the cartoon", "la caricature", "Die Karikatur zeigt den Minister als Schnecke."],
    ["der Zeichner, - (die Zeichnerin)", "the cartoonist, the draughtsman", "le dessinateur, la dessinatrice", "Loriot begann als Zeichner."],
    ["der Auftritt, -e", "the performance, the appearance", "le passage sur scène, le numéro", "Ihr Auftritt dauerte zwei Stunden."],
    ["auftreten", "to perform, to appear", "se produire", "Er tritt seit Jahren in kleinen Theatern auf."],
    ["die Fernsehserie, -n", "the TV series", "la série télévisée", "Die Fernsehserie lief in den Siebzigerjahren."],
    ["der Zuschauer, - (die Zuschauerin)", "the viewer, the spectator", "le spectateur, la spectatrice", "Die Zuschauer lachten Tränen."],
    ["die Mimik", "facial expression", "les expressions du visage", "Ihre Mimik sagt mehr als tausend Worte."],
    ["die Gestik", "gestures", "la gestuelle", "Er unterstreicht jede Pointe mit seiner Gestik."],
    ["der Spießer, - (die Spießerin)", "the philistine, the square", "le petit-bourgeois, la petite-bourgeoise", "Loriot zeigte Spießer mit viel Zuneigung."],
    ["spießig", "narrow-minded, stuffy", "étriqué, petit-bourgeois", "Die Wohnung war spießig eingerichtet."],
    ["steif", "stiff, formal", "guindé, raide", "Die Begrüßung war sehr steif."],
    ["die Gemütlichkeit", "cosiness", "le confort douillet, la convivialité", "Bei aller Gemütlichkeit kam es zum Streit."],
    ["der Lacher, -", "the laugh (a line that gets a laugh)", "le gag qui fait rire", "Der letzte Satz war der größte Lacher des Abends."]
  ] });

  W.LESSONS.push(
  {
    id: 148, level: "C2", icon: "smile",
    title: "Na toll!: irony, sarcasm and understatement", title_fr: "Na toll! : ironie, sarcasme et euphémisme",
    subtitle: "Recognise when someone means the opposite, and react appropriately.", subtitle_fr: "Reconnaître quand quelqu'un veut dire le contraire, et réagir comme il faut.",
    body: `
<h2>Irony: saying the opposite</h2>
<p><s-de>Na toll!</s-de> (after a failure) · <s-de>Das hast du ja prima hingekriegt.</s-de> · <s-de>Wunderbares Wetter heute!</s-de> (in the pouring rain)</p>
<p>Signals: exaggerated praise, particles like <s-de>ja</s-de> and <s-de>wohl</s-de>, the context, the tone of voice; in writing, quotation marks: <s-de>Die „Pause“ dauerte fünf Minuten.</s-de></p>
<h2>Sarcasm, understatement, self-irony</h2>
<table>
<tr><td><b>Sarkasmus</b>: irony that hurts</td><td><s-de>Du bist ja ein Genie.</s-de></td></tr>
<tr><td><b>Understatement</b>: saying less than you mean</td><td><s-de>Das war nicht ganz optimal.</s-de> (= a disaster)</td></tr>
<tr><td><b>Selbstironie</b>: laughing at yourself</td><td><s-de>Ich bin eben ein Organisationstalent.</s-de> (after forgetting everything)</td></tr>
</table>
<h2>When irony gets lost</h2>
<p>In emails and messages, tone and facial expression are missing. A wink helps: <s-de>;-)</s-de>, or clarify: <s-de>Das war ein Scherz.</s-de> · <s-de>Spaß beiseite: …</s-de></p>
<div class="tip">If you're not sure, ask: <s-de>War das jetzt ironisch gemeint?</s-de> Asking is better than taking irony at face value, or answering sincerity with irony.</div>
`,
    body_fr: `
<h2>L'ironie : dire le contraire</h2>
<p><s-de>Na toll!</s-de> (Génial ! après un échec) · <s-de>Das hast du ja prima hingekriegt.</s-de> (Bravo, c'est réussi.) · <s-de>Wunderbares Wetter heute!</s-de> (sous une pluie battante)</p>
<p>Les signaux : un éloge exagéré, des particules comme <s-de>ja</s-de> et <s-de>wohl</s-de>, le contexte, le ton ; à l'écrit, les guillemets : <s-de>Die „Pause“ dauerte fünf Minuten.</s-de></p>
<h2>Sarcasme, euphémisme, autodérision</h2>
<table>
<tr><td><b>Sarkasmus</b> : une ironie qui blesse</td><td><s-de>Du bist ja ein Genie.</s-de></td></tr>
<tr><td><b>Understatement</b> : en dire moins qu'on ne pense</td><td><s-de>Das war nicht ganz optimal.</s-de> (= une catastrophe)</td></tr>
<tr><td><b>Selbstironie</b> : rire de soi</td><td><s-de>Ich bin eben ein Organisationstalent.</s-de> (après avoir tout oublié)</td></tr>
</table>
<h2>Quand l'ironie se perd</h2>
<p>Dans les courriels et les messages, le ton et les expressions du visage manquent. Un clin d'œil aide : <s-de>;-)</s-de>, ou une précision : <s-de>Das war ein Scherz.</s-de> · <s-de>Spaß beiseite: …</s-de> (Trêve de plaisanterie…)</p>
<div class="tip">En cas de doute, demande : <s-de>War das jetzt ironisch gemeint?</s-de> Mieux vaut demander que prendre l'ironie au pied de la lettre, ou répondre par l'ironie à une remarque sincère.</div>
`,
    examples: [
      ["Na toll! Jetzt regnet es auch noch.", "Great! Now it's raining as well.", "Génial ! Et maintenant il pleut, en plus."],
      ["Das hast du ja prima hingekriegt.", "Well, you've made a fine job of that.", "Bravo, c'est réussi."],
      ["Die „Pause“ dauerte genau fünf Minuten.", "The “break” lasted exactly five minutes.", "La « pause » a duré exactement cinq minutes."],
      ["Das war nicht ganz optimal.", "That wasn't quite ideal.", "Ce n'était pas tout à fait idéal."],
      ["Ich bin eben ein Organisationstalent.", "I'm a born organiser, as you can see.", "Que veux-tu, je suis un as de l'organisation."],
      ["War das jetzt ironisch gemeint?", "Was that meant ironically?", "C'était ironique ?"],
      ["Spaß beiseite: Deine Idee ist wirklich gut.", "Joking aside: your idea is really good.", "Trêve de plaisanterie : ton idée est vraiment bonne."]
    ],
    quiz: [
      { q: "Your colleague drops his coffee and says “Na toll!” He means…", q_fr: "Ton collègue renverse son café et dit « Na toll! ». Il veut dire…", o: ["the opposite: it's annoying", "that it's great", "that he wants more coffee"], o_fr: ["le contraire : c'est agaçant", "que c'est génial", "qu'il veut plus de café"], a: 0, ex: "Irony: saying the opposite.", ex_fr: "Ironie : dire le contraire." },
      { q: "“Das war nicht ganz optimal” after a disaster is…", q_fr: "« Das war nicht ganz optimal » après une catastrophe est…", o: ["an understatement", "a compliment", "sarcasm"], o_fr: ["un euphémisme", "un compliment", "du sarcasme"], a: 0, ex: "Saying less than you mean.", ex_fr: "En dire moins qu'on ne pense." },
      { q: "Irony that hurts is…", q_fr: "Une ironie qui blesse, c'est…", o: ["Sarkasmus", "Selbstironie", "ein Kalauer"], a: 0, ex: "Sarkasmus = biting irony.", ex_fr: "Sarkasmus = ironie mordante." },
      { q: "“Joking aside: …”", q_fr: "« Trêve de plaisanterie : … »", o: ["Spaß beiseite: …", "Spaß daneben: …", "Witz weg: …"], a: 0, ex: "Spaß beiseite.", ex_fr: "Spaß beiseite." },
      { q: "In writing, a word in quotation marks can signal…", q_fr: "À l'écrit, un mot entre guillemets peut signaler…", o: ["irony", "a spelling mistake", "a foreign word only"], o_fr: ["l'ironie", "une faute d'orthographe", "seulement un mot étranger"], a: 0, ex: "Die „Pause“ dauerte fünf Minuten.", ex_fr: "Die „Pause“ dauerte fünf Minuten." }
    ]
  },
  {
    id: 149, level: "C2", icon: "split",
    title: "Der See, die See; Bänke, Banken: one word, two meanings", title_fr: "Der See, die See ; Bänke, Banken : un mot, deux sens",
    subtitle: "Words whose gender or plural changes with the meaning, and the puns they make possible.", subtitle_fr: "Les mots dont le genre ou le pluriel change avec le sens, et les jeux de mots qu'ils permettent.",
    body: `
<h2>Same word, different gender</h2>
<table>
<tr><td><s-de>der See</s-de> (lake)</td><td><s-de>die See</s-de> (sea)</td></tr>
<tr><td><s-de>der Leiter</s-de> (manager)</td><td><s-de>die Leiter</s-de> (ladder)</td></tr>
<tr><td><s-de>der Kiefer</s-de> (jaw)</td><td><s-de>die Kiefer</s-de> (pine tree)</td></tr>
<tr><td><s-de>das Steuer</s-de> (steering wheel)</td><td><s-de>die Steuer</s-de> (tax)</td></tr>
<tr><td><s-de>das Gehalt</s-de> (salary)</td><td><s-de>der Gehalt</s-de> (content)</td></tr>
<tr><td><s-de>das Schild</s-de> (sign)</td><td><s-de>der Schild</s-de> (shield)</td></tr>
</table>
<h2>Same word, different plural</h2>
<table>
<tr><td><s-de>die Bank</s-de></td><td><s-de>die Bänke</s-de> (benches) · <s-de>die Banken</s-de> (banks)</td></tr>
<tr><td><s-de>das Wort</s-de></td><td><s-de>die Wörter</s-de> (single words) · <s-de>die Worte</s-de> (words spoken, a statement)</td></tr>
<tr><td><s-de>die Mutter</s-de></td><td><s-de>die Mütter</s-de> (mothers) · <s-de>die Muttern</s-de> (nuts for bolts)</td></tr>
<tr><td><s-de>der Strauß</s-de></td><td><s-de>die Sträuße</s-de> (bouquets) · <s-de>die Strauße</s-de> (ostriches)</td></tr>
</table>
<h2>Puns</h2>
<p>Many German jokes and <s-de>Kalauer</s-de> play on these doubles: <s-de>Warum steht der Leiter auf der Leiter? Weil er den Überblick behalten will.</s-de></p>
<div class="tip">Learn these words in pairs, with their article and plural. <s-de>Die Worte des Präsidenten</s-de> (his statement) and <s-de>die Wörter im Wörterbuch</s-de> (individual words) is a distinction even many Germans get wrong.</div>
`,
    body_fr: `
<h2>Même mot, genre différent</h2>
<table>
<tr><td><s-de>der See</s-de> (le lac)</td><td><s-de>die See</s-de> (la mer)</td></tr>
<tr><td><s-de>der Leiter</s-de> (le responsable)</td><td><s-de>die Leiter</s-de> (l'échelle)</td></tr>
<tr><td><s-de>der Kiefer</s-de> (la mâchoire)</td><td><s-de>die Kiefer</s-de> (le pin)</td></tr>
<tr><td><s-de>das Steuer</s-de> (le volant)</td><td><s-de>die Steuer</s-de> (l'impôt)</td></tr>
<tr><td><s-de>das Gehalt</s-de> (le salaire)</td><td><s-de>der Gehalt</s-de> (la teneur)</td></tr>
<tr><td><s-de>das Schild</s-de> (le panneau)</td><td><s-de>der Schild</s-de> (le bouclier)</td></tr>
</table>
<h2>Même mot, pluriel différent</h2>
<table>
<tr><td><s-de>die Bank</s-de></td><td><s-de>die Bänke</s-de> (les bancs) · <s-de>die Banken</s-de> (les banques)</td></tr>
<tr><td><s-de>das Wort</s-de></td><td><s-de>die Wörter</s-de> (des mots isolés) · <s-de>die Worte</s-de> (des paroles, un propos)</td></tr>
<tr><td><s-de>die Mutter</s-de></td><td><s-de>die Mütter</s-de> (les mères) · <s-de>die Muttern</s-de> (les écrous)</td></tr>
<tr><td><s-de>der Strauß</s-de></td><td><s-de>die Sträuße</s-de> (les bouquets) · <s-de>die Strauße</s-de> (les autruches)</td></tr>
</table>
<h2>Les jeux de mots</h2>
<p>Beaucoup de blagues et de <s-de>Kalauer</s-de> jouent sur ces doublets : <s-de>Warum steht der Leiter auf der Leiter? Weil er den Überblick behalten will.</s-de> (Pourquoi le chef monte-t-il sur l'échelle ? Pour garder une vue d'ensemble.)</p>
<div class="tip">Apprends ces mots par paires, avec leur article et leur pluriel. <s-de>Die Worte des Präsidenten</s-de> (ses paroles) et <s-de>die Wörter im Wörterbuch</s-de> (des mots isolés) : même beaucoup d'Allemands confondent.</div>
`,
    examples: [
      ["Im Sommer schwimmen wir im See, im Urlaub fahren wir an die See.", "In summer we swim in the lake; on holiday we go to the seaside.", "L'été, on nage dans le lac ; en vacances, on va à la mer."],
      ["Der Leiter der Abteilung stieg auf die Leiter.", "The head of department climbed the ladder.", "Le chef de service monta sur l'échelle."],
      ["Im Park stehen neue Bänke, in der Stadt schließen alte Banken.", "There are new benches in the park; old banks are closing in town.", "Il y a de nouveaux bancs dans le parc ; en ville, de vieilles banques ferment."],
      ["Die Worte des Präsidenten wurden lange diskutiert.", "The president's words were discussed for a long time.", "Les paroles du président ont longtemps été discutées."],
      ["Im Wörterbuch stehen über hunderttausend Wörter.", "The dictionary contains over a hundred thousand words.", "Le dictionnaire contient plus de cent mille mots."],
      ["Wer am Steuer sitzt, muss auch Steuern zahlen.", "Whoever sits at the wheel also has to pay taxes.", "Celui qui tient le volant doit aussi payer des impôts."],
      ["Das Gehalt ist gut, aber der Gehalt der Arbeit ist gering.", "The salary is good, but the work has little substance.", "Le salaire est bon, mais le travail a peu de contenu."]
    ],
    quiz: [
      { q: "“the sea” (the Baltic, the North Sea…)", q_fr: "« la mer » (la Baltique, la mer du Nord…)", o: ["die See", "der See", "das See"], a: 0, ex: "der See = lake, die See = sea.", ex_fr: "der See = lac, die See = mer." },
      { q: "Plural of “die Bank” (bench):", q_fr: "Pluriel de « die Bank » (banc) :", o: ["die Bänke", "die Banken", "die Banks"], a: 0, ex: "Banken = financial institutions.", ex_fr: "Banken = établissements financiers." },
      { q: "“The minister's words” (a statement):", q_fr: "« Les paroles de la ministre » (un propos) :", o: ["die Worte der Ministerin", "die Wörter der Ministerin", "die Worten der Ministerin"], a: 0, ex: "Worte = connected words, a statement.", ex_fr: "Worte = des paroles, un propos." },
      { q: "“die Steuer” means…", q_fr: "« die Steuer » veut dire…", o: ["the tax", "the steering wheel", "the star"], o_fr: ["l'impôt", "le volant", "l'étoile"], a: 0, ex: "das Steuer = steering wheel.", ex_fr: "das Steuer = volant." },
      { q: "“der Leiter” is…", q_fr: "« der Leiter » est…", o: ["the manager", "the ladder", "the letter"], o_fr: ["le responsable", "l'échelle", "la lettre"], a: 0, ex: "die Leiter = ladder.", ex_fr: "die Leiter = échelle." }
    ]
  },
  {
    id: 150, level: "C2", kind: "functional", icon: "party-popper",
    title: "Everyday German: telling an anecdote and reacting to humour", title_fr: "L'allemand de tous les jours : raconter une anecdote et réagir à l'humour",
    subtitle: "Build up a story, land the punchline, react to jokes, and know when to stop joking.", subtitle_fr: "Construire une histoire, réussir la chute, réagir aux blagues, et savoir quand arrêter de plaisanter.",
    body: `
<h2>Starting</h2>
<p><s-de>Stell dir vor, …</s-de> · <s-de>Mir ist neulich etwas Lustiges passiert.</s-de> · <s-de>Kennst du den schon?</s-de> (a joke)</p>
<h2>Telling</h2>
<p>Switch to the present to make it vivid: <s-de>Ich stehe also im Kaffeehaus und bestelle…</s-de> Use direct speech, keep it short, and pause just before the punchline (<s-de>die Pointe</s-de>).</p>
<h2>Reacting</h2>
<table>
<tr><td>you liked it</td><td><s-de>Der ist gut!</s-de> · <s-de>Ich lach mich tot!</s-de></td></tr>
<tr><td>you knew it</td><td><s-de>Den kannte ich schon.</s-de></td></tr>
<tr><td>ironic</td><td><s-de>Sehr witzig.</s-de> (= not funny)</td></tr>
<tr><td>unsure</td><td><s-de>War das jetzt ironisch gemeint?</s-de></td></tr>
</table>
<h2>Back to serious</h2>
<p><s-de>Spaß beiseite: …</s-de> · <s-de>Im Ernst: …</s-de> · <s-de>Nichts für ungut.</s-de> (no offence)</p>
<div class="tip">Humour is a strong social glue, but also a minefield. With people you don't know well, at work and about anyone who is present, gentle self-irony is safer than jokes at someone else's expense.</div>
`,
    body_fr: `
<h2>Commencer</h2>
<p><s-de>Stell dir vor, …</s-de> (Imagine…) · <s-de>Mir ist neulich etwas Lustiges passiert.</s-de> · <s-de>Kennst du den schon?</s-de> (une blague)</p>
<h2>Raconter</h2>
<p>Passe au présent pour rendre la scène vivante : <s-de>Ich stehe also im Kaffeehaus und bestelle…</s-de> Emploie le discours direct, reste bref et fais une pause juste avant la chute (<s-de>die Pointe</s-de>).</p>
<h2>Réagir</h2>
<table>
<tr><td>elle t'a plu</td><td><s-de>Der ist gut!</s-de> · <s-de>Ich lach mich tot!</s-de> (Trop drôle !)</td></tr>
<tr><td>tu la connaissais</td><td><s-de>Den kannte ich schon.</s-de></td></tr>
<tr><td>ironique</td><td><s-de>Sehr witzig.</s-de> (= pas drôle)</td></tr>
<tr><td>dans le doute</td><td><s-de>War das jetzt ironisch gemeint?</s-de></td></tr>
</table>
<h2>Revenir au sérieux</h2>
<p><s-de>Spaß beiseite: …</s-de> · <s-de>Im Ernst: …</s-de> · <s-de>Nichts für ungut.</s-de> (Sans rancune.)</p>
<div class="tip">L'humour crée du lien, mais c'est aussi un terrain miné. Avec des gens que tu connais peu, au travail et à propos de personnes présentes, une autodérision bienveillante est plus sûre que des blagues aux dépens des autres.</div>
`,
    examples: [
      ["Stell dir vor, mir ist neulich in Wien etwas Lustiges passiert.", "Imagine, something funny happened to me in Vienna recently.", "Imagine, il m'est arrivé un truc drôle à Vienne l'autre jour."],
      ["Ich stehe also im Kaffeehaus und bestelle einen Kaffee mit Sahne.", "So I'm standing in the coffee house ordering a coffee with cream.", "Je suis donc au café et je commande un café avec de la crème."],
      ["Kennst du den schon? Treffen sich zwei Jäger. Beide tot.", "Have you heard this one? Two hunters meet. Both dead.", "Tu la connais ? Deux chasseurs se rencontrent. Morts tous les deux."],
      ["Der ist gut! Den kannte ich noch nicht.", "That's a good one! I didn't know it.", "Elle est bonne ! Je ne la connaissais pas."],
      ["Sehr witzig. Wirklich.", "Very funny. Really.", "Très drôle. Vraiment."],
      ["Spaß beiseite: Wie war die Reise wirklich?", "Joking aside: how was the trip really?", "Trêve de plaisanterie : comment s'est vraiment passé le voyage ?"],
      ["Nichts für ungut, das war nicht böse gemeint.", "No offence, I didn't mean any harm.", "Sans rancune, ce n'était pas méchant."]
    ],
    quiz: [
      { q: "Which tense makes an anecdote vivid?", q_fr: "Quel temps rend une anecdote vivante ?", o: ["The present", "The Plusquamperfekt", "The future"], o_fr: ["Le présent", "Le plus-que-parfait", "Le futur"], a: 0, ex: "Ich stehe also im Kaffeehaus…", ex_fr: "Ich stehe also im Kaffeehaus…" },
      { q: "“That's a good one!” (a joke)", q_fr: "« Elle est bonne ! » (une blague)", o: ["Der ist gut!", "Das ist gute!", "Die ist gut!"], a: 0, ex: "der Witz → der.", ex_fr: "der Witz → der." },
      { q: "“Sehr witzig.” said flatly usually means…", q_fr: "« Sehr witzig. » dit d'un ton plat signifie en général…", o: ["Not funny at all.", "Very funny!", "Tell me another one."], o_fr: ["Pas drôle du tout.", "Très drôle !", "Raconte-m'en une autre."], a: 0, ex: "Ironic reaction.", ex_fr: "Réaction ironique." },
      { q: "“No offence.”", q_fr: "« Sans rancune. »", o: ["Nichts für ungut.", "Nichts für gut.", "Kein Ungut."], a: 0, ex: "Nichts für ungut.", ex_fr: "Nichts für ungut." },
      { q: "Which humour is safest with people you don't know well?", q_fr: "Quel humour est le plus sûr avec des gens qu'on connaît peu ?", o: ["Gentle self-irony", "Jokes about someone present", "Sarcasm"], o_fr: ["Une autodérision bienveillante", "Des blagues sur une personne présente", "Le sarcasme"], a: 0, ex: "Laugh at yourself, not at others.", ex_fr: "Rire de soi, pas des autres." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    148: {
      gap: [["Na ___! Jetzt regnet es auch noch.", "toll"], ["Das hast du ja prima ___. (hinkriegen)", "hingekriegt"], ["War das jetzt ironisch ___?", "gemeint"], ["Spaß ___: Deine Idee ist wirklich gut.", "beiseite"]],
      fix: [["Die Präsentation war eine Katastrophe. „Na toll!“, sagte er glücklich.", "Die Präsentation war eine Katastrophe. „Na toll!“, sagte er genervt.", "“Na toll!” after a failure is ironic: he's annoyed, not happy.", "« Na toll! » après un échec est ironique : il est agacé, pas content."], ["Spaß weg: Wie geht es dir wirklich?", "Spaß beiseite: Wie geht es dir wirklich?", "The fixed phrase is Spaß beiseite.", "La tournure figée est Spaß beiseite."]],
      task: ["Write three short reactions to these situations, one ironic, one understated and one self-ironic: your train is two hours late; your cake has burnt; you've forgotten your own birthday party.", "Écris trois courtes réactions à ces situations, une ironique, une sous forme d'euphémisme et une pleine d'autodérision : ton train a deux heures de retard ; ton gâteau a brûlé ; tu as oublié ta propre fête d'anniversaire.", "Zwei Stunden Verspätung? Na wunderbar, dann kann ich endlich mein Buch zu Ende lesen. Der Kuchen ist vielleicht etwas zu dunkel geraten. Ich bin eben ein Organisationstalent: Ich vergesse sogar meine eigene Party."]
    },
    149: {
      gap: [["Im Urlaub fahren wir an ___ See. (Meer)", "die"], ["Im Park stehen neue ___. (die Bank, Sitzmöbel)", "Bänke"], ["Die ___ des Präsidenten wurden lange diskutiert. (das Wort)", "Worte"], ["Wer am ___ sitzt, fährt das Auto. (Lenkrad)", "Steuer"]],
      fix: [["Wir schwimmen im die See.", "Wir schwimmen im See.", "der See (lake): im See.", "der See (lac) : im See."], ["Die Wörter des Präsidenten waren bewegend.", "Die Worte des Präsidenten waren bewegend.", "A statement: die Worte.", "Un propos : die Worte."]],
      task: ["Write three sentences, each using one of these pairs correctly: der See / die See; die Bänke / die Banken; das Steuer / die Steuer.", "Écris trois phrases, chacune avec l'une de ces paires employée correctement : der See / die See ; die Bänke / die Banken ; das Steuer / die Steuer.", "Am Wochenende baden wir im See, im Sommer fahren wir an die See. Auf den Bänken vor den Banken sitzen oft Rentner. Wer am Steuer sitzt, sollte nicht an die Steuer denken."]
    },
    150: {
      gap: [["Stell dir ___: Mir ist etwas Lustiges passiert.", "vor"], ["Der ist gut! Den ___ ich noch nicht. (kennen, Präteritum)", "kannte"], ["Nichts für ___, das war nicht böse gemeint.", "ungut"], ["Im ___: Wie war die Reise wirklich?", "Ernst"]],
      fix: [["Gestern ich stehe im Kaffeehaus und bestelle einen Kaffee.", "Gestern stehe ich im Kaffeehaus und bestelle einen Kaffee.", "Verb second, even in a vivid present.", "Verbe en deuxième position, même au présent de narration."], ["Die ist gut!", "Der ist gut!", "der Witz → der.", "der Witz → der."]],
      task: ["Tell a short anecdote (about 80 words) about a funny misunderstanding you experienced: start, present tense for the main part, direct speech, and a punchline.", "Raconte une courte anecdote (environ 80 mots) sur un malentendu drôle que tu as vécu : début, présent pour la partie principale, discours direct et chute.", "Mir ist neulich in Wien etwas Lustiges passiert. Ich stehe also im Kaffeehaus und bestelle auf Hochdeutsch einen „Kaffee mit Sahne“. Der Kellner schaut mich lange an und fragt: „Meinen S' eine Melange mit Schlagobers?“ Ich habe keine Ahnung, was das ist, sage aber selbstbewusst: „Ja, genau!“ Fünf Minuten später bekomme ich einen wunderbaren Kaffee mit Milchschaum und einem Berg Sahne. Seitdem bestelle ich in Wien nur noch auf Österreichisch."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "ironiesignale", lesson: 148, level: "C2", icon: "smile", partner: "Tim", role: "a colleague", role_fr: "un collègue",
    title: "A bad day at work", title_fr: "Une mauvaise journée au travail",
    setting: "Your colleague Tim comes back from a presentation that went wrong. He's being ironic; you recognise it and cheer him up.", setting_fr: "Ton collègue Tim revient d'une présentation qui a mal tourné. Il fait de l'ironie ; tu la reconnais et tu lui remontes le moral.",
    turns: [
      { p: "Na toll. Der Beamer ist mitten in meiner Präsentation ausgefallen. Ein perfekter Tag!", en: "Great. The projector broke down in the middle of my presentation. A perfect day!", fr: "Génial. Le vidéoprojecteur a lâché au milieu de ma présentation. Une journée parfaite !" },
      { y: ["Das war jetzt ironisch gemeint, oder? Das tut mir leid für dich.", "Das war jetzt ironisch gemeint, oder? Das tut mir leid für dir.", "Das war jetzt ironisch gemeint, oder? Das tut mich leid für dich."], en: "That was meant ironically, right? I'm sorry for you.", fr: "C'était ironique, non ? Je suis triste pour toi.", why: "für + accusative (dich); es tut mir leid (dative).", why_fr: "für + accusatif (dich) ; es tut mir leid (datif)." },
      { p: "Und dann hat der Chef gesagt: „Interessanter Ansatz.“", en: "And then the boss said: “Interesting approach.”", fr: "Et ensuite le chef a dit : « Approche intéressante. »" },
      { y: ["Wenn er „interessant“ sagt, meint er wohl eher „ungewöhnlich“.", "Wenn er „interessant“ sagt, er meint wohl eher „ungewöhnlich“.", "Wenn er „interessant“ sagt, meint er wohl eher „ungewöhnlich“ ist."], en: "When he says “interesting”, he probably means “unusual”.", fr: "Quand il dit « intéressant », il veut sans doute dire « inhabituel ».", why: "After the wenn-clause, the verb comes first.", why_fr: "Après la proposition en wenn, le verbe vient en premier." },
      { p: "Ich wäre am liebsten im Boden versunken.", en: "I wanted the ground to swallow me up.", fr: "J'aurais voulu disparaître sous terre." },
      { y: ["Ach was, so schlimm war es bestimmt nicht. Das passiert den Besten.", "Ach was, so schlimm war es bestimmt nicht. Das passiert die Besten.", "Ach was, so schlimm war es bestimmt nicht. Das passiert den Beste."], en: "Oh, come on, it surely wasn't that bad. It happens to the best of us.", fr: "Allons, ce n'était sûrement pas si grave. Ça arrive aux meilleurs.", why: "passieren + dative plural: den Besten.", why_fr: "passieren + datif pluriel : den Besten." },
      { p: "Und wie soll ich das jetzt sehen?", en: "And how am I supposed to see it now?", fr: "Et comment je dois voir les choses, maintenant ?" },
      { y: ["Nimm es mit Humor: Nächstes Mal bringst du einfach einen zweiten Beamer mit.", "Nimm es mit Humor: Nächstes Mal mitbringst du einfach einen zweiten Beamer.", "Nehm es mit Humor: Nächstes Mal bringst du einfach einen zweiten Beamer mit."], en: "Take it with humour: next time you'll just bring a second projector.", fr: "Prends-le avec humour : la prochaine fois, tu apporteras un deuxième vidéoprojecteur.", why: "Imperative nimm; mitbringen is separable.", why_fr: "Impératif nimm ; mitbringen est séparable." },
      { p: "Sehr witzig. Aber du hast recht, ich lache schon wieder.", en: "Very funny. But you're right, I'm laughing again already.", fr: "Très drôle. Mais tu as raison, je ris déjà de nouveau." },
      { y: ["Siehst du? Spaß beiseite: Deine Präsentation war wirklich gut.", "Siehst du? Spaß beiseite: Deinen Präsentation war wirklich gut.", "Siehst du? Spaß beiseite: Deine Präsentation ist wirklich gut gewesen war."], en: "See? Joking aside: your presentation was really good.", fr: "Tu vois ? Trêve de plaisanterie : ta présentation était vraiment bonne.", why: "Spaß beiseite; nominative deine Präsentation.", why_fr: "Spaß beiseite ; nominatif deine Präsentation." }
    ] },
  { id: "anekdote", lesson: 150, level: "C2", icon: "party-popper", partner: "Carla", role: "a friend at a dinner party", role_fr: "une amie à un dîner",
    title: "A story from Vienna", title_fr: "Une histoire de Vienne",
    setting: "At a dinner party, your friend Carla asks you to tell the funny story of your trip to Vienna.", setting_fr: "À un dîner, ton amie Carla te demande de raconter l'histoire drôle de ton voyage à Vienne.",
    turns: [
      { p: "Erzähl doch mal, was dir in Wien passiert ist!", en: "Go on, tell us what happened to you in Vienna!", fr: "Raconte un peu ce qui t'est arrivé à Vienne !" },
      { y: ["Also, stell dir vor: Ich stehe im Kaffeehaus und bestelle auf Hochdeutsch einen „Kaffee mit Sahne“.", "Also, stell dir vor: Ich stehe im Kaffeehaus und bestelle auf Hochdeutsch ein „Kaffee mit Sahne“.", "Also, stell dir vor: Ich stehe im Kaffeehaus und bestellen auf Hochdeutsch einen „Kaffee mit Sahne“."], en: "So, imagine: I'm standing in the coffee house and I order a “coffee with cream” in standard German.", fr: "Alors, imagine : je suis au café et je commande en allemand standard un « café avec de la crème ».", why: "Vivid present; einen Kaffee (accusative).", why_fr: "Présent de narration ; einen Kaffee (accusatif)." },
      { p: "Und? Was hat der Kellner gesagt?", en: "And? What did the waiter say?", fr: "Et alors ? Qu'a dit le serveur ?" },
      { y: ["Er hat mich lange angeschaut und dann gefragt, ob ich eine Melange mit Schlagobers meine.", "Er hat mich lange angeschaut und dann gefragt, ob ich meine eine Melange mit Schlagobers.", "Er hat mich lange angeschaut und dann gefragt, ob ich eine Melange mit Schlagobers meinen."], en: "He looked at me for a long time and then asked whether I meant a Melange with Schlagobers.", fr: "Il a longuement posé les yeux sur moi, puis m'a demandé si je voulais dire une Melange avec du Schlagobers.", why: "ob: verb at the end; ich meine.", why_fr: "ob : verbe à la fin ; ich meine." },
      { p: "Ha! Und was hast du gemacht?", en: "Ha! And what did you do?", fr: "Ha ! Et qu'est-ce que tu as fait ?" },
      { y: ["Ich habe einfach „Ja, genau!“ gesagt und so getan, als ob ich das gemeint hätte.", "Ich habe einfach „Ja, genau!“ gesagt und so getan, als ob hätte ich das gemeint.", "Ich habe einfach „Ja, genau!“ gesagt und so getan, als ob ich das gemeint habe hätte."], en: "I just said “Yes, exactly!” and acted as if that was what I'd meant.", fr: "J'ai simplement dit « Oui, exactement ! » et j'ai fait comme si c'était ce que je voulais dire.", why: "als ob + Konjunktiv II at the end.", why_fr: "als ob + Konjunktiv II à la fin." },
      { p: "Kennst du den? Treffen sich zwei Jäger. Beide tot.", en: "Have you heard this one? Two hunters meet. Both dead.", fr: "Tu la connais ? Deux chasseurs se rencontrent. Morts tous les deux." },
      { y: ["Der ist gut! Den kannte ich noch nicht.", "Das ist gut! Der kannte ich noch nicht.", "Der ist gut! Den kannte ich noch nichts."], en: "That's a good one! I didn't know it.", fr: "Elle est bonne ! Je ne la connaissais pas.", why: "der Witz → der, den (accusative).", why_fr: "der Witz → der, den (accusatif)." },
      { p: "Lacht man bei dir zu Hause eigentlich über dieselben Witze?", en: "Do people back home laugh at the same jokes, actually?", fr: "Chez toi, on rit des mêmes blagues, au fait ?" },
      { y: ["Teilweise. Wortspiele gehen beim Übersetzen meistens verloren, aber Situationskomik versteht man überall.", "Teilweise. Wortspiele gehen beim Übersetzen meistens verlieren, aber Situationskomik versteht man überall.", "Teilweise. Wortspiele gehen beim Übersetzen meistens verloren, aber Situationskomik versteht überall man."], en: "Partly. Puns usually get lost in translation, but situational comedy is understood everywhere.", fr: "En partie. Les jeux de mots se perdent souvent à la traduction, mais le comique de situation se comprend partout.", why: "verloren gehen (participle); verb second.", why_fr: "verloren gehen (participe) ; verbe en deuxième position." }
    ] }
  );

  W.READINGS.push({
    id: "loriot", level: "C2", icon: "laugh", title: "Loriot: der Meister des Missverständnisses", genre: "Feature article",
    intro: "Little men with big noses, a boiled egg and too little tinsel: why Germans still quote Loriot.",
    intro_fr: "De petits bonshommes au gros nez, un œuf à la coque et pas assez de guirlandes : pourquoi les Allemands citent encore Loriot.",
    paragraphs: [
      { de: "Er hieß eigentlich Bernhard-Victor Christoph-Carl von Bülow, doch ganz Deutschland kannte ihn als Loriot. Der Künstlername ist das französische Wort für den Pirol, das Wappentier seiner Familie. Vicco von Bülow, wie man ihn auch nannte, wurde 1923 in Brandenburg an der Havel geboren und starb 2011 am Starnberger See.", en: "His real name was Bernhard-Victor Christoph-Carl von Bülow, but the whole of Germany knew him as Loriot. The stage name is the French word for the golden oriole, the heraldic animal of his family. Vicco von Bülow, as he was also called, was born in Brandenburg an der Havel in 1923 and died on Lake Starnberg in 2011.", fr: "Il s'appelait en réalité Bernhard-Victor Christoph-Carl von Bülow, mais toute l'Allemagne le connaissait sous le nom de Loriot. Son pseudonyme est le mot français désignant cet oiseau, l'animal héraldique de sa famille. Vicco von Bülow, comme on l'appelait aussi, naquit en 1923 à Brandenburg an der Havel et mourut en 2011 au bord du lac de Starnberg." },
      { de: "Bekannt wurde er zunächst als Zeichner. Seine Männchen mit den großen Knollennasen erschienen in Zeitschriften und Büchern. Sie sind stets höflich, gut erzogen und bemüht, Haltung zu bewahren, auch wenn um sie herum alles zusammenbricht.", en: "He first became known as a cartoonist. His little men with big bulbous noses appeared in magazines and books. They are always polite, well-mannered and anxious to keep their composure, even when everything around them is collapsing.", fr: "Il se fit d'abord connaître comme dessinateur. Ses petits bonshommes au gros nez en patate parurent dans des magazines et des livres. Ils sont toujours polis, bien élevés et soucieux de garder leur contenance, même quand tout s'écroule autour d'eux." },
      { de: "Von 1976 bis 1978 entstand für Radio Bremen die Fernsehserie „Loriot“, in der er mit Evelyn Hamann zahlreiche Sketche spielte. Viele davon handeln von Missverständnissen: Ein Ehepaar streitet beim Frühstück darüber, wie lange ein Ei kochen muss; eine Familie verzweifelt an Heiligabend an Geschenken und Ritualen. Sätze wie „Früher war mehr Lametta“ sind bis heute sprichwörtlich.", en: "From 1976 to 1978, the TV series “Loriot” was made for Radio Bremen, in which he performed many sketches with Evelyn Hamann. Many of them are about misunderstandings: a married couple argue at breakfast about how long an egg should boil; a family despairs on Christmas Eve over presents and rituals. Lines such as “There used to be more tinsel” have become proverbial.", fr: "De 1976 à 1978, il réalisa pour Radio Bremen la série télévisée « Loriot », où il joua de nombreux sketchs avec Evelyn Hamann. Beaucoup portent sur des malentendus : un couple se dispute au petit déjeuner sur le temps de cuisson d'un œuf ; une famille désespère le soir de Noël devant les cadeaux et les rituels. Des phrases comme « Avant, il y avait plus de guirlandes » sont devenues proverbiales." },
      { de: "Später drehte er Kinofilme wie „Ödipussi“ (1988) und „Pappa ante Portas“ (1991). Seine Komik lebt von genauer Beobachtung und präziser Sprache: Seine Figuren reden höflich und ernsthaft aneinander vorbei. Einer seiner bekanntesten Sätze lautet: „Ein Leben ohne Mops ist möglich, aber sinnlos.“", en: "Later he made feature films such as “Ödipussi” (1988) and “Pappa ante Portas” (1991). His comedy lives from close observation and precise language: his characters talk past each other politely and earnestly. One of his best-known lines is: “A life without a pug is possible, but pointless.”", fr: "Plus tard, il tourna des films comme « Ödipussi » (1988) et « Pappa ante Portas » (1991). Son comique repose sur une observation minutieuse et une langue précise : ses personnages ne se comprennent pas, poliment et avec le plus grand sérieux. L'une de ses phrases les plus connues : « Une vie sans carlin est possible, mais absurde. »" }
    ],
    glossary: { "Künstlername": ["stage name", "pseudonyme"], "Pirol": ["golden oriole", "loriot (oiseau)"], "Wappentier": ["heraldic animal", "animal héraldique"], "Starnberger": ["of Starnberg", "de Starnberg"], "Männchen": ["little men", "petits bonshommes"], "Knollennasen": ["bulbous noses", "nez en patate"], "Zeitschriften": ["magazines", "magazines"], "erzogen": ["brought up", "élevé"], "bemüht": ["anxious, keen", "soucieux"], "Haltung": ["composure", "contenance"], "zusammenbricht": ["collapses", "s'écroule"], "Sketche": ["sketches", "sketchs"], "Ehepaar": ["married couple", "couple marié"], "Heiligabend": ["Christmas Eve", "soir de Noël"], "Ritualen": ["rituals", "rituels"], "Lametta": ["tinsel", "guirlandes"], "sprichwörtlich": ["proverbial", "proverbial"], "drehte": ["shot (a film)", "tourna"], "Kinofilme": ["feature films", "films de cinéma"], "Beobachtung": ["observation", "observation"], "präziser": ["precise", "précise"], "aneinander": ["(aneinander vorbeireden) past each other", "(aneinander vorbeireden) sans se comprendre"], "vorbei": ["past", "à côté"], "Mops": ["pug", "carlin"], "sinnlos": ["pointless", "absurde, vain"] },
    questions: [
      { q: "Was bedeutet der Name „Loriot“?", o: ["Es ist das französische Wort für den Pirol, das Wappentier seiner Familie.", "Es ist der Name seiner Heimatstadt.", "Es ist ein Wort für „Humor“."], a: 0 },
      { q: "Womit wurde er zuerst bekannt?", o: ["Mit seinen Zeichnungen", "Mit Kinofilmen", "Mit Radiosendungen"], a: 0 },
      { q: "Mit wem spielte er in der Fernsehserie viele Sketche?", o: ["Mit Evelyn Hamann", "Mit Thomas Mann", "Mit Radio Bremen"], a: 0 },
      { q: "Wovon handeln viele seiner Sketche?", o: ["Von Missverständnissen", "Von Kriegen", "Von Sportereignissen"], a: 0 },
      { q: "Wie reden seine Figuren?", o: ["Höflich und ernsthaft aneinander vorbei", "Laut und unhöflich", "Nur in Reimen"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-c2-6", unit: "c2-6", level: "C2", icon: "radio",
    title: "Warum wir Ironie missverstehen", title_fr: "Pourquoi on comprend mal l'ironie",
    context: "A radio interview with Dr. Seifert, a linguist who studies irony and humour.", context_fr: "Une interview radio avec Dr. Seifert, linguiste spécialiste de l'ironie et de l'humour.",
    words: [["die Mimik", "facial expression", "les expressions du visage"], ["das Missgeschick", "the mishap", "la mésaventure"], ["verraten", "to give away, to reveal", "trahir, révéler"], ["aneinander vorbeireden", "to talk at cross purposes", "ne pas se comprendre"], ["übersetzbar", "translatable", "traduisible"]],
    lines: [["Moderator", "Frau Seifert, Sie erforschen, wie Ironie funktioniert. Warum missverstehen wir sie so oft?", "de-DE"], ["Dr. Seifert", "Weil Ironie das Gegenteil von dem sagt, was sie meint. Im Gespräch helfen uns Tonfall und Mimik. In einer E-Mail fehlt beides, und schon wird aus einem „Na toll!“ echte Begeisterung.", "de-DE"], ["Moderator", "Gibt es typische Signale?", "de-DE"], ["Dr. Seifert", "Übertriebenes Lob zum Beispiel. Wer nach einem Missgeschick sagt „Das hast du ja wieder prima hingekriegt“, meint selten ein Lob. Auch kleine Wörter wie „ja“ oder „wohl“ verraten viel.", "de-DE"], ["Moderator", "Und warum lachen so viele Deutsche bis heute über Loriot?", "de-DE"], ["Dr. Seifert", "Weil er zeigt, wie Menschen aneinander vorbeireden. Seine Figuren sind höflich, ernsthaft und völlig hilflos. Man erkennt sich darin wieder, und genau das ist komisch.", "de-DE"], ["Moderator", "Ist Humor also übersetzbar?", "de-DE"], ["Dr. Seifert", "Teilweise. Wortspiele gehen fast immer verloren, Situationskomik dagegen versteht man überall.", "de-DE"]],
    gist: ["Worum geht es im Gespräch?", ["Um Ironie und Humor in der Kommunikation", "Um eine neue Fernsehserie", "Um die Geschichte des Kabaretts"]],
    detail: [["Warum missverstehen wir Ironie in E-Mails?", ["Tonfall und Mimik fehlen.", "E-Mails sind zu kurz.", "Niemand liest E-Mails genau."]], ["Welches Signal nennt Dr. Seifert?", ["Übertriebenes Lob", "Lange Pausen", "Viele Fremdwörter"]], ["Warum lachen viele über Loriot?", ["Man erkennt sich in seinen Figuren wieder.", "Er spricht sehr schnell.", "Seine Sketche sind sehr kurz."]], ["Was geht beim Übersetzen fast immer verloren?", ["Wortspiele", "Situationskomik", "Die Handlung"]]],
    decode: ["In einer E-Mail fehlt beides", "Wortspiele gehen fast immer verloren, Situationskomik dagegen versteht man überall"],
    tip: "Notice how Dr. Seifert quotes ironic phrases (Na toll!, Das hast du ja wieder prima hingekriegt) with a different tone from her own sentences. When you listen, tone is the key to irony: a flat or exaggerated voice usually means the opposite of the words.", tip_fr: "Remarque comment Dr. Seifert cite des phrases ironiques (Na toll!, Das hast du ja wieder prima hingekriegt) sur un autre ton que ses propres phrases. À l'écoute, le ton est la clé de l'ironie : une voix plate ou exagérée signifie en général le contraire des mots."
  }]);

  W.PROMPTS.push({ id: "de-c2-6", level: "C2", q: "Halte einen Vortrag (etwa drei bis vier Minuten): „Gibt es einen typisch deutschen Humor?“ Prüfe das Klischee, nenne Beispiele und komm zu einer differenzierten Antwort.", en: "Give a talk (about three to four minutes): “Is there a typically German sense of humour?” Examine the cliché, give examples and reach a nuanced answer.", fr: "Fais un exposé (environ trois à quatre minutes) : « Existe-t-il un humour typiquement allemand ? » Examine le cliché, donne des exemples et arrive à une réponse nuancée.", time: 240,
    phrases: ["Ein verbreitetes Klischee lautet, …", "Nicht ohne Grund…", "Ein gutes Beispiel ist…", "Was … komisch macht, ist…", "Spaß beiseite: …"],
    model: "Ein verbreitetes Klischee lautet, die Deutschen hätten keinen Humor. Wer das behauptet, kennt Loriot nicht. Seine Sketche aus den Siebzigerjahren werden bis heute zitiert, und Sätze wie „Früher war mehr Lametta“ versteht in Deutschland fast jeder. Was Loriot so komisch macht, ist nicht der laute Witz, sondern die genaue Beobachtung: Menschen, die höflich und ernsthaft aneinander vorbeireden. Nicht ohne Grund spielt auch im Kabarett die Sprache eine große Rolle. Viele Pointen beruhen auf Wortspielen, auf Ironie oder auf der Lust an der präzisen Formulierung. Das mag manchen trocken erscheinen, und vielleicht entsteht daher das Klischee. Spaß beiseite: Ich glaube nicht, dass es einen einheitlichen deutschen Humor gibt. In Köln lacht man anders als in Berlin, und eine Siebzigjährige lacht über andere Dinge als ein Teenager. Gemeinsam ist vielen deutschen Komikern allenfalls die Freude daran, Ordnung und Förmlichkeit ins Absurde zu führen. Letzten Endes ist Humor weniger eine Frage der Nation als der Persönlichkeit." });

  W.WRITING_GUIDE["c2-6"] = { genre: "An essay (C2)", genre_fr: "Un essai (C2)",
    plan: [["A famous quotation and your thesis.", "Une citation célèbre et ta thèse."], ["Why humour matters in a democracy.", "Pourquoi l'humour compte en démocratie."], ["Who is being laughed at?", "De qui rit-on ?"], ["Humour and context.", "L'humour et le contexte."], ["An example and a conclusion.", "Un exemple et une conclusion."]],
    marks: [["Meines Erachtens hatte Tucholsky im Kern recht", "the thesis", "la thèse"], ["Nicht zufällig", "a litotes", "une litote"], ["man denke nur an", "a set phrase in the Konjunktiv I", "une tournure figée au Konjunktiv I"], ["Was als Humor verkauft wird, ist", "a free relative clause", "une relative sans antécédent"], ["Gerade deshalb ist Loriot bis heute so beliebt", "an example", "un exemple"], ["Guter Humor tritt nach oben, nicht nach unten", "a pithy antithesis", "une antithèse frappante"]] };

  /* Atelier de langue : champs allemands d'abord, puis anglais et français (voir localize.js). */
  W.LEXIS = W.LEXIS || {};
  W.LEXIS["c2-6"] = {
    colloc: [
      ["einen Witz erzählen", "to tell a joke", "raconter une blague", "Er erzählte einen Witz nach dem anderen.", "erzählte", ["sprach", "redete"]],
      ["eine Pointe setzen", "to land a punchline", "réussir sa chute", "Sie setzt ihre Pointen perfekt.", "setzt", ["legt", "stellt"]],
      ["für Lacher sorgen", "to get laughs", "faire rire", "Seine Bemerkung sorgte für Lacher.", "sorgte", ["kümmerte", "pflegte"]],
      ["sich das Lachen verkneifen", "to stifle a laugh", "se retenir de rire", "Ich konnte mir das Lachen kaum verkneifen.", "verkneifen", ["verknüpfen", "verkneten"]],
      ["in schallendes Gelächter ausbrechen", "to burst out laughing", "éclater de rire", "Das Publikum brach in schallendes Gelächter aus.", "brach", ["riss", "sprang"]],
      ["die Ironie heraushören", "to detect the irony", "percevoir l'ironie", "Sie hörte die Ironie sofort heraus.", "hörte", ["sah", "nahm"]],
      ["Seitenhiebe verteilen", "to make snide remarks", "lancer des piques", "In seiner Rede verteilte er einige Seitenhiebe.", "verteilte", ["verteidigte", "verteuerte"]],
      ["sich über jemanden lustig machen", "to make fun of someone", "se moquer de quelqu'un", "Loriot machte sich über die Steifheit der Bürger lustig.", "machte", ["tat", "gab"]],
      ["Humor beweisen", "to show a sense of humour", "faire preuve d'humour", "Sie bewies Humor und lachte über sich selbst.", "bewies", ["beweinte", "bewarb"]],
      ["auf etwas anspielen", "to allude to something", "faire allusion à quelque chose", "Der Sketch spielt auf eine bekannte Fernsehwerbung an.", "spielt", ["stellt", "zielt"]]
    ],
    wf: [
      ["Seine Bemerkung war ironisch ___. (MEINEN)", "gemeint"],
      ["Die ___ der Szene liegt in ihrer Ernsthaftigkeit. (KOMISCH)", "Komik"],
      ["Er erzählte die Geschichte sehr ___. (WITZ)", "witzig"],
      ["Loriots Figuren sind höflich und völlig ___. (HILFE)", "hilflos"],
      ["Seine ___ zeigten Männchen mit Knollennasen. (ZEICHNEN)", "Zeichnungen"],
      ["Viele Sketche handeln von ___. (MISSVERSTEHEN)", "Missverständnissen"],
      ["Sie reagierte mit viel ___. (SELBSTIRONISCH)", "Selbstironie"],
      ["Die ___ ihres Humors liegt im Detail. (STARK)", "Stärke"]
    ],
    kwt: [
      ["Er hat dich nur veralbert.", "ARM", "Er hat ___.", "dich nur auf den Arm genommen"],
      ["Ich musste mich sehr zusammennehmen, um nicht zu lachen.", "VERKNEIFEN", "Ich konnte ___.", "mir das Lachen kaum verkneifen"],
      ["Das Publikum lachte plötzlich sehr laut.", "GELÄCHTER", "Das Publikum ___.", "brach in schallendes Gelächter aus|brach plötzlich in schallendes Gelächter aus|brach in lautes Gelächter aus"],
      ["Wenn es um ihn selbst geht, findet er Witze gar nicht lustig.", "SPAẞ", "Er ___, wenn es um ihn selbst geht.", "versteht keinen Spaß"],
      ["Ironie erkennt sie sofort.", "HERAUS", "Sie ___.", "hört die Ironie sofort heraus"],
      ["Sie konnte über sich selbst lachen.", "BEWIES", "Sie ___ über sich selbst.", "bewies Humor und lachte"]
    ],
    idioms: [
      ["jemanden auf den Arm nehmen", "sich einen Spaß mit jemandem erlauben", "to pull someone's leg", "faire marcher quelqu'un", "Glaub ihm nicht, er nimmt dich auf den Arm.", "nimmt dich auf den Arm"],
      ["jemanden durch den Kakao ziehen", "sich über jemanden lustig machen", "to make fun of someone", "tourner quelqu'un en dérision", "Im Kabarett wurde der Minister durch den Kakao gezogen.", "durch den Kakao gezogen"],
      ["der Schalk sitzt jemandem im Nacken", "jemand ist zu Scherzen aufgelegt", "someone is full of mischief", "avoir l'esprit farceur", "Bei ihm sitzt der Schalk im Nacken.", "sitzt der Schalk im Nacken"],
      ["sich vor Lachen den Bauch halten", "sehr heftig lachen", "to split one's sides laughing", "se tordre de rire", "Das Publikum hielt sich vor Lachen den Bauch.", "vor Lachen den Bauch"],
      ["Tränen lachen", "so lachen, dass man weint", "to laugh till one cries", "rire aux larmes", "Bei diesem Sketch haben wir Tränen gelacht.", "Tränen gelacht"],
      ["jemanden auf die Schippe nehmen", "jemanden necken", "to tease someone", "taquiner quelqu'un", "Die Kollegen nehmen ihn gern auf die Schippe.", "auf die Schippe"],
      ["keinen Spaß verstehen", "humorlos sein", "to have no sense of humour", "ne pas avoir le sens de l'humour", "Bei Geld versteht er keinen Spaß.", "versteht er keinen Spaß"],
      ["Humor ist, wenn man trotzdem lacht.", "Man sollte auch in schwierigen Lagen lachen können", "Humour is laughing anyway.", "L'humour, c'est rire malgré tout.", "Der Zug fällt aus? Humor ist, wenn man trotzdem lacht.", "Humor ist, wenn man trotzdem lacht"]
    ]
  };

  W.COURSE.push({ id: "c2-6", level: "C2", icon: "laugh", title: "Humour and irony", title_fr: "Humour et ironie",
    intro: "Understanding a joke is one of the last steps to mastering a language. In this unit, you'll learn to recognise irony, sarcasm and understatement (Na toll! – Das war nicht ganz optimal), words that change gender or plural with their meaning (der See, die See; Bänke, Banken), and how to tell an anecdote and react to humour. You'll also read about Loriot, the master of German misunderstandings.",
    intro_fr: "Comprendre une blague est l'une des dernières étapes vers la maîtrise d'une langue. Dans cette unité, tu vas apprendre à reconnaître l'ironie, le sarcasme et l'euphémisme (Na toll! – Das war nicht ganz optimal), les mots qui changent de genre ou de pluriel avec leur sens (der See, die See ; Bänke, Banken), et la façon de raconter une anecdote et de réagir à l'humour. Tu liras aussi un texte sur Loriot, le maître des malentendus à l'allemande.",
    can: ["Recognise irony, sarcasm, understatement and self-irony", "Use words whose gender or plural depends on meaning", "Tell an anecdote and react to jokes and irony", "Talk about humour, comedy and cabaret", "Write an essay on the limits of humour (C2)"],
    can_fr: ["Reconnaître l'ironie, le sarcasme, l'euphémisme et l'autodérision", "Employer les mots dont le genre ou le pluriel dépend du sens", "Raconter une anecdote et réagir aux blagues et à l'ironie", "Parler d'humour, de comédie et de cabaret", "Écrire un essai sur les limites de l'humour (C2)"],
    lessons: [148, 149, 150], vocab: ["humorDE", "kabarettDE"], reading: "loriot", prompt: "de-c2-6",
    writing: { task: "Write an essay (300-350 words): “May humour do anything?” Include a famous quotation and your thesis, why humour matters in a democracy, who is being laughed at, humour and context, and a conclusion.", task_fr: "Écris un essai (300 à 350 mots) : « Peut-on rire de tout ? » Avec une citation célèbre et ta thèse, pourquoi l'humour compte en démocratie, de qui l'on rit, l'humour et le contexte, et une conclusion.", words: "300-350",
      tips: ["Meines Erachtens…", "Nicht zufällig…", "Man denke nur an…", "Was als … verkauft wird, ist…", "Guter Humor tritt nach oben, nicht nach unten."],
      checklist: ["I started with a quotation and stated a clear thesis", "I asked who the target of a joke is", "I discussed the role of context", "I used a litotes and a free relative clause", "I wrote between 300 and 350 words"],
      checklist_fr: ["J'ai commencé par une citation et formulé une thèse claire", "Je me suis demandé qui est la cible d'une blague", "J'ai parlé du rôle du contexte", "J'ai employé une litote et une relative sans antécédent", "J'ai écrit entre 300 et 350 mots"],
      model: "„Was darf die Satire? Alles.“ So beantwortete Kurt Tucholsky 1919 eine Frage, die bis heute für Streit sorgt. Ob Karikaturen, Witze über Minderheiten oder Spott über Politiker: Immer wieder fühlen sich Menschen verletzt, und immer wieder berufen sich die Urheber auf die Freiheit des Humors. Meines Erachtens hatte Tucholsky im Kern recht, doch nicht jeder Witz ist schon Satire.\n\nHumor erfüllt in einer Demokratie eine wichtige Aufgabe. Wer über die Mächtigen lacht, verliert die Angst vor ihnen. Nicht zufällig gehören Spott und Karikatur zu den ersten Dingen, die autoritäre Regierungen verbieten. Zudem hilft Humor, Unerträgliches erträglich zu machen; man denke nur an den Satz „Humor ist, wenn man trotzdem lacht“. Eine Gesellschaft, die über sich selbst lachen kann, ist schwerer zu verführen.\n\nAllerdings lohnt es sich zu fragen, über wen gelacht wird. Satire richtet sich traditionell gegen die Mächtigen, gegen Heuchelei und Missstände. Ein Witz, der sich über Menschen lustig macht, die ohnehin am Rand der Gesellschaft stehen, ist dagegen keine mutige Kritik, sondern bestätigt nur Vorurteile. Was als Humor verkauft wird, ist dann nichts anderes als eine Beleidigung mit Pointe.\n\nHinzu kommt, dass Humor stark vom Kontext abhängt. Ironie funktioniert nur, wenn beide Seiten den Code kennen. Unter Freunden wirkt eine bissige Bemerkung harmlos; in einem Kommentar unter einem Video kann sie verletzen, weil Tonfall und Augenzwinkern fehlen. Zudem lachen nicht alle Menschen über dasselbe: Was die einen witzig finden, empfinden andere als Zumutung.\n\nGerade deshalb ist Loriot bis heute so beliebt: Er machte sich über menschliche Schwächen lustig, über Eitelkeit, Steifheit und die Unfähigkeit, miteinander zu reden, aber nie über die Schwachen. Man lacht über seine Figuren und zugleich über sich selbst. Seine Komik ist liebevoll, nie verächtlich.\n\nDarf Humor also alles? Rechtlich vieles, moralisch nicht alles. Entscheidend ist meines Erachtens nicht, ob ein Witz wehtut, sondern wen er trifft und wozu. Guter Humor tritt nach oben, nicht nach unten. Wer das beherzigt, braucht keine Verbote, sondern nur ein wenig Taktgefühl." } });
})();
