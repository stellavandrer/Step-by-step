/* Cours de français, unité B2-6 « Arts and literature / Arts et littérature » : participe présent, adjectif
   verbal et participe composé (fatiguant / fatigant, ayant fini), les registres de langue (familier, courant,
   soutenu), analyser une œuvre. Personnages et œuvre « Marée » fictifs. Faits vérifiables seulement : en avril
   1874, des peintres refusés par le Salon officiel exposent dans l'atelier du photographe Nadar, boulevard des
   Capucines ; le critique Louis Leroy se moque d'« Impression, soleil levant » de Monet dans Le Charivari et parle
   d'« impressionnistes » ; Berthe Morisot y expose « Le Berceau » (1872, musée d'Orsay), où sa sœur Edma regarde
   son bébé endormi. Citations littéraires : uniquement des auteurs du domaine public. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "artsFR", icon: "palette", title: "The visual arts", title_fr: "Les arts plastiques", level: "B2", words: [
    ["la peinture", "painting; paint", "Elle s'intéresse à la peinture du XIXe siècle."],
    ["le peintre / la peintre", "the painter (m) / the painter (f)", "Berthe Morisot était une grande peintre."],
    ["le sculpteur / la sculptrice", "the sculptor (m) / (f)", "Camille Claudel était sculptrice."],
    ["la toile", "the canvas, the painting", "Cette toile vaut des millions."],
    ["l'autoportrait", "the self-portrait", "Van Gogh a peint de nombreux autoportraits."],
    ["la nature morte", "the still life", "Une nature morte avec des pommes."],
    ["le mouvement", "the (artistic) movement", "L'impressionnisme est un mouvement né en France."],
    ["le courant", "the trend, the school", "Ce peintre appartient au courant réaliste."],
    ["le vernissage", "the private view, the opening", "Le vernissage a lieu jeudi soir."],
    ["la galerie", "the gallery", "Elle expose dans une petite galerie."],
    ["l'esquisse", "the sketch", "Voici les esquisses du tableau."],
    ["le pinceau", "the paintbrush", "Il peint avec un pinceau très fin."],
    ["le premier plan", "the foreground", "Au premier plan, on voit un bateau."],
    ["l'arrière-plan", "the background", "À l'arrière-plan, des collines."],
    ["exposer", "to exhibit", "Ses œuvres sont exposées à Lyon."],
    ["l'exposition temporaire", "the temporary exhibition", "L'exposition temporaire ferme dimanche."],
    ["le commissaire d'exposition / la commissaire d'exposition", "the curator (m) / the curator (f)", "La commissaire a choisi cent tableaux."],
    ["abstrait / abstraite", "abstract (m) / (f)", "Je comprends mal l'art abstrait."]
  ] },
  { id: "litteratureFR", icon: "feather", title: "Literature", title_fr: "La littérature", level: "B2", words: [
    ["le romancier / la romancière", "the novelist (m) / (f)", "C'est une romancière très connue."],
    ["la poésie", "poetry", "J'aime lire de la poésie le soir."],
    ["le poème", "the poem", "Il a appris un poème par cœur."],
    ["le vers", "the line (of poetry)", "Ce poème compte quatorze vers."],
    ["la strophe", "the stanza", "Lis la deuxième strophe."],
    ["la rime", "the rhyme", "Les rimes sont riches."],
    ["le narrateur / la narratrice", "the narrator (m) / (f)", "La narratrice raconte son enfance."],
    ["le dénouement", "the ending, the outcome", "Le dénouement est inattendu."],
    ["le récit", "the narrative, the story", "Un récit de voyage."],
    ["la nouvelle", "the short story", "Maupassant a écrit plus de trois cents nouvelles."],
    ["l'essai", "the essay", "Elle publie un essai sur l'éducation."],
    ["le chapitre", "the chapter", "J'ai lu les trois premiers chapitres."],
    ["le registre", "the register, the tone", "Le registre est familier."],
    ["le ton", "the tone", "Le ton est ironique."],
    ["l'ironie", "irony", "Il parle avec beaucoup d'ironie."],
    ["la métaphore", "the metaphor", "Une belle métaphore de la mer."],
    ["l'extrait", "the extract", "Lisez cet extrait à voix haute."],
    ["le lecteur / la lectrice", "the reader (m) / (f)", "Le roman a séduit les lecteurs."]
  ] });

  W.LESSONS.push(
  {
    id: 90, level: "B2", icon: "pen-line",
    title: "Fatiguant or fatigant? Participles and verbal adjectives", title_fr: "Fatiguant ou fatigant ? Participes et adjectifs verbaux",
    subtitle: "Three -ant forms, the spellings that differ, and the perfect participle (ayant fini).", subtitle_fr: "Trois formes en -ant, les orthographes qui changent, et le participe composé (ayant fini).",
    body: `
<h2>Three -ant forms</h2>
<table>
<tr><th>Form</th><th>How it behaves</th><th>Example</th></tr>
<tr><td>gérondif</td><td>en + -ant, never changes</td><td><s-fr>Il lit en mangeant.</s-fr></td></tr>
<tr><td>participe présent</td><td>a verb: it can have an object; never changes</td><td><s-fr>les personnes possédant un billet</s-fr></td></tr>
<tr><td>adjectif verbal</td><td>an adjective: it agrees</td><td><s-fr>une histoire passionnante</s-fr></td></tr>
</table>
<h2>When the spelling changes</h2>
<table>
<tr><th>Participle (invariable)</th><th>Adjective (agrees)</th></tr>
<tr><td><s-fr>en se fatiguant</s-fr></td><td><s-fr>un travail fatigant</s-fr></td></tr>
<tr><td><s-fr>en convainquant le jury</s-fr></td><td><s-fr>un argument convaincant</s-fr></td></tr>
<tr><td><s-fr>en provoquant un scandale</s-fr></td><td><s-fr>une tenue provocante</s-fr></td></tr>
<tr><td><s-fr>en négligeant ses amis</s-fr></td><td><s-fr>un élève négligent</s-fr></td></tr>
<tr><td><s-fr>les jours précédant l'examen</s-fr></td><td><s-fr>le jour précédent</s-fr></td></tr>
</table>
<h2>The perfect participle</h2>
<p><s-fr>ayant</s-fr> or <s-fr>étant</s-fr> + past participle, in written French, for an earlier action: <s-fr>Ayant terminé son roman, l'autrice est partie en vacances.</s-fr> (= Après avoir terminé…) · <s-fr>Étant arrivés en retard, ils ont raté le début.</s-fr> (= Comme ils étaient arrivés…)</p>
<div class="tip">A quick test: can you put <s-fr>très</s-fr> in front? Then it's an adjective, and it agrees (<s-fr>une exposition très passionnante</s-fr>). Is it followed by an object or a complement? Then it's a participle, and it stays the same (<s-fr>des tableaux représentant la mer</s-fr>).</div>
`,
    examples: [
      ["C'est une histoire passionnante.", "It's a fascinating story."],
      ["Les visiteurs possédant un billet peuvent entrer.", "Visitors with a ticket may go in."],
      ["Ce voyage était très fatigant.", "That trip was very tiring."],
      ["En se fatiguant trop, il a fini par tomber malade.", "By wearing himself out, he ended up falling ill."],
      ["Son argument est vraiment convaincant.", "Her argument is really convincing."],
      ["Ayant fini son tableau, le peintre l'a exposé.", "Having finished his painting, the painter exhibited it."],
      ["Étant arrivés en retard, ils ont raté le vernissage.", "Having arrived late, they missed the opening."],
      ["Une galerie exposant de jeunes artistes vient d'ouvrir.", "A gallery exhibiting young artists has just opened."]
    ],
    quiz: [
      { q: "“A tiring day” is:", o: ["une journée fatiguante", "une journée fatigante", "une journée fatiguant"], a: 1, ex: "The adjective: fatigant, fatigante." },
      { q: "“A convincing argument” is:", o: ["un argument convainquant", "un argument convaincant", "un argument convaincu"], a: 1, ex: "The adjective: convaincant." },
      { q: "“Paintings showing the sea” is:", o: ["des tableaux représentants la mer", "des tableaux représentant la mer", "des tableaux en représentant la mer"], a: 1, ex: "Followed by an object: a participle, invariable." },
      { q: "“Having finished his work, he left” (written):", o: ["Ayant fini son travail, il est parti.", "Étant fini son travail, il est parti.", "Ayant finissant son travail, il est parti."], a: 0, ex: "ayant + past participle." },
      { q: "“A fascinating exhibition”:", o: ["une exposition passionnant", "une exposition passionnante", "une exposition passionnée"], a: 1, ex: "A verbal adjective agrees." }
    ]
  },
  {
    id: 91, level: "B2", icon: "messages-square",
    title: "Bagnole, voiture, automobile: registers", title_fr: "Bagnole, voiture, automobile : les registres de langue",
    subtitle: "Familiar, standard and formal French: understand all three, choose the right one.", subtitle_fr: "Français familier, courant et soutenu : comprendre les trois, choisir le bon.",
    body: `
<h2>Three registers</h2>
<table>
<tr><th>Familier</th><th>Courant</th><th>Soutenu</th></tr>
<tr><td><s-fr>T'as vu ça ?</s-fr></td><td><s-fr>Tu as vu ça ?</s-fr></td><td><s-fr>Avez-vous vu cela ?</s-fr></td></tr>
<tr><td><s-fr>J'sais pas.</s-fr></td><td><s-fr>Je ne sais pas.</s-fr></td><td><s-fr>Je l'ignore.</s-fr></td></tr>
<tr><td><s-fr>On y va ?</s-fr></td><td><s-fr>Nous y allons ?</s-fr></td><td><s-fr>Partons-nous ?</s-fr></td></tr>
</table>
<h2>Vocabulary</h2>
<table>
<tr><th>Familier</th><th>Courant</th><th>Soutenu</th></tr>
<tr><td><s-fr>une bagnole</s-fr></td><td><s-fr>une voiture</s-fr></td><td><s-fr>une automobile</s-fr></td></tr>
<tr><td><s-fr>le boulot</s-fr>, <s-fr>bosser</s-fr></td><td><s-fr>le travail</s-fr>, <s-fr>travailler</s-fr></td><td><s-fr>l'emploi</s-fr>, <s-fr>œuvrer</s-fr></td></tr>
<tr><td><s-fr>un bouquin</s-fr></td><td><s-fr>un livre</s-fr></td><td><s-fr>un ouvrage</s-fr></td></tr>
<tr><td><s-fr>le fric</s-fr></td><td><s-fr>l'argent</s-fr></td><td><s-fr>les fonds</s-fr></td></tr>
<tr><td><s-fr>un flic</s-fr></td><td><s-fr>un policier</s-fr></td><td><s-fr>un agent de police</s-fr></td></tr>
<tr><td><s-fr>c'est nickel</s-fr></td><td><s-fr>c'est parfait</s-fr></td><td><s-fr>c'est irréprochable</s-fr></td></tr>
</table>
<h2>Grammar markers</h2>
<p><b>Familier:</b> the <s-fr>ne</s-fr> disappears, <s-fr>on</s-fr> replaces <s-fr>nous</s-fr>, <s-fr>ça</s-fr>, questions with intonation only. <b>Soutenu:</b> inversion (<s-fr>Pourriez-vous… ?</s-fr>), <s-fr>nous</s-fr>, <s-fr>cela</s-fr>, richer vocabulary, and in literature the passé simple.</p>
<p>Young people also use <i>verlan</i>, which reverses syllables: <s-fr>une meuf</s-fr> (<s-fr>femme</s-fr>), <s-fr>relou</s-fr> (<s-fr>lourd</s-fr>, annoying), <s-fr>chelou</s-fr> (<s-fr>louche</s-fr>, weird).</p>
<div class="tip">Understanding familiar French helps you follow films, songs and friends. But in an exam, a formal email or a job interview, stay in standard or formal French: a single <s-fr>bosser</s-fr> in a cover letter would be noticed.</div>
`,
    examples: [
      ["T'as vu le dernier film de Cédric ? C'est nickel !", "Have you seen Cédric's latest film? It's brilliant!"],
      ["Tu as vu le dernier film ? Il est parfait.", "Have you seen the latest film? It's perfect."],
      ["Avez-vous vu le dernier film ? Il est irréprochable.", "Have you seen the latest film? It is flawless."],
      ["Je bosse dans une librairie.", "I work in a bookshop (familiar)."],
      ["Ce bouquin est génial.", "This book is great (familiar)."],
      ["Cet ouvrage a reçu un prix littéraire.", "This work received a literary prize (formal)."],
      ["Il est un peu relou, ton copain.", "Your friend's a bit annoying (familiar)."],
      ["Je l'ignore, Madame.", "I don't know, Madam (formal)."]
    ],
    quiz: [
      { q: "Which word is familiar?", o: ["une automobile", "une voiture", "une bagnole"], a: 2, ex: "bagnole is familiar." },
      { q: "The formal equivalent of “un livre” is:", o: ["un bouquin", "un ouvrage", "un bouquinage"], a: 1, ex: "un ouvrage (formal)." },
      { q: "“J'sais pas” is:", o: ["familiar", "standard", "formal"], a: 0, ex: "The ne disappears: familiar." },
      { q: "“relou” comes from:", o: ["lourd, in verlan", "relaxer", "rouler"], a: 0, ex: "Verlan: lourd → relou (annoying)." },
      { q: "In a cover letter, you write:", o: ["Je bosse depuis cinq ans.", "Je travaille depuis cinq ans.", "J'taffe depuis cinq ans."], a: 1, ex: "Standard French in formal writing." }
    ]
  },
  {
    id: 92, level: "B2", kind: "functional", icon: "frame",
    title: "Everyday French: analysing a work of art or a text", title_fr: "Le français de tous les jours : analyser une œuvre ou un texte",
    subtitle: "Present a work, describe it, interpret it, and give a nuanced personal response.", subtitle_fr: "Présenter une œuvre, la décrire, l'interpréter, et donner un avis personnel nuancé.",
    body: `
<h2>Presenting</h2>
<p><s-fr>Il s'agit d'un tableau peint par… en…</s-fr> · <s-fr>Ce texte est extrait de…</s-fr> · <s-fr>Cette œuvre appartient au courant…</s-fr></p>
<h2>Describing</h2>
<p>A picture: <s-fr>Au premier plan, …</s-fr> · <s-fr>À l'arrière-plan, …</s-fr> · <s-fr>Au centre, …</s-fr> · <s-fr>Les couleurs sont…</s-fr> A text: <s-fr>Le texte s'ouvre sur…</s-fr> · <s-fr>Le ton est ironique, mélancolique, léger…</s-fr></p>
<h2>Interpreting</h2>
<p><s-fr>L'artiste cherche à…</s-fr> · <s-fr>Cela suggère…</s-fr> · <s-fr>Cela évoque…</s-fr> · <s-fr>On peut y voir…</s-fr> · <s-fr>Ce qui frappe, c'est…</s-fr> · <s-fr>Le contraste entre… et… montre que…</s-fr></p>
<h2>Your personal response</h2>
<p><s-fr>Ce qui me touche dans cette œuvre, c'est…</s-fr> · <s-fr>J'apprécie particulièrement…</s-fr> · <s-fr>Ce qui me convainc moins, c'est…</s-fr></p>
<div class="tip">In French, <s-fr>il s'agit de</s-fr> is always impersonal: <s-fr>Dans ce roman, il s'agit d'une famille…</s-fr> Never <s-fr>le roman s'agit de</s-fr>: say <s-fr>le roman parle de</s-fr> or <s-fr>le roman raconte</s-fr>.</div>
`,
    examples: [
      ["Il s'agit d'un tableau peint par Berthe Morisot en 1872.", "It's a painting by Berthe Morisot, from 1872."],
      ["Au premier plan, une jeune femme regarde un bébé endormi.", "In the foreground, a young woman is looking at a sleeping baby."],
      ["Les couleurs douces créent une impression de calme.", "The soft colours create a feeling of calm."],
      ["Ce qui frappe, c'est le contraste entre l'ombre et la lumière.", "What's striking is the contrast between shadow and light."],
      ["L'auteur cherche à dénoncer l'injustice.", "The author is trying to denounce injustice."],
      ["Cela évoque la fragilité de l'enfance.", "It evokes the fragility of childhood."],
      ["Ce qui me touche, c'est la simplicité du sujet.", "What moves me is the simplicity of the subject."]
    ],
    quiz: [
      { q: "“In the background” is:", o: ["au premier plan", "à l'arrière-plan", "au fond plan"], a: 1, ex: "à l'arrière-plan." },
      { q: "“The novel is about a family” is:", o: ["Le roman s'agit d'une famille.", "Dans le roman, il s'agit d'une famille.", "Le roman il s'agit une famille."], a: 1, ex: "il s'agit de is impersonal." },
      { q: "To interpret, you can say:", o: ["Cela suggère…", "Au premier plan…", "Ce texte est extrait de…"], a: 0, ex: "Cela suggère / évoque…" },
      { q: "“The tone is ironic” is:", o: ["La tonne est ironique.", "Le ton est ironique.", "Le ton est ironie."], a: 1, ex: "le ton (masculine); ironique is the adjective." },
      { q: "A nuanced reservation:", o: ["C'est nul.", "Ce qui me convainc moins, c'est la fin.", "Je déteste."], a: 1, ex: "Ce qui me convainc moins, c'est…" }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    90: {
      gap: [["Ce voyage était très ___. (fatiguer, adjective)", "fatigant"], ["Son argument est ___. (convaincre, adjective)", "convaincant"], ["Les visiteurs ___ un billet peuvent entrer. (posséder, participle)", "possédant"], ["___ fini son tableau, le peintre l'a exposé. (having)", "Ayant"]],
      fix: [["C'est une histoire passionnant.", "C'est une histoire passionnante.", "A verbal adjective agrees with the noun."], ["Des tableaux représentants la mer.", "Des tableaux représentant la mer.", "Followed by an object, it's a participle: invariable."]],
      task: ["Describe a tiring but fascinating day with at least two verbal adjectives, one present participle and one ayant + past participle.", "Décris une journée fatigante mais passionnante avec au moins deux adjectifs verbaux, un participe présent et ayant + participe passé.", "Samedi, j'ai passé une journée fatigante mais passionnante au musée. Il y avait une exposition présentant des peintres du XIXe siècle. Ayant marché pendant cinq heures, j'avais mal aux pieds le soir. Mais les explications du guide étaient si captivantes que je ne voyais pas le temps passer."]
    },
    91: {
      gap: [["Familier : une bagnole. Courant : une ___.", "voiture"], ["Courant : un livre. Soutenu : un ___.", "ouvrage"], ["Familier : J'sais pas. Courant : Je ne ___ pas.", "sais"], ["Verlan : relou = ___. (annoying)", "lourd"]],
      fix: [["Madame, je bosse dans votre entreprise depuis deux ans.", "Madame, je travaille dans votre entreprise depuis deux ans.", "In a formal context, standard French: travailler."], ["T'as reçu mon message, Monsieur le Directeur ?", "Avez-vous reçu mon message, Monsieur le Directeur ?", "With a director: vous and inversion."]],
      task: ["Rewrite Théo's familiar message in standard French: Salut ! J'ai pas pu bosser hier, j'étais crevé. T'as le bouquin ? On se voit demain ?", "Réécris ce message familier de Théo en français courant : Salut ! J'ai pas pu bosser hier, j'étais crevé. T'as le bouquin ? On se voit demain ?", "Bonjour ! Je n'ai pas pu travailler hier, j'étais très fatigué. Est-ce que tu as le livre ? Est-ce qu'on se voit demain ?"]
    },
    92: {
      gap: [["Il s'___ d'un tableau peint en 1872. (it's about)", "agit"], ["Au premier ___, une femme regarde un bébé. (foreground)", "plan"], ["Cela ___ la fragilité de l'enfance. (evokes)", "évoque"], ["Ce qui ___, c'est le contraste. (is striking)", "frappe"]],
      fix: [["Le roman s'agit d'une famille.", "Dans le roman, il s'agit d'une famille.|Le roman parle d'une famille.|Le roman raconte l'histoire d'une famille.", "il s'agit de is always impersonal."], ["Au fond plan, on voit des montagnes.", "À l'arrière-plan, on voit des montagnes.", "In the background: à l'arrière-plan."]],
      task: ["Describe and interpret a photo or a painting you like in five sentences: present it, describe it, interpret it, give your response.", "Décris et interprète une photo ou un tableau que tu aimes en cinq phrases : présente-le, décris-le, interprète-le, donne ton avis.", "Il s'agit d'une photo prise dans le métro de Paris. Au premier plan, un vieil homme lit un journal ; à l'arrière-plan, des jeunes regardent leur téléphone. Ce qui frappe, c'est le contraste entre ces deux générations. Cela évoque peut-être le changement de nos habitudes. Ce qui me touche, c'est le calme du vieil homme au milieu de la foule."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "artabstrait", lesson: 92, level: "B2", icon: "palette", partner: "Adèle", role: "a friend",
    title: "At the exhibition", title_fr: "Devant le tableau",
    setting: "At a modern art exhibition, your friend Adèle thinks an abstract painting is pointless. Help her look at it differently.", setting_fr: "Dans une exposition d'art moderne, ton amie Adèle trouve qu'un tableau abstrait n'a aucun intérêt. Aide-la à le regarder autrement.",
    turns: [
      { p: "Franchement, ce tableau, c'est n'importe quoi. Trois carrés bleus sur un fond blanc… mon neveu ferait pareil !", fr: "Honestly, this painting is rubbish. Three blue squares on a white background… my nephew could do the same!" },
      { y: ["Je comprends ta réaction, mais ce qui me frappe, c'est la lumière qui se dégage des couleurs.", "Je comprends ta réaction, mais ce que me frappe, c'est la lumière qui se dégage des couleurs.", "Je comprends ta réaction, mais ce qui me frappe, c'est la lumière qui se dégageant des couleurs."], fr: "I understand your reaction, but what strikes me is the light that comes from the colours.", why: "ce qui (subject); a conjugated verb after qui." },
      { p: "La lumière ? Moi, je vois juste du bleu.", fr: "Light? I just see blue." },
      { y: ["Regarde de plus près : le bleu n'est jamais le même. On dirait la mer, changeant à chaque heure de la journée.", "Regarde de plus près : le bleu n'est jamais le même. On dirait la mer, changeante à chaque heure de la journée.", "Regarde de plus près : le bleu n'est jamais le même. On dirait la mer, en changeante à chaque heure de la journée."], fr: "Look more closely: the blue is never the same. It's like the sea, changing with every hour of the day.", why: "Followed by a complement, the -ant form is a participle: invariable." },
      { p: "Mouais… Et le titre, c'est quoi ?", fr: "Hmm… And what's the title?" },
      { y: ["Il s'agit d'une œuvre intitulée Marée. L'artiste cherche à évoquer le mouvement de l'eau.", "Il s'agit une œuvre intitulée Marée. L'artiste cherche à évoquer le mouvement de l'eau.", "Elle s'agit d'une œuvre intitulée Marée. L'artiste cherche à évoquer le mouvement de l'eau."], fr: "It's a work called Tide. The artist is trying to evoke the movement of water.", why: "il s'agit de: always impersonal." },
      { p: "Bon, je reconnais que c'est apaisant. Mais de là à payer quinze euros l'entrée…", fr: "OK, I admit it's soothing. But paying fifteen euros to get in…" },
      { y: ["C'est vrai que c'est cher. Cela dit, l'exposition est passionnante, et il y a un tarif réduit pour les étudiants.", "C'est vrai que c'est cher. Cela dit, l'exposition est passionnant, et il y a un tarif réduit pour les étudiants.", "C'est vrai que c'est cher. Cela dit, l'exposition est passionnante, et il y a un tarif réduisant pour les étudiants."], fr: "It's true that it's expensive. Still, the exhibition is fascinating, and there's a reduced rate for students.", why: "A verbal adjective agrees: passionnante." },
      { p: "Ha ha, d'accord, tu m'as presque convaincue.", fr: "Ha ha, OK, you've almost convinced me." },
      { y: ["Ayant vu toute l'exposition, je peux te dire que la meilleure salle est la suivante. On y va ?", "Ayant vu toute l'exposition, je peux te dire que la meilleure salle est la suivante. On va y ?", "Avant vu toute l'exposition, je peux te dire que la meilleure salle est la suivante. On y va ?"], fr: "Having seen the whole exhibition, I can tell you the best room is the next one. Shall we go?", why: "ayant + past participle; on y va." }
    ] }
  );

  W.READINGS.push({
    id: "impressionnisme", level: "B2", icon: "palette", title: "1874 : la naissance de l'impressionnisme", genre: "Cultural history",
    intro: "How a group of rejected painters and a mocking critic gave its name to one of the best-known movements in art. Participles and the vocabulary of art.",
    intro_fr: "Comment un groupe de peintres refusés et un critique moqueur ont donné son nom à l'un des mouvements les plus connus de l'histoire de l'art. Les participes et le vocabulaire de l'art.",
    paragraphs: [
      { en: "Paris, avril 1874. Dans l'ancien atelier du photographe Nadar, boulevard des Capucines, une trentaine d'artistes ouvrent une exposition pas comme les autres. Refusés par le Salon officiel, qui décidait alors quels peintres méritaient d'être vus, ils ont choisi de montrer eux-mêmes leurs œuvres au public.", fr: "Paris, April 1874. In the former studio of the photographer Nadar, on the boulevard des Capucines, around thirty artists open an exhibition like no other. Rejected by the official Salon, which then decided which painters deserved to be seen, they chose to show their works to the public themselves." },
      { en: "Parmi eux, Claude Monet, Auguste Renoir, Edgar Degas, Camille Pissarro, Paul Cézanne, ou encore Berthe Morisot, l'une des rares femmes du groupe. Leurs toiles, souvent peintes en plein air et saisissant la lumière d'un instant, surprennent des visiteurs habitués aux grandes scènes historiques au fini parfait.", fr: "Among them were Claude Monet, Auguste Renoir, Edgar Degas, Camille Pissarro, Paul Cézanne, and Berthe Morisot, one of the few women in the group. Their canvases, often painted outdoors and capturing the light of a moment, surprise visitors used to grand historical scenes with a perfect finish." },
      { en: "La critique est sévère. Dans le journal satirique Le Charivari, Louis Leroy se moque d'un tableau de Monet représentant le port du Havre au lever du soleil, intitulé Impression, soleil levant. Il intitule ironiquement son article L'Exposition des impressionnistes. Le mot, d'abord méprisant, va donner son nom à tout un mouvement.", fr: "The critics are harsh. In the satirical paper Le Charivari, Louis Leroy mocks a painting by Monet showing the port of Le Havre at sunrise, called Impression, Sunrise. He ironically titles his article The Exhibition of the Impressionists. The word, contemptuous at first, would give its name to a whole movement." },
      { en: "Aujourd'hui, il est difficile d'imaginer que ces œuvres aient pu choquer. Les toiles impressionnistes comptent parmi les plus admirées au monde, et le musée d'Orsay, à Paris, en conserve une collection exceptionnelle.", fr: "Today, it's hard to imagine that these works could have shocked anyone. Impressionist paintings are among the most admired in the world, and the Musée d'Orsay, in Paris, holds an exceptional collection of them." },
      { en: "Cette histoire rappelle une chose essentielle : ce qui paraît audacieux, voire scandaleux, à une époque devient parfois, quelques décennies plus tard, un classique. Une leçon de modestie pour les critiques, et pour les visiteurs pressés de juger.", fr: "This story is a reminder of something essential: what seems daring, even scandalous, in one era sometimes becomes a classic a few decades later. A lesson in modesty for critics, and for visitors in a hurry to judge." }
    ],
    glossary: { "atelier": "studio", "trentaine": "about thirty", "refusés": "rejected", "officiel": "official", "méritaient": "deserved", "saisissant": "capturing", "habitués": "used to", "sévère": "harsh", "satirique": "satirical", "moque": "mocks (se moquer de)", "levant": "rising", "ironiquement": "ironically", "méprisant": "contemptuous", "admirées": "admired", "conserve": "holds, keeps", "audacieux": "daring, bold", "voire": "even", "scandaleux": "scandalous", "décennies": "decades", "modestie": "modesty", "pressés": "in a hurry" },
    questions: [
      { q: "Pourquoi ces artistes ont-ils organisé leur propre exposition ?", o: ["Ils avaient été refusés par le Salon officiel.", "Ils voulaient vendre des photos.", "Nadar les avait invités au Louvre."], a: 0 },
      { q: "Qu'est-ce qui surprend les visiteurs ?", o: ["Les grandes scènes historiques", "Des toiles peintes en plein air qui saisissent la lumière d'un instant", "Les sculptures"], a: 1 },
      { q: "D'où vient le mot impressionnistes ?", o: ["D'un livre de Monet", "Du nom d'une rue", "D'un article moqueur sur un tableau de Monet"], a: 2 },
      { q: "Où peut-on voir une grande collection impressionniste aujourd'hui ?", o: ["Au musée d'Orsay", "Au Charivari", "Boulevard des Capucines"], a: 0 },
      { q: "Quelle leçon l'article tire-t-il ?", o: ["Les critiques ont toujours raison.", "Ce qui choque une époque peut devenir un classique.", "Il ne faut pas visiter les musées."], a: 1 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-b2-6", unit: "b2-6", level: "B2", icon: "image",
    title: "L'audioguide : Le Berceau", title_fr: "L'audioguide : Le Berceau",
    context: "A museum audio guide presents Le Berceau (The Cradle), painted by Berthe Morisot in 1872.", context_fr: "Un audioguide de musée présente Le Berceau, peint par Berthe Morisot en 1872.",
    words: [["le berceau", "the cradle"], ["endormi", "asleep"], ["le menton", "the chin"], ["le voile", "the veil"], ["la touche", "the brushstroke"]],
    lines: [["Guide", "Bienvenue dans la salle consacrée à Berthe Morisot. Approchez-vous du tableau intitulé Le Berceau, peint en 1872.", "fr-FR"], ["Guide", "Au premier plan, une jeune femme, Edma, la sœur de l'artiste, est assise près d'un berceau. Elle regarde son bébé endormi, le menton appuyé sur sa main.", "fr-FR"], ["Guide", "Remarquez le voile transparent qui entoure le berceau. Morisot l'a peint avec des touches légères, presque blanches, laissant deviner le visage de l'enfant.", "fr-FR"], ["Guide", "Ce qui frappe, c'est le contraste entre la douceur des couleurs et le regard sérieux, peut-être un peu mélancolique, de la mère.", "fr-FR"], ["Guide", "Ce tableau a été présenté en 1874, lors de la première exposition des peintres qu'on appellera bientôt les impressionnistes. Morisot était l'une des rares femmes à exposer avec eux.", "fr-FR"], ["Guide", "Aujourd'hui, Le Berceau est conservé au musée d'Orsay. Pour poursuivre la visite, dirigez-vous vers la salle suivante, à votre gauche.", "fr-FR"]],
    gist: ["Que présente l'audioguide ?", ["Un tableau de Berthe Morisot", "La vie de Monet", "Une sculpture"]],
    detail: [["Qui est la jeune femme du tableau ?", ["La sœur de l'artiste", "L'artiste elle-même", "Une inconnue"]], ["Comment le voile du berceau est-il peint ?", ["Avec des touches légères, presque blanches", "En noir", "Avec des couleurs vives"]], ["Qu'est-ce qui frappe, selon le guide ?", ["Le contraste entre la douceur des couleurs et le regard sérieux de la mère", "La taille du tableau", "Le cadre doré"]], ["Où le tableau est-il conservé aujourd'hui ?", ["Au musée d'Orsay", "Au Louvre", "À Londres"]]],
    decode: ["laissant deviner le visage de l'enfant", "le menton appuyé sur sa main"],
    tip: "Audio guides move from the whole to the details: au premier plan, remarquez, ce qui frappe. Picture the painting in your mind as you listen.", tip_fr: "Les audioguides vont de l'ensemble aux détails : au premier plan, remarquez, ce qui frappe. Imagine le tableau en écoutant."
  }]);

  W.LEXIS = W.LEXIS || {};
  W.LEXIS["b2-6"] = {
    colloc: [
      ["brosser le portrait de", "to paint a picture of (to describe)", "L'autrice brosse le portrait d'une famille ordinaire.", "brosse", ["lave", "frotte"]],
      ["rendre hommage à", "to pay tribute to", "Le musée rend hommage à Berthe Morisot.", "rend", ["fait", "donne"]],
      ["susciter l'émotion", "to stir emotion", "Ce tableau suscite l'émotion des visiteurs.", "suscite", ["lève", "porte"]],
      ["laisser libre cours à", "to give free rein to", "Elle laisse libre cours à son imagination.", "cours", ["voie", "route"]],
      ["tenir en haleine", "to keep in suspense", "Ce roman m'a tenu en haleine jusqu'à la fin.", "haleine", ["souffle", "attente"]],
      ["monter une pièce", "to stage a play", "La troupe monte une pièce de Molière.", "monte", ["lève", "dresse"]],
      ["connaître un grand succès", "to be a great success", "Ce film a connu un grand succès.", "connu", ["su", "tenu"]],
      ["jeter un coup d'œil", "to have a quick look", "Jette un coup d'œil à cette affiche.", "Jette", ["Mets", "Tire"]],
      ["faire salle comble", "to play to a full house", "Le concert a fait salle comble.", "comble", ["pleine", "entière"]],
      ["donner vie à", "to bring to life", "Le metteur en scène donne vie aux personnages.", "donne", ["met", "porte"]]
    ],
    wf: [
      ["La ___ impressionniste a révolutionné l'art. (PEINDRE)", "peinture"],
      ["Cette ___ a demandé trois ans de travail. (CRÉER)", "création"],
      ["Ce roman montre une grande ___. (IMAGINER)", "imagination"],
      ["La fin du film est très ___. (ÉMOUVOIR)", "émouvante"],
      ["Ce peintre a un style très ___. (RÉEL)", "réaliste"],
      ["Les ___ ont adoré son dernier livre. (LIRE)", "lecteurs"],
      ["On admire l'___ de cette mise en scène. (ORIGINAL)", "originalité"],
      ["Sa démonstration était tout à fait ___. (CONVAINCRE)", "convaincante"]
    ],
    kwt: [
      ["Après avoir terminé son roman, elle est partie en vacances.", "AYANT", "___ son roman, elle est partie en vacances.", "Ayant terminé|Ayant fini"],
      ["Ce travail me fatigue beaucoup.", "FATIGANT", "Ce travail est ___.", "très fatigant"],
      ["T'as vu ce film ?", "AVEZ", "___ ce film ?", "Avez-vous vu"],
      ["Ce texte parle de l'exil.", "AGIT", "Dans ce texte, il ___ l'exil.", "s'agit de"],
      ["Les personnes qui possèdent un billet peuvent entrer.", "POSSÉDANT", "Les personnes ___ peuvent entrer.", "possédant un billet"],
      ["Ce qui m'impressionne dans ce tableau, c'est la lumière.", "FRAPPE", "Ce ___ dans ce tableau, c'est la lumière.", "qui me frappe"]
    ],
    idioms: [
      ["faire un tabac", "avoir un très grand succès", "to be a big hit", "Son nouvel album fait un tabac.", "fait un tabac"],
      ["en mettre plein la vue", "impressionner fortement", "to dazzle", "Les décors en mettent plein la vue.", "en mettent plein la vue"],
      ["un navet", "un très mauvais film", "a turkey (a flop)", "Ce film ? Un vrai navet !", "Un vrai navet"],
      ["être aux premières loges", "être très bien placé pour voir", "to have a ringside seat", "Au concert, on était aux premières loges.", "aux premières loges"],
      ["voler la vedette", "attirer toute l'attention à la place de quelqu'un", "to steal the show", "Le petit chien a volé la vedette aux acteurs.", "volé la vedette"],
      ["brûler les planches", "jouer sur scène avec beaucoup de talent", "to give a brilliant stage performance", "Cette jeune actrice brûle les planches.", "brûle les planches"],
      ["tirer sa révérence", "partir, prendre sa retraite", "to bow out", "Après cinquante ans de carrière, il tire sa révérence.", "tire sa révérence"],
      ["c'est du grand art", "c'est remarquablement bien fait", "it's a masterpiece of its kind", "Ce dernier chapitre, c'est du grand art.", "c'est du grand art"]
    ]
  };

  W.PROMPTS.push({ id: "fr-b2-6", level: "B2", q: "Parle d'une œuvre (un tableau, un livre, une chanson, un film) qui compte pour toi. Décris-la et explique ce qu'elle t'apporte.", fr: "Talk about a work (a painting, a book, a song, a film) that matters to you. Describe it and explain what it gives you.", time: 180,
    phrases: ["Il s'agit de…", "Au premier plan… / Le texte s'ouvre sur…", "Ce qui me frappe, c'est…", "Cela évoque…", "Ce qui me touche, c'est…"],
    model: "L'œuvre qui compte le plus pour moi, ce sont les Nymphéas de Claude Monet, au musée de l'Orangerie, à Paris. Il s'agit d'immenses tableaux qui représentent l'étang de son jardin de Giverny, à différents moments de la journée. Ce qui me frappe, c'est qu'on se trouve littéralement au milieu de l'eau et des reflets. Cela évoque le passage du temps, mais d'une façon très apaisante. Ce qui me touche, c'est le calme de cette salle : chaque fois que j'y vais, j'en ressors plus tranquille." });

  W.WRITING_GUIDE["b2-6"] = { genre: "An exhibition review (DELF B2)", genre_fr: "Une critique d'exposition (DELF B2)",
    plan: [["Give a title and present the exhibition: where, until when, what.", "Donne un titre et présente l'exposition : où, jusqu'à quand, quoi."], ["Describe a few works precisely.", "Décris quelques œuvres avec précision."], ["Interpret what you saw (ce qui frappe, cela évoque).", "Interprète ce que tu as vu (ce qui frappe, cela évoque)."], ["Assess the exhibition: strengths and one weakness.", "Évalue l'exposition : points forts et un point faible."], ["Recommend it, in a standard or formal register.", "Recommande-la, dans un registre courant ou soutenu."]],
    marks: [["Il s'agit d'une soixantaine d'affiches", "presenting the work", "présenter l'œuvre"], ["reconnaissable à son grand chapeau", "a precise description", "une description précise"], ["Ce qui frappe d'abord", "interpreting", "interpréter"], ["Ayant longtemps observé", "a perfect participle", "un participe composé"], ["des panneaux expliquant", "a present participle", "un participe présent"], ["passionnant pour les enfants", "a verbal adjective", "un adjectif verbal"]] };

  W.COURSE.push({ id: "b2-6", level: "B2", icon: "palette", title: "Arts and literature", title_fr: "Arts et littérature",
    intro: "In this unit, you'll talk about art and literature: present participles, verbal adjectives and the perfect participle, the three registers of French, and the French you need to analyse a painting or a text and give a nuanced opinion.",
    intro_fr: "Dans cette unité, tu vas parler d'art et de littérature : le participe présent, l'adjectif verbal et le participe composé, les trois registres du français, et le français qu'il faut pour analyser un tableau ou un texte et donner un avis nuancé.",
    can: ["Tell a present participle from a verbal adjective, and spell both", "Use the perfect participle in writing", "Recognise familiar, standard and formal French and choose the right register", "Present, describe and interpret a work of art or a text", "Write an exhibition review"],
    can_fr: ["Distinguer participe présent et adjectif verbal, et les écrire correctement", "Utiliser le participe composé à l'écrit", "Reconnaître le français familier, courant et soutenu et choisir le bon registre", "Présenter, décrire et interpréter une œuvre ou un texte", "Écrire une critique d'exposition"],
    lessons: [90, 91, 92], vocab: ["artsFR", "litteratureFR"], reading: "impressionnisme", prompt: "fr-b2-6",
    writing: { task: "You visited an exhibition. Write a review (250-280 words) for your school or neighbourhood newspaper: present the exhibition, describe and interpret some works, give its strengths and one weakness, and say whether you recommend it.", task_fr: "Tu as visité une exposition. Écris une critique (250 à 280 mots) pour le journal de ton école ou de ton quartier : présente l'exposition, décris et interprète quelques œuvres, donne ses points forts et un point faible, et dis si tu la recommandes.", words: "250-280",
      tips: ["Le musée accueille jusqu'au… une exposition consacrée à…", "Il s'agit de…", "Ce qui frappe d'abord, c'est…", "Seul petit regret : …", "En somme, …"],
      checklist: ["I presented the exhibition clearly", "I described and interpreted at least one work", "I used a present participle and a verbal adjective", "I gave a strength and a weakness", "I wrote between 250 and 280 words"],
      model: "Toulouse-Lautrec, l'affiche comme œuvre d'art\n\nLe musée des Beaux-Arts accueille jusqu'au 30 juin une exposition consacrée aux affiches d'Henri de Toulouse-Lautrec. Je l'ai visitée samedi dernier avec ma classe, et je vous la conseille vivement.\n\nIl s'agit d'une soixantaine d'affiches réalisées à la fin du XIXe siècle pour les cabarets et les salles de spectacle parisiens, comme le Moulin-Rouge. On y découvre les grandes figures de Montmartre : la danseuse Jane Avril, aux mouvements si élégants, ou le chansonnier Aristide Bruant, reconnaissable à son grand chapeau noir et à son écharpe rouge. Certaines affiches, de près de deux mètres de haut, étaient collées sur les murs de Paris.\n\nCe qui frappe d'abord, c'est la modernité de ces images. Avec quelques aplats de couleurs vives et des lignes très simples, l'artiste réussit à saisir un mouvement, une attitude, presque une personnalité. Ayant longtemps observé ces artistes, la nuit, dans les cabarets, il les représente sans les embellir, avec beaucoup d'humour et de tendresse.\n\nL'exposition est aussi très bien pensée : des panneaux expliquant les techniques d'impression permettent de comprendre comment ces affiches étaient fabriquées. Un atelier, passionnant pour les enfants, propose même de créer sa propre affiche. Seul petit regret : certaines salles sont un peu sombres, ce qui rend la lecture des textes fatigante.\n\nEn somme, cette exposition montre qu'une affiche publicitaire peut devenir une véritable œuvre d'art. Que vous aimiez la peinture ou non, ne la manquez pas : vous ne regarderez plus jamais les affiches de la même façon ! Comptez environ une heure et demie pour la visite." } });
})();
