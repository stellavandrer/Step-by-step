/* Cours de français, unité C1-6 « Justice and rights / Justice et droits » : les connecteurs du raisonnement
   rigoureux (or, dès lors, en effet / en fait, qui plus est, faute de quoi, quitte à), les alternatives au passif
   (se voir + infinitif, se faire + infinitif, passif pronominal, par / de), contester une décision par écrit.
   Personnages fictifs, prénoms français. Faits vérifiables seulement : abolition de la peine de mort en France par la
   loi du 9 octobre 1981 (discours de Robert Badinter le 17 septembre 1981), dernière exécution en 1977, inscription
   dans la Constitution en 2007 ; présomption d'innocence (article 9 de la Déclaration de 1789) ; droit au
   déréférencement reconnu par la Cour de justice de l'Union européenne en 2014, la CNIL ; loi de 2021 permettant de
   filmer des audiences pour un motif d'intérêt public, diffusion après jugement définitif. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "justiceFR", icon: "gavel", title: "Justice", title_fr: "La justice", level: "C1", words: [
    ["le tribunal", "the court", "L'affaire sera jugée par le tribunal correctionnel."],
    ["le juge / la juge", "the judge (m) / (f)", "La juge a écouté les deux parties."],
    ["l'avocat / l'avocate", "the lawyer (m) / (f)", "Son avocate a demandé l'acquittement."],
    ["le procès", "the trial", "Le procès a duré trois semaines."],
    ["l'accusé / l'accusée", "the defendant (m) / (f)", "L'accusé a gardé le silence."],
    ["le plaignant / la plaignante", "the plaintiff (m) / (f)", "La plaignante a été entendue en premier."],
    ["le verdict", "the verdict", "Le verdict sera rendu demain."],
    ["la peine", "the sentence, the penalty", "Il a été condamné à une peine de deux ans."],
    ["la détention", "custody, detention", "Il a passé six mois en détention provisoire."],
    ["condamner", "to sentence, to convict", "Elle a été condamnée à une amende."],
    ["acquitter", "to acquit", "Faute de preuves, l'accusé a été acquitté."],
    ["la présomption d'innocence", "the presumption of innocence", "La présomption d'innocence est un principe fondamental."],
    ["le casier judiciaire", "the criminal record", "Son casier judiciaire est vierge."],
    ["la jurisprudence", "case law", "Cette décision a fait jurisprudence."],
    ["le délit", "the offence (mid-level)", "Le vol est un délit."],
    ["l'infraction", "the offence, the breach", "Toute infraction sera sanctionnée."],
    ["la contravention", "the minor offence, the ticket", "J'ai reçu une contravention pour stationnement."],
    ["le recours", "the appeal, the remedy", "Vous disposez d'un délai de deux mois pour former un recours."]
  ] },
  { id: "droitsFR", icon: "scale", title: "Rights and the courts", title_fr: "Droits et tribunaux", level: "C1", words: [
    ["les droits humains", "human rights", "L'association défend les droits humains."],
    ["la discrimination", "discrimination", "La discrimination à l'embauche est interdite."],
    ["le harcèlement", "harassment, bullying", "Le harcèlement scolaire est puni par la loi."],
    ["le droit de vote", "the right to vote", "Les Françaises ont obtenu le droit de vote en 1944."],
    ["la Constitution", "the Constitution", "La Constitution de la Ve République date de 1958."],
    ["le Conseil constitutionnel", "the Constitutional Council", "Le Conseil constitutionnel a censuré une partie de la loi."],
    ["la vie privée", "privacy, private life", "Chacun a droit au respect de sa vie privée."],
    ["l'asile", "asylum", "Il a demandé l'asile en France."],
    ["le réfugié / la réfugiée", "the refugee (m) / (f)", "Les réfugiés ont été accueillis dans la région."],
    ["la peine de mort", "the death penalty", "La peine de mort a été abolie en France en 1981."],
    ["l'audience", "the hearing", "L'audience est publique."],
    ["le jury", "the jury", "Le jury s'est retiré pour délibérer."],
    ["le crime", "the serious crime", "Les crimes les plus graves sont jugés par une cour d'assises."],
    ["l'amende", "the fine", "Il a dû payer une amende de 135 euros."],
    ["la prison", "prison", "Il a été condamné à deux ans de prison avec sursis."],
    ["faire appel", "to appeal", "L'avocat a annoncé qu'il ferait appel."],
    ["le suspect / la suspecte", "the suspect (m) / (f)", "Le suspect a été relâché faute de preuves."],
    ["la liberté de la presse", "freedom of the press", "La liberté de la presse est garantie par la loi de 1881."]
  ] });

  W.LESSONS.push(
  {
    id: 120, level: "C1", icon: "link-2",
    title: "Or, dès lors, en effet: the connectors of rigorous reasoning", title_fr: "Or, dès lors, en effet : les connecteurs du raisonnement rigoureux",
    subtitle: "Chain premises, consequences and concessions, as in a legal argument.", subtitle_fr: "Enchaîner prémisses, conséquences et concessions, comme dans une argumentation juridique.",
    body: `
<h2>Building a chain of reasoning</h2>
<p><s-fr>or</s-fr> brings in a new fact that changes the situation (now, yet): <s-fr>Tout accusé est présumé innocent. Or, il a été présenté comme coupable dans la presse.</s-fr> · <s-fr>dès lors</s-fr> draws the consequence (therefore, from then on): <s-fr>Dès lors, le procès ne peut pas être équitable.</s-fr> · <s-fr>dès lors que</s-fr> + indicative means since, given that.</p>
<h2>Explaining or correcting</h2>
<p><s-fr>en effet</s-fr> confirms and explains what comes before (indeed): <s-fr>Il a été acquitté. En effet, les preuves manquaient.</s-fr> · <s-fr>en fait</s-fr> corrects (actually): <s-fr>On le croyait coupable ; en fait, il était innocent.</s-fr></p>
<h2>Conceding, then answering</h2>
<p><s-fr>certes… mais</s-fr> · <s-fr>certes…, il n'en reste pas moins que…</s-fr></p>
<h2>Adding</h2>
<p><s-fr>qui plus est</s-fr> (what's more) · <s-fr>de surcroît</s-fr> (furthermore) · <s-fr>au demeurant</s-fr> (besides, moreover)</p>
<h2>Other formal links</h2>
<p><s-fr>quitte à</s-fr> + infinitive (even if it means) · <s-fr>faute de quoi</s-fr> (otherwise) · <s-fr>à défaut de</s-fr> (failing) · <s-fr>en l'occurrence</s-fr> (in this case) · <s-fr>en tout état de cause</s-fr> (in any case)</p>
<div class="tip">A false friend at the heart of French reasoning: <s-fr>or</s-fr> doesn't mean or (that's <s-fr>ou</s-fr>). It introduces the fact that will change everything: now, yet, but in fact. It's the hinge of a syllogism: A is true; or B; dès lors C.</div>
`,
    examples: [
      ["Tout accusé est présumé innocent. Or, il a été présenté comme coupable.", "Every defendant is presumed innocent. Yet he was presented as guilty."],
      ["Dès lors, le procès ne peut pas être équitable.", "Therefore, the trial cannot be fair."],
      ["Il a été acquitté. En effet, les preuves manquaient.", "He was acquitted. Indeed, there was no evidence."],
      ["On le croyait coupable ; en fait, il était innocent.", "People thought he was guilty; actually, he was innocent."],
      ["Certes, la loi est sévère, mais elle est claire.", "Admittedly, the law is harsh, but it's clear."],
      ["Le dossier est incomplet ; qui plus est, il est arrivé en retard.", "The file is incomplete; what's more, it arrived late."],
      ["Envoyez votre recours avant lundi, faute de quoi il sera rejeté.", "Send your appeal before Monday, otherwise it will be rejected."],
      ["Il veut aller jusqu'au bout, quitte à perdre de l'argent.", "He wants to see it through, even if it means losing money."]
    ],
    quiz: [
      { q: "In French reasoning, or means:", o: ["now, yet (a new fact)", "or (a choice)", "therefore"], a: 0, ex: "or introduces a new premise; or as a choice is ou." },
      { q: "“Actually, he was innocent” (correcting) is:", o: ["En fait, il était innocent.", "En effet, il était innocent.", "Or, il était innocent."], a: 0, ex: "en fait corrects; en effet confirms." },
      { q: "“Pay before the 10th, otherwise the fine will increase” is:", o: ["Payez avant le 10, faute de quoi l'amende sera majorée.", "Payez avant le 10, faute que l'amende sera majorée.", "Payez avant le 10, à défaut l'amende sera majorée."], a: 0, ex: "faute de quoi = otherwise." },
      { q: "Qui plus est means:", o: ["what's more", "who is more", "even if"], a: 0, ex: "It adds a stronger argument." },
      { q: "“Since he is a minor” is:", o: ["Dès lors qu'il est mineur", "Dès lors qu'il soit mineur", "Dès qu'il lors est mineur"], a: 0, ex: "dès lors que + indicative." }
    ]
  },
  {
    id: 121, level: "C1", icon: "repeat",
    title: "Il s'est vu refuser, elle s'est fait voler: alternatives to the passive", title_fr: "Il s'est vu refuser, elle s'est fait voler : les alternatives au passif",
    subtitle: "French uses être + past participle less than English: here are the other ways to say what happens to someone.", subtitle_fr: "Le français emploie moins être + participe que l'anglais : voici les autres façons de dire ce qui arrive à quelqu'un.",
    body: `
<h2>Se voir + infinitive</h2>
<p>The subject undergoes something, often unwelcome: <s-fr>Il s'est vu refuser l'entrée.</s-fr> (he was refused entry) · <s-fr>Elle s'est vu confier le dossier.</s-fr> Here <s-fr>vu</s-fr> doesn't agree.</p>
<h2>Se faire + infinitive</h2>
<p><s-fr>Il s'est fait arrêter.</s-fr> · <s-fr>Elle s'est fait voler son portefeuille.</s-fr> (her wallet was stolen) · <s-fr>fait</s-fr> never agrees before an infinitive.</p>
<h2>The pronominal passive</h2>
<p>For general truths and habits: <s-fr>Ce type d'affaire se juge en quelques mois.</s-fr> · <s-fr>Ça ne se fait pas.</s-fr> · <s-fr>Ce mot s'écrit avec deux l.</s-fr></p>
<h2>On, and nouns</h2>
<p><s-fr>On l'a relâché faute de preuves.</s-fr> · Formal writing often prefers a noun: <s-fr>la condamnation de l'accusé</s-fr>, <s-fr>la libération du suspect</s-fr>.</p>
<h2>Par or de after a passive</h2>
<p><s-fr>par</s-fr> for an action: <s-fr>Il a été arrêté par la police.</s-fr> · <s-fr>de</s-fr> for a state or a feeling: <s-fr>Elle est respectée de tous.</s-fr> · <s-fr>La salle était remplie de journalistes.</s-fr></p>
<div class="tip">An English passive with an indirect object (he was given, she was refused) can't be copied in French: <s-fr>il a été donné</s-fr> means he himself was given away! Use <s-fr>on lui a donné</s-fr>, or <s-fr>il s'est vu attribuer</s-fr>.</div>
`,
    examples: [
      ["Il s'est vu refuser l'entrée du tribunal.", "He was refused entry to the court."],
      ["Elle s'est vu confier une affaire délicate.", "She was entrusted with a delicate case."],
      ["Il s'est fait arrêter à la frontière.", "He got arrested at the border."],
      ["Elle s'est fait voler son portefeuille dans le métro.", "Her wallet was stolen on the underground."],
      ["Ce type d'affaire se juge en quelques mois.", "This kind of case is judged within a few months."],
      ["On l'a relâché faute de preuves.", "He was released for lack of evidence."],
      ["Cette juge est respectée de tous.", "This judge is respected by everyone."]
    ],
    quiz: [
      { q: "“He was refused a visa” is:", o: ["Il s'est vu refuser un visa.", "Il a été refusé un visa.", "Il s'est vu refusé un visa."], a: 0, ex: "se voir + infinitive (refuser)." },
      { q: "“She had her bag stolen” is:", o: ["Elle s'est fait voler son sac.", "Elle s'est faite voler son sac.", "Elle a été volée son sac."], a: 0, ex: "se faire + infinitive; fait doesn't agree." },
      { q: "“That isn't done” is:", o: ["Ça ne se fait pas.", "Ça n'est pas fait.", "Ça ne fait pas."], a: 0, ex: "Pronominal passive for social rules." },
      { q: "“She's loved by everyone” is:", o: ["Elle est aimée de tous.", "Elle est aimée par tous de.", "Elle est aimée à tous."], a: 0, ex: "de for a feeling or a state." },
      { q: "“He was given a lawyer” is:", o: ["On lui a attribué un avocat.", "Il a été attribué un avocat.", "Il a été donné un avocat."], a: 0, ex: "An indirect object can't become the subject of a passive." }
    ]
  },
  {
    id: 122, level: "C1", kind: "functional", icon: "stamp",
    title: "Everyday French: contesting a decision in writing", title_fr: "Le français de tous les jours : contester une décision par écrit",
    subtitle: "A fine, a refusal, a bill: set out the facts, argue, and make a precise request.", subtitle_fr: "Une amende, un refus, une facture : exposer les faits, argumenter et formuler une demande précise.",
    body: `
<h2>The structure</h2>
<p><s-fr>Objet</s-fr> and references (file number, date) · the facts, briefly, in the passé composé · the argument (<s-fr>or</s-fr>, <s-fr>dès lors</s-fr>, <s-fr>en effet</s-fr>) · a precise request · the documents attached · a formal closing.</p>
<h2>Useful phrases</h2>
<p><s-fr>Par la présente, je conteste…</s-fr> (I hereby contest) · <s-fr>Je vous saurais gré de bien vouloir réexaminer mon dossier.</s-fr> (I would be grateful if you would) · <s-fr>À l'appui de ma demande, vous trouverez ci-joint…</s-fr> (in support of my request) · <s-fr>Je vous demande par conséquent de bien vouloir annuler…</s-fr> · <s-fr>Dans l'attente de votre réponse, je vous prie d'agréer…</s-fr></p>
<h2>The tone</h2>
<p>Firm, factual and courteous: no emotion, no threats. Asking the authority itself to reconsider before going to court is called a <s-fr>recours gracieux</s-fr>.</p>
<div class="tip">When the stakes are high, send your letter by <s-fr>lettre recommandée avec accusé de réception</s-fr> (registered letter with acknowledgement of receipt), and keep a copy of everything. Deadlines matter: check them before you write.</div>
`,
    examples: [
      ["Objet : contestation de l'avis de contravention n° 4521.", "Subject: contesting penalty notice no. 4521."],
      ["Par la présente, je conteste la décision du 3 mars.", "I hereby contest the decision of 3 March."],
      ["Or, ce jour-là, mon véhicule se trouvait au garage.", "Yet on that day, my vehicle was at the garage."],
      ["À l'appui de ma demande, vous trouverez ci-joint la facture du garage.", "In support of my request, please find enclosed the garage invoice."],
      ["Je vous saurais gré de bien vouloir réexaminer mon dossier.", "I would be grateful if you would re-examine my file."],
      ["Je vous demande par conséquent de bien vouloir annuler cette amende.", "I therefore ask you to cancel this fine."]
    ],
    quiz: [
      { q: "“I would be grateful if you would…” is:", o: ["Je vous saurais gré de bien vouloir…", "Je vous serais gré de bien vouloir…", "Je vous saurais gré à bien vouloir…"], a: 0, ex: "savoir gré: je vous saurais gré de…" },
      { q: "“In support of my request” is:", o: ["À l'appui de ma demande", "Au support de ma demande", "En appui à ma demande"], a: 0, ex: "à l'appui de." },
      { q: "A recours gracieux is:", o: ["asking the authority itself to reconsider", "going straight to court", "paying the fine"], a: 0, ex: "It comes before any court action." },
      { q: "The tone of a contestation letter is:", o: ["firm, factual and courteous", "angry and emotional", "familiar"], a: 0, ex: "Facts and arguments, no emotion." },
      { q: "“I hereby contest” is:", o: ["Par la présente, je conteste", "Par ce présent, je conteste", "Pour la présente, je conteste"], a: 0, ex: "par la présente (lettre)." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    120: {
      gap: [["Tout accusé est présumé innocent. ___, il a été présenté comme coupable. (yet, a new fact)", "Or"], ["___ lors, le procès ne peut pas être équitable. (therefore)", "Dès"], ["Il a été acquitté. En ___, les preuves manquaient. (indeed)", "effet"], ["Envoyez votre recours avant lundi, faute de ___ il sera rejeté. (otherwise)", "quoi"]],
      fix: [["Je le croyais coupable ; en effet, il était innocent.", "Je le croyais coupable ; en fait, il était innocent.", "en fait corrects; en effet confirms or explains."], ["Il faut agir vite, quitte de perdre un peu d'argent.", "Il faut agir vite, quitte à perdre un peu d'argent.", "quitte à + infinitive."]],
      task: ["Build a short argument in four sentences about a dispute between a tenant and a landlord, with or, dès lors, en effet and qui plus est.", "Construis une courte argumentation en quatre phrases sur un litige entre un locataire et un propriétaire, avec or, dès lors, en effet et qui plus est.", "Le contrat prévoit que le locataire soit prévenu deux jours avant toute visite. Or, le propriétaire s'est présenté sans prévenir. Dès lors, la visite était irrégulière. En effet, aucun accord n'avait été donné ; qui plus est, le locataire était absent ce jour-là."]
    },
    121: {
      gap: [["Il s'est ___ refuser l'entrée. (voir)", "vu"], ["Elle s'est ___ voler son sac. (faire)", "fait"], ["Ce type d'affaire ___ juge en quelques mois. (pronominal passive)", "se"], ["Cette juge est respectée ___ tous. (by)", "de"]],
      fix: [["Elle s'est vue refuser un visa.", "Elle s'est vu refuser un visa.", "Followed by an infinitive here, vu doesn't agree: elle is the indirect object of refuser."], ["Il a été volé son portefeuille.", "On lui a volé son portefeuille.|Il s'est fait voler son portefeuille.", "Only a direct object can become the subject of a passive: use on or se faire."]],
      task: ["Rewrite without être + past participle: Le suspect a été arrêté hier. Un avocat lui a été attribué. Sa demande de libération a été refusée.", "Réécris sans être + participe passé : Le suspect a été arrêté hier. Un avocat lui a été attribué. Sa demande de libération a été refusée.", "On a arrêté le suspect hier. Il s'est vu attribuer un avocat. En revanche, il s'est vu refuser sa demande de libération."]
    },
    122: {
      gap: [["Par la ___, je conteste la décision du 3 mars. (this letter)", "présente"], ["Je vous ___ gré de bien vouloir réexaminer mon dossier. (savoir, conditional)", "saurais"], ["À l'___ de ma demande, vous trouverez ci-joint deux attestations. (in support)", "appui"], ["Je vous demande par ___ d'annuler cette amende. (consequently)", "conséquent"]],
      fix: [["Je vous saurais gré de bien vouloir de réexaminer mon dossier.", "Je vous saurais gré de bien vouloir réexaminer mon dossier.", "bien vouloir + infinitive, without de."], ["Je conteste la décision et je demande que vous l'annulez.", "Je conteste la décision et je demande que vous l'annuliez.", "demander que + subjunctive."]],
      task: ["Write the core of a letter contesting a fine: the facts, an argument with or and dès lors, and your request.", "Écris le cœur d'une lettre de contestation d'amende : les faits, un argument avec or et dès lors, et ta demande.", "Le 12 mars, j'ai reçu un avis de contravention pour stationnement à Lyon. Or, ce jour-là, mon véhicule se trouvait au garage, comme l'atteste la facture ci-jointe. Dès lors, l'infraction ne peut m'être imputée. Je vous demande par conséquent de bien vouloir annuler cette amende."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "amende", lesson: 122, level: "C1", icon: "stamp", partner: "Romain", role: "an officer at the municipal police desk",
    title: "A fine you didn't deserve", title_fr: "Une amende injustifiée",
    setting: "You've received a parking fine for a day when your car was at the garage. You call the municipal police to find out what to do.", setting_fr: "Tu as reçu une amende de stationnement pour un jour où ta voiture était au garage. Tu appelles la police municipale pour savoir quoi faire.",
    turns: [
      { p: "Police municipale, bonjour. Je vous écoute.", fr: "Municipal police, hello. I'm listening." },
      { y: ["Bonjour. J'ai reçu un avis de contravention pour stationnement ; or, ma voiture n'était pas à Lyon ce jour-là.", "Bonjour. J'ai reçu un avis de contravention pour stationnement ; donc, ma voiture n'était pas à Lyon ce jour-là.", "Bonjour. J'ai reçu un avis de contravention pour stationnement ; or que ma voiture n'était pas à Lyon ce jour-là."], fr: "Hello. I've received a parking ticket; yet my car wasn't in Lyon that day.", why: "or brings in the fact that contradicts; donc would make no sense." },
      { p: "Vraiment ? Le numéro d'immatriculation correspond pourtant à votre véhicule.", fr: "Really? The registration number matches your vehicle, though." },
      { y: ["Certes, mais ma voiture était au garage ce jour-là : le garagiste me l'a confirmé par écrit.", "Certes, mais ma voiture était au garage ce jour-là : le garagiste m'a confirmé le par écrit.", "Certes que ma voiture était au garage ce jour-là : le garagiste me l'a confirmé par écrit."], fr: "Admittedly, but my car was at the garage that day: the mechanic confirmed it to me in writing.", why: "certes… mais; pronoun order: me l'a." },
      { p: "Dans ce cas, il s'agit peut-être d'une fausse plaque. Vous avez porté plainte ?", fr: "In that case, it may be a fake number plate. Have you reported it to the police?" },
      { y: ["Pas encore. Dès lors qu'il s'agit d'une usurpation de plaque, je vais le faire aujourd'hui même.", "Pas encore. Dès lors qu'il s'agisse d'une usurpation de plaque, je vais le faire aujourd'hui même.", "Pas encore. Dès que lors il s'agit d'une usurpation de plaque, je vais le faire aujourd'hui même."], fr: "Not yet. Since it's a case of number plate fraud, I'll do it this very day.", why: "dès lors que + indicative." },
      { p: "Faites-le, puis contestez l'avis en ligne, en joignant le récépissé de plainte et l'attestation du garage.", fr: "Do that, then contest the notice online, attaching the police receipt and the garage's statement." },
      { y: ["D'accord. Et si je ne conteste pas dans les délais ?", "D'accord. Et si je ne contesterai pas dans les délais ?", "D'accord. Et si je conteste pas dans les délais ?"], fr: "OK. And if I don't contest it in time?", why: "si + present; ne… pas in a careful register." },
      { p: "L'amende serait alors majorée. Mieux vaut agir vite.", fr: "The fine would then be increased. Better act quickly." },
      { y: ["Je m'en occupe ce soir, faute de quoi je risquerais de payer pour quelqu'un d'autre !", "Je m'en occupe ce soir, faute de que je risquerais de payer pour quelqu'un d'autre !", "Je m'en occupe ce soir, faute quoi je risquerais de payer pour quelqu'un d'autre !"], fr: "I'll deal with it tonight, otherwise I'd risk paying for someone else!", why: "faute de quoi = otherwise." }
    ] }
  );

  W.READINGS.push({
    id: "abolition", level: "C1", icon: "gavel", title: "1981 : l'abolition de la peine de mort", genre: "Récit historique",
    intro: "In 1981, France abolished the death penalty, although a majority of the French were still in favour of it. Rigorous connectors and alternatives to the passive.",
    intro_fr: "En 1981, la France a aboli la peine de mort, alors qu'une majorité de Français y était encore favorable. Les connecteurs du raisonnement et les alternatives au passif.",
    paragraphs: [
      { en: "Le 17 septembre 1981, le garde des Sceaux Robert Badinter monte à la tribune de l'Assemblée nationale pour défendre un projet de loi d'une seule phrase, ou presque : l'abolition de la peine de mort. Le texte sera adopté quelques semaines plus tard et promulgué le 9 octobre 1981.", fr: "On 17 September 1981, the Minister of Justice, Robert Badinter, took the floor in the National Assembly to defend a bill of almost a single sentence: the abolition of the death penalty. The text was adopted a few weeks later and enacted on 9 October 1981." },
      { en: "La décision était loin d'aller de soi. En effet, les sondages de l'époque montraient qu'une majorité de Français restait favorable à la peine capitale. Or, le nouveau président, François Mitterrand, s'était engagé pendant sa campagne à l'abolir. Dès lors, le gouvernement fit le choix de suivre ses convictions plutôt que l'opinion.", fr: "The decision was far from obvious. Indeed, polls at the time showed that a majority of French people were still in favour of capital punishment. Yet the new president, François Mitterrand, had committed during his campaign to abolishing it. So the government chose to follow its convictions rather than public opinion." },
      { en: "Les arguments de Badinter, avocat de formation, étaient de plusieurs ordres. Certes, la peine de mort prétendait dissuader les criminels ; il n'en restait pas moins qu'aucune étude ne démontrait cet effet. Qui plus est, une erreur judiciaire, toujours possible, devenait irréparable dès lors que le condamné avait été exécuté.", fr: "Badinter, a lawyer by training, put forward several kinds of argument. Admittedly, the death penalty claimed to deter criminals; the fact remained that no study demonstrated this effect. What's more, a miscarriage of justice, always possible, became irreparable once the condemned person had been executed." },
      { en: "La dernière exécution en France avait eu lieu en 1977. Avec la loi de 1981, la guillotine se voyait définitivement remisée au musée. En 2007, l'abolition fut même inscrite dans la Constitution, ce qui interdit à une simple loi de la rétablir.", fr: "The last execution in France had taken place in 1977. With the 1981 law, the guillotine was put away in the museum for good. In 2007, abolition was even written into the Constitution, which prevents an ordinary law from bringing it back." },
      { en: "Cet épisode est souvent cité comme un exemple de décision politique prise contre l'opinion majoritaire du moment. Il pose une question qui dépasse largement la justice : en démocratie, les élus doivent-ils suivre l'opinion, ou parfois la précéder ?", fr: "This episode is often quoted as an example of a political decision taken against the majority opinion of the time. It raises a question that goes far beyond justice: in a democracy, should elected representatives follow public opinion, or sometimes lead it?" }
    ],
    glossary: { "Sceaux": "seals (le garde des Sceaux: the Minister of Justice)", "tribune": "rostrum", "promulgué": "enacted, signed into law", "sondages": "opinion polls", "capitale": "capital (la peine capitale: the death penalty)", "convictions": "convictions, beliefs", "dissuader": "to deter", "irréparable": "irreparable", "exécuté": "executed", "remisée": "put away", "rétablir": "to bring back", "majoritaire": "of the majority", "élus": "elected representatives", "précéder": "to go ahead of, to lead" },
    questions: [
      { q: "Quand la loi abolissant la peine de mort a-t-elle été promulguée ?", o: ["Le 9 octobre 1981", "Le 17 septembre 1977", "En 2007"], a: 0 },
      { q: "Que montraient les sondages de l'époque ?", o: ["Une majorité de Français restait favorable à la peine de mort.", "Presque tous les Français voulaient l'abolition.", "Les Français n'avaient pas d'avis."], a: 0 },
      { q: "Quel argument de Badinter concerne les erreurs judiciaires ?", o: ["Une erreur devient irréparable une fois le condamné exécuté.", "Les erreurs judiciaires n'existent pas.", "Les juges ne se trompent jamais."], a: 0 },
      { q: "Que s'est-il passé en 2007 ?", o: ["L'abolition a été inscrite dans la Constitution.", "La peine de mort a été rétablie.", "La dernière exécution a eu lieu."], a: 0 },
      { q: "Quelle question l'épisode pose-t-il selon l'auteur ?", o: ["Les élus doivent-ils suivre l'opinion ou parfois la précéder ?", "Faut-il supprimer les sondages ?", "Faut-il rouvrir le musée de la guillotine ?"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-c1-6", unit: "c1-6", level: "C1", icon: "radio",
    title: "Le droit et vous : effacer son passé en ligne ?", title_fr: "Le droit et vous : effacer son passé en ligne ?",
    context: "On a radio programme about the law, Aurélie, a lawyer, answers a listener's question about an old article that comes up when you search her name.", context_fr: "Dans une émission sur le droit, Aurélie, avocate, répond à une auditrice : un vieil article apparaît quand on cherche son nom.",
    words: [["le déréférencement", "delisting (from search results)"], ["un arrêt", "a ruling"], ["mettre en balance", "to weigh up"], ["saisir", "to refer a matter to"], ["en tout état de cause", "in any case"]],
    lines: [["Thomas", "Bienvenue dans Le droit et vous. Aujourd'hui, la question de Julie : un vieil article la concernant apparaît toujours en premier quand on tape son nom. Peut-elle le faire disparaître ? Aurélie, vous êtes avocate.", "fr-FR"], ["Aurélie", "Elle peut demander ce qu'on appelle le déréférencement. Depuis un arrêt de la Cour de justice de l'Union européenne rendu en 2014, un moteur de recherche peut se voir ordonner de retirer certains liens associés au nom d'une personne.", "fr-FR"], ["Thomas", "L'article est donc supprimé ?", "fr-FR"], ["Aurélie", "Non, et c'est une confusion fréquente. L'article reste en ligne ; il ne s'affiche simplement plus dans les résultats quand on cherche son nom. Le journal, lui, ne se voit imposer aucune modification.", "fr-FR"], ["Thomas", "Et la demande est acceptée à chaque fois ?", "fr-FR"], ["Aurélie", "Loin de là. Le moteur de recherche met en balance la vie privée de la personne et le droit du public à l'information. Si Julie était une personnalité publique, ou si les faits étaient récents et graves, sa demande se heurterait sans doute à un refus.", "fr-FR"], ["Thomas", "Et en cas de refus ?", "fr-FR"], ["Aurélie", "Elle pourrait alors saisir la CNIL, l'autorité chargée de la protection des données en France, ou se faire assister par un avocat pour aller en justice. En tout état de cause, mieux vaut conserver une copie de chaque échange.", "fr-FR"]],
    gist: ["Quel est le sujet de l'émission ?", ["Faire disparaître un vieil article des résultats de recherche", "Porter plainte contre un journal", "Changer de nom"]],
    detail: [["Depuis quand le déréférencement est-il possible ?", ["Depuis un arrêt de la Cour de justice de l'Union européenne rendu en 2014", "Depuis 1981", "Depuis toujours"]], ["Le déréférencement supprime-t-il l'article ?", ["Non, l'article reste en ligne mais n'apparaît plus avec son nom.", "Oui, l'article est effacé.", "Oui, le journal doit fermer."]], ["Que met en balance le moteur de recherche ?", ["La vie privée et le droit du public à l'information", "Le prix et la qualité", "Le passé et le futur"]], ["Que peut faire Julie en cas de refus ?", ["Saisir la CNIL ou aller en justice avec un avocat", "Rien du tout", "Écrire au président"]]],
    decode: ["un moteur de recherche peut se voir ordonner de retirer certains liens", "sa demande se heurterait sans doute à un refus"],
    tip: "Legal explanations are full of conditions and nuances: si… , loin de là, sans doute, en tout état de cause. A lawyer rarely says yes or no: listen for the conditions, they are the real answer.", tip_fr: "Les explications juridiques sont pleines de conditions et de nuances : si…, loin de là, sans doute, en tout état de cause. Un avocat dit rarement oui ou non : écoute les conditions, ce sont elles, la vraie réponse."
  }]);

  W.LEXIS = W.LEXIS || {};
  W.LEXIS["c1-6"] = {
    colloc: [
      ["rendre un verdict", "to deliver a verdict", "Le jury a rendu son verdict après six heures.", "rendu", ["fait", "dit"]],
      ["purger une peine", "to serve a sentence", "Il a purgé sa peine et retrouvé un emploi.", "purgé", ["nettoyé", "passé"]],
      ["commettre un délit", "to commit an offence", "Il a commis un délit sans le savoir.", "commis", ["fait", "réalisé"]],
      ["saisir la justice", "to take legal action", "Les familles ont décidé de saisir la justice.", "saisir", ["prendre", "attraper"]],
      ["bafouer les droits", "to trample on rights", "Ce régime bafoue les droits de ses citoyens.", "bafoue", ["frappe", "bat"]],
      ["plaider coupable", "to plead guilty", "L'accusé a choisi de plaider coupable.", "plaider", ["parler", "dire"]],
      ["intenter un procès", "to take someone to court", "Elle a intenté un procès à son ancien employeur.", "intenté", ["tenté", "porté"]],
      ["former un recours", "to lodge an appeal", "Vous pouvez former un recours dans les deux mois.", "former", ["fermer", "forger"]],
      ["rendre la justice", "to administer justice", "La justice est rendue au nom du peuple français.", "rendue", ["donnée", "portée"]],
      ["faire appel d'une décision", "to appeal against a decision", "Son avocat a fait appel de la décision.", "fait", ["mis", "porté"]]
    ],
    wf: [
      ["L'___ a été prononcé faute de preuves. (ACQUITTER)", "acquittement"],
      ["L'___ de l'accusé est présumée jusqu'au jugement. (INNOCENT)", "innocence"],
      ["Cette décision est ___ : on peut former un recours. (CONTESTER)", "contestable"],
      ["La ___ de cette mesure a été contestée devant le Conseil constitutionnel. (LÉGAL)", "légalité"],
      ["Elle a été victime de ___ à l'embauche. (DISCRIMINER)", "discrimination"],
      ["La ___ des données personnelles est un droit. (PROTÉGER)", "protection"],
      ["Sa ___ a été établie par les enquêteurs. (COUPABLE)", "culpabilité"],
      ["Un juge doit rester ___. (PARTIAL)", "impartial"]
    ],
    kwt: [
      ["On lui a refusé l'entrée.", "VU", "Il ___ l'entrée.", "s'est vu refuser"],
      ["On lui a volé son portefeuille dans le métro.", "FAIT", "Il ___ son portefeuille dans le métro.", "s'est fait voler"],
      ["Envoie ton dossier aujourd'hui, sinon il sera refusé.", "QUOI", "Envoie ton dossier aujourd'hui, ___ refusé.", "faute de quoi il sera"],
      ["Il accepte de perdre de l'argent pour gagner du temps.", "QUITTE", "Il veut gagner du temps, ___ de l'argent.", "quitte à perdre"],
      ["Comme il est mineur, il ne peut pas être jugé par cette cour.", "LORS", "___ mineur, il ne peut pas être jugé par cette cour.", "Dès lors qu'il est"],
      ["Tout le monde respecte cette juge.", "RESPECTÉE", "Cette juge ___ tous.", "est respectée de"]
    ],
    idioms: [
      ["être blanc comme neige", "être totalement innocent", "to be as pure as the driven snow", "Il prétend être blanc comme neige.", "blanc comme neige"],
      ["prendre quelqu'un la main dans le sac", "surprendre quelqu'un en train de commettre une faute", "to catch someone red-handed", "Le voleur a été pris la main dans le sac.", "pris la main dans le sac"],
      ["se faire justice soi-même", "se venger sans passer par la justice", "to take the law into one's own hands", "Il est interdit de se faire justice soi-même.", "se faire justice soi-même"],
      ["avoir maille à partir avec", "avoir des démêlés avec", "to have a run-in with", "Il a eu maille à partir avec la police.", "a eu maille à partir avec"],
      ["mettre quelqu'un sur la sellette", "le soumettre à des questions, le mettre en cause", "to put someone in the hot seat", "Le ministre a été mis sur la sellette.", "mis sur la sellette"],
      ["nul n'est censé ignorer la loi", "chacun est supposé connaître la loi", "ignorance of the law is no excuse", "Je ne savais pas ? Nul n'est censé ignorer la loi.", "Nul n'est censé ignorer la loi"],
      ["la loi du plus fort", "la domination par la force", "might is right", "Sans règles, c'est la loi du plus fort qui s'impose.", "la loi du plus fort"],
      ["passer entre les mailles du filet", "échapper à un contrôle", "to slip through the net", "Certains fraudeurs passent entre les mailles du filet.", "passent entre les mailles du filet"]
    ]
  };

  W.PROMPTS.push({ id: "fr-c1-6", level: "C1", q: "Quel droit te semble le plus précieux, et pourquoi ?", fr: "Which right seems the most precious to you, and why?", time: 180,
    phrases: ["Certes…", "Il n'en reste pas moins que…", "En effet, …", "Or, …", "Dès lors, …"],
    model: "Le droit qui me semble le plus précieux, c'est la liberté d'expression. Certes, elle a des limites : la diffamation ou l'incitation à la haine sont punies par la loi. Il n'en reste pas moins qu'elle conditionne tous les autres droits. En effet, comment défendre une liberté si l'on ne peut pas dire qu'elle est menacée ? Or, dans de nombreux pays, des journalistes se voient encore jeter en prison pour leurs articles. Dès lors, la défendre ne relève pas du confort, mais de la nécessité." });

  W.WRITING_GUIDE["c1-6"] = { genre: "An argued essay: an opinion article (DALF C1)", genre_fr: "Un essai argumenté : un article d'opinion (DALF C1)",
    plan: [["Give a title and set out the context and the question.", "Donne un titre, présente le contexte et la question."], ["Concede the arguments for, with certes, or and qui plus est.", "Concède les arguments pour, avec certes, or et qui plus est."], ["Put the arguments against (il n'en demeure pas moins).", "Avance les arguments contre (il n'en demeure pas moins)."], ["Draw a conclusion with dès lors.", "Tire une conclusion avec dès lors."], ["End with a firm, nuanced position.", "Termine sur une position ferme et nuancée."]],
    marks: [["Certes, la justice est rendue", "certes: concession", "certes : la concession"], ["Il paraît dès lors légitime", "dès lors: consequence", "dès lors : la conséquence"], ["Or, rares sont ceux qui", "or: a new premise", "or : une nouvelle prémisse"], ["Qui plus est", "adding an argument", "ajouter un argument"], ["peut se voir condamner", "se voir + infinitive", "se voir + infinitif"], ["En tout état de cause", "conclusion", "la conclusion"]] };

  W.COURSE.push({ id: "c1-6", level: "C1", icon: "gavel", title: "Justice and rights", title_fr: "Justice et droits",
    intro: "In this unit, you'll talk about justice and fundamental rights: the connectors of rigorous reasoning (or, dès lors, en effet, qui plus est), alternatives to the passive (se voir refuser, se faire voler), and contesting a decision in writing.",
    intro_fr: "Dans cette unité, tu vas parler de justice et de droits fondamentaux : les connecteurs du raisonnement rigoureux (or, dès lors, en effet, qui plus est), les alternatives au passif (se voir refuser, se faire voler) et la contestation d'une décision par écrit.",
    can: ["Chain an argument with or, dès lors, en effet and certes", "Say what happens to someone without overusing the passive", "Discuss justice, rights and their history in France", "Contest a decision in a formal letter", "Write an opinion article on a question of justice"],
    can_fr: ["Enchaîner une argumentation avec or, dès lors, en effet et certes", "Dire ce qui arrive à quelqu'un sans abuser du passif", "Débattre de la justice, des droits et de leur histoire en France", "Contester une décision dans une lettre formelle", "Rédiger un article d'opinion sur une question de justice"],
    lessons: [120, 121, 122], vocab: ["justiceFR", "droitsFR"], reading: "abolition", prompt: "fr-c1-6",
    writing: { task: "Should trials be filmed and broadcast? Write an opinion article (250-300 words) for a student newspaper.", task_fr: "Faut-il filmer et diffuser les procès ? Rédige un article d'opinion (250 à 300 mots) pour un journal étudiant.", words: "250-300",
      tips: ["Certes, …", "Or, …", "Qui plus est, …", "Il n'en demeure pas moins que…", "En tout état de cause, …"],
      checklist: ["My article has a title and sets out the question", "I conceded the arguments of the other side", "I used or, dès lors and en effet correctly", "I used at least one alternative to the passive", "My conclusion takes a clear position", "I wrote between 250 and 300 words"],
      model: "Faut-il filmer la justice ?\n\nLongtemps, les caméras sont restées à la porte des tribunaux. Depuis une loi de 2021, des audiences peuvent pourtant être filmées et diffusées, à des conditions strictes. Faut-il aller plus loin et ouvrir largement les salles d'audience aux caméras ?\n\nCertes, la justice est rendue au nom du peuple français. Il paraît dès lors légitime que les citoyens puissent voir comment elle fonctionne. Or, rares sont ceux qui ont déjà assisté à une audience : la plupart ne connaissent la justice qu'à travers les séries télévisées, qui en donnent souvent une image déformée. Filmer de vrais procès permettrait de corriger ces clichés. Les audiences sont d'ailleurs déjà publiques : la caméra ne ferait qu'en élargir l'accès. Qui plus est, la transparence pourrait renforcer la confiance dans l'institution.\n\nIl n'en demeure pas moins que la caméra n'est jamais neutre. En effet, un témoin qui se sait filmé ne parle pas de la même façon, et un accusé peut se voir condamner par l'opinion avant même le verdict. Quant aux victimes, elles risquent de revivre publiquement des faits douloureux. La présomption d'innocence, principe inscrit dans la Déclaration de 1789, s'en trouverait fragilisée.\n\nDès lors, la meilleure voie semble être celle qu'a choisie la loi : autoriser les tournages pour des motifs d'intérêt public, tout en protégeant l'anonymat des personnes qui le demandent et en ne diffusant les images qu'une fois l'affaire définitivement jugée.\n\nEn tout état de cause, filmer la justice ne saurait en faire un spectacle. Si les caméras entrent dans les tribunaux, ce doit être pour expliquer, non pour divertir." } });
})();
