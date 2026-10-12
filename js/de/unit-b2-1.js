/* Cours d'allemand, unité B2-1 « Media and the news / Médias et information » : le discours indirect au Konjunktiv I
   (er sei, sie habe, ob…, solle), citer une source et marquer la distance (laut, zufolge, nach Angaben, sollen,
   wollen, angeblich) ; lire l'information avec un esprit critique. Première unité du B2 ; écrits au format du
   Goethe-Zertifikat B2 (Schreiben partie 1 : avis sur un forum, environ 150 mots). Atelier de langue (LEXIS) comme
   dans les autres cours. Personnages fictifs, prénoms allemands ; aucune déclaration inventée attribuée à une
   personne ou une institution réelle.
   Faits vérifiables seulement : la Tagesschau est diffusée depuis le 26 décembre 1952 ; l'édition principale passe
   à 20 heures sur la chaîne Das Erste ; elle est produite par la rédaction ARD-aktuell à Hambourg ; la radio et la
   télévision publiques sont financées surtout par la redevance (Rundfunkbeitrag) payée par chaque foyer ; liberté de
   la presse garantie par l'article 5 de la Loi fondamentale ; « Ente » = fausse nouvelle (Zeitungsente). */
(function () {
  const W = window;

  W.VOCAB.push(
  { id: "nachrichtenDE", icon: "newspaper", title: "News and journalism", title_fr: "L'information et le journalisme", level: "B2", words: [
    ["die Schlagzeile, -n", "the headline", "le gros titre", "Die Schlagzeile war größer als der ganze Artikel."],
    ["der Bericht, -e", "the report", "le reportage, le compte rendu", "Ich habe einen interessanten Bericht über die Wahl gelesen."],
    ["berichten über", "to report on", "rendre compte de, faire un reportage sur", "Alle Sender berichten über das Unwetter."],
    ["die Quelle, -n", "the source", "la source", "Woher stammt die Information? Was ist die Quelle?"],
    ["die Meldung, -en", "the news item, the report", "la nouvelle, la dépêche", "Die Meldung wurde später korrigiert."],
    ["die Redaktion, -en", "the editorial team, the newsroom", "la rédaction", "Die Redaktion hat sich für den Fehler entschuldigt."],
    ["die Pressefreiheit", "freedom of the press", "la liberté de la presse", "Die Pressefreiheit ist im Grundgesetz garantiert."],
    ["aktuell", "current, up to date", "actuel, d'actualité", "Hier finden Sie die aktuellen Nachrichten."],
    ["sachlich", "objective, factual", "objectif, factuel", "Der Kommentar war erstaunlich sachlich."],
    ["seriös", "reputable, serious", "sérieux, fiable", "Ist diese Website eine seriöse Quelle?"],
    ["die Auflage, -n", "the circulation, the print run", "le tirage", "Die Auflage der Zeitungen sinkt seit Jahren."],
    ["das Abonnement, -s", "the subscription", "l'abonnement", "Ich habe ein digitales Abonnement."],
    ["der Kommentar, -e", "the commentary, the opinion piece", "le commentaire, l'éditorial", "Im Kommentar gibt der Autor seine Meinung wieder."],
    ["die Pressekonferenz, -en", "the press conference", "la conférence de presse", "Die Pressekonferenz beginnt um elf Uhr."],
    ["zufolge", "according to (after the noun)", "selon, d'après (après le nom)", "Dem Bericht zufolge gab es keine Verletzten."],
    ["nach Angaben (+ Genitiv)", "according to (figures, statements from)", "d'après, selon les indications de", "Nach Angaben der Feuerwehr gab es zwei Verletzte."]
  ] },
  { id: "infokritikDE", icon: "search-check", title: "Judging information", title_fr: "Juger une information", level: "B2", words: [
    ["behaupten", "to claim", "affirmer, prétendre", "Er behauptet, er habe nichts gewusst."],
    ["die Behauptung, -en", "the claim", "l'affirmation", "Diese Behauptung ist nicht bewiesen."],
    ["angeblich", "allegedly, supposedly", "soi-disant, prétendument", "Angeblich soll das Konzert abgesagt werden."],
    ["die Tatsache, -n", "the fact", "le fait", "Das ist eine Tatsache, keine Meinung."],
    ["die Vermutung, -en", "the assumption, the guess", "la supposition", "Bis jetzt ist das nur eine Vermutung."],
    ["widerlegen", "to disprove, to refute", "réfuter", "Die Studie wurde inzwischen widerlegt."],
    ["beeinflussen", "to influence", "influencer", "Werbung beeinflusst unsere Entscheidungen."],
    ["der Einfluss, ¨-e", "the influence", "l'influence", "Soziale Medien haben großen Einfluss auf junge Menschen."],
    ["manipulieren", "to manipulate", "manipuler", "Das Foto wurde manipuliert."],
    ["die Glaubwürdigkeit", "credibility", "la crédibilité", "Nach dem Skandal hat die Zeitung an Glaubwürdigkeit verloren."],
    ["skeptisch", "sceptical", "sceptique", "Bei solchen Videos bin ich immer skeptisch."],
    ["hinterfragen", "to question, to examine critically", "remettre en question, interroger", "Man sollte jede Information hinterfragen."],
    ["die Falschmeldung, -en", "the false report, fake news", "la fausse information", "Die Falschmeldung wurde tausendfach geteilt."],
    ["verbreiten", "to spread", "répandre, diffuser", "Falschmeldungen verbreiten sich schneller als Korrekturen."],
    ["der Algorithmus, Algorithmen", "the algorithm", "l'algorithme", "Der Algorithmus zeigt mir nur, was mir gefällt."]
  ] });

  W.LESSONS.push(
  {
    id: 73, level: "B2", icon: "quote",
    title: "Er sagte, er sei optimistisch: reported speech", title_fr: "Er sagte, er sei optimistisch : le discours indirect",
    subtitle: "The Konjunktiv I of the news: reporting what someone said without taking it on yourself.", subtitle_fr: "Le Konjunktiv I des informations : rapporter des paroles sans les prendre à son compte.",
    body: `
<h2>Reporting what someone said</h2>
<p>In the news and in formal writing, German reports speech with the <b>Konjunktiv I</b>: <s-de>Die Ministerin sagte, sie sei optimistisch.</s-de> The form shows that you are reporting, not claiming it yourself.</p>
<h2>The forms</h2>
<p>You mostly need the third person singular: stem + <b>-e</b>. <s-de>sein</s-de> is special: <s-de>ich sei, er sei, wir seien, sie seien</s-de>.</p>
<table>
<tr><th>Infinitive</th><th>er / sie / es</th></tr>
<tr><td><s-de>sein</s-de></td><td><s-de>sei</s-de></td></tr>
<tr><td><s-de>haben</s-de></td><td><s-de>habe</s-de></td></tr>
<tr><td><s-de>werden</s-de></td><td><s-de>werde</s-de></td></tr>
<tr><td><s-de>können</s-de></td><td><s-de>könne</s-de></td></tr>
<tr><td><s-de>müssen</s-de></td><td><s-de>müsse</s-de></td></tr>
<tr><td><s-de>wissen</s-de></td><td><s-de>wisse</s-de></td></tr>
<tr><td><s-de>kommen</s-de></td><td><s-de>komme</s-de></td></tr>
</table>
<h2>When it looks like the present</h2>
<p>If the Konjunktiv I is identical to the present tense (<s-de>sie haben</s-de>, <s-de>wir kommen</s-de>), use the Konjunktiv II instead: <s-de>Die Forscher sagen, sie hätten neue Daten.</s-de></p>
<h2>Past, questions, requests</h2>
<p>Past: <s-de>habe</s-de> / <s-de>sei</s-de> + participle: <s-de>Sie erklärte, sie habe nichts gewusst.</s-de> Questions: <s-de>Er fragte, ob ich Zeit habe.</s-de> · <s-de>Sie wollte wissen, wann der Zug komme.</s-de> Requests: <s-de>sollen</s-de>: <s-de>Er sagte, ich solle warten.</s-de></p>
<div class="tip">You'll mostly need to <b>recognise</b> the Konjunktiv I in newspapers and the news. When speaking, Germans often use <s-de>dass</s-de> + indicative or the Konjunktiv II. In a B2 written exam, a few correct Konjunktiv I forms clearly show your level.</div>
`,
    body_fr: `
<h2>Rapporter des paroles</h2>
<p>Dans les informations et à l'écrit soutenu, l'allemand rapporte les paroles au <b>Konjunktiv I</b> : <s-de>Die Ministerin sagte, sie sei optimistisch.</s-de> (La ministre a dit qu'elle était optimiste.) Cette forme montre que tu rapportes une parole, sans l'affirmer toi-même, un peu comme le conditionnel journalistique français.</p>
<h2>Les formes</h2>
<p>On a surtout besoin de la 3e personne du singulier : radical + <b>-e</b>. <s-de>sein</s-de> est à part : <s-de>ich sei, er sei, wir seien, sie seien</s-de>.</p>
<table>
<tr><th>Infinitif</th><th>er / sie / es</th></tr>
<tr><td><s-de>sein</s-de></td><td><s-de>sei</s-de></td></tr>
<tr><td><s-de>haben</s-de></td><td><s-de>habe</s-de></td></tr>
<tr><td><s-de>werden</s-de></td><td><s-de>werde</s-de></td></tr>
<tr><td><s-de>können</s-de></td><td><s-de>könne</s-de></td></tr>
<tr><td><s-de>müssen</s-de></td><td><s-de>müsse</s-de></td></tr>
<tr><td><s-de>wissen</s-de></td><td><s-de>wisse</s-de></td></tr>
<tr><td><s-de>kommen</s-de></td><td><s-de>komme</s-de></td></tr>
</table>
<h2>Quand il ressemble au présent</h2>
<p>Si le Konjunktiv I est identique au présent (<s-de>sie haben</s-de>, <s-de>wir kommen</s-de>), on prend le Konjunktiv II : <s-de>Die Forscher sagen, sie hätten neue Daten.</s-de></p>
<h2>Passé, questions, demandes</h2>
<p>Passé : <s-de>habe</s-de> / <s-de>sei</s-de> + participe : <s-de>Sie erklärte, sie habe nichts gewusst.</s-de> Questions : <s-de>Er fragte, ob ich Zeit habe.</s-de> · <s-de>Sie wollte wissen, wann der Zug komme.</s-de> Demandes : <s-de>sollen</s-de> : <s-de>Er sagte, ich solle warten.</s-de> (Il m'a dit d'attendre.)</p>
<div class="tip">Tu auras surtout besoin de <b>reconnaître</b> le Konjunktiv I dans les journaux et aux informations. À l'oral, les Allemands emploient souvent <s-de>dass</s-de> + indicatif ou le Konjunktiv II. À l'écrit du B2, quelques Konjunktiv I bien employés montrent clairement ton niveau.</div>
`,
    examples: [
      ["Die Ministerin sagte, sie sei mit dem Ergebnis zufrieden.", "The minister said she was satisfied with the result.", "La ministre a déclaré qu'elle était satisfaite du résultat."],
      ["Der Sprecher erklärte, es habe keine Verletzten gegeben.", "The spokesman said there had been no injuries.", "Le porte-parole a expliqué qu'il n'y avait pas eu de blessés."],
      ["Die Firma teilte mit, sie werde hundert neue Stellen schaffen.", "The company announced it would create a hundred new jobs.", "L'entreprise a annoncé qu'elle allait créer cent emplois."],
      ["Die Forscher betonen, sie hätten noch nicht alle Daten ausgewertet.", "The researchers stress that they haven't yet analysed all the data.", "Les chercheurs soulignent qu'ils n'ont pas encore analysé toutes les données."],
      ["Er fragte mich, ob ich den Artikel schon gelesen habe.", "He asked me whether I had already read the article.", "Il m'a demandé si j'avais déjà lu l'article."],
      ["Die Lehrerin sagte, wir sollten die Quellen immer angeben.", "The teacher said we should always give our sources.", "La professeure a dit que nous devions toujours citer nos sources."],
      ["Der Zeuge behauptet, er wisse nichts davon.", "The witness claims he knows nothing about it.", "Le témoin affirme qu'il n'en sait rien."]
    ],
    quiz: [
      { q: "Direct: „Ich bin müde.“ Reported: Er sagte, er ___ müde.", q_fr: "Direct : « Ich bin müde. » Indirect : Er sagte, er ___ müde.", o: ["sei", "ist gewesen", "seie"], a: 0, ex: "sein → er sei.", ex_fr: "sein → er sei." },
      { q: "Direct: „Wir haben keine Zeit.“ Reported: Sie sagten, sie ___ keine Zeit.", q_fr: "Direct : « Wir haben keine Zeit. » Indirect : Sie sagten, sie ___ keine Zeit.", o: ["hätten", "haben", "habe"], a: 0, ex: "Konjunktiv I (haben) = present, so Konjunktiv II: hätten.", ex_fr: "Konjunktiv I (haben) = présent, donc Konjunktiv II : hätten." },
      { q: "Direct: „Ich habe nichts gewusst.“ Reported: Sie erklärte, sie ___ nichts gewusst.", q_fr: "Direct : « Ich habe nichts gewusst. » Indirect : Sie erklärte, sie ___ nichts gewusst.", o: ["habe", "hat", "hatte"], a: 0, ex: "Past: habe + participle.", ex_fr: "Passé : habe + participe." },
      { q: "Direct: „Kommst du mit?“ Reported: Er fragte, ___", q_fr: "Direct : « Kommst du mit? » Indirect : Er fragte, ___", o: ["ob ich mitkomme.", "dass ich mitkomme.", "ob komme ich mit."], a: 0, ex: "A yes/no question: ob + verb at the end.", ex_fr: "Une question fermée : ob + verbe à la fin." },
      { q: "Direct: „Warte!“ Reported: Sie sagte, ich ___ warten.", q_fr: "Direct : « Warte! » Indirect : Sie sagte, ich ___ warten.", o: ["solle", "müsste", "werde"], a: 0, ex: "An order or request: sollen (solle).", ex_fr: "Un ordre ou une demande : sollen (solle)." }
    ]
  },
  {
    id: 74, level: "B2", icon: "newspaper",
    title: "Laut, zufolge, er soll…: sources and distance", title_fr: "Laut, zufolge, er soll… : citer une source et prendre ses distances",
    subtitle: "Say where information comes from, and show that it isn't confirmed.", subtitle_fr: "Dire d'où vient une information, et montrer qu'elle n'est pas confirmée.",
    body: `
<h2>Giving the source</h2>
<p><s-de>laut</s-de> + dative (or genitive): <s-de>Laut Polizei war die Straße gesperrt.</s-de> · <s-de>zufolge</s-de>, after the noun, + dative: <s-de>Dem Bericht zufolge gab es keine Verletzten.</s-de> · <s-de>nach Angaben</s-de> + genitive: <s-de>nach Angaben der Feuerwehr</s-de> · <s-de>wie … berichtet</s-de>: <s-de>Wie die Zeitung berichtet, …</s-de></p>
<h2>sollen: it is said</h2>
<p><s-de>sollen</s-de> + infinitive reports what others say: <s-de>Der Sänger soll krank sein.</s-de> (The singer is said to be ill.) Past: <s-de>Sie soll das Geld gestohlen haben.</s-de> (She allegedly stole the money.)</p>
<h2>wollen: he claims</h2>
<p><s-de>wollen</s-de> + infinitive shows that someone claims something about themselves, and that you doubt it: <s-de>Er will nichts gesehen haben.</s-de> (He claims he saw nothing.)</p>
<table>
<tr><th>Form</th><th>Meaning</th></tr>
<tr><td><s-de>Er soll reich sein.</s-de></td><td>people say he's rich</td></tr>
<tr><td><s-de>Er will reich sein.</s-de></td><td>he claims to be rich</td></tr>
<tr><td><s-de>Er ist angeblich reich.</s-de></td><td>he's supposedly rich</td></tr>
</table>
<div class="tip">Careful: <s-de>Er soll kommen</s-de> can also mean "he's supposed to come" (an instruction). The context tells you which: in a news report about rumours, it's "it is said". With a past infinitive (<s-de>soll … gestohlen haben</s-de>), it's always a report.</div>
`,
    body_fr: `
<h2>Citer la source</h2>
<p><s-de>laut</s-de> + datif (ou génitif) : <s-de>Laut Polizei war die Straße gesperrt.</s-de> (Selon la police, la rue était fermée.) · <s-de>zufolge</s-de>, placé après le nom, + datif : <s-de>Dem Bericht zufolge gab es keine Verletzten.</s-de> · <s-de>nach Angaben</s-de> + génitif : <s-de>nach Angaben der Feuerwehr</s-de> (d'après les pompiers) · <s-de>wie … berichtet</s-de> : <s-de>Wie die Zeitung berichtet, …</s-de></p>
<h2>sollen : on dit que</h2>
<p><s-de>sollen</s-de> + infinitif rapporte ce que disent d'autres personnes, comme le conditionnel journalistique : <s-de>Der Sänger soll krank sein.</s-de> (Le chanteur serait malade.) Au passé : <s-de>Sie soll das Geld gestohlen haben.</s-de> (Elle aurait volé l'argent.)</p>
<h2>wollen : il prétend</h2>
<p><s-de>wollen</s-de> + infinitif montre que quelqu'un affirme quelque chose sur lui-même, et que tu en doutes : <s-de>Er will nichts gesehen haben.</s-de> (Il prétend n'avoir rien vu.)</p>
<table>
<tr><th>Forme</th><th>Sens</th></tr>
<tr><td><s-de>Er soll reich sein.</s-de></td><td>on dit qu'il est riche</td></tr>
<tr><td><s-de>Er will reich sein.</s-de></td><td>il prétend être riche</td></tr>
<tr><td><s-de>Er ist angeblich reich.</s-de></td><td>il serait riche, soi-disant</td></tr>
</table>
<div class="tip">Attention : <s-de>Er soll kommen</s-de> peut aussi vouloir dire « il doit venir » (une consigne). C'est le contexte qui tranche : dans un article sur des rumeurs, c'est « on dit que ». Avec un infinitif passé (<s-de>soll … gestohlen haben</s-de>), c'est toujours une information rapportée.</div>
`,
    examples: [
      ["Laut Polizei war die Autobahn drei Stunden gesperrt.", "According to the police, the motorway was closed for three hours.", "Selon la police, l'autoroute a été fermée pendant trois heures."],
      ["Dem Bericht zufolge gab es keine Verletzten.", "According to the report, there were no injuries.", "D'après le rapport, il n'y a pas eu de blessés."],
      ["Nach Angaben der Feuerwehr brach das Feuer in der Küche aus.", "According to the fire brigade, the fire broke out in the kitchen.", "D'après les pompiers, l'incendie s'est déclaré dans la cuisine."],
      ["Der Schauspieler soll im Sommer geheiratet haben.", "The actor reportedly got married in the summer.", "L'acteur se serait marié cet été."],
      ["Der Zeuge will nichts gesehen haben.", "The witness claims he saw nothing.", "Le témoin prétend n'avoir rien vu."],
      ["Angeblich wird das Stadion nächstes Jahr renoviert.", "The stadium is supposedly going to be renovated next year.", "Le stade serait rénové l'année prochaine."],
      ["Wie die Zeitung berichtet, sinkt die Zahl der Abonnements.", "As the newspaper reports, the number of subscriptions is falling.", "Comme le rapporte le journal, le nombre d'abonnements baisse."]
    ],
    quiz: [
      { q: "“According to the report, …” (zufolge)", q_fr: "« D'après le rapport, … » (zufolge)", o: ["Dem Bericht zufolge…", "Zufolge dem Bericht…", "Den Bericht zufolge…"], a: 0, ex: "zufolge comes after the noun, with the dative.", ex_fr: "zufolge se place après le nom, avec le datif." },
      { q: "“Der Sänger soll krank sein.” means:", q_fr: "« Der Sänger soll krank sein. » veut dire :", o: ["People say the singer is ill.", "The singer must be ill.", "The singer wants to be ill."], o_fr: ["On dit que le chanteur est malade.", "Le chanteur doit être malade (c'est sûr).", "Le chanteur veut être malade."], a: 0, ex: "sollen = it is said.", ex_fr: "sollen = on dit que." },
      { q: "“He claims he didn't know anything.”", q_fr: "« Il prétend ne rien avoir su. »", o: ["Er will nichts gewusst haben.", "Er soll nichts gewusst haben.", "Er will nichts wissen gehabt."], a: 0, ex: "wollen + past infinitive = he claims.", ex_fr: "wollen + infinitif passé = il prétend." },
      { q: "“___ Polizei war die Straße gesperrt.”", q_fr: "« ___ Polizei war die Straße gesperrt. »", o: ["Laut", "Zufolge", "Wegen der"], a: 0, ex: "laut + noun (often without an article).", ex_fr: "laut + nom (souvent sans article)." },
      { q: "“She allegedly stole the money.”", q_fr: "« Elle aurait volé l'argent. »", o: ["Sie soll das Geld gestohlen haben.", "Sie will das Geld gestohlen haben.", "Sie soll das Geld stehlen haben."], a: 0, ex: "sollen + past infinitive (gestohlen haben).", ex_fr: "sollen + infinitif passé (gestohlen haben)." }
    ]
  },
  {
    id: 75, level: "B2", kind: "functional", icon: "search-check",
    title: "Everyday German: reading the news critically", title_fr: "L'allemand de tous les jours : lire l'information avec un esprit critique",
    subtitle: "Separate facts from opinions, check sources and talk about what you've read.", subtitle_fr: "Distinguer les faits des opinions, vérifier les sources et parler de ce que tu as lu.",
    body: `
<h2>Facts or opinion?</h2>
<p>A German newspaper separates the <s-de>Bericht</s-de> (report: facts, sources, Konjunktiv I) from the <s-de>Kommentar</s-de> (opinion piece: <s-de>meiner Meinung nach</s-de>, evaluations). Look for the clues: <s-de>Laut…, soll…, angeblich</s-de> = reported information; <s-de>leider, endlich, zum Glück, unverantwortlich</s-de> = the author's view.</p>
<h2>Questions to ask</h2>
<p><s-de>Woher stammt die Information?</s-de> · <s-de>Wer hat den Artikel geschrieben?</s-de> · <s-de>Wann wurde er veröffentlicht?</s-de> · <s-de>Berichten auch andere Medien darüber?</s-de> · <s-de>Ist das Foto echt?</s-de></p>
<h2>Talking about what you've read</h2>
<p><s-de>Ich habe gelesen, dass…</s-de> · <s-de>In der Zeitung stand, dass…</s-de> · <s-de>Es heißt, …</s-de> (It's said that…) · <s-de>Das halte ich für glaubwürdig / fragwürdig.</s-de> · <s-de>Da bin ich skeptisch, weil…</s-de> · <s-de>Das ist doch eine Ente!</s-de> (That's a hoax!)</p>
<div class="tip">An old German word for a false news story is <s-de>die Ente</s-de> (the duck), or <s-de>die Zeitungsente</s-de>. Freedom of the press is guaranteed by Article 5 of the Basic Law: <s-de>Eine Zensur findet nicht statt.</s-de> (There shall be no censorship.)</div>
`,
    body_fr: `
<h2>Faits ou opinion ?</h2>
<p>Un journal allemand distingue le <s-de>Bericht</s-de> (compte rendu : faits, sources, Konjunktiv I) du <s-de>Kommentar</s-de> (éditorial : <s-de>meiner Meinung nach</s-de>, jugements). Repère les indices : <s-de>Laut…, soll…, angeblich</s-de> = information rapportée ; <s-de>leider, endlich, zum Glück, unverantwortlich</s-de> = point de vue de l'auteur.</p>
<h2>Les questions à se poser</h2>
<p><s-de>Woher stammt die Information?</s-de> (D'où vient l'information ?) · <s-de>Wer hat den Artikel geschrieben?</s-de> · <s-de>Wann wurde er veröffentlicht?</s-de> · <s-de>Berichten auch andere Medien darüber?</s-de> · <s-de>Ist das Foto echt?</s-de></p>
<h2>Parler de ce que tu as lu</h2>
<p><s-de>Ich habe gelesen, dass…</s-de> · <s-de>In der Zeitung stand, dass…</s-de> · <s-de>Es heißt, …</s-de> (On dit que…) · <s-de>Das halte ich für glaubwürdig / fragwürdig.</s-de> (Je trouve ça crédible / douteux.) · <s-de>Da bin ich skeptisch, weil…</s-de> · <s-de>Das ist doch eine Ente!</s-de> (C'est un canular !)</p>
<div class="tip">Le vieux mot allemand pour une fausse nouvelle est <s-de>die Ente</s-de> (le canard, comme en français !), ou <s-de>die Zeitungsente</s-de>. La liberté de la presse est garantie par l'article 5 de la Loi fondamentale : <s-de>Eine Zensur findet nicht statt.</s-de> (Il n'y a pas de censure.)</div>
`,
    examples: [
      ["Woher stammt diese Information eigentlich?", "Where does this information actually come from?", "D'où vient cette information, en fait ?"],
      ["In der Zeitung stand, dass das Museum schließen muss.", "It said in the newspaper that the museum has to close.", "Il était écrit dans le journal que le musée doit fermer."],
      ["Es heißt, die Mieten sollen nächstes Jahr wieder steigen.", "It's said that rents will rise again next year.", "On dit que les loyers vont encore augmenter l'an prochain."],
      ["Das halte ich für ziemlich fragwürdig.", "I find that rather doubtful.", "Je trouve ça assez douteux."],
      ["Da bin ich skeptisch, weil keine Quelle angegeben ist.", "I'm sceptical, because no source is given.", "J'ai des doutes, parce qu'aucune source n'est indiquée."],
      ["Berichten auch andere Medien darüber?", "Are other media reporting on it too?", "Est-ce que d'autres médias en parlent aussi ?"],
      ["Das ist doch eine Ente! Das hat sich jemand ausgedacht.", "That's a hoax! Someone made it up.", "C'est un canular ! Quelqu'un l'a inventé."]
    ],
    quiz: [
      { q: "Which word suggests the author's opinion, not a fact?", q_fr: "Quel mot montre l'opinion de l'auteur, et non un fait ?", o: ["unverantwortlich", "laut", "zufolge"], a: 0, ex: "An evaluation: unverantwortlich (irresponsible).", ex_fr: "Un jugement : unverantwortlich (irresponsable)." },
      { q: "“Where does the information come from?”", q_fr: "« D'où vient l'information ? »", o: ["Woher stammt die Information?", "Wohin geht die Information?", "Wo kommt die Information?"], a: 0, ex: "stammen aus = to come from.", ex_fr: "stammen aus = provenir de." },
      { q: "“Das ist eine Ente” means:", q_fr: "« Das ist eine Ente » veut dire :", o: ["It's a hoax, false news.", "It's a nature report.", "It's very good news."], o_fr: ["C'est une fausse nouvelle, un canular.", "C'est un reportage animalier.", "C'est une très bonne nouvelle."], a: 0, ex: "die (Zeitungs)ente = false news.", ex_fr: "die (Zeitungs)ente = fausse nouvelle." },
      { q: "“I find that doubtful.”", q_fr: "« Je trouve ça douteux. »", o: ["Das halte ich für fragwürdig.", "Das halte ich als fragwürdig.", "Das finde ich für fragwürdig."], a: 0, ex: "etwas für … halten.", ex_fr: "etwas für … halten." },
      { q: "In a German newspaper, a Kommentar is:", q_fr: "Dans un journal allemand, un Kommentar est :", o: ["an opinion piece", "a factual report", "a reader's letter only"], o_fr: ["un article d'opinion", "un compte rendu factuel", "seulement une lettre de lecteur"], a: 0, ex: "Bericht = facts; Kommentar = opinion.", ex_fr: "Bericht = faits ; Kommentar = opinion." }
    ]
  });

  W.DRILLS = Object.assign(W.DRILLS || {}, {
    73: {
      gap: [["Er sagte, er ___ müde. (sein)", "sei"], ["Sie erklärte, sie ___ nichts gewusst. (haben)", "habe"], ["Die Firma teilte mit, sie ___ neue Stellen schaffen. (werden)", "werde"], ["Die Forscher sagen, sie ___ neue Daten. (haben)", "hätten", "Konjunktiv I = present, so Konjunktiv II", "Konjunktiv I = présent, donc Konjunktiv II"]],
      fix: [["Der Minister sagte, er ist zufrieden.", "Der Minister sagte, er sei zufrieden.", "In a news report: Konjunktiv I (sei).", "Dans un compte rendu : Konjunktiv I (sei)."], ["Sie fragte, ob ich habe Zeit.", "Sie fragte, ob ich Zeit habe.", "ob: the verb at the end.", "ob : le verbe à la fin."]],
      task: ["Report four things a (fictional) mayor said at a press conference, using the Konjunktiv I.", "Rapporte quatre choses qu'un maire (fictif) a dites lors d'une conférence de presse, au Konjunktiv I.", "Der Bürgermeister sagte, die Stadt habe genug Geld für ein neues Schwimmbad. Er erklärte, die Bauarbeiten würden im Frühling beginnen. Außerdem betonte er, das alte Bad sei nicht mehr sicher. Die Bürger könnten ihre Ideen bis Ende Mai online einreichen."]
    },
    74: {
      gap: [["___ Polizei war die Straße gesperrt.", "Laut"], ["Dem Bericht ___ gab es keine Verletzten.", "zufolge"], ["Der Sänger ___ krank sein.", "soll", "it is said", "on dit que"], ["Der Zeuge ___ nichts gesehen haben.", "will", "he claims", "il prétend"]],
      fix: [["Zufolge dem Bericht gab es keine Verletzten.", "Dem Bericht zufolge gab es keine Verletzten.", "zufolge comes after the noun.", "zufolge se place après le nom."], ["Er will nichts gesehen hat.", "Er will nichts gesehen haben.", "wollen + past infinitive: gesehen haben.", "wollen + infinitif passé : gesehen haben."]],
      task: ["Rewrite these rumours with sollen or wollen: people say the café is closing; the director claims he knew nothing; people say the band split up last year.", "Réécris ces rumeurs avec sollen ou wollen : on dit que le café ferme ; le directeur prétend n'avoir rien su ; on dit que le groupe s'est séparé l'an dernier.", "Das Café soll bald schließen. Der Direktor will nichts davon gewusst haben. Die Band soll sich letztes Jahr getrennt haben."]
    },
    75: {
      gap: [["Woher ___ die Information?", "stammt", "comes from", "provient"], ["In der Zeitung ___, dass das Museum schließt.", "stand"], ["Das halte ich ___ fragwürdig.", "für"], ["Da bin ich ___, weil keine Quelle angegeben ist.", "skeptisch", "sceptical", "sceptique"]],
      fix: [["Das halte ich als glaubwürdig.", "Das halte ich für glaubwürdig.", "etwas für … halten.", "etwas für … halten."], ["Es heißt, dass die Mieten steigen sollen werden.", "Es heißt, dass die Mieten steigen sollen.", "sollen already carries the report: no werden.", "sollen suffit à marquer l'information rapportée : pas de werden."]],
      task: ["A friend shares a sensational story without a source. In four sentences, react: say what you read, express doubt, ask questions about the source, and suggest how to check it.", "Quelqu'un partage une histoire sensationnelle sans source. Réagis en quatre phrases : dis ce que tu as lu, exprime un doute, pose des questions sur la source, et propose une façon de vérifier.", "Ich habe gelesen, dass die Stadt alle Parks verkaufen will. Ehrlich gesagt bin ich da skeptisch. Woher stammt die Information, und wer hat den Artikel geschrieben? Lass uns schauen, ob auch seriöse Zeitungen darüber berichten."]
    }
  });

  W.ROLEPLAYS.push(
  { id: "zeitungsgespraech", lesson: 73, level: "B2", icon: "newspaper", partner: "Gregor", role: "a colleague", role_fr: "un collègue",
    title: "What was in the paper?", title_fr: "Qu'est-ce qu'il y avait dans le journal ?",
    setting: "At lunch, your colleague Gregor asks you about an article you read this morning on the new cycle lanes in your town.", setting_fr: "Au déjeuner, ton collègue Gregor te demande ce que disait un article lu ce matin sur les nouvelles pistes cyclables de ta ville.",
    turns: [
      { p: "Du hast doch heute Morgen den Artikel über die neuen Radwege gelesen. Was stand drin?", en: "You read the article about the new cycle lanes this morning, didn't you? What did it say?", fr: "Tu as lu l'article sur les nouvelles pistes cyclables ce matin, non ? Qu'est-ce qu'il disait ?" },
      { y: ["Die Stadträtin sagte, die ersten Radwege seien schon im Sommer fertig.", "Die Stadträtin sagte, die ersten Radwege sind schon im Sommer fertig gewesen.", "Die Stadträtin sagte, die ersten Radwege sei schon im Sommer fertig."], en: "The councillor said the first cycle lanes would be ready by the summer.", fr: "La conseillère municipale a dit que les premières pistes seraient prêtes dès l'été.", why: "Reported speech, plural: seien.", why_fr: "Discours indirect, pluriel : seien." },
      { p: "Schon im Sommer? Und was ist mit den Parkplätzen?", en: "By the summer? And what about the parking spaces?", fr: "Dès l'été ? Et les places de parking ?" },
      { y: ["Sie erklärte, man werde etwa zweihundert Parkplätze in Fahrradständer umwandeln.", "Sie erklärte, man wird etwa zweihundert Parkplätze in Fahrradständer umwandeln werden.", "Sie erklärte, man werde etwa zweihundert Parkplätze in Fahrradständer umgewandelt."], en: "She explained that about two hundred parking spaces would be turned into bike racks.", fr: "Elle a expliqué qu'on transformerait environ deux cents places de parking en parcs à vélos.", why: "werden in the Konjunktiv I: werde + infinitive.", why_fr: "werden au Konjunktiv I : werde + infinitif." },
      { p: "Das wird den Geschäften nicht gefallen.", en: "The shops won't like that.", fr: "Ça ne va pas plaire aux commerçants." },
      { y: ["Genau. Laut einem Händlerverband befürchten viele Läden weniger Kundschaft.", "Genau. Laut einen Händlerverband befürchten viele Läden weniger Kundschaft.", "Genau. Zufolge einem Händlerverband befürchten viele Läden weniger Kundschaft."], en: "Exactly. According to a traders' association, many shops fear they'll have fewer customers.", fr: "Exactement. Selon une association de commerçants, beaucoup de magasins craignent de perdre des clients.", why: "laut + dative: einem Händlerverband.", why_fr: "laut + datif : einem Händlerverband." },
      { p: "Und was sagt die Stadt dazu?", en: "And what does the town say about that?", fr: "Et qu'en dit la mairie ?" },
      { y: ["Die Stadt meint, mehr Radfahrer würden auch mehr Kunden bringen. Studien hätten das gezeigt.", "Die Stadt meint, mehr Radfahrer bringen auch mehr Kunden. Studien haben das gezeigt.", "Die Stadt meint, mehr Radfahrer würden auch mehr Kunden bringen. Studien hätten das zeigen."], en: "The town thinks more cyclists would also bring more customers. Studies had shown that.", fr: "La mairie estime que davantage de cyclistes amèneraient aussi davantage de clients. Des études l'auraient montré.", why: "Plural: the Konjunktiv I looks like the present, so Konjunktiv II (würden, hätten … gezeigt).", why_fr: "Pluriel : le Konjunktiv I ressemble au présent, donc Konjunktiv II (würden, hätten … gezeigt)." },
      { p: "Interessant. Hast du noch etwas über die Kosten gelesen?", en: "Interesting. Did you read anything about the costs?", fr: "Intéressant. Tu as lu quelque chose sur les coûts ?" },
      { y: ["Dem Artikel zufolge soll das Projekt etwa zwei Millionen Euro kosten.", "Dem Artikel zufolge will das Projekt etwa zwei Millionen Euro kosten.", "Den Artikel zufolge soll das Projekt etwa zwei Millionen Euro kosten."], en: "According to the article, the project is supposed to cost about two million euros.", fr: "D'après l'article, le projet devrait coûter environ deux millions d'euros.", why: "zufolge + dative after the noun; sollen = reportedly.", why_fr: "zufolge + datif après le nom ; sollen = d'après ce qu'on dit." }
    ] },
  { id: "fakenews", lesson: 75, level: "B2", icon: "search-check", partner: "Ella", role: "a friend", role_fr: "une amie",
    title: "Is it true?", title_fr: "C'est vrai ?",
    setting: "Your friend Ella shows you a video that's going round: a famous singer is said to be moving to your town. You're not so sure.", setting_fr: "Ton amie Ella te montre une vidéo qui circule : une chanteuse célèbre viendrait s'installer dans ta ville. Tu as des doutes.",
    turns: [
      { p: "Schau mal! Die Sängerin soll in unsere Stadt ziehen. Das ist der Wahnsinn!", en: "Look! The singer is supposedly moving to our town. That's crazy!", fr: "Regarde ! La chanteuse viendrait s'installer dans notre ville. C'est dingue !" },
      { y: ["Woher stammt die Information denn? Ich sehe hier keine Quelle.", "Wohin stammt die Information denn? Ich sehe hier keine Quelle.", "Woher stammt die Information denn? Ich sehe hier kein Quelle."], en: "Where does the information come from? I can't see a source here.", fr: "Elle vient d'où, cette information ? Je ne vois aucune source.", why: "stammen aus → woher; die Quelle → keine Quelle.", why_fr: "stammen aus → woher ; die Quelle → keine Quelle." },
      { p: "Das Video wurde schon hunderttausendmal geteilt. Es muss also stimmen.", en: "The video has been shared a hundred thousand times. So it must be true.", fr: "La vidéo a déjà été partagée cent mille fois. Donc ça doit être vrai." },
      { y: ["Das halte ich für ein schwaches Argument. Auch Falschmeldungen werden oft geteilt.", "Das halte ich als ein schwaches Argument. Auch Falschmeldungen werden oft geteilt.", "Das halte ich für ein schwaches Argument. Auch Falschmeldungen werden oft teilen."], en: "I don't think that's a strong argument. False stories get shared a lot too.", fr: "Je trouve que c'est un argument faible. Les fausses informations aussi sont souvent partagées.", why: "etwas für … halten; passive: werden … geteilt.", why_fr: "etwas für … halten ; passif : werden … geteilt." },
      { p: "Hm. Aber der Mann im Video sagt, er habe sie gestern am Bahnhof gesehen.", en: "Hm. But the man in the video says he saw her at the station yesterday.", fr: "Hum. Mais l'homme de la vidéo dit qu'il l'a vue hier à la gare." },
      { y: ["Er will sie gesehen haben. Das heißt aber nicht, dass es stimmt.", "Er soll sie gesehen haben. Das heißt aber nicht, dass es stimmt.", "Er will sie sehen haben. Das heißt aber nicht, dass es stimmt."], en: "He claims to have seen her. But that doesn't mean it's true.", fr: "Il prétend l'avoir vue. Ça ne veut pas dire que c'est vrai.", why: "wollen + past infinitive: he claims (and you doubt it).", why_fr: "wollen + infinitif passé : il prétend (et tu en doutes)." },
      { p: "Okay, und wie können wir das prüfen?", en: "OK, and how can we check?", fr: "D'accord, et comment on peut vérifier ?" },
      { y: ["Lass uns schauen, ob seriöse Zeitungen darüber berichten. Wenn nicht, ist es wahrscheinlich eine Ente.", "Lass uns schauen, ob seriöse Zeitungen darüber berichten. Wenn nicht, ist es wahrscheinlich einen Ente.", "Lass uns schauen, ob seriöse Zeitungen berichten darüber. Wenn nicht, ist es wahrscheinlich eine Ente."], en: "Let's see whether reputable papers are reporting it. If not, it's probably a hoax.", fr: "Regardons si des journaux sérieux en parlent. Sinon, c'est sûrement un canular.", why: "ob: the verb at the end; eine Ente (nominative).", why_fr: "ob : le verbe à la fin ; eine Ente (nominatif)." },
      { p: "Du hast recht… Nichts. Keine einzige Zeitung.", en: "You're right… Nothing. Not a single paper.", fr: "Tu as raison… Rien. Pas un seul journal." },
      { y: ["Siehst du? Bevor man etwas teilt, sollte man die Quelle hinterfragen.", "Siehst du? Bevor man etwas teilt, sollte man die Quelle hinterfragt.", "Siehst du? Bevor man teilt etwas, sollte man die Quelle hinterfragen."], en: "You see? Before you share something, you should question the source.", fr: "Tu vois ? Avant de partager quelque chose, il faut s'interroger sur la source.", why: "bevor: verb at the end; sollte + infinitive.", why_fr: "bevor : verbe à la fin ; sollte + infinitif." }
    ] }
  );

  W.READINGS.push({
    id: "tagesschau", level: "B2", icon: "book-open", title: "Die Tagesschau: seit 1952 um acht", genre: "Feature article",
    intro: "Every evening at eight, millions of Germans watch the same news. A look at an institution, and at the debates around it.",
    intro_fr: "Chaque soir à vingt heures, des millions d'Allemands regardent le même journal. Regard sur une institution, et sur les débats qui l'entourent.",
    paragraphs: [
      { de: "Am 26. Dezember 1952 lief zum ersten Mal die „Tagesschau“ im deutschen Fernsehen. Seitdem ist die Hauptausgabe um 20 Uhr auf dem Sender Das Erste für viele Familien ein fester Termin: Wenn der Gong ertönt, wird es im Wohnzimmer still. Produziert wird die Sendung von der Redaktion ARD-aktuell in Hamburg.", en: "On 26 December 1952, the “Tagesschau” was broadcast on German television for the first time. Since then, the main edition at 8 pm on the channel Das Erste has been a fixed appointment for many families: when the gong sounds, the living room goes quiet. The programme is produced by the ARD-aktuell newsroom in Hamburg.", fr: "Le 26 décembre 1952, la « Tagesschau » fut diffusée pour la première fois à la télévision allemande. Depuis, l'édition principale de 20 heures sur la chaîne Das Erste est un rendez-vous fixe pour beaucoup de familles : quand retentit le gong, le salon se tait. L'émission est produite par la rédaction ARD-aktuell à Hambourg." },
      { de: "Typisch für die Tagesschau ist ihr sachlicher Stil. Die Sprecherinnen und Sprecher lesen die Nachrichten ruhig vor, ohne sie zu kommentieren. Aussagen von Politikern werden meist in der indirekten Rede wiedergegeben: Es heißt dann etwa, der Minister sei zufrieden oder die Opposition fordere Neuwahlen.", en: "Typical of the Tagesschau is its factual style. The presenters read the news calmly, without commenting on it. Politicians' statements are mostly given in indirect speech: you'll hear, for example, that the minister is said to be satisfied or that the opposition is calling for new elections.", fr: "Le style factuel de la Tagesschau est typique. Les présentatrices et présentateurs lisent les informations calmement, sans les commenter. Les déclarations des responsables politiques sont le plus souvent rapportées au discours indirect : on entend par exemple que le ministre serait satisfait ou que l'opposition réclamerait de nouvelles élections." },
      { de: "Finanziert wird das öffentlich-rechtliche Fernsehen vor allem durch den Rundfunkbeitrag, den grundsätzlich jeder Haushalt zahlt. Kritiker meinen, das System sei zu teuer und die Sender müssten sparen. Befürworter halten dagegen, gerade eine unabhängige Finanzierung schütze die Redaktionen vor dem Einfluss von Werbekunden und Parteien.", en: "Public broadcasting is financed mainly by the broadcasting fee, which in principle every household pays. Critics say the system is too expensive and the broadcasters should save money. Supporters counter that independent funding is precisely what protects newsrooms from the influence of advertisers and parties.", fr: "La télévision publique est financée surtout par la redevance, que paie en principe chaque foyer. Les critiques estiment que le système serait trop cher et que les chaînes devraient faire des économies. Ses défenseurs répondent que c'est justement ce financement indépendant qui protège les rédactions de l'influence des annonceurs et des partis." },
      { de: "Inzwischen erreicht die Tagesschau ihr Publikum längst nicht mehr nur um acht. Es gibt sie als App, in sozialen Medien und als „Tagesschau in 100 Sekunden“. Ob jüngere Menschen ihr genauso vertrauen wie ihre Eltern, ist eine der großen Fragen für die Zukunft des Journalismus.", en: "Today the Tagesschau no longer reaches its audience only at eight. It's available as an app, on social media and as “Tagesschau in 100 Sekunden” (in 100 seconds). Whether younger people trust it as much as their parents do is one of the big questions for the future of journalism.", fr: "Aujourd'hui, la Tagesschau ne touche plus son public seulement à vingt heures. Elle existe en application, sur les réseaux sociaux et sous la forme de la « Tagesschau en 100 secondes ». Les plus jeunes lui font-ils autant confiance que leurs parents ? C'est l'une des grandes questions pour l'avenir du journalisme." }
    ],
    glossary: { "lief": ["(laufen) was shown, was on", "(laufen) passa, fut diffusé"], "Hauptausgabe": ["main edition", "édition principale"], "Sender": ["channel, station", "chaîne"], "fester": ["fixed", "fixe"], "Gong": ["gong", "gong"], "ertönt": ["sounds", "retentit"], "Wohnzimmer": ["living room", "salon"], "produziert": ["produced", "produit"], "Stil": ["style", "style"], "Sprecherinnen": ["presenters (women)", "présentatrices"], "Sprecher": ["presenters; spokespeople", "présentateurs ; porte-parole"], "kommentieren": ["to comment on", "commenter"], "Aussagen": ["statements", "déclarations"], "wiedergegeben": ["reported, rendered", "rapporté"], "Opposition": ["opposition", "opposition"], "fordere": ["(fordern, Konjunktiv I) calls for", "(fordern, Konjunktiv I) réclamerait"], "Neuwahlen": ["new elections", "nouvelles élections"], "öffentlich-rechtliche": ["public (broadcasting)", "public (audiovisuel)"], "Rundfunkbeitrag": ["broadcasting fee", "redevance audiovisuelle"], "grundsätzlich": ["in principle", "en principe"], "Haushalt": ["household", "foyer"], "Kritiker": ["critics", "critiques"], "Befürworter": ["supporters", "partisans, défenseurs"], "halten dagegen": ["counter, reply", "répondent, objectent"], "unabhängige": ["independent", "indépendant"], "Finanzierung": ["funding", "financement"], "schütze": ["(schützen, Konjunktiv I) protects", "(schützen, Konjunktiv I) protégerait"], "Werbekunden": ["advertisers", "annonceurs"], "längst": ["for a long time (längst nicht mehr: no longer by any means)", "depuis longtemps (längst nicht mehr : plus du tout)"], "vertrauen": ["to trust", "faire confiance"], "Journalismus": ["journalism", "journalisme"] },
    questions: [
      { q: "Wann lief die erste Tagesschau?", o: ["Am 26. Dezember 1952", "Am 9. November 1989", "Im Jahr 2000"], a: 0 },
      { q: "Wer produziert die Sendung?", o: ["Die Redaktion ARD-aktuell in Hamburg", "Eine private Firma in München", "Die Bundesregierung"], a: 0 },
      { q: "Wie werden Aussagen von Politikern meistens wiedergegeben?", o: ["In der indirekten Rede", "Mit dem Kommentar des Sprechers", "Gar nicht"], a: 0 },
      { q: "Was sagen die Befürworter des Rundfunkbeitrags?", o: ["Die unabhängige Finanzierung schütze vor dem Einfluss von Werbekunden und Parteien.", "Das System sei zu teuer.", "Man brauche keine Nachrichten mehr."], a: 0 },
      { q: "Welche Frage ist für die Zukunft wichtig?", o: ["Ob jüngere Menschen der Tagesschau genauso vertrauen wie ihre Eltern", "Ob die Sendung länger werden soll", "Ob es den Gong noch gibt"], a: 0 }
    ]
  });

  W.LAB = (W.LAB || []).concat([{
    id: "lab-b2-1", unit: "b2-1", level: "B2", icon: "radio",
    title: "Die Nachrichten im Radio", title_fr: "Le journal à la radio",
    context: "A short local news bulletin on the radio, then two listeners, Mirko and Svea, discuss it over breakfast.", context_fr: "Un court bulletin d'informations locales à la radio, puis deux auditeurs, Mirko et Svea, en discutent au petit-déjeuner.",
    words: [["das Hallenbad", "the indoor swimming pool", "la piscine couverte"], ["die Sanierung", "the renovation", "la rénovation"], ["der Stadtrat", "the town council", "le conseil municipal"], ["vorerst", "for the time being", "pour l'instant"], ["die Kosten", "the costs", "les coûts"]],
    lines: [["Radio", "Und nun die Nachrichten aus der Region. Das Hallenbad bleibt vorerst geschlossen. Wie die Stadtverwaltung mitteilte, sei die Sanierung teurer als geplant. Der Stadtrat werde im März über die zusätzlichen Kosten entscheiden.", "de-DE"], ["Radio", "Nach Angaben der Polizei ist es in der Nacht auf der B3 zu einem Unfall gekommen. Zwei Personen seien leicht verletzt worden. Die Straße ist inzwischen wieder frei.", "de-DE"], ["Svea", "Schon wieder das Hallenbad! Im Herbst hieß es noch, es werde im Januar wieder öffnen.", "de-DE"], ["Mirko", "Ja, und jetzt soll es angeblich bis zum Sommer dauern. Ich glaube das erst, wenn ich wieder schwimmen kann.", "de-DE"], ["Svea", "Laut der Zeitung von gestern sollen die Kosten um eine Million gestiegen sein.", "de-DE"], ["Mirko", "Eine Million? Woher haben die denn diese Zahl?", "de-DE"], ["Svea", "Aus dem Stadtrat, glaube ich. Ein Stadtrat will die Unterlagen gesehen haben.", "de-DE"], ["Mirko", "Na ja, solange es keine offizielle Bestätigung gibt, bleibe ich skeptisch.", "de-DE"]],
    gist: ["Worüber sprechen Mirko und Svea?", ["Über die Schließung des Hallenbads", "Über einen Unfall, den sie gesehen haben", "Über ihren Urlaub"]],
    detail: [["Warum bleibt das Hallenbad geschlossen?", ["Die Sanierung ist teurer als geplant.", "Es gibt nicht genug Personal.", "Das Wasser ist zu kalt."]], ["Wann entscheidet der Stadtrat?", ["Im März", "Im Januar", "Im Sommer"]], ["Was ist auf der B3 passiert?", ["Ein Unfall mit zwei leicht Verletzten", "Ein Stau wegen Bauarbeiten", "Nichts"]], ["Warum ist Mirko skeptisch?", ["Es gibt noch keine offizielle Bestätigung.", "Er mag die Zeitung nicht.", "Er geht nicht gern schwimmen."]]],
    decode: ["Wie die Stadtverwaltung mitteilte, sei die Sanierung teurer als geplant.", "Ein Stadtrat will die Unterlagen gesehen haben."],
    tip: "In radio news, the Konjunktiv I (sei, werde) is often the only sign that the information comes from someone else. Listen for the source at the start (Wie … mitteilte, Nach Angaben …), then for these short forms.", tip_fr: "À la radio, le Konjunktiv I (sei, werde) est souvent le seul signe que l'information vient de quelqu'un d'autre. Repère la source au début (Wie … mitteilte, Nach Angaben …), puis ces formes courtes."
  }]);

  W.PROMPTS.push({ id: "de-b2-1", level: "B2", q: "Wie informierst du dich über das aktuelle Geschehen? Welchen Quellen vertraust du, und warum? Wie gehst du mit Falschmeldungen um?", en: "How do you keep up with current events? Which sources do you trust, and why? How do you deal with false news?", fr: "Comment t'informes-tu sur l'actualité ? À quelles sources fais-tu confiance, et pourquoi ? Que fais-tu face aux fausses informations ?", time: 180,
    phrases: ["Ich informiere mich vor allem über…", "Ich vertraue … mehr als…, weil…", "Laut… / … zufolge", "Bevor ich etwas teile, …", "Es heißt oft, …, aber…"],
    model: "Ich informiere mich vor allem über Nachrichten-Apps und am Wochenende über eine Wochenzeitung. Am meisten vertraue ich Medien, die ihre Quellen angeben und zwischen Bericht und Kommentar trennen. In sozialen Medien bin ich dagegen eher skeptisch: Dort heißt es oft, etwas sei sicher, obwohl niemand weiß, woher die Information stammt. Bevor ich etwas teile, prüfe ich deshalb, ob auch seriöse Zeitungen darüber berichten. Wenn nicht, ist es vielleicht eine Ente. Ich finde, dass man das schon in der Schule lernen sollte, denn Falschmeldungen verbreiten sich heute schneller als Korrekturen." });

  W.WRITING_GUIDE["b2-1"] = { genre: "An opinion in an online forum (Goethe B2, writing part 1)", genre_fr: "Un avis sur un forum en ligne (Goethe B2, écrit partie 1)",
    plan: [["Report the claim you are reacting to (Konjunktiv I).", "Rapporte l'affirmation à laquelle tu réagis (Konjunktiv I)."], ["Your position, with a nuance.", "Ta position, avec une nuance."], ["A first argument with an example.", "Un premier argument avec un exemple."], ["A second argument, and the other side.", "Un deuxième argument, et l'autre point de vue."], ["Your conclusion.", "Ta conclusion."]],
    marks: [["heißt es oft, Zeitungen seien überflüssig geworden", "reporting the claim in the Konjunktiv I", "rapporter l'affirmation au Konjunktiv I"], ["Diese Meinung teile ich nur zum Teil", "a nuanced position", "une position nuancée"], ["wie viele Meldungen in den sozialen Medien ungeprüft verbreitet werden", "a passive in an indirect question", "un passif dans une interrogative indirecte"], ["einen entscheidenden Vorteil", "introducing your main argument", "introduire ton argument principal"], ["Andererseits müssen sich die Zeitungen verändern", "the other side", "l'autre point de vue"], ["Mein Fazit", "the conclusion", "la conclusion"]] };

  /* Atelier de langue : champs allemands d'abord, puis anglais et français (voir localize.js). */
  W.LEXIS = W.LEXIS || {};
  W.LEXIS["b2-1"] = {
    colloc: [
      ["eine Frage stellen", "to ask a question", "poser une question", "Die Journalistin stellte dem Minister eine kritische Frage.", "stellte", ["machte", "gab"]],
      ["eine Rolle spielen", "to play a role", "jouer un rôle", "Soziale Medien spielen eine immer größere Rolle.", "spielen", ["machen", "geben"]],
      ["Kritik üben", "to criticise", "critiquer", "Viele Leser übten Kritik an dem Artikel.", "übten", ["machten", "legten"]],
      ["Stellung nehmen", "to comment, to take a position", "prendre position", "Die Firma wollte zu den Vorwürfen nicht Stellung nehmen.", "nehmen", ["geben", "machen"]],
      ["einen Bericht verfassen", "to write a report", "rédiger un article", "Sie verfasst einen Bericht über die Wahl.", "verfasst", ["baut", "zieht"]],
      ["eine Entscheidung treffen", "to make a decision", "prendre une décision", "Die Redaktion hat eine schwierige Entscheidung getroffen.", "getroffen", ["gemacht", "genommen"]],
      ["Aufmerksamkeit erregen", "to attract attention", "attirer l'attention", "Die Schlagzeile hat viel Aufmerksamkeit erregt.", "erregt", ["gemacht", "gelegt"]],
      ["in Frage stellen", "to call into question", "remettre en question", "Experten stellen die Ergebnisse der Studie in Frage.", "stellen", ["legen", "machen"]],
      ["Gerüchte verbreiten", "to spread rumours", "répandre des rumeurs", "Im Internet werden schnell Gerüchte verbreitet.", "verbreitet", ["gebaut", "gelegt"]],
      ["eine Quelle angeben", "to cite a source", "citer une source", "Im Artikel wird keine Quelle angegeben.", "angegeben", ["gesagt", "gelegt"]]
    ],
    wf: [
      ["Die ___ der Presse ist im Grundgesetz garantiert. (FREI)", "Freiheit"],
      ["Die ___ dieser Quelle ist umstritten. (GLAUBWÜRDIG)", "Glaubwürdigkeit"],
      ["Der Artikel war sehr ___ geschrieben, ohne Emotionen. (SACHE)", "sachlich"],
      ["Viele Leser waren über den Artikel ___. (ÄRGERN)", "verärgert"],
      ["Die ___ der Meldung muss noch geprüft werden. (RICHTIG)", "Richtigkeit"],
      ["Die Zeitung hat sich für den Fehler ___. (SCHULD)", "entschuldigt"],
      ["Das ist eine ___ Behauptung: Niemand kann sie beweisen. (HALTEN)", "unhaltbare"],
      ["Die ___ zwischen Bericht und Kommentar ist wichtig. (TRENNEN)", "Trennung"]
    ],
    kwt: [
      ["Der Minister sagte: „Ich bin zufrieden.“", "SEI", "Der Minister sagte, ___.", "er sei zufrieden"],
      ["Man sagt, dass der Sänger krank ist.", "SOLL", "Der Sänger ___.", "soll krank sein"],
      ["Laut Polizei gab es keine Verletzten.", "ZUFOLGE", "Der Polizei ___ keine Verletzten.", "zufolge gab es"],
      ["Er behauptet, dass er nichts gesehen hat.", "WILL", "Er ___.", "will nichts gesehen haben"],
      ["Sie fragte mich: „Hast du Zeit?“", "OB", "Sie fragte mich, ___.", "ob ich Zeit habe|ob ich Zeit hätte"],
      ["Die Journalisten sagten: „Wir haben die Quelle geprüft.“", "HÄTTEN", "Die Journalisten sagten, sie ___.", "hätten die Quelle geprüft"]
    ],
    idioms: [
      ["etwas an die große Glocke hängen", "etwas überall erzählen", "to shout something from the rooftops", "crier quelque chose sur tous les toits", "Häng das bitte nicht an die große Glocke!", "an die große Glocke"],
      ["jemandem einen Bären aufbinden", "jemandem eine Lüge erzählen", "to pull someone's leg, to tell someone a tall story", "raconter des salades à quelqu'un", "Da hat dir jemand einen Bären aufgebunden!", "einen Bären aufgebunden"],
      ["die Katze aus dem Sack lassen", "ein Geheimnis verraten", "to let the cat out of the bag", "vendre la mèche", "Endlich hat der Chef die Katze aus dem Sack gelassen.", "die Katze aus dem Sack gelassen"],
      ["etwas unter den Teppich kehren", "etwas verheimlichen", "to sweep something under the carpet", "cacher quelque chose sous le tapis", "Der Skandal wurde lange unter den Teppich gekehrt.", "unter den Teppich gekehrt"],
      ["eine Ente", "eine Falschmeldung in der Zeitung", "a hoax (in the press)", "un canard (fausse nouvelle)", "Die Nachricht über den Wal im Rhein war eine Ente.", "eine Ente"],
      ["etwas in den falschen Hals bekommen", "etwas falsch verstehen und sich ärgern", "to take something the wrong way", "mal prendre quelque chose", "Er hat meinen Witz in den falschen Hals bekommen.", "in den falschen Hals bekommen"],
      ["um den heißen Brei herumreden", "nicht direkt sagen, worum es geht", "to beat about the bush", "tourner autour du pot", "Red nicht um den heißen Brei herum, sag mir die Wahrheit!", "um den heißen Brei herum"],
      ["Schlagzeilen machen", "in den Medien sehr bekannt werden", "to make headlines", "faire la une", "Der Fall machte im ganzen Land Schlagzeilen.", "Schlagzeilen"]
    ]
  };

  W.COURSE.push({ id: "b2-1", level: "B2", icon: "newspaper", title: "Media and the news", title_fr: "Médias et information",
    intro: "In this first B2 unit, you'll learn to handle the news like a German reader: reported speech with the Konjunktiv I (er sei, sie habe), citing a source and keeping your distance (laut, zufolge, er soll, er will, angeblich), and telling facts from opinions. You'll also discover the Tagesschau, a German institution since 1952.",
    intro_fr: "Dans cette première unité du B2, tu vas apprendre à lire l'information comme un lecteur allemand : le discours indirect au Konjunktiv I (er sei, sie habe), citer une source et prendre ses distances (laut, zufolge, er soll, er will, angeblich), et distinguer les faits des opinions. Tu découvriras aussi la Tagesschau, une institution allemande depuis 1952.",
    can: ["Report what someone said with the Konjunktiv I", "Cite a source with laut, zufolge and nach Angaben", "Show distance with sollen, wollen and angeblich", "Tell a report from an opinion piece and question a source", "Write a structured opinion of about 150 words (Goethe B2)"],
    can_fr: ["Rapporter des paroles au Konjunktiv I", "Citer une source avec laut, zufolge et nach Angaben", "Prendre ses distances avec sollen, wollen et angeblich", "Distinguer un compte rendu d'un article d'opinion et interroger une source", "Écrire un avis structuré d'environ 150 mots (Goethe B2)"],
    lessons: [73, 74, 75], vocab: ["nachrichtenDE", "infokritikDE"], reading: "tagesschau", prompt: "de-b2-1",
    writing: { task: "In an online forum, someone writes: “Newspapers are pointless now that all the news is free online.” Give your opinion (150-180 words): report the claim, take a position, give arguments and an example, mention the other side, and conclude.", task_fr: "Sur un forum en ligne, quelqu'un écrit : « Les journaux ne servent plus à rien, puisque toutes les informations sont gratuites sur Internet. » Donne ton avis (150 à 180 mots) : rapporte cette affirmation, prends position, donne des arguments et un exemple, évoque l'autre point de vue, et conclus.", words: "150-180",
      tips: ["In der Diskussion heißt es oft, …", "Diese Meinung teile ich nur zum Teil.", "Ein entscheidender Vorteil ist…", "Andererseits…", "Mein Fazit: …"],
      checklist: ["I reported the claim with the Konjunktiv I", "I gave a nuanced position", "I supported my arguments with an example", "I mentioned the other side", "I wrote between 150 and 180 words"],
      checklist_fr: ["J'ai rapporté l'affirmation au Konjunktiv I", "J'ai donné une position nuancée", "J'ai appuyé mes arguments sur un exemple", "J'ai évoqué l'autre point de vue", "J'ai écrit entre 150 et 180 mots"],
      model: "In der Diskussion heißt es oft, Zeitungen seien überflüssig geworden, weil man alle Nachrichten kostenlos im Internet finde. Diese Meinung teile ich nur zum Teil.\n\nNatürlich informiere auch ich mich meistens am Handy. Gerade deshalb ist mir aber aufgefallen, wie viele Meldungen in den sozialen Medien ungeprüft verbreitet werden. Eine Falschmeldung ist schnell geteilt, eine Korrektur liest dagegen kaum jemand. Letzten Monat hieß es zum Beispiel in vielen Beiträgen, ein bekannter Schauspieler sei gestorben. Zwei Stunden später war klar: Das war eine Ente.\n\nSeriöse Zeitungen haben einen entscheidenden Vorteil: Ihre Journalistinnen und Journalisten prüfen Quellen, bevor sie etwas veröffentlichen, und trennen Bericht und Kommentar. Das kostet Zeit und Geld, und deshalb finde ich es fair, für guten Journalismus zu bezahlen.\n\nAndererseits müssen sich die Zeitungen verändern, wenn sie junge Leserinnen und Leser erreichen wollen: mit guten Apps, kurzen Formaten und Podcasts.\n\nMein Fazit: Zeitungen sind nicht überflüssig. Sie werden vielleicht seltener gedruckt, aber verlässliche Informationen brauchen wir heute mehr denn je." } });
})();
