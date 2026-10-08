/* Cours d'allemand : formes irrégulières ou difficiles à retrouver, pour la traduction au clic.
   Une entrée = forme en minuscules → [forme de base, note anglaise, note française] ; une note en allemand
   (« ich bin ») sert pour les deux langues. Les terminaisons régulières (macht, gemacht, Kinder, Häuser,
   kleinen) sont retrouvées par lookupDe() dans app.js. */
(function () {
  const F = window.DE_FORMS;
  const P = ["ich", "du", "er / sie / es", "wir", "ihr", "sie / Sie"];
  const put = (k, v) => { k = k.toLowerCase(); if (!F[k]) F[k] = v; };
  /* présent : pres("sein", "bin bist ist sind seid sind") */
  const pres = (base, forms) => forms.split(" ").forEach((f, i) => put(f, [base, P[i] + " " + f]));
  /* prétérit : prat("sein", "war warst war waren wart waren") */
  const prat = (base, forms) => forms.split(" ").forEach((f, i) => put(f, [base, `${P[i]} ${f} (simple past)`, `${P[i]} ${f} (prétérit)`]));
  /* participe passé : pp("sein", "gewesen") */
  const pp = (base, f) => put(f, [base, "past participle", "participe passé"]);
  /* formes isolées : add("sein", [["sei", "subjunctive", "subjonctif"]]) */
  const add = (base, list) => list.forEach(([f, en, fr]) => put(f, [base, en, fr]));

  /* "sein:v" = the verb (to be), not the possessive sein (his): see "sein:v" in dict.js */
  pres("sein:v", "bin bist ist sind seid sind");
  pres("haben", "habe hast hat haben habt haben");
  prat("sein:v", "war warst war waren wart waren");
  prat("haben", "hatte hattest hatte hatten hattet hatten");
  pp("sein:v", "gewesen"); pp("haben", "gehabt");
  pres("sprechen", "spreche sprichst spricht sprechen sprecht sprechen");
  pres("können", "kann kannst kann können könnt können");
  pres("dürfen", "darf darfst darf dürfen dürft dürfen");
  pres("müssen", "muss musst muss müssen müsst müssen");
  pres("wollen", "will willst will wollen wollt wollen");
  pres("mögen", "mag magst mag mögen mögt mögen");
  pres("wissen", "weiß weißt weiß wissen wisst wissen");
  pres("werden", "werde wirst wird werden werdet werden");
  pres("fahren", "fahre fährst fährt fahren fahrt fahren");
  pres("essen", "esse isst isst essen esst essen");
  pres("lesen", "lese liest liest lesen lest lesen");
  pres("sehen", "sehe siehst sieht sehen seht sehen");
  pres("nehmen", "nehme nimmst nimmt nehmen nehmt nehmen");
  pres("geben", "gebe gibst gibt geben gebt geben");
  pres("schlafen", "schlafe schläfst schläft schlafen schlaft schlafen");
  pres("tragen", "trage trägst trägt tragen tragt tragen");
  add("haben", [["hätte", "would have (ich hätte gern: I'd like)", "aurais (ich hätte gern : je voudrais)"], ["hättest", "would have (du)", "aurais (du)"]]);
  add("empfehlen", [["empfiehlt", "er / sie / es empfiehlt"], ["empfiehlst", "du empfiehlst"]]);
  /* participes irréguliers */
  [["essen", "gegessen"], ["trinken", "getrunken"], ["schreiben", "geschrieben"], ["treffen", "getroffen"], ["gehen", "gegangen"], ["bleiben", "geblieben"],
   ["helfen", "geholfen"], ["schwimmen", "geschwommen"], ["fliegen", "geflogen"], ["verstehen", "verstanden"], ["gewinnen", "gewonnen"], ["finden", "gefunden"],
   ["aufstehen", "aufgestanden"], ["ausgehen", "ausgegangen"], ["umziehen", "umgezogen"], ["stehen", "gestanden"], ["singen", "gesungen"], ["nehmen", "genommen"],
   ["sprechen", "gesprochen"], ["bringen", "gebracht"], ["denken", "gedacht"], ["wissen", "gewusst"], ["kennen", "gekannt"], ["beginnen", "begonnen"],
   ["anfangen", "angefangen"], ["anrufen", "angerufen"], ["einladen", "eingeladen"], ["mitbringen", "mitgebracht"], ["werden", "geworden"]].forEach(([b, f]) => pp(b, f));
  pres("sollen", "soll sollst soll sollen sollt sollen");
  add("sein:v", [["wäre", "would be", "serait"], ["wären", "would be", "serions, seraient"]]);
  add("werden", [["würde", "would", "-rais (conditionnel)"], ["würdest", "would (du)", "-rais (conditionnel, du)"]]);
  /* prétérit des verbes de modalité et de wissen */
  prat("können", "konnte konntest konnte konnten konntet konnten");
  prat("müssen", "musste musstest musste mussten musstet mussten");
  prat("dürfen", "durfte durftest durfte durften durftet durften");
  prat("wollen", "wollte wolltest wollte wollten wolltet wollten");
  prat("wissen", "wusste wusstest wusste wussten wusstet wussten");
  pp("müssen", "gemusst"); pp("können", "gekonnt"); pp("wollen", "gewollt");
  pres("fallen", "falle fällst fällt fallen fallt fallen");
  pres("helfen", "helfe hilfst hilft helfen helft helfen");
  prat("werden", "wurde wurdest wurde wurden wurdet wurden");
  pp("anziehen", "angezogen"); pp("ausziehen", "ausgezogen");
  pres("laufen", "laufe läufst läuft laufen lauft laufen");
  pp("brechen", "gebrochen"); pp("schneiden", "geschnitten"); pp("krankschreiben", "krankgeschrieben");
  pres("vergessen", "vergesse vergisst vergisst vergessen vergesst vergessen");
  add("vergessen", [["vergiss", "imperative (du)", "impératif (du)"]]);
  /* impératifs irréguliers (du) */
  add("nehmen", [["nimm", "imperative (du)", "impératif (du)"]]);
  add("sprechen", [["sprich", "imperative (du)", "impératif (du)"]]);
  add("geben", [["gib", "imperative (du)", "impératif (du)"]]);
  add("lesen", [["lies", "imperative (du)", "impératif (du)"]]);
  add("sehen", [["sieh", "imperative (du)", "impératif (du)"]]);
  add("essen", [["iss", "imperative (du)", "impératif (du)"]]);
  add("sein:v", [["sei", "imperative (du)", "impératif (du)"], ["seien", "imperative (Sie)", "impératif (Sie)"]]);
  /* prétérit des verbes irréguliers (récits, contes) */
  prat("gehen", "ging gingst ging gingen gingt gingen");
  prat("kommen", "kam kamst kam kamen kamt kamen");
  prat("sehen", "sah sahst sah sahen saht sahen");
  prat("finden", "fand fandest fand fanden fandet fanden");
  prat("geben", "gab gabst gab gaben gabt gaben");
  prat("nehmen", "nahm nahmst nahm nahmen nahmt nahmen");
  prat("sprechen", "sprach sprachst sprach sprachen spracht sprachen");
  prat("rufen", "rief riefst rief riefen rieft riefen");
  prat("laufen", "lief liefst lief liefen lieft liefen");
  prat("schlafen", "schlief schliefst schlief schliefen schlieft schliefen");
  prat("essen", "aß aßest aß aßen aßt aßen");
  prat("bleiben", "blieb bliebst blieb blieben bliebt blieben");
  prat("reiten", "ritt rittst ritt ritten rittet ritten");
  prat("vergessen", "vergaß vergaßest vergaß vergaßen vergaßt vergaßen");
  prat("schreiben", "schrieb schriebst schrieb schrieben schriebt schrieben");
  prat("beginnen", "begann begannst begann begannen begannt begannen");
  prat("erscheinen", "erschien erschienst erschien erschienen erschient erschienen");
  pp("sterben", "gestorben");
  pres("lassen", "lasse lässt lässt lassen lasst lassen");
  pres("stoßen", "stoße stößt stößt stoßen stoßt stoßen");
  add("dunkel", [["dunkle", "dark (dunkel + -e)", "sombre (dunkel + -e)"], ["dunklen", "dark (dunkel + -en)", "sombre (dunkel + -en)"], ["dunkler", "dark (dunkel + -er); darker", "sombre (dunkel + -er) ; plus sombre"], ["dunkles", "dark (dunkel + -es)", "sombre (dunkel + -es)"], ["dunklem", "dark (dunkel + -em)", "sombre (dunkel + -em)"]]);
  /* Konjunktiv II (politesse, souhaits, conseils) */
  const k2 = (base, forms) => forms.split(" ").forEach((f, i) => put(f, [base, `${P[i]} ${f} (polite / would)`, `${P[i]} ${f} (conditionnel)`]));
  k2("haben", "hätte hättest hätte hätten hättet hätten");
  k2("sein:v", "wäre wärst wäre wären wärt wären");
  k2("werden", "würde würdest würde würden würdet würden");
  k2("können", "könnte könntest könnte könnten könntet könnten");
  k2("mögen", "möchte möchtest möchte möchten möchtet möchten");
  prat("bekommen", "bekam bekamst bekam bekamen bekamt bekamen");
  prat("verstehen", "verstand verstandest verstand verstanden verstandet verstanden");
  prat("sterben", "starb starbst starb starben starbt starben");
  prat("singen", "sang sangst sang sangen sangt sangen");
  prat("nennen", "nannte nanntest nannte nannten nanntet nannten");
  pp("versprechen", "versprochen"); pp("bekommen", "bekommen"); pp("verbinden", "verbunden"); pp("hinterlassen", "hinterlassen");
  pp("wegwerfen", "weggeworfen"); pp("nennen", "genannt");
  pres("versprechen", "verspreche versprichst verspricht versprechen versprecht versprechen");
  add("wegwerfen", [["wirf", "imperative (du)", "impératif (du)"]]);
  add("werfen", [["wirf", "imperative (du)", "impératif (du)"]]);
  /* sollte : le conseil (Konjunktiv II), qui a la même forme que le prétérit */
  "sollte solltest sollte sollten solltet sollten".split(" ").forEach((f, i) => put(f, ["sollen", `${P[i]} ${f} (should; also the simple past)`, `${P[i]} ${f} (devrait ; aussi le prétérit)`]));
  /* B1-1 : prétérit des verbes irréguliers et mixtes */
  prat("fahren", "fuhr fuhrst fuhr fuhren fuhrt fuhren");
  prat("fliegen", "flog flogst flog flogen flogt flogen");
  prat("lesen", "las last las lasen last lasen");
  prat("liegen", "lag lagst lag lagen lagt lagen");
  prat("sitzen", "saß saßt saß saßen saßt saßen");
  prat("stehen", "stand standst stand standen standet standen");
  prat("treffen", "traf trafst traf trafen traft trafen");
  prat("trinken", "trank trankst trank tranken trankt tranken");
  prat("ziehen", "zog zogst zog zogen zogt zogen");
  prat("fallen", "fiel fielst fiel fielen fielt fielen");
  prat("heißen", "hieß hießt hieß hießen hießt hießen");
  prat("geschehen", "geschah geschahst geschah geschahen geschaht geschahen");
  prat("riechen", "roch rochst roch rochen rocht rochen");
  prat("kennen", "kannte kanntest kannte kannten kanntet kannten");
  prat("denken", "dachte dachtest dachte dachten dachtet dachten");
  prat("bringen", "brachte brachtest brachte brachten brachtet brachten");
  prat("schreiben", "schrieb schriebst schrieb schrieben schriebt schrieben");
  prat("finden", "fand fandest fand fanden fandet fanden");
  pp("ziehen", "gezogen"); pp("bestehen", "bestanden"); pp("erschrecken", "erschrocken"); pp("verbrennen", "verbrannt"); pp("geschehen", "geschehen"); pp("riechen", "gerochen");
  add("geben", [["gibt's", "es gibt (there is)", "es gibt (il y a)"]]);
  /* B1-2 */
  pp("steigen", "gestiegen"); pp("unterschreiben", "unterschrieben"); pp("überweisen", "überwiesen"); pp("wohlfühlen", "wohlgefühlt"); pp("verlassen", "verlassen");
  pres("raten", "rate rätst rät raten ratet raten");
  pres("verlassen", "verlasse verlässt verlässt verlassen verlasst verlassen");
  prat("steigen", "stieg stiegst stieg stiegen stiegt stiegen");
  /* B1-3 : le passif */
  add("werden", [["worden", "participle in the passive (ist … worden)", "participe du passif (ist … worden)"]]);
  pp("stehlen", "gestohlen"); pp("werfen", "geworfen");
  pres("stehlen", "stehle stiehlst stiehlt stehlen stehlt stehlen");
  /* B1-4 */
  add("gymnasium", [["gymnasien", "plural", "pluriel"]]);
  add("studium", [["studien", "plural", "pluriel"]]);
  pres("halten", "halte hältst hält halten haltet halten");
  pp("nachdenken", "nachgedacht");
  /* B1-5 */
  pres("werfen", "werfe wirfst wirft werfen werft werfen");
  pp("kaputtgehen", "kaputtgegangen");
  /* B1-6 */
  pres("treffen", "treffe triffst trifft treffen trefft treffen");
  pp("verlieren", "verloren");
  add("fit", [["fitter", "fitter (comparative)", "plus en forme (comparatif)"], ["fitteste", "the fittest", "le plus en forme"]]);
  /* B1-7 : Konjunktiv II écrit, pluriels et e qui tombe */
  k2("kommen", "käme kämest käme kämen kämet kämen");
  k2("gehen", "ginge gingest ginge gingen ginget gingen");
  k2("müssen", "müsste müsstest müsste müssten müsstet müssten");
  k2("dürfen", "dürfte dürftest dürfte dürften dürftet dürften");
  k2("wissen", "wüsste wüsstest wüsste wüssten wüsstet wüssten");
  k2("brauchen", "bräuchte bräuchtest bräuchte bräuchten bräuchtet bräuchten");
  add("konto", [["konten", "plural", "pluriel"]]);
  add("teuer", [["teure", "expensive (teuer + -e)", "cher (teuer + -e)"], ["teures", "expensive (teuer + -es)", "cher (teuer + -es)"], ["teuren", "expensive (teuer + -en)", "cher (teuer + -en)"], ["teurem", "expensive (teuer + -em)", "cher (teuer + -em)"]]);
  pp("geben", "gegeben"); pp("überziehen", "überzogen");
})();
