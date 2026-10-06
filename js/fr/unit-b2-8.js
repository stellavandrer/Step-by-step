/* Cours de français, unité B2-8 « Travel and cultures / Voyages et interculturel » : faire + infinitif, se faire +
   infinitif, laisser + infinitif ; les verbes et leurs prépositions (penser à / de, manquer à, s'attendre à, se
   méfier de…) ; faire une réclamation en voyage et comprendre les codes culturels. Personnages, hôtel et compagnie
   fictifs, prénoms français. Faits vérifiables seulement : le règlement européen n° 261/2004 prévoit une
   indemnisation des passagers aériens en cas de retard important ou d'annulation, sauf circonstances
   extraordinaires ; en France, on dit bonjour en entrant dans un commerce ; le participe de laisser + infinitif
   peut rester invariable (rectifications de 1990) ; le choc culturel est souvent décrit en plusieurs phases. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "voyageInterFR", icon: "globe", title: "Travel and other cultures", title_fr: "Voyages et autres cultures", level: "B2", words: [
    ["le dépaysement", "the feeling of being somewhere completely different", "J'adore le dépaysement des voyages lointains."],
    ["le choc culturel", "culture shock", "Le premier mois, il a vécu un vrai choc culturel."],
    ["l'expatrié / l'expatriée", "the expatriate (m) / (f)", "Beaucoup d'expatriés vivent dans ce quartier."],
    ["s'expatrier", "to move abroad", "Elle s'est expatriée au Japon."],
    ["s'adapter", "to adapt", "Les enfants s'adaptent vite."],
    ["s'intégrer", "to fit in, to integrate", "Il s'est bien intégré dans son nouveau pays."],
    ["les coutumes", "customs", "Il faut respecter les coutumes locales."],
    ["les mœurs", "customs, ways of life", "Les mœurs changent d'une génération à l'autre."],
    ["le savoir-vivre", "good manners, etiquette", "Le savoir-vivre varie d'un pays à l'autre."],
    ["la politesse", "politeness", "Ici, la politesse commence par un bonjour."],
    ["faire la bise", "to greet with a kiss on the cheek", "En France, on fait souvent la bise entre amis."],
    ["le tutoiement", "using tu", "Dans les start-up, le tutoiement est fréquent."],
    ["le vouvoiement", "using vous", "Le vouvoiement reste la règle avec les inconnus."],
    ["le décalage horaire", "the time difference; jet lag", "Je n'arrive pas à dormir à cause du décalage horaire."],
    ["l'escale", "the stopover", "Nous avons fait escale à Dubaï."],
    ["le vol direct", "the direct flight", "Il n'y a pas de vol direct pour Lima."],
    ["l'itinéraire", "the route, the itinerary", "Nous avons préparé notre itinéraire."],
    ["hors des sentiers battus", "off the beaten track", "Ils aiment voyager hors des sentiers battus."]
  ] },
  { id: "reclamationFR", icon: "luggage", title: "Complaints and rights", title_fr: "Réclamations et droits", level: "B2", words: [
    ["l'indemnisation", "compensation", "J'ai demandé une indemnisation à la compagnie."],
    ["indemniser", "to compensate", "Les passagers ont été indemnisés."],
    ["le dédommagement", "compensation, damages", "L'hôtel m'a proposé un dédommagement."],
    ["dédommager", "to compensate", "Nous vous dédommagerons de vos frais."],
    ["la surréservation", "overbooking", "Le vol était en surréservation."],
    ["le bagage égaré", "the lost luggage", "Mon bagage égaré a été retrouvé trois jours plus tard."],
    ["la compagnie aérienne", "the airline", "La compagnie aérienne a annulé le vol."],
    ["le médiateur / la médiatrice", "the ombudsman (m) / (f)", "J'ai saisi la médiatrice du tourisme."],
    ["porter plainte", "to file a complaint (with the police)", "Elle a porté plainte pour vol."],
    ["le geste commercial", "the goodwill gesture", "L'hôtel m'a offert une nuit en geste commercial."],
    ["le justificatif", "the receipt, the supporting document", "Gardez tous vos justificatifs."],
    ["rembourser intégralement", "to refund in full", "Le billet a été remboursé intégralement."],
    ["dans les meilleurs délais", "as soon as possible", "Merci de me répondre dans les meilleurs délais."],
    ["faire valoir ses droits", "to assert one's rights", "Il faut faire valoir ses droits."],
    ["la prise en charge", "coverage, handling (of costs)", "La prise en charge de l'hôtel est obligatoire."],
    ["avoir droit à", "to be entitled to", "Vous avez droit à un repas."],
    ["contester", "to dispute, to challenge", "J'ai contesté la facture."],
    ["insatisfait / insatisfaite", "dissatisfied (m) / (f)", "Les clients insatisfaits peuvent écrire au service."]
  ] });

  W.LESSONS.push(
  {
    id: 96, level: "B2", icon: "settings",
    title: "Je fais réparer, je me suis fait couper: faire + infinitive", title_fr: "Je fais réparer, je me suis fait couper : faire + infinitif",
    subtitle: "Having something done, getting something done to you, and letting something happen.", subtitle_fr: "Faire faire quelque chose, se faire faire quelque chose, et laisser faire.",
    body: `
<h2>Faire + infinitive</h2>
<p>The subject doesn't do the action: someone else does it. <s-fr>Je fais réparer ma voiture.</s-fr> (I'm having my car repaired.) · <s-fr>Ils ont fait construire une maison.</s-fr> · <s-fr>J'ai fait venir le médecin.</s-fr> (I got the doctor to come.)</p>
<p>Pronouns go before <s-fr>faire</s-fr>, and <s-fr>fait</s-fr> never agrees here: <s-fr>Ma voiture ? Je la fais réparer.</s-fr> · <s-fr>Les invités ? Je les ai fait entrer.</s-fr></p>
<h2>Se faire + infinitive</h2>
<p>Something is done to you or for you: <s-fr>Je me suis fait couper les cheveux.</s-fr> (I had my hair cut.) · <s-fr>Elle s'est fait voler son sac.</s-fr> (She had her bag stolen.) · <s-fr>Il s'est fait renvoyer.</s-fr> (He got fired.) Since <s-fr>fait</s-fr> doesn't agree, these sentences are the same for everyone.</p>
<h2>Laisser + infinitive</h2>
<p><s-fr>Laisse-moi parler !</s-fr> · <s-fr>Ils ont laissé tomber le projet.</s-fr> (They dropped the project.) · <s-fr>On les a laissé partir.</s-fr> Since the 1990 spelling reform, <s-fr>laissé</s-fr> can also stay the same here.</p>
<div class="tip"><s-fr>faire faire</s-fr> isn't a mistake: <s-fr>Je fais faire une robe</s-fr> means "I'm having a dress made". And for the hairdresser, French always says <s-fr>je me fais couper les cheveux</s-fr>, never <s-fr>je coupe mes cheveux</s-fr> (which means you cut them yourself).</div>
`,
    examples: [
      ["Je fais réparer mon vélo chez Paul.", "I'm having my bike repaired at Paul's."],
      ["Nous avons fait venir un plombier.", "We got a plumber to come."],
      ["Ma valise ? Je l'ai fait livrer à l'hôtel.", "My suitcase? I had it delivered to the hotel."],
      ["Je me suis fait couper les cheveux hier.", "I had my hair cut yesterday."],
      ["Elle s'est fait voler son passeport à l'aéroport.", "She had her passport stolen at the airport."],
      ["Il s'est fait renvoyer de son travail.", "He got fired from his job."],
      ["Laisse-moi t'aider.", "Let me help you."],
      ["Finalement, ils ont laissé tomber leur projet de voyage.", "In the end, they dropped their travel plans."]
    ],
    quiz: [
      { q: "“I'm having my car repaired” is:", o: ["Je répare ma voiture.", "Je fais réparer ma voiture.", "Je me répare ma voiture."], a: 1, ex: "faire + infinitive: someone else does it." },
      { q: "“I had my hair cut” is:", o: ["J'ai coupé mes cheveux.", "Je me suis fait couper les cheveux.", "J'ai fait couper mes cheveux à moi."], a: 1, ex: "se faire + infinitive." },
      { q: "“The guests? I let them in” (faire entrer):", o: ["Je les ai fait entrer.", "Je les ai faits entrer.", "Je ai fait les entrer."], a: 0, ex: "Pronoun before faire; fait doesn't agree." },
      { q: "“She had her bag stolen” is:", o: ["Elle s'est faite voler son sac.", "Elle s'est fait voler son sac.", "Elle a volé son sac."], a: 1, ex: "fait doesn't agree in se faire + infinitive." },
      { q: "“They dropped the project” is:", o: ["Ils ont laissé tomber le projet.", "Ils ont fait tomber le projet.", "Ils ont tombé le projet."], a: 0, ex: "laisser tomber = to drop, to give up." }
    ]
  },
  {
    id: 97, level: "B2", icon: "link",
    title: "Tu me manques: verbs and their prepositions", title_fr: "Tu me manques : les verbes et leurs prépositions",
    subtitle: "One verb, two meanings; à or de; and the verbs that work the other way round from English.", subtitle_fr: "Un verbe, deux sens ; à ou de ; et les verbes qui fonctionnent à l'inverse de l'anglais.",
    body: `
<h2>Same verb, different meaning</h2>
<table>
<tr><th>French</th><th>Meaning</th></tr>
<tr><td><s-fr>penser à</s-fr> / <s-fr>penser de</s-fr></td><td>to think about / to have an opinion of: <s-fr>Je pense à toi.</s-fr> · <s-fr>Que penses-tu de ce film ?</s-fr></td></tr>
<tr><td><s-fr>tenir à</s-fr> / <s-fr>tenir de</s-fr></td><td>to care about, to insist / to take after: <s-fr>Je tiens à venir.</s-fr> · <s-fr>Elle tient de sa mère.</s-fr></td></tr>
<tr><td><s-fr>manquer de</s-fr> / <s-fr>manquer à</s-fr></td><td>to lack / to be missed by: <s-fr>Il manque de patience.</s-fr> · <s-fr>Tu me manques.</s-fr> (I miss you.)</td></tr>
</table>
<p><s-fr>Tu me manques</s-fr> works the other way round from English: the person you miss is the subject. <s-fr>Paris me manque.</s-fr> = I miss Paris.</p>
<h2>Verbs with à</h2>
<p><s-fr>s'attendre à</s-fr> (to expect), <s-fr>s'intéresser à</s-fr>, <s-fr>renoncer à</s-fr>, <s-fr>réfléchir à</s-fr>, <s-fr>s'habituer à</s-fr> (to get used to), <s-fr>participer à</s-fr>, <s-fr>ressembler à</s-fr>, <s-fr>obéir à</s-fr>.</p>
<h2>Verbs with de</h2>
<p><s-fr>profiter de</s-fr> (to make the most of), <s-fr>se méfier de</s-fr> (to be wary of), <s-fr>se servir de</s-fr> (to use), <s-fr>dépendre de</s-fr>, <s-fr>se moquer de</s-fr>, <s-fr>s'occuper de</s-fr>, <s-fr>changer de</s-fr>.</p>
<h2>No preposition in French, one in English (and vice versa)</h2>
<p><s-fr>attendre le bus</s-fr> (wait for), <s-fr>chercher ses clés</s-fr> (look for), <s-fr>écouter la radio</s-fr> (listen to), <s-fr>regarder la carte</s-fr> (look at), <s-fr>payer le repas</s-fr> (pay for). And the reverse: <s-fr>répondre à</s-fr> (answer), <s-fr>téléphoner à</s-fr> (phone), <s-fr>entrer dans</s-fr> (enter).</p>
<div class="tip">With à, the pronoun is y for things and lui / leur for people (<s-fr>J'y pense</s-fr> / <s-fr>Je lui ressemble</s-fr>), except a few verbs like <s-fr>penser à</s-fr> and <s-fr>s'habituer à</s-fr>, which take <s-fr>à lui</s-fr>, <s-fr>à elle</s-fr> for people: <s-fr>Je pense à elle.</s-fr></div>
`,
    examples: [
      ["Que penses-tu de cette ville ?", "What do you think of this town?"],
      ["Je pense souvent à mes amis de Montréal.", "I often think about my friends in Montreal."],
      ["Ma famille me manque beaucoup.", "I miss my family a lot."],
      ["Je ne m'attendais pas à un accueil aussi chaleureux.", "I didn't expect such a warm welcome."],
      ["Il faut du temps pour s'habituer au décalage horaire.", "It takes time to get used to the time difference."],
      ["Profitez de votre séjour !", "Enjoy your stay!"],
      ["Méfiez-vous des faux taxis à l'aéroport.", "Be wary of fake taxis at the airport."],
      ["J'attends le bus depuis vingt minutes.", "I've been waiting for the bus for twenty minutes."]
    ],
    quiz: [
      { q: "“I miss you” is:", o: ["Je te manque.", "Tu me manques.", "Je manque de toi."], a: 1, ex: "The person you miss is the subject." },
      { q: "“What do you think of this film?” is:", o: ["Que penses-tu à ce film ?", "Que penses-tu de ce film ?", "Que penses-tu sur ce film ?"], a: 1, ex: "An opinion: penser de." },
      { q: "“I'm waiting for the train” is:", o: ["J'attends pour le train.", "J'attends le train.", "J'attends au train."], a: 1, ex: "attendre + direct object." },
      { q: "“I didn't expect that” is:", o: ["Je ne m'attendais pas à ça.", "Je n'attendais pas pour ça.", "Je ne m'attendais pas de ça."], a: 0, ex: "s'attendre à." },
      { q: "“She takes after her father” is:", o: ["Elle tient à son père.", "Elle tient de son père.", "Elle tient son père."], a: 1, ex: "tenir de = to take after." }
    ]
  },
  {
    id: 98, level: "B2", kind: "functional", icon: "message-square",
    title: "Everyday French: complaints and cultural codes", title_fr: "Le français de tous les jours : réclamations et codes culturels",
    subtitle: "Complain firmly but politely when things go wrong, and avoid cultural blunders.", subtitle_fr: "Faire une réclamation fermement mais poliment, et éviter les maladresses culturelles.",
    body: `
<h2>Making a complaint</h2>
<p><s-fr>Je souhaiterais faire une réclamation.</s-fr> · <s-fr>La chambre ne correspond pas à ce qui était annoncé.</s-fr> · <s-fr>Je vous demande de bien vouloir…</s-fr> · <s-fr>J'attends un remboursement, ou au moins un geste commercial.</s-fr> · <s-fr>Faute de réponse dans un délai de quinze jours, je saisirai le médiateur.</s-fr></p>
<h2>Knowing your rights</h2>
<p>In the European Union, the regulation n° 261/2004 entitles air passengers to compensation in some cases of long delay or cancellation, unless there are extraordinary circumstances. Keep every receipt: <s-fr>gardez tous vos justificatifs</s-fr>.</p>
<h2>Cultural codes in France</h2>
<p>Say <s-fr>Bonjour</s-fr> when you walk into a shop, and <s-fr>Au revoir</s-fr> when you leave: starting a request without a greeting is often seen as rude. Use <s-fr>vous</s-fr> with people you don't know. <s-fr>La bise</s-fr> depends on the region and the situation: let the other person lead.</p>
<h2>Repairing a misunderstanding</h2>
<p><s-fr>Je ne voulais pas vous offenser.</s-fr> · <s-fr>Chez moi, on fait autrement.</s-fr> · <s-fr>Excusez-moi, je ne connaissais pas l'usage.</s-fr> · <s-fr>Comment est-ce qu'on fait, ici ?</s-fr></p>
<div class="tip">A firm complaint stays polite: the conditional (<s-fr>je souhaiterais</s-fr>), facts and dates, a precise request, and a deadline. Anger rarely gets you a refund; a clear file often does.</div>
`,
    examples: [
      ["Je souhaiterais faire une réclamation.", "I'd like to make a complaint."],
      ["La chambre ne correspond pas à ce qui était annoncé sur le site.", "The room doesn't match what was advertised on the website."],
      ["Je vous demande de bien vouloir me rembourser la différence.", "I would ask you to kindly refund me the difference."],
      ["Faute de réponse sous quinze jours, je saisirai le médiateur.", "If I receive no reply within fifteen days, I will refer the matter to the ombudsman."],
      ["Gardez tous vos justificatifs.", "Keep all your receipts."],
      ["Excusez-moi, je ne connaissais pas l'usage.", "Sorry, I didn't know the custom."],
      ["Comment est-ce qu'on fait, ici, pour saluer ?", "How do people say hello here?"]
    ],
    quiz: [
      { q: "A polite but firm way to start a complaint:", o: ["C'est un scandale !", "Je souhaiterais faire une réclamation.", "Vous êtes nuls."], a: 1, ex: "The conditional keeps it polite." },
      { q: "“Faute de réponse” means:", o: ["Because of a wrong answer", "If there's no reply", "Thanks to your reply"], a: 1, ex: "faute de = for lack of." },
      { q: "In a French shop, you should first:", o: ["ask the price", "say bonjour", "pay"], a: 1, ex: "Bonjour first: it's an important code." },
      { q: "“Je ne connaissais pas l'usage” means:", o: ["I didn't know how to use it.", "I didn't know the custom.", "I didn't know the user."], a: 1, ex: "l'usage = the custom, the practice." },
      { q: "In the EU, regulation 261/2004 deals with:", o: ["air passengers' rights", "hotel prices", "driving licences"], a: 0, ex: "Compensation for long delays and cancellations, in some cases." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    96: {
      gap: [["Je ___ réparer ma voiture au garage. (faire)", "fais"], ["Je me suis ___ couper les cheveux. (faire)", "fait"], ["Ma valise ? Je l'ai fait ___ à l'hôtel. (livrer)", "livrer"], ["Ils ont ___ tomber le projet. (laisser)", "laissé"]],
      fix: [["J'ai coupé mes cheveux chez le coiffeur.", "Je me suis fait couper les cheveux chez le coiffeur.", "At the hairdresser's: se faire couper les cheveux."], ["Les invités ? Je les ai faits entrer.", "Les invités ? Je les ai fait entrer.", "In faire + infinitive, fait never agrees."]],
      task: ["Say four things you have had done or will have done (repairs, deliveries, services), with faire or se faire + infinitive.", "Dis quatre choses que tu as fait faire ou que tu vas faire faire (réparations, livraisons, services), avec faire ou se faire + infinitif.", "La semaine dernière, j'ai fait réparer mon vélo. Hier, je me suis fait couper les cheveux. Demain, je vais faire livrer un nouveau canapé. Et le mois prochain, je ferai repeindre la cuisine par un professionnel."]
    },
    97: {
      gap: [["Que penses-tu ___ ce restaurant ? (opinion)", "de"], ["Ma famille me ___ beaucoup. (I miss)", "manque"], ["Je ne m'attendais pas ___ un tel accueil. (to)", "à"], ["Méfiez-vous ___ faux taxis. (of)", "des"]],
      fix: [["Je manque mes amis.", "Mes amis me manquent.", "The person you miss is the subject: mes amis me manquent."], ["J'attends pour le bus.", "J'attends le bus.", "attendre takes no preposition."]],
      task: ["Write to a friend who lives abroad: say what you miss, what you think of their new city, and what you're looking forward to.", "Écris à un ami qui vit à l'étranger : dis ce qui te manque, ce que tu penses de sa nouvelle ville, et ce que tu attends avec impatience.", "Tu me manques beaucoup depuis ton départ ! Que penses-tu de ta nouvelle ville ? D'après tes photos, je ne m'attendais pas à des quartiers aussi colorés. Profite bien de ton séjour, et méfie-toi de l'hiver : il paraît qu'il est long ! J'ai hâte de venir te voir en avril."]
    },
    98: {
      gap: [["Je souhaiterais faire une ___. (complaint)", "réclamation"], ["La chambre ne correspond pas ___ ce qui était annoncé. (to)", "à"], ["___ de réponse, je saisirai le médiateur. (for lack of)", "Faute"], ["Gardez tous vos ___. (receipts)", "justificatifs"]],
      fix: [["C'est une honte ! Remboursez-moi tout de suite !", "Je souhaiterais être remboursé.|Je souhaiterais être remboursée.|Je vous demande de bien vouloir me rembourser.", "A complaint stays polite: the conditional or je vous demande de bien vouloir."], ["La chambre ne correspond pas avec la photo.", "La chambre ne correspond pas à la photo.", "correspondre à."]],
      task: ["Write the four key sentences of a complaint to a hotel: the problem, a fact, your request, and a deadline.", "Écris les quatre phrases clés d'une réclamation à un hôtel : le problème, un fait, ta demande et un délai.", "Je souhaiterais vous faire part de ma déception concernant mon séjour du 3 au 6 mai. La chambre réservée avec vue sur la mer donnait en réalité sur le parking. Je vous demande de bien vouloir me rembourser la différence de prix. Faute de réponse dans un délai de quinze jours, je saisirai le médiateur."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "reclamationhotel", lesson: 98, level: "B2", icon: "message-square", partner: "M. Leroux", role: "the hotel receptionist",
    title: "The wrong room", title_fr: "La mauvaise chambre",
    setting: "You booked a room with a sea view. You've been given a noisy room over the car park. Complain politely at reception.", setting_fr: "Tu as réservé une chambre avec vue sur la mer. On t'a donné une chambre bruyante au-dessus du parking. Fais une réclamation polie à la réception.",
    turns: [
      { p: "Bonsoir, je peux vous aider ?", fr: "Good evening, can I help you?" },
      { y: ["Bonsoir. Je souhaiterais faire une réclamation : la chambre ne correspond pas à ce qui était annoncé.", "Bonsoir. Je souhaiterais faire une réclamation : la chambre ne correspond pas avec ce qui était annoncé.", "Bonsoir. Je souhaiterais faire une réclamation : la chambre ne correspond pas à ce que était annoncé."], fr: "Good evening. I'd like to make a complaint: the room doesn't match what was advertised.", why: "correspondre à; ce qui is the subject of était." },
      { p: "Ah bon ? Qu'est-ce qui ne va pas ?", fr: "Really? What's wrong?" },
      { y: ["J'avais réservé une chambre avec vue sur la mer, et elle donne sur le parking. Je ne m'attendais pas à ça.", "J'avais réservé une chambre avec vue sur la mer, et elle donne sur le parking. Je ne m'attendais pas de ça.", "J'avais réservé une chambre avec vue sur la mer, et elle donne sur le parking. Je n'attendais pas à ça."], fr: "I had booked a room with a sea view, and it looks onto the car park. I didn't expect that.", why: "s'attendre à." },
      { p: "Je suis désolé, l'hôtel est complet ce soir. Je ne peux pas vous changer de chambre.", fr: "I'm sorry, the hotel is full tonight. I can't move you to another room." },
      { y: ["Je comprends. Dans ce cas, pourriez-vous faire monter ma valise dans une autre chambre demain matin ?", "Je comprends. Dans ce cas, pourriez-vous monter faire ma valise dans une autre chambre demain matin ?", "Je comprends. Dans ce cas, pourriez-vous faire ma valise monter dans une autre chambre demain matin ?"], fr: "I understand. In that case, could you have my suitcase taken up to another room tomorrow morning?", why: "faire + infinitive + object: faire monter ma valise." },
      { p: "Bien sûr. Une chambre avec vue se libère demain à midi.", fr: "Of course. A room with a view will be free tomorrow at noon." },
      { y: ["Merci. Et pour cette nuit, j'aimerais un geste commercial, puisque la chambre ne correspond pas à ma réservation.", "Merci. Et pour cette nuit, j'aimerais un geste commerciale, puisque la chambre ne correspond pas à ma réservation.", "Merci. Et pour cette nuit, j'aimerais un geste commercial, puisque la chambre ne correspond pas de ma réservation."], fr: "Thank you. And for tonight, I'd like a goodwill gesture, since the room doesn't match my booking.", why: "un geste commercial (m); correspondre à." },
      { p: "Je peux vous offrir le petit-déjeuner pendant tout le séjour. Ça vous convient ?", fr: "I can offer you breakfast for your whole stay. Is that all right?" },
      { y: ["C'est très aimable, merci. Je vous remercie d'avoir pris ma demande au sérieux.", "C'est très aimable, merci. Je vous remercie d'avoir pris ma demande au sérieuse.", "C'est très aimable, merci. Je vous remercie d'avoir prendre ma demande au sérieux."], fr: "That's very kind, thank you. Thank you for taking my request seriously.", why: "remercier de + past infinitive: d'avoir pris; au sérieux never changes." }
    ] }
  );

  W.READINGS.push({
    id: "chocculturel", level: "B2", icon: "globe", title: "S'expatrier : les étapes du choc culturel", genre: "Magazine article",
    intro: "Moving abroad is exciting, then often difficult, then familiar. An article on the stages of culture shock, with Chloé's experience in Montreal. Verbs with prepositions and se faire + infinitive.",
    intro_fr: "S'installer à l'étranger, c'est enthousiasmant, puis souvent difficile, puis familier. Un article sur les étapes du choc culturel, avec l'expérience de Chloé à Montréal. Les verbes et leurs prépositions, et se faire + infinitif.",
    paragraphs: [
      { en: "Partir vivre à l'étranger fait rêver beaucoup de gens. Pourtant, les spécialistes de l'interculturel décrivent souvent l'expatriation comme une succession d'étapes. L'anthropologue Kalervo Oberg a été l'un des premiers, dans les années 1950, à parler de choc culturel.", fr: "Moving abroad is many people's dream. Yet intercultural specialists often describe living abroad as a series of stages. The anthropologist Kalervo Oberg was one of the first, in the 1950s, to talk about culture shock." },
      { en: "Au début, tout est nouveau et tout enchante : c'est ce qu'on appelle souvent la lune de miel. Chloé, une Lyonnaise installée à Montréal depuis trois ans, s'en souvient : le premier mois, je trouvais tout génial, même la neige !", fr: "At first, everything is new and delightful: it's often called the honeymoon. Chloé, from Lyon, who has lived in Montreal for three years, remembers it: the first month, I thought everything was wonderful, even the snow!" },
      { en: "Puis viennent les premières difficultés : les démarches administratives, les codes qu'on ne comprend pas, la famille qui manque. Je ne m'attendais pas à ce que les gens me tutoient aussi vite, raconte Chloé. Et je me suis fait reprendre plusieurs fois parce que j'utilisais des expressions françaises que personne ne comprenait ici.", fr: "Then come the first difficulties: paperwork, codes you don't understand, missing your family. I didn't expect people to say tu to me so quickly, says Chloé. And I was corrected several times because I used French expressions nobody understood here." },
      { en: "Petit à petit, on s'habitue : on comprend les usages, on se fait des amis, on prend ses repères. Pour Chloé, le déclic est venu en rejoignant une chorale de quartier, où elle a lié connaissance avec des voisins de tous âges.", fr: "Little by little, you get used to it: you understand the customs, you make friends, you get your bearings. For Chloé, the turning point came when she joined a neighbourhood choir, where she got to know neighbours of all ages." },
      { en: "Enfin, on finit par se sentir chez soi, sans pour autant renoncer à sa propre culture. Aujourd'hui, la France me manque parfois, surtout le pain, sourit Chloé. Mais quand je rentre à Lyon, c'est Montréal qui me manque !", fr: "Finally, you end up feeling at home, without giving up your own culture. Today, I sometimes miss France, especially the bread, smiles Chloé. But when I go back to Lyon, it's Montreal I miss!" }
    ],
    glossary: { "interculturel": "intercultural", "expatriation": "living abroad", "anthropologue": "anthropologist", "enchante": "delights", "lune": "moon (la lune de miel: the honeymoon)", "tutoient": "say tu to", "reprendre": "to correct (se faire reprendre: to be corrected)", "repères": "bearings, landmarks", "déclic": "turning point, click", "rejoignant": "joining", "chorale": "choir", "lié": "made (lier connaissance: to get to know someone)" },
    questions: [
      { q: "Comment les spécialistes décrivent-ils souvent l'expatriation ?", o: ["Comme une succession d'étapes", "Comme des vacances", "Comme une erreur"], a: 0 },
      { q: "Que pensait Chloé pendant le premier mois ?", o: ["Elle voulait rentrer en France.", "Elle trouvait tout génial, même la neige.", "Elle détestait l'hiver."], a: 1 },
      { q: "Qu'est-ce qui a surpris Chloé ?", o: ["Le prix du pain", "La taille de la ville", "Que les gens la tutoient aussi vite"], a: 2 },
      { q: "Comment Chloé a-t-elle trouvé ses repères ?", o: ["En rejoignant une chorale de quartier", "En changeant de travail", "En rentrant à Lyon"], a: 0 },
      { q: "Que ressent Chloé aujourd'hui quand elle rentre à Lyon ?", o: ["Elle ne veut plus repartir.", "Montréal lui manque.", "Elle oublie Montréal."], a: 1 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-b2-8", unit: "b2-8", level: "B2", icon: "luggage",
    title: "La valise perdue", title_fr: "La valise perdue",
    context: "At the airport, Mélanie's suitcase hasn't arrived. M. Diallo, at the baggage desk, explains what happens next.", context_fr: "À l'aéroport, la valise de Mélanie n'est pas arrivée. M. Diallo, au comptoir des bagages, lui explique la suite.",
    words: [["le tapis", "the baggage carousel"], ["l'étiquette bagage", "the baggage tag"], ["de première nécessité", "essential"], ["sur présentation de", "on presentation of"], ["localiser", "to locate"]],
    lines: [["M. Diallo", "Bonjour, madame. Votre valise n'est pas arrivée ?", "fr-FR"], ["Mélanie", "Non. J'ai attendu au tapis pendant quarante minutes. J'arrive de Lisbonne, avec une escale à Madrid.", "fr-FR"], ["M. Diallo", "Il est possible qu'elle soit restée à Madrid. Je vais vous faire remplir un formulaire de déclaration de perte. Vous avez votre étiquette bagage ?", "fr-FR"], ["Mélanie", "Oui, la voici. Il y a mes vêtements, mes médicaments… Je ne m'attendais vraiment pas à ça.", "fr-FR"], ["M. Diallo", "Je comprends. Dès qu'on la retrouvera, on vous la fera livrer à votre hôtel, sans frais.", "fr-FR"], ["Mélanie", "Et en attendant ? Je n'ai rien pour ce soir.", "fr-FR"], ["M. Diallo", "Vous pouvez acheter les articles de première nécessité : ils vous seront remboursés sur présentation des justificatifs. Gardez bien tous vos tickets.", "fr-FR"], ["Mélanie", "Et si elle n'est jamais retrouvée ?", "fr-FR"], ["M. Diallo", "Dans ce cas, vous aurez droit à une indemnisation. Mais rassurez-vous : la plupart des bagages sont retrouvés en quelques jours.", "fr-FR"], ["Mélanie", "Bon. Merci, monsieur. Vous me tiendrez au courant ?", "fr-FR"], ["M. Diallo", "Bien sûr. Vous recevrez un message dès qu'elle sera localisée.", "fr-FR"]],
    gist: ["Quel est le problème de Mélanie ?", ["Sa valise n'est pas arrivée.", "Elle a raté son avion.", "Son hôtel est complet."]],
    detail: [["Où la valise est-elle peut-être restée ?", ["À Madrid", "À Lisbonne", "À Paris"]], ["Que va-t-on faire de la valise quand on la retrouvera ?", ["La faire livrer à l'hôtel", "La garder à l'aéroport", "La renvoyer à Lisbonne"]], ["Comment Mélanie sera-t-elle remboursée de ses achats ?", ["Sur présentation des justificatifs", "Sans rien montrer", "Elle ne sera pas remboursée."]], ["Comment saura-t-elle que la valise est localisée ?", ["Par un message", "Par une lettre", "En rappelant l'aéroport"]]],
    decode: ["Je vais vous faire remplir un formulaire", "on vous la fera livrer à votre hôtel"],
    tip: "Listen for faire + infinitive: je vais vous faire remplir, on vous la fera livrer. It tells you who will do the action and who will just benefit from it.", tip_fr: "Repère faire + infinitif : je vais vous faire remplir, on vous la fera livrer. Ça te dit qui fera l'action et qui en profitera seulement."
  }]);

  W.LEXIS = W.LEXIS || {};
  W.LEXIS["b2-8"] = {
    colloc: [
      ["faire escale", "to stop over", "Nous avons fait escale à Dubaï.", "fait", ["pris", "tenu"]],
      ["prendre l'avion", "to fly, to take the plane", "Je prends l'avion pour la première fois.", "prends", ["monte", "porte"]],
      ["réserver une chambre", "to book a room", "J'ai réservé une chambre avec vue.", "réservé", ["gardé", "tenu"]],
      ["déposer une réclamation", "to file a complaint", "Elle a déposé une réclamation auprès de la compagnie.", "déposé", ["posé", "mis"]],
      ["se mettre en route", "to set off", "Nous nous sommes mis en route à l'aube.", "route", ["rue", "voie"]],
      ["prendre ses repères", "to get one's bearings", "Il m'a fallu un mois pour prendre mes repères.", "prendre", ["faire", "tenir"]],
      ["sortir des sentiers battus", "to go off the beaten track", "J'aime sortir des sentiers battus.", "sentiers", ["routes", "rues"]],
      ["faire un faux pas", "to make a blunder", "Sans le savoir, j'ai fait un faux pas.", "faux", ["vrai", "long"]],
      ["tenir compte de", "to take into account", "Il faut tenir compte des coutumes locales.", "tenir", ["prendre", "faire"]],
      ["lier connaissance", "to get acquainted", "Nous avons lié connaissance dans le train.", "lié", ["tissé", "tenu"]]
    ],
    wf: [
      ["L'___ à un nouveau pays prend du temps. (ADAPTER)", "adaptation"],
      ["Son ___ dans l'équipe a été rapide. (INTÉGRER)", "intégration"],
      ["Les habitants sont très ___. (ACCUEILLIR)", "accueillants"],
      ["Entrer sans dire bonjour, c'est une ___. (POLI)", "impolitesse"],
      ["Ce voyage m'a offert un vrai ___. (DÉPAYSER)", "dépaysement"],
      ["Les passagers réclament une ___. (INDEMNISER)", "indemnisation"],
      ["Les clients ___ peuvent écrire au service. (SATISFAIRE)", "insatisfaits"],
      ["Ce voyage reste un souvenir ___. (OUBLIER)", "inoubliable"]
    ],
    kwt: [
      ["Un garagiste répare ma voiture.", "FAIS", "Je ___ ma voiture.", "fais réparer"],
      ["On m'a volé mon portefeuille dans le métro.", "FAIT", "Je me suis ___ mon portefeuille dans le métro.", "fait voler"],
      ["Je regrette l'absence de mes amis.", "MANQUENT", "Mes amis ___.", "me manquent"],
      ["Quelle est ton opinion sur ce film ?", "PENSES", "Qu'est-ce que tu ___ film ?", "penses de ce"],
      ["Je ne prévoyais pas un tel accueil.", "ATTENDAIS", "Je ne ___ un tel accueil.", "m'attendais pas à"],
      ["Elle a abandonné le projet.", "TOMBER", "Elle a ___ le projet.", "laissé tomber"]
    ],
    idioms: [
      ["avoir la bougeotte", "avoir sans cesse envie de partir, de bouger", "to have itchy feet", "Depuis son retour, elle a la bougeotte.", "a la bougeotte"],
      ["se mettre au vert", "aller se reposer à la campagne", "to get away to the countryside", "Cet été, on se met au vert dans les Vosges.", "se met au vert"],
      ["être comme un poisson dans l'eau", "se sentir parfaitement à l'aise", "to be in one's element", "À Rome, il est comme un poisson dans l'eau.", "comme un poisson dans l'eau"],
      ["perdre le nord", "ne plus savoir où l'on est, perdre la tête", "to lose one's bearings", "Avec le décalage horaire, j'ai complètement perdu le nord.", "perdu le nord"],
      ["à l'autre bout du monde", "très loin", "on the other side of the world", "Sa fille vit à l'autre bout du monde.", "à l'autre bout du monde"],
      ["avoir le mal du pays", "regretter son pays quand on est loin", "to be homesick", "Les premiers mois, j'avais le mal du pays.", "le mal du pays"],
      ["mettre les voiles", "partir", "to clear off, to leave", "Allez, on met les voiles !", "met les voiles"],
      ["voir du pays", "voyager, découvrir le monde", "to see the world", "Il a beaucoup vu de pays dans sa jeunesse.", "vu de pays"]
    ]
  };

  W.PROMPTS.push({ id: "fr-b2-8", level: "B2", q: "Raconte un malentendu culturel que tu as vécu ou observé. Qu'est-ce que tu en as appris ?", fr: "Tell about a cultural misunderstanding you experienced or saw. What did you learn from it?", time: 180,
    phrases: ["Je ne m'attendais pas à…", "Je me suis fait…", "Chez moi, on…", "Ici, il faut…", "Depuis, je…"],
    model: "La première fois que j'ai poussé la porte d'une boulangerie à Paris, j'ai demandé directement une baguette, sans dire bonjour. La boulangère a souri et m'a répondu : bonjour d'abord ! Je ne m'attendais pas à ça : chez moi, on va droit au but, et ce n'est pas impoli. Je me suis fait reprendre gentiment, mais j'ai compris la leçon. Depuis, je dis toujours bonjour en entrant dans un magasin, même en dehors de la France !" });

  W.WRITING_GUIDE["b2-8"] = { genre: "A formal letter of complaint (DELF B2)", genre_fr: "Une lettre de réclamation (DELF B2)",
    plan: [["Write a subject line and say which trip you're writing about.", "Écris un objet et précise de quel voyage il s'agit."], ["Describe the problems precisely, with facts and times.", "Décris précisément les problèmes, avec des faits et des horaires."], ["Cite your rights and make a precise request.", "Cite tes droits et formule une demande précise."], ["List the documents attached and set a deadline.", "Énumère les pièces jointes et fixe un délai."], ["Close formally.", "Termine de façon formelle."]],
    marks: [["Votre personnel nous a fait attendre", "faire + infinitive", "faire + infinitif"], ["Je ne m'attendais pas à", "s'attendre à", "s'attendre à"], ["Conformément au règlement européen", "citing your rights", "citer ses droits"], ["je vous demande donc de bien vouloir", "a formal request", "une demande formelle"], ["Vous trouverez en pièce jointe", "attachments", "les pièces jointes"], ["Faute de réponse", "a firm deadline", "un délai ferme"]] };

  W.COURSE.push({ id: "b2-8", level: "B2", icon: "plane", title: "Travel and cultures", title_fr: "Voyages et interculturel",
    intro: "In this unit, you'll travel and meet other cultures: faire, se faire and laisser + infinitive, the verbs that need à or de (and the ones that work the other way round from English), and the French you need to complain when things go wrong and to avoid cultural blunders.",
    intro_fr: "Dans cette unité, tu vas voyager et rencontrer d'autres cultures : faire, se faire et laisser + infinitif, les verbes qui demandent à ou de (et ceux qui fonctionnent à l'inverse de l'anglais), et le français qu'il faut pour faire une réclamation et éviter les maladresses culturelles.",
    can: ["Use faire, se faire and laisser + infinitive", "Use the right preposition after common verbs, and say tu me manques", "Make a firm but polite complaint", "Understand cultural codes and repair a misunderstanding", "Write a formal letter of complaint"],
    can_fr: ["Utiliser faire, se faire et laisser + infinitif", "Utiliser la bonne préposition après les verbes courants, et dire tu me manques", "Faire une réclamation ferme mais polie", "Comprendre les codes culturels et réparer un malentendu", "Écrire une lettre de réclamation"],
    lessons: [96, 97, 98], vocab: ["voyageInterFR", "reclamationFR"], reading: "chocculturel", prompt: "fr-b2-8",
    writing: { task: "Your flight was cancelled and your suitcase arrived four days late. Write a letter of complaint to the airline (250-280 words): describe what happened, cite your rights, make a precise request and set a deadline.", task_fr: "Ton vol a été annulé et ta valise est arrivée avec quatre jours de retard. Écris une lettre de réclamation à la compagnie aérienne (250 à 280 mots) : décris ce qui s'est passé, cite tes droits, formule une demande précise et fixe un délai.", words: "250-280",
      tips: ["Objet : Réclamation – vol…", "Je me permets de vous écrire au sujet de…", "Conformément au règlement européen n° 261/2004, …", "Je vous demande de bien vouloir…", "Faute de réponse dans un délai de…"],
      checklist: ["I described the facts with dates and times", "I used faire + infinitive and s'attendre à", "I cited my rights and made a precise request", "I set a deadline and listed attachments", "I wrote between 250 and 280 words"],
      model: "Objet : Réclamation – vol 4521 du 12 juillet, Paris – Lisbonne\n\nMadame, Monsieur,\n\nJe me permets de vous écrire au sujet du vol 4521 du 12 juillet entre Paris et Lisbonne, pour lequel j'avais réservé un billet aller-retour.\n\nCe jour-là, le vol a été annulé deux heures avant le départ, sans aucune explication. Votre personnel nous a fait attendre au comptoir pendant plus de trois heures avant de nous proposer un autre vol, le lendemain matin. Je ne m'attendais pas à un tel manque d'information, d'autant plus qu'aucun repas ni aucun hébergement ne nous a été proposé : j'ai dû payer moi-même une chambre d'hôtel près de l'aéroport.\n\nPar ailleurs, à mon arrivée à Lisbonne, ma valise ne se trouvait pas sur le tapis. Elle ne m'a été livrée que quatre jours plus tard, si bien que j'ai dû acheter des vêtements et des produits de première nécessité.\n\nConformément au règlement européen n° 261/2004, je vous demande donc de bien vouloir me verser l'indemnisation prévue en cas d'annulation tardive, ainsi que le remboursement de mes frais d'hôtel et de mes achats, soit 312 euros au total. Vous trouverez en pièce jointe une copie de mes billets, la déclaration de perte de bagage et tous mes justificatifs.\n\nFaute de réponse de votre part dans un délai d'un mois, je me réserve le droit de saisir le médiateur du tourisme et du voyage. Je reste bien sûr à votre disposition pour tout renseignement complémentaire.\n\nDans l'attente de votre réponse, je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.\n\nAlex Moreau" } });
})();
