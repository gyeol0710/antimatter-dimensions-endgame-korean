// I tried to make it relatively simple to add more locks; the idea is that you give it a value here
// and then it's all handled in the backend
// If you need to lock a challenge, set lockedAt to a new Decimal variable reflective of a desired number of Infinities
// They will always be unlocked post-eternity

export const normalChallenges = [
  {
    id: 1,
    legacyId: 1,
    isQuickResettable: false,
    description() {
      return PlayerProgress.eternityUnlocked()
        ? "도전 밖에서 무한에 처음으로 도달하세요."
        : "무한에 처음으로 도달하세요.";
    },
    name: "제1 반물질 차원 자동구매기",
    reward: "제1 반물질 차원 자동구매기 업그레이드",
    lockedAt: DC.D0,
    alphaLockedAt: DC.D0
  },
  {
    id: 2,
    legacyId: 2,
    isQuickResettable: false,
    description:
      () => "반물질 차원 또는 틱스피드 업그레이드를 구매하면 모든 반물질 차원의 생산이 중단됩니다. " +
      `생산량은 ${formatInt(3)}분에 걸쳐 점차 정상으로 돌아옵니다.`,
    name: "제2 반물질 차원 자동구매기",
    reward: "제2 반물질 차원 자동구매기 업그레이드",
    lockedAt: DC.D0,
    alphaLockedAt: DC.D1
  },
  {
    id: 3,
    legacyId: 3,
    isQuickResettable: false,
    description:
      `제1 반물질 차원이 크게 약해지지만 상한 없이 지수적으로 증가하는 배율을 얻습니다.
        이 배율은 차원 가속 및 반물질 은하 이후 초기화됩니다.`,
    name: "제3 반물질 차원 자동구매기",
    reward: "제3 반물질 차원 자동구매기 업그레이드",
    lockedAt: DC.D0,
    alphaLockedAt: DC.D1
  },
  {
    id: 4,
    legacyId: 8,
    isQuickResettable: false,
    description: "반물질 차원을 구매하면 그보다 낮은 단계의 모든 반물질 차원이 자동으로 사라집니다. " +
      "배율을 주지 않는 희생과 같습니다.",
    name: "제4 반물질 차원 자동구매기",
    reward: "제4 반물질 차원 자동구매기 업그레이드",
    lockedAt: DC.D0,
    alphaLockedAt: DC.D1
  },
  {
    id: 5,
    legacyId: 6,
    isQuickResettable: false,
    description:
      () => `틱스피드 업그레이드 배율이 ${formatX(1.1245, 0, 3)}가 아닌 ${formatX(1.080, 0, 3)}에서 시작됩니다.`,
    name: "제5 반물질 차원 자동구매기",
    reward: "제5 반물질 차원 자동구매기 업그레이드",
    lockedAt: DC.D0,
    alphaLockedAt: DC.D1
  },
  {
    id: 6,
    legacyId: 10,
    isQuickResettable: false,
    description: () => `각 반물질 차원의 업그레이드 비용으로 반물질 대신 ${formatInt(2)}단계 낮은 반물질 차원을 ` +
      "사용합니다. 반물질 차원의 가격이 변경됩니다.",
    name: "제6 반물질 차원 자동구매기",
    reward: "제6 반물질 차원 자동구매기 업그레이드",
    lockedAt: DC.D0,
    alphaLockedAt: DC.D1
  },
  {
    id: 7,
    legacyId: 9,
    isQuickResettable: false,
    description: () =>
      `반물질 차원 ${formatInt(10)}개 구매 배율이 ${formatX(1)}로 감소합니다. 차원 가속마다
        ${formatX(0.2, 1, 1)}씩 증가해 최대 ${formatX(2)}가 되며, 어떤 업그레이드의 영향도 받지 않습니다.`,
    name: "제7 반물질 차원 자동구매기",
    reward: "제7 반물질 차원 자동구매기 업그레이드",
    lockedAt: DC.D0,
    alphaLockedAt: DC.D1
  },
  {
    id: 8,
    legacyId: 11,
    isQuickResettable: false,
    description: `차원 가속이 배율을 제공하지 않고 반물질 은하를 구매할 수 없습니다. 차원 희생은
      반물질과 모든 반물질 차원을 초기화하지만 훨씬 더 강한 배율을 제공합니다.`,
    name: "제8 반물질 차원 자동구매기",
    reward: "제8 반물질 차원 자동구매기 업그레이드",
    lockedAt: DC.D0,
    alphaLockedAt: DC.D1
  },
  {
    id: 9,
    legacyId: 5,
    isQuickResettable: true,
    description: () => `틱스피드 업그레이드 또는 같은 반물질 차원 ${formatInt(10)}개를 구매할 때마다 ` +
      "가격이 같은 다른 모든 항목의 가격이 다음 단계로 증가합니다.",
    name: "틱스피드 자동구매기",
    reward: "틱스피드 자동구매기 업그레이드",
    lockedAt: DC.D0,
    alphaLockedAt: DC.D1
  },
  {
    id: 10,
    legacyId: 4,
    isQuickResettable: false,
    description: () => `반물질 차원이 ${formatInt(6)}개만 존재합니다. 차원 가속 및 ` +
      "반물질 은하의 가격이 변경됩니다.",
    name: "자동 차원 가속",
    reward: "차원 가속 자동구매기",
    lockedAt: DC.D16,
    alphaLockedAt: DC.D16
  },
  {
    id: 11,
    legacyId: 12,
    isQuickResettable: true,
    description: () => `제2 반물질 차원을 ${formatInt(1)}개 이상 보유하면 일반 물질이 증가합니다. ` +
      "일반 물질이 반물질을 초과하면 보너스 없이 차원 가속이 일어납니다.",
    name: "자동 반물질 은하",
    reward: "반물질 은하 자동구매기",
    lockedAt: DC.D16,
    alphaLockedAt: DC.D16
  },
  {
    id: 12,
    legacyId: 7,
    isQuickResettable: false,
    description: () => `각 반물질 차원이 ${formatInt(1)}단계가 아닌 ${formatInt(2)}단계 낮은 차원을 생산합니다.
      제1 및 제2 반물질 차원은 모두 반물질을 생산합니다.
      이를 보완하기 위해 제2, 제4, 제6 반물질 차원이 강해집니다.`,
    name: "자동 빅 크런치",
    reward: "빅 크런치 자동구매기",
    lockedAt: DC.D16,
    alphaLockedAt: DC.D16
  }
];
