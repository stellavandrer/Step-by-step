/* Cours d'allemand (allemand.html) : même moteur que les cours d'anglais et de français (js/app.js), avec la langue
   cible, les voix, la reconnaissance vocale et une progression enregistrée à part.
   Le cours s'adresse aux francophones ET aux anglophones : explications, consignes et traductions existent en
   français et en anglais, et js/de/localize.js garde celles de la langue d'interface. Par défaut, la langue du
   navigateur (français si elle commence par fr, sinon anglais) ; changer de langue recharge la page.
   Les personnages sont fictifs, avec des prénoms allemands variés. */
window.APP = {
  id: "de", target: "de", helper: "en", helperCode: "EN",
  key: "schritt.de.v1", voiceLang: "de-DE", srLang: "de-DE",
  learner: "",
  defaultLang: /^fr/i.test((navigator.languages && navigator.languages[0]) || navigator.language || "") ? "fr" : "en",
  reloadOnLang: true,
  welcome: {
    en: "Welcome to your German course. Explanations are in English; everything you learn is in German: <b>click on any German word</b> to see its translation, or on <b>EN</b> to translate a whole sentence. Prefer explanations in French? Choose FR at the top of the page.",
    fr: "Bienvenue dans ton cours d'allemand. Les explications sont en français ; tout ce que tu apprends est en allemand : <b>clique sur un mot allemand</b> pour voir sa traduction, ou sur <b>FR</b> pour traduire une phrase entière. Tu préfères les explications en anglais ? Choisis EN en haut de la page."
  },
  /* Language workshop (B2 to C2): German word endings and a German example of a sentence transformation. */
  wfTable: [
    ["nouns", "noms", "-ung, -heit / -keit, -schaft, -nis, -er / -erin, -ion", "Wohnung, Freiheit, Möglichkeit, Freundschaft, Erlebnis, Lehrerin, Diskussion"],
    ["adjectives", "adjectifs", "-lich, -ig, -bar, -isch, -los, -voll", "freundlich, lustig, machbar, praktisch, arbeitslos, wertvoll"],
    ["adverbs", "adverbes", "-weise, -mals, -wärts", "glücklicherweise, damals, rückwärts"],
    ["verbs", "verbes", "-ieren, -igen, be-, ver-, er-", "studieren, beschäftigen, beantworten, verkaufen, erklären"],
    ["the opposite", "le contraire", "un-, miss-, -los, in- / il- / ir-", "unmöglich, Misserfolg, hilflos, inkompetent, illegal, irrelevant"]
  ],
  kwtExample: ["Schade, dass ich nicht Klavier gelernt habe.", "HÄTTE", "Ich ", "hätte gern Klavier gelernt", "."],
  /* Interface texts written for the English course that need a German version. */
  ui: {
    en: {
      "Learn them as blocks, never word by word: we say “heavy rain”, not “strong rain”, and “meet a deadline”, not “respect a deadline”. Listen, then say each one out loud.": "Learn them as blocks, never word by word: German says “eine Entscheidung treffen” (literally, to meet a decision), not “machen”, and “eine Frage stellen” (to put a question), not “fragen”. Listen, then say each one out loud.",
      "At this level, sounding natural depends less on knowing more words than on combining them well. Four tools, as in the Cambridge exams: collocations, idioms and phrasal verbs, word formation, and sentence transformations.": "At this level, sounding natural depends less on knowing more words than on combining them well. Four tools: collocations, idiomatic expressions, word formation, and sentence transformations, all useful for the Goethe-Zertifikat B2, C1 and C2.",
      "Idioms and phrasal verbs": "Idiomatic expressions",
      "Method: find the grammar point (here, a regret: wish + past perfect), write the answer, then check the word count and that the meaning hasn't changed.": "Method: find the grammar point (here, a regret: ich hätte gern + past participle), write the answer, then check the word count and that the meaning hasn't changed.",
      "One workshop per unit, on the unit's theme: ten collocations, eight idioms and phrasal verbs, eight word-formation sentences and six sentence transformations, as in the Cambridge exams (B2 First, C1 Advanced, C2 Proficiency).": "One workshop per unit, on the unit's theme: ten collocations, eight idiomatic expressions, eight word-formation sentences and six sentence transformations, to prepare the Goethe-Zertifikat B2, C1 and C2.",
      "Collocations, idioms, word formation and sentence transformations for each B2, C1 and C2 unit, as in the Cambridge exams.": "Collocations, idioms, word formation and sentence transformations for each B2, C1 and C2 unit.",
      "Cambridge English estimates that it takes about <b>{h} hours of guided learning</b> to reach {l} from zero. It's an order of magnitude, not a promise: everything you do in English counts (series, podcasts, conversations).": "It takes roughly <b>{h} hours of guided learning</b> to reach {l} from zero. It's an order of magnitude, not a promise: everything you do in German counts (series, podcasts, conversations).",
      "This is a personal record of your progress, not an official certificate. For an official result, take the TOEIC or a Cambridge exam.": "This is a personal record of your progress, not an official certificate. For an official result, take a Goethe-Zertifikat, a telc or ÖSD exam, or the TestDaF to study at a German university.",
      "The other tabs (vocabulary, reading, speaking, TOEIC…) are libraries for extra practice, whenever you like: the course doesn't depend on them.": "The other tabs (vocabulary, reading, speaking…) are libraries for extra practice, whenever you like: the course doesn't depend on them."
    },
    fr: {
      "Learn them as blocks, never word by word: we say “heavy rain”, not “strong rain”, and “meet a deadline”, not “respect a deadline”. Listen, then say each one out loud.": "Apprends-les en bloc, jamais mot à mot : l'allemand dit « eine Entscheidung treffen » (littéralement, rencontrer une décision), pas « machen », et « eine Frage stellen » (poser une question), pas « fragen ». Écoute, puis répète chacune à voix haute.",
      "At this level, sounding natural depends less on knowing more words than on combining them well. Four tools, as in the Cambridge exams: collocations, idioms and phrasal verbs, word formation, and sentence transformations.": "À ce niveau, parler naturellement dépend moins du nombre de mots qu'on connaît que de la façon de les combiner. Quatre outils : les collocations, les expressions idiomatiques, la formation des mots et la reformulation de phrases, utiles pour le Goethe-Zertifikat B2, C1 et C2.",
      "Idioms and phrasal verbs": "Expressions idiomatiques",
      "Method: find the grammar point (here, a regret: wish + past perfect), write the answer, then check the word count and that the meaning hasn't changed.": "Méthode : repère le point de grammaire (ici, un regret : ich hätte gern + participe passé), écris la réponse, puis vérifie le nombre de mots et que le sens n'a pas changé.",
      "One workshop per unit, on the unit's theme: ten collocations, eight idioms and phrasal verbs, eight word-formation sentences and six sentence transformations, as in the Cambridge exams (B2 First, C1 Advanced, C2 Proficiency).": "Un atelier par unité, sur son thème : dix collocations, huit expressions idiomatiques, huit phrases de formation des mots et six reformulations, pour préparer le Goethe-Zertifikat B2, C1 et C2.",
      "Collocations, idioms, word formation and sentence transformations for each B2, C1 and C2 unit, as in the Cambridge exams.": "Collocations, expressions, formation des mots et reformulations pour chaque unité B2, C1 et C2.",
      "Cambridge English estimates that it takes about <b>{h} hours of guided learning</b> to reach {l} from zero. It's an order of magnitude, not a promise: everything you do in English counts (series, podcasts, conversations).": "Il faut compter environ <b>{h} heures d'apprentissage guidé</b> pour atteindre le niveau {l} en partant de zéro. C'est un ordre de grandeur, pas une promesse : tout ce que tu fais en allemand compte (séries, podcasts, conversations).",
      "This is a personal record of your progress, not an official certificate. For an official result, take the TOEIC or a Cambridge exam.": "Ceci est un relevé personnel de ta progression, pas un certificat officiel. Pour un résultat officiel, passe un Goethe-Zertifikat, un examen telc ou ÖSD, ou le TestDaF pour étudier dans une université allemande.",
      "The other tabs (vocabulary, reading, speaking, TOEIC…) are libraries for extra practice, whenever you like: the course doesn't depend on them.": "Les autres onglets (vocabulaire, lecture, oral…) sont des bibliothèques pour t'entraîner en plus, quand tu veux : le cours n'en dépend pas."
    }
  }
};
