/* Cours de coréen (coreen.html) : même moteur que les cours d'anglais, de français et d'allemand (js/app.js), avec
   la langue cible, les voix, la reconnaissance vocale et une progression enregistrée à part.
   Le cours s'adresse aux francophones ET aux anglophones : explications, consignes et traductions existent en
   français et en anglais, et js/ko/localize.js garde celles de la langue d'interface. Par défaut, la langue du
   navigateur (français si elle commence par fr, sinon anglais) ; changer de langue recharge la page. Pas d'interface
   en allemand : le contenu n'existe qu'en anglais et en français.
   Le hangeul est toujours le texte principal ; la romanisation révisée officielle s'affiche au niveau A1, puis
   seulement au clic (réglage « Romanisation »). Repères : le TOPIK (Test of Proficiency in Korean), niveaux 1 à 6.
   Personnages fictifs, prénoms coréens variés. Contenu écrit pour ce cours (rien n'est repris des histoires, leçons
   ou articles de Korean Stories) ; les mots et expressions enregistrés pour Korean Stories servent de voix
   naturelles (js/ko/audio.js), avec l'accord de Stella. */
window.APP = {
  id: "ko", target: "ko", helper: "en", helperCode: "EN",
  key: "hangeoreum.ko.v1", voiceLang: "ko-KR", srLang: "ko-KR",
  learner: "",
  defaultLang: /^fr/i.test((navigator.languages && navigator.languages[0]) || navigator.language || "") ? "fr" : "en",
  reloadOnLang: true,
  welcome: {
    en: "Welcome to your Korean course. Explanations are in English; everything you learn is in Korean, written in Hangul: <b>click on any Korean word</b> to hear it, see its translation and its romanization, or on <b>EN</b> to translate a whole sentence. To type in Korean, use the <b>한글</b> keyboard that appears in every answer box. Prefer explanations in French? Choose FR at the top of the page.",
    fr: "Bienvenue dans ton cours de coréen. Les explications sont en français ; tout ce que tu apprends est en coréen, écrit en hangeul : <b>clique sur un mot coréen</b> pour l'entendre, voir sa traduction et sa romanisation, ou sur <b>FR</b> pour traduire une phrase entière. Pour écrire en coréen, utilise le clavier <b>한글</b> qui apparaît dans chaque case de réponse. Tu préfères les explications en anglais ? Choisis EN en haut de la page."
  },
  /* Language workshop (B2 to C2): Korean word formation and a Korean example of a sentence transformation. */
  wfTable: [
    ["nouns", "noms", "-기, -음, -이, -성, -화, -력, -자, -가", "듣기, 웃음, 놀이, 가능성, 세계화, 경쟁력, 소비자, 작가"],
    ["adjectives", "adjectifs", "-스럽다, -롭다, -답다, -적(인)", "자연스럽다, 자유롭다, 아름답다, 경제적인"],
    ["adverbs", "adverbes", "-이, -히, -게, -적으로", "깨끗이, 조용히, 쉽게, 경제적으로"],
    ["verbs", "verbes", "-하다, -되다, -시키다, -이/히/리/기-", "공부하다, 발전되다, 발전시키다, 보이다, 읽히다, 열리다, 웃기다"],
    ["the opposite", "le contraire", "불-, 비-, 무-, 미-", "불가능, 비공식, 무관심, 미완성"]
  ],
  kwtExample: ["피아노를 안 배운 게 후회돼요.", "배웠더라면", "피아노를 ", "배웠더라면 좋았을 텐데요", "."],
  /* Interface texts written for the English course that need a Korean version. */
  ui: {
    en: {
      "Learn them as blocks, never word by word: we say “heavy rain”, not “strong rain”, and “meet a deadline”, not “respect a deadline”. Listen, then say each one out loud.": "Learn them as blocks, never word by word: Korean says “시험을 보다” (literally, to see an exam) for taking an exam, and “마음에 들다” (to enter the heart) for liking something. Listen, then say each one out loud.",
      "At this level, sounding natural depends less on knowing more words than on combining them well. Four tools, as in the Cambridge exams: collocations, idioms and phrasal verbs, word formation, and sentence transformations.": "At this level, sounding natural depends less on knowing more words than on combining them well. Four tools: collocations, idiomatic expressions, word formation, and sentence transformations, all useful for TOPIK II.",
      "Idioms and phrasal verbs": "Idiomatic expressions",
      "Method: find the grammar point (here, a regret: wish + past perfect), write the answer, then check the word count and that the meaning hasn't changed.": "Method: find the grammar point (here, a regret: -았/었더라면 좋았을 텐데), write the answer, then check that the meaning hasn't changed.",
      "One workshop per unit, on the unit's theme: ten collocations, eight idioms and phrasal verbs, eight word-formation sentences and six sentence transformations, as in the Cambridge exams (B2 First, C1 Advanced, C2 Proficiency).": "One workshop per unit, on the unit's theme: ten collocations, eight idiomatic expressions, eight word-formation sentences and six sentence transformations, to prepare TOPIK II (levels 4 to 6).",
      "Collocations, idioms, word formation and sentence transformations for each B2, C1 and C2 unit, as in the Cambridge exams.": "Collocations, idioms, word formation and sentence transformations for each B2, C1 and C2 unit.",
      "Cambridge English estimates that it takes about <b>{h} hours of guided learning</b> to reach {l} from zero. It's an order of magnitude, not a promise: everything you do in English counts (series, podcasts, conversations).": "The US Foreign Service Institute puts Korean among the languages that take English speakers longest to learn: about 88 weeks, or 2,200 hours of class, for professional working proficiency. Count about <b>{h} hours of guided learning</b> to reach {l} from zero: an order of magnitude, not a promise. Everything you do in Korean counts (dramas, webtoons, songs, conversations).",
      "This is a personal record of your progress, not an official certificate. For an official result, take the TOEIC or a Cambridge exam.": "This is a personal record of your progress, not an official certificate. For an official result, take the TOPIK (Test of Proficiency in Korean), run by South Korea's National Institute for International Education: TOPIK I for levels 1 and 2, TOPIK II for levels 3 to 6.",
      "The other tabs (vocabulary, reading, speaking, TOEIC…) are libraries for extra practice, whenever you like: the course doesn't depend on them.": "The other tabs (vocabulary, reading, speaking…) are libraries for extra practice, whenever you like: the course doesn't depend on them.",
      "Levels A1 → C2 come from the Common European Framework (CEFR), used everywhere: schools, exams, job offers. <b>A</b> = basic user, <b>B</b> = independent user, <b>C</b> = proficient user.": "Levels A1 → C2 come from the Common European Framework (CEFR). Korea's own exam, the TOPIK, has six levels (1급 to 6급): each level of this course gives its approximate TOPIK equivalent, A1 ≈ 1급 up to C2 ≈ 6급 (an unofficial correspondence, for guidance). <b>A</b> = basic user, <b>B</b> = independent user, <b>C</b> = proficient user.",
      "The most effective approach: 20 minutes in the app + a series or podcast in English instead of what you already watch in French. It doubles your English time with no extra effort.": "The most effective approach: 20 minutes in the app + a Korean drama, variety show or podcast instead of what you already watch in English. It doubles your Korean time with no extra effort."
    },
    fr: {
      "Learn them as blocks, never word by word: we say “heavy rain”, not “strong rain”, and “meet a deadline”, not “respect a deadline”. Listen, then say each one out loud.": "Apprends-les en bloc, jamais mot à mot : en coréen, on « voit » un examen (시험을 보다) pour dire qu'on le passe, et une chose « entre dans le cœur » (마음에 들다) quand elle nous plaît. Écoute, puis dis chacune à voix haute.",
      "At this level, sounding natural depends less on knowing more words than on combining them well. Four tools, as in the Cambridge exams: collocations, idioms and phrasal verbs, word formation, and sentence transformations.": "À ce niveau, parler naturellement dépend moins du nombre de mots connus que de la façon de les combiner. Quatre outils : les collocations, les expressions idiomatiques, la formation des mots et les reformulations, tous utiles pour le TOPIK II.",
      "Idioms and phrasal verbs": "Expressions idiomatiques",
      "Method: find the grammar point (here, a regret: wish + past perfect), write the answer, then check the word count and that the meaning hasn't changed.": "Méthode : repère le point de grammaire (ici, un regret : -았/었더라면 좋았을 텐데), écris la réponse, puis vérifie que le sens n'a pas changé.",
      "One workshop per unit, on the unit's theme: ten collocations, eight idioms and phrasal verbs, eight word-formation sentences and six sentence transformations, as in the Cambridge exams (B2 First, C1 Advanced, C2 Proficiency).": "Un atelier par unité, sur son thème : dix collocations, huit expressions idiomatiques, huit phrases de formation des mots et six reformulations, pour préparer le TOPIK II (niveaux 4 à 6).",
      "Collocations, idioms, word formation and sentence transformations for each B2, C1 and C2 unit, as in the Cambridge exams.": "Collocations, expressions, formation des mots et reformulations pour chaque unité B2, C1 et C2.",
      "Cambridge English estimates that it takes about <b>{h} hours of guided learning</b> to reach {l} from zero. It's an order of magnitude, not a promise: everything you do in English counts (series, podcasts, conversations).": "Le Foreign Service Institute américain classe le coréen parmi les langues les plus longues à apprendre pour un anglophone : environ 88 semaines, soit 2 200 heures de cours, pour un niveau professionnel. Compte environ <b>{h} heures d'apprentissage guidé</b> pour atteindre le niveau {l} en partant de zéro : un ordre de grandeur, pas une promesse. Tout ce que tu fais en coréen compte (dramas, webtoons, chansons, conversations).",
      "This is a personal record of your progress, not an official certificate. For an official result, take the TOEIC or a Cambridge exam.": "Ceci est un relevé personnel de ta progression, pas un certificat officiel. Pour un résultat officiel, passe le TOPIK (Test of Proficiency in Korean), organisé par l'Institut national de l'éducation internationale de Corée du Sud : TOPIK I pour les niveaux 1 et 2, TOPIK II pour les niveaux 3 à 6.",
      "The other tabs (vocabulary, reading, speaking, TOEIC…) are libraries for extra practice, whenever you like: the course doesn't depend on them.": "Les autres onglets (vocabulaire, lecture, oral…) sont des bibliothèques pour t'entraîner en plus, quand tu veux : le cours n'en dépend pas.",
      "Levels A1 → C2 come from the Common European Framework (CEFR), used everywhere: schools, exams, job offers. <b>A</b> = basic user, <b>B</b> = independent user, <b>C</b> = proficient user.": "Les niveaux A1 → C2 viennent du Cadre européen commun de référence (CECRL). L'examen de la Corée, le TOPIK, compte six niveaux (1급 à 6급) : chaque niveau de ce cours indique son équivalent TOPIK approximatif, de A1 ≈ 1급 à C2 ≈ 6급 (une correspondance non officielle, pour te repérer). <b>A</b> = utilisateur élémentaire, <b>B</b> = utilisateur indépendant, <b>C</b> = utilisateur expérimenté.",
      "The most effective approach: 20 minutes in the app + a series or podcast in English instead of what you already watch in French. It doubles your English time with no extra effort.": "Le plus efficace : 20 minutes dans l'appli + un drama, une émission de variétés ou un podcast en coréen à la place de ce que tu regardes déjà en français. Ça double ton temps de coréen sans effort en plus."
    }
  }
};
