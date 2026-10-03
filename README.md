# Step by Step

My personal language course. For now: **English, from A1 to C2**, with TOEIC preparation. Other languages will be added later.

## What's inside

- A structured course: units, grammar lessons, vocabulary with spaced repetition, texts, dictations, role-plays, writing tasks, unit tests and level exams.
- A pronunciation course: 27 chapters from A1 to C2 (the 44 sounds and the IPA chart, word and sentence stress, rhythm, linking, intonation, accents), with ear training and exercises.
- Academic skills, B2 to C2: 16 chapters as in a university English (EAP) course (note-taking from a lecture, paraphrasing, essays, data, presentations, seminars, academic style, sources, critical thinking, reports, mediation, synthesis, research writing, editing, exams), each with a real task, a model answer and a correction by Claude.
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
