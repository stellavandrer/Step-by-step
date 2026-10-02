/* English version of the lessons (total immersion). The original French text
   becomes the translation (title_fr, body_fr, q_fr, ex_fr) when the app loads. */
window.LESSONS_EN = window.LESSONS_EN || {};
Object.assign(window.LESSONS_EN, {
1: {
  title: "Introduce yourself: I am, you are",
  subtitle: "The verb “to be”: the base of everything.",
  body: `
<p><b>To be</b> means <b>« être »</b>. It is the most common verb in English. You use it to say who you are, how you are, how old you are and where you are from.</p>
<h2>The present tense</h2>
<table>
<tr><th>Full form</th><th>Short form</th><th>French</th></tr>
<tr><td>I am</td><td>I'm</td><td>je suis</td></tr>
<tr><td>you are</td><td>you're</td><td>tu es / vous êtes</td></tr>
<tr><td>he is</td><td>he's</td><td>il est</td></tr>
<tr><td>she is</td><td>she's</td><td>elle est</td></tr>
<tr><td>it is</td><td>it's</td><td>il / elle est (thing, animal)</td></tr>
<tr><td>we are</td><td>we're</td><td>nous sommes</td></tr>
<tr><td>they are</td><td>they're</td><td>ils / elles sont</td></tr>
</table>
<div class="tip">When people speak, they almost always use the <b>short form</b>: <s-en>I'm Stella.</s-en> The full form (I am Stella) is correct too, but it sounds more formal.</div>
<h2>Traps for French speakers</h2>
<ul>
<li><b>Age uses “be”, not “have”</b>: <s-en>I'm 30.</s-en> Never “I have 30”.</li>
<li><b>“I” always has a capital letter</b>, even in the middle of a sentence.</li>
<li><b>“You”</b> is for one person or many people, for friends and for strangers. There is no difference like « tu » and « vous ».</li>
<li><b>“It”</b> is for things and animals: <s-en>It's a cat.</s-en></li>
</ul>
<h2>Introduce yourself</h2>
<p>With these three sentences, you can already introduce yourself:</p>
<p><s-en>Hi! I'm Stella. I'm French. I'm a designer.</s-en></p>
<div class="warn">For a job, you need <b>a</b> or <b>an</b>: <s-en>I'm a teacher.</s-en> In French there is no article (« je suis professeure »). In English, the article is necessary.</div>
`,
  quiz: [
    { q: "Translate: « Je suis fatiguée. »", ex: "With “I”, we always use “am”: I am / I'm." },
    { q: "Translate: « J'ai 25 ans. »", ex: "Age uses “be”: I'm 25 (years old)." },
    { q: "Complete: “They ___ my friends.”", ex: "They → are." },
    { q: "Translate: « Je suis designer. »", ex: "Before a job, use “a” or “an”." },
    { q: "Which word do you use for a cat?", ex: "Things and animals → it." }
  ]
},
2: {
  title: "To be: negatives and questions",
  subtitle: "Say “I'm not” and ask questions.",
  body: `
<h2>Negative: add “not”</h2>
<p>To make a negative sentence, put <b>not</b> after the verb.</p>
<table>
<tr><th>Full form</th><th>Short form</th><th>French</th></tr>
<tr><td>I am not</td><td>I'm not</td><td>je ne suis pas</td></tr>
<tr><td>you are not</td><td>you aren't</td><td>tu n'es pas</td></tr>
<tr><td>he is not</td><td>he isn't</td><td>il n'est pas</td></tr>
<tr><td>we are not</td><td>we aren't</td><td>nous ne sommes pas</td></tr>
<tr><td>they are not</td><td>they aren't</td><td>ils ne sont pas</td></tr>
</table>
<p><s-en>I'm not English.</s-en> · <s-en>It isn't expensive.</s-en></p>
<h2>Questions: change the order</h2>
<p>To ask a question, put the verb <b>before</b> the subject:</p>
<p><s-en>You are happy.</s-en> → <s-en>Are you happy?</s-en></p>
<p><s-en>She is at work.</s-en> → <s-en>Is she at work?</s-en></p>
<h2>Short answers</h2>
<p>“Yes” or “no” alone can sound a bit cold. English speakers repeat the verb:</p>
<table>
<tr><th>Question</th><th>Yes</th><th>No</th></tr>
<tr><td>Are you French?</td><td>Yes, I am.</td><td>No, I'm not.</td></tr>
<tr><td>Is he your brother?</td><td>Yes, he is.</td><td>No, he isn't.</td></tr>
</table>
<div class="tip">In a short “yes” answer, <b>never</b> use the short form: say “Yes, I am”, not “Yes, I'm”.</div>
<h2>Question words</h2>
<p><s-en>What</s-en> (quoi, quel) · <s-en>Where</s-en> (où) · <s-en>Who</s-en> (qui) · <s-en>How</s-en> (comment) · <s-en>How old</s-en> (quel âge) · <s-en>When</s-en> (quand) · <s-en>Why</s-en> (pourquoi)</p>
<p><s-en>Where are you from?</s-en> · <s-en>How old are you?</s-en> · <s-en>What's your name?</s-en></p>
`,
  quiz: [
    { q: "Translate: « Je ne suis pas en retard. »", ex: "Negative of “to be”: I'm not." },
    { q: "Make a question: “She is happy.”", ex: "Change the order: Is she…?" },
    { q: "“Are you a student?” — Choose the correct answer:", ex: "In a short answer, no contraction: Yes, I am." },
    { q: "Which word means « où »?", ex: "Where = où. Who = qui. What = quoi." },
    { q: "Complete: “___ old are you?”", ex: "« Quel âge as-tu ? » = How old are you?" }
  ]
},
3: {
  title: "Articles: a, an, the",
  subtitle: "Un, une, le, la, les… but much simpler.",
  body: `
<p>Good news: English has <b>no masculine and no feminine</b>. A table, a book: it's the same.</p>
<h2>A / An = un, une</h2>
<ul>
<li><b>a</b> before a consonant <b>sound</b>: <s-en>a book</s-en>, <s-en>a car</s-en>, <s-en>a university</s-en> (you hear “you”).</li>
<li><b>an</b> before a vowel <b>sound</b>: <s-en>an apple</s-en>, <s-en>an egg</s-en>, <s-en>an hour</s-en> (the h is silent).</li>
</ul>
<div class="tip">The <b>sound</b> is important, not the letter. That's why we say “an hour” but “a university”.</div>
<h2>The = le, la, les</h2>
<p><b>The</b> is the same for singular and plural: <s-en>the cat</s-en>, <s-en>the cats</s-en>.</p>
<h2>The big trap: no article for general ideas</h2>
<p>In French, you say « J'aime <b>le</b> café ». In English, when you talk about something <b>in general</b>, there is <b>no article</b>:</p>
<p><s-en>I like coffee.</s-en> (coffee in general)</p>
<p><s-en>Cats are cute.</s-en> (all cats)</p>
<p><s-en>Life is beautiful.</s-en></p>
<div class="warn">“I like the coffee” means « j'aime <b>ce</b> café » : one specific coffee.</div>
`,
  quiz: [
    { q: "Choose: “___ orange”", ex: "Orange starts with a vowel sound → an." },
    { q: "Choose: “___ university”", ex: "We hear “you-niversity”: a consonant sound → a." },
    { q: "Translate: « J'aime le chocolat. » (in general)", ex: "General idea → no article." },
    { q: "Translate: « Les enfants sont dans le jardin. »", ex: "Specific children, a specific garden → the." },
    { q: "Choose: “___ hour”", ex: "The h in “hour” is silent → an hour." }
  ]
},
4: {
  title: "Plurals and this / that",
  subtitle: "Add an -s, and point at things.",
  body: `
<h2>Plurals: add -s</h2>
<p>Most of the time: <s-en>a book → two books</s-en>, <s-en>a car → three cars</s-en>.</p>
<ul>
<li>After <b>s, sh, ch, x</b> → <b>-es</b>: <s-en>a bus → two buses</s-en>, <s-en>a box → boxes</s-en>.</li>
<li>Consonant + <b>y</b> → <b>-ies</b>: <s-en>a city → cities</s-en>, <s-en>a baby → babies</s-en>.</li>
</ul>
<h2>Irregular plurals</h2>
<table>
<tr><th>Singular</th><th>Plural</th><th>French</th></tr>
<tr><td>man</td><td>men</td><td>homme(s)</td></tr>
<tr><td>woman</td><td>women</td><td>femme(s)</td></tr>
<tr><td>child</td><td>children</td><td>enfant(s)</td></tr>
<tr><td>person</td><td>people</td><td>personne(s), gens</td></tr>
<tr><td>foot</td><td>feet</td><td>pied(s)</td></tr>
<tr><td>tooth</td><td>teeth</td><td>dent(s)</td></tr>
</table>
<div class="tip"><b>Adjectives never take an -s</b>: <s-en>a big house → two big houses</s-en>. Never “bigs”.</div>
<h2>This / that</h2>
<table>
<tr><th></th><th>Near me</th><th>Far from me</th></tr>
<tr><td>Singular</td><td>this</td><td>that</td></tr>
<tr><td>Plural</td><td>these</td><td>those</td></tr>
</table>
<p><s-en>This is my phone.</s-en> (in my hand) · <s-en>That car is red.</s-en> (over there)</p>
<p><s-en>These shoes are new.</s-en> · <s-en>Those people are nice.</s-en></p>
<div class="warn">Listen carefully: <b>this</b> has a short “i”, <b>these</b> has a long “ee”. Use the listen buttons.</div>
`,
  quiz: [
    { q: "The plural of “child”:", ex: "Irregular plural: children." },
    { q: "The plural of “box”:", ex: "After x → -es." },
    { q: "Translate: « Ces chaussures-ci sont confortables. »", ex: "Plural + near → these." },
    { q: "Translate: « Deux grandes maisons »", ex: "The adjective doesn't change; the noun takes -s." },
    { q: "The plural of “person”:", ex: "Person → people." }
  ]
},
5: {
  title: "Present simple: I work, she works",
  subtitle: "Talk about habits and facts.",
  body: `
<p>We use the <b>present simple</b> for <b>habits</b> (things we do often) and for <b>facts</b> (things that are always true).</p>
<h2>The rule: easy… except one detail</h2>
<table>
<tr><th>English</th><th>French</th></tr>
<tr><td>I work</td><td>je travaille</td></tr>
<tr><td>you work</td><td>tu travailles</td></tr>
<tr><td>he / she / it work<b>s</b></td><td>il / elle travaille</td></tr>
<tr><td>we work</td><td>nous travaillons</td></tr>
<tr><td>they work</td><td>ils travaillent</td></tr>
</table>
<div class="warn"><b>The golden rule: with he, she and it, add -s to the verb.</b> This is the most common mistake, even for advanced learners. <s-en>She works.</s-en> <s-en>He likes tea.</s-en></div>
<h2>Spelling of the -s</h2>
<ul>
<li>After <b>o, s, sh, ch, x</b> → <b>-es</b>: <s-en>he goes</s-en>, <s-en>she watches</s-en>.</li>
<li>Consonant + <b>y</b> → <b>-ies</b>: <s-en>study → she studies</s-en>.</li>
<li><b>have</b> → <b>has</b>: <s-en>She has a car.</s-en></li>
</ul>
<h2>Frequency words</h2>
<p>They go <b>before the verb</b> (but after “to be”):</p>
<p><s-en>always</s-en> · <s-en>usually</s-en> · <s-en>often</s-en> · <s-en>sometimes</s-en> · <s-en>never</s-en></p>
<p><s-en>I always drink coffee in the morning.</s-en></p>
<p><s-en>She is never late.</s-en></p>
`,
  quiz: [
    { q: "Complete: “She ___ English.” (speak)", ex: "She → add -s: speaks." },
    { q: "Complete: “He ___ to work by bus.” (go)", ex: "Go ends in o → goes." },
    { q: "Complete: “My mother ___ a new phone.” (have)", ex: "Have becomes has with he / she / it." },
    { q: "Where does “always” go?", ex: "Before the main verb." },
    { q: "Complete: “They ___ in London.” (live)", ex: "They → no -s." }
  ]
},
6: {
  title: "Do / does: questions and negatives",
  subtitle: "The magic tool of the present simple.",
  body: `
<p>With normal verbs (not “to be”), English needs a little helper: <b>do</b> (or <b>does</b> with he / she / it). You don't translate it. It's just a tool.</p>
<h2>Negative: don't / doesn't</h2>
<table>
<tr><th>English</th><th>French</th></tr>
<tr><td>I don't like fish.</td><td>Je n'aime pas le poisson.</td></tr>
<tr><td>You don't understand.</td><td>Tu ne comprends pas.</td></tr>
<tr><td>She doesn't like fish.</td><td>Elle n'aime pas le poisson.</td></tr>
<tr><td>They don't work today.</td><td>Ils ne travaillent pas aujourd'hui.</td></tr>
</table>
<div class="warn"><b>The -s moves into “does”!</b> Say <s-en>She doesn't like</s-en>, never “she doesn't likes”. You only need one -s.</div>
<h2>Questions: Do…? / Does…?</h2>
<p><s-en>Do you speak English?</s-en> · <s-en>Does he live here?</s-en></p>
<p><s-en>Where do you work?</s-en> · <s-en>What does she do?</s-en> (= What is her job?)</p>
<h2>Short answers</h2>
<p><s-en>Do you like pizza? — Yes, I do. / No, I don't.</s-en></p>
<p><s-en>Does she drive? — Yes, she does. / No, she doesn't.</s-en></p>
<div class="tip">Summary: <b>to be</b> works alone (Are you…? I'm not…). <b>All the other verbs</b> need do / does.</div>
`,
  quiz: [
    { q: "Translate: « Je ne parle pas allemand. »", ex: "Normal verb → don't + verb." },
    { q: "Complete: “He ___ like coffee.”", ex: "He → doesn't." },
    { q: "Which sentence is correct?", ex: "The -s is already in “does”, so the verb has no -s." },
    { q: "Translate: « Est-ce que tu habites ici ? »", ex: "Question with a normal verb → Do you…?" },
    { q: "“Does she work here?” — Yes:", ex: "Repeat the helper: Yes, she does." }
  ]
},
7: {
  title: "My, your, his, her… and 's",
  subtitle: "Say who things belong to.",
  body: `
<h2>Possessive adjectives</h2>
<table>
<tr><th>English</th><th>French</th></tr>
<tr><td>my</td><td>mon, ma, mes</td></tr>
<tr><td>your</td><td>ton, ta, tes / votre, vos</td></tr>
<tr><td>his</td><td>son, sa, ses (to a man)</td></tr>
<tr><td>her</td><td>son, sa, ses (to a woman)</td></tr>
<tr><td>its</td><td>son, sa, ses (thing, animal)</td></tr>
<tr><td>our</td><td>notre, nos</td></tr>
<tr><td>their</td><td>leur, leurs</td></tr>
</table>
<div class="warn"><b>The big trap for French speakers</b>: in English, the possessive depends on the <b>owner</b>, not on the object.<br>Paul's car → <s-en>his car</s-en>.<br>Julie's car → <s-en>her car</s-en>.</div>
<h2>'s: possession with a name</h2>
<p>« La voiture de Paul » = <s-en>Paul's car</s-en>. The owner comes <b>first</b>, then <b>'s</b>.</p>
<p><s-en>my mother's house</s-en> · <s-en>the cat's toy</s-en></p>
<p>With a plural in -s, add only the apostrophe: <s-en>my parents' house</s-en>.</p>
<div class="tip">Don't mix up <b>its</b> (son, sa) and <b>it's</b> (= it is). Even native speakers make this mistake!</div>
`,
  quiz: [
    { q: "Translate: « Julie et son frère »", ex: "The owner is Julie, a woman → her." },
    { q: "Translate: « Marc adore sa voiture. »", ex: "The owner is Marc, a man → his." },
    { q: "Translate: « Le chien de Sam »", ex: "Owner + 's + object." },
    { q: "Translate: « Leur fille »", ex: "Leur = their. (There = là-bas!)" },
    { q: "Translate: « C'est mon livre. »", ex: "It's = it is. My = mon." }
  ]
},
8: {
  title: "Can: ability and permission",
  subtitle: "A very useful verb, and a very simple one.",
  body: `
<p><b>Can</b> means <b>« pouvoir »</b> or <b>« savoir faire »</b>. And it's very easy: <b>it never changes</b>.</p>
<h2>The form</h2>
<p><s-en>I can swim.</s-en> · <s-en>She can swim.</s-en> · <s-en>They can swim.</s-en></p>
<ul>
<li><b>No -s</b> with he / she / it: “she can”, never “she cans”.</li>
<li><b>No “to”</b> after it: <s-en>I can speak</s-en>, never “I can to speak”.</li>
</ul>
<h2>Negative: can't (cannot)</h2>
<p><s-en>I can't swim.</s-en></p>
<div class="tip">Pronunciation: in British English, <b>can't</b> has a long “a” (“caant”). In American English, the difference is small: listen for the “t” and the stress.</div>
<h2>Questions: change the order</h2>
<p><s-en>Can you help me?</s-en> · <s-en>Can I have a coffee, please?</s-en></p>
<p><s-en>Could you repeat, please?</s-en> — <b>could</b> is more polite.</p>
`,
  quiz: [
    { q: "Translate: « Elle sait conduire. »", ex: "Can never changes, and there is no “to”." },
    { q: "Translate: « Je ne peux pas venir. »", ex: "Negative: can't + verb." },
    { q: "Ask someone politely to repeat:", ex: "Could you… please? is very polite." },
    { q: "Translate: « Est-ce que je peux m'asseoir ici ? »", ex: "Question: change the order → Can I…?" }
  ]
},
9: {
  title: "Present continuous: I'm working",
  subtitle: "What is happening now.",
  body: `
<p>French has one present tense. English has <b>two</b>:</p>
<ul>
<li><b>Present simple</b> = habits: <s-en>I work every day.</s-en></li>
<li><b>Present continuous</b> = now, at the moment (« être en train de »): <s-en>I'm working now.</s-en></li>
</ul>
<h2>The form: be + verb-ing</h2>
<table>
<tr><th>English</th><th>French</th></tr>
<tr><td>I'm reading.</td><td>Je lis (en ce moment).</td></tr>
<tr><td>You're sleeping.</td><td>Tu dors.</td></tr>
<tr><td>She's cooking.</td><td>Elle cuisine.</td></tr>
<tr><td>We're watching a film.</td><td>On regarde un film.</td></tr>
</table>
<h2>Spelling of -ing</h2>
<ul>
<li>Final e disappears: <s-en>make → making</s-en>, <s-en>write → writing</s-en></li>
<li>Short verb consonant-vowel-consonant → double the consonant: <s-en>run → running</s-en>, <s-en>swim → swimming</s-en></li>
</ul>
<h2>Negatives and questions</h2>
<p>“To be” does the work: <s-en>I'm not working.</s-en> · <s-en>Are you listening?</s-en> · <s-en>What are you doing?</s-en></p>
<div class="tip">Clue words: <b>now</b>, <b>right now</b>, <b>at the moment</b>, <b>Look!</b>, <b>Listen!</b> → present continuous.</div>
<div class="warn">Some verbs are almost never in -ing: <b>like, love, know, want, need, understand</b>. Say <s-en>I know.</s-en>, not “I'm knowing”.</div>
`,
  quiz: [
    { q: "Translate: « Je regarde la télé. » (right now)", ex: "Now → be + -ing." },
    { q: "Translate: « Je regarde la télé tous les soirs. »", ex: "Habit → present simple." },
    { q: "The -ing form of “swim”:", ex: "Double the last consonant: swimming." },
    { q: "Translate: « Je sais. »", ex: "Know is never in -ing." },
    { q: "Translate: « Qu'est-ce que tu fais ? » (right now)", ex: "“What do you do?” means « quel est ton métier ? »." }
  ]
},
10: {
  title: "There is / there are",
  subtitle: "Say « il y a ».",
  body: `
<h2>Il y a…</h2>
<ul>
<li><b>There is</b> (there's) + singular: <s-en>There's a bank near here.</s-en></li>
<li><b>There are</b> + plural: <s-en>There are two bedrooms.</s-en></li>
</ul>
<h2>Negatives and questions</h2>
<p><s-en>There isn't a lift.</s-en> · <s-en>There aren't any shops.</s-en></p>
<p><s-en>Is there a toilet here?</s-en> · <s-en>Are there any questions?</s-en></p>
<h2>Some and any: « du, de la, des »</h2>
<ul>
<li><b>some</b> in positive sentences: <s-en>There's some milk.</s-en> · <s-en>I have some friends in London.</s-en></li>
<li><b>any</b> in negatives and questions: <s-en>There isn't any milk.</s-en> · <s-en>Do you have any questions?</s-en></li>
</ul>
<div class="tip">Useful exception: when you <b>offer</b> or <b>ask for</b> something politely, keep “some”: <s-en>Would you like some tea?</s-en></div>
<h2>How much / how many</h2>
<p><s-en>How many</s-en> + things you can count (people, books). <s-en>How much</s-en> + things you can't count (water, money, time) and for prices: <s-en>How much is it?</s-en></p>
`,
  quiz: [
    { q: "Translate: « Il y a trois chambres. »", ex: "Plural → there are." },
    { q: "Translate: « Y a-t-il un bus ? »", ex: "Question → change the order: Is there…?" },
    { q: "Translate: « Je n'ai pas d'argent. »", ex: "Negative → any." },
    { q: "Translate: « Combien ça coûte ? »", ex: "Prices → How much." }
  ]
},
55: {
  title: "Numbers, time and dates",
  subtitle: "Count, tell the time, say a date (very useful for the TOEIC too).",
  body: `
<h2>Numbers</h2>
<table>
<tr><th>Number</th><th>English</th><th>Number</th><th>English</th></tr>
<tr><td>1 · 2 · 3</td><td>one · two · three</td><td>13 · 30</td><td>thirteen · thirty</td></tr>
<tr><td>4 · 5 · 6</td><td>four · five · six</td><td>14 · 40</td><td>fourteen · forty</td></tr>
<tr><td>7 · 8 · 9</td><td>seven · eight · nine</td><td>15 · 50</td><td>fifteen · fifty</td></tr>
<tr><td>10 · 11 · 12</td><td>ten · eleven · twelve</td><td>21 · 99</td><td>twenty-one · ninety-nine</td></tr>
<tr><td>100</td><td>a hundred</td><td>1,000</td><td>a thousand</td></tr>
</table>
<div class="warn"><b>thirteen</b> (13) and <b>thirty</b> (30) sound similar. In <s-en>thirteen</s-en>, the stress is at the end: thir-<b>TEEN</b>. In <s-en>thirty</s-en>, it's at the start: <b>THIR</b>-ty. This is a classic listening trap.</div>
<div class="tip">The comma and the point are the opposite of French: <s-en>2.5</s-en> is “two point five” (2,5 in French), and <s-en>1,000</s-en> is a thousand.</div>
<h2>Telling the time</h2>
<p><s-en>What time is it?</s-en> — <s-en>It's seven o'clock.</s-en></p>
<table>
<tr><th>Time</th><th>Classic way</th><th>Digital way</th></tr>
<tr><td>7:15</td><td>quarter past seven</td><td>seven fifteen</td></tr>
<tr><td>7:30</td><td>half past seven</td><td>seven thirty</td></tr>
<tr><td>7:45</td><td>quarter to eight</td><td>seven forty-five</td></tr>
<tr><td>7:10</td><td>ten past seven</td><td>seven ten</td></tr>
<tr><td>7:50</td><td>ten to eight</td><td>seven fifty</td></tr>
</table>
<p>People rarely use the 24-hour clock when they speak: <b>a.m.</b> = morning, <b>p.m.</b> = afternoon and evening. <s-en>The meeting is at 3 p.m.</s-en></p>
<h2>Dates</h2>
<p>For dates, use ordinal numbers: <s-en>first, second, third, fourth, fifth</s-en>, then add <b>-th</b> (sixth, tenth, twentieth), except twenty-<b>first</b>, twenty-<b>second</b>, twenty-<b>third</b>.</p>
<p><s-en>My birthday is on the twelfth of March.</s-en> (UK) · <s-en>March twelfth</s-en> (US)</p>
<p>Say years in pairs: <s-en>1994</s-en> = “nineteen ninety-four”, <s-en>2025</s-en> = “twenty twenty-five”.</p>
<div class="tip">Days and months always start with a capital letter: <s-en>Monday</s-en>, <s-en>March</s-en>.</div>
`,
  quiz: [
    { q: "How do you say 7:30?", ex: "Half past = and a half." },
    { q: "How do you say 8:45?", ex: "Quarter to nine = 15 minutes before nine." },
    { q: "How do you say « le 3 mai »?", ex: "Ordinal number: third." },
    { q: "How do you write « 2,5 millions » in English?", ex: "English uses a point where French uses a comma." },
    { q: "Where is the stress in “fifteen”?", ex: "Numbers in -teen are stressed at the end." }
  ]
},
56: {
  title: "The imperative: Sit down! Don't worry! Let's go!",
  subtitle: "Give instructions and advice, make suggestions.",
  body: `
<h2>The imperative: just the verb</h2>
<p>This is the simplest form in English: the base verb, with no subject.</p>
<p><s-en>Sit down.</s-en> · <s-en>Open the window, please.</s-en> · <s-en>Turn left.</s-en></p>
<h2>Negative: Don't</h2>
<p><s-en>Don't worry!</s-en> · <s-en>Don't touch that!</s-en></p>
<h2>Suggestions: Let's</h2>
<p><b>Let's</b> (= let us) = « allons-y », « faisons » : <s-en>Let's go!</s-en> · <s-en>Let's have lunch.</s-en> · <s-en>Let's not talk about it.</s-en></p>
<h2>Be polite</h2>
<p>The imperative can sound a bit direct. Add <b>please</b>, or use a question:</p>
<p><s-en>Close the door, please.</s-en> → <s-en>Could you close the door, please?</s-en> (more polite)</p>
<div class="tip">The imperative is everywhere: recipes, directions, instructions, signs. In the TOEIC, announcements and instructions are full of it.</div>
`,
  quiz: [
    { q: "Translate: « Ne t'inquiète pas ! »", ex: "Negative imperative: Don't + verb." },
    { q: "Translate: « Allons au cinéma ! »", ex: "Let's = let us." },
    { q: "Which is the most polite?", ex: "A question with could + please is very polite." },
    { q: "Translate: « N'en parlons pas. »", ex: "Let's not + verb." }
  ]
},
57: {
  title: "Describe and connect: adjectives, and, but, because",
  subtitle: "Make richer sentences.",
  body: `
<h2>The adjective goes before the noun</h2>
<p><s-en>a red car</s-en> (une voiture rouge) · <s-en>an interesting book</s-en> · <s-en>a big old house</s-en></p>
<p>With <b>be</b>, it goes after: <s-en>The car is red.</s-en></p>
<div class="warn">Adjectives never change: <s-en>two red cars</s-en>, <s-en>she is tall</s-en>, <s-en>they are tall</s-en>.</div>
<h2>More than one adjective</h2>
<p>Natural order: <b>opinion → size → age → colour → origin</b>. <s-en>a beautiful little old French village</s-en>. In everyday life, two adjectives are enough: <s-en>a nice big flat</s-en>.</p>
<h2>Very, really, quite, a bit</h2>
<p><s-en>very good</s-en> · <s-en>really nice</s-en> · <s-en>quite expensive</s-en> (assez) · <s-en>a bit tired</s-en> (un peu, often negative)</p>
<h2>Connect your sentences</h2>
<table>
<tr><th>Word</th><th>French</th><th>Example</th></tr>
<tr><td>and</td><td>et</td><td>I like tea and coffee.</td></tr>
<tr><td>but</td><td>mais</td><td>It's small but cosy.</td></tr>
<tr><td>or</td><td>ou</td><td>Tea or coffee?</td></tr>
<tr><td>because</td><td>parce que</td><td>I'm tired because I worked late.</td></tr>
<tr><td>so</td><td>donc, alors</td><td>It was late, so I went home.</td></tr>
</table>
<div class="tip">With these five little words, your sentences stop sounding like a robot (<i>I am tired. I go home.</i>) and become natural (<s-en>I'm tired, so I'm going home.</s-en>).</div>
`,
  quiz: [
    { q: "Translate: « Une maison blanche »", ex: "The adjective goes before the noun." },
    { q: "Translate: « Deux grandes villes »", ex: "The adjective doesn't change." },
    { q: "Translate: « Il est fatigué parce qu'il a couru. »", ex: "Because = the reason." },
    { q: "Translate: « C'est petit mais confortable. »", ex: "But = opposition." }
  ]
}
});
