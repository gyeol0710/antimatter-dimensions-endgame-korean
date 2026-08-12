<script>
export default {
  name: "AnnihilationButton",
  data() {
    return {
      darkMatter: new Decimal(0),
      darkMatterMult: new Decimal(0),
      darkMatterMultGain: new Decimal(0),
      autobuyerUnlocked: false,
      annihilationButtonVisible: false,
      matterRequirement: 0,
      darkMatterMultRatio: new Decimal(0),
      autoAnnihilationInput: player.auto.annihilation.multiplier,
      isEnabled: true,
      modeUnlocked: false,
      annihilationMode: 0,
      isBasic: true,
    };
  },
  computed: {
    annihilationInputStyle() {
      return { "background-color": this.isEnabled ? "" : "var(--color-bad)" };
    }
  },
  methods: {
    update() {
      this.darkMatter.copyFrom(Currency.darkMatter);
      this.darkMatterMult.copyFrom(Laitela.darkMatterMult);
      this.darkMatterMultGain.copyFrom(Laitela.darkMatterMultGain);
      this.autobuyerUnlocked = Autobuyer.annihilation.isUnlocked;
      this.annihilationButtonVisible = Laitela.canAnnihilate || this.autobuyerUnlocked;
      this.matterRequirement = Laitela.annihilationDMRequirement;
      this.darkMatterMultRatio.copyFrom(Laitela.darkMatterMultRatio);
      this.isEnabled = player.auto.annihilation.isActive;
      this.modeUnlocked = ExpansionPack.laitelaPack.isBought && !player.disablePostReality;
      this.annihilationMode = player.auto.annihilation.mode;
      this.isBasic = this.annihilationMode === 0;
    },
    annihilate() {
      Laitela.annihilate();
    },
    modeToggle() {
      player.auto.annihilation.mode = (player.auto.annihilation.mode + 1) % 2;
    },
    handleAutoAnnihilationInputChange() {
      const float = parseFloat(this.autoAnnihilationInput);
      if (isNaN(float)) {
        this.autoAnnihilationInput = player.auto.annihilation.multiplier;
      } else {
        player.auto.annihilation.multiplier = float;
      }
    },
    classObject() {
      return {
        "l-laitela-annihilation-container": true,
        "l-laitela-annihilation-container--large": this.modeUnlocked
      };
    }
  }
};
</script>

<template>
  <div :class="classObject()">
    <button
      v-if="darkMatter.lt(matterRequirement)"
      class="l-laitela-annihilation-button"
    >
      소멸에는 암흑 물질 {{ format(matterRequirement, 2) }}이 필요합니다.
    </button>
    <button
      v-else
      class="l-laitela-annihilation-button c-laitela-annihilation-button"
      @click="annihilate"
    >
      <b>암흑 물질 차원 소멸</b>
    </button>
    <br>
    <br>
    <span v-if="darkMatterMult.gt(1)">
      모든 암흑 물질 차원의 현재 배율: <b>{{ formatX(darkMatterMult, 2, 2) }}</b>
      <br>
      <br>
      소멸하면 암흑 물질과 암흑 물질 차원 보유량이 초기화되지만, 소멸 배율에
      <b>+{{ format(darkMatterMultGain, 2, 2) }}</b>를 더합니다.
      <br>
      (이전 배율의 <b>{{ formatX(darkMatterMultRatio, 2, 2) }}</b>)
      <span v-if="autobuyerUnlocked">
        <br>
        <br>
        <span v-if="isBasic">
          배율에 다음 값을 더할 수 있으면
        </span>
        <span v-if="!isBasic">
          대기 중인 배율이 현재 배율보다
        </span>
        <input
          v-model="autoAnnihilationInput"
          type="text"
          :style="annihilationInputStyle"
          class="c-small-autobuyer-input c-laitela-annihilation-input"
          @change="handleAutoAnnihilationInputChange()"
        >
        <span v-if="isBasic">
          자동 소멸합니다.
        </span>
        <span v-if="!isBasic">
          배 높아지면 자동 소멸합니다.
        </span>
      </span>
    </span>
    <span v-else>
      소멸하면 암흑 물질과 암흑 물질 차원 보유량이 초기화되지만, 모든 암흑 물질 차원에
      <b>{{ formatX(darkMatterMultGain.add(1), 2, 2) }}</b> 배율을 영구적으로 부여합니다.
    </span>
    <br>
    <br>
    <button
      v-if="modeUnlocked"
      class="l-laitela-annihilation-button c-laitela-annihilation-button"
      @click="modeToggle"
    >
      <b>자동구매기 모드 전환</b>
    </button>
  </div>
</template>
