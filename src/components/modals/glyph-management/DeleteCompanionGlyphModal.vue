<script>
import PrimaryButton from "@/components/PrimaryButton";

export default {
  name: "DeleteCompanionGlyphModal",
  components: {
    PrimaryButton
  },
  data() {
    return {
      messageIndex: 0,
    };
  },
  computed: {
    message() {
      switch (this.messageIndex) {
        case 0: return "동반자 글리프를 정말 없애시겠습니까?";
        case 1: return "케이크는 받을 수 없습니다.";
        case 2: return "영구적인 결정입니다! 동반자 글리프를 다시는 얻을 수 없습니다!";
        case 3: return `기록에 있는 어떤 실험 대상보다 충실한 동반자 글리프를 더 빨리 삭제했습니다.
                        축하합니다.`;
        default: return "잘못된 메시지 인덱스";
      }
    }
  },
  methods: {
    handleLeftButtonClick() {
      if (this.messageIndex < 2) {
        this.handleYesClick();
      } else {
        this.handleNoClick();
      }
    },
    handleRightButtonClick() {
      if (this.messageIndex >= 2) {
        this.handleYesClick();
      } else {
        this.handleNoClick();
      }
    },
    handleYesClick() {
      this.messageIndex++;
      if (this.messageIndex === 3) this.deleteCompanion();
    },
    handleNoClick() {
      this.messageIndex = 0;
      this.emitClose();
    },
    deleteCompanion() {
      // Yes, this actually deletes a companion glyph at random, but the player can only ever legitimately have one.
      // Passing information into modals seems to require a bunch of refactoring that's not worth it for this one case.
      const toDelete = player.reality.glyphs.inventory.filter(g => g.type === "companion")[0];
      Glyphs.removeFromInventory(toDelete);
    }
  },
};
</script>

<template>
  <div class="c-modal-message l-modal-content--centered">
    <div class="c-modal-message__text">
      {{ message }}
    </div>
    <div v-if="messageIndex < 3">
      <PrimaryButton
        class="o-primary-btn--width-medium c-modal-message__okay-btn"
        @click="handleLeftButtonClick"
      >
        {{ messageIndex < 2 ? "삭제" : "취소" }}
      </PrimaryButton>
      <PrimaryButton
        class="o-primary-btn--width-medium c-modal-message__okay-btn"
        @click="handleRightButtonClick"
      >
        {{ messageIndex >= 2 ? "삭제" : "취소" }}
      </PrimaryButton>
    </div>
    <div v-else>
      <PrimaryButton
        class="o-primary-btn--width-medium c-modal-message__okay-btn"
        @click="handleNoClick"
      >
        감사합니다
      </PrimaryButton>
    </div>
  </div>
</template>
