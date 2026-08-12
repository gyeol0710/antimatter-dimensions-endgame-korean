<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "BreakInfinityModal",
  components: {
    ModalWrapperChoice
  },
  computed: {
    message() {
      const infinity = formatPostBreak(Number.MAX_VALUE, 2);
      return `무한을 돌파하면 ${infinity}개를 넘는 반물질을 획득할 수 있습니다${PlayerProgress.eternityUnlocked()
        ? "." : `. 또한 ${infinity}보다 큰 수도 표시할 수 있습니다.`}
        반물질이 ${infinity}개를 넘으면 차원과 틱스피드 업그레이드의 비용이 더 빠르게 증가합니다.
        빅 크런치 시 생산한 반물질이 ${infinity}개를 초과한 정도에 따라 무한 포인트를 추가로 획득합니다.\
        ${EternityMilestone.keepAutobuyers.isReached ? "" : `\n무한 돌파 업그레이드를 해금하고 모든 일반 도전\
        자동구매기를 최대로 업그레이드합니다.`}`.split("\n");
    },
  },
  methods: {
    handleYesClick() {
      breakInfinity();
    }
  },
};
</script>

<template>
  <ModalWrapperChoice
    :show-cancel="false"
    @confirm="handleYesClick"
  >
    <template #header>
      무한을 돌파하려 합니다.
    </template>
    <div class="c-modal-message__text">
      <span
        v-for="(line, index) in message"
        :key="index"
      >
        {{ line }} <br>
      </span>
    </div>
    <template #confirm-text>
      돌파
    </template>
  </ModalWrapperChoice>
</template>
