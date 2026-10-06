/* Cours de français, unité B1-1 « Work / Le monde du travail » : venir de, être en train de, être sur le point de,
   ça fait… que, depuis que ; les négations (personne, rien, aucun, ne… que, ni… ni) ; l'entretien d'embauche et
   « quelqu'un de » + adjectif (une tournure neutre pour tout le monde). Personnages et entreprise fictifs, prénoms
   français. Faits vérifiables seulement : CDI = contrat à durée indéterminée, CDD = à durée déterminée ; durée légale
   du travail en France : 35 heures par semaine ; au moins cinq semaines de congés payés par an. Écrit au format
   DELF B1 (160 mots minimum). */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "travailFR", icon: "briefcase", title: "The world of work", title_fr: "Le monde du travail", level: "B1", words: [
    ["l'entreprise", "the company, the business", "Elle travaille dans une petite entreprise."],
    ["le poste", "the job, the position", "J'ai postulé pour un poste de comptable."],
    ["postuler", "to apply (for a job)", "Je vais postuler chez eux."],
    ["la candidature", "the application", "Envoyez votre candidature avant le 15 mai."],
    ["le CV", "the CV, the résumé", "J'ai mis mon CV à jour."],
    ["la lettre de motivation", "the cover letter", "Il faut joindre une lettre de motivation."],
    ["l'entretien d'embauche", "the job interview", "J'ai un entretien d'embauche jeudi."],
    ["embaucher", "to hire, to take on", "L'entreprise embauche dix personnes."],
    ["le contrat", "the contract", "J'ai signé mon contrat hier."],
    ["le CDI", "the permanent contract", "Après six mois, on m'a proposé un CDI."],
    ["le CDD", "the fixed-term contract", "C'est un CDD de six mois."],
    ["le / la stagiaire", "the intern, the trainee (m) / the intern, the trainee (f)", "Nous accueillons deux stagiaires cet été."],
    ["l'équipe", "the team", "Je travaille dans une équipe de huit personnes."],
    ["le / la responsable", "the manager, the person in charge (m) / the manager, the person in charge (f)", "Le responsable du magasin s'appelle Hugo."],
    ["les congés", "time off, holidays (from work)", "Je prends mes congés en août."],
    ["démissionner", "to resign", "Elle a démissionné pour créer sa propre entreprise."],
    ["être au chômage", "to be unemployed", "Il est au chômage depuis trois mois."],
    ["le télétravail", "working from home, remote work", "Je fais du télétravail deux jours par semaine."]
  ] },
  { id: "qualitesFR", icon: "badge-check", title: "Skills and qualities", title_fr: "Compétences et qualités", level: "B1", words: [
    ["l'expérience", "the experience", "J'ai trois ans d'expérience dans la vente."],
    ["la compétence", "the skill", "Quelles sont vos compétences ?"],
    ["le point fort", "the strength", "Mon point fort, c'est l'organisation."],
    ["le point faible", "the weakness", "Mon point faible ? Je suis parfois trop perfectionniste."],
    ["motivé / motivée", "motivated (m) / motivated (f)", "Elle est très motivée par ce poste."],
    ["dynamique", "dynamic, energetic", "Nous cherchons une personne dynamique."],
    ["autonome", "independent, self-reliant", "Il est très autonome dans son travail."],
    ["organisé / organisée", "organised (m) / organised (f)", "C'est une collègue très organisée."],
    ["ponctuel / ponctuelle", "punctual (m) / punctual (f)", "Il est toujours ponctuel."],
    ["curieux / curieuse", "curious (m) / curious (f)", "C'est une stagiaire très curieuse."],
    ["créatif / créative", "creative (m) / creative (f)", "Il faut être créatif dans la publicité."],
    ["rigoureux / rigoureuse", "rigorous, thorough (m) / rigorous, thorough (f)", "Ce métier demande d'être rigoureux."],
    ["efficace", "efficient, effective", "C'est une méthode efficace."],
    ["travailler en équipe", "to work in a team", "J'aime travailler en équipe."],
    ["avoir le sens du contact", "to be good with people", "Pour ce poste, il faut avoir le sens du contact."],
    ["parler couramment", "to speak fluently", "Elle parle couramment espagnol."],
    ["le salaire", "the salary, the pay", "Le salaire est de 2 200 euros brut par mois."],
    ["se former", "to train, to learn new skills", "Elle s'est formée au marketing en ligne."]
  ] });

  W.LESSONS.push(
  {
    id: 45, level: "B1", icon: "timer",
    title: "Je viens de finir: just done, doing now, about to do", title_fr: "Je viens de finir : venir de, être en train de, être sur le point de",
    subtitle: "Four expressions to place an action exactly on the timeline, and how to say how long.", subtitle_fr: "Quatre expressions pour placer une action sur la ligne du temps, et comment dire depuis combien de temps.",
    body: `
<h2>The timeline</h2>
<table>
<tr><th>French</th><th>English</th><th>Example</th></tr>
<tr><td><s-fr>venir de</s-fr> + infinitive</td><td>to have just done</td><td><s-fr>Je viens de finir mon rapport.</s-fr></td></tr>
<tr><td><s-fr>être en train de</s-fr> + infinitive</td><td>to be in the middle of</td><td><s-fr>Je suis en train d'écrire un e-mail.</s-fr></td></tr>
<tr><td><s-fr>être sur le point de</s-fr> + infinitive</td><td>to be about to</td><td><s-fr>Le train est sur le point de partir.</s-fr></td></tr>
<tr><td><s-fr>aller</s-fr> + infinitive</td><td>to be going to</td><td><s-fr>Je vais appeler le client.</s-fr></td></tr>
</table>
<p>Only <s-fr>venir</s-fr>, <s-fr>être</s-fr> and <s-fr>aller</s-fr> change: the infinitive after them never does.</p>
<h2>In the past</h2>
<p>Put <s-fr>venir</s-fr> or <s-fr>être</s-fr> in the imparfait: <s-fr>Je venais de partir quand il a appelé.</s-fr> (I had just left when he called.) · <s-fr>J'étais en train de manger quand il est arrivé.</s-fr> (I was eating when he arrived.)</p>
<h2>How long? Ça fait… que, depuis que</h2>
<p>Three ways to say the same thing: <s-fr>Je travaille ici depuis trois ans.</s-fr> · <s-fr>Ça fait trois ans que je travaille ici.</s-fr> · <s-fr>Il y a trois ans que je travaille ici.</s-fr> All three take the present, because it's still true.</p>
<p><s-fr>depuis</s-fr> + a length of time or a date, but <s-fr>depuis que</s-fr> + a verb: <s-fr>Depuis que je fais du télétravail, je dors mieux.</s-fr></p>
<div class="tip"><s-fr>Je viens de Paris</s-fr> means "I come from Paris". With an infinitive, it's the recent past: <s-fr>Je viens de manger</s-fr> = I've just eaten.</div>
`,
    examples: [
      ["Je viens de finir mon rapport.", "I've just finished my report."],
      ["Elle vient de trouver un nouveau poste.", "She's just found a new job."],
      ["Je suis en train de préparer la réunion.", "I'm busy preparing the meeting."],
      ["Le film est sur le point de commencer.", "The film is about to start."],
      ["Nous venions d'arriver quand il a commencé à pleuvoir.", "We had just arrived when it started to rain."],
      ["J'étais en train de dormir quand tu as appelé.", "I was sleeping when you called."],
      ["Ça fait six mois que je cherche du travail.", "I've been looking for work for six months."],
      ["Depuis qu'il travaille de chez lui, il est moins stressé.", "Since he's been working from home, he's less stressed."]
    ],
    quiz: [
      { q: "“I've just finished” is:", o: ["J'ai juste fini.", "Je viens de finir.", "Je viens finir."], a: 1, ex: "venir de + infinitive. (J'ai juste fini is heard, but venir de is the standard form.)" },
      { q: "“The train is about to leave” is:", o: ["Le train est sur le point de partir.", "Le train vient de partir.", "Le train est en train de partir."], a: 0, ex: "être sur le point de = to be about to." },
      { q: "“I had just left when he called” is:", o: ["Je viens de partir quand il a appelé.", "Je venais de partir quand il a appelé.", "J'ai venu de partir quand il a appelé."], a: 1, ex: "venir in the imparfait for the past." },
      { q: "“I've been working here for two years” is:", o: ["Ça fait deux ans que je travaille ici.", "Ça fait deux ans que j'ai travaillé ici.", "Ça fait deux ans depuis je travaille ici."], a: 0, ex: "ça fait… que + present." },
      { q: "“Since I've been living here…” is:", o: ["Depuis j'habite ici…", "Depuis que j'habite ici…", "Pendant que j'habite ici…"], a: 1, ex: "depuis que + a verb." }
    ]
  },
  {
    id: 46, level: "B1", icon: "ban",
    title: "Personne, rien, aucun: more negatives", title_fr: "Personne, rien, aucun : les autres négations",
    subtitle: "Nobody, nothing, not a single one, only, neither… nor: where each word goes.", subtitle_fr: "Personne, rien, aucun, ne… que, ni… ni : où se place chaque mot.",
    body: `
<h2>Ne… personne, ne… rien</h2>
<p>Like <s-fr>ne… pas</s-fr>, they go around the verb: <s-fr>Je ne connais personne.</s-fr> (I don't know anybody.) · <s-fr>Il ne dit rien.</s-fr> (He doesn't say anything.)</p>
<p>In the passé composé, careful: <s-fr>rien</s-fr> goes before the participle, <s-fr>personne</s-fr> after it: <s-fr>Je n'ai rien vu.</s-fr> · <s-fr>Je n'ai vu personne.</s-fr></p>
<h2>As the subject: no pas!</h2>
<p><s-fr>Personne n'est venu.</s-fr> (Nobody came.) · <s-fr>Rien ne marche.</s-fr> (Nothing works.) · <s-fr>Aucun candidat n'a répondu.</s-fr> The <s-fr>ne</s-fr> stays, but never add <s-fr>pas</s-fr>.</p>
<h2>Ne… aucun: not a single</h2>
<p><s-fr>aucun</s-fr> agrees with the noun and is almost always singular: <s-fr>Je n'ai aucune idée.</s-fr> (I have no idea.) · <s-fr>Il n'y a aucun problème.</s-fr></p>
<h2>Ne… que: only</h2>
<p>It looks negative, but it means "only": <s-fr>Je n'ai que dix minutes.</s-fr> = <s-fr>J'ai seulement dix minutes.</s-fr> <s-fr>que</s-fr> goes right before the thing that is limited.</p>
<h2>Ne… ni… ni: neither… nor</h2>
<p><s-fr>Je ne parle ni allemand ni italien.</s-fr> · <s-fr>Ni Paul ni Léa ne sont venus.</s-fr> No article after <s-fr>ni</s-fr> with du, de la, des: <s-fr>Je ne bois ni café ni thé.</s-fr></p>
<h2>Combining them</h2>
<p><s-fr>Je ne vois plus personne.</s-fr> (I don't see anybody any more.) · <s-fr>Il ne dit jamais rien.</s-fr> (He never says anything.) In English, you'd say "any"; in French, each word stays negative.</p>
<div class="tip">In everyday speech, the <s-fr>ne</s-fr> often disappears: <s-fr>J'ai rien vu.</s-fr> · <s-fr>C'est pas grave.</s-fr> Understand it, but keep the <s-fr>ne</s-fr> when you write and in formal situations, like an interview.</div>
`,
    examples: [
      ["Je ne connais personne dans cette entreprise.", "I don't know anybody in this company."],
      ["Il n'a rien dit pendant la réunion.", "He didn't say anything during the meeting."],
      ["Je n'ai vu personne à l'accueil.", "I didn't see anybody at reception."],
      ["Personne ne m'a prévenu.", "Nobody warned me."],
      ["Rien ne marche aujourd'hui !", "Nothing's working today!"],
      ["Nous n'avons reçu aucune candidature.", "We haven't received a single application."],
      ["Je n'ai qu'une heure pour déjeuner.", "I only have an hour for lunch."],
      ["Elle ne boit ni café ni thé.", "She drinks neither coffee nor tea."]
    ],
    quiz: [
      { q: "“Nobody came” is:", o: ["Personne n'est pas venu.", "Personne n'est venu.", "Personne est pas venu."], a: 1, ex: "personne as the subject: ne, but no pas." },
      { q: "“I didn't see anybody” is:", o: ["Je n'ai personne vu.", "Je n'ai vu personne.", "Je n'ai pas vu personne."], a: 1, ex: "personne goes after the participle." },
      { q: "“I have no idea” is:", o: ["Je n'ai aucune idée.", "Je n'ai pas aucune idée.", "Je n'ai aucunes idées."], a: 0, ex: "aucune agrees with idée, and stays singular." },
      { q: "“Je n'ai que cinq euros” means:", o: ["I don't have five euros.", "I only have five euros.", "I have more than five euros."], a: 1, ex: "ne… que = only." },
      { q: "“He never says anything” is:", o: ["Il ne dit jamais quelque chose.", "Il ne dit jamais rien.", "Il dit jamais pas rien."], a: 1, ex: "Each word stays negative: ne… jamais rien." }
    ]
  },
  {
    id: 47, level: "B1", kind: "functional", icon: "handshake",
    title: "Everyday French: the job interview", title_fr: "Le français de tous les jours : l'entretien d'embauche",
    subtitle: "Present yourself, talk about your strengths without sounding arrogant, and ask your own questions.", subtitle_fr: "Te présenter, parler de tes points forts sans avoir l'air de te vanter, et poser tes propres questions.",
    body: `
<h2>Presenting yourself</h2>
<p><s-fr>J'ai trois ans d'expérience dans la vente.</s-fr> · <s-fr>Actuellement, je travaille comme réceptionniste.</s-fr> (No article after <s-fr>comme</s-fr>.) · <s-fr>J'ai fait un stage de six mois chez…</s-fr> · <s-fr>Je viens de terminer un master en…</s-fr></p>
<h2>The classic questions</h2>
<p><s-fr>Parlez-moi de vous.</s-fr> · <s-fr>Pourquoi voulez-vous travailler chez nous ?</s-fr> · <s-fr>Quels sont vos points forts ?</s-fr> · <s-fr>Et vos points faibles ?</s-fr> · <s-fr>Où vous voyez-vous dans cinq ans ?</s-fr> · <s-fr>Quelles sont vos prétentions salariales ?</s-fr> (What are your salary expectations?)</p>
<h2>Talking about your qualities: quelqu'un de</h2>
<p><s-fr>Je suis quelqu'un de</s-fr> + adjective is very common in interviews, and the adjective is always masculine, whoever is speaking: <s-fr>Je suis quelqu'un de très organisé.</s-fr> · <s-fr>Je suis quelqu'un de curieux et de ponctuel.</s-fr> Give an example straight after: <s-fr>Par exemple, dans mon dernier poste, j'ai…</s-fr></p>
<p>For a weakness, show that you're working on it: <s-fr>Je n'ai pas encore beaucoup d'expérience en gestion d'équipe, mais je viens de commencer une formation.</s-fr></p>
<h2>Your questions</h2>
<p><s-fr>Comment se passe une journée type ?</s-fr> · <s-fr>Est-ce qu'il y a des possibilités de formation ?</s-fr> · <s-fr>Quand est-ce que vous me donnerez une réponse ?</s-fr></p>
<div class="tip">In France, <s-fr>un CDI</s-fr> is a permanent contract and <s-fr>un CDD</s-fr> a fixed-term one. The legal working week is 35 hours (beyond that, extra hours are paid as overtime), and employees get at least five weeks of paid holiday a year: <s-fr>les congés payés</s-fr>.</div>
`,
    examples: [
      ["Parlez-moi un peu de vous.", "Tell me a little about yourself."],
      ["J'ai trois ans d'expérience dans la vente.", "I have three years' experience in sales."],
      ["Actuellement, je travaille comme réceptionniste.", "At the moment, I work as a receptionist."],
      ["Je suis quelqu'un de très organisé.", "I'm a very organised person."],
      ["Quels sont vos points forts ?", "What are your strengths?"],
      ["Est-ce qu'il y a des possibilités de formation ?", "Are there any training opportunities?"],
      ["C'est un CDD de six mois, à temps plein.", "It's a six-month fixed-term contract, full-time."]
    ],
    quiz: [
      { q: "“I'm a very curious person” (anyone speaking) is:", o: ["Je suis quelqu'un de très curieux.", "Je suis quelqu'un très curieux.", "Je suis un quelqu'un de très curieux."], a: 0, ex: "quelqu'un de + masculine adjective." },
      { q: "“I work as a nurse” is:", o: ["Je travaille comme une infirmière.", "Je travaille comme infirmier.", "Je travaille en infirmier."], a: 1, ex: "No article after travailler comme." },
      { q: "“Vos prétentions salariales” are:", o: ["your salary expectations", "your previous salary", "your claims about yourself"], a: 0, ex: "Prétentions salariales = the salary you expect." },
      { q: "“Un CDI” is:", o: ["a fixed-term contract", "a permanent contract", "an internship"], a: 1, ex: "CDI = contrat à durée indéterminée." },
      { q: "A good way to talk about a weakness:", o: ["Je n'ai aucun point faible.", "Je ne sais rien faire.", "Je manque encore d'expérience, mais je viens de commencer une formation."], a: 2, ex: "Admit it, and show what you're doing about it." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    45: {
      gap: [["Je ___ de finir mon rapport. (venir: I've just)", "viens"], ["Elle est en ___ de téléphoner. (in the middle of)", "train"], ["Le film est sur le ___ de commencer. (about to)", "point"], ["Ça ___ deux ans que je travaille ici. (it's been)", "fait"]],
      fix: [["Je viens de finis mon travail.", "Je viens de finir mon travail.", "venir de + infinitive."], ["Je travaille ici depuis que trois ans.", "Je travaille ici depuis trois ans.|Ça fait trois ans que je travaille ici.", "depuis + a length of time; depuis que + a verb."]],
      task: ["Describe what you've just done, what you're doing now and what you're about to do.", "Décris ce que tu viens de faire, ce que tu es en train de faire et ce que tu es sur le point de faire.", "Je viens de rentrer du travail et je suis en train de préparer le dîner. Ça fait une heure que j'ai faim ! Mon colocataire vient d'appeler : il est sur le point de quitter le bureau, alors on va manger ensemble dans vingt minutes."]
    },
    46: {
      gap: [["Je ne connais ___ dans cette ville. (nobody)", "personne"], ["Il n'a ___ dit. (nothing)", "rien"], ["Je n'ai ___ idée. (not a single)", "aucune"], ["Je n'ai ___ cinq euros. (only)", "que"]],
      fix: [["Personne n'est pas venu.", "Personne n'est venu.", "With personne, rien and aucun as the subject: ne, but no pas."], ["Je n'ai personne vu.", "Je n'ai vu personne.", "In the passé composé, personne goes after the participle."]],
      task: ["Describe a bad day at work or school, with at least four different negatives.", "Décris une mauvaise journée au travail ou à l'école, avec au moins quatre négations différentes.", "Hier, rien n'a marché ! Le matin, mon réveil n'a pas sonné et je n'ai rien mangé. Au bureau, il n'y avait plus d'encre dans l'imprimante et personne ne pouvait m'aider. Je n'ai eu aucune pause. Le soir, je ne voulais voir personne : à neuf heures, je dormais déjà !"]
    },
    47: {
      gap: [["Parlez-moi de ___. (yourself, formal)", "vous"], ["Je suis quelqu'un ___ très organisé. (of)", "de"], ["Quels sont vos points ___ ? (strengths)", "forts"], ["J'ai trois ans d'___ dans la vente. (experience)", "expérience"]],
      fix: [["Je suis quelqu'un de très organisée.", "Je suis quelqu'un de très organisé.", "After quelqu'un de, the adjective is always masculine."], ["Je travaille comme un serveur.", "Je travaille comme serveur.", "No article after travailler comme + a job."]],
      task: ["Answer three interview questions: Parlez-moi de vous. Quels sont vos points forts ? Pourquoi ce poste ?", "Réponds à trois questions d'entretien : Parlez-moi de vous. Quels sont vos points forts ? Pourquoi ce poste ?", "J'ai vingt-huit ans et je travaille dans la vente depuis cinq ans. Actuellement, je suis responsable d'un petit magasin de sport à Lille. Je suis quelqu'un de très organisé et j'ai le sens du contact. Ce poste m'intéresse parce que je voudrais travailler dans une entreprise internationale et utiliser mon anglais tous les jours."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "entretien", lesson: 47, level: "B1", icon: "handshake", partner: "Mme Lefèvre", role: "an HR manager",
    title: "A job interview", title_fr: "Un entretien d'embauche",
    setting: "You're applying for a receptionist job in a hotel in Annecy. Mme Lefèvre, the HR manager, interviews you.", setting_fr: "Tu postules pour un poste de réceptionniste dans un hôtel à Annecy. Mme Lefèvre, la responsable des ressources humaines, te reçoit.",
    turns: [
      { p: "Bonjour, asseyez-vous. Alors, parlez-moi un peu de vous.", fr: "Hello, take a seat. So, tell me a little about yourself." },
      { y: ["J'ai trois ans d'expérience à l'accueil d'un hôtel, et je parle couramment anglais et espagnol.", "J'ai trois ans d'expériences à l'accueil d'un hôtel, et je parle courant anglais et espagnol.", "J'ai expérience de trois ans à l'accueil d'un hôtel, et je parle couramment anglais et espagnol."], fr: "I have three years' experience on a hotel reception desk, and I speak fluent English and Spanish.", why: "trois ans d'expérience; parler couramment." },
      { p: "Très bien. Pourquoi voulez-vous travailler chez nous ?", fr: "Very good. Why do you want to work for us?" },
      { y: ["Votre hôtel accueille beaucoup de clients étrangers, et c'est exactement ce que je cherche.", "Votre hôtel accueille beaucoup de clients étrangers, et c'est exactement ce qui je cherche.", "Votre hôtel accueille beaucoup de clients étrangers, et c'est exactement que je cherche."], fr: "Your hotel welcomes a lot of foreign guests, and that's exactly what I'm looking for.", why: "ce que je cherche: what I'm looking for (the object)." },
      { p: "Et quels sont vos points forts ?", fr: "And what are your strengths?" },
      { y: ["Je suis quelqu'un de très organisé et je reste calme quand il y a beaucoup de monde.", "Je suis quelqu'un de très organisée et je reste calme quand il y a beaucoup de monde.", "Je suis quelqu'un très organisé et je reste calme quand il y a beaucoup de monde."], fr: "I'm a very organised person and I stay calm when it's busy.", why: "quelqu'un de + masculine adjective, whoever is speaking." },
      { p: "Et vos points faibles ?", fr: "And your weaknesses?" },
      { y: ["Je n'ai pas encore beaucoup d'expérience en gestion d'équipe, mais je viens de commencer une formation.", "Je n'ai pas aucune expérience en gestion d'équipe, mais je viens de commencer une formation.", "Je n'ai pas encore beaucoup d'expérience en gestion d'équipe, mais je viens commencer une formation."], fr: "I don't have much experience managing a team yet, but I've just started a training course.", why: "venir de + infinitive: I've just started. Never pas with aucun." },
      { p: "C'est un CDD de six mois, trente-cinq heures par semaine, avec des horaires variables. Ça vous convient ?", fr: "It's a six-month fixed-term contract, thirty-five hours a week, with variable hours. Does that suit you?" },
      { y: ["Oui, tout à fait. Est-ce qu'il y aura une possibilité de CDI ensuite ?", "Oui, tout à fait. Est-ce qu'il y aura un possibilité de CDI ensuite ?", "Oui, tout à fait. Est-ce qu'il aura une possibilité de CDI ensuite ?"], fr: "Yes, absolutely. Will there be a possibility of a permanent contract afterwards?", why: "il y aura: the future of il y a; une possibilité." },
      { p: "C'est possible, oui. Nous vous donnerons une réponse avant la fin de la semaine. Vous avez d'autres questions ?", fr: "It's possible, yes. We'll give you an answer before the end of the week. Do you have any other questions?" },
      { y: ["Non, merci, vous avez répondu à toutes mes questions. Merci pour cet entretien !", "Non, merci, vous avez répondu à tous mes questions. Merci pour cet entretien !", "Non, merci, vous n'avez répondu à toutes mes questions. Merci pour cet entretien !"], fr: "No, thank you, you've answered all my questions. Thank you for this interview!", why: "une question → toutes mes questions." }
    ] }
  );

  W.READINGS.push({
    id: "quatrejours", level: "B1", icon: "briefcase", title: "La semaine de quatre jours : le bon plan ?", genre: "Article",
    intro: "A small company has tried the four-day week for a year. The article gives the results, and the doubts. Venir de, negatives and work vocabulary.",
    intro_fr: "Une petite entreprise a essayé la semaine de quatre jours pendant un an. L'article donne le bilan, et les doutes. Venir de, les négations et le vocabulaire du travail.",
    paragraphs: [
      { en: "Chez Aubrac Conseil, une petite entreprise toulousaine de vingt salariés, personne ne travaille le vendredi. Depuis un an, toute l'équipe fait ses trente-cinq heures en quatre jours, sans perte de salaire. Le gérant, Didier Marchal, vient de publier le bilan de cette expérience.", fr: "At Aubrac Conseil, a small Toulouse company with twenty employees, nobody works on Fridays. For a year, the whole team has done its thirty-five hours in four days, with no loss of pay. The manager, Didier Marchal, has just published the results of this experiment." },
      { en: "Au début, personne n'y croyait, raconte-t-il. Les clients avaient peur de ne plus pouvoir nous joindre. Finalement, nous n'avons perdu aucun client, et les arrêts maladie ont beaucoup baissé.", fr: "At first, nobody believed in it, he says. Our clients were afraid they wouldn't be able to reach us any more. In the end, we didn't lose a single client, and sick leave went down a lot." },
      { en: "Romane, comptable, est ravie : je viens de passer la meilleure année de ma carrière. Le vendredi, je fais du sport, je vois mes amis, et je ne suis plus fatiguée le lundi.", fr: "Romane, an accountant, is delighted: I've just had the best year of my career. On Fridays, I do sport, I see my friends, and I'm not tired on Mondays any more." },
      { en: "Mais tout n'est pas parfait. Les journées sont plus longues : on commence à huit heures et on ne finit jamais avant dix-huit heures. Nadia, qui a deux jeunes enfants, n'est pas convaincue. Avec ces horaires, elle ne les voit presque plus le soir. Pour elle, la semaine de quatre jours n'est pas faite pour tout le monde.", fr: "But not everything is perfect. The days are longer: people start at eight and never finish before six. Nadia, who has two young children, isn't convinced. With these hours, she hardly sees them in the evening any more. For her, the four-day week isn't for everyone." },
      { en: "Malgré ces difficultés, la direction ne veut pas revenir en arrière. Aubrac Conseil vient même de recruter trois nouveaux salariés, attirés par leurs vendredis libres.", fr: "Despite these difficulties, the management doesn't want to go back. Aubrac Conseil has even just recruited three new employees, attracted by their free Fridays." }
    ],
    glossary: { "toulousaine": "from Toulouse", "salariés": "employees", "perte": "loss", "gérant": "manager, head", "bilan": "results, review", "croyait": "believed", "joindre": "to reach, to contact", "arrêts": "stops (arrêts maladie: sick leave)", "baissé": "gone down", "comptable": "accountant", "ravie": "delighted", "carrière": "career", "convaincue": "convinced", "horaires": "hours, schedule", "malgré": "despite", "arrière": "back (revenir en arrière: to go back)", "recruter": "to recruit", "attirés": "attracted" },
    questions: [
      { q: "Combien de jours par semaine travaillent les salariés d'Aubrac Conseil ?", o: ["Quatre", "Cinq", "Trois"], a: 0 },
      { q: "Qu'est-ce qui s'est passé avec les clients ?", o: ["L'entreprise n'en a perdu aucun.", "Beaucoup de clients sont partis.", "Les clients ne peuvent plus appeler."], a: 0 },
      { q: "Que fait Romane le vendredi ?", o: ["Elle travaille de chez elle.", "Elle fait du sport et voit ses amis.", "Elle s'occupe de ses enfants."], a: 1 },
      { q: "Pourquoi Nadia n'est pas convaincue ?", o: ["Elle gagne moins d'argent.", "Avec les longues journées, elle voit peu ses enfants le soir.", "Elle n'aime pas son équipe."], a: 1 },
      { q: "Qu'est-ce que l'entreprise vient de faire ?", o: ["Revenir à la semaine de cinq jours", "Recruter trois nouveaux salariés", "Baisser les salaires"], a: 1 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-b1-1", unit: "b1-1", level: "B1", icon: "briefcase",
    title: "Le premier jour", title_fr: "Le premier jour",
    context: "It's Quentin's first day in a new company. Hélène, his manager, welcomes him and explains how things work.", context_fr: "C'est le premier jour de Quentin dans une nouvelle entreprise. Hélène, sa responsable, l'accueille et lui explique comment ça se passe.",
    words: [["le badge", "the pass, the ID card"], ["la salle des serveurs", "the server room"], ["la période d'essai", "the trial period"], ["la cantine", "the staff canteen"], ["former", "to train (someone)"]],
    lines: [["Hélène", "Bonjour Quentin, bienvenue ! Vous avez trouvé facilement ?", "fr-FR"], ["Quentin", "Oui, merci. Je viens d'arriver, j'ai pris le métro.", "fr-FR"], ["Hélène", "Parfait. Alors, d'abord, voici votre badge. Il ouvre toutes les portes, sauf la salle des serveurs.", "fr-FR"], ["Quentin", "D'accord. Et mon bureau, il est où ?", "fr-FR"], ["Hélène", "Au deuxième étage, à côté de Laura. C'est elle qui va vous former pendant les deux premières semaines.", "fr-FR"], ["Quentin", "Très bien. À quelle heure est la réunion d'équipe ?", "fr-FR"], ["Hélène", "À dix heures, tous les lundis. Ce n'est jamais très long : une demi-heure, pas plus.", "fr-FR"], ["Quentin", "Et pour le télétravail, comment ça se passe ?", "fr-FR"], ["Hélène", "Pendant la période d'essai, on ne fait pas de télétravail. Après, vous pourrez travailler de chez vous deux jours par semaine.", "fr-FR"], ["Quentin", "Ah, c'est bien. Et pour déjeuner ?", "fr-FR"], ["Hélène", "Il y a une cantine au rez-de-chaussée, et des restaurants dans la rue. Mais aujourd'hui, l'équipe vous invite !", "fr-FR"], ["Quentin", "C'est très gentil, merci !", "fr-FR"]],
    gist: ["C'est quelle situation ?", ["Le premier jour d'un nouveau salarié", "Un entretien d'embauche", "Une réunion avec des clients"]],
    detail: [["Qu'est-ce que le badge n'ouvre pas ?", ["La salle des serveurs", "La cantine", "Le bureau d'Hélène"]], ["Qui va former Quentin ?", ["Laura", "Hélène", "Personne"]], ["Combien de temps dure la réunion d'équipe ?", ["Une demi-heure", "Une heure", "Dix minutes"]], ["Quand Quentin pourra faire du télétravail ?", ["Après la période d'essai", "Dès aujourd'hui", "Jamais"]]],
    decode: ["Je viens d'arriver", "on ne fait pas de télétravail"],
    tip: "Listen for the negative words: jamais, pas de, pas plus. In fast speech the ne almost disappears, so the meaning is carried by pas, jamais, rien and personne.", tip_fr: "Guette les mots de la négation : jamais, pas de, pas plus. À l'oral rapide, le ne disparaît presque : c'est pas, jamais, rien et personne qui portent le sens."
  }]);

  W.PROMPTS.push({ id: "fr-b1-1", level: "B1", q: "Parle de ton travail ou de tes études : ce que tu fais, ce qui te plaît, et ce que tu voudrais changer.", fr: "Talk about your work or your studies: what you do, what you like about it, and what you'd like to change.", time: 150,
    phrases: ["Actuellement, je…", "Ça fait … que…", "Ce qui me plaît, c'est…", "Par contre, je n'aime pas du tout…", "Je viens de…"],
    model: "Actuellement, je travaille dans une agence de voyages à Bruxelles. Ça fait quatre ans que j'y suis. Ce qui me plaît, c'est le contact avec les clients : personne ne vient chez nous de mauvaise humeur, puisque tout le monde prépare ses vacances ! Par contre, je n'aime pas du tout les longues journées en été : on n'a presque aucune pause. Je viens de demander à faire un jour de télétravail par semaine, et j'attends la réponse de ma responsable." });

  W.WRITING_GUIDE["b1-1"] = { genre: "An application email (DELF B1)", genre_fr: "Un e-mail de candidature (DELF B1)",
    plan: [["Open formally and say which job you're applying for.", "Commence de façon formelle et dis pour quel poste tu postules."], ["Present yourself: studies, languages, experience.", "Présente-toi : études, langues, expérience."], ["Give your qualities, with an example.", "Donne tes qualités, avec un exemple."], ["Say when you're available and mention your CV.", "Dis quand tu es disponible et mentionne ton CV."], ["Close with a formal formula.", "Termine par une formule de politesse."]],
    marks: [["Madame, Monsieur,", "the formal opening", "l'ouverture formelle"], ["je viens de terminer", "venir de + infinitive", "venir de + infinitif"], ["Ça fait quatre ans que", "ça fait… que", "ça fait… que"], ["je n'ai jamais eu peur", "a negative in the passé composé", "une négation au passé composé"], ["quelqu'un de dynamique", "quelqu'un de + adjective (neutral)", "quelqu'un de + adjectif (neutre)"], ["Je vous prie d'agréer", "the formal closing", "la formule de politesse finale"]] };

  W.COURSE.push({ id: "b1-1", level: "B1", icon: "briefcase", title: "The world of work", title_fr: "Le monde du travail",
    intro: "In this first B1 unit, you'll talk about work: placing an action exactly in time (venir de, être en train de, être sur le point de), the other negatives (personne, rien, aucun, ne… que, ni… ni), and everything you need for a job interview in French.",
    intro_fr: "Dans cette première unité du B1, tu vas parler du travail : situer une action dans le temps (venir de, être en train de, être sur le point de), les autres négations (personne, rien, aucun, ne… que, ni… ni), et tout ce qu'il faut pour un entretien d'embauche en français.",
    can: ["Say what you've just done, are doing or are about to do", "Use personne, rien, aucun, ne… que and ni… ni correctly", "Understand a job ad and the French contracts (CDI, CDD)", "Present yourself and your qualities in an interview", "Write a formal application email"],
    can_fr: ["Dire ce que tu viens de faire, ce que tu fais ou ce que tu vas faire", "Utiliser correctement personne, rien, aucun, ne… que et ni… ni", "Comprendre une annonce et les contrats français (CDI, CDD)", "Te présenter et parler de tes qualités en entretien", "Écrire un e-mail de candidature formel"],
    lessons: [45, 46, 47], vocab: ["travailFR", "qualitesFR"], reading: "quatrejours", prompt: "fr-b1-1",
    writing: { task: "You've seen an ad for a summer job at a French campsite (reception and activities for children). Write your application email (160-180 words): introduce yourself, your experience and languages, your qualities, and when you're available.", task_fr: "Tu as vu une annonce pour un emploi d'été dans un camping français (accueil et animations pour les enfants). Écris ton e-mail de candidature (160 à 180 mots) : présente-toi, ton expérience et tes langues, tes qualités, et tes disponibilités.", words: "160-180",
      tips: ["Madame, Monsieur,", "J'ai lu avec intérêt votre annonce pour…", "Je suis quelqu'un de…", "Je serai disponible du… au…", "Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées."],
      checklist: ["I opened and closed formally (vous, Madame, Monsieur)", "I used venir de or ça fait… que", "I used at least two different negatives", "I gave my qualities with an example", "I wrote between 160 and 180 words"],
      model: "Madame, Monsieur,\n\nJ'ai lu avec beaucoup d'intérêt votre annonce pour un emploi d'été à l'accueil et aux animations du camping Les Pins, et je souhaite vous proposer ma candidature.\n\nJ'ai vingt-deux ans et je viens de terminer ma deuxième année d'études de tourisme à Dublin. Ça fait quatre ans que j'apprends le français, et je le parle couramment, comme l'anglais et l'espagnol. L'été dernier, j'ai travaillé pendant deux mois à la réception d'une auberge de jeunesse : je n'ai jamais eu peur des journées chargées, et j'adore aider les clients.\n\nJe suis quelqu'un de dynamique, de ponctuel et de très organisé. J'aime aussi beaucoup les enfants : le mercredi, j'encadre des groupes de jeunes dans un club de sport de ma ville.\n\nJe serai disponible du 1er juillet au 31 août. Vous trouverez mon CV en pièce jointe, et je reste bien sûr à votre disposition pour un entretien, même par téléphone.\n\nJe vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.\n\nSam Kelly" } });
})();
