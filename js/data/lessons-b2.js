/* Leçons B2 : 35 à 44. */
window.LESSONS.push(
{
  id: 35, level: "B2", icon: "shuffle",
  title: "If I had known… : 3ᵉ conditionnel et conditionnels mixtes",
  subtitle: "Imaginer un passé différent.",
  body: `
<h2>Le troisième conditionnel : les regrets, le passé imaginaire</h2>
<p><b>If + past perfect, would have + participe passé</b></p>
<p><s-en>If I had known, I would have come.</s-en> (Si j'avais su, je serais venue.)</p>
<p><s-en>If we hadn't missed the train, we wouldn't have been late.</s-en></p>
<div class="tip">À l'oral, tout se contracte : <s-en>If I'd known, I'd have come.</s-en> Le premier <b>'d</b> = had, le second = would. « would have » se prononce souvent « would've » (« woud-uv »).</div>
<h2>Could have / might have</h2>
<p><s-en>If you had asked me, I could have helped you.</s-en> (j'aurais pu t'aider)</p>
<p><s-en>If she had left earlier, she might have caught the bus.</s-en> (elle aurait peut-être eu le bus)</p>
<h2>Les conditionnels mixtes</h2>
<p>On mélange passé et présent quand une condition passée a une conséquence <b>aujourd'hui</b> :</p>
<p><s-en>If I had studied medicine, I would be a doctor now.</s-en> (passé → présent)</p>
<p>Ou une caractéristique permanente qui a eu une conséquence passée :</p>
<p><s-en>If I weren't so shy, I would have spoken to him.</s-en> (présent → passé)</p>
<table>
<tr><th>Type</th><th>Structure</th><th>Exemple</th></tr>
<tr><td>1ᵉʳ</td><td>If + présent, will</td><td>If it rains, I'll stay.</td></tr>
<tr><td>2ᵉ</td><td>If + prétérit, would</td><td>If it rained, I'd stay.</td></tr>
<tr><td>3ᵉ</td><td>If + had done, would have done</td><td>If it had rained, I'd have stayed.</td></tr>
<tr><td>mixte</td><td>If + had done, would + verbe</td><td>If I'd slept, I wouldn't be tired.</td></tr>
</table>
`,
  examples: [
    ["If I'd known, I would have told you.", "Si j'avais su, je te l'aurais dit."],
    ["We would have won if he hadn't been injured.", "Nous aurions gagné s'il ne s'était pas blessé."],
    ["If you had called me, I could have picked you up.", "Si tu m'avais appelée, j'aurais pu venir te chercher."],
    ["If I had saved money, I'd be on holiday now.", "Si j'avais économisé, je serais en vacances maintenant."],
    ["What would you have done?", "Qu'est-ce que tu aurais fait ?"]
  ],
  quiz: [
    { q: "« Si j'avais su, je serais venue » :", o: ["If I knew, I would come.", "If I had known, I would have come.", "If I would have known, I had come."], a: 1, ex: "3ᵉ conditionnel : If + had + participe, would have + participe." },
    { q: "« Si tu m'avais demandé, j'aurais pu t'aider » :", o: ["If you had asked, I could have helped.", "If you asked, I could help.", "If you had asked, I can have helped."], a: 0, ex: "Could have + participe = aurais pu." },
    { q: "« Si j'avais pris le parapluie, je ne serais pas trempée maintenant » :", o: ["If I had taken the umbrella, I wouldn't be wet now.", "If I took the umbrella, I wouldn't have been wet now."], a: 0, ex: "Condition passée, conséquence présente → conditionnel mixte." },
    { q: "Dans « If I'd known, I'd have come », le premier 'd vaut :", o: ["would", "had", "did"], a: 1, ex: "If I had known… I would have come." }
  ]
},
{
  id: 36, level: "B2", icon: "wand-sparkles",
  title: "I wish / If only",
  subtitle: "Exprimer un souhait, un regret, un agacement.",
  body: `
<h2>Un souhait sur le présent : wish + prétérit</h2>
<p><s-en>I wish I spoke English fluently.</s-en> (J'aimerais parler anglais couramment… mais ce n'est pas le cas.)</p>
<p><s-en>I wish I had more time.</s-en> · <s-en>I wish I were taller.</s-en> (were, comme après if)</p>
<h2>Un regret sur le passé : wish + past perfect</h2>
<p><s-en>I wish I hadn't said that.</s-en> (Je regrette d'avoir dit ça.)</p>
<p><s-en>I wish I had studied harder at school.</s-en></p>
<h2>Un agacement : wish + would</h2>
<p>Pour se plaindre du comportement de quelqu'un d'autre :</p>
<p><s-en>I wish you would stop interrupting me.</s-en> (J'aimerais bien que tu arrêtes de me couper la parole.)</p>
<p><s-en>I wish it would stop raining.</s-en></p>
<div class="warn">On ne dit pas « I wish I would » : pour soi-même, on utilise le prétérit ou <b>could</b>. <s-en>I wish I could come.</s-en> (J'aimerais pouvoir venir.)</div>
<h2>If only : plus fort, plus dramatique</h2>
<p><s-en>If only I had listened to you!</s-en> (Si seulement je t'avais écouté !)</p>
<div class="tip">Pour un souhait <b>réaliste</b> (pas un regret), on utilise <b>hope</b> : <s-en>I hope you feel better soon.</s-en> et pas « I wish you feel better ». Exception figée : <s-en>I wish you a merry Christmas.</s-en></div>
`,
  examples: [
    ["I wish I could speak Italian.", "J'aimerais savoir parler italien."],
    ["I wish I hadn't eaten so much.", "Je n'aurais pas dû manger autant."],
    ["I wish you were here.", "J'aimerais que tu sois là."],
    ["If only I had known!", "Si seulement j'avais su !"],
    ["I wish people would drive more carefully.", "J'aimerais que les gens conduisent plus prudemment."]
  ],
  quiz: [
    { q: "« J'aimerais habiter près de la mer » (ce n'est pas le cas) :", o: ["I wish I live near the sea.", "I wish I lived near the sea.", "I wish I would live near the sea."], a: 1, ex: "Souhait sur le présent → wish + prétérit." },
    { q: "« Je regrette d'être partie » :", o: ["I wish I didn't leave.", "I wish I hadn't left.", "I wish I wouldn't leave."], a: 1, ex: "Regret sur le passé → wish + past perfect." },
    { q: "« J'aimerais que tu arrêtes de crier » :", o: ["I wish you would stop shouting.", "I wish you stop shouting.", "I hope you stopped shouting."], a: 0, ex: "Agacement envers quelqu'un → wish + would." },
    { q: "« J'espère que tu vas bien » :", o: ["I wish you're well.", "I hope you're well."], a: 1, ex: "Souhait réaliste → hope." }
  ]
},
{
  id: 37, level: "B2", icon: "search",
  title: "Should have, must have, could have",
  subtitle: "Les modaux au passé : reproches, regrets, déductions.",
  body: `
<p>Structure commune : <b>modal + have + participe passé</b>.</p>
<table>
<tr><th>Forme</th><th>Sens</th><th>Exemple</th></tr>
<tr><td>should have done</td><td>aurait dû (reproche, regret)</td><td>You should have told me.</td></tr>
<tr><td>shouldn't have done</td><td>n'aurait pas dû</td><td>I shouldn't have eaten that.</td></tr>
<tr><td>must have done</td><td>a dû (déduction quasi certaine)</td><td>She must have missed the bus.</td></tr>
<tr><td>can't have done</td><td>n'a pas pu (impossible)</td><td>He can't have finished already!</td></tr>
<tr><td>might / may have done</td><td>a peut-être</td><td>They might have got lost.</td></tr>
<tr><td>could have done</td><td>aurait pu (possibilité non réalisée)</td><td>You could have been killed!</td></tr>
</table>
<div class="warn">« Il a dû oublier » est ambigu en français. Déduction → <s-en>He must have forgotten.</s-en> Obligation passée → <s-en>He had to leave.</s-en> (il a été obligé de partir).</div>
<h2>La prononciation</h2>
<p>À l'oral, <b>have</b> se réduit à « uv » : <s-en>should've</s-en>, <s-en>must've</s-en>, <s-en>could've</s-en>.</p>
<div class="tip">Même beaucoup de natifs écrivent par erreur « should of » parce que ça sonne pareil. La forme correcte est toujours <b>should have</b>.</div>
`,
  examples: [
    ["You should have called me!", "Tu aurais dû m'appeler !"],
    ["I shouldn't have said that.", "Je n'aurais pas dû dire ça."],
    ["She must have been exhausted.", "Elle devait être épuisée."],
    ["They can't have left already.", "Ils ne peuvent pas être déjà partis."],
    ["He might have forgotten.", "Il a peut-être oublié."],
    ["It could have been worse.", "Ça aurait pu être pire."]
  ],
  quiz: [
    { q: "« Tu aurais dû me prévenir » :", o: ["You must have warned me.", "You should have warned me.", "You should warned me."], a: 1, ex: "Reproche → should have + participe." },
    { q: "Ses lumières sont éteintes. « Elle a dû partir » :", o: ["She must have left.", "She had to leave.", "She should have left."], a: 0, ex: "Déduction → must have." },
    { q: "« Il n'a pas pu finir si vite ! » :", o: ["He mustn't have finished so fast!", "He can't have finished so fast!"], a: 1, ex: "Impossibilité → can't have." },
    { q: "« Ça aurait pu être pire » :", o: ["It could have been worse.", "It could be worse yesterday.", "It must have been worse."], a: 0, ex: "Possibilité non réalisée → could have." }
  ]
},
{
  id: 38, level: "B2", icon: "telescope",
  title: "Le futur continu et le futur antérieur",
  subtitle: "This time tomorrow… / By 2030…",
  body: `
<h2>Le futur continu : will be + -ing</h2>
<p>Une action <b>en cours</b> à un moment du futur :</p>
<p><s-en>This time tomorrow, I'll be flying to New York.</s-en> (Demain à la même heure, je serai dans l'avion.)</p>
<p>Il sert aussi à demander poliment les projets de quelqu'un : <s-en>Will you be using the car tonight?</s-en></p>
<h2>Le futur antérieur : will have + participe passé</h2>
<p>Une action <b>terminée avant</b> un moment du futur, souvent avec <b>by</b> (d'ici, avant) :</p>
<p><s-en>By 2030, I will have reached C1.</s-en> (D'ici 2030, j'aurai atteint le C1.)</p>
<p><s-en>Don't call at six, I won't have finished.</s-en></p>
<h2>Le futur antérieur continu (bonus)</h2>
<p>Pour insister sur la durée à un moment futur :</p>
<p><s-en>In June, I'll have been learning English for two years.</s-en></p>
<div class="tip"><b>by</b> = au plus tard, d'ici. <b>until</b> = jusqu'à (durée). <s-en>I'll finish by Friday.</s-en> ≠ <s-en>I'll work until Friday.</s-en></div>
`,
  examples: [
    ["I'll be working all day tomorrow.", "Je travaillerai toute la journée demain."],
    ["This time next week, we'll be lying on the beach.", "La semaine prochaine à cette heure-ci, on sera allongés sur la plage."],
    ["By the end of the year, I'll have read twenty books.", "D'ici la fin de l'année, j'aurai lu vingt livres."],
    ["Will you be coming to the party?", "Tu viendras à la fête ?"],
    ["The film will have started by the time we arrive.", "Le film aura commencé quand nous arriverons."]
  ],
  quiz: [
    { q: "« Demain à 10 h, je serai en train de passer mon examen » :", o: ["Tomorrow at 10, I'll take my exam.", "Tomorrow at 10, I'll be taking my exam."], a: 1, ex: "En cours à un moment futur → will be + -ing." },
    { q: "« D'ici juin, j'aurai fini » :", o: ["By June, I'll have finished.", "Until June, I'll finish.", "By June, I'll finish."], a: 0, ex: "Terminé avant un moment futur → will have + participe." },
    { q: "« Je dois rendre le rapport d'ici vendredi » :", o: ["I must hand in the report until Friday.", "I must hand in the report by Friday."], a: 1, ex: "Date limite → by." },
    { q: "« Est-ce que tu utiliseras l'ordinateur ce soir ? » (demande polie) :", o: ["Will you be using the computer tonight?", "Are you use the computer tonight?"], a: 0, ex: "Futur continu = question polie sur les projets." }
  ]
},
{
  id: 39, level: "B2", icon: "scissors",
  title: "Le passif avancé : it is said that, have something done",
  subtitle: "Rapporter des rumeurs et faire faire.",
  body: `
<h2>It is said that… / He is said to…</h2>
<p>Pour rapporter ce que « les gens » disent ou pensent, surtout dans les médias :</p>
<p><s-en>It is said that the castle is haunted.</s-en> = <s-en>The castle is said to be haunted.</s-en> (On dit que le château est hanté.)</p>
<p>Verbes courants : <b>say, believe, think, know, expect, report, consider</b>.</p>
<p>Pour le passé : <s-en>He is believed to have left the country.</s-en> (On pense qu'il a quitté le pays.)</p>
<h2>Have / get something done : faire faire</h2>
<p>Quand <b>quelqu'un d'autre</b> fait l'action pour toi :</p>
<p><s-en>I had my hair cut.</s-en> (Je me suis fait couper les cheveux.)</p>
<p><s-en>We're having the kitchen painted.</s-en> (On fait repeindre la cuisine.)</p>
<p><s-en>I need to get my car repaired.</s-en> (<b>get</b> est plus familier)</p>
<div class="warn">« I cut my hair » = je me suis coupé les cheveux <b>moi-même</b>. Pour le coiffeur : <s-en>I had my hair cut.</s-en></div>
<p>Attention, la même structure sert aussi pour les mauvaises surprises : <s-en>She had her bag stolen.</s-en> (On lui a volé son sac.)</p>
`,
  examples: [
    ["The restaurant is said to be the best in town.", "On dit que ce restaurant est le meilleur de la ville."],
    ["It is believed that he is still alive.", "On pense qu'il est toujours vivant."],
    ["I'm having my hair cut tomorrow.", "Je vais chez le coiffeur demain."],
    ["We had a new kitchen installed.", "Nous avons fait installer une nouvelle cuisine."],
    ["He had his phone stolen on the bus.", "On lui a volé son téléphone dans le bus."]
  ],
  quiz: [
    { q: "« Je me suis fait couper les cheveux » :", o: ["I cut my hair.", "I had my hair cut.", "I had cut my hair."], a: 1, ex: "Faire faire → have + objet + participe passé." },
    { q: "« On dit qu'il est très riche » :", o: ["He is said to be very rich.", "He says to be very rich.", "It says he is very rich."], a: 0, ex: "Be said to + verbe." },
    { q: "« Je dois faire réparer ma voiture » :", o: ["I must repair my car.", "I must get my car repaired.", "I must get repaired my car."], a: 1, ex: "Get + objet + participe passé." },
    { q: "« On lui a volé son vélo » :", o: ["He had his bike stolen.", "He stole his bike.", "He had stolen his bike."], a: 0, ex: "Have something done marche aussi pour les mauvaises surprises." }
  ]
},
{
  id: 40, level: "B2", icon: "drama",
  title: "Remember doing ou remember to do ?",
  subtitle: "Quand -ing et to changent le sens.",
  body: `
<p>Avec certains verbes, <b>-ing</b> et <b>to</b> sont tous les deux possibles… mais ne veulent pas dire la même chose.</p>
<table>
<tr><th>Verbe</th><th>+ -ing</th><th>+ to</th></tr>
<tr><td>remember</td><td>se souvenir d'avoir fait<br>I remember meeting her.</td><td>penser à faire<br>Remember to lock the door.</td></tr>
<tr><td>forget</td><td>oublier avoir fait<br>I'll never forget seeing the sea.</td><td>oublier de faire<br>I forgot to call him.</td></tr>
<tr><td>stop</td><td>arrêter de<br>I stopped smoking.</td><td>s'arrêter pour<br>I stopped to smoke.</td></tr>
<tr><td>try</td><td>essayer (pour voir)<br>Try restarting the computer.</td><td>s'efforcer de<br>I tried to open the door, but it was locked.</td></tr>
<tr><td>regret</td><td>regretter d'avoir fait<br>I regret saying that.</td><td>avoir le regret de (formel)<br>We regret to inform you…</td></tr>
<tr><td>go on</td><td>continuer la même chose<br>She went on talking.</td><td>passer à autre chose<br>She went on to become a doctor.</td></tr>
<tr><td>mean</td><td>impliquer<br>It means waiting.</td><td>avoir l'intention de<br>I didn't mean to hurt you.</td></tr>
</table>
<div class="tip">Repère général : <b>-ing</b> regarde souvent vers une action <b>déjà faite ou en cours</b>, <b>to</b> vers une action <b>à faire</b>.</div>
`,
  examples: [
    ["Remember to buy bread!", "Pense à acheter du pain !"],
    ["I remember going there as a child.", "Je me souviens d'y être allée enfant."],
    ["He stopped to check his phone.", "Il s'est arrêté pour regarder son téléphone."],
    ["I've stopped eating sugar.", "J'ai arrêté de manger du sucre."],
    ["Try adding a bit of salt.", "Essaie d'ajouter un peu de sel."],
    ["Sorry, I didn't mean to wake you.", "Pardon, je ne voulais pas te réveiller."]
  ],
  quiz: [
    { q: "« J'ai oublié de fermer la fenêtre » :", o: ["I forgot closing the window.", "I forgot to close the window."], a: 1, ex: "Oublier de faire → forget to." },
    { q: "« Il a arrêté de boire » :", o: ["He stopped drinking.", "He stopped to drink."], a: 0, ex: "Arrêter une activité → stop + -ing. (stop to drink = s'arrêter pour boire)" },
    { q: "« Je me souviens de l'avoir rencontré » :", o: ["I remember to meet him.", "I remember meeting him."], a: 1, ex: "Se souvenir d'une action passée → remember + -ing." },
    { q: "« Je ne voulais pas te vexer » :", o: ["I didn't mean upsetting you.", "I didn't mean to upset you."], a: 1, ex: "Avoir l'intention → mean to." }
  ]
},
{
  id: 41, level: "B2", icon: "list-tree",
  title: "Les relatives avancées",
  subtitle: "Virgules, which, et relatives raccourcies.",
  body: `
<h2>Déterminatives ou explicatives ?</h2>
<ul>
<li><b>Déterminative</b> (sans virgule) : l'information est nécessaire pour savoir de qui on parle. <s-en>The students who passed the exam were happy.</s-en> (seulement ceux qui ont réussi)</li>
<li><b>Explicative</b> (avec virgules) : information en plus. <s-en>My sister, who lives in Leeds, is a nurse.</s-en> (je n'ai qu'une sœur)</li>
</ul>
<div class="warn">Dans une relative explicative (entre virgules), on ne peut <b>ni utiliser « that », ni supprimer le pronom</b>. <s-en>My car, which is ten years old, still works.</s-en></div>
<h2>Which pour reprendre toute une phrase</h2>
<p>« Ce qui » se dit <b>which</b> quand il reprend l'idée précédente :</p>
<p><s-en>He was late again, which annoyed everyone.</s-en> (ce qui a agacé tout le monde)</p>
<p>Et « ce que / ce qui » en début ou milieu de phrase se dit <b>what</b> : <s-en>What I need is a holiday.</s-en></p>
<h2>Les relatives raccourcies</h2>
<p>On peut supprimer <b>who/which + be</b> :</p>
<p><s-en>The man (who is) standing by the door is my boss.</s-en></p>
<p><s-en>The paintings (which were) stolen last year were never found.</s-en></p>
<h2>Style formel : préposition + whom / which</h2>
<p><s-en>The person to whom I spoke was very helpful.</s-en> (formel) = <s-en>The person I spoke to was very helpful.</s-en> (courant)</p>
`,
  examples: [
    ["My brother, who lives in Canada, is visiting next week.", "Mon frère, qui vit au Canada, vient la semaine prochaine."],
    ["She didn't call, which was strange.", "Elle n'a pas appelé, ce qui était bizarre."],
    ["What I love about London is the parks.", "Ce que j'adore à Londres, ce sont les parcs."],
    ["The woman sitting next to me was French.", "La femme assise à côté de moi était française."],
    ["The house, which was built in 1700, is now a museum.", "La maison, construite en 1700, est aujourd'hui un musée."]
  ],
  quiz: [
    { q: "« Il a raté le train, ce qui l'a mis en retard » :", o: ["He missed the train, what made him late.", "He missed the train, which made him late.", "He missed the train, that made him late."], a: 1, ex: "Which reprend toute la proposition précédente." },
    { q: "« Ce dont j'ai besoin, c'est de dormir » :", o: ["Which I need is sleep.", "What I need is sleep.", "That I need is sleep."], a: 1, ex: "Ce que / ce dont en tête de phrase → what." },
    { q: "Laquelle est correcte ?", o: ["Paris, that is the capital, is beautiful.", "Paris, which is the capital, is beautiful."], a: 1, ex: "Entre virgules → pas de that." },
    { q: "Version raccourcie de « the girl who is talking to Tom » :", o: ["the girl talking to Tom", "the girl talks to Tom", "the girl talked to Tom"], a: 0, ex: "On supprime who + is." }
  ]
},
{
  id: 42, level: "B2", icon: "route",
  title: "Les connecteurs : although, despite, however, whereas",
  subtitle: "Structurer sa pensée, à l'oral comme à l'écrit.",
  body: `
<h2>L'opposition (le plus piégeux)</h2>
<table>
<tr><th>Connecteur</th><th>Suivi de</th><th>Exemple</th></tr>
<tr><td>although / even though</td><td>une phrase</td><td>Although it was raining, we went out.</td></tr>
<tr><td>despite / in spite of</td><td>un nom ou -ing</td><td>Despite the rain, we went out.</td></tr>
<tr><td>however</td><td>nouvelle phrase, + virgule</td><td>It was raining. However, we went out.</td></tr>
<tr><td>whereas / while</td><td>contraste entre deux choses</td><td>I love tea, whereas my husband prefers coffee.</td></tr>
</table>
<div class="warn">On dit <b>despite</b> ou <b>in spite of</b>, jamais « despite of ». Et despite n'est pas suivi d'une phrase : <s-en>despite being tired</s-en> ou <s-en>despite the fact that she was tired</s-en>.</div>
<h2>La cause</h2>
<p><b>because</b> (+ phrase), <b>because of / due to</b> (+ nom), <b>since / as</b> (puisque) :</p>
<p><s-en>The flight was cancelled due to bad weather.</s-en> · <s-en>As it's late, I'll take a taxi.</s-en></p>
<h2>La conséquence</h2>
<p><b>so</b> (courant), <b>therefore</b>, <b>as a result</b>, <b>consequently</b> (plus formel) :</p>
<p><s-en>Prices went up. As a result, sales fell.</s-en></p>
<h2>L'ajout</h2>
<p><b>also, moreover, furthermore, what's more, besides</b> :</p>
<p><s-en>The flat is too small. Besides, it's too expensive.</s-en></p>
<h2>Le but</h2>
<p><b>to / in order to</b> (+ verbe), <b>so that</b> (+ phrase) : <s-en>I'm saving money so that I can travel.</s-en></p>
`,
  examples: [
    ["Although I was tired, I finished the book.", "Bien que fatiguée, j'ai fini le livre."],
    ["Despite the traffic, we arrived on time.", "Malgré la circulation, nous sommes arrivés à l'heure."],
    ["The plan is good. However, it's expensive.", "Le projet est bon. Cependant, il coûte cher."],
    ["She's very outgoing, whereas her sister is shy.", "Elle est très extravertie, alors que sa sœur est timide."],
    ["I'm learning English in order to work abroad.", "J'apprends l'anglais pour travailler à l'étranger."]
  ],
  quiz: [
    { q: "« Malgré la pluie » :", o: ["despite of the rain", "despite the rain", "although the rain"], a: 1, ex: "Despite + nom, sans « of »." },
    { q: "« Bien qu'il soit riche, il n'est pas heureux » :", o: ["Despite he is rich, he isn't happy.", "Although he's rich, he isn't happy."], a: 1, ex: "Une phrase complète → although." },
    { q: "« Le vol a été annulé à cause du brouillard » :", o: ["The flight was cancelled because the fog.", "The flight was cancelled due to the fog."], a: 1, ex: "Due to / because of + nom." },
    { q: "Lequel est le plus formel pour la conséquence ?", o: ["so", "therefore"], a: 1, ex: "Therefore est plus formel que so." },
    { q: "« J'économise pour pouvoir voyager » :", o: ["I'm saving so that I can travel.", "I'm saving for that I can travel.", "I'm saving for can travel."], a: 0, ex: "But + phrase → so that." }
  ]
},
{
  id: 43, level: "B2", icon: "scale",
  title: "Each, every, both, either, neither",
  subtitle: "Les déterminants qu'on mélange souvent.",
  body: `
<h2>Each ou every ?</h2>
<ul>
<li><b>every</b> : tous, vus comme un groupe (3 ou plus) : <s-en>Every student passed.</s-en></li>
<li><b>each</b> : chacun, pris un par un (2 ou plus) : <s-en>Each student got a certificate.</s-en></li>
</ul>
<p>Tous deux sont suivis d'un nom <b>singulier</b> et d'un verbe au singulier.</p>
<h2>Both, either, neither (pour deux choses)</h2>
<table>
<tr><th>Mot</th><th>Sens</th><th>Exemple</th></tr>
<tr><td>both</td><td>les deux</td><td>Both options are good.</td></tr>
<tr><td>either</td><td>l'un ou l'autre</td><td>You can take either bus.</td></tr>
<tr><td>neither</td><td>ni l'un ni l'autre</td><td>Neither answer is correct.</td></tr>
</table>
<p><s-en>both… and</s-en> · <s-en>either… or</s-en> · <s-en>neither… nor</s-en></p>
<p><s-en>She speaks both English and Spanish.</s-en> · <s-en>We can either walk or take a taxi.</s-en> · <s-en>Neither Tom nor Anna came.</s-en></p>
<div class="warn">Pas de double négation : « je n'aime ni l'un ni l'autre » → <s-en>I like neither of them.</s-en> ou <s-en>I don't like either of them.</s-en> (jamais « I don't like neither »).</div>
<h2>All, whole, none</h2>
<p><s-en>all day</s-en> = <s-en>the whole day</s-en> (toute la journée) · <s-en>None of my friends came.</s-en> (aucun)</p>
`,
  examples: [
    ["I go running every morning.", "Je cours tous les matins."],
    ["Each room has its own bathroom.", "Chaque chambre a sa propre salle de bain."],
    ["Both of my parents are teachers.", "Mes deux parents sont profs."],
    ["Either day is fine for me.", "L'un ou l'autre jour me va."],
    ["Neither of us knew the answer.", "Aucun de nous deux ne connaissait la réponse."],
    ["I spent the whole weekend reading.", "J'ai passé tout le week-end à lire."]
  ],
  quiz: [
    { q: "« Chaque enfant a reçu un cadeau » :", o: ["Each children got a present.", "Each child got a present.", "Every children got a present."], a: 1, ex: "Each + nom singulier." },
    { q: "« Ni Paul ni Marie ne sont venus » :", o: ["Neither Paul or Marie came.", "Neither Paul nor Marie came.", "Either Paul nor Marie came."], a: 1, ex: "Neither… nor." },
    { q: "« Je n'aime aucun des deux » :", o: ["I don't like neither of them.", "I don't like either of them."], a: 1, ex: "Avec don't → either (pas de double négation)." },
    { q: "« Elle parle les deux langues » :", o: ["She speaks both languages.", "She speaks either languages.", "She speaks the both languages."], a: 0, ex: "Both + pluriel." }
  ]
},
{
  id: 44, level: "B2", icon: "megaphone",
  title: "Suggest, admit, deny… : les verbes pour rapporter",
  subtitle: "Aller au-delà de « say » et « tell ».",
  body: `
<p>Au lieu de répéter « he said », on choisit un verbe qui résume l'intention. Chaque verbe a sa construction : c'est elle qu'il faut retenir.</p>
<table>
<tr><th>Construction</th><th>Verbes</th><th>Exemple</th></tr>
<tr><td>verbe + to + verbe</td><td>agree, offer, promise, refuse, threaten</td><td>She refused to answer.</td></tr>
<tr><td>verbe + personne + to + verbe</td><td>advise, encourage, invite, remind, warn, persuade</td><td>He reminded me to call her.</td></tr>
<tr><td>verbe + -ing</td><td>admit, deny, suggest, recommend</td><td>He denied taking the money.</td></tr>
<tr><td>verbe + préposition + -ing</td><td>apologise for, insist on, accuse sb of, blame sb for</td><td>She apologised for being late.</td></tr>
</table>
<h2>Le piège : suggest</h2>
<p>On ne dit jamais « suggest me to » ni « suggest to do » :</p>
<p><s-en>I suggest going by train.</s-en> · <s-en>I suggest (that) we go by train.</s-en> · <s-en>She suggested (that) I should rest.</s-en></p>
<div class="warn">Même règle pour <b>recommend</b> : <s-en>I recommend booking early.</s-en> et non « I recommend you to book ».</div>
<h2>Explain : toujours « to » devant la personne</h2>
<p><s-en>Can you explain it to me?</s-en> et jamais « explain me ».</p>
`,
  examples: [
    ["He offered to drive me home.", "Il m'a proposé de me raccompagner."],
    ["She warned me not to go there alone.", "Elle m'a prévenue de ne pas y aller seule."],
    ["He admitted making a mistake.", "Il a reconnu avoir fait une erreur."],
    ["I suggest we meet on Monday.", "Je propose qu'on se voie lundi."],
    ["They accused him of lying.", "Ils l'ont accusé de mentir."],
    ["Could you explain the rule to me?", "Pourrais-tu m'expliquer la règle ?"]
  ],
  quiz: [
    { q: "« Il a nié avoir volé la voiture » :", o: ["He denied to steal the car.", "He denied stealing the car."], a: 1, ex: "Deny + -ing." },
    { q: "« Je te suggère de réserver » :", o: ["I suggest you to book.", "I suggest you book.", "I suggest to book."], a: 1, ex: "Suggest (that) + sujet + verbe." },
    { q: "« Elle s'est excusée d'être en retard » :", o: ["She apologised to be late.", "She apologised for being late."], a: 1, ex: "Apologise for + -ing." },
    { q: "« Explique-moi » :", o: ["Explain me.", "Explain it to me."], a: 1, ex: "Explain something to someone." },
    { q: "« Il m'a rappelé de fermer la porte » :", o: ["He reminded me to lock the door.", "He reminded me locking the door.", "He remembered me to lock the door."], a: 0, ex: "Remind + personne + to." }
  ]
}
);
