/* Livres conseillés, du plus facile au plus exigeant. */
window.BOOKS = [
{ level: "A1", label: "Pour commencer (tout de suite)", note: "Des livres écrits exprès pour les apprenants, avec un vocabulaire limité. C'est la meilleure porte d'entrée : tu comprends presque tout, donc tu prends du plaisir.", items: [
  { title: "Oxford Bookworms Library — Starter & Stage 1", author: "Collection, Oxford University Press", color: "#1e5aa8", icon: "book-open",
    desc: "Des romans courts (30 à 60 pages), classés par niveau : policiers, histoires vraies, classiques adaptés. Beaucoup sont vendus avec l'audio.",
    why: "Commence par le niveau Starter. Lis en écoutant l'audio en même temps : c'est la méthode la plus efficace pour lier l'écrit et l'oral." },
  { title: "Penguin Readers — Level 1 & 2", author: "Collection, Penguin", color: "#f28c28", icon: "book-marked",
    desc: "Même principe, avec beaucoup de films et séries adaptés et de grands classiques en version simplifiée, plus un lexique à la fin.",
    why: "Choisis une histoire que tu connais déjà en français : comprendre devient beaucoup plus facile." },
  { title: "Collections bilingues (Folio bilingue, Pocket « Langues pour tous »)", author: "Divers éditeurs français", color: "#7a4fb3", icon: "book-open-text",
    desc: "Le texte original en anglais sur la page de gauche, la traduction française à droite.",
    why: "Parfait pour les moments où tu bloques : tu jettes un œil à droite au lieu d'ouvrir un dictionnaire." }
]},
{ level: "A2", label: "Quand les bases sont là", note: "Des livres « vrais » (pas adaptés) mais simples : phrases courtes, beaucoup de dialogues ou des histoires déjà connues.", items: [
  { title: "Diary of a Wimpy Kid", author: "Jeff Kinney", color: "#c0392b", icon: "pencil",
    desc: "Le journal illustré d'un collégien un peu nul (Journal d'un dégonflé en français). Plein de dessins, très drôle.",
    why: "Les dessins t'aident à comprendre, et l'anglais est celui de tous les jours. On le lit vite, et c'est motivant." },
  { title: "The Little Prince", author: "Antoine de Saint-Exupéry (traduit en anglais)", color: "#2a8fbd", icon: "flower",
    desc: "Le Petit Prince en anglais : court, poétique, et tu connais déjà l'histoire.",
    why: "Comme tu sais déjà ce qui se passe, ton cerveau se concentre sur la langue. Idéal pour un premier « vrai » livre." },
  { title: "Matilda", author: "Roald Dahl", color: "#d4a017", icon: "library",
    desc: "Une petite fille géniale qui adore lire, face à des adultes horribles. Drôle et attachant.",
    why: "Les chapitres sont courts. Dahl invente parfois des mots : si tu ne les trouves pas au dictionnaire, c'est normal !" }
]},
{ level: "B1", label: "Pour progresser vraiment", note: "Des romans complets. Ne cherche pas chaque mot : si tu comprends l'histoire, c'est gagné. Note seulement les mots qui reviennent souvent.", items: [
  { title: "Wonder", author: "R. J. Palacio", color: "#3aa6a0", icon: "star",
    desc: "Auggie, un garçon au visage différent, entre au collège pour la première fois. Raconté par plusieurs personnages.",
    why: "Chapitres très courts (2 ou 3 pages), langue simple et émotion forte : on a envie de continuer." },
  { title: "Harry Potter and the Philosopher's Stone", author: "J. K. Rowling", color: "#7b1e1e", icon: "zap",
    desc: "Le premier tome, dans sa langue d'origine.",
    why: "Si tu as lu ou vu Harry Potter, c'est un excellent choix : l'histoire te porte. L'audiobook lu par Stephen Fry est un régal." },
  { title: "Holes", author: "Louis Sachar", color: "#b5651d", icon: "shovel",
    desc: "Stanley est envoyé dans un camp où les garçons doivent creuser des trous toute la journée. Mais pourquoi ?",
    why: "Une intrigue très bien construite avec des phrases simples. Difficile à lâcher." },
  { title: "The Alchemist", author: "Paulo Coelho (traduit en anglais)", color: "#c99a2e", icon: "mountain",
    desc: "Un berger part à la recherche d'un trésor. Un conte court et philosophique.",
    why: "Les traductions utilisent un anglais clair et assez répétitif, très bon pour consolider." },
  { title: "Of Mice and Men", author: "John Steinbeck", color: "#556b2f", icon: "wheat",
    desc: "Deux ouvriers agricoles dans l'Amérique des années 30. Un classique très court (environ 100 pages).",
    why: "Court et fort. Attention : les dialogues sont écrits avec l'accent de l'époque, ce qui peut dérouter au début." }
]},
{ level: "B2", label: "Plus tard, pour le plaisir", note: "Quand tu te sentiras à l'aise. Garde-les en tête comme objectifs !", items: [
  { title: "The Curious Incident of the Dog in the Night-Time", author: "Mark Haddon", color: "#e2552c", icon: "dog",
    desc: "Christopher, un adolescent autiste, enquête sur la mort du chien de sa voisine.",
    why: "La voix du narrateur est simple et directe, mais l'histoire est riche. Un pont parfait vers la littérature adulte." },
  { title: "Animal Farm", author: "George Orwell", color: "#8b0000", icon: "piggy-bank",
    desc: "Les animaux d'une ferme chassent le fermier et prennent le pouvoir… Une fable politique.",
    why: "Court, puissant, et une référence culturelle que tout anglophone connaît." },
  { title: "Eleanor Oliphant Is Completely Fine", author: "Gail Honeyman", color: "#5b7db1", icon: "coffee",
    desc: "Une femme solitaire et très organisée voit sa routine bousculée. Drôle et touchant.",
    why: "Anglais britannique contemporain, beaucoup d'humour : idéal pour sentir la langue d'aujourd'hui." }
]},
{ level: "C1", label: "Vers le C1 : la vraie littérature", note: "Des œuvres pour adultes, au style riche. À ce stade, lis surtout ce qui te passionne : c'est l'envie qui te fera tenir sur des centaines de pages.", items: [
  { title: "The Remains of the Day", author: "Kazuo Ishiguro", color: "#6b4f3a", icon: "castle",
    desc: "Un majordome anglais revient sur sa vie au service d'un grand domaine. Prix Booker 1989.",
    why: "Un anglais élégant et retenu : tout se joue dans les non-dits. Parfait pour apprendre à lire entre les lignes." },
  { title: "Educated", author: "Tara Westover", color: "#9a6b2f", icon: "graduation-cap",
    desc: "Le récit autobiographique d'une jeune femme élevée loin de l'école, qui finit par étudier à Cambridge.",
    why: "Un récit vrai, prenant, dans un anglais américain contemporain. Il se lit comme un roman." },
  { title: "1984", author: "George Orwell", color: "#2e3440", icon: "eye",
    desc: "Le grand roman sur la surveillance et la manipulation du langage.",
    why: "Une prose claire et précise, et un vocabulaire politique que tu croiseras partout dans la presse." },
  { title: "Sapiens", author: "Yuval Noah Harari (traduit de l'hébreu)", color: "#3d6b5a", icon: "globe",
    desc: "Une histoire de l'humanité, de la préhistoire à nos jours.",
    why: "Idéal pour le vocabulaire des idées abstraites et de l'argumentation : exactement ce que demande le C1." },
  { title: "Pride and Prejudice", author: "Jane Austen", color: "#8c3a5b", icon: "feather",
    desc: "Elizabeth Bennet et Mr Darcy, l'histoire d'amour la plus célèbre de la littérature anglaise.",
    why: "Un défi : l'anglais date de 1813. Regarde d'abord une adaptation, puis lis-le : l'ironie d'Austen est un régal." }
]},
{ level: "C2", label: "Vers le C2 : les grands textes", note: "Des classiques exigeants, des romans contemporains primés et un essai sur l'art d'écrire. À ce niveau, tu lis comme une lectrice native cultivée : parfois lentement, un crayon à la main, pour le plaisir de la langue.", items: [
  { title: "Middlemarch", author: "George Eliot", color: "#5a4a78", icon: "book-open",
    desc: "La vie d'une petite ville anglaise au XIXe siècle et les ambitions déçues de ses habitants. Souvent cité parmi les plus grands romans de langue anglaise.",
    why: "Une prose dense, ironique, des phrases longues et une analyse psychologique très fine : le vrai test du C2." },
  { title: "Mrs Dalloway", author: "Virginia Woolf", color: "#b05a6e", icon: "flower",
    desc: "Une journée à Londres en 1923, à travers les pensées de plusieurs personnages.",
    why: "Le grand exemple du flux de conscience : idéal pour apprendre à suivre une pensée sans repères explicites." },
  { title: "Wolf Hall", author: "Hilary Mantel", color: "#7a2e2e", icon: "castle",
    desc: "L'ascension de Thomas Cromwell à la cour d'Henri VIII. Prix Booker 2009.",
    why: "Un récit historique au présent, avec des dialogues vifs et un vocabulaire politique d'une grande richesse." },
  { title: "Atonement", author: "Ian McEwan", color: "#2f4f6f", icon: "pen-line",
    desc: "Une erreur d'enfance, en 1935, et ses conséquences sur toute une vie.",
    why: "Un style précis et élégant, et une réflexion sur la fiction elle-même : parfait pour l'analyse littéraire." },
  { title: "Politics and the English Language", author: "George Orwell (essai)", color: "#3a3a3a", icon: "quote",
    desc: "Le célèbre essai de 1946 sur le langage creux, le jargon et la clarté.",
    why: "Court et percutant : il t'apprendra à écrire clairement en anglais, et à repérer le langage qui cache plus qu'il ne dit." }
]}
];

/* Autres ressources gratuites ou très accessibles. */
window.RESOURCES = [
  { icon: "headphones", title: "BBC Learning English — 6 Minute English", desc: "Un podcast de 6 minutes, deux présentateurs qui parlent clairement d'un sujet du quotidien, avec le vocabulaire expliqué. Gratuit." },
  { icon: "coffee", title: "Coffee Break English", desc: "Un podcast pensé pour les apprenants, avec un professeur qui explique pas à pas." },
  { icon: "tv", title: "Séries avec sous-titres anglais", desc: "Commence par des séries que tu as déjà vues en français (Friends, Modern Family, The Office). Sous-titres en anglais, pas en français !" },
  { icon: "puzzle", title: "Language Reactor (extension de navigateur)", desc: "Affiche les sous-titres anglais ET français en même temps sur Netflix et YouTube, avec un clic sur chaque mot." },
  { icon: "smartphone", title: "Easy English (YouTube)", desc: "Des interviews de vraies personnes dans la rue, sous-titrées en anglais et en français. Pour entendre l'anglais tel qu'on le parle." },
  { icon: "users", title: "Parler avec de vrais gens", desc: "Dès le B1, c'est indispensable. Cours particuliers en visio avec un professeur (italki, Preply) ou échanges linguistiques gratuits (Tandem, HelloTalk) : tu aides quelqu'un en français, il t'aide en anglais." },
  { icon: "mic", title: "Podcasts pour natifs", desc: "À partir du B2 : BBC Radio 4, TED Talks (avec transcription), ou des podcasts sur un sujet qui te passionne déjà, comme le design." },
  { icon: "newspaper", title: "La presse anglophone", desc: "Pour le B2-C1 : The Guardian (gratuit en ligne), BBC News, ou des magazines de design en anglais. Un article par jour, en notant 3 expressions." }
];
