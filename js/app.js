(function () {
"use strict";

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
const app = $("#app");
const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* ================= Icons (Lucide) ================= */
/* Icons are drawn from js/icons.js (local SVG shapes), so they never depend on an external server. */
const svgIcon = (name, cls) => {
  const shapes = (window.ICONS || {})[name];
  return shapes
    ? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-${name} ic ${cls}" aria-hidden="true">${shapes}</svg>`
    : `<i class="ic ${cls}" aria-hidden="true"></i>`;
};
const ic = (name, cls = "") => svgIcon(name, cls);

/* ================= Which course this page is =================
   index.html is the English course (for French speakers); francais.html sets window.APP for the French course
   (for English speakers), allemand.html for the German course (for French or English speakers: the explanations and
   translations follow the interface language, chosen by js/de/localize.js before the engine starts). The engine is
   the same: only the target language, its voices, its dictionary and the saved progress change. "target" is the
   language taught, "helper" the learner's own language. */
const APP = Object.assign({
  id: "en", target: "en", helper: "fr", helperCode: "FR", key: "stepbystep.v1",
  voiceLang: "en-GB", srLang: "en-US", learner: "", hello: null
}, window.APP || {});
const TARGET_RE = new RegExp("^" + APP.target + "[-_]", "i");
const FRENCH_COURSE = APP.target === "fr";
const GERMAN_COURSE = APP.target === "de";
/* A course whose interface is in the learner's own language, not in the language taught (French, German). */
const FOREIGN = APP.target !== "en";
/* The interface texts are written for the English course: in the French course, the two language names swap
   ("from French to English" becomes "from English to French"), in English and in French. In the German course,
   English becomes German, and in the English interface French (the helper of the English course) becomes English. */
const SWAP_DE_EN = [[/\bEnglish\b/g, "German"], [/\bFrench\b/g, "English"], [/\bBritish and American\b/g, "regional"]];
const SWAP_DE_FR = [[/\banglaise(s?)\b/g, "allemande$1"], [/\banglais\b/g, "allemand"], [/\bAnglais\b/g, "Allemand"], [/\banglophone(s?)\b/g, "germanophone$1"]];
const SWAP_FR = FRENCH_COURSE ? [
  [/\bEnglish\b/g, "French"], [/\bFrench\b/g, "English"], [/\bBritish and American\b/g, "regional"],
  [/\bd'anglais\b/g, "de français"], [/\bde français\b/g, "d'anglais"], [/\bl'anglais\b/g, "le français"], [/\ble français\b/g, "l'anglais"],
  [/\banglaise(s?)\b/g, "française$1"], [/\bfrançaise(s?)\b/g, "anglaise$1"], [/\banglais\b/g, "français"], [/\bfrançais\b/g, "anglais"],
  [/\bAnglais\b/g, "Français"], [/\bFrançais\b/g, "Anglais"], [/\banglophone(s?)\b/g, "francophone$1"], [/\bfrancophone(s?)\b/g, "anglophone$1"]
] : [];
/* Course content (English or French) and the German interface: two different swaps. The German interface names the
   English course's languages ("Englisch", "Französisch"); in the French course they swap, in the German course
   English becomes German and French (the English course's helper) becomes the learner's own language. */
const contentSwap = () => (GERMAN_COURSE ? (isFr() ? SWAP_DE_FR : SWAP_DE_EN) : SWAP_FR);
const SWAP_UI_DE = FRENCH_COURSE ? [[/Englisch/g, "Französisch"], [/englisch/g, "französisch"], [/Französisch/g, "Englisch"], [/französisch/g, "englisch"]]
  : GERMAN_COURSE ? [[/Englisch/g, "Deutsch"], [/englisch/g, "deutsch"]] : [];
const SWAP_UI_DE_HELP_EN = [[/Französisch/g, "Englisch"], [/französisch/g, "englisch"]];
const swapList = () => (lang() !== "de" ? contentSwap() : GERMAN_COURSE && !isFr() ? SWAP_UI_DE.concat(SWAP_UI_DE_HELP_EN) : SWAP_UI_DE);
function swapNames(t, list) {
  const SWAP = list || swapList();
  if (!SWAP.length || !t) return t;
  /* All at once, through placeholders, so a name swapped once isn't swapped back. */
  const marks = [];
  SWAP.forEach(([re, to]) => { t = t.replace(re, (...m) => { marks.push(to.replace(/\$1/g, m[1] || "")); return "\u0001" + (marks.length - 1) + "\u0002"; }); });
  return t.replace(/\u0001(\d+)\u0002/g, (_, i) => marks[i]);
}

/* ================= Interface language =================
   The course content stays in English: only the interface changes.
   T("English text", {vars}) gives the text in the chosen language (English if no translation).
   loc(obj, "title") gives obj.title_fr in French when it exists.
   instr(en, fr): an instruction in English with its FR button, or directly in French. */
const LANGS = [["en", "English"], ["fr", "Français"], ["de", "Deutsch"]];
const lang = () => (typeof S !== "undefined" && S.lang) || APP.defaultLang || "en";
/* Language of explanations and translations: the interface language, except with the German interface, where they
   stay in English (the course content exists in English and French only). In the German course, German is
   immersion: translations stay in the learner's language, the one chosen before switching (S.helpLang). */
const helpLang = () => { const l = lang(); if (l !== "de") return l; return GERMAN_COURSE ? ((typeof S !== "undefined" && S.helpLang) || APP.defaultLang || "en") : "en"; };
/* Interface texts written out in the code, in the three interface languages. */
const ui3 = (en, f, de) => (lang() === "de" ? de : lang() === "fr" ? f : en);
/* Immersion: the interface is in the language being learnt. */
const immersion = () => lang() === APP.target;
/* Everything on the page is in the language taught (the French course in French). In the German course, the German
   interface still has explanations in English or French: only the German is clickable there. */
const fullImmersion = () => immersion() && !GERMAN_COURSE;
const isFr = () => helpLang() === "fr";
function T(s, vars) {
  const d = (window.UI_TEXT || {})[lang()];
  const own = ((APP.ui || {})[lang()] || {})[s];
  /* No German version yet: the English text, with the English swap of the language names. */
  const tr = d && d[s];
  let out = own || (tr || lang() !== "de" ? swapNames(tr || s) : swapNames(s, GERMAN_COURSE ? SWAP_DE_EN : SWAP_FR));
  if (vars) out = out.replace(/\{(\w+)\}/g, (_, k) => (vars[k] != null ? vars[k] : ""));
  return out;
}
const Tn = (n, one, many, vars) => T(n > 1 ? many : one, Object.assign({ n }, vars || {}));
const loc = (o, k) => (o && lang() === "de" && o[k + "_de"]) || (o && helpLang() !== "en" && o[k + "_" + helpLang()]) || (o && o[k]);
/* French quoted in an English instruction (« … ») isn't clickable: it isn't English. */
const noTxQuotes = (h) => h.replace(/«[^»]*»/g, (m) => `<span class="no-tx">${m}</span>`);
/* In the German course, the English interface is for English speakers: no French version under each instruction. */
const instr = (en, f) => (isFr() && f ? `<span class="fr-ui">${esc(f)}</span>` : GERMAN_COURSE ? noTxQuotes(esc(en)) : `${noTxQuotes(esc(en))}${fr(f)}`);
/* The button that switches an explanation between English and French. */
const toggleLabel = (showFr) => (lang() === "de" ? (showFr ? "Auf Englisch" : "Auf Französisch") : showFr ? (isFr() ? "En anglais" : "In English") : "En français");
const tg = (g) => { const k = "genre:" + g, v = T(k); return v === k ? g : v; };
const tFrom = (f) => String(f || "").split(" · ").map((p, i) => (i === 0 ? T(p.replace(/ \d+$/, "")) + (p.match(/ \d+$/) || [""])[0] : p.replace(/^lesson (\d+)$/, (_, n) => T("lesson") + " " + n))).join(" · ");

/* ================= Content preparation (total immersion) ================= */
/* English becomes the main text; the original French is kept as translation (_fr). */
(function prepare() {
  const L = window.LESSONS_EN || {};
  LESSONS.forEach((l) => {
    const e = L[l.id];
    if (!e) return;
    l.title_fr = l.title; l.subtitle_fr = l.subtitle; l.body_fr = l.body;
    l.title = e.title; l.subtitle = e.subtitle; l.body = e.body;
    l.quiz.forEach((q, i) => {
      const eq = e.quiz && e.quiz[i];
      if (!eq) return;
      q.q_fr = q.q; q.ex_fr = q.ex; q.q = eq.q; q.ex = eq.ex;
      if (eq.o) { q.o_fr = q.o; q.o = eq.o; }
    });
  });
  /* Order lessons: by level, and lessons with "after" right after their anchor. */
  const order = ["A1", "A2", "B1", "B2", "C1", "C2"];
  const base = LESSONS.filter((l) => l.after == null).sort((a, b) => order.indexOf(a.level) - order.indexOf(b.level));
  LESSONS.filter((l) => l.after != null).forEach((x) => {
    let i = base.findIndex((l) => l.id === x.after);
    if (i < 0) { base.push(x); return; }
    while (i + 1 < base.length && base[i + 1].after === x.after) i++;
    base.splice(i + 1, 0, x);
  });
  LESSONS.length = 0; base.forEach((l) => LESSONS.push(l));

  VOCAB.forEach((t) => { const en = (window.VOCAB_TITLES_EN || {})[t.id]; if (en) { t.title_fr = t.title; t.title = en; } });
  VOCAB.forEach((t) => { const f = (window.VOCAB_TITLES_FR || {})[t.id]; if (f && !t.title_fr) t.title_fr = f; });
  (TOEIC.parts || []).forEach((p) => { const f = (window.TOEIC_PARTS_FR || {})[p.n]; if (f && !p.name_fr) p.name_fr = f; });
  READINGS.forEach((r) => {
    const e = (window.READINGS_EN || {})[r.id];
    if (!e) return;
    r.intro_fr = r.intro; r.intro = e.intro;
    r.questions.forEach((q, i) => { const eq = e.questions[i]; if (eq) { q.q_fr = q.q; q.q = eq.q; if (eq.o) { q.o_fr = q.o; q.o = eq.o; } } });
  });
  SPEAKING.forEach((c) => { const en = (window.SPEAKING_TITLES_EN || {})[c.id]; if (en) { c.title_fr = c.title; c.title = en; } });
  SOUNDS.forEach((s, i) => { const e = (window.SOUNDS_EN || [])[i]; if (e) { s.title_fr = s.title; s.how_fr = s.how; s.title = e.title; s.how = e.how; } });
  PROMPTS.forEach((p, i) => { if (!p.id) p.id = "p" + i; });
  LEVELS.forEach((l) => { const e = (window.LEVELS_EN || {})[l.id]; if (e) { l.name_fr = l.name; l.can_fr = l.can; l.beyond_fr = l.beyond; l.name = e.name; l.can = e.can; l.beyond = e.beyond; } });
  METHODS.forEach((m, i) => { const e = (window.METHODS_EN || [])[i]; if (e) { ["title", "science", "site", "you"].forEach((k) => { m[k + "_fr"] = m[k]; m[k] = e[k]; }); } });
  BOOKS.forEach((g, i) => {
    const e = (window.BOOKS_EN || [])[i];
    if (!e) return;
    g.label_fr = g.label; g.note_fr = g.note; g.label = e.label; g.note = e.note;
    g.items.forEach((b, j) => { const eb = e.items[j]; if (eb) { b.desc_fr = b.desc; b.why_fr = b.why; b.desc = eb.desc; b.why = eb.why; if (eb.title) b.title = eb.title; if (eb.author) b.author = eb.author; } });
  });
  RESOURCES.forEach((r, i) => { const e = (window.RESOURCES_EN || [])[i]; if (e) { r.title_fr = r.title; r.desc_fr = r.desc; r.title = e.title; r.desc = e.desc; } });
  /* The can-do grids are shared by both courses: in the French course, they speak of French. */
  if (FOREIGN) CANDO.forEach((c) => Object.values(c.levels).forEach((arr) => arr.forEach((pair) => { pair[0] = swapNames(pair[0], GERMAN_COURSE ? SWAP_DE_EN : SWAP_FR); pair[1] = swapNames(pair[1], GERMAN_COURSE ? SWAP_DE_FR : SWAP_FR); })));
})();
const lnum = (l) => LESSONS.indexOf(l) + 1;
const lessonById = (id) => LESSONS.find((l) => l.id === +id);
const unitOfLesson = (id) => COURSE.find((u) => u.lessons.includes(+id));

/* ================= Storage ================= */
const KEY = APP.key;
const defaults = () => ({ xp: 0, days: {}, lessons: {}, readings: {}, srs: {}, myWords: [], spoken: {}, prompts: {}, notes: {}, ritual: null, rate: 0.9, voice: "", dir: "auto", goal: 30, siteSec: 0, extMin: 0, units: {}, exams: {}, irr: {}, mistakes: {}, pron: {}, acad: {}, place: {}, cando: {}, lab: {}, ctx: {}, lex: {}, toeic: { mocks: [], parts: {} } });
function load() {
  try { return Object.assign(defaults(), JSON.parse(localStorage.getItem(KEY) || "{}")); }
  catch (e) { return defaults(); }
}
let S = load();
/* The course was first written for Stella: her progress keeps her name; a new learner chooses theirs in the settings. */
if (S.name == null && APP.id === "en" && S.xp > 0) S.name = "Stella";
if (!S.toeic || !S.toeic.mocks) S.toeic = { mocks: [], parts: {} };
function save() {
  try { trackPath(); } catch (e) { /* the course isn't loaded yet */ }
  try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* private browsing */ }
  renderTopStats();
}
const unitState = (id) => (S.units[id] = S.units[id] || {});
/* The learner's first name, given in the settings (or on the first visit). */
const learnerName = () => (S.name || APP.learner || "").trim();

/* ================= Dates & progress ================= */
const fmt = (d) => d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
const today = () => fmt(new Date());
const addDays = (n, from) => { const d = from ? new Date(from + "T12:00:00") : new Date(); d.setDate(d.getDate() + n); return fmt(d); };
function todayLog() {
  const t = today();
  if (!S.days[t]) S.days[t] = { xp: 0, vocab: 0, lesson: 0, reading: 0, speak: 0, free: 0, dictee: 0, step: 0, review: 0 };
  return S.days[t];
}
function addXP(n, kind) {
  const d = todayLog();
  S.xp += n; d.xp += n;
  if (kind) d[kind] = (d[kind] || 0) + 1;
  save();
}
const practised = (key) => !!(S.days[key] && (S.days[key].xp > 0 || S.days[key].ext > 0));
function streak() {
  const d = new Date();
  if (!practised(fmt(d))) d.setDate(d.getDate() - 1);
  let n = 0;
  while (practised(fmt(d))) { n++; d.setDate(d.getDate() - 1); }
  return n;
}
const GOALS = {
  15: { words: 10, steps: 1, speak: 5, free: 1, dictee: 0, ext: 0 },
  30: { words: 15, steps: 3, speak: 8, free: 1, dictee: 5, ext: 0 },
  60: { words: 25, steps: 4, speak: 10, free: 2, dictee: 10, ext: 20 }
};
const goal = () => GOALS[S.goal] || GOALS[30];
const totalHours = () => (S.siteSec || 0) / 3600 + (S.extMin || 0) / 60;
const fmtH = (h) => (h < 1 ? `${Math.round(h * 60)} min` : `${Math.round(h * 10) / 10} h`);
let lastActive = Date.now();
["pointerdown", "keydown", "scroll", "touchstart"].forEach((ev) => window.addEventListener(ev, () => { lastActive = Date.now(); }, { passive: true }));
setInterval(() => {
  if (document.hidden || Date.now() - lastActive > 90000) return;
  S.siteSec = (S.siteSec || 0) + 15;
  const d = todayLog(); d.sec = (d.sec || 0) + 15;
  try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {}
}, 15000);

/* ================= Levels ================= */
const LV = LEVELS.map((l) => l.id);
const lvName = (L) => loc(LEVELS.find((x) => x.id === L), "name");
const locale = () => (lang() === "de" ? "de-DE" : isFr() ? "fr-FR" : "en-GB");
const levelTag = (l) => `<span class="tag tag-${l}">${l}</span>`;
function unitDone(u) { const s = S.units[u.id]; return !!(s && s.test >= 70); }
function levelStats(L) {
  const units = COURSE.filter((u) => u.level === L);
  const ud = units.filter(unitDone).length;
  const ls = LESSONS.filter((l) => l.level === L);
  const ld = ls.filter((l) => S.lessons[l.id]).length;
  const ws = [];
  VOCAB.filter((t) => t.level === L && !t.toeic).forEach((t) => t.words.forEach(([en]) => ws.push(en)));
  const wd = ws.filter((en) => S.srs[en] && S.srs[en].box >= 1).length;
  const rs = READINGS.filter((r) => r.level === L);
  const rd = rs.filter((r) => S.readings[r.id]).length;
  const parts = [[ud, units.length], [ld, ls.length], [wd, ws.length], [rd, rs.length]].filter(([, t]) => t > 0);
  let pct = parts.length ? parts.reduce((a, [d, t]) => a + d / t, 0) / parts.length : 0;
  if (S.exams[L] >= 70) pct = 1;
  return { ud, ut: units.length, ld, lt: ls.length, wd, wt: ws.length, rd, rt: rs.length, pct };
}
/* After the placement test, the course can start at a higher level: the levels below are skipped, not completed. */
const placedOut = (L) => !!S.startAt && LV.indexOf(L) < LV.indexOf(S.startAt);
function currentUnit() { return COURSE.find((u) => !unitDone(u) && !placedOut(u.level)) || COURSE.find((u) => !unitDone(u)) || COURSE[COURSE.length - 1]; }
function currentLevel() {
  for (const L of LV) if (!placedOut(L) && !(S.exams[L] >= 70) && COURSE.some((u) => u.level === L && !unitDone(u))) return L;
  for (const L of LV) if (!placedOut(L) && !(S.exams[L] >= 70)) return L;
  return LV[LV.length - 1];
}
function levelGroups(items, render, opts = {}) {
  const cur = currentLevel();
  return LV.map((L) => {
    const its = items.filter((x) => x.level === L);
    if (!its.length) return "";
    const open = L === cur || (opts.started && opts.started(its));
    return `<details class="level-block" ${open ? "open" : ""}>
      <summary><span class="lvl-sum">${levelTag(L)}<b>${esc(lvName(L))}</b><span class="muted small">${opts.stat ? opts.stat(its) : ""}</span></span>${ic("chevron-down", "chev")}</summary>
      <div class="grid ${opts.grid || "grid-2"}">${its.map(render).join("")}</div>
    </details>`;
  }).join("");
}

/* ================= Vocabulary & spaced repetition ================= */
const INTERVALS = [0, 1, 3, 7, 14, 30];
let WORDS = new Map();
function buildIndex() {
  WORDS = new Map();
  VOCAB.forEach((t) => t.words.forEach(([en, fr, ex]) => WORDS.set(en, { en, fr, ex, theme: t.id })));
  S.myWords.forEach((w) => { if (!WORDS.has(w.en)) WORDS.set(w.en, { en: w.en, fr: w.fr, ex: w.ex || "", theme: "mine" }); });
}
buildIndex();
const dueIds = () => Object.keys(S.srs).filter((id) => S.srs[id].due <= today() && WORDS.has(id));
const mastered = () => Object.keys(S.srs).filter((id) => S.srs[id].box >= 4).length;
const learning = () => Object.keys(S.srs).filter((id) => S.srs[id].box < 4).length;
function gradeWord(id, g) {
  /* Reviews (words already met) are counted apart from new words: only they make today's "Study" task. */
  if (S.srs[id]) { const L = todayLog(); L.rev = (L.rev || 0) + 1; }
  const c = S.srs[id] || { box: 0, due: today(), n: 0 };
  c.n++;
  if (g === "again") { c.box = 0; c.due = today(); }
  else if (g === "hard") { c.box = Math.max(1, c.box); c.due = addDays(1); }
  else { c.box = Math.min(5, c.box + 1); c.due = addDays(INTERVALS[c.box]); }
  S.srs[id] = c;
  addXP(g === "again" ? 1 : 2, "vocab");
}
const dots = (id) => {
  const b = S.srs[id] ? S.srs[id].box : -1;
  return `<span class="dots" title="${b < 0 ? "Not seen yet" : "Level " + b + " / 5"}">${[1, 2, 3, 4, 5].map((i) => `<i class="${b >= i ? "on" : ""}"></i>`).join("")}</span>`;
};
function themeStats(t) {
  const seen = t.words.filter(([en]) => S.srs[en]).length;
  const m = t.words.filter(([en]) => S.srs[en] && S.srs[en].box >= 4).length;
  return { seen, m, total: t.words.length };
}

/* ================= Grammar: spaced review of lessons ================= */
const L_INTERVALS = [1, 3, 7, 21, 60];
function lessonState(id) {
  const r = S.lessons[id];
  if (!r) return null;
  if (r.box == null) { r.box = 0; r.due = addDays(1, r.date || today()); }
  return r;
}
const dueLessons = () => LESSONS.filter((l) => { const r = lessonState(l.id); return r && r.due <= today(); });
function reviewLesson(id, ratio) {
  const r = lessonState(id);
  if (!r) return;
  if (ratio >= 0.99) r.box = Math.min(L_INTERVALS.length - 1, r.box + 1);
  else if (ratio < 0.5) r.box = 0;
  r.due = addDays(L_INTERVALS[r.box]);
}

/* ================= Voices (speech synthesis) ================= */
const synth = window.speechSynthesis;
let voices = [];
const NOVELTY = /compact|eloquence|grandma|grandpa|bad news|bells|bubbles|cellos|jester|organ|trinoids|whisper|zarvox|albert|boing|fred|junior|ralph|wobble|superstar|good news|hysterical|bahh|eddy|flo\b|reed|rocko|sandy|shelley|kathy|nouvelles|bouffon|bulles|cloches|murmure|orgue|trino|violoncelles/i;
const GOOD = /premium|enhanced|amélior|natural|neural|google|microsoft|siri|^(anna|petra|markus|yannick|helena|martin|katja|conrad|thomas|amélie|audrey|aurélie|marie|virginie|jacques|nicolas|juliette|samantha|daniel|karen|moira|tessa|rishi|aaron|arthur|catherine|gordon|martha|nicky|alex|fiona|veena|allison|ava|susan|tom|serena|kate|oliver|zoe|evan|nathan|joelle|noelle|jamie|matilda|lee|isha|sangeeta|stephanie)\b/i;
const FEMALE = /anna\b|petra|helena|katja|marlene|vicki|amélie|amelie|audrey|aurélie|aurelie|marie|virginie|juliette|céline|celine|léa|lea\b|chantal|denise|sylvie|eloise|élise|samantha|karen|moira|tessa|martha|catherine|nicky|serena|ava|zoe|kate|fiona|allison|susan|joelle|noelle|matilda|isha|sangeeta|veena|stephanie|female|libby|sonia|jenny|aria|emma|amy/i;
function loadVoices() {
  if (!synth) return;
  const en = synth.getVoices().filter((v) => TARGET_RE.test(v.lang) && !NOVELTY.test(v.name));
  const good = en.filter((v) => GOOD.test(v.name));
  voices = good.length ? good : en;
}
if (synth) { loadVoices(); synth.onvoiceschanged = () => { loadVoices(); if (location.hash === "" || location.hash === "#/") route(); }; }
function voiceScore(v) {
  let s = 0;
  if (/premium|enhanced|amélior|natural|neural/i.test(v.name)) s += 10;
  if (/^Google (UK|US) English|^Google français|^Google Deutsch/i.test(v.name)) s += 6;
  if (GOOD.test(v.name)) s += 4;
  if (new RegExp("^" + APP.voiceLang.replace("-", "[-_]"), "i").test(v.lang)) s += 2;
  if (/en[-_]US/i.test(v.lang)) s += 1;
  return s;
}
const ranked = () => voices.slice().sort((a, b) => voiceScore(b) - voiceScore(a));
function bestVoice() {
  if (S.voice) { const v = voices.find((x) => x.voiceURI === S.voice); if (v) return v; }
  return ranked()[0] || null;
}
/* The best voice for one accent ("en-GB", "en-US"…), or null if this browser has none. */
function voiceByLang(l) {
  const re = new RegExp("^" + l.replace("-", "[-_]"), "i");
  return ranked().find((v) => re.test(v.lang)) || null;
}
/* A different voice for each speaker in a dialogue (female names → female voice when possible). */
const SPK_F = /^(W\b|W\d|Woman|Femme|Frau|Lena|Jana|Katrin|Sabine|Ute|Birgit|Greta|Frieda|Hanna|Leonie|Marlene|Annika|Svenja|Johanna|Petra|Heike|Elke|Ingrid|Lotte|Paula|Nele|Merle|Ronja|Wiebke|Franziska|Monika|Ilse|Stella|Léa|Chloé|Manon|Julie|Camille|Claire|Inès|Élodie|Nathalie|Isabelle|Margaux|Lucie|Pauline|Amandine|Sabrina|Yasmine|Agathe|Mathilde|Océane|Zoé|Aurélie|Sandrine|Valérie|Jeanne|Louise|Alice|Kate|Lou|Rita|Hannah|Mei|Amy|Helen|Sophie|Lisa|Karen|Laura|Jess|Emma|Anna|Maria|Sofia|Jenna|Olivia|Reader|Nadia|Clara|Julia|Sarah|Lucy|Mia|Zoe|Grace|Chloe)/i;
const SPK_M = /^(M\b|M\d|Man|Homme|Serveur|Herr|Kellner|Jonas|Lukas|Felix|Tobias|Niklas|Florian|Stefan|Matthias|Jürgen|Klaus|Uwe|Moritz|Henrik|Finn|Elias|Kai|Sven|Dieter|Wolfgang|Bernd|Timo|Jan\b|Malte|Ole|Till|Lars|Torsten|Lucas|Hugo|Thomas|Julien|Nicolas|Antoine|Pierre|Louis|Karim|Mehdi|Théo|Bastien|Maxime|Romain|Kevin|Olivier|Benoît|Rémi|Yanis|Arthur|Gabriel|Raphaël|Mathis|Étienne|Vincent|Waiter|Clerk|Sam|Raj|Ben|Tom|Paul|Ken|Mark|Marc|David|James|Leo|Dan|Max|Jack|Oliver|Chris|Pete|Joe)/i;
function voiceFor(speaker, i) {
  const r = ranked();
  if (!r.length) return null;
  const fem = r.filter((v) => FEMALE.test(v.name)), mal = r.filter((v) => !FEMALE.test(v.name));
  const sp = String(speaker || "");
  const isF = SPK_F.test(sp), isM = SPK_M.test(sp);
  const n = (sp.match(/\d+/) || [0])[0] * 1;
  if (isF && fem.length) return fem[(n ? n - 1 : 0) % fem.length];
  if (isM && mal.length) return mal[(n ? n - 1 : 0) % mal.length];
  return r[i % r.length];
}
let playingBtn = null, playSeq = 0;
function stopAudio() {
  playSeq++;
  if (synth) synth.cancel();
  if (playingBtn) playingBtn.classList.remove("playing");
  playingBtn = null;
}
function speak(text, btn, opts = {}) {
  if (!synth) { toast("Your browser can't read text aloud"); return Promise.resolve(); }
  if (!opts.keep) stopAudio();
  return new Promise((resolve) => {
    const u = new SpeechSynthesisUtterance(text);
    const v = opts.voice || bestVoice();
    if (v) { u.voice = v; u.lang = v.lang; } else u.lang = APP.voiceLang;
    u.rate = opts.rate || S.rate;
    if (btn) { btn.classList.add("playing"); playingBtn = btn; }
    u.onend = u.onerror = () => { if (btn) btn.classList.remove("playing"); resolve(); };
    synth.speak(u);
  });
}
/* The best voice for an accent ("en-US", "en-AU"…), of the speaker's gender when the name tells it. */
function accentVoice(l, sp) {
  const re = new RegExp("^" + l.replace("-", "[-_]"), "i");
  const c = ranked().filter((v) => re.test(v.lang));
  if (!c.length) return null;
  const s = String(sp || "");
  return (SPK_F.test(s) && c.find((v) => FEMALE.test(v.name))) || (SPK_M.test(s) && c.find((v) => !FEMALE.test(v.name))) || c[0];
}
/* Play several lines one after the other, with a voice per speaker (and an accent when a line gives one). */
async function playLines(lines, btn, rate) {
  stopAudio();
  const seq = playSeq;
  const speakers = [], byAccent = {};
  if (btn) btn.classList.add("playing");
  for (const [sp, text, acc] of lines) {
    if (seq !== playSeq) break;
    if (sp && !speakers.includes(sp)) speakers.push(sp);
    const v = acc ? (byAccent[sp] = byAccent[sp] || accentVoice(acc, sp)) : null;
    await speak(text, null, { voice: v || (sp ? voiceFor(sp, speakers.indexOf(sp)) : bestVoice()), keep: true, rate });
    await new Promise((r) => setTimeout(r, 250));
  }
  if (btn) btn.classList.remove("playing");
  return seq === playSeq;
}
const sayBtn = (text, label = "Listen") => `<button class="speak" data-say="${esc(text)}" aria-label="${label}: ${esc(text)}" title="${label}">${ic("volume-2")}</button>`;
const ipaSpan = (t) => `<span class="ipa no-tx">/${esc(t)}/</span>`;
const slowBtn = (text) => `<button class="speak" data-say="${esc(text)}" data-slow="1" aria-label="Listen slowly" title="Listen slowly">${ic("snail")}</button>`;

/* ================= Translation on click ================= */
/* FR button: shows the French translation of a block. */
/* In the French course, the button reveals English under French content, and French under English explanations:
   its label says which. */
const looksFrench = (t) => /[àâçéèêëîïôûùœ]|\b(le|la|les|des|est|et|une|du|pour|avec|dans|tu|vous|je)\b/i.test(t);
const fr = (french) => {
  if (!french) return "";
  const toFr = FRENCH_COURSE && looksFrench(french);
  const code = FRENCH_COURSE ? (toFr ? "FR" : "EN") : APP.helperCode;
  return ` <button class="fr-btn" data-fr="${esc(french)}" aria-label="${code === "FR" ? "Traduction en français" : "English translation"}" title="${code === "FR" ? "Traduction" : "Translation"}">${code}</button>`;
};
const WORD_RE = /([A-Za-zÀ-ÖØ-öø-ÿ][A-Za-zÀ-ÖØ-öø-ÿ'’-]*[A-Za-zÀ-ÖØ-öø-ÿ]|[A-Za-zÀ-ÖØ-öø-ÿ])/;
let DICT = new Map();
const IRR_FORMS = {};
const DE_CASE = new Map();
function buildDict() {
  DICT = new Map();
  const add = (k, v) => { k = String(k).toLowerCase().replace(/’/g, "'").trim(); if (k && v && !DICT.has(k)) DICT.set(k, v); };
  VOCAB.forEach((t) => t.words.forEach(([en, f]) => {
    const parts = en.split(" / ");
    const fparts = f.split(" / ");
    parts.forEach((p, i) => {
      const tr = parts.length === fparts.length ? fparts[i] : f;
      if (GERMAN_COURSE) {
        /* "der Hund, -e", "die Stadt, ¨-e", "sich freuen": the word alone too. */
        const k = p.replace(/,\s*(¨-?\S*|-\S*|[A-ZÄÖÜ][a-zäöüß]+)\s*$/, "").replace(/\((m|f|n|pl|sg)\)/gi, "").replace(/[?!.…]/g, "").trim();
        const bare = k.replace(/^(?:der|die|das|ein|eine|sich)\s+/i, "");
        add(k, tr); add(bare, tr);
        /* Nouns keep their capital letter in the popover ("from Baum", not "from baum"). */
        if (/^[A-ZÄÖÜ]/.test(bare) && !DE_CASE.has(bare.toLowerCase())) DE_CASE.set(bare.toLowerCase(), bare);
        return;
      }
      if (FRENCH_COURSE) {
        /* "le pain", "l'eau", "se lever": the word alone too. */
        const k = p.replace(/\((m|f|m\.|f\.|pl)\)/gi, "").replace(/[?!.…]/g, "").trim();
        add(k, tr); add(k.replace(/^(?:(?:les|le|la|une|un|des|du|de la|se)\s+|de l'|s'|l'|d')/i, ""), tr);
        return;
      }
      const k = p.replace(/\((uk|us)\)/gi, "").replace(/[?!.…]/g, "").trim().replace(/^to /, "").replace(/^(a|an|the) /, "");
      add(k, tr);
    });
  }));
  (window.IRREGULARS || []).forEach(([base, past, pp, f]) => {
    add(base, f);
    past.split(" / ").forEach((p) => { IRR_FORMS[p.trim()] = { base, kind: "past" }; });
    pp.split(" / ").forEach((p) => { const k = p.replace(/\(.*\)/, "").trim(); if (!IRR_FORMS[k]) IRR_FORMS[k] = { base, kind: "past participle" }; });
  });
  READINGS.forEach((r) => Object.entries(r.glossary || {}).forEach(([k, v]) => add(k, v)));
  /* Key words of the listening lab ("single / return" gives two entries). */
  (window.LAB || []).forEach((x) => x.words.forEach(([en, f]) => { const ps = en.split(" / "), fs = f.split(" / "); ps.forEach((k, i) => add(k.replace(/^(to|a|an|the) /, ""), ps.length === fs.length ? fs[i] : f)); }));
  S.myWords.forEach((w) => add(w.en, w.fr));
  /* General dictionary last: the course's own translations always win. */
  Object.entries(window.DICT_TARGET || window.DICT_EN_FR || {}).forEach(([k, v]) => add(k, v));
}
/* French: elided words (l'eau, j'habite), plurals, feminine forms, verb endings, and irregular forms (suis → être). */
const FR_ELISION = /^(l|d|j|m|t|s|n|c|qu|jusqu|lorsqu|puisqu|quoiqu)'/;
function lookupFr(w) {
  if (DICT.has(w)) return { base: w, fr: DICT.get(w) };
  const bare = w.replace(FR_ELISION, "");
  const forms = window.FR_FORMS || {};
  for (const c of [w, bare]) {
    const f = forms[c];
    if (f) return { base: f[0], fr: (DICT.get(f[0]) || "") + (f[1] ? ` (${f[1]})` : "") };
  }
  const cands = [];
  const push = (x) => { if (x && x.length > 1 && !cands.includes(x)) cands.push(x); };
  push(w); push(bare);
  [w, bare].forEach((x) => {
    if (/eaux$/.test(x)) push(x.slice(0, -1));
    if (/aux$/.test(x)) push(x.slice(0, -3) + "al");
    if (/[sx]$/.test(x)) push(x.slice(0, -1));
    if (/es$/.test(x)) push(x.slice(0, -2));
    if (/e$/.test(x)) push(x.slice(0, -1));
    if (/ives?$/.test(x)) push(x.replace(/ives?$/, "if"));
    if (/euses?$/.test(x)) push(x.replace(/euses?$/, "eux"));
    if (/ères?$/.test(x)) push(x.replace(/ères?$/, "er"));
    if (/ennes?$/.test(x)) push(x.replace(/ennes?$/, "en"));
    if (/onnes?$/.test(x)) push(x.replace(/onnes?$/, "on"));
    if (/elles?$/.test(x)) push(x.replace(/elles?$/, "el"));
    const er = x.match(/^(.+?)(erai|eras|era|erons|erez|eront|erais|erait|eraient|aient|ais|ait|ions|iez|ant|ons|ez|ent|ées|és|ée|é|es|e|èrent|a)$/);
    /* mangeons → manger, commençons → commencer */
    if (er) { push(er[1] + "er"); push(er[1].replace(/ge$/, "g").replace(/ç$/, "c").replace(/ll$/, "l") + "er"); }
    /* the shortest ending too: vérifiez → vérifier (not vérif- + -iez) */
    const er2 = x.match(/^(.+)(ez|ons|ent|es|e|é|ée|és|ées|ais|ait|aient|ant)$/);
    if (er2) push(er2[1] + "er");
    /* récupère → récupérer, mène → mener */
    if (er2 && /è[^aeiouyéèê]+$/.test(er2[1])) { push(er2[1].replace(/è(?=[^aeiouyéèê]+$)/, "é") + "er"); push(er2[1].replace(/è(?=[^aeiouyéèê]+$)/, "e") + "er"); }
    /* future and conditional built on the infinitive: finirai → finir, prendrai → prendre */
    const fut = x.match(/^(.+r)(ai|as|a|ons|ez|ont|ais|ait|ions|iez|aient)$/);
    if (fut) { push(fut[1]); push(fut[1] + "e"); }
    const ir = x.match(/^(.+?)(issons|issez|issent|issais|issait|issant|issions|issiez|isses|isse|is|it|ie|ies|i|ons|ez|ent|ais|ait|aient|ions|iez|ant|irent|e|es)$/);
    if (ir) push(ir[1] + "ir");
    const re = x.match(/^(.+?)(ons|ez|ent|us|ues|ue|u|s|ant)$/);
    if (re) push(re[1] + "re");
    /* attends, répond → attendre, répondre */
    const dre = x.match(/^(.+d)(s|ons|ez|ent|ais|ait|ions|iez|aient|ant|u|ue|us|ues|e|es|it|irent)?$/);
    if (dre) push(dre[1] + "re");
  });
  for (const c of cands) if (DICT.has(c)) return { base: c, fr: DICT.get(c) };
  if (w.includes("-")) { const bits = w.split("-").map((b) => lookupFr(b)).filter(Boolean); if (bits.length) return { base: w, fr: bits.map((b) => b.fr).join(" + ") }; }
  return null;
}
/* A German number written in one word, up to 19 999 (vierunddreißig, fünfhundertzwanzig, neunzehnhundertachtundneunzig,
   zweitausendfünfundzwanzig). Only compounds: zehn, zwanzig, hundert or tausend alone are in the dictionary. */
function deNumValue(x) {
  const small = (s) => (s === "ein" ? 1 : DE_UNITS.indexOf(s));
  const upTo99 = (r) => {
    if (!r) return 0;
    if (r === "eins") return 1;
    if (DE_UNITS.indexOf(r) > 0) return DE_UNITS.indexOf(r);
    if (DE_TENS.indexOf(r) > 1) return DE_TENS.indexOf(r) * 10;
    const m = r.match(/^(ein|zwei|drei|vier|fünf|sechs|sieben|acht|neun)und(zwanzig|dreißig|vierzig|fünfzig|sechzig|siebzig|achtzig|neunzig)$/);
    return m ? DE_TENS.indexOf(m[2]) * 10 + small(m[1]) : null;
  };
  let total = 0, r = x, compound = false;
  for (const [word, mult] of [["tausend", 1000], ["hundert", 100]]) {
    const m = r.match(new RegExp("^(.*?)" + word + "(.*)$"));
    if (!m) continue;
    const k = m[1] ? small(m[1]) : 1;
    if (k < 1) return null;
    total += k * mult; r = m[2]; compound = true;
  }
  const rest = upTo99(r);
  if (rest == null || x === "hundert" || x === "tausend" || (!compound && !x.includes("und"))) return null;
  return total + rest;
}
/* An ordinal in one word (erste, dritten, zwölften, einunddreißigste) → 1st, 3rd, 12th, 31st (1er, 3e… in French). */
function deOrdinal(w) {
  const stem = w.replace(/(en|em|er|es|e)$/, "");
  if (stem === w) return null;
  let n = { erst: 1, dritt: 3, siebt: 7, acht: 8 }[stem];
  if (n == null && /t$/.test(stem)) { const i = DE_UNITS.indexOf(stem.slice(0, -1)); if (i >= 2) n = i; }
  if (n == null && /st$/.test(stem)) { const b = stem.slice(0, -2); n = deNumValue(b) ?? (DE_TENS.indexOf(b) > 1 ? DE_TENS.indexOf(b) * 10 : null); }
  if (n == null) return null;
  if (isFr()) return n === 1 ? "1er" : n + "e";
  const t = n % 100 >= 11 && n % 100 <= 13 ? "th" : ["th", "st", "nd", "rd"][n % 10] || "th";
  return n + t;
}
/* German: irregular forms (bin → sein, ging → gehen) from DE_FORMS, then plurals, adjective endings, verb endings,
   past participles (gemacht → machen) and the umlaut of plurals (Häuser → Haus). */
function lookupDe(w) {
  if (DICT.has(w)) return { base: w, fr: DICT.get(w) };
  const forms = window.DE_FORMS || {};
  const f = forms[w];
  /* "sein:v" points to the verb sein (to be), not the possessive sein (his): the part after ":" only picks the entry. */
  if (f) { const base = f[0].split(":")[0]; return { base, fr: (DICT.get(f[0]) || DICT.get(base) || "") + (f[1] ? ` (${f[1]})` : "") }; }
  /* a separable verb in a subordinate clause or in the participle: ankam → ankommen, aufgeschrieben → aufschreiben */
  const sep = /^(zurück|zusammen|weiter|vorbei|heraus|herein|hinaus|ab|an|auf|aus|ein|mit|nach|vor|zu|weg|los|fest|her|hin|um)(.{3,})$/.exec(w);
  if (sep && forms[sep[2]]) {
    const g = forms[sep[2]], base = sep[1] + g[0].split(":")[0];
    if (DICT.has(base)) return { base, fr: DICT.get(base) + (g[1] ? ` (${g[1]})` : "") };
  }
  const cands = [];
  const push = (x) => { if (x && x.length > 1 && !cands.includes(x)) cands.push(x); };
  const unUml = (x) => x.replace(/ä(?=[^äöü]*$)/, "a").replace(/ö(?=[^äöü]*$)/, "o").replace(/ü(?=[^äöü]*$)/, "u").replace(/äu/, "au");
  /* numbers in one word: vierunddreißig → 34, fünfhundertzwanzig → 520 */
  const nv = deNumValue(w);
  if (nv != null) return { base: w, fr: String(nv) };
  const ord = deOrdinal(w);
  if (ord) return { base: w, fr: ord };
  /* the infinitive with zu of a separable verb: anzurufen → anrufen, mitzukommen → mitkommen */
  const zu = w.match(/^(.{2,}?)zu(.{2,}e?n)$/);
  if (zu) push(zu[1] + zu[2]);
  /* plurals with an umlaut only: Brüder, Mütter, Väter; the du imperative is the bare stem: komm, erzähl, stell */
  push(unUml(w)); push(w + "en"); push(w + "n");
  /* every possible ending, longest first: nouns (Kinder, Häuser, Minuten, Autos, Ärztin, Lehrerinnen),
     adjectives (kleinen, größeren, schönste), verbs (macht, machst, machte, arbeitet) */
  const strip = (sufs, fn) => sufs.forEach((suf) => { if (w.endsWith(suf) && w.length > suf.length + 1) fn(w.slice(0, -suf.length)); });
  push(w.replace(/innen$/, "in"));
  strip(["innen", "nen", "ern", "en", "er", "es", "in", "e", "n", "s"], (m) => { push(m); push(unUml(m)); });
  /* adjectives, comparatives and superlatives: kleinen, wärmer, wärmeren, größte, ältesten */
  strip(["esten", "ester", "estes", "este", "sten", "ster", "stes", "ste", "eren", "erer", "eres", "ere", "em", "en", "er", "es", "ten", "te", "e"], (m) => { push(m); push(unUml(m)); });
  strip(["teten", "test", "tet", "ten", "te", "est", "et", "st", "t", "e", "en", "n"], (m) => { push(m + "en"); push(m + "n"); push(unUml(m) + "en"); });
  const pp = w.match(/^(.*?)ge(.+?)(e?t)$/);
  if (pp) { push(pp[1] + pp[2] + "en"); push(pp[1] + pp[2] + "n"); }
  /* a participle used as an adjective: die gebuchte Führung, das gekaufte Buch */
  const ppa = w.match(/^(.*?)ge(.+?)t(e|en|er|es|em)$/);
  if (ppa) push(ppa[1] + ppa[2] + "en");
  const ppi = w.match(/^(.*?)ge(.+en)$/);
  if (ppi) push(ppi[1] + ppi[2]);
  for (const c of cands) if (DICT.has(c)) return { base: c, fr: DICT.get(c) };
  if (w.includes("-")) { const bits = w.split("-").map((b) => lookupDe(b)).filter(Boolean); if (bits.length) return { base: w, fr: bits.map((b) => b.fr).join(" + ") }; }
  return null;
}
/* English words that are also French forms: in the English interface of the French course, they stay plain text. */
const EN_STOP = new Set("a an the on in is it as at to of for by or and but if me he she we you they us our your his her its my no not so do up be are was were has have had will can may all one two six an son pour".split(" "));
/* German course: interface words that are also German words stay plain text outside the German itself. */
const DE_STOP_EN = new Set("a an in so was will also man hat die bin bald war rot fast gift kind rat see hold bad arm hand last mist list art boot tag hut rock wink wand des best stand fall wind warm".split(" "));
const DE_STOP_FR = new Set("des du es an en mit die la le les sein man rose mode station film pause tour plus mais total sage elf".split(" "));
buildDict();
function lookup(raw, gloss) {
  const w = String(raw).toLowerCase().replace(/’/g, "'");
  if (gloss) { const g = gloss[w] || gloss[w.replace(/'s$/, "")] || (FRENCH_COURSE && gloss[w.replace(FR_ELISION, "")]); if (g) return { base: w, fr: g }; }
  if (FRENCH_COURSE) return lookupFr(w);
  if (GERMAN_COURSE) return lookupDe(w);
  const cands = [w];
  const push = (x) => { if (x && x.length > 1 && !cands.includes(x)) cands.push(x); };
  push(w.replace(/'s$/, "")); push(w.replace(/s'$/, "s"));
  if (w.endsWith("ies")) push(w.slice(0, -3) + "y");
  if (w.endsWith("es")) push(w.slice(0, -2));
  if (w.endsWith("s")) push(w.slice(0, -1));
  if (w.endsWith("ied")) push(w.slice(0, -3) + "y");
  if (w.endsWith("ed")) { push(w.slice(0, -2)); push(w.slice(0, -1)); if (/(.)\1ed$/.test(w)) push(w.slice(0, -3)); }
  if (w.endsWith("ing")) { const s = w.slice(0, -3); push(s); push(s + "e"); if (/(.)\1$/.test(s)) push(s.slice(0, -1)); }
  if (w.endsWith("ier")) push(w.slice(0, -3) + "y");
  if (w.endsWith("iest")) push(w.slice(0, -4) + "y");
  if (w.endsWith("er")) { push(w.slice(0, -2)); push(w.slice(0, -1)); if (/(.)\1er$/.test(w)) push(w.slice(0, -3)); }
  if (w.endsWith("est")) { push(w.slice(0, -3)); push(w.slice(0, -2)); if (/(.)\1est$/.test(w)) push(w.slice(0, -4)); }
  if (w.endsWith("ily")) push(w.slice(0, -3) + "y");
  if (w.endsWith("ly")) push(w.slice(0, -2));
  if (w.endsWith("ves")) { push(w.slice(0, -3) + "f"); push(w.slice(0, -3) + "fe"); }
  for (const c of cands) if (DICT.has(c)) return { base: c, fr: DICT.get(c) };
  if (IRR_FORMS[w]) { const b = IRR_FORMS[w].base; return { base: b, fr: (DICT.get(b) || "") + ` (${IRR_FORMS[w].kind} of “${b}”)` }; }
  if (w.includes("-")) { const bits = w.split("-").map((b) => lookup(b)).filter(Boolean); if (bits.length) return { base: w, fr: bits.map((b) => b.fr).join(" + ") }; }
  return null;
}
/* French course, English interface: a passage whose small words are English (the, and, is…) is an explanation, not
   French, so "long", "point" or "type" in it stay plain text even though they are French words too. */
const EN_MARK = new Set(("the and is are of to you your with this that it it's for in what when which from be have has was were they he she we would will can not don't at by if " +
  "my there there's i'm i'll i've i'd you're he's she's we're they're isn't doesn't can't won't didn't do does did very also only just " +
  "some any more most how why who where here about after before because than then these those their them our us his him its no one two use say says like").split(" "));
const FR_MARK = new Set("le la les des du est et une un je tu il elle nous vous ils elles que qui pas ne de à en dans pour avec sur au aux ce mon ma mes ton ta sa ses on se c'est".split(" "));
const DE_MARK = new Set("der die das den dem des ein eine einen einem einer und ist sind nicht ich du er sie wir ihr es zu mit auf für von im am bei nach aus wie was wer wo auch noch schon sehr mein dein sein kein haben habe hast hat bin bist".split(" "));
let DE_EN_MARK = null;
function englishPassage(text) {
  const deUi = lang() === "de";
  if (fullImmersion() || (!FOREIGN && !deUi)) return false;
  /* The language of the explanations (English, or French in the German course, whatever the menus) against the
     language taught. With the German interface, German passages are interface too in the English and French courses,
     and so are the English explanations of the French course. */
  if (deUi && FRENCH_COURSE && !DE_EN_MARK) DE_EN_MARK = new Set([...DE_MARK, ...EN_MARK]);
  const ui = GERMAN_COURSE ? (isFr() ? FR_MARK : EN_MARK) : deUi ? (FRENCH_COURSE ? DE_EN_MARK : DE_MARK) : EN_MARK;
  const tl = GERMAN_COURSE ? DE_MARK : FRENCH_COURSE ? FR_MARK : EN_MARK;
  let en = 0, fr = 0;
  (text.toLowerCase().replace(/’/g, "'").match(/[a-zà-ÿœß']+/g) || []).forEach((w) => {
    /* A small word of both languages (was, du) says nothing about the passage. */
    if (deUi && ui.has(w) && tl.has(w)) return;
    if (ui.has(w) || (ui === FR_MARK && /^(l|d|j|qu|c|n|s|m|t)'/.test(w))) en++;
    else if (tl.has(w) || (tl === FR_MARK && /^(l|d|j|qu|c|n|s|m|t)'/.test(w))) fr++;
  });
  /* English course, German interface: English texts almost never contain der, und or ist, so a tie
     ("Die Wörter lernen: The essentials") is interface. */
  return deUi && !FOREIGN ? en > 0 && en >= fr : en > fr;
}
/* Wrap every English word of the page in a clickable span. */
const SKIP = "button, a, input, textarea, select, option, script, style, svg, .fr-text, .fr, .no-tx, .popover, .w, .kbd, .tag, .pill, .seg, label, .speaker, .fr-ui, .lv-scale, .report-big, .report-lv, .result-big";
/* Not real words: single letters (except a and I, and the French y), suffixes and prefixes quoted alone (-tion, thir-), endings after a digit (2nd). */
const fragmentAt = (parts, k) => (/^[b-hj-z]$/i.test(parts[k]) && !(FRENCH_COURSE && /^y$/i.test(parts[k]))) || /(^|[\s(“"‘«,\/])[-–]$|\d$/.test(parts[k - 1] || "") || /^[-–](?![A-Za-z])/.test(parts[k + 1] || "");
function wordify(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: (n) => {
      if (!/[A-Za-z]/.test(n.nodeValue)) return NodeFilter.FILTER_REJECT;
      const p = n.parentElement;
      if (!p || p.closest(SKIP)) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((n) => {
    const parts = n.nodeValue.split(WORD_RE);
    if (parts.length < 2) return;
    /* In a lesson, the French is rendered in <span class="en"> (from <s-fr>): the plain text around it is the English explanation. */
    const pe = n.parentElement;
    /* Inside the French itself (.en in the French course), on, pour, son or or are French words: EN_STOP doesn't apply. */
    const frText = FOREIGN && !!pe.closest(".en");
    /* German marked as German is never an interface passage, even when short ("In Wien." looks English). */
    const enText = !(GERMAN_COURSE && frText) && (englishPassage(n.nodeValue) || (FOREIGN && !fullImmersion() && !pe.closest(".en") && !!pe.querySelector(":scope > span.en")));
    const stop = GERMAN_COURSE ? (isFr() ? DE_STOP_FR : DE_STOP_EN) : EN_STOP;
    const frag = document.createDocumentFragment();
    /* Text left unwrapped stays in one node with its context (so "-tion" is still a suffix on the next pass),
       and a node where nothing is clickable isn't touched (no endless repaint). */
    let buf = "", wrapped = 0;
    parts.forEach((part, k) => {
      if (!part) return;
      /* Interface in the learner's own language: only the words of the language learnt that we can translate are clickable. */
      if (k % 2 === 1 && !fragmentAt(parts, k) && (fullImmersion() || (!enText && lookup(part) && !(FOREIGN && !frText && stop.has(part.toLowerCase()))))) {
        if (buf) { frag.appendChild(document.createTextNode(buf)); buf = ""; }
        const s = document.createElement("span"); s.className = "w"; s.textContent = part; frag.appendChild(s); wrapped++;
      } else buf += part;
    });
    if (!wrapped) return;
    if (buf) frag.appendChild(document.createTextNode(buf));
    n.parentNode.replaceChild(frag, n);
  });
}
/* Icons + clickable words after every change of the page. */
let paintQueued = false;
function paint() {
  paintQueued = false;
  document.querySelectorAll("i[data-lucide]").forEach((el) => { el.outerHTML = svgIcon(el.dataset.lucide, el.getAttribute("class") || ""); });
  wordify(app);
}
new MutationObserver(() => { if (!paintQueued) { paintQueued = true; setTimeout(paint, 0); } }).observe(document.body, { childList: true, subtree: true });

let pop = null;
function closePop() { if (pop) { pop.remove(); pop = null; } $$(".w.sel").forEach((x) => x.classList.remove("sel")); }
function showPop(w) {
  closePop();
  w.classList.add("sel");
  const word = w.dataset.w || w.textContent;
  const glossEl = w.closest("[data-gloss]");
  const gloss = glossEl ? (READINGS.find((r) => r.id === glossEl.dataset.gloss) || {}).glossary : null;
  const res = lookup(word, gloss);
  const sentenceEl = w.closest("[data-fr]:not(.fr-btn)");
  speak(word);
  pop = document.createElement("div");
  pop.className = "popover";
  pop.innerHTML = `<b>${esc(word)}</b>${res ? `<span>${esc(res.fr)}</span>${res.base !== word.toLowerCase() ? `<span class="small" style="opacity:.7;display:block">${T("from “{w}”", { w: esc(DE_CASE.get(res.base) || res.base) })}</span>` : ""}` : `<span style="opacity:.75">${T("No translation yet for this word.")}</span>`}
    ${sentenceEl ? `<div class="pop-sentence" hidden>${esc(sentenceEl.dataset.fr)}</div>` : ""}
    <div class="row">
      <button class="btn btn-sm" data-say="${esc(word)}" aria-label="${T("Listen")}">${ic("volume-2")}</button>
      <button class="btn btn-sm" id="addW" title="Ajouter à mes mots">${ic("plus")} ${T("My words")}</button>
      ${sentenceEl ? `<button class="btn btn-sm" id="popSent" title="Traduire la phrase">${ic("languages")} ${T("Sentence")}</button>` : ""}
      <a class="btn btn-sm" href="https://www.wordreference.com/${FRENCH_COURSE ? "fren" : GERMAN_COURSE ? (isFr() ? "defr" : "deen") : lang() === "de" ? "ende" : "enfr"}/${encodeURIComponent(word.toLowerCase())}" target="_blank" rel="noopener">${T("Dictionary")} ${ic("external-link")}</a>
    </div>`;
  document.body.appendChild(pop);
  const rect = w.getBoundingClientRect();
  const pw = pop.offsetWidth, ph = pop.offsetHeight;
  const left = Math.min(Math.max(8, rect.left + rect.width / 2 - pw / 2), window.innerWidth - pw - 8);
  let top = rect.bottom + 8;
  if (top + ph > window.innerHeight - 90) top = rect.top - ph - 8;
  pop.style.left = left + "px"; pop.style.top = Math.max(8, top) + "px";
  $("#addW", pop).onclick = () => {
    let tr = res && res.fr;
    if (!tr) tr = (window.prompt(T("Translation of “{w}”?", { w: word })) || "").trim();
    if (!tr) return;
    const ctx = w.closest("p, li, .para, .say-en, div");
    const sentence = ctx ? ((ctx.textContent.match(/[^.!?]+[.!?]*/g) || []).find((s) => s.includes(word)) || "").trim() : ""; /* no lookbehind: older Safari */
    addMyWord(res ? res.base : word.toLowerCase(), tr, sentence.length < 160 ? sentence : "");
    closePop();
  };
  if ($("#popSent", pop)) $("#popSent", pop).onclick = () => { $(".pop-sentence", pop).hidden = false; $("#popSent", pop).remove(); };
  pop.addEventListener("click", (ev) => ev.stopPropagation());
}
document.addEventListener("click", (e) => {
  const say = e.target.closest("[data-say]");
  if (say) { e.preventDefault(); const o = say.dataset.slow ? { rate: 0.6 } : {}; if (say.dataset.lang) o.voice = voiceByLang(say.dataset.lang) || undefined; speak(say.dataset.say, say, o); return; }
  const frb = e.target.closest(".fr-btn");
  if (frb) {
    e.preventDefault(); e.stopPropagation();
    let box = frb.nextElementSibling;
    if (!box || !box.classList.contains("fr-text")) { box = document.createElement("span"); box.className = "fr-text"; box.textContent = frb.dataset.fr; frb.after(box); }
    else box.hidden = !box.hidden;
    frb.classList.toggle("on", !box.hidden);
    return;
  }
  const w = e.target.closest(".w");
  if (w && !w.closest(".no-tx")) { e.stopPropagation(); showPop(w); return; }
  if (!e.target.closest(".popover")) closePop();
});
window.addEventListener("scroll", () => closePop(), { passive: true });

/* ================= Small UI helpers ================= */
let toastTimer;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg; t.classList.add("show");
  clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove("show"), 2400);
}
/* The Next button (in the top bar, and floating above the tab bar on small screens). It is hidden on the
   page it points to, and comes back, highlighted, as soon as that activity is finished. */
let lastNext = null;
function renderNext() {
  let up = null;
  try { up = nextUp(); } catch (e) { return; }
  const here = up && location.hash === up.href;
  const html = up && !here ? `${ic("arrow-right")}<span class="next-k">${T("Next")}</span><span class="next-what">${esc(up.label)}</span>` : "";
  const fresh = up && lastNext !== null && lastNext !== up.href;
  lastNext = up ? up.href : "";
  ["#nextTop", "#nextFab"].forEach((sel) => {
    const el = $(sel);
    if (!el) return;
    el.hidden = !html;
    if (!html) return;
    el.href = up.href; el.innerHTML = html;
    el.title = `${T("Next")}: ${up.label}`; el.setAttribute("aria-label", el.title);
    if (fresh) { el.classList.remove("fresh"); void el.offsetWidth; el.classList.add("fresh"); }
  });
}
/* The main button at the end of an activity: straight on to what the Next button would open, so the thread never
   sends you back to a hub page first. Falls back to the given button when there's nothing next or it's this page. */
function continueBtn(fallback) {
  let up = null;
  try { up = nextUp(); } catch (e) {}
  if (!up || up.href === location.hash) return fallback || "";
  return `<a class="btn btn-primary btn-cont" href="${up.href}" title="${esc(T("Next") + ": " + up.label)}"><span class="cont-k">${T("Continue")}</span><span class="cont-what">${esc(up.label)}</span>${ic("arrow-right")}</a>`;
}
/* Where the current page sits in a unit's path, if it is one of its activities. */
const PATH_ROUTES = /^#\/(apprendre|lecons|contexte|lexique|lecture|comprehension|repeter|oral|dialogue|parler|ecrit|dictee-unite|test)\//;
function pathContext() {
  const h = location.hash;
  if (!PATH_ROUTES.test(h)) return null;
  const cu = currentUnit();
  for (const u of [cu, ...COURSE.filter((x) => x !== cu)]) {
    const p = unitPath(u);
    const i = p.findIndex((x) => x.href === h);
    if (i >= 0) return { u, p, i };
  }
  return null;
}
/* A slim strip under the top bar on every activity of the course: which unit, which step, how far. */
function renderPathStrip() {
  const el = $("#pathStrip");
  if (!el) return null;
  let ctx = null;
  try { ctx = pathContext(); } catch (e) {}
  el.hidden = !ctx;
  if (!ctx) { el.innerHTML = ""; return null; }
  const { u, p, i } = ctx;
  const done = p.filter((x) => x.done).length;
  el.innerHTML = `<div class="ps-in"><a class="ps-unit" href="#/unite/${u.id}">${ic("arrow-left")}${levelTag(u.level)}<span>${T("Unit")} ${unitNum(u)} · ${esc(loc(u, "title"))}</span></a><span class="ps-step">${T("Activity {a} of {b}", { a: i + 1, b: p.length })}</span><div class="progress" title="${T("{a}/{b} activities", { a: done, b: p.length })}"><div style="width:${pct(done, p.length)}%"></div></div></div>`;
  /* The page's own link back to the same unit would say the same thing twice. */
  $$("main .back").forEach((b) => { if (b.getAttribute("href") === `#/unite/${u.id}`) b.style.display = "none"; });
  return ctx;
}
function renderTopStats() {
  renderNext();
  const ctx = renderPathStrip();
  if (ctx) $$("[data-nav]").forEach((l) => l.classList.toggle("active", l.dataset.nav === "cours"));
  $("#topStats").innerHTML = `<label class="pill lang-pill" title="${T("Interface language")}">${ic("languages")}<select id="langSel" aria-label="${T("Interface language")}">${LANGS.map(([k]) => `<option value="${k}" ${lang() === k ? "selected" : ""}>${k.toUpperCase()}</option>`).join("")}</select></label><span class="pill" title="${T("Day streak")}">${ic("flame", "c-accent")} ${streak()}</span><span class="pill" title="${T("Experience points")}">${ic("star", "c-yellow")} ${S.xp}</span>`;
  $("#langSel").onchange = (e) => setLang(e.target.value);
}
const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const back = (href, label) => `<a class="back" href="${href}">${ic("arrow-left")} ${tFrom(label)}</a>`;
const tile = (icon, level) => `<span class="tile tile-${level || "A1"}">${ic(icon)}</span>`;
const celebrate = () => `<div class="celebrate">${ic("party-popper")}</div>`;
const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);
let cleanups = [];
function onCleanup(fn) { cleanups.push(fn); }
function scoreMsg(score, total) {
  const p = score / total;
  if (p === 1) return T("Perfect!");
  if (p >= 0.8) return T("Excellent, you've understood the essentials!");
  if (p >= 0.5) return T("Not bad! Read the traps again and try once more.");
  return T("Don't worry: read the lesson again calmly, then try again.");
}

/* ================= Generic quiz / test runner =================
   items: {type:'mcq', q, q_fr, o, a, ex, ex_fr, from, pre, say}   choose (options shuffled each time)
          {type:'type', q, q_fr, big, answer, ex, ex_fr}             write the answer
          {type:'order', fr, en, words}                              put the words in order
          {type:'fix', wrong, answer, accept, ex}                    correct the mistake
          {type:'match', pairs}                                      match English and French
          {type:'say', en, fr}                                       say it out loud
          {type:'dict', text}                                        dictation
          {type:'stress', parts, a, word?, sayText?, ctx?}           tap the stressed syllable (word) or word (sentence)
          {type:'seq', q, items}                                     put sentences or parts in order (items = the right order)
   mcq extras: voice (a SpeechSynthesisVoice for say), exHtml (trusted HTML after the explanation), ipaO (options in IPA).
   type extras: say (text read aloud, e.g. a word spelled out).
   Items from a lesson quiz carry lessonId + qi: a wrong answer goes into the mistakes review.
   done(score, total, results[]) */
function runQuiz(el, items, done) {
  let i = 0, score = 0;
  const results = [];
  function finishItem(ok, feedbackHtml, q) {
    if (ok) score++;
    results.push(ok);
    if (q) noteMistake(q, ok);
    $(".fb", el).innerHTML = `${feedbackHtml}
      <div class="row" style="margin-top:14px"><button class="btn btn-dark next">${i + 1 < items.length ? T("Next") + " " + ic("arrow-right") : T("See my score")}</button></div>`;
    const n = $(".next", el); n.onclick = () => { i++; show(); }; n.focus();
    const o = $(".override", el);
    if (o) o.onclick = () => {
      score++; results[results.length - 1] = true; if (q) forgiveMistake(q);
      o.outerHTML = `<span class="small">${ic("check")} ${T("Counted as correct.")}</span>`;
    };
  }
  const overrideBtn = (label) => `<button type="button" class="btn btn-sm override" style="margin-top:10px">${ic("check")} ${label}</button>`;
  function show() {
    if (i >= items.length) { done(score, items.length, results); return; }
    const q = items[i];
    const head = `
      <div class="row small muted"><span>${T("Question")} ${i + 1} / ${items.length}</span>${q.from ? `<span class="spacer"></span><span>${esc(tFrom(q.from))}</span>` : ""}</div>
      <div class="progress" style="margin:8px 0 18px"><div style="width:${(i / items.length) * 100}%"></div></div>`;
    if (q.type === "dict") {
      el.innerHTML = `${head}
        <div class="quiz-q">${T("Listen and write the sentence.")}</div>
        <div class="row" style="gap:10px;margin-bottom:12px"><button class="btn" id="dPlay">${ic("volume-2")} ${T("Listen")}</button><button class="btn" id="dSlow">${ic("snail")} ${T("Slowly")}</button></div>
        <form id="dForm" autocomplete="off"><input class="type-input" id="dAns" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="${T("Write what you hear…")}"><div class="row" style="margin-top:12px"><button class="btn btn-dark">${T("Check")}</button></div></form>
        <div class="fb"></div>`;
      const play = (r) => speak(q.text, $("#dPlay"), r ? { rate: r } : {});
      setTimeout(() => play(), 200);
      $("#dPlay").onclick = () => play(); $("#dSlow").onclick = () => play(0.6);
      $("#dForm").onsubmit = (e) => {
        e.preventDefault();
        if ($("#dAns").readOnly) return;
        $("#dAns").readOnly = true;
        const r = dictCompare(q.text, $("#dAns").value);
        $("#dForm .btn-dark").remove();
        finishItem(r.pct >= 80, `<div class="feedback ${r.pct >= 80 ? "ok" : "ko"}">${r.pct >= 80 ? ic("circle-check") : ic("circle-x")} <b>${r.pct}%</b> · <span class="en">${esc(q.text)}</span></div>`);
      };
      $("#dAns").focus();
      return;
    }
    if (q.type === "type") {
      el.innerHTML = `${head}
        <div class="quiz-q">${instr(q.q, q.q_fr)}</div>
        ${q.big ? `<div class="prompt-fr no-tx">${esc(q.big)}</div>` : ""}
        ${q.say ? `<div class="row" style="gap:10px;margin-bottom:12px"><button type="button" class="btn" id="tPlay">${ic("volume-2")} ${T("Listen")}</button><button type="button" class="btn" id="tSlow">${ic("snail")} ${T("Slowly")}</button></div>` : ""}
        ${q.sent ? gapHtml(q.sent) : ""}
        <form id="tForm" autocomplete="off"><input class="type-input" id="tAns" autocapitalize="off" autocorrect="off" spellcheck="false" lang="${APP.target}" placeholder="${T("Type your answer in English…")}">
          <div class="hint-line no-tx" id="tHintLine" hidden></div>
          <div class="row" style="margin-top:12px"><button class="btn btn-dark">${T("Check")}</button><button type="button" class="btn" id="tHint">${ic("lightbulb")} ${T("Hint")}</button><button type="button" class="btn" id="tSkip">${T("I don't know")}</button></div></form>
        <div class="fb"></div>`;
      if (q.say) {
        const play = (r) => speak(q.say, $("#tPlay"), r ? { rate: r } : {});
        setTimeout(() => play(), 200);
        $("#tPlay").onclick = () => play(); $("#tSlow").onclick = () => play(0.6);
      }
      let hints = 0;
      $("#tHint").onclick = () => {
        hints++;
        $("#tHintLine").hidden = false;
        $("#tHintLine").textContent = hintFor(q.answer, hints);
        if (hints >= 2) $("#tHint").remove();
        $("#tAns").focus();
      };
      const check = (given) => {
        const inp = $("#tAns");
        if (inp.readOnly) return;
        inp.readOnly = true;
        $$("#tForm .btn").forEach((b) => b.remove());
        let ok = !!given.trim() && [q.answer, ...(q.accept || [])].some((a) => normAnswer(a) === normAnswer(given));
        /* Long answers (translations): a small typo doesn't make the whole sentence wrong. */
        const typo = !ok && !!given.trim() && q.answer.split(/\s+/).length >= 4 && [q.answer, ...(q.accept || [])].some((a) => { const A = normAnswer(a), G = normAnswer(given); return lev(A, G) <= Math.min(2, Math.floor(A.length / 18)); });
        if (typo) ok = true;
        inp.classList.add(ok ? "ok" : "ko");
        const r = dictCompare(q.answer, given);
        const mine = given.trim() && !ok ? `<p class="small muted" style="margin:8px 0 2px">${T("Your answer")}</p><p class="heard" style="margin-top:0">${r.gw.map((w, k) => `<span class="${r.okB[k] ? "ok" : "ko"}">${esc(w)}</span>`).join(" ")}</p>` : "";
        const full = q.sent ? gapFull(q.sent, q.answer) : q.answer;
        finishItem(ok, `<div class="feedback ${ok ? "ok" : "ko"}">${typo ? ic("circle-check") + ` <b>${T("Almost perfect!")}</b> ${T("Check the spelling:")}` : ok ? ic("circle-check") + ` <b>${T("Well done!")}</b>` : ic("circle-x") + ` <b>${T("The answer:")}</b>`} <span class="en"><b>${esc(q.answer)}</b></span>${q.sent ? `<div class="en" style="margin-top:6px">${esc(full)} ${sayBtn(full)}</div>` : " " + sayBtn(q.answer)}
          ${mine}${q.ex ? `<div style="margin-top:6px">${instr(q.ex, q.ex_fr)}</div>` : ""}
          ${!ok && given.trim() ? overrideBtn(T("My answer is also correct")) : ""}</div>`, q);
      };
      $("#tForm").onsubmit = (e) => { e.preventDefault(); check($("#tAns").value); };
      $("#tSkip").onclick = () => check("");
      $("#tAns").focus();
      return;
    }
    if (q.type === "fix") {
      el.innerHTML = `${head}
        <div class="quiz-q">${T("Correct the mistake in this sentence.")}</div>
        <div class="gap-sentence wrong-sent">${esc(q.wrong)}</div>
        <form id="xForm" autocomplete="off"><input class="type-input fix-input" id="xAns" autocapitalize="off" autocorrect="off" spellcheck="false" lang="${APP.target}" value="${esc(q.wrong)}">
          <div class="row" style="margin-top:12px"><button class="btn btn-dark">${T("Check")}</button><button type="button" class="btn" id="xSkip">${T("Show me")}</button></div></form>
        <div class="fb"></div>`;
      const check = (given) => {
        const inp = $("#xAns");
        if (inp.readOnly) return;
        inp.readOnly = true;
        $$("#xForm .btn").forEach((b) => b.remove());
        const ok = given != null && [q.answer, ...(q.accept || [])].some((a) => normAnswer(a) === normAnswer(given));
        inp.classList.add(ok ? "ok" : "ko");
        const changed = given != null && normAnswer(given) !== normAnswer(q.wrong);
        finishItem(ok, `<div class="feedback ${ok ? "ok" : "ko"}">${ok ? ic("circle-check") + ` <b>${T("Well done!")}</b>` : ic("circle-x") + ` <b>${T("Correct version:")}</b>`} <span class="en"><b>${esc(q.answer)}</b></span> ${sayBtn(q.answer)}
          ${q.ex ? `<div style="margin-top:6px">${esc(q.ex)}</div>` : ""}
          ${!ok && changed ? overrideBtn(T("My correction is also right")) : ""}</div>`, q);
      };
      $("#xForm").onsubmit = (e) => { e.preventDefault(); check($("#xAns").value); };
      $("#xSkip").onclick = () => check(null);
      const xi = $("#xAns"); xi.focus(); xi.setSelectionRange(xi.value.length, xi.value.length);
      return;
    }
    if (q.type === "match") {
      const en = shuffle(q.pairs.map((p, k) => ({ t: p[0], k }))), frs = shuffle(q.pairs.map((p, k) => ({ t: p[1], k })));
      el.innerHTML = `${head}
        <div class="quiz-q">${q.q ? instr(q.q, q.q_fr) : T("Match each English sentence with its translation.")}</div>
        <div class="match-grid">
          <div class="match-col">${en.map((x) => `<button type="button" class="match-btn" data-side="en" data-k="${x.k}">${esc(x.t)}</button>`).join("")}</div>
          <div class="match-col no-tx">${frs.map((x) => `<button type="button" class="match-btn" data-side="fr" data-k="${x.k}">${esc(x.t)}</button>`).join("")}</div>
        </div>
        <div class="fb"></div>`;
      let sel = null, errors = 0, left = q.pairs.length;
      $$(".match-btn", el).forEach((b) => (b.onclick = () => {
        if (b.disabled) return;
        if (!sel || sel.dataset.side === b.dataset.side) { if (sel) sel.classList.remove("sel"); sel = b; b.classList.add("sel"); if (b.dataset.side === "en" && !q.q) speak(q.pairs[+b.dataset.k][0]); return; }
        const a = sel; sel = null; a.classList.remove("sel");
        if (a.dataset.k === b.dataset.k) {
          [a, b].forEach((x) => { x.classList.add("matched"); x.disabled = true; });
          if (--left === 0) finishItem(errors <= 1, `<div class="feedback ${errors <= 1 ? "ok" : "ko"}">${errors <= 1 ? ic("circle-check") + ` <b>${T("Well done!")}</b>` : ic("circle-x") + ` <b>${T("Done, but with a few mistakes.")}</b>`} ${errors ? Tn(errors, "{n} wrong pair.", "{n} wrong pairs.") : T("No mistakes.")}</div>`);
        } else {
          errors++;
          [a, b].forEach((x) => x.classList.add("miss"));
          setTimeout(() => [a, b].forEach((x) => x.classList.remove("miss")), 600);
        }
      }));
      return;
    }
    if (q.type === "say") {
      el.innerHTML = `${head}
        <div class="quiz-q">${T("Listen, then say it out loud.")}</div>
        <div class="say-box">
          <div class="say-en" id="sayTarget">${esc(q.en)}</div>
          ${q.fr ? `<div class="say-fr no-tx">${esc(q.fr)}</div>` : ""}
          <div class="row" style="justify-content:center;margin:14px 0"><button class="btn" id="sPlay">${ic("volume-2")} ${T("Listen")}</button><button class="btn" id="sSlow">${ic("snail")} ${T("Slowly")}</button></div>
          ${SR ? `<button class="mic" id="sMic" aria-label="${T("Speak")}">${ic("mic")}</button><p class="muted small" id="sHint" style="margin-top:10px">${T("Press the microphone and say the sentence")}</p><div class="heard no-tx" id="sHeard"></div>` : `<p class="muted small">${T("Say the sentence out loud, as close to the model as you can.")}</p>`}
        </div>
        <div class="row" style="justify-content:center;margin-top:12px" id="sActions">${SR ? `<button type="button" class="btn btn-sm" id="sSkip">${T("I can't speak right now")}</button>` : `<button type="button" class="btn btn-dark" id="sDone">${ic("check")} ${T("I said it")}</button>`}</div>
        <div class="fb"></div>`;
      const play = (r) => speak(q.en, $("#sPlay"), r ? { rate: r } : {});
      setTimeout(() => play(), 200);
      $("#sPlay").onclick = () => play(); $("#sSlow").onclick = () => play(0.6);
      const end = (ok, html) => { $("#sActions").innerHTML = ""; if ($("#sMic")) $("#sMic").disabled = true; finishItem(ok, html); };
      if ($("#sDone")) $("#sDone").onclick = () => { addXP(1, "speak"); end(true, `<div class="feedback ok">${ic("circle-check")} <b>${T("Well done!")}</b> ${T("Speaking out loud is what makes English come out naturally.")}</div>`); };
      if ($("#sSkip")) $("#sSkip").onclick = () => end(true, `<div class="feedback">${ic("info")} ${T("Skipped. Try to say it out loud next time: it's the best way to remember.")}</div>`);
      if (SR) {
        let rec = null, tries = 0;
        onCleanup(() => { try { rec && rec.abort(); } catch (e) {} });
        $("#sMic").onclick = () => {
          if ($("#sMic").classList.contains("listening")) { try { rec.stop(); } catch (e) {} return; }
          stopAudio();
          rec = new SR(); rec.lang = APP.srLang; rec.interimResults = false; rec.maxAlternatives = 5;
          rec.onstart = () => { $("#sMic").classList.add("listening"); $("#sHint").textContent = T("I'm listening… speak now"); };
          rec.onend = () => { if ($("#sMic")) { $("#sMic").classList.remove("listening"); $("#sHint").textContent = T("Press the microphone and say the sentence"); } };
          rec.onerror = (e) => toast(T(e.error === "not-allowed" ? "Allow microphone access in your browser" : e.error === "no-speech" ? "I didn't hear anything, try a bit louder" : "Microphone problem, try again"));
          rec.onresult = (e) => {
            tries++;
            let best = null;
            Array.from(e.results[0]).forEach((a) => { const r = compare(q.en, a.transcript); if (!best || r.score > best.score) best = r; });
            $("#sHeard").innerHTML = best.words.map((w, k) => `<span class="${best.ok[k] ? "ok" : "ko"}">${esc(w)}</span>`).join(" ");
            if ((S.spoken[q.en] || 0) < best.score) S.spoken[q.en] = best.score;
            addXP(1, "speak");
            if (best.score >= 70) end(true, `<div class="feedback ok">${ic("circle-check")} <b>${best.score}%</b> · ${T("Very good pronunciation!")}</div>`);
            else if (tries >= 3) end(false, `<div class="feedback ko">${ic("circle-x")} <b>${best.score}%</b> · ${T("Listen to the slow version and practise the red words. You'll get there!")}</div>`);
            else toast(T("{n}%: listen again and try once more", { n: best.score }));
          };
          try { rec.start(); } catch (err) { toast(T("The microphone couldn't start")); }
        };
      }
      return;
    }
    if (q.type === "stress") {
      const isWord = !!q.word;
      el.innerHTML = `${head}
        <div class="quiz-q">${q.q ? instr(q.q, q.q_fr) : T("Where is the stress in “{w}”? Tap the strongest syllable.", { w: esc(q.word) })}</div>
        ${q.ctx ? `<div class="stress-ctx en no-tx">${esc(q.ctx)}</div>` : ""}
        <div class="syl-row no-tx${isWord ? "" : " words"}">${q.parts.map((p, k) => `<button type="button" class="syl" data-k="${k}">${esc(p)}</button>`).join(isWord ? '<span class="syl-dot">·</span>' : "")}</div>
        ${isWord ? `<div class="row" style="justify-content:center;margin-top:14px"><button type="button" class="btn btn-sm" id="stPlay">${ic("volume-2")} ${T("Listen")}</button></div>` : ""}
        <div class="fb"></div>`;
      if ($("#stPlay")) $("#stPlay").onclick = () => speak(q.sayText || q.word, $("#stPlay"));
      $$(".syl", el).forEach((b) => (b.onclick = () => {
        const k = +b.dataset.k, ok = k === q.a;
        $$(".syl", el).forEach((x) => { const j = +x.dataset.k; x.disabled = true; if (j === q.a) x.classList.add("correct"); else if (j === k) x.classList.add("wrong"); });
        const shown = q.parts.map((p, j) => (j === q.a ? `<b class="st">${esc(p)}</b>` : esc(p))).join(isWord ? "" : " ");
        finishItem(ok, `<div class="feedback ${ok ? "ok" : "ko"}">${ok ? ic("circle-check") + ` <b>${T("Well done!")}</b>` : ic("circle-x") + ` <b>${T("Not quite.")}</b>`} <span class="en no-tx">${shown}</span>${isWord ? " " + sayBtn(q.sayText || q.word) : ""}${q.ex ? `<div style="margin-top:6px">${instr(q.ex, q.ex_fr)}</div>` : ""}</div>`, q);
      }));
      return;
    }
    if (q.type === "seq") {
      let order = shuffle(q.items.map((_, k) => k));
      for (let t = 0; t < 5 && order.every((v, k) => v === k); t++) order = shuffle(order);
      el.innerHTML = `${head}
        <div class="quiz-q">${q.q ? instr(q.q, q.q_fr) : T("Put these in the right order.")}</div>
        <div class="seq-line" id="qLine"></div>
        <p class="muted small" id="qHint">${T("Tap the items in the right order.")}</p>
        <div class="seq-bank" id="qBank">${order.map((k) => `<button type="button" class="seq-item" data-k="${k}">${esc(q.items[k])}</button>`).join("")}</div>
        <div class="row" style="margin-top:14px"><button class="btn btn-dark" id="qCheck" disabled>${T("Check")}</button><button type="button" class="btn" id="qReset">${T("Start again")}</button></div>
        <div class="fb"></div>`;
      const line = $("#qLine"), bankEl = $("#qBank");
      const refresh = () => { $("#qCheck").disabled = bankEl.children.length > 0; };
      $$(".seq-item", el).forEach((b) => (b.onclick = () => { if (b.disabled) return; (b.parentElement === bankEl ? line : bankEl).appendChild(b); refresh(); }));
      $("#qReset").onclick = () => { $$(".seq-item", line).forEach((b) => bankEl.appendChild(b)); refresh(); };
      $("#qCheck").onclick = () => {
        const got = $$(".seq-item", line).map((b) => +b.dataset.k);
        const ok = got.every((v, k) => v === k);
        $$(".seq-item", el).forEach((b, j) => { b.disabled = true; });
        $$(".seq-item", line).forEach((b, j) => b.classList.add(+b.dataset.k === j ? "correct" : "wrong"));
        $("#qCheck").remove(); $("#qReset").remove(); $("#qHint").remove();
        finishItem(ok, `<div class="feedback ${ok ? "ok" : "ko"}">${ok ? ic("circle-check") + ` <b>${T("Well done!")}</b>` : ic("circle-x") + ` <b>${T("The right order:")}</b>`}
          ${ok ? "" : `<ol class="seq-answer">${q.items.map((x) => `<li>${esc(x)}</li>`).join("")}</ol>`}${q.ex ? `<div style="margin-top:6px">${instr(q.ex, q.ex_fr)}</div>` : ""}</div>`, q);
      };
      return;
    }
    if (q.type === "order") {
      let bank = q.words.map((w, k) => ({ w, k }));
      for (let t = 0; t < 5 && bank.length > 1; t++) { bank = shuffle(bank); if (bank.some((b, k) => b.k !== k)) break; }
      el.innerHTML = `${head}
        <div class="quiz-q">${T("Put the words in the right order.")}</div>
        <div class="prompt-fr no-tx">${esc(q.fr)}</div>
        <div class="order-line" id="oLine"></div>
        <div class="tiles" id="oBank">${bank.map((b) => `<button type="button" class="word-tile" data-k="${b.k}">${esc(b.w)}</button>`).join("")}</div>
        <div class="row" style="margin-top:16px"><button class="btn btn-dark" id="oCheck" disabled>${T("Check")}</button><button type="button" class="btn" id="oReset">${T("Start again")}</button></div>
        <div class="fb"></div>`;
      const line = $("#oLine"), bankEl = $("#oBank");
      const refresh = () => { $("#oCheck").disabled = bankEl.children.length > 0; };
      const move = (t) => { if (t.disabled) return; (t.parentElement === bankEl ? line : bankEl).appendChild(t); refresh(); };
      $$(".word-tile", el).forEach((t) => (t.onclick = () => move(t)));
      $("#oReset").onclick = () => { $$(".word-tile", line).forEach((t) => bankEl.appendChild(t)); refresh(); };
      $("#oCheck").onclick = () => {
        const built = $$(".word-tile", line).map((t) => t.textContent).join(" ");
        const ok = normAnswer(built) === normAnswer(q.en);
        $$(".word-tile", el).forEach((t) => (t.disabled = true));
        line.classList.add(ok ? "ok" : "ko");
        $("#oCheck").remove(); $("#oReset").remove();
        finishItem(ok, `<div class="feedback ${ok ? "ok" : "ko"}">${ok ? ic("circle-check") + ` <b>${T("Well done!")}</b>` : ic("circle-x") + ` <b>${T("The sentence:")}</b>`} <span class="en"><b>${esc(q.en)}</b></span> ${sayBtn(q.en)}
          ${!ok ? overrideBtn(T("My order is also correct")) : ""}</div>`, q);
      };
      return;
    }
    const order = shuffle(q.o.map((_, k) => k));
    el.innerHTML = `${head}
      ${q.pre || ""}
      <div class="quiz-q">${instr(q.q, q.q_fr)}</div>
      ${q.say ? `<div class="row" style="gap:10px;margin-bottom:14px"><button class="btn" id="qPlay">${ic("volume-2")} ${T("Listen")}</button><button class="btn" id="qSlow">${ic("snail")} ${T("Slowly")}</button></div>` : ""}
      <div class="options">${order.map((k) => `<button class="option${q.ipaO ? " ipa" : ""}" data-k="${k}">${esc(q.o[k])}</button>`).join("")}</div>
      <div class="fb"></div>`;
    if (q.say) {
      const play = (r) => speak(q.say, $("#qPlay"), Object.assign(r ? { rate: r } : {}, q.voice ? { voice: q.voice } : {}));
      setTimeout(() => play(), 200);
      $("#qPlay").onclick = () => play(); $("#qSlow").onclick = () => play(0.6);
    }
    $$(".option", el).forEach((b) => (b.onclick = () => {
      const k = +b.dataset.k, ok = k === q.a;
      $$(".option", el).forEach((x) => { const j = +x.dataset.k; x.disabled = true; if (j === q.a) x.classList.add("correct"); else if (j === k) x.classList.add("wrong"); });
      finishItem(ok, `<div class="feedback ${ok ? "ok" : "ko"}">${ok ? ic("circle-check") + ` <b>${T("Well done!")}</b>` : ic("circle-x") + ` <b>${T("Not quite.")}</b>`} ${q.ex ? instr(q.ex, q.ex_fr) : ""}${q.say && !q.exHtml ? " " + sayBtn(q.say) : ""}${q.exHtml || ""}</div>`, q);
    }));
  }
  show();
}

/* ================= Exercise builders =================
   One bank of lesson questions, used in several ways: recognise (choose), build (word order),
   produce (write). Producing the answer is harder than recognising it, and that's why it sticks. */
const CONTR = [[/\bcan't\b/g, "can not"], [/\bcannot\b/g, "can not"], [/\bwon't\b/g, "will not"], [/\bshan't\b/g, "shall not"], [/n't\b/g, " not"], [/'m\b/g, " am"], [/'re\b/g, " are"], [/'ve\b/g, " have"], [/'ll\b/g, " will"], [/'d\b/g, " would"], [/\blet's\b/g, "let us"], [/\b(it|he|she|that|what|there|here|who|where|how)'s\b/g, "$1 is"]];
function normAnswer(s) {
  let t = dictTokens(s).join(" ");
  if (!FOREIGN) CONTR.forEach(([re, rep]) => { t = t.replace(re, rep); });
  return t.replace(/\s+/g, " ").trim();
}
/* Free production (role-plays): same words in the same order, contractions expanded,
   one-letter typos forgiven in longer words. Returns a percentage. */
function looseScore(target, given) {
  const t = normAnswer(target).split(" ").filter(Boolean), g = normAnswer(given).split(" ").filter(Boolean);
  if (!t.length || !g.length) return 0;
  const same = (a, b) => a === b || (a.length > 4 && lev(a, b) <= 1);
  const dp = Array.from({ length: t.length + 1 }, () => new Array(g.length + 1).fill(0));
  for (let i = t.length - 1; i >= 0; i--) for (let j = g.length - 1; j >= 0; j--)
    dp[i][j] = same(t[i], g[j]) ? 1 + dp[i + 1][j + 1] : Math.max(dp[i + 1][j], dp[i][j + 1]);
  return Math.round((dp[0][0] / t.length) * 100 * Math.min(1, t.length / g.length));
}
/* Hint 1: first letter of each word. Hint 2: half of each word. */
function hintFor(answer, level) {
  return answer.split(/\s+/).map((w) => {
    const keep = level >= 2 ? Math.max(1, Math.ceil(w.replace(/[^A-Za-z]/g, "").length / 2)) : 1;
    let n = 0;
    return w.replace(/[A-Za-z]/g, (ch) => (n++ < keep ? ch : "_"));
  }).join("  ");
}
function typedFromQuiz(q) {
  const ans = q.o[q.a];
  if (!ans || /[\/…]/.test(ans) || ans.split(/\s+/).length > 14) return null;
  const m = q.q.match(/^Translate:?\s*«\s*([\s\S]+?)\s*»/);
  if (m) return { type: "type", q: swapNames("Write it in English:", contentSwap()), q_fr: swapNames("Écris-le en anglais :", contentSwap()), big: m[1], answer: ans, ex: q.ex, ex_fr: q.ex_fr };
  if (/_{2,}/.test(q.q)) return { type: "type", q: q.q.replace(/^(Complete|Choose):?\s*/, "Write the missing word: "), q_fr: q.q_fr, answer: ans, ex: q.ex, ex_fr: q.ex_fr };
  return null;
}
function orderItem(en, f) {
  if (!en || !f || /[\/…—()]/.test(en)) return null;
  const words = en.replace(/[.!?]+$/, "").split(/\s+/);
  if (words.length < 3 || words.length > 12) return null;
  return { type: "order", fr: f, en, words };
}
function listenItem([en, f], pool) {
  const others = shuffle(pool.filter((x) => x !== en && !/[\/…]/.test(x))).slice(0, 2);
  if (others.length < 2) return null;
  const o = [en, ...others];
  return { type: "mcq", say: en, q: "Listen. Which sentence do you hear?", q_fr: "Écoute. Quelle phrase entends-tu ?", o, a: 0, ex: en, ex_fr: f };
}
const DR = (id) => (window.DRILLS || {})[id];
function splitHint(sent) { const m = sent.match(/^([\s\S]*?)\s*(\([^()]*\))\s*$/); return m ? [m[1], m[2]] : [sent, ""]; }
function gapHtml(sent) {
  const [body, hint] = splitHint(sent);
  return `<div class="gap-sentence">${esc(body).replace(/_{2,}/, '<span class="gap-blank" aria-label="blank">?</span>')}${hint ? ` <span class="gap-hint no-tx">${esc(hint)}</span>` : ""}</div>`;
}
const gapFull = (sent, answer) => splitHint(sent)[0].replace(/_{2,}/, answer);
function gapItem(l, k) {
  const d = DR(l.id), g = d && d.gap && d.gap[k];
  if (!g) return null;
  const [answer, ...accept] = g[1].split("|");
  return { type: "type", q: "Write the missing word(s):", q_fr: "Écris le ou les mots manquants :", sent: g[0], answer, accept, lessonId: l.id, qi: "g" + k };
}
function fixItem(l, k) {
  const d = DR(l.id), f = d && d.fix && d.fix[k];
  if (!f) return null;
  const [answer, ...accept] = f[1].split("|");
  return { type: "fix", wrong: f[0], answer, accept, ex: f[2], lessonId: l.id, qi: "f" + k };
}
const drillsOf = (l) => { const d = DR(l.id); return d ? [...(d.gap || []).map((_, k) => gapItem(l, k)), ...(d.fix || []).map((_, k) => fixItem(l, k))].filter(Boolean) : []; };
function drillItems(lessons, n) {
  return shuffle(lessons.flatMap((l) => drillsOf(l).map((x) => Object.assign(x, { from: `Grammar · lesson ${lnum(l)}` })))).slice(0, n);
}
function matchItem(l) {
  const pairs = shuffle(l.examples.filter(([en]) => en.split(/\s+/).length <= 9 && !/[\/…]/.test(en))).slice(0, 4);
  return pairs.length >= 3 ? { type: "match", pairs } : null;
}
/* A full lesson practice, in stages: recognise → build → write → listen and speak. */
function lessonPractice(l) {
  const quiz = l.quiz.map((q, qi) => Object.assign({ type: "mcq", lessonId: l.id, qi, from: "Recognise" }, q));
  const exs = shuffle(l.examples.filter(([en]) => !/[\/…]/.test(en)));
  const pool = l.examples.map(([en]) => en);
  const used = new Set();
  const take = (ok) => { const e = exs.find((x) => !used.has(x[0]) && (!ok || ok(x))); if (e) used.add(e[0]); return e; };
  const recog = [...quiz];
  const le = take(); const li = le && listenItem(le, pool); if (li) recog.push(Object.assign(li, { from: "Listen" }));
  const mi = matchItem(l); if (mi) recog.push(Object.assign(mi, { from: "Recognise" }));
  const build = [];
  for (let k = 0; k < 2; k++) { const e = take((x) => orderItem(x[0], x[1])); if (e) build.push(Object.assign(orderItem(e[0], e[1]), { from: "Build" })); }
  let write = drillsOf(l);
  if (!write.length) write = shuffle(l.quiz.map((q, qi) => { const t = typedFromQuiz(q); return t && Object.assign(t, { lessonId: l.id, qi }); }).filter(Boolean)).slice(0, 2);
  write = shuffle(write).map((x) => Object.assign(x, { from: "Write" }));
  const last = [];
  const de = take((x) => x[0].split(/\s+/).length <= 12); if (de) last.push({ type: "dict", text: de[0], from: "Listen and write" });
  const se = take() || exs[0]; if (se) last.push({ type: "say", en: se[0], fr: se[1], from: "Speak" });
  return [...shuffle(recog), ...build, ...write, ...last];
}
/* Mistakes: a question you got wrong comes back the next day, as a written question when possible,
   until you get it right on the day it's due. */
const qKey = (q) => (q && q.lessonId != null && q.qi != null ? `${q.lessonId}:${q.qi}` : null);
function noteMistake(q, ok) {
  const k = qKey(q);
  if (!k) return;
  S.mistakes = S.mistakes || {};
  const m = S.mistakes[k];
  if (!ok) S.mistakes[k] = { due: addDays(1), n: ((m && m.n) || 0) + 1 };
  else if (m && m.due <= today()) delete S.mistakes[k];
  save();
}
function forgiveMistake(q) { const k = qKey(q); if (k && S.mistakes && S.mistakes[k]) { delete S.mistakes[k]; save(); } }
const dueMistakes = () => Object.entries(S.mistakes || {}).filter(([k, m]) => m.due <= today() && lessonById(k.split(":")[0])).map(([k]) => k);
function mistakeItem(k) {
  const [lidS, qi] = k.split(":");
  const l = lessonById(lidS);
  if (!l) return null;
  let it = null;
  if (/^g\d+$/.test(qi)) it = gapItem(l, +qi.slice(1));
  else if (/^f\d+$/.test(qi)) it = fixItem(l, +qi.slice(1));
  else { const q = l.quiz[+qi]; if (!q) return null; it = Object.assign(typedFromQuiz(q) || Object.assign({ type: "mcq" }, q), { lessonId: l.id, qi: +qi }); }
  return it && Object.assign(it, { from: "Your mistakes" });
}

/* ================= Dictation comparison ================= */
const UNITS_W = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const TENS = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
/* French numbers in words, up to 99 (70 = soixante-dix, 80 = quatre-vingts, 21 = vingt et un). */
const FR_UNITS = ["zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"];
const FR_TENS = ["", "", "vingt", "trente", "quarante", "cinquante", "soixante"];
function frNum(n) {
  if (n < 20) return FR_UNITS[n];
  if (n >= 100) return String(n);
  if (n < 70) { const t = FR_TENS[Math.floor(n / 10)], u = n % 10; return t + (u === 1 ? " et un" : u ? "-" + FR_UNITS[u] : ""); }
  if (n < 80) return n === 71 ? "soixante et onze" : "soixante-" + FR_UNITS[n - 60];
  return n === 80 ? "quatre-vingts" : "quatre-vingt-" + FR_UNITS[n - 80];
}
/* German numbers in words, up to 99 (21 = einundzwanzig). */
const DE_UNITS = ["null", "eins", "zwei", "drei", "vier", "fünf", "sechs", "sieben", "acht", "neun", "zehn", "elf", "zwölf", "dreizehn", "vierzehn", "fünfzehn", "sechzehn", "siebzehn", "achtzehn", "neunzehn"];
const DE_TENS = ["", "", "zwanzig", "dreißig", "vierzig", "fünfzig", "sechzig", "siebzig", "achtzig", "neunzig"];
function deNum(n) {
  if (n < 20) return DE_UNITS[n];
  if (n >= 100) return String(n);
  const t = DE_TENS[Math.floor(n / 10)], u = n % 10;
  return u ? (u === 1 ? "ein" : DE_UNITS[u]) + "und" + t : t;
}
const numWords = (n) => FRENCH_COURSE ? frNum(n) : GERMAN_COURSE ? deNum(n) : n < 20 ? UNITS_W[n] : n < 100 ? TENS[Math.floor(n / 10)] + (n % 10 ? " " + UNITS_W[n % 10] : "") : String(n);
/* French answers are compared without accents (ça = ca): typing them is hard on an English keyboard, and the right
   form is always shown afterwards. */
/* German answers too: ä, ö, ü can be typed a, o, u or ae, oe, ue, and ß as ss. */
const fold = (s) => FRENCH_COURSE ? String(s).normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/œ/g, "oe").replace(/æ/g, "ae")
  : GERMAN_COURSE ? String(s).replace(/ß/g, "ss").replace(/ẞ/g, "SS").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/([aou])e/gi, "$1") : String(s);
const dictTokens = (s) => fold(String(s).toLowerCase()).replace(/[’`]/g, "'").replace(/-/g, " ")
  .replace(/\d+/g, (d) => fold(numWords(+d))).replace(/[^a-z0-9' ]/g, " ").split(/\s+/).filter(Boolean);
function lcsMatch(a, b) {
  const dp = Array.from({ length: a.length + 1 }, () => new Array(b.length + 1).fill(0));
  for (let i = a.length - 1; i >= 0; i--) for (let j = b.length - 1; j >= 0; j--)
    dp[i][j] = a[i] === b[j] ? 1 + dp[i + 1][j + 1] : Math.max(dp[i + 1][j], dp[i][j + 1]);
  const okA = new Array(a.length).fill(false), okB = new Array(b.length).fill(false);
  let i = 0, j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) { okA[i] = okB[j] = true; i++; j++; } else if (dp[i + 1][j] >= dp[i][j + 1]) i++; else j++;
  }
  return { okA, okB };
}
function dictCompare(target, given) {
  const tw = dictTokens(target), gw = dictTokens(given || "");
  const { okA, okB } = lcsMatch(tw, gw);
  const p = tw.length ? Math.round((okA.filter(Boolean).length / tw.length) * 100 * (gw.length > tw.length ? tw.length / gw.length : 1)) : 0;
  return { pct: p, tw, gw, okA, okB };
}

/* ================= Home ================= */
const RITUAL_WHEN = ["After my morning coffee", "On my commute", "During my lunch break", "When I get home from work", "After dinner", "Before going to bed"];
function nextStep(u) {
  const st = unitSteps(u);
  return st.find((s) => !s.done) || st[st.length - 1];
}
/* Today's programme, in the order to do it: words, the next activities of the course, review, speaking, listening. */
function dailyTasks() {
  const log = S.days[today()] || {};
  const G = goal();
  const cur = currentLevel();
  const due = dueIds().length;
  const dueL = dueLessons();
  const unit = currentUnit();
  const nx = nextActivity();
  const advanced = LV.indexOf(cur) >= 2;
  const promptId = unit.prompt || (PROMPTS.find((p) => p.level === cur) || PROMPTS[0]).id;
  /* New words come with the course (each unit's themes, just before their lesson); this task is only the spaced review. */
  const tasks = [];
  if (due > 0 || (log.rev || 0) > 0) tasks.push({ pillar: T("Study"), done: due === 0 || (log.rev || 0) >= G.words * 2, href: "#/reviser", icon: "layers",
    t: due > 0 ? T("Review your words ({n} due)", { n: due }) : T("Your words are up to date"), d: T("spaced repetition") });
  tasks.push(
    nx && pathToday() >= G.steps
      ? { pillar: T("Course"), done: true, href: nx.href, icon: "graduation-cap", btn: "Continue",
          t: Tn(pathToday(), "{n} course activity done today", "{n} course activities done today"), d: `${T("Next:")} ${nx.label}` }
      : { pillar: T("Course"), done: !nx, href: nx ? nx.href : "#/cours", icon: "graduation-cap",
          t: nx ? nx.label : T("Course complete"), d: nx && nx.unit ? `${T("Unit")} ${unitNum(nx.unit)} · ${loc(nx.unit, "title")}${nx.min ? ` · ${nx.min} min` : ""}` : T("End of level"), n: `${Math.min(pathToday(), G.steps)}/${Tn(G.steps, "{n} activity", "{n} activities")}` });
  const dueM = dueMistakes().length;
  if (dueL.length || dueM) tasks.push({ pillar: T("Review"), done: (log.review || 0) >= 1, href: "#/revision-grammaire", icon: "shuffle", t: `${T("Grammar review")} (${[dueL.length ? Tn(dueL.length, "{n} lesson", "{n} lessons") : "", dueM ? Tn(dueM, "{n} mistake", "{n} mistakes") : ""].filter(Boolean).join(" + ")})`, d: T("mixed practice") });
  /* Speaking and dictation of the day only use what has been taught: a role-play once its lesson is done,
     the key sentences of a unit whose lessons are done (or of the previous unit, as review). */
  const rpU = RP().find((x) => unit.lessons.includes(x.lesson) && S.lessons[x.lesson] && (!(S.dialogues || {})[x.id] || S.dialogues[x.id].date === today()));
  const prevU = COURSE[COURSE.indexOf(unit) - 1];
  const repU = unit.lessons.every((id) => S.lessons[id]) ? unit : prevU && unitDone(prevU) ? prevU : null;
  if (rpU) tasks.push({ pillar: T("Speak"), done: !!((S.dialogues || {})[rpU.id] && S.dialogues[rpU.id].date === today()), href: `#/dialogue/${rpU.id}`, icon: "messages-square", t: T("{a}: {b}", { a: T("Role-play"), b: loc(rpU, "title") }), d: T("talk to {p}, out loud", { p: rpU.partner }) });
  else if (advanced || repU) tasks.push(advanced
    ? { pillar: T("Speak"), done: (log.free || 0) >= G.free, href: `#/parler/${promptId}`, icon: "mic", t: T("Speak freely for 1-2 minutes"), d: T("answer out loud, then compare"), n: G.free > 1 ? `${Math.min(log.free || 0, G.free)}/${G.free}` : "" }
    : { pillar: T("Speak"), done: (log.speak || 0) >= G.speak, href: repU.speak ? `#/oral/${repU.speak}` : `#/repeter/${repU.id}`, icon: "mic", t: T("Repeat {n} sentences out loud", { n: G.speak }), d: T("listen, repeat, record yourself"), n: `${Math.min(log.speak || 0, G.speak)}/${G.speak}` });
  if (G.dictee && studiedSentences().length >= G.dictee) tasks.push({ pillar: T("Listen"), done: (log.dictee || 0) >= G.dictee, href: "#/dictee", icon: "ear", t: T("Dictation: {n} sentences", { n: G.dictee }), d: T("listen, then write"), n: `${Math.min(log.dictee || 0, G.dictee)}/${G.dictee}` });
  if (G.ext) tasks.push({ pillar: T("Listen"), done: (log.ext || 0) >= G.ext, href: "#ext", icon: "tv", t: T("{n} min of series or podcasts in English", { n: G.ext }), d: T("then add it in “Outside the app”"), n: `${Math.min(log.ext || 0, G.ext)}/${G.ext} min` });
  return tasks;
}
/* What the Next button opens: the first unfinished task of today's programme, then the course thread. */
function nextUp() {
  const t = dailyTasks().find((x) => !x.done && x.href !== "#ext");
  if (t) return { href: t.href, label: t.t, icon: t.icon };
  const a = nextActivity();
  return a ? { href: a.href, label: a.label, icon: a.icon } : null;
}
function viewHome() {
  const log = S.days[today()] || {};
  const G = goal();
  const cur = currentLevel();
  const tasks = dailyTasks();
  const up = nextUp();
  const doneCount = tasks.filter((t) => t.done).length;
  const allDone = doneCount === tasks.length;
  const pool =Array.from(WORDS.values()).filter((w) => w.theme !== "mine" && VOCAB.find((t) => t.id === w.theme)?.level === cur);
  const list = pool.length ? pool : Array.from(WORDS.values());
  const wod = list[today().split("-").join("") % list.length];
  const pronNext = PRON().find((c) => !pronDone(c.id) && LV.indexOf(c.level) <= LV.indexOf(cur)) || PRON().find((c) => !pronDone(c.id));
  const week = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(); d.setDate(d.getDate() - i);
    week.push({ on: practised(fmt(d)), l: d.toLocaleDateString(locale(), { weekday: "narrow" }) });
  }
  const hour = new Date().getHours();
  const hello = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
  /* The greeting is in the language learnt in the French course (Bonjour, Bonsoir), with the learner's name if known. */
  const helloT = FRENCH_COURSE ? (hour < 18 ? "Bonjour" : "Bonsoir") : GERMAN_COURSE ? (hour < 11 ? "Guten Morgen" : hour < 18 ? "Guten Tag" : "Guten Abend") : T(hello);
  const name = learnerName();
  const greet = `${helloT}${name ? `, ${name}` : ""}${FRENCH_COURSE ? " !" : "!"}`;  /* German: Guten Tag, Lena! */
  const first = S.xp === 0;
  const todayMin = Math.round(((log.sec || 0) / 60) + (log.ext || 0));

  app.innerHTML = `
  <section class="hero">
    <div class="hero-main">
      <p class="small" style="margin:0 0 6px;opacity:.8">${new Date().toLocaleDateString(locale(), { weekday: "long", day: "numeric", month: "long" })}</p>
      <h1>${esc(greet)} ${sayBtn(FOREIGN ? greet : hello + (name ? ", " + name : "") + "!")}</h1>
      <p>${first
        ? APP.welcome ? APP.welcome[lang()] || APP.welcome.en : lang() === "de" ? "Willkommen in deinem Englischkurs. Die Menüs sind auf Deutsch, alles, was du lernst, ist auf Englisch: <b>Klick auf ein englisches Wort</b>, um seine Übersetzung zu sehen, oder auf <b>FR</b>, um einen ganzen Satz zu übersetzen. Die Erklärungen sind auf Englisch und die Übersetzungen dieses Kurses auf Französisch. Die Sprache der Menüs kannst du oben auf der Seite ändern." : (isFr() ? "Bienvenue dans ton cours d'anglais. L'interface est en français ; tout ce que tu apprends est en anglais : <b>clique sur un mot anglais</b> pour voir sa traduction, ou sur <b>FR</b> pour traduire une phrase entière. Tu peux passer l'interface en anglais en haut de la page." : `Welcome to your English course. Everything here is in English: <b>click on any word</b> to see its translation, or on <b>FR</b> to translate a whole sentence. Prefer the menus in French? Click <b>EN</b> at the top of the page.${fr("Bienvenue dans ton cours d'anglais. Tout est en anglais : clique sur n'importe quel mot pour voir sa traduction, ou sur FR pour traduire une phrase entière. Tu préfères les menus en français ? Clique sur EN en haut de la page.")}`)
        : allDone ? T("Today's programme is done. Well done! Anything extra is a bonus.")
        : T("You've done {a} of {b} activities today ({m} min of English). Shall we continue?", { a: doneCount, b: tasks.length, m: todayMin })}</p>
      ${up && !first ? `<p class="hero-next">${ic(up.icon)}<span>${T(allDone ? "If you'd like to go on:" : "Next:")} <b>${esc(up.label)}</b></span></p>` : ""}
      <a class="btn btn-primary" href="${up ? up.href : "#/livres"}">${T(first ? "Start Unit 1" : allDone ? (up ? "Keep going" : "Find a book to read") : "Continue")} ${ic("arrow-right")}</a>
    </div>
    <div class="stats">
      <div class="stat"><b>${ic("flame", "c-accent")} ${streak()}</b><span>${T("day streak")}</span></div>
      <div class="stat"><b>${ic("clock", "c-blue")} ${fmtH(totalHours())}</b><span>${T("of English in total")}</span></div>
      <div class="stat"><b>${COURSE.filter(unitDone).length}/${COURSE.length}</b><span>${T("units completed")}</span></div>
      <div class="stat"><b>${mastered()}</b><span>${T("words mastered · {n} in progress", { n: learning() })}</span></div>
    </div>
  </section>

  ${first ? `<section class="card welcome">
    <h2 style="margin-top:0">${T("Before you start")}</h2>
    <h3>${T("1. Where do you start?")}</h3>
    <div class="welcome-choices">
      <a class="welcome-choice" href="${up ? up.href : "#/cours"}">${tile("sprout", "A1")}<span><b>${T("I'm a beginner, or almost")}</b><span class="muted small">${T("Start with Unit 1: the course explains everything from the start.")}</span></span></a>
      <a class="welcome-choice" href="#/placement">${tile("compass", "B1")}<span><b>${T("I already know some English")}</b><span class="muted small">${T("Take the placement test: it tells you which level to start at. The grammar part alone takes about {m} min.", { m: (PLACE_SECS.find((x) => x.id === "grammar") || { min: 15 }).min })}</span></span></a>
    </div>
    <h3>${T("2. How much time per day?")}</h3>
    <div class="seg" role="group" aria-label="${T("Time per day")}">${[15, 30, 60].map((m) => `<button data-goal="${m}" class="${S.goal === m ? "on" : ""}">${m} min</button>`).join("")}</div>
    <p class="muted small" style="margin:10px 0 0">${T("Today's programme adapts to it, and you can change it at any time. Then choose a fixed moment in “My routine”: that's what turns a good intention into a habit.")}</p>
    <h3>${T("3. Your first name (optional)")}</h3>
    <input id="nameWelcome" class="field" style="max-width:320px" value="${esc(S.name || "")}" autocomplete="given-name" aria-label="${T("Your first name (for the greeting)")}">
  </section>` : ""}

  <section class="card" style="margin-bottom:16px">
    <div class="row"><h2 style="margin:0">${T("Your path to {l}", { l: LV[LV.length - 1] })}</h2><span class="spacer"></span><a class="btn btn-sm" href="#/parcours">${T("Details")} ${ic("arrow-right")}</a></div>
    <div class="path">${LV.map((L) => {
      const st = levelStats(L);
      const done = st.pct >= 0.999;
      const skip = !done && placedOut(L);
      return `<a class="path-step ${L === cur ? "cur" : ""} ${done ? "done" : ""} ${skip ? "placed" : ""}" href="#/cours"${skip ? ` title="${T("Skipped after the placement test")}"` : ""}>
        <span class="path-dot">${done ? ic("check") : L}</span>
        <span class="path-bar"><i style="width:${Math.round(st.pct * 100)}%"></i></span>
        <span class="small">${esc(lvName(L))}</span></a>`;
    }).join("")}</div>
    <p class="muted small" style="margin:0">${T("You're working on level <b>{l}</b>. Each level has its units, then a level exam.", { l: `${cur} · ${esc(lvName(cur))}` })}</p>
    <p class="small" style="margin:8px 0 0">${Object.keys(placeState()).some((k) => PLACE_SECS.some((x) => x.id === k)) || Object.keys(S.cando || {}).length ? `<a href="#/bilan">${ic("chart-column")} ${T("My skills report")}</a>` : `<a href="#/placement">${ic("compass")} ${T("Not sure where to start? Take the placement test")}</a>`}</p>
  </section>

  <div class="grid home-grid">
    <section class="card home-main">
      <div class="row"><h2 style="margin:0">${T("Today's programme")}</h2><span class="spacer"></span><span class="muted small">${doneCount}/${tasks.length}</span></div>
      <div class="goal-row">
        <span class="small muted">${T("My pace")}</span>
        <div class="seg" role="group" aria-label="${T("Time per day")}">${[15, 30, 60].map((m) => `<button data-goal="${m}" class="${S.goal === m ? "on" : ""}">${m} min</button>`).join("")}</div>
      </div>
      <div class="progress" style="margin:12px 0 4px"><div style="width:${(doneCount / tasks.length) * 100}%"></div></div>
      <p class="small how-next">${ic("signpost", "c-accent")}<span>${T("Do these activities in order. On every page, the <b>Next</b> button at the top takes you straight to the right one: you never have to choose.")}</span></p>
      <ul class="daily">
        ${tasks.map((t) => `
          <li>
            <span class="check ${t.done ? "on" : ""}">${t.done ? ic("check") : ic(t.icon)}</span>
            <span class="txt"><span class="pillar">${t.pillar}</span><b>${esc(t.t)}</b><span class="muted small">${esc(t.d)}${t.n && !t.done ? ` · <b>${t.n}</b>` : ""}</span></span>
            <a class="btn btn-sm ${t.done ? "btn-ghost" : t === tasks.find((x) => !x.done) ? "btn-primary" : ""}" href="${t.href}">${T(t.btn || (t.done ? "Again" : "Go"))}</a>
          </li>`).join("")}
      </ul>
      <p class="muted small" style="margin:12px 0 0">${T("The other tabs (vocabulary, reading, speaking, TOEIC…) are libraries for extra practice, whenever you like: the course doesn't depend on them.")}</p>
      <p class="muted small" style="margin:8px 0 0">${T(S.goal === 60 ? "Intensive pace: about 1 hour, including 20 minutes of series or podcasts. The pace to aim for C1 in about two years." : S.goal === 30 ? "About 30 minutes: the right balance to progress fast without burning out." : "About 15 minutes: the essentials, so you never break the chain.")} <a href="#/methode">${T("Why this method?")}</a></p>
    </section>

    <section class="card word-of-day">
      <p class="muted small" style="margin:0">${T("Word of the day · level {l}", { l: cur })}</p>
      <div class="big en">${esc(wod.en)}</div>
      <p class="fr" style="margin:0 0 6px"><b>${esc(wod.fr)}</b></p>
      <p class="en" style="font-style:italic;margin-bottom:12px">“${esc(wod.ex)}”</p>
      <div class="row" style="justify-content:center">${sayBtn(wod.en)} ${sayBtn(wod.ex, T("Listen to the example"))}</div>
      ${pronNext ? `<p class="small" style="margin:14px 0 0"><a href="#/prononciation/${pronNext.id}">${ic("audio-lines")} ${T("Pronunciation: {t}", { t: esc(loc(pronNext, "title")) })}</a></p>` : ""}
    </section>

    <section class="card" id="ext">
      <div class="row"><h3 style="margin:0">${T("Outside the app")}</h3><span class="spacer"></span>${ic("tv", "muted")}</div>
      <p class="muted small">${T("Series, podcasts, videos, conversations in English: it all counts in your hours. Today: <b>{n} min</b>.", { n: log.ext || 0 })}</p>
      <div class="row">
        ${[10, 20, 30].map((m) => `<button class="btn btn-sm" data-ext="${m}">${ic("plus")} ${m} min</button>`).join("")}
        ${log.ext ? `<button class="btn btn-sm btn-ghost" data-ext="-10" aria-label="${T("Remove 10 minutes")}">${ic("minus")} 10</button>` : ""}
      </div>
      <p class="small" style="margin:10px 0 0"><a href="#/ecoute">${ic("headphones")} ${T("What to listen to? Your listening plan")}</a></p>
    </section>

    <section class="card">
      <div class="row"><h3 style="margin:0">${T("My routine")}</h3><span class="spacer"></span>${ic("repeat", "muted")}</div>
      ${S.ritual ? `
        <p class="ritual">${T("<b>{w}</b>, I do <b>{n} minutes</b> of English.", { w: esc(T(S.ritual.when)), n: S.goal })}</p>
        <button class="btn btn-sm btn-ghost" id="editRitual">${T("Change")}</button>` : `
        <p class="muted small">${T("Choose a fixed moment: that's what turns a good intention into a habit.")}</p>`}
      <form id="ritualForm" ${S.ritual ? "hidden" : ""} class="stack" style="margin-top:8px">
        <select id="rWhen" class="field">${RITUAL_WHEN.map((w) => `<option value="${w}" ${S.ritual && S.ritual.when === w ? "selected" : ""}>${T(w)}</option>`).join("")}</select>
        <button class="btn btn-sm btn-dark">${T("Save my routine")}</button>
      </form>
      <div class="week" style="margin-top:16px">${week.map((d) => `<div><i class="${d.on ? "on" : ""}"></i>${d.l}</div>`).join("")}</div>
    </section>
  </div>
`;

  $$("[data-goal]").forEach((b) => (b.onclick = () => { S.goal = +b.dataset.goal; save(); viewHome(); }));
  if ($("#nameWelcome")) $("#nameWelcome").onchange = (e) => { S.name = e.target.value.trim(); save(); viewHome(); };
  $$("[data-ext]").forEach((b) => (b.onclick = () => {
    const m = +b.dataset.ext;
    const d = todayLog();
    const delta = Math.max(-(d.ext || 0), m);
    d.ext = (d.ext || 0) + delta;
    S.extMin = Math.max(0, (S.extMin || 0) + delta);
    if (delta > 0) { S.xp += Math.round(delta / 5); d.xp += Math.round(delta / 5); toast(T("{n} min of English added", { n: delta })); }
    save(); viewHome();
    $("#ext").scrollIntoView({ block: "center" });
  }));
  $("#ritualForm").onsubmit = (e) => { e.preventDefault(); S.ritual = { when: $("#rWhen").value }; save(); toast(T("Routine saved")); viewHome(); };
  if ($("#editRitual")) $("#editRitual").onclick = () => { $("#ritualForm").hidden = false; $("#editRitual").hidden = true; };
}

/* ================= More: every tool in one place, and the settings ================= */
function viewMore(part) {
  const groups = [
    ["Exams", [["#/toeic", "timer", "B2", "TOEIC preparation", "Each part of the test explained and practised, a short test and a full mock exam with an estimated score."]]],
    ["Practise", [
      ["#/lecons", "book-open", "A2", "Lessons", "All the grammar and everyday English lessons from A1 to C2, to open at any time."],
      ["#/erreurs", "notebook-pen", "A1", "My mistakes", "The questions you got wrong: they come back in your grammar review until you get them right."],
      ["#/irreguliers", "zap", "B1", "Irregular verbs", T("{n} verbs to know by heart: go, went, gone…", { n: (window.IRREGULARS || []).length || 108 })],
      ["#/mes-mots", "star", "A2", "My words", "The words you've saved from texts or added yourself, in your reviews like the others."],
      ["#/lexique", "puzzle", "C1", "Language workshop, B2 to C2", "Collocations, idioms, word formation and sentence transformations for each B2, C1 and C2 unit, as in the Cambridge exams."],
      ["#/livres", "library", "B2", "Books", "Real books chosen for each level, and how to read them with pleasure."]
    ]],
    ["Listen and speak", [
      ["#/prononciation", "audio-lines", "A1", "Pronunciation course", T("{n} chapters from A1 to C2: all the sounds and the phonetic alphabet, stress, rhythm, linking, intonation and accents.", { n: PRON().length })],
      ["#/comprehension", "headphones", "A2", "Listening lab", T("{n} recordings, one per unit from A1 to C2, with several voices and accents: main idea, details, every word, then repeat.", { n: LAB().length })],
      ["#/dictee", "pen-line", "A2", "Dictations", "Listen to a sentence, write it, and see your mistakes word by word."],
      ["#/conversation", "messages-square", "B1", "Talk with someone", "Real conversations out loud: with Claude at any time, and with real people. Role-plays, debates and exam simulations, A1 to C2."],
      ["#/ecoute", "radio", "B2", "Listening plan", "Real podcasts, series and videos for your level, and how to listen to them."]
    ]],
    ["Your level", [
      ["#/placement", "compass", "A1", "Placement test", "An adaptive test in each skill, can-do grids and a report of your level in listening, reading, speaking, writing, grammar and vocabulary."],
      ["#/grilles", "list-checks", "A2", "Can-do grids", "What you can do at each level, skill by skill: tick what you could do tomorrow, without preparing."],
      ["#/bilan", "chart-column", "B1", "My skills report", "Your level in each skill, with the placement test, Claude's assessment and the can-do grids."],
      ["#/parcours", "route", "B2", "My path A1 → C2", "The six levels of the European framework, what each one means, and where you are."]
    ]],
    ["University level", [
      ["#/competences", "graduation-cap", "C1", "Academic skills, B2 to C2", T("{n} chapters taught as in a university English course: note-taking, essays, data, presentations, seminars, sources, critical thinking, reports, mediation, synthesis, research writing, exams.", { n: ACAD().length })],
      ["#/grammaire", "book-marked", "C2", "Grammar reference A1 → C2", T("{n} grammar points with the rule, an example and the lessons that teach them. Perfect for revising or checking a doubt.", { n: (window.GRAMMAR_REF || []).length || 105 })],
      ["#/methode", "lightbulb", "B1", "The method", "The learning techniques best supported by research, why they work, and where you'll find them in the app."]
    ]]
  ];
  /* Written out in the three interface languages, not through T(): the French course swaps the language names. */
  const courses = [
    ["index.html", "en", ui3("English course", "Cours d'anglais", "Englischkurs"), ui3("From A1 to C2, for French speakers", "Du A1 au C2, pour les francophones", "Von A1 bis C2, für Französischsprachige"), "graduation-cap", "B1"],
    ["francais.html", "fr", ui3("French course", "Cours de français", "Französischkurs"), ui3("From A1 to C2, for English speakers", "Du A1 au C2, pour les anglophones", "Von A1 bis C2, für Englischsprachige"), "languages", "A2"],
    ["allemand.html", "de", ui3("German course", "Cours d'allemand", "Deutschkurs"), ui3("For French and English speakers", "Pour les francophones et les anglophones", "Für Französisch- und Englischsprachige"), "languages", "B2"]
  ];
  app.innerHTML = `
    <h1>${T("More")}</h1>
    <p class="muted">${T("Everything that isn't in the main tabs: exams, practice tools, your level, university skills and the settings. The course already brings you to these tools when they're useful.")}</p>
    <h2 class="tools-h">${T("My courses")}</h2>
    <div class="tools">${courses.map(([href, id, title, d, icon, lv]) => `<a class="tool ${id === APP.id ? "tool-here" : ""}" href="${id === APP.id ? "#/cours" : href}">${tile(icon, lv)}<span><b>${esc(title)}</b><span class="muted">${id === APP.id ? T("You are here") : esc(d)}</span></span>${ic("arrow-right", "tool-go")}</a>`).join("")}</div>
    ${groups.map(([h, items]) => [h, items.filter(([href]) => hasTool(href.slice(2)))]).filter(([, items]) => items.length).map(([h, items]) => `<h2 class="tools-h">${T(h)}</h2>
      <div class="tools">${items.map(([href, icon, lv, title, d]) => `<a class="tool" href="${href}">${tile(icon, lv)}<span><b>${T(title)}</b><span class="muted">${T(d)}</span></span>${ic("arrow-right", "tool-go")}</a>`).join("")}</div>`).join("")}
    <h2 class="tools-h" id="settings">${ic("settings")} ${T("Settings: language, voice and backup")}</h2>
    <section class="card">${settingsHtml()}</section>`;
  bindSettings();
  if (part === "settings") setTimeout(() => { const el = $("#settings"); if (el) el.scrollIntoView({ block: "start" }); }, 0);
}
function settingsHtml() {
  return `<div class="stack">
      <label class="small muted" for="nameIn">${T("Your first name (for the greeting)")}</label>
      <input id="nameIn" class="field" value="${esc(S.name || "")}" autocomplete="given-name">
      <hr class="sep">
      <label class="small muted" for="langSel2">${T("Interface language")}</label>
      <select id="langSel2" class="field">${LANGS.map(([k, n]) => `<option value="${k}" ${lang() === k ? "selected" : ""}>${n}</option>`).join("")}</select>
      <p class="small muted" style="margin:0">${T("Only the menus, buttons and explanations change: what you learn is always in English.")}</p>
      <hr class="sep">
      <label class="small muted" for="voiceSel">${T("English voice")}</label>
      <select id="voiceSel" class="field">
        <option value="">${T("Automatic (the best available)")}</option>
        ${voices.map((v) => `<option value="${esc(v.voiceURI)}" ${S.voice === v.voiceURI ? "selected" : ""}>${esc(v.name)} — ${esc(v.lang)}</option>`).join("")}
      </select>
      <label class="small muted" for="rate">${T("Speed:")} <b id="rateVal">${S.rate}</b></label>
      <input type="range" id="rate" min="0.5" max="1.2" step="0.05" value="${S.rate}" style="width:100%">
      <div class="row"><button class="btn btn-sm" data-say="Hello! This is how I sound. Is this speed OK for you?">${ic("volume-2")} ${T("Test")}</button></div>
      <p class="small muted fr">Sur Mac, des voix bien plus naturelles sont disponibles : Réglages Système → Accessibilité → Contenu énoncé → Voix du système → Gérer les voix, puis dans « Anglais », choisis une voix « Premium » ou « Améliorée » (Ava, Zoe, Serena, Jamie…). Quitte puis relance le navigateur.</p>
      <hr class="sep">
      <div class="row">
        <button class="btn btn-sm" id="exportBtn">${ic("save")} ${T("Save my progress")}</button>
        <label class="btn btn-sm">${ic("folder-open")} ${T("Restore")}<input type="file" id="importFile" accept="application/json" hidden></label>
      </div>
      <p class="small muted">${T("Your progress is saved in this browser. Make a backup from time to time, or to move it to another device.")}</p>
      <p class="small muted">${T("In private browsing and in Tor Browser, everything is erased when you close the browser: save your progress before closing. Tor Browser also blocks reading aloud.")}</p>
    </div>`;
}
function bindSettings() {
  $("#nameIn").onchange = (e) => { S.name = e.target.value.trim(); save(); toast(T("Saved")); };
  $("#langSel2").onchange = (e) => setLang(e.target.value);
  $("#voiceSel").onchange = (e) => { S.voice = e.target.value; save(); speak(FRENCH_COURSE ? "Bonjour ! Voici ma voix." : GERMAN_COURSE ? "Hallo! Das ist meine Stimme." : "Hello Stella!"); };
  $("#rate").oninput = (e) => { S.rate = +e.target.value; $("#rateVal").textContent = S.rate; save(); };
  $("#exportBtn").onclick = () => {
    const blob = new Blob([JSON.stringify(S, null, 2)], { type: "application/json" });
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = `english-progress-${today()}.json`; a.click();
  };
  $("#importFile").onchange = (e) => {
    const f = e.target.files[0]; if (!f) return;
    f.text().then((t) => {
      try { S = Object.assign(defaults(), JSON.parse(t)); save(); buildIndex(); buildDict(); toast(T("Progress restored")); route(); }
      catch (err) { toast(T("This file isn't valid")); }
    });
  };
}

/* ================= Course ================= */
const unitNum = (u) => COURSE.filter((x) => x.level === u.level).indexOf(u) + 1;
function unitSteps(u) {
  const st = S.units[u.id] || {};
  const themes = u.vocab.map((id) => VOCAB.find((t) => t.id === id)).filter(Boolean);
  const words = themes.flatMap((t) => t.words.map(([en]) => en));
  const seen = words.filter((en) => S.srs[en]).length;
  const r = READINGS.find((x) => x.id === u.reading);
  const sp = u.speak ? SPEAKING.find((c) => c.id === u.speak) : null;
  const spokenOk = sp ? sp.phrases.filter(([en]) => (S.spoken[en] || 0) >= 80).length >= Math.ceil(sp.phrases.length / 2) : !!st.speak;
  const promptOk = u.prompt ? !!S.prompts[u.prompt] : true;
  return [
    { key: "vocab", icon: "layers", label: "Vocabulary", done: words.length > 0 && seen / words.length >= 0.8 },
    { key: "grammar", icon: "book-open", label: "Grammar", done: u.lessons.every((id) => S.lessons[id]) },
    { key: "reading", icon: u.listen ? "headphones" : "book-open-text", label: u.listen ? "Listening" : "Reading", done: !!(r && S.readings[r.id]) },
    { key: "speaking", icon: "mic", label: "Speaking", done: (spokenOk || !!st.speak) && promptOk },
    { key: "writing", icon: "pen-line", label: "Writing", done: !!st.wdone },
    { key: "dictation", icon: "ear", label: "Dictation", done: (st.dict || 0) > 0 },
    { key: "test", icon: "list-checks", label: "Unit test", done: (st.test || 0) >= 70 }
  ];
}
function markStep() { todayLog().step = (todayLog().step || 0) + 1; save(); }

/* ================= The thread: one next activity at a time =================
   Every activity of a unit, in teaching order: the words just before the lesson that uses them,
   then the unit's texts, speaking, writing and the checks. The Next button always opens the first one
   not done yet, so there is never a choice to make. Extras (more texts, pronunciation, academic skills)
   stay outside the thread, under "To go further". */
const PHASES = [["learn", "Words and grammar"], ["understand", "Reading and listening"], ["speak", "Speaking"], ["write", "Writing"], ["check", "Check what you've learned"]];
function unitPath(u) {
  const us = S.units[u.id] || {};
  const out = [];
  const add = (key, phase, icon, kind, label, href, done) => out.push({ key: u.id + ":" + key, unit: u, phase, icon, kind, label, href, done: !!done });
  const themes = u.vocab.map((id) => VOCAB.find((t) => t.id === id)).filter(Boolean);
  const lessons = u.lessons.map(lessonById).filter(Boolean).sort((x, y) => LESSONS.indexOf(x) - LESSONS.indexOf(y));
  const per = Math.ceil(themes.length / Math.max(1, lessons.length));
  const addTheme = (t) => { const s = themeStats(t); add("v:" + t.id, "learn", "layers", "Words", T("Learn the words: {t}", { t: loc(t, "title") }), `#/apprendre/${t.id}`, s.total && s.seen / s.total >= 0.8); };
  lessons.forEach((l, i) => {
    themes.slice(i * per, (i + 1) * per).forEach(addTheme);
    add("l:" + l.id, "learn", "book-open", l.kind === "functional" ? "Everyday English" : "Grammar", loc(l, "title"), `#/lecons/${l.id}`, S.lessons[l.id]);
  });
  if (!lessons.length) themes.forEach(addTheme);
  add("ctx", "learn", "search", "Words", T("Words in context"), `#/contexte/${u.id}`, (S.ctx || {})[u.id]);
  if (LEX()[u.id]) add("lex", "learn", "puzzle", "Language workshop", T("Collocations, idioms, word formation, transformations"), `#/lexique/${u.id}`, lexDone(u.id) === 3);
  const r = READINGS.find((x) => x.id === u.reading);
  if (r) add("r", "understand", u.listen ? "headphones" : "book-open-text", u.listen ? "Listening" : "Reading", loc(r, "title"), `#/lecture/${r.id}${u.listen ? "/listen" : ""}`, S.readings[r.id]);
  LAB().filter((x) => x.unit === u.id).forEach((x) => add("lab:" + x.id, "understand", "headphones", "Listening lab", loc(x, "title"), `#/comprehension/${x.id}`, labDone(x.id)));
  const sp = u.speak ? SPEAKING.find((c) => c.id === u.speak) : null;
  if (sp) add("sp", "speak", "mic", "Speaking", `${T("Repeat:")} ${loc(sp, "title")}`, `#/oral/${sp.id}`, us.speak || sp.phrases.filter(([en]) => (S.spoken[en] || 0) >= 80).length >= Math.ceil(sp.phrases.length / 2));
  else add("sp", "speak", "mic", "Speaking", T("Repeat the key sentences of the unit"), `#/repeter/${u.id}`, us.speak);
  RP().filter((x) => u.lessons.includes(x.lesson)).forEach((x) => add("rp:" + x.id, "speak", "messages-square", "Speaking", `${T("Role-play")}: ${loc(x, "title")}`, `#/dialogue/${x.id}`, (S.dialogues || {})[x.id]));
  const pr = u.prompt ? PROMPTS.find((p) => p.id === u.prompt) : null;
  if (pr) add("pr", "speak", "message-circle", "Speaking", `${T("Speak freely:")} ${pr.q}`, `#/parler/${pr.id}`, S.prompts[pr.id]);
  const g = (window.WRITING_GUIDE || {})[u.id];
  add("w", "write", "pen-line", "Writing", g ? loc(g, "genre") : T("The unit's writing task"), `#/ecrit/${u.id}`, us.wdone);
  add("d", "check", "ear", "Dictation", T("Unit {n} dictation", { n: unitNum(u) }), `#/dictee-unite/${u.id}`, (us.dict || 0) > 0);
  add("t", "check", "list-checks", "Unit test", T("Unit {n} test", { n: unitNum(u) }), `#/test/${u.id}`, (us.test || 0) >= 70);
  /* About how long each activity takes, rounded to 5 minutes: to fit the day's activities into the time you have. */
  const wc = r ? r.paragraphs.map((x) => x.en).join(" ").split(/\s+/).length : 0;
  const writeMin = { A1: 15, A2: 15, B1: 20, B2: 20, C1: 30, C2: 30 }[u.level] || 20;
  const base = { ctx: 5, lex: 25, lab: 12, sp: 5, rp: 6, pr: 5, w: writeMin, d: 6, t: 12, l: 20 };
  out.forEach((a) => {
    const k = a.key.slice(u.id.length + 1), kind = k.split(":")[0];
    let m = base[kind];
    if (kind === "v") { const t = themes.find((x) => "v:" + x.id === k); m = t ? t.words.length / 3 : 5; }
    if (kind === "r") m = wc / 120 + 5 + (u.listen ? 3 : 0);
    a.min = Math.max(5, Math.round((m || 5) / 5) * 5);
  });
  return out;
}
/* 75 → "1 h 15", 40 → "40 min". */
const fmtDur = (m) => (m < 60 ? `${m} min` : `${Math.floor(m / 60)} h${m % 60 ? ` ${String(m % 60).padStart(2, "0")}` : ""}`);
/* The next activity of the whole course: a level exam as soon as all its units are done, otherwise the current unit's thread. */
function nextActivity() {
  for (const L of LV) {
    if (placedOut(L)) continue;
    const us = COURSE.filter((u) => u.level === L);
    if (!us.length) continue;
    if (!us.every(unitDone)) break;
    if (!(S.exams[L] >= 70)) return { key: "exam:" + L, phase: "check", icon: "award", kind: "Level exam", label: T("{l} exam", { l: L }), href: `#/examen/${L}`, done: false };
  }
  return unitPath(currentUnit()).find((a) => !a.done) || null;
}
/* The day each activity of the thread was first completed, so the daily programme can count them.
   Activities already done before this existed are marked "before". */
function trackPath() {
  const u = currentUnit(), i = COURSE.indexOf(u);
  const keys = [COURSE[i - 1], u].filter(Boolean).flatMap(unitPath).filter((a) => a.done).map((a) => a.key)
    .concat(LV.filter((L) => S.exams[L] >= 70).map((L) => "exam:" + L));
  const stamp = S.pathDone ? today() : "before";
  S.pathDone = S.pathDone || {};
  keys.forEach((k) => { if (!S.pathDone[k]) S.pathDone[k] = stamp; });
}
const pathToday = () => Object.values(S.pathDone || {}).filter((d) => d === today()).length;
function viewCourse() {
  const cu = currentUnit();
  const cnx = nextActivity();
  app.innerHTML = `
    <h1>${T("My English course")}</h1>
    <p class="muted">${T("A complete course from A1 to C2, organised like a textbook: each unit is a full lesson with vocabulary, grammar, reading or listening, speaking, writing, dictation and a test. At the end of each level, an exam checks that you're ready for the next one.")}</p>
    <a class="card unit-next" href="#/unite/${cu.id}">
      ${tile(cu.icon, cu.level)}
      <div style="flex:1;min-width:0"><span class="muted small">${T("Continue")} · ${cu.level} · ${T("Unit")} ${unitNum(cu)}</span><h2 style="margin:2px 0 0">${esc(loc(cu, "title"))}</h2>${cnx ? `<p class="small" style="margin:6px 0 0">${T("Next:")} <b>${esc(cnx.label)}</b></p>` : ""}</div>
      ${ic("arrow-right")}
    </a>
    <a class="card ear-cta" href="#/placement">${tile("compass", "A2")}<div style="flex:1;min-width:0"><h3 style="margin:0">${T("Placement test and skills report")}</h3><p class="muted small" style="margin:4px 0 0">${T("An adaptive test in each skill, can-do grids and a report of your level in listening, reading, speaking, writing, grammar and vocabulary.")}</p></div>${ic("arrow-right")}</a>
    <a class="card ear-cta" href="#/competences" style="margin-top:12px">${tile("graduation-cap", "C1")}<div style="flex:1;min-width:0"><h3 style="margin:0">${T("Academic skills, B2 to C2")}</h3><p class="muted small" style="margin:4px 0 0">${T("{n} chapters taught as in a university English course: note-taking, essays, data, presentations, seminars, sources, critical thinking, reports, mediation, synthesis, research writing, exams.", { n: ACAD().length })}</p></div><span class="muted small">${ACAD().filter((c) => acadDone(c.id)).length} / ${ACAD().length}</span>${ic("arrow-right")}</a>
    ${LV.map((L) => {
      const units = COURSE.filter((u) => u.level === L);
      if (!units.length) return ""; /* a level still being written (French course) */
      const done = units.filter(unitDone).length;
      const ex = S.exams[L];
      return `<details class="level-block" ${L === currentLevel() || done ? "open" : ""}>
        <summary><span class="lvl-sum">${levelTag(L)}<b>${esc(lvName(L))}</b><span class="muted small">${T("{a} / {b} units", { a: done, b: units.length })}${ex != null ? ` · ${T("exam")} ${ex}%` : ""}${placedOut(L) && done < units.length ? ` · ${T("Skipped after the placement test")}` : ""}</span></span>${ic("chevron-down", "chev")}</summary>
        <div class="grid grid-2">
          ${units.map((u) => {
            const pa = unitPath(u);
            const n = pa.filter((a) => a.done).length;
            return `<a class="card unit-card ${unitDone(u) ? "done" : ""}" href="#/unite/${u.id}">
              <div class="row">${tile(u.icon, u.level)}<div style="flex:1;min-width:0"><span class="muted small">${T("Unit")} ${unitNum(u)}</span><h3 style="margin:0">${esc(loc(u, "title"))}</h3></div>${unitDone(u) ? `<span class="tag tag-done">${ic("check")} ${S.units[u.id].test}%</span>` : ""}</div>
              <ul class="mini-can">${loc(u, "can").map((c) => `<li>${esc(c)}</li>`).join("")}</ul>
              <div class="unit-prog"><div class="progress"><div style="width:${pct(n, pa.length)}%"></div></div><span class="muted small">${T("{a}/{b} activities", { a: n, b: pa.length })} · ${fmtDur(pa.reduce((m, a) => m + a.min, 0))}</span></div>
            </a>`;
          }).join("")}
          <a class="card exam-card ${ex >= 70 ? "done" : ""}" href="#/examen/${L}">
            <div class="row">${tile("award", L)}<div style="flex:1"><span class="muted small">${T("End of level")}</span><h3 style="margin:0">${T("{l} exam", { l: L })}</h3></div>${ex != null ? `<span class="tag ${ex >= 70 ? "tag-done" : ""}">${ex}%</span>` : ""}</div>
            <p class="muted small" style="margin:10px 0 0">${T("Grammar, vocabulary, reading and dictation. Pass with 70% to validate the level.")}</p>
          </a>
        </div>
      </details>`;
    }).join("")}`;
}
function viewUnit(id) {
  const u = COURSE.find((x) => x.id === id);
  if (!u) return viewCourse();
  const themes = u.vocab.map((t) => VOCAB.find((x) => x.id === t)).filter(Boolean);
  const extraR = (u.extra || []).map((rid) => READINGS.find((x) => x.id === rid)).filter(Boolean);
  const idx = COURSE.indexOf(u);
  const next = COURSE[idx + 1];
  const path = unitPath(u);
  const doneN = path.filter((a) => a.done).length;
  const nx = path.find((a) => !a.done);
  const row = (label, title, href, icon, btn, done) => `<div class="row step-link"><span style="flex:1"><b>${label}</b> ${title} ${done ? `<span class="tag tag-done">${ic("check")}</span>` : ""}</span><a class="btn btn-sm" href="${href}">${ic(icon)} ${T(btn)}</a></div>`;
  const further = extraR.map((x) => row(T("Extra:"), esc(loc(x, "title")), `#/lecture/${x.id}`, "book-open-text", "Read", S.readings[x.id])).join("")
    + acadRows(u, "read") + acadRows(u, "speak") + acadRows(u, "write")
    + PRON().filter((x) => (x.units || []).includes(u.id)).map((x) => row(T("Pronunciation:"), esc(loc(x, "title")), `#/prononciation/${x.id}`, "audio-lines", "Open", pronDone(x.id))).join("")
    + (themes.length ? `<div class="row step-link"><span style="flex:1"><b>${T("Spell the words:")}</b> <span class="chips" style="display:inline-flex">${themes.map((t) => `<a class="chip" href="#/ecrire/${t.id}">${ic("keyboard")} ${esc(loc(t, "title"))}</a>`).join("")}</span></span></div>` : "")
    + row(T("Real conversation:"), T("talk about this unit with Claude, out loud"), `#/conversation/unit/${u.id}`, "bot", "Talk");
  app.innerHTML = `
    ${back("#/cours", "Course")}
    <div class="unit-head">
      ${tile(u.icon, u.level)}
      <div><span class="muted small">${levelTag(u.level)} ${T("Unit {a} of {b}", { a: unitNum(u), b: COURSE.filter((x) => x.level === u.level).length })}</span><h1 style="margin:4px 0 0">${esc(loc(u, "title"))}</h1></div>
    </div>
    <section class="card teacher">
      <div class="row" style="flex-wrap:nowrap;align-items:flex-start">${ic("message-circle", "c-accent")}<p style="margin:0"><b>${T("From your teacher.")}</b> ${instr(u.intro, u.intro_fr)}</p></div>
      <h3 style="margin-top:16px">${T("By the end of this unit, you'll be able to…")}</h3>
      <ul class="checklist">${u.can.map((c, i) => `<li>${ic("target")}<span>${instr(c, u.can_fr && u.can_fr[i])}</span></li>`).join("")}</ul>
    </section>
    <section class="card unit-path">
      <div class="row"><h2 style="margin:0">${ic("route")} ${T("Your path through this unit")}</h2><span class="spacer"></span><span class="muted small">${T("{a} / {b} done", { a: doneN, b: path.length })}${doneN < path.length ? ` · ${T("about {t} left", { t: fmtDur(path.filter((a) => !a.done).reduce((m, a) => m + a.min, 0)) })}` : ""}</span></div>
      <div class="progress" style="margin:12px 0"><div style="width:${pct(doneN, path.length)}%"></div></div>
      <p class="muted small" style="margin:0">${T("Do the activities in this order, one at a time. The <b>Next</b> button at the top of every page takes you to the right one. You can also open any activity whenever you like.")}</p>
      ${PHASES.map(([ph, title]) => {
        const items = path.filter((a) => a.phase === ph);
        if (!items.length) return "";
        return `<h3 class="pl-phase">${T(ph === "understand" && u.listen ? "Listening" : title)}</h3>
        <ol class="pl-list">${items.map((a) => {
          const n = path.indexOf(a) + 1, isNext = nx && a.key === nx.key;
          return `<li class="pl-item ${a.done ? "done" : ""} ${isNext ? "next" : ""}">
            <span class="pl-num">${a.done ? ic("check") : n}</span>
            <span class="pl-txt"><span class="pillar">${T(a.kind)} · ${a.min} min${isNext ? ` · ${T("You are here")}` : ""}</span><b>${esc(a.label)}</b></span>
            <a class="btn btn-sm ${isNext ? "btn-primary" : a.done ? "btn-ghost" : ""}" href="${a.href}">${T(isNext ? "Start" : a.done ? "Again" : "Open")}</a>
          </li>`;
        }).join("")}</ol>`;
      }).join("")}
    </section>
    ${further ? `<details class="card further">
      <summary>${ic("library")} <span>${T("To go further")}</span><span class="muted small">${T("optional, whenever you like")}</span></summary>
      <div style="margin-top:12px">${further}</div>
    </details>` : ""}
    <div class="row" style="margin-top:20px">
      <span class="spacer"></span>
      ${next && next.level === u.level ? `<a class="btn btn-dark" href="#/unite/${next.id}">${T("Unit")} ${unitNum(next)} ${ic("arrow-right")}</a>` : `<a class="btn btn-dark" href="#/examen/${u.level}">${T("{l} exam", { l: u.level })} ${ic("arrow-right")}</a>`}
    </div>`;
}
function viewWriting(id) {
  const u = COURSE.find((x) => x.id === id);
  if (!u) return viewCourse();
  const w = u.writing;
  const us = unitState(u.id);
  const g = (window.WRITING_GUIDE || {})[u.id];
  // A word = signs between two spaces, as in the DELF/DALF and Cambridge rules; punctuation on its own (French « : ») doesn't count.
  const count = (t) => t.split(/\s+/).filter((w) => /[A-Za-zÀ-ÿ0-9]/.test(w)).length;
  /* The model with its key phrases highlighted and numbered, and the legend underneath. */
  const annotated = () => {
    let html = esc(w.model);
    const legend = [];
    ((g && g.marks) || []).forEach(([ph, en, f]) => {
      const e = esc(ph), i = html.indexOf(e);
      if (i < 0) return;
      legend.push([en, f]);
      html = html.slice(0, i) + `<mark class="wm">${e}<sup>${legend.length}</sup></mark>` + html.slice(i + e.length);
    });
    return { html, legend };
  };
  const am = annotated();
  app.innerHTML = `
    ${back(`#/unite/${u.id}`, `Unit ${unitNum(u)}`)}
    <h1>${ic("pen-line")} ${T("Writing")}</h1>
    <section class="card">
      <p style="font-size:18px;margin:0"><b>${instr(w.task, w.task_fr)}</b></p>
      <p class="muted small" style="margin:8px 0 0">${T("Length: {n} words.", { n: w.words })}</p>
      <h3 style="margin-top:16px">${T("Useful phrases")}</h3>
      <div class="chips">${w.tips.map((t) => `<button class="chip" data-say="${esc(t.replace(/…/g, ""))}">${ic("volume-2")} <span class="en">${esc(t)}</span></button>`).join("")}</div>
    </section>
    ${g ? `<section class="card">
      <h2 style="margin-top:0">${ic("list-ordered")} ${T("How to write it: {g}", { g: esc(loc(g, "genre")) })}</h2>
      <p class="muted small">${T("Good writers plan before they write. Follow these steps, and note two or three words for each one: then writing your text will be much easier.")}</p>
      <ol class="w-plan">${g.plan.map(([en, f], k) => `<li><span>${instr(en, f)}</span><input class="field" data-plan="${k}" value="${esc((us.plan || [])[k] || "")}" placeholder="${T("My ideas…")}" autocomplete="off"></li>`).join("")}</ol>
    </section>` : ""}
    <section class="card">
      <textarea id="wText" class="field note" rows="10" placeholder="${T("Write here…")}" spellcheck="true" lang="${APP.target}">${esc(us.writing || "")}</textarea>
      <div class="row" style="margin-top:10px">
        <span class="muted small" id="wCount">${T("{n} words", { n: count(us.writing || "") })}</span><span class="spacer"></span>
        <button class="btn btn-sm" id="wListen">${ic("volume-2")} ${T("Listen to my text")}</button>
        <button class="btn btn-sm btn-dark" id="wDone">${ic("check")} ${T("I've finished")}</button>
      </div>
    </section>
    <section class="card">
      <h2>${ic("graduation-cap")} ${T("A teacher's correction")}</h2>
      <p class="muted small">${T("When your text is finished, ask Claude to correct it like a teacher would: corrected text, mistakes explained, a mark and one point to work on.")}</p>
      ${correctionBox("u:" + u.id)}
    </section>
    <section class="card" id="wAfter" ${us.wdone ? "" : "hidden"}>
      <h2>${ic("list-checks")} ${T("Check your text")}</h2>
      <p class="muted small">${T("Like a teacher would: tick each point you've respected. If not, correct your text above.")}</p>
      <ul class="selfcheck">${w.checklist.map((c, i) => `<li><label><input type="checkbox" data-ck="${i}" ${us.checks && us.checks[i] ? "checked" : ""}> <span>${esc(c)}</span></label></li>`).join("")}</ul>
      <h2 style="margin-top:20px">${ic("book-open-text")} ${T("Model answer")}</h2>
      <p class="muted small">${T(am.legend.length ? "The highlighted phrases are what makes this text work. Compare with yours, and reuse two of them." : "Compare with your text: note two expressions you'd like to reuse.")}</p>
      <div class="model en">${am.html}</div>
      ${am.legend.length ? `<ol class="w-legend">${am.legend.map(([en, f]) => `<li>${esc(isFr() ? f : en)}</li>`).join("")}</ol>` : ""}
      <div class="row" style="margin-top:10px"><button class="btn btn-sm" data-say="${esc(w.model)}">${ic("volume-2")} ${T("Listen")}</button><button class="btn btn-sm" data-say="${esc(w.model)}" data-slow="1">${ic("snail")} ${T("Slowly")}</button></div>
    </section>`;
  const ta = $("#wText");
  let tm;
  ta.oninput = () => { $("#wCount").textContent = T("{n} words", { n: count(ta.value) }); clearTimeout(tm); tm = setTimeout(() => { us.writing = ta.value; save(); }, 400); };
  $("#wListen").onclick = (e) => { if (ta.value.trim()) speak(ta.value, e.currentTarget); else toast(T("Write your text first")); };
  $("#wDone").onclick = () => {
    if (count(ta.value) < 15) { toast(T("Write a little more first")); return; }
    us.writing = ta.value;
    if (!us.wdone) { us.wdone = true; addXP(15, "step"); toast(T("Well done! Now check your text")); } else save();
    $("#wAfter").hidden = false;
    $("#wAfter").scrollIntoView({ behavior: "smooth", block: "start" });
  };
  $$("[data-ck]").forEach((c) => (c.onchange = () => { us.checks = us.checks || {}; us.checks[c.dataset.ck] = c.checked; save(); }));
  $$("[data-plan]").forEach((inp) => (inp.oninput = () => { us.plan = us.plan || []; us.plan[+inp.dataset.plan] = inp.value; save(); }));
  bindCorrection("u:" + u.id, () => ({
    text: ta.value, level: u.level, title: `${T("Unit")} ${unitNum(u)} · ${loc(u, "title")}`,
    kind: "End-of-unit writing task", kind_fr: "Production écrite de fin d'unité",
    task: w.task, task_fr: w.task_fr, words: w.words, criteria: w.checklist,
    focus: u.lessons.map(lessonById).filter(Boolean).map((l) => l.title).join(", ")
  }));
}
/* Build a test from lessons, vocabulary themes, readings and sentences. */
function vocabMCQ(themes, n) {
  const words = shuffle(themes.flatMap((t) => t.words.map(([en, f]) => ({ en, fr: f }))));
  return words.slice(0, n).map((w) => {
    const others = shuffle(words.filter((x) => x.en !== w.en)).slice(0, 3).map((x) => x.en);
    const o = shuffle([w.en, ...others]);
    /* The language names are swapped before the word goes in: a translation such as "English" stays as it is. */
    return { type: "mcq", q: swapNames("How do you say « {w} » in English?", contentSwap()).replace("{w}", w.fr), q_fr: swapNames("Comment dit-on « {w} » en anglais ?", contentSwap()).replace("{w}", w.fr), o, a: o.indexOf(w.en), ex: `« ${w.fr} » = ${w.en}`, from: "Vocabulary" };
  });
}
function grammarItems(lessons, n, written = 0) {
  const picked = shuffle(lessons.flatMap((l) => l.quiz.map((q, qi) => ({ l, q, qi })))).slice(0, n);
  let w = 0;
  return picked.map(({ l, q, qi }) => {
    const t = w < written ? typedFromQuiz(q) : null;
    if (t) w++;
    return Object.assign(t || Object.assign({ type: "mcq" }, q), { from: `Grammar · lesson ${lnum(l)}`, lessonId: l.id, qi });
  });
}
function orderItems(lessons, n) {
  return shuffle(lessons.flatMap((l) => l.examples)).map(([en, f]) => orderItem(en, f)).filter(Boolean).slice(0, n).map((x) => Object.assign(x, { from: "Sentence building" }));
}
function sentencePool(lessons) {
  return shuffle(lessons.flatMap((l) => l.examples.map(([en]) => en)).filter((x) => !/[\/…—]/.test(x) && x.split(/\s+/).length >= 3));
}
function readingItems(r, n, withText) {
  if (!r) return [];
  const pre = withText ? `<details class="card mini-text" open><summary>${ic("book-open-text")} <span>${esc(loc(r, "title"))}</span></summary><div class="reader" data-gloss="${r.id}" style="font-size:17px">${r.paragraphs.map((p) => `<p>${p.speaker ? `<span class="speaker">${esc(p.speaker)}</span> ` : ""}${esc(p.en)}</p>`).join("")}</div></details>` : "";
  return shuffle(r.questions).slice(0, n).map((q) => Object.assign({ type: "mcq", from: `Reading · ${r.title}`, pre }, q));
}
function testResult(el, score, total, results, items, after, passMark = 70) {
  const p = pct(score, total);
  const sec = {};
  items.forEach((it, k) => { const s = (it.from || "Dictation").split(" · ")[0]; sec[s] = sec[s] || [0, 0]; sec[s][1]++; if (results[k]) sec[s][0]++; });
  el.innerHTML = `
    ${p >= passMark ? celebrate() : ""}
    <div class="result-big">${p}%</div>
    <p style="text-align:center">${T(p >= passMark ? "Passed! Well done." : "Not yet: review the points below and try again.")}</p>
    <div class="sections">${Object.entries(sec).map(([k, [a, b]]) => `<div class="sec"><span>${esc(T(k))}</span><div class="progress"><div style="width:${pct(a, b)}%"></div></div><b>${a}/${b}</b></div>`).join("")}</div>
    <div id="afterTest" class="row" style="justify-content:center;margin-top:16px"></div>`;
  if (after) after(p);
}
function viewUnitTest(id) {
  const u = COURSE.find((x) => x.id === id);
  if (!u) return viewCourse();
  const lessons = u.lessons.map(lessonById).filter(Boolean);
  const themes = u.vocab.map((t) => VOCAB.find((x) => x.id === t)).filter(Boolean);
  const r = READINGS.find((x) => x.id === u.reading);
  const items = [
    ...grammarItems(lessons, 6, 2),
    ...drillItems(lessons, 3),
    ...orderItems(lessons, 2),
    ...vocabMCQ(themes, 5),
    ...readingItems(r, 2, true),
    ...sentencePool(lessons).slice(0, 2).map((text) => ({ type: "dict", text, from: "Dictation" }))
  ];
  app.innerHTML = `${back(`#/unite/${u.id}`, `Unit ${unitNum(u)}`)}<h1>${ic("list-checks")} ${T("Unit {n} test", { n: unitNum(u) })}</h1><p class="muted">${T("{n} questions: grammar (some to write or correct yourself), sentence building, vocabulary, reading and dictation. You need 70% to complete the unit.", { n: items.length })}</p><section class="card" id="quizBox"></section>`;
  runQuiz($("#quizBox"), items, (score, total, results) => {
    testResult($("#quizBox"), score, total, results, items, (p) => {
      const us = unitState(u.id);
      const firstPass = p >= 70 && !(us.test >= 70);
      us.test = Math.max(us.test || 0, p);
      addXP(firstPass ? 30 : 5, "step");
      const next = COURSE[COURSE.indexOf(u) + 1];
      $("#afterTest").innerHTML = `<a class="btn" href="#/unite/${u.id}">${T("Back to the unit")}</a>${p >= 70 ? continueBtn(next && next.level === u.level ? `<a class="btn btn-primary" href="#/unite/${next.id}">${T("Unit")} ${unitNum(next)} ${ic("arrow-right")}</a>` : `<a class="btn btn-primary" href="#/examen/${u.level}">${T("{l} exam", { l: u.level })} ${ic("arrow-right")}</a>`) : `<button class="btn btn-primary" id="retest">${T("Try again")}</button>`}`;
      if ($("#retest")) $("#retest").onclick = () => viewUnitTest(id);
    });
  });
}
function viewExam(L) {
  if (!LV.includes(L) || !COURSE.some((u) => u.level === L)) return viewCourse();
  const lessons = LESSONS.filter((l) => l.level === L);
  const themes = VOCAB.filter((t) => t.level === L && !t.toeic);
  const rs = shuffle(READINGS.filter((r) => r.level === L)).slice(0, 2);
  const items = [
    ...grammarItems(lessons, 15, 4),
    ...drillItems(lessons, 5),
    ...orderItems(lessons, 3),
    ...vocabMCQ(themes, 10),
    ...rs.flatMap((r) => readingItems(r, 3, true)),
    ...sentencePool(lessons).slice(0, 3).map((text) => ({ type: "dict", text, from: "Dictation" }))
  ];
  const left = COURSE.filter((u) => u.level === L && !unitDone(u)).length;
  app.innerHTML = `
    ${back("#/cours", "Course")}
    <h1>${ic("award")} ${T("{l} exam", { l: L })} · ${esc(lvName(L))}</h1>
    <p class="muted">${T("{n} questions covering the whole level: grammar, sentence building, vocabulary, reading and dictation. Pass mark: 70%. Take your time, there's no time limit.", { n: items.length })}</p>
    ${left ? `<div class="card" style="background:var(--yellow-soft);border-color:var(--yellow)">${ic("triangle-alert")} ${Tn(left, "You still have {n} unit to complete in {l}. You can take the exam now, but it's better after the units.", "You still have {n} units to complete in {l}. You can take the exam now, but it's better after the units.", { l: L })}</div>` : ""}
    <section class="card no-tx" id="quizBox"><p>${T("When you're ready, start the exam. Translation on click is disabled during exams.")}</p><button class="btn btn-primary" id="go">${T("Start the exam")}</button></section>`;
  $("#go").onclick = () => runQuiz($("#quizBox"), items, (score, total, results) => {
    testResult($("#quizBox"), score, total, results, items, (p) => {
      const firstPass = p >= 70 && !(S.exams[L] >= 70);
      S.exams[L] = Math.max(S.exams[L] || 0, p);
      addXP(firstPass ? 100 : 10, "step");
      $("#afterTest").innerHTML = p >= 70
        ? `<a class="btn btn-primary" href="#/certificat/${L}">${ic("award")} ${T("See my {l} certificate", { l: L })}</a>`
        : `<a class="btn" href="#/cours">${T("Back to the course")}</a><button class="btn btn-primary" id="retry">${T("Try again")}</button>`;
      if ($("#retry")) $("#retry").onclick = () => viewExam(L);
    });
  });
}
function viewCertificate(L) {
  const p = S.exams[L];
  if (!(p >= 70)) return viewCourse();
  const lv = LEVELS.find((x) => x.id === L);
  const next = LV[LV.indexOf(L) + 1];
  app.innerHTML = `
    ${back("#/cours", "Course")}
    <section class="cert">
      <div class="cert-badge">${L}</div>
      <p class="small muted" style="margin:0">${FRENCH_COURSE ? `Pas à pas · ${ui3("French course", "French course", "Französischkurs")}` : GERMAN_COURSE ? `Schritt für Schritt · ${ui3("German course", "cours d'allemand", "Deutschkurs")}` : T("Step by Step · English course")}</p>
      <h1 style="margin:8px 0">${T("Level {l} completed", { l: L })}</h1>
      <p class="en" style="font-size:20px">${GERMAN_COURSE ? `${esc(learnerName() || "Ich")} ${learnerName() ? "hat" : "habe"} das Niveau ${L} abgeschlossen und die Niveauprüfung mit <b>${p} %</b> bestanden.` : FRENCH_COURSE ? `${esc(learnerName() || "J'ai")}${learnerName() ? " a" : ""} terminé le niveau ${L} (${esc(lv.name)}) et réussi l'examen de niveau avec <b>${p} %</b>.` : `${esc(learnerName() || "I")} ${learnerName() ? "has" : "have"} completed level ${L} (${esc(lv.name)}) and passed the level exam with <b>${p}%</b>.`}</p>
      <ul class="checklist" style="text-align:left;max-width:520px;margin:16px auto">${loc(lv, "can").map((c) => `<li>${ic("check")}<span>${esc(c)}</span></li>`).join("")}</ul>
      <p class="muted small">${T("This is a personal record of your progress, not an official certificate. For an official result, take the TOEIC or a Cambridge exam.")}</p>
      ${next ? `<a class="btn btn-primary" href="#/cours">${T("Start level {l}", { l: next })} ${ic("arrow-right")}</a>` : `<a class="btn btn-primary" href="#/toeic">${T("Prepare the TOEIC")} ${ic("arrow-right")}</a>`}
    </section>`;
}

/* ================= Path ================= */
function hoursCard(target) {
  const h = totalHours();
  let recent = 0;
  for (let i = 0; i < 14; i++) {
    const d = new Date(); d.setDate(d.getDate() - i);
    const x = S.days[fmt(d)];
    if (x) recent += (x.sec || 0) / 60 + (x.ext || 0);
  }
  const perDay = recent / 14;
  let eta = "";
  if (perDay >= 2 && h < target) {
    const d = new Date(); d.setDate(d.getDate() + Math.round(((target - h) * 60) / perDay));
    eta = T("At your pace over the last two weeks (<b>{m} min a day</b> on average), you would reach {l} around <b>{d}</b>. Every extra minute brings that date closer.", { l: LV[LV.length - 1], m: Math.round(perDay), d: d.toLocaleDateString(locale(), { month: "long", year: "numeric" }) });
  }
  return `
    <section class="card hours-card">
      <div class="row">${tile("clock", "A2")}<div style="flex:1"><h2 style="margin:0">${T("{h} of English", { h: fmtH(h) })}</h2><span class="muted small">${T("out of about {t} h for {l} · {a} in the app, {b} outside", { l: LV[LV.length - 1], t: target, a: fmtH((S.siteSec || 0) / 3600), b: fmtH((S.extMin || 0) / 60) })}</span></div></div>
      <div class="progress" style="margin:14px 0 10px"><div style="width:${Math.min(100, (h / target) * 100)}%"></div></div>
      <p class="small" style="margin:0">${eta || T("The counter runs on its own when you work in the app. Add your series and podcasts in English from the home page (“Outside the app”).")}</p>
    </section>`;
}
function viewParcours() {
  const cur = currentLevel();
  const C1H = LEVELS[LEVELS.length - 1].hours;
  const est = (min) => {
    const months = Math.round((C1H * 60) / min / 30.4);
    const y = Math.floor(months / 12), m = months % 12;
    return (y ? Tn(y, "{n} year", "{n} years") : "") + (y && m ? T(" and ") : "") + (m ? Tn(m, "{n} month", "{n} months") : "");
  };
  app.innerHTML = `
    <h1>${T("My path to {l}", { l: LV[LV.length - 1] })}</h1>
    <p class="muted">${T("Levels A1 → C2 come from the Common European Framework (CEFR), used everywhere: schools, exams, job offers. <b>A</b> = basic user, <b>B</b> = independent user, <b>C</b> = proficient user.")}</p>
    ${hoursCard(C1H)}
    <a class="card ear-cta" href="#/bilan">${tile("chart-column", "B1")}<div style="flex:1;min-width:0"><h3 style="margin:0">${T("My skills report")}</h3><p class="muted small" style="margin:4px 0 0">${T("Your level in each skill, with the placement test, Claude's assessment and the can-do grids.")}</p></div>${ic("arrow-right")}</a>
    <section class="card" style="margin:20px 0">
      <h2>${T("How long does it take?")}</h2>
      <p>${T("Cambridge English estimates that it takes about <b>{h} hours of guided learning</b> to reach {l} from zero. It's an order of magnitude, not a promise: everything you do in English counts (series, podcasts, conversations).", { h: C1H, l: LV[LV.length - 1] })}</p>
      <div class="seg" role="group" aria-label="${T("Time per day")}" id="minSeg">
        ${[15, 30, 45, 60, 90].map((m) => `<button data-m="${m}" class="${m === 30 ? "on" : ""}">${T("{n} min/day", { n: m })}</button>`).join("")}
      </div>
      <p class="estimate" id="estimate">${T("With <b>{n} minutes a day</b>: about <b>{e}</b>.", { n: 30, e: est(30) })}</p>
      <p class="muted small" style="margin:0">${T("The most effective approach: 20 minutes in the app + a series or podcast in English instead of what you already watch in French. It doubles your English time with no extra effort.")}</p>
    </section>
    <div class="stack">
    ${LEVELS.map((L) => {
      const s = levelStats(L.id);
      const isCur = L.id === cur;
      return `
      <section class="card level-card ${isCur ? "is-cur" : ""}">
        <div class="row">${tile(L.icon, L.id)}<div style="flex:1;min-width:0"><div class="row" style="gap:8px">${levelTag(L.id)}<h2 style="margin:0">${esc(loc(L, "name"))}</h2>${isCur ? `<span class="tag tag-done">${T("You are here")}</span>` : ""}${S.exams[L.id] >= 70 ? `<a class="tag tag-done" href="#/certificat/${L.id}">${ic("award")} ${T("Passed")}</a>` : ""}</div>
        <span class="muted small">${T("≈ {h} hours in total from the start", { h: L.hours })}${L.toeic ? ` · TOEIC ${L.toeic}` : ""}${L.exams && L.exams !== "—" ? ` · ${L.exams}` : ""}${L.words ? ` · ${T("target: about {n} words", { n: L.words })}` : ""}</span></div></div>
        <div class="grid grid-2" style="margin-top:16px">
          <div>
            <h3>${T("At this level, you can…")}</h3>
            <ul class="checklist">${L.can.map((c, i) => `<li>${ic("check")}<span>${instr(c, L.can_fr && L.can_fr[i])}</span></li>`).join("")}</ul>
            <p class="small" style="margin:6px 0 0"><a href="#/grilles">${ic("list-checks")} ${T("The full can-do grid, skill by skill")}</a></p>
          </div>
          <div>
            <h3>${T("Your progress")}</h3>
            ${[["Units", s.ud, s.ut, "#/cours"], ["Lessons", s.ld, s.lt, "#/lecons"], ["Words learnt", s.wd, s.wt, "#/vocabulaire"], ["Texts", s.rd, s.rt, "#/lecture"]].filter((x) => x[2]).map(([n, d, t, h]) => `
              <a class="mini-prog" href="${h}"><span class="small">${T(n)}</span><span class="small muted">${d} / ${t}</span><span class="progress"><span style="width:${(d / t) * 100}%"></span></span></a>`).join("")}
            <h3 style="margin-top:16px">${T("Outside the app")}</h3>
            <ul class="checklist muted-list">${L.beyond.map((c, i) => `<li>${ic("arrow-right")}<span>${instr(c, L.beyond_fr && L.beyond_fr[i])}</span></li>`).join("")}</ul>
          </div>
        </div>
      </section>`;
    }).join("")}
    </div>
    <section class="card" style="margin-top:16px;background:var(--blue-soft);border-color:transparent">
      <h3>${ic("info")} ${T("What the app can't do for you")}</h3>
      <p style="margin:0">${T("To go from B1 to C1, two things become essential: <b>talking with real people</b> (an online teacher or a language exchange) and <b>reading and listening to a lot of authentic English</b>. The app prepares and structures your learning, but it can't replace a real conversation. Practical ideas are in <a href=\"#/livres\">Books & resources</a>.")}</p>
    </section>`;
  $$("#minSeg button").forEach((b) => (b.onclick = () => {
    $$("#minSeg button").forEach((x) => x.classList.toggle("on", x === b));
    $("#estimate").innerHTML = T("With <b>{n} minutes a day</b>: about <b>{e}</b>.", { n: b.dataset.m, e: est(+b.dataset.m) });
  }));
}

/* ================= Method ================= */
function viewMethode() {
  app.innerHTML = `
    <h1>${T("The method")}</h1>
    <p class="muted">${T("The app is built on the learning techniques best supported by research in cognitive science and language teaching. Here they are, why they work, and where you'll find them.")}</p>
    <div class="grid grid-2" style="margin-top:20px">
      ${METHODS.map((m, k) => `
        <article class="card method">
          <div class="row">${tile(m.icon, LV[k % LV.length])}<h2 style="margin:0;flex:1">${esc(loc(m, "title"))}</h2></div>
          <p class="small" style="margin-top:14px">${instr(m.science, m.science_fr)}</p>
          <div class="method-site"><b>${ic("layout-grid")} ${T("In the app")}</b><br>${esc(loc(m, "site"))}</div>
          <div class="method-you"><b>${ic("lightbulb")} ${T("For you")}</b><br>${esc(loc(m, "you"))}</div>
        </article>`).join("")}
    </div>
    <section class="card" style="margin-top:16px">
      <h3>${T("And what doesn't work well")}</h3>
      <p class="muted" style="margin:0">${T("Re-reading your notes, highlighting, copying word lists without testing yourself: it feels like work, but research shows it isn't very effective. The same goes for long sessions once a week: 15 minutes every day is much better than 2 hours on Sunday.")}</p>
    </section>`;
}

/* ================= Lessons ================= */
function viewLessons() {
  const done = Object.keys(S.lessons).length;
  const dueL = dueLessons();
  const dueM = dueMistakes().length;
  app.innerHTML = `
    <h1>${T("Lessons")}</h1>
    <p class="muted">${T("All the grammar and everyday English from A1 to C2. They're included in the course units, but you can also open them here at any time.")}</p>
    <div class="grid grid-2" style="margin:20px 0">
      <div class="card"><div class="row"><b>${T("{a} / {b} lessons", { a: done, b: LESSONS.length })}</b><span class="spacer"></span><span class="muted small">${T("Current level: {l}", { l: currentLevel() })}</span></div><div class="progress" style="margin-top:10px"><div style="width:${(done / LESSONS.length) * 100}%"></div></div></div>
      <div class="card">
        <div class="row"><b>${ic("shuffle")} ${T("Mixed review")}</b><span class="spacer"></span><span class="muted small">${dueL.length || dueM ? [dueL.length ? Tn(dueL.length, "{n} lesson due", "{n} lessons due") : "", dueM ? Tn(dueM, "{n} mistake to fix", "{n} mistakes to fix") : ""].filter(Boolean).join(" · ") : T(done ? "nothing urgent" : "after your first lesson")}</span></div>
        <p class="muted small" style="margin:8px 0 10px">${T("Questions from several lessons, mixed together, half of them to write yourself. The questions you got wrong come back first.")}</p>
        ${Object.keys(S.mistakes || {}).length ? `<a class="btn btn-sm" href="#/erreurs" style="margin-right:6px">${ic("notebook-pen")} ${T("My mistakes")}</a>` : ""}<a class="btn btn-sm ${dueL.length || dueM ? "btn-primary" : ""}" href="#/revision-grammaire" ${done ? "" : 'aria-disabled="true" style="pointer-events:none;opacity:.45"'}>${T("Start the review")}</a>
      </div>
    </div>
    <a class="card ear-cta" href="#/grammaire" style="margin:0 0 8px">${tile("library", "B1")}<div style="flex:1;min-width:0"><h3 style="margin:0">${T("Grammar reference A1 → C2")}</h3><p class="muted small" style="margin:4px 0 0">${T("{n} grammar points with the rule, an example and the lessons that teach them. Perfect for revising or checking a doubt.", { n: GREF().reduce((a, x) => a + x.points.length, 0) })}</p></div>${ic("arrow-right")}</a>
    ${levelGroups(LESSONS, (l) => {
      const r = S.lessons[l.id];
      return `<a class="card lesson-item ${r ? "done" : ""}" href="#/lecons/${l.id}">
        <span class="lesson-num">${r ? ic("check") : lnum(l)}</span>
        <span style="flex:1;min-width:0"><span class="row" style="gap:6px;margin-bottom:4px">${ic(l.icon, "muted")}${l.kind === "functional" ? `<span class="tag tag-fn">${T("Everyday English")}</span>` : ""}${r ? `<span class="small muted">${T("{a}/{b} in the practice", { a: r.best, b: r.total })}</span>` : ""}</span>
        <h3 style="margin:0">${esc(loc(l, "title"))}</h3><span class="muted small">${esc(loc(l, "subtitle"))}</span></span>
      </a>`;
    }, { started: (its) => its.some((l) => S.lessons[l.id]), stat: (its) => T("{a} / {b} done", { a: its.filter((l) => S.lessons[l.id]).length, b: its.length }) })}`;
}
/* ================= Grammar reference =================
   Every grammar point from A1 to C2 with its rule, an example and the lessons that teach it.
   Built by comparing the course with the reference inventories; the lessons added after that check are listed. */
const GREF = () => window.GRAMMAR_REF || [];
const GAP_LESSONS = [81, 82, 83, 84, 85, 86, 94, 87, 88, 92, 93, 95, 89, 90, 91];
function grPoint(p) {
  const [L, en, f, rule, rule_fr, ex, ids] = p;
  const links = ids.map((id) => { const l = lessonById(id); return l ? `<a href="#/lecons/${id}" class="${S.lessons[id] ? "done" : ""}">${ic(S.lessons[id] ? "check" : "book-open")} ${T("Lesson")} ${lnum(l)} · ${esc(loc(l, "title"))}</a>` : ""; }).join("");
  return `<div class="card gr-point" data-s="${esc([en, f, rule, rule_fr, ex].join(" ").toLowerCase())}">
    <div class="row" style="gap:8px;flex-wrap:nowrap;align-items:flex-start">${levelTag(L)}<h3 style="margin:0;flex:1">${esc(isFr() ? f : en)}</h3></div>
    <p style="margin:8px 0">${instr(rule, rule_fr)}</p>
    <p class="gr-ex"><span class="en">${esc(ex)}</span> ${sayBtn(ex)}</p>
    ${links ? `<div class="gr-links">${links}</div>` : ""}
  </div>`;
}
function viewGrammarRef(lv) {
  const L = LV.includes(lv) ? lv : null;
  const all = GREF().flatMap((a) => a.points);
  const taught = all.filter((p) => p[6].some((id) => lessonById(id))).length;
  const studied = all.filter((p) => p[6].some((id) => S.lessons[id])).length;
  app.innerHTML = `
    ${back("#/lecons", "Lessons")}
    <h1>${T("Grammar reference A1 → C2")}</h1>
    <p class="muted">${T("All the grammar of English from A1 to C2, point by point: the rule in one sentence, an example, and the lessons where it's taught. Use it to revise, to check a doubt, or to see what's coming next.")}</p>
    <section class="card gr-stats">
      <div><b>${all.length}</b><span class="muted small">${T("grammar points")}</span></div>
      <div><b>${taught}</b><span class="muted small">${T("taught in a lesson")}</span></div>
      <div><b>${studied}</b><span class="muted small">${T("already studied")}</span></div>
      <p class="muted small" style="grid-column:1/-1;margin:0">${T("Levels based on the Core Inventory for General English (British Council and EAQUALS) and the English Grammar Profile (Cambridge). The two sometimes differ by a level: the level shown is the one at which the point is usually taught.")}</p>
    </section>
    <div class="gr-tools">
      <div class="seg">${[["", "All"], ...LV.map((x) => [x, x])].map(([k, t]) => `<a href="#/grammaire${k ? "/" + k : ""}" class="${(L || "") === k ? "on" : ""}">${T(t)}</a>`).join("")}</div>
      <input class="field" id="grSearch" type="search" autocomplete="off" placeholder="${T("Search: since, passive, conditional…")}" aria-label="${T("Search the grammar reference")}">
    </div>
    <p class="muted small" id="grNone" hidden>${T("No grammar point matches your search.")}</p>
    ${GREF().map((a) => {
      const pts = a.points.filter((p) => !L || p[0] === L);
      if (!pts.length) return "";
      const lvls = LV.filter((x) => pts.some((p) => p[0] === x));
      return `<details class="level-block gr-area" ${L ? "open" : ""}>
        <summary><span class="lvl-sum">${ic(a.icon)}<b>${esc(loc(a, "title"))}</b><span class="muted small">${Tn(pts.length, "{n} point", "{n} points")} · ${lvls.join(" ")}</span></span>${ic("chevron-down", "chev")}</summary>
        <div class="stack" style="margin-top:12px">${pts.map(grPoint).join("")}</div>
      </details>`;
    }).join("")}
    <details class="card" style="margin-top:20px">
      <summary><b>${ic("search")} ${T("How the course was checked")}</b></summary>
      <p>${T("Each point of the reference inventories was compared with the lessons of the course. {n} points were missing or only mentioned in passing: each now has a full lesson, with exercises, in the right unit.", { n: GAP_LESSONS.length })}</p>
      <div class="gr-links">${GAP_LESSONS.map((id) => { const l = lessonById(id); const u = unitOfLesson(id); return l ? `<a href="#/lecons/${id}" class="${S.lessons[id] ? "done" : ""}">${levelTag(l.level)} ${esc(loc(l, "title"))}${u ? ` <span class="muted small">· ${u.level} ${T("Unit")} ${unitNum(u)}</span>` : ""}</a>` : ""; }).join("")}</div>
    </details>`;
  const inp = $("#grSearch");
  inp.oninput = () => {
    const q = inp.value.trim().toLowerCase();
    let shown = 0;
    $$(".gr-area").forEach((d) => {
      let n = 0;
      $$(".gr-point", d).forEach((c) => { const ok = !q || c.dataset.s.includes(q); c.hidden = !ok; if (ok) n++; });
      d.hidden = !n; if (q) d.open = n > 0;
      shown += n;
    });
    $("#grNone").hidden = shown > 0;
  };
}

function renderBody(html) {
  return html
    .replace(/<s-(?:en|fr|de)>([\s\S]*?)<\/s-(?:en|fr|de)>/g, (_, t) => `<span class="en${/<st>/.test(t) ? " no-tx" : ""}"><b>${t}</b></span> ${sayBtn(t.replace(/<[^>]+>/g, "").replace(/[↗↘|‖]/g, "").replace(/\s+([,.?!])/g, "$1").replace(/\s+/g, " ").trim())}`)
    .replace(/«[^»]*»/g, (m) => `<span class="no-tx">${m}</span>`)
    .replace(/<st>/g, '<span class="st">').replace(/<\/st>/g, "</span>")
    .replace(/<ipa>([\s\S]*?)<\/ipa>/g, (_, t) => ipaSpan(t))
    .replace(/<div class="tip">/g, `<div class="tip">${ic("lightbulb", "box-ic")}`)
    .replace(/<div class="warn">/g, `<div class="warn">${ic("triangle-alert", "box-ic")}`)
    /* Wide tables scroll inside their own frame on a phone, instead of widening the page. */
    .replace(/<table\b/g, '<div class="table-wrap"><table').replace(/<\/table>/g, "</table></div>");
}
function viewLesson(id) {
  const l = lessonById(id);
  if (!l) return viewLessons();
  const i = LESSONS.indexOf(l);
  const next = LESSONS[i + 1];
  const u = unitOfLesson(l.id);
  const task = DR(l.id) && DR(l.id).task;
  let showFr = isFr() && !!l.body_fr;
  app.innerHTML = `
    ${back(u ? `#/unite/${u.id}` : "#/lecons", u ? `Unit ${unitNum(u)} · ${loc(u, "title")}` : "All lessons")}
    <article class="card lesson-body">
      <div class="row" style="margin-bottom:8px">${levelTag(l.level)}<span class="muted small">${u ? (() => { const ul = u.lessons.map(lessonById).filter(Boolean).sort((x, y) => LESSONS.indexOf(x) - LESSONS.indexOf(y)); return `${T("Unit")} ${unitNum(u)} · ${T("Lesson {a} of {b}", { a: ul.indexOf(l) + 1, b: ul.length })}`; })() : `${T("Lesson")} ${lnum(l)}`}</span><span class="spacer"></span>${l.body_fr ? `<button class="btn btn-sm" id="frToggle">${ic("languages")} ${toggleLabel(showFr)}</button>` : ""}</div>
      <div class="row" style="flex-wrap:nowrap;align-items:center">${tile(l.icon, l.level)}<h1 style="margin:0">${esc(loc(l, "title"))}</h1></div>
      <p class="muted" style="margin-top:10px">${esc(loc(l, "subtitle"))}</p>
      <div id="lbody" class="${showFr && !FOREIGN ? "fr" : ""}" ${showFr ? 'lang="fr"' : ""}>${renderBody(showFr ? l.body_fr : l.body)}</div>
    </article>
    <section class="card">
      <h2>${ic("volume-2")} ${T("Listen and repeat")}</h2>
      <p class="muted small">${T("Listen, then repeat the sentence out loud. The snail = slow version.")}</p>
      <ul class="examples">
        ${l.examples.map(([en, f]) => `<li>${sayBtn(en)}${slowBtn(en)}<div style="flex:1"><div class="en">${esc(en)}</div><div class="fr">${esc(f)}</div></div></li>`).join("")}
      </ul>
    </section>
    <section class="card" id="quizBox">
      <h2>${ic("list-checks")} ${T("Practice")}</h2>
      <p class="muted">${T("About fifteen exercises, from easy to hard: <b>recognise</b> (choose, listen, match), <b>build</b> (put the words in order), <b>write</b> (fill the gaps, correct the mistakes), then <b>listen and speak</b>. Find the answer in your head before you look at the options.")}</p>
      <button class="btn btn-primary" id="startQuiz">${T("Start the practice")}</button>
    </section>
    ${(() => { const rp = RP().find((x) => x.lesson === l.id); return rp ? `<section class="card rp-cta">
      <div class="row">${tile(rp.icon, rp.level)}<div style="flex:1;min-width:0"><span class="muted small">${T("Real conversation")}</span><h2 style="margin:0">${esc(loc(rp, "title"))}</h2><p class="muted small" style="margin:4px 0 0">${T("Talk to {p}, {r}, using today's lesson.", { p: esc(rp.partner), r: esc(T(rp.role)) })}</p></div><a class="btn btn-primary" href="#/dialogue/${rp.id}">${ic("messages-square")} ${T("Start")}</a></div>
    </section>` : ""; })()}
    <section class="card">
      <h2>${ic("pen-line")} ${T("Your turn: write")}</h2>
      ${task ? `<p class="task-q">${instr(task[0], task[1])}</p>` : ""}
      <p class="muted small">${T("Write about <b>your own life</b> with today's lesson: we remember much better what concerns us. Then listen to your text and read it out loud.")}</p>
      <textarea id="myNotes" class="field note" rows="5" placeholder="${T("Write here, in English…")}" spellcheck="true" lang="${APP.target}">${esc(S.notes[l.id] || "")}</textarea>
      <div class="row" style="margin-top:10px">
        <button class="btn btn-sm" id="hearNotes">${ic("volume-2")} ${T("Listen to my text")}</button>
        ${task ? `<button class="btn btn-sm" id="showModel">${ic("eye")} ${T("Compare with a model")}</button>` : ""}
        <span class="spacer"></span><span class="muted small"><span id="wordCount"></span><span id="noteSaved"></span></span>
      </div>
      <div style="margin-top:14px">${correctionBox("l:" + l.id)}</div>
      ${task ? `<div id="modelBox" hidden style="margin-top:14px">
        <div class="row" style="margin-bottom:6px"><b>${T("Model answer")}</b>${sayBtn(task[2])}</div>
        <div class="model en">${esc(task[2])}</div>
        <p class="small" style="margin:14px 0 6px"><b>${T("Check your text")}</b></p>
        <ul class="checklist small">
          <li>${ic("check")}<span>${T("Did you use today's grammar or expressions at least twice?")}</span></li>
          <li>${ic("check")}<span>${T("Capital letters, full stops, and verbs that agree with their subject (she works, they work)?")}</span></li>
          <li>${ic("check")}<span>${T("Did you take one good idea or expression from the model? Add it to your text!")}</span></li>
        </ul>
      </div>` : ""}
    </section>`;
  if ($("#frToggle")) $("#frToggle").onclick = () => {
    showFr = !showFr;
    $("#lbody").innerHTML = renderBody(showFr ? l.body_fr : l.body);
    $("#lbody").classList.toggle("fr", showFr && !FOREIGN);
    if (showFr) $("#lbody").setAttribute("lang", "fr"); else $("#lbody").removeAttribute("lang");
    $("#frToggle").innerHTML = `${ic("languages")} ${toggleLabel(showFr)}`;
  };
  let tm;
  const countWords = () => { const n = ($("#myNotes").value.match(/[A-Za-zÀ-ÿ'’-]+/g) || []).length; $("#wordCount").textContent = n ? Tn(n, "{n} word", "{n} words") + " · " : ""; };
  countWords();
  $("#myNotes").oninput = (e) => { countWords(); clearTimeout(tm); tm = setTimeout(() => { S.notes[l.id] = e.target.value; save(); $("#noteSaved").textContent = T("Saved"); }, 500); };
  if ($("#showModel")) $("#showModel").onclick = () => {
    if (!$("#myNotes").value.trim()) { toast(T("Write your own text first, then compare")); $("#myNotes").focus(); return; }
    $("#modelBox").hidden = false; $("#showModel").remove();
    if (!S.wrote) S.wrote = {};
    if (!S.wrote[l.id]) { S.wrote[l.id] = today(); addXP(5, "free"); }
  };
  $("#hearNotes").onclick = (e) => { const t = $("#myNotes").value.trim(); if (t) speak(t, e.currentTarget); else toast(T("Write your sentences first")); };
  bindCorrection("l:" + l.id, () => ({
    text: $("#myNotes").value, level: l.level, title: `${T("Lesson")} ${lnum(l)} · ${loc(l, "title")}`,
    kind: "Short text after a grammar lesson", kind_fr: "Petit texte après une leçon de grammaire",
    task: task ? task[0] : "Write a few sentences about your own life using today's lesson.",
    task_fr: task ? task[1] : "Écris quelques phrases sur ta propre vie en utilisant la leçon du jour.",
    focus: l.title + (l.subtitle ? ` (${l.subtitle})` : "")
  }));
  $("#startQuiz").onclick = () => {
    const box = $("#quizBox");
    runQuiz(box, lessonPractice(l), (score, total) => {
      const prev = S.lessons[l.id];
      const firstTime = !prev;
      S.lessons[l.id] = Object.assign(prev || { box: 0, due: addDays(1) }, { best: Math.max(score, prev ? prev.best : 0), total, date: prev ? prev.date : today() });
      addXP(firstTime ? 10 + score * 2 : score, firstTime ? "step" : "lesson");
      box.innerHTML = `
        <div class="result-big">${score} / ${total}</div>
        <p style="text-align:center">${scoreMsg(score, total)}${firstTime ? `<br><span class='muted small'>${T("This lesson will come back in your grammar review tomorrow, then less and less often.")}</span>` : ""}</p>
        <div class="row" style="justify-content:center">
          <button class="btn" id="retry">${T("Practise again")}</button>
          ${u ? `<a class="btn" href="#/unite/${u.id}">${T("Back to Unit {n}", { n: unitNum(u) })}</a>${continueBtn()}` : next ? `<a class="btn btn-primary" href="#/lecons/${next.id}">${T("Next lesson")} ${ic("arrow-right")}</a>` : ""}
        </div>`;
      $("#retry").onclick = () => { viewLesson(id); $("#startQuiz").click(); $("#quizBox").scrollIntoView({ block: "start" }); };
    });
  };
}
function viewGrammarReview() {
  const mk = dueMistakes();
  let pool = dueLessons();
  const extra = !pool.length && !mk.length;
  if (extra) pool = LESSONS.filter((l) => S.lessons[l.id]);
  if (!pool.length && !mk.length) { location.hash = "#/lecons"; return; }
  pool = shuffle(pool).slice(0, 5);
  const per = pool.length >= 4 ? 2 : 3;
  const mistakes = shuffle(mk).slice(0, 8).map(mistakeItem).filter(Boolean);
  const taken = new Set(mistakes.map(qKey));
  /* Half of the questions are written instead of chosen: recalling is what makes it stick. */
  const qs = shuffle(pool.flatMap((l) => shuffle(l.quiz.map((q, qi) => ({ q, qi })).filter(({ qi }) => !taken.has(`${l.id}:${qi}`))).slice(0, per).map(({ q, qi }, k) => {
    const t = k % 2 ? typedFromQuiz(q) : null;
    return Object.assign(t || Object.assign({ type: "mcq" }, q), { lessonId: l.id, qi, from: `Lesson ${lnum(l)}` });
  })));
  const drills = pool.flatMap((l) => shuffle(drillsOf(l).filter((x) => !taken.has(qKey(x)))).slice(0, 1).map((x) => Object.assign(x, { from: `Lesson ${lnum(l)}` })));
  const builds = pool.length ? orderItems(pool, 2) : [];
  const all = [...mistakes, ...shuffle([...qs, ...drills]), ...builds];
  app.innerHTML = `
    ${back("#/lecons", "Lessons")}
    <h1>${ic("shuffle")} ${T("Grammar review")}</h1>
    <p class="muted">${mistakes.length ? Tn(mistakes.length, "{n} question you got wrong before comes back first.", "{n} questions you got wrong before come back first.") + " " : ""}${extra ? T("No lesson is due today: here's a bonus mixed practice.") : pool.length ? Tn(pool.length, "{n} lesson due today, mixed together.", "{n} lessons due today, mixed together.") : ""} ${T("Mixing rules forces your brain to recognise which one applies: it's harder, and that's why it works.")}</p>
    <section class="card" id="quizBox"></section>`;
  runQuiz($("#quizBox"), all, (score, total, results) => {
    const perL = {};
    all.forEach((q, k) => { if (q.lessonId == null || q.from === "Your mistakes") return; perL[q.lessonId] = perL[q.lessonId] || [0, 0]; perL[q.lessonId][1]++; if (results[k]) perL[q.lessonId][0]++; });
    if (!extra) Object.entries(perL).forEach(([lid, [ok, n]]) => reviewLesson(+lid, ok / n));
    addXP(score * 2, "review");
    const weak = Object.entries(perL).filter(([, [ok, n]]) => ok / n < 0.99).map(([lid]) => lessonById(lid));
    const left = Object.keys(S.mistakes || {}).length;
    $("#quizBox").innerHTML = `
      <div class="result-big">${score} / ${total}</div>
      <p style="text-align:center">${scoreMsg(score, total)}</p>
      ${weak.length ? `<p class="small muted" style="text-align:center">${T("Read again calmly: {l}. They'll come back sooner.", { l: weak.map((l) => `<a href="#/lecons/${l.id}">${T("lesson")} ${lnum(l)}</a>`).join(", ") })}</p>` : `<p class="small muted" style="text-align:center">${T("Everything is solid: these lessons will come back later.")}</p>`}
      ${left ? `<p class="small muted" style="text-align:center">${Tn(left, "{n} question in <a href=\"#/erreurs\">your mistakes notebook</a>: they come back the day after you get them wrong.", "{n} questions in <a href=\"#/erreurs\">your mistakes notebook</a>: they come back the day after you get them wrong.")}</p>` : ""}
      <div class="row" style="justify-content:center"><a class="btn" href="#/lecons">${T("Lessons")}</a><a class="btn btn-primary" href="#/">${T("My programme")} ${ic("arrow-right")}</a></div>`;
  });
}

/* ================= My mistakes ================= */
function viewMistakes() {
  const all = Object.entries(S.mistakes || {}).filter(([k]) => lessonById(k.split(":")[0]));
  const byL = {};
  all.forEach(([k, m]) => { const lid = k.split(":")[0]; (byL[lid] = byL[lid] || []).push([k, m]); });
  const groups = Object.entries(byL).map(([lid, ms]) => ({ l: lessonById(lid), ms, n: ms.reduce((a, [, m]) => a + (m.n || 1), 0) })).sort((a, b) => b.n - a.n);
  const due = dueMistakes().length;
  const label = (k) => { const it = mistakeItem(k); if (!it) return ""; return it.sent ? gapFull(it.sent, "___") : it.wrong || it.big || it.q || ""; };
  app.innerHTML = `
    ${back("#/lecons", "Lessons")}
    <h1>${ic("notebook-pen")} ${T("My mistakes")}</h1>
    <p class="muted">${T("Every question you get wrong is saved here. It comes back the next day in your grammar review, and leaves the notebook when you get it right on the day it comes back. Mistakes are normal: they show you exactly what to work on.")}</p>
    ${all.length ? `<div class="card row" style="margin:16px 0">
        <div style="flex:1;min-width:0">${Tn(all.length, "<b>{n} question</b> in your notebook · {d} due today", "<b>{n} questions</b> in your notebook · {d} due today", { d: due })}</div>
        <button class="btn btn-primary" id="practiseAll">${ic("rotate-ccw")} ${T("Practise them all now")}</button>
      </div>
      <section class="card" id="quizBox" hidden></section>
      <div class="stack">${groups.map((g) => `
        <div class="card">
          <div class="row">${tile(g.l.icon, g.l.level)}<div style="flex:1;min-width:0"><span class="muted small">${T("Lesson")} ${lnum(g.l)} · ${Tn(g.n, "{n} mistake", "{n} mistakes")}</span><h3 style="margin:0">${esc(loc(g.l, "title"))}</h3></div><a class="btn btn-sm" href="#/lecons/${g.l.id}">${T("Read again")}</a></div>
          <ul class="mistake-list">${g.ms.map(([k, m]) => `<li><span class="en">${esc(label(k))}</span><span class="muted small">${m.n > 1 ? `${m.n}× · ` : ""}${m.due <= today() ? T("due today") : T("comes back {d}", { d: m.due === addDays(1) ? T("tomorrow") : m.due })}</span></li>`).join("")}</ul>
        </div>`).join("")}</div>`
      : `<div class="card" style="margin-top:16px;text-align:center"><p style="margin:0">${ic("party-popper")} ${T("Your notebook is empty. Do a lesson practice or a review: your mistakes will appear here.")}</p></div>`}
    ${(() => {
      const cx = Object.entries(S.corrections || {}).sort((a, b) => String(b[1].date).localeCompare(String(a[1].date)));
      return `<div class="section-title"><h2>${ic("spell-check")} ${T("My corrected texts")}</h2></div>
      <p class="muted">${cx.length ? T("Reread a correction from time to time, then rewrite the sentences without looking: it's the best way not to repeat a mistake.") : T("When Claude corrects one of your texts, paste the correction under the text to keep it: it will appear here.")}</p>
      <div class="stack">${cx.map(([k, c]) => `<details class="card"><summary><b>${esc(c.title || k)}</b> <span class="muted small">${c.level ? levelTag(c.level) : ""} ${esc(c.date)}</span></summary>
        <p class="small" style="margin:12px 0 4px"><b>${T("My text")}</b></p><div class="model cx-text no-tx">${esc(c.text)}</div>
        <p class="small" style="margin:12px 0 4px"><b>${T("Correction")}</b></p><div class="model cx-text no-tx">${esc(c.correction)}</div>
        ${c.href ? `<a class="btn btn-sm" style="margin-top:10px" href="${esc(c.href)}">${T("Back to the exercise")}</a>` : ""}</details>`).join("")}</div>`;
    })()}`;
  if ($("#practiseAll")) $("#practiseAll").onclick = () => {
    const items = shuffle(all.map(([k]) => mistakeItem(k)).filter(Boolean)).slice(0, 20);
    const qb = $("#quizBox"); qb.hidden = false; qb.scrollIntoView({ block: "start" });
    runQuiz(qb, items, (score, total) => {
      addXP(score * 2, "review");
      qb.innerHTML = `<div class="result-big">${score} / ${total}</div><p style="text-align:center">${scoreMsg(score, total)}</p><div class="row" style="justify-content:center"><a class="btn" href="#/lecons">${T("Lessons")}</a><button class="btn btn-primary" id="mAgain">${T("See my notebook")}</button></div>`;
      $("#mAgain").onclick = () => viewMistakes();
    });
  };
}

/* ================= Vocabulary ================= */
function viewVocab() {
  const due = dueIds().length;
  const total = VOCAB.reduce((a, t) => a + t.words.length, 0);
  app.innerHTML = `
    <h1>${T("Vocabulary")}</h1>
    <p class="muted">${T("{n} words and expressions, with <b>spaced repetition</b>: when you know a word, it comes back in 1 day, then 3, 7, 14, 30… Difficult words come back quickly. Words you already know a little are asked from French to English: it's harder, so it works better.", { n: total })}</p>
    <a class="card ear-cta" href="#/lexique" style="margin:16px 0 0">${tile("puzzle", "C1")}<div style="flex:1;min-width:0"><h3 style="margin:0">${T("Language workshop, B2 to C2")}</h3><p class="muted small" style="margin:4px 0 0">${T("Collocations, idioms, word formation and sentence transformations for each B2, C1 and C2 unit, as in the Cambridge exams.")}</p></div>${ic("arrow-right")}</a>
    <div class="grid grid-3" style="margin:20px 0">
      <div class="card">
        <h2>${ic("rotate-ccw")} ${T("Today's review")}</h2>
        <p class="muted">${due > 0 ? Tn(due, "<b style=\"color:var(--ink)\">{n} word</b> due today.", "<b style=\"color:var(--ink)\">{n} words</b> due today.") : T(Object.keys(S.srs).length ? "Nothing to review right now. Learn new words below!" : "Start by learning your first words in a topic below.")}</p>
        <a class="btn ${due ? "btn-primary" : ""}" href="#/reviser" ${due ? "" : 'aria-disabled="true" style="pointer-events:none;opacity:.45"'}>${T("Review now")}</a>
      </div>
      <div class="card">
        <h2>${ic("star")} ${T("My words")}</h2>
        <p class="muted">${Tn(S.myWords.length === 1 ? 1 : 2, "{n} word added by you (from texts or by hand).", "{n} words added by you (from texts or by hand).", { n: S.myWords.length })}</p>
        <a class="btn" href="#/mes-mots">${T("See and add")}</a>
      </div>
      <div class="card">
        <h2>${ic("zap")} ${T("Irregular verbs")}</h2>
        <p class="muted">${T("{n} verbs to know by heart: go, went, gone…", { n: IRREGULARS.length })}</p>
        <a class="btn" href="#/irreguliers">${T("Train")}</a>
      </div>
    </div>
    <div class="row" style="margin-bottom:4px"><h2 style="margin:0">${T("Topics")}</h2><span class="spacer"></span><span class="muted small">${T("{a} mastered · {b} in progress", { a: mastered(), b: learning() })}</span></div>
    ${levelGroups(VOCAB.filter((t) => !t.toeic), themeCard, { grid: "lib-list", started: (its) => its.some((t) => themeStats(t).seen), stat: (its) => T("{n} words", { n: its.reduce((a, t) => a + t.words.length, 0) }) })}
    ${VOCAB.some((t) => t.toeic) ? `<div class="section-title"><h2>${ic("briefcase")} ${T("Business English for the TOEIC")}</h2></div>
    <div class="grid lib-list">${VOCAB.filter((t) => t.toeic).map(themeCard).join("")}</div>` : ""}`;
}
function themeCard(t) {
  const s = themeStats(t);
  return `<a class="lib-row" href="#/vocabulaire/${t.id}">
    ${tile(t.icon, t.level)}<span class="lib-txt"><b>${esc(loc(t, "title"))}</b><span class="muted small">${T("{a} / {b} seen · {c} mastered", { a: s.seen, b: s.total, c: s.m })}</span><span class="lib-bar"><i style="width:${(s.seen / s.total) * 100}%"></i></span></span>
  </a>`;
}
function viewTheme(id) {
  const t = VOCAB.find((x) => x.id === id);
  if (!t) return viewVocab();
  const s = themeStats(t);
  app.innerHTML = `
    ${back("#/vocabulaire", "Vocabulary")}
    <div class="row" style="flex-wrap:nowrap">${tile(t.icon, t.level)}<div><h1 style="margin:0">${esc(loc(t, "title"))}</h1><p class="muted" style="margin:4px 0 0">${levelTag(t.level)} ${T("{a} words · {b} seen · {c} mastered", { a: s.total, b: s.seen, c: s.m })}</p></div></div>
    <div class="row" style="margin:20px 0">
      <a class="btn btn-primary" href="#/apprendre/${t.id}">${ic("layers")} ${T("Flashcards")}</a>
      <a class="btn" href="#/ecrire/${t.id}">${ic("keyboard")} ${T("Practise writing")}</a>
    </div>
    <div class="card">
      <ul class="wordlist">
        ${t.words.map(([en, f, ex]) => `
          <li>${sayBtn(en)}
            <span class="w-item"><b>${esc(en)}</b> · <span class="fr">${esc(f)}</span><br><span class="small en" style="font-style:italic">${esc(ex)}</span></span>
            ${dots(en)}
          </li>`).join("")}
      </ul>
    </div>`;
}
function viewFlash(mode, themeId) {
  let ids, title, backHref;
  if (mode === "review") {
    ids = shuffle(dueIds()).slice(0, Math.max(30, goal().words * 2)); title = T("Today's review"); backHref = "#/vocabulaire";
  } else {
    const t = themeId === "mine" ? { id: "mine", title: T("My words"), words: S.myWords.map((w) => [w.en]) } : VOCAB.find((x) => x.id === themeId);
    if (!t) return viewVocab();
    title = loc(t, "title"); backHref = themeId === "mine" ? "#/mes-mots" : `#/vocabulaire/${t.id}`;
    const n = goal().words;
    const fresh = t.words.map(([en]) => en).filter((en) => !S.srs[en]);
    ids = fresh.length ? fresh.slice(0, n) : shuffle(t.words.map(([en]) => en).filter((en) => S.srs[en].box < 5)).slice(0, n);
    if (!ids.length) ids = shuffle(t.words.map(([en]) => en)).slice(0, n);
  }
  if (!ids.length) {
    app.innerHTML = `${back(backHref, "Back")}<div class="card empty">${celebrate()}<h2>${T("Nothing to review")}</h2><p>${T("Come back tomorrow, or learn new words.")}</p><a class="btn btn-primary" href="#/vocabulaire">${T("Choose a topic")}</a></div>`;
    return;
  }
  const queue = ids.slice();
  const requeued = new Set();
  const total = ids.length;
  let doneN = 0, flipped = false, known = 0;
  function render() {
    if (!queue.length) return finish();
    const w = WORDS.get(queue[0]);
    flipped = false;
    const box = S.srs[w.en] ? S.srs[w.en].box : 0;
    const frontEN = S.dir === "en" || (S.dir === "auto" && box < 2);
    app.innerHTML = `
      ${back(backHref, "Back")}
      <div class="flash-wrap">
        <div class="row"><h2 style="margin:0">${esc(title)}</h2><span class="spacer"></span>
          <div class="seg" role="group" aria-label="${T("Card direction")}">
            <button data-dir="auto" class="${S.dir === "auto" ? "on" : ""}" title="${T("English → French for new words, French → English after")}">Auto</button>
            <button data-dir="en" class="${S.dir === "en" ? "on" : ""}">EN → FR</button>
            <button data-dir="fr" class="${S.dir === "fr" ? "on" : ""}">FR → EN</button>
          </div>
        </div>
        <div class="progress" style="margin:14px 0 0"><div style="width:${(doneN / total) * 100}%"></div></div>
        <div class="flash no-tx" id="card" role="button" tabindex="0" aria-label="${T("Flip the card")}">
          <div class="flash-inner">
            <div class="flash-face">
              <div class="flash-word ${frontEN ? "en" : ""}">${esc(frontEN ? w.en : w.fr)}</div>
              ${frontEN ? `<div class="flash-sub">${sayBtn(w.en)}</div>` : `<div class="flash-sub">${T("Say it in English, out loud, before you flip")}</div>`}
              <div class="flash-hint">${T("Tap the card or press Space")}</div>
            </div>
            <div class="flash-face flash-back">
              <div class="flash-word ${frontEN ? "" : "en"}" style="font-size:clamp(24px,5vw,34px)">${esc(frontEN ? w.fr : w.en)}</div>
              <div class="flash-sub">${frontEN ? esc(w.en) : esc(w.fr)} ${sayBtn(w.en)}</div>
              ${w.ex ? `<div class="flash-ex">“${esc(w.ex)}” ${sayBtn(w.ex, T("Listen to the example"))}</div>` : ""}
            </div>
          </div>
        </div>
        <div id="grade" class="grade" style="visibility:hidden">
          <button class="btn btn-red" data-g="again">${ic("rotate-ccw")} ${T("Again")}<span class="key">1</span></button>
          <button class="btn" data-g="hard">${ic("minus")} ${T("Hard")}<span class="key">2</span></button>
          <button class="btn btn-green" data-g="good">${ic("check")} ${T("I know it")}<span class="key">3</span></button>
        </div>
        <p class="muted small" style="text-align:center;margin-top:14px">${Tn(queue.length, "{n} card left", "{n} cards left")} · ${T("Be honest with yourself: that's what makes the method work.")}</p>
      </div>`;
    if (frontEN) setTimeout(() => speak(w.en), 150);
    const card = $("#card");
    const flip = () => {
      if (flipped) return;
      flipped = true; card.classList.add("flipped"); $("#grade").style.visibility = "visible";
      if (!frontEN) speak(w.en);
    };
    card.onclick = (e) => { if (!e.target.closest("[data-say]")) flip(); };
    $$("[data-dir]").forEach((b) => (b.onclick = () => { S.dir = b.dataset.dir; save(); render(); }));
    $$("[data-g]").forEach((b) => (b.onclick = () => grade(b.dataset.g)));
    card.flipFn = flip;
  }
  function grade(g) {
    if (!flipped) return;
    const id = queue.shift();
    gradeWord(id, g);
    if (g === "again" && !requeued.has(id)) { requeued.add(id); queue.push(id); }
    else { doneN++; if (g === "good" && !requeued.has(id)) known++; }
    render();
  }
  function finish() {
    const u = themeId ? COURSE.find((x) => x.vocab.includes(themeId)) : null;
    app.innerHTML = `
      ${back(backHref, "Back")}
      <div class="card flash-wrap" style="text-align:center">
        ${celebrate()}
        <h2>${T("Session finished!")}</h2>
        <p class="muted">${(known >= total ? Tn(total, "{n} card practised, and you knew it well.", "{n} cards practised, and you knew them all well.") : Tn(total, "{n} card practised, including {k} you already knew well. The others will come back soon.", "{n} cards practised, including {k} you already knew well. The others will come back soon.", { k: known }))}</p>
        <div class="row" style="justify-content:center">
          ${themeId && themeId !== "mine" ? `<a class="btn" href="#/ecrire/${themeId}">${ic("keyboard")} ${T("Practise writing")}</a>` : ""}
          ${u ? `<a class="btn" href="#/unite/${u.id}">${T("Unit")} ${unitNum(u)}</a>` : `<a class="btn" href="${backHref}">${T("Back")}</a>`}
          ${continueBtn(`<a class="btn btn-primary" href="#/">${T("My programme")} ${ic("arrow-right")}</a>`)}
        </div>
      </div>`;
  }
  const onKey = (e) => {
    const card = $("#card");
    if (!card || e.target.tagName === "INPUT") return;
    if (e.code === "Space" || e.key === "Enter") { e.preventDefault(); card.flipFn && card.flipFn(); }
    if (flipped && ["1", "2", "3"].includes(e.key)) grade({ 1: "again", 2: "hard", 3: "good" }[e.key]);
  };
  document.addEventListener("keydown", onKey);
  onCleanup(() => document.removeEventListener("keydown", onKey));
  render();
}
const normAns = (s) => fold(s.toLowerCase()).replace(/[’`]/g, "'").replace(/\((uk|us)\)/g, "").replace(/[.?!,…]/g, "").replace(/\s+/g, " ").trim();
function variants(en) {
  const out = new Set();
  /* German nouns are written with their plural (der Hund, -e; die Mutter, ¨; die Eltern (pl)): the answer is the noun alone. */
  en.split(" / ").forEach((v) => { const n = normAns(GERMAN_COURSE ? v.replace(/,\s*(¨-?\S*|-\S*|[A-ZÄÖÜ][a-zäöüß]+)\s*$/, "").replace(/\((pl|sg)\)/gi, "") : v); out.add(n); out.add(n.replace(/^to /, "")); });
  return out;
}
function lev(a, b) {
  const m = Array.from({ length: a.length + 1 }, (_, i) => [i]);
  for (let j = 1; j <= b.length; j++) m[0][j] = j;
  for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++)
    m[i][j] = Math.min(m[i - 1][j] + 1, m[i][j - 1] + 1, m[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return m[a.length][b.length];
}
function typingDrill({ title, backHref, items, prompt, check, onEnd }) {
  let i = 0, score = 0;
  function render() {
    if (i >= items.length) {
      app.innerHTML = `${back(backHref, "Back")}<div class="card flash-wrap" style="text-align:center"><div class="result-big">${score} / ${items.length}</div><p>${scoreMsg(score, items.length)}</p><div class="row" style="justify-content:center"><button class="btn" id="again">${T("Start again")}</button><a class="btn btn-primary" href="${backHref}">${T("Back")}</a></div></div>`;
      if (onEnd) onEnd(score, items.length);
      $("#again").onclick = () => typingDrill({ title, backHref, items: shuffle(items), prompt, check, onEnd });
      return;
    }
    const it = items[i];
    app.innerHTML = `
      ${back(backHref, "Back")}
      <div class="flash-wrap">
        <div class="row"><h2 style="margin:0">${ic("keyboard")} ${esc(title)}</h2><span class="spacer"></span><span class="muted small">${i + 1} / ${items.length}</span></div>
        <div class="progress" style="margin:14px 0 20px"><div style="width:${(i / items.length) * 100}%"></div></div>
        <div class="card no-tx" style="text-align:center">${prompt(it)}
          <form id="f" autocomplete="off">
            <div id="inputs"></div>
            <div class="row" style="justify-content:center;margin-top:14px">
              <button type="button" class="btn btn-ghost" id="skip">${T("I don't know")}</button>
              <button class="btn btn-dark">${T("Check")}</button>
            </div>
          </form>
          <div id="fb"></div>
        </div>
      </div>`;
    const fields = it.fields || [{ ph: T("Your answer…") }];
    $("#inputs").innerHTML = fields.map((f, k) => `<input class="type-input" data-k="${k}" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="${esc(f.ph)}" aria-label="${esc(f.ph)}" style="margin-top:${k ? 10 : 0}px">`).join("");
    const inputs = $$("#inputs input");
    inputs[0].focus();
    let answered = false;
    const go = (vals) => {
      if (answered) { i++; render(); return; }
      answered = true;
      const r = check(it, vals);
      if (r.ok) score++;
      inputs.forEach((inp, k) => { inp.readOnly = true; inp.classList.add(r.okEach ? (r.okEach[k] ? "ok" : "ko") : (r.ok ? "ok" : "ko")); });
      $("#fb").innerHTML = `<div class="feedback ${r.ok ? "ok" : "ko"}" style="text-align:left">${r.html}</div><p class="small muted" style="margin-top:10px">${T("Press Enter to continue")}</p>`;
      $("#f .btn-dark").innerHTML = T("Next") + " " + ic("arrow-right");
      $("#skip").style.display = "none";
      if (r.say) speak(r.say);
    };
    $("#f").onsubmit = (e) => { e.preventDefault(); go(inputs.map((x) => x.value)); };
    $("#skip").onclick = () => go(inputs.map(() => ""));
  }
  render();
}
function viewWrite(themeId) {
  const t = themeId === "mine" ? { id: "mine", title: T("My words"), words: S.myWords.map((w) => [w.en]) } : VOCAB.find((x) => x.id === themeId);
  if (!t || !t.words.length) return viewVocab();
  const backHref = themeId === "mine" ? "#/mes-mots" : `#/vocabulaire/${t.id}`;
  typingDrill({
    title: loc(t, "title"), backHref,
    items: shuffle(t.words.map(([en]) => WORDS.get(en))).slice(0, 10),
    prompt: (w) => `<p class="muted small" style="margin:0">${T("Write in English:")}</p><div class="flash-word fr" style="font-size:30px;margin:10px 0 20px">${esc(w.fr)}</div>`,
    check: (w, [given]) => {
      const g = normAns(given || "");
      const vs = variants(w.en);
      const exact = vs.has(g);
      const close = !exact && g.length > 3 && Array.from(vs).some((v) => lev(g, v) === 1);
      /* French and German nouns: the right word without its article counts, but the article (which gives the gender) is shown. */
      const ART = GERMAN_COURSE ? /^(?:der|die|das|ein|eine)\s+/ : /^(?:(?:les|le|la|une|un|des|du)\s+|l'|d')/;
      const noArt = FOREIGN && !exact && !close && Array.from(vs).some((v) => v.replace(ART, "") === g.replace(ART, ""));
      return { ok: exact || close || noArt, say: w.en,
        html: `${exact ? ic("circle-check") + " " + T("Perfect!") : close ? ic("circle-check") + " " + T("Almost! Watch the spelling:") : noArt ? ic("circle-check") + " " + T("Good! Learn it with its article:") : ic("circle-x") + " " + T("The answer was:")} <b class="en">${esc(w.en)}</b> ${sayBtn(w.en)}${w.ex ? `<br><span class="small en" style="font-style:italic">${esc(w.ex)}</span>` : ""}` };
    },
    onEnd: (score) => addXP(score * 2, "vocab")
  });
}
function viewIrregulars() {
  const lvls = ["A2", "B1", "B2", "C1"];
  const st = S.irr;
  app.innerHTML = `
    ${back("#/vocabulaire", "Vocabulary")}
    <h1>${ic("zap")} ${T("Irregular verbs")}</h1>
    <p class="muted">${T("Write the past simple and the past participle. The verbs you get wrong come back more often. Say them out loud, by groups of sounds: buy, bought, bought · think, thought, thought…")}</p>
    <div class="grid grid-2" style="margin:20px 0">
      ${lvls.map((L) => {
        const vs = IRREGULARS.filter((v) => v[4] === L);
        const ok = vs.filter((v) => (st[v[0]] || 0) >= 2).length;
        return `<div class="card"><div class="row">${levelTag(L)}<b>${T("{n} verbs", { n: vs.length })}</b><span class="spacer"></span><span class="muted small">${T("{n} known", { n: ok })}</span></div><div class="progress" style="margin:10px 0"><div style="width:${pct(ok, vs.length)}%"></div></div><button class="btn btn-sm btn-dark" data-irr="${L}">${ic("keyboard")} ${T("Train")}</button></div>`;
      }).join("")}
    </div>
    <details class="card"><summary>${ic("list")} <span>${T("See all the verbs")}</span></summary>
      <div class="table-wrap"><table class="irr-table"><tr><th>${T("Verb")}</th><th>${T("Past")}</th><th>${T("Participle")}</th><th>${T("French")}</th></tr>
      ${IRREGULARS.map(([b, p, pp, f]) => `<tr><td><b>${esc(b)}</b> ${sayBtn(`${b}, ${p.replace(" / ", ", ")}, ${pp.replace(/\(.*\)/, "").replace(" / ", ", ")}`)}</td><td>${esc(p)}</td><td>${esc(pp)}</td><td class="fr">${esc(f)}</td></tr>`).join("")}
      </table></div>
    </details>`;
  $$("[data-irr]").forEach((b) => (b.onclick = () => {
    const vs = IRREGULARS.filter((v) => v[4] === b.dataset.irr);
    const pick = vs.slice().sort((a, c) => (st[a[0]] || 0) - (st[c[0]] || 0) || Math.random() - 0.5).slice(0, 10);
    typingDrill({
      title: `${T("Irregular verbs")} ${b.dataset.irr}`, backHref: "#/irreguliers",
      items: shuffle(pick).map((v) => ({ v, fields: [{ ph: T("Past simple") }, { ph: T("Past participle") }] })),
      prompt: ({ v }) => `<div class="flash-word en" style="font-size:34px;margin:6px 0 2px">${esc(v[0])}</div><p class="fr muted" style="margin:0 0 16px">${esc(v[3])}</p>`,
      check: ({ v }, vals) => {
        const okP = v[1].split(" / ").map((x) => x.trim()).includes(normAns(vals[0] || ""));
        const okPP = v[2].replace(/\(.*?\)/g, "").split(" / ").map((x) => x.trim()).concat(v[2].includes("gotten") ? ["gotten"] : []).includes(normAns(vals[1] || ""));
        const ok = okP && okPP;
        st[v[0]] = Math.max(0, (st[v[0]] || 0) + (ok ? 1 : -1)); save();
        return { ok, okEach: [okP, okPP], say: `${v[0]}, ${v[1].replace(" / ", ", ")}, ${v[2].replace(/\(.*\)/, "").replace(" / ", ", ")}`,
          html: `${ok ? ic("circle-check") + " " + T("Correct!") : ic("circle-x") + " " + T("The answer:")} <b class="en">${esc(v[0])} · ${esc(v[1])} · ${esc(v[2])}</b>` };
      },
      onEnd: (score) => addXP(score * 2, "vocab")
    });
  }));
}
function viewMyWords() {
  app.innerHTML = `
    ${back("#/vocabulaire", "Vocabulary")}
    <h1>${T("My words")}</h1>
    <p class="muted">${T("The words you've added from texts (click a word, then “My words”), or met somewhere else (a series, a song, a book…). They go into your reviews like the others. Tip: write your own example about your life: you'll remember it better.")}</p>
    <form class="card" id="addForm" style="margin:16px 0">
      <h3>${T("Add a word")}</h3>
      <div class="grid" style="grid-template-columns:1fr 1fr;gap:10px">
        <input class="field" id="nEn" placeholder="${T("English (e.g. awkward)")}" required autocapitalize="off">
        <input class="field" id="nFr" placeholder="${T("French (e.g. gênant)")}" required>
      </div>
      <input class="field" style="margin-top:10px" id="nEx" placeholder="${T("Your example (optional)")}">
      <div class="row" style="margin-top:12px"><button class="btn btn-dark">${ic("plus")} ${T("Add")}</button></div>
    </form>
    ${S.myWords.length ? `
    <div class="row" style="margin-bottom:12px">
      <a class="btn btn-primary" href="#/apprendre/mine">${ic("layers")} ${T("Flashcards")}</a>
      <a class="btn" href="#/ecrire/mine">${ic("keyboard")} ${T("Practise writing")}</a>
    </div>
    <div class="card"><ul class="wordlist">
      ${S.myWords.map((w, k) => `<li>${sayBtn(w.en)}<span class="w-item"><b>${esc(w.en)}</b> · <span class="fr">${esc(w.fr)}</span>${w.ex ? `<br><span class="small en" style="font-style:italic">${esc(w.ex)}</span>` : ""}</span>${dots(w.en)}<button class="btn btn-ghost btn-sm" data-del="${k}" aria-label="${T("Delete")} ${esc(w.en)}">${ic("x")}</button></li>`).join("")}
    </ul></div>` : `<div class="card empty">${T("No words yet. In a text, click on a word, then on “My words”.")}</div>`}`;
  $("#addForm").onsubmit = (e) => { e.preventDefault(); addMyWord($("#nEn").value.trim(), $("#nFr").value.trim(), $("#nEx").value.trim()); viewMyWords(); };
  $$("[data-del]").forEach((b) => (b.onclick = () => {
    const w = S.myWords[+b.dataset.del];
    S.myWords.splice(+b.dataset.del, 1);
    if (w && WORDS.get(w.en)?.theme === "mine") delete S.srs[w.en];
    save(); buildIndex(); viewMyWords();
  }));
}
function addMyWord(en, f, ex) {
  if (!en || !f) return false;
  if (S.myWords.some((w) => w.en.toLowerCase() === en.toLowerCase())) { toast(T("This word is already in your list")); return false; }
  S.myWords.unshift({ en, fr: f, ex: ex || "" });
  save(); buildIndex(); toast(T("“{w}” added to your words", { w: en }));
  return true;
}

/* ================= Reading & listening ================= */
function viewReadings() {
  /* Which unit each text belongs to, so the list says where you'll meet it in the course. */
  const unitOf = {};
  COURSE.forEach((u) => [u.reading, ...(u.extra || [])].forEach((id) => { if (id && !unitOf[id]) unitOf[id] = u; }));
  const mins = (r) => Math.max(2, Math.round(r.paragraphs.map((x) => x.en).join(" ").split(/\s+/).length / 120));
  app.innerHTML = `
    <h1>${T("Reading and listening")}</h1>
    <p class="muted">${T("{n} texts, from the simplest to the richest. <b>Click on any word</b> to hear it and translate it. Underlined words have a translation ready for this text. Every text can also be <b>listened to first</b>, without reading: the best listening practice.", { n: READINGS.length })}</p>
    <div class="lib-filters">
      <div class="seg" role="group" aria-label="${T("Show")}">${[["all", "All the texts"], ["todo", "Not read yet"], ["done", "Already read"]].map(([k, t]) => `<button data-rf="${k}" class="${(S.readFilter || "all") === k ? "on" : ""}">${T(t)}</button>`).join("")}</div>
      <input class="field" id="rSearch" type="search" placeholder="${T("Search a text or a topic")}" aria-label="${T("Search a text or a topic")}">
    </div>
    ${levelGroups(READINGS, (r) => {
      const u = unitOf[r.id];
      const meta = [r.genre ? esc(tg(r.genre)) : "", u ? `${T("Unit")} ${unitNum(u)}` : "", `${mins(r)} min`].filter(Boolean).join(" · ");
      return `<a class="lib-row" href="#/lecture/${r.id}" title="${esc(loc(r, "intro"))}" data-read="${S.readings[r.id] ? 1 : 0}" data-q="${esc([r.title, r.title_fr, r.intro, r.genre].join(" ").toLowerCase())}">
          ${tile(r.icon, r.level)}<span class="lib-txt"><b class="en">${esc(loc(r, "title"))}</b><span class="muted small">${meta}</span></span>${S.readings[r.id] ? `<span class="lib-done" title="${T("Read ✓")}">${ic("circle-check")}</span>` : ""}
        </a>`;
    }, { grid: "lib-list", started: (its) => its.some((r) => S.readings[r.id]), stat: (its) => T("{a} / {b} read", { a: its.filter((r) => S.readings[r.id]).length, b: its.length }) })}
    <p class="muted small" id="rNone" hidden>${T("No text matches.")}</p>
    <div class="card" style="margin-top:20px">
      <h3>${ic("lightbulb")} ${T("How to read well in English")}</h3>
      <ol class="muted" style="margin:0;padding-left:20px">
        <li>${T("<b>First reading</b>: read without stopping, just try to understand the general idea.")}</li>
        <li>${T("<b>Second reading</b>: click on the words that block you, add the most useful ones to your words.")}</li>
        <li>${T("<b>Third time</b>: listen to the text while following with your eyes, then read it out loud. Re-reading a text you already understand, faster, is the best fluency exercise.")}</li>
      </ol>
    </div>`;
  const apply = () => {
    const f = S.readFilter || "all", q = ($("#rSearch").value || "").trim().toLowerCase();
    let shown = 0;
    $$(".lib-row").forEach((row) => {
      const ok = (f === "all" || (f === "done") === (row.dataset.read === "1")) && (!q || row.dataset.q.includes(q));
      row.hidden = !ok; if (ok) shown++;
    });
    $$(".level-block").forEach((b) => { const any = $$(".lib-row", b).some((r) => !r.hidden); b.hidden = !any; if (q && any) b.open = true; });
    $("#rNone").hidden = shown > 0;
  };
  $$("[data-rf]").forEach((b) => (b.onclick = () => { S.readFilter = b.dataset.rf; save(); $$("[data-rf]").forEach((x) => x.classList.toggle("on", x === b)); apply(); }));
  $("#rSearch").oninput = apply;
  apply();
}
function tokenize(text, gloss) {
  return text.split(WORD_RE).map((part, k) => {
    if (k % 2 === 0) return esc(part).replace(/\n/g, "<br>");
    if (/^[b-hj-z]$/i.test(part)) return esc(part); /* a lone letter (the m of a.m.) isn't a word */
    const key = part.toLowerCase().replace(/’/g, "'");
    const has = gloss[key] || gloss[key.replace(/'s$/, "")];
    return `<span class="w ${has ? "gloss" : ""}" data-w="${esc(part)}">${esc(part)}</span>`;
  }).join("");
}
function viewReading(id, mode) {
  const r = READINGS.find((x) => x.id === id);
  if (!r) return viewReadings();
  const listen = mode === "listen";
  const u = COURSE.find((x) => x.reading === r.id || (x.extra || []).includes(r.id));
  let showAll = false;
  const lines = r.paragraphs.map((p) => [(!r.sections && p.speaker) || "", p.en]); /* sections: the labels are headings, one voice */
  app.innerHTML = `
    ${back(u ? `#/unite/${u.id}` : "#/lecture", u ? `Unit ${unitNum(u)} · ${loc(u, "title")}` : "All texts")}
    <article class="card">
      <div class="row" style="margin-bottom:8px">${levelTag(r.level)}<span class="spacer"></span>
        <button class="btn btn-sm" id="playAll">${ic("play")} ${T("Listen to everything")}</button>
        <button class="btn btn-sm" id="trAll">${ic("languages")} ${T("Translations")}</button>
      </div>
      <div class="row" style="flex-wrap:nowrap">${tile(r.icon, r.level)}<h1 class="en" style="margin:0">${esc(loc(r, "title"))}</h1></div>
      <p class="muted small" style="margin-top:10px">${instr(r.intro, r.intro_fr)}</p>
      ${listen ? `<div class="listen-box" id="listenBox"><p style="margin:0 0 10px"><b>${ic("headphones")} ${T("Listening first.")}</b> ${T("Listen to the whole text once or twice without reading, then answer the questions. The text will appear afterwards.")}</p><div class="row"><button class="btn btn-primary" id="playListen">${ic("play")} ${T("Listen")}</button><button class="btn btn-sm btn-ghost" id="showText">${T("Show the text now")}</button></div></div>` : ""}
      <div class="reader ${listen ? "hidden-text" : ""}" id="reader" data-gloss="${r.id}">
        ${r.paragraphs.map((p, k) => `
          <div class="para" data-k="${k}" data-fr="${esc(p.fr)}">
            <p>${p.speaker ? `<span class="speaker">${esc(p.speaker)}</span>` : ""}${tokenize(p.en, r.glossary || {})}
              ${sayBtn(p.en, T("Listen to the paragraph"))}
              <button class="speak tr-btn" data-k="${k}" aria-label="Traduction" title="Traduction">${ic("languages")}</button></p>
            <div class="translation fr" hidden>${esc(p.fr).replace(/\n/g, "<br>")}</div>
          </div>`).join("")}
      </div>
    </article>
    <section class="card" id="quizBox">
      <h2>${ic("list-checks")} ${T("Did you understand?")}</h2>
      <p class="muted">${T("{n} questions about the text.", { n: r.questions.length })}</p>
      <button class="btn btn-primary" id="startQuiz">${T("Answer the questions")}</button>
    </section>`;
  const reader = $("#reader");
  const reveal = () => { reader.classList.remove("hidden-text"); if ($("#listenBox")) $("#listenBox").remove(); };
  reader.addEventListener("click", (e) => {
    const trb = e.target.closest(".tr-btn");
    if (trb) { const tr = $(`.para[data-k="${trb.dataset.k}"] .translation`); tr.hidden = !tr.hidden; }
  });
  $("#trAll").onclick = () => { showAll = !showAll; $$(".translation", reader).forEach((t) => (t.hidden = !showAll)); };
  if (listen) {
    $("#playListen").onclick = (e) => playLines(lines, e.currentTarget);
    $("#showText").onclick = reveal;
  }
  let playing = false;
  $("#playAll").onclick = async () => {
    const btn = $("#playAll");
    if (playing) { playing = false; stopAudio(); btn.innerHTML = ic("play") + " " + T("Listen to everything"); return; }
    playing = true; btn.innerHTML = ic("square") + " " + T("Stop");
    const speakers = [];
    for (let k = 0; k < r.paragraphs.length && playing; k++) {
      const p = $(`.para[data-k="${k}"]`);
      p.classList.add("reading-now");
      const sp = !r.sections && r.paragraphs[k].speaker;
      if (sp && !speakers.includes(sp)) speakers.push(sp);
      await speak(r.paragraphs[k].en, null, sp ? { voice: voiceFor(sp, speakers.indexOf(sp)) } : {});
      p.classList.remove("reading-now");
    }
    playing = false; if ($("#playAll")) $("#playAll").innerHTML = ic("play") + " " + T("Listen to everything");
  };
  onCleanup(() => { playing = false; });
  $("#startQuiz").onclick = () => {
    const box = $("#quizBox");
    runQuiz(box, r.questions.map((q) => Object.assign({ type: "mcq" }, q)), (score, total) => {
      const firstTime = !S.readings[r.id];
      S.readings[r.id] = { best: Math.max(score, S.readings[r.id]?.best || 0), total, date: today() };
      addXP(firstTime ? 15 + score * 2 : score, firstTime ? "step" : "reading");
      reveal();
      const nextSame = READINGS.find((x) => x.level === r.level && !S.readings[x.id]);
      box.innerHTML = `
        <div class="result-big">${score} / ${total}</div>
        <p style="text-align:center">${scoreMsg(score, total)}${listen ? `<br><span class='muted small'>${T("Now read the text and listen again: notice what you missed.")}</span>` : ""}</p>
        <div class="row" style="justify-content:center">
          <a class="btn" href="#/mes-mots">${ic("star")} ${T("My words")}</a>
          ${u ? `<a class="btn" href="#/unite/${u.id}">${T("Back to Unit {n}", { n: unitNum(u) })}</a>${continueBtn()}` : nextSame ? `<a class="btn btn-primary" href="#/lecture/${nextSame.id}">${T("Next text")} ${ic("arrow-right")}</a>` : `<a class="btn btn-primary" href="#/livres">${T("Choose a real book")} ${ic("arrow-right")}</a>`}
        </div>`;
    });
  };
}

/* ================= Speaking ================= */
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
const CONTRACTIONS = { "i'm": "i am", "you're": "you are", "he's": "he is", "she's": "she is", "it's": "it is", "we're": "we are", "they're": "they are", "that's": "that is", "what's": "what is", "there's": "there is", "isn't": "is not", "aren't": "are not", "don't": "do not", "doesn't": "does not", "didn't": "did not", "can't": "can not", "cannot": "can not", "won't": "will not", "i'd": "i would", "i'll": "i will", "we'll": "we will", "you'd": "you would", "let's": "let us", "wasn't": "was not", "where's": "where is", "i've": "i have", "you've": "you have", "we've": "we have", "haven't": "have not", "hasn't": "has not", "shouldn't": "should not", "wouldn't": "would not", "couldn't": "could not" };
function normSpeech(s) {
  return fold(s.toLowerCase()).replace(/[’`]/g, "'").replace(/-/g, " ")
    .replace(/\d+/g, (d) => fold(numWords(+d)))
    .replace(/[^a-z' ]/g, " ").split(/\s+/).filter(Boolean)
    .flatMap((w) => (FOREIGN ? w : CONTRACTIONS[w] || w).split(" "))
    .map((w) => (FOREIGN ? w : w.replace(/'s$/, "")).replace(/'/g, ""));
}
function compare(target, heard) {
  const t = normSpeech(target), h = normSpeech(heard);
  const { okA } = lcsMatch(t, h);
  const n = okA.filter(Boolean).length;
  return { score: t.length ? Math.round((n / t.length) * 100) : 0, words: t, ok: okA };
}
/* ================= Role-plays =================
   With help: choose your reply, hear it, say it. Without help: the French idea only, you say it. */
const RP = () => window.ROLEPLAYS || [];
function rpCard(d) {
  const st = (S.dialogues || {})[d.id] || {};
  return `<a class="lib-row" href="#/dialogue/${d.id}">
    ${tile(d.icon, d.level)}<span class="lib-txt"><b>${esc(loc(d, "title"))}</b><span class="muted small">${T("With {p}, {r}", { p: esc(d.partner), r: esc(T(d.role)) })}</span></span>${st.speak >= 70 ? `<span class="tag tag-done">${ic("mic")} ${st.speak}%</span>` : st.guided != null ? `<span class="tag">${ic("check")} ${st.guided}%</span>` : ""}
  </a>`;
}
function viewDialogue(id, mode) {
  const d = RP().find((x) => x.id === id);
  if (!d) { location.hash = "#/oral"; return; }
  const speakMode = mode === "speak";
  const lesson = lessonById(d.lesson);
  let alive = true, rec = null;
  onCleanup(() => { alive = false; try { rec && rec.abort(); } catch (e) {} });
  const partnerVoice = () => voiceFor(d.partner, 0);
  const myVoice = () => { const r = ranked(), pv = partnerVoice(); return r.find((v) => v !== pv && FEMALE.test(v.name)) || r.find((v) => v !== pv) || bestVoice(); };
  const mine = d.turns.filter((t) => t.y).length;
  let i = 0, good = 0, spoken = 0;
  const lines = [];
  app.innerHTML = `
    ${back(lesson ? `#/lecons/${lesson.id}` : "#/oral", lesson ? "Lesson" : "Speaking")}
    <div class="row" style="flex-wrap:nowrap">${tile(d.icon, d.level)}<div style="min-width:0"><span class="muted small">${T("Role-play")} · ${d.level}</span><h1 style="margin:0">${esc(loc(d, "title"))}</h1></div></div>
    <p class="muted" style="margin-top:12px">${instr(d.setting, d.setting_fr)} ${T("You're talking to <b>{p}</b>, {r}.", { p: esc(d.partner), r: esc(T(d.role)) })}</p>
    <div class="seg" role="group" aria-label="Mode">
      <a class="${speakMode ? "" : "on"}" href="#/dialogue/${d.id}">${ic("list-checks")} ${T("With help")}</a>
      <a class="${speakMode ? "on" : ""}" href="#/dialogue/${d.id}/speak">${ic("mic")} ${T("Without help")}</a>
    </div>
    <p class="small muted" style="margin:10px 0 16px">${T(speakMode ? "You only see what to say in French. Say it in English (or type it), then compare with the model." : "Choose the right reply, listen to it, then say it out loud. When it feels easy, try the mode without help.")}</p>
    <section class="card chat-card"><div class="chat" id="chat"></div><div id="turn"></div></section>`;
  const chat = $("#chat"), box = $("#turn");
  const sayLine = (text, voice) => Promise.race([speak(text, null, { voice }), new Promise((r) => setTimeout(r, 1500 + text.length * 90))]);
  function bubble(who, en, f) {
    const b = document.createElement("div");
    b.className = `bubble ${who}`;
    b.innerHTML = `<div class="bubble-who">${who === "them" ? esc(d.partner) : T("You")}</div><div class="bubble-en">${esc(en)} ${sayBtn(en)}${fr(f)}</div>`;
    chat.appendChild(b);
    b.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }
  async function next() {
    if (!alive) return;
    if (i >= d.turns.length) return finish();
    const t = d.turns[i];
    if (t.p) {
      box.innerHTML = `<p class="muted small turn-wait">${ic("volume-2")}<span>${T("{p} is speaking…", { p: esc(d.partner) })}</span></p>`;
      bubble("them", t.p, t.fr);
      lines.push([d.partner, t.p]);
      i++;
      await sayLine(t.p, partnerVoice());
      if (alive) next();
    } else (speakMode ? speakTurn : chooseTurn)(t);
  }
  function micButton(target, onScore) {
    if (!SR) return;
    $("#rpMic").onclick = () => {
      const mic = $("#rpMic");
      if (mic.classList.contains("listening")) { try { rec.stop(); } catch (e) {} return; }
      stopAudio();
      rec = new SR(); rec.lang = APP.srLang; rec.interimResults = false; rec.maxAlternatives = 5;
      rec.onstart = () => mic.classList.add("listening");
      rec.onend = () => mic.classList.remove("listening");
      rec.onerror = (e) => toast(T(e.error === "not-allowed" ? "Allow microphone access in your browser" : e.error === "no-speech" ? "I didn't hear anything, try a bit louder" : "Microphone problem, try again"));
      rec.onresult = (e) => {
        let best = null;
        Array.from(e.results[0]).forEach((a) => { const r = compare(target, a.transcript); if (!best || r.score > best.score) best = r; });
        $("#rpHeard").innerHTML = best.words.map((w, k) => `<span class="${best.ok[k] ? "ok" : "ko"}">${esc(w)}</span>`).join(" ") + ` <b>${best.score}%</b>`;
        if ((S.spoken[target] || 0) < best.score) S.spoken[target] = best.score;
        addXP(1, "speak");
        onScore(best.score);
      };
      try { rec.start(); } catch (err) { toast(T("The microphone couldn't start")); }
    };
  }
  function chooseTurn(t) {
    const order = shuffle(t.y.map((_, k) => k));
    let tries = 0;
    box.innerHTML = `<p class="turn-label">${ic("message-circle")}<span>${T("Your turn: what do you say?")}</span></p>
      <div class="options">${order.map((k) => `<button class="option" data-k="${k}">${esc(t.y[k])}</button>`).join("")}</div><div class="fb"></div>`;
    $$(".option", box).forEach((b) => (b.onclick = () => {
      if (+b.dataset.k !== 0) {
        tries++; b.disabled = true; b.classList.add("wrong");
        $(".fb", box).innerHTML = `<div class="feedback ko">${ic("circle-x")} <b>${T("Not quite.")}</b> ${esc(t.why)} ${T("Try again!")}</div>`;
        return;
      }
      if (!tries) good++;
      bubble("you", t.y[0], t.fr);
      lines.push(["You", t.y[0]]);
      let said = false;
      box.innerHTML = `<div class="feedback ok">${ic("circle-check")} <b>${T(tries ? "That's it." : "Well done!")}</b> ${esc(t.why)}</div>
        <div class="row rp-actions">${SR ? `<button class="mic mic-sm" id="rpMic" aria-label="${T("Say it out loud")}">${ic("mic")}</button><span class="muted small">${T("Say it out loud")}</span>` : `<span class="muted small">${T("Now say it out loud.")}</span>`}<span class="spacer"></span><button class="btn btn-dark" id="rpNext">${T("Continue")} ${ic("arrow-right")}</button></div>
        <div class="heard no-tx" id="rpHeard"></div>`;
      sayLine(t.y[0], myVoice());
      micButton(t.y[0], (sc) => { if (sc >= 70 && !said) { said = true; spoken++; } });
      $("#rpNext").onclick = () => { stopAudio(); i++; next(); };
    }));
  }
  function speakTurn(t) {
    let tries = 0, done = false;
    box.innerHTML = `<p class="turn-label">${ic("message-circle")}<span>${T("Your turn. Say it in English:")}</span></p>
      <div class="prompt-fr no-tx">${esc(t.fr)}</div>
      ${SR ? `<div class="row rp-actions" style="justify-content:center"><button class="mic" id="rpMic" aria-label="${T("Speak")}">${ic("mic")}</button></div><div class="heard no-tx" id="rpHeard" style="text-align:center"></div>` : ""}
      <form id="rpForm" autocomplete="off" class="row" style="margin-top:12px;flex-wrap:nowrap"><input class="field" id="rpType" lang="${APP.target}" autocapitalize="off" spellcheck="false" placeholder="${T(SR ? "Or type it here…" : "Type it here…")}" style="flex:1"><button class="btn btn-dark">${T("Check")}</button></form>
      <div class="row" style="margin-top:10px"><button type="button" class="btn btn-sm" id="rpShow">${ic("eye")} ${T("Show me")}</button></div>
      <div class="fb"></div>`;
    const resolve = (ok, note) => {
      if (done) return;
      done = true;
      if (ok) good++;
      bubble("you", t.y[0], t.fr);
      lines.push(["You", t.y[0]]);
      $(".fb", box).innerHTML = `<div class="feedback ${ok ? "ok" : "ko"}">${ok ? ic("circle-check") + ` <b>${T("Well done!")}</b>` : ic("circle-x") + ` <b>${T("Model answer:")}</b>`} <span class="en">${esc(t.y[0])}</span>${note ? `<div class="small" style="margin-top:6px">${note}</div>` : ""}<div class="small" style="margin-top:6px">${esc(t.why)}</div></div>
        <div class="row" style="margin-top:12px"><span class="spacer"></span><button class="btn btn-dark" id="rpNext">${T("Continue")} ${ic("arrow-right")}</button></div>`;
      $("#rpForm").remove(); if ($("#rpShow")) $("#rpShow").parentElement.remove(); if ($("#rpMic")) $("#rpMic").disabled = true;
      sayLine(t.y[0], myVoice());
      $("#rpNext").onclick = () => { stopAudio(); i++; next(); };
    };
    micButton(t.y[0], (sc) => {
      tries++;
      if (sc >= 70) { spoken++; resolve(true); }
      else if (tries >= 3) resolve(false, T("Listen to the model and try again next time."));
      else toast(T("{n}%: try once more", { n: sc }));
    });
    $("#rpForm").onsubmit = (e) => {
      e.preventDefault();
      const v = $("#rpType").value.trim();
      if (!v) return;
      const sc = looseScore(t.y[0], v);
      if (sc >= 75) resolve(true, sc < 100 ? `${T("Your version:")} <span class="en">${esc(v)}</span>` : "");
      else { tries++; if (tries >= 3) resolve(false, `${T("Your version:")} <span class="en">${esc(v)}</span>`); else toast(T("{n}%: not quite, try again", { n: sc })); }
    };
    $("#rpShow").onclick = () => resolve(false);
  }
  function finish() {
    S.dialogues = S.dialogues || {};
    const st = S.dialogues[d.id] = S.dialogues[d.id] || {};
    const p = pct(good, mine);
    const first = speakMode ? st.speak == null : st.guided == null;
    if (speakMode) st.speak = Math.max(st.speak || 0, p); else st.guided = Math.max(st.guided || 0, p);
    st.date = today();
    addXP(first ? 10 + good * 2 : good, "speak");
    box.innerHTML = `
      ${p >= 80 ? celebrate() : ""}
      <div class="result-big">${good} / ${mine}</div>
      <p style="text-align:center">${T(speakMode ? "replies said or written correctly" : "replies right the first time")}${!speakMode && spoken ? ` · ${T("{n} said out loud", { n: spoken })}` : ""}</p>
      <div class="row" style="justify-content:center">
        <button class="btn" id="rpReplay">${ic("volume-2")} ${T("Listen to the whole conversation")}</button>
        ${speakMode ? `<a class="btn" href="#/dialogue/${d.id}/speak" id="rpAgain">${ic("rotate-ccw")} ${T("Again")}</a>` : `<a class="btn btn-primary" href="#/dialogue/${d.id}/speak">${ic("mic")} ${T("Now without help")}</a>`}
        ${speakMode ? continueBtn(lesson ? `<a class="btn" href="#/lecons/${lesson.id}">${T("Back to the lesson")}</a>` : `<a class="btn" href="#/oral">${T("More role-plays")}</a>`) : lesson ? `<a class="btn" href="#/lecons/${lesson.id}">${T("Back to the lesson")}</a>` : `<a class="btn" href="#/oral">${T("More role-plays")}</a>`}
      </div>`;
    $("#rpReplay").onclick = (e) => playLines(lines, e.currentTarget);
    if ($("#rpAgain")) $("#rpAgain").onclick = (e) => { e.preventDefault(); viewDialogue(id, "speak"); };
  }
  next();
}
function viewSpeaking() {
  const done = Object.keys(S.spoken).filter((k) => S.spoken[k] >= 80).length;
  const totalP = SPEAKING.reduce((a, c) => a + c.phrases.length, 0);
  app.innerHTML = `
    <h1>${T("Speaking and listening")}</h1>
    <p class="muted">${T("To speak, you need to hear, then <b>dare to speak out loud</b>. Start by repeating sentences (shadowing), train your ear, then learn to speak freely.")}</p>
    ${SR ? "" : `<div class="card" style="background:var(--yellow-soft);border-color:var(--yellow)">${ic("triangle-alert")} ${T("Your browser doesn't support speech recognition. Use <b>Chrome</b> or <b>Safari</b> to get a score. You can still listen and record yourself.")}</div>`}
    <a class="card ear-cta pron-cta" href="#/prononciation">${tile("audio-lines", "A1")}<div style="flex:1"><h3 style="margin:0">${T("Pronunciation course")}</h3><p class="muted small" style="margin:4px 0 0">${T("{n} chapters from A1 to C2: all the sounds and the phonetic alphabet, stress, rhythm, linking, intonation and accents.", { n: PRON().length })}</p></div><span class="muted small">${T("{a} / {b}", { a: PRON().filter((c) => pronDone(c.id)).length, b: PRON().length })}</span>${ic("arrow-right")}</a>
    <a class="card ear-cta" href="#/comprehension">${tile("headphones", "A2")}<div style="flex:1"><h3 style="margin:0">${T("Listening lab")}</h3><p class="muted small" style="margin:4px 0 0">${T("{n} recordings, one per unit from A1 to C2, with several voices and accents: main idea, details, every word, then repeat.", { n: LAB().length })}</p></div><span class="muted small">${LAB().filter((x) => labDone(x.id)).length} / ${LAB().length}</span>${ic("arrow-right")}</a>
    <div class="grid grid-2">
      <a class="card ear-cta" href="#/oreille">${tile("ear", "B1")}<div style="flex:1"><h3 style="margin:0">${T("Train your ear")}</h3><p class="muted small" style="margin:4px 0 0">${T("Ship or sheep? Think or sink? Recognise very similar words, spoken by different voices.")}</p></div>${ic("arrow-right")}</a>
      <a class="card ear-cta" href="#/conversation">${tile("messages-square", "B2")}<div style="flex:1"><h3 style="margin:0">${T("Talk with someone")}</h3><p class="muted small" style="margin:4px 0 0">${T("Real conversations out loud: with Claude at any time, and with real people. Role-plays, debates and exam simulations, A1 to C2.")}</p></div>${ic("arrow-right")}</a>
      <a class="card ear-cta" href="#/ecoute">${tile("headphones", "C1")}<div style="flex:1"><h3 style="margin:0">${T("Listening plan")}</h3><p class="muted small" style="margin:4px 0 0">${T("Real podcasts, series and videos for your level, and how to listen to them.")}</p></div>${ic("arrow-right")}</a>
      <a class="card ear-cta" href="#/dictee">${tile("pen-line", "A2")}<div style="flex:1"><h3 style="margin:0">${T("Dictations")}</h3><p class="muted small" style="margin:4px 0 0">${T("Listen to a sentence, write it, and see your mistakes word by word.")}</p></div>${ic("arrow-right")}</a>
    </div>
    <div class="section-title"><h2>${T("Role-plays: real conversations")}</h2><span class="spacer"></span><span class="muted small">${T("{a} / {b} done", { a: RP().filter((d) => (S.dialogues || {})[d.id]).length, b: RP().length })}</span></div>
    <p class="muted">${T("Someone talks to you: choose what to say, hear it and say it out loud. Then do the same conversation again without help, speaking only.")}</p>
    ${levelGroups(RP(), rpCard, { grid: "lib-list", started: (its) => its.some((d) => (S.dialogues || {})[d.id]) })}
    <div class="section-title"><h2>${T("Repeat sentences")}</h2><span class="spacer"></span><span class="muted small">${T("{a} / {b} mastered", { a: done, b: totalP })}</span></div>
    ${levelGroups(SPEAKING, (c) => {
      const n = c.phrases.filter(([en]) => (S.spoken[en] || 0) >= 80).length;
      return `<a class="card theme-card" href="#/oral/${c.id}">${tile(c.icon, c.level)}<h3 style="margin:12px 0 4px">${esc(loc(c, "title"))}</h3><p class="muted small" style="margin-bottom:10px">${T("{a} / {b} mastered", { a: n, b: c.phrases.length })}</p><div class="progress"><div style="width:${(n / c.phrases.length) * 100}%"></div></div></a>`;
    }, { grid: "grid-3", started: (its) => its.some((c) => c.phrases.some(([en]) => S.spoken[en] != null)) })}
    <div class="section-title"><h2>${T("Speak freely")}</h2></div>
    <p class="muted">${T("A real question: you answer out loud for 1 to 2 minutes, listen to yourself, then compare with a model answer. Then the 4-3-2 challenge: say the same thing again, faster.")}</p>
    ${levelGroups(PROMPTS, (p) => `
      <a class="card theme-card prompt-card" href="#/parler/${p.id}">
        <div class="row">${ic("message-circle", "muted")}<span class="muted small">${Math.round(p.time / 60 * 10) / 10} min</span><span class="spacer"></span>${S.prompts[p.id] ? `<span class="tag tag-done">${ic("check")} ${S.prompts[p.id]}×</span>` : ""}</div>
        <h3 class="en" style="margin:10px 0 4px">${esc(p.q)}</h3>
      </a>`, { started: (its) => its.some((p) => S.prompts[p.id]) })}
    <div class="section-title"><h2>${T("Difficult sounds for French speakers")}</h2></div>
    <p class="muted">${T("Listen to each pair: the two words don't mean the same thing! Practise hearing the difference first, then producing it.")} <a href="#/prononciation">${T("All the sounds, in detail: the pronunciation course")} ${ic("arrow-right")}</a></p>
    <div class="grid grid-2">
      ${SOUNDS.map((s) => `
        <div class="card">
          <div class="row">${tile(s.icon, "A2")}<h3 style="margin:0">${esc(loc(s, "title"))}</h3></div>
          <p class="small" style="margin-top:12px">${isFr() && s.how_fr ? `<span class="fr-ui">${s.how_fr}</span>` : s.how + fr(s.how_fr && s.how_fr.replace(/<[^>]+>/g, ""))}</p>
          ${s.pairs.map(([a, b]) => `<div class="pair"><button class="btn btn-sm" data-say="${esc(a.toLowerCase())}">${ic("volume-2")} ${esc(a)}</button><span class="muted">≠</span><button class="btn btn-sm" data-say="${esc(b.toLowerCase())}">${ic("volume-2")} ${esc(b)}</button></div>`).join("")}
        </div>`).join("")}
    </div>`;
}
function viewSpeak(set, backHref, backLabel, onDone) {
  if (!set) return viewSpeaking();
  let idx = 0, rec = null, listening = false, mediaRec = null, chunks = [], myURL = null;
  function stopAll() {
    try { rec && rec.abort(); } catch (e) {}
    try { mediaRec && mediaRec.state !== "inactive" && mediaRec.stop(); } catch (e) {}
    listening = false;
  }
  onCleanup(stopAll);
  function render() {
    const [en, f] = set.phrases[idx];
    const best = S.spoken[en];
    app.innerHTML = `
      ${back(backHref, backLabel)}
      <div class="flash-wrap">
        <div class="row"><h2 style="margin:0">${esc(loc(set, "title"))}</h2><span class="spacer"></span><span class="muted small">${idx + 1} / ${set.phrases.length}</span></div>
        <div class="progress" style="margin:14px 0 16px"><div style="width:${(idx / set.phrases.length) * 100}%"></div></div>
        <div class="card say-card">
          <div class="say-en" id="target">${esc(en)}</div>
          <div class="say-fr fr">${esc(f)}</div>
          <div class="row" style="justify-content:center;margin:18px 0">
            <button class="btn" data-say="${esc(en)}">${ic("volume-2")} ${T("Listen")}</button>
            <button class="btn" data-say="${esc(en)}" data-slow="1">${ic("snail")} ${T("Slowly")}</button>
          </div>
          ${SR ? `<button class="mic" id="mic" aria-label="${T("Speak")}">${ic("mic")}</button><p class="muted small" id="micHint" style="margin-top:10px">${T("Press and say the sentence in English")}</p>` : ""}
          <div class="heard no-tx" id="heard"></div>
          <div id="score">${best != null ? `<p class="muted small">${T("Your best score:")} <b>${best}%</b></p>` : ""}</div>
          <hr class="sep" style="margin:18px 0">
          <div class="row" style="justify-content:center"><button class="btn btn-sm" id="recBtn">${ic("circle-dot")} ${T("Record myself")}</button><span id="myAudio"></span></div>
          <p class="muted small" style="margin:8px 0 0">${T("Listen to the model, then to your version: comparing is how you progress most.")}</p>
        </div>
        <div class="row" style="margin-top:16px">
          <button class="btn" id="prev" ${idx === 0 ? "disabled" : ""}>${ic("arrow-left")} ${T("Previous")}</button>
          <span class="spacer"></span>
          <button class="btn btn-dark" id="next">${idx + 1 < set.phrases.length ? T("Next") + " " + ic("arrow-right") : T("Finish") + " " + ic("check")}</button>
        </div>
      </div>`;
    setTimeout(() => speak(en), 200);
    $("#prev").onclick = () => { stopAll(); idx--; render(); };
    $("#next").onclick = () => {
      stopAll();
      if (idx + 1 < set.phrases.length) { idx++; render(); }
      else { if (onDone) onDone(); toast(T("Well done, set finished!")); location.hash = backHref; }
    };
    if (myURL) { URL.revokeObjectURL(myURL); myURL = null; }
    if (SR) $("#mic").onclick = () => {
      if (listening) { try { rec.stop(); } catch (e) {} return; }
      stopAudio();
      rec = new SR();
      rec.lang = APP.srLang; rec.interimResults = false; rec.maxAlternatives = 5;
      const mic = $("#mic");
      rec.onstart = () => { listening = true; mic.classList.add("listening"); $("#micHint").textContent = T("I'm listening… speak now"); };
      rec.onend = () => { listening = false; if ($("#mic")) { mic.classList.remove("listening"); $("#micHint").textContent = T("Press and say the sentence in English"); } };
      rec.onerror = (e) => toast(T(e.error === "not-allowed" ? "Allow microphone access in your browser" : e.error === "no-speech" ? "I didn't hear anything, try a bit louder" : "Microphone problem, try again"));
      rec.onresult = (e) => {
        const alts = Array.from(e.results[0]).map((a) => a.transcript);
        let bestR = null, bestAlt = alts[0];
        alts.forEach((a) => { const r = compare(en, a); if (!bestR || r.score > bestR.score) { bestR = r; bestAlt = a; } });
        $("#heard").innerHTML = bestR.words.map((w, k) => `<span class="${bestR.ok[k] ? "ok" : "ko"}">${esc(w)}</span>`).join(" ");
        const sc = bestR.score;
        const prev = S.spoken[en] || 0;
        if (sc > prev) S.spoken[en] = sc;
        addXP(sc >= 80 && prev < 80 ? 5 : 1, "speak");
        const msg = T(sc === 100 ? "Perfect!" : sc >= 80 ? "Very good!" : sc >= 50 ? "Not bad! Listen again to the red words and try again." : "Listen to the slow version, then try again. You'll get there!");
        $("#score").innerHTML = `<div class="score-ring" style="color:${sc >= 80 ? "var(--green)" : sc >= 50 ? "var(--yellow)" : "var(--red)"}">${sc}%</div><p style="margin:0">${msg}</p><p class="muted small no-tx">${T("I heard:")} “${esc(bestAlt)}”</p>`;
      };
      try { rec.start(); } catch (err) { toast(T("The microphone couldn't start")); }
    };
    $("#recBtn").onclick = async () => {
      const btn = $("#recBtn");
      if (mediaRec && mediaRec.state === "recording") { mediaRec.stop(); return; }
      if (!navigator.mediaDevices || !window.MediaRecorder) { toast(T("Recording isn't available here")); return; }
      try {
        stopAudio();
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        chunks = [];
        mediaRec = new MediaRecorder(stream);
        mediaRec.ondataavailable = (ev) => chunks.push(ev.data);
        mediaRec.onstop = () => {
          stream.getTracks().forEach((t) => t.stop());
          if (!$("#myAudio")) return;
          if (myURL) URL.revokeObjectURL(myURL);
          myURL = URL.createObjectURL(new Blob(chunks, { type: mediaRec.mimeType }));
          $("#myAudio").innerHTML = `<audio controls src="${myURL}" style="height:36px;max-width:220px"></audio>`;
          btn.innerHTML = ic("circle-dot") + " " + T("Again");
          addXP(1, "speak");
        };
        mediaRec.start();
        btn.innerHTML = ic("square") + " " + T("Stop");
      } catch (err) { toast(T("Allow microphone access in your browser")); }
    };
  }
  render();
}
const mmss = (s) => Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");
function viewPrompt(id) {
  const p = PROMPTS.find((x) => x.id === id) || PROMPTS[+id];
  if (!p) return viewSpeaking();
  const i = PROMPTS.indexOf(p);
  const rounds = [p.time, Math.round(p.time * 0.75), Math.round(p.time * 0.5)];
  let round = 0, mediaRec = null, stream = null, rec = null, recording = false, t0 = 0, timer = null, finalText = "", url = null, lastSecs = 0;
  function stopAll() {
    recording = false; clearInterval(timer);
    try { rec && rec.abort(); } catch (e) {}
    try { mediaRec && mediaRec.state !== "inactive" && mediaRec.stop(); } catch (e) {}
    if (stream) stream.getTracks().forEach((t) => t.stop());
  }
  onCleanup(() => { stopAll(); if (url) URL.revokeObjectURL(url); });
  const u = COURSE.find((x) => x.prompt === p.id);
  const prev = PROMPTS[i - 1], next = PROMPTS[i + 1];
  app.innerHTML = `
    ${back(u ? `#/unite/${u.id}` : "#/oral", u ? `Unit ${unitNum(u)} · ${loc(u, "title")}` : "Speaking")}
    <div class="flash-wrap" style="max-width:700px">
      <div class="row">${levelTag(p.level)}<span class="muted small">${T("Speak freely · about {t}", { t: mmss(p.time) })}</span><span class="spacer"></span>${S.prompts[p.id] ? `<span class="tag tag-done">${ic("check")} ${T("Done {n}×", { n: S.prompts[p.id] })}</span>` : ""}</div>
      <div class="card" style="margin-top:12px">
        <div class="row" style="align-items:flex-start;flex-wrap:nowrap"><h1 class="en" style="font-size:clamp(24px,4.5vw,32px);margin:0;flex:1">${esc(p.q)}${fr(p.fr)}</h1>${sayBtn(p.q)}</div>
        <h3 style="margin-top:20px">${T("Phrases to help you")}</h3>
        <div class="chips">${p.phrases.map((ph) => `<button class="chip" data-say="${esc(ph.replace(/…$/, ""))}">${ic("volume-2")} <span class="en">${esc(ph)}</span></button>`).join("")}</div>
      </div>
      <div class="card say-card">
        <div class="rounds" id="rounds">${rounds.map((r, k) => `<span class="round ${k === 0 ? "on" : ""}">${T("Round")} ${k + 1} · ${mmss(r)}</span>`).join("")}</div>
        <div class="timer" id="timer">0:00</div>
        <p class="muted small" id="recHint">${T("Take 20 seconds to think, then press and speak without stopping. Aim for {t}. Mistakes don't matter: only speaking does.", { t: mmss(rounds[0]) })}</p>
        <button class="mic" id="recBtn" aria-label="${T("Start speaking")}">${ic("mic")}</button>
        <div class="live no-tx" id="live"></div>
        <div id="after"></div>
      </div>
      <details class="card" id="modelBox"><summary>${ic("book-open-text")} <span>${T("See a model answer")}</span></summary>
        <p class="en" style="font-size:18px;line-height:1.7;margin-top:14px">${esc(p.model)}</p>
        <div class="row"><button class="btn btn-sm" data-say="${esc(p.model)}">${ic("volume-2")} ${T("Listen")}</button><button class="btn btn-sm" data-say="${esc(p.model)}" data-slow="1">${ic("snail")} ${T("Slowly")}</button></div>
        <p class="muted small" style="margin:12px 0 0">${T("Don't learn it by heart: find 2 or 3 phrases you'd like to reuse in your next round.")}</p>
      </details>
      <div class="row" style="margin-top:16px">
        ${prev ? `<a class="btn" href="#/parler/${prev.id}">${ic("arrow-left")} ${T("Previous")}</a>` : ""}
        <span class="spacer"></span>
        ${next ? `<a class="btn btn-dark" href="#/parler/${next.id}">${T("Next topic")} ${ic("arrow-right")}</a>` : ""}
      </div>
    </div>`;
  const btn = $("#recBtn"), live = $("#live"), tEl = $("#timer");
  btn.onclick = async () => {
    if (recording) { finish(); return; }
    if (!navigator.mediaDevices || !window.MediaRecorder) { toast(T("Recording isn't available in this browser")); return; }
    try { stream = await navigator.mediaDevices.getUserMedia({ audio: true }); }
    catch (e) { toast(T("Allow microphone access in your browser")); return; }
    stopAudio();
    const chunks = [];
    mediaRec = new MediaRecorder(stream);
    mediaRec.ondataavailable = (e) => chunks.push(e.data);
    mediaRec.onstop = () => { if (!$("#after")) return; if (url) URL.revokeObjectURL(url); url = URL.createObjectURL(new Blob(chunks, { type: mediaRec.mimeType })); showAfter(); };
    mediaRec.start();
    recording = true; finalText = ""; t0 = Date.now(); live.innerHTML = "";
    btn.classList.add("listening"); btn.innerHTML = ic("square"); btn.setAttribute("aria-label", T("Stop"));
    $("#recHint").textContent = T("I'm listening… press again to finish.");
    $("#after").innerHTML = "";
    timer = setInterval(() => { const s = Math.floor((Date.now() - t0) / 1000); tEl.textContent = mmss(s); tEl.classList.toggle("reached", s >= rounds[round]); }, 250);
    if (SR) {
      rec = new SR(); rec.lang = APP.srLang; rec.continuous = true; rec.interimResults = true;
      rec.onresult = (e) => {
        let interim = "";
        for (let k = e.resultIndex; k < e.results.length; k++) { const r = e.results[k]; if (r.isFinal) finalText += r[0].transcript.trim() + " "; else interim += r[0].transcript; }
        live.innerHTML = esc(finalText) + `<span class="muted">${esc(interim)}</span>`;
      };
      rec.onend = () => { if (recording) { try { rec.start(); } catch (e) {} } };
      rec.onerror = () => {};
      try { rec.start(); } catch (e) {}
    }
  };
  function finish() {
    lastSecs = Math.floor((Date.now() - t0) / 1000);
    recording = false; clearInterval(timer);
    try { rec && rec.stop(); } catch (e) {}
    try { mediaRec.stop(); } catch (e) {}
    if (stream) stream.getTracks().forEach((t) => t.stop());
    btn.classList.remove("listening"); btn.innerHTML = ic("mic"); btn.setAttribute("aria-label", T("Speak"));
    if (round === 0) S.prompts[p.id] = (S.prompts[p.id] || 0) + 1;
    addXP(lastSecs >= rounds[round] * 0.6 ? 10 : 4, round === 0 ? "free" : "speak");
  }
  function showAfter() {
    const words = finalText.trim() ? finalText.trim().split(/\s+/).length : 0;
    const wpm = lastSecs ? Math.round(words / (lastSecs / 60)) : 0;
    const hasNext = round < rounds.length - 1;
    $("#after").innerHTML = `
      <div class="feedback ok" style="text-align:left">${ic("circle-check")} <b>${T("Round {r}: you spoke for {t}!", { r: round + 1, t: mmss(lastSecs) })}</b>
        ${words ? `<br><span class="small">${T("{n} words recognised · about {w} words per minute", { n: words, w: wpm })}</span>` : ""}</div>
      <p class="small muted" style="margin:14px 0 6px">${T("Listen to yourself:")}</p>
      <audio controls src="${url}" style="width:100%"></audio>
      ${hasNext ? `
        <div class="challenge">
          <b>${ic("timer-reset")} ${T("4-3-2 challenge: round {r}", { r: round + 2 })}</b>
          <p class="small" style="margin:6px 0 10px">${T("Say <b>the same thing</b>, in {t} this time. No new ideas: the goal is to make it come out faster and more easily.", { t: mmss(rounds[round + 1]) })}</p>
          <button class="btn btn-sm btn-primary" id="nextRound">${T("Start round {r}", { r: round + 2 })}</button>
        </div>` : `
        <div class="challenge done">${ic("trophy")} <b>${T("4-3-2 challenge complete!")}</b><p class="small" style="margin:6px 0 0">${T("Compare round 1 and round 3: can you hear the difference in fluency? Now open the model answer.")}</p></div>`}`;
    if (hasNext) $("#nextRound").onclick = () => {
      round++;
      $$("#rounds .round").forEach((r, k) => r.classList.toggle("on", k === round));
      tEl.textContent = "0:00"; tEl.classList.remove("reached"); live.innerHTML = ""; $("#after").innerHTML = "";
      $("#recHint").textContent = T("Round {r}: same content, in {t}. Press when you're ready.", { r: round + 1, t: mmss(rounds[round]) });
      btn.scrollIntoView({ block: "center", behavior: "smooth" });
    };
  }
}
function viewEar() {
  const pairs = [];
  SOUNDS.forEach((s) => { if (!/stress/i.test(s.title)) s.pairs.forEach((p) => pairs.push({ pair: p, sound: loc(s, "title") })); });
  /* + the minimal pairs of the pronunciation course (single words only). */
  const seen = new Set(pairs.map((x) => x.pair.join("|").toLowerCase()));
  PRON().forEach((c) => (c.pairs || []).forEach((p) => {
    const k = p.join("|").toLowerCase();
    if (!seen.has(k) && p.every((w) => w.length > 1 && !/\s/.test(w))) { seen.add(k); pairs.push({ pair: p, sound: loc(c, "title") }); }
  }));
  const pool = voices.filter((v) => /en[-_](GB|US|AU|IE|CA|NZ|ZA|IN)/i.test(v.lang));
  const qs = shuffle(pairs).slice(0, 12).map((x) => ({ ...x, answer: Math.random() < 0.5 ? 0 : 1, voice: pool.length ? pool[Math.floor(Math.random() * pool.length)] : null }));
  let i = 0, score = 0;
  function play() { const q = qs[i]; speak(q.pair[q.answer].toLowerCase(), $("#replay"), { voice: q.voice, rate: 0.85 }); }
  function render() {
    if (i >= qs.length) {
      addXP(score * 2, "speak");
      app.innerHTML = `${back("#/oral", "Speaking")}<div class="card flash-wrap" style="text-align:center"><div class="result-big">${score} / ${qs.length}</div><p>${T(score >= qs.length - 1 ? "Excellent ear!" : score >= qs.length / 2 ? "Good! Your mistakes show which sounds to work on first." : "That's normal at the beginning: your ear is learning these sounds. Play again regularly.")}</p><div class="row" style="justify-content:center"><button class="btn" id="again">${T("Play again")}</button><a class="btn btn-primary" href="#/oral">${T("Back to speaking")}</a></div></div>`;
      $("#again").onclick = viewEar;
      return;
    }
    const q = qs[i];
    app.innerHTML = `
      ${back("#/oral", "Speaking")}
      <div class="flash-wrap">
        <div class="row"><h2 style="margin:0">${ic("ear")} ${T("Train your ear")}</h2><span class="spacer"></span><span class="muted small">${i + 1} / ${qs.length}</span></div>
        <div class="progress" style="margin:14px 0 20px"><div style="width:${(i / qs.length) * 100}%"></div></div>
        <div class="card no-tx" style="text-align:center">
          <p class="muted small" style="margin:0">${esc(q.sound)}${q.voice ? " · " + T("voice:") + " " + esc(q.voice.name.replace(/\s*\(.*\)/, "")) : ""}</p>
          <button class="mic" id="replay" style="margin:18px auto" aria-label="${T("Listen again")}">${ic("volume-2")}</button>
          <p style="margin-bottom:16px">${T("Which word did you hear?")}</p>
          <div class="grid" style="grid-template-columns:1fr 1fr;gap:12px">${q.pair.map((w, k) => `<button class="option ear-opt" data-k="${k}" style="text-align:center;font-size:22px">${esc(w)}</button>`).join("")}</div>
          <div id="fb"></div>
        </div>
      </div>`;
    setTimeout(play, 250);
    $("#replay").onclick = play;
    $$(".ear-opt").forEach((b) => (b.onclick = () => {
      const k = +b.dataset.k, ok = k === q.answer;
      if (ok) score++;
      $$(".ear-opt").forEach((x, j) => { x.disabled = true; if (j === q.answer) x.classList.add("correct"); else if (j === k) x.classList.add("wrong"); });
      $("#fb").innerHTML = `<div class="row" style="justify-content:center;margin-top:16px"><button class="btn btn-sm" data-say="${esc(q.pair[0].toLowerCase())}">${ic("volume-2")} ${esc(q.pair[0])}</button><button class="btn btn-sm" data-say="${esc(q.pair[1].toLowerCase())}">${ic("volume-2")} ${esc(q.pair[1])}</button><button class="btn btn-sm btn-dark" id="nxt">${T("Next")} ${ic("arrow-right")}</button></div>`;
      $("#nxt").onclick = () => { i++; render(); };
    }));
  }
  if (!voices.length) { app.innerHTML = `${back("#/oral", "Speaking")}<div class="card empty">${T("No English voice is available in this browser.")}</div>`; return; }
  render();
}

/* ================= Pronunciation course =================
   27 chapters A1 → C2 (js/data/pronunciation*.js): an explanation, key words with their IPA, minimal pairs,
   sentences to repeat, and a practice built from the chapter: understand, hear, read the IPA, find the stress, speak, write. */
const PRON = () => window.PRON || [];
const pronById = (id) => PRON().find((c) => c.id === id);
const pronNum = (c) => PRON().indexOf(c) + 1;
const pronDone = (id) => (S.pron || {})[id];
/* words: [word, ipa, french, text to read?, "en-GB" | "en-US"?] */
const wordSay = (w, slow) => `<button class="speak" data-say="${esc(w[3] || w[0])}"${w[4] ? ` data-lang="${w[4]}"` : ""}${slow ? ' data-slow="1"' : ""} aria-label="${T(slow ? "Slowly" : "Listen")}: ${esc(w[0])}" title="${T(slow ? "Slowly" : "Listen")}">${ic(slow ? "snail" : "volume-2")}</button>`;
const pairBtns = (p) => `<div class="pair">${p.map((w, k) => `${k ? '<span class="muted">≠</span>' : ""}<button class="btn btn-sm" data-say="${esc(w)}">${ic("volume-2")} ${esc(w)}</button>`).join("")}</div>`;
function pronPractice(ch) {
  const items = (ch.quiz || []).map((q) => Object.assign({ type: "mcq", from: "Understand" }, q));
  /* Hear: minimal pairs, each said by a different English voice (high-variability training). */
  const pool = voices.filter((v) => /en[-_](GB|US|AU|IE|CA|NZ|ZA|IN)/i.test(v.lang));
  const pick = () => (pool.length ? pool[Math.floor(Math.random() * pool.length)] : null);
  shuffle(ch.pairs || []).slice(0, 4).forEach((p) => {
    const a = Math.random() < 0.5 ? 0 : 1;
    items.push({ type: "mcq", say: p[a], voice: pick(), q: "Listen. Which one do you hear?", q_fr: "Écoute. Lequel entends-tu ?", o: p.slice(), a, exHtml: pairBtns(p), from: "Train your ear" });
  });
  /* Read the IPA: word → transcription, and transcription → word. */
  const ws = (ch.words || []).filter((w) => w[1]);
  const chips = (list) => `<div class="ipa-chips">${list.map((x) => `<span class="ipa-chip"><b class="en">${esc(x[0])}</b> ${ipaSpan(x[1])} ${wordSay(x)}</span>`).join("")}</div>`;
  shuffle(ws).slice(0, 3).forEach((w, k) => {
    const others = shuffle(ws.filter((x) => x[1] !== w[1] && x[0] !== w[0])).slice(0, 2);
    if (others.length < 2) return;
    const all = [w, ...others];
    if (k % 2 === 0) items.push({ type: "mcq", q: `Which one is pronounced /${w[1]}/?`, q_fr: `Lequel se prononce /${w[1]}/ ?`, o: all.map((x) => x[0]), a: 0, exHtml: chips(all), from: "Read the phonetics" });
    else items.push({ type: "mcq", q: `How is “${w[0]}” pronounced?`, q_fr: `Comment se prononce « ${w[0]} » ?`, o: all.map((x) => "/" + x[1] + "/"), a: 0, ipaO: true, exHtml: chips(all), from: "Read the phonetics" });
  });
  shuffle(ch.stress || []).slice(0, ch.stressN || 3).forEach((s) => items.push({ type: "stress", word: s[0], parts: s[1].split("|"), a: s[2], sayText: s[3] || s[0], from: "Word stress" }));
  /* Accents: the same sentence by a British or an American voice, when the browser has both. */
  const gb = voiceByLang("en-GB"), us = voiceByLang("en-US");
  if (ch.accent && gb && us) shuffle(ch.accent).slice(0, 3).forEach((s) => {
    const isUS = Math.random() < 0.5;
    items.push({ type: "mcq", say: s, voice: isUS ? us : gb, q: "Listen. Is this voice British or American?", q_fr: "Écoute. Cette voix est-elle britannique ou américaine ?", o: [T("British"), T("American")], a: isUS ? 1 : 0,
      ex: "Listen for the r after vowels, the t between two vowels, and the vowels of can't, ask and hot.", ex_fr: "Écoute le r après les voyelles, le t entre deux voyelles, et les voyelles de can't, ask et hot.",
      exHtml: `<div class="row" style="margin-top:8px"><button class="btn btn-sm" data-say="${esc(s)}" data-lang="en-GB">${ic("volume-2")} ${T("British")}</button><button class="btn btn-sm" data-say="${esc(s)}" data-lang="en-US">${ic("volume-2")} ${T("American")}</button></div>`, from: "Accents" });
  });
  const pr = ch.practice || [];
  pr.slice(0, 2).forEach(([en, f]) => items.push({ type: "say", en, fr: f, from: "Say it" }));
  if (pr[2]) items.push({ type: "dict", text: pr[2][0], from: "Listen and write" });
  return items;
}
function pronCard(c) {
  const r = pronDone(c.id);
  return `<a class="card lesson-item ${r ? "done" : ""}" href="#/prononciation/${c.id}">
    <span class="lesson-num">${r ? ic("check") : pronNum(c)}</span>
    <span style="flex:1;min-width:0"><span class="row" style="gap:6px;margin-bottom:4px">${ic(c.icon, "muted")}${c.ipa ? `<span class="ipa no-tx small muted">${esc(c.ipa)}</span>` : ""}${r ? `<span class="small muted">${T("{a}/{b} in the practice", { a: r.best, b: r.total })}</span>` : ""}</span>
    <h3 style="margin:0">${esc(loc(c, "title"))}</h3><span class="muted small">${esc(loc(c, "subtitle"))}</span></span>
  </a>`;
}
function viewPronCourse() {
  const all = PRON();
  const done = all.filter((c) => pronDone(c.id)).length;
  app.innerHTML = `
    ${back("#/oral", "Speaking")}
    <h1>${T("Pronunciation course")}</h1>
    <p class="muted">${T("A complete course in English pronunciation, from A1 to C2: the sounds and the phonetic alphabet, word stress, rhythm, linking, intonation and accents. In each chapter: a clear explanation, the key words in phonetics, pairs to train your ear, sentences to repeat and about fifteen exercises.")}</p>
    <div class="grid grid-2" style="margin:20px 0">
      <div class="card">
        <div class="row"><b>${T("{a} / {b} chapters", { a: done, b: all.length })}</b></div>
        <div class="progress" style="margin-top:10px"><div style="width:${pct(done, all.length)}%"></div></div>
        <div class="row" style="margin-top:14px;gap:8px"><a class="btn btn-sm btn-dark" href="#/prononciation/api">${ic("table")} ${T("The 44 sounds (IPA chart)")}</a><a class="btn btn-sm" href="#/oreille">${ic("ear")} ${T("Train your ear")}</a></div>
      </div>
      <div class="card">
        <h3 style="margin:0 0 8px">${ic("lightbulb")} ${T("How to work on a chapter")}</h3>
        <ol class="small" style="margin:0;padding-left:20px">
          <li>${T("<b>Listen</b> to the examples several times.")}</li>
          <li>${T("<b>Notice</b> what's different from French.")}</li>
          <li>${T("<b>Imitate</b> out loud, exaggerating at first.")}</li>
          <li>${T("<b>Record yourself</b> and compare with the model.")}</li>
        </ol>
      </div>
    </div>
    <section class="card teacher" style="margin-bottom:8px">
      <div class="row" style="flex-wrap:nowrap;align-items:flex-start">${ic("graduation-cap", "c-accent")}<p style="margin:0" class="small">${T("The aim is to be easy to understand, not to lose your accent. A large meta-analysis (Lee, Jang and Plonsky, 2015) shows that explicit pronunciation teaching works, and research on intelligibility (Munro and Derwing, 1995) shows that a foreign accent doesn't stop you from being perfectly understood. So the course puts clarity first: stress, vowel length and consonants.")}</p></div>
    </section>
    ${levelGroups(all, pronCard, { started: (its) => its.some((c) => pronDone(c.id)), stat: (its) => T("{a} / {b} done", { a: its.filter((c) => pronDone(c.id)).length, b: its.length }) })}`;
}
function viewPronIPA() {
  app.innerHTML = `
    ${back("#/prononciation", "Pronunciation course")}
    <h1>${T("The 44 sounds of English")}</h1>
    <p class="muted">${T("The phonetic alphabet (IPA) used in dictionaries, for standard British English. Tap a symbol to hear an example word; the link takes you to the chapter that teaches the sound.")}</p>
    ${(window.PRON_IPA || []).map((g) => `
      <div class="section-title"><h2>${esc(loc(g, "title"))}</h2><span class="spacer"></span><span class="muted small">${g.items.length}</span></div>
      <div class="ipa-grid">${g.items.map(([sym, ex, exIpa, ch, n, nf]) => {
        const c = ch && pronById(ch);
        return `<div class="card ipa-cell">
          <button class="ipa-sym" data-say="${esc(ex)}" aria-label="${T("Listen")}: ${esc(ex)}"><span class="ipa">${esc(sym)}</span></button>
          <div><b class="en">${esc(ex)}</b> ${ipaSpan(exIpa)}</div>
          <p class="muted small" style="margin:6px 0 4px">${instr(n, nf)}</p>
          ${c ? `<a class="small" href="#/prononciation/${c.id}">${T("Chapter {n}", { n: pronNum(c) })} ${ic("arrow-right")}</a>` : ""}
        </div>`;
      }).join("")}</div>`).join("")}`;
}
function viewPronChapter(id) {
  const c = pronById(id);
  if (!c) return viewPronCourse();
  const all = PRON(), i = all.indexOf(c), prev = all[i - 1], next = all[i + 1];
  const r = pronDone(c.id);
  let showFr = isFr() && !!c.body_fr;
  app.innerHTML = `
    ${back("#/prononciation", "Pronunciation course")}
    <article class="card lesson-body">
      <div class="row" style="margin-bottom:8px">${levelTag(c.level)}<span class="muted small">${T("Chapter {a} of {b}", { a: i + 1, b: all.length })}</span><span class="spacer"></span>${c.body_fr ? `<button class="btn btn-sm" id="frToggle">${ic("languages")} ${toggleLabel(showFr)}</button>` : ""}</div>
      <div class="row" style="flex-wrap:nowrap;align-items:center">${tile(c.icon, c.level)}<h1 style="margin:0">${esc(loc(c, "title"))}</h1></div>
      <p class="muted" style="margin-top:10px">${esc(loc(c, "subtitle"))}${c.ipa ? ` <span class="ipa no-tx">${esc(c.ipa)}</span>` : ""}</p>
      <div id="lbody" class="${showFr && !FOREIGN ? "fr" : ""}" ${showFr ? 'lang="fr"' : ""}>${renderBody(showFr ? c.body_fr : c.body)}</div>
    </article>
    ${(c.words || []).length ? `<section class="card">
      <h2>${ic("volume-2")} ${T("Key words")}</h2>
      <p class="muted small">${T("Listen to each word, look at its transcription and say it out loud. The snail = slow version.")}</p>
      <ul class="examples">${c.words.map((w) => `<li>${wordSay(w)}${wordSay(w, 1)}<div style="flex:1;min-width:0"><span class="en">${esc(w[0])}</span> ${ipaSpan(w[1])}${w[2] ? `<div class="fr">${esc(w[2])}</div>` : ""}</div></li>`).join("")}</ul>
    </section>` : ""}
    ${(c.pairs || []).length ? `<section class="card">
      <h2>${ic("ear")} ${T("Minimal pairs")}</h2>
      <p class="muted small">${T("Two words that differ by a single sound. Listen to both, then say them, exaggerating the difference.")}</p>
      ${c.pairs.map(pairBtns).join("")}
    </section>` : ""}
    <section class="card">
      <h2>${ic("mic")} ${T("Say it")}</h2>
      <p class="muted small">${T("Sentences full of today's sounds. Listen, repeat, then practise with the microphone and record yourself.")}</p>
      <ul class="examples">${c.practice.map(([en, f]) => `<li>${sayBtn(en)}${slowBtn(en)}<div style="flex:1"><div class="en">${esc(en)}</div><div class="fr">${esc(f)}</div></div></li>`).join("")}</ul>
      <a class="btn btn-dark" style="margin-top:12px" href="#/prononciation/${c.id}/repeter">${ic("mic")} ${T("Practise with the microphone")}</a>
    </section>
    <section class="card" id="quizBox">
      <h2>${ic("list-checks")} ${T("Practice")}</h2>
      <p class="muted">${T("About fifteen exercises: understand the rule, recognise the sounds by ear, read the phonetics, find the stress, then speak and write what you hear.")}</p>
      ${r ? `<p class="small">${T("Your best score:")} <b>${r.best} / ${r.total}</b></p>` : ""}
      <button class="btn btn-primary" id="startQuiz">${T("Start the practice")}</button>
    </section>
    <div class="row" style="margin-top:16px">
      ${prev ? `<a class="btn" href="#/prononciation/${prev.id}">${ic("arrow-left")} ${T("Previous")}</a>` : ""}
      <span class="spacer"></span>
      ${next ? `<a class="btn btn-dark" href="#/prononciation/${next.id}">${T("Next chapter")} ${ic("arrow-right")}</a>` : `<a class="btn btn-dark" href="#/prononciation">${T("All chapters")} ${ic("arrow-right")}</a>`}
    </div>`;
  if ($("#frToggle")) $("#frToggle").onclick = () => {
    showFr = !showFr;
    $("#lbody").innerHTML = renderBody(showFr ? c.body_fr : c.body);
    $("#lbody").classList.toggle("fr", showFr && !FOREIGN);
    if (showFr) $("#lbody").setAttribute("lang", "fr"); else $("#lbody").removeAttribute("lang");
    $("#frToggle").innerHTML = `${ic("languages")} ${toggleLabel(showFr)}`;
  };
  $("#startQuiz").onclick = () => {
    const box = $("#quizBox");
    runQuiz(box, pronPractice(c), (score, total) => {
      if (!S.pron) S.pron = {};
      const before = S.pron[c.id];
      S.pron[c.id] = { best: Math.max(score, before ? before.best : 0), total, date: before ? before.date : today() };
      addXP(before ? score : 10 + score * 2, "speak");
      box.innerHTML = `
        <div class="result-big">${score} / ${total}</div>
        <p style="text-align:center">${scoreMsg(score, total)}</p>
        <div class="row" style="justify-content:center">
          <button class="btn" id="retry">${T("Practise again")}</button>
          ${next ? `<a class="btn btn-primary" href="#/prononciation/${next.id}">${T("Next chapter")} ${ic("arrow-right")}</a>` : ""}
        </div>`;
      $("#retry").onclick = () => { viewPronChapter(id); $("#startQuiz").click(); $("#quizBox").scrollIntoView({ block: "start" }); };
    });
  };
}

/* ================= Academic skills (B2 → C2) =================
   16 chapters (js/data/academic*.js), as in an English for Academic Purposes course: objectives, an explanation,
   a text, lecture or data set to work with, a language bank, a practice, and a real task with a model answer,
   a checklist and a correction by Claude. Progress: S.acad[id] = {best, total, date, wrote, checks}; texts in S.notes["a:" + id]. */
const ACAD = () => window.ACAD || [];
const acadById = (id) => ACAD().find((c) => c.id === id);
const acadNum = (c) => ACAD().indexOf(c) + 1;
const acadState = (id) => (S.acad || {})[id] || {};
const acadDone = (id) => acadState(id).best != null;
const ACAD_KIND = { read: ["book-open-text", "Reading and listening"], write: ["pen-line", "Writing"], speak: ["mic", "Speaking"] };
const kindTag = (c) => `<span class="tag">${ic(ACAD_KIND[c.kind][0])} ${T(ACAD_KIND[c.kind][1])}</span>`;
const dataTable = (d, caption) => `${caption ? `<p style="margin:0 0 6px"><b>${esc(d.title)}</b></p>` : ""}<div class="table-wrap"><table class="irr-table data-table"><tr>${d.head.map((h) => `<th>${esc(h)}</th>`).join("")}</tr>${d.rows.map((r) => `<tr>${r.map((x) => `<td>${esc(x)}</td>`).join("")}</tr>`).join("")}</table></div>${d.note ? `<p class="muted small" style="margin:8px 0 0">${instr(d.note, d.note_fr)}</p>` : ""}`;
function acadSourceInner(c, caption) {
  const s = c.source;
  if (s) {
    const paras = (ps) => ps.map((p) => `<p>${esc(p)}</p>`).join("");
    return `<div class="reader acad-src${s.fr ? " no-tx" : ""}"${s.fr ? ' lang="fr"' : ""}>${s.blocks ? s.blocks.map((b) => `<h3>${esc(b.h)}</h3>${paras(b.paras)}`).join("") : paras(s.paras)}</div>`;
  }
  return c.data ? dataTable(c.data, caption) : "";
}
/* The material of the chapter as plain text, for the correction message. */
function acadSourceText(c) {
  if (c.source) return (c.source.blocks ? c.source.blocks.map((b) => b.h + "\n" + b.paras.join("\n\n")) : c.source.paras).join("\n\n");
  if (c.data) return [c.data.title, c.data.head.join(" | "), ...c.data.rows.map((r) => r.join(" | ")), c.data.note || ""].join("\n").trim();
  if (c.lecture) return c.lecture.paras.join("\n\n");
  return "";
}
function acadPractice(c) {
  const pre = c.source || c.data ? `<details class="card mini-text" open><summary>${ic(c.data ? "table" : "book-open-text")} <span>${esc(c.data ? c.data.title : loc(c.source, "title"))}</span></summary>${acadSourceInner(c)}</details>` : "";
  const items = c.quiz.map((q) => Object.assign({ type: "mcq", from: q.src ? "The text" : "Understand" }, q, q.src && pre ? { pre } : {}));
  /* Two questions on the language bank: recognise the English phrase from its French meaning. */
  const bank = c.bank.flatMap((g) => g.items).map(([en, f]) => [en.replace(/…/g, "").trim().replace(/[,:]$/, ""), f]);
  shuffle(bank).slice(0, 2).forEach(([en, f]) => {
    const others = shuffle(bank.filter((x) => x[0] !== en)).slice(0, 2).map((x) => x[0]);
    if (others.length === 2) items.push({ type: "mcq", q: `Which phrase means « ${f} »?`, q_fr: `Quelle formule signifie « ${f} » ?`, o: [en, ...others], a: 0, from: "Language bank" });
  });
  return items;
}
function acadCard(c) {
  const r = acadState(c.id);
  return `<a class="card lesson-item ${acadDone(c.id) ? "done" : ""}" href="#/competences/${c.id}">
    <span class="lesson-num">${acadDone(c.id) ? ic("check") : acadNum(c)}</span>
    <span style="flex:1;min-width:0"><span class="row" style="gap:6px;margin-bottom:4px">${kindTag(c)}${r.best != null ? `<span class="small muted">${T("{a}/{b} in the practice", { a: r.best, b: r.total })}</span>` : ""}${r.wrote ? `<span class="small muted">${ic("pen-line")} ${T("task done")}</span>` : ""}</span>
    <h3 style="margin:0">${esc(loc(c, "title"))}</h3><span class="muted small">${esc(loc(c, "subtitle"))}</span></span>
  </a>`;
}
const acadRows = (u, kind) => ACAD().filter((x) => x.kind === kind && (x.units || []).includes(u.id)).map((x) => `<div class="row step-link"><span style="flex:1"><b>${T("Academic skills:")}</b> ${esc(loc(x, "title"))} ${acadDone(x.id) ? `<span class="tag tag-done">${ic("check")}</span>` : ""}</span><a class="btn btn-sm" href="#/competences/${x.id}">${ic("graduation-cap")} ${T("Open")}</a></div>`).join("");
function viewAcadHub() {
  const all = ACAD();
  const done = all.filter((c) => acadDone(c.id)).length;
  const wrote = all.filter((c) => acadState(c.id).wrote).length;
  app.innerHTML = `
    ${back("#/cours", "Course")}
    <h1>${T("Academic skills")}</h1>
    <p class="muted">${T("The skills taught in English for Academic Purposes courses at English-speaking universities, from B2 to C2: reading and note-taking, paraphrasing and summarising, essays, data, presentations, seminars, academic style, sources, critical thinking, reports, mediation, synthesis, research writing, editing and exams.")}</p>
    <div class="grid grid-2" style="margin:20px 0">
      <div class="card">
        <div class="row"><b>${T("{a} / {b} chapters", { a: done, b: all.length })}</b><span class="spacer"></span><span class="muted small">${Tn(wrote, "{n} task written", "{n} tasks written")}</span></div>
        <div class="progress" style="margin-top:10px"><div style="width:${pct(done, all.length)}%"></div></div>
        <div class="chips" style="margin-top:14px">${Object.entries(ACAD_KIND).map(([k, [icn, l]]) => `<span class="chip">${ic(icn)} ${T(l)} · ${all.filter((c) => c.kind === k).length}</span>`).join("")}</div>
      </div>
      <div class="card">
        <h3 style="margin:0 0 8px">${ic("graduation-cap")} ${T("How each chapter works")}</h3>
        <ol class="small" style="margin:0;padding-left:20px">
          <li>${T("Objectives and a clear explanation, in English or in French.")}</li>
          <li>${T("A real text, lecture or set of data to work with.")}</li>
          <li>${T("A bank of useful phrases, with audio.")}</li>
          <li>${T("About a dozen exercises.")}</li>
          <li>${T("A real task, with a model answer, a checklist and a correction by Claude.")}</li>
        </ol>
      </div>
    </div>
    ${levelGroups(all, acadCard, { started: (its) => its[0].level === "B2" || its.some((c) => acadDone(c.id)), stat: (its) => T("{a} / {b} done", { a: its.filter((c) => acadDone(c.id)).length, b: its.length }) })}`;
}
const recorderHtml = () => `<div class="row" style="margin-top:12px;gap:10px"><button class="btn btn-sm" id="recBtn">${ic("circle-dot")} ${T("Record myself")}</button><span class="muted small" id="recTime"></span><span id="myAudio"></span></div>`;
function bindRecorder() {
  if (!$("#recBtn")) return;
  let mediaRec = null, chunks = [], url = null, t0 = 0, timer = null;
  onCleanup(() => { try { if (mediaRec && mediaRec.state !== "inactive") mediaRec.stop(); } catch (e) {} clearInterval(timer); });
  $("#recBtn").onclick = async () => {
    const btn = $("#recBtn");
    if (mediaRec && mediaRec.state === "recording") { mediaRec.stop(); return; }
    if (!navigator.mediaDevices || !window.MediaRecorder) { toast(T("Recording isn't available here")); return; }
    try {
      stopAudio();
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      chunks = [];
      mediaRec = new MediaRecorder(stream);
      mediaRec.ondataavailable = (ev) => chunks.push(ev.data);
      mediaRec.onstop = () => {
        clearInterval(timer);
        stream.getTracks().forEach((t) => t.stop());
        if (!$("#myAudio")) return;
        if (url) URL.revokeObjectURL(url);
        url = URL.createObjectURL(new Blob(chunks, { type: mediaRec.mimeType }));
        $("#myAudio").innerHTML = `<audio controls src="${url}" style="height:36px;max-width:240px"></audio>`;
        btn.innerHTML = ic("circle-dot") + " " + T("Again");
        addXP(2, "speak");
      };
      mediaRec.start(); t0 = Date.now();
      btn.innerHTML = ic("square") + " " + T("Stop");
      timer = setInterval(() => { if ($("#recTime")) $("#recTime").textContent = mmss(Math.round((Date.now() - t0) / 1000)); }, 500);
    } catch (err) { toast(T("Allow microphone access in your browser")); }
  };
}
function viewAcadChapter(id) {
  const c = acadById(id);
  if (!c) return viewAcadHub();
  const all = ACAD(), i = all.indexOf(c), prev = all[i - 1], next = all[i + 1];
  const tk = c.task, key = "a:" + c.id;
  const st = () => (S.acad = S.acad || {}, S.acad[c.id] = S.acad[c.id] || {});
  const r = acadState(c.id);
  const lec = (S.notes["an:" + c.id] || {});
  let showFr = isFr() && !!c.body_fr;
  app.innerHTML = `
    ${back("#/competences", "Academic skills")}
    <article class="card lesson-body">
      <div class="row" style="margin-bottom:8px">${levelTag(c.level)}${kindTag(c)}<span class="muted small">${T("Chapter {a} of {b}", { a: i + 1, b: all.length })}</span><span class="spacer"></span>${c.body_fr ? `<button class="btn btn-sm" id="frToggle">${ic("languages")} ${toggleLabel(showFr)}</button>` : ""}</div>
      <div class="row" style="flex-wrap:nowrap;align-items:center">${tile(c.icon, c.level)}<h1 style="margin:0">${esc(loc(c, "title"))}</h1></div>
      <p class="muted" style="margin-top:10px">${esc(loc(c, "subtitle"))}</p>
      <section class="teacher-goals">
        <h3 style="margin:8px 0 6px">${T("By the end of this chapter, you'll be able to…")}</h3>
        <ul class="checklist">${c.can.map((x, k) => `<li>${ic("target")}<span>${instr(x, c.can_fr && c.can_fr[k])}</span></li>`).join("")}</ul>
      </section>
      <div id="lbody" class="${showFr && !FOREIGN ? "fr" : ""}" ${showFr ? 'lang="fr"' : ""}>${renderBody(showFr ? c.body_fr : c.body)}</div>
    </article>
    ${c.lecture ? `<section class="card">
      <h2>${ic("headphones")} ${esc(loc(c.lecture, "title"))}</h2>
      <p class="muted small">${T("Listen once without writing, then a second time while taking notes: your notes in the large box, key words and questions in the small one (the Cornell method). Answer the questions of the practice before reading the transcript.")}</p>
      <div class="row" style="gap:8px"><button class="btn btn-dark" id="lecPlay">${ic("play")} ${T("Play the lecture")}</button><button class="btn" id="lecSlow">${ic("snail")} ${T("Slowly")}</button><button class="btn" id="lecStop">${ic("square")} ${T("Stop")}</button></div>
      <div class="cornell">
        <textarea id="lecCues" class="field note" rows="6" placeholder="${T("Key words and questions")}" spellcheck="true" lang="${APP.target}">${esc(lec.cues || "")}</textarea>
        <textarea id="lecNotes" class="field note" rows="9" placeholder="${T("Notes")}" spellcheck="true" lang="${APP.target}">${esc(lec.notes || "")}</textarea>
      </div>
      <details class="cx-saved" style="margin-top:12px"><summary><b>${T("Transcript")}</b></summary><div class="reader">${c.lecture.paras.map((p) => `<p>${esc(p)}</p>`).join("")}</div></details>
    </section>` : ""}
    ${c.source || c.data ? `<section class="card">
      <h2>${ic(c.data ? "table" : "book-open-text")} ${esc(c.data ? c.data.title : loc(c.source, "title"))}</h2>
      ${c.source && c.source.note ? `<p class="muted small">${instr(c.source.note, c.source.note_fr)}</p>` : ""}
      ${c.source && !c.source.fr ? `<div class="row" style="margin-bottom:6px"><button class="btn btn-sm" data-say="${esc(acadSourceText(c))}">${ic("volume-2")} ${T("Listen")}</button></div>` : ""}
      ${acadSourceInner(c)}
    </section>` : ""}
    <section class="card">
      <h2>${ic("quote")} ${T("Language bank")}</h2>
      <p class="muted small">${T("Phrases to reuse in your own work. Listen, repeat, and use at least three of them in the task.")}</p>
      ${c.bank.map((g) => `<h3 style="margin:14px 0 4px">${esc(loc(g, "h"))}</h3><ul class="examples">${g.items.map(([en, f]) => `<li>${sayBtn(en.replace(/…/g, "").trim())}<div style="flex:1"><div class="en">${esc(en)}</div><div class="fr">${esc(f)}</div></div></li>`).join("")}</ul>`).join("")}
    </section>
    <section class="card" id="quizBox">
      <h2>${ic("list-checks")} ${T("Practice")}</h2>
      <p class="muted">${T("About a dozen exercises on the method, the text and the language of this chapter.")}</p>
      ${r.best != null ? `<p class="small">${T("Your best score:")} <b>${r.best} / ${r.total}</b></p>` : ""}
      <button class="btn btn-primary" id="startQuiz">${T("Start the practice")}</button>
    </section>
    <section class="card" id="taskBox">
      <h2>${ic(tk.speak ? "mic" : "pen-line")} ${T("Your task")}</h2>
      <p style="font-size:18px;margin:0"><b>${instr(tk.task, tk.task_fr)}</b></p>
      <p class="muted small" style="margin:8px 0 12px">${T("Length: {n} words.", { n: tk.words })}${tk.speak ? " " + T("Then say it out loud and record yourself.") : ""}</p>
      <textarea id="aText" class="field note" rows="10" placeholder="${T("Write here…")}" spellcheck="true" lang="${APP.target}">${esc(S.notes[key] || "")}</textarea>
      <div class="row" style="margin-top:10px">
        <span class="muted small" id="aCount"></span><span class="spacer"></span>
        <button class="btn btn-sm" id="aListen">${ic("volume-2")} ${T("Listen to my text")}</button>
        <button class="btn btn-sm btn-dark" id="aDone">${ic("check")} ${T("I've finished")}</button>
      </div>
      ${tk.speak ? recorderHtml() : ""}
      <div style="margin-top:16px">${correctionBox(key)}</div>
      <div id="aAfter" ${r.wrote ? "" : "hidden"} style="margin-top:18px">
        <h3>${ic("list-checks")} ${T("Check your text")}</h3>
        <ul class="selfcheck">${tk.checklist.map((x, k) => `<li><label><input type="checkbox" data-ck="${k}" ${r.checks && r.checks[k] ? "checked" : ""}> <span>${instr(x, tk.checklist_fr && tk.checklist_fr[k])}</span></label></li>`).join("")}</ul>
        <h3 style="margin-top:18px">${ic("book-open-text")} ${T("Model answer")}</h3>
        <p class="muted small">${T("Compare with your text: note two expressions you'd like to reuse.")}</p>
        <div class="model en">${esc(tk.model)}</div>
        <div class="row" style="margin-top:10px"><button class="btn btn-sm" data-say="${esc(tk.model)}">${ic("volume-2")} ${T("Listen")}</button><button class="btn btn-sm" data-say="${esc(tk.model)}" data-slow="1">${ic("snail")} ${T("Slowly")}</button></div>
      </div>
    </section>
    ${(c.more || []).length ? `<section class="card">
      <h2>${ic("external-link")} ${T("Go further")}</h2>
      ${c.more.map((m) => `<div class="row step-link"><span style="flex:1;min-width:0"><b>${esc(m.name)}</b><br><span class="muted small">${instr(m.desc, m.desc_fr)}</span></span><a class="btn btn-sm" target="_blank" rel="noopener" href="https://www.google.com/search?q=${encodeURIComponent(m.q)}">${T("Search")} ${ic("external-link")}</a></div>`).join("")}
    </section>` : ""}
    <div class="row" style="margin-top:16px">
      ${prev ? `<a class="btn" href="#/competences/${prev.id}">${ic("arrow-left")} ${T("Previous")}</a>` : ""}
      <span class="spacer"></span>
      ${next ? `<a class="btn btn-dark" href="#/competences/${next.id}">${T("Next chapter")} ${ic("arrow-right")}</a>` : `<a class="btn btn-dark" href="#/competences">${T("All chapters")} ${ic("arrow-right")}</a>`}
    </div>`;
  if ($("#frToggle")) $("#frToggle").onclick = () => {
    showFr = !showFr;
    $("#lbody").innerHTML = renderBody(showFr ? c.body_fr : c.body);
    $("#lbody").classList.toggle("fr", showFr && !FOREIGN);
    if (showFr) $("#lbody").setAttribute("lang", "fr"); else $("#lbody").removeAttribute("lang");
    $("#frToggle").innerHTML = `${ic("languages")} ${toggleLabel(showFr)}`;
  };
  if (c.lecture) {
    const lines = c.lecture.paras.map((p) => ["Lecturer", p]);
    $("#lecPlay").onclick = (e) => playLines(lines, e.currentTarget);
    $("#lecSlow").onclick = (e) => playLines(lines, e.currentTarget, 0.7);
    $("#lecStop").onclick = () => stopAudio();
    let lt;
    const saveLec = () => { clearTimeout(lt); lt = setTimeout(() => { S.notes["an:" + c.id] = { cues: $("#lecCues").value, notes: $("#lecNotes").value }; save(); }, 400); };
    $("#lecCues").oninput = saveLec; $("#lecNotes").oninput = saveLec;
  }
  $("#startQuiz").onclick = () => {
    const box = $("#quizBox");
    runQuiz(box, acadPractice(c), (score, total) => {
      const s = st(), first = s.best == null;
      Object.assign(s, { best: Math.max(score, s.best || 0), total, date: s.date || today() });
      addXP(first ? 10 + score * 2 : score, "lesson");
      box.innerHTML = `
        <div class="result-big">${score} / ${total}</div>
        <p style="text-align:center">${scoreMsg(score, total)}</p>
        <div class="row" style="justify-content:center">
          <button class="btn" id="retry">${T("Practise again")}</button>
          <a class="btn btn-primary" href="#taskBox" id="toTask">${T("Now, the task")} ${ic("arrow-right")}</a>
        </div>`;
      $("#retry").onclick = () => { viewAcadChapter(id); $("#startQuiz").click(); $("#quizBox").scrollIntoView({ block: "start" }); };
      $("#toTask").onclick = (e) => { e.preventDefault(); $("#taskBox").scrollIntoView({ behavior: "smooth", block: "start" }); };
    });
  };
  const ta = $("#aText");
  let tm;
  const count = () => { $("#aCount").textContent = T("{n} words", { n: nWords(ta.value) }); };
  count();
  ta.oninput = () => { count(); clearTimeout(tm); tm = setTimeout(() => { S.notes[key] = ta.value; save(); }, 400); };
  $("#aListen").onclick = (e) => { if (ta.value.trim()) speak(ta.value, e.currentTarget); else toast(T("Write your text first")); };
  $("#aDone").onclick = () => {
    if (nWords(ta.value) < 20) { toast(T("Write a little more first")); return; }
    S.notes[key] = ta.value;
    const s = st();
    if (!s.wrote) { s.wrote = today(); addXP(15, "free"); toast(T("Well done! Now check your text")); } else save();
    $("#aAfter").hidden = false;
    $("#aAfter").scrollIntoView({ behavior: "smooth", block: "start" });
  };
  $$("[data-ck]").forEach((x) => (x.onchange = () => { const s = st(); s.checks = s.checks || {}; s.checks[x.dataset.ck] = x.checked; save(); }));
  bindRecorder();
  bindCorrection(key, () => ({
    text: ta.value, level: c.level, title: `${T("Academic skills")} · ${loc(c, "title")}`,
    kind: `Academic skills task (${c.title})`, kind_fr: `Tâche de compétences universitaires (${c.title_fr})`,
    task: tk.task, task_fr: tk.task_fr, words: tk.words, criteria: tk.checklist, focus: c.can.join("; "),
    source: acadSourceText(c)
  }));
}

/* ================= Words in context =================
   The unit's words, met again in sentences from its texts and its listening lab: first choose the missing word,
   then write it with the French as a cue. Meeting a word again in new contexts is what makes it stick (Nation 2013). */
const CTX_SKIP = /^(the|and|but|or|in|on|at|to|of|for|with|what|where|when|who|why|how|which|yes|no|now|so|up|out|off|it|is|be|do|go|get|have|has|was|were|are|not|very|well|this|that|then|there|here|your|my|can|will)$/i;
function sentencesOf(t) {
  const parts = String(t).replace(/\s*\n\s*/g, " ").split(/([.!?][”"’']?)\s+/);
  const out = [];
  for (let i = 0; i < parts.length; i += 2) { const s = (parts[i] + (parts[i + 1] || "")).trim(); if (s) out.push(s); }
  return out;
}
const reEsc = (x) => x.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
function ctxItems(u) {
  const themes = u.vocab.map((id) => VOCAB.find((t) => t.id === id)).filter(Boolean);
  const words = [];
  themes.forEach((t) => t.words.forEach(([en, f, ex]) => en.split(" / ").forEach((p, k) => {
    const form = p.replace(/\((uk|us)\)/gi, "").replace(/[?!.…]/g, "").trim().replace(/^to /, "");
    const fs = f.split(" / ");
    if (form.length < 4 && !form.includes(" ")) return;
    if (CTX_SKIP.test(form) || words.some((w) => w.form.toLowerCase() === form.toLowerCase())) return;
    words.push({ form, fr: (fs.length > k ? fs[k] : f).replace(/[()]/g, "").trim(), ex });
  })));
  const unitTexts = [u.reading, ...(u.extra || [])].map((id) => READINGS.find((r) => r.id === id)).filter(Boolean);
  const pools = [
    unitTexts.flatMap((r) => r.paragraphs.flatMap((p) => sentencesOf(p.en).map((s) => ({ s, src: r })))),
    LAB().filter((x) => x.unit === u.id).flatMap((x) => x.lines.flatMap((l) => sentencesOf(l[1]).map((s) => ({ s, lab: x })))),
    READINGS.filter((r) => r.level === u.level && !unitTexts.includes(r)).flatMap((r) => r.paragraphs.flatMap((p) => sentencesOf(p.en).map((s) => ({ s, src: r }))))
  ].map((pool) => pool.filter((x) => x.s.split(/\s+/).length >= 5 && x.s.split(/\s+/).length <= 30));
  const used = new Set();
  const found = [];
  shuffle(words).forEach((w) => {
    const re = new RegExp("(^|[^A-Za-z'’-])(" + reEsc(w.form) + ")(?=$|[^A-Za-z'’-])", "i");
    for (let tier = 0; tier < pools.length; tier++) {
      const hit = pools[tier].find((x) => !used.has(x.s) && re.test(x.s));
      if (hit) { used.add(hit.s); const m = hit.s.match(re); found.push(Object.assign({ tier, word: m[2], gapped: hit.s.replace(re, "$1___") }, w, hit)); return; }
    }
    /* Last resort: the word's own example sentence. */
    if (w.ex && re.test(w.ex) && !used.has(w.ex)) { used.add(w.ex); const m = w.ex.match(re); found.push(Object.assign({ tier: 9, word: m[2], gapped: w.ex.replace(re, "$1___"), s: w.ex }, w)); }
  });
  const pick = found.sort((a, b) => a.tier - b.tier).slice(0, 10);
  const all = words.map((w) => w.form);
  return pick.map((x, k) => {
    const meta = { from: x.src ? `Text · ${x.src.title}` : x.lab ? `Listening lab · ${x.lab.title}` : "Words", srcId: x.src ? x.src.id : null, labId: x.lab ? x.lab.id : null, ctxWord: x.word };
    if (k < pick.length / 2) {
      const others = shuffle(pick.map((y) => y.word).filter((w) => w.toLowerCase() !== x.word.toLowerCase()));
      const extra = shuffle(all.filter((w) => w.toLowerCase() !== x.word.toLowerCase() && !others.includes(w)));
      const o = [x.word, ...others.slice(0, 2), ...extra.slice(0, 1)].slice(0, 4);
      return Object.assign({ type: "mcq", q: `Choose the missing word: “${x.gapped}”`, q_fr: `Choisis le mot qui manque : « ${x.gapped} »`, o, a: 0, ex: `${x.word} = ${x.fr}`, ex_fr: `${x.word} = ${x.fr}` }, meta);
    }
    return Object.assign({ type: "type", q: "Write the missing word.", q_fr: "Écris le mot qui manque.", sent: `${x.gapped} (${x.fr})`, answer: x.word }, meta);
  });
}
function viewContext(id) {
  const u = COURSE.find((x) => x.id === id);
  if (!u) return viewCourse();
  const items = ctxItems(u);
  const prev = (S.ctx || {})[u.id];
  app.innerHTML = `
    ${back(`#/unite/${u.id}`, `Unit ${unitNum(u)} · ${loc(u, "title")}`)}
    <h1>${ic("search")} ${T("Words in context")}</h1>
    <p class="muted">${T("The words of this unit, met again in sentences from its texts and recordings. First choose the missing word, then write it with the French as a cue. Each time you meet a word in a new sentence, it sticks a little more.")}</p>
    ${prev ? `<p class="small">${ic("check")} ${T("Last time: {a}/{b}", { a: prev.best, b: prev.total })}</p>` : ""}
    <section class="card" id="ctxBox">${items.length ? "" : `<p>${T("Not enough sentences for this unit yet.")}</p>`}</section>`;
  if (!items.length) return;
  runQuiz($("#ctxBox"), items, (score, total) => {
    S.ctx = S.ctx || {};
    const first = !S.ctx[u.id];
    S.ctx[u.id] = { best: Math.max(score, (prev && prev.best) || 0), total, date: today() };
    addXP(first ? 10 + score : score, first ? "vocab" : null);
    const srcs = [];
    items.forEach((q) => { const k = q.srcId ? "r:" + q.srcId : q.labId ? "l:" + q.labId : null; if (k && !srcs.includes(k)) srcs.push(k); });
    $("#ctxBox").innerHTML = `
      <div class="result-big">${score} / ${total}</div>
      <p style="text-align:center">${scoreMsg(score, total)}</p>
      <p class="muted small">${T("These sentences come from:")}</p>
      <div class="gr-links">${srcs.map((k) => { const [t, sid] = k.split(":"); const r = t === "r" ? READINGS.find((x) => x.id === sid) : labById(sid); return r ? `<a href="#/${t === "r" ? "lecture" : "comprehension"}/${sid}">${ic(t === "r" ? "book-open-text" : "headphones")} ${esc(loc(r, "title"))}</a>` : ""; }).join("")}</div>
      <div class="row" style="justify-content:center;margin-top:16px"><a class="btn" href="#/unite/${u.id}">${T("Back to Unit {n}", { n: unitNum(u) })}</a><button class="btn" id="ctxAgain">${T("New sentences")}</button>${continueBtn()}</div>`;
    $("#ctxAgain").onclick = () => viewContext(id);
  });
}

/* ================= Language workshop (B2 → C2) =================
   Collocations (the words that go together) and word formation, unit by unit, with an exercise in the format
   of the Cambridge exams. At these levels, precision comes less from new words than from how words combine. */
const LEX = () => window.LEXIS || {};
const lexUnits = () => COURSE.filter((u) => LEX()[u.id]);
const WF_TABLE = [
  ["nouns", "noms", "-tion, -ment, -ness, -ity, -ance / -ence", "decision, achievement, awareness, ability, reluctance"],
  ["adjectives", "adjectifs", "-ful, -less, -ous, -ive, -able / -ible, -al", "careless, ambitious, persuasive, reliable, logical"],
  ["adverbs", "adverbes", "-ly", "significantly, deliberately, invariably"],
  ["verbs", "verbes", "-ise / -ize, -ify, -en", "visualise, intensify, widen"],
  ["the opposite", "le contraire", "un-, in-, im-, il-, ir-, dis-, mis-", "unreliable, impolite, illogical, disagree, misinterpret"]
];
const lexPart = (id, part) => { const x = (S.lex || {})[id]; return x && x[part]; };
const lexDone = (id) => ["coll", "wf", "kwt"].filter((p) => lexPart(id, p)).length;
function lexItems(L, part, level) {
  if (part === "wf") return shuffle(L.wf).map(([sent, ans]) => {
    const [answer, ...accept] = ans.split("|");
    return { type: "type", q: "Use the word in capitals to form a word that fits the gap.", q_fr: "À partir du mot en capitales, forme le mot qui complète la phrase.", sent, answer, accept, from: "Word formation" };
  });
  if (part === "kwt") {
    const c2 = level === "C2";
    return shuffle(L.kwt).map(([first, key, second, ans]) => {
      const [answer, ...accept] = ans.split("|");
      return { type: "type", q: c2 ? "Complete the second sentence so that it means the same as the first. Use the word given, without changing it, and three to eight words." : "Complete the second sentence so that it means the same as the first. Use the word given, without changing it, and two to five words.", q_fr: c2 ? "Complète la seconde phrase pour qu'elle ait le même sens que la première, avec le mot donné, sans le modifier, en trois à huit mots." : "Complète la seconde phrase pour qu'elle ait le même sens que la première, avec le mot donné, sans le modifier, en deux à cinq mots.", big: first, sent: `${second} (${key})`, answer, accept, from: "Transformations" };
    });
  }
  const colloc = shuffle(L.colloc).slice(0, 6).map(([c, f, ex, gap, ds]) => {
    const re = new RegExp("(^|[^A-Za-z'’-])" + reEsc(gap) + "(?=$|[^A-Za-z'’-])");
    const g = ex.replace(re, "$1___");
    return { type: "mcq", q: `Choose the word that fits: “${g}”`, q_fr: `Choisis le mot qui convient : « ${g} »`, o: [gap, ...ds], a: 0, ex: `${c} = ${f}`, ex_fr: `${c} = ${f}`, from: "Collocations" };
  });
  const ids = shuffle(L.idioms || []);
  const idioms = ids.slice(0, 5).map(([e, m, f, ex, form]) => {
    const g = ex.replace(form, "___");
    const others = shuffle(ids.filter((x) => x[4] !== form)).slice(0, 3).map((x) => x[4]);
    return { type: "mcq", q: `Choose the expression that fits: “${g}”`, q_fr: `Choisis l'expression qui convient : « ${g} »`, o: [form, ...others], a: 0, ex: `${e}: ${m}`, ex_fr: `${e} = ${f}`, from: "Idioms" };
  });
  const match = ids.length >= 5 ? [{ type: "match", q: "Match each expression with its French equivalent.", q_fr: "Associe chaque expression à son équivalent français.", pairs: shuffle(ids).slice(0, 5).map(([e, , f]) => [e, f]), from: "Idioms" }] : [];
  return [...colloc, ...idioms, ...match];
}
const LEX_PARTS = [
  ["coll", "link", "Collocations and idioms", "Six collocations and five expressions to choose, then five expressions to match with their French equivalent."],
  ["wf", "layers", "Word formation", "Eight sentences: form the right word from the one in capitals."],
  ["kwt", "repeat", "Sentence transformations", "Six sentences to rewrite with the word given, as in the exam."]
];
function viewLexis(id) {
  const u = COURSE.find((x) => x.id === id), L = LEX()[id];
  if (!u || !L) return viewLexisHub();
  const c2 = u.level === "C2";
  app.innerHTML = `
    ${back(`#/unite/${u.id}`, `Unit ${unitNum(u)} · ${loc(u, "title")}`)}
    <div class="row" style="gap:8px">${levelTag(u.level)}<span class="muted small">${T("Language workshop")}</span>${lexDone(id) ? `<span class="tag tag-done">${ic("check")} ${lexDone(id)}/3</span>` : ""}</div>
    <h1>${ic("puzzle")} ${esc(loc(u, "title"))}</h1>
    <p class="muted">${T("At this level, sounding natural depends less on knowing more words than on combining them well. Four tools, as in the Cambridge exams: collocations, idioms and phrasal verbs, word formation, and sentence transformations.")}</p>
    <section class="card">
      <h2 style="margin-top:0">${ic("link")} ${T("Collocations")}</h2>
      <p class="muted small">${T("Learn them as blocks, never word by word: we say “heavy rain”, not “strong rain”, and “meet a deadline”, not “respect a deadline”. Listen, then say each one out loud.")}</p>
      <div class="lex-list">${L.colloc.map(([c, f, ex]) => `<div class="lex-item"><div class="row" style="gap:8px;flex-wrap:wrap"><b class="en">${esc(c)}</b>${sayBtn(c)}<span class="muted small no-tx">${esc(f)}</span></div><p class="en small" style="margin:4px 0 0">${esc(ex)} ${sayBtn(ex)}</p></div>`).join("")}</div>
    </section>
    ${L.idioms ? `<section class="card">
      <h2 style="margin-top:0">${ic("sparkles")} ${T("Idioms and phrasal verbs")}</h2>
      <p class="muted small">${T("Their meaning can't be guessed from the words: learn each one with its example. Use them sparingly in writing, more freely when you speak.")}</p>
      <div class="lex-list">${L.idioms.map(([e, m, f, ex]) => `<div class="lex-item"><div class="row" style="gap:8px;flex-wrap:wrap"><b class="en">${esc(e)}</b>${sayBtn(e)}</div><p class="small" style="margin:4px 0 0">${isFr() && !FOREIGN ? `<span class="no-tx">${esc(f)}</span>` : isFr() ? `<span class="en">${esc(m)}</span>` : `<span class="en">${esc(m)}</span> <span class="muted no-tx">· ${esc(f)}</span>`}</p><p class="en small" style="margin:4px 0 0">${esc(ex)} ${sayBtn(ex)}</p></div>`).join("")}</div>
    </section>` : ""}
    <section class="card">
      <h2 style="margin-top:0">${ic("layers")} ${T("Word formation")}</h2>
      <p class="muted small">${T("In the exam, you get a sentence with a gap and a word in capitals to transform. Ask yourself three questions: what kind of word does the gap need (noun, adjective, adverb, verb)? Singular or plural? Positive or negative meaning?")}</p>
      <div class="table-wrap"><table class="irr-table"><tr><th>${T("To make…")}</th><th>${T("Common endings")}</th><th>${T("Examples")}</th></tr>
        ${(APP.wfTable || WF_TABLE).map(([en, f, end, ex]) => `<tr><td>${esc(isFr() ? f : en)}</td><td class="no-tx">${esc(end)}</td><td class="en">${esc(ex)}</td></tr>`).join("")}</table></div>
    </section>
    ${L.kwt ? `<section class="card">
      <h2 style="margin-top:0">${ic("repeat")} ${T("Sentence transformations")}</h2>
      <p class="muted small">${T(c2 ? "Rewrite a sentence with a given word, keeping the meaning: three to eight words, and the word given must not change. It tests grammar and vocabulary at the same time." : "Rewrite a sentence with a given word, keeping the meaning: two to five words, and the word given must not change. It tests grammar and vocabulary at the same time.")}</p>
      ${(() => { const [k1, kk, k2, ku, k3] = APP.kwtExample || ["I regret not going to university.", "WISH", "I ", "wish I had gone", " to university."]; return `<div class="kwt-example"><p class="en" style="margin:0">${esc(k1)} <b>${esc(kk)}</b></p><p class="en" style="margin:6px 0 0">${esc(k2)}<u>${esc(ku)}</u>${esc(k3)}</p></div>`; })()}
      <p class="muted small" style="margin:10px 0 0">${T("Method: find the grammar point (here, a regret: wish + past perfect), write the answer, then check the word count and that the meaning hasn't changed.")}</p>
    </section>` : ""}
    <section class="card">
      <h2 style="margin-top:0">${ic("list-checks")} ${T("Practice")}</h2>
      <div class="stack">${LEX_PARTS.filter(([p]) => p !== "kwt" || L.kwt).map(([p, icon, title, d]) => { const r = lexPart(id, p); return `<div class="row step-link"><span style="flex:1"><b>${T(title)}</b> ${r ? `<span class="tag tag-done">${ic("check")} ${r.best}/${r.total}</span>` : ""}<br><span class="muted small">${T(d)}</span></span><button class="btn btn-sm btn-primary" data-part="${p}">${ic(icon)} ${T("Start")}</button></div>`; }).join("")}</div>
      <div id="lexBox" style="margin-top:12px"></div>
    </section>`;
  $$("[data-part]").forEach((b) => (b.onclick = () => {
    const part = b.dataset.part;
    const box = $("#lexBox");
    box.classList.add("card");
    box.scrollIntoView({ behavior: "smooth", block: "start" });
    runQuiz(box, lexItems(L, part, u.level), (score, total) => {
      S.lex = S.lex || {};
      const cur = S.lex[id] && S.lex[id].best == null ? S.lex[id] : {};
      const first = !cur[part];
      cur[part] = { best: Math.max(score, (cur[part] && cur[part].best) || 0), total, date: today() };
      S.lex[id] = cur;
      addXP(first ? 10 + score : score, first ? "vocab" : null);
      const i = lexUnits().indexOf(u), next = lexUnits()[i + 1];
      box.innerHTML = `<div class="result-big">${score} / ${total}</div><p style="text-align:center">${scoreMsg(score, total)}</p>
        <div class="row" style="justify-content:center"><button class="btn" id="lexBack">${T("Back to the workshop")}</button>${next && lexDone(id) === 3 ? `<a class="btn btn-primary" href="#/lexique/${next.id}">${T("Next workshop")} ${ic("arrow-right")}</a>` : ""}</div>`;
      $("#lexBack").onclick = () => viewLexis(id);
    });
  }));
}
function viewLexisHub() {
  const us = lexUnits();
  app.innerHTML = `
    ${back("#/vocabulaire", "Vocabulary")}
    <h1>${T("Language workshop, B2 to C2")}</h1>
    <p class="muted">${T("One workshop per unit, on the unit's theme: ten collocations, eight idioms and phrasal verbs, eight word-formation sentences and six sentence transformations, as in the Cambridge exams (B2 First, C1 Advanced, C2 Proficiency).")}</p>
    ${levelGroups(us, (u) => {
      const d = lexDone(u.id);
      return `<a class="card lesson-item ${d === 3 ? "done" : ""}" href="#/lexique/${u.id}">${tile(u.icon, u.level)}<span style="flex:1;min-width:0"><span class="muted small">${T("Unit")} ${unitNum(u)}</span><h3 style="margin:2px 0 0">${esc(loc(u, "title"))}</h3></span>${d ? `<span class="tag tag-done">${ic("check")} ${d}/3</span>` : ""}</a>`;
    }, { started: (its) => its.some((u) => lexDone(u.id)), stat: (its) => T("{a} / {b} done", { a: its.filter((u) => lexDone(u.id) === 3).length, b: its.length }) })}`;
}

/* ================= Listening lab =================
   One recording per unit, A1 to C2, with listening taught as a skill (Field 2008; Vandergrift & Goh 2012):
   predict, listen for the main idea, listen for detail, decode fast passages word by word,
   read while listening, repeat (shadowing), then notice what made it hard. */
const LAB = () => window.LAB || [];
const labById = (id) => LAB().find((x) => x.id === id);
const labDone = (id) => (S.lab || {})[id];
const LAB_RATE = { A1: 0.8, A2: 0.85, B1: 0.92, B2: 1, C1: 1, C2: 1.05 };
const LAB_HARD = [
  ["speed", "It was too fast", "Speed: listen once at normal speed, then slowly, then at normal speed again. Repeating just after the speaker (shadowing) trains your ear to keep up.", null],
  ["words", "I didn't know some words", "Vocabulary: learn the key words before you listen, and add the new ones to My words. Two or three unknown words are often enough to lose the thread.", ["#/mes-mots", "My words"]],
  ["linking", "The words ran together", "Connected speech: in natural English, words join together and small words almost disappear. The pronunciation chapter on linking shows you how.", ["#/prononciation/p-linking", "Pronunciation: linking"]],
  ["accent", "The accent was unfamiliar", "Accents: the more voices you hear, the faster you adapt. Try the chapter on accents, and podcasts or series from different countries.", ["#/prononciation/p-accents", "Pronunciation: accents"]],
  ["focus", "I lost concentration", "Concentration: read the questions and predict the answers before you listen. Then listen in short parts and pause between them.", null],
  ["ok", "Nothing in particular", "Well done! Try the next recording, or listen to a podcast at your level without the text.", ["#/ecoute", "My listening plan"]]
];
const labRow = (u) => LAB().filter((x) => x.unit === u.id).map((x) => `<div class="row step-link"><span style="flex:1"><b>${T("Listening lab:")}</b> ${esc(loc(x, "title"))} ${labDone(x.id) ? `<span class="tag tag-done">${ic("check")} ${labDone(x.id).best}/${labDone(x.id).total}</span>` : ""}</span><a class="btn btn-sm" href="#/comprehension/${x.id}">${ic("headphones")} ${T("Listen")}</a></div>`).join("");
function viewLab(id) {
  const x = labById(id);
  if (!x) return viewLabHub();
  const u = COURSE.find((c) => c.id === x.unit);
  const rate = LAB_RATE[x.level] || 0.9;
  const prev = labDone(id);
  let slow = false, plays = 0, score = 0;
  const total = 1 + x.detail.length + x.decode.length;
  const mcq = ([q, o]) => ({ type: "mcq", q, o, a: 0 });
  const lineSay = (l) => `<button class="speak" data-say="${esc(l[1])}"${l[2] ? ` data-lang="${l[2]}"` : ""} aria-label="${T("Listen")}" title="${T("Listen")}">${ic("volume-2")}</button>`;
  const step = (n, title, sub, body) => `<section class="card lab-step" id="ls${n}" ${n > 1 ? "hidden" : ""}><h2 style="margin-top:0"><span class="step-n">${n}</span> ${T(title)}</h2><p class="muted small">${T(sub)}</p>${body}</section>`;
  app.innerHTML = `
    ${back(u ? `#/unite/${u.id}` : "#/comprehension", u ? `Unit ${unitNum(u)} · ${loc(u, "title")}` : "Listening lab")}
    <article class="card">
      <div class="row" style="margin-bottom:8px">${levelTag(x.level)}<span class="muted small">${T("Listening lab")}</span><span class="spacer"></span>${prev ? `<span class="tag tag-done">${ic("check")} ${prev.best}/${prev.total}</span>` : ""}</div>
      <div class="row" style="flex-wrap:nowrap">${tile(x.icon, x.level)}<h1 style="margin:0">${esc(loc(x, "title"))}</h1></div>
      <p style="margin-top:12px">${instr(x.context, x.context_fr)}</p>
      <h3>${ic("lightbulb")} ${T("Before you listen")}</h3>
      <p class="muted small">${T("Listen to the key words. Then take ten seconds to imagine the conversation: who says what? Predicting makes listening much easier.")}</p>
      <div class="ipa-chips">${x.words.map(([en, f]) => `<span class="ipa-chip"><span class="en">${esc(en)}</span>${fr(f)} ${sayBtn(en)}</span>`).join("")}</div>
    </article>
    <div class="card lab-player">
      <button class="btn btn-primary" id="labPlay">${ic("play")} ${T("Listen")}</button>
      <button class="btn btn-sm" id="labSlow" aria-pressed="false">${ic("snail")} ${T("Slower")}</button>
      <span class="muted small" id="labCount">${T("Not listened yet")}</span>
    </div>
    ${step(1, "First listening: the main idea", "Listen once, without trying to understand every word. Then answer.", `<div id="lq1"></div>`)}
    ${step(2, "Second listening: the details", "Read the questions first, then listen again. Two listens before answering is normal, as in exams.", `<button class="btn btn-sm" id="lgo2">${ic("list-checks")} ${T("I've read the questions, show them")}</button><div id="lq2"></div>`)}
    ${step(3, "Catch every word", "Two short passages at natural speed. Write exactly what you hear: it trains your ear to separate the words.", `<div id="lq3"></div>`)}
    ${step(4, "Read while you listen", "Now listen again while reading. Click on any word you don't know, and notice what you missed.", `<div class="tip">${ic("lightbulb", "box-ic")} ${instr(x.tip, x.tip_fr)}</div><div class="lab-script">${x.lines.map((l) => `<p class="en"><span class="speaker">${esc(l[0])}</span> ${esc(l[1])} ${lineSay(l)}</p>`).join("")}</div><div class="row" style="margin-top:12px"><button class="btn btn-sm btn-dark" id="lgo5">${T("Continue")} ${ic("arrow-right")}</button></div>`)}
    ${step(5, "Say it like them", "Repeat each passage just after the model, copying the rhythm and the way the words join together.", `<div id="lq5"></div>`)}
    ${step(6, "What made it difficult?", "Noticing what blocks you is part of the method: choose everything that applies.", `<div class="lab-hard">${LAB_HARD.map(([k, t]) => `<button class="btn btn-sm" data-hard="${k}" aria-pressed="false">${T(t)}</button>`).join("")}</div><div class="row" style="margin-top:12px"><button class="btn btn-primary" id="labFinish">${ic("check")} ${T("Finish")}</button></div><div id="labTips"></div>`)}`;
  /* Steps with audio (dictation, repeating) only start when they appear: otherwise they would play at once. */
  const starters = {};
  const show = (n) => { const el = $("#ls" + n); if (!el) return; el.hidden = false; if (starters[n]) { starters[n](); delete starters[n]; } el.scrollIntoView({ behavior: "smooth", block: "start" }); };
  $("#labPlay").onclick = async () => {
    const btn = $("#labPlay");
    if (btn.classList.contains("playing")) { stopAudio(); btn.classList.remove("playing"); return; }
    plays++;
    $("#labCount").textContent = Tn(plays, "Listened {n} time", "Listened {n} times");
    await playLines(x.lines, btn, slow ? rate * 0.8 : rate);
    if ($("#labPlay") === btn) btn.classList.remove("playing");
  };
  $("#labSlow").onclick = () => { slow = !slow; $("#labSlow").classList.toggle("on", slow); $("#labSlow").setAttribute("aria-pressed", slow); };
  runQuiz($("#lq1"), [mcq(x.gist)], (s) => { score += s; $("#lq1").innerHTML = `<p class="small">${ic(s ? "circle-check" : "circle-x")} ${T(s ? "You got the main idea." : "Not quite, but that's what the next listens are for.")}</p>`; show(2); });
  $("#lgo2").onclick = () => {
    $("#lgo2").remove();
    runQuiz($("#lq2"), x.detail.map(mcq), (s, t) => { score += s; $("#lq2").innerHTML = `<p class="small">${T("{a} / {b} details.", { a: s, b: t })}</p>`; show(3); });
  };
  starters[3] = () => runQuiz($("#lq3"), x.decode.map((text) => ({ type: "dict", text })), (s) => { score += s; $("#lq3").innerHTML = `<p class="small">${T("{a} / {b} passages written correctly.", { a: s, b: x.decode.length })}</p>`; show(4); });
  $("#lgo5").onclick = () => { $("#lgo5").remove(); show(5); };
  starters[5] = () => runQuiz($("#lq5"), x.decode.map((en) => ({ type: "say", en })), () => { $("#lq5").innerHTML = `<p class="small">${ic("circle-check")} ${T("Well done. Saying it out loud fixes it in your ear.")}</p>`; show(6); });
  const picked = new Set((prev && prev.hard) || []);
  $$("[data-hard]").forEach((b) => {
    b.classList.toggle("on", picked.has(b.dataset.hard));
    b.onclick = () => { const k = b.dataset.hard; if (picked.has(k)) picked.delete(k); else { if (k === "ok") picked.clear(); else picked.delete("ok"); picked.add(k); } $$("[data-hard]").forEach((y) => { y.classList.toggle("on", picked.has(y.dataset.hard)); y.setAttribute("aria-pressed", picked.has(y.dataset.hard)); }); };
  });
  $("#labFinish").onclick = () => {
    S.lab = S.lab || {};
    const first = !S.lab[id];
    S.lab[id] = { best: Math.max(score, (prev && prev.best) || 0), total, date: today(), hard: [...picked], last: score };
    addXP(first ? 15 + score * 2 : score, first ? "step" : null);
    const next = LAB()[LAB().indexOf(x) + 1];
    $("#labTips").innerHTML = `
      <div class="result-big">${score} / ${total}</div>
      ${LAB_HARD.filter(([k]) => picked.has(k)).map(([, t, tip, link]) => `<div class="tip">${ic("lightbulb", "box-ic")} <b>${T(t)}.</b> ${T(tip)}${link ? ` <a href="${link[0]}">${T(link[1])}</a>` : ""}</div>`).join("")}
      <div class="row" style="justify-content:center;margin-top:12px">${u ? `<a class="btn" href="#/unite/${u.id}">${T("Back to Unit {n}", { n: unitNum(u) })}</a>${continueBtn()}` : next ? `<a class="btn btn-primary" href="#/comprehension/${next.id}">${T("Next recording")} ${ic("arrow-right")}</a>` : `<a class="btn btn-primary" href="#/comprehension">${T("Listening lab")}</a>`}</div>`;
    $("#labFinish").remove();
    $("#labTips").scrollIntoView({ behavior: "smooth", block: "start" });
  };
}
function viewLabHub() {
  const done = LAB().filter((x) => labDone(x.id)).length;
  const counts = {};
  LAB().forEach((x) => ((labDone(x.id) || {}).hard || []).forEach((k) => { counts[k] = (counts[k] || 0) + 1; }));
  const top = LAB_HARD.filter(([k]) => k !== "ok" && counts[k]).sort((a, b) => counts[b[0]] - counts[a[0]])[0];
  app.innerHTML = `
    <h1>${T("Listening lab")}</h1>
    <p class="muted">${T("In real life, nobody gives you the text. These recordings train listening as a skill, step by step, as research on listening recommends (Field, 2008; Vandergrift and Goh, 2012): predict, listen for the main idea, then for the details, write the fast passages word by word, read while listening, repeat, and notice what was hard.")}</p>
    <div class="grid grid-2" style="margin:16px 0">
      <div class="card"><b>${T("{a} / {b} recordings", { a: done, b: LAB().length })}</b><div class="progress" style="margin-top:10px"><div style="width:${pct(done, LAB().length)}%"></div></div><p class="muted small" style="margin:8px 0 0">${T("One per unit, from A1 to C2. You'll also find each one in its unit's path.")}</p></div>
      <div class="card">${top ? `<b>${ic("target")} ${T("What blocks you most often: {t}", { t: T(top[1]).toLowerCase() })}</b><p class="small" style="margin:8px 0 0">${T(top[2])}${top[3] ? ` <a href="${top[3][0]}">${T(top[3][1])}</a>` : ""}</p>` : `<b>${ic("lightbulb")} ${T("How to use it")}</b><p class="small" style="margin:8px 0 0">${T("Do one recording per unit, at your level. At the end, say what made it difficult: the lab will show you what to work on.")}</p>`}</div>
    </div>
    ${levelGroups(LAB(), (x) => {
      const d = labDone(x.id), u = COURSE.find((c) => c.id === x.unit);
      return `<a class="card lesson-item ${d ? "done" : ""}" href="#/comprehension/${x.id}">
        ${tile(x.icon, x.level)}
        <span style="flex:1;min-width:0"><span class="muted small">${u ? `${T("Unit")} ${unitNum(u)} · ${esc(loc(u, "title"))}` : ""}</span><h3 style="margin:2px 0 0">${esc(loc(x, "title"))}</h3></span>
        ${d ? `<span class="tag tag-done">${ic("check")} ${d.best}/${d.total}</span>` : ""}
      </a>`;
    }, { started: (its) => its.some((x) => labDone(x.id)), stat: (its) => T("{a} / {b} done", { a: its.filter((x) => labDone(x.id)).length, b: its.length }) })}`;
}

/* ================= Placement test, can-do grids, skills report =================
   As at university: an adaptive test per skill (one level up after a set that goes well, one level down
   after a set that doesn't, and it stops at the boundary), a vocabulary-size check with pseudo-words
   (Meara's yes/no method), writing and speaking assessed with Claude against the CEFR criteria,
   and self-assessment grids. Levels are indexes: -1 = before A1 ("Pre-A1"), 0 = A1 … 5 = C2. */
const PL = () => window.PLACEMENT || { grammar: {}, reading: {}, listening: {}, pseudo: [], writing: {}, speaking: {} };
const CD = () => window.CANDO || [];
const lvIdx = (L) => LV.indexOf(L);
const lvLabel = (i) => (i < 0 ? "Pre-A1" : LV[Math.min(i, LV.length - 1)]);
const lvTag = (L) => (lvIdx(L) < 0 ? `<span class="tag">Pre-A1</span>` : levelTag(L));
const placeState = () => (S.place = S.place || {});
const niceDate = (d) => new Date(d + "T12:00:00").toLocaleDateString(locale(), { day: "numeric", month: "long", year: "numeric" });
const PLACE_SECS = [
  { id: "grammar", icon: "book-open", title: "Grammar and vocabulary", min: 10, d: "Choose the word or phrase that completes each sentence." },
  { id: "vocab", icon: "layers", title: "Vocabulary size", min: 5, d: "Say which words you know. Careful: some of them don't exist!" },
  { id: "reading", icon: "book-open-text", title: "Reading", min: 15, d: "Read short texts and answer questions about them." },
  { id: "listening", icon: "headphones", title: "Listening", min: 10, d: "Listen to conversations and talks, twice at most." },
  { id: "writing", icon: "pen-line", title: "Writing", min: 25, d: "Write a text, then Claude estimates your level with the CEFR criteria." },
  { id: "speaking", icon: "mic", title: "Speaking", min: 15, d: "Speak on a topic, then take a short oral exam with Claude." }
];
const PLACE_RATE = { A1: 0.8, A2: 0.85, B1: 0.92, B2: 1, C1: 1, C2: 1.05 };
const SELF_OPTS = [
  ["pre", "I'm a complete beginner."],
  ["A1", "I know some words and very simple phrases."],
  ["A2", "I can manage simple, everyday situations."],
  ["B1", "I can cope with most everyday situations and talk about familiar topics."],
  ["B2", "I can discuss many topics with some fluency."],
  ["C1", "I'm at ease in almost any situation, even complex ones."]
];
/* Where the adaptive test starts: the grammar result if there is one, else what you said about yourself. */
function placeStart(sec) {
  const st = placeState();
  if (sec !== "grammar" && st.grammar) return LV[Math.min(Math.max(0, lvIdx(st.grammar.level)), 4)];
  if (st.self && st.self !== "pre") return LV[Math.min(lvIdx(st.self), 4)];
  return st.self === "pre" ? "A1" : currentLevel();
}
function savePlace(sec, data) {
  const st = placeState();
  st[sec] = data;
  st.history = st.history || [];
  let h = st.history.find((x) => x.date === today());
  if (!h) { h = { date: today() }; st.history.push(h); }
  h[sec] = data.level;
  addXP(10);
}
/* One set of screens for one level. Reading and listening alternate between the two texts of a level. */
function placeBlock(sec, L) {
  const P = PL();
  const mk = (q, o, extra) => Object.assign({ q, o, a: 0, order: shuffle(o.map((_, k) => k)) }, extra || {});
  if (sec === "grammar") return shuffle(P.grammar[L] || []).slice(0, 6).map(([q, o, f, f_fr]) => ({ qs: [mk(q, o, { f, f_fr })] }));
  const pool = (P[sec] || {})[L] || [];
  if (!pool.length) return [];
  const st = placeState(); st.seen = st.seen || {};
  const key = sec + ":" + L;
  const idx = st.seen[key] == null ? Math.floor(Math.random() * pool.length) : (st.seen[key] + 1) % pool.length;
  st.seen[key] = idx;
  const it = pool[idx];
  if (sec === "reading") return [{ text: it, qs: it.qs.map(([q, o]) => mk(q, o)) }];
  if (it.set) return it.set.map((m) => ({ audio: m.lines, qs: [mk(m.q, m.o)] }));
  return [{ audio: it.lines, title: it.title, qs: it.qs.map(([q, o]) => mk(q, o)) }];
}
const gapQ = (q) => esc(q).replace(/_{3,}/, '<span class="gap">&nbsp;</span>');
/* Screens without feedback (it's a test), with "I don't know" so that nobody has to guess. */
function runPlaceScreens(el, screens, meta, done) {
  let s = 0, ok = 0, n = 0;
  const answers = [];
  function show() {
    stopAudio();
    if (s >= screens.length) return done(ok, n, answers);
    const sc = screens[s];
    const many = sc.qs.length > 1;
    let left = 2;
    el.innerHTML = `
      <div class="row small muted"><span>${esc(meta.title)}</span><span class="spacer"></span><span>${T("Set {n}", { n: meta.step })} · ${s + 1} / ${screens.length}</span></div>
      <div class="progress" style="margin:8px 0 18px"><div style="width:${(s / screens.length) * 100}%"></div></div>
      ${sc.text ? `<div class="doc en place-text"><b>${esc(sc.text.title)}</b>${sc.text.paras.map((p) => `<p>${esc(p)}</p>`).join("")}</div>` : ""}
      ${sc.audio ? `<div class="listen-box"><p class="small" style="margin:0 0 10px">${sc.title ? `<b>${esc(sc.title)}</b> · ` : ""}${T(many ? "Read the questions, then listen." : "Read the question, then listen.")}</p><div class="row"><button class="btn btn-primary" id="pPlay">${ic("play")} ${T("Listen")}</button><span class="muted small" id="pLeft">${T("You can listen twice.")}</span></div></div>` : ""}
      ${sc.qs.map((q, k) => `<div class="tq pq-${k}"><p class="quiz-q en"${many ? ' style="font-size:17px"' : ""}>${many ? `${k + 1}. ` : ""}${gapQ(q.q)}</p>
        ${q.order.map((j) => `<button class="option en" data-q="${k}" data-k="${j}">${esc(q.o[j])}</button>`).join("")}
        <button class="option option-idk" data-q="${k}" data-k="-1">${T("I don't know")}</button></div>`).join("")}
      <div class="row" style="margin-top:16px"><button class="btn btn-dark" id="pNext" disabled>${T(s + 1 < screens.length ? "Next" : "Continue")} ${ic("arrow-right")}</button></div>`;
    const chosen = sc.qs.map(() => null);
    $$(".option", el).forEach((b) => (b.onclick = () => {
      const k = +b.dataset.q;
      chosen[k] = +b.dataset.k;
      $$(`.pq-${k} .option`, el).forEach((x) => x.classList.toggle("chosen", x === b));
      $("#pNext").disabled = chosen.some((c) => c === null);
      if (!$("#pNext").disabled && !many) $("#pNext").focus();
    }));
    if (sc.audio) $("#pPlay").onclick = async () => {
      const btn = $("#pPlay");
      if (left <= 0 || btn.disabled) return;
      left--;
      btn.disabled = true;
      $("#pLeft").textContent = T(left ? "Listening…" : "Last listen.");
      await playLines(sc.audio, btn, meta.rate);
      if ($("#pPlay") === btn) { btn.disabled = left <= 0; $("#pLeft").textContent = T(left > 0 ? "You can listen once more." : "No more listens."); }
    };
    $("#pNext").onclick = () => {
      sc.qs.forEach((q, k) => { const good = chosen[k] === q.a; n++; if (good) ok++; answers.push(Object.assign({}, q, { chosen: chosen[k], ok: good, screen: sc })); });
      s++; show();
    };
  }
  show();
}
function runStaircase(el, sec, start, done) {
  const passed = [], failed = [], answers = [];
  const need = sec === "grammar" ? 4 : 3;
  const title = T(PLACE_SECS.find((x) => x.id === sec).title);
  let i = Math.max(0, lvIdx(start));
  const finish = () => { save(); done(passed.length ? Math.max(...passed) : -1, answers); };
  const step = () => {
    const L = LV[i];
    const screens = placeBlock(sec, L);
    if (!screens.length) return finish();
    runPlaceScreens(el, screens, { title, step: passed.length + failed.length + 1, rate: PLACE_RATE[L] }, (ok, n, ans) => {
      ans.forEach((a) => (a.L = L));
      answers.push(...ans);
      if (ok >= need) { passed.push(i); if (i + 1 >= LV.length || failed.includes(i + 1)) return finish(); i++; }
      else { failed.push(i); if (i === 0 || passed.includes(i - 1)) return finish(); i--; }
      step();
    });
  };
  step();
}
function placeReview(answers) {
  const miss = answers.filter((a) => !a.ok);
  if (!miss.length) return `<p class="muted" style="text-align:center">${T("No mistakes at all. Impressive!")}</p>`;
  const shown = new Set();
  return `<details class="card place-review"><summary><b>${Tn(miss.length, "See the {n} question I missed", "See the {n} questions I missed")}</b></summary>
    ${miss.map((a) => {
      let ctx = "";
      if (!shown.has(a.screen) && a.screen.text) ctx = `<details class="script"><summary>${esc(a.screen.text.title)}</summary>${a.screen.text.paras.map((p) => `<p class="en">${esc(p)}</p>`).join("")}</details>`;
      if (!shown.has(a.screen) && a.screen.audio) ctx = `<details class="script"><summary>${T("Transcript")}</summary>${a.screen.audio.map(([sp, t]) => `<p class="en">${sp ? `<b>${esc(sp)}:</b> ` : ""}${esc(t)} ${sayBtn(t)}</p>`).join("")}</details>`;
      shown.add(a.screen);
      const mine = a.chosen === -1 || a.chosen == null ? T("I don't know") : a.o[a.chosen];
      const q = /_{3,}/.test(a.q) ? esc(a.q).replace(/_{3,}/, `<b class="c-green">${esc(a.o[0])}</b>`) : `${esc(a.q)}<br>${ic("check", "c-green")} <b>${esc(a.o[0])}</b>`;
      return `<div class="review-item">${ctx}<p class="en" style="margin:10px 0 2px">${levelTag(a.L)} ${q}</p>
        <p class="small muted" style="margin:0">${T("My answer:")} <span class="en">${esc(mine)}</span>${a.f ? ` · ${esc(isFr() ? a.f_fr : a.f)}` : ""}</p></div>`;
    }).join("")}
  </details>`;
}
function placeResult(el, sec, lvl, answers, min) {
  const ok = answers.filter((a) => a.ok).length;
  const L = lvLabel(lvl);
  el.classList.remove("no-tx");
  const next = PLACE_SECS[PLACE_SECS.findIndex((x) => x.id === sec) + 1];
  el.innerHTML = `
    <div class="result-big">${L}</div>
    <p style="text-align:center;margin:0">${lvl < 0 ? T("You're at the very start, and that's fine: the course begins at A1.") : T("Your level in this part: <b>{l}</b> · {n}", { l: L, n: esc(lvName(L)) })}</p>
    <p class="muted small" style="text-align:center">${T("{a} correct answers out of {b}, in {m} min.", { a: ok, b: answers.length, m: min })} ${lvl < LV.length - 1 ? T("Next level to aim for: {l}.", { l: LV[lvl + 1] }) : ""}</p>
    ${placeReview(answers)}
    <div class="row" style="justify-content:center;margin-top:16px"><a class="btn" href="#/placement">${T("Back to the placement test")}</a>${next ? `<a class="btn btn-primary" href="#/placement/${next.id}">${T(next.title)} ${ic("arrow-right")}</a>` : `<a class="btn btn-primary" href="#/bilan">${T("My skills report")} ${ic("arrow-right")}</a>`}</div>`;
}
const PLACE_RULES = {
  grammar: ["The test adapts to you: after a set that goes well, the next one is harder; otherwise it's easier. It stops when it has found your level.", "Six sentences per set, from A1 to C2. Most people answer between 12 and 24 questions."],
  reading: ["One text per set, with four questions. The texts get longer and harder as you go up.", "Read at your natural pace: there's no time limit, but don't read each text three times."],
  listening: ["Read the questions first, then listen. You can listen twice, as in real exams.", "Use headphones if you can, and don't slow the voice down: the speed is part of the level."]
};
function viewPlaceSection(sec) {
  const meta = PLACE_SECS.find((x) => x.id === sec);
  if (!meta) return viewPlacement();
  if (sec === "vocab") return viewPlaceVocab();
  if (sec === "writing" || sec === "speaking") return viewPlaceProduce(sec);
  const prev = placeState()[sec];
  app.innerHTML = `
    ${back("#/placement", "Placement test")}
    <h1>${ic(meta.icon)} ${T(meta.title)}</h1>
    <p class="muted">${T(meta.d)} ${T("About {m} minutes.", { m: meta.min })}${prev ? ` ${T("Last result: {l} on {d}.", { l: prev.level, d: niceDate(prev.date) })}` : ""}</p>
    <section class="card no-tx" id="placeBox">
      <ul class="checklist">${[...PLACE_RULES[sec], "If you don't know, choose “I don't know”: a lucky guess makes the result less accurate.", "No dictionary and no translation: the test measures what you can do on your own today."].map((r) => `<li>${ic("check")}<span>${T(r)}</span></li>`).join("")}</ul>
      ${sec === "listening" && !synth ? `<div class="note-warn">${T("Your browser can't read texts aloud, so the listening test isn't available here. Try Safari or Chrome.")}</div>` : `<button class="btn btn-primary" id="go">${T("Start")}</button>`}
    </section>`;
  if (!$("#go")) return;
  $("#go").onclick = () => {
    const t0 = Date.now();
    runStaircase($("#placeBox"), sec, placeStart(sec), (lvl, answers) => {
      const min = Math.max(1, Math.round((Date.now() - t0) / 60000));
      const focus = [];
      answers.filter((a) => !a.ok && a.f).forEach((a) => { if (!focus.some(([f]) => f === a.f)) focus.push([a.f, a.f_fr]); });
      savePlace(sec, { level: lvLabel(lvl), date: today(), ok: answers.filter((a) => a.ok).length, n: answers.length, min, focus });
      placeResult($("#placeBox"), sec, lvl, answers, min);
    });
  };
}

/* Vocabulary size: 10 words per level from the course lists + 20 pseudo-words. Saying "I know it" to a
   word that doesn't exist reveals guessing, and the score is corrected for it. */
function vocabSample() {
  const P = PL();
  const fake = new Set(P.pseudo || []), seen = new Set(), items = [];
  LV.forEach((L) => {
    const pool = [];
    VOCAB.filter((t) => t.level === L && !t.toeic).forEach((t) => t.words.forEach(([en]) => { const w = String(en).trim(); if (/^[a-z]{3,}$/.test(w) && !fake.has(w) && !seen.has(w)) { seen.add(w); pool.push(w); } }));
    shuffle(pool).slice(0, 10).forEach((w) => items.push({ w, L }));
  });
  (P.pseudo || []).forEach((w) => items.push({ w, L: null }));
  return shuffle(items);
}
function vocabScore(items, res) {
  const nFake = items.filter((x) => !x.L).length;
  const fa = items.filter((x, k) => !x.L && res[k]).length;
  const f = nFake ? fa / nFake : 0;
  const per = {};
  let size = 0, prev = 0;
  LEVELS.forEach((lv) => {
    const its = items.map((x, k) => [x, res[k]]).filter(([x]) => x.L === lv.id);
    const h = its.length ? its.filter(([, r]) => r).length / its.length : 0;
    const c = f >= 1 ? 0 : Math.max(0, (h - f) / (1 - f));
    per[lv.id] = Math.round(c * 100);
    size += c * (lv.words - prev);
    prev = lv.words;
  });
  size = Math.round(size / 50) * 50;
  /* A level needs enough words in total AND a fair share (40%, with only 10 words per level) of each level up to it. */
  let level = -1;
  for (let i = 0; i < LEVELS.length; i++) { if (size >= 0.8 * LEVELS[i].words && per[LEVELS[i].id] >= 40) level = i; else break; }
  return { level: lvLabel(level), size, fa, nFake, per };
}
function viewPlaceVocab() {
  const prev = placeState().vocab;
  app.innerHTML = `
    ${back("#/placement", "Placement test")}
    <h1>${ic("layers")} ${T("Vocabulary size")}</h1>
    <p class="muted">${T("80 words, one at a time: about 5 minutes. The words come from the course lists, from A1 to C2, and some are invented.")}${prev ? ` ${T("Last result: {l} on {d}.", { l: prev.level, d: niceDate(prev.date) })}` : ""}</p>
    <section class="card no-tx" id="vBox">
      <ul class="checklist">${["Answer “I know this word” only if you could give its meaning or use it in a sentence. Having seen it somewhere isn't enough.", "Some words don't exist in English. If you say you know them, your score goes down: it's how the test corrects for guessing.", "Answer quickly, following your first impression."].map((r) => `<li>${ic("check")}<span>${T(r)}</span></li>`).join("")}</ul>
      <button class="btn btn-primary" id="go">${T("Start")}</button>
    </section>`;
  $("#go").onclick = () => {
    const el = $("#vBox"), items = vocabSample(), res = [];
    const t0 = Date.now();
    let i = 0;
    const answer = (y) => { if (i >= items.length) return; res.push(y); i++; show(); };
    const key = (e) => { if (!$("#vYes")) return; if (e.key === "ArrowRight") answer(true); else if (e.key === "ArrowLeft") answer(false); };
    document.addEventListener("keydown", key);
    onCleanup(() => document.removeEventListener("keydown", key));
    const show = () => {
      if (i >= items.length) { document.removeEventListener("keydown", key); return finish(); }
      el.innerHTML = `
        <div class="row small muted"><span>${T("Vocabulary size")}</span><span class="spacer"></span><span>${i + 1} / ${items.length}</span></div>
        <div class="progress" style="margin:8px 0 18px"><div style="width:${(i / items.length) * 100}%"></div></div>
        <div class="vocab-word en">${esc(items[i].w)}</div>
        <div class="row vocab-btns"><button class="btn" id="vNo">${ic("x")} ${T("I don't know this word")}</button><button class="btn btn-dark" id="vYes">${ic("check")} ${T("I know this word")}</button></div>
        <p class="muted small kbd-hint" style="text-align:center;margin:12px 0 0">${T("On a keyboard: ← I don't know this word · → I know this word")}</p>`;
      $("#vYes").onclick = () => answer(true);
      $("#vNo").onclick = () => answer(false);
    };
    const finish = () => {
      const r = vocabScore(items, res);
      const min = Math.max(1, Math.round((Date.now() - t0) / 60000));
      savePlace("vocab", { level: r.level, date: today(), size: r.size, fa: r.fa, per: r.per, min });
      save();
      el.classList.remove("no-tx");
      const real = items.map((x, k) => [x, res[k]]).filter(([x]) => x.L);
      el.innerHTML = `
        <div class="result-big">≈ ${r.size.toLocaleString(locale())}</div>
        <p style="text-align:center;margin:0">${T("words known from the course lists · level <b>{l}</b>", { l: r.level })}</p>
        <div class="sections">${LV.map((L) => `<div class="sec"><span>${L}</span><div class="progress"><div style="width:${r.per[L]}%"></div></div><b>${r.per[L]}%</b></div>`).join("")}</div>
        <p class="small ${r.fa >= 4 ? "note-warn" : "muted"}" style="margin-top:14px">${Tn(r.fa, "You said you knew {n} word that doesn't exist (out of {t}).", "You said you knew {n} words that don't exist (out of {t}).", { t: r.nFake })} ${r.fa >= 4 ? T("That's quite a lot: the result is less reliable. Take the test again later, answering more strictly.") : T("The score has been corrected for it.")}</p>
        <p class="muted small">${T("This estimate only counts the words in this course (about {n} up to C2). A C2 speaker knows many more, but these are the ones that matter most for each level.", { n: LEVELS[LEVELS.length - 1].words.toLocaleString(locale()) })}</p>
        <details class="card place-review"><summary><b>${T("The words I said I didn't know")}</b></summary><p class="en">${real.filter(([, y]) => !y).map(([x]) => `${esc(x.w)} <span class="muted small">${x.L}</span>`).join(" · ") || "—"}</p><p class="small muted">${T("The invented words were:")} <span class="no-tx">${(PL().pseudo || []).join(", ")}</span></p></details>
        <div class="row" style="justify-content:center;margin-top:16px"><a class="btn" href="#/placement">${T("Back to the placement test")}</a><a class="btn btn-primary" href="#/placement/reading">${T("Reading")} ${ic("arrow-right")}</a></div>`;
    };
    show();
  };
}

/* Writing and speaking: a task per level, then Claude assesses with the CEFR / Cambridge criteria.
   The app can't mark free production reliably, so it says so and lets a real assessor do it. */
function levelPrompt(o) {
  const frP = isFr() || lvIdx(o.level) <= 2;
  if (o.sec === "writing") return (frP ? [
    "Bonjour ! Joue le rôle d'un examinateur expérimenté des examens d'anglais de Cambridge, qui connaît parfaitement le CECRL. Je suis francophone et je passe un test de placement : j'ai besoin d'une estimation honnête de mon niveau à l'écrit, pas d'encouragements.",
    "",
    `Sujet (niveau visé : ${o.level}) : « ${o.task} »`,
    `En français : ${o.task_fr}`,
    `Longueur demandée : ${o.words} mots. Mon texte en fait ${nWords(o.text)}.`,
    "",
    "Mon texte :", '"""', o.text.trim(), '"""',
    "",
    "1. Évalue mon texte avec les quatre critères des examens Cambridge : contenu, efficacité de la communication, organisation, langue (étendue et correction). Pour chacun : le niveau CECRL (A1 à C2) et une phrase de justification avec un exemple tiré de mon texte.",
    "2. Donne mon niveau global à l'écrit (A1, A2, B1, B2, C1 ou C2), en précisant s'il est solide ou fragile (par exemple « B1, proche du B2 »).",
    "3. Les trois erreurs ou faiblesses qui m'empêchent d'atteindre le niveau supérieur, avec la correction.",
    "4. Ce que je dois travailler en priorité pour monter d'un niveau.",
    "",
    "Si mon texte est trop court ou hors sujet, dis-le et précise que l'estimation est moins fiable. Ne surestime pas mon niveau."
  ] : [
    "Hi! Please act as an experienced Cambridge English examiner who knows the CEFR inside out. I'm a French speaker taking a placement test: I need an honest estimate of my writing level, not encouragement.",
    "",
    `Task (target level: ${o.level}): ${o.task}`,
    `Expected length: ${o.words} words. My text has ${nWords(o.text)}.`,
    "",
    "My text:", '"""', o.text.trim(), '"""',
    "",
    "1. Assess my text with the four Cambridge criteria: Content, Communicative Achievement, Organisation and Language (range and accuracy). For each: the CEFR level (A1 to C2) and one sentence of justification with an example from my text.",
    "2. Give my overall writing level (A1, A2, B1, B2, C1 or C2) and say whether it is secure or borderline (e.g. “B2, close to C1”).",
    "3. The three mistakes or weaknesses that keep me from the next level, with corrections.",
    "4. What I should work on first to go up a level.",
    "",
    "If my text is too short or off-topic, say so and say that the estimate is less reliable. Don't overestimate my level."
  ]).join("\n");
  return (frP ? [
    "Bonjour ! Fais-moi passer un court examen oral d'anglais, comme un examinateur expérimenté des examens Cambridge, pour estimer mon niveau CECRL. Je suis francophone. Je te parle avec le mode vocal ou la dictée : ne tiens pas compte de la ponctuation ni des erreurs de transcription.",
    "",
    "Déroulé, en anglais, environ 10 minutes :",
    "1. Quelques questions personnelles simples pour démarrer.",
    `2. Mon exposé (niveau visé : ${o.level}). Donne-moi ce sujet en anglais : « ${o.task} » (en français : ${o.task_fr}) Laisse-moi parler sans m'interrompre, puis pose-moi deux questions de relance.`,
    "3. Une discussion plus abstraite sur le même thème. Adapte la difficulté à mes réponses : monte si je m'en sors bien, simplifie si je bloque.",
    "Une seule question à la fois. Pendant l'examen, ne me corrige pas et ne donne pas de note.",
    "",
    "À la fin, en français :",
    "- mon niveau CECRL pour chaque critère : étendue (vocabulaire et structures), correction, aisance, interaction, cohérence ;",
    "- mon niveau global à l'oral (A1 à C2), en précisant s'il est solide ou fragile ;",
    "- trois phrases que j'ai dites, avec une version corrigée ou plus naturelle ;",
    "- la priorité pour monter d'un niveau.",
    "",
    "La transcription ne permet pas de juger ma prononciation : laisse ce critère de côté. Sois honnête et ne surestime pas mon niveau."
  ] : [
    "Hi! Please give me a short English speaking exam, like an experienced Cambridge English examiner, to estimate my CEFR level. I'm a French speaker. I'm talking to you with voice mode or dictation, so ignore punctuation and transcription errors.",
    "",
    "Format, in English, about 10 minutes:",
    "1. A few simple personal questions to warm up.",
    `2. My long turn (target level: ${o.level}): ${o.task} Let me speak without interrupting, then ask me two follow-up questions.`,
    "3. A more abstract discussion on the same theme. Adapt the difficulty to my answers: go up if I cope well, simplify if I get stuck.",
    "One question at a time. During the exam, don't correct me and don't give marks.",
    "",
    "At the end:",
    "- my CEFR level for each criterion: range (vocabulary and structures), accuracy, fluency, interaction, coherence;",
    "- my overall speaking level (A1 to C2), and whether it's secure or borderline;",
    "- three sentences I said, with a corrected or more natural version;",
    "- the priority for going up a level.",
    "",
    "A transcript can't show my pronunciation, so leave that criterion aside. Be honest and don't overestimate my level."
  ]).join("\n");
}
function viewPlaceProduce(sec, chosen) {
  const st = placeState();
  const tasks = PL()[sec] || {};
  const est = st.grammar ? Math.max(0, lvIdx(st.grammar.level)) : Math.max(0, lvIdx(placeStart("grammar")));
  const L = chosen || st[sec + "Task"] || LV[Math.min(est, LV.length - 1)];
  const tk = tasks[L];
  if (!tk) return viewPlacement();
  const prev = st[sec];
  const W = sec === "writing";
  const key = "pw:" + L;
  app.innerHTML = `
    ${back("#/placement", "Placement test")}
    <h1>${ic(W ? "pen-line" : "mic")} ${T(W ? "Writing" : "Speaking")}</h1>
    <p class="muted">${T(W ? "A machine can count mistakes, but judging a text takes an examiner. You write here, then Claude assesses your text with the criteria of the Cambridge exams, which are aligned with the CEFR." : "Speaking can only be judged by listening to you. First you practise the task and record yourself; then Claude gives you a short oral exam and estimates your level with the CEFR criteria.")}</p>
    ${prev ? `<div class="card" style="background:var(--blue-soft);border-color:transparent">${ic("badge-check")} ${T("Last result: {l} on {d}.", { l: prev.level, d: niceDate(prev.date) })}</div>` : ""}
    <section class="card">
      <p class="small muted" style="margin:0 0 6px">${T("Choose the task for your level (suggested: {l}).", { l: LV[Math.min(est, LV.length - 1)] })}</p>
      <div class="seg" id="taskLv">${LV.filter((x) => tasks[x]).map((x) => `<button data-l="${x}" class="${x === L ? "on" : ""}">${x}</button>`).join("")}</div>
      <h2 style="margin:16px 0 6px">${T("Your task")} ${levelTag(L)}</h2>
      <p class="en" style="font-size:18px">${instr(tk.task, tk.task_fr)}</p>
      ${W ? `<p class="muted small">${T("Length: {w} words. Write without a dictionary or translator: the aim is to see your real level.", { w: tk.words })}</p>
        <textarea class="field note" id="pwText" rows="12" lang="${APP.target}" spellcheck="false" placeholder="${T("Write your text here…")}">${esc(S.notes[key] || "")}</textarea>
        <p class="muted small" id="pwCount"></p>` : `<ol class="steps-list">
          <li>${T("Take one minute to prepare: note three or four key words, no full sentences.")}</li>
          <li>${T("Record yourself doing the task, without stopping. Then listen: where did you hesitate? Which words were missing?")}</li>
          <li>${T("Then take the oral exam with Claude, in voice mode: Claude asks the questions and gives you a level at the end.")}</li></ol>
        ${recorderHtml()}`}
    </section>
    <section class="card">
      <h3 style="margin-top:0">${ic("sparkles")} ${T(W ? "Assessment by Claude" : "Oral exam with Claude")}</h3>
      <div class="row"><button class="btn btn-primary" id="lpBtn">${ic("copy")} ${T(W ? "Copy the message for Claude" : "Copy the exam instructions")}</button><a class="btn btn-sm btn-dark" href="https://claude.ai/new" target="_blank" rel="noopener">${ic("external-link")} ${T("Open Claude")}</a></div>
      <p class="muted small">${T(W ? "Paste the message in Claude: it contains your text, the task and the assessment criteria." : "Paste the message in Claude, then switch to voice mode and answer out loud.")} ${T("Nothing is sent automatically.")}</p>
      <details id="lpShow"><summary class="small">${T("See the message")}</summary><textarea class="field cx-prompt" id="lpText" rows="9" readonly></textarea></details>
      <hr class="sep">
      <label class="small" for="lpLevel"><b>${T("The level Claude gave me")}</b></label>
      <div class="row" style="margin-top:8px"><select class="field" id="lpLevel" style="max-width:200px"><option value="">—</option>${["Pre-A1", ...LV].map((x) => `<option value="${x}" ${prev && prev.level === x ? "selected" : ""}>${x}</option>`).join("")}</select><button class="btn btn-sm btn-dark" id="lpSave">${ic("save")} ${T("Save")}</button></div>
    </section>`;
  $$("#taskLv button").forEach((b) => (b.onclick = () => { st[sec + "Task"] = b.dataset.l; save(); viewPlaceProduce(sec, b.dataset.l); }));
  const ctx = () => ({ sec, level: L, task: tk.task, task_fr: tk.task_fr, words: tk.words, text: W ? $("#pwText").value : "" });
  const refresh = () => { $("#lpText").value = levelPrompt(ctx()); if (W) $("#pwCount").textContent = Tn(nWords($("#pwText").value), "{n} word", "{n} words") + " · " + T("goal: {w}", { w: tk.words }); };
  refresh();
  if (W) $("#pwText").oninput = () => { S.notes[key] = $("#pwText").value; save(); refresh(); };
  else bindRecorder();
  $("#lpBtn").onclick = async () => {
    if (W && nWords($("#pwText").value) < 15) { toast(T("Write your text first (at least a few sentences)")); return; }
    refresh();
    const ok = await copyText($("#lpText").value);
    toast(ok ? T("Message copied") : T("Copy the message by hand"));
    if (!ok) $("#lpShow").open = true;
  };
  $("#lpSave").onclick = () => {
    const v = $("#lpLevel").value;
    if (!v) { toast(T("Choose a level first")); return; }
    savePlace(sec, { level: v, date: today(), task: L, by: "claude" });
    toast(T("Saved in your skills report"));
    viewPlaceProduce(sec, L);
  };
}

/* The recommended starting point: the middle of the objective results, then the next level up
   (the units of a level teach what you need to reach it). */
function placeRecommend() {
  const st = placeState();
  if (!st.grammar) return null;
  const vals = ["grammar", "vocab", "reading", "listening"].filter((k) => st[k]).map((k) => lvIdx(st[k].level)).sort((a, b) => a - b);
  const mid = vals[Math.floor((vals.length - 1) / 2)];
  return { have: lvLabel(mid), start: LV[Math.min(mid + 1, LV.length - 1)], n: vals.length };
}
function viewPlacement() {
  const st = placeState();
  const rec = placeRecommend();
  const cur = currentLevel();
  app.innerHTML = `
    <h1>${T("Placement test")}</h1>
    <p class="muted">${T("As at university, a placement test tells you where to start and draws your profile skill by skill. Six parts, about 1 hour 20 in total: do them one at a time, in any order, on different days if you like.")}</p>
    ${st.self ? "" : `<section class="card">
      <h2 style="margin-top:0">${T("Before you start")}</h2>
      <p>${T("How would you describe your English today? The test starts there, then adjusts.")}</p>
      <div class="options" id="selfOpts">${SELF_OPTS.map(([k, t]) => `<button class="option" data-self="${k}">${T(t)}</button>`).join("")}</div>
    </section>`}
    ${st.self === "pre" && !st.grammar ? `<div class="card" style="background:var(--yellow-soft);border-color:var(--yellow)">${ic("lightbulb")} ${T("No need to take the test now: start with Unit 1, the course is made for you. Come back at the end of level A1 to measure your progress. You can still try the first part to see how it works.")}</div>` : ""}
    ${st.self ? `<p class="small muted">${T("Your starting point: {t}", { t: T((SELF_OPTS.find(([k]) => k === st.self) || SELF_OPTS[0])[1]) })} <button class="btn btn-sm btn-ghost" id="selfReset">${T("Change")}</button></p>` : ""}
    <div class="grid grid-2" style="margin-top:12px">
      ${PLACE_SECS.map((x) => {
        const r = st[x.id];
        return `<a class="card place-card" href="#/placement/${x.id}">
          <div class="row">${tile(x.icon, r && lvIdx(r.level) >= 0 ? r.level : "A1")}<div style="flex:1;min-width:0"><h3 style="margin:0">${T(x.title)}</h3><span class="muted small">${T("about {m} min", { m: x.min })}</span></div>${r ? lvTag(r.level) : ""}</div>
          <p class="muted small" style="margin:10px 0 0">${T(x.d)}</p>
          <p class="small" style="margin:8px 0 0">${r ? `${ic("rotate-ccw")} ${T("Done on {d} · take it again", { d: niceDate(r.date) })}` : `${ic("play")} ${T("Start")}`}</p>
        </a>`;
      }).join("")}
    </div>
    ${rec ? `<section class="card" style="margin-top:16px">
      <h2 style="margin-top:0">${ic("compass")} ${T("Where to start")}</h2>
      <p>${T("Your results suggest level <b>{l}</b>. The units of a level teach what you need to reach it, so the course for you starts at <b>{s}</b>.", { l: rec.have, s: rec.start })}${rec.n < 3 ? ` ${T("Do the reading and listening parts too: the recommendation will be more reliable.")}` : ""}</p>
      ${S.startAt ? `<p class="small">${T("The course currently starts at {l} (after the placement test).", { l: S.startAt })}</p>` : ""}
      <div class="row">${lvIdx(rec.start) > lvIdx(cur) && S.startAt !== rec.start ? `<button class="btn btn-primary" id="startAt">${T("Start the course at {l}", { l: rec.start })}</button>` : `<a class="btn btn-primary" href="#/unite/${currentUnit().id}">${T("Continue the course: {l}, unit {n}", { l: currentUnit().level, n: unitNum(currentUnit()) })}</a>`}${S.startAt ? `<button class="btn" id="startReset">${T("Start from A1 again")}</button>` : ""}</div>
      <p class="muted small" style="margin:10px 0 0">${T("If the first units feel too easy, go straight to the unit test; if they feel too hard, go back a level. The level exams remain open whatever you choose.")}</p>
    </section>` : ""}
    <div class="row" style="margin-top:16px"><a class="btn" href="#/bilan">${ic("chart-column")} ${T("My skills report")}</a><a class="btn" href="#/grilles">${ic("list-checks")} ${T("Can-do grids")}</a></div>`;
  $$("[data-self]").forEach((b) => (b.onclick = () => { st.self = b.dataset.self; save(); viewPlacement(); }));
  if ($("#selfReset")) $("#selfReset").onclick = () => { delete st.self; save(); viewPlacement(); };
  if ($("#startAt")) $("#startAt").onclick = () => { S.startAt = rec.start; save(); toast(T("The course now starts at {l}", { l: rec.start })); location.hash = "#/cours"; };
  if ($("#startReset")) $("#startReset").onclick = () => { delete S.startAt; save(); toast(T("The course starts at A1 again")); viewPlacement(); };
}

/* Can-do grids: 0 = not yet, 1 = with help, 2 = yes. A level counts as reached at 75%,
   and only if the levels below are reached too. */
function candoScore(ids, L) {
  let sum = 0, n = 0;
  ids.forEach((id) => { const sk = CD().find((x) => x.id === id); ((sk && sk.levels[L]) || []).forEach((_, k) => { n++; sum += [0, 0.5, 1][(S.cando || {})[`${id}:${L}:${k}`] || 0]; }); });
  return n ? sum / n : 0;
}
function candoLevel(ids) {
  let best = -1;
  for (let i = 0; i < LV.length; i++) { if (candoScore(ids, LV[i]) >= 0.75) best = i; else break; }
  return best;
}
const candoTouched = (ids) => Object.keys(S.cando || {}).some((k) => ids.includes(k.split(":")[0]));
const CANDO_VALS = [[0, "Not yet"], [1, "With help"], [2, "Yes"]];
function viewCando(skill) {
  S.cando = S.cando || {};
  const sk = CD().find((x) => x.id === skill) || CD()[0];
  if (!sk) return viewPlacement();
  const levelLine = (L) => { const p = Math.round(candoScore([sk.id], L) * 100); return `<span class="muted small cd-stat" data-l="${L}">${p}%${p >= 75 ? ` · ${T("reached")}` : ""}</span>`; };
  app.innerHTML = `
    ${back("#/bilan", "My skills report")}
    <h1>${T("Can-do grids")}</h1>
    <p class="muted">${T("What you can do in English at each level, skill by skill. Be honest: answer “Yes” only if you could do it tomorrow, without preparing. Come back every month or two: watching the boxes fill up is a great motivator.")}</p>
    <div class="seg cd-tabs" role="tablist">${CD().map((x) => `<a href="#/grilles/${x.id}" class="${x.id === sk.id ? "on" : ""}">${ic(x.icon)} ${esc(loc(x, "title"))}</a>`).join("")}</div>
    <p class="small" style="margin:14px 0 0" id="cdSum"></p>
    ${LV.map((L) => `<details class="level-block" ${L === LV[Math.max(0, candoLevel([sk.id]) + 1)] || L === currentLevel() ? "open" : ""}>
      <summary><span class="lvl-sum">${levelTag(L)}<b>${esc(lvName(L))}</b>${levelLine(L)}</span>${ic("chevron-down", "chev")}</summary>
      <div class="stack" style="margin-top:12px">${sk.levels[L].map(([en, f], k) => {
        const id = `${sk.id}:${L}:${k}`, v = S.cando[id] || 0;
        return `<div class="card cd-item"><p style="margin:0 0 10px">${instr(en, f)}</p><div class="seg cd-seg" data-id="${id}" data-l="${L}">${CANDO_VALS.map(([n, t]) => `<button data-v="${n}" class="${v === n ? "on" : ""}">${T(t)}</button>`).join("")}</div></div>`;
      }).join("")}</div>
    </details>`).join("")}
    <p class="muted small" style="margin-top:16px">${T("Statements written for this app, based on the CEFR self-assessment grid (Council of Europe, 2001) and its Companion Volume (2020).")}</p>`;
  const sum = () => { const l = candoLevel([sk.id]); $("#cdSum").innerHTML = l < 0 ? T("Self-assessed level: not yet A1. Tick what you can already do.") : T("Self-assessed level in {s}: <b>{l}</b>", { s: esc(loc(sk, "title")), l: LV[l] }); };
  sum();
  $$(".cd-seg button").forEach((b) => (b.onclick = () => {
    const seg = b.parentElement, v = +b.dataset.v;
    if (v) S.cando[seg.dataset.id] = v; else delete S.cando[seg.dataset.id];
    save();
    $$("button", seg).forEach((x) => x.classList.toggle("on", x === b));
    const stat = $(`.cd-stat[data-l="${seg.dataset.l}"]`);
    if (stat) stat.outerHTML = levelLine(seg.dataset.l);
    sum();
  }));
}

/* Skills report: test, self-assessment and Claude's assessment, side by side. */
const REPORT = [
  { id: "listening", icon: "ear", title: "Listening", cando: ["li"], go: () => ["#/comprehension", "Listening lab"] },
  { id: "reading", icon: "book-open-text", title: "Reading", cando: ["re"], go: () => ["#/lecture", "Reading"] },
  { id: "speaking", icon: "mic", title: "Speaking", cando: ["si", "sp"], go: (L) => (lvIdx(L) >= 3 ? ["#/conversation", "Speak with someone"] : ["#/oral", "Speaking"]) },
  { id: "writing", icon: "pen-line", title: "Writing", cando: ["wr"], go: (L) => (lvIdx(L) >= 3 ? ["#/competences", "Academic skills"] : [`#/ecrit/${currentUnit().id}`, "Writing"]) },
  { id: "grammar", icon: "book-open", title: "Grammar", cando: [], go: () => ["#/lecons", "Lessons"] },
  { id: "vocab", icon: "layers", title: "Vocabulary", cando: [], go: () => ["#/vocabulaire", "Vocabulary"] }
];
function skillEstimate(r) {
  const t = placeState()[r.id];
  const test = t ? lvIdx(t.level) : null;
  const self = r.cando.length && candoTouched(r.cando) ? candoLevel(r.cando) : null;
  return { t, test, self, est: test != null ? test : self };
}
function skillEvidence(id) {
  const sum = (k) => Object.values(S.days).reduce((a, d) => a + (d[k] || 0), 0);
  const n = (o) => Object.keys(o || {}).length;
  const ac = (kind) => ACAD().filter((c) => c.kind === kind && acadDone(c.id)).length;
  if (id === "listening") return T("In the app: {d} listening labs, {a} dictation sentences, {b} of listening outside the app, {c} pronunciation chapters.", { d: n(S.lab), a: sum("dictee"), b: fmtH((S.extMin || 0) / 60), c: n(S.pron) });
  if (id === "reading") return T("In the app: {a} texts read, {b} academic reading chapters.", { a: n(S.readings), b: ac("read") });
  if (id === "speaking") return T("In the app: {a} sentences said into the microphone, {b} role-plays, {c} conversations.", { a: n(S.spoken), b: n(S.dialogues), c: (S.convos || []).length });
  if (id === "writing") return T("In the app: {a} unit texts, {b} corrections kept, {c} academic writing tasks.", { a: Object.values(S.units).filter((u) => u.wdone).length, b: n(S.corrections), c: Object.values(S.acad || {}).filter((x) => x.wrote).length });
  if (id === "grammar") return T("In the app: {a} lessons out of {b}, level exams passed: {c}.", { a: n(S.lessons), b: LESSONS.length, c: LV.filter((L) => S.exams[L] >= 70).join(", ") || "—" });
  return T("In the app: {a} words learnt, {b} mastered.", { a: Object.values(S.srs).filter((x) => x.box >= 1).length, b: mastered() });
}
function viewReport() {
  const st = placeState();
  const rows = REPORT.map((r) => Object.assign({ r }, skillEstimate(r)));
  const known = rows.filter((x) => x.est != null);
  const sorted = known.map((x) => x.est).sort((a, b) => a - b);
  const overall = sorted.length ? sorted[Math.floor((sorted.length - 1) / 2)] : null;
  const best = known.length > 1 ? known.reduce((a, b) => (b.est > a.est ? b : a)) : null;
  const weak = known.length > 1 ? known.reduce((a, b) => (b.est < a.est ? b : a)) : null;
  const hist = (st.history || []).slice().sort((a, b) => (a.date < b.date ? 1 : -1));
  const lastDate = hist.length ? hist[0].date : null;
  const scale = (x) => `<div class="lv-scale">${LV.map((L, i) => `<span class="${x.est != null && i <= x.est ? "on" : ""}${x.est === i ? " est" : ""}">${L}${x.test === i ? `<i class="mk mk-test" title="${T("Test")}"></i>` : ""}${x.self === i ? `<i class="mk mk-self" title="${T("Self-assessment")}"></i>` : ""}</span>`).join("")}</div>`;
  app.innerHTML = `
    <h1>${T("My skills report")}</h1>
    <p class="muted">${T("Where you are in each skill, from three sources: the placement test, Claude's assessment of your writing and speaking, and your own self-assessment. Different levels in different skills is completely normal: almost everyone understands more than they can say.")}</p>
    ${!known.length ? `<section class="card ear-cta">${tile("compass", "A2")}<div style="flex:1;min-width:0"><h3 style="margin:0">${T("Nothing here yet")}</h3><p class="muted small" style="margin:4px 0 0">${T("Take the placement test, or fill in the can-do grids: your report will appear here.")}</p></div><a class="btn btn-primary" href="#/placement">${T("Placement test")}</a></section>` : `
    <section class="card report-head">
      <div class="report-big">${lvLabel(overall)}</div>
      <div style="flex:1;min-width:0">
        <h2 style="margin:0">${T("Overall level: {l}", { l: lvLabel(overall) })}</h2>
        <p class="muted small" style="margin:4px 0 0">${T("The middle of your skills, not an average: one weak skill doesn't pull everything down.")}</p>
        ${best && weak && best.est !== weak.est ? `<p class="small" style="margin:8px 0 0">${ic("trending-up", "c-green")} ${T("Strongest: {s} ({l})", { s: T(best.r.title), l: lvLabel(best.est) })} · ${ic("target", "c-accent")} ${T("To work on: {s} ({l})", { s: T(weak.r.title), l: lvLabel(weak.est) })}</p>` : ""}
      </div>
    </section>`}
    <div class="stack" style="margin-top:16px">
      ${rows.map((x) => {
        const L = lvLabel(x.est == null ? lvIdx(currentLevel()) : x.est);
        const [href, label] = x.r.go(L === "Pre-A1" ? "A1" : L);
        const gap = x.test != null && x.self != null && Math.abs(x.test - x.self) >= 2;
        const focus = x.r.id === "grammar" && x.t && x.t.focus && x.t.focus.length ? `<p class="small" style="margin:8px 0 0"><b>${T("Points to review:")}</b> ${x.t.focus.slice(0, 6).map(([f, ff]) => esc(isFr() ? ff : f)).join(" · ")}</p>` : "";
        return `<section class="card skill-row">
          <div class="row">${tile(x.r.icon, x.est != null && x.est >= 0 ? LV[x.est] : "A1")}<div style="flex:1;min-width:0"><h3 style="margin:0">${T(x.r.title)}</h3>
            <span class="muted small">${x.test != null ? `${T(x.r.id === "writing" || x.r.id === "speaking" ? "Claude:" : "Test:")} <b>${lvLabel(x.test)}</b> (${niceDate(x.t.date)})` : T(x.r.id === "writing" || x.r.id === "speaking" ? "Not assessed by Claude yet" : "Not tested yet")}${x.r.cando.length ? ` · ${T("Self-assessment:")} <b>${x.self != null ? lvLabel(x.self) : "—"}</b>` : ""}${x.r.id === "vocab" && x.t ? ` · ≈ ${x.t.size.toLocaleString(locale())} ${T("words")}` : ""}</span></div>
            ${x.est != null ? `<span class="report-lv">${lvLabel(x.est)}</span>` : ""}</div>
          ${scale(x)}
          <p class="muted small" style="margin:6px 0 0">${skillEvidence(x.r.id)}</p>
          ${focus}
          ${gap ? `<p class="small note-warn" style="margin-top:8px">${T(x.self > x.test ? "Your self-assessment is higher than your result. That's common: trust the result for now, and check again in a few weeks." : "Your result is higher than your self-assessment: you can do more than you think!")}</p>` : ""}
          <div class="row" style="margin-top:10px">${x.t ? "" : `<a class="btn btn-sm" href="#/placement/${x.r.id}">${T(x.r.id === "writing" || x.r.id === "speaking" ? "Get assessed" : "Take the test")}</a>`}${x.r.cando.length ? `<a class="btn btn-sm" href="#/grilles/${x.r.cando[0]}">${T("Can-do grid")}</a>` : ""}<a class="btn btn-sm btn-dark" href="${href}">${T("Practise: {s}", { s: T(label) })} ${ic("arrow-right")}</a></div>
        </section>`;
      }).join("")}
    </div>
    <p class="muted small" style="margin-top:10px"><i class="mk mk-test mk-inline"></i> ${T("Test or Claude")} &nbsp; <i class="mk mk-self mk-inline"></i> ${T("Self-assessment")} &nbsp; ${T("Coloured bar: the level kept for the report (the test when there is one).")}</p>
    ${hist.length ? `<section class="card" style="margin-top:16px">
      <h2 style="margin-top:0">${ic("history")} ${T("History")}</h2>
      <div class="table-wrap"><table class="irr-table"><tr><th>${T("Date")}</th>${PLACE_SECS.map((x) => `<th>${T(x.title)}</th>`).join("")}</tr>
      ${hist.map((h) => `<tr><td>${niceDate(h.date)}</td>${PLACE_SECS.map((x) => `<td>${h[x.id] ? esc(h[x.id]) : "—"}</td>`).join("")}</tr>`).join("")}</table></div>
      <p class="muted small" style="margin:10px 0 0">${T("Take the test again in about three months (from {d}), or when you finish a level: that's how you'll see your progress.", { d: niceDate(addDays(90, lastDate)) })}</p>
    </section>` : ""}
    <div class="row" style="margin-top:16px"><a class="btn" href="#/placement">${ic("compass")} ${T("Placement test")}</a><a class="btn" href="#/grilles">${ic("list-checks")} ${T("Can-do grids")}</a></div>`;
}

/* ================= Dictation ================= */
/* Sentences from the lessons already studied: the daily dictation and repetition only use what was taught. */
const studiedSentences = () => sentencePool(LESSONS.filter((l) => S.lessons[l.id]));
function dictPool(L) {
  const maxW = { A1: 8, A2: 11, B1: 14, B2: 18, C1: 22, C2: 26 }[L] || 14;
  const out = [];
  LESSONS.filter((l) => l.level === L).forEach((l) => l.examples.forEach(([en]) => out.push(en)));
  SPEAKING.filter((c) => c.level === L).forEach((c) => c.phrases.forEach(([en]) => out.push(en)));
  VOCAB.filter((t) => t.level === L).forEach((t) => t.words.forEach((w) => w[2] && out.push(w[2])));
  return [...new Set(out)].filter((x) => !/[\/…—]/.test(x) && x.split(/\s+/).length >= 3 && x.split(/\s+/).length <= maxW);
}
function viewDictee(level, unitId) {
  const u = unitId ? COURSE.find((x) => x.id === unitId) : null;
  const L = u ? u.level : LV.includes(level) ? level : currentLevel();
  const N = Math.max(5, goal().dictee || 5);
  const studied = !u && !level ? studiedSentences() : [];
  const items = u ? sentencePool(u.lessons.map(lessonById).filter(Boolean)).slice(0, 6) : studied.length >= N ? studied.slice(0, N) : shuffle(dictPool(L)).slice(0, N);
  const backHref = u ? `#/unite/${u.id}` : "#/oral";
  let i = 0, total = 0;
  if (!items.length) { app.innerHTML = `${back(backHref, "Back")}<div class="card empty">${T("No sentences for this level yet.")}</div>`; return; }
  function render() {
    if (i >= items.length) {
      const avg = Math.round(total / items.length);
      if (u) { const us = unitState(u.id); const first = !us.dict; us.dict = Math.max(us.dict || 0, avg); if (first) markStep(); else save(); }
      app.innerHTML = `${back(backHref, "Back")}<div class="card flash-wrap" style="text-align:center">${celebrate()}<div class="result-big">${avg}%</div><p>${T(avg >= 90 ? "Excellent ear!" : avg >= 70 ? "Very good! Listen again to the sentences where you struggled." : "Keep going: dictation is hard at first, then everything speeds up.")}</p><div class="row" style="justify-content:center"><button class="btn" id="again">${T("New dictation")}</button>${continueBtn(`<a class="btn btn-primary" href="${u ? backHref : "#/"}">${u ? T("Back to Unit {n}", { n: unitNum(u) }) : T("My programme")} ${ic("arrow-right")}</a>`)}</div></div>`;
      $("#again").onclick = () => viewDictee(L, unitId);
      return;
    }
    const target = items[i];
    app.innerHTML = `
      ${back(backHref, "Back")}
      <div class="flash-wrap">
        <div class="row"><h2 style="margin:0">${ic("pen-line")} ${T("Dictation")}${u ? ` · ${T("Unit")} ${unitNum(u)}` : ""}</h2><span class="spacer"></span>
          ${u ? "" : `<div class="seg" role="group" aria-label="${T("Level")}">${LV.map((x) => `<button data-lv="${x}" class="${x === L ? "on" : ""}">${x}</button>`).join("")}</div>`}
        </div>
        <div class="row" style="margin-top:10px"><span class="muted small">${T("Sentence")} ${i + 1} / ${items.length}</span></div>
        <div class="progress" style="margin:8px 0 20px"><div style="width:${(i / items.length) * 100}%"></div></div>
        <div class="card no-tx" style="text-align:center">
          <div class="row" style="justify-content:center;gap:14px"><button class="mic" id="play" aria-label="${T("Listen to the sentence")}">${ic("volume-2")}</button><button class="btn" id="slow">${ic("snail")} ${T("Slowly")}</button></div>
          <p class="muted small" style="margin:14px 0">${T("Listen as many times as you need, then write what you hear.")}</p>
          <form id="f" autocomplete="off">
            <input class="type-input" id="ans" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="${T("Write the sentence…")}" aria-label="${T("Your dictation")}">
            <div class="row" style="justify-content:center;margin-top:14px"><button type="button" class="btn btn-ghost" id="skip">${T("I can't find it")}</button><button class="btn btn-dark">${T("Check")}</button></div>
          </form>
          <div id="fb"></div>
        </div>
      </div>`;
    const play = (rate) => speak(target, $("#play"), rate ? { rate } : {});
    setTimeout(() => play(), 250);
    $("#play").onclick = () => play();
    $("#slow").onclick = () => play(0.6);
    $$("[data-lv]").forEach((b) => (b.onclick = () => viewDictee(b.dataset.lv)));
    const inp = $("#ans"); inp.focus();
    let answered = false;
    const check = (given) => {
      if (answered) { i++; render(); return; }
      answered = true;
      const r = dictCompare(target, given);
      total += r.pct;
      addXP(r.pct >= 90 ? 3 : 1, "dictee");
      inp.readOnly = true; inp.classList.add(r.pct >= 90 ? "ok" : "ko");
      $("#fb").innerHTML = `
        <div class="dict-result">
          <div class="score-ring" style="color:${r.pct >= 90 ? "var(--green)" : r.pct >= 60 ? "var(--yellow)" : "var(--red)"}">${r.pct}%</div>
          ${r.gw.length ? `<p class="small muted" style="margin:6px 0 2px">${T("Your version")}</p><p class="heard">${r.gw.map((w, k) => `<span class="${r.okB[k] ? "ok" : "ko"}">${esc(w)}</span>`).join(" ")}</p>` : ""}
          <p class="small muted" style="margin:10px 0 2px">${T("The sentence")} ${sayBtn(target)}</p>
          <p class="heard">${r.tw.map((w, k) => `<span class="${r.okA[k] ? "ok" : "miss"}">${esc(w)}</span>`).join(" ")}</p>
          <p class="en" style="font-size:18px;margin-top:8px">${esc(target)}</p>
        </div>
        <p class="small muted" style="margin-top:10px">${T("Press Enter to continue")}</p>`;
      $("#f .btn-dark").innerHTML = T("Next") + " " + ic("arrow-right");
      $("#skip").style.display = "none";
    };
    $("#f").onsubmit = (e) => { e.preventDefault(); check(inp.value); };
    $("#skip").onclick = () => check("");
  }
  render();
}

/* ================= TOEIC ================= */
const cefrOf = (score, sec) => { const m = TOEIC.cefr[sec]; let lv = "below A1"; LV.forEach((L) => { if (score >= m[L]) lv = L; }); return lv; };
const toeicScore = (p) => Math.min(495, Math.max(5, Math.round((5 + p * 490) / 5) * 5));
function viewToeic() {
  const mocks = S.toeic.mocks || [];
  const last = mocks[mocks.length - 1];
  app.innerHTML = `
    <h1>${T("TOEIC preparation")}</h1>
    <p>${instr(TOEIC.intro, TOEIC.intro_fr)}</p>
    <div class="grid grid-2" style="margin:20px 0">
      <section class="card">
        <h2>${ic("timer")} ${T("Mock test")}</h2>
        <p class="muted small">${T("Two formats. The short test (about 60 questions, 45 minutes) is for checking your progress regularly. The full test follows the real format: 194 questions in about 2 hours (only part 1, with photos, is missing). Both give you an estimated score and your CEFR level.")}</p>
        ${last ? `<p style="margin:0 0 12px">${T("Last result:")} <b>${last.L + last.R}</b> / 990 <span class="muted small">(${T(last.full ? "full test" : "short test")} · ${T("Listening")} ${last.L}, ${T("Reading")} ${last.R} · ${esc(last.date)})</span></p>` : ""}
        <div class="row"><a class="btn btn-primary" href="#/toeic/mock">${ic("play")} ${T("Short test")}</a><a class="btn" href="#/toeic/full">${ic("timer")} ${T("Full test")}</a></div>
      </section>
      <section class="card">
        <h2>${ic("chart-column")} ${T("Scores and CEFR levels")}</h2>
        <table class="irr-table"><tr><th>${T("Level")}</th><th>${T("Listening")}</th><th>${T("Reading")}</th><th>${T("Total")}</th></tr>
          ${LV.filter((L) => TOEIC.cefr.listening[L] != null).map((L) => `<tr><td>${levelTag(L)}</td><td>${TOEIC.cefr.listening[L]}+</td><td>${TOEIC.cefr.reading[L]}+</td><td>${TOEIC.cefr.listening[L] + TOEIC.cefr.reading[L]}+</td></tr>`).join("")}
        </table>
        <p class="muted small" style="margin:8px 0 0">${T("Minimum scores per section according to ETS, the organisation that creates the TOEIC.")}</p>
      </section>
    </div>
    <h2>${T("The 7 parts of the test")}</h2>
    <div class="stack">
      ${TOEIC.parts.map((p) => {
        const st = (S.toeic.parts || {})[p.n];
        return `<section class="card part-card">
          <div class="row"><span class="part-n">${p.n}</span><div style="flex:1;min-width:0"><span class="muted small">${T(p.section)} · ${T("{n} questions", { n: p.count })}</span><h3 style="margin:0">${esc(loc(p, "name"))}</h3></div>${st ? `<span class="tag">${st.ok}/${st.n}</span>` : ""}</div>
          <p style="margin:12px 0">${instr(p.what, p.what_fr)}</p>
          <details><summary><b>${ic("lightbulb")} ${T("Strategies")}</b></summary><ul class="checklist" style="margin-top:10px">${p.tips.map((t, i) => `<li>${ic("check")}<span>${instr(t, p.tips_fr[i])}</span></li>`).join("")}</ul></details>
          ${p.practice ? `<a class="btn btn-sm btn-dark" style="margin-top:12px" href="#/toeic/part/${p.n}">${ic("play")} ${T("Practise part {n}", { n: p.n })}</a>` : `<p class="muted small" style="margin:12px 0 0">${instr(p.note, p.note_fr)}</p>`}
        </section>`;
      }).join("")}
    </div>
    <a class="card ear-cta" style="margin-top:20px" href="#/ecoute">${tile("headphones", "B2")}<div style="flex:1"><h3 style="margin:0">${T("Real listening for the TOEIC")}</h3><p class="muted small" style="margin:4px 0 0">${T("Podcasts and series with American, British, Canadian and Australian accents: see your listening plan.")}</p></div>${ic("arrow-right")}</a>
    <div class="card" style="margin-top:12px"><div class="row" style="flex-wrap:nowrap;align-items:flex-start">${tile("globe", "C1")}<div style="flex:1"><h3 style="margin:0">${T("Two classic Listening traps")}</h3><p class="muted small" style="margin:4px 0 10px">${T("The four accents of the test, and numbers that sound alike (13 or 30?). Two pronunciation chapters train your ear for them.")}</p><a class="btn btn-sm" href="#/prononciation/p-accents">${ic("globe")} ${T("Accents of English")}</a> <a class="btn btn-sm" href="#/prononciation/p-numbers">${ic("calculator")} ${T("Numbers, dates and prices")}</a></div></div></div>
    <div class="section-title"><h2>${ic("briefcase")} ${T("Business vocabulary")}</h2></div>
    <div class="grid lib-list">${VOCAB.filter((t) => t.toeic).map(themeCard).join("")}</div>
    <p class="muted small" style="margin-top:20px">${T("The practice questions here are original, written in the official format. For official practice tests, ETS publishes preparation books (“Official Guide to the TOEIC Test”).")}</p>`;
}
function toeicBlocks(n, count) {
  const src = { 2: TOEIC.part2, 3: TOEIC.part3, 4: TOEIC.part4, 5: TOEIC.part5, 6: TOEIC.part6, 7: TOEIC.part7 }[n] || [];
  return shuffle(src).slice(0, count).map((it) => ({ kind: "p" + n, it }));
}
const blockCount = (bl) => bl.kind === "p2" || bl.kind === "p5" ? 1 : bl.kind === "p6" ? bl.it.gaps.length : bl.it.qs.length;
/* Part 7: double and triple passages ("docs", or an older single text titled "Double passage…"). */
const isMultiPassage = (it) => !!it.docs || /passage/i.test(it.title || "");
/* The reading part of a full test: single passages up to about 29 questions, 2 double and 3 triple passages. */
function toeicP7Full() {
  const singles = shuffle(TOEIC.part7.filter((it) => !isMultiPassage(it)));
  const doubles = shuffle(TOEIC.part7.filter((it) => isMultiPassage(it) && (!it.docs || it.docs.length === 2))).slice(0, 2);
  const triples = shuffle(TOEIC.part7.filter((it) => it.docs && it.docs.length === 3)).slice(0, 3);
  const pick = [];
  let n = 0;
  for (const it of singles) { if (n >= 29) break; pick.push(it); n += it.qs.length; }
  return [...pick, ...doubles, ...triples].map((it) => ({ kind: "p7", it }));
}
const toeicGraphic = (g) => `<div class="doc en toeic-graphic"><b>${esc(g.title)}</b><table class="irr-table">${g.head ? `<tr>${g.head.map((h) => `<th>${esc(h)}</th>`).join("")}</tr>` : ""}${g.rows.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</table></div>`;
const toeicDoc = (title, text) => `<div class="doc en"><b>${esc(title)}</b><br>${esc(text).replace(/\n/g, "<br>")}</div>`;
/* Runs TOEIC blocks. mode: "practice" (replay, explanations) or "mock" (audio once, corrections at the end).
   Returns the live result object { L:[ok,total], R:[ok,total] }. */
function runToeic(el, blocks, mode, done) {
  let b = 0;
  const res = { L: [0, 0], R: [0, 0] };
  const mock = mode === "mock";
  const answerRow = (q, k, sec, onAnswered) => {
    const box = $(".tq-" + k, el);
    $$("button.option", box).forEach((btn) => (btn.onclick = () => {
      const c = +btn.dataset.k, ok = c === q.a;
      res[sec][1]++; if (ok) res[sec][0]++;
      $$("button.option", box).forEach((x, j) => { x.disabled = true; if (!mock && j === q.a) x.classList.add("correct"); else if (j === c) x.classList.add(mock ? "chosen" : ok ? "correct" : "wrong"); });
      if (!mock && q.ex) box.insertAdjacentHTML("beforeend", `<div class="feedback ${ok ? "ok" : "ko"}">${esc(q.ex)}</div>`);
      onAnswered();
    }));
  };
  const opts = (o, hideText) => o.map((x, j) => `<button class="option" data-k="${j}"><b class="opt-letter">${"ABCD"[j]}</b> ${hideText ? "" : esc(x)}</button>`).join("");
  function nextBtn() { $(".tnext", el).innerHTML = `<button class="btn btn-dark">${T("Next")} ${ic("arrow-right")}</button>`; $(".tnext button", el).onclick = () => { b++; show(); }; $(".tnext button", el).focus(); }
  function show() {
    stopAudio();
    if (b >= blocks.length) return done(res);
    const { kind, it } = blocks[b];
    const head = `<div class="row small muted"><span>${b + 1} / ${blocks.length}</span><span class="spacer"></span><span>${T("Part")} ${kind.slice(1)}</span></div><div class="progress" style="margin:8px 0 18px"><div style="width:${(b / blocks.length) * 100}%"></div></div>`;
    if (kind === "p2") {
      el.innerHTML = `${head}<p class="muted">${T("Listen to the question and the three responses. Choose the best response.")}</p>
        <div class="row" style="margin:12px 0"><button class="btn" id="tplay">${ic("volume-2")} ${T(mock ? "Playing…" : "Listen")}</button></div>
        <div class="tq tq-0">${opts(it.o, true)}</div><div class="tscript"></div><div class="tnext"></div>`;
      const lines = [["M", it.q], ["", "A. " + it.o[0]], ["", "B. " + it.o[1]], ["", "C. " + it.o[2]]];
      const play = () => playLines(lines, $("#tplay"));
      setTimeout(play, 300);
      if (mock) $("#tplay").disabled = true; else $("#tplay").onclick = play;
      answerRow(it, 0, "L", () => {
        if (!mock) $(".tscript", el).innerHTML = `<div class="script en"><b>${esc(it.q)}</b><br>A. ${esc(it.o[0])}<br>B. ${esc(it.o[1])}<br>C. ${esc(it.o[2])}</div>`;
        nextBtn();
      });
      return;
    }
    if (kind === "p3" || kind === "p4") {
      const lines = kind === "p3" ? it.lines : [["", it.text]];
      el.innerHTML = `${head}<p class="muted">${kind === "p3" ? T("Read the questions, then listen to the conversation.") : T("Read the questions, then listen to the talk ({t}).", { t: esc(it.type.toLowerCase()) })}</p>
        <div class="row" style="margin:12px 0"><button class="btn btn-primary" id="tplay">${ic("play")} ${T(mock ? "Play (once)" : "Listen")}</button></div>
        ${it.graphic ? toeicGraphic(it.graphic) : ""}
        ${it.qs.map((q, k) => `<div class="tq tq-${k}"><p class="quiz-q" style="font-size:17px">${k + 1}. ${esc(q.q)}</p>${opts(q.o)}</div>`).join("")}
        <div class="tscript"></div><div class="tnext"></div>`;
      let played = false;
      $("#tplay").onclick = async (e) => {
        if (mock && played) return;
        played = true;
        if (mock) e.currentTarget.disabled = true;
        await playLines(lines, e.currentTarget);
      };
      let answered = 0;
      it.qs.forEach((q, k) => answerRow(q, k, "L", () => {
        if (++answered === it.qs.length) {
          if (!mock) $(".tscript", el).innerHTML = `<details class="script"><summary>${T("Transcript")}</summary>${lines.map(([s, t]) => `<p class="en">${s ? `<b>${esc(s)}:</b> ` : ""}${esc(t)}</p>`).join("")}</details>`;
          nextBtn();
        }
      }));
      return;
    }
    if (kind === "p5") {
      el.innerHTML = `${head}<p class="muted">${T("Choose the word or phrase that best completes the sentence.")}</p>
        <div class="tq tq-0"><p class="quiz-q en">${esc(it.q)}</p>${opts(it.o)}</div><div class="tnext"></div>`;
      answerRow(it, 0, "R", () => nextBtn());
      return;
    }
    if (kind === "p6") {
      const text = esc(it.text).replace(/___(\d)___/g, (_, d) => `<span class="gap">(${d})</span>`).replace(/\n/g, "<br>");
      el.innerHTML = `${head}<p class="muted">${T("Read the text and choose the best option for each gap.")}</p>
        <div class="doc en"><b>${esc(loc(it, "title"))}</b><br>${text}</div>
        ${it.gaps.map((g, k) => `<div class="tq tq-${k}"><p class="quiz-q" style="font-size:16px">${T("Gap")} (${k + 1})</p>${opts(g.o)}</div>`).join("")}<div class="tnext"></div>`;
      let answered = 0;
      it.gaps.forEach((g, k) => answerRow(g, k, "R", () => { if (++answered === it.gaps.length) nextBtn(); }));
      return;
    }
    if (kind === "p7") {
      el.innerHTML = `${head}<p class="muted">${it.docs ? T("Read the documents and answer the questions.") : T("Read the document and answer the questions.")}</p>
        ${it.docs ? `<p class="small muted" style="margin:0">${esc(loc(it, "title"))}</p>${it.docs.map((d) => toeicDoc(loc(d, "title"), d.text)).join("")}` : toeicDoc(loc(it, "title"), it.text)}
        ${it.qs.map((q, k) => `<div class="tq tq-${k}"><p class="quiz-q" style="font-size:17px">${k + 1}. ${esc(q.q)}</p>${opts(q.o)}</div>`).join("")}<div class="tnext"></div>`;
      let answered = 0;
      it.qs.forEach((q, k) => answerRow(q, k, "R", () => { if (++answered === it.qs.length) nextBtn(); }));
    }
  }
  show();
  return res;
}
function viewToeicPart(n) {
  n = +n;
  const part = TOEIC.parts.find((p) => p.n === n);
  if (!part || !part.practice) return viewToeic();
  const counts = { 2: 10, 3: 3, 4: 3, 5: 10, 6: 2, 7: 3 };
  app.innerHTML = `${back("#/toeic", "TOEIC")}<h1>${T("Part")} ${n}: ${esc(loc(part, "name"))}</h1><p class="muted">${instr(part.what, part.what_fr)}</p><section class="card" id="tbox"></section>`;
  runToeic($("#tbox"), toeicBlocks(n, counts[n]), "practice", (res) => {
    const [ok, tot] = res[n <= 4 ? "L" : "R"];
    S.toeic.parts = S.toeic.parts || {};
    S.toeic.parts[n] = { ok, n: tot, date: today() };
    addXP(ok * 2, n <= 4 ? "speak" : "reading");
    $("#tbox").innerHTML = `<div class="result-big">${ok} / ${tot}</div><p style="text-align:center">${scoreMsg(ok, tot)}</p><div class="row" style="justify-content:center"><button class="btn" id="again">${T("Practise again")}</button><a class="btn btn-primary" href="#/toeic">TOEIC ${ic("arrow-right")}</a></div>`;
    $("#again").onclick = () => viewToeicPart(n);
  });
}
/* Mock test. Short: about 60 questions with a 25-minute reading timer.
   Full: the real format without part 1 (25 + 39 + 30 listening, 30 + 16 + about 54 reading) and the real 75-minute reading time. */
function viewToeicMock(full) {
  const listening = full
    ? [...toeicBlocks(2, 25), ...toeicBlocks(3, 13), ...toeicBlocks(4, 10)]
    : [...toeicBlocks(2, 8), ...toeicBlocks(3, 3), ...toeicBlocks(4, 2)];
  const reading = full
    ? [...toeicBlocks(5, 30), ...toeicBlocks(6, 4), ...toeicP7Full()]
    : [...toeicBlocks(5, 12), ...toeicBlocks(6, 2), ...toeicBlocks(7, 3)];
  const totalL = listening.reduce((a, bl) => a + blockCount(bl), 0);
  const totalR = reading.reduce((a, bl) => a + blockCount(bl), 0);
  const READ_MIN = full ? 75 : 25;
  let timer = null;
  onCleanup(() => clearInterval(timer));
  app.innerHTML = `
    ${back("#/toeic", "TOEIC")}
    <h1>${ic("timer")} ${T(full ? "Full TOEIC mock test" : "TOEIC mock test")}</h1>
    <section class="card no-tx" id="tbox">
      ${full
        ? `<p>${T("<b>Section 1: Listening</b> (parts 2, 3 and 4: {n} questions, about 45 minutes). As in the real test, each recording plays <b>only once</b>. Use headphones and find a quiet place.", { n: totalL })}</p>
      <p>${T("<b>Section 2: Reading</b> (parts 5, 6 and 7: {q} questions), with a {n}-minute timer, as in the real test.", { q: totalR, n: READ_MIN })}</p>
      <p>${T("Part 1 (photographs) is not included. Plan about two hours. You can take a short break between the two sections.")}</p>`
        : `<p>${T("<b>Section 1: Listening</b> (parts 2, 3 and 4). As in the real test, each recording plays <b>only once</b>. Use headphones and find a quiet place.")}</p>
      <p>${T("<b>Section 2: Reading</b> (parts 5, 6 and 7), with a {n}-minute timer.", { n: READ_MIN })}</p>`}
      <p class="muted small">${T("Translation on click is disabled. Your score comes at the end.")}</p>
      <button class="btn btn-primary" id="go">${ic("play")} ${T("Start the listening section")}</button>
    </section>
    <div class="timer-bar" id="tbar" hidden></div>`;
  $("#go").onclick = () => runToeic($("#tbox"), listening, "mock", (resL) => {
    $("#tbox").innerHTML = `<h2>${ic("check")} ${T("Listening finished")}</h2><p>${T("Now the reading section: {n} minutes. The timer starts when you press the button.", { n: READ_MIN })}</p><button class="btn btn-primary" id="goR">${ic("play")} ${T("Start the reading section")}</button>`;
    $("#goR").onclick = () => {
      const end = Date.now() + READ_MIN * 60000;
      const bar = $("#tbar"); bar.hidden = false;
      let finished = false;
      const finish = (okR) => {
        if (finished) return; finished = true;
        clearInterval(timer); bar.hidden = true;
        const L = toeicScore(resL.L[1] ? resL.L[0] / resL.L[1] : 0), R = toeicScore(totalR ? okR / totalR : 0);
        S.toeic.mocks.push(full ? { date: today(), L, R, full: true } : { date: today(), L, R });
        addXP(40, "step");
        $("#tbox").innerHTML = `
          ${celebrate()}
          <p class="muted small" style="text-align:center;margin:0">${T("Estimated score")}</p>
          <div class="result-big">${L + R}<span class="muted" style="font-size:24px"> / 990</span></div>
          <div class="grid grid-2" style="margin-top:16px">
            <div class="card"><b>${T("Listening")}</b><div class="result-big" style="font-size:36px">${L}</div><p class="muted small" style="margin:0">${T("{a}/{b} correct · level {l}", { a: resL.L[0], b: resL.L[1], l: T(cefrOf(L, "listening")) })}</p></div>
            <div class="card"><b>${T("Reading")}</b><div class="result-big" style="font-size:36px">${R}</div><p class="muted small" style="margin:0">${T("{a}/{b} correct · level {l}", { a: okR, b: totalR, l: T(cefrOf(R, "reading")) })}</p></div>
          </div>
          <p class="muted small" style="margin-top:16px">${full ? T("This is an estimate: the real TOEIC uses a statistical conversion table, and part 1 is not included here. Use it to follow your progress, not as an official score.") : T("This is an estimate based on a shorter test: the real TOEIC uses a statistical conversion table. Use it to follow your progress, not as an official score.")}</p>
          <div class="row" style="justify-content:center"><a class="btn" href="#/toeic">TOEIC</a><a class="btn btn-primary" href="#/toeic/part/5">${T("Practise part {n}", { n: 5 })} ${ic("arrow-right")}</a></div>`;
      };
      const live = runToeic($("#tbox"), reading, "mock", (res) => finish(res.R[0]));
      timer = setInterval(() => {
        const left = Math.max(0, end - Date.now());
        bar.textContent = T("Reading: {t} left", { t: mmss(Math.ceil(left / 1000)) });
        bar.classList.toggle("urgent", left < 120000);
        if (!left) { toast(T("Time's up!")); finish(live.R[0]); }
      }, 500);
    };
  });
}

/* ================= Listening plan (real English outside the app) ================= */
const LIST = () => window.LISTENING || { resources: [], goals: {}, subtitles: {}, intensive: [], extensive: [] };
const weekListen = () => { let m = 0; for (let i = 0; i < 7; i++) m += (S.days[addDays(-i)] || {}).listen || 0; return m; };
function logListening(id, m) {
  const d = todayLog();
  d.ext = (d.ext || 0) + m; d.listen = (d.listen || 0) + m;
  S.extMin = (S.extMin || 0) + m;
  S.listen = S.listen || {};
  const r = S.listen[id] || (S.listen[id] = { min: 0, n: 0 });
  r.min += m; r.n++; r.last = today();
  const xp = Math.round(m / 5);
  S.xp += xp; d.xp += xp;
  save();
  toast(T("{n} min of listening added", { n: m }));
}
const LTYPE = { series: ["tv", "Series"], podcast: ["podcast", "Podcast"], video: ["clapperboard", "Videos"], website: ["globe", "Website"] };
function listenCard(r) {
  const st = (S.listen || {})[r.id];
  const [icon, kind] = LTYPE[r.type] || ["headphones", "Audio"];
  const href = r.url || "https://www.google.com/search?q=" + encodeURIComponent(r.q || r.name);
  return `<section class="card listen-card" data-res="${r.id}">
    <div class="row" style="flex-wrap:nowrap;align-items:flex-start">${tile(icon, r.level)}<div style="flex:1;min-width:0">
      <span class="muted small">${T(kind)} · ${esc(r.accent)} · ${esc(r.length)}${r.toeic ? " · TOEIC" : ""}</span>
      <h3 style="margin:2px 0 0">${esc(r.name)}</h3>
      <p class="muted small" style="margin:2px 0 0">${esc(loc(r, "where"))}</p></div></div>
    <p style="margin:12px 0 6px">${instr(r.why, r.why_fr)}</p>
    <p class="small" style="margin:0"><b>${T("How:")}</b> ${instr(r.how, r.how_fr)}</p>
    <div class="row" style="margin-top:12px">
      <a class="btn btn-sm btn-dark" href="${esc(href)}" target="_blank" rel="noopener">${ic("external-link")} ${T(r.url ? "Open" : "Find it")}</a>
      <span class="spacer"></span><span class="muted small">${T("I listened:")}</span>
      ${[10, 20, 30].map((m) => `<button class="btn btn-sm" data-listen="${r.id}" data-min="${m}">${ic("plus")} ${m} min</button>`).join("")}
    </div>
    ${st ? `<p class="muted small" style="margin:8px 0 0">${T("{n} min logged · last time: {d}", { n: st.min, d: st.last })}</p>` : ""}
  </section>`;
}
function viewListening(lv) {
  const L = LIST();
  const cur = currentLevel();
  const level = LV.includes(lv) ? lv : LV.includes(cur) ? cur : "A1";
  const goal = L.goals[level] || 20;
  const week = weekListen();
  const sub = L.subtitles[level] || ["", ""];
  const res = L.resources.filter((r) => r.level === level);
  const steps = (arr, tag) => `<${tag} class="checklist">${arr.map(([en, f]) => `<li>${ic("check")}<span>${instr(en, f)}</span></li>`).join("")}</${tag}>`;
  app.innerHTML = `
    ${back("#/oral", "Speaking")}
    <h1>${ic("headphones")} ${T("Listening plan")}</h1>
    <p class="muted">${T("The voices in this app are synthetic. To understand real people, and for the TOEIC (half of the test is listening), your ear needs real English every day: podcasts, series, videos. Here is what to listen to at each level, and how.")}</p>
    <section class="card">
      <div class="row">${tile("headphones", level)}<div style="flex:1;min-width:0"><span class="muted small">${levelTag(level)} ${T("Your goal")}</span><h2 style="margin:0">${T("{n} min of real English a day", { n: goal })}</h2></div></div>
      <div class="progress" style="margin:14px 0 6px"><div style="width:${Math.min(100, Math.round((week / (goal * 7)) * 100))}%"></div></div>
      <p class="muted small" style="margin:0">${T("This week: {a} min out of {b}", { a: week, b: goal * 7 })}</p>
      <p class="small" style="margin:12px 0 0"><a href="#/comprehension">${ic("headphones")} ${T("Before real podcasts: the listening lab, step by step, in the app")}</a></p>
      <p class="small" style="margin:12px 0 0"><b>${T("Subtitles at this level:")}</b> ${instr(sub[0], sub[1])}</p>
    </section>
    <details class="card" open>
      <summary><b>${ic("lightbulb")} ${T("How to listen: two methods")}</b></summary>
      <div class="grid grid-2" style="margin-top:12px">
        <div><h3 style="margin:0 0 6px">${T("Intensive listening (10 to 15 min)")}</h3><p class="muted small" style="margin:0 0 6px">${T("A short recording, four times. To make progress on what you hear.")}</p>${steps(L.intensive, "ol")}</div>
        <div><h3 style="margin:0 0 6px">${T("Extensive listening (for pleasure)")}</h3><p class="muted small" style="margin:0 0 6px">${T("A lot of English, without stopping. To get used to real speed and real voices.")}</p>${steps(L.extensive, "ul")}</div>
      </div>
      <p class="muted small" style="margin:12px 0 0">${T("Why English subtitles rather than French ones? In a 2009 study (Mitterer and McQueen), people who watched a film in an unfamiliar English accent with English subtitles then understood that accent better; subtitles in their own language didn't help them.")}</p>
    </details>
    <div class="seg" style="margin:20px 0 4px">${LV.map((x) => `<a href="#/ecoute/${x}" class="${x === level ? "on" : ""}">${x}</a>`).join("")}</div>
    <p class="muted small">${T("Your level is {l}. You can look at the other levels: a resource a little below your level is perfect for listening for pleasure.", { l: cur })}</p>
    <div class="grid grid-2">${res.map(listenCard).join("")}</div>
    <div class="section-title"><h2>${ic("briefcase")} ${T("For the TOEIC")}</h2></div>
    <p class="muted">${T("The TOEIC uses American, British, Canadian and Australian speakers, in work situations. These resources train both at once.")}</p>
    <div class="grid grid-2">${L.resources.filter((r) => r.toeic && r.level !== level).map(listenCard).join("")}</div>
    <p class="muted small" style="margin-top:16px">${T("These are real programmes made by others: they can change or move. If a link no longer works, search for the name.")}</p>`;
  $$("[data-listen]").forEach((b) => (b.onclick = () => {
    const id = b.dataset.listen;
    logListening(id, +b.dataset.min);
    viewListening(level);
    const card = document.querySelector(`[data-res="${id}"]`);
    if (card) card.scrollIntoView({ block: "center" });
  }));
}

/* ================= Talk with someone: Claude out loud, and real people ================= */
const CONV = () => window.CONVERSATION || { goals: {}, calib: {}, topics: {}, scenarios: {}, debates: {}, exams: [], toolkit: [], people: [], before: [], after: [], safety: ["", ""] };
const weekConvos = () => (S.convos || []).filter((c) => c.date >= addDays(-6)).length;
/* o = { level, kind: talk | roleplay | debate | exam | unit, title, title_fr, roles: [claude, me, goal], format, unit, words, min } */
function convPrompt(o) {
  const C = CONV();
  const fr = isFr() || ["A1", "A2", "B1"].includes(o.level);
  const cal = (C.calib[o.level] || C.calib.B1 || ["", ""])[fr ? 1 : 0];
  const kinds = { talk: ["Everyday conversation", "Conversation du quotidien"], roleplay: ["Role-play", "Jeu de rôle"], debate: ["Debate", "Débat"], exam: ["Speaking exam simulation", "Simulation d'oral d'examen"], unit: ["Review of a course unit", "Révision d'une unité du cours"] };
  const [k, kf] = kinds[o.kind] || kinds.talk;
  const r = o.roles || [];
  const u = o.unit;
  const can = u ? u.can.join("; ") : "";
  const gram = u ? u.lessons.map(lessonById).filter(Boolean).map((l) => l.title).join(", ") : "";
  const open = fr ? {
    talk: "pose-moi une première question sur ce sujet.",
    roleplay: `tu joues ${r[0]}, je suis ${r[1]}. Ma mission (consigne qui m'est adressée) : « ${r[2]} ». Commence la scène avec ta première réplique.`,
    debate: "annonce la question du débat, demande-moi ma position, puis défends la position opposée pour m'obliger à argumenter. Concède quand mes arguments sont bons.",
    exam: `${o.format} Commence comme un examinateur, sans me corriger avant la fin.`,
    unit: `une conversation pour réviser l'unité « ${o.title} ». Objectifs de l'unité : ${can}. Grammaire travaillée : ${gram}. Pose des questions qui m'obligent à utiliser cette grammaire.`
  } : {
    talk: "ask me a first question on this topic.",
    roleplay: `you play ${r[0]}, I am ${r[1]}. My mission, as written for me: "${r[2]}". Start the scene with your first line.`,
    debate: "state the debate question, ask for my position, then defend the opposite view so that I have to argue. Concede when my arguments are good.",
    exam: `${o.format} Start as an examiner would, and don't correct me before the end.`,
    unit: `a conversation to review the unit "${o.title}". Unit goals: ${can}. Grammar studied: ${gram}. Ask questions that make me use this grammar.`
  };
  const words = o.words && o.words.length ? o.words.join(", ") : "";
  const lines = fr ? [
    `Bonjour ! Tu vas être mon partenaire de conversation en anglais, à l'oral (je te parle avec le mode vocal ou la dictée). Je suis francophone, niveau ${o.level} (CECRL), et je vise le C1 puis le C2, ainsi que le TOEIC.`,
    "",
    `Activité : ${kf} : ${o.title_fr && o.title_fr !== o.title ? `${o.title_fr} (${o.title})` : o.title}`,
    "",
    "Règles :",
    `- Parle uniquement en anglais, avec ${cal}.`,
    "- Une seule question ou réplique à la fois, puis attends ma réponse. Fais-moi parler plus que toi.",
    "- Ne me corrige pas pendant la conversation. Si une de mes phrases est incompréhensible, reformule-la correctement en une phrase, puis continue.",
    "- Si je dis « en français », explique-moi en une phrase en français, puis reprends en anglais.",
    "- Si je bloque, propose-moi un début de phrase.",
    words ? `- Pousse-moi à utiliser ces mots que j'apprends : ${words}.` : null,
    `- Au bout d'environ ${o.min} minutes, ou quand je dis « feedback », arrête la conversation et fais-moi un retour en français :`,
    "  1. trois choses que j'ai bien faites ;",
    "  2. mes cinq erreurs les plus importantes : ce que j'ai dit, la bonne formulation, et pourquoi ;",
    "  3. cinq expressions naturelles que j'aurais pu utiliser ;",
    "  4. les mots que tu as peut-être mal reçus : tu n'as qu'une transcription de ma voix, signale les mots qui semblent mal reconnus, ce sont peut-être des problèmes de prononciation ;",
    "  5. une estimation de mon niveau à l'oral et UN objectif pour la prochaine fois.",
    "",
    `Commence maintenant : ${open[o.kind] || open.talk}`
  ] : [
    `Hi! You're going to be my English conversation partner, out loud (I'm speaking to you with voice mode or dictation). I'm a French speaker at ${o.level} level (CEFR), aiming for C1 and then C2, as well as the TOEIC.`,
    "",
    `Activity: ${k}: ${o.title}`,
    "",
    "Rules:",
    `- Speak only English, using ${cal}.`,
    "- One question or line at a time, then wait for my answer. Make me speak more than you.",
    "- Don't correct me during the conversation. If one of my sentences can't be understood, rephrase it correctly in one sentence, then carry on.",
    "- If I say \"in French\", explain in one French sentence, then go back to English.",
    "- If I get stuck, suggest how I could start my sentence.",
    words ? `- Push me to use these words I'm learning: ${words}.` : null,
    `- After about ${o.min} minutes, or when I say "feedback", stop the conversation and give me feedback:`,
    "  1. three things I did well;",
    "  2. my five most important mistakes: what I said, the correct version, and why;",
    "  3. five natural expressions I could have used;",
    "  4. words you may not have received correctly: you only get a transcription of my voice, so point out words that seem misrecognised, as they may be pronunciation problems;",
    "  5. an estimate of my speaking level and ONE goal for next time.",
    "",
    `Start now: ${open[o.kind] || open.talk}`
  ];
  return lines.filter((x) => x !== null).join("\n");
}
function logConvo(c) {
  S.convos = S.convos || [];
  S.convos.unshift(Object.assign({ date: today() }, c));
  const d = todayLog();
  d.ext = (d.ext || 0) + c.min; d.convo = (d.convo || 0) + 1;
  S.extMin = (S.extMin || 0) + c.min;
  addXP(Math.round(c.min / 2), "speak");
  toast(T("Conversation saved: well done for speaking!"));
}
function viewConversation(a, b) {
  const C = CONV();
  const cur = currentLevel();
  const unit = a === "unit" ? COURSE.find((u) => u.id === b) : null;
  const level = unit ? unit.level : LV.includes(a) ? a : LV.includes(cur) ? cur : "A1";
  const [perWeek, mins] = C.goals[level] || [2, 15];
  const week = weekConvos();
  const lvIdx = (L) => ["A1", "A2", "B1", "B2", "C1", "C2"].indexOf(L);
  const acts = {};
  let n = 0;
  const row = (o, sub) => {
    const key = "c" + n++;
    acts[key] = Object.assign({ level, min: mins }, o);
    return `<div class="conv-item"><div class="row step-link"><span style="flex:1;min-width:0"><b>${esc(isFr() && o.title_fr ? o.title_fr : o.title)}</b>${sub ? `<br><span class="muted small">${sub}</span>` : ""}</span><button class="btn btn-sm btn-primary" data-conv="${key}" title="${T("Start with Claude")}">${ic("mic")} ${T("Start")}</button></div><div class="cx-panel" id="cp-${key}" hidden></div></div>`;
  };
  const unitWords = unit ? (() => {
    const all = unit.vocab.map((id) => VOCAB.find((t) => t.id === id)).filter(Boolean).flatMap((t) => t.words.map((w) => w[0]));
    const seen = all.filter((w) => S.srs[w]);
    return shuffle(seen.length >= 6 ? seen : all).slice(0, 10);
  })() : [];
  const topics = (C.topics[level] || []).map(([en, f]) => row({ kind: "talk", title: en, title_fr: f })).join("");
  const roles = (C.scenarios[level] || []).map(([t, tf, cl, me, goal]) => row({ kind: "roleplay", title: t, title_fr: tf, roles: [cl, me, goal] }, `${T("Claude plays:")} ${esc(cl)} · ${T("your goal:")} ${esc(goal)}`)).join("");
  const debates = (C.debates[level] || []).map(([en, f]) => row({ kind: "debate", title: en, title_fr: f })).join("");
  const exams = C.exams.filter(([L, name]) => L === level || (/IELTS/.test(name) && lvIdx(level) >= 2)).map(([, name, format, f]) => row({ kind: "exam", title: name, format, min: 15 }, esc(isFr() ? f : format.split(". ")[0] + "."))).join("");
  const kit = C.toolkit.filter(([, , L]) => lvIdx(L) <= lvIdx(level));
  app.innerHTML = `
    ${back("#/oral", "Speaking")}
    <h1>${ic("messages-square")} ${T("Talk with someone")}</h1>
    <p class="muted">${T("You learn to speak by speaking with someone. Two ways that complement each other: Claude, available at any time and endlessly patient, and real people, who bring the unexpected.")}</p>
    <section class="card">
      <div class="row">${tile("messages-square", level)}<div style="flex:1;min-width:0"><span class="muted small">${levelTag(level)} ${T("Your goal")}</span><h2 style="margin:0">${Tn(perWeek, "{n} conversation a week, about {m} min", "{n} conversations a week, about {m} min each", { m: mins })}</h2></div></div>
      <div class="progress" style="margin:14px 0 6px"><div style="width:${Math.min(100, Math.round((week / perWeek) * 100))}%"></div></div>
      <p class="muted small" style="margin:0">${T("This week: {a} out of {b}", { a: week, b: perWeek })}</p>
    </section>
    <div class="seg" style="margin:20px 0 4px">${LV.map((x) => `<a href="#/conversation/${x}" class="${x === level ? "on" : ""}">${x}</a>`).join("")}</div>
    ${unit ? `<section class="card" style="margin-top:12px"><span class="muted small">${T("Unit {a} of {b}", { a: unitNum(unit), b: COURSE.filter((x) => x.level === unit.level).length })}</span><h2 style="margin:4px 0 8px">${esc(loc(unit, "title"))}</h2>
      <ul class="checklist">${unit.can.map((c, i) => `<li>${ic("target")}<span>${instr(c, unit.can_fr && unit.can_fr[i])}</span></li>`).join("")}</ul>
      ${row({ kind: "unit", title: unit.title, title_fr: unit.title_fr, unit, words: unitWords }, unitWords.length ? `${T("Words to use:")} ${esc(unitWords.join(", "))}` : "")}</section>` : ""}
    <div class="section-title"><h2>${ic("bot")} ${T("Out loud with Claude")}</h2></div>
    <section class="card">
      <ol class="cx-steps">
        <li>${T("Choose an activity below and press “Start with Claude”: a message with all the instructions is copied.")}</li>
        <li>${T("Open the Claude app, paste the message, then talk out loud: use voice mode if your app offers it, otherwise your keyboard's dictation microphone.")}</li>
        <li>${T("Speak for {m} minutes or so, then say “feedback”: Claude gives you your mistakes, better expressions and one goal.", { m: mins })}</li>
        <li>${T("Log your conversation at the bottom of this page.")}</li>
      </ol>
      <p class="muted small" style="margin:0">${T("Good to know: Claude only receives a transcription of your voice, so it can't judge your accent precisely. For pronunciation, also use the sentences to repeat and the ear training.")}</p>
    </section>
    <h3 style="margin:20px 0 8px">${T("Everyday conversation")}</h3><div class="card stack-tight">${topics}</div>
    <h3 style="margin:20px 0 8px">${T("Role-plays")}</h3><div class="card stack-tight">${roles}</div>
    ${debates ? `<h3 style="margin:20px 0 8px">${T("Debates")}</h3><p class="muted small">${T("Claude defends the opposite view: you have to argue.")}</p><div class="card stack-tight">${debates}</div>` : ""}
    ${exams ? `<h3 style="margin:20px 0 8px">${T("Speaking exam simulation")}</h3><p class="muted small">${T("Claude plays the examiner (and the other candidate), following the official format. Photos are described in words.")}</p><div class="card stack-tight">${exams}</div>` : ""}
    <div class="section-title"><h2>${ic("users")} ${T("With real people")}</h2></div>
    <div class="grid grid-2">${C.people.map((p) => `<section class="card"><div class="row">${tile(p.icon, level)}<div style="flex:1;min-width:0"><h3 style="margin:0">${esc(loc(p, "name"))}</h3><span class="muted small">${esc(loc(p, "cost"))}</span></div></div><p style="margin:12px 0 6px">${instr(p.what, p.what_fr)}</p><p class="small" style="margin:0"><b>${T("Tip:")}</b> ${instr(p.tip, p.tip_fr)}</p></section>`).join("")}</div>
    <section class="card" style="margin-top:16px;background:var(--yellow-soft);border-color:transparent"><b>${ic("shield")} ${T("Safety")}</b> ${instr(C.safety[0], C.safety[1])}</section>
    <div class="grid grid-2" style="margin-top:16px">
      <section class="card"><h3 style="margin:0 0 8px">${T("Before a conversation")}</h3><ul class="checklist">${C.before.map(([en, f]) => `<li>${ic("check")}<span>${instr(en, f)}</span></li>`).join("")}</ul></section>
      <section class="card"><h3 style="margin:0 0 8px">${T("After a conversation")}</h3><ul class="checklist">${C.after.map(([en, f]) => `<li>${ic("check")}<span>${instr(en, f)}</span></li>`).join("")}</ul></section>
    </div>
    <div class="section-title"><h2>${ic("message-square-quote")} ${T("Conversation toolkit")}</h2></div>
    <p class="muted">${T("The phrases that save a conversation: listen, repeat them out loud, and keep them in mind when you talk.")}</p>
    <div class="grid grid-2">${kit.map(([fn, fnf, L, ps]) => `<section class="card"><div class="row" style="margin-bottom:8px">${levelTag(L)}<h3 style="margin:0">${esc(isFr() ? fnf : fn)}</h3></div><ul class="examples">${ps.map(([en, f]) => `<li>${sayBtn(en)}<div style="flex:1"><div class="en">${esc(en)}</div><div class="fr">${esc(f)}</div></div></li>`).join("")}</ul></section>`).join("")}</div>
    <div class="section-title"><h2>${ic("notebook-pen")} ${T("My conversations")}</h2></div>
    <section class="card">
      <div class="row"><label class="small">${T("With")} <select id="cvWho" class="field" style="width:auto"><option value="claude">Claude</option><option value="person">${T("a person")}</option></select></label>
        <label class="small">${T("Minutes")} <select id="cvMin" class="field" style="width:auto">${[5, 10, 15, 20, 30, 45, 60].map((m) => `<option ${m === mins ? "selected" : ""}>${m}</option>`).join("")}</select></label></div>
      <input id="cvTopic" class="field" style="margin-top:10px" placeholder="${T("What did you talk about?")}">
      <textarea id="cvNotes" class="field note" rows="4" style="margin-top:10px" placeholder="${T("Corrections and new expressions to remember…")}" lang="${APP.target}"></textarea>
      <div class="row" style="margin-top:10px"><button class="btn btn-dark btn-sm" id="cvSave">${ic("save")} ${T("Save this conversation")}</button></div>
    </section>
    <div class="stack" style="margin-top:12px">${(S.convos || []).slice(0, 30).map((c) => `<details class="card"><summary><b>${esc(c.title || T("Conversation"))}</b> <span class="muted small">${esc(c.date)} · ${c.who === "person" ? T("with a person") : "Claude"} · ${c.min} min</span></summary>${c.notes ? `<div class="model cx-text no-tx" style="margin-top:10px">${esc(c.notes)}</div>` : `<p class="muted small" style="margin:10px 0 0">${T("No notes.")}</p>`}</details>`).join("")}</div>`;
  $$("[data-conv]").forEach((btn) => (btn.onclick = async () => {
    const key = btn.dataset.conv, o = acts[key];
    const prompt = convPrompt(o);
    const copied = await copyText(prompt);
    $$(".conv-item .cx-panel").forEach((p) => { if (p.id !== "cp-" + key) p.hidden = true; });
    const panel = $("#cp-" + key);
    panel.hidden = false;
    panel.innerHTML = `
      <p style="margin:0 0 10px">${copied ? `<b>${T("Message copied.")}</b> ${T("Open Claude, paste it and start talking.")}` : `<b>${T("Copy the message below.")}</b> ${T("Your browser didn't allow automatic copying.")}`}</p>
      <div class="row"><a class="btn btn-sm btn-dark" href="https://claude.ai/new" target="_blank" rel="noopener">${ic("external-link")} ${T("Open Claude")}</a><button class="btn btn-sm" data-recopy="${key}">${ic("copy")} ${T("Copy again")}</button></div>
      <details style="margin-top:10px" ${copied ? "" : "open"}><summary class="small">${T("See the message")}</summary><textarea class="field cx-prompt" rows="10" readonly>${esc(prompt)}</textarea></details>
      <div class="row" style="margin-top:12px"><span class="muted small">${T("Finished? I talked for:")}</span>${[5, 10, 15, 20, 30].map((m) => `<button class="btn btn-sm" data-logc="${key}" data-min="${m}">${m} min</button>`).join("")}</div>`;
    $(`[data-recopy="${key}"]`).onclick = async () => toast((await copyText(prompt)) ? T("Message copied") : T("Copy the message by hand"));
    $$(`[data-logc="${key}"]`).forEach((b2) => (b2.onclick = () => {
      logConvo({ who: "claude", min: +b2.dataset.min, title: o.title, level: o.level, kind: o.kind });
      viewConversation(a, b);
    }));
    panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }));
  $("#cvSave").onclick = () => {
    const topic = $("#cvTopic").value.trim(), notes = $("#cvNotes").value.trim();
    if (!topic && !notes) { toast(T("Write the topic or a few notes first")); return; }
    logConvo({ who: $("#cvWho").value, min: +$("#cvMin").value, title: topic || T("Conversation"), level, kind: "log", notes });
    viewConversation(a, b);
  };
}

/* ================= "Get my text corrected": a ready-made message for Claude ================= */
const nWords = (t) => (t.trim() ? t.trim().split(/\s+/).length : 0);
function correctionPrompt(o) {
  const fr = isFr() || ["A1", "A2", "B1"].includes(o.level);
  const lines = fr ? [
    `Bonjour ! Tu es mon professeur d'anglais. Je suis francophone, j'ai le niveau ${o.level} (CECRL) et je vise le niveau C2 et le TOEIC.`,
    "",
    `Exercice : ${o.kind_fr}`,
    `Consigne : ${o.task_fr ? `${o.task_fr} (en anglais : ${o.task})` : o.task}`,
    o.words ? `Longueur demandée : environ ${o.words} mots.` : null,
    o.focus ? `Points travaillés : ${o.focus}` : null,
    o.criteria && o.criteria.length ? `Critères de réussite : ${o.criteria.join(" ; ")}` : null,
    ...(o.source ? ["", "Texte de départ (à résumer, expliquer, décrire ou corriger) :", '"""', o.source, '"""'] : []),
    "",
    "Mon texte :",
    '"""', o.text.trim(), '"""',
    "",
    "Corrige-moi comme un bon professeur :",
    `1. Mon texte corrigé en entier, en gardant mes idées et un niveau ${o.level} (ne le rends pas trop compliqué). Mets en gras ce que tu as changé.`,
    "2. Un tableau de mes erreurs : ce que j'ai écrit, la correction, et pourquoi (une phrase simple, en français). Indique le type d'erreur : grammaire, vocabulaire, orthographe ou ponctuation.",
    "3. Deux ou trois façons de rendre mon texte plus naturel, adaptées à mon niveau.",
    "4. Ce que j'ai bien fait (sois précis).",
    "5. Une note sur 10 et LE point le plus important à travailler.",
    "6. Un mini-exercice de 3 phrases à compléter sur ce point, avec les réponses à la fin.",
    "",
    "Ne remplace pas ce qui est déjà correct par des tournures plus recherchées : je veux voir mes vraies erreurs."
  ] : [
    `Hi! You're my English teacher. I'm a French speaker at ${o.level} level (CEFR), aiming for C2 and the TOEIC.`,
    "",
    `Task type: ${o.kind}`,
    `Instructions: ${o.task}`,
    o.words ? `Expected length: about ${o.words} words.` : null,
    o.focus ? `Language focus: ${o.focus}` : null,
    o.criteria && o.criteria.length ? `Success criteria: ${o.criteria.join("; ")}` : null,
    ...(o.source ? ["", "Source material (to summarise, explain, describe or correct):", '"""', o.source, '"""'] : []),
    "",
    "My text:",
    '"""', o.text.trim(), '"""',
    "",
    "Please correct it like a good teacher:",
    `1. My corrected text in full, keeping my ideas and a ${o.level} level (don't make it too sophisticated). Put your changes in bold.`,
    "2. A table of my mistakes: what I wrote, the correction, and why (one short, simple sentence). Say what type of mistake it is: grammar, vocabulary, spelling or punctuation.",
    "3. Two or three ways to make my text sound more natural at my level (collocations, linking words, register).",
    "4. What I did well (be specific).",
    "5. A mark out of 10 and THE most important thing to work on.",
    "6. A mini exercise of 3 sentences to complete on that point, with the answers at the end.",
    "",
    "Don't replace what is already correct with fancier phrases: I want to see my real mistakes."
  ];
  return lines.filter((x) => x !== null).join("\n");
}
async function copyText(t) {
  try { if (navigator.clipboard && window.isSecureContext) { await navigator.clipboard.writeText(t); return true; } } catch (e) { /* fall back below */ }
  try {
    const ta = document.createElement("textarea");
    ta.value = t; ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    const ok = document.execCommand("copy");
    ta.remove();
    return ok;
  } catch (e) { return false; }
}
function correctionBox(key) {
  const c = (S.corrections || {})[key];
  return `<div class="correct-box">
    <div class="row"><button class="btn btn-sm btn-primary" id="cxBtn">${ic("spell-check")} ${T("Get my text corrected")}</button><span class="muted small">${T("by Claude, like a teacher")}</span></div>
    <div id="cxPanel" class="cx-panel" hidden></div>
    ${c && c.correction ? `<details class="cx-saved"><summary><b>${T("My last correction")}</b> <span class="muted small">${esc(c.date)}</span></summary><div class="model cx-text no-tx">${esc(c.correction)}</div></details>` : ""}
  </div>`;
}
/* getCtx() returns { text, level, kind, kind_fr, task, task_fr, words, focus, criteria, title }. */
function bindCorrection(key, getCtx) {
  if (!$("#cxBtn")) return;
  $("#cxBtn").onclick = async () => {
    const ctx = getCtx();
    if (nWords(ctx.text) < 5) { toast(T("Write your text first (at least a few sentences)")); return; }
    const prompt = correctionPrompt(ctx);
    const copied = await copyText(prompt);
    const prev = ((S.corrections || {})[key] || {}).correction || "";
    const panel = $("#cxPanel");
    panel.hidden = false;
    panel.innerHTML = `
      <ol class="cx-steps">
        <li>${copied ? `<b>${T("Message copied.")}</b> ${T("It contains your text and precise instructions for the correction.")}` : `<b>${T("Copy the message below.")}</b> ${T("Your browser didn't allow automatic copying.")}`}</li>
        <li>${T("Open Claude, paste the message (Cmd+V) and send it.")}</li>
        <li>${T("Read the correction, then correct your own text: that's where you learn.")}</li>
        <li>${T("Paste the correction below to keep it. You'll find it again in “My mistakes”.")}</li>
      </ol>
      <div class="row"><a class="btn btn-sm btn-dark" href="https://claude.ai/new" target="_blank" rel="noopener">${ic("external-link")} ${T("Open Claude")}</a><button class="btn btn-sm" id="cxCopy">${ic("copy")} ${T("Copy again")}</button></div>
      <details style="margin-top:10px" ${copied ? "" : "open"}><summary class="small">${T("See the message")}</summary><textarea class="field cx-prompt" rows="9" readonly>${esc(prompt)}</textarea></details>
      <p class="muted small">${T("Nothing is sent automatically: your text only goes to Claude if you paste it there yourself.")}</p>
      <label class="small" for="cxCorr"><b>${T("Claude's correction")}</b></label>
      <textarea class="field note" id="cxCorr" rows="6" placeholder="${T("Paste the correction here…")}">${esc(prev)}</textarea>
      <div class="row" style="margin-top:8px"><button class="btn btn-sm btn-dark" id="cxSave">${ic("save")} ${T("Keep this correction")}</button></div>`;
    $("#cxCopy").onclick = async () => toast((await copyText(prompt)) ? T("Message copied") : T("Copy the message by hand"));
    $("#cxSave").onclick = () => {
      const v = $("#cxCorr").value.trim();
      if (!v) { toast(T("Paste the correction first")); return; }
      S.corrections = S.corrections || {};
      const first = !S.corrections[key];
      S.corrections[key] = { date: today(), text: ctx.text.trim(), correction: v, title: ctx.title, level: ctx.level, href: location.hash };
      if (first) addXP(5, "free"); else save();
      toast(T("Correction saved"));
    };
    panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };
}

/* ================= Books ================= */
function viewBooks() {
  app.innerHTML = `
    <h1>${T("Books and resources")}</h1>
    <p class="muted">${T("Reading is the best way to grow your vocabulary without noticing. <b>The golden rule</b>: to read with pleasure, you need to know about 98% of the words, so no more than 2 or 3 unknown words per page. Too hard, you decode instead of reading and you give up. Just right, you progress while having fun.")}</p>
    <div class="card" style="margin-top:16px;background:var(--blue-soft);border-color:transparent"><b>${ic("map-pin")} ${T("Your current level: {l}.", { l: currentLevel() })}</b> ${T("Start with the matching section, and move up when you read without effort.")}</div>
    ${BOOKS.map((g) => `
      <div class="level-head">${levelTag(g.level)}<h2>${esc(loc(g, "label"))}</h2></div>
      <p class="muted">${instr(g.note, g.note_fr)}</p>
      <div class="grid grid-2">
        ${g.items.map((b) => `
          <div class="card book">
            <div class="book-cover" style="background:${b.color}">${ic(b.icon)}</div>
            <div style="min-width:0">
              <h3 class="en">${esc(loc(b, "title"))}</h3>
              <div class="author">${esc(b.author)}</div>
              <p>${instr(b.desc, b.desc_fr)}</p>
              <div class="why">${ic("lightbulb")} ${instr(b.why, b.why_fr)}</div>
            </div>
          </div>`).join("")}
      </div>`).join("")}
    <div class="section-title"><h2>${T("For your ears, and for speaking")}</h2></div>
    <div class="grid grid-2">
      ${RESOURCES.map((r) => `<div class="card"><div class="row" style="flex-wrap:nowrap;align-items:flex-start">${tile(r.icon, "B1")}<div><h3 style="margin:0 0 4px">${esc(loc(r, "title"))}</h3><p class="muted small" style="margin:0">${instr(r.desc, r.desc_fr)}</p></div></div></div>`).join("")}
    </div>
    <div class="card" style="margin-top:20px">
      <h3>${ic("notebook-pen")} ${T("How to read a real book")}</h3>
      <ul class="muted" style="margin:0;padding-left:20px">
        <li>${T("Read <b>10 minutes a day</b> rather than an hour on Sunday.")}</li>
        <li>${T("<b>Don't</b> look up every word. Guess from the context. If a word comes back 3 times, then look it up.")}</li>
        <li>${T("Note useful words in <a href=\"#/mes-mots\">My words</a>: they'll go into your reviews.")}</li>
        <li>${T("If you can, get the <b>audio</b> version too and read while listening.")}</li>
      </ul>
    </div>`;
}

/* ================= Router ================= */
const NAV_OF = { "": "home", cours: "cours", unite: "cours", ecrit: "cours", test: "cours", examen: "cours", certificat: "cours", "dictee-unite": "cours", repeter: "cours", parcours: "plus", methode: "plus", lecons: "plus", "revision-grammaire": "plus", grammaire: "plus", vocabulaire: "vocabulaire", reviser: "vocabulaire", apprendre: "vocabulaire", ecrire: "vocabulaire", "mes-mots": "vocabulaire", irreguliers: "vocabulaire", lecture: "lecture", oral: "oral", parler: "oral", dialogue: "oral", erreurs: "plus", oreille: "oral", comprehension: "oral", contexte: "cours", lexique: "vocabulaire", prononciation: "oral", competences: "plus", placement: "plus", bilan: "plus", grilles: "plus", ecoute: "oral", conversation: "oral", dictee: "oral", toeic: "plus", livres: "plus", plus: "plus" };
/* Tools a course doesn't have yet (the French course grows level by level): their links disappear and their pages
   lead to More. */
const HAS = {
  toeic: () => (TOEIC.parts || []).length > 0, livres: () => BOOKS.length > 0, prononciation: () => PRON().length > 0,
  comprehension: () => LAB().length > 0, oreille: () => SOUNDS.length > 0, conversation: () => !!window.CONVERSATION,
  ecoute: () => !!window.LISTENING, placement: () => !!window.PLACEMENT, bilan: () => !!window.PLACEMENT || CANDO.length > 0,
  grilles: () => CANDO.length > 0, competences: () => ACAD().length > 0, grammaire: () => GRAMMAR_REF.length > 0,
  lexique: () => Object.keys(LEX()).length > 0, irreguliers: () => IRREGULARS.length > 0, methode: () => METHODS.length > 0
};
const hasTool = (k) => !HAS[k] || HAS[k]();
function hideMissingTools() {
  $$("main a[href^='#/'], .footer a[href^='#/']").forEach((a) => {
    const m = a.getAttribute("href").match(/^#\/([a-z-]+)/);
    if (m && !hasTool(m[1])) a.remove();
  });
}
function route() {
  try { trackPath(); } catch (e) {}
  cleanups.forEach((f) => { try { f(); } catch (e) {} });
  cleanups = [];
  stopAudio(); closePop();
  const [a = "", b, c] = location.hash.replace(/^#\/?/, "").split("/");
  const views = {
    "": viewHome,
    cours: viewCourse,
    unite: () => viewUnit(b),
    ecrit: () => viewWriting(b),
    test: () => viewUnitTest(b),
    examen: () => viewExam(b),
    certificat: () => viewCertificate(b),
    "dictee-unite": () => viewDictee(null, b),
    repeter: () => {
      const u = COURSE.find((x) => x.id === b);
      if (!u) return viewCourse();
      const phrases = u.lessons.map(lessonById).filter(Boolean).flatMap((l) => l.examples).filter(([en]) => !/[\/…]/.test(en)).slice(0, 10);
      viewSpeak({ title: T("Unit {n}: key sentences", { n: unitNum(u) }), phrases }, `#/unite/${u.id}`, `Unit ${unitNum(u)}`, () => { const us = unitState(u.id); if (!us.speak) { us.speak = true; markStep(); } });
    },
    parcours: viewParcours,
    methode: viewMethode,
    lecons: () => (b ? viewLesson(b) : viewLessons()),
    "revision-grammaire": viewGrammarReview,
    grammaire: () => viewGrammarRef(b),
    vocabulaire: () => (b ? viewTheme(b) : viewVocab()),
    reviser: () => viewFlash("review"),
    apprendre: () => viewFlash("learn", b),
    ecrire: () => viewWrite(b),
    "mes-mots": viewMyWords,
    irreguliers: viewIrregulars,
    lecture: () => (b ? viewReading(b, c) : viewReadings()),
    oral: () => {
      if (!b) return viewSpeaking();
      const set = SPEAKING.find((x) => x.id === b);
      const u = COURSE.find((x) => x.speak === b);
      viewSpeak(set, u ? `#/unite/${u.id}` : "#/oral", u ? `Unit ${unitNum(u)}` : "Speaking");
    },
    parler: () => viewPrompt(b),
    dialogue: () => viewDialogue(b, c),
    erreurs: viewMistakes,
    oreille: viewEar,
    comprehension: () => (b ? viewLab(b) : viewLabHub()),
    contexte: () => viewContext(b),
    lexique: () => (b ? viewLexis(b) : viewLexisHub()),
    competences: () => (b ? viewAcadChapter(b) : viewAcadHub()),
    placement: () => (b ? viewPlaceSection(b) : viewPlacement()),
    bilan: viewReport,
    grilles: () => viewCando(b),
    prononciation: () => {
      if (b === "api") return viewPronIPA();
      const ch = pronById(b);
      if (ch && c === "repeter") return viewSpeak({ title: ch.title, title_fr: ch.title_fr, phrases: ch.practice }, `#/prononciation/${ch.id}`, loc(ch, "title"));
      return ch ? viewPronChapter(b) : viewPronCourse();
    },
    ecoute: () => viewListening(b),
    conversation: () => viewConversation(b, c),
    dictee: () => viewDictee(b),
    toeic: () => (b === "part" ? viewToeicPart(c) : b === "mock" ? viewToeicMock() : b === "full" ? viewToeicMock(true) : viewToeic()),
    livres: viewBooks,
    plus: () => viewMore(b)
  };
  (hasTool(a) ? views[a] || viewHome : viewMore)();
  hideMissingTools();
  const nav = NAV_OF[a] || "home";
  applyStatic();
  $$("[data-nav]").forEach((l) => l.classList.toggle("active", l.dataset.nav === nav));
  window.scrollTo(0, 0);
  renderTopStats();
}
/* Static texts of index.html (menus, footer) follow the interface language. */
function applyStatic() {
  document.documentElement.lang = lang();
  $$("[data-t]").forEach((el) => {
    const nodes = Array.from(el.childNodes).filter((n) => n.nodeType === 3 && n.nodeValue.trim());
    const tn = nodes[nodes.length - 1];
    if (tn) tn.nodeValue = T(el.dataset.t); else el.append(T(el.dataset.t));
  });
}
function setLang(l) {
  if (!LANGS.some(([k]) => k === l)) return;
  /* German course: German is immersion, and the translations stay in the language used until now. */
  if (GERMAN_COURSE && l === "de" && lang() !== "de") S.helpLang = lang();
  S.lang = l; save();
  if (APP.reloadOnLang) { location.reload(); return; }
  route();
  toast(T("Interface language changed"));
}
window.addEventListener("hashchange", route);
route();

if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}
})();
