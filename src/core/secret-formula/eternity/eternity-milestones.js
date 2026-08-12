export const eternityMilestones = {
  autobuyerIPMult: {
    eternities: 1,
    reward: "무한 포인트 배율 자동구매기를 해금합니다.",
    pelleUseless: true
  },
  keepAutobuyers: {
    eternities: 2,
    reward: "영원을 일반 도전이 완료되고, 무한이 돌파되었으며, 모든 자동구매기를 보유한 상태로 시작합니다."
  },
  autobuyerReplicantiGalaxy: {
    eternities: 3,
    reward: "복제자 은하 자동구매기를 해금합니다."
  },
  keepInfinityUpgrades: {
    eternities: 4,
    reward: "모든 무한 업그레이드를 보유한 상태로 영원을 시작합니다.",
    givenByPelle: () => PelleUpgrade.keepInfinityUpgrades.isBought,
    pelleUseless: true
  },
  bigCrunchModes: {
    eternities: 5,
    reward: "빅 크런치 자동구매기의 추가 옵션을 해금합니다."
  },
  autoEP: {
    eternities: 6,
    reward: () => {
      const EPmin = getOfflineEPGain(TimeSpan.fromMinutes(new Decimal(1)).totalMilliseconds);
      const em200 = getEternitiedMilestoneReward(TimeSpan.fromHours(new Decimal(1)).totalMilliseconds,
        EternityMilestone.autoEternities.isReached).gt(0);
      const em1000 = getInfinitiedMilestoneReward(TimeSpan.fromHours(new Decimal(1)).totalMilliseconds,
        EternityMilestone.autoInfinities.isReached).gt(0);
      if (!player.options.offlineProgress) return `이 마일스톤은 오프라인 영원 포인트 생성을 제공하지만,
        현재 오프라인 진행이 비활성화되어 있습니다`;
      const effectText = (em200 || em1000) ? "(비활성화)" : `현재: ${format(EPmin, 2, 2)} 영원 포인트/분`;
      return `오프라인일 때 이전 영원에서 기록한 분당 최고 영원 포인트의 ${formatPercents(0.25)}를
        획득합니다 (${effectText})`;
    },
    activeCondition: () => (player.options.offlineProgress
      ? `다른 오프라인 마일스톤(${formatInt(200)} 또는 ${formatInt(1000)})이
        활성화되지 않은 동안 적용됩니다`
      : ""),
  },
  autoIC: {
    eternities: 7,
    reward: `무한 도전을 해금하는 즉시 완료하며,
      차원 희생 자동구매기를 유지합니다`,
    pelleUseless: true
  },
  keepBreakUpgrades: {
    eternities: 8,
    reward: "모든 무한 돌파 업그레이드를 보유한 채로 영원을 시작합니다.",
    givenByPelle: () => PelleUpgrade.keepBreakInfinityUpgrades.isBought,
    pelleUseless: true
  },
  autobuyMaxGalaxies: {
    eternities: 9,
    reward: "반물질 은하 자동구매기의 최대 자동구매 옵션을 해금합니다."
  },
  unlockReplicanti: {
    eternities: 10,
    reward: "복제자가 해금된 상태로 영원을 시작합니다.",
    givenByPelle: () => PelleUpgrade.replicantiStayUnlocked.isBought,
    pelleUseless: true
  },
  autobuyerID1: {
    eternities: 11,
    reward: "제1 무한 차원 자동구매기를 해금합니다.",
    givenByPelle: () => PelleUpgrade.IDAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerID2: {
    eternities: 12,
    reward: "제2 무한 차원 자동구매기를 해금합니다.",
    givenByPelle: () => PelleUpgrade.IDAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerID3: {
    eternities: 13,
    reward: "제3 무한 차원 자동구매기를 해금합니다.",
    givenByPelle: () => PelleUpgrade.IDAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerID4: {
    eternities: 14,
    reward: "제4 무한 차원 자동구매기를 해금합니다.",
    givenByPelle: () => PelleUpgrade.IDAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerID5: {
    eternities: 15,
    reward: "제5 무한 차원 자동구매기를 해금합니다.",
    givenByPelle: () => PelleUpgrade.IDAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerID6: {
    eternities: 16,
    reward: "제6 무한 차원 자동구매기를 해금합니다.",
    givenByPelle: () => PelleUpgrade.IDAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerID7: {
    eternities: 17,
    reward: "제7 무한 차원 자동구매기를 해금합니다.",
    givenByPelle: () => PelleUpgrade.IDAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerID8: {
    eternities: 18,
    reward: "제8 무한 차원 자동구매기를 해금합니다.",
    givenByPelle: () => PelleUpgrade.IDAutobuyers.isBought,
    pelleUseless: true
  },
  autoUnlockID: {
    eternities: 25,
    reward: "무한 차원의 해금 조건을 만족하면 해당 무한 차원이 자동으로 해금됩니다."
  },
  unlockAllND: {
    eternities: 30,
    reward: "모든 반물질 차원을 구매할 수 있는 상태로 시작합니다."
  },
  replicantiNoReset: {
    eternities: 40,
    reward: `복제자 은하가 더 이상 반물질, 반물질 차원, 틱스피드,
      차원 희생 또는 차원 가속을 초기화하지 않습니다`,
    pelleUseless: true
  },
  autobuyerReplicantiChance: {
    eternities: 50,
    reward: "복제자 복제 확률 업그레이드 자동구매기를 해금합니다.",
    givenByPelle: () => PelleUpgrade.replicantiAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerReplicantiInterval: {
    eternities: 60,
    reward: "복제자 생성 간격 업그레이드 자동구매기를 해금합니다.",
    givenByPelle: () => PelleUpgrade.replicantiAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerReplicantiMaxGalaxies: {
    eternities: 80,
    reward: "최대 복제자 은하 개수 업그레이드 자동구매기를 해금합니다.",
    givenByPelle: () => PelleUpgrade.replicantiAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerEternity: {
    eternities: 100,
    reward: "영원 자동 구매기를 해금합니다."
  },
  autoEternities: {
    eternities: 200,
    reward: () => {
      if (!player.options.offlineProgress) return `이 마일스톤은 오프라인에서 영원을 생성하지만,
        현재 오프라인 진행이 비활성화되어 있습니다`;
      const eternities = getEternitiedMilestoneReward(TimeSpan.fromHours(new Decimal(1)).totalMilliseconds,
        player.eternities.gte(200));
      // As far as I can tell, using templates here as Codefactor wants would lead to nested templates,
      // which seems messy to say the least.
      const realTime = PlayerProgress.seenAlteredSpeed() ? " 실제 시간 기준" : "";
      // eslint-disable-next-line prefer-template
      return `오프라인일 때 가장 빠른${realTime} 영원 속도의 ${formatPercents(0.5)}로 영원을 획득합니다 ` +
        (eternities.gt(0) ? `(현재: ${format(eternities, 2, 2)}/시간)` : "(비활성화)");
    },
    activeCondition: () => (player.options.offlineProgress
      ? `모든 도전과 시간 팽창 밖에 있어야 하며, 영원 자동구매기가 영원 포인트 0에서 영원에 도달하도록 설정되어야 합니다.
        이 마일스톤의 효과는 ${formatInt(33)}ms에서 상한에 도달합니다.`
      : ""),
      pelleUseless: true
  },
  autoInfinities: {
    eternities: 1000,
    reward: () => {
      if (!player.options.offlineProgress) return `이 마일스톤은 오프라인에서 무한을 생성하지만,
        현재 오프라인 진행이 비활성화되어 있습니다`;
      const infinities = getInfinitiedMilestoneReward(TimeSpan.fromHours(new Decimal(1)).totalMilliseconds,
        player.eternities.gte(1000));
      // eslint-disable-next-line prefer-template
      return `오프라인일 때 이번 영원에서 기록한 시간당 최고 무한 횟수의 ${formatPercents(0.5)}만큼
        무한을 획득합니다 ` +
        (infinities.gt(0) ? `(현재: ${format(infinities, 2, 2)}/시간)` : "(비활성화)");
    },
    activeCondition: () => (player.options.offlineProgress
      ? `일반/무한 도전 및 영원 도전 4와 12 밖에 있어야 하고,
        빅 크런치 자동구매기가 켜진 채 ${formatInt(5)}초 이하의 시간 모드로 설정되어야 하며,
        영원 자동구매기는 꺼져 있어야 합니다.`
      : ""),
      pelleUseless: true
  }
};
