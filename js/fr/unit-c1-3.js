/* Cours de français, unité C1-3 « Cities and regions / Villes et territoires » : l'inversion du sujet (à peine… que,
   sans doute, aussi, encore faut-il, inversion stylistique), les adjectifs qui changent de sens selon leur place,
   prendre la parole en réunion publique. Personnages fictifs, prénoms français. Faits vérifiables seulement :
   programme Action cœur de ville lancé en 2018 pour plus de deux cents villes moyennes ; étude de 2022 (PUCA / POPSU)
   concluant à l'absence d'exode urbain massif après 2020 ; loi Climat et résilience de 2021, objectif « zéro
   artificialisation nette » en 2050 ; la ville du quart d'heure, concept popularisé par l'urbaniste Carlos Moreno. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "urbanismeFR", icon: "building-2", title: "Town planning", title_fr: "L'urbanisme", level: "C1", words: [
    ["l'urbanisme", "town planning", "Elle a fait des études d'urbanisme."],
    ["l'aménagement du territoire", "regional planning", "L'aménagement du territoire relève en partie de l'État."],
    ["la métropole", "the major city, the metropolis", "Les métropoles attirent les jeunes diplômés."],
    ["la périphérie", "the outskirts", "Les grandes surfaces se sont installées en périphérie."],
    ["la banlieue", "the suburbs", "Ils habitent en banlieue et travaillent à Paris."],
    ["la zone pavillonnaire", "the suburban housing estate", "Dans cette zone pavillonnaire, on ne peut rien faire sans voiture."],
    ["l'étalement urbain", "urban sprawl", "L'étalement urbain grignote les terres agricoles."],
    ["la densité", "density", "La densité de population est très forte au centre."],
    ["la mixité sociale", "social mix", "Le projet vise à favoriser la mixité sociale."],
    ["l'embourgeoisement", "gentrification", "L'embourgeoisement du quartier a fait grimper les loyers."],
    ["la rénovation urbaine", "urban renewal", "Ce quartier a bénéficié d'un programme de rénovation urbaine."],
    ["l'espace vert", "the green space", "Chaque habitant devrait avoir un espace vert à proximité."],
    ["la piétonnisation", "pedestrianisation", "La piétonnisation des quais a fait débat."],
    ["la rue piétonne", "the pedestrian street", "La rue piétonne est animée le samedi."],
    ["la voirie", "the road network, the roads department", "La voirie a été refaite cet été."],
    ["l'artificialisation des sols", "land take (turning land into built-up areas)", "Il faut freiner l'artificialisation des sols."],
    ["végétaliser", "to green, to plant with vegetation", "La ville veut végétaliser les cours d'école."],
    ["l'habitat", "housing, the way people live", "L'habitat collectif domine en ville."]
  ] },
  { id: "territoiresFR", icon: "map", title: "Regions and local life", title_fr: "Territoires et vie locale", level: "C1", words: [
    ["la ruralité", "rural life, rurality", "La ruralité n'est pas synonyme d'isolement."],
    ["le monde rural", "the countryside, rural areas", "Le monde rural manque de médecins."],
    ["la ville moyenne", "the medium-sized town", "Beaucoup de villes moyennes ont perdu leurs commerces."],
    ["la désertification", "depopulation (of the countryside)", "La désertification des campagnes inquiète les élus."],
    ["le désert médical", "the area short of doctors", "Ce canton est devenu un désert médical."],
    ["l'exode rural", "the rural exodus", "L'exode rural a vidé les villages au XXe siècle."],
    ["la commune", "the municipality", "La France compte près de 35 000 communes."],
    ["la collectivité locale", "the local authority", "Les collectivités locales financent les transports."],
    ["la décentralisation", "decentralisation", "La décentralisation a donné plus de pouvoir aux régions."],
    ["le conseil municipal", "the town council", "Le conseil municipal se réunit une fois par mois."],
    ["le maire / la maire", "the mayor (m) / (f)", "La maire a ouvert la séance."],
    ["l'intercommunalité", "the grouping of municipalities", "L'intercommunalité gère la collecte des déchets."],
    ["la fracture territoriale", "the regional divide", "La fracture territoriale nourrit un sentiment d'abandon."],
    ["enclavé", "isolated, cut off", "Cette vallée est restée longtemps enclavée."],
    ["revitaliser", "to revitalise", "Il faut revitaliser les centres-bourgs."],
    ["le néo-rural / la néo-rurale", "the city dweller who moved to the country (m) / (f)", "Les néo-ruraux ont rouvert l'épicerie du village."],
    ["le commerce de proximité", "the local shop", "Les commerces de proximité font vivre le quartier."],
    ["la concertation", "public consultation", "Le projet a fait l'objet d'une large concertation."]
  ] });

  W.LESSONS.push(
  {
    id: 111, level: "C1", icon: "shuffle",
    title: "À peine était-il arrivé que…: subject inversion in formal French", title_fr: "À peine était-il arrivé que… : l'inversion du sujet",
    subtitle: "After some adverbs, in relative clauses and after direct speech: when the subject moves after the verb.", subtitle_fr: "Après certains adverbes, dans les relatives et après le discours direct : quand le sujet passe après le verbe.",
    body: `
<h2>After some adverbs at the start of a sentence</h2>
<p><s-fr>à peine… que</s-fr>: <s-fr>À peine était-il arrivé que la réunion a commencé.</s-fr> · <s-fr>sans doute</s-fr>, <s-fr>peut-être</s-fr>: <s-fr>Sans doute a-t-il raison.</s-fr> · <s-fr>Peut-être viendra-t-elle.</s-fr></p>
<p><s-fr>aussi</s-fr> at the start means therefore: <s-fr>Les loyers explosent ; aussi faut-il construire.</s-fr> · <s-fr>encore</s-fr> means even so, still: <s-fr>Encore faut-il que les habitants soient d'accord.</s-fr> · <s-fr>ainsi</s-fr>: <s-fr>Ainsi s'achève la visite.</s-fr></p>
<h2>With a noun subject: complex inversion</h2>
<p>The noun stays first, and a pronoun is added after the verb: <s-fr>Sans doute la mairie a-t-elle raison.</s-fr> · <s-fr>Aussi la ville a-t-elle lancé un plan.</s-fr></p>
<h2>Stylistic inversion</h2>
<p>In relative and comparative clauses, to avoid ending on a short verb: <s-fr>la ville où vivent mes parents</s-fr> · <s-fr>le quartier que traverse la rivière</s-fr> · <s-fr>C'est plus cher que ne le pensent les habitants.</s-fr> After direct speech: <s-fr>Nous verrons, répondit la maire.</s-fr></p>
<div class="tip">In speech, you'll mostly hear <s-fr>peut-être que</s-fr> and <s-fr>sans doute que</s-fr> with normal word order. Inversion is a marker of formal writing. And <s-fr>aussi</s-fr> in the middle of a sentence still means also: no inversion then.</div>
`,
    examples: [
      ["À peine était-il arrivé que la réunion a commencé.", "He had barely arrived when the meeting started."],
      ["Sans doute a-t-elle raison.", "She's probably right."],
      ["Peut-être viendront-ils demain.", "Perhaps they'll come tomorrow."],
      ["Les loyers explosent ; aussi faut-il construire davantage.", "Rents are soaring; so we need to build more."],
      ["Encore faut-il que les habitants soient d'accord.", "Even so, the residents have to agree."],
      ["Sans doute la mairie a-t-elle raison.", "The town hall is probably right."],
      ["C'est la ville où vivent mes grands-parents.", "It's the town where my grandparents live."],
      ["C'est plus cher que ne le pensent les habitants.", "It's more expensive than the residents think."]
    ],
    quiz: [
      { q: "“He had barely left when it started to rain” is:", o: ["À peine était-il parti qu'il s'est mis à pleuvoir.", "À peine il était parti qu'il s'est mis à pleuvoir.", "À peine était-il parti quand il s'est mis à pleuvoir."], a: 0, ex: "à peine + inversion… que." },
      { q: "Aussi faut-il agir means:", o: ["So we must act.", "We must act too.", "We must also act soon."], a: 0, ex: "aussi at the start + inversion = therefore." },
      { q: "“The council is probably right” (formal) is:", o: ["Sans doute le conseil a-t-il raison.", "Sans doute le conseil a raison.", "Sans doute a le conseil raison."], a: 0, ex: "Complex inversion: noun + verb + pronoun." },
      { q: "Which is correct?", o: ["Peut-être viendra-t-elle.", "Peut-être elle viendra.", "Peut-être que viendra-t-elle."], a: 0, ex: "Inversion, or peut-être que + normal order." },
      { q: "Encore faut-il qu'il accepte means:", o: ["He still has to accept, though.", "He must accept again.", "He has accepted again."], a: 0, ex: "encore at the start = even so, still." }
    ]
  },
  {
    id: 112, level: "C1", icon: "arrow-left-right",
    title: "Un grand homme, un homme grand: adjectives that change meaning", title_fr: "Un grand homme, un homme grand : les adjectifs qui changent de sens",
    subtitle: "Before the noun, often figurative or subjective; after it, literal.", subtitle_fr: "Avant le nom, souvent figuré ou subjectif ; après, au sens propre.",
    body: `
<h2>Same adjective, two meanings</h2>
<table>
<tr><th>Before the noun</th><th>After the noun</th></tr>
<tr><td><s-fr>mon ancien quartier</s-fr> (former)</td><td><s-fr>une maison ancienne</s-fr> (old)</td></tr>
<tr><td><s-fr>un grand homme</s-fr> (great)</td><td><s-fr>un homme grand</s-fr> (tall)</td></tr>
<tr><td><s-fr>ma propre voiture</s-fr> (own)</td><td><s-fr>une voiture propre</s-fr> (clean)</td></tr>
<tr><td><s-fr>mon cher ami</s-fr> (dear)</td><td><s-fr>un quartier cher</s-fr> (expensive)</td></tr>
<tr><td><s-fr>le seul commerce</s-fr> (only)</td><td><s-fr>une femme seule</s-fr> (alone)</td></tr>
<tr><td><s-fr>un certain charme</s-fr> (a certain)</td><td><s-fr>un succès certain</s-fr> (definite)</td></tr>
<tr><td><s-fr>la même rue</s-fr> (same)</td><td><s-fr>le jour même</s-fr> (that very day)</td></tr>
<tr><td><s-fr>le pauvre homme</s-fr> (unfortunate)</td><td><s-fr>un homme pauvre</s-fr> (penniless)</td></tr>
<tr><td><s-fr>un simple employé</s-fr> (mere)</td><td><s-fr>une question simple</s-fr> (simple)</td></tr>
<tr><td><s-fr>différentes solutions</s-fr> (various)</td><td><s-fr>des avis différents</s-fr> (different)</td></tr>
</table>
<h2>Dernier and prochain</h2>
<p>With time words, after the noun: <s-fr>la semaine dernière</s-fr> (last week), <s-fr>le mois prochain</s-fr> (next month). Before the noun, in a series: <s-fr>la dernière semaine des vacances</s-fr>, <s-fr>la prochaine station</s-fr>.</p>
<div class="tip">Most French adjectives follow the noun. When one moves before it, it often takes a figurative, subjective or emphatic sense. In formal writing, this placement is a stylistic tool: <s-fr>une remarquable réussite</s-fr> sounds more emphatic than <s-fr>une réussite remarquable</s-fr>.</div>
`,
    examples: [
      ["J'ai retrouvé mon ancien quartier.", "I went back to my old neighbourhood (where I used to live)."],
      ["Ils ont acheté une maison ancienne.", "They bought an old house."],
      ["Elle a enfin sa propre voiture.", "She finally has her own car."],
      ["C'est le seul commerce du village.", "It's the only shop in the village."],
      ["Ce quartier a un certain charme.", "This neighbourhood has a certain charm."],
      ["Il a déménagé le jour même.", "He moved out that very day."],
      ["Je l'ai vue la semaine dernière.", "I saw her last week."],
      ["Descendez à la prochaine station.", "Get off at the next station."]
    ],
    quiz: [
      { q: "“My former boss” is:", o: ["mon ancien patron", "mon patron ancien", "mon vieux patron"], a: 0, ex: "ancien before the noun = former." },
      { q: "“Her own flat” is:", o: ["son propre appartement", "son appartement propre", "son appartement à elle-même"], a: 0, ex: "propre before the noun = own." },
      { q: "Un homme grand is:", o: ["a tall man", "a great man", "an old man"], a: 0, ex: "After the noun: literal sense." },
      { q: "“Last week” is:", o: ["la semaine dernière", "la dernière semaine", "la semaine passée dernière"], a: 0, ex: "With time words, dernier follows the noun." },
      { q: "“A mere employee” is:", o: ["un simple employé", "un employé simple", "un seul employé"], a: 0, ex: "simple before the noun = mere." }
    ]
  },
  {
    id: 113, level: "C1", kind: "functional", icon: "hand",
    title: "Everyday French: speaking up at a public meeting", title_fr: "Le français de tous les jours : prendre la parole en réunion publique",
    subtitle: "Ask for the floor, express a reservation, refocus the debate and make a proposal.", subtitle_fr: "Demander la parole, exprimer une réserve, recentrer le débat et faire une proposition.",
    body: `
<h2>Asking for the floor</h2>
<p><s-fr>Je voudrais intervenir sur ce point.</s-fr> · <s-fr>Si vous me permettez d'ajouter un mot…</s-fr> · <s-fr>Je me permets de réagir.</s-fr></p>
<h2>Saying where you speak from</h2>
<p><s-fr>Pour ma part, j'habite le quartier depuis dix ans.</s-fr> · <s-fr>Je parle ici au nom de l'association des parents d'élèves.</s-fr></p>
<h2>Expressing a reservation</h2>
<p><s-fr>J'ai quelques réserves sur…</s-fr> · <s-fr>Ce projet ne me convainc pas tout à fait.</s-fr> · <s-fr>Je m'interroge sur…</s-fr></p>
<h2>Refocusing the debate</h2>
<p><s-fr>Pour revenir à la question de départ…</s-fr> · <s-fr>Ce n'est pas tout à fait le sujet.</s-fr> · <s-fr>Recentrons le débat, si vous le voulez bien.</s-fr></p>
<h2>Proposing</h2>
<p><s-fr>Ne pourrait-on pas envisager… ?</s-fr> · <s-fr>Je suggère que</s-fr> + subjunctive · <s-fr>Une piste serait de…</s-fr></p>
<h2>Interrupting and keeping the floor</h2>
<p><s-fr>Pardon de vous interrompre, mais…</s-fr> · <s-fr>Permettez-moi de terminer.</s-fr> · <s-fr>Je vous laisse la parole.</s-fr></p>
<div class="tip">In a public meeting, a short, structured intervention carries more weight than a long one: who you are, your reservation, your proposal. Three sentences can be enough.</div>
`,
    examples: [
      ["Je voudrais intervenir sur ce point.", "I'd like to say something on this point."],
      ["Pour ma part, j'habite le quartier depuis dix ans.", "For my part, I've lived in the neighbourhood for ten years."],
      ["J'ai quelques réserves sur le calendrier.", "I have a few reservations about the timetable."],
      ["Pour revenir à la question de départ, que deviennent les places de parking ?", "To come back to the original question, what happens to the parking spaces?"],
      ["Ne pourrait-on pas envisager une période d'essai ?", "Couldn't we consider a trial period?"],
      ["Je suggère que nous en discutions avec les commerçants.", "I suggest we discuss it with the shopkeepers."],
      ["Permettez-moi de terminer.", "Allow me to finish."]
    ],
    quiz: [
      { q: "“I'd like to comment on this point” is:", o: ["Je voudrais intervenir sur ce point.", "Je voudrais intervenir à ce point.", "Je voudrais intervenir de ce point."], a: 0, ex: "intervenir sur un point." },
      { q: "“I suggest we vote” is:", o: ["Je suggère que nous votions.", "Je suggère que nous votons.", "Je suggère de nous voter."], a: 0, ex: "suggérer que + subjunctive." },
      { q: "To refocus a debate, you say:", o: ["Pour revenir à la question de départ…", "Je vous laisse la parole.", "Permettez-moi de terminer."], a: 0, ex: "Back to the original question." },
      { q: "“Couldn't we consider…?” is:", o: ["Ne pourrait-on pas envisager… ?", "Ne pourrait pas-on envisager… ?", "On ne pourrait envisager pas… ?"], a: 0, ex: "Inversion in the question: pourrait-on." },
      { q: "A strong intervention in a public meeting is:", o: ["short and structured", "as long as possible", "a list of complaints"], a: 0, ex: "Who you are, your reservation, your proposal." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    111: {
      gap: [["À peine ___-il arrivé que la réunion a commencé. (être, imperfect)", "était"], ["Sans doute ___-t-il raison. (avoir)", "a"], ["Peut-être ___-t-elle demain. (venir, future)", "viendra"], ["___ faut-il que les habitants soient d'accord. (even so)", "Encore"]],
      fix: [["Peut-être elle viendra demain.", "Peut-être viendra-t-elle demain.|Peut-être qu'elle viendra demain.", "After peut-être at the start: inversion, or peut-être que."], ["Sans doute la mairie a raison.", "Sans doute la mairie a-t-elle raison.|La mairie a sans doute raison.", "With a noun subject: complex inversion (la mairie a-t-elle), or move sans doute."]],
      task: ["Write four sentences about a new tram line, with à peine… que, sans doute, aussi (= therefore) and encore faut-il.", "Écris quatre phrases sur une nouvelle ligne de tramway, avec à peine… que, sans doute, aussi (= donc) et encore faut-il.", "À peine la nouvelle ligne de tramway était-elle ouverte que les rames étaient pleines. Sans doute répondait-elle à un vrai besoin. Les embouteillages ont nettement diminué ; aussi la mairie envisage-t-elle une deuxième ligne. Encore faut-il trouver le financement."]
    },
    112: {
      gap: [["C'est mon ___ quartier : j'y ai vécu dix ans. (former)", "ancien"], ["Il a enfin sa ___ maison. (own)", "propre"], ["C'est le ___ commerce du village. (only)", "seul"], ["Je l'ai vu la semaine ___. (last)", "dernière"]],
      fix: [["Il habite dans une ancienne maison du XVIIe siècle.", "Il habite dans une maison ancienne du XVIIe siècle.", "After the noun, ancien = old; before it, former."], ["Elle a enfin sa voiture propre : elle ne prend plus le bus.", "Elle a enfin sa propre voiture : elle ne prend plus le bus.", "Before the noun, propre = own; after it, clean."]],
      task: ["Describe your neighbourhood in four sentences, using ancien, seul, même and dernier or prochain in the right position.", "Décris ton quartier en quatre phrases, avec ancien, seul, même et dernier ou prochain à la bonne place.", "J'habite un ancien quartier ouvrier, aujourd'hui très recherché. La seule boulangerie de la rue est tenue par la même famille depuis trente ans. Les maisons anciennes ont presque toutes été rénovées. L'année prochaine, la dernière usine du quartier deviendra une médiathèque."]
    },
    113: {
      gap: [["Je voudrais ___ sur ce point. (to speak, comment)", "intervenir"], ["Ne pourrait-on pas ___ une autre solution ? (consider)", "envisager"], ["Pour ___ à la question de départ… (come back)", "revenir"], ["Permettez-moi de ___. (finish)", "terminer"]],
      fix: [["Je me permets réagir.", "Je me permets de réagir.", "se permettre de + infinitive."], ["Je suggère que nous organisons une deuxième réunion.", "Je suggère que nous organisions une deuxième réunion.", "suggérer que + subjunctive."]],
      task: ["At a neighbourhood meeting, the town hall plans to turn a car park into a garden. Speak up: ask for the floor, say where you speak from, express a reservation and make a proposal.", "Lors d'une réunion de quartier, la mairie veut transformer un parking en jardin. Prends la parole : demande à intervenir, dis à quel titre tu parles, exprime une réserve et fais une proposition.", "Si vous me permettez d'intervenir sur ce point : j'habite le quartier depuis dix ans, et l'idée d'un jardin me plaît beaucoup. J'ai toutefois une réserve : les commerçants risquent de perdre des clients. Ne pourrait-on pas envisager de garder quelques places de livraison ? Je suggère qu'on en discute avec eux avant de décider."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "reunionquartier", lesson: 113, level: "C1", icon: "users-round", partner: "Hervé", role: "the deputy mayor chairing the meeting",
    title: "A neighbourhood meeting", title_fr: "La réunion de quartier",
    setting: "At a neighbourhood meeting, the town hall presents a plan to pedestrianise your street. Hervé, the deputy mayor, chairs the debate. You'd like to speak.", setting_fr: "Lors d'une réunion de quartier, la mairie présente un projet pour rendre ta rue piétonne. Hervé, l'adjoint au maire, anime le débat. Tu souhaites intervenir.",
    turns: [
      { p: "Le projet est donc de rendre la rue des Lilas piétonne dès le printemps. Qui souhaite intervenir ?", fr: "So the plan is to make Rue des Lilas pedestrian from the spring. Who would like to speak?" },
      { y: ["Je voudrais intervenir sur ce point, si vous le permettez.", "Je voudrais intervenir à ce point, si vous le permettez.", "Je voudrais intervenir sur ce point, si vous permettez le."], fr: "I'd like to say something on this point, if I may.", why: "intervenir sur un point; si vous le permettez." },
      { p: "Je vous en prie, allez-y.", fr: "Please, go ahead." },
      { y: ["Pour ma part, j'habite la rue depuis dix ans : l'idée me plaît, mais j'ai quelques réserves sur les livraisons.", "Pour ma part, j'habite la rue depuis dix ans : l'idée me plaît, mais j'ai quelques réserves de les livraisons.", "Pour ma part, j'habite la rue il y a dix ans : l'idée me plaît, mais j'ai quelques réserves sur les livraisons."], fr: "For my part, I've lived on the street for ten years: I like the idea, but I have a few reservations about deliveries.", why: "depuis for something still going on; des réserves sur." },
      { p: "Les livraisons se feront le matin, avant dix heures. Cela ne suffit pas ?", fr: "Deliveries will take place in the morning, before ten. Isn't that enough?" },
      { y: ["Sans doute est-ce suffisant pour les commerces, mais les personnes âgées auront du mal à rentrer chez elles en taxi.", "Sans doute c'est suffisant pour les commerces, mais les personnes âgées auront du mal à rentrer chez elles en taxi.", "Sans doute est-ce suffisant pour les commerces, mais les personnes âgées auront du mal à rentrer chez eux en taxi."], fr: "That's probably enough for the shops, but elderly people will find it hard to get home by taxi.", why: "sans doute at the start + inversion (est-ce); les personnes → chez elles." },
      { p: "C'est un point intéressant. Vous avez une proposition ?", fr: "That's an interesting point. Do you have a proposal?" },
      { y: ["Ne pourrait-on pas envisager un accès réservé aux taxis et aux secours ?", "Ne pourrait-on pas envisager d'un accès réservé aux taxis et aux secours ?", "Ne pourrait pas-on envisager un accès réservé aux taxis et aux secours ?"], fr: "Couldn't we consider access reserved for taxis and emergency services?", why: "envisager + noun; the pronoun comes right after the verb: pourrait-on pas." },
      { p: "Pourquoi pas. Mais nous ne voulons pas retarder le projet.", fr: "Why not. But we don't want to delay the project." },
      { y: ["Je comprends. Je suggère simplement que nous en discutions avec les riverains avant la fin du mois.", "Je comprends. Je suggère simplement que nous en discutons avec les riverains avant la fin du mois.", "Je comprends. Je suggère simplement que nous discutions en avec les riverains avant la fin du mois."], fr: "I understand. I'm simply suggesting we discuss it with the residents before the end of the month.", why: "suggérer que + subjunctive; en goes before the verb." }
    ] }
  );

  W.READINGS.push({
    id: "villesmoyennes", level: "C1", icon: "building-2", title: "Villes moyennes : l'heure de la revanche ?", genre: "Article",
    intro: "Empty shop windows, then a new appeal after 2020: what future for France's medium-sized towns? Inversion and adjective position.",
    intro_fr: "Des vitrines vides, puis un nouvel attrait après 2020 : quel avenir pour les villes moyennes ? L'inversion et la place de l'adjectif.",
    paragraphs: [
      { en: "Pendant des décennies, les villes moyennes ont semblé condamnées : commerces fermés, centres-villes désertés, jeunes partis étudier dans les métropoles. Aussi l'État a-t-il lancé en 2018 le programme Action cœur de ville, destiné à plus de deux cents d'entre elles.", fr: "For decades, medium-sized towns seemed doomed: shops closed, town centres deserted, young people gone to study in the big cities. So in 2018 the State launched the Action cœur de ville programme, aimed at more than two hundred of them." },
      { en: "Depuis la crise sanitaire de 2020, ces villes font de nouveau parler d'elles. Télétravail aidant, de nombreux médias ont annoncé un exode urbain massif. Une étude publiée en 2022 a toutefois nuancé ce récit : il n'y a pas eu de départ en masse des grandes villes, mais plutôt une accentuation de mouvements déjà en cours.", fr: "Since the health crisis of 2020, these towns have been in the news again. With the help of remote working, many media announced a massive urban exodus. A study published in 2022, however, qualified this story: there was no mass departure from the big cities, but rather a strengthening of movements already under way." },
      { en: "Reste que l'attrait de ces villes est réel. Les prix de l'immobilier y sont souvent bien plus bas que dans les métropoles, et la qualité de vie y est vantée par ceux qui s'y installent. Encore faut-il y trouver un emploi, un médecin et une école : sans services publics de proximité, nulle ville ne peut retenir ses habitants.", fr: "The fact remains that these towns are genuinely attractive. Property prices there are often much lower than in the big cities, and those who settle there praise the quality of life. Even so, you need to find a job, a doctor and a school: without local public services, no town can keep its residents." },
      { en: "S'y ajoute un défi environnemental. La loi Climat et résilience de 2021 fixe un objectif de zéro artificialisation nette des sols d'ici 2050 : il faudra donc construire sans grignoter les terres agricoles. Pour les villes moyennes, c'est une chance autant qu'une contrainte : leurs bâtiments anciens et vacants, longtemps négligés, pourraient devenir de nouveaux logements.", fr: "On top of that comes an environmental challenge. The 2021 Climate and Resilience Act sets a target of zero net land take by 2050: we'll have to build without eating into farmland. For medium-sized towns, it's as much an opportunity as a constraint: their old, empty buildings, long neglected, could become new homes." },
      { en: "Sans doute ne faut-il pas parler de revanche. Mais à l'heure où les grandes villes deviennent inabordables pour bien des ménages, les villes moyennes ont peut-être une carte à jouer, à condition de ne pas se contenter de leur seul charme.", fr: "We probably shouldn't speak of revenge. But at a time when big cities are becoming unaffordable for many households, medium-sized towns may have a card to play, provided they don't rely on their charm alone." }
    ],
    glossary: { "condamnées": "doomed", "désertés": "deserted", "décennies": "decades", "aidant": "helping (télétravail aidant: with the help of remote working)", "récit": "story, narrative", "attrait": "appeal", "immobilier": "property, real estate", "vantée": "praised", "grignoter": "to nibble, to eat into", "vacants": "empty, vacant", "négligés": "neglected", "revanche": "revenge, comeback", "inabordables": "unaffordable", "ménages": "households", "contenter": "se contenter de: to be content with" },
    questions: [
      { q: "À qui le programme lancé en 2018 était-il destiné ?", o: ["À plus de deux cents villes moyennes", "Aux grandes métropoles", "Aux villages de montagne"], a: 0 },
      { q: "Qu'a montré l'étude publiée en 2022 ?", o: ["Il n'y a pas eu d'exode massif, mais une accentuation de mouvements existants.", "Des millions d'habitants ont quitté les grandes villes.", "Les villes moyennes se sont vidées."], a: 0 },
      { q: "Qu'est-ce qui est indispensable pour retenir les habitants ?", o: ["Des services publics de proximité", "De grands centres commerciaux", "Des autoroutes"], a: 0 },
      { q: "Que fixe la loi Climat et résilience de 2021 ?", o: ["Un objectif de zéro artificialisation nette des sols d'ici 2050", "La gratuité des transports", "L'interdiction des voitures en ville"], a: 0 },
      { q: "À quelle condition les villes moyennes ont-elles une carte à jouer ?", o: ["Ne pas se contenter de leur charme", "Attirer de grandes usines", "Construire sur les terres agricoles"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-c1-3", unit: "c1-3", level: "C1", icon: "map-pin",
    title: "La ville du quart d'heure", title_fr: "La ville du quart d'heure",
    context: "On the radio, Sophie asks Bastien, a town planner, about the fifteen-minute city.", context_fr: "À la radio, Sophie interroge Bastien, urbaniste, sur la ville du quart d'heure.",
    words: [["popularisé", "made popular"], ["le contresens", "the misinterpretation"], ["le rez-de-chaussée", "the ground floor"], ["la crèche", "the day nursery"], ["changer de visage", "to change its face"]],
    lines: [["Sophie", "Tout ce dont on a besoin à moins de quinze minutes de chez soi, à pied ou à vélo : c'est le principe de la ville du quart d'heure, un concept popularisé par l'urbaniste Carlos Moreno. Bastien, vous êtes urbaniste vous aussi. Est-ce réaliste ?", "fr-FR"], ["Bastien", "Dans les quartiers denses, c'est déjà presque le cas : on y trouve des commerces, des écoles, des médecins. Le vrai défi, ce sont les zones pavillonnaires, où tout a été pensé pour la voiture.", "fr-FR"], ["Sophie", "Certains y voient pourtant une menace pour leur liberté de circuler.", "fr-FR"], ["Bastien", "C'est un contresens. Il ne s'agit pas d'interdire de sortir de son quartier, mais de raccourcir les trajets du quotidien. Encore faut-il bien expliquer le projet, sans quoi les habitants le rejetteront.", "fr-FR"], ["Sophie", "Concrètement, par où commencer ?", "fr-FR"], ["Bastien", "Par les rez-de-chaussée. Une même rue peut changer de visage si l'on y installe une crèche, un cabinet médical ou un atelier de réparation. Et par les cours d'école, qu'on peut ouvrir aux habitants le week-end.", "fr-FR"], ["Sophie", "Et dans les petites communes ?", "fr-FR"], ["Bastien", "Là, on parlera plutôt du village du quart d'heure… à vélo électrique ! Mais le principe reste le même : rapprocher les services des gens, plutôt que d'obliger les gens à courir après les services.", "fr-FR"]],
    gist: ["De quoi parle l'émission ?", ["De la ville du quart d'heure", "Des embouteillages à Paris", "Du prix des logements"]],
    detail: [["Qu'est-ce que la ville du quart d'heure ?", ["Avoir le nécessaire à moins de quinze minutes, à pied ou à vélo", "Une ville où l'on travaille quinze minutes par jour", "Un réseau de bus toutes les quinze minutes"]], ["Où se trouve le vrai défi, selon Bastien ?", ["Dans les zones pavillonnaires", "Dans les centres historiques", "Dans les ports"]], ["Que répond Bastien à ceux qui y voient une menace ?", ["C'est un contresens : il ne s'agit pas d'interdire de sortir.", "Il leur donne raison.", "Il refuse de répondre."]], ["Par quoi faut-il commencer, selon lui ?", ["Par les rez-de-chaussée et les cours d'école", "Par de nouvelles routes", "Par de grands centres commerciaux"]]],
    decode: ["Encore faut-il bien expliquer le projet", "Une même rue peut changer de visage"],
    tip: "Experts often answer an objection in two steps: they reject a misreading (c'est un contresens), then add a condition (encore faut-il…). Listen for that second step: it's where their real position lies.", tip_fr: "Les experts répondent souvent à une objection en deux temps : ils écartent un malentendu (c'est un contresens), puis posent une condition (encore faut-il…). Guette ce second temps : c'est là que se trouve leur vraie position."
  }]);

  W.LEXIS = W.LEXIS || {};
  W.LEXIS["c1-3"] = {
    colloc: [
      ["aménager un quartier", "to develop a neighbourhood", "La ville va aménager un nouveau quartier près de la gare.", "aménager", ["arranger", "ranger"]],
      ["désenclaver un territoire", "to open up an isolated area", "La nouvelle route doit désenclaver la vallée.", "désenclaver", ["déboucher", "délier"]],
      ["revitaliser un centre-ville", "to revitalise a town centre", "Le plan vise à revitaliser le centre-ville.", "revitaliser", ["revivre", "revenir"]],
      ["lancer une concertation", "to launch a public consultation", "La mairie a lancé une concertation avec les habitants.", "lancé", ["jeté", "tiré"]],
      ["réhabiliter un bâtiment", "to renovate a building", "L'ancienne usine a été réhabilitée en logements.", "réhabilitée", ["habilitée", "rhabillée"]],
      ["fermer une rue à la circulation", "to close a street to traffic", "La rue sera fermée à la circulation dimanche.", "fermée", ["bouchée", "close"]],
      ["être à deux pas de", "to be a stone's throw from", "La gare est à deux pas de l'hôtel.", "pas", ["doigts", "coups"]],
      ["faire étape", "to stop off", "Nous avons fait étape à Tours.", "fait", ["pris", "mis"]],
      ["mener une politique", "to pursue a policy", "La région mène une politique ambitieuse en faveur du vélo.", "mène", ["joue", "tient"]],
      ["dresser un état des lieux", "to take stock", "Le rapport dresse un état des lieux du logement.", "dresse", ["lève", "monte"]]
    ],
    wf: [
      ["L'___ rapide a transformé la région. (URBAIN)", "urbanisation"],
      ["La ___ est une richesse à préserver. (RURAL)", "ruralité"],
      ["La ___ de population est très forte au centre. (DENSE)", "densité"],
      ["L'___ du nouveau quartier a pris dix ans. (AMÉNAGER)", "aménagement"],
      ["Les ___ du quartier ont été consultés. (HABITER)", "habitants"],
      ["La mairie veut ___ le centre historique. (PIÉTON)", "piétonniser"],
      ["Ce village est très ___ : aucune route rapide ne le dessert. (ENCLAVE)", "enclavé"],
      ["Les loyers sont devenus ___ pour les jeunes. (ABORDER)", "inabordables"]
    ],
    kwt: [
      ["Il venait d'arriver quand le téléphone a sonné.", "PEINE", "À ___ que le téléphone a sonné.", "peine était-il arrivé"],
      ["Il a probablement raison.", "SANS", "___ raison.", "Sans doute a-t-il"],
      ["C'est la maison qui lui appartient.", "PROPRE", "C'est ___ maison.", "sa propre"],
      ["Il faut quand même que les habitants soient d'accord.", "ENCORE", "___ que les habitants soient d'accord.", "Encore faut-il"],
      ["Ce n'est qu'une question de temps.", "SIMPLE", "C'est une ___.", "simple question de temps"],
      ["La semaine qui vient de passer, j'ai visité trois appartements.", "DERNIÈRE", "La ___, j'ai visité trois appartements.", "semaine dernière"]
    ],
    idioms: [
      ["Paris ne s'est pas fait en un jour", "les grandes réalisations demandent du temps", "Rome wasn't built in a day", "Le nouveau quartier ne sera pas fini avant 2030 : Paris ne s'est pas fait en un jour !", "Paris ne s'est pas fait en un jour"],
      ["être un rat des villes", "aimer la ville et ne pas pouvoir s'en passer", "to be a city person through and through", "Ma sœur est un vrai rat des villes : elle ne quitterait Lyon pour rien au monde.", "un vrai rat des villes"],
      ["au diable vauvert", "très loin, dans un endroit isolé", "in the middle of nowhere", "Ils habitent au diable vauvert, à une heure de la première gare.", "au diable vauvert"],
      ["c'est la croix et la bannière", "c'est très compliqué", "it's a real hassle", "Pour se garer en centre-ville, c'est la croix et la bannière.", "c'est la croix et la bannière"],
      ["battre le pavé", "marcher dans les rues, manifester", "to take to the streets", "Les opposants au projet ont battu le pavé tout l'après-midi.", "ont battu le pavé"],
      ["avoir pignon sur rue", "être bien établi et connu", "to be well established", "Cette librairie a pignon sur rue depuis cinquante ans.", "a pignon sur rue"],
      ["tenir le haut du pavé", "occuper le premier rang, dominer", "to rule the roost", "Dans ce quartier, les grandes enseignes tiennent le haut du pavé.", "tiennent le haut du pavé"],
      ["être à la rue", "ne plus avoir de logement", "to be out on the street", "Après l'incendie, plusieurs familles se sont retrouvées à la rue.", "à la rue"]
    ]
  };

  W.PROMPTS.push({ id: "fr-c1-3", level: "C1", q: "Préfères-tu vivre en ville ou à la campagne ? Qu'est-ce qui pourrait te faire changer d'avis ?", fr: "Do you prefer living in a town or in the country? What could make you change your mind?", time: 180,
    phrases: ["Sans doute…", "mon ancien quartier", "le seul…", "Encore faudrait-il…", "Aussi…"],
    model: "J'ai toujours vécu en ville, et sans doute est-ce pour cela que j'ai du mal à imaginer une autre vie. J'aime pouvoir tout faire à pied : mon ancien quartier comptait trois cinémas, et le seul trajet un peu long, c'était celui du marché, parce que je m'arrêtais partout ! Pourtant, la campagne m'attire de plus en plus : dès que je quitte la ville, je respire mieux. Encore faudrait-il y trouver un travail et une bonne connexion internet. Si ces deux conditions étaient réunies, je pourrais bien changer d'avis." });

  W.WRITING_GUIDE["c1-3"] = { genre: "An argued essay: a formal contribution to a consultation (DALF C1)", genre_fr: "Un essai argumenté : une contribution formelle à une consultation (DALF C1)",
    plan: [["Say why you are writing, and give the stakes.", "Dis pourquoi tu écris, et présente l'enjeu."], ["Recognise the advantages of the project.", "Reconnais les avantages du projet."], ["Set out the reservations of those concerned.", "Expose les réserves des personnes concernées."], ["Make concrete proposals.", "Fais des propositions concrètes."], ["Conclude and use a formal closing.", "Conclus et termine par une formule de politesse soutenue."]],
    marks: [["Sans doute la piétonnisation présente-t-elle", "complex inversion after sans doute", "inversion complexe après sans doute"], ["Aussi le centre-ville pourrait-il", "aussi (= therefore) + inversion", "aussi (= donc) + inversion"], ["un simple lieu de passage", "simple before the noun: mere", "simple antéposé : un simple"], ["Encore faut-il que", "a reservation", "une réserve"], ["leur propre domicile", "propre before the noun: own", "propre antéposé : son propre"], ["je me permets de formuler trois propositions", "the proposals", "les propositions"]] };

  W.COURSE.push({ id: "c1-3", level: "C1", icon: "building-2", title: "Cities and regions", title_fr: "Villes et territoires",
    intro: "In this unit, you'll talk about towns, the countryside and local democracy: subject inversion in formal French (à peine… que, sans doute, aussi, encore faut-il), adjectives that change meaning with their position, and speaking up at a public meeting.",
    intro_fr: "Dans cette unité, tu vas parler des villes, des campagnes et de la démocratie locale : l'inversion du sujet à l'écrit soutenu (à peine… que, sans doute, aussi, encore faut-il), les adjectifs qui changent de sens selon leur place, et la prise de parole en réunion publique.",
    can: ["Use subject inversion in formal writing", "Place adjectives to say exactly what you mean", "Discuss town planning, rural life and regional divides", "Speak up at a public meeting: reservation, refocusing, proposal", "Write a formal contribution to a public consultation"],
    can_fr: ["Employer l'inversion du sujet à l'écrit soutenu", "Placer les adjectifs pour dire exactement ce que tu veux dire", "Débattre d'urbanisme, de ruralité et de fractures territoriales", "Prendre la parole en réunion publique : réserve, recentrage, proposition", "Rédiger une contribution formelle à une consultation publique"],
    lessons: [111, 112, 113], vocab: ["urbanismeFR", "territoiresFR"], reading: "villesmoyennes", prompt: "fr-c1-3",
    writing: { task: "Your town is holding a consultation: should the town centre become pedestrian? Write an argued contribution (250-300 words) to the mayor.", task_fr: "Ta ville organise une consultation : faut-il rendre le centre-ville piéton ? Rédige une contribution argumentée (250 à 300 mots) adressée à la maire.", words: "250-300",
      tips: ["Dans le cadre de la consultation sur…", "Sans doute…", "Encore faut-il que…", "C'est pourquoi je me permets de…", "Je vous prie d'agréer…"],
      checklist: ["I said why I am writing", "I recognised the advantages before the reservations", "I used at least two inversions", "My proposals are concrete", "I used a formal closing", "I wrote between 250 and 300 words"],
      model: "Madame la Maire,\n\nDans le cadre de la consultation sur l'avenir du centre-ville, je me permets de vous adresser cette contribution. Le projet de rendre la rue principale piétonne suscite en effet bien des inquiétudes, que je comprends, mais aussi de grands espoirs, que je partage.\n\nSans doute la piétonnisation présente-t-elle d'abord des avantages évidents. Moins de voitures, c'est moins de bruit, moins de pollution et davantage de sécurité pour les enfants. Les villes qui ont fait ce choix ont souvent vu leurs rues retrouver une animation qu'elles avaient perdue. Aussi le centre-ville pourrait-il redevenir un lieu de rencontre, et non plus un simple lieu de passage.\n\nEncore faut-il que ce projet ne se fasse pas au détriment de ceux qui y vivent et y travaillent. Les commerçants craignent de perdre leurs clients venus en voiture, et les personnes âgées, de ne plus pouvoir accéder à leur propre domicile. Ces craintes ne sauraient être balayées d'un revers de main. Elles méritent au contraire une réponse précise.\n\nC'est pourquoi je me permets de formuler trois propositions. Tout d'abord, maintenir un accès réservé aux livraisons, aux taxis et aux secours. Ensuite, créer un parking relais à l'entrée de la ville, relié au centre par une navette gratuite. Enfin, mener l'expérience pendant une année avant toute décision définitive, puis en dresser le bilan avec les habitants.\n\nJ'ai la conviction qu'un centre-ville piéton, s'il est bien pensé, profitera à tous. Dans l'attente de votre réponse, je vous prie d'agréer, Madame la Maire, l'expression de ma haute considération.\n\nCamille Roux" } });
})();
