function rebuyable(config) {
  const effectFunction = config.effect || (x => x);
  const { name, id, maxUpgrades, description, isDisabled, noLabel, onPurchased } = config;
  return {
    rebuyable: true,
    name,
    id,
    cost: () => new Decimal(config.initialCost).times(
      Decimal.pow(config.costIncrease, player.endgame.largeHadronCollider.void.rebuyables[config.id])),
    maxUpgrades,
    description,
    effect: () => effectFunction(player.endgame.largeHadronCollider.void.rebuyables[config.id]),
    isDisabled,
    formatEffect: config.formatEffect,
    formatCost: value => formatPostBreak(value, 2, 0),
    noLabel,
    onPurchased
  };
}

export const nullUpgrades = {
  antimatterDimensionMult: rebuyable({
    name: "텅 빈 에너지",
    id: 0,
    initialCost: 100,
    costIncrease: 10,
    maxUpgrades: Number.MAX_VALUE,
    effect: value => Decimal.pow10(Math.pow(value, 2)),
    description: () => "모든 반물질 차원에 배율을 적용합니다",
    isDisabled: effect => effect.eq(0),
    formatEffect: value => `${formatX(value, 2)}`,
    noLabel: false
  }),
  infinityPointMult: rebuyable({
    name: "비어 있는 광대함",
    id: 1,
    initialCost: 10000,
    costIncrease: 100,
    maxUpgrades: Number.MAX_VALUE,
    effect: value => Decimal.pow10(Math.pow(value, 2)),
    description: () => "무한 포인트 획득량에 배율을 적용합니다",
    isDisabled: effect => effect.eq(0),
    formatEffect: value => `${formatX(value, 2)}`,
    noLabel: false
  }),
  infinityMult: rebuyable({
    name: "버려진 풍요",
    id: 2,
    initialCost: 1e6,
    costIncrease: 1000,
    maxUpgrades: Number.MAX_VALUE,
    effect: value => Decimal.pow(1.25, value),
    description: () => "무한 횟수 획득량에 배율을 적용합니다",
    isDisabled: effect => effect.eq(0),
    formatEffect: value => `${formatX(value, 2, 2)}`,
    noLabel: false
  }),
  infinityDimensionMult: rebuyable({
    name: "무력한 무한",
    id: 3,
    initialCost: 1e8,
    costIncrease: 10000,
    maxUpgrades: Number.MAX_VALUE,
    effect: value => Decimal.pow10(Math.pow(value, 2)),
    description: () => "모든 무한 차원에 배율을 적용합니다",
    isDisabled: effect => effect.eq(0),
    formatEffect: value => `${formatX(value, 2)}`,
    noLabel: false
  }),
  replicantiSpeedMult: rebuyable({
    name: "황량한 복제",
    id: 4,
    initialCost: 1e10,
    costIncrease: 100000,
    maxUpgrades: Number.MAX_VALUE,
    effect: value => Decimal.pow(1.25, value),
    description: () => "복제자 속도에 배율을 적용합니다",
    isDisabled: effect => effect.eq(0),
    formatEffect: value => `${formatX(value, 2, 2)}`,
    noLabel: false
  }),
  eternityPointMult: rebuyable({
    name: "불멸의 무위",
    id: 5,
    initialCost: 1e12,
    costIncrease: 1e6,
    maxUpgrades: Number.MAX_VALUE,
    effect: value => Decimal.pow10(Math.pow(value, 2)),
    description: () => "영원 포인트 획득량에 배율을 적용합니다",
    isDisabled: effect => effect.eq(0),
    formatEffect: value => `${formatX(value, 2)}`,
    noLabel: false
  }),
  timeDimensionMult: rebuyable({
    name: "시간 없는 하찮음",
    id: 6,
    initialCost: 1e15,
    costIncrease: 1e7,
    maxUpgrades: Number.MAX_VALUE,
    effect: value => Decimal.pow10(Math.pow(value, 2)),
    description: () => "모든 시간 차원에 배율을 적용합니다",
    isDisabled: effect => effect.eq(0),
    formatEffect: value => `${formatX(value, 2)}`,
    noLabel: false
  }),
  eternityMult: rebuyable({
    name: "죽지 않는 무용함",
    id: 7,
    initialCost: 1e18,
    costIncrease: 1e8,
    maxUpgrades: Number.MAX_VALUE,
    effect: value => Decimal.pow(1.25, value),
    description: () => "영원 횟수 획득량에 배율을 적용합니다",
    isDisabled: effect => effect.eq(0),
    formatEffect: value => `${formatX(value, 2, 2)}`,
    noLabel: false
  }),
  dilatedTimeMult: rebuyable({
    name: "부풀어 오른 무력함",
    id: 8,
    initialCost: 1e40,
    costIncrease: 1e9,
    maxUpgrades: Number.MAX_VALUE,
    effect: value => Decimal.pow(2, value),
    description: () => "팽창 시간 획득량에 배율을 적용합니다",
    isDisabled: effect => effect.eq(0),
    formatEffect: value => `${formatX(value, 2)}`,
    noLabel: false
  }),
  tachyonParticleMult: rebuyable({
    name: "끝없는 무의미",
    id: 9,
    initialCost: 1e45,
    costIncrease: 1e10,
    maxUpgrades: Number.MAX_VALUE,
    effect: value => Decimal.pow(2, value),
    description: () => "타키온 입자 획득량에 배율을 적용합니다",
    isDisabled: effect => effect.eq(0),
    formatEffect: value => `${formatX(value, 2)}`,
    noLabel: false
  }),
  ncComp: {
    name: "무효화된 일상",
    id: "ncComp",
    cost: Decimal.pow10(5),
    description: "공허 안에서는 일반 도전이 항상 완료된 상태입니다",
    onPurchased: () => NormalChallenges.completeAll()
  },
  alwaysBroken: {
    name: "메마른 돌파",
    id: "alwaysBroken",
    cost: Decimal.pow10(10),
    description: "공허 안에서는 무한이 항상 돌파된 상태입니다",
    onPurchased: () => player.break = true
  },
  icComp: {
    name: "오목한 도전",
    id: "icComp",
    cost: Decimal.pow10(15),
    description: "공허 안에서는 무한 도전이 항상 완료된 상태입니다",
    onPurchased: () => InfinityChallenges.completeAll()
  },
  repUnl: {
    name: "버려진 복제",
    id: "repUnl",
    cost: Decimal.pow10(20),
    description: "공허 안에서는 복제자가 항상 해금되어 있습니다",
    onPurchased: () => Replicanti.unlock(true)
  },
  eterMiles: {
    name: "영원한 가장",
    id: "eterMiles",
    cost: Decimal.pow10(25),
    description: () => `영원 ${formatInt(100)}회를 보유한 채 공허를 시작합니다`,
    onPurchased: () => Currency.eternities.bumpTo(100)
  },
  limerick1: {
    name: "먼지로 만들어진 AI가 있었네",
    id: "limerick1",
    cost: Decimal.pow10(30),
    description: () => `이제 공허 안에서도 도전과제 ${formatInt(111)}과 ${formatInt(118)}의 효과가 적용됩니다`
  },
  limerick2: {
    name: "그 시는 인간의 신뢰를 얻었네",
    id: "limerick2",
    cost: Decimal.pow10(45),
    description: () => `이제 공허 안에서도 도전과제 ${formatInt(143)}의 효과가 적용됩니다`
  },
  limerick3: {
    name: "존재가 당위를 따른다면",
    id: "limerick3",
    cost: Decimal.pow10(60),
    description: "공허 안에서는 영원 도전이 항상 완전히 완료된 상태입니다",
    onPurchased: () => {
      player.eternityChalls = {
        eterc1: 5,
        eterc2: 5,
        eterc3: 5,
        eterc4: 5,
        eterc5: 5,
        eterc6: 5,
        eterc7: 5,
        eterc8: 5,
        eterc9: 5,
        eterc10: 5,
        eterc11: 5,
        eterc12: 5
      }
    }
  },
  limerick4: {
    name: "그들이 생각한 대로 행할 것이고",
    id: "limerick4",
    cost: Decimal.pow10(80),
    description: "시간 팽창이 해금된 상태로 공허를 시작합니다",
    onPurchased: () => {
      if (!player.dilation.studies.includes(1)) player.dilation.studies.push(1);
    }
  },
  limerick5: {
    name: "결국 우리 모두는 해야 할 일을 하지",
    id: "limerick5",
    cost: Decimal.pow10(100),
    description: "공허 안에서는 현실 이전의 모든 자동화와 오토메이터가 이제 항상 활성화됩니다"
  }
};
