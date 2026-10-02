/* TOEIC practice, second set (2026-10): original questions in the official format, enough for a full-length mock test.
   New in this set: "graphic" (a small table to look at, parts 3 and 4) and "docs" (double and triple passages, part 7). */
(function () {
  const T = window.TOEIC;

  T.part2.push(
    { q: "Who's going to pick up the clients from the airport?", o: ["Around six o'clock.", "Daniel offered to do it.", "Terminal two, I think."], a: 1, ex: "“Who” asks for a person. A answers “when” and C answers “where”." },
    { q: "How long will the renovation take?", o: ["It's a very long building.", "Yes, it took a while.", "About three weeks."], a: 2, ex: "“How long” asks for a duration. A repeats “long” with another meaning: a classic trap." },
    { q: "Should we order lunch or go out?", o: ["Let's just order something.", "Yes, we should.", "It was delicious."], a: 0, ex: "A choice question (A or B?) is never answered with yes or no." },
    { q: "You've met Ms Tanaka before, haven't you?", o: ["She's meeting us at noon.", "Yes, at the trade fair last year.", "No, the meeting was cancelled."], a: 1, ex: "A tag question checks information: yes or no + a detail. C plays on meet / meeting." },
    { q: "Why don't we move the meeting to Thursday?", o: ["Because it's too far.", "It was on Tuesday.", "That works for me."], a: 2, ex: "“Why don't we…?” is a suggestion, not a question about a reason: accept or refuse it." },
    { q: "Where should I put these boxes?", o: ["Next to the photocopier, please.", "They're quite heavy.", "I put them on yesterday."], a: 0, ex: "“Where” asks for a place." },
    { q: "Has the budget been approved yet?", o: ["It's very approachable.", "The board is still discussing it.", "Yes, I bought it."], a: 1, ex: "An indirect answer: “still discussing it” means “not yet”. A sounds similar (approved / approachable)." },
    { q: "When is the new manager starting?", o: ["At the main office.", "She managed very well.", "Not until next month."], a: 2, ex: "“When” asks for a time. “Not until” = only from." },
    { q: "I can't find the report you sent me.", o: ["I'll send it again right now.", "It reports every week.", "It's a nice find."], a: 0, ex: "A statement describing a problem: the best response offers a solution." },
    { q: "Which hotel are you staying at?", o: ["For three nights.", "The one near the station.", "Yes, I'm staying."], a: 1, ex: "“Which” asks you to identify one thing: “the one…”." },
    { q: "Would you mind closing the window?", o: ["Yes, it's closed on Sundays.", "My mind is made up.", "Not at all."], a: 2, ex: "“Would you mind…?” → “Not at all” means “I'm happy to do it”." },
    { q: "How much does the conference cost?", o: ["It's free for members.", "About two hundred people.", "Very much, thank you."], a: 0, ex: "“How much” asks for a price. B answers “how many”." },
    { q: "Isn't the print shop closed today?", o: ["I printed it twice.", "No, it's open until five.", "Close to the bank."], a: 1, ex: "A negative question: answer according to the facts (No, it's open)." },
    { q: "Who should I send the invoice to?", o: ["By Friday at the latest.", "Thanks, I received it.", "Accounts payable."], a: 2, ex: "“Who” can be answered with a department as well as a person." },
    { q: "The train to Manchester has been delayed.", o: ["Then we'd better call the client.", "It's a very fast train.", "Platform six."], a: 0, ex: "A statement: the natural response reacts to the problem." },
    { q: "Do you want the window seat or the aisle seat?", o: ["Yes, please.", "I'd prefer the aisle.", "It's a long flight."], a: 1, ex: "A choice question: choose one of the options." },
    { q: "Why was the delivery returned?", o: ["Return it to the store.", "It was delivered on Monday.", "The address was incomplete."], a: 2, ex: "“Why” asks for a reason, even when the answer doesn't start with “because”." },
    { q: "Could you help me set up the projector?", o: ["Sure, give me a minute.", "It was set up last year.", "It's a new project."], a: 0, ex: "A request: accept or refuse. C plays on project / projector." },
    { q: "What time does the store open on Saturdays?", o: ["Since last Saturday.", "At nine.", "It's a big store."], a: 1, ex: "“What time” asks for a time." },
    { q: "Who left these documents on the printer?", o: ["On the second floor.", "Leave them there.", "I think they're Ahmed's."], a: 2, ex: "“Who” asks for a person. “Ahmed's” = they belong to Ahmed." },
    { q: "Haven't you finished the slides yet?", o: ["I just need to add the charts.", "They slid down the hill.", "Yes, it's a nice slide."], a: 0, ex: "An indirect answer: “I just need to…” = almost finished." },
    { q: "Let's ask Maria to lead the training session.", o: ["The train is late.", "Good idea, she's very experienced.", "It lasted two hours."], a: 1, ex: "A suggestion: agree or disagree. A plays on training / train." },
    { q: "How often do you check your email?", o: ["About ten emails.", "Check the email address.", "Every hour or so."], a: 2, ex: "“How often” asks for a frequency." },
    { q: "Where's the nearest pharmacy?", o: ["There's one on Bridge Street.", "Near the end of the year.", "I bought some medicine."], a: 0, ex: "“Where” asks for a place. B uses “near” for time: a trap." },
    { q: "Are you coming to the retirement party?", o: ["He retired in March.", "I wouldn't miss it.", "The party room is upstairs."], a: 1, ex: "“I wouldn't miss it” = yes, definitely." }
  );

  T.part3.push(
    { lines: [
        ["W", "Hi Raj, I'm placing the order for office supplies. Do we still need printer paper?"],
        ["M", "Yes, we're almost out. We should get at least ten boxes. And could you add some of those large envelopes? We're sending the brochures to clients next week."],
        ["W", "Sure. The supplier has a special offer this month: if we spend more than two hundred dollars, delivery is free."],
        ["M", "Great. Then let's take the twenty-box option. It works out cheaper per box anyway, and with the envelopes we'll get free delivery."]
      ],
      graphic: { title: "Brightway Office Supplies: printer paper", head: ["Quantity", "Price"], rows: [["5 boxes", "$60"], ["10 boxes", "$110"], ["20 boxes", "$200"], ["30 boxes", "$285"]] },
      qs: [
        { q: "What are the speakers mainly discussing?", o: ["A delivery problem", "An order for office supplies", "A new printer", "A client's complaint"], a: 1 },
        { q: "Why does the man want large envelopes?", o: ["To send brochures to clients", "To store old files", "To return a product", "To mail invoices"], a: 0 },
        { q: "Look at the graphic. How much will the paper cost?", o: ["$60", "$110", "$200", "$285"], a: 2 }
      ] },
    { lines: [
        ["M1", "So, we've interviewed all five candidates for the design position. Who stood out for you, Karen?"],
        ["W", "Honestly, Ms Okoye. Her portfolio was impressive, and she has experience with packaging, which is exactly what we need for the new product line."],
        ["M2", "I agree, but she said she can't start until March. We really need someone by the end of January."],
        ["M1", "Hmm. What if we bring in a freelancer for two months? That way we don't lose the best candidate."],
        ["W", "That could work. I know a freelancer who did some good work for us last year. I'll give him a call this afternoon."]
      ],
      qs: [
        { q: "What position are the speakers trying to fill?", o: ["Sales manager", "Designer", "Accountant", "Receptionist"], a: 1 },
        { q: "What is the problem with Ms Okoye?", o: ["She has no experience", "She asked for a high salary", "She cannot start soon enough", "She lives too far away"], a: 2 },
        { q: "What will the woman do this afternoon?", o: ["Interview another candidate", "Write a job advertisement", "Meet Ms Okoye", "Call a freelancer"], a: 3 }
      ] },
    { lines: [
        ["W", "Good afternoon, Luigi's. How can I help you?"],
        ["M", "Hi, I'd like to book a table for eight people this Friday at seven thirty. It's a business dinner."],
        ["W", "Let me check… I'm afraid we're fully booked at seven thirty. We could do six o'clock, or nine."],
        ["M", "Nine is a bit late for our guests. Six it is, then. Oh, and one of them doesn't eat meat or fish."],
        ["W", "No problem, we have several vegetarian dishes. Can I take a name and a phone number?"]
      ],
      qs: [
        { q: "Why is the man calling?", o: ["To make a reservation", "To cancel a reservation", "To order food for delivery", "To complain about a meal"], a: 0 },
        { q: "What time will the group probably arrive?", o: ["At 7:30", "At 8:00", "At 6:00", "At 9:00"], a: 2 },
        { q: "What does the man say about one of the guests?", o: ["She will arrive late", "He is allergic to nuts", "She needs a parking space", "He doesn't eat meat or fish"], a: 3 }
      ] },
    { lines: [
        ["M", "Lucy, is your computer working? Mine keeps freezing every time I open the sales database."],
        ["W", "Mine too. I called the help desk, and they said the server is being updated this morning."],
        ["M", "This morning? I have to send the quarterly figures to head office by noon."],
        ["W", "Well, you could use the laptop in the meeting room. It's connected to the old system, so it should still work."],
        ["M", "Typical. Every time there's a deadline, something goes wrong. Anyway, I'll give the laptop a try."]
      ],
      qs: [
        { q: "What problem are the speakers discussing?", o: ["A printer is broken", "Their computers are not working properly", "The internet is too expensive", "A file has been deleted"], a: 1 },
        { q: "What does the man have to do by noon?", o: ["Update the server", "Call the help desk", "Send sales figures to head office", "Book a meeting room"], a: 2 },
        { q: "What does the man imply when he says, “Typical”?", o: ["He is pleased with the solution", "Problems often happen at the worst moment", "The laptop is very old", "He doesn't understand the woman"], a: 1 }
      ] },
    { lines: [
        ["W", "Excuse me, my train to Bristol was cancelled. Is there another way to get there this morning?"],
        ["M", "Yes, you can take a train to Bath and change there. Your ticket is valid on that route."],
        ["W", "Okay. I have a meeting at eleven, so I need to arrive before half past ten."],
        ["M", "The eight fifteen has just left, I'm afraid, so take the next one. The later trains won't get you there in time."]
      ],
      graphic: { title: "Departures via Bath", head: ["Departure", "Arrival in Bristol"], rows: [["8:15", "9:55"], ["8:45", "10:20"], ["9:15", "10:50"], ["9:45", "11:20"]] },
      qs: [
        { q: "Where does the conversation probably take place?", o: ["At an airport", "In a hotel", "At a train station", "In an office"], a: 2 },
        { q: "Why does the woman need to arrive early?", o: ["She has a meeting", "She wants to visit Bath", "She has to catch a flight", "She is meeting a friend for lunch"], a: 0 },
        { q: "Look at the graphic. What time will the woman arrive in Bristol?", o: ["9:55", "10:20", "10:50", "11:20"], a: 1 }
      ] },
    { lines: [
        ["W1", "Tom, the shipment from Portugal arrived this morning, but three of the boxes are damaged."],
        ["M", "Oh no. Were the products inside damaged too?"],
        ["W2", "I checked them with Anna. Most of the tiles are fine, but about forty are broken."],
        ["M", "OK. Take photos of everything and send them to the supplier today. Their contract says they have to replace damaged goods within two weeks."],
        ["W1", "I'll do that right now. Should we tell the customer the order will be late?"],
        ["M", "Yes, I'll call her myself. She's one of our biggest clients."]
      ],
      qs: [
        { q: "What problem do the speakers mention?", o: ["A shipment arrived late", "The wrong products were sent", "Some products were damaged", "An invoice was incorrect"], a: 2 },
        { q: "What does the man ask the women to do?", o: ["Return the boxes", "Take photos and send them to the supplier", "Cancel the order", "Count the boxes again"], a: 1 },
        { q: "What will the man do?", o: ["Call a customer", "Visit the supplier", "Repair the tiles", "Write a contract"], a: 0 }
      ] },
    { lines: [
        ["M", "Have you found a venue for the product launch yet?"],
        ["W", "I've visited two. The hotel downtown is beautiful, but it only holds a hundred people."],
        ["M", "That's not enough. We've already sent invitations to a hundred and fifty."],
        ["W", "Right. The other option is the old factory by the river. It's been turned into an event space, and it's much bigger. It's a bit further from the station, though."],
        ["M", "We could arrange a shuttle bus from the station. Can you get a quote from them by Thursday?"]
      ],
      qs: [
        { q: "What event are the speakers planning?", o: ["A training course", "A retirement party", "A trade fair", "A product launch"], a: 3 },
        { q: "Why is the hotel unsuitable?", o: ["It is too expensive", "It is too small", "It is far from the station", "It is closed on Thursdays"], a: 1 },
        { q: "What does the man suggest?", o: ["Sending fewer invitations", "Changing the date", "Organising a shuttle bus", "Booking two hotels"], a: 2 }
      ] },
    { lines: [
        ["W", "Hi Dev, have you signed up for the safety training next week?"],
        ["M", "Not yet. Is it compulsory?"],
        ["W", "It is for everyone who works in the warehouse. There are two sessions: Tuesday morning and Thursday afternoon."],
        ["M", "On Thursday afternoon I'm meeting a supplier… so I guess that settles it."],
        ["W", "Tuesday morning, then. I'll put your name down. Don't forget to bring your safety shoes."]
      ],
      qs: [
        { q: "What are the speakers discussing?", o: ["A safety training session", "A job interview", "A new warehouse", "A supplier's prices"], a: 0 },
        { q: "What does the man mean when he says, “I guess that settles it”?", o: ["He refuses to attend", "He will take the Tuesday session", "He wants to cancel his meeting", "The supplier solved the problem"], a: 1 },
        { q: "What does the woman remind the man to do?", o: ["Sign a form", "Arrive early", "Call the supplier", "Bring safety shoes"], a: 3 }
      ] },
    { lines: [
        ["M", "Ms Petrova, I submitted my expense report for the Berlin trip two weeks ago, but I haven't been reimbursed yet."],
        ["W", "Let me look… Ah, I see. Your hotel receipt is missing. We can't process the claim without it."],
        ["M", "Really? I'm sure I attached it. Maybe it didn't upload properly."],
        ["W", "Probably. Could you email it to me directly? Once I have it, you should get the money with your next salary payment."]
      ],
      qs: [
        { q: "Why is the man contacting the woman?", o: ["He hasn't been reimbursed", "He wants to book a trip", "He lost his hotel key", "He wants a pay rise"], a: 0 },
        { q: "What is missing?", o: ["A train ticket", "A signature", "A flight number", "A hotel receipt"], a: 3 },
        { q: "When will the man probably receive the money?", o: ["Today", "With his next salary", "In two weeks", "After his next trip"], a: 1 }
      ] },
    { lines: [
        ["W", "So, the movers are coming on Saturday. Is everything packed?"],
        ["M", "Almost. The IT team will disconnect the computers on Friday evening, and they'll set them up in the new office on Sunday."],
        ["W", "Good. So everyone can start work in the new building on Monday morning?"],
        ["M", "That's the plan. The kitchen won't be ready until Wednesday, though: the fridge and the coffee machine are being delivered late."],
        ["W", "I'll send an email to let everyone know. People should bring their own lunch for the first few days."]
      ],
      qs: [
        { q: "What is the company preparing for?", o: ["A move to a new office", "A visit from clients", "A computer upgrade", "A holiday"], a: 0 },
        { q: "When will the computers be set up?", o: ["On Friday", "On Saturday", "On Sunday", "On Monday"], a: 2 },
        { q: "What will the woman tell employees?", o: ["To work from home", "To pack their computers", "To come in on Sunday", "To bring their own lunch"], a: 3 }
      ] },
    { lines: [
        ["M", "Hello, I'm calling about my subscription to your magazine. I've been charged twice this month."],
        ["W", "I'm very sorry about that, sir. Could you give me your customer number?"],
        ["M", "Sure, it's 4-8-1-7-2."],
        ["W", "Thank you. Yes, I can see the double payment. It was a technical error. I'll refund the second payment right away, and we'll also send you the next issue free of charge."],
        ["M", "That's very kind. How long will the refund take?"],
        ["W", "It should appear on your account within three to five working days."]
      ],
      qs: [
        { q: "Why is the man calling?", o: ["He wants to cancel his subscription", "He was charged twice", "He didn't receive the magazine", "He wants to change his address"], a: 1 },
        { q: "What does the woman offer?", o: ["A discount next year", "A gift card", "A free issue", "A new subscription"], a: 2 },
        { q: "How long will the refund take?", o: ["One day", "Three to five working days", "Two weeks", "One month"], a: 1 }
      ] },
    { lines: [
        ["M", "Did you see the conference programme? I'd really like to hear the talk on online marketing."],
        ["W", "Me too, but it's at the same time as our call with the Lisbon team."],
        ["M", "Oh, that's a pity. Can we move the call?"],
        ["W", "I'll ask them. If not, we could go to the session on customer data instead. It's straight after lunch."]
      ],
      graphic: { title: "Conference programme: Room B", head: ["Time", "Session"], rows: [["9:30", "Building a brand"], ["11:00", "Online marketing"], ["1:30", "Using customer data"], ["3:00", "Leading remote teams"]] },
      qs: [
        { q: "What does the man want to do?", o: ["Present at the conference", "Attend a talk on online marketing", "Meet the Lisbon team in person", "Leave the conference early"], a: 1 },
        { q: "What problem does the woman mention?", o: ["The talk has been cancelled", "The room is full", "They have a call at the same time", "The tickets are expensive"], a: 2 },
        { q: "Look at the graphic. What time is the session the woman suggests?", o: ["9:30", "11:00", "1:30", "3:00"], a: 2 }
      ] }
  );

  T.part4.push(
    { type: "Announcement", text: "Attention, passengers on flight GA 214 to Dublin. Due to a technical problem with the aircraft, this flight will now depart from gate 32 instead of gate 18. Boarding is expected to begin at ten fifteen, about thirty minutes later than scheduled. Passengers who need assistance should speak to a member of staff at the information desk. We apologise for the delay and thank you for your patience.",
      qs: [
        { q: "Who is the announcement for?", o: ["Airline staff", "Passengers on a flight to Dublin", "Visitors at a museum", "Train passengers"], a: 1 },
        { q: "What has changed?", o: ["The destination", "The ticket price", "The departure gate", "The airline"], a: 2 },
        { q: "What are passengers who need assistance asked to do?", o: ["Speak to staff at the information desk", "Call the airline", "Go to gate 18", "Wait on the plane"], a: 0 }
      ] },
    { type: "Telephone message", text: "Hi, this is Clara Nguyen from Westfield Catering, returning your call about the lunch for your board meeting on the twelfth. We can certainly provide sandwiches and salads for twenty people. However, you mentioned that some guests need gluten-free meals, and for those we'll need at least forty-eight hours' notice. Could you confirm the exact number by Monday? You can reach me at 0161 496 0725 until five. Thanks.",
      qs: [
        { q: "Why is the speaker calling?", o: ["To cancel an order", "To respond to a catering request", "To invite the listener to a meeting", "To ask for a payment"], a: 1 },
        { q: "What does the speaker need for the gluten-free meals?", o: ["A higher price", "A different menu", "A larger room", "Advance notice"], a: 3 },
        { q: "What does the speaker ask the listener to do by Monday?", o: ["Pay a deposit", "Visit the restaurant", "Confirm a number", "Choose a date"], a: 2 }
      ] },
    { type: "Advertisement", text: "Is your office ready for the summer? At CoolAir, we install and maintain air conditioning systems for businesses of every size. Our technicians are available seven days a week, and every installation comes with a free maintenance visit in the first year. This month only, customers who book online receive fifteen percent off. Visit our website to find out more, or call us for a free quote.",
      qs: [
        { q: "What does CoolAir provide?", o: ["Office furniture", "Cleaning services", "Air conditioning systems", "Security cameras"], a: 2 },
        { q: "What comes free with every installation?", o: ["A maintenance visit", "A second unit", "A year of electricity", "Delivery"], a: 0 },
        { q: "How can customers get a discount?", o: ["By paying in cash", "By booking online", "By recommending a friend", "By signing a two-year contract"], a: 1 }
      ] },
    { type: "Radio report", text: "In business news, the furniture company Holloway and Sons has announced that it will open a new factory just outside Leeds next spring. The factory is expected to create around three hundred jobs, most of them in production and logistics. The company's chief executive said the decision was made because demand for its products has grown sharply, especially online. Local officials welcomed the news, but some residents have raised concerns about increased traffic on nearby roads.",
      qs: [
        { q: "What is the report mainly about?", o: ["A company closing", "A new factory", "A traffic accident", "A local election"], a: 1 },
        { q: "According to the chief executive, why was the decision made?", o: ["Demand has increased", "Rents are cheaper", "The old factory is too old", "The government offered money"], a: 0 },
        { q: "What are some residents worried about?", o: ["Pollution", "Noise at night", "Job losses", "More traffic"], a: 3 }
      ] },
    { type: "Tour", text: "Good morning, everyone, and welcome to the Bellmont chocolate factory. My name is Hannah, and I'll be your guide today. The tour takes about an hour. We'll start in the room where the cocoa beans are roasted, then we'll see the production line, and we'll finish in our shop, where you can taste our newest flavours. For safety reasons, please don't touch any of the machines, and keep your hair net on at all times. Photos are allowed everywhere except on the production line. Now, if you'll follow me…",
      qs: [
        { q: "Where is the talk taking place?", o: ["In a restaurant", "In a museum", "In a chocolate factory", "In a supermarket"], a: 2 },
        { q: "Where will the tour end?", o: ["In the roasting room", "On the production line", "In the car park", "In the shop"], a: 3 },
        { q: "What are visitors NOT allowed to do?", o: ["Taste the chocolate", "Take photos on the production line", "Ask questions", "Wear a hair net"], a: 1 }
      ] },
    { type: "Meeting excerpt", text: "Before we finish, a quick update on the customer survey. We received over two thousand responses, which is our best result so far. Overall, customers are happy with our products, but many of them complained about how long it takes to get an answer from customer service. Some waited more than three days. I know what you're thinking: we've heard this before. But this time, we're going to act. From next month, we'll be hiring four more people for the support team, and I'd like each department to suggest one way of answering customers faster. Please send me your ideas by Friday.",
      qs: [
        { q: "What was the main complaint in the survey?", o: ["Product quality", "Slow customer service", "High prices", "Late deliveries"], a: 1 },
        { q: "Why does the speaker say, “I know what you're thinking: we've heard this before”?", o: ["To admit that the problem is not new", "To introduce a new product", "To ask listeners to repeat the information", "To criticise the survey"], a: 0 },
        { q: "What are the listeners asked to do?", o: ["Hire new staff", "Answer the survey", "Call unhappy customers", "Suggest ways to answer customers faster"], a: 3 }
      ] },
    { type: "Weather report", text: "And now the weather for the weekend. Friday will be cloudy but dry, with temperatures around fourteen degrees. On Saturday, strong winds and heavy rain are expected across the region, so if you're planning to go to the outdoor market in Riverside, you may want to change your plans. The good news is that the rain should clear by Sunday morning, and we'll have sunshine all day. Monday looks cooler, with a few showers in the afternoon.",
      graphic: { title: "Weekend forecast", head: ["Day", "Weather"], rows: [["Friday", "Cloudy"], ["Saturday", "Rain and wind"], ["Sunday", "Sunny"], ["Monday", "Showers"]] },
      qs: [
        { q: "What does the speaker suggest about the outdoor market?", o: ["It will be very busy", "It will close early", "People may want to change their plans", "It has moved indoors"], a: 2 },
        { q: "Look at the graphic. Which day would be best for an outdoor activity?", o: ["Friday", "Saturday", "Sunday", "Monday"], a: 2 },
        { q: "What will the weather be like on Monday?", o: ["Hot and sunny", "Cooler, with some showers", "Snowy", "Very windy"], a: 1 }
      ] },
    { type: "Introduction", text: "Good afternoon, and thank you all for coming. It's my pleasure to introduce our next speaker, Dr Amara Osei. Dr Osei has spent the last fifteen years studying how people use public spaces in cities, and her work has helped several local governments redesign their parks and squares. Today she'll be talking about how small changes, like adding benches or trees, can make a street safer and more welcoming. After her talk, there will be twenty minutes for questions, so please write them down as you listen. Dr Osei, over to you.",
      qs: [
        { q: "Who is Dr Osei?", o: ["A city mayor", "A landscape gardener", "A researcher on public spaces", "A conference organiser"], a: 2 },
        { q: "What will Dr Osei talk about?", o: ["How small changes can improve streets", "How to build new parks", "How to organise a conference", "How to raise money for cities"], a: 0 },
        { q: "What are listeners asked to do?", o: ["Turn off their phones", "Leave a review", "Sign up for a newsletter", "Write down their questions"], a: 3 }
      ] },
    { type: "Workshop excerpt", text: "In today's session, we're going to look at how to write a clear project budget. Many people make the mistake of listing every small cost in the same section. Instead, group your costs into a few main categories: staff, equipment, travel and so on. Look at the example on the screen. As you can see, staff costs are by far the largest part of this project, almost half the total. That's very common. Now, I'd like you to work in pairs and organise the costs on your handout into four categories. You have ten minutes.",
      graphic: { title: "Project budget (example)", head: ["Category", "Share"], rows: [["Staff", "48%"], ["Equipment", "27%"], ["Travel", "15%"], ["Other", "10%"]] },
      qs: [
        { q: "What is the workshop about?", o: ["Hiring staff", "Writing a project budget", "Buying equipment", "Planning business travel"], a: 1 },
        { q: "Look at the graphic. Which category is the second largest?", o: ["Staff", "Equipment", "Travel", "Other"], a: 1 },
        { q: "What will the listeners do next?", o: ["Watch a video", "Take a break", "Work in pairs", "Present their projects"], a: 2 }
      ] }
  );

  T.part5.push(
    { q: "All employees are required to wear their ID badges ______ in the building.", o: ["while", "during", "for", "since"], a: 0, ex: "While + a clause or a short phrase (while in the building). During + a noun (during the visit)." },
    { q: "The marketing director asked that the report be sent to her ______.", o: ["direct", "directly", "direction", "directed"], a: 1, ex: "An adverb describes how the action is done: sent directly." },
    { q: "Neither the manager ______ her assistant was available for comment.", o: ["or", "and", "nor", "but"], a: 2, ex: "Neither… nor." },
    { q: "Applications must be received ______ 5 p.m. on 30 June.", o: ["no longer", "not until", "no sooner", "no later than"], a: 3, ex: "No later than = at the latest (a deadline)." },
    { q: "Mr Allen has worked at the company ______ more than twenty years.", o: ["since", "for", "during", "from"], a: 1, ex: "For + a period of time; since + a starting point." },
    { q: "The new software is expected to ______ productivity by at least ten per cent.", o: ["rise", "arise", "increase", "go up"], a: 2, ex: "Increase can take an object (increase productivity). Rise, arise and go up cannot." },
    { q: "If the shipment ______ on time, we would not have lost the client.", o: ["arrived", "had arrived", "has arrived", "would arrive"], a: 1, ex: "Third conditional: if + past perfect, would have + past participle." },
    { q: "Ms Dubois is the candidate ______ experience best matches the job description.", o: ["who", "whom", "whose", "which"], a: 2, ex: "Whose expresses possession (her experience)." },
    { q: "The conference room is too small to ______ all the participants.", o: ["accompany", "account", "accumulate", "accommodate"], a: 3, ex: "Accommodate = have enough space for." },
    { q: "Please read the instructions ______ before using the machine.", o: ["careful", "carefully", "care", "carefulness"], a: 1, ex: "An adverb modifies the verb “read”." },
    { q: "The company's profits rose ______ in the last quarter.", o: ["significant", "significance", "significantly", "signify"], a: 2, ex: "An adverb after the verb “rose”." },
    { q: "Our office will be closed on Monday ______ the national holiday.", o: ["because", "due to", "although", "so that"], a: 1, ex: "Due to + a noun. Because + a clause (because it is a holiday)." },
    { q: "Ms Kim was promoted ______ her excellent results.", o: ["in spite of", "thanks to", "instead of", "in case of"], a: 1, ex: "Thanks to = because of (a positive cause)." },
    { q: "The manager suggested ______ the meeting until next week.", o: ["postpone", "to postpone", "postponing", "postponed"], a: 2, ex: "Suggest + -ing (or suggest that + clause), never suggest to do." },
    { q: "By the time the CEO arrived, the presentation ______.", o: ["already started", "has already started", "had already started", "is already starting"], a: 2, ex: "Past perfect: an action completed before another past action." },
    { q: "Visitors are kindly asked to refrain from ______ in the lobby.", o: ["smoke", "smoking", "to smoke", "smoked"], a: 1, ex: "Refrain from + -ing." },
    { q: "The contract will expire ______ the end of the month.", o: ["in", "on", "at", "to"], a: 2, ex: "At the end of." },
    { q: "The renovation was completed ______ schedule and under budget.", o: ["ahead", "before of", "in advance", "ahead of"], a: 3, ex: "Ahead of schedule = earlier than planned." },
    { q: "Mr Ito is ______ the most experienced engineer on the team.", o: ["very", "too", "so", "by far"], a: 3, ex: "By far + a superlative (by far the most experienced)." },
    { q: "Each department ______ responsible for its own budget.", o: ["are", "is", "were", "be"], a: 1, ex: "Each + a singular verb." },
    { q: "The survey results will be ______ at the next staff meeting.", o: ["presenting", "presented", "presentation", "present"], a: 1, ex: "Passive voice: will be + past participle." },
    { q: "We need to hire someone ______ can speak both Spanish and German.", o: ["which", "whose", "who", "whom"], a: 2, ex: "Who = the subject of the verb, for a person." },
    { q: "The hotel offers a ______ shuttle service to and from the airport.", o: ["complementary", "compliment", "complement", "complimentary"], a: 3, ex: "Complimentary = free. Complementary = that completes something else." },
    { q: "Sales have been ______ since the new advertising campaign started.", o: ["rise", "rising", "risen", "rose"], a: 1, ex: "Present perfect continuous: have been + -ing." },
    { q: "Please ______ that all windows are closed before you leave the office.", o: ["assure", "insure", "secure", "ensure"], a: 3, ex: "Ensure (that) = make sure. You assure a person; insure = protect with insurance." }
  );

  T.part6.push(
    { title: "Email", text: "To: Ms Lambert\nSubject: Your order #20931\n\nDear Ms Lambert,\nThank you for your recent order. We are writing to inform you that one of the items you ___1___, the oak desk lamp, is temporarily out of stock. We expect to receive new stock ___2___ two weeks. ___3___ Alternatively, if you would prefer to cancel this item, we will refund the full amount ___4___.\n\nKind regards,\nCustomer Service Team",
      gaps: [
        { o: ["order", "ordered", "ordering", "will order"], a: 1 },
        { o: ["within", "since", "until", "by"], a: 0 },
        { o: ["Our shop is open seven days a week.", "We will ship the rest of your order immediately and send the lamp as soon as it arrives.", "The lamp was designed in Denmark.", "Thank you for your feedback."], a: 1 },
        { o: ["immediate", "immediately", "immediacy", "more immediate"], a: 1 }
      ] },
    { title: "Notice", text: "NOTICE TO ALL TENANTS\n\nPlease be advised that the water supply to the building will be ___1___ off on Thursday 14 May from 9 a.m. to 1 p.m. while essential repairs are carried out. We recommend that you store some water ___2___ advance. ___3___ We apologise for any inconvenience and thank you for your ___4___.\n\nBuilding Management",
      gaps: [
        { o: ["turn", "turning", "turned", "turns"], a: 2 },
        { o: ["on", "in", "at", "for"], a: 1 },
        { o: ["The lifts will continue to operate normally.", "The building was built in 1965.", "Rent is due on the first of each month.", "New tenants are always welcome."], a: 0 },
        { o: ["understand", "understanding", "understood", "understandable"], a: 1 }
      ] },
    { title: "Staff newsletter", text: "STAFF NEWS\n\nAfter twelve years with the company, Peter Grant will retire at the end of this month. Peter joined us as a sales assistant and ___1___ became head of our international sales team. Under his leadership, exports have more than ___2___. ___3___ A farewell lunch will be held in the staff restaurant on Friday 28 June, and everyone is welcome. If you would like to contribute to his gift, please speak to Anita in Human Resources ___4___ Wednesday.",
      gaps: [
        { o: ["eventually", "eventual", "event", "eventful"], a: 0 },
        { o: ["double", "doubling", "doubled", "doubles"], a: 2 },
        { o: ["The restaurant serves lunch from noon.", "Sales assistants work in shifts.", "Peter will be greatly missed by his colleagues and clients.", "Human Resources is on the third floor."], a: 2 },
        { o: ["until", "by", "since", "during"], a: 1 }
      ] },
    { title: "Job advertisement", text: "JOIN OUR TEAM!\n\nGreenleaf Hotels is looking for an experienced receptionist for its Edinburgh hotel. The successful ___1___ will welcome guests, handle reservations and deal with enquiries by phone and email. Applicants should have at least two years' experience in a similar role and ___2___ excellent communication skills. ___3___ This is a full-time position, with some evening and weekend work. To apply, please send your CV ___4___ a short cover letter to the address below.",
      gaps: [
        { o: ["apply", "applicant", "application", "applied"], a: 1 },
        { o: ["possess", "possessing", "possessed", "possession"], a: 0 },
        { o: ["The hotel was renovated last year.", "Guests can check out until noon.", "Edinburgh is a popular destination.", "Knowledge of a second language would be an advantage."], a: 3 },
        { o: ["but", "or", "and", "so"], a: 2 }
      ] }
  );

  T.part7.push(
    { title: "Text message chain", text: "Ana Ruiz [9:12]: Mark, are you still at the client's office? The slides for the 11:00 presentation aren't on the shared drive.\nMark Lee [9:15]: Sorry! I saved them on my laptop. I'm on the train now, I'll be there at 10:30.\nAna Ruiz [9:17]: That's a bit tight. Can you email them to me now so I can print the handouts?\nMark Lee [9:19]: The file's too big for email. I can upload it to the drive in five minutes.\nAna Ruiz [9:20]: That works. I'll start setting up the room.\nMark Lee [9:21]: Thanks. Could you also ask reception for an extra chair? Ms Dalton is bringing her assistant.",
      qs: [
        { q: "Why does Ms Ruiz contact Mr Lee?", o: ["She cannot find the presentation slides", "The client cancelled the meeting", "She needs directions to the client's office", "The train is late"], a: 0 },
        { q: "At 9:20, what does Ms Ruiz most likely mean when she writes, “That works”?", o: ["The laptop is working again", "She agrees with Mr Lee's suggestion", "She has finished her work", "The printer has been fixed"], a: 1 },
        { q: "What is suggested about Ms Dalton?", o: ["She will not attend", "She works at reception", "She will come with another person", "She prepared the slides"], a: 2 }
      ] },
    { title: "Invoice", text: "WAVERLEY PRINT SERVICES\nInvoice no. 5521 · Date: 3 April\nCustomer: Fenwick Architects, 12 Mill Lane, Bristol\n\n500 business cards (double-sided): £85.00\n200 brochures (A4, 8 pages): £340.00\nDesign changes (2 hours): £90.00\nDelivery: FREE\nTotal: £515.00\n\nPayment is due within 30 days. A 2% discount applies if payment is received within 10 days.",
      qs: [
        { q: "What is the purpose of the document?", o: ["To request payment for printing work", "To advertise a new service", "To confirm a delivery date", "To offer a job"], a: 0 },
        { q: "Why was Fenwick Architects charged £90?", o: ["For delivery", "For business cards", "For design changes", "For a late payment"], a: 2 },
        { q: "How can the customer reduce the total?", o: ["By collecting the order", "By ordering more brochures", "By using a discount code", "By paying within ten days"], a: 3 }
      ] },
    { title: "Memo", text: "To: All staff\nFrom: Rachel Kim, Facilities Manager\nDate: 18 September\nSubject: New recycling system\n\nStarting Monday 25 September, we are introducing a new recycling system on every floor. Each kitchen will have four bins: paper, plastic, glass and general waste. Please note that coffee cups cannot go in the paper bin, as they contain a thin layer of plastic; they should be placed in general waste. To help everyone get used to the system, members of the Green Team will be available in the main kitchen on Monday and Tuesday between 12:00 and 2:00 to answer questions. Thank you for helping us reduce our waste.",
      qs: [
        { q: "What is the main purpose of the memo?", o: ["To introduce a new manager", "To announce a new recycling system", "To close the kitchens", "To advertise a coffee machine"], a: 1 },
        { q: "Where should coffee cups be put?", o: ["In the paper bin", "In the plastic bin", "In general waste", "In the glass bin"], a: 2 },
        { q: "What will the Green Team do?", o: ["Empty the bins every day", "Buy new bins", "Clean the kitchens", "Answer staff questions"], a: 3 }
      ] },
    { title: "Job advertisement", text: "PART-TIME BOOKKEEPER\nHarbour Dental Clinic is looking for a part-time bookkeeper to manage invoices, payroll and supplier payments. The position involves approximately 20 hours per week, and hours are flexible. Candidates must have at least three years of bookkeeping experience and be familiar with standard accounting software. Experience in the healthcare sector is desirable but not required.\nThe clinic offers a competitive hourly rate, free dental care and a friendly working environment. Interviews will take place in the week of 10 March.\nTo apply, send your CV to Dr Helen Marsh before 28 February.",
      qs: [
        { q: "What kind of position is advertised?", o: ["A full-time dentist", "A part-time bookkeeper", "A receptionist", "A software developer"], a: 1 },
        { q: "What is NOT a requirement for the job?", o: ["Three years of experience", "Knowledge of accounting software", "Experience in healthcare", "The ability to manage invoices"], a: 2 },
        { q: "What benefit is mentioned?", o: ["A company car", "Extra holidays", "A yearly bonus", "Free dental care"], a: 3 },
        { q: "By when should applications be sent?", o: ["Before 28 February", "Before 10 March", "By the end of March", "Within 20 days"], a: 0 }
      ] },
    { title: "Article", text: "LOCAL CAFÉ WINS NATIONAL AWARD\nThe Copper Kettle, a small café on Market Street, has been named Best Independent Café at this year's National Hospitality Awards. [1] The café was opened four years ago by former teacher Simon Hale, who had no previous experience in the food industry. [2] Judges praised the café's homemade cakes and its commitment to local suppliers: almost all its ingredients come from farms within thirty miles. [3] Mr Hale says the award will not change the café's character. \"We'll keep doing what we do, just with a bit more confidence,\" he said. [4] The café plans to extend its opening hours on Sundays from next month.",
      qs: [
        { q: "What is the article mainly about?", o: ["A new café opening", "A café receiving an award", "A shortage of local ingredients", "A teacher changing jobs"], a: 1 },
        { q: "What is mentioned about Mr Hale?", o: ["He used to work as a teacher", "He trained as a chef", "He owns several cafés", "He is one of the judges"], a: 0 },
        { q: "What will change next month?", o: ["The café's menu", "Its suppliers", "Its Sunday opening hours", "Its name"], a: 2 },
        { q: "In which of the positions marked [1], [2], [3] and [4] does the following sentence best belong? “He learned to bake by watching online videos.”", o: ["[1]", "[2]", "[3]", "[4]"], a: 1 }
      ] },
    { title: "Email", text: "From: Daniel Moreau\nTo: Priya Shah\nSubject: Visit to the Lyon plant\n\nDear Priya,\nThank you for organising next week's visit. Unfortunately, I have to ask you to change the date. Our CEO has just scheduled a board meeting for Wednesday, and I need to attend. Would Thursday or Friday be possible instead? Also, two engineers from our quality team would like to join the tour, so we will be four people in total rather than two. If you need their names for security reasons, I can send them today.\nBest regards,\nDaniel",
      qs: [
        { q: "Why is Mr Moreau writing?", o: ["To cancel a contract", "To change the date of a visit", "To invite Ms Shah to a board meeting", "To complain about a tour"], a: 1 },
        { q: "What is indicated about the visit?", o: ["More people will attend than planned", "It will take place on Wednesday", "It has been cancelled", "It will be shorter than planned"], a: 0 },
        { q: "What does Mr Moreau offer to do?", o: ["Pay for the tour", "Book a hotel", "Send the engineers' names", "Visit on Wednesday"], a: 2 }
      ] },
    { title: "Online review", text: "★★★☆☆ Reviewed by Kenji T.\nI stayed at the Lakeside Inn for three nights during a business trip. The location is excellent: the conference centre is a five-minute walk away, and the views of the lake are wonderful. The staff were friendly and helpful, especially at the front desk. However, the Wi-Fi was very slow in my room, which was a real problem because I had to work in the evenings. Breakfast was also disappointing: there was little choice and the coffee was cold. If the hotel improves these two things, I would happily stay again.",
      qs: [
        { q: "Why did Kenji stay at the hotel?", o: ["He was on holiday", "He was on a business trip", "He was visiting family", "He was attending a wedding"], a: 1 },
        { q: "What did he like about the hotel?", o: ["The breakfast", "The internet connection", "The price", "Its location"], a: 3 },
        { q: "What is suggested about Kenji?", o: ["He needed to work in his room", "He will never return", "He works at the conference centre", "He travelled with his family"], a: 0 }
      ] },
    { title: "Web page", text: "CITY MUSEUM: GROUP VISITS\nGroups of 10 or more people receive a 20% discount on admission. Guided tours (60 minutes) are available in English, French and Spanish and must be booked at least two weeks in advance.\nOpening hours: Tuesday to Sunday, 10:00 to 18:00. Closed on Mondays.\nSchool groups: free admission on weekday mornings until 12:00.\nPlease note: the Modern Art wing will be closed for renovation from 1 to 15 November.",
      qs: [
        { q: "Who can get a discount?", o: ["Groups of at least ten people", "Visitors on Mondays", "Visitors who book online", "Members of the museum"], a: 0 },
        { q: "What is required for a guided tour?", o: ["A minimum of twenty people", "Speaking English", "Booking two weeks ahead", "Visiting on a weekday"], a: 2 },
        { q: "What will happen in early November?", o: ["The museum will close completely", "Part of the museum will be closed", "Prices will increase", "School groups will have to pay"], a: 1 }
      ] },
    { title: "Double passage: advertisement + email", docs: [
        { title: "Advertisement", text: "SMALL BUSINESS DIGITAL SUMMIT\nSaturday 12 October, Grand Hall, Birmingham\nLearn how to grow your business online!\n• Morning workshops: social media, online advertising, website basics\n• Afternoon panel: \"Selling abroad\"\n• Lunch and networking included\nEarly-bird price: £90 (until 15 September). Standard price: £120.\nGroups of three or more from the same company: 10% off." },
        { title: "Email", text: "To: Summit registration team\nFrom: Laura Pike\nDate: 20 September\nSubject: Registration\n\nHello,\nI would like to register three people from my company, Pike & Daughters Bakery, for the summit on 12 October. We are especially interested in the online advertising workshop, as we are about to launch an online shop. Could you confirm the total price for our group? I'm sorry we missed the early-bird offer: I only heard about the event last week. Also, one of my colleagues uses a wheelchair. Is the Grand Hall fully accessible?\nThank you,\nLaura Pike" }
      ],
      qs: [
        { q: "What is the summit mainly about?", o: ["Opening a bakery", "Developing a business online", "Finding new employees", "Travelling abroad"], a: 1 },
        { q: "What is included in the price?", o: ["A hotel room", "Transport", "Lunch", "A website"], a: 2 },
        { q: "Why is Ms Pike interested in the advertising workshop?", o: ["Her company is launching an online shop", "She is one of the speakers", "She works in advertising", "She wants to sell abroad"], a: 0 },
        { q: "How much will Ms Pike's company most likely pay per person?", o: ["£81", "£90", "£108", "£120"], a: 2 },
        { q: "What does Ms Pike ask about?", o: ["Parking", "Vegetarian food", "Hotel prices", "Accessibility"], a: 3 }
      ] },
    { title: "Double passage: notice + email", docs: [
        { title: "Notice", text: "FITZONE GYM: CHANGES FROM 1 MARCH\n• Monthly membership will increase from £35 to £39.\n• The swimming pool will open at 6:30 a.m. instead of 7:00 a.m.\n• Group classes must now be booked through our app. Places are limited to 20 per class.\n• Members who have paid for a full year in advance will continue to pay the old price until their membership is renewed.\nThank you for being a member of FitZone!" },
        { title: "Email", text: "To: FitZone members' team\nFrom: Oliver Grant\nDate: 4 March\nSubject: Yoga class\n\nHello,\nI've been a member for three years and I usually go to the Tuesday evening yoga class. Last night, I was told I couldn't join because I hadn't booked on the app. The class wasn't even full! I don't have a smartphone, so I can't use the app. Is there another way to book? Also, I paid for a full year in January, so I assume the price change doesn't affect me. Could you confirm?\nOliver Grant" }
      ],
      qs: [
        { q: "What is the purpose of the notice?", o: ["To announce changes at the gym", "To advertise a new gym", "To apologise for a closure", "To invite members to a party"], a: 0 },
        { q: "What change is mentioned about the pool?", o: ["It will close earlier", "It will open earlier", "It will be renovated", "It will cost extra"], a: 1 },
        { q: "Why couldn't Mr Grant join the yoga class?", o: ["The class was full", "He arrived late", "He hadn't booked on the app", "His membership had expired"], a: 2 },
        { q: "Why can't Mr Grant use the app?", o: ["He doesn't have a smartphone", "He forgot his password", "The app isn't working", "He has never downloaded it"], a: 0 },
        { q: "What price is Mr Grant most likely paying at the moment?", o: ["The new monthly price", "The old price", "A student price", "Nothing until March"], a: 1 }
      ] },
    { title: "Double passage: schedule + email", docs: [
        { title: "Schedule", text: "NEW EMPLOYEE TRAINING: WEEK 1\nMonday 9:00–12:00: Welcome and company presentation (Room 2)\nMonday 13:30–16:00: IT systems and security (Room 5)\nTuesday 9:00–12:00: Health and safety (Warehouse)\nWednesday 9:00–15:00: Customer service skills (Room 2)\nThursday: Shadowing a colleague in your department\nFriday 10:00: Meeting with your manager" },
        { title: "Email", text: "From: Hiro Sato\nTo: Emma Clarke, Human Resources\nSubject: Training next week\n\nDear Emma,\nThank you for sending the schedule. I'm looking forward to starting on Monday. I have a small problem: I have a hospital appointment on Tuesday morning that I can't change. Would it be possible to do the health and safety session on another day? I understand it is required before I can work in the warehouse. Also, could you tell me who my manager will be? I'd like to prepare a few questions for our meeting.\nBest wishes,\nHiro Sato" }
      ],
      qs: [
        { q: "What is the schedule for?", o: ["A conference", "Training for new employees", "A warehouse inspection", "A customer event"], a: 1 },
        { q: "Where will the IT session take place?", o: ["Room 2", "The warehouse", "Room 5", "The manager's office"], a: 2 },
        { q: "Which session will Mr Sato probably miss?", o: ["Welcome and company presentation", "Health and safety", "Customer service skills", "The meeting with his manager"], a: 1 },
        { q: "What is indicated about the health and safety session?", o: ["It is optional", "It takes place online", "It lasts all day", "It is required to work in the warehouse"], a: 3 },
        { q: "What does Mr Sato want to know?", o: ["The name of his manager", "His salary", "The address of the hospital", "The time of the IT session"], a: 0 }
      ] },
    { title: "Triple passage: advertisement + two emails", docs: [
        { title: "Advertisement", text: "OFFICE SPACE TO LET: RIVERSIDE BUSINESS CENTRE\nUnit A: 45 m², ground floor, £1,200/month\nUnit B: 80 m², first floor, river view, £2,100/month\nUnit C: 120 m², second floor, includes a meeting room, £3,000/month\nAll units: high-speed internet, 24-hour security, shared kitchen. Minimum lease: 12 months.\nFree parking for tenants." },
        { title: "Email", text: "From: Sofia Marin\nTo: Riverside Business Centre\nDate: 2 May\n\nHello,\nI run a small translation agency with six employees, and we are looking for a new office from 1 July. We need space for six desks and, ideally, a room where we can meet clients. Our budget is around £2,500 a month. We would also need to park three cars. Could we arrange a visit next week?\nSofia Marin" },
        { title: "Email", text: "From: Tom Briggs, Riverside Business Centre\nTo: Sofia Marin\nDate: 3 May\n\nDear Ms Marin,\nThank you for your interest. Unit C would be ideal for your team, as it includes a private meeting room, but I realise it is above your budget. Unit B could easily hold six desks, and clients can be received in our shared conference room on the ground floor for £25 an hour. Parking is free for all tenants, with up to four spaces per unit. I can show you both units on Tuesday at 10:00 or Thursday at 15:00.\nBest regards,\nTom Briggs" }
      ],
      qs: [
        { q: "What is true about all the units?", o: ["They have a river view", "They include a meeting room", "They have 24-hour security", "They can be rented for six months"], a: 2 },
        { q: "What kind of business does Ms Marin run?", o: ["A law firm", "A translation agency", "A café", "A security company"], a: 1 },
        { q: "Why does Mr Briggs suggest Unit B?", o: ["It fits her budget", "It is the largest", "It has a private kitchen", "It is on the ground floor"], a: 0 },
        { q: "How could Ms Marin's team meet clients if they rent Unit B?", o: ["By using the kitchen", "By meeting in the car park", "By moving to Unit C", "By renting a shared conference room"], a: 3 },
        { q: "What is indicated about parking?", o: ["It costs £25 an hour", "Ms Marin's three cars can park for free", "Only two spaces are available", "It is not available on Thursdays"], a: 1 }
      ] },
    { title: "Triple passage: web page + two emails", docs: [
        { title: "Web page", text: "NORTHLINK RAIL: DELAY COMPENSATION\nIf your train arrives late, you may be entitled to compensation:\n• 15–29 minutes late: 25% of the ticket price\n• 30–59 minutes late: 50% of the ticket price\n• 60 minutes or more: 100% of the ticket price\nClaims must be made within 28 days of the journey. Please include a photo of your ticket." },
        { title: "Email", text: "To: Northlink Customer Relations\nFrom: Grace Adeyemi\nDate: 9 June\nSubject: Delay on 6 June\n\nHello,\nOn 6 June, I travelled from York to Newcastle on the 7:05 train. Because of a signal failure, we arrived very late, and I missed the start of an important meeting. My ticket cost £48. I have attached a photo of it. I would like to receive the compensation I'm entitled to.\nGrace Adeyemi" },
        { title: "Email", text: "To: Grace Adeyemi\nFrom: Northlink Customer Relations\nDate: 12 June\n\nDear Ms Adeyemi,\nWe are sorry for the delay to your journey on 6 June. We have checked our records and can confirm that your train arrived 35 minutes late. We have therefore approved your claim, and the money will be paid into your bank account within five working days. As a gesture of goodwill, we have also added a £10 travel voucher, which you can use on any Northlink journey before 31 December.\nKind regards,\nNorthlink Customer Relations" }
      ],
      qs: [
        { q: "What is the purpose of the web page?", o: ["To explain compensation for late trains", "To advertise cheaper tickets", "To announce a new route", "To list train times"], a: 0 },
        { q: "Why was Ms Adeyemi's train late?", o: ["Bad weather", "A strike", "A signal failure", "A problem with the doors"], a: 2 },
        { q: "How much compensation will Ms Adeyemi most likely receive for the delay?", o: ["£12", "£24", "£48", "£10"], a: 1 },
        { q: "What did Northlink add to the compensation?", o: ["A first-class ticket", "A refund for her meeting", "A letter from the driver", "A travel voucher"], a: 3 },
        { q: "In the second email, the word “approved” is closest in meaning to", o: ["accepted", "rejected", "checked", "received"], a: 0 }
      ] },
    { title: "Triple passage: memo + results + email", docs: [
        { title: "Memo", text: "To: All staff\nFrom: Julia Brandt, HR Manager\nSubject: Team day\n\nThis year's team day will take place on Friday 20 September. To choose the activity, we are asking all employees to vote for one of three options: a cooking class, a guided hike in the hills, or an escape room challenge. Please vote using the online form by 6 September. The activity with the most votes will be chosen. Transport and lunch will be provided." },
        { title: "Results", text: "TEAM DAY VOTE: RESULTS (98 votes)\nCooking class: 31 votes\nGuided hike: 42 votes\nEscape room challenge: 25 votes" },
        { title: "Email", text: "From: Julia Brandt\nTo: All staff\nDate: 9 September\nSubject: Team day: update\n\nThank you to everyone who voted. As promised, we have booked the most popular activity. However, the long-range forecast for 20 September is poor, so we have decided to keep the second most popular choice as a back-up plan. We will make a final decision on 18 September and let you know by email. Please bring comfortable shoes and a waterproof jacket, just in case.\nJulia" }
      ],
      qs: [
        { q: "What is the purpose of the memo?", o: ["To ask employees to vote for an activity", "To announce a new HR manager", "To cancel the team day", "To invite clients to an event"], a: 0 },
        { q: "What will the company provide on the team day?", o: ["Shoes and jackets", "A day off on Monday", "Transport and lunch", "Cooking equipment"], a: 2 },
        { q: "Which activity received the most votes?", o: ["The cooking class", "The guided hike", "The escape room challenge", "A boat trip"], a: 1 },
        { q: "What is the back-up plan?", o: ["The cooking class", "The escape room challenge", "Staying in the office", "Changing the date"], a: 0 },
        { q: "Why might the plan change?", o: ["Not enough people voted", "The hike is too expensive", "The weather may be bad", "The HR manager is away"], a: 2 }
      ] }
  );
})();
