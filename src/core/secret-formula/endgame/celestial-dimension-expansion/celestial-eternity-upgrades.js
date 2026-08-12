function rebuyable(config) {
  const effectFunction = config.effect || (x => x);
  const { id, maxUpgrades, description, isDisabled, noLabel, onPurchased, isDecimal } = config;
  return {
    rebuyable: true,
    id,
    cost: () => Decimal.pow(config.costIncrease, player.endgame.celDimExpansion.celestialEternityRebuyables[config.id]).times(config.initialCost),
    maxUpgrades,
    description,
    effect: () => effectFunction(player.endgame.celDimExpansion.celestialEternityRebuyables[config.id]),
    isDisabled,
    formatEffect: config.formatEffect,
    formatCost: value => format(value, 2, 0),
    noLabel,
    onPurchased,
    isDecimal
  };
}

export const celestialEternityUpgrades = {
  betterCIP: rebuyable({
    id: 0,
    initialCost: 1,
    costIncrease: 1e4,
    maxUpgrades: 10,
    effect: value => player.disablePostReality ? 1 : Math.pow(0.99, value),
    description: () => `셀레스티얼 무한 포인트 변환 공식의 제수를 ${formatPercents(0.01)}만큼 감소시킵니다`,
    formatEffect: value => `${formatX(value, 2, 3)}`,
    noLabel: false
  }),
  largeCDMult: rebuyable({
    id: 1,
    initialCost: 10,
    costIncrease: 10,
    maxUpgrades: 1000,
    effect: value => player.disablePostReality ? DC.D1 : Decimal.pow(1000, value),
    description: () => `구매할 때마다 셀레스티얼 차원에 ${formatX(1000)}를 곱합니다`,
    formatEffect: value => `${formatX(value, 2, 2)}`,
    noLabel: false
  }),
  conversionFormulaImprovement: rebuyable({
    id: 2,
    initialCost: 1e100,
    costIncrease: 1e50,
    maxUpgrades: 25,
    effect: value => player.disablePostReality ? 1 : Math.pow(1.01, value),
    description: () => `셀레스티얼 차원 변환 지수에 ${formatX(1.01, 2, 2)}를 곱합니다`,
    formatEffect: value => `${formatX(value, 2, 3)}`,
    noLabel: false
  }),
  startBreak: {
    id: "startBreak",
    cost: 10,
    description: "셀레스티얼 무한이 돌파된 상태로 셀레스티얼 영원을 시작합니다"
  },
  bulkCelGalaxies: {
    id: "bulkCelGalaxies",
    cost: 1e3,
    description: "셀레스티얼 은하 자동구매기의 최대 구매 모드를 해금합니다"
  },
  instaAutos: {
    id: "instaAutos",
    cost: 1e6,
    description: "셀레스티얼 차원과 관련된 자동구매기의 간격이 이제 즉시가 됩니다"
  },
  x2CIPAuto: {
    id: "x2CIPAuto",
    cost: 1e10,
    description: () => `셀레스티얼 무한 포인트 ${formatX(2)} 배율 업그레이드의 자동구매기를 해금합니다`
  },
  betterCelCrunchAuto: {
    id: "betterCelCrunchAuto",
    cost: 1e15,
    description: "셀레스티얼 크런치 자동구매기를 개선합니다"
  },
  startInf: {
    id: "startInf",
    cost: 1e20,
    description: "모든 셀레스티얼 무한 업그레이드를 구매한 상태로 시작합니다"
  },
  startingBoosts: {
    id: "startingBoosts",
    cost: 1e30,
    description: () => `셀레스티얼 물질 ${format(5e25, 2, 2)}개를 보유한 채 셀레스티얼 크런치와 셀레스티얼 영원을 시작하고,
      셀레스티얼 무한 포인트 ${format(5e25, 2, 2)}개를 보유한 채 셀레스티얼 영원을 시작합니다`,
    effect: 5e25
  },
  startBreakInf: {
    id: "startBreakInf",
    cost: 1e40,
    description: "모든 셀레스티얼 무한 돌파 업그레이드를 구매한 상태로 시작합니다"
  },
  celEternityAuto: {
    id: "celEternityAuto",
    cost: 1e50,
    description: "셀레스티얼 영원 자동구매기를 해금합니다"
  },
  freeDimBoost: {
    id: "freeDimBoost",
    cost: 1e65,
    description: "셀레스티얼 차원 가속을 구매해도 더 이상 아무것도 초기화되지 않습니다"
  },
  freeGalaxy: {
    id: "freeGalaxy",
    cost: 1e80,
    description: "셀레스티얼 은하를 구매해도 더 이상 아무것도 초기화되지 않습니다"
  },
  betterCelEternityAuto: {
    id: "betterCelEternityAuto",
    cost: 1e100,
    description: "셀레스티얼 영원 자동구매기를 개선합니다"
  },
  celTickReduction: {
    id: "celTickReduction",
    cost: 1e150,
    description: () => `돌파 이후 셀레스티얼 틱스피드 비용 스케일링을 ${formatX(1.65, 2, 2)}로 감소시킵니다`,
    effect: 0.35
  },
  celDimReduction: {
    id: "celDimReduction",
    cost: 1e225,
    description: () => `돌파 이후 셀레스티얼 차원 비용 스케일링을 ${formatX(2)}로 감소시킵니다`,
    effect: 1
  },
  passiveCIP: {
    id: "passiveCIP",
    cost: 1e300,
    description: () => `대기 중인 셀레스티얼 무한 포인트의 ${formatPercents(0.01)}를 매초 생성합니다`
  },
};
