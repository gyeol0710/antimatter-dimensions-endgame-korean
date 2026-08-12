<script>
import GlyphCustomizationSlidingWindow
  from "@/components/modals/options/glyph-appearance/GlyphCustomizationSlidingWindow";

export default {
  name: "GlyphCustomizationSingleType",
  components: {
    GlyphCustomizationSlidingWindow,
  },
  props: {
    type: {
      type: String,
      required: true,
    },
    glyphId: {
      type: Number,
      required: false,
      default: -1,
    }
  },
  computed: {
    name() {
      return {
        power: "힘",
        infinity: "무한",
        replication: "복제",
        time: "시간",
        dilation: "팽창",
        effarig: "Effarig",
        reality: "현실",
        cursed: "저주받은",
        companion: "동료",
        music: "음악",
        blob: "블롭",
      }[this.type] ?? this.type.capitalize();
    },
    symbols() {
      return GlyphAppearanceHandler.availableSymbols;
    },
    colors() {
      return GlyphAppearanceHandler.availableColors;
    },
  },
};
</script>

<template>
  <div class="c-glyph-customization-entry">
    <span
      v-if="glyphId === -1"
      class="c-name"
    >
      {{ name }} 글리프 외형 설정
    </span>
    <div v-if="type === 'companion'">
      동료 글리프의 기호는 변경할 수 없습니다.
    </div>
    <GlyphCustomizationSlidingWindow
      v-else
      :type="type"
      :is-symbol="true"
      :options="symbols"
      :glyph-id="glyphId"
    />
    <GlyphCustomizationSlidingWindow
      :type="type"
      :is-symbol="false"
      :options="colors"
      :glyph-id="glyphId"
    />
  </div>
</template>

<style scoped>
.c-glyph-customization-entry {
  display: flex;
  flex-direction: column;
}

.c-name {
  width: 100%;
  margin: 0.5rem 0 0;
}
</style>
