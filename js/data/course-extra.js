/* Extra content attached to the course units (new lessons, vocabulary topics and texts).
   Loaded after course.js: each entry is merged into the matching unit. */
window.COURSE_EXTRA = {
  "a1-1": { lessons: [101, 102], vocab: ["gens"] },
  "a1-2": { lessons: [105], vocab: ["classe", "ecole"], extra: ["neighbours"] },
  "a1-3": { vocab: ["jours", "heure"], extra: ["week"] },
  "a1-4": { lessons: [81], vocab: ["adjectifs2", "prepositions", "objets"] },
  "a1-5": { lessons: [82], vocab: ["routine", "verbes2", "motsq"] },
  "a1-6": { lessons: [104], vocab: ["lieux", "transports"], extra: ["postcard"] },
  "a1-7": { lessons: [103], vocab: ["fruitsleg", "boissons"], extra: ["market", "phonecall"] },
  "a2-1": { vocab: ["tempsA2", "verbesA2", "etapes"], extra: ["firstjob"] },
  "a2-2": { vocab: ["sorties", "fetes"], extra: ["luggage"] },
  "a2-3": { lessons: [106, 108, 84], vocab: ["aeroport", "hotel", "nature"], extra: ["invitation"] },
  "a2-4": { lessons: [107, 86], vocab: ["apparence", "accessoires", "animauxA2"] },
  "a2-5": { lessons: [83, 94], vocab: ["argent", "villeA2", "supermarche"], extra: ["nophone"] },
  "a2-6": { lessons: [109], vocab: ["bobos", "menage", "repas", "problemes"], extra: ["doctor"] },
  "a2-7": { lessons: [110, 85], vocab: ["ordi"] },
  "b1-1": { lessons: [93], vocab: ["familleB1", "sentimentsB1", "expressionsB1", "verbprep", "childhoodB1"], extra: ["mistakes"] },
  "b1-2": { lessons: [112, 92, 95], vocab: ["voyageB1", "route", "meteoB1", "urgences", "placesB1"], extra: ["ebike"] },
  "b1-3": { lessons: [111], vocab: ["loisirsB1", "culture", "phrasal3", "musique", "ecrans", "dreamsB1"], extra: ["volunteer"] },
  "b1-4": { lessons: [113], vocab: ["crime", "environnement", "reseaux", "disastersB1"] },
  "b1-5": { vocab: ["finances", "reclamations", "mode", "adjB1", "voisinage", "diyB1", "deliveriesB1"], extra: ["complaint"] },
  "b1-6": { lessons: [87], vocab: ["nutrition", "sportB1", "gestes", "cuisineB1", "sleepB1", "bodyB1"], extra: ["nurse"] },
  "b1-7": { lessons: [114, 115, 88], vocab: ["emploiB1", "bureau", "phoneB1", "qualitiesB1"] },
  "b2-1": { lessons: [119, 89], vocab: ["emotionsB2", "caractereB2", "relationsB2", "decisionsB2", "growthB2", "socialB2"], extra: ["trainmissed", "wishiknew"] },
  "b2-2": { lessons: [90], vocab: ["carriere", "etudesB2", "tourisme", "phrasal4", "memoryB2", "ambitionsB2", "generationsB2"], extra: ["careerchange", "shopkeeper"] },
  "b2-3": { lessons: [117], vocab: ["consommation", "urbain", "nuancesB2", "alimentation", "statsB2", "businessB2", "transportB2"], extra: ["cyclingreport", "readersurvey", "noclothes"] },
  "b2-4": { lessons: [118, 91], vocab: ["arts", "adjB2", "collocB2", "corpsIdioms", "uxB2", "cinemaB2", "stageB2", "writingB2"], extra: ["bookreview", "bookcovers"] },
  "b2-5": { lessons: [116], vocab: ["societeB2", "logementB2", "communication", "verbesB2", "argueB2", "rightsB2", "adsB2"], extra: ["phoneban", "freemuseums"] },
  "b2-6": { lessons: [120], vocab: ["medecine", "techB2", "climat", "idiomsB2", "presse", "crimeB2", "scienceB2", "lifestyleB2", "factsB2", "wildlifeB2", "spaceB2"], extra: ["placebo", "firstimpressions", "lockedoffice"] },
  "c1-1": { lessons: [121], vocab: ["feelingsC1", "characterC1", "adjC1", "idiomsC1", "collocC1", "lookC1", "soundsC1", "motionC1", "sightC1", "emphasisC1", "humourC1"], extra: ["gradspeech", "walking"] },
  "c1-2": { lessons: [122], vocab: ["wordsC1", "linkersC1", "lawC1", "economyC1", "leadership", "formalC1", "correspondenceC1", "adminC1", "negotiationC1", "investC1", "hrC1"], extra: ["coverletter", "basicincome", "accessreport"] },
  "c1-3": { lessons: [123], vocab: ["conversationC1", "phrasalC1", "mindC1", "globalC1", "slangC1", "reactC1", "hedgeC1", "phrasalPeopleC1", "successC1", "talkC1"], extra: ["dinnerparty", "longdrive"] },
  "c1-4": { lessons: [124], vocab: ["literature", "academic", "verbsC1", "changeC1", "trendsC1", "reportC1", "causeC1", "qualityC1", "sequenceC1", "creativeC1", "urbanC1"], extra: ["carverstreet", "lostlanguages", "exhibitionreview", "colourwords", "interpreter"] },
  "c1-5": { lessons: [125], vocab: ["politicsC1", "ethics", "conflictC1", "nuanceC1b", "researchC1", "environmentC1", "digitalC1", "healthC1", "techC1", "ideasC1", "historyC1", "energyC1", "rightsC1"], extra: ["overtourism", "forgotten", "repair"] }
};
(function () {
  Object.entries(window.COURSE_EXTRA).forEach(([id, x]) => {
    const u = window.COURSE.find((c) => c.id === id);
    if (!u) return;
    if (x.lessons) x.lessons.forEach((l) => { if (!u.lessons.includes(l)) u.lessons.push(l); });
    if (x.vocab) x.vocab.forEach((v) => { if (!u.vocab.includes(v)) u.vocab.push(v); });
    if (x.extra) u.extra = (u.extra || []).concat(x.extra.filter((r) => !(u.extra || []).includes(r)));
  });
})();
