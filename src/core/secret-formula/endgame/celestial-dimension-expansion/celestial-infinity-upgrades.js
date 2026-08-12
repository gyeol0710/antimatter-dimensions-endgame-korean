export const celestialInfinityUpgrades = {
  gameSpeedMultCIP: {
    id: "gameSpeedMultCIP",
    cost: 1,
    description: () => `사용하지 않은 셀레스티얼 무한 포인트에 따라 게임 속도에 배율을 얻습니다`,
    effect: () => player.disablePostReality ? DC.D1 : Currency.celestialInfinityPoints.value.plus(1).pow(308),
    formatEffect: value => formatX(value, 2, 1)
  },
  celDimPurchaseBoost: {
    id: "celDimPurchaseBoost",
    cost: 2,
    description: () => `셀레스티얼 차원의 구매당 배율을 ${formatX(3)}로 증가시킵니다`,
    effect: 3
  },
  alphaDecayStartBoost: {
    id: "alphaDecayStartBoost",
    cost: 5,
    description: () => `셀레스티얼 무한 횟수에 따라 알파 붕괴 시작 시간에 아주 작은 보너스를 얻습니다`,
    effect: () => Decimal.pow(player.endgame.celDimExpansion.celestialInfinities, 0.5).div(100).min(1).add(
      DC.D4.times(DC.D1.sub(Decimal.pow(0.8, player.endgame.celDimExpansion.celestialInfinities.max(1).log10().sub(4).max(0))))),
    formatEffect: value => `${TimeSpan.fromHours(value).toStringShort()}`
  },
  celDimBoostBuff: {
    id: "celDimBoostBuff",
    cost: 10,
    description: () => `셀레스티얼 차원 가속의 기본 배율을 ${formatX(100)}로 증가시킵니다`,
    effect: 100
  },
  celGalaxyBuff: {
    id: "celGalaxyBuff",
    cost: 25,
    description: () => `셀레스티얼 은하의 은하당 효과를 ${formatX(1.02, 2, 2)}에서 ${formatX(1.03, 2, 2)}로 증가시킵니다`,
    effect: 1.03
  },
  celestialMatterConversionBuff: {
    id: "celestialMatterConversionBuff",
    cost: 50,
    description: () => `셀레스티얼 물질 변환율의 밑을 ${formatPow(2)}에서 ${formatPow(2.5, 1, 1)}로 증가시킵니다`,
    effect: 2.5
  },
  antimatterCelestialDimBuff: {
    id: "antimatterCelestialDimBuff",
    cost: 100,
    description: "알파 붕괴 후 반물질 지수의 지수만큼 모든 셀레스티얼 차원에 배율을 적용합니다",
    effect: () => Decimal.log10(Decimal.log10(player.antimatter.add(1)).add(1)).max(1)
  },
  cipGen: {
    id: "cipGen",
    cost: 300,
    description: () => `가장 빠른 셀레스티얼 크런치 속도의 ${formatPercents(0.1)}만큼 셀레스티얼 무한 포인트를 생성합니다`,
    effect: () => player.records.bestCelestialInfinity.time.times(10)
  },
  buffedStart: {
    id: "buffedStart",
    cost: 1000,
    description: () => `셀레스티얼 차원 가속 ${formatInt(4)}회와 셀레스티얼 은하 ${formatInt(2)}개를 보유한 채 셀레스티얼 무한을 시작합니다`,
    effect: 4
  }
};
