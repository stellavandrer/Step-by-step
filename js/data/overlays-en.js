/* English versions of the remaining content (total immersion).
   When the app starts, each English text replaces the French one,
   and the French one is kept as its translation (field_fr). */

window.VOCAB_TITLES_EN = {
  bases: "The essentials", temps: "Time and days", famille: "Family", maison: "At home",
  nourriture: "Food and drink", verbes: "Essential verbs", adjectifs: "Describing things (adjectives)",
  ville: "In town and travelling", travail: "Work and studies", corps: "Body and health",
  shopping: "Clothes and shopping", conversation: "Keeping a conversation going",
  fauxamis: "False friends (traps!)", emotions: "Emotions and personality",
  loisirs: "Hobbies and free time", meteo: "Weather and nature",
  phrasal1: "Essential phrasal verbs", boulot: "The professional world", opinion: "Giving your opinion",
  tech: "Media and technology", societe: "Environment and society", relations: "Relationships and feelings",
  phrasal2: "Phrasal verbs (level 2)", idioms1: "Common idioms", collocations: "Make, do, take, have",
  liaison: "Linking words", argument: "Arguing and debating", fauxamis2: "False friends (level 2)",
  soutenu: "Formal verbs", idioms2: "Advanced idioms", nuance: "Nuanced adjectives",
  hedging: "Softening what you say", abstrait: "Abstract ideas"
};

window.SPEAKING_TITLES_EN = {
  intro: "Introducing yourself", survival: "Survival phrases", cafe: "At the café, at the restaurant",
  travel: "Travelling", talk: "Making conversation", th: "Special: the “th” sound",
  avis: "Giving your opinion", work: "At work", nuance: "Arguing and nuancing",
  phrasal: "Phrasal verbs in context", idioms: "Idioms", formal: "Formal register"
};

window.SOUNDS_EN = [
  { title: "The “th” sound", how: "Put the tip of your tongue <b>between your teeth</b> and blow. It's not “s”, “z” or “f”. There are two versions: a soft, breathy one (<i>think</i>) and a voiced one (<i>this</i>)." },
  { title: "The “h” you pronounce", how: "In French, the h is silent. In English, you <b>breathe out</b>, like when you fog up a window. Without the breath, the word changes!" },
  { title: "Short “i” and long “ee”", how: "The <b>short i</b> (<i>ship</i>) is between the French « i » and « é », very short and relaxed. The <b>long ee</b> (<i>sheep</i>) is a long « iii », with a smile." },
  { title: "Short and long “u”", how: "<i>full</i> is short, the mouth almost relaxed. <i>fool</i> is a long « ou », with round lips." },
  { title: "The “a” in cat / cut", how: "<i>cat</i>: open your mouth wide, between « a » and « è ». <i>cut</i>: a short, neutral « a », almost « eu ». <i>cart</i>: a long, deep « a »." },
  { title: "The English “r”", how: "The English r doesn't come from the throat. Curl your tongue back slightly <b>without touching the roof of your mouth</b>, lips a little rounded. In British English, a final r is often silent (<i>car</i> ≈ “caa”)." },
  { title: "The “w” sound", how: "Like the « ou » in « oui », very quick. Your lips start round, then open. Don't confuse it with “v”." },
  { title: "Word stress", how: "In French, all syllables have almost the same strength. In English, <b>one syllable is stronger</b> than the others, and the wrong stress can make a word hard to understand. Listen and exaggerate the syllable in capital letters." }
];

window.READINGS_EN = {
  emma: { intro: "A young woman introduces herself. Very short sentences, present simple and “to be”.",
    questions: [
      { q: "Where does Emma live?", o: ["In Manchester", "In Bristol", "In London"] },
      { q: "What is her job?", o: ["Doctor", "Nurse", "Teacher"] },
      { q: "What does Biscuit do all day?", o: ["He plays", "He eats", "He sleeps"] }
    ] },
  cafe: { intro: "A conversation in a café. The sentences you'll really use when you travel.",
    questions: [
      { q: "What does Stella order?", o: ["A tea and a muffin", "A cappuccino and a croissant", "A black coffee"] },
      { q: "Where does Stella eat?", o: ["She takes it away", "She eats in"] },
      { q: "How much is it?", o: ["£5.60", "£6.50", "£16.50"] }
    ] },
  routine: { intro: "A graphic designer's typical day. Present simple with “he” (watch the -s!).",
    questions: [
      { q: "How does Tom get to work?", o: ["By car", "By underground", "By bike"] },
      { q: "What does he do on the Tube?", o: ["He sleeps", "He reads or listens to music", "He works"] },
      { q: "What do Tom and Priya do in the evening?", o: ["They go to a restaurant", "They cook and watch a series", "They do sport"] }
    ] },
  cat: { intro: "A short story in the past. Look for the irregular verbs (went, saw, found…).",
    questions: [
      { q: "Where does Pepper usually sleep?", o: ["On the bed", "On the sofa", "In the kitchen"] },
      { q: "What did Lucy do in the afternoon?", o: ["She called the police", "She made posters", "She went to the vet"] },
      { q: "Where was Pepper?", o: ["At a neighbour's house", "In a tree", "On top of the wardrobe"] }
    ] },
  brighton: { intro: "An email to a friend after a weekend by the sea. Past tenses and useful expressions.",
    questions: [
      { q: "How did they travel to Brighton?", o: ["By car", "By train", "By bus"] },
      { q: "What happened to Mark on the pier?", o: ["He won a teddy bear", "He lost all his money", "He fell over"] },
      { q: "What was the weather like on Sunday?", o: ["It was sunny", "It rained", "It snowed"] }
    ] },
  sleep: { intro: "A short popular-science article. Longer, with more vocabulary: take your time and click on the words.",
    questions: [
      { q: "How much of our lives do we spend asleep?", o: ["A quarter", "A third", "Half"] },
      { q: "Why does sleep help you learn a language?", o: ["It gives you energy", "The brain stores memories", "You dream in English"] },
      { q: "How many hours do most adults need?", o: ["5 to 6", "7 to 9", "10 to 12"] }
    ] },
  adult: { intro: "An encouraging article about learning a language as an adult. Present perfect, comparatives, reported speech.",
    questions: [
      { q: "According to the text, what are children better at?", o: ["Understanding grammar", "Copying accents", "Staying motivated"] },
      { q: "How long did Maria practise every day?", o: ["Five minutes", "Twenty minutes", "Two hours"] },
      { q: "What is the biggest change for Maria?", o: ["She has no accent", "She isn't afraid to speak any more", "She found a job in London"] },
      { q: "According to the experts, what matters most?", o: ["Talent", "Age", "Regular practice"] }
    ] },
  tokyo: { intro: "A travel story in the past. Look for the past perfect (had dreamed, had taken, had forgotten).",
    questions: [
      { q: "Why did she get lost?", o: ["She had taken the wrong line", "The underground had broken down", "She had fallen asleep"] },
      { q: "Why couldn't she use her phone?", o: ["She had lost it", "The battery was dead", "There was no signal"] },
      { q: "What did the elderly man do?", o: ["He drew her a map", "He walked with her to the temple", "He called a taxi"] }
    ] },
  fourday: { intro: "An article about the four-day week. Look for the linking words: however, although, moreover, as a result…",
    questions: [
      { q: "What did many companies notice during the British trial?", o: ["Productivity fell", "Productivity stayed stable", "Salaries went down"] },
      { q: "What argument do supporters give?", o: ["Companies make more money", "Young people are attracted by more free time", "Hospitals work better"] },
      { q: "What limit do critics point out?", o: ["The model doesn't suit every sector", "Employees get bored", "It's illegal in some countries"] },
      { q: "What is the conclusion of the article?", o: ["The four-day week will be adopted everywhere", "It's a failure", "It's too early to say, but the traditional model is no longer the only one"] }
    ] },
  advice: { intro: "A magazine's advice column: a reader's letter and the columnist's reply. Wish, should, might be worth…",
    questions: [
      { q: "Why did the reader move to London?", o: ["To study", "For their dream job", "To follow their partner"] },
      { q: "What is Helen's first piece of advice?", o: ["Go home immediately", "Don't give up yet", "Change jobs"] },
      { q: "Which activity does Helen NOT mention?", o: ["A choir", "A running club", "A cooking class"] },
      { q: "For Helen, if nothing changes after a real effort, going home would be…", o: ["a failure", "a choice", "a mistake"] }
    ] },
  procrastination: { intro: "An accessible psychology article. Vocabulary of emotions and phrasal verbs (put off, end up).",
    questions: [
      { q: "According to psychologists, procrastination is mainly linked to…", o: ["laziness", "our emotions", "a lack of intelligence"] },
      { q: "Why is it called a vicious circle?", o: ["Guilt makes us avoid the task even more", "We work too much", "Deadlines are too short"] },
      { q: "Which technique is suggested?", o: ["Working at night", "Breaking the task into small steps", "Deleting your phone"] }
    ] },
  multitasking: { intro: "A nuanced essay. Notice the hedging: may well, arguably, it remains unclear whether…",
    questions: [
      { q: "According to the text, what does the brain really do when we “multitask”?", o: ["It processes two tasks in parallel", "It switches quickly from one task to another", "It ignores the less important task"] },
      { q: "What remains unclear about habitual multitaskers?", o: ["Whether they are more intelligent", "Whether multitasking causes their attention problems or the other way round", "Whether they work faster"] },
      { q: "When is doing two things at once not a problem?", o: ["When one of them is automatic", "When you are young", "When you have slept well"] },
      { q: "What is the author's tone?", o: ["Categorical and alarmist", "Nuanced and careful", "Humorous"] }
    ] },
  keeper: { intro: "A literary short story. Rich vocabulary, past perfect, subtle irony: read it twice, the second time out loud.",
    questions: [
      { q: "What did the letter announce?", o: ["A pay rise", "The automation of the lighthouse", "An inspector's visit"] },
      { q: "How did Thomas react to the letter?", o: ["He got angry", "He put it away without talking about it", "He wrote to complain"] },
      { q: "What does the note at the end show?", o: ["His anger at the administration", "His attachment to the lighthouse, almost as if it were a person", "That he plans to come back"] },
      { q: "“A light it would never know he had kept” suggests that…", o: ["Thomas's work was invisible to the people he helped", "the boat sank", "Thomas knew the fishermen"] }
    ] },
  boredom: { intro: "An opinion column. Notice the inversion (Not once did I…, Little did I know…) and the cleft sentences (What we tend to forget is…).",
    questions: [
      { q: "According to the author, what is boredom for?", o: ["Nothing, it's a waste of time", "It's a signal that pushes us to look for something better", "Physical rest"] },
      { q: "What does the author say about the creativity experiment?", o: ["It definitely proves the effect", "The effect is debatable, but the idea is old", "It has been disproved"] },
      { q: "What did the author do on summer afternoons as a child?", o: ["Watched television", "Invented games, wrote and read", "Slept"] },
      { q: "What does the author suggest?", o: ["Throwing your phone away", "Sometimes resisting the reflex to reach for your phone", "Doing a boring task every day"] }
    ] }
};

window.PROMPTS_EN_PHRASES_NOTE = "Prompts are already in English (with a French translation).";

window.LEVELS_EN = {
  A1: { name: "Elementary",
    can: ["Introduce yourself and someone else", "Understand and use very simple everyday phrases", "Ask and answer simple questions (where you live, what you like)"],
    beyond: ["Listen to songs you like with the lyrics in front of you", "Switch your phone to English"] },
  A2: { name: "Pre-intermediate",
    can: ["Talk about yourself, your family and your work", "Get by in a shop, a café, a station", "Tell simply what you did yesterday or on holiday"],
    beyond: ["Read graded readers (Oxford Bookworms, Penguin Readers)", "Watch series you've already seen in French, with English subtitles", "Listen to “6 Minute English” from the BBC"] },
  B1: { name: "Intermediate",
    can: ["Travel on your own in an English-speaking country", "Tell a story, an experience, a dream", "Give your opinion and justify it simply", "Understand the main points of a clear conversation on a familiar topic"],
    beyond: ["Start talking with real people (language exchange or online lessons)", "Read your first real novel (Wonder, Harry Potter)", "Watch series you don't already know"] },
  B2: { name: "Upper-intermediate",
    can: ["Talk with a native speaker easily, without too much effort on either side", "Understand most series, films and articles", "Argue, nuance and defend a point of view", "Work in English in your field (design)"],
    beyond: ["One conversation a week with an English speaker", "Read the press and contemporary novels", "Write in English: emails, posts, a journal"] },
  C1: { name: "Advanced",
    can: ["Understand long, demanding texts and implicit meaning", "Express yourself fluently and spontaneously, without searching for words", "Use English flexibly at work, socially or to study", "Adapt your register: informal, professional, formal"],
    beyond: ["Live part of your life in English: books, podcasts, news, social media", "A long stay in an English-speaking country, if possible", "Have a teacher correct your writing to polish the last mistakes"] },
  C2: { name: "Proficient",
    can: ["Understand with ease virtually everything you hear or read, including irony, implied meaning and cultural references", "Express yourself spontaneously, very fluently and precisely, conveying the finest shades of meaning", "Summarise information from different sources into a coherent presentation", "Write complex, elegant texts: essays, reviews, reports, literary pieces"],
    beyond: ["Read classic and contemporary English literature in the original", "Debate, present and negotiate in English almost as in your own language", "Take the Cambridge C2 Proficiency to certify your level"] }
};

window.METHODS_EN = [
  { title: "Spaced repetition",
    science: "We forget what we've just learnt very quickly (Ebbinghaus's forgetting curve). Reviewing something just before you forget it, at longer and longer intervals, makes it stick. It's one of the two techniques rated “high utility” in the major review by Dunlosky and colleagues (2013), and the effect is confirmed by Cepeda and colleagues' meta-analysis (2006).",
    site: "Vocabulary cards come back after 1, 3, 7, 14 and then 30 days. Grammar lessons too: a finished lesson comes back in your grammar review after 1, 3, 7, 21 and then 60 days.",
    you: "Do your reviews every day, even for 5 minutes. Missing one day is fine; missing five makes everything fall apart." },
  { title: "Active recall (the testing effect)",
    science: "Searching your memory for an answer strengthens it much more than re-reading. In Roediger and Karpicke's study (2006), students who tested themselves remembered much more a week later than those who re-read. Re-reading or highlighting gives a feeling of mastery, but you don't remember much.",
    site: "Everything ends with a test. The cards ask you to find the answer before you see it. The writing mode makes you produce the word.",
    you: "Before you flip a card, really say the answer in your head (or out loud). If you hesitate, choose “Hard”: it's honest, and it works." },
  { title: "Mixed reviews (interleaving)",
    science: "Mixing different types of exercises forces the brain to identify which rule applies, instead of applying the same one mechanically. It's harder at the time, but you remember and transfer better (Rohrer and Taylor, 2007). This kind of “desirable difficulty” is a key principle of long-term learning.",
    site: "The grammar review mixes questions from several lessons. Difficult cards are asked from French to English, which takes more effort.",
    you: "If an exercise feels too easy, it's time to move on to something harder." },
  { title: "The four strands of balanced learning",
    science: "The linguist Paul Nation (2007) shows that good learning combines four things in roughly equal parts: understanding (reading, listening), expressing yourself (speaking, writing), studying the language (grammar, vocabulary) and building fluency (doing what you already know quickly and easily).",
    site: "Your daily programme covers all four strands: words and grammar, reading and dictation, speaking, and fluency exercises (re-reading a known text, the 4-3-2 challenge).",
    you: "Don't only do flashcards: it's tempting because it's quick, but without reading and speaking, you'll know words without knowing how to use them." },
  { title: "Read and listen a lot, at the right level",
    science: "We acquire a language by understanding messages (Krashen). But to understand a text without help, you need to know about 98% of the words (Hu and Nation, 2000): one unknown word in fifty. Beyond that, you decode instead of reading, and you get discouraged.",
    site: "The texts are organised by level, every word translates with one click, and the recommended books go from the simplest to the most demanding.",
    you: "Choose texts that are almost easy. If you look up more than 2 or 3 words per page, take a simpler book: you'll progress faster, not slower." },
  { title: "Speak for real (and early)",
    science: "Understanding isn't enough to speak. When you have to express yourself, you notice what you're missing and try to fill the gap (Swain's “output hypothesis”). Repeating just after a model (shadowing) trains your ear, your pronunciation and your rhythm at the same time.",
    site: "Phrases to repeat with speech recognition, and the “Speak freely” exercise, which makes you answer a real question out loud before you see a model answer.",
    you: "Speak out loud, even alone, even with mistakes. One minute of speaking is worth more than an hour of silent reading for your oral skills." },
  { title: "The 4-3-2 challenge (fluency)",
    science: "A classic language-teaching technique (Maurice, 1983, made popular by Nation): you say the same thing three times, in 4 minutes, then 3, then 2. Because the content is ready, your brain focuses on fluency, and the sentences come out faster and better.",
    site: "In “Speak freely”, after your first answer, the 4-3-2 challenge asks you to say the same thing again in less time, twice (adapted to your level).",
    you: "Don't look for new ideas in rounds 2 and 3: say the same thing, faster." },
  { title: "Train your ear with several voices",
    science: "Sounds that don't exist in French (ship/sheep, th, h) must first be heard before they can be pronounced. Phonetic training studies (Logan, Lively and Pisoni, 1991) show that people learn much better when they hear these sounds in many different voices.",
    site: "The “Train your ear” game makes you recognise pairs of similar words, spoken by different voices. And the dictations train your listening every day.",
    you: "A few minutes several times a week is enough. Then repeat the words, exaggerating the difference." },
  { title: "Make it personal: talk about your life",
    science: "We remember much better what we connect to ourselves (the “self-reference effect”, Rogers and colleagues, 1977), and what we produce ourselves rather than what we read (the “generation effect”, Slamecka and Graf, 1978).",
    site: "Every lesson ends with “Your turn”: you write three true sentences about your life with the rule of the day, then you listen to them. Every unit also has a writing task.",
    you: "Write sentences that really concern you: your work as a designer, your family and friends, your plans. Those are the ones you'll need." },
  { title: "A habit rather than motivation",
    science: "Motivation goes up and down, habits stay. Saying precisely “When [situation], I will [action]” (an “implementation intention”) clearly increases the chances of doing it: it's one of the most solid effects in the psychology of motivation (Gollwitzer and Sheeran, 2006).",
    site: "On the home page, “My routine” makes you choose your fixed moment for English. The streak and the daily programme do the rest.",
    you: "Attach English to a habit you already have: your morning coffee, your commute, the moment after dinner." },
  { title: "Sleep on what you learnt",
    science: "Sleep consolidates the memories of the day. Reviewing vocabulary in the evening, then sleeping, helps you remember it the next day.",
    site: "Nothing special to do: this one is advice for you.",
    you: "If you can, review your cards at the end of the day, and do your lesson or speaking practice in the morning, when you're fresh." }
];

window.BOOKS_EN = [
  { label: "To start (right now)", note: "Books written specially for learners, with limited vocabulary. It's the best way in: you understand almost everything, so you enjoy it.",
    items: [
      { desc: "Short novels (30 to 60 pages), sorted by level: crime stories, true stories, adapted classics. Many come with audio.", why: "Start with the Starter level. Read while listening to the audio: it's the most effective way to connect reading and listening." },
      { desc: "The same idea, with many adapted films and series and simplified classics, plus a glossary at the end.", why: "Choose a story you already know in French: it makes understanding much easier." },
      { title: "Bilingual editions (Folio bilingue, Pocket « Langues pour tous »)", author: "Various French publishers", desc: "The original English text on the left page, the French translation on the right.", why: "Perfect for when you're stuck: just glance to the right instead of opening a dictionary." }
    ] },
  { label: "When you have the basics", note: "Real books (not adapted) but simple ones: short sentences, lots of dialogue, or stories you already know.",
    items: [
      { desc: "The illustrated diary of a not-so-cool schoolboy. Full of drawings, very funny.", why: "The drawings help you understand, and the English is everyday English. You read it fast, and that's motivating." },
      { desc: "The Little Prince in English: short, poetic, and you already know the story.", why: "Because you know what happens, your brain can focus on the language. Ideal for a first “real” book." },
      { desc: "A brilliant little girl who loves reading, against horrible adults. Funny and touching.", why: "The chapters are short. Dahl sometimes invents words: if you can't find them in the dictionary, that's normal!" }
    ] },
  { label: "To really progress", note: "Full novels. Don't look up every word: if you understand the story, you've won. Only note the words that come back often.",
    items: [
      { desc: "Auggie, a boy with a different face, goes to school for the first time. Told by several characters.", why: "Very short chapters (2 or 3 pages), simple language and strong emotion: you want to keep reading." },
      { desc: "The first book, in its original language.", why: "If you've read or seen Harry Potter, it's an excellent choice: the story carries you. The audiobook read by Stephen Fry is a treat." },
      { desc: "Stanley is sent to a camp where boys have to dig holes all day. But why?", why: "A very well-built plot with simple sentences. Hard to put down." },
      { desc: "A shepherd goes in search of a treasure. A short, philosophical tale.", why: "The translations use clear, fairly repetitive English: very good for consolidating." },
      { desc: "Two farm workers in 1930s America. A very short classic (about 100 pages).", why: "Short and powerful. Careful: the dialogue is written with the accent of the time, which can be confusing at first." }
    ] },
  { label: "Later, for pleasure", note: "When you feel comfortable. Keep them in mind as goals!",
    items: [
      { desc: "Christopher, an autistic teenager, investigates the death of his neighbour's dog.", why: "The narrator's voice is simple and direct, but the story is rich. A perfect bridge to adult literature." },
      { desc: "The animals of a farm drive out the farmer and take power… A political fable.", why: "Short, powerful, and a cultural reference every English speaker knows." },
      { desc: "A lonely, very organised woman sees her routine turned upside down. Funny and moving.", why: "Contemporary British English with lots of humour: ideal to feel today's language." }
    ] },
  { label: "Towards C1: real literature", note: "Books for adults, with a rich style. At this stage, read above all what you love: that's what will keep you going for hundreds of pages.",
    items: [
      { desc: "An English butler looks back on his life in the service of a great house. Booker Prize 1989.", why: "Elegant, restrained English: everything happens in what is left unsaid. Perfect for learning to read between the lines." },
      { desc: "The memoir of a young woman raised far from school, who ends up studying at Cambridge.", why: "A true, gripping story in contemporary American English. It reads like a novel." },
      { desc: "The great novel about surveillance and the manipulation of language.", why: "Clear, precise prose, and political vocabulary you'll find everywhere in the press." },
      { desc: "A history of humanity, from prehistory to today.", why: "Ideal for the vocabulary of abstract ideas and argument: exactly what C1 requires." },
      { desc: "Elizabeth Bennet and Mr Darcy, the most famous love story in English literature.", why: "A challenge: the English dates from 1813. Watch an adaptation first, then read it: Austen's irony is a delight." }
    ] },
  { label: "Towards C2: the great texts", note: "Demanding classics, prize-winning contemporary novels and an essay on the art of writing. At this level, you read like an educated native reader: sometimes slowly, pencil in hand, for the pleasure of the language.",
    items: [
      { desc: "Life in a small English town in the 19th century and the disappointed ambitions of its inhabitants. Often cited among the greatest novels in English.", why: "Dense, ironic prose, long sentences and very subtle psychology: the real C2 test." },
      { desc: "One day in London in 1923, through the thoughts of several characters.", why: "The great example of stream of consciousness: ideal for learning to follow thought without explicit signposts." },
      { desc: "Thomas Cromwell's rise at the court of Henry VIII. Booker Prize 2009.", why: "Historical fiction in the present tense, with lively dialogue and very rich political vocabulary." },
      { desc: "A childhood mistake, in 1935, and its consequences over a whole life.", why: "Precise, elegant style, and a reflection on fiction itself: perfect for literary analysis." },
      { desc: "Orwell's famous 1946 essay on empty language, jargon and clarity.", why: "Short and sharp: it will teach you to write clearly in English, and to spot language that hides more than it says." }
    ] }
];

window.RESOURCES_EN = [
  { title: "BBC Learning English: 6 Minute English", desc: "A 6-minute podcast: two presenters speak clearly about an everyday topic and explain the vocabulary. Free." },
  { title: "Coffee Break English", desc: "A podcast designed for learners, with a teacher who explains step by step." },
  { title: "Series with English subtitles", desc: "Start with series you've already seen in French (Friends, Modern Family, The Office). English subtitles, not French ones!" },
  { title: "Language Reactor (browser extension)", desc: "Shows English AND French subtitles at the same time on Netflix and YouTube, with a click on each word." },
  { title: "Easy English (YouTube)", desc: "Interviews with real people in the street, subtitled in English and French. Hear English as it's really spoken." },
  { title: "Talk with real people", desc: "From B1, it's essential. Online lessons with a teacher (italki, Preply) or free language exchanges (Tandem, HelloTalk): you help someone with French, they help you with English." },
  { title: "Podcasts for native speakers", desc: "From B2: BBC Radio 4, TED Talks (with transcripts), or podcasts about a topic you already love, like design." },
  { title: "The English-language press", desc: "For B2-C1: The Guardian (free online), BBC News, or design magazines in English. One article a day, noting 3 expressions." }
];
