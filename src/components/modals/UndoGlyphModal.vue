<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "UndoGlyphModal",
  components: {
    ModalWrapperChoice
  },
  data() {
    return {
      showStoredGameTime: false,
    };
  },
  methods: {
    update() {
      this.showStoredGameTime = Enslaved.isUnlocked;
    },
    realityInvalidate() {
      this.emitClose();
      Modal.message.show("글리프 장착은 현실을 초기화할 때만 되돌릴 수 있습니다!",
        { closeEvent: GAME_EVENT.REALITY_RESET_AFTER });
    },
    handleYesClick() {
      this.emitClose();
      Glyphs.undo();
    },
  },
};
</script>

<template>
  <ModalWrapperChoice
    option="glyphUndo"
    @confirm="handleYesClick"
  >
    <template #header>
      글리프 장착 되돌리기
    </template>
    <div
      class="c-modal-message__text c-text-wrapper"
    >
      마지막으로 장착한 글리프를 제거합니다.
      현실은 초기화되지만 다음 항목은 글리프를 장착했을 때의 상태로 복원됩니다.
      <br>
      <div class="c-text-wrapper">
        <br>- 반물질, 무한 포인트, 영원 포인트
        <br>- 시간 팽창 업그레이드, 타키온 입자, 팽창된 시간
        <br>- 시간 정리와 영원 도전 완료 횟수
        <br>- 시간 차원과 현실 해금 상태
        <br>- 현재 무한/영원/현실에서 보낸 시간
        <span v-if="showStoredGameTime"><br>- 저장된 게임 시간</span>
      </div>
      <br>
      특정 항목의 특별 요구 조건을 무효화했다면(예: 반물질을 생산하지 않고 현실을 완료하는 도전과제),
      되돌린 뒤에도 무효 상태가 유지됩니다. 이런 조건은 되돌리기를 사용하지 않고 하나의 현실 안에서 달성해야 합니다.
    </div>
  </ModalWrapperChoice>
</template>

<style scoped>
.c-text-wrapper {
  text-align: left;
}
</style>
