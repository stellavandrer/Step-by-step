/* Leçons ajoutées après la comparaison avec les référentiels de grammaire (2026-10-03) : A1 et A2.
   Points absents du cours ou seulement effleurés : have got, mots interrogatifs, something / anyone,
   prépositions de mouvement, but (to / for), présent simple ou continu et verbes d'état, another / the other / one.
   Écrites en anglais avec la version française (body_fr), comme les leçons C2. */
window.LESSONS.push(
{
  id: 81, after: 7, level: "A1", icon: "gift",
  title: "Have got: what you have", title_fr: "Have got : ce que l'on a",
  subtitle: "I've got a sister. Have you got a pen?", subtitle_fr: "J'ai une sœur. Tu as un stylo ?",
  body: `
<p>In British English, <b>have got</b> is very common to talk about possessions, family, illnesses and appearance. It means the same as <b>have</b>.</p>
<h2>The forms</h2>
<table>
<tr><th>Long form</th><th>Short form</th></tr>
<tr><td>I / you / we / they have got</td><td>I've got · you've got · we've got · they've got</td></tr>
<tr><td>he / she / it has got</td><td>he's got · she's got · it's got</td></tr>
</table>
<p><s-en>I've got two brothers.</s-en> · <s-en>She's got blue eyes.</s-en> · <s-en>We've got a small garden.</s-en></p>
<h2>Negatives and questions: no do</h2>
<p><s-en>I haven't got a car.</s-en> · <s-en>He hasn't got time.</s-en></p>
<p><s-en>Have you got a pen?</s-en> · <s-en>Yes, I have.</s-en> / <s-en>No, I haven't.</s-en></p>
<p><s-en>Has she got any children?</s-en> · <s-en>Yes, she has.</s-en></p>
<h2>Have got or have?</h2>
<p>Both are correct: <s-en>Have you got a pen?</s-en> = <s-en>Do you have a pen?</s-en> (more American). But don't mix the two: never “Do you have got…?”.</p>
<div class="warn"><b>'s</b> can mean <b>is</b> or <b>has</b>: <i>she's got</i> = she has got; <i>she's tired</i> = she is tired.</div>
<h2>Only in the present</h2>
<p>For the past, use <b>had</b>: <s-en>I had a cat when I was a child.</s-en> And for actions (breakfast, a shower, a good time), always use <b>have</b>: <s-en>I have breakfast at eight.</s-en></p>
<div class="tip">Illnesses: <s-en>I've got a cold.</s-en> · <s-en>She's got a headache.</s-en></div>
`,
  body_fr: `
<p>En anglais britannique, <b>have got</b> est très courant pour parler de ce qu'on possède, de la famille, des maladies et de l'apparence. Il veut dire la même chose que <b>have</b>.</p>
<h2>Les formes</h2>
<table>
<tr><th>Forme longue</th><th>Forme courte</th></tr>
<tr><td>I / you / we / they have got</td><td>I've got · you've got · we've got · they've got</td></tr>
<tr><td>he / she / it has got</td><td>he's got · she's got · it's got</td></tr>
</table>
<p><s-en>I've got two brothers.</s-en> (J'ai deux frères.) · <s-en>She's got blue eyes.</s-en> (Elle a les yeux bleus.) · <s-en>We've got a small garden.</s-en></p>
<h2>Négation et question : pas de do</h2>
<p><s-en>I haven't got a car.</s-en> (Je n'ai pas de voiture.) · <s-en>He hasn't got time.</s-en></p>
<p><s-en>Have you got a pen?</s-en> · <s-en>Yes, I have.</s-en> / <s-en>No, I haven't.</s-en></p>
<p><s-en>Has she got any children?</s-en> · <s-en>Yes, she has.</s-en></p>
<h2>Have got ou have ?</h2>
<p>Les deux sont corrects : <s-en>Have you got a pen?</s-en> = <s-en>Do you have a pen?</s-en> (plus américain). Mais on ne mélange pas : jamais « Do you have got…? ».</p>
<div class="warn"><b>'s</b> peut vouloir dire <b>is</b> ou <b>has</b> : <i>she's got</i> = she has got ; <i>she's tired</i> = she is tired.</div>
<h2>Seulement au présent</h2>
<p>Au passé, on utilise <b>had</b> : <s-en>I had a cat when I was a child.</s-en> (J'avais un chat quand j'étais petite.) Et pour les actions (petit-déjeuner, douche, bon moment), toujours <b>have</b> : <s-en>I have breakfast at eight.</s-en></p>
<div class="tip">Les maladies : <s-en>I've got a cold.</s-en> (J'ai un rhume.) · <s-en>She's got a headache.</s-en> (Elle a mal à la tête.)</div>
`,
  examples: [
    ["I've got two sisters and a brother.", "J'ai deux sœurs et un frère."],
    ["Have you got a minute?", "Tu as une minute ?"],
    ["She's got long dark hair.", "Elle a les cheveux longs et bruns."],
    ["We haven't got any milk.", "On n'a pas de lait."],
    ["I've got a terrible headache.", "J'ai un mal de tête terrible."]
  ],
  quiz: [
    { q: "Translate: « Il a les yeux bleus. »", q_fr: "Traduis : « Il a les yeux bleus. »", o: ["He's got blue eyes.", "He has got the blue eyes.", "He is got blue eyes."], a: 0, ex: "have got + noun, and no “the” before parts of the body.", ex_fr: "have got + nom, et pas de « the » devant les parties du corps." },
    { q: "Complete: “___ you got a car?”", q_fr: "Complète : « ___ you got a car? »", o: ["Have", "Do", "Are"], a: 0, ex: "Questions with have got: Have you got…?", ex_fr: "Question avec have got : Have you got… ?" },
    { q: "Translate: « Je n'ai pas de voiture. »", q_fr: "Traduis : « Je n'ai pas de voiture. »", o: ["I haven't got a car.", "I don't have got a car.", "I haven't a car got."], a: 0, ex: "Negative: haven't got. Don't mix do and have got.", ex_fr: "Négation : haven't got. On ne mélange pas do et have got." },
    { q: "Which is correct?", q_fr: "Quelle phrase est correcte ?", o: ["I have breakfast at 8.", "I've got breakfast at 8."], a: 0, ex: "For actions (breakfast, a shower), use have, not have got.", ex_fr: "Pour une action (petit-déjeuner, douche), on dit have, pas have got." },
    { q: "Translate: « J'avais un chien quand j'étais petite. »", q_fr: "Traduis : « J'avais un chien quand j'étais petite. »", o: ["I had a dog when I was little.", "I had got a dog when I was little.", "I've got a dog when I was little."], a: 0, ex: "Have got only exists in the present. In the past: had.", ex_fr: "Have got n'existe qu'au présent. Au passé : had." }
  ]
},
{
  id: 82, after: 6, level: "A1", icon: "circle-help",
  title: "Question words: what, where, who, how much…", title_fr: "Les mots interrogatifs : what, where, who, how much…",
  subtitle: "Ask for information.", subtitle_fr: "Poser des questions pour s'informer.",
  body: `
<table>
<tr><th>Word</th><th>Example</th></tr>
<tr><td>what</td><td>What's your name? · What do you do?</td></tr>
<tr><td>where</td><td>Where do you live?</td></tr>
<tr><td>when</td><td>When is your birthday?</td></tr>
<tr><td>who</td><td>Who is that man?</td></tr>
<tr><td>why (answer: because…)</td><td>Why are you late? Because I missed the bus.</td></tr>
<tr><td>which (a limited choice)</td><td>Which bus goes to the station?</td></tr>
<tr><td>whose</td><td>Whose bag is this?</td></tr>
<tr><td>how</td><td>How are you? · How do you spell it?</td></tr>
</table>
<h2>How + another word</h2>
<table>
<tr><th>Question</th><th>Asks about</th></tr>
<tr><td>how much</td><td>a price, or something you can't count: How much is it? · How much time have we got?</td></tr>
<tr><td>how many</td><td>things you can count: How many people are coming?</td></tr>
<tr><td>how old</td><td>age: How old are you?</td></tr>
<tr><td>how often</td><td>frequency: How often do you go swimming?</td></tr>
<tr><td>how long</td><td>duration: How long does it take?</td></tr>
<tr><td>how far</td><td>distance: How far is the station?</td></tr>
</table>
<h2>Word order</h2>
<p>Question word + <b>do / does / did</b> or <b>be</b> + subject + verb: <s-en>Where do you work?</s-en> · <s-en>What does she want?</s-en> · <s-en>Where is the bank?</s-en></p>
<p>What + noun: <s-en>What time is it?</s-en> · <s-en>What colour is your car?</s-en> · <s-en>What kind of music do you like?</s-en></p>
<div class="warn">Three French traps: «&nbsp;Quel âge as-tu ?&nbsp;» = <s-en>How old are you?</s-en> (with be). «&nbsp;Comment tu t'appelles ?&nbsp;» = <s-en>What's your name?</s-en> «&nbsp;Il est comment ?&nbsp;» (his personality) = <s-en>What's he like?</s-en></div>
`,
  body_fr: `
<table>
<tr><th>Mot</th><th>Exemple</th></tr>
<tr><td>what = que, quoi, quel</td><td>What's your name? · What do you do? (Que fais-tu dans la vie ?)</td></tr>
<tr><td>where = où</td><td>Where do you live?</td></tr>
<tr><td>when = quand</td><td>When is your birthday?</td></tr>
<tr><td>who = qui</td><td>Who is that man?</td></tr>
<tr><td>why = pourquoi (réponse : because…)</td><td>Why are you late? Because I missed the bus.</td></tr>
<tr><td>which = lequel, quel (choix limité)</td><td>Which bus goes to the station?</td></tr>
<tr><td>whose = à qui</td><td>Whose bag is this?</td></tr>
<tr><td>how = comment</td><td>How are you? · How do you spell it?</td></tr>
</table>
<h2>How + un autre mot</h2>
<table>
<tr><th>Question</th><th>Pour demander</th></tr>
<tr><td>how much</td><td>un prix, ou une quantité qu'on ne compte pas : How much is it? · How much time have we got?</td></tr>
<tr><td>how many</td><td>ce qu'on compte : How many people are coming?</td></tr>
<tr><td>how old</td><td>l'âge : How old are you?</td></tr>
<tr><td>how often</td><td>la fréquence : How often do you go swimming?</td></tr>
<tr><td>how long</td><td>la durée : How long does it take?</td></tr>
<tr><td>how far</td><td>la distance : How far is the station?</td></tr>
</table>
<h2>L'ordre des mots</h2>
<p>Mot interrogatif + <b>do / does / did</b> ou <b>be</b> + sujet + verbe : <s-en>Where do you work?</s-en> · <s-en>What does she want?</s-en> · <s-en>Where is the bank?</s-en></p>
<p>What + nom : <s-en>What time is it?</s-en> (Quelle heure est-il ?) · <s-en>What colour is your car?</s-en> · <s-en>What kind of music do you like?</s-en></p>
<div class="warn">Trois pièges pour les francophones : « Quel âge as-tu ? » = <s-en>How old are you?</s-en> (avec be). « Comment tu t'appelles ? » = <s-en>What's your name?</s-en> « Il est comment ? » (son caractère) = <s-en>What's he like?</s-en></div>
`,
  examples: [
    ["Where do you live?", "Où habites-tu ?"],
    ["What time does the film start?", "À quelle heure commence le film ?"],
    ["How often do you go to the gym?", "Tu vas à la salle de sport tous les combien ?"],
    ["Whose bag is this?", "À qui est ce sac ?"],
    ["How long does it take?", "Ça prend combien de temps ?"]
  ],
  quiz: [
    { q: "Translate: « Quel âge as-tu ? »", q_fr: "Traduis : « Quel âge as-tu ? »", o: ["How old are you?", "What age have you?", "How old have you?"], a: 0, ex: "Age uses be: How old are you?", ex_fr: "L'âge se dit avec be : How old are you?" },
    { q: "Translate: « Comment tu t'appelles ? »", q_fr: "Traduis : « Comment tu t'appelles ? »", o: ["What's your name?", "How do you call yourself?", "How are you called?"], a: 0, ex: "Your name: What's your name?", ex_fr: "Le prénom : What's your name?" },
    { q: "Complete: “___ many people are coming?”", q_fr: "Complète : « ___ many people are coming? »", o: ["How", "What", "Which"], a: 0, ex: "How many + things you can count.", ex_fr: "How many + ce qu'on compte." },
    { q: "Complete: “___ do you go to the cinema? Once a month.”", q_fr: "Complète : « ___ do you go to the cinema? Once a month. »", o: ["How often", "How long", "How much"], a: 0, ex: "Once a month is a frequency: how often.", ex_fr: "Une fois par mois, c'est une fréquence : how often." },
    { q: "Complete: “___ phone is this? It's mine.”", q_fr: "Complète : « ___ phone is this? It's mine. »", o: ["Whose", "Who", "Which"], a: 0, ex: "To ask who something belongs to: whose.", ex_fr: "Pour demander à qui appartient quelque chose : whose." }
  ]
},
{
  id: 83, after: 17, level: "A2", icon: "search",
  title: "Something, anyone, nowhere: indefinite pronouns", title_fr: "Something, anyone, nowhere : les pronoms indéfinis",
  subtitle: "Someone, nothing, everywhere…", subtitle_fr: "Quelqu'un, rien, partout…",
  body: `
<table>
<tr><th></th><th>some-</th><th>any-</th><th>no-</th><th>every-</th></tr>
<tr><td>things</td><td>something</td><td>anything</td><td>nothing</td><td>everything</td></tr>
<tr><td>people</td><td>someone / somebody</td><td>anyone / anybody</td><td>no one / nobody</td><td>everyone / everybody</td></tr>
<tr><td>places</td><td>somewhere</td><td>anywhere</td><td>nowhere</td><td>everywhere</td></tr>
</table>
<h2>Same rules as some and any</h2>
<p><b>some-</b> in positive sentences, offers and requests; <b>any-</b> in questions and negatives:</p>
<p><s-en>There's someone at the door.</s-en> · <s-en>Is there anything to eat?</s-en> · <s-en>I didn't see anybody.</s-en> · <s-en>Would you like something to drink?</s-en></p>
<h2>Only one negative</h2>
<p><s-en>I didn't say anything.</s-en> = <s-en>I said nothing.</s-en> Never “I didn't say nothing”.</p>
<div class="warn">French needs two words («&nbsp;ne… personne&nbsp;», «&nbsp;ne… rien&nbsp;»). English uses only one negative: <s-en>I don't know anyone here.</s-en> or <s-en>I know nobody here.</s-en></div>
<h2>Any- in a positive sentence: « n'importe »</h2>
<p><s-en>You can sit anywhere.</s-en> · <s-en>Anyone can learn to swim.</s-en> · <s-en>Ask me anything.</s-en></p>
<h2>Every- takes a singular verb</h2>
<p><s-en>Everybody is here.</s-en> · <s-en>Everything was perfect.</s-en></p>
<h2>Adjectives and else come after</h2>
<p><s-en>something nice</s-en> · <s-en>nothing special</s-en> · <s-en>somewhere quiet</s-en> · <s-en>someone else</s-en> · <s-en>Anything else?</s-en></p>
`,
  body_fr: `
<table>
<tr><th></th><th>some-</th><th>any-</th><th>no-</th><th>every-</th></tr>
<tr><td>choses</td><td>something (quelque chose)</td><td>anything</td><td>nothing (rien)</td><td>everything (tout)</td></tr>
<tr><td>personnes</td><td>someone / somebody (quelqu'un)</td><td>anyone / anybody</td><td>no one / nobody (personne)</td><td>everyone / everybody (tout le monde)</td></tr>
<tr><td>lieux</td><td>somewhere (quelque part)</td><td>anywhere</td><td>nowhere (nulle part)</td><td>everywhere (partout)</td></tr>
</table>
<h2>Les mêmes règles que some et any</h2>
<p><b>some-</b> dans les phrases affirmatives, les propositions et les demandes ; <b>any-</b> dans les questions et les négations :</p>
<p><s-en>There's someone at the door.</s-en> (Il y a quelqu'un à la porte.) · <s-en>Is there anything to eat?</s-en> · <s-en>I didn't see anybody.</s-en> (Je n'ai vu personne.) · <s-en>Would you like something to drink?</s-en></p>
<h2>Une seule négation</h2>
<p><s-en>I didn't say anything.</s-en> = <s-en>I said nothing.</s-en> (Je n'ai rien dit.) Jamais « I didn't say nothing ».</p>
<div class="warn">Le français a besoin de deux mots (« ne… personne », « ne… rien »). L'anglais n'utilise qu'une seule négation : <s-en>I don't know anyone here.</s-en> ou <s-en>I know nobody here.</s-en></div>
<h2>Any- dans une phrase affirmative : « n'importe »</h2>
<p><s-en>You can sit anywhere.</s-en> (n'importe où) · <s-en>Anyone can learn to swim.</s-en> (n'importe qui) · <s-en>Ask me anything.</s-en> (n'importe quoi)</p>
<h2>Every- + verbe au singulier</h2>
<p><s-en>Everybody is here.</s-en> (Tout le monde est là.) · <s-en>Everything was perfect.</s-en></p>
<h2>L'adjectif et else se placent après</h2>
<p><s-en>something nice</s-en> (quelque chose de sympa) · <s-en>nothing special</s-en> · <s-en>somewhere quiet</s-en> · <s-en>someone else</s-en> (quelqu'un d'autre) · <s-en>Anything else?</s-en> (Autre chose ?)</p>
`,
  examples: [
    ["Is there anything I can do?", "Est-ce que je peux faire quelque chose ?"],
    ["Nobody knows the answer.", "Personne ne connaît la réponse."],
    ["I've looked everywhere for my keys.", "J'ai cherché mes clés partout."],
    ["Let's go somewhere quiet.", "Allons dans un endroit calme."],
    ["Would you like anything else?", "Vous désirez autre chose ?"]
  ],
  quiz: [
    { q: "Translate: « Je n'ai rien dit. »", q_fr: "Traduis : « Je n'ai rien dit. »", o: ["I didn't say anything.", "I didn't say nothing.", "I didn't say something."], a: 0, ex: "Only one negative: didn't + anything.", ex_fr: "Une seule négation : didn't + anything." },
    { q: "Complete: “Everybody ___ tired today.”", q_fr: "Complète : « Everybody ___ tired today. »", o: ["is", "are", "be"], a: 0, ex: "Everybody takes a singular verb.", ex_fr: "Everybody se construit avec un verbe au singulier." },
    { q: "Translate: « Il y a quelqu'un à la porte. »", q_fr: "Traduis : « Il y a quelqu'un à la porte. »", o: ["There's someone at the door.", "There's anyone at the door.", "There's no one at the door."], a: 0, ex: "Positive sentence: someone.", ex_fr: "Phrase affirmative : someone." },
    { q: "Translate: « Tu peux t'asseoir n'importe où. »", q_fr: "Traduis : « Tu peux t'asseoir n'importe où. »", o: ["You can sit anywhere.", "You can sit somewhere.", "You can sit everywhere."], a: 0, ex: "Anywhere = it doesn't matter where.", ex_fr: "« N'importe où » = anywhere." },
    { q: "Translate: « quelque chose de chaud »", q_fr: "Traduis : « quelque chose de chaud »", o: ["something hot", "hot something", "something of hot"], a: 0, ex: "The adjective comes after something.", ex_fr: "L'adjectif se place après something." }
  ]
},
{
  id: 84, after: 14, level: "A2", icon: "footprints",
  title: "Into, out of, across, through: prepositions of movement", title_fr: "Into, out of, across, through : les prépositions de mouvement",
  subtitle: "Go into the shop, walk across the street.", subtitle_fr: "Entrer dans un magasin, traverser la rue.",
  body: `
<p>In English, the <b>preposition</b> often shows the direction, and the <b>verb</b> shows how you move. Where French says «&nbsp;traverser la rue en courant&nbsp;», English says <s-en>run across the street</s-en>.</p>
<table>
<tr><th>Preposition</th><th>Example</th></tr>
<tr><td>into / out of</td><td>She walked into the room. · He got out of the car.</td></tr>
<tr><td>onto / off</td><td>The cat jumped onto the table. · Get off the bus at the next stop.</td></tr>
<tr><td>across (from one side to the other, on a surface)</td><td>We walked across the bridge.</td></tr>
<tr><td>through (inside something: a tunnel, a forest, a door)</td><td>The train goes through a tunnel.</td></tr>
<tr><td>along (following a line)</td><td>Walk along the river.</td></tr>
<tr><td>past (going by something)</td><td>Go past the church and turn left.</td></tr>
<tr><td>over / under</td><td>The dog jumped over the fence. · We swam under the bridge.</td></tr>
<tr><td>up / down</td><td>She ran up the stairs. · Go down this street.</td></tr>
<tr><td>towards / around</td><td>He walked towards me. · We drove around the lake.</td></tr>
</table>
<h2>In or into?</h2>
<p><b>in</b> = position: <s-en>She's in the kitchen.</s-en> <b>into</b> = movement: <s-en>She went into the kitchen.</s-en></p>
<div class="warn">After <b>arrive</b>, never “to”: <s-en>We arrived in London.</s-en> (a city or country) · <s-en>We arrived at the station.</s-en> (a place). And no preposition before home: <s-en>I'm going home.</s-en></div>
<div class="tip">French verb + «&nbsp;en courant / à la nage / en voiture&nbsp;» = English verb of manner + preposition: <s-en>He swam across the river.</s-en> · <s-en>We drove through the town.</s-en> · <s-en>She ran out.</s-en></div>
`,
  body_fr: `
<p>En anglais, la <b>préposition</b> indique souvent la direction, et le <b>verbe</b> la manière de se déplacer. Là où le français dit « traverser la rue en courant », l'anglais dit <s-en>run across the street</s-en>.</p>
<table>
<tr><th>Préposition</th><th>Exemple</th></tr>
<tr><td>into / out of (dans, entrer / hors de, sortir)</td><td>She walked into the room. · He got out of the car.</td></tr>
<tr><td>onto / off (sur / descendre de)</td><td>The cat jumped onto the table. · Get off the bus at the next stop.</td></tr>
<tr><td>across (d'un côté à l'autre, sur une surface)</td><td>We walked across the bridge.</td></tr>
<tr><td>through (à travers, à l'intérieur : tunnel, forêt, porte)</td><td>The train goes through a tunnel.</td></tr>
<tr><td>along (le long de)</td><td>Walk along the river.</td></tr>
<tr><td>past (devant, en passant)</td><td>Go past the church and turn left.</td></tr>
<tr><td>over / under (par-dessus / sous)</td><td>The dog jumped over the fence. · We swam under the bridge.</td></tr>
<tr><td>up / down (monter / descendre)</td><td>She ran up the stairs. · Go down this street.</td></tr>
<tr><td>towards / around (vers / autour de)</td><td>He walked towards me. · We drove around the lake.</td></tr>
</table>
<h2>In ou into ?</h2>
<p><b>in</b> = la position : <s-en>She's in the kitchen.</s-en> (Elle est dans la cuisine.) <b>into</b> = le mouvement : <s-en>She went into the kitchen.</s-en> (Elle est entrée dans la cuisine.)</p>
<div class="warn">Après <b>arrive</b>, jamais « to » : <s-en>We arrived in London.</s-en> (ville, pays) · <s-en>We arrived at the station.</s-en> (un lieu précis). Et pas de préposition devant home : <s-en>I'm going home.</s-en></div>
<div class="tip">Verbe français + « en courant / à la nage / en voiture » = verbe de manière + préposition en anglais : <s-en>He swam across the river.</s-en> (Il a traversé la rivière à la nage.) · <s-en>We drove through the town.</s-en> · <s-en>She ran out.</s-en> (Elle est sortie en courant.)</div>
`,
  examples: [
    ["She walked into the room.", "Elle est entrée dans la pièce."],
    ["We drove through a long tunnel.", "Nous avons traversé un long tunnel en voiture."],
    ["Go along this street and turn left.", "Suivez cette rue et tournez à gauche."],
    ["The cat jumped over the wall.", "Le chat a sauté par-dessus le mur."],
    ["He swam across the river.", "Il a traversé la rivière à la nage."]
  ],
  quiz: [
    { q: "The most natural way to say « Il a traversé la rue en courant »:", q_fr: "La façon la plus naturelle de dire « Il a traversé la rue en courant » :", o: ["He ran across the street.", "He crossed the street running.", "He ran through the street."], a: 0, ex: "Verb of manner (run) + preposition of direction (across).", ex_fr: "Verbe de manière (run) + préposition de direction (across)." },
    { q: "Complete: “He took his phone ___ his pocket.”", q_fr: "Complète : « He took his phone ___ his pocket. »", o: ["out of", "off", "outside"], a: 0, ex: "From inside something: out of.", ex_fr: "Sortir de l'intérieur de quelque chose : out of." },
    { q: "Complete: “The train goes ___ a long tunnel.”", q_fr: "Complète : « The train goes ___ a long tunnel. »", o: ["through", "across", "over"], a: 0, ex: "Inside something, from one end to the other: through.", ex_fr: "À l'intérieur de quelque chose, d'un bout à l'autre : through." },
    { q: "Translate: « Nous sommes arrivés à Londres à midi. »", q_fr: "Traduis : « Nous sommes arrivés à Londres à midi. »", o: ["We arrived in London at noon.", "We arrived to London at noon.", "We arrived at London at noon."], a: 0, ex: "arrive in + a city or a country.", ex_fr: "arrive in + une ville ou un pays." },
    { q: "Complete: “She's ___ the garden.” (where she is)", q_fr: "Complète : « She's ___ the garden. » (là où elle est)", o: ["in", "into", "through"], a: 0, ex: "Position, no movement: in.", ex_fr: "Une position, sans mouvement : in." }
  ]
},
{
  id: 85, after: 21, level: "A2", icon: "target",
  title: "To or for? Saying why", title_fr: "To ou for ? Dire pourquoi",
  subtitle: "I went to the shop to buy bread.", subtitle_fr: "Je suis allée au magasin pour acheter du pain.",
  body: `
<h2>Why? To + verb</h2>
<p>To say why you do something, use <b>to + verb</b>: <s-en>I went to the shop to buy some bread.</s-en> · <s-en>She's saving money to travel.</s-en></p>
<p>It's also a short answer to <b>why</b>: <s-en>Why are you learning English? To travel.</s-en></p>
<div class="warn">«&nbsp;pour + verbe&nbsp;» = <b>to + verb</b>, never “for + verb” and never “for to + verb”: <s-en>I came to see you.</s-en></div>
<h2>For + noun</h2>
<p><s-en>We went out for a walk.</s-en> · <s-en>Let's stop for lunch.</s-en> · <s-en>This present is for you.</s-en></p>
<h2>What something is for: for + -ing</h2>
<p><s-en>This knife is for cutting bread.</s-en> · <s-en>An app for learning vocabulary.</s-en></p>
<table>
<tr><th>You want to say…</th><th>English</th></tr>
<tr><td>why someone does something</td><td>to + verb</td></tr>
<tr><td>for what or for whom</td><td>for + noun</td></tr>
<tr><td>what an object is used for</td><td>for + -ing</td></tr>
</table>
<div class="tip">In formal English you'll also see <b>in order to</b> and <b>so as to</b>, and <b>so that</b> + a sentence: see the lesson on linking words.</div>
`,
  body_fr: `
<h2>Pourquoi ? To + verbe</h2>
<p>Pour dire pourquoi on fait quelque chose, on utilise <b>to + verbe</b> : <s-en>I went to the shop to buy some bread.</s-en> (Je suis allée au magasin pour acheter du pain.) · <s-en>She's saving money to travel.</s-en></p>
<p>C'est aussi une réponse courte à <b>why</b> : <s-en>Why are you learning English? To travel.</s-en></p>
<div class="warn">« pour + verbe » = <b>to + verbe</b>, jamais « for + verbe » ni « for to + verbe » : <s-en>I came to see you.</s-en> (Je suis venue pour te voir.)</div>
<h2>For + nom</h2>
<p><s-en>We went out for a walk.</s-en> (On est sortis faire une promenade.) · <s-en>Let's stop for lunch.</s-en> · <s-en>This present is for you.</s-en></p>
<h2>À quoi sert un objet : for + -ing</h2>
<p><s-en>This knife is for cutting bread.</s-en> (Ce couteau sert à couper le pain.) · <s-en>An app for learning vocabulary.</s-en></p>
<table>
<tr><th>Tu veux dire…</th><th>En anglais</th></tr>
<tr><td>pourquoi quelqu'un fait quelque chose</td><td>to + verbe</td></tr>
<tr><td>pour quoi ou pour qui</td><td>for + nom</td></tr>
<tr><td>à quoi sert un objet</td><td>for + -ing</td></tr>
</table>
<div class="tip">À l'écrit soutenu, on trouve aussi <b>in order to</b> et <b>so as to</b>, ainsi que <b>so that</b> + une phrase : voir la leçon sur les connecteurs.</div>
`,
  examples: [
    ["I'm learning English to travel more.", "J'apprends l'anglais pour voyager davantage."],
    ["She called to say thank you.", "Elle a appelé pour dire merci."],
    ["Let's go out for a coffee.", "Sortons prendre un café."],
    ["This app is for learning vocabulary.", "Cette appli sert à apprendre du vocabulaire."],
    ["We got up early to see the sunrise.", "On s'est levés tôt pour voir le lever du soleil."]
  ],
  quiz: [
    { q: "Translate: « Je suis venue pour te voir. »", q_fr: "Traduis : « Je suis venue pour te voir. »", o: ["I came to see you.", "I came for see you.", "I came for to see you."], a: 0, ex: "Saying why: to + verb.", ex_fr: "pour + verbe = to + verbe." },
    { q: "Complete: “We stopped ___ lunch.”", q_fr: "Complète : « We stopped ___ lunch. »", o: ["for", "to", "for to"], a: 0, ex: "pour + noun = for + noun.", ex_fr: "pour + nom = for + nom." },
    { q: "Translate: « Il économise pour acheter une voiture. »", q_fr: "Traduis : « Il économise pour acheter une voiture. »", o: ["He's saving to buy a car.", "He's saving for buy a car.", "He's saving for to buy a car."], a: 0, ex: "Why he's saving: to + verb.", ex_fr: "Pourquoi il économise : to + verbe." },
    { q: "Complete: “Scissors are ___ cutting paper.”", q_fr: "Complète : « Scissors are ___ cutting paper. »", o: ["for", "to", "for to"], a: 0, ex: "What an object is used for: for + -ing.", ex_fr: "À quoi sert un objet : for + -ing." },
    { q: "Complete: “Why did you go to the bank? ___ get some cash.”", q_fr: "Complète : « Why did you go to the bank? ___ get some cash. »", o: ["To", "For", "For to"], a: 0, ex: "Short answer to why: To + verb.", ex_fr: "Réponse courte à why : To + verbe." }
  ]
},
{
  id: 86, after: 62, level: "A2", icon: "clock",
  title: "I work or I'm working? Action and state verbs", title_fr: "I work ou I'm working ? Verbes d'action et verbes d'état",
  subtitle: "Habits, now, and the verbs that don't take -ing.", subtitle_fr: "Les habitudes, le moment présent, et les verbes qui ne prennent pas -ing.",
  body: `
<h2>Two presents, two uses</h2>
<table>
<tr><th>Present simple</th><th>Present continuous</th></tr>
<tr><td>habits: I work in an office.</td><td>now: I'm working, I can't talk.</td></tr>
<tr><td>facts: Water boils at 100°C.</td><td>temporary situations: I'm working from home this week.</td></tr>
<tr><td>timetables: The train leaves at 8.</td><td>changes: Prices are going up.</td></tr>
<tr><td>feelings and opinions: I like it.</td><td>future arrangements: I'm seeing Tom tomorrow.</td></tr>
</table>
<p><s-en>I usually drive to work, but this week I'm taking the train.</s-en></p>
<h2>State verbs: no -ing</h2>
<p>Some verbs describe a <b>state</b>, not an action. They stay in the simple form, even right now:</p>
<ul>
<li>thinking: know, understand, believe, remember, mean</li>
<li>liking and wanting: like, love, hate, prefer, want, need</li>
<li>having: own, belong, contain</li>
<li>appearance: seem, look like, sound</li>
</ul>
<p><s-en>I know.</s-en> (not “I'm knowing”) · <s-en>Do you understand?</s-en> · <s-en>This bag belongs to me.</s-en></p>
<h2>Verbs with two meanings</h2>
<table>
<tr><th>State (simple)</th><th>Action (continuous)</th></tr>
<tr><td>I think it's a good idea. (opinion)</td><td>I'm thinking about it. (in my head, now)</td></tr>
<tr><td>She has a car. (possession)</td><td>She's having lunch. (an action)</td></tr>
<tr><td>I see what you mean. (understand)</td><td>I'm seeing the doctor tomorrow. (meeting)</td></tr>
<tr><td>The soup tastes good.</td><td>He's tasting the soup.</td></tr>
</table>
<div class="warn">«&nbsp;Je comprends&nbsp;» in a conversation = <s-en>I understand.</s-en> or <s-en>I see.</s-en>, never “I'm understanding”.</div>
<div class="tip">“I'm loving it” comes from advertising. In standard English, love is a state verb: <s-en>I love it.</s-en></div>
`,
  body_fr: `
<h2>Deux présents, deux usages</h2>
<table>
<tr><th>Présent simple</th><th>Présent continu</th></tr>
<tr><td>habitudes : I work in an office.</td><td>maintenant : I'm working, I can't talk.</td></tr>
<tr><td>vérités : Water boils at 100°C.</td><td>situations temporaires : I'm working from home this week.</td></tr>
<tr><td>horaires : The train leaves at 8.</td><td>changements : Prices are going up.</td></tr>
<tr><td>goûts et opinions : I like it.</td><td>rendez-vous prévus : I'm seeing Tom tomorrow.</td></tr>
</table>
<p><s-en>I usually drive to work, but this week I'm taking the train.</s-en> (D'habitude je vais au travail en voiture, mais cette semaine je prends le train.)</p>
<h2>Les verbes d'état : pas de -ing</h2>
<p>Certains verbes décrivent un <b>état</b>, pas une action. Ils restent à la forme simple, même en ce moment :</p>
<ul>
<li>penser, savoir : know, understand, believe, remember, mean</li>
<li>aimer, vouloir : like, love, hate, prefer, want, need</li>
<li>avoir, appartenir : own, belong, contain</li>
<li>apparence : seem, look like, sound</li>
</ul>
<p><s-en>I know.</s-en> (pas « I'm knowing ») · <s-en>Do you understand?</s-en> · <s-en>This bag belongs to me.</s-en></p>
<h2>Les verbes à double sens</h2>
<table>
<tr><th>État (simple)</th><th>Action (continu)</th></tr>
<tr><td>I think it's a good idea. (opinion)</td><td>I'm thinking about it. (j'y réfléchis)</td></tr>
<tr><td>She has a car. (possession)</td><td>She's having lunch. (une action)</td></tr>
<tr><td>I see what you mean. (comprendre)</td><td>I'm seeing the doctor tomorrow. (rendez-vous)</td></tr>
<tr><td>The soup tastes good. (a bon goût)</td><td>He's tasting the soup. (il goûte)</td></tr>
</table>
<div class="warn">« Je comprends » dans une conversation = <s-en>I understand.</s-en> ou <s-en>I see.</s-en>, jamais « I'm understanding ».</div>
<div class="tip">« I'm loving it » vient de la publicité. En anglais standard, love est un verbe d'état : <s-en>I love it.</s-en></div>
`,
  examples: [
    ["She works in a bank, but she's working from home today.", "Elle travaille dans une banque, mais aujourd'hui elle travaille de chez elle."],
    ["I don't understand this word.", "Je ne comprends pas ce mot."],
    ["What are you thinking about?", "À quoi tu penses ?"],
    ["I think it's a great idea.", "Je pense que c'est une super idée."],
    ["We're having dinner. Can I call you back?", "On est en train de dîner. Je peux te rappeler ?"]
  ],
  quiz: [
    { q: "Translate: « Je ne comprends pas. »", q_fr: "Traduis : « Je ne comprends pas. »", o: ["I don't understand.", "I'm not understanding.", "I not understand."], a: 0, ex: "Understand is a state verb: simple form.", ex_fr: "Understand est un verbe d'état : forme simple." },
    { q: "Complete: “Shh! The baby ___.”", q_fr: "Complète : « Shh! The baby ___. »", o: ["is sleeping", "sleeps", "sleep"], a: 0, ex: "Right now → present continuous.", ex_fr: "En ce moment → présent continu." },
    { q: "Complete: “I ___ this song. Who's the singer?”", q_fr: "Complète : « I ___ this song. Who's the singer? »", o: ["love", "am loving", "loving"], a: 0, ex: "Love is a state verb.", ex_fr: "Love est un verbe d'état." },
    { q: "Complete (at a party, right now): “___ you ___ a good time?”", q_fr: "Complète (à une fête, en ce moment) : « ___ you ___ a good time? »", o: ["Are … having", "Do … have", "Have … having"], a: 0, ex: "Have a good time is an action: continuous is possible.", ex_fr: "Have a good time est une action : le continu est possible." },
    { q: "Which sentence is correct?", q_fr: "Quelle phrase est correcte ?", o: ["This bag belongs to my sister.", "This bag is belonging to my sister."], a: 0, ex: "Belong is a state verb.", ex_fr: "Belong est un verbe d'état." }
  ]
},
{
  id: 94, after: 58, level: "A2", icon: "copy",
  title: "Another, the other, others… and one / ones", title_fr: "Another, the other, others… et one / ones",
  subtitle: "Another day, the other one, the blue ones.", subtitle_fr: "Un autre jour, l'autre, les bleus.",
  body: `
<table>
<tr><th>English</th><th>Meaning</th><th>Example</th></tr>
<tr><td>another + singular</td><td>one more, or a different one</td><td>another coffee · another day</td></tr>
<tr><td>other + plural</td><td>different ones</td><td>other people · other ideas</td></tr>
<tr><td>the other + singular</td><td>the second of two</td><td>the other hand · the other side</td></tr>
<tr><td>the other + plural / the others</td><td>the rest of a group</td><td>the other students · the others</td></tr>
<tr><td>others (no noun)</td><td>other people or things</td><td>Some like it, others don't.</td></tr>
</table>
<div class="warn"><b>another</b> is one word (never “an other”). And <b>other</b> never takes -s before a noun: <i>the other books</i>, not “the others books”.</div>
<h2>One and ones: not repeating the noun</h2>
<p><s-en>I don't like this shirt. I prefer the blue one.</s-en> · <s-en>These shoes are too small. Have you got bigger ones?</s-en> · <s-en>Which one?</s-en> · <s-en>this one, that one</s-en></p>
<div class="tip">«&nbsp;celui-ci, celle-là&nbsp;» = <s-en>this one, that one</s-en>. «&nbsp;Les rouges&nbsp;» = <s-en>the red ones</s-en>: an adjective alone isn't enough in English.</div>
`,
  body_fr: `
<table>
<tr><th>Anglais</th><th>Sens</th><th>Exemple</th></tr>
<tr><td>another + singulier</td><td>un autre, encore un</td><td>another coffee · another day</td></tr>
<tr><td>other + pluriel</td><td>d'autres</td><td>other people · other ideas</td></tr>
<tr><td>the other + singulier</td><td>l'autre (de deux)</td><td>the other hand · the other side</td></tr>
<tr><td>the other + pluriel / the others</td><td>les autres (le reste d'un groupe)</td><td>the other students · the others</td></tr>
<tr><td>others (sans nom)</td><td>d'autres (personnes, choses)</td><td>Some like it, others don't.</td></tr>
</table>
<div class="warn"><b>another</b> s'écrit en un seul mot (jamais « an other »). Et <b>other</b> ne prend jamais de -s devant un nom : <i>the other books</i>, pas « the others books ».</div>
<h2>One et ones : pour ne pas répéter le nom</h2>
<p><s-en>I don't like this shirt. I prefer the blue one.</s-en> (Je préfère la bleue.) · <s-en>These shoes are too small. Have you got bigger ones?</s-en> · <s-en>Which one?</s-en> (Lequel ?) · <s-en>this one, that one</s-en></p>
<div class="tip">« celui-ci, celle-là » = <s-en>this one, that one</s-en>. « Les rouges » = <s-en>the red ones</s-en> : en anglais, un adjectif seul ne suffit pas.</div>
`,
  examples: [
    ["Can I have another coffee, please?", "Je peux avoir un autre café, s'il vous plaît ?"],
    ["The other students are already here.", "Les autres étudiants sont déjà là."],
    ["Some people love it; others hate it.", "Certains adorent, d'autres détestent."],
    ["I'll take the red one.", "Je prends le rouge."],
    ["These glasses are dirty. Can I have clean ones?", "Ces verres sont sales. Je peux en avoir des propres ?"]
  ],
  quiz: [
    { q: "Translate: « un autre jour »", q_fr: "Traduis : « un autre jour »", o: ["another day", "an other day", "other day"], a: 0, ex: "Another is one word.", ex_fr: "Another s'écrit en un seul mot." },
    { q: "Complete: “Tom is here, but where are the ___?”", q_fr: "Complète : « Tom is here, but where are the ___? »", o: ["others", "other", "another"], a: 0, ex: "Without a noun: the others.", ex_fr: "Sans nom : the others." },
    { q: "Translate: « les autres livres »", q_fr: "Traduis : « les autres livres »", o: ["the other books", "the others books", "the another books"], a: 0, ex: "Other before a noun: no -s.", ex_fr: "Other devant un nom : pas de -s." },
    { q: "Translate: « Je préfère celle-là. » (a shirt)", q_fr: "Traduis : « Je préfère celle-là. » (une chemise)", o: ["I prefer that one.", "I prefer the that one.", "I prefer that ones."], a: 0, ex: "Pointing at one thing: that one.", ex_fr: "« celle-là » = that one." },
    { q: "Complete: “These apples are bad. Let's buy some fresh ___.”", q_fr: "Complète : « These apples are bad. Let's buy some fresh ___. »", o: ["ones", "one", "others"], a: 0, ex: "To replace a plural noun: ones.", ex_fr: "Pour remplacer un nom pluriel : ones." }
  ]
}
);
