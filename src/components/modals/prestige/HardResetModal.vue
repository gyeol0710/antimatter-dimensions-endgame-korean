<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "HardResetModal",
  components: {
    ModalWrapperChoice
  },
  data() {
    return {
      input: ""
    };
  },
  computed: {
    willHardReset() {
      return this.input === "Shrek is love, Shrek is life";
    },
    hasExtraNG() {
      return player.records.fullGameCompletions > 0;
    },
    hasSpeedrun() {
      return player.speedrun.isUnlocked;
    }
  },
  destroyed() {
    if (this.willHardReset) SecretAchievement(38).unlock();
  },
  methods: {
    hardReset() {
      if (this.willHardReset) GameStorage.hardReset();
      this.input = "";
    },
  },
};
</script>

<template>
  <ModalWrapperChoice
    :show-cancel="!willHardReset"
    :show-confirm="willHardReset"
    confirm-class="o-primary-btn--width-medium c-modal__confirm-btn c-modal-hard-reset-btn"
    @confirm="hardReset"
  >
    <template #header>
      하드 리셋
    </template>
    <div class="c-modal-message__text">
      이 세이브 슬롯을 하드 리셋하려면 확인 절차를 거쳐야 합니다.
      <span class="c-modal-hard-reset-danger">세이브를 삭제해도 숨겨진 요소는 아무것도 해금되지 않습니다.</span>
      확인하려면 "Shrek is love, Shrek is life"를 입력하세요.
      <div class="c-modal-hard-reset-danger">
        이 작업은 세이브를 완전히 삭제합니다.
        <span v-if="hasExtraNG">
          <br>
          게임 완료로 해금한 모든 글리프 꾸미기 요소도 삭제됩니다!
        </span>
        <span v-if="hasSpeedrun">
          <br>
          스피드런을 진행할 권한도 잃습니다. 스피드런을 다시 시작하려면 대신 "스피드런 시작" 버튼을 사용하세요.
        </span>
      </div>
    </div>
    <input
      ref="input"
      v-model="input"
      type="text"
      class="c-modal-input c-modal-hard-reset__input"
      @keyup.esc="emitClose"
    >
    <div class="c-modal-hard-reset-info">
      <div
        v-if="willHardReset"
        class="c-modal-hard-reset-danger"
      >
        문구가 확인되었습니다. 계속하면 세이브가 되돌릴 수 없게 삭제됩니다!
      </div>
      <div v-else>
        하드 리셋하려면 올바른 문구를 입력하세요.
      </div>
    </div>
    <template #confirm-text>
      하드 리셋
    </template>
  </ModalWrapperChoice>
</template>
