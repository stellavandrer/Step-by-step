/* Textes de lecture gradués. Chaque paragraphe a sa traduction (cachée par défaut).
   Le glossaire associe un mot (en minuscules, tel qu'il apparaît) à sa traduction. */
window.READINGS = [
{
  id: "emma", level: "A1", icon: "user-round", title: "My name is Emma",
  intro: "Une jeune femme se présente. Phrases très courtes, présent simple et « to be ».",
  paragraphs: [
    { en: "Hello! My name is Emma. I am twenty-eight years old. I am from Manchester, in England, but I live in Bristol now.", fr: "Bonjour ! Je m'appelle Emma. J'ai vingt-huit ans. Je viens de Manchester, en Angleterre, mais j'habite à Bristol maintenant." },
    { en: "I am a nurse. I work in a big hospital. My job is difficult, but I love it.", fr: "Je suis infirmière. Je travaille dans un grand hôpital. Mon travail est difficile, mais je l'adore." },
    { en: "I live in a small flat with my cat. His name is Biscuit. He is orange and very lazy. He sleeps all day!", fr: "J'habite dans un petit appartement avec mon chat. Il s'appelle Biscuit. Il est roux et très paresseux. Il dort toute la journée !" },
    { en: "At the weekend, I go to the park with my friends. We walk, we talk and we drink coffee. Sometimes we go to the cinema.", fr: "Le week-end, je vais au parc avec mes amis. On marche, on discute et on boit un café. Parfois, on va au cinéma." },
    { en: "I want to learn French. It is a beautiful language!", fr: "Je veux apprendre le français. C'est une belle langue !" }
  ],
  glossary: { "nurse": "infirmier, infirmière", "hospital": "hôpital", "flat": "appartement", "lazy": "paresseux", "sleeps": "dort", "weekend": "week-end", "walk": "marchons, nous promenons", "talk": "parlons, discutons", "sometimes": "parfois", "language": "langue", "difficult": "difficile", "live": "habite", "now": "maintenant", "all": "tout(e)", "learn": "apprendre", "want": "veux" },
  questions: [
    { q: "Où habite Emma ?", o: ["À Manchester", "À Bristol", "À Londres"], a: 1 },
    { q: "Quel est son métier ?", o: ["Médecin", "Infirmière", "Professeure"], a: 1 },
    { q: "Que fait Biscuit toute la journée ?", o: ["Il joue", "Il mange", "Il dort"], a: 2 }
  ]
},
{
  id: "cafe", level: "A1", icon: "coffee", title: "At the café",
  intro: "Un dialogue au café. Les phrases que tu utiliseras vraiment en voyage.",
  paragraphs: [
    { speaker: "Waiter", en: "Hi there! What can I get you?", fr: "Bonjour ! Qu'est-ce que je vous sers ?" },
    { speaker: "Stella", en: "Hello! Can I have a cappuccino, please?", fr: "Bonjour ! Je peux avoir un cappuccino, s'il vous plaît ?" },
    { speaker: "Waiter", en: "Sure. Small, medium or large?", fr: "Bien sûr. Petit, moyen ou grand ?" },
    { speaker: "Stella", en: "Medium, please. And a croissant.", fr: "Moyen, s'il vous plaît. Et un croissant." },
    { speaker: "Waiter", en: "Is that to eat in or to take away?", fr: "C'est sur place ou à emporter ?" },
    { speaker: "Stella", en: "To eat in, thanks. How much is it?", fr: "Sur place, merci. Ça fait combien ?" },
    { speaker: "Waiter", en: "That's six pounds fifty. You can pay by card over there.", fr: "Ça fait six livres cinquante. Vous pouvez payer par carte là-bas." },
    { speaker: "Stella", en: "Perfect. Thank you very much!", fr: "Parfait. Merci beaucoup !" },
    { speaker: "Waiter", en: "You're welcome. Have a lovely day!", fr: "Je vous en prie. Bonne journée !" }
  ],
  glossary: { "get": "apporter, servir", "sure": "bien sûr", "small": "petit", "medium": "moyen", "large": "grand", "eat": "manger", "take": "emporter", "away": "loin (take away = à emporter)", "much": "beaucoup (how much = combien)", "pounds": "livres (monnaie)", "pay": "payer", "card": "carte bancaire", "over": "là-bas (over there)", "there": "là", "lovely": "charmant, très bien", "welcome": "bienvenu (you're welcome = de rien)", "perfect": "parfait" },
  questions: [
    { q: "Que commande Stella ?", o: ["Un thé et un muffin", "Un cappuccino et un croissant", "Un café noir"], a: 1 },
    { q: "Stella mange :", o: ["À emporter", "Sur place"], a: 1 },
    { q: "Combien ça coûte ?", o: ["£5.60", "£6.50", "£16.50"], a: 1 }
  ]
},
{
  id: "routine", level: "A1", icon: "alarm-clock", title: "Tom's busy day",
  intro: "La journée type d'un graphiste. Présent simple avec he (attention aux -s !).",
  paragraphs: [
    { en: "Tom is a graphic designer. He lives in London with his girlfriend, Priya.", fr: "Tom est graphiste. Il vit à Londres avec sa copine, Priya." },
    { en: "Every morning, he gets up at seven o'clock. He has a shower and he makes breakfast: toast and a big cup of tea.", fr: "Tous les matins, il se lève à sept heures. Il prend une douche et prépare le petit-déjeuner : des toasts et une grande tasse de thé." },
    { en: "He doesn't drive to work. He takes the Tube, the London underground. The journey takes forty minutes, so he reads a book or listens to music.", fr: "Il ne va pas au travail en voiture. Il prend le Tube, le métro de Londres. Le trajet dure quarante minutes, alors il lit un livre ou écoute de la musique." },
    { en: "He starts work at nine. He designs logos and websites for small companies. At one o'clock, he has lunch with his colleagues.", fr: "Il commence le travail à neuf heures. Il crée des logos et des sites web pour de petites entreprises. À une heure, il déjeune avec ses collègues." },
    { en: "In the evening, Tom and Priya cook dinner together. Then they watch a series on TV. Tom usually goes to bed at eleven. He is always tired!", fr: "Le soir, Tom et Priya préparent le dîner ensemble. Ensuite, ils regardent une série à la télé. Tom se couche généralement à onze heures. Il est toujours fatigué !" }
  ],
  glossary: { "graphic": "graphique", "designer": "designer, graphiste", "gets": "(se) lève (get up = se lever)", "up": "(get up = se lever)", "shower": "douche", "makes": "fait, prépare", "breakfast": "petit-déjeuner", "cup": "tasse", "drive": "conduire", "underground": "métro", "journey": "trajet", "reads": "lit", "listens": "écoute", "designs": "conçoit, crée", "companies": "entreprises", "lunch": "déjeuner", "colleagues": "collègues", "cook": "cuisinent", "together": "ensemble", "then": "ensuite", "usually": "généralement", "always": "toujours", "tired": "fatigué", "every": "chaque, tous les", "starts": "commence", "doesn't": "ne … pas", "so": "alors, donc" },
  questions: [
    { q: "Comment Tom va-t-il au travail ?", o: ["En voiture", "En métro", "À vélo"], a: 1 },
    { q: "Que fait-il dans le métro ?", o: ["Il dort", "Il lit ou écoute de la musique", "Il travaille"], a: 1 },
    { q: "Que fait Tom le soir avec Priya ?", o: ["Ils vont au restaurant", "Ils cuisinent et regardent une série", "Ils font du sport"], a: 1 }
  ]
},
{
  id: "cat", level: "A2", icon: "cat", title: "The lost cat",
  intro: "Une petite histoire au passé. Repère les verbes irréguliers (went, saw, found…).",
  paragraphs: [
    { en: "Last Saturday, Lucy woke up early and looked for her cat, Pepper. Pepper usually slept on the sofa, but that morning the sofa was empty.", fr: "Samedi dernier, Lucy s'est réveillée tôt et a cherché son chat, Pepper. Pepper dormait d'habitude sur le canapé, mais ce matin-là, le canapé était vide." },
    { en: "She looked in the kitchen, in the bathroom and under the bed. No cat. She started to worry.", fr: "Elle a regardé dans la cuisine, dans la salle de bain et sous le lit. Pas de chat. Elle a commencé à s'inquiéter." },
    { en: "She went outside and asked her neighbours. \"Have you seen a small black cat?\" Nobody saw anything.", fr: "Elle est sortie et a demandé à ses voisins : « Avez-vous vu un petit chat noir ? » Personne n'avait rien vu." },
    { en: "In the afternoon, she made posters with a photo of Pepper and put them on every tree in the street. She felt very sad.", fr: "L'après-midi, elle a fait des affiches avec une photo de Pepper et les a mises sur chaque arbre de la rue. Elle était très triste." },
    { en: "That evening, she opened a can of fish for dinner. Suddenly, she heard a small sound: \"Meow!\" Pepper was on top of the wardrobe! He was there all day.", fr: "Ce soir-là, elle a ouvert une boîte de poisson pour le dîner. Soudain, elle a entendu un petit bruit : « Miaou ! » Pepper était sur l'armoire ! Il était là toute la journée." },
    { en: "Lucy laughed, then she went back outside and took down all the posters.", fr: "Lucy a ri, puis elle est ressortie et a décroché toutes les affiches." }
  ],
  glossary: { "last": "dernier", "woke": "s'est réveillée (wake up)", "looked": "a cherché, a regardé (look for = chercher)", "slept": "dormait (sleep)", "sofa": "canapé", "empty": "vide", "under": "sous", "worry": "s'inquiéter", "went": "est allée (go)", "outside": "dehors", "asked": "a demandé", "neighbours": "voisins", "seen": "vu (see)", "nobody": "personne", "saw": "a vu (see)", "anything": "quoi que ce soit, rien", "made": "a fait (make)", "posters": "affiches", "put": "a mis (put)", "tree": "arbre", "felt": "s'est sentie (feel)", "opened": "a ouvert", "can": "boîte de conserve", "suddenly": "soudain", "heard": "a entendu (hear)", "sound": "bruit, son", "top": "dessus (on top of = sur)", "wardrobe": "armoire", "laughed": "a ri", "took": "a pris (take down = décrocher)", "down": "en bas", "back": "de retour" },
  questions: [
    { q: "Où dort Pepper d'habitude ?", o: ["Sur le lit", "Sur le canapé", "Dans la cuisine"], a: 1 },
    { q: "Qu'a fait Lucy l'après-midi ?", o: ["Elle a appelé la police", "Elle a fait des affiches", "Elle est allée chez le vétérinaire"], a: 1 },
    { q: "Où était Pepper ?", o: ["Chez un voisin", "Dans un arbre", "Sur l'armoire"], a: 2 }
  ]
},
{
  id: "brighton", level: "A2", icon: "tree-palm", title: "A weekend in Brighton",
  intro: "Un email à une amie après un week-end au bord de la mer. Passé + expressions utiles.",
  paragraphs: [
    { en: "Hi Sophie,", fr: "Salut Sophie," },
    { en: "How are you? I just got back from a weekend in Brighton with Mark, and I wanted to tell you all about it!", fr: "Comment vas-tu ? Je viens de rentrer d'un week-end à Brighton avec Mark, et je voulais tout te raconter !" },
    { en: "We took the train from London on Friday evening. It only took an hour. Our hotel was small but really cosy, and it was right next to the sea.", fr: "Nous avons pris le train depuis Londres vendredi soir. Ça n'a pris qu'une heure. Notre hôtel était petit mais vraiment chaleureux, et il était juste à côté de la mer." },
    { en: "On Saturday, the weather was amazing. We walked along the beach and visited the pier. Mark tried to win a giant teddy bear, but he lost all his money! In the evening, we had fish and chips on the beach and watched the sunset.", fr: "Samedi, il faisait un temps magnifique. Nous nous sommes promenés le long de la plage et avons visité la jetée. Mark a essayé de gagner un ours en peluche géant, mais il a perdu tout son argent ! Le soir, nous avons mangé un fish and chips sur la plage et regardé le coucher de soleil." },
    { en: "Unfortunately, on Sunday it rained all day, so we spent the morning in little shops and cafés. I bought a vintage jacket. I love it!", fr: "Malheureusement, dimanche il a plu toute la journée, alors nous avons passé la matinée dans de petites boutiques et des cafés. J'ai acheté une veste vintage. Je l'adore !" },
    { en: "You should really go one day. Let's have lunch next week and I'll show you my photos.", fr: "Tu devrais vraiment y aller un jour. Déjeunons ensemble la semaine prochaine et je te montrerai mes photos." },
    { en: "Lots of love,\nJess", fr: "Grosses bises,\nJess" }
  ],
  glossary: { "just": "juste (I just got back = je viens de rentrer)", "got": "suis (get back = rentrer)", "tell": "raconter", "took": "avons pris / a pris (take)", "only": "seulement", "cosy": "douillet, chaleureux", "next": "à côté (next to) / prochain", "sea": "mer", "weather": "temps (météo)", "amazing": "incroyable, génial", "along": "le long de", "beach": "plage", "pier": "jetée", "tried": "a essayé", "win": "gagner", "teddy": "nounours", "bear": "ours", "lost": "a perdu (lose)", "money": "argent", "sunset": "coucher de soleil", "unfortunately": "malheureusement", "rained": "a plu", "spent": "avons passé (spend)", "bought": "ai acheté (buy)", "jacket": "veste", "should": "devrais", "show": "montrer", "lots": "beaucoup" },
  questions: [
    { q: "Comment sont-ils allés à Brighton ?", o: ["En voiture", "En train", "En bus"], a: 1 },
    { q: "Qu'est-il arrivé à Mark sur la jetée ?", o: ["Il a gagné un ours", "Il a perdu tout son argent", "Il est tombé"], a: 1 },
    { q: "Quel temps faisait-il dimanche ?", o: ["Il faisait beau", "Il a plu", "Il a neigé"], a: 1 }
  ]
},
{
  id: "sleep", level: "B1", icon: "bed", title: "Why do we need sleep?",
  intro: "Un court article de vulgarisation. Plus long, plus de vocabulaire : prends ton temps, clique sur les mots.",
  paragraphs: [
    { en: "We spend about a third of our lives asleep. That's around twenty-five years for the average person! But why do we need so much sleep?", fr: "Nous passons environ un tiers de notre vie à dormir. Cela représente environ vingt-cinq ans pour une personne moyenne ! Mais pourquoi avons-nous besoin d'autant de sommeil ?" },
    { en: "Scientists still don't fully understand sleep, but they agree on a few things. First, sleep helps our brain to store memories. While we sleep, the brain sorts the information from the day and decides what to keep.", fr: "Les scientifiques ne comprennent toujours pas complètement le sommeil, mais ils s'accordent sur quelques points. D'abord, le sommeil aide notre cerveau à stocker les souvenirs. Pendant que nous dormons, le cerveau trie les informations de la journée et décide de ce qu'il garde." },
    { en: "This is great news for language learners: if you study new words in the evening and then get a good night's sleep, you are more likely to remember them the next day.", fr: "C'est une excellente nouvelle pour ceux qui apprennent une langue : si tu étudies de nouveaux mots le soir et que tu dors bien ensuite, tu as plus de chances de t'en souvenir le lendemain." },
    { en: "Second, sleep cleans the brain. During the day, waste builds up between brain cells. At night, this waste is washed away.", fr: "Ensuite, le sommeil nettoie le cerveau. Pendant la journée, des déchets s'accumulent entre les cellules du cerveau. La nuit, ces déchets sont évacués." },
    { en: "Finally, a lack of sleep affects our mood. After a bad night, people often feel more stressed and less patient. Most adults need between seven and nine hours a night, so maybe it's time to switch off your phone and go to bed!", fr: "Enfin, le manque de sommeil affecte notre humeur. Après une mauvaise nuit, les gens se sentent souvent plus stressés et moins patients. La plupart des adultes ont besoin de sept à neuf heures par nuit, alors il est peut-être temps d'éteindre ton téléphone et d'aller te coucher !" }
  ],
  glossary: { "spend": "passons (temps)", "third": "tiers", "lives": "vies", "asleep": "endormi", "around": "environ", "average": "moyen", "scientists": "scientifiques", "still": "toujours, encore", "fully": "complètement", "agree": "sont d'accord", "few": "quelques", "brain": "cerveau", "store": "stocker", "memories": "souvenirs", "while": "pendant que", "sorts": "trie", "keep": "garder", "learners": "apprenants", "likely": "probable (more likely = plus de chances)", "remember": "se souvenir", "cleans": "nettoie", "during": "pendant", "waste": "déchets", "builds": "s'accumule (build up)", "cells": "cellules", "washed": "lavé, évacué", "finally": "enfin", "lack": "manque", "affects": "affecte", "mood": "humeur", "less": "moins", "patient": "patient", "most": "la plupart", "adults": "adultes", "switch": "éteindre (switch off)", "off": "(switch off = éteindre)", "between": "entre", "first": "d'abord", "second": "ensuite, deuxièmement" },
  questions: [
    { q: "Combien de temps passons-nous à dormir dans une vie ?", o: ["Un quart", "Un tiers", "La moitié"], a: 1 },
    { q: "Pourquoi le sommeil aide-t-il à apprendre une langue ?", o: ["Il donne de l'énergie", "Le cerveau stocke les souvenirs", "On rêve en anglais"], a: 1 },
    { q: "De combien d'heures la plupart des adultes ont-ils besoin ?", o: ["5 à 6", "7 à 9", "10 à 12"], a: 1 }
  ]
}
];
