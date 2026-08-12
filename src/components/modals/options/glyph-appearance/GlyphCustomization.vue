<script>
import GlyphComponent from "@/components/GlyphComponent";
import GlyphCustomizationSingleType from "@/components/modals/options/glyph-appearance/GlyphCustomizationSingleType";
import PrimaryButton from "@/components/PrimaryButton";
import PrimaryToggleButton from "@/components/PrimaryToggleButton";

export default {
  name: "GlyphCustomization",
  components: {
    GlyphCustomizationSingleType,
    PrimaryButton,
    PrimaryToggleButton,
    GlyphComponent
  },
  data() {
    return {
      enabled: false,
      // This is here to force a re-render if the appearance is set to the default values
      defaultKeySwap: false,
      selectedIndex: 0,
    };
  },
  computed: {
    cosmeticTypes() {
      // We want to sort the base types in a way consistent with type orders within most of the rest of the game. We
      // can safely slice the first 5 and insert them back in the correct order because they'll always be unlocked.
      const nonBaseTypes = CosmeticGlyphTypes.list.filter(t => t.canCustomize).map(t => t.id).slice(5);
      const sortedBase = ["power", "infinity", "replication", "time", "dilation"];
      return sortedBase.concat(nonBaseTypes);
    },
    glyphIconProps() {
      return {
        size: "2.5rem",
        "glow-blur": "0.3rem",
        "glow-spread": "0.1rem",
        "text-proportion": 0.7
      };
    },
    hasCustomSets() {
      return GlyphAppearanceHandler.unlockedSets.length > 0;
    },
    hasSpecialTypes() {
      return GlyphAppearanceHandler.availableTypes.length > 0;
    }
  },
  watch: {
    enabled(newValue) {
      player.reality.glyphs.cosmetics.active = newValue;
      EventHub.dispatch(GAME_EVENT.GLYPH_VISUAL_CHANGE);
    },
  },
  methods: {
    update() {
      this.enabled = player.reality.glyphs.cosmetics.active;
      this.defaultKeySwap = true;
    },
    resetAll() {
      const cosmetics = player.reality.glyphs.cosmetics;
      cosmetics.symbolMap = {};
      cosmetics.colorMap = {};
      this.defaultKeySwap = false;
      EventHub.dispatch(GAME_EVENT.GLYPH_VISUAL_CHANGE);
    },
    resetSingle() {
      const cosmetics = player.reality.glyphs.cosmetics;
      const currType = this.cosmeticTypes[this.selectedIndex];
      cosmetics.symbolMap[currType] = undefined;
      cosmetics.colorMap[currType] = undefined;
      this.defaultKeySwap = false;
      EventHub.dispatch(GAME_EVENT.GLYPH_VISUAL_CHANGE);
    },
    fakeGlyph(type) {
      let typeName = "power";
      if (type === "reality") typeName = "reality";
      if (type === "cursed") typeName = "cursed";
      return {
        // This are just dummy values to make sure that GlyphComponent doesn't throw errors; only the cosmetic aspects
        // will end up being visible in this case anyway (as they override anything type would otherwise show). Type
        // looks particularly odd because reality glyphs need that passed in for the color animation, and cursed ones
        // are inverted, but power is an okay placeholder for anything else. We can't pass in type or else it will error
        // out with cosmetic types.
        type: typeName,
        strength: 1,
        cosmetic: type,
      };
    },
    typeClass(index) {
      return {
        "c-single-type": true,
        "o-disabled-cosmetics": !this.enabled,
        "c-type-current": this.selectedIndex === index,
        "c-type-other": this.selectedIndex !== index,
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
    },
    resetIndividual() {
      for (const glyph of Glyphs.allGlyphs) {
        if (!glyph.fixedCosmetic) glyph.cosmetic = undefined;
      }
      this.defaultKeySwap = false;
      EventHub.dispatch(GAME_EVENT.GLYPH_VISUAL_CHANGE);
    },
  }
};
</script>

<template>
  <div class="c-glyph-customization-group">
    <b>사용자 지정 글리프 외형</b>
    <PrimaryToggleButton
      v-model="enabled"
      class="o-primary-btn--subtab-option"
      on="활성화"
      off="비활성화"
    />
    <br>
    <div v-if="hasCustomSets">
      외형을 기본값으로 초기화:
      <PrimaryButton
        class="o-primary-btn--subtab-option"
        :class="{ 'o-primary-btn--disabled' : !enabled }"
        @click="resetAll"
      >
        모든 유형
      </PrimaryButton>
      <PrimaryButton
        class="o-primary-btn--subtab-option"
        :class="{ 'o-primary-btn--disabled' : !enabled }"
        @click="resetSingle"
      >
        이 유형
      </PrimaryButton>
      <br>
      <i>개별적으로 변경한 글리프는 초기화되지 않습니다.</i>
      <br>
      <br>
      글리프 유형:
      <br>
      <div class="c-type-selection">
        <div
          v-for="(type, index) in cosmeticTypes"
          :key="type"
          :class="typeClass(index)"
          @click="selectedIndex = index"
        >
          <GlyphComponent
            v-tooltip="typeName(type)"
            v-bind="glyphIconProps"
            :glyph="fakeGlyph(type)"
          />
        </div>
      </div>
      <GlyphCustomizationSingleType
        :key="selectedIndex + enabled + defaultKeySwap"
        :type="cosmeticTypes[selectedIndex]"
      />
      참고: 일부 설정은 특정 테마와 글리프 유형에서 색상 대비나 가독성이 매우 떨어질 수 있습니다.
    </div>
    <div v-else>
      현재 글리프의 기본 외형을 변경할 수 있는 설정이 없습니다. 설정을 잠금 해제하려면
      상점 탭을 방문하거나 게임을 완료하세요.
      <br>
      <br>
      <span v-if="hasSpecialTypes">
        이 설정을 활성화하면 개별 글리프를 잠금 해제한 특수 장식 유형으로 변경할 수 있습니다.
      </span>
      <span v-else>
        현재 이 설정을 활성화하거나 비활성화해도 아무 효과가 없습니다.
      </span>
    </div>
    <PrimaryButton
      class="o-primary-btn--subtab-option"
      @click="resetIndividual"
    >
      모든 개별 글리프 장식 초기화
    </PrimaryButton>
  </div>
</template>

<style scoped>
.c-glyph-customization-group {
  width: 100%;
  margin-top: 0.5rem;
  text-align: left;
}

.c-type-selection {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 0.5rem;
}

.o-disabled-cosmetics {
  opacity: 0.5;
}

.c-single-type {
  padding: 0.5rem;
}

.c-type-current {
  border: 0.1rem solid var(--color-text);
}

.c-type-other {
  padding: 0.6rem;
}
</style>
