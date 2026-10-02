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

/* ================= Interface language =================
   The course content stays in English: only the interface changes.
   T("English text", {vars}) gives the text in the chosen language (English if no translation).
   loc(obj, "title") gives obj.title_fr in French when it exists.
   instr(en, fr): an instruction in English with its FR button, or directly in French. */
const LANGS = [["en", "English"], ["fr", "Français"]];
const lang = () => (typeof S !== "undefined" && S.lang) || "en";
const isFr = () => lang() === "fr";
function T(s, vars) {
  const d = (window.UI_TEXT || {})[lang()];
  let out = (d && d[s]) || s;
  if (vars) out = out.replace(/\{(\w+)\}/g, (_, k) => (vars[k] != null ? vars[k] : ""));
  return out;
}
const Tn = (n, one, many, vars) => T(n > 1 ? many : one, Object.assign({ n }, vars || {}));
const loc = (o, k) => (o && lang() !== "en" && o[k + "_" + lang()]) || (o && o[k]);
const instr = (en, f) => (isFr() && f ? `<span class="fr-ui">${esc(f)}</span>` : `${esc(en)}${fr(f)}`);
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
})();
const lnum = (l) => LESSONS.indexOf(l) + 1;
const lessonById = (id) => LESSONS.find((l) => l.id === +id);
const unitOfLesson = (id) => COURSE.find((u) => u.lessons.includes(+id));

/* ================= Storage ================= */
const KEY = "stepbystep.v1";
const defaults = () => ({ xp: 0, days: {}, lessons: {}, readings: {}, srs: {}, myWords: [], spoken: {}, prompts: {}, notes: {}, ritual: null, rate: 0.9, voice: "", dir: "auto", goal: 30, siteSec: 0, extMin: 0, units: {}, exams: {}, irr: {}, mistakes: {}, pron: {}, toeic: { mocks: [], parts: {} } });
function load() {
  try { return Object.assign(defaults(), JSON.parse(localStorage.getItem(KEY) || "{}")); }
  catch (e) { return defaults(); }
}
let S = load();
if (!S.toeic || !S.toeic.mocks) S.toeic = { mocks: [], parts: {} };
function save() {
  try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* private browsing */ }
  renderTopStats();
}
const unitState = (id) => (S.units[id] = S.units[id] || {});

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
  30: { words: 15, steps: 2, speak: 8, free: 1, dictee: 5, ext: 0 },
  60: { words: 25, steps: 3, speak: 10, free: 2, dictee: 10, ext: 20 }
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
const locale = () => (isFr() ? "fr-FR" : "en-GB");
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
function currentUnit() { return COURSE.find((u) => !unitDone(u)) || COURSE[COURSE.length - 1]; }
function currentLevel() {
  for (const L of LV) if (!(S.exams[L] >= 70) && COURSE.some((u) => u.level === L && !unitDone(u))) return L;
  for (const L of LV) if (!(S.exams[L] >= 70)) return L;
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
const GOOD = /premium|enhanced|amélior|natural|neural|google|microsoft|siri|^(samantha|daniel|karen|moira|tessa|rishi|aaron|arthur|catherine|gordon|martha|nicky|alex|fiona|veena|allison|ava|susan|tom|serena|kate|oliver|zoe|evan|nathan|joelle|noelle|jamie|matilda|lee|isha|sangeeta|stephanie)\b/i;
const FEMALE = /samantha|karen|moira|tessa|martha|catherine|nicky|serena|ava|zoe|kate|fiona|allison|susan|joelle|noelle|matilda|isha|sangeeta|veena|stephanie|female|libby|sonia|jenny|aria|emma|amy/i;
function loadVoices() {
  if (!synth) return;
  const en = synth.getVoices().filter((v) => /^en[-_]/i.test(v.lang) && !NOVELTY.test(v.name));
  const good = en.filter((v) => GOOD.test(v.name));
  voices = good.length ? good : en;
}
if (synth) { loadVoices(); synth.onvoiceschanged = () => { loadVoices(); if (location.hash === "" || location.hash === "#/") route(); }; }
function voiceScore(v) {
  let s = 0;
  if (/premium|enhanced|amélior|natural|neural/i.test(v.name)) s += 10;
  if (/^Google (UK|US) English/i.test(v.name)) s += 6;
  if (GOOD.test(v.name)) s += 4;
  if (/en[-_]GB/i.test(v.lang)) s += 2;
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
function voiceFor(speaker, i) {
  const r = ranked();
  if (!r.length) return null;
  const fem = r.filter((v) => FEMALE.test(v.name)), mal = r.filter((v) => !FEMALE.test(v.name));
  const sp = String(speaker || "");
  const isF = /^(W\b|W\d|Woman|Stella|Kate|Lou|Rita|Hannah|Mei|Amy|Helen|Sophie|Lisa|Karen|Laura|Jess|Emma|Anna|Maria|Sofia|Jenna|Olivia|Reader|Nadia|Clara|Julia|Sarah|Lucy|Mia|Zoe|Grace|Chloe)/i.test(sp);
  const isM = /^(M\b|M\d|Man|Waiter|Clerk|Sam|Raj|Ben|Tom|Paul|Ken|Mark|Marc|David|James|Leo|Dan|Max|Jack|Oliver|Chris|Pete|Joe)/i.test(sp);
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
    if (v) { u.voice = v; u.lang = v.lang; } else u.lang = "en-GB";
    u.rate = opts.rate || S.rate;
    if (btn) { btn.classList.add("playing"); playingBtn = btn; }
    u.onend = u.onerror = () => { if (btn) btn.classList.remove("playing"); resolve(); };
    synth.speak(u);
  });
}
/* Play several lines one after the other, with a voice per speaker. */
async function playLines(lines, btn) {
  stopAudio();
  const seq = playSeq;
  const speakers = [];
  if (btn) btn.classList.add("playing");
  for (const [sp, text] of lines) {
    if (seq !== playSeq) break;
    if (sp && !speakers.includes(sp)) speakers.push(sp);
    await speak(text, null, { voice: sp ? voiceFor(sp, speakers.indexOf(sp)) : bestVoice(), keep: true });
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
const fr = (french) => french ? ` <button class="fr-btn" data-fr="${esc(french)}" aria-label="Traduction en français" title="Traduction">FR</button>` : "";
const WORD_RE = /([A-Za-zÀ-ÖØ-öø-ÿ][A-Za-zÀ-ÖØ-öø-ÿ'’-]*[A-Za-zÀ-ÖØ-öø-ÿ]|[A-Za-zÀ-ÖØ-öø-ÿ])/;
let DICT = new Map();
const IRR_FORMS = {};
function buildDict() {
  DICT = new Map();
  const add = (k, v) => { k = String(k).toLowerCase().replace(/’/g, "'").trim(); if (k && v && !DICT.has(k)) DICT.set(k, v); };
  VOCAB.forEach((t) => t.words.forEach(([en, f]) => {
    const parts = en.split(" / ");
    const fparts = f.split(" / ");
    parts.forEach((p, i) => {
      const k = p.replace(/\((uk|us)\)/gi, "").replace(/[?!.…]/g, "").trim().replace(/^to /, "").replace(/^(a|an|the) /, "");
      add(k, parts.length === fparts.length ? fparts[i] : f);
    });
  }));
  (window.IRREGULARS || []).forEach(([base, past, pp, f]) => {
    add(base, f);
    past.split(" / ").forEach((p) => { IRR_FORMS[p.trim()] = { base, kind: "past" }; });
    pp.split(" / ").forEach((p) => { const k = p.replace(/\(.*\)/, "").trim(); if (!IRR_FORMS[k]) IRR_FORMS[k] = { base, kind: "past participle" }; });
  });
  READINGS.forEach((r) => Object.entries(r.glossary || {}).forEach(([k, v]) => add(k, v)));
  S.myWords.forEach((w) => add(w.en, w.fr));
  /* General dictionary last: the course's own translations always win. */
  Object.entries(window.DICT_EN_FR || {}).forEach(([k, v]) => add(k, v));
}
buildDict();
function lookup(raw, gloss) {
  const w = String(raw).toLowerCase().replace(/’/g, "'");
  if (gloss) { const g = gloss[w] || gloss[w.replace(/'s$/, "")]; if (g) return { base: w, fr: g }; }
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
/* Wrap every English word of the page in a clickable span. */
const SKIP = "button, a, input, textarea, select, option, script, style, svg, .fr-text, .fr, .no-tx, .popover, .w, .kbd, .tag, .pill, .seg, label, .speaker, .fr-ui";
/* Not real words: single letters (except a and I), suffixes and prefixes quoted alone (-tion, thir-), endings after a digit (2nd). */
const fragmentAt = (parts, k) => /^[b-hj-z]$/i.test(parts[k]) || /(^|[\s(“"‘«,\/])[-–]$|\d$/.test(parts[k - 1] || "") || /^[-–](?![A-Za-z])/.test(parts[k + 1] || "");
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
    const frag = document.createDocumentFragment();
    /* Text left unwrapped stays in one node with its context (so "-tion" is still a suffix on the next pass),
       and a node where nothing is clickable isn't touched (no endless repaint). */
    let buf = "", wrapped = 0;
    parts.forEach((part, k) => {
      if (!part) return;
      /* French interface: only the English words we can translate are clickable. */
      if (k % 2 === 1 && !fragmentAt(parts, k) && (!isFr() || lookup(part))) {
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
  pop.innerHTML = `<b>${esc(word)}</b>${res ? `<span>${esc(res.fr)}</span>${res.base !== word.toLowerCase() ? `<span class="small" style="opacity:.7;display:block">${T("from “{w}”", { w: esc(res.base) })}</span>` : ""}` : `<span style="opacity:.75">${T("No translation yet for this word.")}</span>`}
    ${sentenceEl ? `<div class="pop-sentence" hidden>${esc(sentenceEl.dataset.fr)}</div>` : ""}
    <div class="row">
      <button class="btn btn-sm" data-say="${esc(word)}" aria-label="${T("Listen")}">${ic("volume-2")}</button>
      <button class="btn btn-sm" id="addW" title="Ajouter à mes mots">${ic("plus")} ${T("My words")}</button>
      ${sentenceEl ? `<button class="btn btn-sm" id="popSent" title="Traduire la phrase">${ic("languages")} ${T("Sentence")}</button>` : ""}
      <a class="btn btn-sm" href="https://www.wordreference.com/enfr/${encodeURIComponent(word.toLowerCase())}" target="_blank" rel="noopener">${T("Dictionary")} ${ic("external-link")}</a>
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
function renderTopStats() {
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
        <form id="tForm" autocomplete="off"><input class="type-input" id="tAns" autocapitalize="off" autocorrect="off" spellcheck="false" lang="en" placeholder="${T("Type your answer in English…")}">
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
        <form id="xForm" autocomplete="off"><input class="type-input fix-input" id="xAns" autocapitalize="off" autocorrect="off" spellcheck="false" lang="en" value="${esc(q.wrong)}">
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
        <div class="quiz-q">${T("Match each English sentence with its translation.")}</div>
        <div class="match-grid">
          <div class="match-col">${en.map((x) => `<button type="button" class="match-btn" data-side="en" data-k="${x.k}">${esc(x.t)}</button>`).join("")}</div>
          <div class="match-col no-tx">${frs.map((x) => `<button type="button" class="match-btn" data-side="fr" data-k="${x.k}">${esc(x.t)}</button>`).join("")}</div>
        </div>
        <div class="fb"></div>`;
      let sel = null, errors = 0, left = q.pairs.length;
      $$(".match-btn", el).forEach((b) => (b.onclick = () => {
        if (b.disabled) return;
        if (!sel || sel.dataset.side === b.dataset.side) { if (sel) sel.classList.remove("sel"); sel = b; b.classList.add("sel"); if (b.dataset.side === "en") speak(q.pairs[+b.dataset.k][0]); return; }
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
          rec = new SR(); rec.lang = "en-US"; rec.interimResults = false; rec.maxAlternatives = 5;
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
  CONTR.forEach(([re, rep]) => { t = t.replace(re, rep); });
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
  if (m) return { type: "type", q: "Write it in English:", q_fr: "Écris-le en anglais :", big: m[1], answer: ans, ex: q.ex, ex_fr: q.ex_fr };
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
const numWords = (n) => n < 20 ? UNITS_W[n] : n < 100 ? TENS[Math.floor(n / 10)] + (n % 10 ? " " + UNITS_W[n % 10] : "") : String(n);
const dictTokens = (s) => String(s).toLowerCase().replace(/[’`]/g, "'").replace(/-/g, " ")
  .replace(/\d+/g, (d) => numWords(+d)).replace(/[^a-z0-9' ]/g, " ").split(/\s+/).filter(Boolean);
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
function viewHome() {
  const log = S.days[today()] || {};
  const G = goal();
  const cur = currentLevel();
  const due = dueIds().length;
  const dueL = dueLessons();
  const unit = currentUnit();
  const step = nextStep(unit);
  const newTheme = unit.vocab.map((id) => VOCAB.find((t) => t.id === id)).find((t) => t && t.words.some(([en]) => !S.srs[en])) || VOCAB.find((t) => !t.toeic && t.words.some(([en]) => !S.srs[en])) || VOCAB[0];
  const advanced = LV.indexOf(cur) >= 2;
  const promptId = unit.prompt || (PROMPTS.find((p) => p.level === cur) || PROMPTS[0]).id;
  const tasks = [
    { pillar: T("Study"), done: (log.vocab || 0) >= G.words, href: due > 0 ? "#/reviser" : `#/apprendre/${newTheme.id}`, icon: "layers",
      t: due > 0 ? T("Review your words ({n} due)", { n: due }) : T("Learn {n} words: {t}", { n: G.words, t: loc(newTheme, "title") }), d: T("spaced repetition"), n: `${Math.min(log.vocab || 0, G.words)}/${G.words}` },
    { pillar: T("Course"), done: (log.step || 0) >= G.steps, href: `#/unite/${unit.id}`, icon: "graduation-cap",
      t: T("{a}: {b}", { a: `${T("Unit")} ${unitNum(unit)}`, b: loc(unit, "title") }), d: T("next step: {s}", { s: T(step.label) }), n: `${Math.min(log.step || 0, G.steps)}/${Tn(G.steps, "{n} step", "{n} steps")}` }
  ];
  const dueM = dueMistakes().length;
  if (dueL.length || dueM) tasks.push({ pillar: T("Review"), done: (log.review || 0) >= 1, href: "#/revision-grammaire", icon: "shuffle", t: `${T("Grammar review")} (${[dueL.length ? Tn(dueL.length, "{n} lesson", "{n} lessons") : "", dueM ? Tn(dueM, "{n} mistake", "{n} mistakes") : ""].filter(Boolean).join(" + ")})`, d: T("mixed practice") });
  const rpU = RP().find((x) => unit.lessons.includes(x.lesson) && (!(S.dialogues || {})[x.id] || S.dialogues[x.id].date === today()));
  if (rpU) tasks.push({ pillar: T("Speak"), done: !!((S.dialogues || {})[rpU.id] && S.dialogues[rpU.id].date === today()), href: `#/dialogue/${rpU.id}`, icon: "messages-square", t: T("{a}: {b}", { a: T("Role-play"), b: loc(rpU, "title") }), d: T("talk to {p}, out loud", { p: rpU.partner }) });
  else tasks.push(advanced
    ? { pillar: T("Speak"), done: (log.free || 0) >= G.free, href: `#/parler/${promptId}`, icon: "mic", t: T("Speak freely for 1-2 minutes"), d: T("answer out loud, then compare"), n: G.free > 1 ? `${Math.min(log.free || 0, G.free)}/${G.free}` : "" }
    : { pillar: T("Speak"), done: (log.speak || 0) >= G.speak, href: unit.speak ? `#/oral/${unit.speak}` : `#/repeter/${unit.id}`, icon: "mic", t: T("Repeat {n} sentences out loud", { n: G.speak }), d: T("listen, repeat, record yourself"), n: `${Math.min(log.speak || 0, G.speak)}/${G.speak}` });
  if (G.dictee) tasks.push({ pillar: T("Listen"), done: (log.dictee || 0) >= G.dictee, href: "#/dictee", icon: "ear", t: T("Dictation: {n} sentences", { n: G.dictee }), d: T("listen, then write"), n: `${Math.min(log.dictee || 0, G.dictee)}/${G.dictee}` });
  if (G.ext) tasks.push({ pillar: T("Listen"), done: (log.ext || 0) >= G.ext, href: "#ext", icon: "tv", t: T("{n} min of series or podcasts in English", { n: G.ext }), d: T("then add it in “Outside the app”"), n: `${Math.min(log.ext || 0, G.ext)}/${G.ext} min` });
  const doneCount = tasks.filter((t) => t.done).length;
  const allDone = doneCount === tasks.length;
  const pool = Array.from(WORDS.values()).filter((w) => w.theme !== "mine" && VOCAB.find((t) => t.id === w.theme)?.level === cur);
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
  const helloT = T(hello);
  const first = S.xp === 0;
  const todayMin = Math.round(((log.sec || 0) / 60) + (log.ext || 0));

  app.innerHTML = `
  <section class="hero">
    <div class="hero-main">
      <p class="small" style="margin:0 0 6px;opacity:.8">${new Date().toLocaleDateString(locale(), { weekday: "long", day: "numeric", month: "long" })}</p>
      <h1>${helloT}, Stella! ${sayBtn(hello + ", Stella!")}</h1>
      <p>${first
        ? (isFr() ? "Bienvenue dans ton cours d'anglais. L'interface est en français ; tout ce que tu apprends est en anglais : <b>clique sur un mot anglais</b> pour voir sa traduction, ou sur <b>FR</b> pour traduire une phrase entière. Tu peux passer l'interface en anglais en haut de la page." : `Welcome to your English course. Everything here is in English: <b>click on any word</b> to see its translation, or on <b>FR</b> to translate a whole sentence. Prefer the menus in French? Click <b>EN</b> at the top of the page.${fr("Bienvenue dans ton cours d'anglais. Tout est en anglais : clique sur n'importe quel mot pour voir sa traduction, ou sur FR pour traduire une phrase entière. Tu préfères les menus en français ? Clique sur EN en haut de la page.")}`)
        : allDone ? T("Today's programme is done. Well done! Anything extra is a bonus.")
        : T("You've done {a} of {b} activities today ({m} min of English). Shall we continue?", { a: doneCount, b: tasks.length, m: todayMin })}</p>
      <a class="btn btn-primary" href="${tasks.find((t) => !t.done && t.href !== "#ext")?.href || "#/livres"}">${T(first ? "Start Unit 1" : allDone ? "Find a book to read" : "Continue")} ${ic("arrow-right")}</a>
    </div>
    <div class="stats">
      <div class="stat"><b>${ic("flame", "c-accent")} ${streak()}</b><span>${T("day streak")}</span></div>
      <div class="stat"><b>${ic("clock", "c-blue")} ${fmtH(totalHours())}</b><span>${T("of English in total")}</span></div>
      <div class="stat"><b>${COURSE.filter(unitDone).length}/${COURSE.length}</b><span>${T("units completed")}</span></div>
      <div class="stat"><b>${mastered()}</b><span>${T("words mastered · {n} in progress", { n: learning() })}</span></div>
    </div>
  </section>

  <section class="card" style="margin-bottom:16px">
    <div class="row"><h2 style="margin:0">${T("Your path to {l}", { l: LV[LV.length - 1] })}</h2><span class="spacer"></span><a class="btn btn-sm" href="#/parcours">${T("Details")} ${ic("arrow-right")}</a></div>
    <div class="path">${LV.map((L) => {
      const st = levelStats(L);
      const done = st.pct >= 0.999;
      return `<a class="path-step ${L === cur ? "cur" : ""} ${done ? "done" : ""}" href="#/cours">
        <span class="path-dot">${done ? ic("check") : L}</span>
        <span class="path-bar"><i style="width:${Math.round(st.pct * 100)}%"></i></span>
        <span class="small">${esc(lvName(L))}</span></a>`;
    }).join("")}</div>
    <p class="muted small" style="margin:0">${T("You're working on level <b>{l}</b>. Each level has its units, then a level exam.", { l: `${cur} · ${esc(lvName(cur))}` })}</p>
  </section>

  <div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(300px,1fr))">
    <section class="card" style="grid-row:span 3">
      <div class="row"><h2 style="margin:0">${T("Today's programme")}</h2><span class="spacer"></span><span class="muted small">${doneCount}/${tasks.length}</span></div>
      <div class="goal-row">
        <span class="small muted">${T("My pace")}</span>
        <div class="seg" role="group" aria-label="${T("Time per day")}">${[15, 30, 60].map((m) => `<button data-goal="${m}" class="${S.goal === m ? "on" : ""}">${m} min</button>`).join("")}</div>
      </div>
      <div class="progress" style="margin:12px 0 4px"><div style="width:${(doneCount / tasks.length) * 100}%"></div></div>
      <ul class="daily">
        ${tasks.map((t) => `
          <li>
            <span class="check ${t.done ? "on" : ""}">${t.done ? ic("check") : ic(t.icon)}</span>
            <span class="txt"><span class="pillar">${t.pillar}</span><b>${esc(t.t)}</b><span class="muted small">${esc(t.d)}${t.n && !t.done ? ` · <b>${t.n}</b>` : ""}</span></span>
            <a class="btn btn-sm ${t.done ? "" : "btn-dark"}" href="${t.href}">${T(t.done ? "Again" : "Go")}</a>
          </li>`).join("")}
      </ul>
      <p class="muted small" style="margin:12px 0 0">${T(S.goal === 60 ? "Intensive pace: about 1 hour, including 20 minutes of series or podcasts. The pace to aim for C1 in about two years." : S.goal === 30 ? "About 30 minutes: the right balance to progress fast without burning out." : "About 15 minutes: the essentials, so you never break the chain.")} <a href="#/methode">${T("Why this method?")}</a></p>
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

  <details class="card" style="margin-top:16px">
    <summary>${ic("settings")} <span>${T("Settings: language, voice and backup")}</span></summary>
    <div class="stack" style="margin-top:16px">
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
    </div>
  </details>`;

  $$("[data-goal]").forEach((b) => (b.onclick = () => { S.goal = +b.dataset.goal; save(); viewHome(); }));
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
  $("#langSel2").onchange = (e) => setLang(e.target.value);
  $("#voiceSel").onchange = (e) => { S.voice = e.target.value; save(); speak("Hello Stella!"); };
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
function viewCourse() {
  const cu = currentUnit();
  app.innerHTML = `
    <h1>${T("My English course")}</h1>
    <p class="muted">${T("A complete course from A1 to C2, organised like a textbook: each unit is a full lesson with vocabulary, grammar, reading or listening, speaking, writing, dictation and a test. At the end of each level, an exam checks that you're ready for the next one.")}</p>
    <a class="card unit-next" href="#/unite/${cu.id}">
      ${tile(cu.icon, cu.level)}
      <div style="flex:1;min-width:0"><span class="muted small">${T("Continue")} · ${cu.level} · ${T("Unit")} ${unitNum(cu)}</span><h2 style="margin:2px 0 0">${esc(loc(cu, "title"))}</h2></div>
      ${ic("arrow-right")}
    </a>
    ${LV.map((L) => {
      const units = COURSE.filter((u) => u.level === L);
      const done = units.filter(unitDone).length;
      const ex = S.exams[L];
      return `<details class="level-block" ${L === currentLevel() || done ? "open" : ""}>
        <summary><span class="lvl-sum">${levelTag(L)}<b>${esc(lvName(L))}</b><span class="muted small">${T("{a} / {b} units", { a: done, b: units.length })}${ex != null ? ` · ${T("exam")} ${ex}%` : ""}</span></span>${ic("chevron-down", "chev")}</summary>
        <div class="grid grid-2">
          ${units.map((u) => {
            const st = unitSteps(u);
            const n = st.filter((s) => s.done).length;
            return `<a class="card unit-card ${unitDone(u) ? "done" : ""}" href="#/unite/${u.id}">
              <div class="row">${tile(u.icon, u.level)}<div style="flex:1;min-width:0"><span class="muted small">${T("Unit")} ${unitNum(u)}</span><h3 style="margin:0">${esc(loc(u, "title"))}</h3></div>${unitDone(u) ? `<span class="tag tag-done">${ic("check")} ${S.units[u.id].test}%</span>` : ""}</div>
              <ul class="mini-can">${loc(u, "can").map((c) => `<li>${esc(c)}</li>`).join("")}</ul>
              <div class="step-dots">${st.map((s) => `<i class="${s.done ? "on" : ""}" title="${T(s.label)}"></i>`).join("")}<span class="muted small">${n}/${st.length}</span></div>
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
  const st = unitSteps(u);
  const us = S.units[u.id] || {};
  const themes = u.vocab.map((t) => VOCAB.find((x) => x.id === t)).filter(Boolean);
  const lessons = u.lessons.map(lessonById).filter(Boolean).sort((x, y) => LESSONS.indexOf(x) - LESSONS.indexOf(y));
  const r = READINGS.find((x) => x.id === u.reading);
  const extraR = (u.extra || []).map((rid) => READINGS.find((x) => x.id === rid)).filter(Boolean);
  const sp = u.speak ? SPEAKING.find((c) => c.id === u.speak) : null;
  const pr = u.prompt ? PROMPTS.find((p) => p.id === u.prompt) : null;
  const idx = COURSE.indexOf(u);
  const next = COURSE[idx + 1];
  const stepCard = (s, n, body) => `
    <section class="card step ${s.done ? "done" : ""}">
      <div class="row step-head"><span class="step-num">${s.done ? ic("check") : n}</span>${ic(s.icon, "muted")}<h3 style="margin:0">${T(s.label)}</h3></div>
      <div class="step-body">${body}</div>
    </section>`;
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
    <div class="stack" style="margin-top:16px">
      ${stepCard(st[0], 1, `<p class="muted small">${T("Learn the words first: they'll make everything else easier.")}</p>
        ${themes.map((t) => { const ts = themeStats(t); return `<div class="row step-link"><span style="flex:1"><b>${esc(loc(t, "title"))}</b> <span class="muted small">${T("{a}/{b} seen", { a: ts.seen, b: ts.total })}</span></span><a class="btn btn-sm btn-dark" href="#/apprendre/${t.id}">${ic("layers")} ${T("Cards")}</a><a class="btn btn-sm" href="#/ecrire/${t.id}">${ic("keyboard")} ${T("Write")}</a></div>`; }).join("")}`)}
      ${stepCard(st[1], 2, lessons.map((l) => `<div class="row step-link"><span style="flex:1"><b>${T("Lesson")} ${lnum(l)}</b> · ${esc(loc(l, "title"))} ${S.lessons[l.id] ? `<span class="tag tag-done">${ic("check")} ${S.lessons[l.id].best}/${S.lessons[l.id].total}</span>` : ""}</span><a class="btn btn-sm btn-dark" href="#/lecons/${l.id}">${T("Open")}</a></div>`).join(""))}
      ${stepCard(st[2], 3, (r ? `<div class="row step-link"><span style="flex:1"><b>${esc(loc(r, "title"))}</b>${u.listen ? ` <span class="muted small">· ${T("listen first, without reading")}</span>` : ""}</span><a class="btn btn-sm btn-dark" href="#/lecture/${r.id}${u.listen ? "/listen" : ""}">${u.listen ? ic("headphones") + " " + T("Listen") : ic("book-open-text") + " " + T("Read")}</a></div>` : "")
        + extraR.map((x) => `<div class="row step-link"><span style="flex:1"><span class="muted small">${T("Extra:")}</span> <b>${esc(loc(x, "title"))}</b> ${S.readings[x.id] ? `<span class="tag tag-done">${ic("check")}</span>` : ""}</span><a class="btn btn-sm" href="#/lecture/${x.id}">${ic("book-open-text")} ${T("Read")}</a></div>`).join(""))}
      ${stepCard(st[3], 4, `
        ${sp ? `<div class="row step-link"><span style="flex:1"><b>${T("Repeat:")}</b> ${esc(loc(sp, "title"))}</span><a class="btn btn-sm btn-dark" href="#/oral/${sp.id}">${ic("mic")} ${T("Practise")}</a></div>`
            : `<div class="row step-link"><span style="flex:1"><b>${T("Repeat the key sentences of the unit")}</b></span><a class="btn btn-sm btn-dark" href="#/repeter/${u.id}">${ic("mic")} ${T("Practise")}</a></div>`}
        ${RP().filter((x) => u.lessons.includes(x.lesson)).map((x) => `<div class="row step-link"><span style="flex:1"><b>${T("Role-play")}:</b> ${esc(loc(x, "title"))}</span><a class="btn btn-sm" href="#/dialogue/${x.id}">${ic("messages-square")} ${T("Talk")}</a></div>`).join("")}
        ${PRON().filter((x) => (x.units || []).includes(u.id)).map((x) => `<div class="row step-link"><span style="flex:1"><b>${T("Pronunciation:")}</b> ${esc(loc(x, "title"))} ${pronDone(x.id) ? `<span class="tag tag-done">${ic("check")}</span>` : ""}</span><a class="btn btn-sm" href="#/prononciation/${x.id}">${ic("audio-lines")} ${T("Open")}</a></div>`).join("")}
        ${pr ? `<div class="row step-link"><span style="flex:1"><b>${T("Speak freely:")}</b> <span class="en">${esc(pr.q)}</span></span><a class="btn btn-sm" href="#/parler/${pr.id}">${ic("message-circle")} ${T("Speak")}</a></div>` : ""}
        <div class="row step-link"><span style="flex:1"><b>${T("Real conversation:")}</b> ${T("talk about this unit with Claude, out loud")}</span><a class="btn btn-sm" href="#/conversation/unit/${u.id}">${ic("bot")} ${T("Talk")}</a></div>`)}
      ${stepCard(st[4], 5, `<p style="margin:0 0 10px">${instr(u.writing.task, u.writing.task_fr)}</p><div class="row step-link"><span style="flex:1" class="muted small">${T("{n} words · model answer included", { n: u.writing.words })}</span><a class="btn btn-sm btn-dark" href="#/ecrit/${u.id}">${ic("pen-line")} ${T("Write")}</a></div>`)}
      ${stepCard(st[5], 6, `<div class="row step-link"><span style="flex:1" class="muted small">${T("Sentences from the unit, to train your ear and your spelling.")}${us.dict ? ` ${T("Best:")} <b>${us.dict}%</b>` : ""}</span><a class="btn btn-sm btn-dark" href="#/dictee-unite/${u.id}">${ic("ear")} ${T("Start")}</a></div>`)}
      ${stepCard(st[6], 7, `<div class="row step-link"><span style="flex:1" class="muted small">${T("Grammar, vocabulary, reading and dictation. You need 70% to complete the unit.")}${us.test != null ? ` ${T("Best:")} <b>${us.test}%</b>` : ""}</span><a class="btn btn-sm btn-primary" href="#/test/${u.id}">${ic("list-checks")} ${T("Take the test")}</a></div>`)}
    </div>
    <div class="row" style="margin-top:20px">
      <span class="spacer"></span>
      ${next ? (next.level !== u.level ? `<a class="btn btn-dark" href="#/examen/${u.level}">${T("{l} exam", { l: u.level })} ${ic("arrow-right")}</a>` : `<a class="btn btn-dark" href="#/unite/${next.id}">${T("Unit")} ${unitNum(next)} ${ic("arrow-right")}</a>`) : `<a class="btn btn-dark" href="#/examen/C1">${T("{l} exam", { l: "C1" })} ${ic("arrow-right")}</a>`}
    </div>`;
}
function viewWriting(id) {
  const u = COURSE.find((x) => x.id === id);
  if (!u) return viewCourse();
  const w = u.writing;
  const us = unitState(u.id);
  const count = (t) => (t.trim() ? t.trim().split(/\s+/).length : 0);
  app.innerHTML = `
    ${back(`#/unite/${u.id}`, `Unit ${unitNum(u)}`)}
    <h1>${ic("pen-line")} ${T("Writing")}</h1>
    <section class="card">
      <p style="font-size:18px;margin:0"><b>${instr(w.task, w.task_fr)}</b></p>
      <p class="muted small" style="margin:8px 0 0">${T("Length: {n} words.", { n: w.words })}</p>
      <h3 style="margin-top:16px">${T("Useful phrases")}</h3>
      <div class="chips">${w.tips.map((t) => `<button class="chip" data-say="${esc(t.replace(/…/g, ""))}">${ic("volume-2")} <span class="en">${esc(t)}</span></button>`).join("")}</div>
    </section>
    <section class="card">
      <textarea id="wText" class="field note" rows="10" placeholder="${T("Write here…")}" spellcheck="true" lang="en">${esc(us.writing || "")}</textarea>
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
      <p class="muted small">${T("Compare with your text: note two expressions you'd like to reuse.")}</p>
      <div class="model en">${esc(w.model)}</div>
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
    return { type: "mcq", q: `How do you say « ${w.fr} » in English?`, q_fr: `Comment dit-on « ${w.fr} » en anglais ?`, o, a: o.indexOf(w.en), ex: `« ${w.fr} » = ${w.en}`, from: "Vocabulary" };
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
      $("#afterTest").innerHTML = `<a class="btn" href="#/unite/${u.id}">${T("Back to the unit")}</a>${p >= 70 ? (next && next.level === u.level ? `<a class="btn btn-primary" href="#/unite/${next.id}">${T("Unit")} ${unitNum(next)} ${ic("arrow-right")}</a>` : `<a class="btn btn-primary" href="#/examen/${u.level}">${T("{l} exam", { l: u.level })} ${ic("arrow-right")}</a>`) : `<button class="btn btn-primary" id="retest">${T("Try again")}</button>`}`;
      if ($("#retest")) $("#retest").onclick = () => viewUnitTest(id);
    });
  });
}
function viewExam(L) {
  if (!LV.includes(L)) return viewCourse();
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
      <p class="small muted" style="margin:0">${T("Step by Step · English course")}</p>
      <h1 style="margin:8px 0">${T("Level {l} completed", { l: L })}</h1>
      <p class="en" style="font-size:20px">Stella has completed level ${L} (${esc(lv.name)}) and passed the level exam with <b>${p}%</b>.</p>
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
    ${levelGroups(LESSONS, (l) => {
      const r = S.lessons[l.id];
      return `<a class="card lesson-item ${r ? "done" : ""}" href="#/lecons/${l.id}">
        <span class="lesson-num">${r ? ic("check") : lnum(l)}</span>
        <span style="flex:1;min-width:0"><span class="row" style="gap:6px;margin-bottom:4px">${ic(l.icon, "muted")}${l.kind === "functional" ? `<span class="tag tag-fn">${T("Everyday English")}</span>` : ""}${r ? `<span class="small muted">${T("{a}/{b} in the practice", { a: r.best, b: r.total })}</span>` : ""}</span>
        <h3 style="margin:0">${esc(loc(l, "title"))}</h3><span class="muted small">${esc(loc(l, "subtitle"))}</span></span>
      </a>`;
    }, { started: (its) => its.some((l) => S.lessons[l.id]), stat: (its) => T("{a} / {b} done", { a: its.filter((l) => S.lessons[l.id]).length, b: its.length }) })}`;
}
function renderBody(html) {
  return html
    .replace(/<s-en>([\s\S]*?)<\/s-en>/g, (_, t) => `<span class="en${/<st>/.test(t) ? " no-tx" : ""}"><b>${t}</b></span> ${sayBtn(t.replace(/<[^>]+>/g, "").replace(/[↗↘|‖]/g, "").replace(/\s+([,.?!])/g, "$1").replace(/\s+/g, " ").trim())}`)
    .replace(/«[^»]*»/g, (m) => `<span class="no-tx">${m}</span>`)
    .replace(/<st>/g, '<span class="st">').replace(/<\/st>/g, "</span>")
    .replace(/<ipa>([\s\S]*?)<\/ipa>/g, (_, t) => ipaSpan(t))
    .replace(/<div class="tip">/g, `<div class="tip">${ic("lightbulb", "box-ic")}`)
    .replace(/<div class="warn">/g, `<div class="warn">${ic("triangle-alert", "box-ic")}`);
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
      <div class="row" style="margin-bottom:8px">${levelTag(l.level)}<span class="muted small">${T("Lesson")} ${lnum(l)} / ${LESSONS.length}</span><span class="spacer"></span>${l.body_fr ? `<button class="btn btn-sm" id="frToggle">${ic("languages")} ${showFr ? (isFr() ? "En anglais" : "In English") : "En français"}</button>` : ""}</div>
      <div class="row" style="flex-wrap:nowrap;align-items:center">${tile(l.icon, l.level)}<h1 style="margin:0">${esc(loc(l, "title"))}</h1></div>
      <p class="muted" style="margin-top:10px">${esc(loc(l, "subtitle"))}</p>
      <div id="lbody" class="${showFr ? "fr" : ""}" ${showFr ? 'lang="fr"' : ""}>${renderBody(showFr ? l.body_fr : l.body)}</div>
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
      <textarea id="myNotes" class="field note" rows="5" placeholder="${T("Write here, in English…")}" spellcheck="true" lang="en">${esc(S.notes[l.id] || "")}</textarea>
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
    $("#lbody").classList.toggle("fr", showFr);
    if (showFr) $("#lbody").setAttribute("lang", "fr"); else $("#lbody").removeAttribute("lang");
    $("#frToggle").innerHTML = showFr ? `${ic("languages")} ${isFr() ? "En anglais" : "In English"}` : `${ic("languages")} En français`;
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
          ${u ? `<a class="btn btn-primary" href="#/unite/${u.id}">${T("Back to Unit {n}", { n: unitNum(u) })} ${ic("arrow-right")}</a>` : next ? `<a class="btn btn-primary" href="#/lecons/${next.id}">${T("Next lesson")} ${ic("arrow-right")}</a>` : ""}
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
    ${levelGroups(VOCAB.filter((t) => !t.toeic), themeCard, { grid: "grid-3", started: (its) => its.some((t) => themeStats(t).seen), stat: (its) => T("{n} words", { n: its.reduce((a, t) => a + t.words.length, 0) }) })}
    <div class="section-title"><h2>${ic("briefcase")} ${T("Business English for the TOEIC")}</h2></div>
    <div class="grid grid-3">${VOCAB.filter((t) => t.toeic).map(themeCard).join("")}</div>`;
}
function themeCard(t) {
  const s = themeStats(t);
  return `<a class="card theme-card" href="#/vocabulaire/${t.id}">
    <div class="row">${tile(t.icon, t.level)}<span class="spacer"></span>${levelTag(t.level)}</div>
    <h3 style="margin:12px 0 4px">${esc(loc(t, "title"))}</h3>
    <p class="muted small" style="margin-bottom:10px">${T("{a} / {b} seen · {c} mastered", { a: s.seen, b: s.total, c: s.m })}</p>
    <div class="progress"><div style="width:${(s.seen / s.total) * 100}%"></div></div>
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
        <p class="muted">${Tn(total, "{n} card practised, including {k} you already knew well. The others will come back soon.", "{n} cards practised, including {k} you already knew well. The others will come back soon.", { k: known })}</p>
        <div class="row" style="justify-content:center">
          <a class="btn" href="${backHref}">${T("Back")}</a>
          ${themeId && themeId !== "mine" ? `<a class="btn" href="#/ecrire/${themeId}">${ic("keyboard")} ${T("Practise writing")}</a>` : ""}
          ${u ? `<a class="btn btn-primary" href="#/unite/${u.id}">${T("Unit")} ${unitNum(u)} ${ic("arrow-right")}</a>` : `<a class="btn btn-primary" href="#/">${T("My programme")} ${ic("arrow-right")}</a>`}
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
const normAns = (s) => s.toLowerCase().replace(/[’`]/g, "'").replace(/\((uk|us)\)/g, "").replace(/[.?!,…]/g, "").replace(/\s+/g, " ").trim();
function variants(en) {
  const out = new Set();
  en.split(" / ").forEach((v) => { const n = normAns(v); out.add(n); out.add(n.replace(/^to /, "")); });
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
      return { ok: exact || close, say: w.en,
        html: `${exact ? ic("circle-check") + " " + T("Perfect!") : close ? ic("circle-check") + " " + T("Almost! Watch the spelling:") : ic("circle-x") + " " + T("The answer was:")} <b class="en">${esc(w.en)}</b> ${sayBtn(w.en)}${w.ex ? `<br><span class="small en" style="font-style:italic">${esc(w.ex)}</span>` : ""}` };
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
      <table class="irr-table"><tr><th>${T("Verb")}</th><th>${T("Past")}</th><th>${T("Participle")}</th><th>${T("French")}</th></tr>
      ${IRREGULARS.map(([b, p, pp, f]) => `<tr><td><b>${esc(b)}</b> ${sayBtn(`${b}, ${p.replace(" / ", ", ")}, ${pp.replace(/\(.*\)/, "").replace(" / ", ", ")}`)}</td><td>${esc(p)}</td><td>${esc(pp)}</td><td class="fr">${esc(f)}</td></tr>`).join("")}
      </table>
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
  app.innerHTML = `
    <h1>${T("Reading and listening")}</h1>
    <p class="muted">${T("{n} texts, from the simplest to the richest. <b>Click on any word</b> to hear it and translate it. Underlined words have a translation ready for this text. Every text can also be <b>listened to first</b>, without reading: the best listening practice.", { n: READINGS.length })}</p>
    ${levelGroups(READINGS, (r) => `
        <a class="card theme-card" href="#/lecture/${r.id}">
          <div class="row">${tile(r.icon, r.level)}<span class="spacer"></span>${r.genre ? `<span class="muted small">${esc(tg(r.genre))}</span>` : ""}${S.readings[r.id] ? `<span class="tag tag-done">${ic("check")} ${T("Read ✓")}</span>` : ""}</div>
          <h3 style="margin:12px 0 4px" class="en">${esc(loc(r, "title"))}</h3>
          <p class="muted small" style="margin:0">${esc(loc(r, "intro"))}</p>
        </a>`, { started: (its) => its.some((r) => S.readings[r.id]), stat: (its) => T("{a} / {b} read", { a: its.filter((r) => S.readings[r.id]).length, b: its.length }) })}
    <div class="card" style="margin-top:20px">
      <h3>${ic("lightbulb")} ${T("How to read well in English")}</h3>
      <ol class="muted" style="margin:0;padding-left:20px">
        <li>${T("<b>First reading</b>: read without stopping, just try to understand the general idea.")}</li>
        <li>${T("<b>Second reading</b>: click on the words that block you, add the most useful ones to your words.")}</li>
        <li>${T("<b>Third time</b>: listen to the text while following with your eyes, then read it out loud. Re-reading a text you already understand, faster, is the best fluency exercise.")}</li>
      </ol>
    </div>`;
}
function tokenize(text, gloss) {
  return text.split(WORD_RE).map((part, k) => {
    if (k % 2 === 0) return esc(part).replace(/\n/g, "<br>");
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
          ${u ? `<a class="btn btn-primary" href="#/unite/${u.id}">${T("Back to Unit {n}", { n: unitNum(u) })} ${ic("arrow-right")}</a>` : nextSame ? `<a class="btn btn-primary" href="#/lecture/${nextSame.id}">${T("Next text")} ${ic("arrow-right")}</a>` : `<a class="btn btn-primary" href="#/livres">${T("Choose a real book")} ${ic("arrow-right")}</a>`}
        </div>`;
    });
  };
}

/* ================= Speaking ================= */
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
const CONTRACTIONS = { "i'm": "i am", "you're": "you are", "he's": "he is", "she's": "she is", "it's": "it is", "we're": "we are", "they're": "they are", "that's": "that is", "what's": "what is", "there's": "there is", "isn't": "is not", "aren't": "are not", "don't": "do not", "doesn't": "does not", "didn't": "did not", "can't": "can not", "cannot": "can not", "won't": "will not", "i'd": "i would", "i'll": "i will", "we'll": "we will", "you'd": "you would", "let's": "let us", "wasn't": "was not", "where's": "where is", "i've": "i have", "you've": "you have", "we've": "we have", "haven't": "have not", "hasn't": "has not", "shouldn't": "should not", "wouldn't": "would not", "couldn't": "could not" };
function normSpeech(s) {
  return s.toLowerCase().replace(/[’`]/g, "'").replace(/-/g, " ")
    .replace(/\d+/g, (d) => numWords(+d))
    .replace(/[^a-z' ]/g, " ").split(/\s+/).filter(Boolean)
    .flatMap((w) => (CONTRACTIONS[w] || w).split(" "))
    .map((w) => w.replace(/'s$/, "").replace(/'/g, ""));
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
  return `<a class="card theme-card" href="#/dialogue/${d.id}">
    <div class="row">${tile(d.icon, d.level)}<span class="spacer"></span>${st.speak >= 70 ? `<span class="tag tag-done">${ic("mic")} ${st.speak}%</span>` : st.guided != null ? `<span class="tag">${ic("check")} ${st.guided}%</span>` : ""}</div>
    <h3 style="margin:12px 0 4px">${esc(loc(d, "title"))}</h3>
    <p class="muted small" style="margin:0">${T("With {p}, {r}", { p: esc(d.partner), r: esc(T(d.role)) })}</p>
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
      rec = new SR(); rec.lang = "en-US"; rec.interimResults = false; rec.maxAlternatives = 5;
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
      <form id="rpForm" autocomplete="off" class="row" style="margin-top:12px;flex-wrap:nowrap"><input class="field" id="rpType" lang="en" autocapitalize="off" spellcheck="false" placeholder="${T(SR ? "Or type it here…" : "Type it here…")}" style="flex:1"><button class="btn btn-dark">${T("Check")}</button></form>
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
        ${lesson ? `<a class="btn" href="#/lecons/${lesson.id}">${T("Back to the lesson")}</a>` : `<a class="btn" href="#/oral">${T("More role-plays")}</a>`}
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
    <div class="grid grid-2">
      <a class="card ear-cta" href="#/oreille">${tile("ear", "B1")}<div style="flex:1"><h3 style="margin:0">${T("Train your ear")}</h3><p class="muted small" style="margin:4px 0 0">${T("Ship or sheep? Think or sink? Recognise very similar words, spoken by different voices.")}</p></div>${ic("arrow-right")}</a>
      <a class="card ear-cta" href="#/conversation">${tile("messages-square", "B2")}<div style="flex:1"><h3 style="margin:0">${T("Talk with someone")}</h3><p class="muted small" style="margin:4px 0 0">${T("Real conversations out loud: with Claude at any time, and with real people. Role-plays, debates and exam simulations, A1 to C2.")}</p></div>${ic("arrow-right")}</a>
      <a class="card ear-cta" href="#/ecoute">${tile("headphones", "C1")}<div style="flex:1"><h3 style="margin:0">${T("Listening plan")}</h3><p class="muted small" style="margin:4px 0 0">${T("Real podcasts, series and videos for your level, and how to listen to them.")}</p></div>${ic("arrow-right")}</a>
      <a class="card ear-cta" href="#/dictee">${tile("pen-line", "A2")}<div style="flex:1"><h3 style="margin:0">${T("Dictations")}</h3><p class="muted small" style="margin:4px 0 0">${T("Listen to a sentence, write it, and see your mistakes word by word.")}</p></div>${ic("arrow-right")}</a>
    </div>
    <div class="section-title"><h2>${T("Role-plays: real conversations")}</h2><span class="spacer"></span><span class="muted small">${T("{a} / {b} done", { a: RP().filter((d) => (S.dialogues || {})[d.id]).length, b: RP().length })}</span></div>
    <p class="muted">${T("Someone talks to you: choose what to say, hear it and say it out loud. Then do the same conversation again without help, speaking only.")}</p>
    ${levelGroups(RP(), rpCard, { grid: "grid-3", started: (its) => its.some((d) => (S.dialogues || {})[d.id]) })}
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
      rec.lang = "en-US"; rec.interimResults = false; rec.maxAlternatives = 5;
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
      rec = new SR(); rec.lang = "en-US"; rec.continuous = true; rec.interimResults = true;
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
      <div class="row" style="margin-bottom:8px">${levelTag(c.level)}<span class="muted small">${T("Chapter {a} of {b}", { a: i + 1, b: all.length })}</span><span class="spacer"></span>${c.body_fr ? `<button class="btn btn-sm" id="frToggle">${ic("languages")} ${showFr ? (isFr() ? "En anglais" : "In English") : "En français"}</button>` : ""}</div>
      <div class="row" style="flex-wrap:nowrap;align-items:center">${tile(c.icon, c.level)}<h1 style="margin:0">${esc(loc(c, "title"))}</h1></div>
      <p class="muted" style="margin-top:10px">${esc(loc(c, "subtitle"))}${c.ipa ? ` <span class="ipa no-tx">${esc(c.ipa)}</span>` : ""}</p>
      <div id="lbody" class="${showFr ? "fr" : ""}" ${showFr ? 'lang="fr"' : ""}>${renderBody(showFr ? c.body_fr : c.body)}</div>
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
    $("#lbody").classList.toggle("fr", showFr);
    if (showFr) $("#lbody").setAttribute("lang", "fr"); else $("#lbody").removeAttribute("lang");
    $("#frToggle").innerHTML = showFr ? `${ic("languages")} ${isFr() ? "En anglais" : "In English"}` : `${ic("languages")} En français`;
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

/* ================= Dictation ================= */
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
  const items = u ? sentencePool(u.lessons.map(lessonById).filter(Boolean)).slice(0, 6) : shuffle(dictPool(L)).slice(0, N);
  const backHref = u ? `#/unite/${u.id}` : "#/oral";
  let i = 0, total = 0;
  if (!items.length) { app.innerHTML = `${back(backHref, "Back")}<div class="card empty">${T("No sentences for this level yet.")}</div>`; return; }
  function render() {
    if (i >= items.length) {
      const avg = Math.round(total / items.length);
      if (u) { const us = unitState(u.id); const first = !us.dict; us.dict = Math.max(us.dict || 0, avg); if (first) markStep(); else save(); }
      app.innerHTML = `${back(backHref, "Back")}<div class="card flash-wrap" style="text-align:center">${celebrate()}<div class="result-big">${avg}%</div><p>${T(avg >= 90 ? "Excellent ear!" : avg >= 70 ? "Very good! Listen again to the sentences where you struggled." : "Keep going: dictation is hard at first, then everything speeds up.")}</p><div class="row" style="justify-content:center"><button class="btn" id="again">${T("New dictation")}</button><a class="btn btn-primary" href="${u ? backHref : "#/"}">${u ? T("Back to Unit {n}", { n: unitNum(u) }) : T("My programme")} ${ic("arrow-right")}</a></div></div>`;
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
    <div class="grid grid-3">${VOCAB.filter((t) => t.toeic).map(themeCard).join("")}</div>
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
      <textarea id="cvNotes" class="field note" rows="4" style="margin-top:10px" placeholder="${T("Corrections and new expressions to remember…")}" lang="en"></textarea>
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
const NAV_OF = { "": "home", cours: "cours", unite: "cours", ecrit: "cours", test: "cours", examen: "cours", certificat: "cours", "dictee-unite": "cours", repeter: "cours", parcours: "cours", methode: "home", lecons: "lecons", "revision-grammaire": "lecons", vocabulaire: "vocabulaire", reviser: "vocabulaire", apprendre: "vocabulaire", ecrire: "vocabulaire", "mes-mots": "vocabulaire", irreguliers: "vocabulaire", lecture: "lecture", oral: "oral", parler: "oral", dialogue: "oral", erreurs: "lecons", oreille: "oral", prononciation: "oral", ecoute: "oral", conversation: "oral", dictee: "oral", toeic: "toeic", livres: "livres" };
function route() {
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
    livres: viewBooks
  };
  (views[a] || viewHome)();
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
  S.lang = l; save();
  route();
  toast(T("Interface language changed"));
}
window.addEventListener("hashchange", route);
route();

if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}
})();
