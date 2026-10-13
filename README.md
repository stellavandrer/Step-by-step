# Step by Step

My personal language course. For now: **English, from A1 to C2**, with TOEIC preparation. Other languages will be added later.

## What's inside

- Navigation: the same six tabs on a computer and a phone (Home, Course, Words, Reading, Speaking, More). More gathers every other tool (TOEIC, lessons, mistakes, pronunciation, listening lab, placement test, academic skills, grammar reference, method) and the settings. A first visit asks where to start (Unit 1 or the placement test) and how much time per day. Libraries (texts, word topics, role-plays) are compact lists; texts can be filtered (read or not) and searched.
- A thread through the whole course: each unit is an ordered path (words just before the lesson that uses them, then texts, speaking, writing and checks), with "You are here" on the next activity, an estimated time for each activity, a strip on every activity saying which unit and which step it is, a Continue button at the end of each activity, and a Next button on every page that always opens the right one. Today's programme counts the course activities done each day; extras are grouped under "To go further".
- A structured course of 54 units (A1 and A2: 7 each; B1, B2, C1 and C2: 10 each, as in university textbooks): grammar lessons, vocabulary with spaced repetition, texts, dictations, role-plays, writing tasks, unit tests and level exams. The 17 thematic units added from B1 to C2 (B1: the outdoors, learning, food and celebrations; B2-C2: health, money, the planet, science, work, media, cities, the mind, energy, ethics, language and identity, the global economy, risk, the future) each live in one file, js/data/unit-<id>.js, which holds the whole unit (two lessons and their exercises, a text, a listening lab, a role-play, a speaking topic, a writing task with its guide and, from B2, the language workshop) and moves the matching vocabulary themes out of the skill units. The B1 ones fill grammar gaps found in the course (have to / be allowed to, want someone to do, like / as and the verbs of the senses) and follow the B1 Preliminary writing tasks (story, email, article).
- A pronunciation course: 27 chapters from A1 to C2 (the 44 sounds and the IPA chart, word and sentence stress, rhythm, linking, intonation, accents), with ear training and exercises.
- Academic skills, B2 to C2: 16 chapters as in a university English (EAP) course (note-taking from a lecture, paraphrasing, essays, data, presentations, seminars, academic style, sources, critical thinking, reports, mediation, synthesis, research writing, editing, exams), each with a real task, a model answer and a correction by Claude.
- Placement test and skills report: an adaptive test (grammar and vocabulary, reading, listening) that goes up or down a level after each set, a vocabulary-size check with invented words to correct for guessing, writing and speaking assessed by Claude with the CEFR criteria, can-do grids for the 5 CEFR skills (120 statements), and a report of the level in each skill with history and a recommended starting point.
- Grammar reference A1 to C2: 105 grammar points in 16 areas (rule in English and French, example with audio, links to the lessons), checked against the Core Inventory for General English and the English Grammar Profile. The check found 15 points missing or only mentioned in passing; each now has a full lesson with exercises in the right unit (lessons 81 to 95).
- Listening lab: 54 original recordings, one per unit from A1 to C2 (at C2: attitude, irony, evasion, hindsight and critical reading of a study), read by several voices with British, American, Australian and Irish accents from B2. Each one follows the steps recommended by listening research (Field 2008; Vandergrift and Goh 2012): key words and prediction, main idea, details, dictation of fast passages, reading while listening, shadowing, and what made it difficult, with targeted advice.
- Writing taught by genre in every unit A1 to C2 (at C2: critical review, persuasive speech, summary-and-evaluation essay, humorous column, formal report): the type of text, a step-by-step plan to fill in before writing, and the model answer with its key phrases highlighted and explained. Ten new free-speaking topics for the A1 and A2 units that had none.
- More reading at A1-B1: 21 new texts (one per unit; 126 texts in all today), written to recycle each unit's vocabulary. Words in context in every unit A1-C1: ten of the unit's words found again in sentences from its texts and listening lab, first to choose, then to write with the French as a cue.
- Language workshop for every B2, C1 and C2 unit, in the format of the Cambridge exams: ten collocations, eight idioms and phrasal verbs, eight word-formation sentences and six key word transformations, with three separate practice exercises (160 collocations, 128 idioms, 128 word-formation items, 96 transformations).
- Listening plan (real podcasts and series), spoken conversations and writing corrections with Claude.
- TOEIC: practice by part and full mock test.
- Interface in English (immersion), French or German, in all three courses (menu at the top of the page). The German interface translates the menus, buttons and messages (js/i18n-de.js); lesson explanations stay in English or French, the languages the content is written in.

## Run it locally

Double-click `Ouvrir mon site d'anglais.command`, or:

```
python3 serve.py 8765
```

then open http://localhost:8765.

No build step and no external server: everything (data, icons) is in this folder. Progress is saved in the browser (localStorage).

## Structure

- `index.html`, `css/style.css`, `js/app.js`: the app
- `js/data/`: course content (lessons, vocabulary, texts, pronunciation, academic skills, TOEIC, listening, conversation…)
- `js/i18n-fr.js`, `js/i18n-de.js`: French and German interface (same keys: the English texts of the app)
- `js/icons.js`: icons (Lucide shapes, ISC licence)

## French course for English speakers (francais.html) — A1 to C2

The same engine (js/app.js) runs a second course: French from A1 to C2 for English speakers, with its own page
(francais.html), its own data (js/fr/) and its own saved progress. `window.APP` (js/fr/config.js) sets the target
language (French voices, French speech recognition, French click-translation with elisions, plurals, verb endings and
irregular forms from js/fr/forms.js), the learner's language (English, the default interface; French = total
immersion) and texts that differ. Interface texts written for the English course swap the two language names
automatically. Tools without French content yet are hidden. Answers are compared without accents (ça = ca), and a
noun typed without its article is accepted with its article shown. Characters have French first names.
Each unit is one file, js/fr/unit-<id>.js, like the English thematic units. Done: levels A1 to C2 complete (54 units: 7 in A1 and A2, 10 in B1, B2, C1 and C2; 164 lessons, 2,049 words in 113 themes, 54 texts, 54 listening labs, 55 role-plays, 54 speaking topics, an exam for each level). B1 writing tasks follow the DELF B1 format (160 to 180 words); B2 tasks the DELF B2 format (250 to 280 words, essays, formal letters, opinion pieces), and every B2 unit has a language workshop (collocations, word formation, key word transformations, idioms) and a lesson aimed at the DELF B2 speaking exam. C1 follows the DALF C1: syntheses of documents (220 to 240 words, from each unit's article and listening lab), argued essays, reports and memos (250 to 300 words), and the oral presentation. C2 follows the DALF C2: the oral report and debate, writing tasks of 350 to 400 words in nine genres (article, open letter, story opening, report, editorial, speech, letter to the future, essay, letter of apology), then the full written task of the last unit, a structured article of 700 to 750 words; it also covers spoken French as it is really spoken (discourse markers, verlan), the trickiest agreements and style (precise verbs, nominal sentences). The 30 language workshops from B2 to C2 hold 300 collocations, 240 idioms, 240 word-formation items and 180 transformations. The interface is neutral for every learner (no gendered agreement, the first name is asked on the first visit).

## German course for French and English speakers (allemand.html), in progress

A third course on the same engine: German from A1 to C2 (aimed at the Goethe-Zertifikat), with its own page
(allemand.html), data (js/de/) and saved progress. It serves French AND English speakers: every explanation,
instruction and translation exists in both languages, and js/de/localize.js keeps the one of the interface language
(the browser's language by default; changing language reloads the page). The German interface is total immersion:
menus in German, while explanations and translations stay in the language chosen before switching. Clicking a German
word finds its base form (plurals, umlauts, verb endings, participles, irregular forms from js/de/forms.js, numbers and
ordinals), and the dictionary js/de/dict.js gives the English and French meanings. Nouns are taught with their article
and plural (der Hund, -e). Characters have German first names, and cultural facts are checked (sources in each unit
file's header). Done: level A1 (7 units, lessons 1 to 21, writing tasks of 30 to 50 words as in the Goethe A1) and A2
(7 units, lessons 22 to 42, writing tasks of 40 to 60 words). B1 complete, following the Goethe-Zertifikat B1 (10 units, lessons 43 to 72: writing tasks of about 80 words in the three exam formats, speaking tasks: planning together, a presentation, a discussion). B2 in progress, following the Goethe-Zertifikat B2 (units 1 to 7 of 10, lessons 73 to 93: reported speech, the passive and its alternatives, the nominal style, participle phrases, assumptions and the future II, formal conditions, contrast and concession, noun-verb combinations, describing charts, forum opinions of 150 to 180 words, formal messages of about 100 words, discussions, and the language workshop). Then C1 and C2 (10 units each).
