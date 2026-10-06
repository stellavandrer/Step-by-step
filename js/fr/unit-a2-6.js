/* Cours de français, unité A2-6 « Home / Chez soi » : le logement et les meubles, comparatif et superlatif
   (plus / moins / aussi… que, meilleur, mieux, le plus… de), les pronoms y et en, lire une annonce, visiter
   un appartement et décrire son logement. Personnages fictifs, prénoms français. Faits vérifiables seulement :
   un T2 compte deux pièces principales (cuisine et salle de bains non comptées), le rez-de-chaussée correspond
   au ground floor britannique, l'état des lieux se fait à l'entrée et à la sortie, Nantes est sur la Loire et
   le TGV Paris-Nantes met environ deux heures. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "logementFR", icon: "house", title: "Housing", title_fr: "Le logement", level: "A2", words: [
    ["le logement", "housing, accommodation", "Trouver un logement à Paris, c'est difficile."],
    ["la pièce", "the room", "L'appartement a trois pièces."],
    ["le salon", "the living room", "On regarde la télé dans le salon."],
    ["la cuisine", "the kitchen; cooking", "La cuisine est petite mais pratique."],
    ["la salle de bains", "the bathroom", "La salle de bains a une fenêtre."],
    ["les toilettes", "the toilet", "Les toilettes sont à côté de l'entrée."],
    ["le couloir", "the corridor, the hallway", "Le couloir est un peu sombre."],
    ["l'immeuble", "the block of flats, the building", "J'habite dans un vieil immeuble."],
    ["le rez-de-chaussée", "the ground floor", "La boulangerie est au rez-de-chaussée."],
    ["l'étage", "the floor, the storey", "J'habite au troisième étage."],
    ["le loyer", "the rent", "Le loyer est de sept cents euros."],
    ["les charges", "the service charges, the bills", "Les charges sont comprises."],
    ["le propriétaire / la propriétaire", "the landlord, the owner (m) / the landlady, the owner (f)", "La propriétaire habite à côté."],
    ["le locataire / la locataire", "the tenant (m) / the tenant (f)", "Les locataires paient le loyer au début du mois."],
    ["louer", "to rent", "Je loue un studio près de la fac."],
    ["déménager", "to move (house)", "On déménage le mois prochain."],
    ["meublé / meublée", "furnished (m) / furnished (f)", "C'est un appartement meublé."],
    ["le chauffage", "the heating", "Le chauffage ne marche pas."]
  ] },
  { id: "meublesFR", icon: "sofa", title: "Furniture and appliances", title_fr: "Les meubles et l'équipement", level: "A2", words: [
    ["le meuble", "the piece of furniture", "On a acheté des meubles d'occasion."],
    ["le lit", "the bed", "Le lit est très confortable."],
    ["le canapé", "the sofa", "Il dort sur le canapé."],
    ["le fauteuil", "the armchair", "Mon grand-père lit dans son fauteuil."],
    ["l'armoire", "the wardrobe", "L'armoire est dans la chambre."],
    ["le placard", "the cupboard", "Les verres sont dans le placard."],
    ["la chaise", "the chair", "Il manque une chaise."],
    ["le bureau", "the desk; the office", "Je travaille à mon bureau."],
    ["l'étagère", "the shelf, the bookcase", "Mes livres sont sur l'étagère."],
    ["la lampe", "the lamp", "Allume la lampe, il fait sombre."],
    ["le miroir", "the mirror", "Il y a un grand miroir dans l'entrée."],
    ["le tapis", "the rug, the carpet", "Un tapis rouge dans le salon."],
    ["les rideaux", "the curtains", "Ferme les rideaux, s'il te plaît."],
    ["le frigo", "the fridge", "Il n'y a plus rien dans le frigo !"],
    ["le four", "the oven", "Le gâteau est dans le four."],
    ["la machine à laver", "the washing machine", "La machine à laver est dans la salle de bains."],
    ["la douche", "the shower", "Je prends une douche le matin."],
    ["la baignoire", "the bath, the bathtub", "Il n'y a pas de baignoire, seulement une douche."]
  ] });

  W.LESSONS.push(
  {
    id: 39, level: "A2", icon: "scale",
    title: "Plus grand que…: comparing", title_fr: "Plus grand que… : comparer",
    subtitle: "More, less, as… as, better, the best: and the two words you can't build with plus.", subtitle_fr: "Plus, moins, aussi… que, meilleur, le meilleur : et les deux mots qu'on ne construit pas avec plus.",
    body: `
<h2>Plus, moins, aussi + adjective + que</h2>
<p>To compare two things, put <s-fr>plus</s-fr> (more), <s-fr>moins</s-fr> (less) or <s-fr>aussi</s-fr> (as) before the adjective, and <s-fr>que</s-fr> (than, as) after it. The adjective still agrees.</p>
<table>
<tr><th>French</th><th>English</th></tr>
<tr><td><s-fr>Le nouvel appartement est plus grand que l'ancien.</s-fr></td><td>The new flat is bigger than the old one.</td></tr>
<tr><td><s-fr>La cuisine est moins lumineuse que le salon.</s-fr></td><td>The kitchen is less bright than the living room.</td></tr>
<tr><td><s-fr>Le loyer est aussi cher qu'à Paris.</s-fr></td><td>The rent is as expensive as in Paris.</td></tr>
</table>
<p>With a noun, use <s-fr>plus de</s-fr>, <s-fr>moins de</s-fr>, <s-fr>autant de</s-fr> (as much, as many): <s-fr>Il y a plus de place ici.</s-fr> · <s-fr>On a autant de pièces que vous.</s-fr></p>
<p>With a verb, put <s-fr>plus</s-fr>, <s-fr>moins</s-fr> or <s-fr>autant</s-fr> after it: <s-fr>Je travaille plus que toi.</s-fr> After <s-fr>que</s-fr>, use <s-fr>moi, toi, lui, elle</s-fr>.</p>
<h2>Bon → meilleur, bien → mieux</h2>
<p>Never say <s-fr>plus bon</s-fr> or <s-fr>plus bien</s-fr>. <s-fr>meilleur</s-fr> is an adjective and agrees (<s-fr>meilleure, meilleurs, meilleures</s-fr>); <s-fr>mieux</s-fr> is an adverb and never changes.</p>
<p><s-fr>Ce pain est meilleur que l'autre.</s-fr> (better, the adjective bon) · <s-fr>Elle cuisine mieux que moi.</s-fr> (better, the adverb bien) · <s-fr>Je vais mieux.</s-fr> (I feel better.)</p>
<h2>The superlative: le plus, le moins, le meilleur</h2>
<p><s-fr>le / la / les plus</s-fr> + adjective. If the adjective normally comes after the noun, the article is repeated: <s-fr>la pièce la plus calme</s-fr> (the quietest room). If it comes before, there's only one article: <s-fr>la plus belle ville</s-fr>.</p>
<p>"In" after a superlative is <s-fr>de</s-fr>, not <s-fr>dans</s-fr>: <s-fr>le plus grand parc de la ville</s-fr> · <s-fr>le meilleur restaurant du quartier</s-fr>.</p>
<div class="tip">For food, French says <s-fr>c'est meilleur</s-fr> (it tastes better). For a situation or a solution, it says <s-fr>c'est mieux</s-fr>: <s-fr>Prends le train, c'est mieux.</s-fr></div>
`,
    examples: [
      ["Mon nouvel appartement est plus grand que l'ancien.", "My new flat is bigger than the old one."],
      ["La chambre est moins lumineuse que le salon.", "The bedroom is less bright than the living room."],
      ["Lyon est aussi belle que Paris.", "Lyon is as beautiful as Paris."],
      ["Il y a plus de place à la campagne.", "There's more room in the countryside."],
      ["Ce gâteau est meilleur que l'autre.", "This cake is better than the other one."],
      ["Tu parles mieux français que moi !", "You speak French better than me!"],
      ["C'est la pièce la plus calme de l'appartement.", "It's the quietest room in the flat."],
      ["C'est le meilleur restaurant du quartier.", "It's the best restaurant in the area."]
    ],
    quiz: [
      { q: "“The kitchen is smaller than the living room” is:", o: ["La cuisine est plus petite que le salon.", "La cuisine est plus petite de le salon.", "La cuisine est petite plus que le salon."], a: 0, ex: "plus + adjective + que." },
      { q: "“This bread is better” is:", o: ["Ce pain est plus bon.", "Ce pain est meilleur.", "Ce pain est mieux bon."], a: 1, ex: "bon → meilleur." },
      { q: "“She sings better than me” is:", o: ["Elle chante meilleur que moi.", "Elle chante mieux que moi.", "Elle chante mieux que je."], a: 1, ex: "bien → mieux, and moi after que." },
      { q: "“The biggest park in the city” is:", o: ["le plus grand parc dans la ville", "le plus grand parc de la ville", "le parc plus grand de la ville"], a: 1, ex: "After a superlative: de." },
      { q: "“The quietest room” is:", o: ["la plus calme pièce", "la pièce la plus calme", "la pièce plus calme"], a: 1, ex: "calme comes after the noun, so the article is repeated: la pièce la plus calme." }
    ]
  },
  {
    id: 40, level: "A2", icon: "map-pin",
    title: "J'y vais, j'en veux: the pronouns y and en", title_fr: "J'y vais, j'en veux : les pronoms y et en",
    subtitle: "Two tiny words French uses all the time, and English doesn't really have.", subtitle_fr: "Deux tout petits mots que le français utilise sans arrêt, et que l'anglais n'a pas vraiment.",
    body: `
<h2>Y: there, and à + a thing</h2>
<p><s-fr>y</s-fr> replaces a place (after <s-fr>à, en, chez, dans, sur</s-fr>…). In English, you often say "there", or nothing at all:</p>
<table>
<tr><th>French</th><th>English</th></tr>
<tr><td><s-fr>Tu vas à la boulangerie ? Oui, j'y vais.</s-fr></td><td>Are you going to the bakery? Yes, I'm going (there).</td></tr>
<tr><td><s-fr>Elle habite en Bretagne ? Oui, elle y habite depuis dix ans.</s-fr></td><td>Does she live in Brittany? Yes, she's lived there for ten years.</td></tr>
<tr><td><s-fr>Tu penses à ton déménagement ? Oui, j'y pense tout le temps.</s-fr></td><td>Are you thinking about your move? Yes, I think about it all the time.</td></tr>
</table>
<p>For a person, don't use <s-fr>y</s-fr>: <s-fr>Je pense à ma sœur.</s-fr> → <s-fr>Je pense à elle.</s-fr></p>
<h2>En: some, of them, from there</h2>
<p><s-fr>en</s-fr> replaces <s-fr>de</s-fr> + a noun: <s-fr>du, de la, des</s-fr>, a quantity, or a verb with <s-fr>de</s-fr>.</p>
<table>
<tr><th>French</th><th>English</th></tr>
<tr><td><s-fr>Tu veux du café ? Oui, j'en veux bien.</s-fr></td><td>Do you want some coffee? Yes, I'd like some.</td></tr>
<tr><td><s-fr>Tu as des enfants ? Oui, j'en ai deux.</s-fr></td><td>Do you have children? Yes, I have two.</td></tr>
<tr><td><s-fr>Il y a combien de chambres ? Il y en a trois.</s-fr></td><td>How many bedrooms are there? There are three.</td></tr>
<tr><td><s-fr>Tu as besoin de la voiture ? Non, je n'en ai pas besoin.</s-fr></td><td>Do you need the car? No, I don't need it.</td></tr>
</table>
<p>With a number or a quantity, <s-fr>en</s-fr> is compulsory: <s-fr>J'en ai deux.</s-fr> (never <s-fr>J'ai deux.</s-fr>)</p>
<h2>Where they go</h2>
<p>Like <s-fr>le, la, lui</s-fr>: before the conjugated verb (<s-fr>Je n'y vais pas.</s-fr>), before the infinitive (<s-fr>Je vais y aller.</s-fr>), before the auxiliary in the passé composé (<s-fr>J'en ai acheté.</s-fr>). In a positive command, after the verb with a hyphen: <s-fr>Allons-y !</s-fr></p>
<div class="tip">Before <s-fr>y</s-fr> and <s-fr>en</s-fr>, the command form of <s-fr>aller</s-fr> and of -er verbs gets its <s-fr>s</s-fr> back: <s-fr>Vas-y !</s-fr> (Go on!) · <s-fr>Manges-en !</s-fr> Two everyday phrases: <s-fr>On y va ?</s-fr> (Shall we go?) and <s-fr>Ça y est !</s-fr> (That's it, done!)</div>
`,
    examples: [
      ["Tu vas au marché ? Oui, j'y vais demain.", "Are you going to the market? Yes, I'm going tomorrow."],
      ["On y va ?", "Shall we go?"],
      ["Tu veux de l'eau ? Oui, j'en veux bien.", "Do you want some water? Yes, please."],
      ["J'ai deux sœurs. Et toi, tu en as combien ?", "I have two sisters. And you, how many do you have?"],
      ["Il y en a trois dans le placard.", "There are three in the cupboard."],
      ["Je n'en ai pas besoin.", "I don't need it."],
      ["Je vais y aller à pied.", "I'm going to go there on foot."],
      ["Ça y est, on a fini !", "That's it, we're done!"]
    ],
    quiz: [
      { q: "“Tu vas à la poste ? — Oui, …”", o: ["j'y vais.", "j'en vais.", "je vais."], a: 0, ex: "à la poste (a place) → y." },
      { q: "“Tu as des frères ? — Oui, …”", o: ["j'ai deux.", "j'en ai deux.", "j'y ai deux."], a: 1, ex: "With a number, en is compulsory." },
      { q: "“I'm going to go there tomorrow” is:", o: ["J'y vais aller demain.", "Je vais y aller demain.", "Je vais aller y demain."], a: 1, ex: "y goes before the infinitive." },
      { q: "“Go on!” (to a friend) is:", o: ["Va-y !", "Vas-y !", "Y va !"], a: 1, ex: "The s comes back before y: vas-y." },
      { q: "“Tu penses à ta grand-mère ? — Oui, …”", o: ["j'y pense.", "je pense à elle.", "j'en pense."], a: 1, ex: "For a person: à elle, not y." }
    ]
  },
  {
    id: 41, level: "A2", kind: "functional", icon: "house",
    title: "Everyday French: finding a flat and describing your home", title_fr: "Le français de tous les jours : trouver un appartement et décrire son logement",
    subtitle: "Decode a French flat ad, ask the right questions at a visit, and say where you live.", subtitle_fr: "Décoder une annonce, poser les bonnes questions pendant une visite, et dire où tu habites.",
    body: `
<h2>Reading an ad</h2>
<p>A typical French ad: <s-fr>À louer, T2 de 45 m², 3e étage avec ascenseur, cuisine équipée, 750 € charges comprises.</s-fr></p>
<table>
<tr><th>In the ad</th><th>Meaning</th></tr>
<tr><td><s-fr>un studio</s-fr></td><td>one main room</td></tr>
<tr><td><s-fr>un T2</s-fr> (or <s-fr>F2</s-fr>)</td><td>two main rooms: a living room and one bedroom (the kitchen and the bathroom don't count)</td></tr>
<tr><td><s-fr>m²</s-fr></td><td><s-fr>mètres carrés</s-fr>, square metres</td></tr>
<tr><td><s-fr>CC</s-fr> / <s-fr>HC</s-fr></td><td><s-fr>charges comprises</s-fr> (service charges included) / <s-fr>hors charges</s-fr> (not included)</td></tr>
<tr><td><s-fr>meublé</s-fr> / <s-fr>vide</s-fr></td><td>furnished / unfurnished</td></tr>
</table>
<p>Floors: <s-fr>le rez-de-chaussée</s-fr> is the ground floor, and <s-fr>le premier étage</s-fr> is one floor up, as in British English (the American "second floor").</p>
<h2>At a visit</h2>
<p><s-fr>Le loyer est de combien ?</s-fr> · <s-fr>Les charges sont comprises ?</s-fr> · <s-fr>Il est libre à partir de quand ?</s-fr> · <s-fr>Il y a une cave ?</s-fr> · <s-fr>Le chauffage est individuel ou collectif ?</s-fr> · <s-fr>Qu'est-ce qu'il faut pour le dossier ?</s-fr> (What do you need for the application?)</p>
<h2>Describing your home</h2>
<p>For the size, French uses <s-fr>faire</s-fr>: <s-fr>Mon appartement fait cinquante mètres carrés.</s-fr> For the view, <s-fr>donner sur</s-fr>: <s-fr>La chambre donne sur la cour.</s-fr> (The bedroom looks onto the courtyard.) And: <s-fr>Il est bien situé, près du métro.</s-fr> · <s-fr>Il y a du soleil le matin.</s-fr></p>
<div class="tip">When you move in and when you move out, the owner and the tenant do <s-fr>l'état des lieux</s-fr> together: a written check of the condition of each room. Keep your copy: it's what decides whether you get your deposit (<s-fr>le dépôt de garantie</s-fr>) back.</div>
`,
    examples: [
      ["À louer : T2 de quarante-cinq mètres carrés, charges comprises.", "To rent: one-bedroom flat, 45 square metres, service charges included."],
      ["Le loyer est de combien ?", "How much is the rent?"],
      ["Il est libre à partir de quand ?", "When is it available from?"],
      ["Mon appartement fait cinquante mètres carrés.", "My flat is fifty square metres."],
      ["La chambre donne sur la cour.", "The bedroom looks onto the courtyard."],
      ["J'habite au rez-de-chaussée.", "I live on the ground floor."],
      ["Qu'est-ce qu'il faut pour le dossier ?", "What do you need for the application?"]
    ],
    quiz: [
      { q: "A T2 is:", o: ["a flat with two bedrooms", "a flat with a living room and one bedroom", "a flat on the second floor"], a: 1, ex: "Two main rooms: living room + one bedroom." },
      { q: "“CC” in an ad means:", o: ["service charges included", "with a cellar", "with central heating"], a: 0, ex: "CC = charges comprises." },
      { q: "“The flat is sixty square metres” is:", o: ["L'appartement a soixante mètres carrés.", "L'appartement fait soixante mètres carrés.", "L'appartement est soixante mètres carrés."], a: 1, ex: "For the size: faire." },
      { q: "“Le premier étage” is:", o: ["the ground floor", "one floor above the ground floor", "the top floor"], a: 1, ex: "Ground floor = le rez-de-chaussée; le premier étage is one floor up." },
      { q: "“La chambre donne sur le jardin” means:", o: ["The bedroom gives the garden.", "The bedroom looks onto the garden.", "The bedroom is in the garden."], a: 1, ex: "donner sur = to look onto." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    39: {
      gap: [["Le salon est ___ grand que la chambre. (more)", "plus"], ["Ce gâteau est ___ que l'autre ! (better, bon)", "meilleur"], ["Elle chante ___ que moi. (better, bien)", "mieux"], ["C'est la pièce la plus calme ___ l'appartement. (in)", "de"]],
      fix: [["Ce café est plus bon.", "Ce café est meilleur.", "bon → meilleur, never plus bon."], ["C'est le plus grand parc dans la ville.", "C'est le plus grand parc de la ville.", "After a superlative, French uses de."]],
      task: ["Compare your town with another town you know: size, prices, weather, and which one you prefer.", "Compare ta ville avec une autre ville que tu connais : la taille, les prix, le temps, et celle que tu préfères.", "Lyon est plus petite que Paris, mais elle est aussi animée. Les loyers sont moins chers à Lyon qu'à Paris. Il fait plus chaud à Marseille, mais je préfère Lyon : on mange mieux, et pour moi, c'est la ville la plus agréable de France."]
    },
    40: {
      gap: [["Tu vas à la poste ? Oui, j'___ vais.", "y"], ["Tu as des frères ? Oui, j'___ ai deux.", "en"], ["Il y ___ a trois dans le placard. (of them)", "en"], ["On ___ va ? (shall we go?)", "y"]],
      fix: [["Tu as des enfants ? Oui, j'ai deux.", "Tu as des enfants ? Oui, j'en ai deux.", "With a number, en is compulsory."], ["Va-y, je te suis !", "Vas-y, je te suis !", "Before y, the command form of aller takes an s: vas-y."]],
      task: ["Answer with y or en: Do you often go to the cinema? Do you drink coffee? How many rooms are there in your home? Are you going to Paris this summer?", "Réponds avec y ou en : Tu vas souvent au cinéma ? Tu bois du café ? Il y a combien de pièces chez toi ? Tu vas à Paris cet été ?", "Oui, j'y vais une fois par mois. Non, je n'en bois pas, je préfère le thé. Il y en a trois : le salon, la chambre et le bureau. Oui, j'y vais en juillet, pour la première fois !"]
    },
    41: {
      gap: [["Le loyer est ___ combien ? (of)", "de"], ["L'appartement ___ cinquante mètres carrés. (faire)", "fait"], ["La chambre ___ sur la cour. (looks onto)", "donne"], ["Les charges sont ___ ? (included)", "comprises"]],
      fix: [["L'appartement a quarante mètres carrés.", "L'appartement fait quarante mètres carrés.", "For the size, French uses faire."], ["Il est libre de quand ?", "Il est libre à partir de quand ?|Il est libre quand ?", "From when: à partir de quand."]],
      task: ["Write three questions to ask at a flat visit, then describe the flat in two sentences.", "Écris trois questions à poser pendant une visite d'appartement, puis décris l'appartement en deux phrases.", "Le loyer est de combien ? Les charges sont comprises ? Il est libre à partir de quand ? L'appartement fait quarante-cinq mètres carrés et il est au troisième étage avec ascenseur. Il donne sur un petit parc et il y a du soleil le matin."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "visiteappart", lesson: 41, level: "A2", icon: "house", partner: "Claire Rousseau", role: "an estate agent",
    title: "Visiting a flat", title_fr: "La visite d'un appartement",
    setting: "You're looking for a one-bedroom flat. Claire Rousseau, an estate agent, shows you one.", setting_fr: "Tu cherches un T2. Claire Rousseau, agente immobilière, t'en fait visiter un.",
    turns: [
      { p: "Bonjour ! Entrez, je vous en prie. Alors, voici le salon.", fr: "Hello! Come in, please. So, here's the living room." },
      { y: ["Oh, il est très lumineux ! Il fait combien de mètres carrés, l'appartement ?", "Oh, il est très lumineux ! Il a combien de mètres carrés, l'appartement ?", "Oh, il est très lumineuse ! Il fait combien de mètres carrés, l'appartement ?"], fr: "Oh, it's very bright! How many square metres is the flat?", why: "faire for the size; le salon is masculine: lumineux." },
      { p: "Quarante-huit. La chambre est un peu plus petite que le salon, mais elle est très calme : elle donne sur la cour.", fr: "Forty-eight. The bedroom is a little smaller than the living room, but it's very quiet: it looks onto the courtyard." },
      { y: ["Très bien. Et le loyer est de combien ?", "Très bien. Et le loyer est combien de ?", "Très bien. Et combien est de le loyer ?"], fr: "Very good. And how much is the rent?", why: "Le loyer est de combien ? is the natural question." },
      { p: "Huit cent vingt euros par mois, charges comprises. Le chauffage est collectif.", fr: "Eight hundred and twenty euros a month, service charges included. The heating is shared by the building." },
      { y: ["D'accord. Il y a une cave ?", "D'accord. Il y a un cave ?", "D'accord. Il y en a une cave ?"], fr: "OK. Is there a cellar?", why: "une cave is feminine. Don't use en when you name the thing." },
      { p: "Oui, il y en a une, au sous-sol. Mais il n'y a pas de place de parking.", fr: "Yes, there's one, in the basement. But there's no parking space." },
      { y: ["Ce n'est pas grave, je n'en ai pas besoin : je n'ai pas de voiture.", "Ce n'est pas grave, je n'ai pas besoin : je n'ai pas de voiture.", "Ce n'est pas grave, je n'y ai pas besoin : je n'ai pas de voiture."], fr: "That doesn't matter, I don't need one: I haven't got a car.", why: "avoir besoin de → en: je n'en ai pas besoin." },
      { p: "Parfait. L'appartement est libre à partir du premier novembre. Il vous intéresse ?", fr: "Perfect. The flat is available from the first of November. Are you interested?" },
      { y: ["Oui, beaucoup ! C'est le plus lumineux de tous. Qu'est-ce qu'il faut pour le dossier ?", "Oui, beaucoup ! C'est le plus lumineux dans tous. Qu'est-ce qu'il faut pour le dossier ?", "Oui, beaucoup ! C'est le plus lumineux que tous. Qu'est-ce qu'il faut pour le dossier ?"], fr: "Yes, very! It's the brightest of them all. What do you need for the application?", why: "Superlative + de: le plus lumineux de tous." },
      { p: "Une pièce d'identité, vos trois derniers bulletins de salaire, et un garant si possible. Vous pouvez tout m'envoyer par e-mail.", fr: "An ID document, your last three payslips, and a guarantor if possible. You can send me everything by email." },
      { y: ["Parfait, je vous envoie tout ce soir. Merci beaucoup, madame !", "Parfait, je vous envoie tout ce soir. Merci beaucoup, madame Claire !", "Parfait, je vous en envoie tout ce soir. Merci beaucoup, madame !"], fr: "Perfect, I'll send you everything tonight. Thank you very much!", why: "Madame on its own (or Madame Rousseau), never madame + a first name." }
    ] }
  );

  W.READINGS.push({
    id: "demenagement", level: "A2", icon: "house", title: "Ça y est, on a déménagé !", genre: "Email",
    intro: "Inès writes to a friend after moving from Paris to Nantes. Comparatives, superlatives, y and en.",
    intro_fr: "Inès écrit à un ami après son déménagement de Paris à Nantes. Comparatifs, superlatifs, y et en.",
    paragraphs: [
      { en: "Salut Bastien ! Ça y est, on a déménagé ! Depuis samedi, Hugo et moi, on habite à Nantes. On a trouvé un T3 dans un vieil immeuble, près de la Loire.", fr: "Hi Bastien! That's it, we've moved! Since Saturday, Hugo and I have been living in Nantes. We found a two-bedroom flat in an old building, near the Loire." },
      { en: "L'appartement est beaucoup plus grand que notre studio à Paris : il fait soixante-dix mètres carrés ! Le salon est très lumineux et la cuisine est plus moderne que l'ancienne. Et le loyer est moins cher : on paie huit cents euros, charges comprises.", fr: "The flat is much bigger than our studio in Paris: it's seventy square metres! The living room is very bright and the kitchen is more modern than the old one. And the rent is cheaper: we pay eight hundred euros, service charges included." },
      { en: "Le seul problème : on est au quatrième étage, et il n'y a pas d'ascenseur ! Avec tous les cartons, c'était dur. Mais à mon avis, c'est le quartier le plus agréable de la ville : il y a un marché le dimanche, et on y va à pied.", fr: "The only problem: we're on the fourth floor, and there's no lift! With all the boxes, it was hard. But in my opinion, it's the nicest area in the city: there's a market on Sundays, and we walk there." },
      { en: "Tu viens nous voir ? Maintenant, on a une chambre d'amis ! Depuis Paris, il y a des trains directs : il y en a plusieurs par jour, et le trajet dure environ deux heures. Gros bisous, Inès", fr: "Will you come and see us? We have a spare room now! From Paris, there are direct trains: there are several a day, and the journey takes about two hours. Lots of love, Inès" }
    ],
    glossary: { "déménagé": "moved (house)", "immeuble": "block of flats", "lumineux": "bright", "ancienne": "old one, former", "loyer": "rent", "seul": "only", "quatrième": "fourth", "ascenseur": "lift, elevator", "cartons": "cardboard boxes", "dur": "hard", "avis": "opinion", "agréable": "pleasant, nice", "environ": "about", "dure": "lasts, takes" },
    questions: [
      { q: "Où habitent Inès et Hugo maintenant ?", o: ["À Paris", "À Nantes", "À Lyon"], a: 1 },
      { q: "Comment est le nouvel appartement ?", o: ["Plus petit que le studio", "Plus grand et moins cher", "Plus cher, mais plus grand"], a: 1 },
      { q: "Quel est le problème ?", o: ["Il n'y a pas d'ascenseur.", "Le quartier est bruyant.", "La cuisine est vieille."], a: 0 },
      { q: "Comment vont-ils au marché ?", o: ["En voiture", "À pied", "En bus"], a: 1 },
      { q: "Pourquoi Bastien peut venir facilement ?", o: ["Il y a une chambre d'amis et des trains directs.", "Il habite à Nantes.", "Il a une voiture."], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-a2-6", unit: "a2-6", level: "A2", icon: "phone",
    title: "J'appelle pour l'annonce", title_fr: "J'appelle pour l'annonce",
    context: "Yanis calls about a flat advert. He speaks to the owner, Mme Garnier.", context_fr: "Yanis appelle pour une annonce d'appartement. Il parle à la propriétaire, Mme Garnier.",
    words: [["l'annonce", "the advert"], ["le dépôt de garantie", "the deposit"], ["une place de parking", "a parking space"], ["passer", "to drop by"], ["vers dix heures", "around ten"]],
    lines: [["Mme Garnier", "Allô, oui ?", "fr-FR"], ["Yanis", "Bonjour, madame. J'appelle pour l'annonce de l'appartement, rue des Lilas. Il est toujours libre ?", "fr-FR"], ["Mme Garnier", "Oui, il est libre à partir du premier décembre.", "fr-FR"], ["Yanis", "Super. Il fait combien de mètres carrés ?", "fr-FR"], ["Mme Garnier", "Cinquante-deux. C'est un T2 au troisième étage, avec ascenseur.", "fr-FR"], ["Yanis", "Et le loyer, c'est combien ?", "fr-FR"], ["Mme Garnier", "Sept cent soixante euros, charges comprises. Il y a aussi un dépôt de garantie d'un mois de loyer.", "fr-FR"], ["Yanis", "D'accord. Il y a une place de parking ?", "fr-FR"], ["Mme Garnier", "Non, il n'y en a pas. Mais il y a un arrêt de tram juste devant l'immeuble.", "fr-FR"], ["Yanis", "Parfait, je n'ai pas de voiture. Je peux le visiter ?", "fr-FR"], ["Mme Garnier", "Oui, bien sûr. Vous pouvez passer samedi matin, vers dix heures ?", "fr-FR"], ["Yanis", "Samedi à dix heures, c'est parfait. Merci, madame, à samedi !", "fr-FR"]],
    gist: ["Pourquoi Yanis appelle ?", ["Pour une annonce d'appartement.", "Pour réserver un hôtel.", "Pour acheter une voiture."]],
    detail: [["L'appartement est libre quand ?", ["Le premier décembre", "Le premier novembre", "Tout de suite"]], ["Il fait combien de mètres carrés ?", ["Cinquante-deux", "Quarante-deux", "Soixante-deux"]], ["Le loyer est de combien ?", ["760 euros, charges comprises", "670 euros, charges comprises", "760 euros, hors charges"]], ["Quand a lieu la visite ?", ["Samedi vers dix heures", "Dimanche à dix heures", "Samedi après-midi"]]],
    decode: ["Il est toujours libre ?", "il n'y en a pas"],
    tip: "On the phone, numbers go fast. Write them down as you hear them, then check: Sept cent soixante, c'est bien ça ?", tip_fr: "Au téléphone, les nombres vont vite. Note-les tout de suite, puis vérifie : Sept cent soixante, c'est bien ça ?"
  }]);

  W.PROMPTS.push({ id: "fr-a2-6", level: "A2", q: "Décris ton logement. Qu'est-ce que tu préfères chez toi, et qu'est-ce que tu voudrais changer ?", fr: "Describe your home. What do you like best about it, and what would you like to change?", time: 120,
    phrases: ["J'habite dans un appartement / une maison…", "Il y a … pièces.", "Ce que je préfère, c'est…", "C'est plus … que…", "Je voudrais…"],
    model: "J'habite dans un petit appartement au deuxième étage. Il y a deux pièces : un salon et une chambre. Ce que je préfère, c'est le salon, parce qu'il est très lumineux et il donne sur un parc. Mais la cuisine est trop petite : c'est la pièce la moins pratique de l'appartement. Je voudrais aussi un balcon, pour y prendre le petit-déjeuner l'été." });

  W.WRITING_GUIDE["a2-6"] = { genre: "A description of your home", genre_fr: "La description de son logement",
    plan: [["Say what kind of home it is, its size and floor.", "Dis quel type de logement c'est, sa surface et l'étage."], ["List the rooms.", "Énumère les pièces."], ["Give one detail with a superlative or donner sur.", "Donne un détail avec un superlatif ou donner sur."], ["Describe the area with a comparison.", "Décris le quartier avec une comparaison."], ["Finish warmly.", "Termine de façon chaleureuse."]],
    marks: [["fait soixante mètres carrés", "faire for the size", "faire pour la surface"], ["La plus petite chambre", "a superlative", "un superlatif"], ["donne sur un jardin", "donner sur", "donner sur"], ["plus calme que le centre-ville", "a comparative", "un comparatif"], ["il y a une boulangerie en bas", "il y a for what's nearby", "il y a pour ce qu'il y a autour"], ["on y va", "the pronoun y", "le pronom y"]] };

  W.COURSE.push({ id: "a2-6", level: "A2", icon: "house", title: "Home", title_fr: "Chez soi",
    intro: "In this unit, you'll talk about where you live: comparing (plus, moins, aussi, meilleur, mieux), the superlative, the little pronouns y and en, and the French you need to find and visit a flat.",
    intro_fr: "Dans cette unité, tu vas parler de ton logement : comparer (plus, moins, aussi, meilleur, mieux), le superlatif, les petits pronoms y et en, et le français qu'il faut pour trouver et visiter un appartement.",
    can: ["Compare places, things and people", "Use meilleur and mieux correctly", "Replace a place or a quantity with y and en", "Understand a flat ad and ask questions at a visit", "Describe your home"],
    can_fr: ["Comparer des lieux, des choses et des personnes", "Utiliser correctement meilleur et mieux", "Remplacer un lieu ou une quantité par y et en", "Comprendre une annonce et poser des questions pendant une visite", "Décrire ton logement"],
    lessons: [39, 40, 41], vocab: ["logementFR", "meublesFR"], reading: "demenagement", prompt: "fr-a2-6",
    writing: { task: "You're swapping homes with a French family for the holidays. Write a description of your home for the website (70-90 words): the size, the rooms, what's nearby, and what they'll like.", task_fr: "Tu fais un échange de logement avec une famille française pour les vacances. Écris la description de ton logement pour le site (70 à 90 mots) : la surface, les pièces, ce qu'il y a autour, et ce qu'ils vont aimer.", words: "70-90",
      tips: ["Notre appartement fait…", "Il y a…", "La plus belle pièce, c'est…", "Le quartier est plus… que…", "Vous allez adorer !"],
      checklist: ["I gave the size with faire", "I used a comparative and a superlative", "I used y or en at least once", "I described what's nearby", "I stayed between 70 and 90 words"],
      model: "Bonjour !\n\nNotre appartement fait soixante mètres carrés et il est au deuxième étage d'un immeuble calme. Il y a un grand salon, une cuisine équipée, deux chambres et une salle de bains avec une baignoire. La plus petite chambre donne sur un jardin. Le quartier est plus calme que le centre-ville, mais il est bien situé : il y a une boulangerie en bas, et pour le centre, on y va à pied en dix minutes. Vous allez adorer !\n\nSophie et Marc" } });
})();
