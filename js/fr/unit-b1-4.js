/* Cours de français, unité B1-4 « Media and news / Les médias » : la voix passive (et quand le français préfère
   on ou un verbe pronominal), le discours rapporté au présent (dire que, demander si, ce que, de + infinitif),
   parler de l'actualité et vérifier une information. Personnages, ville et événements fictifs. Faits vérifiables
   seulement : le JT de 20 heures (TF1 et France 2) ; Ouest-France est le quotidien français le plus diffusé ;
   « infox » est le terme recommandé en France depuis 2018 pour « fake news ». Conseils généraux de vérification. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "mediasFR", icon: "newspaper", title: "The media", title_fr: "Les médias", level: "B1", words: [
    ["l'actualité", "the news, current affairs", "Je suis l'actualité sur mon téléphone."],
    ["les infos", "the news (informal)", "Tu as écouté les infos ce matin ?"],
    ["le journal télévisé", "the TV news", "Ils regardent le journal télévisé à 20 heures."],
    ["l'article", "the article", "J'ai lu un article passionnant sur les abeilles."],
    ["le titre", "the headline, the title", "Le titre est un peu exagéré."],
    ["la une", "the front page", "L'incendie fait la une de tous les journaux."],
    ["le journaliste / la journaliste", "the journalist (m) / the journalist (f)", "La journaliste a interrogé les habitants."],
    ["la chaîne", "the (TV) channel", "Sur quelle chaîne passe le match ?"],
    ["le reportage", "the report, the documentary", "J'ai vu un reportage sur l'Antarctique."],
    ["en direct", "live", "Le concert est diffusé en direct."],
    ["la presse", "the press", "La presse régionale est très lue en France."],
    ["les réseaux sociaux", "social media", "Elle passe trop de temps sur les réseaux sociaux."],
    ["partager", "to share", "Ne partage pas cette vidéo avant de vérifier !"],
    ["s'informer", "to keep informed, to find out", "Je m'informe surtout à la radio."],
    ["l'infox", "fake news", "Cette photo est une infox : elle date de 2015."],
    ["la source", "the source", "Il faut toujours vérifier la source."],
    ["diffuser", "to broadcast", "L'émission est diffusée le dimanche soir."],
    ["l'auditeur / l'auditrice", "the listener (m) / the listener (f)", "Les auditeurs peuvent appeler la radio."]
  ] },
  { id: "evenementsFR", icon: "megaphone", title: "News and society", title_fr: "L'actualité et la société", level: "B1", words: [
    ["l'événement", "the event", "C'est l'événement de l'année !"],
    ["la manifestation", "the demonstration, the protest", "Il y a une manifestation devant la mairie."],
    ["la grève", "the strike", "Les chauffeurs de bus sont en grève."],
    ["l'élection", "the election", "Les élections ont lieu en juin."],
    ["voter", "to vote", "Tu as voté dimanche ?"],
    ["le gouvernement", "the government", "Le gouvernement a annoncé une nouvelle loi."],
    ["la loi", "the law", "La loi a été votée hier soir."],
    ["le citoyen / la citoyenne", "the citizen (m) / the citizen (f)", "Chaque citoyen peut donner son avis."],
    ["l'enquête", "the investigation; the survey", "La police a ouvert une enquête."],
    ["le témoin", "the witness", "Un témoin a tout vu."],
    ["l'incendie", "the fire (a big one)", "L'incendie a été éteint dans la nuit."],
    ["blessé / blessée", "injured (m) / injured (f)", "Heureusement, personne n'a été blessé."],
    ["les secours", "the emergency services", "Les secours sont arrivés en dix minutes."],
    ["le sondage", "the opinion poll", "Selon un sondage, les habitants sont pour le projet."],
    ["la hausse", "the rise, the increase", "Les prix sont en hausse."],
    ["la baisse", "the fall, the drop", "Le chômage est en baisse."],
    ["augmenter", "to increase, to go up", "Le loyer va augmenter en janvier."],
    ["diminuer", "to decrease, to go down", "Le nombre d'accidents a diminué."]
  ] });

  W.LESSONS.push(
  {
    id: 54, level: "B1", icon: "newspaper",
    title: "La loi a été votée: the passive", title_fr: "La loi a été votée : la voix passive",
    subtitle: "Être + past participle, par or de, and why French often prefers on.", subtitle_fr: "Être + participe passé, par ou de, et pourquoi le français préfère souvent on.",
    body: `
<h2>Forming it</h2>
<p><s-fr>être</s-fr>, in any tense, + the past participle, which agrees with the subject like an adjective:</p>
<table>
<tr><th>Tense</th><th>Example</th></tr>
<tr><td>present</td><td><s-fr>Le musée est visité par des milliers de personnes.</s-fr></td></tr>
<tr><td>passé composé</td><td><s-fr>La loi a été votée hier soir.</s-fr></td></tr>
<tr><td>future</td><td><s-fr>Les résultats seront publiés demain.</s-fr></td></tr>
<tr><td>plus-que-parfait</td><td><s-fr>Le voleur avait déjà été arrêté.</s-fr></td></tr>
</table>
<h2>Par or de?</h2>
<p>The person or thing doing the action is introduced by <s-fr>par</s-fr>: <s-fr>Le film a été réalisé par une jeune Française.</s-fr> With verbs of feeling or description, French uses <s-fr>de</s-fr>: <s-fr>Elle est aimée de tous.</s-fr> · <s-fr>La table est couverte de livres.</s-fr></p>
<h2>When French avoids it</h2>
<p>French uses the passive much less than English. In everyday speech, it usually prefers <s-fr>on</s-fr>: <s-fr>On a volé mon vélo.</s-fr> (My bike was stolen.) · <s-fr>Ici, on parle français.</s-fr> (French is spoken here.) Or a pronominal verb: <s-fr>Ce plat se mange froid.</s-fr> (This dish is eaten cold.) · <s-fr>Ce livre se vend très bien.</s-fr></p>
<div class="tip">Only a direct object can become the subject of a passive. "I was given a book" can't be translated word for word: say <s-fr>On m'a donné un livre.</s-fr> In headlines, être often disappears: <s-fr>Un chien perdu retrouvé après dix jours.</s-fr></div>
`,
    examples: [
      ["La loi a été votée hier soir.", "The law was passed last night."],
      ["Les résultats seront publiés demain.", "The results will be published tomorrow."],
      ["Ce roman a été écrit par une autrice belge.", "This novel was written by a Belgian author."],
      ["Le voleur avait déjà été arrêté.", "The thief had already been arrested."],
      ["Elle est respectée de tous ses collègues.", "She is respected by all her colleagues."],
      ["On a volé mon vélo devant la gare.", "My bike was stolen outside the station."],
      ["Ce vin se boit frais.", "This wine is drunk chilled."],
      ["On m'a offert un livre.", "I was given a book."]
    ],
    quiz: [
      { q: "“My car was stolen” is:", o: ["Ma voiture a été volé.", "Ma voiture a été volée.", "Ma voiture est volé."], a: 1, ex: "The participle agrees with the subject: la voiture → volée." },
      { q: "“The results will be published tomorrow”:", o: ["Les résultats seront publiés demain.", "Les résultats vont publiés demain.", "Les résultats seront publié demain."], a: 0, ex: "être in the future + participle agreeing with résultats." },
      { q: "“She is loved by everyone” is:", o: ["Elle est aimée par de tous.", "Elle est aimée de tous.", "Elle a été aimé de tous."], a: 1, ex: "Feelings: de." },
      { q: "“I was given a present” is:", o: ["J'ai été donné un cadeau.", "On m'a donné un cadeau.", "Je suis donné un cadeau."], a: 1, ex: "An indirect object can't become the subject: use on." },
      { q: "“French is spoken here” (everyday French) is:", o: ["Ici, le français est parlé.", "Ici, on parle français.", "Ici, parle français."], a: 1, ex: "French prefers on." }
    ]
  },
  {
    id: 55, level: "B1", icon: "quote",
    title: "Il dit que…: reporting what people say", title_fr: "Il dit que… : le discours rapporté",
    subtitle: "Statements, questions and orders, reported in the present.", subtitle_fr: "Rapporter des affirmations, des questions et des ordres, au présent.",
    body: `
<h2>Statements: dire que</h2>
<p>Add <s-fr>que</s-fr> and change the pronouns and possessives: <s-fr>J'aime mon travail.</s-fr> → <s-fr>Elle dit qu'elle aime son travail.</s-fr></p>
<h2>Questions</h2>
<table>
<tr><th>Direct</th><th>Reported</th></tr>
<tr><td><s-fr>Tu viens ?</s-fr></td><td><s-fr>Il demande si je viens.</s-fr></td></tr>
<tr><td><s-fr>Où est-ce que tu habites ?</s-fr></td><td><s-fr>Il demande où j'habite.</s-fr></td></tr>
<tr><td><s-fr>Qu'est-ce que tu fais ?</s-fr></td><td><s-fr>Il demande ce que je fais.</s-fr></td></tr>
<tr><td><s-fr>Qu'est-ce qui se passe ?</s-fr></td><td><s-fr>Il demande ce qui se passe.</s-fr></td></tr>
</table>
<p>A yes / no question becomes <s-fr>si</s-fr> (<s-fr>s'il</s-fr> before il). Question words stay, but no <s-fr>est-ce que</s-fr> and no inversion: <s-fr>Il demande quand tu pars.</s-fr></p>
<h2>Orders: de + infinitive</h2>
<p><s-fr>Ferme la porte !</s-fr> → <s-fr>Il me dit de fermer la porte.</s-fr> · <s-fr>Ne parle pas !</s-fr> → <s-fr>Il me demande de ne pas parler.</s-fr></p>
<h2>Useful reporting verbs</h2>
<p><s-fr>dire, demander, répondre, expliquer, annoncer, ajouter, préciser</s-fr> (to specify), <s-fr>vouloir savoir</s-fr> (to want to know), <s-fr>se demander</s-fr> (to wonder).</p>
<div class="tip">Here the reporting verb is in the present (<s-fr>il dit que</s-fr>), so the tenses don't change. When it's in the past (<s-fr>il a dit que</s-fr>), the tenses shift: <s-fr>il a dit qu'il était fatigué</s-fr>. You'll work on that at B2.</div>
`,
    examples: [
      ["Elle dit qu'elle aime son nouveau travail.", "She says she loves her new job."],
      ["Il demande si tu viens ce soir.", "He's asking if you're coming tonight."],
      ["Mes parents veulent savoir quand je rentre.", "My parents want to know when I'm coming home."],
      ["Le journaliste demande ce que pensent les habitants.", "The journalist asks what the residents think."],
      ["Je me demande ce qui se passe.", "I wonder what's going on."],
      ["Le médecin me dit de rester au lit.", "The doctor tells me to stay in bed."],
      ["Elle me demande de ne pas oublier le pain.", "She's asking me not to forget the bread."],
      ["Le maire explique que les travaux vont durer six mois.", "The mayor explains that the work will last six months."]
    ],
    quiz: [
      { q: "“Tu es libre ?” → Il me demande…", o: ["… est-ce que je suis libre.", "… si je suis libre.", "… que je suis libre."], a: 1, ex: "A yes / no question becomes si." },
      { q: "“Qu'est-ce que tu veux ?” → Elle demande…", o: ["… qu'est-ce que je veux.", "… ce que je veux.", "… quoi je veux."], a: 1, ex: "qu'est-ce que → ce que." },
      { q: "“Range ta chambre !” → Ma mère me dit…", o: ["… que je range ma chambre.", "… de ranger ma chambre.", "… ranger ma chambre."], a: 1, ex: "An order: de + infinitive." },
      { q: "“Où habitez-vous ?” → Il demande…", o: ["… où j'habite.", "… où est-ce que j'habite.", "… où habite-je."], a: 0, ex: "No inversion and no est-ce que." },
      { q: "“I wonder what's happening” is:", o: ["Je me demande ce qui se passe.", "Je me demande qu'est-ce qui se passe.", "Je demande ce qui se passe à moi."], a: 0, ex: "se demander + ce qui." }
    ]
  },
  {
    id: 56, level: "B1", kind: "functional", icon: "tv",
    title: "Everyday French: talking about the news", title_fr: "Le français de tous les jours : parler de l'actualité",
    subtitle: "Share a piece of news, say where it comes from, doubt it, and give a quick opinion.", subtitle_fr: "Partager une nouvelle, dire d'où elle vient, avoir des doutes, et donner vite ton avis.",
    body: `
<h2>Sharing news</h2>
<p><s-fr>Tu as vu ?</s-fr> · <s-fr>J'ai lu dans le journal que…</s-fr> · <s-fr>Il paraît que…</s-fr> (Apparently…) · <s-fr>D'après la radio,</s-fr> / <s-fr>Selon le journal,</s-fr> … (According to…) · <s-fr>Ils ont annoncé que…</s-fr></p>
<p>Journalists often use the conditional for news that isn't confirmed: <s-fr>Selon le maire, les travaux commenceraient en mars.</s-fr> (The work would start, it seems, in March.)</p>
<h2>Doubting and checking</h2>
<p><s-fr>C'est vrai ?</s-fr> · <s-fr>Ça m'étonnerait !</s-fr> (I doubt it, literally: that would surprise me) · <s-fr>Ça vient d'où, cette info ?</s-fr> · <s-fr>C'est peut-être une infox.</s-fr></p>
<h2>A quick opinion</h2>
<p><s-fr>À mon avis,</s-fr> … · <s-fr>Pour moi,</s-fr> … · <s-fr>Je trouve que…</s-fr> · <s-fr>Ça dépend.</s-fr> · <s-fr>Je ne suis pas d'accord.</s-fr> Careful: <s-fr>d'après moi</s-fr> already means "I think", so don't add <s-fr>je pense que</s-fr>.</p>
<h2>The media in France</h2>
<p>The main TV news is <s-fr>le JT de 20 heures</s-fr> (on TF1 and France 2). The regional press is strong: <s-fr>Ouest-France</s-fr>, a regional daily, is the French newspaper with the largest circulation.</p>
<div class="tip"><s-fr>une infox</s-fr> (from <s-fr>information</s-fr> + <s-fr>intoxication</s-fr>) is the word officially recommended in France since 2018 for "fake news". In conversation, many people still say <s-fr>une fake news</s-fr>.</div>
`,
    examples: [
      ["Tu as vu les infos ce matin ?", "Did you see the news this morning?"],
      ["J'ai lu dans le journal que la piscine va fermer.", "I read in the paper that the pool is going to close."],
      ["Il paraît qu'il va neiger ce week-end.", "Apparently it's going to snow this weekend."],
      ["Selon la radio, la grève continuerait demain.", "According to the radio, the strike may continue tomorrow."],
      ["Ça m'étonnerait !", "I doubt it!"],
      ["Ça vient d'où, cette info ?", "Where's that information from?"],
      ["À mon avis, c'est une bonne nouvelle.", "In my opinion, it's good news."]
    ],
    quiz: [
      { q: "“Apparently…” is:", o: ["Il paraît que…", "Il semble de…", "Apparemment de…"], a: 0, ex: "Il paraît que = apparently, I've heard that." },
      { q: "“Ça m'étonnerait” means:", o: ["That surprises me.", "I doubt it.", "That would be amazing."], a: 1, ex: "Literally: that would surprise me, so: I doubt it." },
      { q: "“Selon le maire, les travaux commenceraient en mars” suggests that:", o: ["it's certain", "it's not confirmed", "it happened in March"], a: 1, ex: "The conditional in the news: not confirmed." },
      { q: "Choose the correct sentence:", o: ["D'après moi, je pense que c'est faux.", "D'après moi, c'est faux.", "Selon moi je pense que c'est faux."], a: 1, ex: "d'après moi already means I think." },
      { q: "“Une infox” is:", o: ["a news flash", "fake news", "an information desk"], a: 1, ex: "infox = fake news, the officially recommended word." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    54: {
      gap: [["La loi a ___ votée hier. (être, participle)", "été"], ["Les résultats seront ___ demain. (publier)", "publiés"], ["Le film a été réalisé ___ une jeune Française. (by)", "par"], ["La table est couverte ___ livres. (with)", "de"]],
      fix: [["Ma voiture a été volé.", "Ma voiture a été volée.", "In the passive, the participle agrees with the subject: la voiture → volée."], ["J'ai été donné un cadeau.", "On m'a donné un cadeau.", "An indirect object can't become the subject: use on."]],
      task: ["Write four news headlines as full sentences in the passive: a film, a law, a match, a bridge.", "Écris quatre titres d'actualité en phrases complètes au passif : un film, une loi, un match, un pont.", "Le nouveau film de la réalisatrice a été récompensé dans un grand festival. Une nouvelle loi sur le vélo a été votée hier. Le match de samedi a été annulé à cause de la neige. Le vieux pont de la ville sera rénové l'année prochaine."]
    },
    55: {
      gap: [["Elle me demande ___ je viens ce soir. (if)", "si"], ["Il veut savoir ___ j'habite. (where)", "où"], ["Elle me demande ___ je fais ce week-end. (what)", "ce que"], ["Le médecin me dit ___ rester au lit. (to)", "de"]],
      fix: [["Il demande qu'est-ce que je veux.", "Il demande ce que je veux.", "In reported questions, qu'est-ce que becomes ce que."], ["Elle me demande est-ce que je suis libre.", "Elle me demande si je suis libre.", "A yes / no question becomes si."]],
      task: ["A French friend phones you. Report what they say to someone else: Je suis à la gare. Tu peux venir me chercher ? Qu'est-ce que tu fais ce soir ? Prends un parapluie !", "Un ami français t'appelle. Rapporte ses paroles à quelqu'un d'autre : Je suis à la gare. Tu peux venir me chercher ? Qu'est-ce que tu fais ce soir ? Prends un parapluie !", "Il dit qu'il est à la gare. Il me demande si je peux venir le chercher. Il veut savoir ce que je fais ce soir. Et il me dit de prendre un parapluie !"]
    },
    56: {
      gap: [["Il ___ qu'ils vont fermer la piscine. (apparently)", "paraît"], ["___ le journal, il va neiger demain. (according to)", "Selon"], ["Ça m'___ ! (I doubt it)", "étonnerait"], ["Ça vient d'___, cette info ? (where)", "où"]],
      fix: [["J'ai lu dans le journal qui le musée va fermer.", "J'ai lu dans le journal que le musée va fermer.", "After lire, dire or entendre: que, not qui."], ["D'après moi, je pense que c'est une infox.", "D'après moi, c'est une infox.|Je pense que c'est une infox.", "d'après moi already means I think: don't say both."]],
      task: ["Tell a friend about a piece of news (real or invented): where you read or heard it, what happened, and what you think.", "Raconte à un ami une nouvelle (vraie ou inventée) : où tu l'as lue ou entendue, ce qui s'est passé, et ce que tu en penses.", "Tu as vu ? J'ai lu sur le site du journal local que la mairie va fermer la rue principale aux voitures le week-end. Il paraît que les commerçants ne sont pas contents. À mon avis, c'est une bonne idée : on pourra se promener tranquillement. Mais il faudrait plus de bus !"]
    }
  });

  W.ROLEPLAYS.push(
  { id: "actualite", lesson: 56, level: "B1", icon: "newspaper", partner: "Laurent", role: "a colleague",
    title: "A car park becomes a park", title_fr: "Un parking devient un parc",
    setting: "At the coffee machine, your colleague Laurent tells you a piece of local news. You react, ask where it comes from and give your opinion.", setting_fr: "À la machine à café, ton collègue Laurent te raconte une nouvelle locale. Tu réagis, tu demandes d'où elle vient et tu donnes ton avis.",
    turns: [
      { p: "Tu as vu la nouvelle ? Il paraît que la mairie va transformer le grand parking en parc !", fr: "Have you seen the news? Apparently the town hall is going to turn the big car park into a park!" },
      { y: ["Non ! Ça vient d'où, cette info ?", "Non ! Ça vient où, cette info ?", "Non ! Ça vient d'où, ce info ?"], fr: "No! Where's that from?", why: "venir de: ça vient d'où ? And une info → cette info." },
      { p: "C'est dans le journal de ce matin. Selon le maire, les travaux commenceraient l'année prochaine.", fr: "It's in this morning's paper. According to the mayor, the work should start next year." },
      { y: ["Ça m'étonnerait ! Ils disent ça depuis des années.", "Ça m'étonnera ! Ils disent ça depuis des années.", "Ça me étonnerait ! Ils disent ça depuis des années."], fr: "I doubt it! They've been saying that for years.", why: "Ça m'étonnerait = I doubt it (the conditional)." },
      { p: "Cette fois, c'est sérieux : le projet a été voté hier soir par le conseil municipal.", fr: "This time it's serious: the plan was voted through last night by the town council." },
      { y: ["Ah bon ? Alors, à mon avis, c'est une très bonne nouvelle.", "Ah bon ? Alors, à mon avis, c'est un très bon nouvelle.", "Ah bon ? Alors, à mon avis, c'est une très bonne nouveau."], fr: "Really? Well, in my opinion, that's very good news.", why: "une nouvelle (a piece of news): une bonne nouvelle." },
      { p: "Tu trouves ? Moi, je me demande où on va se garer. Le journaliste dit qu'un nouveau parking serait construit sous la gare.", fr: "You think so? I wonder where we'll park. The journalist says a new car park would be built under the station." },
      { y: ["Il dit quand ce parking serait prêt ?", "Il dit quand est-ce que ce parking serait prêt ?", "Il dit quand ce parking serait prête ?"], fr: "Does he say when that car park would be ready?", why: "An indirect question: no est-ce que after the question word." },
      { p: "Non, il ne le dit pas. Mais il explique que les habitants peuvent donner leur avis sur le site de la mairie.", fr: "No, he doesn't say. But he explains that residents can give their opinion on the town hall website." },
      { y: ["Alors on devrait répondre ! Moi, je vais dire que je suis pour le parc.", "Alors on devrait répondre ! Moi, je vais dire si je suis pour le parc.", "Alors on devrait répondre ! Moi, je vais dire que je suis pour la parc."], fr: "Then we should answer! I'm going to say I'm in favour of the park.", why: "dire que for a statement; si only reports a yes / no question." }
    ] }
  );

  W.READINGS.push({
    id: "reperer", level: "B1", icon: "search", title: "Comment repérer une infox ?", genre: "Advice article",
    intro: "An article with four simple ways to check information before you share it. The passive, reported speech and media words.",
    intro_fr: "Un article avec quatre façons simples de vérifier une information avant de la partager. Le passif, le discours rapporté et le vocabulaire des médias.",
    paragraphs: [
      { en: "Chaque jour, des milliers d'informations sont partagées sur les réseaux sociaux. Certaines sont vraies, d'autres sont fausses : on les appelle des infox. Elles circulent souvent très vite, parce qu'elles nous surprennent ou nous mettent en colère. Alors, comment ne pas se faire piéger ? Voici quatre conseils simples.", fr: "Every day, thousands of pieces of information are shared on social media. Some are true, others are false: they're called fake news. They often spread very fast, because they surprise us or make us angry. So how can you avoid being fooled? Here are four simple tips." },
      { en: "D'abord, regardez la source. Qui a écrit l'article ? A-t-il été publié par un média connu, ou par un site que vous ne connaissez pas ? Méfiez-vous des sites qui imitent le nom d'un vrai journal.", fr: "First, look at the source. Who wrote the article? Was it published by a well-known media outlet, or by a site you don't know? Be wary of sites that copy the name of a real newspaper." },
      { en: "Ensuite, lisez plus que le titre. Un titre est écrit pour attirer l'attention : parfois, l'article dit autre chose. Vérifiez aussi la date, car une vieille information peut être partagée comme si elle était nouvelle.", fr: "Next, read more than the headline. A headline is written to grab attention: sometimes the article says something else. Check the date too, because an old story can be shared as if it were new." },
      { en: "Troisième conseil : cherchez si l'information est reprise par d'autres médias. Quand un événement important s'est vraiment passé, plusieurs journaux en parlent. Pour les photos, une recherche d'image inversée permet de savoir si la photo a déjà été publiée ailleurs, parfois des années plus tôt.", fr: "Third tip: check whether other media are reporting the story. When something important has really happened, several newspapers talk about it. For photos, a reverse image search shows whether the photo has already been published elsewhere, sometimes years earlier." },
      { en: "Enfin, faites attention à vos émotions. Si un message vous demande de le partager tout de suite, prenez le temps de réfléchir. Une information vraie sera encore vraie dans dix minutes !", fr: "Finally, watch your emotions. If a message asks you to share it straight away, take time to think. True information will still be true in ten minutes!" }
    ],
    glossary: { "milliers": "thousands", "partagées": "shared", "fausses": "false", "infox": "fake news", "circulent": "spread, go around", "surprennent": "surprise", "piéger": "to trick, to fool", "média": "media outlet", "méfiez": "be wary (se méfier)", "imitent": "imitate, copy", "attirer": "to attract, to grab", "reprise": "reported, picked up", "inversée": "reverse", "ailleurs": "elsewhere", "réfléchir": "to think" },
    questions: [
      { q: "Pourquoi les infox circulent-elles vite ?", o: ["Elles sont toujours vraies.", "Elles nous surprennent ou nous mettent en colère.", "Elles sont publiées par les grands journaux."], a: 1 },
      { q: "Que faut-il regarder d'abord ?", o: ["Le nombre de partages", "La source", "La couleur du site"], a: 1 },
      { q: "Pourquoi faut-il lire plus que le titre ?", o: ["Le titre est trop long.", "Le titre est toujours faux.", "L'article dit parfois autre chose."], a: 2 },
      { q: "À quoi sert une recherche d'image inversée ?", o: ["À savoir si une photo a déjà été publiée ailleurs", "À rendre une photo plus belle", "À trouver l'auteur d'un article"], a: 0 },
      { q: "Que faire si un message demande de le partager tout de suite ?", o: ["Le partager vite", "Le supprimer sans le lire", "Prendre le temps de réfléchir"], a: 2 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-b1-4", unit: "b1-4", level: "B1", icon: "radio",
    title: "Le flash info", title_fr: "Le flash info",
    context: "The six o'clock news bulletin on a local radio station, read by Agnès Petit.", context_fr: "Le flash info de dix-huit heures sur une radio locale, présenté par Agnès Petit.",
    words: [["les usagers", "the passengers, the users"], ["la tempête", "the storm"], ["un randonneur", "a hiker"], ["reporter", "to postpone"], ["valable", "valid"]],
    lines: [["Agnès", "Il est dix-huit heures, voici le flash info de Radio Azur. D'abord, les transports : les chauffeurs de bus de la région seront en grève jeudi. Selon la direction, un bus sur trois seulement circulera. Les usagers sont invités à prévoir d'autres solutions.", "fr-FR"], ["Agnès", "Ensuite, une belle histoire. Biscotte, un petit chien perdu pendant la tempête de samedi, a été retrouvé hier par des randonneurs, à vingt kilomètres de chez lui. Son propriétaire nous a raconté son émotion.", "fr-FR"], ["Michel", "Je n'y croyais plus ! Quand on m'a appelé, j'ai pleuré de joie. Il était fatigué, mais en bonne santé.", "fr-FR"], ["Agnès", "Enfin, la météo. La pluie va continuer jusqu'à dimanche. Du coup, le festival de musique prévu ce week-end au bord du lac a été reporté au mois prochain.", "fr-FR"], ["Agnès", "Les organisateurs nous ont précisé que les billets restent valables, et qu'on peut aussi se faire rembourser sur leur site.", "fr-FR"], ["Agnès", "Prochain flash à dix-neuf heures. Bonne soirée !", "fr-FR"]],
    gist: ["C'est quel type de document ?", ["Un bulletin d'informations à la radio", "Une publicité", "Une conversation entre amis"]],
    detail: [["Qu'est-ce qui se passera jeudi ?", ["Une grève des bus", "Un festival", "Une tempête"]], ["Combien de bus vont circuler ?", ["Un sur trois", "Aucun", "Tous"]], ["Où le chien a-t-il été retrouvé ?", ["À vingt kilomètres de chez lui", "Dans son jardin", "Au bord du lac"]], ["Que s'est-il passé pour le festival ?", ["Il a été reporté au mois prochain.", "Il a été annulé définitivement.", "Il a lieu ce week-end."]]],
    decode: ["un bus sur trois seulement circulera", "a été retrouvé hier par des randonneurs"],
    tip: "News bulletins love the passive (a été retrouvé, a été reporté) and reported speech (selon…, nous ont précisé que…). Listen for who says what: selon, d'après, a déclaré, a précisé.", tip_fr: "Les flashs infos adorent le passif (a été retrouvé, a été reporté) et le discours rapporté (selon…, nous ont précisé que…). Guette qui dit quoi : selon, d'après, a déclaré, a précisé."
  }]);

  W.PROMPTS.push({ id: "fr-b1-4", level: "B1", q: "Comment est-ce que tu t'informes : journal, télé, radio, réseaux sociaux ? Tu fais confiance à ce que tu lis ?", fr: "How do you keep up with the news: newspaper, TV, radio, social media? Do you trust what you read?", time: 150,
    phrases: ["Le matin, j'écoute…", "Je m'informe surtout…", "Je fais confiance à…", "Je me méfie de…", "À mon avis, …"],
    model: "Le matin, j'écoute la radio en prenant mon petit-déjeuner, et le soir, je lis les titres sur l'application d'un grand journal. Je regarde rarement le journal télévisé. Je fais confiance aux journaux sérieux, mais je me méfie des réseaux sociaux : on y trouve beaucoup d'infox. Quand une nouvelle me surprend, je vérifie si elle est reprise par d'autres médias. À mon avis, s'informer, ça prend du temps !" });

  W.WRITING_GUIDE["b1-4"] = { genre: "A short news article (DELF B1)", genre_fr: "Un court article d'actualité (DELF B1)",
    plan: [["Give a title and say what happened, where and when.", "Donne un titre et dis ce qui s'est passé, où et quand."], ["Explain who organised it, with the passive.", "Explique qui l'a organisé, avec le passif."], ["Describe the event: people, atmosphere.", "Décris l'événement : les gens, l'ambiance."], ["Report what two people said (dire que, expliquer que, selon…).", "Rapporte ce que deux personnes ont dit (dire que, expliquer que, selon…)."], ["Finish with practical information.", "Termine par des informations pratiques."]],
    marks: [["a été inauguré", "the passive (passé composé)", "le passif (passé composé)"], ["a été financé en partie par la mairie", "the passive + par", "le passif + par"], ["explique que", "reported speech", "le discours rapporté"], ["des ateliers seront organisés", "the passive in the future", "le passif au futur"], ["Selon lui", "selon to give the source", "selon pour citer la source"], ["Les inscriptions se font", "a pronominal verb instead of the passive", "un verbe pronominal à la place du passif"]] };

  W.COURSE.push({ id: "b1-4", level: "B1", icon: "newspaper", title: "Media and news", title_fr: "Les médias",
    intro: "In this unit, you'll follow and discuss the news: the passive (and when French prefers on), reporting what people say, and the French you need to share a piece of news, check where it comes from and give your opinion.",
    intro_fr: "Dans cette unité, tu vas suivre et commenter l'actualité : la voix passive (et quand le français préfère on), rapporter les paroles de quelqu'un, et le français qu'il faut pour partager une nouvelle, vérifier d'où elle vient et donner ton avis.",
    can: ["Understand and use the passive, and replace it with on", "Report statements, questions and orders", "Share a piece of news and say where it comes from", "Check a piece of information before sharing it", "Write a short news article"],
    can_fr: ["Comprendre et utiliser le passif, et le remplacer par on", "Rapporter des affirmations, des questions et des ordres", "Partager une nouvelle et dire d'où elle vient", "Vérifier une information avant de la partager", "Écrire un court article d'actualité"],
    lessons: [54, 55, 56], vocab: ["mediasFR", "evenementsFR"], reading: "reperer", prompt: "fr-b1-4",
    writing: { task: "You write for your neighbourhood's website. Write a short article (160-180 words) about a local event (a party, an opening, an initiative): what happened, who organised it, and what people said.", task_fr: "Tu écris pour le site de ton quartier. Écris un court article (160 à 180 mots) sur un événement local (une fête, une inauguration, une initiative) : ce qui s'est passé, qui l'a organisé, et ce que les gens ont dit.", words: "160-180",
      tips: ["Samedi dernier, … a été inauguré…", "Le projet a été imaginé par…", "Selon…, …", "… explique que…", "Les inscriptions se font…"],
      checklist: ["I gave a title", "I used the passive at least twice", "I reported what two people said", "I gave practical information at the end", "I wrote between 160 and 180 words"],
      model: "Un jardin partagé pour le quartier des Tilleuls\n\nSamedi dernier, un jardin partagé a été inauguré au coin de la rue Victor-Hugo, à la place d'un ancien parking. Le projet a été imaginé il y a deux ans par un groupe de voisins, et il a été financé en partie par la mairie.\n\nPlus de cent personnes sont venues à l'inauguration. Les enfants de l'école voisine ont planté les premières tomates, pendant que les adultes partageaient un grand pique-nique.\n\nAurélie Martin, l'une des organisatrices, explique que le jardin est ouvert à tout le monde : chaque habitant peut cultiver une petite parcelle, à condition de participer à l'entretien. Elle ajoute que des ateliers seront organisés tous les mercredis pour apprendre à jardiner sans pesticides.\n\nUn voisin de quatre-vingts ans nous a confié qu'il n'avait pas parlé à autant de monde depuis des années. Selon lui, ce jardin est déjà le cœur du quartier.\n\nVous voulez participer ? Les inscriptions se font sur le site de l'association." } });
})();
