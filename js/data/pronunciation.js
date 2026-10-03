/* Cours de prononciation, A1 → C2 (1/2 : alphabet phonétique + chapitres A1-A2).
   Modèle de référence : l'anglais britannique standard (SSBE), avec les différences américaines signalées.
   words : [mot, API sans les barres, traduction, texte à lire (facultatif), voix en-GB/en-US (facultatif)]
   pairs : paires minimales (entraînement de l'oreille). stress : [mot, syllabes séparées par |, syllabe accentuée, texte à lire].
   practice : phrases à répéter [en, fr]. quiz : questions écrites à la main (mcq par défaut, ou type "stress" / "type").
   Dans body : <s-en>…</s-en> = exemple avec bouton audio, <ipa>…</ipa> = transcription, <st>…</st> = syllabe accentuée. */
window.PRON_IPA = [
{ id: "cons", title: "Consonants", title_fr: "Les consonnes", items: [
  ["p", "pen", "pen", "p-voicing", "like the French p, plus a puff of air at the start of a stressed syllable", "comme le p français, plus un petit souffle en début de syllabe accentuée"],
  ["b", "bag", "bæɡ", "p-voicing", "like the French b", "comme le b français"],
  ["t", "tea", "tiː", "p-voicing", "with a puff of air; the tongue touches the ridge behind the top teeth", "avec un souffle ; la langue touche la gencive, derrière les dents du haut"],
  ["d", "day", "deɪ", "p-voicing", "like the French d, tongue slightly further back", "comme le d français, langue un peu plus en arrière"],
  ["k", "key", "kiː", "p-voicing", "with a puff of air", "avec un souffle"],
  ["ɡ", "go", "ɡəʊ", "p-voicing", "like the g in « gare »", "comme le g de « gare »"],
  ["f", "fish", "fɪʃ", "", "like the French f", "comme le f français"],
  ["v", "very", "ˈveri", "p-rwl", "like the French v: top teeth on the bottom lip", "comme le v français : dents du haut sur la lèvre du bas"],
  ["θ", "think", "θɪŋk", "p-th", "not in French: tongue between the teeth, air only", "n'existe pas en français : langue entre les dents, souffle seul"],
  ["ð", "this", "ðɪs", "p-th", "not in French: tongue between the teeth, with your voice", "n'existe pas en français : langue entre les dents, avec la voix"],
  ["s", "see", "siː", "", "like the French s", "comme le s français"],
  ["z", "zoo", "zuː", "p-endings", "like the French z", "comme le z français"],
  ["ʃ", "she", "ʃiː", "p-voicing", "like « ch » in « chat »", "comme « ch » dans « chat »"],
  ["ʒ", "television", "ˈtelɪvɪʒən", "p-voicing", "like « j » in « jour »", "comme « j » dans « jour »"],
  ["h", "hat", "hæt", "p-h", "a breath from the throat; always silent in French", "un souffle venu de la gorge ; toujours muet en français"],
  ["tʃ", "chair", "tʃeə", "p-voicing", "like « tch » in « tchèque »", "comme « tch » dans « tchèque »"],
  ["dʒ", "job", "dʒɒb", "p-voicing", "like « dj » in « djembé »", "comme « dj » dans « djembé »"],
  ["m", "man", "mæn", "", "like the French m", "comme le m français"],
  ["n", "no", "nəʊ", "", "like the French n", "comme le n français"],
  ["ŋ", "sing", "sɪŋ", "p-rwl", "like the end of « parking », with no g after it", "comme la fin de « parking », sans g derrière"],
  ["l", "leg", "leɡ", "p-rwl", "clear before a vowel, « dark » at the end of a word (ball)", "clair devant une voyelle, « sombre » en fin de mot (ball)"],
  ["r", "red", "red", "p-rwl", "tongue curled back, touching nothing; never from the throat", "langue recourbée qui ne touche rien ; jamais dans la gorge"],
  ["w", "we", "wiː", "p-rwl", "a very quick « ou », as in « oui »", "un « ou » très rapide, comme dans « oui »"],
  ["j", "yes", "jes", "p-voicing", "like the « y » in « yeux »", "comme le « y » de « yeux »"]
]},
{ id: "short", title: "Short vowels", title_fr: "Les voyelles brèves", items: [
  ["ɪ", "sit", "sɪt", "p-short", "between « i » and « é », short and relaxed", "entre « i » et « é », bref et détendu"],
  ["e", "bed", "bed", "p-short", "like « è », short", "comme « è », bref"],
  ["æ", "cat", "kæt", "p-short", "jaw wide open, between « a » and « è »", "mâchoire bien ouverte, entre « a » et « è »"],
  ["ʌ", "cup", "kʌp", "p-short", "a short, neutral « a », lips relaxed", "un « a » bref et neutre, lèvres détendues"],
  ["ɒ", "hot", "hɒt", "p-short", "like the « o » in « porte », short", "comme le « o » de « porte », bref"],
  ["ʊ", "book", "bʊk", "p-short", "a short, relaxed « ou »", "un « ou » bref et détendu"],
  ["ə", "about", "əˈbaʊt", "p-schwa", "the schwa: a weak, relaxed « e », only in unstressed syllables", "le schwa : un « e » faible et détendu, seulement dans les syllabes non accentuées"]
]},
{ id: "long", title: "Long vowels", title_fr: "Les voyelles longues", items: [
  ["iː", "see", "siː", "p-long", "a long « i », smiling", "un « i » long, en souriant"],
  ["ɑː", "car", "kɑː", "p-long", "a long, deep « a »", "un « a » long et profond"],
  ["ɔː", "door", "dɔː", "p-long", "a long « o », as in « fort »", "un « o » long, comme dans « fort »"],
  ["uː", "food", "fuːd", "p-long", "a long « ou », lips rounded", "un « ou » long, lèvres arrondies"],
  ["ɜː", "bird", "bɜːd", "p-long", "like « eu » in « peur », long, lips not rounded", "comme « eu » dans « peur », long, lèvres non arrondies"]
]},
{ id: "diph", title: "Diphthongs", title_fr: "Les diphtongues", items: [
  ["eɪ", "day", "deɪ", "p-diph", "« é » gliding to « i »", "« é » qui glisse vers « i »"],
  ["aɪ", "my", "maɪ", "p-diph", "like « aï »", "comme « aï »"],
  ["ɔɪ", "boy", "bɔɪ", "p-diph", "like « oï »", "comme « oï »"],
  ["əʊ", "go", "ɡəʊ", "p-diph", "a relaxed « eu » gliding to « ou » (American: oʊ)", "un « eu » détendu qui glisse vers « ou » (américain : oʊ)"],
  ["aʊ", "now", "naʊ", "p-diph", "like « aou »", "comme « aou »"],
  ["ɪə", "here", "hɪə", "p-diph", "« i » gliding to a schwa", "« i » qui glisse vers un schwa"],
  ["eə", "hair", "heə", "p-diph", "a long « è » with a light schwa", "un « è » long avec un léger schwa"],
  ["ʊə", "tour", "tʊə", "p-diph", "« ou » + schwa; many speakers now say ɔː", "« ou » + schwa ; beaucoup disent aujourd'hui ɔː"]
]}
];

window.PRON = [
/* ============================== A1 ============================== */
{ id: "p-start", level: "A1", icon: "map", ipa: "/ˈsaʊndz/", units: ["a1-1"],
  title: "How English sounds work", title_fr: "Comment fonctionnent les sons de l'anglais",
  subtitle: "Letters, sounds and the phonetic alphabet", subtitle_fr: "Lettres, sons et alphabet phonétique",
  body: `<p>English has 26 letters but about <b>44 sounds</b>. The same letter can make several sounds (<s-en>cat</s-en>, <s-en>cake</s-en>, <s-en>car</s-en>), and the same sound can be written in many ways (<s-en>see</s-en>, <s-en>sea</s-en>, <s-en>key</s-en>). So you can't trust the spelling: you need to <b>hear</b> words, and you need a map of the sounds.</p>
<h3>The map: the phonetic alphabet</h3>
<p>Dictionaries write the pronunciation between slashes, with the International Phonetic Alphabet (IPA): <ipa>θɪŋk</ipa> = think, <ipa>ʃiːp</ipa> = sheep. One symbol = one sound, always. You don't need to learn it all today: each chapter introduces a few symbols, and the <a href="#/prononciation/api">IPA chart</a> lets you hear all of them.</p>
<h3>Four big differences with French</h3>
<ul>
<li><b>Stress.</b> In French, all syllables are roughly equal, with a little weight on the last one. In English, one syllable per word is much stronger: <s-en><st>pho</st>tograph</s-en>, <s-en>pho<st>to</st>grapher</s-en>.</li>
<li><b>Weak syllables.</b> The unstressed syllables shrink to a short, relaxed sound, the schwa <ipa>ə</ipa>: <s-en>banana</s-en> <ipa>bəˈnɑːnə</ipa>.</li>
<li><b>Long and short vowels.</b> <s-en>ship</s-en> and <s-en>sheep</s-en> are two different words. In French, the length of a vowel doesn't change the meaning.</li>
<li><b>New sounds.</b> <span class="no-tx">th</span> <ipa>θ ð</ipa>, h <ipa>h</ipa>, the English r, and the diphthongs (<s-en>no</s-en> <ipa>nəʊ</ipa>: two sounds gliding together).</li>
</ul>
<h3>What matters most</h3>
<p>The aim isn't to sound British or American: it's to be <b>easy to understand</b>. Research on intelligibility (Munro and Derwing, 1995) shows that a strong accent and being hard to understand are not the same thing. What causes the most misunderstandings is stress in the wrong place, the wrong vowel length, and missing consonants. Field (2005) even found that stress moved towards the end of a word (exactly the French habit) is particularly damaging.</p>
<div class="tip">Your routine in every chapter: <b>listen</b> several times, <b>notice</b> the difference, <b>imitate</b> by exaggerating, <b>record yourself</b> and compare. Exaggerating at first is normal: your mouth is learning new movements.</div>`,
  body_fr: `<p>L'anglais a 26 lettres mais environ <b>44 sons</b>. La même lettre peut faire plusieurs sons (<s-en>cat</s-en>, <s-en>cake</s-en>, <s-en>car</s-en>), et le même son peut s'écrire de beaucoup de façons (<s-en>see</s-en>, <s-en>sea</s-en>, <s-en>key</s-en>). On ne peut donc pas se fier à l'orthographe : il faut <b>entendre</b> les mots, et il faut une carte des sons.</p>
<h3>La carte : l'alphabet phonétique</h3>
<p>Les dictionnaires écrivent la prononciation entre barres obliques, avec l'Alphabet Phonétique International (API) : <ipa>θɪŋk</ipa> = think, <ipa>ʃiːp</ipa> = sheep. Un symbole = un son, toujours. Pas besoin de tout apprendre aujourd'hui : chaque chapitre présente quelques symboles, et le <a href="#/prononciation/api">tableau de l'API</a> te permet de tous les écouter.</p>
<h3>Quatre grandes différences avec le français</h3>
<ul>
<li><b>L'accent tonique.</b> En français, toutes les syllabes se valent à peu près, avec un léger poids sur la dernière. En anglais, une syllabe par mot est bien plus forte : <s-en><st>pho</st>tograph</s-en>, <s-en>pho<st>to</st>grapher</s-en>.</li>
<li><b>Les syllabes faibles.</b> Les syllabes non accentuées se réduisent à un son bref et détendu, le schwa <ipa>ə</ipa> : <s-en>banana</s-en> <ipa>bəˈnɑːnə</ipa>.</li>
<li><b>Voyelles longues et brèves.</b> <s-en>ship</s-en> (bateau) et <s-en>sheep</s-en> (mouton) sont deux mots différents. En français, la durée d'une voyelle ne change pas le sens.</li>
<li><b>Des sons nouveaux.</b> th <ipa>θ ð</ipa>, h <ipa>h</ipa>, le r anglais, et les diphtongues (<s-en>no</s-en> <ipa>nəʊ</ipa> : deux sons qui glissent l'un vers l'autre).</li>
</ul>
<h3>Ce qui compte le plus</h3>
<p>Le but n'est pas de sonner britannique ou américaine : c'est d'être <b>facile à comprendre</b>. Les recherches sur l'intelligibilité (Munro et Derwing, 1995) montrent qu'un accent marqué et être difficile à comprendre, ce n'est pas la même chose. Ce qui cause le plus de malentendus : l'accent tonique mal placé, la mauvaise durée des voyelles et les consonnes oubliées. Field (2005) a même montré qu'un accent déplacé vers la fin du mot (exactement l'habitude française) gêne particulièrement la compréhension.</p>
<div class="tip">Ta routine dans chaque chapitre : <b>écouter</b> plusieurs fois, <b>remarquer</b> la différence, <b>imiter</b> en exagérant, <b>t'enregistrer</b> et comparer. Exagérer au début, c'est normal : ta bouche apprend des mouvements nouveaux.</div>`,
  words: [["cat", "kæt", "chat"], ["cake", "keɪk", "gâteau"], ["car", "kɑː", "voiture"], ["see", "siː", "voir"], ["key", "kiː", "clé"], ["think", "θɪŋk", "penser"], ["sheep", "ʃiːp", "mouton"], ["ship", "ʃɪp", "bateau"], ["banana", "bəˈnɑːnə", "banane"], ["photograph", "ˈfəʊtəɡrɑːf", "photo"], ["photographer", "fəˈtɒɡrəfə", "photographe"], ["no", "nəʊ", "non"]],
  pairs: [["ship", "sheep"], ["think", "sink"], ["hair", "air"], ["full", "fool"]],
  stress: [["photograph", "pho|to|graph", 0], ["photographer", "pho|tog|ra|pher", 1], ["banana", "ba|na|na", 1], ["hotel", "ho|tel", 1]],
  practice: [["English spelling is a bit crazy.", "L'orthographe anglaise est un peu folle."], ["I think three sheep are sleeping.", "Je crois que trois moutons dorment."], ["She's a photographer at a hotel.", "Elle est photographe dans un hôtel."], ["My photographer took a good photograph.", "Mon photographe a pris une bonne photo."]],
  quiz: [
    { q: "Roughly how many sounds does English have?", q_fr: "Combien de sons l'anglais a-t-il, environ ?", o: ["about 44", "26, one per letter", "about 100"], a: 0, ex: "26 letters but about 44 sounds: that's why the spelling doesn't tell you the pronunciation.", ex_fr: "26 lettres mais environ 44 sons : c'est pour ça que l'orthographe ne dit pas la prononciation." },
    { q: "In a dictionary, /ʃiːp/ is…", q_fr: "Dans un dictionnaire, /ʃiːp/ est…", o: ["the pronunciation of sheep", "the spelling of ship", "a French word"], a: 0, ex: "Between slashes: the pronunciation, in the phonetic alphabet. /ʃ/ = « ch », /iː/ = long « i ».", ex_fr: "Entre barres obliques : la prononciation, en alphabet phonétique. /ʃ/ = « ch », /iː/ = « i » long." },
    { q: "In an English word of several syllables…", q_fr: "Dans un mot anglais de plusieurs syllabes…", o: ["one syllable is clearly stronger than the others", "all the syllables are equal", "the last syllable is always the strongest"], a: 0, ex: "One stressed syllable per word: PHOtograph, phoTOgrapher.", ex_fr: "Une syllabe accentuée par mot : PHOtograph, phoTOgrapher." },
    { q: "ship and sheep are…", q_fr: "ship et sheep sont…", o: ["two different words: the length of the vowel changes the meaning", "the same word with two accents", "the singular and plural of the same word"], a: 0, ex: "ship /ʃɪp/ = bateau, sheep /ʃiːp/ = mouton.", ex_fr: "ship /ʃɪp/ = bateau, sheep /ʃiːp/ = mouton." },
    { q: "According to research, what causes the most misunderstandings?", q_fr: "D'après la recherche, qu'est-ce qui cause le plus de malentendus ?", o: ["stress in the wrong place and the wrong vowel length", "having a French accent", "not sounding American"], a: 0, ex: "An accent is fine. Stress and vowel length are what make a word recognisable.", ex_fr: "Un accent, ce n'est pas grave. Ce sont l'accent tonique et la durée des voyelles qui rendent un mot reconnaissable." },
    { q: "see, sea and key…", q_fr: "see, sea et key…", o: ["have the same vowel sound /iː/", "have three different vowel sounds", "each have a silent letter"], a: 0, ex: "Three spellings (ee, ea, ey), one sound: /iː/.", ex_fr: "Trois orthographes (ee, ea, ey), un seul son : /iː/." },
    { q: "The best way to learn a new sound is to…", q_fr: "La meilleure façon d'apprendre un son nouveau, c'est de…", o: ["listen, imitate by exaggerating, record yourself and compare", "read the rule and move on", "only listen, never speak"], a: 0, ex: "Hear it, then produce it: your mouth needs practice as much as your ear.", ex_fr: "L'entendre, puis le produire : ta bouche a besoin d'entraînement autant que ton oreille." }
  ] },

{ id: "p-alphabet", level: "A1", icon: "a-large-small", ipa: "/eɪ biː siː/", units: ["a1-1"],
  title: "The alphabet and spelling aloud", title_fr: "L'alphabet et épeler à voix haute",
  subtitle: "Letter names, emails, double letters", subtitle_fr: "Le nom des lettres, les e-mails, les lettres doubles",
  body: `<p>You'll spell your name, your email, a street name… and English letter names are full of traps for French speakers. The easiest way to learn them is <b>by vowel sound</b>: the letters of each group rhyme.</p>
<ul>
<li><ipa>eɪ</ipa> as in <s-en>day</s-en>: <b>A H J K</b></li>
<li><ipa>iː</ipa> as in <s-en>see</s-en>: <b>B C D E G P T V</b> (and Z in American English: “zee”)</li>
<li><ipa>e</ipa> as in <s-en>bed</s-en>: <b>F L M N S X</b> (and Z in British English: “zed”)</li>
<li><ipa>aɪ</ipa> as in <s-en>my</s-en>: <b>I Y</b></li>
<li><ipa>əʊ</ipa> as in <s-en>go</s-en>: <b>O</b></li>
<li><ipa>uː</ipa> as in <s-en>you</s-en>: <b>Q U W</b></li>
<li><ipa>ɑː</ipa> as in <s-en>car</s-en>: <b>R</b></li>
</ul>
<div class="warn">The classic traps: <b>E</b> sounds like the French « i » <ipa>iː</ipa>, and <b>I</b> sounds like « aï » <ipa>aɪ</ipa>. <b>G</b> <ipa>dʒiː</ipa> and <b>J</b> <ipa>dʒeɪ</ipa> are “swapped” compared with French. <b>A</b> is <ipa>eɪ</ipa> and <b>R</b> is <ipa>ɑː</ipa>. <b>H</b> is “aitch” <ipa>eɪtʃ</ipa>, and <b>W</b> is “double u” <ipa>ˈdʌbəljuː</ipa>.</div>
<h3>Spelling aloud like a native</h3>
<ul>
<li>Double letters: British speakers often say <s-en>double L</s-en> (Stella = S, T, E, double L, A); Americans more often say each letter.</li>
<li>Emails: @ = <s-en>at</s-en>, . = <s-en>dot</s-en>, _ = <s-en>underscore</s-en>, - = <s-en>dash</s-en> or <s-en>hyphen</s-en>. Say <s-en>all one word</s-en> and <s-en>all lower case</s-en> to avoid mistakes.</li>
<li>On the phone, use code words: <s-en>B for Bravo</s-en>, <s-en>M for Mike</s-en>, <s-en>N for November</s-en> (the international radio alphabet).</li>
</ul>`,
  body_fr: `<p>Tu vas épeler ton nom, ton e-mail, un nom de rue… et le nom des lettres anglaises est plein de pièges pour les francophones. Le plus simple est de les apprendre <b>par son de voyelle</b> : les lettres d'un même groupe riment.</p>
<ul>
<li><ipa>eɪ</ipa> comme dans <s-en>day</s-en> : <b>A H J K</b></li>
<li><ipa>iː</ipa> comme dans <s-en>see</s-en> : <b>B C D E G P T V</b> (et Z en américain : « zee »)</li>
<li><ipa>e</ipa> comme dans <s-en>bed</s-en> : <b>F L M N S X</b> (et Z en britannique : « zed »)</li>
<li><ipa>aɪ</ipa> comme dans <s-en>my</s-en> : <b>I Y</b></li>
<li><ipa>əʊ</ipa> comme dans <s-en>go</s-en> : <b>O</b></li>
<li><ipa>uː</ipa> comme dans <s-en>you</s-en> : <b>Q U W</b></li>
<li><ipa>ɑː</ipa> comme dans <s-en>car</s-en> : <b>R</b></li>
</ul>
<div class="warn">Les pièges classiques : <b>E</b> se dit comme le « i » français <ipa>iː</ipa>, et <b>I</b> se dit « aï » <ipa>aɪ</ipa>. <b>G</b> <ipa>dʒiː</ipa> et <b>J</b> <ipa>dʒeɪ</ipa> sont « inversés » par rapport au français. <b>A</b> se dit <ipa>eɪ</ipa> et <b>R</b> se dit <ipa>ɑː</ipa>. <b>H</b> se dit « aitch » <ipa>eɪtʃ</ipa>, et <b>W</b> « double u » <ipa>ˈdʌbəljuː</ipa>.</div>
<h3>Épeler comme un natif</h3>
<ul>
<li>Lettres doubles : les Britanniques disent souvent <s-en>double L</s-en> (Stella = S, T, E, double L, A) ; les Américains disent plutôt chaque lettre.</li>
<li>E-mails : @ = <s-en>at</s-en>, . = <s-en>dot</s-en>, _ = <s-en>underscore</s-en>, - = <s-en>dash</s-en> ou <s-en>hyphen</s-en>. Dis <s-en>all one word</s-en> (tout attaché) et <s-en>all lower case</s-en> (tout en minuscules) pour éviter les erreurs.</li>
<li>Au téléphone, utilise des mots-codes : <s-en>B for Bravo</s-en>, <s-en>M for Mike</s-en>, <s-en>N for November</s-en> (l'alphabet radio international).</li>
</ul>`,
  words: [["A", "eɪ", "", "letter A"], ["E", "iː", ""], ["I", "aɪ", ""], ["G", "dʒiː", ""], ["J", "dʒeɪ", ""], ["H", "eɪtʃ", ""], ["R", "ɑː", ""], ["W", "ˈdʌbəljuː", ""], ["Y", "waɪ", ""], ["Q", "kjuː", ""], ["U", "juː", ""], ["Z (UK)", "zed", "", "zed"]],
  pairs: [["E", "I"], ["G", "J"], ["Y", "I"], ["K", "Q"]],
  practice: [["Could you spell that, please?", "Pouvez-vous l'épeler, s'il vous plaît ?"], ["How do you spell your surname?", "Comment s'écrit ton nom de famille ?"], ["Is that G for Golf or J for Juliet?", "C'est G comme Golf ou J comme Juliet ?"], ["My email is stella at example dot com.", "Mon e-mail est stella arobase example point com."]],
  quiz: [
    { q: "Which letter is pronounced /iː/, like “see”?", q_fr: "Quelle lettre se prononce /iː/, comme « see » ?", o: ["E", "I", "A"], a: 0, ex: "E = /iː/. I = /aɪ/, A = /eɪ/.", ex_fr: "E = /iː/. I = /aɪ/, A = /eɪ/." },
    { q: "Which letter is pronounced /aɪ/, like “my”?", q_fr: "Quelle lettre se prononce /aɪ/, comme « my » ?", o: ["I", "E", "A"], a: 0 },
    { q: "Which letter is pronounced /dʒeɪ/?", q_fr: "Quelle lettre se prononce /dʒeɪ/ ?", o: ["J", "G", "Y"], a: 0, ex: "J = /dʒeɪ/ (rhymes with day), G = /dʒiː/ (rhymes with see).", ex_fr: "J = /dʒeɪ/ (rime avec day), G = /dʒiː/ (rime avec see)." },
    { q: "Which group of letters rhymes with “day”?", q_fr: "Quel groupe de lettres rime avec « day » ?", o: ["A, H, J, K", "B, C, D, E", "F, L, M, N"], a: 0 },
    { q: "Which letter rhymes with “car”?", q_fr: "Quelle lettre rime avec « car » ?", o: ["R", "A", "O"], a: 0 },
    { q: "How do you say @ in an email address?", q_fr: "Comment dit-on @ dans une adresse e-mail ?", o: ["at", "arobase", "about"], a: 0 },
    { q: "In British English, people often spell “Stella”…", q_fr: "En anglais britannique, on épelle souvent « Stella »…", o: ["S, T, E, double L, A", "S, T, I, double L, A", "S, T, E, L, A"], a: 0 },
    { type: "type", say: "B, R, I, G, H, T.", q: "Listen: a word is spelled out. Write it.", q_fr: "Écoute : un mot est épelé. Écris-le.", answer: "bright", ex: "B, R, I, G, H, T = bright (lumineux).", ex_fr: "B, R, I, G, H, T = bright (lumineux)." },
    { type: "type", say: "J, U, I, C, E.", q: "Listen: a word is spelled out. Write it.", q_fr: "Écoute : un mot est épelé. Écris-le.", answer: "juice", ex: "J (/dʒeɪ/), U, I (/aɪ/), C, E (/iː/) = juice.", ex_fr: "J (/dʒeɪ/), U, I (/aɪ/), C, E (/iː/) = juice." },
    { q: "In British English, the letter Z is…", q_fr: "En anglais britannique, la lettre Z se dit…", o: ["zed", "zee", "zet"], a: 0, ex: "zed in Britain, zee in the US.", ex_fr: "zed au Royaume-Uni, zee aux États-Unis." }
  ] },

{ id: "p-th", level: "A1", icon: "audio-lines", ipa: "/θ/ /ð/", units: ["a1-2"],
  title: "TH: /θ/ and /ð/", title_fr: "Le TH : /θ/ et /ð/",
  subtitle: "think, this, mother, three", subtitle_fr: "think, this, mother, three",
  body: `<p>The letters <span class="no-tx">th</span> make two sounds, and neither exists in French. For both, put the <b>tip of your tongue between your teeth</b> (or just behind your top teeth) and let the air pass.</p>
<ul>
<li><ipa>θ</ipa>, voiceless (only air): <s-en>think</s-en>, <s-en>three</s-en>, <s-en>thanks</s-en>, <s-en>month</s-en>, <s-en>birthday</s-en>, <s-en>health</s-en>, <s-en>both</s-en>.</li>
<li><ipa>ð</ipa>, voiced (your throat vibrates): <s-en>the</s-en>, <s-en>this</s-en>, <s-en>that</s-en>, <s-en>they</s-en>, <s-en>there</s-en>, <s-en>mother</s-en>, <s-en>with</s-en>.</li>
</ul>
<p>Put your hand on your throat: for <ipa>ð</ipa> you feel it buzz, for <ipa>θ</ipa> you don't.</p>
<h3>Which one? Simple rules</h3>
<ul>
<li>Little grammar words (the, this, that, these, those, they, them, their, there, then, than, though) → <ipa>ð</ipa>.</li>
<li>At the start of nouns, verbs and adjectives (think, thing, thank, thick, theatre, Thursday) → <ipa>θ</ipa>.</li>
<li>Between two vowels, usually <ipa>ð</ipa>: mother, father, other, weather. A noun often has <ipa>θ</ipa> and its verb <ipa>ð</ipa> + e: <s-en>breath</s-en> <ipa>breθ</ipa>, <s-en>breathe</s-en> <ipa>briːð</ipa>.</li>
<li>A few names keep <span class="no-tx">th</span> = <ipa>t</ipa>: <s-en>Thomas</s-en>, <s-en>Thames</s-en>, <s-en>Thailand</s-en>.</li>
</ul>
<div class="warn">French speakers usually replace <span class="no-tx">th</span> with s or z (“sink” for think, “zis” for this), sometimes with f or t. Your listener then hears another word: <s-en>think</s-en> / <s-en>sink</s-en>, <s-en>thick</s-en> / <s-en>sick</s-en>, <s-en>three</s-en> / <s-en>free</s-en>, <s-en>they</s-en> / <s-en>day</s-en>. To check yourself: in a mirror, the tip of your tongue should be <b>visible</b>.</div>
<div class="tip">Good news: research on English as an international language (Jenkins, 2000) shows that <span class="no-tx">th</span> causes fewer misunderstandings than vowel length or sentence stress. Work on it, but don't let it block you.</div>`,
  body_fr: `<p>Les lettres th font deux sons, et aucun n'existe en français. Pour les deux, place le <b>bout de la langue entre les dents</b> (ou juste derrière les dents du haut) et laisse passer l'air.</p>
<ul>
<li><ipa>θ</ipa>, sourd (seulement de l'air) : <s-en>think</s-en>, <s-en>three</s-en>, <s-en>thanks</s-en>, <s-en>month</s-en>, <s-en>birthday</s-en>, <s-en>health</s-en>, <s-en>both</s-en>.</li>
<li><ipa>ð</ipa>, sonore (ta gorge vibre) : <s-en>the</s-en>, <s-en>this</s-en>, <s-en>that</s-en>, <s-en>they</s-en>, <s-en>there</s-en>, <s-en>mother</s-en>, <s-en>with</s-en>.</li>
</ul>
<p>Pose la main sur ta gorge : pour <ipa>ð</ipa> tu la sens vibrer, pour <ipa>θ</ipa> non.</p>
<h3>Lequel ? Des règles simples</h3>
<ul>
<li>Les petits mots grammaticaux (the, this, that, these, those, they, them, their, there, then, than, though) → <ipa>ð</ipa>.</li>
<li>Au début des noms, verbes et adjectifs (think, thing, thank, thick, theatre, Thursday) → <ipa>θ</ipa>.</li>
<li>Entre deux voyelles, en général <ipa>ð</ipa> : mother, father, other, weather. Un nom a souvent <ipa>θ</ipa> et son verbe <ipa>ð</ipa> + e : <s-en>breath</s-en> <ipa>breθ</ipa> (souffle), <s-en>breathe</s-en> <ipa>briːð</ipa> (respirer).</li>
<li>Quelques noms propres gardent th = <ipa>t</ipa> : <s-en>Thomas</s-en>, <s-en>Thames</s-en>, <s-en>Thailand</s-en>.</li>
</ul>
<div class="warn">Les francophones remplacent souvent th par s ou z (« sink » pour think, « zis » pour this), parfois par f ou t. Ton interlocuteur entend alors un autre mot : <s-en>think</s-en> / <s-en>sink</s-en>, <s-en>thick</s-en> / <s-en>sick</s-en>, <s-en>three</s-en> / <s-en>free</s-en>, <s-en>they</s-en> / <s-en>day</s-en>. Pour vérifier : dans un miroir, le bout de ta langue doit être <b>visible</b>.</div>
<div class="tip">Bonne nouvelle : les recherches sur l'anglais comme langue internationale (Jenkins, 2000) montrent que le th cause moins de malentendus que la durée des voyelles ou l'accent de phrase. Travaille-le, mais ne le laisse pas te bloquer.</div>`,
  words: [["think", "θɪŋk", "penser"], ["three", "θriː", "trois"], ["thanks", "θæŋks", "merci"], ["month", "mʌnθ", "mois"], ["birthday", "ˈbɜːθdeɪ", "anniversaire"], ["health", "helθ", "santé"], ["both", "bəʊθ", "les deux"], ["the", "ðə", "le, la, les"], ["this", "ðɪs", "ceci, ce"], ["they", "ðeɪ", "ils, elles"], ["mother", "ˈmʌðə", "mère"], ["with", "wɪð", "avec"], ["breathe", "briːð", "respirer"], ["clothes", "kləʊðz", "vêtements"], ["Thomas", "ˈtɒməs", "Thomas"]],
  pairs: [["think", "sink"], ["thick", "sick"], ["three", "free"], ["three", "tree"], ["they", "day"], ["then", "den"], ["mouth", "mouse"], ["thank", "sank"], ["breathe", "breeze"]],
  practice: [["Thank you for the three things.", "Merci pour les trois choses."], ["I think this is their mother.", "Je crois que c'est leur mère."], ["My birthday is on the thirteenth of this month.", "Mon anniversaire est le treize de ce mois-ci."], ["They think the weather is better there.", "Ils pensent qu'il fait meilleur là-bas."]],
  quiz: [
    { q: "To say “think”, the tongue…", q_fr: "Pour dire « think », la langue…", o: ["is between the teeth, and only air passes", "touches the top of the mouth, as for « s »", "stays at the back of the mouth"], a: 0 },
    { q: "Which word starts with the voiced sound /ð/?", q_fr: "Quel mot commence par le son sonore /ð/ ?", o: ["they", "thank", "three"], a: 0, ex: "they: a little grammar word, so /ð/. thank and three: /θ/.", ex_fr: "they : un petit mot grammatical, donc /ð/. thank et three : /θ/." },
    { q: "Which word has /θ/?", q_fr: "Quel mot contient /θ/ ?", o: ["month", "mother", "clothes"], a: 0, ex: "month /mʌnθ/. mother and clothes have /ð/.", ex_fr: "month /mʌnθ/. mother et clothes ont /ð/." },
    { q: "If you say “sink” instead of “think”, the listener hears…", q_fr: "Si tu dis « sink » au lieu de « think », on entend…", o: ["another word: sink = évier, couler", "the same word with an accent", "nothing wrong"], a: 0 },
    { q: "Which word is an exception, with th = /t/?", q_fr: "Quel mot est une exception, avec th = /t/ ?", o: ["Thomas", "thought", "those"], a: 0 },
    { q: "breath /breθ/ is a noun. The verb “breathe” is pronounced…", q_fr: "breath /breθ/ est un nom. Le verbe « breathe » se prononce…", o: ["/briːð/", "/breθ/", "/briːθ/"], a: 0 },
    { q: "How can you check your th?", q_fr: "Comment vérifier ton th ?", o: ["In a mirror: the tip of your tongue should be visible", "Say it faster", "Touch your nose"], a: 0 }
  ] },

{ id: "p-numbers", level: "A1", icon: "calculator", ipa: "/ˌθɜːˈtiːn/ /ˈθɜːti/", units: ["a1-3"],
  title: "Numbers, dates and prices", title_fr: "Les nombres, les dates et les prix",
  subtitle: "13 or 30? Saying numbers clearly", subtitle_fr: "13 ou 30 ? Dire les nombres clairement",
  body: `<h3>13 or 30? The most dangerous pair</h3>
<p><s-en>thirteen</s-en> <ipa>ˌθɜːˈtiːn</ipa> is stressed at the end, with a long <ipa>iː</ipa>: <s-en>thir<st>teen</st></s-en>. <s-en>thirty</s-en> <ipa>ˈθɜːti</ipa> is stressed at the start, with a short final vowel: <s-en><st>thir</st>ty</s-en>. Same for 14/40, 15/50… 19/90. In American English, the t of thirty, forty… often sounds like a quick d (“thirdy”), while the t of -teen stays clear.</p>
<div class="warn">When people count or contrast, the stress of -teen can move forward (<s-en><st>thir</st>teen, <st>four</st>teen</s-en>), so the long <ipa>iː</ipa> and the n are the safest clues. When it really matters (a price, a time, a room), check: <s-en>Sorry, was that one-three or three-oh?</s-en></div>
<h3>Saying numbers</h3>
<ul>
<li>0: <s-en>zero</s-en>, but <s-en>oh</s-en> in phone numbers, years and room numbers (<s-en>room four oh two</s-en>); <s-en>nil</s-en> in British football scores.</li>
<li>Phone numbers: digit by digit, in groups; British speakers often say <s-en>double three</s-en> for 33.</li>
<li>Big numbers: <s-en>three hundred and twenty</s-en> (British “and”; Americans often drop it), <s-en>two thousand five hundred</s-en>. No -s: <s-en>three hundred people</s-en>, never “three hundreds”.</li>
<li>Decimals: <s-en>two point five</s-en> (a point, not a comma). Fractions: <s-en>a half</s-en>, <s-en>a quarter</s-en>, <s-en>three quarters</s-en>.</li>
</ul>
<h3>Dates, years, prices, times</h3>
<ul>
<li>Ordinals: <s-en>first</s-en>, <s-en>second</s-en>, <s-en>third</s-en>, <s-en>fifth</s-en> <ipa>fɪfθ</ipa>, <s-en>sixth</s-en> <ipa>sɪksθ</ipa>, <s-en>twelfth</s-en> <ipa>twelfθ</ipa>: hard consonant groups, don't drop the final <ipa>θ</ipa>.</li>
<li>British: <s-en>the third of May</s-en>; American: <s-en>May third</s-en>.</li>
<li>Years: <s-en>nineteen eighty-five</s-en> (1985), <s-en>two thousand and eight</s-en> (2008), <s-en>twenty twenty-six</s-en> (2026).</li>
<li>£4.99 = <s-en>four ninety-nine</s-en> or <s-en>four pounds ninety-nine</s-en>; $20 = <s-en>twenty dollars</s-en> (the symbol is written first but said last). 7:45 = <s-en>seven forty-five</s-en> or <s-en>a quarter to eight</s-en>.</li>
</ul>`,
  body_fr: `<h3>13 ou 30 ? La paire la plus dangereuse</h3>
<p><s-en>thirteen</s-en> <ipa>ˌθɜːˈtiːn</ipa> est accentué à la fin, avec un <ipa>iː</ipa> long : <s-en>thir<st>teen</st></s-en>. <s-en>thirty</s-en> <ipa>ˈθɜːti</ipa> est accentué au début, avec une voyelle finale brève : <s-en><st>thir</st>ty</s-en>. Pareil pour 14/40, 15/50… 19/90. En américain, le t de thirty, forty… ressemble souvent à un d rapide (« thirdy »), alors que le t de -teen reste net.</p>
<div class="warn">Quand on compte ou qu'on oppose deux nombres, l'accent de -teen peut passer devant (<s-en><st>thir</st>teen, <st>four</st>teen</s-en>) : le <ipa>iː</ipa> long et le n sont donc les indices les plus sûrs. Quand c'est important (un prix, une heure, un numéro de chambre), vérifie : <s-en>Sorry, was that one-three or three-oh?</s-en></div>
<h3>Dire les nombres</h3>
<ul>
<li>0 : <s-en>zero</s-en>, mais <s-en>oh</s-en> dans les numéros de téléphone, les années et les numéros de chambre (<s-en>room four oh two</s-en>) ; <s-en>nil</s-en> dans les scores de foot britanniques.</li>
<li>Numéros de téléphone : chiffre par chiffre, par groupes ; les Britanniques disent souvent <s-en>double three</s-en> pour 33.</li>
<li>Grands nombres : <s-en>three hundred and twenty</s-en> (« and » britannique ; les Américains l'omettent souvent), <s-en>two thousand five hundred</s-en>. Pas de -s : <s-en>three hundred people</s-en>, jamais « three hundreds ».</li>
<li>Décimales : <s-en>two point five</s-en> (un point, pas une virgule). Fractions : <s-en>a half</s-en>, <s-en>a quarter</s-en>, <s-en>three quarters</s-en>.</li>
</ul>
<h3>Dates, années, prix, heures</h3>
<ul>
<li>Ordinaux : <s-en>first</s-en>, <s-en>second</s-en>, <s-en>third</s-en>, <s-en>fifth</s-en> <ipa>fɪfθ</ipa>, <s-en>sixth</s-en> <ipa>sɪksθ</ipa>, <s-en>twelfth</s-en> <ipa>twelfθ</ipa> : des groupes de consonnes difficiles, ne laisse pas tomber le <ipa>θ</ipa> final.</li>
<li>Britannique : <s-en>the third of May</s-en> ; américain : <s-en>May third</s-en>.</li>
<li>Années : <s-en>nineteen eighty-five</s-en> (1985), <s-en>two thousand and eight</s-en> (2008), <s-en>twenty twenty-six</s-en> (2026).</li>
<li>4,99 £ = <s-en>four ninety-nine</s-en> ou <s-en>four pounds ninety-nine</s-en> ; 20 $ = <s-en>twenty dollars</s-en> (le symbole s'écrit devant mais se dit après). 7 h 45 = <s-en>seven forty-five</s-en> ou <s-en>a quarter to eight</s-en>.</li>
</ul>`,
  words: [["thirteen", "ˌθɜːˈtiːn", "treize"], ["thirty", "ˈθɜːti", "trente"], ["fifteen", "ˌfɪfˈtiːn", "quinze"], ["fifty", "ˈfɪfti", "cinquante"], ["eighteen", "ˌeɪˈtiːn", "dix-huit"], ["eighty", "ˈeɪti", "quatre-vingts"], ["fifth", "fɪfθ", "cinquième"], ["sixth", "sɪksθ", "sixième"], ["twelfth", "twelfθ", "douzième"], ["hundred", "ˈhʌndrəd", "cent"], ["thousand", "ˈθaʊzənd", "mille"], ["quarter", "ˈkwɔːtə", "quart"], ["half", "hɑːf", "moitié"], ["zero", "ˈzɪərəʊ", "zéro"]],
  pairs: [["thirteen", "thirty"], ["fourteen", "forty"], ["fifteen", "fifty"], ["sixteen", "sixty"], ["seventeen", "seventy"], ["eighteen", "eighty"], ["nineteen", "ninety"]],
  stress: [["thirteen", "thir|teen", 1], ["thirty", "thir|ty", 0], ["fifteen", "fif|teen", 1], ["fifty", "fif|ty", 0], ["eighteen", "eigh|teen", 1], ["ninety", "nine|ty", 0]],
  practice: [["Is it thirteen or thirty?", "C'est treize ou trente ?"], ["It costs fifty pounds, not fifteen.", "Ça coûte cinquante livres, pas quinze."], ["My birthday is on the fifth of June.", "Mon anniversaire est le cinq juin."], ["The train leaves at a quarter to eight.", "Le train part à huit heures moins le quart."]],
  quiz: [
    { q: "In “thirteen”, the stress is usually on…", q_fr: "Dans « thirteen », l'accent est en général sur…", o: ["-teen, with a long /iː/", "thir-", "both syllables equally"], a: 0 },
    { q: "In phone numbers, 0 is often said…", q_fr: "Dans les numéros de téléphone, 0 se dit souvent…", o: ["oh", "nil", "love"], a: 0 },
    { q: "How do you say 2.5?", q_fr: "Comment dit-on 2,5 ?", o: ["two point five", "two comma five", "two and five"], a: 0 },
    { q: "How do you say the year 1985?", q_fr: "Comment dit-on l'année 1985 ?", o: ["nineteen eighty-five", "one nine eight five", "nineteen eight five"], a: 0 },
    { q: "Which is correct?", q_fr: "Laquelle est correcte ?", o: ["three hundred people", "three hundreds people", "three hundred of people"], a: 0 },
    { q: "“Fifth” ends with the sounds…", q_fr: "« Fifth » se termine par les sons…", o: ["/fθ/", "/f/ only", "/θ/ only"], a: 0 },
    { say: "It costs fifty pounds.", q: "Listen. How much does it cost?", q_fr: "Écoute. Combien ça coûte ?", o: ["£50", "£15", "£5"], a: 0 },
    { say: "The meeting is at seven forty.", q: "Listen. What time is the meeting?", q_fr: "Écoute. À quelle heure est la réunion ?", o: ["7:40", "7:14", "7:04"], a: 0 },
    { q: "£4.99 is usually said…", q_fr: "4,99 £ se dit en général…", o: ["four ninety-nine", "four point ninety-nine", "pounds four ninety-nine"], a: 0 }
  ] },

{ id: "p-short", level: "A1", icon: "timer", ipa: "/ɪ e æ ʌ ɒ ʊ/", units: ["a1-4"],
  title: "Short vowels", title_fr: "Les voyelles brèves",
  subtitle: "sit, bed, cat, cup, hot, book", subtitle_fr: "sit, bed, cat, cup, hot, book",
  body: `<p>English has six <b>short vowels</b>. They're quick and relaxed, and usually followed by a consonant. Most of them don't exist in French, so French speakers replace them with the nearest French vowel… and the word changes.</p>
<ul>
<li><ipa>ɪ</ipa> <s-en>sit</s-en>, <s-en>big</s-en>, <s-en>busy</s-en>, <s-en>women</s-en>: between the French « i » and « é », short and relaxed. Not the French « i »!</li>
<li><ipa>e</ipa> <s-en>bed</s-en>, <s-en>said</s-en>, <s-en>friend</s-en>, <s-en>bread</s-en>: like « è » in « mère », but shorter.</li>
<li><ipa>æ</ipa> <s-en>cat</s-en>, <s-en>black</s-en>, <s-en>happy</s-en>: open your mouth wide as for « a », but say « è ». Jaw down!</li>
<li><ipa>ʌ</ipa> <s-en>cup</s-en>, <s-en>love</s-en>, <s-en>money</s-en>, <s-en>young</s-en>: a short, central « a », a bit like a quick « eu », lips relaxed (not rounded).</li>
<li><ipa>ɒ</ipa> <s-en>hot</s-en>, <s-en>dog</s-en>, <s-en>what</s-en>, <s-en>want</s-en>: like the « o » in « porte », short, mouth open. (In American English it's more open, close to « a »: hot ≈ « haht ».)</li>
<li><ipa>ʊ</ipa> <s-en>book</s-en>, <s-en>good</s-en>, <s-en>put</s-en>, <s-en>could</s-en>: a short, relaxed « ou », lips only slightly rounded.</li>
</ul>
<div class="warn">The three most frequent confusions: <s-en>cat</s-en> / <s-en>cut</s-en> (<ipa>æ</ipa> / <ipa>ʌ</ipa>), <s-en>bed</s-en> / <s-en>bad</s-en> (<ipa>e</ipa> / <ipa>æ</ipa>), and <s-en>hut</s-en> / <s-en>hot</s-en> (<ipa>ʌ</ipa> / <ipa>ɒ</ipa>). Spelling won't help: <s-en>love</s-en>, <s-en>come</s-en> and <s-en>money</s-en> are written with o but pronounced <ipa>ʌ</ipa>.</div>
<div class="tip">Feel your jaw: from <ipa>ɪ</ipa> to <ipa>e</ipa> to <ipa>æ</ipa>, your mouth opens more and more. Put a finger on your chin and say <s-en>bit, bet, bat</s-en>.</div>`,
  body_fr: `<p>L'anglais a six <b>voyelles brèves</b>. Elles sont rapides et détendues, et en général suivies d'une consonne. La plupart n'existent pas en français : les francophones les remplacent par la voyelle française la plus proche… et le mot change.</p>
<ul>
<li><ipa>ɪ</ipa> <s-en>sit</s-en>, <s-en>big</s-en>, <s-en>busy</s-en>, <s-en>women</s-en> : entre le « i » et le « é » français, bref et détendu. Pas le « i » français !</li>
<li><ipa>e</ipa> <s-en>bed</s-en>, <s-en>said</s-en>, <s-en>friend</s-en>, <s-en>bread</s-en> : comme le « è » de « mère », mais plus bref.</li>
<li><ipa>æ</ipa> <s-en>cat</s-en>, <s-en>black</s-en>, <s-en>happy</s-en> : ouvre grand la bouche comme pour « a », mais dis « è ». Mâchoire en bas !</li>
<li><ipa>ʌ</ipa> <s-en>cup</s-en>, <s-en>love</s-en>, <s-en>money</s-en>, <s-en>young</s-en> : un « a » bref et central, un peu comme un « eu » rapide, lèvres détendues (pas arrondies).</li>
<li><ipa>ɒ</ipa> <s-en>hot</s-en>, <s-en>dog</s-en>, <s-en>what</s-en>, <s-en>want</s-en> : comme le « o » de « porte », bref, bouche ouverte. (En américain il est plus ouvert, proche de « a » : hot ≈ « haht ».)</li>
<li><ipa>ʊ</ipa> <s-en>book</s-en>, <s-en>good</s-en>, <s-en>put</s-en>, <s-en>could</s-en> : un « ou » bref et détendu, lèvres à peine arrondies.</li>
</ul>
<div class="warn">Les trois confusions les plus fréquentes : <s-en>cat</s-en> / <s-en>cut</s-en> (<ipa>æ</ipa> / <ipa>ʌ</ipa>), <s-en>bed</s-en> / <s-en>bad</s-en> (<ipa>e</ipa> / <ipa>æ</ipa>), et <s-en>hut</s-en> / <s-en>hot</s-en> (<ipa>ʌ</ipa> / <ipa>ɒ</ipa>). L'orthographe ne t'aidera pas : <s-en>love</s-en>, <s-en>come</s-en> et <s-en>money</s-en> s'écrivent avec o mais se prononcent <ipa>ʌ</ipa>.</div>
<div class="tip">Sens ta mâchoire : de <ipa>ɪ</ipa> à <ipa>e</ipa> puis <ipa>æ</ipa>, ta bouche s'ouvre de plus en plus. Pose un doigt sur ton menton et dis <s-en>bit, bet, bat</s-en>.</div>`,
  words: [["sit", "sɪt", "s'asseoir"], ["big", "bɪɡ", "grand"], ["women", "ˈwɪmɪn", "femmes"], ["bed", "bed", "lit"], ["said", "sed", "a dit"], ["friend", "frend", "ami"], ["cat", "kæt", "chat"], ["black", "blæk", "noir"], ["cup", "kʌp", "tasse"], ["love", "lʌv", "amour"], ["money", "ˈmʌni", "argent"], ["hot", "hɒt", "chaud"], ["want", "wɒnt", "vouloir"], ["book", "bʊk", "livre"], ["good", "ɡʊd", "bon"], ["could", "kʊd", "pourrait"]],
  pairs: [["bed", "bad"], ["cat", "cut"], ["hut", "hot"], ["men", "man"], ["cap", "cup"], ["luck", "lock"], ["pen", "pan"], ["bag", "bug"]],
  practice: [["The black cat is in the bag.", "Le chat noir est dans le sac."], ["My friend said the bed was good.", "Mon ami a dit que le lit était bien."], ["Come and have a cup of hot coffee.", "Viens prendre une tasse de café chaud."], ["I want to put the book back.", "Je veux remettre le livre à sa place."]],
  quiz: [
    { q: "Which word has the same vowel as “cup” /ʌ/?", q_fr: "Quel mot a la même voyelle que « cup » /ʌ/ ?", o: ["love", "hot", "cap"], a: 0, ex: "love /lʌv/: written with o, pronounced /ʌ/.", ex_fr: "love /lʌv/ : écrit avec o, prononcé /ʌ/." },
    { q: "Which word has /æ/, as in “cat”?", q_fr: "Quel mot contient /æ/, comme « cat » ?", o: ["black", "bed", "cut"], a: 0 },
    { q: "Which word does NOT have the vowel /e/?", q_fr: "Quel mot n'a PAS la voyelle /e/ ?", o: ["bad", "bed", "said"], a: 0, ex: "bad /bæd/. bed and said both have /e/.", ex_fr: "bad /bæd/. bed et said ont tous les deux /e/." },
    { q: "Which word has /ɪ/?", q_fr: "Quel mot contient /ɪ/ ?", o: ["busy", "buy", "high"], a: 0, ex: "busy /ˈbɪzi/: the u is pronounced /ɪ/! buy and high have /aɪ/.", ex_fr: "busy /ˈbɪzi/ : le u se prononce /ɪ/ ! buy et high ont /aɪ/." },
    { q: "/ʊ/ is the vowel in…", q_fr: "/ʊ/ est la voyelle de…", o: ["book", "boot", "bus"], a: 0, ex: "book /bʊk/ is short. boot /buːt/ is long, bus /bʌs/ has /ʌ/.", ex_fr: "book /bʊk/ est bref. boot /buːt/ est long, bus /bʌs/ a /ʌ/." },
    { q: "In “what” and “want” (British English), the a sounds like…", q_fr: "Dans « what » et « want » (britannique), le a se prononce…", o: ["/ɒ/, as in hot", "/æ/, as in cat", "/eɪ/, as in day"], a: 0 },
    { q: "To say /æ/ (cat), you…", q_fr: "Pour dire /æ/ (cat), tu…", o: ["open your jaw wide and say « è »", "round your lips as for « ou »", "say a long « a »"], a: 0 }
  ] },

{ id: "p-long", level: "A1", icon: "hourglass", ipa: "/iː ɑː ɔː uː ɜː/", units: ["a1-5"],
  title: "Long vowels", title_fr: "Les voyelles longues",
  subtitle: "see, car, door, food, bird", subtitle_fr: "see, car, door, food, bird",
  body: `<p>The two dots <ipa>ː</ipa> mean <b>long</b>. Long vowels are held longer and are more tense than short ones. In English, length changes the meaning: <s-en>ship</s-en> <ipa>ʃɪp</ipa> is a boat, <s-en>sheep</s-en> <ipa>ʃiːp</ipa> is an animal.</p>
<ul>
<li><ipa>iː</ipa> <s-en>see</s-en>, <s-en>eat</s-en>, <s-en>people</s-en>, <s-en>key</s-en>: a long French « i », with a smile. Compare <s-en>live</s-en> / <s-en>leave</s-en>, <s-en>it</s-en> / <s-en>eat</s-en>.</li>
<li><ipa>ɑː</ipa> <s-en>car</s-en>, <s-en>father</s-en>, <s-en>heart</s-en>, <s-en>half</s-en>: a long, deep « a », from the back of the mouth. Compare <s-en>hut</s-en> / <s-en>heart</s-en>.</li>
<li><ipa>ɔː</ipa> <s-en>door</s-en>, <s-en>walk</s-en>, <s-en>water</s-en>, <s-en>thought</s-en>, <s-en>law</s-en>: a long « o », as in « fort », lips rounded. Compare <s-en>pot</s-en> / <s-en>port</s-en>.</li>
<li><ipa>uː</ipa> <s-en>food</s-en>, <s-en>blue</s-en>, <s-en>shoe</s-en>, <s-en>two</s-en>: a long « ou », lips very rounded. Compare <s-en>full</s-en> / <s-en>fool</s-en>, <s-en>pull</s-en> / <s-en>pool</s-en>.</li>
<li><ipa>ɜː</ipa> <s-en>bird</s-en>, <s-en>work</s-en>, <s-en>learn</s-en>, <s-en>her</s-en>, <s-en>world</s-en>: like « eu » in « peur », but long, lips relaxed and not rounded.</li>
</ul>
<div class="warn"><s-en>work</s-en> <ipa>wɜːk</ipa> (to do a job) and <s-en>walk</s-en> <ipa>wɔːk</ipa> (to go on foot) are the classic French-speaker mix-up. Same for <s-en>shirt</s-en> / <s-en>short</s-en>, <s-en>firm</s-en> / <s-en>form</s-en>, <s-en>word</s-en> / <s-en>ward</s-en>. And the l of walk is silent!</div>
<div class="tip">In British English, the r after a vowel is silent: <s-en>car</s-en> <ipa>kɑː</ipa>, <s-en>bird</s-en> <ipa>bɜːd</ipa>, <s-en>door</s-en> <ipa>dɔː</ipa>. In American English you hear it: <ipa>kɑːr</ipa>, <ipa>bɝːd</ipa>. Both are correct: choose one model and be consistent.</div>`,
  body_fr: `<p>Les deux points <ipa>ː</ipa> signifient <b>long</b>. Les voyelles longues sont tenues plus longtemps et plus tendues que les brèves. En anglais, la durée change le sens : <s-en>ship</s-en> <ipa>ʃɪp</ipa> est un bateau, <s-en>sheep</s-en> <ipa>ʃiːp</ipa> un animal.</p>
<ul>
<li><ipa>iː</ipa> <s-en>see</s-en>, <s-en>eat</s-en>, <s-en>people</s-en>, <s-en>key</s-en> : un « i » français long, en souriant. Compare <s-en>live</s-en> / <s-en>leave</s-en>, <s-en>it</s-en> / <s-en>eat</s-en>.</li>
<li><ipa>ɑː</ipa> <s-en>car</s-en>, <s-en>father</s-en>, <s-en>heart</s-en>, <s-en>half</s-en> : un « a » long et profond, du fond de la bouche. Compare <s-en>hut</s-en> / <s-en>heart</s-en>.</li>
<li><ipa>ɔː</ipa> <s-en>door</s-en>, <s-en>walk</s-en>, <s-en>water</s-en>, <s-en>thought</s-en>, <s-en>law</s-en> : un « o » long, comme dans « fort », lèvres arrondies. Compare <s-en>pot</s-en> / <s-en>port</s-en>.</li>
<li><ipa>uː</ipa> <s-en>food</s-en>, <s-en>blue</s-en>, <s-en>shoe</s-en>, <s-en>two</s-en> : un « ou » long, lèvres bien arrondies. Compare <s-en>full</s-en> / <s-en>fool</s-en>, <s-en>pull</s-en> / <s-en>pool</s-en>.</li>
<li><ipa>ɜː</ipa> <s-en>bird</s-en>, <s-en>work</s-en>, <s-en>learn</s-en>, <s-en>her</s-en>, <s-en>world</s-en> : comme le « eu » de « peur », mais long, lèvres détendues et pas arrondies.</li>
</ul>
<div class="warn"><s-en>work</s-en> <ipa>wɜːk</ipa> (travailler) et <s-en>walk</s-en> <ipa>wɔːk</ipa> (marcher) : la confusion classique des francophones. Pareil pour <s-en>shirt</s-en> / <s-en>short</s-en>, <s-en>firm</s-en> / <s-en>form</s-en>, <s-en>word</s-en> / <s-en>ward</s-en>. Et le l de walk est muet !</div>
<div class="tip">En anglais britannique, le r après une voyelle est muet : <s-en>car</s-en> <ipa>kɑː</ipa>, <s-en>bird</s-en> <ipa>bɜːd</ipa>, <s-en>door</s-en> <ipa>dɔː</ipa>. En américain on l'entend : <ipa>kɑːr</ipa>, <ipa>bɝːd</ipa>. Les deux sont corrects : choisis un modèle et reste cohérente.</div>`,
  words: [["see", "siː", "voir"], ["eat", "iːt", "manger"], ["people", "ˈpiːpəl", "gens"], ["father", "ˈfɑːðə", "père"], ["heart", "hɑːt", "cœur"], ["door", "dɔː", "porte"], ["walk", "wɔːk", "marcher"], ["water", "ˈwɔːtə", "eau"], ["food", "fuːd", "nourriture"], ["blue", "bluː", "bleu"], ["two", "tuː", "deux"], ["bird", "bɜːd", "oiseau"], ["work", "wɜːk", "travailler"], ["learn", "lɜːn", "apprendre"], ["world", "wɜːld", "monde"]],
  pairs: [["ship", "sheep"], ["live", "leave"], ["full", "fool"], ["pull", "pool"], ["work", "walk"], ["shirt", "short"], ["cut", "cart"], ["hut", "heart"], ["firm", "form"], ["it", "eat"]],
  practice: [["Please leave the sheep alone.", "Laisse les moutons tranquilles, s'il te plaît."], ["I walk to work every morning.", "Je vais au travail à pied tous les matins."], ["Her shirt is too short.", "Sa chemise est trop courte."], ["We need food and water for two.", "Il nous faut de la nourriture et de l'eau pour deux."]],
  quiz: [
    { q: "What do the two dots in /iː/ mean?", q_fr: "Que signifient les deux points dans /iː/ ?", o: ["the vowel is long", "the vowel is silent", "the vowel is stressed"], a: 0 },
    { q: "Which one is /wɔːk/?", q_fr: "Lequel se prononce /wɔːk/ ?", o: ["walk", "work", "both"], a: 0, ex: "walk /wɔːk/ = marcher, work /wɜːk/ = travailler. The l of walk is silent.", ex_fr: "walk /wɔːk/ = marcher, work /wɜːk/ = travailler. Le l de walk est muet." },
    { q: "Which word has /ɜː/, as in “bird”?", q_fr: "Quel mot contient /ɜː/, comme « bird » ?", o: ["learn", "lawn", "barn"], a: 0, ex: "learn /lɜːn/, lawn /lɔːn/, barn /bɑːn/.", ex_fr: "learn /lɜːn/, lawn /lɔːn/, barn /bɑːn/." },
    { q: "Which word has /uː/?", q_fr: "Quel mot contient /uː/ ?", o: ["food", "good", "foot"], a: 0, ex: "food /fuːd/ is long. good and foot have the short /ʊ/: same spelling, different sound!", ex_fr: "food /fuːd/ est long. good et foot ont le /ʊ/ bref : même orthographe, son différent !" },
    { q: "Which word has /ɑː/?", q_fr: "Quel mot contient /ɑː/ ?", o: ["heart", "hurt", "hat"], a: 0, ex: "heart /hɑːt/, hurt /hɜːt/, hat /hæt/.", ex_fr: "heart /hɑːt/, hurt /hɜːt/, hat /hæt/." },
    { q: "In British English, the r in “car” and “bird”…", q_fr: "En anglais britannique, le r de « car » et « bird »…", o: ["is silent: it just makes the vowel long", "is rolled", "sounds like the French r"], a: 0 },
    { q: "Which word has /ɔː/?", q_fr: "Quel mot contient /ɔː/ ?", o: ["thought", "though", "through"], a: 0, ex: "thought /θɔːt/, though /ðəʊ/, through /θruː/: -ough is a famous trap.", ex_fr: "thought /θɔːt/, though /ðəʊ/, through /θruː/ : -ough est un piège célèbre." }
  ] },

{ id: "p-h", level: "A1", icon: "wind", ipa: "/h/", units: ["a1-6"],
  title: "H: the breath that changes words", title_fr: "Le H : le souffle qui change les mots",
  subtitle: "house, happy, hour, honest", subtitle_fr: "house, happy, hour, honest",
  body: `<p>In French, h is always silent. In English, it's a real sound: a short <b>breath</b> from the throat, as when you fog up a mirror. <s-en>hello</s-en>, <s-en>house</s-en>, <s-en>happy</s-en>, <s-en>who</s-en> <ipa>huː</ipa>, <s-en>behind</s-en>.</p>
<div class="warn">Two French-speaker habits: <b>dropping</b> the h (“I ate it” for <s-en>I hate it</s-en>), and <b>adding</b> one before a stressed vowel when you concentrate (“I ham hungry”). Both change words: <s-en>hair</s-en> / <s-en>air</s-en>, <s-en>heat</s-en> / <s-en>eat</s-en>, <s-en>hold</s-en> / <s-en>old</s-en>, <s-en>harm</s-en> / <s-en>arm</s-en>, <s-en>hear</s-en> / <s-en>ear</s-en>.</div>
<h3>The silent h</h3>
<p>A few words keep a silent h, because they came from French: <s-en>hour</s-en> <ipa>aʊə</ipa>, <s-en>honest</s-en>, <s-en>honour</s-en>, <s-en>heir</s-en>. That's why we say <b>an</b> hour, <b>an</b> honest man. (So <s-en>hour</s-en> and <s-en>our</s-en> sound the same.) The h is also silent after w in most accents (<s-en>what</s-en>, <s-en>why</s-en>), and in <s-en>vehicle</s-en>, <s-en>exhausted</s-en>, <s-en>ghost</s-en>.</p>
<h3>The weak h of little words</h3>
<p>In unstressed pronouns and auxiliaries (he, him, his, her, have, has, had), natives often drop the h in the middle of a sentence: <s-en>Tell him</s-en> sounds like « tell-im ». You'll see this in the chapter on fast speech. At the start of a sentence, always pronounce it.</p>
<div class="tip">Hold your hand in front of your mouth. For <s-en>hat</s-en> you feel warm air; for <s-en>at</s-en>, nothing.</div>`,
  body_fr: `<p>En français, le h est toujours muet. En anglais, c'est un vrai son : un petit <b>souffle</b> venu de la gorge, comme pour faire de la buée sur un miroir. <s-en>hello</s-en>, <s-en>house</s-en>, <s-en>happy</s-en>, <s-en>who</s-en> <ipa>huː</ipa>, <s-en>behind</s-en>.</p>
<div class="warn">Deux habitudes francophones : <b>oublier</b> le h (« I ate it » pour <s-en>I hate it</s-en>), et en <b>ajouter</b> un devant une voyelle accentuée quand on se concentre (« I ham hungry »). Les deux changent les mots : <s-en>hair</s-en> / <s-en>air</s-en>, <s-en>heat</s-en> / <s-en>eat</s-en>, <s-en>hold</s-en> / <s-en>old</s-en>, <s-en>harm</s-en> / <s-en>arm</s-en>, <s-en>hear</s-en> / <s-en>ear</s-en>.</div>
<h3>Le h muet</h3>
<p>Quelques mots gardent un h muet, parce qu'ils viennent du français : <s-en>hour</s-en> <ipa>aʊə</ipa>, <s-en>honest</s-en>, <s-en>honour</s-en>, <s-en>heir</s-en>. C'est pour ça qu'on dit <b>an</b> hour, <b>an</b> honest man. (Du coup, <s-en>hour</s-en> et <s-en>our</s-en> se prononcent pareil.) Le h est aussi muet après w dans la plupart des accents (<s-en>what</s-en>, <s-en>why</s-en>), et dans <s-en>vehicle</s-en>, <s-en>exhausted</s-en>, <s-en>ghost</s-en>.</p>
<h3>Le h faible des petits mots</h3>
<p>Dans les pronoms et auxiliaires non accentués (he, him, his, her, have, has, had), les natifs laissent souvent tomber le h au milieu d'une phrase : <s-en>Tell him</s-en> se dit « tell-im ». Tu le verras dans le chapitre sur l'anglais rapide. En début de phrase, prononce-le toujours.</p>
<div class="tip">Mets ta main devant ta bouche. Pour <s-en>hat</s-en> tu sens de l'air chaud ; pour <s-en>at</s-en>, rien.</div>`,
  words: [["hello", "həˈləʊ", "bonjour"], ["house", "haʊs", "maison"], ["happy", "ˈhæpi", "heureux"], ["who", "huː", "qui"], ["behind", "bɪˈhaɪnd", "derrière"], ["hungry", "ˈhʌŋɡri", "affamé"], ["perhaps", "pəˈhæps", "peut-être"], ["hour", "aʊə", "heure"], ["honest", "ˈɒnɪst", "honnête"], ["heir", "eə", "héritier"], ["vehicle", "ˈviːəkəl", "véhicule"], ["exhausted", "ɪɡˈzɔːstɪd", "épuisé"], ["ghost", "ɡəʊst", "fantôme"], ["what", "wɒt", "quoi"]],
  pairs: [["hair", "air"], ["heat", "eat"], ["hold", "old"], ["harm", "arm"], ["hear", "ear"], ["hate", "ate"], ["hill", "ill"], ["heart", "art"]],
  practice: [["Hello, how are you?", "Salut, comment ça va ?"], ["I'm hungry, and he's very happy.", "J'ai faim, et il est très heureux."], ["Hold my hand for an hour.", "Tiens-moi la main pendant une heure."], ["Harry has a house on a hill.", "Harry a une maison sur une colline."]],
  quiz: [
    { q: "In English, the h at the start of “house”…", q_fr: "En anglais, le h au début de « house »…", o: ["is pronounced: a breath from the throat", "is silent, as in French", "sounds like « r »"], a: 0 },
    { q: "Which word has a silent h?", q_fr: "Quel mot a un h muet ?", o: ["hour", "house", "hungry"], a: 0 },
    { q: "Why do we say “an hour” but “a house”?", q_fr: "Pourquoi dit-on « an hour » mais « a house » ?", o: ["hour starts with a vowel sound /aʊ/", "hour is plural", "there's no reason"], a: 0 },
    { q: "“I hate it” without the h sounds like…", q_fr: "« I hate it » sans le h ressemble à…", o: ["I ate it", "I heat it", "I hit it"], a: 0 },
    { q: "Which word has a silent h?", q_fr: "Quel mot a un h muet ?", o: ["honest", "hello", "behind"], a: 0 },
    { q: "“hour” and “our” are…", q_fr: "« hour » et « our » sont…", o: ["pronounced the same", "different: hour has an h sound", "different: our has an r sound"], a: 0, ex: "Both /aʊə/: the h of hour is silent.", ex_fr: "Les deux se disent /aʊə/ : le h de hour est muet." },
    { q: "What are the two classic French-speaker mistakes with h?", q_fr: "Quelles sont les deux erreurs classiques des francophones avec le h ?", o: ["dropping it, and adding it where there isn't one", "saying it too softly at the end of words", "pronouncing it like « k »"], a: 0 }
  ] },

{ id: "p-schwa", level: "A1", icon: "feather", ipa: "/ə/", units: ["a1-7"],
  title: "The schwa /ə/: the secret of natural English", title_fr: "Le schwa /ə/ : le secret d'un anglais naturel",
  subtitle: "The most common sound in English", subtitle_fr: "Le son le plus fréquent de l'anglais",
  body: `<p>The most common sound in English isn't a letter: it's <ipa>ə</ipa>, the <b>schwa</b>. A short, lazy, relaxed sound, mouth half open, like a quick French « e » in « le », even weaker. It only appears in <b>unstressed syllables</b>, and any vowel letter can make it:</p>
<ul>
<li>a: <s-en>about</s-en> <ipa>əˈbaʊt</ipa>, <s-en>banana</s-en> <ipa>bəˈnɑːnə</ipa></li>
<li>e: <s-en>problem</s-en> <ipa>ˈprɒbləm</ipa>, <s-en>the</s-en> <ipa>ðə</ipa></li>
<li>o: <s-en>today</s-en> <ipa>təˈdeɪ</ipa>, <s-en>doctor</s-en> <ipa>ˈdɒktə</ipa></li>
<li>u: <s-en>support</s-en> <ipa>səˈpɔːt</ipa>, <s-en>autumn</s-en> <ipa>ˈɔːtəm</ipa></li>
<li>-er, -or, -ure at the end (British): <s-en>teacher</s-en> <ipa>ˈtiːtʃə</ipa>, <s-en>picture</s-en> <ipa>ˈpɪktʃə</ipa></li>
</ul>
<div class="warn">French speakers pronounce every vowel fully, as written: « ba-na-na », « to-day ». To an English ear, every syllable then sounds stressed, and the word is harder to recognise. Reducing the weak syllables is what makes the strong one stand out.</div>
<h3>Strong and weak work together</h3>
<p>Compare <s-en>photograph</s-en> <ipa>ˈfəʊtəɡrɑːf</ipa> and <s-en>photographer</s-en> <ipa>fəˈtɒɡrəfə</ipa>: the same letter o is <ipa>əʊ</ipa> when stressed and <ipa>ə</ipa> when not.</p>
<div class="tip">Some weak syllables use a short <ipa>ɪ</ipa> instead (<s-en>village</s-en> <ipa>ˈvɪlɪdʒ</ipa>, <s-en>wanted</s-en> <ipa>ˈwɒntɪd</ipa>), and in American English, schwa + r becomes <ipa>ɚ</ipa> (<s-en>teacher</s-en> <ipa>ˈtiːtʃɚ</ipa>). The principle is the same: weak syllables are short and relaxed.</div>`,
  body_fr: `<p>Le son le plus fréquent de l'anglais n'est pas une lettre : c'est <ipa>ə</ipa>, le <b>schwa</b>. Un son bref, paresseux, détendu, bouche entrouverte, comme un « e » rapide de « le », en encore plus faible. Il n'apparaît que dans les <b>syllabes non accentuées</b>, et n'importe quelle voyelle écrite peut le produire :</p>
<ul>
<li>a : <s-en>about</s-en> <ipa>əˈbaʊt</ipa>, <s-en>banana</s-en> <ipa>bəˈnɑːnə</ipa></li>
<li>e : <s-en>problem</s-en> <ipa>ˈprɒbləm</ipa>, <s-en>the</s-en> <ipa>ðə</ipa></li>
<li>o : <s-en>today</s-en> <ipa>təˈdeɪ</ipa>, <s-en>doctor</s-en> <ipa>ˈdɒktə</ipa></li>
<li>u : <s-en>support</s-en> <ipa>səˈpɔːt</ipa>, <s-en>autumn</s-en> <ipa>ˈɔːtəm</ipa></li>
<li>-er, -or, -ure en fin de mot (britannique) : <s-en>teacher</s-en> <ipa>ˈtiːtʃə</ipa>, <s-en>picture</s-en> <ipa>ˈpɪktʃə</ipa></li>
</ul>
<div class="warn">Les francophones prononcent chaque voyelle en entier, comme elle s'écrit : « ba-na-na », « to-day ». Pour une oreille anglaise, toutes les syllabes semblent alors accentuées, et le mot est plus difficile à reconnaître. C'est en réduisant les syllabes faibles que la forte ressort.</div>
<h3>Le fort et le faible vont ensemble</h3>
<p>Compare <s-en>photograph</s-en> <ipa>ˈfəʊtəɡrɑːf</ipa> et <s-en>photographer</s-en> <ipa>fəˈtɒɡrəfə</ipa> : la même lettre o se dit <ipa>əʊ</ipa> quand elle est accentuée et <ipa>ə</ipa> quand elle ne l'est pas.</p>
<div class="tip">Certaines syllabes faibles utilisent plutôt un <ipa>ɪ</ipa> bref (<s-en>village</s-en> <ipa>ˈvɪlɪdʒ</ipa>, <s-en>wanted</s-en> <ipa>ˈwɒntɪd</ipa>), et en américain, schwa + r devient <ipa>ɚ</ipa> (<s-en>teacher</s-en> <ipa>ˈtiːtʃɚ</ipa>). Le principe reste le même : les syllabes faibles sont brèves et détendues.</div>`,
  words: [["about", "əˈbaʊt", "à propos de"], ["banana", "bəˈnɑːnə", "banane"], ["problem", "ˈprɒbləm", "problème"], ["today", "təˈdeɪ", "aujourd'hui"], ["doctor", "ˈdɒktə", "médecin"], ["support", "səˈpɔːt", "soutenir"], ["teacher", "ˈtiːtʃə", "professeur"], ["picture", "ˈpɪktʃə", "image"], ["famous", "ˈfeɪməs", "célèbre"], ["London", "ˈlʌndən", "Londres"], ["Saturday", "ˈsætədeɪ", "samedi"], ["police", "pəˈliːs", "police"], ["computer", "kəmˈpjuːtə", "ordinateur"], ["again", "əˈɡen", "encore"]],
  stress: [["banana", "ba|na|na", 1], ["today", "to|day", 1], ["computer", "com|pu|ter", 1], ["doctor", "doc|tor", 0], ["police", "po|lice", 1], ["Saturday", "Sat|ur|day", 0], ["again", "a|gain", 1], ["famous", "fa|mous", 0]],
  practice: [["The doctor came back today.", "Le médecin est revenu aujourd'hui."], ["A banana and a cup of tea.", "Une banane et une tasse de thé."], ["What's the problem with the computer?", "Quel est le problème avec l'ordinateur ?"], ["We went to London on Saturday.", "Nous sommes allés à Londres samedi."]],
  quiz: [
    { q: "The schwa /ə/ is…", q_fr: "Le schwa /ə/ est…", o: ["the most common sound in English", "a sound used only in British English", "a letter of the alphabet"], a: 0 },
    { q: "The schwa appears only in…", q_fr: "Le schwa n'apparaît que dans…", o: ["unstressed syllables", "stressed syllables", "the first syllable of a word"], a: 0 },
    { q: "How many schwas are there in “banana” /bəˈnɑːnə/?", q_fr: "Combien de schwas dans « banana » /bəˈnɑːnə/ ?", o: ["two", "one", "three"], a: 0, ex: "/bə-ˈnɑː-nə/: the first and last a are schwas; only the middle one is a full /ɑː/.", ex_fr: "/bə-ˈnɑː-nə/ : le premier et le dernier a sont des schwas ; seul celui du milieu est un vrai /ɑː/." },
    { q: "In “today”, the o is pronounced…", q_fr: "Dans « today », le o se prononce…", o: ["/ə/, very short", "/ɒ/, as in hot", "/əʊ/, as in go"], a: 0 },
    { q: "Where is the schwa in “doctor”?", q_fr: "Où est le schwa dans « doctor » ?", o: ["in -or: /ˈdɒktə/", "in do-: /ˈdəktɒ/", "there's no schwa"], a: 0 },
    { q: "Which letters can make a schwa?", q_fr: "Quelles lettres peuvent faire un schwa ?", o: ["any vowel letter", "only e", "only a and o"], a: 0 },
    { q: "Why does pronouncing every vowel fully sound strange in English?", q_fr: "Pourquoi prononcer chaque voyelle en entier sonne-t-il bizarre en anglais ?", o: ["every syllable sounds stressed, so the word is harder to recognise", "it's too fast", "it sounds too British"], a: 0 },
    { q: "Which word starts with a schwa?", q_fr: "Quel mot commence par un schwa ?", o: ["again", "apple", "able"], a: 0, ex: "again /əˈɡen/; apple /ˈæpəl/; able /ˈeɪbəl/.", ex_fr: "again /əˈɡen/ ; apple /ˈæpəl/ ; able /ˈeɪbəl/." }
  ] },

/* ============================== A2 ============================== */
{ id: "p-endings", level: "A2", icon: "list-checks", ipa: "/s z ɪz/ /t d ɪd/", units: ["a2-1"],
  title: "Endings: -s and -ed", title_fr: "Les terminaisons -s et -ed",
  subtitle: "worked, wanted, played · cats, dogs, buses", subtitle_fr: "worked, wanted, played · cats, dogs, buses",
  body: `<p>Two endings appear in almost every sentence: <b>-s</b> (plurals, he/she/it, the possessive 's) and <b>-ed</b> (the past). Each has <b>three</b> pronunciations, and the rule depends on the last <b>sound</b> of the word, not its last letter.</p>
<h3>-s: /s/, /z/ or /ɪz/</h3>
<ul>
<li><ipa>ɪz</ipa>, an extra syllable, after hissing sounds <ipa>s z ʃ ʒ tʃ dʒ</ipa>: <s-en>buses</s-en>, <s-en>washes</s-en>, <s-en>watches</s-en>, <s-en>pages</s-en>.</li>
<li><ipa>s</ipa> after voiceless sounds <ipa>p t k f θ</ipa>: <s-en>cups</s-en>, <s-en>cats</s-en>, <s-en>works</s-en>, <s-en>laughs</s-en>, <s-en>months</s-en>.</li>
<li><ipa>z</ipa> after all other sounds (voiced consonants and vowels): <s-en>dogs</s-en>, <s-en>lives</s-en>, <s-en>plays</s-en>, <s-en>goes</s-en>, <s-en>friends</s-en>.</li>
</ul>
<h3>-ed: /t/, /d/ or /ɪd/</h3>
<ul>
<li><ipa>ɪd</ipa>, an extra syllable, only after <ipa>t</ipa> or <ipa>d</ipa>: <s-en>wanted</s-en>, <s-en>needed</s-en>, <s-en>started</s-en>, <s-en>decided</s-en>.</li>
<li><ipa>t</ipa> after voiceless sounds <ipa>p k f s ʃ tʃ θ</ipa>: <s-en>stopped</s-en>, <s-en>worked</s-en>, <s-en>laughed</s-en>, <s-en>missed</s-en>, <s-en>washed</s-en>, <s-en>watched</s-en>.</li>
<li><ipa>d</ipa> after all other sounds: <s-en>played</s-en>, <s-en>lived</s-en>, <s-en>called</s-en>, <s-en>opened</s-en>, <s-en>arrived</s-en>.</li>
</ul>
<div class="warn">The big mistake: adding a syllable to every -ed. <s-en>worked</s-en> is ONE syllable <ipa>wɜːkt</ipa>, not “work-ed”. <s-en>asked</s-en> <ipa>ɑːskt</ipa>, <s-en>looked</s-en> <ipa>lʊkt</ipa>, <s-en>liked</s-en> <ipa>laɪkt</ipa>: one syllable each.</div>
<div class="tip">Don't drop the ending either: without it, the listener hears a present or a singular. Make the final <ipa>t</ipa>, <ipa>d</ipa>, <ipa>s</ipa> or <ipa>z</ipa> short but audible. A few adjectives keep <ipa>ɪd</ipa>: <s-en>naked</s-en>, <s-en>wicked</s-en>, <s-en>beloved</s-en>.</div>`,
  body_fr: `<p>Deux terminaisons apparaissent dans presque chaque phrase : <b>-s</b> (pluriels, he/she/it, le possessif 's) et <b>-ed</b> (le passé). Chacune a <b>trois</b> prononciations, et la règle dépend du dernier <b>son</b> du mot, pas de sa dernière lettre.</p>
<h3>-s : /s/, /z/ ou /ɪz/</h3>
<ul>
<li><ipa>ɪz</ipa>, une syllabe en plus, après les sons sifflants <ipa>s z ʃ ʒ tʃ dʒ</ipa> : <s-en>buses</s-en>, <s-en>washes</s-en>, <s-en>watches</s-en>, <s-en>pages</s-en>.</li>
<li><ipa>s</ipa> après les sons sourds <ipa>p t k f θ</ipa> : <s-en>cups</s-en>, <s-en>cats</s-en>, <s-en>works</s-en>, <s-en>laughs</s-en>, <s-en>months</s-en>.</li>
<li><ipa>z</ipa> après tous les autres sons (consonnes sonores et voyelles) : <s-en>dogs</s-en>, <s-en>lives</s-en>, <s-en>plays</s-en>, <s-en>goes</s-en>, <s-en>friends</s-en>.</li>
</ul>
<h3>-ed : /t/, /d/ ou /ɪd/</h3>
<ul>
<li><ipa>ɪd</ipa>, une syllabe en plus, seulement après <ipa>t</ipa> ou <ipa>d</ipa> : <s-en>wanted</s-en>, <s-en>needed</s-en>, <s-en>started</s-en>, <s-en>decided</s-en>.</li>
<li><ipa>t</ipa> après les sons sourds <ipa>p k f s ʃ tʃ θ</ipa> : <s-en>stopped</s-en>, <s-en>worked</s-en>, <s-en>laughed</s-en>, <s-en>missed</s-en>, <s-en>washed</s-en>, <s-en>watched</s-en>.</li>
<li><ipa>d</ipa> après tous les autres sons : <s-en>played</s-en>, <s-en>lived</s-en>, <s-en>called</s-en>, <s-en>opened</s-en>, <s-en>arrived</s-en>.</li>
</ul>
<div class="warn">La grande erreur : ajouter une syllabe à chaque -ed. <s-en>worked</s-en> fait UNE syllabe <ipa>wɜːkt</ipa>, pas « work-ed ». <s-en>asked</s-en> <ipa>ɑːskt</ipa>, <s-en>looked</s-en> <ipa>lʊkt</ipa>, <s-en>liked</s-en> <ipa>laɪkt</ipa> : une syllabe chacun.</div>
<div class="tip">Ne laisse pas non plus tomber la terminaison : sans elle, on entend un présent ou un singulier. Fais le <ipa>t</ipa>, <ipa>d</ipa>, <ipa>s</ipa> ou <ipa>z</ipa> final bref mais audible. Quelques adjectifs gardent <ipa>ɪd</ipa> : <s-en>naked</s-en>, <s-en>wicked</s-en>, <s-en>beloved</s-en>.</div>`,
  words: [["buses", "ˈbʌsɪz", "bus"], ["watches", "ˈwɒtʃɪz", "montres"], ["cats", "kæts", "chats"], ["months", "mʌnθs", "mois"], ["dogs", "dɒɡz", "chiens"], ["plays", "pleɪz", "joue"], ["wanted", "ˈwɒntɪd", "voulait"], ["needed", "ˈniːdɪd", "avait besoin"], ["worked", "wɜːkt", "a travaillé"], ["asked", "ɑːskt", "a demandé"], ["watched", "wɒtʃt", "a regardé"], ["played", "pleɪd", "a joué"], ["lived", "lɪvd", "a vécu"], ["called", "kɔːld", "a appelé"], ["naked", "ˈneɪkɪd", "nu"]],
  practice: [["I worked late and watched a film.", "J'ai travaillé tard et regardé un film."], ["She decided to stay, so we waited.", "Elle a décidé de rester, alors on a attendu."], ["He lives with two cats and three dogs.", "Il vit avec deux chats et trois chiens."], ["She washes the cups and watches the news.", "Elle lave les tasses et regarde les infos."]],
  quiz: [
    { q: "How many syllables does “worked” have?", q_fr: "Combien de syllabes dans « worked » ?", o: ["one: /wɜːkt/", "two: work-ed", "three"], a: 0 },
    { q: "-ed is pronounced /ɪd/ (an extra syllable) only after…", q_fr: "-ed se prononce /ɪd/ (une syllabe en plus) seulement après…", o: ["/t/ or /d/", "all regular verbs", "vowels"], a: 0 },
    { q: "How is -ed pronounced in “stopped”?", q_fr: "Comment se prononce -ed dans « stopped » ?", o: ["/t/", "/d/", "/ɪd/"], a: 0 },
    { q: "How is -ed pronounced in “played”?", q_fr: "Comment se prononce -ed dans « played » ?", o: ["/d/", "/t/", "/ɪd/"], a: 0 },
    { q: "How is -ed pronounced in “decided”?", q_fr: "Comment se prononce -ed dans « decided » ?", o: ["/ɪd/", "/t/", "/d/"], a: 0 },
    { q: "How is -s pronounced in “watches”?", q_fr: "Comment se prononce -s dans « watches » ?", o: ["/ɪz/, an extra syllable", "/s/", "/z/"], a: 0 },
    { q: "How is -s pronounced in “dogs”?", q_fr: "Comment se prononce -s dans « dogs » ?", o: ["/z/", "/s/", "/ɪz/"], a: 0 },
    { q: "How is -s pronounced in “cats”?", q_fr: "Comment se prononce -s dans « cats » ?", o: ["/s/", "/z/", "/ɪz/"], a: 0 },
    { say: "They watched a film.", q: "Listen. Which sentence do you hear?", q_fr: "Écoute. Quelle phrase entends-tu ?", o: ["They watched a film.", "They watch a film."], a: 0, ex: "watched /wɒtʃt/: listen for the short /t/ at the end.", ex_fr: "watched /wɒtʃt/ : écoute le petit /t/ final." },
    { say: "She works in London.", q: "Listen. Which sentence do you hear?", q_fr: "Écoute. Quelle phrase entends-tu ?", o: ["She works in London.", "She worked in London."], a: 0 },
    { q: "The rule depends on…", q_fr: "La règle dépend…", o: ["the last sound of the word, not the last letter", "the last letter of the word", "the number of syllables"], a: 0, ex: "laughed: the last letter is h, but the last sound is /f/, so -ed = /t/.", ex_fr: "laughed : la dernière lettre est h, mais le dernier son est /f/, donc -ed = /t/." }
  ] },

{ id: "p-diph", level: "A2", icon: "spline", ipa: "/eɪ aɪ ɔɪ əʊ aʊ ɪə eə/", units: ["a2-2"],
  title: "Diphthongs: vowels that glide", title_fr: "Les diphtongues : des voyelles qui glissent",
  subtitle: "day, my, boy, go, now, here, hair", subtitle_fr: "day, my, boy, go, now, here, hair",
  body: `<p>A diphthong is <b>two vowels in one</b>: you start on one sound and glide to another, without a break. French has almost none, so French speakers often say a single, “pure” vowel: <s-en>no</s-en> like « nô », <s-en>late</s-en> like « lète ». To an English ear, that can sound like another word.</p>
<ul>
<li><ipa>eɪ</ipa> <s-en>day</s-en>, <s-en>late</s-en>, <s-en>great</s-en>, <s-en>eight</s-en>: « é » gliding to « i ».</li>
<li><ipa>aɪ</ipa> <s-en>my</s-en>, <s-en>time</s-en>, <s-en>buy</s-en>, <s-en>high</s-en>: like « aï ».</li>
<li><ipa>ɔɪ</ipa> <s-en>boy</s-en>, <s-en>noise</s-en>, <s-en>enjoy</s-en>: like « oï ».</li>
<li><ipa>əʊ</ipa> <s-en>go</s-en>, <s-en>no</s-en>, <s-en>home</s-en>, <s-en>know</s-en>, <s-en>road</s-en>: start on a relaxed « eu », glide to « ou ». (American: <ipa>oʊ</ipa>, « o » gliding to « ou ».)</li>
<li><ipa>aʊ</ipa> <s-en>now</s-en>, <s-en>house</s-en>, <s-en>out</s-en>, <s-en>down</s-en>: like « aou ».</li>
<li><ipa>ɪə</ipa> <s-en>here</s-en>, <s-en>near</s-en>, <s-en>idea</s-en>: « i » gliding to a schwa (British).</li>
<li><ipa>eə</ipa> <s-en>where</s-en>, <s-en>hair</s-en>, <s-en>there</s-en>, <s-en>care</s-en>: « è » with a light schwa (today often a long « è »).</li>
<li><ipa>ʊə</ipa> <s-en>tour</s-en>: rare and disappearing; many speakers say <ipa>ɔː</ipa>, as in <s-en>sure</s-en> <ipa>ʃɔː</ipa>.</li>
</ul>
<div class="warn">Pure vowels change words: <s-en>late</s-en> / <s-en>let</s-en>, <s-en>wait</s-en> / <s-en>wet</s-en>, <s-en>coat</s-en> / <s-en>caught</s-en>, <s-en>so</s-en> / <s-en>saw</s-en>, <s-en>road</s-en> / <s-en>rod</s-en>, <s-en>boat</s-en> / <s-en>bought</s-en>. Make the glide clearly, especially in <ipa>eɪ</ipa> and <ipa>əʊ</ipa>.</div>
<div class="tip">Watch your lips in a mirror on <s-en>go</s-en>: they should move during the vowel and end rounded. If nothing moves, it's a French « ô ».</div>`,
  body_fr: `<p>Une diphtongue, c'est <b>deux voyelles en une</b> : on part d'un son et on glisse vers un autre, sans coupure. Le français n'en a presque pas, alors les francophones disent souvent une seule voyelle « pure » : <s-en>no</s-en> comme « nô », <s-en>late</s-en> comme « lète ». Pour une oreille anglaise, ça peut faire un autre mot.</p>
<ul>
<li><ipa>eɪ</ipa> <s-en>day</s-en>, <s-en>late</s-en>, <s-en>great</s-en>, <s-en>eight</s-en> : « é » qui glisse vers « i ».</li>
<li><ipa>aɪ</ipa> <s-en>my</s-en>, <s-en>time</s-en>, <s-en>buy</s-en>, <s-en>high</s-en> : comme « aï ».</li>
<li><ipa>ɔɪ</ipa> <s-en>boy</s-en>, <s-en>noise</s-en>, <s-en>enjoy</s-en> : comme « oï ».</li>
<li><ipa>əʊ</ipa> <s-en>go</s-en>, <s-en>no</s-en>, <s-en>home</s-en>, <s-en>know</s-en>, <s-en>road</s-en> : pars d'un « eu » détendu et glisse vers « ou ». (Américain : <ipa>oʊ</ipa>, « o » qui glisse vers « ou ».)</li>
<li><ipa>aʊ</ipa> <s-en>now</s-en>, <s-en>house</s-en>, <s-en>out</s-en>, <s-en>down</s-en> : comme « aou ».</li>
<li><ipa>ɪə</ipa> <s-en>here</s-en>, <s-en>near</s-en>, <s-en>idea</s-en> : « i » qui glisse vers un schwa (britannique).</li>
<li><ipa>eə</ipa> <s-en>where</s-en>, <s-en>hair</s-en>, <s-en>there</s-en>, <s-en>care</s-en> : « è » avec un léger schwa (aujourd'hui souvent un « è » long).</li>
<li><ipa>ʊə</ipa> <s-en>tour</s-en> : rare et en train de disparaître ; beaucoup disent <ipa>ɔː</ipa>, comme dans <s-en>sure</s-en> <ipa>ʃɔː</ipa>.</li>
</ul>
<div class="warn">Les voyelles pures changent les mots : <s-en>late</s-en> / <s-en>let</s-en>, <s-en>wait</s-en> / <s-en>wet</s-en>, <s-en>coat</s-en> / <s-en>caught</s-en>, <s-en>so</s-en> / <s-en>saw</s-en>, <s-en>road</s-en> / <s-en>rod</s-en>, <s-en>boat</s-en> / <s-en>bought</s-en>. Fais bien le glissement, surtout dans <ipa>eɪ</ipa> et <ipa>əʊ</ipa>.</div>
<div class="tip">Regarde tes lèvres dans un miroir sur <s-en>go</s-en> : elles doivent bouger pendant la voyelle et finir arrondies. Si rien ne bouge, c'est un « ô » français.</div>`,
  words: [["day", "deɪ", "jour"], ["great", "ɡreɪt", "génial"], ["eight", "eɪt", "huit"], ["time", "taɪm", "temps"], ["buy", "baɪ", "acheter"], ["boy", "bɔɪ", "garçon"], ["noise", "nɔɪz", "bruit"], ["go", "ɡəʊ", "aller"], ["know", "nəʊ", "savoir"], ["road", "rəʊd", "route"], ["now", "naʊ", "maintenant"], ["house", "haʊs", "maison"], ["here", "hɪə", "ici"], ["idea", "aɪˈdɪə", "idée"], ["where", "weə", "où"], ["hair", "heə", "cheveux"]],
  pairs: [["late", "let"], ["wait", "wet"], ["coat", "caught"], ["so", "saw"], ["road", "rod"], ["boat", "bought"], ["hole", "hall"], ["sail", "sell"], ["pain", "pen"]],
  practice: [["Wait for me, I'm late!", "Attends-moi, je suis en retard !"], ["Don't go home alone.", "Ne rentre pas seule."], ["The boy enjoys the noise.", "Le garçon aime le bruit."], ["Where's your house? Is it near here?", "Où est ta maison ? C'est près d'ici ?"]],
  quiz: [
    { q: "A diphthong is…", q_fr: "Une diphtongue, c'est…", o: ["two vowel sounds gliding into each other", "a long vowel", "a silent vowel"], a: 0 },
    { q: "Which word has /eɪ/?", q_fr: "Quel mot contient /eɪ/ ?", o: ["great", "greet", "get"], a: 0, ex: "great /ɡreɪt/ (ea = /eɪ/ here, an exception), greet /ɡriːt/, get /ɡet/.", ex_fr: "great /ɡreɪt/ (ici ea = /eɪ/, une exception), greet /ɡriːt/, get /ɡet/." },
    { q: "Which word has /əʊ/?", q_fr: "Quel mot contient /əʊ/ ?", o: ["road", "rod", "rude"], a: 0 },
    { q: "If you say “late” with a pure « è », the listener may hear…", q_fr: "Si tu dis « late » avec un « è » pur, on peut entendre…", o: ["let", "light", "lot"], a: 0 },
    { q: "Which word has /aʊ/?", q_fr: "Quel mot contient /aʊ/ ?", o: ["down", "dawn", "done"], a: 0, ex: "down /daʊn/, dawn /dɔːn/, done /dʌn/.", ex_fr: "down /daʊn/, dawn /dɔːn/, done /dʌn/." },
    { q: "Which word has /ɪə/ in British English?", q_fr: "Quel mot contient /ɪə/ en britannique ?", o: ["here", "hair", "hire"], a: 0, ex: "here /hɪə/, hair /heə/, hire /haɪə/.", ex_fr: "here /hɪə/, hair /heə/, hire /haɪə/." },
    { q: "“boy”, “noise” and “enjoy” share the sound…", q_fr: "« boy », « noise » et « enjoy » ont en commun le son…", o: ["/ɔɪ/", "/aɪ/", "/əʊ/"], a: 0 }
  ] },

{ id: "p-rwl", level: "A2", icon: "waves", ipa: "/r w l ŋ/", units: ["a2-3"],
  title: "R, W, L and NG", title_fr: "R, W, L et NG",
  subtitle: "red, wine, milk, sing", subtitle_fr: "red, wine, milk, sing",
  body: `<h3>The English r <ipa>r</ipa></h3>
<p>Nothing like the French r from the throat. The tongue curls back slightly <b>without touching anything</b>, lips a little rounded: <s-en>red</s-en>, <s-en>right</s-en>, <s-en>very</s-en>, <s-en>sorry</s-en>, <s-en>three</s-en>. In British English, r is only pronounced <b>before a vowel</b>: <s-en>car</s-en> <ipa>kɑː</ipa>, <s-en>card</s-en> <ipa>kɑːd</ipa>, but <s-en>carry</s-en> <ipa>ˈkæri</ipa>. In American English, every r is pronounced.</p>
<h3>w <ipa>w</ipa> and v <ipa>v</ipa></h3>
<p><ipa>w</ipa> is a very quick « ou », as at the start of « oui »: lips round, no teeth. <ipa>v</ipa> uses the top teeth on the bottom lip, as in French. Don't mix them up: <s-en>wine</s-en> / <s-en>vine</s-en>, <s-en>west</s-en> / <s-en>vest</s-en>, <s-en>wet</s-en> / <s-en>vet</s-en>. And watch out: <s-en>one</s-en> <ipa>wʌn</ipa> and <s-en>once</s-en> <ipa>wʌns</ipa> start with <ipa>w</ipa>!</p>
<h3>Two kinds of l</h3>
<p>Before a vowel, the l is “clear”, as in French: <s-en>light</s-en>, <s-en>hello</s-en>. At the end of a word or before a consonant, it's “dark”: the back of the tongue rises, and it sounds a little like « ou »: <s-en>milk</s-en>, <s-en>feel</s-en>, <s-en>ball</s-en>, <s-en>people</s-en>. Silent l: <s-en>walk</s-en>, <s-en>talk</s-en>, <s-en>half</s-en>, <s-en>calm</s-en>, <s-en>could</s-en>, <s-en>would</s-en>, <s-en>should</s-en>.</p>
<h3>ng <ipa>ŋ</ipa></h3>
<p>One single sound, made at the back of the mouth, like the end of « parking » but with no g after it: <s-en>sing</s-en> <ipa>sɪŋ</ipa>, <s-en>thing</s-en>, <s-en>morning</s-en>, <s-en>long</s-en>. Don't add a g (« sing-gue »), and don't drop it (<s-en>thin</s-en> ≠ <s-en>thing</s-en>). You do hear <ipa>ŋɡ</ipa> in <s-en>finger</s-en>, <s-en>English</s-en>, <s-en>hungry</s-en>, <s-en>longer</s-en>, but not in <s-en>singer</s-en>. Before k: <s-en>think</s-en> <ipa>θɪŋk</ipa>, <s-en>bank</s-en> <ipa>bæŋk</ipa>.</p>`,
  body_fr: `<h3>Le r anglais <ipa>r</ipa></h3>
<p>Rien à voir avec le r français de la gorge. La langue se recourbe légèrement vers l'arrière <b>sans rien toucher</b>, lèvres un peu arrondies : <s-en>red</s-en>, <s-en>right</s-en>, <s-en>very</s-en>, <s-en>sorry</s-en>, <s-en>three</s-en>. En britannique, le r ne se prononce que <b>devant une voyelle</b> : <s-en>car</s-en> <ipa>kɑː</ipa>, <s-en>card</s-en> <ipa>kɑːd</ipa>, mais <s-en>carry</s-en> <ipa>ˈkæri</ipa>. En américain, tous les r se prononcent.</p>
<h3>w <ipa>w</ipa> et v <ipa>v</ipa></h3>
<p><ipa>w</ipa> est un « ou » très rapide, comme au début de « oui » : lèvres rondes, pas de dents. <ipa>v</ipa> met les dents du haut sur la lèvre du bas, comme en français. Ne les mélange pas : <s-en>wine</s-en> / <s-en>vine</s-en>, <s-en>west</s-en> / <s-en>vest</s-en>, <s-en>wet</s-en> / <s-en>vet</s-en>. Et attention : <s-en>one</s-en> <ipa>wʌn</ipa> et <s-en>once</s-en> <ipa>wʌns</ipa> commencent par <ipa>w</ipa> !</p>
<h3>Deux sortes de l</h3>
<p>Devant une voyelle, le l est « clair », comme en français : <s-en>light</s-en>, <s-en>hello</s-en>. En fin de mot ou devant une consonne, il est « sombre » : l'arrière de la langue se lève, et il ressemble un peu à « ou » : <s-en>milk</s-en>, <s-en>feel</s-en>, <s-en>ball</s-en>, <s-en>people</s-en>. L muet : <s-en>walk</s-en>, <s-en>talk</s-en>, <s-en>half</s-en>, <s-en>calm</s-en>, <s-en>could</s-en>, <s-en>would</s-en>, <s-en>should</s-en>.</p>
<h3>ng <ipa>ŋ</ipa></h3>
<p>Un seul son, fait au fond de la bouche, comme la fin de « parking » mais sans g derrière : <s-en>sing</s-en> <ipa>sɪŋ</ipa>, <s-en>thing</s-en>, <s-en>morning</s-en>, <s-en>long</s-en>. N'ajoute pas de g (« sing-gue »), et ne le laisse pas tomber (<s-en>thin</s-en> ≠ <s-en>thing</s-en>). On entend bien <ipa>ŋɡ</ipa> dans <s-en>finger</s-en>, <s-en>English</s-en>, <s-en>hungry</s-en>, <s-en>longer</s-en>, mais pas dans <s-en>singer</s-en>. Devant k : <s-en>think</s-en> <ipa>θɪŋk</ipa>, <s-en>bank</s-en> <ipa>bæŋk</ipa>.</p>`,
  words: [["red", "red", "rouge"], ["very", "ˈveri", "très"], ["sorry", "ˈsɒri", "désolé"], ["card", "kɑːd", "carte"], ["carry", "ˈkæri", "porter"], ["one", "wʌn", "un"], ["once", "wʌns", "une fois"], ["wine", "waɪn", "vin"], ["milk", "mɪlk", "lait"], ["people", "ˈpiːpəl", "gens"], ["half", "hɑːf", "moitié"], ["sing", "sɪŋ", "chanter"], ["morning", "ˈmɔːnɪŋ", "matin"], ["finger", "ˈfɪŋɡə", "doigt"], ["English", "ˈɪŋɡlɪʃ", "anglais"], ["singer", "ˈsɪŋə", "chanteur"]],
  pairs: [["wine", "vine"], ["west", "vest"], ["wet", "vet"], ["right", "light"], ["red", "led"], ["thin", "thing"], ["sin", "sing"], ["ran", "rang"], ["win", "wing"]],
  practice: [["I'm very sorry, are you all right?", "Je suis vraiment désolée, ça va ?"], ["We'd like a glass of red wine.", "On voudrait un verre de vin rouge."], ["Good morning! I'm learning English.", "Bonjour ! J'apprends l'anglais."], ["Would you like some milk? Half a glass?", "Tu veux du lait ? Un demi-verre ?"]],
  quiz: [
    { q: "To say the English r, your tongue…", q_fr: "Pour dire le r anglais, ta langue…", o: ["curls back slightly without touching anything", "vibrates against your teeth", "scrapes the back of your throat"], a: 0 },
    { q: "In British English, is the r pronounced in “card”?", q_fr: "En britannique, le r se prononce-t-il dans « card » ?", o: ["No: /kɑːd/. r is only pronounced before a vowel", "Yes, always", "Only in the plural"], a: 0 },
    { q: "“one” starts with the sound…", q_fr: "« one » commence par le son…", o: ["/w/", "/ɒ/", "/əʊ/"], a: 0, ex: "one /wʌn/ sounds exactly like won.", ex_fr: "one /wʌn/ se prononce exactement comme won." },
    { q: "Which word has a silent l?", q_fr: "Quel mot a un l muet ?", o: ["half", "help", "hello"], a: 0 },
    { q: "In “sing” /sɪŋ/, after the ng…", q_fr: "Dans « sing » /sɪŋ/, après le ng…", o: ["there's no /ɡ/ sound", "you hear a /ɡ/", "you hear an /ə/"], a: 0 },
    { q: "In which word do you hear /ŋɡ/?", q_fr: "Dans quel mot entend-on /ŋɡ/ ?", o: ["finger", "singer", "thing"], a: 0 },
    { q: "The l in “milk” and “feel” is…", q_fr: "Le l de « milk » et « feel » est…", o: ["dark: the back of the tongue rises", "silent", "exactly like a French l"], a: 0 }
  ] },

{ id: "p-stress1", level: "A2", icon: "music", ipa: "/ˈ/", units: ["a2-4"],
  title: "Word stress: one strong syllable", title_fr: "L'accent de mot : une syllabe forte",
  subtitle: "HOtel? hoTEL! The French-speaker trap", subtitle_fr: "HOtel ? hoTEL ! Le piège des francophones",
  body: `<p>Every English word of two or more syllables has <b>one stressed syllable</b>: louder, longer, higher, with a full vowel. The others are weaker, often reduced to a schwa. Dictionaries mark it with <ipa>ˈ</ipa> just before the stressed syllable: <s-en>water</s-en> <ipa>ˈwɔːtə</ipa>, <s-en>hotel</s-en> <ipa>həʊˈtel</ipa>.</p>
<div class="warn">French puts a little weight on the <b>last</b> syllable: « restau<b>rant</b> », « choco<b>lat</b> ». Carried into English, this final stress is particularly confusing for English listeners (Field, 2005). <s-en>chocolate</s-en> is <s-en><st>choc</st>olate</s-en> <ipa>ˈtʃɒklət</ipa>, <s-en>restaurant</s-en> is <s-en><st>res</st>taurant</s-en> <ipa>ˈrestrɒnt</ipa>.</div>
<h3>Words French speakers often stress wrongly</h3>
<ul>
<li>On the 1st syllable: <s-en><st>com</st>fortable</s-en> (3 syllables: <ipa>ˈkʌmftəbəl</ipa>), <s-en><st>veg</st>etable</s-en> <ipa>ˈvedʒtəbəl</ipa>, <s-en><st>in</st>teresting</s-en>, <s-en><st>dif</st>ferent</s-en>, <s-en><st>fam</st>ily</s-en>, <s-en><st>Eu</st>rope</s-en>, <s-en><st>tel</st>evision</s-en>.</li>
<li>On the 2nd syllable: <s-en>de<st>vel</st>op</s-en>, <s-en>e<st>vent</st></s-en>, <s-en>suc<st>cess</st></s-en>, <s-en>e<st>con</st>omy</s-en>, <s-en>ca<st>reer</st></s-en>, <s-en>im<st>por</st>tant</s-en>, <s-en>to<st>mor</st>row</s-en>, <s-en>ho<st>tel</st></s-en>.</li>
</ul>
<div class="tip">To stress a syllable, make it <b>longer</b>, a little <b>higher</b> and louder, with a clear vowel, and make the others short. Tap the table on the stressed syllable as you say the word.</div>`,
  body_fr: `<p>Chaque mot anglais de deux syllabes ou plus a <b>une syllabe accentuée</b> : plus forte, plus longue, plus haute, avec une voyelle pleine. Les autres sont plus faibles, souvent réduites à un schwa. Les dictionnaires la marquent avec <ipa>ˈ</ipa>, juste avant la syllabe accentuée : <s-en>water</s-en> <ipa>ˈwɔːtə</ipa>, <s-en>hotel</s-en> <ipa>həʊˈtel</ipa>.</p>
<div class="warn">Le français met un léger poids sur la <b>dernière</b> syllabe : « restau<b>rant</b> », « choco<b>lat</b> ». Transporté en anglais, cet accent final déroute particulièrement les anglophones (Field, 2005). <s-en>chocolate</s-en> se dit <s-en><st>choc</st>olate</s-en> <ipa>ˈtʃɒklət</ipa>, <s-en>restaurant</s-en> se dit <s-en><st>res</st>taurant</s-en> <ipa>ˈrestrɒnt</ipa>.</div>
<h3>Des mots que les francophones accentuent souvent mal</h3>
<ul>
<li>Sur la 1re syllabe : <s-en><st>com</st>fortable</s-en> (3 syllabes : <ipa>ˈkʌmftəbəl</ipa>), <s-en><st>veg</st>etable</s-en> <ipa>ˈvedʒtəbəl</ipa>, <s-en><st>in</st>teresting</s-en>, <s-en><st>dif</st>ferent</s-en>, <s-en><st>fam</st>ily</s-en>, <s-en><st>Eu</st>rope</s-en>, <s-en><st>tel</st>evision</s-en>.</li>
<li>Sur la 2e syllabe : <s-en>de<st>vel</st>op</s-en>, <s-en>e<st>vent</st></s-en>, <s-en>suc<st>cess</st></s-en>, <s-en>e<st>con</st>omy</s-en>, <s-en>ca<st>reer</st></s-en>, <s-en>im<st>por</st>tant</s-en>, <s-en>to<st>mor</st>row</s-en>, <s-en>ho<st>tel</st></s-en>.</li>
</ul>
<div class="tip">Pour accentuer une syllabe, rends-la <b>plus longue</b>, un peu <b>plus haute</b> et plus forte, avec une voyelle nette, et raccourcis les autres. Tape sur la table sur la syllabe accentuée en disant le mot.</div>`,
  words: [["water", "ˈwɔːtə", "eau"], ["hotel", "həʊˈtel", "hôtel"], ["chocolate", "ˈtʃɒklət", "chocolat"], ["restaurant", "ˈrestrɒnt", "restaurant"], ["comfortable", "ˈkʌmftəbəl", "confortable"], ["vegetable", "ˈvedʒtəbəl", "légume"], ["interesting", "ˈɪntrəstɪŋ", "intéressant"], ["different", "ˈdɪfrənt", "différent"], ["develop", "dɪˈveləp", "développer"], ["event", "ɪˈvent", "événement"], ["success", "səkˈses", "succès"], ["economy", "ɪˈkɒnəmi", "économie"], ["career", "kəˈrɪə", "carrière"], ["tomorrow", "təˈmɒrəʊ", "demain"]],
  stress: [["hotel", "ho|tel", 1], ["chocolate", "choc|o|late", 0], ["restaurant", "res|tau|rant", 0], ["comfortable", "com|for|ta|ble", 0], ["vegetable", "veg|e|ta|ble", 0], ["interesting", "in|ter|est|ing", 0], ["develop", "de|vel|op", 1], ["event", "e|vent", 1], ["economy", "e|con|o|my", 1], ["career", "ca|reer", 1], ["tomorrow", "to|mor|row", 1], ["family", "fam|i|ly", 0], ["success", "suc|cess", 1], ["Europe", "Eu|rope", 0], ["important", "im|por|tant", 1], ["television", "tel|e|vi|sion", 0]],
  stressN: 6,
  practice: [["Tomorrow we're going to a restaurant.", "Demain on va au restaurant."], ["My family is very important to me.", "Ma famille est très importante pour moi."], ["Is this hotel comfortable?", "Cet hôtel est-il confortable ?"], ["I want to develop my career in Europe.", "Je veux développer ma carrière en Europe."]],
  quiz: [
    { q: "In a dictionary, the mark ˈ in /həʊˈtel/ shows…", q_fr: "Dans un dictionnaire, la marque ˈ dans /həʊˈtel/ indique…", o: ["that the next syllable is stressed", "a pause", "a silent letter"], a: 0 },
    { q: "A stressed syllable is…", q_fr: "Une syllabe accentuée est…", o: ["longer, louder and higher, with a full vowel", "always the last one", "always the first one"], a: 0 },
    { q: "What's the typical French-speaker stress mistake?", q_fr: "Quelle est l'erreur d'accent typique des francophones ?", o: ["stressing the last syllable", "stressing the first syllable", "stressing nothing"], a: 0 },
    { q: "How many syllables do you hear in “comfortable” /ˈkʌmftəbəl/?", q_fr: "Combien de syllabes entends-tu dans « comfortable » /ˈkʌmftəbəl/ ?", o: ["three", "four", "five"], a: 0, ex: "COMF-ta-ble: the o after the f disappears.", ex_fr: "COMF-ta-ble : le o après le f disparaît." },
    { q: "Which word is stressed on the 2nd syllable?", q_fr: "Quel mot est accentué sur la 2e syllabe ?", o: ["develop", "family", "different"], a: 0 },
    { q: "Which word is stressed on the 1st syllable?", q_fr: "Quel mot est accentué sur la 1re syllabe ?", o: ["chocolate", "hotel", "event"], a: 0 }
  ] },

{ id: "p-weak", level: "A2", icon: "feather", ipa: "/ə/ /kən/ /tə/", units: ["a2-5", "a2-6"],
  title: "Weak forms: the little words", title_fr: "Les formes faibles : les petits mots",
  subtitle: "to, for, of, can, was… as natives say them", subtitle_fr: "to, for, of, can, was… comme les disent les natifs",
  body: `<p>About forty very common words have two pronunciations: a <b>strong form</b>, used when the word is stressed or alone, and a <b>weak form</b>, with a schwa, used most of the time. Natives use the weak forms constantly: if you don't know them, you won't recognise these words in real speech.</p>
<ul>
<li><b>a</b> <ipa>ə</ipa>, <b>the</b> <ipa>ðə</ipa> (<ipa>ði</ipa> before a vowel), <b>and</b> <ipa>ən</ipa>: <s-en>fish and chips</s-en></li>
<li><b>of</b> <ipa>əv</ipa>: <s-en>a cup of tea</s-en> · <b>to</b> <ipa>tə</ipa>: <s-en>I want to go</s-en></li>
<li><b>for</b> <ipa>fə</ipa>: <s-en>It's for you</s-en> · <b>from</b> <ipa>frəm</ipa>: <s-en>I'm from Paris</s-en> · <b>at</b> <ipa>ət</ipa>: <s-en>at home</s-en></li>
<li><b>can</b> <ipa>kən</ipa>: <s-en>I can swim</s-en> · <b>was</b> <ipa>wəz</ipa>: <s-en>It was good</s-en> · <b>were</b> <ipa>wə</ipa></li>
<li><b>have</b> <ipa>həv</ipa> or <ipa>əv</ipa>: <s-en>Where have you been?</s-en> · <b>do</b> <ipa>də</ipa>: <s-en>What do you think?</s-en></li>
<li><b>them</b> <ipa>ðəm</ipa>, <b>her</b> <ipa>hə</ipa>, <b>some</b> <ipa>səm</ipa>, <b>than</b> <ipa>ðən</ipa>: <s-en>better than me</s-en></li>
</ul>
<p>The strong form returns at the <b>end</b> of a sentence (<s-en>Where are you from?</s-en> <ipa>frɒm</ipa>; <s-en>Yes, I can.</s-en> <ipa>kæn</ipa>), for <b>contrast</b> (<s-en>It's not for you, it's from you.</s-en>), and when you quote the word.</p>
<div class="warn"><b>can / can't</b>: in <s-en>I can swim</s-en>, can is weak <ipa>kən</ipa> and swim is stressed. In <s-en>I can't swim</s-en>, can't is strong and stressed: <ipa>kɑːnt</ipa> (British) or <ipa>kænt</ipa> (American), and the final t is often barely audible. So listen to the <b>vowel and the stress</b>, not the t: weak and quick = can; strong and long = can't.</div>`,
  body_fr: `<p>Une quarantaine de mots très courants ont deux prononciations : une <b>forme forte</b>, quand le mot est accentué ou seul, et une <b>forme faible</b>, avec un schwa, utilisée la plupart du temps. Les natifs utilisent sans arrêt les formes faibles : si tu ne les connais pas, tu ne reconnaîtras pas ces mots à l'oral.</p>
<ul>
<li><b>a</b> <ipa>ə</ipa>, <b>the</b> <ipa>ðə</ipa> (<ipa>ði</ipa> devant une voyelle), <b>and</b> <ipa>ən</ipa> : <s-en>fish and chips</s-en></li>
<li><b>of</b> <ipa>əv</ipa> : <s-en>a cup of tea</s-en> · <b>to</b> <ipa>tə</ipa> : <s-en>I want to go</s-en></li>
<li><b>for</b> <ipa>fə</ipa> : <s-en>It's for you</s-en> · <b>from</b> <ipa>frəm</ipa> : <s-en>I'm from Paris</s-en> · <b>at</b> <ipa>ət</ipa> : <s-en>at home</s-en></li>
<li><b>can</b> <ipa>kən</ipa> : <s-en>I can swim</s-en> · <b>was</b> <ipa>wəz</ipa> : <s-en>It was good</s-en> · <b>were</b> <ipa>wə</ipa></li>
<li><b>have</b> <ipa>həv</ipa> ou <ipa>əv</ipa> : <s-en>Where have you been?</s-en> · <b>do</b> <ipa>də</ipa> : <s-en>What do you think?</s-en></li>
<li><b>them</b> <ipa>ðəm</ipa>, <b>her</b> <ipa>hə</ipa>, <b>some</b> <ipa>səm</ipa>, <b>than</b> <ipa>ðən</ipa> : <s-en>better than me</s-en></li>
</ul>
<p>La forme forte revient en <b>fin</b> de phrase (<s-en>Where are you from?</s-en> <ipa>frɒm</ipa> ; <s-en>Yes, I can.</s-en> <ipa>kæn</ipa>), pour un <b>contraste</b> (<s-en>It's not for you, it's from you.</s-en>), et quand on cite le mot.</p>
<div class="warn"><b>can / can't</b> : dans <s-en>I can swim</s-en>, can est faible <ipa>kən</ipa> et swim est accentué. Dans <s-en>I can't swim</s-en>, can't est fort et accentué : <ipa>kɑːnt</ipa> (britannique) ou <ipa>kænt</ipa> (américain), et le t final s'entend souvent à peine. Écoute donc <b>la voyelle et l'accent</b>, pas le t : faible et rapide = can ; fort et long = can't.</div>`,
  words: [["a cup of tea", "ə ˈkʌp əv ˈtiː", "une tasse de thé"], ["fish and chips", "ˈfɪʃ ən ˈtʃɪps", "poisson-frites"], ["I want to go", "aɪ ˈwɒnt tə ˈɡəʊ", "je veux y aller"], ["It's for you", "ɪts fə ˈjuː", "c'est pour toi"], ["I'm from Paris", "aɪm frəm ˈpærɪs", "je viens de Paris"], ["at home", "ət ˈhəʊm", "à la maison"], ["I can swim", "aɪ kən ˈswɪm", "je sais nager"], ["I can't swim", "aɪ ˈkɑːnt ˈswɪm", "je ne sais pas nager"], ["It was good", "ɪt wəz ˈɡʊd", "c'était bien"], ["What do you think?", "ˈwɒt də jə ˈθɪŋk", "qu'en penses-tu ?"], ["better than me", "ˈbetə ðən ˈmiː", "meilleur que moi"], ["some water", "səm ˈwɔːtə", "de l'eau"]],
  pairs: [["I can go.", "I can't go."], ["She can drive.", "She can't drive."], ["We can come.", "We can't come."]],
  practice: [["I'd like a cup of tea and some cake.", "Je voudrais une tasse de thé et du gâteau."], ["Where have you been? I was waiting for you.", "Où étais-tu ? Je t'attendais."], ["I can swim, but I can't dive.", "Je sais nager, mais je ne sais pas plonger."], ["It's better than nothing.", "C'est mieux que rien."]],
  quiz: [
    { q: "Most of the time, “to” in “I want to go” is pronounced…", q_fr: "La plupart du temps, « to » dans « I want to go » se prononce…", o: ["/tə/, with a schwa", "/tuː/, like two", "/təʊ/"], a: 0 },
    { q: "When do we use the strong form?", q_fr: "Quand utilise-t-on la forme forte ?", o: ["at the end of a sentence, for contrast, or when the word is stressed", "always in formal English", "only in questions"], a: 0 },
    { q: "In “Where are you from?”, “from” is…", q_fr: "Dans « Where are you from? », « from » est…", o: ["strong /frɒm/, because it's at the end", "weak /frəm/", "silent"], a: 0 },
    { q: "How can you tell “I can swim” from “I can't swim”?", q_fr: "Comment distinguer « I can swim » de « I can't swim » ?", o: ["can is weak and quick; can't is strong, long and stressed", "only by the t at the end", "you can't"], a: 0 },
    { q: "“fish and chips” sounds like…", q_fr: "« fish and chips » se dit…", o: ["fish 'n' chips: /ən/ or /n/", "fish AND chips, with a strong and", "fish-a-chips"], a: 0 },
    { q: "“better than me”: “than” is pronounced…", q_fr: "« better than me » : « than » se prononce…", o: ["/ðən/", "/ðæn/", "/θæn/"], a: 0 },
    { q: "“Yes, I can.” Here, “can” is…", q_fr: "« Yes, I can. » Ici, « can » est…", o: ["strong /kæn/: stressed and at the end", "weak /kən/", "silent"], a: 0 }
  ] },

{ id: "p-voicing", level: "A2", icon: "zap", ipa: "/pʰ/ /ʃ tʃ ʒ dʒ j/", units: ["a2-7"],
  title: "Puffs of air, final consonants and “ch” sounds", title_fr: "Souffles, consonnes finales et sons « ch »",
  subtitle: "pin/bin, back/bag, cheap/sheep, jet/yet", subtitle_fr: "pin/bin, back/bag, cheap/sheep, jet/yet",
  body: `<h3>Aspiration: the puff of air</h3>
<p>At the start of a stressed syllable, English <ipa>p</ipa>, <ipa>t</ipa>, <ipa>k</ipa> come with a small <b>puff of air</b>: <s-en>pin</s-en>, <s-en>time</s-en>, <s-en>car</s-en>. French p, t, k have none, so to English ears a French “pin” can sound like <s-en>bin</s-en>, and “tie” like <s-en>die</s-en>. Test: hold a sheet of paper in front of your mouth; it should move on <s-en>pin</s-en> but not on <s-en>bin</s-en>. After s, there's no puff: <s-en>spin</s-en>, <s-en>stop</s-en>, <s-en>sky</s-en>.</p>
<h3>Final consonants: keep them</h3>
<p>English words often end with a consonant that changes the meaning: <s-en>back</s-en> / <s-en>bag</s-en>, <s-en>rice</s-en> / <s-en>rise</s-en>, <s-en>safe</s-en> / <s-en>save</s-en>, <s-en>seat</s-en> / <s-en>seed</s-en>. The secret is in the <b>vowel</b>: it's longer before a voiced consonant (<s-en>bag</s-en>, <s-en>seed</s-en>) and clipped before a voiceless one (<s-en>back</s-en>, <s-en>seat</s-en>). Don't add a vowel after it (“bag-gue”), and don't drop it.</p>
<h3>The “ch” family</h3>
<ul>
<li><ipa>ʃ</ipa> = « <span class="no-tx">ch</span> » in « chat »: <s-en>she</s-en>, <s-en>shop</s-en>, <s-en>nation</s-en>, <s-en>sugar</s-en>.</li>
<li><ipa>tʃ</ipa> = « tch »: <s-en>cheap</s-en>, <s-en>watch</s-en>, <s-en>picture</s-en>. Compare <s-en>cheap</s-en> / <s-en>sheep</s-en>, <s-en>chair</s-en> / <s-en>share</s-en>, <s-en>watch</s-en> / <s-en>wash</s-en>.</li>
<li><ipa>ʒ</ipa> = « j » in « jour »: rare, in the middle of words: <s-en>usually</s-en>, <s-en>television</s-en>, <s-en>measure</s-en>, <s-en>decision</s-en>.</li>
<li><ipa>dʒ</ipa> = « dj »: <s-en>job</s-en>, <s-en>general</s-en>, <s-en>age</s-en>, <s-en>bridge</s-en>. The English letter j is ALWAYS <ipa>dʒ</ipa>, never the French « j »: <s-en>jam</s-en>, <s-en>joke</s-en>, <s-en>just</s-en>.</li>
<li><ipa>j</ipa> = the letter y, like « y » in « yeux »: <s-en>yes</s-en>, <s-en>you</s-en>, <s-en>year</s-en>. Compare <s-en>jet</s-en> / <s-en>yet</s-en>, <s-en>jam</s-en> / <s-en>yam</s-en>, <s-en>joke</s-en> / <s-en>yolk</s-en>.</li>
</ul>
<div class="warn"><s-en>year</s-en> <ipa>jɪə</ipa> and <s-en>ear</s-en> <ipa>ɪə</ipa> are different words: start <s-en>year</s-en> with a clear « y ».</div>`,
  body_fr: `<h3>L'aspiration : le petit souffle</h3>
<p>Au début d'une syllabe accentuée, les <ipa>p</ipa>, <ipa>t</ipa>, <ipa>k</ipa> anglais s'accompagnent d'un petit <b>souffle</b> : <s-en>pin</s-en>, <s-en>time</s-en>, <s-en>car</s-en>. Les p, t, k français n'en ont pas, donc pour une oreille anglaise un « pin » français peut sonner comme <s-en>bin</s-en>, et « tie » comme <s-en>die</s-en>. Test : tiens une feuille de papier devant ta bouche ; elle doit bouger sur <s-en>pin</s-en> mais pas sur <s-en>bin</s-en>. Après s, pas de souffle : <s-en>spin</s-en>, <s-en>stop</s-en>, <s-en>sky</s-en>.</p>
<h3>Les consonnes finales : garde-les</h3>
<p>Les mots anglais finissent souvent par une consonne qui change le sens : <s-en>back</s-en> / <s-en>bag</s-en>, <s-en>rice</s-en> / <s-en>rise</s-en>, <s-en>safe</s-en> / <s-en>save</s-en>, <s-en>seat</s-en> / <s-en>seed</s-en>. Le secret est dans la <b>voyelle</b> : elle est plus longue devant une consonne sonore (<s-en>bag</s-en>, <s-en>seed</s-en>) et écourtée devant une sourde (<s-en>back</s-en>, <s-en>seat</s-en>). N'ajoute pas de voyelle après (« bag-gue »), et ne la laisse pas tomber.</p>
<h3>La famille des « ch »</h3>
<ul>
<li><ipa>ʃ</ipa> = « ch » de « chat » : <s-en>she</s-en>, <s-en>shop</s-en>, <s-en>nation</s-en>, <s-en>sugar</s-en>.</li>
<li><ipa>tʃ</ipa> = « tch » : <s-en>cheap</s-en>, <s-en>watch</s-en>, <s-en>picture</s-en>. Compare <s-en>cheap</s-en> / <s-en>sheep</s-en>, <s-en>chair</s-en> / <s-en>share</s-en>, <s-en>watch</s-en> / <s-en>wash</s-en>.</li>
<li><ipa>ʒ</ipa> = « j » de « jour » : rare, au milieu des mots : <s-en>usually</s-en>, <s-en>television</s-en>, <s-en>measure</s-en>, <s-en>decision</s-en>.</li>
<li><ipa>dʒ</ipa> = « dj » : <s-en>job</s-en>, <s-en>general</s-en>, <s-en>age</s-en>, <s-en>bridge</s-en>. La lettre j anglaise se dit TOUJOURS <ipa>dʒ</ipa>, jamais comme le « j » français : <s-en>jam</s-en>, <s-en>joke</s-en>, <s-en>just</s-en>.</li>
<li><ipa>j</ipa> = la lettre y, comme le « y » de « yeux » : <s-en>yes</s-en>, <s-en>you</s-en>, <s-en>year</s-en>. Compare <s-en>jet</s-en> / <s-en>yet</s-en>, <s-en>jam</s-en> / <s-en>yam</s-en>, <s-en>joke</s-en> / <s-en>yolk</s-en>.</li>
</ul>
<div class="warn"><s-en>year</s-en> <ipa>jɪə</ipa> (année) et <s-en>ear</s-en> <ipa>ɪə</ipa> (oreille) sont deux mots différents : commence <s-en>year</s-en> par un « y » bien net.</div>`,
  words: [["pin", "pɪn", "épingle"], ["time", "taɪm", "temps"], ["spin", "spɪn", "tourner"], ["bag", "bæɡ", "sac"], ["rise", "raɪz", "monter"], ["save", "seɪv", "économiser"], ["seed", "siːd", "graine"], ["nation", "ˈneɪʃən", "nation"], ["cheap", "tʃiːp", "bon marché"], ["watch", "wɒtʃ", "regarder"], ["usually", "ˈjuːʒuəli", "d'habitude"], ["measure", "ˈmeʒə", "mesurer"], ["job", "dʒɒb", "travail"], ["general", "ˈdʒenərəl", "général"], ["year", "jɪə", "année"]],
  pairs: [["pin", "bin"], ["pear", "bear"], ["coat", "goat"], ["tie", "die"], ["back", "bag"], ["rice", "rise"], ["safe", "save"], ["seat", "seed"], ["cheap", "sheep"], ["chair", "share"], ["watch", "wash"], ["jet", "yet"], ["jam", "yam"], ["year", "ear"]],
  practice: [["Peter took two cups of tea.", "Peter a pris deux tasses de thé."], ["I usually watch television in the evening.", "D'habitude, je regarde la télévision le soir."], ["John has just changed jobs this year.", "John vient de changer de travail cette année."], ["Can you pass me the bag on the back seat?", "Tu peux me passer le sac sur la banquette arrière ?"]],
  quiz: [
    { q: "At the start of “pin”, the p…", q_fr: "Au début de « pin », le p…", o: ["comes with a puff of air", "is exactly like the French p", "is silent"], a: 0 },
    { q: "To an English ear, a French “pin” (without the puff) can sound like…", q_fr: "Pour une oreille anglaise, un « pin » français (sans souffle) peut sonner comme…", o: ["bin", "fin", "pen"], a: 0 },
    { q: "back and bag: what makes the difference easiest to hear?", q_fr: "back et bag : qu'est-ce qui rend la différence la plus audible ?", o: ["the vowel is longer in bag", "the vowel is longer in back", "nothing, they sound the same"], a: 0 },
    { q: "The English letter j in “just” is pronounced…", q_fr: "La lettre j anglaise dans « just » se prononce…", o: ["/dʒ/, like « dj »", "/ʒ/, like the French « j »", "/j/, like « y »"], a: 0 },
    { q: "Which word has /ʒ/, like the j in « jour »?", q_fr: "Quel mot contient /ʒ/, comme le j de « jour » ?", o: ["usually", "jump", "yellow"], a: 0 },
    { q: "Which word has /tʃ/?", q_fr: "Quel mot contient /tʃ/ ?", o: ["picture", "machine", "shop"], a: 0, ex: "picture /ˈpɪktʃə/. machine /məˈʃiːn/ and shop /ʃɒp/ have /ʃ/.", ex_fr: "picture /ˈpɪktʃə/. machine /məˈʃiːn/ et shop /ʃɒp/ ont /ʃ/." },
    { q: "“year” and “ear”…", q_fr: "« year » et « ear »…", o: ["are different words: year starts with /j/", "are pronounced the same", "both start with /dʒ/"], a: 0 }
  ] }
];
