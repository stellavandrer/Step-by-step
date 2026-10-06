/* Leçons A2 (suite) : 15 à 22. */
window.LESSONS.push(
{
  id: 15, level: "A2", icon: "users-round",
  title: "Me, him, them… et mine, yours",
  subtitle: "Les pronoms compléments et les pronoms possessifs.",
  body: `
<h2>Le tableau complet</h2>
<table>
<tr><th>Sujet</th><th>Complément</th><th>Possessif + nom</th><th>Possessif seul</th></tr>
<tr><td>I</td><td>me</td><td>my bag</td><td>mine</td></tr>
<tr><td>you</td><td>you</td><td>your bag</td><td>yours</td></tr>
<tr><td>he</td><td>him</td><td>his bag</td><td>his</td></tr>
<tr><td>she</td><td>her</td><td>her bag</td><td>hers</td></tr>
<tr><td>it</td><td>it</td><td>its bag</td><td>—</td></tr>
<tr><td>we</td><td>us</td><td>our bag</td><td>ours</td></tr>
<tr><td>they</td><td>them</td><td>their bag</td><td>theirs</td></tr>
</table>
<h2>Les pronoms compléments</h2>
<p>Ils se placent <b>après le verbe</b> (et pas avant comme en français) : « je t'aime » → <s-en>I love you.</s-en> · « appelle-moi » → <s-en>Call me.</s-en></p>
<p>On les utilise aussi <b>après une préposition</b> : <s-en>with me</s-en>, <s-en>for her</s-en>, <s-en>between us</s-en>.</p>
<div class="tip">« Moi aussi ! » se dit <s-en>Me too!</s-en> À l'oral, on répond aussi <s-en>Not me!</s-en> (pas moi).</div>
<h2>Les pronoms possessifs : mine, yours…</h2>
<p>Ils <b>remplacent</b> le possessif + le nom, pour éviter de répéter : <s-en>Is this your phone? — No, it's not mine. It's hers.</s-en></p>
<div class="warn">Jamais d'article devant : « le mien » = <b>mine</b>, pas « the mine ». Et pas d'apostrophe : <b>yours</b>, <b>hers</b>, <b>ours</b> (jamais « your's »).</div>
<p>Pour demander à qui appartient quelque chose : <s-en>Whose is this?</s-en> ou <s-en>Whose bag is this?</s-en></p>
`,
  examples: [
    ["Can you help me?", "Tu peux m'aider ?"],
    ["I saw him yesterday.", "Je l'ai vu hier."],
    ["Tell them the truth.", "Dis-leur la vérité."],
    ["This coffee is for you.", "Ce café est pour toi."],
    ["Is this pen yours? — Yes, it's mine.", "Ce stylo est à toi ? — Oui, c'est le mien."],
    ["Their house is bigger than ours.", "Leur maison est plus grande que la nôtre."]
  ],
  quiz: [
    { q: "« Je la connais » :", o: ["I her know.", "I know her.", "I know she."], a: 1, ex: "Le pronom complément se place après le verbe : I know her." },
    { q: "« Ce sac est à moi » :", o: ["This bag is my.", "This bag is mine.", "This bag is the mine."], a: 1, ex: "Possessif seul : mine, sans article." },
    { q: "« Viens avec nous ! » :", o: ["Come with we!", "Come with us!", "Come with our!"], a: 1, ex: "Après une préposition → pronom complément : us." },
    { q: "« À qui est cette voiture ? » :", o: ["Who is this car?", "Whose car is this?", "Who's car is this?"], a: 1, ex: "Whose = à qui. (Who's = who is.)" },
    { q: "« La leur est rouge » :", o: ["Theirs is red.", "Their is red.", "The theirs is red."], a: 0, ex: "Possessif seul : theirs." }
  ]
},
{
  id: 16, level: "A2", icon: "ruler",
  title: "Comparer : bigger, the biggest, more expensive",
  subtitle: "Comparatifs et superlatifs.",
  body: `
<h2>Adjectifs courts (1 syllabe) : -er / the -est</h2>
<table>
<tr><th>Adjectif</th><th>Comparatif</th><th>Superlatif</th></tr>
<tr><td>cheap</td><td>cheaper (than)</td><td>the cheapest</td></tr>
<tr><td>big</td><td>bigger</td><td>the biggest</td></tr>
<tr><td>nice</td><td>nicer</td><td>the nicest</td></tr>
<tr><td>easy</td><td>easier</td><td>the easiest</td></tr>
</table>
<ul>
<li>Consonne-voyelle-consonne → on double : <s-en>big → bigger</s-en>, <s-en>hot → hotter</s-en>.</li>
<li>Adjectifs en <b>-y</b> (même de 2 syllabes) → <b>-ier</b> : <s-en>happy → happier</s-en>, <s-en>busy → the busiest</s-en>.</li>
</ul>
<h2>Adjectifs longs : more / the most</h2>
<p><s-en>expensive → more expensive → the most expensive</s-en></p>
<p><s-en>interesting → more interesting → the most interesting</s-en></p>
<h2>Les irréguliers</h2>
<table>
<tr><th>Adjectif</th><th>Comparatif</th><th>Superlatif</th></tr>
<tr><td>good</td><td>better</td><td>the best</td></tr>
<tr><td>bad</td><td>worse</td><td>the worst</td></tr>
<tr><td>far</td><td>further / farther</td><td>the furthest</td></tr>
</table>
<div class="warn">Jamais « more better » ni « more cheaper » : c'est l'un <b>ou</b> l'autre. Et « que » se dit <b>than</b> (pas « that ») : <s-en>She's taller than me.</s-en></div>
<h2>L'égalité : as … as</h2>
<p><s-en>He's as tall as his father.</s-en> (aussi grand que) · <s-en>It's not as hard as I thought.</s-en> (pas aussi difficile que)</p>
<div class="tip">Pour renforcer : <s-en>much better</s-en> (bien mieux), <s-en>a bit cheaper</s-en> (un peu moins cher), <s-en>by far the best</s-en> (de loin le meilleur).</div>
`,
  examples: [
    ["London is bigger than Paris.", "Londres est plus grande que Paris."],
    ["This one is cheaper.", "Celui-ci est moins cher."],
    ["It's the best film of the year.", "C'est le meilleur film de l'année."],
    ["English is easier than Chinese.", "L'anglais est plus facile que le chinois."],
    ["My English is getting better.", "Mon anglais s'améliore."],
    ["It's not as cold as yesterday.", "Il ne fait pas aussi froid qu'hier."]
  ],
  quiz: [
    { q: "« Plus cher que » :", o: ["expensiver than", "more expensive than", "more expensive that"], a: 1, ex: "Adjectif long → more … than." },
    { q: "Comparatif de « good » :", o: ["gooder", "more good", "better"], a: 2, ex: "Irrégulier : good → better → the best." },
    { q: "« Le jour le plus chaud » :", o: ["the hotest day", "the hottest day", "the most hot day"], a: 1, ex: "hot → on double le t : the hottest." },
    { q: "« Elle est plus heureuse » :", o: ["She's happier.", "She's more happy.", "She's more happier."], a: 0, ex: "Adjectif en -y → -ier." },
    { q: "« Aussi grand que moi » :", o: ["as tall than me", "as tall as me", "so tall like me"], a: 1, ex: "Égalité : as … as." }
  ]
},
{
  id: 17, level: "A2", icon: "calculator",
  title: "Much, many, a lot of, a few, a little",
  subtitle: "Exprimer les quantités (et le piège des indénombrables).",
  body: `
<h2>Dénombrable ou indénombrable ?</h2>
<p><b>Dénombrable</b> : on peut compter (one apple, two apples). <b>Indénombrable</b> : on ne peut pas (water, money, time). Les indénombrables n'ont <b>pas de pluriel</b> et pas de « a ».</p>
<table>
<tr><th></th><th>Dénombrable</th><th>Indénombrable</th></tr>
<tr><td>beaucoup</td><td>many / a lot of</td><td>much / a lot of</td></tr>
<tr><td>quelques / un peu</td><td>a few</td><td>a little</td></tr>
<tr><td>peu (pas assez)</td><td>few</td><td>little</td></tr>
<tr><td>combien ?</td><td>how many?</td><td>how much?</td></tr>
</table>
<div class="tip">Dans une phrase affirmative, <b>a lot of</b> est plus naturel : <s-en>I have a lot of work.</s-en> On garde <b>much</b> et <b>many</b> surtout pour les questions et les négations : <s-en>I don't have much time.</s-en></div>
<h2>Le grand piège : indénombrables en anglais, pas en français</h2>
<table>
<tr><th>Anglais</th><th>Français</th></tr>
<tr><td>information</td><td>des informations</td></tr>
<tr><td>advice</td><td>des conseils</td></tr>
<tr><td>news</td><td>des nouvelles, les infos</td></tr>
<tr><td>furniture</td><td>des meubles</td></tr>
<tr><td>luggage</td><td>des bagages</td></tr>
<tr><td>hair</td><td>les cheveux</td></tr>
<tr><td>homework</td><td>les devoirs</td></tr>
</table>
<p>On dit donc <s-en>some advice</s-en> (jamais « advices »), <s-en>The news is good.</s-en> (verbe au singulier), <s-en>She has long hair.</s-en></p>
<p>Pour en compter un : <s-en>a piece of advice</s-en>, <s-en>a piece of information</s-en>, <s-en>a piece of furniture</s-en>.</p>
`,
  examples: [
    ["How many people are coming?", "Combien de personnes viennent ?"],
    ["I don't have much money.", "Je n'ai pas beaucoup d'argent."],
    ["There are a lot of tourists.", "Il y a beaucoup de touristes."],
    ["Can I give you some advice?", "Je peux te donner un conseil ?"],
    ["I speak a little English.", "Je parle un peu anglais."],
    ["I have a few questions.", "J'ai quelques questions."]
  ],
  quiz: [
    { q: "« Combien d'argent ? » :", o: ["How many money?", "How much money?", "How much moneys?"], a: 1, ex: "Money est indénombrable → how much." },
    { q: "« Des conseils » :", o: ["some advices", "some advice", "an advice"], a: 1, ex: "Advice est indénombrable : pas de -s, pas de « an »." },
    { q: "« Quelques amis » :", o: ["a little friends", "a few friends", "a few of friend"], a: 1, ex: "Friends se compte → a few." },
    { q: "« Les nouvelles sont bonnes » :", o: ["The news are good.", "The news is good.", "The new is good."], a: 1, ex: "News est indénombrable → verbe au singulier." },
    { q: "« Elle a les cheveux longs » :", o: ["She has long hairs.", "She has long hair.", "She has the long hair."], a: 1, ex: "Hair (les cheveux) est indénombrable." }
  ]
},
{
  id: 18, level: "A2", icon: "pin",
  title: "Must, have to, should",
  subtitle: "Obligation, interdiction et conseil.",
  body: `
<h2>Have to : l'obligation (règles, contraintes)</h2>
<p><s-en>I have to work on Saturday.</s-en> · <s-en>She has to wear a uniform.</s-en></p>
<p>Il se conjugue comme un verbe normal : <s-en>Do you have to go?</s-en> · <s-en>I had to wait.</s-en> (passé)</p>
<h2>Must : l'obligation ressentie, ou très forte</h2>
<p><s-en>I must call my mum.</s-en> (je sens que je dois le faire) · <s-en>You must see this film!</s-en> (recommandation enthousiaste)</p>
<p>Comme can, <b>must</b> ne prend ni -s ni « to » : <s-en>He must go.</s-en></p>
<h2>Le piège : mustn't ≠ don't have to</h2>
<table>
<tr><th>Anglais</th><th>Sens</th></tr>
<tr><td>You mustn't smoke here.</td><td>Interdiction : tu ne dois pas.</td></tr>
<tr><td>You don't have to come.</td><td>Absence d'obligation : tu n'as pas besoin de venir.</td></tr>
</table>
<div class="warn">« Tu ne dois pas » (interdit) = <b>mustn't</b>. « Tu n'as pas besoin de » = <b>don't have to</b>. Les confondre change complètement le sens !</div>
<h2>Should : le conseil</h2>
<p><b>Should</b> = « devrais », « devrait ». <s-en>You should rest.</s-en> · <s-en>You shouldn't eat so much sugar.</s-en> · <s-en>What should I do?</s-en></p>
<div class="tip">Pour donner un conseil amical : <s-en>If I were you, I'd…</s-en> (si j'étais toi, je…). Tu le verras en détail au niveau B1.</div>
`,
  examples: [
    ["I have to get up early tomorrow.", "Je dois me lever tôt demain."],
    ["You mustn't touch that!", "Tu ne dois pas toucher à ça !"],
    ["You don't have to pay, it's free.", "Tu n'as pas besoin de payer, c'est gratuit."],
    ["You should see a doctor.", "Tu devrais voir un médecin."],
    ["We had to wait an hour.", "Nous avons dû attendre une heure."],
    ["What should I wear?", "Qu'est-ce que je devrais porter ?"]
  ],
  quiz: [
    { q: "« Tu n'as pas besoin de venir » :", o: ["You mustn't come.", "You don't have to come.", "You shouldn't come."], a: 1, ex: "Absence d'obligation → don't have to." },
    { q: "« Il est interdit de courir ici » :", o: ["You mustn't run here.", "You don't have to run here."], a: 0, ex: "Interdiction → mustn't." },
    { q: "« Tu devrais te reposer » :", o: ["You must to rest.", "You should rest.", "You should to rest."], a: 1, ex: "Conseil → should + verbe, sans « to »." },
    { q: "« J'ai dû partir » (passé) :", o: ["I must left.", "I had to leave.", "I musted leave."], a: 1, ex: "Must n'a pas de passé : on utilise had to." },
    { q: "« Elle doit travailler samedi » :", o: ["She has to work on Saturday.", "She have to work on Saturday.", "She has work on Saturday."], a: 0, ex: "She → has to." }
  ]
},
{
  id: 19, level: "A2", icon: "film",
  title: "Le passé continu : I was doing",
  subtitle: "Planter le décor d'une histoire.",
  body: `
<p>Le <b>passé continu</b> décrit une action <b>en cours</b> à un moment du passé. Il correspond souvent à l'imparfait français, ou à « j'étais en train de ».</p>
<h2>La forme : was / were + -ing</h2>
<p><s-en>I was sleeping.</s-en> · <s-en>They were watching TV.</s-en> · <s-en>What were you doing at 8 o'clock?</s-en></p>
<h2>L'usage star : une action interrompue</h2>
<p>Passé continu = le décor (l'action longue). Prétérit = l'événement qui arrive (l'action courte).</p>
<p><s-en>I was cooking when the phone rang.</s-en> (je cuisinais quand le téléphone a sonné)</p>
<p><s-en>While we were walking, it started to rain.</s-en></p>
<div class="tip"><b>when</b> + action courte (prétérit), <b>while</b> + action longue (passé continu). Ce n'est pas une règle absolue, mais c'est un excellent repère.</div>
<h2>Deux actions en même temps</h2>
<p><s-en>I was reading while he was cooking.</s-en></p>
<div class="warn">Pour une habitude passée, on n'utilise <b>pas</b> le passé continu : « Quand j'étais petite, j'allais à la plage » → <s-en>When I was little, I went to the beach.</s-en> (ou <s-en>I used to go</s-en>, que tu verras en B1).</div>
`,
  examples: [
    ["I was sleeping when you called.", "Je dormais quand tu as appelé."],
    ["What were you doing last night?", "Que faisais-tu hier soir ?"],
    ["It was raining all day.", "Il a plu toute la journée."],
    ["She was working while I was shopping.", "Elle travaillait pendant que je faisais les courses."],
    ["We were having dinner when the lights went out.", "Nous dînions quand les lumières se sont éteintes."]
  ],
  quiz: [
    { q: "« Je lisais quand il est arrivé » :", o: ["I read when he was arriving.", "I was reading when he arrived.", "I was reading when he was arrive."], a: 1, ex: "Action longue = passé continu, événement = prétérit." },
    { q: "Complète : « They ___ football when it started to rain. »", o: ["were playing", "was playing", "played"], a: 0, ex: "They → were + -ing." },
    { q: "« Que faisais-tu à 10 h ? »", o: ["What did you at 10?", "What were you doing at 10?", "What was you doing at 10?"], a: 1, ex: "Question : were + sujet + -ing." },
    { q: "« Quand j'étais enfant, je jouais du piano » (habitude) :", o: ["When I was a child, I was playing the piano.", "When I was a child, I played the piano."], a: 1, ex: "Habitude passée → prétérit (ou used to), pas le passé continu." }
  ]
},
{
  id: 20, level: "A2", icon: "globe",
  title: "Le present perfect (1) : Have you ever…?",
  subtitle: "Parler de ses expériences.",
  body: `
<p>Le <b>present perfect</b> relie le passé au présent. On l'utilise ici pour parler de ses <b>expériences de vie</b>, sans dire quand.</p>
<h2>La forme : have / has + participe passé</h2>
<p><s-en>I have visited London.</s-en> (I've visited) · <s-en>She has seen this film.</s-en> (she's seen)</p>
<p>Verbes réguliers : participe = -ed (worked, visited). Verbes irréguliers : la 3ᵉ colonne à apprendre.</p>
<table>
<tr><th>Verbe</th><th>Prétérit</th><th>Participe passé</th></tr>
<tr><td>be</td><td>was / were</td><td>been</td></tr>
<tr><td>go</td><td>went</td><td>gone</td></tr>
<tr><td>do</td><td>did</td><td>done</td></tr>
<tr><td>see</td><td>saw</td><td>seen</td></tr>
<tr><td>eat</td><td>ate</td><td>eaten</td></tr>
<tr><td>take</td><td>took</td><td>taken</td></tr>
<tr><td>write</td><td>wrote</td><td>written</td></tr>
<tr><td>speak</td><td>spoke</td><td>spoken</td></tr>
<tr><td>have</td><td>had</td><td>had</td></tr>
<tr><td>make</td><td>made</td><td>made</td></tr>
</table>
<h2>Ever et never</h2>
<p><s-en>Have you ever been to New York?</s-en> (As-tu déjà visité New York ?)</p>
<p><s-en>I've never eaten sushi.</s-en> (Je n'ai jamais mangé de sushis.)</p>
<div class="tip"><b>been</b> ou <b>gone</b> ? <s-en>She has been to Spain.</s-en> = elle y est allée (et revenue). <s-en>She has gone to Spain.</s-en> = elle y est partie (elle y est encore).</div>
<h2>Le piège : un moment précis → prétérit</h2>
<p>Dès qu'on dit <b>quand</b> (yesterday, in 2019, last week), on passe au prétérit :</p>
<p><s-en>I've been to London.</s-en> mais <s-en>I went to London in 2019.</s-en></p>
<div class="warn">Jamais « I have been to London last year ». « Last year » est un moment précis → <s-en>I went to London last year.</s-en></div>
`,
  examples: [
    ["Have you ever been to England?", "As-tu déjà visité l'Angleterre ?"],
    ["I've never seen the sea.", "Je n'ai jamais vu la mer."],
    ["She's visited twenty countries.", "Elle a visité vingt pays."],
    ["We've met before.", "Nous nous sommes déjà rencontrés."],
    ["I've lost my keys!", "J'ai perdu mes clés !"],
    ["Have you seen my phone?", "Tu as vu mon téléphone ?"]
  ],
  quiz: [
    { q: "« As-tu déjà mangé des escargots ? » :", o: ["Did you ever eat snails?", "Have you ever eaten snails?", "Have you ever ate snails?"], a: 1, ex: "Expérience → have + participe passé (eaten)." },
    { q: "« Je suis allée à Rome en 2020 » :", o: ["I've been to Rome in 2020.", "I went to Rome in 2020."], a: 1, ex: "Date précise → prétérit." },
    { q: "Participe passé de « write » :", o: ["wrote", "written", "writed"], a: 1, ex: "write → wrote → written." },
    { q: "« Il n'a jamais pris l'avion » :", o: ["He has never taken a plane.", "He never has took a plane.", "He hasn't never taken a plane."], a: 0, ex: "has + never + participe passé." },
    { q: "Tom est parti en Australie et il y est encore :", o: ["He has been to Australia.", "He has gone to Australia."], a: 1, ex: "Gone = il y est parti (et il y est encore)." }
  ]
},
{
  id: 21, level: "A2", icon: "link",
  title: "Verbe + -ing ou verbe + to",
  subtitle: "I enjoy reading, I want to read.",
  body: `
<p>Quand deux verbes se suivent, le second prend soit <b>-ing</b>, soit <b>to</b>. Ça dépend du premier verbe.</p>
<h2>Verbes suivis de -ing</h2>
<p><b>enjoy, finish, mind, avoid, keep, practise, suggest, can't stand</b></p>
<p><s-en>I enjoy reading.</s-en> · <s-en>She finished working at six.</s-en> · <s-en>Do you mind waiting?</s-en></p>
<h2>Verbes suivis de to</h2>
<p><b>want, need, decide, hope, plan, learn, forget, promise, would like</b></p>
<p><s-en>I want to travel.</s-en> · <s-en>We decided to stay.</s-en> · <s-en>I'd like to order, please.</s-en></p>
<h2>Les deux sont possibles</h2>
<p><b>like, love, hate, start, begin, continue</b> : <s-en>I love dancing.</s-en> = <s-en>I love to dance.</s-en></p>
<div class="warn"><b>would like</b> est toujours suivi de <b>to</b> : <s-en>I'd like to go</s-en> (je voudrais y aller), mais <s-en>I like going</s-en> (j'aime y aller, en général).</div>
<h2>Après une préposition : toujours -ing</h2>
<p><s-en>I'm interested in learning English.</s-en> · <s-en>She's good at cooking.</s-en> · <s-en>Before leaving, close the windows.</s-en> · <s-en>Thank you for helping me.</s-en></p>
<div class="tip">Astuce : là où le français met un infinitif après une préposition (« avant de partir », « merci de m'aider »), l'anglais met <b>-ing</b>.</div>
`,
  examples: [
    ["I enjoy cooking for friends.", "J'aime cuisiner pour mes amis."],
    ["I want to improve my English.", "Je veux améliorer mon anglais."],
    ["Would you like to come?", "Voudrais-tu venir ?"],
    ["She's good at drawing.", "Elle dessine bien."],
    ["I'm looking forward to seeing you.", "J'ai hâte de te voir."],
    ["Stop worrying!", "Arrête de t'inquiéter !"]
  ],
  quiz: [
    { q: "« J'aime lire » (en général) :", o: ["I enjoy to read.", "I enjoy reading.", "I enjoy read."], a: 1, ex: "Enjoy + -ing." },
    { q: "« Nous avons décidé de partir » :", o: ["We decided leaving.", "We decided to leave.", "We decided leave."], a: 1, ex: "Decide + to." },
    { q: "« Merci de m'avoir aidée » :", o: ["Thanks for help me.", "Thanks for helping me.", "Thanks to help me."], a: 1, ex: "Après une préposition (for) → -ing." },
    { q: "« Je voudrais commander » :", o: ["I'd like ordering.", "I'd like to order.", "I like to order."], a: 1, ex: "Would like + to." },
    { q: "« Ça te dérange d'attendre ? » :", o: ["Do you mind to wait?", "Do you mind waiting?"], a: 1, ex: "Mind + -ing." }
  ]
},
{
  id: 22, level: "A2", icon: "compass",
  title: "Les adverbes et l'ordre des mots",
  subtitle: "Bien parler… et bien placer « well ».",
  body: `
<h2>Former un adverbe : + -ly</h2>
<p>L'adjectif décrit une chose, l'adverbe décrit une <b>action</b>.</p>
<p><s-en>She's a careful driver.</s-en> → <s-en>She drives carefully.</s-en></p>
<p><s-en>quick → quickly</s-en>, <s-en>slow → slowly</s-en>, <s-en>easy → easily</s-en>, <s-en>happy → happily</s-en></p>
<h2>Les irréguliers</h2>
<ul>
<li><s-en>good → well</s-en> : <s-en>She speaks English well.</s-en></li>
<li><s-en>fast → fast</s-en>, <s-en>hard → hard</s-en>, <s-en>late → late</s-en>, <s-en>early → early</s-en></li>
</ul>
<div class="warn"><b>hardly</b> ne veut pas dire « durement » mais « à peine » ! <s-en>I work hard.</s-en> (je travaille dur) ≠ <s-en>I hardly work.</s-en> (je travaille à peine).</div>
<h2>La règle d'or de l'ordre des mots</h2>
<p>En anglais, on <b>ne sépare jamais le verbe de son complément</b> : Sujet + Verbe + Complément + (manière) + (lieu) + (temps).</p>
<table>
<tr><th>Correct</th><th>Faux</th></tr>
<tr><td>I speak English well.</td><td>I speak well English.</td></tr>
<tr><td>I like coffee very much.</td><td>I like very much coffee.</td></tr>
<tr><td>I went to the cinema yesterday.</td><td>I went yesterday to the cinema.</td></tr>
</table>
<div class="tip">Ordre de fin de phrase : <b>comment → où → quand</b>. <s-en>She sang beautifully at the concert last night.</s-en></div>
`,
  examples: [
    ["Please speak slowly.", "Parlez lentement, s'il vous plaît."],
    ["You speak English very well!", "Tu parles très bien anglais !"],
    ["He works very hard.", "Il travaille très dur."],
    ["I really like this song.", "J'aime vraiment cette chanson."],
    ["I can hardly hear you.", "Je t'entends à peine."],
    ["We arrived at the hotel late.", "Nous sommes arrivés tard à l'hôtel."]
  ],
  quiz: [
    { q: "« Elle parle bien anglais » :", o: ["She speaks well English.", "She speaks English well.", "She speaks English good."], a: 1, ex: "On ne sépare pas le verbe du complément, et good → well." },
    { q: "Adverbe de « easy » :", o: ["easyly", "easily", "easy"], a: 1, ex: "-y → -ily." },
    { q: "« J'aime beaucoup le thé » :", o: ["I like very much tea.", "I like tea very much.", "I very much tea like."], a: 1, ex: "Very much se place après le complément." },
    { q: "« Il travaille dur » :", o: ["He works hardly.", "He works hard."], a: 1, ex: "Hard = dur. Hardly = à peine." }
  ]
}
);
