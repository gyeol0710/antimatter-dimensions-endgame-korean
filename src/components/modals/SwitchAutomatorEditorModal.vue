<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "SwitchAutomatorEditorModal",
  components: {
    ModalWrapperChoice
  },
  props: {
    callback: {
      type: Function,
      required: false,
      default: () => ({})
    },
    lostBlocks: {
      type: Number,
      required: false,
      default: 0,
    }
  },
  data() {
    return {
      errorCount: 0,
      isCurrentlyBlocks: false
    };
  },
  computed: {
    currentScriptID: {
      get() {
        return this.$viewModel.tabs.reality.automator.editorScriptID;
      },
      set(value) {
        this.$viewModel.tabs.reality.automator.editorScriptID = value;
      }
    },
    otherMode() {
      return this.isCurrentlyBlocks ? "텍스트" : "블록";
    }
  },
  methods: {
    update() {
      this.errorCount = AutomatorData.currentErrors().length;
      this.isCurrentlyBlocks = player.reality.automator.type === AUTOMATOR_TYPE.BLOCK;
    },
    toggleAutomatorMode() {
      AutomatorBackend.changeModes(this.currentScriptID);
      this.callback?.();
    }
  }
};
</script>

<template>
  <ModalWrapperChoice
    option="switchAutomatorMode"
    @confirm="toggleAutomatorMode"
  >
    <template #header>
      오토메이터 편집기를 {{ otherMode }} 모드로 변경
    </template>
    <div class="c-modal-message__text">
      현재 스크립트가 실행 중이라면 정지합니다!
      <div v-if="errorCount">
        <br>
        스크립트에 오류가 있어 {{ otherMode }} 모드로 올바르게 변환되지 않을 수 있습니다. 계속하면 오토메이터가
        해당 줄을 변환하려고 시도하지만, 일부 정보가 사라지거나 올바르게 변환되지 않을 수 있습니다.
      </div>
      <!-- Note: this can only ever appear on text-to-block -->
      <b v-if="lostBlocks">
        <br>
        경고: 현재 스크립트에는 특정 명령으로 해석할 수 없는 줄도 있습니다. 변환할 수 있는 블록이 없으므로
        해당 줄은 삭제됩니다. 반복문이나 IF의 시작 부분에서 오류가 발생했다면 스크립트의 많은 부분이 삭제될 수 있습니다!
        <span class="l-lost-text">
          지금 편집기 모드를 바꾸면 코드 {{ quantifyInt("줄", lostBlocks) }}이 되돌릴 수 없게 사라집니다!
        </span>
      </b>
      <br>
      <span class="l-lost-text">
        이 확인 창을 숨기는 것은 권장하지 않습니다. 오류가 있는 스크립트의 모드를 전환할 때 일부 내용이 즉시,
        되돌릴 수 없게 사라질 수 있습니다.
      </span>
      <br>
      <br>
      {{ otherMode }} 편집기로 변경하시겠습니까?
    </div>
    <template #confirm-text>
      모드 변경
    </template>
  </ModalWrapperChoice>
</template>

<style scoped>
.l-lost-text {
  color: var(--color-bad);
}
</style>
