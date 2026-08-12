export const alchemyResources = {
  // T1 resources (Non-Effarig "base" resources)
  "power": {
    id: ALCHEMY_RESOURCE.POWER,
    name: "힘",
    symbol: "Ω",
    isBaseResource: true,
    effect: amount => 1 + amount / 125000,
    tier: 1,
    uiOrder: 1,
    unlockedAt: 2,
    description: "반물질 차원 배율을 거듭제곱합니다",
    formatEffect: value => `반물질 차원 배율 ${formatPow(value, 4, 4)}`,
    destroyed: () => !PelleAlchemyUpgrade.alchemyPower.isBought
  },
  "infinity": {
    id: ALCHEMY_RESOURCE.INFINITY,
    name: "무한",
    symbol: "∞",
    isBaseResource: true,
    effect: amount => 1 + amount / 125000,
    tier: 1,
    uiOrder: 2,
    unlockedAt: 3,
    description: "무한 차원 배율을 거듭제곱합니다",
    formatEffect: value => `무한 차원 배율 ${formatPow(value, 4, 4)}`,
    destroyed: () => !PelleAlchemyUpgrade.alchemyInfinity.isBought
  },
  "time": {
    id: ALCHEMY_RESOURCE.TIME,
    name: "시간",
    symbol: "Δ",
    isBaseResource: true,
    effect: amount => 1 + amount / 125000,
    tier: 1,
    uiOrder: 3,
    unlockedAt: 4,
    description: "시간 차원 배율을 거듭제곱합니다",
    formatEffect: value => `시간 차원 배율 ${formatPow(value, 4, 4)}`,
    destroyed: () => !PelleAlchemyUpgrade.alchemyTime.isBought
  },
  "replication": {
    id: ALCHEMY_RESOURCE.REPLICATION,
    name: "복제",
    symbol: "Ξ",
    isBaseResource: true,
    effect: amount => Decimal.pow10(amount / 500),
    tier: 1,
    uiOrder: 4,
    unlockedAt: 5,
    description: `복제 속도를 증가시킵니다`,
    formatEffect: value => `복제 속도 ${formatX(value, 2, 2)}`,
    destroyed: () => !PelleAlchemyUpgrade.alchemyReplication.isBought
  },
  "dilation": {
    id: ALCHEMY_RESOURCE.DILATION,
    name: "팽창",
    symbol: "Ψ",
    isBaseResource: true,
    effect: amount => Decimal.pow10(amount / 1000),
    tier: 1,
    uiOrder: 5,
    unlockedAt: 6,
    description: "팽창 시간 생산량을 증가시킵니다",
    formatEffect: value => `팽창 시간 생산량 ${formatX(value, 2, 2)}`,
    destroyed: () => !PelleAlchemyUpgrade.alchemyDilation.isBought
  },

  // T2 resources (combinations of pairs of T1 resources)
  "cardinality": {
    id: ALCHEMY_RESOURCE.CARDINALITY,
    name: "기수",
    symbol: "α",
    isBaseResource: false,
    effect: amount => 1 + 0.2 / (1 + amount / 12500),
    tier: 2,
    uiOrder: 3,
    unlockedAt: 8,
    description: "복제자가 상한을 넘었을 때의 감속을 줄입니다",
    formatEffect: value => `복제자 간격 증가량: ${format(Number.MAX_VALUE, 2)}마다 ${formatX(1.2, 1, 1)} ➜
      ${formatX(value, 4, 4)}`,
    reagents: [
      {
        resource: ALCHEMY_RESOURCE.TIME,
        amount: 8
      },
      {
        resource: ALCHEMY_RESOURCE.REPLICATION,
        amount: 7
      }
    ],
    destroyed: () => !PelleAlchemyUpgrade.alchemyCardinality.isBought
  },
  "eternity": {
    id: ALCHEMY_RESOURCE.ETERNITY,
    name: "영원",
    symbol: "τ",
    isBaseResource: false,
    effect: amount => 1 + amount / 12500,
    tier: 2,
    uiOrder: 2,
    unlockedAt: 9,
    description: "영원 생성량을 거듭제곱합니다",
    formatEffect: value => `영원 생성량 ${formatPow(value, 4, 4)}`,
    reagents: [
      {
        resource: ALCHEMY_RESOURCE.TIME,
        amount: 11
      },
      {
        resource: ALCHEMY_RESOURCE.INFINITY,
        amount: 4
      }
    ],
    destroyed: () => !PelleAlchemyUpgrade.alchemyEternity.isBought
  },
  "dimensionality": {
    id: ALCHEMY_RESOURCE.DIMENSIONALITY,
    name: "차원성",
    symbol: "ρ",
    isBaseResource: false,
    effect: amount => Decimal.pow10(6 * amount),
    tier: 2,
    uiOrder: 1,
    unlockedAt: 10,
    description: "모든 차원에 큰 배율을 적용합니다",
    formatEffect: value => `모든 차원 ${formatX(value)}`,
    reagents: [
      {
        resource: ALCHEMY_RESOURCE.POWER,
        amount: 10
      },
      {
        resource: ALCHEMY_RESOURCE.INFINITY,
        amount: 5
      }
    ],
    destroyed: () => !PelleAlchemyUpgrade.alchemyDimensionality.isBought
  },
  "inflation": {
    id: ALCHEMY_RESOURCE.INFLATION,
    name: "인플레이션",
    symbol: "λ",
    isBaseResource: false,
    effect: amount => Decimal.pow10(6e9 - 3e5 * amount),
    tier: 2,
    uiOrder: 5,
    unlockedAt: 11,
    description: "매우 큰 배율에 추가 거듭제곱을 적용합니다",
    formatEffect: value => `모든 반물질 차원 배율이 ${format(value)}보다 높으면
      ${formatPow(1.05, 2, 2)}만큼 거듭제곱합니다 `,
    reagents: [
      {
        resource: ALCHEMY_RESOURCE.POWER,
        amount: 9
      },
      {
        resource: ALCHEMY_RESOURCE.DILATION,
        amount: 6
      }
    ],
    destroyed: () => !PelleAlchemyUpgrade.alchemyInflation.isBought
  },
  "alternation": {
    id: ALCHEMY_RESOURCE.ALTERNATION,
    name: "교대",
    symbol: "ω",
    isBaseResource: false,
    effect: amount => amount / 125000,
    tier: 2,
    uiOrder: 4,
    unlockedAt: 12,
    description: "복제자에 따라 타키온 은하의 위력을 증가시킵니다",
    formatEffect: value => `복제자 ${format(DC.E1E6)}개마다 타키온 은하가
      ${formatPercents(value, 2, 2)} 더 강해집니다`,
    reagents: [
      {
        resource: ALCHEMY_RESOURCE.REPLICATION,
        amount: 5
      },
      {
        resource: ALCHEMY_RESOURCE.DILATION,
        amount: 10
      }
    ],
    destroyed: () => !PelleAlchemyUpgrade.alchemyAlternation.isBought
  },

  // T3 resources (Effarig and conbinations of T1/T2 with Effarig)
  "effarig": {
    id: ALCHEMY_RESOURCE.EFFARIG,
    name: "에파리그",
    symbol: "Ϙ",
    isBaseResource: true,
    effect: amount => Decimal.pow10(amount / 1250),
    tier: 1,
    uiOrder: 1.5,
    unlockedAt: 7,
    description: "유물 파편 획득량을 증가시킵니다",
    formatEffect: value => `유물 파편 획득량 ${formatX(value, 2, 2)}`,
    destroyed: () => !PelleAlchemyUpgrade.alchemyEffarig.isBought
  },
  "synergism": {
    id: ALCHEMY_RESOURCE.SYNERGISM,
    name: "상승 작용",
    symbol: "π",
    isBaseResource: false,
    effect: amount => {
      const rawValue = 0.3 + 1.7 * Math.sqrt(amount / 25000);
      return Achievement(175).isUnlocked ? rawValue : Math.min(rawValue, 1);
    },
    tier: 3,
    uiOrder: 2,
    unlockedAt: 13,
    description: "연금술 반응의 생산량을 증가시킵니다",
    formatEffect(value) {
      return `연금술 반응 효율 ${formatPercents(0.3)} ➜ ${formatPercents(value, 2, 2)}
        ${(!Achievement(175).isUnlocked && value >= 1) ? " (상한)" : ""}`;
    },
    reagents: [
      {
        resource: ALCHEMY_RESOURCE.EFFARIG,
        amount: 3
      },
      {
        resource: ALCHEMY_RESOURCE.REPLICATION,
        amount: 16
      },
      {
        resource: ALCHEMY_RESOURCE.INFINITY,
        amount: 14
      }
    ],
    destroyed: () => !PelleAlchemyUpgrade.alchemySynergism.isBought
  },
  "momentum": {
    id: ALCHEMY_RESOURCE.MOMENTUM,
    name: "모멘텀",
    symbol: "μ",
    isBaseResource: false,
    effect: amount => 1 + amount / 100000,
    tier: 3,
    uiOrder: 3,
    unlockedAt: 15,
    description: "시간이 지날수록 영구적으로 증가하는 거듭제곱을 모든 차원에 적용합니다",
    formatEffect: value => `모든 차원 ${formatPow(Ra.momentumValue, 4, 4)}, 자원을 해금한 뒤 현실 시간으로 한 시간마다
      ${format(0.01 * Effects.product(Achievement(175), EndgameMastery(171), Achievement(222)), 3, 3)}씩 증가하며
      최대 ${formatPow(value, 4, 4)}`,
    reagents: [
      {
        resource: ALCHEMY_RESOURCE.EFFARIG,
        amount: 11
      },
      {
        resource: ALCHEMY_RESOURCE.POWER,
        amount: 4
      },
      {
        resource: ALCHEMY_RESOURCE.TIME,
        amount: 20
      }
    ],
    destroyed: () => !PelleAlchemyUpgrade.alchemyMomentum.isBought
  },
  "decoherence": {
    id: ALCHEMY_RESOURCE.DECOHERENCE,
    name: "결어긋남",
    symbol: "ξ",
    isBaseResource: false,
    effect: amount => 0.2 * Math.sqrt(amount / 25000),
    tier: 3,
    uiOrder: 4,
    unlockedAt: 14,
    description: "정제할 때 모든 기본 연금술 자원을 얻습니다",
    formatEffect: value => `정제한 글리프 가치의 ${formatPercents(value, 2)}를 ` +
      "다른 모든 기본 자원에도 제공합니다",
    reagents: [
      {
        resource: ALCHEMY_RESOURCE.EFFARIG,
        amount: 13
      },
      {
        resource: ALCHEMY_RESOURCE.ALTERNATION,
        amount: 8
      }
    ],
    destroyed: () => !PelleAlchemyUpgrade.alchemyDecoherence.isBought
  },

  // T4 resources (resources which feed directly into the final resource)
  "exponential": {
    id: ALCHEMY_RESOURCE.EXPONENTIAL,
    name: "지수",
    symbol: "Γ",
    isBaseResource: false,
    effect: amount => 10 * Math.pow(amount / 10000, 3),
    tier: 4,
    uiOrder: 2,
    unlockedAt: 18,
    description: "복제자에 따라 무한 포인트에 배율을 적용합니다",
    formatEffect: value => `무한 포인트에 복제자${formatPow(value, 2, 3)}만큼 배율 적용`,
    reagents: [
      {
        resource: ALCHEMY_RESOURCE.INFLATION,
        amount: 18
      },
      {
        resource: ALCHEMY_RESOURCE.SYNERGISM,
        amount: 3
      }
    ],
    destroyed: () => !PelleAlchemyUpgrade.alchemyExponential.isBought
  },
  "force": {
    id: ALCHEMY_RESOURCE.FORCE,
    name: "강제력",
    symbol: "Φ",
    isBaseResource: false,
    effect: amount => 10 * amount,
    tier: 4,
    uiOrder: 2,
    unlockedAt: 17,
    description: "리얼리티 머신에 따라 반물질 차원에 배율을 적용합니다",
    formatEffect: value => `반물질 차원에 리얼리티 머신${formatPow(value, 2, 2)}만큼 배율 적용`,
    reagents: [
      {
        resource: ALCHEMY_RESOURCE.DIMENSIONALITY,
        amount: 7
      },
      {
        resource: ALCHEMY_RESOURCE.MOMENTUM,
        amount: 8
      }
    ],
    destroyed: () => !PelleAlchemyUpgrade.alchemyForce.isBought
  },
  "uncountability": {
    id: ALCHEMY_RESOURCE.UNCOUNTABILITY,
    name: "비가산성",
    symbol: "Θ",
    isBaseResource: false,
    effect: amount => 1600 * Math.sqrt(amount / 6250),
    tier: 4,
    uiOrder: 3,
    unlockedAt: 19,
    description: "현실 횟수와 퍼크 포인트를 자동으로 생성합니다",
    formatEffect: value => `초당 현실 횟수와 퍼크 포인트를 각각 ${format(value, 2, 2)}씩 생성`,
    reagents: [
      {
        resource: ALCHEMY_RESOURCE.INFINITY,
        amount: 20
      },
      {
        resource: ALCHEMY_RESOURCE.EFFARIG,
        amount: 6
      },
      {
        resource: ALCHEMY_RESOURCE.CARDINALITY,
        amount: 16
      }
    ],
    destroyed: () => !PelleAlchemyUpgrade.alchemyUncountability.isBought
  },
  "boundless": {
    id: ALCHEMY_RESOURCE.BOUNDLESS,
    name: "무한성",
    symbol: "Π",
    isBaseResource: false,
    effect: amount => amount / 62500,
    tier: 4,
    uiOrder: 1,
    unlockedAt: 20,
    description: "테서랙트를 강화합니다",
    formatEffect: value => `테서랙트가 +${formatPercents(value, 2, 2)} 더 강해집니다`,
    reagents: [
      {
        resource: ALCHEMY_RESOURCE.ETERNITY,
        amount: 13
      },
      {
        resource: ALCHEMY_RESOURCE.INFLATION,
        amount: 18
      }
    ],
    destroyed: () => !PelleAlchemyUpgrade.alchemyBoundless.isBought
  },
  "multiversal": {
    id: ALCHEMY_RESOURCE.MULTIVERSAL,
    name: "다중우주",
    symbol: "Σ",
    isBaseResource: false,
    effect: amount => 32 * Math.pow(amount / 20000, 2),
    tier: 4,
    uiOrder: 5,
    unlockedAt: 16,
    description: "각 현실이 더 많은 현실을 시뮬레이션하게 합니다",
    formatEffect: value => `각 현실이 현실 ${format(value, 2, 3)}회를 추가로 시뮬레이션하고,
      증폭된 것과 동일한 모든 보상을 제공합니다`,
    reagents: [
      {
        resource: ALCHEMY_RESOURCE.ALTERNATION,
        amount: 16
      },
      {
        resource: ALCHEMY_RESOURCE.DECOHERENCE,
        amount: 3
      }
    ],
    destroyed: () => !PelleAlchemyUpgrade.alchemyMultiversal.isBought
  },
  "unpredictability": {
    id: ALCHEMY_RESOURCE.UNPREDICTABILITY,
    name: "예측 불가능성",
    symbol: "Λ",
    isBaseResource: false,
    // Somewhat ugly number to make this show 75.00% at cap
    effect: amount => amount / (8333.33 + amount),
    tier: 4,
    uiOrder: 4,
    unlockedAt: 21,
    description: "각 연금술 반응이 두 번 일어날 확률을 부여합니다",
    formatEffect: value => `모든 연금술 반응이 ${formatPercents(value, 2, 2)} 확률로
      다시 발동합니다`,
    reagents: [
      {
        resource: ALCHEMY_RESOURCE.EFFARIG,
        amount: 15
      },
      {
        resource: ALCHEMY_RESOURCE.DECOHERENCE,
        amount: 3
      },
      {
        resource: ALCHEMY_RESOURCE.SYNERGISM,
        amount: 10
      }
    ],
    destroyed: () => !PelleAlchemyUpgrade.alchemyUnpredictability.isBought
  },

  // T5 (Reality)
  "reality": {
    id: ALCHEMY_RESOURCE.REALITY,
    name: "현실",
    symbol: "Ϟ",
    isBaseResource: false,
    effect: amount => Math.floor(amount),
    tier: 5,
    unlockedAt: 25,
    description: "소모하여 현실 글리프를 만들 수 있습니다",
    formatEffect: value => `모든 현실 자원을 소모해 레벨 ${formatHybridLarge(value, 3)} 현실 글리프를 만듭니다`,
    reagents: [
      {
        resource: ALCHEMY_RESOURCE.EXPONENTIAL,
        amount: 1
      },
      {
        resource: ALCHEMY_RESOURCE.FORCE,
        amount: 1
      },
      {
        resource: ALCHEMY_RESOURCE.UNCOUNTABILITY,
        amount: 1
      },
      {
        resource: ALCHEMY_RESOURCE.BOUNDLESS,
        amount: 1
      },
      {
        resource: ALCHEMY_RESOURCE.MULTIVERSAL,
        amount: 1
      },
      {
        resource: ALCHEMY_RESOURCE.UNPREDICTABILITY,
        amount: 1
      }
    ],
    destroyed: () => !PelleAlchemyUpgrade.alchemyReality.isBought
  },
};
