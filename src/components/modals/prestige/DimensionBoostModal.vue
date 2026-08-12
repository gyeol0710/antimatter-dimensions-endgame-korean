<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "DimensionBoostModal",
  components: {
    ModalWrapperChoice
  },
  props: {
    bulk: {
      type: Boolean,
      required: true,
    }
  },
  computed: {
    topLabel() {
      return `당신은 차원을 가속하려 합니다`;
    },
    message() {
      const keepDimensions = (Perk.antimatterNoReset.canBeApplied || Achievement(111).canBeApplied ||
        PelleUpgrade.dimBoostResetsNothing.isBought || PelleAchievementUpgrade.achievement111.canBeApplied) &&
        (!player.disablePostReality || (LHC.voidRunning && player.endgame.largeHadronCollider.void.nullified) ||
        (Alpha.isRunning && Alpha.currentStage >= 12) || (LHC.voidRunning && NullUpgrade.limerick1.isBought))
        ? `보유한 업그레이드 덕분에 이 상황에서는 반물질과 반물질 차원이 초기화되지 않습니다.
          평소처럼 차원 가속 배율은 얻습니다.`
        : `반물질과 반물질 차원을 모두 초기화합니다. 계속하시겠습니까?`;

      return `이 작업은 ${keepDimensions}`;
    },
  },
  methods: {
    handleYesClick() {
      requestDimensionBoost(this.bulk);
      EventHub.ui.offAll(this);
    }
  },
};
</script>

<template>
  <ModalWrapperChoice
    option="dimensionBoost"
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
