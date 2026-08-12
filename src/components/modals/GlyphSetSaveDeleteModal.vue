<script>
import GlyphSetPreview from "@/components/GlyphSetPreview";
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "GlyphSetSaveDeleteModal",
  components: {
    ModalWrapperChoice,
    GlyphSetPreview
  },
  props: {
    glyphSetId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      glyphSet: []
    };
  },
  methods: {
    update() {
      this.glyphSet = cloneDeep(Glyphs.copyForRecords(player.reality.glyphs.sets[this.glyphSetId].glyphs));
    },
    handleYesClick() {
      player.reality.glyphs.sets[this.glyphSetId].glyphs = [];
      EventHub.dispatch(GAME_EVENT.GLYPH_SET_SAVE_CHANGE);
    },
  },
};
</script>

<template>
  <ModalWrapperChoice
    option="deleteGlyphSetSave"
    @confirm="handleYesClick"
  >
    <template #header>
      글리프 세트 삭제
    </template>
    <div class="c-modal-message__text">
      다음 글리프 세트를 삭제할지 확인해 주세요.
      <GlyphSetPreview
        :is-in-modal="true"
        :glyphs="glyphSet"
      />
      실제 글리프에는 영향을 주지 않고 저장한 프리셋만 삭제합니다.
    </div>
    <template #confirm-text>
      삭제
    </template>
  </ModalWrapperChoice>
</template>
