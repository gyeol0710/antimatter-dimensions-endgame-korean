<script>
import GlyphSetPreview from "@/components/GlyphSetPreview";

export default {
  name: "LaitelaRunButton",
  components: {
    GlyphSetPreview
  },
  data() {
    return {
      realityTime: 0,
      maxDimTier: 0,
      isRunning: false,
      realityReward: new Decimal(1),
      singularitiesUnlocked: false,
      bestSet: [],
      tierNotCompleted: true,
      hadronizeUnlocked: false,
      darkEnergyBoost: new Decimal(0),
      hasHadronizes: false,
      hadronizes: 0,
    };
  },
  computed: {
    completionTime() {
      if (this.tierNotCompleted) return "이 단계에서는 완료하지 못함";
      return `최단 완료: ${TimeSpan.fromSeconds(new Decimal(this.realityTime)).toStringShort()}`;
    },
    runEffects() {
      return GameDatabase.celestials.descriptions[5].effects().split("\n");
    },
    runDescription() {
      return GameDatabase.celestials.descriptions[5].description();
    },
    isDoomed: () => Pelle.isDoomed,
  },
  methods: {
    update() {
      this.realityTime = player.celestials.laitela.fastestCompletion;
      this.maxDimTier = Laitela.maxAllowedDimension;
      this.realityReward.copyFrom(Laitela.realityReward);
      this.isRunning = Laitela.isRunning;
      this.singularitiesUnlocked = Currency.singularities.gt(0);
      this.bestSet = cloneDeep(Glyphs.copyForRecords(player.records.bestReality.laitelaSet));
      this.tierNotCompleted = this.realityTime === 3600 || (this.realityTime === 300 && this.maxDimTier < 8);
      this.hadronizeUnlocked = ExpansionPack.laitelaPack.isBought && !player.disablePostReality;
      this.darkEnergyBoost.copyFrom(Laitela.realityRewardDE);
      this.hasHadronizes = this.hadronizes > 0;
      this.hadronizes = Laitela.hadronizes;
    },
    startRun() {
      if (this.isDoomed) return;
      Modal.celestials.show({ name: "Lai'tela", number: 5 });
    },
    classObject() {
      return {
        "o-laitela-run-button": true,
        "o-laitela-run-button--large": !this.singularitiesUnlocked,
        "o-laitela-run-button--larger": this.hadronizeUnlocked
      };
    },
    runButtonClassObject() {
      return {
        "o-laitela-run-button__icon": true,
        "o-laitela-run-button__icon--running": this.isRunning,
        "c-celestial-run-button--clickable": !this.isDoomed,
        "o-pelle-disabled-pointer": this.isDoomed
      };
    },
    hadronize() {
      Laitela.hadronize();
    }
  }
};
</script>

<template>
  <button :class="classObject()">
    <span :class="{ 'o-pelle-disabled': isDoomed }">
      <b>Lai'tela의 현실 시작</b>
    </span>
    <div
      :class="runButtonClassObject()"
      @click="startRun"
    />
    <div v-if="realityReward.gt(1)">
      <b>
        모든 암흑 물질 배율이 {{ formatX(realityReward, 2, 2) }} 증가합니다.
      </b>
      <br>
      <span v-if="maxDimTier === 0 || hasHadronizes">
        <b>
          암흑 에너지도 추가로 {{ formatX(darkEnergyBoost) }} 획득합니다.
        </b>
      </span>
      <span v-if="hasHadronizes">
        <b>
          Lai'tela의 현실을 {{ formatHybridSmall(hadronizes, 3) }}회 강입자화했습니다.
        </b>
      </span>
      <span v-if="maxDimTier > 0">
        <br><br>
        {{ completionTime }}
        <br>
        <span v-if="maxDimTier <= 7">
          <b>활성화된 최고 차원: {{ formatInt(maxDimTier) }}</b>
        </span>
        <br><br>
        글리프 세트:
        <GlyphSetPreview
          text="최단 불안정화 글리프 세트"
          :text-hidden="true"
          :force-name-color="false"
          :glyphs="bestSet"
        />
      </span>
      <span v-else>
        <br><br>
        Lai'tela의 현실이 완전히 불안정화되어 보상을 더 개선할 수 없습니다.
      </span>
      <br>
    </div>
    <div
      v-for="(line, lineId) in runEffects"
      :key="lineId + '-laitela-run-desc' + maxDimTier"
    >
      {{ line }} <br>
    </div>
    <br>
    <div>{{ runDescription }}</div>
    <br>
    <div v-if="hadronizeUnlocked">
      <button
        class="l-laitela-hadronize-button c-laitela-hadronize-button"
        @click="hadronize"
      >
        <b>Lai'tela의 현실 강입자화</b>
      </button>
      <br>
      <br>
      Lai'tela의 현실을 강입자화하면 {{ formatInt(8) }}개 차원이 모두 다시 안정되어 사용할 수 있습니다.
      이전 강입자화 전에 Lai'tela의 현실을 완료해 얻은 보상은 유지되며, 현실을 다시 불안정화하여
      보상을 더 얻을 수 있습니다. 강입자화할 때마다 Lai'tela의 현실 불안정화 보상이 {{ formatInt(8) }}배로 증가합니다.
    </div>
  </button>
</template>
