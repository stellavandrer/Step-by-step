/* Leçons ajoutées après la comparaison avec les référentiels de grammaire (2026-10-03) : B1 et B2.
   had better / would rather / prefer, make / let / allow, for / during / while et until / by,
   still / yet / already / anymore, so / such / quite, unless / in case / as long as / even if,
   temps du récit (had been doing, would), expressions + -ing. */
window.LESSONS.push(
{
  id: 87, after: 32, level: "B1", icon: "scale",
  title: "Had better, would rather, prefer: advice and preferences", title_fr: "Had better, would rather, prefer : conseils et préférences",
  subtitle: "You'd better go. I'd rather stay.", subtitle_fr: "Tu ferais mieux d'y aller. Je préfère rester.",
  body: `
<h2>Had better: strong advice</h2>
<p><b>had better + verb</b> (no to) gives advice for a specific situation, usually with a warning: something bad will happen otherwise. Despite “had”, it's about now or the future.</p>
<p><s-en>You'd better take an umbrella.</s-en> · <s-en>We'd better not be late.</s-en></p>
<p>Compare: <s-en>You should eat more vegetables.</s-en> (general advice) · <s-en>You'd better eat something now, or you'll feel ill.</s-en> (this situation, with a risk)</p>
<h2>Would rather: what I prefer right now</h2>
<p><b>would rather + verb</b> (no to), with <b>than</b> for the comparison:</p>
<p><s-en>I'd rather stay at home tonight.</s-en> · <s-en>I'd rather not talk about it.</s-en> · <s-en>I'd rather walk than take the bus.</s-en> · <s-en>Would you rather have tea or coffee?</s-en></p>
<h2>Prefer: a general preference</h2>
<p><b>prefer A to B</b>, with nouns or -ing: <s-en>I prefer tea to coffee.</s-en> · <s-en>I prefer walking to driving.</s-en></p>
<p>For one situation, <b>would prefer + to</b>: <s-en>I'd prefer to stay here.</s-en></p>
<table>
<tr><th>Structure</th><th>Use</th></tr>
<tr><td>You'd better + verb</td><td>strong advice for this situation</td></tr>
<tr><td>I'd rather + verb (than + verb)</td><td>preference in a specific situation</td></tr>
<tr><td>I prefer A to B · -ing to -ing</td><td>general preference</td></tr>
<tr><td>I'd prefer to + verb</td><td>specific preference, a little more formal</td></tr>
</table>
<div class="warn"><b>'d</b> means <b>had</b> in <i>you'd better</i>, but <b>would</b> in <i>I'd rather</i>. Never “you'd better to go”. And <b>than</b> goes with rather; with prefer, use <b>to</b>.</div>
`,
  body_fr: `
<h2>Had better : un conseil appuyé</h2>
<p><b>had better + verbe</b> (sans to) donne un conseil pour une situation précise, souvent avec une mise en garde : sinon, il y aura un problème. Malgré « had », on parle du présent ou du futur.</p>
<p><s-en>You'd better take an umbrella.</s-en> (Tu ferais mieux de prendre un parapluie.) · <s-en>We'd better not be late.</s-en> (On ferait mieux de ne pas être en retard.)</p>
<p>Compare : <s-en>You should eat more vegetables.</s-en> (conseil général) · <s-en>You'd better eat something now, or you'll feel ill.</s-en> (cette situation, avec un risque)</p>
<h2>Would rather : ce que je préfère, là</h2>
<p><b>would rather + verbe</b> (sans to), avec <b>than</b> pour comparer :</p>
<p><s-en>I'd rather stay at home tonight.</s-en> (Je préfère rester à la maison ce soir.) · <s-en>I'd rather not talk about it.</s-en> · <s-en>I'd rather walk than take the bus.</s-en> · <s-en>Would you rather have tea or coffee?</s-en></p>
<h2>Prefer : une préférence générale</h2>
<p><b>prefer A to B</b>, avec un nom ou -ing : <s-en>I prefer tea to coffee.</s-en> · <s-en>I prefer walking to driving.</s-en></p>
<p>Pour une situation précise, <b>would prefer + to</b> : <s-en>I'd prefer to stay here.</s-en> (Je préférerais rester ici.)</p>
<table>
<tr><th>Structure</th><th>Usage</th></tr>
<tr><td>You'd better + verbe</td><td>conseil appuyé pour cette situation</td></tr>
<tr><td>I'd rather + verbe (than + verbe)</td><td>préférence dans une situation précise</td></tr>
<tr><td>I prefer A to B · -ing to -ing</td><td>préférence générale</td></tr>
<tr><td>I'd prefer to + verbe</td><td>préférence précise, un peu plus soutenue</td></tr>
</table>
<div class="warn"><b>'d</b> veut dire <b>had</b> dans <i>you'd better</i>, mais <b>would</b> dans <i>I'd rather</i>. Jamais « you'd better to go ». Et <b>than</b> va avec rather ; avec prefer, on dit <b>to</b>.</div>
`,
  examples: [
    ["You'd better hurry: the shop closes at six.", "Tu ferais mieux de te dépêcher : le magasin ferme à six heures."],
    ["I'd rather not say.", "Je préfère ne pas le dire."],
    ["Would you rather live in the city or in the country?", "Tu préférerais vivre en ville ou à la campagne ?"],
    ["I prefer reading to watching TV.", "Je préfère lire plutôt que regarder la télé."],
    ["We'd better leave now, or we'll miss the train.", "On ferait mieux de partir maintenant, sinon on va rater le train."]
  ],
  quiz: [
    { q: "Translate: « Tu ferais mieux de te reposer. »", q_fr: "Traduis : « Tu ferais mieux de te reposer. »", o: ["You'd better rest.", "You'd better to rest.", "You'd better resting."], a: 0, ex: "had better + verb, without to.", ex_fr: "had better + verbe, sans to." },
    { q: "Complete: “I'd rather walk ___ take the bus.”", q_fr: "Complète : « I'd rather walk ___ take the bus. »", o: ["than", "to", "that"], a: 0, ex: "would rather … than …", ex_fr: "would rather … than …" },
    { q: "Complete: “I prefer tea ___ coffee.”", q_fr: "Complète : « I prefer tea ___ coffee. »", o: ["to", "than", "that"], a: 0, ex: "prefer A to B.", ex_fr: "prefer A to B." },
    { q: "Translate: « On ferait mieux de ne pas être en retard. »", q_fr: "Traduis : « On ferait mieux de ne pas être en retard. »", o: ["We'd better not be late.", "We'd not better be late.", "We hadn't better be late."], a: 0, ex: "The negative: had better not.", ex_fr: "La négation : had better not." },
    { q: "Translate: « Je préférerais rester ici. »", q_fr: "Traduis : « Je préférerais rester ici. »", o: ["I'd rather stay here.", "I'd rather to stay here.", "I'd prefer stay here."], a: 0, ex: "would rather + verb (or would prefer to + verb).", ex_fr: "would rather + verbe (ou would prefer to + verbe)." }
  ]
},
{
  id: 88, after: 66, level: "B1", icon: "hand",
  title: "Make, let, allow, help: getting people to do things", title_fr: "Make, let, allow, help : faire faire, laisser faire",
  subtitle: "My boss made me stay late. My parents let me go.", subtitle_fr: "Mon chef m'a fait rester tard. Mes parents m'ont laissée y aller.",
  body: `
<h2>Make someone do: force or cause</h2>
<p><b>make + person + verb</b> (no to): <s-en>My boss made me work on Saturday.</s-en> · <s-en>This film always makes me cry.</s-en></p>
<p>In the passive, <b>to</b> appears: <s-en>I was made to wait for an hour.</s-en></p>
<h2>Let someone do: permission</h2>
<p><b>let + person + verb</b> (no to): <s-en>My parents let me go to the party.</s-en> · <s-en>Let me help you.</s-en> Let has no passive: use <b>be allowed to</b>.</p>
<h2>Allow someone to do: permission, more formal</h2>
<p><s-en>The company allows us to work from home.</s-en> · <s-en>We're not allowed to park here.</s-en></p>
<h2>Help someone (to) do</h2>
<p>Both are correct: <s-en>Can you help me carry this?</s-en> = <s-en>Can you help me to carry this?</s-en></p>
<h2>Get someone to do: persuade</h2>
<p><s-en>I got my brother to fix my bike.</s-en> (I asked and he did it.)</p>
<table>
<tr><th>Without to</th><th>With to</th><th>Both</th></tr>
<tr><td>make, let</td><td>allow, get, be allowed, be made</td><td>help</td></tr>
</table>
<div class="warn">«&nbsp;Il m'a fait rire&nbsp;» = <s-en>He made me laugh.</s-en>, never “made me to laugh” or “did me laugh”. And «&nbsp;faire réparer sa voiture&nbsp;» is a different structure: <s-en>have the car repaired</s-en> (see the lesson on the advanced passive).</div>
`,
  body_fr: `
<h2>Make someone do : obliger ou provoquer</h2>
<p><b>make + personne + verbe</b> (sans to) : <s-en>My boss made me work on Saturday.</s-en> (Mon chef m'a fait travailler samedi.) · <s-en>This film always makes me cry.</s-en> (Ce film me fait toujours pleurer.)</p>
<p>Au passif, <b>to</b> apparaît : <s-en>I was made to wait for an hour.</s-en> (On m'a fait attendre une heure.)</p>
<h2>Let someone do : laisser, permettre</h2>
<p><b>let + personne + verbe</b> (sans to) : <s-en>My parents let me go to the party.</s-en> · <s-en>Let me help you.</s-en> Let n'a pas de passif : on utilise <b>be allowed to</b>.</p>
<h2>Allow someone to do : autoriser, plus soutenu</h2>
<p><s-en>The company allows us to work from home.</s-en> · <s-en>We're not allowed to park here.</s-en> (On n'a pas le droit de se garer ici.)</p>
<h2>Help someone (to) do</h2>
<p>Les deux sont corrects : <s-en>Can you help me carry this?</s-en> = <s-en>Can you help me to carry this?</s-en></p>
<h2>Get someone to do : obtenir que quelqu'un fasse</h2>
<p><s-en>I got my brother to fix my bike.</s-en> (J'ai demandé à mon frère, et il a réparé mon vélo.)</p>
<table>
<tr><th>Sans to</th><th>Avec to</th><th>Les deux</th></tr>
<tr><td>make, let</td><td>allow, get, be allowed, be made</td><td>help</td></tr>
</table>
<div class="warn">« Il m'a fait rire » = <s-en>He made me laugh.</s-en>, jamais « made me to laugh » ni « did me laugh ». Et « faire réparer sa voiture » est une autre structure : <s-en>have the car repaired</s-en> (voir la leçon sur le passif avancé).</div>
`,
  examples: [
    ["Our teacher made us rewrite the essay.", "Notre professeur nous a fait réécrire la dissertation."],
    ["Let me know if you need anything.", "Dis-moi si tu as besoin de quoi que ce soit."],
    ["Smoking isn't allowed here.", "Il est interdit de fumer ici."],
    ["She helped me find a flat.", "Elle m'a aidée à trouver un appartement."],
    ["That joke made everyone laugh.", "Cette blague a fait rire tout le monde."]
  ],
  quiz: [
    { q: "Translate: « Il m'a fait attendre. »", q_fr: "Traduis : « Il m'a fait attendre. »", o: ["He made me wait.", "He made me to wait.", "He did me wait."], a: 0, ex: "make + person + verb without to.", ex_fr: "make + personne + verbe sans to." },
    { q: "Complete: “My parents were strict: they didn't ___ me go out on weekdays.”", q_fr: "Complète : « My parents were strict: they didn't ___ me go out on weekdays. »", o: ["let", "allow", "permit"], a: 0, ex: "let + person + verb (allow and permit need to).", ex_fr: "let + personne + verbe (allow et permit demandent to)." },
    { q: "Complete: “We aren't allowed ___ photos in the museum.”", q_fr: "Complète : « We aren't allowed ___ photos in the museum. »", o: ["to take", "take", "taking"], a: 0, ex: "be allowed to + verb.", ex_fr: "be allowed to + verbe." },
    { q: "Translate: « On m'a fait payer deux fois. »", q_fr: "Traduis : « On m'a fait payer deux fois. »", o: ["I was made to pay twice.", "I was made pay twice.", "I was let to pay twice."], a: 0, ex: "Passive of make: be made to + verb.", ex_fr: "Passif de make : be made to + verbe." },
    { q: "Complete: “I got my sister ___ me with the move.”", q_fr: "Complète : « I got my sister ___ me with the move. »", o: ["to help", "help", "helped"], a: 0, ex: "get + person + to + verb.", ex_fr: "get + personne + to + verbe." }
  ]
},
{
  id: 92, after: 25, level: "B1", icon: "hourglass",
  title: "For, during or while? Until or by?", title_fr: "For, during ou while ? Until ou by ?",
  subtitle: "For two hours, during the film, while I was out; until or by?", subtitle_fr: "Traduire « pendant » et « jusqu'à ».",
  body: `
<h2>Three ways to say « pendant »</h2>
<table>
<tr><th>Word</th><th>Followed by</th><th>Example</th></tr>
<tr><td>for</td><td>a duration (how long?)</td><td>I slept for eight hours.</td></tr>
<tr><td>during</td><td>a noun (when?)</td><td>I woke up during the night.</td></tr>
<tr><td>while</td><td>a subject + verb</td><td>The phone rang while I was in the shower.</td></tr>
</table>
<div class="warn">“during two hours” is wrong: a duration always takes <b>for</b>. <s-en>We talked for two hours during the meeting.</s-en></div>
<h2>Until or by? « jusqu'à » or « d'ici »</h2>
<p><b>until</b> (or till): something continues up to that moment: <s-en>The shop is open until 8 p.m.</s-en> · <s-en>I'll wait until you arrive.</s-en></p>
<p><b>by</b>: a deadline, not later than: <s-en>Please send it by Friday.</s-en> · <s-en>I'll be home by six.</s-en></p>
<h2>Ago: « il y a »</h2>
<p><s-en>I moved here three years ago.</s-en> (past simple) Compare: <s-en>I've lived here for three years.</s-en> (present perfect: it's still true)</p>
<div class="tip">After until, while, when and as soon as, use the present for the future: <s-en>Wait here until I come back.</s-en> (not “will come”).</div>
`,
  body_fr: `
<h2>Trois façons de dire « pendant »</h2>
<table>
<tr><th>Mot</th><th>Suivi de</th><th>Exemple</th></tr>
<tr><td>for</td><td>une durée (combien de temps ?)</td><td>I slept for eight hours. (J'ai dormi huit heures.)</td></tr>
<tr><td>during</td><td>un nom (quand ?)</td><td>I woke up during the night. (Je me suis réveillée pendant la nuit.)</td></tr>
<tr><td>while</td><td>sujet + verbe</td><td>The phone rang while I was in the shower. (Le téléphone a sonné pendant que j'étais sous la douche.)</td></tr>
</table>
<div class="warn">« during two hours » est faux : une durée se dit toujours avec <b>for</b>. <s-en>We talked for two hours during the meeting.</s-en></div>
<h2>Until ou by ? « jusqu'à » ou « d'ici »</h2>
<p><b>until</b> (ou till) : quelque chose continue jusqu'à ce moment : <s-en>The shop is open until 8 p.m.</s-en> · <s-en>I'll wait until you arrive.</s-en> (J'attendrai jusqu'à ce que tu arrives.)</p>
<p><b>by</b> : une échéance, au plus tard : <s-en>Please send it by Friday.</s-en> (Envoie-le d'ici vendredi.) · <s-en>I'll be home by six.</s-en> (Je serai rentrée pour six heures.)</p>
<h2>Ago : « il y a »</h2>
<p><s-en>I moved here three years ago.</s-en> (prétérit) Compare : <s-en>I've lived here for three years.</s-en> (present perfect : c'est toujours vrai)</p>
<div class="tip">Après until, while, when et as soon as, on met le présent pour parler du futur : <s-en>Wait here until I come back.</s-en> (pas « will come »).</div>
`,
  examples: [
    ["We lived in Spain for two years.", "Nous avons vécu deux ans en Espagne."],
    ["Please don't talk during the film.", "S'il te plaît, ne parle pas pendant le film."],
    ["Someone stole my bag while I was asleep.", "Quelqu'un m'a volé mon sac pendant que je dormais."],
    ["The museum is open until six.", "Le musée est ouvert jusqu'à six heures."],
    ["Can you finish the report by Monday?", "Tu peux finir le rapport d'ici lundi ?"]
  ],
  quiz: [
    { q: "Translate: « J'ai attendu pendant une heure. »", q_fr: "Traduis : « J'ai attendu pendant une heure. »", o: ["I waited for an hour.", "I waited during an hour.", "I waited while an hour."], a: 0, ex: "A duration: for.", ex_fr: "Une durée : for." },
    { q: "Complete: “I fell asleep ___ the film.”", q_fr: "Complète : « I fell asleep ___ the film. »", o: ["during", "for", "while"], a: 0, ex: "during + noun.", ex_fr: "during + nom." },
    { q: "Complete: “He called ___ I was cooking.”", q_fr: "Complète : « He called ___ I was cooking. »", o: ["while", "during", "for"], a: 0, ex: "while + subject + verb.", ex_fr: "while + sujet + verbe." },
    { q: "Translate: « Envoie-le-moi d'ici vendredi. »", q_fr: "Traduis : « Envoie-le-moi d'ici vendredi. »", o: ["Send it to me by Friday.", "Send it to me until Friday.", "Send it to me during Friday."], a: 0, ex: "A deadline: by.", ex_fr: "Une échéance : by." },
    { q: "Complete: “I'll stay here ___ you come back.”", q_fr: "Complète : « I'll stay here ___ you come back. »", o: ["until", "by", "for"], a: 0, ex: "Something continues up to a moment: until.", ex_fr: "Quelque chose continue jusqu'à un moment : until." }
  ]
},
{
  id: 93, after: 24, level: "B1", icon: "timer",
  title: "Still, yet, already, anymore", title_fr: "Still, yet, already, anymore : encore, déjà, plus",
  subtitle: "Is it still raining? Not yet. Not anymore.", subtitle_fr: "Il pleut toujours ? Pas encore. Plus maintenant.",
  body: `
<h2>Still: something continues</h2>
<p><s-en>Are you still working?</s-en> · <s-en>It's still raining.</s-en></p>
<p>Position: before the main verb, after <b>be</b>: <s-en>She still lives with her parents.</s-en> · <s-en>He's still asleep.</s-en> In the negative, before the auxiliary: <s-en>I still don't understand.</s-en></p>
<h2>Yet: something expected hasn't happened</h2>
<p>At the end of negatives and questions: <s-en>I haven't finished yet.</s-en> · <s-en>Have you eaten yet?</s-en></p>
<h2>Already: sooner than expected</h2>
<p><s-en>I've already seen this film.</s-en> · <s-en>Are you leaving already?</s-en></p>
<h2>Not … anymore / no longer: something has stopped</h2>
<p><s-en>I don't live there anymore.</s-en> (British English also writes “any more”.) More formal: <s-en>I no longer live there.</s-en></p>
<table>
<tr><th>French</th><th>English</th></tr>
<tr><td class="no-tx">encore, toujours (ça continue)</td><td>still</td></tr>
<tr><td class="no-tx">pas encore</td><td>not yet</td></tr>
<tr><td class="no-tx">déjà</td><td>already (yet in questions)</td></tr>
<tr><td class="no-tx">ne… plus</td><td>not … anymore · no longer</td></tr>
</table>
<div class="warn">«&nbsp;encore&nbsp;» has three translations: <b>still</b> (it continues), <b>again</b> (one more time: <s-en>Say it again.</s-en>) and <b>another / more</b> (<s-en>another coffee</s-en>, <s-en>more bread</s-en>). And «&nbsp;ne… plus&nbsp;» is never “more”: «&nbsp;Je n'ai plus d'argent&nbsp;» = <s-en>I haven't got any money left.</s-en></div>
<div class="tip"><s-en>He still hasn't called!</s-en> sounds impatient; <s-en>He hasn't called yet.</s-en> is neutral.</div>
`,
  body_fr: `
<h2>Still : ça continue</h2>
<p><s-en>Are you still working?</s-en> (Tu travailles encore ?) · <s-en>It's still raining.</s-en> (Il pleut toujours.)</p>
<p>Place : avant le verbe principal, après <b>be</b> : <s-en>She still lives with her parents.</s-en> · <s-en>He's still asleep.</s-en> À la négation, avant l'auxiliaire : <s-en>I still don't understand.</s-en> (Je ne comprends toujours pas.)</p>
<h2>Yet : ce qu'on attend n'est pas encore arrivé</h2>
<p>En fin de phrase négative ou de question : <s-en>I haven't finished yet.</s-en> (Je n'ai pas encore fini.) · <s-en>Have you eaten yet?</s-en> (Tu as déjà mangé ?)</p>
<h2>Already : plus tôt que prévu</h2>
<p><s-en>I've already seen this film.</s-en> (J'ai déjà vu ce film.) · <s-en>Are you leaving already?</s-en> (Tu pars déjà ?)</p>
<h2>Not … anymore / no longer : c'est fini</h2>
<p><s-en>I don't live there anymore.</s-en> (Je n'habite plus là-bas. L'anglais britannique écrit aussi « any more ».) Plus soutenu : <s-en>I no longer live there.</s-en></p>
<table>
<tr><th>Français</th><th>Anglais</th></tr>
<tr><td>encore, toujours (ça continue)</td><td>still</td></tr>
<tr><td>pas encore</td><td>not yet</td></tr>
<tr><td>déjà</td><td>already (yet dans les questions)</td></tr>
<tr><td>ne… plus</td><td>not … anymore · no longer</td></tr>
</table>
<div class="warn">« encore » a trois traductions : <b>still</b> (ça continue), <b>again</b> (une fois de plus : <s-en>Say it again.</s-en>) et <b>another / more</b> (<s-en>another coffee</s-en>, <s-en>more bread</s-en>). Et « ne… plus » ne se dit jamais « more » : « Je n'ai plus d'argent » = <s-en>I haven't got any money left.</s-en></div>
<div class="tip"><s-en>He still hasn't called!</s-en> exprime l'impatience ; <s-en>He hasn't called yet.</s-en> est neutre.</div>
`,
  examples: [
    ["Do you still play the piano?", "Tu joues encore du piano ?"],
    ["Is dinner ready yet?", "Le dîner est prêt ?"],
    ["I've already told you twice.", "Je te l'ai déjà dit deux fois."],
    ["We don't see each other anymore.", "On ne se voit plus."],
    ["Can you say that again?", "Tu peux répéter ?"]
  ],
  quiz: [
    { q: "Translate: « Il dort toujours. »", q_fr: "Traduis : « Il dort toujours. »", o: ["He's still sleeping.", "He's yet sleeping.", "He's sleeping already."], a: 0, ex: "It continues: still.", ex_fr: "Ça continue : still." },
    { q: "Complete: “I haven't finished ___.”", q_fr: "Complète : « I haven't finished ___. »", o: ["yet", "still", "already"], a: 0, ex: "Not yet: at the end of the negative.", ex_fr: "Pas encore : yet, en fin de phrase négative." },
    { q: "Translate: « Je ne fume plus. »", q_fr: "Traduis : « Je ne fume plus. »", o: ["I don't smoke anymore.", "I don't smoke more.", "I don't smoke yet."], a: 0, ex: "Something that has stopped: not … anymore.", ex_fr: "ne… plus = not … anymore." },
    { q: "Translate: « Encore un café, s'il vous plaît. »", q_fr: "Traduis : « Encore un café, s'il vous plaît. »", o: ["Another coffee, please.", "Still a coffee, please.", "Again a coffee, please."], a: 0, ex: "One more: another.", ex_fr: "Un de plus : another." },
    { q: "Complete: “You're ___ here? I thought you'd come later!”", q_fr: "Complète : « You're ___ here? I thought you'd come later! »", o: ["already", "yet", "anymore"], a: 0, ex: "Sooner than expected: already.", ex_fr: "Plus tôt que prévu : already." }
  ]
},
{
  id: 95, after: 92, level: "B1", icon: "zap",
  title: "So, such, quite, rather: how strong?", title_fr: "So, such, quite, rather : doser l'intensité",
  subtitle: "It was so good! It was such a good day.", subtitle_fr: "C'était tellement bien ! Une si belle journée.",
  body: `
<h2>So + adjective, such + noun</h2>
<p><b>so</b> + adjective or adverb: <s-en>It's so hot today!</s-en> · <s-en>You speak so quickly.</s-en></p>
<p><b>such (a)</b> + adjective + noun: <s-en>It was such a nice day.</s-en> · <s-en>They're such good friends.</s-en> · <s-en>such good weather</s-en> (no “a” with plurals and uncountable nouns)</p>
<p>With quantities: <s-en>so many people</s-en> · <s-en>so much time</s-en></p>
<h2>So … that / such … that: the result</h2>
<p><s-en>It was so cold that we stayed inside.</s-en> · <s-en>It was such a cold day that we stayed inside.</s-en></p>
<div class="warn">«&nbsp;tellement&nbsp;» = <b>so</b> before an adjective, <b>such</b> before a noun. Never “so a nice day” or “such nice day”.</div>
<h2>Quite, pretty, rather, fairly: moderate</h2>
<ul>
<li><b>quite</b>: <s-en>The film was quite good.</s-en> (good, but not amazing) · <s-en>It's quite a long way.</s-en></li>
<li><b>pretty</b> (informal): <s-en>That's pretty good!</s-en></li>
<li><b>rather</b> (often for something negative or surprising): <s-en>It's rather expensive.</s-en></li>
<li><b>fairly</b> (mild): <s-en>I'm fairly sure.</s-en></li>
</ul>
<h2>Strong adjectives</h2>
<p>With extreme adjectives (amazing, perfect, exhausted, delicious), use <b>absolutely</b> or <b>really</b>, not very: <s-en>It was absolutely amazing.</s-en> With them, quite means “completely”: <s-en>You're quite right.</s-en></p>
<div class="tip">In British English, “quite good” said in a flat voice can sound disappointed. Your intonation changes the meaning.</div>
`,
  body_fr: `
<h2>So + adjectif, such + nom</h2>
<p><b>so</b> + adjectif ou adverbe : <s-en>It's so hot today!</s-en> (Il fait tellement chaud !) · <s-en>You speak so quickly.</s-en></p>
<p><b>such (a)</b> + adjectif + nom : <s-en>It was such a nice day.</s-en> (C'était une si belle journée.) · <s-en>They're such good friends.</s-en> · <s-en>such good weather</s-en> (pas de « a » au pluriel ni avec un indénombrable)</p>
<p>Avec les quantités : <s-en>so many people</s-en> (tellement de monde) · <s-en>so much time</s-en></p>
<h2>So … that / such … that : la conséquence</h2>
<p><s-en>It was so cold that we stayed inside.</s-en> (Il faisait si froid que nous sommes restés à l'intérieur.) · <s-en>It was such a cold day that we stayed inside.</s-en></p>
<div class="warn">« tellement » = <b>so</b> devant un adjectif, <b>such</b> devant un nom. Jamais « so a nice day » ni « such nice day ».</div>
<h2>Quite, pretty, rather, fairly : une intensité modérée</h2>
<ul>
<li><b>quite</b> (assez) : <s-en>The film was quite good.</s-en> (pas mal, sans plus) · <s-en>It's quite a long way.</s-en> (C'est assez loin.)</li>
<li><b>pretty</b> (familier, plutôt) : <s-en>That's pretty good!</s-en></li>
<li><b>rather</b> (plutôt, souvent pour du négatif ou du surprenant) : <s-en>It's rather expensive.</s-en></li>
<li><b>fairly</b> (assez, léger) : <s-en>I'm fairly sure.</s-en></li>
</ul>
<h2>Les adjectifs forts</h2>
<p>Avec les adjectifs extrêmes (amazing, perfect, exhausted, delicious), on dit <b>absolutely</b> ou <b>really</b>, pas very : <s-en>It was absolutely amazing.</s-en> Avec eux, quite veut dire « tout à fait » : <s-en>You're quite right.</s-en> (Tu as tout à fait raison.)</p>
<div class="tip">En anglais britannique, « quite good » dit d'une voix plate peut sonner déçu. L'intonation change le sens.</div>
`,
  examples: [
    ["I'm so tired!", "Je suis tellement fatiguée !"],
    ["It was such a beautiful place.", "C'était un endroit tellement beau."],
    ["There were so many people that we couldn't get in.", "Il y avait tellement de monde qu'on n'a pas pu entrer."],
    ["The exam was pretty easy.", "L'examen était plutôt facile."],
    ["You're absolutely right.", "Tu as entièrement raison."]
  ],
  quiz: [
    { q: "Translate: « C'était une si belle journée ! »", q_fr: "Traduis : « C'était une si belle journée ! »", o: ["It was such a beautiful day!", "It was so a beautiful day!", "It was such beautiful day!"], a: 0, ex: "such a + adjective + noun.", ex_fr: "such a + adjectif + nom." },
    { q: "Complete: “The film was ___ long that I fell asleep.”", q_fr: "Complète : « The film was ___ long that I fell asleep. »", o: ["so", "such", "such a"], a: 0, ex: "so + adjective (+ that).", ex_fr: "so + adjectif (+ that)." },
    { q: "Complete: “There were ___ people at the concert!”", q_fr: "Complète : « There were ___ people at the concert! »", o: ["so many", "so much", "such much"], a: 0, ex: "People can be counted: so many.", ex_fr: "People se compte : so many." },
    { q: "Which is correct?", q_fr: "Quelle phrase est correcte ?", o: ["The view was absolutely amazing.", "The view was very amazing."], a: 0, ex: "Strong adjectives take absolutely or really, not very.", ex_fr: "Les adjectifs forts se construisent avec absolutely ou really, pas very." },
    { q: "Translate: « Je suis assez sûre. »", q_fr: "Traduis : « Je suis assez sûre. »", o: ["I'm fairly sure.", "I'm enough sure.", "I'm enough of sure."], a: 0, ex: "Before an adjective: fairly, quite or pretty.", ex_fr: "« assez » devant un adjectif : fairly, quite, pretty." }
  ]
},
{
  id: 89, after: 35, level: "B2", icon: "umbrella",
  title: "Unless, in case, as long as, even if", title_fr: "Unless, in case, as long as, even if : les autres conditions",
  subtitle: "Conditions, precautions and concessions.", subtitle_fr: "Condition, précaution, concession.",
  body: `
<h2>Unless = if … not</h2>
<p><s-en>I'll go unless it rains.</s-en> (= if it doesn't rain) · <s-en>You can't come in unless you have a ticket.</s-en></p>
<p>Unless already contains the negative: don't add <b>not</b>.</p>
<h2>In case = as a precaution</h2>
<p><s-en>Take an umbrella in case it rains.</s-en> (now, just in case) Compare: <s-en>Take an umbrella if it rains.</s-en> (only when it rains)</p>
<p>In the past: <s-en>I took some cash in case the card didn't work.</s-en></p>
<h2>As long as / provided (that) = only on this condition</h2>
<p><s-en>I'll lend you the money as long as you pay me back next week.</s-en> · <s-en>You can come provided you're on time.</s-en></p>
<h2>Even if or even though?</h2>
<p><b>even if</b> = a hypothesis, it doesn't matter whether: <s-en>I'm going out even if it rains.</s-en></p>
<p><b>even though</b> = a fact, like although: <s-en>Even though it was raining, we went out.</s-en></p>
<table>
<tr><th>English</th><th>French</th></tr>
<tr><td>unless</td><td class="no-tx">sauf si, à moins que</td></tr>
<tr><td>in case</td><td class="no-tx">au cas où</td></tr>
<tr><td>as long as · provided (that)</td><td class="no-tx">du moment que · à condition que</td></tr>
<tr><td>even if</td><td class="no-tx">même si (hypothèse)</td></tr>
<tr><td>even though</td><td class="no-tx">même si, bien que (fait réel)</td></tr>
</table>
<div class="warn">After all these words, as after <b>if</b>, use the present for the future: <s-en>in case it rains</s-en>, never “in case it will rain”.</div>
`,
  body_fr: `
<h2>Unless = if … not (sauf si)</h2>
<p><s-en>I'll go unless it rains.</s-en> (J'irai, sauf s'il pleut.) · <s-en>You can't come in unless you have a ticket.</s-en></p>
<p>Unless contient déjà la négation : on n'ajoute pas <b>not</b>.</p>
<h2>In case = par précaution (au cas où)</h2>
<p><s-en>Take an umbrella in case it rains.</s-en> (maintenant, au cas où) Compare : <s-en>Take an umbrella if it rains.</s-en> (seulement s'il pleut)</p>
<p>Au passé : <s-en>I took some cash in case the card didn't work.</s-en></p>
<h2>As long as / provided (that) = seulement à cette condition</h2>
<p><s-en>I'll lend you the money as long as you pay me back next week.</s-en> (du moment que tu me rembourses) · <s-en>You can come provided you're on time.</s-en></p>
<h2>Even if ou even though ?</h2>
<p><b>even if</b> = une hypothèse, peu importe : <s-en>I'm going out even if it rains.</s-en> (Je sors, même s'il pleut.)</p>
<p><b>even though</b> = un fait réel, comme although : <s-en>Even though it was raining, we went out.</s-en> (Bien qu'il pleuve, nous sommes sortis.)</p>
<table>
<tr><th>Anglais</th><th>Français</th></tr>
<tr><td>unless</td><td>sauf si, à moins que</td></tr>
<tr><td>in case</td><td>au cas où</td></tr>
<tr><td>as long as · provided (that)</td><td>du moment que · à condition que</td></tr>
<tr><td>even if</td><td>même si (hypothèse)</td></tr>
<tr><td>even though</td><td>même si, bien que (fait réel)</td></tr>
</table>
<div class="warn">Après tous ces mots, comme après <b>if</b>, on met le présent pour parler du futur : <s-en>in case it rains</s-en>, jamais « in case it will rain ».</div>
`,
  examples: [
    ["We'll miss the train unless we leave now.", "On va rater le train si on ne part pas maintenant."],
    ["Write down my number in case you get lost.", "Note mon numéro au cas où tu te perdrais."],
    ["I'll lend you my car as long as you're careful.", "Je te prête ma voiture du moment que tu fais attention."],
    ["Even if I had the money, I wouldn't buy it.", "Même si j'avais l'argent, je ne l'achèterais pas."],
    ["Even though she was tired, she finished the race.", "Bien qu'elle soit fatiguée, elle a fini la course."]
  ],
  quiz: [
    { q: "Translate: « Je viendrai, sauf si je suis malade. »", q_fr: "Traduis : « Je viendrai, sauf si je suis malade. »", o: ["I'll come unless I'm ill.", "I'll come unless I'm not ill.", "I'll come unless I'll be ill."], a: 0, ex: "unless = if not; present for the future.", ex_fr: "unless = if not ; présent pour le futur." },
    { q: "Complete: “Take a jacket ___ it gets cold later.”", q_fr: "Complète : « Take a jacket ___ it gets cold later. »", o: ["in case", "unless", "even though"], a: 0, ex: "A precaution: in case.", ex_fr: "Une précaution : in case." },
    { q: "Complete: “You can use my laptop ___ you don't install anything.”", q_fr: "Complète : « You can use my laptop ___ you don't install anything. »", o: ["as long as", "unless", "in case"], a: 0, ex: "Only on this condition: as long as.", ex_fr: "Seulement à cette condition : as long as." },
    { q: "Translate: « Même s'il pleut, on ira. »", q_fr: "Traduis : « Même s'il pleut, on ira. »", o: ["Even if it rains, we'll go.", "Even though it rains, we'll go.", "Even if it will rain, we'll go."], a: 0, ex: "A hypothesis: even if + present.", ex_fr: "Une hypothèse : even if + présent." },
    { q: "Complete: “___ he's lived here for years, he still gets lost.”", q_fr: "Complète : « ___ he's lived here for years, he still gets lost. »", o: ["Even though", "Even if", "Unless"], a: 0, ex: "A real fact: even though.", ex_fr: "Un fait réel : even though." }
  ]
},
{
  id: 90, after: 38, level: "B2", icon: "history",
  title: "Telling a story: had been doing, used to and would", title_fr: "Raconter : had been doing, used to et would",
  subtitle: "All the past tenses you need for a narrative.", subtitle_fr: "Tous les temps du passé pour raconter.",
  body: `
<h2>The four narrative tenses</h2>
<table>
<tr><th>Tense</th><th>Use</th><th>Example</th></tr>
<tr><td>past simple</td><td>the main events, in order</td><td>I opened the door and walked in.</td></tr>
<tr><td>past continuous</td><td>the background, actions in progress</td><td>It was raining and people were hurrying home.</td></tr>
<tr><td>past perfect</td><td>something that happened earlier</td><td>Someone had broken the window.</td></tr>
<tr><td>past perfect continuous</td><td>an activity that had been going on up to that moment</td><td>She had been crying: her eyes were red.</td></tr>
</table>
<p><s-en>We had been driving for six hours when the car broke down.</s-en></p>
<h2>Had been doing or had done?</h2>
<p><b>had been doing</b> = the activity and its duration, often with visible results: <s-en>I had been painting the kitchen, so I was covered in paint.</s-en></p>
<p><b>had done</b> = a completed result: <s-en>I had painted the kitchen, so it looked new.</s-en></p>
<p>State verbs stay simple: <s-en>I had known her for years.</s-en> (not “had been knowing”)</p>
<h2>Past habits: used to and would</h2>
<p><s-en>When I was a child, we used to spend every summer by the sea. We would get up early and go fishing.</s-en></p>
<p><b>would</b> = repeated actions only, never states: <s-en>I used to have long hair.</s-en> (not “would have”). It also needs a past context, usually set up first with used to or a time phrase.</p>
<div class="warn">Don't use the past continuous for habits. «&nbsp;Chaque été, nous allions à la mer&nbsp;» = <s-en>Every summer we went to the sea.</s-en> / <s-en>we used to go</s-en> / <s-en>we would go</s-en>, not “we were going”.</div>
<div class="tip">In a story, the past simple does most of the work. Use the other tenses to set the scene, go back in time and show how long things had lasted.</div>
`,
  body_fr: `
<h2>Les quatre temps du récit</h2>
<table>
<tr><th>Temps</th><th>Usage</th><th>Exemple</th></tr>
<tr><td>prétérit</td><td>les événements principaux, dans l'ordre</td><td>I opened the door and walked in.</td></tr>
<tr><td>prétérit continu</td><td>le décor, les actions en cours</td><td>It was raining and people were hurrying home.</td></tr>
<tr><td>plus-que-parfait</td><td>ce qui s'était passé avant</td><td>Someone had broken the window.</td></tr>
<tr><td>plus-que-parfait continu</td><td>une activité qui durait jusqu'à ce moment</td><td>She had been crying: her eyes were red. (Elle avait pleuré : elle avait les yeux rouges.)</td></tr>
</table>
<p><s-en>We had been driving for six hours when the car broke down.</s-en> (Nous roulions depuis six heures quand la voiture est tombée en panne.)</p>
<h2>Had been doing ou had done ?</h2>
<p><b>had been doing</b> = l'activité et sa durée, souvent avec des traces visibles : <s-en>I had been painting the kitchen, so I was covered in paint.</s-en></p>
<p><b>had done</b> = un résultat terminé : <s-en>I had painted the kitchen, so it looked new.</s-en></p>
<p>Les verbes d'état restent à la forme simple : <s-en>I had known her for years.</s-en> (pas « had been knowing »)</p>
<h2>Les habitudes passées : used to et would</h2>
<p><s-en>When I was a child, we used to spend every summer by the sea. We would get up early and go fishing.</s-en> (Enfant, nous passions tous nos étés au bord de la mer. Nous nous levions tôt pour aller pêcher.)</p>
<p><b>would</b> = seulement des actions répétées, jamais des états : <s-en>I used to have long hair.</s-en> (pas « would have »). Il faut aussi un contexte passé, posé d'abord avec used to ou une indication de temps.</p>
<div class="warn">On n'utilise pas le prétérit continu pour une habitude. « Chaque été, nous allions à la mer » = <s-en>Every summer we went to the sea.</s-en> / <s-en>we used to go</s-en> / <s-en>we would go</s-en>, pas « we were going ».</div>
<div class="tip">Dans un récit, le prétérit fait l'essentiel du travail. Les autres temps servent à planter le décor, à revenir en arrière et à montrer depuis combien de temps les choses duraient.</div>
`,
  examples: [
    ["When I arrived, everyone had left.", "Quand je suis arrivée, tout le monde était parti."],
    ["He was tired because he had been working all night.", "Il était fatigué parce qu'il avait travaillé toute la nuit."],
    ["We had been waiting for an hour when the bus finally came.", "Nous attendions depuis une heure quand le bus est enfin arrivé."],
    ["My grandfather would tell us stories every evening.", "Mon grand-père nous racontait des histoires tous les soirs."],
    ["I used to live in Brussels.", "J'habitais à Bruxelles avant."]
  ],
  quiz: [
    { q: "Translate: « Ses yeux étaient rouges : elle avait pleuré. »", q_fr: "Traduis : « Ses yeux étaient rouges : elle avait pleuré. »", o: ["Her eyes were red: she had been crying.", "Her eyes were red: she was crying.", "Her eyes were red: she has been crying."], a: 0, ex: "An activity before that moment, with visible results: had been + -ing.", ex_fr: "Une activité antérieure, avec des traces visibles : had been + -ing." },
    { q: "Complete: “We ___ for two hours when the rain started.”", q_fr: "Complète : « We ___ for two hours when the rain started. »", o: ["had been walking", "have been walking", "were walking since"], a: 0, ex: "Duration up to a past moment: past perfect continuous.", ex_fr: "Une durée jusqu'à un moment passé : plus-que-parfait continu." },
    { q: "Complete: “I ___ long hair when I was a teenager.”", q_fr: "Complète : « I ___ long hair when I was a teenager. »", o: ["used to have", "would have", "was having"], a: 0, ex: "A past state: used to (would is only for actions).", ex_fr: "Un état passé : used to (would seulement pour des actions)." },
    { q: "Complete: “By the time we got there, the film ___.”", q_fr: "Complète : « By the time we got there, the film ___. »", o: ["had started", "had been starting", "was starting since"], a: 0, ex: "A completed earlier event: had + past participle.", ex_fr: "Un événement antérieur et terminé : had + participe passé." },
    { q: "Which is correct?", q_fr: "Quelle phrase est correcte ?", o: ["I had known him for ten years.", "I had been knowing him for ten years."], a: 0, ex: "Know is a state verb: no continuous form.", ex_fr: "Know est un verbe d'état : pas de forme continue." }
  ]
},
{
  id: 91, after: 40, level: "B2", icon: "repeat",
  title: "It's worth doing, there's no point: expressions + -ing", title_fr: "It's worth doing, there's no point… : les expressions suivies de -ing",
  subtitle: "Fixed phrases that always take -ing.", subtitle_fr: "Des tournures toujours suivies de -ing.",
  body: `
<table>
<tr><th>Expression</th><th>Example</th></tr>
<tr><td>it's worth + -ing</td><td>The museum is worth visiting. · It's not worth arguing about.</td></tr>
<tr><td>there's no point (in) + -ing</td><td>There's no point waiting: the shop is closed.</td></tr>
<tr><td>it's no use + -ing</td><td>It's no use crying about it.</td></tr>
<tr><td>can't help + -ing</td><td>I couldn't help laughing.</td></tr>
<tr><td>look forward to + -ing</td><td>I look forward to hearing from you.</td></tr>
<tr><td>have trouble / difficulty + -ing</td><td>I have trouble remembering names.</td></tr>
<tr><td>spend time + -ing</td><td>She spends hours reading.</td></tr>
<tr><td>feel like + -ing</td><td>I don't feel like going out.</td></tr>
<tr><td>be busy + -ing</td><td>He's busy cooking.</td></tr>
</table>
<p>See also <b>be used to / get used to + -ing</b> in the lesson on used to.</p>
<div class="warn">In <i>look forward to</i> and <i>be used to</i>, <b>to</b> is a preposition, so it's followed by -ing: <s-en>I look forward to seeing you.</s-en>, never “to see you”.</div>
<h2>After a preposition: always -ing</h2>
<p><s-en>before leaving</s-en> · <s-en>without saying</s-en> · <s-en>instead of complaining</s-en> · <s-en>I'm good at cooking.</s-en> · <s-en>Thank you for coming.</s-en></p>
<div class="warn">«&nbsp;avant de partir&nbsp;» = <s-en>before leaving</s-en>; «&nbsp;sans dire&nbsp;» = <s-en>without saying</s-en>. The French infinitive becomes -ing.</div>
`,
  body_fr: `
<table>
<tr><th>Expression</th><th>Exemple</th></tr>
<tr><td>it's worth + -ing (ça vaut la peine de)</td><td>The museum is worth visiting. · It's not worth arguing about.</td></tr>
<tr><td>there's no point (in) + -ing (ça ne sert à rien de)</td><td>There's no point waiting: the shop is closed.</td></tr>
<tr><td>it's no use + -ing (inutile de)</td><td>It's no use crying about it.</td></tr>
<tr><td>can't help + -ing (ne pas pouvoir s'empêcher de)</td><td>I couldn't help laughing.</td></tr>
<tr><td>look forward to + -ing (avoir hâte de)</td><td>I look forward to hearing from you.</td></tr>
<tr><td>have trouble / difficulty + -ing (avoir du mal à)</td><td>I have trouble remembering names.</td></tr>
<tr><td>spend time + -ing (passer du temps à)</td><td>She spends hours reading.</td></tr>
<tr><td>feel like + -ing (avoir envie de)</td><td>I don't feel like going out.</td></tr>
<tr><td>be busy + -ing (être occupé à)</td><td>He's busy cooking.</td></tr>
</table>
<p>Voir aussi <b>be used to / get used to + -ing</b> dans la leçon sur used to.</p>
<div class="warn">Dans <i>look forward to</i> et <i>be used to</i>, <b>to</b> est une préposition : il est donc suivi de -ing. <s-en>I look forward to seeing you.</s-en>, jamais « to see you ».</div>
<h2>Après une préposition : toujours -ing</h2>
<p><s-en>before leaving</s-en> (avant de partir) · <s-en>without saying</s-en> (sans dire) · <s-en>instead of complaining</s-en> (au lieu de se plaindre) · <s-en>I'm good at cooking.</s-en> · <s-en>Thank you for coming.</s-en></p>
<div class="warn">« avant de partir » = <s-en>before leaving</s-en> ; « sans dire » = <s-en>without saying</s-en>. L'infinitif français devient -ing.</div>
`,
  examples: [
    ["This book is really worth reading.", "Ce livre vaut vraiment la peine d'être lu."],
    ["There's no point in worrying about it now.", "Ça ne sert à rien de s'en inquiéter maintenant."],
    ["I can't help thinking about what she said.", "Je ne peux pas m'empêcher de penser à ce qu'elle a dit."],
    ["I'm looking forward to seeing you next week.", "J'ai hâte de te voir la semaine prochaine."],
    ["She left without saying goodbye.", "Elle est partie sans dire au revoir."]
  ],
  quiz: [
    { q: "Translate: « Ça vaut la peine de le voir. »", q_fr: "Traduis : « Ça vaut la peine de le voir. »", o: ["It's worth seeing.", "It's worth to see.", "It worths seeing."], a: 0, ex: "it's worth + -ing.", ex_fr: "it's worth + -ing." },
    { q: "Complete: “I look forward to ___ from you.”", q_fr: "Complète : « I look forward to ___ from you. »", o: ["hearing", "hear", "heard"], a: 0, ex: "To is a preposition here: -ing.", ex_fr: "To est ici une préposition : -ing." },
    { q: "Translate: « Je n'ai pas pu m'empêcher de rire. »", q_fr: "Traduis : « Je n'ai pas pu m'empêcher de rire. »", o: ["I couldn't help laughing.", "I couldn't help to laugh.", "I couldn't stop me laughing."], a: 0, ex: "can't help + -ing.", ex_fr: "can't help + -ing." },
    { q: "Translate: « avant de partir »", q_fr: "Traduis : « avant de partir »", o: ["before leaving", "before to leave", "before leave"], a: 0, ex: "After a preposition: -ing.", ex_fr: "Après une préposition : -ing." },
    { q: "Complete: “There's no point ___ him: he never answers.”", q_fr: "Complète : « There's no point ___ him: he never answers. »", o: ["calling", "call", "called"], a: 0, ex: "there's no point (in) + -ing.", ex_fr: "there's no point (in) + -ing." }
  ]
}
);
