/* Leçons C1 : 45 à 54. */
window.LESSONS.push(
{
  id: 45, level: "C1", icon: "arrow-up-down",
  title: "L'inversion : Never have I seen…",
  subtitle: "Donner du poids à une phrase.",
  body: `
<p>En anglais soutenu (discours, écrit, ou pour l'effet dramatique), on peut placer un mot négatif ou restrictif <b>en tête de phrase</b>. On fait alors l'<b>inversion</b> comme dans une question.</p>
<h2>Après un adverbe négatif ou restrictif</h2>
<table>
<tr><th>Normal</th><th>Avec inversion</th></tr>
<tr><td>I have never seen such a mess.</td><td>Never have I seen such a mess.</td></tr>
<tr><td>We rarely go out.</td><td>Rarely do we go out.</td></tr>
<tr><td>She not only sings, she also dances.</td><td>Not only does she sing, but she also dances.</td></tr>
<tr><td>I little knew what would happen.</td><td>Little did I know what would happen.</td></tr>
</table>
<p>Autres déclencheurs : <b>seldom, at no time, under no circumstances, only then, only when, not until</b>.</p>
<p><s-en>Under no circumstances should you open this door.</s-en> · <s-en>Only then did I understand.</s-en></p>
<h2>Hardly / No sooner : « à peine… que »</h2>
<p><s-en>Hardly had I sat down when the phone rang.</s-en></p>
<p><s-en>No sooner had we arrived than it started to rain.</s-en></p>
<div class="warn"><b>Hardly</b> va avec <b>when</b>, <b>No sooner</b> va avec <b>than</b>.</div>
<h2>Les conditions sans « if »</h2>
<p><s-en>Had I known, I would have come.</s-en> (= If I had known)</p>
<p><s-en>Should you need anything, call me.</s-en> (= If you need anything)</p>
<p><s-en>Were I in your position, I would resign.</s-en> (= If I were)</p>
<div class="tip">À l'oral détendu, l'inversion sonne théâtral. Garde-la pour les écrits soignés, les présentations… ou pour faire de l'effet.</div>
`,
  examples: [
    ["Never have I felt so happy.", "Jamais je ne me suis sentie aussi heureuse."],
    ["Little did she know that her life was about to change.", "Elle était loin de se douter que sa vie allait changer."],
    ["Not only is it cheap, but it's also delicious.", "Non seulement c'est bon marché, mais en plus c'est délicieux."],
    ["Hardly had I closed my eyes when the alarm went off.", "J'avais à peine fermé les yeux que le réveil a sonné."],
    ["Should you have any questions, don't hesitate to contact me.", "Si vous avez des questions, n'hésitez pas à me contacter."]
  ],
  quiz: [
    { q: "Complète : « Never ___ such a beautiful view. »", o: ["I have seen", "have I seen", "I saw"], a: 1, ex: "Never en tête → inversion : have I seen." },
    { q: "« À peine étions-nous partis qu'il a commencé à neiger » :", o: ["Hardly had we left than it started to snow.", "No sooner had we left than it started to snow."], a: 1, ex: "No sooner… than / Hardly… when." },
    { q: "« Si j'avais su » (sans if) :", o: ["Had I known", "Did I know", "Have I known"], a: 0, ex: "Had I known = If I had known." },
    { q: "« Non seulement elle parle anglais, mais aussi… » :", o: ["Not only she speaks English, but…", "Not only does she speak English, but…"], a: 1, ex: "Not only en tête → inversion avec does." }
  ]
},
{
  id: 46, level: "C1", icon: "flashlight",
  title: "Les phrases clivées : What I need is…",
  subtitle: "Mettre un élément en lumière.",
  body: `
<p>Le français adore « c'est… qui / ce que… c'est ». L'anglais a les mêmes outils : les <b>phrases clivées</b>.</p>
<h2>It is / was … that / who</h2>
<p>Pour mettre en valeur un élément précis :</p>
<p><s-en>It was Sarah who told me.</s-en> (C'est Sarah qui me l'a dit, pas quelqu'un d'autre.)</p>
<p><s-en>It's the price that worries me.</s-en></p>
<p><s-en>It wasn't until I moved to London that I really started speaking English.</s-en> (Ce n'est qu'en arrivant à Londres que…)</p>
<h2>What… is : ce que… c'est</h2>
<p><s-en>What I need is a long holiday.</s-en> (Ce dont j'ai besoin, c'est de longues vacances.)</p>
<p><s-en>What surprised me was his reaction.</s-en></p>
<p>Avec une action : <s-en>What I did was call the police.</s-en> (Ce que j'ai fait, c'est appeler la police.)</p>
<h2>Les variantes très naturelles à l'oral</h2>
<ul>
<li><s-en>All I want is some peace and quiet.</s-en> (Tout ce que je veux, c'est…)</li>
<li><s-en>The thing is, I don't have time.</s-en> (Le truc, c'est que…)</li>
<li><s-en>The reason why I'm calling is that…</s-en></li>
<li><s-en>The person who helped me most was my teacher.</s-en></li>
</ul>
<div class="tip">Ces structures te permettent de reproduire en anglais l'insistance que tu mets naturellement en français. Elles rendent ton anglais beaucoup plus vivant.</div>
`,
  examples: [
    ["It was my mother who taught me to cook.", "C'est ma mère qui m'a appris à cuisiner."],
    ["What I love about this city is the light.", "Ce que j'adore dans cette ville, c'est la lumière."],
    ["All you need is love.", "Tout ce dont tu as besoin, c'est d'amour."],
    ["The thing is, I've never done this before.", "Le truc, c'est que je n'ai jamais fait ça."],
    ["It wasn't until midnight that we finished.", "Ce n'est qu'à minuit que nous avons fini."]
  ],
  quiz: [
    { q: "« C'est Paul qui a cassé le vase » :", o: ["It was Paul who broke the vase.", "It was Paul which broke the vase.", "This is Paul who broke the vase."], a: 0, ex: "It was + personne + who." },
    { q: "« Ce dont j'ai besoin, c'est d'un café » :", o: ["That I need is a coffee.", "What I need is a coffee.", "Which I need is a coffee."], a: 1, ex: "What… is." },
    { q: "« Ce n'est qu'après son départ que j'ai compris » :", o: ["It wasn't until he left that I understood.", "It was only until he left that I understood."], a: 0, ex: "It wasn't until… that…" },
    { q: "« Tout ce que je veux, c'est dormir » :", o: ["All what I want is sleep.", "All I want is to sleep."], a: 1, ex: "All I want is… (jamais « all what »)." }
  ]
},
{
  id: 47, level: "C1", icon: "gem",
  title: "Le subjonctif et les structures formelles",
  subtitle: "It's time we left, I'd rather you didn't…",
  body: `
<h2>Le subjonctif « mandatif »</h2>
<p>Après les verbes et adjectifs d'exigence ou de recommandation, l'anglais soutenu utilise le <b>verbe de base</b>, sans -s, même avec he / she :</p>
<p><s-en>The doctor recommended that she rest.</s-en> (et non « rests »)</p>
<p><s-en>It is essential that every employee be informed.</s-en></p>
<p>Déclencheurs : <b>suggest, recommend, insist, demand, require, propose</b> ; <b>essential, vital, important, crucial</b>.</p>
<div class="tip">En anglais britannique courant, on dit aussi <s-en>It's important that she should rest.</s-en> Les deux sont corrects.</div>
<h2>It's (high) time + prétérit</h2>
<p><s-en>It's time we left.</s-en> (Il est temps qu'on parte.) · <s-en>It's high time you found a job.</s-en> (Il serait grand temps que…)</p>
<h2>Would rather / had better</h2>
<ul>
<li><s-en>I'd rather stay at home.</s-en> (je préférerais, pour moi-même : + verbe de base)</li>
<li><s-en>I'd rather you didn't smoke here.</s-en> (je préférerais que tu… : + prétérit)</li>
<li><s-en>You'd better hurry.</s-en> (tu ferais mieux de : + verbe de base)</li>
</ul>
<h2>As if / as though</h2>
<p><s-en>He talks as if he knew everything.</s-en> (comme s'il savait tout)</p>
<p><s-en>She looked as though she had seen a ghost.</s-en></p>
<h2>Les formules figées</h2>
<p><s-en>God save the King.</s-en> · <s-en>Be that as it may…</s-en> (Quoi qu'il en soit…) · <s-en>Come what may.</s-en> (Advienne que pourra.)</p>
`,
  examples: [
    ["I suggest that he apply for the job.", "Je suggère qu'il postule à ce poste."],
    ["It's high time we did something.", "Il est grand temps qu'on fasse quelque chose."],
    ["I'd rather you told me the truth.", "Je préférerais que tu me dises la vérité."],
    ["You'd better not be late.", "Tu as intérêt à ne pas être en retard."],
    ["She acts as if nothing had happened.", "Elle fait comme si rien ne s'était passé."]
  ],
  quiz: [
    { q: "« Il est temps que nous partions » :", o: ["It's time we leave.", "It's time we left.", "It's time that we will leave."], a: 1, ex: "It's time + prétérit." },
    { q: "Version soutenue : « They insisted that he ___ present. »", o: ["is", "be", "was being"], a: 1, ex: "Subjonctif : verbe de base, be." },
    { q: "« Je préférerais que tu ne viennes pas » :", o: ["I'd rather you didn't come.", "I'd rather you don't come.", "I'd prefer you not coming."], a: 0, ex: "Would rather + autre personne + prétérit." },
    { q: "« Tu ferais mieux de partir » :", o: ["You'd better to leave.", "You'd better leave.", "You'd rather leave."], a: 1, ex: "Had better + verbe de base." }
  ]
},
{
  id: 48, level: "C1", icon: "flame",
  title: "L'emphase : I do love it, such a…",
  subtitle: "Insister avec naturel.",
  body: `
<h2>Do / does / did d'insistance</h2>
<p>Dans une phrase affirmative, on peut ajouter <b>do</b> (accentué à l'oral) pour insister ou contredire :</p>
<p><s-en>I do love this song!</s-en> (J'adore vraiment cette chanson !)</p>
<p><s-en>I didn't break it. — You did break it!</s-en> (Si, tu l'as cassé !)</p>
<p><s-en>Do sit down.</s-en> (Asseyez-vous donc, très poli.)</p>
<h2>So et such</h2>
<ul>
<li><b>so</b> + adjectif / adverbe : <s-en>It was so cold.</s-en></li>
<li><b>such (a)</b> + (adjectif +) nom : <s-en>It was such a cold day.</s-en> · <s-en>They're such nice people.</s-en></li>
<li>Avec conséquence : <s-en>It was so loud that I couldn't hear.</s-en> · <s-en>It was such a mess that we left.</s-en></li>
</ul>
<h2>Les intensifs</h2>
<ul>
<li><s-en>the very best</s-en> (vraiment le meilleur), <s-en>at the very end</s-en> (tout à la fin)</li>
<li><s-en>by far the most interesting</s-en> (de loin)</li>
<li><s-en>not in the least</s-en> / <s-en>not at all</s-en> (pas le moins du monde)</li>
<li><s-en>What on earth are you doing?</s-en> (mais qu'est-ce que tu fabriques ?)</li>
<li><s-en>whatever, whoever, wherever</s-en> : <s-en>Whatever happens, I'll be there.</s-en></li>
</ul>
<div class="tip">Les adverbes forts vont avec les adjectifs forts : <s-en>absolutely delicious</s-en>, <s-en>absolutely exhausted</s-en>, mais <s-en>very tired</s-en>. On ne dit pas « very delicious » ni « absolutely tired ».</div>
`,
  examples: [
    ["I do hope you can come.", "J'espère vraiment que tu pourras venir."],
    ["She did warn us, to be fair.", "Elle nous avait bien prévenus, il faut le reconnaître."],
    ["It was such a lovely evening.", "C'était une soirée tellement agréable."],
    ["This is by far the best pizza I've ever had.", "C'est de loin la meilleure pizza que j'aie mangée."],
    ["Whatever you decide, I'll support you.", "Quoi que tu décides, je te soutiendrai."]
  ],
  quiz: [
    { q: "« C'était une journée tellement belle » :", o: ["It was so a beautiful day.", "It was such a beautiful day."], a: 1, ex: "Such a + adjectif + nom." },
    { q: "Contredire : « You didn't call me! — I ___ call you! »", o: ["did", "do", "have"], a: 0, ex: "Did d'insistance au passé." },
    { q: "Laquelle est naturelle ?", o: ["very delicious", "absolutely delicious"], a: 1, ex: "Adjectif fort → absolutely." },
    { q: "« Mais qu'est-ce que tu fais ? » (surprise) :", o: ["What on earth are you doing?", "What in world you do?"], a: 0, ex: "On earth renforce la question." }
  ]
},
{
  id: 49, level: "C1", icon: "scissors",
  title: "Ellipse et substitution : I hope so, I'd love to",
  subtitle: "Ne pas tout répéter, comme un natif.",
  body: `
<p>Les natifs évitent de répéter ce qui est évident. Savoir le faire rend ton anglais beaucoup plus fluide.</p>
<h2>So / not pour remplacer une phrase</h2>
<p><s-en>Is it going to rain? — I think so. / I hope not.</s-en></p>
<p>Verbes concernés : <b>think, hope, expect, suppose, guess, be afraid</b>. <s-en>Are we late? — I'm afraid so.</s-en></p>
<div class="warn">« Je pense que oui » = <s-en>I think so</s-en>, jamais « I think yes ». Et « je ne pense pas » = <s-en>I don't think so.</s-en></div>
<h2>L'auxiliaire seul</h2>
<p><s-en>Have you finished? — Yes, I have.</s-en> · <s-en>She said she'd help, and she did.</s-en></p>
<p><s-en>I can't swim, but my sister can.</s-en></p>
<h2>To seul (ellipse du verbe)</h2>
<p><s-en>Would you like to come? — I'd love to!</s-en> (et non « I'd love »)</p>
<p><s-en>I didn't want to go, but I had to.</s-en></p>
<h2>One / ones</h2>
<p><s-en>I don't like the red dress, I prefer the blue one.</s-en> · <s-en>These shoes are nicer than the old ones.</s-en></p>
<h2>If so / if not</h2>
<p><s-en>Are you free tomorrow? If so, let's meet.</s-en> (Si oui…) · <s-en>If not, we'll go next week.</s-en></p>
`,
  examples: [
    ["Will she come? — I expect so.", "Elle viendra ? — Je pense que oui."],
    ["Is it serious? — I hope not.", "C'est grave ? — J'espère que non."],
    ["Do you want to join us? — I'd love to.", "Tu veux te joindre à nous ? — Avec plaisir."],
    ["Which one do you want? — The big one.", "Lequel tu veux ? — Le grand."],
    ["He promised to call, but he didn't.", "Il a promis d'appeler, mais il ne l'a pas fait."]
  ],
  quiz: [
    { q: "« Je pense que oui » :", o: ["I think yes.", "I think so.", "I think it."], a: 1, ex: "Think so." },
    { q: "« Tu veux venir ? — Avec plaisir ! » :", o: ["I'd love!", "I'd love to!", "I'd love it to!"], a: 1, ex: "On garde le to : I'd love to." },
    { q: "« Je préfère le vert » (en parlant d'un pull) :", o: ["I prefer the green.", "I prefer the green one."], a: 1, ex: "On remplace le nom par one." },
    { q: "« Est-ce qu'il va pleuvoir ? — J'espère que non. » :", o: ["I don't hope so.", "I hope not.", "I hope no."], a: 1, ex: "Hope not (et pas « don't hope so »)." }
  ]
},
{
  id: 50, level: "C1", icon: "spline",
  title: "Les propositions participiales : Having finished…",
  subtitle: "Condenser deux idées en une phrase élégante.",
  body: `
<p>À l'écrit soigné, on remplace souvent une proposition complète par un <b>participe</b>.</p>
<h2>Participe présent (-ing) : action simultanée ou cause</h2>
<p><s-en>Walking down the street, I saw an old friend.</s-en> (En descendant la rue…)</p>
<p><s-en>Not knowing what to say, she smiled.</s-en> (Ne sachant pas quoi dire…)</p>
<h2>Having + participe : action antérieure</h2>
<p><s-en>Having finished the report, she went home.</s-en> (Après avoir fini le rapport…)</p>
<p><s-en>Having lived in Japan, he speaks Japanese well.</s-en></p>
<h2>Participe passé : sens passif</h2>
<p><s-en>Built in 1890, the house is now a hotel.</s-en> (Construite en 1890…)</p>
<p><s-en>Seen from above, the city looks tiny.</s-en></p>
<h2>Avec une conjonction</h2>
<p><s-en>While waiting for the bus, I read the news.</s-en> · <s-en>After leaving school, she travelled.</s-en> · <s-en>When asked, he refused to comment.</s-en></p>
<div class="warn"><b>Le piège du participe « orphelin »</b> : le sujet sous-entendu doit être le même que celui de la phrase principale. « Walking down the street, the rain started » voudrait dire que la pluie marchait dans la rue ! → <s-en>Walking down the street, I got caught in the rain.</s-en></div>
`,
  examples: [
    ["Feeling tired, I went to bed early.", "Comme j'étais fatiguée, je me suis couchée tôt."],
    ["Having read the book, I didn't want to see the film.", "Ayant lu le livre, je ne voulais pas voir le film."],
    ["Written in 1949, the novel is still relevant.", "Écrit en 1949, le roman est toujours d'actualité."],
    ["While travelling in Ireland, we met some amazing people.", "En voyageant en Irlande, nous avons rencontré des gens formidables."],
    ["Not wanting to disturb her, I left quietly.", "Ne voulant pas la déranger, je suis partie sans bruit."]
  ],
  quiz: [
    { q: "« Après avoir mangé, nous sommes sortis » :", o: ["Having eaten, we went out.", "Having eat, we went out.", "Eaten, we went out."], a: 0, ex: "Having + participe passé = après avoir." },
    { q: "« Construit en 1900, le pont… » :", o: ["Building in 1900, the bridge…", "Built in 1900, the bridge…"], a: 1, ex: "Sens passif → participe passé." },
    { q: "Laquelle est correcte ?", o: ["Arriving at the station, the train had left.", "Arriving at the station, I found the train had left."], a: 1, ex: "C'est « I » qui arrive à la gare, pas le train." },
    { q: "« Ne sachant pas quoi faire, il a appelé sa mère » :", o: ["Not knowing what to do, he called his mother.", "Don't knowing what to do, he called his mother."], a: 0, ex: "Négation : not + -ing." }
  ]
},
{
  id: 51, level: "C1", icon: "sliders-horizontal",
  title: "Les modaux en nuances",
  subtitle: "Needn't have, be bound to, may well, might as well…",
  body: `
<h2>Needn't have done ≠ didn't need to</h2>
<p><s-en>I needn't have bought bread.</s-en> → je l'ai acheté, mais c'était inutile.</p>
<p><s-en>I didn't need to buy bread.</s-en> → ce n'était pas nécessaire (et en général, je ne l'ai pas fait).</p>
<h2>La probabilité en finesse</h2>
<table>
<tr><th>Expression</th><th>Sens</th></tr>
<tr><td>be bound to</td><td>c'est sûr que : <i>It's bound to rain.</i></td></tr>
<tr><td>be likely to / unlikely to</td><td>il est probable / peu probable que</td></tr>
<tr><td>may well / might well</td><td>il est bien possible que : <i>You may well be right.</i></td></tr>
<tr><td>could hardly</td><td>pouvait à peine : <i>I could hardly believe it.</i></td></tr>
</table>
<h2>Might as well : autant…</h2>
<p><s-en>The bus has gone. We might as well walk.</s-en> (Autant y aller à pied.)</p>
<h2>Be to / be supposed to</h2>
<p><s-en>The Prime Minister is to visit Paris next week.</s-en> (prévu officiellement, style journalistique)</p>
<p><s-en>You're supposed to wear a helmet.</s-en> (on est censé)</p>
<h2>Would : l'habitude passée, avec nostalgie</h2>
<p><s-en>Every summer, we would spend hours on the beach.</s-en> (comme used to, mais seulement pour des actions)</p>
<div class="tip">Ces nuances sont typiques du C1 : on ne cherche plus seulement à être compris, mais à dire <b>exactement</b> ce qu'on pense, avec le bon degré de certitude.</div>
`,
  examples: [
    ["You needn't have waited for me.", "Tu n'avais pas besoin de m'attendre."],
    ["He's bound to find out.", "Il va forcément l'apprendre."],
    ["Prices are likely to rise.", "Les prix vont probablement augmenter."],
    ["We might as well go home.", "Autant rentrer à la maison."],
    ["You were supposed to call me!", "Tu étais censé m'appeler !"]
  ],
  quiz: [
    { q: "J'ai pris un parapluie, mais il n'a pas plu. « Je n'avais pas besoin de le prendre » :", o: ["I needn't have taken it.", "I mustn't have taken it.", "I didn't must take it."], a: 0, ex: "Action faite mais inutile → needn't have done." },
    { q: "« Elle va forcément être en retard » :", o: ["She's bound to be late.", "She's bound being late."], a: 0, ex: "Be bound to + verbe." },
    { q: "« Autant commencer maintenant » :", o: ["We might as well start now.", "We could well start now.", "We may as good start now."], a: 0, ex: "Might as well = autant." },
    { q: "« Tu es censée te reposer » :", o: ["You're supposing to rest.", "You're supposed to rest."], a: 1, ex: "Be supposed to." }
  ]
},
{
  id: 52, level: "C1", icon: "shirt",
  title: "Registre : passer du familier au soutenu",
  subtitle: "Nominalisation, mots latins et ton adapté.",
  body: `
<p>Au C1, on sait adapter son anglais à la situation : un message à une amie n'a pas le même ton qu'un email professionnel ou une lettre de motivation.</p>
<h2>Phrasal verbs (courant) → verbes latins (soutenu)</h2>
<table>
<tr><th>Courant</th><th>Soutenu</th></tr>
<tr><td>find out</td><td>discover, ascertain</td></tr>
<tr><td>put off</td><td>postpone</td></tr>
<tr><td>get</td><td>obtain, receive</td></tr>
<tr><td>look into</td><td>investigate</td></tr>
<tr><td>need</td><td>require</td></tr>
<tr><td>help</td><td>assist</td></tr>
<tr><td>ask for</td><td>request</td></tr>
<tr><td>go up</td><td>increase, rise</td></tr>
</table>
<div class="tip">Bonne nouvelle pour les francophones : les mots soutenus anglais viennent souvent du latin ou du français. <b>Postpone, require, assist</b> te paraîtront familiers !</div>
<h2>La nominalisation</h2>
<p>L'écrit formel transforme les verbes en noms :</p>
<p><s-en>They decided to close the factory, and this shocked everyone.</s-en></p>
<p>→ <s-en>The decision to close the factory came as a shock.</s-en></p>
<h2>Les autres marqueurs du registre soutenu</h2>
<ul>
<li>Pas de contractions : <b>do not</b>, <b>it is</b>.</li>
<li>Passif et tournures impersonnelles : <s-en>It has been suggested that…</s-en></li>
<li>Formules : <s-en>I am writing to enquire about…</s-en> · <s-en>I would be grateful if you could…</s-en> · <s-en>Please do not hesitate to contact me.</s-en></li>
</ul>
<div class="warn">Trop soutenu à l'oral, ça sonne froid ou comique. Dire « I shall ascertain the time » à une amie est aussi bizarre que « je vais m'enquérir de l'heure ».</div>
`,
  examples: [
    ["The meeting has been postponed until further notice.", "La réunion est reportée jusqu'à nouvel ordre."],
    ["I am writing to enquire about the position.", "Je vous écris pour me renseigner sur le poste."],
    ["I would be grateful if you could send me the details.", "Je vous serais reconnaissante de m'envoyer les détails."],
    ["Further information is available on request.", "Des informations complémentaires sont disponibles sur demande."],
    ["Can you find out when it starts?", "Tu peux te renseigner sur l'heure de début ?"]
  ],
  quiz: [
    { q: "Version soutenue de « put off the meeting » :", o: ["postpone the meeting", "put away the meeting", "delete the meeting"], a: 0, ex: "Put off = postpone." },
    { q: "Ouverture d'un email formel :", o: ["Hey! Just wanted to ask…", "I am writing to enquire about…"], a: 1, ex: "Formule standard d'un email professionnel." },
    { q: "Nominalisation de « They failed, and this surprised me » :", o: ["Their failure surprised me.", "They're failing surprised me."], a: 0, ex: "fail → failure." },
    { q: "Version soutenue de « We need more time » :", o: ["We require more time.", "We gotta have more time."], a: 0, ex: "Need → require." }
  ]
},
{
  id: 53, level: "C1", icon: "cloud-fog",
  title: "Nuancer son propos (hedging)",
  subtitle: "Donner son avis sans être catégorique.",
  body: `
<p>En anglais, surtout britannique, on évite les affirmations trop directes. Savoir <b>nuancer</b> te fera paraître à la fois plus polie et plus experte.</p>
<h2>Adoucir une affirmation</h2>
<ul>
<li><s-en>It seems that…</s-en> / <s-en>It would seem that…</s-en> (il semblerait que)</li>
<li><s-en>tend to</s-en> : <s-en>People tend to underestimate the risks.</s-en></li>
<li><s-en>arguably</s-en> : <s-en>It's arguably the best film of the decade.</s-en> (on peut dire que)</li>
<li><s-en>to some extent</s-en> / <s-en>to a certain degree</s-en> (dans une certaine mesure)</li>
<li><s-en>by and large</s-en> / <s-en>on the whole</s-en> (dans l'ensemble)</li>
<li><s-en>apparently</s-en>, <s-en>seemingly</s-en>, <s-en>presumably</s-en> (vraisemblablement)</li>
</ul>
<h2>Présenter son opinion avec précaution</h2>
<p><s-en>I'm inclined to think that…</s-en> · <s-en>I'd say that…</s-en> · <s-en>It could be argued that…</s-en> · <s-en>As far as I can tell…</s-en></p>
<h2>Exprimer un désaccord poliment</h2>
<p><s-en>I see your point, but…</s-en> · <s-en>I'm not entirely convinced.</s-en> · <s-en>I'd question that slightly.</s-en> · <s-en>That's true up to a point.</s-en></p>
<div class="tip">La litote britannique : <s-en>not bad</s-en> veut souvent dire « très bien », et <s-en>That's an interesting idea</s-en> peut vouloir dire « je ne suis pas d'accord ». Le ton compte autant que les mots !</div>
`,
  examples: [
    ["It would seem that the plan has failed.", "Il semblerait que le projet ait échoué."],
    ["Young people tend to read less than before.", "Les jeunes ont tendance à lire moins qu'avant."],
    ["I agree with you to some extent.", "Je suis d'accord avec toi dans une certaine mesure."],
    ["It could be argued that social media brings people together.", "On pourrait soutenir que les réseaux sociaux rapprochent les gens."],
    ["I'm not entirely convinced by that argument.", "Cet argument ne me convainc pas totalement."]
  ],
  quiz: [
    { q: "« Dans une certaine mesure » :", o: ["in some measure", "to some extent", "at some point"], a: 1, ex: "To some extent." },
    { q: "« Les gens ont tendance à oublier » :", o: ["People tend to forget.", "People have tendency forgetting."], a: 0, ex: "Tend to + verbe." },
    { q: "Façon polie de ne pas être d'accord :", o: ["You're wrong.", "I'm not entirely convinced."], a: 1, ex: "On nuance avec not entirely." },
    { q: "« On pourrait soutenir que… » :", o: ["It could be argued that…", "We can argue to…"], a: 0, ex: "Tournure impersonnelle : It could be argued that." }
  ]
},
{
  id: 54, level: "C1", icon: "speech",
  title: "Les mots du discours : well, mind you, to be fair…",
  subtitle: "Sonner naturelle à l'oral.",
  body: `
<p>Ce sont les petits mots qui structurent une conversation. Ils ne s'apprennent presque jamais à l'école, et pourtant, ce sont eux qui font sonner « natif ».</p>
<table>
<tr><th>Expression</th><th>Usage</th></tr>
<tr><td>Well…</td><td>réfléchir, nuancer, commencer une réponse</td></tr>
<tr><td>Mind you…</td><td>remarque, cela dit</td></tr>
<tr><td>Having said that…</td><td>ceci étant dit</td></tr>
<tr><td>To be fair…</td><td>pour être juste, il faut reconnaître que</td></tr>
<tr><td>Actually…</td><td>en fait (corriger, apporter une précision)</td></tr>
<tr><td>As it happens…</td><td>il se trouve que</td></tr>
<tr><td>Come to think of it…</td><td>maintenant que j'y pense</td></tr>
<tr><td>At the end of the day…</td><td>au bout du compte</td></tr>
<tr><td>Anyway…</td><td>bref, revenir au sujet</td></tr>
<tr><td>I mean…</td><td>je veux dire, enfin</td></tr>
<tr><td>sort of / kind of</td><td>un peu, genre</td></tr>
<tr><td>Fair enough.</td><td>d'accord, c'est juste</td></tr>
</table>
<h2>Gagner du temps (sans « euh »)</h2>
<p><s-en>That's a good question.</s-en> · <s-en>Let me think…</s-en> · <s-en>How can I put it?</s-en> · <s-en>What's the word…?</s-en></p>
<div class="tip">Le « euh » français trahit immédiatement l'accent. Les anglophones disent <b>« um »</b> ou <b>« er »</b>, ou utilisent « well… » et « you know… ». Entraîne-toi à remplacer tes « euh » !</div>
<h2>Exemple</h2>
<p><s-en>The hotel was a bit expensive. Mind you, the view was incredible. And, to be fair, the staff were lovely. So, at the end of the day, I'd go back.</s-en></p>
`,
  examples: [
    ["Well, it depends.", "Eh bien, ça dépend."],
    ["It's expensive. Mind you, it's very good quality.", "C'est cher. Remarque, c'est de très bonne qualité."],
    ["To be fair, he did apologise.", "Pour être juste, il s'est excusé."],
    ["Come to think of it, I haven't seen her for months.", "Maintenant que j'y pense, je ne l'ai pas vue depuis des mois."],
    ["I can't come tonight. — Fair enough.", "Je ne peux pas venir ce soir. — D'accord, pas de souci."]
  ],
  quiz: [
    { q: "« Remarque, cela dit… » :", o: ["Mind you…", "Remark…", "Say that…"], a: 0, ex: "Mind you = remarque, cela dit." },
    { q: "« Maintenant que j'y pense » :", o: ["Now that I think…", "Come to think of it…"], a: 1, ex: "Expression figée : come to think of it." },
    { q: "Ton ami ne peut pas venir pour une bonne raison. Tu réponds :", o: ["Fair enough.", "That's fair play."], a: 0, ex: "Fair enough = d'accord, je comprends." },
    { q: "Pour gagner du temps à l'oral, plutôt :", o: ["« Euh… »", "« Well… let me think. »"], a: 1, ex: "Well / let me think sonnent naturels en anglais." }
  ]
}
);
