<script>
export default {
  name: "AutoSacrificeAdvancedTab",
  props: {
    glyphType: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      scoreThreshold: 0,
      effectScores: {},
    };
  },
  computed: {
    typeConfig() {
      return GlyphTypes[this.glyphType];
    },
    autoSacrificeSettings() {
      return AutoGlyphProcessor.types[this.glyphType];
    },
    effects() {
      return this.typeConfig.effects;
    },
    descStyle() {
      return {
        "color": GlyphAppearanceHandler.getBorderColor(this.glyphType),
        "border-color": this.typeConfig.color
      };
    },
    minScoreInputStyle() {
      // Override some properties of the number input to match row style:
      return {
        "font-size": "larger",
        "border-width": "var(--var-border-width, 0.2rem)",
      };
    },
    questionmarkTooltip() {
      return "글리프 점수는 희귀도 백분율에 보유한 각 효과의 지정 점수를 더한 값입니다.";
    },
    // This is an absolute value limit (ie. it's allowed to go negative down to negative this value)
    weightInputLimit() {
      return 999;
    },
    indexOffset() {
      return AutoGlyphProcessor.bitmaskIndexOffset(this.glyphType);
    }
  },
  created() {
    this.effectScores = [...AutoGlyphProcessor.types[this.glyphType].effectScores];
  },
  methods: {
    update() {
      this.scoreThreshold = this.autoSacrificeSettings.score;
      for (const e of this.effects) {
        const shiftedIndex = e.bitmaskIndex - this.indexOffset;
        this.effectScores[shiftedIndex] = this.autoSacrificeSettings.effectScores[shiftedIndex];
      }
    },
    limitedInput(input) {
      return Math.clamp(input, -this.weightInputLimit, this.weightInputLimit);
    },
    setScoreThreshold(event) {
      const inputValue = event.target.value;
      if (!isNaN(inputValue)) {
        this.autoSacrificeSettings.score = this.limitedInput(inputValue);
      }
    },
    setEffectScore(index, event) {
      const inputValue = event.target.value;
      if (!isNaN(inputValue)) {
        this.autoSacrificeSettings.effectScores[index] = this.limitedInput(inputValue);
      }
    },
  }
};
</script>

<template>
  <div class="l-auto-sac-type-tab">
    <div class="l-auto-sac-type-tab__row-wrapper">
      <div>
        <div
          :ach-tooltip="questionmarkTooltip"
          class="o-questionmark"
        >
          ?
        </div>
        <b> 기준 점수</b> (희귀도 % + 효과 점수)
      </div>
      <input
        ref="scoreThreshold"
        type="number"
        :min="-weightInputLimit"
        :max="weightInputLimit"
        class="c-auto-sac-type-tab__input"
        :value="scoreThreshold"
        :style="minScoreInputStyle"
        @blur="setScoreThreshold"
      >
    </div>
    <div
      v-for="effect in effects"
      :key="effect.id"
      class="l-auto-sac-type-tab__row-wrapper"
    >
      <div
        class="c-auto-sac-type-tab__effect-desc l-auto-sac-type-tab__effect-desc"
        :style="descStyle"
      >
        {{ effect.genericDesc }}
      </div>
      <input
        type="number"
        :min="-weightInputLimit"
        :max="weightInputLimit"
        class="c-auto-sac-type-tab__input"
        :value="effectScores[effect.bitmaskIndex - indexOffset]"
        @blur="setEffectScore(effect.bitmaskIndex - indexOffset, $event)"
      >
    </div>
  </div>
</template>

<style scoped>

</style>
