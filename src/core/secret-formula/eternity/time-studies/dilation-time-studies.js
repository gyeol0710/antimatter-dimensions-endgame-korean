export const dilationTimeStudies = [
  {
    id: 1,
    description: "시간 팽창 해금",
    cost: () => Alpha.isRunning ? AlphaUnlocks.ec11Bulk.effects.nerfA.effectOrDefault(5000) : 5000,
    requirement: () => {
      const ttRequirement = Currency.timeTheorems.max.gte(TimeStudy.dilation.totalTimeTheoremRequirement);
      if ((Ra.unlocks.autoUnlockDilation.canBeApplied && !player.disablePostReality) &&
          ttRequirement &&
          !isInCelestialReality() && !Pelle.isDoomed
      ) {
        return true;
      }
      const tsRequirement = [231, 232, 233, 234].some(id => TimeStudy(id).isBought);
      if (Perk.bypassECDilation.canBeApplied && !player.disablePostReality) return tsRequirement;
      const ecRequirement = EternityChallenge(11).isFullyCompleted && EternityChallenge(12).isFullyCompleted;
      return tsRequirement && ecRequirement && ttRequirement;
    }
  },
  {
    id: 2,
    description: "제5 시간 차원을 해금한다.",
    cost: 1e6,
    requirement: () => PlayerProgress.dilationUnlocked()
  },
  {
    id: 3,
    description: "제6 시간 차원을 해금한다.",
    cost: 1e7,
    requirement: () => TimeStudy.timeDimension(5).isBought
  },
  {
    id: 4,
    description: "제7 시간 차원을 해금한다.",
    cost: 1e8,
    requirement: () => TimeStudy.timeDimension(6).isBought
  },
  {
    id: 5,
    description: "제8 시간 차원을 해금한다.",
    cost: 1e9,
    requirement: () => TimeStudy.timeDimension(7).isBought
  },
  {
    id: 6,
    description: () => {
      if (Pelle.isDoomed) {
        if (player.celestials.pelle.galaxyGenerator.unlocked) return "*";
        return "파멸한 현실에서 벗어날 수 없습니다";
      }
      if (!Pelle.isDoomed) return "현실 해금";
    },
    scrambleText: ["파멸한 현실에서 벗어날 수 없습니다", "파멸한 현실에서 탈출 (반물질 e9e15 필요)"],
    cost: 1,
    requirement: () => TimeStudy.timeDimension(8).isBought &&
      player.records.thisReality.maxEP.log10().gte(4000) &&
      (Perk.firstPerk.isBought || Achievements.preReality.every(a => a.isUnlocked)) &&
      !Pelle.isDoomed
  }
];
