/* Grilles « je sais faire » : 5 compétences × 6 niveaux × 4 énoncés.
   Formulations propres à l'appli, inspirées de la grille d'auto-évaluation du CECRL
   (Conseil de l'Europe, 2001) et de son volume complémentaire (2020). */
window.CANDO = [
{ id: "li", icon: "ear", title: "Listening", title_fr: "Écouter", levels: {
  A1: [
    ["I can understand familiar words and very simple phrases about me, my family and what's around me, if people speak slowly and clearly.", "Je comprends des mots familiers et des phrases très simples sur moi, ma famille et ce qui m'entoure, si l'on parle lentement et clairement."],
    ["I can understand numbers, prices and the time.", "Je comprends les nombres, les prix et l'heure."],
    ["I can follow short, simple instructions such as “Turn left” or “Sit down, please”.", "Je suis des consignes courtes et simples comme « Turn left » ou « Sit down, please »."],
    ["I can understand when someone asks my name, where I live or how I am.", "Je comprends quand on me demande mon nom, où j'habite ou comment je vais."]
  ],
  A2: [
    ["I can understand phrases and common words about shopping, family, work and my local area.", "Je comprends des expressions et des mots courants sur les courses, la famille, le travail et mon quartier."],
    ["I can get the main point of short, clear messages and announcements.", "Je saisis l'essentiel de messages et d'annonces courts et clairs."],
    ["I can follow simple directions to get from one place to another.", "Je suis des indications simples pour aller d'un endroit à un autre."],
    ["I can usually tell what a conversation around me is about, if people speak slowly.", "Je repère en général le sujet d'une conversation autour de moi, si l'on parle lentement."]
  ],
  B1: [
    ["I can understand the main points of clear, standard speech about familiar things: work, school, free time.", "Je comprends les points essentiels d'un discours clair et standard sur des sujets familiers : travail, études, loisirs."],
    ["I can follow the main points of radio or TV programmes about current events or my interests, when people speak fairly slowly.", "Je suis l'essentiel d'émissions de radio ou de télévision sur l'actualité ou mes centres d'intérêt, quand on parle assez lentement."],
    ["I can follow a story or a talk if it is clearly organised.", "Je suis une histoire ou un exposé s'il est clairement organisé."],
    ["I can understand detailed instructions, for example how to use a device or an app.", "Je comprends des instructions détaillées, par exemple pour utiliser un appareil ou une application."]
  ],
  B2: [
    ["I can follow long talks and lectures, and fairly complex arguments, when the topic is reasonably familiar.", "Je suis des exposés et des cours longs, et des argumentations assez complexes, si le sujet m'est relativement familier."],
    ["I can understand most TV news and current affairs programmes.", "Je comprends la plupart des journaux télévisés et des émissions d'actualité."],
    ["I can understand most films in standard English.", "Je comprends la plupart des films en anglais standard."],
    ["I can follow a lively conversation between native speakers, even if I miss some details.", "Je suis une conversation animée entre anglophones natifs, même si certains détails m'échappent."]
  ],
  C1: [
    ["I can understand long speech even when it is not clearly organised and the links between ideas are only implied.", "Je comprends un discours long même s'il n'est pas clairement structuré et que les liens entre les idées restent implicites."],
    ["I can understand TV programmes and films without too much effort.", "Je comprends les émissions de télévision et les films sans trop d'effort."],
    ["I can recognise a wide range of idioms and informal expressions, and I notice changes in register.", "Je reconnais une large gamme d'expressions idiomatiques et familières, et je remarque les changements de registre."],
    ["I can follow complex discussions between several people, even on topics I don't know well.", "Je suis des discussions complexes entre plusieurs personnes, même sur des sujets que je connais mal."]
  ],
  C2: [
    ["I have no difficulty understanding any kind of spoken English, live or recorded, even at fast natural speed.", "Je n'ai aucune difficulté à comprendre l'anglais oral, en direct ou enregistré, même à un débit naturel rapide."],
    ["I can understand a speaker with an unfamiliar accent after a short time to get used to it.", "Je comprends une personne à l'accent peu familier après un court temps d'adaptation."],
    ["I catch humour, irony and implications, and the attitudes behind what people say.", "Je saisis l'humour, l'ironie, les sous-entendus et les attitudes derrière ce que les gens disent."],
    ["I can follow specialist lectures full of informal language or unfamiliar terms.", "Je suis des conférences spécialisées pleines de langage familier ou de termes inconnus."]
  ]
} },
{ id: "re", icon: "book-open-text", title: "Reading", title_fr: "Lire", levels: {
  A1: [
    ["I can understand familiar names, words and very simple sentences on signs, posters or in catalogues.", "Je comprends des noms, des mots familiers et des phrases très simples sur des panneaux, des affiches ou dans des catalogues."],
    ["I can understand a simple form and find where to write my name, address and the date.", "Je comprends un formulaire simple et je trouve où écrire mon nom, mon adresse et la date."],
    ["I can understand a short, simple message on a card or a phone.", "Je comprends un message court et simple sur une carte ou un téléphone."],
    ["I can find a piece of information in a simple menu or timetable.", "Je trouve une information dans un menu ou un horaire simple."]
  ],
  A2: [
    ["I can read very short, simple texts.", "Je lis des textes très courts et simples."],
    ["I can find specific, predictable information in everyday documents such as adverts, menus and timetables.", "Je trouve une information précise et prévisible dans des documents courants : publicités, menus, horaires."],
    ["I can understand short, simple personal letters and emails.", "Je comprends des lettres et des e-mails personnels courts et simples."],
    ["I can understand simple notices and signs in public places.", "Je comprends des avis et des panneaux simples dans les lieux publics."]
  ],
  B1: [
    ["I can understand texts written mainly in everyday or work-related language.", "Je comprends des textes rédigés surtout dans une langue courante ou liée au travail."],
    ["I can understand descriptions of events, feelings and wishes in personal letters.", "Je comprends la description d'événements, de sentiments et de souhaits dans des lettres personnelles."],
    ["I can follow the plot of a clearly written story.", "Je suis l'intrigue d'une histoire clairement écrite."],
    ["I can find and understand the information I need in letters, brochures and short official documents.", "Je trouve et je comprends l'information dont j'ai besoin dans des lettres, des brochures et de courts documents officiels."]
  ],
  B2: [
    ["I can read articles and reports on current issues in which the writers take a particular position.", "Je lis des articles et des rapports sur des questions d'actualité dans lesquels les auteurs prennent position."],
    ["I can understand contemporary fiction.", "Je comprends la fiction contemporaine."],
    ["I can scan long texts quickly to find the details I need.", "Je parcours rapidement des textes longs pour trouver les détails dont j'ai besoin."],
    ["I can understand specialised articles in my field, with a dictionary now and then.", "Je comprends des articles spécialisés dans mon domaine, avec un dictionnaire de temps en temps."]
  ],
  C1: [
    ["I can understand long, complex factual and literary texts, and I notice differences of style.", "Je comprends des textes factuels et littéraires longs et complexes, et je remarque les différences de style."],
    ["I can understand specialised articles and long technical instructions, even outside my field.", "Je comprends des articles spécialisés et de longues instructions techniques, même hors de mon domaine."],
    ["I read independently, adapting my speed and method to the text and my purpose.", "Je lis en autonomie, en adaptant ma vitesse et ma méthode au texte et à mon objectif."],
    ["I can identify attitudes and opinions that are implied rather than stated.", "Je repère les attitudes et les opinions sous-entendues, et pas seulement celles qui sont dites."]
  ],
  C2: [
    ["I read virtually any kind of written English with ease, including abstract and structurally complex texts.", "Je lis sans peine pratiquement tout type d'écrit en anglais, y compris des textes abstraits et complexes dans leur structure."],
    ["I can understand manuals, specialised articles and literary works.", "Je comprends des manuels, des articles spécialisés et des œuvres littéraires."],
    ["I appreciate subtle distinctions of style and both implicit and explicit meaning.", "Je perçois les nuances de style les plus fines et le sens implicite comme explicite."],
    ["I can critically evaluate complex texts such as academic papers, legal documents or literature.", "J'évalue de façon critique des textes complexes : articles de recherche, documents juridiques, littérature."]
  ]
} },
{ id: "si", icon: "messages-square", title: "Spoken interaction", title_fr: "Prendre part à une conversation", levels: {
  A1: [
    ["I can have a simple exchange if the other person speaks slowly, repeats or rephrases, and helps me.", "Je peux avoir un échange simple si l'autre parle lentement, répète ou reformule, et m'aide."],
    ["I can ask and answer simple questions about very familiar topics.", "Je pose des questions simples sur des sujets très familiers et j'y réponds."],
    ["I can greet people, say please and thank you, and say goodbye.", "Je salue, je dis s'il te plaît et merci, et je prends congé."],
    ["I can order a drink or buy something simple.", "Je commande une boisson ou j'achète quelque chose de simple."]
  ],
  A2: [
    ["I can manage simple, routine tasks that need a direct exchange of information on familiar topics.", "Je me débrouille dans des situations simples et habituelles qui demandent un échange d'informations direct sur des sujets familiers."],
    ["I can handle very short social exchanges, even if I can't keep the conversation going myself.", "Je gère de très courts échanges sociaux, même si je ne peux pas encore entretenir la conversation moi-même."],
    ["I can make and answer invitations, suggestions and apologies.", "Je fais des invitations, des suggestions et des excuses, et j'y réponds."],
    ["I can ask for and give directions, and buy tickets or things in shops.", "Je demande et je donne un itinéraire, et j'achète des billets ou des articles en magasin."]
  ],
  B1: [
    ["I can deal with most situations that come up when travelling in an English-speaking country.", "Je fais face à la plupart des situations que l'on rencontre en voyage dans un pays anglophone."],
    ["I can join a conversation without preparation on familiar topics: family, hobbies, work, travel, the news.", "Je prends part sans préparation à une conversation sur des sujets familiers : famille, loisirs, travail, voyages, actualité."],
    ["I can express and react to feelings such as surprise, happiness, sadness or interest.", "J'exprime des sentiments comme la surprise, la joie, la tristesse ou l'intérêt, et j'y réagis."],
    ["I can give and ask for opinions in an informal discussion with friends.", "Je donne mon avis et je demande celui des autres dans une discussion informelle entre amis."]
  ],
  B2: [
    ["I can talk with fluency and spontaneity, so that conversation with native speakers is comfortable for both sides.", "Je parle avec aisance et spontanéité, si bien qu'une conversation avec des anglophones natifs est confortable des deux côtés."],
    ["I can take an active part in a discussion, explaining and defending my views.", "Je participe activement à une discussion, en expliquant et en défendant mes opinions."],
    ["I can negotiate a solution to a problem, such as a complaint or a disagreement.", "Je négocie la solution d'un problème, comme une réclamation ou un désaccord."],
    ["I can build on what others say and keep the conversation going.", "Je rebondis sur ce que disent les autres et j'entretiens la conversation."]
  ],
  C1: [
    ["I can express myself fluently and spontaneously, hardly ever searching for words.", "Je m'exprime couramment et spontanément, sans presque jamais chercher mes mots."],
    ["I use English flexibly and effectively in social and professional life.", "J'utilise l'anglais avec souplesse et efficacité dans ma vie sociale et professionnelle."],
    ["I can express ideas precisely and link what I say skilfully to what others have said.", "Je formule mes idées avec précision et je relie habilement mes interventions à celles des autres."],
    ["I can manage a meeting or a debate: interrupting politely, bringing people back to the point.", "Je mène une réunion ou un débat : j'interromps poliment, je ramène les gens au sujet."]
  ],
  C2: [
    ["I can take part in any conversation or discussion effortlessly, and I'm at ease with idioms and colloquial language.", "Je participe sans effort à n'importe quelle conversation ou discussion, et je suis à l'aise avec les expressions idiomatiques et familières."],
    ["I can express fine shades of meaning precisely.", "J'exprime avec précision les nuances de sens les plus fines."],
    ["If I hit a problem, I can rephrase around it so smoothly that people hardly notice.", "Si je bute sur une difficulté, je la contourne en reformulant si naturellement qu'on le remarque à peine."],
    ["I handle delicate situations with tact: disagreement, bad news, negotiation.", "Je gère avec tact les situations délicates : désaccord, mauvaise nouvelle, négociation."]
  ]
} },
{ id: "sp", icon: "mic", title: "Spoken production", title_fr: "S'exprimer oralement en continu", levels: {
  A1: [
    ["I can use simple phrases and sentences to describe where I live and people I know.", "J'utilise des expressions et des phrases simples pour décrire où j'habite et les gens que je connais."],
    ["I can introduce myself: name, age, nationality, job.", "Je me présente : nom, âge, nationalité, métier."],
    ["I can say what I like and don't like.", "Je dis ce que j'aime et ce que je n'aime pas."],
    ["I can describe my day in a few very simple sentences.", "Je décris ma journée en quelques phrases très simples."]
  ],
  A2: [
    ["I can describe my family, other people, where I live, my studies and my job in a series of simple sentences.", "Je décris ma famille, d'autres personnes, mon logement, mes études et mon travail en une suite de phrases simples."],
    ["I can talk simply about my routine, my plans and what I did in the past.", "Je parle simplement de mes habitudes, de mes projets et de ce que j'ai fait."],
    ["I can explain what I like or dislike about something.", "J'explique ce qui me plaît ou me déplaît dans quelque chose."],
    ["I can give a short, prepared presentation on a familiar topic.", "Je fais un court exposé préparé sur un sujet familier."]
  ],
  B1: [
    ["I can link sentences simply to describe experiences, events, my dreams, hopes and ambitions.", "J'enchaîne des phrases simplement pour raconter des expériences, des événements, mes rêves, mes espoirs et mes projets."],
    ["I can briefly give reasons and explanations for my opinions and plans.", "Je donne brièvement les raisons et les explications de mes opinions et de mes projets."],
    ["I can tell a story, or the plot of a book or film, and describe my reactions.", "Je raconte une histoire, ou l'intrigue d'un livre ou d'un film, et je décris mes réactions."],
    ["I can give a prepared presentation on a familiar topic and answer clear questions.", "Je fais un exposé préparé sur un sujet familier et je réponds à des questions claires."]
  ],
  B2: [
    ["I can give clear, detailed descriptions on a wide range of subjects related to my interests.", "Je fais des descriptions claires et détaillées sur une large gamme de sujets liés à mes centres d'intérêt."],
    ["I can explain my point of view on a current issue, with the advantages and disadvantages of different options.", "J'explique mon point de vue sur une question d'actualité, avec les avantages et les inconvénients des différentes options."],
    ["I can develop an argument, highlighting the key points with relevant details.", "Je développe une argumentation en mettant en valeur les points importants avec des détails pertinents."],
    ["I can give a clear presentation and move away from my notes to follow up interesting points.", "Je fais un exposé clair et je m'écarte de mes notes pour développer des points intéressants."]
  ],
  C1: [
    ["I can give clear, detailed descriptions of complex subjects, bringing in related points and ending with a suitable conclusion.", "Je décris de façon claire et détaillée des sujets complexes, en intégrant des points secondaires et en terminant par une conclusion adaptée."],
    ["I can give a well-structured talk with confidence, using stress and intonation to make my points.", "Je fais un exposé bien construit avec assurance, en me servant de l'accentuation et de l'intonation pour souligner mes idées."],
    ["I can deal with difficult or unexpected questions after a presentation.", "Je réponds à des questions difficiles ou inattendues après un exposé."],
    ["I can summarise and comment on a long, complex text or lecture, out loud.", "Je résume et je commente à l'oral un texte ou un cours long et complexe."]
  ],
  C2: [
    ["I can present a smooth, clearly structured description or argument in a style suited to the situation, so that listeners notice and remember the key points.", "Je présente une description ou une argumentation fluide et bien structurée, dans un style adapté, si bien que l'auditoire repère et retient les points importants."],
    ["I can give a complex talk to an audience who doesn't know the subject, adapting it to their needs.", "Je fais un exposé complexe devant un public qui ne connaît pas le sujet, en l'adaptant à ses besoins."],
    ["I can use rhetorical devices and humour naturally when I speak.", "J'utilise naturellement les procédés rhétoriques et l'humour quand je parle."],
    ["I can deal with the unexpected during a talk without losing the thread.", "Je fais face à l'imprévu pendant un exposé sans perdre le fil."]
  ]
} },
{ id: "wr", icon: "pen-line", title: "Writing", title_fr: "Écrire", levels: {
  A1: [
    ["I can write a short, simple message or postcard, for example to say hello.", "J'écris un message ou une carte courte et simple, par exemple pour dire bonjour."],
    ["I can fill in a form with my personal details: name, nationality, address.", "Je remplis un formulaire avec mes informations personnelles : nom, nationalité, adresse."],
    ["I can write simple sentences about myself and where I live.", "J'écris des phrases simples sur moi et sur l'endroit où j'habite."],
    ["I can write a short list or note, like a shopping list.", "J'écris une courte liste ou une note, comme une liste de courses."]
  ],
  A2: [
    ["I can write short, simple notes and messages about everyday needs.", "J'écris des notes et des messages courts et simples sur des besoins du quotidien."],
    ["I can write a very simple personal letter, for example to thank someone.", "J'écris une lettre personnelle très simple, par exemple pour remercier quelqu'un."],
    ["I can describe my family, my job or my last holiday in simple sentences.", "Je décris ma famille, mon travail ou mes dernières vacances en phrases simples."],
    ["I can link sentences with “and”, “but”, “because” and “then”.", "Je relie mes phrases avec « and », « but », « because » et « then »."]
  ],
  B1: [
    ["I can write simple connected texts on familiar topics or topics that interest me.", "J'écris des textes simples et cohérents sur des sujets familiers ou qui m'intéressent."],
    ["I can write personal letters and emails describing experiences and impressions.", "J'écris des lettres et des e-mails personnels pour raconter des expériences et des impressions."],
    ["I can write a short story, or a review of a film or a book.", "J'écris une courte histoire, ou la critique d'un film ou d'un livre."],
    ["I can write a short report that gives information and a simple opinion.", "J'écris un court rapport qui donne des informations et un avis simple."]
  ],
  B2: [
    ["I can write clear, detailed texts on a wide range of subjects related to my interests.", "J'écris des textes clairs et détaillés sur une large gamme de sujets liés à mes centres d'intérêt."],
    ["I can write an essay or a report giving reasons for or against a point of view.", "J'écris un essai ou un rapport qui donne des arguments pour ou contre un point de vue."],
    ["I can write letters that show what events and experiences mean to me personally.", "J'écris des lettres qui montrent ce que des événements et des expériences représentent pour moi."],
    ["I can write formal emails and adapt my style to the reader.", "J'écris des e-mails formels et j'adapte mon style au destinataire."]
  ],
  C1: [
    ["I can write clear, well-structured texts and develop my point of view at some length.", "J'écris des textes clairs et bien structurés et je développe mon point de vue de façon assez approfondie."],
    ["I can write about complex subjects in a letter, an essay or a report, bringing out the issues I consider most important.", "J'écris sur des sujets complexes dans une lettre, un essai ou un rapport, en faisant ressortir les points que je juge essentiels."],
    ["I choose a style suited to the reader I have in mind.", "Je choisis un style adapté au lecteur que j'ai en tête."],
    ["I can summarise and combine information from several sources.", "Je résume et je combine des informations venant de plusieurs sources."]
  ],
  C2: [
    ["I can write clear, smoothly flowing texts in an appropriate style.", "J'écris des textes clairs et fluides dans un style approprié."],
    ["I can write complex letters, reports or articles that present a case with an effective logical structure.", "J'écris des lettres, des rapports ou des articles complexes qui défendent une position avec une structure logique efficace."],
    ["I can write summaries and reviews of professional or literary works.", "J'écris des résumés et des critiques d'ouvrages professionnels ou littéraires."],
    ["I can edit my own and other people's writing to improve style, precision and flow.", "Je relis et j'améliore mes textes et ceux des autres : style, précision, fluidité."]
  ]
} }
];
