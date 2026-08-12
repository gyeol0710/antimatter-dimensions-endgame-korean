export const infinityChallenges = [
  {
    id: 1,
    description: `틱스피드(일반 도전 9) 및 빅 크런치(일반 도전 12)를 제외한
      모든 일반 도전의 제한이 동시에 적용됩니다.`,
    goal: DC.E650,
    isQuickResettable: true,
    reward: {
      description: () => `완료한 무한 도전마다 모든 무한 차원에 ${formatX(2.3, 1, 1)} 배율을 적용합니다`,
      effect: () => Math.pow(2.3, InfinityChallenges.completed.length),
      formatEffect: value => formatX(value, 1, 1)
    },
    unlockAM: DC.E2000,
  },
  {
    id: 2,
    description: () => `제8 반물질 차원을 보유하면 ${formatInt(400)}밀리초마다
      차원 희생이 자동으로 일어납니다.`,
    goal: DC.E10500,
    isQuickResettable: false,
    reward: {
      description: () => `차원 희생 자동구매기를 해금하고 차원 희생이 강해집니다.
        ${Sacrifice.getSacrificeDescription({ "InfinityChallenge2isCompleted": false })} ➜
        ${Sacrifice.getSacrificeDescription({ "InfinityChallenge2isCompleted": true })}`,
    },
    unlockAM: DC.E11000,
  },
  {
    id: 3,
    description: () =>
      `틱스피드 업그레이드는 항상 ${formatX(1)}입니다. 대신 틱스피드 업그레이드를 구매할 때마다
      모든 반물질 차원에 고정 배율이 적용되며, 이 배율은 반물질 은하에 따라 증가합니다.`,
    goal: DC.E5000,
    isQuickResettable: false,
    effect: () => Decimal.pow(player.galaxies.times(0.005).add(1.05), player.totalTickBought),
    formatEffect: value => formatX(value, 2, 2),
    reward: {
      description: `반물질 은하와 틱스피드 구매 횟수에 따라 반물질 차원이 증폭됩니다.`,
      effect: () => (Laitela.continuumActive
        ? Decimal.pow(player.galaxies.times(0.005).add(1.05), Tickspeed.continuumValue)
        : Decimal.pow(player.galaxies.times(0.005).add(1.05), player.totalTickBought)),
      formatEffect: value => formatX(value, 2, 2),
    },
    unlockAM: DC.E12000,
  },
  {
    id: 4,
    description: () =>
      `가장 최근에 구매한 반물질 차원만 정상적으로 생산합니다. 다른 모든 반물질 차원의
      생산량은 감소합니다 (${formatPow(0.25, 2, 2)}).`,
    goal: DC.E13000,
    isQuickResettable: true,
    effect: 0.25,
    reward: {
      description: () => `모든 반물질 차원에 ${formatPow(1.05, 2, 2)} 승수가 적용됩니다.`,
      effect: 1.05
    },
    unlockAM: DC.E14000,
  },
  {
    id: 5,
    description:
      `제1-4 반물질 차원을 구매하면 더 저렴한 모든 반물질 차원의 가격이 증가합니다.
      제5-8 반물질 차원을 구매하면 더 비싼 모든 반물질 차원의 가격이 증가합니다.`,
    goal: DC.E16500,
    isQuickResettable: true,
    reward: {
      description: () =>
        `모든 은하가 ${formatPercents(0.1)} 더 강해지고 은하 및
        차원 가속의 요구량이 ${formatInt(1)} 감소합니다`,
      effect: 1.1
    },
    unlockAM: DC.E18000,
  },
  {
    id: 6,
    description: () =>
      `제2 반물질 차원을 ${formatInt(1)}개 이상 보유하면 지수적으로 증가하는 물질이
      모든 반물질 차원의 배율을 나눕니다.`,
    goal: DC.D2E22222,
    isQuickResettable: true,
    effect: () => Currency.matter.value.clampMin(1),
    formatEffect: value => `/${format(value, 1, 2)}`,
    reward: {
      description: "틱스피드에 비례하여 무한 차원의 생산량을 증가시킵니다.",
      effect: () => Tickspeed.perSecond.pow(0.0005),
      formatEffect: value => formatX(value, 2, 2)
    },
    unlockAM: DC.E22500,
  },
  {
    id: 7,
    description: () => {
      // Copied from DimBoost.power; this is the base amount before any multipliers. Post-eternity this isn't
      // necessarily 2.5x by the time the player sees this challenge; it's probably most accurate to say what it
      // currently is, and this phrasing avoids 10x ➜ 10x with the old description.
      const mult = Effects.max(
        2,
        InfinityUpgrade.dimboostMult,
        InfinityChallenge(7).reward,
        TimeStudy(81)
      );
      return `반물질 은하를 구매할 수 없습니다. 기본 차원 가속 배율의 최대값이
        ${formatX(10)}로 증가합니다. (현재 기본 배율: ${formatX(mult, 2, 1)})`;
    },
    goal: DC.E10000,
    isQuickResettable: false,
    effect: 10,
    reward: {
      description: () => `차원 가속의 배율이 ${formatX(4)} 상승합니다.`,
      effect: 4
    },
    unlockAM: DC.E23000,
  },
  {
    id: 8,
    description: () =>
      `반물질 차원 생산량이 시간에 따라 빠르고 지속적으로 감소합니다. 반물질 차원 또는 틱스피드
        업그레이드를 구매하면 생산량이 ${formatPercents(1)}로 돌아간 뒤 다시 감소하기 시작합니다.`,
    goal: DC.E27000,
    isQuickResettable: true,
    effect: () => DC.D0_8446303389034288.pow(
      Decimal.max(0, player.records.thisInfinity.time.sub(player.records.thisInfinity.lastBuyTime))),
    reward: {
      description:
        "제2-7 반물질 차원이 제1, 8 반물질 차원의 배율을 일부 적용받습니다.",
      effect: () => AntimatterDimension(1).multiplier.times(AntimatterDimension(8).multiplier).pow(0.02).clampMax(DC.E1E15.powEffectsOf(EndgameMastery(91), EndgameUpgrade(11))).pow(Decimal.max(Decimal.pow(5, Decimal.log10(Decimal.log10(AntimatterDimension(1).multiplier.times(AntimatterDimension(8).multiplier).pow(0.02)).div(Decimal.log10(DC.E1E15.powEffectsOf(EndgameMastery(91), EndgameUpgrade(11)))))), 1)),
      cap: () => Alpha.isDestroyed ? DC.BEMAX : DC.E1E15.powEffectsOf(EndgameMastery(91), EndgameUpgrade(11)),
      formatEffect: value => formatX(value, 2, 2)
    },
    unlockAM: DC.E28000,
  },
];
