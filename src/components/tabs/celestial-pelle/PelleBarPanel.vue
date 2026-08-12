<script>
import wordShift from "@/core/word-shift";

import PelleRift from "./PelleRift";

export default {
  name: "PelleBarPanel",
  components: {
    PelleRift
  },
  data() {
    return {
      decayRate: 0,
      isCollapsed: false,
      time: 0,
    };
  },
  computed: {
    collapseIcon() {
      return this.isCollapsed
        ? "fas fa-expand-arrows-alt"
        : "fas fa-compress-arrows-alt";
    },
    strikes() {
      return PelleStrikes.all;
    }
  },
  methods: {
    update() {
      this.decayRate = Pelle.riftDrainPercent;
      this.isCollapsed = player.celestials.pelle.collapsed.rifts;
      this.time = Date.now();
    },
    toggleCollapse() {
      player.celestials.pelle.collapsed.rifts = !this.isCollapsed;
    },
    sickVisualStrikeText() {
      if (PelleStrikeUpgrade.all.filter(u => u.canBeApplied).length === 0) {
        return `Pelle 타격의 페널티는 영구적이며 아마겟돈 이후에도 유지됩니다!`;
      }
      if (PelleStrikeUpgrade.all.filter(u => u.canBeApplied).length === 1) {
        return this.time % 2500 > 500
          ? `Pelle 타격의 페널티는 영구적이며 아마겟돈 이후에도 유지됩니다!`
          : wordShift.randomCrossWords("Pelle 타격의 페널티는 영구적이며 아마겟돈 이후에도 유지됩니다!");
      }
      if (PelleStrikeUpgrade.all.filter(u => u.canBeApplied).length === 2) {
        return this.time % 2500 > 1000
          ? `Pelle 타격의 페널티는 영구적이며 아마겟돈 이후에도 유지됩니다!`
          : wordShift.randomCrossWords("Pelle 타격의 페널티는 영구적이며 아마겟돈 이후에도 유지됩니다!");
      }
      if (PelleStrikeUpgrade.all.filter(u => u.canBeApplied).length === 3) {
        return this.time % 2500 > 1500
          ? `Pelle 타격의 페널티는 영구적이며 아마겟돈 이후에도 유지됩니다!`
          : wordShift.randomCrossWords("Pelle 타격의 페널티는 영구적이며 아마겟돈 이후에도 유지됩니다!");
      }
      if (PelleStrikeUpgrade.all.filter(u => u.canBeApplied).length === 4) {
        return this.time % 2500 > 2000
          ? `Pelle 타격의 페널티는 영구적이며 아마겟돈 이후에도 유지됩니다!`
          : wordShift.randomCrossWords("Pelle 타격의 페널티는 영구적이며 아마겟돈 이후에도 유지됩니다!");
      }
      if (PelleStrikeUpgrade.all.filter(u => u.canBeApplied).length === 5) {
        return this.time % 2500 > 2400 ? `우리는 다시 만나게 될 것이다...` : wordShift.randomCrossWords("우리는 다시 만나게 될 것이다...");
      }
    }
  }
};
</script>

<template>
  <div class="l-pelle-panel-container">
    <div class="c-pelle-panel-title">
      <i
        :class="collapseIcon"
        class="c-collapse-icon-clickable"
        @click="toggleCollapse"
      />
      Pelle 타격과 균열
    </div>
    <div
      v-if="!isCollapsed"
      class="l-pelle-content-container"
    >
      균열은 막대를 클릭하여 활성화할 수 있습니다.
      <span v-if="strikes.length > 1">균열은 동시에 두 개까지만 활성화할 수 있습니다.</span>
      <br v-else>
      활성화된 균열은 매초 다른 자원의 {{ formatPercents(decayRate) }}를 소모합니다.
      <br>
      균열 효과는 비활성 상태에서도 적용되며 지금까지 소모한 총량을 기준으로 합니다.
      <b class="o-strike-warning">{{ sickVisualStrikeText() }}</b>
      <div class="c-pelle-bar-container">
        <PelleRift
          v-for="strike in strikes"
          :key="strike.config.id"
          :strike="strike"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.c-collapse-icon-clickable {
  position: absolute;
  top: 50%;
  left: 1.5rem;
  width: 3rem;
  align-content: center;
  transform: translateY(-50%);
  cursor: pointer;
}

.c-pelle-bar-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.o-strike-warning {
  color: var(--color-pelle--base);
  font-size: 1.4rem;
}
</style>
