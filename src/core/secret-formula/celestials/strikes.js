import wordShift from "../../word-shift";

export const pelleStrikes = {
  infinity: {
    id: 1,
    requirementDescription: "무한에 도달하세요",
    penaltyDescription: () => `반물질 차원 배율을 ${formatPow(0.5, 1, 1)}만큼 거듭제곱합니다`,
    rewardDescription: () => `${wordShift.wordCycle(PelleRifts.vacuum.name)} 균열을 해금하고
      영구 무한 자동구매기를 얻습니다`,
    rift: () => PelleRifts.vacuum,
    isDestroyed: () => PelleStrikeUpgrade.pelleStrike1.canBeApplied
  },
  powerGalaxies: {
    id: 2,
    requirementDescription: "은하에 동력을 공급하세요",
    penaltyDescription: () => `무한 차원 배율을 ${formatPow(0.5, 1, 1)}만큼 거듭제곱합니다`,
    rewardDescription: () => `${wordShift.wordCycle(PelleRifts.decay.name)} 균열을 해금합니다`,
    rift: () => PelleRifts.decay,
    isDestroyed: () => PelleStrikeUpgrade.pelleStrike2.canBeApplied
  },
  eternity: {
    id: 3,
    requirementDescription: "영원에 도달하세요",
    penaltyDescription: () => `복제자가 ${format(DC.E2000)}보다 많으면 속도가 훨씬 더 느려집니다`,
    rewardDescription: () => `${wordShift.wordCycle(PelleRifts.chaos.name)} 균열을 해금합니다`,
    rift: () => PelleRifts.chaos,
    isDestroyed: () => PelleStrikeUpgrade.pelleStrike3.canBeApplied
  },
  ECs: {
    id: 4,
    requirementDescription: () => `시간 정리 ${formatInt(115)}개에 도달하세요`,
    penaltyDescription: () => `영원 도전에서는 ${wordShift.wordCycle(PelleRifts.vacuum.name)}의
      무한 포인트 배율이 ${formatPercents(0.3)}만큼만 적용되고 목표의 ${formatPercents(0.15)}에서
      상한에 도달합니다`,
    rewardDescription: () => `${wordShift.wordCycle(PelleRifts.recursion.name)} 균열을 해금합니다`,
    rift: () => PelleRifts.recursion,
    isDestroyed: () => PelleStrikeUpgrade.pelleStrike4.canBeApplied
  },
  dilation: {
    id: 5,
    requirementDescription: "시간을 팽창시키세요",
    penaltyDescription: "시간 팽창이 영구적으로 활성화됩니다",
    rewardDescription: () => `아마겟돈 후에도 시간 팽창 연구를 유지하고 잔재 획득량을 강화하며
      ${wordShift.wordCycle(PelleRifts.paradox.name)} 균열을 해금합니다`,
    rift: () => PelleRifts.paradox,
    isDestroyed: () => PelleStrikeUpgrade.pelleStrike5.canBeApplied
  }
};
