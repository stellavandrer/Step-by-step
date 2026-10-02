/* Leçons B1 : 23 à 34. */
window.LESSONS.push(
{
  id: 23, level: "B1", icon: "timer",
  title: "Le present perfect (2) : for, since, just, yet",
  subtitle: "« J'habite ici depuis 5 ans » : le piège n°1 des Français.",
  body: `
<h2>« Depuis » : le grand piège</h2>
<p>En français, on dit « J'habite ici <b>depuis</b> 5 ans » au <b>présent</b>. En anglais, c'est impossible : l'action a commencé dans le passé et continue, donc on utilise le <b>present perfect</b>.</p>
<p><s-en>I've lived here for five years.</s-en> (et jamais « I live here since five years »)</p>
<h2>For ou since ?</h2>
<table>
<tr><th>Mot</th><th>Usage</th><th>Exemples</th></tr>
<tr><td>for</td><td>une durée</td><td>for two hours, for ten years, for ages</td></tr>
<tr><td>since</td><td>un point de départ</td><td>since 2020, since Monday, since I was a child</td></tr>
</table>
<p><s-en>I've known her for ten years.</s-en> · <s-en>I've known her since 2015.</s-en></p>
<p>Pour demander : <s-en>How long have you been here?</s-en> (Depuis combien de temps es-tu là ?)</p>
<h2>Just, already, yet</h2>
<ul>
<li><b>just</b> = venir de : <s-en>I've just arrived.</s-en> (je viens d'arriver)</li>
<li><b>already</b> = déjà : <s-en>I've already eaten.</s-en></li>
<li><b>yet</b> = déjà (question) / pas encore (négation), en <b>fin</b> de phrase : <s-en>Have you finished yet?</s-en> · <s-en>I haven't finished yet.</s-en></li>
</ul>
<h2>Present perfect ou prétérit ?</h2>
<table>
<tr><th>Present perfect</th><th>Prétérit</th></tr>
<tr><td>Lien avec maintenant, période pas finie</td><td>Moment du passé terminé, daté</td></tr>
<tr><td>I've worked a lot this week.</td><td>I worked a lot last week.</td></tr>
<tr><td>She's lost her keys. (elle ne les a toujours pas)</td><td>She lost her keys yesterday.</td></tr>
</table>
<div class="tip">Repères : <b>this week, today, ever, never, yet, so far</b> → present perfect. <b>yesterday, last…, ago, in 2019, when…?</b> → prétérit.</div>
`,
  examples: [
    ["I've been learning English since September.", "J'apprends l'anglais depuis septembre."],
    ["We've known each other for years.", "On se connaît depuis des années."],
    ["How long have you lived in Paris?", "Depuis combien de temps habites-tu à Paris ?"],
    ["I've just finished my homework.", "Je viens de finir mes devoirs."],
    ["Have you booked the tickets yet?", "Tu as déjà réservé les billets ?"],
    ["I haven't seen him since Christmas.", "Je ne l'ai pas vu depuis Noël."]
  ],
  quiz: [
    { q: "« Je travaille ici depuis 3 ans » :", o: ["I work here since 3 years.", "I've worked here for 3 years.", "I work here for 3 years."], a: 1, ex: "Depuis + action qui continue → present perfect + for (durée)." },
    { q: "« Depuis lundi » :", o: ["for Monday", "since Monday"], a: 1, ex: "Point de départ → since." },
    { q: "« Je viens de manger » :", o: ["I've just eaten.", "I come to eat.", "I just have eat."], a: 0, ex: "Venir de = have just + participe passé." },
    { q: "« Je n'ai pas encore fini » :", o: ["I haven't yet finished.", "I haven't finished yet.", "I didn't finish already."], a: 1, ex: "Yet se place en fin de phrase." },
    { q: "« Je l'ai vu il y a deux jours » :", o: ["I've seen him two days ago.", "I saw him two days ago."], a: 1, ex: "Ago = moment précis du passé → prétérit." }
  ]
},
{
  id: 24, level: "B1", icon: "footprints",
  title: "Le present perfect continu : I've been doing",
  subtitle: "Insister sur la durée d'une activité.",
  body: `
<h2>La forme : have / has been + -ing</h2>
<p><s-en>I've been waiting for an hour!</s-en> (J'attends depuis une heure !)</p>
<p><s-en>She's been working here since May.</s-en></p>
<h2>Quand l'utiliser ?</h2>
<ul>
<li><b>Une activité qui dure depuis un moment</b> (et continue) : <s-en>How long have you been learning English?</s-en></li>
<li><b>Une activité récente dont on voit les traces</b> : <s-en>You're out of breath. — I've been running.</s-en> · <s-en>It's been raining.</s-en> (le sol est mouillé)</li>
</ul>
<h2>Simple ou continu ?</h2>
<table>
<tr><th>Present perfect simple</th><th>Present perfect continu</th></tr>
<tr><td>Le résultat, le nombre</td><td>L'activité, la durée</td></tr>
<tr><td>I've read three books this month.</td><td>I've been reading all afternoon.</td></tr>
<tr><td>She's written the report.</td><td>She's been writing the report.</td></tr>
</table>
<div class="warn">Les verbes d'état (know, like, want, be, have au sens de posséder) restent au simple : <s-en>I've known him for years.</s-en> et jamais « I've been knowing ».</div>
`,
  examples: [
    ["I've been waiting for ages!", "J'attends depuis une éternité !"],
    ["What have you been doing?", "Qu'est-ce que tu as fabriqué ?"],
    ["She's been studying all day.", "Elle étudie depuis ce matin."],
    ["It's been raining since this morning.", "Il pleut depuis ce matin."],
    ["We've been talking about you.", "On parlait de toi."],
    ["How long have you been living here?", "Depuis combien de temps vis-tu ici ?"]
  ],
  quiz: [
    { q: "« J'attends depuis 20 minutes » :", o: ["I wait for 20 minutes.", "I've been waiting for 20 minutes.", "I'm waiting since 20 minutes."], a: 1, ex: "Activité qui dure → have been + -ing + for." },
    { q: "« J'ai lu trois livres ce mois-ci » :", o: ["I've read three books this month.", "I've been reading three books this month."], a: 0, ex: "On compte un résultat → simple." },
    { q: "« Je le connais depuis l'enfance » :", o: ["I've been knowing him since childhood.", "I've known him since childhood."], a: 1, ex: "Know est un verbe d'état → simple." },
    { q: "Tu es toute rouge. — « J'ai couru » :", o: ["I've been running.", "I ran yesterday."], a: 0, ex: "Activité récente dont on voit les traces → continu." }
  ]
},
{
  id: 25, level: "B1", icon: "rewind",
  title: "Le plus-que-parfait : I had done",
  subtitle: "Le passé… du passé.",
  body: `
<p>Le <b>past perfect</b> sert à parler d'une action qui s'est produite <b>avant</b> une autre action passée. C'est le plus-que-parfait français (« j'avais fait »).</p>
<h2>La forme : had + participe passé (pour tout le monde)</h2>
<p><s-en>When I arrived, the film had already started.</s-en> (le film avait commencé avant mon arrivée)</p>
<p>Forme courte : <b>'d</b>. <s-en>I'd never seen snow before.</s-en></p>
<h2>Comparer</h2>
<p><s-en>When I arrived, they left.</s-en> → ils sont partis à mon arrivée (au même moment).</p>
<p><s-en>When I arrived, they had left.</s-en> → ils étaient déjà partis.</p>
<h2>Les mots qui l'accompagnent souvent</h2>
<p><b>already, never… before, by the time, after, before, because</b></p>
<p><s-en>By the time we got to the station, the train had left.</s-en></p>
<p><s-en>She was tired because she hadn't slept.</s-en></p>
<div class="tip">Si l'ordre des événements est évident (avec <b>after</b> ou <b>before</b>), le prétérit suffit souvent : <s-en>After I finished work, I went home.</s-en> Le past perfect sert surtout à <b>éviter l'ambiguïté</b>.</div>
`,
  examples: [
    ["I had never been to Asia before.", "Je n'étais jamais allée en Asie avant."],
    ["When we arrived, everyone had gone.", "Quand nous sommes arrivés, tout le monde était parti."],
    ["She realised she had forgotten her passport.", "Elle s'est rendu compte qu'elle avait oublié son passeport."],
    ["I didn't know they had got married.", "Je ne savais pas qu'ils s'étaient mariés."],
    ["By the time I woke up, he had left.", "Quand je me suis réveillée, il était parti."]
  ],
  quiz: [
    { q: "« Quand je suis arrivée, le cours avait commencé » :", o: ["When I arrived, the lesson started.", "When I arrived, the lesson had started.", "When I had arrived, the lesson started."], a: 1, ex: "L'action antérieure (le cours a commencé avant) → had + participe." },
    { q: "« Je n'avais jamais vu ça » :", o: ["I had never seen that.", "I never had saw that.", "I haven't never seen that."], a: 0, ex: "had + never + participe passé." },
    { q: "Forme courte de « she had » :", o: ["she's", "she'd", "she'll"], a: 1, ex: "had → 'd (attention, 'd peut aussi vouloir dire would)." },
    { q: "« Il était fatigué parce qu'il n'avait pas dormi » :", o: ["He was tired because he didn't sleep.", "He was tired because he hadn't slept."], a: 1, ex: "Le manque de sommeil est antérieur à la fatigue → past perfect." }
  ]
},
{
  id: 26, level: "B1", icon: "cloud-sun-rain",
  title: "If… : le premier conditionnel",
  subtitle: "Les situations réelles et possibles.",
  body: `
<h2>La structure : If + présent, will + verbe</h2>
<p><s-en>If it rains, we'll stay at home.</s-en> (S'il pleut, nous resterons à la maison.)</p>
<p><s-en>If you study every day, you'll make progress.</s-en></p>
<div class="warn"><b>Jamais de « will » après « if »</b> (sauf cas très particuliers). Comme en français : on ne dit pas « s'il pleuvra ». → <s-en>If it rains</s-en>, pas « if it will rain ».</div>
<p>On peut inverser les deux parties (sans virgule) : <s-en>We'll stay at home if it rains.</s-en></p>
<h2>Même règle avec when, as soon as, unless, before, until</h2>
<p><s-en>I'll call you when I arrive.</s-en> (et pas « when I will arrive »)</p>
<p><s-en>As soon as I know, I'll tell you.</s-en> (dès que je saurai)</p>
<p><s-en>We'll be late unless we leave now.</s-en> (<b>unless</b> = à moins que, sauf si)</p>
<h2>Le conditionnel « zéro » : les vérités générales</h2>
<p>If + présent, présent : <s-en>If you heat ice, it melts.</s-en> · <s-en>If I drink coffee at night, I can't sleep.</s-en></p>
<div class="tip">Après « if », on peut aussi donner un ordre : <s-en>If you see Tom, say hello!</s-en></div>
`,
  examples: [
    ["If you're tired, go to bed.", "Si tu es fatiguée, va te coucher."],
    ["If I have time, I'll call you.", "Si j'ai le temps, je t'appellerai."],
    ["I'll tell you when I know.", "Je te le dirai quand je saurai."],
    ["We won't go unless it stops raining.", "Nous n'irons pas à moins qu'il arrête de pleuvoir."],
    ["If you mix blue and yellow, you get green.", "Si tu mélanges du bleu et du jaune, tu obtiens du vert."]
  ],
  quiz: [
    { q: "« S'il fait beau, nous irons à la plage » :", o: ["If it will be sunny, we'll go to the beach.", "If it's sunny, we'll go to the beach.", "If it's sunny, we go to the beach tomorrow."], a: 1, ex: "If + présent, will + verbe." },
    { q: "« Je t'appellerai quand j'arriverai » :", o: ["I'll call you when I'll arrive.", "I'll call you when I arrive.", "I call you when I will arrive."], a: 1, ex: "Pas de will après when." },
    { q: "« Unless » veut dire :", o: ["à moins que / sauf si", "parce que", "même si"], a: 0, ex: "Unless = if… not." },
    { q: "« Si tu chauffes l'eau, elle bout » (vérité générale) :", o: ["If you heat water, it boils.", "If you will heat water, it boils."], a: 0, ex: "Conditionnel zéro : présent + présent." }
  ]
},
{
  id: 27, level: "B1", icon: "sparkles",
  title: "If I were you… : le deuxième conditionnel",
  subtitle: "Imaginer, rêver, donner un conseil.",
  body: `
<h2>La structure : If + prétérit, would + verbe</h2>
<p>Pour une situation <b>imaginaire</b> ou peu probable :</p>
<p><s-en>If I had more time, I would travel more.</s-en> (Si j'avais plus de temps, je voyagerais plus.)</p>
<p><s-en>If I won the lottery, I'd buy a house in Scotland.</s-en></p>
<div class="warn">Comme en français (« si j'avais », jamais « si j'aurais »), <b>pas de would après if</b> : <s-en>If I had</s-en>, pas « if I would have ».</div>
<h2>If I were you : le conseil</h2>
<p>Avec « to be », on utilise <b>were</b> pour toutes les personnes (surtout à l'écrit) :</p>
<p><s-en>If I were you, I'd take the job.</s-en> (À ta place, j'accepterais le poste.)</p>
<p><s-en>If she were here, she'd know what to do.</s-en></p>
<h2>Premier ou deuxième conditionnel ?</h2>
<table>
<tr><th>Premier (possible)</th><th>Deuxième (imaginaire)</th></tr>
<tr><td>If I see him, I'll tell him.</td><td>If I saw him, I'd tell him.</td></tr>
<tr><td>Je vais peut-être le voir.</td><td>C'est peu probable que je le voie.</td></tr>
</table>
<div class="tip"><b>would</b> sert aussi à être poli : <s-en>Would you like a drink?</s-en> · <s-en>It would be great to see you.</s-en></div>
`,
  examples: [
    ["If I were you, I'd say yes.", "À ta place, je dirais oui."],
    ["What would you do if you were rich?", "Que ferais-tu si tu étais riche ?"],
    ["If I spoke English fluently, I'd live in London.", "Si je parlais anglais couramment, j'habiterais à Londres."],
    ["I wouldn't do that if I were you.", "Je ne ferais pas ça, à ta place."],
    ["It would be nice to see you.", "Ce serait sympa de te voir."]
  ],
  quiz: [
    { q: "« Si j'avais une voiture, je viendrais » :", o: ["If I would have a car, I would come.", "If I had a car, I would come.", "If I have a car, I would come."], a: 1, ex: "If + prétérit, would + verbe." },
    { q: "« À ta place, je partirais » :", o: ["If I was you, I leave.", "If I were you, I'd leave.", "At your place, I would leave."], a: 1, ex: "Expression figée : If I were you, I'd…" },
    { q: "Que ferais-tu si tu gagnais au loto ? (peu probable)", o: ["What will you do if you win the lottery?", "What would you do if you won the lottery?"], a: 1, ex: "Situation imaginaire → deuxième conditionnel." },
    { q: "Forme courte de « I would » :", o: ["I'll", "I'd", "I'm"], a: 1, ex: "would → 'd." }
  ]
},
{
  id: 28, level: "B1", icon: "arrow-left-right",
  title: "La voix passive",
  subtitle: "Quand l'action compte plus que la personne.",
  body: `
<h2>La structure : be + participe passé</h2>
<p><s-en>English is spoken all over the world.</s-en> (L'anglais est parlé dans le monde entier.)</p>
<p><s-en>My bike was stolen.</s-en> (On m'a volé mon vélo.)</p>
<p>C'est le verbe <b>be</b> qui porte le temps :</p>
<table>
<tr><th>Temps</th><th>Passif</th></tr>
<tr><td>présent</td><td>The room is cleaned every day.</td></tr>
<tr><td>prétérit</td><td>The house was built in 1900.</td></tr>
<tr><td>present perfect</td><td>The tickets have been sold.</td></tr>
<tr><td>futur</td><td>The results will be published tomorrow.</td></tr>
<tr><td>modal</td><td>It can be done.</td></tr>
</table>
<h2>Dire qui fait l'action : by</h2>
<p><s-en>This book was written by Roald Dahl.</s-en></p>
<h2>Le « on » français</h2>
<p>Le français utilise souvent « on » là où l'anglais met un passif :</p>
<p>« On m'a dit que… » → <s-en>I was told that…</s-en></p>
<p>« On parle anglais ici » → <s-en>English is spoken here.</s-en></p>
<div class="tip">Une particularité anglaise : la personne peut devenir le sujet. <s-en>I was given a present.</s-en> (On m'a offert un cadeau.) · <s-en>She was offered a job.</s-en></div>
`,
  examples: [
    ["The museum was built in 1850.", "Le musée a été construit en 1850."],
    ["I was born in Lyon.", "Je suis née à Lyon."],
    ["Breakfast is served from 7 to 10.", "Le petit-déjeuner est servi de 7 h à 10 h."],
    ["The meeting has been cancelled.", "La réunion a été annulée."],
    ["I was told to wait here.", "On m'a dit d'attendre ici."],
    ["It will be done tomorrow.", "Ce sera fait demain."]
  ],
  quiz: [
    { q: "« Cette maison a été construite en 1920 » :", o: ["This house built in 1920.", "This house was built in 1920.", "This house has built in 1920."], a: 1, ex: "Passif au prétérit : was + participe passé." },
    { q: "« On m'a offert des fleurs » :", o: ["One offered me flowers.", "I was given flowers.", "I gave flowers."], a: 1, ex: "La personne devient le sujet du passif." },
    { q: "« Le colis sera livré demain » :", o: ["The parcel will deliver tomorrow.", "The parcel will be delivered tomorrow."], a: 1, ex: "Futur passif : will be + participe passé." },
    { q: "« Écrit par Shakespeare » :", o: ["written from Shakespeare", "written by Shakespeare", "written of Shakespeare"], a: 1, ex: "L'auteur de l'action est introduit par by." }
  ]
},
{
  id: 29, level: "B1", icon: "quote",
  title: "Le discours indirect : She said that…",
  subtitle: "Rapporter ce que quelqu'un a dit.",
  body: `
<h2>Say ou tell ?</h2>
<ul>
<li><b>say</b> (something) : <s-en>She said that she was tired.</s-en></li>
<li><b>tell</b> + <b>quelqu'un</b> : <s-en>She told me that she was tired.</s-en></li>
</ul>
<div class="warn">On ne dit pas « she said me » ni « she told that ». <b>Tell</b> a toujours besoin d'une personne derrière.</div>
<h2>Le recul des temps</h2>
<p>Quand le verbe introducteur est au passé, on « recule » souvent d'un temps, comme en français :</p>
<table>
<tr><th>Ce qu'elle a dit</th><th>Discours rapporté</th></tr>
<tr><td>"I'm tired."</td><td>She said she was tired.</td></tr>
<tr><td>"I'm working."</td><td>She said she was working.</td></tr>
<tr><td>"I saw him."</td><td>She said she had seen him.</td></tr>
<tr><td>"I'll come."</td><td>She said she would come.</td></tr>
<tr><td>"I can swim."</td><td>She said she could swim.</td></tr>
</table>
<p>Les repères de temps changent aussi : <b>today → that day</b>, <b>tomorrow → the next day</b>, <b>yesterday → the day before</b>, <b>here → there</b>.</p>
<h2>Les questions rapportées</h2>
<p>Pas d'inversion, pas de « do », pas de point d'interrogation :</p>
<p>"Where do you live?" → <s-en>He asked me where I lived.</s-en></p>
<p>"Are you French?" → <s-en>He asked me if I was French.</s-en></p>
<h2>Les ordres rapportés : tell / ask + to</h2>
<p>"Sit down." → <s-en>She told me to sit down.</s-en> · "Please help me." → <s-en>He asked me to help him.</s-en></p>
`,
  examples: [
    ["He said he was busy.", "Il a dit qu'il était occupé."],
    ["She told me she loved the film.", "Elle m'a dit qu'elle avait adoré le film."],
    ["They asked me where I worked.", "Ils m'ont demandé où je travaillais."],
    ["I asked her if she wanted coffee.", "Je lui ai demandé si elle voulait un café."],
    ["The doctor told me to rest.", "Le médecin m'a dit de me reposer."],
    ["He said he would call me.", "Il a dit qu'il m'appellerait."]
  ],
  quiz: [
    { q: "« Il m'a dit qu'il était malade » :", o: ["He said me he was sick.", "He told me he was sick.", "He told he was sick."], a: 1, ex: "Tell + personne." },
    { q: "« Elle m'a demandé où j'habitais » :", o: ["She asked me where did I live.", "She asked me where I lived.", "She asked me where do I live."], a: 1, ex: "Question rapportée : ordre normal sujet + verbe." },
    { q: "\"I will help you.\" → He said he ___ help me.", o: ["will", "would", "wills"], a: 1, ex: "will → would." },
    { q: "« Il m'a demandé de fermer la porte » :", o: ["He asked me to close the door.", "He asked me that I close the door.", "He asked me closing the door."], a: 0, ex: "Demande rapportée : ask + personne + to." }
  ]
},
{
  id: 30, level: "B1", icon: "link-2",
  title: "Les relatives : who, which, that, whose, where",
  subtitle: "Qui, que, dont, où… en anglais.",
  body: `
<table>
<tr><th>Mot</th><th>Pour</th><th>Exemple</th></tr>
<tr><td>who</td><td>une personne</td><td>the woman who lives next door</td></tr>
<tr><td>which</td><td>une chose, un animal</td><td>the book which I bought</td></tr>
<tr><td>that</td><td>personne ou chose (oral)</td><td>the film that we saw</td></tr>
<tr><td>whose</td><td>dont (possession)</td><td>the man whose car was stolen</td></tr>
<tr><td>where</td><td>où (lieu)</td><td>the town where I was born</td></tr>
</table>
<h2>Supprimer le pronom (très courant à l'oral)</h2>
<p>Quand le pronom est <b>complément</b> (suivi d'un autre sujet), on peut le supprimer :</p>
<p><s-en>The book (that) I'm reading is great.</s-en> → <s-en>The book I'm reading is great.</s-en></p>
<p>Mais pas quand il est sujet : <s-en>The woman who lives next door is a nurse.</s-en> (who obligatoire)</p>
<h2>La préposition à la fin</h2>
<p>En anglais courant, la préposition part souvent en <b>fin de phrase</b> :</p>
<p>« La ville dans laquelle j'ai grandi » → <s-en>The town I grew up in.</s-en></p>
<p>« La personne avec qui je travaille » → <s-en>The person I work with.</s-en></p>
<div class="warn">Ne confonds pas <b>whose</b> (dont, à qui) et <b>who's</b> (= who is). <s-en>Who's that girl whose dog is barking?</s-en></div>
`,
  examples: [
    ["She's the friend who helped me.", "C'est l'amie qui m'a aidée."],
    ["This is the house where I grew up.", "C'est la maison où j'ai grandi."],
    ["The film we saw was amazing.", "Le film que nous avons vu était génial."],
    ["I have a friend whose father is Irish.", "J'ai un ami dont le père est irlandais."],
    ["That's the song I was talking about.", "C'est la chanson dont je parlais."]
  ],
  quiz: [
    { q: "« L'homme qui habite ici » :", o: ["the man which lives here", "the man who lives here", "the man whose lives here"], a: 1, ex: "Personne + sujet → who." },
    { q: "« La fille dont le frère est médecin » :", o: ["the girl whose brother is a doctor", "the girl who's brother is a doctor", "the girl that brother is a doctor"], a: 0, ex: "Possession → whose." },
    { q: "Peut-on supprimer le pronom ? « The cake that she made was delicious. »", o: ["Oui", "Non"], a: 0, ex: "That est complément (suivi de « she ») → on peut l'enlever : The cake she made…" },
    { q: "« La ville où je suis née » :", o: ["the city which I was born", "the city where I was born", "the city who I was born"], a: 1, ex: "Lieu → where." }
  ]
},
{
  id: 31, level: "B1", icon: "history",
  title: "Used to, be used to, get used to",
  subtitle: "Trois expressions qui se ressemblent… mais pas trop.",
  body: `
<h2>Used to + verbe : une habitude passée (finie)</h2>
<p><s-en>I used to smoke.</s-en> (Avant, je fumais. Plus maintenant.)</p>
<p><s-en>We used to live in Lille.</s-en> · <s-en>Did you use to play sports?</s-en> · <s-en>I didn't use to like coffee.</s-en></p>
<div class="tip">C'est l'imparfait d'habitude : « quand j'étais petite, je <b>passais</b> mes étés chez ma grand-mère » → <s-en>I used to spend my summers at my grandmother's.</s-en></div>
<h2>Be used to + nom / -ing : être habitué(e) à</h2>
<p><s-en>I'm used to the cold.</s-en> · <s-en>She's used to working at night.</s-en></p>
<h2>Get used to + nom / -ing : s'habituer à</h2>
<p><s-en>I'm getting used to driving on the left.</s-en> · <s-en>You'll get used to it.</s-en> (Tu t'y habitueras.)</p>
<div class="warn">Avec <b>be used to</b> et <b>get used to</b>, « to » est une préposition → il est suivi de <b>-ing</b> : « I'm used to <b>working</b> », jamais « I'm used to work ».</div>
<table>
<tr><th>Expression</th><th>Sens</th></tr>
<tr><td>I used to get up early.</td><td>Avant, je me levais tôt.</td></tr>
<tr><td>I'm used to getting up early.</td><td>J'ai l'habitude de me lever tôt.</td></tr>
<tr><td>I'm getting used to getting up early.</td><td>Je m'habitue à me lever tôt.</td></tr>
</table>
`,
  examples: [
    ["I used to live in Spain.", "Avant, j'habitais en Espagne."],
    ["There used to be a cinema here.", "Il y avait un cinéma ici avant."],
    ["I'm not used to this weather.", "Je ne suis pas habituée à ce temps."],
    ["You'll get used to it.", "Tu t'y habitueras."],
    ["Did you use to have long hair?", "Avant, tu avais les cheveux longs ?"]
  ],
  quiz: [
    { q: "« Avant, je jouais du piano » :", o: ["I used to play the piano.", "I'm used to play the piano.", "I use to playing the piano."], a: 0, ex: "Habitude passée → used to + verbe." },
    { q: "« Je suis habituée à travailler tard » :", o: ["I'm used to work late.", "I'm used to working late.", "I used to working late."], a: 1, ex: "Be used to + -ing." },
    { q: "« Tu t'y habitueras » :", o: ["You'll used to it.", "You'll get used to it.", "You'll be use to it."], a: 1, ex: "S'habituer = get used to." },
    { q: "« Est-ce que tu fumais, avant ? » :", o: ["Did you used to smoke?", "Did you use to smoke?", "Were you used to smoke?"], a: 1, ex: "Après did → use to (sans d)." }
  ]
},
{
  id: 32, level: "B1", icon: "search",
  title: "Must, might, can't : faire des déductions",
  subtitle: "Exprimer la certitude… ou le doute.",
  body: `
<p>Les modaux servent aussi à dire <b>à quel point on est sûr</b> de quelque chose.</p>
<table>
<tr><th>Modal</th><th>Certitude</th><th>Exemple</th></tr>
<tr><td>must</td><td>presque sûr que oui (~95 %)</td><td>She must be tired. (Elle doit être fatiguée.)</td></tr>
<tr><td>may / might / could</td><td>peut-être (~50 %)</td><td>He might be at home.</td></tr>
<tr><td>can't</td><td>presque sûr que non (~95 %)</td><td>That can't be true! (Ce n'est pas possible !)</td></tr>
</table>
<div class="warn">Le contraire de <b>must</b> (déduction) n'est pas « mustn't », mais <b>can't</b>. « Il ne peut pas être riche » → <s-en>He can't be rich.</s-en></div>
<h2>Avec -ing pour ce qui se passe maintenant</h2>
<p><s-en>She's not answering. She must be sleeping.</s-en> · <s-en>They might be joking.</s-en></p>
<h2>Les autres façons d'exprimer le doute</h2>
<p><s-en>Maybe he's late.</s-en> · <s-en>Perhaps she forgot.</s-en> · <s-en>He's probably at work.</s-en> · <s-en>I'm sure it's fine.</s-en></p>
<div class="tip">Au niveau B2, tu verras comment faire des déductions sur le <b>passé</b> : <s-en>She must have forgotten.</s-en> (Elle a dû oublier.)</div>
`,
  examples: [
    ["You must be Stella! Nice to meet you.", "Tu dois être Stella ! Enchanté."],
    ["It might rain later.", "Il pourrait pleuvoir plus tard."],
    ["That can't be right.", "Ça ne peut pas être juste."],
    ["He must be joking!", "Il doit plaisanter !"],
    ["She may be a bit late.", "Elle sera peut-être un peu en retard."]
  ],
  quiz: [
    { q: "Il a travaillé 12 heures. « Il doit être épuisé » :", o: ["He must be exhausted.", "He has to be exhausted.", "He mustn't be exhausted."], a: 0, ex: "Déduction quasi certaine → must." },
    { q: "« Ce n'est pas possible que ce soit elle » :", o: ["It mustn't be her.", "It can't be her.", "It doesn't must be her."], a: 1, ex: "Le contraire de must (déduction) = can't." },
    { q: "« Il est peut-être malade » :", o: ["He might be sick.", "He must be sick.", "He can't be sick."], a: 0, ex: "Possibilité → might / may / could." },
    { q: "Elle ne répond pas. « Elle doit être en train de conduire » :", o: ["She must drive.", "She must be driving."], a: 1, ex: "Maintenant → must be + -ing." }
  ]
},
{
  id: 33, level: "B1", icon: "magnet",
  title: "Les phrasal verbs : get up, give up, find out",
  subtitle: "Le cœur de l'anglais parlé.",
  body: `
<p>Un <b>phrasal verb</b>, c'est un verbe + une petite particule (up, out, off, on, back…) qui change le sens. Les natifs les utilisent <b>tout le temps</b>, beaucoup plus que les mots « savants ».</p>
<h2>Sens évident ou sens caché</h2>
<ul>
<li>Évident : <s-en>sit down</s-en> (s'asseoir), <s-en>come back</s-en> (revenir), <s-en>go out</s-en> (sortir)</li>
<li>Caché : <s-en>give up</s-en> (abandonner), <s-en>find out</s-en> (découvrir, apprendre), <s-en>run out of</s-en> (manquer de)</li>
</ul>
<h2>Les 15 indispensables</h2>
<table>
<tr><th>Phrasal verb</th><th>Sens</th></tr>
<tr><td>get up</td><td>se lever</td></tr>
<tr><td>wake up</td><td>se réveiller</td></tr>
<tr><td>give up</td><td>abandonner, arrêter</td></tr>
<tr><td>find out</td><td>découvrir, se renseigner</td></tr>
<tr><td>look for</td><td>chercher</td></tr>
<tr><td>look after</td><td>s'occuper de</td></tr>
<tr><td>look forward to</td><td>avoir hâte de</td></tr>
<tr><td>turn on / turn off</td><td>allumer / éteindre</td></tr>
<tr><td>put on / take off</td><td>mettre / enlever (un vêtement)</td></tr>
<tr><td>pick up</td><td>ramasser, aller chercher</td></tr>
<tr><td>get on with</td><td>bien s'entendre avec</td></tr>
<tr><td>run out of</td><td>ne plus avoir de</td></tr>
<tr><td>carry on</td><td>continuer</td></tr>
<tr><td>work out</td><td>comprendre, résoudre / faire du sport</td></tr>
<tr><td>come up with</td><td>trouver (une idée)</td></tr>
</table>
<h2>Où mettre le complément ?</h2>
<p>Avec beaucoup de phrasal verbs, un nom peut aller avant ou après la particule : <s-en>Turn off the light.</s-en> = <s-en>Turn the light off.</s-en></p>
<div class="warn">Mais un <b>pronom</b> (it, them, her…) se met <b>toujours au milieu</b> : <s-en>Turn it off.</s-en> et jamais « turn off it ».</div>
`,
  examples: [
    ["I get up at seven.", "Je me lève à sept heures."],
    ["Don't give up!", "N'abandonne pas !"],
    ["I'm looking for my glasses.", "Je cherche mes lunettes."],
    ["Can you turn it off, please?", "Tu peux l'éteindre, s'il te plaît ?"],
    ["We've run out of milk.", "On n'a plus de lait."],
    ["I'm looking forward to the weekend.", "J'ai hâte d'être au week-end."]
  ],
  quiz: [
    { q: "« N'abandonne pas ! » :", o: ["Don't give up!", "Don't give out!", "Don't get up!"], a: 0, ex: "Give up = abandonner." },
    { q: "« Éteins-la (la télé) » :", o: ["Turn off it.", "Turn it off.", "Turn it out."], a: 1, ex: "Le pronom va au milieu." },
    { q: "« On n'a plus de café » :", o: ["We've run out of coffee.", "We've looked after coffee.", "We've given up of coffee."], a: 0, ex: "Run out of = ne plus avoir de." },
    { q: "« Look after » veut dire :", o: ["chercher", "s'occuper de", "regarder derrière"], a: 1, ex: "Look after the children = s'occuper des enfants." },
    { q: "« J'ai hâte de te voir » :", o: ["I look forward to see you.", "I'm looking forward to seeing you."], a: 1, ex: "To est une préposition ici → -ing." }
  ]
},
{
  id: 34, level: "B1", icon: "messages-square",
  title: "Isn't it? So do I! : tags et réponses",
  subtitle: "Les petits mots qui rendent une conversation naturelle.",
  body: `
<h2>Les question tags : « n'est-ce pas ? »</h2>
<p>On reprend l'auxiliaire, en inversant positif / négatif :</p>
<p><s-en>It's cold, isn't it?</s-en> · <s-en>You're French, aren't you?</s-en></p>
<p><s-en>She doesn't eat meat, does she?</s-en> · <s-en>You've been to London, haven't you?</s-en></p>
<p>Verbe normal au présent → do / does : <s-en>You like jazz, don't you?</s-en> · au passé → did : <s-en>You saw it, didn't you?</s-en></p>
<div class="tip">L'intonation compte : si la voix <b>descend</b>, tu attends juste une confirmation (« il fait beau, hein »). Si elle <b>monte</b>, c'est une vraie question.</div>
<h2>Moi aussi / moi non plus</h2>
<table>
<tr><th>Phrase</th><th>Moi aussi</th><th>Moi non plus</th></tr>
<tr><td>I'm tired. / I'm not tired.</td><td>So am I. (Me too.)</td><td>Neither am I. (Me neither.)</td></tr>
<tr><td>I like tea. / I don't like tea.</td><td>So do I.</td><td>Neither do I.</td></tr>
<tr><td>I can swim. / I can't swim.</td><td>So can I.</td><td>Neither can I.</td></tr>
<tr><td>I went. / I didn't go.</td><td>So did I.</td><td>Neither did I.</td></tr>
</table>
<p>À l'oral détendu, <s-en>Me too!</s-en> et <s-en>Me neither!</s-en> marchent dans tous les cas.</p>
<h2>Réagir avec l'auxiliaire</h2>
<p>Les Anglais réagissent souvent avec une mini-question : <s-en>I'm moving to Canada. — Are you? Wow!</s-en> · <s-en>I don't eat meat. — Don't you?</s-en> (Ah bon ?)</p>
`,
  examples: [
    ["It's a beautiful day, isn't it?", "Il fait beau, n'est-ce pas ?"],
    ["You don't speak Spanish, do you?", "Tu ne parles pas espagnol, si ?"],
    ["I love this place. — So do I!", "J'adore cet endroit. — Moi aussi !"],
    ["I'm not hungry. — Neither am I.", "Je n'ai pas faim. — Moi non plus."],
    ["I've just got married! — Have you? Congratulations!", "Je viens de me marier ! — C'est vrai ? Félicitations !"]
  ],
  quiz: [
    { q: "« You're tired, ___? »", o: ["isn't it", "aren't you", "don't you"], a: 1, ex: "You are → aren't you." },
    { q: "« She likes cats, ___? »", o: ["doesn't she", "isn't she", "don't she"], a: 0, ex: "Verbe normal, she → doesn't she." },
    { q: "« Je n'aime pas les épinards. — Moi non plus. »", o: ["So do I.", "Neither do I.", "Neither I do."], a: 1, ex: "Négatif → Neither + auxiliaire + sujet." },
    { q: "« J'ai vu le film. — Moi aussi. »", o: ["So did I.", "So have I.", "So I did."], a: 0, ex: "Prétérit (saw) → So did I." }
  ]
}
);
