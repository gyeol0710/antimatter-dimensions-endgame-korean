<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "UsernameModal",
  components: {
    ModalWrapperChoice
  },
  data() {
    return {
      hasSeenModal: false,
      input: "",
      username: ""
    };
  },
  computed: {
    notEmpty() {
      return this.input !== "";
    },
  },
  methods: {
    saveUsername() {
      if (this.notEmpty) this.username = this.input;
      if (this.notEmpty) player.username = this.username;
      if (this.notEmpty) this.hasSeenModal = true;
      this.input = "";
      player.options.hasSeenUsernameModal = this.hasSeenModal;
      if (player.options.hasSeenUsernameModal) player.introFrozen = false;
    },
  },
};
</script>

<template>
  <ModalWrapperChoice
    :show-cancel="!notEmpty"
    :show-confirm="notEmpty"
    confirm-class="o-primary-btn--width-medium c-modal__confirm-btn c-modal-username-btn"
    @confirm="saveUsername"
  >
    <template #header>
      사용자 이름 입력
    </template>
    <div class="c-modal-message__text">
      사용자 이름을 확인해 주세요.
      <span class="c-modal-username-danger">사용자 이름은 한 번만 정할 수 있습니다.</span>
      원하는 사용자 이름을 입력하여 확인하세요.
      <div class="c-modal-username-danger">
        이 작업은 되돌릴 수 없습니다
      </div>
    </div>
    <input
      ref="input"
      v-model="input"
      type="text"
      class="c-modal-input c-modal-username__input"
      @keyup.esc="emitClose"
    >
    <div class="c-modal-username-info">
      <div
        v-if="notEmpty"
        class="c-modal-username-danger"
      >
        입력한 사용자 이름이 맞습니까?
      </div>
      <div v-else>
        사용자 이름을 입력해 주세요.
      </div>
    </div>
    <template #confirm-text>
      확인
    </template>
  </ModalWrapperChoice>
</template>
