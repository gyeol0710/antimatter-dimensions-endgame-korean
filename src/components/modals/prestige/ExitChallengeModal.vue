<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "ExitChallengeModal",
  components: {
    ModalWrapperChoice
  },
  props: {
    challengeName: {
      type: String,
      required: true,
    },
    normalName: {
      type: String,
      required: true,
    },
    hasHigherLayers: {
      type: Boolean,
      required: true,
    },
    exitFn: {
      type: Function,
      required: true,
    }
  },
  computed: {
    isCelestial() {
      return this.challengeName.match("현실");
    },
    isRestarting() {
      return this.isCelestial ? player.options.retryCelestial : player.options.retryChallenge;
    }
  },
  methods: {
    handleYesClick() {
      this.exitFn();
      EventHub.ui.offAll(this);
    }
  },
};
</script>

<template>
  <ModalWrapperChoice
    option="exitChallenge"
    @confirm="handleYesClick"
  >
    <template #header>
      {{ challengeName }}을(를) {{ isRestarting ? "재시작" : "종료" }}하려 합니다
    </template>

    <div class="c-modal-message__text">
      <span v-if="isRestarting">
        확인하면 {{ challengeName }}에 즉시 다시 진입합니다.
      </span>
      <span v-else>
        제한이 없는 일반 {{ normalName }} 상태로 돌아갑니다.
      </span>
      <span v-if="hasHigherLayers">
        더 높은 단계의 제한에서 비롯된 다른 효과는 계속 적용됩니다.
      </span>
    </div>
    <template #confirm-text>
      {{ isRestarting ? "재시작" : "나가기" }}
    </template>
  </ModalWrapperChoice>
</template>
