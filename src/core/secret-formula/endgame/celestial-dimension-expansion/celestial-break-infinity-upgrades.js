function rebuyable(config) {
  const effectFunction = config.effect || (x => x);
  const { id, maxUpgrades, description, isDisabled, noLabel, onPurchased } = config;
  return {
    rebuyable: true,
    id,
    cost: () => config.initialCost * Math.pow(config.costIncrease, player.endgame.celDimExpansion.celestialInfinityRebuyables[config.id]),
    maxUpgrades,
    description,
    effect: () => effectFunction(player.endgame.celDimExpansion.celestialInfinityRebuyables[config.id]),
    isDisabled,
    formatEffect: config.formatEffect ||
      (value => {
        return (value === config.maxUpgrades
          ? `현재: ${formatX(10 - value)}`
          : `현재: ${formatX(10 - value)} | 다음: ${formatX(10 - value - 1)}`);
      }),
    formatCost: value => format(value, 2, 0),
    noLabel,
    onPurchased
  };
}

export const celestialBreakInfinityUpgrades = {
  autoCD1: {
    id: "autoCD1",
    cost: 5e4,
    description: "셀레스티얼 차원 1~4 자동구매기를 해금합니다"
  },
  autoCD2: {
    id: "autoCD2",
    cost: 1e5,
    description: "셀레스티얼 차원 5~8 자동구매기를 해금합니다"
  },
  autoCDPlus: {
    id: "autoCDPlus",
    cost: 1e6,
    description: "셀레스티얼 틱스피드, 셀레스티얼 차원 가속, 셀레스티얼 은하, 셀레스티얼 크런치 자동구매기를 해금합니다"
  },
  betterAuto: {
    id: "betterAuto",
    cost: 1e9,
    description: () => `셀레스티얼 차원과 관련된 모든 자동화가 ${formatX(3)} 빨라집니다`,
    effect: 3
  },
  bulkCelDimBoosts: {
    id: "bulkCelDimBoosts",
    cost: 1e15,
    description: "셀레스티얼 차원 가속 자동구매기의 최대 구매 모드를 해금합니다"
  },
  celInfGen: {
    id: "celInfGen",
    cost: 1e24,
    description: () => `가장 빠른 기록의 ${formatPercents(0.5)} 속도로 셀레스티얼 무한을 생성합니다`
  },
  celTickspeedCostMult: rebuyable({
    id: 0,
    initialCost: 1e5,
    costIncrease: 20,
    maxUpgrades: 8,
    description: "셀레스티얼 무한 이후 셀레스티얼 틱스피드 업그레이드의 비용 배율 스케일링을 감소시킵니다",
    noLabel: true,
    onPurchased: () => GameCache.celestialTickSpeedMultDecrease.invalidate()
  }),
  celDimCostMult: rebuyable({
    id: 1,
    initialCost: 4e5,
    costIncrease: 100,
    maxUpgrades: 7,
    description: "셀레스티얼 무한 이후 셀레스티얼 차원의 비용 배율 스케일링을 감소시킵니다",
    noLabel: true,
    onPurchased: () => GameCache.celestialDimensionMultDecrease.invalidate()
  }),
  cipGen: rebuyable({
    id: 2,
    initialCost: 1e6,
    costIncrease: 10,
    maxUpgrades: 10,
    effect: value => player.disablePostReality ? DC.D0 : Player.bestRunCIPPM.times(value / 20),
    description: () => {
      let generation = `최고 셀레스티얼 무한 포인트/분의 ${formatInt(5 * player.endgame.celDimExpansion.celestialInfinityRebuyables[2])}%`;
      if (!CelestialBreakInfinityUpgrade.cipGen.isCapped) {
        generation += ` ➜ ${formatInt(5 * (1 + player.endgame.celDimExpansion.celestialInfinityRebuyables[2]))}%`;
      }
      return `최근 10회의 셀레스티얼 무한을 기준으로 ${generation}를 생성합니다`;
    },
    isDisabled: effect => effect.eq(0),
    formatEffect: value => `${format(value, 2, 1)} 셀레스티얼 무한 포인트/분`,
    noLabel: false
  }),
  celDimPurchaseBuff: rebuyable({
    id: 3,
    initialCost: 1e9,
    costIncrease: 1e3,
    maxUpgrades: 10,
    effect: value => player.disablePostReality ? 1 : Math.pow(1.2, value),
    description: () => `셀레스티얼 차원의 구매당 배율을 ${formatPercents(0.2)}만큼 증가시킵니다`,
    formatEffect: value => `${formatX(value, 2, 2)}`,
    noLabel: false
  }),
  celDimboostBuff: rebuyable({
    id: 4,
    initialCost: 1e12,
    costIncrease: 1e6,
    maxUpgrades: 10,
    effect: value => player.disablePostReality ? 1 : Math.pow(1.5, value),
    description: () => `셀레스티얼 차원 가속 배율을 ${formatPercents(0.5)}만큼 증가시킵니다`,
    formatEffect: value => `${formatX(value, 2, 2)}`,
    noLabel: false
  }),
  celGalaxyBuff: rebuyable({
    id: 5,
    initialCost: 1e15,
    costIncrease: 1e9,
    maxUpgrades: 10,
    effect: value => player.disablePostReality ? 1 : Math.pow(1.1, value),
    description: () => `셀레스티얼 은하가 셀레스티얼 틱스피드에 주는 배율을 ${formatPercents(0.1)}만큼 증가시킵니다`,
    formatEffect: value => `${formatX(value, 2, 2)}`,
    noLabel: false
  })
};
