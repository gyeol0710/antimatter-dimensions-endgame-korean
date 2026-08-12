<script>
import ModalWrapper from "@/components/modals/ModalWrapper";
import PrimaryButton from "@/components/PrimaryButton";

export default {
  name: "EnslavedHintsModal",
  components: {
    ModalWrapper,
    PrimaryButton
  },
  data() {
    return {
      currentStored: new Decimal(0),
      nextHintCost: new Decimal(0),
      canGetHint: false,
      shownEntries: [],
      realityHintsLeft: 0,
      glyphHintsLeft: 0,
      hints: 0,
    };
  },
  computed: {
    hintCost() {
      return `${format(TimeSpan.fromMilliseconds(new Decimal(this.nextHintCost)).totalYears, 2)}년`;
    },
    formattedStored() {
      return `${format(TimeSpan.fromMilliseconds(new Decimal(this.currentStored)).totalYears, 2)}년`;
    },
    hasProgress(id) {
      return this.progressEntries.some(entry => entry.id === id);
    },
    // Note: This calculation seems to behave extremely poorly if the goal has been raised more than 12 hints worth
    // of cost bumps and I'm not entirely sure why. There's probably a numerical issue I can't quite figure out, but
    // considering that much cost raising can't happen in practice I think I'm just going to leave it be.
    timeEstimate() {
      if (this.currentStored.gte(new Decimal(this.nextHintCost))) return "";

      // Relevant values are stored as milliseconds, so multiply the rate by 1000 to get to seconds
      const storeRate = new Decimal(1000).times(Enslaved.isStoringGameTime
        ? Enslaved.currentBlackHoleStoreAmountPerMs
        : getGameSpeedupFactor());
      const alreadyWaited = this.currentStored.div(storeRate);
      const decaylessTime = new Decimal(this.nextHintCost).div(storeRate);

      // Check if decay is irrelevant and don't do the hard calculations if so
      const minCostEstimate = (TimeSpan.fromYears(new Decimal(1e40)).totalMilliseconds.sub(this.currentStored)).div(storeRate);
      if (TimeSpan.fromSeconds(minCostEstimate).totalDays.toNumber() > this.hints) {
        return `${TimeSpan.fromSeconds(minCostEstimate).toStringShort(true)}`;
      }

      // Decay is 3x per day, but the math needs decay per second
      const K = Decimal.pow(3, 1 / 86400);
      const x = decaylessTime.times(Decimal.ln(K)).times(Decimal.pow(K, alreadyWaited)).toNumber();
      const timeToGoal = new Decimal(productLog(x)).div(Decimal.ln(K)).sub(alreadyWaited);
      return `${TimeSpan.fromSeconds(timeToGoal).toStringShort(true)}`;
    }
  },
  methods: {
    update() {
      this.currentStored.copyFrom(player.celestials.enslaved.stored);
      this.nextHintCost.copyFrom(Enslaved.nextHintCost);
      this.canGetHint = this.currentStored.gte(new Decimal(this.nextHintCost));
      this.shownEntries = [];

      this.realityHintsLeft = EnslavedProgress.all.length;
      for (const prog of EnslavedProgress.all) {
        if (prog.hasHint) {
          this.shownEntries.push([false, prog]);
          this.realityHintsLeft--;
        }
      }

      const glyphHintCount = player.celestials.enslaved.glyphHintsGiven;
      for (let hintNum = 0; hintNum < glyphHintCount; hintNum++) {
        this.shownEntries.push([true, GameDatabase.celestials.enslaved.glyphHints[hintNum]]);
      }
      this.glyphHintsLeft = GameDatabase.celestials.enslaved.glyphHints.length - glyphHintCount;

      this.hints = Enslaved.hintCostIncreases;
    },
    giveRealityHint(available) {
      if (available <= 0 || !Enslaved.spendTimeForHint()) return;
      EnslavedProgress.all.filter(prog => !prog.hasHint).randomElement().unlock();
    },
    giveGlyphHint(available) {
      if (available <= 0 || !Enslaved.spendTimeForHint()) return;
      player.celestials.enslaved.glyphHintsGiven++;
    }
  },

};
</script>

<template>
  <ModalWrapper>
    <template #header>
      이름없는 자들의 현실에 생긴 균열
    </template>
    <div class="c-enslaved-hint-modal c-modal--short">
      <div>
        이 현실은 완료하려는 시도에 저항하는 것 같습니다. 지금까지 다음과 같은 일을 해냈습니다.
      </div>
      <br>
      <div
        v-for="(entry, index) in shownEntries"
        :key="index"
      >
        <div v-if="!entry[0]">
          <span v-if="entry[1].hasHint && !entry[1].hasProgress">
            <i class="c-icon-wrapper fas fa-question-circle" />
            <b>아직 이 힌트의 의미를 알아내지 못했습니다.</b>
          </span>
          <span v-else>
            <i class="c-icon-wrapper fa-solid fa-house-crack" />
            <b>현실의 균열을 드러냈습니다.</b>
          </span>
          <br>
          - {{ entry[1].hintInfo }}
          <br>
          - {{ entry[1].hasProgress ? entry[1].completedInfo : "?????" }}
        </div>
        <div v-else>
          <i class="fa-solid fa-shapes" /> <b>글리프 힌트:</b>
          <br>
          {{ entry[1] }}
        </div>
        <br>
      </div>
      <div v-if="realityHintsLeft + glyphHintsLeft > 0">
        현실의 균열을 더 찾아보는 데 시간을 쓸 수 있습니다. 저장된 시간으로 힌트를 얻을 때마다 다음 힌트에
        필요한 저장된 시간이 {{ formatInt(3) }}배로 증가합니다. 이 비용 증가는 {{ formatInt(24) }}시간에 걸쳐
        서서히 사라지며, 힌트의 의미를 알아내면 비용이 즉시 원래의 {{ formatInt(2) }}분의 하나로 줄어듭니다.
        비용은 {{ format(1e40) }}년보다 낮아질 수 없습니다.
        <br><br>
        다음 힌트에는 저장된 시간 {{ hintCost }}이 필요합니다. 현재 {{ formattedStored }}을 보유하고 있습니다.
        <span v-if="currentStored < nextHintCost">
          블랙홀을 {{ timeEstimate }} 동안 충전하면 이 값에 도달합니다.
        </span>
        <br><br>
        <PrimaryButton
          :enabled="realityHintsLeft > 0 && canGetHint"
          class="l-enslaved-hint-button"
          @click="giveRealityHint(realityHintsLeft)"
        >
          현실 자체에 관한 힌트 얻기 ({{ formatInt(realityHintsLeft) }}개 남음)
        </PrimaryButton>
        <br>
        <PrimaryButton
          :enabled="glyphHintsLeft > 0 && canGetHint"
          class="l-enslaved-hint-button"
          @click="giveGlyphHint(glyphHintsLeft)"
        >
          사용할 글리프에 관한 힌트 얻기 ({{ formatInt(glyphHintsLeft) }}개 남음)
        </PrimaryButton>
      </div>
      <div v-else>
        <b>남은 힌트가 없습니다!</b>
      </div>
    </div>
  </ModalWrapper>
</template>

<style scoped>
.c-icon-wrapper {
  margin-right: 1rem;
}

.l-enslaved-hint-button {
  margin: 0.4rem 0;
}
</style>
