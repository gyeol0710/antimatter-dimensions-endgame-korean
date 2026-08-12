<script>
export default {
  name: "ModernCelestialGalaxyRow",
  data() {
    return {
      type: CELESTIAL_GALAXY_TYPE.NORMAL,
      galaxies: {
        celestial: new Decimal()
      },
      requirement: {
        amount: 0
      },
      canBeBought: false,
      distantStart: 0,
      remoteStart: 0,
      lockText: null,
      canBulkBuy: false,
      creditsClosed: false,
      scalingText: {
        distant: null,
        remote: null,
      },
    };
  },
  computed: {
    isDoomed: () => Pelle.isDoomed,
    buttonText() {
      if (this.lockText !== null) return this.lockText;
      const reset = [];
      if (true) reset.push("셀레스티얼 차원");
      if (true) reset.push("셀레스티얼 차원 가속");
      return reset.length === 0
        ? `셀레스티얼 틱스피드 업그레이드의 효과를 강화합니다`
        : `${makeEnumeration(reset)}을 초기화하여 셀레스티얼 틱스피드 업그레이드의 효과를 강화합니다`;
    },
    sumText() {
      const parts = [Decimal.max(this.galaxies.celestial, 0)];
      const sum = parts.map(this.formatCelestialGalaxies).join(" + ");
      return sum;
    },
    typeName() {
      switch (this.type) {
        case CELESTIAL_GALAXY_TYPE.NORMAL: return "셀레스티얼 은하";
        case CELESTIAL_GALAXY_TYPE.DISTANT: return "반대편 셀레스티얼 은하";
        case CELESTIAL_GALAXY_TYPE.REMOTE: return "아득한 셀레스티얼 은하";
      }
      return undefined;
    },
    hasIncreasedScaling() {
      return this.type !== CELESTIAL_GALAXY_TYPE.NORMAL;
    },
    costScalingText() {
      switch (this.type) {
        case CELESTIAL_GALAXY_TYPE.DISTANT:
          return `셀레스티얼 은하는 ${quantifyHybridLarge("셀레스티얼 은하", this.distantStart)}부터 하나씩 더 비싸집니다`;
        case CELESTIAL_GALAXY_TYPE.REMOTE: {
          const scalings = [
            { type: "반대편", function: "이차", amount: this.distantStart },
            { type: "아득한", function: "지수", amount: this.remoteStart }
          ];
          return `셀레스티얼 은하 비용 증가: ${scalings.sort((a, b) => a.amount - b.amount)
            .map(scaling => `${this.formatCelestialGalaxies(scaling.amount)}개부터 ${scaling.function} 증가 (${scaling.type})`)
            .join(", ").capitalize()}`;
        }
      }
      return undefined;
    },
    classObject() {
      return {
        "o-primary-btn o-primary-btn--new o-primary-btn--dimension-reset": true,
        "o-primary-btn--disabled": !this.canBeBought,
        "o-pelle-disabled-pointer": this.creditsClosed
      };
    }
  },
  methods: {
    update() {
      this.type = CelestialGalaxy.type;
      this.galaxies.celestial.copyFrom(player.endgame.celDimExpansion.galaxies);
      const requirement = CelestialGalaxy.requirement;
      this.requirement.amount = requirement.amount;
      this.canBeBought = requirement.isSatisfied && CelestialGalaxy.canBeBought;
      this.distantStart = CelestialGalaxy.costScalingStart;
      this.remoteStart = CelestialGalaxy.remoteStart;
      this.lockText = CelestialGalaxy.lockText;
      this.canBulkBuy = false;
      this.creditsClosed = GameEnd.creditsEverClosed;
      if (this.isDoomed) {
        this.scalingText = {
          distant: this.formatCelestialGalaxies(this.distantStart),
          remote: this.formatCelestialGalaxies(CelestialGalaxy.remoteStart),
        };
      }
    },
    buyCelestialGalaxy(bulk) {
      if (!this.canBeBought) return;
      manualRequestCelestialGalaxyReset(this.canBulkBuy && bulk);
    },
    formatCelestialGalaxies(num) {
      return new Decimal(num).gt(1e8) ? format(num, 2) : formatInt(num);
    },
  }
};
</script>

<template>
  <div class="reset-container galaxy">
    <h4>{{ typeName }} ({{ sumText }})</h4>
    <span>필요량: 셀레스티얼 물질 {{ formatHybridLarge(requirement.amount, 3) }}개</span>
    <span v-if="hasIncreasedScaling">{{ costScalingText }}</span>
    <button
      :class="classObject"
      @click.exact="buyCelestialGalaxy(true)"
      @click.shift.exact="buyCelestialGalaxy(false)"
    >
      {{ buttonText }}
    </button>
  </div>
</template>
