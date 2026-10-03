/* Test de placement : compréhension écrite et orale, A1 → C2.
   Lecture : 2 textes par niveau, 4 questions chacun (bonne réponse en premier, l'appli mélange).
   Écoute : 2 enregistrements par niveau ; « set » = 4 mini-dialogues d'une question (A1-A2),
   sinon un enregistrement et 4 questions. Lu par la synthèse vocale, deux écoutes au maximum.
   Les personnes, lieux et commerces des textes sont fictifs ; les faits cités (carte du métro de Londres,
   étude des confitures et méta-analyse de 2010, Nabokov) sont réels et résumés fidèlement. */
window.PLACEMENT = window.PLACEMENT || {};
window.PLACEMENT.reading = {
A1: [
  { title: "A note on the fridge", paras: ["Hi Tom,", "I'm at the supermarket. I'm back at six. Your dinner is in the fridge: pasta and salad. Please feed the cat. Her food is under the sink.", "Your sister Emma is at her friend's house. She's home at seven. Don't watch TV all evening! Your homework is on the table.", "Love, Mum"],
    qs: [
      ["Where is Mum now?", ["At the supermarket", "At home", "At work", "At a friend's house"]],
      ["What is in the fridge?", ["Pasta and salad", "The cat's food", "Tom's homework", "A pizza"]],
      ["Where is the cat's food?", ["Under the sink", "In the fridge", "On the table", "In the garden"]],
      ["When is Emma home?", ["At seven", "At six", "In the morning", "At eight"]]
    ] },
  { title: "My new flat", paras: ["My name is Lucy and I'm 24. I live in a small flat in Bristol. It has one bedroom, a kitchen and a bathroom.", "There's a big window in the living room, and I can see the river. I work in a bookshop near my flat, so I walk to work. On Saturdays I play tennis with my friend Kate."],
    qs: [
      ["How many bedrooms are there in Lucy's flat?", ["One", "Two", "Three", "None"]],
      ["What can Lucy see from the window?", ["The river", "The bookshop", "A park", "The sea"]],
      ["How does Lucy go to work?", ["She walks", "By bus", "By car", "By bike"]],
      ["What does Lucy do on Saturdays?", ["She plays tennis", "She works in the bookshop", "She visits her family", "She cleans the flat"]]
    ] }
],
A2: [
  { title: "A weekend in York", paras: ["Hi Sam,", "We got back from York last night. It was great! On Saturday we walked along the old city walls and visited the cathedral. It was really beautiful, but there were a lot of tourists. In the evening we had dinner in a small Italian restaurant. The food was delicious and not expensive.", "On Sunday it rained all morning, so we went to a museum about trains. I didn't expect to like it, but it was really interesting! We took the train home at four.", "Are you free next Friday? Come for dinner and I'll show you the photos.", "Ana"],
    qs: [
      ["What did Ana do on Saturday?", ["She walked on the city walls and visited the cathedral", "She went to a train museum", "She took the train home", "She stayed in the hotel all day"]],
      ["What did Ana think of the restaurant?", ["It was good and not expensive", "It was too expensive", "It was full of tourists", "It was closed"]],
      ["Why did they go to the museum?", ["Because it was raining", "Because Sam told them to", "Because they love trains", "Because the cathedral was closed"]],
      ["Why does Ana write to Sam?", ["To invite him for dinner", "To ask him for photos", "To book a hotel", "To say sorry"]]
    ] },
  { title: "Greenfield Sports Centre: summer changes", paras: ["From 1 July, the swimming pool will open at 7 a.m. instead of 6 a.m., because of work on the heating. The gym is open as usual, from 6 a.m. to 10 p.m.", "Yoga classes move from Tuesday to Thursday evening, at the same time (7–8 p.m.). Children under 12 must be with an adult in the pool at all times.", "New this summer: free tennis lessons for beginners on Saturday mornings. Book at reception: places are limited."],
    qs: [
      ["Why will the pool open later?", ["Because of work on the heating", "Because of the summer holidays", "Because there are fewer swimmers", "Because of the yoga classes"]],
      ["When are the yoga classes in July?", ["On Thursday evening", "On Tuesday evening", "On Saturday morning", "Every day at 7 a.m."]],
      ["What is true about children under 12?", ["They must swim with an adult", "They can't use the pool", "They swim for free", "They have lessons on Saturdays"]],
      ["What do you need to do for the tennis lessons?", ["Book at reception", "Pay at the gym", "Arrive at 7 a.m.", "Bring your own teacher"]]
    ] }
],
B1: [
  { title: "The rise of the repair café", paras: ["Ten years ago, if your toaster stopped working, you probably threw it away and bought a new one. Today, more and more people are taking broken objects to a “repair café”. The idea started in Amsterdam in 2009, and there are now thousands of them around the world.", "Volunteers with practical skills (electricians, tailors, bike mechanics) give their time for free, and visitors learn how to fix things themselves. “People come for the repair, but they stay for the conversation,” says Marta, who organises one in a library in Leeds.", "Not everything can be saved: some modern products are designed so that they are very hard to open. But Marta believes the movement is changing attitudes. “Young people especially are tired of buying things that break after two years.”"],
    qs: [
      ["What is the main idea of the text?", ["More people are choosing to repair things instead of throwing them away", "Repair cafés sell cheap second-hand objects", "Most broken objects can't be repaired", "Young people buy more products than before"]],
      ["Who works in a repair café?", ["Volunteers who are good at fixing things", "Shop assistants", "Library staff only", "Students paid by the city"]],
      ["What does Marta mean when she says people “stay for the conversation”?", ["They enjoy meeting and talking to other people", "They have to wait a long time", "They come back to complain", "They learn a foreign language"]],
      ["Why can't some products be repaired?", ["They are made to be hard to open", "They are too old", "The volunteers don't have time", "The parts are too expensive"]]
    ] },
  { title: "Ask Jo: a noisy colleague", paras: ["Dear Jo,", "I've just started a new job in an office. I like the work, but I have a problem with a colleague. Every day he talks very loudly on the phone, and I can't concentrate. I don't want to seem rude, because I'm new and everyone seems to like him. Last week I bought headphones, but I can't wear them all the time because I need to answer my own phone. Should I speak to him, or to my manager?", "Priya", "Dear Priya,", "Talk to him first, in private and in a friendly way. He may simply not realise how loud he is. Suggest a solution, like taking long calls in a meeting room. Only go to your manager if nothing changes.", "Jo"],
    qs: [
      ["What is Priya's problem?", ["A colleague is too noisy", "She doesn't like her new job", "Her manager is unfriendly", "Her phone doesn't work"]],
      ["Why hasn't Priya said anything yet?", ["She doesn't want to seem rude", "She is afraid of her manager", "She has only been there for one day", "She thinks it's normal"]],
      ["Why don't the headphones solve the problem?", ["She needs to hear her phone", "They are too expensive", "Her colleague can still hear her", "Her manager doesn't allow them"]],
      ["What does Jo advise Priya to do first?", ["Have a friendly conversation with the colleague", "Talk to the manager", "Change desks", "Buy better headphones"]]
    ] }
],
B2: [
  { title: "Why we keep checking our phones", paras: ["Most of us check our phones dozens of times a day, often without any real reason. Psychologists point to a mechanism called “variable reward”: because we never know whether a new message will be interesting, the act of checking becomes strangely compelling, rather like playing a slot machine. App designers are well aware of this, and features such as endless scrolling and red notification badges are no accident.", "Yet it would be too simple to blame technology alone. Many people reach for their phones when they feel bored, anxious or lonely; the device offers a quick escape from an uncomfortable feeling. This explains why simply deleting an app rarely works for long: unless the underlying need is addressed, the habit tends to find another outlet.", "Researchers who study habit change suggest a more modest approach. Rather than relying on willpower, they recommend changing the environment: keeping the phone in another room while working, for example, or turning off all non-essential notifications. Small obstacles, it turns out, can be surprisingly effective."],
    qs: [
      ["According to the text, why is checking our phones so compelling?", ["We never know in advance whether there will be something interesting", "Messages are usually very important", "We are afraid of missing work", "Phones are designed to be slow"]],
      ["What does the writer suggest about notification badges?", ["They are designed on purpose to attract us", "They were added by mistake", "They help us concentrate", "They are less effective than before"]],
      ["Why does deleting an app often fail, according to the writer?", ["The need behind the habit is still there", "People reinstall it the same day", "Other apps are even worse", "Phones are too complicated"]],
      ["What is the writer's attitude to willpower?", ["It is less reliable than changing your environment", "It is the only real solution", "It is useless for everyone", "It works better for young people"]]
    ] },
  { title: "Restaurant review: The Lantern", paras: ["The Lantern, which opened last month on Harbour Street, has clearly been designed to impress. The dining room is elegant, the staff are attentive without being intrusive, and the menu reads like a love letter to local produce. Unfortunately, the cooking does not always live up to the promise.", "My starter, a crab salad, was fresh and beautifully balanced. The main course, however, was a disappointment: the lamb had been cooked well beyond the “pink” described on the menu, and the sauce, though rich, overwhelmed everything else on the plate. Dessert brought the evening back on track: a lemon tart with exactly the right sharpness.", "At £65 a head without wine, The Lantern is not cheap, and at that price diners are entitled to expect consistency. There is real talent in this kitchen, and I suspect that once the team has settled in, it will become one of the best addresses in town. For now, it is worth a visit for a special occasion, but it is not yet the triumph it clearly wants to be."],
    qs: [
      ["What did the reviewer think of the service?", ["It was attentive but not annoying", "It was slow", "It was too formal", "It was unfriendly"]],
      ["What was wrong with the lamb?", ["It was overcooked", "It was not fresh", "The portion was too small", "It had no sauce"]],
      ["Why does the reviewer mention the price?", ["At that price, the quality should be reliable", "It is cheaper than other restaurants", "The wine is included", "The dessert was free"]],
      ["What is the reviewer's overall opinion?", ["Promising, but not excellent yet", "Excellent in every way", "Not worth visiting", "Good only for its wine"]]
    ] }
],
C1: [
  { title: "The myth of multitasking", paras: ["It has become something of a badge of honour to claim that one is good at multitasking. Job advertisements ask for it; people list it on their CVs with evident pride. The research, however, paints a rather less flattering picture. What we experience as doing two things at once is, for most tasks, a rapid alternation of attention, and each switch carries a cost: a fraction of a second, perhaps, but one that accumulates over the course of a day. Errors creep in, and tasks take longer than they would if tackled one after another.", "Some studies have gone further, suggesting that people who habitually juggle several streams of media perform worse on tests of attention than those who rarely do. Here, though, caution is warranted. Such studies show a correlation, not a cause: it may be that people who are easily distracted are drawn to multitasking in the first place, rather than multitasking making them distractible.", "None of this means that we should never combine activities. Listening to music while running, or chatting while cooking a familiar recipe, poses few problems, because one of the tasks is largely automatic. The difficulty arises when both demand our conscious attention: writing an email during a meeting, say. The lesson, perhaps, is less “never multitask” than “know which tasks can share your mind, and which cannot”."],
    qs: [
      ["What does the writer imply about people who are proud of multitasking?", ["Their confidence is not supported by the evidence", "They are usually the best employees", "They should mention it first on their CV", "They have trained themselves to switch faster"]],
      ["Why does the writer say that “caution is warranted”?", ["The studies cannot prove that multitasking causes poor attention", "The studies were too small", "The tests of attention were unfair", "The results were never published"]],
      ["Why does chatting while cooking a familiar recipe pose “few problems”?", ["One of the activities needs little conscious attention", "Cooking is a social activity", "It only takes a short time", "Most people enjoy it"]],
      ["Which sentence best sums up the writer's conclusion?", ["It depends on whether both tasks need our attention", "Multitasking should always be avoided", "Multitasking is a skill anyone can learn", "Music improves concentration"]]
    ] },
  { title: "Letter to the editor: our market", paras: ["Sir, I read with interest your report that the council plans to “revitalise” the town centre by replacing the covered market with a car park and a row of chain stores. I am sure the councillors mean well. After all, nothing says “vibrant community” quite like a multi-storey car park.", "The market is not merely a place to buy vegetables. For many older residents, it is the one place where they are guaranteed a conversation each week; for young traders, it is the only affordable way to test a business idea. It is true that the building needs repairs, and that some stalls have struggled in recent years. But these are arguments for investment, not demolition.", "The council's own consultation found that 68% of respondents wanted the market kept. One wonders what the purpose of consulting was, if the result was to be ignored. I would urge the council to publish the full costs of both options, repair and replacement, before any decision is made. Residents might then judge for themselves which represents better value.", "M. Okafor, Riverside"],
    qs: [
      ["What does the writer really mean by “nothing says ‘vibrant community’ quite like a multi-storey car park”?", ["The car park will harm the community", "The car park is a good idea", "The car park will be too small", "The writer has not decided yet"]],
      ["What does the writer concede?", ["The building needs repairs and some stalls have struggled", "The council's plan will create jobs", "Most people prefer chain stores", "The consultation was badly organised"]],
      ["What does the writer suggest about the consultation?", ["Its result seems to have been ignored", "It cost too much", "Nobody took part in it", "It supported the council's plan"]],
      ["What does the writer ask the council to do?", ["Make the costs of both options public", "Cancel the consultation", "Build the car park somewhere else", "Give the market to young traders"]]
    ] }
],
C2: [
  { title: "On the pleasure of rereading", paras: ["There is a peculiar snobbery about rereading. To return to a book one has already finished is, in some circles, faintly suspect: an admission, perhaps, that one has run out of new things to read, or lacks the stamina to tackle them. Yet the writers who have thought hardest about reading have tended to see it the other way round. Nabokov went so far as to claim that one cannot read a book, only reread it: a first reading, he argued, is spent on the laborious business of finding out what happens.", "There is something in this. On a first reading, suspense drives us forward; we skim descriptions in our hurry to learn the outcome. Only once the plot has been, so to speak, disposed of can we attend to the texture of the prose, the echoes between chapters, the small decisions that made the whole possible. A second reading is less a repetition than a different activity altogether.", "And yet it would be disingenuous to pretend that rereading is purely a matter of aesthetic refinement. Much of its appeal is undeniably comfort: the reassurance of a world whose dangers we know will be survived. The two motives are not, however, mutually exclusive. The reader who returns to a childhood favourite in a time of trouble may find, to her surprise, that the book has changed; or rather, that she has, and that the book has been waiting all along to show her."],
    qs: [
      ["What attitude to rereading does the first sentence describe?", ["Some people find it slightly embarrassing", "Most people find it essential", "Critics see it as a waste of money", "Writers think it is impossible"]],
      ["According to the second paragraph, what does a second reading make possible?", ["Paying attention to style and structure rather than plot", "Reading faster", "Remembering the ending better", "Discovering a different ending"]],
      ["Why does the writer say it would be “disingenuous” to pretend otherwise?", ["To admit that rereading is often also about comfort", "To criticise Nabokov", "To suggest that rereading is dishonest", "To show that comfort does not matter"]],
      ["What does the final sentence suggest?", ["Rereading reveals how the reader has changed", "Books are often rewritten for new editions", "Childhood books are the best books", "Rereading is mainly for children"]]
    ] },
  { title: "The paradox of choice, revisited", paras: ["Few findings in behavioural science have travelled as far as the “jam study”. In 2000, the psychologists Sheena Iyengar and Mark Lepper reported that shoppers offered a display of 24 jams were far less likely to buy one than shoppers offered just six. The conclusion, that too much choice can paralyse rather than liberate, was seized upon by business writers and policymakers alike, and “choice overload” entered the popular vocabulary.", "The story, however, has proved rather less tidy than its admirers supposed. When other researchers attempted to reproduce the effect, results were decidedly mixed, and a meta-analysis published in 2010 found that, averaged across studies, the effect of the number of options was close to zero. That is not to say the original finding was spurious; rather, it seems that choice overload occurs only under particular conditions: when options are hard to compare, for instance, or when people have no clear preferences to begin with.", "This is, in a sense, a more interesting conclusion than the original one, if a less marketable one. It shifts the question from whether choice is good or bad to when, and for whom, it becomes a burden. It also offers a cautionary tale about the way research is popularised: a striking result, reduced to a slogan, can acquire an authority that the evidence never quite warranted."],
    qs: [
      ["Why does the writer mention business writers and policymakers?", ["To show how widely the finding was adopted", "To criticise their methods", "To explain who paid for the study", "To show that they rejected it"]],
      ["What did the 2010 meta-analysis find?", ["On average, the number of options made little difference", "Choice overload happens in every situation", "Six options is the ideal number", "The original study was invented"]],
      ["What does the writer mean by “a less marketable one”?", ["It is harder to turn into a simple, catchy message", "It will sell fewer jams", "It is less accurate", "It cannot be published"]],
      ["What is the “cautionary tale”?", ["A simplified finding can seem more certain than the evidence allows", "Researchers should not study shopping", "Meta-analyses are unreliable", "Slogans are always false"]]
    ] }
]
};

window.PLACEMENT.listening = {
A1: [
  { set: [
    { lines: [["Woman", "Excuse me, what time is it?"], ["Man", "It's half past three."]], q: "What time is it?", o: ["3:30", "3:15", "2:30"] },
    { lines: [["Man", "How much is this T-shirt?"], ["Woman", "It's twelve pounds."]], q: "How much is the T-shirt?", o: ["£12", "£20", "£2"] },
    { lines: [["Woman", "Where's my phone?"], ["Man", "It's on the table, next to your keys."]], q: "Where is the phone?", o: ["On the table", "In her bag", "Next to the window"] },
    { lines: [["Man", "What's your name?"], ["Woman", "Helen. H, E, L, E, N."]], q: "What's the woman's name?", o: ["Helen", "Ellen", "Hannah"] }
  ] },
  { set: [
    { lines: [["Woman", "Do you want tea or coffee?"], ["Man", "Coffee, please. With milk, no sugar."]], q: "What does the man want?", o: ["Coffee with milk", "Tea with milk", "Coffee with sugar"] },
    { lines: [["Man", "How old is your son?"], ["Woman", "He's seven. His birthday is in May."]], q: "How old is her son?", o: ["Seven", "Eleven", "Seventeen"] },
    { lines: [["Woman", "Is the bank open on Sunday?"], ["Man", "No. It's open from Monday to Saturday."]], q: "When is the bank closed?", o: ["On Sunday", "On Saturday", "On Monday"] },
    { lines: [["Man", "Where do you live?"], ["Woman", "In a small house near the station."]], q: "Where does the woman live?", o: ["Near the station", "Near the park", "In a big flat"] }
  ] }
],
A2: [
  { set: [
    { lines: [["Man", "Shall we meet at the café at ten?"], ["Woman", "Ten's a bit early for me. Can we say half past eleven?"], ["Man", "Sure. See you then."]], q: "When will they meet?", o: ["At 11:30", "At 10:00", "At 10:30"] },
    { lines: [["Woman", "How was your holiday?"], ["Man", "The hotel was lovely, but it rained every day, so we didn't go to the beach once."]], q: "What was the problem with the holiday?", o: ["The weather", "The hotel", "The beach was closed"] },
    { lines: [["", "The train to Manchester will leave from platform four, not platform two. We're sorry for the change."]], q: "Where does the train to Manchester leave from?", o: ["Platform 4", "Platform 2", "Platform 14"] },
    { lines: [["Woman", "Can I help you?"], ["Man", "Yes. I bought these shoes yesterday, but they're too small. Can I change them for a bigger size?"]], q: "Why is the man in the shop?", o: ["He wants to change some shoes", "He wants to buy shoes for a friend", "He lost his shoes"] }
  ] },
  { title: "A birthday present", lines: [["Kate", "Tom, it's Dad's birthday on Saturday. What shall we get him?"], ["Tom", "Last year we bought him a book and he never read it. What about something to do, not something to keep?"], ["Kate", "Good idea. He loves cooking. A cooking class?"], ["Tom", "Perfect. There's one at the market on Sunday mornings. It's forty pounds each."], ["Kate", "Let's book two places, then. You can go with him. I'm working on Sunday."], ["Tom", "OK. I'll book it tonight."]],
    qs: [
      ["Why don't they want to buy a book?", ["Their dad didn't read the last one", "Books are too expensive", "Their dad has too many books"]],
      ["What present do they choose?", ["A cooking class", "A cookbook", "A dinner at the market"]],
      ["Why can't Kate go?", ["She's working", "She doesn't like cooking", "It's too expensive"]],
      ["What will Tom do tonight?", ["Book the class", "Buy a cake", "Call their dad"]]
    ] }
],
B1: [
  { title: "Local radio: this weekend", lines: [["", "Good morning! Here's what's happening this weekend. On Saturday, the town's first street food festival opens in Victoria Park, from eleven until nine in the evening. Entry is free, but bring cash, because not all the stalls take cards."], ["", "If you're thinking of driving, don't: the car park next to Victoria Park will be closed, and there'll be extra buses from the station every fifteen minutes."], ["", "And on Sunday, if the weather stays dry, the open-air cinema is showing a family film at seven. Tickets are eight pounds, and they're selling fast, so book online today."]],
    qs: [
      ["Why should visitors bring cash?", ["Some stalls don't accept cards", "Entry costs money", "There's no bank nearby"]],
      ["What does the presenter advise drivers to do?", ["Take the bus instead", "Park next to the park", "Arrive before eleven"]],
      ["When will the film be shown?", ["On Sunday, if it doesn't rain", "On Saturday evening", "Every evening at seven"]],
      ["Why should people book today?", ["Tickets are selling quickly", "Tickets are cheaper today", "The website closes tomorrow"]]
    ] },
  { title: "A change of plan at work", lines: [["Sarah", "Hi Ben, have you got a minute? It's about the training day next week."], ["Ben", "Sure. Is it still on Thursday?"], ["Sarah", "No, that's the thing. The trainer can't do Thursday, so we've moved it to Friday. Same time, nine o'clock."], ["Ben", "Friday's fine for me. But I thought it was in the big meeting room?"], ["Sarah", "It was, but the big room's being painted, so we'll be at the hotel across the road. They're giving us lunch, too."], ["Ben", "Even better! Do we need to bring anything?"], ["Sarah", "Just your laptop. Oh, and could you tell Mike? He's on holiday until Wednesday, and I don't want him to go to the wrong place."]],
    qs: [
      ["Why has the training day changed?", ["The trainer isn't available on Thursday", "Ben is on holiday", "The hotel is closed"]],
      ["Where will the training take place?", ["In a hotel", "In the big meeting room", "At the trainer's office"]],
      ["What does Ben need to bring?", ["His laptop", "His lunch", "Nothing"]],
      ["What does Sarah ask Ben to do?", ["Tell Mike about the changes", "Book the hotel", "Call the trainer"]]
    ] }
],
B2: [
  { title: "Interview: teenagers and sleep", lines: [["Presenter", "My guest today is Dr Ruth Allen, who studies sleep. Ruth, people say teenagers are lazy because they get up late. Is that fair?"], ["Ruth", "Not really. During adolescence, the body clock actually shifts, so teenagers naturally feel sleepy later at night, often not before eleven. If they then have to get up at seven, they're simply not getting enough sleep. It's biology, not laziness."], ["Presenter", "So should schools start later?"], ["Ruth", "Some schools have tried it, and the early results are encouraging: better attendance, and students say they feel more alert. But it isn't simple. Parents' working hours, buses, after-school activities: everything is organised around the current timetable. So I'd say it's worth testing carefully rather than changing everything overnight."], ["Presenter", "And what can teenagers do themselves?"], ["Ruth", "The biggest thing is light. Screens in the evening delay the body clock even further, so putting the phone away an hour before bed really does help."]],
    qs: [
      ["According to Dr Allen, why do teenagers get up late?", ["Their body clock changes during adolescence", "They are lazy", "They have too much homework"]],
      ["What does she say about schools that start later?", ["The first results look positive", "They have solved the problem", "Parents are against them"]],
      ["Why does she recommend a careful approach?", ["Many other things depend on the school timetable", "The research is too old", "Students don't want it"]],
      ["What practical advice does she give?", ["Avoid screens before bed", "Go to bed at seven", "Sleep during the day"]]
    ] },
  { title: "Museum talk: the Underground map", lines: [["Guide", "The map you see on every platform today goes back to 1931, when an engineering draughtsman called Harry Beck had an idea in his spare time. Earlier maps had tried to show the real geography of London, so the stations in the centre were crowded together, while those in the suburbs were spread far apart."], ["Guide", "Beck realised that passengers underground don't need to know distances; they need to know the order of the stations and where to change. So he used only straight lines, at right angles or at forty-five degrees, and spaced the stations evenly."], ["Guide", "The Underground's publicity department was doubtful at first and thought the design was too radical. But when a small trial printing appeared in 1933, the public loved it. Almost every metro map in the world now follows his approach."]],
    qs: [
      ["What was the problem with earlier maps?", ["The central stations were crowded together", "They didn't show all the stations", "They were too expensive to print"]],
      ["What did Beck understand about passengers?", ["They need the order of the stations, not the real distances", "They prefer maps that show the real geography", "They rarely change lines"]],
      ["How did the publicity department react at first?", ["They thought the design was too unusual", "They printed it immediately", "They asked Beck to add the distances"]],
      ["What does the guide say about the map's influence?", ["Most metro maps today use the same idea", "It is only used in London", "It was replaced in 1933"]]
    ] }
],
C1: [
  { title: "After the presentation", lines: [["Anna", "So, how did the presentation go? Be honest."], ["David", "Well… the slides were beautiful. Really, the design was lovely."], ["Anna", "That bad?"], ["David", "I didn't say it was bad! It's just that the client kept asking about the budget, and we didn't really have an answer. Mark sort of talked around it for ten minutes."], ["Anna", "Ah. And how did they leave it?"], ["David", "They said they'd “be in touch”. Which, in my experience, can mean anything. Look, it's not over. If we send them a proper costing by Friday, I think we're still in with a chance."], ["Anna", "Right. Then let's not lose any more time: I'll get the figures from finance this afternoon."]],
    qs: [
      ["Why does Anna say “That bad?”", ["David only praises the slides, which suggests the rest went badly", "David says the presentation was terrible", "She thinks the slides were badly designed"]],
      ["What was the main weakness of the presentation?", ["They couldn't answer questions about money", "The slides were too long", "Mark arrived ten minutes late"]],
      ["What does David think “be in touch” means?", ["It's unclear whether the client is interested", "The client will definitely sign", "The client is angry"]],
      ["What will Anna do?", ["Get the figures from finance today", "Redesign the slides at the weekend", "Phone the client"]]
    ] },
  { title: "Lecture: the placebo effect", lines: [["Lecturer", "Now, the placebo effect is often described as “all in the mind”, as though that made it somehow less real. I'd like to challenge that. When patients in pain are given a sugar pill they believe to be a painkiller, many of them do report less pain, and brain imaging suggests this isn't simply politeness towards the doctor."], ["Lecturer", "That said, we should be careful not to overstate it. Placebos seem to work best on symptoms that people experience subjectively, such as pain or nausea. There's very little evidence that a placebo can shrink a tumour or cure an infection."], ["Lecturer", "And here's the twist that surprised many researchers: in some studies, placebos helped even when patients were told openly that the pills contained no active ingredient. Why that should be is still debated. Expectations, the ritual of treatment, the attention of a caring doctor: they may all play a part."]],
    qs: [
      ["Which view does the lecturer challenge?", ["That the placebo effect isn't real because it's psychological", "That placebos can cure infections", "That doctors should never use placebos"]],
      ["Where does the placebo effect seem strongest?", ["On symptoms such as pain and nausea", "On serious diseases", "On children"]],
      ["What surprised researchers?", ["Placebos sometimes worked even when patients knew they were placebos", "Placebos stopped working after a week", "Brain imaging showed no change"]],
      ["What is the lecturer's position on why open placebos work?", ["It isn't clear yet", "It's only the doctor's attention", "It's a statistical error"]]
    ] }
],
C2: [
  { title: "The office party", lines: [["Jess", "So I hear you've volunteered to organise the office party. Again."], ["Leo", "“Volunteered” is a strong word. I left the meeting to get a coffee and came back to find I'd been unanimously elected."], ["Jess", "The price of popularity. Any big ideas?"], ["Leo", "Well, last year's karaoke went down like a lead balloon, so that's off the table. I was toying with a cooking competition, but given that half the team can barely boil an egg, I'm not sure that's a recipe for success either."], ["Jess", "Very funny. What about something low-key? A long lunch somewhere decent. Nobody has to perform, nobody gets embarrassed."], ["Leo", "You know, that's not a bad shout. Less of a spectacle, granted, but at least people might actually turn up."]],
    qs: [
      ["What does Leo suggest about how he got the job?", ["He was chosen while he was out of the room", "He asked for it", "He was the only person who applied"]],
      ["How did last year's karaoke go?", ["It was a failure", "It was a great success", "It was cancelled"]],
      ["Why is Leo unsure about a cooking competition?", ["Many colleagues are bad at cooking", "It would be too expensive", "There's no kitchen"]],
      ["What does Leo think of Jess's idea in the end?", ["It's a good idea, even if it's less spectacular", "It's too boring to work", "It's too expensive"]]
    ] },
  { title: "Lecture: untranslatable words", lines: [["Lecturer", "Every few months, a list of so-called untranslatable words does the rounds online: a German word for this, a Portuguese word for that, usually with the implication that speakers of those languages experience the world in some richer way than the rest of us."], ["Lecturer", "I want to complicate that picture. It's perfectly true that languages carve up experience differently, and that a single word in one may require a whole phrase in another. But “requires a phrase” is not the same as “cannot be translated”. If it were, the very lists that claim these words are untranslatable would be impossible to write, since each entry comes with a perfectly serviceable English explanation."], ["Lecturer", "The more defensible claim is a subtler one: that having a ready-made word makes a concept easier to notice, to talk about, perhaps to value. Whether it changes what speakers can feel is another matter altogether, and on that the evidence is, to put it charitably, thin."]],
    qs: [
      ["Which implication of the online lists does the lecturer question?", ["That speakers of other languages experience the world more richly", "That the words are hard to pronounce", "That the lists are too short"]],
      ["Why does the lecturer say the lists contradict themselves?", ["They explain in English the words they call untranslatable", "They contain spelling mistakes", "They only include European languages"]],
      ["Which claim does the lecturer find more defensible?", ["A ready-made word makes a concept easier to notice and discuss", "Some feelings exist only in some languages", "Translation is always impossible"]],
      ["What does “to put it charitably, thin” suggest about the evidence?", ["It is weak, and the lecturer is being polite about it", "It is strong but complicated", "It has never been studied"]]
    ] }
]
};
