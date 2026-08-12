<script>
export default {
  name: "GlyphCleanButtonGroup",
  data() {
    return {
      glyphSacrificeUnlocked: false,
      hasPerkShop: false,
      hasFilter: false,
      inventory: [],
      isRefining: false,
      removeCount: 0,
    };
  },
  computed: {
    removeString() {
      if (this.isRefining) return "정제";
      if (this.glyphSacrificeUnlocked) return "희생";
      return "삭제";
    },
    autoCleanTooltip() {
      return `충분한 수의 다른 글리프보다 모든 면에서 뒤처지는 글리프를 ${this.removeString}합니다${this.hasPerkShop
        ? " (꾸민 글리프 제외)" : ""}`;
    },
    harshAutoCleanTooltip() {
      return `다른 글리프 하나보다 모든 면에서 뒤처지는 글리프를 ${this.removeString}합니다${this.hasPerkShop
        ? " (꾸민 글리프 포함)" : ""}`;
    },
    deleteRejectedTooltip() {
      const negativeWarning = AutoGlyphProcessor.hasNegativeEffectScore()
        ? " 효과 필터 점수가 음수인 항목도 있어 평소 보관하려던 글리프가 제거될 수 있습니다!"
        : "";
      return this.removeCount === 0
        ? `제거되는 글리프가 없습니다. 일부를 제거하려면 필터 설정을 조정하세요.`
        : `${quantifyInt("글리프", this.removeCount)}가 제거됩니다!${negativeWarning}`;
    }
  },
  methods: {
    update() {
      this.glyphSacrificeUnlocked = GlyphSacrificeHandler.canSacrifice && !Pelle.isDoomed;
      this.hasPerkShop = TeresaUnlocks.shop.canBeApplied;
      this.hasFilter = EffarigUnlock.glyphFilter.isUnlocked;
      this.inventory = Glyphs.inventory.map(GlyphGenerator.copy);
      this.isRefining = AutoGlyphProcessor.sacMode === AUTO_GLYPH_REJECT.REFINE ||
        AutoGlyphProcessor.sacMode === AUTO_GLYPH_REJECT.REFINE_TO_CAP;
      this.removeCount = this.inventory
        .filter(g => g !== null && g.idx >= Glyphs.protectedSlots && !AutoGlyphProcessor.wouldKeep(g))
        .length;
    },
    autoClean() {
      if (player.options.confirmations.autoClean) {
        Modal.glyphPurge.show({ harsh: false });
      } else {
        Glyphs.autoClean();
      }
    },
    harshAutoClean() {
      if (player.options.confirmations.autoClean) {
        Modal.glyphPurge.show({ harsh: true });
      } else {
        Glyphs.harshAutoClean();
      }
    },
    deleteAllUnprotected() {
      if (player.options.confirmations.sacrificeAll) {
        Modal.deleteAllUnprotectedGlyphs.show();
      } else {
        Glyphs.autoClean(0);
      }
    },
    deleteAllRejected() {
      if (player.options.confirmations.sacrificeAll) {
        Modal.deleteAllRejectedGlyphs.show();
      } else {
        Glyphs.deleteAllRejected(true);
      }
    },
    slotClass(index) {
      return index < Glyphs.protectedSlots ? "c-glyph-inventory__protected-slot" : "c-glyph-inventory__slot";
    },
  }
};
</script>

<template>
  <div
    v-if="glyphSacrificeUnlocked"
    class="o-glyph-inventory-management-group"
  >
    <div class="l-glyph-sacrifice-options__header">
      약한 글리프 제거:
    </div>
    <button
      class="c-glyph-inventory-option"
      @click="autoClean"
    >
      글리프 정리
      <div class="c-glyph-inventory-option__tooltip">
        {{ autoCleanTooltip }}
      </div>
    </button>
    <button
      class="c-glyph-inventory-option"
      @click="harshAutoClean"
    >
      글리프 강력 정리
      <div class="c-glyph-inventory-option__tooltip">
        {{ harshAutoCleanTooltip }}
      </div>
    </button>
    <button
      class="c-glyph-inventory-option"
      @click="deleteAllUnprotected"
    >
      보호되지 않은 모든 글리프 {{ removeString }}
    </button>
    <button
      v-if="hasFilter"
      class="c-glyph-inventory-option"
      @click="deleteAllRejected"
    >
      필터에서 제외된 모든 글리프 {{ removeString }}
      <div
        class="c-glyph-inventory-option__tooltip l-rejected-tooltip"
      >
        {{ deleteRejectedTooltip }}
      </div>
    </button>
  </div>
</template>

<style scoped>
.l-rejected-tooltip {
  width: 90%;
  left: 5%;
}
</style>
