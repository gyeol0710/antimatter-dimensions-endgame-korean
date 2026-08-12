<script>
import FullScreenAnimationHandler from "@/core/full-screen-animation-handler";

import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "EnterDilationModal",
  components: {
    ModalWrapperChoice
  },
  computed: {
    message() {
      return `시간을 팽창시키면 새로운 영원이 시작되고, 모든 차원 배수의 지수와 틱스피드 배수의 지수가
        ${formatPow(0.75, 2, 2)}로 감소합니다. 시간 팽창 중 영원에 도달할 수 있다면 최고 반물질과
        보유한 타키온 입자 배율에 따라 타키온 입자가 증가합니다.`;
    },
    entranceLabel() {
      return `시간 팽창에 진입하려 합니다`;
    },
    EPSinceLabel() {
      if (player.dilation.lastEP.eq(-1)) {
        return "첫 시간 팽창입니다.";
      }
      if (!isInCelestialReality() && Ra.unlocks.unlockDilationStartingTP.canBeApplied && !player.disablePostReality) {
        return `Teresa의 레벨 ${formatInt(25)} 보상으로 얻을 수 있는 최대량의 타키온 입자를 이미 보유하고 있습니다.`;
      }
      return `마지막으로 시간 팽창을 완료했을 때 보유한 영원 포인트는
        ${format(player.dilation.lastEP, 2, 2)}였습니다.`;
    }
  },
  methods: {
    handleYesClick() {
      if (player.dilation.active) return;
      if (player.options.animations.dilation && !FullScreenAnimationHandler.isDisplaying) {
        // Strike trigger happens within the delayed dilation callback in this function
        animateAndDilate();
      } else {
        startDilatedEternity();
        if (Pelle.isDoomed) PelleStrikes.dilation.trigger();
      }
    },
  },
};
</script>

<template>
  <ModalWrapperChoice
    option="dilation"
    @confirm="handleYesClick"
  >
    <template #header>
      {{ entranceLabel }}
    </template>
    <div class="c-modal-message__text">
      {{ EPSinceLabel }}
      <br>
      <br>
      {{ message }}
    </div>
    <template #confirm-text>
      진입
    </template>
  </ModalWrapperChoice>
</template>
