import { PlayerProgress } from "../../player-progress";

import { MultiplierTabIcons } from "./icons";

// See index.js for documentation
export const TP = {
  total: {
    name: "총 타키온 입자",
    displayOverride: () => {
      const baseTPStr = format(new Decimal(Currency.tachyonParticles.value), 2, 2);
      return PelleRifts.paradox.milestones[1].canBeApplied
        ? `${baseTPStr}${formatPow(PelleRifts.paradox.milestones[1].effectValue, 1, 1)}`
        : baseTPStr;
    },
    // This is treated as a multiplier and not a prestige currency, with an overridden display;
    // therefore we need to return 1 "by default"
    multValue: () => {
      const baseTP = new Decimal(Currency.tachyonParticles.value)
        .pow(PelleRifts.paradox.milestones[1].effectOrDefault(1));
      return TimeStudy.dilation.isBought ? baseTP : 1;
    },
    isActive: () => PlayerProgress.realityUnlocked() || PlayerProgress.dilationUnlocked(),
    icon: MultiplierTabIcons.TACHYON_PARTICLES,
  },
  base: {
    name: "기본 타키온 입자 수",
    isBase: true,
    multValue: () => new Decimal(Currency.tachyonParticles.value).div(tachyonGainMultiplier()),
    isActive: () => new Decimal(Currency.tachyonParticles.value).gt(0),
    icon: MultiplierTabIcons.TACHYON_PARTICLES,
  },
  achievementMult: {
    name: "도전과제 배율",
    multValue: () => RealityUpgrade(8).effectOrDefault(1),
    isActive: () => RealityUpgrade(8).canBeApplied && !Pelle.isDoomed,
    icon: MultiplierTabIcons.ACHIEVEMENT,
  },
  achievement: {
    name: "도전과제 132",
    multValue: () => Achievement(132).effectOrDefault(1),
    isActive: () => Achievement(132).canBeApplied,
    icon: MultiplierTabIcons.ACHIEVEMENT,
  },
  dilation: {
    name: () => `시간 팽창 업그레이드 - 반복 구매 ${formatX(3)} 타키온 입자`,
    multValue: () => DilationUpgrade.tachyonGain.effectOrDefault(1),
    isActive: () => DilationUpgrade.tachyonGain.canBeApplied,
    icon: MultiplierTabIcons.UPGRADE("dilation"),
  },
  amplifierTP: {
    name: "현실 업그레이드 - 초광속 증폭기",
    multValue: () => DC.D1.timesEffectsOf(RealityUpgrade(4)),
    isActive: () => PlayerProgress.realityUnlocked() && !Pelle.isDoomed,
    icon: MultiplierTabIcons.UPGRADE("reality"),
  },
  realityUpgrade: {
    name: "현실 업그레이드 - 역설적 영원",
    multValue: () => DC.D1.timesEffectsOf(RealityUpgrade(15)),
    isActive: () => PlayerProgress.realityUnlocked() && !Pelle.isDoomed,
    icon: MultiplierTabIcons.UPGRADE("reality"),
  },
  dilationGlyphSacrifice: {
    name: "팽창 글리프 희생",
    multValue: () => GlyphSacrifice.dilation.effectValue,
    isActive: () => GlyphSacrifice.dilation.effectValue > 1,
    icon: MultiplierTabIcons.SACRIFICE("dilation"),
  },

  nerfEnslaved: {
    name: "이름없는 자들의 현실",
    powValue: () => Enslaved.tachyonNerf,
    isActive: () => Enslaved.isRunning,
    icon: MultiplierTabIcons.GENERIC_ENSLAVED,
  }
};
