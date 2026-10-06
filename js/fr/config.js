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
  /* Language workshop (B2 to C2): French word endings and a French example of a sentence transformation. */
  wfTable: [
    ["nouns", "noms", "-tion, -ment, -ité, -ance / -ence, -eur / -euse, -age", "décision, développement, rapidité, confiance, chercheuse, apprentissage"],
    ["adjectives", "adjectifs", "-able / -ible, -if / -ive, -eux / -euse, -el / -elle, -al / -ale", "fiable, créatif, courageux, culturel, national"],
    ["adverbs", "adverbes", "-ment, -amment, -emment", "rapidement, couramment, évidemment"],
    ["verbs", "verbes", "-iser, -ifier, -ir", "moderniser, simplifier, grandir"],
    ["the opposite", "le contraire", "in-, im-, il-, ir-, dé- / dés-, mé-, mal-", "inutile, impossible, illégal, irréaliste, désagréable, méconnu, malhonnête"]
  ],
  kwtExample: ["Je regrette de ne pas avoir appris le piano.", "AURAIS", "J'", "aurais aimé apprendre", " le piano."],
  /* Interface texts that the automatic swap of language names doesn't get right. */
  ui: {
    en: {
      "Learn them as blocks, never word by word: we say “heavy rain”, not “strong rain”, and “meet a deadline”, not “respect a deadline”. Listen, then say each one out loud.": "Learn them as blocks, never word by word: French says “prendre une décision”, not “faire une décision”, and “poser une question”, not “demander une question”. Listen, then say each one out loud.",
      "At this level, sounding natural depends less on knowing more words than on combining them well. Four tools, as in the Cambridge exams: collocations, idioms and phrasal verbs, word formation, and sentence transformations.": "At this level, sounding natural depends less on knowing more words than on combining them well. Four tools: collocations, idiomatic expressions, word formation, and sentence transformations, all useful for the DELF B2 and the DALF C1 and C2.",
      "Idioms and phrasal verbs": "Idiomatic expressions",
      "Method: find the grammar point (here, a regret: wish + past perfect), write the answer, then check the word count and that the meaning hasn't changed.": "Method: find the grammar point (here, a regret: j'aurais aimé + infinitive), write the answer, then check the word count and that the meaning hasn't changed.",
      "One workshop per unit, on the unit's theme: ten collocations, eight idioms and phrasal verbs, eight word-formation sentences and six sentence transformations, as in the Cambridge exams (B2 First, C1 Advanced, C2 Proficiency).": "One workshop per unit, on the unit's theme: ten collocations, eight idiomatic expressions, eight word-formation sentences and six sentence transformations, to prepare the DELF B2 and the DALF C1 and C2.",
      "This is a personal record of your progress, not an official certificate. For an official result, take the TOEIC or a Cambridge exam.": "This is a personal record of your progress, not an official certificate. For an official result, take the DELF or the DALF, the French government's diplomas.",
      "The other tabs (vocabulary, reading, speaking, TOEIC…) are libraries for extra practice, whenever you like: the course doesn't depend on them.": "The other tabs (vocabulary, reading, speaking…) are libraries for extra practice, whenever you like: the course doesn't depend on them."
    },
    fr: {
      "Learn them as blocks, never word by word: we say “heavy rain”, not “strong rain”, and “meet a deadline”, not “respect a deadline”. Listen, then say each one out loud.": "Apprends-les en bloc, jamais mot à mot : on dit « prendre une décision », pas « faire une décision », et « poser une question », pas « demander une question ». Écoute, puis répète chacune à voix haute.",
      "At this level, sounding natural depends less on knowing more words than on combining them well. Four tools, as in the Cambridge exams: collocations, idioms and phrasal verbs, word formation, and sentence transformations.": "À ce niveau, parler naturellement dépend moins du nombre de mots qu'on connaît que de la façon de les combiner. Quatre outils : les collocations, les expressions idiomatiques, la formation des mots et la reformulation de phrases, utiles pour le DELF B2 et le DALF C1 et C2.",
      "Idioms and phrasal verbs": "Expressions idiomatiques",
      "Method: find the grammar point (here, a regret: wish + past perfect), write the answer, then check the word count and that the meaning hasn't changed.": "Méthode : repère le point de grammaire (ici, un regret : j'aurais aimé + infinitif), écris la réponse, puis vérifie le nombre de mots et que le sens n'a pas changé.",
      "One workshop per unit, on the unit's theme: ten collocations, eight idioms and phrasal verbs, eight word-formation sentences and six sentence transformations, as in the Cambridge exams (B2 First, C1 Advanced, C2 Proficiency).": "Un atelier par unité, sur son thème : dix collocations, huit expressions idiomatiques, huit phrases de formation des mots et six reformulations, pour préparer le DELF B2 et le DALF C1 et C2.",
      "This is a personal record of your progress, not an official certificate. For an official result, take the TOEIC or a Cambridge exam.": "Ceci est un relevé personnel de ta progression, pas un certificat officiel. Pour un résultat officiel, passe le DELF ou le DALF, les diplômes de l'État français.",
      "The other tabs (vocabulary, reading, speaking, TOEIC…) are libraries for extra practice, whenever you like: the course doesn't depend on them.": "Les autres onglets (vocabulaire, lecture, oral…) sont des bibliothèques pour t'entraîner en plus, quand tu veux : le cours n'en dépend pas."
    }
  }
};
