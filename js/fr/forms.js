/* Cours de français : formes conjuguées des verbes irréguliers, pour la traduction au clic
   (« suis » → être, « vais » → aller). [infinitif, note affichée]. Les verbes réguliers en -er, -ir, -re
   sont reconnus par leurs terminaisons (lookupFr dans app.js) ; on complète cette liste au fil des unités. */
(function () {
  const F = window.FR_FORMS;
  const add = (base, list) => list.forEach(([form, note]) => { if (!F[form]) F[form] = [base, note]; });
  add("être", [["suis", "je suis"], ["es", "tu es"], ["est", "il / elle / on est"], ["sommes", "nous sommes"], ["êtes", "vous êtes"], ["sont", "ils / elles sont"], ["étais", "imperfect"], ["était", "imperfect"], ["étaient", "imperfect"], ["serai", "future"], ["sera", "future"], ["sois", "subjunctive"], ["soit", "subjunctive"]]);
  add("avoir", [["ai", "j'ai"], ["as", "tu as"], ["a", "il / elle / on a"], ["avons", "nous avons"], ["avez", "vous avez"], ["ont", "ils / elles ont"], ["eu", "past participle"], ["avais", "imperfect"], ["avait", "imperfect"], ["aurai", "future"], ["aura", "future"], ["aie", "subjunctive"]]);
  add("aller", [["vais", "je vais"], ["vas", "tu vas"], ["va", "il / elle / on va"], ["allons", "nous allons"], ["allez", "vous allez"], ["vont", "ils / elles vont"], ["allé", "past participle"], ["allée", "past participle"], ["irai", "future"], ["ira", "future"]]);
  add("faire", [["fais", "je / tu fais"], ["fait", "il / elle fait; past participle"], ["faisons", "nous faisons"], ["faites", "vous faites"], ["font", "ils / elles font"], ["ferai", "future"]]);
  add("s'appeler", [["appelle", "je m'appelle, il s'appelle"], ["appelles", "tu t'appelles"], ["appelons", "nous nous appelons"], ["appelez", "vous vous appelez"], ["appellent", "ils s'appellent"]]);
  add("épeler", [["épelle", "j'épelle"], ["épelles", "tu épelles"], ["épellent", "ils épellent"]]);
  add("pouvoir", [["peux", "je / tu peux"], ["peut", "il / elle peut"], ["pouvons", "nous pouvons"], ["pouvez", "vous pouvez"], ["peuvent", "ils / elles peuvent"], ["pu", "past participle"], ["pourrais", "conditional"]]);
  add("vouloir", [["veux", "je / tu veux"], ["veut", "il / elle veut"], ["voulons", "nous voulons"], ["voulez", "vous voulez"], ["veulent", "ils / elles veulent"], ["voudrais", "I would like"], ["voudrait", "would like"], ["voulu", "past participle"]]);
  add("venir", [["viens", "je / tu viens"], ["vient", "il / elle vient"], ["venons", "nous venons"], ["venez", "vous venez"], ["viennent", "ils / elles viennent"], ["venu", "past participle"], ["venue", "past participle"]]);
  add("prendre", [["prends", "je / tu prends"], ["prend", "il / elle prend"], ["prenons", "nous prenons"], ["prenez", "vous prenez"], ["prennent", "ils / elles prennent"], ["pris", "past participle"]]);
  add("parler", [["parle", "je / il / elle parle"], ["parles", "tu parles"], ["parlons", "nous parlons"], ["parlez", "vous parlez"], ["parlent", "ils / elles parlent"]]);
  add("habiter", [["habite", "j'habite, il / elle habite"], ["habites", "tu habites"], ["habitons", "nous habitons"], ["habitez", "vous habitez"], ["habitent", "ils / elles habitent"]]);
  add("boire", [["bois", "je / tu bois"], ["boit", "il / elle boit"], ["buvons", "nous buvons"], ["buvez", "vous buvez"], ["boivent", "ils / elles boivent"], ["bu", "past participle"]]);
  add("acheter", [["achète", "j'achète, il achète"], ["achètes", "tu achètes"], ["achètent", "ils achètent"]]);
  add("sentir", [["sent", "il / elle sent"], ["sens", "je / tu sens"]]);
  add("se lever", [["lève", "je me lève, il se lève"], ["lèves", "tu te lèves"], ["lèvent", "ils se lèvent"]]);
  add("dormir", [["dors", "je / tu dors"], ["dort", "il / elle dort"], ["dorment", "ils dorment"]]);
  add("partir", [["pars", "je / tu pars"], ["part", "il / elle part"], ["partent", "ils partent"]]);
  add("lire", [["lis", "je / tu lis"], ["lit", "il / elle lit"], ["lisent", "ils lisent"]]);
  add("finir", [["finis", "je / tu finis"], ["finit", "il / elle finit"], ["finissent", "ils finissent"]]);
  add("devoir", [["dois", "je / tu dois"], ["doit", "il / elle doit"], ["devons", "nous devons"], ["devez", "vous devez"], ["doivent", "ils / elles doivent"], ["dû", "past participle"]]);
  add("pleuvoir", [["pleut", "il pleut"], ["plu", "past participle"]]);
  add("neiger", [["neige", "il neige"]]);
  /* Common words whose form hides the dictionary entry. */
  add("il y a", [["y", "il y a = there is / there are"]]);
})();
