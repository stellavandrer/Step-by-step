/* Unité C2 « Language and identity » (c2-7), complète : leçons 151-152 et leurs exercices, texte, atelier d'écoute,
   jeu de rôle, sujet d'oral, guide d'écriture et atelier de langue. Elle regroupe linguisticsC2 et cultureC2 (venus de
   c2-5), britishC2 et americanC2 (venus de c2-4).
   Personnes fictives. Faits vérifiés : thèses de Benjamin Lee Whorf (années 1930-1940) sur le hopi, réfutées ensuite ;
   locuteurs du guugu yimithirr (nord-est de l'Australie) qui utilisent les points cardinaux ; expérience sur les deux
   bleus du russe (goluboy, siniy), effet qui disparaît avec une tâche verbale simultanée ; l'aymara situe le passé
   devant et l'avenir derrière ; l'accent « standard » du sud de l'Angleterre n'a jamais été parlé que par une minorité. */
(function () {
  const W = window;

  W.LESSONS.push(
  {
    id: 151, after: 77, level: "C2", icon: "pen-tool",
    title: "All things considered: absolute constructions", title_fr: "All things considered : les constructions absolues",
    subtitle: "Weather permitting, the work done, with prices rising: compact phrases that give your writing a polished, literary rhythm.", subtitle_fr: "Weather permitting, the work done, with prices rising : des tournures compactes qui donnent à l'écrit un rythme soigné, presque littéraire.",
    body: `
<h2>A clause without a full verb</h2>
<p>An absolute construction is a short phrase with its own subject but no conjugated verb. It adds a circumstance (time, cause, condition) in a compact, elegant way, mostly in writing.</p>
<table>
<tr><th>Form</th><th>Example</th><th>Meaning</th></tr>
<tr><td>noun + -ing</td><td><s-en>Weather permitting, the ceremony will be held outdoors.</s-en></td><td>if the weather permits</td></tr>
<tr><td>noun + past participle</td><td><s-en>The work done, they went home.</s-en></td><td>when the work was done</td></tr>
<tr><td>noun + adjective, adverb or preposition</td><td><s-en>The meeting over, she called her sister.</s-en></td><td>when the meeting was over</td></tr>
<tr><td>with + noun + -ing or participle</td><td><s-en>With prices rising, many families are struggling.</s-en></td><td>because prices are rising</td></tr>
</table>
<h2>Fixed absolute phrases</h2>
<p>Some are so common that they have become fixed expressions: <s-en>all things considered</s-en> · <s-en>other things being equal</s-en> · <s-en>generally speaking</s-en> · <s-en>strictly speaking</s-en> · <s-en>that said</s-en> · <s-en>time permitting</s-en>.</p>
<div class="tip">Be careful: the phrase must have its own subject, or share the subject of the main clause. <s-en>Walking home, the rain started</s-en> is a famous mistake (a "dangling participle": the rain wasn't walking). Write <s-en>Walking home, I got caught in the rain</s-en>, or <s-en>As I was walking home, it started to rain</s-en>.</div>
`,
    body_fr: `
<h2>Une proposition sans verbe conjugué</h2>
<p>Une construction absolue est une courte tournure qui a son propre sujet mais pas de verbe conjugué. Elle ajoute une circonstance (temps, cause, condition) de façon compacte et élégante, surtout à l'écrit.</p>
<table>
<tr><th>Forme</th><th>Exemple</th><th>Sens</th></tr>
<tr><td>nom + -ing</td><td><s-en>Weather permitting, the ceremony will be held outdoors.</s-en></td><td>si le temps le permet</td></tr>
<tr><td>nom + participe passé</td><td><s-en>The work done, they went home.</s-en></td><td>le travail terminé</td></tr>
<tr><td>nom + adjectif, adverbe ou préposition</td><td><s-en>The meeting over, she called her sister.</s-en></td><td>la réunion terminée</td></tr>
<tr><td>with + nom + -ing ou participe</td><td><s-en>With prices rising, many families are struggling.</s-en></td><td>avec la hausse des prix</td></tr>
</table>
<h2>Les locutions absolues figées</h2>
<p>Certaines sont si courantes qu'elles sont devenues des expressions figées : <s-en>all things considered</s-en> (tout bien considéré) · <s-en>other things being equal</s-en> (toutes choses égales par ailleurs) · <s-en>generally speaking</s-en> (en règle générale) · <s-en>strictly speaking</s-en> (à proprement parler) · <s-en>that said</s-en> (cela dit) · <s-en>time permitting</s-en> (si le temps le permet).</p>
<div class="tip">Attention : la tournure doit avoir son propre sujet, ou partager celui de la proposition principale. <s-en>Walking home, the rain started</s-en> est une erreur célèbre (le « participe en l'air » : ce n'est pas la pluie qui rentrait à pied). Écris <s-en>Walking home, I got caught in the rain</s-en>, ou <s-en>As I was walking home, it started to rain</s-en>.</div>
`,
    examples: [
      ["Weather permitting, the ceremony will be held outdoors.", "Si le temps le permet, la cérémonie aura lieu en plein air."],
      ["The work done, they went home.", "Le travail terminé, ils sont rentrés chez eux."],
      ["The meeting over, she called her sister.", "La réunion terminée, elle a appelé sa sœur."],
      ["With prices rising, many families are struggling.", "Avec la hausse des prix, beaucoup de familles ont du mal."],
      ["All things considered, the trip was a success.", "Tout bien considéré, le voyage a été une réussite."],
      ["Strictly speaking, a tomato is a fruit.", "À proprement parler, la tomate est un fruit."],
      ["That said, the decision is still controversial.", "Cela dit, la décision reste controversée."]
    ],
    quiz: [
      { q: "___ permitting, we'll have lunch in the garden.", q_fr: "Complète : « ___ permitting, we'll have lunch in the garden. »", o: ["Weather", "The weather is", "If weather"], a: 0, ex: "Weather permitting: noun + -ing, no verb.", ex_fr: "Weather permitting : nom + -ing, sans verbe conjugué." },
      { q: "The speeches ___, the dancing began.", q_fr: "Complète : « The speeches ___, the dancing began. »", o: ["finishing", "finished", "finish"], a: 1, ex: "noun + past participle = when the speeches were finished.", ex_fr: "nom + participe passé = une fois les discours terminés." },
      { q: "___ prices rising, people are spending less.", q_fr: "Complète : « ___ prices rising, people are spending less. »", o: ["Because", "By", "With"], a: 2, ex: "with + noun + -ing gives a cause.", ex_fr: "with + nom + -ing exprime une cause." },
      { q: "Which sentence contains a dangling participle?", q_fr: "Quelle phrase contient un participe « en l'air » ?", o: ["Walking home, I got caught in the rain.", "Walking home, the rain started.", "As I was walking home, it started to rain."], a: 1, ex: "The rain wasn't walking home.", ex_fr: "Ce n'est pas la pluie qui rentrait à pied." },
      { q: "“All things considered” means:", q_fr: "« All things considered » veut dire :", o: ["after thinking about everything", "considering only the facts", "nothing was considered"], a: 0, ex: "All things considered = tout bien considéré.", ex_fr: "All things considered = tout bien considéré." }
    ]
  },
  {
    id: 152, after: 77, level: "C2", kind: "functional", icon: "globe",
    title: "Everyday English: adapting your English to your listener", title_fr: "Anglais pratique : adapter ton anglais à ton interlocuteur",
    subtitle: "Most English conversations today are between non-native speakers: learn to be understood by everyone, and to understand accents you've never heard.", subtitle_fr: "La plupart des conversations en anglais se font aujourd'hui entre non-natifs : apprends à te faire comprendre de tous, et à comprendre des accents que tu n'as jamais entendus.",
    body: `
<h2>English as a global language</h2>
<p>Most conversations in English today take place between people for whom it is not a first language. In these situations, the most successful speakers are not those who know the most idioms, but those who make themselves easy to understand.</p>
<h2>Making yourself easy to understand</h2>
<table>
<tr><th>Instead of…</th><th>Try…</th></tr>
<tr><td><s-en>Let's touch base and circle back to it.</s-en></td><td><s-en>Let's talk again next week and come back to this point.</s-en></td></tr>
<tr><td><s-en>It's a piece of cake.</s-en></td><td><s-en>It's very easy.</s-en></td></tr>
<tr><td>Long sentences with several clauses</td><td>One idea per sentence, with clear linking words</td></tr>
</table>
<p>Slow down slightly, pronounce the ends of words clearly, and avoid local jokes, sports metaphors and cultural references that only work in one country.</p>
<h2>Checking understanding without sounding patronising</h2>
<p><s-en>Let me put that another way.</s-en> · <s-en>In other words,…</s-en> · <s-en>Does that work for you?</s-en> · <s-en>Just to make sure we agree: …</s-en></p>
<h2>When you don't understand someone's accent</h2>
<p><s-en>Sorry, could you say that again a little more slowly?</s-en> · <s-en>Did you say fifteen or fifty?</s-en> · <s-en>Could you spell that for me?</s-en> · <s-en>I want to make sure I've got this right: …</s-en></p>
<div class="tip">This is a skill that native speakers often lack: in international teams, they can be the hardest people to understand. At C2, knowing when not to use an idiom matters as much as knowing the idiom.</div>
`,
    body_fr: `
<h2>L'anglais, langue mondiale</h2>
<p>La plupart des conversations en anglais se déroulent aujourd'hui entre des personnes dont ce n'est pas la langue maternelle. Dans ces situations, les meilleurs communicants ne sont pas ceux qui connaissent le plus d'expressions, mais ceux qui se rendent faciles à comprendre.</p>
<h2>Se rendre facile à comprendre</h2>
<table>
<tr><th>Au lieu de…</th><th>Essaie…</th></tr>
<tr><td><s-en>Let's touch base and circle back to it.</s-en> (jargon de bureau)</td><td><s-en>Let's talk again next week and come back to this point.</s-en></td></tr>
<tr><td><s-en>It's a piece of cake.</s-en> (expression idiomatique)</td><td><s-en>It's very easy.</s-en></td></tr>
<tr><td>De longues phrases à plusieurs propositions</td><td>Une idée par phrase, avec des mots de liaison clairs</td></tr>
</table>
<p>Ralentis un peu, prononce bien la fin des mots, et évite les blagues locales, les métaphores sportives et les références culturelles qui ne fonctionnent que dans un pays.</p>
<h2>Vérifier que l'autre a compris sans paraître condescendante</h2>
<p><s-en>Let me put that another way.</s-en> (je vais le dire autrement) · <s-en>In other words,…</s-en> (autrement dit…) · <s-en>Does that work for you?</s-en> (ça vous convient ?) · <s-en>Just to make sure we agree: …</s-en> (juste pour être sûre qu'on est d'accord : …)</p>
<h2>Quand tu ne comprends pas un accent</h2>
<p><s-en>Sorry, could you say that again a little more slowly?</s-en> (pardon, pourriez-vous répéter un peu plus lentement ?) · <s-en>Did you say fifteen or fifty?</s-en> (vous avez dit quinze ou cinquante ?) · <s-en>Could you spell that for me?</s-en> (pourriez-vous l'épeler ?) · <s-en>I want to make sure I've got this right: …</s-en> (je veux être sûre d'avoir bien compris : …)</p>
<div class="tip">C'est une compétence qui manque souvent aux natifs : dans les équipes internationales, ce sont parfois eux les plus difficiles à comprendre. Au C2, savoir quand ne pas utiliser une expression compte autant que la connaître.</div>
`,
    examples: [
      ["Let me put that another way.", "Je vais le dire autrement."],
      ["Let's talk again next week and come back to this point.", "Reparlons-en la semaine prochaine et revenons sur ce point."],
      ["Sorry, could you say that again a little more slowly?", "Pardon, pourriez-vous répéter un peu plus lentement ?"],
      ["Did you say fifteen or fifty?", "Vous avez dit quinze ou cinquante ?"],
      ["Just to make sure we agree: the deadline is Friday.", "Juste pour être sûre qu'on est d'accord : la date limite est vendredi."],
      ["Could you spell that for me?", "Pourriez-vous me l'épeler ?"],
      ["In other words, we need two more weeks.", "Autrement dit, il nous faut deux semaines de plus."]
    ],
    quiz: [
      { q: "In an international meeting, which sentence is clearest?", q_fr: "Dans une réunion internationale, quelle phrase est la plus claire ?", o: ["Let's touch base offline.", "Let's discuss this after the meeting.", "Let's take this to the next level."], a: 1, ex: "Plain words travel better than office jargon.", ex_fr: "Des mots simples passent mieux que le jargon de bureau." },
      { q: "You didn't catch a number. You say:", q_fr: "Tu n'as pas saisi un nombre. Tu dis :", o: ["What?", "Repeat.", "Did you say fifteen or fifty?"], a: 2, ex: "Offering two options makes the check quick and polite.", ex_fr: "Proposer deux options rend la vérification rapide et polie." },
      { q: "“Let me put that another way” is used to:", q_fr: "« Let me put that another way » sert à :", o: ["rephrase something more simply", "end the conversation", "change the subject"], a: 0, ex: "put something another way = say it differently.", ex_fr: "put something another way = le dire autrement." },
      { q: "Which is a good habit with listeners from other countries?", q_fr: "Quelle est une bonne habitude avec des interlocuteurs d'autres pays ?", o: ["Using many idioms", "One idea per sentence", "Speaking faster"], a: 1, ex: "Short, clear sentences are easier to follow.", ex_fr: "Des phrases courtes et claires sont plus faciles à suivre." },
      { q: "Which phrase checks agreement politely?", q_fr: "Quelle formule vérifie poliment un accord ?", o: ["You understand, yes?", "Just to make sure we agree: …", "Is it clear for you or not?"], a: 1, ex: "It sounds collaborative, not patronising.", ex_fr: "Elle sonne collaborative, pas condescendante." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    151: {
      gap: [["___ permitting, the match will start at three. (si le temps le permet)", "Weather"], ["The guests ___, we started tidying up. (partis)", "gone"], ["___ the economy slowing down, jobs are harder to find. (avec)", "With"], ["All things ___, it was a good year. (considéré)", "considered"]],
      fix: [["Arriving at the station, the train had already left.", "When I arrived at the station, the train had already left.|Arriving at the station, I found that the train had already left.|When we arrived at the station, the train had already left.", "A dangling participle: the train didn't arrive at the station. Give the clause its own subject."], ["Weather permits, we'll go hiking.", "Weather permitting, we'll go hiking.|If the weather permits, we'll go hiking.", "Absolute construction: noun + -ing."]],
      task: ["Write four sentences about a trip or an event, each with an absolute construction (weather permitting, the work done, with + noun + -ing, all things considered).", "Écris quatre phrases sur un voyage ou un événement, chacune avec une construction absolue (weather permitting, the work done, with + nom + -ing, all things considered).", "Weather permitting, we'll take the boat to the island on Sunday. The bags packed, we had one last coffee on the terrace. With the trains running late, we nearly missed the ferry. All things considered, it was the best holiday we'd had in years."]
    },
    152: {
      gap: [["Let me ___ that another way. (formuler)", "put"], ["Could you ___ that for me? (épeler)", "spell"], ["In other ___, we need more time. (autrement dit)", "words"], ["Sorry, could you say that again a little more ___? (lentement)", "slowly"]],
      fix: [["Can you repeat more slow, please?", "Can you repeat that more slowly, please?|Could you say that again more slowly, please?|Can you repeat it more slowly, please?", "Slowly is the adverb, and repeat needs an object."], ["Is it clear for you?", "Is that clear?|Does that make sense?|Is that clear to you?", "Clear to someone, not for; and that, to refer to what was just said."]],
      task: ["Rewrite this message so that it's easy to understand for colleagues from five different countries: “Hi all, just a heads-up: the client's moved the goalposts again, so we'll need to pull out all the stops to get this over the line by Friday.”", "Réécris ce message pour qu'il soit facile à comprendre pour des collègues de cinq pays différents : « Hi all, just a heads-up: the client's moved the goalposts again, so we'll need to pull out all the stops to get this over the line by Friday. »", "Hello everyone. Important information: the client has changed their requirements again. This means that we will need to work very hard to finish the project by Friday. Please tell me today if you see any problems."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "intlcall", lesson: 152, level: "C2", icon: "globe", partner: "Mei", role: "a colleague in your company's Singapore office",
    title: "A call with a colleague abroad", title_fr: "Un appel avec une collègue à l'étranger",
    setting: "On a video call, you and Mei are planning a project. The connection is poor, and some numbers are hard to hear.", setting_fr: "En visioconférence, Mei et toi préparez un projet. La connexion est mauvaise, et certains chiffres sont difficiles à entendre.",
    turns: [
      { p: "So the budget for the first phase is around eighty thousand, and we need the designs by the fifteenth.", fr: "Donc le budget de la première phase est d'environ quatre-vingt mille, et il nous faut les maquettes pour le quinze." },
      { y: ["Sorry, the line isn't great. Did you say eighty or eighteen thousand?", "What? Again.", "Sorry, the line isn't great. You said eighty or eighteen thousand?"], fr: "Pardon, la ligne n'est pas terrible. Vous avez dit quatre-vingt ou dix-huit mille ?", why: "A question needs did: Did you say…? Offering two options makes the check easy." },
      { p: "Eighty. Eight, zero. And the fifteenth of next month.", fr: "Quatre-vingt. Huit, zéro. Et le quinze du mois prochain." },
      { y: ["Thanks. Just to make sure we agree: eighty thousand for phase one, and the designs by the fifteenth of next month.", "OK OK.", "Thanks. Just to be sure we agree: eighty thousands for phase one, and the designs for the fifteen of next month."], fr: "Merci. Juste pour être sûre qu'on est d'accord : quatre-vingt mille pour la première phase, et les maquettes pour le quinze du mois prochain.", why: "Eighty thousand, with no s. By the fifteenth: an ordinal for dates." },
      { p: "Exactly. Our client in Japan would also like the presentation to be very simple.", fr: "Exactement. Notre client au Japon aimerait aussi que la présentation soit très simple." },
      { y: ["That makes sense. In that case, I'll avoid technical jargon and keep to one idea per slide.", "Simple is boring.", "That makes sense. In that case, I'll avoid technical jargons and keep to one idea for each slides."], fr: "C'est logique. Dans ce cas, j'éviterai le jargon technique et je m'en tiendrai à une idée par diapositive.", why: "Jargon is uncountable. One idea per slide: singular." },
      { p: "Great. One more thing: what does “ballpark figure” mean? Your manager used it in an email.", fr: "Super. Autre chose : que veut dire « ballpark figure » ? Ton responsable l'a utilisé dans un e-mail." },
      { y: ["It means a rough estimate. Sorry, it's an American expression: I'll put it another way next time.", "It's baseball.", "It means an approximative estimation. Sorry, it's an American expression: I'll say it another way the next time."], fr: "Ça veut dire une estimation approximative. Désolée, c'est une expression américaine : la prochaine fois, je le dirai autrement.", why: "A rough estimate: approximative isn't English. Next time, with no the." },
      { p: "No problem, I like learning them! Shall we talk again next week?", fr: "Pas de problème, j'aime les apprendre ! On en reparle la semaine prochaine ?" },
      { y: ["Yes, let's talk again on Tuesday at nine, your time. I'll send a short summary today, so that we both have the same information.", "Yes, Tuesday.", "Yes, let's talk again Tuesday at nine, your hour. I'll send a short summary today, for that we both have the same informations."], fr: "Oui, reparlons-en mardi à neuf heures, heure de chez vous. J'envoie un court résumé aujourd'hui, pour que nous ayons toutes les deux les mêmes informations.", why: "Your time, not your hour. So that + clause. Information is uncountable." }
    ] }
  );

  W.READINGS.push({
    id: "languagethought", level: "C2", icon: "languages", title: "Does your language shape the way you think?", title_fr: "Ta langue façonne-t-elle ta façon de penser ?", genre: "Feature article",
    intro: "A feature article on an old question that research has made more subtle. Absolute constructions and fixed absolute phrases (that said, all things considered), cautious reporting and the vocabulary of linguistics.",
    intro_fr: "Un article de fond sur une vieille question que la recherche a rendue plus subtile. Constructions et locutions absolues (that said, all things considered), compte rendu prudent et vocabulaire de la linguistique.",
    paragraphs: [
      { en: "Does the language you speak shape the way you think? For much of the twentieth century, the answer depended on which linguist you asked. In the 1930s and 1940s, Benjamin Lee Whorf argued that languages impose a particular view of the world on their speakers, famously claiming that the Hopi language of Arizona had no words for time as English speakers understand it. Later research showed that Hopi has plenty of ways of talking about time, and for several decades the strong version of Whorf's idea was widely dismissed.", fr: "La langue que tu parles façonne-t-elle ta façon de penser ? Pendant une grande partie du vingtième siècle, la réponse dépendait du linguiste à qui l'on posait la question. Dans les années 1930 et 1940, Benjamin Lee Whorf soutenait que les langues imposent à leurs locuteurs une vision particulière du monde, et affirmait notamment que le hopi, langue de l'Arizona, n'avait pas de mots pour le temps tel que les anglophones le conçoivent. Des recherches ultérieures ont montré que le hopi dispose de nombreux moyens de parler du temps, et pendant plusieurs décennies, la version forte de l'idée de Whorf a été largement rejetée." },
      { en: "That said, the question refused to go away, and in recent decades it has returned in a more modest form. Few researchers now believe that language imprisons thought. Many, however, have found evidence that it can influence what we habitually notice, remember and attend to.", fr: "Cela dit, la question a refusé de disparaître, et elle est revenue ces dernières décennies sous une forme plus modeste. Peu de chercheurs pensent aujourd'hui que la langue emprisonne la pensée. Beaucoup, en revanche, ont trouvé des indices qu'elle peut influencer ce que nous remarquons, retenons et regardons habituellement." },
      { en: "Consider space. Speakers of Guugu Yimithirr, an Aboriginal language of north-eastern Australia, do not usually describe locations as being to their left or right. Instead, they use compass directions: the cup is north of the plate; there is an ant on your south-west leg. To speak this way, one must always know which way is north, and speakers of such languages turn out to be remarkably good at keeping track of their orientation, even in unfamiliar places.", fr: "Prenons l'espace. Les locuteurs du guugu yimithirr, une langue aborigène du nord-est de l'Australie, ne décrivent généralement pas les positions comme étant à leur gauche ou à leur droite. Ils utilisent plutôt les points cardinaux : la tasse est au nord de l'assiette ; il y a une fourmi sur ta jambe sud-ouest. Pour parler ainsi, il faut toujours savoir où est le nord, et les locuteurs de ces langues se révèlent remarquablement doués pour garder le sens de l'orientation, même dans des lieux inconnus." },
      { en: "Or consider colour. Russian has two basic words for what English calls blue: goluboy for lighter shades and siniy for darker ones. In one experiment, Russian speakers were faster than English speakers at telling two shades of blue apart when the shades fell on different sides of that boundary. Tellingly, the advantage disappeared when they had to repeat a string of numbers at the same time, which suggests that it depended on language being actively involved.", fr: "Prenons la couleur. Le russe a deux mots de base pour ce que l'anglais appelle le bleu : goluboy pour les nuances claires et siniy pour les plus foncées. Dans une expérience, des russophones distinguaient plus vite que des anglophones deux nuances de bleu situées de part et d'autre de cette frontière. Fait révélateur, cet avantage disparaissait quand ils devaient répéter en même temps une suite de chiffres, ce qui suggère qu'il dépendait d'une participation active du langage." },
      { en: "Even time itself may be imagined differently. Speakers of Aymara, in the Andes, refer to the past as lying in front of them and the future behind, and their gestures follow the same logic: the known past ahead, in full view; the unknown future behind, out of sight.", fr: "Le temps lui-même peut être imaginé différemment. Les locuteurs de l'aymara, dans les Andes, situent le passé devant eux et l'avenir derrière, et leurs gestes suivent la même logique : le passé connu devant, bien visible ; l'avenir inconnu derrière, hors de vue." },
      { en: "None of these findings shows that speakers of one language cannot grasp what speakers of another can. Russians can perceive the shades that English speakers lump together, and vice versa; translation remains possible, if never perfect. What the research suggests, all things considered, is subtler: each language trains its speakers to pay attention to certain distinctions. With more and more people living their lives in two or more languages, that may be one of the quiet advantages of bilingualism: not two names for the same world, but two habits of noticing it.", fr: "Aucun de ces résultats ne montre que les locuteurs d'une langue ne peuvent pas saisir ce que ceux d'une autre saisissent. Les russophones perçoivent les nuances que les anglophones regroupent, et inversement ; la traduction reste possible, même si elle n'est jamais parfaite. Ce que suggère la recherche, tout bien considéré, est plus subtil : chaque langue entraîne ses locuteurs à prêter attention à certaines distinctions. Alors que de plus en plus de gens vivent dans deux langues ou davantage, c'est peut-être l'un des avantages discrets du bilinguisme : non pas deux noms pour le même monde, mais deux façons de le remarquer." }
    ],
    glossary: { "habitually": "habituellement", "imprisons": "emprisonne", "dismissed": "rejetée", "attend": "prêter attention", "compass": "boussole, points cardinaux", "orientation": "orientation", "shades": "nuances", "boundary": "frontière", "tellingly": "de façon révélatrice", "string": "suite", "gestures": "gestes", "grasp": "saisir", "lump": "regrouper", "subtler": "plus subtil", "bilingualism": "bilinguisme" },
    questions: [
      { q: "What happened to Whorf's strong claim?", o: ["It was widely dismissed after his Hopi example proved wrong", "It was proved true by later research", "It was never published"], a: 0 },
      { q: "How do Guugu Yimithirr speakers usually describe locations?", o: ["Using left and right", "Using compass directions", "Using numbers"], a: 1 },
      { q: "What did the Russian colour experiment suggest?", o: ["English has no word for blue", "Russians see more colours than anyone else", "Language can affect how quickly we tell colours apart"], a: 2 },
      { q: "How do Aymara speakers picture time?", o: ["The past in front of them and the future behind", "The future in front of them", "Time going from left to right"], a: 0 },
      { q: "What is the article's conclusion?", o: ["Language imprisons thought", "Each language trains its speakers to notice certain distinctions", "Translation is impossible"], a: 1 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-c2-7", unit: "c2-7", level: "C2", icon: "mic",
    title: "An interview: accents and identity", title_fr: "Un entretien : accents et identité",
    context: "On a radio programme, the presenter, Kate, interviews David, a sociolinguist, about people who change the way they speak.", context_fr: "Dans une émission de radio, l'animatrice, Kate, interroge David, sociolinguiste, sur les personnes qui changent leur façon de parler.",
    words: [["code-switching", "le passage d'une variété de langue à une autre"], ["accommodation", "l'ajustement (de sa façon de parler)"], ["a snap judgement", "un jugement hâtif"], ["to tone down", "atténuer"], ["the burden", "la charge, le poids"]],
    lines: [["Kate", "Many people say they've changed the way they speak to get on at work. David, is that something you see in your research?", "en-GB"], ["David", "All the time. Linguists call it code-switching, or accommodation: adjusting your accent, your vocabulary, even your speed, depending on who you're talking to. We all do it to some extent. You don't speak to your grandmother the way you speak at a job interview.", "en-AU"], ["Kate", "But isn't there a difference between adapting and hiding?", "en-GB"], ["David", "That's exactly the question. Adjusting your speech so that you're understood is a skill. Feeling that you have to erase your accent to be taken seriously is something else. That said, the pressure is real: studies of accent bias suggest that listeners often make snap judgements about competence based on accent alone.", "en-AU"], ["Kate", "Even though the so-called standard accent is actually quite rare.", "en-GB"], ["David", "Very rare. The traditional upper-middle-class accent of southern England has only ever been spoken by a small minority, and it's changing anyway. Strictly speaking, there's no such thing as English without an accent.", "en-AU"], ["Kate", "So what would you say to a listener who's been told to tone down their accent?", "en-GB"], ["David", "I'd say: speak clearly, by all means. But all things considered, the burden shouldn't fall only on the speaker. Listening to accents different from your own is a skill too, and it's one we could all practise more.", "en-AU"]],
    gist: ["What is the interview about?", ["Changing the way you speak, and judgements based on accent", "How to learn a British accent", "The history of the English language"]],
    detail: [["What is code-switching, or accommodation?", ["Adjusting your speech to the person you're talking to", "Speaking two languages at once", "Refusing to change your accent"]], ["What distinction does Kate make?", ["Between adapting to be understood and hiding who you are", "Between British and American English", "Between young and old speakers"]], ["What do studies of accent bias suggest?", ["Listeners often judge competence from accent alone.", "Accents have no effect on listeners.", "Only the standard accent is understood."]], ["What does David say about the “standard” accent?", ["It has only ever been spoken by a small minority.", "Most people speak it.", "It has never changed."]], ["What is David's final advice?", ["Speakers should be clear, but listeners should also learn to understand accents.", "Everyone should lose their accent.", "Speakers should never adapt."]]],
    decode: ["That said, the pressure is real", "Strictly speaking, there's no such thing as English without an accent."],
    tip: "Fixed absolute phrases are signposts in an argument: that said introduces a qualification, strictly speaking a precise correction, all things considered a final judgement. Spotting them tells you where the speaker's reasoning is going.", tip_fr: "Les locutions absolues sont des panneaux indicateurs dans un raisonnement : that said introduit une nuance, strictly speaking une correction précise, all things considered un jugement final. Les repérer te dit où va le raisonnement."
  }]);

  W.PROMPTS.push({ id: "c2-lang", level: "C2", q: "Do you feel like a slightly different person when you speak another language? Why might that be?", fr: "Te sens-tu un peu différente quand tu parles une autre langue ? Pourquoi, selon toi ?", time: 180,
    phrases: ["Strictly speaking,…", "That said,…", "It's as if…", "What I find fascinating is…", "All things considered,…"],
    model: "Strictly speaking, I'm the same person, of course, but I do notice that I behave slightly differently in English. I'm more direct in French and more cautious in English, perhaps because I'm still searching for the right word, or perhaps because English conversation relies so much on understatement. It's as if each language came with its own set of social habits, which I've absorbed along with the vocabulary. That said, I suspect part of it is simply confidence: in my mother tongue, I can be ironic or playful without thinking. What I find fascinating is that the gap seems to shrink as my level improves. All things considered, I'd say a new language doesn't change who you are; it gives you another way of being yourself." });

  W.WRITING_GUIDE["c2-7"] = { genre: "A C2 Proficiency essay on two texts", genre_fr: "Un essai C2 Proficiency sur deux textes",
    plan: [["Introduce the question both texts answer.", "Présente la question à laquelle répondent les deux textes."], ["Summarise the first text in your own words.", "Résume le premier texte avec tes propres mots."], ["Summarise the second text in your own words.", "Résume le second texte avec tes propres mots."], ["Evaluate both, adding your own ideas.", "Évalue-les, en ajoutant tes propres idées."], ["Conclude with your own nuanced position.", "Conclus par ta propre position, nuancée."]],
    marks: [["is a question with no easy answer", "a measured opening", "une ouverture mesurée"], ["The two texts approach it from opposite directions.", "announcing the contrast", "annoncer le contraste"], ["The first presents English as a practical bridge.", "summarising with a strong verb", "résumer avec un verbe fort"], ["the writer argues", "reporting without agreeing", "rapporter sans adhérer"], ["The second is far less optimistic.", "linking the two summaries", "relier les deux résumés"], ["believing English to be essential", "a participle clause with object + to be", "une participiale avec complément + to be"], ["Strictly speaking,", "a fixed absolute phrase: a precise correction", "une locution absolue : la correction précise"], ["That said,", "a fixed absolute phrase: a qualification", "une locution absolue : la nuance"], ["A language confined to the kitchen table", "a vivid image", "une image frappante"], ["All things considered,", "a fixed absolute phrase: the final judgement", "une locution absolue : le jugement final"], ["With English firmly established as the world's working language", "an absolute construction with with", "une construction absolue avec with"], ["a bridge rather than a replacement", "a memorable final contrast", "un contraste final marquant"]] };

  W.LEXIS["c2-7"] = {
    colloc: [
      ["speak fluent English", "parler couramment anglais", "She speaks fluent English and Portuguese.", "fluent", ["fluid", "flowing"]],
      ["a strong accent", "un fort accent", "He has a strong Scottish accent.", "strong", ["big", "fat"]],
      ["lost in translation", "perdu à la traduction", "The joke was lost in translation.", "lost", ["missed", "dropped"]],
      ["coin a phrase", "forger une expression", "Who coined the phrase “global village”?", "coined", ["struck", "printed"]],
      ["a native speaker", "un locuteur natif", "You don't need to sound like a native speaker.", "native", ["natal", "national"]],
      ["pick up a language", "apprendre une langue sans effort", "Children pick up languages remarkably fast.", "pick", ["take", "gather"]],
      ["a dead language", "une langue morte", "Latin is often described as a dead language.", "dead", ["died", "deceased"]],
      ["a sense of belonging", "un sentiment d'appartenance", "A shared language gives people a sense of belonging.", "belonging", ["appurtenance", "owning"]],
      ["break down barriers", "faire tomber les barrières", "Learning a language can break down barriers.", "break", ["fall", "drop"]],
      ["put something into words", "exprimer par des mots", "It's hard to put the feeling into words.", "words", ["speech", "phrases"]]
    ],
    wf: [
      ["The ___ of English as a global language is fairly recent. (DOMINANT)", "dominance"],
      ["Some expressions are virtually ___. (TRANSLATE)", "untranslatable"],
      ["The ___ of the regional dialect was celebrated with a festival. (REVIVE)", "revival"],
      ["His speech was full of ___ expressions. (IDIOM)", "idiomatic"],
      ["For many people, accent is a ___ part of their identity. (DEFINE)", "defining"],
      ["The two words are ___ related: they share a Latin root. (ETYMOLOGY)", "etymologically"],
      ["Some critics see the spread of English as a form of cultural ___. (IMPERIAL)", "imperialism"],
      ["There is growing ___ that every language deserves protection. (ACKNOWLEDGE)", "acknowledgement|acknowledgment"]
    ],
    kwt: [
      ["When the meeting had finished, she phoned her sister.", "OVER", "___, she phoned her sister.", "the meeting over|the meeting being over|with the meeting over"],
      ["Because prices are rising, many families are struggling.", "WITH", "___, many families are struggling.", "with prices rising|with prices going up|with prices on the rise"],
      ["When you consider everything, the trip was a success.", "THINGS", "___, the trip was a success.", "all things considered"],
      ["The joke didn't work in English because it relied on a pun.", "LOST", "The joke ___ because it relied on a pun.", "was lost in translation|got lost in translation"],
      ["It's very hard to describe the feeling.", "WORDS", "It's very hard to ___.", "put the feeling into words"],
      ["She learned Spanish without any real effort while living in Madrid.", "PICKED", "She ___ while living in Madrid.", "picked up Spanish effortlessly|picked Spanish up effortlessly|picked up Spanish without any effort|picked Spanish up without any effort"]
    ],
    idioms: [
      ["lost for words", "so surprised that you can't speak", "sans voix", "When she heard the news, she was lost for words.", "lost for words"],
      ["it's all Greek to me", "I can't understand it at all", "c'est du chinois pour moi", "Legal contracts are all Greek to me.", "all Greek to me"],
      ["not mince your words", "speak directly, even if it offends", "ne pas mâcher ses mots", "She doesn't mince her words.", "mince her words"],
      ["a slip of the tongue", "a small mistake when speaking", "un lapsus", "Calling him by his brother's name was just a slip of the tongue.", "a slip of the tongue"],
      ["get the wrong end of the stick", "misunderstand completely", "comprendre de travers", "I think you've got the wrong end of the stick.", "got the wrong end of the stick"],
      ["the gift of the gab", "the ability to speak easily and persuasively", "la tchatche", "Good salespeople have the gift of the gab.", "the gift of the gab"],
      ["on the tip of my tongue", "almost remembered, but not quite", "sur le bout de la langue", "His name is on the tip of my tongue.", "on the tip of my tongue"],
      ["speak the same language", "share the same ideas and attitudes", "parler le même langage", "The two designers immediately spoke the same language.", "spoke the same language"]
    ]
  };

  /* The unit, after Persuasion and rhetoric; the language and culture themes move here. */
  const move = (from, key, ids) => { const u = W.COURSE.find((x) => x.id === from); if (u) u[key] = (u[key] || []).filter((x) => !ids.includes(x)); };
  move("c2-5", "vocab", ["linguisticsC2", "cultureC2"]); move("c2-4", "vocab", ["britishC2", "americanC2"]);
  const unit = { id: "c2-7", level: "C2", icon: "languages", title: "Language and identity", title_fr: "Langue et identité",
    intro: "At C2, English is no longer just something you study: it's part of how you present yourself to the world. In this unit, you'll use absolute constructions (all things considered, weather permitting), adapt your English to international listeners, explore whether language shapes thought, and write an essay on the spread of English.",
    intro_fr: "Au C2, l'anglais n'est plus seulement une matière : il fait partie de la façon dont tu te présentes au monde. Dans cette unité, tu utiliseras les constructions absolues (all things considered, weather permitting), tu adapteras ton anglais à des interlocuteurs internationaux, tu te demanderas si la langue façonne la pensée et tu rédigeras un essai sur la diffusion de l'anglais.",
    can: ["Use absolute constructions and fixed absolute phrases in writing", "Adapt your English to listeners from other countries, and check understanding", "Understand an article on language and thought and an interview about accents", "Write a C2 Proficiency essay summarising and evaluating two texts"],
    can_fr: ["Utiliser à l'écrit les constructions et locutions absolues", "Adapter ton anglais à des interlocuteurs d'autres pays, et vérifier qu'ils ont compris", "Comprendre un article sur la langue et la pensée et un entretien sur les accents", "Rédiger un essai C2 Proficiency qui résume et évalue deux textes"],
    lessons: [151, 152], vocab: ["linguisticsC2", "cultureC2", "britishC2", "americanC2"], reading: "languagethought", prompt: "c2-lang",
    writing: { task: "Read the two extracts, then write an essay (240-280 words) summarising and evaluating the key points of both, in your own words, and including your own ideas. Text 1: “English has become the common language of science, business and the internet. Far from threatening other languages, it allows people from very different cultures to cooperate, while they continue to speak their own languages at home.” Text 2: “Every time a parent decides that English, not the family language, is the key to their child's future, a little more of the world's linguistic diversity is lost. A language that everyone uses for practical purposes inevitably pushes others to the margins.”", task_fr: "Lis les deux extraits, puis rédige un essai (240-280 mots) qui résume et évalue leurs idées principales, avec tes propres mots, en ajoutant tes idées. Texte 1 : « L'anglais est devenu la langue commune de la science, des affaires et d'internet. Loin de menacer les autres langues, il permet à des personnes de cultures très différentes de coopérer, tout en continuant à parler leur propre langue chez elles. » Texte 2 : « Chaque fois qu'un parent décide que l'anglais, et non la langue de la famille, est la clé de l'avenir de son enfant, un peu plus de la diversité linguistique du monde disparaît. Une langue que tout le monde utilise à des fins pratiques repousse inévitablement les autres vers les marges. »", words: "240-280",
      tips: ["… is a question with no easy answer.", "The first presents…", "The second is far less optimistic.", "Strictly speaking,… That said,…", "All things considered,…"],
      checklist: ["I summarised both texts in my own words, without copying", "I evaluated each text rather than just repeating it", "I added at least one idea of my own", "I used at least two absolute constructions or fixed absolute phrases", "I stayed between 240 and 280 words"],
      model: "Whether the spread of English threatens other languages or simply gives humanity a shared tool is a question with no easy answer. The two texts approach it from opposite directions.\n\nThe first presents English as a practical bridge. In fields such as science and commerce, a common language allows people from different backgrounds to work together, and, the writer argues, it need not replace local languages, which continue to be used in private life.\n\nThe second is far less optimistic. Its author suggests that the damage is done not by English itself but by countless individual decisions: parents who, believing English to be essential for their children's success, stop passing on the family language. A language that dominates public life, the writer concludes, gradually pushes others to the edges.\n\nBoth texts, in my view, contain an important truth. Strictly speaking, English does not destroy languages; people abandon them, usually for understandable economic reasons. That said, the second text identifies the real mechanism more convincingly. A language confined to the kitchen table is a language in decline, and the first writer's comfortable picture of coexistence underestimates how quickly prestige shapes what children speak.\n\nAll things considered, the answer lies less in resisting English than in giving other languages a public role: in schools, in the media and in official life. With English firmly established as the world's working language, the challenge for this century will be to ensure that it remains a bridge rather than a replacement." } };
  W.COURSE.splice(W.COURSE.findIndex((u) => u.id === "c2-3"), 0, unit);
})();
