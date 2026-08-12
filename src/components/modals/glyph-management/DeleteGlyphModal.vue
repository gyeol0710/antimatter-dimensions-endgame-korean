<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "DeleteGlyphModal",
  components: {
    ModalWrapperChoice
  },
  props: {
    idx: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      confirmedDelete: false
    };
  },
  computed: {
    glyph() {
      return Glyphs.findByInventoryIndex(this.idx);
    },
  },
  methods: {
    update() {
      const newGlyph = Glyphs.findByInventoryIndex(this.idx);
      if (this.glyph !== newGlyph && !this.confirmedDelete) {

        // Why is confirmedDelete here: refer to SacrificeGlyphModal.vue

        this.emitClose();
        Modal.message.show("선택한 글리프의 위치나 상태가 변경되었습니다!");
      }
    },
    handleYesClick() {
      this.confirmedDelete = true;
      Glyphs.removeFromInventory(this.glyph);
    },
  },
};
</script>

<template>
  <ModalWrapperChoice @confirm="handleYesClick">
    <template #header>
      글리프를 삭제하려고 합니다
    </template>
    <div class="c-modal-message__text">
      글리프를 삭제하면 인벤토리에서 영구적으로 제거됩니다!
      <div class="c-modal-hard-reset-danger">
        글리프 희생을 해금하기 전에 글리프를 삭제해도 얻는 것은 없습니다!
      </div>
    </div>
  </ModalWrapperChoice>
</template>
