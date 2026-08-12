<script>
export default {
  name: "HeaderChallengeEffects",
  data() {
    return {
      isInMatterChallenge: false,
      matter: new Decimal(0),
      isChallengePowerVisible: false,
      challengePower: "",
      isInEffarig: false,
      effarigMultNerfText: "",
      effarigTickNerfText: "",
      isInLaitela: false,
      laitelaTimer: 0,
      laitelaEntropy: "",
      waitingforHint: false,
      enslavedTimer: "",
      isInAlpha: false,
      alphaDecayTimer: new Decimal(0),
      alphaDecayTimeToMax: "",
    };
  },
  computed: {
    enslavedText() {
      return `${Enslaved.displayName}이 현실의 균열을 찾는 것을 돕고 있습니다. ${this.enslavedTimer} 후 조언을 받을 수 있습니다`;
    },
    alphaText() {
      if (this.alphaDecayTimer.lte(0)) return `알파 붕괴가 상한에 도달했습니다`;
      return `알파 붕괴가 ${this.alphaDecayTimeToMax} 후 상한에 도달합니다`;
    },
  },
  methods: {
    update() {
      this.isInMatterChallenge = Player.isInMatterChallenge;
      if (this.isInMatterChallenge) {
        this.matter.copyFrom(Currency.matter);
      }
      this.updateChallengePower();

      this.isInEffarig = Effarig.isRunning;
      if (this.isInEffarig) {
        this.effarigMultNerfText = `${formatPow(0.25 + 0.25 * Effarig.nerfFactor(Currency.infinityPower.value), 0, 5)}`;
        this.effarigTickNerfText = `${formatPow(0.7 + 0.1 * Effarig.nerfFactor(Currency.timeShards.value), 0, 5)}`;
      }
      this.isInLaitela = Laitela.isRunning;
      if (this.isInLaitela) {
        if (player.celestials.laitela.entropy.gt(0)) {
          this.laitelaEntropy = `${formatPercents(new Decimal(player.celestials.laitela.entropy).toNumber(), 2, 2)}`;
          this.laitelaTimer = Time.thisRealityRealTime.toStringShort();
        } else {
          this.laitelaEntropy = `${formatPercents(1, 2, 2)}`;
          this.laitelaTimer = TimeSpan.fromSeconds(new Decimal(player.celestials.laitela.thisCompletion)).toStringShort();
        }
      }

      this.waitingforHint = Enslaved.canTickHintTimer;
      const rawMsUntilHints = 5 * 3600 * 1000 - player.celestials.enslaved.hintUnlockProgress;
      this.enslavedTimer = TimeSpan.fromMilliseconds(new Decimal(rawMsUntilHints / (Enslaved.isRunning ? 1 : 0.4)))
        .toStringShort();

      this.isInAlpha = Alpha.isRunning;
      if (this.isInAlpha) {
        this.alphaDecayTimer = TimeSpan.fromHours(Decimal.max(Alpha.hoursToMax, 0)).totalMilliseconds;
        this.alphaDecayTimeToMax = TimeSpan.fromHours(Decimal.max(Alpha.hoursToMax, 0)).toStringShort();
      }
    },
    updateChallengePower() {
      const isC2Running = NormalChallenge(2).isRunning;
      const isC3Running = NormalChallenge(3).isRunning;
      const isIC6Running = InfinityChallenge(6).isRunning;
      const isIC8Running = InfinityChallenge(8).isRunning;
      const isChallengePowerVisible = isC2Running || isC3Running || isIC6Running || isIC8Running;
      this.isChallengePowerVisible = isChallengePowerVisible;
      if (isChallengePowerVisible) {
        const powerArray = [];
        if (isC2Running) powerArray.push(`생산량: ${formatPercents(player.chall2Pow, 2, 2)}`);
        if (isC3Running) powerArray.push(`제1 차원: ${formatX(player.chall3Pow, 3, 4)}`);
        if (isIC6Running) powerArray.push(`물질: 반물질 차원 /
          ${format(new Decimal(1).timesEffectOf(InfinityChallenge(6)), 2, 2)}`);
        if (isIC8Running) powerArray.push(`생산량: /
          ${format(new Decimal(1).timesEffectOf(InfinityChallenge(8)).reciprocal(), 2, 2)}`);
        this.challengePower = powerArray.join(", ");
      }
    },
  },
};
</script>

<template>
  <div>
    <div v-if="isInAlpha">
      {{ alphaText }}
    </div>
    <div v-if="waitingforHint">
      {{ enslavedText }}
    </div>
    <div v-if="isInEffarig">
      게임 속도와 배율이 {{ effarigMultNerfText }}만큼 팽창됨
      <br>
      틱스피드가 {{ effarigTickNerfText }}만큼 팽창됨
    </div>
    <div v-if="isInLaitela">
      엔트로피: {{ laitelaEntropy }} ({{ laitelaTimer }})
    </div>
    <div v-if="isInMatterChallenge">
      물질이 {{ format(matter, 2, 1) }}만큼 있습니다.
    </div>
    <div v-if="isChallengePowerVisible">
      {{ challengePower }}
    </div>
  </div>
</template>

<style scoped>

</style>
