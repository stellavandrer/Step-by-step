/* Cours de français, unité A1-4 « Around town / En ville » : les lieux de la ville, les prépositions de lieu,
   le verbe aller, à + le = au, à / en / au devant les villes et les pays, demander et indiquer le chemin.
   Personnages fictifs, prénoms français, lieux non nommés (pas de faits à vérifier). */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "villeFR", icon: "building-2", title: "Places in town", title_fr: "Les lieux de la ville", level: "A1", words: [
    ["la gare", "the railway station", "La gare est à dix minutes."],
    ["la poste", "the post office", "La poste ferme à midi le samedi."],
    ["la banque", "the bank", "Il y a une banque en face du parc."],
    ["la pharmacie", "the chemist's, the pharmacy", "Je vais à la pharmacie."],
    ["la boulangerie", "the bakery", "La boulangerie ouvre à sept heures."],
    ["le supermarché", "the supermarket", "Le supermarché est à côté de la gare."],
    ["le marché", "the market", "Le marché a lieu le dimanche matin."],
    ["le musée", "the museum", "Le musée est gratuit le premier dimanche du mois."],
    ["le cinéma", "the cinema", "On va au cinéma ce soir ?"],
    ["le parc", "the park", "Les enfants jouent au parc."],
    ["la place", "the square; a seat, a space", "Le café est sur la place."],
    ["la rue", "the street", "J'habite dans une rue calme."],
    ["l'église", "the church", "L'église est très ancienne."],
    ["la mairie", "the town hall", "La mairie est au centre-ville."],
    ["la bibliothèque", "the library", "Je travaille à la bibliothèque."],
    ["le pont", "the bridge", "Traversez le pont, et c'est à gauche."],
    ["le quartier", "the neighbourhood, the area", "C'est un quartier animé."],
    ["le centre-ville", "the town centre", "Il y a beaucoup de magasins au centre-ville."],
    ["le magasin", "the shop", "Le magasin est fermé le lundi."],
    ["l'hôtel", "the hotel", "L'hôtel est près de la gare."]
  ] },
  { id: "transportsFR", icon: "bus", title: "Getting around", title_fr: "Se déplacer", level: "A1", words: [
    ["le bus", "the bus", "Je prends le bus tous les matins."],
    ["le métro", "the underground, the subway", "Le métro est rapide."],
    ["le tramway", "the tram", "Le tramway passe toutes les cinq minutes."],
    ["le train", "the train", "Le train pour Lyon part à huit heures."],
    ["à pied", "on foot", "C'est à dix minutes à pied."],
    ["à vélo", "by bike", "Je vais au travail à vélo."],
    ["en bus", "by bus", "On y va en bus ?"],
    ["l'arrêt de bus", "the bus stop", "L'arrêt de bus est devant la poste."],
    ["la station de métro", "the underground station", "La station de métro est à deux minutes."],
    ["le ticket", "the ticket (bus, metro)", "Un ticket de métro, s'il vous plaît."],
    ["tout droit", "straight on", "Allez tout droit."],
    ["à gauche", "on the left, to the left", "Tournez à gauche."],
    ["à droite", "on the right, to the right", "La gare est à droite."],
    ["tourner", "to turn", "Tournez à la deuxième rue."],
    ["traverser", "to cross", "Traversez la place."],
    ["le carrefour", "the crossroads", "Au carrefour, tournez à droite."],
    ["le feu", "the traffic lights; fire", "Au feu, allez tout droit."],
    ["loin", "far", "C'est loin d'ici ?"],
    ["près", "near, close", "C'est tout près."],
    ["se perdre", "to get lost", "Je me perds toujours dans ce quartier !"]
  ] });

  W.LESSONS.push(
  {
    id: 12, level: "A1", icon: "map-pin",
    title: "Où est… ? Prepositions of place", title_fr: "Où est… ? Les prépositions de lieu",
    subtitle: "Say where things are, and the little contractions of de: du, des.", subtitle_fr: "Dire où sont les choses, et les petites contractions de de : du, des.",
    body: `
<h2>Where is it?</h2>
<table>
<tr><th>French</th><th>English</th></tr>
<tr><td><s-fr>dans</s-fr></td><td>in, inside</td></tr>
<tr><td><s-fr>sur</s-fr> · <s-fr>sous</s-fr></td><td>on · under</td></tr>
<tr><td><s-fr>devant</s-fr> · <s-fr>derrière</s-fr></td><td>in front of · behind</td></tr>
<tr><td><s-fr>entre</s-fr></td><td>between</td></tr>
<tr><td><s-fr>à côté de</s-fr></td><td>next to</td></tr>
<tr><td><s-fr>en face de</s-fr></td><td>opposite</td></tr>
<tr><td><s-fr>près de</s-fr> · <s-fr>loin de</s-fr></td><td>near · far from</td></tr>
<tr><td><s-fr>à gauche de</s-fr> · <s-fr>à droite de</s-fr></td><td>on the left of · on the right of</td></tr>
</table>
<h2>De + le = du, de + les = des</h2>
<p>Several of these expressions end in <s-fr>de</s-fr>. Before <s-fr>le</s-fr> and <s-fr>les</s-fr>, it joins them:</p>
<table>
<tr><th></th><th>Example</th></tr>
<tr><td>de + le = <s-fr>du</s-fr></td><td><s-fr>à côté du parc</s-fr></td></tr>
<tr><td>de + la = <s-fr>de la</s-fr></td><td><s-fr>près de la gare</s-fr></td></tr>
<tr><td>de + l' = <s-fr>de l'</s-fr></td><td><s-fr>en face de l'église</s-fr></td></tr>
<tr><td>de + les = <s-fr>des</s-fr></td><td><s-fr>loin des magasins</s-fr></td></tr>
</table>
<p>Never <s-fr>de le</s-fr> or <s-fr>de les</s-fr>: it's always <s-fr>du</s-fr> and <s-fr>des</s-fr>.</p>
<h2>Asking</h2>
<p><s-fr>Où est la banque ?</s-fr> (Where's the bank?) · <s-fr>Où sont les toilettes ?</s-fr> (Where are the toilets?) · <s-fr>Il y a une pharmacie près d'ici ?</s-fr> (Is there a chemist's near here?)</p>
<div class="tip"><s-fr>sur</s-fr> is also used for squares and avenues: <s-fr>Le café est sur la place.</s-fr> But for a street, French says <s-fr>dans</s-fr>: <s-fr>J'habite dans une rue calme.</s-fr></div>
`,
    examples: [
      ["Le livre est sur la table.", "The book is on the table."],
      ["Le chat est sous le lit.", "The cat is under the bed."],
      ["La banque est à côté du parc.", "The bank is next to the park."],
      ["La poste est en face de la gare.", "The post office is opposite the station."],
      ["J'habite près de l'église.", "I live near the church."],
      ["Le cinéma est loin des magasins.", "The cinema is far from the shops."],
      ["Où sont les toilettes, s'il vous plaît ?", "Where are the toilets, please?"],
      ["Il y a une pharmacie près d'ici ?", "Is there a chemist's near here?"]
    ],
    quiz: [
      { q: "Complete: “La banque est à côté ___ parc.”", o: ["de le", "du", "de la"], a: 1, ex: "de + le = du." },
      { q: "Complete: “J'habite près ___ magasins.”", o: ["des", "de les", "du"], a: 0, ex: "de + les = des." },
      { q: "“Opposite the station” is:", o: ["devant la gare", "en face de la gare", "derrière la gare"], a: 1, ex: "en face de = opposite. Devant = in front of." },
      { q: "“The cat is under the bed” is:", o: ["Le chat est sur le lit.", "Le chat est sous le lit.", "Le chat est dans le lit."], a: 1, ex: "sous = under, sur = on." },
      { q: "Complete: “Il y a une pharmacie près ___ ?”", o: ["d'ici", "ici", "de ici"], a: 0, ex: "près d'ici = near here (de becomes d' before a vowel)." }
    ]
  },
  {
    id: 13, level: "A1", icon: "route",
    title: "Je vais au cinéma: aller, and à + le = au", title_fr: "Je vais au cinéma : aller, et à + le = au",
    subtitle: "The verb to go, the contractions of à, and how to say “in” or “to” a town or a country.", subtitle_fr: "Le verbe aller, les contractions de à, et comment dire « à » ou « en » devant une ville ou un pays.",
    body: `
<h2>Aller (to go): irregular, and very frequent</h2>
<table>
<tr><th>French</th><th>English</th></tr>
<tr><td><s-fr>je vais</s-fr></td><td>I go, I'm going</td></tr>
<tr><td><s-fr>tu vas</s-fr></td><td>you go</td></tr>
<tr><td><s-fr>il va</s-fr> · <s-fr>elle va</s-fr> · <s-fr>on va</s-fr></td><td>he, she goes · we go</td></tr>
<tr><td><s-fr>nous allons</s-fr></td><td>we go</td></tr>
<tr><td><s-fr>vous allez</s-fr></td><td>you go</td></tr>
<tr><td><s-fr>ils vont</s-fr> · <s-fr>elles vont</s-fr></td><td>they go</td></tr>
</table>
<p>You already know it from <s-fr>Comment allez-vous ?</s-fr> and <s-fr>Ça va ?</s-fr></p>
<h2>À + le = au, à + les = aux</h2>
<table>
<tr><th></th><th>Example</th></tr>
<tr><td>à + le = <s-fr>au</s-fr></td><td><s-fr>Je vais au cinéma.</s-fr></td></tr>
<tr><td>à + la = <s-fr>à la</s-fr></td><td><s-fr>Je vais à la gare.</s-fr></td></tr>
<tr><td>à + l' = <s-fr>à l'</s-fr></td><td><s-fr>Je vais à l'hôpital.</s-fr></td></tr>
<tr><td>à + les = <s-fr>aux</s-fr></td><td><s-fr>Je vais aux toilettes.</s-fr></td></tr>
</table>
<p>Never <s-fr>à le</s-fr> or <s-fr>à les</s-fr>. But to someone's home, it's <s-fr>chez</s-fr>: <s-fr>Je vais chez le médecin.</s-fr> · <s-fr>Je vais chez Paul.</s-fr></p>
<h2>Towns and countries</h2>
<p>One word in English ("in" or "to"), three in French:</p>
<table>
<tr><th>Before…</th><th>French</th><th>Example</th></tr>
<tr><td>a town</td><td><s-fr>à</s-fr></td><td><s-fr>J'habite à Lyon.</s-fr> · <s-fr>Je vais à Londres.</s-fr></td></tr>
<tr><td>a feminine country (most end in -e)</td><td><s-fr>en</s-fr></td><td><s-fr>en France</s-fr>, <s-fr>en Angleterre</s-fr>, <s-fr>en Espagne</s-fr></td></tr>
<tr><td>a masculine country</td><td><s-fr>au</s-fr></td><td><s-fr>au Canada</s-fr>, <s-fr>au Japon</s-fr>, <s-fr>au Royaume-Uni</s-fr></td></tr>
<tr><td>a plural country</td><td><s-fr>aux</s-fr></td><td><s-fr>aux États-Unis</s-fr></td></tr>
</table>
<div class="tip">To say where you come from, use <s-fr>venir de</s-fr>, with the same contractions as de: <s-fr>Je viens de Londres.</s-fr> · <s-fr>Je viens du Canada.</s-fr> · <s-fr>Je viens des États-Unis.</s-fr> · <s-fr>Je viens d'Irlande.</s-fr></div>
`,
    examples: [
      ["Je vais au travail à pied.", "I walk to work."],
      ["Tu vas à la gare ?", "Are you going to the station?"],
      ["Nous allons au marché le dimanche.", "We go to the market on Sundays."],
      ["Ils vont aux États-Unis cet été.", "They're going to the United States this summer."],
      ["J'habite à Bordeaux, en France.", "I live in Bordeaux, in France."],
      ["Ma sœur habite au Canada.", "My sister lives in Canada."],
      ["Je vais chez le médecin.", "I'm going to the doctor's."],
      ["Je viens du Royaume-Uni.", "I come from the United Kingdom."]
    ],
    quiz: [
      { q: "Complete: “Je vais ___ cinéma.”", o: ["à le", "au", "à la"], a: 1, ex: "à + le = au." },
      { q: "Complete: “Nous ___ à Paris demain.”", o: ["allons", "allez", "vont"], a: 0, ex: "nous allons." },
      { q: "“I live in Canada” is:", o: ["J'habite en Canada.", "J'habite au Canada.", "J'habite à Canada."], a: 1, ex: "A masculine country: au." },
      { q: "“I'm going to Spain” is:", o: ["Je vais en Espagne.", "Je vais au Espagne.", "Je vais à l'Espagne."], a: 0, ex: "A feminine country: en." },
      { q: "“I'm going to the doctor's” is:", o: ["Je vais au médecin.", "Je vais chez le médecin.", "Je vais à le médecin."], a: 1, ex: "To someone's place: chez." }
    ]
  },
  {
    id: 14, level: "A1", kind: "functional", icon: "signpost",
    title: "Everyday French: asking and giving directions", title_fr: "Le français de tous les jours : demander et indiquer le chemin",
    subtitle: "Stop someone politely, ask the way and understand the answer.", subtitle_fr: "Arrêter quelqu'un poliment, demander le chemin et comprendre la réponse.",
    body: `
<h2>Asking</h2>
<p><s-fr>Excusez-moi, madame, où est la gare, s'il vous plaît ?</s-fr> · <s-fr>Pardon, monsieur, pour aller au musée ?</s-fr> (How do I get to the museum?) · <s-fr>C'est loin ?</s-fr> (Is it far?) · <s-fr>C'est à combien de minutes à pied ?</s-fr> (How many minutes on foot?)</p>
<h2>Understanding the answer</h2>
<table>
<tr><th>French</th><th>English</th></tr>
<tr><td><s-fr>Allez tout droit.</s-fr></td><td>Go straight on.</td></tr>
<tr><td><s-fr>Tournez à gauche.</s-fr> · <s-fr>Tournez à droite.</s-fr></td><td>Turn left. · Turn right.</td></tr>
<tr><td><s-fr>Prenez la deuxième rue à droite.</s-fr></td><td>Take the second street on the right.</td></tr>
<tr><td><s-fr>Traversez la place.</s-fr></td><td>Cross the square.</td></tr>
<tr><td><s-fr>Au feu, tournez à gauche.</s-fr></td><td>At the traffic lights, turn left.</td></tr>
<tr><td><s-fr>C'est à cinq minutes à pied.</s-fr></td><td>It's five minutes' walk.</td></tr>
<tr><td><s-fr>C'est sur votre gauche.</s-fr></td><td>It's on your left.</td></tr>
</table>
<h2>The imperative: giving instructions</h2>
<p>To give an instruction, use the present without the subject: <s-fr>vous tournez</s-fr> → <s-fr>Tournez !</s-fr> With tu, -er verbs lose their -s: <s-fr>tu tournes</s-fr> → <s-fr>Tourne à gauche !</s-fr> Aller does the same: <s-fr>Va tout droit !</s-fr></p>
<div class="tip">Didn't understand? <s-fr>Pardon, vous pouvez répéter plus lentement ?</s-fr> (Sorry, can you say that again more slowly?) Then repeat what you understood: <s-fr>Donc, tout droit, puis à gauche au feu ?</s-fr></div>
`,
    examples: [
      ["Excusez-moi, où est la gare, s'il vous plaît ?", "Excuse me, where's the station, please?"],
      ["Pardon, monsieur, pour aller au musée ?", "Excuse me, how do I get to the museum?"],
      ["Allez tout droit, puis tournez à gauche.", "Go straight on, then turn left."],
      ["Prenez la deuxième rue à droite.", "Take the second street on the right."],
      ["Traversez le pont.", "Cross the bridge."],
      ["C'est à dix minutes à pied.", "It's ten minutes' walk."],
      ["Tourne à droite au feu !", "Turn right at the lights!"]
    ],
    quiz: [
      { q: "“Go straight on” is:", o: ["Allez tout droit.", "Allez à droite.", "Allez droite tout."], a: 0, ex: "tout droit = straight on; à droite = to the right." },
      { q: "“Take the second street on the left” is:", o: ["Prenez la deuxième rue à gauche.", "Prenez la seconde rue gauche.", "Prenez deux rues à gauche."], a: 0, ex: "Prenez la deuxième rue à gauche." },
      { q: "To ask the way politely, you start with:", o: ["Hé !", "Excusez-moi, madame…", "Dis-moi…"], a: 1, ex: "Excusez-moi or Pardon, with monsieur or madame." },
      { q: "With tu, “Turn left!” is:", o: ["Tournes à gauche !", "Tourne à gauche !", "Tu tournes à gauche !"], a: 1, ex: "Imperative with tu: -er verbs lose their -s." },
      { q: "“C'est à cinq minutes à pied” means:", o: ["It's five minutes' walk.", "It's five minutes by bus.", "It's at five o'clock."], a: 0, ex: "à pied = on foot." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    12: {
      gap: [["La banque est à côté ___ parc. (of the)", "du"], ["J'habite près ___ magasins. (of the)", "des"], ["Le chat est ___ le lit. (under)", "sous"], ["La poste est en ___ de la gare. (opposite)", "face"]],
      fix: [["Le café est à côté de le cinéma.", "Le café est à côté du cinéma.", "de + le = du."], ["J'habite près de les magasins.", "J'habite près des magasins.", "de + les = des."]],
      task: ["Describe where four places are in your street or your neighbourhood.", "Décris où se trouvent quatre lieux dans ta rue ou ton quartier.", "Il y a une boulangerie en face de chez moi. La pharmacie est à côté de la banque. Le parc est derrière l'église. L'arrêt de bus est devant la poste."]
    },
    13: {
      gap: [["Je vais ___ cinéma ce soir. (to the)", "au"], ["Ils ___ au marché. (aller)", "vont"], ["Ma sœur habite ___ Canada. (in)", "au"], ["Nous partons ___ Espagne. (to)", "en"]],
      fix: [["Je vais à le parc.", "Je vais au parc.", "à + le = au."], ["J'habite en Canada.", "J'habite au Canada.", "A masculine country: au."]],
      task: ["Say where four people you know live or are going this year: towns and countries.", "Dis où habitent ou vont cette année quatre personnes que tu connais : villes et pays.", "Mon frère habite à Londres. Mes parents vont au Portugal cet été. Ma meilleure amie habite aux États-Unis. Moi, je vais en France en septembre !"]
    },
    14: {
      gap: [["Allez tout ___. (straight on)", "droit"], ["Tournez à ___. (left)", "gauche"], ["Prenez la ___ rue à droite. (second)", "deuxième"], ["C'est à dix minutes à ___. (on foot)", "pied"]],
      fix: [["Tournes à droite !", "Tourne à droite !", "Imperative with tu: -er verbs lose their -s."], ["Pour aller à le musée, s'il vous plaît ?", "Pour aller au musée, s'il vous plaît ?", "à + le = au."]],
      task: ["Write directions from a station or a bus stop to your home (or an invented address).", "Écris le chemin d'une gare ou d'un arrêt de bus jusqu'à chez toi (ou une adresse inventée).", "En sortant de la gare, tourne à droite et va tout droit jusqu'au feu. Au feu, tourne à gauche. Prends la deuxième rue à droite : c'est la rue des Lilas. J'habite au numéro douze, en face de la boulangerie."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "chemin", lesson: 14, level: "A1", icon: "signpost", partner: "Agathe", role: "a passer-by",
    title: "Asking the way to the station", title_fr: "Demander le chemin de la gare",
    setting: "You've just arrived in a French town and you're looking for the railway station. You stop Agathe in the street.", setting_fr: "Tu viens d'arriver dans une ville française et tu cherches la gare. Tu arrêtes Agathe dans la rue.",
    turns: [
      { p: "Oui ? Je peux vous aider ?", fr: "Yes? Can I help you?" },
      { y: ["Oui, merci ! Pardon, madame, où est la gare, s'il vous plaît ?", "Oui, merci ! Hé, où est la gare ?", "Oui, merci ! Pardon, madame, où sont la gare, s'il vous plaît ?"], fr: "Yes, thank you! Excuse me, where's the station, please?", why: "Pardon, madame… s'il vous plaît: polite. One station: où est." },
      { p: "La gare ? Ce n'est pas loin. Allez tout droit, puis prenez la deuxième rue à gauche.", fr: "The station? It's not far. Go straight on, then take the second street on the left." },
      { y: ["Pardon, vous pouvez répéter plus lentement ?", "Pardon, tu peux répéter plus lentement ?", "Pardon, vous pouvez répétez plus lentement ?"], fr: "Sorry, can you say that again more slowly?", why: "With a stranger: vous. After pouvez, the infinitive: répéter." },
      { p: "Bien sûr ! Tout droit… puis la deuxième rue à gauche. Ensuite, la gare est en face du parc.", fr: "Of course! Straight on… then the second street on the left. Then the station is opposite the park." },
      { y: ["D'accord : tout droit, la deuxième à gauche, et c'est en face du parc. C'est à combien de minutes ?", "D'accord : tout droit, la deuxième à gauche, et c'est en face de le parc. C'est à combien de minutes ?", "D'accord : tout droit, la deux à gauche, et c'est en face du parc. C'est à combien de minutes ?"], fr: "OK: straight on, the second on the left, and it's opposite the park. How many minutes is it?", why: "de + le = du. The second = la deuxième." },
      { p: "À pied, environ dix minutes. Ou vous pouvez prendre le bus numéro trois, l'arrêt est juste là.", fr: "On foot, about ten minutes. Or you can take the number three bus: the stop is just there." },
      { y: ["Je vais à pied, il fait beau ! Merci beaucoup, bonne journée !", "Je vais en pied, il fait beau ! Merci beaucoup, bonne journée !", "Je vais à pied, il fait beau ! Merci beaucoup, bon journée !"], fr: "I'll walk, it's a nice day! Thank you very much, have a nice day!", why: "On foot: à pied. Journée is feminine: bonne journée." }
    ] }
  );

  W.READINGS.push({
    id: "monquartier", level: "A1", icon: "map-pin", title: "Mon quartier", genre: "Blog",
    intro: "Hugo describes the neighbourhood where he lives, and the places he likes. Prepositions of place, aller and au / à la.",
    intro_fr: "Hugo décrit le quartier où il habite, et les lieux qu'il aime. Les prépositions de lieu, aller, et au / à la.",
    paragraphs: [
      { en: "J'habite dans un petit quartier près du centre-ville. Ma rue est calme, mais il y a beaucoup de choses autour : une boulangerie, une pharmacie, un supermarché et un café sur la place.", fr: "I live in a small neighbourhood near the town centre. My street is quiet, but there are lots of things around: a bakery, a chemist's, a supermarket and a café on the square." },
      { en: "Le matin, je vais à la boulangerie en face de chez moi. Les croissants sont délicieux ! Ensuite, je prends le bus. L'arrêt est devant la poste, à deux minutes à pied.", fr: "In the morning, I go to the bakery opposite my place. The croissants are delicious! Then I take the bus. The stop is in front of the post office, two minutes' walk away." },
      { en: "Le samedi, je vais au marché avec ma voisine, Mathilde. Le marché est à côté de l'église, entre la mairie et le parc. On achète des fruits, des légumes et du fromage.", fr: "On Saturdays, I go to the market with my neighbour, Mathilde. The market is next to the church, between the town hall and the park. We buy fruit, vegetables and cheese." },
      { en: "Le dimanche, je vais au parc avec mon chien, ou au cinéma avec des amis. Le cinéma n'est pas dans le quartier : il est au centre-ville, à quinze minutes à vélo. J'adore mon quartier !", fr: "On Sundays, I go to the park with my dog, or to the cinema with friends. The cinema isn't in the neighbourhood: it's in the town centre, fifteen minutes by bike. I love my neighbourhood!" }
    ],
    glossary: { "calme": "quiet", "autour": "around", "boulangerie": "bakery", "délicieux": "delicious", "ensuite": "then, next", "arrêt": "stop", "voisine": "neighbour (woman)", "achète": "buy", "légumes": "vegetables", "fromage": "cheese", "vélo": "bike" },
    questions: [
      { q: "La rue d'Hugo est comment ?", o: ["Calme", "Très animée", "Dangereuse"], a: 0 },
      { q: "Où est la boulangerie ?", o: ["À côté de l'église", "En face de chez Hugo", "Au centre-ville"], a: 1 },
      { q: "Où est l'arrêt de bus ?", o: ["Devant la poste", "Derrière le parc", "Sur la place"], a: 0 },
      { q: "Le marché est…", o: ["dans la rue d'Hugo", "entre la mairie et le parc", "au centre-ville"], a: 1 },
      { q: "Comment Hugo va au cinéma ?", o: ["En bus", "À pied", "À vélo"], a: 2 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-a1-4", unit: "a1-4", level: "A1", icon: "navigation",
    title: "Pour aller au musée ?", title_fr: "Pour aller au musée ?",
    context: "Raphaël, a tourist, asks Élodie the way to the museum.", context_fr: "Raphaël, un touriste, demande à Élodie le chemin du musée.",
    words: [["un plan", "a map (of a town)"], ["le feu", "the traffic lights"], ["traverser", "to cross"], ["un pont", "a bridge"], ["ouvert", "open"]],
    lines: [["Raphaël", "Excusez-moi, madame. Pour aller au musée des Beaux-Arts, s'il vous plaît ?", "fr-FR"], ["Élodie", "Le musée ? C'est facile. Vous allez tout droit jusqu'au feu.", "fr-FR"], ["Raphaël", "Jusqu'au feu, d'accord.", "fr-FR"], ["Élodie", "Au feu, vous tournez à droite et vous traversez le pont.", "fr-FR"], ["Raphaël", "À droite, puis le pont…", "fr-FR"], ["Élodie", "Oui. Après le pont, prenez la première rue à gauche. Le musée est au bout de la rue, en face d'une grande église.", "fr-FR"], ["Raphaël", "C'est loin ?", "fr-FR"], ["Élodie", "Non, c'est à un quart d'heure à pied. Ou vous pouvez prendre le tramway : l'arrêt est juste derrière vous.", "fr-FR"], ["Raphaël", "Je préfère marcher. Le musée est ouvert le lundi ?", "fr-FR"], ["Élodie", "Ah non, il est fermé le lundi. Mais aujourd'hui, c'est mardi !", "fr-FR"], ["Raphaël", "Ah oui, c'est vrai ! Merci beaucoup, madame.", "fr-FR"], ["Élodie", "Je vous en prie. Bonne visite !", "fr-FR"]],
    gist: ["Qu'est-ce que Raphaël cherche ?", ["Le musée", "La gare", "Un hôtel"]],
    detail: [["Au feu, Raphaël tourne…", ["à droite", "à gauche", "tout droit"]], ["Après le pont, il prend…", ["la première rue à gauche", "la deuxième rue à droite", "le tramway"]], ["Le musée est en face de…", ["une grande église", "la mairie", "un parc"]], ["Quel jour le musée est fermé ?", ["Le lundi", "Le mardi", "Le dimanche"]]],
    decode: ["Vous allez tout droit jusqu'au feu.", "c'est à un quart d'heure à pied"],
    tip: "Directions come in small steps: tout droit, au feu, à droite, le pont, la première à gauche. Repeat each step out loud, as Raphaël does: it helps you remember, and the other person can correct you.", tip_fr: "Les indications arrivent par petites étapes : tout droit, au feu, à droite, le pont, la première à gauche. Répète chaque étape à voix haute, comme Raphaël : ça aide à retenir, et l'autre personne peut te corriger."
  }]);

  W.PROMPTS.push({ id: "fr-a1-4", level: "A1", q: "Décris ton quartier : qu'est-ce qu'il y a, et où vas-tu souvent ?", fr: "Describe your neighbourhood: what is there, and where do you often go?", time: 90,
    phrases: ["J'habite dans un quartier…", "Il y a… / Il n'y a pas de…", "… est à côté de / en face de…", "Je vais souvent au / à la…", "C'est à … minutes à pied"],
    model: "J'habite dans un quartier calme, près de la gare. Dans ma rue, il y a une boulangerie, une pharmacie et un petit supermarché. Il n'y a pas de cinéma, mais il y a un grand parc derrière l'église. Je vais souvent au parc le dimanche. Le marché est sur la place, à cinq minutes à pied. J'aime beaucoup mon quartier !" });

  W.WRITING_GUIDE["a1-4"] = { genre: "Directions in a message", genre_fr: "Un itinéraire dans un message",
    plan: [["Say hello and that you're happy about the visit.", "Dis bonjour et réjouis-toi de la visite."], ["Where to start: the station or the bus stop.", "Le point de départ : la gare ou l'arrêt de bus."], ["The way, step by step.", "Le chemin, étape par étape."], ["A landmark near your home.", "Un repère près de chez toi."], ["An ending with your phone number.", "Une fin avec ton numéro de téléphone."]],
    marks: [["à la gare", "à + la", "à + la"], ["prends le bus numéro cinq", "imperative with tu", "l'impératif avec tu"], ["descends au troisième arrêt", "imperative of an -re verb", "l'impératif d'un verbe en -re"], ["tourne à gauche", "imperative of an -er verb, no -s", "l'impératif d'un verbe en -er, sans -s"], ["en face du parc", "de + le = du", "de + le = du"], ["À samedi !", "à + day", "à + jour"]] };

  W.COURSE.push({ id: "a1-4", level: "A1", icon: "map-pin", title: "Around town", title_fr: "En ville",
    intro: "In this unit, you'll find your way around a French town: the places, the prepositions to say where they are, the verb aller with au, à la and aux, and the language of directions.",
    intro_fr: "Dans cette unité, tu vas te repérer dans une ville française : les lieux, les prépositions pour dire où ils sont, le verbe aller avec au, à la et aux, et les mots pour indiquer un chemin.",
    can: ["Name the places in a town and say where they are", "Use aller, au, à la, aux, and à / en / au with towns and countries", "Ask the way and understand directions", "Give simple instructions with the imperative"],
    can_fr: ["Nommer les lieux d'une ville et dire où ils sont", "Utiliser aller, au, à la, aux, et à / en / au devant les villes et les pays", "Demander le chemin et comprendre les indications", "Donner des instructions simples à l'impératif"],
    lessons: [12, 13, 14], vocab: ["villeFR", "transportsFR"], reading: "monquartier", prompt: "fr-a1-4",
    writing: { task: "A friend is coming to see you on Saturday by train. Write a message (60-80 words) explaining how to get from the station to your home.", task_fr: "Un ami vient te voir samedi en train. Écris-lui un message (60 à 80 mots) pour expliquer le chemin de la gare à chez toi.", words: "60-80",
      tips: ["Super, à samedi !", "Prends le bus… / Va tout droit…", "Tourne à gauche / à droite", "C'est en face du… / à côté de la…", "Mon numéro, c'est le…"],
      checklist: ["I used the imperative with tu (prends, va, tourne)", "I used au / à la / du / de la correctly", "The directions are in a clear order (d'abord, ensuite, puis)", "I gave a landmark near my home", "I stayed between 60 and 80 words"],
      model: "Salut Romain !\n\nSuper, à samedi ! Quand tu arrives à la gare, prends le bus numéro cinq devant la sortie. Ensuite, descends au troisième arrêt, « Place du Marché ». Va tout droit jusqu'au feu, puis tourne à gauche. J'habite au numéro huit, en face du parc, au deuxième étage. Si tu te perds, appelle-moi : mon numéro, c'est le zéro six, douze, quarante, dix-huit, cinquante.\n\nÀ samedi !\nInès" } });
})();
