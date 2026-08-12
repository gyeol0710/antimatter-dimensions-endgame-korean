<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";
import SaveInfoEntry from "@/components/modals/cloud/SaveInfoEntry";

export default {
  name: "CloudLoadConflictModal",
  components: {
    ModalWrapperChoice,
    SaveInfoEntry,
  },
  computed: {
    conflict() {
      return this.$viewModel.modal.cloudConflict;
    },
    older() {
      return this.conflict.saveComparison.older === 1;
    },
    farther() {
      return this.conflict.saveComparison.farther === 1;
    },
    hasDifferentName() {
      return this.conflict.cloud.saveName !== this.conflict.local.saveName;
    },
    suggestionText() {
      const goodStyle = `style="color: var(--color-good)"`;
      const badStyle = `style="color: var(--color-bad)"`;

      const suggestions = ["이 클라우드 세이브를 불러오는 것은 "];
      const cloudProg = this.conflict.cloud.compositeProgress, localProg = this.conflict.local.compositeProgress;
      const warnOverwrite = this.farther && Math.abs(cloudProg - localProg) > 0.15;
      suggestions.push(warnOverwrite
        ? `<b ${badStyle}>로컬 세이브의 진행도를 크게 잃게 합니다</b>`
        : `<b ${goodStyle}>안전할 가능성이 큽니다</b>`);
      if (this.hasDifferentName) {
        suggestions.push(`<br>${warnOverwrite ? "또한" : "하지만"}, 클라우드 세이브는
          <b ${badStyle}>다른 기기의 세이브일 수 있습니다</b>.`);
      }
      if (warnOverwrite || this.hasDifferentName) {
        suggestions.push(`<br><b ${badStyle}>로컬 세이브를 정말 덮어쓰시겠습니까?</b>`);
      }
      return suggestions.join("");
    }
  },
  methods: {
    confirm() {
      this.conflict.onAccept?.();
      EventHub.dispatch(GAME_EVENT.CLOSE_MODAL);
    }
  }
};
</script>

<template>
  <ModalWrapperChoice
    class="c-modal-options__large"
    :cancel-class="'c-modal-message__okay-btn'"
    :confirm-class="'c-modal-message__okay-btn c-modal__confirm-btn'"
    :confirm-fn="confirm"
  >
    <template #header>
      클라우드에서 게임 불러오기
    </template>
    <span v-if="hasDifferentName">
      로컬 세이브와 클라우드 세이브의 <b>이름이 다릅니다</b>.
    </span>
    <span v-else-if="older">
      클라우드에서 불러오면 <b>플레이 시간이 더 짧은 세이브를 불러옵니다</b>.
    </span>
    <span v-else-if="farther">
      클라우드에서 불러오면 <b>진행도를 잃게 됩니다</b>.
    </span>
    <span v-else>
      로컬 세이브와 클라우드 세이브의 <b>진행도가 비슷해 보입니다</b>.
    </span>
    불러올 세이브를 선택하세요.
    <br>
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
    <template #cancel-text>
      로컬 세이브 유지
    </template>
    <template #confirm-text>
      클라우드 세이브로 로컬 덮어쓰기
    </template>
  </ModalWrapperChoice>
</template>
