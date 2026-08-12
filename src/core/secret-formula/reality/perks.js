export const PERK_FAMILY = {
  ANTIMATTER: "ANTIMATTER",
  INFINITY: "INFINITY",
  ETERNITY: "ETERNITY",
  DILATION: "DILATION",
  REALITY: "REALITY",
  AUTOMATION: "AUTOMATION",
  ACHIEVEMENT: "ACHIEVEMENT",
};

// This function isn't used in-game, see note below for its intended usage
// eslint-disable-next-line no-unused-vars
function vectorToNum(v) {
  return Math.floor(v.x / 5) + 400 * Math.floor(v.y / 5) + 80200;
}

/**
 * In order to reduce boilerplate code and excessive Vector object declarations, the node positions in fixed layouts
 * are specified as numbers which are decoded on-the-fly using positionNumToVector in PerksTab.vue. The function
 * vectorToNum above is the inverse of that function.
 *
 * To make a new preset layout, define vectorToNum in the console, move all the nodes around in-game and then run
 *    Object.values(PerkNetwork.network.body.nodes).filter(n => n.edges.length !== 0).map(v => vectorToNum(v))
 * in the console to get all the current node positions. Then, append the resulting numbers to each layoutPosList
 * array below and make the appripriate entry in PerkLayouts.
 *
 * Note: This encoding/decoding only works properly for coordinates with values between -1000 and 1000, and will
 * be slightly off for vectors whose coordinates aren't divisible by 5
 */
export const perks = {
  firstPerk: {
    id: 0,
    label: "시작",
    family: PERK_FAMILY.REALITY,
    get description() {
      return `현실 연구의 도전과제 요구 조건을 제거하고
      현실 달성 시 서로 다른 글리프 ${formatInt(4)}개 중 하나를 선택할 수 있게 합니다.`;
    },
    effect: 4,
    layoutPosList: [76596, 80200, 80600, 80200, 80188, 67769],
  },
  startAM: {
    id: 10,
    label: "SAM",
    family: PERK_FAMILY.ANTIMATTER,
    get description() {
      return `모든 초기화를 반물질 ${format(5e130)}개로 시작합니다.`;
    },
    bumpCurrency: () => Currency.antimatter.bumpTo(5e130),
    effect: 5e130,
    layoutPosList: [76559, 80600, 80199, 80600, 82191, 75745],
  },
  startIP1: {
    id: 12,
    label: "SIP1",
    family: PERK_FAMILY.INFINITY,
    get description() {
      return `모든 영원과 현실을 무한 포인트 ${format(5e15)}개로 시작합니다.`;
    },
    bumpCurrency: () => Currency.infinityPoints.bumpTo(5e15),
    effect: 5e15,
    layoutPosList: [74523, 80599, 79798, 80599, 82594, 91322],
  },
  startIP2: {
    id: 13,
    label: "SIP2",
    family: PERK_FAMILY.INFINITY,
    get description() {
      return `모든 영원과 현실을 무한 포인트 ${format(5e130)}개로 시작합니다.`;
    },
    bumpCurrency: () => Currency.infinityPoints.bumpTo(5e130),
    effect: 5e130,
    layoutPosList: [62111, 80598, 79797, 80998, 82597, 91690],
  },
  startEP1: {
    id: 14,
    label: "SEP1",
    family: PERK_FAMILY.ETERNITY,
    get description() {
      return `모든 현실을 영원 포인트 ${formatInt(10)}개로 시작합니다.`;
    },
    bumpCurrency: () => Currency.eternityPoints.bumpTo(10),
    effect: 10,
    automatorPoints: 5,
    shortDescription: () => `영원 포인트 ${formatInt(10)}개로 시작`,
    layoutPosList: [88915, 80999, 79398, 80598, 82197, 103734],
  },
  startEP2: {
    id: 15,
    label: "SEP2",
    family: PERK_FAMILY.ETERNITY,
    get description() {
      return `모든 현실을 영원 포인트 ${format(5000)}개로 시작합니다.`;
    },
    bumpCurrency: () => Currency.eternityPoints.bumpTo(5000),
    effect: 5000,
    layoutPosList: [92484, 81398, 78998, 80597, 82200, 102193],
  },
  startEP3: {
    id: 16,
    label: "SEP3",
    family: PERK_FAMILY.ETERNITY,
    get description() {
      return `모든 현실을 영원 포인트 ${format(5e9)}개로 시작합니다.`;
    },
    bumpCurrency: () => Currency.eternityPoints.bumpTo(5e9),
    effect: 5e9,
    automatorPoints: 10,
    shortDescription: () => `영원 포인트 ${format(5e9)}개로 시작`,
    layoutPosList: [96459, 81798, 78997, 80596, 82203, 106224],
  },
  startTP: {
    id: 17,
    label: "STP",
    family: PERK_FAMILY.DILATION,
    get description() {
      return `시간 팽창 해금 후 타키온 입자 ${formatInt(10)}개를 획득합니다.`;
    },
    effect: () => (Enslaved.isRunning ? 1 : 10),
    automatorPoints: 5,
    shortDescription: () => `타키온 입자 ${formatInt(10)}개로 시작`,
    layoutPosList: [102120, 81399, 79399, 80197, 81800, 109376],
  },
  antimatterNoReset: {
    id: 30,
    label: "ANR",
    family: PERK_FAMILY.ANTIMATTER,
    description: `차원 가속과 반물질 은하가 더 이상 반물질, 반물질 차원,
      틱스피드 또는 차원 희생을 초기화하지 않습니다.`,
    layoutPosList: [85343, 81000, 79799, 80199, 82194, 92553],
  },
  studyPassive: {
    id: 31,
    label: "PASS",
    family: PERK_FAMILY.ETERNITY,
    get description() {
      return `시간 연구 122를 영원 포인트 ${formatX(50)} 배율로, 시간 연구 142를
        무한 포인트 ${formatX(DC.E50)} 배율로 개선합니다.
        ${Pelle.isDoomed ? "" : `또한 시간 연구 132가 복제자를 ${format(3)}배 빠르게 만듭니다.`}`;
    },
    layoutPosList: [67054, 79400, 80999, 80202, 78594, 52589],
  },
  autounlockEU1: {
    id: 40,
    label: "EU1",
    family: PERK_FAMILY.ETERNITY,
    description: `영원 횟수를 보유하면 영원 업그레이드의 첫 번째 줄을 무료로 자동 해금합니다.`,
    layoutPosList: [89407, 80601, 80201, 79800, 80591, 73007],
  },
  autounlockEU2: {
    id: 41,
    label: "EU2",
    family: PERK_FAMILY.ETERNITY,
    get description() {
      return `영원 업그레이드의 두 번째 줄을 원래 가격보다
        ${formatX(1e10)} 저렴하게 자동 구매합니다.`;
    },
    layoutPosList: [103008, 81001, 80202, 79400, 80594, 81867],
  },
  autounlockDilation1: {
    id: 42,
    label: "DU1",
    family: PERK_FAMILY.DILATION,
    description: "시간 팽창 해금 후 시간 팽창 업그레이드의 두 번째 줄을 무료로 자동 해금합니다.",
    layoutPosList: [119833, 81801, 79403, 79398, 80200, 97510],
  },
  autounlockDilation2: {
    id: 43,
    label: "DU2",
    family: PERK_FAMILY.DILATION,
    description: "시간 팽창 해금 후 시간 팽창 업그레이드의 세 번째 줄을 무료로 자동 해금합니다.",
    layoutPosList: [124260, 82201, 79003, 79397, 80203, 85513],
  },
  autounlockDilation3: {
    id: 44,
    label: "ATT",
    family: PERK_FAMILY.DILATION,
    description: "구매할 수 있게 되면 시간 정리 자동 생산 시간 팽창 업그레이드를 자동 구매합니다.",
    automatorPoints: 5,
    shortDescription: () => "시간 정리 생산 자동 구매",
    layoutPosList: [124289, 82601, 79002, 79396, 80206, 72282],
  },
  autounlockTD: {
    id: 45,
    label: "ATD",
    family: PERK_FAMILY.DILATION,
    description: "구매할 수 있게 되면 제5-8 시간 차원을 자동 해금합니다.",
    automatorPoints: 5,
    shortDescription: () => "제5-8 시간 차원 자동 해금",
    layoutPosList: [127117, 82600, 79001, 79796, 80209, 61869],
  },
  autounlockReality: {
    id: 46,
    label: "REAL",
    family: PERK_FAMILY.REALITY,
    get description() {
      return `영원 포인트 ${format(DC.E4000)}개를 보유하고 제8 시간 차원을 해금하면
        현실을 자동 해금합니다.`;
    },
    automatorPoints: 10,
    shortDescription: () => "현실 자동 해금",
    layoutPosList: [124343, 83000, 79000, 79795, 80212, 71046],
  },
  bypassIDAntimatter: {
    id: 51,
    label: "IDR",
    family: PERK_FAMILY.INFINITY,
    description: "무한 차원에서 반물질 요구 조건을 제거합니다.",
    layoutPosList: [51317, 80998, 79397, 80997, 82600, 104489],
  },
  bypassTGReset: {
    id: 52,
    label: "TGR",
    family: PERK_FAMILY.DILATION,
    description: "두 번째 반복 구매 시간 팽창 업그레이드가 팽창된 시간을 초기화하지 않습니다.",
    layoutPosList: [116568, 81800, 79801, 79798, 81400, 112677],
  },
  bypassECDilation: {
    id: 53,
    label: "DILR",
    family: PERK_FAMILY.DILATION,
    description: "시간 팽창 해금에서 영원 도전 11, 영원 도전 12 및 총 시간 정리 " +
      "요구 조건을 제거합니다.",
    automatorPoints: 5,
    shortDescription: () => `시간 팽창 해금에 시간 정리만 필요`,
    layoutPosList: [129011, 81802, 80203, 80198, 80600, 109116],
  },
  bypassEC1Lock: {
    id: 54,
    label: "EC1R",
    family: PERK_FAMILY.ETERNITY,
    description: "시간 연구 181에서 영원 도전 1 요구 조건을 제거합니다.",
    layoutPosList: [64284, 79000, 81399, 80603, 78597, 44167],
  },
  bypassEC2Lock: {
    id: 55,
    label: "EC2R",
    family: PERK_FAMILY.ETERNITY,
    description: "시간 연구 181에서 영원 도전 2 요구 조건을 제거합니다.",
    layoutPosList: [55463, 78999, 80998, 80602, 78197, 48944],
  },
  bypassEC3Lock: {
    id: 56,
    label: "EC3R",
    family: PERK_FAMILY.ETERNITY,
    description: "시간 연구 181에서 영원 도전 3 요구 조건을 제거합니다.",
    layoutPosList: [75475, 79001, 81400, 80203, 78997, 47822],
  },
  bypassEC5Lock: {
    id: 57,
    label: "EC5R",
    family: PERK_FAMILY.ETERNITY,
    description: "시간 연구 62에서 영원 도전 5 요구 조건을 제거합니다.",
    layoutPosList: [70626, 79800, 81000, 80201, 78591, 62607],
  },
  autocompleteEC1: {
    id: 60,
    label: "PEC1",
    family: PERK_FAMILY.AUTOMATION,
    get description() {
      return `현실 시간 ${formatInt(60)}분마다 영원 도전 1단계를 자동 완료합니다.
              영원 도전은 순서대로 완료되며 다음 영원 도전으로 넘어가려면
              이전의 모든 영원 도전을 완전히 완료해야 합니다.`;
    },
    effect: 60,
    automatorPoints: 5,
    shortDescription: () => `${formatInt(60)}분마다 영원 도전 자동 완료`,
    layoutPosList: [90660, 79402, 81002, 79803, 79397, 46664],
  },
  autocompleteEC2: {
    id: 61,
    label: "PEC2",
    family: PERK_FAMILY.AUTOMATION,
    get description() {
      return `현실 시간 ${formatInt(40)}분마다 영원 도전 1단계를 자동 완료합니다.
        (${formatInt(20)}분 감소)`;
    },
    effect: 40,
    layoutPosList: [95485, 79002, 81402, 79804, 79400, 53486],
  },
  autocompleteEC3: {
    id: 62,
    label: "PEC3",
    family: PERK_FAMILY.AUTOMATION,
    get description() {
      return `현실 시간 ${formatInt(20)}분마다 영원 도전 1단계를 자동 완료합니다.
        (${formatInt(20)}분 감소)`;
    },
    effect: 20,
    automatorPoints: 10,
    shortDescription: () => `${formatInt(20)}분마다 영원 도전 자동 완료`,
    layoutPosList: [96311, 78602, 81401, 80204, 79403, 61903],
  },
  studyActiveEP: {
    id: 70,
    label: "ACT",
    family: PERK_FAMILY.ETERNITY,
    description: "액티브 경로의 배율이 항상 최대가 됩니다.",
    layoutPosList: [56633, 79399, 80599, 80601, 78194, 58565],
  },
  studyIdleEP: {
    id: 71,
    label: "IDL",
    family: PERK_FAMILY.ETERNITY,
    get description() {
      return `방치 경로의 배율이 이번 무한/영원에서 ${formatInt(15)}분을 보낸 상태로 시작합니다.`;
    },
    effect: 15,
    layoutPosList: [80248, 79401, 81001, 79802, 78994, 56239],
  },
  studyECRequirement: {
    id: 72,
    label: "ECR",
    family: PERK_FAMILY.ETERNITY,
    description: "영원 도전 해금에서 시간 정리 이외의 요구 조건을 제거합니다.",
    automatorPoints: 10,
    shortDescription: () => "영원 도전의 추가 요구 조건 제거",
    layoutPosList: [62714, 78600, 81398, 80604, 78600, 40599],
  },
  studyECBulk: {
    id: 73,
    label: "ECB",
    family: PERK_FAMILY.ETERNITY,
    description:
      `영원 도전의 더 높은 단계 목표에 도달하면
      여러 단계를 한 번에 완료할 수 있습니다.`,
    automatorPoints: 15,
    shortDescription: () => "영원 도전 일괄 완료",
    layoutPosList: [62741, 78200, 81397, 81004, 78603, 41435],
  },
  retroactiveTP1: {
    id: 80,
    label: "TP1",
    family: PERK_FAMILY.DILATION,
    get description() {
      return `세 번째 반복 구매 시간 팽창 업그레이드를 구매할 때
        현재 타키온 입자에 ${formatFloat(1.5, 1)} 배율을 적용합니다.`;
    },
    effect: 1.5,
    layoutPosList: [111739, 81799, 79800, 79797, 81403, 115434],
  },
  retroactiveTP2: {
    id: 81,
    label: "TP2",
    family: PERK_FAMILY.DILATION,
    get description() {
      return `세 번째 반복 구매 시간 팽창 업그레이드를 구매할 때
        현재 타키온 입자에 ${formatInt(2)} 배율을 적용합니다.`;
    },
    effect: 2,
    layoutPosList: [103757, 82199, 79401, 80196, 81406, 117382],
  },
  retroactiveTP3: {
    id: 82,
    label: "TP3",
    family: PERK_FAMILY.DILATION,
    get description() {
      return `세 번째 반복 구매 시간 팽창 업그레이드를 구매할 때
        현재 타키온 입자에 ${formatFloat(2.5, 1)} 배율을 적용합니다.`;
    },
    effect: 2.5,
    layoutPosList: [96175, 82599, 79400, 80195, 81409, 116540],
  },
  retroactiveTP4: {
    id: 83,
    label: "TP4",
    family: PERK_FAMILY.DILATION,
    get description() {
      return `세 번째 반복 구매 시간 팽창 업그레이드를 구매할 때
        현재 타키온 입자에 ${formatInt(3)} 배율을 적용합니다.`;
    },
    effect: 3,
    automatorPoints: 10,
    shortDescription: () => `${formatX(3)} 타키온 입자 업그레이드가 소급 적용`,
    layoutPosList: [86984, 82598, 78999, 80595, 81412, 114103],
  },
  autobuyerDilation: {
    id: 100,
    label: "DAU",
    family: PERK_FAMILY.AUTOMATION,
    description: "반복 구매 가능한 시간 팽창 업그레이드의 자동구매기를 해금합니다.",
    automatorPoints: 5,
    shortDescription: () => "시간 팽창 업그레이드 자동구매기",
    layoutPosList: [117401, 81401, 79802, 79799, 80597, 96672],
  },
  autobuyerFasterID: {
    id: 101,
    label: "IDAS",
    family: PERK_FAMILY.AUTOMATION,
    get description() {
      return `무한 차원 자동구매기가 ${formatX(3)} 빠르게 작동합니다.`;
    },
    effect: 1 / 3,
    automatorPoints: 5,
    shortDescription: () => "더 빠른 무한 차원 자동구매기",
    layoutPosList: [74095, 80199, 80198, 81000, 82997, 77720],
  },
  autobuyerFasterReplicanti: {
    id: 102,
    label: "REPAS",
    family: PERK_FAMILY.AUTOMATION,
    get description() {
      return `복제자 자동구매기가 ${formatX(3)} 빠르게 작동합니다.`;
    },
    effect: 1 / 3,
    automatorPoints: 5,
    shortDescription: () => "더 빠른 복제자 자동구매기",
    layoutPosList: [57685, 80198, 80197, 80999, 83000, 79297],
  },
  autobuyerFasterDilation: {
    id: 103,
    label: "DAS",
    family: PERK_FAMILY.AUTOMATION,
    get description() {
      return `시간 팽창 업그레이드 자동구매기가 ${formatX(3)} 빠르게 작동합니다.`;
    },
    effect: 1 / 3,
    automatorPoints: 5,
    shortDescription: () => "더 빠른 시간 팽창 자동구매기",
    layoutPosList: [113895, 82602, 79402, 79395, 80609, 72715],
  },
  ttBuySingle: {
    id: 104,
    label: "TTS",
    family: PERK_FAMILY.AUTOMATION,
    description: "매 틱마다 시간 정리를 하나씩 구매하는 시간 정리 자동구매기를 해금합니다.",
    automatorPoints: 5,
    shortDescription: () => "시간 정리 단일 구매 자동구매기",
    layoutPosList: [44631, 79398, 80598, 81001, 77797, 57325],
  },
  ttFree: {
    id: 105,
    label: "TTF",
    family: PERK_FAMILY.AUTOMATION,
    get description() {
      return `시간 정리를 구매할 때 더 이상 반물질, 무한 포인트 또는 영원 포인트를 소모하지 않습니다.`;
    },
    layoutPosList: [33840, 78998, 80597, 81002, 77800, 67309],
  },
  ttBuyMax: {
    id: 106,
    label: "TTM",
    family: PERK_FAMILY.AUTOMATION,
    get description() {
      return `시간 정리 자동구매기가 시간 정리를 최대로 구매하도록 업그레이드합니다.`;
    },
    automatorPoints: 10,
    shortDescription: () => "시간 정리 최대 구매 자동구매기",
    layoutPosList: [25055, 78598, 80997, 81003, 77803, 65739],
  },
  dilationAutobuyerBulk: {
    id: 107,
    label: "DAB",
    family: PERK_FAMILY.AUTOMATION,
    get description() {
      return `시간 팽창 업그레이드 자동구매기가 한 번에 세 배 많은 업그레이드를 구매합니다.`;
    },
    effect: 3,
    automatorPoints: 5,
    shortDescription: () => "시간 팽창 자동구매기 대량 구매",
    layoutPosList: [127384, 81400, 79803, 79399, 81000, 103048],
  },
  achievementGroup1: {
    id: 201,
    label: "ACH1",
    family: PERK_FAMILY.ACHIEVEMENT,
    get description() {
      return `도전과제 하나당 자동 달성 시간을 ${formatInt(20)}분으로 줄입니다.
        (${formatInt(10)}분 감소)`;
    },
    effect: 10,
    automatorPoints: 5,
    shortDescription: () => `더 빠른 도전과제: ${formatInt(20)}분마다`,
    layoutPosList: [65386, 80201, 80601, 79801, 79791, 81371],
  },
  achievementGroup2: {
    id: 202,
    label: "ACH2",
    family: PERK_FAMILY.ACHIEVEMENT,
    get description() {
      return `도전과제 하나당 자동 달성 시간을 ${formatInt(12)}분으로 줄입니다.
        (${formatInt(8)}분 감소)`;
    },
    effect: 8,
    layoutPosList: [54976, 80202, 80602, 79401, 79794, 93780],
  },
  achievementGroup3: {
    id: 203,
    label: "ACH3",
    family: PERK_FAMILY.ACHIEVEMENT,
    get description() {
      return `도전과제 하나당 자동 달성 시간을 ${formatInt(6)}분으로 줄입니다.
        (${formatInt(6)}분 감소)`;
    },
    effect: 6,
    layoutPosList: [44168, 80602, 80603, 79402, 79797, 83005],
  },
  achievementGroup4: {
    id: 204,
    label: "ACH4",
    family: PERK_FAMILY.ACHIEVEMENT,
    get description() {
      return `도전과제 하나당 자동 달성 시간을 ${formatInt(2)}분으로 줄입니다.
        (${formatInt(4)}분 감소)`;
    },
    effect: 4,
    layoutPosList: [33760, 81002, 81003, 79403, 79800, 95422],
  },
  achievementGroup5: {
    id: 205,
    label: "ACHNR",
    family: PERK_FAMILY.ACHIEVEMENT,
    get description() {
      return `도전과제의 첫 ${formatInt(13)}개 행을 즉시 해금하며
        현실 달성 시 더 이상 초기화하지 않습니다.`;
    },
    automatorPoints: 10,
    shortDescription: () => "현실 달성 시 도전과제 유지",
    layoutPosList: [23353, 81402, 81403, 79404, 79803, 84639],
  }
};

export const perkConnections = (function() {
  const p = perks;
  // First item is the start, other items are the ends
  const groups = [
    [p.firstPerk, p.achievementGroup1, p.startAM, p.autounlockEU1, p.bypassEC5Lock],
    [p.startAM, p.antimatterNoReset, p.startIP1],
    [p.antimatterNoReset, p.startEP1],
    [p.startIP1, p.startIP2, p.startEP1, p.autobuyerFasterID],
    [p.startIP2, p.bypassIDAntimatter, p.autobuyerFasterReplicanti],
    [p.startEP1, p.startEP2, p.startTP],
    [p.startEP2, p.startEP3],
    [p.startTP, p.startEP1, p.retroactiveTP1],
    [p.autounlockEU1, p.autounlockEU2],
    [p.autounlockEU2, p.autounlockEU1, p.autobuyerDilation],
    [p.autounlockDilation1, p.autounlockDilation2],
    [p.autounlockDilation2, p.autounlockDilation3],
    [p.autounlockDilation3, p.autobuyerFasterDilation, p.autounlockTD],
    [p.autounlockTD, p.autounlockReality],
    [p.bypassTGReset, p.autobuyerDilation, p.retroactiveTP1],
    [p.bypassEC1Lock, p.bypassEC2Lock, p.bypassEC3Lock, p.studyECRequirement],
    [p.bypassEC2Lock, p.studyActiveEP, p.bypassEC1Lock],
    [p.bypassEC3Lock, p.studyIdleEP, p.bypassEC1Lock],
    [p.bypassEC5Lock, p.studyActiveEP, p.studyIdleEP, p.studyPassive],
    [p.studyPassive, p.bypassEC1Lock],
    [p.autocompleteEC1, p.autocompleteEC2],
    [p.autocompleteEC2, p.autocompleteEC3],
    [p.studyActiveEP, p.bypassEC2Lock, p.ttBuySingle],
    [p.studyIdleEP, p.bypassEC3Lock, p.autocompleteEC1],
    [p.studyECRequirement, p.studyECBulk],
    [p.retroactiveTP1, p.bypassTGReset, p.startTP, p.retroactiveTP2],
    [p.retroactiveTP2, p.retroactiveTP3],
    [p.retroactiveTP3, p.retroactiveTP4],
    [p.autobuyerDilation, p.autounlockEU2, p.autounlockDilation1,
      p.bypassECDilation, p.bypassTGReset, p.dilationAutobuyerBulk],
    [p.autobuyerFasterID],
    [p.ttBuySingle, p.ttFree],
    [p.ttFree, p.ttBuyMax],
    [p.achievementGroup1, p.achievementGroup2],
    [p.achievementGroup2, p.achievementGroup3],
    [p.achievementGroup3, p.achievementGroup4],
    [p.achievementGroup4, p.achievementGroup5],
  ];
  const connections = {};
  for (const perk of Object.values(perks)) {
    const connectedPerks = [];
    const directConnections = groups.find(g => g[0] === perk);
    if (directConnections !== undefined) {
      connectedPerks.push(...directConnections.slice(1));
    }
    const indirectConnections = groups
      .filter(g => g.slice(1).some(groupPerk => groupPerk === perk))
      .map(g => g[0]);
    connectedPerks.push(...indirectConnections);
    connections[perk.id] = [...new Set(connectedPerks.map(connectedPerk => connectedPerk.id))];
  }
  return connections;
}());
