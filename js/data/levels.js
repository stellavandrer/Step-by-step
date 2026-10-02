/* Les niveaux du Cadre européen (CECRL), de A1 à C2.
   hours = heures d'apprentissage guidé cumulées, ordre de grandeur indiqué par Cambridge English. */
window.LEVELS = [
{ id: "A1", name: "Découverte", hours: 100, toeic: "120–225", words: 500, exams: "—", icon: "sprout",
  can: ["Te présenter et présenter quelqu'un", "Comprendre et utiliser des phrases très simples du quotidien", "Poser et répondre à des questions simples (où tu habites, ce que tu aimes)"],
  beyond: ["Écouter des chansons que tu aimes avec les paroles sous les yeux", "Changer la langue de ton téléphone en anglais"] },
{ id: "A2", name: "Survie", hours: 200, toeic: "225–550", words: 1000, exams: "A2 Key · IELTS 3.5", icon: "compass",
  can: ["Parler de toi, de ta famille, de ton travail", "Te débrouiller dans un magasin, un café, une gare", "Raconter simplement ce que tu as fait hier ou pendant tes vacances"],
  beyond: ["Lire des livres simplifiés (Oxford Bookworms, Penguin Readers)", "Regarder des séries déjà vues en français, avec sous-titres anglais", "Écouter « 6 Minute English » de la BBC"] },
{ id: "B1", name: "Indépendante", hours: 375, toeic: "550–785", words: 1800, exams: "B1 Preliminary · IELTS 4–5", icon: "map",
  can: ["Te débrouiller seule en voyage dans un pays anglophone", "Raconter une histoire, une expérience, un rêve", "Donner ton avis et le justifier simplement", "Comprendre l'essentiel d'une conversation claire sur un sujet familier"],
  beyond: ["Commencer à parler avec de vraies personnes (échange linguistique ou cours en visio)", "Lire ton premier vrai roman (Wonder, Harry Potter)", "Passer aux séries que tu ne connais pas"] },
{ id: "B2", name: "Avancée", hours: 550, toeic: "785–945", words: 2800, exams: "B2 First · IELTS 5.5–6.5", icon: "rocket",
  can: ["Discuter avec un anglophone avec aisance, sans effort excessif de part et d'autre", "Comprendre la plupart des séries, films et articles", "Argumenter, nuancer, défendre un point de vue", "Travailler en anglais sur ton domaine (le design)"],
  beyond: ["Une conversation par semaine avec un ou une anglophone", "Lire la presse et des romans contemporains", "Écrire en anglais : emails, posts, journal de bord"] },
{ id: "C1", name: "Autonome", hours: 750, toeic: "945+", words: 4000, exams: "C1 Advanced · IELTS 7–8", icon: "trophy",
  can: ["Comprendre des textes longs et exigeants, et saisir les sous-entendus", "T'exprimer spontanément et couramment, sans chercher tes mots", "Utiliser l'anglais avec souplesse au travail, en société ou pour étudier", "Adapter ton registre : familier, professionnel, soutenu"],
  beyond: ["Vivre une partie de ta vie en anglais : livres, podcasts, actualités, réseaux", "Un séjour long dans un pays anglophone, si possible", "Te faire corriger à l'écrit par un professeur pour polir les dernières erreurs"] },
{ id: "C2", name: "Maîtrise", hours: 1100, toeic: "—", words: 5000, exams: "C2 Proficiency · IELTS 8.5–9", icon: "gem",
  can: ["Comprendre sans effort pratiquement tout ce que tu lis ou entends, y compris l'ironie, les sous-entendus et les références culturelles", "T'exprimer spontanément, très couramment et avec précision, en rendant les nuances les plus fines", "Résumer et reformuler des informations venant de sources diverses en un exposé cohérent", "Écrire des textes complexes et élégants : essais, critiques, rapports, textes littéraires"],
  beyond: ["Lire la littérature anglaise classique et contemporaine dans le texte", "Débattre, présenter et négocier en anglais presque comme dans ta langue", "Passer le C2 Proficiency de Cambridge pour certifier ton niveau"] }
];
