/* "Everyday English" lessons (functional language), A1. Written in English with a French version. */
window.LESSONS.push(
{
  id: 101, after: 1, level: "A1", kind: "functional", icon: "hand",
  title: "Everyday English: hello and goodbye", title_fr: "Anglais pratique : bonjour et au revoir",
  subtitle: "Greet people, answer “How are you?” and say goodbye.", subtitle_fr: "Saluer, répondre à « How are you? » et prendre congé.",
  body: `
<h2>Saying hello</h2>
<table>
<tr><th>Situation</th><th>What to say</th></tr>
<tr><td>Friends, colleagues</td><td>Hi! · Hello! · Hey! (very informal)</td></tr>
<tr><td>Before 12 p.m.</td><td>Good morning.</td></tr>
<tr><td>From 12 to 6 p.m.</td><td>Good afternoon.</td></tr>
<tr><td>After 6 p.m.</td><td>Good evening.</td></tr>
</table>
<div class="warn"><b>Good night</b> is only for saying goodbye in the evening or before bed. Never use it to say hello!</div>
<h2>How are you?</h2>
<p><s-en>How are you?</s-en> — <s-en>Fine, thanks. And you?</s-en></p>
<p>Other answers: <s-en>Very well, thank you.</s-en> · <s-en>I'm good.</s-en> · <s-en>Not bad.</s-en> · <s-en>Great!</s-en></p>
<p>Informal: <s-en>How's it going?</s-en> · <s-en>How are things?</s-en></p>
<div class="tip">In Britain, “How are you?” is often just a way of saying hello. Answer quickly and positively, and always ask back: <s-en>And you?</s-en></div>
<h2>Meeting someone for the first time</h2>
<p><s-en>Nice to meet you.</s-en> — <s-en>Nice to meet you too.</s-en></p>
<p>More formal: <s-en>Pleased to meet you.</s-en></p>
<h2>Saying goodbye</h2>
<p><s-en>Goodbye.</s-en> · <s-en>Bye!</s-en> · <s-en>See you later.</s-en> · <s-en>See you tomorrow.</s-en> · <s-en>Have a nice day!</s-en> · <s-en>Take care.</s-en></p>
`,
  body_fr: `
<h2>Dire bonjour</h2>
<table>
<tr><th>Situation</th><th>Que dire</th></tr>
<tr><td>Amis, collègues</td><td>Hi! · Hello! · Hey! (très familier)</td></tr>
<tr><td>Avant midi</td><td>Good morning.</td></tr>
<tr><td>De midi à 18 h</td><td>Good afternoon.</td></tr>
<tr><td>Après 18 h</td><td>Good evening.</td></tr>
</table>
<div class="warn"><b>Good night</b> sert uniquement à dire au revoir le soir ou avant d'aller dormir. Jamais pour dire bonjour !</div>
<h2>Comment ça va ?</h2>
<p><s-en>How are you?</s-en> — <s-en>Fine, thanks. And you?</s-en> (Bien, merci. Et toi ?)</p>
<p>Autres réponses : <s-en>Very well, thank you.</s-en> (Très bien, merci) · <s-en>I'm good.</s-en> · <s-en>Not bad.</s-en> (Pas mal) · <s-en>Great!</s-en> (Super !)</p>
<p>Familier : <s-en>How's it going?</s-en> · <s-en>How are things?</s-en> (Comment ça va ?)</p>
<div class="tip">En Grande-Bretagne, « How are you? » est souvent une simple façon de dire bonjour. Réponds vite et positivement, et retourne toujours la question : <s-en>And you?</s-en></div>
<h2>Rencontrer quelqu'un</h2>
<p><s-en>Nice to meet you.</s-en> (Enchanté·e) — <s-en>Nice to meet you too.</s-en> (Moi de même)</p>
<p>Plus formel : <s-en>Pleased to meet you.</s-en></p>
<h2>Dire au revoir</h2>
<p><s-en>Goodbye.</s-en> · <s-en>Bye!</s-en> · <s-en>See you later.</s-en> (À plus tard) · <s-en>See you tomorrow.</s-en> (À demain) · <s-en>Have a nice day!</s-en> (Bonne journée !) · <s-en>Take care.</s-en> (Prends soin de toi)</p>
`,
  examples: [
    ["Good morning! How are you?", "Bonjour ! Comment allez-vous ?"],
    ["Fine, thanks. And you?", "Bien, merci. Et vous ?"],
    ["Hi, I'm Tom. — Nice to meet you, Tom.", "Salut, je suis Tom. — Enchantée, Tom."],
    ["See you tomorrow!", "À demain !"],
    ["Have a nice weekend!", "Bon week-end !"],
    ["Good night, sleep well.", "Bonne nuit, dors bien."]
  ],
  quiz: [
    { q: "It's 9 a.m. You arrive at work. You say:", q_fr: "Il est 9 h. Tu arrives au travail. Tu dis :", o: ["Good night.", "Good morning.", "Good evening."], a: 1, ex: "Before 12 p.m. → Good morning.", ex_fr: "Avant midi → Good morning." },
    { q: "Someone asks: “How are you?” The best answer is:", q_fr: "On te demande « How are you? ». La meilleure réponse :", o: ["I'm 30.", "Fine, thanks. And you?", "I'm a designer."], a: 1, ex: "Answer and ask back: And you?", ex_fr: "Réponds et retourne la question : And you?" },
    { q: "You meet someone for the first time. You say:", q_fr: "Tu rencontres quelqu'un pour la première fois. Tu dis :", o: ["Nice to meet you.", "See you later.", "Good night."], a: 0, ex: "Nice to meet you = enchanté·e.", ex_fr: "Nice to meet you = enchanté·e." },
    { q: "When can you say “Good night”?", q_fr: "Quand peux-tu dire « Good night » ?", o: ["To say hello in the evening", "To say goodbye before bed", "At lunchtime"], a: 1, ex: "Good night is only for goodbye.", ex_fr: "Good night sert seulement à dire au revoir." }
  ]
},
{
  id: 102, after: 101, level: "A1", kind: "functional", icon: "a-large-small",
  title: "Everyday English: the alphabet and spelling", title_fr: "Anglais pratique : l'alphabet et épeler",
  subtitle: "Spell your name, an email address, a word.", subtitle_fr: "Épeler ton nom, une adresse e-mail, un mot.",
  body: `
<h2>The letters that are different from French</h2>
<table>
<tr><th>Letter</th><th>Sounds like</th><th>Letter</th><th>Sounds like</th></tr>
<tr><td>A</td><td>“ei”</td><td>I</td><td>“aï”</td></tr>
<tr><td>E</td><td>“ii”</td><td>J</td><td>“djei”</td></tr>
<tr><td>G</td><td>“dji”</td><td>R</td><td>“aa”</td></tr>
<tr><td>H</td><td>“eitch”</td><td>W</td><td>“double you”</td></tr>
<tr><td>Y</td><td>“waï”</td><td>Z</td><td>“zed” (UK) · “zii” (US)</td></tr>
</table>
<div class="warn">The most common mix-ups: <b>E</b> (“ii”) and <b>I</b> (“aï”), and <b>G</b> (“dji”) and <b>J</b> (“djei”). Listen to them several times: <s-en>E, I</s-en> · <s-en>G, J</s-en></div>
<h2>Asking someone to spell</h2>
<p><s-en>How do you spell your name?</s-en> · <s-en>Can you spell that, please?</s-en></p>
<p>For two identical letters, say <b>double</b>: Emma = <s-en>E, double M, A</s-en></p>
<h2>Email addresses</h2>
<table>
<tr><th>Symbol</th><th>Say</th></tr>
<tr><td>@</td><td>at</td></tr>
<tr><td>.</td><td>dot</td></tr>
<tr><td>-</td><td>dash / hyphen</td></tr>
<tr><td>_</td><td>underscore</td></tr>
</table>
<p>stella.m@example.com = <s-en>stella dot m at example dot com</s-en></p>
`,
  body_fr: `
<h2>Les lettres qui diffèrent du français</h2>
<table>
<tr><th>Lettre</th><th>Se prononce</th><th>Lettre</th><th>Se prononce</th></tr>
<tr><td>A</td><td>« eï »</td><td>I</td><td>« aï »</td></tr>
<tr><td>E</td><td>« ii »</td><td>J</td><td>« djeï »</td></tr>
<tr><td>G</td><td>« dji »</td><td>R</td><td>« aa »</td></tr>
<tr><td>H</td><td>« eïtch »</td><td>W</td><td>« double you »</td></tr>
<tr><td>Y</td><td>« waï »</td><td>Z</td><td>« zed » (UK) · « zii » (US)</td></tr>
</table>
<div class="warn">Les confusions les plus fréquentes : <b>E</b> (« ii ») et <b>I</b> (« aï »), <b>G</b> (« dji ») et <b>J</b> (« djeï »). Écoute-les plusieurs fois.</div>
<h2>Demander d'épeler</h2>
<p><s-en>How do you spell your name?</s-en> (Comment s'écrit ton nom ?) · <s-en>Can you spell that, please?</s-en> (Vous pouvez épeler ?)</p>
<p>Pour deux lettres identiques, on dit <b>double</b> : Emma = <s-en>E, double M, A</s-en></p>
<h2>Les adresses e-mail</h2>
<table>
<tr><th>Symbole</th><th>On dit</th></tr>
<tr><td>@</td><td>at</td></tr>
<tr><td>.</td><td>dot</td></tr>
<tr><td>-</td><td>dash / hyphen</td></tr>
<tr><td>_</td><td>underscore</td></tr>
</table>
<p>stella.m@example.com = <s-en>stella dot m at example dot com</s-en></p>
`,
  examples: [
    ["How do you spell your name?", "Comment s'écrit ton nom ?"],
    ["It's S, T, E, double L, A.", "C'est S, T, E, deux L, A."],
    ["Can you spell that, please?", "Vous pouvez épeler, s'il vous plaît ?"],
    ["My email is anna at mail dot com.", "Mon e-mail est anna arobase mail point com."],
    ["Is that with a G or a J?", "C'est avec un G ou un J ?"]
  ],
  quiz: [
    { q: "How do you pronounce the letter E in English?", q_fr: "Comment se prononce la lettre E en anglais ?", o: ["“eu”", "“ii”", "“aï”"], a: 1, ex: "E sounds like “ii”. I sounds like “aï”.", ex_fr: "E se dit « ii ». I se dit « aï »." },
    { q: "How do you say “@” in an email address?", q_fr: "Comment dit-on « @ » dans une adresse e-mail ?", o: ["at", "arobase", "and"], a: 0, ex: "@ = at.", ex_fr: "@ = at." },
    { q: "How do you spell “Anna” out loud?", q_fr: "Comment épeler « Anna » à voix haute ?", o: ["A, N, N, A", "A, double N, A", "A, two N, A"], a: 1, ex: "Two identical letters → double.", ex_fr: "Deux lettres identiques → double." },
    { q: "Which question asks someone to spell a word?", q_fr: "Quelle question demande d'épeler un mot ?", o: ["How do you say that?", "Can you spell that, please?", "What does that mean?"], a: 1, ex: "Spell = épeler.", ex_fr: "Spell = épeler." }
  ]
},
{
  id: 105, after: 3, level: "A1", kind: "functional", icon: "life-buoy",
  title: "Everyday English: asking for help in class", title_fr: "Anglais pratique : demander de l'aide en cours",
  subtitle: "The sentences that save you when you don't understand.", subtitle_fr: "Les phrases qui te sauvent quand tu ne comprends pas.",
  body: `
<p>When you learn a language, not understanding is normal. The important thing is to <b>say it in English</b>, instead of switching to French.</p>
<h2>When you didn't hear or understand</h2>
<p><s-en>Sorry?</s-en> · <s-en>Pardon?</s-en> (a polite “what?”)</p>
<p><s-en>Could you repeat that, please?</s-en></p>
<p><s-en>Could you speak more slowly, please?</s-en></p>
<p><s-en>I don't understand.</s-en></p>
<h2>When you need a word</h2>
<p><s-en>What does “awkward” mean?</s-en></p>
<p><s-en>How do you say “boulangerie” in English?</s-en></p>
<p><s-en>How do you pronounce this word?</s-en></p>
<h2>When you're not sure</h2>
<p><s-en>Is this correct?</s-en> · <s-en>Can I say…?</s-en> · <s-en>I'm not sure.</s-en> · <s-en>I don't know.</s-en></p>
<div class="warn">Never say “What?” alone to a stranger: it sounds rude. Say <s-en>Sorry?</s-en> or <s-en>Pardon?</s-en></div>
`,
  body_fr: `
<p>Quand on apprend une langue, ne pas comprendre est normal. L'important est de <b>le dire en anglais</b>, au lieu de repasser au français.</p>
<h2>Quand tu n'as pas entendu ou pas compris</h2>
<p><s-en>Sorry?</s-en> · <s-en>Pardon?</s-en> (un « pardon ? » poli)</p>
<p><s-en>Could you repeat that, please?</s-en> (Pourriez-vous répéter ?)</p>
<p><s-en>Could you speak more slowly, please?</s-en> (Pourriez-vous parler plus lentement ?)</p>
<p><s-en>I don't understand.</s-en> (Je ne comprends pas.)</p>
<h2>Quand il te manque un mot</h2>
<p><s-en>What does “awkward” mean?</s-en> (Que veut dire « awkward » ?)</p>
<p><s-en>How do you say “boulangerie” in English?</s-en> (Comment dit-on « boulangerie » en anglais ?)</p>
<p><s-en>How do you pronounce this word?</s-en> (Comment prononce-t-on ce mot ?)</p>
<h2>Quand tu as un doute</h2>
<p><s-en>Is this correct?</s-en> (C'est correct ?) · <s-en>Can I say…?</s-en> (Est-ce que je peux dire… ?) · <s-en>I'm not sure.</s-en> · <s-en>I don't know.</s-en></p>
<div class="warn">Ne dis jamais « What? » tout seul à un inconnu : c'est impoli. Dis <s-en>Sorry?</s-en> ou <s-en>Pardon?</s-en></div>
`,
  examples: [
    ["Sorry, could you repeat that, please?", "Pardon, vous pourriez répéter, s'il vous plaît ?"],
    ["Could you speak more slowly?", "Vous pourriez parler plus lentement ?"],
    ["What does this word mean?", "Que veut dire ce mot ?"],
    ["How do you say “parapluie” in English?", "Comment dit-on « parapluie » en anglais ?"],
    ["I'm not sure. Is this correct?", "J'ai un doute. C'est correct ?"]
  ],
  quiz: [
    { q: "You didn't hear what someone said. The polite reaction is:", q_fr: "Tu n'as pas entendu ce qu'on t'a dit. La réaction polie :", o: ["What?", "Sorry?", "Again!"], a: 1, ex: "Sorry? or Pardon? are polite.", ex_fr: "Sorry? ou Pardon? sont polis." },
    { q: "How do you ask the meaning of a word?", q_fr: "Comment demander le sens d'un mot ?", o: ["What does it mean?", "What it means?", "What does it means?"], a: 0, ex: "What does… mean? (does + base verb)", ex_fr: "What does… mean? (does + verbe de base)" },
    { q: "You want the English word for « fenêtre ». You ask:", q_fr: "Tu cherches le mot anglais pour « fenêtre ». Tu demandes :", o: ["How do you say “fenêtre” in English?", "How do you call “fenêtre”?", "What is “fenêtre” English?"], a: 0, ex: "How do you say … in English?", ex_fr: "How do you say … in English?" },
    { q: "Translate: « Pourriez-vous parler plus lentement ? »", o: ["Could you speak more slowly?", "Could you speak more slow?", "Can you slow speak?"], a: 0, ex: "More slowly (adverb).", ex_fr: "More slowly (adverbe)." }
  ]
},
{
  id: 103, after: 8, level: "A1", kind: "functional", icon: "coffee",
  title: "Everyday English: ordering food and drinks", title_fr: "Anglais pratique : commander à manger et à boire",
  subtitle: "In a café, a pub or a restaurant.", subtitle_fr: "Dans un café, un pub ou un restaurant.",
  body: `
<h2>What the waiter says</h2>
<p><s-en>Are you ready to order?</s-en> · <s-en>What would you like?</s-en> · <s-en>Anything else?</s-en> · <s-en>Eat in or take away?</s-en> (US: <s-en>For here or to go?</s-en>)</p>
<h2>What you say</h2>
<p><s-en>Can I have a coffee, please?</s-en></p>
<p><s-en>I'd like the chicken salad, please.</s-en></p>
<p><s-en>Could I have some water, please?</s-en></p>
<p><s-en>That's all, thanks.</s-en></p>
<div class="warn">“I want a coffee” sounds rude in English. Use <s-en>Can I have…?</s-en> or <s-en>I'd like…</s-en> (= I would like).</div>
<h2>Paying</h2>
<p><s-en>Can we have the bill, please?</s-en> (US: <s-en>the check</s-en>) · <s-en>Can I pay by card?</s-en> · <s-en>Keep the change.</s-en></p>
<div class="tip">In a British pub, you order and pay at the bar. There's no table service.</div>
`,
  body_fr: `
<h2>Ce que dit le serveur</h2>
<p><s-en>Are you ready to order?</s-en> (Vous avez choisi ?) · <s-en>What would you like?</s-en> (Que désirez-vous ?) · <s-en>Anything else?</s-en> (Autre chose ?) · <s-en>Eat in or take away?</s-en> (Sur place ou à emporter ?) (US : <s-en>For here or to go?</s-en>)</p>
<h2>Ce que tu dis</h2>
<p><s-en>Can I have a coffee, please?</s-en> (Je peux avoir un café ?)</p>
<p><s-en>I'd like the chicken salad, please.</s-en> (Je voudrais la salade au poulet.)</p>
<p><s-en>Could I have some water, please?</s-en> (Je pourrais avoir de l'eau ?)</p>
<p><s-en>That's all, thanks.</s-en> (Ce sera tout, merci.)</p>
<div class="warn">« I want a coffee » paraît impoli en anglais. Utilise <s-en>Can I have…?</s-en> ou <s-en>I'd like…</s-en> (= I would like).</div>
<h2>Payer</h2>
<p><s-en>Can we have the bill, please?</s-en> (L'addition, s'il vous plaît) (US : <s-en>the check</s-en>) · <s-en>Can I pay by card?</s-en> · <s-en>Keep the change.</s-en> (Gardez la monnaie.)</p>
<div class="tip">Dans un pub britannique, on commande et on paie au bar. Il n'y a pas de service à table.</div>
`,
  examples: [
    ["Are you ready to order?", "Vous avez choisi ?"],
    ["I'd like a tea with milk, please.", "Je voudrais un thé au lait, s'il vous plaît."],
    ["Can I have the fish, please?", "Je peux avoir le poisson, s'il vous plaît ?"],
    ["Eat in or take away?", "Sur place ou à emporter ?"],
    ["Can we have the bill, please?", "L'addition, s'il vous plaît."]
  ],
  quiz: [
    { q: "The most polite way to order is:", q_fr: "La façon la plus polie de commander :", o: ["I want a tea.", "Give me a tea.", "Can I have a tea, please?"], a: 2, ex: "Can I have…, please? is polite.", ex_fr: "Can I have…, please? est poli." },
    { q: "« L'addition, s'il vous plaît » (UK):", o: ["The addition, please.", "The bill, please.", "The note, please."], a: 1, ex: "UK: the bill. US: the check.", ex_fr: "UK : the bill. US : the check." },
    { q: "The waiter asks “Anything else?”. You don't want anything else:", q_fr: "Le serveur demande « Anything else? ». Tu ne veux rien d'autre :", o: ["That's all, thanks.", "Nothing else, no.", "It's finish."], a: 0, ex: "That's all, thanks = ce sera tout.", ex_fr: "That's all, thanks = ce sera tout." },
    { q: "“Eat in or take away?” means:", q_fr: "« Eat in or take away? » veut dire :", o: ["Are you hungry?", "Sur place ou à emporter ?", "Do you want to pay?"], a: 1, ex: "Eat in = sur place. Take away = à emporter.", ex_fr: "Eat in = sur place. Take away = à emporter." }
  ]
},
{
  id: 104, after: 10, level: "A1", kind: "functional", icon: "shopping-bag",
  title: "Everyday English: in a shop", title_fr: "Anglais pratique : dans un magasin",
  subtitle: "Ask for something, a price, a size, and pay.", subtitle_fr: "Demander un article, un prix, une taille, et payer.",
  body: `
<h2>The shop assistant</h2>
<p><s-en>Can I help you?</s-en> — <s-en>I'm just looking, thanks.</s-en></p>
<p><s-en>Are you looking for anything in particular?</s-en></p>
<h2>Asking for things</h2>
<p><s-en>Do you have this in a smaller size?</s-en> · <s-en>Do you have it in blue?</s-en></p>
<p><s-en>Can I try it on?</s-en> · <s-en>Where are the fitting rooms?</s-en></p>
<h2>Prices</h2>
<p><s-en>How much is it?</s-en> (one thing) · <s-en>How much are they?</s-en> (several things)</p>
<p>£5.99 = <s-en>five ninety-nine</s-en> · £20 = <s-en>twenty pounds</s-en> · €12.50 = <s-en>twelve euros fifty</s-en></p>
<h2>Deciding and paying</h2>
<p><s-en>I'll take it.</s-en> · <s-en>It's a bit too expensive.</s-en> · <s-en>Can I pay by card?</s-en> · <s-en>Can I have a bag, please?</s-en></p>
<div class="tip">“I'll take it” is the natural way to say you've decided to buy something.</div>
`,
  body_fr: `
<h2>Le vendeur ou la vendeuse</h2>
<p><s-en>Can I help you?</s-en> (Je peux vous aider ?) — <s-en>I'm just looking, thanks.</s-en> (Je regarde, merci.)</p>
<p><s-en>Are you looking for anything in particular?</s-en> (Vous cherchez quelque chose en particulier ?)</p>
<h2>Demander</h2>
<p><s-en>Do you have this in a smaller size?</s-en> (Vous l'avez dans une taille plus petite ?) · <s-en>Do you have it in blue?</s-en> (Vous l'avez en bleu ?)</p>
<p><s-en>Can I try it on?</s-en> (Je peux l'essayer ?) · <s-en>Where are the fitting rooms?</s-en> (Où sont les cabines d'essayage ?)</p>
<h2>Les prix</h2>
<p><s-en>How much is it?</s-en> (un article) · <s-en>How much are they?</s-en> (plusieurs articles)</p>
<p>5,99 £ = <s-en>five ninety-nine</s-en> · 20 £ = <s-en>twenty pounds</s-en> · 12,50 € = <s-en>twelve euros fifty</s-en></p>
<h2>Décider et payer</h2>
<p><s-en>I'll take it.</s-en> (Je le prends.) · <s-en>It's a bit too expensive.</s-en> (C'est un peu trop cher.) · <s-en>Can I pay by card?</s-en> · <s-en>Can I have a bag, please?</s-en> (Je peux avoir un sac ?)</p>
<div class="tip">« I'll take it » est la façon naturelle de dire que tu as décidé d'acheter.</div>
`,
  examples: [
    ["Can I help you? — I'm just looking, thanks.", "Je peux vous aider ? — Je regarde, merci."],
    ["Do you have this in a medium?", "Vous l'avez en M ?"],
    ["Can I try it on?", "Je peux l'essayer ?"],
    ["How much are these shoes?", "Combien coûtent ces chaussures ?"],
    ["It's perfect. I'll take it.", "C'est parfait. Je le prends."]
  ],
  quiz: [
    { q: "The shop assistant asks “Can I help you?”. You only want to look:", q_fr: "Le vendeur demande « Can I help you? ». Tu veux juste regarder :", o: ["No, go away.", "I'm just looking, thanks.", "I don't need help, me."], a: 1, ex: "I'm just looking, thanks = je regarde, merci.", ex_fr: "I'm just looking, thanks = je regarde, merci." },
    { q: "« Combien coûtent ces chaussures ? »", o: ["How much is these shoes?", "How much are these shoes?", "How many are these shoes?"], a: 1, ex: "Plural → How much are…?", ex_fr: "Pluriel → How much are…?" },
    { q: "You want to buy it. You say:", q_fr: "Tu veux l'acheter. Tu dis :", o: ["I'll take it.", "I take it now.", "I'm buying it me."], a: 0, ex: "I'll take it.", ex_fr: "I'll take it." },
    { q: "How do you say £5.99?", q_fr: "Comment dit-on 5,99 £ ?", o: ["five pounds and ninety-nine", "five ninety-nine", "five comma ninety-nine"], a: 1, ex: "Prices are usually said in two parts: five ninety-nine.", ex_fr: "On dit les prix en deux parties : five ninety-nine." }
  ]
}
);
