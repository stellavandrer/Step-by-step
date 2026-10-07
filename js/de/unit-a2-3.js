/* Cours d'allemand, unité A2-3 « Health / La santé » : les verbes pronominaux (sich fühlen, ich wasche mir die
   Hände), wenn et les conseils avec sollte, chez le médecin et à la pharmacie. Explications et traductions en
   anglais ET en français. Personnages fictifs, prénoms allemands.
   Faits vérifiables seulement : arrêt de travail obligatoire à partir du quatrième jour de maladie (l'employeur peut
   le demander plus tôt) ; depuis 2023, le médecin le transmet électroniquement à la caisse (eAU) et le salarié
   prévient seulement son employeur ; 112 (urgences) et 116 117 (permanence médicale) ; Apotheke / Drogerie ; Rezept ;
   Gesundheitskarte. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "koerperDE", icon: "person-standing", title: "The body", title_fr: "Le corps", level: "A2", words: [
    ["der Hals, ¨-e", "the neck; the throat", "le cou ; la gorge", "Mir tut der Hals weh."],
    ["der Bauch, ¨-e", "the stomach, the belly", "le ventre", "Ich habe Bauchschmerzen."],
    ["der Magen, ¨", "the stomach", "l'estomac", "Mein Magen ist empfindlich."],
    ["der Arm, -e", "the arm", "le bras", "Er hat sich den Arm gebrochen."],
    ["das Bein, -e", "the leg", "la jambe", "Mein Bein tut weh."],
    ["die Hand, ¨-e", "the hand", "la main", "Ich wasche mir die Hände."],
    ["der Finger, -", "the finger", "le doigt", "Ich habe mir in den Finger geschnitten."],
    ["das Knie, -", "the knee", "le genou", "Nach dem Joggen tut mir das Knie weh."],
    ["das Auge, -n", "the eye", "l'œil", "Meine Augen sind müde."],
    ["das Ohr, -en", "the ear", "l'oreille", "Ich habe Ohrenschmerzen."],
    ["die Nase, -n", "the nose", "le nez", "Meine Nase läuft."],
    ["der Mund, ¨-er", "the mouth", "la bouche", "Mach bitte den Mund auf."],
    ["der Zahn, ¨-e", "the tooth", "la dent", "Ich habe Zahnschmerzen."],
    ["das Herz, -en", "the heart", "le cœur", "Das Herz schlägt schnell."],
    ["die Haut", "the skin", "la peau", "Meine Haut ist sehr trocken."],
    ["der Körper, -", "the body", "le corps", "Sport ist gut für den Körper."]
  ] },
  { id: "krankheitDE", icon: "pill", title: "Feeling ill", title_fr: "Être malade", level: "A2", words: [
    ["gesund", "healthy", "en bonne santé", "Obst ist gesund."],
    ["die Gesundheit", "health", "la santé", "Sport ist gut für die Gesundheit."],
    ["das Fieber", "fever, temperature", "la fièvre", "Ich habe 39 Grad Fieber."],
    ["der Husten", "the cough", "la toux", "Ich habe Husten und Schnupfen."],
    ["der Schnupfen", "the cold, the runny nose", "le rhume", "Bei Schnupfen trinke ich viel Tee."],
    ["die Erkältung, -en", "the cold", "le rhume", "Ich habe eine Erkältung."],
    ["die Grippe", "the flu", "la grippe", "Sie liegt mit Grippe im Bett."],
    ["die Kopfschmerzen (pl)", "a headache", "le mal de tête", "Ich habe Kopfschmerzen."],
    ["die Bauchschmerzen (pl)", "a stomach ache", "le mal de ventre", "Das Kind hat Bauchschmerzen."],
    ["Mir ist schlecht.", "I feel sick.", "J'ai mal au cœur, j'ai la nausée.", "Nach dem Essen war mir schlecht."],
    ["sich erkälten", "to catch a cold", "attraper un rhume", "Ich habe mich erkältet."],
    ["sich fühlen", "to feel", "se sentir", "Wie fühlst du dich heute?"],
    ["sich ausruhen", "to rest", "se reposer", "Du musst dich ausruhen."],
    ["verletzt", "injured", "blessé", "Er ist am Knie verletzt."],
    ["die Allergie, -n", "the allergy", "l'allergie", "Ich habe eine Allergie gegen Nüsse."],
    ["husten", "to cough", "tousser", "Er hustet die ganze Nacht."],
    ["Gute Besserung!", "get well soon!", "bon rétablissement !", "Du bist krank? Gute Besserung!"],
    ["Gesundheit!", "bless you! (after a sneeze)", "à tes souhaits !", "Hatschi! — Gesundheit!"]
  ] },
  { id: "arztDE", icon: "stethoscope", title: "At the doctor's and the pharmacy", title_fr: "Chez le médecin et à la pharmacie", level: "A2", words: [
    ["die Arztpraxis, -praxen", "the doctor's surgery, the practice", "le cabinet médical", "Die Arztpraxis öffnet um acht."],
    ["das Wartezimmer, -", "the waiting room", "la salle d'attente", "Bitte nehmen Sie im Wartezimmer Platz."],
    ["die Krankenkasse, -n", "the health insurance fund", "la caisse d'assurance maladie", "Bei welcher Krankenkasse sind Sie?"],
    ["die Gesundheitskarte, -n", "the health insurance card", "la carte d'assurance maladie", "Haben Sie Ihre Gesundheitskarte dabei?"],
    ["untersuchen", "to examine", "examiner", "Die Ärztin untersucht den Patienten."],
    ["das Rezept, -e", "the prescription; the recipe", "l'ordonnance ; la recette", "Mit dem Rezept gehen Sie zur Apotheke."],
    ["das Medikament, -e", "the medicine", "le médicament", "Nehmen Sie das Medikament dreimal täglich."],
    ["die Tablette, -n", "the tablet, the pill", "le comprimé", "Ich nehme eine Tablette gegen Kopfschmerzen."],
    ["die Salbe, -n", "the ointment, the cream", "la pommade", "Die Salbe hilft gegen den Juckreiz."],
    ["die Krankmeldung, -en", "the sick note, the notice of illness", "l'arrêt maladie, l'avis d'arrêt", "Ich brauche eine Krankmeldung für die Arbeit."],
    ["krankgeschrieben sein", "to be signed off sick", "être en arrêt maladie", "Ich bin bis Freitag krankgeschrieben."],
    ["die Notaufnahme", "A&E, the emergency room", "les urgences", "In der Nacht ist nur die Notaufnahme offen."],
    ["der Notruf", "the emergency number", "le numéro d'urgence", "Der Notruf ist 112."],
    ["die Drogerie, -n", "the chemist's (cosmetics, hygiene)", "la droguerie (cosmétiques, hygiène)", "Zahnpasta kaufe ich in der Drogerie."],
    ["dreimal täglich", "three times a day", "trois fois par jour", "Nehmen Sie die Tabletten dreimal täglich."],
    ["der Patient, -en / die Patientin, -nen", "the patient (m) / (f)", "le patient / la patiente", "Die Patientin wartet schon."]
  ] });

  W.LESSONS.push(
  {
    id: 28, level: "A2", icon: "user-round",
    title: "Ich fühle mich nicht gut: reflexive verbs", title_fr: "Ich fühle mich nicht gut : les verbes pronominaux",
    subtitle: "Verbs with mich, dich, sich: how you feel, rest, wash, and catch a cold.", subtitle_fr: "Les verbes avec mich, dich, sich : comment tu te sens, te reposer, te laver, attraper un rhume.",
    body: `
<h2>Reflexive pronouns</h2>
<table>
<tr><th>Subject</th><th>Reflexive</th><th>Example</th></tr>
<tr><td><s-de>ich</s-de></td><td><s-de>mich</s-de></td><td><s-de>Ich fühle mich gut.</s-de></td></tr>
<tr><td><s-de>du</s-de></td><td><s-de>dich</s-de></td><td><s-de>Fühlst du dich besser?</s-de></td></tr>
<tr><td><s-de>er / sie / es</s-de></td><td><s-de>sich</s-de></td><td><s-de>Er ruht sich aus.</s-de></td></tr>
<tr><td><s-de>wir</s-de></td><td><s-de>uns</s-de></td><td><s-de>Wir setzen uns.</s-de></td></tr>
<tr><td><s-de>ihr</s-de></td><td><s-de>euch</s-de></td><td><s-de>Habt ihr euch erkältet?</s-de></td></tr>
<tr><td><s-de>sie / Sie</s-de></td><td><s-de>sich</s-de></td><td><s-de>Setzen Sie sich, bitte.</s-de></td></tr>
</table>
<p>English often has no "myself" where German has one: <s-de>sich fühlen</s-de> (to feel), <s-de>sich ausruhen</s-de> (to rest), <s-de>sich erkälten</s-de> (to catch a cold), <s-de>sich setzen</s-de> (to sit down), <s-de>sich freuen</s-de> (to be glad), <s-de>sich beeilen</s-de> (to hurry). In the Perfekt, they take <s-de>haben</s-de>: <s-de>Ich habe mich erkältet.</s-de></p>
<h2>Washing your hands: the dative</h2>
<p>When the sentence already has an object, often a part of the body, the reflexive pronoun is in the dative: <s-de>Ich wasche mir die Hände.</s-de> (I wash my hands.) · <s-de>Er hat sich den Arm gebrochen.</s-de> (He broke his arm.) German uses the article, not "my": <s-de>die Hände</s-de>, not <s-de>meine Hände</s-de>. Only <s-de>mir</s-de> and <s-de>dir</s-de> differ from the accusative forms.</p>
<div class="tip">Watch the position: in a statement the reflexive pronoun comes right after the verb (<s-de>Ich ruhe mich aus.</s-de>), and in a subordinate clause, often right after the subject: <s-de>…, weil ich mich nicht gut fühle.</s-de></div>
`,
    body_fr: `
<h2>Les pronoms réfléchis</h2>
<table>
<tr><th>Sujet</th><th>Réfléchi</th><th>Exemple</th></tr>
<tr><td><s-de>ich</s-de></td><td><s-de>mich</s-de></td><td><s-de>Ich fühle mich gut.</s-de></td></tr>
<tr><td><s-de>du</s-de></td><td><s-de>dich</s-de></td><td><s-de>Fühlst du dich besser?</s-de></td></tr>
<tr><td><s-de>er / sie / es</s-de></td><td><s-de>sich</s-de></td><td><s-de>Er ruht sich aus.</s-de></td></tr>
<tr><td><s-de>wir</s-de></td><td><s-de>uns</s-de></td><td><s-de>Wir setzen uns.</s-de></td></tr>
<tr><td><s-de>ihr</s-de></td><td><s-de>euch</s-de></td><td><s-de>Habt ihr euch erkältet?</s-de></td></tr>
<tr><td><s-de>sie / Sie</s-de></td><td><s-de>sich</s-de></td><td><s-de>Setzen Sie sich, bitte.</s-de></td></tr>
</table>
<p>Bonne nouvelle : beaucoup de verbes pronominaux allemands le sont aussi en français : <s-de>sich fühlen</s-de> (se sentir), <s-de>sich ausruhen</s-de> (se reposer), <s-de>sich setzen</s-de> (s'asseoir), <s-de>sich freuen</s-de> (se réjouir), <s-de>sich beeilen</s-de> (se dépêcher). D'autres non : <s-de>sich erkälten</s-de> (attraper un rhume). Différence importante : au Perfekt, ils se conjuguent avec <s-de>haben</s-de>, pas avec « être » : <s-de>Ich habe mich erkältet.</s-de> (J'ai attrapé un rhume.) · <s-de>Wir haben uns gesetzt.</s-de> (Nous avons pris place.)</p>
<h2>Se laver les mains : le datif</h2>
<p>Quand la phrase a déjà un complément, souvent une partie du corps, le pronom réfléchi est au datif : <s-de>Ich wasche mir die Hände.</s-de> (Je me lave les mains.) · <s-de>Er hat sich den Arm gebrochen.</s-de> (Il s'est cassé le bras.) Exactement comme en français : on dit « les mains », pas « mes mains ». Seuls <s-de>mir</s-de> et <s-de>dir</s-de> diffèrent de l'accusatif.</p>
<div class="tip">Attention à la place : dans une phrase déclarative, le pronom réfléchi se met juste après le verbe (<s-de>Ich ruhe mich aus.</s-de>), et dans une subordonnée, souvent juste après le sujet : <s-de>…, weil ich mich nicht gut fühle.</s-de></div>
`,
    examples: [
      ["Ich fühle mich heute nicht gut.", "I don't feel well today.", "Je ne me sens pas bien aujourd'hui."],
      ["Du musst dich ausruhen.", "You need to rest.", "Tu dois te reposer."],
      ["Ich habe mich gestern erkältet.", "I caught a cold yesterday.", "J'ai attrapé un rhume hier."],
      ["Setzen Sie sich, bitte.", "Sit down, please.", "Asseyez-vous, je vous en prie."],
      ["Wasch dir die Hände!", "Wash your hands!", "Lave-toi les mains !"],
      ["Er hat sich beim Skifahren das Bein gebrochen.", "He broke his leg skiing.", "Il s'est cassé la jambe au ski."],
      ["Wir müssen uns beeilen, die Praxis schließt um zwölf.", "We have to hurry, the surgery closes at twelve.", "Nous devons nous dépêcher, le cabinet ferme à midi."]
    ],
    quiz: [
      { q: "Complete: “Ich fühle ___ nicht gut.”", q_fr: "Complète : « Ich fühle ___ nicht gut. »", o: ["mir", "mich", "sich"], a: 1, ex: "sich fühlen, accusative: ich fühle mich.", ex_fr: "sich fühlen, accusatif : ich fühle mich." },
      { q: "Complete: “Er ruht ___ aus.”", q_fr: "Complète : « Er ruht ___ aus. »", o: ["ihn", "sich", "ihm"], a: 1, ex: "Third person: sich.", ex_fr: "Troisième personne : sich." },
      { q: "“I wash my hands.”", q_fr: "« Je me lave les mains. »", o: ["Ich wasche meine Hände mich.", "Ich wasche mir die Hände.", "Ich wasche mich die Hände."], a: 1, ex: "With another object: dative mir, and the article die.", ex_fr: "Avec un autre complément : datif mir, et l'article die." },
      { q: "The Perfekt of “sich erkälten”:", q_fr: "Le Perfekt de « sich erkälten » :", o: ["Ich bin mich erkältet.", "Ich habe mich erkältet.", "Ich habe erkältet."], a: 1, ex: "Reflexive verbs take haben.", ex_fr: "Les verbes pronominaux prennent haben." },
      { q: "“Sit down, please.” (formal)", q_fr: "« Asseyez-vous, je vous en prie. »", o: ["Setzen Sie sich, bitte.", "Setzen Sie, bitte.", "Sich setzen Sie, bitte."], a: 0, ex: "Imperative with Sie: verb + Sie + sich.", ex_fr: "Impératif avec Sie : verbe + Sie + sich." }
    ]
  },
  {
    id: 29, level: "A2", icon: "lightbulb",
    title: "Wenn du Fieber hast…: wenn and advice with sollte", title_fr: "Wenn du Fieber hast… : wenn et les conseils avec sollte",
    subtitle: "Say what to do in a given situation, and give advice politely.", subtitle_fr: "Dire quoi faire dans une situation donnée, et donner des conseils poliment.",
    body: `
<h2>Wenn: if, when</h2>
<p><s-de>wenn</s-de> works like <s-de>weil</s-de>: the verb goes to the end. <s-de>Wenn du Fieber hast, bleib im Bett.</s-de> · <s-de>Ich trinke viel Tee, wenn ich erkältet bin.</s-de> When the <s-de>wenn</s-de>-clause comes first, the main verb comes right after the comma: <s-de>Wenn es regnet, bleiben wir zu Hause.</s-de></p>
<p><s-de>wenn</s-de> means "if" (a condition) and also "when / whenever" (something that happens again and again): <s-de>Immer wenn ich Erdbeeren esse, bekomme ich Ausschlag.</s-de></p>
<h2>Advice: du solltest…</h2>
<p>The polite way to give advice is <s-de>sollte</s-de> (should) + infinitive at the end: <s-de>Du solltest zum Arzt gehen.</s-de> (You should go to the doctor.) · <s-de>Sie sollten sich ausruhen.</s-de> · <s-de>Ihr solltet mehr Wasser trinken.</s-de></p>
<p>Other ways: <s-de>Geh doch zum Arzt!</s-de> (Why don't you go to the doctor?) · <s-de>An deiner Stelle würde ich zu Hause bleiben.</s-de> (If I were you, I'd stay at home.) · <s-de>Es ist besser, wenn du dich hinlegst.</s-de></p>
<div class="tip">Doctors and pharmacists use <s-de>sollen</s-de> for instructions: <s-de>Sie sollen die Tabletten nach dem Essen nehmen.</s-de> (You're to take the tablets after meals.) Sollen = what someone else wants you to do; sollte = advice.</div>
`,
    body_fr: `
<h2>Wenn : si, quand</h2>
<p><s-de>wenn</s-de> fonctionne comme <s-de>weil</s-de> : le verbe part à la fin. <s-de>Wenn du Fieber hast, bleib im Bett.</s-de> (Si tu as de la fièvre, reste au lit.) · <s-de>Ich trinke viel Tee, wenn ich erkältet bin.</s-de> Quand la subordonnée en <s-de>wenn</s-de> vient en premier, le verbe principal suit directement la virgule : <s-de>Wenn es regnet, bleiben wir zu Hause.</s-de></p>
<p><s-de>wenn</s-de> veut dire « si » (une condition) et aussi « quand, chaque fois que » (ce qui se répète) : <s-de>Immer wenn ich Erdbeeren esse, bekomme ich Ausschlag.</s-de> (Chaque fois que je mange des fraises, j'ai de l'urticaire.)</p>
<h2>Les conseils : du solltest…</h2>
<p>La façon polie de conseiller est <s-de>sollte</s-de> (devrais) + infinitif à la fin, comme le conditionnel français « tu devrais » : <s-de>Du solltest zum Arzt gehen.</s-de> (Tu devrais aller chez le médecin.) · <s-de>Sie sollten sich ausruhen.</s-de> · <s-de>Ihr solltet mehr Wasser trinken.</s-de></p>
<p>Autres façons : <s-de>Geh doch zum Arzt!</s-de> (Va donc chez le médecin !) · <s-de>An deiner Stelle würde ich zu Hause bleiben.</s-de> (À ta place, je resterais à la maison.) · <s-de>Es ist besser, wenn du dich hinlegst.</s-de></p>
<div class="tip">Les médecins et les pharmaciens emploient <s-de>sollen</s-de> pour les consignes : <s-de>Sie sollen die Tabletten nach dem Essen nehmen.</s-de> (Vous devez prendre les comprimés après le repas.) Sollen = ce que quelqu'un d'autre veut que tu fasses ; sollte = un conseil.</div>
`,
    examples: [
      ["Wenn du Fieber hast, bleib im Bett.", "If you have a temperature, stay in bed.", "Si tu as de la fièvre, reste au lit."],
      ["Du solltest zum Arzt gehen.", "You should go to the doctor.", "Tu devrais aller chez le médecin."],
      ["Sie sollten mehr schlafen.", "You should sleep more.", "Vous devriez dormir davantage."],
      ["Wenn ich Kopfschmerzen habe, nehme ich eine Tablette.", "When I have a headache, I take a tablet.", "Quand j'ai mal à la tête, je prends un comprimé."],
      ["An deiner Stelle würde ich zu Hause bleiben.", "If I were you, I'd stay at home.", "À ta place, je resterais à la maison."],
      ["Geh doch in die Apotheke, die ist gleich um die Ecke.", "Why don't you go to the pharmacy? It's just round the corner.", "Va donc à la pharmacie, elle est juste au coin."],
      ["Die Ärztin sagt, ich soll viel trinken.", "The doctor says I should drink a lot.", "La médecin dit que je dois boire beaucoup."]
    ],
    quiz: [
      { q: "Complete: “Wenn du krank ___, bleib zu Hause.” (sein)", q_fr: "Complète : « Wenn du krank ___, bleib zu Hause. » (sein)", o: ["bist", "ist", "sein"], a: 0, ex: "wenn sends the verb to the end: wenn du krank bist.", ex_fr: "wenn envoie le verbe à la fin : wenn du krank bist." },
      { q: "“Wenn es regnet, ___ zu Hause.”", q_fr: "« Wenn es regnet, ___ zu Hause. »", o: ["wir bleiben", "bleiben wir", "bleiben"], a: 1, ex: "After the wenn-clause: verb, then subject.", ex_fr: "Après la subordonnée en wenn : le verbe, puis le sujet." },
      { q: "Advice: “You should rest.”", q_fr: "Un conseil : « Tu devrais te reposer. »", o: ["Du sollst dich ausruhen.", "Du solltest dich ausruhen.", "Du solltest ausruhen dich."], a: 1, ex: "Advice: solltest; the reflexive pronoun after the verb.", ex_fr: "Un conseil : solltest ; le pronom réfléchi après le verbe." },
      { q: "“An deiner Stelle würde ich…” means:", q_fr: "« An deiner Stelle würde ich… » veut dire :", o: ["If I were you, I would…", "In your place, I will…", "At your house, I…"], o_fr: ["À ta place, je…", "Chez toi, je…", "Ta place, je la…"], a: 0, ex: "A useful phrase for advice.", ex_fr: "Une formule utile pour conseiller." },
      { q: "The doctor's instruction: “Sie ___ die Tabletten nach dem Essen nehmen.”", q_fr: "La consigne du médecin : « Sie ___ die Tabletten nach dem Essen nehmen. »", o: ["sollen", "sollten", "sind"], a: 0, ex: "An instruction from someone else: sollen.", ex_fr: "Une consigne venant de quelqu'un d'autre : sollen." }
    ]
  },
  {
    id: 30, level: "A2", kind: "functional", icon: "stethoscope",
    title: "Everyday German: at the doctor's and the pharmacy", title_fr: "L'allemand de tous les jours : chez le médecin et à la pharmacie",
    subtitle: "Make an appointment, describe your symptoms, understand the doctor and call in sick.", subtitle_fr: "Prendre rendez-vous, décrire tes symptômes, comprendre le médecin et prévenir que tu es malade.",
    body: `
<h2>Making an appointment</h2>
<p><s-de>Ich hätte gern einen Termin, so bald wie möglich.</s-de> · <s-de>Es ist dringend.</s-de> (It's urgent.) · <s-de>Bringen Sie bitte Ihre Gesundheitskarte mit.</s-de> (Bring your health insurance card.)</p>
<h2>Describing symptoms</h2>
<p><s-de>Ich habe Kopfschmerzen / Halsschmerzen / Bauchschmerzen.</s-de> · <s-de>Mir tut der Rücken weh.</s-de> · <s-de>Ich habe Fieber und Husten.</s-de> · <s-de>Mir ist schlecht.</s-de> (I feel sick.) · <s-de>Seit wann haben Sie das?</s-de> — <s-de>Seit drei Tagen.</s-de></p>
<p>The doctor: <s-de>Was fehlt Ihnen?</s-de> (What's the matter?) · <s-de>Machen Sie bitte den Mund auf.</s-de> · <s-de>Ich schreibe Ihnen ein Rezept.</s-de> · <s-de>Ich schreibe Sie bis Freitag krank.</s-de> (I'm signing you off sick until Friday.)</p>
<h2>Calling in sick</h2>
<p>If you're ill, tell your employer on the first day. A doctor's certificate is required from the fourth day of illness, and the employer may ask for it earlier. Since 2023, the doctor sends it electronically to the health insurance fund: you just inform your employer.</p>
<h2>Pharmacy or chemist's?</h2>
<p>Medicines are sold in the <s-de>Apotheke</s-de> (pharmacy). The <s-de>Drogerie</s-de> sells cosmetics, toothpaste and household products, but no prescription medicines. With a prescription (<s-de>Rezept</s-de>), you go to the Apotheke.</p>
<div class="tip">Emergencies: <s-de>112</s-de> (ambulance, fire brigade). At night or at weekends, for something that can't wait but isn't life-threatening, the medical on-call service: <s-de>116 117</s-de>. And when someone sneezes, say <s-de>Gesundheit!</s-de></div>
`,
    body_fr: `
<h2>Prendre rendez-vous</h2>
<p><s-de>Ich hätte gern einen Termin, so bald wie möglich.</s-de> (Je voudrais un rendez-vous le plus tôt possible.) · <s-de>Es ist dringend.</s-de> (C'est urgent.) · <s-de>Bringen Sie bitte Ihre Gesundheitskarte mit.</s-de> (Apportez votre carte d'assurance maladie.)</p>
<h2>Décrire ses symptômes</h2>
<p><s-de>Ich habe Kopfschmerzen / Halsschmerzen / Bauchschmerzen.</s-de> (J'ai mal à la tête / à la gorge / au ventre.) · <s-de>Mir tut der Rücken weh.</s-de> · <s-de>Ich habe Fieber und Husten.</s-de> · <s-de>Mir ist schlecht.</s-de> (J'ai la nausée.) · <s-de>Seit wann haben Sie das?</s-de> — <s-de>Seit drei Tagen.</s-de></p>
<p>Le médecin : <s-de>Was fehlt Ihnen?</s-de> (Qu'est-ce qui ne va pas ?) · <s-de>Machen Sie bitte den Mund auf.</s-de> · <s-de>Ich schreibe Ihnen ein Rezept.</s-de> (Je vous fais une ordonnance.) · <s-de>Ich schreibe Sie bis Freitag krank.</s-de> (Je vous mets en arrêt jusqu'à vendredi.)</p>
<h2>Prévenir qu'on est malade</h2>
<p>Si tu es malade, préviens ton employeur dès le premier jour. Un certificat médical est obligatoire à partir du quatrième jour de maladie, et l'employeur peut le demander plus tôt. Depuis 2023, le médecin le transmet électroniquement à la caisse d'assurance maladie : tu informes simplement ton employeur.</p>
<h2>Pharmacie ou droguerie ?</h2>
<p>Les médicaments se vendent à l'<s-de>Apotheke</s-de> (pharmacie). La <s-de>Drogerie</s-de> vend des cosmétiques, du dentifrice et des produits ménagers, mais aucun médicament sur ordonnance. Avec une ordonnance (<s-de>Rezept</s-de>), on va à l'Apotheke.</p>
<div class="tip">Urgences : <s-de>112</s-de> (ambulance, pompiers). La nuit ou le week-end, pour quelque chose qui ne peut pas attendre sans être grave, la permanence médicale : <s-de>116 117</s-de>. Et quand quelqu'un éternue, on dit <s-de>Gesundheit!</s-de> (À tes souhaits !)</div>
`,
    examples: [
      ["Ich hätte gern einen Termin, so bald wie möglich.", "I'd like an appointment as soon as possible.", "Je voudrais un rendez-vous le plus tôt possible."],
      ["Was fehlt Ihnen?", "What's the matter?", "Qu'est-ce qui ne va pas ?"],
      ["Ich habe seit drei Tagen Halsschmerzen und Fieber.", "I've had a sore throat and a temperature for three days.", "J'ai mal à la gorge et de la fièvre depuis trois jours."],
      ["Ich schreibe Ihnen ein Rezept.", "I'll write you a prescription.", "Je vous fais une ordonnance."],
      ["Sie sind bis Freitag krankgeschrieben.", "You're signed off sick until Friday.", "Vous êtes en arrêt jusqu'à vendredi."],
      ["Nehmen Sie die Tabletten dreimal täglich nach dem Essen.", "Take the tablets three times a day after meals.", "Prenez les comprimés trois fois par jour après les repas."],
      ["Gute Besserung!", "Get well soon!", "Bon rétablissement !"]
    ],
    quiz: [
      { q: "“I have a headache.”", q_fr: "« J'ai mal à la tête. »", o: ["Ich habe Kopfschmerzen.", "Ich bin Kopfschmerzen.", "Mein Kopf hat Schmerzen."], a: 0, ex: "Ich habe Kopfschmerzen, or Mir tut der Kopf weh.", ex_fr: "Ich habe Kopfschmerzen, ou Mir tut der Kopf weh." },
      { q: "A doctor's certificate is required from:", q_fr: "Un certificat médical est obligatoire à partir du :", o: ["the fourth day of illness", "the first hour", "the second week"], o_fr: ["quatrième jour de maladie", "la première heure", "la deuxième semaine"], a: 0, ex: "From the fourth day, and the employer may ask earlier.", ex_fr: "À partir du quatrième jour, et l'employeur peut le demander plus tôt." },
      { q: "Where do you buy medicine with a prescription?", q_fr: "Où achète-t-on un médicament sur ordonnance ?", o: ["In der Apotheke", "In der Drogerie", "Im Supermarkt"], a: 0, ex: "Prescription medicines: only in the Apotheke.", ex_fr: "Médicaments sur ordonnance : seulement à l'Apotheke." },
      { q: "The emergency number for an ambulance is:", q_fr: "Le numéro d'urgence pour une ambulance est :", o: ["112", "116 117", "110"], a: 0, ex: "112: ambulance and fire brigade (110 is the police).", ex_fr: "112 : ambulance et pompiers (110, c'est la police)." },
      { q: "Someone sneezes. You say:", q_fr: "Quelqu'un éternue. Tu dis :", o: ["Gesundheit!", "Gute Besserung!", "Guten Appetit!"], a: 0, ex: "Gesundheit! = bless you.", ex_fr: "Gesundheit! = à tes souhaits." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    28: {
      gap: [["Ich fühle ___ heute besser.", "mich", "myself", "me"], ["Er ruht ___ aus.", "sich", "himself", "se"], ["Ich wasche ___ die Hände.", "mir", "my (dative)", "me (datif)"], ["Wir müssen ___ beeilen.", "uns", "ourselves", "nous"]],
      fix: [["Ich bin mich erkältet.", "Ich habe mich erkältet.", "Reflexive verbs take haben in the Perfekt.", "Les verbes pronominaux prennent haben au Perfekt."], ["Ich wasche meine Hände mich.", "Ich wasche mir die Hände.", "Dative reflexive + article: ich wasche mir die Hände.", "Réfléchi au datif + article : ich wasche mir die Hände."]],
      task: ["Describe a day when you were ill, in four sentences with reflexive verbs.", "Décris un jour où tu étais malade, en quatre phrases avec des verbes pronominaux.", "Letzte Woche habe ich mich erkältet. Am Montag habe ich mich sehr schlecht gefühlt. Ich habe mich den ganzen Tag ausgeruht und viel Tee getrunken. Am Mittwoch habe ich mich schon besser gefühlt."]
    },
    29: {
      gap: [["Wenn du Fieber ___, bleib im Bett. (haben)", "hast"], ["Du ___ zum Arzt gehen.", "solltest", "should", "devrais (conseil)"], ["Wenn es regnet, ___ wir zu Hause. (bleiben)", "bleiben"], ["An deiner ___ würde ich mich ausruhen.", "Stelle", "place", "place"]],
      fix: [["Wenn du bist krank, bleib zu Hause.", "Wenn du krank bist, bleib zu Hause.", "wenn sends the verb to the end.", "wenn envoie le verbe à la fin."], ["Wenn es regnet, wir bleiben zu Hause.", "Wenn es regnet, bleiben wir zu Hause.", "After the wenn-clause: verb, then subject.", "Après la subordonnée en wenn : le verbe, puis le sujet."]],
      task: ["Your friend has a cold. Give four pieces of advice with sollte, wenn and doch.", "Ton ami a un rhume. Donne quatre conseils avec sollte, wenn et doch.", "Du solltest heute zu Hause bleiben. Trink doch viel Tee mit Honig! Wenn du Fieber hast, solltest du zum Arzt gehen. Und du solltest früh schlafen gehen."]
    },
    30: {
      gap: [["Ich habe ___.", "Kopfschmerzen", "a headache", "mal à la tête"], ["Seit wann haben Sie das? — ___ drei Tagen.", "Seit", "for", "depuis"], ["Ich schreibe Ihnen ein ___.", "Rezept", "a prescription", "une ordonnance"], ["Gute ___!", "Besserung", "get well soon", "bon rétablissement"]],
      fix: [["Ich bin Fieber.", "Ich habe Fieber.", "A symptom with haben: ich habe Fieber.", "Un symptôme avec haben : ich habe Fieber."], ["Mich tut der Kopf weh.", "Mir tut der Kopf weh.", "wehtun takes the dative: mir.", "wehtun prend le datif : mir."]],
      task: ["You call a doctor's practice: ask for an appointment and describe your symptoms (four sentences).", "Tu appelles un cabinet médical : demande un rendez-vous et décris tes symptômes (quatre phrases).", "Guten Morgen, ich hätte gern einen Termin, so bald wie möglich. Ich habe seit gestern hohes Fieber und starke Halsschmerzen. Außerdem tut mir der Kopf weh. Kann ich heute noch kommen?"]
    }
  });

  W.ROLEPLAYS.push(
  { id: "krankerfreund", lesson: 29, level: "A2", icon: "pill", partner: "Matthias", role: "a friend", role_fr: "un ami",
    title: "A friend who's ill", title_fr: "Un ami malade",
    setting: "You call your friend Matthias. He sounds terrible: he's got a cold.", setting_fr: "Tu appelles ton ami Matthias. Il a une voix terrible : il est enrhumé.",
    turns: [
      { p: "Hallo… *hust* … Entschuldigung, mir geht es heute gar nicht gut.", en: "Hello… *cough* … sorry, I'm not feeling well at all today.", fr: "Allô… *tousse* … Pardon, je ne vais pas bien du tout aujourd'hui." },
      { y: ["Oh nein! Was hast du denn? Hast du dich erkältet?", "Oh nein! Was hast du denn? Bist du dich erkältet?", "Oh nein! Was hast du denn? Hast du erkältet?"], en: "Oh no! What's wrong? Have you caught a cold?", fr: "Oh non ! Qu'est-ce que tu as ? Tu as attrapé un rhume ?", why: "sich erkälten: haben + reflexive pronoun: hast du dich erkältet?", why_fr: "sich erkälten : haben + pronom réfléchi : hast du dich erkältet ?" },
      { p: "Ja, ich habe Husten, Schnupfen und Kopfschmerzen. Und heute Abend habe ich ein wichtiges Konzert…", en: "Yes, I've got a cough, a cold and a headache. And tonight I have an important concert…", fr: "Oui, j'ai de la toux, un rhume et mal à la tête. Et ce soir, j'ai un concert important…" },
      { y: ["Du solltest nicht spielen. Bleib lieber im Bett!", "Du solltest nicht spielen. Bleibst lieber im Bett!", "Du sollst nicht spielen. Bleiben lieber im Bett!"], en: "You shouldn't play. Better stay in bed!", fr: "Tu ne devrais pas jouer. Reste plutôt au lit !", why: "Advice: solltest; du imperative: Bleib!", why_fr: "Conseil : solltest ; impératif avec du : Bleib!" },
      { p: "Aber ich bin der einzige Gitarrist!", en: "But I'm the only guitarist!", fr: "Mais je suis le seul guitariste !" },
      { y: ["Wenn du Fieber hast, kannst du nicht spielen. Ruf doch deine Band an!", "Wenn du hast Fieber, kannst du nicht spielen. Ruf doch deine Band an!", "Wenn du Fieber hast, du kannst nicht spielen. Ruf doch deine Band an!"], en: "If you have a temperature, you can't play. Why don't you call your band?", fr: "Si tu as de la fièvre, tu ne peux pas jouer. Appelle donc ton groupe !", why: "Verb at the end of the wenn-clause, then the main verb right after the comma.", why_fr: "Verbe à la fin de la subordonnée en wenn, puis le verbe principal juste après la virgule." },
      { p: "Du hast recht. Ich rufe sie gleich an. Danke!", en: "You're right. I'll call them right away. Thanks!", fr: "Tu as raison. Je les appelle tout de suite. Merci !" },
      { y: ["Gern! Trink viel Tee und ruh dich aus. Gute Besserung!", "Gern! Trink viel Tee und ruh dir aus. Gute Besserung!", "Gern! Trink viel Tee und ruh dich aus. Guten Appetit!"], en: "You're welcome! Drink lots of tea and rest. Get well soon!", fr: "De rien ! Bois beaucoup de thé et repose-toi. Bon rétablissement !", why: "sich ausruhen: ruh dich aus (accusative); to someone ill: Gute Besserung!", why_fr: "sich ausruhen : ruh dich aus (accusatif) ; à une personne malade : Gute Besserung!" }
    ] },
  { id: "arztbesuch", lesson: 30, level: "A2", icon: "stethoscope", partner: "Frau Dr. Yilmaz", role: "a GP", role_fr: "la médecin généraliste",
    title: "At the doctor's", title_fr: "Chez la médecin",
    setting: "You've had a sore throat and a temperature for three days. You see Frau Dr. Yilmaz, a GP in Bonn.", setting_fr: "Tu as mal à la gorge et de la fièvre depuis trois jours. Tu consultes Frau Dr. Yilmaz, médecin généraliste à Bonn.",
    turns: [
      { p: "Guten Tag! Bitte setzen Sie sich. Was fehlt Ihnen?", en: "Hello! Please sit down. What's the matter?", fr: "Bonjour ! Asseyez-vous, je vous en prie. Qu'est-ce qui ne va pas ?" },
      { y: ["Ich habe seit drei Tagen Halsschmerzen und Fieber.", "Ich habe für drei Tage Halsschmerzen und Fieber.", "Ich bin seit drei Tagen Halsschmerzen und Fieber."], en: "I've had a sore throat and a temperature for three days.", fr: "J'ai mal à la gorge et de la fièvre depuis trois jours.", why: "Still going on: seit + present tense; symptoms with haben.", why_fr: "Ce qui dure encore : seit + présent ; les symptômes avec haben." },
      { p: "Wie hoch ist das Fieber?", en: "How high is your temperature?", fr: "Combien avez-vous de fièvre ?" },
      { y: ["Gestern Abend hatte ich neununddreißig Grad.", "Gestern Abend habe ich neununddreißig Grad.", "Gestern Abend ich hatte neununddreißig Grad."], en: "Last night I had a temperature of 39.", fr: "Hier soir, j'avais trente-neuf de fièvre.", why: "Past of haben: hatte; verb second after Gestern Abend.", why_fr: "Passé de haben : hatte ; verbe en deuxième position après Gestern Abend." },
      { p: "Machen Sie bitte den Mund auf. Hm, der Hals ist sehr rot. Sie haben eine Angina. Ich schreibe Ihnen ein Rezept.", en: "Open your mouth, please. Hm, your throat is very red. You have tonsillitis. I'll write you a prescription.", fr: "Ouvrez la bouche, s'il vous plaît. Hum, la gorge est très rouge. Vous avez une angine. Je vous fais une ordonnance." },
      { y: ["Wie oft soll ich die Tabletten nehmen?", "Wie oft sollte ich die Tabletten nehmen soll?", "Wie oft soll ich nehmen die Tabletten?"], en: "How often should I take the tablets?", fr: "Combien de fois dois-je prendre les comprimés ?", why: "An instruction from the doctor: soll; the infinitive at the end.", why_fr: "Une consigne du médecin : soll ; l'infinitif à la fin." },
      { p: "Dreimal täglich, nach dem Essen. Und Sie sollten sich ausruhen: Ich schreibe Sie bis Freitag krank.", en: "Three times a day, after meals. And you should rest: I'm signing you off sick until Friday.", fr: "Trois fois par jour, après les repas. Et vous devriez vous reposer : je vous mets en arrêt jusqu'à vendredi." },
      { y: ["Vielen Dank, Frau Doktor. Auf Wiedersehen!", "Vielen Dank, Frau Doktor. Gute Besserung!", "Vielen Dank, Frau Doktor. Gesundheit!"], en: "Thank you very much, doctor. Goodbye!", fr: "Merci beaucoup, docteur. Au revoir !", why: "Gute Besserung is what the doctor wishes you, not the other way round!", why_fr: "Gute Besserung, c'est ce que le médecin te souhaite, pas l'inverse !" }
    ] }
  );

  W.READINGS.push({
    id: "krankindeutschland", level: "A2", icon: "heart-pulse", title: "Krank in Deutschland: Was tun?", genre: "Guide",
    intro: "A practical guide: what to do when you're ill in Germany. The doctor, the sick note, the pharmacy and the emergency numbers.",
    intro_fr: "Un guide pratique : que faire quand on est malade en Allemagne. Le médecin, l'arrêt maladie, la pharmacie et les numéros d'urgence.",
    paragraphs: [
      { de: "Wenn Sie krank sind, rufen Sie zuerst in einer Arztpraxis an und vereinbaren einen Termin. Viele Praxen haben morgens eine offene Sprechstunde: Dann können Sie auch ohne Termin kommen, aber Sie müssen oft lange warten. Vergessen Sie Ihre Gesundheitskarte nicht!", en: "If you're ill, first call a doctor's practice and make an appointment. Many practices have open surgery hours in the morning: then you can come without an appointment, but you often have to wait a long time. Don't forget your health insurance card!", fr: "Si vous êtes malade, appelez d'abord un cabinet médical et prenez rendez-vous. Beaucoup de cabinets ont une consultation libre le matin : vous pouvez alors venir sans rendez-vous, mais il faut souvent attendre longtemps. N'oubliez pas votre carte d'assurance maladie !" },
      { de: "Wenn Sie arbeiten, müssen Sie Ihrem Arbeitgeber am ersten Tag sagen, dass Sie krank sind. Ab dem vierten Tag brauchen Sie eine Bescheinigung vom Arzt. Seit 2023 schickt die Praxis sie elektronisch an die Krankenkasse, und der Arbeitgeber kann sie dort abrufen.", en: "If you work, you have to tell your employer on the first day that you're ill. From the fourth day, you need a certificate from the doctor. Since 2023, the practice sends it electronically to the health insurance fund, and the employer can retrieve it there.", fr: "Si vous travaillez, vous devez dire à votre employeur dès le premier jour que vous êtes malade. À partir du quatrième jour, il vous faut un certificat du médecin. Depuis 2023, le cabinet l'envoie électroniquement à la caisse d'assurance maladie, et l'employeur peut le consulter là-bas." },
      { de: "Mit dem Rezept gehen Sie in die Apotheke. Achtung: Eine Drogerie ist keine Apotheke! Dort gibt es Zahnpasta, Shampoo und Kosmetik, aber keine Medikamente auf Rezept.", en: "You take the prescription to the pharmacy. Careful: a Drogerie isn't a pharmacy! It sells toothpaste, shampoo and cosmetics, but no prescription medicines.", fr: "Avec l'ordonnance, vous allez à la pharmacie. Attention : une Drogerie n'est pas une pharmacie ! On y trouve du dentifrice, du shampooing et des cosmétiques, mais pas de médicaments sur ordonnance." },
      { de: "Und in der Nacht oder am Wochenende? Bei einem Notfall rufen Sie die 112 an. Wenn es nicht lebensgefährlich ist, aber nicht bis Montag warten kann, hilft der ärztliche Bereitschaftsdienst unter 116 117. Gute Besserung!", en: "And at night or at the weekend? In an emergency, call 112. If it isn't life-threatening but can't wait until Monday, the medical on-call service can help on 116 117. Get well soon!", fr: "Et la nuit ou le week-end ? En cas d'urgence, appelez le 112. Si ce n'est pas grave mais que ça ne peut pas attendre lundi, la permanence médicale vous aide au 116 117. Bon rétablissement !" }
    ],
    glossary: { "zuerst": ["first", "d'abord"], "vereinbaren": ["to arrange", "convenir, prendre (rendez-vous)"], "Praxen": ["practices, surgeries", "cabinets"], "Sprechstunde": ["surgery hours", "consultation, heures de consultation"], "Arbeitgeber": ["employer", "employeur"], "Bescheinigung": ["certificate", "certificat"], "elektronisch": ["electronically", "électroniquement"], "abrufen": ["to retrieve", "consulter, récupérer"], "Zahnpasta": ["toothpaste", "dentifrice"], "Kosmetik": ["cosmetics", "cosmétiques"], "Notfall": ["emergency", "urgence"], "lebensgefährlich": ["life-threatening", "mortel, très grave"], "ärztliche": ["medical", "médical"], "Bereitschaftsdienst": ["on-call service", "permanence, service de garde"] },
    questions: [
      { q: "Was machen Sie zuerst, wenn Sie krank sind?", o: ["Ich rufe in einer Arztpraxis an.", "Ich gehe in die Drogerie.", "Ich rufe die 112 an."], a: 0 },
      { q: "Ab wann brauchen Sie eine Bescheinigung vom Arzt?", o: ["Ab dem vierten Tag", "Ab dem ersten Tag", "Nach zwei Wochen"], a: 0 },
      { q: "Was gibt es in einer Drogerie nicht?", o: ["Medikamente auf Rezept", "Zahnpasta", "Shampoo"], a: 0 },
      { q: "Welche Nummer rufen Sie bei einem Notfall an?", o: ["112", "116 117", "110"], a: 0 },
      { q: "Wofür ist die Nummer 116 117?", o: ["Für den ärztlichen Bereitschaftsdienst", "Für die Polizei", "Für die Apotheke"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-a2-3", unit: "a2-3", level: "A2", icon: "phone",
    title: "Ein Termin beim Arzt", title_fr: "Un rendez-vous chez le médecin",
    context: "Ole calls a doctor's practice in Kiel. Frau Ludwig, the receptionist, answers.", context_fr: "Ole appelle un cabinet médical à Kiel. Frau Ludwig, la secrétaire, répond.",
    words: [["die Sprechstunde", "the surgery hours", "les heures de consultation"], ["dringend", "urgent", "urgent"], ["der Schwindel", "dizziness", "le vertige"], ["vorbeikommen", "to drop by", "passer"], ["die Versichertenkarte", "the insurance card", "la carte d'assuré"]],
    lines: [["Frau Ludwig", "Praxis Dr. Becker, Ludwig am Apparat, guten Morgen.", "de-DE"], ["Ole", "Guten Morgen, hier ist Ole Hansen. Ich hätte gern einen Termin, so bald wie möglich.", "de-DE"], ["Frau Ludwig", "Was haben Sie denn für Beschwerden?", "de-DE"], ["Ole", "Ich habe seit gestern starke Kopfschmerzen, und mir ist schwindlig.", "de-DE"], ["Frau Ludwig", "Haben Sie auch Fieber?", "de-DE"], ["Ole", "Ja, heute Morgen hatte ich achtunddreißig Grad.", "de-DE"], ["Frau Ludwig", "Dann sollten Sie heute noch kommen. Können Sie um halb elf hier sein?", "de-DE"], ["Ole", "Ja, das geht. Muss ich etwas mitbringen?", "de-DE"], ["Frau Ludwig", "Ihre Versichertenkarte, bitte. Und wenn Sie Medikamente nehmen, bringen Sie die Liste mit.", "de-DE"], ["Ole", "In Ordnung. Vielen Dank, bis gleich!", "de-DE"], ["Frau Ludwig", "Gern. Gute Besserung, Herr Hansen!", "de-DE"]],
    gist: ["Warum ruft Ole an?", ["Er braucht einen Termin beim Arzt.", "Er möchte ein Rezept abholen.", "Er sucht eine Apotheke."]],
    detail: [["Welche Beschwerden hat Ole?", ["Kopfschmerzen und Schwindel", "Bauchschmerzen", "Husten und Schnupfen"]], ["Wie hoch war sein Fieber heute Morgen?", ["Achtunddreißig Grad", "Neununddreißig Grad", "Er hat kein Fieber."]], ["Wann soll er kommen?", ["Um halb elf", "Um elf", "Morgen früh"]], ["Was soll er mitbringen?", ["Seine Versichertenkarte und die Liste seiner Medikamente", "Ein Foto", "Seinen Personalausweis"]]],
    decode: ["Ich habe seit gestern starke Kopfschmerzen, und mir ist schwindlig.", "Dann sollten Sie heute noch kommen."],
    tip: "Doctors' receptionists ask fixed questions: Was haben Sie für Beschwerden? (What are your symptoms?) · Haben Sie Fieber? · Seit wann? Prepare your answers before you call: symptoms, since when, temperature.", tip_fr: "Les secrétaires médicales posent des questions toutes faites : Was haben Sie für Beschwerden? (Quels sont vos symptômes ?) · Haben Sie Fieber? · Seit wann? Prépare tes réponses avant d'appeler : symptômes, depuis quand, température."
  }]);

  W.PROMPTS.push({ id: "de-a2-3", level: "A2", q: "Was machst du, wenn du krank bist? Und was tust du, um gesund zu bleiben?", en: "What do you do when you're ill? And what do you do to stay healthy?", fr: "Que fais-tu quand tu es malade ? Et que fais-tu pour rester en bonne santé ?", time: 90,
    phrases: ["Wenn ich krank bin, …", "Ich ruhe mich aus / bleibe im Bett.", "Ich gehe zum Arzt, wenn…", "Um gesund zu bleiben, …", "Man sollte…"],
    model: "Wenn ich erkältet bin, bleibe ich zu Hause und ruhe mich aus. Ich trinke viel Tee mit Honig und schlafe viel. Zum Arzt gehe ich nur, wenn ich hohes Fieber habe. Um gesund zu bleiben, esse ich viel Obst und Gemüse und fahre jeden Tag mit dem Fahrrad zur Arbeit. Ich finde, man sollte auch genug schlafen." });

  W.WRITING_GUIDE["a2-3"] = { genre: "A message to say you're ill", genre_fr: "Un message pour dire que tu es malade",
    plan: [["A polite greeting.", "Une formule de politesse."], ["Say you're ill and can't come.", "Dis que tu es malade et que tu ne peux pas venir."], ["Your symptoms and what the doctor said.", "Tes symptômes et ce que le médecin a dit."], ["What you'll do (homework, tasks…).", "Ce que tu vas faire (devoirs, tâches…)."], ["Apologise and a polite ending.", "Excuse-toi et une formule de fin."]],
    marks: [["Liebe Frau Krüger,", "Liebe + surname: friendly but polite", "Liebe + nom : amical mais poli"], ["leider kann ich heute nicht", "leider: unfortunately", "leider : malheureusement"], ["weil ich krank bin", "weil: verb at the end", "weil : verbe à la fin"], ["Ich habe Fieber und Halsschmerzen", "symptoms with haben", "les symptômes avec haben"], ["bis Mittwoch krankgeschrieben", "signed off sick", "en arrêt maladie"], ["Viele Grüße", "a polite ending", "une formule de fin"]] };

  W.COURSE.push({ id: "a2-3", level: "A2", icon: "heart-pulse", title: "Health", title_fr: "La santé",
    intro: "In this unit, you'll talk about your health: the parts of the body, symptoms, reflexive verbs (ich fühle mich, ich wasche mir die Hände), wenn-clauses and advice with sollte, and what to do at the doctor's, at the pharmacy, and when you call in sick in Germany.",
    intro_fr: "Dans cette unité, tu vas parler de ta santé : les parties du corps, les symptômes, les verbes pronominaux (ich fühle mich, ich wasche mir die Hände), les subordonnées en wenn et les conseils avec sollte, et ce qu'il faut faire chez le médecin, à la pharmacie et quand on est malade en Allemagne.",
    can: ["Name parts of the body and describe symptoms", "Use reflexive verbs, in the accusative and the dative", "Use wenn and give advice with sollte", "Make a doctor's appointment, understand the doctor and call in sick"],
    can_fr: ["Nommer les parties du corps et décrire des symptômes", "Employer les verbes pronominaux, à l'accusatif et au datif", "Employer wenn et donner des conseils avec sollte", "Prendre rendez-vous, comprendre le médecin et prévenir que tu es malade"],
    lessons: [28, 29, 30], vocab: ["koerperDE", "krankheitDE", "arztDE"], reading: "krankindeutschland", prompt: "de-a2-3",
    writing: { task: "You're ill and can't go to your German class. Write to your teacher, Frau Krüger (40-60 words): say you're ill, describe your symptoms and what the doctor said, and ask about the homework.", task_fr: "Tu es malade et tu ne peux pas aller à ton cours d'allemand. Écris à ta professeure, Frau Krüger (40 à 60 mots) : dis que tu es malade, décris tes symptômes et ce que le médecin a dit, et demande quels sont les devoirs.", words: "40-60",
      tips: ["Liebe Frau Krüger,", "leider kann ich … nicht kommen, weil…", "Ich habe…", "Der Arzt hat gesagt, dass…", "Viele Grüße"],
      checklist: ["I gave a reason with weil (verb at the end)", "I described my symptoms with haben", "I used a reflexive verb or seit", "I asked about the homework politely", "I stayed between 40 and 60 words"],
      checklist_fr: ["J'ai donné une raison avec weil (verbe à la fin)", "J'ai décrit mes symptômes avec haben", "J'ai employé un verbe pronominal ou seit", "J'ai demandé poliment quels sont les devoirs", "J'ai écrit entre 40 et 60 mots"],
      model: "Liebe Frau Krüger,\n\nleider kann ich heute nicht zum Kurs kommen, weil ich krank bin. Ich habe Fieber und Halsschmerzen, und ich fühle mich sehr schlecht. Die Ärztin sagt, ich soll mich ausruhen. Ich bin bis Mittwoch krankgeschrieben. Können Sie mir bitte die Hausaufgaben schicken?\n\nViele Grüße\nCamille Laurent" } });
})();
