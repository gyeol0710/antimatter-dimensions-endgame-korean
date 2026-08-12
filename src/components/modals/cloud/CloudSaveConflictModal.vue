<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";
import SaveInfoEntry from "@/components/modals/cloud/SaveInfoEntry";

export default {
  name: "CloudSaveConflictModal",
  components: {
    ModalWrapperChoice,
    SaveInfoEntry,
  },
  computed: {
    conflict() {
      return this.$viewModel.modal.cloudConflict;
    },
    older() {
      return this.conflict.saveComparison.older === -1;
    },
    farther() {
      return this.conflict.saveComparison.farther === -1;
    },
    hasDifferentName() {
      return this.conflict.cloud.saveName !== this.conflict.local.saveName;
    },
    wrongHash() {
      return this.conflict.saveComparison.hashMismatch;
    },
    suggestionText() {
      const goodStyle = `style="color: var(--color-good)"`;
      const badStyle = `style="color: var(--color-infinity)"`;

      const suggestions = ["클라우드에 저장하는 것은 "];
      const cloudProg = this.conflict.cloud.compositeProgress, localProg = this.conflict.local.compositeProgress;
      const warnOverwrite = this.farther && Math.abs(cloudProg - localProg) > 0.15;
      suggestions.push(warnOverwrite
        ? `<b ${badStyle}>진행도가 훨씬 높은 세이브를 덮어씁니다</b>`
        : `<b ${goodStyle}>안전할 가능성이 큽니다</b>`);
      if (this.hasDifferentName || this.wrongHash) {
        suggestions.push(` ${warnOverwrite ? "또한" : "하지만"},
          <b ${badStyle}>다른 기기의 세이브</b>를 덮어쓸 수 있습니다.`);
      }
      if (warnOverwrite || this.hasDifferentName || this.wrongHash) {
        suggestions.push(`<br><b ${badStyle}>클라우드 세이브를 정말 덮어쓰시겠습니까?</b>`);
      }
      return suggestions.join("");
    },
    noOverwriteInfo() {
      return `덮어쓰지 않으면 세이브 충돌이 계속 발생합니다.`;
    },
    overwriteInfo() {
      return `다른 기기도 같은 구글 계정으로 동시에 클라우드에 저장하면 이 모달이 반복해서 나타날 수 있습니다.`;
    }
  },
  methods: {
    doNotSave() {
      player.options.cloudEnabled = false;
      EventHub.dispatch(GAME_EVENT.CLOSE_MODAL);
    },
    overwrite() {
      this.conflict.onAccept?.();
      EventHub.dispatch(GAME_EVENT.CLOSE_MODAL);
    }
  },
};
</script>

<template>
  <ModalWrapperChoice
    class="c-modal-options__large"
    :cancel-class="'c-modal-message__okay-btn'"
    :confirm-class="'c-modal-message__okay-btn c-modal__confirm-btn'"
    :cancel-fn="overwrite"
    @confirm="doNotSave()"
  >
    <template #header>
      게임을 클라우드에 저장
    </template>
    <span v-if="wrongHash">
      이번 실행에서 마지막으로 클라우드에 저장한 뒤 클라우드 세이브가 <b>다른 기기에서 변경되었습니다</b>.
    </span>
    <span v-else-if="hasDifferentName">
      로컬 세이브와 클라우드 세이브의 <b>이름이 다릅니다</b>.
    </span>
    <span v-else-if="older">
      클라우드에 저장하면 <b>더 오래된 세이브를 덮어씁니다</b>.
    </span>
    <span v-else-if="farther">
      클라우드에 저장하면 <b>진행도가 더 높은 세이브를 덮어씁니다</b>.
    </span>
    <span v-else>
      로컬 세이브와 클라우드 세이브의 <b>진행도가 비슷해 보입니다</b>.
    </span>
    <br>
    <SaveInfoEntry
      :save-data="conflict.local"
      :other-data="conflict.cloud"
      :save-id="conflict.saveId"
      :show-name="hasDifferentName"
      save-type="로컬 세이브"
    />
    <SaveInfoEntry
      :save-data="conflict.cloud"
      :other-data="conflict.local"
      :save-id="conflict.saveId"
      :show-name="hasDifferentName"
      save-type="클라우드 세이브"
    />
    <span v-html="suggestionText" />
    <br>
    <span>
      덮어쓰지 않으면 클라우드 저장이 꺼집니다. 다시 사용하려면 직접 켜야 합니다.
      <span :ach-tooltip="noOverwriteInfo">
        <i class="fas fa-question-circle" />
      </span>
    </span>
    <span>
      덮어쓰면 이번에는 클라우드에 강제로 저장합니다. 대부분의 경우 이후 이 모달이 다시 나타나지 않습니다.
      <span :ach-tooltip="overwriteInfo">
        <i class="fas fa-question-circle" />
      </span>
    </span>
    <template #cancel-text>
      클라우드 세이브 덮어쓰기
    </template>
    <template #confirm-text>
      덮어쓰지 않기
    </template>
  </ModalWrapperChoice>
</template>
