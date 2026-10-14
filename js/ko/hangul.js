/* Cours de coréen : tout ce que le moteur (js/app.js) doit savoir du hangeul, chargé avant lui.
   - KO.rr(texte) : la romanisation révisée officielle (Corée du Sud, 2000), qui transcrit la prononciation : liaison
     (한국어 → hangugeo), nasalisation (합니다 → hamnida), assimilation du ㄹ (신라 → silla, 종로 → jongno),
     aspiration (좋고 → joko), palatalisation (같이 → gachi). Comme le veut la règle officielle, les consonnes
     renforcées ne sont pas notées (학교 → hakgyo) et, devant ㅎ, ㄱ ㄷ ㅂ restent k t p + h (축하 → chukha), la
     règle des noms, de loin les plus fréquents dans ce cas.
   - KO.forms(verbe) : les formes conjuguées d'un verbe ou d'un adjectif (가다 → 가요, 갔어요, 갑니다, 가는, 갈…),
     pour la traduction au clic. Irréguliers en ㅂ, ㄷ, ㅅ, ㅎ, 르, et radicaux en ㄹ.
   - KO.number(mot) : les nombres écrits en lettres, sino-coréens (이십오 → 25) ou coréens (스물다섯 → 25), et les
     numéros dits chiffre par chiffre (공일공 → 010).
   - Le clavier coréen à l'écran (disposition standard à deux séries, 두벌식), qui sert aussi à taper le hangeul
     avec un clavier latin : chaque touche correspond à la même place que sur un clavier coréen. */
(function () {
  const W = window;
  const SB = 0xAC00;
  const CHO = "ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ";
  const JUNG = "ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ";
  const JONG = ["", "ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ", "ㄹ", "ㄺ", "ㄻ", "ㄼ", "ㄽ", "ㄾ", "ㄿ", "ㅀ", "ㅁ", "ㅂ", "ㅄ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
  const isSyl = (c) => !!c && c >= "가" && c <= "힣";
  const dec = (c) => { const n = c.charCodeAt(0) - SB; return [CHO[Math.floor(n / 588)], JUNG[Math.floor((n % 588) / 28)], JONG[n % 28]]; };
  const comp = (l, v, t) => String.fromCharCode(SB + CHO.indexOf(l) * 588 + JUNG.indexOf(v) * 28 + JONG.indexOf(t || ""));

  /* ================= Romanisation révisée ================= */
  const RI = { "ㄱ": "g", "ㄲ": "kk", "ㄴ": "n", "ㄷ": "d", "ㄸ": "tt", "ㄹ": "r", "ㅁ": "m", "ㅂ": "b", "ㅃ": "pp", "ㅅ": "s", "ㅆ": "ss", "ㅇ": "", "ㅈ": "j", "ㅉ": "jj", "ㅊ": "ch", "ㅋ": "k", "ㅌ": "t", "ㅍ": "p", "ㅎ": "h" };
  const RV = ["a", "ae", "ya", "yae", "eo", "e", "yeo", "ye", "o", "wa", "wae", "oe", "yo", "u", "wo", "we", "wi", "yu", "eu", "ui", "i"];
  /* le son d'une consonne finale devant une consonne ou en fin de mot */
  const REP = { "ㄱ": "k", "ㄲ": "k", "ㅋ": "k", "ㄳ": "k", "ㄺ": "k", "ㄴ": "n", "ㄵ": "n", "ㄶ": "n", "ㄷ": "t", "ㅅ": "t", "ㅆ": "t", "ㅈ": "t", "ㅊ": "t", "ㅌ": "t", "ㅎ": "t", "ㄹ": "l", "ㄼ": "l", "ㄽ": "l", "ㄾ": "l", "ㅀ": "l", "ㅁ": "m", "ㄻ": "m", "ㅂ": "p", "ㅍ": "p", "ㅄ": "p", "ㄿ": "p", "ㅇ": "ng" };
  /* liaison d'une finale double devant une voyelle : [ce qui reste, ce qui passe à la syllabe suivante] */
  const SPLIT = { "ㄳ": ["ㄱ", "ㅅ"], "ㄵ": ["ㄴ", "ㅈ"], "ㄶ": ["", "ㄴ"], "ㄺ": ["ㄹ", "ㄱ"], "ㄻ": ["ㄹ", "ㅁ"], "ㄼ": ["ㄹ", "ㅂ"], "ㄽ": ["ㄹ", "ㅅ"], "ㄾ": ["ㄹ", "ㅌ"], "ㄿ": ["ㄹ", "ㅍ"], "ㅀ": ["", "ㄹ"], "ㅄ": ["ㅂ", "ㅅ"] };
  const H_FIN = { "ㅎ": "", "ㄶ": "ㄴ", "ㅀ": "ㄹ" };
  const ASP = { "ㄱ": "ㅋ", "ㄷ": "ㅌ", "ㅈ": "ㅊ" };
  function rrWord(word) {
    const s = Array.from(word).map((c) => { const [l, v, t] = dec(c); return { l, v, t, li: null, lf: null }; });
    /* nombres : un ㄴ s'insère devant 육 après 십, 백, 천, 만 (십육 → [심뉵] simnyuk) */
    if (/^[일이삼사오육칠팔구십백천만]+$/.test(word)) s.forEach((x, i) => { if (i && x.l === "ㅇ" && x.v === "ㅠ" && x.t === "ㄱ" && /[십백천만]/.test(word[i - 1])) x.l = "ㄴ"; });
    for (let i = 0; i < s.length - 1; i++) {
      const a = s[i], b = s[i + 1], f = a.t;
      if (!f) continue;
      if (b.l === "ㅇ") {
        if (f === "ㅇ") continue;
        if (f === "ㅎ") { a.t = ""; continue; }
        if ((f === "ㄷ" || f === "ㅌ") && b.v === "ㅣ") { a.t = ""; b.l = f === "ㄷ" ? "ㅈ" : "ㅊ"; continue; }
        if (SPLIT[f]) { a.t = SPLIT[f][0]; b.l = SPLIT[f][1]; } else { a.t = ""; b.l = f; }
        continue;
      }
      if (f in H_FIN) {
        if (ASP[b.l]) { a.t = H_FIN[f]; b.l = ASP[b.l]; continue; }
        if (b.l === "ㅅ") { a.t = H_FIN[f]; continue; }
        if (b.l === "ㄴ") a.t = f === "ㅎ" ? "ㄴ" : H_FIN[f];
      }
      if (b.l === "ㅎ") {
        if (f === "ㄺ") { a.t = "ㄹ"; b.l = "ㅋ"; continue; }
        if (f === "ㄼ") { a.t = "ㄹ"; b.l = "ㅍ"; continue; }
        if (f === "ㅈ" || f === "ㅊ") { a.t = ""; b.l = "ㅊ"; continue; }
        if (f === "ㅅ" || f === "ㅆ" || f === "ㅌ") { a.t = ""; b.l = "ㅌ"; continue; }
      }
      if (f === "ㄺ" && b.l === "ㄱ") { a.lf = "l"; continue; }
    }
    /* assimilations, sur les sons */
    s.forEach((x) => { if (x.lf == null) x.lf = x.t ? REP[x.t] : ""; });
    for (let i = 0; i < s.length - 1; i++) {
      const a = s[i], b = s[i + 1], fs = a.lf;
      if (!fs) continue;
      const stop = fs === "k" || fs === "t" || fs === "p";
      const NAS = { k: "ng", t: "n", p: "m" };
      if (stop && (b.l === "ㄴ" || b.l === "ㅁ")) a.lf = NAS[fs];
      else if (stop && b.l === "ㄹ") { a.lf = NAS[fs]; b.l = "ㄴ"; }
      else if ((fs === "m" || fs === "ng") && b.l === "ㄹ") b.l = "ㄴ";
      else if (fs === "n" && b.l === "ㄹ") { a.lf = "l"; b.li = "l"; }
      else if (fs === "l" && (b.l === "ㄴ" || b.l === "ㄹ")) b.li = "l";
    }
    return s.map((x) => (x.li != null ? x.li : RI[x.l]) + RV[JUNG.indexOf(x.v)] + x.lf).join("");
  }
  /* jamo seuls (dans les leçons sur l'alphabet) */
  const RJ = { "ㄱ": "g/k", "ㄲ": "kk", "ㄴ": "n", "ㄷ": "d/t", "ㄸ": "tt", "ㄹ": "r/l", "ㅁ": "m", "ㅂ": "b/p", "ㅃ": "pp", "ㅅ": "s", "ㅆ": "ss", "ㅇ": "-/ng", "ㅈ": "j", "ㅉ": "jj", "ㅊ": "ch", "ㅋ": "k", "ㅌ": "t", "ㅍ": "p", "ㅎ": "h" };
  const rrJamo = (c) => RJ[c] || (JUNG.includes(c) ? RV[JUNG.indexOf(c)] : c);
  const rr = (text) => String(text || "").replace(/[가-힣]+/g, rrWord).replace(/[ㄱ-ㅣ]/g, rrJamo);

  /* ================= Conjugaison ================= */
  const last = (s) => s.slice(-1);
  const setFinal = (s, t) => { const [l, v] = dec(last(s)); return s.slice(0, -1) + comp(l, v, t); };
  const finalOf = (s) => (isSyl(last(s)) ? dec(last(s))[2] : "");
  /* ajoute une terminaison ; si elle commence par une consonne seule (ㄴ, ㄹ, ㅂ, ㅁ, ㅆ), celle-ci devient la finale */
  const attach = (s, e) => {
    const j = e[0];
    if (/[ㄱ-ㅎ]/.test(j)) {
      const t = finalOf(s);
      if (!t) return setFinal(s, j) + e.slice(1);
      if (t === "ㄹ" && j === "ㄹ") return s + e.slice(1);
      if (t === "ㄹ" && j === "ㅁ") return setFinal(s, "ㄻ") + e.slice(1);
      return s + "으" + e;  /* sécurité ; non utilisé */
    }
    return s + e;
  };
  const bright = (v) => v === "ㅏ" || v === "ㅗ" || v === "ㅑ";
  const REG_B = "입잡좁씹접뽑업집";
  const IRR_D = "듣걷묻싣깨닫붇";
  const IRR_S = "낫짓붓잇젓긋";
  const REG_H = "좋놓넣낳닿쌓땋찧";
  const REG_REU = ["따르", "치르", "들르", "다다르", "우러르"];
  /* classe du radical : h (하다), b, d, s, hh (ㅎ irrégulier), reu (르), l (ㄹ), eu (ㅡ), v (voyelle), c (consonne) */
  function klass(stem) {
    const [l, v, t] = dec(last(stem));
    if (!t && l === "ㅎ" && v === "ㅏ") return "h";
    if (t === "ㅂ") return REG_B.includes(last(stem)) ? "c" : "b";
    if (t === "ㄷ") return IRR_D.includes(last(stem)) ? "d" : "c";
    if (t === "ㅅ") return IRR_S.includes(last(stem)) ? "s" : "c";
    if (t === "ㅎ") return REG_H.includes(last(stem)) ? "c" : "hh";
    if (t === "ㄹ") return "l";
    if (t) return "c";
    if (l === "ㄹ" && v === "ㅡ" && stem.length > 1 && !REG_REU.some((r) => stem.endsWith(r))) return "reu";
    if (v === "ㅡ") return "eu";
    return "v";
  }
  /* la forme en -아/-어 (가 → 가, 먹 → 먹어, 하 → 해, 마시 → 마셔, 듣 → 들어, 춥 → 추워, 모르 → 몰라, 그렇 → 그래) */
  function inf(stem, k) {
    const [l, v, t] = dec(last(stem));
    const head = stem.slice(0, -1);
    const prevV = head ? dec(last(head))[1] : "ㅓ";
    switch (k) {
      case "h": return head + "해";
      case "b": return /[돕곱]$/.test(stem) ? head + comp(l, v, "") + "와" : head + comp(l, v, "") + "워";
      case "d": return head + comp(l, v, "ㄹ") + (bright(v) ? "아" : "어");
      case "s": return head + comp(l, v, "") + (bright(v) ? "아" : "어");
      case "hh": return head + comp(l, { "ㅏ": "ㅐ", "ㅓ": "ㅐ", "ㅑ": "ㅒ", "ㅕ": "ㅖ" }[v] || v, "");
      case "l": case "c": return stem + (bright(v) ? "아" : "어");
      case "reu": return head.slice(0, -1) + setFinal(last(head), "ㄹ") + (bright(prevV) ? "라" : "러");
      case "eu": return head + comp(l, head && bright(prevV) ? "ㅏ" : "ㅓ", "");
      default: {
        const C = { "ㅗ": "ㅘ", "ㅜ": "ㅝ", "ㅣ": "ㅕ", "ㅚ": "ㅙ" }[v];
        if (C && !(l === "ㅇ" && v === "ㅣ")) return head + comp(l, C, "");
        if (v === "ㅏ" || v === "ㅓ" || v === "ㅐ" || v === "ㅔ" || v === "ㅕ" || v === "ㅖ" || v === "ㅒ") return stem;
        return stem + (bright(v) ? "아" : "어");
      }
    }
  }
  /* devant les terminaisons à deux formes (-(으)면, -(으)세요, -(으)ㄴ…) : [radical, faut-il 으 ?] */
  function eStem(stem, k) {
    const [l, v] = dec(last(stem));
    const head = stem.slice(0, -1);
    if (k === "b") return [head + comp(l, v, "") + "우", false];
    if (k === "d") return [head + comp(l, v, "ㄹ"), true];
    if (k === "s") return [head + comp(l, v, ""), true];
    if (k === "hh") return [head + comp(l, v, ""), false];
    if (k === "c") return [stem, true];
    return [stem, false];
  }
  /* terminaisons à deux formes, écrites après voyelle */
  const E2 = [["ㄴ", "adn"], ["ㄹ", "fut"], ["ㅂ니다", "fml"], ["ㅂ니까", "fmlq"], ["ㅁ", "nom2"], ["면", "if"], ["니까", "since"], ["러", "reo"], ["려고", "ryeogo"], ["려면", "ryeomyeon"], ["면서", "while"],
    ["ㄹ게요", "promise"], ["ㄹ까요", "shall"], ["ㄹ래요", "want"], ["ㄹ래", "want"], ["ㄹ까", "shall"], ["ㄴ데", "bg"], ["ㄴ데요", "bg"], ["ㅂ시다", "lets"], ["ㄴ지", "whether"], ["ㄹ지", "whether"], ["ㄹ수록", "themore"], ["ㄹ게", "promise"], ["ㄹ텐데", "would"],
    ["세요", "hon"], ["셨어요", "honpast"], ["셨습니다", "honpast"], ["십니다", "honfml"], ["십니까", "honq"], ["시고", "hon"], ["시는", "hon"], ["신", "hon"], ["실", "hon"], ["시면", "hon"], ["셔서", "hon"], ["시지만", "hon"], ["시겠어요", "hon"], ["셔야", "hon"], ["셨던", "hon"], ["시죠", "hon"], ["셨나요", "hon"], ["시네요", "hon"], ["셨는데", "hon"], ["셔도", "hon"]];
  /* terminaisons qui s'ajoutent directement au radical */
  const E1 = [["고", "and"], ["지만", "but"], ["지", "ji"], ["지요", "right"], ["죠", "right"], ["게", "ge"], ["기", "nom"], ["네요", "excl"], ["겠어요", "will"], ["겠습니다", "will"], ["겠다", "will"], ["겠지만", "will"], ["겠네요", "will"],
    ["던", "used"], ["도록", "sothat"], ["잖아요", "youknow"], ["거든요", "because"], ["는", "adnp"], ["는데", "bg"], ["는데요", "bg"], ["나요", "q"], ["는지", "whether"], ["자", "letsi"], ["지마", "dont"], ["지도", "ji"], ["기로", "decide"], ["기에", "nom"], ["기는", "nom"], ["기도", "nom"], ["기가", "nom"], ["기를", "nom"], ["고요", "and"], ["는군요", "excl"], ["군요", "excl"], ["다가", "while2"], ["더라고요", "saw"]];
  /* sur la forme en -아/-어 : A = forme en -아/-어, P = passé (A + ㅆ) */
  const EA = [["요", "pol"], ["", "inf"], ["서", "so"], ["도", "even"], ["야", "must"], ["야지", "must"], ["라", "imp"]];
  const EP = [["어요", "past"], ["습니다", "pastfml"], ["습니까", "pastq"], ["어", "pastinf"], ["다", "pastplain"], ["는데", "past"], ["으면", "pastif"], ["지만", "past"], ["고", "past"], ["던", "pastadn"], ["을", "past"], ["겠어요", "past"], ["거든요", "past"], ["잖아요", "past"], ["네요", "past"], ["죠", "past"], ["지요", "past"], ["나요", "past"], ["는지", "past"], ["으니까", "past"], ["다가", "past"], ["더라고요", "past"], ["군요", "past"]];
  /* adj : un adjectif (« to be cold ») n'a ni -ㄴ다, ni -(으)러, ni « allons-y » (on garde -는, pour 맞다, 늦다…) */
  const NOT_ADJ = new Set(["plain", "reo", "ryeogo", "lets", "letsi", "promise", "want", "imp", "decide", "dont"]);
  function forms(base, adj) {
    if (!/다$/.test(base) || base.length < 2) return [];
    const stem = base.slice(0, -1);
    if (!isSyl(last(stem))) return [];
    const k = klass(stem), out = [];
    const put = (f, c) => { if (c && f && f !== base && !(adj && NOT_ADJ.has(c))) out.push([f, c]); };
    const A = inf(stem, k), P = setFinal(A, "ㅆ");
    EA.forEach(([e, c]) => put(A + e, c));
    EP.forEach(([e, c]) => put(P + e, c));
    const [es, eu] = eStem(stem, k);
    E2.forEach(([e, c]) => {
      if (k === "l") {
        /* ㄹ tombe devant ㄴ, ㅂ, ㅅ */
        const drop = /^[ㄴㅂ]/.test(e) || /^[니세셨십시신실셔]/.test(e);
        put(drop ? attach(setFinal(stem, ""), e) : attach(stem, e), c);
        return;
      }
      /* -습니다 se met sur le radical de départ : 춥습니다, 그렇습니다, 듣습니다 */
      if (e === "ㅂ니다" || e === "ㅂ니까") { if (eu || k === "b" || k === "hh") { put(stem + (e === "ㅂ니다" ? "습니다" : "습니까"), c); return; } }
      if (eu) {
        put(attach(es + "으", e), c);
        return;
      }
      put(attach(es, e), c);
    });
    E1.forEach(([e, c]) => {
      if (k === "l" && /^[ㄴ는네나니]/.test(e)) { put(setFinal(stem, "") + e, c); return; }
      put(stem + e, c);
    });
    /* style écrit : -ㄴ다 / -는다 */
    if (k === "l") put(attach(setFinal(stem, ""), "ㄴ다"), "plain");
    else if (finalOf(stem)) put(stem + "는다", "plain");
    else put(attach(stem, "ㄴ다"), "plain");
    return out;
  }
  const FORM_LABELS = {
    pol: ["present, polite", "présent, poli"], inf: ["-아/-어 form: informal speech, or before 주다, 보다, 있다…", "forme en -아/-어 : style familier, ou devant 주다, 보다, 있다…"],
    so: ["-아서/-어서: so, because; and then", "-아서/-어서 : donc, parce que ; puis"], even: ["-아도/-어도: even if", "-아도/-어도 : même si"],
    must: ["-아야/-어야: have to (with 하다, 되다)", "-아야/-어야 : il faut (avec 하다, 되다)"], imp: ["command (written style)", "ordre (style écrit)"],
    past: ["past", "passé"], pastfml: ["past, formal", "passé, formel"], pastq: ["past question, formal", "question au passé, formelle"], pastinf: ["past, informal", "passé, familier"],
    pastplain: ["past, written style", "passé, style écrit"], pastif: ["if… had (-았/었으면)", "si… avait (-았/었으면)"], pastadn: ["that… used to, that… had (-았/었던)", "qui… avait (-았/었던)"],
    adn: ["-(으)ㄴ: describes a noun (past for verbs, present for adjectives)", "-(으)ㄴ : devant un nom (passé pour les verbes, présent pour les adjectifs)"],
    fut: ["-(으)ㄹ: describes a noun (future); 거예요, 수 있다…", "-(으)ㄹ : devant un nom (futur) ; 거예요, 수 있다…"],
    fml: ["present, formal (-ㅂ니다/-습니다)", "présent, formel (-ㅂ니다/-습니다)"], fmlq: ["question, formal", "question, formelle"],
    nom2: ["noun form (-(으)ㅁ)", "forme nominale (-(으)ㅁ)"], if: ["-(으)면: if, when", "-(으)면 : si, quand"], since: ["-(으)니까: since, because", "-(으)니까 : puisque, comme"],
    reo: ["-(으)러: to, in order to (with 가다, 오다)", "-(으)러 : pour (avec 가다, 오다)"], ryeogo: ["-(으)려고: in order to, intending to", "-(으)려고 : pour, avec l'intention de"],
    ryeomyeon: ["-(으)려면: if you want to", "-(으)려면 : si on veut"], while: ["-(으)면서: while", "-(으)면서 : en même temps que"],
    promise: ["-(으)ㄹ게요: I'll… (a promise)", "-(으)ㄹ게요 : je vais… (une promesse)"], shall: ["-(으)ㄹ까요?: shall we…?, do you think…?", "-(으)ㄹ까요 ? : on… ?, tu crois que… ?"],
    want: ["-(으)ㄹ래요: want to", "-(으)ㄹ래요 : vouloir"], bg: ["-는데 / -(으)ㄴ데: background, contrast", "-는데 / -(으)ㄴ데 : contexte, contraste"],
    lets: ["-(으)ㅂ시다: let's (formal)", "-(으)ㅂ시다 : allons-y, faisons… (formel)"], whether: ["-는지 / -(으)ㄴ지: whether, if", "-는지 / -(으)ㄴ지 : si (question indirecte)"],
    themore: ["-(으)ㄹ수록: the more…", "-(으)ㄹ수록 : plus…"], would: ["-(으)ㄹ 텐데: would, must be", "-(으)ㄹ 텐데 : devrait, sûrement"],
    hon: ["honorific (-(으)시-): polite request, or a respected person", "honorifique (-(으)시-) : demande polie, ou personne respectée"],
    honpast: ["past, honorific", "passé, honorifique"], honfml: ["present, formal and honorific", "présent, formel et honorifique"], honq: ["question, formal and honorific", "question, formelle et honorifique"],
    and: ["-고: and", "-고 : et"], but: ["-지만: but", "-지만 : mais"], ji: ["-지 (않다, 못하다, 마세요)", "-지 (않다, 못하다, 마세요)"], right: ["-지요 / -죠: …, right?", "-지요 / -죠 : …, n'est-ce pas ?"],
    ge: ["-게: so that; -ly", "-게 : pour que ; de façon…"], nom: ["noun form (-기)", "forme nominale (-기)"], excl: ["exclamation (-네요, -군요)", "exclamation (-네요, -군요)"],
    will: ["-겠-: will; I guess", "-겠- : futur, supposition"], used: ["-던: that… used to", "-던 : qui… (souvenir, habitude passée)"], sothat: ["-도록: so that", "-도록 : pour que"],
    youknow: ["-잖아요: you know", "-잖아요 : tu sais bien"], because: ["-거든요: you see, because", "-거든요 : c'est que…"], adnp: ["-는: describes a noun (present)", "-는 : devant un nom (présent)"],
    q: ["-나요?: question, soft", "-나요 ? : question, adoucie"], letsi: ["-자: let's (informal)", "-자 : allons-y (familier)"], dont: ["-지 마: don't (informal)", "-지 마 : ne… pas (familier)"],
    decide: ["-기로: decide to, promise to", "-기로 : décider de"], while2: ["-다가: while…, and then", "-다가 : en train de…, puis"], saw: ["-더라고요: I noticed that", "-더라고요 : j'ai remarqué que"],
    plain: ["present, written style (-ㄴ다/-는다)", "présent, style écrit (-ㄴ다/-는다)"]
  };

  /* ================= Nombres en lettres ================= */
  const SINO = { "일": 1, "이": 2, "삼": 3, "사": 4, "오": 5, "육": 6, "륙": 6, "칠": 7, "팔": 8, "구": 9 };
  const UNIT = { "십": 10, "백": 100, "천": 1000 };
  function sino(w) {
    if (!/^[일이삼사오육륙칠팔구십백천만]+$/.test(w) || w.length < 2) return null;
    let total = 0, part = 0, digit = 0;
    for (const c of w) {
      if (SINO[c]) { if (digit) return null; digit = SINO[c]; }
      else if (UNIT[c]) { part += (digit || 1) * UNIT[c]; digit = 0; }
      else if (c === "만") { total += (part + digit || 1) * 10000; part = 0; digit = 0; }
    }
    return total + part + digit;
  }
  const NT = { "열": 10, "스물": 20, "스무": 20, "서른": 30, "마흔": 40, "쉰": 50, "예순": 60, "일흔": 70, "여든": 80, "아흔": 90 };
  const NU = { "하나": 1, "한": 1, "둘": 2, "두": 2, "셋": 3, "세": 3, "석": 3, "넷": 4, "네": 4, "다섯": 5, "여섯": 6, "일곱": 7, "여덟": 8, "아홉": 9 };
  function native(w) {
    for (const [t, tv] of Object.entries(NT)) {
      if (!w.startsWith(t)) continue;
      const r = w.slice(t.length);
      if (!r) return tv === 20 && t === "스무" ? null : tv;
      if (NU[r] && t !== "스무") return tv + NU[r];
    }
    return null;
  }
  /* une suite de chiffres, dite chiffre par chiffre (numéros de téléphone : 공일공 → 010) */
  const DIG = { "공": 0, "영": 0, "일": 1, "이": 2, "삼": 3, "사": 4, "오": 5, "육": 6, "칠": 7, "팔": 8, "구": 9 };
  const digits = (w) => (w.length >= 3 && Array.from(w).every((c) => c in DIG) ? Array.from(w).map((c) => DIG[c]).join("") : null);
  const number = (w) => { const n = sino(w); if (n != null) return n; const d = digits(w); return d != null ? d : native(w); };

  /* ================= Clavier coréen ================= */
  const VCOMB = { "ㅗㅏ": "ㅘ", "ㅗㅐ": "ㅙ", "ㅗㅣ": "ㅚ", "ㅜㅓ": "ㅝ", "ㅜㅔ": "ㅞ", "ㅜㅣ": "ㅟ", "ㅡㅣ": "ㅢ" };
  const TCOMB = { "ㄱㅅ": "ㄳ", "ㄴㅈ": "ㄵ", "ㄴㅎ": "ㄶ", "ㄹㄱ": "ㄺ", "ㄹㅁ": "ㄻ", "ㄹㅂ": "ㄼ", "ㄹㅅ": "ㄽ", "ㄹㅌ": "ㄾ", "ㄹㅍ": "ㄿ", "ㄹㅎ": "ㅀ", "ㅂㅅ": "ㅄ" };
  const VSPLIT = {}, TSPLIT = {};
  Object.entries(VCOMB).forEach(([k, v]) => { VSPLIT[v] = k[0]; });
  Object.entries(TCOMB).forEach(([k, v]) => { TSPLIT[v] = [k[0], k[1]]; });
  const isCons = (j) => /[ㄱ-ㅎ]/.test(j), isVow = (j) => /[ㅏ-ㅣ]/.test(j);
  /* le caractère avant le curseur + une lettre → ce qui le remplace (null : on ajoute simplement la lettre) */
  function combine(prev, j) {
    if (isCons(prev)) return isVow(j) && CHO.includes(prev) ? comp(prev, j, "") : null;
    if (isVow(prev)) return isVow(j) && VCOMB[prev + j] ? VCOMB[prev + j] : null;
    if (!isSyl(prev)) return null;
    const [l, v, t] = dec(prev);
    if (!t) {
      if (isVow(j)) return VCOMB[v + j] ? comp(l, VCOMB[v + j], "") : null;
      return JONG.includes(j) ? comp(l, v, j) : null;
    }
    if (isCons(j)) return TCOMB[t + j] ? comp(l, v, TCOMB[t + j]) : null;
    if (TSPLIT[t]) return comp(l, v, TSPLIT[t][0]) + comp(TSPLIT[t][1], j, "");
    return CHO.includes(t) ? comp(l, v, "") + comp(t, j, "") : null;
  }
  /* effacer une lettre de la syllabe en cours */
  function backOne(prev) {
    if (!isSyl(prev)) return "";
    const [l, v, t] = dec(prev);
    if (t) return comp(l, v, TSPLIT[t] ? TSPLIT[t][0] : "");
    if (VSPLIT[v]) return comp(l, VSPLIT[v], "");
    return l;
  }
  /* disposition 두벌식, par position de touche (e.code) : la même sur un clavier QWERTY ou AZERTY */
  const KEYS = { KeyQ: "ㅂ", KeyW: "ㅈ", KeyE: "ㄷ", KeyR: "ㄱ", KeyT: "ㅅ", KeyY: "ㅛ", KeyU: "ㅕ", KeyI: "ㅑ", KeyO: "ㅐ", KeyP: "ㅔ",
    KeyA: "ㅁ", KeyS: "ㄴ", KeyD: "ㅇ", KeyF: "ㄹ", KeyG: "ㅎ", KeyH: "ㅗ", KeyJ: "ㅓ", KeyK: "ㅏ", KeyL: "ㅣ",
    KeyZ: "ㅋ", KeyX: "ㅌ", KeyC: "ㅊ", KeyV: "ㅍ", KeyB: "ㅠ", KeyN: "ㅜ", KeyM: "ㅡ" };
  const SHIFT = { "ㅂ": "ㅃ", "ㅈ": "ㅉ", "ㄷ": "ㄸ", "ㄱ": "ㄲ", "ㅅ": "ㅆ", "ㅐ": "ㅒ", "ㅔ": "ㅖ" };
  const ROWS = [["KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP"], ["KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL"], ["KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM"]];
  const kb = { el: null, pos: -1, shift: false, open: false, panel: null, btn: null, target: null };
  try { kb.open = localStorage.getItem("hangeul.kb") === "1"; } catch (e) { /* stockage indisponible */ }
  const eligible = (el) => !!el && el.closest && el.closest("#app") && !el.closest(".no-kb") && !el.readOnly && !el.disabled &&
    (el.tagName === "TEXTAREA" || (el.tagName === "INPUT" && /^(text|search|)$/.test(el.type || "")));
  const fire = (el) => el.dispatchEvent(new Event("input", { bubbles: true }));
  function insert(el, j) {
    const a = el.selectionStart, b = el.selectionEnd;
    let before = el.value.slice(0, a);
    const after = el.value.slice(b);
    const composing = kb.el === el && kb.pos === a && a === b;
    const m = composing && before ? combine(before.slice(-1), j) : null;
    before = m != null ? before.slice(0, -1) + m : before + j;
    el.value = before + after;
    el.setSelectionRange(before.length, before.length);
    kb.el = el; kb.pos = before.length;
    fire(el);
  }
  function back(el) {
    const a = el.selectionStart, b = el.selectionEnd;
    let before = el.value.slice(0, a);
    const after = el.value.slice(b);
    if (a !== b) before = before;
    else if (kb.el === el && kb.pos === a && before) before = before.slice(0, -1) + backOne(before.slice(-1));
    else before = before.slice(0, -1);
    el.value = before + after;
    el.setSelectionRange(before.length, before.length);
    kb.el = el; kb.pos = before && isSyl(before.slice(-1)) || /[ㄱ-ㅣ]$/.test(before) ? before.length : -1;
    fire(el);
  }
  const label = () => (document.documentElement.lang === "fr" ? ["Clavier coréen", "Masquer le clavier", "Espace", "Valider"] : ["Korean keyboard", "Hide the keyboard", "Space", "Enter"]);
  function draw() {
    const P = kb.panel;
    const [, hide, space, enter] = label();
    P.innerHTML = ROWS.map((r, i) => `<div class="hkb-row">${i === 2 ? `<button type="button" class="hkb-k hkb-wide${kb.shift ? " on" : ""}" data-k="shift" aria-label="Shift">⇧</button>` : ""}${r.map((c) => { const j = kb.shift && SHIFT[KEYS[c]] ? SHIFT[KEYS[c]] : KEYS[c]; return `<button type="button" class="hkb-k" data-j="${j}">${j}</button>`; }).join("")}${i === 2 ? `<button type="button" class="hkb-k hkb-wide" data-k="back" aria-label="Backspace">⌫</button>` : ""}</div>`).join("") +
      `<div class="hkb-row"><button type="button" class="hkb-k hkb-wide" data-k="hide" aria-label="${hide}">⌄</button><button type="button" class="hkb-k hkb-space" data-k="space">${space}</button><button type="button" class="hkb-k hkb-wide" data-k="enter">${enter}</button></div>`;
  }
  function setOpen(on) {
    kb.open = on;
    try { localStorage.setItem("hangeul.kb", on ? "1" : "0"); } catch (e) { /* stockage indisponible */ }
    kb.panel.hidden = !on;
    kb.btn.classList.toggle("on", on);
    document.body.classList.toggle("hkb-open", on);
    const el = kb.target;
    /* sur un téléphone, le clavier à l'écran remplace celui du système */
    if (el && matchMedia("(pointer: coarse)").matches) { if (on) el.setAttribute("inputmode", "none"); else el.removeAttribute("inputmode"); }
    if (on && el) setTimeout(() => el.scrollIntoView({ block: "center", behavior: "smooth" }), 50);
  }
  function setup() {
    if (kb.panel) return;
    kb.btn = document.createElement("button");
    kb.btn.type = "button"; kb.btn.className = "hkb-btn"; kb.btn.hidden = true;
    kb.btn.innerHTML = "한글";
    kb.btn.title = label()[0]; kb.btn.setAttribute("aria-label", label()[0]);
    kb.panel = document.createElement("div");
    kb.panel.className = "hkb"; kb.panel.hidden = true;
    kb.panel.setAttribute("role", "group"); kb.panel.setAttribute("aria-label", label()[0]);
    document.body.append(kb.btn, kb.panel);
    draw();
    /* les touches ne prennent pas le focus : le texte reste dans le champ */
    [kb.btn, kb.panel].forEach((x) => x.addEventListener("pointerdown", (e) => e.preventDefault()));
    kb.btn.addEventListener("click", () => { setOpen(!kb.open); if (kb.target) kb.target.focus(); });
    kb.panel.addEventListener("click", (e) => {
      const k = e.target.closest(".hkb-k");
      const el = kb.target;
      if (!k || !el) return;
      if (k.dataset.j) { insert(el, k.dataset.j); if (kb.shift) { kb.shift = false; draw(); } }
      else if (k.dataset.k === "shift") { kb.shift = !kb.shift; draw(); }
      else if (k.dataset.k === "back") back(el);
      else if (k.dataset.k === "space") { kb.pos = -1; const a = el.selectionStart; el.setRangeText(" ", a, el.selectionEnd, "end"); fire(el); }
      else if (k.dataset.k === "hide") setOpen(false);
      else if (k.dataset.k === "enter") {
        kb.pos = -1;
        if (el.tagName === "TEXTAREA") { el.setRangeText("\n", el.selectionStart, el.selectionEnd, "end"); fire(el); }
        else if (el.form && el.form.requestSubmit) el.form.requestSubmit();
        else el.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", code: "Enter", bubbles: true }));
      }
      el.focus();
    });
  }
  document.addEventListener("focusin", (e) => {
    const el = e.target;
    if (!eligible(el)) return;
    setup();
    kb.target = el;
    kb.btn.hidden = false;
    if (kb.open) setOpen(true);
  });
  /* le champ quitté, ou retiré de la page (changement de page) : le bouton et le clavier disparaissent */
  const hideIfIdle = () => setTimeout(() => {
    if (!kb.btn) return;
    const a = document.activeElement;
    if (eligible(a) && a.isConnected) return;
    kb.target = null;
    kb.btn.hidden = true; kb.panel.hidden = true; document.body.classList.remove("hkb-open");
  }, 150);
  document.addEventListener("focusout", hideIfIdle);
  W.addEventListener("hashchange", hideIfIdle);
  /* avec le clavier ouvert, un clavier latin tape du hangeul (sauf pendant une saisie coréenne du système) */
  document.addEventListener("keydown", (e) => {
    const el = e.target;
    if (!kb.open || !eligible(el) || e.ctrlKey || e.metaKey || e.altKey || e.isComposing || e.keyCode === 229) return;
    if (KEYS[e.code]) {
      e.preventDefault();
      const j = KEYS[e.code];
      insert(el, e.shiftKey && SHIFT[j] ? SHIFT[j] : j);
    } else if (e.key === "Backspace" && el.selectionStart === el.selectionEnd && kb.el === el && kb.pos === el.selectionStart) {
      e.preventDefault(); back(el);
    } else if (e.key.length === 1 || e.key === "Enter") kb.pos = -1;
  }, true);

  W.KO = { rr, rrWord, forms, FORM_LABELS, number, isSyl, dec, comp, combine, backOne, klass, inf };
})();
