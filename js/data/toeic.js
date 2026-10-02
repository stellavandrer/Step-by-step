/* TOEIC Listening & Reading: format, strategies and practice in the official format.
   The practice items are original (written for this site), not official ETS material. */
window.TOEIC = {
  intro: "The TOEIC Listening and Reading test measures everyday professional English. It lasts about two hours and has 200 multiple-choice questions: 100 in Listening (about 45 minutes) and 100 in Reading (75 minutes). Each section is scored from 5 to 495, for a total from 10 to 990. There is no pass or fail: your score shows your level.",
  intro_fr: "Le TOEIC Listening and Reading mesure l'anglais professionnel du quotidien. Il dure environ deux heures et comporte 200 questions à choix multiples : 100 en compréhension orale (environ 45 minutes) et 100 en compréhension écrite (75 minutes). Chaque partie est notée de 5 à 495, pour un total de 10 à 990. On ne réussit ni n'échoue : le score indique ton niveau.",
  /* ETS mapping of section scores to CEFR levels (minimum scores). */
  cefr: { listening: { A1: 60, A2: 110, B1: 275, B2: 400, C1: 490 }, reading: { A1: 60, A2: 115, B1: 275, B2: 385, C1: 455 } },
  parts: [
    { n: 1, section: "Listening", name: "Photographs", count: 6, practice: false,
      what: "You see a photo and hear four sentences. Choose the one that best describes the photo.",
      what_fr: "Tu vois une photo et tu entends quatre phrases. Choisis celle qui décrit le mieux la photo.",
      tips: ["Before the audio starts, look at the photo and name what you see in English: people, actions, objects, places.", "Watch out for similar-sounding words (walk / work, coffee / copy).", "If nobody is in the photo, eliminate any sentence that describes a person doing something.", "The present continuous (is holding, are sitting) and the passive (has been placed) are very common."],
      tips_fr: ["Avant l'audio, regarde la photo et nomme en anglais ce que tu vois : personnes, actions, objets, lieux.", "Attention aux mots qui se ressemblent (walk / work, coffee / copy).", "S'il n'y a personne sur la photo, élimine toute phrase qui décrit une personne en train de faire quelque chose.", "Le présent continu (is holding, are sitting) et le passif (has been placed) sont très fréquents."],
      note: "This part needs photos, so it isn't included in the practice here. Train with your own photos: describe them out loud in 4 sentences.",
      note_fr: "Cette partie demande des photos, elle n'est donc pas incluse dans l'entraînement ici. Entraîne-toi avec tes propres photos : décris-les à voix haute en 4 phrases." },
    { n: 2, section: "Listening", name: "Question-Response", count: 25, practice: true,
      what: "You hear a question or a statement, then three responses. Choose the best response. Nothing is written: you only listen.",
      what_fr: "Tu entends une question ou une affirmation, puis trois réponses. Choisis la meilleure réponse. Rien n'est écrit : tu écoutes seulement.",
      tips: ["Concentrate on the first word: Who, Where, When, Why, How long… It tells you what kind of answer you need.", "A response that repeats a word from the question is often a trap.", "The right answer can be indirect: “When is the meeting?” — “Check the calendar.”", "Don't stay stuck: if you missed it, guess and move on."],
      tips_fr: ["Concentre-toi sur le premier mot : Who, Where, When, Why, How long… Il t'indique le type de réponse attendu.", "Une réponse qui reprend un mot de la question est souvent un piège.", "La bonne réponse peut être indirecte : « When is the meeting? » — « Check the calendar. »", "Ne reste pas bloquée : si tu as raté, devine et passe à la suite."] },
    { n: 3, section: "Listening", name: "Conversations", count: 39, practice: true,
      what: "You hear short conversations between two or three people, then answer three questions about each one. The questions are written.",
      what_fr: "Tu entends de courtes conversations entre deux ou trois personnes, puis tu réponds à trois questions sur chacune. Les questions sont écrites.",
      tips: ["Read the three questions before the conversation starts: you'll know what to listen for.", "The answers usually come in the same order as the questions.", "Correct answers often use synonyms, not the exact words you hear.", "Questions often ask: who are the speakers, where are they, what will they do next?"],
      tips_fr: ["Lis les trois questions avant le début de la conversation : tu sauras quoi écouter.", "Les réponses arrivent en général dans l'ordre des questions.", "Les bonnes réponses utilisent souvent des synonymes, pas les mots exacts entendus.", "Les questions demandent souvent : qui sont les interlocuteurs, où sont-ils, que vont-ils faire ensuite ?"] },
    { n: 4, section: "Listening", name: "Talks", count: 30, practice: true,
      what: "You hear short talks by one speaker (announcements, voicemails, adverts, tours), then answer three questions about each one.",
      what_fr: "Tu entends de courts exposés d'une seule personne (annonces, messages vocaux, publicités, visites), puis tu réponds à trois questions sur chacun.",
      tips: ["Identify the type of talk in the first sentence: voicemail, announcement, advert, radio report…", "Listen for numbers, times, dates and changes (“the meeting has been moved to…”).", "Questions like “What are listeners asked to do?” are answered near the end.", "Read the questions in advance, as in Part 3."],
      tips_fr: ["Identifie le type d'exposé dès la première phrase : message vocal, annonce, publicité, bulletin radio…", "Repère les nombres, heures, dates et changements (« the meeting has been moved to… »).", "Les questions comme « What are listeners asked to do? » trouvent leur réponse vers la fin.", "Lis les questions à l'avance, comme dans la partie 3."] },
    { n: 5, section: "Reading", name: "Incomplete Sentences", count: 30, practice: true,
      what: "Each sentence has a missing word or phrase. Choose the best option from four.",
      what_fr: "Chaque phrase contient un mot ou une expression manquants. Choisis la meilleure des quatre options.",
      tips: ["First, look at the options: if they are forms of the same word (decide, decision, decisive, decisively), it's a grammar question: look at the words just before and after.", "If the options are different words, it's a vocabulary question: read the whole sentence.", "Don't spend more than 30 seconds per question: keep time for Part 7.", "Collocations and prepositions come up a lot: depend on, responsible for, make a decision."],
      tips_fr: ["Regarde d'abord les options : si ce sont des formes du même mot (decide, decision, decisive, decisively), c'est une question de grammaire : regarde les mots juste avant et après.", "Si les options sont des mots différents, c'est une question de vocabulaire : lis toute la phrase.", "Ne passe pas plus de 30 secondes par question : garde du temps pour la partie 7.", "Les associations de mots et les prépositions reviennent souvent : depend on, responsible for, make a decision."] },
    { n: 6, section: "Reading", name: "Text Completion", count: 16, practice: true,
      what: "Short texts (emails, notices, articles) with four gaps each. One gap is often a whole sentence to insert.",
      what_fr: "De courts textes (e-mails, avis, articles) avec quatre blancs chacun. Un des blancs est souvent une phrase entière à insérer.",
      tips: ["Read the whole text quickly first: some answers depend on the sentences before or after.", "For the sentence insertion, check the link with the next sentence (this, these, however, as a result…).", "Check verb tenses against the dates and context of the text."],
      tips_fr: ["Lis d'abord tout le texte rapidement : certaines réponses dépendent des phrases avant ou après.", "Pour la phrase à insérer, vérifie le lien avec la phrase suivante (this, these, however, as a result…).", "Vérifie les temps des verbes par rapport aux dates et au contexte du texte."] },
    { n: 7, section: "Reading", name: "Reading Comprehension", count: 54, practice: true,
      what: "Single, double and triple passages (emails, adverts, schedules, chats, articles) with questions about details, the main idea and implications.",
      what_fr: "Documents simples, doubles et triples (e-mails, annonces, plannings, conversations écrites, articles) avec des questions sur les détails, l'idée principale et les sous-entendus.",
      tips: ["Read the question first, then look for the answer in the text: you don't have to understand every word.", "“What is suggested / implied” questions require you to deduce, not to find the exact words.", "For double passages, one question usually needs information from both texts.", "Manage your time: about one minute per question."],
      tips_fr: ["Lis d'abord la question, puis cherche la réponse dans le texte : pas besoin de comprendre chaque mot.", "Les questions « What is suggested / implied » demandent de déduire, pas de retrouver les mots exacts.", "Pour les doubles documents, une question demande en général des informations des deux textes.", "Gère ton temps : environ une minute par question."] }
  ],

  /* PART 2: question-response (3 options, audio only) */
  part2: [
    { q: "When does the meeting start?", o: ["In the conference room.", "At two thirty.", "Yes, I started it."], a: 1, ex: "“When” asks for a time." },
    { q: "Where can I find the printer paper?", o: ["In the cupboard next to the kitchen.", "Yes, it's very expensive.", "I printed it this morning."], a: 0, ex: "“Where” asks for a place. Option C repeats “print”: a classic trap." },
    { q: "Who's responsible for the new website?", o: ["It's very responsive.", "Last month.", "Maria's team is handling it."], a: 2, ex: "“Who” asks for a person or a team." },
    { q: "Would you like some coffee?", o: ["No, thanks. I've just had one.", "It's in the copy room.", "I like the new design."], a: 0, ex: "An offer: accept or refuse politely." },
    { q: "Why was the flight delayed?", o: ["At gate 12.", "Because of the snow.", "About two hours."], a: 1, ex: "“Why” asks for a reason." },
    { q: "How long will the renovation take?", o: ["About three weeks.", "It's very long.", "In the main building."], a: 0, ex: "“How long” asks for a duration." },
    { q: "Haven't you sent the invoice yet?", o: ["Yes, it was sent yesterday.", "The voice was very clear.", "I'll invite them."], a: 0, ex: "Negative question: answer about the fact. B and C use similar sounds (invoice / voice / invite)." },
    { q: "Let's take a short break.", o: ["It broke last week.", "Good idea, I need a coffee.", "I'll take it."], a: 1, ex: "A suggestion: agree or disagree. A uses a similar sound (break / broke)." },
    { q: "Which hotel did you book for the conference?", o: ["The one near the station.", "I read the book.", "Next Tuesday."], a: 0, ex: "“Which” asks you to identify one thing. B uses “book” with another meaning." },
    { q: "Could you help me move these boxes?", o: ["The movie was great.", "Sure, where do they go?", "They're cardboard boxes."], a: 1, ex: "A request: accept or refuse." },
    { q: "How did the presentation go?", o: ["By train.", "Very well, the client loved it.", "At ten o'clock."], a: 1, ex: "“How did… go?” asks about the result." },
    { q: "The printer is out of order again.", o: ["I'll call the technician.", "In alphabetical order.", "Print it in colour."], a: 0, ex: "A statement about a problem: the best answer proposes a solution." },
    { q: "Is the report due today or tomorrow?", o: ["Yes, it is.", "Tomorrow morning.", "I reported it."], a: 1, ex: "An “or” question: don't answer yes / no, choose one option." },
    { q: "Who should I send the application to?", o: ["Send it to Mr Patel in HR.", "By email, please.", "It's a good application."], a: 0, ex: "“Who” → a person. B answers “how”, not “who”." },
    { q: "Didn't you go to the trade fair last week?", o: ["The fare is ten pounds.", "No, I was sick.", "It's next week."], a: 1, ex: "A uses a homophone (fair / fare)." },
    { q: "What time does the store open on Sundays?", o: ["It's closed on Sundays.", "Yes, it's open.", "Near the main entrance."], a: 0, ex: "An indirect but logical answer: it doesn't open at all." },
    { q: "Why don't we order lunch for the team?", o: ["Because they ordered it.", "That's a great idea.", "In alphabetical order."], a: 1, ex: "“Why don't we…?” is a suggestion, not a real question about a reason." },
    { q: "How often do you visit the head office?", o: ["About once a month.", "It's on the fifth floor.", "For two hours."], a: 0, ex: "“How often” asks for a frequency." },
    { q: "Where's the nearest bank?", o: ["Yes, it's near.", "There's one on Oak Street.", "I banked on it."], a: 1, ex: "“Where” → a place." },
    { q: "Has the client signed the contract?", o: ["Not yet, she's reading it.", "The sign is on the door.", "It's a two-year contact."], a: 0, ex: "B and C use similar words (sign / signed, contact / contract)." },
    { q: "Do you prefer the blue logo or the green one?", o: ["Yes, I do.", "The green one, definitely.", "It's a new logo."], a: 1, ex: "An “or” question: choose." },
    { q: "When will the new manager start?", o: ["She starts on Monday.", "He's the manager.", "At the start of the road."], a: 0, ex: "“When” → a time." },
    { q: "I can't find my badge anywhere.", o: ["It's a bad idea.", "Did you check your coat pocket?", "I bought a new bag."], a: 1, ex: "A problem → a helpful suggestion. A and C play on similar sounds (badge / bad / bag)." },
    { q: "Should we cancel the outdoor event?", o: ["Let's check the weather forecast first.", "The event was great.", "Yes, it's outdoors."], a: 0, ex: "An indirect answer: we'll decide after checking." },
    { q: "How much does the training course cost?", o: ["It's free for employees.", "Three days.", "The train is late."], a: 0, ex: "“How much” → a price." },
    { q: "Who's going to lead the workshop?", o: ["Probably Dr Ahmed.", "It leads to the station.", "In the workshop."], a: 0, ex: "“Who” → a person. B uses another meaning of “lead”." },
    { q: "Isn't the deadline next Friday?", o: ["Yes, so we still have a week.", "The line is dead.", "Friday is my day off."], a: 0, ex: "Negative question → confirm or correct the information." },
    { q: "Can I park here?", o: ["Only for thirty minutes.", "The park is beautiful.", "I'll pack it."], a: 0, ex: "A permission question; B uses “park” as a noun." },
    { q: "Why is the office so cold today?", o: ["The heating broke down this morning.", "It's an old office.", "Yes, it's today."], a: 0, ex: "“Why” → a reason." },
    { q: "Would you mind closing the window?", o: ["Not at all.", "Yes, it's a window.", "I mind my business."], a: 0, ex: "“Would you mind…?” → “Not at all” means “OK, I'll do it”." }
  ],

  /* PART 3: conversations (3 questions each) */
  part3: [
    { lines: [
        ["W", "Hi, I'm calling about the order I placed last week. It was supposed to arrive on Monday, but I still haven't received it."],
        ["M", "I'm sorry to hear that. Could you give me your order number, please?"],
        ["W", "Yes, it's 45 72 19."],
        ["M", "Thank you. I can see there was a problem at our warehouse. Your package will be shipped today by express delivery, at no extra cost."],
        ["W", "Great. Will it arrive before the weekend?"],
        ["M", "Yes, it should arrive on Thursday. I'll send you the tracking number by email."]
      ],
      qs: [
        { q: "Why is the woman calling?", o: ["To place an order", "To complain about a late delivery", "To cancel an order", "To change her address"], a: 1 },
        { q: "What caused the problem?", o: ["A wrong address", "Bad weather", "A problem at the warehouse", "A payment error"], a: 2 },
        { q: "What will the man send the woman?", o: ["A refund", "A discount code", "A tracking number", "A new catalogue"], a: 2 }
      ] },
    { lines: [
        ["M", "Sophie, have you finished the slides for tomorrow's presentation?"],
        ["W", "Almost. I just need to add the sales figures for the last quarter. Did the finance team send them?"],
        ["M", "Not yet. I'll call them right after lunch."],
        ["W", "Thanks. And who's presenting the marketing part? Is it still Daniel?"],
        ["M", "No, Daniel's on a business trip until Friday, so Anna's going to do it."],
        ["W", "OK, I'll send her the slides tonight so she can prepare."]
      ],
      qs: [
        { q: "What are the speakers preparing?", o: ["A sales report", "A presentation", "A business trip", "A job interview"], a: 1 },
        { q: "What information is missing?", o: ["The client's name", "Last quarter's sales figures", "The meeting room", "The marketing budget"], a: 1 },
        { q: "Why can't Daniel present?", o: ["He is sick", "He is on a business trip", "He is on holiday", "He changed jobs"], a: 1 }
      ] },
    { lines: [
        ["W", "Good morning, I have a reservation for two nights under the name Laura Chen."],
        ["M", "Welcome, Ms Chen. Yes, a double room with a view of the river. Could I see your ID, please?"],
        ["W", "Here you are. Is breakfast included?"],
        ["M", "Yes, it's served from seven to ten in the restaurant on the ground floor."],
        ["W", "Perfect. And is there somewhere I can print some documents? I have a meeting this afternoon."],
        ["M", "Of course, there's a business centre on the first floor. It's open twenty-four hours."]
      ],
      qs: [
        { q: "Where does the conversation take place?", o: ["At an airport", "At a hotel", "At a restaurant", "At a print shop"], a: 1 },
        { q: "What does the man ask the woman for?", o: ["Her credit card", "Her ID", "Her room number", "Her meeting time"], a: 1 },
        { q: "What will the woman probably do this afternoon?", o: ["Visit the river", "Attend a meeting", "Have breakfast", "Check out"], a: 1 }
      ] },
    { lines: [
        ["M", "We've received forty applications for the graphic designer position. That's more than we expected."],
        ["W", "That's good news. How many candidates are we going to interview?"],
        ["M", "I thought six. Could you help me choose them? I'd like a second opinion."],
        ["W", "Sure. Let's look at the portfolios together on Wednesday morning."],
        ["M", "Wednesday's fine. I'll book the small meeting room."]
      ],
      qs: [
        { q: "What are the speakers discussing?", o: ["A design contest", "Hiring a new employee", "A new office", "A marketing campaign"], a: 1 },
        { q: "What does the man ask the woman to do?", o: ["Help him select candidates", "Write a job advert", "Call the applicants", "Design a portfolio"], a: 0 },
        { q: "What will the man do next?", o: ["Interview candidates", "Book a meeting room", "Send an email to applicants", "Print the portfolios"], a: 1 }
      ] },
    { lines: [
        ["W", "Excuse me, I think there's a mistake on my bill. I was charged for two desserts, but we only had one."],
        ["M", "Let me check… You're right, I'm very sorry. I'll correct it straight away."],
        ["W", "Thank you. Can I pay by card?"],
        ["M", "Of course. And please accept a free coffee for the inconvenience."]
      ],
      qs: [
        { q: "What is the problem?", o: ["The food was cold", "There is an error on the bill", "The card machine is broken", "The dessert was not available"], a: 1 },
        { q: "Who most likely is the man?", o: ["A chef", "A waiter", "A bank employee", "A customer"], a: 1 },
        { q: "What does the man offer the woman?", o: ["A discount", "A free dessert", "A free coffee", "A gift card"], a: 2 }
      ] },
    { lines: [
        ["M", "Hi Karen, it's Tom from IT. Your new laptop has arrived. When would be a good time to set it up?"],
        ["W", "Oh great! I'm in meetings all morning, but I'm free after three."],
        ["M", "Three works for me. It'll take about an hour, because I need to transfer your files."],
        ["W", "No problem. Should I back up anything before you come?"],
        ["M", "Yes, please save any documents that are on your desktop to the shared drive."]
      ],
      qs: [
        { q: "Why is the man calling?", o: ["To report a problem", "To set up a new laptop", "To invite the woman to a meeting", "To ask for a password"], a: 1 },
        { q: "When will they meet?", o: ["In the morning", "At one o'clock", "After three o'clock", "Tomorrow"], a: 2 },
        { q: "What does the man ask the woman to do?", o: ["Buy a new laptop", "Save her files to the shared drive", "Cancel her meetings", "Call the IT department"], a: 1 }
      ] },
    { lines: [
        ["W", "The client wants to move the launch of the new product from June to April."],
        ["M", "April? That gives us only six weeks. We haven't even finished the packaging design."],
        ["W", "I know. Could we hire a freelancer to help with the design?"],
        ["M", "That's possible, but it would increase the budget. I'll ask the director if she agrees."]
      ],
      qs: [
        { q: "What has the client requested?", o: ["A lower price", "An earlier launch date", "A new product", "A different designer"], a: 1 },
        { q: "What does the woman suggest?", o: ["Hiring a freelancer", "Cancelling the launch", "Changing the packaging", "Reducing the budget"], a: 0 },
        { q: "What will the man do?", o: ["Hire a freelancer immediately", "Ask the director for approval", "Call the client", "Finish the design himself"], a: 1 }
      ] },
    { lines: [
        ["M1", "Welcome to the team, Lisa. I'm Paul, and this is Ken. We'll be working together on the Miller account."],
        ["W", "Nice to meet you both. I've read the brief. Is the deadline still the end of the month?"],
        ["M2", "Actually, it's been extended by two weeks. The client needed more time to approve the budget."],
        ["W", "That's good. It means we can do some user testing before we finalise the design."],
        ["M1", "Exactly. Ken, could you show Lisa the files from the first meeting?"]
      ],
      qs: [
        { q: "Who most likely is Lisa?", o: ["A client", "A new team member", "The director", "A user tester"], a: 1 },
        { q: "Why was the deadline changed?", o: ["The team was too busy", "The client needed time to approve the budget", "Lisa joined the team", "The design was finished early"], a: 1 },
        { q: "What will Ken probably do next?", o: ["Show Lisa some files", "Call the client", "Organise user testing", "Approve the budget"], a: 0 }
      ] }
  ],

  /* PART 4: talks (3 questions each) */
  part4: [
    { type: "Voicemail", text: "Hello, this is Mark Evans from Greenway Printing, calling for Ms Laurent. I'm calling about the brochures you ordered last week. Unfortunately, the paper you chose is out of stock until next month. We can offer you a similar paper of the same quality at no extra cost, or we can wait for the original paper to arrive. Could you call me back before Friday to let me know your decision? My number is 020 7946 0831. Thank you.",
      qs: [
        { q: "Why is the speaker calling?", o: ["To confirm a delivery", "To report a problem with an order", "To offer a new service", "To ask for a payment"], a: 1 },
        { q: "What does the speaker offer?", o: ["A discount", "A faster delivery", "A similar paper at no extra cost", "A refund"], a: 2 },
        { q: "What is the listener asked to do?", o: ["Visit the shop", "Send an email", "Call back before Friday", "Choose a new design"], a: 2 }
      ] },
    { type: "Announcement", text: "Attention, passengers on flight BA 274 to Edinburgh. Due to bad weather in Edinburgh, this flight has been delayed by approximately ninety minutes. The new departure time is 4:50 p.m. Passengers are invited to collect a meal voucher at the information desk near gate 15. We apologise for any inconvenience, and we will provide further updates as soon as possible.",
      qs: [
        { q: "Where is the announcement being made?", o: ["At a train station", "At an airport", "On a plane", "At a bus stop"], a: 1 },
        { q: "What is the reason for the delay?", o: ["A technical problem", "Bad weather", "A strike", "A missing crew member"], a: 1 },
        { q: "What can passengers get at the information desk?", o: ["A new ticket", "A meal voucher", "A hotel room", "A refund"], a: 1 }
      ] },
    { type: "Advertisement", text: "Is your office too noisy? Do your employees find it hard to concentrate? At QuietSpace, we design and install acoustic panels that reduce noise by up to sixty percent. Our panels are available in more than forty colours, so they'll match any interior. And this month only, we're offering a free consultation for all new customers. Visit our website today to book your appointment.",
      qs: [
        { q: "What does QuietSpace sell?", o: ["Office furniture", "Acoustic panels", "Headphones", "Paint"], a: 1 },
        { q: "What is mentioned about the products?", o: ["They are made locally", "They come in many colours", "They are very cheap", "They are easy to install yourself"], a: 1 },
        { q: "What is offered this month?", o: ["A free consultation", "A twenty percent discount", "Free delivery", "A free panel"], a: 0 }
      ] },
    { type: "Meeting excerpt", text: "Good morning, everyone. Before we start, I have two quick announcements. First, the staff survey is now online. It only takes ten minutes, and your answers are completely anonymous, so please complete it by the end of the week. Second, as you know, the second floor is being renovated. From Monday, the design team will be working on the fourth floor until the work is finished. OK, now let's look at last month's sales figures.",
      qs: [
        { q: "What are listeners asked to do this week?", o: ["Move to the fourth floor", "Complete a survey", "Present sales figures", "Renovate the office"], a: 1 },
        { q: "What is said about the survey?", o: ["It is anonymous", "It takes an hour", "It is on paper", "It is optional for managers"], a: 0 },
        { q: "Why will the design team change floors?", o: ["The team is growing", "The second floor is being renovated", "There is a new manager", "The fourth floor is quieter"], a: 1 }
      ] },
    { type: "Tour", text: "Welcome to the Riverside Design Museum. My name is Claire and I'll be your guide this morning. Our tour will last about an hour. We'll start on the ground floor with our collection of twentieth-century furniture, then go up to the first floor for the temporary exhibition on Japanese posters. Please note that photography is allowed, but without flash. At the end of the tour, you're welcome to visit our gift shop, where all visitors get ten percent off today.",
      qs: [
        { q: "How long will the tour last?", o: ["Thirty minutes", "About an hour", "Two hours", "All morning"], a: 1 },
        { q: "What is on the first floor?", o: ["A furniture collection", "A gift shop", "An exhibition on Japanese posters", "A café"], a: 2 },
        { q: "What does the speaker say about photography?", o: ["It is forbidden", "It is allowed without flash", "It costs extra", "It is only allowed in the shop"], a: 1 }
      ] },
    { type: "Radio report", text: "And now the business news. Lumen Electronics announced this morning that it will open a new factory in Manchester next year, creating around four hundred jobs. The company, which makes components for electric cars, said that demand had grown much faster than expected. The new site will also include a training centre for young engineers. The announcement was welcomed by local officials, who described it as excellent news for the region.",
      qs: [
        { q: "What did Lumen Electronics announce?", o: ["A merger", "A new factory", "Job cuts", "A new electric car"], a: 1 },
        { q: "Why is the company expanding?", o: ["Demand has grown faster than expected", "Its old factory closed", "The government asked it to", "It has a new director"], a: 0 },
        { q: "What else will the new site include?", o: ["A museum", "A training centre", "A shop", "A research laboratory"], a: 1 }
      ] }
  ],

  /* PART 5: incomplete sentences */
  part5: [
    { q: "The new software will be installed ______ all computers next week.", o: ["at", "on", "in", "to"], a: 1, ex: "Install something on a computer." },
    { q: "Ms Garcia is responsible ______ organising the annual conference.", o: ["of", "to", "for", "with"], a: 2, ex: "Responsible for + -ing." },
    { q: "Please submit your expense report ______ Friday at the latest.", o: ["until", "by", "since", "during"], a: 1, ex: "By = no later than (deadline). Until = continuing up to." },
    { q: "The marketing team has ______ a new strategy for the summer campaign.", o: ["develop", "developing", "developed", "development"], a: 2, ex: "Has + past participle (present perfect)." },
    { q: "Customers were very ______ with the quality of the new product.", o: ["satisfying", "satisfied", "satisfaction", "satisfy"], a: 1, ex: "Feeling → -ed adjective (satisfied with)." },
    { q: "The meeting was postponed ______ the director was ill.", o: ["because", "because of", "despite", "although"], a: 0, ex: "Because + clause; because of + noun." },
    { q: "______ the bad weather, the event was a great success.", o: ["Although", "Despite", "However", "Because"], a: 1, ex: "Despite + noun (the bad weather)." },
    { q: "All employees must wear their badges ______ in the building.", o: ["at all times", "all the time ago", "every times", "at the time"], a: 0, ex: "At all times = always." },
    { q: "Mr Lee asked us to ______ the report before the meeting.", o: ["review", "reviews", "reviewing", "reviewed"], a: 0, ex: "Ask someone to + base verb." },
    { q: "This is the ______ successful product we have ever launched.", o: ["more", "most", "much", "very"], a: 1, ex: "Superlative of a long adjective: the most." },
    { q: "The company's profits have increased ______ over the past five years.", o: ["steady", "steadily", "steadiness", "steadier"], a: 1, ex: "An adverb modifies the verb (increased steadily)." },
    { q: "If the shipment ______ late, we will contact the supplier.", o: ["arrives", "will arrive", "arrived", "arriving"], a: 0, ex: "First conditional: if + present, will." },
    { q: "Neither the manager ______ her assistant was available.", o: ["or", "and", "nor", "but"], a: 2, ex: "Neither… nor." },
    { q: "We are looking forward to ______ with you on this project.", o: ["work", "working", "worked", "works"], a: 1, ex: "Look forward to + -ing." },
    { q: "The applicants ______ CVs were selected will be contacted by email.", o: ["who", "which", "whose", "whom"], a: 2, ex: "Whose = possession (their CVs)." },
    { q: "The report must be ______ to the board by the end of the month.", o: ["submit", "submitted", "submitting", "submission"], a: 1, ex: "Passive: must be + past participle." },
    { q: "Ms Kim has worked here ______ 2018.", o: ["for", "since", "during", "from"], a: 1, ex: "Since + a starting point." },
    { q: "Please make sure the door is locked ______ you leave the office.", o: ["before", "during", "while", "until"], a: 0, ex: "Before + clause = action in time order." },
    { q: "The hotel offers a shuttle service ______ the airport and the city centre.", o: ["among", "between", "through", "across"], a: 1, ex: "Between two places." },
    { q: "Our sales representatives will be happy to ______ any questions you may have.", o: ["answer", "answer to", "respond", "reply"], a: 0, ex: "Answer a question (no preposition). Respond / reply need “to”." },
    { q: "The new office is ______ larger than the old one.", o: ["very", "much", "most", "too"], a: 1, ex: "Much + comparative. Never “very larger”." },
    { q: "Due to high ______, the workshop will be repeated next month.", o: ["demand", "demanding", "demanded", "demands"], a: 0, ex: "Due to + noun: high demand." },
    { q: "The CEO ______ the new strategy at the conference yesterday.", o: ["presents", "has presented", "presented", "will present"], a: 2, ex: "Yesterday → past simple." },
    { q: "Applicants should have ______ three years of experience in sales.", o: ["at least", "at last", "at once", "at most of"], a: 0, ex: "At least = minimum." },
    { q: "The contract will be signed as soon as the lawyers ______ it.", o: ["approve", "will approve", "approved", "approving"], a: 0, ex: "No will after “as soon as”." },
    { q: "The restaurant is closed ______ renovation until further notice.", o: ["because", "for", "since", "by"], a: 1, ex: "Closed for renovation (fixed expression)." },
    { q: "Participants are ______ to arrive fifteen minutes early.", o: ["advised", "advice", "advising", "advisable"], a: 0, ex: "Passive: are advised to." },
    { q: "The figures were ______ accurate, so the report had to be rewritten.", o: ["no", "not", "none", "neither"], a: 1, ex: "Not + adjective." },
    { q: "Ms Novak is one of the most ______ designers in the company.", o: ["experience", "experienced", "experiencing", "experiences"], a: 1, ex: "Adjective before a noun: experienced." },
    { q: "We regret ______ you that the position has been filled.", o: ["inform", "to inform", "informing", "informed"], a: 1, ex: "Regret to inform = formal announcement of bad news." },
    { q: "Each department ______ its own budget.", o: ["manage", "manages", "managing", "are managing"], a: 1, ex: "Each + singular verb." },
    { q: "The training session was ______ useful that we decided to repeat it.", o: ["such", "so", "too", "very"], a: 1, ex: "So + adjective + that." },
    { q: "Could you tell me where ______?", o: ["is the meeting room", "the meeting room is", "is it the meeting room", "the meeting room"], a: 1, ex: "Indirect question: normal word order." },
    { q: "The office will be closed on Monday ______ the public holiday.", o: ["because", "due to", "although", "so that"], a: 1, ex: "Due to + noun." },
    { q: "The new manager is very ______ to suggestions from her team.", o: ["opening", "open", "opened", "openly"], a: 1, ex: "Be open to suggestions." },
    { q: "Our prices are ______ than those of our main competitor.", o: ["competitive", "more competitive", "most competitive", "competitively"], a: 1, ex: "Comparative + than." },
    { q: "Mr Davis will be out of the office ______ next Tuesday.", o: ["until", "by", "since", "for"], a: 0, ex: "Until = the situation continues up to that day." },
    { q: "All visitors must ______ in at the reception desk.", o: ["sign", "signs", "signed", "signing"], a: 0, ex: "Must + base verb: sign in." },
    { q: "The ______ of the new branch is scheduled for May.", o: ["open", "opened", "opening", "opens"], a: 2, ex: "Article + noun: the opening." },
    { q: "Ms Ito, ______ joined the company last year, has been promoted.", o: ["who", "which", "whose", "that"], a: 0, ex: "Non-defining clause about a person: who (never that between commas)." }
  ],

  /* PART 6: text completion (4 gaps, one is a sentence) */
  part6: [
    { title: "Email", text: "To: All staff\nFrom: Facilities\nSubject: Car park closure\n\nPlease note that the staff car park will be closed ___1___ Monday 10 to Wednesday 12 March for resurfacing work. During this period, employees are ___2___ to use public transport or the car park on Station Road. ___3___ Parking there will be free for staff who show their badge. We apologise for any ___4___ this may cause.",
      gaps: [
        { o: ["since", "from", "during", "by"], a: 1 },
        { o: ["encourage", "encouraging", "encouraged", "encouragement"], a: 2 },
        { o: ["The work started last year.", "We have made an arrangement with the owner of this car park.", "The car park is very large.", "Please park your bicycle carefully."], a: 1 },
        { o: ["inconvenience", "inconvenient", "inconveniently", "convenience"], a: 0 }
      ] },
    { title: "Notice", text: "WELCOME TO THE CITY LIBRARY\nOur library is open to all residents ___1___ charge. To borrow books, you will need a library card, which can be obtained at the front desk. ___2___ Books may be kept for up to three weeks and can be renewed online. Please note that a small fee is charged for books that are returned ___3___. Quiet zones are located on the second floor for those who ___4___ a calm place to study.",
      gaps: [
        { o: ["free of", "without of", "for free", "freely"], a: 0 },
        { o: ["Simply bring a document showing your address.", "The library was built in 1902.", "We sell coffee on the ground floor.", "Children love our story time."], a: 0 },
        { o: ["lately", "late", "later", "latest"], a: 1 },
        { o: ["need", "needs", "needing", "needed"], a: 0 }
      ] },
    { title: "Letter", text: "Dear Mr Okafor,\nThank you for your application for the position of Junior Designer. We were very impressed ___1___ your portfolio, and we would like to invite you to an interview on Thursday 15 May at 10 a.m. The interview will last approximately one hour and will ___2___ a short practical exercise. ___3___ If this date is not convenient for you, please let us know as soon as possible so that we can ___4___ an alternative.\nKind regards,\nEmma Clarke, HR Manager",
      gaps: [
        { o: ["by", "of", "for", "about"], a: 0 },
        { o: ["include", "including", "included", "inclusion"], a: 0 },
        { o: ["Please bring your laptop with your design software installed.", "We have many employees.", "The weather will be nice.", "Our company was founded by two brothers."], a: 0 },
        { o: ["arrange", "arranging", "arrangement", "arranged"], a: 0 }
      ] },
    { title: "Article", text: "LOCAL CAFÉ WINS NATIONAL AWARD\nThe Blue Door Café, which opened just two years ago, ___1___ named the best independent café in the country. The judges praised its ___2___ atmosphere and its menu of locally sourced products. ___3___ The owner, Ana Ruiz, said she was \"completely surprised\" by the news. She plans to use the prize money to ___4___ a small bakery next door.",
      gaps: [
        { o: ["has been", "have been", "is being", "was been"], a: 0 },
        { o: ["welcome", "welcoming", "welcomed", "welcomes"], a: 1 },
        { o: ["More than three hundred cafés took part in the competition.", "Coffee is grown in many countries.", "The café is closed on Mondays.", "Ana Ruiz was born in Madrid."], a: 0 },
        { o: ["open", "opening", "opened", "opens"], a: 0 }
      ] }
  ],

  /* PART 7: reading comprehension */
  part7: [
    { title: "Advertisement", text: "SUMMER INTERNSHIP: GRAPHIC DESIGN\nBrightline Studio is looking for a creative intern to join our team from June to August.\n• Assist our designers on branding and web projects\n• Prepare mock-ups and presentation files\n• Take part in client meetings\nRequirements: currently studying graphic design; good knowledge of design software; good level of English.\nThe internship is paid and based in our London office (no remote work).\nTo apply, send your CV and a link to your portfolio to jobs@brightline-studio.example by 30 April.",
      qs: [
        { q: "What is the purpose of the advertisement?", o: ["To sell design software", "To recruit an intern", "To announce a new office", "To find new clients"], a: 1 },
        { q: "What is NOT a task of the intern?", o: ["Preparing mock-ups", "Attending client meetings", "Managing the studio's budget", "Assisting designers"], a: 2 },
        { q: "What is indicated about the internship?", o: ["It can be done from home", "It is unpaid", "It takes place in London", "It lasts six months"], a: 2 }
      ] },
    { title: "Email", text: "From: David Moore\nTo: Sarah Lin\nSubject: Thursday's workshop\n\nHi Sarah,\nI'm afraid I won't be able to run the colour theory workshop on Thursday as planned. My flight back from Berlin has been cancelled, and the earliest one I could find lands on Thursday evening. Would you be able to replace me? All the materials are in the shared folder, and the participants have already received the reading list. If you can't, I'll ask the organisers to move the workshop to the following week.\nThanks a lot,\nDavid",
      qs: [
        { q: "Why is David writing to Sarah?", o: ["To invite her to Berlin", "To ask her to replace him", "To cancel his subscription", "To send her a reading list"], a: 1 },
        { q: "What is the problem?", o: ["The workshop room is not available", "His flight has been cancelled", "The participants are not ready", "The materials are lost"], a: 1 },
        { q: "What will David do if Sarah cannot help?", o: ["Cancel the workshop completely", "Run the workshop online", "Ask to postpone the workshop", "Find another flight"], a: 2 }
      ] },
    { title: "Text message chain", text: "Jenna (9:12): Hi Marc, are you already at the client's office?\nMarc (9:14): Almost, I'm stuck in traffic. Should be there in 10 min.\nJenna (9:15): OK. They've just told me the meeting room has changed: it's now room 4B, on the fourth floor.\nMarc (9:16): Got it. Did you bring the printed proposals?\nJenna (9:17): I printed them, but I left them on my desk!\nMarc (9:18): No worries, I've got the files on my laptop. We can show them on the screen.",
      qs: [
        { q: "Why is Marc late?", o: ["He missed his train", "He is in a traffic jam", "He went to the wrong office", "He forgot the files"], a: 1 },
        { q: "What information does Jenna give Marc?", o: ["The meeting is cancelled", "The meeting room has changed", "The client is late", "The proposals are ready"], a: 1 },
        { q: "At 9:18, what does Marc mean when he writes “No worries”?", o: ["He is angry with Jenna", "The problem can be solved", "He will print the proposals", "He doesn't want to go to the meeting"], a: 1 }
      ] },
    { title: "Schedule", text: "DESIGN WEEK, PROGRAMME FOR FRIDAY\n9:00 Registration and coffee (main hall)\n9:30 Keynote: “The future of sustainable packaging”, Dr Amira Haddad\n11:00 Workshop A: Typography for screens (room 2), max. 20 people\n11:00 Workshop B: Branding for small businesses (room 3), max. 20 people\n12:30 Lunch (included for registered participants)\n14:00 Panel discussion: Women in design\n16:00 Closing remarks\nNote: Workshops must be booked in advance on our website. Places are limited.",
      qs: [
        { q: "What will happen at 9:30?", o: ["Registration", "A keynote speech", "A workshop on typography", "Lunch"], a: 1 },
        { q: "What is indicated about the workshops?", o: ["They take place in the main hall", "They must be booked in advance", "They are unlimited", "They take place in the afternoon"], a: 1 },
        { q: "Who can have lunch for free?", o: ["Everyone", "Only speakers", "Registered participants", "Workshop leaders"], a: 2 }
      ] },
    { title: "Online review", text: "★★★★☆ Great value, but slow delivery\nI ordered a standing desk for my home office, and I'm very happy with the quality. It's solid, easy to adjust and it was much cheaper than similar models in shops. Assembly took me about forty minutes, and the instructions were clear. My only complaint is the delivery: it took twelve days instead of the five promised on the website, and nobody informed me about the delay. When I contacted customer service, they were polite and gave me a 10% discount on my next order. I would still recommend this desk.\nPosted by Lina K.",
      qs: [
        { q: "What did Lina buy?", o: ["A chair", "A standing desk", "A computer", "A lamp"], a: 1 },
        { q: "What was Lina unhappy about?", o: ["The price", "The quality", "The delivery time", "The instructions"], a: 2 },
        { q: "What is suggested about customer service?", o: ["They refused to help", "They offered compensation", "They never answered", "They replaced the desk"], a: 1 }
      ] },
    { title: "Double passage: memo + email", text: "MEMO: To all employees\nFrom 1 July, the company will introduce a new travel policy. Employees travelling for business must book all trains and flights through our online platform, TravelDesk. Hotel costs will be reimbursed up to £150 per night in London and £110 per night elsewhere in the UK. Expense reports must be submitted within 14 days of the trip.\n\n---\n\nEmail from Olivia Grant to Finance, 20 July\nHello, I've just come back from a two-night trip to Leeds for the Henderson project. The hotel cost £125 per night, as there were no cheaper rooms available because of a conference in the city. I booked my train through TravelDesk. I've attached my receipts. Could you let me know whether the full hotel cost can be reimbursed?\nThanks, Olivia",
      qs: [
        { q: "What does the memo announce?", o: ["A new office", "A new travel policy", "A salary increase", "A conference in Leeds"], a: 1 },
        { q: "Why did Olivia pay more than usual for her hotel?", o: ["She chose a luxury hotel", "There was a conference in the city", "She stayed in London", "She booked late"], a: 1 },
        { q: "Based on the memo, what will probably happen to Olivia's hotel costs?", o: ["They will be fully reimbursed", "They will be reimbursed up to £110 per night", "They will not be reimbursed at all", "They will be reimbursed up to £150 per night"], a: 1 },
        { q: "What did Olivia do correctly according to the policy?", o: ["She booked her train through TravelDesk", "She stayed in London", "She travelled for one night", "She didn't send any receipts"], a: 0 }
      ] }
  ]
};
