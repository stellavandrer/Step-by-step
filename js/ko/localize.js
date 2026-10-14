/* Cours de coréen, chargé après les unités, le dictionnaire et les voix, avant le moteur.
   Tout le contenu existe en anglais et en français : ce fichier garde la version de la langue d'interface (celle
   choisie en haut de la page, sinon celle du navigateur) et lui donne la forme qu'attend le moteur.
   Changer de langue recharge la page (APP.reloadOnLang).

   Conventions des données coréennes (en = anglais, fr = français) :
   - vocabulaire : [coréen, en, fr, exemple] ; un verbe ou un adjectif s'écrit au dictionnaire (가다, 춥다) avec
     une traduction anglaise en « to … » (« to go », « to be cold ») : c'est ce qui permet au moteur d'en
     retrouver toutes les formes conjuguées (갔어요, 추워요) au clic. Les adjectifs commencent par « to be ».
   - exemples de leçon : [coréen, en, fr] ; quiz : q / q_fr, o / o_fr (options), ex / ex_fr
   - DRILLS gap : [phrase, réponse, indice en, indice fr] (un indice seul = le même dans les deux langues)
     fix : [phrase fausse, correction, pourquoi en, pourquoi fr] ; task : [consigne en, consigne fr, modèle]
   - jeux de rôle : role / role_fr ; répliques { p, en, fr } et { y, en, fr, why, why_fr }
   - textes : paragraphes { ko, en, fr }, glossaire { mot tel qu'il est écrit dans le texte: [en, fr] }
   - ateliers d'écoute : words [[coréen, en, fr]] ; sujets d'oral : { q, en, fr }
   - écrits : checklist / checklist_fr ; atelier de langue : colloc [coréen, en, fr, exemple, mot, leurres],
     idioms [expression, définition coréenne, en, fr, exemple, forme exacte]
   - dictionnaire : DICT_KO { mot: [en, fr] } (chaîne vide = pas de traduction dans cette langue) */
(function () {
  const W = window, A = W.APP;
  let L = A.defaultLang || "en";
  try { const st = JSON.parse(localStorage.getItem(A.key) || "{}"); L = st.lang || L; } catch (e) { /* stockage indisponible */ }
  const FR = L === "fr";
  A.helper = FR ? "fr" : "en";
  A.helperCode = FR ? "FR" : "EN";
  const t = (en, fr) => (FR && fr != null && fr !== "" ? fr : en);

  /* Verbes et adjectifs (traduction anglaise en « to … ») : le moteur en génère les formes conjuguées.
     Les composés de 있다 / 없다 (맛있다, 재미없다) se conjuguent comme des verbes (맛있는). 이다 et 아니다 sont dans forms.js. */
  const PRED = {};
  const pred = (k, en) => {
    k = String(k).replace(/[?!.…~]/g, "").trim();
    if (!/다$/.test(k) || / /.test(k) || k === "이다" || k === "아니다" || !/^to /.test(String(en || ""))) return;
    if (!PRED[k]) PRED[k] = /^to be /.test(en) && !/[있없]다$/.test(k) ? "adj" : "v";
  };
  W.VOCAB.forEach((th) => th.words.forEach((w) => w[0].split(" / ").forEach((k, i) => pred(k, w[1].split(" / ")[i] || w[1]))));
  Object.entries(W.DICT_KO || {}).forEach(([k, v]) => pred(k, v[0]));
  W.KO_PRED = PRED;

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
    r.paragraphs = r.paragraphs.map((p) => ({ en: p.ko, fr: t(p.en, p.fr) }));
    const g = {};
    Object.entries(r.glossary || {}).forEach(([k, v]) => { g[k] = Array.isArray(v) ? t(v[0], v[1]) : v; });
    r.glossary = g;
  });
  W.LAB.forEach((x) => { x.words = x.words.map((w) => [w[0], t(w[1], w[2])]); });
  W.PROMPTS.forEach((p) => { p.fr = t(p.en, p.fr); });
  W.COURSE.forEach((u) => { if (u.writing && FR && u.writing.checklist_fr) u.writing.checklist = u.writing.checklist_fr; });
  Object.values(W.LEXIS).forEach((x) => {
    if (x.colloc) x.colloc = x.colloc.map((c) => [c[0], t(c[1], c[2]), c[3], c[4], c[5]]);
    if (x.idioms) x.idioms = x.idioms.map((i) => [i[0], i[1], t(i[2], i[3]), i[4], i[5]]);
  });
  const D = {};
  Object.entries(W.DICT_KO || {}).forEach(([k, v]) => { const tr = FR ? v[1] : v[0]; if (tr) D[k] = tr; });
  W.DICT_TARGET = D;
})();
