/* Cours d'allemand, unité C1-4 « Sustainability / Développement durable » : les locutions verbales à valeur de
   processus ou de passif (Anwendung finden, in Vergessenheit geraten, in Gang setzen), les verbes à préfixe
   séparable ou inséparable selon le sens (übersetzen / übersetzen, umfahren / umfahren), le courrier des lecteurs.
   Personnages fictifs, prénoms allemands.
   Faits vérifiables seulement : Hans Carl von Carlowitz, administrateur des mines à Freiberg (Saxe), publie en 1713
   la « Sylvicultura oeconomica » ; face à la pénurie de bois due aux mines et à la fonte, il demande une utilisation
   « nachhaltende » du bois : ne pas couper plus que ce qui repousse ; rapport Brundtland (1987) et sa définition
   du développement durable ; programme de développement durable à l'horizon 2030 de l'ONU, avec 17 objectifs,
   adopté en 2015 ; les Repair Cafés sont nés aux Pays-Bas. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "kreislaufDE", icon: "refresh-cw", title: "The circular economy", title_fr: "L'économie circulaire", level: "C1", words: [
    ["die Kreislaufwirtschaft", "the circular economy", "l'économie circulaire", "In der Kreislaufwirtschaft werden Materialien immer wieder genutzt."],
    ["wiederverwerten", "to recycle, to reuse", "recycler, réutiliser", "Altglas lässt sich fast vollständig wiederverwerten."],
    ["die Wiederverwertung", "recycling, reuse", "le recyclage, la réutilisation", "Die Wiederverwertung von Elektroschrott ist kompliziert."],
    ["der Rohstoff, -e", "the raw material", "la matière première", "Seltene Rohstoffe werden immer teurer."],
    ["die Lebensdauer", "the lifespan, the service life", "la durée de vie", "Die Lebensdauer vieler Geräte ist kurz."],
    ["langlebig", "durable, long-lasting", "durable, qui dure longtemps", "Langlebige Produkte schonen die Umwelt."],
    ["reparierbar", "repairable", "réparable", "Das Handy ist kaum reparierbar."],
    ["der ökologische Fußabdruck", "the ecological footprint", "l'empreinte écologique", "Fleisch vergrößert den ökologischen Fußabdruck."],
    ["ressourcenschonend", "resource-efficient", "économe en ressources", "Die Firma produziert besonders ressourcenschonend."],
    ["die Ökobilanz, -en", "the life-cycle assessment", "le bilan écologique", "Die Ökobilanz von Mehrwegflaschen ist besser."],
    ["umweltschädlich", "harmful to the environment", "nuisible à l'environnement", "Einwegplastik ist besonders umweltschädlich."],
    ["umweltverträglich", "environmentally compatible", "respectueux de l'environnement", "Gesucht werden umweltverträgliche Verpackungen."],
    ["die Wegwerfgesellschaft", "the throwaway society", "la société du jetable", "Wir leben in einer Wegwerfgesellschaft."],
    ["entsorgen", "to dispose of", "éliminer, se débarrasser de", "Alte Batterien muss man richtig entsorgen."],
    ["die Entsorgung", "disposal", "l'élimination (des déchets)", "Die Entsorgung von Atommüll ist ungelöst."],
    ["der Konsumverzicht", "consumer abstinence, buying less", "le renoncement à la consommation", "Konsumverzicht allein wird das Klima nicht retten."]
  ] },
  { id: "naturschutzDE", icon: "trees", title: "Forests and nature", title_fr: "Forêts et nature", level: "C1", words: [
    ["die Forstwirtschaft", "forestry", "la sylviculture", "Die Forstwirtschaft muss sich an den Klimawandel anpassen."],
    ["der Förster, - (die Försterin)", "the forester", "le forestier, la forestière", "Die Försterin kennt jeden Baum in ihrem Revier."],
    ["abholzen", "to clear (forest), to cut down", "déboiser", "Für Weideland werden riesige Wälder abgeholzt."],
    ["die Abholzung", "deforestation", "la déforestation", "Die Abholzung des Regenwaldes schreitet voran."],
    ["aufforsten", "to reforest", "reboiser", "Nach dem Sturm wurde die Fläche aufgeforstet."],
    ["der Raubbau", "overexploitation", "la surexploitation", "Jahrhundertelang wurde Raubbau an den Wäldern betrieben."],
    ["das Ökosystem, -e", "the ecosystem", "l'écosystème", "Das Ökosystem im Wattenmeer ist empfindlich."],
    ["bedroht", "threatened, endangered", "menacé", "Viele Insektenarten sind bedroht."],
    ["der Lebensraum, ¨-e", "the habitat", "l'habitat", "Der Biber findet hier wieder einen Lebensraum."],
    ["das Naturschutzgebiet, -e", "the nature reserve", "la réserve naturelle", "Im Naturschutzgebiet darf man die Wege nicht verlassen."],
    ["die Bodenversiegelung", "soil sealing", "l'artificialisation des sols", "Durch die Bodenversiegelung versickert weniger Regenwasser."],
    ["der Mischwald, ¨-er", "the mixed forest", "la forêt mixte", "Mischwälder sind widerstandsfähiger als Monokulturen."],
    ["nachwachsen", "to grow back", "repousser", "Man sollte nur so viel Holz schlagen, wie nachwächst."],
    ["das Gleichgewicht", "the balance, the equilibrium", "l'équilibre", "Das ökologische Gleichgewicht ist gestört."],
    ["vorausschauend", "far-sighted", "prévoyant, clairvoyant", "Wir brauchen eine vorausschauende Politik."],
    ["widerstandsfähig", "resilient, resistant", "résistant, résilient", "Die neuen Bäume sollen widerstandsfähiger gegen Hitze sein."]
  ] });

  W.LESSONS.push(
  {
    id: 112, level: "C1", icon: "settings",
    title: "In Vergessenheit geraten, Anwendung finden: function verb constructions", title_fr: "In Vergessenheit geraten, Anwendung finden : les locutions verbales",
    subtitle: "Noun + verb combinations that express a beginning, a state, a cause or a passive meaning.", subtitle_fr: "Des associations nom + verbe qui expriment un début, un état, une cause ou un sens passif.",
    body: `
<h2>One meaning, several verbs</h2>
<p>At B2 you met noun-verb combinations like <s-de>eine Entscheidung treffen</s-de>. At C1, the verb itself carries a nuance: <s-de>kommen, geraten, finden</s-de> often give a passive or process meaning; <s-de>bringen, setzen, stellen</s-de> an active, causing one.</p>
<table>
<tr><th>Function verb construction</th><th>Meaning</th></tr>
<tr><td><s-de>in Gang kommen / in Gang setzen</s-de></td><td>to get going / to set in motion</td></tr>
<tr><td><s-de>Anwendung finden, zur Anwendung kommen</s-de></td><td>to be used (= <s-de>angewendet werden</s-de>)</td></tr>
<tr><td><s-de>Zustimmung / Beachtung finden</s-de></td><td>to meet with approval / attention</td></tr>
<tr><td><s-de>in Vergessenheit geraten</s-de></td><td>to be forgotten</td></tr>
<tr><td><s-de>in Gefahr geraten / in Gefahr bringen</s-de></td><td>to be put at risk / to endanger</td></tr>
<tr><td><s-de>außer Kontrolle geraten</s-de></td><td>to get out of control</td></tr>
<tr><td><s-de>unter Druck stehen / unter Druck setzen</s-de></td><td>to be under pressure / to put pressure on</td></tr>
<tr><td><s-de>zum Erliegen kommen / zum Stillstand bringen</s-de></td><td>to come to a standstill / to bring to a halt</td></tr>
</table>
<h2>Why use them?</h2>
<p>They let you avoid the passive and focus on the process: <s-de>Die Methode findet heute kaum noch Anwendung.</s-de> sounds more natural in an academic text than <s-de>Die Methode wird heute kaum noch angewendet.</s-de></p>
<div class="tip">The pairs with <s-de>kommen / bringen</s-de>, <s-de>stehen / setzen</s-de> and <s-de>geraten / bringen</s-de> work like intransitive and transitive: <s-de>Der Verkehr kam zum Erliegen</s-de> (it stopped) · <s-de>Der Sturm brachte den Verkehr zum Erliegen</s-de> (the storm stopped it).</div>
`,
    body_fr: `
<h2>Un sens, plusieurs verbes</h2>
<p>Au B2, tu as vu des associations comme <s-de>eine Entscheidung treffen</s-de>. Au C1, c'est le verbe lui-même qui porte une nuance : <s-de>kommen, geraten, finden</s-de> donnent souvent un sens passif ou de processus ; <s-de>bringen, setzen, stellen</s-de> un sens actif, causatif.</p>
<table>
<tr><th>Locution verbale</th><th>Sens</th></tr>
<tr><td><s-de>in Gang kommen / in Gang setzen</s-de></td><td>démarrer / mettre en route</td></tr>
<tr><td><s-de>Anwendung finden, zur Anwendung kommen</s-de></td><td>être appliqué (= <s-de>angewendet werden</s-de>)</td></tr>
<tr><td><s-de>Zustimmung / Beachtung finden</s-de></td><td>recueillir l'adhésion / l'attention</td></tr>
<tr><td><s-de>in Vergessenheit geraten</s-de></td><td>tomber dans l'oubli</td></tr>
<tr><td><s-de>in Gefahr geraten / in Gefahr bringen</s-de></td><td>se retrouver en danger / mettre en danger</td></tr>
<tr><td><s-de>außer Kontrolle geraten</s-de></td><td>échapper à tout contrôle</td></tr>
<tr><td><s-de>unter Druck stehen / unter Druck setzen</s-de></td><td>être sous pression / mettre la pression</td></tr>
<tr><td><s-de>zum Erliegen kommen / zum Stillstand bringen</s-de></td><td>s'arrêter / paralyser</td></tr>
</table>
<h2>Pourquoi les employer ?</h2>
<p>Elles permettent d'éviter le passif et de mettre l'accent sur le processus : <s-de>Die Methode findet heute kaum noch Anwendung.</s-de> paraît plus naturel dans un texte universitaire que <s-de>Die Methode wird heute kaum noch angewendet.</s-de> Le français fait pareil : « tomber dans l'oubli », « trouver une application ».</p>
<div class="tip">Les couples <s-de>kommen / bringen</s-de>, <s-de>stehen / setzen</s-de> et <s-de>geraten / bringen</s-de> fonctionnent comme un intransitif et un transitif : <s-de>Der Verkehr kam zum Erliegen</s-de> (la circulation s'est arrêtée) · <s-de>Der Sturm brachte den Verkehr zum Erliegen</s-de> (la tempête a paralysé la circulation).</div>
`,
    examples: [
      ["Die alte Methode findet heute kaum noch Anwendung.", "The old method is hardly used any more.", "L'ancienne méthode n'est presque plus appliquée."],
      ["Das Wissen der Förster ist lange in Vergessenheit geraten.", "The foresters' knowledge was forgotten for a long time.", "Le savoir des forestiers est longtemps tombé dans l'oubli."],
      ["Die Dürre hat ein Umdenken in Gang gesetzt.", "The drought set a rethink in motion.", "La sécheresse a amorcé une remise en question."],
      ["Der Vorschlag fand breite Zustimmung.", "The proposal met with broad approval.", "La proposition a recueilli une large adhésion."],
      ["Viele Arten sind durch den Klimawandel in Gefahr geraten.", "Many species have been put at risk by climate change.", "Beaucoup d'espèces se retrouvent en danger à cause du changement climatique."],
      ["Die Firmen stehen unter Druck, umweltfreundlicher zu produzieren.", "Companies are under pressure to produce in a more environmentally friendly way.", "Les entreprises sont sous pression pour produire de façon plus écologique."],
      ["Der Sturm brachte den Bahnverkehr zum Erliegen.", "The storm brought rail traffic to a standstill.", "La tempête a paralysé le trafic ferroviaire."]
    ],
    quiz: [
      { q: "“Die Methode findet Anwendung” means:", q_fr: "« Die Methode findet Anwendung » veut dire :", o: ["The method is used.", "The method finds a user.", "The method is being looked for."], o_fr: ["La méthode est appliquée.", "La méthode trouve un utilisateur.", "On cherche la méthode."], a: 0, ex: "Anwendung finden = angewendet werden.", ex_fr: "Anwendung finden = angewendet werden." },
      { q: "“to be forgotten” =", q_fr: "« tomber dans l'oubli » =", o: ["in Vergessenheit geraten", "in Vergessenheit bringen", "zur Vergessenheit finden"], a: 0, ex: "geraten = a process you don't control.", ex_fr: "geraten = un processus subi." },
      { q: "Die Krise hat ein Umdenken in Gang ___.", q_fr: "Die Krise hat ein Umdenken in Gang ___.", o: ["gesetzt", "gekommen", "geraten"], a: 0, ex: "Active, causing: in Gang setzen.", ex_fr: "Actif, causatif : in Gang setzen." },
      { q: "Der Verkehr ___ zum Erliegen. (stopped by itself)", q_fr: "Der Verkehr ___ zum Erliegen. (s'est arrêté)", o: ["kam", "brachte", "setzte"], a: 0, ex: "Intransitive: zum Erliegen kommen.", ex_fr: "Intransitif : zum Erliegen kommen." },
      { q: "“to put pressure on someone” =", q_fr: "« mettre la pression sur quelqu'un » =", o: ["jemanden unter Druck setzen", "jemanden unter Druck stehen", "jemanden unter Druck geraten"], a: 0, ex: "setzen = active; stehen = state.", ex_fr: "setzen = actif ; stehen = état." }
    ]
  },
  {
    id: 113, level: "C1", icon: "split",
    title: "Übersetzen or übersetzen? Separable and inseparable prefixes", title_fr: "Übersetzen ou übersetzen ? Les préfixes séparables et inséparables",
    subtitle: "über-, unter-, um-, durch-, wieder-: same spelling, different stress, different meaning.", subtitle_fr: "über-, unter-, um-, durch-, wieder- : même orthographe, accent différent, sens différent.",
    body: `
<h2>Two verbs in one spelling</h2>
<p>With the prefixes <s-de>über-, unter-, um-, durch-, wider-, wieder-</s-de>, the same spelling can hide two verbs. <b>Inseparable</b>: the stress is on the stem, the meaning is often figurative, and there is no <s-de>ge-</s-de>. <b>Separable</b>: the stress is on the prefix, the meaning is often literal (place, direction).</p>
<table>
<tr><th>Inseparable</th><th>Separable</th></tr>
<tr><td><s-de>Sie übersetzt den Text.</s-de> (translates) → <s-de>hat übersetzt</s-de></td><td><s-de>Die Fähre setzt uns über.</s-de> (ferries across) → <s-de>hat übergesetzt</s-de></td></tr>
<tr><td><s-de>Wir umfahren den Stau.</s-de> (drive around) → <s-de>haben umfahren</s-de></td><td><s-de>Er fährt das Schild um.</s-de> (knocks down) → <s-de>hat umgefahren</s-de></td></tr>
<tr><td><s-de>Sie unterhält die Gäste.</s-de> (entertains) → <s-de>hat unterhalten</s-de></td><td><s-de>Er hält den Eimer unter.</s-de> (holds underneath) → <s-de>hat untergehalten</s-de></td></tr>
<tr><td><s-de>Ich durchschaue ihn.</s-de> (see through his plans) → <s-de>habe durchschaut</s-de></td><td><s-de>Ich schaue das Heft durch.</s-de> (look through) → <s-de>habe durchgeschaut</s-de></td></tr>
<tr><td><s-de>Wiederholen Sie bitte!</s-de> (repeat) → <s-de>hat wiederholt</s-de></td><td><s-de>Er holt das Buch wieder.</s-de> (fetches back) → <s-de>hat wiedergeholt</s-de></td></tr>
</table>
<h2>umgehen: a useful pair</h2>
<p><s-de>Man kann das Gesetz nicht umgehen.</s-de> (circumvent, inseparable) · <s-de>Sie geht sehr gut mit Kritik um.</s-de> (deal with, separable).</p>
<div class="tip">If you're unsure, ask: is it about a real movement in space? Then it's usually separable. Is it figurative or abstract? Then it's usually inseparable. Many abstract verbs are only inseparable: <s-de>überzeugen, unterbrechen, übernehmen, unterstützen, widersprechen</s-de>.</div>
`,
    body_fr: `
<h2>Deux verbes sous une même orthographe</h2>
<p>Avec les préfixes <s-de>über-, unter-, um-, durch-, wider-, wieder-</s-de>, la même orthographe peut cacher deux verbes. <b>Inséparable</b> : l'accent est sur le radical, le sens est souvent figuré, et il n'y a pas de <s-de>ge-</s-de>. <b>Séparable</b> : l'accent est sur le préfixe, le sens est souvent concret (lieu, direction).</p>
<table>
<tr><th>Inséparable</th><th>Séparable</th></tr>
<tr><td><s-de>Sie übersetzt den Text.</s-de> (traduit) → <s-de>hat übersetzt</s-de></td><td><s-de>Die Fähre setzt uns über.</s-de> (nous fait traverser) → <s-de>hat übergesetzt</s-de></td></tr>
<tr><td><s-de>Wir umfahren den Stau.</s-de> (contourner) → <s-de>haben umfahren</s-de></td><td><s-de>Er fährt das Schild um.</s-de> (renverser) → <s-de>hat umgefahren</s-de></td></tr>
<tr><td><s-de>Sie unterhält die Gäste.</s-de> (divertit) → <s-de>hat unterhalten</s-de></td><td><s-de>Er hält den Eimer unter.</s-de> (tient dessous) → <s-de>hat untergehalten</s-de></td></tr>
<tr><td><s-de>Ich durchschaue ihn.</s-de> (je perce ses intentions) → <s-de>habe durchschaut</s-de></td><td><s-de>Ich schaue das Heft durch.</s-de> (parcourir) → <s-de>habe durchgeschaut</s-de></td></tr>
<tr><td><s-de>Wiederholen Sie bitte!</s-de> (répéter) → <s-de>hat wiederholt</s-de></td><td><s-de>Er holt das Buch wieder.</s-de> (va rechercher) → <s-de>hat wiedergeholt</s-de></td></tr>
</table>
<h2>umgehen : un couple utile</h2>
<p><s-de>Man kann das Gesetz nicht umgehen.</s-de> (contourner, inséparable) · <s-de>Sie geht sehr gut mit Kritik um.</s-de> (gérer, séparable).</p>
<div class="tip">En cas de doute, demande-toi : s'agit-il d'un vrai mouvement dans l'espace ? Alors le verbe est en général séparable. S'agit-il d'un sens figuré ou abstrait ? Alors il est en général inséparable. Beaucoup de verbes abstraits n'existent qu'en inséparable : <s-de>überzeugen, unterbrechen, übernehmen, unterstützen, widersprechen</s-de>.</div>
`,
    examples: [
      ["Sie hat den Roman ins Französische übersetzt.", "She translated the novel into French.", "Elle a traduit le roman en français."],
      ["Die Fähre setzt uns in zehn Minuten ans andere Ufer über.", "The ferry will take us across to the other bank in ten minutes.", "Le bac nous fait passer sur l'autre rive en dix minutes."],
      ["Wir haben den Stau auf einer Landstraße umfahren.", "We drove around the traffic jam on a country road.", "Nous avons contourné l'embouteillage par une route départementale."],
      ["Beim Einparken hat er fast ein Schild umgefahren.", "While parking he almost knocked over a sign.", "En se garant, il a failli renverser un panneau."],
      ["Die Kinder haben die Gäste mit einem Lied unterhalten.", "The children entertained the guests with a song.", "Les enfants ont diverti les invités avec une chanson."],
      ["Ich habe seinen Plan sofort durchschaut.", "I saw through his plan immediately.", "J'ai tout de suite percé son plan à jour."],
      ["Man darf die Umweltauflagen nicht umgehen.", "You mustn't circumvent the environmental regulations.", "On ne doit pas contourner les normes environnementales."]
    ],
    quiz: [
      { q: "“She translated the text.”", q_fr: "« Elle a traduit le texte. »", o: ["Sie hat den Text übersetzt.", "Sie hat den Text übergesetzt.", "Sie hat den Text geübersetzt."], a: 0, ex: "Inseparable (figurative): übersetzt, no ge-.", ex_fr: "Inséparable (sens figuré) : übersetzt, sans ge-." },
      { q: "“He knocked over a sign.”", q_fr: "« Il a renversé un panneau. »", o: ["Er hat ein Schild umgefahren.", "Er hat ein Schild umfahren.", "Er hat ein Schild gumfahren."], a: 0, ex: "Separable (literal): umgefahren.", ex_fr: "Séparable (sens concret) : umgefahren." },
      { q: "Wir ___ den Stau. (drive around it)", q_fr: "Wir ___ den Stau. (le contourner)", o: ["umfahren", "fahren … um", "umgefahren"], a: 0, ex: "Inseparable: wir umfahren.", ex_fr: "Inséparable : wir umfahren." },
      { q: "Which verb is only inseparable?", q_fr: "Quel verbe n'existe qu'en inséparable ?", o: ["überzeugen", "übersetzen", "umfahren"], a: 0, ex: "überzeugen (to convince).", ex_fr: "überzeugen (convaincre)." },
      { q: "“She deals well with criticism.”", q_fr: "« Elle gère bien la critique. »", o: ["Sie geht gut mit Kritik um.", "Sie umgeht gut Kritik.", "Sie geht gut Kritik um."], a: 0, ex: "umgehen mit (separable) = to deal with.", ex_fr: "umgehen mit (séparable) = gérer." }
    ]
  },
  {
    id: 114, level: "C1", kind: "functional", icon: "mail",
    title: "Everyday German: writing a letter to the editor", title_fr: "L'allemand de tous les jours : écrire au courrier des lecteurs",
    subtitle: "React to an article clearly, convincingly and briefly.", subtitle_fr: "Réagir à un article de façon claire, convaincante et concise.",
    body: `
<h2>The structure</h2>
<table>
<tr><th>Part</th><th>German</th></tr>
<tr><td>reference</td><td><s-de>Zu Ihrem Artikel „…“ vom 12. Mai möchte ich Folgendes anmerken: …</s-de></td></tr>
<tr><td>your position</td><td><s-de>Mit großem Interesse / Mit Verwunderung habe ich gelesen, dass…</s-de> · <s-de>Ich teile die Auffassung der Autorin nur bedingt.</s-de></td></tr>
<tr><td>arguments</td><td><s-de>Der Artikel verschweigt, dass…</s-de> · <s-de>Aus eigener Erfahrung weiß ich, dass…</s-de></td></tr>
<tr><td>conclusion</td><td><s-de>Ich würde mir wünschen, dass…</s-de> · <s-de>Es wäre an der Zeit, dass…</s-de></td></tr>
<tr><td>sign-off</td><td>your name and town: <s-de>Robin Keller, Freiburg</s-de></td></tr>
</table>
<h2>Style</h2>
<p>A letter to the editor is short (newspapers often shorten long letters), pointed and personal: it may include your own experience, but it must stay respectful. Address the newspaper (<s-de>Ihr Artikel</s-de>), or write without a greeting, as many papers print letters without one.</p>
<div class="tip">One clear idea is better than five: choose the point in the article that bothers or convinces you most, and develop it with one strong argument and one example. That's also good advice for any C1 opinion text.</div>
`,
    body_fr: `
<h2>La structure</h2>
<table>
<tr><th>Partie</th><th>En allemand</th></tr>
<tr><td>la référence</td><td><s-de>Zu Ihrem Artikel „…“ vom 12. Mai möchte ich Folgendes anmerken: …</s-de></td></tr>
<tr><td>ta position</td><td><s-de>Mit großem Interesse / Mit Verwunderung habe ich gelesen, dass…</s-de> · <s-de>Ich teile die Auffassung der Autorin nur bedingt.</s-de></td></tr>
<tr><td>les arguments</td><td><s-de>Der Artikel verschweigt, dass…</s-de> · <s-de>Aus eigener Erfahrung weiß ich, dass…</s-de></td></tr>
<tr><td>la conclusion</td><td><s-de>Ich würde mir wünschen, dass…</s-de> · <s-de>Es wäre an der Zeit, dass…</s-de></td></tr>
<tr><td>la signature</td><td>ton nom et ta ville : <s-de>Robin Keller, Freiburg</s-de></td></tr>
</table>
<h2>Le style</h2>
<p>Une lettre de lecteur est courte (les journaux raccourcissent souvent les lettres trop longues), incisive et personnelle : elle peut contenir ton expérience, mais elle doit rester respectueuse. On s'adresse au journal (<s-de>Ihr Artikel</s-de>), ou on écrit sans formule d'appel, car beaucoup de journaux publient les lettres sans.</p>
<div class="tip">Une idée claire vaut mieux que cinq : choisis le point de l'article qui te dérange ou te convainc le plus, et développe-le avec un argument fort et un exemple. C'est aussi un bon conseil pour tout texte d'opinion au C1.</div>
`,
    examples: [
      ["Zu Ihrem Artikel „Der Wald stirbt leise“ vom 12. Mai möchte ich Folgendes anmerken.", "With regard to your article “The forest is dying quietly” of 12 May, I would like to make the following comments.", "Au sujet de votre article « La forêt meurt en silence » du 12 mai, je souhaite faire les remarques suivantes."],
      ["Mit Verwunderung habe ich gelesen, dass die Stadt weitere Flächen versiegeln will.", "I was surprised to read that the town wants to seal off more land.", "C'est avec étonnement que j'ai lu que la ville veut artificialiser d'autres terrains."],
      ["Ich teile die Auffassung der Autorin nur bedingt.", "I only partly share the author's view.", "Je ne partage qu'en partie l'avis de l'autrice."],
      ["Der Artikel verschweigt, dass es bereits gute Alternativen gibt.", "The article fails to mention that there are already good alternatives.", "L'article passe sous silence le fait qu'il existe déjà de bonnes alternatives."],
      ["Aus eigener Erfahrung weiß ich, wie schwierig Mülltrennung im Alltag ist.", "I know from my own experience how difficult separating waste is in everyday life.", "Je sais par expérience combien le tri des déchets est difficile au quotidien."],
      ["Es wäre an der Zeit, dass die Politik endlich handelt.", "It's high time politicians finally acted.", "Il serait temps que les responsables politiques agissent enfin."],
      ["Ich würde mir wünschen, dass Ihre Zeitung öfter über Lösungen berichtet.", "I would like your newspaper to report on solutions more often.", "J'aimerais que votre journal parle plus souvent de solutions."]
    ],
    quiz: [
      { q: "How do you refer to the article at the start?", q_fr: "Comment faire référence à l'article au début ?", o: ["Zu Ihrem Artikel „…“ vom 12. Mai möchte ich Folgendes anmerken.", "Hallo Zeitung, ich hab was gelesen.", "Ihr Artikel war Quatsch."], a: 0, ex: "Precise and polite.", ex_fr: "Précis et poli." },
      { q: "“I only partly share the author's view.”", q_fr: "« Je ne partage qu'en partie l'avis de l'autrice. »", o: ["Ich teile die Auffassung der Autorin nur bedingt.", "Ich teile die Auffassung von der Autorin nur bedingt.", "Ich teile die Autorin nur bedingt auf."], a: 0, ex: "nur bedingt = only partly.", ex_fr: "nur bedingt = seulement en partie." },
      { q: "“The article fails to mention that…”", q_fr: "« L'article passe sous silence que… »", o: ["Der Artikel verschweigt, dass…", "Der Artikel verschwindet, dass…", "Der Artikel schweigt, dass…"], a: 0, ex: "verschweigen = to keep quiet about.", ex_fr: "verschweigen = passer sous silence." },
      { q: "How should a letter to the editor be?", q_fr: "Comment doit être une lettre de lecteur ?", o: ["Short, pointed and respectful", "As long as possible", "Rude, to get attention"], o_fr: ["Courte, incisive et respectueuse", "La plus longue possible", "Grossière, pour attirer l'attention"], a: 0, ex: "Short and respectful.", ex_fr: "Courte et respectueuse." },
      { q: "“It's high time that…”", q_fr: "« Il serait temps que… »", o: ["Es wäre an der Zeit, dass…", "Es ist hoch Zeit, dass…", "Es wäre die Zeit an, dass…"], a: 0, ex: "Es wäre an der Zeit, dass…", ex_fr: "Es wäre an der Zeit, dass…" }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    112: {
      gap: [["Die alte Methode ___ heute kaum noch Anwendung.", "findet"], ["Das Wissen ist lange in Vergessenheit ___.", "geraten"], ["Die Dürre hat ein Umdenken in Gang ___.", "gesetzt"], ["Der Sturm brachte den Verkehr zum ___.", "Erliegen|Stillstand"]],
      fix: [["Das Wissen ist in Vergessenheit gekommen.", "Das Wissen ist in Vergessenheit geraten.", "in Vergessenheit geraten.", "in Vergessenheit geraten."], ["Die Firma steht die Mitarbeiter unter Druck.", "Die Firma setzt die Mitarbeiter unter Druck.", "Active: unter Druck setzen; state: unter Druck stehen.", "Actif : unter Druck setzen ; état : unter Druck stehen."]],
      task: ["Rewrite these sentences with function verb constructions: the method is hardly used any more; the plan was forgotten; the strike stopped production; the proposal was widely approved.", "Réécris ces phrases avec des locutions verbales : la méthode n'est presque plus appliquée ; le projet est tombé dans l'oubli ; la grève a paralysé la production ; la proposition a été largement approuvée.", "Die Methode findet kaum noch Anwendung. Der Plan ist in Vergessenheit geraten. Der Streik brachte die Produktion zum Erliegen. Der Vorschlag fand breite Zustimmung."]
    },
    113: {
      gap: [["Sie hat den Roman ins Französische ___.", "übersetzt", "translated (übersetzen)", "traduit (übersetzen)"], ["Beim Einparken hat er fast ein Schild ___.", "umgefahren", "knocked down (umfahren)", "renversé (umfahren)"], ["Wir haben den Stau auf einer Landstraße ___.", "umfahren", "drove around (umfahren)", "contourné (umfahren)"], ["Sie ___ sehr gut mit Kritik um.", "geht"]],
      fix: [["Sie hat den Text übergesetzt.", "Sie hat den Text übersetzt.", "translate = inseparable: übersetzt.", "traduire = inséparable : übersetzt."], ["Ich habe ihn sofort durchgeschaut.", "Ich habe ihn sofort durchschaut.", "to see through someone = inseparable: durchschaut.", "percer quelqu'un à jour = inséparable : durchschaut."]],
      task: ["Write four sentences about a trip, each using one of these pairs correctly: übersetzen (translate) / übersetzen (ferry), umfahren (drive round) / umfahren (knock down).", "Écris quatre phrases sur un voyage, en employant correctement chacun de ces couples : übersetzen (traduire) / übersetzen (faire traverser), umfahren (contourner) / umfahren (renverser).", "Am Bodensee hat uns eine Fähre nach Konstanz übergesetzt. Ein Freund hat uns die Speisekarte im Restaurant übersetzt. Auf der Rückfahrt haben wir einen langen Stau umfahren. Zum Glück hat niemand ein Verkehrsschild umgefahren."]
    },
    114: {
      gap: [["Zu Ihrem Artikel vom 12. Mai möchte ich Folgendes ___.", "anmerken", "comment", "faire remarquer"], ["Ich teile die Auffassung der Autorin nur ___.", "bedingt", "partly", "en partie"], ["Der Artikel ___, dass es bereits gute Alternativen gibt.", "verschweigt", "fails to mention", "passe sous silence"], ["Es wäre an der ___, dass die Politik handelt.", "Zeit"]],
      fix: [["Hallo liebe Zeitung, euer Artikel war echt doof.", "Zu Ihrem Artikel möchte ich Folgendes anmerken: …", "A letter to the editor stays respectful and formal.", "Une lettre de lecteur reste respectueuse et formelle."], ["Ich teile der Auffassung der Autorin nur bedingt.", "Ich teile die Auffassung der Autorin nur bedingt.", "teilen + accusative: die Auffassung.", "teilen + accusatif : die Auffassung."]],
      task: ["Write the beginning and the end of a letter to the editor (about 60 words) reacting to an article about a new car park in a park.", "Écris le début et la fin d'une lettre de lecteur (environ 60 mots) qui réagit à un article sur un nouveau parking dans un parc.", "Zu Ihrem Artikel „Mehr Parkplätze für die Innenstadt“ vom 3. Juni möchte ich Folgendes anmerken: Mit Verwunderung habe ich gelesen, dass dafür ein Teil des Stadtparks versiegelt werden soll. … Ich würde mir wünschen, dass die Stadt vorausschauender plant. Es wäre an der Zeit, Bus und Rad zu stärken, statt Grünflächen zu opfern. Robin Keller, Freiburg"]
    }
  });

  W.ROLEPLAYS.push(
  { id: "waldbegehung", lesson: 112, level: "C1", icon: "trees", partner: "Frau Graf", role: "the forester", role_fr: "la forestière",
    title: "A walk in the forest", title_fr: "Une promenade en forêt",
    setting: "You're on a guided walk with the local forester, Frau Graf, who explains how the forest is changing. You ask questions and react.", setting_fr: "Tu participes à une promenade guidée avec la forestière locale, Frau Graf, qui explique comment la forêt change. Tu poses des questions et tu réagis.",
    turns: [
      { p: "Sehen Sie die braunen Fichten dort? Die Trockenheit hat ihnen sehr zugesetzt.", en: "Do you see the brown spruces over there? The drought has hit them hard.", fr: "Vous voyez les épicéas bruns là-bas ? La sécheresse les a durement touchés." },
      { y: ["Das ist erschreckend. Sind die Fichten durch den Klimawandel in Gefahr geraten?", "Das ist erschreckend. Sind die Fichten durch den Klimawandel in Gefahr gekommen?", "Das ist erschreckend. Haben die Fichten durch den Klimawandel in Gefahr geraten?"], en: "That's alarming. Have the spruces been put at risk by climate change?", fr: "C'est effrayant. Les épicéas sont-ils menacés à cause du changement climatique ?", why: "in Gefahr geraten (with sein).", why_fr: "in Gefahr geraten (avec sein)." },
      { p: "Ja. Früher hat man überall Fichten gepflanzt, weil sie schnell wachsen.", en: "Yes. In the past people planted spruces everywhere because they grow quickly.", fr: "Oui. Autrefois, on plantait des épicéas partout parce qu'ils poussent vite." },
      { y: ["Und das Wissen über Mischwälder ist damals in Vergessenheit geraten?", "Und das Wissen über Mischwälder ist damals in Vergessenheit gekommen?", "Und das Wissen über Mischwälder hat damals in Vergessenheit geraten?"], en: "And the knowledge about mixed forests was forgotten back then?", fr: "Et le savoir sur les forêts mixtes est alors tombé dans l'oubli ?", why: "in Vergessenheit geraten, Perfekt with sein.", why_fr: "in Vergessenheit geraten, parfait avec sein." },
      { p: "Zum Teil. Heute pflanzen wir wieder Eichen, Buchen und Kiefern zusammen.", en: "Partly. Today we're planting oaks, beeches and pines together again.", fr: "En partie. Aujourd'hui, nous plantons de nouveau chênes, hêtres et pins ensemble." },
      { y: ["Hat die Dürre also ein Umdenken in Gang gesetzt?", "Hat die Dürre also ein Umdenken in Gang gekommen?", "Ist die Dürre also ein Umdenken in Gang gesetzt?"], en: "So has the drought set a rethink in motion?", fr: "La sécheresse a donc amorcé une remise en question ?", why: "Active: in Gang setzen (with haben).", why_fr: "Actif : in Gang setzen (avec haben)." },
      { p: "Genau. Aber wir stehen auch unter Druck: Holz soll weiterhin billig sein.", en: "Exactly. But we're also under pressure: wood is still supposed to be cheap.", fr: "Exactement. Mais nous sommes aussi sous pression : le bois doit rester bon marché." },
      { y: ["Ich verstehe. Findet das Prinzip „nur so viel schlagen, wie nachwächst“ heute noch Anwendung?", "Ich verstehe. Findet das Prinzip „nur so viel schlagen, wie nachwächst“ heute noch Anwendung gefunden?", "Ich verstehe. Kommt das Prinzip „nur so viel schlagen, wie nachwächst“ heute noch Anwendung?"], en: "I see. Is the principle “only cut as much as grows back” still applied today?", fr: "Je comprends. Le principe « ne couper que ce qui repousse » est-il encore appliqué aujourd'hui ?", why: "Anwendung finden = angewendet werden.", why_fr: "Anwendung finden = angewendet werden." },
      { p: "Ja, das ist bis heute die Grundlage der Forstwirtschaft. Das Wort „nachhaltig“ kommt sogar daher.", en: "Yes, that's still the basis of forestry. The word “sustainable” even comes from it.", fr: "Oui, c'est encore aujourd'hui le fondement de la sylviculture. Le mot « durable » vient même de là." },
      { y: ["Das wusste ich nicht. Vielen Dank, die Führung hat sich wirklich gelohnt.", "Das wusste ich nicht. Vielen Dank, die Führung hat wirklich gelohnt sich.", "Das wusste ich nicht. Vielen Dank, die Führung ist sich wirklich gelohnt."], en: "I didn't know that. Thank you, the tour was really worth it.", fr: "Je l'ignorais. Merci beaucoup, la visite valait vraiment la peine.", why: "sich lohnen: hat sich gelohnt.", why_fr: "sich lohnen : hat sich gelohnt." }
    ] },
  { id: "bodenseefahrt", lesson: 113, level: "C1", icon: "ship", partner: "Tobias", role: "a friend", role_fr: "un ami",
    title: "A trip to Lake Constance", title_fr: "Une excursion au lac de Constance",
    setting: "You're driving to Lake Constance with your friend Tobias. On the way, there's a traffic jam, a ferry and a menu in an unknown dialect.", setting_fr: "Tu vas au lac de Constance en voiture avec ton ami Tobias. En chemin, il y a un bouchon, un bac et un menu dans un dialecte inconnu.",
    turns: [
      { p: "Oh nein, zehn Kilometer Stau vor Friedrichshafen!", en: "Oh no, ten kilometres of traffic before Friedrichshafen!", fr: "Oh non, dix kilomètres de bouchon avant Friedrichshafen !" },
      { y: ["Keine Sorge, wir umfahren ihn einfach über die Landstraße.", "Keine Sorge, wir fahren ihn einfach über die Landstraße um.", "Keine Sorge, wir umgefahren ihn einfach über die Landstraße."], en: "Don't worry, we'll just drive round it on the country road.", fr: "Pas d'inquiétude, on le contourne par la route départementale.", why: "To drive around = inseparable: wir umfahren.", why_fr: "Contourner = inséparable : wir umfahren." },
      { p: "Pass auf, da vorne steht ein Schild mitten auf dem Weg!", en: "Watch out, there's a sign in the middle of the road up ahead!", fr: "Attention, il y a un panneau au milieu de la route là devant !" },
      { y: ["Keine Angst, ich fahre es schon nicht um.", "Keine Angst, ich umfahre es schon nicht.", "Keine Angst, ich fahre es schon nicht umgefahren."], en: "Don't worry, I won't knock it over.", fr: "N'aie pas peur, je ne vais pas le renverser.", why: "To knock down = separable: ich fahre es um.", why_fr: "Renverser = séparable : ich fahre es um." },
      { p: "Und wie kommen wir nach Konstanz? Die Brücke ist doch weit weg.", en: "And how do we get to Konstanz? The bridge is a long way off.", fr: "Et comment on va à Constance ? Le pont est loin." },
      { y: ["Von Meersburg aus setzt uns die Fähre über. Das dauert nur zwanzig Minuten.", "Von Meersburg aus übersetzt uns die Fähre. Das dauert nur zwanzig Minuten.", "Von Meersburg aus setzt uns die Fähre übergesetzt. Das dauert nur zwanzig Minuten."], en: "From Meersburg, the ferry takes us across. It only takes twenty minutes.", fr: "Depuis Meersburg, le bac nous fait traverser. Ça ne prend que vingt minutes.", why: "To ferry across = separable: setzt … über.", why_fr: "Faire traverser = séparable : setzt … über." },
      { p: "Später im Restaurant: Was ist denn „Kässpätzle mit Röschtiziebele“?", en: "Later in the restaurant: what on earth is “Kässpätzle mit Röschtiziebele”?", fr: "Plus tard au restaurant : c'est quoi, « Kässpätzle mit Röschtiziebele » ?" },
      { y: ["Ich übersetze es dir: Käsespätzle mit Röstzwiebeln. Das habe ich hier schon oft gegessen.", "Ich setze es dir über: Käsespätzle mit Röstzwiebeln. Das habe ich hier schon oft gegessen.", "Ich übersetzte es dir übersetzt: Käsespätzle mit Röstzwiebeln. Das habe ich hier schon oft gegessen."], en: "I'll translate it for you: cheese noodles with fried onions. I've eaten it here many times.", fr: "Je te traduis : des Spätzle au fromage avec des oignons frits. J'en ai souvent mangé ici.", why: "To translate = inseparable: ich übersetze.", why_fr: "Traduire = inséparable : ich übersetze." },
      { p: "Du hast mich heute wirklich gut unterhalten. Danke für den Ausflug!", en: "You've really entertained me well today. Thanks for the trip!", fr: "Tu m'as vraiment bien diverti aujourd'hui. Merci pour l'excursion !" },
      { y: ["Gern! Das wiederholen wir im Sommer, dann aber mit dem Rad.", "Gern! Das holen wir im Sommer wieder, dann aber mit dem Rad.", "Gern! Das wiedergeholt wir im Sommer, dann aber mit dem Rad."], en: "My pleasure! We'll do it again in summer, but by bike next time.", fr: "Avec plaisir ! On recommence cet été, mais à vélo.", why: "To repeat = inseparable: wir wiederholen.", why_fr: "Recommencer = inséparable : wir wiederholen." }
    ] }
  );

  W.READINGS.push({
    id: "carlowitz", level: "C1", icon: "book-open", title: "1713: Wie die Nachhaltigkeit erfunden wurde", genre: "History",
    intro: "The word everyone uses today was born in a silver-mining town in Saxony, three hundred years ago, out of a shortage of wood.",
    intro_fr: "Le mot que tout le monde emploie aujourd'hui est né il y a trois cents ans dans une ville minière de Saxe, à cause d'une pénurie de bois.",
    paragraphs: [
      { de: "Im 17. Jahrhundert verschlangen der Bergbau und die Schmelzhütten im sächsischen Erzgebirge Unmengen von Holz. Wälder wurden in großem Stil abgeholzt, und in vielen Regionen geriet die Holzversorgung in Gefahr. Hans Carl von Carlowitz, Oberberghauptmann im sächsischen Freiberg, erkannte, dass dieser Raubbau den Bergbau selbst zum Erliegen bringen würde.", en: "In the 17th century, mining and the smelting works in Saxony's Ore Mountains devoured huge quantities of wood. Forests were cleared on a large scale, and in many regions the wood supply was put at risk. Hans Carl von Carlowitz, head of mining administration in Freiberg in Saxony, realised that this overexploitation would bring mining itself to a standstill.", fr: "Au XVIIe siècle, les mines et les fonderies des monts Métallifères, en Saxe, engloutissent d'énormes quantités de bois. Les forêts sont abattues à grande échelle, et dans de nombreuses régions, l'approvisionnement en bois est menacé. Hans Carl von Carlowitz, haut responsable des mines à Freiberg, en Saxe, comprend que cette surexploitation finira par paralyser les mines elles-mêmes." },
      { de: "1713 veröffentlichte er die „Sylvicultura oeconomica“, eines der ersten Werke über Forstwirtschaft. Darin forderte er eine „nachhaltende“ Nutzung des Waldes: Man solle nur so viel Holz schlagen, wie durch Aufforstung wieder nachwachse. Damit setzte er einen Gedanken in Gang, der lange vor allem in der Forstwirtschaft Anwendung fand.", en: "In 1713 he published the “Sylvicultura oeconomica”, one of the first works on forestry. In it, he called for a “sustaining” use of the forest: only as much wood should be cut as would grow back through reforestation. In doing so, he set in motion an idea that for a long time was applied mainly in forestry.", fr: "En 1713, il publie la « Sylvicultura oeconomica », l'un des premiers ouvrages consacrés à la sylviculture. Il y réclame une exploitation « durable » de la forêt : on ne devrait couper que la quantité de bois qui repousse grâce au reboisement. Il amorce ainsi une idée qui sera longtemps appliquée surtout en sylviculture." },
      { de: "Fast drei Jahrhunderte später erlebte der Begriff eine zweite Karriere. 1987 definierte ein Bericht der Vereinten Nationen, der sogenannte Brundtland-Bericht, nachhaltige Entwicklung als eine Entwicklung, die den Bedürfnissen der Gegenwart entspricht, ohne die Möglichkeiten künftiger Generationen zu gefährden. 2015 verabschiedeten die Vereinten Nationen schließlich die Agenda 2030 mit siebzehn Zielen für nachhaltige Entwicklung.", en: "Almost three centuries later, the term had a second career. In 1987, a United Nations report, the so-called Brundtland Report, defined sustainable development as development that meets the needs of the present without compromising the ability of future generations. In 2015, the United Nations finally adopted the 2030 Agenda with seventeen Sustainable Development Goals.", fr: "Près de trois siècles plus tard, la notion connaît une seconde carrière. En 1987, un rapport des Nations unies, le rapport Brundtland, définit le développement durable comme un développement qui répond aux besoins du présent sans compromettre les possibilités des générations futures. En 2015, les Nations unies adoptent enfin le Programme 2030, avec dix-sept objectifs de développement durable." },
      { de: "Heute ist „nachhaltig“ allgegenwärtig, auf Joghurtbechern ebenso wie in Regierungserklärungen. Kritiker bemängeln, das Wort sei so oft verwendet worden, dass es kaum noch etwas bedeute. Wer zu Carlowitz zurückgeht, findet allerdings eine erstaunlich klare Regel: nicht mehr verbrauchen, als nachwächst.", en: "Today, “sustainable” is everywhere, on yoghurt pots as much as in government statements. Critics complain that the word has been used so often that it hardly means anything any more. Anyone who goes back to Carlowitz, however, finds a surprisingly clear rule: don't consume more than grows back.", fr: "Aujourd'hui, « durable » est partout, sur les pots de yaourt comme dans les déclarations gouvernementales. Ses détracteurs déplorent que le mot ait été tellement employé qu'il ne signifie presque plus rien. Celui qui revient à Carlowitz trouve pourtant une règle étonnamment claire : ne pas consommer plus que ce qui repousse." }
    ],
    glossary: { "verschlangen": ["(verschlingen) devoured", "(verschlingen) engloutirent"], "Bergbau": ["mining", "exploitation minière"], "Schmelzhütten": ["smelting works", "fonderies"], "sächsischen": ["Saxon", "saxon"], "Erzgebirge": ["Ore Mountains", "monts Métallifères"], "Unmengen": ["huge quantities", "énormes quantités"], "Stil": ["style (in großem Stil: on a large scale)", "style (in großem Stil : à grande échelle)"], "geriet": ["(geraten) got into", "(geraten) se retrouva"], "Holzversorgung": ["wood supply", "approvisionnement en bois"], "Oberberghauptmann": ["head of mining administration", "haut responsable des mines"], "erkannte": ["realised", "comprit"], "Werke": ["works", "ouvrages"], "forderte": ["called for", "réclama"], "nachhaltende": ["sustaining (old form of nachhaltig)", "durable (ancienne forme de nachhaltig)"], "Nutzung": ["use", "utilisation"], "schlagen": ["(Holz schlagen) to cut wood", "(Holz schlagen) couper du bois"], "nachwachse": ["(Konjunktiv I) would grow back", "(Konjunktiv I) repousserait"], "Begriff": ["term", "notion"], "definierte": ["defined", "définit"], "Vereinten Nationen": ["United Nations", "Nations unies"], "Bedürfnissen": ["needs", "besoins"], "Gegenwart": ["present", "présent"], "entspricht": ["meets, corresponds to", "répond à"], "künftiger": ["future", "futures"], "Agenda": ["agenda", "programme"], "allgegenwärtig": ["omnipresent", "omniprésent"], "Joghurtbechern": ["yoghurt pots", "pots de yaourt"], "Regierungserklärungen": ["government statements", "déclarations gouvernementales"] },
    questions: [
      { q: "Warum wurde im 17. Jahrhundert im Erzgebirge so viel Holz gebraucht?", o: ["Für den Bergbau und die Schmelzhütten", "Für den Bau von Schiffen", "Für die Möbelindustrie"], a: 0 },
      { q: "Was forderte Carlowitz 1713?", o: ["Nur so viel Holz zu schlagen, wie wieder nachwächst", "Alle Wälder abzuholzen", "Kein Holz mehr zu nutzen"], a: 0 },
      { q: "Was geschah 1987?", o: ["Ein UN-Bericht definierte nachhaltige Entwicklung.", "Carlowitz' Buch erschien.", "Die Agenda 2030 wurde verabschiedet."], a: 0 },
      { q: "Wie viele Ziele enthält die Agenda 2030?", o: ["Siebzehn", "Sieben", "Siebzig"], a: 0 },
      { q: "Was bemängeln Kritiker heute?", o: ["Das Wort werde so oft verwendet, dass es kaum noch etwas bedeute.", "Das Wort sei zu kompliziert.", "Niemand kenne das Wort."], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-c1-4", unit: "c1-4", level: "C1", icon: "radio",
    title: "Im Repair-Café", title_fr: "Au Repair Café",
    context: "A radio report from a Repair Café. The reporter talks to Herr Stein, a retired electrician who volunteers there, and Nina, who has brought her toaster.", context_fr: "Un reportage radio dans un Repair Café. Le reporter parle avec Herr Stein, électricien à la retraite et bénévole, et avec Nina, venue avec son grille-pain.",
    words: [["der Elektriker, -", "the electrician", "l'électricien"], ["ehrenamtlich", "voluntary, unpaid", "bénévole"], ["das Ersatzteil, -e", "the spare part", "la pièce de rechange"], ["verkleben", "to glue together", "coller"], ["die Wegwerfmentalität", "the throwaway mentality", "la mentalité du jetable"]],
    lines: [["Reporter", "Herr Stein, was passiert hier jeden Samstag?", "de-DE"], ["Herr Stein", "Die Leute bringen kaputte Geräte, und wir reparieren sie gemeinsam, ehrenamtlich. Die Idee kommt aus den Niederlanden und hat inzwischen in vielen deutschen Städten Anwendung gefunden.", "de-DE"], ["Reporter", "Nina, was haben Sie mitgebracht?", "de-DE"], ["Nina", "Meinen Toaster. Der Hersteller sagt, eine Reparatur lohne sich nicht, ich solle einfach einen neuen kaufen.", "de-DE"], ["Herr Stein", "Das hören wir oft. Viele Geräte sind so gebaut, dass man sie kaum öffnen kann; die Teile sind verklebt statt verschraubt. Dadurch ist das Reparieren fast in Vergessenheit geraten.", "de-DE"], ["Nina", "Und? Ist er noch zu retten?", "de-DE"], ["Herr Stein", "Ja, nur ein Kabel war locker. In zehn Minuten ist er wieder wie neu.", "de-DE"], ["Nina", "Toll! Ich glaube, die Wegwerfmentalität setzt uns alle mehr unter Druck, als wir denken. Ich komme nächsten Samstag wieder, diesmal mit meiner Lampe.", "de-DE"]],
    gist: ["Worum geht es in dem Bericht?", ["Um ein Café, in dem Freiwillige kaputte Geräte reparieren", "Um einen Elektroladen, der Toaster verkauft", "Um eine Fabrik für Ersatzteile"]],
    detail: [["Woher kommt die Idee der Repair-Cafés laut Herrn Stein?", ["Aus den Niederlanden", "Aus Frankreich", "Aus den USA"]], ["Was hat der Hersteller Nina geraten?", ["Einen neuen Toaster zu kaufen", "Den Toaster einzuschicken", "Ein Ersatzteil zu bestellen"]], ["Warum ist Reparieren oft schwierig?", ["Viele Teile sind verklebt statt verschraubt.", "Es gibt keine Werkzeuge mehr.", "Die Geräte sind zu groß."]], ["Was war am Toaster kaputt?", ["Ein Kabel war locker.", "Die Heizung war verbrannt.", "Das Gehäuse war gebrochen."]]],
    decode: ["Die Idee kommt aus den Niederlanden und hat inzwischen in vielen deutschen Städten Anwendung gefunden.", "Dadurch ist das Reparieren fast in Vergessenheit geraten."],
    tip: "In reports, function verb constructions (Anwendung finden, in Vergessenheit geraten, unter Druck setzen) often carry the key information. The noun tells you what it's about; the verb tells you whether something happens, is done to someone, or is caused.", tip_fr: "Dans les reportages, les locutions verbales (Anwendung finden, in Vergessenheit geraten, unter Druck setzen) portent souvent l'information clé. Le nom dit de quoi il s'agit ; le verbe dit si quelque chose arrive, est subi ou est provoqué."
  }]);

  W.PROMPTS.push({ id: "de-c1-4", level: "C1", q: "Halte einen Vortrag (etwa drei bis vier Minuten): „Die Wegwerfgesellschaft: Wie können wir sie überwinden?“ Gliedere deinen Vortrag, nenne Ursachen und konkrete Lösungen und komm zu einem Fazit.", en: "Give a talk (about three to four minutes): “The throwaway society: how can we overcome it?” Structure your talk, give causes and concrete solutions, and reach a conclusion.", fr: "Fais un exposé (environ trois à quatre minutes) : « La société du jetable : comment la dépasser ? » Structure ton exposé, cite des causes et des solutions concrètes, et conclus.", time: 240,
    phrases: ["Mein Vortrag gliedert sich in…", "Eine wesentliche Ursache ist…", "In diesem Zusammenhang…", "Ein vielversprechender Ansatz ist…", "Abschließend möchte ich betonen, dass…"],
    model: "Mein Vortrag gliedert sich in zwei Teile: die Ursachen der Wegwerfgesellschaft und mögliche Lösungen. Eine wesentliche Ursache ist, dass viele Produkte nicht mehr für eine lange Lebensdauer gebaut werden. Teile sind verklebt statt verschraubt, Ersatzteile kaum erhältlich, und eine Reparatur kostet oft mehr als ein neues Gerät. Hinzu kommt, dass billige Mode und ständige Werbung uns unter Druck setzen, immer Neues zu kaufen. In diesem Zusammenhang ist das Wissen über das Reparieren vielerorts in Vergessenheit geraten. Ein vielversprechender Ansatz sind Repair-Cafés, in denen Freiwillige gemeinsam mit den Besitzern Geräte reparieren. Ebenso wichtig wären gesetzliche Regeln, die Hersteller verpflichten, langlebige und reparierbare Produkte anzubieten. Abschließend möchte ich betonen, dass weder Verbote noch guter Wille allein genügen: Erst wenn Reparieren einfacher und billiger ist als Wegwerfen, wird sich unser Verhalten wirklich ändern." });

  W.WRITING_GUIDE["c1-4"] = { genre: "A letter to the editor (C1)", genre_fr: "Une lettre de lecteur (C1)",
    plan: [["Refer to the article.", "Fais référence à l'article."], ["Your position.", "Ta position."], ["A strong argument with your own experience.", "Un argument fort, avec ton expérience."], ["What the article leaves out.", "Ce que l'article passe sous silence."], ["A wish or demand, and your name and town.", "Un souhait ou une demande, puis ton nom et ta ville."]],
    marks: [["Zu Ihrem Artikel", "the reference to the article", "la référence à l'article"], ["Ich teile die Auffassung der Autorin nur bedingt", "your position", "ta position"], ["Aus eigener Erfahrung", "your own experience", "ton expérience"], ["Ihr Artikel verschweigt jedoch", "what the article leaves out", "ce que l'article passe sous silence"], ["Es wäre an der Zeit", "a demand", "une demande"], ["Robin Keller, Freiburg", "name and town", "nom et ville"]] };

  /* Atelier de langue : champs allemands d'abord, puis anglais et français (voir localize.js). */
  W.LEXIS = W.LEXIS || {};
  W.LEXIS["c1-4"] = {
    colloc: [
      ["einen Kreislauf schließen", "to close a loop", "boucler la boucle", "Recycling soll den Kreislauf der Rohstoffe schließen.", "schließen", ["machen", "binden"]],
      ["Raubbau betreiben", "to overexploit", "surexploiter", "Jahrhundertelang wurde in den Wäldern Raubbau betrieben.", "betrieben", ["getrieben", "gemacht"]],
      ["Bäume fällen", "to fell trees", "abattre des arbres", "Für die neue Straße wurden hundert Bäume gefällt.", "gefällt", ["gefallen", "geworfen"]],
      ["Bilanz ziehen", "to take stock", "dresser le bilan", "Nach zehn Jahren zieht die Stadt Bilanz.", "zieht", ["macht", "stellt"]],
      ["etwas in Gang setzen", "to set something in motion", "mettre quelque chose en route", "Die Krise hat ein Umdenken in Gang gesetzt.", "gesetzt", ["gestellt", "gelegt"]],
      ["an Bedeutung gewinnen", "to gain in importance", "gagner en importance", "Regionale Produkte gewinnen an Bedeutung.", "gewinnen", ["nehmen", "kommen"]],
      ["in Gefahr geraten", "to be put at risk", "se retrouver en danger", "Viele Arten sind in Gefahr geraten.", "geraten", ["getreten", "gefallen"]],
      ["auf Kosten anderer leben", "to live at others' expense", "vivre aux dépens des autres", "Wir leben auf Kosten künftiger Generationen.", "Kosten", ["Preis", "Last"]],
      ["den Müll trennen", "to separate the rubbish", "trier les déchets", "In Deutschland trennt man den Müll sehr genau.", "trennt", ["teilt", "scheidet"]],
      ["Abhilfe schaffen", "to remedy the situation", "remédier à la situation", "Neue Regeln sollen Abhilfe schaffen.", "schaffen", ["machen", "geben"]]
    ],
    wf: [
      ["Viele Geräte sind kaum noch ___. (REPARIEREN)", "reparierbar"],
      ["Die ___ von Wäldern bedroht viele Tierarten. (HOLZ)", "Abholzung"],
      ["Dieses Produkt ist besonders ___ und hält Jahrzehnte. (LEBEN)", "langlebig"],
      ["Die ___ von Elektroschrott ist teuer. (ENTSORGEN)", "Entsorgung"],
      ["Plastik ist für die Meere sehr ___. (SCHADEN)", "schädlich|umweltschädlich"],
      ["Die ___ vieler Rohstoffe ist begrenzt. (VERFÜGEN)", "Verfügbarkeit"],
      ["Wir brauchen ___ Lösungen, keine kurzfristigen. (DAUER)", "dauerhafte"],
      ["Die ___ der Fläche dauerte zwanzig Jahre. (FORST)", "Aufforstung"]
    ],
    kwt: [
      ["Die Methode wird heute kaum noch angewendet.", "ANWENDUNG", "Die Methode ___.", "findet heute kaum noch Anwendung|findet kaum noch Anwendung"],
      ["Man hat diese Tradition vergessen.", "VERGESSENHEIT", "Diese Tradition ___.", "ist in Vergessenheit geraten"],
      ["Die Krise hat ein Umdenken ausgelöst.", "GANG", "Die Krise hat ein Umdenken ___.", "in Gang gesetzt|in Gang gebracht"],
      ["Der Text wurde ins Deutsche übertragen.", "ÜBERSETZT", "Der Text ___.", "wurde ins Deutsche übersetzt"],
      ["Wir fahren um die Baustelle herum.", "UMFAHREN", "Wir ___.", "umfahren die Baustelle"],
      ["Die Kunden üben Druck auf die Firma aus.", "DRUCK", "Die Kunden ___.", "setzen die Firma unter Druck"]
    ],
    idioms: [
      ["den Wald vor lauter Bäumen nicht sehen", "wegen vieler Details das Wesentliche übersehen", "not to see the wood for the trees", "ne pas voir la forêt derrière les arbres", "Bei so vielen Daten sieht man den Wald vor lauter Bäumen nicht.", "den Wald vor lauter Bäumen nicht"],
      ["jemandem den Wind aus den Segeln nehmen", "jemandes Argumenten die Wirkung nehmen", "to take the wind out of someone's sails", "couper l'herbe sous le pied de quelqu'un", "Mit diesem Kompromiss nahm sie den Kritikern den Wind aus den Segeln.", "den Wind aus den Segeln"],
      ["über etwas Gras wachsen lassen", "warten, bis etwas vergessen ist", "to let the dust settle", "laisser le temps faire son œuvre", "Über den alten Streit ist längst Gras gewachsen.", "Gras gewachsen"],
      ["Nach uns die Sintflut.", "Die Folgen für andere sind egal.", "After us, the deluge.", "Après nous, le déluge.", "Viele handeln nach dem Motto: Nach uns die Sintflut.", "Nach uns die Sintflut"],
      ["das Fass zum Überlaufen bringen", "das Letzte sein, was man noch ertragen kann", "to be the last straw", "être la goutte d'eau qui fait déborder le vase", "Die neue Gebühr hat das Fass zum Überlaufen gebracht.", "das Fass zum Überlaufen"],
      ["aus dem Vollen schöpfen", "reichlich Mittel haben und sie nutzen", "to draw on plentiful resources", "puiser sans compter", "Lange hat die Menschheit aus dem Vollen geschöpft.", "aus dem Vollen"],
      ["die Kurve kriegen", "eine schwierige Lage noch rechtzeitig meistern", "to turn things around in time", "redresser la barre à temps", "Hoffentlich kriegen wir beim Klimaschutz noch die Kurve.", "die Kurve"],
      ["etwas aus dem Boden stampfen", "etwas sehr schnell schaffen", "to conjure something up out of nowhere", "faire sortir quelque chose de terre", "Die Stadt hat in einem Jahr neue Radwege aus dem Boden gestampft.", "aus dem Boden gestampft"]
    ]
  };

  W.COURSE.push({ id: "c1-4", level: "C1", icon: "refresh-cw", title: "Sustainability", title_fr: "Développement durable",
    intro: "Forests, raw materials, the throwaway society: in this unit, you'll learn function verb constructions that express a process or a passive meaning (Anwendung finden, in Vergessenheit geraten, in Gang setzen), the verbs whose prefix is separable or not depending on the meaning (übersetzen / übersetzen), and how to write a letter to the editor. You'll also discover how the word “sustainable” was born in a Saxon mining town in 1713.",
    intro_fr: "Forêts, matières premières, société du jetable : dans cette unité, tu vas apprendre les locutions verbales qui expriment un processus ou un sens passif (Anwendung finden, in Vergessenheit geraten, in Gang setzen), les verbes dont le préfixe est séparable ou non selon le sens (übersetzen / übersetzen), et la façon d'écrire au courrier des lecteurs. Tu découvriras aussi comment le mot « durable » est né en 1713 dans une ville minière de Saxe.",
    can: ["Use function verb constructions with kommen, geraten, finden, bringen and setzen", "Tell separable and inseparable prefix verbs apart by meaning and stress", "Write a short, pointed letter to the editor", "Talk about the circular economy and forests", "Give a structured talk on causes and solutions"],
    can_fr: ["Employer les locutions verbales avec kommen, geraten, finden, bringen et setzen", "Distinguer les verbes à préfixe séparable et inséparable selon le sens et l'accent", "Écrire une lettre de lecteur courte et incisive", "Parler d'économie circulaire et de forêts", "Faire un exposé structuré sur des causes et des solutions"],
    lessons: [112, 113, 114], vocab: ["kreislaufDE", "naturschutzDE"], reading: "carlowitz", prompt: "de-c1-4",
    writing: { task: "A newspaper has published an article, “Fast fashion: cheap clothes, high price”, arguing that consumers alone are to blame for textile waste. Write a letter to the editor (220-260 words): refer to the article, take a position, use your own experience, point out what the article leaves out, and end with a demand.", task_fr: "Un journal a publié un article, « Fast fashion : vêtements bon marché, prix élevé », selon lequel les consommateurs seraient seuls responsables des déchets textiles. Écris une lettre de lecteur (220 à 260 mots) : fais référence à l'article, prends position, appuie-toi sur ton expérience, signale ce que l'article passe sous silence et termine par une demande.", words: "220-260",
      tips: ["Zu Ihrem Artikel „…“ vom … möchte ich Folgendes anmerken.", "Ich teile die Auffassung der Autorin nur bedingt.", "Aus eigener Erfahrung weiß ich, dass…", "Ihr Artikel verschweigt jedoch, dass…", "Es wäre an der Zeit, dass…"],
      checklist: ["I referred to the article (title, date)", "I took a clear position", "I used my own experience", "I pointed out what the article leaves out", "I wrote between 220 and 260 words"],
      checklist_fr: ["J'ai fait référence à l'article (titre, date)", "J'ai pris une position claire", "J'ai pris appui sur mon expérience", "J'ai signalé ce que l'article passe sous silence", "J'ai écrit entre 220 et 260 mots"],
      model: "Zu Ihrem Artikel „Fast Fashion: Billige Kleidung, hoher Preis“ vom 8. März möchte ich Folgendes anmerken.\n\nIch teile die Auffassung der Autorin nur bedingt. Natürlich tragen wir als Verbraucher Verantwortung: Wer jeden Monat neue Kleidung kauft, die nach wenigen Wäschen kaputtgeht, trägt zu den riesigen Bergen an Textilmüll bei. Es ist richtig, dass wir weniger und bewusster einkaufen sollten. Auch ich habe früher oft spontan Kleidung im Sonderangebot gekauft, die ich danach kaum getragen habe.\n\nAus eigener Erfahrung weiß ich allerdings, wie schwierig das im Alltag ist. Mit meinem kleinen Budget im Studium kann ich mir eine Jacke für zweihundert Euro schlicht nicht leisten, auch wenn sie zehn Jahre halten würde. Second-Hand-Läden sind eine gute Alternative, aber in meiner Kleinstadt gibt es keinen einzigen.\n\nIhr Artikel verschweigt jedoch, dass die Verantwortung nicht allein bei den Kunden liegt. Die Unternehmen setzen uns mit ständig neuen Kollektionen und aggressiver Werbung unter Druck, und viele Kleidungsstücke sind so verarbeitet, dass sie sich kaum reparieren lassen. Zudem landet ein großer Teil der aussortierten Kleidung im Ausland, wo sie oft auf Deponien endet. Solange Neues billiger ist als eine Reparatur, wird sich am Verhalten der meisten Menschen wenig ändern.\n\nEs wäre an der Zeit, dass die Politik hier eingreift: mit klaren Regeln für langlebige Produkte, mit einer Pflicht zur Rücknahme alter Kleidung und mit Unterstützung für Reparaturbetriebe. Erst dann wird der Appell an die Verbraucher wirklich glaubwürdig.\n\nRobin Keller, Freiburg" } });
})();
