export const celestialEternityPlusUpgrades = {
  megaCelTickspeedReduction: {
    id: "megaCelTickspeedReduction",
    cost: DC.E1000,
    description: () => `셀레스티얼 틱스피드 비용 스케일링 배율을 ${formatX(1.5, 1, 1)}로 감소시킵니다`,
    effect: 0.15,
    onPurchased: () => GameCache.celestialTickSpeedMultDecrease.invalidate()
  },
  megaCelDimReduction: {
    id: "megaCelDimReduction",
    cost: DC.E2000,
    description: () => `셀레스티얼 차원 비용 스케일링 배율을 ${formatX(1.8, 1, 1)}로 감소시킵니다`,
    effect: 0.2,
    onPurchased: () => GameCache.celestialDimensionMultDecrease.invalidate()
  },
  betterCIPFormula: {
    id: "betterCIPFormula",
    cost: DC.E3000,
    description: () => `셀레스티얼 무한 포인트 변환 공식의 제수를 ${formatPercents(0.1)}만큼 감소시킵니다`,
    effect: 0.9
  },
  oldStoneSlabAndSteelDrill: {
    id: "oldStoneSlabAndSteelDrill",
    cost: DC.E4000,
    description: () => (false ? "저주받은 현실을 해금합니다" : "펠레의 영역을 해금합니다"),
    onPurchased: () => Pelle.quotes.reachGoal.show()
  }
};
