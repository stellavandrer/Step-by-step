/* Unité B1 « Learning for life » (b1-9), complète : leçons 161-162 et leurs exercices, texte, atelier d'écoute,
   jeu de rôle, sujet d'oral et guide d'écriture. Placée après In the news (la leçon 161 prolonge le discours rapporté :
   asked me to, told me to) ; elle reprend le thème des études (etudes) et le texte mistakes de b1-1.
   Personnes fictives. Faits vérifiables seulement : expériences d'Ebbinghaus sur l'oubli (années 1880), effet
   d'espacement, effet de test, revue de 2013 classant les tests et l'étude espacée parmi les techniques les plus
   efficaces et la relecture et le surlignage parmi les moins efficaces, rôle du sommeil dans la mémorisation. */
(function () {
  const W = window;

  W.VOCAB.push({ id: "learningB1", icon: "lightbulb", title: "Learning new skills", title_fr: "Apprendre de nouvelles choses", level: "B1", words: [
    ["a beginner", "un(e) débutant(e)", "This class is for complete beginners."],
    ["an evening class", "un cours du soir", "She takes an evening class in Spanish."],
    ["an online course", "un cours en ligne", "I signed up for an online course in photography."],
    ["a tutor", "un professeur particulier", "He has a maths tutor twice a week."],
    ["to sign up for", "s'inscrire à", "I've signed up for a pottery class."],
    ["to take notes", "prendre des notes", "Do you take notes on paper or on a laptop?"],
    ["to memorise", "mémoriser, apprendre par cœur", "Actors have to memorise long texts."],
    ["self-taught", "autodidacte", "My grandfather was a self-taught musician."],
    ["an apprenticeship", "un apprentissage, une formation en alternance", "He did a three-year apprenticeship as a carpenter."],
    ["a flashcard", "une carte de révision", "I use flashcards to learn new words."],
    ["rusty", "rouillé (une compétence)", "My German is a bit rusty."],
    ["to master", "maîtriser", "It takes years to master the violin."],
    ["to give it a go", "essayer, tenter le coup", "I'd never surfed before, but I gave it a go."],
    ["to fall behind", "prendre du retard", "I was ill for a week and fell behind."],
    ["to keep at it", "persévérer, ne pas lâcher", "It's hard at first, but keep at it!"],
    ["a quiz", "un petit test, un questionnaire", "The teacher gives us a short quiz every Friday."],
    ["to test yourself", "s'interroger, se tester", "Test yourself the next day, not just the same evening."],
    ["to show someone how to", "montrer à quelqu'un comment", "Can you show me how to use this camera?"],
    ["practice makes perfect", "c'est en forgeant qu'on devient forgeron", "Don't give up: practice makes perfect."],
    ["a refresher course", "un stage de remise à niveau", "I took a refresher course before going back to work."]
  ] });

  W.LESSONS.push(
  {
    id: 161, after: 113, level: "B1", icon: "message-square-quote",
    title: "I want you to…: verb + person + to-infinitive", title_fr: "I want you to… : verbe + personne + infinitif avec to",
    subtitle: "Say what people want, ask, advise or expect someone to do, without “that”.", subtitle_fr: "Dire ce que les gens veulent, demandent, conseillent ou attendent de quelqu'un, sans « that ».",
    body: `
<h2>The pattern</h2>
<p>Verb + person + <b>to</b> + verb: <s-en>My parents wanted me to study law.</s-en> · <s-en>The teacher asked us to switch off our phones.</s-en> · <s-en>I'd like you to meet my brother.</s-en></p>
<p>Common verbs with this pattern: <s-en>want, would like, ask, tell, advise, encourage, expect, remind, teach, invite, persuade, need, allow</s-en>.</p>
<h2>The trap: no "that"</h2>
<p>With <s-en>want</s-en>, <s-en>would like</s-en> and <s-en>expect</s-en>, many learners translate word for word and use <s-en>that</s-en>. In English, that's impossible:</p>
<p><s-en>I want that you come.</s-en> ✗ → <s-en>I want you to come.</s-en> ✓ · <s-en>She expects that I help her.</s-en> ✗ → <s-en>She expects me to help her.</s-en> ✓</p>
<p>Use an object pronoun (<s-en>me, you, him, her, us, them</s-en>), not a subject pronoun: <s-en>She wants me to…</s-en>, never <s-en>She wants I…</s-en></p>
<h2>The negative: not to</h2>
<p><s-en>The teacher told us not to use a dictionary.</s-en> · <s-en>I reminded him not to forget his keys.</s-en> The negative goes just before <s-en>to</s-en>.</p>
<h2>Three verbs that don't follow this pattern</h2>
<table>
<tr><th>Verb</th><th>Wrong</th><th>Right</th></tr>
<tr><td>suggest</td><td><s-en>She suggested me to take a class.</s-en></td><td><s-en>She suggested taking a class.</s-en> · <s-en>She suggested that I take a class.</s-en></td></tr>
<tr><td>explain</td><td><s-en>Can you explain me the rule?</s-en></td><td><s-en>Can you explain the rule to me?</s-en></td></tr>
<tr><td>say</td><td><s-en>He said me to wait.</s-en></td><td><s-en>He told me to wait.</s-en></td></tr>
</table>
<p>And remember: <s-en>make</s-en> and <s-en>let</s-en> are followed by the verb <b>without</b> to: <s-en>My teacher made me repeat it.</s-en> · <s-en>She let us leave early.</s-en></p>
<div class="tip">Talking about learning: <s-en>My teacher encouraged me to keep a vocabulary notebook.</s-en> · <s-en>My parents never forced me to practise the piano.</s-en> · <s-en>I'd advise you to test yourself regularly.</s-en></div>
`,
    body_fr: `
<h2>La structure</h2>
<p>Verbe + personne + <b>to</b> + verbe : <s-en>My parents wanted me to study law.</s-en> (mes parents voulaient que je fasse du droit) · <s-en>The teacher asked us to switch off our phones.</s-en> (le professeur nous a demandé d'éteindre nos téléphones) · <s-en>I'd like you to meet my brother.</s-en> (j'aimerais que tu rencontres mon frère)</p>
<p>Verbes courants avec cette structure : <s-en>want, would like, ask, tell, advise, encourage, expect, remind, teach, invite, persuade, need, allow</s-en> (vouloir, aimerait, demander, dire, conseiller, encourager, s'attendre à, rappeler, apprendre à, inviter, persuader, avoir besoin, autoriser).</p>
<h2>Le piège : pas de « that »</h2>
<p>Avec <s-en>want</s-en>, <s-en>would like</s-en> et <s-en>expect</s-en>, on a envie de traduire « je veux que tu viennes » mot à mot. En anglais, c'est impossible :</p>
<p><s-en>I want that you come.</s-en> ✗ → <s-en>I want you to come.</s-en> ✓ · <s-en>She expects that I help her.</s-en> ✗ → <s-en>She expects me to help her.</s-en> ✓ (elle s'attend à ce que je l'aide)</p>
<p>Utilise un pronom complément (<s-en>me, you, him, her, us, them</s-en>), pas un pronom sujet : <s-en>She wants me to…</s-en>, jamais <s-en>She wants I…</s-en></p>
<h2>La négation : not to</h2>
<p><s-en>The teacher told us not to use a dictionary.</s-en> (le professeur nous a dit de ne pas utiliser de dictionnaire) · <s-en>I reminded him not to forget his keys.</s-en> (je lui ai rappelé de ne pas oublier ses clés). La négation se place juste avant <s-en>to</s-en>.</p>
<h2>Trois verbes qui ne suivent pas cette structure</h2>
<table>
<tr><th>Verbe</th><th>Faux</th><th>Juste</th></tr>
<tr><td>suggest (proposer, suggérer)</td><td><s-en>She suggested me to take a class.</s-en></td><td><s-en>She suggested taking a class.</s-en> · <s-en>She suggested that I take a class.</s-en></td></tr>
<tr><td>explain (expliquer)</td><td><s-en>Can you explain me the rule?</s-en></td><td><s-en>Can you explain the rule to me?</s-en></td></tr>
<tr><td>say (dire)</td><td><s-en>He said me to wait.</s-en></td><td><s-en>He told me to wait.</s-en></td></tr>
</table>
<p>Et souviens-toi : <s-en>make</s-en> et <s-en>let</s-en> sont suivis du verbe <b>sans</b> to : <s-en>My teacher made me repeat it.</s-en> (mon professeur me l'a fait répéter) · <s-en>She let us leave early.</s-en> (elle nous a laissés partir tôt)</p>
<div class="tip">Pour parler d'apprentissage : <s-en>My teacher encouraged me to keep a vocabulary notebook.</s-en> (ma professeure m'a encouragée à tenir un carnet de vocabulaire) · <s-en>My parents never forced me to practise the piano.</s-en> (mes parents ne m'ont jamais forcée à travailler le piano) · <s-en>I'd advise you to test yourself regularly.</s-en> (je te conseille de t'interroger régulièrement)</div>
`,
    examples: [
      ["My parents wanted me to become a doctor.", "Mes parents voulaient que je devienne médecin."],
      ["The teacher asked us to switch off our phones.", "Le professeur nous a demandé d'éteindre nos téléphones."],
      ["I'd like you to meet my tutor.", "J'aimerais que tu rencontres mon professeur particulier."],
      ["She encouraged me to sign up for the course.", "Elle m'a encouragée à m'inscrire au cours."],
      ["He told us not to worry about mistakes.", "Il nous a dit de ne pas nous inquiéter des erreurs."],
      ["Nobody expects you to be perfect.", "Personne ne s'attend à ce que tu sois parfaite."],
      ["Can you remind me to bring my notebook?", "Tu peux me rappeler d'apporter mon carnet ?"],
      ["Could you explain this rule to me?", "Tu pourrais m'expliquer cette règle ?"]
    ],
    quiz: [
      { q: "My teacher wants ___ more in English.", q_fr: "Complète : « My teacher wants ___ more in English. »", o: ["that I read", "me to read", "me read"], a: 1, ex: "want + person + to + verb: no that.", ex_fr: "want + personne + to + verbe : pas de that." },
      { q: "She told us ___ late for the exam.", q_fr: "Complète : « She told us ___ late for the exam. »", o: ["not to be", "to not being", "don't be"], a: 0, ex: "The negative: not goes before to.", ex_fr: "La négation : not se place avant to." },
      { q: "Which sentence is correct?", q_fr: "Quelle phrase est correcte ?", o: ["Can you explain me the rule?", "Can you explain the rule to me?", "Can you explain me to the rule?"], a: 1, ex: "explain something to someone. Never explain me.", ex_fr: "explain quelque chose to quelqu'un. Jamais explain me." },
      { q: "My friend suggested ___ an online course.", q_fr: "Complète : « My friend suggested ___ an online course. »", o: ["me to take", "taking", "to me take"], a: 1, ex: "suggest + -ing, or suggest that…: never suggest me to.", ex_fr: "suggest + -ing, ou suggest that… : jamais suggest me to." },
      { q: "The coach made us ___ round the field ten times.", q_fr: "Complète : « The coach made us ___ round the field ten times. »", o: ["run", "to run", "running"], a: 0, ex: "make + person + verb without to.", ex_fr: "make + personne + verbe sans to." }
    ]
  },
  {
    id: 162, after: 113, level: "B1", kind: "functional", icon: "circle-help",
    title: "Everyday English: asking for clarification", title_fr: "Anglais pratique : demander des précisions",
    subtitle: "Say you didn't hear or didn't understand, ask for an explanation, and check what you've understood.", subtitle_fr: "Dire que tu n'as pas entendu ou pas compris, demander une explication et vérifier ce que tu as compris.",
    body: `
<h2>When you didn't hear</h2>
<p><s-en>Sorry, I didn't catch that.</s-en> · <s-en>Could you say that again, please?</s-en> · <s-en>Could you speak a bit more slowly?</s-en> · <s-en>Sorry, what was the last word?</s-en></p>
<h2>When you didn't understand</h2>
<table>
<tr><th>You need…</th><th>Examples</th></tr>
<tr><td>the meaning of a word</td><td><s-en>What does "rusty" mean?</s-en> · <s-en>What do you mean by "a deadline"?</s-en></td></tr>
<tr><td>more explanation</td><td><s-en>Sorry, I'm not with you.</s-en> (I don't follow) · <s-en>Could you give me an example?</s-en></td></tr>
<tr><td>the spelling or the pronunciation</td><td><s-en>How do you spell that?</s-en> · <s-en>How do you pronounce this word?</s-en></td></tr>
<tr><td>a word you don't know in English</td><td><s-en>How do you say "bricolage" in English?</s-en> · <s-en>What's the word for…?</s-en></td></tr>
</table>
<h2>Checking what you've understood</h2>
<p><s-en>So, if I understand correctly, we don't have to buy the book?</s-en> · <s-en>So you mean that the class is cancelled?</s-en> · <s-en>Do you mean Tuesday or Thursday?</s-en> · <s-en>Let me check I've got this right: …</s-en></p>
<h2>When someone doesn't understand you</h2>
<p><s-en>Sorry, let me put it another way.</s-en> · <s-en>In other words,…</s-en> · <s-en>What I mean is…</s-en> · <s-en>Does that make sense?</s-en></p>
<div class="tip">Two traps: <s-en>What does it mean?</s-en>, not <s-en>What does it means?</s-en> or <s-en>What means it?</s-en> And <s-en>Sorry?</s-en> with a rising voice is a polite way to say you didn't hear. <s-en>What?</s-en> alone can sound rude.</div>
`,
    body_fr: `
<h2>Quand tu n'as pas entendu</h2>
<p><s-en>Sorry, I didn't catch that.</s-en> (pardon, je n'ai pas saisi) · <s-en>Could you say that again, please?</s-en> (vous pourriez répéter, s'il vous plaît ?) · <s-en>Could you speak a bit more slowly?</s-en> (vous pourriez parler un peu plus lentement ?) · <s-en>Sorry, what was the last word?</s-en> (pardon, c'était quoi le dernier mot ?)</p>
<h2>Quand tu n'as pas compris</h2>
<table>
<tr><th>Tu as besoin…</th><th>Exemples</th></tr>
<tr><td>du sens d'un mot</td><td><s-en>What does "rusty" mean?</s-en> (que veut dire « rusty » ?) · <s-en>What do you mean by "a deadline"?</s-en> (qu'entendez-vous par « deadline » ?)</td></tr>
<tr><td>de plus d'explications</td><td><s-en>Sorry, I'm not with you.</s-en> (pardon, je ne vous suis pas) · <s-en>Could you give me an example?</s-en> (vous pourriez me donner un exemple ?)</td></tr>
<tr><td>de l'orthographe ou de la prononciation</td><td><s-en>How do you spell that?</s-en> (comment ça s'écrit ?) · <s-en>How do you pronounce this word?</s-en> (comment se prononce ce mot ?)</td></tr>
<tr><td>d'un mot que tu ne connais pas en anglais</td><td><s-en>How do you say "bricolage" in English?</s-en> (comment dit-on « bricolage » en anglais ?) · <s-en>What's the word for…?</s-en> (comment dit-on… ?)</td></tr>
</table>
<h2>Vérifier ce que tu as compris</h2>
<p><s-en>So, if I understand correctly, we don't have to buy the book?</s-en> (donc, si je comprends bien, on n'est pas obligés d'acheter le livre ?) · <s-en>So you mean that the class is cancelled?</s-en> (vous voulez dire que le cours est annulé ?) · <s-en>Do you mean Tuesday or Thursday?</s-en> (vous voulez dire mardi ou jeudi ?) · <s-en>Let me check I've got this right: …</s-en> (je vérifie que j'ai bien compris : …)</p>
<h2>Quand quelqu'un ne te comprend pas</h2>
<p><s-en>Sorry, let me put it another way.</s-en> (pardon, je vais le dire autrement) · <s-en>In other words,…</s-en> (autrement dit…) · <s-en>What I mean is…</s-en> (ce que je veux dire, c'est que…) · <s-en>Does that make sense?</s-en> (c'est clair ?)</p>
<div class="tip">Deux pièges : <s-en>What does it mean?</s-en>, pas <s-en>What does it means?</s-en> ni <s-en>What means it?</s-en> Et « vouloir dire » se traduit par <s-en>mean</s-en>, jamais par <s-en>want to say</s-en>. Enfin, <s-en>Sorry?</s-en> avec une intonation montante est une façon polie de dire que tu n'as pas entendu ; <s-en>What?</s-en> tout seul peut paraître impoli.</div>
`,
    examples: [
      ["Sorry, I didn't catch that.", "Pardon, je n'ai pas saisi."],
      ["Could you speak a bit more slowly, please?", "Vous pourriez parler un peu plus lentement, s'il vous plaît ?"],
      ["What do you mean by flexible hours?", "Qu'entendez-vous par horaires flexibles ?"],
      ["What does rusty mean?", "Que veut dire rusty ?"],
      ["Could you give me an example?", "Vous pourriez me donner un exemple ?"],
      ["So, if I understand correctly, the class starts at seven?", "Donc, si je comprends bien, le cours commence à sept heures ?"],
      ["Let me put it another way.", "Je vais le dire autrement."]
    ],
    quiz: [
      { q: "You didn't hear the end of the sentence. You say:", q_fr: "Tu n'as pas entendu la fin de la phrase. Tu dis :", o: ["Sorry, I didn't catch that.", "Sorry, I didn't take that.", "What did you told?"], a: 0, ex: "I didn't catch that = I didn't hear or understand.", ex_fr: "I didn't catch that = je n'ai pas saisi." },
      { q: "Which question is correct?", q_fr: "Quelle question est correcte ?", o: ["What does “deadline” mean?", "What means “deadline”?", "What does “deadline” means?"], a: 0, ex: "Question with does + verb without -s.", ex_fr: "Question avec does + verbe sans -s." },
      { q: "“I'm not with you” means:", q_fr: "« I'm not with you » veut dire :", o: ["I don't understand what you're saying.", "I'm not coming with you.", "I disagree with you."], a: 0, ex: "I'm not with you = I don't follow you.", ex_fr: "I'm not with you = je ne te suis pas." },
      { q: "To check what you've understood, you say:", q_fr: "Pour vérifier ce que tu as compris, tu dis :", o: ["So, if I understand correctly,…", "So, if I understand correct,…", "So, I understand you good,…"], a: 0, ex: "correctly is the adverb.", ex_fr: "correctly est l'adverbe." },
      { q: "“Qu'est-ce que vous voulez dire ?” in English:", q_fr: "« Qu'est-ce que vous voulez dire ? » en anglais :", o: ["What do you mean?", "What do you want to say?", "What are you meaning?"], a: 0, ex: "vouloir dire = mean.", ex_fr: "vouloir dire = mean." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    161: {
      gap: [["My parents always encouraged me ___ read. (à)", "to"], ["I'd like ___ to come to my first concert. (toi)", "you"], ["The doctor told him ___ to lift heavy things. (ne pas)", "not"], ["Could you remind ___ to call the school? (me)", "me"]],
      fix: [["I want that you help me with my homework.", "I want you to help me with my homework.", "want + person + to + verb: no that."], ["Can you explain me how this works?", "Can you explain to me how this works?|Can you explain how this works?", "explain something to someone: never explain me."]],
      task: ["Write about four people who have influenced your learning: what did they want, encourage, advise or tell you to do?", "Écris sur quatre personnes qui ont influencé ton apprentissage : que voulaient-elles que tu fasses, à quoi t'ont-elles encouragée, que t'ont-elles conseillé ou dit de faire ?", "My mother wanted me to learn the piano, but I hated practising. My art teacher encouraged me to draw every day, which I still do. A colleague advised me to read in English for ten minutes a day. And my grandfather always told me not to be afraid of mistakes."]
    },
    162: {
      gap: [["Sorry, I didn't ___ that. Could you repeat it? (saisir)", "catch|get"], ["What do you ___ by a soft deadline? (vouloir dire)", "mean"], ["Could you speak a bit more ___? (lentement)", "slowly"], ["So, if I understand ___, we meet at six? (bien)", "correctly|rightly"]],
      fix: [["What means tutor?", "What does tutor mean?", "Questions with does: What does… mean?"], ["Can you repeat more slow, please?", "Can you repeat that more slowly, please?|Could you repeat that more slowly, please?|Can you repeat it more slowly, please?|Could you repeat it more slowly, please?|Can you say that more slowly, please?", "Repeat needs an object (that, it), and slowly is the adverb."]],
      task: ["You're at the first session of an evening class and the teacher has just explained how it works. Write four questions or sentences to ask for clarification.", "Tu es à la première séance d'un cours du soir et le professeur vient d'expliquer comment ça fonctionne. Écris quatre questions ou phrases pour demander des précisions.", "Sorry, I didn't catch the last part. Could you say it again? What do you mean by a portfolio? So, if I understand correctly, we don't have to buy the materials ourselves? And how do you spell the name of the website?"]
    }
  });

  W.ROLEPLAYS.push(
  { id: "firstclass", lesson: 162, level: "B1", icon: "camera", partner: "Helen", role: "a photography teacher",
    title: "The first evening class", title_fr: "Le premier cours du soir",
    setting: "It's the first session of an evening photography class. The teacher is explaining how the course works, and you need to check a few things.", setting_fr: "C'est la première séance d'un cours du soir de photographie. La professeure explique comment le cours fonctionne, et tu as besoin de vérifier certaines choses.",
    turns: [
      { p: "Welcome, everyone! So, the course runs for ten weeks, and each week you'll have a small assignment to do at home.", fr: "Bienvenue à tous ! Alors, le cours dure dix semaines, et chaque semaine vous aurez un petit exercice à faire chez vous." },
      { y: ["Sorry, I didn't catch that. How many weeks does the course last?", "Sorry, I didn't catch. How many weeks lasts the course?", "Sorry, I didn't take that. How many weeks does the course last?"], fr: "Pardon, je n'ai pas saisi. Le cours dure combien de semaines ?", why: "I didn't catch that (with that). A question with does: How many weeks does it last?" },
      { p: "Ten weeks. And at the end, you'll put together a portfolio of your best photos.", fr: "Dix semaines. Et à la fin, vous constituerez un portfolio de vos meilleures photos." },
      { y: ["What do you mean by a portfolio, exactly?", "What do you want to say by a portfolio?", "What means a portfolio, exactly?"], fr: "Qu'entendez-vous par portfolio, exactement ?", why: "What do you mean by…? Vouloir dire = mean, never want to say." },
      { p: "It's a collection of your best work, about twelve photos, printed or online. You don't have to print them if you'd rather not.", fr: "C'est un recueil de vos meilleurs travaux, une douzaine de photos, imprimées ou en ligne. Vous n'êtes pas obligés de les imprimer si vous préférez ne pas le faire." },
      { y: ["So, if I understand correctly, an online portfolio is fine?", "So, if I understand correct, an online portfolio is fine?", "So, if I understand correctly, an online portfolio it's fine?"], fr: "Donc, si je comprends bien, un portfolio en ligne, c'est bon ?", why: "Correctly is the adverb. Don't repeat the subject with it." },
      { p: "Exactly. And I'd like you to bring your own camera next week. A phone is fine too, if you haven't got one.", fr: "Exactement. Et j'aimerais que vous apportiez votre propre appareil la semaine prochaine. Un téléphone convient aussi, si vous n'en avez pas." },
      { y: ["Could you speak a bit more slowly? Did you say a phone is fine too?", "Could you speak more slow? You said a phone is fine too?", "Could you speak a little more slower? Did you say a phone is fine too?"], fr: "Vous pourriez parler un peu plus lentement ? Vous avez dit qu'un téléphone convient aussi ?", why: "Slowly is the adverb: more slowly. Did you say…? to check." },
      { p: "Sorry, yes: I'm going too fast! A phone is absolutely fine. Any other questions?", fr: "Pardon, oui : je vais trop vite ! Un téléphone convient tout à fait. D'autres questions ?" },
      { y: ["Just one: how do you spell the name of the website you mentioned?", "Just one: how do you write the name of the website you mentioned it?", "Just one: how you spell the name of the website you mentioned?"], fr: "Juste une : comment s'écrit le nom du site que vous avez mentionné ?", why: "How do you spell…? needs do. Don't add it at the end of a relative clause." }
    ] }
  );

  W.READINGS.push({
    id: "remember", level: "B1", icon: "brain", title: "How to remember what you learn", title_fr: "Comment retenir ce qu'on apprend", genre: "Article",
    intro: "An article about what research says on memory and studying: the spacing effect, testing yourself and sleep. Verbs + person + to (encouraged her to…) and the vocabulary of learning.",
    intro_fr: "Un article sur ce que dit la recherche à propos de la mémoire et des révisions : l'effet d'espacement, le fait de s'interroger et le sommeil. Verbes + personne + to (encouraged her to…) et vocabulaire de l'apprentissage.",
    paragraphs: [
      { en: "Mei, a nurse from Manchester, decided to learn Spanish last year. Every evening, she read her notes again and highlighted the important words in yellow. “I spent hours on it,” she says, “but a week later, I couldn't remember anything.” Mei's experience is extremely common. The problem is not her memory: it's her method.", fr: "Mei, une infirmière de Manchester, a décidé l'an dernier d'apprendre l'espagnol. Chaque soir, elle relisait ses notes et surlignait les mots importants en jaune. « J'y passais des heures, raconte-t-elle, mais une semaine plus tard, je ne me souvenais de rien. » L'expérience de Mei est extrêmement courante. Le problème, ce n'est pas sa mémoire : c'est sa méthode." },
      { en: "In the 1880s, the German psychologist Hermann Ebbinghaus tested his own memory by learning long lists of nonsense words. He discovered that we forget new information very quickly: much of it disappears within a day, unless we review it. But he also noticed something encouraging. Each time he reviewed a list, he forgot it more slowly. This is now called the spacing effect: it's better to study a little and often, with gaps between sessions, than to study for hours the night before an exam.", fr: "Dans les années 1880, le psychologue allemand Hermann Ebbinghaus a testé sa propre mémoire en apprenant de longues listes de mots dénués de sens. Il a découvert que nous oublions très vite les nouvelles informations : une grande partie disparaît en une journée, sauf si on les revoit. Mais il a aussi remarqué quelque chose d'encourageant. Chaque fois qu'il revoyait une liste, il l'oubliait plus lentement. C'est ce qu'on appelle aujourd'hui l'effet d'espacement : il vaut mieux étudier un peu et souvent, avec des pauses entre les séances, que pendant des heures la veille d'un examen." },
      { en: "The second idea surprises many students: testing yourself is one of the best ways to learn. When you try to remember an answer without looking at your notes, your brain has to work harder, and that effort makes the memory stronger. A large review of learning research published in 2013 found that practice tests and spaced study were among the most effective techniques, while rereading and highlighting were among the least effective.", fr: "La deuxième idée surprend beaucoup d'étudiants : s'interroger soi-même est l'une des meilleures façons d'apprendre. Quand tu essaies de retrouver une réponse sans regarder tes notes, ton cerveau doit travailler davantage, et cet effort renforce le souvenir. Une vaste synthèse des recherches sur l'apprentissage, publiée en 2013, a montré que les tests d'entraînement et l'étude espacée faisaient partie des techniques les plus efficaces, tandis que la relecture et le surlignage faisaient partie des moins efficaces." },
      { en: "Finally, don't forget sleep. While we sleep, the brain sorts the day's information and stores what seems important. Students who stay up all night to revise often remember less than those who go to bed at a normal time.", fr: "Enfin, n'oublie pas le sommeil. Pendant que nous dormons, le cerveau trie les informations de la journée et garde en mémoire ce qui semble important. Les étudiants qui passent la nuit à réviser retiennent souvent moins que ceux qui se couchent à une heure normale." },
      { en: "So what does Mei do now? She uses flashcards on her phone for ten minutes a day, and she always tries to answer before turning the card over. Her teacher also encouraged her to explain new grammar rules to her husband, who doesn't speak Spanish. “He thinks I'm crazy,” she laughs, “but I remember everything I explain to him.”", fr: "Alors, que fait Mei maintenant ? Elle utilise des cartes de révision sur son téléphone dix minutes par jour, et elle essaie toujours de répondre avant de retourner la carte. Sa professeure l'a aussi encouragée à expliquer les nouvelles règles de grammaire à son mari, qui ne parle pas espagnol. « Il me trouve folle, dit-elle en riant, mais je retiens tout ce que je lui explique. »" }
    ],
    glossary: { "highlighted": "surligné", "nonsense": "dénué de sens", "review": "revoir, réviser ; une synthèse", "encouraging": "encourageant", "gaps": "pauses, intervalles", "brain": "cerveau", "rereading": "la relecture", "highlighting": "le surlignage", "sorts": "trie", "stores": "garde, stocke", "stay up": "veiller, rester debout", "revise": "réviser", "turning": "retourner", "crazy": "fou, folle", "laughs": "rit" },
    questions: [
      { q: "What was wrong with Mei's first method?", o: ["She didn't study enough", "Rereading and highlighting didn't help her remember", "Her notes were in the wrong language"], a: 1 },
      { q: "What did Ebbinghaus discover?", o: ["We forget quickly, but each review helps us forget more slowly", "We never forget lists of words", "Studying the night before an exam is the best method"], a: 0 },
      { q: "Why does testing yourself work?", o: ["Because it's faster than reading", "Because the effort of remembering makes the memory stronger", "Because teachers like tests"], a: 1 },
      { q: "What does the text say about sleep?", o: ["It's a waste of time before an exam", "It helps the brain keep important information", "It makes us forget new words"], a: 1 },
      { q: "Why does Mei explain grammar to her husband?", o: ["Because he's learning Spanish too", "Because explaining helps her remember", "Because he asked her to"], a: 1 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-b1-9", unit: "b1-9", level: "B1", icon: "phone",
    title: "Signing up for a class", title_fr: "S'inscrire à un cours",
    context: "Dan calls an adult education centre to ask about evening classes. Grace answers the phone.", context_fr: "Dan appelle un centre de formation pour adultes pour se renseigner sur les cours du soir. Grace répond au téléphone.",
    words: [["pottery", "la poterie"], ["woodwork", "la menuiserie"], ["clay", "l'argile"], ["an apron", "un tablier"], ["a waiting list", "une liste d'attente"]],
    lines: [["Grace", "Good afternoon, Riverside Adult Education Centre, Grace speaking. How can I help?", "en-GB"], ["Dan", "Hi. I'm calling about your evening classes. I'd like to learn something practical, maybe pottery or woodwork, but I'm a complete beginner.", "en-US"], ["Grace", "No problem: most of our students are beginners. The pottery course starts on the fourteenth and runs on Tuesday evenings, from seven to nine.", "en-GB"], ["Dan", "Sorry, I didn't catch that. Did you say the fourth or the fourteenth?", "en-US"], ["Grace", "The fourteenth. One-four. It's a twelve-week course, and it costs a hundred and eighty pounds, including the clay.", "en-GB"], ["Dan", "OK. And do I have to bring any equipment?", "en-US"], ["Grace", "Just an apron and old clothes. The teacher will ask you to wear shoes that you don't mind getting dirty.", "en-GB"], ["Dan", "Makes sense. What about woodwork? My wife wants me to make a bookcase for the living room!", "en-US"], ["Grace", "Woodwork is on Thursdays, but I'm afraid it's full. I can put you on the waiting list, if you like.", "en-GB"], ["Dan", "What do you mean by the waiting list, exactly? Is there a good chance I'll get a place?", "en-US"], ["Grace", "If someone cancels, we call the first person on the list. It happens quite often in the first week. But I'd advise you to sign up for pottery now, so that you don't have to wait.", "en-GB"], ["Dan", "Good idea. Let's do that. Can I pay by card over the phone?", "en-US"], ["Grace", "Of course. Could I take your full name first?", "en-GB"]],
    gist: ["Why is Dan calling?", ["To find out about evening classes", "To complain about a course", "To cancel his registration"]],
    detail: [["When does the pottery course start?", ["On the fourteenth", "On the fourth", "On a Thursday"]], ["What do students need to bring?", ["An apron and old clothes", "Their own clay", "Nothing at all"]], ["Why can't Dan join the woodwork course now?", ["It's full.", "It's too expensive.", "It's for advanced students."]], ["What does Grace advise him to do?", ["Sign up for pottery now", "Wait for the woodwork course", "Call back next week"]]],
    decode: ["Did you say the fourth or the fourteenth?", "I'd advise you to sign up for pottery now"],
    tip: "Numbers like fourteen and forty are easy to confuse. In fourteen, the stress is at the end (four-TEEN); in forty, it's at the beginning (FOR-ty). When it matters, check: Did you say fourteen, one-four?", tip_fr: "Les nombres comme fourteen et forty se confondent facilement. Dans fourteen, l'accent est à la fin (four-TEEN) ; dans forty, il est au début (FOR-ty). Quand c'est important, vérifie : Did you say fourteen, one-four?"
  }]);

  W.PROMPTS.push({ id: "b1-learn", level: "B1", q: "Tell me about something you learnt to do as an adult, or would like to learn.", fr: "Parle-moi de quelque chose que tu as appris à faire adulte, ou que tu aimerais apprendre.", time: 90,
    phrases: ["A few years ago, I decided to learn…", "At first, I found it… because…", "My teacher encouraged me to…", "What helped me most was…", "If I had more time, I'd like to learn…"],
    model: "A few years ago, I decided to learn to swim properly, because I'd always been a bit afraid of deep water. At first, I found it really hard, because I couldn't breathe and swim at the same time. My teacher encouraged me to go slowly and to practise twice a week, even for twenty minutes. What helped me most was setting small goals, like one length without stopping. Now I can swim a kilometre! If I had more time, I'd like to learn to play the guitar." });

  W.WRITING_GUIDE["b1-9"] = { genre: "An email giving advice (B1 Preliminary)", genre_fr: "Un e-mail de conseils (B1 Preliminary)",
    plan: [["A friendly opening that reacts to your friend's news.", "Une ouverture amicale qui réagit à la nouvelle de ton ami."], ["A first piece of advice, with a reason.", "Un premier conseil, avec une raison."], ["A second piece of advice.", "Un deuxième conseil."], ["A personal touch: your own experience.", "Une touche personnelle : ton expérience."], ["An invitation or a wish, and a friendly closing.", "Une invitation ou un souhait, et une formule finale amicale."]],
    marks: [["It was great to hear from you!", "a friendly opening", "une ouverture amicale"], ["I'd advise you to download", "advise + person + to", "advise + personne + to"], ["because testing yourself is much more effective", "a reason for your advice", "une raison pour ton conseil"], ["My teacher always told me not to be afraid", "tell + person + not to", "tell + personne + not to"], ["If I were you, I'd", "advice with the second conditional", "un conseil au deuxième conditionnel"], ["so that you can practise speaking", "so that: the purpose", "so that : le but"], ["I'd love you to visit me", "would love + person + to", "would love + personne + to"], ["Let me know how it goes!", "an informal closing", "une formule finale informelle"]] };

  /* The unit, after In the news; the studies theme and the text about language mistakes move here from b1-1. */
  const move = (from, key, ids) => { const u = W.COURSE.find((x) => x.id === from); if (u) u[key] = (u[key] || []).filter((x) => !ids.includes(x)); };
  move("b1-1", "vocab", ["etudes"]); move("b1-1", "extra", ["mistakes"]);
  const unit = { id: "b1-9", level: "B1", icon: "graduation-cap", title: "Learning for life", title_fr: "Apprendre toute sa vie",
    intro: "It's never too late to learn: a language, an instrument, a craft. In this unit, you'll talk about learning and teaching, say what people want or expect you to do, ask for clarification when you don't understand, and discover what research says about the best ways to remember.",
    intro_fr: "Il n'est jamais trop tard pour apprendre : une langue, un instrument, un savoir-faire. Dans cette unité, tu parleras d'apprentissage et d'enseignement, tu diras ce que les gens veulent ou attendent de toi, tu demanderas des précisions quand tu ne comprends pas, et tu découvriras ce que dit la recherche sur les meilleures façons de retenir.",
    can: ["Say what people want, ask or expect you to do (want someone to do)", "Ask for clarification and check that you've understood", "Understand an article about effective ways to study", "Write an email giving advice"],
    can_fr: ["Dire ce que les gens veulent, demandent ou attendent de toi (want someone to do)", "Demander des précisions et vérifier que tu as bien compris", "Comprendre un article sur les façons efficaces d'étudier", "Écrire un e-mail pour donner des conseils"],
    lessons: [161, 162], vocab: ["learningB1", "etudes"], reading: "remember", extra: ["mistakes"], prompt: "b1-learn",
    writing: { task: "Your English friend Ben has written to you: “I want to learn French, but I've only got twenty minutes a day. What should I do? Can you recommend anything?” Write an email to Ben (100-130 words).", task_fr: "Ton ami anglais Ben t'a écrit : « Je veux apprendre le français, mais je n'ai que vingt minutes par jour. Que devrais-je faire ? Tu peux me conseiller quelque chose ? » Écris un e-mail à Ben (100-130 mots).", words: "100-130",
      tips: ["It was great to hear from you!", "I'd advise you to…", "If I were you, I'd…", "My teacher always told me to…", "Let me know how it goes!"],
      checklist: ["I answered Ben's two questions", "I used at least two verbs + person + to (advise you to, told me to…)", "I gave reasons for my advice (because, so that)", "I used an informal opening and closing", "I stayed between 100 and 130 words"],
      model: "Hi Ben,\n\nIt was great to hear from you! I'm so happy that you want to learn French.\n\nTwenty minutes a day is enough if you use them well. First, I'd advise you to download a flashcard app and test yourself every morning, because testing yourself is much more effective than rereading your notes. Then, try to listen to French every day, even a short podcast on the way to work.\n\nMy teacher always told me not to be afraid of mistakes, and she was right. If I were you, I'd find a language exchange partner online, so that you can practise speaking.\n\nI'd love you to visit me next summer and try out your French!\n\nLet me know how it goes!\nClaire" } };
  W.COURSE.splice(W.COURSE.findIndex((u) => u.id === "b1-5"), 0, unit);
})();
