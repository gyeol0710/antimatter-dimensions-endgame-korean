<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "BreakCelestialInfinityModal",
  components: {
    ModalWrapperChoice
  },
  computed: {
    message() {
      const infinity = formatPostBreak(Number.MAX_VALUE, 2);
      return `셀레스티얼 무한을 돌파하면 ${infinity}를 초과하여 셀레스티얼 물질을 얻을 수 있습니다.
        셀레스티얼 물질이 ${infinity}를 넘으면 셀레스티얼 차원과 셀레스티얼 틱스피드 업그레이드의 비용 증가가 빨라집니다.
        ${infinity}를 초과하여 생산한 셀레스티얼 물질에 따라 셀레스티얼 크런치 시 추가 셀레스티얼 무한 포인트를 얻습니다.\
        또한 셀레스티얼 무한 돌파 업그레이드가 해금됩니다.`.split("\n");
    },
  },
  methods: {
    handleYesClick() {
      celestialBreakInfinity();
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
      셀레스티얼 무한 돌파
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
