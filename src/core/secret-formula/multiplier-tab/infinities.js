import { MultiplierTabIcons } from "./icons";

// See index.js for documentation
export const infinities = {
  total: {
    name: "빅 크런치 1회당 획득 무한 횟수",
    isBase: true,
    multValue: () => gainedInfinities(),
    // The earliest sources of infinity multipliers are ach87 and TS32, which may happen in either order
    isActive: () => (Achievement(87).isUnlocked || PlayerProgress.eternityUnlocked()) &&
      !EternityChallenge(4).isRunning && !Pelle.isDoomed,
    overlay: ["∞", "<i class='fa-solid fa-arrows-rotate' />"],
  },
  achievement: {
    name: "도전과제",
    multValue: () => DC.D1.timesEffectsOf(
      Achievement(87),
      Achievement(131).effects.infinitiesGain,
      Achievement(164)
    ),
    isActive: () => Achievement(87).isUnlocked,
    icon: MultiplierTabIcons.ACHIEVEMENT,
  },
  timeStudy: {
    name: "시간 연구 32",
    multValue: () => TimeStudy(32).effectOrDefault(1),
    isActive: () => TimeStudy(32).isBought,
    icon: MultiplierTabIcons.TIME_STUDY,
  },
  timeStudy2: {
    name: "시간 연구 191",
    multValue: 2,
    isActive: () => TimeStudy(191).isBought,
    icon: MultiplierTabIcons.TIME_STUDY,
  },
  amplifierInf: {
    name: "현실 업그레이드 - 무한 증폭기",
    multValue: () => DC.D1.timesEffectsOf(RealityUpgrade(5)),
    isActive: () => PlayerProgress.realityUnlocked() && !Pelle.isDoomed,
    icon: MultiplierTabIcons.UPGRADE("reality"),
  },
  realityUpgrades: {
    name: "현실 업그레이드 - 무수한 구축",
    multValue: () => DC.D1.timesEffectsOf(RealityUpgrade(7)),
    isActive: () => PlayerProgress.realityUnlocked(),
    icon: MultiplierTabIcons.UPGRADE("reality"),
  },
  glyph: {
    name: "장착한 글리프",
    multValue: () => getAdjustedGlyphEffect("infinityinfmult"),
    isActive: () => PlayerProgress.realityUnlocked(),
    icon: MultiplierTabIcons.GENERIC_GLYPH,
  },
  ra: {
    name: "라 업그레이드 - 시간 정리 기반 배율",
    multValue: () => Ra.unlocks.continuousTTBoost.effects.infinity.effectOrDefault(1),
    isActive: () => Ra.unlocks.continuousTTBoost.isUnlocked,
    icon: MultiplierTabIcons.GENERIC_RA,
  },
  singularity: {
    name: "특이점 마일스톤 - 특이점 기반 거듭제곱",
    powValue: () => SingularityMilestone.infinitiedPow.effectOrDefault(1),
    isActive: () => SingularityMilestone.infinitiedPow.canBeApplied,
    icon: MultiplierTabIcons.SINGULARITY,
  },
};
