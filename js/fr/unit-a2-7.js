/* Cours de français, unité A2-7 « Plans and the future / Projets et avenir » : le futur simple et ses radicaux
   irréguliers, si + présent → futur, quand + futur, les pronoms relatifs qui / que / où, et téléphoner (standard,
   message, répondeur, numéros dits par deux). Dernière unité du A2. Personnages fictifs, prénoms français.
   Faits vérifiables seulement : les numéros français ont dix chiffres, les portables commencent par 06 ou 07.
   Les numéros cités appartiennent aux tranches que l'Arcep réserve à la fiction (01 99 00, 06 39 98). */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "avenirFR", icon: "telescope", title: "The future and plans", title_fr: "L'avenir et les projets", level: "A2", words: [
    ["l'avenir", "the future", "Je pense souvent à l'avenir."],
    ["le projet", "the plan, the project", "Tu as des projets pour l'été ?"],
    ["le rêve", "the dream", "Mon rêve, c'est de vivre au Canada."],
    ["réussir", "to succeed, to pass (an exam)", "J'espère que je réussirai l'examen."],
    ["l'examen", "the exam", "L'examen est dans un mois."],
    ["le diplôme", "the qualification, the degree", "Elle aura son diplôme en juin."],
    ["les études", "studies", "Il fait des études de médecine."],
    ["la formation", "training, a course", "Je vais suivre une formation en informatique."],
    ["le stage", "the internship, the work placement", "Je cherche un stage pour l'été."],
    ["s'installer", "to settle, to move in", "Ils vont s'installer à Bordeaux."],
    ["prévoir", "to plan, to forecast", "Qu'est-ce que tu as prévu ce week-end ?"],
    ["le but", "the goal, the aim", "Mon but, c'est de parler couramment."],
    ["plus tard", "later", "On en parlera plus tard."],
    ["décider de", "to decide to", "J'ai décidé de changer de travail."],
    ["la retraite", "retirement", "Mon père sera à la retraite l'année prochaine."],
    ["à l'étranger", "abroad", "Je voudrais travailler à l'étranger."],
    ["changer de travail", "to change jobs", "Elle va changer de travail en janvier."],
    ["avoir l'intention de", "to intend to", "J'ai l'intention d'apprendre l'italien."]
  ] },
  { id: "telephoneFR", icon: "phone", title: "On the phone", title_fr: "Au téléphone", level: "A2", words: [
    ["l'appel", "the call", "J'ai un appel manqué."],
    ["rappeler", "to call back", "Je vous rappelle dans cinq minutes."],
    ["décrocher", "to pick up (the phone)", "Personne ne décroche."],
    ["raccrocher", "to hang up", "Il a raccroché sans dire au revoir."],
    ["le répondeur", "the voicemail, the answering machine", "Je tombe toujours sur son répondeur."],
    ["laisser un message", "to leave a message", "Vous pouvez laisser un message après le bip."],
    ["le numéro", "the number", "Quel est ton numéro ?"],
    ["occupé / occupée", "busy, engaged (m) / busy, engaged (f)", "La ligne est occupée."],
    ["sonner", "to ring", "Ton téléphone sonne !"],
    ["à l'appareil", "speaking (on the phone)", "Nadia à l'appareil."],
    ["ne quittez pas", "hold the line", "Ne quittez pas, je vous la passe."],
    ["c'est de la part de qui ?", "who's calling?", "Bonjour, c'est de la part de qui ?"],
    ["le texto", "the text message", "Envoie-moi un texto quand tu arrives."],
    ["le réseau", "the network, the signal", "Il n'y a pas de réseau ici."],
    ["la batterie", "the battery", "Je n'ai plus de batterie."],
    ["le portable", "the mobile phone", "J'ai oublié mon portable."],
    ["ça coupe", "you're breaking up", "Allô ? Ça coupe, je te rappelle !"],
    ["le bip", "the beep, the tone", "Laissez votre message après le bip."]
  ] });

  W.LESSONS.push(
  {
    id: 42, level: "A2", icon: "calendar",
    title: "Je partirai: the future tense", title_fr: "Je partirai : le futur simple",
    subtitle: "One set of endings, a dozen irregular stems, and si + present.", subtitle_fr: "Une seule série de terminaisons, une douzaine de radicaux irréguliers, et si + présent.",
    body: `
<h2>Forming the future</h2>
<p>For most verbs, take the infinitive and add the endings <s-fr>-ai, -as, -a, -ons, -ez, -ont</s-fr> (they're the present of <s-fr>avoir</s-fr>). Verbs in -re drop their final e: <s-fr>prendre</s-fr> → <s-fr>je prendrai</s-fr>.</p>
<table>
<tr><th>parler</th><th>finir</th><th>prendre</th></tr>
<tr><td><s-fr>je parlerai</s-fr></td><td><s-fr>je finirai</s-fr></td><td><s-fr>je prendrai</s-fr></td></tr>
<tr><td><s-fr>tu parleras</s-fr></td><td><s-fr>tu finiras</s-fr></td><td><s-fr>tu prendras</s-fr></td></tr>
<tr><td><s-fr>il / elle / on parlera</s-fr></td><td><s-fr>il / elle / on finira</s-fr></td><td><s-fr>il / elle / on prendra</s-fr></td></tr>
<tr><td><s-fr>nous parlerons</s-fr></td><td><s-fr>nous finirons</s-fr></td><td><s-fr>nous prendrons</s-fr></td></tr>
<tr><td><s-fr>vous parlerez</s-fr></td><td><s-fr>vous finirez</s-fr></td><td><s-fr>vous prendrez</s-fr></td></tr>
<tr><td><s-fr>ils / elles parleront</s-fr></td><td><s-fr>ils / elles finiront</s-fr></td><td><s-fr>ils / elles prendront</s-fr></td></tr>
</table>
<h2>Irregular stems</h2>
<p>The endings never change, but some verbs have a new stem: <s-fr>être</s-fr> → <s-fr>je serai</s-fr> · <s-fr>avoir</s-fr> → <s-fr>j'aurai</s-fr> · <s-fr>aller</s-fr> → <s-fr>j'irai</s-fr> · <s-fr>faire</s-fr> → <s-fr>je ferai</s-fr> · <s-fr>pouvoir</s-fr> → <s-fr>je pourrai</s-fr> · <s-fr>vouloir</s-fr> → <s-fr>je voudrai</s-fr> · <s-fr>venir</s-fr> → <s-fr>je viendrai</s-fr> · <s-fr>voir</s-fr> → <s-fr>je verrai</s-fr> · <s-fr>devoir</s-fr> → <s-fr>je devrai</s-fr> · <s-fr>savoir</s-fr> → <s-fr>je saurai</s-fr> · <s-fr>il faut</s-fr> → <s-fr>il faudra</s-fr> · <s-fr>il pleut</s-fr> → <s-fr>il pleuvra</s-fr>.</p>
<h2>Si + present, then the future</h2>
<p>For a real condition, French uses <s-fr>si</s-fr> + the present, then the future. Never the future right after <s-fr>si</s-fr>: <s-fr>S'il fait beau demain, on ira à la plage.</s-fr> · <s-fr>Si tu viens, je ferai un gâteau.</s-fr> Note: <s-fr>si + il</s-fr> = <s-fr>s'il</s-fr>, but <s-fr>si elle</s-fr> doesn't change.</p>
<p>After <s-fr>quand</s-fr>, French uses the future when the action is in the future, where English uses the present: <s-fr>Quand je serai à Paris, je t'appellerai.</s-fr> (When I'm in Paris, I'll call you.)</p>
<div class="tip">Futur proche or futur simple? In conversation, <s-fr>je vais partir</s-fr> is very common for plans. The futur simple sounds more distant, more certain or more formal: weather forecasts, promises, plans for later in life. <s-fr>Demain, il pleuvra sur la Bretagne.</s-fr> · <s-fr>Je t'appellerai, promis.</s-fr></div>
`,
    examples: [
      ["L'année prochaine, je travaillerai à Montréal.", "Next year, I'll work in Montreal."],
      ["Nous prendrons le train de huit heures.", "We'll take the eight o'clock train."],
      ["Tu seras là samedi ?", "Will you be there on Saturday?"],
      ["Il fera beau demain.", "The weather will be nice tomorrow."],
      ["Je pourrai t'aider la semaine prochaine.", "I'll be able to help you next week."],
      ["S'il pleut, on ira au cinéma.", "If it rains, we'll go to the cinema."],
      ["Si tu as le temps, tu viendras me voir ?", "If you have time, will you come and see me?"],
      ["Quand j'aurai mon diplôme, je partirai à l'étranger.", "When I get my degree, I'll go abroad."]
    ],
    quiz: [
      { q: "“I'll go” is:", o: ["j'allerai", "j'irai", "je vais irai"], a: 1, ex: "aller has the future stem ir-: j'irai." },
      { q: "“We'll take” is:", o: ["nous prendrons", "nous prenerons", "nous prendons"], a: 0, ex: "prendre → prendr- + -ons." },
      { q: "“If it's nice tomorrow, we'll go out” is:", o: ["S'il fera beau demain, on sortira.", "S'il fait beau demain, on sortira.", "Si il fait beau demain, on sort."], a: 1, ex: "si + present, then the future; si + il = s'il." },
      { q: "“I'll do” is:", o: ["je fairai", "je ferai", "je fais"], a: 1, ex: "faire → fer-: je ferai." },
      { q: "“When I'm in Paris, I'll call you” is:", o: ["Quand je suis à Paris, je t'appellerai.", "Quand je serai à Paris, je t'appellerai.", "Si je serai à Paris, je t'appellerai."], a: 1, ex: "After quand, the future for a future action." }
    ]
  },
  {
    id: 43, level: "A2", icon: "link",
    title: "Qui, que, où: linking ideas", title_fr: "Qui, que, où : relier les idées",
    subtitle: "Three little words to make longer sentences, and the one English lets you drop.", subtitle_fr: "Trois petits mots pour faire des phrases plus longues, et celui que l'anglais permet d'oublier.",
    body: `
<h2>Qui: the subject</h2>
<p><s-fr>qui</s-fr> is followed by a verb: it's the person or the thing that does the action. It means "who", "which" or "that".</p>
<table>
<tr><th>French</th><th>English</th></tr>
<tr><td><s-fr>J'ai une amie qui habite à Lyon.</s-fr></td><td>I have a friend who lives in Lyon.</td></tr>
<tr><td><s-fr>C'est le train qui part à huit heures.</s-fr></td><td>It's the train that leaves at eight.</td></tr>
</table>
<p><s-fr>qui</s-fr> never loses its i: <s-fr>l'homme qui arrive</s-fr>.</p>
<h2>Que: the object</h2>
<p><s-fr>que</s-fr> is followed by a subject and a verb: <s-fr>le livre que je lis</s-fr> (the book I'm reading) · <s-fr>le film que tu préfères</s-fr>. Before a vowel, <s-fr>que</s-fr> becomes <s-fr>qu'</s-fr>: <s-fr>le cadeau qu'il m'a offert</s-fr>.</p>
<p>English can drop "that" (the book I'm reading). French never drops <s-fr>que</s-fr>: <s-fr>le livre je lis</s-fr> is wrong.</p>
<h2>Où: places and times</h2>
<p><s-fr>où</s-fr> is used for a place and also for a moment: <s-fr>la ville où j'habite</s-fr> (the town where I live) · <s-fr>le jour où il est arrivé</s-fr> (the day he arrived).</p>
<h2>Ce qui, ce que: what</h2>
<p>To say "what" in the middle of a sentence: <s-fr>Ce que j'aime, c'est le calme.</s-fr> (What I like is the quiet.) · <s-fr>Dis-moi ce qui ne va pas.</s-fr> (Tell me what's wrong.)</p>
<div class="tip">With <s-fr>que</s-fr> and the passé composé with avoir, the past participle agrees with the noun before it: <s-fr>la robe que j'ai achetée</s-fr>, <s-fr>les photos que tu as prises</s-fr>. You often can't hear it, but you'll see it in writing.</div>
`,
    examples: [
      ["J'ai un collègue qui parle cinq langues.", "I have a colleague who speaks five languages."],
      ["C'est le bus qui va à la gare ?", "Is this the bus that goes to the station?"],
      ["Le livre que je lis est passionnant.", "The book I'm reading is fascinating."],
      ["Le gâteau qu'elle a fait est délicieux.", "The cake she made is delicious."],
      ["C'est le restaurant où on a mangé samedi.", "It's the restaurant where we ate on Saturday."],
      ["Je me souviens du jour où on s'est rencontrés.", "I remember the day we met."],
      ["Ce que je préfère, c'est le week-end.", "What I like best is the weekend."],
      ["Les photos que tu as prises sont superbes.", "The photos you took are superb."]
    ],
    quiz: [
      { q: "“A friend who lives in Nice” is:", o: ["une amie que habite à Nice", "une amie qui habite à Nice", "une amie où habite à Nice"], a: 1, ex: "Followed by a verb: qui." },
      { q: "“The film I prefer” is:", o: ["le film je préfère", "le film qui je préfère", "le film que je préfère"], a: 2, ex: "que can never be dropped." },
      { q: "“The town where I live” is:", o: ["la ville où j'habite", "la ville que j'habite", "la ville qui j'habite"], a: 0, ex: "A place: où." },
      { q: "“The day he arrived” is:", o: ["le jour qu'il est arrivé", "le jour où il est arrivé", "le jour quand il est arrivé"], a: 1, ex: "For a moment, French also uses où." },
      { q: "“What I like is music” is:", o: ["Ce que j'aime, c'est la musique.", "Que j'aime, c'est la musique.", "Quoi j'aime, c'est la musique."], a: 0, ex: "ce que = what, as an object." }
    ]
  },
  {
    id: 44, level: "A2", kind: "functional", icon: "phone",
    title: "Everyday French: on the phone", title_fr: "Le français de tous les jours : au téléphone",
    subtitle: "Ask for someone, leave a message, say a phone number, and cope when the line is bad.", subtitle_fr: "Demander quelqu'un, laisser un message, dire un numéro et se débrouiller quand la ligne est mauvaise.",
    body: `
<h2>Asking for someone</h2>
<p><s-fr>Allô ?</s-fr> is only used on the phone. Then: <s-fr>Bonjour, je voudrais parler à Mme Dumas, s'il vous plaît.</s-fr> The other person may ask: <s-fr>C'est de la part de qui ?</s-fr> (Who's calling?) You answer: <s-fr>De la part de</s-fr> + your name. Then: <s-fr>Ne quittez pas, je vous la passe.</s-fr> (Hold on, I'll put you through to her.) For a man: <s-fr>je vous le passe</s-fr>.</p>
<h2>When the person isn't there</h2>
<p><s-fr>Elle est en réunion.</s-fr> · <s-fr>Il n'est pas là aujourd'hui.</s-fr> · <s-fr>Vous voulez laisser un message ?</s-fr> · <s-fr>Vous pouvez lui dire de me rappeler ?</s-fr> · <s-fr>Vous pouvez épeler votre nom ?</s-fr></p>
<h2>Saying a phone number</h2>
<p>French phone numbers have ten digits, said in pairs: <s-fr>06 39 98 12 34</s-fr> = <s-fr>zéro six, trente-neuf, quatre-vingt-dix-huit, douze, trente-quatre</s-fr>. Mobile numbers start with <s-fr>06</s-fr> or <s-fr>07</s-fr>. Repeat the number to check: <s-fr>Je répète…</s-fr> · <s-fr>C'est bien ça ?</s-fr></p>
<h2>When the line is bad</h2>
<p><s-fr>Je vous entends mal.</s-fr> (I can't hear you well.) · <s-fr>Ça coupe !</s-fr> (You're breaking up!) · <s-fr>Vous pouvez répéter plus lentement ?</s-fr> · <s-fr>Excusez-moi, j'ai fait un mauvais numéro.</s-fr> (Sorry, wrong number.)</p>
<div class="tip">A voicemail in four steps: <s-fr>Bonjour, c'est</s-fr> + your name. <s-fr>Je vous appelle pour</s-fr> + the reason. <s-fr>Vous pouvez me rappeler au</s-fr> + your number, said twice. <s-fr>Merci, bonne journée !</s-fr></div>
`,
    examples: [
      ["Allô ? Bonjour, je voudrais parler à M. Petit, s'il vous plaît.", "Hello? Hello, I'd like to speak to Mr Petit, please."],
      ["C'est de la part de qui ?", "Who's calling?"],
      ["Ne quittez pas, je vous le passe.", "Hold on, I'll put you through to him."],
      ["Il est en réunion. Vous voulez laisser un message ?", "He's in a meeting. Would you like to leave a message?"],
      ["Vous pouvez lui dire de me rappeler ?", "Can you tell him to call me back?"],
      ["Je vous entends mal, ça coupe.", "I can't hear you well, you're breaking up."],
      ["Excusez-moi, j'ai fait un mauvais numéro.", "Sorry, I dialled the wrong number."]
    ],
    quiz: [
      { q: "“Who's calling?” is:", o: ["Qui appelle-vous ?", "C'est de la part de qui ?", "Vous êtes qui, vous ?"], a: 1, ex: "The polite question: c'est de la part de qui ?" },
      { q: "“Ne quittez pas” means:", o: ["Don't leave the building.", "Hold the line.", "Don't hang up on me again."], a: 1, ex: "Ne quittez pas = hold the line." },
      { q: "“98” in a phone number is said:", o: ["quatre-vingt-dix-huit", "neuf-huit", "quatre-vingts-dix-huit"], a: 0, ex: "Numbers are said in pairs: quatre-vingt-dix-huit." },
      { q: "“You're breaking up!” is:", o: ["Tu casses !", "Ça coupe !", "Tu coupes la ligne !"], a: 1, ex: "Ça coupe !" },
      { q: "“Can you tell her to call me back?” is:", o: ["Vous pouvez lui dire de me rappeler ?", "Vous pouvez la dire de me rappeler ?", "Vous pouvez lui dire me rappeler ?"], a: 0, ex: "dire à quelqu'un → lui; dire de + infinitive." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    42: {
      gap: [["Demain, j'___ à Lyon. (aller, future)", "irai"], ["Nous ___ le train de huit heures. (prendre, future)", "prendrons"], ["S'il pleut, on ___ au cinéma. (aller, future)", "ira"], ["Quand tu ___ à Paris, appelle-moi ! (être, future)", "seras"]],
      fix: [["Si il fera beau, on ira à la plage.", "S'il fait beau, on ira à la plage.", "si + present, never the future; and si + il = s'il."], ["Demain, je fairai les courses.", "Demain, je ferai les courses.", "faire has an irregular future stem: fer-."]],
      task: ["Say what you'll do next weekend, and what you'll do if the weather is bad.", "Dis ce que tu feras le week-end prochain, et ce que tu feras s'il fait mauvais.", "Samedi matin, je ferai les courses au marché, puis je déjeunerai chez des amis. L'après-midi, s'il fait beau, on ira marcher au bord du lac. S'il pleut, on restera à la maison et on jouera à des jeux de société. Dimanche, je me reposerai !"]
    },
    43: {
      gap: [["J'ai une amie ___ habite à Lyon. (who)", "qui"], ["C'est le film ___ je préfère. (that)", "que"], ["La ville ___ elle habite est petite. (where)", "où"], ["Le cadeau ___ tu m'as offert est super. (that)", "que"]],
      fix: [["Le livre j'ai acheté est super.", "Le livre que j'ai acheté est super.", "In French, que can never be left out."], ["C'est la voisine que habite à côté.", "C'est la voisine qui habite à côté.", "Before a verb (the subject), use qui."]],
      task: ["Describe three things you like with qui, que and où: a person, a film or a book, and a place.", "Décris trois choses que tu aimes avec qui, que et où : une personne, un film ou un livre, et un endroit.", "Ma grand-mère est une personne qui raconte des histoires incroyables. Le film que je regarde le plus souvent, c'est Le Fabuleux Destin d'Amélie Poulain. Et le café où je vais le dimanche est le plus calme du quartier."]
    },
    44: {
      gap: [["C'est de la ___ de qui ? (Who's calling?)", "part"], ["Ne ___ pas, je vous la passe. (hold the line)", "quittez"], ["Vous pouvez lui dire de me ___ ? (call back)", "rappeler"], ["Je vous entends ___. (badly)", "mal"]],
      fix: [["Je veux parler à Mme Dumas.", "Je voudrais parler à Mme Dumas.", "On the phone, je voudrais is more polite than je veux."], ["Qui parle ?", "C'est de la part de qui ?|Qui est à l'appareil ?", "The polite way to ask who's calling."]],
      task: ["Write the voicemail you leave at a doctor's surgery to cancel an appointment: who you are, why you're calling, and your number.", "Écris le message que tu laisses au cabinet d'un médecin pour annuler un rendez-vous : qui tu es, pourquoi tu appelles, et ton numéro.", "Bonjour, c'est Alex Martin. Je vous appelle pour annuler mon rendez-vous de jeudi à dix heures, parce que je ne peux pas venir. Vous pouvez me rappeler au zéro six, trente-neuf, quatre-vingt-dix-huit, douze, trente-quatre ? Je répète : zéro six, trente-neuf, quatre-vingt-dix-huit, douze, trente-quatre. Merci, bonne journée !"]
    }
  });

  W.ROLEPLAYS.push(
  { id: "autelephone", lesson: 44, level: "A2", icon: "phone", partner: "Nadia", role: "a receptionist",
    title: "Calling a language school", title_fr: "Un appel à l'école de langues",
    setting: "You call a language school about evening classes and ask for Mme Dumas. Nadia answers.", setting_fr: "Tu appelles une école de langues pour les cours du soir et tu demandes Mme Dumas. Nadia répond.",
    turns: [
      { p: "École Horizon, bonjour ! Nadia à l'appareil.", fr: "Horizon School, hello! Nadia speaking." },
      { y: ["Bonjour, madame. Je voudrais parler à Mme Dumas, s'il vous plaît.", "Bonjour, madame. Je voudrais parler Mme Dumas, s'il vous plaît.", "Bonjour, madame. Je veux parler avec Mme Dumas, s'il te plaît."], fr: "Hello. I'd like to speak to Mme Dumas, please.", why: "Je voudrais parler à… : polite, and with à." },
      { p: "C'est de la part de qui ?", fr: "Who's calling?" },
      { y: ["De la part de Sam Morin. J'appelle pour les cours du soir.", "C'est la part de Sam Morin. J'appelle pour les cours du soir.", "Par Sam Morin. J'appelle pour les cours du soir."], fr: "Sam Morin. I'm calling about the evening classes.", why: "De la part de + your name." },
      { p: "Ne quittez pas… Ah, je suis désolée, elle est en réunion. Vous voulez laisser un message ?", fr: "Hold on… Oh, I'm sorry, she's in a meeting. Would you like to leave a message?" },
      { y: ["Oui. Vous pouvez lui dire de me rappeler, s'il vous plaît ?", "Oui. Vous pouvez la dire de me rappeler, s'il vous plaît ?", "Oui. Vous pouvez lui dire de rappeler moi, s'il vous plaît ?"], fr: "Yes. Can you tell her to call me back, please?", why: "dire à quelqu'un → lui; me goes before the infinitive." },
      { p: "Bien sûr. Vous pouvez épeler votre nom, et me donner votre numéro ?", fr: "Of course. Can you spell your name, and give me your number?" },
      { y: ["Morin : M, O, R, I, N. C'est le zéro six, trente-neuf, quatre-vingt-dix-huit, vingt et un, quarante-trois.", "Morin : M, O, R, I, N. C'est le zéro six, trente-neuf, quatre-vingts-dix-huit, vingt et un, quarante-trois.", "Morin : M, O, R, I, N. C'est le zéro six, trente-neuf, quatre-vingt-huit-dix, vingt et un, quarante-trois."], fr: "Morin: M, O, R, I, N. It's 06 39 98 21 43.", why: "98 = quatre-vingt-dix-huit: no s on vingt when another number follows." },
      { p: "Je répète : zéro six, trente-neuf, quatre-vingt-dix-huit, vingt et un, quarante-trois. C'est bien ça ?", fr: "Let me repeat: 06 39 98 21 43. Is that right?" },
      { y: ["Oui, c'est ça. Je serai à la maison demain matin.", "Oui, c'est ça. Je serais à la maison demain matin.", "Oui, c'est ça. J'aurai à la maison demain matin."], fr: "Yes, that's right. I'll be at home tomorrow morning.", why: "être in the future: je serai (je serais means I would be)." },
      { p: "Très bien, je lui transmets le message. Bonne journée !", fr: "Very good, I'll pass on the message. Have a good day!" },
      { y: ["Merci beaucoup, au revoir !", "Merci beaucoup, à la revoir !", "Merci beaucoup, bonne revoir !"], fr: "Thank you very much, goodbye!", why: "Au revoir." }
    ] }
  );

  W.READINGS.push({
    id: "dansdixans", level: "A2", icon: "telescope", title: "Et dans dix ans ?", genre: "Magazine interviews",
    intro: "A magazine asked three readers how they imagine their lives in ten years. The future, qui, que and où.",
    intro_fr: "Un magazine a demandé à trois lecteurs comment ils imaginent leur vie dans dix ans. Le futur, qui, que et où.",
    paragraphs: [
      { en: "Cette semaine, nous avons posé une question à trois lecteurs : comment voyez-vous votre vie dans dix ans ?", fr: "This week, we asked three readers a question: how do you see your life in ten years?" },
      { en: "Clémence, 24 ans, infirmière : Dans dix ans, j'habiterai à la campagne, dans une maison qui aura un grand jardin. Je travaillerai toujours à l'hôpital, mais à temps partiel. Et si tout va bien, j'aurai deux enfants !", fr: "Clémence, 24, nurse: In ten years, I'll live in the countryside, in a house with a big garden. I'll still work at the hospital, but part-time. And if all goes well, I'll have two children!" },
      { en: "Malik, 35 ans, cuisinier : Le restaurant où je travaille va fermer l'année prochaine. Alors je ferai ce que je veux faire depuis toujours : j'ouvrirai mon propre restaurant à Marseille, près du port. On y mangera les plats que ma mère m'a appris.", fr: "Malik, 35, cook: The restaurant where I work is going to close next year. So I'll do what I've always wanted to do: I'll open my own restaurant in Marseille, near the harbour. People will eat the dishes my mother taught me." },
      { en: "Josiane, 62 ans, professeure de piano : Je serai à la retraite, enfin ! Je voyagerai beaucoup : j'irai au Canada, où habite ma fille. Et je jouerai du piano pour le plaisir, plus pour le travail.", fr: "Josiane, 62, piano teacher: I'll be retired, at last! I'll travel a lot: I'll go to Canada, where my daughter lives. And I'll play the piano for pleasure, no longer for work." }
    ],
    glossary: { "posé": "asked (a question)", "lecteurs": "readers", "voyez": "see", "infirmière": "nurse", "hôpital": "hospital", "partiel": "part-time (à temps partiel)", "cuisinier": "cook", "fermer": "to close", "propre": "own", "plats": "dishes", "appris": "taught", "retraite": "retirement", "enfin": "at last", "voyagerai": "will travel" },
    questions: [
      { q: "Où habitera Clémence dans dix ans ?", o: ["En ville", "À la campagne", "Au Canada"], a: 1 },
      { q: "Pourquoi Malik va changer de travail ?", o: ["Son restaurant va fermer.", "Il n'aime pas cuisiner.", "Il part à la retraite."], a: 0 },
      { q: "Qu'est-ce que Malik va ouvrir ?", o: ["Une école de cuisine", "Son propre restaurant", "Un hôtel"], a: 1 },
      { q: "Qui habite au Canada ?", o: ["La fille de Josiane", "Malik", "Clémence"], a: 0 },
      { q: "Qu'est-ce que Josiane fera avec le piano ?", o: ["Elle donnera des cours.", "Elle jouera pour le plaisir.", "Elle vendra son piano."], a: 1 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-a2-7", unit: "a2-7", level: "A2", icon: "voicemail",
    title: "Deux messages sur le répondeur", title_fr: "Deux messages sur le répondeur",
    context: "Léna listens to her voicemail: two new messages.", context_fr: "Léna écoute sa messagerie : deux nouveaux messages.",
    words: [["déplacer", "to move (an appointment)"], ["convenir", "to suit"], ["un horaire", "a time, a slot"], ["au bord du lac", "by the lake"], ["à la place", "instead"]],
    lines: [["Répondeur", "Vous avez deux nouveaux messages. Premier message.", "fr-FR"], ["Secrétaire", "Bonjour, ici le cabinet du docteur Morel. Votre rendez-vous de jeudi est déplacé à vendredi, à quatorze heures trente. Si cet horaire ne vous convient pas, rappelez-nous au zéro un, quatre-vingt-dix-neuf, zéro zéro, douze, trente-quatre. Merci, bonne journée.", "fr-FR"], ["Répondeur", "Message suivant.", "fr-FR"], ["Élodie", "Salut Léna, c'est Élodie ! Samedi, on fera un pique-nique au bord du lac avec Nico et Sarah. On partira de chez moi à onze heures. S'il pleut, on ira au cinéma à la place. Tu viendras ? Ah, et si tu peux, apporte une salade ! Rappelle-moi ce soir. Bisous !", "fr-FR"], ["Répondeur", "Fin des messages.", "fr-FR"]],
    gist: ["Léna a combien de nouveaux messages ?", ["Deux", "Un", "Trois"]],
    detail: [["Le rendez-vous chez le médecin est quand, maintenant ?", ["Vendredi à 14 h 30", "Jeudi à 14 h 30", "Vendredi à 10 h 30"]], ["Qu'est-ce qu'il faut faire si l'horaire ne convient pas ?", ["Rappeler le cabinet", "Venir jeudi", "Envoyer un e-mail"]], ["Qu'est-ce qu'on fera s'il pleut samedi ?", ["On ira au cinéma.", "On restera chez Élodie.", "On annulera tout."]], ["Qu'est-ce que Léna doit apporter ?", ["Une salade", "Un gâteau", "Des boissons"]]],
    decode: ["Si cet horaire ne vous convient pas", "on ira au cinéma à la place"],
    tip: "In a voicemail, the important information comes after a few polite words. Listen for the day, the time and the number, and replay the message if you need to.", tip_fr: "Dans un message, l'information importante arrive après quelques mots de politesse. Guette le jour, l'heure et le numéro, et réécoute le message si besoin."
  }]);

  W.PROMPTS.push({ id: "fr-a2-7", level: "A2", q: "Comment tu imagines ta vie dans dix ans ? Où tu habiteras, qu'est-ce que tu feras ?", fr: "How do you imagine your life in ten years? Where will you live, what will you do?", time: 120,
    phrases: ["Dans dix ans, j'habiterai…", "Je travaillerai…", "Si tout va bien, …", "J'aurai…", "Ce que je voudrais, c'est…"],
    model: "Dans dix ans, j'habiterai peut-être à l'étranger, dans une ville où il fait beau toute l'année. Je travaillerai toujours dans l'informatique, mais je ferai plus de télétravail. Si tout va bien, j'aurai une petite maison avec un jardin, et un chien qui s'appellera Biscuit. Et je parlerai français couramment, bien sûr !" });

  W.WRITING_GUIDE["a2-7"] = { genre: "An email about a visit", genre_fr: "Un e-mail pour préparer une visite",
    plan: [["Thank your friend for the invitation.", "Remercie ton ami pour l'invitation."], ["Say when and how you'll arrive.", "Dis quand et comment tu arriveras."], ["Say what you'd like to do, with a condition.", "Dis ce que tu voudrais faire, avec une condition."], ["Ask two practical questions.", "Pose deux questions pratiques."], ["Finish in a friendly way.", "Termine de façon amicale."]],
    marks: [["J'arriverai", "the futur simple", "le futur simple"], ["Si tu es libre, tu pourras", "si + present, then the future", "si + présent, puis le futur"], ["le musée que tu m'as conseillé", "the relative pronoun que", "le pronom relatif que"], ["je voudrais", "a polite wish", "un souhait poli"], ["Est-ce que je dois", "a question with est-ce que", "une question avec est-ce que"], ["À très vite", "a friendly ending", "une fin amicale"]] };

  W.COURSE.push({ id: "a2-7", level: "A2", icon: "calendar", title: "Plans and the future", title_fr: "Projets et avenir",
    intro: "In this last A2 unit, you'll talk about the future: the futur simple and its irregular stems, si + present, linking ideas with qui, que and où, and the French you need on the phone.",
    intro_fr: "Dans cette dernière unité du A2, tu vas parler de l'avenir : le futur simple et ses radicaux irréguliers, si + présent, relier les idées avec qui, que et où, et le français qu'il faut au téléphone.",
    can: ["Talk about your plans with the futur simple", "Use si + present to talk about conditions", "Link ideas with qui, que and où", "Make a phone call, leave a message and say a phone number"],
    can_fr: ["Parler de tes projets avec le futur simple", "Utiliser si + présent pour parler de conditions", "Relier des idées avec qui, que et où", "Passer un appel, laisser un message et dire un numéro de téléphone"],
    lessons: [42, 43, 44], vocab: ["avenirFR", "telephoneFR"], reading: "dansdixans", prompt: "fr-a2-7",
    writing: { task: "Next month, you're going to spend a week with a French friend. Write an email to this friend (70-90 words): when you'll arrive, what you'd like to do, and two questions.", task_fr: "Le mois prochain, tu vas passer une semaine chez un ami français. Écris-lui un e-mail (70 à 90 mots) : quand tu arriveras, ce que tu voudrais faire, et deux questions.", words: "70-90",
      tips: ["Merci encore pour…", "J'arriverai le…", "Si tu es libre, …", "Est-ce que je dois… ?", "À très vite,"],
      checklist: ["I used the futur simple", "I used si + present", "I used qui, que or où", "I asked two questions", "I stayed between 70 and 90 words"],
      model: "Salut Mathilde !\n\nMerci encore pour l'invitation ! J'arriverai à Lyon le samedi 12, à quinze heures, en train. Si tu es libre, tu pourras venir me chercher à la gare ? Pendant la semaine, je voudrais visiter le Vieux-Lyon et le musée que tu m'as conseillé. S'il fait beau, on ira aussi au marché. Est-ce que je dois prendre des vêtements chauds ? Et qu'est-ce que je peux apporter à tes parents ?\n\nÀ très vite,\nJules" } });
})();
