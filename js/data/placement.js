/* Test de placement : grammaire et vocabulaire (« Use of English »), A1 → C2.
   12 questions par niveau ; le test en tire 6 au hasard par niveau et monte ou descend selon le score.
   Format : [phrase avec ___, [bonne réponse, distracteur, distracteur, distracteur], point travaillé, point en français]
   La bonne réponse est toujours en premier dans les données : l'appli mélange les options. */
window.PLACEMENT = window.PLACEMENT || {};
window.PLACEMENT.grammar = {
A1: [
  ["My sister ___ a nurse.", ["is", "are", "am", "be"], "The verb be", "Le verbe be"],
  ["___ you like coffee?", ["Do", "Does", "Are", "Is"], "Present simple questions", "Questions au présent simple"],
  ["He ___ to work by bus every day.", ["goes", "go", "going", "is go"], "Present simple: he / she / it", "Présent simple : he / she / it"],
  ["There ___ two cats in the garden.", ["are", "is", "be", "has"], "There is / there are", "There is / there are"],
  ["I ___ swim, but I can't ski.", ["can", "am", "do", "have"], "Can", "Can"],
  ["This is Anna. ___ brother is a doctor.", ["Her", "She", "His", "Hers"], "Possessive adjectives", "Les adjectifs possessifs"],
  ["He has ___ umbrella.", ["an", "a", "much", "two"], "A / an", "A / an"],
  ["What time ___ it? — It's six o'clock.", ["is", "are", "does", "do"], "Telling the time", "Demander l'heure"],
  ["Look! The children ___ in the park.", ["are playing", "play", "is playing", "plays"], "Present continuous", "Le présent continu"],
  ["The day after Monday is ___.", ["Tuesday", "Thursday", "Sunday", "Wednesday"], "Days of the week", "Les jours de la semaine"],
  ["You cook in the ___.", ["kitchen", "bedroom", "bathroom", "garage"], "Rooms in a house", "Les pièces de la maison"],
  ["My father's mother is my ___.", ["grandmother", "aunt", "sister", "cousin"], "Family words", "La famille"]
],
A2: [
  ["I ___ to the cinema last night.", ["went", "go", "have gone", "was go"], "Past simple: irregular verbs", "Prétérit : verbes irréguliers"],
  ["She's ___ than her brother.", ["taller", "more tall", "tallest", "the tallest"], "Comparatives", "Le comparatif"],
  ["We ___ visit my aunt next weekend.", ["are going to", "going to", "will to", "go to"], "Be going to", "Be going to"],
  ["Have you ever ___ sushi?", ["eaten", "ate", "eat", "eating"], "Present perfect: experience", "Present perfect : l'expérience"],
  ["When I arrived, they ___ dinner.", ["were having", "are having", "have", "was having"], "Past continuous", "Le prétérit continu"],
  ["You ___ wear a seatbelt in a car. It's the law.", ["must", "mustn't", "don't have to", "can't"], "Must / have to", "Must / have to"],
  ["There isn't ___ milk in the fridge.", ["any", "some", "many", "a"], "Some / any", "Some / any"],
  ["He didn't ___ the email.", ["send", "sent", "sends", "sending"], "Past simple: negatives", "Prétérit : la négation"],
  ["This is the ___ restaurant in town.", ["best", "better", "goodest", "most good"], "Superlatives", "Le superlatif"],
  ["Don't forget to ___ your homework.", ["do", "make", "take", "give"], "Do or make", "Do ou make"],
  ["I'm not interested ___ football.", ["in", "on", "at", "for"], "Prepositions after adjectives", "Prépositions après les adjectifs"],
  ["How ___ is this bag? — It's £20.", ["much", "many", "old", "long"], "How much / how many", "How much / how many"]
],
B1: [
  ["I ___ here since 2019.", ["have lived", "live", "am living", "lived"], "Present perfect with since / for", "Present perfect avec since / for"],
  ["If it rains tomorrow, we ___ at home.", ["will stay", "would stay", "stayed", "would have stayed"], "First conditional", "Le conditionnel réel (type 1)"],
  ["The museum ___ in 1890.", ["was built", "built", "has built", "is building"], "The passive", "Le passif"],
  ["I used ___ glasses, but now I wear contact lenses.", ["to wear", "wearing", "wear", "to wearing"], "Used to", "Used to"],
  ["She asked me where ___.", ["I lived", "did I live", "do I live", "I do live"], "Indirect questions", "Les questions indirectes"],
  ["The man ___ lives next door is a pilot.", ["who", "which", "whose", "what"], "Relative clauses", "Les propositions relatives"],
  ["If I ___ more time, I would learn the piano.", ["had", "have", "would have", "will have"], "Second conditional", "Le conditionnel irréel (type 2)"],
  ["You ___ see a doctor about that cough.", ["should", "need", "must to", "ought"], "Advice: should", "Le conseil : should"],
  ["He's been working here ___ ten years.", ["for", "since", "during", "from"], "For / since", "For / since"],
  ["I've ___ finished my homework. Can I go out now?", ["just", "yet", "ever", "still"], "Just / yet / ever", "Just / yet / ever"],
  ["Could you ___ the music down? I'm trying to work.", ["turn", "put", "take", "get"], "Phrasal verbs", "Les verbes à particule"],
  ["The film was so ___ that I fell asleep.", ["boring", "bored", "exciting", "interested"], "-ed and -ing adjectives", "Adjectifs en -ed et en -ing"]
],
B2: [
  ["If I had known about the party, I ___.", ["would have come", "would come", "will come", "had come"], "Third conditional", "Le conditionnel passé (type 3)"],
  ["I wish I ___ so much last night.", ["hadn't eaten", "didn't eat", "wouldn't eat", "haven't eaten"], "Wish + past perfect", "Wish + plus-que-parfait"],
  ["He ___ have left already: his coat is still here.", ["can't", "mustn't", "shouldn't", "needn't"], "Modals of deduction in the past", "La déduction au passé"],
  ["By the time we arrived, the film ___.", ["had already started", "has already started", "already starts", "is already starting"], "Past perfect", "Le plus-que-parfait"],
  ["She told me she ___ the report the following day.", ["would send", "will send", "sends", "has sent"], "Reported speech", "Le discours rapporté"],
  ["It's high time we ___ a decision.", ["made", "make", "will make", "are making"], "It's (high) time + past", "It's (high) time + prétérit"],
  ["The project, ___ was launched in May, has been a success.", ["which", "that", "what", "who"], "Non-defining relative clauses", "Les relatives explicatives"],
  ["I'm not used to ___ up so early.", ["getting", "get", "got", "have got"], "Be used to + -ing", "Be used to + -ing"],
  ["He denied ___ the window.", ["breaking", "to break", "break", "that broke"], "Verb + -ing or infinitive", "Verbe + -ing ou infinitif"],
  ["The meeting has been ___ until next week.", ["put off", "put out", "put up", "put on"], "Phrasal verbs", "Les verbes à particule"],
  ["We need to ___ into account the cost of transport.", ["take", "make", "put", "bring"], "Collocations", "Les collocations"],
  ["Despite ___ tired, she finished the race.", ["being", "she was", "of being", "to be"], "Despite / in spite of", "Despite / in spite of"]
],
C1: [
  ["Hardly ___ the house when it started to rain.", ["had we left", "we had left", "did we leave", "we left"], "Inversion after negative adverbs", "L'inversion après un adverbe négatif"],
  ["___ I known about the problem, I would have helped.", ["Had", "If", "Should", "Were"], "Conditionals without if", "Le conditionnel sans if"],
  ["It was only when I got home ___ I realised I'd lost my keys.", ["that", "when", "which", "then"], "Cleft sentences", "La mise en relief (it was … that)"],
  ["The report ___ to have been written in a hurry.", ["appears", "seems like", "is seeming", "looks like"], "Appear / seem + perfect infinitive", "Appear / seem + infinitif passé"],
  ["I'd rather you ___ anyone about this.", ["didn't tell", "don't tell", "wouldn't tell", "not tell"], "Would rather + past", "Would rather + prétérit"],
  ["___ to the weather, the match was cancelled.", ["Owing", "Because", "Given", "Despite"], "Linking: owing to", "Les connecteurs : owing to"],
  ["The new policy has ___ widespread criticism.", ["drawn", "made", "pulled", "done"], "Collocations", "Les collocations"],
  ["She's highly ___ to win the award.", ["likely", "probable", "possible", "potential"], "Likely / probable", "Likely / probable"],
  ["Little ___ that she was being watched.", ["did she know", "she knew", "she did know", "knew she"], "Inversion", "L'inversion"],
  ["The proposal was rejected on the ___ that it was too expensive.", ["grounds", "reasons", "motives", "causes"], "Formal phrases", "Les tournures soutenues"],
  ["Were the government ___ taxes, there would be protests.", ["to raise", "raising", "raise", "raised"], "Were … to (hypothesis)", "Were … to (l'hypothèse)"],
  ["Such ___ the demand that tickets sold out in minutes.", ["was", "did", "had", "made"], "Such … that (fronting)", "Such … that (mise en tête)"]
],
C2: [
  ["The minister's remarks were tantamount ___ an admission of guilt.", ["to", "with", "for", "of"], "Dependent prepositions", "Les prépositions imposées"],
  ["No sooner ___ the contract than the company went bankrupt.", ["had they signed", "they had signed", "they signed", "have they signed"], "No sooner … than", "No sooner … than"],
  ["___ plausible his explanation may be, it doesn't fit the facts.", ["However", "Whatever", "Although", "Despite"], "However + adjective", "However + adjectif"],
  ["The committee insisted that the report ___ published immediately.", ["be", "is being", "will be", "being"], "The subjunctive", "Le subjonctif"],
  ["The negotiations have reached an ___, with neither side willing to compromise.", ["impasse", "outcome", "overture", "upshot"], "Advanced vocabulary", "Vocabulaire avancé"],
  ["She has a ___ for languages: she speaks six fluently.", ["flair", "flare", "flavour", "fluke"], "Words that look alike", "Les mots qui se ressemblent"],
  ["The scheme was ___ from the outset: it never had any real chance.", ["doomed", "deemed", "damned", "destined"], "Collocations", "Les collocations"],
  ["Her argument doesn't hold ___ under close examination.", ["water", "ground", "fire", "court"], "Idioms", "Les expressions idiomatiques"],
  ["Their findings ___ doubt on the earlier study.", ["cast", "made", "put", "laid"], "Collocations", "Les collocations"],
  ["Only by changing the law ___ this problem.", ["can we solve", "we can solve", "we solve", "can solve we"], "Inversion after only", "L'inversion après only"],
  ["Her success was ___ to her hard work.", ["attributable", "responsible", "thankful", "accountable"], "Precise adjectives", "Les adjectifs précis"],
  ["Try as she ___, she couldn't open the jar.", ["might", "should", "can", "must"], "Concession: try as I might", "La concession : try as I might"]
]
};

/* Faux mots pour le test de vocabulaire : ils ressemblent à de l'anglais mais n'existent pas.
   Dire « je connais » un faux mot révèle qu'on devine : le score est corrigé en conséquence. */
window.PLACEMENT.pseudo = ["flimber", "crastle", "dorrish", "spundle", "tressive", "shrovel", "plintish", "wendory", "faspin", "glomper", "thrandle", "obsterate", "callitude", "mispluct", "sporrow", "fleckage", "vollinate", "brenning", "quindle", "stralious"];

/* Production écrite et orale : une tâche par niveau. Claude estime ensuite le niveau, avec la grille du CECRL. */
window.PLACEMENT.writing = {
A1: { task: "Write a short message to a new friend. Say your name, where you live, what you do and what you like.", task_fr: "Écris un court message à un nouvel ami : ton prénom, où tu habites, ce que tu fais et ce que tu aimes.", words: "30–50" },
A2: { task: "Write an email to a friend about your last weekend. Say where you went, what you did and how it was.", task_fr: "Écris un e-mail à un ami sur ton dernier week-end : où tu es allée, ce que tu as fait et comment c'était.", words: "60–80" },
B1: { task: "Write a short article for a website: “A place I love”. Describe the place, explain why it matters to you and recommend it.", task_fr: "Écris un court article pour un site : « Un endroit que j'aime ». Décris-le, explique pourquoi il compte pour toi et recommande-le.", words: "120–150" },
B2: { task: "Essay: “Working from home is better for everyone.” Do you agree? Give reasons and consider the other side.", task_fr: "Essai : « Le télétravail, c'est mieux pour tout le monde. » Es-tu d'accord ? Donne tes raisons et envisage le point de vue opposé.", words: "180–220" },
C1: { task: "Essay: “Social media has done more harm than good to public debate.” Discuss, using examples, and reach a balanced conclusion.", task_fr: "Essai : « Les réseaux sociaux ont fait plus de mal que de bien au débat public. » Discute, avec des exemples, et conclus de façon nuancée.", words: "220–260" },
C2: { task: "Review article: choose a book, film or exhibition that changed the way you see something. Evaluate it for a cultured, demanding readership.", task_fr: "Critique : choisis un livre, un film ou une exposition qui a changé ton regard sur quelque chose, et évalue-le pour un lectorat cultivé et exigeant.", words: "280–320" }
};
window.PLACEMENT.speaking = {
A1: { task: "Talk about yourself for one minute: your name, your family, where you live, what you like.", task_fr: "Parle de toi pendant une minute : ton prénom, ta famille, où tu habites, ce que tu aimes." },
A2: { task: "Describe a normal day for you, then say what you did last weekend. About one or two minutes.", task_fr: "Décris une journée normale, puis raconte ton dernier week-end. Une à deux minutes." },
B1: { task: "Tell the story of a trip or an experience you remember well, and say why it was important. Two minutes.", task_fr: "Raconte un voyage ou une expérience dont tu te souviens bien, et dis pourquoi c'était important. Deux minutes." },
B2: { task: "Should cars be banned from city centres? Give your opinion, with reasons and examples, and answer the main objection. Two to three minutes.", task_fr: "Faut-il interdire les voitures dans les centres-villes ? Donne ton avis, avec des raisons et des exemples, et réponds à la principale objection. Deux à trois minutes." },
C1: { task: "How has technology changed the way people learn? Speak for three minutes, compare past and present, and say what is gained and what is lost.", task_fr: "Comment la technologie a-t-elle changé notre façon d'apprendre ? Parle trois minutes, compare hier et aujourd'hui, et dis ce qu'on y gagne et ce qu'on y perd." },
C2: { task: "“Art should make people uncomfortable.” Develop a nuanced argument for three to four minutes, with examples, and anticipate counter-arguments.", task_fr: "« L'art devrait déranger. » Développe un argument nuancé pendant trois à quatre minutes, avec des exemples, en anticipant les objections." }
};
