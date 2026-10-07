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
})();
