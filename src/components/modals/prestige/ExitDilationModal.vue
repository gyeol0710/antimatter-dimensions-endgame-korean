<script>
import FullScreenAnimationHandler from "@/core/full-screen-animation-handler";

import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "ExitDilationModal",
  components: {
    ModalWrapperChoice
  },
  data() {
    return {
      tachyonGain: new Decimal(0),
      isDoomed: false
    };
  },
  computed: {
    gainText() {
      if (this.tachyonGain.lte(0)) return `아무것도 얻지 못합니다`;
      return `${quantify("타키온 입자", this.tachyonGain, 2, 1)}를 얻습니다`;
    },
    isInEC() {
      return Player.anyChallenge instanceof EternityChallengeState;
    },
    confirmText() {
      return this.isDoomed ? "확인" : "나가기";
    }
  },
  methods: {
    update() {
      // We force-close the modal if dilation is inactive because there are a few edge cases which allow it to be
      // opened while switching between dilated/regular. The only thing this results in is an incorrect TP gain value
      if (!player.dilation.active) this.emitClose();
      this.tachyonGain.copyFrom(getTachyonGain(true));
      this.isDoomed = Pelle.isDoomed && !PelleStrikes.dilation.isDestroyed();
    },
    handleYesClick() {
      if (!player.dilation.active) return;
      const playAnimation = player.options.animations.dilation && !FullScreenAnimationHandler.isDisplaying;
      if (playAnimation) {
        animateAndUndilate();
      } else {
        eternity(false, false, { switchingDilation: true });
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
      <span v-if="isDoomed">
        파멸한 동안에는 시간 팽창에서 나갈 수 없습니다
      </span>
      <span v-else>
        시간 팽창에서 나가려 합니다
      </span>
    </template>
    <div class="c-modal-message__text">
      <span v-if="isDoomed">
        시간 팽창은 영구적입니다. {{ gainText }}. 또한 현재 영원이 초기화됩니다.
      </span>
      <span v-else>
        지금 시간 팽창에서 나가면 {{ gainText }}.
      </span>
      <div v-if="isInEC">
        현재 영원 도전에서도 함께 나갑니다.
      </div>
      <br>
      정말로 진행하시겠습니까?
    </div>
    <template #confirm-text>
      {{ confirmText }}
    </template>
  </ModalWrapperChoice>
</template>
