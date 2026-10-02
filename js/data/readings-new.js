/* New texts (in English, with a French translation for each paragraph). */
window.READINGS.push(
{
  id: "family", level: "A1", icon: "users", title: "This is my family",
  intro: "Sofia shows a photo of her family. Possessives (my, his, her), “to be” and “have got”.",
  intro_fr: "Sofia montre une photo de sa famille. Possessifs (my, his, her), « to be » et « have got ».",
  paragraphs: [
    { en: "Hi, I'm Sofia. Look, this is a photo of my family. We are on holiday in Spain.", fr: "Salut, je suis Sofia. Regarde, c'est une photo de ma famille. Nous sommes en vacances en Espagne." },
    { en: "This is my mother. Her name is Ana. She is a teacher. And this is my father, Marco. He is Italian. His job is very funny: he is a clown!", fr: "Voici ma mère. Elle s'appelle Ana. Elle est professeure. Et voici mon père, Marco. Il est italien. Son métier est très drôle : il est clown !" },
    { en: "I have one brother and one sister. My brother is twelve. His name is Leo and he loves football. My sister, Mia, is twenty. She is a student in Madrid.", fr: "J'ai un frère et une sœur. Mon frère a douze ans. Il s'appelle Leo et il adore le football. Ma sœur, Mia, a vingt ans. Elle est étudiante à Madrid." },
    { en: "And this is Coco, our dog. She is small and white, and she is very noisy!", fr: "Et voici Coco, notre chienne. Elle est petite et blanche, et elle est très bruyante !" }
  ],
  glossary: { "photo": "photo", "holiday": "vacances", "mother": "mère", "father": "père", "teacher": "professeur(e)", "italian": "italien", "job": "métier", "funny": "drôle", "clown": "clown", "brother": "frère", "sister": "sœur", "twelve": "douze", "loves": "adore", "twenty": "vingt", "student": "étudiant(e)", "our": "notre", "dog": "chien(ne)", "small": "petit(e)", "white": "blanc(he)", "noisy": "bruyant(e)" },
  questions: [
    { q: "What is Sofia's mother's job?", o: ["She's a doctor", "She's a teacher", "She's a clown"], a: 1 },
    { q: "How old is Leo?", o: ["Ten", "Twelve", "Twenty"], a: 1 },
    { q: "Who is Coco?", o: ["Sofia's sister", "Sofia's cat", "The family's dog"], a: 2 }
  ]
},
{
  id: "station", level: "A1", icon: "train-front", title: "At the station",
  intro: "Buying a train ticket. Numbers, times and prices. Listen to it first without reading!",
  intro_fr: "Acheter un billet de train. Nombres, heures et prix. Écoute-le d'abord sans lire !",
  paragraphs: [
    { speaker: "Stella", en: "Good morning. A ticket to Oxford, please.", fr: "Bonjour. Un billet pour Oxford, s'il vous plaît." },
    { speaker: "Clerk", en: "Single or return?", fr: "Aller simple ou aller-retour ?" },
    { speaker: "Stella", en: "Return, please. I'm coming back tonight.", fr: "Aller-retour, s'il vous plaît. Je reviens ce soir." },
    { speaker: "Clerk", en: "That's twenty-eight pounds forty.", fr: "Ça fait vingt-huit livres quarante." },
    { speaker: "Stella", en: "What time is the next train?", fr: "À quelle heure est le prochain train ?" },
    { speaker: "Clerk", en: "The next one is at ten fifteen, from platform four. It takes about an hour.", fr: "Le prochain est à dix heures quinze, quai quatre. Le trajet dure environ une heure." },
    { speaker: "Stella", en: "And the last train back from Oxford?", fr: "Et le dernier train retour depuis Oxford ?" },
    { speaker: "Clerk", en: "The last train is at eleven thirty p.m. Here's your ticket. Have a nice day!", fr: "Le dernier train est à vingt-trois heures trente. Voici votre billet. Bonne journée !" }
  ],
  glossary: { "ticket": "billet", "single": "aller simple", "return": "aller-retour", "coming": "reviens (come back = revenir)", "tonight": "ce soir", "pounds": "livres (monnaie)", "next": "prochain", "platform": "quai", "takes": "prend, dure", "about": "environ", "hour": "heure", "last": "dernier" },
  questions: [
    { q: "What kind of ticket does Stella buy?", o: ["A single", "A return", "A first-class ticket"], a: 1 },
    { q: "How much is the ticket?", o: ["£18.40", "£28.40", "£28.14"], a: 1 },
    { q: "What time is the next train?", o: ["10:15", "10:50", "11:30"], a: 0 },
    { q: "Which platform does it leave from?", o: ["Platform 2", "Platform 4", "Platform 14"], a: 1 }
  ]
},
{
  id: "room", level: "A1", icon: "armchair", title: "My favourite room",
  intro: "Describing a place: adjectives, colours, there is / there are.",
  intro_fr: "Décrire un lieu : adjectifs, couleurs, there is / there are.",
  paragraphs: [
    { en: "My favourite room is the living room. It isn't very big, but it's bright and cosy.", fr: "Ma pièce préférée, c'est le salon. Elle n'est pas très grande, mais elle est lumineuse et chaleureuse." },
    { en: "The walls are white and there is a big window. In the morning, the sun comes in and the room is warm.", fr: "Les murs sont blancs et il y a une grande fenêtre. Le matin, le soleil entre et la pièce est chaude." },
    { en: "There is a green sofa, a small wooden table and a lot of plants. There are also two shelves with my books and my old cameras.", fr: "Il y a un canapé vert, une petite table en bois et beaucoup de plantes. Il y a aussi deux étagères avec mes livres et mes vieux appareils photo." },
    { en: "I read here every evening, because it's quiet and comfortable. It's my little paradise!", fr: "Je lis ici tous les soirs, parce que c'est calme et confortable. C'est mon petit paradis !" }
  ],
  glossary: { "favourite": "préféré(e)", "living": "(living room = salon)", "bright": "lumineux", "cosy": "douillet, chaleureux", "walls": "murs", "window": "fenêtre", "sun": "soleil", "warm": "chaud(e)", "sofa": "canapé", "wooden": "en bois", "plants": "plantes", "shelves": "étagères", "cameras": "appareils photo", "quiet": "calme", "comfortable": "confortable", "paradise": "paradis" },
  questions: [
    { q: "What is the living room like?", o: ["Big and dark", "Small but bright and cosy", "Cold and noisy"], a: 1 },
    { q: "What colour is the sofa?", o: ["White", "Green", "Brown"], a: 1 },
    { q: "Why does she read there every evening?", o: ["Because it's quiet and comfortable", "Because there is a TV", "Because it's big"], a: 0 }
  ]
},
{
  id: "directions", level: "A1", icon: "map", title: "Excuse me, where is…?",
  intro: "Asking for and giving directions. Imperatives (turn, go, take) and prepositions of place.",
  intro_fr: "Demander et indiquer son chemin. Impératifs (turn, go, take) et prépositions de lieu.",
  paragraphs: [
    { speaker: "Stella", en: "Excuse me, is there a pharmacy near here?", fr: "Excusez-moi, est-ce qu'il y a une pharmacie près d'ici ?" },
    { speaker: "Man", en: "Yes, there's one in King Street. It's not far.", fr: "Oui, il y en a une dans King Street. Ce n'est pas loin." },
    { speaker: "Stella", en: "How do I get there?", fr: "Comment est-ce que j'y vais ?" },
    { speaker: "Man", en: "Go straight on, then take the second street on the left. That's King Street.", fr: "Allez tout droit, puis prenez la deuxième rue à gauche. C'est King Street." },
    { speaker: "Man", en: "The pharmacy is on the right, next to the bank and opposite a big supermarket.", fr: "La pharmacie est sur la droite, à côté de la banque et en face d'un grand supermarché." },
    { speaker: "Stella", en: "Is it a long walk?", fr: "C'est long à pied ?" },
    { speaker: "Man", en: "No, about five minutes. You can't miss it!", fr: "Non, environ cinq minutes. Vous ne pouvez pas la manquer !" },
    { speaker: "Stella", en: "Thank you very much!", fr: "Merci beaucoup !" }
  ],
  glossary: { "pharmacy": "pharmacie", "near": "près", "far": "loin", "get": "aller (get there = y aller)", "straight": "tout droit (go straight on)", "take": "prenez", "second": "deuxième", "left": "gauche", "right": "droite", "next": "à côté (next to)", "bank": "banque", "opposite": "en face de", "supermarket": "supermarché", "walk": "marche, trajet à pied", "miss": "manquer, rater" },
  questions: [
    { q: "What is Stella looking for?", o: ["A bank", "A pharmacy", "A supermarket"], a: 1 },
    { q: "Which street does she need to take?", o: ["The first on the left", "The second on the left", "The second on the right"], a: 1 },
    { q: "What is opposite the pharmacy?", o: ["A bank", "A supermarket", "A station"], a: 1 }
  ]
},
{
  id: "powercut", level: "A2", icon: "lamp", title: "The night the lights went out",
  intro: "A short story. Past simple for events, past continuous for the background.",
  intro_fr: "Une petite histoire. Prétérit pour les événements, passé continu pour le décor.",
  paragraphs: [
    { en: "Last winter, there was a big storm in our town. It was a Friday evening and it was raining very hard.", fr: "L'hiver dernier, il y a eu une grosse tempête dans notre ville. C'était un vendredi soir et il pleuvait très fort." },
    { en: "I was cooking dinner and my husband was watching a film when suddenly all the lights went out. The whole street was dark.", fr: "Je préparais le dîner et mon mari regardait un film quand soudain toutes les lumières se sont éteintes. Toute la rue était plongée dans le noir." },
    { en: "At first, we were a bit worried. We couldn't find the candles, and our phones were almost dead. Then our neighbour knocked on the door. She was holding a big torch and a bag of candles.", fr: "Au début, nous étions un peu inquiets. Nous ne trouvions pas les bougies, et nos téléphones étaient presque déchargés. Puis notre voisine a frappé à la porte. Elle tenait une grosse lampe torche et un sac de bougies." },
    { en: "We invited her in, and we ate the pasta by candlelight. We played cards, we told stories and we laughed a lot.", fr: "Nous l'avons invitée à entrer, et nous avons mangé les pâtes à la lueur des bougies. Nous avons joué aux cartes, raconté des histoires et beaucoup ri." },
    { en: "The electricity came back at midnight. Honestly, we were almost disappointed!", fr: "L'électricité est revenue à minuit. Honnêtement, nous étions presque déçus !" }
  ],
  glossary: { "winter": "hiver", "storm": "tempête", "raining": "pleuvait", "hard": "fort", "cooking": "préparais (cuisinais)", "husband": "mari", "suddenly": "soudain", "lights": "lumières", "whole": "entier, tout", "dark": "sombre, dans le noir", "worried": "inquiets", "candles": "bougies", "dead": "déchargé (batterie)", "neighbour": "voisin(e)", "knocked": "a frappé", "holding": "tenait", "torch": "lampe torche", "invited": "avons invité", "candlelight": "lueur des bougies", "cards": "cartes", "laughed": "avons ri", "electricity": "électricité", "midnight": "minuit", "disappointed": "déçus" },
  questions: [
    { q: "What was the weather like?", o: ["It was snowing", "It was raining very hard", "It was sunny"], a: 1 },
    { q: "What was her husband doing when the lights went out?", o: ["He was cooking", "He was watching a film", "He was sleeping"], a: 1 },
    { q: "What did the neighbour bring?", o: ["Food", "A torch and candles", "A phone charger"], a: 1 },
    { q: "How did they feel when the electricity came back?", o: ["Very happy", "Almost disappointed", "Scared"], a: 1 }
  ]
},
{
  id: "colleague", level: "A2", icon: "user-round", title: "The new colleague",
  intro: "A conversation at work. Questions (who / what), object pronouns, present perfect.",
  intro_fr: "Une conversation au travail. Questions (who / what), pronoms compléments, present perfect.",
  paragraphs: [
    { speaker: "Kate", en: "Hi, you must be Stella! I'm Kate, from the marketing team. Welcome!", fr: "Salut, tu dois être Stella ! Je suis Kate, de l'équipe marketing. Bienvenue !" },
    { speaker: "Stella", en: "Thanks! Nice to meet you. It's my first day, so everything is new for me.", fr: "Merci ! Enchantée. C'est mon premier jour, donc tout est nouveau pour moi." },
    { speaker: "Kate", en: "Don't worry, everyone is really friendly here. Who did you meet this morning?", fr: "Ne t'inquiète pas, tout le monde est vraiment sympa ici. Qui as-tu rencontré ce matin ?" },
    { speaker: "Stella", en: "I met Paul, my manager. He showed me the office and introduced me to the design team.", fr: "J'ai rencontré Paul, mon responsable. Il m'a montré le bureau et m'a présentée à l'équipe design." },
    { speaker: "Kate", en: "Great. Have you had lunch yet? We usually go to the Italian place across the street.", fr: "Super. Tu as déjà déjeuné ? D'habitude, on va à l'italien en face." },
    { speaker: "Stella", en: "Not yet. I'd love to come with you.", fr: "Pas encore. J'adorerais venir avec vous." },
    { speaker: "Kate", en: "Perfect. Oh, and who gave you that old laptop? Ask IT for a new one. They're on the second floor.", fr: "Parfait. Oh, et qui t'a donné ce vieil ordinateur portable ? Demande-en un nouveau au service informatique. Ils sont au deuxième étage." }
  ],
  glossary: { "colleague": "collègue", "marketing": "marketing", "team": "équipe", "welcome": "bienvenue", "first": "premier", "everything": "tout", "worry": "s'inquiéter", "everyone": "tout le monde", "friendly": "sympathique", "met": "ai rencontré (meet)", "manager": "responsable", "showed": "a montré", "office": "bureau", "introduced": "a présenté", "lunch": "déjeuner", "yet": "déjà / pas encore", "usually": "d'habitude", "across": "de l'autre côté (across the street = en face)", "laptop": "ordinateur portable", "floor": "étage" },
  questions: [
    { q: "Which team does Kate work in?", o: ["Design", "Marketing", "IT"], a: 1 },
    { q: "Who introduced Stella to the design team?", o: ["Kate", "Paul", "IT"], a: 1 },
    { q: "Has Stella had lunch?", o: ["Yes, at the Italian place", "No, not yet", "She doesn't eat lunch"], a: 1 },
    { q: "Where is the IT department?", o: ["On the first floor", "On the second floor", "Across the street"], a: 1 }
  ]
},
{
  id: "phones", level: "A2", icon: "smartphone", title: "Which phone should I buy?",
  intro: "A message on a forum. Comparatives, superlatives, too and enough.",
  intro_fr: "Un message sur un forum. Comparatifs, superlatifs, too et enough.",
  paragraphs: [
    { speaker: "Lou", en: "Hi everyone! My old phone is too slow, so I need a new one. I'm choosing between the Nova 5 and the Pixo X. Which one is better?", fr: "Salut tout le monde ! Mon vieux téléphone est trop lent, donc j'en ai besoin d'un nouveau. J'hésite entre le Nova 5 et le Pixo X. Lequel est le meilleur ?" },
    { speaker: "Sam", en: "I've got the Nova 5. The camera is amazing, the best I've ever had. But it's more expensive than the Pixo: about 200 euros more.", fr: "J'ai le Nova 5. L'appareil photo est incroyable, le meilleur que j'aie jamais eu. Mais il est plus cher que le Pixo : environ 200 euros de plus." },
    { speaker: "Rita", en: "I prefer the Pixo X. It's cheaper and lighter, and the battery lasts longer. The camera isn't as good as the Nova's, but it's good enough for me.", fr: "Je préfère le Pixo X. Il est moins cher et plus léger, et la batterie dure plus longtemps. L'appareil photo n'est pas aussi bon que celui du Nova, mais il me suffit." },
    { speaker: "Sam", en: "True, but the Pixo's screen is a bit small. For me, it's too small to watch films.", fr: "C'est vrai, mais l'écran du Pixo est un peu petit. Pour moi, il est trop petit pour regarder des films." },
    { speaker: "Lou", en: "Thanks! I take a lot of photos for my work, so I think I'll buy the Nova. I just need to save a bit more money first!", fr: "Merci ! Je prends beaucoup de photos pour mon travail, donc je pense que je vais acheter le Nova. Il faut juste que j'économise encore un peu d'abord !" }
  ],
  glossary: { "slow": "lent", "choosing": "choisis, hésite", "between": "entre", "better": "meilleur", "camera": "appareil photo", "amazing": "incroyable", "best": "le meilleur", "expensive": "cher", "prefer": "préfère", "cheaper": "moins cher", "lighter": "plus léger", "battery": "batterie", "lasts": "dure", "longer": "plus longtemps", "enough": "assez", "screen": "écran", "save": "économiser" },
  questions: [
    { q: "Why does Lou need a new phone?", o: ["It's broken", "It's too slow", "It's too big"], a: 1 },
    { q: "Which phone is cheaper?", o: ["The Nova 5", "The Pixo X", "They cost the same"], a: 1 },
    { q: "What does Sam not like about the Pixo X?", o: ["The battery", "The screen is too small", "The price"], a: 1 },
    { q: "Which phone will Lou buy, and why?", o: ["The Pixo, because it's cheaper", "The Nova, because of the camera", "Neither"], a: 1 }
  ]
},
{
  id: "gym", level: "A2", icon: "dumbbell", title: "Welcome to FitLife!",
  intro: "A gym's welcome email. Rules and advice: must, have to, should, don't have to.",
  intro_fr: "L'e-mail de bienvenue d'une salle de sport. Règles et conseils : must, have to, should, don't have to.",
  paragraphs: [
    { en: "Dear new member, welcome to FitLife! We're happy you've joined us. Here is some important information for your first weeks.", fr: "Cher nouveau membre, bienvenue chez FitLife ! Nous sommes ravis que vous nous ayez rejoints. Voici quelques informations importantes pour vos premières semaines." },
    { en: "Rules: you must show your membership card at reception every time you come. You have to bring a towel, and you mustn't use your phone in the changing rooms.", fr: "Règles : vous devez présenter votre carte de membre à l'accueil à chaque visite. Vous devez apporter une serviette, et il est interdit d'utiliser votre téléphone dans les vestiaires." },
    { en: "Classes: yoga and spinning classes are free, but you have to book them on our app. You don't have to book the swimming pool.", fr: "Cours : les cours de yoga et de spinning sont gratuits, mais vous devez les réserver sur notre appli. Vous n'avez pas besoin de réserver la piscine." },
    { en: "Our advice: don't do too much at the beginning. You should start with two or three sessions a week, and you should always drink enough water. If you're not sure how to use a machine, ask one of our coaches.", fr: "Nos conseils : n'en faites pas trop au début. Vous devriez commencer par deux ou trois séances par semaine, et vous devriez toujours boire assez d'eau. Si vous ne savez pas comment utiliser une machine, demandez à l'un de nos coachs." },
    { en: "See you soon! The FitLife team", fr: "À bientôt ! L'équipe FitLife" }
  ],
  glossary: { "member": "membre", "joined": "avez rejoint", "information": "informations", "rules": "règles", "membership": "adhésion (membership card = carte de membre)", "reception": "accueil", "towel": "serviette", "changing": "(changing rooms = vestiaires)", "classes": "cours", "free": "gratuit", "book": "réserver", "app": "application", "swimming": "natation (swimming pool = piscine)", "advice": "conseils", "beginning": "début", "sessions": "séances", "enough": "assez", "machine": "machine", "coaches": "coachs" },
  questions: [
    { q: "What must members show at reception?", o: ["Their passport", "Their membership card", "Their towel"], a: 1 },
    { q: "What do members have to book?", o: ["The swimming pool", "Yoga and spinning classes", "The changing rooms"], a: 1 },
    { q: "How many sessions a week should beginners do?", o: ["One", "Two or three", "Every day"], a: 1 }
  ]
},
{
  id: "experiences", level: "A2", icon: "globe", title: "Ten things I've never done",
  intro: "A blog post. The present perfect for experiences (ever, never) vs the past simple.",
  intro_fr: "Un article de blog. Le present perfect pour les expériences (ever, never) vs le prétérit.",
  paragraphs: [
    { en: "I'm thirty-five, and I've done a lot of things in my life. I've lived in three countries, I've run a marathon and I've learnt to cook Thai food.", fr: "J'ai trente-cinq ans, et j'ai fait beaucoup de choses dans ma vie. J'ai vécu dans trois pays, j'ai couru un marathon et j'ai appris à cuisiner thaïlandais." },
    { en: "But there are also many things I've never done. For example, I've never seen snow! I grew up in the south of Spain, and it never snows there.", fr: "Mais il y a aussi beaucoup de choses que je n'ai jamais faites. Par exemple, je n'ai jamais vu la neige ! J'ai grandi dans le sud de l'Espagne, et il n'y neige jamais." },
    { en: "I've never been on a plane for more than four hours. Last year, I almost went to Japan, but I was too scared of the long flight, so I cancelled.", fr: "Je n'ai jamais pris l'avion pendant plus de quatre heures. L'année dernière, j'ai failli aller au Japon, mais j'avais trop peur du long vol, alors j'ai annulé." },
    { en: "And I've never read a whole book in English. I've started many, but I've never finished one. This year, I'm going to try again, with an easy one.", fr: "Et je n'ai jamais lu un livre entier en anglais. J'en ai commencé beaucoup, mais je n'en ai jamais fini un seul. Cette année, je vais réessayer, avec un livre facile." },
    { en: "What about you? What have you never done?", fr: "Et toi ? Qu'est-ce que tu n'as jamais fait ?" }
  ],
  glossary: { "lived": "ai vécu", "countries": "pays", "run": "couru (run a marathon)", "marathon": "marathon", "learnt": "appris", "thai": "thaïlandais", "never": "jamais", "snow": "neige", "grew": "ai grandi (grow up)", "south": "sud", "plane": "avion", "almost": "presque (almost went = ai failli aller)", "scared": "effrayé", "flight": "vol", "cancelled": "ai annulé", "whole": "entier", "started": "commencé", "finished": "fini", "try": "essayer", "easy": "facile" },
  questions: [
    { q: "Why has the writer never seen snow?", o: ["She doesn't like winter", "She grew up in the south of Spain", "She has never left her town"], a: 1 },
    { q: "What happened with the trip to Japan?", o: ["She went and loved it", "She cancelled because she was scared of the flight", "The flight was cancelled by the airline"], a: 1 },
    { q: "What is her plan for this year?", o: ["To run a marathon", "To read a whole (easy) book in English", "To learn Japanese"], a: 1 }
  ]
},
{
  id: "anywhere", level: "B1", icon: "map-pin", title: "If you could live anywhere…",
  intro: "Three people answer the same question. Second conditional, would, could.",
  intro_fr: "Trois personnes répondent à la même question. Deuxième conditionnel, would, could.",
  paragraphs: [
    { en: "We asked three readers a simple question: if you could live anywhere in the world, where would you go?", fr: "Nous avons posé une question simple à trois lecteurs : si vous pouviez vivre n'importe où dans le monde, où iriez-vous ?" },
    { speaker: "Hannah, 29", en: "I'd move to Lisbon tomorrow if I could work remotely. The light is incredible, the food is cheap and the people are relaxed. The only problem is that I don't speak Portuguese, so I'd have to learn it first.", fr: "Je déménagerais à Lisbonne dès demain si je pouvais travailler à distance. La lumière est incroyable, la nourriture n'est pas chère et les gens sont détendus. Le seul problème, c'est que je ne parle pas portugais, donc il faudrait d'abord que je l'apprenne." },
    { speaker: "Raj, 41", en: "If I had the choice, I'd live in a small village in Scotland. I'd have a dog, a garden and a lot of books. Some people would get bored, but I wouldn't. I'd finally have time to write my novel.", fr: "Si j'avais le choix, je vivrais dans un petit village en Écosse. J'aurais un chien, un jardin et beaucoup de livres. Certains s'ennuieraient, mais pas moi. J'aurais enfin le temps d'écrire mon roman." },
    { speaker: "Mei, 35", en: "Honestly, I wouldn't change anything. I live in Manchester, near my family and friends. If I lived on the other side of the world, I'd miss them too much. A beautiful place isn't enough to make you happy.", fr: "Honnêtement, je ne changerais rien. J'habite à Manchester, près de ma famille et de mes amis. Si je vivais à l'autre bout du monde, ils me manqueraient trop. Un bel endroit ne suffit pas à rendre heureux." }
  ],
  glossary: { "readers": "lecteurs", "anywhere": "n'importe où", "remotely": "à distance", "light": "lumière", "incredible": "incroyable", "cheap": "bon marché", "relaxed": "détendus", "portuguese": "portugais", "choice": "choix", "village": "village", "scotland": "Écosse", "garden": "jardin", "bored": "s'ennuyer (get bored)", "finally": "enfin", "novel": "roman", "honestly": "honnêtement", "miss": "manquer à (I'd miss them = ils me manqueraient)", "enough": "suffisant" },
  questions: [
    { q: "What would Hannah need to do before moving to Lisbon?", o: ["Find a job there", "Learn Portuguese", "Sell her house"], a: 1 },
    { q: "Why would Raj like to live in a Scottish village?", o: ["To have time to write his novel", "Because his family lives there", "To work remotely"], a: 0 },
    { q: "What is Mei's opinion?", o: ["She'd like to live abroad", "She would miss her family and friends too much", "Manchester is too expensive"], a: 1 }
  ]
},
{
  id: "museum", level: "B1", icon: "newspaper", title: "Stolen painting found after 30 years",
  intro: "A news article. The passive voice and reported speech.",
  intro_fr: "Un article de presse. La voix passive et le discours rapporté.",
  paragraphs: [
    { en: "A painting that was stolen from a small museum in Bath thirty years ago has been found in a private house in Belgium, police said yesterday.", fr: "Un tableau volé il y a trente ans dans un petit musée de Bath a été retrouvé dans une maison privée en Belgique, a annoncé la police hier." },
    { en: "The painting, a portrait of a young woman by an unknown eighteenth-century artist, was taken during the night of 12 March 1995. At the time, the thieves were never caught.", fr: "Le tableau, portrait d'une jeune femme par un artiste inconnu du XVIIIe siècle, avait été dérobé dans la nuit du 12 mars 1995. À l'époque, les voleurs n'avaient jamais été arrêtés." },
    { en: "According to the police, the owner of the house said that he had bought the painting at a market in the 1990s and that he had no idea it was stolen. He told journalists that he was \"very happy\" it would go back home.", fr: "Selon la police, le propriétaire de la maison a déclaré qu'il avait acheté le tableau sur un marché dans les années 1990 et qu'il ignorait qu'il avait été volé. Il a dit aux journalistes qu'il était « très heureux » qu'il retourne chez lui." },
    { en: "The museum's director said she had never stopped hoping. \"We kept a space for it on the wall,\" she explained. The painting will be returned to Bath next month and will be shown to the public in the summer.", fr: "La directrice du musée a dit qu'elle n'avait jamais cessé d'espérer. « Nous lui avions gardé une place au mur », a-t-elle expliqué. Le tableau sera restitué à Bath le mois prochain et sera présenté au public cet été." }
  ],
  glossary: { "painting": "tableau", "stolen": "volé", "museum": "musée", "found": "retrouvé", "private": "privé(e)", "police": "police", "portrait": "portrait", "unknown": "inconnu", "century": "siècle", "artist": "artiste", "taken": "pris, dérobé", "thieves": "voleurs", "caught": "attrapés, arrêtés", "according": "selon (according to)", "owner": "propriétaire", "bought": "acheté (buy)", "market": "marché", "idea": "idée (had no idea = ignorait)", "journalists": "journalistes", "director": "directrice", "hoping": "espérer", "kept": "gardé (keep)", "wall": "mur", "explained": "a expliqué", "returned": "restitué", "shown": "montré, présenté", "public": "public" },
  questions: [
    { q: "Where was the painting found?", o: ["In a museum in Bath", "In a private house in Belgium", "At a market in London"], a: 1 },
    { q: "What did the owner of the house say?", o: ["He had stolen it", "He had bought it at a market and didn't know it was stolen", "He wanted to keep it"], a: 1 },
    { q: "What will happen next month?", o: ["The painting will be sold", "The painting will be returned to Bath", "The thieves will be arrested"], a: 1 }
  ]
},
{
  id: "flat", level: "B1", icon: "house", title: "Flat to rent",
  intro: "An advert and an email to the landlord. Relative clauses, indirect questions, prepositions.",
  intro_fr: "Une annonce et un e-mail au propriétaire. Relatives, questions indirectes, prépositions.",
  paragraphs: [
    { en: "FLAT TO RENT. Bright two-bedroom flat in a quiet street that is only five minutes from the station. Fully furnished, with a balcony which overlooks the park. £1,200 per month, bills not included. Available from 1 June. Contact James.", fr: "APPARTEMENT À LOUER. Appartement lumineux de deux chambres dans une rue calme à seulement cinq minutes de la gare. Entièrement meublé, avec un balcon qui donne sur le parc. 1 200 £ par mois, charges non comprises. Disponible à partir du 1er juin. Contacter James." },
    { en: "Dear James, I saw your advert for the flat on Elm Road and I'm very interested in it. I'm a graphic designer who works from home, so I'm looking for a place that is quiet and bright.", fr: "Bonjour James, j'ai vu votre annonce pour l'appartement d'Elm Road et il m'intéresse beaucoup. Je suis graphiste et je travaille à domicile, donc je cherche un endroit calme et lumineux." },
    { en: "I have a few questions. Could you tell me how much the bills usually are? I'd also like to know whether pets are allowed, because I have a very calm old cat. Finally, do you know if the internet connection is fast? It depends on that for my work.", fr: "J'ai quelques questions. Pourriez-vous me dire à combien s'élèvent habituellement les charges ? J'aimerais aussi savoir si les animaux sont acceptés, car j'ai un vieux chat très calme. Enfin, savez-vous si la connexion internet est rapide ? Mon travail en dépend." },
    { en: "I'm available for a visit any day next week. I look forward to hearing from you. Best regards, Stella", fr: "Je suis disponible pour une visite n'importe quel jour la semaine prochaine. Dans l'attente de votre réponse. Bien cordialement, Stella" }
  ],
  glossary: { "rent": "louer", "bright": "lumineux", "quiet": "calme", "station": "gare", "fully": "entièrement", "furnished": "meublé", "balcony": "balcon", "overlooks": "donne sur", "bills": "charges, factures", "included": "compris", "available": "disponible", "advert": "annonce", "interested": "intéressé(e)", "designer": "graphiste, designer", "pets": "animaux de compagnie", "allowed": "autorisés", "calm": "calme", "connection": "connexion", "depends": "dépend", "visit": "visite", "regards": "salutations (Best regards = Bien cordialement)" },
  questions: [
    { q: "Where is the flat?", o: ["Next to the park, far from the station", "In a quiet street five minutes from the station", "In the city centre"], a: 1 },
    { q: "Why does Stella need a quiet, bright place?", o: ["She works from home", "She has children", "She doesn't like noise at night"], a: 0 },
    { q: "Which question does Stella NOT ask?", o: ["How much the bills are", "Whether pets are allowed", "Whether there is a parking space"], a: 2 }
  ]
},
{
  id: "studio", level: "B1", icon: "pen-line", title: "Monday morning at the studio",
  intro: "A conversation in a design agency. Phrasal verbs, say / tell, make / do.",
  intro_fr: "Une conversation dans une agence de design. Phrasal verbs, say / tell, make / do.",
  paragraphs: [
    { speaker: "Ben", en: "Morning, Stella! Did you have a good weekend?", fr: "Bonjour, Stella ! Tu as passé un bon week-end ?" },
    { speaker: "Stella", en: "Yes, thanks, very relaxing. So, what's the plan for this week?", fr: "Oui, merci, très reposant. Alors, quel est le programme de la semaine ?" },
    { speaker: "Ben", en: "Well, the client called on Friday. They've changed their mind about the logo. They told me they want something simpler.", fr: "Eh bien, le client a appelé vendredi. Ils ont changé d'avis pour le logo. Ils m'ont dit qu'ils voulaient quelque chose de plus simple." },
    { speaker: "Stella", en: "Again? We need to sort this out. Did they say why?", fr: "Encore ? Il faut qu'on règle ça. Ils ont dit pourquoi ?" },
    { speaker: "Ben", en: "Not really. I think we should set up a call with them and find out exactly what they're looking for.", fr: "Pas vraiment. Je pense qu'on devrait organiser un appel avec eux et découvrir exactement ce qu'ils cherchent." },
    { speaker: "Stella", en: "Good idea. In the meantime, I'll come up with two or three new versions. I don't want to give up on the colours, though. They work really well.", fr: "Bonne idée. En attendant, je vais proposer deux ou trois nouvelles versions. Je ne veux pas renoncer aux couleurs, par contre. Elles fonctionnent vraiment bien." },
    { speaker: "Ben", en: "Agreed. Let's make a decision together on Wednesday. Oh, and we've run out of coffee, so I'm going to pick some up. Do you want anything?", fr: "D'accord. Prenons une décision ensemble mercredi. Oh, et on n'a plus de café, donc je vais en chercher. Tu veux quelque chose ?" }
  ],
  glossary: { "weekend": "week-end", "relaxing": "reposant", "plan": "programme, plan", "client": "client", "changed": "ont changé", "mind": "avis (change your mind)", "logo": "logo", "simpler": "plus simple", "sort": "(sort out = régler)", "set": "(set up = organiser, mettre en place)", "find": "(find out = découvrir)", "exactly": "exactement", "meantime": "(in the meantime = en attendant)", "versions": "versions", "give": "(give up = abandonner, renoncer)", "colours": "couleurs", "though": "par contre, pourtant", "agreed": "d'accord", "decision": "décision", "run": "(run out of = ne plus avoir de)", "pick": "(pick up = aller chercher)" },
  questions: [
    { q: "What did the client say?", o: ["They love the logo", "They want something simpler", "They want to cancel the project"], a: 1 },
    { q: "What does Ben suggest?", o: ["Setting up a call with the client", "Changing the colours", "Finding a new client"], a: 0 },
    { q: "What will Stella do in the meantime?", o: ["Go and buy coffee", "Come up with new versions", "Call the client"], a: 1 }
  ]
},
{
  id: "survey", level: "B2", icon: "chart-column", title: "Remote work: what our survey shows",
  intro: "An internal report from a (fictional) design studio. Comparisons, the passive, linking words.",
  intro_fr: "Un rapport interne d'un studio de design (fictif). Comparaisons, passif, connecteurs.",
  paragraphs: [
    { en: "Two years after introducing hybrid working, Brightline Studio surveyed its 120 employees to find out how the new arrangement was working. This report summarises the main findings.", fr: "Deux ans après la mise en place du travail hybride, Brightline Studio a interrogé ses 120 salariés pour savoir comment fonctionnait la nouvelle organisation. Ce rapport résume les principaux résultats." },
    { en: "Overall, satisfaction is far higher than before: 82% of staff said they were happy with the current system, compared with 54% in the previous survey. The more days people worked from home, the more positive they tended to be, up to a point.", fr: "Dans l'ensemble, la satisfaction est bien plus élevée qu'avant : 82 % du personnel s'est dit satisfait du système actuel, contre 54 % lors de l'enquête précédente. Plus les gens télétravaillaient, plus ils avaient tendance à être positifs, jusqu'à un certain point." },
    { en: "However, the picture is not entirely positive. Employees who worked from home four or five days a week reported feeling more isolated, and nearly half of the junior designers said they were learning more slowly because they had fewer chances to watch senior colleagues at work.", fr: "Cependant, le tableau n'est pas entièrement positif. Les salariés qui télétravaillaient quatre ou cinq jours par semaine ont dit se sentir plus isolés, et près de la moitié des designers juniors ont déclaré apprendre plus lentement parce qu'ils avaient moins d'occasions d'observer leurs collègues expérimentés." },
    { en: "It is therefore recommended that two \"studio days\" a week be introduced, during which the whole team is present. It is believed that this will improve collaboration without losing the flexibility that staff value so much.", fr: "Il est donc recommandé d'instaurer deux « jours au studio » par semaine, pendant lesquels toute l'équipe est présente. On estime que cela améliorera la collaboration sans perdre la flexibilité à laquelle le personnel tient tant." }
  ],
  glossary: { "introducing": "mettre en place", "hybrid": "hybride", "surveyed": "a interrogé, a sondé", "employees": "salariés", "arrangement": "organisation, dispositif", "report": "rapport", "summarises": "résume", "findings": "résultats", "overall": "dans l'ensemble", "satisfaction": "satisfaction", "staff": "personnel", "current": "actuel", "compared": "comparé (compared with = contre)", "previous": "précédent", "tended": "avaient tendance", "point": "point (up to a point = jusqu'à un certain point)", "however": "cependant", "entirely": "entièrement", "isolated": "isolés", "nearly": "presque", "junior": "débutant, junior", "fewer": "moins de", "chances": "occasions", "senior": "expérimenté, senior", "therefore": "donc, par conséquent", "recommended": "recommandé", "believed": "estimé, cru", "improve": "améliorer", "collaboration": "collaboration", "flexibility": "flexibilité", "value": "accordent de la valeur à" },
  questions: [
    { q: "How has satisfaction changed?", o: ["It has fallen from 82% to 54%", "It has risen from 54% to 82%", "It has stayed the same"], a: 1 },
    { q: "Which problem did junior designers mention?", o: ["They earn less", "They learn more slowly", "They work longer hours"], a: 1 },
    { q: "What does the report recommend?", o: ["Returning to the office full-time", "Two studio days a week for the whole team", "Working from home every day"], a: 1 },
    { q: "“The more days people worked from home, the more positive they tended to be, up to a point.” This means…", o: ["More remote days always means more satisfaction", "There is a limit to the positive effect", "People who work at home are never happy"], a: 1 }
  ]
},
{
  id: "designer", level: "B2", icon: "sparkles", title: "The designer who says no",
  intro: "A profile of a (fictional) designer. Relative clauses, gerund or infinitive, linking words.",
  intro_fr: "Le portrait d'une designer (fictive). Relatives, gérondif ou infinitif, connecteurs.",
  paragraphs: [
    { en: "Nadia Okafor, whose minimalist posters have appeared on walls from Lagos to London, has an unusual rule: she turns down at least half of the projects she is offered.", fr: "Nadia Okafor, dont les affiches minimalistes ont été placardées de Lagos à Londres, a une règle inhabituelle : elle refuse au moins la moitié des projets qu'on lui propose." },
    { en: "\"When I started out, I said yes to everything,\" she remembers. \"I stopped sleeping properly, I stopped seeing my friends, and worst of all, I stopped enjoying design. That's when I realised something had to change.\"", fr: "« Quand j'ai débuté, je disais oui à tout, se souvient-elle. J'ai arrêté de bien dormir, j'ai arrêté de voir mes amis et, pire que tout, j'ai cessé d'aimer le design. C'est là que j'ai compris que quelque chose devait changer. »" },
    { en: "Today, before accepting a project, she asks herself three questions: Will I learn something? Do I respect the client? Would I be proud to show it in five years? Unless the answer to all three is yes, she declines politely.", fr: "Aujourd'hui, avant d'accepter un projet, elle se pose trois questions : vais-je apprendre quelque chose ? Est-ce que je respecte le client ? Serais-je fière de le montrer dans cinq ans ? À moins que la réponse aux trois ne soit oui, elle décline poliment." },
    { en: "Although this approach has cost her some well-paid contracts, she has no regrets. \"Saying no to the wrong projects is what allows me to say yes to the right ones,\" she explains. Her studio, which she runs with two former students, now has a waiting list of several months.", fr: "Même si cette approche lui a coûté quelques contrats bien payés, elle ne regrette rien. « Dire non aux mauvais projets, c'est ce qui me permet de dire oui aux bons », explique-t-elle. Son studio, qu'elle dirige avec deux anciens étudiants, a désormais une liste d'attente de plusieurs mois." }
  ],
  glossary: { "whose": "dont", "minimalist": "minimaliste", "posters": "affiches", "appeared": "sont apparues", "unusual": "inhabituel", "turns": "(turns down = refuse)", "least": "(at least = au moins)", "offered": "proposés", "started": "(started out = a débuté)", "remembers": "se souvient", "properly": "correctement", "worst": "pire", "enjoying": "aimer, prendre plaisir à", "realised": "ai compris", "accepting": "accepter", "respect": "respecte", "proud": "fière", "unless": "à moins que", "declines": "décline", "politely": "poliment", "although": "bien que", "approach": "approche", "cost": "a coûté", "contracts": "contrats", "regrets": "regrets", "allows": "permet", "runs": "dirige", "former": "ancien(ne)s", "waiting": "(waiting list = liste d'attente)", "several": "plusieurs" },
  questions: [
    { q: "What is Nadia's unusual rule?", o: ["She only works with famous clients", "She turns down at least half of the projects she's offered", "She never works more than four days a week"], a: 1 },
    { q: "What happened when she said yes to everything?", o: ["She became rich", "She stopped enjoying design", "She opened her studio"], a: 1 },
    { q: "When does she accept a project?", o: ["When it's well paid", "Only when the answer to her three questions is yes", "When a friend asks her"], a: 1 }
  ]
},
{
  id: "fakenews", level: "B2", icon: "brain", title: "Why do we fall for fake news?",
  intro: "A popular-psychology article. Hedging, the passive, and linking words of cause and contrast.",
  intro_fr: "Un article de psychologie grand public. Nuances, passif, connecteurs de cause et d'opposition.",
  paragraphs: [
    { en: "Most of us like to think that we would never be fooled by a false story. Yet false information spreads remarkably fast online, and it is shared not only by naive users but also by educated, intelligent people.", fr: "La plupart d'entre nous aiment penser qu'ils ne se feraient jamais avoir par une fausse histoire. Pourtant, les fausses informations se propagent remarquablement vite en ligne, et elles sont partagées non seulement par des utilisateurs naïfs, mais aussi par des gens instruits et intelligents." },
    { en: "One reason is what psychologists call confirmation bias: we tend to believe information that fits what we already think, and to question information that doesn't. A headline that confirms our opinions simply feels true.", fr: "L'une des raisons est ce que les psychologues appellent le biais de confirmation : nous avons tendance à croire les informations qui correspondent à ce que nous pensons déjà, et à remettre en question celles qui n'y correspondent pas. Un titre qui confirme nos opinions nous paraît tout simplement vrai." },
    { en: "Another factor is repetition. Studies suggest that the more often we see a claim, the more familiar it seems, and familiarity is easily mistaken for truth. This is why a false story that is repeated many times can end up being accepted, even after it has been corrected.", fr: "Un autre facteur est la répétition. Des études suggèrent que plus nous voyons une affirmation, plus elle nous semble familière, et la familiarité se confond facilement avec la vérité. C'est pourquoi une fausse histoire répétée de nombreuses fois peut finir par être acceptée, même après avoir été corrigée." },
    { en: "So what can we do? Experts recommend slowing down before sharing anything: checking the source, reading beyond the headline and asking ourselves how we feel. If a story makes us very angry or very excited, that is precisely the moment to be careful.", fr: "Alors, que faire ? Les experts recommandent de ralentir avant de partager quoi que ce soit : vérifier la source, lire au-delà du titre et se demander ce qu'on ressent. Si une histoire nous met très en colère ou nous enthousiasme beaucoup, c'est précisément le moment d'être prudent." }
  ],
  glossary: { "fooled": "dupé, trompé", "false": "faux", "yet": "pourtant", "spreads": "se propage", "remarkably": "remarquablement", "shared": "partagée", "naive": "naïfs", "educated": "instruits", "reason": "raison", "psychologists": "psychologues", "confirmation": "confirmation", "bias": "biais", "tend": "avons tendance", "fits": "correspond à", "question": "remettre en question", "headline": "gros titre", "confirms": "confirme", "factor": "facteur", "repetition": "répétition", "studies": "études", "suggest": "suggèrent", "claim": "affirmation", "familiar": "familier", "familiarity": "familiarité", "mistaken": "confondue (mistaken for)", "truth": "vérité", "repeated": "répétée", "accepted": "acceptée", "corrected": "corrigée", "experts": "experts", "recommend": "recommandent", "slowing": "ralentir", "checking": "vérifier", "source": "source", "beyond": "au-delà de", "angry": "en colère", "excited": "enthousiaste, excité", "precisely": "précisément", "careful": "prudent" },
  questions: [
    { q: "Who shares false information, according to the article?", o: ["Only naive users", "Both naive users and educated, intelligent people", "Mostly journalists"], a: 1 },
    { q: "What is confirmation bias?", o: ["Believing information that fits what we already think", "Checking every source carefully", "Forgetting information quickly"], a: 0 },
    { q: "Why can repetition be dangerous?", o: ["It makes stories boring", "Familiarity is easily mistaken for truth", "It makes us angry"], a: 1 },
    { q: "When should we be especially careful, according to experts?", o: ["When a story makes us very angry or very excited", "When we read in the morning", "When the headline is long"], a: 0 }
  ]
},
{
  id: "proposal", level: "C1", icon: "gem", title: "Proposal: protected focus time",
  intro: "A formal proposal to a management team. Formal register, nominalisation, subjunctive, compound adjectives.",
  intro_fr: "Une proposition formelle adressée à une direction. Registre soutenu, nominalisation, subjonctif, adjectifs composés.",
  paragraphs: [
    { en: "Purpose. The purpose of this proposal is to recommend the introduction of a daily two-hour period of protected focus time, during which internal meetings, calls and non-urgent messages would be discouraged.", fr: "Objet. La présente proposition a pour objet de recommander l'instauration d'une plage quotidienne de deux heures de concentration protégée, pendant laquelle les réunions internes, les appels et les messages non urgents seraient déconseillés." },
    { en: "Background. In the recent staff consultation, a significant proportion of respondents identified constant interruptions as the main obstacle to their productivity. Several described their working day as fragmented, with little opportunity for the kind of sustained, high-quality work our clients expect.", fr: "Contexte. Lors de la récente consultation du personnel, une proportion importante des répondants a identifié les interruptions constantes comme le principal obstacle à leur productivité. Plusieurs ont décrit leur journée de travail comme fragmentée, offrant peu d'occasions de produire le travail soutenu et de haute qualité qu'attendent nos clients." },
    { en: "Recommendation. It is recommended that the period from 9.30 to 11.30 a.m. be designated as focus time on a six-month trial basis. During this time, staff would be encouraged to switch off notifications, and managers would be asked to refrain from scheduling meetings unless absolutely necessary.", fr: "Recommandation. Il est recommandé que la plage de 9 h 30 à 11 h 30 soit désignée comme temps de concentration, à titre expérimental pendant six mois. Pendant cette période, le personnel serait encouragé à désactiver ses notifications, et il serait demandé aux responsables de s'abstenir de programmer des réunions, sauf nécessité absolue." },
    { en: "Evaluation. The trial would be evaluated through a short follow-up survey and a comparison of project delivery times. Should the results prove positive, the arrangement could be extended to the whole organisation.", fr: "Évaluation. L'expérimentation serait évaluée au moyen d'une courte enquête de suivi et d'une comparaison des délais de livraison des projets. Si les résultats s'avéraient positifs, le dispositif pourrait être étendu à l'ensemble de l'organisation." }
  ],
  glossary: { "purpose": "objet, but", "proposal": "proposition", "recommend": "recommander", "introduction": "instauration, mise en place", "daily": "quotidien", "period": "période, plage", "protected": "protégé", "focus": "concentration", "internal": "internes", "discouraged": "déconseillés", "background": "contexte", "consultation": "consultation", "significant": "importante, significative", "proportion": "proportion", "respondents": "répondants", "identified": "ont identifié", "constant": "constantes", "interruptions": "interruptions", "obstacle": "obstacle", "productivity": "productivité", "fragmented": "fragmentée", "opportunity": "occasion", "sustained": "soutenu", "expect": "attendent", "designated": "désignée", "trial": "essai (on a trial basis = à titre expérimental)", "basis": "base", "encouraged": "encouragé", "notifications": "notifications", "refrain": "s'abstenir", "scheduling": "programmer", "unless": "sauf si", "absolutely": "absolument", "evaluated": "évaluée", "follow-up": "de suivi", "comparison": "comparaison", "delivery": "livraison", "prove": "s'avérer", "extended": "étendu", "organisation": "organisation" },
  questions: [
    { q: "What is the main problem identified in the staff consultation?", o: ["Low salaries", "Constant interruptions", "Long commutes"], a: 1 },
    { q: "What exactly is recommended?", o: ["Banning all meetings", "A two-hour focus period every morning, on a trial basis", "Working from home on Fridays"], a: 1 },
    { q: "“Should the results prove positive” means…", o: ["The results must be positive", "If the results turn out to be positive", "The results are already positive"], a: 1 },
    { q: "Which feature of formal register is NOT used in the text?", o: ["Nominalisation (the introduction of…)", "The subjunctive (that the period be designated)", "Contractions (it's, don't)"], a: 2 }
  ]
},
{
  id: "overheard", level: "C1", icon: "coffee", title: "Overheard in a London café",
  intro: "A natural conversation between two friends. Discourse markers, ellipsis, emphasis and idioms. Listen to it before reading.",
  intro_fr: "Une conversation naturelle entre deux amis. Mots du discours, ellipses, emphase et expressions. Écoute-la avant de la lire.",
  paragraphs: [
    { speaker: "Amy", en: "So, did you take the job in the end?", fr: "Alors, tu as fini par accepter le poste ?" },
    { speaker: "Tom", en: "Well, I was going to, but then they changed the salary at the last minute. Mind you, it wasn't a huge difference.", fr: "Eh bien, j'allais le faire, mais ils ont changé le salaire à la dernière minute. Remarque, ce n'était pas une énorme différence." },
    { speaker: "Amy", en: "Still, that's a bit cheeky, isn't it? I'd have been furious.", fr: "Quand même, c'est un peu gonflé, non ? Moi, j'aurais été furieuse." },
    { speaker: "Tom", en: "I was, to be honest. What really annoyed me was the way they told me, in a two-line email. Having said that, the team seemed lovely, and the projects are amazing.", fr: "Je l'étais, pour être honnête. Ce qui m'a vraiment agacé, c'est la façon dont ils me l'ont annoncé, dans un e-mail de deux lignes. Ceci étant dit, l'équipe avait l'air adorable, et les projets sont géniaux." },
    { speaker: "Amy", en: "So are you going to accept or not?", fr: "Alors, tu vas accepter ou pas ?" },
    { speaker: "Tom", en: "I think so. I mean, at the end of the day, the money isn't everything. And come to think of it, I did say I wanted a change.", fr: "Je pense que oui. Je veux dire, au bout du compte, l'argent ne fait pas tout. Et maintenant que j'y pense, j'avais bel et bien dit que je voulais du changement." },
    { speaker: "Amy", en: "You did. Every single week for two years! Honestly, go for it. If it doesn't work out, you can always look for something else.", fr: "C'est vrai. Toutes les semaines pendant deux ans ! Franchement, fonce. Si ça ne marche pas, tu pourras toujours chercher autre chose." },
    { speaker: "Tom", en: "Fair enough. Right, I'll call them this afternoon. Another coffee?", fr: "C'est juste. Bon, je les appelle cet après-midi. Un autre café ?" }
  ],
  glossary: { "end": "(in the end = finalement)", "salary": "salaire", "minute": "minute", "mind": "(mind you = remarque)", "huge": "énorme", "difference": "différence", "still": "quand même", "cheeky": "culotté, gonflé", "furious": "furieux", "honest": "honnête", "annoyed": "a agacé", "way": "façon", "lovely": "adorable, charmant", "amazing": "génial", "accept": "accepter", "mean": "(I mean = je veux dire)", "everything": "tout", "think": "(come to think of it = maintenant que j'y pense)", "change": "changement", "single": "(every single week = chaque semaine sans exception)", "honestly": "franchement", "go": "(go for it = fonce)", "work": "(work out = marcher, fonctionner)", "else": "d'autre", "fair": "(fair enough = c'est juste)", "right": "bon, bien" },
  questions: [
    { q: "Why did Tom hesitate to take the job?", o: ["The team was unfriendly", "They changed the salary at the last minute", "The projects were boring"], a: 1 },
    { q: "What annoyed Tom most?", o: ["The amount of money", "The way they told him, in a short email", "The long interview"], a: 1 },
    { q: "In “I did say I wanted a change”, “did” is used to…", o: ["make a question", "emphasise that he really said it", "form the past perfect"], a: 1 },
    { q: "What does Amy advise?", o: ["To refuse the job", "To negotiate the salary first", "To go for it"], a: 2 }
  ]
}
);
