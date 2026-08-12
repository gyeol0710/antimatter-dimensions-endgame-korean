<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "AntimatterGalaxyModal",
  components: {
    ModalWrapperChoice
  },
  props: {
    bulk: {
      type: Boolean,
      required: true,
    }
  },
  data() {
    return {
      newGalaxies: new Decimal(0),
      keepAntimatter: false,
      perkANRBought: false,
      keepDimBoost: false
    };
  },
  computed: {
    topLabel() {
      if (this.bulk) return `${quantifyInt("반물질 은하", this.newGalaxies)}를 구매하려 합니다.`;
      return `반물질 은하를 구매하려 합니다.`;
    },
    message() {
      const resetResouces = [];
      if (Pelle.isDoomed) resetResouces.push("반물질", "반물질 차원", "틱스피드 업그레이드");
      if (!this.perkANRBought) resetResouces.push("반물질 차원", "틱스피드 업그레이드");
      if (!this.keepDimBoost) resetResouces.push("차원 가속");
      if (!this.keepAntimatter && !this.perkANRBought) resetResouces.push("반물질");
      const resetList = makeEnumeration(resetResouces);
      let tickspeedFixed = "";
      if (InfinityChallenge(3).isRunning) {
        tickspeedFixed = `무한 도전 ${InfinityChallenge(3).id}`;
      } else if (Ra.isRunning) {
        tickspeedFixed = `${Ra.displayName}의 현실`;
      }
      const tickspeedInfo = (tickspeedFixed === "")
        ? "틱스피드 업그레이드의 효율이 소폭 상승합니다."
        : `${tickspeedFixed}에서는 틱스피드 업그레이드 효율 보너스를 받지 못합니다.`;
      const message = (resetList === "")
        ? `아무것도 리셋하지 않고 ${tickspeedInfo}`
        : `이는 당신의 ${resetList}을(를) 리셋합니다. 하지만, ${tickspeedInfo}`;

      if (this.bulk) return `${quantifyInt("반물질 은하", this.newGalaxies)}를 구매하면
      ${message} 계속하시겠습니까?`;
      return `${message} 계속하시겠습니까?`;
    }
  },
  created() {
    this.on$(GAME_EVENT.DIMBOOST_AFTER, () =>
      (BreakInfinityUpgrade.autobuyMaxDimboosts.isBought ? undefined : this.emitClose()));
  },
  methods: {
    update() {
      if (this.bulk) {
        const req = Galaxy.requirement;
        const dim = AntimatterDimension(req.tier);
        const bulk = Galaxy.buyableGalaxies(Decimal.round(dim.totalAmount.toNumber())).gt(player.galaxies);
        if (bulk) {
          this.newGalaxies = Galaxy.buyableGalaxies(Decimal.round(dim.totalAmount.toNumber())).sub(player.galaxies);
        }
      }
      this.keepAntimatter = Achievement(111).isUnlocked && (!player.disablePostReality || (Alpha.isRunning && Alpha.currentStage >= 12) ||
        (LHC.voidRunning && NullUpgrade.limerick1.isBought));
      this.perkANRBought = (Perk.antimatterNoReset.canBeApplied &&
        (!player.disablePostReality || (LHC.voidRunning && player.endgame.largeHadronCollider.void.nullified)));
      this.keepDimBoost = ((Achievement(143).isUnlocked && (!Pelle.isDoomed || PelleAchievementUpgrade.achievement143.canBeApplied)) ||
        PelleUpgrade.galaxyNoResetDimboost.canBeApplied) && (!player.disablePostReality || (Alpha.isRunning && Alpha.currentStage >= 20) ||
        (LHC.voidRunning && NullUpgrade.limerick2.isBought));
    },
    handleYesClick() {
      requestGalaxyReset(this.bulk);
      EventHub.ui.offAll(this);
    }
  },
};
</script>

<template>
  <ModalWrapperChoice
    option="antimatterGalaxy"
    @confirm="handleYesClick"
  >
    <template #header>
      {{ topLabel }}
    </template>

    <div class="c-modal-message__text">
      {{ message }}
    </div>
  </ModalWrapperChoice>
</template>
