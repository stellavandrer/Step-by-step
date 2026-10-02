/* "Everyday English" lessons (functional language), A2. */
window.LESSONS.push(
{
  id: 106, after: 13, level: "A2", kind: "functional", icon: "calendar",
  title: "Everyday English: invitations and plans", title_fr: "Anglais pratique : inviter et faire des projets",
  subtitle: "Invite, suggest, accept and refuse politely.", subtitle_fr: "Inviter, proposer, accepter et refuser poliment.",
  body: `
<h2>Inviting</h2>
<p><s-en>Would you like to come to my party on Saturday?</s-en></p>
<p><s-en>Are you free on Friday evening?</s-en> · <s-en>Do you fancy a coffee?</s-en> (UK, informal)</p>
<h2>Suggesting</h2>
<p><s-en>Let's go to the cinema.</s-en> · <s-en>Shall we meet at seven?</s-en> · <s-en>How about Sunday?</s-en> · <s-en>Why don't we eat out?</s-en></p>
<div class="tip">After <b>How about</b>, use a noun or -ing: <s-en>How about going to the beach?</s-en></div>
<h2>Accepting</h2>
<p><s-en>I'd love to!</s-en> · <s-en>That sounds great.</s-en> · <s-en>Good idea!</s-en> · <s-en>Why not?</s-en></p>
<h2>Refusing politely</h2>
<p><s-en>I'm sorry, I can't. I'm busy on Saturday.</s-en></p>
<p><s-en>I'd love to, but I'm working that day.</s-en> · <s-en>Maybe another time?</s-en></p>
<div class="warn">A simple “No” sounds rude in English. Always give a short reason and, if you can, suggest another time.</div>
`,
  body_fr: `
<h2>Inviter</h2>
<p><s-en>Would you like to come to my party on Saturday?</s-en> (Tu voudrais venir à ma fête samedi ?)</p>
<p><s-en>Are you free on Friday evening?</s-en> (Tu es libre vendredi soir ?) · <s-en>Do you fancy a coffee?</s-en> (Ça te dit, un café ? UK, familier)</p>
<h2>Proposer</h2>
<p><s-en>Let's go to the cinema.</s-en> (Allons au cinéma.) · <s-en>Shall we meet at seven?</s-en> (On se retrouve à sept heures ?) · <s-en>How about Sunday?</s-en> (Et dimanche ?) · <s-en>Why don't we eat out?</s-en> (Et si on allait au restaurant ?)</p>
<div class="tip">Après <b>How about</b>, on met un nom ou -ing : <s-en>How about going to the beach?</s-en></div>
<h2>Accepter</h2>
<p><s-en>I'd love to!</s-en> (Avec plaisir !) · <s-en>That sounds great.</s-en> (Ça a l'air super.) · <s-en>Good idea!</s-en> · <s-en>Why not?</s-en> (Pourquoi pas ?)</p>
<h2>Refuser poliment</h2>
<p><s-en>I'm sorry, I can't. I'm busy on Saturday.</s-en> (Désolée, je ne peux pas. Je suis prise samedi.)</p>
<p><s-en>I'd love to, but I'm working that day.</s-en> (J'aimerais bien, mais je travaille ce jour-là.) · <s-en>Maybe another time?</s-en> (Une autre fois, peut-être ?)</p>
<div class="warn">Un simple « No » paraît impoli en anglais. Donne toujours une petite raison et, si possible, propose un autre moment.</div>
`,
  examples: [
    ["Would you like to come for dinner on Friday?", "Tu voudrais venir dîner vendredi ?"],
    ["I'd love to! What time?", "Avec plaisir ! À quelle heure ?"],
    ["Shall we meet in front of the cinema?", "On se retrouve devant le cinéma ?"],
    ["How about going for a walk?", "Et si on allait se promener ?"],
    ["I'm sorry, I can't. Maybe another time?", "Désolée, je ne peux pas. Une autre fois ?"]
  ],
  quiz: [
    { q: "Complete: “How about ___ to the beach?”", q_fr: "Complète : « How about ___ to the beach? »", o: ["go", "going", "to go"], a: 1, ex: "How about + -ing.", ex_fr: "How about + -ing." },
    { q: "The most polite way to refuse an invitation:", q_fr: "La façon la plus polie de refuser une invitation :", o: ["No.", "I don't want.", "I'd love to, but I'm busy that day."], a: 2, ex: "Give a reason, kindly.", ex_fr: "Donne une raison, gentiment." },
    { q: "Translate: « On se retrouve à sept heures ? »", o: ["Shall we meet at seven?", "Do we meet at seven?", "Will we meeting at seven?"], a: 0, ex: "Shall we…? = a suggestion.", ex_fr: "Shall we…? = une proposition." },
    { q: "“Do you fancy a coffee?” means:", q_fr: "« Do you fancy a coffee? » veut dire :", o: ["Ça te dit, un café ?", "Tu as payé le café ?", "Tu aimes le café chic ?"], a: 0, ex: "Fancy = have a wish for (UK, informal).", ex_fr: "Fancy = avoir envie de (UK, familier)." }
  ]
},
{
  id: 107, after: 15, level: "A2", kind: "functional", icon: "phone",
  title: "Everyday English: on the phone", title_fr: "Anglais pratique : au téléphone",
  subtitle: "Call someone, leave a message, deal with problems.", subtitle_fr: "Appeler, laisser un message, gérer les problèmes.",
  body: `
<p>Phoning is difficult in a foreign language because you can't see the person. These phrases will help you a lot.</p>
<h2>Starting a call</h2>
<p><s-en>Hello, this is Stella Martin.</s-en> (not “I am Stella” on the phone)</p>
<p><s-en>Could I speak to Mr Jones, please?</s-en> · <s-en>Is Sarah there, please?</s-en></p>
<h2>What the other person says</h2>
<p><s-en>Speaking.</s-en> (= it's me) · <s-en>Hold on, please.</s-en> · <s-en>I'll put you through.</s-en> · <s-en>I'm afraid she's not available at the moment.</s-en></p>
<h2>Messages</h2>
<p><s-en>Can I leave a message?</s-en> · <s-en>Could you ask her to call me back?</s-en> · <s-en>Can I take a message?</s-en></p>
<h2>Problems</h2>
<p><s-en>Sorry, I can't hear you very well.</s-en> · <s-en>The line is bad.</s-en> · <s-en>Could you say that again?</s-en> · <s-en>I think you have the wrong number.</s-en></p>
<div class="tip">Have a pen ready, and ask people to spell names and repeat numbers: <s-en>Could you spell that for me?</s-en></div>
`,
  body_fr: `
<p>Téléphoner est difficile dans une langue étrangère parce qu'on ne voit pas la personne. Ces phrases vont beaucoup t'aider.</p>
<h2>Commencer un appel</h2>
<p><s-en>Hello, this is Stella Martin.</s-en> (Bonjour, c'est Stella Martin. On ne dit pas « I am Stella » au téléphone.)</p>
<p><s-en>Could I speak to Mr Jones, please?</s-en> (Pourrais-je parler à M. Jones ?) · <s-en>Is Sarah there, please?</s-en> (Sarah est là ?)</p>
<h2>Ce que dit l'autre personne</h2>
<p><s-en>Speaking.</s-en> (C'est moi.) · <s-en>Hold on, please.</s-en> (Ne quittez pas.) · <s-en>I'll put you through.</s-en> (Je vous la passe.) · <s-en>I'm afraid she's not available at the moment.</s-en> (Elle n'est pas disponible pour le moment.)</p>
<h2>Les messages</h2>
<p><s-en>Can I leave a message?</s-en> (Je peux laisser un message ?) · <s-en>Could you ask her to call me back?</s-en> (Pourriez-vous lui demander de me rappeler ?) · <s-en>Can I take a message?</s-en> (Voulez-vous laisser un message ?)</p>
<h2>Les problèmes</h2>
<p><s-en>Sorry, I can't hear you very well.</s-en> (Je vous entends mal.) · <s-en>The line is bad.</s-en> (La ligne est mauvaise.) · <s-en>Could you say that again?</s-en> · <s-en>I think you have the wrong number.</s-en> (Je crois que vous vous êtes trompé de numéro.)</p>
<div class="tip">Garde un stylo à portée de main, et fais épeler les noms et répéter les numéros : <s-en>Could you spell that for me?</s-en></div>
`,
  examples: [
    ["Hello, this is Stella. Could I speak to Mark, please?", "Bonjour, c'est Stella. Pourrais-je parler à Mark ?"],
    ["Hold on, I'll put you through.", "Ne quittez pas, je vous le passe."],
    ["I'm afraid he's in a meeting.", "Je suis désolée, il est en réunion."],
    ["Could you ask him to call me back?", "Pourriez-vous lui demander de me rappeler ?"],
    ["Sorry, I think you have the wrong number.", "Désolée, je crois que vous vous trompez de numéro."]
  ],
  quiz: [
    { q: "How do you say who you are on the phone?", q_fr: "Comment dire qui tu es au téléphone ?", o: ["I am Stella.", "This is Stella.", "Here is Stella."], a: 1, ex: "On the phone: This is…", ex_fr: "Au téléphone : This is…" },
    { q: "Translate: « Ne quittez pas. »", o: ["Don't leave.", "Hold on, please.", "Stay here."], a: 1, ex: "Hold on = ne quittez pas.", ex_fr: "Hold on = ne quittez pas." },
    { q: "Translate: « Pourriez-vous lui demander de me rappeler ? »", o: ["Could you ask her to call me back?", "Could you ask her call me again?", "Could you tell her recall me?"], a: 0, ex: "Call back = rappeler.", ex_fr: "Call back = rappeler." },
    { q: "Someone asks for “Sarah” and it's you. You say:", q_fr: "On demande « Sarah » et c'est toi. Tu dis :", o: ["Speaking.", "It's I.", "Me."], a: 0, ex: "Speaking = c'est moi (on the phone).", ex_fr: "Speaking = c'est moi (au téléphone)." }
  ]
},
{
  id: 108, after: 14, level: "A2", kind: "functional", icon: "plane",
  title: "Everyday English: at the airport and the hotel", title_fr: "Anglais pratique : à l'aéroport et à l'hôtel",
  subtitle: "Check in, find your gate, book a room, solve a problem.", subtitle_fr: "S'enregistrer, trouver sa porte, réserver une chambre, régler un problème.",
  body: `
<h2>At the airport</h2>
<p><s-en>Where is the check-in desk for flight BA 304?</s-en></p>
<p><s-en>Can I have a window seat, please?</s-en> (or an aisle seat)</p>
<p><s-en>How many bags are you checking in?</s-en> — <s-en>Just one, and this is my hand luggage.</s-en></p>
<p><s-en>Which gate is it?</s-en> · <s-en>Is the flight on time?</s-en> · <s-en>The flight is delayed.</s-en></p>
<h2>At the hotel</h2>
<p><s-en>I have a reservation under the name Martin.</s-en></p>
<p><s-en>I'd like a double room for two nights, please.</s-en></p>
<p><s-en>Is breakfast included?</s-en> · <s-en>What time is check-out?</s-en> · <s-en>What's the wifi password?</s-en></p>
<h2>Polite complaints</h2>
<p><s-en>Excuse me, there's a problem with my room. The shower doesn't work.</s-en></p>
<p><s-en>The room is very noisy. Could I change rooms, please?</s-en></p>
<div class="tip">Start with <s-en>Excuse me</s-en> or <s-en>I'm sorry, but…</s-en>: British people complain very politely, and it works better.</div>
`,
  body_fr: `
<h2>À l'aéroport</h2>
<p><s-en>Where is the check-in desk for flight BA 304?</s-en> (Où est le comptoir d'enregistrement du vol BA 304 ?)</p>
<p><s-en>Can I have a window seat, please?</s-en> (Je peux avoir une place côté hublot ? Ou côté couloir : an aisle seat)</p>
<p><s-en>How many bags are you checking in?</s-en> (Combien de bagages enregistrez-vous ?) — <s-en>Just one, and this is my hand luggage.</s-en> (Un seul, et voici mon bagage cabine.)</p>
<p><s-en>Which gate is it?</s-en> (C'est quelle porte ?) · <s-en>Is the flight on time?</s-en> (Le vol est à l'heure ?) · <s-en>The flight is delayed.</s-en> (Le vol est retardé.)</p>
<h2>À l'hôtel</h2>
<p><s-en>I have a reservation under the name Martin.</s-en> (J'ai une réservation au nom de Martin.)</p>
<p><s-en>I'd like a double room for two nights, please.</s-en> (Je voudrais une chambre double pour deux nuits.)</p>
<p><s-en>Is breakfast included?</s-en> (Le petit-déjeuner est compris ?) · <s-en>What time is check-out?</s-en> (À quelle heure faut-il libérer la chambre ?) · <s-en>What's the wifi password?</s-en></p>
<h2>Se plaindre poliment</h2>
<p><s-en>Excuse me, there's a problem with my room. The shower doesn't work.</s-en> (Il y a un problème avec ma chambre. La douche ne marche pas.)</p>
<p><s-en>The room is very noisy. Could I change rooms, please?</s-en> (La chambre est très bruyante. Pourrais-je changer de chambre ?)</p>
<div class="tip">Commence par <s-en>Excuse me</s-en> ou <s-en>I'm sorry, but…</s-en> : les Britanniques se plaignent très poliment, et ça marche mieux.</div>
`,
  examples: [
    ["Can I have an aisle seat, please?", "Je peux avoir une place côté couloir ?"],
    ["Is the flight on time?", "Le vol est-il à l'heure ?"],
    ["I have a reservation under the name Martin.", "J'ai une réservation au nom de Martin."],
    ["Is breakfast included?", "Le petit-déjeuner est-il compris ?"],
    ["Could I change rooms, please?", "Pourrais-je changer de chambre ?"]
  ],
  quiz: [
    { q: "Translate: « J'ai une réservation au nom de Martin. »", o: ["I have a reservation at the name Martin.", "I have a reservation under the name Martin.", "I have a booking on Martin name."], a: 1, ex: "Under the name…", ex_fr: "Under the name… = au nom de…" },
    { q: "« Une place côté hublot » is:", q_fr: "« Une place côté hublot » se dit :", o: ["a window seat", "a hole seat", "an aisle seat"], a: 0, ex: "Window seat. (Aisle seat = côté couloir.)", ex_fr: "Window seat. (Aisle seat = côté couloir.)" },
    { q: "The best way to complain:", q_fr: "La meilleure façon de se plaindre :", o: ["Your shower is broken!", "Excuse me, the shower in my room doesn't work.", "I want another room now."], a: 1, ex: "Polite and clear.", ex_fr: "Poli et clair." },
    { q: "“The flight is delayed” means:", q_fr: "« The flight is delayed » veut dire :", o: ["Le vol est annulé.", "Le vol est retardé.", "Le vol est complet."], a: 1, ex: "Delayed = retardé. Cancelled = annulé.", ex_fr: "Delayed = retardé. Cancelled = annulé." }
  ]
},
{
  id: 109, after: 18, level: "A2", kind: "functional", icon: "stethoscope",
  title: "Everyday English: at the doctor's", title_fr: "Anglais pratique : chez le médecin",
  subtitle: "Make an appointment, describe symptoms, understand advice.", subtitle_fr: "Prendre rendez-vous, décrire des symptômes, comprendre des conseils.",
  body: `
<h2>Making an appointment</h2>
<p><s-en>I'd like to make an appointment with the doctor, please.</s-en> · <s-en>Is there anything available today?</s-en></p>
<h2>Describing the problem</h2>
<p><s-en>I don't feel well.</s-en> · <s-en>I feel sick.</s-en> · <s-en>I've got a headache.</s-en> · <s-en>I've got a sore throat.</s-en> · <s-en>I've got a temperature.</s-en> · <s-en>My back hurts.</s-en> · <s-en>It hurts here.</s-en></p>
<table>
<tr><th>English</th><th>Meaning</th></tr>
<tr><td>a headache / a stomach ache / toothache</td><td>a pain in your head / stomach / tooth</td></tr>
<tr><td>a sore throat</td><td>your throat hurts</td></tr>
<tr><td>a temperature / a fever</td><td>your body is too hot</td></tr>
<tr><td>a cough / a cold / the flu</td><td>common illnesses</td></tr>
</table>
<h2>What the doctor says</h2>
<p><s-en>What seems to be the problem?</s-en> · <s-en>How long have you had it?</s-en> · <s-en>Take these tablets twice a day.</s-en> · <s-en>You should rest for a few days.</s-en></p>
<div class="tip">In the UK, you see a GP (general practitioner) first. In an emergency, call 999 (UK) or 911 (US). In Europe, 112 works everywhere.</div>
`,
  body_fr: `
<h2>Prendre rendez-vous</h2>
<p><s-en>I'd like to make an appointment with the doctor, please.</s-en> (Je voudrais prendre rendez-vous avec le médecin.) · <s-en>Is there anything available today?</s-en> (Il y a de la place aujourd'hui ?)</p>
<h2>Décrire le problème</h2>
<p><s-en>I don't feel well.</s-en> (Je ne me sens pas bien.) · <s-en>I feel sick.</s-en> (J'ai la nausée / je me sens malade.) · <s-en>I've got a headache.</s-en> (J'ai mal à la tête.) · <s-en>I've got a sore throat.</s-en> (J'ai mal à la gorge.) · <s-en>I've got a temperature.</s-en> (J'ai de la fièvre.) · <s-en>My back hurts.</s-en> (J'ai mal au dos.) · <s-en>It hurts here.</s-en> (J'ai mal ici.)</p>
<table>
<tr><th>Anglais</th><th>Sens</th></tr>
<tr><td>a headache / a stomach ache / toothache</td><td>mal de tête / mal au ventre / mal aux dents</td></tr>
<tr><td>a sore throat</td><td>mal à la gorge</td></tr>
<tr><td>a temperature / a fever</td><td>de la fièvre</td></tr>
<tr><td>a cough / a cold / the flu</td><td>une toux / un rhume / la grippe</td></tr>
</table>
<h2>Ce que dit le médecin</h2>
<p><s-en>What seems to be the problem?</s-en> (Qu'est-ce qui ne va pas ?) · <s-en>How long have you had it?</s-en> (Depuis combien de temps ?) · <s-en>Take these tablets twice a day.</s-en> (Prenez ces comprimés deux fois par jour.) · <s-en>You should rest for a few days.</s-en> (Vous devriez vous reposer quelques jours.)</p>
<div class="tip">Au Royaume-Uni, on consulte d'abord un GP (médecin généraliste). En urgence : 999 (UK) ou 911 (US). En Europe, le 112 fonctionne partout.</div>
`,
  examples: [
    ["I'd like to make an appointment, please.", "Je voudrais prendre rendez-vous, s'il vous plaît."],
    ["I've got a terrible headache.", "J'ai un terrible mal de tête."],
    ["How long have you had this cough?", "Depuis combien de temps avez-vous cette toux ?"],
    ["Take one tablet three times a day.", "Prenez un comprimé trois fois par jour."],
    ["You should stay in bed.", "Vous devriez rester au lit."]
  ],
  quiz: [
    { q: "Translate: « J'ai mal à la gorge. »", o: ["I've got a sore throat.", "I've got a throat pain.", "I have bad at the throat."], a: 0, ex: "A sore throat.", ex_fr: "A sore throat = mal à la gorge." },
    { q: "Translate: « J'ai de la fièvre. »", o: ["I've got a temperature.", "I am fever.", "I have hot."], a: 0, ex: "I've got a temperature / a fever.", ex_fr: "I've got a temperature / a fever." },
    { q: "“Take these tablets twice a day” means:", q_fr: "« Take these tablets twice a day » veut dire :", o: ["deux comprimés par jour en une fois", "ces comprimés deux fois par jour", "un comprimé tous les deux jours"], a: 1, ex: "Twice = two times.", ex_fr: "Twice = deux fois." },
    { q: "Translate: « Je voudrais prendre rendez-vous. »", o: ["I'd like to take a meeting.", "I'd like to make an appointment.", "I'd like to have a date."], a: 1, ex: "Make an appointment (doctor, hairdresser…).", ex_fr: "Make an appointment (médecin, coiffeur…)." }
  ]
},
{
  id: 110, after: 22, level: "A2", kind: "functional", icon: "message-square-more",
  title: "Everyday English: giving your opinion", title_fr: "Anglais pratique : donner son avis",
  subtitle: "Say what you think, agree and disagree simply.", subtitle_fr: "Dire ce que tu penses, être d'accord ou pas, simplement.",
  body: `
<h2>Giving your opinion</h2>
<p><s-en>I think it's a good idea.</s-en> · <s-en>I don't think it's a good idea.</s-en></p>
<div class="warn">In English, put the negative on <b>think</b>: <s-en>I don't think he's right.</s-en> (more natural than “I think he isn't right”).</div>
<p><s-en>In my opinion,…</s-en> · <s-en>For me,…</s-en> · <s-en>I believe that…</s-en></p>
<h2>Asking for someone's opinion</h2>
<p><s-en>What do you think?</s-en> · <s-en>What do you think about the new office?</s-en> · <s-en>Do you like it?</s-en></p>
<h2>Agreeing</h2>
<p><s-en>I agree.</s-en> · <s-en>You're right.</s-en> · <s-en>Me too.</s-en> · <s-en>Exactly!</s-en></p>
<h2>Disagreeing (politely)</h2>
<p><s-en>I don't agree.</s-en> · <s-en>I'm not sure.</s-en> · <s-en>I see what you mean, but…</s-en> · <s-en>Really? I think it's…</s-en></p>
<div class="warn">Say <s-en>I agree</s-en>, never “I am agree”. Agree is a verb!</div>
`,
  body_fr: `
<h2>Donner son avis</h2>
<p><s-en>I think it's a good idea.</s-en> (Je pense que c'est une bonne idée.) · <s-en>I don't think it's a good idea.</s-en> (Je ne pense pas que ce soit une bonne idée.)</p>
<div class="warn">En anglais, la négation se met sur <b>think</b> : <s-en>I don't think he's right.</s-en> (plus naturel que « I think he isn't right »).</div>
<p><s-en>In my opinion,…</s-en> (À mon avis) · <s-en>For me,…</s-en> (Pour moi) · <s-en>I believe that…</s-en> (Je crois que…)</p>
<h2>Demander l'avis de quelqu'un</h2>
<p><s-en>What do you think?</s-en> (Qu'en penses-tu ?) · <s-en>What do you think about the new office?</s-en> (Que penses-tu du nouveau bureau ?) · <s-en>Do you like it?</s-en></p>
<h2>Être d'accord</h2>
<p><s-en>I agree.</s-en> (Je suis d'accord.) · <s-en>You're right.</s-en> (Tu as raison.) · <s-en>Me too.</s-en> · <s-en>Exactly!</s-en> (Exactement !)</p>
<h2>Ne pas être d'accord (poliment)</h2>
<p><s-en>I don't agree.</s-en> · <s-en>I'm not sure.</s-en> (Je ne suis pas sûre.) · <s-en>I see what you mean, but…</s-en> (Je vois ce que tu veux dire, mais…) · <s-en>Really? I think it's…</s-en></p>
<div class="warn">On dit <s-en>I agree</s-en>, jamais « I am agree ». Agree est un verbe !</div>
`,
  examples: [
    ["What do you think about this logo?", "Que penses-tu de ce logo ?"],
    ["I think it's too dark.", "Je pense qu'il est trop sombre."],
    ["I don't think it's expensive.", "Je ne pense pas que ce soit cher."],
    ["I agree with you.", "Je suis d'accord avec toi."],
    ["I see what you mean, but I prefer the blue one.", "Je vois ce que tu veux dire, mais je préfère le bleu."]
  ],
  quiz: [
    { q: "Translate: « Je suis d'accord. »", o: ["I am agree.", "I agree.", "I'm agreeing."], a: 1, ex: "Agree is a verb: I agree.", ex_fr: "Agree est un verbe : I agree." },
    { q: "The most natural sentence:", q_fr: "La phrase la plus naturelle :", o: ["I think it isn't a good idea.", "I don't think it's a good idea."], a: 1, ex: "The negative goes on think.", ex_fr: "La négation porte sur think." },
    { q: "Translate: « Qu'en penses-tu ? »", o: ["What do you think?", "How do you think?", "What you think?"], a: 0, ex: "What do you think?", ex_fr: "What do you think?" },
    { q: "Disagree politely:", q_fr: "Exprime un désaccord poliment :", o: ["You're wrong.", "I see what you mean, but I'm not sure.", "No, no, no."], a: 1, ex: "Soften it: I see what you mean, but…", ex_fr: "Adoucis : I see what you mean, but…" }
  ]
}
);
