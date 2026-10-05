/* Cours de français : les niveaux du Cadre européen (CECRL), de A1 à C2, avec leurs noms officiels en français
   (Découverte, Survie, Seuil, Avancé, Autonome, Maîtrise) et les diplômes de l'État français (DELF, DALF).
   hours = heures d'apprentissage guidé cumulées, ordre de grandeur (le même que pour le cours d'anglais).
   Ressources citées : TV5MONDE « Apprendre le français », RFI « Journal en français facile »,
   CLE International « Lectures CLE en français facile », le podcast InnerFrench, France Culture. */
window.LEVELS = [
{ id: "A1", name: "Breakthrough", name_fr: "Découverte", hours: 100, words: 500, exams: "DELF A1 · TCF", icon: "sprout",
  can: ["Introduce yourself and someone else", "Understand and use very simple everyday phrases", "Ask and answer simple questions (where you live, what you like)"],
  can_fr: ["Te présenter et présenter quelqu'un", "Comprendre et utiliser des phrases très simples du quotidien", "Poser et répondre à des questions simples (où tu habites, ce que tu aimes)"],
  beyond: ["Listen to French songs you like with the lyrics in front of you", "Switch your phone to French", "Watch the short videos of TV5MONDE's « Apprendre le français »"],
  beyond_fr: ["Écouter des chansons françaises que tu aimes, avec les paroles sous les yeux", "Passer ton téléphone en français", "Regarder les courtes vidéos « Apprendre le français » de TV5MONDE"] },
{ id: "A2", name: "Waystage", name_fr: "Survie", hours: 200, words: 1000, exams: "DELF A2 · TCF", icon: "compass",
  can: ["Talk about yourself, your family and your work", "Get by in a shop, a café or a station", "Say simply what you did yesterday or on holiday"],
  can_fr: ["Parler de toi, de ta famille, de ton travail", "Te débrouiller dans un magasin, un café, une gare", "Raconter simplement ce que tu as fait hier ou pendant tes vacances"],
  beyond: ["Listen to RFI's « Journal en français facile »: the news in simple French, every day", "Read graded readers, such as « Lectures CLE en français facile »", "Watch series you already know, in French with French subtitles"],
  beyond_fr: ["Écouter le « Journal en français facile » de RFI : l'actualité en français simple, tous les jours", "Lire des livres simplifiés, comme les « Lectures CLE en français facile »", "Regarder des séries déjà vues, en français avec sous-titres français"] },
{ id: "B1", name: "Threshold", name_fr: "Seuil", hours: 375, words: 1800, exams: "DELF B1 · TCF", icon: "map",
  can: ["Get by on your own when travelling in a French-speaking country", "Tell a story, an experience, a dream", "Give your opinion and explain it simply", "Understand the main points of a clear conversation on a familiar topic"],
  can_fr: ["Te débrouiller sans aide en voyage dans un pays francophone", "Raconter une histoire, une expérience, un rêve", "Donner ton avis et le justifier simplement", "Comprendre l'essentiel d'une conversation claire sur un sujet familier"],
  beyond: ["Start talking with real people (language exchange or online lessons)", "Read your first real books: « Le Petit Prince », « Le Petit Nicolas »", "Listen to podcasts made for learners, such as InnerFrench"],
  beyond_fr: ["Commencer à parler avec de vraies personnes (échange linguistique ou cours en visio)", "Lire tes premiers vrais livres : « Le Petit Prince », « Le Petit Nicolas »", "Écouter des podcasts faits pour les apprenants, comme InnerFrench"] },
{ id: "B2", name: "Vantage", name_fr: "Avancé", hours: 550, words: 2800, exams: "DELF B2 · TCF", icon: "rocket",
  can: ["Talk with French speakers fluently, without strain on either side", "Understand most series, films and articles", "Argue, give nuance and defend a point of view", "Work in French in your own field"],
  can_fr: ["Discuter avec des francophones avec aisance, sans effort excessif de part et d'autre", "Comprendre la plupart des séries, films et articles", "Argumenter, nuancer, défendre un point de vue", "Travailler en français dans ton domaine"],
  beyond: ["A conversation a week with a French speaker", "Read the press and contemporary novels", "Write in French: emails, posts, a diary"],
  beyond_fr: ["Une conversation par semaine avec une personne francophone", "Lire la presse et des romans contemporains", "Écrire en français : e-mails, messages, journal"] },
{ id: "C1", name: "Effective operational proficiency", name_fr: "Autonome", hours: 750, words: 4000, exams: "DALF C1 · TCF", icon: "trophy",
  can: ["Understand long, demanding texts, and what is implied", "Express yourself spontaneously and fluently, without searching for words", "Use French flexibly at work, socially or to study", "Adapt your register: informal, professional, formal"],
  can_fr: ["Comprendre des textes longs et exigeants, et saisir les sous-entendus", "T'exprimer spontanément et couramment, sans chercher tes mots", "Utiliser le français avec souplesse au travail, en société ou pour étudier", "Adapter ton registre : familier, professionnel, soutenu"],
  beyond: ["Live part of your life in French: books, podcasts such as France Culture, news, social media", "A long stay in a French-speaking country, if you can", "Have your writing corrected by a teacher to polish the last mistakes"],
  beyond_fr: ["Vivre une partie de ta vie en français : livres, podcasts comme France Culture, actualités, réseaux", "Un séjour long dans un pays francophone, si possible", "Te faire corriger à l'écrit par un professeur pour polir les dernières erreurs"] },
{ id: "C2", name: "Mastery", name_fr: "Maîtrise", hours: 1100, words: 5000, exams: "DALF C2 · TCF", icon: "gem",
  can: ["Understand with ease virtually everything you hear or read, including irony, implications and cultural references", "Express yourself spontaneously, very fluently and precisely, conveying fine shades of meaning", "Summarise and restructure information from different sources in a coherent presentation", "Write complex, elegant texts: essays, reviews, reports"],
  can_fr: ["Comprendre sans effort pratiquement tout ce que tu lis ou entends, y compris l'ironie, les sous-entendus et les références culturelles", "T'exprimer spontanément, très couramment et avec précision, en rendant les nuances les plus fines", "Résumer et reformuler des informations venant de sources diverses en un exposé cohérent", "Écrire des textes complexes et élégants : essais, critiques, rapports"],
  beyond: ["Read French literature, classic and contemporary, in the original", "Debate, present and negotiate in French almost as in your own language", "Take the DALF C2 to certify your level"],
  beyond_fr: ["Lire la littérature française, classique et contemporaine, dans le texte", "Débattre, présenter et négocier en français presque comme dans ta langue", "Passer le DALF C2 pour certifier ton niveau"] }
];
