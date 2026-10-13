/* Cours d'allemand, unité B2-3 « Climate and the environment / Climat et environnement » : le style nominal
   (Nominalisierung : weil die Preise steigen → aufgrund des Anstiegs der Preise), les prépositions suivies du génitif
   (aufgrund, angesichts, infolge, innerhalb, zugunsten…), participer à une discussion (Goethe B2, Sprechen partie 2).
   Personnages fictifs, prénoms allemands.
   Faits vérifiables seulement : le mot « Energie-Wende » figure dans le titre d'une étude de l'Öko-Institut publiée
   en 1980 ; loi sur les énergies renouvelables (EEG) de 2000, tarifs de rachat garantis sur de longues années ;
   après Fukushima (mars 2011), le Bundestag décide de sortir du nucléaire d'ici fin 2022 ; les trois dernières
   centrales (Isar 2, Emsland, Neckarwestheim 2) sont arrêtées le 15 avril 2023 ; loi de sortie du charbon de 2020 :
   dernière centrale à charbon au plus tard en 2038. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "klimaDE", icon: "sun", title: "Climate and energy", title_fr: "Climat et énergie", level: "B2", words: [
    ["der Klimawandel", "climate change", "le changement climatique", "Der Klimawandel betrifft alle Regionen der Welt."],
    ["die Erderwärmung", "global warming", "le réchauffement de la planète", "Die Erderwärmung soll auf deutlich unter zwei Grad begrenzt werden."],
    ["das Treibhausgas, -e", "the greenhouse gas", "le gaz à effet de serre", "Kohlendioxid ist das wichtigste Treibhausgas."],
    ["der Ausstoß", "the emissions, the output", "les émissions, le rejet", "Der Ausstoß von CO2 muss sinken."],
    ["erneuerbar", "renewable", "renouvelable", "Wind und Sonne sind erneuerbare Energiequellen."],
    ["die Windkraft", "wind power", "l'énergie éolienne", "An der Küste wird viel Strom aus Windkraft erzeugt."],
    ["die Solarenergie", "solar energy", "l'énergie solaire", "Auf unserem Dach nutzen wir Solarenergie."],
    ["die Kernkraft", "nuclear power", "l'énergie nucléaire", "Über die Kernkraft wurde in Deutschland jahrzehntelang gestritten."],
    ["der Ausstieg (aus + Dat.)", "the phase-out (of)", "la sortie (de)", "Der Ausstieg aus der Kohle ist beschlossen."],
    ["die Energiewende", "the energy transition", "la transition énergétique", "Die Energiewende kostet viel Geld, aber sie schafft auch Arbeitsplätze."],
    ["die Dürre, -n", "the drought", "la sécheresse", "Nach der langen Dürre waren viele Felder braun."],
    ["das Hochwasser, -", "the flood", "la crue, l'inondation", "Beim Hochwasser stand das Wasser einen Meter hoch in den Straßen."],
    ["die Hitzewelle, -n", "the heatwave", "la vague de chaleur, la canicule", "Während der Hitzewelle blieben viele Menschen zu Hause."],
    ["klimaneutral", "climate-neutral", "neutre en carbone", "Die Firma will bis 2035 klimaneutral werden."],
    ["die Artenvielfalt", "biodiversity", "la biodiversité", "Blühwiesen fördern die Artenvielfalt."],
    ["die Ressource, -n", "the resource", "la ressource", "Wasser ist eine kostbare Ressource."]
  ] },
  { id: "umwelthandelnDE", icon: "leaf", title: "Protecting the environment", title_fr: "Protéger l'environnement", level: "B2", words: [
    ["nachhaltig", "sustainable", "durable", "Wir sollten nachhaltiger leben."],
    ["die Nachhaltigkeit", "sustainability", "la durabilité, le développement durable", "Nachhaltigkeit ist zum Modewort geworden."],
    ["der Verbrauch", "the consumption", "la consommation", "Der Verbrauch von Strom steigt im Winter."],
    ["verschwenden", "to waste", "gaspiller", "In Europa werden viele Lebensmittel verschwendet."],
    ["der Schadstoff, -e", "the pollutant", "le polluant", "Alte Autos stoßen mehr Schadstoffe aus."],
    ["die Abgase (Pl.)", "the exhaust fumes", "les gaz d'échappement", "Die Abgase machen die Luft in der Stadt schlecht."],
    ["verschmutzen", "to pollute", "polluer", "Plastik verschmutzt die Meere."],
    ["die Maßnahme, -n", "the measure", "la mesure", "Welche Maßnahmen helfen wirklich?"],
    ["ergreifen", "to take (measures); to seize", "prendre (des mesures) ; saisir", "Die Stadt hat mehrere Maßnahmen ergriffen."],
    ["verzichten auf (+ Akk.)", "to do without, to give up", "renoncer à, se passer de", "Ich verzichte im Urlaub auf das Flugzeug."],
    ["das Verbot, -e", "the ban", "l'interdiction", "Ein Verbot allein ändert noch nicht das Verhalten."],
    ["einschränken", "to restrict, to limit", "limiter, restreindre", "Wir müssen unseren Verbrauch einschränken."],
    ["die Forderung, -en", "the demand", "la revendication, l'exigence", "Die Demonstranten stellen klare Forderungen."],
    ["umweltbewusst", "environmentally conscious", "soucieux de l'environnement", "Viele junge Menschen kaufen umweltbewusst ein."],
    ["der Kompromiss, -e", "the compromise", "le compromis", "Am Ende einigten sich beide Seiten auf einen Kompromiss."],
    ["widersprechen (+ Dat.)", "to contradict, to disagree with", "contredire", "Da muss ich Ihnen widersprechen."]
  ] });

  W.LESSONS.push(
  {
    id: 79, level: "B2", icon: "file-text",
    title: "Aufgrund des Anstiegs: the nominal style", title_fr: "Aufgrund des Anstiegs : le style nominal",
    subtitle: "Turn verbs into nouns, as newspapers and official texts do.", subtitle_fr: "Transformer des verbes en noms, comme le font les journaux et les textes officiels.",
    body: `
<h2>Two styles</h2>
<p>Spoken German prefers verbs: <s-de>Weil die Temperaturen steigen, schmelzen die Gletscher.</s-de> Written, formal German often uses nouns instead: <s-de>Aufgrund des Anstiegs der Temperaturen schmelzen die Gletscher.</s-de> This is the <b>nominal style</b> (<s-de>Nominalstil</s-de>).</p>
<h2>From verb to noun</h2>
<table>
<tr><th>Verb</th><th>Noun</th></tr>
<tr><td><s-de>steigen</s-de></td><td><s-de>der Anstieg</s-de></td></tr>
<tr><td><s-de>verbrauchen</s-de></td><td><s-de>der Verbrauch</s-de></td></tr>
<tr><td><s-de>schützen</s-de></td><td><s-de>der Schutz</s-de></td></tr>
<tr><td><s-de>entwickeln</s-de></td><td><s-de>die Entwicklung</s-de></td></tr>
<tr><td><s-de>ankommen</s-de></td><td><s-de>die Ankunft</s-de></td></tr>
<tr><td><s-de>recyceln</s-de></td><td><s-de>das Recyceln</s-de> (the infinitive as a noun)</td></tr>
</table>
<h2>What happens to the rest of the sentence</h2>
<p>The subject becomes a genitive: <s-de>die Preise steigen</s-de> → <s-de>der Anstieg der Preise</s-de>. The object becomes a genitive or <s-de>von</s-de> + dative: <s-de>man baut Windräder</s-de> → <s-de>der Bau von Windrädern</s-de>. An adverb becomes an adjective: <s-de>die Preise steigen schnell</s-de> → <s-de>der schnelle Anstieg der Preise</s-de>.</p>
<h2>From conjunction to preposition</h2>
<table>
<tr><th>Clause</th><th>Nominal phrase</th></tr>
<tr><td><s-de>weil…</s-de></td><td><s-de>wegen / aufgrund</s-de> + genitive</td></tr>
<tr><td><s-de>obwohl…</s-de></td><td><s-de>trotz</s-de> + genitive</td></tr>
<tr><td><s-de>wenn…</s-de></td><td><s-de>bei</s-de> + dative</td></tr>
<tr><td><s-de>nachdem… / bevor…</s-de></td><td><s-de>nach / vor</s-de> + dative</td></tr>
<tr><td><s-de>während…</s-de></td><td><s-de>während</s-de> + genitive</td></tr>
<tr><td><s-de>um … zu…</s-de></td><td><s-de>zum / zur</s-de> + noun</td></tr>
</table>
<p><s-de>Wenn es regnet, …</s-de> → <s-de>Bei Regen …</s-de> · <s-de>Um Energie zu sparen, …</s-de> → <s-de>Zum Energiesparen …</s-de></p>
<div class="tip">The nominal style is dense: it's typical of news, reports and official letters. In your own texts, one or two nominal phrases make your German sound more advanced; a whole text of them becomes hard to read. When you <b>read</b>, do the opposite: turn the nouns back into verbs in your head.</div>
`,
    body_fr: `
<h2>Deux styles</h2>
<p>L'allemand parlé préfère les verbes : <s-de>Weil die Temperaturen steigen, schmelzen die Gletscher.</s-de> L'allemand écrit et soutenu emploie souvent des noms à la place : <s-de>Aufgrund des Anstiegs der Temperaturen schmelzen die Gletscher.</s-de> (En raison de la hausse des températures…) C'est le <b>style nominal</b> (<s-de>Nominalstil</s-de>), que le français connaît bien aussi.</p>
<h2>Du verbe au nom</h2>
<table>
<tr><th>Verbe</th><th>Nom</th></tr>
<tr><td><s-de>steigen</s-de></td><td><s-de>der Anstieg</s-de></td></tr>
<tr><td><s-de>verbrauchen</s-de></td><td><s-de>der Verbrauch</s-de></td></tr>
<tr><td><s-de>schützen</s-de></td><td><s-de>der Schutz</s-de></td></tr>
<tr><td><s-de>entwickeln</s-de></td><td><s-de>die Entwicklung</s-de></td></tr>
<tr><td><s-de>ankommen</s-de></td><td><s-de>die Ankunft</s-de></td></tr>
<tr><td><s-de>recyceln</s-de></td><td><s-de>das Recyceln</s-de> (l'infinitif employé comme nom)</td></tr>
</table>
<h2>Ce que devient le reste de la phrase</h2>
<p>Le sujet devient un génitif : <s-de>die Preise steigen</s-de> → <s-de>der Anstieg der Preise</s-de>. Le complément devient un génitif ou <s-de>von</s-de> + datif : <s-de>man baut Windräder</s-de> → <s-de>der Bau von Windrädern</s-de>. L'adverbe devient un adjectif : <s-de>die Preise steigen schnell</s-de> → <s-de>der schnelle Anstieg der Preise</s-de>.</p>
<h2>De la conjonction à la préposition</h2>
<table>
<tr><th>Subordonnée</th><th>Groupe nominal</th></tr>
<tr><td><s-de>weil…</s-de></td><td><s-de>wegen / aufgrund</s-de> + génitif</td></tr>
<tr><td><s-de>obwohl…</s-de></td><td><s-de>trotz</s-de> + génitif</td></tr>
<tr><td><s-de>wenn…</s-de></td><td><s-de>bei</s-de> + datif</td></tr>
<tr><td><s-de>nachdem… / bevor…</s-de></td><td><s-de>nach / vor</s-de> + datif</td></tr>
<tr><td><s-de>während…</s-de></td><td><s-de>während</s-de> + génitif</td></tr>
<tr><td><s-de>um … zu…</s-de></td><td><s-de>zum / zur</s-de> + nom</td></tr>
</table>
<p><s-de>Wenn es regnet, …</s-de> → <s-de>Bei Regen …</s-de> (En cas de pluie…) · <s-de>Um Energie zu sparen, …</s-de> → <s-de>Zum Energiesparen …</s-de></p>
<div class="tip">Le style nominal est dense : on le trouve dans les informations, les rapports et les lettres officielles. Dans tes propres textes, un ou deux groupes nominaux donnent un allemand plus avancé ; un texte entier ainsi devient difficile à lire. Quand tu <b>lis</b>, fais l'inverse : retransforme mentalement les noms en verbes.</div>
`,
    examples: [
      ["Aufgrund des Anstiegs der Temperaturen schmelzen die Gletscher.", "Because of the rise in temperatures, the glaciers are melting.", "En raison de la hausse des températures, les glaciers fondent."],
      ["Der Verbrauch der Haushalte ist im letzten Jahr gesunken.", "Household consumption fell last year.", "La consommation des ménages a baissé l'an dernier."],
      ["Der Bau neuer Windräder stößt nicht überall auf Zustimmung.", "The construction of new wind turbines doesn't meet with approval everywhere.", "La construction de nouvelles éoliennes ne fait pas l'unanimité."],
      ["Bei Hochwasser wird die Uferstraße gesperrt.", "In the event of flooding, the riverside road is closed.", "En cas de crue, la route du bord de l'eau est fermée."],
      ["Trotz des Regens demonstrierten Tausende für mehr Klimaschutz.", "Despite the rain, thousands demonstrated for more climate protection.", "Malgré la pluie, des milliers de personnes ont manifesté pour davantage de protection du climat."],
      ["Nach der Einführung des Tickets fuhren mehr Menschen mit dem Zug.", "After the ticket was introduced, more people travelled by train.", "Après l'introduction du billet, davantage de gens ont pris le train."],
      ["Zum Energiesparen schalten wir nachts das Licht im Büro aus.", "To save energy, we switch off the office lights at night.", "Pour économiser l'énergie, nous éteignons la lumière du bureau la nuit."]
    ],
    quiz: [
      { q: "steigen → ?", q_fr: "steigen → ?", o: ["der Anstieg", "die Steigung der", "das Gestiegen"], a: 0, ex: "steigen → der Anstieg (the rise).", ex_fr: "steigen → der Anstieg (la hausse)." },
      { q: "“Weil die Preise steigen, …” in the nominal style:", q_fr: "« Weil die Preise steigen, … » au style nominal :", o: ["Aufgrund des Anstiegs der Preise …", "Aufgrund den Anstieg die Preise …", "Wegen die Preise steigen …"], a: 0, ex: "aufgrund + genitive; the subject becomes a genitive.", ex_fr: "aufgrund + génitif ; le sujet devient un génitif." },
      { q: "“Wenn es regnet, …” →", q_fr: "« Wenn es regnet, … » →", o: ["Bei Regen …", "Wegen Regen …", "Nach Regen …"], a: 0, ex: "wenn → bei + dative.", ex_fr: "wenn → bei + datif." },
      { q: "“Obwohl es kalt war, …” →", q_fr: "« Obwohl es kalt war, … » →", o: ["Trotz der Kälte …", "Bei der Kälte …", "Trotz die Kälte …"], a: 0, ex: "obwohl → trotz + genitive.", ex_fr: "obwohl → trotz + génitif." },
      { q: "“Die Preise steigen schnell.” → der ___ Anstieg der Preise", q_fr: "« Die Preise steigen schnell. » → der ___ Anstieg der Preise", o: ["schnelle", "schnell", "schnellen"], a: 0, ex: "The adverb becomes an adjective with an ending: der schnelle Anstieg.", ex_fr: "L'adverbe devient un adjectif avec une terminaison : der schnelle Anstieg." }
    ]
  },
  {
    id: 80, level: "B2", icon: "link",
    title: "Angesichts, infolge, zugunsten: prepositions with the genitive", title_fr: "Angesichts, infolge, zugunsten : les prépositions suivies du génitif",
    subtitle: "The prepositions of formal German, grouped by meaning.", subtitle_fr: "Les prépositions de l'allemand soutenu, classées par sens.",
    body: `
<h2>The genitive prepositions</h2>
<p>You know <s-de>wegen, trotz, während</s-de>. Formal texts use many more, almost all with the genitive:</p>
<table>
<tr><th>Meaning</th><th>Prepositions</th></tr>
<tr><td>cause</td><td><s-de>aufgrund, infolge, angesichts</s-de> (in view of)</td></tr>
<tr><td>time</td><td><s-de>während, innerhalb, außerhalb</s-de></td></tr>
<tr><td>place</td><td><s-de>innerhalb, außerhalb, oberhalb, unterhalb</s-de></td></tr>
<tr><td>contrast</td><td><s-de>trotz, ungeachtet</s-de> (regardless of)</td></tr>
<tr><td>instead of</td><td><s-de>anstelle, statt</s-de></td></tr>
<tr><td>for the benefit of</td><td><s-de>zugunsten</s-de></td></tr>
<tr><td>about</td><td><s-de>bezüglich, hinsichtlich</s-de></td></tr>
<tr><td>by means of</td><td><s-de>mithilfe, mittels</s-de></td></tr>
</table>
<h2>In sentences</h2>
<p><s-de>Angesichts der Hitze bleiben die Schulen geschlossen.</s-de> · <s-de>Infolge des Sturms fielen viele Züge aus.</s-de> · <s-de>Innerhalb eines Jahres hat sich der Preis verdoppelt.</s-de> · <s-de>Die Stadt verzichtet auf neue Parkplätze zugunsten eines Radwegs.</s-de></p>
<h2>Without an article</h2>
<p>When there is no article to show the genitive, German uses <s-de>von</s-de>: <s-de>innerhalb von zwei Wochen</s-de>, <s-de>anstelle von Plastik</s-de>, <s-de>mithilfe von Spenden</s-de>.</p>
<div class="tip">In everyday speech, many Germans say <s-de>wegen dem Regen</s-de> (dative). It's very common, but in writing, and in the exam, use the genitive: <s-de>wegen des Regens</s-de>.</div>
`,
    body_fr: `
<h2>Les prépositions du génitif</h2>
<p>Tu connais <s-de>wegen, trotz, während</s-de>. Les textes soutenus en emploient beaucoup d'autres, presque toutes avec le génitif :</p>
<table>
<tr><th>Sens</th><th>Prépositions</th></tr>
<tr><td>la cause</td><td><s-de>aufgrund, infolge, angesichts</s-de> (vu, face à)</td></tr>
<tr><td>le temps</td><td><s-de>während, innerhalb, außerhalb</s-de></td></tr>
<tr><td>le lieu</td><td><s-de>innerhalb, außerhalb, oberhalb, unterhalb</s-de></td></tr>
<tr><td>l'opposition</td><td><s-de>trotz, ungeachtet</s-de> (sans tenir compte de)</td></tr>
<tr><td>à la place de</td><td><s-de>anstelle, statt</s-de></td></tr>
<tr><td>en faveur de</td><td><s-de>zugunsten</s-de></td></tr>
<tr><td>au sujet de</td><td><s-de>bezüglich, hinsichtlich</s-de></td></tr>
<tr><td>au moyen de</td><td><s-de>mithilfe, mittels</s-de></td></tr>
</table>
<h2>En contexte</h2>
<p><s-de>Angesichts der Hitze bleiben die Schulen geschlossen.</s-de> (Vu la chaleur, les écoles restent fermées.) · <s-de>Infolge des Sturms fielen viele Züge aus.</s-de> · <s-de>Innerhalb eines Jahres hat sich der Preis verdoppelt.</s-de> · <s-de>Die Stadt verzichtet auf neue Parkplätze zugunsten eines Radwegs.</s-de></p>
<h2>Sans article</h2>
<p>Quand aucun article ne marque le génitif, l'allemand prend <s-de>von</s-de> : <s-de>innerhalb von zwei Wochen</s-de>, <s-de>anstelle von Plastik</s-de>, <s-de>mithilfe von Spenden</s-de>.</p>
<div class="tip">À l'oral, beaucoup d'Allemands disent <s-de>wegen dem Regen</s-de> (datif). C'est très courant, mais à l'écrit, et à l'examen, emploie le génitif : <s-de>wegen des Regens</s-de>.</div>
`,
    examples: [
      ["Angesichts der Hitze bleiben die Schulen heute geschlossen.", "In view of the heat, schools are closed today.", "Vu la chaleur, les écoles restent fermées aujourd'hui."],
      ["Infolge des Sturms fielen zahlreiche Züge aus.", "As a result of the storm, many trains were cancelled.", "À la suite de la tempête, de nombreux trains ont été annulés."],
      ["Innerhalb eines Jahres hat sich der Preis fast verdoppelt.", "Within a year, the price has almost doubled.", "En l'espace d'un an, le prix a presque doublé."],
      ["Außerhalb der Stadt ist die Luft deutlich besser.", "Outside the town, the air is much better.", "En dehors de la ville, l'air est nettement meilleur."],
      ["Die Stadt verzichtet zugunsten eines Radwegs auf neue Parkplätze.", "The town is giving up new parking spaces in favour of a cycle lane.", "La ville renonce à de nouvelles places de parking au profit d'une piste cyclable."],
      ["Bezüglich Ihrer Anfrage kann ich Ihnen Folgendes mitteilen.", "Regarding your enquiry, I can tell you the following.", "Concernant votre demande, je peux vous communiquer ce qui suit."],
      ["Mithilfe von Spenden wurde der Park neu bepflanzt.", "The park was replanted with the help of donations.", "Le parc a été replanté grâce à des dons."]
    ],
    quiz: [
      { q: "___ des Sturms fielen viele Züge aus. (as a result of)", q_fr: "___ des Sturms fielen viele Züge aus. (à la suite de)", o: ["Infolge", "Zugunsten", "Innerhalb"], a: 0, ex: "infolge = as a result of.", ex_fr: "infolge = à la suite de." },
      { q: "“Within two weeks” (no article):", q_fr: "« En l'espace de deux semaines » (sans article) :", o: ["innerhalb von zwei Wochen", "innerhalb zwei Wochen", "innerhalb zweier Woche"], a: 0, ex: "No article: von + dative.", ex_fr: "Sans article : von + datif." },
      { q: "In formal writing: ___ des Regens", q_fr: "À l'écrit soutenu : ___ des Regens", o: ["wegen", "wegen dem", "wegens"], a: 0, ex: "wegen + genitive in writing.", ex_fr: "wegen + génitif à l'écrit." },
      { q: "“in favour of a cycle lane”", q_fr: "« au profit d'une piste cyclable »", o: ["zugunsten eines Radwegs", "zugunsten einem Radweg", "angesichts eines Radwegs"], a: 0, ex: "zugunsten + genitive.", ex_fr: "zugunsten + génitif." },
      { q: "Which preposition means “in view of”?", q_fr: "Quelle préposition veut dire « vu, face à » ?", o: ["angesichts", "anstelle", "außerhalb"], a: 0, ex: "angesichts der Lage = in view of the situation.", ex_fr: "angesichts der Lage = vu la situation." }
    ]
  },
  {
    id: 81, level: "B2", kind: "functional", icon: "messages-square",
    title: "Everyday German: taking part in a discussion", title_fr: "L'allemand de tous les jours : participer à une discussion",
    subtitle: "Give your view, react, disagree politely and look for a compromise.", subtitle_fr: "Donner ton avis, réagir, contredire poliment et chercher un compromis.",
    body: `
<h2>Phrases for a discussion</h2>
<table>
<tr><th>To…</th><th>German</th></tr>
<tr><td>give your view</td><td><s-de>Ich bin der Ansicht, dass…</s-de> · <s-de>Meiner Meinung nach…</s-de></td></tr>
<tr><td>agree</td><td><s-de>Da stimme ich Ihnen zu.</s-de> · <s-de>Das sehe ich genauso.</s-de></td></tr>
<tr><td>partly agree</td><td><s-de>Da haben Sie zwar recht, aber…</s-de> · <s-de>Das stimmt nur zum Teil.</s-de></td></tr>
<tr><td>disagree</td><td><s-de>Da muss ich widersprechen.</s-de> · <s-de>Das sehe ich anders.</s-de></td></tr>
<tr><td>interrupt, or keep the floor</td><td><s-de>Darf ich kurz unterbrechen?</s-de> · <s-de>Lassen Sie mich bitte ausreden.</s-de></td></tr>
<tr><td>refer back</td><td><s-de>Sie haben vorhin gesagt, dass…</s-de> · <s-de>Um noch einmal auf … zurückzukommen: …</s-de></td></tr>
<tr><td>suggest a compromise</td><td><s-de>Wie wäre es, wenn…?</s-de> · <s-de>Könnten wir uns darauf einigen, dass…?</s-de></td></tr>
</table>
<h2>Soften your disagreement</h2>
<p>A direct <s-de>Das ist falsch.</s-de> sounds rude. Acknowledge first, then contradict: <s-de>Das ist ein interessanter Punkt, aber ich sehe das etwas anders.</s-de> · <s-de>Ich verstehe Ihr Argument, trotzdem…</s-de></p>
<div class="tip">In the Goethe B2 speaking exam (part 2), you discuss a question with your partner for about five minutes. What counts is the <b>interaction</b>: listen, react to what your partner says, ask questions, and try to reach a conclusion together, rather than giving two monologues.</div>
`,
    body_fr: `
<h2>Les formules de la discussion</h2>
<table>
<tr><th>Pour…</th><th>En allemand</th></tr>
<tr><td>donner ton avis</td><td><s-de>Ich bin der Ansicht, dass…</s-de> · <s-de>Meiner Meinung nach…</s-de></td></tr>
<tr><td>approuver</td><td><s-de>Da stimme ich Ihnen zu.</s-de> · <s-de>Das sehe ich genauso.</s-de></td></tr>
<tr><td>approuver en partie</td><td><s-de>Da haben Sie zwar recht, aber…</s-de> · <s-de>Das stimmt nur zum Teil.</s-de></td></tr>
<tr><td>contredire</td><td><s-de>Da muss ich widersprechen.</s-de> · <s-de>Das sehe ich anders.</s-de></td></tr>
<tr><td>interrompre, ou garder la parole</td><td><s-de>Darf ich kurz unterbrechen?</s-de> · <s-de>Lassen Sie mich bitte ausreden.</s-de></td></tr>
<tr><td>revenir sur un point</td><td><s-de>Sie haben vorhin gesagt, dass…</s-de> · <s-de>Um noch einmal auf … zurückzukommen: …</s-de></td></tr>
<tr><td>proposer un compromis</td><td><s-de>Wie wäre es, wenn…?</s-de> · <s-de>Könnten wir uns darauf einigen, dass…?</s-de></td></tr>
</table>
<h2>Adoucir ton désaccord</h2>
<p>Un <s-de>Das ist falsch.</s-de> direct paraît brutal. Reconnais d'abord, puis contredis : <s-de>Das ist ein interessanter Punkt, aber ich sehe das etwas anders.</s-de> · <s-de>Ich verstehe Ihr Argument, trotzdem…</s-de></p>
<div class="tip">À l'oral du Goethe B2 (partie 2), tu discutes d'une question avec ton ou ta partenaire pendant environ cinq minutes. Ce qui compte, c'est l'<b>interaction</b> : écouter, réagir à ce que dit l'autre, poser des questions et chercher à conclure ensemble, plutôt que d'enchaîner deux monologues.</div>
`,
    examples: [
      ["Ich bin der Ansicht, dass Bus und Bahn billiger werden müssen.", "I'm of the opinion that buses and trains must become cheaper.", "Je suis d'avis que les bus et les trains doivent devenir moins chers."],
      ["Da haben Sie zwar recht, aber auf dem Land gibt es kaum Busse.", "You're right there, but in the countryside there are hardly any buses.", "Là, vous avez raison, mais à la campagne il n'y a presque pas de bus."],
      ["Da muss ich widersprechen: Ein Verbot ist nicht die einzige Lösung.", "I have to disagree there: a ban isn't the only solution.", "Là, je dois vous contredire : une interdiction n'est pas la seule solution."],
      ["Darf ich kurz unterbrechen? Ich habe eine Frage dazu.", "May I interrupt for a moment? I have a question about that.", "Puis-je vous interrompre un instant ? J'ai une question à ce sujet."],
      ["Lassen Sie mich bitte ausreden.", "Please let me finish.", "Laissez-moi finir, s'il vous plaît."],
      ["Sie haben vorhin gesagt, dass Autos in der Stadt gebraucht werden.", "You said earlier that cars are needed in town.", "Vous avez dit tout à l'heure qu'on a besoin des voitures en ville."],
      ["Könnten wir uns darauf einigen, dass wir es zuerst ein Jahr testen?", "Could we agree that we'll test it for a year first?", "Pourrions-nous nous mettre d'accord pour le tester d'abord un an ?"]
    ],
    quiz: [
      { q: "A polite way to disagree:", q_fr: "Une façon polie de contredire :", o: ["Das ist ein interessanter Punkt, aber ich sehe das etwas anders.", "Das ist totaler Unsinn.", "Sie haben keine Ahnung."], a: 0, ex: "Acknowledge, then contradict.", ex_fr: "Reconnaître, puis contredire." },
      { q: "“Please let me finish.”", q_fr: "« Laissez-moi finir, s'il vous plaît. »", o: ["Lassen Sie mich bitte ausreden.", "Lassen Sie mich bitte aussprechen lassen.", "Machen Sie mich bitte fertig."], a: 0, ex: "ausreden = to finish speaking.", ex_fr: "ausreden = finir de parler." },
      { q: "“I agree with you.”", q_fr: "« Je suis d'accord avec vous. »", o: ["Da stimme ich Ihnen zu.", "Da stimme ich Sie zu.", "Da bin ich Ihnen einverstanden."], a: 0, ex: "jemandem (dative) zustimmen.", ex_fr: "jemandem (datif) zustimmen." },
      { q: "To suggest a compromise:", q_fr: "Pour proposer un compromis :", o: ["Wie wäre es, wenn wir es zuerst testen?", "Das sehe ich genauso.", "Darf ich kurz unterbrechen?"], a: 0, ex: "Wie wäre es, wenn…?", ex_fr: "Wie wäre es, wenn… ?" },
      { q: "In the Goethe B2 discussion, what counts most?", q_fr: "Dans la discussion du Goethe B2, qu'est-ce qui compte le plus ?", o: ["Reacting to your partner", "Speaking as long as possible alone", "Never disagreeing"], o_fr: ["Réagir à ce que dit l'autre", "Parler seul le plus longtemps possible", "Ne jamais contredire"], a: 0, ex: "The interaction.", ex_fr: "L'interaction." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    79: {
      gap: [["___ des Anstiegs der Temperaturen schmelzen die Gletscher.", "Aufgrund|Wegen", "because of", "en raison de"], ["Der ___ der Haushalte ist gesunken. (verbrauchen)", "Verbrauch"], ["___ Regen fällt das Fest aus.", "Bei", "if it rains", "en cas de pluie"], ["Trotz ___ Kälte gingen alle schwimmen.", "der"]],
      fix: [["Wegen der Preise steigen fahren mehr Menschen Rad.", "Wegen der steigenden Preise fahren mehr Menschen Rad.", "After a preposition, a noun phrase, not a clause.", "Après une préposition, un groupe nominal, pas une subordonnée."], ["Der Bau von neue Windräder dauert lange.", "Der Bau neuer Windräder dauert lange.", "The object becomes a genitive (neuer Windräder) or von + dative (von neuen Windrädern).", "Le complément devient un génitif (neuer Windräder) ou von + datif (von neuen Windrädern)."]],
      task: ["Rewrite these sentences in the nominal style: because the prices are rising…; when it's foggy…; after the law was passed…; although there were protests…", "Réécris ces phrases au style nominal : parce que les prix augmentent… ; quand il y a du brouillard… ; après l'adoption de la loi… ; bien qu'il y ait eu des protestations…", "Aufgrund des Anstiegs der Preise fahren mehr Menschen Rad. Bei Nebel müssen Autofahrer langsam fahren. Nach der Verabschiedung des Gesetzes begannen die Arbeiten. Trotz der Proteste wurde die Straße gebaut."]
    },
    80: {
      gap: [["___ der Hitze bleiben die Schulen geschlossen.", "Angesichts|Aufgrund|Wegen", "in view of", "vu"], ["Innerhalb ___ zwei Wochen muss die Rechnung bezahlt werden.", "von"], ["Infolge des ___ fielen viele Züge aus. (der Sturm)", "Sturms|Sturmes"], ["Die Stadt baut einen Radweg ___ neuer Parkplätze.", "anstelle|statt|anstatt", "instead of", "à la place de"]],
      fix: [["Wegen dem Regen wurde das Konzert abgesagt.", "Wegen des Regens wurde das Konzert abgesagt.", "In writing: wegen + genitive.", "À l'écrit : wegen + génitif."], ["Innerhalb zwei Tagen war alles ausverkauft.", "Innerhalb von zwei Tagen war alles ausverkauft.", "No article: innerhalb von + dative.", "Sans article : innerhalb von + datif."]],
      task: ["Write four sentences for a town newsletter with angesichts, infolge, innerhalb and zugunsten.", "Écris quatre phrases pour la lettre d'information d'une ville avec angesichts, infolge, innerhalb et zugunsten.", "Angesichts der hohen Energiepreise bleibt das Hallenbad im Winter kühler. Infolge des Unwetters ist der Stadtpark bis Freitag gesperrt. Innerhalb eines Jahres sollen zwanzig neue Bäume gepflanzt werden. Zugunsten eines Spielplatzes fallen zwei Parkplätze weg."]
    },
    81: {
      gap: [["Da muss ich Ihnen ___.", "widersprechen", "disagree", "contredire"], ["Da stimme ich Ihnen ___.", "zu"], ["Lassen Sie mich bitte ___.", "ausreden"], ["Könnten wir uns darauf ___, dass wir es zuerst testen?", "einigen"]],
      fix: [["Da stimme ich Sie zu.", "Da stimme ich Ihnen zu.", "zustimmen + dative: Ihnen.", "zustimmen + datif : Ihnen."], ["Ich bin der Meinung, dass das ist zu teuer.", "Ich bin der Meinung, dass das zu teuer ist.", "dass: the verb at the end.", "dass : le verbe à la fin."]],
      task: ["Someone says: “Cars should be banned from city centres.” Write four replies: agree partly, disagree politely, ask a question, suggest a compromise.", "Quelqu'un dit : « Il faudrait interdire les voitures dans les centres-villes. » Écris quatre réponses : approuver en partie, contredire poliment, poser une question, proposer un compromis.", "Da haben Sie zwar recht, die Luft wäre besser. Aber ich sehe das etwas anders: Viele Menschen sind auf das Auto angewiesen. Wie sollen ältere Menschen dann einkaufen? Wie wäre es, wenn wir zuerst nur am Wochenende ein Verbot testen?"]
    }
  });

  W.ROLEPLAYS.push(
  { id: "buergerforum", lesson: 80, level: "B2", icon: "landmark", partner: "Frau Albrecht", role: "the mayor", role_fr: "la maire",
    title: "At the citizens' forum", title_fr: "Au forum citoyen",
    setting: "Your town holds a public meeting about climate measures. You represent your neighbourhood association and speak with the mayor, Frau Albrecht.", setting_fr: "Ta ville organise une réunion publique sur les mesures pour le climat. Tu représentes ton association de quartier et tu parles avec la maire, Frau Albrecht.",
    turns: [
      { p: "Guten Abend. Sie vertreten den Nachbarschaftsverein Weststadt. Was ist Ihr Anliegen?", en: "Good evening. You represent the West Town neighbourhood association. What is your concern?", fr: "Bonsoir. Vous représentez l'association de quartier de Weststadt. Quelle est votre demande ?" },
      { y: ["Angesichts der Hitzewellen der letzten Sommer brauchen wir mehr Bäume in unserem Viertel.", "Angesichts die Hitzewellen der letzten Sommer brauchen wir mehr Bäume in unserem Viertel.", "Angesichts der Hitzewellen der letzten Sommer wir brauchen mehr Bäume in unserem Viertel."], en: "In view of the heatwaves of the last few summers, we need more trees in our neighbourhood.", fr: "Vu les canicules de ces derniers étés, nous avons besoin de plus d'arbres dans notre quartier.", why: "angesichts + genitive; the verb comes second.", why_fr: "angesichts + génitif ; le verbe en deuxième position." },
      { p: "Das verstehe ich. Aber Bäume kosten Geld, und unser Haushalt ist knapp.", en: "I understand. But trees cost money, and our budget is tight.", fr: "Je comprends. Mais les arbres coûtent de l'argent, et notre budget est serré." },
      { y: ["Wir schlagen vor, auf zwei Parkplätze zugunsten neuer Bäume zu verzichten.", "Wir schlagen vor, auf zwei Parkplätze zugunsten neuen Bäumen zu verzichten.", "Wir schlagen vor, zwei Parkplätze zugunsten neuer Bäume zu verzichten."], en: "We suggest giving up two parking spaces in favour of new trees.", fr: "Nous proposons de renoncer à deux places de parking au profit de nouveaux arbres.", why: "verzichten auf + accusative; zugunsten + genitive.", why_fr: "verzichten auf + accusatif ; zugunsten + génitif." },
      { p: "Und wer kümmert sich um die Bäume?", en: "And who will look after the trees?", fr: "Et qui s'occupera des arbres ?" },
      { y: ["Innerhalb des Vereins haben sich schon zwölf Freiwillige gemeldet, die im Sommer gießen.", "Innerhalb dem Verein haben sich schon zwölf Freiwillige gemeldet, die im Sommer gießen.", "Innerhalb des Vereins haben sich schon zwölf Freiwillige gemeldet, die gießen im Sommer."], en: "Within the association, twelve volunteers have already come forward to do the watering in summer.", fr: "Au sein de l'association, douze bénévoles se sont déjà proposés pour arroser l'été.", why: "innerhalb + genitive; relative clause: verb at the end.", why_fr: "innerhalb + génitif ; relative : verbe à la fin." },
      { p: "Das ist ein gutes Angebot. Gibt es noch etwas?", en: "That's a good offer. Is there anything else?", fr: "C'est une bonne proposition. Y a-t-il autre chose ?" },
      { y: ["Ja. Bezüglich der Finanzierung könnten wir auch Spenden sammeln.", "Ja. Bezüglich die Finanzierung könnten wir auch Spenden sammeln.", "Ja. Bezüglich der Finanzierung wir könnten auch Spenden sammeln."], en: "Yes. As regards the funding, we could also collect donations.", fr: "Oui. Concernant le financement, nous pourrions aussi collecter des dons.", why: "bezüglich + genitive; the verb comes second.", why_fr: "bezüglich + génitif ; le verbe en deuxième position." },
      { p: "Gut. Ich nehme Ihren Vorschlag mit in den Stadtrat.", en: "Good. I'll take your proposal to the town council.", fr: "Bien. Je soumettrai votre proposition au conseil municipal." },
      { y: ["Vielen Dank. Wir freuen uns auf Ihre Rückmeldung.", "Vielen Dank. Wir freuen uns über Ihre Rückmeldung, die kommt.", "Vielen Dank. Wir freuen uns auf Ihrer Rückmeldung."], en: "Thank you very much. We look forward to hearing from you.", fr: "Merci beaucoup. Nous attendons votre retour avec intérêt.", why: "sich freuen auf + accusative (something to come).", why_fr: "sich freuen auf + accusatif (quelque chose à venir)." }
    ] },
  { id: "flugdebatte", lesson: 81, level: "B2", icon: "messages-square", partner: "Malte", role: "a friend", role_fr: "un ami",
    title: "Should short flights be banned?", title_fr: "Faut-il interdire les vols courts ?",
    setting: "Your friend Malte has read that some countries want to ban short domestic flights. He thinks it's nonsense. You discuss it.", setting_fr: "Ton ami Malte a lu que certains pays veulent interdire les vols intérieurs courts. Il trouve ça absurde. Vous en discutez.",
    turns: [
      { p: "Inlandsflüge verbieten? So ein Unsinn! Ich fliege oft von Hamburg nach München, das geht viel schneller.", en: "Ban domestic flights? What nonsense! I often fly from Hamburg to Munich, it's much quicker.", fr: "Interdire les vols intérieurs ? Quelle absurdité ! Je vais souvent de Hambourg à Munich en avion, c'est bien plus rapide." },
      { y: ["Da hast du zwar recht, aber mit dem Zug bist du direkt in der Innenstadt.", "Da hast du zwar recht, aber mit dem Zug du bist direkt in der Innenstadt.", "Da hast du zwar recht, aber mit dem Zug bist du direkt in die Innenstadt."], en: "You're right there, but by train you arrive right in the city centre.", fr: "Là, tu as raison, mais en train tu arrives directement au centre-ville.", why: "Partly agree, then aber; the verb comes second; in der Innenstadt (where: dative).", why_fr: "Approuver en partie, puis aber ; verbe en deuxième position ; in der Innenstadt (où : datif)." },
      { p: "Trotzdem. Ein Verbot ist doch keine Lösung.", en: "Even so. A ban is no solution.", fr: "Quand même. Une interdiction, ce n'est pas une solution." },
      { y: ["Das sehe ich etwas anders. Kurzstreckenflüge verursachen pro Person besonders viel CO2.", "Das sehe ich etwas anderes. Kurzstreckenflüge verursachen pro Person besonders viel CO2.", "Das sehe ich etwas anders. Kurzstreckenflüge verursachen pro Person besonders vieles CO2."], en: "I see it a bit differently. Short-haul flights cause a particularly large amount of CO2 per person.", fr: "Je vois ça un peu autrement. Les vols courts produisent particulièrement beaucoup de CO2 par personne.", why: "Das sehe ich anders (adverb); viel CO2.", why_fr: "Das sehe ich anders (adverbe) ; viel CO2." },
      { p: "Aber die Bahn ist oft unpünktlich und teuer!", en: "But the trains are often late and expensive!", fr: "Mais le train est souvent en retard et cher !" },
      { y: ["Das stimmt nur zum Teil. Wenn man früh bucht, ist der Zug oft billiger als das Flugzeug.", "Das stimmt nur zum Teil. Wenn man früh bucht, der Zug ist oft billiger als das Flugzeug.", "Das stimmt nur zu Teil. Wenn man früh bucht, ist der Zug oft billiger als das Flugzeug."], en: "That's only partly true. If you book early, the train is often cheaper than the plane.", fr: "C'est vrai en partie seulement. Si on réserve tôt, le train est souvent moins cher que l'avion.", why: "zum Teil; after a wenn-clause, the main verb comes first.", why_fr: "zum Teil ; après une subordonnée en wenn, le verbe principal vient en premier." },
      { p: "Hm. Und was ist mit Leuten, die beruflich schnell irgendwo sein müssen?", en: "Hm. And what about people who have to get somewhere fast for work?", fr: "Hum. Et les gens qui doivent arriver vite quelque part pour le travail ?" },
      { y: ["Wie wäre es, wenn man nur die Strecken verbietet, für die es eine schnelle Zugverbindung gibt?", "Wie wäre es, wenn man nur die Strecken verbietet, für die gibt es eine schnelle Zugverbindung?", "Wie wäre es, wenn man nur die Strecken verbieten würde, für denen es eine schnelle Zugverbindung gibt?"], en: "How about banning only the routes for which there's a fast train connection?", fr: "Et si on n'interdisait que les trajets pour lesquels il existe une liaison rapide en train ?", why: "Wie wäre es, wenn…? to suggest a compromise; relative clause with für die: verb at the end.", why_fr: "Wie wäre es, wenn… ? pour proposer un compromis ; relative avec für die : verbe à la fin." },
      { p: "Okay, darauf könnte ich mich einigen.", en: "OK, I could agree to that.", fr: "D'accord, là-dessus je pourrais être d'accord." },
      { y: ["Siehst du? Manchmal ist ein Kompromiss besser als ein komplettes Verbot.", "Siehst du? Manchmal ist ein Kompromiss besser wie ein komplettes Verbot.", "Siehst du? Manchmal ein Kompromiss ist besser als ein komplettes Verbot."], en: "You see? Sometimes a compromise is better than a total ban.", fr: "Tu vois ? Parfois, un compromis vaut mieux qu'une interdiction totale.", why: "besser als; the verb comes second after manchmal.", why_fr: "besser als ; le verbe en deuxième position après manchmal." }
    ] }
  );

  W.READINGS.push({
    id: "energiewende", level: "B2", icon: "book-open", title: "Die Energiewende: ein Wort macht Karriere", genre: "Explainer",
    intro: "Germany has decided to give up nuclear power and coal. Where does the word “Energiewende” come from, and what has actually happened?",
    intro_fr: "L'Allemagne a décidé d'abandonner le nucléaire et le charbon. D'où vient le mot « Energiewende », et que s'est-il réellement passé ?",
    paragraphs: [
      { de: "Das Wort „Energiewende“ ist älter, als viele denken. Schon 1980 erschien eine Studie des Öko-Instituts mit dem Titel „Energie-Wende“. Die Autoren beschrieben darin, wie ein Land ohne Erdöl und Uran auskommen könnte. Damals galt das als Utopie, heute steht der Begriff für eines der größten politischen Projekte Deutschlands.", en: "The word “Energiewende” is older than many people think. As early as 1980, the Öko-Institut published a study entitled “Energie-Wende”. In it, the authors described how a country could manage without oil and uranium. At the time this was considered a utopia; today the term stands for one of Germany's biggest political projects.", fr: "Le mot « Energiewende » est plus ancien qu'on ne le croit. Dès 1980, l'Öko-Institut publiait une étude intitulée « Energie-Wende ». Ses auteurs y décrivaient comment un pays pourrait se passer de pétrole et d'uranium. À l'époque, cela passait pour une utopie ; aujourd'hui, le terme désigne l'un des plus grands projets politiques de l'Allemagne." },
      { de: "Ein wichtiger Schritt war das Erneuerbare-Energien-Gesetz aus dem Jahr 2000. Es garantierte den Betreibern von Wind- und Solaranlagen über viele Jahre einen festen Preis für den Strom, den sie ins Netz einspeisten. Infolge dieser Förderung entstanden in kurzer Zeit zahlreiche neue Anlagen, auch auf den Dächern privater Häuser.", en: "An important step was the Renewable Energy Sources Act of 2000. It guaranteed operators of wind and solar installations a fixed price for many years for the electricity they fed into the grid. As a result of this support, many new installations sprang up in a short time, including on the roofs of private homes.", fr: "Une étape importante fut la loi sur les énergies renouvelables de l'an 2000. Elle garantissait pendant de longues années aux exploitants d'installations éoliennes et solaires un prix fixe pour l'électricité injectée dans le réseau. Grâce à ce soutien, de nombreuses installations virent le jour en peu de temps, y compris sur les toits de maisons particulières." },
      { de: "Nach der Reaktorkatastrophe von Fukushima im März 2011 beschloss der Bundestag, bis Ende 2022 aus der Kernkraft auszusteigen. Angesichts der Energiekrise liefen die letzten drei Kernkraftwerke etwas länger als geplant: Am 15. April 2023 wurden Isar 2, Emsland und Neckarwestheim 2 endgültig abgeschaltet.", en: "After the Fukushima nuclear disaster in March 2011, the Bundestag decided to phase out nuclear power by the end of 2022. In view of the energy crisis, the last three nuclear power stations ran a little longer than planned: on 15 April 2023, Isar 2, Emsland and Neckarwestheim 2 were shut down for good.", fr: "Après la catastrophe nucléaire de Fukushima, en mars 2011, le Bundestag décida de sortir du nucléaire d'ici fin 2022. Face à la crise énergétique, les trois dernières centrales fonctionnèrent un peu plus longtemps que prévu : le 15 avril 2023, Isar 2, Emsland et Neckarwestheim 2 furent définitivement arrêtées." },
      { de: "Auch die Kohle soll verschwinden: Nach dem Kohleausstiegsgesetz von 2020 soll spätestens 2038 das letzte Kohlekraftwerk vom Netz gehen. Umstritten bleibt vieles, etwa der Bau neuer Stromleitungen von Norden nach Süden, die Kosten für die Verbraucher und die Frage, ob der Umbau schnell genug vorankommt.", en: "Coal is to disappear too: under the Coal Phase-out Act of 2020, the last coal-fired power station is to go off the grid by 2038 at the latest. Much remains controversial, such as building new power lines from north to south, the costs for consumers and the question of whether the transformation is moving fast enough.", fr: "Le charbon doit lui aussi disparaître : selon la loi de sortie du charbon de 2020, la dernière centrale à charbon doit être déconnectée au plus tard en 2038. Beaucoup de points restent controversés, comme la construction de nouvelles lignes électriques du nord au sud, le coût pour les consommateurs et la question de savoir si la transformation avance assez vite." }
    ],
    glossary: { "erschien": ["(erscheinen) was published", "(erscheinen) parut"], "Studie": ["study", "étude"], "Titel": ["title", "titre"], "Erdöl": ["oil, petroleum", "pétrole"], "Uran": ["uranium", "uranium"], "auskommen": ["to manage (without)", "se passer (de)"], "galt": ["(gelten) was considered", "(gelten) passait pour"], "Utopie": ["utopia", "utopie"], "Begriff": ["term, concept", "terme, notion"], "Erneuerbare-Energien-Gesetz": ["Renewable Energy Sources Act", "loi sur les énergies renouvelables"], "garantierte": ["guaranteed", "garantissait"], "Betreibern": ["operators", "exploitants"], "Anlagen": ["installations, plants", "installations"], "Netz": ["grid, network", "réseau"], "einspeisten": ["fed in", "injectaient"], "Förderung": ["support, subsidies", "soutien, aides"], "entstanden": ["came into being, sprang up", "virent le jour"], "Reaktorkatastrophe": ["nuclear disaster", "catastrophe nucléaire"], "beschloss": ["(beschließen) decided", "(beschließen) décida"], "auszusteigen": ["to phase out, to get out", "sortir, abandonner"], "Energiekrise": ["energy crisis", "crise énergétique"], "Kernkraftwerke": ["nuclear power stations", "centrales nucléaires"], "endgültig": ["for good, definitively", "définitivement"], "abgeschaltet": ["shut down", "arrêté"], "Kohleausstiegsgesetz": ["Coal Phase-out Act", "loi de sortie du charbon"], "spätestens": ["at the latest", "au plus tard"], "Kohlekraftwerk": ["coal-fired power station", "centrale à charbon"], "umstritten": ["controversial", "controversé"], "Stromleitungen": ["power lines", "lignes électriques"], "Verbraucher": ["consumers", "consommateurs"], "Umbau": ["transformation, conversion", "transformation"], "vorankommt": ["progresses", "avance"] },
    questions: [
      { q: "Wann erschien die Studie „Energie-Wende“?", o: ["1980", "2000", "2011"], a: 0 },
      { q: "Was garantierte das Gesetz aus dem Jahr 2000?", o: ["Einen festen Preis für Strom aus Wind und Sonne", "Kostenlosen Strom für alle", "Den Bau neuer Kernkraftwerke"], a: 0 },
      { q: "Was geschah nach Fukushima?", o: ["Der Bundestag beschloss den Ausstieg aus der Kernkraft.", "Deutschland baute neue Kernkraftwerke.", "Die Kohle wurde sofort verboten."], a: 0 },
      { q: "Wann wurden die letzten drei Kernkraftwerke abgeschaltet?", o: ["Am 15. April 2023", "Ende 2022", "Im März 2011"], a: 0 },
      { q: "Was ist laut Text noch umstritten?", o: ["Der Bau neuer Stromleitungen und die Kosten", "Ob es Wind in Deutschland gibt", "Der Name des Gesetzes"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-b2-3", unit: "b2-3", level: "B2", icon: "radio",
    title: "Autofreie Innenstadt?", title_fr: "Un centre-ville sans voitures ?",
    context: "A local radio debate. The presenter talks to Herr Brückner, who owns a shop in the old town, and Frau Seifert, from a citizens' initiative.", context_fr: "Un débat sur une radio locale. La présentatrice parle avec Herr Brückner, commerçant dans la vieille ville, et Frau Seifert, d'une initiative citoyenne.",
    words: [["die Altstadt", "the old town", "la vieille ville"], ["der Lieferverkehr", "delivery traffic", "les livraisons (la circulation)"], ["die Aufenthaltsqualität", "how pleasant a place is to spend time in", "l'agrément d'un lieu"], ["die Umsatzeinbuße, -n", "the loss of sales", "la baisse du chiffre d'affaires"], ["die Testphase", "the trial period", "la phase d'essai"]],
    lines: [["Moderatorin", "Guten Abend. Die Stadt plant, die Altstadt ab dem nächsten Jahr für Autos zu sperren. Frau Seifert, Sie sind dafür. Warum?", "de-DE"], ["Frau Seifert", "Angesichts des Lärms und der Abgase ist die Altstadt heute kein angenehmer Ort. Ohne Autos würde die Aufenthaltsqualität deutlich steigen.", "de-DE"], ["Herr Brückner", "Darf ich kurz unterbrechen? Das klingt schön, aber viele meiner Kunden kommen mit dem Auto. Ich befürchte Umsatzeinbußen.", "de-DE"], ["Frau Seifert", "Das verstehe ich. Aber in anderen Städten sind die Umsätze infolge solcher Maßnahmen sogar gestiegen.", "de-DE"], ["Herr Brückner", "Das stimmt nur zum Teil. Und was ist mit dem Lieferverkehr?", "de-DE"], ["Frau Seifert", "Der wäre natürlich weiterhin erlaubt, und zwar innerhalb fester Zeiten am Morgen.", "de-DE"], ["Moderatorin", "Herr Brückner, könnten Sie sich einen Kompromiss vorstellen?", "de-DE"], ["Herr Brückner", "Vielleicht. Wie wäre es mit einer Testphase von sechs Monaten? Danach könnte man über die Ergebnisse sprechen.", "de-DE"]],
    gist: ["Worüber wird diskutiert?", ["Über eine Altstadt ohne Autos", "Über einen neuen Supermarkt", "Über die Preise im Bus"]],
    detail: [["Warum ist Frau Seifert für das Verbot?", ["Wegen des Lärms und der Abgase", "Weil sie kein Auto hat", "Weil es zu wenige Parkplätze gibt"]], ["Was befürchtet Herr Brückner?", ["Umsatzeinbußen", "Mehr Lärm", "Höhere Mieten"]], ["Wann wäre der Lieferverkehr erlaubt?", ["Zu festen Zeiten am Morgen", "Den ganzen Tag", "Nur am Wochenende"]], ["Welchen Kompromiss schlägt Herr Brückner vor?", ["Eine Testphase von sechs Monaten", "Ein Verbot nur im Sommer", "Mehr Parkhäuser"]]],
    decode: ["Angesichts des Lärms und der Abgase ist die Altstadt heute kein angenehmer Ort.", "Das stimmt nur zum Teil."],
    tip: "In a debate, the most important words are often the small signals at the start of a turn: Darf ich kurz unterbrechen?, Das verstehe ich. Aber…, Das stimmt nur zum Teil. They tell you at once whether the speaker agrees or not.", tip_fr: "Dans un débat, les mots les plus importants sont souvent les petits signaux en début de prise de parole : Darf ich kurz unterbrechen?, Das verstehe ich. Aber…, Das stimmt nur zum Teil. Ils t'indiquent tout de suite si la personne est d'accord ou non."
  }]);

  W.PROMPTS.push({ id: "de-b2-3", level: "B2", q: "Sollte man Inlandsflüge verbieten, wenn es eine gute Zugverbindung gibt? Nimm Stellung, nenne Argumente dafür und dagegen und schlag einen Kompromiss vor.", en: "Should domestic flights be banned where there's a good train connection? Take a position, give arguments for and against, and suggest a compromise.", fr: "Faut-il interdire les vols intérieurs quand il existe une bonne liaison en train ? Prends position, donne des arguments pour et contre, et propose un compromis.", time: 180,
    phrases: ["Ich bin der Ansicht, dass…", "Dafür spricht, dass…", "Dagegen spricht, dass…", "Da haben Kritiker zwar recht, aber…", "Wie wäre es, wenn…?"],
    model: "Ich bin der Ansicht, dass man kurze Inlandsflüge einschränken sollte. Dafür spricht vor allem der Klimaschutz: Ein Flug von Hamburg nach München verursacht pro Person deutlich mehr CO2 als dieselbe Strecke mit dem Zug. Außerdem ist man mit der Bahn direkt in der Innenstadt und kann unterwegs arbeiten. Dagegen spricht, dass die Bahn nicht immer pünktlich ist und manche Verbindungen sehr lange dauern. Da haben Kritiker zwar recht, aber das ist ein Argument für bessere Züge, nicht für mehr Flüge. Wie wäre es, wenn man nur die Strecken verbietet, für die es eine Zugverbindung unter vier Stunden gibt? Das wäre ein fairer Kompromiss." });

  W.WRITING_GUIDE["b2-3"] = { genre: "An opinion in an online forum (Goethe B2, writing part 1)", genre_fr: "Un avis sur un forum en ligne (Goethe B2, écrit partie 1)",
    plan: [["Refer to the proposal you are reacting to.", "Fais référence à la proposition à laquelle tu réagis."], ["Your position.", "Ta position."], ["Arguments for, with an example.", "Des arguments pour, avec un exemple."], ["Arguments against, and your answer to them.", "Des arguments contre, et ta réponse."], ["A compromise or a conclusion.", "Un compromis ou une conclusion."]],
    marks: [["Der Vorschlag, die Altstadt für Autos zu sperren", "referring to the proposal", "faire référence à la proposition"], ["Grundsätzlich finde ich die Idee gut", "your position", "ta position"], ["Angesichts des Lärms und der Abgase", "a genitive preposition", "une préposition suivie du génitif"], ["Zum Beispiel", "an example", "un exemple"], ["Andererseits darf man nicht vergessen", "the other side", "l'autre point de vue"], ["Mein Vorschlag wäre deshalb", "a compromise", "un compromis"]] };

  /* Atelier de langue : champs allemands d'abord, puis anglais et français (voir localize.js). */
  W.LEXIS = W.LEXIS || {};
  W.LEXIS["b2-3"] = {
    colloc: [
      ["Maßnahmen ergreifen", "to take measures", "prendre des mesures", "Die Regierung muss endlich wirksame Maßnahmen ergreifen.", "ergreifen", ["machen", "stellen"]],
      ["Energie sparen", "to save energy", "économiser de l'énergie", "Mit LED-Lampen kann man viel Energie sparen.", "sparen", ["retten", "halten"]],
      ["einen Beitrag leisten", "to make a contribution", "apporter sa contribution", "Jeder kann einen Beitrag zum Klimaschutz leisten.", "leisten", ["machen", "geben"]],
      ["Ressourcen schonen", "to conserve resources", "préserver les ressources", "Wer repariert, statt neu zu kaufen, schont Ressourcen.", "schont", ["hält", "macht"]],
      ["eine Debatte auslösen", "to spark a debate", "déclencher un débat", "Der Vorschlag hat eine heftige Debatte ausgelöst.", "ausgelöst", ["gemacht", "gestellt"]],
      ["ein Zeichen setzen", "to send a signal", "envoyer un signal", "Mit dem Verbot will die Stadt ein Zeichen setzen.", "setzen", ["machen", "legen"]],
      ["Verantwortung tragen", "to bear responsibility", "porter la responsabilité", "Die reichen Länder tragen eine besondere Verantwortung.", "tragen", ["führen", "bringen"]],
      ["die Umwelt belasten", "to harm the environment", "nuire à l'environnement", "Kurzstreckenflüge belasten die Umwelt besonders stark.", "belasten", ["beschweren", "laden"]],
      ["einen Standpunkt vertreten", "to hold a position", "défendre un point de vue", "Sie vertritt einen klaren Standpunkt.", "vertritt", ["hält", "macht"]],
      ["Abfall vermeiden", "to avoid waste", "éviter les déchets", "Am besten ist es, Abfall von Anfang an zu vermeiden.", "vermeiden", ["verlassen", "vertreiben"]]
    ],
    wf: [
      ["Der ___ an Energie ist im Winter höher. (VERBRAUCHEN)", "Verbrauch"],
      ["Die ___ spielt beim Einkaufen eine immer größere Rolle. (NACHHALTIG)", "Nachhaltigkeit"],
      ["Der ___ der Temperaturen ist deutlich messbar. (ANSTEIGEN)", "Anstieg"],
      ["Diese Verpackung ist leider nicht ___. (RECYCELN)", "recycelbar"],
      ["Die ___ der Luft ist in großen Städten ein Problem. (SCHMUTZIG)", "Verschmutzung"],
      ["Wind und Sonne sind ___ Energiequellen. (ERNEUERN)", "erneuerbare"],
      ["Die ___ von Lebensmitteln muss aufhören. (VERSCHWENDEN)", "Verschwendung"],
      ["Der ___ auf das Auto fällt vielen schwer. (VERZICHTEN)", "Verzicht"]
    ],
    kwt: [
      ["Weil die Preise gestiegen sind, fahren mehr Menschen Rad.", "AUFGRUND", "___ fahren mehr Menschen Rad.", "Aufgrund der gestiegenen Preise"],
      ["Obwohl es regnete, demonstrierten Tausende.", "TROTZ", "___ demonstrierten Tausende.", "Trotz des Regens|Trotz des Regen|Trotz dem Regen"],
      ["Wenn es Hochwasser gibt, wird die Straße gesperrt.", "BEI", "___ wird die Straße gesperrt.", "Bei Hochwasser"],
      ["Nachdem das Gesetz beschlossen worden war, begannen die Arbeiten.", "NACH", "___ begannen die Arbeiten.", "Nach dem Beschluss des Gesetzes|Nach Beschluss des Gesetzes"],
      ["Während die Konferenz stattfand, gab es Proteste.", "WÄHREND", "___ gab es Proteste.", "Während der Konferenz"],
      ["Man verbraucht zu viel Wasser.", "VERBRAUCH", "Der ___ ist zu hoch.", "Verbrauch an Wasser|Verbrauch von Wasser"]
    ],
    idioms: [
      ["auf keinen grünen Zweig kommen", "keinen Erfolg haben", "to get nowhere", "ne pas s'en sortir, ne pas réussir", "Mit dieser Strategie kommen wir auf keinen grünen Zweig.", "auf keinen grünen Zweig"],
      ["jemandem reinen Wein einschenken", "jemandem die unangenehme Wahrheit sagen", "to tell someone the plain truth", "dire la vérité sans détour à quelqu'un", "Die Politik muss den Bürgern reinen Wein einschenken.", "reinen Wein einschenken"],
      ["das Kind mit dem Bade ausschütten", "mit dem Schlechten auch das Gute beseitigen", "to throw the baby out with the bathwater", "jeter le bébé avec l'eau du bain", "Ein Verbot aller Autos hieße, das Kind mit dem Bade auszuschütten.", "das Kind mit dem Bade auszuschütten"],
      ["ein Tropfen auf den heißen Stein", "viel zu wenig, um etwas zu ändern", "a drop in the ocean", "une goutte d'eau dans l'océan", "Diese Maßnahme ist nur ein Tropfen auf den heißen Stein.", "ein Tropfen auf den heißen Stein"],
      ["den Gürtel enger schnallen", "sparen müssen", "to tighten one's belt", "se serrer la ceinture", "In der Krise mussten viele den Gürtel enger schnallen.", "den Gürtel enger schnallen"],
      ["etwas unter einen Hut bringen", "verschiedene Dinge vereinbaren", "to reconcile different things", "concilier des choses différentes", "Klimaschutz und Wachstum unter einen Hut zu bringen, ist schwierig.", "unter einen Hut zu bringen"],
      ["mit offenen Karten spielen", "ehrlich sein und nichts verheimlichen", "to put one's cards on the table", "jouer cartes sur table", "Lassen Sie uns mit offenen Karten spielen.", "mit offenen Karten spielen"],
      ["den Ast absägen, auf dem man sitzt", "sich selbst schaden", "to saw off the branch one is sitting on", "scier la branche sur laquelle on est assis", "Wer die Natur zerstört, sägt den Ast ab, auf dem er sitzt.", "sägt den Ast ab"]
    ]
  };

  W.COURSE.push({ id: "b2-3", level: "B2", icon: "leaf", title: "Climate and the environment", title_fr: "Climat et environnement",
    intro: "Heatwaves, floods, the energy transition: the environment is one of the big topics of the Goethe B2 exam. In this unit, you'll learn the nominal style that fills German newspapers (aufgrund des Anstiegs der Preise), the prepositions of formal German (angesichts, infolge, zugunsten), and how to take part in a discussion: react, disagree politely and find a compromise. You'll also read how the “Energiewende” came about.",
    intro_fr: "Canicules, crues, transition énergétique : l'environnement est l'un des grands thèmes du Goethe B2. Dans cette unité, tu vas apprendre le style nominal des journaux allemands (aufgrund des Anstiegs der Preise), les prépositions de l'allemand soutenu (angesichts, infolge, zugunsten) et la façon de participer à une discussion : réagir, contredire poliment et trouver un compromis. Tu liras aussi l'histoire de l'« Energiewende ».",
    can: ["Turn clauses into nominal phrases and back again", "Use the genitive prepositions of formal German", "Give your view, disagree politely and suggest a compromise in a discussion", "Understand a text about energy policy", "Write a forum opinion of about 150 words (Goethe B2)"],
    can_fr: ["Transformer des subordonnées en groupes nominaux, et inversement", "Employer les prépositions du génitif de l'allemand soutenu", "Donner ton avis, contredire poliment et proposer un compromis dans une discussion", "Comprendre un texte sur la politique énergétique", "Écrire un avis d'environ 150 mots sur un forum (Goethe B2)"],
    lessons: [79, 80, 81], vocab: ["klimaDE", "umwelthandelnDE"], reading: "energiewende", prompt: "de-b2-3",
    writing: { task: "In your town's online forum, someone writes: “The old town should be closed to cars.” Give your opinion (150-180 words): refer to the proposal, take a position, give arguments for and against with an example, and suggest a compromise.", task_fr: "Sur le forum en ligne de ta ville, quelqu'un écrit : « Il faudrait fermer la vieille ville aux voitures. » Donne ton avis (150 à 180 mots) : fais référence à la proposition, prends position, donne des arguments pour et contre avec un exemple, et propose un compromis.", words: "150-180",
      tips: ["Der Vorschlag, … zu …, hat mich zum Nachdenken gebracht.", "Grundsätzlich finde ich die Idee gut, aber…", "Angesichts / Aufgrund …", "Andererseits darf man nicht vergessen, dass…", "Mein Vorschlag wäre deshalb, …"],
      checklist: ["I referred to the proposal", "I took a clear position", "I gave arguments for and against, with an example", "I used at least one nominal phrase or genitive preposition", "I wrote between 150 and 180 words"],
      checklist_fr: ["J'ai fait référence à la proposition", "J'ai pris une position claire", "J'ai donné des arguments pour et contre, avec un exemple", "J'ai employé au moins un groupe nominal ou une préposition suivie du génitif", "J'ai écrit entre 150 et 180 mots"],
      model: "Der Vorschlag, die Altstadt für Autos zu sperren, wird bei uns gerade heftig diskutiert. Grundsätzlich finde ich die Idee gut, aber man sollte sie nicht zu schnell umsetzen.\n\nAngesichts des Lärms und der Abgase ist die Altstadt heute kein angenehmer Ort. Ohne Autos hätten Fußgänger und Radfahrer mehr Platz, und die Cafés könnten ihre Tische auf die Straße stellen. Zum Beispiel ist in vielen Städten, die solche Zonen eingeführt haben, das Zentrum wieder lebendiger geworden.\n\nAndererseits darf man nicht vergessen, dass nicht alle Menschen problemlos zu Fuß gehen können. Ältere Menschen und Familien mit kleinen Kindern sind oft auf das Auto angewiesen. Auch die Geschäfte brauchen Lieferungen.\n\nMein Vorschlag wäre deshalb, das Verbot zuerst ein Jahr lang zu testen. Lieferverkehr sollte morgens erlaubt bleiben, und am Rand der Altstadt bräuchte man Parkplätze und einen kostenlosen Bus. So hätten alle Seiten die Chance, sich an die neue Situation zu gewöhnen. Nach der Testphase könnten die Bürgerinnen und Bürger gemeinsam entscheiden." } });
})();
