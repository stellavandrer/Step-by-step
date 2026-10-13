/* Cours d'allemand, unité B2-5 « Health and wellbeing / Santé et bien-être » : les verbes de modalité pour faire
   des suppositions (er muss krank sein, sie dürfte…, er kann nicht…), le futur I et le futur II (er wird den Zug
   verpasst haben), donner des conseils et mettre en garde. Personnages fictifs, prénoms allemands. Les conseils
   de l'écoute (rythme régulier, pas d'écran ni de café le soir, consulter si cela dure) sont des recommandations
   générales courantes, sans chiffres.
   Faits vérifiables seulement : Robert Koch, né en 1843 à Clausthal, études de médecine à Göttingen, médecin à
   Wollstein (province de Posen), recherches sur la maladie du charbon (Milzbrand) ; le 24 mars 1882, il présente
   à Berlin la découverte de l'agent de la tuberculose ; le 24 mars est la Journée mondiale de la tuberculose ;
   prix Nobel de physiologie ou médecine en 1905 ; institut des maladies infectieuses fondé à Berlin en 1891, dirigé
   par Koch, aujourd'hui Robert Koch-Institut ; rivalité avec Louis Pasteur ; mort en 1910 à Baden-Baden. */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "medizinDE", icon: "stethoscope", title: "Medicine", title_fr: "La médecine", level: "B2", words: [
    ["die Diagnose, -n", "the diagnosis", "le diagnostic", "Die Diagnose kam erst nach drei Wochen."],
    ["die Behandlung, -en", "the treatment", "le traitement", "Die Behandlung schlägt gut an."],
    ["behandeln", "to treat", "traiter, soigner", "Welcher Arzt behandelt Sie?"],
    ["die Therapie, -n", "the therapy, the treatment", "la thérapie", "Nach der Operation beginnt eine lange Therapie."],
    ["die Nebenwirkung, -en", "the side effect", "l'effet secondaire", "Lesen Sie die Packungsbeilage wegen der Nebenwirkungen."],
    ["der Erreger, -", "the pathogen", "l'agent pathogène", "Der Erreger wird über die Luft übertragen."],
    ["sich anstecken (bei + Dat.)", "to catch (an illness from someone)", "attraper (une maladie de quelqu'un)", "Ich habe mich bei meinem Sohn angesteckt."],
    ["ansteckend", "contagious", "contagieux", "Die Grippe ist sehr ansteckend."],
    ["impfen", "to vaccinate", "vacciner", "Kinder werden gegen Masern geimpft."],
    ["die Impfung, -en", "the vaccination", "la vaccination", "Die Impfung schützt vor einer schweren Erkrankung."],
    ["die Vorsorge", "prevention, check-ups", "la prévention, le dépistage", "Regelmäßige Vorsorge kann Leben retten."],
    ["chronisch", "chronic", "chronique", "Sie leidet an einer chronischen Krankheit."],
    ["die Genesung", "recovery", "la guérison, le rétablissement", "Wir wünschen Ihnen eine schnelle Genesung!"],
    ["sich erholen (von + Dat.)", "to recover (from)", "se remettre (de)", "Er hat sich gut von der Operation erholt."],
    ["verschreiben", "to prescribe", "prescrire", "Die Ärztin hat mir ein Medikament verschrieben."],
    ["heilen", "to heal, to cure", "guérir", "Die Wunde ist schnell geheilt."]
  ] },
  { id: "psycheDE", icon: "brain", title: "Mental health", title_fr: "La santé mentale", level: "B2", words: [
    ["psychisch", "mental, psychological", "psychique, mental", "Psychische Erkrankungen sind keine Schwäche."],
    ["erschöpft", "exhausted", "épuisé", "Nach der Nachtschicht war sie völlig erschöpft."],
    ["die Erschöpfung", "exhaustion", "l'épuisement", "Viele Pflegekräfte klagen über Erschöpfung."],
    ["ausgeglichen", "balanced, even-tempered", "équilibré, serein", "Seit er Yoga macht, ist er viel ausgeglichener."],
    ["gelassen", "calm, relaxed", "serein, détendu", "Sie reagierte erstaunlich gelassen auf die Nachricht."],
    ["die Achtsamkeit", "mindfulness", "la pleine conscience", "Achtsamkeit hilft, im Moment zu leben."],
    ["abschalten", "to switch off, to unwind", "décrocher, déconnecter", "Am Wochenende kann ich endlich abschalten."],
    ["die Einsamkeit", "loneliness", "la solitude", "Einsamkeit kann krank machen."],
    ["die Sucht, ¨-e", "the addiction", "l'addiction, la dépendance", "Spielsucht ist eine ernste Krankheit."],
    ["süchtig (nach + Dat.)", "addicted (to)", "dépendant (de), accro (à)", "Manche Jugendliche sind fast süchtig nach ihrem Handy."],
    ["der Schlafmangel", "lack of sleep", "le manque de sommeil", "Schlafmangel macht unkonzentriert."],
    ["die Auszeit, -en", "the break, the time out", "la pause, la coupure", "Nach dem Projekt nehme ich mir eine Auszeit."],
    ["grübeln (über + Akk.)", "to brood (over)", "ruminer, se creuser la tête", "Hör auf, nachts über deine Probleme zu grübeln."],
    ["das Selbstwertgefühl", "self-esteem", "l'estime de soi", "Lob stärkt das Selbstwertgefühl von Kindern."],
    ["der Leistungsdruck", "pressure to perform", "la pression de la performance", "Viele Schüler leiden unter Leistungsdruck."],
    ["überfordert", "overwhelmed, out of one's depth", "dépassé, débordé", "Mit drei Projekten gleichzeitig war ich überfordert."]
  ] });

  W.LESSONS.push(
  {
    id: 85, level: "B2", icon: "circle-help",
    title: "Er muss krank sein: modal verbs for assumptions", title_fr: "Er muss krank sein : les verbes de modalité pour faire des suppositions",
    subtitle: "Say how sure you are: certain, probable, possible or impossible.", subtitle_fr: "Indiquer ton degré de certitude : certain, probable, possible ou impossible.",
    body: `
<h2>Two meanings of the same verb</h2>
<p><s-de>Er muss arbeiten.</s-de> = he has to work (an obligation). <s-de>Er muss krank sein.</s-de> = he must be ill (a deduction: you're almost sure). In the second use, the modal verb says how certain the <b>speaker</b> is.</p>
<h2>From certain to impossible</h2>
<table>
<tr><th>How sure?</th><th>German</th></tr>
<tr><td>almost certain</td><td><s-de>Er muss krank sein.</s-de></td></tr>
<tr><td>probable</td><td><s-de>Er dürfte krank sein.</s-de> · <s-de>Er wird (wohl) krank sein.</s-de></td></tr>
<tr><td>possible</td><td><s-de>Er kann / könnte krank sein.</s-de></td></tr>
<tr><td>impossible</td><td><s-de>Er kann nicht krank sein.</s-de></td></tr>
</table>
<h2>Assumptions about the past</h2>
<p>Modal verb + past participle + <s-de>haben / sein</s-de>: <s-de>Sie muss den Bus verpasst haben.</s-de> (She must have missed the bus.) · <s-de>Er könnte schon gegangen sein.</s-de> · <s-de>Das kann nicht stimmen</s-de> → <s-de>Er kann das nicht gesagt haben.</s-de> (He can't have said that.)</p>
<div class="tip">Adverbs say the same thing, and you can use them to check your choice: <s-de>bestimmt, sicher</s-de> (muss) · <s-de>wahrscheinlich</s-de> (dürfte) · <s-de>vielleicht</s-de> (kann, könnte). <s-de>dürfte</s-de> is the typical form of news reports and careful speakers: <s-de>Die Reparatur dürfte zwei Wochen dauern.</s-de></div>
`,
    body_fr: `
<h2>Deux sens pour le même verbe</h2>
<p><s-de>Er muss arbeiten.</s-de> = il doit travailler (une obligation). <s-de>Er muss krank sein.</s-de> = il doit être malade (une déduction : c'est presque certain). Comme en français, dans le second emploi, le verbe de modalité dit à quel point la personne qui <b>parle</b> est sûre d'elle.</p>
<h2>Du certain à l'impossible</h2>
<table>
<tr><th>Degré de certitude</th><th>En allemand</th></tr>
<tr><td>presque certain</td><td><s-de>Er muss krank sein.</s-de></td></tr>
<tr><td>probable</td><td><s-de>Er dürfte krank sein.</s-de> · <s-de>Er wird (wohl) krank sein.</s-de></td></tr>
<tr><td>possible</td><td><s-de>Er kann / könnte krank sein.</s-de></td></tr>
<tr><td>impossible</td><td><s-de>Er kann nicht krank sein.</s-de></td></tr>
</table>
<h2>Les suppositions sur le passé</h2>
<p>Verbe de modalité + participe passé + <s-de>haben / sein</s-de> : <s-de>Sie muss den Bus verpasst haben.</s-de> (Elle a dû rater le bus.) · <s-de>Er könnte schon gegangen sein.</s-de> · <s-de>Er kann das nicht gesagt haben.</s-de> (Il ne peut pas avoir dit ça.)</p>
<div class="tip">Les adverbes disent la même chose, et ils t'aident à vérifier ton choix : <s-de>bestimmt, sicher</s-de> (muss) · <s-de>wahrscheinlich</s-de> (dürfte) · <s-de>vielleicht</s-de> (kann, könnte). <s-de>dürfte</s-de> est la forme typique des journalistes et des gens prudents : <s-de>Die Reparatur dürfte zwei Wochen dauern.</s-de> (La réparation devrait prendre deux semaines.)</div>
`,
    examples: [
      ["Paul ist nicht da. Er muss krank sein.", "Paul isn't here. He must be ill.", "Paul n'est pas là. Il doit être malade."],
      ["Das Licht ist aus. Sie dürfte schon schlafen.", "The light is off. She's probably asleep already.", "La lumière est éteinte. Elle doit déjà dormir."],
      ["Er könnte im Stau stehen.", "He could be stuck in a traffic jam.", "Il est peut-être coincé dans les embouteillages."],
      ["Das kann nicht stimmen! Ich habe ihn gestern noch gesehen.", "That can't be right! I saw him only yesterday.", "Ça ne peut pas être vrai ! Je l'ai encore vu hier."],
      ["Sie muss den Bus verpasst haben.", "She must have missed the bus.", "Elle a dû rater le bus."],
      ["Er kann das nicht gesagt haben, so etwas sagt er nie.", "He can't have said that, he never says things like that.", "Il ne peut pas avoir dit ça, il ne dit jamais ce genre de choses."],
      ["Die Reparatur dürfte etwa zwei Wochen dauern.", "The repair should take about two weeks.", "La réparation devrait prendre environ deux semaines."]
    ],
    quiz: [
      { q: "“He must be ill.” (you're almost sure)", q_fr: "« Il doit être malade. » (presque certain)", o: ["Er muss krank sein.", "Er soll krank sein.", "Er will krank sein."], a: 0, ex: "Almost certain: muss.", ex_fr: "Presque certain : muss." },
      { q: "Which form expresses a probability?", q_fr: "Quelle forme exprime une probabilité ?", o: ["Er dürfte zu Hause sein.", "Er darf zu Hause sein.", "Er durfte zu Hause sein."], a: 0, ex: "dürfte (Konjunktiv II) = probably.", ex_fr: "dürfte (Konjunktiv II) = probablement." },
      { q: "“She must have missed the bus.”", q_fr: "« Elle a dû rater le bus. »", o: ["Sie muss den Bus verpasst haben.", "Sie hat den Bus verpassen müssen.", "Sie musste den Bus verpasst."], a: 0, ex: "Assumption about the past: muss + participle + haben.", ex_fr: "Supposition sur le passé : muss + participe + haben." },
      { q: "“That's impossible” in a deduction:", q_fr: "« C'est impossible » dans une déduction :", o: ["Das kann nicht stimmen.", "Das muss nicht stimmen.", "Das darf nicht stimmen."], a: 0, ex: "kann nicht = impossible.", ex_fr: "kann nicht = impossible." },
      { q: "Er ___ im Stau stehen. (perhaps)", q_fr: "Er ___ im Stau stehen. (peut-être)", o: ["könnte", "muss", "soll"], a: 0, ex: "Possible: kann / könnte.", ex_fr: "Possible : kann / könnte." }
    ]
  },
  {
    id: 86, level: "B2", icon: "hourglass",
    title: "Er wird den Zug verpasst haben: future I and future II", title_fr: "Er wird den Zug verpasst haben : le futur I et le futur II",
    subtitle: "Talk about what will be finished, and guess what has probably happened.", subtitle_fr: "Parler de ce qui sera terminé, et deviner ce qui s'est probablement passé.",
    body: `
<h2>Future I: more than the future</h2>
<p><s-de>werden</s-de> + infinitive expresses a plan or a prediction: <s-de>Ich werde nächstes Jahr in Wien studieren.</s-de> But very often it expresses an <b>assumption about now</b>, especially with <s-de>wohl, schon, sicher</s-de>: <s-de>Sie wird (wohl) noch im Büro sein.</s-de> (She's probably still at the office.)</p>
<h2>Future II: werden + participle + haben / sein</h2>
<table>
<tr><th>Use</th><th>Example</th></tr>
<tr><td>finished by a moment in the future</td><td><s-de>Bis Juni werde ich die Prüfung bestanden haben.</s-de></td></tr>
<tr><td>an assumption about the past</td><td><s-de>Er wird den Zug verpasst haben.</s-de> (He's probably missed the train.)</td></tr>
</table>
<p>Choose <s-de>haben</s-de> or <s-de>sein</s-de> as in the Perfekt: <s-de>Sie wird schon angekommen sein.</s-de></p>
<h2>In a subordinate clause</h2>
<p><s-de>werden</s-de> goes to the very end: <s-de>Ich glaube, dass er den Zug verpasst haben wird.</s-de></p>
<div class="tip">For the plain future, everyday German mostly uses the present with a time word: <s-de>Morgen fahre ich nach Wien.</s-de> When you hear <s-de>werden</s-de> without a time word, think "probably": <s-de>Das wird der Postbote sein.</s-de> (That'll be the postman.)</div>
`,
    body_fr: `
<h2>Le futur I : plus qu'un futur</h2>
<p><s-de>werden</s-de> + infinitif exprime un projet ou une prévision : <s-de>Ich werde nächstes Jahr in Wien studieren.</s-de> Mais très souvent, il exprime une <b>supposition sur le présent</b>, surtout avec <s-de>wohl, schon, sicher</s-de> : <s-de>Sie wird (wohl) noch im Büro sein.</s-de> (Elle doit être encore au bureau.)</p>
<h2>Le futur II : werden + participe + haben / sein</h2>
<table>
<tr><th>Emploi</th><th>Exemple</th></tr>
<tr><td>terminé à un moment du futur</td><td><s-de>Bis Juni werde ich die Prüfung bestanden haben.</s-de> (D'ici juin, j'aurai réussi l'examen.)</td></tr>
<tr><td>une supposition sur le passé</td><td><s-de>Er wird den Zug verpasst haben.</s-de> (Il aura raté son train.)</td></tr>
</table>
<p>On choisit <s-de>haben</s-de> ou <s-de>sein</s-de> comme au parfait : <s-de>Sie wird schon angekommen sein.</s-de> Le français a exactement le même futur antérieur de supposition : « il aura raté son train ».</p>
<h2>Dans une subordonnée</h2>
<p><s-de>werden</s-de> va tout à la fin : <s-de>Ich glaube, dass er den Zug verpasst haben wird.</s-de></p>
<div class="tip">Pour le futur simple, l'allemand courant emploie surtout le présent avec un mot de temps : <s-de>Morgen fahre ich nach Wien.</s-de> Quand tu entends <s-de>werden</s-de> sans mot de temps, pense « probablement » : <s-de>Das wird der Postbote sein.</s-de> (Ça doit être le facteur.)</div>
`,
    examples: [
      ["Sie wird wohl noch im Büro sein.", "She's probably still at the office.", "Elle doit être encore au bureau."],
      ["Bis Juni werde ich die Prüfung bestanden haben.", "By June I'll have passed the exam.", "D'ici juin, j'aurai réussi l'examen."],
      ["Er wird den Zug verpasst haben.", "He's probably missed the train.", "Il aura raté son train."],
      ["Keine Sorge, sie wird schon angekommen sein.", "Don't worry, she'll have arrived by now.", "Ne t'inquiète pas, elle sera déjà arrivée."],
      ["In zwei Wochen wirst du dich von der Operation erholt haben.", "In two weeks you'll have recovered from the operation.", "Dans deux semaines, tu auras récupéré de l'opération."],
      ["Ich glaube, dass er den Termin vergessen haben wird.", "I think he'll have forgotten the appointment.", "Je pense qu'il aura oublié le rendez-vous."],
      ["Es klingelt. Das wird der Postbote sein.", "The doorbell's ringing. That'll be the postman.", "On sonne. Ça doit être le facteur."]
    ],
    quiz: [
      { q: "“Er wird den Zug verpasst haben.” means:", q_fr: "« Er wird den Zug verpasst haben. » veut dire :", o: ["He's probably missed the train.", "He will miss the train.", "He wants to miss the train."], o_fr: ["Il aura raté son train (probablement).", "Il va rater son train.", "Il veut rater son train."], a: 0, ex: "Future II: an assumption about the past.", ex_fr: "Futur II : une supposition sur le passé." },
      { q: "“By Friday I'll have finished the report.”", q_fr: "« D'ici vendredi, j'aurai terminé le rapport. »", o: ["Bis Freitag werde ich den Bericht beendet haben.", "Bis Freitag werde ich den Bericht beenden haben.", "Bis Freitag habe ich den Bericht beendet werden."], a: 0, ex: "werden + participle + haben.", ex_fr: "werden + participe + haben." },
      { q: "Sie wird schon nach Hause ___ sein.", q_fr: "Sie wird schon nach Hause ___ sein.", o: ["gegangen", "gehen", "gegangen haben"], a: 0, ex: "gehen takes sein: gegangen sein.", ex_fr: "gehen se conjugue avec sein : gegangen sein." },
      { q: "Ich glaube, dass er die Prüfung ___", q_fr: "Ich glaube, dass er die Prüfung ___", o: ["bestanden haben wird.", "wird bestanden haben.", "bestanden wird haben."], a: 0, ex: "Subordinate clause: werden at the very end.", ex_fr: "Subordonnée : werden tout à la fin." },
      { q: "“Das wird Anna sein.” (the doorbell rings) means:", q_fr: "« Das wird Anna sein. » (on sonne) veut dire :", o: ["That's probably Anna.", "Anna will come later.", "Anna wants to be there."], o_fr: ["Ça doit être Anna.", "Anna viendra plus tard.", "Anna veut être là."], a: 0, ex: "Future I for an assumption about now.", ex_fr: "Futur I pour une supposition sur le présent." }
    ]
  },
  {
    id: 87, level: "B2", kind: "functional", icon: "heart-handshake",
    title: "Everyday German: giving advice and warnings", title_fr: "L'allemand de tous les jours : conseiller et mettre en garde",
    subtitle: "Advise tactfully, warn clearly, and react to advice.", subtitle_fr: "Conseiller avec tact, mettre en garde clairement, et réagir à un conseil.",
    body: `
<h2>Giving advice</h2>
<table>
<tr><th>Tone</th><th>German</th></tr>
<tr><td>friendly</td><td><s-de>An deiner Stelle würde ich…</s-de> · <s-de>Du solltest vielleicht…</s-de></td></tr>
<tr><td>careful</td><td><s-de>Hast du schon mal überlegt, … zu…?</s-de> · <s-de>Es wäre vielleicht sinnvoll, … zu…</s-de></td></tr>
<tr><td>firm</td><td><s-de>Ich rate dir dringend, … zu…</s-de> · <s-de>Du musst unbedingt…</s-de></td></tr>
<tr><td>formal, written</td><td><s-de>Es empfiehlt sich, … zu…</s-de> · <s-de>Wir raten Ihnen, …</s-de></td></tr>
</table>
<h2>Warning</h2>
<p><s-de>Pass auf, dass du nicht…</s-de> · <s-de>Auf keinen Fall solltest du…</s-de> · <s-de>Sonst…</s-de> (otherwise): <s-de>Geh früh ins Bett, sonst bist du morgen müde.</s-de> · <s-de>Vorsicht bei…</s-de></p>
<h2>Reacting to advice</h2>
<p><s-de>Danke, das ist ein guter Tipp.</s-de> · <s-de>Das habe ich schon versucht, aber…</s-de> · <s-de>Daran habe ich noch gar nicht gedacht.</s-de> · <s-de>Das kommt für mich nicht in Frage.</s-de> (That's out of the question for me.)</p>
<div class="tip">German advice can sound direct. If you want to soften it, use the Konjunktiv II (<s-de>würde, sollte, wäre</s-de>) and small words like <s-de>vielleicht, mal, ruhig</s-de>: <s-de>Du könntest ja mal mit deiner Chefin sprechen.</s-de></div>
`,
    body_fr: `
<h2>Donner un conseil</h2>
<table>
<tr><th>Ton</th><th>En allemand</th></tr>
<tr><td>amical</td><td><s-de>An deiner Stelle würde ich…</s-de> (À ta place, je…) · <s-de>Du solltest vielleicht…</s-de></td></tr>
<tr><td>prudent</td><td><s-de>Hast du schon mal überlegt, … zu…?</s-de> · <s-de>Es wäre vielleicht sinnvoll, … zu…</s-de></td></tr>
<tr><td>ferme</td><td><s-de>Ich rate dir dringend, … zu…</s-de> · <s-de>Du musst unbedingt…</s-de></td></tr>
<tr><td>formel, écrit</td><td><s-de>Es empfiehlt sich, … zu…</s-de> · <s-de>Wir raten Ihnen, …</s-de></td></tr>
</table>
<h2>Mettre en garde</h2>
<p><s-de>Pass auf, dass du nicht…</s-de> · <s-de>Auf keinen Fall solltest du…</s-de> · <s-de>Sonst…</s-de> (sinon) : <s-de>Geh früh ins Bett, sonst bist du morgen müde.</s-de> · <s-de>Vorsicht bei…</s-de></p>
<h2>Réagir à un conseil</h2>
<p><s-de>Danke, das ist ein guter Tipp.</s-de> · <s-de>Das habe ich schon versucht, aber…</s-de> · <s-de>Daran habe ich noch gar nicht gedacht.</s-de> · <s-de>Das kommt für mich nicht in Frage.</s-de> (Pour moi, c'est hors de question.)</p>
<div class="tip">Un conseil en allemand peut paraître direct. Pour l'adoucir, emploie le Konjunktiv II (<s-de>würde, sollte, wäre</s-de>) et de petits mots comme <s-de>vielleicht, mal, ruhig</s-de> : <s-de>Du könntest ja mal mit deiner Chefin sprechen.</s-de></div>
`,
    examples: [
      ["An deiner Stelle würde ich mal eine Woche Urlaub nehmen.", "If I were you, I'd take a week off.", "À ta place, je prendrais une semaine de vacances."],
      ["Hast du schon mal überlegt, mit deiner Chefin zu sprechen?", "Have you ever thought about talking to your boss?", "Tu as déjà pensé à parler à ta cheffe ?"],
      ["Ich rate dir dringend, zum Arzt zu gehen.", "I strongly advise you to see a doctor.", "Je te conseille vivement d'aller chez le médecin."],
      ["Es empfiehlt sich, das Medikament nach dem Essen einzunehmen.", "It is advisable to take the medicine after meals.", "Il est recommandé de prendre le médicament après le repas."],
      ["Geh früh ins Bett, sonst bist du morgen müde.", "Go to bed early, otherwise you'll be tired tomorrow.", "Couche-toi tôt, sinon tu auras sommeil demain."],
      ["Daran habe ich noch gar nicht gedacht.", "I hadn't even thought of that.", "Je n'y avais même pas pensé."],
      ["Du könntest ja mal einen Yogakurs ausprobieren.", "You could try a yoga class sometime.", "Tu pourrais essayer un cours de yoga, pour voir."]
    ],
    quiz: [
      { q: "“If I were you, I'd rest.”", q_fr: "« À ta place, je me reposerais. »", o: ["An deiner Stelle würde ich mich ausruhen.", "In deiner Stelle würde ich mich ausruhen.", "An deiner Stelle ich würde mich ausruhen."], a: 0, ex: "An deiner Stelle + würde (verb second).", ex_fr: "An deiner Stelle + würde (verbe en deuxième position)." },
      { q: "A formal, written piece of advice:", q_fr: "Un conseil formel, écrit :", o: ["Es empfiehlt sich, früh zu buchen.", "Buch mal früh!", "Du solltest echt früh buchen."], a: 0, ex: "Es empfiehlt sich, … zu…", ex_fr: "Es empfiehlt sich, … zu…" },
      { q: "Iss etwas, ___ wird dir schlecht.", q_fr: "Iss etwas, ___ wird dir schlecht.", o: ["sonst", "dass", "damit"], a: 0, ex: "sonst = otherwise (verb comes right after it).", ex_fr: "sonst = sinon (le verbe vient juste après)." },
      { q: "“That's out of the question for me.”", q_fr: "« Pour moi, c'est hors de question. »", o: ["Das kommt für mich nicht in Frage.", "Das fragt für mich nicht.", "Das ist für mich keine Frage gekommen."], a: 0, ex: "nicht in Frage kommen.", ex_fr: "nicht in Frage kommen." },
      { q: "Which words soften advice?", q_fr: "Quels mots adoucissent un conseil ?", o: ["vielleicht, mal, ruhig", "sofort, unbedingt, sonst", "nie, immer, nur"], a: 0, ex: "Small softening words.", ex_fr: "De petits mots qui adoucissent." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    85: {
      gap: [["Paul ist nicht da. Er ___ krank sein.", "muss", "almost certain", "quasi-certitude"], ["Das Licht ist aus. Sie ___ schon schlafen.", "dürfte|wird", "probably", "probablement"], ["Sie muss den Bus verpasst ___.", "haben"], ["Das ___ nicht stimmen! Ich habe ihn gestern gesehen.", "kann"]],
      fix: [["Er muss den Zug verpasst sein.", "Er muss den Zug verpasst haben.", "verpassen takes haben.", "verpassen se conjugue avec haben."], ["Sie dürfte schon nach Hause gegangen haben.", "Sie dürfte schon nach Hause gegangen sein.", "gehen takes sein.", "gehen se conjugue avec sein."]],
      task: ["Your friend doesn't answer the phone. Make four assumptions with muss, dürfte, könnte and kann nicht.", "Ton ami ne répond pas au téléphone. Fais quatre suppositions avec muss, dürfte, könnte et kann nicht.", "Er muss noch bei der Arbeit sein, er hat heute Spätschicht. Er dürfte das Handy im Spind haben. Vielleicht könnte der Akku leer sein. Schlafen kann er noch nicht, es ist erst acht Uhr."]
    },
    86: {
      gap: [["Bis Juni ___ ich die Prüfung bestanden haben.", "werde"], ["Er wird den Zug verpasst ___.", "haben"], ["Keine Sorge, sie wird schon angekommen ___.", "sein"], ["Es klingelt. Das ___ der Postbote sein.", "wird", "probably", "probablement"]],
      fix: [["Bis Freitag werde ich den Bericht schreiben haben.", "Bis Freitag werde ich den Bericht geschrieben haben.", "Future II: the participle (geschrieben) + haben.", "Futur II : le participe (geschrieben) + haben."], ["Ich glaube, dass er wird den Termin vergessen haben.", "Ich glaube, dass er den Termin vergessen haben wird.", "Subordinate clause: werden at the end.", "Subordonnée : werden à la fin."]],
      task: ["Write four sentences: two things you will have done by the end of the year (future II), and two guesses about why a colleague is late (future II).", "Écris quatre phrases : deux choses que tu auras faites d'ici la fin de l'année (futur II), et deux suppositions sur le retard d'un collègue (futur II).", "Bis Ende des Jahres werde ich das B2-Niveau erreicht haben. Bis Dezember werde ich auch meinen Umzug geschafft haben. Jonas ist noch nicht da: Er wird wieder den Wecker überhört haben. Oder er wird im Stau gestanden haben."]
    },
    87: {
      gap: [["An deiner ___ würde ich zum Arzt gehen.", "Stelle", "if I were you", "à ta place"], ["Es ___ sich, das Medikament nach dem Essen einzunehmen.", "empfiehlt"], ["Geh früh ins Bett, ___ bist du morgen müde.", "sonst", "otherwise", "sinon"], ["Das kommt für mich nicht in ___.", "Frage"]],
      fix: [["Ich rate dir, gehst du zum Arzt.", "Ich rate dir, zum Arzt zu gehen.", "raten + zu + infinitive.", "raten + zu + infinitif."], ["Sonst du bist morgen müde.", "Sonst bist du morgen müde.", "After sonst, the verb comes next.", "Après sonst, le verbe vient tout de suite."]],
      task: ["A friend sleeps badly because of stress at work. Give four pieces of advice, from friendly to firm, and one warning with sonst.", "Une amie dort mal à cause du stress au travail. Donne quatre conseils, du plus amical au plus ferme, et une mise en garde avec sonst.", "An deiner Stelle würde ich abends das Handy ausschalten. Hast du schon mal überlegt, mit deiner Chefin über die Arbeit zu sprechen? Es wäre vielleicht sinnvoll, jeden Tag spazieren zu gehen. Wenn es nicht besser wird, rate ich dir dringend, zum Arzt zu gehen. Nimm dir eine Auszeit, sonst wirst du noch krank."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "woistpaul", lesson: 85, level: "B2", icon: "circle-help", partner: "Ines", role: "a colleague", role_fr: "une collègue",
    title: "Where's Paul?", title_fr: "Où est Paul ?",
    setting: "The weekly meeting is about to start, but your colleague Paul, who is always on time, isn't there. You and your colleague Ines wonder why.", setting_fr: "La réunion hebdomadaire va commencer, mais ton collègue Paul, toujours ponctuel, n'est pas là. Ta collègue Ines et toi vous demandez pourquoi.",
    turns: [
      { p: "Komisch, Paul ist noch nicht da. Er kommt doch sonst immer pünktlich.", en: "Strange, Paul isn't here yet. He's usually always on time.", fr: "Bizarre, Paul n'est pas encore là. D'habitude, il est toujours à l'heure." },
      { y: ["Er muss krank sein. Gestern hat er schon die ganze Zeit gehustet.", "Er soll krank sein. Gestern hat er schon die ganze Zeit gehustet.", "Er muss krank sein. Gestern er hat schon die ganze Zeit gehustet."], en: "He must be ill. Yesterday he was coughing the whole time.", fr: "Il doit être malade. Hier, il toussait déjà sans arrêt.", why: "A deduction (almost sure): muss.", why_fr: "Une déduction (quasi-certitude) : muss." },
      { p: "Aber dann hätte er doch eine Nachricht geschrieben.", en: "But then he would have sent a message.", fr: "Mais alors il aurait envoyé un message." },
      { y: ["Vielleicht. Er könnte aber auch einfach verschlafen haben.", "Vielleicht. Er könnte aber auch einfach verschlafen sein.", "Vielleicht. Er könnte aber auch einfach verschlafen hat."], en: "Maybe. But he could also simply have overslept.", fr: "Peut-être. Mais il a aussi pu simplement ne pas se réveiller.", why: "könnte + participle + haben (verschlafen takes haben).", why_fr: "könnte + participe + haben (verschlafen se conjugue avec haben)." },
      { p: "Paul und verschlafen? Niemals!", en: "Paul, oversleep? Never!", fr: "Paul, ne pas se réveiller ? Jamais !" },
      { y: ["Stimmt, das kann nicht sein. Er wird wohl im Stau stehen.", "Stimmt, das muss nicht sein. Er wird wohl im Stau stehen.", "Stimmt, das kann nicht sein. Er wird wohl im Stau gestanden."], en: "True, that can't be it. He's probably stuck in traffic.", fr: "C'est vrai, ce n'est pas possible. Il doit être coincé dans les bouchons.", why: "Impossible: kann nicht; assumption about now: wird wohl + infinitive.", why_fr: "Impossible : kann nicht ; supposition sur le présent : wird wohl + infinitif." },
      { p: "Ah, schau mal, er hat gerade geschrieben: „Bin beim Arzt, komme später.“", en: "Oh look, he's just written: “At the doctor's, coming later.”", fr: "Ah, regarde, il vient d'écrire : « Chez le médecin, j'arrive plus tard. »" },
      { y: ["Siehst du? Er wird sich bei seinem Sohn angesteckt haben. Der war letzte Woche krank.", "Siehst du? Er wird sich bei seinem Sohn anstecken haben. Der war letzte Woche krank.", "Siehst du? Er wird sich bei seinem Sohn angesteckt sein. Der war letzte Woche krank."], en: "You see? He'll have caught it from his son. He was ill last week.", fr: "Tu vois ? Il aura été contaminé par son fils. Il était malade la semaine dernière.", why: "Future II for an assumption about the past: wird … angesteckt haben.", why_fr: "Futur II pour une supposition sur le passé : wird … angesteckt haben." },
      { p: "Dann fangen wir ohne ihn an. Schreibst du ihm danach das Protokoll?", en: "Then let's start without him. Will you send him the minutes afterwards?", fr: "Alors on commence sans lui. Tu lui envoies le compte rendu après ?" },
      { y: ["Klar. Bis zum Mittag werde ich es geschrieben haben.", "Klar. Bis zum Mittag werde ich es schreiben haben.", "Klar. Bis zum Mittag habe ich es geschrieben werden."], en: "Sure. I'll have written it by lunchtime.", fr: "Bien sûr. D'ici midi, je l'aurai rédigé.", why: "Future II: finished by a moment in the future.", why_fr: "Futur II : terminé à un moment du futur." }
    ] },
  { id: "gestresstefreundin", lesson: 87, level: "B2", icon: "heart-handshake", partner: "Johanna", role: "a friend", role_fr: "une amie",
    title: "A friend under stress", title_fr: "Une amie stressée",
    setting: "Your friend Johanna has been working too much for weeks and sleeps badly. Over coffee, she tells you about it. Give her advice.", setting_fr: "Ton amie Johanna travaille trop depuis des semaines et dort mal. Autour d'un café, elle t'en parle. Donne-lui des conseils.",
    turns: [
      { p: "Ich kann einfach nicht mehr. Seit Wochen schlafe ich schlecht und grüble nachts über die Arbeit.", en: "I just can't go on. For weeks I've been sleeping badly and brooding about work at night.", fr: "Je n'en peux plus. Depuis des semaines, je dors mal et je rumine la nuit à cause du travail." },
      { y: ["Das klingt nicht gut. An deiner Stelle würde ich mir eine Auszeit nehmen.", "Das klingt nicht gut. In deiner Stelle würde ich mir eine Auszeit nehmen.", "Das klingt nicht gut. An deiner Stelle ich würde mir eine Auszeit nehmen."], en: "That doesn't sound good. If I were you, I'd take a break.", fr: "Ça n'a pas l'air d'aller. À ta place, je prendrais une pause.", why: "An deiner Stelle + würde (verb second).", why_fr: "An deiner Stelle + würde (verbe en deuxième position)." },
      { p: "Das geht nicht. Wir haben gerade so viel zu tun.", en: "I can't. We've got so much to do right now.", fr: "Impossible. On a tellement de travail en ce moment." },
      { y: ["Hast du schon mal überlegt, mit deiner Chefin darüber zu sprechen?", "Hast du schon mal überlegt, mit deiner Chefin darüber sprechen?", "Hast du schon mal überlegt, dass mit deiner Chefin darüber zu sprechen?"], en: "Have you ever thought about talking to your boss about it?", fr: "Tu as déjà pensé à en parler à ta cheffe ?", why: "überlegen, … zu + infinitive.", why_fr: "überlegen, … zu + infinitif." },
      { p: "Ehrlich gesagt nicht. Ich will nicht, dass sie denkt, ich sei überfordert.", en: "Honestly, no. I don't want her to think I can't cope.", fr: "Franchement, non. Je ne veux pas qu'elle pense que je suis dépassée." },
      { y: ["Das verstehe ich. Aber wenn du so weitermachst, wirst du noch krank.", "Das verstehe ich. Aber wenn du so weitermachst, du wirst noch krank.", "Das verstehe ich. Aber wenn du machst so weiter, wirst du noch krank."], en: "I understand. But if you carry on like this, you'll end up ill.", fr: "Je comprends. Mais si tu continues comme ça, tu vas finir par tomber malade.", why: "After the wenn-clause, the main verb comes first.", why_fr: "Après la subordonnée en wenn, le verbe principal vient en premier." },
      { p: "Und was soll ich gegen die schlaflosen Nächte machen?", en: "And what should I do about the sleepless nights?", fr: "Et qu'est-ce que je dois faire contre les nuits blanches ?" },
      { y: ["Du solltest abends das Handy ausschalten, sonst schaust du doch wieder in deine Mails.", "Du solltest abends das Handy ausschalten, sonst du schaust doch wieder in deine Mails.", "Du solltest abends das Handy ausgeschaltet, sonst schaust du doch wieder in deine Mails."], en: "You should switch off your phone in the evening, otherwise you'll look at your emails again.", fr: "Tu devrais éteindre ton téléphone le soir, sinon tu vas encore regarder tes mails.", why: "sollte + infinitive; sonst + verb.", why_fr: "sollte + infinitif ; sonst + verbe." },
      { p: "Daran habe ich noch gar nicht gedacht. Danke, das versuche ich.", en: "I hadn't even thought of that. Thanks, I'll try it.", fr: "Je n'y avais même pas pensé. Merci, je vais essayer." },
      { y: ["Gern. Und wenn es nicht besser wird, rate ich dir dringend, zum Arzt zu gehen.", "Gern. Und wenn es nicht besser wird, rate ich dir dringend, zum Arzt gehen.", "Gern. Und wenn es wird nicht besser, rate ich dir dringend, zum Arzt zu gehen."], en: "You're welcome. And if it doesn't get better, I strongly advise you to see a doctor.", fr: "Avec plaisir. Et si ça ne s'arrange pas, je te conseille vivement d'aller voir un médecin.", why: "raten + zu + infinitive; wenn: verb at the end.", why_fr: "raten + zu + infinitif ; wenn : verbe à la fin." }
    ] }
  );

  W.READINGS.push({
    id: "robertkoch", level: "B2", icon: "book-open", title: "Robert Koch und der unsichtbare Feind", genre: "Portrait",
    intro: "A country doctor with a microscope became one of the founders of modern bacteriology. The story of Robert Koch.",
    intro_fr: "Un médecin de campagne armé d'un microscope est devenu l'un des fondateurs de la bactériologie moderne. L'histoire de Robert Koch.",
    paragraphs: [
      { de: "Robert Koch wurde 1843 in Clausthal im Harz geboren. Nach dem Medizinstudium in Göttingen arbeitete er als Landarzt, unter anderem in Wollstein, einer kleinen Stadt in der damaligen Provinz Posen. Neben seiner Praxis richtete er sich ein bescheidenes Labor ein und untersuchte unter dem Mikroskop den Erreger des Milzbrands, einer Krankheit, an der damals viele Tiere starben.", en: "Robert Koch was born in 1843 in Clausthal in the Harz mountains. After studying medicine in Göttingen, he worked as a country doctor, among other places in Wollstein, a small town in what was then the province of Posen. Alongside his practice, he set up a modest laboratory and studied under the microscope the pathogen of anthrax, a disease that killed many animals at the time.", fr: "Robert Koch naît en 1843 à Clausthal, dans le Harz. Après des études de médecine à Göttingen, il exerce comme médecin de campagne, notamment à Wollstein, une petite ville de l'ancienne province de Posen. À côté de son cabinet, il s'aménage un modeste laboratoire et étudie au microscope l'agent de la maladie du charbon, qui tuait alors de nombreux animaux." },
      { de: "Am 24. März 1882 stellte Koch in Berlin seine wichtigste Entdeckung vor: Die Tuberkulose wird von einem Bakterium verursacht. Die Krankheit gehörte damals zu den häufigsten Todesursachen in Europa, und viele Ärzte hielten sie für erblich. Zur Erinnerung an diesen Vortrag ist der 24. März heute der Welttuberkulosetag.", en: "On 24 March 1882, in Berlin, Koch presented his most important discovery: tuberculosis is caused by a bacterium. At the time, the disease was one of the most common causes of death in Europe, and many doctors thought it was hereditary. In memory of this lecture, 24 March is now World Tuberculosis Day.", fr: "Le 24 mars 1882, à Berlin, Koch présente sa découverte la plus importante : la tuberculose est causée par une bactérie. La maladie comptait alors parmi les causes de décès les plus fréquentes en Europe, et beaucoup de médecins la croyaient héréditaire. En souvenir de cette conférence, le 24 mars est aujourd'hui la Journée mondiale de la tuberculose." },
      { de: "1891 wurde in Berlin ein Institut für Infektionskrankheiten gegründet, dessen Leitung Koch übernahm; heute trägt es seinen Namen: das Robert Koch-Institut. 1905 erhielt er den Nobelpreis für Physiologie oder Medizin. Bis heute dürfte kaum ein deutscher Arzt im Ausland bekannter sein.", en: "In 1891, an institute for infectious diseases was founded in Berlin, and Koch became its head; today it bears his name: the Robert Koch Institute. In 1905 he received the Nobel Prize in Physiology or Medicine. To this day, hardly any German doctor is likely to be better known abroad.", fr: "En 1891 est fondé à Berlin un institut des maladies infectieuses, dont Koch prend la direction ; il porte aujourd'hui son nom : le Robert Koch-Institut. En 1905, il reçoit le prix Nobel de physiologie ou médecine. Aujourd'hui encore, aucun médecin allemand n'est sans doute plus connu à l'étranger." },
      { de: "Koch gilt zusammen mit dem Franzosen Louis Pasteur als einer der Begründer der modernen Bakteriologie. Zwischen den beiden Forschern herrschte allerdings eine heftige Rivalität, die auch von der Feindschaft zwischen Deutschland und Frankreich nach dem Krieg von 1870/71 geprägt war. Koch starb 1910 in Baden-Baden.", en: "Together with the Frenchman Louis Pasteur, Koch is considered one of the founders of modern bacteriology. There was, however, a fierce rivalry between the two scientists, which was also shaped by the hostility between Germany and France after the war of 1870-71. Koch died in Baden-Baden in 1910.", fr: "Avec le Français Louis Pasteur, Koch est considéré comme l'un des fondateurs de la bactériologie moderne. Une vive rivalité opposait toutefois les deux savants, marquée aussi par l'hostilité entre l'Allemagne et la France après la guerre de 1870-1871. Koch meurt en 1910 à Baden-Baden." }
    ],
    glossary: { "Harz": ["the Harz (mountains)", "le Harz (massif)"], "Medizinstudium": ["medical studies", "études de médecine"], "Landarzt": ["country doctor", "médecin de campagne"], "damaligen": ["of that time", "de l'époque"], "Provinz": ["province", "province"], "Praxis": ["practice, surgery", "cabinet médical"], "richtete": ["(einrichten) set up", "(einrichten) aménagea"], "bescheidenes": ["modest", "modeste"], "Mikroskop": ["microscope", "microscope"], "Milzbrands": ["anthrax", "maladie du charbon"], "Tuberkulose": ["tuberculosis", "tuberculose"], "Bakterium": ["bacterium", "bactérie"], "Todesursachen": ["causes of death", "causes de décès"], "erblich": ["hereditary", "héréditaire"], "Welttuberkulosetag": ["World Tuberculosis Day", "Journée mondiale de la tuberculose"], "Infektionskrankheiten": ["infectious diseases", "maladies infectieuses"], "Leitung": ["management, direction", "direction"], "Nobelpreis": ["Nobel Prize", "prix Nobel"], "Physiologie": ["physiology", "physiologie"], "Ausland": ["abroad", "étranger"], "Begründer": ["founder", "fondateur"], "Bakteriologie": ["bacteriology", "bactériologie"], "herrschte": ["prevailed, there was", "régnait"], "Rivalität": ["rivalry", "rivalité"], "Feindschaft": ["hostility, enmity", "hostilité"], "geprägt": ["shaped, marked", "marqué"] },
    questions: [
      { q: "Als was arbeitete Koch nach dem Studium?", o: ["Als Landarzt", "Als Professor in Paris", "Als Apotheker"], a: 0 },
      { q: "Was stellte Koch am 24. März 1882 vor?", o: ["Dass die Tuberkulose von einem Bakterium verursacht wird", "Ein neues Mikroskop", "Eine Impfung gegen Milzbrand"], a: 0 },
      { q: "Warum ist der 24. März heute ein besonderer Tag?", o: ["Es ist der Welttuberkulosetag.", "Es ist Kochs Geburtstag.", "An diesem Tag wurde das Institut gegründet."], a: 0 },
      { q: "Wann erhielt Koch den Nobelpreis?", o: ["1905", "1882", "1891"], a: 0 },
      { q: "Wie war das Verhältnis zwischen Koch und Pasteur?", o: ["Es herrschte eine heftige Rivalität.", "Sie arbeiteten eng zusammen.", "Sie kannten sich nicht."], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-b2-5", unit: "b2-5", level: "B2", icon: "radio",
    title: "Die Gesundheitssprechstunde", title_fr: "La consultation à la radio",
    context: "A radio health programme. A listener, Uwe, calls in about his sleep problems, and the doctor in the studio, Dr. Hansen, answers.", context_fr: "Une émission de santé à la radio. Un auditeur, Uwe, appelle pour ses problèmes de sommeil, et la médecin du studio, la docteure Hansen, lui répond.",
    words: [["die Sprechstunde, -n", "the consultation (hour)", "la consultation"], ["einschlafen", "to fall asleep", "s'endormir"], ["durchschlafen", "to sleep through the night", "faire des nuits complètes"], ["koffeinhaltig", "containing caffeine", "qui contient de la caféine"], ["der Rhythmus", "the rhythm", "le rythme"]],
    lines: [["Moderator", "Willkommen zur Gesundheitssprechstunde. Am Telefon ist Uwe. Uwe, was ist Ihr Problem?", "de-DE"], ["Uwe", "Ich kann seit Monaten nicht durchschlafen. Ich wache um drei Uhr auf und grüble dann stundenlang.", "de-DE"], ["Dr. Hansen", "Das ist leider sehr verbreitet. Das dürfte mit Stress zu tun haben. Wie sieht denn Ihr Abend aus?", "de-DE"], ["Uwe", "Na ja, ich arbeite oft bis spät am Laptop und trinke dabei noch einen Kaffee.", "de-DE"], ["Dr. Hansen", "Da haben wir schon zwei Gründe. An Ihrer Stelle würde ich nach dem späten Nachmittag nichts Koffeinhaltiges mehr trinken. Und eine Stunde vor dem Schlafen sollten Sie keine Bildschirme mehr benutzen.", "de-DE"], ["Uwe", "Das wird schwierig, aber ich versuche es.", "de-DE"], ["Dr. Hansen", "Hilfreich ist auch ein fester Rhythmus: jeden Tag zur gleichen Zeit ins Bett und zur gleichen Zeit aufstehen, auch am Wochenende.", "de-DE"], ["Dr. Hansen", "Und wenn es nach einigen Wochen nicht besser wird, rate ich Ihnen, zu Ihrer Hausärztin zu gehen. Dann könnte eine andere Ursache dahinterstecken.", "de-DE"]],
    gist: ["Worum geht es in dem Gespräch?", ["Um Schlafprobleme", "Um Rückenschmerzen", "Um eine Impfung"]],
    detail: [["Wann wacht Uwe auf?", ["Um drei Uhr", "Um sieben Uhr", "Um Mitternacht"]], ["Was macht Uwe abends?", ["Er arbeitet am Laptop und trinkt Kaffee.", "Er macht Sport.", "Er geht früh ins Bett."]], ["Was empfiehlt Dr. Hansen?", ["Einen festen Rhythmus, auch am Wochenende", "Mehr Kaffee am Morgen", "Länger am Wochenende zu schlafen"]], ["Wann sollte Uwe zur Hausärztin gehen?", ["Wenn es nach einigen Wochen nicht besser wird", "Sofort", "Nie"]]],
    decode: ["Das dürfte mit Stress zu tun haben.", "Dann könnte eine andere Ursache dahinterstecken."],
    tip: "Doctors and experts often speak cautiously: dürfte, könnte, wohl, vermutlich. Listen for these words: they tell you whether something is a certainty or just a possibility.", tip_fr: "Les médecins et les experts parlent souvent avec prudence : dürfte, könnte, wohl, vermutlich. Repère ces mots : ils t'indiquent s'il s'agit d'une certitude ou d'une simple possibilité."
  }]);

  W.PROMPTS.push({ id: "de-b2-5", level: "B2", q: "Sollten Arbeitgeber mehr für die psychische Gesundheit ihrer Mitarbeiter tun? Nimm Stellung, nenne Beispiele und mach Vorschläge.", en: "Should employers do more for their employees' mental health? Take a position, give examples and make suggestions.", fr: "Les employeurs devraient-ils faire davantage pour la santé mentale de leurs salariés ? Prends position, donne des exemples et fais des propositions.", time: 180,
    phrases: ["Meiner Ansicht nach…", "Ein häufiges Problem dürfte… sein.", "Arbeitgeber könnten zum Beispiel…", "Es empfiehlt sich, …", "Allerdings liegt nicht alles in der Hand der Firma."],
    model: "Meiner Ansicht nach sollten Arbeitgeber deutlich mehr für die psychische Gesundheit ihrer Mitarbeiter tun. Ein häufiges Problem dürfte die ständige Erreichbarkeit sein: Viele Menschen lesen noch spät abends berufliche Mails und können nie richtig abschalten. Arbeitgeber könnten zum Beispiel festlegen, dass nach 19 Uhr keine Mails mehr verschickt werden. Außerdem wäre es sinnvoll, Führungskräfte zu schulen, damit sie Erschöpfung bei ihren Mitarbeitern früh erkennen. Es empfiehlt sich auch, Beratungsangebote zu schaffen, die man anonym nutzen kann. Allerdings liegt nicht alles in der Hand der Firma: Jeder muss auch selbst lernen, Grenzen zu setzen und Pausen einzulegen. Wenn beide Seiten Verantwortung übernehmen, werden am Ende alle profitieren." });

  W.WRITING_GUIDE["b2-5"] = { genre: "A formal message (Goethe B2, writing part 2)", genre_fr: "Un message formel (Goethe B2, écrit partie 2)",
    plan: [["A subject line and a formal greeting.", "Un objet et un appel formel."], ["Why you're writing.", "Le motif de ton message."], ["Your situation, briefly.", "Ta situation, brièvement."], ["Your requests, politely.", "Tes demandes, poliment."], ["A closing phrase and the sign-off.", "Une formule de conclusion et la formule finale."]],
    marks: [["Betreff: Abmeldung vom Kurs", "a clear subject line", "un objet clair"], ["Sehr geehrte Frau Krüger,", "the formal greeting", "l'appel formel"], ["leider muss ich mich von dem Kurs", "the reason for writing", "le motif du message"], ["Nach Auskunft meiner Ärztin", "reporting what the doctor said", "rapporter ce qu'a dit la médecin"], ["Wäre es möglich", "a polite request", "une demande polie"], ["Ich bedanke mich im Voraus für Ihr Verständnis.", "the closing phrase", "la formule de conclusion"]] };

  /* Atelier de langue : champs allemands d'abord, puis anglais et français (voir localize.js). */
  W.LEXIS = W.LEXIS || {};
  W.LEXIS["b2-5"] = {
    colloc: [
      ["eine Diagnose stellen", "to make a diagnosis", "poser un diagnostic", "Die Ärztin hat schnell eine Diagnose gestellt.", "gestellt", ["gemacht", "gelegt"]],
      ["Medikamente einnehmen", "to take medication", "prendre des médicaments", "Sie muss zweimal täglich Medikamente einnehmen.", "einnehmen", ["essen", "trinken"]],
      ["einen Termin vereinbaren", "to make an appointment", "prendre rendez-vous", "Ich möchte gern einen Termin vereinbaren.", "vereinbaren", ["stellen", "nehmen"]],
      ["an einer Krankheit leiden", "to suffer from an illness", "souffrir d'une maladie", "Viele Menschen leiden an Rückenschmerzen.", "leiden", ["haben", "fühlen"]],
      ["sich Zeit nehmen", "to take time", "prendre le temps", "Nimm dir Zeit für dich selbst.", "Nimm", ["Mach", "Gib"]],
      ["Stress abbauen", "to reduce stress", "évacuer le stress", "Sport hilft, Stress abzubauen.", "abzubauen", ["abzumachen", "abzulegen"]],
      ["eine Pause einlegen", "to take a break", "faire une pause", "Nach zwei Stunden sollte man eine Pause einlegen.", "einlegen", ["setzen", "stellen"]],
      ["Grenzen setzen", "to set limits", "fixer des limites", "Man muss lernen, Grenzen zu setzen.", "setzen", ["machen", "legen"]],
      ["einen Rat befolgen", "to follow advice", "suivre un conseil", "Ich habe den Rat meiner Ärztin befolgt.", "befolgt", ["gemacht", "gehalten"]],
      ["ein Risiko eingehen", "to take a risk", "prendre un risque", "Bei der Gesundheit will ich kein Risiko eingehen.", "eingehen", ["machen", "geben"]]
    ],
    wf: [
      ["Die ___ hat drei Wochen gedauert. (BEHANDELN)", "Behandlung"],
      ["Diese Krankheit ist sehr ___. (ANSTECKEN)", "ansteckend"],
      ["Nach der Operation braucht man viel ___. (RUHIG)", "Ruhe"],
      ["Nach der langen Woche fühlt er sich völlig ___. (ERSCHÖPFEN)", "erschöpft"],
      ["Die ___ hat kaum Nebenwirkungen. (IMPFEN)", "Impfung"],
      ["Viele ältere Menschen leiden unter ___. (EINSAM)", "Einsamkeit"],
      ["Eine gesunde ___ ist wichtig für die Konzentration. (ERNÄHREN)", "Ernährung"],
      ["Das Medikament ist leider nicht ___. (WIRKEN)", "wirksam"]
    ],
    kwt: [
      ["Ich bin sicher, dass er krank ist.", "MUSS", "Er ___.", "muss krank sein"],
      ["Wahrscheinlich hat sie den Bus verpasst.", "DÜRFTE", "Sie ___.", "dürfte den Bus verpasst haben"],
      ["Vielleicht ist er schon zu Hause.", "KÖNNTE", "Er ___ zu Hause sein.", "könnte schon"],
      ["Ich vermute, dass sie den Termin vergessen hat.", "WIRD", "Sie ___.", "wird den Termin vergessen haben"],
      ["Es ist unmöglich, dass er das gesagt hat.", "KANN", "Er ___.", "kann das nicht gesagt haben"],
      ["Ich rate dir, mehr zu schlafen.", "STELLE", "An ___ würde ich mehr schlafen.", "deiner Stelle"]
    ],
    idioms: [
      ["auf dem Zahnfleisch gehen", "völlig erschöpft sein", "to be on one's last legs", "être sur les rotules", "Nach der Prüfungswoche gehe ich auf dem Zahnfleisch.", "auf dem Zahnfleisch"],
      ["fix und fertig sein", "total müde und erschöpft sein", "to be completely worn out", "être crevé", "Nach dem Umzug war ich fix und fertig.", "fix und fertig"],
      ["jemandem auf den Keks gehen", "jemanden nerven", "to get on someone's nerves", "taper sur les nerfs de quelqu'un", "Der ständige Lärm geht mir auf den Keks.", "auf den Keks"],
      ["die Nase voll haben", "genug von etwas haben", "to be fed up", "en avoir ras le bol", "Ich habe die Nase voll von den Überstunden.", "die Nase voll"],
      ["wieder auf den Beinen sein", "wieder gesund sein", "to be back on one's feet", "être de nouveau sur pied", "Nach einer Woche war sie wieder auf den Beinen.", "wieder auf den Beinen"],
      ["sich etwas zu Herzen nehmen", "etwas sehr ernst nehmen", "to take something to heart", "prendre quelque chose à cœur", "Nimm dir die Kritik nicht so zu Herzen.", "zu Herzen"],
      ["die Seele baumeln lassen", "sich entspannen und an nichts denken", "to switch off completely", "décompresser, se laisser vivre", "Im Urlaub will ich einfach die Seele baumeln lassen.", "die Seele baumeln lassen"],
      ["mit einem blauen Auge davonkommen", "ohne großen Schaden davonkommen", "to get off lightly", "s'en tirer à bon compte", "Bei dem Unfall ist er mit einem blauen Auge davongekommen.", "mit einem blauen Auge"]
    ]
  };

  W.COURSE.push({ id: "b2-5", level: "B2", icon: "heart-pulse", title: "Health and wellbeing", title_fr: "Santé et bien-être",
    intro: "Body and mind: in this unit, you'll learn to make assumptions and say how sure you are (er muss krank sein, sie dürfte schon schlafen), to use the future II (er wird den Zug verpasst haben), and to give advice tactfully. You'll also discover Robert Koch, the country doctor who identified the cause of tuberculosis.",
    intro_fr: "Le corps et l'esprit : dans cette unité, tu vas apprendre à faire des suppositions en indiquant ton degré de certitude (er muss krank sein, sie dürfte schon schlafen), à employer le futur II (er wird den Zug verpasst haben) et à donner des conseils avec tact. Tu découvriras aussi Robert Koch, le médecin de campagne qui a identifié la cause de la tuberculose.",
    can: ["Make assumptions with muss, dürfte, könnte and kann nicht", "Use the future II for completed actions and guesses about the past", "Give advice and warnings, from friendly to formal", "Talk about physical and mental health", "Write a formal message of about 100 words (Goethe B2)"],
    can_fr: ["Faire des suppositions avec muss, dürfte, könnte et kann nicht", "Employer le futur II pour une action terminée et une supposition sur le passé", "Donner des conseils et mettre en garde, du ton amical au ton formel", "Parler de santé physique et mentale", "Écrire un message formel d'environ 100 mots (Goethe B2)"],
    lessons: [85, 86, 87], vocab: ["medizinDE", "psycheDE"], reading: "robertkoch", prompt: "de-b2-5",
    writing: { task: "You booked a stress-management course at the adult education centre, but you need an operation and can't attend. Write to the course leader, Frau Krüger (100-130 words): say why you're writing, explain your situation briefly, ask whether you can get a refund or join a later course, and thank her.", task_fr: "Tu as réservé un cours de gestion du stress à l'université populaire, mais tu dois te faire opérer et tu ne peux pas y participer. Écris à la responsable du cours, Frau Krüger (100 à 130 mots) : dis pourquoi tu écris, explique brièvement ta situation, demande un remboursement ou la possibilité de suivre un cours ultérieur, et remercie-la.", words: "100-130",
      tips: ["Sehr geehrte Frau Krüger,", "leider muss ich mich von … abmelden.", "Nach Auskunft meiner Ärztin…", "Wäre es möglich, …?", "Ich bedanke mich im Voraus für Ihr Verständnis."],
      checklist: ["I wrote a subject line and a formal greeting", "I said why I'm writing", "I explained my situation briefly", "I asked my questions politely", "I wrote between 100 and 130 words"],
      checklist_fr: ["J'ai écrit un objet et un appel formel", "J'ai dit pourquoi j'écris", "J'ai expliqué brièvement ma situation", "J'ai posé mes questions poliment", "J'ai écrit entre 100 et 130 mots"],
      model: "Betreff: Abmeldung vom Kurs „Gelassen durch den Alltag“\n\nSehr geehrte Frau Krüger,\n\nleider muss ich mich von dem Kurs abmelden, der am 3. März beginnt. Ich muss mich in der nächsten Woche einer Knieoperation unterziehen. Nach Auskunft meiner Ärztin werde ich mich frühestens in sechs Wochen davon erholt haben, sodass ich an den Terminen nicht teilnehmen kann. Eine ärztliche Bescheinigung schicke ich Ihnen gern zu.\n\nWäre es möglich, mir die Kursgebühr zu erstatten? Falls das nicht geht, würde ich gern an einem späteren Kurs teilnehmen. Könnten Sie mir mitteilen, wann der nächste Kurs stattfindet?\n\nIch bedanke mich im Voraus für Ihr Verständnis.\n\nMit freundlichen Grüßen\nRobin Keller" } });
})();
