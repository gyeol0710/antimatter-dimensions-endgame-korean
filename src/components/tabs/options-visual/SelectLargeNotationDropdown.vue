<script>
export const largeNotationDisplayName = name => ({
  "Extended Scientific": "확장 과학",
  "Stacked Scientific": "누적 과학",
  "Semi-Stacked Scientific": "반누적 과학",
  "Extended Logarithm": "확장 로그",
  Tetrational: "테트레이션",
  "True Tetrational": "진정한 테트레이션",
  "Hyper E": "하이퍼 E",
  "Simple Extended Scientific": "간단한 확장 과학",
  "Stacked Mixed Scientific": "누적 혼합 과학",
}[name] ?? name);

export default {
  name: "SelectLargeNotationDropdown",
  computed: {
    notations: () => LNotations.all,
  },
  methods: {
    largeNotationDisplayName,
  }
};
</script>

<template>
  <div class="l-select-notation">
    <div class="l-select-notation__inner">
      <div
        v-for="notation in notations"
        :key="notation.name"
        class="o-primary-btn l-select-notation__item c-select-notation__item"
        @click="notation.setAsCurrent()"
      >
        {{ largeNotationDisplayName(notation.name) }}
      </div>
    </div>
  </div>
</template>
