<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "ClearConstantsModal",
  components: {
    ModalWrapperChoice
  },
  data() {
    return {
      constantCount: 0,
    };
  },
  methods: {
    update() {
      this.constantCount = Object.keys(player.reality.automator.constants).length;
      if (this.constantCount === 0) this.emitClose();
    },
    deleteConstants() {
      player.reality.automator.constants = {};
      player.reality.automator.constantSortOrder = [];
    }
  }
};
</script>

<template>
  <ModalWrapperChoice
    @confirm="deleteConstants"
  >
    <template #header>
      오토메이터 상수 삭제
    </template>
    <div class="c-modal-message__text">
      현재 정의한 오토메이터 상수를 모두 삭제하시겠습니까?
      <br>
      <span class="l-lost-text">
        상수 {{ formatInt(constantCount) }}개를 되돌릴 수 없게 삭제합니다!
      </span>
    </div>
    <template #confirm-text>
      모두 삭제
    </template>
  </ModalWrapperChoice>
</template>

<style scoped>
.l-lost-text {
  font-weight: bold;
  color: var(--color-bad);
}
</style>
