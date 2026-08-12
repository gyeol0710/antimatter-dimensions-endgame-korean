export const resurgenceUpgrades = {
  ipSurge: {
    name: "끝없는 쇄도",
    id: "ipSurge",
    cost: new Decimal(10000),
    description: "무한 포인트가 반물질과 같아지고 대기 중인 무한 포인트만큼 반물질 생산량에 배율을 적용합니다"
  },
  epSurge: {
    name: "영원의 쇄도",
    id: "epSurge",
    cost: new Decimal(1e6),
    description: "영원 포인트가 반물질과 같아지고 대기 중인 영원 포인트만큼 반물질 생산량에 배율을 적용합니다"
  },
  realSurge: {
    name: "우주 방출",
    id: "realSurge",
    cost: new Decimal(1e8),
    description: "엔드게임이 리얼리티 횟수를 생성합니다"
  },
  rmSurge: {
    name: "우주의 쇄도",
    id: "rmSurge",
    cost: new Decimal(1e10),
    description: "리얼리티 횟수가 리얼리티 머신 획득량과 상한에 배율을 적용하며, 모든 거듭제곱 효과 뒤에 적용됩니다"
  },
  imSurge: {
    name: "만들어진 종말",
    id: "imSurge",
    cost: new Decimal(1e12),
    description: "엔드게임 횟수에 따라 허수 머신 상한에 거듭제곱을 적용합니다",
    effect: () => 1 + Math.log10(Math.log10(player.endgames + 1) + 1),
    formatEffect: value => formatPow(value, 2, 3)
  },
  repSurge: {
    name: "복제된 쇄도",
    id: "repSurge",
    cost: new Decimal(1e20),
    description: "이제 복제자의 각 강화 효과에 거듭제곱 효과도 적용됩니다"
  },
  achSurge: {
    name: "도전과제 쇄도",
    id: "achSurge",
    cost: new Decimal(1e30),
    description: "이제 각 도전과제 배율 강화 효과에 거듭제곱 효과도 적용됩니다"
  },
  curr1Surge: {
    name: "무제한 쇄도",
    id: "curr1Surge",
    cost: new Decimal(1e50),
    description: "무한 횟수, 영원 횟수, 시간 정리에 각각 자신의 이중 로그만큼 거듭제곱을 적용합니다"
  },
  curr2Surge: {
    name: "팽창 쇄도",
    id: "curr2Surge",
    cost: new Decimal(1e80),
    description: "Pelle 밖에서만 팽창 시간과 타키온 입자에 각각 자신의 이중 로그만큼 거듭제곱을 적용합니다"
  },
  glyphSurge: {
    name: "희생의 쇄도",
    id: "glyphSurge",
    cost: new Decimal(1e120),
    description: () => `이제 음악 글리프가 이번 엔드게임의 최고 글리프 레벨보다 ${formatInt(1)}레벨 낮게 생성됩니다`
  },
  ethSurge: {
    name: "에테르 진폭",
    id: "ethSurge",
    cost: new Decimal(1e200),
    description: "에테리얼 파워에 우주 구역의 제곱만큼 배율을 적용합니다",
    effect: () => Decimal.pow(Ethereal.cosmicSector, 2),
    formatEffect: value => formatX(value, 2)
  },
  machineSurge: {
    name: "기계적 증폭",
    id: "machineSurge",
    cost: new Decimal("1e350"),
    description: "보유한 별의 곱에 따라 모든 머신에 거듭제곱을 적용합니다",
    effect: () => Decimal.pow(Decimal.log10(Ethereal.stellarProduct).add(1), 0.1),
    formatEffect: value => formatPow(value, 2, 3)
  },
  rsSurge: {
    name: "유물 부활",
    id: "rsSurge",
    cost: new Decimal("1e550"),
    description: "이제 유물 파편의 고유 글리프 효과 계수가 인벤토리 글리프의 총 고유 효과 수를 기반으로 합니다"
  },
  memSurge: {
    name: "기억 증폭",
    id: "memSurge",
    cost: new Decimal("1e800"),
    description: "The Nameless Ones와 V의 기억 기본 획득량을 향상시킵니다"
  },
  entropySurge: {
    name: "엔트로피의 맺음말",
    id: "entropySurge",
    cost: new Decimal("1e1100"),
    description: "엔드게임 횟수에 따라 엔트로피를 더 획득합니다",
    effect: () => Math.pow(player.endgames, 0.5),
    formatEffect: value => formatX(value, 2, 2)
  },
  synergy1: {
    name: "시공간 왜곡 I",
    id: "synergy1",
    cost: new Decimal("1e2250"),
    description: "공간 정리에 따라 시간 정리에 거듭제곱을 적용합니다",
    effect: () => V.spaceTheorems,
    formatEffect: value => formatPow(value, 2)
  },
  synergy2: {
    name: "시공간 왜곡 II",
    id: "synergy2",
    cost: new Decimal("1e2400"),
    description: "Pelle 밖에서 생산한 총 반물질에 따라 셀레스티얼 차원에 거듭제곱을 적용합니다",
    effect: () => Decimal.log10(Decimal.log10(Decimal.log10(player.records.totalAntimatterOutsideDoom).add(1)).add(1)).div(15).add(1),
    formatEffect: value => formatPow(value, 2, 3)
  },
  synergy3: {
    name: "시공간 왜곡 III",
    id: "synergy3",
    cost: new Decimal("1e2550"),
    description: "보유한 별의 곱에 따라 공간 정리에 배율을 적용합니다",
    effect: () => Decimal.log10(Ethereal.stellarProduct).max(1).toNumber(),
    formatEffect: value => formatX(value, 2, 2)
  },
  synergy4: {
    name: "시공간 왜곡 IV",
    id: "synergy4",
    cost: new Decimal("1e2700"),
    description: "시간 정리가 은하 위력을 강화합니다",
    effect: () => Decimal.pow(Decimal.log10(Decimal.log10(player.timestudy.theorem.max(1)).add(1)), 3).add(1),
    formatEffect: value => formatX(value, 2, 2)
  },
  synergy5: {
    name: "시공간 왜곡 V",
    id: "synergy5",
    cost: new Decimal("1e2850"),
    description: "틱스피드에 따라 반물질 생산량에 거듭제곱을 적용합니다",
    effect: () => Decimal.log10(Decimal.log10(Tickspeed.perSecond).add(1)).add(1),
    formatEffect: value => formatPow(value, 2, 3)
  },
  synergy6: {
    name: "완전한 순환",
    id: "synergy6",
    cost: new Decimal("1e4000"),
    description: "셀레스티얼 물질이 에테리얼 파워 생성량을 강화합니다",
    effect: () => Decimal.pow(Decimal.log10(Decimal.log10(Currency.celestialMatter.value.max(1)).add(1)).add(1), 7),
    formatEffect: value => formatX(value, 2, 2)
  },
  unl1: {
    name: "졸업",
    id: "unl1",
    cost: new Decimal("1e7000"),
    description: "엔드게임 마스터리를 더 해금합니다"
  },
  unl2: {
    name: "무",
    id: "unl2",
    cost: new Decimal("1e12000"),
    description: "특이점 마일스톤을 더 해금합니다"
  },
  unl3: {
    name: "성운",
    id: "unl3",
    cost: new Decimal("1e20000"),
    description: "은하력을 더 해금합니다"
  },
  unl4: {
    name: "부활",
    id: "unl4",
    cost: new Decimal("1e33000"),
    description: "승천을 해금합니다"
  }
};
