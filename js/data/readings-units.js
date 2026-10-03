/* Un texte de plus pour chaque unité A1-A2 (2026-10-03), écrit pour faire revenir le vocabulaire de l'unité :
   on retient un mot en le recroisant dans des textes à son niveau. Personnes et lieux fictifs.
   Rattachés aux unités dans course-extra.js (champ extra). */
window.READINGS.push(
{
  id: "forum-hello", level: "A1", icon: "messages-square", title: "New students, say hello!", genre: "Forum",
  intro: "Students in an online English class introduce themselves. Countries, nationalities, languages.",
  intro_fr: "Des élèves d'un cours d'anglais en ligne se présentent. Pays, nationalités, langues.",
  paragraphs: [
    { speaker: "Teacher", en: "Good morning, everyone! Welcome to the class. Please say hello and tell us where you are from.", fr: "Bonjour à tous ! Bienvenue dans le cours. Dites bonjour et dites-nous d'où vous venez." },
    { speaker: "Marta", en: "Hello! My name is Marta. I'm Spanish, from Seville. I speak Spanish and a little Italian.", fr: "Bonjour ! Je m'appelle Marta. Je suis espagnole, de Séville. Je parle espagnol et un peu italien." },
    { speaker: "Kenji", en: "Hi, I'm Kenji. I'm Japanese, but I live in Canada with my wife. She's Canadian.", fr: "Salut, je suis Kenji. Je suis japonais, mais je vis au Canada avec ma femme. Elle est canadienne." },
    { speaker: "Lucie", en: "Good evening! It's night here in France. I'm Lucie, I'm French, and English is my third language.", fr: "Bonsoir ! Ici en France, il fait nuit. Je suis Lucie, je suis française, et l'anglais est ma troisième langue." },
    { speaker: "Teacher", en: "Thank you, everyone! Three countries and three languages. See you on Monday!", fr: "Merci à tous ! Trois pays et trois langues. À lundi !" }
  ],
  glossary: { "everyone": "tout le monde", "welcome": "bienvenue", "spanish": "espagnol", "italian": "italien", "japanese": "japonais", "canadian": "canadien(ne)", "wife": "femme (épouse)", "language": "langue", "third": "troisième" },
  questions: [
    { q: "Where is Marta from?", o: ["Italy", "Spain", "Canada"], a: 1 },
    { q: "Where does Kenji live?", o: ["In Canada", "In Japan", "In France"], a: 0 },
    { q: "Why does Lucie say “Good evening”?", o: ["She's tired", "It's night in France", "She doesn't like mornings"], a: 1 }
  ]
},
{
  id: "farm", level: "A1", icon: "sun", title: "My grandparents' farm", genre: "Description",
  intro: "A boy describes his grandparents' farm. Family words, animals, a / an and plurals.",
  intro_fr: "Un garçon décrit la ferme de ses grands-parents. La famille, les animaux, a / an et le pluriel.",
  paragraphs: [
    { en: "My name is Sam and I'm nine. My grandmother and my grandfather have a farm near the sea.", fr: "Je m'appelle Sam et j'ai neuf ans. Ma grand-mère et mon grand-père ont une ferme près de la mer." },
    { en: "On the farm, there are two horses, four cows, a lot of ducks and an old dog called Bob. There are also three cats and their babies: six kittens!", fr: "À la ferme, il y a deux chevaux, quatre vaches, beaucoup de canards et un vieux chien qui s'appelle Bob. Il y a aussi trois chats et leurs petits : six chatons !" },
    { en: "My sister and I go to the farm every summer. My parents work, so we stay with our grandparents for two weeks.", fr: "Ma sœur et moi allons à la ferme chaque été. Mes parents travaillent, alors nous restons deux semaines chez nos grands-parents." },
    { en: "My favourite animal is the horse. Its name is Star, and it's black and white. My sister loves the ducks.", fr: "Mon animal préféré, c'est le cheval. Il s'appelle Star, et il est noir et blanc. Ma sœur adore les canards." }
  ],
  glossary: { "farm": "ferme", "near": "près de", "horses": "chevaux", "cows": "vaches", "ducks": "canards", "kittens": "chatons", "summer": "été", "stay": "rester", "favourite": "préféré" },
  questions: [
    { q: "Where is the farm?", o: ["In the city", "Near the sea", "In the mountains"], a: 1 },
    { q: "How many kittens are there?", o: ["Three", "Four", "Six"], a: 2 },
    { q: "Why do Sam and his sister stay at the farm?", o: ["Their parents work", "Their parents live on the farm", "They don't like school"], a: 0 }
  ]
},
{
  id: "pool", level: "A1", icon: "waves", title: "Greenfield swimming pool", genre: "Notice",
  intro: "A notice with opening hours and prices. Days, times and numbers.",
  intro_fr: "Une affiche avec les horaires et les prix. Les jours, l'heure et les nombres.",
  paragraphs: [
    { en: "GREENFIELD SWIMMING POOL", fr: "PISCINE DE GREENFIELD" },
    { en: "Opening hours: Monday to Friday, from seven a.m. to nine p.m. Saturday, from eight a.m. to six p.m. Sunday, from nine a.m. to midday.", fr: "Horaires : du lundi au vendredi, de 7 h à 21 h. Le samedi, de 8 h à 18 h. Le dimanche, de 9 h à midi." },
    { en: "Prices: adults, five pounds. Children under twelve, two pounds fifty. A card for ten visits: forty pounds.", fr: "Tarifs : adultes, cinq livres. Enfants de moins de douze ans, deux livres cinquante. Carte de dix entrées : quarante livres." },
    { en: "Swimming lessons for children: every Wednesday afternoon, at half past two and at a quarter past four.", fr: "Cours de natation pour enfants : tous les mercredis après-midi, à 14 h 30 et à 16 h 15." },
    { en: "The pool is closed on the first of January and on the twenty-fifth of December.", fr: "La piscine est fermée le 1er janvier et le 25 décembre." }
  ],
  glossary: { "pool": "piscine (swimming pool)", "hours": "heures (opening hours = horaires d'ouverture)", "midday": "midi", "prices": "tarifs, prix", "under": "moins de", "visits": "entrées, visites", "lessons": "cours", "quarter": "quart (quarter past = et quart)", "closed": "fermé" },
  questions: [
    { q: "When does the pool close on Sunday?", o: ["At 6 p.m.", "At midday", "At 9 p.m."], a: 1 },
    { q: "How much is it for a child of eight?", o: ["£2.50", "£5", "£40"], a: 0 },
    { q: "When are the swimming lessons?", o: ["On Wednesday afternoon", "On Saturday morning", "Every day"], a: 0 }
  ]
},
{
  id: "keys", level: "A1", icon: "key", title: "Where are my keys?", genre: "Message",
  intro: "Messages between two flatmates. Prepositions of place, colours and things at home.",
  intro_fr: "Des messages entre deux colocataires. Les prépositions de lieu, les couleurs et les objets de la maison.",
  paragraphs: [
    { speaker: "Nina", en: "Hi Ali! I'm at work and I can't find my keys. Are they in the flat?", fr: "Salut Ali ! Je suis au travail et je ne trouve pas mes clés. Elles sont dans l'appartement ?" },
    { speaker: "Ali", en: "Let me look. They aren't on the table or in the kitchen. What colour is your key ring?", fr: "Je regarde. Elles ne sont ni sur la table ni dans la cuisine. De quelle couleur est ton porte-clés ?" },
    { speaker: "Nina", en: "It's small and red, with a little yellow fish. Look on the shelf next to the mirror.", fr: "Il est petit et rouge, avec un petit poisson jaune. Regarde sur l'étagère à côté du miroir." },
    { speaker: "Ali", en: "No, there's only a lamp and two books on the shelf. Oh wait! There's something red under the sofa.", fr: "Non, il n'y a qu'une lampe et deux livres sur l'étagère. Oh, attends ! Il y a quelque chose de rouge sous le canapé." },
    { speaker: "Ali", en: "Yes, your keys are under the sofa, between two old socks!", fr: "Oui, tes clés sont sous le canapé, entre deux vieilles chaussettes !" },
    { speaker: "Nina", en: "Great, thank you! And sorry about the socks…", fr: "Super, merci ! Et désolée pour les chaussettes…" }
  ],
  glossary: { "keys": "clés", "ring": "anneau (key ring = porte-clés)", "fish": "poisson", "shelf": "étagère", "next": "(next to = à côté de)", "mirror": "miroir", "lamp": "lampe", "under": "sous", "sofa": "canapé", "between": "entre", "socks": "chaussettes" },
  questions: [
    { q: "Where is Nina?", o: ["At home", "At work", "In the kitchen"], a: 1 },
    { q: "What is on the shelf?", o: ["A lamp and two books", "The keys", "A red fish"], a: 0 },
    { q: "Where are the keys?", o: ["On the table", "Next to the mirror", "Under the sofa"], a: 2 }
  ]
},
{
  id: "twojobs", level: "A1", icon: "clock", title: "Two jobs, two days", genre: "Article",
  intro: "A waiter and a nurse describe their days. The present simple with he and she (watch the -s!).",
  intro_fr: "Un serveur et une infirmière décrivent leur journée. Le présent simple avec he et she (attention au -s !).",
  paragraphs: [
    { en: "Daniel is a waiter in a busy restaurant. He gets up at ten o'clock and has a big breakfast. He starts work at midday and finishes at midnight.", fr: "Daniel est serveur dans un restaurant très fréquenté. Il se lève à dix heures et prend un gros petit-déjeuner. Il commence à midi et finit à minuit." },
    { en: "He walks to work, because the restaurant is near his flat. He doesn't eat dinner at home: he eats with the chef at the restaurant.", fr: "Il va au travail à pied, parce que le restaurant est près de son appartement. Il ne dîne pas chez lui : il mange avec le chef au restaurant." },
    { en: "Grace is a nurse. She works at night, from eight p.m. to eight a.m. She takes the bus to the hospital and checks her emails on the way.", fr: "Grace est infirmière. Elle travaille la nuit, de 20 h à 8 h. Elle prend le bus pour aller à l'hôpital et consulte ses e-mails en chemin." },
    { en: "When she gets home in the morning, she has a shower and goes to bed. She doesn't see the sun much in winter, but she loves her job.", fr: "Quand elle rentre le matin, elle prend une douche et va se coucher. Elle ne voit pas beaucoup le soleil en hiver, mais elle adore son métier." }
  ],
  glossary: { "waiter": "serveur", "busy": "très fréquenté, occupé", "gets": "(gets up = se lève ; gets home = rentre)", "starts": "commence", "finishes": "finit", "walks": "marche (walks to work = va au travail à pied)", "nurse": "infirmière", "takes": "prend", "checks": "consulte, vérifie", "way": "chemin (on the way = en chemin)" },
  questions: [
    { q: "What time does Daniel start work?", o: ["At ten o'clock", "At midday", "At midnight"], a: 1 },
    { q: "Where does Daniel eat dinner?", o: ["At home", "At the restaurant", "At the hospital"], a: 1 },
    { q: "What does Grace do when she gets home?", o: ["She has a shower and goes to bed", "She has breakfast with Daniel", "She checks her emails"], a: 0 }
  ]
},
{
  id: "mytown", level: "A1", icon: "building", title: "My town", genre: "Blog",
  intro: "A short blog post about a small town. There is / there are, places and transport.",
  intro_fr: "Un court billet de blog sur une petite ville. There is / there are, les lieux et les transports.",
  paragraphs: [
    { en: "I live in Millbridge, a small town near a big river. It's quiet, but there's a lot to do.", fr: "J'habite à Millbridge, une petite ville près d'un grand fleuve. C'est calme, mais il y a beaucoup à faire." },
    { en: "In the town centre, there's a market every Saturday, a cinema and three nice cafés. There's also a museum about trains, next to the station.", fr: "Dans le centre-ville, il y a un marché tous les samedis, un cinéma et trois cafés sympas. Il y a aussi un musée sur les trains, à côté de la gare." },
    { en: "There isn't an airport, but there are trains to the city every hour. The journey is forty minutes.", fr: "Il n'y a pas d'aéroport, mais il y a des trains pour la grande ville toutes les heures. Le trajet dure quarante minutes." },
    { en: "I don't have a car. I go everywhere on foot or by bike. My favourite place is the old bridge: there's a beautiful view of the river.", fr: "Je n'ai pas de voiture. Je vais partout à pied ou à vélo. Mon endroit préféré, c'est le vieux pont : il y a une très belle vue sur le fleuve." }
  ],
  glossary: { "town": "petite ville", "river": "fleuve, rivière", "quiet": "calme", "centre": "centre (town centre = centre-ville)", "market": "marché", "museum": "musée", "station": "gare", "airport": "aéroport", "journey": "trajet", "foot": "pied (on foot = à pied)", "bridge": "pont", "view": "vue" },
  questions: [
    { q: "When is the market?", o: ["Every day", "Every Saturday", "Every Sunday"], a: 1 },
    { q: "How long is the journey to the city?", o: ["Four minutes", "Fourteen minutes", "Forty minutes"], a: 2 },
    { q: "How does the writer travel in town?", o: ["By car", "On foot or by bike", "By bus"], a: 1 }
  ]
},
{
  id: "picnic", level: "A1", icon: "sandwich", title: "A picnic in the park", genre: "Dialogue",
  intro: "Two friends prepare a picnic. Food and drink, the present continuous, can and can't.",
  intro_fr: "Deux amies préparent un pique-nique. La nourriture, le présent continu, can et can't.",
  paragraphs: [
    { speaker: "Rosa", en: "Hi Kim! What are you doing?", fr: "Salut Kim ! Qu'est-ce que tu fais ?" },
    { speaker: "Kim", en: "I'm making sandwiches for the picnic: cheese and tomato, and chicken. What are you bringing?", fr: "Je prépare des sandwichs pour le pique-nique : fromage-tomate et poulet. Qu'est-ce que tu apportes ?" },
    { speaker: "Rosa", en: "I'm buying fruit at the market: strawberries, grapes and some bananas. Can you bring some water?", fr: "J'achète des fruits au marché : des fraises, du raisin et des bananes. Tu peux apporter de l'eau ?" },
    { speaker: "Kim", en: "Yes, I can. Sparkling or still?", fr: "Oui. Gazeuse ou plate ?" },
    { speaker: "Rosa", en: "Still, please. Oh, and Tom can't eat chicken: he's vegetarian.", fr: "Plate, s'il te plaît. Ah, et Tom ne peut pas manger de poulet : il est végétarien." },
    { speaker: "Kim", en: "No problem, I'm making egg sandwiches too. And I've got a chocolate cake!", fr: "Pas de problème, je fais aussi des sandwichs aux œufs. Et j'ai un gâteau au chocolat !" }
  ],
  glossary: { "picnic": "pique-nique", "sandwiches": "sandwichs", "cheese": "fromage", "chicken": "poulet", "bringing": "apporter", "strawberries": "fraises", "grapes": "raisin", "sparkling": "gazeuse", "still": "plate (eau)", "vegetarian": "végétarien", "egg": "œuf" },
  questions: [
    { q: "What is Kim doing?", o: ["Buying fruit", "Making sandwiches", "Making a cake"], a: 1 },
    { q: "What can't Tom eat?", o: ["Chicken", "Eggs", "Chocolate"], a: 0 },
    { q: "What water does Rosa want?", o: ["Sparkling", "Still", "No water"], a: 1 }
  ]
},
{
  id: "grandad", level: "A2", icon: "user-round", title: "My grandfather's life", genre: "Personal story",
  intro: "A woman tells the story of her grandfather's life. The past simple and life events.",
  intro_fr: "Une femme raconte la vie de son grand-père. Le prétérit et les grandes étapes de la vie.",
  paragraphs: [
    { en: "My grandfather was born in 1938 in a small village in Wales. His childhood wasn't easy: his family was poor, and he left school at fourteen to work on a farm.", fr: "Mon grand-père est né en 1938 dans un petit village du pays de Galles. Son enfance n'a pas été facile : sa famille était pauvre, et il a quitté l'école à quatorze ans pour travailler dans une ferme." },
    { en: "At twenty, he moved to Cardiff and got a job in a factory. He met my grandmother at a dance, and they got engaged six months later.", fr: "À vingt ans, il est parti à Cardiff et a trouvé un emploi dans une usine. Il a rencontré ma grand-mère à un bal, et ils se sont fiancés six mois plus tard." },
    { en: "They had three children and moved house four times. In his free time, he painted and played the guitar, and he never stopped learning.", fr: "Ils ont eu trois enfants et ont déménagé quatre fois. Pendant son temps libre, il peignait et jouait de la guitare, et il n'a jamais cessé d'apprendre." },
    { en: "When he was sixty-five, he decided to go to university. Everybody laughed, but he got his degree at sixty-nine! He died last year, and I still miss his stories.", fr: "À soixante-cinq ans, il a décidé d'aller à l'université. Tout le monde a ri, mais il a obtenu son diplôme à soixante-neuf ans ! Il est mort l'année dernière, et ses histoires me manquent toujours." }
  ],
  glossary: { "born": "né (was born = est né)", "childhood": "enfance", "poor": "pauvre", "left": "a quitté (leave)", "moved": "a déménagé, est parti", "factory": "usine", "engaged": "fiancés", "free": "libre (free time = temps libre)", "degree": "diplôme (universitaire)", "miss": "manquer (I miss them = ils me manquent)" },
  questions: [
    { q: "Why did he leave school at fourteen?", o: ["To work on a farm", "To move to Cardiff", "To play the guitar"], a: 0 },
    { q: "Where did he meet his wife?", o: ["In a factory", "At a dance", "At university"], a: 1 },
    { q: "What did he do at sixty-five?", o: ["He moved house", "He went to university", "He started painting"], a: 1 }
  ]
},
{
  id: "surprise", level: "A2", icon: "party-popper", title: "The surprise party", genre: "Story",
  intro: "A surprise party that nearly went wrong. The past continuous and feelings.",
  intro_fr: "Une fête surprise qui a failli mal tourner. Le prétérit continu et les émotions.",
  paragraphs: [
    { en: "It was my brother's thirtieth birthday, and we were planning a surprise party at my flat. Twenty friends were hiding in the living room, and the lights were off.", fr: "C'était le trentième anniversaire de mon frère, et nous préparions une fête surprise chez moi. Vingt amis se cachaient dans le salon, et les lumières étaient éteintes." },
    { en: "At eight o'clock, we heard the door. Everybody was very excited. But when the lights came on, it wasn't my brother: it was my neighbour, Mrs Hill! She was holding a parcel for me.", fr: "À huit heures, nous avons entendu la porte. Tout le monde était très excité. Mais quand les lumières se sont allumées, ce n'était pas mon frère : c'était ma voisine, Mme Hill ! Elle tenait un colis pour moi." },
    { en: "She was so scared that she dropped the parcel. I was really embarrassed, but she started laughing, and so did we.", fr: "Elle a eu tellement peur qu'elle a fait tomber le colis. J'étais vraiment gênée, mais elle a éclaté de rire, et nous aussi." },
    { en: "Ten minutes later, my brother arrived. He was wearing his old jacket and he looked tired, but when he saw everybody, he was so happy. And Mrs Hill stayed for cake!", fr: "Dix minutes plus tard, mon frère est arrivé. Il portait sa vieille veste et il avait l'air fatigué, mais quand il a vu tout le monde, il était tellement heureux. Et Mme Hill est restée pour le gâteau !" }
  ],
  glossary: { "thirtieth": "trentième", "planning": "préparer, organiser", "hiding": "se cacher", "off": "éteint", "excited": "excité, impatient", "holding": "tenir", "parcel": "colis", "scared": "effrayé", "dropped": "a fait tomber", "embarrassed": "gêné" },
  questions: [
    { q: "Who opened the door first?", o: ["The brother", "A neighbour", "A friend"], a: 1 },
    { q: "Why did Mrs Hill come?", o: ["She had a parcel", "She was invited", "She wanted cake"], a: 0 },
    { q: "How did the brother feel at the end?", o: ["Tired and angry", "Embarrassed", "Very happy"], a: 2 }
  ]
},
{
  id: "lakeside", level: "A2", icon: "star", title: "Hotel review: The Lakeside Inn", genre: "Review",
  intro: "A guest's online review of a small hotel. Holidays, weather and nature.",
  intro_fr: "L'avis en ligne d'une cliente sur un petit hôtel. Vacances, météo et nature.",
  paragraphs: [
    { en: "We stayed at the Lakeside Inn for three nights in May. The hotel is in a quiet village, next to a lake and surrounded by hills and woods.", fr: "Nous avons séjourné au Lakeside Inn pendant trois nuits en mai. L'hôtel est dans un village calme, à côté d'un lac et entouré de collines et de bois." },
    { en: "Our double room had a balcony with a wonderful view of the lake. The bed was very comfortable, but the wifi didn't work in the room, only at reception.", fr: "Notre chambre double avait un balcon avec une vue magnifique sur le lac. Le lit était très confortable, mais le wifi ne marchait pas dans la chambre, seulement à la réception." },
    { en: "The weather was cloudy on the first day, so we visited a waterfall in the rain. Then it was sunny, and we walked along the coast path to the beach.", fr: "Le temps était nuageux le premier jour, alors nous avons visité une cascade sous la pluie. Ensuite, il a fait beau, et nous avons suivi le sentier côtier jusqu'à la plage." },
    { en: "Breakfast was included and the staff were very friendly. It's not cheap, but it's perfect for a relaxing weekend. Four stars out of five.", fr: "Le petit-déjeuner était compris et le personnel était très aimable. Ce n'est pas donné, mais c'est parfait pour un week-end reposant. Quatre étoiles sur cinq." }
  ],
  glossary: { "stayed": "avons séjourné", "lake": "lac", "surrounded": "entouré", "hills": "collines", "woods": "bois", "view": "vue", "reception": "réception", "cloudy": "nuageux", "waterfall": "cascade", "path": "sentier (coast path = sentier côtier)", "included": "compris", "staff": "personnel" },
  questions: [
    { q: "What was the problem with the room?", o: ["The bed", "The wifi", "The view"], a: 1 },
    { q: "What did they do on the first day?", o: ["They went to the beach", "They visited a waterfall", "They stayed in the hotel"], a: 1 },
    { q: "What does the writer think of the hotel?", o: ["Very good, but not cheap", "Cheap but noisy", "Not worth it"], a: 0 }
  ]
},
{
  id: "weddingphoto", level: "A2", icon: "camera", title: "Who's who in the photo?", genre: "Email",
  intro: "An email describing the people in a wedding photo. Appearance, clothes and possessives.",
  intro_fr: "Un e-mail qui décrit les personnes d'une photo de mariage. L'apparence, les vêtements et les possessifs.",
  paragraphs: [
    { en: "Hi Jo, here's the photo from my cousin's wedding! Let me tell you who's who.", fr: "Salut Jo, voici la photo du mariage de mon cousin ! Je te dis qui est qui." },
    { en: "The tall man with the beard and the grey suit is my uncle Pete. Next to him, the woman with curly red hair and big sunglasses is his wife, Ann.", fr: "Le grand homme avec la barbe et le costume gris, c'est mon oncle Pete. À côté de lui, la femme aux cheveux roux bouclés et aux grandes lunettes de soleil, c'est sa femme, Ann." },
    { en: "The elderly man in the blue hat is my grandad. He's eighty-four, but he danced all night! The little girl holding his hand is my niece, Mia.", fr: "Le vieil homme au chapeau bleu, c'est mon grand-père. Il a quatre-vingt-quatre ans, mais il a dansé toute la nuit ! La petite fille qui lui tient la main, c'est ma nièce, Mia." },
    { en: "And the woman in the yellow dress, behind everybody, is me! I'm hiding because my shoes were hurting my feet.", fr: "Et la femme en robe jaune, derrière tout le monde, c'est moi ! Je me cache parce que mes chaussures me faisaient mal aux pieds." }
  ],
  glossary: { "beard": "barbe", "suit": "costume", "curly": "bouclé", "sunglasses": "lunettes de soleil", "elderly": "âgé", "hat": "chapeau", "holding": "tenant", "niece": "nièce", "dress": "robe", "behind": "derrière", "hurting": "faire mal" },
  questions: [
    { q: "Who is Ann?", o: ["The writer's aunt", "The writer's niece", "The bride"], a: 0 },
    { q: "What is the grandad wearing?", o: ["A grey suit", "A blue hat", "Sunglasses"], a: 1 },
    { q: "Why is the writer behind everybody?", o: ["She's shy", "Her shoes were hurting", "She arrived late"], a: 1 }
  ]
},
{
  id: "savemoney", level: "A2", icon: "piggy-bank", title: "How I saved money in one month", genre: "Blog",
  intro: "A blogger compares his spending before and after a challenge. Comparatives, quantities and money.",
  intro_fr: "Un blogueur compare ses dépenses avant et après un défi. Comparatifs, quantités et argent.",
  paragraphs: [
    { en: "Last month, I decided to spend less. I was spending too much money on coffee, takeaways and clothes I didn't need.", fr: "Le mois dernier, j'ai décidé de dépenser moins. Je dépensais trop d'argent en cafés, plats à emporter et vêtements dont je n'avais pas besoin." },
    { en: "First, I stopped buying coffee in cafés. A coffee at home is much cheaper than a coffee in town, and it isn't as bad as I thought!", fr: "D'abord, j'ai arrêté d'acheter du café dans les cafés. Un café à la maison coûte beaucoup moins cher qu'un café en ville, et il n'est pas aussi mauvais que je le pensais !" },
    { en: "Then I made a shopping list for the supermarket: a loaf of bread, a dozen eggs, a few vegetables, a bag of rice. No list, no shopping!", fr: "Ensuite, j'ai fait une liste pour le supermarché : une miche de pain, une douzaine d'œufs, quelques légumes, un sachet de riz. Pas de liste, pas de courses !" },
    { en: "The result? I saved two hundred pounds. It was the most difficult month of the year, but also the most interesting. Now I'm saving for a trip to Portugal.", fr: "Le résultat ? J'ai économisé deux cents livres. C'était le mois le plus difficile de l'année, mais aussi le plus intéressant. Maintenant, j'économise pour un voyage au Portugal." }
  ],
  glossary: { "spend": "dépenser", "takeaways": "plats à emporter", "cheaper": "moins cher", "list": "liste (shopping list = liste de courses)", "loaf": "miche (a loaf of bread)", "dozen": "douzaine", "few": "(a few = quelques)", "saved": "ai économisé", "saving": "économiser" },
  questions: [
    { q: "What did the writer spend too much money on?", o: ["Trips", "Coffee, takeaways and clothes", "Rent"], a: 1 },
    { q: "What is his rule for the supermarket?", o: ["No list, no shopping", "Only buy rice", "Go every day"], a: 0 },
    { q: "How much did he save?", o: ["£20", "£100", "£200"], a: 2 }
  ]
},
{
  id: "flatrules", level: "A2", icon: "list-checks", title: "House rules for flatmates", genre: "Notice",
  intro: "A list of rules on a fridge, and a short reply. Must, have to, should and housework.",
  intro_fr: "Une liste de règles sur un frigo, et une courte réponse. Must, have to, should et les tâches ménagères.",
  paragraphs: [
    { en: "HOUSE RULES (please read!)", fr: "RÈGLES DE LA MAISON (à lire, s'il vous plaît !)" },
    { en: "1. You must wash your dishes the same day. The sink isn't a cupboard!", fr: "1. Vous devez faire votre vaisselle le jour même. L'évier n'est pas un placard !" },
    { en: "2. We take out the rubbish on Monday and Thursday. Check the list to see whose turn it is.", fr: "2. On sort les poubelles le lundi et le jeudi. Regardez la liste pour savoir à qui c'est le tour." },
    { en: "3. You don't have to cook for everybody, but you should share if you make a big pot of soup!", fr: "3. Vous n'êtes pas obligés de cuisiner pour tout le monde, mais vous devriez partager si vous faites une grosse marmite de soupe !" },
    { en: "4. You mustn't play loud music after eleven: Sara starts work at six.", fr: "4. Vous ne devez pas mettre de musique forte après 23 h : Sara commence le travail à six heures." },
    { en: "Reply from Sara: “Thank you! And can we have a rule about the bathroom too? Somebody always leaves wet towels on the floor…”", fr: "Réponse de Sara : « Merci ! Et on peut aussi avoir une règle pour la salle de bains ? Quelqu'un laisse toujours des serviettes mouillées par terre… »" }
  ],
  glossary: { "flatmates": "colocataires", "dishes": "vaisselle", "sink": "évier", "cupboard": "placard", "rubbish": "poubelles, déchets", "turn": "tour (whose turn = à qui le tour)", "share": "partager", "pot": "marmite", "loud": "fort (bruit)", "wet": "mouillé", "towels": "serviettes" },
  questions: [
    { q: "When do they take out the rubbish?", o: ["Every day", "On Monday and Thursday", "On Saturday"], a: 1 },
    { q: "Do they have to cook for everybody?", o: ["Yes, every day", "No, but they should share big dishes", "Only on Sundays"], a: 1 },
    { q: "What is Sara's problem?", o: ["Loud music", "Dirty dishes", "Wet towels on the floor"], a: 2 }
  ]
},
{
  id: "abroad", level: "A2", icon: "globe", title: "Have you ever worked abroad?", genre: "Interview",
  intro: "A short interview with a young woman who has worked in four countries. The present perfect for experience.",
  intro_fr: "Une courte interview d'une jeune femme qui a travaillé dans quatre pays. Le present perfect pour l'expérience.",
  paragraphs: [
    { speaker: "Interviewer", en: "Laura, you're only twenty-six, but you've worked in four countries. How did that happen?", fr: "Laura, tu n'as que vingt-six ans, mais tu as travaillé dans quatre pays. Comment est-ce arrivé ?" },
    { speaker: "Laura", en: "I've always loved travelling. I've worked as a waitress in Spain, a teacher in Vietnam, a tour guide in Canada and now I'm in an office in Dublin.", fr: "J'ai toujours adoré voyager. J'ai été serveuse en Espagne, professeure au Vietnam, guide touristique au Canada, et maintenant je travaille dans un bureau à Dublin." },
    { speaker: "Interviewer", en: "Which job did you like most?", fr: "Quel travail as-tu préféré ?" },
    { speaker: "Laura", en: "Teaching in Vietnam. The students were amazing. But I've never learnt Vietnamese: it's really difficult!", fr: "Enseigner au Vietnam. Les élèves étaient formidables. Mais je n'ai jamais appris le vietnamien : c'est vraiment difficile !" },
    { speaker: "Interviewer", en: "Have you ever felt lonely?", fr: "T'es-tu déjà sentie seule ?" },
    { speaker: "Laura", en: "Yes, sometimes, especially at Christmas. But I've made friends everywhere, and we still talk online every week.", fr: "Oui, parfois, surtout à Noël. Mais je me suis fait des amis partout, et on se parle encore en ligne chaque semaine." }
  ],
  glossary: { "abroad": "à l'étranger", "waitress": "serveuse", "guide": "guide", "office": "bureau", "most": "le plus", "amazing": "formidable", "lonely": "seul(e), isolé(e)", "especially": "surtout", "online": "en ligne" },
  questions: [
    { q: "How many countries has Laura worked in?", o: ["Two", "Four", "Six"], a: 1 },
    { q: "Which job did she prefer?", o: ["Waitress in Spain", "Teacher in Vietnam", "Office worker in Dublin"], a: 1 },
    { q: "What has she never done?", o: ["Felt lonely", "Made friends", "Learnt Vietnamese"], a: 2 }
  ]
}
);
