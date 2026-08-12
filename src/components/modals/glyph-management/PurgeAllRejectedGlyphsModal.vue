<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "PurgeAllRejectedGlyphsModal",
  components: {
    ModalWrapperChoice
  },
  data() {
    return {
      isRefining: false,
    };
  },
  computed: {
    refiningOrSacrificing() {
      if (this.isRefining) return `정제`;
      return `희생`;
    },
    topLabel() {
      return `제외된 모든 글리프를 ${this.refiningOrSacrificing}하려고 합니다`;
    },
    message() {
      const negativeWarning = AutoGlyphProcessor.hasNegativeEffectScore()
        ? ` 일부 효과 필터 점수가 음수이므로 평소 보관하려던 글리프를 잃을 수 있습니다.`
        : "";
      return `제외된 모든 글리프를 정말 ${this.refiningOrSacrificing}하시겠습니까? 현재 글리프 필터 설정에서
        제외되는 모든 글리프가 제거됩니다.${negativeWarning}`;
    },
    extraMessage() {
      if (this.glyphsDeleted === 0) return `제거되는 글리프가 없습니다.`;
      if (this.glyphsDeleted === this.glyphsTotal) return `모든 글리프가 제거됩니다.`;
      return `이 과정에서 글리프 ${this.glyphsDeleted}/${this.glyphsTotal}개가 제거됩니다.`;
    },

    // These two don't need to be reactive since the modal force-closes itself whenever glyphs change
    glyphsTotal() {
      return Glyphs.inventory.filter(slot => slot !== null).length;
    },
    glyphsDeleted() {
      return Glyphs.deleteAllRejected(false);
    },
  },
  methods: {
    update() {
      this.isRefining = GlyphSacrificeHandler.isRefining;
    },
    handleYesClick() {
      Glyphs.deleteAllRejected(true);
    },
  },
};
</script>

<template>
  <ModalWrapperChoice
    option="sacrificeAll"
    @confirm="handleYesClick"
  >
    <template #header>
      {{ topLabel }}
    </template>
    <div class="c-modal-message__text">
      {{ message }}
    </div>
    <br>
    <div class="c-modal-hard-reset-danger">
      {{ extraMessage }}
    </div>
  </ModalWrapperChoice>
</template>
