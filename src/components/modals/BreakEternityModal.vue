<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "BreakEternityModal",
  components: {
    ModalWrapperChoice
  },
  computed: {
    message() {
      return `영원을 돌파하면 1e9e15를 초과하여 반물질을 얻을 수 있습니다. 파멸한 현실 안에서 1e9e15를 초과하여 생산한 반물질에 따라 엔드게임 시 추가 셀레스티얼 포인트와 파멸 입자를 얻습니다. 또한 영원 돌파 업그레이드와 다른 기능이 해금됩니다.`.split("\n");
    },
  },
  methods: {
    handleYesClick() {
      breakEternity();
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
      영원 돌파
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
