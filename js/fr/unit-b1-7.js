/* Cours de français, unité B1-7 « Culture / Sorties et culture » : le pronom relatif dont, ce qui / ce que /
   ce dont, les pronoms démonstratifs (celui, celle, ceux, celles) et possessifs (le mien…), raconter et critiquer
   un film ou un livre, recommander. Personnages et roman (La Dernière Lettre) fictifs. Faits vérifiables
   seulement : VF, VO et VOSTFR au cinéma ; en France, les nouveaux films sortent le mercredi ; la « rentrée
   littéraire » ; Les Misérables est un roman de Victor Hugo ; Le Fabuleux Destin d'Amélie Poulain (2001) et
   Le Grand Bain (2018, Gilles Lellouche, avec Mathieu Amalric et Guillaume Canet). */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "cultureFR", icon: "clapperboard", title: "Culture and going out", title_fr: "La culture et les sorties", level: "B1", words: [
    ["l'exposition", "the exhibition", "On est allés voir une exposition de photos."],
    ["le spectacle", "the show, the performance", "Le spectacle commence à vingt heures."],
    ["la pièce de théâtre", "the play", "J'ai vu une pièce de théâtre magnifique."],
    ["le roman", "the novel", "Elle écrit son deuxième roman."],
    ["l'auteur / l'autrice", "the author (m) / the author (f)", "L'autrice signe ses livres à la librairie."],
    ["le réalisateur / la réalisatrice", "the (film) director (m) / (f)", "La réalisatrice a gagné un prix."],
    ["le metteur en scène / la metteuse en scène", "the (theatre) director (m) / (f)", "Le metteur en scène a modernisé la pièce."],
    ["le personnage", "the character", "Le personnage principal est une détective."],
    ["l'intrigue", "the plot", "L'intrigue est un peu compliquée."],
    ["la bande-annonce", "the trailer", "Tu as vu la bande-annonce ?"],
    ["les sous-titres", "the subtitles", "Je regarde les séries avec des sous-titres."],
    ["la version originale", "the original version (not dubbed)", "On l'a vu en version originale."],
    ["le chef-d'œuvre", "the masterpiece", "Ce film est un chef-d'œuvre."],
    ["l'œuvre", "the work (of art)", "Les œuvres de Monet sont au musée d'Orsay."],
    ["l'artiste", "the artist", "L'artiste était présente au vernissage."],
    ["le spectateur / la spectatrice", "the spectator, the viewer (m) / the spectator, the viewer (f)", "Les spectateurs ont applaudi debout."],
    ["la critique", "the review", "J'ai lu une très bonne critique du livre."],
    ["les applaudissements", "applause", "Il y a eu dix minutes d'applaudissements."]
  ] },
  { id: "critiqueFR", icon: "star", title: "Giving a review", title_fr: "Donner son avis sur une œuvre", level: "B1", words: [
    ["émouvant / émouvante", "moving (m) / moving (f)", "La fin est très émouvante."],
    ["décevant / décevante", "disappointing (m) / disappointing (f)", "Le deuxième film est décevant."],
    ["captivant / captivante", "gripping (m) / gripping (f)", "Une histoire captivante du début à la fin."],
    ["bouleversant / bouleversante", "deeply moving (m) / (f)", "Un témoignage bouleversant."],
    ["passionnant / passionnante", "fascinating, exciting (m) / (f)", "Un documentaire passionnant."],
    ["touchant / touchante", "touching (m) / touching (f)", "Les personnages sont touchants."],
    ["effrayant / effrayante", "frightening, scary (m) / (f)", "Ce film d'horreur est vraiment effrayant."],
    ["lent / lente", "slow (m) / slow (f)", "Le début du film est un peu lent."],
    ["surprenant / surprenante", "surprising (m) / surprising (f)", "La fin est très surprenante."],
    ["réussi / réussie", "successful, well done (m) / (f)", "C'est une adaptation réussie."],
    ["raté / ratée", "a failure, botched (m) / (f)", "La fin est complètement ratée."],
    ["bien joué", "well acted", "Le film est très bien joué."],
    ["ça se passe", "it takes place, it's set", "Ça se passe à Paris, dans les années 60."],
    ["c'est l'histoire de", "it's the story of", "C'est l'histoire d'une femme qui change de vie."],
    ["je n'ai pas accroché", "it didn't grab me", "J'ai lu cinquante pages, mais je n'ai pas accroché."],
    ["à voir absolument", "a must-see", "Cette exposition est à voir absolument."],
    ["ça vaut le détour", "it's well worth a visit", "Ce petit musée vaut le détour."],
    ["avoir un coup de cœur pour", "to fall in love with (a book, a place…)", "J'ai eu un coup de cœur pour ce roman."]
  ] });

  W.LESSONS.push(
  {
    id: 63, level: "B1", icon: "link",
    title: "Le livre dont je t'ai parlé: dont, ce qui, ce que", title_fr: "Le livre dont je t'ai parlé : dont, ce qui, ce que",
    subtitle: "The relative pronoun that replaces de, and three ways to say “what”.", subtitle_fr: "Le pronom relatif qui remplace de, et trois façons de dire « ce que ».",
    body: `
<h2>Dont: replacing de + something</h2>
<p>Many verbs and expressions are built with <s-fr>de</s-fr>: <s-fr>parler de, avoir besoin de, avoir envie de, se souvenir de, rêver de, être fier de</s-fr>. In a relative clause, <s-fr>de</s-fr> + the noun becomes <s-fr>dont</s-fr>:</p>
<table>
<tr><th>French</th><th>English</th></tr>
<tr><td><s-fr>Le livre dont je t'ai parlé est génial.</s-fr></td><td>The book I told you about is great.</td></tr>
<tr><td><s-fr>C'est l'outil dont j'ai besoin.</s-fr></td><td>It's the tool I need.</td></tr>
<tr><td><s-fr>Le voyage dont je rêve, c'est le Japon.</s-fr></td><td>The trip I dream of is Japan.</td></tr>
</table>
<p><s-fr>dont</s-fr> also means "whose": <s-fr>une actrice dont le père est réalisateur</s-fr> (an actress whose father is a director). The article stays. And "including": <s-fr>trois films, dont deux comédies</s-fr>.</p>
<h2>Ce qui, ce que, ce dont: “what”</h2>
<p><s-fr>Ce qui m'intéresse, c'est l'histoire.</s-fr> (subject) · <s-fr>Ce que j'aime, c'est la musique.</s-fr> (object) · <s-fr>Ce dont j'ai besoin, c'est de vacances.</s-fr> (with de, which comes back after c'est)</p>
<h2>All the relative pronouns</h2>
<p><s-fr>qui</s-fr> (subject) · <s-fr>que</s-fr> (object) · <s-fr>où</s-fr> (place, time) · <s-fr>dont</s-fr> (de + noun). For where you come from, use <s-fr>d'où</s-fr>: <s-fr>la ville d'où je viens</s-fr>.</p>
<div class="tip">English often puts the preposition at the end: "the film I talked about". French never does: the preposition (here de) is inside <s-fr>dont</s-fr>, at the front.</div>
`,
    examples: [
      ["Le livre dont je t'ai parlé vient de sortir.", "The book I told you about has just come out."],
      ["C'est exactement ce dont j'ai besoin.", "It's exactly what I need."],
      ["Le voyage dont je rêve, c'est le Japon.", "The trip I dream of is Japan."],
      ["C'est une autrice dont j'adore les romans.", "She's an author whose novels I love."],
      ["Ce qui m'intéresse, c'est l'histoire.", "What interests me is the story."],
      ["Ce que j'ai préféré, c'est la musique.", "What I liked best was the music."],
      ["Ce dont je me souviens, c'est la fin.", "What I remember is the ending."],
      ["Il a vu trois films, dont deux en VO.", "He saw three films, including two in the original version."]
    ],
    quiz: [
      { q: "“The film I told you about” is:", o: ["le film que je t'ai parlé", "le film dont je t'ai parlé", "le film qui je t'ai parlé"], a: 1, ex: "parler de → dont." },
      { q: "“What I need is rest” is:", o: ["Ce que j'ai besoin, c'est du repos.", "Ce dont j'ai besoin, c'est de repos.", "Ce qui j'ai besoin, c'est du repos."], a: 1, ex: "avoir besoin de → ce dont… c'est de." },
      { q: "“What interests me…” is:", o: ["Ce qui m'intéresse…", "Ce que m'intéresse…", "Qu'est-ce qui m'intéresse…"], a: 0, ex: "Subject: ce qui." },
      { q: "“An author whose books I love” is:", o: ["un auteur dont j'adore les livres", "un auteur que j'adore ses livres", "un auteur dont j'adore livres"], a: 0, ex: "dont = whose; the article stays." },
      { q: "“The town I come from” is:", o: ["la ville dont je viens", "la ville d'où je viens", "la ville que je viens"], a: 1, ex: "Origin of place: d'où." }
    ]
  },
  {
    id: 64, level: "B1", icon: "pointer",
    title: "Celui-ci, le mien: demonstrative and possessive pronouns", title_fr: "Celui-ci, le mien : les pronoms démonstratifs et possessifs",
    subtitle: "This one, that one, the one who, Paul's, mine: never repeat a noun again.", subtitle_fr: "Celui-ci, celui-là, celui qui, celui de Paul, le mien : ne plus jamais répéter un nom.",
    body: `
<h2>Celui, celle, ceux, celles</h2>
<p>They replace a noun already mentioned, and agree with it: <s-fr>celui</s-fr> (m), <s-fr>celle</s-fr> (f), <s-fr>ceux</s-fr> (m pl), <s-fr>celles</s-fr> (f pl). They never stand alone: they need <s-fr>-ci / -là</s-fr>, <s-fr>qui / que / dont</s-fr> or <s-fr>de</s-fr>.</p>
<table>
<tr><th>French</th><th>English</th></tr>
<tr><td><s-fr>Tu préfères quel pull ? Celui-ci ou celui-là ?</s-fr></td><td>Which jumper do you prefer? This one or that one?</td></tr>
<tr><td><s-fr>Le film qui a gagné, c'est celui que j'ai vu.</s-fr></td><td>The film that won is the one I saw.</td></tr>
<tr><td><s-fr>Ce n'est pas mon vélo, c'est celui de ma sœur.</s-fr></td><td>It's not my bike, it's my sister's.</td></tr>
<tr><td><s-fr>Ceux qui veulent venir sont les bienvenus.</s-fr></td><td>Those who want to come are welcome.</td></tr>
</table>
<h2>Le mien, la tienne, les nôtres</h2>
<table>
<tr><th>owner</th><th>m</th><th>f</th><th>m pl</th><th>f pl</th></tr>
<tr><td>je</td><td><s-fr>le mien</s-fr></td><td><s-fr>la mienne</s-fr></td><td><s-fr>les miens</s-fr></td><td><s-fr>les miennes</s-fr></td></tr>
<tr><td>tu</td><td><s-fr>le tien</s-fr></td><td><s-fr>la tienne</s-fr></td><td><s-fr>les tiens</s-fr></td><td><s-fr>les tiennes</s-fr></td></tr>
<tr><td>il / elle</td><td><s-fr>le sien</s-fr></td><td><s-fr>la sienne</s-fr></td><td><s-fr>les siens</s-fr></td><td><s-fr>les siennes</s-fr></td></tr>
<tr><td>nous</td><td><s-fr>le nôtre</s-fr></td><td><s-fr>la nôtre</s-fr></td><td colspan="2"><s-fr>les nôtres</s-fr></td></tr>
<tr><td>vous</td><td><s-fr>le vôtre</s-fr></td><td><s-fr>la vôtre</s-fr></td><td colspan="2"><s-fr>les vôtres</s-fr></td></tr>
<tr><td>ils / elles</td><td><s-fr>le leur</s-fr></td><td><s-fr>la leur</s-fr></td><td colspan="2"><s-fr>les leurs</s-fr></td></tr>
</table>
<p>They agree with the thing owned, not with the owner: <s-fr>Ta maison est grande, la mienne est petite.</s-fr> With à and de, the article contracts: <s-fr>Je pense au tien.</s-fr> · <s-fr>Je parle du mien.</s-fr></p>
<div class="tip">English "Paul's" (the one belonging to Paul) is <s-fr>celui de Paul</s-fr> or <s-fr>celle de Paul</s-fr>. And notice the circumflex: <s-fr>notre</s-fr> (our) but <s-fr>le nôtre</s-fr> (ours).</div>
`,
    examples: [
      ["Tu préfères quelle robe ? Celle-ci ou celle-là ?", "Which dress do you prefer? This one or that one?"],
      ["Le meilleur roman, c'est celui que tu m'as prêté.", "The best novel is the one you lent me."],
      ["Ce n'est pas ma voiture, c'est celle de mon frère.", "It's not my car, it's my brother's."],
      ["Ceux qui ont des billets peuvent entrer.", "Those who have tickets can go in."],
      ["Ton téléphone est plus récent que le mien.", "Your phone is newer than mine."],
      ["Nos voisins sont calmes. Et les vôtres ?", "Our neighbours are quiet. And yours?"],
      ["J'ai oublié mon parapluie. Tu peux me prêter le tien ?", "I've forgotten my umbrella. Can you lend me yours?"],
      ["Leurs enfants jouent avec les nôtres.", "Their children play with ours."]
    ],
    quiz: [
      { q: "“It's my sister's (bike)” is:", o: ["C'est le vélo de ma sœur à elle.", "C'est celui de ma sœur.", "C'est le sien de ma sœur."], a: 1, ex: "celui de = 's." },
      { q: "“Your house is big, mine is small”:", o: ["… le mien est petit.", "… la mienne est petite.", "… ma est petite."], a: 1, ex: "Agrees with la maison: la mienne." },
      { q: "“Those who want to come” is:", o: ["Celles qui veulent venir (for a mixed group)", "Ceux qui veulent venir", "Ces qui veulent venir"], a: 1, ex: "ceux for people in general." },
      { q: "“Ours” (le jardin) is:", o: ["le notre", "le nôtre", "la nôtre"], a: 1, ex: "le nôtre, with a circumflex." },
      { q: "“This one or that one?” (un film):", o: ["Celui-ci ou celui-là ?", "Celle-ci ou celle-là ?", "Ce-ci ou ce-là ?"], a: 0, ex: "un film → celui." }
    ]
  },
  {
    id: 65, level: "B1", kind: "functional", icon: "film",
    title: "Everyday French: talking about a film or a book", title_fr: "Le français de tous les jours : parler d'un film ou d'un livre",
    subtitle: "Say what it's about, what you thought of it, and whether you'd recommend it.", subtitle_fr: "Dire de quoi ça parle, ce que tu en as pensé, et si tu le conseilles.",
    body: `
<h2>What it's about</h2>
<p><s-fr>C'est l'histoire d'une femme qui…</s-fr> · <s-fr>Ça se passe à Marseille, dans les années 80.</s-fr> · <s-fr>Le film raconte…</s-fr> · <s-fr>Le personnage principal est…</s-fr> · <s-fr>C'est adapté d'un roman de…</s-fr></p>
<h2>What you thought</h2>
<p>Positive: <s-fr>J'ai adoré !</s-fr> · <s-fr>Ce qui m'a plu, c'est…</s-fr> · <s-fr>Les acteurs jouent très bien.</s-fr> · <s-fr>J'ai eu un coup de cœur pour ce livre.</s-fr></p>
<p>Negative: <s-fr>Je n'ai pas accroché.</s-fr> (It didn't grab me.) · <s-fr>C'était un peu long.</s-fr> · <s-fr>La fin est décevante.</s-fr> · <s-fr>Bof…</s-fr></p>
<h2>Recommending</h2>
<p><s-fr>Je te le conseille vivement !</s-fr> · <s-fr>C'est à voir absolument.</s-fr> · <s-fr>Ça vaut le détour.</s-fr> · <s-fr>Si tu aimes les comédies, tu vas adorer.</s-fr> · <s-fr>Je te le déconseille.</s-fr></p>
<h2>At the cinema in France</h2>
<p><s-fr>VF</s-fr> means <s-fr>version française</s-fr> (dubbed), <s-fr>VO</s-fr> <s-fr>version originale</s-fr>, and <s-fr>VOSTFR</s-fr> the original version with French subtitles. New films come out on Wednesdays.</p>
<div class="tip">For a book, French says <s-fr>Je l'ai lu d'une traite</s-fr> (I read it in one go) or <s-fr>Je n'arrivais pas à le lâcher</s-fr> (I couldn't put it down). And don't give away the ending: <s-fr>Je ne te raconte pas la fin !</s-fr></div>
`,
    examples: [
      ["C'est l'histoire d'un vieil homme qui part à vélo à travers la France.", "It's the story of an old man who sets off across France by bike."],
      ["Ça se passe à Lyon, pendant la guerre.", "It's set in Lyon, during the war."],
      ["Ce qui m'a plu, c'est la musique.", "What I liked was the music."],
      ["Je n'ai pas accroché, c'était trop lent.", "It didn't grab me, it was too slow."],
      ["Je te le conseille vivement !", "I highly recommend it!"],
      ["On l'a vu en VOSTFR.", "We saw it in the original version with French subtitles."],
      ["Je l'ai lu d'une traite.", "I read it in one go."]
    ],
    quiz: [
      { q: "“It's set in Paris” is:", o: ["Ça se passe à Paris.", "Ça se met à Paris.", "C'est situé à Paris le film se passe."], a: 0, ex: "Ça se passe à…" },
      { q: "“It didn't grab me” is:", o: ["Je n'ai pas accroché.", "Il ne m'a pas attrapé.", "Je n'ai pas pris."], a: 0, ex: "Je n'ai pas accroché." },
      { q: "VOSTFR means:", o: ["dubbed into French", "original version with French subtitles", "a French film"], a: 1, ex: "Version originale sous-titrée en français." },
      { q: "“I highly recommend it” is:", o: ["Je te le conseille vivement.", "Je te conseille le fortement.", "Je le te conseille vivement."], a: 0, ex: "Pronoun order: te le." },
      { q: "In France, new films come out on:", o: ["Fridays", "Wednesdays", "Mondays"], a: 1, ex: "Le mercredi." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    63: {
      gap: [["Le livre ___ je t'ai parlé est génial. (de: that)", "dont"], ["C'est l'outil ___ j'ai besoin. (de: that)", "dont"], ["___ m'intéresse, c'est l'histoire. (what, subject)", "Ce qui"], ["___ j'ai envie, c'est de dormir. (what, de)", "Ce dont"]],
      fix: [["Le film que je t'ai parlé est sorti.", "Le film dont je t'ai parlé est sorti.", "parler de → dont."], ["Ce que j'ai besoin, c'est de calme.", "Ce dont j'ai besoin, c'est de calme.", "avoir besoin de → ce dont."]],
      task: ["Describe three things with dont, ce qui and ce que: a book you dream of reading, what interests you in a film, and what you like in a city.", "Décris trois choses avec dont, ce qui et ce que : un livre dont tu rêves, ce qui t'intéresse dans un film, et ce que tu aimes dans une ville.", "Le livre dont je rêve, c'est un roman qui se passerait au Japon, au dix-neuvième siècle. Dans un film, ce qui m'intéresse, ce sont les personnages plus que l'action. Et dans une ville, ce que j'aime, c'est me perdre dans les petites rues."]
    },
    64: {
      gap: [["Tu préfères quel pull ? ___-ci ou celui-là ? (this one)", "Celui"], ["Ce n'est pas mon vélo, c'est celui ___ ma sœur. ('s)", "de"], ["Ta voiture est rouge, la ___ est bleue. (mine)", "mienne"], ["Ces billets ? Ce sont ___ qu'on a achetés hier. (the ones, m pl)", "ceux"]],
      fix: [["Ta maison est grande, mais le mien est petit.", "Ta maison est grande, mais la mienne est petite.", "The possessive pronoun agrees with the thing: la maison → la mienne."], ["Celle qui j'ai vue était belle.", "Celle que j'ai vue était belle.", "Before a subject + verb: que (celle que j'ai vue)."]],
      task: ["Compare two films or two books you know, with celui-ci, celui-là, celui qui and le mien or la mienne.", "Compare deux films ou deux livres que tu connais, avec celui-ci, celui-là, celui qui et le mien ou la mienne.", "J'ai lu deux romans de la même autrice cet été. Celui qui se passe à Lyon est plus drôle ; celui-là, à Paris, est plus triste. Ma sœur préfère celui de Paris. Elle m'a prêté son exemplaire, parce que le mien était resté chez des amis."]
    },
    65: {
      gap: [["Ça se ___ à Marseille, dans les années 80. (it's set)", "passe"], ["Je n'ai pas ___ : c'était trop lent. (it didn't grab me)", "accroché"], ["C'est à voir ___ ! (absolutely)", "absolument"], ["Je te le ___ vivement ! (recommend)", "conseille"]],
      fix: [["Le film parle sur une famille.", "Le film parle d'une famille.", "parler de, never parler sur."], ["J'ai vu le film en version français.", "J'ai vu le film en version française.", "version is feminine: la version française (VF)."]],
      task: ["Write a short review (5 or 6 sentences) of a film, a series or a book: what it's about, what you thought, and whether you recommend it.", "Écris une courte critique (5 ou 6 phrases) d'un film, d'une série ou d'un livre : de quoi ça parle, ce que tu en as pensé, et si tu le conseilles.", "Hier, j'ai revu Le Fabuleux Destin d'Amélie Poulain. C'est l'histoire d'une jeune serveuse de Montmartre qui décide d'aider les gens autour d'elle. Ce que j'ai adoré, c'est l'image et la musique. Les acteurs jouent très bien, même si la fin est un peu prévisible. Je te le conseille vivement, surtout si tu aimes Paris !"]
    }
  });

  W.ROLEPLAYS.push(
  { id: "filmscifi", lesson: 65, level: "B1", icon: "film", partner: "Benjamin", role: "a friend",
    title: "Have you seen it?", title_fr: "Tu l'as vu ?",
    setting: "You saw a new science-fiction film last weekend. Your friend Benjamin hasn't seen it yet and asks what you thought.", setting_fr: "Tu as vu un nouveau film de science-fiction le week-end dernier. Ton ami Benjamin ne l'a pas encore vu et te demande ton avis.",
    turns: [
      { p: "Tu as vu le nouveau film de science-fiction ? Tout le monde en parle.", fr: "Have you seen the new science-fiction film? Everyone's talking about it." },
      { y: ["Oui, je l'ai vu samedi ! C'est l'histoire d'une astronaute qui se perd sur une planète inconnue.", "Oui, je l'ai vu samedi ! C'est l'histoire d'une astronaute que se perd sur une planète inconnue.", "Oui, je l'ai vu samedi ! C'est l'histoire d'une astronaute dont se perd sur une planète inconnue."], fr: "Yes, I saw it on Saturday! It's the story of an astronaut who gets lost on an unknown planet.", why: "qui: the subject of se perd." },
      { p: "Et alors, ça t'a plu ?", fr: "So, did you like it?" },
      { y: ["J'ai adoré ! Ce qui est le plus impressionnant, ce sont les images.", "J'ai adoré ! Ce que est le plus impressionnant, ce sont les images.", "J'ai adoré ! Qu'est-ce qui est le plus impressionnant, ce sont les images."], fr: "I loved it! The most impressive thing is the visuals.", why: "ce qui = what (the subject of est)." },
      { p: "Ah oui ? Moi, on m'a dit que c'était un peu long.", fr: "Really? I was told it's a bit long." },
      { y: ["C'est vrai, il dure presque trois heures. Mais celui qu'on a vu le mois dernier était encore plus long !", "C'est vrai, il dure presque trois heures. Mais celui que on a vu le mois dernier était encore plus long !", "C'est vrai, il dure presque trois heures. Mais celle qu'on a vu le mois dernier était encore plus long !"], fr: "That's true, it lasts almost three hours. But the one we saw last month was even longer!", why: "un film → celui; que + on = qu'on." },
      { p: "Ha ha, c'est vrai ! Bon, tu me le conseilles, alors ?", fr: "Ha ha, that's true! So, do you recommend it?" },
      { y: ["Oui, je te le conseille vivement. Mais va le voir en VOSTFR, la version originale est bien meilleure.", "Oui, je te conseille le vivement. Mais va le voir en VOSTFR, la version originale est bien meilleure.", "Oui, je te le conseille vivement. Mais va le voir en VOSTFR, la version originale est bien plus bonne."], fr: "Yes, I highly recommend it. But go and see it with subtitles, the original version is much better.", why: "je te le conseille (pronouns before the verb); bon → meilleur." },
      { p: "D'accord. Il y a une séance ce soir à vingt heures. Tu veux le revoir avec moi ?", fr: "OK. There's a showing at eight tonight. Do you want to see it again with me?" },
      { y: ["Pourquoi pas ! Il y a sûrement des détails dont je ne me souviens plus.", "Pourquoi pas ! Il y a sûrement des détails que je ne me souviens plus.", "Pourquoi pas ! Il y a sûrement des détails dont je ne souviens plus."], fr: "Why not! There are surely details I don't remember any more.", why: "se souvenir de → dont je me souviens." }
    ] }
  );

  W.READINGS.push({
    id: "dernierelettre", level: "B1", icon: "book-open", title: "Critique : La Dernière Lettre", genre: "Book review",
    intro: "A magazine reviews a (fictional) first novel that everyone is talking about. Dont, ce qui, ce que, celui and the words of a review.",
    intro_fr: "Un magazine fait la critique d'un premier roman (fictif) dont tout le monde parle. Dont, ce qui, ce que, celui et le vocabulaire de la critique.",
    paragraphs: [
      { en: "Le roman dont tout le monde parle cet automne s'appelle La Dernière Lettre. C'est le premier livre de Mathilde Arnaud, une jeune autrice bretonne qui était jusqu'ici professeure de lettres dans un collège de Brest.", fr: "The novel everyone is talking about this autumn is called La Dernière Lettre. It's the first book by Mathilde Arnaud, a young author from Brittany who was, until now, a French teacher at a secondary school in Brest." },
      { en: "L'histoire se passe aujourd'hui, dans un petit port breton. Jeanne, quatre-vingt-deux ans, reçoit une lettre envoyée en 1962, qui n'était jamais arrivée. L'homme dont elle était amoureuse lui proposait de partir avec lui en Amérique. Pourquoi n'a-t-elle jamais reçu cette lettre ? C'est ce que le roman nous fait découvrir, page après page.", fr: "The story is set today, in a small Breton harbour town. Jeanne, eighty-two, receives a letter sent in 1962 that had never arrived. The man she was in love with was asking her to leave for America with him. Why did she never receive this letter? That's what the novel lets us discover, page after page." },
      { en: "Ce qui frappe d'abord, c'est l'écriture : simple, précise, souvent drôle. Les personnages sont attachants, en particulier celui du facteur, qui va aider Jeanne dans son enquête. Et la fin, que je ne vous raconterai pas, est bouleversante.", fr: "What strikes you first is the writing: simple, precise, often funny. The characters are endearing, especially the postman, who helps Jeanne with her investigation. And the ending, which I won't tell you, is deeply moving." },
      { en: "Bien sûr, tout n'est pas parfait. Le milieu du livre est un peu lent, et certains lecteurs trouveront peut-être les retours en arrière difficiles à suivre. Mais ce sont des défauts mineurs.", fr: "Of course, not everything is perfect. The middle of the book is a bit slow, and some readers may find the flashbacks hard to follow. But these are minor flaws." },
      { en: "Parmi tous les romans de la rentrée littéraire, c'est celui que je vous conseille en priorité. Un vrai coup de cœur, à lire absolument !", fr: "Of all the novels of the autumn literary season, it's the one I recommend first. A real favourite, a must-read!" }
    ],
    glossary: { "bretonne": "from Brittany", "lettres": "literature (professeure de lettres: French teacher)", "envoyée": "sent", "amoureuse": "in love", "frappe": "strikes", "écriture": "writing, style", "attachants": "endearing, likeable", "facteur": "postman", "bouleversante": "deeply moving", "retours": "returns (retours en arrière: flashbacks)", "défauts": "flaws", "mineurs": "minor", "parmi": "among", "rentrée": "start of the season (la rentrée littéraire: the autumn book season)", "littéraire": "literary" },
    questions: [
      { q: "Qui est Mathilde Arnaud ?", o: ["Une actrice", "Une jeune autrice bretonne", "Une journaliste parisienne"], a: 1 },
      { q: "Qu'est-ce que Jeanne reçoit ?", o: ["Une lettre envoyée en 1962", "Un colis de son facteur", "Un billet pour l'Amérique"], a: 0 },
      { q: "Qui aide Jeanne dans son enquête ?", o: ["Sa fille", "Un policier", "Le facteur"], a: 2 },
      { q: "Quel défaut le critique trouve-t-il ?", o: ["La fin est décevante.", "Le milieu du livre est un peu lent.", "Les personnages sont froids."], a: 1 },
      { q: "Que pense le critique du livre ?", o: ["Il le déconseille.", "Il n'a pas fini le livre.", "C'est un coup de cœur, à lire absolument."], a: 2 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-b1-7", unit: "b1-7", level: "B1", icon: "ticket",
    title: "Qu'est-ce qu'on fait ce week-end ?", title_fr: "Qu'est-ce qu'on fait ce week-end ?",
    context: "Nina reads the weekend's cultural programme to her friend Bastien. They choose what to do.", context_fr: "Nina lit le programme culturel du week-end à son ami Bastien. Ils choisissent leurs sorties.",
    words: [["la médiathèque", "the (multimedia) library"], ["la salle des fêtes", "the village hall, the community hall"], ["adapté de", "adapted from"], ["un entracte", "an interval"], ["ça marche", "OK, deal"]],
    lines: [["Nina", "Regarde le programme du week-end. Il y a trois choses qui ont l'air bien.", "fr-FR"], ["Bastien", "Vas-y, lis-moi ce qu'il y a.", "fr-FR"], ["Nina", "Samedi, une exposition de photos sur l'Islande, à la médiathèque. L'entrée est gratuite.", "fr-FR"], ["Bastien", "Ah, c'est celle dont Paul m'a parlé ! Il paraît que les photos sont magnifiques.", "fr-FR"], ["Nina", "Ensuite, samedi soir, un concert de jazz dans le parc. Mais s'il pleut, il aura lieu à la salle des fêtes.", "fr-FR"], ["Bastien", "Bof, le jazz, ce n'est pas trop ce que je préfère. Et la troisième ?", "fr-FR"], ["Nina", "Dimanche après-midi, une pièce de théâtre adaptée d'un roman de Victor Hugo, Les Misérables. Les places coûtent quinze euros.", "fr-FR"], ["Bastien", "Ça a l'air génial, mais ce n'est pas un peu long ?", "fr-FR"], ["Nina", "Celle-ci dure deux heures, avec un entracte. Les critiques disent que les acteurs jouent très bien.", "fr-FR"], ["Bastien", "Alors, je propose qu'on fasse l'exposition samedi matin et le théâtre dimanche. Le jazz, je te le laisse !", "fr-FR"], ["Nina", "Ça marche ! Je réserve les places tout de suite.", "fr-FR"]],
    gist: ["Que font Nina et Bastien ?", ["Ils choisissent des sorties pour le week-end.", "Ils écrivent une critique.", "Ils achètent un livre."]],
    detail: [["Où a lieu l'exposition de photos ?", ["À la médiathèque", "Dans le parc", "Au théâtre"]], ["Que se passe-t-il pour le concert s'il pleut ?", ["Il a lieu à la salle des fêtes.", "Il est annulé.", "Il est reporté à dimanche."]], ["Combien coûtent les places de théâtre ?", ["Quinze euros", "Cinq euros", "C'est gratuit"]], ["Qu'est-ce que Bastien ne veut pas faire ?", ["Aller au concert de jazz", "Voir l'exposition", "Aller au théâtre"]]],
    decode: ["c'est celle dont Paul m'a parlé", "ce n'est pas trop ce que je préfère"],
    tip: "Pronouns like celle-ci or celle dont point back to something already mentioned. When you hear one, ask yourself which noun it replaces.", tip_fr: "Des pronoms comme celle-ci ou celle dont renvoient à quelque chose de déjà mentionné. Quand tu en entends un, demande-toi quel nom il remplace."
  }]);

  W.PROMPTS.push({ id: "fr-b1-7", level: "B1", q: "Parle d'un film, d'une série ou d'un livre que tu n'oublieras jamais. De quoi ça parle, et pourquoi tu l'as aimé ?", fr: "Talk about a film, a series or a book you'll never forget. What's it about, and why did you like it?", time: 150,
    phrases: ["C'est l'histoire de…", "Ça se passe…", "Ce qui m'a plu, c'est…", "Le personnage dont je me souviens le plus…", "Je le conseille à…"],
    model: "Le livre que je n'oublierai jamais, c'est Le Petit Prince, d'Antoine de Saint-Exupéry. C'est l'histoire d'un aviateur qui tombe en panne dans le désert et qui rencontre un petit garçon venu d'une autre planète. Ce qui m'a plu, c'est que le livre parle aux enfants et aux adultes de façon différente. Le personnage dont je me souviens le plus, c'est le renard. Je le conseille à tout le monde, et surtout à ceux qui pensent que c'est un livre pour enfants !" });

  W.WRITING_GUIDE["b1-7"] = { genre: "A film review (DELF B1)", genre_fr: "Une critique de film (DELF B1)",
    plan: [["Give a title and present the film: when, who made it.", "Donne un titre et présente le film : quand, de qui."], ["Say what it's about (c'est l'histoire de…).", "Dis de quoi ça parle (c'est l'histoire de…)."], ["Say what you liked, with ce qui, ce que or dont.", "Dis ce qui t'a plu, avec ce qui, ce que ou dont."], ["Give one weakness.", "Donne un point faible."], ["Recommend it, and to whom.", "Recommande-le, et à qui."]],
    marks: [["C'est l'histoire d'un groupe", "presenting the story", "présenter l'histoire"], ["Ce qui m'a d'abord plu", "ce qui", "ce qui"], ["Les acteurs, dont", "dont = including", "dont = parmi lesquels"], ["Le personnage dont je me souviens le plus", "dont + se souvenir de", "dont + se souvenir de"], ["c'est celui que joue", "a demonstrative pronoun", "un pronom démonstratif"], ["À voir absolument", "a recommendation", "une recommandation"]] };

  W.COURSE.push({ id: "b1-7", level: "B1", icon: "clapperboard", title: "Culture and going out", title_fr: "Sorties et culture",
    intro: "In this unit, you'll talk about films, books and shows: the relative pronoun dont and ce qui / ce que / ce dont, the demonstrative and possessive pronouns, and the French you need to tell what a story is about, review it and recommend it.",
    intro_fr: "Dans cette unité, tu vas parler de films, de livres et de spectacles : le pronom relatif dont et ce qui / ce que / ce dont, les pronoms démonstratifs et possessifs, et le français qu'il faut pour raconter une histoire, la critiquer et la recommander.",
    can: ["Use dont, and ce qui / ce que / ce dont", "Use celui, celle, ceux, celles and le mien, la tienne…", "Say what a film or a book is about", "Give your opinion on a work and recommend it", "Write a review"],
    can_fr: ["Utiliser dont, et ce qui / ce que / ce dont", "Utiliser celui, celle, ceux, celles et le mien, la tienne…", "Dire de quoi parle un film ou un livre", "Donner ton avis sur une œuvre et la recommander", "Écrire une critique"],
    lessons: [63, 64, 65], vocab: ["cultureFR", "critiqueFR"], reading: "dernierelettre", prompt: "fr-b1-7",
    writing: { task: "Your language school has a culture blog. Write a review (160-180 words) of a French film you've seen: what it's about, what you liked and didn't like, and who you'd recommend it to.", task_fr: "Ton école de langues a un blog culturel. Écris la critique (160 à 180 mots) d'un film français que tu as vu : de quoi il parle, ce que tu as aimé ou non, et à qui tu le conseilles.", words: "160-180",
      tips: ["C'est l'histoire de…", "Ça se passe…", "Ce qui m'a plu, c'est…", "Le seul défaut, c'est…", "Je le conseille à ceux qui…"],
      checklist: ["I presented the film and its story", "I used dont, and ce qui or ce que", "I used celui, celle or ceux", "I gave a weakness and a recommendation", "I wrote between 160 and 180 words"],
      model: "Un coup de cœur : Le Grand Bain\n\nLe mois dernier, j'ai enfin vu Le Grand Bain, une comédie française de Gilles Lellouche sortie en 2018. C'est l'histoire d'un groupe d'hommes de quarante ou cinquante ans, tous un peu perdus dans leur vie, qui décident de former une équipe de natation synchronisée.\n\nCe qui m'a d'abord plu, c'est le mélange d'humour et d'émotion : on rit beaucoup, mais certaines scènes sont vraiment touchantes. Les acteurs, dont Mathieu Amalric et Guillaume Canet, jouent tous très bien. Le personnage dont je me souviens le plus, c'est celui que joue Mathieu Amalric : un homme déprimé qui retrouve peu à peu confiance en lui grâce à l'équipe.\n\nBien sûr, le film n'est pas parfait : le début est un peu lent, et on devine assez vite la fin. Mais ce sont des détails.\n\nJe le conseille à tous ceux qui ont besoin de rire et de reprendre espoir. C'est le film idéal pour une soirée entre amis. À voir absolument, si possible avec des sous-titres français !" } });
})();
