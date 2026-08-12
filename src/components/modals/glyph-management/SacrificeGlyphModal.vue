<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "SacrificeGlyphModal",
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
      currentGlyphSacrifice: new Decimal(0),
      gain: new Decimal(0),
      confirmedSacrifice: false
    };
  },
  computed: {
    glyph() {
      return Glyphs.findByInventoryIndex(this.idx);
    },
    message() {
      return `이 글리프를 정말 희생하시겠습니까? 희생한 ${this.glyph.type}
      글리프의 총 희생 수치가 ${format(this.currentGlyphSacrifice, 2, 2)}에서
      ${format(this.currentGlyphSacrifice.add(this.gain), 2, 2)}로 증가합니다.`
        .replace(this.glyph.type, this.glyphTypeName(this.glyph.type));
    }
  },
  methods: {
    update() {
      this.currentGlyphSacrifice = player.reality.glyphs.sac[this.glyph.type];
      this.gain = GlyphSacrificeHandler.glyphSacrificeGain(this.glyph);

      const newGlyph = Glyphs.findByInventoryIndex(this.idx);
      if (this.glyph !== newGlyph && !this.confirmedSacrifice) {

        // ConfirmedSacrifice is here because when you sac a glyph with confirmation it
        // Displays this modal message even though the glyph was sacced successfully.
        // I have no idea how the eventHub thing works or if moving the UI update before
        // the sac will break things so this is the best I could do. - Scar

        this.emitClose();
        Modal.message.show("선택한 글리프의 위치나 상태가 변경되었습니다!");
      }
    },
    handleYesClick() {
      this.confirmedSacrifice = true;
      GlyphSacrificeHandler.sacrificeGlyph(this.glyph, true);
    },
    glyphTypeName(type) {
      const names = {
        time: "시간",
        dilation: "팽창",
        replication: "복제",
        infinity: "무한",
        power: "동력",
        effarig: "에파리그",
        reality: "현실",
        cursed: "저주받은",
        companion: "동반자",
      };
      return names[type] ?? type.capitalize();
    },
  },
};
</script>

<template>
  <ModalWrapperChoice
    option="glyphSacrifice"
    @confirm="handleYesClick"
  >
    <template #header>
      글리프를 희생하려고 합니다
    </template>
    <div class="c-modal-message__text">
      {{ message }}
    </div>
  </ModalWrapperChoice>
</template>
