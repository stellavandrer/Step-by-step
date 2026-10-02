/* Phrases à répéter (shadowing) et sons difficiles pour les francophones. */
window.SPEAKING = [
{ id: "intro", level: "A1", icon: "user-round", title: "Se présenter", phrases: [
  ["Hi, my name is Stella.", "Salut, je m'appelle Stella."],
  ["I'm from France.", "Je viens de France."],
  ["I live in Paris.", "J'habite à Paris."],
  ["I'm a designer.", "Je suis designer."],
  ["Nice to meet you.", "Enchantée."],
  ["I'm learning English.", "J'apprends l'anglais."],
  ["My English isn't very good yet.", "Mon anglais n'est pas encore très bon."],
  ["I like music and travelling.", "J'aime la musique et les voyages."]
]},
{ id: "survival", level: "A1", icon: "life-buoy", title: "Phrases de survie", phrases: [
  ["Sorry, I don't understand.", "Désolée, je ne comprends pas."],
  ["Could you repeat that, please?", "Pourriez-vous répéter, s'il vous plaît ?"],
  ["Could you speak more slowly?", "Pourriez-vous parler plus lentement ?"],
  ["What does that mean?", "Qu'est-ce que ça veut dire ?"],
  ["How do you say this in English?", "Comment on dit ça en anglais ?"],
  ["Can you help me, please?", "Pouvez-vous m'aider, s'il vous plaît ?"],
  ["Where is the bathroom?", "Où sont les toilettes ?"],
  ["Just a moment, please.", "Un instant, s'il vous plaît."]
]},
{ id: "cafe", level: "A1", icon: "coffee", title: "Au café, au restaurant", phrases: [
  ["Can I have a coffee, please?", "Je peux avoir un café, s'il vous plaît ?"],
  ["A table for two, please.", "Une table pour deux, s'il vous plaît."],
  ["Could I see the menu?", "Je pourrais voir la carte ?"],
  ["I'd like the chicken, please.", "Je voudrais le poulet, s'il vous plaît."],
  ["No sugar, thank you.", "Sans sucre, merci."],
  ["Can we have the bill, please?", "L'addition, s'il vous plaît."],
  ["Can I pay by card?", "Je peux payer par carte ?"],
  ["It was delicious, thank you!", "C'était délicieux, merci !"]
]},
{ id: "travel", level: "A2", icon: "plane", title: "En voyage", phrases: [
  ["I have a reservation.", "J'ai une réservation."],
  ["How much is a ticket to London?", "Combien coûte un billet pour Londres ?"],
  ["Where is the train station?", "Où est la gare ?"],
  ["Is it far from here?", "Est-ce que c'est loin d'ici ?"],
  ["Turn left, then go straight on.", "Tournez à gauche, puis allez tout droit."],
  ["What time does the museum open?", "À quelle heure ouvre le musée ?"],
  ["I'm lost. Can you help me?", "Je suis perdue. Pouvez-vous m'aider ?"],
  ["Is breakfast included?", "Le petit-déjeuner est-il compris ?"]
]},
{ id: "talk", level: "A2", icon: "message-circle", title: "Faire la conversation", phrases: [
  ["How was your weekend?", "Comment s'est passé ton week-end ?"],
  ["What do you do for a living?", "Que fais-tu dans la vie ?"],
  ["That sounds great!", "Ça a l'air génial !"],
  ["I totally agree with you.", "Je suis tout à fait d'accord avec toi."],
  ["I'm not sure about that.", "Je n'en suis pas sûre."],
  ["What do you think?", "Qu'en penses-tu ?"],
  ["Have you ever been to France?", "Es-tu déjà allé en France ?"],
  ["It was really nice to talk to you.", "C'était vraiment sympa de discuter avec toi."]
]},
{ id: "th", level: "A1", icon: "audio-lines", title: "Spécial « th »", phrases: [
  ["Thank you, I think so.", "Merci, je pense que oui."],
  ["This is my mother.", "Voici ma mère."],
  ["The weather is better than yesterday.", "Il fait meilleur qu'hier."],
  ["There are three things.", "Il y a trois choses."],
  ["My brother is thirty-three.", "Mon frère a trente-trois ans."],
  ["Those clothes are together.", "Ces vêtements vont ensemble."]
]}
];

/* Sons difficiles : explication + paires minimales à écouter. */
window.SOUNDS = [
{ title: "Le « th »", icon: "audio-lines",
  how: "Mets le bout de la langue <b>entre les dents</b> et souffle. Ce n'est ni « s », ni « z », ni « f ». Il y a deux versions : soufflée (<i>think</i>) et vibrée (<i>this</i>).",
  pairs: [["think", "sink"], ["three", "free"], ["thank", "sank"], ["then", "den"], ["they", "day"]] },
{ title: "Le « h » qui se prononce", icon: "wind",
  how: "En français, le h est muet. En anglais, on <b>souffle</b>, comme pour faire de la buée sur une vitre. Sans souffle, le mot change !",
  pairs: [["hair", "air"], ["heat", "eat"], ["hand", "and"], ["hill", "ill"], ["high", "I"]] },
{ title: "« i » court et « i » long", icon: "ruler",
  how: "Le <b>i court</b> (<i>ship</i>) est entre le « i » et le « é » français, très bref et détendu. Le <b>i long</b> (<i>sheep</i>) est un « iii » bien tenu, avec un sourire.",
  pairs: [["ship", "sheep"], ["sit", "seat"], ["live", "leave"], ["fill", "feel"], ["it", "eat"]] },
{ title: "« u » court et long", icon: "moon",
  how: "<i>full</i> est bref, la bouche presque détendue. <i>fool</i> est un « ou » long, lèvres bien arrondies.",
  pairs: [["full", "fool"], ["pull", "pool"], ["look", "Luke"]] },
{ title: "Le « a » de cat / cut", icon: "cat",
  how: "<i>cat</i> : ouvre grand la bouche, entre « a » et « è ». <i>cut</i> : un « a » court et neutre, presque « eu ». <i>cart</i> : un « a » long et profond.",
  pairs: [["cat", "cut"], ["hat", "hut"], ["bag", "bug"], ["match", "much"]] },
{ title: "Le « r » anglais", icon: "waves",
  how: "Le r anglais ne racle pas la gorge. Recourbe légèrement la langue vers l'arrière <b>sans toucher le palais</b>, lèvres un peu arrondies. En anglais britannique, le r en fin de mot ne se prononce souvent pas (<i>car</i> ≈ « caa »).",
  pairs: [["red", "wed"], ["right", "light"], ["road", "load"], ["rice", "lice"]] },
{ title: "Le « w »", icon: "audio-waveform",
  how: "Comme le « ou » de « oui », très rapide. Les lèvres partent arrondies, puis s'ouvrent. Ne pas confondre avec « v ».",
  pairs: [["wine", "vine"], ["west", "vest"], ["wet", "vet"], ["while", "vile"]] },
{ title: "L'accent tonique", icon: "music",
  how: "En français, toutes les syllabes ont presque la même force. En anglais, <b>une syllabe est plus forte</b> que les autres, et se tromper peut rendre le mot incompréhensible. Écoute et exagère la syllabe en majuscules.",
  pairs: [["PHOtograph", "phoTOgrapher"], ["COMfortable", "VEgetable"], ["deVElopment", "imPORtant"], ["HOtel", "aGAIN"]] }
];
