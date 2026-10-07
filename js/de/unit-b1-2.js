/* Cours d'allemand, unité B1-2 « Work and careers / Travail et carrière » : la cause et la concession (weil, da, denn,
   deshalb, deswegen, darum, obwohl, trotzdem), le génitif et wegen / trotz / während / statt ; la candidature et
   l'entretien d'embauche. Explications et traductions en anglais ET en français. Personnages et entreprises fictifs.
   Faits vérifiables seulement : salaire minimum légal depuis 2015, revu sur proposition d'une commission ; congés
   légaux d'au moins 24 jours ouvrables (lundi-samedi), soit 20 jours pour une semaine de cinq jours ; maintien du
   salaire jusqu'à six semaines en cas de maladie, puis indemnités de la caisse d'assurance maladie ; période d'essai
   de six mois au plus, préavis de deux semaines pendant cette période, d'au moins quatre semaines ensuite ; droit à
   un certificat de travail écrit (Arbeitszeugnis) ; dossier de candidature : lettre, CV en tableau, certificats ;
   photo courante mais pas obligatoire. Écrit au format du Goethe-Zertifikat B1 (Schreiben, partie 2 : donner son
   avis sur un forum, environ 80 mots). */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "berufslebenDE", icon: "briefcase", title: "Working life", title_fr: "La vie professionnelle", level: "B1", words: [
    ["die Gewerkschaft, -en", "the trade union", "le syndicat", "Die Gewerkschaft fordert mehr Lohn."],
    ["der Lohn, ¨-e", "the wage", "le salaire (horaire), la paie", "Der Lohn ist im letzten Jahr gestiegen."],
    ["der Vertrag, ¨-e", "the contract", "le contrat", "Ich habe den Vertrag gestern unterschrieben."],
    ["befristet", "fixed-term", "à durée déterminée", "Mein Vertrag ist auf ein Jahr befristet."],
    ["unbefristet", "permanent (contract)", "à durée indéterminée", "Endlich habe ich einen unbefristeten Vertrag!"],
    ["die Probezeit", "the probation period", "la période d'essai", "Die Probezeit dauert sechs Monate."],
    ["der Streik, -s", "the strike", "la grève", "Wegen des Streiks fuhr heute kein Zug."],
    ["die Kündigung, -en", "the notice, the dismissal", "la démission, le licenciement", "Die Kündigung kam völlig überraschend."],
    ["die Überstunde, -n", "the hour of overtime", "l'heure supplémentaire", "Diese Woche habe ich zehn Überstunden gemacht."],
    ["der Arbeitgeber, -", "the employer", "l'employeur", "Mein Arbeitgeber bezahlt mir das Jobticket."],
    ["der Arbeitnehmer, -", "the employee", "le salarié", "Arbeitnehmer haben ein Recht auf bezahlten Urlaub."],
    ["die Beförderung, -en", "the promotion", "la promotion", "Nach zwei Jahren bekam sie eine Beförderung."],
    ["die Abteilung, -en", "the department", "le service, le département", "Sie arbeitet in der Abteilung Marketing."],
    ["der Betrieb, -e", "the company, the firm", "l'entreprise, l'exploitation", "Der Betrieb hat fünfzig Mitarbeiter."],
    ["einstellen", "to hire, to take on", "embaucher", "Die Firma stellt dieses Jahr zehn Leute ein."],
    ["das Homeoffice", "working from home", "le télétravail", "Freitags arbeite ich im Homeoffice."],
    ["die Weiterbildung, -en", "further training", "la formation continue", "Die Firma bezahlt mir eine Weiterbildung."]
  ] },
  { id: "bewerbungDE", icon: "file-signature", title: "Applying for a job", title_fr: "Postuler", level: "B1", words: [
    ["sich bewerben um", "to apply for", "postuler à, poser sa candidature pour", "Ich bewerbe mich um die Stelle als Projektleitung."],
    ["das Anschreiben, -", "the cover letter", "la lettre de motivation", "Im Anschreiben erklären Sie, warum Sie die Stelle wollen."],
    ["die Stellenanzeige, -n", "the job advert", "l'offre d'emploi (annonce)", "Ich habe Ihre Stellenanzeige im Internet gelesen."],
    ["das Zeugnis, -se", "the certificate; the (job) reference", "le diplôme, le bulletin ; le certificat de travail", "Kopien der Zeugnisse finden Sie im Anhang."],
    ["die Qualifikation, -en", "the qualification", "la qualification", "Welche Qualifikationen braucht man für diese Stelle?"],
    ["die Fähigkeit, -en", "the ability, the skill", "la capacité, la compétence", "Kommunikation ist eine wichtige Fähigkeit."],
    ["die Kenntnisse (pl)", "knowledge, skills", "les connaissances", "Gute Deutschkenntnisse sind wichtig."],
    ["die Stärke, -n", "the strength", "le point fort", "Meine Stärke ist die Organisation."],
    ["die Schwäche, -n", "the weakness", "le point faible", "Eine Schwäche von mir ist die Ungeduld."],
    ["zuverlässig", "reliable", "fiable", "Unsere Kunden brauchen zuverlässige Partner."],
    ["teamfähig", "a good team player", "qui a l'esprit d'équipe", "Wir suchen eine teamfähige Person."],
    ["belastbar", "able to work under pressure", "résistant au stress", "In diesem Job muss man belastbar sein."],
    ["zuständig für", "in charge of", "chargé de", "Frau Brandt ist für die Bewerbungen zuständig."],
    ["die Gehaltsvorstellung, -en", "the salary expectation", "la prétention salariale", "Was sind Ihre Gehaltsvorstellungen?"],
    ["der Probetag, -e", "the trial day", "la journée d'essai", "Kommen Sie doch zu einem Probetag."]
  ] });

  W.LESSONS.push(
  {
    id: 46, level: "B1", icon: "split",
    title: "weil, deshalb, obwohl, trotzdem: reasons and contrasts", title_fr: "weil, deshalb, obwohl, trotzdem : la cause et l'opposition",
    subtitle: "Same meaning, different word order: the trick is to know which group each word belongs to.", subtitle_fr: "Même sens, ordre des mots différent : tout l'art est de savoir à quel groupe appartient chaque mot.",
    body: `
<h2>Giving a reason: weil, da, denn</h2>
<p><s-de>weil</s-de> and <s-de>da</s-de> send the verb to the end: <s-de>Ich bleibe zu Hause, weil ich krank bin.</s-de> <s-de>da</s-de> is more formal and often starts the sentence: <s-de>Da der Zug Verspätung hatte, kam ich zu spät.</s-de> <s-de>denn</s-de> doesn't change the word order: <s-de>Ich bleibe zu Hause, denn ich bin krank.</s-de></p>
<h2>The consequence: deshalb, deswegen, darum</h2>
<p>All three mean "that's why". They take the first position, so the verb comes straight after: <s-de>Ich bin krank, deshalb bleibe ich zu Hause.</s-de> · <s-de>Der Bus kam nicht. Darum bin ich gelaufen.</s-de></p>
<h2>Despite: obwohl and trotzdem</h2>
<p><s-de>obwohl</s-de> (although) sends the verb to the end: <s-de>Obwohl ich müde bin, gehe ich ins Fitnessstudio.</s-de> <s-de>trotzdem</s-de> (nevertheless, still) takes the first position: <s-de>Ich bin müde. Trotzdem gehe ich ins Fitnessstudio.</s-de></p>
<table>
<tr><th>Word</th><th>Meaning</th><th>Verb</th></tr>
<tr><td><s-de>weil, da</s-de></td><td>because</td><td>at the end</td></tr>
<tr><td><s-de>denn</s-de></td><td>because</td><td>unchanged</td></tr>
<tr><td><s-de>deshalb, deswegen, darum</s-de></td><td>that's why</td><td>right after</td></tr>
<tr><td><s-de>obwohl</s-de></td><td>although</td><td>at the end</td></tr>
<tr><td><s-de>trotzdem</s-de></td><td>still</td><td>right after</td></tr>
</table>
<div class="tip">A classic mistake: <s-de>trotzdem</s-de> is not "although". English "although I'm tired" is <s-de>obwohl ich müde bin</s-de>; <s-de>trotzdem</s-de> comes in the second part: "I'm tired, but I still go": <s-de>Ich bin müde, trotzdem gehe ich.</s-de></div>
`,
    body_fr: `
<h2>Donner une raison : weil, da, denn</h2>
<p><s-de>weil</s-de> et <s-de>da</s-de> envoient le verbe à la fin : <s-de>Ich bleibe zu Hause, weil ich krank bin.</s-de> (Je reste à la maison parce que je suis malade.) <s-de>da</s-de> est plus soutenu et ouvre souvent la phrase, comme « comme » ou « étant donné que » : <s-de>Da der Zug Verspätung hatte, kam ich zu spät.</s-de> <s-de>denn</s-de> (car) ne change pas l'ordre des mots : <s-de>Ich bleibe zu Hause, denn ich bin krank.</s-de></p>
<h2>La conséquence : deshalb, deswegen, darum</h2>
<p>Les trois veulent dire « c'est pourquoi, donc ». Ils occupent la première position, et le verbe vient juste après : <s-de>Ich bin krank, deshalb bleibe ich zu Hause.</s-de> · <s-de>Der Bus kam nicht. Darum bin ich gelaufen.</s-de></p>
<h2>L'opposition : obwohl et trotzdem</h2>
<p><s-de>obwohl</s-de> (bien que, alors que) envoie le verbe à la fin : <s-de>Obwohl ich müde bin, gehe ich ins Fitnessstudio.</s-de> <s-de>trotzdem</s-de> (quand même, pourtant) occupe la première position : <s-de>Ich bin müde. Trotzdem gehe ich ins Fitnessstudio.</s-de></p>
<table>
<tr><th>Mot</th><th>Sens</th><th>Verbe</th></tr>
<tr><td><s-de>weil, da</s-de></td><td>parce que</td><td>à la fin</td></tr>
<tr><td><s-de>denn</s-de></td><td>car</td><td>inchangé</td></tr>
<tr><td><s-de>deshalb, deswegen, darum</s-de></td><td>c'est pourquoi</td><td>juste après</td></tr>
<tr><td><s-de>obwohl</s-de></td><td>bien que</td><td>à la fin</td></tr>
<tr><td><s-de>trotzdem</s-de></td><td>quand même</td><td>juste après</td></tr>
</table>
<div class="tip">Bonne nouvelle : après <s-de>obwohl</s-de>, pas de subjonctif comme après « bien que ». Le verbe va simplement à la fin : <s-de>obwohl es regnet</s-de> (bien qu'il pleuve).</div>
`,
    examples: [
      ["Ich bleibe heute zu Hause, weil ich erkältet bin.", "I'm staying at home today because I've got a cold.", "Je reste à la maison aujourd'hui parce que j'ai un rhume."],
      ["Da der Zug Verspätung hatte, kam ich zu spät zur Besprechung.", "As the train was late, I was late for the meeting.", "Comme le train avait du retard, j'ai raté le début de la réunion."],
      ["Ich mache heute keine Überstunden, denn ich habe einen Termin.", "I'm not doing overtime today, because I have an appointment.", "Je ne fais pas d'heures supplémentaires aujourd'hui, car j'ai un rendez-vous."],
      ["Die Firma sucht Leute, deshalb stellt sie dieses Jahr zehn Personen ein.", "The company needs people, that's why it's hiring ten this year.", "L'entreprise cherche du monde, c'est pourquoi elle embauche dix personnes cette année."],
      ["Obwohl das Gehalt niedrig ist, macht mir die Arbeit Spaß.", "Although the salary is low, I enjoy the work.", "Bien que le salaire soit bas, mon travail me plaît."],
      ["Es regnete stark. Trotzdem fuhr sie mit dem Fahrrad ins Büro.", "It was raining hard. She still cycled to the office.", "Il pleuvait fort. Elle est quand même allée au bureau à vélo."],
      ["Ich habe wenig Zeit. Darum schreibe ich dir nur kurz.", "I don't have much time. That's why I'm only writing briefly.", "J'ai peu de temps. C'est pour ça que je t'écris juste un petit mot."]
    ],
    quiz: [
      { q: "“Ich gehe nicht mit, ___ ich keine Zeit habe.”", q_fr: "« Ich gehe nicht mit, ___ ich keine Zeit habe. »", o: ["weil", "denn", "deshalb"], a: 0, ex: "The verb (habe) is at the end: weil.", ex_fr: "Le verbe (habe) est à la fin : weil." },
      { q: "“Ich bin krank, ___ bleibe ich zu Hause.”", q_fr: "« Ich bin krank, ___ bleibe ich zu Hause. »", o: ["deshalb", "weil", "obwohl"], a: 0, ex: "The verb comes right after: deshalb (that's why).", ex_fr: "Le verbe vient juste après : deshalb (c'est pourquoi)." },
      { q: "“Although it's raining, we're going for a walk.”", q_fr: "« Bien qu'il pleuve, nous allons nous promener. »", o: ["Obwohl es regnet, gehen wir spazieren.", "Trotzdem es regnet, gehen wir spazieren.", "Obwohl es regnet, wir gehen spazieren."], a: 0, ex: "obwohl + verb at the end, then the main verb first.", ex_fr: "obwohl + verbe à la fin, puis le verbe principal en tête." },
      { q: "Which sentence is correct?", q_fr: "Quelle phrase est correcte ?", o: ["Ich bin müde, trotzdem lerne ich weiter.", "Ich bin müde, trotzdem ich lerne weiter.", "Ich bin müde, trotzdem ich weiter lerne."], a: 0, ex: "trotzdem takes the first position: the verb comes next.", ex_fr: "trotzdem occupe la première position : le verbe vient juste après." },
      { q: "“Ich nehme ein Taxi, ___ der Bus kommt heute nicht.”", q_fr: "« Ich nehme ein Taxi, ___ der Bus kommt heute nicht. »", o: ["denn", "weil", "da"], a: 0, ex: "Normal word order (kommt in second position): denn.", ex_fr: "Ordre normal (kommt en deuxième position) : denn." }
    ]
  },
  {
    id: 47, level: "B1", icon: "link",
    title: "Wegen des Streiks: the genitive", title_fr: "Wegen des Streiks : le génitif",
    subtitle: "Whose is it? And four prepositions that like the genitive: wegen, trotz, während, statt.", subtitle_fr: "À qui est-ce ? Et quatre prépositions qui aiment le génitif : wegen, trotz, während, statt.",
    body: `
<h2>The genitive: whose?</h2>
<p>Masculine and neuter: <s-de>des</s-de> + noun with <b>-s</b> or <b>-es</b>: <s-de>das Büro des Chefs</s-de> (the boss's office) · <s-de>das Ende des Jahres</s-de>. Feminine and plural: <s-de>der</s-de>, no ending: <s-de>die Adresse der Firma</s-de> · <s-de>die Meinung der Kollegen</s-de>. With ein: <s-de>eines Kunden, einer Kollegin</s-de>.</p>
<table>
<tr><th></th><th>der / die / das</th><th>ein / eine</th></tr>
<tr><td>masc.</td><td><s-de>des Chefs</s-de></td><td><s-de>eines Chefs</s-de></td></tr>
<tr><td>fem.</td><td><s-de>der Firma</s-de></td><td><s-de>einer Firma</s-de></td></tr>
<tr><td>neut.</td><td><s-de>des Jahres</s-de></td><td><s-de>eines Jahres</s-de></td></tr>
<tr><td>plural</td><td><s-de>der Kollegen</s-de></td><td>–</td></tr>
</table>
<p>With names, just add -s, without an apostrophe: <s-de>Annas Büro</s-de>. In everyday speech, Germans often say <s-de>von</s-de> + dative instead: <s-de>das Auto von meinem Chef</s-de>.</p>
<h2>Prepositions with the genitive</h2>
<p><s-de>wegen</s-de> (because of): <s-de>Wegen des Streiks fuhr kein Zug.</s-de> · <s-de>trotz</s-de> (despite): <s-de>Trotz des Regens gingen wir spazieren.</s-de> · <s-de>während</s-de> (during): <s-de>während der Arbeit</s-de> · <s-de>statt</s-de> (instead of): <s-de>Statt eines Briefes schrieb sie eine E-Mail.</s-de></p>
<div class="tip">In spoken German, many people use the dative after <s-de>wegen</s-de> and <s-de>trotz</s-de> (<s-de>wegen dem Wetter</s-de>); in writing and in exams, use the genitive. And compare: <s-de>wegen</s-de> + a noun, <s-de>weil</s-de> + a whole clause: <s-de>wegen des Regens</s-de> = <s-de>weil es regnet</s-de>.</div>
`,
    body_fr: `
<h2>Le génitif : à qui ?</h2>
<p>Masculin et neutre : <s-de>des</s-de> + nom avec <b>-s</b> ou <b>-es</b> : <s-de>das Büro des Chefs</s-de> (le bureau du chef) · <s-de>das Ende des Jahres</s-de> (la fin de l'année). Féminin et pluriel : <s-de>der</s-de>, sans terminaison : <s-de>die Adresse der Firma</s-de> · <s-de>die Meinung der Kollegen</s-de>. Avec ein : <s-de>eines Kunden, einer Kollegin</s-de>.</p>
<table>
<tr><th></th><th>der / die / das</th><th>ein / eine</th></tr>
<tr><td>masc.</td><td><s-de>des Chefs</s-de></td><td><s-de>eines Chefs</s-de></td></tr>
<tr><td>fém.</td><td><s-de>der Firma</s-de></td><td><s-de>einer Firma</s-de></td></tr>
<tr><td>neutre</td><td><s-de>des Jahres</s-de></td><td><s-de>eines Jahres</s-de></td></tr>
<tr><td>pluriel</td><td><s-de>der Kollegen</s-de></td><td>–</td></tr>
</table>
<p>Avec un prénom, on ajoute juste -s, sans apostrophe : <s-de>Annas Büro</s-de> (le bureau d'Anna). À l'oral, on dit souvent <s-de>von</s-de> + datif à la place : <s-de>das Auto von meinem Chef</s-de>.</p>
<h2>Les prépositions suivies du génitif</h2>
<p><s-de>wegen</s-de> (à cause de) : <s-de>Wegen des Streiks fuhr kein Zug.</s-de> · <s-de>trotz</s-de> (malgré) : <s-de>Trotz des Regens gingen wir spazieren.</s-de> · <s-de>während</s-de> (pendant) : <s-de>während der Arbeit</s-de> · <s-de>statt</s-de> (au lieu de) : <s-de>Statt eines Briefes schrieb sie eine E-Mail.</s-de></p>
<div class="tip">À l'oral, beaucoup emploient le datif après <s-de>wegen</s-de> et <s-de>trotz</s-de> (<s-de>wegen dem Wetter</s-de>) ; à l'écrit et à l'examen, utilise le génitif. Et compare : <s-de>wegen</s-de> + un nom, <s-de>weil</s-de> + une proposition entière : <s-de>wegen des Regens</s-de> = <s-de>weil es regnet</s-de>, comme « à cause de la pluie » et « parce qu'il pleut ».</div>
`,
    examples: [
      ["Das Büro des Chefs ist im dritten Stock.", "The boss's office is on the third floor.", "Le bureau du chef est au troisième étage."],
      ["Am Ende des Monats bekomme ich mein Gehalt.", "I get my salary at the end of the month.", "Je reçois mon salaire à la fin du mois."],
      ["Die Meinung der Kollegen ist mir wichtig.", "My colleagues' opinion matters to me.", "L'avis de mes collègues compte pour moi."],
      ["Wegen des Streiks fuhr heute kein Zug.", "Because of the strike, there were no trains today.", "À cause de la grève, aucun train n'a circulé aujourd'hui."],
      ["Trotz des schlechten Wetters kamen viele Leute.", "Despite the bad weather, a lot of people came.", "Malgré le mauvais temps, beaucoup de gens sont venus."],
      ["Während der Probezeit kann man schneller kündigen.", "During the probation period, you can give notice more quickly.", "Pendant la période d'essai, on peut démissionner plus rapidement."],
      ["Statt eines Anrufs schickte sie eine Nachricht.", "Instead of a call, she sent a message.", "Au lieu d'appeler, elle a envoyé un message."]
    ],
    quiz: [
      { q: "“das Ende ___ Jahres”", q_fr: "« das Ende ___ Jahres »", o: ["des", "der", "dem"], a: 0, ex: "das Jahr, neuter: des Jahres.", ex_fr: "das Jahr, neutre : des Jahres." },
      { q: "“die Adresse ___ Firma”", q_fr: "« die Adresse ___ Firma »", o: ["der", "des", "die"], a: 0, ex: "die Firma, feminine: der Firma.", ex_fr: "die Firma, féminin : der Firma." },
      { q: "“Because of the rain, the match was cancelled.”", q_fr: "« À cause de la pluie, le match a été annulé. »", o: ["Wegen des Regens fiel das Spiel aus.", "Weil des Regens fiel das Spiel aus.", "Wegen der Regen fiel das Spiel aus."], a: 0, ex: "wegen + genitive: des Regens (der Regen).", ex_fr: "wegen + génitif : des Regens (der Regen)." },
      { q: "“Anna's office”:", q_fr: "« Le bureau d'Anna » :", o: ["Annas Büro", "Anna's Büro", "das Büro des Anna"], a: 0, ex: "Names: just -s, no apostrophe.", ex_fr: "Prénoms : juste -s, sans apostrophe." },
      { q: "“___ der Arbeit trinke ich viel Kaffee.” (during)", q_fr: "« ___ der Arbeit trinke ich viel Kaffee. » (pendant)", o: ["Während", "Trotz", "Statt"], a: 0, ex: "während = during.", ex_fr: "während = pendant." }
    ]
  },
  {
    id: 48, level: "B1", kind: "functional", icon: "file-signature",
    title: "Everyday German: applying for a job", title_fr: "L'allemand de tous les jours : postuler à un emploi",
    subtitle: "The German application, the classic interview questions, and how to answer them well.", subtitle_fr: "Le dossier de candidature allemand, les questions classiques de l'entretien, et comment bien y répondre.",
    body: `
<h2>The application</h2>
<p>A German application usually has three parts: the cover letter (<s-de>das Anschreiben</s-de>), the CV (<s-de>der Lebenslauf</s-de>, set out as a table, most recent first) and certificates and references (<s-de>die Zeugnisse</s-de>). A photo is common but not compulsory. When you leave a job, you have the right to a written reference from your employer, the <s-de>Arbeitszeugnis</s-de>.</p>
<h2>Classic interview questions</h2>
<p><s-de>Erzählen Sie doch etwas über sich.</s-de> · <s-de>Warum möchten Sie bei uns arbeiten?</s-de> · <s-de>Was sind Ihre Stärken und Schwächen?</s-de> · <s-de>Wo sehen Sie sich in fünf Jahren?</s-de> · <s-de>Was sind Ihre Gehaltsvorstellungen?</s-de></p>
<h2>Answering well</h2>
<p>Give a reason and an example: <s-de>Ich bin sehr zuverlässig: In meiner letzten Stelle war ich für den Dienstplan verantwortlich.</s-de> For a weakness, show what you do about it: <s-de>Ich bin manchmal ungeduldig. Deshalb mache ich mir jeden Morgen eine Liste mit Prioritäten.</s-de> At the end, ask your own questions: <s-de>Wie sieht ein typischer Arbeitstag aus?</s-de> · <s-de>Gibt es Möglichkeiten zur Weiterbildung?</s-de></p>
<div class="tip">In German, adjectives after <s-de>sein</s-de> never change: <s-de>Ich bin zuverlässig, flexibel und teamfähig</s-de> works for everyone. To talk about your studies, the verb is the simplest: <s-de>Ich studiere Informatik</s-de> · <s-de>Ich habe Wirtschaft studiert</s-de>.</div>
`,
    body_fr: `
<h2>Le dossier de candidature</h2>
<p>Une candidature allemande comprend en général trois parties : la lettre de motivation (<s-de>das Anschreiben</s-de>), le CV (<s-de>der Lebenslauf</s-de>, présenté sous forme de tableau, le plus récent en premier) et les diplômes et certificats (<s-de>die Zeugnisse</s-de>). Une photo est courante, mais pas obligatoire. Quand on quitte un emploi, on a droit à un certificat de travail écrit de son employeur, le <s-de>Arbeitszeugnis</s-de>.</p>
<h2>Les questions classiques de l'entretien</h2>
<p><s-de>Erzählen Sie doch etwas über sich.</s-de> (Parlez-nous un peu de vous.) · <s-de>Warum möchten Sie bei uns arbeiten?</s-de> · <s-de>Was sind Ihre Stärken und Schwächen?</s-de> · <s-de>Wo sehen Sie sich in fünf Jahren?</s-de> · <s-de>Was sind Ihre Gehaltsvorstellungen?</s-de> (Quelles sont vos prétentions salariales ?)</p>
<h2>Bien répondre</h2>
<p>Donne une raison et un exemple : <s-de>Ich bin sehr zuverlässig: In meiner letzten Stelle war ich für den Dienstplan verantwortlich.</s-de> Pour un point faible, montre ce que tu fais pour y remédier : <s-de>Ich bin manchmal ungeduldig. Deshalb mache ich mir jeden Morgen eine Liste mit Prioritäten.</s-de> À la fin, pose tes propres questions : <s-de>Wie sieht ein typischer Arbeitstag aus?</s-de> · <s-de>Gibt es Möglichkeiten zur Weiterbildung?</s-de></p>
<div class="tip">En allemand, l'adjectif après <s-de>sein</s-de> ne s'accorde jamais : <s-de>Ich bin zuverlässig, flexibel und teamfähig</s-de> convient à tout le monde : aucun accord à faire. Pour parler de tes études, le verbe est le plus simple : <s-de>Ich studiere Informatik</s-de> · <s-de>Ich habe Wirtschaft studiert</s-de>.</div>
`,
    examples: [
      ["Ich bewerbe mich um die Stelle im Verkauf.", "I'm applying for the sales position.", "Je postule pour le poste dans la vente."],
      ["Erzählen Sie doch etwas über sich.", "Tell us a little about yourself.", "Parlez-nous un peu de vous."],
      ["Ich habe fünf Jahre Erfahrung im Kundenservice.", "I have five years' experience in customer service.", "J'ai cinq ans d'expérience au service client."],
      ["In meiner letzten Stelle war ich für den Dienstplan verantwortlich.", "In my last job I was responsible for the staff rota.", "Dans mon dernier poste, j'étais responsable du planning."],
      ["Ich bin manchmal ungeduldig. Deshalb mache ich mir eine Liste mit Prioritäten.", "I'm sometimes impatient. That's why I make myself a list of priorities.", "L'impatience est parfois mon défaut. C'est pourquoi je me fais une liste de priorités."],
      ["Wie sieht ein typischer Arbeitstag bei Ihnen aus?", "What does a typical working day look like with you?", "À quoi ressemble une journée de travail type chez vous ?"],
      ["Gibt es Möglichkeiten zur Weiterbildung?", "Are there opportunities for further training?", "Y a-t-il des possibilités de formation continue ?"]
    ],
    quiz: [
      { q: "The three classic parts of a German application:", q_fr: "Les trois parties classiques d'une candidature allemande :", o: ["Anschreiben, Lebenslauf, Zeugnisse", "Foto, Pass, Lebenslauf", "Anschreiben, Gehalt, Vertrag"], a: 0, ex: "Cover letter, CV, certificates and references.", ex_fr: "Lettre de motivation, CV, diplômes et certificats." },
      { q: "In a German application, a photo is:", q_fr: "Dans une candidature allemande, la photo est :", o: ["common, but not compulsory", "forbidden", "compulsory"], o_fr: ["courante, mais pas obligatoire", "interdite", "obligatoire"], a: 0, ex: "Many applicants include one, but it's not required.", ex_fr: "Beaucoup en mettent une, mais elle n'est pas exigée." },
      { q: "“What are your salary expectations?”", q_fr: "« Quelles sont vos prétentions salariales ? »", o: ["Was sind Ihre Gehaltsvorstellungen?", "Was ist Ihr Lohnwunsch?", "Wie viel Geld haben Sie?"], a: 0, ex: "die Gehaltsvorstellung.", ex_fr: "die Gehaltsvorstellung." },
      { q: "A good way to talk about a weakness:", q_fr: "Une bonne façon de parler d'un point faible :", o: ["Ich bin manchmal ungeduldig. Deshalb plane ich meinen Tag genau.", "Ich habe keine Schwächen.", "Ich bin oft zu spät, aber das ist egal."], o_fr: ["Ich bin manchmal ungeduldig. Deshalb plane ich meinen Tag genau.", "Ich habe keine Schwächen.", "Ich bin oft zu spät, aber das ist egal."], a: 0, ex: "Name it, then say what you do about it.", ex_fr: "Nomme-le, puis dis ce que tu fais pour y remédier." },
      { q: "When you leave a job in Germany, you have the right to:", q_fr: "Quand on quitte un emploi en Allemagne, on a droit à :", o: ["a written reference (Arbeitszeugnis)", "a year's salary", "a new contract"], o_fr: ["un certificat de travail écrit (Arbeitszeugnis)", "une année de salaire", "un nouveau contrat"], a: 0, ex: "das Arbeitszeugnis.", ex_fr: "das Arbeitszeugnis." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    46: {
      gap: [["Ich komme nicht, ___ ich krank bin.", "weil"], ["Der Bus kam nicht, ___ bin ich gelaufen.", "deshalb|deswegen|darum", "that's why", "c'est pourquoi"], ["___ es regnet, gehen wir spazieren.", "Obwohl", "although", "bien que"], ["Es ist spät. ___ arbeitet sie weiter.", "Trotzdem", "still, nevertheless", "quand même"]],
      fix: [["Ich bin müde, deshalb ich gehe ins Bett.", "Ich bin müde, deshalb gehe ich ins Bett.", "After deshalb, the verb comes next.", "Après deshalb, le verbe vient juste après."], ["Trotzdem es kalt ist, trägt er keine Jacke.", "Obwohl es kalt ist, trägt er keine Jacke.", "Although = obwohl (verb at the end); trotzdem means still.", "Bien que = obwohl (verbe à la fin) ; trotzdem veut dire quand même."]],
      task: ["Write four sentences about your work or studies with weil, deshalb, obwohl and trotzdem.", "Écris quatre phrases sur ton travail ou tes études avec weil, deshalb, obwohl et trotzdem.", "Ich arbeite gern im Krankenhaus, weil ich Menschen helfen möchte. Die Arbeit ist oft anstrengend, deshalb brauche ich am Wochenende viel Ruhe. Obwohl ich manchmal nachts arbeiten muss, mag ich meinen Beruf. Das Gehalt ist nicht sehr hoch. Trotzdem würde ich nichts anderes machen wollen."]
    },
    47: {
      gap: [["Das Ende ___ Jahres ist immer stressig.", "des"], ["Die Meinung ___ Kollegen ist mir wichtig.", "der"], ["___ des Streiks fuhr kein Zug.", "Wegen", "because of", "à cause de"], ["Trotz ___ Regens gingen wir spazieren.", "des"]],
      fix: [["Das ist Anna's Büro.", "Das ist Annas Büro.", "German names take -s without an apostrophe.", "En allemand, le prénom prend -s sans apostrophe."], ["Weil des Wetters bleiben wir zu Hause.", "Wegen des Wetters bleiben wir zu Hause.", "Before a noun: wegen; weil introduces a clause.", "Devant un nom : wegen ; weil introduit une proposition."]],
      task: ["Rewrite these ideas with wegen, trotz, während and statt: the strike, the rain, the meeting, a letter.", "Réécris ces idées avec wegen, trotz, während et statt : la grève, la pluie, la réunion, une lettre.", "Wegen des Streiks bin ich mit dem Fahrrad gefahren. Trotz des Regens war ich pünktlich. Während der Besprechung habe ich mein Handy ausgeschaltet. Statt eines Briefes habe ich eine E-Mail geschrieben."]
    },
    48: {
      gap: [["Ich ___ mich um die Stelle im Verkauf.", "bewerbe", "to apply", "postuler"], ["Bitte schicken Sie uns Ihren ___.", "Lebenslauf", "CV", "CV"], ["Ich war für das Lager ___.", "verantwortlich", "responsible", "responsable"], ["Was sind Ihre ___?", "Gehaltsvorstellungen", "salary expectations", "prétentions salariales"]],
      fix: [["Ich bewerbe für die Stelle.", "Ich bewerbe mich um die Stelle.", "sich bewerben um: reflexive, with um.", "sich bewerben um : verbe réfléchi, avec um."], ["Ich habe fünf Jahre Erfahrungen im Verkauf.", "Ich habe fünf Jahre Erfahrung im Verkauf.", "Years of experience: Erfahrung, in the singular.", "Des années d'expérience : Erfahrung, au singulier."]],
      task: ["Answer three interview questions in two sentences each: about yourself, your strengths, and why you want the job.", "Réponds à trois questions d'entretien, en deux phrases chacune : sur toi, tes points forts, et pourquoi tu veux ce poste.", "Ich habe Tourismus studiert und arbeite seit drei Jahren in einem Hotel in Köln. Dort bin ich für den Empfang verantwortlich. Meine Stärke ist die Kommunikation: Ich spreche vier Sprachen und bleibe auch bei Stress freundlich. Ich möchte bei Ihnen arbeiten, weil Ihr Hotel international ist. Deshalb kann ich dort meine Sprachen jeden Tag benutzen."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "homeofficetag", lesson: 46, level: "B1", icon: "house", partner: "Herr Seidel", role: "your boss", role_fr: "ton chef",
    title: "Asking for a day of working from home", title_fr: "Demander un jour de télétravail",
    setting: "Your journey to work takes over an hour. You ask your boss, Herr Seidel, if you can work from home one day a week.", setting_fr: "Ton trajet pour aller au travail dure plus d'une heure. Tu demandes à ton chef, M. Seidel, si tu peux télétravailler un jour par semaine.",
    turns: [
      { p: "Sie wollten mich sprechen? Worum geht es?", en: "You wanted to talk to me? What's it about?", fr: "Vous vouliez me parler ? De quoi s'agit-il ?" },
      { y: ["Ich möchte gern einen Tag pro Woche im Homeoffice arbeiten, weil mein Weg zur Arbeit sehr lang ist.", "Ich möchte gern einen Tag pro Woche im Homeoffice arbeiten, weil mein Weg zur Arbeit ist sehr lang.", "Ich möchte gern einen Tag pro Woche im Homeoffice arbeiten, denn mein Weg zur Arbeit sehr lang ist."], en: "I'd like to work from home one day a week, because my journey to work is very long.", fr: "J'aimerais télétravailler un jour par semaine, parce que mon trajet est très long.", why: "weil: the verb at the end (ist).", why_fr: "weil : le verbe à la fin (ist)." },
      { p: "Hm. Aber im Team sind die Besprechungen sehr wichtig.", en: "Hm. But meetings are very important in the team.", fr: "Hum. Mais dans l'équipe, les réunions sont très importantes." },
      { y: ["Das verstehe ich. Deshalb schlage ich den Freitag vor: Freitags gibt es keine Besprechungen.", "Das verstehe ich. Deshalb ich schlage den Freitag vor: Freitags gibt es keine Besprechungen.", "Das verstehe ich. Weil schlage ich den Freitag vor: Freitags gibt es keine Besprechungen."], en: "I understand. That's why I suggest Friday: there are no meetings on Fridays.", fr: "Je comprends. C'est pourquoi je propose le vendredi : le vendredi, il n'y a pas de réunion.", why: "deshalb takes the first position: schlage ich.", why_fr: "deshalb occupe la première position : schlage ich." },
      { p: "Und wie erreiche ich Sie, wenn es ein Problem gibt?", en: "And how do I reach you if there's a problem?", fr: "Et comment je vous joins s'il y a un problème ?" },
      { y: ["Ich bin den ganzen Tag per Telefon und E-Mail erreichbar, obwohl ich nicht im Büro bin.", "Ich bin den ganzen Tag per Telefon und E-Mail erreichbar, obwohl ich bin nicht im Büro.", "Ich bin den ganzen Tag per Telefon und E-Mail erreichbar, trotzdem ich nicht im Büro bin."], en: "I can be reached by phone and email all day, even though I'm not in the office.", fr: "Je suis joignable toute la journée par téléphone et par e-mail, même si je ne suis pas au bureau.", why: "obwohl: the verb at the end.", why_fr: "obwohl : le verbe à la fin." },
      { p: "Gut. Aber wegen der neuen Kunden brauche ich Sie im Moment oft hier.", en: "Fine. But because of the new clients, I often need you here at the moment.", fr: "Bon. Mais à cause des nouveaux clients, j'ai souvent besoin de vous ici en ce moment." },
      { y: ["Das ist kein Problem. Trotzdem wäre ein Tag pro Woche eine große Hilfe für mich.", "Das ist kein Problem. Trotzdem ein Tag pro Woche wäre eine große Hilfe für mich.", "Das ist kein Problem. Obwohl wäre ein Tag pro Woche eine große Hilfe für mich."], en: "That's no problem. Still, one day a week would be a great help to me.", fr: "Ce n'est pas un problème. Malgré tout, un jour par semaine m'aiderait beaucoup.", why: "trotzdem takes the first position: wäre comes next.", why_fr: "trotzdem occupe la première position : wäre vient juste après." },
      { p: "Na gut. Probieren wir es drei Monate lang aus. Dann sprechen wir noch einmal darüber.", en: "All right. Let's try it for three months. Then we'll talk about it again.", fr: "Bon, d'accord. Essayons pendant trois mois. Ensuite, on en reparle." },
      { y: ["Vielen Dank! Ich bin sicher, dass es gut funktionieren wird.", "Vielen Dank! Ich bin sicher, dass es wird gut funktionieren.", "Vielen Dank! Ich bin sicher, dass es gut funktionieren werden."], en: "Thank you very much! I'm sure it will work well.", fr: "Merci beaucoup ! C'est sûr, ça va bien fonctionner.", why: "dass: the verb at the end (funktionieren wird).", why_fr: "dass : le verbe à la fin (funktionieren wird)." }
    ] },
  { id: "jobinterview", lesson: 48, level: "B1", icon: "file-signature", partner: "Frau Lorenz", role: "the HR manager of a bike shop chain", role_fr: "la responsable du personnel d'une chaîne de magasins de vélos",
    title: "The job interview", title_fr: "L'entretien d'embauche",
    setting: "You've applied for a sales job at a chain of bike shops. Frau Lorenz interviews you.", setting_fr: "Tu as postulé pour un poste dans la vente chez une chaîne de magasins de vélos. Mme Lorenz te fait passer l'entretien.",
    turns: [
      { p: "Guten Tag, schön, dass Sie da sind. Erzählen Sie doch erst einmal etwas über sich.", en: "Hello, nice to have you here. First, tell me a little about yourself.", fr: "Bonjour, merci d'être là. Parlez-moi d'abord un peu de vous." },
      { y: ["Gern. Ich habe Wirtschaft studiert und arbeite seit drei Jahren im Verkauf.", "Gern. Ich habe studiert Wirtschaft und arbeite seit drei Jahren im Verkauf.", "Gern. Ich habe Wirtschaft studiert und arbeite seit drei Jahren in Verkauf."], en: "Gladly. I studied economics and I've been working in sales for three years.", fr: "Avec plaisir. J'ai fait des études d'économie et je travaille dans la vente depuis trois ans.", why: "The participle at the end (studiert); seit + present for something still going on.", why_fr: "Le participe à la fin (studiert) ; seit + présent pour ce qui dure encore." },
      { p: "Und warum möchten Sie bei uns arbeiten?", en: "And why would you like to work for us?", fr: "Et pourquoi voulez-vous travailler chez nous ?" },
      { y: ["Weil ich selbst viel Fahrrad fahre. Deshalb kenne ich Ihre Produkte gut.", "Weil ich selbst viel Fahrrad fahre. Deshalb ich kenne Ihre Produkte gut.", "Weil fahre ich selbst viel Fahrrad. Deshalb kenne ich Ihre Produkte gut."], en: "Because I cycle a lot myself. That's why I know your products well.", fr: "Parce que je fais beaucoup de vélo moi-même. C'est pourquoi je connais bien vos produits.", why: "weil: verb at the end; deshalb: verb right after.", why_fr: "weil : verbe à la fin ; deshalb : verbe juste après." },
      { p: "Was sind Ihre Stärken?", en: "What are your strengths?", fr: "Quels sont vos points forts ?" },
      { y: ["Ich bin zuverlässig und teamfähig. In meiner letzten Stelle war ich zum Beispiel für das Lager verantwortlich.", "Ich bin zuverlässig und teamfähig. In meiner letzten Stelle ich war zum Beispiel für das Lager verantwortlich.", "Ich bin zuverlässig und teamfähig. In meiner letzten Stelle war ich zum Beispiel von dem Lager verantwortlich."], en: "I'm reliable and a good team player. In my last job, for example, I was responsible for the warehouse.", fr: "Je suis fiable et j'ai l'esprit d'équipe. Dans mon dernier poste, par exemple, j'étais responsable de l'entrepôt.", why: "Verb second (war ich); verantwortlich für.", why_fr: "Verbe en deuxième position (war ich) ; verantwortlich für." },
      { p: "Und Ihre Schwächen?", en: "And your weaknesses?", fr: "Et vos points faibles ?" },
      { y: ["Ich bin manchmal ungeduldig. Deshalb mache ich mir jeden Morgen eine Liste mit Prioritäten.", "Ich bin manchmal ungeduldig. Deshalb ich mache mir jeden Morgen eine Liste mit Prioritäten.", "Ich bin manchmal ungeduldig. Obwohl mache ich mir jeden Morgen eine Liste mit Prioritäten."], en: "I'm sometimes impatient. That's why I make myself a list of priorities every morning.", fr: "L'impatience est parfois mon défaut. C'est pourquoi je me fais chaque matin une liste de priorités.", why: "deshalb: the verb right after.", why_fr: "deshalb : le verbe juste après." },
      { p: "Gut. Haben Sie noch Fragen an uns?", en: "Good. Do you have any questions for us?", fr: "Bien. Avez-vous des questions à nous poser ?" },
      { y: ["Ja: Wie sieht ein typischer Arbeitstag bei Ihnen aus?", "Ja: Wie sieht ein typischer Arbeitstag bei Ihnen?", "Ja: Wie aussieht ein typischer Arbeitstag bei Ihnen?"], en: "Yes: what does a typical working day look like with you?", fr: "Oui : à quoi ressemble une journée de travail type chez vous ?", why: "aussehen is separable: Wie sieht … aus?", why_fr: "aussehen est séparable : Wie sieht … aus?" },
      { p: "Das zeige ich Ihnen gern bei einem Probetag. Hätten Sie nächste Woche Zeit?", en: "I'll gladly show you on a trial day. Would you have time next week?", fr: "Je vous le montrerai volontiers lors d'une journée d'essai. Auriez-vous du temps la semaine prochaine ?" },
      { y: ["Ja, gern. Wegen meiner jetzigen Arbeit passt mir der Montag am besten.", "Ja, gern. Wegen meine jetzige Arbeit passt mir der Montag am besten.", "Ja, gern. Weil meiner jetzigen Arbeit passt mir der Montag am besten."], en: "Yes, gladly. Because of my current job, Monday suits me best.", fr: "Oui, avec plaisir. À cause de mon travail actuel, le lundi m'arrange le mieux.", why: "wegen + genitive: meiner jetzigen Arbeit.", why_fr: "wegen + génitif : meiner jetzigen Arbeit." }
    ] }
  );

  W.READINGS.push({
    id: "arbeitsrechte", level: "B1", icon: "book-open", title: "Arbeiten in Deutschland: Was gilt?", genre: "Explainer",
    intro: "Minimum wage, holidays, sick pay, notice: the basics of working in Germany.",
    intro_fr: "Salaire minimum, congés, arrêt maladie, préavis : l'essentiel pour travailler en Allemagne.",
    paragraphs: [
      { de: "Seit 2015 gibt es in Deutschland einen gesetzlichen Mindestlohn. Seine Höhe bleibt nicht gleich: Eine Kommission aus Arbeitgebern, Gewerkschaften und Fachleuten macht regelmäßig Vorschläge für eine Erhöhung.", en: "Since 2015, Germany has had a statutory minimum wage. Its level doesn't stay the same: a commission of employers, trade unions and experts regularly proposes increases.", fr: "Depuis 2015, l'Allemagne a un salaire minimum légal. Son montant ne reste pas le même : une commission composée d'employeurs, de syndicats et d'experts propose régulièrement des hausses." },
      { de: "Wer fünf Tage pro Woche arbeitet, hat laut Gesetz mindestens zwanzig Tage bezahlten Urlaub im Jahr, also vier Wochen. Viele Arbeitsverträge geben aber mehr, oft fünfundzwanzig bis dreißig Tage. Dazu kommen die Feiertage, die je nach Bundesland verschieden sind.", en: "Anyone who works five days a week is entitled by law to at least twenty days of paid holiday a year, that is, four weeks. But many contracts give more, often twenty-five to thirty days. On top of that come public holidays, which differ from one federal state to another.", fr: "Quand on travaille cinq jours par semaine, la loi prévoit au moins vingt jours de congés payés par an, soit quatre semaines. Mais beaucoup de contrats en donnent plus, souvent vingt-cinq à trente jours. À cela s'ajoutent les jours fériés, qui varient selon le Land." },
      { de: "Wer krank ist, bekommt trotzdem seinen Lohn: Der Arbeitgeber zahlt in der Regel bis zu sechs Wochen weiter. Danach bekommt man Krankengeld von der Krankenkasse. Wichtig ist eine Krankmeldung vom Arzt, meistens ab dem vierten Tag.", en: "If you're ill, you still get paid: the employer usually continues to pay for up to six weeks. After that, you receive sickness benefit from your health insurance fund. What matters is a sick note from the doctor, usually from the fourth day.", fr: "Quand on est malade, on touche quand même son salaire : l'employeur continue en général de payer jusqu'à six semaines. Ensuite, la caisse d'assurance maladie verse des indemnités. L'important est d'avoir un arrêt de travail du médecin, le plus souvent à partir du quatrième jour." },
      { de: "Am Anfang einer neuen Stelle gibt es oft eine Probezeit von höchstens sechs Monaten. Während dieser Zeit können beide Seiten mit einer Frist von zwei Wochen kündigen. Danach beträgt die Frist mindestens vier Wochen. Und wer geht, hat ein Recht auf ein schriftliches Arbeitszeugnis.", en: "At the start of a new job, there's often a probation period of up to six months. During this time, either side can give two weeks' notice. After that, the notice period is at least four weeks. And anyone who leaves has the right to a written reference.", fr: "Au début d'un nouveau poste, il y a souvent une période d'essai de six mois au maximum. Pendant cette période, chacune des deux parties peut mettre fin au contrat avec un préavis de deux semaines. Ensuite, le préavis est d'au moins quatre semaines. Et en partant, on a droit à un certificat de travail écrit." }
    ],
    glossary: { "gesetzlichen": ["statutory, legal", "légal"], "Mindestlohn": ["minimum wage", "salaire minimum"], "Höhe": ["level, amount", "montant, niveau"], "Kommission": ["commission", "commission"], "Arbeitgebern": ["employers", "employeurs"], "Arbeitgeber": ["employer", "employeur"], "Gewerkschaften": ["trade unions", "syndicats"], "Fachleuten": ["experts", "experts"], "Vorschläge": ["proposals", "propositions"], "Erhöhung": ["increase", "hausse"], "laut": ["according to", "selon"], "Gesetz": ["law", "loi"], "bezahlten": ["paid", "payés"], "Arbeitsverträge": ["employment contracts", "contrats de travail"], "Feiertage": ["public holidays", "jours fériés"], "Bundesland": ["federal state", "Land (État fédéré)"], "verschieden": ["different", "différent"], "Krankengeld": ["sickness benefit", "indemnités maladie"], "Krankenkasse": ["health insurance fund", "caisse d'assurance maladie"], "Krankmeldung": ["sick note", "arrêt de travail"], "höchstens": ["at most", "au maximum"], "Seiten": ["sides", "parties"], "Frist": ["period (of notice), deadline", "délai, préavis"], "beträgt": ["amounts to, is", "s'élève à"], "Recht": ["right", "droit"], "schriftliches": ["written", "écrit"], "Arbeitszeugnis": ["(written) job reference", "certificat de travail"] },
    questions: [
      { q: "Seit wann gibt es in Deutschland einen gesetzlichen Mindestlohn?", o: ["Seit 2015", "Seit 1990", "Seit 2020"], a: 0 },
      { q: "Wie viele Tage Urlaub gibt das Gesetz mindestens bei fünf Arbeitstagen pro Woche?", o: ["Zwanzig Tage", "Dreißig Tage", "Zehn Tage"], a: 0 },
      { q: "Wer zahlt den Lohn in den ersten Wochen, wenn man krank ist?", o: ["Der Arbeitgeber", "Die Gewerkschaft", "Niemand"], a: 0 },
      { q: "Wie lange dauert die Probezeit höchstens?", o: ["Sechs Monate", "Zwei Wochen", "Ein Jahr"], a: 0 },
      { q: "Worauf hat man ein Recht, wenn man eine Stelle verlässt?", o: ["Auf ein schriftliches Arbeitszeugnis", "Auf sechs Wochen Urlaub", "Auf eine neue Stelle"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-b1-2", unit: "b1-2", level: "B1", icon: "messages-square",
    title: "Ein Jobangebot aus Hamburg", title_fr: "Une offre d'emploi à Hambourg",
    context: "Carla tells her colleague Ben about a job offer, in the office kitchen.", context_fr: "Carla parle d'une offre d'emploi à son collègue Ben, dans la cuisine du bureau.",
    words: [["das Jobangebot", "the job offer", "l'offre d'emploi"], ["annehmen", "to accept", "accepter"], ["deutlich", "clearly, considerably", "nettement"], ["teilweise", "partly", "en partie"], ["müsste", "would have to", "devrait"]],
    lines: [["Carla", "Ben, kann ich dich kurz was fragen? Ich habe ein Jobangebot aus Hamburg bekommen.", "de-DE"], ["Ben", "Glückwunsch! Und, nimmst du es an?", "de-DE"], ["Carla", "Ich weiß es noch nicht. Das Gehalt ist deutlich höher, deshalb bin ich natürlich interessiert.", "de-DE"], ["Ben", "Klingt doch super. Wo ist das Problem?", "de-DE"], ["Carla", "Obwohl die Stelle toll ist, müsste ich eigentlich umziehen. Und wegen meiner Kinder ist das nicht so einfach.", "de-DE"], ["Ben", "Verstehe. Kannst du nicht teilweise im Homeoffice arbeiten?", "de-DE"], ["Carla", "Doch, zwei Tage pro Woche. Trotzdem müsste ich dreimal pro Woche nach Hamburg fahren.", "de-DE"], ["Ben", "Das sind fast zwei Stunden mit dem Zug, oder? Ich würde mit der Firma noch einmal über die Homeoffice-Tage reden.", "de-DE"]],
    gist: ["Worüber spricht Carla mit Ben?", ["Über ein Jobangebot in Hamburg", "Über ihren Urlaub", "Über einen Streit mit dem Chef"]],
    detail: [["Was ist an der neuen Stelle besser?", ["Das Gehalt", "Die Kollegen", "Die Arbeitszeit"]], ["Warum ist ein Umzug schwierig?", ["Wegen ihrer Kinder", "Wegen ihres Autos", "Wegen ihres Partners"]], ["Wie viele Tage Homeoffice wären möglich?", ["Zwei Tage pro Woche", "Drei Tage pro Woche", "Jeden Tag"]], ["Was rät Ben?", ["Noch einmal mit der Firma reden", "Die Stelle sofort annehmen", "Sofort nach Hamburg umziehen"]]],
    decode: ["Obwohl die Stelle toll ist, müsste ich eigentlich umziehen.", "wegen meiner Kinder"],
    tip: "When people weigh up a decision, listen for the connectors: deshalb (the reason for), obwohl and trotzdem (the reason against). They tell you which way the speaker is leaning before you understand every word.", tip_fr: "Quand quelqu'un pèse une décision, repère les connecteurs : deshalb (l'argument pour), obwohl et trotzdem (l'argument contre). Ils te disent de quel côté penche la personne avant même que tu comprennes chaque mot."
  }]);

  W.PROMPTS.push({ id: "de-b1-2", level: "B1", q: "Was ist dir bei der Arbeit am wichtigsten: das Gehalt, nette Kollegen oder genug Freizeit? Begründe deine Meinung.", en: "What matters most to you at work: the salary, nice colleagues or enough free time? Give reasons.", fr: "Qu'est-ce qui compte le plus pour toi au travail : le salaire, des collègues sympas ou assez de temps libre ? Justifie ton avis.", time: 120,
    phrases: ["Für mich ist … am wichtigsten, weil…", "Natürlich ist … auch wichtig, aber…", "Obwohl…, …", "Deshalb…", "Trotzdem…"],
    model: "Für mich sind nette Kollegen am wichtigsten, weil ich jeden Tag acht Stunden mit ihnen verbringe. Natürlich ist das Gehalt auch wichtig, aber ein hohes Gehalt macht nicht glücklich, wenn die Stimmung im Team schlecht ist. In meiner letzten Stelle habe ich gut verdient. Trotzdem habe ich gekündigt, denn ich habe mich dort nie wohlgefühlt. Obwohl ich jetzt etwas weniger Geld habe, gehe ich jeden Morgen gern zur Arbeit. Deshalb würde ich immer die Kollegen wählen." });

  W.WRITING_GUIDE["b1-2"] = { genre: "An opinion in an online forum (Goethe B1, writing part 2)", genre_fr: "Un avis sur un forum en ligne (Goethe B1, écrit partie 2)",
    plan: [["Your situation and your opinion in one sentence.", "Ta situation et ton avis en une phrase."], ["A first argument with a reason (weil, deshalb).", "Un premier argument avec une raison (weil, deshalb)."], ["A second argument, or an example.", "Un deuxième argument, ou un exemple."], ["The other side (obwohl, trotzdem).", "L'autre point de vue (obwohl, trotzdem)."], ["Your conclusion.", "Ta conclusion."]],
    marks: [["und ich finde das sehr gut", "your opinion straight away", "ton avis tout de suite"], ["deshalb habe ich mehr Zeit für meine Familie", "deshalb: a consequence, verb right after", "deshalb : une conséquence, verbe juste après"], ["weil mich niemand stört", "weil: a reason, verb at the end", "weil : une raison, verbe à la fin"], ["Trotzdem möchte ich nicht nur zu Hause arbeiten", "trotzdem: the other side", "trotzdem : l'autre point de vue"], ["Obwohl Videokonferenzen praktisch sind", "obwohl: a concession", "obwohl : une concession"], ["Wegen der vielen E-Mails", "wegen + genitive", "wegen + génitif"], ["Meiner Meinung nach", "the conclusion", "la conclusion"]] };

  W.COURSE.push({ id: "b1-2", level: "B1", icon: "briefcase", title: "Work and careers", title_fr: "Travail et carrière",
    intro: "In this unit, you'll talk about work: giving reasons and contrasts with weil, denn, deshalb, obwohl and trotzdem (each with its own word order), the genitive and wegen, trotz, während and statt, and everything you need to apply for a job in Germany. You'll also learn your basic rights as an employee.",
    intro_fr: "Dans cette unité, tu vas parler du travail : donner des raisons et nuancer avec weil, denn, deshalb, obwohl et trotzdem (chacun avec son ordre des mots), le génitif et wegen, trotz, während et statt, et tout ce qu'il faut pour postuler en Allemagne. Tu découvriras aussi tes droits essentiels de salarié.",
    can: ["Give reasons, consequences and contrasts with the right word order", "Use the genitive and wegen, trotz, während, statt", "Understand the basics of employment in Germany", "Answer the classic job interview questions", "Give your opinion in an online forum (Goethe B1)"],
    can_fr: ["Donner des raisons, des conséquences et des oppositions avec le bon ordre des mots", "Employer le génitif et wegen, trotz, während, statt", "Comprendre les bases du travail salarié en Allemagne", "Répondre aux questions classiques d'un entretien d'embauche", "Donner ton avis sur un forum en ligne (Goethe B1)"],
    lessons: [46, 47, 48], vocab: ["berufslebenDE", "bewerbungDE"], reading: "arbeitsrechte", prompt: "de-b1-2",
    writing: { task: "A radio programme asked: “Working from home: a good idea?” In the programme's online forum, write your opinion (80-100 words): your experience, arguments for and against, and your conclusion.", task_fr: "Une émission de radio demande : « Le télétravail, une bonne idée ? » Sur le forum de l'émission, écris ton avis (80 à 100 mots) : ton expérience, des arguments pour et contre, et ta conclusion.", words: "80-100",
      tips: ["Ich arbeite… / Ich habe… erlebt", "…, deshalb…", "…, weil…", "Obwohl…, …", "Trotzdem…", "Meiner Meinung nach…"],
      checklist: ["I gave my opinion at the start", "I used weil and deshalb with the right word order", "I mentioned the other side with obwohl or trotzdem", "I used wegen + genitive", "I wrote between 80 and 100 words"],
      checklist_fr: ["J'ai donné mon avis dès le début", "J'ai employé weil et deshalb avec le bon ordre des mots", "J'ai évoqué l'autre point de vue avec obwohl ou trotzdem", "J'ai employé wegen + génitif", "J'ai écrit entre 80 et 100 mots"],
      model: "Ich arbeite seit zwei Jahren zwei Tage pro Woche im Homeoffice, und ich finde das sehr gut. Ich spare jeden Tag eine Stunde Fahrzeit, deshalb habe ich mehr Zeit für meine Familie. Außerdem kann ich zu Hause ruhiger arbeiten, weil mich niemand stört. Trotzdem möchte ich nicht nur zu Hause arbeiten. Obwohl Videokonferenzen praktisch sind, ersetzen sie nicht den Kaffee mit den Kollegen. Wegen der vielen E-Mails ist es auch manchmal schwer, Feierabend zu machen. Meiner Meinung nach ist eine Mischung aus Büro und Homeoffice die beste Lösung." } });
})();
