/* Cours de coréen : les niveaux du Cadre européen (CECRL), de A1 à C2, avec leurs noms en anglais et en français et
   l'équivalent approximatif au TOPIK (1급 à 6급). Cette correspondance n'est pas officielle : elle sert de repère.
   TOPIK I = niveaux 1 et 2, TOPIK II = niveaux 3 à 6 (organisé par le NIIED, Institut national de l'éducation
   internationale, ministère de l'Éducation de Corée du Sud).
   hours = heures d'apprentissage guidé cumulées, ordre de grandeur : le Foreign Service Institute américain compte
   environ 88 semaines (2 200 heures de cours) pour un niveau professionnel en coréen, d'où des chiffres plus élevés
   que pour l'allemand. words = ordre de grandeur du vocabulaire visé.
   Ressources citées, toutes réelles : Talk To Me In Korean, les cours en ligne du King Sejong Institute (세종학당),
   Easy Korean (série Easy Languages), les webtoons, l'animation 뽀로로 (Pororo), l'émission 런닝맨 (Running Man, SBS),
   les journaux télévisés de KBS, les romans de Han Kang (prix Nobel de littérature 2024), 어린 왕자 (Le Petit Prince). */
window.LEVELS = [
{ id: "A1", name: "Breakthrough", name_fr: "Découverte", hours: 150, words: 800, exams: "TOPIK I · ≈ 1급", icon: "sprout",
  can: ["Read and write Hangul, and pronounce what you read", "Introduce yourself politely and greet people", "Use numbers to buy things, give your age and tell the time", "Ask and answer simple questions about everyday life"],
  can_fr: ["Lire et écrire le hangeul, et prononcer ce que tu lis", "Te présenter poliment et saluer", "Utiliser les nombres pour acheter, dire ton âge et l'heure", "Poser et répondre à des questions simples sur la vie quotidienne"],
  beyond: ["Listen to the first lessons of Talk To Me In Korean", "Read the names on Korean menus, signs and K-pop album covers: Hangul is everywhere", "Watch 뽀로로 (Pororo), a children's cartoon in simple, clear Korean"],
  beyond_fr: ["Écouter les premières leçons de Talk To Me In Korean", "Déchiffrer les menus, les enseignes et les pochettes d'albums de K-pop : le hangeul est partout", "Regarder 뽀로로 (Pororo), un dessin animé pour enfants en coréen simple et clair"] },
{ id: "A2", name: "Waystage", name_fr: "Survie", hours: 400, words: 2000, exams: "TOPIK I · ≈ 2급", icon: "compass",
  can: ["Talk about your day, your family, your plans and what you did", "Get by in a shop, a café, the metro or a hotel", "Use polite speech correctly, and recognise honorific forms", "Understand short, slow announcements and messages"],
  can_fr: ["Parler de ta journée, de ta famille, de tes projets et de ce que tu as fait", "Te débrouiller dans un magasin, un café, le métro ou un hôtel", "Utiliser correctement le style poli et reconnaître les formes honorifiques", "Comprendre des annonces et des messages courts et lents"],
  beyond: ["Watch the street interviews of Easy Korean, with subtitles", "Follow the free online lessons of the King Sejong Institute (세종학당)", "Change your phone's language to Korean"],
  beyond_fr: ["Regarder les interviews de rue d'Easy Korean, avec sous-titres", "Suivre les cours gratuits en ligne du King Sejong Institute (세종학당)", "Passer ton téléphone en coréen"] },
{ id: "B1", name: "Threshold", name_fr: "Seuil", hours: 800, words: 3000, exams: "TOPIK II · ≈ 3급", icon: "map",
  can: ["Get by on your own when travelling in Korea", "Tell a story, an experience, a plan, connecting your sentences", "Give your opinion and explain it simply", "Understand the main points of a clear conversation on a familiar topic"],
  can_fr: ["Te débrouiller sans aide en voyage en Corée", "Raconter une histoire, une expérience, un projet, en reliant tes phrases", "Donner ton avis et le justifier simplement", "Comprendre l'essentiel d'une conversation claire sur un sujet familier"],
  beyond: ["Start talking with real people (language exchange or online lessons)", "Read webtoons in Korean: short, visual, everyday language", "Watch a variety show such as 런닝맨 (Running Man), with Korean subtitles"],
  beyond_fr: ["Commencer à parler avec de vraies personnes (échange linguistique ou cours en visio)", "Lire des webtoons en coréen : courts, visuels, langue de tous les jours", "Regarder une émission de variétés comme 런닝맨 (Running Man), avec sous-titres coréens"] },
{ id: "B2", name: "Vantage", name_fr: "Avancé", hours: 1400, words: 4500, exams: "TOPIK II · ≈ 4급", icon: "rocket",
  can: ["Talk with Korean speakers fluently, without strain on either side", "Understand most dramas, news reports and articles on familiar topics", "Argue, give nuance and defend a point of view, in the right register", "Write a structured text of 600 to 700 characters, as in TOPIK II"],
  can_fr: ["Discuter avec des coréanophones avec aisance, sans effort excessif de part et d'autre", "Comprendre la plupart des dramas, reportages et articles sur des sujets connus", "Argumenter, nuancer, défendre un point de vue, dans le bon registre", "Écrire un texte structuré de 600 à 700 caractères, comme au TOPIK II"],
  beyond: ["A conversation a week with a Korean speaker", "Read 어린 왕자 (The Little Prince) in Korean, then the press", "Watch a drama with Korean subtitles, then without"],
  beyond_fr: ["Une conversation par semaine avec une personne coréanophone", "Lire 어린 왕자 (Le Petit Prince) en coréen, puis la presse", "Regarder un drama avec sous-titres coréens, puis sans"] },
{ id: "C1", name: "Effective operational proficiency", name_fr: "Autonome", hours: 2200, words: 6000, exams: "TOPIK II · ≈ 5급", icon: "trophy",
  can: ["Understand long, demanding texts, and what is implied", "Express yourself spontaneously and fluently, without searching for words", "Use Korean flexibly at work, socially or to study", "Choose the right register: 반말, polite speech, formal and honorific speech"],
  can_fr: ["Comprendre des textes longs et exigeants, et saisir les sous-entendus", "T'exprimer spontanément et couramment, sans chercher tes mots", "Utiliser le coréen avec souplesse au travail, en société ou pour étudier", "Choisir le bon registre : 반말, style poli, style formel et honorifique"],
  beyond: ["Live part of your life in Korean: KBS news, books, social media", "A long stay in Korea, if you can", "Have your writing corrected by a teacher to polish the last mistakes"],
  beyond_fr: ["Vivre une partie de ta vie en coréen : journal de KBS, livres, réseaux", "Un séjour long en Corée, si possible", "Te faire corriger à l'écrit par un professeur pour polir les dernières erreurs"] },
{ id: "C2", name: "Mastery", name_fr: "Maîtrise", hours: 3000, words: 8000, exams: "TOPIK II · ≈ 6급", icon: "gem",
  can: ["Understand with ease virtually everything you hear or read, including irony, Sino-Korean vocabulary and cultural references", "Express yourself spontaneously, very fluently and precisely, conveying fine shades of meaning", "Summarise and restructure information from different sources in a coherent presentation", "Write complex, elegant texts: essays, reviews, reports"],
  can_fr: ["Comprendre sans effort pratiquement tout ce que tu lis ou entends, y compris l'ironie, le vocabulaire sino-coréen et les références culturelles", "T'exprimer spontanément, très couramment et avec précision, en rendant les nuances les plus fines", "Résumer et reformuler des informations venant de sources diverses en un exposé cohérent", "Écrire des textes complexes et élégants : essais, critiques, rapports"],
  beyond: ["Read Korean literature in the original, from classic poetry to Han Kang, Nobel Prize in Literature 2024", "Debate, present and negotiate in Korean almost as in your own language", "Take TOPIK II and aim for level 6"],
  beyond_fr: ["Lire la littérature coréenne dans le texte, de la poésie classique à Han Kang, prix Nobel de littérature 2024", "Débattre, présenter et négocier en coréen presque comme dans ta langue", "Passer le TOPIK II et viser le niveau 6"] }
];
