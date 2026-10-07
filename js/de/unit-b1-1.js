/* Cours d'allemand, unité B1-1 « Memories / Souvenirs » : le prétérit de tous les verbes (réguliers, irréguliers,
   mixtes), als / wenn, le plus-que-parfait avec nachdem, bevor, während ; raconter une histoire et réagir.
   Explications et traductions en anglais ET en français. Personnages fictifs, prénoms allemands.
   Faits vérifiables seulement : le Mur de Berlin de 1961 à 1989 ; à l'automne 1989, manifestations du lundi à
   Leipzig (« Wir sind das Volk! ») ; le 9 novembre 1989, conférence de presse de Günter Schabowski (« sofort,
   unverzüglich ») ; ouverture du passage de la Bornholmer Straße peu avant minuit ; réunification le 3 octobre 1990 ;
   East Side Gallery = un long morceau du Mur couvert de peintures ; « Begrüßungsgeld » de 100 DM pour les visiteurs
   venus de RDA. Écrit au format du Goethe-Zertifikat B1 (Schreiben, partie 1 : un e-mail personnel d'environ 80 mots). */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "erinnerungDE", icon: "history", title: "Memories and life stories", title_fr: "Souvenirs et parcours de vie", level: "B1", words: [
    ["die Erinnerung, -en", "the memory", "le souvenir", "Ich habe schöne Erinnerungen an meine Kindheit."],
    ["die Kindheit", "childhood", "l'enfance", "In meiner Kindheit haben wir auf dem Land gewohnt."],
    ["die Jugend", "youth", "la jeunesse", "In seiner Jugend spielte er Gitarre in einer Band."],
    ["aufwachsen", "to grow up", "grandir", "Sie ist in Leipzig aufgewachsen."],
    ["damals", "back then, at that time", "à l'époque", "Damals gab es noch keine Handys."],
    ["das Erlebnis, -se", "the experience (something that happened to you)", "l'expérience vécue, l'aventure", "Die Reise war ein tolles Erlebnis."],
    ["erleben", "to experience, to go through", "vivre (une expérience)", "Wir haben viel zusammen erlebt."],
    ["das Ereignis, -se", "the event", "l'événement", "Der Mauerfall war ein historisches Ereignis."],
    ["geschehen", "to happen (formal)", "se produire, arriver", "Das geschah im Herbst 1989."],
    ["die Heimat", "home, the place you come from", "le pays natal, la région d'origine", "Meine Heimat ist ein kleines Dorf in Bayern."],
    ["auswandern", "to emigrate", "émigrer", "Ihre Großeltern sind nach Kanada ausgewandert."],
    ["die Grenze, -n", "the border", "la frontière", "Die Grenze war bis 1989 geschlossen."],
    ["die Mauer, -n", "the wall", "le mur", "Die Mauer teilte Berlin in Ost und West."],
    ["teilen", "to divide; to share", "diviser ; partager", "Wir teilen uns eine Wohnung."],
    ["stolz auf", "proud of", "fier de", "Meine Eltern sind stolz auf mich."],
    ["das Jahrzehnt, -e", "the decade", "la décennie", "In den letzten Jahrzehnten hat sich viel verändert."]
  ] },
  { id: "erzaehlenDE", icon: "message-square-quote", title: "Telling a story", title_fr: "Raconter", level: "B1", words: [
    ["Stell dir vor, …", "guess what, … / imagine, …", "imagine, … / tu sais quoi ? …", "Stell dir vor, ich habe meinen alten Lehrer getroffen!"],
    ["plötzlich", "suddenly", "soudain", "Plötzlich ging das Licht aus."],
    ["auf einmal", "all of a sudden", "tout à coup", "Auf einmal standen alle auf und klatschten."],
    ["zuerst", "first, at first", "d'abord", "Zuerst habe ich gar nichts verstanden."],
    ["kurz danach", "shortly afterwards", "peu après", "Kurz danach kam die Polizei."],
    ["schließlich", "finally, in the end", "finalement", "Schließlich haben wir den Weg doch noch gefunden."],
    ["zum Glück", "luckily", "heureusement", "Zum Glück war niemand verletzt."],
    ["Und dann?", "and then?", "et ensuite ?", "Und dann? Was hast du gemacht?"],
    ["Wie ging es weiter?", "what happened next?", "et la suite ?", "Das ist ja spannend! Wie ging es weiter?"],
    ["Das gibt's doch nicht!", "no way!, I don't believe it!", "c'est pas vrai !", "Du hast im Lotto gewonnen? Das gibt's doch nicht!"],
    ["Echt?", "really?", "vraiment ?", "Echt? Das wusste ich nicht."],
    ["unglaublich", "unbelievable", "incroyable", "Die Geschichte ist unglaublich, aber wahr."],
    ["peinlich", "embarrassing", "gênant", "Das war mir total peinlich."],
    ["sich ärgern", "to be annoyed", "s'énerver, être agacé", "Ich habe mich furchtbar über den Fehler geärgert."],
    ["erschrecken", "to get a fright", "sursauter, prendre peur", "Ich bin furchtbar erschrocken, als das Telefon klingelte."],
    ["Ich werde nie vergessen, wie …", "I'll never forget how …", "je n'oublierai jamais comment …", "Ich werde nie vergessen, wie glücklich wir waren."]
  ] });

  W.LESSONS.push(
  {
    id: 43, level: "B1", icon: "book-open",
    title: "Er kam, sah und lachte: the Präteritum of all verbs", title_fr: "Er kam, sah und lachte : le prétérit de tous les verbes",
    subtitle: "Regular, irregular and mixed verbs: the past of books, newspapers and written stories.", subtitle_fr: "Verbes réguliers, irréguliers et mixtes : le passé des livres, des journaux et des récits écrits.",
    body: `
<h2>Three kinds of verbs</h2>
<p><b>Regular</b>: stem + <b>-te</b>: <s-de>machen</s-de> → <s-de>machte</s-de> · <s-de>arbeiten</s-de> → <s-de>arbeitete</s-de>. <b>Irregular</b>: a new vowel, no ending with <s-de>ich</s-de> and <s-de>er / sie / es</s-de>: <s-de>fahren</s-de> → <s-de>fuhr</s-de>. <b>Mixed</b>: a new vowel <i>and</i> -te: <s-de>bringen</s-de> → <s-de>brachte</s-de>, <s-de>denken</s-de> → <s-de>dachte</s-de>, <s-de>kennen</s-de> → <s-de>kannte</s-de>, <s-de>wissen</s-de> → <s-de>wusste</s-de>.</p>
<h2>Irregular verbs to know</h2>
<table>
<tr><th>Infinitive</th><th>Präteritum</th></tr>
<tr><td><s-de>fahren</s-de></td><td><s-de>fuhr</s-de></td></tr>
<tr><td><s-de>fliegen</s-de></td><td><s-de>flog</s-de></td></tr>
<tr><td><s-de>lesen</s-de></td><td><s-de>las</s-de></td></tr>
<tr><td><s-de>liegen</s-de></td><td><s-de>lag</s-de></td></tr>
<tr><td><s-de>sitzen</s-de></td><td><s-de>saß</s-de></td></tr>
<tr><td><s-de>stehen</s-de></td><td><s-de>stand</s-de></td></tr>
<tr><td><s-de>treffen</s-de></td><td><s-de>traf</s-de></td></tr>
<tr><td><s-de>trinken</s-de></td><td><s-de>trank</s-de></td></tr>
<tr><td><s-de>schreiben</s-de></td><td><s-de>schrieb</s-de></td></tr>
<tr><td><s-de>ziehen</s-de></td><td><s-de>zog</s-de></td></tr>
<tr><td><s-de>werden</s-de></td><td><s-de>wurde</s-de></td></tr>
<tr><td><s-de>beginnen</s-de></td><td><s-de>begann</s-de></td></tr>
</table>
<p>Endings: <s-de>ich fuhr, du fuhrst, er fuhr, wir fuhren, ihr fuhrt, sie fuhren</s-de>. Separable verbs split as in the present: <s-de>Der Zug kam um acht an.</s-de> · <s-de>Sie stand früh auf.</s-de></p>
<h2>When do Germans use it?</h2>
<p>In writing (stories, reports, the news), the Präteritum is the normal past. When speaking, most verbs go in the Perfekt, but <s-de>sein</s-de>, <s-de>haben</s-de>, the modal verbs and a few common verbs (<s-de>es gab</s-de>, <s-de>ich wusste</s-de>, <s-de>ich fand</s-de>) are usually in the Präteritum: <s-de>Ich war müde, aber ich musste arbeiten.</s-de></p>
<div class="tip">English has the same three groups: walk → walked (regular), drive → drove (irregular), bring → brought, think → thought (mixed). Learn the German forms in threes, as in English: <s-de>fahren, fuhr, gefahren</s-de> · <s-de>bringen, brachte, gebracht</s-de>.</div>
`,
    body_fr: `
<h2>Trois sortes de verbes</h2>
<p><b>Réguliers</b> : radical + <b>-te</b> : <s-de>machen</s-de> → <s-de>machte</s-de> · <s-de>arbeiten</s-de> → <s-de>arbeitete</s-de>. <b>Irréguliers</b> : une nouvelle voyelle, sans terminaison avec <s-de>ich</s-de> et <s-de>er / sie / es</s-de> : <s-de>fahren</s-de> → <s-de>fuhr</s-de>. <b>Mixtes</b> : une nouvelle voyelle <i>et</i> -te : <s-de>bringen</s-de> → <s-de>brachte</s-de>, <s-de>denken</s-de> → <s-de>dachte</s-de>, <s-de>kennen</s-de> → <s-de>kannte</s-de>, <s-de>wissen</s-de> → <s-de>wusste</s-de>.</p>
<h2>Les irréguliers à connaître</h2>
<table>
<tr><th>Infinitif</th><th>Prétérit</th></tr>
<tr><td><s-de>fahren</s-de></td><td><s-de>fuhr</s-de></td></tr>
<tr><td><s-de>fliegen</s-de></td><td><s-de>flog</s-de></td></tr>
<tr><td><s-de>lesen</s-de></td><td><s-de>las</s-de></td></tr>
<tr><td><s-de>liegen</s-de></td><td><s-de>lag</s-de></td></tr>
<tr><td><s-de>sitzen</s-de></td><td><s-de>saß</s-de></td></tr>
<tr><td><s-de>stehen</s-de></td><td><s-de>stand</s-de></td></tr>
<tr><td><s-de>treffen</s-de></td><td><s-de>traf</s-de></td></tr>
<tr><td><s-de>trinken</s-de></td><td><s-de>trank</s-de></td></tr>
<tr><td><s-de>schreiben</s-de></td><td><s-de>schrieb</s-de></td></tr>
<tr><td><s-de>ziehen</s-de></td><td><s-de>zog</s-de></td></tr>
<tr><td><s-de>werden</s-de></td><td><s-de>wurde</s-de></td></tr>
<tr><td><s-de>beginnen</s-de></td><td><s-de>begann</s-de></td></tr>
</table>
<p>Terminaisons : <s-de>ich fuhr, du fuhrst, er fuhr, wir fuhren, ihr fuhrt, sie fuhren</s-de>. Les verbes séparables se séparent comme au présent : <s-de>Der Zug kam um acht an.</s-de> (Le train arriva à huit heures.) · <s-de>Sie stand früh auf.</s-de></p>
<h2>Quand l'emploie-t-on ?</h2>
<p>À l'écrit (récits, articles, informations), le prétérit est le passé normal, un peu comme le passé simple mais bien plus vivant. À l'oral, la plupart des verbes passent au Perfekt, mais <s-de>sein</s-de>, <s-de>haben</s-de>, les verbes de modalité et quelques verbes très courants (<s-de>es gab</s-de>, <s-de>ich wusste</s-de>, <s-de>ich fand</s-de>) restent en général au prétérit : <s-de>Ich war müde, aber ich musste arbeiten.</s-de> L'adjectif attribut ne s'accorde jamais en allemand : müde reste müde, quel que soit le sujet.</p>
<div class="tip">Apprends les formes par trois, comme on apprend les verbes irréguliers anglais : <s-de>fahren, fuhr, gefahren</s-de> · <s-de>bringen, brachte, gebracht</s-de>. Le français n'a pas cette distinction, mais l'anglais si : drive, drove, driven.</div>
`,
    examples: [
      ["Als Kind fuhr ich jeden Sommer zu meinen Großeltern.", "As a child I went to my grandparents' every summer.", "Enfant, j'allais chez mes grands-parents tous les étés."],
      ["Wir trafen uns zum ersten Mal in einem Café in Dresden.", "We met for the first time in a café in Dresden.", "Nous nous sommes rencontrés pour la première fois dans un café à Dresde."],
      ["Sie las den Brief und lachte.", "She read the letter and laughed.", "Elle lut la lettre et éclata de rire."],
      ["Ich wusste nicht, was ich sagen sollte.", "I didn't know what to say.", "Je ne savais pas quoi dire."],
      ["Er brachte Blumen mit und dachte an alles.", "He brought flowers and thought of everything.", "Il apporta des fleurs et pensa à tout."],
      ["Der Film begann um acht und dauerte drei Stunden.", "The film started at eight and lasted three hours.", "Le film commença à huit heures et dura trois heures."],
      ["Damals gab es in unserem Dorf nur ein Telefon.", "Back then there was only one telephone in our village.", "À l'époque, il n'y avait qu'un seul téléphone dans notre village."]
    ],
    quiz: [
      { q: "The Präteritum of “fahren” (ich):", q_fr: "Le prétérit de « fahren » (ich) :", o: ["ich fuhr", "ich fahrte", "ich fuhrte"], a: 0, ex: "Irregular: fahren → fuhr, no ending with ich.", ex_fr: "Irrégulier : fahren → fuhr, sans terminaison avec ich." },
      { q: "The Präteritum of “denken” (er):", q_fr: "Le prétérit de « denken » (er) :", o: ["er dachte", "er dank", "er denkte"], a: 0, ex: "Mixed verb: new vowel and -te: dachte.", ex_fr: "Verbe mixte : nouvelle voyelle et -te : dachte." },
      { q: "“Wir ___ uns im Park.” (treffen, Präteritum)", q_fr: "« Wir ___ uns im Park. » (treffen, prétérit)", o: ["trafen", "treffen", "trefften"], a: 0, ex: "treffen → traf, wir trafen.", ex_fr: "treffen → traf, wir trafen." },
      { q: "“The train arrived at eight.”", q_fr: "« Le train est arrivé à huit heures. »", o: ["Der Zug kam um acht an.", "Der Zug ankam um acht.", "Der Zug kam an um acht."], a: 0, ex: "Separable verb: the prefix goes to the end.", ex_fr: "Verbe séparable : la particule part à la fin." },
      { q: "When speaking, which verbs are usually in the Präteritum?", q_fr: "À l'oral, quels verbes sont en général au prétérit ?", o: ["sein, haben and the modal verbs", "all verbs", "only irregular verbs"], o_fr: ["sein, haben et les verbes de modalité", "tous les verbes", "seulement les verbes irréguliers"], a: 0, ex: "Ich war, ich hatte, ich musste… The others mostly go in the Perfekt.", ex_fr: "Ich war, ich hatte, ich musste… Les autres passent plutôt au Perfekt." }
    ]
  },
  {
    id: 44, level: "B1", icon: "history",
    title: "Als ich klein war: als, wenn and the Plusquamperfekt", title_fr: "Als ich klein war : als, wenn et le plus-que-parfait",
    subtitle: "Say when something happened, and what had happened before.", subtitle_fr: "Dire quand quelque chose s'est passé, et ce qui s'était passé avant.",
    body: `
<h2>als or wenn?</h2>
<p>Both mean "when", and both send the verb to the end. <s-de>als</s-de> is for <b>one</b> moment or period in the past: <s-de>Als ich zehn war, zogen wir nach Köln.</s-de> · <s-de>Als die Mauer fiel, war ich in Berlin.</s-de> <s-de>wenn</s-de> is for things that happened <b>again and again</b>, and for the present and the future: <s-de>Immer wenn es regnete, spielten wir Karten.</s-de> · <s-de>Wenn ich Zeit habe, rufe ich dich an.</s-de></p>
<table>
<tr><th></th><th>once</th><th>every time</th></tr>
<tr><td>past</td><td><s-de>als</s-de></td><td><s-de>(immer) wenn</s-de></td></tr>
<tr><td>present, future</td><td><s-de>wenn</s-de></td><td><s-de>wenn</s-de></td></tr>
</table>
<h2>The Plusquamperfekt: what had happened</h2>
<p>For something that happened <b>before</b> another past event: <s-de>hatte</s-de> or <s-de>war</s-de> + participle, like English "had done": <s-de>Als ich ankam, war der Zug schon abgefahren.</s-de> (When I arrived, the train had already left.) · <s-de>Ich hatte das Buch schon gelesen.</s-de></p>
<h2>nachdem, bevor, während</h2>
<p><s-de>nachdem</s-de> (after) usually takes the Plusquamperfekt: <s-de>Nachdem wir gegessen hatten, gingen wir spazieren.</s-de> · <s-de>bevor</s-de> (before): <s-de>Bevor ich ins Bett ging, las ich noch.</s-de> · <s-de>während</s-de> (while): <s-de>Während er kochte, deckte sie den Tisch.</s-de></p>
<div class="tip">When the time clause comes first, the main clause starts with the verb: <s-de>Als ich ankam, <b>war</b> der Zug weg.</s-de> Verb, comma, verb: the two verbs meet at the comma.</div>
`,
    body_fr: `
<h2>als ou wenn ?</h2>
<p>Les deux veulent dire « quand », et les deux envoient le verbe à la fin. <s-de>als</s-de> s'emploie pour <b>un seul</b> moment ou une période du passé : <s-de>Als ich zehn war, zogen wir nach Köln.</s-de> (Quand j'avais dix ans, nous avons déménagé à Cologne.) · <s-de>Als die Mauer fiel, war ich in Berlin.</s-de> <s-de>wenn</s-de> s'emploie pour ce qui se répétait (« chaque fois que »), et pour le présent et le futur : <s-de>Immer wenn es regnete, spielten wir Karten.</s-de> · <s-de>Wenn ich Zeit habe, rufe ich dich an.</s-de></p>
<table>
<tr><th></th><th>une fois</th><th>chaque fois</th></tr>
<tr><td>passé</td><td><s-de>als</s-de></td><td><s-de>(immer) wenn</s-de></td></tr>
<tr><td>présent, futur</td><td><s-de>wenn</s-de></td><td><s-de>wenn</s-de></td></tr>
</table>
<h2>Le plus-que-parfait : ce qui s'était passé</h2>
<p>Pour ce qui s'est passé <b>avant</b> un autre moment du passé : <s-de>hatte</s-de> ou <s-de>war</s-de> + participe, exactement comme le plus-que-parfait français : <s-de>Als ich ankam, war der Zug schon abgefahren.</s-de> (À mon arrivée, le train était déjà parti.) · <s-de>Ich hatte das Buch schon gelesen.</s-de> (J'avais déjà lu le livre.)</p>
<h2>nachdem, bevor, während</h2>
<p><s-de>nachdem</s-de> (après que) se construit en général avec le plus-que-parfait : <s-de>Nachdem wir gegessen hatten, gingen wir spazieren.</s-de> · <s-de>bevor</s-de> (avant de, avant que) : <s-de>Bevor ich ins Bett ging, las ich noch.</s-de> · <s-de>während</s-de> (pendant que) : <s-de>Während er kochte, deckte sie den Tisch.</s-de></p>
<div class="tip">Quand la subordonnée vient en premier, la principale commence par le verbe : <s-de>Als ich ankam, <b>war</b> der Zug weg.</s-de> Verbe, virgule, verbe : les deux verbes se rencontrent à la virgule.</div>
`,
    examples: [
      ["Als ich zehn war, zogen wir nach Köln.", "When I was ten, we moved to Cologne.", "Quand j'avais dix ans, nous avons déménagé à Cologne."],
      ["Immer wenn es regnete, spielten wir Karten.", "Whenever it rained, we played cards.", "Chaque fois qu'il pleuvait, nous jouions aux cartes."],
      ["Als ich am Bahnhof ankam, war der Zug schon abgefahren.", "When I got to the station, the train had already left.", "À mon arrivée à la gare, le train était déjà parti."],
      ["Nachdem wir gegessen hatten, gingen wir spazieren.", "After we had eaten, we went for a walk.", "Après avoir mangé, nous sommes allés nous promener."],
      ["Bevor sie nach Kanada auswanderte, verkaufte sie ihr Haus.", "Before she emigrated to Canada, she sold her house.", "Avant d'émigrer au Canada, elle a vendu sa maison."],
      ["Während er kochte, deckte sie den Tisch.", "While he was cooking, she laid the table.", "Pendant qu'il cuisinait, elle mettait la table."],
      ["Ich hatte so etwas noch nie erlebt.", "I had never experienced anything like it.", "Je n'avais jamais vécu une chose pareille."]
    ],
    quiz: [
      { q: "“___ ich klein war, wohnten wir in Hamburg.”", q_fr: "« ___ ich klein war, wohnten wir in Hamburg. »", o: ["Als", "Wenn", "Wann"], a: 0, ex: "One period in the past: als.", ex_fr: "Une seule période du passé : als." },
      { q: "“___ wir Ferien hatten, fuhren wir immer ans Meer.”", q_fr: "« ___ wir Ferien hatten, fuhren wir immer ans Meer. »", o: ["Wenn", "Als", "Ob"], a: 0, ex: "Every time (immer): wenn.", ex_fr: "Chaque fois (immer) : wenn." },
      { q: "“When I arrived, the film had already started.”", q_fr: "« À mon arrivée, le film avait déjà commencé. »", o: ["Als ich ankam, hatte der Film schon angefangen.", "Als ich ankam, hat der Film schon angefangen.", "Wenn ich ankam, hatte der Film schon angefangen."], a: 0, ex: "Before another past event: Plusquamperfekt (hatte angefangen); once: als.", ex_fr: "Avant un autre moment du passé : plus-que-parfait (hatte angefangen) ; une fois : als." },
      { q: "“Nachdem er die E-Mail ___, rief er mich an.”", q_fr: "« Nachdem er die E-Mail ___, rief er mich an. »", o: ["gelesen hatte", "las", "gelesen hat"], a: 0, ex: "nachdem + Plusquamperfekt.", ex_fr: "nachdem + plus-que-parfait." },
      { q: "Which sentence is correct?", q_fr: "Quelle phrase est correcte ?", o: ["Als ich ankam, war niemand da.", "Als ich ankam, niemand war da.", "Als ich kam an, war niemand da."], a: 0, ex: "Verb at the end of the time clause, then the verb first in the main clause.", ex_fr: "Verbe à la fin de la subordonnée, puis verbe en tête de la principale." }
    ]
  },
  {
    id: 45, level: "B1", kind: "functional", icon: "message-square-quote",
    title: "Everyday German: telling a story and reacting", title_fr: "L'allemand de tous les jours : raconter et réagir",
    subtitle: "Start a story, keep it exciting, finish it, and show you're listening.", subtitle_fr: "Commencer une histoire, la rendre vivante, la finir, et montrer que tu écoutes.",
    body: `
<h2>Starting</h2>
<p><s-de>Stell dir vor, was mir gestern passiert ist!</s-de> (Guess what happened to me yesterday!) · <s-de>Hab ich dir schon erzählt, dass…?</s-de> (Have I told you that…?) · <s-de>Letzten Sommer war ich in…</s-de></p>
<h2>Keeping it exciting</h2>
<p>Put the order of events in first position, and the verb comes next: <s-de>Zuerst… Dann… Plötzlich… Auf einmal… Kurz danach…</s-de> · <s-de>Plötzlich klingelte das Telefon.</s-de> Say how you felt: <s-de>Ich habe mich total gefreut / geärgert.</s-de> · <s-de>Ich bin furchtbar erschrocken.</s-de> · <s-de>Das war mir so peinlich!</s-de></p>
<h2>Finishing</h2>
<p><s-de>Zum Glück…</s-de> (Luckily…) · <s-de>Schließlich…</s-de> · <s-de>Am Ende war alles gut.</s-de> · <s-de>Ich werde nie vergessen, wie…</s-de></p>
<h2>Reacting when you listen</h2>
<p><s-de>Echt?</s-de> · <s-de>Das gibt's doch nicht!</s-de> (No way!) · <s-de>Oh nein!</s-de> · <s-de>Wie peinlich!</s-de> · <s-de>Und dann?</s-de> · <s-de>Wie ging es weiter?</s-de> · <s-de>Was hast du dann gemacht?</s-de> Short reactions keep the story going and show that you understand.</p>
<div class="tip">When telling a story out loud, use the Perfekt for most verbs and the Präteritum for <s-de>war</s-de>, <s-de>hatte</s-de>, <s-de>gab es</s-de> and the modal verbs. In an email, both are fine. This is exactly the task of the Goethe-Zertifikat B1 (writing, part 1): an email to a friend telling something you experienced.</div>
`,
    body_fr: `
<h2>Commencer</h2>
<p><s-de>Stell dir vor, was mir gestern passiert ist!</s-de> (Tu sais pas ce qui m'est arrivé hier !) · <s-de>Hab ich dir schon erzählt, dass…?</s-de> (Je t'ai déjà raconté que… ?) · <s-de>Letzten Sommer war ich in…</s-de></p>
<h2>Rendre le récit vivant</h2>
<p>Mets l'ordre des événements en première position, le verbe vient juste après : <s-de>Zuerst… Dann… Plötzlich… Auf einmal… Kurz danach…</s-de> · <s-de>Plötzlich klingelte das Telefon.</s-de> Dis ce que tu as ressenti : <s-de>Ich habe mich total gefreut / geärgert.</s-de> · <s-de>Ich bin furchtbar erschrocken.</s-de> · <s-de>Das war mir so peinlich!</s-de> (J'avais trop honte !)</p>
<h2>Finir</h2>
<p><s-de>Zum Glück…</s-de> (Heureusement…) · <s-de>Schließlich…</s-de> · <s-de>Am Ende war alles gut.</s-de> · <s-de>Ich werde nie vergessen, wie…</s-de></p>
<h2>Réagir quand tu écoutes</h2>
<p><s-de>Echt?</s-de> · <s-de>Das gibt's doch nicht!</s-de> (C'est pas vrai !) · <s-de>Oh nein!</s-de> · <s-de>Wie peinlich!</s-de> · <s-de>Und dann?</s-de> · <s-de>Wie ging es weiter?</s-de> · <s-de>Was hast du dann gemacht?</s-de> De petites réactions font avancer l'histoire et montrent que tu comprends.</p>
<div class="tip">À l'oral, raconte avec le Perfekt pour la plupart des verbes, et le prétérit pour <s-de>war</s-de>, <s-de>hatte</s-de>, <s-de>gab es</s-de> et les verbes de modalité. Dans un e-mail, les deux vont. C'est exactement la tâche du Goethe-Zertifikat B1 (écrit, partie 1) : un e-mail à un ami ou une amie pour raconter quelque chose que tu as vécu.</div>
`,
    examples: [
      ["Stell dir vor, was mir gestern passiert ist!", "Guess what happened to me yesterday!", "Tu sais pas ce qui m'est arrivé hier !"],
      ["Plötzlich klingelte das Telefon, und ich bin furchtbar erschrocken.", "Suddenly the phone rang, and I got a terrible fright.", "Soudain, le téléphone a sonné, et j'ai sursauté."],
      ["Zuerst habe ich nichts verstanden, aber dann wurde alles klar.", "At first I didn't understand anything, but then everything became clear.", "D'abord je n'ai rien compris, mais ensuite tout est devenu clair."],
      ["Das war mir so peinlich!", "I was so embarrassed!", "J'avais tellement honte !"],
      ["Zum Glück hatte ich mein Handy dabei.", "Luckily, I had my phone with me.", "Heureusement, j'avais mon portable sur moi."],
      ["Echt? Das gibt's doch nicht! Und dann?", "Really? No way! And then?", "Vraiment ? C'est pas vrai ! Et ensuite ?"],
      ["Ich werde nie vergessen, wie wir alle zusammen gelacht haben.", "I'll never forget how we all laughed together.", "Je n'oublierai jamais comment nous avons tous ri ensemble."]
    ],
    quiz: [
      { q: "Your friend says: “I won a trip to New York!” You react:", q_fr: "Quelqu'un te dit : « J'ai gagné un voyage à New York ! » Tu réagis :", o: ["Echt? Das gibt's doch nicht!", "Zum Glück…", "Stell dir vor!"], a: 0, ex: "Surprise: Echt? Das gibt's doch nicht!", ex_fr: "La surprise : Echt? Das gibt's doch nicht!" },
      { q: "“Plötzlich ___ das Licht aus.”", q_fr: "« Plötzlich ___ das Licht aus. »", o: ["ging", "gingt", "gegangen"], a: 0, ex: "Plötzlich in first position, then the verb: ging … aus.", ex_fr: "Plötzlich en première position, puis le verbe : ging … aus." },
      { q: "“Luckily, nobody was hurt.”", q_fr: "« Heureusement, personne n'a été blessé. »", o: ["Zum Glück war niemand verletzt.", "Zum Glück niemand war verletzt.", "Mit Glück war niemand verletzt."], a: 0, ex: "Zum Glück, then the verb.", ex_fr: "Zum Glück, puis le verbe." },
      { q: "To ask what happened next:", q_fr: "Pour demander la suite :", o: ["Wie ging es weiter?", "Wie geht es dir?", "Wo warst du?"], a: 0, ex: "Wie ging es weiter? = What happened next?", ex_fr: "Wie ging es weiter? = Et la suite ?" },
      { q: "“Das war mir so peinlich!” means:", q_fr: "« Das war mir so peinlich! » veut dire :", o: ["I was so embarrassed!", "That was so painful!", "That was so boring!"], o_fr: ["J'avais tellement honte !", "Ça faisait tellement mal !", "C'était tellement ennuyeux !"], a: 0, ex: "peinlich = embarrassing (not painful).", ex_fr: "peinlich = gênant (pas « pénible »)." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    43: {
      gap: [["Als Kind ___ ich jeden Sommer nach Italien. (fahren)", "fuhr"], ["Sie ___ den Brief zweimal. (lesen)", "las"], ["Er ___ Blumen mit. (bringen)", "brachte"], ["Ich ___ nicht, was ich sagen sollte. (wissen)", "wusste"]],
      fix: [["Gestern fahrte ich nach Berlin.", "Gestern fuhr ich nach Berlin.", "fahren is irregular: fuhr.", "fahren est irrégulier : fuhr."], ["Wir dankten lange über die Frage nach.", "Wir dachten lange über die Frage nach.", "denken is a mixed verb: dachte.", "denken est un verbe mixte : dachte."]],
      task: ["Write five sentences about your childhood in the Präteritum, with at least two irregular verbs and one mixed verb.", "Écris cinq phrases sur ton enfance au prétérit, avec au moins deux verbes irréguliers et un verbe mixte.", "Als Kind wohnte ich in einem kleinen Dorf. Jeden Morgen fuhr ich mit dem Bus zur Schule. Mein bester Freund hieß Felix, und wir spielten jeden Tag Fußball. Am Wochenende brachte meine Oma immer Kuchen mit. Damals wusste ich noch nicht, wie schön diese Zeit war."]
    },
    44: {
      gap: [["___ ich klein war, hatte ich Angst vor Hunden.", "Als"], ["Immer ___ meine Oma kam, backte sie einen Kuchen.", "wenn"], ["Als wir ankamen, ___ das Konzert schon angefangen.", "hatte"], ["Nachdem sie gegessen ___, ging sie spazieren.", "hatte"]],
      fix: [["Wenn ich gestern nach Hause kam, war niemand da.", "Als ich gestern nach Hause kam, war niemand da.", "One moment in the past: als, not wenn.", "Un seul moment du passé : als, pas wenn."], ["Als ich ankam, der Zug war schon weg.", "Als ich ankam, war der Zug schon weg.", "After the time clause, the main clause starts with the verb.", "Après la subordonnée, la principale commence par le verbe."]],
      task: ["Write four sentences about an important day in your life with als, wenn, nachdem and bevor.", "Écris quatre phrases sur un jour important de ta vie avec als, wenn, nachdem et bevor.", "Als ich achtzehn wurde, machte ich meinen Führerschein. Bevor ich die Prüfung machte, war ich sehr nervös. Nachdem ich bestanden hatte, fuhr ich sofort zu meinen Freunden. Und immer wenn ich heute Auto fahre, denke ich an diesen Tag."]
    },
    45: {
      gap: [["Stell dir ___, was mir passiert ist!", "vor"], ["Und ___? Was hast du gemacht?", "dann"], ["Zum ___ war niemand verletzt.", "Glück", "luckily", "heureusement"], ["Das gibt's doch ___!", "nicht", "no way!", "c'est pas vrai !"]],
      fix: [["Plötzlich das Telefon klingelte.", "Plötzlich klingelte das Telefon.", "Plötzlich takes the first position: the verb comes next.", "Plötzlich occupe la première position : le verbe vient juste après."], ["Das war mir so schmerzhaft, alle haben gelacht.", "Das war mir so peinlich, alle haben gelacht.", "Embarrassing is peinlich; schmerzhaft means painful.", "Gênant se dit peinlich ; schmerzhaft veut dire douloureux."]],
      task: ["Tell a short story (five sentences) of something that went wrong, with zuerst, plötzlich, zum Glück and schließlich.", "Raconte une petite histoire (cinq phrases) où quelque chose a mal tourné, avec zuerst, plötzlich, zum Glück et schließlich.", "Letzten Sonntag wollte ich einen Kuchen für meine Mutter backen. Zuerst lief alles gut. Plötzlich roch es in der ganzen Küche verbrannt! Zum Glück hatte ich noch Eier und Mehl. Schließlich habe ich einen zweiten Kuchen gebacken, und meine Mutter hat nichts gemerkt."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "klassentreffen", lesson: 44, level: "B1", icon: "users", partner: "Jana", role: "an old classmate", role_fr: "une ancienne camarade de classe",
    title: "The school reunion", title_fr: "Les retrouvailles de la classe",
    setting: "Twenty years after school, you meet your old classmate Jana at a class reunion. You remember the old days together.", setting_fr: "Vingt ans après le lycée, tu retrouves ton ancienne camarade Jana lors d'une réunion d'anciens élèves. Vous vous rappelez le bon vieux temps.",
    turns: [
      { p: "Das gibt's doch nicht, du bist es! Wie lange haben wir uns nicht gesehen?", en: "I don't believe it, it's you! How long has it been since we saw each other?", fr: "C'est pas vrai, c'est toi ! Ça fait combien de temps qu'on ne s'est pas vus ?" },
      { y: ["Seit zwanzig Jahren! Als wir die Schule beendet haben, bist du nach München gezogen, oder?", "Seit zwanzig Jahren! Wenn wir die Schule beendet haben, bist du nach München gezogen, oder?", "Seit zwanzig Jahren! Als wir die Schule haben beendet, bist du nach München gezogen, oder?"], en: "Twenty years! When we finished school, you moved to Munich, didn't you?", fr: "Vingt ans ! Quand on a fini le lycée, tu es partie à Munich, non ?", why: "One moment in the past: als; the verb at the end.", why_fr: "Un seul moment du passé : als ; le verbe à la fin." },
      { p: "Genau. Und weißt du noch, unser Lehrer, Herr Brückner? Immer wenn jemand zu spät kam, musste er singen!", en: "That's right. And do you remember our teacher, Mr Brückner? Every time someone was late, they had to sing!", fr: "Exactement. Et tu te souviens de notre prof, M. Brückner ? Chaque fois que quelqu'un arrivait en retard, il devait chanter !" },
      { y: ["Natürlich! Ich musste einmal ein ganzes Lied singen, weil der Bus nicht gekommen war.", "Natürlich! Ich musste einmal ein ganzes Lied singen, weil der Bus nicht gekommen hatte.", "Natürlich! Ich muss einmal ein ganzes Lied singen, weil der Bus nicht gekommen war."], en: "Of course! I once had to sing a whole song because the bus hadn't come.", fr: "Bien sûr ! Une fois, j'ai dû chanter une chanson entière parce que le bus n'était pas venu.", why: "kommen takes sein: war gekommen (Plusquamperfekt); the past: musste.", why_fr: "kommen se conjugue avec sein : war gekommen (plus-que-parfait) ; au passé : musste." },
      { p: "Haha, ich erinnere mich! Und was hast du nach der Schule gemacht?", en: "Haha, I remember! And what did you do after school?", fr: "Haha, je m'en souviens ! Et toi, qu'est-ce que tu as fait après le lycée ?" },
      { y: ["Nachdem ich ein Jahr gereist war, habe ich in Leipzig studiert.", "Nachdem ich ein Jahr gereist habe, habe ich in Leipzig studiert.", "Nachdem ich ein Jahr gereist war, ich habe in Leipzig studiert."], en: "After I had travelled for a year, I studied in Leipzig.", fr: "Après avoir voyagé un an, j'ai fait mes études à Leipzig.", why: "nachdem + Plusquamperfekt (reisen takes sein); then the verb first.", why_fr: "nachdem + plus-que-parfait (reisen se conjugue avec sein) ; puis le verbe en tête." },
      { p: "Leipzig! Und erinnerst du dich an unsere Klassenfahrt nach Prag?", en: "Leipzig! And do you remember our class trip to Prague?", fr: "Leipzig ! Et tu te souviens de notre voyage de classe à Prague ?" },
      { y: ["Wie könnte ich die vergessen! Als wir ankamen, hatte jemand die Pässe im Bus gelassen.", "Wie könnte ich die vergessen! Wenn wir ankamen, hatte jemand die Pässe im Bus gelassen.", "Wie könnte ich die vergessen! Als wir ankamen, jemand hatte die Pässe im Bus gelassen."], en: "How could I forget it! When we arrived, someone had left the passports on the bus.", fr: "Comment l'oublier ! À notre arrivée, quelqu'un avait laissé les passeports dans le bus.", why: "als (once), then the verb first: hatte jemand…", why_fr: "als (une fois), puis le verbe en tête : hatte jemand…" },
      { p: "Ja, das war der Lehrer selbst! Wir sollten uns öfter sehen. Gibst du mir deine Nummer?", en: "Yes, it was the teacher himself! We should see each other more often. Will you give me your number?", fr: "Oui, c'était le prof lui-même ! On devrait se voir plus souvent. Tu me donnes ton numéro ?" },
      { y: ["Gern! Ich schreibe sie dir auf, bevor ich es vergesse.", "Gern! Ich schreibe sie dir auf, bevor ich vergesse es.", "Gern! Ich schreibe sie dir auf, nachdem ich es vergesse."], en: "Gladly! I'll write it down for you before I forget.", fr: "Avec plaisir ! Je te le note avant d'oublier.", why: "bevor + verb at the end.", why_fr: "bevor + verbe à la fin." }
    ] },
  { id: "pechtag", lesson: 45, level: "B1", icon: "message-square-quote", partner: "Moritz", role: "a friend", role_fr: "un ami",
    title: "A day of bad luck", title_fr: "Une journée de malchance",
    setting: "Your friend Moritz has just come back from a trip and tells you what happened at the airport. React and ask questions.", setting_fr: "Ton ami Moritz rentre de voyage et te raconte ce qui lui est arrivé à l'aéroport. Réagis et pose des questions.",
    turns: [
      { p: "Stell dir vor, was mir am Flughafen passiert ist!", en: "Guess what happened to me at the airport!", fr: "Tu sais pas ce qui m'est arrivé à l'aéroport !" },
      { y: ["Oh nein, was denn? Erzähl!", "Oh nein, was denn? Erzählst!", "Oh nein, wann denn? Erzähl!"], en: "Oh no, what? Tell me!", fr: "Oh non, quoi donc ? Raconte !", why: "Imperative of erzählen (du): Erzähl!", why_fr: "Impératif de erzählen (du) : Erzähl!" },
      { p: "Als ich am Schalter stand, merkte ich plötzlich: Mein Pass war weg!", en: "When I was standing at the check-in desk, I suddenly realised my passport was gone!", fr: "Quand j'étais au comptoir, je me suis rendu compte d'un coup que mon passeport avait disparu !" },
      { y: ["Das gibt's doch nicht! Wo hattest du ihn denn zuletzt gesehen?", "Das gibt's doch nicht! Wo hast du ihn denn zuletzt gesehen hatte?", "Das gibt's doch nicht! Wo hattest du ihn denn zuletzt sehen?"], en: "No way! Where had you last seen it?", fr: "C'est pas vrai ! Tu l'avais vu où pour la dernière fois ?", why: "Plusquamperfekt: hattest … gesehen.", why_fr: "Plus-que-parfait : hattest … gesehen." },
      { p: "Im Taxi! Ich hatte ihn auf den Sitz gelegt, als ich bezahlte.", en: "In the taxi! I had put it on the seat when I paid.", fr: "Dans le taxi ! Je l'avais posé sur le siège en payant." },
      { y: ["Wie ärgerlich! Und wie ging es weiter?", "Wie ärgerlich! Und wie geht es weiter gestern?", "Wie ärgerlich! Und wie ging es weiterging?"], en: "How annoying! And what happened next?", fr: "Quelle galère ! Et la suite ?", why: "Wie ging es weiter? (Präteritum of gehen).", why_fr: "Wie ging es weiter? (prétérit de gehen)." },
      { p: "Zum Glück hatte ich die Nummer vom Taxi. Der Fahrer kam zwanzig Minuten später zurück.", en: "Luckily I had the taxi's number. The driver came back twenty minutes later.", fr: "Heureusement, j'avais le numéro du taxi. Le chauffeur est revenu vingt minutes plus tard." },
      { y: ["Was für ein Glück! Und hast du deinen Flug noch erreicht?", "Was für ein Glück! Und hast du deinen Flug noch erreichen?", "Was für Glück! Und hast du deinen Flug noch erreicht?"], en: "What luck! And did you still catch your flight?", fr: "Quelle chance ! Et tu as quand même eu ton vol ?", why: "Was für ein Glück! Perfekt: hast … erreicht.", why_fr: "Was für ein Glück! Perfekt : hast … erreicht." },
      { p: "Ja, ich war der Letzte am Gate! Das werde ich nie vergessen.", en: "Yes, I was the last one at the gate! I'll never forget it.", fr: "Oui, j'étais le dernier à la porte d'embarquement ! Je ne l'oublierai jamais." },
      { y: ["Das glaube ich dir! Nächstes Mal passt du besser auf deinen Pass auf.", "Das glaube ich dich! Nächstes Mal passt du besser auf deinen Pass auf.", "Das glaube ich dir! Nächstes Mal du passt besser auf deinen Pass auf."], en: "I bet! Next time you'll look after your passport better.", fr: "Je veux bien te croire ! La prochaine fois, tu feras plus attention à ton passeport.", why: "jemandem glauben (dative: dir); verb second after Nächstes Mal.", why_fr: "jemandem glauben (datif : dir) ; verbe en deuxième position après Nächstes Mal." }
    ] }
  );

  W.READINGS.push({
    id: "mauerfall", level: "B1", icon: "book-open", title: "Der 9. November 1989", genre: "Article",
    intro: "The night the Berlin Wall opened, told in the Präteritum, the tense of written history.",
    intro_fr: "La nuit où le Mur de Berlin s'est ouvert, racontée au prétérit, le temps de l'histoire écrite.",
    paragraphs: [
      { de: "Von 1961 bis 1989 teilte eine Mauer die Stadt Berlin. Die Menschen in der DDR durften nicht frei in den Westen reisen. Im Herbst 1989 gingen in Leipzig und in vielen anderen Städten jeden Montag Tausende Menschen auf die Straße. Sie riefen: „Wir sind das Volk!“", en: "From 1961 to 1989, a wall divided the city of Berlin. The people of the GDR were not allowed to travel freely to the West. In the autumn of 1989, thousands of people took to the streets every Monday in Leipzig and many other cities. They chanted: “We are the people!”", fr: "De 1961 à 1989, un mur divisa la ville de Berlin. Les habitants de la RDA n'avaient pas le droit de voyager librement à l'Ouest. À l'automne 1989, des milliers de personnes descendirent dans la rue chaque lundi à Leipzig et dans beaucoup d'autres villes. Ils scandaient : « Nous sommes le peuple ! »" },
      { de: "Am Abend des 9. November gab Günter Schabowski, ein Politiker der DDR, eine Pressekonferenz. Gegen Ende las er eine neue Regel vor: Die Menschen durften jetzt reisen. Ein Journalist fragte, ab wann die Regel gelte. Schabowski schaute in seine Papiere und antwortete: „sofort, unverzüglich“.", en: "On the evening of 9 November, Günter Schabowski, a GDR politician, gave a press conference. Towards the end he read out a new rule: people could now travel. A journalist asked from when the rule applied. Schabowski looked at his papers and answered: “immediately, without delay”.", fr: "Le soir du 9 novembre, Günter Schabowski, un homme politique de la RDA, donna une conférence de presse. Vers la fin, il lut une nouvelle règle : les gens pouvaient désormais voyager. Un journaliste demanda à partir de quand la règle s'appliquait. Schabowski regarda ses papiers et répondit : « immédiatement, sans délai »." },
      { de: "Viele Menschen sahen die Pressekonferenz im Fernsehen. Noch am selben Abend gingen Tausende zu den Grenzübergängen, zum Beispiel zur Bornholmer Straße. Kurz vor Mitternacht öffneten die Grenzsoldaten dort das Tor. Menschen aus Ost und West lagen sich in den Armen, weinten und feierten zusammen.", en: "Many people watched the press conference on television. That same evening, thousands went to the border crossings, for example to Bornholmer Straße. Shortly before midnight, the border guards there opened the gate. People from East and West hugged each other, cried and celebrated together.", fr: "Beaucoup de gens virent la conférence de presse à la télévision. Le soir même, des milliers de personnes se rendirent aux points de passage, par exemple à la Bornholmer Straße. Peu avant minuit, les gardes-frontières y ouvrirent la barrière. Des gens de l'Est et de l'Ouest tombèrent dans les bras les uns des autres, pleurèrent et firent la fête ensemble." },
      { de: "Knapp ein Jahr später, am 3. Oktober 1990, war Deutschland wieder ein Land. Heute erinnern in Berlin noch einige Reste der Mauer an diese Zeit, zum Beispiel die East Side Gallery: ein langes Stück Mauer, das Künstlerinnen und Künstler mit bunten Bildern bemalt haben.", en: "Almost a year later, on 3 October 1990, Germany was one country again. Today some remains of the Wall in Berlin still recall that time, for example the East Side Gallery: a long stretch of wall that artists have covered with colourful paintings.", fr: "Un peu moins d'un an plus tard, le 3 octobre 1990, l'Allemagne ne formait de nouveau qu'un seul pays. Aujourd'hui, quelques restes du Mur rappellent encore cette époque à Berlin, par exemple l'East Side Gallery : un long morceau de mur que des artistes ont couvert de peintures colorées." }
    ],
    glossary: { "DDR": ["GDR, East Germany", "RDA, Allemagne de l'Est"], "durften": ["were allowed to", "avaient le droit de"], "Straße": ["street (auf die Straße gehen: to demonstrate)", "rue (auf die Straße gehen : manifester)"], "riefen": ["called, chanted", "criaient, scandaient"], "Volk": ["people (nation)", "peuple"], "Politiker": ["politician", "homme politique"], "Pressekonferenz": ["press conference", "conférence de presse"], "las": ["read", "lut"], "Regel": ["rule", "règle"], "gelte": ["applied (reported speech)", "s'appliquait"], "unverzüglich": ["without delay", "sans délai"], "Grenzübergängen": ["border crossings", "points de passage"], "Grenzsoldaten": ["border guards", "gardes-frontières"], "Tor": ["gate", "porte, barrière"], "lagen": ["(lagen sich in den Armen) hugged", "(lagen sich in den Armen) tombèrent dans les bras"], "weinten": ["cried", "pleurèrent"], "knapp": ["almost, just under", "à peine, un peu moins de"], "Reste": ["remains", "restes"], "bemalt": ["painted", "peint, décoré"], "Künstler": ["artists", "artistes"], "Künstlerinnen": ["artists (women)", "artistes (femmes)"] },
    questions: [
      { q: "Was riefen die Menschen im Herbst 1989?", o: ["„Wir sind das Volk!“", "„Die Mauer muss bleiben!“", "„Wir wollen arbeiten!“"], a: 0 },
      { q: "Was las Schabowski in der Pressekonferenz vor?", o: ["Eine neue Regel: Die Menschen durften reisen.", "Eine Liste mit Namen.", "Das Programm für den nächsten Tag."], a: 0 },
      { q: "Wie antwortete er auf die Frage „ab wann?“?", o: ["„sofort, unverzüglich“", "„nächstes Jahr“", "„am Montag“"], a: 0 },
      { q: "Was passierte kurz vor Mitternacht an der Bornholmer Straße?", o: ["Die Grenzsoldaten öffneten das Tor.", "Die Pressekonferenz begann.", "Die Menschen gingen nach Hause."], a: 0 },
      { q: "Was ist die East Side Gallery?", o: ["Ein langes Stück Mauer mit bunten Bildern", "Ein Museum für moderne Kunst", "Ein Bahnhof in Ost-Berlin"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-b1-1", unit: "b1-1", level: "B1", icon: "messages-square",
    title: "Oma erzählt vom 9. November", title_fr: "Mamie raconte le 9 novembre",
    context: "Paul asks his grandmother Hilde where she was when the Berlin Wall opened.", context_fr: "Paul demande à sa grand-mère Hilde où elle était quand le Mur de Berlin s'est ouvert.",
    words: [["drüben", "over there (on the other side)", "de l'autre côté"], ["die Schlange", "the queue", "la file d'attente"], ["das Begrüßungsgeld", "the welcome money (for visitors from the GDR)", "l'argent de bienvenue (pour les visiteurs de RDA)"], ["die Schallplatte", "the record (vinyl)", "le disque (vinyle)"], ["anmachen", "to switch on", "allumer"]],
    lines: [["Paul", "Oma, wo warst du eigentlich, als die Mauer fiel?", "de-DE"], ["Oma Hilde", "Ich war zu Hause in Ost-Berlin. Ich hatte schon geschlafen, als deine Mutter mich anrief.", "de-DE"], ["Paul", "Und was hast du gemacht?", "de-DE"], ["Oma Hilde", "Zuerst habe ich es nicht geglaubt! Dann haben wir den Fernseher angemacht, und da sah ich die Leute auf der Mauer.", "de-DE"], ["Paul", "Bist du sofort in den Westen gefahren?", "de-DE"], ["Oma Hilde", "Nein, erst am Samstag. Die Schlangen an der Grenze waren unglaublich lang. Als wir endlich drüben waren, haben wir unser Begrüßungsgeld abgeholt: hundert D-Mark für jeden.", "de-DE"], ["Paul", "Und was hast du damit gekauft?", "de-DE"], ["Oma Hilde", "Bananen für die Kinder und eine Schallplatte von den Beatles. Die habe ich heute noch!", "de-DE"]],
    gist: ["Worüber erzählt Oma Hilde?", ["Über die Tage, als die Mauer fiel", "Über ihre Hochzeit", "Über ihre erste Arbeit"]],
    detail: [["Wo war Oma Hilde, als die Mauer fiel?", ["Zu Hause in Ost-Berlin", "In West-Berlin", "Bei Pauls Mutter"]], ["Wer rief sie an?", ["Pauls Mutter", "Ihr Bruder", "Eine Nachbarin"]], ["Wann fuhr sie in den Westen?", ["Am Samstag", "Noch in der Nacht", "Ein Jahr später"]], ["Wie viel Begrüßungsgeld bekam jeder?", ["Hundert D-Mark", "Zehn D-Mark", "Tausend D-Mark"]]],
    decode: ["Ich hatte schon geschlafen, als deine Mutter mich anrief.", "Als wir endlich drüben waren"],
    tip: "Listen to how Oma Hilde mixes the tenses, as Germans do when they speak: Perfekt for most verbs (haben … angemacht), Präteritum for war, sah, fiel, and the Plusquamperfekt for what had happened first (hatte schon geschlafen).", tip_fr: "Écoute comment Mamie Hilde mélange les temps, comme le font les Allemands à l'oral : le Perfekt pour la plupart des verbes (haben … angemacht), le prétérit pour war, sah, fiel, et le plus-que-parfait pour ce qui s'était passé avant (hatte schon geschlafen)."
  }]);

  W.PROMPTS.push({ id: "de-b1-1", level: "B1", q: "Erzähl von einem Tag oder einem Erlebnis, das du nie vergessen wirst.", en: "Tell us about a day or an experience you'll never forget.", fr: "Raconte un jour ou une expérience que tu n'oublieras jamais.", time: 120,
    phrases: ["Es war im Sommer…", "Als ich…, …", "Zuerst… dann… plötzlich…", "Ich hatte noch nie…", "Ich werde nie vergessen, wie…"],
    model: "Es war im Sommer vor fünf Jahren. Als ich mit Freunden in den Alpen wandern war, kam plötzlich ein starkes Gewitter. Wir hatten den Wetterbericht nicht gelesen und waren schon ziemlich weit oben. Zuerst hatten wir alle Angst, aber dann fanden wir eine kleine Hütte. Dort saßen wir drei Stunden, tranken Tee und erzählten Geschichten. Als der Regen aufhörte, sahen wir einen wunderschönen Regenbogen über dem Tal. Ich werde nie vergessen, wie still es danach war." });

  W.WRITING_GUIDE["b1-1"] = { genre: "A personal email telling a story (Goethe B1, writing part 1)", genre_fr: "Un e-mail personnel pour raconter (Goethe B1, écrit partie 1)",
    plan: [["Greet your friend and announce the story.", "Salue ton ami ou ton amie et annonce l'histoire."], ["What happened first (Präteritum, Perfekt).", "Ce qui s'est passé d'abord (prétérit, Perfekt)."], ["The surprise, with als and the Plusquamperfekt.", "La surprise, avec als et le plus-que-parfait."], ["How you felt and how it ended.", "Ce que tu as ressenti et comment ça s'est fini."], ["A question for your friend, and goodbye.", "Une question pour ton ami ou ton amie, et au revoir."]],
    marks: [["stell dir vor", "starting the story", "pour lancer l'histoire"], ["Als ich am Bahnhof ankam", "als: one moment in the past, verb at the end", "als : un moment du passé, verbe à la fin"], ["Ich hatte die falsche Uhrzeit aufgeschrieben", "the Plusquamperfekt: what had happened before", "le plus-que-parfait : ce qui s'était passé avant"], ["habe ich mich total geärgert", "how you felt", "ce que tu as ressenti"], ["Nachdem wir zwei Stunden geredet hatten", "nachdem + Plusquamperfekt", "nachdem + plus-que-parfait"], ["Und wie war dein Wochenende?", "a question for your friend", "une question pour ton ami ou ton amie"]] };

  W.COURSE.push({ id: "b1-1", level: "B1", icon: "history", title: "Memories and life stories", title_fr: "Souvenirs et parcours de vie",
    intro: "In this first B1 unit, you'll learn to tell the past like a German: the Präteritum of every kind of verb, als and wenn, the Plusquamperfekt with nachdem, and how to tell a story and react to one. And you'll read about the night the Berlin Wall opened.",
    intro_fr: "Dans cette première unité du B1, tu vas apprendre à raconter le passé comme un Allemand : le prétérit de tous les types de verbes, als et wenn, le plus-que-parfait avec nachdem, et comment raconter une histoire et y réagir. Et tu liras le récit de la nuit où le Mur de Berlin s'est ouvert.",
    can: ["Use the Präteritum of regular, irregular and mixed verbs", "Choose between als and wenn", "Say what had happened before, with the Plusquamperfekt and nachdem", "Tell a story in an exciting way and react when you listen", "Write a personal email telling an experience (Goethe B1)"],
    can_fr: ["Employer le prétérit des verbes réguliers, irréguliers et mixtes", "Choisir entre als et wenn", "Dire ce qui s'était passé avant, avec le plus-que-parfait et nachdem", "Raconter une histoire de façon vivante et réagir quand tu écoutes", "Écrire un e-mail personnel pour raconter une expérience (Goethe B1)"],
    lessons: [43, 44, 45], vocab: ["erinnerungDE", "erzaehlenDE"], reading: "mauerfall", prompt: "de-b1-1",
    writing: { task: "Last weekend, something unexpected happened to you. Write an email to your friend Tobias (80-100 words): tell what happened, how you felt and how it ended, and ask about his weekend.", task_fr: "Le week-end dernier, il t'est arrivé quelque chose d'inattendu. Écris un e-mail à ton ami Tobias (80 à 100 mots) : raconte ce qui s'est passé, ce que tu as ressenti et comment ça s'est terminé, et demande-lui comment s'est passé son week-end.", words: "80-100",
      tips: ["Lieber Tobias,", "stell dir vor, was mir … passiert ist!", "Als ich …, …", "Ich hatte … / Nachdem …", "Zum Glück … / Am Ende …", "Liebe Grüße"],
      checklist: ["I greeted Tobias and announced the story", "I used als with the verb at the end", "I used the Plusquamperfekt at least once", "I said how I felt and how it ended", "I wrote between 80 and 100 words"],
      checklist_fr: ["J'ai salué Tobias et annoncé l'histoire", "J'ai employé als avec le verbe à la fin", "J'ai employé au moins une fois le plus-que-parfait", "J'ai dit ce que j'ai ressenti et comment ça s'est fini", "J'ai écrit entre 80 et 100 mots"],
      model: "Lieber Tobias,\n\nstell dir vor, was mir am Samstag passiert ist! Ich wollte mit dem Zug nach Hamburg fahren. Als ich am Bahnhof ankam, war der Zug schon weg: Ich hatte die falsche Uhrzeit aufgeschrieben! Zuerst habe ich mich total geärgert. Aber dann habe ich im Café eine alte Schulfreundin getroffen, die ich zehn Jahre nicht gesehen hatte. Nachdem wir zwei Stunden geredet hatten, haben wir zusammen den nächsten Zug genommen. Am Ende war es ein wunderbarer Tag!\n\nUnd wie war dein Wochenende? Schreib mir bald!\n\nLiebe Grüße\nNoa" } });
})();
