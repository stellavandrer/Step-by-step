/* Transformations de phrases (« key word transformation », épreuve Use of English des examens Cambridge) :
   6 par unité B2 → C2, alignées sur la grammaire de l'unité.
   Format : [phrase de départ, MOT IMPOSÉ, phrase à compléter avec ___, réponses acceptées séparées par |].
   B2 et C1 : 2 à 5 mots ; C2 : 3 à 8 mots (mot imposé compris). Les formes contractées sont acceptées
   automatiquement ; les variantes réellement différentes sont listées. */
(function () {
  const add = {
    "b2-1": [
      ["I regret not going to university.", "WISH", "I ___ to university.", "wish I had gone|wish I'd gone"],
      ["It's a pity I can't speak Italian.", "ONLY", "If ___ speak Italian!", "only I could"],
      ["I didn't know about the meeting, so I didn't go.", "WOULD", "If I had known about the meeting, ___ gone.", "I would have"],
      ["We missed the train because we left late.", "IF", "We wouldn't have missed the train ___ earlier.", "if we had left|if we'd left"],
      ["She's tired now because she went to bed so late.", "NOT", "If she ___ to bed so late, she wouldn't be tired now.", "had not gone|hadn't gone"],
      ["I'm sorry I shouted at you.", "SHOULD", "I ___ at you.", "should not have shouted|shouldn't have shouted"]
    ],
    "b2-2": [
      ["I'm sure she forgot about the appointment.", "MUST", "She ___ about the appointment.", "must have forgotten"],
      ["It was a mistake for us to ignore his advice.", "SHOULD", "We ___ his advice.", "should not have ignored|shouldn't have ignored"],
      ["The report will be finished before Friday.", "HAVE", "We ___ the report by Friday.", "will have finished|'ll have finished"],
      ["At this time tomorrow, I'll be on the plane to Rome.", "FLYING", "This time tomorrow, I ___ to Rome.", "will be flying|'ll be flying"],
      ["It's impossible that he saw us: it was dark.", "CAN'T", "He ___ us: it was dark.", "can't have seen|cannot have seen"],
      ["I intended to call you, but I forgot.", "GOING", "I ___ you, but I forgot.", "was going to call"]
    ],
    "b2-3": [
      ["People say that the castle is haunted.", "SAID", "The castle ___ haunted.", "is said to be"],
      ["Everyone believes that the painting was stolen.", "BELIEVED", "The painting ___ stolen.", "is believed to have been"],
      ["This year's sales are much higher than last year's.", "NEARLY", "Last year's sales were ___ this year's.", "not nearly as high as"],
      ["Prices have never been this high.", "EVER", "Prices are higher ___ been.", "than they have ever|than they've ever"],
      ["Nobody has told me about the changes.", "BEEN", "I ___ about the changes.", "have not been told|haven't been told"],
      ["They are going to build a new hospital.", "BUILT", "A new hospital ___.", "is going to be built"]
    ],
    "b2-4": [
      ["I'm sure I locked the door: I remember it.", "LOCKING", "I ___ the door.", "remember locking"],
      ["Don't forget to send the invoice.", "REMEMBER", "___ the invoice.", "Remember to send"],
      ["He doesn't smoke any more.", "STOPPED", "He has ___.", "stopped smoking"],
      ["Why don't you restart the computer?", "TRY", "You could ___ the computer.", "try restarting"],
      ["The designer's work is famous worldwide. She grew up in a small village.", "WHOSE", "The designer, ___ famous worldwide, grew up in a small village.", "whose work is"],
      ["It's not worth repairing this old printer.", "POINT", "There's ___ this old printer.", "no point in repairing|no point repairing"]
    ],
    "b2-5": [
      ["Although it was raining, we went for a walk.", "DESPITE", "We went for a walk ___ rain.", "despite the"],
      ["She studied hard, but she failed the exam.", "SPITE", "She failed the exam ___ hard.", "in spite of studying|in spite of having studied"],
      ["Neither of my parents speaks English.", "NOR", "___ my father speaks English.", "Neither my mother nor"],
      ["Both restaurants were full.", "EITHER", "We couldn't get a table ___ restaurant.", "in either"],
      ["Every student received a certificate.", "EACH", "___ students received a certificate.", "Each of the"],
      ["Tom loves cities, but his sister prefers the countryside.", "WHEREAS", "Tom loves cities, ___ the countryside.", "whereas his sister prefers"]
    ],
    "b2-6": [
      ["“I didn't break the window,” said Sam.", "DENIED", "Sam ___ the window.", "denied breaking|denied having broken"],
      ["“You should see a doctor,” she told me.", "ADVISED", "She ___ a doctor.", "advised me to see"],
      ["“Let's take a taxi,” said Anna.", "SUGGESTED", "Anna ___ a taxi.", "suggested taking|suggested that we take|suggested we take|suggested that we should take|suggested we should take"],
      ["“It was me who lost the keys,” said Tom.", "ADMITTED", "Tom ___ the keys.", "admitted losing|admitted having lost|admitted that he had lost|admitted he had lost"],
      ["“Don't touch the oven!” my mother said to me.", "WARNED", "My mother ___ the oven.", "warned me not to touch"],
      ["“I'll definitely help you,” he said to me.", "PROMISED", "He ___ me.", "promised to help|promised he would help|promised that he would help"]
    ],
    "c1-1": [
      ["I have never seen such a beautiful view.", "HAVE", "Never ___ such a beautiful view.", "have I seen"],
      ["As soon as we arrived, it started to rain.", "SOONER", "No ___ than it started to rain.", "sooner had we arrived"],
      ["She not only sings but also writes her own songs.", "ONLY", "Not ___, but she also writes her own songs.", "only does she sing"],
      ["I need a long holiday.", "WHAT", "___ a long holiday.", "What I need is"],
      ["The noise woke me up, not the light.", "IT", "___ that woke me up, not the light.", "It was the noise"],
      ["I didn't realise how late it was until I looked at my watch.", "UNTIL", "Not ___ at my watch did I realise how late it was.", "until I looked"]
    ],
    "c1-2": [
      ["They insisted that he should attend the meeting.", "INSISTED", "They ___ the meeting.", "insisted that he attend|insisted that he should attend|insisted on his attending|insisted on him attending"],
      ["It is important for all staff to wear a badge.", "ESSENTIAL", "It is ___ a badge.", "essential that all staff wear|essential that all staff should wear|essential for all staff to wear"],
      ["If you need any help, please contact reception.", "SHOULD", "___ any help, please contact reception.", "Should you need|Should you require"],
      ["Smoking is not allowed anywhere in the building.", "PERMITTED", "Smoking ___ anywhere in the building.", "is not permitted|isn't permitted"],
      ["The meeting was cancelled because of the strike.", "OWING", "The meeting was cancelled ___ strike.", "owing to the"],
      ["The manager suggested that we postpone the launch.", "PROPOSAL", "The manager ___ the launch.", "made a proposal to postpone"]
    ],
    "c1-3": [
      ["I really love your new haircut!", "DO", "I ___ your new haircut!", "do love"],
      ["I'd like to come, but I can't.", "LOVE", "I'd ___, but I can't.", "love to|love to come"],
      ["“Is the shop open?” “I think it is.”", "SO", "“Is the shop open?” “I ___.”", "think so"],
      ["It's such a difficult question that nobody could answer it.", "SO", "The question was ___ nobody could answer it.", "so difficult that"],
      ["I'm not at all interested in football.", "LEAST", "I'm not ___ in football.", "in the least interested|the least bit interested"],
      ["Whatever happens, call me.", "MATTER", "Call me, ___ happens.", "no matter what"]
    ],
    "c1-4": [
      ["After she had finished the report, she went home.", "HAVING", "___ the report, she went home.", "Having finished"],
      ["Because he didn't know the way, he took a taxi.", "KNOWING", "___ the way, he took a taxi.", "Not knowing"],
      ["It's almost certain that they will win.", "BOUND", "They ___ win.", "are bound to|'re bound to"],
      ["It wasn't necessary for you to bring food, but thank you.", "NEEDN'T", "You ___ food, but thank you.", "needn't have brought|need not have brought"],
      ["It's quite possible that she missed the train.", "WELL", "She ___ the train.", "may well have missed|might well have missed|could well have missed"],
      ["The house was built in 1890 and still has its original windows.", "BUILT", "___ 1890, the house still has its original windows.", "Built in"]
    ],
    "c1-5": [
      ["It seems that the results are reliable.", "APPEAR", "The results ___ reliable.", "appear to be"],
      ["People generally think that the plan will fail.", "GENERALLY", "It ___ the plan will fail.", "is generally thought that|is generally believed that"],
      ["I agree with you up to a point.", "EXTENT", "I agree with you ___.", "to some extent|to a certain extent"],
      ["Perhaps it's the best film of the year.", "ARGUABLY", "It is ___ of the year.", "arguably the best film"],
      ["I don't completely agree with that.", "ENTIRELY", "I'm not ___ that.", "entirely convinced by|entirely sure about|entirely in agreement with"],
      ["There's no doubt that the climate is changing.", "BEYOND", "It is ___ the climate is changing.", "beyond doubt that"]
    ],
    "c2-1": [
      ["It's almost impossible to tell the two copies apart.", "DISTINGUISH", "It's virtually impossible ___ the two copies.", "to distinguish between"],
      ["The two reports are completely different.", "COMMON", "The two reports ___ each other.", "have nothing in common with"],
      ["The instructions weren't clear at all.", "LACKED", "The instructions ___.", "completely lacked clarity|lacked any clarity|totally lacked clarity|lacked clarity completely"],
      ["He came very close to winning the race.", "NARROWLY", "He ___ the race.", "only narrowly lost|narrowly missed winning|very narrowly lost"],
      ["To be honest, I don't remember anything about it.", "SLIGHTEST", "To be honest, I haven't ___ about it.", "the slightest recollection|got the slightest recollection|the slightest memory|got the slightest memory|the slightest idea"],
      ["People rarely understand the difference.", "SELDOM", "The difference ___.", "is seldom understood|is seldom properly understood"]
    ],
    "c2-2": [
      ["Her speech convinced the audience in the end.", "WON", "In the end, her speech ___.", "won the audience over|won over the audience"],
      ["The advert tries to make people afraid.", "PLAYS", "The advert ___ fears.", "plays on people's|plays on our"],
      ["I have no intention of changing my mind.", "INTEND", "I don't ___ my mind.", "intend to change"],
      ["You must not, under any circumstances, open this door.", "CIRCUMSTANCES", "Under ___ this door.", "no circumstances must you open|no circumstances should you open"],
      ["Nobody could have persuaded her to stay.", "WAY", "There was ___ her to stay.", "no way anyone could have persuaded|no way that anyone could have persuaded|no way anybody could have persuaded"],
      ["The minister's words had a strong emotional effect on voters.", "CHORD", "The minister's words ___ voters.", "struck a chord with"]
    ],
    "c2-3": [
      ["If it hadn't been for your help, I would have failed.", "BUT", "___, I would have failed.", "But for your help"],
      ["If the weather had been better, the festival would have been a success.", "HAD", "___ better, the festival would have been a success.", "Had the weather been"],
      ["It's time we made a decision.", "HIGH", "It's ___ a decision.", "high time we made"],
      ["I'd prefer you not to tell anyone.", "RATHER", "I'd ___ anyone.", "rather you didn't tell|rather you did not tell"],
      ["The result was obvious long before the vote.", "FOREGONE", "The result was ___ long before the vote.", "a foregone conclusion"],
      ["The plane was due to land at six, but it was delayed.", "SUPPOSED", "The plane ___ at six, but it was delayed.", "was supposed to land|was supposed to have landed"]
    ],
    "c2-4": [
      ["Everyone suddenly started laughing.", "BURST", "Everyone ___.", "burst out laughing|burst into laughter"],
      ["He gets upset when people tease him.", "JOKE", "He ___.", "can't take a joke|cannot take a joke"],
      ["Nobody laughed at my joke.", "FLAT", "My joke ___.", "fell completely flat|fell rather flat|fell flat"],
      ["The show makes fun of politicians.", "POKES", "The show ___ politicians.", "pokes fun at"],
      ["She found it hard not to laugh.", "STRAIGHT", "She struggled ___.", "to keep a straight face"],
      ["In the end, even the teacher found it funny.", "SIDE", "In the end, even the teacher ___.", "saw the funny side|saw the funny side of it|could see the funny side"]
    ],
    "c2-5": [
      ["Researchers have not yet agreed on this question.", "CONSENSUS", "Researchers have not yet ___ on this question.", "reached a consensus|reached any consensus|come to a consensus"],
      ["These findings support the theory.", "LEND", "These findings ___ the theory.", "lend support to|lend weight to"],
      ["The study questions the idea that bilingual children learn more slowly.", "CALLS", "The study ___ the idea that bilingual children learn more slowly.", "calls into question"],
      ["There is very little evidence for this claim.", "HARDLY", "There is ___ for this claim.", "hardly any evidence"],
      ["The sample was too small for firm conclusions to be drawn.", "ENOUGH", "The sample was not ___ firm conclusions to be drawn.", "large enough for|big enough for"],
      ["It is unclear whether the results can be generalised.", "OPEN", "Whether the results can be generalised ___.", "is open to question|remains open to question|is still an open question|is an open question"]
    ]
  };
  Object.entries(add).forEach(([k, kwt]) => { window.LEXIS[k] = Object.assign(window.LEXIS[k] || {}, { kwt }); });
})();
