<script>
import AutobuyerBox from "./AutobuyerBox";
import AutobuyerDropdownEntry from "./AutobuyerDropdownEntry";
import AutobuyerInput from "./AutobuyerInput";
import ExpandingControlBox from "@/components/ExpandingControlBox";

export default {
  name: "RealityAutobuyerBox",
  components: {
    AutobuyerBox,
    AutobuyerInput,
    ExpandingControlBox,
    AutobuyerDropdownEntry
  },
  props: {
    isModal: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      mode: AUTO_REALITY_MODE.RM,
      levelCap: new Decimal(),
      isOverCap: false,
      hasAlternateInputs: false,
    };
  },
  computed: {
    autobuyer: () => Autobuyer.reality,
    hasRelicMode: () => TeresaUnlocks.effarig.canBeApplied,
    modes() {
      const availableModes = [
        AUTO_REALITY_MODE.RM,
        AUTO_REALITY_MODE.GLYPH,
        AUTO_REALITY_MODE.EITHER,
        AUTO_REALITY_MODE.BOTH,
        AUTO_REALITY_MODE.TIME
      ];
      if (this.hasRelicMode) availableModes.push(AUTO_REALITY_MODE.RELIC_SHARD);
      return availableModes;
    },
  },
  methods: {
    update() {
      this.mode = this.autobuyer.mode;
      this.levelCap.copyFrom(Glyphs.levelCap);
      this.isOverCap = new Decimal(this.autobuyer.glyph).gt(this.levelCap);
      // The container only has room for 2 textboxes, so we switch what they go to based on the current mode
      this.hasAlternateInputs = Autobuyer.reality.mode > AUTO_REALITY_MODE.BOTH;
    },
    modeName(mode) {
      switch (mode) {
        case AUTO_REALITY_MODE.RM: return "리얼리티 머신";
        case AUTO_REALITY_MODE.GLYPH: return "글리프 레벨";
        case AUTO_REALITY_MODE.EITHER: return "RM 또는 레벨";
        case AUTO_REALITY_MODE.BOTH: return "RM 및 레벨";
        case AUTO_REALITY_MODE.TIME: return "실제 시간(초)";
        case AUTO_REALITY_MODE.RELIC_SHARD: return "유물 파편";
      }
      throw new Error("Unknown Auto Reality mode");
    },
  }
};
</script>

<template>
  <AutobuyerBox
    :autobuyer="autobuyer"
    :is-modal="isModal"
    name="자동 현실"
  >
    <template #intervalSlot>
      <ExpandingControlBox :auto-close="true">
        <template #header>
          <div class="o-primary-btn c-autobuyer-box__mode-select c-autobuyer-box__mode-select-header">
            ▼ 현재 설정: ▼
            <br>
            {{ modeName(mode) }}
          </div>
        </template>
        <template #dropdown>
          <AutobuyerDropdownEntry
            :autobuyer="autobuyer"
            :modes="modes"
            :mode-name-fn="modeName"
          />
        </template>
      </ExpandingControlBox>
    </template>
    <template #toggleSlot>
      <div v-if="hasAlternateInputs">
        목표 시간(초):
      </div>
      <div v-else>
        목표 리얼리티 머신:
      </div>
      <AutobuyerInput
        :autobuyer="autobuyer"
        :type="hasAlternateInputs ? 'float' : 'decimal'"
        :property="hasAlternateInputs ? 'time' : 'rm'"
      />
    </template>
    <template #checkboxSlot>
      <div v-if="hasAlternateInputs && hasRelicMode">
        목표 유물 파편:
      </div>
      <div v-else>
        목표 글리프 레벨:
      </div>
      <AutobuyerInput
        :autobuyer="autobuyer"
        :type="(hasAlternateInputs && hasRelicMode) ? 'decimal' : 'int'"
        :property="(hasAlternateInputs && hasRelicMode) ? 'shard' : 'glyph'"
      />
      <div v-if="isOverCap">
        자동구매기는 글리프 레벨 상한인 {{ formatHybridLarge(levelCap, 3) }}에서 작동합니다.
      </div>
    </template>
  </AutobuyerBox>
</template>

<style scoped>

</style>
