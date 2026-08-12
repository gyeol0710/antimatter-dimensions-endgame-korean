export const permanentEndgameMasteries = [
  {
    id: 1,
    description: "엔드게임 업그레이드를 해금합니다",
    cost: 20,
    requirement: () => {
      const esRequirement = Currency.endgameSkills.max.gte(EndgameMastery.endgameUpgrades.totalEndgameSkillRequirement);
      const emRequirement = [171].some(id => EndgameMastery(id).isBought);
      return emRequirement && esRequirement;
    }
  },
  {
    id: 2,
    description: "위에 있는 모든 비영구 엔드게임 마스터리를 무료로 만듭니다",
    cost: 100,
    requirement: () => {
      const esRequirement = Currency.endgameSkills.max.gte(EndgameMastery.permaMasteries.totalEndgameSkillRequirement);
      const emRequirement = EndgameMastery.endgameUpgrades.isBought;
      return emRequirement && esRequirement;
    }
  },
  {
    id: 3,
    description: "시간 압축을 해금합니다",
    cost: 7000000,
    requirement: () => {
      const esRequirement = Currency.endgameSkills.max.gte(EndgameMastery.timeCompression.totalEndgameSkillRequirement);
      const emRequirement = [271, 272, 273, 274].every(id => EndgameMastery(id).isBought);
      return emRequirement && esRequirement;
    }
  }
];
