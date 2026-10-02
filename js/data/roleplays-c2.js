/* C2 role-plays, one for each C2 "Everyday English" lesson (126 to 130). Same format as roleplays.js:
   {p, fr} = the other person · {y: [right answer, wrong, wrong], fr, why} = your turn (the right answer comes first). */
window.ROLEPLAYS.push(
{ id: "clientno", lesson: 126, level: "C2", icon: "handshake", partner: "Mr Harris", role: "a demanding client",
  title: "Saying no to a client", title_fr: "Dire non à un client",
  setting: "Your client wants a third version of a design for free. You have to refuse without losing him.", setting_fr: "Ton client veut une troisième version gratuite d'un projet. Tu dois refuser sans le perdre.",
  turns: [
    { p: "I've looked at the two versions. Honestly, neither is quite right. I'll need a third one, and I assume that's included.", fr: "J'ai regardé les deux versions. Honnêtement, aucune ne convient vraiment. Il m'en faudra une troisième, et je suppose que c'est compris." },
    { y: ["I understand, and I'm glad you're being frank. I'm afraid a third version isn't included in the current quote, though.", "No, it isn't included, obviously.", "I'm afraid that a third version is not inclusive in the quote."], fr: "Je comprends, et je suis contente que vous soyez franc. J'ai bien peur qu'une troisième version ne soit pas comprise dans le devis actuel, cependant.", why: "Acknowledge first, then refuse softly. “Included”, not “inclusive”." },
    { p: "Really? That seems a bit rigid. Other agencies are more flexible.", fr: "Vraiment ? Ça me paraît un peu rigide. D'autres agences sont plus souples." },
    { y: ["I appreciate that. What I can offer is to refine one of the two versions at no extra cost, or quote you for a new one.", "Then go to another agency.", "I appreciate that. What I can offer you is refining one at no extra costs or quoting you."], fr: "Je comprends. Ce que je peux vous proposer, c'est d'affiner l'une des deux versions sans frais supplémentaires, ou de vous faire un devis pour une nouvelle.", why: "Offer alternatives instead of a flat no. “At no extra cost” (singular)." },
    { p: "Hmm. If you refine one, which would you recommend?", fr: "Hmm. Si vous en affinez une, laquelle recommanderiez-vous ?" },
    { y: ["I'd lean towards the second: it's closer to your brief, and the typography could easily be made bolder.", "The second, because the first is bad.", "I'd lean on the second, it's more near to your brief."], fr: "Je pencherais pour la deuxième : elle est plus proche de votre brief, et la typographie pourrait facilement être plus affirmée.", why: "Lean towards (pencher pour). Justify with precise arguments." },
    { p: "All right. Let's go with that, then. But I want to see it by Thursday.", fr: "D'accord. Partons là-dessus, alors. Mais je veux la voir d'ici jeudi." },
    { y: ["Thursday might be a little tight; would Friday morning work for you?", "Impossible, sorry.", "Thursday is a little tight, would it work Friday morning for you?"], fr: "Jeudi risque d'être un peu juste ; vendredi matin vous conviendrait-il ?", why: "Soften with might + a question. Word order: would Friday morning work for you?" }
  ] },
{ id: "chairing", lesson: 127, level: "C2", icon: "users-round", partner: "Daniel", role: "a frustrated colleague",
  title: "Chairing a tense meeting", title_fr: "Présider une réunion tendue",
  setting: "You're chairing a meeting about a delayed launch. Daniel, from sales, is angry with the design team.", setting_fr: "Tu présides une réunion sur un lancement retardé. Daniel, des ventes, est en colère contre l'équipe design.",
  turns: [
    { p: "Frankly, this delay is ridiculous. The design team has had months!", fr: "Franchement, ce retard est ridicule. L'équipe design a eu des mois !" },
    { y: ["I can see this matters a great deal to you, Daniel. Let's take a step back and look at what actually caused the delay.", "Calm down, Daniel, you're being ridiculous.", "I can see this matters a lot for you. Let's make a step back."], fr: "Je vois que c'est très important pour toi, Daniel. Prenons un peu de recul et regardons ce qui a réellement causé le retard.", why: "Acknowledge the emotion, then refocus. Take (not make) a step back." },
    { p: "Fine. But I want to know who's responsible.", fr: "D'accord. Mais je veux savoir qui est responsable." },
    { y: ["I'd rather we focused on solutions than on blame. What would help your team most right now?", "It's not my problem who is responsible.", "I'd rather we focus on solutions than blame."], fr: "Je préférerais qu'on se concentre sur les solutions plutôt que sur les responsabilités. Qu'est-ce qui aiderait le plus ton équipe maintenant ?", why: "I'd rather we + past (focused). Redirect to solutions." },
    { p: "A firm date. We can't keep telling clients “soon”.", fr: "Une date ferme. On ne peut pas continuer à dire « bientôt » aux clients." },
    { y: ["That's fair. So, to sum up, sales need a firm date and design needs two more weeks. Can we agree on the 20th?", "To resume, you want a date. OK, the 20th.", "That's fair. So to summarise, sales needs a date. Can we agree the 20th on?"], fr: "C'est légitime. Donc, pour résumer : les ventes ont besoin d'une date ferme et le design de deux semaines de plus. Pouvons-nous nous mettre d'accord sur le 20 ?", why: "Summarise both positions, then propose. To sum up (not to resume)." },
    { p: "The 20th... All right, as long as it's final this time.", fr: "Le 20… D'accord, du moment que c'est définitif cette fois." },
    { y: ["It is. I'll circulate the action points this afternoon. Thank you both for your patience.", "OK, bye.", "It is. I will circulate the actions points this afternoon."], fr: "Ça l'est. J'enverrai les actions à mener cet après-midi. Merci à vous deux pour votre patience.", why: "Close with next steps and thanks. Action points." }
  ] },
{ id: "pressq", lesson: 128, level: "C2", icon: "presentation", partner: "Rebecca", role: "a sceptical journalist",
  title: "Questions after your talk", title_fr: "Les questions après ton intervention",
  setting: "You've just presented a project to redesign a city square. A journalist asks tough questions.", setting_fr: "Tu viens de présenter un projet de réaménagement d'une place. Une journaliste pose des questions difficiles.",
  turns: [
    { p: "Isn't this project just an expensive way to make the square look nice for tourists?", fr: "Ce projet n'est-il pas simplement une façon coûteuse d'embellir la place pour les touristes ?" },
    { y: ["I don't quite accept the premise of the question. The project was designed first and foremost for residents.", "No, your question is wrong.", "I don't accept the premise from your question. It's designed first and foremost for the residents."], fr: "Je ne souscris pas tout à fait au postulat de votre question. Le projet a été pensé avant tout pour les habitants.", why: "Challenge the premise politely. The premise of the question." },
    { p: "And how much exactly will it cost?", fr: "Et combien cela coûtera-t-il exactement ?" },
    { y: ["I don't have the exact figures to hand, but I'll make sure you receive them by the end of the day.", "I don't know, ask the council.", "I haven't the exact figures in hand, but I will send them you."], fr: "Je n'ai pas les chiffres exacts sous la main, mais je veillerai à ce que vous les receviez d'ici la fin de la journée.", why: "To hand = available now. Promise a follow-up." },
    { p: "Some residents say they weren't consulted at all.", fr: "Certains habitants disent qu'ils n'ont pas été consultés du tout." },
    { y: ["We held four public meetings, but I take the point that some people may have felt left out, and we'd welcome their views.", "That's not true, they're lying.", "We held four public meetings, but I take your point that some may have felt let out."], fr: "Nous avons tenu quatre réunions publiques, mais j'entends que certaines personnes aient pu se sentir écartées, et leur avis est le bienvenu.", why: "Give facts, then concede gracefully. Left out (not let out)." },
    { p: "One last thing: why should people trust you to deliver on time?", fr: "Une dernière chose : pourquoi les gens devraient-ils vous faire confiance pour livrer à temps ?" },
    { y: ["What really matters here is our track record: our last three projects were all completed on schedule.", "Because I say so.", "What really matters is our track record: our last three projects were all finished in schedule."], fr: "Ce qui compte vraiment ici, c'est notre historique : nos trois derniers projets ont tous été livrés dans les délais.", why: "Bridge to your key message. On schedule (not in schedule)." }
  ] },
{ id: "banter", lesson: 129, level: "C2", icon: "laugh", partner: "Liam", role: "a colleague who loves teasing",
  title: "Office banter", title_fr: "Taquineries au bureau",
  setting: "Monday morning. You arrive at the office ten minutes late, with a huge coffee.", setting_fr: "Lundi matin. Tu arrives au bureau avec dix minutes de retard et un énorme café.",
  turns: [
    { p: "Ah, nice of you to join us! Good weekend?", fr: "Ah, content que tu nous rejoignes ! Bon week-end ?" },
    { y: ["Guilty as charged! Lovely, thanks, although clearly not restful enough.", "Sorry, I'm late, I apologise very much.", "Guilty as charge! Lovely, thanks."], fr: "Coupable ! Très bien, merci, même si de toute évidence pas assez reposant.", why: "Play along with the joke. Guilty as charged (fixed expression)." },
    { p: "Is that a coffee or a swimming pool you're carrying?", fr: "C'est un café ou une piscine que tu tiens là ?" },
    { y: ["Let's just say I'm not exactly a morning person.", "It's a coffee, not a swimming pool.", "Let's just say I'm not exactly a person of the morning."], fr: "Disons simplement que je ne suis pas vraiment du matin.", why: "Self-deprecation answers teasing perfectly. A morning person." },
    { p: "By the way, I tried your famous chocolate cake recipe at the weekend.", fr: "Au fait, j'ai essayé ta fameuse recette de gâteau au chocolat ce week-end." },
    { y: ["Oh no. Should I be worried, or are you still alive?", "Did you like it?", "Oh no. Must I be worried or are you still living?"], fr: "Oh non. Je dois m'inquiéter, ou tu es toujours en vie ?", why: "Playful exaggeration keeps the banter going." },
    { p: "Ha! It was actually delicious. Don't let it go to your head.", fr: "Ha ! En fait, il était délicieux. Ne prends pas la grosse tête." },
    { y: ["Too late, I'm already planning my cooking show.", "OK, I won't.", "Too late, I already plan my cooking show."], fr: "Trop tard, je prépare déjà mon émission de cuisine.", why: "End the banter with a light joke. Present continuous: I'm already planning." }
  ] },
{ id: "seminar", lesson: 130, level: "C2", icon: "graduation-cap", partner: "Dr Clarke", role: "your seminar tutor",
  title: "A university seminar", title_fr: "Un séminaire universitaire",
  setting: "In a seminar on design and behaviour, your tutor asks what you thought of an article claiming that “nudges” change people's habits.", setting_fr: "Dans un séminaire sur le design et les comportements, ta tutrice te demande ce que tu as pensé d'un article affirmant que les « nudges » changent les habitudes.",
  turns: [
    { p: "So, what did you make of the article's central claim?", fr: "Alors, qu'avez-vous pensé de l'affirmation centrale de l'article ?" },
    { y: ["I found it compelling up to a point, but the argument seems to rest on rather small samples.", "It was good, I liked it.", "I found it compelling until a point, but the argument seems resting on small samples."], fr: "Je l'ai trouvée convaincante jusqu'à un certain point, mais l'argument semble reposer sur des échantillons assez réduits.", why: "Up to a point. Rest on (reposer sur)." },
    { p: "Interesting. Could you elaborate on that?", fr: "Intéressant. Pourriez-vous développer ?" },
    { y: ["Most of the studies involve a few hundred people, so I wonder to what extent we can generalise.", "There were not many people.", "Most of the studies involve few hundred people, so I wonder how much we can generalise it."], fr: "La plupart des études portent sur quelques centaines de personnes, je me demande donc dans quelle mesure on peut généraliser.", why: "A few hundred (quelques centaines). To what extent…" },
    { p: "Fair point. Although some recent meta-analyses do suggest a small but real effect.", fr: "C'est juste. Même si certaines méta-analyses récentes suggèrent bien un effet modeste mais réel." },
    { y: ["I take your point. If that's the case, perhaps the effect is real but smaller than the article implies.", "No, I think you're wrong.", "I take your point. If it's the case, maybe the effect is real but smaller that the article implies."], fr: "J'entends bien. Si c'est le cas, l'effet est peut-être réel, mais plus faible que ne le laisse entendre l'article.", why: "Concede and qualify. Smaller than (not that)." },
    { p: "Good. And what would be the implications for designers?", fr: "Bien. Et quelles en seraient les implications pour les designers ?" },
    { y: ["Building on that, I'd argue that designers should test their nudges rather than assume they work.", "Designers must do nudges.", "Building on it, I'd argue designers should test the nudges instead to assume they work."], fr: "Pour prolonger cela, je dirais que les designers devraient tester leurs nudges plutôt que de supposer qu'ils fonctionnent.", why: "Building on that, I'd argue that… Rather than + infinitive." }
  ] }
);
