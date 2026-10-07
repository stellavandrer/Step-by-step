/* Cours d'allemand, chargé après les unités et le dictionnaire, avant le moteur.
   Tout le contenu existe en anglais et en français : ce fichier garde la version de la langue d'interface
   (celle choisie en haut de la page, sinon celle du navigateur) et lui donne la forme qu'attend le moteur.
   Changer de langue recharge la page (APP.reloadOnLang).

   Conventions des données allemandes (en = anglais, fr = français) :
   - vocabulaire : [allemand, en, fr, exemple]
   - exemples de leçon : [allemand, en, fr] ; quiz : q / q_fr, o / o_fr (options), ex / ex_fr
   - DRILLS gap : [phrase, réponse, indice en, indice fr] (un indice seul = le même dans les deux langues)
     fix : [phrase fausse, correction, pourquoi en, pourquoi fr] ; task : [consigne en, consigne fr, modèle]
   - jeux de rôle : role / role_fr ; répliques { p, en, fr } et { y, en, fr, why, why_fr }
   - textes : paragraphes { de, en, fr }, glossaire { mot: [en, fr] }
   - ateliers d'écoute : words [[allemand, en, fr]] ; sujets d'oral : { q, en, fr }
   - écrits : checklist / checklist_fr ; atelier de langue : colloc [allemand, en, fr, exemple, mot, leurres],
     idioms [expression, définition allemande, en, fr, exemple, forme exacte]
   - dictionnaire : DICT_DE { mot: [en, fr] } (chaîne vide = mot identique dans cette langue, pas d'entrée) */
(function () {
  const W = window, A = W.APP;
  let L = A.defaultLang || "en", H = "";
  try { const st = JSON.parse(localStorage.getItem(A.key) || "{}"); L = st.lang || L; H = st.helpLang || ""; } catch (e) { /* stockage indisponible */ }
  /* Interface en allemand = immersion : les traductions restent dans la langue choisie avant (helpLang). */
  const FR = L === "fr" || (L === "de" && (H || A.defaultLang) === "fr");
  A.helper = FR ? "fr" : "en";
  A.helperCode = FR ? "FR" : "EN";
  const t = (en, fr) => (FR && fr != null && fr !== "" ? fr : en);

  W.VOCAB.forEach((th) => { th.words = th.words.map((w) => [w[0], t(w[1], w[2]), w[3]]); });
  W.LESSONS.forEach((l) => {
    l.examples = (l.examples || []).map((e) => [e[0], t(e[1], e[2])]);
    (l.quiz || []).forEach((q) => { if (FR && q.o_fr) q.o = q.o_fr; });
  });
  Object.values(W.DRILLS).forEach((d) => {
    if (d.gap) d.gap = d.gap.map((g) => [g.length > 2 ? `${g[0]} (${t(g[2], g[3])})` : g[0], g[1]]);
    if (d.fix) d.fix = d.fix.map((f) => [f[0], f[1], t(f[2], f[3])]);
  });
  W.ROLEPLAYS.forEach((r) => {
    r.role = t(r.role, r.role_fr);
    r.turns = r.turns.map((x) => (x.y ? { y: x.y, fr: t(x.en, x.fr), why: t(x.why, x.why_fr) } : { p: x.p, fr: t(x.en, x.fr) }));
  });
  W.READINGS.forEach((r) => {
    r.paragraphs = r.paragraphs.map((p) => ({ en: p.de, fr: t(p.en, p.fr) }));
    const g = {};
    /* German nouns have a capital letter; the click looks words up in lower case. */
    Object.entries(r.glossary || {}).forEach(([k, v]) => { g[k.toLowerCase()] = Array.isArray(v) ? t(v[0], v[1]) : v; });
    r.glossary = g;
  });
  W.LAB.forEach((x) => { x.words = x.words.map((w) => [w[0], t(w[1], w[2])]); });
  W.PROMPTS.forEach((p) => { p.fr = t(p.en, p.fr); });
  W.COURSE.forEach((u) => { if (u.writing && FR && u.writing.checklist_fr) u.writing.checklist = u.writing.checklist_fr; });
  Object.values(W.LEXIS).forEach((x) => {
    if (x.colloc) x.colloc = x.colloc.map((c) => [c[0], t(c[1], c[2]), c[3], c[4], c[5]]);
    if (x.idioms) x.idioms = x.idioms.map((i) => [i[0], i[1], t(i[2], i[3]), i[4], i[5]]);
  });
  Object.keys(W.DE_FORMS).forEach((k) => { const f = W.DE_FORMS[k]; W.DE_FORMS[k] = [f[0], t(f[1], f[2])]; });
  const D = {};
  Object.entries(W.DICT_DE || {}).forEach(([k, v]) => { const tr = FR ? v[1] : v[0]; if (tr) D[k] = tr; });
  W.DICT_TARGET = D;
})();
