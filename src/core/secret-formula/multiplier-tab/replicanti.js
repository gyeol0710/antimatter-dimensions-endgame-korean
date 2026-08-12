import { MultiplierTabIcons } from "./icons";

// See index.js for documentation
export const replicanti = {
  total: {
    name: "복제자 속도",
    multValue: () => totalReplicantiSpeedMult(Replicanti.amount.gt(replicantiCap())),
    isActive: () => PlayerProgress.eternityUnlocked(),
    overlay: ["Ξ"],
  },
  achievement1: {
    name: "도전과제 81",
    multValue: 3,
    isActive: () => Achievement(81).canBeApplied && !Pelle.isDoomed,
    icon: MultiplierTabIcons.ACHIEVEMENT,
  },
  achievement2: {
    name: "도전과제 134",
    // This is explicitly 2 in the replicanti code as well, inside of a replicanti amount check
    multValue: 2,
    isActive: () => Achievement(134).canBeApplied && Replicanti.amount.lte(replicantiCap()) && !Pelle.isDoomed,
    icon: MultiplierTabIcons.ACHIEVEMENT,
  },
  timeStudy: {
    name: "시간 연구",
    multValue: () => {
      const preReality = Effects.product(TimeStudy(62), TimeStudy(213)) * (TimeStudy(132).isBought ? 1.5 : 1);
      return preReality * (Perk.studyPassive.isBought && TimeStudy(132).isBought ? 2 : 1);
    },
    isActive: () => PlayerProgress.eternityUnlocked() && !Pelle.isDoomed,
    icon: MultiplierTabIcons.TIME_STUDY,
  },
  glyph: {
    name: "글리프 효과",
    multValue: () => {
      const baseEffect = (Pelle.isDoomed ? DC.D1 : getAdjustedGlyphEffect("replicationspeed"))
        .times(Pelle.specialGlyphEffect.replication);
      const alteredEffect = Math.clampMin(
        Decimal.log10(Replicanti.amount) * getSecondaryGlyphEffect("replicationdtgain"), 1);
      return GlyphAlteration.isAdded("replication") ? baseEffect.times(alteredEffect) : baseEffect;
    },
    isActive: () => PlayerProgress.realityUnlocked() && (!Pelle.isDoomed || Pelle.specialGlyphEffect.replication > 1),
    icon: MultiplierTabIcons.GENERIC_GLYPH,
  },
  amplifierRep: {
    name: "현실 업그레이드 - 복제 증폭기",
    multValue: () => RealityUpgrade(2).effectOrDefault(1),
    isActive: () => PlayerProgress.realityUnlocked() && !Pelle.isDoomed,
    icon: MultiplierTabIcons.UPGRADE("reality"),
  },
  realityUpgrade1: {
    name: "현실 업그레이드 - 우주적 복제",
    multValue: () => RealityUpgrade(6).effectOrDefault(1),
    isActive: () => PlayerProgress.realityUnlocked() && !Pelle.isDoomed,
    icon: MultiplierTabIcons.UPGRADE("reality"),
  },
  realityUpgrade2: {
    name: "현실 업그레이드 - 복제의 신속함",
    multValue: () => RealityUpgrade(23).effectOrDefault(1),
    isActive: () => PlayerProgress.realityUnlocked() && !Pelle.isDoomed,
    icon: MultiplierTabIcons.UPGRADE("reality"),
  },
  alchemy: {
    name: "연금술 자원 - 복제",
    multValue: () => AlchemyResource.replication.effectOrDefault(1),
    isActive: () => Ra.unlocks.unlockGlyphAlchemy.canBeApplied && !Pelle.isDoomed,
    icon: MultiplierTabIcons.ALCHEMY,
  },
  ra: {
    name: "Ra 업그레이드 - 시간 정리 기반 배율",
    multValue: () => Ra.unlocks.continuousTTBoost.effects.replicanti.effectOrDefault(1),
    isActive: () => Ra.unlocks.continuousTTBoost.isUnlocked,
    icon: MultiplierTabIcons.GENERIC_RA,
  },
  pelle: {
    name: "Pelle 타격 - 쇠퇴 균열",
    multValue: () => PelleRifts.decay.effectValue,
    isActive: () => Pelle.isDoomed && PelleRifts.decay.effectValue.gt(1),
    icon: MultiplierTabIcons.PELLE,
  },
  iap: {
    name: "상점 탭 구매",
    multValue: () => ShopPurchase.replicantiPurchases.currentMult,
    isActive: () => ShopPurchaseData.totalSTD > 0 && ShopPurchase.replicantiPurchases.currentMult > 1,
    icon: MultiplierTabIcons.IAP,
  },
};
