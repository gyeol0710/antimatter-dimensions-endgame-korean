<script>
import GlyphCustomizationSingleType from "@/components/modals/options/glyph-appearance/GlyphCustomizationSingleType";
import ModalWrapperOptions from "@/components/modals/options/ModalWrapperOptions";
import PrimaryButton from "@/components/PrimaryButton";

export default {
  name: "SingleGlyphAppearanceModal",
  components: {
    ModalWrapperOptions,
    GlyphCustomizationSingleType,
    PrimaryButton
  },
  props: {
    glyphId: {
      type: Number,
      required: true,
    }
  },
  data() {
    return {
      // This is here to force a re-render if the appearance is set to the default values
      defaultKeySwap: false,
    };
  },
  computed: {
    glyphType() {
      return Glyphs.findById(this.glyphId).type;
    },
    cosmeticTypes() {
      return GlyphAppearanceHandler.availableTypes;
    },
    glyph() {
      return Glyphs.findById(this.glyphId);
    }
  },
  created() {
    // This force-closes the modal only if another glyph is dragged into the panel
    EventHub.logic.on(GAME_EVENT.GLYPH_VISUAL_CHANGE, () => {
      this.$recompute("glyph");
      if (!this.defaultKeySwap) this.emitClose();
    });
  },
  methods: {
    update() {
      this.defaultKeySwap = true;
    },
    setType(type) {
      if (type && this.glyph.fixedCosmetic) return;
      this.glyph.color = undefined;
      this.glyph.symbol = undefined;
      if (this.glyph.fixedCosmetic) this.glyph.cosmetic = this.glyph.fixedCosmetic;
      else this.glyph.cosmetic = type;
      this.defaultKeySwap = false;
      EventHub.dispatch(GAME_EVENT.GLYPH_VISUAL_CHANGE);
    },
    cosmeticTypeClass(type) {
      return {
        "o-primary-btn--subtab-option": true,
        "o-active-type": type === this.glyph.cosmetic
      };
    },
    typeName(type) {
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
      }[type] ?? type.capitalize();
    }
  }
};
</script>

<template>
  <ModalWrapperOptions class="c-modal-options__large">
    <template #header>
      개별 글리프 외형 변경
    </template>
    <PrimaryButton
      class="o-primary-btn--subtab-option"
      @click="setType(undefined)"
    >
      이 글리프의 외형 초기화
    </PrimaryButton>
    <GlyphCustomizationSingleType
      :key="defaultKeySwap"
      :type="glyphType"
      :glyph-id="glyphId"
    />
    <div v-if="cosmeticTypes && glyph.fixedCosmetic">
      이 글리프의 장식 유형은 변경할 수 없습니다!
    </div>
    <div
      v-else-if="cosmeticTypes"
      class="c-special-type"
    >
      특수 장식 유형 적용:
      <PrimaryButton
        v-for="type in cosmeticTypes"
        :key="type"
        :class="cosmeticTypeClass(type)"
        @click="setType(type)"
      >
        {{ typeName(type) }}
      </PrimaryButton>
    </div>
  </ModalWrapperOptions>
</template>

<style scoped>
.c-special-type {
  display: flex;
  flex-direction: row;
  left: 0;
  align-items: center;
}

.o-active-type {
  background-color: var(--color-good);
}
</style>
