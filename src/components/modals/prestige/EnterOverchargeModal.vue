<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "EnterOverchargeModal",
  components: {
    ModalWrapperChoice
  },
  computed: {
    message() {
      return `과충전에 진입하면 새로운 엔드게임이 시작됩니다. 과충전 안에서는 영원 도전 12에 갇히며,
        반물질 생산량의 테트레이션에 ${formatX(0.75, 2, 2)}의 배수가 적용됩니다.
        또한 과충전 단계마다 시간 팽창처럼 틱스피드와 모든 차원 배수의 지수에 ${formatPow(0.72, 2, 4)}제곱이 적용됩니다.
        더 높은 과충전 단계에서는 새롭고 더 강력한 보상이 해금됩니다.`;
    },
    entranceLabel() {
      return `과충전에 진입하려 합니다`;
    }
  },
  methods: {
    handleYesClick() {
      if (player.endgame.overcharge.isRunning) return;
      enterOvercharge();
    },
  },
};
</script>

<template>
  <ModalWrapperChoice
    option="overcharge"
    @confirm="handleYesClick"
  >
    <template #header>
      {{ entranceLabel }}
    </template>
    <div class="c-modal-message__text">
      {{ message }}
    </div>
    <template #confirm-text>
      받아들이기
    </template>
  </ModalWrapperChoice>
</template>
