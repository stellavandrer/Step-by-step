/* Leçons de grammaire, du niveau zéro (A1) vers A2.
   Dans le corps : <s-en>texte</s-en> devient un bouton d'écoute. */
window.LESSONS = [
{
  id: 1, level: "A1", icon: "hand",
  title: "Se présenter : I am, you are",
  subtitle: "Le verbe « être » (to be), la base de tout.",
  body: `
<p>En anglais, le verbe <b>to be</b> veut dire <b>être</b>. C'est le verbe le plus utilisé de la langue : on s'en sert pour dire qui on est, comment on va, son âge, d'où on vient.</p>
<h2>La conjugaison au présent</h2>
<table>
<tr><th>Anglais</th><th>Forme courte</th><th>Français</th></tr>
<tr><td>I am</td><td>I'm</td><td>je suis</td></tr>
<tr><td>you are</td><td>you're</td><td>tu es / vous êtes</td></tr>
<tr><td>he is</td><td>he's</td><td>il est</td></tr>
<tr><td>she is</td><td>she's</td><td>elle est</td></tr>
<tr><td>it is</td><td>it's</td><td>il / elle est (objet, animal)</td></tr>
<tr><td>we are</td><td>we're</td><td>nous sommes</td></tr>
<tr><td>they are</td><td>they're</td><td>ils / elles sont</td></tr>
</table>
<div class="tip">À l'oral, les Anglais utilisent presque toujours la <b>forme courte</b> : <s-en>I'm Stella.</s-en> plutôt que « I am Stella ». Les deux sont corrects.</div>
<h2>Pièges pour les francophones</h2>
<ul>
<li><b>L'âge se dit avec « être », pas « avoir »</b> : <s-en>I'm 30.</s-en> (et jamais « I have 30 »).</li>
<li><b>« I » s'écrit toujours en majuscule</b>, même au milieu d'une phrase.</li>
<li><b>« You »</b> sert à la fois pour « tu » et « vous ». Pas de différence de politesse.</li>
<li><b>« It »</b> s'utilise pour les objets et les animaux : <s-en>It's a cat.</s-en></li>
</ul>
<h2>Pour se présenter</h2>
<p>Avec ces trois phrases, tu peux déjà te présenter :</p>
<p><s-en>Hi! I'm Stella. I'm French. I'm a designer.</s-en></p>
<div class="warn">Pour un métier, on met <b>a</b> (ou <b>an</b>) devant : <s-en>I'm a teacher.</s-en> En français, on dit « je suis professeure », sans article. En anglais, l'article est obligatoire.</div>
`,
  examples: [
    ["Hello, I'm Stella.", "Bonjour, je suis Stella."],
    ["I'm French. I'm from Paris.", "Je suis française. Je viens de Paris."],
    ["She's my sister.", "C'est ma sœur. (Elle est ma sœur.)"],
    ["We're tired.", "Nous sommes fatigués."],
    ["They're at home.", "Ils sont à la maison."],
    ["I'm thirty years old.", "J'ai trente ans."]
  ],
  quiz: [
    { q: "Comment dit-on « je suis fatiguée » ?", o: ["I is tired.", "I'm tired.", "I are tired."], a: 1, ex: "Avec « I », on utilise toujours « am » → I am / I'm." },
    { q: "« J'ai 25 ans » se dit :", o: ["I have 25 years.", "I'm 25.", "I has 25."], a: 1, ex: "L'âge se dit avec « to be » : I'm 25 (years old)." },
    { q: "Complète : « They ___ my friends. »", o: ["is", "am", "are"], a: 2, ex: "They → are." },
    { q: "« Je suis designer » se dit :", o: ["I'm designer.", "I'm a designer.", "I a designer."], a: 1, ex: "Devant un métier, on met « a » ou « an »." },
    { q: "Pour parler d'un chat, on utilise :", o: ["he / she", "it", "they"], a: 1, ex: "Objets et animaux → it." }
  ]
},
{
  id: 2, level: "A1", icon: "circle-help",
  title: "To be : négation et questions",
  subtitle: "Dire « je ne suis pas » et poser une question.",
  body: `
<h2>La négation : ajouter « not »</h2>
<p>Pour dire « ne… pas », on ajoute simplement <b>not</b> après le verbe.</p>
<table>
<tr><th>Forme longue</th><th>Forme courte</th><th>Français</th></tr>
<tr><td>I am not</td><td>I'm not</td><td>je ne suis pas</td></tr>
<tr><td>you are not</td><td>you aren't</td><td>tu n'es pas</td></tr>
<tr><td>he is not</td><td>he isn't</td><td>il n'est pas</td></tr>
<tr><td>we are not</td><td>we aren't</td><td>nous ne sommes pas</td></tr>
<tr><td>they are not</td><td>they aren't</td><td>ils ne sont pas</td></tr>
</table>
<p><s-en>I'm not English.</s-en> · <s-en>It isn't expensive.</s-en></p>
<h2>La question : on inverse</h2>
<p>Pour poser une question, on <b>met le verbe devant le sujet</b>, comme « Es-tu… ? » en français.</p>
<p><s-en>You are happy.</s-en> → <s-en>Are you happy?</s-en></p>
<p><s-en>She is at work.</s-en> → <s-en>Is she at work?</s-en></p>
<h2>Les réponses courtes</h2>
<p>En anglais, on ne répond pas seulement « yes » ou « no », ça peut paraître sec. On reprend le verbe :</p>
<table>
<tr><th>Question</th><th>Oui</th><th>Non</th></tr>
<tr><td>Are you French?</td><td>Yes, I am.</td><td>No, I'm not.</td></tr>
<tr><td>Is he your brother?</td><td>Yes, he is.</td><td>No, he isn't.</td></tr>
</table>
<div class="tip">Dans la réponse « Yes, I am. », on n'utilise <b>jamais</b> la forme courte : on dit « Yes, I am », pas « Yes, I'm ».</div>
<h2>Les mots pour poser des questions</h2>
<p><s-en>What</s-en> (quoi / quel), <s-en>Where</s-en> (où), <s-en>Who</s-en> (qui), <s-en>How</s-en> (comment), <s-en>How old</s-en> (quel âge), <s-en>When</s-en> (quand), <s-en>Why</s-en> (pourquoi).</p>
<p><s-en>Where are you from?</s-en> · <s-en>How old are you?</s-en> · <s-en>What's your name?</s-en></p>
`,
  examples: [
    ["I'm not hungry.", "Je n'ai pas faim."],
    ["Are you OK?", "Ça va ? (Tu vas bien ?)"],
    ["Is it far?", "Est-ce que c'est loin ?"],
    ["Where are you from?", "D'où viens-tu ?"],
    ["Yes, I am. / No, I'm not.", "Oui. / Non."],
    ["How are you? — I'm fine, thanks.", "Comment vas-tu ? — Bien, merci."]
  ],
  quiz: [
    { q: "« Je ne suis pas en retard » :", o: ["I'm not late.", "I don't late.", "I amn't late."], a: 0, ex: "Négation de « to be » : I'm not." },
    { q: "Transforme en question : « She is happy. »", o: ["She is happy?", "Is she happy?", "Does she happy?"], a: 1, ex: "On inverse : Is she…?" },
    { q: "« Are you a student? » — Réponse correcte :", o: ["Yes, I'm.", "Yes, I am.", "Yes, I are."], a: 1, ex: "Dans la réponse courte, pas de contraction : Yes, I am." },
    { q: "Quel mot veut dire « où » ?", o: ["What", "Who", "Where"], a: 2, ex: "Where = où. Who = qui. What = quoi." },
    { q: "Complète : « ___ old are you? »", o: ["What", "How", "Who"], a: 1, ex: "« Quel âge as-tu ? » = How old are you?" }
  ]
},
{
  id: 3, level: "A1", icon: "apple",
  title: "Les articles : a, an, the",
  subtitle: "Un, une, le, la, les… en beaucoup plus simple.",
  body: `
<p>Bonne nouvelle : en anglais, il n'y a <b>ni masculin ni féminin</b>. Une table, un livre : c'est pareil.</p>
<h2>A / An = un, une</h2>
<ul>
<li><b>a</b> devant un <b>son</b> de consonne : <s-en>a book</s-en>, <s-en>a car</s-en>, <s-en>a university</s-en> (on entend « you »).</li>
<li><b>an</b> devant un <b>son</b> de voyelle : <s-en>an apple</s-en>, <s-en>an egg</s-en>, <s-en>an hour</s-en> (le h ne se prononce pas).</li>
</ul>
<div class="tip">Ce qui compte, c'est le <b>son</b>, pas la lettre. C'est pour ça qu'on dit « an hour » mais « a university ».</div>
<h2>The = le, la, les</h2>
<p><b>The</b> est le même au singulier et au pluriel : <s-en>the cat</s-en> (le chat), <s-en>the cats</s-en> (les chats).</p>
<p>Il se prononce « the » (comme « de » avec la langue entre les dents) devant une consonne, et « thi » devant une voyelle : <s-en>the apple</s-en>.</p>
<h2>Le grand piège : pas d'article pour les généralités</h2>
<p>En français, on dit « J'aime <b>le</b> café ». En anglais, quand on parle de quelque chose <b>en général</b>, on ne met <b>pas</b> d'article :</p>
<p><s-en>I like coffee.</s-en> (j'aime le café, en général)</p>
<p><s-en>Cats are cute.</s-en> (les chats sont mignons, en général)</p>
<p><s-en>Life is beautiful.</s-en> (la vie est belle)</p>
<div class="warn">« I like the coffee » voudrait dire « j'aime <b>ce</b> café-là », un café précis.</div>
`,
  examples: [
    ["I have a dog and a cat.", "J'ai un chien et un chat."],
    ["She eats an apple.", "Elle mange une pomme."],
    ["Wait an hour.", "Attends une heure."],
    ["The book is on the table.", "Le livre est sur la table."],
    ["I love music.", "J'adore la musique."],
    ["Dogs are friendly.", "Les chiens sont gentils."]
  ],
  quiz: [
    { q: "___ orange", o: ["a", "an"], a: 1, ex: "Orange commence par un son de voyelle → an." },
    { q: "___ university", o: ["a", "an"], a: 0, ex: "On entend « you-niversity » : un son de consonne → a." },
    { q: "« J'aime le chocolat » (en général) :", o: ["I like the chocolate.", "I like chocolate.", "I like a chocolate."], a: 1, ex: "Généralité → pas d'article." },
    { q: "« Les enfants sont dans le jardin » :", o: ["The children are in the garden.", "Children are in garden.", "The children are in garden."], a: 0, ex: "On parle d'enfants et d'un jardin précis → the." },
    { q: "___ hour", o: ["a", "an"], a: 1, ex: "Le h de « hour » est muet → an hour." }
  ]
},
{
  id: 4, level: "A1", icon: "pointer",
  title: "Pluriels et this / that",
  subtitle: "Ajouter un -s, et montrer les choses.",
  body: `
<h2>Le pluriel : on ajoute -s</h2>
<p>Dans la plupart des cas : <s-en>a book → two books</s-en>, <s-en>a car → three cars</s-en>.</p>
<ul>
<li>Après <b>s, sh, ch, x</b> → <b>-es</b> : <s-en>a bus → two buses</s-en>, <s-en>a box → boxes</s-en>.</li>
<li>Consonne + <b>y</b> → <b>-ies</b> : <s-en>a city → cities</s-en>, <s-en>a baby → babies</s-en>.</li>
</ul>
<h2>Les pluriels irréguliers à connaître</h2>
<table>
<tr><th>Singulier</th><th>Pluriel</th><th>Français</th></tr>
<tr><td>man</td><td>men</td><td>homme(s)</td></tr>
<tr><td>woman</td><td>women</td><td>femme(s)</td></tr>
<tr><td>child</td><td>children</td><td>enfant(s)</td></tr>
<tr><td>person</td><td>people</td><td>personne(s) / gens</td></tr>
<tr><td>foot</td><td>feet</td><td>pied(s)</td></tr>
<tr><td>tooth</td><td>teeth</td><td>dent(s)</td></tr>
</table>
<div class="tip"><b>Les adjectifs ne prennent jamais de -s</b> : <s-en>a big house → two big houses</s-en>. Jamais « bigs ».</div>
<h2>This / that : ce, cette, celui-ci</h2>
<table>
<tr><th></th><th>Près de moi</th><th>Loin de moi</th></tr>
<tr><td>Singulier</td><td>this (ce…-ci)</td><td>that (ce…-là)</td></tr>
<tr><td>Pluriel</td><td>these (ces…-ci)</td><td>those (ces…-là)</td></tr>
</table>
<p><s-en>This is my phone.</s-en> (celui que je tiens) · <s-en>That car is red.</s-en> (là-bas)</p>
<p><s-en>These shoes are new.</s-en> · <s-en>Those people are nice.</s-en></p>
<div class="warn">Attention à la prononciation : <b>this</b> (i court) et <b>these</b> (i long, « ziiz »). Écoute bien la différence avec les boutons d'écoute.</div>
`,
  examples: [
    ["I have two children.", "J'ai deux enfants."],
    ["These are my keys.", "Ce sont mes clés."],
    ["Is this your bag?", "Est-ce que c'est ton sac ?"],
    ["Those women are doctors.", "Ces femmes-là sont médecins."],
    ["The cities are big.", "Les villes sont grandes."],
    ["What's that?", "Qu'est-ce que c'est (là-bas) ?"]
  ],
  quiz: [
    { q: "Le pluriel de « child » :", o: ["childs", "children", "childrens"], a: 1, ex: "Pluriel irrégulier : children." },
    { q: "Le pluriel de « box » :", o: ["boxs", "boxes", "boxies"], a: 1, ex: "Après x → -es." },
    { q: "« Ces chaussures-ci sont confortables » :", o: ["This shoes are comfortable.", "These shoes are comfortable.", "Those shoe are comfortable."], a: 1, ex: "Pluriel + près → these." },
    { q: "« Deux grandes maisons » :", o: ["two bigs houses", "two big houses", "two big house"], a: 1, ex: "L'adjectif reste invariable, le nom prend -s." },
    { q: "Le pluriel de « person » :", o: ["persons", "peoples", "people"], a: 2, ex: "Person → people." }
  ]
},
{
  id: 5, level: "A1", icon: "sun",
  title: "Le présent simple : I work, she works",
  subtitle: "Parler de ses habitudes et de ce qui est vrai.",
  body: `
<p>Le <b>présent simple</b> sert à parler des <b>habitudes</b>, de ce qu'on fait souvent, et des vérités générales.</p>
<h2>La règle : facile… sauf un détail</h2>
<table>
<tr><th>Anglais</th><th>Français</th></tr>
<tr><td>I work</td><td>je travaille</td></tr>
<tr><td>you work</td><td>tu travailles</td></tr>
<tr><td>he / she / it work<b>s</b></td><td>il / elle travaille</td></tr>
<tr><td>we work</td><td>nous travaillons</td></tr>
<tr><td>they work</td><td>ils travaillent</td></tr>
</table>
<div class="warn"><b>La règle d'or : avec he, she, it, on ajoute un -s au verbe.</b> C'est l'erreur la plus fréquente, même chez les gens avancés. <s-en>She works.</s-en> <s-en>He likes tea.</s-en></div>
<h2>Les cas particuliers du -s</h2>
<ul>
<li>Après <b>o, s, sh, ch, x</b> → <b>-es</b> : <s-en>he goes</s-en>, <s-en>she watches</s-en>, <s-en>it fixes</s-en>.</li>
<li>Consonne + <b>y</b> → <b>-ies</b> : <s-en>study → she studies</s-en>.</li>
<li><b>have</b> → <b>has</b> : <s-en>She has a car.</s-en></li>
</ul>
<h2>Les mots de fréquence</h2>
<p>Ils se placent <b>avant le verbe</b> (mais après « to be ») :</p>
<p><s-en>always</s-en> (toujours) · <s-en>usually</s-en> (d'habitude) · <s-en>often</s-en> (souvent) · <s-en>sometimes</s-en> (parfois) · <s-en>never</s-en> (jamais)</p>
<p><s-en>I always drink coffee in the morning.</s-en></p>
<p><s-en>She is never late.</s-en></p>
`,
  examples: [
    ["I live in France.", "J'habite en France."],
    ["She works in an office.", "Elle travaille dans un bureau."],
    ["He watches TV every evening.", "Il regarde la télé tous les soirs."],
    ["We often go to the cinema.", "Nous allons souvent au cinéma."],
    ["My sister has two cats.", "Ma sœur a deux chats."],
    ["I never eat meat.", "Je ne mange jamais de viande."]
  ],
  quiz: [
    { q: "Complète : « She ___ English. » (parler)", o: ["speak", "speaks", "speakes"], a: 1, ex: "She → on ajoute -s : speaks." },
    { q: "Complète : « He ___ to work by bus. » (aller)", o: ["go", "gos", "goes"], a: 2, ex: "Go se termine par o → goes." },
    { q: "Complète : « My mother ___ a new phone. » (avoir)", o: ["have", "has", "haves"], a: 1, ex: "Have devient has avec he / she / it." },
    { q: "Où placer « always » ?", o: ["I drink always tea.", "I always drink tea.", "Always I drink tea."], a: 1, ex: "Avant le verbe principal." },
    { q: "Complète : « They ___ in London. » (vivre)", o: ["live", "lives", "living"], a: 0, ex: "They → pas de -s." }
  ]
},
{
  id: 6, level: "A1", icon: "repeat",
  title: "Do / does : questions et négations",
  subtitle: "L'outil magique du présent simple.",
  body: `
<p>Avec les verbes normaux (pas « to be »), on a besoin d'un petit mot outil : <b>do</b> (ou <b>does</b> avec he / she / it). Il ne se traduit pas : c'est juste une « béquille ».</p>
<h2>La négation : don't / doesn't</h2>
<table>
<tr><th>Anglais</th><th>Français</th></tr>
<tr><td>I don't like fish.</td><td>Je n'aime pas le poisson.</td></tr>
<tr><td>You don't understand.</td><td>Tu ne comprends pas.</td></tr>
<tr><td>She doesn't like fish.</td><td>Elle n'aime pas le poisson.</td></tr>
<tr><td>They don't work today.</td><td>Ils ne travaillent pas aujourd'hui.</td></tr>
</table>
<div class="warn"><b>Le -s part dans « does » !</b> On dit <s-en>She doesn't like</s-en>, jamais « she doesn't likes ». Le -s n'apparaît qu'une fois.</div>
<h2>La question : Do … ? / Does … ?</h2>
<p><s-en>Do you speak English?</s-en> (Parles-tu anglais ?)</p>
<p><s-en>Does he live here?</s-en> (Est-ce qu'il habite ici ?)</p>
<p><s-en>Where do you work?</s-en> · <s-en>What does she do?</s-en> (Que fait-elle dans la vie ?)</p>
<h2>Réponses courtes</h2>
<p><s-en>Do you like pizza? — Yes, I do. / No, I don't.</s-en></p>
<p><s-en>Does she drive? — Yes, she does. / No, she doesn't.</s-en></p>
<div class="tip">Résumé : <b>to be</b> se débrouille seul (Are you…? I'm not…). <b>Tous les autres verbes</b> ont besoin de do / does.</div>
`,
  examples: [
    ["I don't understand.", "Je ne comprends pas."],
    ["Do you speak French?", "Parlez-vous français ?"],
    ["She doesn't eat meat.", "Elle ne mange pas de viande."],
    ["What do you do?", "Que faites-vous dans la vie ?"],
    ["Does it work?", "Est-ce que ça marche ?"],
    ["I don't know.", "Je ne sais pas."]
  ],
  quiz: [
    { q: "« Je ne parle pas allemand » :", o: ["I not speak German.", "I don't speak German.", "I'm not speak German."], a: 1, ex: "Verbe normal → don't + verbe." },
    { q: "Complète : « He ___ like coffee. »", o: ["don't", "doesn't", "isn't"], a: 1, ex: "He → doesn't." },
    { q: "Laquelle est correcte ?", o: ["She doesn't likes tea.", "She doesn't like tea.", "She don't like tea."], a: 1, ex: "Le -s est déjà dans « does », le verbe reste nu." },
    { q: "« Est-ce que tu habites ici ? »", o: ["Are you live here?", "Do you live here?", "You live here?"], a: 1, ex: "Question avec un verbe normal → Do you…?" },
    { q: "« Does she work here? » — Oui :", o: ["Yes, she does.", "Yes, she works.", "Yes, she is."], a: 0, ex: "On reprend l'auxiliaire : Yes, she does." }
  ]
},
{
  id: 7, level: "A1", icon: "tag",
  title: "My, your, his, her… et le 's",
  subtitle: "Dire à qui appartient quelque chose.",
  body: `
<h2>Les adjectifs possessifs</h2>
<table>
<tr><th>Anglais</th><th>Français</th></tr>
<tr><td>my</td><td>mon, ma, mes</td></tr>
<tr><td>your</td><td>ton, ta, tes / votre, vos</td></tr>
<tr><td>his</td><td>son, sa, ses (à lui)</td></tr>
<tr><td>her</td><td>son, sa, ses (à elle)</td></tr>
<tr><td>its</td><td>son, sa, ses (objet, animal)</td></tr>
<tr><td>our</td><td>notre, nos</td></tr>
<tr><td>their</td><td>leur, leurs</td></tr>
</table>
<div class="warn"><b>Le grand piège des francophones</b> : en anglais, le possessif dépend du <b>propriétaire</b>, pas de l'objet.<br>« Sa voiture » (la voiture de Paul) → <s-en>his car</s-en>.<br>« Sa voiture » (la voiture de Julie) → <s-en>her car</s-en>.</div>
<h2>Le 's : la possession avec un nom</h2>
<p>Pour dire « la voiture de Paul », on dit <s-en>Paul's car</s-en>. Le propriétaire vient <b>en premier</b>, suivi de <b>'s</b>.</p>
<p><s-en>my mother's house</s-en> (la maison de ma mère)</p>
<p><s-en>the cat's toy</s-en> (le jouet du chat)</p>
<p>Avec un pluriel en -s, on met juste l'apostrophe : <s-en>my parents' house</s-en>.</p>
<div class="tip">Ne confonds pas <b>its</b> (son, sa) et <b>it's</b> (= it is, c'est). Même les Anglais se trompent !</div>
`,
  examples: [
    ["My name is Stella.", "Je m'appelle Stella. (Mon nom est…)"],
    ["What's your phone number?", "Quel est ton numéro ?"],
    ["Tom loves his job.", "Tom adore son travail."],
    ["Anna and her husband.", "Anna et son mari."],
    ["This is my sister's bag.", "C'est le sac de ma sœur."],
    ["Their house is beautiful.", "Leur maison est magnifique."]
  ],
  quiz: [
    { q: "« Julie et son frère » :", o: ["Julie and his brother", "Julie and her brother", "Julie and its brother"], a: 1, ex: "Le propriétaire est Julie (une femme) → her." },
    { q: "« Marc adore sa voiture » :", o: ["Marc loves her car.", "Marc loves his car.", "Marc loves the his car."], a: 1, ex: "Le propriétaire est Marc → his." },
    { q: "« Le chien de Sam » :", o: ["the dog of Sam", "Sam's dog", "Sam dog's"], a: 1, ex: "Propriétaire + 's + objet." },
    { q: "« Leur fille » :", o: ["their daughter", "they daughter", "there daughter"], a: 0, ex: "Leur = their. (There = là-bas, attention !)" },
    { q: "« C'est mon livre » :", o: ["It's my book.", "Its my book.", "It's me book."], a: 0, ex: "It's = it is. My = mon." }
  ]
},
{
  id: 8, level: "A1", icon: "dumbbell",
  title: "Can : pouvoir et savoir faire",
  subtitle: "Un verbe ultra pratique, et très simple.",
  body: `
<p><b>Can</b> veut dire <b>pouvoir</b> ou <b>savoir</b> (faire quelque chose). Et il est super simple : <b>il ne change jamais</b>.</p>
<h2>La forme</h2>
<p><s-en>I can swim.</s-en> · <s-en>She can swim.</s-en> · <s-en>They can swim.</s-en></p>
<ul>
<li><b>Pas de -s</b> avec he / she / it : « she can », jamais « she cans ».</li>
<li><b>Pas de « to »</b> après : <s-en>I can speak</s-en>, jamais « I can to speak ».</li>
</ul>
<h2>Négation : can't (ou cannot)</h2>
<p><s-en>I can't swim.</s-en> (Je ne sais pas nager.)</p>
<div class="tip">Prononciation : en anglais britannique, <b>can't</b> se dit « caant » (a long). En américain, la différence entre can et can't est subtile : écoute le « t » final et l'accent sur le mot.</div>
<h2>Question : on inverse</h2>
<p><s-en>Can you help me?</s-en> (Peux-tu m'aider ?)</p>
<p><s-en>Can I have a coffee, please?</s-en> (Je peux avoir un café, s'il vous plaît ?)</p>
<p><s-en>Could you repeat, please?</s-en> (Pourriez-vous répéter ?) — <b>could</b> est la version plus polie.</p>
`,
  examples: [
    ["I can speak a little English.", "Je parle un peu anglais."],
    ["Can you help me, please?", "Pouvez-vous m'aider, s'il vous plaît ?"],
    ["She can't come tonight.", "Elle ne peut pas venir ce soir."],
    ["Can I pay by card?", "Je peux payer par carte ?"],
    ["Could you speak slowly, please?", "Pourriez-vous parler lentement, s'il vous plaît ?"],
    ["We can go tomorrow.", "Nous pouvons y aller demain."]
  ],
  quiz: [
    { q: "« Elle sait conduire » :", o: ["She cans drive.", "She can drive.", "She can to drive."], a: 1, ex: "Can ne change jamais, et pas de « to »." },
    { q: "« Je ne peux pas venir » :", o: ["I don't can come.", "I can't come.", "I can't to come."], a: 1, ex: "Négation : can't + verbe." },
    { q: "Demande poliment de répéter :", o: ["Repeat!", "Could you repeat, please?", "You can repeat?"], a: 1, ex: "Could you… please? est très poli." },
    { q: "« Est-ce que je peux m'asseoir ici ? »", o: ["Can I sit here?", "Do I can sit here?", "I can sit here?"], a: 0, ex: "Question : on inverse → Can I…?" }
  ]
},
{
  id: 9, level: "A1", icon: "hourglass",
  title: "Le présent continu : I'm working",
  subtitle: "Ce qui se passe en ce moment.",
  body: `
<p>Le français n'a qu'un présent. L'anglais en a <b>deux</b> :</p>
<ul>
<li><b>Présent simple</b> = habitude : <s-en>I work every day.</s-en></li>
<li><b>Présent continu</b> = en ce moment, « être en train de » : <s-en>I'm working now.</s-en></li>
</ul>
<h2>La formation : be + verbe-ing</h2>
<table>
<tr><th>Anglais</th><th>Français</th></tr>
<tr><td>I'm reading.</td><td>Je lis (en ce moment).</td></tr>
<tr><td>You're sleeping.</td><td>Tu dors.</td></tr>
<tr><td>She's cooking.</td><td>Elle cuisine.</td></tr>
<tr><td>We're watching a film.</td><td>On regarde un film.</td></tr>
</table>
<h2>L'orthographe du -ing</h2>
<ul>
<li>e final disparaît : <s-en>make → making</s-en>, <s-en>write → writing</s-en></li>
<li>verbe court consonne-voyelle-consonne → on double : <s-en>run → running</s-en>, <s-en>swim → swimming</s-en></li>
</ul>
<h2>Négation et question</h2>
<p>C'est « to be » qui fait le travail : <s-en>I'm not working.</s-en> · <s-en>Are you listening?</s-en> · <s-en>What are you doing?</s-en></p>
<div class="tip">Mots indices : <b>now</b> (maintenant), <b>right now</b>, <b>at the moment</b>, <b>Look!</b>, <b>Listen!</b> → présent continu.</div>
<div class="warn">Certains verbes ne se mettent presque jamais en -ing : <b>like, love, know, want, need, understand</b>. On dit <s-en>I know.</s-en> et pas « I'm knowing ».</div>
`,
  examples: [
    ["What are you doing?", "Qu'est-ce que tu fais ?"],
    ["I'm learning English.", "J'apprends l'anglais."],
    ["It's raining.", "Il pleut."],
    ["She's talking on the phone.", "Elle est au téléphone."],
    ["We're not doing anything.", "On ne fait rien."],
    ["Look! The children are playing.", "Regarde ! Les enfants jouent."]
  ],
  quiz: [
    { q: "« Je regarde la télé » (en ce moment) :", o: ["I watch TV.", "I'm watching TV.", "I watching TV."], a: 1, ex: "En ce moment → be + -ing." },
    { q: "« Je regarde la télé tous les soirs » :", o: ["I watch TV every evening.", "I'm watching TV every evening."], a: 0, ex: "Habitude → présent simple." },
    { q: "Forme en -ing de « swim » :", o: ["swiming", "swimming", "swimeing"], a: 1, ex: "On double la consonne finale : swimming." },
    { q: "« Je sais » :", o: ["I'm knowing.", "I know."], a: 1, ex: "Know ne se met pas en -ing." },
    { q: "« Qu'est-ce que tu fais ? » (maintenant)", o: ["What do you do?", "What are you doing?"], a: 1, ex: "« What do you do? » veut dire « quel est ton métier ? »." }
  ]
},
{
  id: 10, level: "A1", icon: "map-pin",
  title: "There is / there are",
  subtitle: "Dire « il y a ».",
  body: `
<h2>Il y a…</h2>
<ul>
<li><b>There is</b> (there's) + singulier : <s-en>There's a bank near here.</s-en></li>
<li><b>There are</b> + pluriel : <s-en>There are two bedrooms.</s-en></li>
</ul>
<h2>Négation et question</h2>
<p><s-en>There isn't a lift.</s-en> (Il n'y a pas d'ascenseur.)</p>
<p><s-en>There aren't any shops.</s-en> (Il n'y a pas de magasins.)</p>
<p><s-en>Is there a toilet here?</s-en> · <s-en>Are there any questions?</s-en></p>
<h2>Some et any : « du, de la, des »</h2>
<ul>
<li><b>some</b> dans les phrases affirmatives : <s-en>There's some milk.</s-en> · <s-en>I have some friends in London.</s-en></li>
<li><b>any</b> dans les négations et les questions : <s-en>There isn't any milk.</s-en> · <s-en>Do you have any questions?</s-en></li>
</ul>
<div class="tip">Exception utile : pour <b>proposer</b> ou <b>demander</b> poliment, on garde « some » : <s-en>Would you like some tea?</s-en></div>
<h2>Bonus : how much / how many</h2>
<p><s-en>How many</s-en> + ce qu'on compte (people, books). <s-en>How much</s-en> + ce qu'on ne compte pas (water, money, time) et pour les prix : <s-en>How much is it?</s-en> (Combien ça coûte ?)</p>
`,
  examples: [
    ["There's a problem.", "Il y a un problème."],
    ["There are a lot of people.", "Il y a beaucoup de monde."],
    ["Is there a pharmacy near here?", "Y a-t-il une pharmacie près d'ici ?"],
    ["There isn't any sugar.", "Il n'y a pas de sucre."],
    ["How many people are there?", "Combien de personnes y a-t-il ?"],
    ["How much is it?", "Combien ça coûte ?"]
  ],
  quiz: [
    { q: "« Il y a trois chambres » :", o: ["There is three bedrooms.", "There are three bedrooms.", "It has three bedrooms."], a: 1, ex: "Pluriel → there are." },
    { q: "« Y a-t-il un bus ? »", o: ["Is there a bus?", "There is a bus?", "Has it a bus?"], a: 0, ex: "Question → on inverse : Is there…?" },
    { q: "« Je n'ai pas d'argent » :", o: ["I don't have some money.", "I don't have any money."], a: 1, ex: "Négation → any." },
    { q: "« Combien ça coûte ? »", o: ["How many is it?", "How much is it?", "How cost it?"], a: 1, ex: "Le prix → How much." }
  ]
},
{
  id: 11, level: "A2", icon: "calendar",
  title: "Le passé : was, were et les verbes en -ed",
  subtitle: "Raconter ce qui s'est passé.",
  body: `
<p>Le <b>prétérit</b> (past simple) correspond au passé composé ET à l'imparfait français : <s-en>I worked</s-en> = j'ai travaillé / je travaillais.</p>
<h2>To be au passé</h2>
<table>
<tr><th>Anglais</th><th>Français</th></tr>
<tr><td>I was</td><td>j'étais / j'ai été</td></tr>
<tr><td>you were</td><td>tu étais</td></tr>
<tr><td>he / she / it was</td><td>il / elle était</td></tr>
<tr><td>we were</td><td>nous étions</td></tr>
<tr><td>they were</td><td>ils étaient</td></tr>
</table>
<p><s-en>I was tired yesterday.</s-en> · <s-en>Were you at home?</s-en> · <s-en>It wasn't easy.</s-en></p>
<h2>Les verbes réguliers : + ed</h2>
<p><s-en>work → worked</s-en>, <s-en>watch → watched</s-en>, <s-en>live → lived</s-en>, <s-en>study → studied</s-en>, <s-en>stop → stopped</s-en>.</p>
<p>Bonne nouvelle : c'est la <b>même forme pour toutes les personnes</b>. I worked, she worked, they worked.</p>
<h2>La prononciation du -ed (3 sons)</h2>
<ul>
<li><b>« t »</b> : <s-en>worked</s-en>, <s-en>watched</s-en>, <s-en>stopped</s-en></li>
<li><b>« d »</b> : <s-en>lived</s-en>, <s-en>played</s-en>, <s-en>called</s-en></li>
<li><b>« id »</b> (seulement après t ou d) : <s-en>wanted</s-en>, <s-en>needed</s-en></li>
</ul>
<div class="warn">On ne dit pas « work-ED » ! Le e est muet dans la plupart des cas.</div>
<h2>Négation et question : did</h2>
<p>Au passé, <b>do</b> devient <b>did</b>, et le verbe redevient « nu » :</p>
<p><s-en>I didn't work yesterday.</s-en> · <s-en>Did you like the film?</s-en> · <s-en>Yes, I did.</s-en></p>
<div class="tip">Comme avec doesn't : le passé est déjà dans « did ». On dit « I didn't watch », jamais « I didn't watched ».</div>
`,
  examples: [
    ["I was at home last night.", "J'étais à la maison hier soir."],
    ["We watched a film.", "Nous avons regardé un film."],
    ["She lived in Spain for two years.", "Elle a vécu en Espagne pendant deux ans."],
    ["Did you call him?", "Tu l'as appelé ?"],
    ["I didn't like it.", "Je n'ai pas aimé."],
    ["The weather was beautiful.", "Il faisait beau."]
  ],
  quiz: [
    { q: "« Nous étions fatigués » :", o: ["We was tired.", "We were tired.", "We are tired."], a: 1, ex: "We → were." },
    { q: "« Elle a travaillé hier » :", o: ["She works yesterday.", "She worked yesterday.", "She did worked yesterday."], a: 1, ex: "Verbe régulier : + ed." },
    { q: "« Je n'ai pas regardé » :", o: ["I didn't watched.", "I didn't watch.", "I don't watched."], a: 1, ex: "Did + verbe nu." },
    { q: "« As-tu aimé le livre ? »", o: ["Did you like the book?", "Do you liked the book?", "Liked you the book?"], a: 0, ex: "Question au passé : Did you + verbe nu?" },
    { q: "Comment se prononce la fin de « wanted » ?", o: ["« t »", "« d »", "« id »"], a: 2, ex: "Après un t ou un d, -ed se prononce « id »." }
  ]
},
{
  id: 12, level: "A2", icon: "puzzle",
  title: "Le passé : les verbes irréguliers",
  subtitle: "Les 30 verbes qui reviennent tout le temps.",
  body: `
<p>Certains verbes, souvent les plus courants, ne prennent pas -ed. Il faut les apprendre par cœur, mais <b>30 verbes suffisent</b> pour la vie de tous les jours.</p>
<table>
<tr><th>Verbe</th><th>Passé</th><th>Français</th></tr>
<tr><td>go</td><td>went</td><td>aller</td></tr>
<tr><td>have</td><td>had</td><td>avoir</td></tr>
<tr><td>do</td><td>did</td><td>faire</td></tr>
<tr><td>make</td><td>made</td><td>faire, fabriquer</td></tr>
<tr><td>get</td><td>got</td><td>obtenir, devenir</td></tr>
<tr><td>see</td><td>saw</td><td>voir</td></tr>
<tr><td>come</td><td>came</td><td>venir</td></tr>
<tr><td>take</td><td>took</td><td>prendre</td></tr>
<tr><td>eat</td><td>ate</td><td>manger</td></tr>
<tr><td>drink</td><td>drank</td><td>boire</td></tr>
<tr><td>say</td><td>said</td><td>dire</td></tr>
<tr><td>tell</td><td>told</td><td>raconter, dire à</td></tr>
<tr><td>know</td><td>knew</td><td>savoir, connaître</td></tr>
<tr><td>think</td><td>thought</td><td>penser</td></tr>
<tr><td>buy</td><td>bought</td><td>acheter</td></tr>
<tr><td>bring</td><td>brought</td><td>apporter</td></tr>
<tr><td>find</td><td>found</td><td>trouver</td></tr>
<tr><td>give</td><td>gave</td><td>donner</td></tr>
<tr><td>leave</td><td>left</td><td>partir, quitter</td></tr>
<tr><td>meet</td><td>met</td><td>rencontrer</td></tr>
<tr><td>pay</td><td>paid</td><td>payer</td></tr>
<tr><td>put</td><td>put</td><td>mettre</td></tr>
<tr><td>read</td><td>read</td><td>lire (se prononce « red »)</td></tr>
<tr><td>sleep</td><td>slept</td><td>dormir</td></tr>
<tr><td>speak</td><td>spoke</td><td>parler</td></tr>
<tr><td>write</td><td>wrote</td><td>écrire</td></tr>
<tr><td>feel</td><td>felt</td><td>(se) sentir</td></tr>
<tr><td>begin</td><td>began</td><td>commencer</td></tr>
<tr><td>forget</td><td>forgot</td><td>oublier</td></tr>
<tr><td>lose</td><td>lost</td><td>perdre</td></tr>
</table>
<div class="tip">Astuce mémoire : apprends-les par groupes de sons. <b>bought, brought, thought</b> (tous en « ought »), <b>slept, felt, left, met</b> (courts, en t)…</div>
<div class="warn">Rappel : à la négation et à la question, on revient au verbe de base. <s-en>I went</s-en> mais <s-en>I didn't go</s-en> et <s-en>Did you go?</s-en></div>
`,
  examples: [
    ["I went to London last year.", "Je suis allée à Londres l'année dernière."],
    ["We had a great time.", "On s'est super bien amusés."],
    ["She bought a new dress.", "Elle a acheté une nouvelle robe."],
    ["I saw a good film yesterday.", "J'ai vu un bon film hier."],
    ["They didn't come.", "Ils ne sont pas venus."],
    ["What did you say?", "Qu'est-ce que tu as dit ?"]
  ],
  quiz: [
    { q: "Passé de « go » :", o: ["goed", "went", "gone"], a: 1, ex: "go → went." },
    { q: "« J'ai acheté du pain » :", o: ["I buyed bread.", "I bought bread.", "I brought bread."], a: 1, ex: "buy → bought. (brought = apporté)" },
    { q: "« Je n'y suis pas allée » :", o: ["I didn't went.", "I didn't go.", "I wasn't go."], a: 1, ex: "Didn't + verbe de base." },
    { q: "Passé de « think » :", o: ["thinked", "thought", "taught"], a: 1, ex: "think → thought." },
    { q: "« Nous nous sommes rencontrés à Paris » :", o: ["We met in Paris.", "We meeted in Paris.", "We meet in Paris."], a: 0, ex: "meet → met." }
  ]
},
{
  id: 13, level: "A2", icon: "rocket",
  title: "Le futur : will et going to",
  subtitle: "Parler de demain, de ses projets.",
  body: `
<p>Il n'y a pas de terminaison du futur en anglais. On utilise deux outils principaux.</p>
<h2>Going to : les projets déjà décidés</h2>
<p><b>be + going to + verbe</b> = « je vais faire », quelque chose de prévu.</p>
<p><s-en>I'm going to visit my parents this weekend.</s-en></p>
<p><s-en>She's going to start a new job.</s-en></p>
<p><s-en>Look at those clouds! It's going to rain.</s-en> (on le voit venir)</p>
<h2>Will : décision sur le moment, promesse, prédiction</h2>
<p><b>will + verbe</b>, identique pour toutes les personnes. Forme courte : <b>'ll</b>.</p>
<p><s-en>The phone's ringing. — I'll answer it!</s-en> (décision immédiate)</p>
<p><s-en>I'll call you tomorrow, I promise.</s-en> (promesse)</p>
<p><s-en>I think it will be sunny.</s-en> (prédiction, opinion)</p>
<p>Négation : <b>won't</b> (= will not) : <s-en>I won't be late.</s-en></p>
<h2>Bonus : le présent continu pour les rendez-vous</h2>
<p>Pour un rendez-vous fixé (date, heure), on utilise souvent le présent continu : <s-en>I'm meeting Sarah at six.</s-en></p>
<div class="tip">Si tu hésites, <b>going to</b> marche dans la grande majorité des cas pour parler de tes projets. Et <b>I'll…</b> est parfait pour proposer ou promettre quelque chose.</div>
`,
  examples: [
    ["I'm going to learn English.", "Je vais apprendre l'anglais."],
    ["I'll help you.", "Je vais t'aider. (je m'en occupe)"],
    ["What are you going to do tonight?", "Qu'est-ce que tu fais ce soir ?"],
    ["It won't take long.", "Ça ne prendra pas longtemps."],
    ["See you tomorrow!", "À demain !"],
    ["Will you marry me?", "Veux-tu m'épouser ?"]
  ],
  quiz: [
    { q: "« Je vais voir un film ce soir » (c'est prévu) :", o: ["I'm going to see a film tonight.", "I go see a film tonight.", "I will to see a film tonight."], a: 0, ex: "Projet décidé → going to." },
    { q: "« On sonne ! — J'y vais ! » :", o: ["I'm going to go!", "I'll go!", "I go!"], a: 1, ex: "Décision prise à l'instant → I'll." },
    { q: "« Je ne serai pas en retard » :", o: ["I willn't be late.", "I won't be late.", "I don't will be late."], a: 1, ex: "will not → won't." },
    { q: "« Elle va commencer demain » :", o: ["She's going start tomorrow.", "She's going to start tomorrow.", "She going to start tomorrow."], a: 1, ex: "be + going to + verbe : il ne manque rien." }
  ]
},
{
  id: 14, level: "A2", icon: "map",
  title: "In, on, at : le temps et le lieu",
  subtitle: "Trois petits mots, une logique simple.",
  body: `
<p>Imagine un entonnoir : <b>in</b> pour le plus large, <b>on</b> pour le moyen, <b>at</b> pour le plus précis.</p>
<h2>Pour le temps</h2>
<table>
<tr><th>Mot</th><th>Usage</th><th>Exemples</th></tr>
<tr><td>in</td><td>mois, années, saisons, parties de la journée</td><td>in May, in 2025, in summer, in the morning</td></tr>
<tr><td>on</td><td>jours et dates</td><td>on Monday, on 3rd June, on my birthday</td></tr>
<tr><td>at</td><td>heures précises, moments</td><td>at 8 o'clock, at night, at the weekend (UK)</td></tr>
</table>
<p><s-en>I was born in 1994.</s-en> · <s-en>See you on Friday.</s-en> · <s-en>The film starts at nine.</s-en></p>
<h2>Pour le lieu</h2>
<table>
<tr><th>Mot</th><th>Usage</th><th>Exemples</th></tr>
<tr><td>in</td><td>à l'intérieur, villes, pays</td><td>in the box, in Paris, in France</td></tr>
<tr><td>on</td><td>sur une surface</td><td>on the table, on the wall, on the floor</td></tr>
<tr><td>at</td><td>un point, un lieu d'activité</td><td>at home, at work, at the station</td></tr>
</table>
<div class="warn">« À Paris » se dit <s-en>in Paris</s-en>, pas « at Paris ». Pour les villes et les pays, c'est toujours <b>in</b>.</div>
<div class="tip">Expressions figées à retenir : <s-en>at home</s-en>, <s-en>at work</s-en>, <s-en>at school</s-en>, <s-en>in bed</s-en>, <s-en>on the bus</s-en>, <s-en>on holiday</s-en>.</div>
`,
  examples: [
    ["I live in Lyon.", "J'habite à Lyon."],
    ["I'm at work.", "Je suis au travail."],
    ["The keys are on the table.", "Les clés sont sur la table."],
    ["My birthday is in July.", "Mon anniversaire est en juillet."],
    ["See you on Saturday.", "À samedi."],
    ["The meeting is at 10.", "La réunion est à 10 h."]
  ],
  quiz: [
    { q: "« J'habite à Londres » :", o: ["I live at London.", "I live in London.", "I live on London."], a: 1, ex: "Ville → in." },
    { q: "« Lundi » :", o: ["in Monday", "on Monday", "at Monday"], a: 1, ex: "Jours → on." },
    { q: "« À 7 heures » :", o: ["at 7 o'clock", "in 7 o'clock", "on 7 o'clock"], a: 0, ex: "Heure précise → at." },
    { q: "« En été » :", o: ["on summer", "at summer", "in summer"], a: 2, ex: "Saisons → in." },
    { q: "« Je suis à la maison » :", o: ["I'm in home.", "I'm at home.", "I'm on home."], a: 1, ex: "Expression figée : at home." }
  ]
}
];
