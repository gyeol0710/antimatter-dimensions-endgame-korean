export const progressStages = [
  /**
   * This is used in both the catchup modal and for cloud save comparisons. Due to the fact that it's used for
   * cloud comparisons, there's a lot of processing that needs to be done on raw player-like objects that aren't
   * actually the player object itself. This means we can't take advantage of a lot of accessors and whatnot, and
   * that many props which are normally Decimals are actually Strings at this point.
   * @template
   * {
   *  @property {Number} id         Value corresponding to entry in PROGRESS_STAGE enum
   *  @property {String} name       Name describing the stage of the game this entry is associated with
   *  @property {function: @return Boolean} hasReached        Checking function for whether this stage has been
   *    reached; all checks are run in descending order, starting at the end of the list and moving upward. The
   *    last one checked (first entry) always returns true as a catch-all condition
   *  @property {String | function: @return Number} suggestedResource     A resource or multiple resources which may be
   *    useful for the player to aim for at this stage. It's okay to reference the player object in this prop because
   *    it's only ever used in the catchup modal and not in the cloud save conflict checker.
   *  @property {function: @return Number} subProgressValue   A value between 0 and 1 corresponding approximately
   *    to the progress within a stage. Values near 0 correspond to near the end of the previous stage and values
   *    near 1 correspond to near the start of the next stage; however in-between values are not an indicator of
   *    absolute progress and shouldn't be used as such
   * }
   */
  {
    id: PROGRESS_STAGE.PRE_INFINITY,
    name: "반물질 생산",
    hasReached: () => true,
    suggestedResource: "반물질",
    // Galaxies are worth 1/3 each, boosts break ties within galaxies, and antimatter breaks ties within boosts
    subProgressValue: save => 0.33 * save.galaxies + 0.02 * save.dimensionBoosts +
      new Decimal(save.antimatter).log10().toNumber() / 16000,
  },
  {
    id: PROGRESS_STAGE.EARLY_INFINITY,
    name: "무한",
    hasReached: save => new Decimal(save.infinities).gt(0),
    suggestedResource: "무한 포인트",
    // Half from infinity count, half from crunch autobuyer state
    subProgressValue: save => Math.clampMax(new Decimal(save.infinities).toNumber(), 500) / 1000 +
      Math.log10(150000 / player.auto.bigCrunch.interval) / 6.35,
  },
  {
    id: PROGRESS_STAGE.BREAK_INFINITY,
    name: "무한 돌파",
    hasReached: save => save.auto.bigCrunch.interval <= 100,
    suggestedResource: "무한 포인트",
    subProgressValue: save => Math.sqrt(new Decimal(save.infinityPoints).log10().toNumber() / 145),
  },
  {
    id: PROGRESS_STAGE.REPLICANTI,
    name: "복제자",
    hasReached: save => save.replicanti.unl,
    suggestedResource: "무한 포인트",
    subProgressValue: save => Math.sqrt((new Decimal(save.infinityPoints).log10().toNumber() - 140) / 170),
  },
  {
    id: PROGRESS_STAGE.EARLY_ETERNITY,
    name: "영원",
    hasReached: save => new Decimal(save.eternities).gt(0),
    suggestedResource: "영원 포인트 및 영원 횟수",
    subProgressValue: save => new Decimal(save.eternities).clampMax(1e5).toNumber() / 1e5,
  },
  {
    id: PROGRESS_STAGE.ETERNITY_CHALLENGES,
    name: "영원 도전",
    hasReached: save => save.eternityChalls.eterc1 > 0,
    suggestedResource: "영원 도전 완료 횟수 및 영원 포인트",
    // Half from ECs, half from EP (up to e1300)
    subProgressValue: save => 0.008 * Object.values(save.eternityChalls).reduce((sum, c) => sum + c, 0) +
      new Decimal(save.eternityPoints).log10().toNumber() / 2500,
  },
  {
    id: PROGRESS_STAGE.EARLY_DILATION,
    name: "시간 팽창",
    hasReached: save => new Decimal(save.dilation.dilatedTime).gt(0),
    suggestedResource: "팽창 시간",
    subProgressValue: save => new Decimal(save.dilation.dilatedTime).log10().toNumber() / 15,
  },
  {
    id: PROGRESS_STAGE.LATE_ETERNITY,
    name: "영원 후반부",
    hasReached: save => new Decimal(save.dilation.dilatedTime).gt(1e15),
    suggestedResource: () => (new Decimal(player.eternityPoints).log10().toNumber() > 4000
      ? "영원 포인트 및/또는 팽창 시간. 또는 현실을 해금해 첫 현실을 진행할 수 있습니다"
      : "영원 포인트 및/또는 팽창 시간"
    ),
    // Tracks up to e8000 even though many players will reality well before that; we still want to distinguish
    // which saves are farther all the way up to the zeroth-reality RM cap
    subProgressValue: save => Math.clampMax(Math.sqrt((new Decimal(save.eternityPoints).log10().toNumber() - 1300) / 6700), 1),
  },
  {
    id: PROGRESS_STAGE.EARLY_REALITY,
    name: "현실",
    hasReached: save => new Decimal(save.realities).gt(0),
    // For the first few realities, we give a bit of extra suggestion just in case the player ended up taking a break
    // and returned in the middle of a reality while they're still relatively slow
    suggestedResource: () => {
      if (player.realities.gt(5)) return "리얼리티 머신";
      const suffix = "(현재 현실), 장기적으로는 리얼리티 머신";
      if (player.eternities.eq(0)) return `무한 포인트 ${suffix}`;
      if (player.dilation.dilatedTime.eq(0)) return `영원 포인트 ${suffix}`;
      return `영원 포인트 및/또는 팽창 시간 ${suffix}`;
    },
    subProgressValue: save => Math.clampMax(new Decimal(save.realities).toNumber() / 100, 1),
  },
  {
    id: PROGRESS_STAGE.TERESA,
    name: "테레사 (첫 번째 셀레스티얼)",
    hasReached: save => save.celestials?.teresa?.quoteBits > 0 || save.celestials?.teresa?.quotes.length > 0,
    suggestedResource: "리얼리티 머신",
    subProgressValue: save => Decimal.log10(save.celestials.teresa.pouredAmount.plus(1)).toNumber() / 21,
  },
  {
    id: PROGRESS_STAGE.EFFARIG,
    name: "에파리그 (두 번째 셀레스티얼)",
    hasReached: save => save.celestials?.effarig?.quoteBits > 0 || save.celestials?.effarig?.quotes.length > 0,
    suggestedResource: "리얼리티 머신 및 유물 파편",
    subProgressValue: save => Decimal.log10(new Decimal(save.celestials.effarig.relicShards).add(1)).toNumber() / 14,
  },
  {
    id: PROGRESS_STAGE.ENSLAVED,
    name: "이름없는 자들 (세 번째 셀레스티얼)",
    hasReached: save => save.celestials?.enslaved?.quoteBits > 0 || save.celestials?.enslaved?.quotes.length > 0,
    suggestedResource: "리얼리티 머신 및 글리프 레벨",
    subProgressValue: save => Math.sqrt((new Decimal(save.reality.realityMachines).log10().toNumber() - 30) / 30),
  },
  {
    id: PROGRESS_STAGE.V,
    name: "V (네 번째 셀레스티얼)",
    hasReached: save => save.celestials?.v?.quoteBits > 0 || save.celestials?.v?.quotes.length > 0,
    suggestedResource: "V 도전과제 수",
    subProgressValue: save => 0.0277 * Object.values(save.celestials.v.runUnlocks)
      .reduce((total, ach) => total + ach, 0),
  },
  {
    id: PROGRESS_STAGE.RA,
    name: "라 (다섯 번째 셀레스티얼)",
    hasReached: save => save.celestials?.ra?.quoteBits > 0 || save.celestials?.ra?.quotes.length > 0,
    suggestedResource: "셀레스티얼 기억",
    subProgressValue: save => Object.values(save.celestials.ra.pets).reduce((sum, pet) => sum + pet.level, 0) / 100,
  },
  {
    id: PROGRESS_STAGE.IMAGINARY_MACHINES,
    name: "허수 머신",
    hasReached: save => new Decimal(save.reality?.iMCap).gt(0),
    suggestedResource: "허수 머신",
    subProgressValue: save => Decimal.log10(new Decimal(save.reality.iMCap).add(1)).toNumber() / 9,
  },
  {
    id: PROGRESS_STAGE.LAITELA,
    name: "라이텔라 (여섯 번째 셀레스티얼)",
    hasReached: save => save.celestials?.laitela?.quoteBits > 0 || save.celestials?.laitela?.quotes.length > 0,
    suggestedResource: "암흑 물질 및 특이점",
    subProgressValue: save => new Decimal(save.celestials.laitela.darkMatter).log10().toNumber() / 308.25,
  },
  {
    id: PROGRESS_STAGE.PELLE,
    name: "펠레 (일곱 번째 셀레스티얼)",
    hasReached: save => save.celestials?.pelle?.doomed || save.celestials?.pelle?.quotes.length > 0,
    suggestedResource: "잔재",
    subProgressValue: save => Decimal.log10(new Decimal(save.celestials.pelle.remnants).add(1)).toNumber() / 9,
  },
];
