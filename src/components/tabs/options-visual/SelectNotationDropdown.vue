<script>
export const notationDisplayName = name => ({
  Scientific: "과학",
  Engineering: "공학",
  Letters: "문자",
  Standard: "표준",
  Emoji: "이모지",
  "Mixed scientific": "혼합 과학",
  "Mixed engineering": "혼합 공학",
  Logarithm: "로그",
  Brackets: "괄호",
  Infinity: "무한",
  Roman: "로마 숫자",
  Dots: "점",
  Zalgo: "잘고",
  Hex: "십육진법",
  Imperial: "야드파운드법",
  Clock: "시계",
  Prime: "소수",
  Bar: "막대",
  Shi: "시",
  Blind: "블라인드",
  Blobs: "블롭",
  ALL: "전체",
}[name] ?? name);

export default {
  name: "SelectNotationDropdown",
  computed: {
    notations: () => Notations.all,
  },
  methods: {
    notationDisplayName,
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
        {{ notationDisplayName(notation.name) }}
      </div>
    </div>
  </div>
</template>
