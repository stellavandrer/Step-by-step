/* Cours de français pour anglophones (francais.html) : même moteur que le cours d'anglais (js/app.js),
   avec la langue cible, les voix, la reconnaissance vocale et une progression enregistrée à part.
   L'interface est en anglais par défaut (la langue de l'apprenant) ; « Français » = immersion totale.
   Les personnages sont fictifs, avec des prénoms français variés. */
window.APP = {
  id: "fr", target: "fr", helper: "en", helperCode: "EN",
  key: "pasapas.fr.v1", voiceLang: "fr-FR", srLang: "fr-FR",
  learner: "",
  welcome: {
    en: "Welcome to your French course. Explanations are in English; everything you learn is in French: <b>click on any French word</b> to see its translation, or on <b>EN</b> to translate a whole sentence. When you feel ready, switch the menus to French (FR at the top of the page): that's total immersion.",
    fr: "Bienvenue dans ton cours de français. Tout est en français : <b>clique sur un mot</b> pour voir sa traduction en anglais, ou sur <b>EN</b> pour traduire une phrase entière. Tu peux remettre les menus en anglais en haut de la page."
  },
  /* Interface texts that the automatic swap of language names doesn't get right. */
  ui: {
    en: {
      "This is a personal record of your progress, not an official certificate. For an official result, take the TOEIC or a Cambridge exam.": "This is a personal record of your progress, not an official certificate. For an official result, take the DELF or the DALF, the French government's diplomas.",
      "The other tabs (vocabulary, reading, speaking, TOEIC…) are libraries for extra practice, whenever you like: the course doesn't depend on them.": "The other tabs (vocabulary, reading, speaking…) are libraries for extra practice, whenever you like: the course doesn't depend on them."
    },
    fr: {
      "This is a personal record of your progress, not an official certificate. For an official result, take the TOEIC or a Cambridge exam.": "Ceci est un relevé personnel de ta progression, pas un certificat officiel. Pour un résultat officiel, passe le DELF ou le DALF, les diplômes de l'État français.",
      "The other tabs (vocabulary, reading, speaking, TOEIC…) are libraries for extra practice, whenever you like: the course doesn't depend on them.": "Les autres onglets (vocabulaire, lecture, oral…) sont des bibliothèques pour t'entraîner en plus, quand tu veux : le cours n'en dépend pas."
    }
  }
};
