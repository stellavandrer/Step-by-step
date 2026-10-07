/* Cours de français, unité C2-1 « Words and their traps / Les mots et leurs pièges » : les paronymes (conjoncture /
   conjecture, éminent / imminent), les calques de l'anglais (faire du sens, adresser un problème, éventuellement),
   le compte rendu oral du DALF C2. Première unité du C2. Personnages fictifs, prénoms français. Faits vérifiables
   seulement : DALF C2, épreuve orale en 30 minutes après une heure de préparation (compte rendu d'un document sonore
   entendu deux fois, développement personnel, débat avec le jury), épreuve écrite de 3 h 30 (texte d'au moins
   700 mots à partir d'un dossier d'environ 2 000 mots) ; conquête normande de 1066 ; près d'un tiers du vocabulaire
   anglais d'origine française (estimation courante) ; l'expression « faux amis », popularisée par Koessler et
   Derocquigny en 1928 ; la rubrique « Dire, ne pas dire » de l'Académie française. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "paronymesFR", icon: "spell-check", title: "Paronyms", title_fr: "Les paronymes", level: "C2", words: [
    ["la conjoncture", "the (economic) situation", "La conjoncture économique reste fragile."],
    ["la conjecture", "the conjecture, the guess", "Sur ce point, nous en sommes réduits aux conjectures."],
    ["éminent", "eminent, distinguished", "C'est un éminent spécialiste du sujet."],
    ["imminent", "imminent, about to happen", "Le départ du train est imminent."],
    ["le prolongement", "the extension (in space), the continuation", "Le prolongement de la ligne de tramway est prévu."],
    ["la prolongation", "the extension (in time)", "Le match s'est joué en prolongation."],
    ["l'effraction", "the break-in", "Les voleurs sont entrés par effraction."],
    ["l'acception", "the meaning (of a word)", "Ce mot a plusieurs acceptions."],
    ["l'acceptation", "the acceptance", "L'acceptation de l'offre doit être écrite."],
    ["l'allocution", "the (short formal) speech", "Le président a prononcé une brève allocution."],
    ["l'allocation", "the allowance, the benefit", "Elle touche une allocation de logement."],
    ["décerner", "to award", "Le jury a décerné le prix à une jeune romancière."],
    ["discerner", "to make out, to discern", "On discerne mal la frontière entre les deux notions."],
    ["perpétrer", "to perpetrate", "Le crime a été perpétré la nuit."],
    ["perpétuer", "to perpetuate, to carry on", "Ils perpétuent une tradition familiale."],
    ["recouvrer", "to recover, to regain", "Il a recouvré la vue après l'opération."],
    ["l'éruption", "the eruption", "L'éruption du volcan a duré trois jours."],
    ["l'irruption", "the bursting in", "Les manifestants ont fait irruption dans la salle."]
  ] },
  { id: "fauxamisFR", icon: "replace", title: "False friends", title_fr: "Les faux amis", level: "C2", words: [
    ["actuellement", "currently (not actually)", "Il travaille actuellement à Lyon."],
    ["éventuellement", "possibly, if need be (not eventually)", "Nous pourrions éventuellement décaler la date."],
    ["réaliser", "to carry out, to achieve (to realise: criticised)", "Ils ont réalisé leur projet en un an."],
    ["supporter", "to bear, to stand (not to support)", "Je ne supporte plus ce bruit."],
    ["sensible", "sensitive (not sensible)", "C'est un sujet sensible."],
    ["la location", "the rental (not the location)", "La location de la voiture est comprise."],
    ["la cave", "the cellar (not a cave)", "Il garde ses bouteilles à la cave."],
    ["la librairie", "the bookshop (not a library)", "J'ai trouvé ce roman dans une petite librairie."],
    ["l'avertissement", "the warning (not an advertisement)", "Il a reçu un dernier avertissement."],
    ["l'injure", "the insult (not an injury)", "Il a été condamné pour injure."],
    ["la caution", "the deposit; the guarantee (not caution)", "La caution est d'un mois de loyer."],
    ["l'issue", "the outcome, the way out (not an issue)", "L'issue du vote reste incertaine."],
    ["la phrase", "the sentence (not a phrase)", "Cette phrase est trop longue."],
    ["l'agenda", "the diary, the planner", "Je note le rendez-vous dans mon agenda."],
    ["achever", "to finish, to complete (and to finish off)", "Il a achevé son roman l'été dernier."],
    ["l'opportunité", "appropriateness; (by extension) opportunity", "On s'interroge sur l'opportunité de cette réforme."],
    ["le faux ami", "the false friend", "Actuellement est un faux ami pour les anglophones."],
    ["le calque", "the calque, the loan translation", "Faire du sens est un calque de l'anglais."]
  ] });

  W.LESSONS.push(
  {
    id: 135, level: "C2", icon: "spell-check",
    title: "Conjoncture or conjecture? Paronyms", title_fr: "Conjoncture ou conjecture ? Les paronymes",
    subtitle: "Words that look and sound almost the same, and mean something quite different.", subtitle_fr: "Des mots qui se ressemblent presque, et qui veulent dire tout autre chose.",
    body: `
<h2>Classic pairs</h2>
<table>
<tr><th>Word</th><th>Meaning</th></tr>
<tr><td><s-fr>la conjoncture</s-fr> / <s-fr>la conjecture</s-fr></td><td>the economic situation / a guess</td></tr>
<tr><td><s-fr>éminent</s-fr> / <s-fr>imminent</s-fr></td><td>distinguished / about to happen</td></tr>
<tr><td><s-fr>le prolongement</s-fr> / <s-fr>la prolongation</s-fr></td><td>in space / in time</td></tr>
<tr><td><s-fr>l'effraction</s-fr> / <s-fr>l'infraction</s-fr></td><td>a break-in / an offence</td></tr>
<tr><td><s-fr>l'acception</s-fr> / <s-fr>l'acceptation</s-fr></td><td>the meaning of a word / acceptance</td></tr>
<tr><td><s-fr>l'allocution</s-fr> / <s-fr>l'allocation</s-fr></td><td>a speech / a benefit</td></tr>
<tr><td><s-fr>décerner</s-fr> / <s-fr>discerner</s-fr></td><td>to award / to make out</td></tr>
<tr><td><s-fr>perpétrer</s-fr> / <s-fr>perpétuer</s-fr></td><td>to commit (a crime) / to carry on</td></tr>
<tr><td><s-fr>recouvrer</s-fr> / <s-fr>recouvrir</s-fr></td><td>to regain / to cover</td></tr>
<tr><td><s-fr>l'éruption</s-fr> / <s-fr>l'irruption</s-fr></td><td>a volcano's eruption / bursting in</td></tr>
</table>
<h2>Prepositions that change everything</h2>
<p><s-fr>pallier un problème</s-fr> (transitive in careful French, not <s-fr>pallier à</s-fr>) · <s-fr>se rappeler quelque chose</s-fr> but <s-fr>se souvenir de quelque chose</s-fr> · <s-fr>partir à Paris</s-fr> is now everyday French, but careful writing prefers <s-fr>partir pour Paris</s-fr>.</p>
<div class="tip">At C2, mistakes are rarely in grammar: they're in precision. When two words look alike, check them in a good dictionary. Getting <s-fr>éminent</s-fr> and <s-fr>imminent</s-fr> right is the kind of detail an examiner notices.</div>
`,
    examples: [
      ["La conjoncture économique reste incertaine.", "The economic situation remains uncertain."],
      ["Faute de données, nous en sommes réduits aux conjectures.", "Without data, we're reduced to guesswork."],
      ["Un éminent historien a préfacé l'ouvrage.", "A distinguished historian wrote the preface to the book."],
      ["Une décision est imminente.", "A decision is imminent."],
      ["Le prolongement de l'autoroute a été voté.", "The extension of the motorway has been approved."],
      ["Il a obtenu une prolongation de son visa.", "He was granted an extension of his visa."],
      ["Les cambrioleurs sont entrés par effraction.", "The burglars broke in."],
      ["Ces mesures visent à pallier le manque de médecins.", "These measures aim to make up for the shortage of doctors."]
    ],
    quiz: [
      { q: "“A distinguished scientist” is:", o: ["un éminent scientifique", "un imminent scientifique", "un émanant scientifique"], a: 0, ex: "éminent = distinguished; imminent = about to happen." },
      { q: "“The extension of the deadline” (in time) is:", o: ["la prolongation du délai", "le prolongement du délai", "la prolongeance du délai"], a: 0, ex: "Time: prolongation; space: prolongement." },
      { q: "“The prize was awarded to her” is:", o: ["Le prix lui a été décerné.", "Le prix lui a été discerné.", "Le prix lui a été décerné à elle-même."], a: 0, ex: "décerner = to award." },
      { q: "In careful French, “to remedy a problem” is:", o: ["pallier un problème", "pallier à un problème", "pallier d'un problème"], a: 0, ex: "pallier is transitive." },
      { q: "“He regained his freedom” is:", o: ["Il a recouvré la liberté.", "Il a recouvert la liberté.", "Il a recouvri la liberté."], a: 0, ex: "recouvrer = to regain; recouvrir = to cover." }
    ]
  },
  {
    id: 136, level: "C2", icon: "replace",
    title: "Faire du sens? Calques from English", title_fr: "Faire du sens ? Les calques de l'anglais",
    subtitle: "The English structures that slip into French, and what a careful speaker says instead.", subtitle_fr: "Les tournures anglaises qui se glissent dans le français, et ce qu'on dit à leur place dans une langue soignée.",
    body: `
<h2>Calques of structure</h2>
<table>
<tr><th>Calque</th><th>Careful French</th></tr>
<tr><td><s-fr>faire du sens</s-fr></td><td><s-fr>avoir du sens</s-fr>, <s-fr>être logique</s-fr></td></tr>
<tr><td><s-fr>adresser un problème</s-fr></td><td><s-fr>traiter un problème</s-fr>, <s-fr>s'attaquer à un problème</s-fr></td></tr>
<tr><td><s-fr>être en charge de</s-fr></td><td><s-fr>être chargé de</s-fr>, <s-fr>être responsable de</s-fr></td></tr>
<tr><td><s-fr>appliquer pour un poste</s-fr></td><td><s-fr>postuler à un poste</s-fr>, <s-fr>poser sa candidature</s-fr></td></tr>
<tr><td><s-fr>c'est la première fois que</s-fr> (correct!)</td><td>never <s-fr>le premier temps que</s-fr></td></tr>
<tr><td><s-fr>initier un projet</s-fr></td><td><s-fr>lancer</s-fr>, <s-fr>entreprendre un projet</s-fr></td></tr>
<tr><td><s-fr>impacter</s-fr></td><td><s-fr>avoir des conséquences sur</s-fr>, <s-fr>toucher</s-fr></td></tr>
</table>
<h2>False friends among adverbs</h2>
<p><s-fr>actuellement</s-fr> = currently (actually = <s-fr>en fait</s-fr>) · <s-fr>éventuellement</s-fr> = possibly (eventually = <s-fr>finalement</s-fr>) · <s-fr>définitivement</s-fr> = for good, permanently (definitely = <s-fr>sans aucun doute</s-fr>)</p>
<h2>Usage moves on</h2>
<p>Some calques have become so common that dictionaries record them (<s-fr>réaliser</s-fr> in the sense of to realise, <s-fr>opportunité</s-fr> for opportunity). The Académie française discusses many of them in its column <s-fr>Dire, ne pas dire</s-fr>. In an exam or a formal text, prefer the traditional form: it can't be held against you.</p>
<div class="tip">Your English is your best friend and your worst enemy: it gives you thousands of transparent words, and the reflex to copy its structures. When a French sentence feels effortless, ask yourself whether it's French, or English in disguise.</div>
`,
    examples: [
      ["Cette décision n'a aucun sens.", "This decision makes no sense."],
      ["Il faut s'attaquer à ce problème sans tarder.", "We need to address this problem without delay."],
      ["Elle est chargée de la communication.", "She's in charge of communications."],
      ["J'ai posé ma candidature à ce poste.", "I applied for this job."],
      ["En fait, je ne suis pas d'accord.", "Actually, I don't agree."],
      ["Il a quitté la ville définitivement.", "He left the town for good."],
      ["Cette crise a eu des conséquences sur tout le secteur.", "This crisis has impacted the whole sector."]
    ],
    quiz: [
      { q: "“It makes sense” is, in careful French:", o: ["Ça a du sens.", "Ça fait du sens.", "Ça fait sens de."], a: 0, ex: "faire du sens is a calque." },
      { q: "Actuellement means:", o: ["currently", "actually", "accurately"], a: 0, ex: "Actually = en fait." },
      { q: "“To apply for a job” is:", o: ["postuler à un poste", "appliquer pour un poste", "candidater pour un poste de"], a: 0, ex: "postuler à, poser sa candidature." },
      { q: "Définitivement means:", o: ["for good, permanently", "definitely", "finally"], a: 0, ex: "Definitely = sans aucun doute, assurément." },
      { q: "“To address a problem” is, in careful French:", o: ["traiter un problème", "adresser un problème", "adresser à un problème"], a: 0, ex: "adresser un problème is a calque." }
    ]
  },
  {
    id: 137, level: "C2", kind: "functional", icon: "headphones",
    title: "Everyday French: the DALF C2 oral report", title_fr: "Le français de tous les jours : le compte rendu oral du DALF C2",
    subtitle: "Listen twice, take notes, report faithfully, then build your own argument.", subtitle_fr: "Écouter deux fois, prendre des notes, restituer fidèlement, puis construire sa propre réflexion.",
    body: `
<h2>The exam</h2>
<p>The DALF C2 oral starts from an audio document, heard twice. After an hour of preparation, you have thirty minutes with the jury: a report on the document, a personal development on the question it raises, then a debate.</p>
<h2>Taking notes</h2>
<p>First listening: the topic, the speakers, the structure. Second listening: the arguments, the examples, the figures. Write key words and arrows, never sentences.</p>
<h2>Reporting faithfully</h2>
<p><s-fr>Le document que j'ai écouté est un extrait d'une émission consacrée à…</s-fr> · <s-fr>L'intervenante commence par rappeler que…</s-fr> · <s-fr>Elle développe ensuite l'idée selon laquelle…</s-fr> · <s-fr>Elle illustre son propos par l'exemple de…</s-fr> · <s-fr>Elle conclut en soulignant que…</s-fr></p>
<h2>Moving to your own view</h2>
<p><s-fr>Ce document soulève une question plus large :…</s-fr> · <s-fr>Je voudrais à présent prolonger cette réflexion.</s-fr> · <s-fr>Je partage en partie cette analyse, mais…</s-fr></p>
<div class="tip">Keep the two parts clearly separate: in the report, no opinion, only the speaker's ideas, in the right order. Then announce the change: <s-fr>J'en viens maintenant à mon point de vue.</s-fr> Mixing the two is the commonest reason for losing points.</div>
`,
    examples: [
      ["Le document que j'ai écouté est un extrait d'une émission consacrée aux langues.", "The document I listened to is an extract from a programme about languages."],
      ["L'intervenante commence par rappeler que les mots voyagent.", "The speaker begins by pointing out that words travel."],
      ["Elle développe ensuite l'idée selon laquelle l'usage finit toujours par trancher.", "She then develops the idea that usage always ends up deciding."],
      ["Elle illustre son propos par l'exemple de pallier.", "She illustrates her point with the example of pallier."],
      ["Elle conclut en soulignant que la précision est une forme de politesse.", "She concludes by stressing that precision is a form of courtesy."],
      ["J'en viens maintenant à mon point de vue.", "I'll now come to my own point of view."]
    ],
    quiz: [
      { q: "In the DALF C2 oral, the audio document is heard:", o: ["twice", "once", "three times"], a: 0, ex: "Twice, then one hour of preparation." },
      { q: "In the report part, your opinion:", o: ["has no place", "comes first", "replaces the document"], a: 0, ex: "Report first; your view comes after." },
      { q: "“The idea that…” (formal) is:", o: ["l'idée selon laquelle…", "l'idée selon que…", "l'idée laquelle…"], a: 0, ex: "selon laquelle." },
      { q: "When taking notes, you should write:", o: ["key words and arrows", "full sentences", "nothing"], a: 0, ex: "Speed matters." },
      { q: "“She illustrates her point with” is:", o: ["Elle illustre son propos par", "Elle illustre son point avec", "Elle montre son propos de"], a: 0, ex: "illustrer son propos par." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    135: {
      gap: [["La ___ économique reste mauvaise. (the situation)", "conjoncture"], ["Un ___ spécialiste a été consulté. (distinguished)", "éminent"], ["Les voleurs sont entrés par ___. (break-in)", "effraction"], ["Le jury a ___ le prix à une romancière. (awarded)", "décerné"]],
      fix: [["Ces mesures visent à pallier au manque de médecins.", "Ces mesures visent à pallier le manque de médecins.", "In careful French, pallier is transitive: no à."], ["Il a recouvert la vue après l'opération.", "Il a recouvré la vue après l'opération.", "recouvrer = to regain; recouvrir = to cover."]],
      task: ["Write four sentences about current events, using conjoncture, imminent, prolongation and allocution correctly.", "Écris quatre phrases sur l'actualité, en employant correctement conjoncture, imminent, prolongation et allocution.", "Dans la conjoncture actuelle, le gouvernement hésite à annoncer de nouvelles dépenses. Une décision serait toutefois imminente. Les syndicats réclament la prolongation des aides jusqu'à la fin de l'année. La ministre doit s'exprimer ce soir dans une courte allocution télévisée."]
    },
    136: {
      gap: [["Cette idée n'a aucun ___. (makes no sense)", "sens"], ["Il faut s'___ à ce problème rapidement. (address)", "attaquer"], ["Elle est ___ de la communication. (in charge, f)", "chargée"], ["J'ai posé ma ___ à ce poste. (application)", "candidature"]],
      fix: [["Ça fait du sens de partir plus tôt.", "Ça a du sens de partir plus tôt.|Il est logique de partir plus tôt.", "faire du sens is a calque of to make sense."], ["Il est actuellement d'accord : il me l'a dit hier, contrairement à ce qu'on croyait.", "En fait, il est d'accord : il me l'a dit hier, contrairement à ce qu'on croyait.", "actually = en fait; actuellement = currently."]],
      task: ["Rewrite this email without calques: Je suis en charge du projet. Votre proposition fait du sens, mais il faut adresser la question du budget. Éventuellement, nous signerons.", "Réécris ce courriel sans calques : Je suis en charge du projet. Votre proposition fait du sens, mais il faut adresser la question du budget. Éventuellement, nous signerons.", "C'est moi qui suis responsable du projet. Votre proposition a du sens, mais il faut traiter la question du budget. Nous finirons sans doute par signer."]
    },
    137: {
      gap: [["Le document que j'ai ___ est un extrait d'émission. (listened to)", "écouté"], ["L'intervenante ___ par rappeler que les mots voyagent. (begins)", "commence"], ["Elle développe l'idée selon ___ l'usage finit par trancher. (which)", "laquelle"], ["Elle illustre son ___ par un exemple. (point)", "propos"]],
      fix: [["Elle développe l'idée selon que l'usage tranche.", "Elle développe l'idée selon laquelle l'usage tranche.", "l'idée selon laquelle: a relative pronoun after a preposition."], ["Dans le document, je pense que l'intervenante a raison de dire que les paronymes sont dangereux.", "Dans le document, l'intervenante affirme que les paronymes sont une source d'erreurs.", "In the report, no opinion: only what the speaker says."]],
      task: ["Report this unit's radio chronicle in four sentences: the topic, the speaker's main idea, an example, the conclusion.", "Rends compte en quatre phrases de la chronique radiophonique de cette unité : le sujet, l'idée principale, un exemple, la conclusion.", "Le document est un extrait d'une chronique radiophonique consacrée aux mots qui se ressemblent. La linguiste invitée explique que les paronymes sont une source d'erreurs fréquente, y compris chez les locuteurs natifs. Elle illustre son propos par l'exemple de pallier, qui se construit sans à dans une langue soignée. Elle conclut en soulignant que la précision du vocabulaire est une forme de politesse envers son auditoire."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "juryc2", lesson: 137, level: "C2", icon: "headphones", partner: "Isabelle", role: "a DALF C2 jury member",
    title: "The oral report", title_fr: "Le compte rendu oral",
    setting: "You've listened twice to a radio chronicle on words that look alike, and prepared for an hour. Isabelle, a member of the DALF C2 jury, invites you to begin.", setting_fr: "Tu as écouté deux fois une chronique radiophonique sur les mots qui se ressemblent, puis préparé pendant une heure. Isabelle, membre du jury du DALF C2, t'invite à commencer.",
    turns: [
      { p: "Nous vous écoutons. Pouvez-vous présenter le document ?", fr: "We're listening. Could you present the document?" },
      { y: ["Le document que j'ai écouté est un extrait d'une chronique radiophonique consacrée aux mots qui se ressemblent.", "Le document que j'ai écouté est un extrait d'une chronique radiophonique consacré aux mots qui se ressemblent.", "Le document que j'ai écouté est un extrait d'une chronique radiophonique consacrée sur les mots qui se ressemblent."], fr: "The document I listened to is an extract from a radio chronicle about words that look alike.", why: "consacrée agrees with chronique; consacré à." },
      { p: "Quelle est l'idée principale de l'intervenante ?", fr: "What is the speaker's main idea?" },
      { y: ["Elle développe l'idée selon laquelle les paronymes piègent aussi les locuteurs natifs.", "Elle développe l'idée selon que les paronymes piègent aussi les locuteurs natifs.", "Elle développe l'idée dont les paronymes piègent aussi les locuteurs natifs."], fr: "She develops the idea that paronyms also trap native speakers.", why: "l'idée selon laquelle." },
      { p: "Donne-t-elle des exemples ?", fr: "Does she give examples?" },
      { y: ["Oui, elle illustre son propos par le verbe pallier, qui s'emploie sans à dans une langue soignée.", "Oui, elle illustre son point avec le verbe pallier, qui s'emploie sans à dans une langue soignée.", "Oui, elle illustre son propos par le verbe pallier, qui s'emploie sans à dans un langue soignée."], fr: "Yes, she illustrates her point with the verb pallier, which is used without à in careful French.", why: "illustrer son propos par; illustrer son point is a calque." },
      { p: "Bien. Passons à votre point de vue.", fr: "Good. Let's move on to your point of view." },
      { y: ["J'en viens donc à mon point de vue : je partage en partie cette analyse, mais l'usage finit toujours par trancher.", "J'en viens donc de mon point de vue : je partage en partie cette analyse, mais l'usage finit toujours par trancher.", "J'en viens donc à mon point de vue : je partage en partie cette analyse, mais l'usage finit toujours à trancher."], fr: "So I now come to my point of view: I partly share this analysis, but usage always ends up deciding.", why: "en venir à; finir par + infinitive." },
      { p: "Faudrait-il, selon vous, corriger ceux qui disent pallier à ?", fr: "Should those who say pallier à be corrected, in your view?" },
      { y: ["Je ne crois pas qu'il faille les reprendre en public ; en revanche, à l'écrit, une langue soignée s'impose.", "Je ne crois pas qu'il faut les reprendre en public ; en revanche, à l'écrit, une langue soignée s'impose.", "Je ne crois pas qu'il faille les reprendre en public ; en revanche, à l'écrit, une langue soignée s'imposent."], fr: "I don't think they should be corrected in public; in writing, however, careful language is a must.", why: "ne pas croire que + subjunctive; une langue… s'impose (singular)." }
    ] }
  );

  W.READINGS.push({
    id: "fauxamis", level: "C2", icon: "replace", title: "Faux amis : les traîtres de la langue", genre: "Article",
    intro: "Why do sensible, librairie and éventuellement trap English speakers? A story that begins in 1066. Paronyms, false friends and calques.",
    intro_fr: "Pourquoi sensible, librairie et éventuellement piègent-ils les anglophones ? Une histoire qui commence en 1066. Paronymes, faux amis et calques.",
    paragraphs: [
      { en: "On les appelle les faux amis : des mots qui se ressemblent d'une langue à l'autre, mais qui n'ont pas le même sens. L'expression s'est imposée en 1928, avec un ouvrage de Maxime Koessler et Jules Derocquigny consacré aux trahisons du vocabulaire anglais. Pour un anglophone qui apprend le français, ces pièges sont légion.", fr: "They're called false friends: words that look alike from one language to another but don't mean the same thing. The expression took hold in 1928, with a book by Maxime Koessler and Jules Derocquigny on the betrayals of English vocabulary. For an English speaker learning French, these traps are legion." },
      { en: "Leur origine tient à l'histoire. Après la conquête normande de 1066, le français fut pendant plusieurs siècles la langue de la cour et de l'administration en Angleterre. L'anglais en a hérité un vocabulaire considérable : selon une estimation souvent citée, près d'un tiers de ses mots seraient d'origine française. Mais, une fois la Manche franchie, chaque langue a fait évoluer ces mots à sa manière.", fr: "Their origin lies in history. After the Norman Conquest of 1066, French was for several centuries the language of the court and the administration in England. English inherited a considerable vocabulary from it: according to an often-quoted estimate, nearly a third of its words are of French origin. But once the Channel was crossed, each language developed these words in its own way." },
      { en: "Ainsi, sensible désigne en français une personne qui ressent vivement les choses, tandis que l'anglais sensible qualifie une personne raisonnable. Une librairie vend des livres, alors qu'une library les prête. Quant à éventuellement, il n'annonce pas ce qui finira par arriver, mais ce qui pourrait se produire.", fr: "So in French, sensible describes someone who feels things keenly, whereas the English sensible describes a reasonable person. A librairie sells books, whereas a library lends them. As for éventuellement, it doesn't announce what will end up happening, but what might happen." },
      { en: "Plus insidieux encore sont les calques, qui ne touchent pas un mot isolé mais toute une construction. Dire qu'une idée fait du sens ou qu'il faut adresser un problème, c'est employer des mots français sur un moule anglais. L'Académie française consacre à ces tournures une partie de sa rubrique Dire, ne pas dire, sans toujours parvenir à endiguer leur progression.", fr: "More insidious still are calques, which affect not a single word but a whole structure. Saying that an idea fait du sens or that one must adresser un problème is using French words in an English mould. The Académie française devotes part of its column Dire, ne pas dire to these turns of phrase, without always managing to stem their spread." },
      { en: "Faut-il pour autant voir dans ces ressemblances une menace ? Pour l'apprenant, elles sont aussi une chance : les vrais amis, bien plus nombreux que les faux, lui ouvrent d'emblée des milliers de mots. Il suffit de garder en tête une règle simple : un mot transparent n'est pas toujours un mot fiable.", fr: "Should we, then, see these resemblances as a threat? For the learner, they're also an opportunity: true friends, far more numerous than false ones, open up thousands of words right away. It's enough to keep one simple rule in mind: a transparent word isn't always a reliable one." }
    ],
    glossary: { "trahisons": "betrayals", "légion": "legion, countless", "conquête": "conquest", "hérité": "inherited", "franchie": "crossed", "ressent": "feels", "vivement": "keenly", "qualifie": "describes", "prête": "lends", "insidieux": "insidious", "moule": "mould", "endiguer": "to stem, to contain", "emblée": "d'emblée: straight away", "fiable": "reliable" },
    questions: [
      { q: "Quand l'expression faux amis s'est-elle imposée ?", o: ["En 1928, avec un ouvrage de Koessler et Derocquigny", "En 1066", "Avec la création de l'Académie française"], a: 0 },
      { q: "Pourquoi l'anglais compte-t-il tant de mots d'origine française ?", o: ["Le français a longtemps été la langue de la cour et de l'administration en Angleterre après 1066.", "Les deux langues ont la même grammaire.", "L'anglais vient directement du français."], a: 0 },
      { q: "Que signifie éventuellement ?", o: ["Ce qui pourrait se produire", "Ce qui finira par arriver", "Ce qui est déjà arrivé"], a: 0 },
      { q: "Pourquoi les calques sont-ils plus insidieux que les faux amis ?", o: ["Ils touchent toute une construction, et chaque mot y est français.", "Ils sont plus rares.", "Ils viennent du latin."], a: 0 },
      { q: "Quelle règle l'auteur propose-t-il à l'apprenant ?", o: ["Un mot transparent n'est pas toujours un mot fiable.", "Il faut éviter tous les mots transparents.", "Il faut traduire mot à mot."], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-c2-1", unit: "c2-1", level: "C2", icon: "audio-lines",
    title: "La chronique des mots justes", title_fr: "La chronique des mots justes",
    context: "In a weekly radio chronicle, Théo talks to Agathe, a linguist, about paronyms.", context_fr: "Dans une chronique radiophonique hebdomadaire, Théo reçoit Agathe, linguiste, pour parler des paronymes.",
    words: [["du tout au tout", "completely"], ["se laisser prendre", "to be taken in"], ["remédier à", "to remedy"], ["épargner", "to spare"], ["l'auditoire", "the audience"]],
    lines: [["Théo", "Bonjour Agathe ! Cette semaine, vous vous attaquez aux mots qui se ressemblent.", "fr-FR"], ["Agathe", "Oui, les paronymes. Ce sont des mots presque identiques, à une lettre ou à un son près, mais dont le sens diffère du tout au tout. Et contrairement à ce qu'on croit, ils ne piègent pas que les étrangers : les locuteurs natifs s'y laissent prendre tous les jours.", "fr-FR"], ["Théo", "Un exemple ?", "fr-FR"], ["Agathe", "Prenez conjoncture et conjecture. On entend régulièrement parler d'une conjecture économique difficile. Or, une conjecture, c'est une hypothèse ! Ce qu'on veut dire, c'est la conjoncture, la situation du moment.", "fr-FR"], ["Théo", "Et du côté des constructions ?", "fr-FR"], ["Agathe", "Là, mon exemple préféré, c'est pallier. Dans une langue soignée, on pallie un manque ; on ne pallie pas à un manque. La construction avec à s'entend partout, sans doute par analogie avec remédier à, et certains dictionnaires la signalent désormais comme courante.", "fr-FR"], ["Théo", "Faut-il alors reprendre ceux qui se trompent ?", "fr-FR"], ["Agathe", "Surtout pas en public ! La précision n'est pas une arme pour humilier. Mais à l'écrit, dans un rapport ou une lettre officielle, ces détails font la différence : ils montrent qu'on a pris le temps de chercher le mot juste.", "fr-FR"], ["Théo", "Le mot de la fin ?", "fr-FR"], ["Agathe", "Je dirais que la précision est une forme de politesse : choisir le bon mot, c'est épargner à l'autre l'effort de deviner ce qu'on a voulu dire.", "fr-FR"]],
    gist: ["De quoi parle la chronique ?", ["Des paronymes, ces mots presque identiques au sens différent", "De l'histoire de la langue anglaise", "Des accents régionaux"]],
    detail: [["Selon Agathe, qui les paronymes piègent-ils ?", ["Les étrangers, mais aussi les locuteurs natifs", "Seulement les enfants", "Seulement les étrangers"]], ["Quelle confusion cite-t-elle d'abord ?", ["Conjoncture et conjecture", "Éminent et imminent", "Effraction et infraction"]], ["D'où viendrait la construction pallier à ?", ["D'une analogie avec remédier à", "De l'anglais", "Du latin"]], ["Pourquoi la précision est-elle une forme de politesse ?", ["Elle épargne à l'autre l'effort de deviner ce qu'on a voulu dire.", "Elle impressionne le public.", "Elle permet de parler plus vite."]]],
    decode: ["dont le sens diffère du tout au tout", "certains dictionnaires la signalent désormais comme courante"],
    tip: "At C2, listen for the speaker's stance as much as the facts: or, sans doute, surtout pas, je dirais que. These small words tell you what she asserts, what she supposes and what she rejects.", tip_fr: "Au C2, écoute la position de l'intervenante autant que les faits : or, sans doute, surtout pas, je dirais que. Ces petits mots te disent ce qu'elle affirme, ce qu'elle suppose et ce qu'elle rejette."
  }]);

  W.LEXIS = W.LEXIS || {};
  W.LEXIS["c2-1"] = {
    colloc: [
      ["commettre un impair", "to make a blunder", "En confondant les deux mots, il a commis un impair.", "commis", ["réalisé", "posé"]],
      ["prêter à confusion", "to be misleading", "Cette formulation prête à confusion.", "prête", ["donne", "porte"]],
      ["lever une ambiguïté", "to clear up an ambiguity", "Une virgule suffirait à lever l'ambiguïté.", "lever", ["ôter", "tirer"]],
      ["employer un mot à bon escient", "to use a word appropriately", "Elle emploie chaque terme à bon escient.", "escient", ["essai", "esprit"]],
      ["peser ses mots", "to weigh one's words", "Le ministre a pesé chacun de ses mots.", "pesé", ["levé", "tenu"]],
      ["tomber dans le piège", "to fall into the trap", "Beaucoup d'apprenants tombent dans le piège des faux amis.", "tombent", ["chutent", "glissent"]],
      ["forger un mot", "to coin a word", "Ce philosophe a forgé un mot pour décrire le phénomène.", "forgé", ["forcé", "frappé"]],
      ["dénaturer le sens", "to distort the meaning", "Cette traduction dénature le sens du texte.", "dénature", ["déroute", "désosse"]],
      ["recourir à un terme", "to resort to a term", "Faute de mieux, il a recouru à un terme anglais.", "recouru", ["couru", "secouru"]],
      ["faire autorité", "to be authoritative", "Ce dictionnaire fait autorité.", "fait", ["porte", "tient"]]
    ],
    wf: [
      ["Ce terme est d'une grande ___ : il a plusieurs sens. (AMBIGU)", "ambiguïté"],
      ["Sa ___ du vocabulaire impressionne le jury. (MAÎTRISER)", "maîtrise"],
      ["Elle a fait preuve d'une grande ___ dans le choix des mots. (PRÉCIS)", "précision"],
      ["Cette traduction est ___ : elle trahit le sens du texte. (FIDÈLE)", "infidèle"],
      ["L'___ de cette tournure est récente. (APPARAÎTRE)", "apparition"],
      ["Ce calque est souvent ___ par les puristes. (CRITIQUE)", "critiqué"],
      ["La ___ des deux mots est source d'erreurs. (RESSEMBLER)", "ressemblance"],
      ["Ces nuances sont presque ___ pour un débutant. (PERCEVOIR)", "imperceptibles"]
    ],
    kwt: [
      ["Il a fini par comprendre son erreur.", "COMPTE", "Il ___ son erreur.", "a fini par se rendre compte de"],
      ["Le mot qu'il a employé peut être compris de deux façons.", "CONFUSION", "Le mot qu'il a employé ___.", "prête à confusion"],
      ["Il faut s'occuper de ce problème sans attendre.", "ATTAQUER", "Il faut ___ sans attendre.", "s'attaquer à ce problème"],
      ["Il est possible que nous changions la date.", "ÉVENTUELLEMENT", "Nous ___ la date.", "pourrions éventuellement changer"],
      ["Je ne peux plus tolérer ce bruit.", "SUPPORTER", "Je ___ ce bruit.", "ne peux plus supporter"],
      ["Il a mal compris le sens du mot.", "CONTRESENS", "Il ___ le sens du mot.", "a fait un contresens sur"]
    ],
    idioms: [
      ["chercher la petite bête", "chercher le moindre défaut", "to nitpick", "Ce correcteur cherche toujours la petite bête.", "cherche toujours la petite bête"],
      ["à bon entendeur, salut", "avertissement adressé à qui veut bien comprendre", "a word to the wise", "Le prochain retard sera sanctionné : à bon entendeur, salut !", "à bon entendeur, salut"],
      ["parler à tort et à travers", "parler sans réfléchir", "to talk without thinking", "Il parle à tort et à travers.", "parle à tort et à travers"],
      ["prendre quelqu'un au mot", "accepter sa proposition à la lettre", "to take someone at their word", "Tu as dit que tu m'aiderais : je te prends au mot !", "je te prends au mot"],
      ["un dialogue de sourds", "une discussion où personne n'écoute l'autre", "a dialogue of the deaf", "La réunion a tourné au dialogue de sourds.", "dialogue de sourds"],
      ["au temps pour moi", "je reconnais mon erreur", "my mistake", "Au temps pour moi, la réunion est à dix heures, pas à neuf.", "Au temps pour moi"],
      ["se mélanger les pinceaux", "s'embrouiller", "to get mixed up", "Avec tous ces paronymes, je me suis mélangé les pinceaux.", "me suis mélangé les pinceaux"],
      ["ne pas mâcher ses mots", "dire franchement ce qu'on pense", "not to mince one's words", "La critique n'a pas mâché ses mots.", "n'a pas mâché ses mots"]
    ]
  };

  W.PROMPTS.push({ id: "fr-c2-1", level: "C2", q: "Raconte une confusion de mots qui t'est arrivée dans une langue étrangère, et ce que tu en as appris.", fr: "Tell us about a mix-up with words that happened to you in a foreign language, and what you learnt from it.", time: 240,
    phrases: ["Ma plus belle confusion…", "croyant dire que…", "Il m'a fallu un moment pour…", "Depuis, je me méfie de…", "Cette mésaventure m'a appris que…"],
    model: "Ma plus belle confusion date de mon premier stage en France. Lors d'une réunion, j'ai annoncé que nous livrerions éventuellement le projet en juin, croyant dire que nous finirions par le livrer. Mon responsable a blêmi : pour lui, la date devenait incertaine ! Il m'a fallu un moment pour comprendre le malentendu. Depuis, je me méfie des mots transparents, et j'ai pris l'habitude de noter les faux amis dans un carnet, avec une phrase d'exemple. Cette mésaventure m'a appris qu'une langue étrangère n'est jamais tout à fait la nôtre, et que l'humilité fait partie de l'apprentissage." });

  W.WRITING_GUIDE["c2-1"] = { genre: "A feature article (C2)", genre_fr: "Un article de fond (C2)",
    plan: [["Open with a concrete scene and ask the question.", "Ouvre sur une scène concrète et pose la question."], ["Explain the origin of the phenomenon.", "Explique l'origine du phénomène."], ["Show its positive side, with two arguments.", "Montre son intérêt, avec deux arguments."], ["Move the debate to where the real danger lies.", "Déplace le débat vers le véritable danger."], ["Conclude with a nuanced, personal view.", "Conclus par un point de vue nuancé et personnel."]],
    marks: [["Quiconque apprend une langue voisine", "an opening that involves the reader", "une accroche qui implique le lecteur"], ["seraient-ils donc des traîtres", "the question, in the conditional", "la question, au conditionnel"], ["Il serait pourtant réducteur", "the counter-argument", "le contre-argument"], ["D'une part", "structuring an argument", "structurer un argument"], ["Le véritable danger se situe ailleurs", "moving the debate", "déplacer le débat"], ["En définitive", "conclusion", "la conclusion"]] };

  W.COURSE.push({ id: "c2-1", level: "C2", icon: "spell-check", title: "Words and their traps", title_fr: "Les mots et leurs pièges",
    intro: "In this first C2 unit, you'll work on what separates mastery from fluency: precision. Paronyms (conjoncture or conjecture?), calques from English (faire du sens, adresser un problème), and the oral report of the DALF C2.",
    intro_fr: "Dans cette première unité du C2, tu vas travailler ce qui distingue la maîtrise de l'aisance : la précision. Les paronymes (conjoncture ou conjecture ?), les calques de l'anglais (faire du sens, adresser un problème) et le compte rendu oral du DALF C2.",
    can: ["Tell apart words that look alike", "Avoid the calques and false friends that betray English speakers", "Discuss language, translation and its history", "Report an audio document faithfully, then give your own view", "Write a feature article on a question of language"],
    can_fr: ["Distinguer les mots qui se ressemblent", "Éviter les calques et les faux amis qui trahissent les anglophones", "Débattre de la langue, de la traduction et de leur histoire", "Rendre compte fidèlement d'un document sonore, puis donner ton point de vue", "Rédiger un article de fond sur une question de langue"],
    lessons: [135, 136, 137], vocab: ["paronymesFR", "fauxamisFR"], reading: "fauxamis", prompt: "fr-c2-1",
    writing: { task: "A blog about languages asks you for a feature article (350-400 words): False friends, traps or bridges? Take a clear, nuanced position. (In the DALF C2, the written text must be at least 700 words; we'll get there step by step.)", task_fr: "Un blog consacré aux langues te demande un article de fond (350 à 400 mots) : Les faux amis, pièges ou passerelles ? Prends une position claire et nuancée. (Au DALF C2, le texte écrit doit compter au moins 700 mots : on s'en approche pas à pas.)", words: "350-400",
      tips: ["Quiconque…", "Il convient d'abord de rappeler…", "Il serait pourtant réducteur de…", "Le véritable danger se situe ailleurs…", "En définitive, …"],
      checklist: ["My opening is concrete and asks a question", "I explained the origin of the phenomenon", "I put arguments on both sides", "I moved the debate to a deeper point", "My vocabulary is precise, with no calques", "I wrote between 350 and 400 words"],
      model: "Les faux amis, pièges ou passerelles ?\n\nQuiconque apprend une langue voisine de la sienne connaît ce moment d'euphorie : des centaines de mots semblent déjà acquis. Puis vient la première méprise. L'anglophone qui affirme avec assurance qu'il travaille actuellement sur un projet terminé depuis longtemps découvre, un peu tard, qu'il a parlé de son présent et non de la réalité des faits. La scène prête à sourire ; elle n'en révèle pas moins une difficulté réelle. Les faux amis seraient-ils donc des traîtres qu'il faudrait fuir ?\n\nIl convient d'abord de rappeler leur origine. Après 1066, le français a nourri l'anglais pendant des siècles, si bien qu'une part considérable du vocabulaire anglais vient de notre langue. Mais les mots, une fois installés de l'autre côté de la Manche, ont vécu leur propre vie. Le sens s'est déplacé, parfois de manière imperceptible, parfois radicalement : une librairie n'a jamais prêté de livres, et un avertissement n'a rien d'une publicité.\n\nIl serait pourtant réducteur de ne voir dans ces ressemblances qu'une source d'erreurs. D'une part, les vrais amis sont infiniment plus nombreux que les faux : ils offrent à l'apprenant un vocabulaire passif immense, qui lui permet de lire très tôt des textes authentiques. Un anglophone peut ainsi aborder un article de presse dès les premiers mois, ce qui serait impensable dans une langue sans parenté avec la sienne. D'autre part, les faux amis eux-mêmes ont une vertu pédagogique. Parce qu'ils surprennent, ils se retiennent : on n'oublie pas le jour où l'on a confondu éventuellement et finalement.\n\nLe véritable danger se situe ailleurs, dans les calques. Contrairement aux faux amis, qu'un dictionnaire suffit à démasquer, les calques passent inaperçus : chaque mot est français, seule la construction est étrangère. Dire qu'une idée fait du sens ne choque pas l'oreille de l'apprenant ; c'est précisément ce qui rend l'erreur si tenace. Seule une lecture attentive, ou l'œil d'un correcteur, permet de les repérer.\n\nEn définitive, les faux amis sont moins des pièges que des passerelles à emprunter avec prudence. Ils rappellent qu'entre deux langues, la ressemblance n'est jamais l'identité. Apprendre à s'en méfier sans s'en priver, c'est peut-être cela, atteindre la maîtrise d'une langue : savoir que l'on pourrait se tromper, et prendre le temps de vérifier." } });
})();
