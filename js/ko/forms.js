/* Cours de coréen : formes que le moteur ne peut pas deviner, pour la traduction au clic.
   Toutes les formes régulières et la plupart des irrégulières (ㅂ, ㄷ, ㅅ, ㅎ, 르, ㄹ) sont générées par
   js/ko/hangul.js à partir du dictionnaire. Ici : la copule négative 아니다, et les verbes honorifiques en -시다
   (계시다, 드시다, 주무시다), dont la forme polie est en -세요 (et non -셔요, comme pour 마시다 → 마셔요).
   Une entrée = forme → [forme de base, note anglaise, note française]. */
(function () {
  const F = window.KO_FORMS_FIXED;
  const put = (base, list) => list.forEach(([f, en, fr]) => { if (!F[f]) F[f] = [base, en, fr]; });
  put("아니다", [
    ["아니에요", "isn't, am not, aren't (polite)", "ce n'est pas, ne pas être (poli)"],
    ["아닙니다", "isn't (formal)", "ce n'est pas (formel)"],
    ["아닙니까", "isn't it? (formal)", "n'est-ce pas ? (formel)"],
    ["아니야", "isn't (informal)", "ce n'est pas (familier)"],
    ["아니고", "isn't, and", "ce n'est pas, et"],
    ["아니라", "not… but", "non pas… mais"],
    ["아니지만", "isn't, but", "ce n'est pas, mais"],
    ["아닌", "that isn't", "qui n'est pas"],
    ["아니면", "or; if not", "ou ; sinon"],
    ["아니었어요", "wasn't", "ce n'était pas"],
    ["아니었습니다", "wasn't (formal)", "ce n'était pas (formel)"]
  ]);
  /* verbes honorifiques : la personne dont on parle est respectée */
  const hon = (base, stem) => put(base, [
    [stem + "세요", "polite present, or polite request", "présent poli, ou demande polie"],
    [stem + "십니다", "formal present", "présent formel"],
    [stem + "십니까", "formal question", "question formelle"],
    [stem + "셨어요", "past", "passé"],
    [stem + "셨습니다", "past, formal", "passé, formel"],
    [stem + "시고", "and", "et"],
    [stem + "시는", "describes a noun (present)", "devant un nom (présent)"],
    [stem + "신", "describes a noun (past)", "devant un nom (passé)"],
    [stem + "실", "describes a noun (future)", "devant un nom (futur)"],
    [stem + "시면", "if", "si"],
    [stem + "셔서", "so, and then", "donc, puis"],
    [stem + "시지만", "but", "mais"],
    [stem + "시죠", "…, right?", "…, n'est-ce pas ?"],
    [stem + "십시오", "please (very formal)", "veuillez (très formel)"]
  ]);
  hon("계시다", "계");
  hon("드시다", "드");
  hon("주무시다", "주무");
  put("푸다", [["퍼요", "present, polite", "présent, poli"], ["펐어요", "past", "passé"]]);
})();
