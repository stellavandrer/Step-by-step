/* Cours de français, unité A2-2 « Travel stories / Voyages » : le passé composé avec être et l'accord du
   participe, les verbes pronominaux au passé composé, à la gare et dans le train. Personnages fictifs, prénoms
   français. Les répliques que dit l'apprenant évitent l'accord avec son genre (neutralité). Aucun fait extérieur
   à vérifier : villes réelles, mais trajets, horaires et prix inventés. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "voyageFR", icon: "train-front", title: "Travelling", title_fr: "Voyager", level: "A2", words: [
    ["le voyage", "the trip, the journey", "Bon voyage !"],
    ["la valise", "the suitcase", "Ma valise est très lourde."],
    ["faire sa valise", "to pack", "Je fais ma valise ce soir."],
    ["le passeport", "the passport", "N'oublie pas ton passeport !"],
    ["l'aéroport", "the airport", "On part à l'aéroport à six heures."],
    ["l'avion", "the plane", "J'ai pris l'avion pour Montréal."],
    ["le vol", "the flight", "Le vol a duré huit heures."],
    ["le billet", "the ticket (train, plane)", "J'ai acheté mon billet en ligne."],
    ["un aller simple", "a single ticket, a one-way ticket", "Un aller simple pour Nantes, s'il vous plaît."],
    ["un aller-retour", "a return ticket, a round trip", "Un aller-retour pour Lille."],
    ["le quai", "the platform", "Le train part du quai numéro trois."],
    ["la voie", "the track (the platform number in stations)", "Le TGV part voie cinq."],
    ["la correspondance", "the connection (change of train)", "J'ai raté ma correspondance."],
    ["rater", "to miss (a train, a bus)", "J'ai raté le dernier bus."],
    ["annulé / annulée", "cancelled (m) / cancelled (f)", "Le vol est annulé."],
    ["le séjour", "the stay", "Bon séjour à Paris !"],
    ["le trajet", "the journey (from A to B)", "Le trajet dure deux heures."],
    ["le siège", "the seat", "Votre siège est dans la voiture douze."],
    ["la gare routière", "the bus station", "Le car part de la gare routière."]
  ] },
  { id: "verbesEtreFR", icon: "route", title: "Verbs of movement (with être)", title_fr: "Les verbes de mouvement (avec être)", level: "A2", words: [
    ["arriver", "to arrive", "Le train est arrivé à l'heure."],
    ["entrer", "to go in, to come in", "Elle est entrée dans le magasin."],
    ["monter", "to go up; to get on", "Nous sommes montés dans le train."],
    ["descendre", "to go down; to get off", "Je suis descendu à la gare de Lyon."],
    ["tomber", "to fall", "Il est tombé dans l'escalier."],
    ["rester", "to stay", "Nous sommes restés trois jours."],
    ["naître", "to be born", "Je suis né à Dublin."],
    ["mourir", "to die", "Mon grand-père est mort en 2010."],
    ["devenir", "to become", "Elle est devenue médecin."],
    ["revenir", "to come back", "Ils sont revenus de vacances hier."],
    ["retourner", "to go back, to return", "Nous sommes retournés à Rome."],
    ["passer par", "to go through, via", "Le train est passé par Dijon."],
    ["venir", "to come", "Elles sont venues en voiture."]
  ] });

  W.LESSONS.push(
  {
    id: 27, level: "A2", icon: "route",
    title: "Je suis allé: the passé composé with être", title_fr: "Je suis allé : le passé composé avec être",
    subtitle: "A small group of verbs, mostly about moving, use être, and their participle agrees.", subtitle_fr: "Un petit groupe de verbes, surtout de mouvement, se conjuguent avec être, et leur participe s'accorde.",
    body: `
<h2>Which verbs?</h2>
<p>Most verbs use <s-fr>avoir</s-fr>. About fifteen use <s-fr>être</s-fr>: they mostly describe a movement or a change of state. Many learners remember them as pairs:</p>
<table>
<tr><th>Pair</th><th>Participles</th></tr>
<tr><td><s-fr>aller</s-fr> / <s-fr>venir</s-fr></td><td><s-fr>allé</s-fr> / <s-fr>venu</s-fr></td></tr>
<tr><td><s-fr>arriver</s-fr> / <s-fr>partir</s-fr></td><td><s-fr>arrivé</s-fr> / <s-fr>parti</s-fr></td></tr>
<tr><td><s-fr>entrer</s-fr> / <s-fr>sortir</s-fr></td><td><s-fr>entré</s-fr> / <s-fr>sorti</s-fr></td></tr>
<tr><td><s-fr>monter</s-fr> / <s-fr>descendre</s-fr></td><td><s-fr>monté</s-fr> / <s-fr>descendu</s-fr></td></tr>
<tr><td><s-fr>naître</s-fr> / <s-fr>mourir</s-fr></td><td><s-fr>né</s-fr> / <s-fr>mort</s-fr></td></tr>
<tr><td><s-fr>rester</s-fr> / <s-fr>tomber</s-fr> / <s-fr>devenir</s-fr></td><td><s-fr>resté</s-fr> / <s-fr>tombé</s-fr> / <s-fr>devenu</s-fr></td></tr>
</table>
<p>Verbs made from them also use être: <s-fr>revenir</s-fr>, <s-fr>rentrer</s-fr>, <s-fr>retourner</s-fr>.</p>
<h2>The participle agrees with the subject</h2>
<p>With être, the participle agrees like an adjective: <b>-e</b> for a feminine subject, <b>-s</b> for a plural one.</p>
<table>
<tr><th>Subject</th><th>Example</th></tr>
<tr><td>masculine</td><td><s-fr>Paul est allé à Rome.</s-fr></td></tr>
<tr><td>feminine</td><td><s-fr>Léa est allée à Rome.</s-fr></td></tr>
<tr><td>masculine plural or mixed</td><td><s-fr>Ils sont allés à Rome.</s-fr></td></tr>
<tr><td>feminine plural</td><td><s-fr>Elles sont allées à Rome.</s-fr></td></tr>
</table>
<p>Most of the time, you hear no difference: <s-fr>allé</s-fr>, <s-fr>allée</s-fr> and <s-fr>allés</s-fr> sound the same. With <s-fr>je</s-fr> and <s-fr>tu</s-fr>, the agreement depends on who is speaking: a woman writes <s-fr>je suis allée</s-fr>, a man <s-fr>je suis allé</s-fr>.</p>
<h2>The negative</h2>
<p>Same as with avoir: around the auxiliary. <s-fr>Je ne suis pas sorti hier soir.</s-fr> · <s-fr>Nous ne sommes jamais allés au Japon.</s-fr></p>
<div class="tip">A useful trick: a verb that can't take a direct object (you can't "arrive something") usually takes être. And with <s-fr>on</s-fr> meaning "we", the participle is often plural: <s-fr>On est partis à huit heures.</s-fr></div>
`,
    examples: [
      ["Je suis allé à Lisbonne l'été dernier.", "I went to Lisbon last summer."],
      ["Elle est arrivée à minuit.", "She arrived at midnight."],
      ["Nous sommes partis très tôt.", "We left very early."],
      ["Ils sont restés une semaine à la montagne.", "They stayed a week in the mountains."],
      ["Elles sont venues en train.", "They came by train. (women)"],
      ["Mon grand-père est né en Bretagne.", "My grandfather was born in Brittany."],
      ["Je ne suis pas sorti hier soir.", "I didn't go out last night."],
      ["On est rentrés tard.", "We got home late."]
    ],
    quiz: [
      { q: "Complete: “Hier, nous ___ allés au cinéma.”", o: ["avons", "sommes", "êtes"], a: 1, ex: "aller takes être: nous sommes allés." },
      { q: "Complete: “Léa est ___ à huit heures.”", o: ["parti", "partie", "partis"], a: 1, ex: "Léa is feminine: partie." },
      { q: "Which verb takes avoir?", o: ["arriver", "manger", "tomber"], a: 1, ex: "manger takes avoir: j'ai mangé." },
      { q: "Complete: “Mes parents sont ___ en 1960.”", o: ["né", "nés", "nées"], a: 1, ex: "Mes parents: masculine plural (or mixed): nés." },
      { q: "“I didn't go out” is:", o: ["Je ne suis pas sorti.", "Je ne suis sorti pas.", "Je n'ai pas sorti."], a: 0, ex: "sortir takes être; ne… pas around être." }
    ]
  },
  {
    id: 28, level: "A2", icon: "sunrise",
    title: "Je me suis levé: reflexive verbs in the past", title_fr: "Je me suis levé : les verbes pronominaux au passé",
    subtitle: "All reflexive verbs take être in the passé composé.", subtitle_fr: "Tous les verbes pronominaux prennent être au passé composé.",
    body: `
<h2>Always être</h2>
<p>Every reflexive verb uses <s-fr>être</s-fr> in the passé composé. The little pronoun comes first:</p>
<table>
<tr><th>French</th><th>English</th></tr>
<tr><td><s-fr>je me suis levé</s-fr> · <s-fr>je me suis levée</s-fr></td><td>I got up</td></tr>
<tr><td><s-fr>tu t'es levé</s-fr></td><td>you got up</td></tr>
<tr><td><s-fr>il s'est levé</s-fr> · <s-fr>elle s'est levée</s-fr></td><td>he, she got up</td></tr>
<tr><td><s-fr>nous nous sommes levés</s-fr></td><td>we got up</td></tr>
<tr><td><s-fr>vous vous êtes levés</s-fr></td><td>you got up</td></tr>
<tr><td><s-fr>ils se sont levés</s-fr> · <s-fr>elles se sont levées</s-fr></td><td>they got up</td></tr>
</table>
<p>The participle agrees with the subject, as with the other être verbs: <s-fr>Elle s'est réveillée à six heures.</s-fr></p>
<h2>The negative</h2>
<p><s-fr>ne</s-fr> goes before the pronoun, <s-fr>pas</s-fr> after être: <s-fr>Je ne me suis pas réveillé.</s-fr> (I didn't wake up.) · <s-fr>Ils ne se sont pas amusés.</s-fr></p>
<h2>A day in the past</h2>
<p><s-fr>Ce matin, je me suis réveillé trop tard. Je me suis douché en deux minutes, je me suis habillé et je suis parti en courant !</s-fr></p>
<div class="tip">Some very common verbs are reflexive in French but not in English: <s-fr>se promener</s-fr> (to go for a walk), <s-fr>s'amuser</s-fr> (to have fun), <s-fr>se tromper</s-fr> (to make a mistake), <s-fr>se perdre</s-fr> (to get lost): <s-fr>Nous nous sommes perdus dans la vieille ville.</s-fr></div>
`,
    examples: [
      ["Je me suis réveillé à sept heures.", "I woke up at seven."],
      ["Elle s'est habillée très vite.", "She got dressed very quickly."],
      ["Nous nous sommes promenés au bord de la mer.", "We went for a walk by the sea."],
      ["Ils se sont bien amusés à la fête.", "They had a great time at the party."],
      ["Tu t'es couché tard ?", "Did you go to bed late?"],
      ["Je ne me suis pas réveillé à l'heure.", "I didn't wake up on time."],
      ["On s'est perdus dans la vieille ville.", "We got lost in the old town."],
      ["Je me suis trompé de train !", "I got on the wrong train!"]
    ],
    quiz: [
      { q: "Complete: “Je me ___ levé tôt.”", o: ["ai", "suis", "es"], a: 1, ex: "Reflexive verbs always take être." },
      { q: "Complete: “Elle s'est ___.” (se réveiller)", o: ["réveillé", "réveillée", "réveillés"], a: 1, ex: "elle: -e." },
      { q: "“I didn't wake up” is:", o: ["Je ne me suis pas réveillé.", "Je me ne suis pas réveillé.", "Je ne suis pas me réveillé."], a: 0, ex: "ne before the pronoun, pas after être." },
      { q: "“We had fun” is:", o: ["Nous avons amusé.", "Nous nous sommes amusés.", "Nous sommes amusés nous."], a: 1, ex: "s'amuser: nous nous sommes amusés." },
      { q: "“I got lost” (a man) is:", o: ["Je me suis perdu.", "J'ai perdu.", "Je suis perdu moi."], a: 0, ex: "se perdre = to get lost." }
    ]
  },
  {
    id: 29, level: "A2", kind: "functional", icon: "train-front",
    title: "Everyday French: at the station and on the train", title_fr: "Le français de tous les jours : à la gare et dans le train",
    subtitle: "Buy a ticket, understand the announcements and deal with a delay.", subtitle_fr: "Acheter un billet, comprendre les annonces et gérer un retard.",
    body: `
<h2>Buying a ticket</h2>
<p><s-fr>Un aller simple pour Lille, s'il vous plaît.</s-fr> (a single) · <s-fr>Un aller-retour pour Bordeaux.</s-fr> (a return) · <s-fr>En première ou en seconde classe ?</s-fr> · <s-fr>Le prochain train part à quelle heure ?</s-fr> (When's the next train?) · <s-fr>Il est direct ?</s-fr> (Is it direct?) · <s-fr>Il y a une correspondance à Lyon.</s-fr> (You change at Lyon.)</p>
<h2>Understanding the announcements</h2>
<table>
<tr><th>Announcement</th><th>Meaning</th></tr>
<tr><td><s-fr>Le train à destination de Marseille partira voie trois.</s-fr></td><td>The train to Marseille will leave from platform 3.</td></tr>
<tr><td><s-fr>Le train en provenance de Paris arrive voie deux.</s-fr></td><td>The train from Paris is arriving at platform 2.</td></tr>
<tr><td><s-fr>Le train est annoncé avec un retard de quinze minutes.</s-fr></td><td>The train is expected 15 minutes late.</td></tr>
<tr><td><s-fr>Le train est supprimé.</s-fr></td><td>The train is cancelled.</td></tr>
</table>
<p>Announcements use the future (<s-fr>partira</s-fr>): you'll learn it in unit 7, but you can already recognise it.</p>
<h2>On the train</h2>
<p><s-fr>Excusez-moi, je crois que c'est ma place.</s-fr> (I think this is my seat.) · <s-fr>Le train s'arrête à Dijon ?</s-fr> (Does the train stop at Dijon?) · <s-fr>On arrive à quelle heure ?</s-fr></p>
<h2>A problem</h2>
<p><s-fr>J'ai raté mon train.</s-fr> (I missed my train.) · <s-fr>J'ai raté ma correspondance à cause du retard.</s-fr> · <s-fr>Je peux prendre le train suivant ?</s-fr> (Can I take the next train?)</p>
<div class="tip">In France, the high-speed train is the <s-fr>TGV</s-fr>. In big stations, the platform is often displayed only about twenty minutes before departure: watch the departure board, <s-fr>le tableau des départs</s-fr>.</div>
`,
    examples: [
      ["Un aller-retour pour Bordeaux, s'il vous plaît.", "A return to Bordeaux, please."],
      ["Le prochain train part à quelle heure ?", "When does the next train leave?"],
      ["Il y a une correspondance à Lyon.", "You change at Lyon."],
      ["Le train à destination de Marseille partira voie trois.", "The train to Marseille will leave from platform three."],
      ["Le train est annoncé avec un retard de vingt minutes.", "The train is twenty minutes late."],
      ["Excusez-moi, je crois que c'est ma place.", "Excuse me, I think this is my seat."],
      ["J'ai raté ma correspondance à cause du retard.", "I missed my connection because of the delay."]
    ],
    quiz: [
      { q: "“A return ticket” is:", o: ["un aller simple", "un aller-retour", "un retour simple"], a: 1, ex: "aller-retour = return; aller simple = single." },
      { q: "“Le train à destination de Nice” is the train…", o: ["to Nice", "from Nice", "in Nice"], a: 0, ex: "à destination de = going to; en provenance de = coming from." },
      { q: "“Le train est supprimé” means:", o: ["The train is late.", "The train is cancelled.", "The train is full."], a: 1, ex: "supprimé = cancelled." },
      { q: "“I missed my train” is:", o: ["J'ai manqué mon train.", "J'ai raté mon train.", "Both are correct."], a: 2, ex: "rater and manquer both mean to miss; rater is more common in speech." },
      { q: "“Il y a une correspondance à Lyon” means:", o: ["You change trains at Lyon.", "There's a letter in Lyon.", "The train is direct to Lyon."], a: 0, ex: "une correspondance = a change of train." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    27: {
      gap: [["Nous ___ partis à six heures. (être)", "sommes"], ["Léa est ___ à Paris. (aller)", "allée"], ["Mes amis sont ___ en retard. (arriver)", "arrivés"], ["Il est ___ en 1990. (naître)", "né"]],
      fix: [["J'ai allé à Rome.", "Je suis allé à Rome.|Je suis allée à Rome.", "aller takes être in the passé composé."], ["Elle est parti hier.", "Elle est partie hier.", "With être, the participle agrees: elle est partie."]],
      task: ["Tell the story of a trip in five sentences, with at least four être verbs.", "Raconte un voyage en cinq phrases, avec au moins quatre verbes avec être.", "L'été dernier, mes amis et moi, nous sommes partis en Italie. Nous sommes arrivés à Rome le soir. Nous sommes restés cinq jours. Un jour, nous sommes montés en haut d'une colline magnifique. Nous sommes rentrés fatigués, mais heureux."]
    },
    28: {
      gap: [["Je me ___ réveillé tard. (être)", "suis"], ["Elle s'est ___. (s'habiller)", "habillée"], ["Nous nous ___ promenés. (être)", "sommes"], ["Je ne me suis ___ couché tôt. (negative)", "pas"]],
      fix: [["Je me ai levé à six heures.", "Je me suis levé à six heures.|Je me suis levée à six heures.", "Reflexive verbs always take être."], ["Ils se sont amusé.", "Ils se sont amusés.", "Ils: plural agreement, -s."]],
      task: ["Describe your morning yesterday, with four reflexive verbs in the passé composé.", "Décris ta matinée d'hier, avec quatre verbes pronominaux au passé composé.", "Hier, je me suis réveillé à six heures. Je me suis levé tout de suite et je me suis douché. Je me suis habillé en deux minutes et je suis parti au travail. Le soir, je me suis couché très tôt !"]
    },
    29: {
      gap: [["Un ___ pour Lille, s'il vous plaît. (return)", "aller-retour"], ["Le train partira ___ trois. (platform)", "voie"], ["J'ai ___ mon train ! (missed)", "raté"], ["Il y a une ___ à Lyon. (change of train)", "correspondance"]],
      fix: [["Le train à destination de Paris arrive de Paris.", "Le train en provenance de Paris arrive.", "en provenance de = coming from; à destination de = going to."], ["Un billet aller et retour simple, s'il vous plaît.", "Un aller-retour, s'il vous plaît.|Un aller simple, s'il vous plaît.", "aller-retour (return) or aller simple (single)."]],
      task: ["Write the dialogue at the ticket office: you buy a ticket, ask the time of the next train and if it's direct.", "Écris le dialogue au guichet : tu achètes un billet, tu demandes l'heure du prochain train et s'il est direct.", "Bonjour ! Un aller-retour pour Nantes, s'il vous plaît. — En seconde classe ? — Oui. Le prochain train part à quelle heure ? — À quatorze heures dix. — Il est direct ? — Non, il y a une correspondance au Mans."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "guichet", lesson: 29, level: "A2", icon: "ticket", partner: "Hélène", role: "a ticket office clerk",
    title: "At the ticket office", title_fr: "Au guichet de la gare",
    setting: "Your train has been cancelled. You go to the ticket office, where Hélène helps you find another one.", setting_fr: "Ton train est supprimé. Tu vas au guichet, où Hélène t'aide à en trouver un autre.",
    turns: [
      { p: "Bonjour, je peux vous aider ?", fr: "Hello, can I help you?" },
      { y: ["Bonjour ! Mon train pour Bordeaux est supprimé. Il y a un autre train aujourd'hui ?", "Bonjour ! Mon train pour Bordeaux est supprimée. Il y a un autre train aujourd'hui ?", "Bonjour ! Mon train pour Bordeaux a supprimé. Il y a un autre train aujourd'hui ?"], fr: "Hello! My train to Bordeaux is cancelled. Is there another train today?", why: "Train is masculine: supprimé. Être + participle." },
      { p: "Oui, il y a un train à quinze heures quarante, mais il n'est pas direct.", fr: "Yes, there's a train at 3.40 pm, but it isn't direct." },
      { y: ["Il y a une correspondance où ?", "Il y a une correspondance quand où ?", "Il y a un correspondance où ?"], fr: "Where do I change?", why: "Correspondance is feminine: une correspondance." },
      { p: "À Poitiers. Vous avez dix minutes pour changer de train. Vous arrivez à Bordeaux à dix-neuf heures.", fr: "At Poitiers. You have ten minutes to change trains. You get to Bordeaux at 7 pm." },
      { y: ["D'accord. Je peux utiliser mon billet, ou je dois acheter un nouveau billet ?", "D'accord. Je peux utiliser mon billet, ou je dois de acheter un nouveau billet ?", "D'accord. Je peux utilise mon billet, ou je dois acheter un nouveau billet ?"], fr: "OK. Can I use my ticket, or do I have to buy a new one?", why: "pouvoir and devoir + infinitive, without de." },
      { p: "Votre billet est valable. Je vous donne une nouvelle réservation : voiture huit, place quarante-deux.", fr: "Your ticket is valid. I'll give you a new reservation: carriage eight, seat forty-two." },
      { y: ["Merci beaucoup ! Le train part de quelle voie ?", "Merci beaucoup ! Le train part de quel voie ?", "Merci beaucoup ! Le train part à quelle voie ?"], fr: "Thank you very much! Which platform does the train leave from?", why: "Voie is feminine: quelle voie. Partir de = to leave from." },
      { p: "La voie est affichée vingt minutes avant le départ. Regardez le tableau. Bon voyage !", fr: "The platform is shown twenty minutes before departure. Look at the board. Have a good trip!" },
      { y: ["Merci, bonne fin de journée !", "Merci, bon fin de journée !", "Merci, bonne fin de la journée !"], fr: "Thanks, have a good afternoon!", why: "Fin is feminine: bonne fin de journée, without la." }
    ] }
  );

  W.READINGS.push({
    id: "voyageimprevu", level: "A2", icon: "train-front", title: "Un voyage plein de surprises", genre: "Story",
    intro: "Raphaël tells the story of a journey that didn't go as planned. The passé composé with être and avoir, and reflexive verbs in the past.",
    intro_fr: "Raphaël raconte un voyage qui ne s'est pas passé comme prévu. Le passé composé avec être et avoir, et les verbes pronominaux au passé.",
    paragraphs: [
      { en: "Le mois dernier, je suis parti à Marseille pour le mariage de mon cousin. Le matin du départ, je me suis réveillé trop tard. Je me suis habillé en deux minutes et je suis sorti en courant.", fr: "Last month, I went to Marseille for my cousin's wedding. On the morning I left, I woke up too late. I got dressed in two minutes and ran out of the house." },
      { en: "Je suis arrivé à la gare à huit heures moins deux. Mon train est parti à huit heures pile… sans moi ! Je suis allé au guichet, et j'ai acheté un billet pour le train suivant, avec une correspondance à Lyon.", fr: "I got to the station at two minutes to eight. My train left at exactly eight… without me! I went to the ticket office and bought a ticket for the next train, with a change at Lyon." },
      { en: "À Lyon, je suis descendu du train et je me suis trompé de quai. Heureusement, une dame très gentille m'a aidé : elle est montée avec moi dans le bon train, parce qu'elle aussi est allée à Marseille.", fr: "At Lyon, I got off the train and went to the wrong platform. Luckily, a very kind lady helped me: she got on the right train with me, because she was going to Marseille too." },
      { en: "Pendant le trajet, nous avons parlé de tout et de rien. Et la surprise ? À la mairie, le lendemain, je l'ai vue au premier rang : c'était la grand-mère de la mariée !", fr: "During the journey, we talked about everything and nothing. And the surprise? At the town hall, the next day, I saw her in the front row: she was the bride's grandmother!" }
    ],
    glossary: { "mariage": "wedding", "départ": "departure", "courant": "running", "pile": "exactly, on the dot", "guichet": "ticket office", "suivant": "next", "trompé": "got the wrong…", "quai": "platform", "heureusement": "luckily", "dame": "lady", "trajet": "journey", "lendemain": "the next day", "rang": "row", "mariée": "bride" },
    questions: [
      { q: "Pourquoi Raphaël est parti à Marseille ?", o: ["Pour le travail", "Pour le mariage de son cousin", "Pour des vacances"], a: 1 },
      { q: "Pourquoi il a raté son train ?", o: ["Il s'est réveillé trop tard.", "Le train est parti en avance.", "Il s'est trompé de gare."], a: 0 },
      { q: "Qu'est-ce qui s'est passé à Lyon ?", o: ["Il a raté sa correspondance.", "Il s'est trompé de quai.", "Il a perdu son billet."], a: 1 },
      { q: "Qui a aidé Raphaël ?", o: ["Un contrôleur", "Une dame très gentille", "Son cousin"], a: 1 },
      { q: "Qui était la dame ?", o: ["La mère de Raphaël", "La grand-mère de la mariée", "Une collègue"], a: 1 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-a2-2", unit: "a2-2", level: "A2", icon: "train-front",
    title: "Les annonces en gare", title_fr: "Les annonces en gare",
    context: "In a station, you hear two announcements, then Yasmine asks Arthur, a station agent, about her train.", context_fr: "Dans une gare, on entend deux annonces, puis Yasmine interroge Arthur, un agent de la gare, sur son train.",
    words: [["à destination de", "going to"], ["en provenance de", "coming from"], ["un retard", "a delay"], ["la voiture", "the carriage (on a train)"], ["l'agent", "the member of staff"]],
    lines: [["Annonce", "Le train à destination de Nantes, départ quatorze heures dix, partira voie six.", "fr-FR"], ["Annonce", "Le train en provenance de Lille est annoncé avec un retard de vingt minutes.", "fr-FR"], ["Yasmine", "Excusez-moi, monsieur. Le train pour Nantes, c'est bien voie six ?", "fr-FR"], ["Arthur", "Oui, voie six. Il est à l'heure. Vous avez votre billet ?", "fr-FR"], ["Yasmine", "Oui, sur mon téléphone. Je suis dans la voiture dix-sept. Elle est où ?", "fr-FR"], ["Arthur", "Les voitures dix à dix-huit sont au fond du quai. Allez tout droit.", "fr-FR"], ["Yasmine", "Merci. Et le train s'arrête au Mans ?", "fr-FR"], ["Arthur", "Oui, il s'arrête au Mans et à Angers. Vous arrivez à Nantes à seize heures vingt.", "fr-FR"], ["Yasmine", "Parfait. Merci beaucoup !", "fr-FR"], ["Arthur", "Je vous en prie. Bon voyage !", "fr-FR"]],
    gist: ["Où sont Yasmine et Arthur ?", ["Dans une gare", "Dans un aéroport", "Dans un bus"]],
    detail: [["Le train pour Nantes part de quelle voie ?", ["Six", "Dix-sept", "Seize"]], ["Le train de Lille a combien de minutes de retard ?", ["Vingt", "Dix", "Six"]], ["Dans quelle voiture est Yasmine ?", ["Dix-sept", "Dix", "Huit"]], ["À quelle heure arrive-t-elle à Nantes ?", ["Seize heures vingt", "Quatorze heures dix", "Dix-sept heures"]]],
    decode: ["Le train à destination de Nantes, départ quatorze heures dix, partira voie six.", "Les voitures dix à dix-huit sont au fond du quai."],
    tip: "Station announcements always follow the same order: destination (à destination de) or origin (en provenance de), time, then platform or delay. Listen for those key words, and you'll catch the essential information even in a noisy station.", tip_fr: "Les annonces en gare suivent toujours le même ordre : destination (à destination de) ou provenance (en provenance de), l'heure, puis la voie ou le retard. Guette ces mots-clés, et tu saisiras l'essentiel, même dans une gare bruyante."
  }]);

  W.PROMPTS.push({ id: "fr-a2-2", level: "A2", q: "Raconte un voyage qui t'a marqué : la destination, le trajet, ce que tu as fait, et un moment inoubliable.", fr: "Tell me about a trip that stayed with you: the destination, the journey, what you did, and an unforgettable moment.", time: 120,
    phrases: ["L'année dernière, je suis parti(e) à…", "Nous sommes arrivés…", "Nous sommes restés…", "Un jour, …", "Je n'ai jamais oublié…"],
    model: "Il y a trois ans, je suis parti en Écosse avec deux amis. Nous avons pris l'avion jusqu'à Édimbourg, puis nous avons loué une voiture. Nous sommes restés dix jours. Un jour, nous sommes montés au sommet d'une montagne sous la pluie : c'était difficile, mais la vue était incroyable. Je n'ai jamais oublié ce moment, et je suis retourné en Écosse l'année dernière !" });

  W.WRITING_GUIDE["a2-2"] = { genre: "A postcard from a trip", genre_fr: "Une carte postale de voyage",
    plan: [["Say hello and where you are.", "Dis bonjour et où tu es."], ["How you got there.", "Ton trajet jusque-là."], ["What you've done so far.", "Ce que tu as fait jusqu'ici."], ["A small problem or a surprise.", "Un petit problème ou une surprise."], ["A friendly ending.", "Une fin chaleureuse."]],
    marks: [["Nous sommes arrivés", "être + participle, plural agreement", "être + participe, accord au pluriel"], ["nous avons visité", "a verb with avoir", "un verbe avec avoir"], ["nous nous sommes promenés", "a reflexive verb in the past", "un verbe pronominal au passé"], ["nous nous sommes perdus", "se perdre in the past", "se perdre au passé"], ["Il a fait beau", "the weather in the passé composé", "la météo au passé composé"], ["Gros bisous,", "a friendly ending", "une formule finale amicale"]] };

  W.COURSE.push({ id: "a2-2", level: "A2", icon: "train-front", title: "Travel stories", title_fr: "Voyages",
    intro: "In this unit, you'll tell travel stories: the verbs that take être in the passé composé, and their agreement, reflexive verbs in the past, and everything you need at a French railway station.",
    intro_fr: "Dans cette unité, tu vas raconter des voyages : les verbes qui prennent être au passé composé, et leur accord, les verbes pronominaux au passé, et tout ce qu'il faut savoir dans une gare française.",
    can: ["Use the passé composé with être and make the participle agree", "Use reflexive verbs in the past", "Buy a train ticket and understand station announcements", "Tell the story of a trip"],
    can_fr: ["Utiliser le passé composé avec être et accorder le participe", "Utiliser les verbes pronominaux au passé", "Acheter un billet de train et comprendre les annonces en gare", "Raconter un voyage"],
    lessons: [27, 28, 29], vocab: ["voyageFR", "verbesEtreFR"], reading: "voyageimprevu", prompt: "fr-a2-2",
    writing: { task: "You're on holiday. Write a postcard (70-90 words) to a friend: where you are, how you travelled, what you've done, and a small surprise.", task_fr: "Tu es en vacances. Écris une carte postale (70 à 90 mots) à un ami : où tu es, comment tu as voyagé, ce que tu as fait, et une petite surprise.", words: "70-90",
      tips: ["Bonjour de… !", "Nous sommes arrivés…", "Nous avons visité…", "Nous nous sommes…", "Gros bisous,"],
      checklist: ["I used être with verbs of movement (arriver, partir, aller…)", "Participles with être agree with the subject", "I used avoir with the other verbs", "I used at least one reflexive verb in the past", "I stayed between 70 and 90 words"],
      model: "Bonjour de Bruxelles !\n\nNous sommes arrivés mardi, en train : seulement une heure et demie depuis Paris ! Depuis, nous avons visité la Grand-Place, nous avons mangé beaucoup de gaufres et nous avons acheté du chocolat pour toute la famille. Hier, nous nous sommes promenés dans les vieux quartiers et nous nous sommes perdus… mais nous avons découvert un petit café génial. Il a fait beau tous les jours ! Nous rentrons dimanche.\n\nGros bisous,\nInès et Lucas" } });
})();
