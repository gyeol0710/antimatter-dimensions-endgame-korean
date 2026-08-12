<script>
export default {
  name: "GlyphSortButtonGroup",
  data() {
    return {
      showScoreFilter: false,
    };
  },
  methods: {
    update() {
      this.showScoreFilter = EffarigUnlock.glyphFilter.isUnlocked;
    },
    sortByLevel() {
      Glyphs.sortByLevel();
    },
    sortByPower() {
      Glyphs.sortByPower();
    },
    sortByScore() {
      Glyphs.sortByScore();
    },
    sortByEffect() {
      Glyphs.sortByEffect();
    },
    collapseEmpty() {
      Glyphs.collapseEmptySlots();
    }
  }
};
</script>

<template>
  <div class="o-glyph-inventory-management-group">
    <div class="l-glyph-sacrifice-options__header">
      글리프 정렬:
    </div>
    <button
      class="c-glyph-inventory-option"
      @click="sortByLevel"
    >
      레벨순 정렬
      <div class="c-glyph-inventory-option__tooltip">
        글리프 레벨이 높은 순서로 정렬합니다
      </div>
    </button>
    <button
      class="c-glyph-inventory-option"
      @click="sortByPower"
    >
      성능순 정렬
      <div class="c-glyph-inventory-option__tooltip">
        레벨×희귀도가 높은 순서로 정렬합니다
      </div>
    </button>
    <button
      class="c-glyph-inventory-option"
      @click="sortByEffect"
    >
      효과순 정렬
      <div class="c-glyph-inventory-option__tooltip">
        효과를 기준으로 같은 글리프끼리 모읍니다
      </div>
    </button>
    <button
      v-if="showScoreFilter"
      class="c-glyph-inventory-option"
      @click="sortByScore"
    >
      점수순 정렬
      <div class="c-glyph-inventory-option__tooltip">
        글리프 필터 점수가 높은 순서로 정렬합니다
      </div>
    </button>
    <button
      class="c-glyph-inventory-option"
      @click="collapseEmpty"
    >
      빈 공간 정리
      <div class="c-glyph-inventory-option__tooltip">
        모든 글리프를 앞쪽의 빈 슬롯으로 옮깁니다
      </div>
    </button>
  </div>
</template>

<style scoped>

</style>
