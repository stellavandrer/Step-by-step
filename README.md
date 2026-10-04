# Step by Step

My personal language course. For now: **English, from A1 to C2**, with TOEIC preparation. Other languages will be added later.

## What's inside

- A thread through the whole course: each unit is an ordered path (words just before the lesson that uses them, then texts, speaking, writing and checks), with "You are here" on the next activity, and a Next button on every page that always opens the right one. Today's programme counts the course activities done each day; extras are grouped under "To go further".
- A structured course: units, grammar lessons, vocabulary with spaced repetition, texts, dictations, role-plays, writing tasks, unit tests and level exams.
- A pronunciation course: 27 chapters from A1 to C2 (the 44 sounds and the IPA chart, word and sentence stress, rhythm, linking, intonation, accents), with ear training and exercises.
- Academic skills, B2 to C2: 16 chapters as in a university English (EAP) course (note-taking from a lecture, paraphrasing, essays, data, presentations, seminars, academic style, sources, critical thinking, reports, mediation, synthesis, research writing, editing, exams), each with a real task, a model answer and a correction by Claude.
- Placement test and skills report: an adaptive test (grammar and vocabulary, reading, listening) that goes up or down a level after each set, a vocabulary-size check with invented words to correct for guessing, writing and speaking assessed by Claude with the CEFR criteria, can-do grids for the 5 CEFR skills (120 statements), and a report of the level in each skill with history and a recommended starting point.
- Grammar reference A1 to C2: 105 grammar points in 16 areas (rule in English and French, example with audio, links to the lessons), checked against the Core Inventory for General English and the English Grammar Profile. The check found 15 points missing or only mentioned in passing; each now has a full lesson with exercises in the right unit (lessons 81 to 95).
- Listening lab: 37 original recordings, one per unit from A1 to C2 (at C2: attitude, irony, evasion, hindsight and critical reading of a study), read by several voices with British, American, Australian and Irish accents from B2. Each one follows the steps recommended by listening research (Field 2008; Vandergrift and Goh 2012): key words and prediction, main idea, details, dictation of fast passages, reading while listening, shadowing, and what made it difficult, with targeted advice.
- Writing taught by genre in every unit A1 to C2 (at C2: critical review, persuasive speech, summary-and-evaluation essay, humorous column, formal report): the type of text, a step-by-step plan to fill in before writing, and the model answer with its key phrases highlighted and explained. Ten new free-speaking topics for the A1 and A2 units that had none.
- More reading at A1-B1: 21 new texts (one per unit, 109 texts in all), written to recycle each unit's vocabulary. Words in context in every unit A1-C1: ten of the unit's words found again in sentences from its texts and listening lab, first to choose, then to write with the French as a cue.
- Language workshop for every B2, C1 and C2 unit, in the format of the Cambridge exams: ten collocations, eight idioms and phrasal verbs, eight word-formation sentences and six key word transformations, with three separate practice exercises (160 collocations, 128 idioms, 128 word-formation items, 96 transformations).
- Listening plan (real podcasts and series), spoken conversations and writing corrections with Claude.
- TOEIC: practice by part and full mock test.
- Interface in English (immersion) or French.

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
- `js/i18n-fr.js`: French interface
- `js/icons.js`: icons (Lucide shapes, ISC licence)
