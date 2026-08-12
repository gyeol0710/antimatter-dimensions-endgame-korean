<script>
import PrimaryButton from "@/components/PrimaryButton";
import TimeDimensionRow from "./ClassicTimeDimensionRow";

export default {
  name: "ClassicTimeDimensionsTab",
  components: {
    PrimaryButton,
    TimeDimensionRow
  },
  data() {
    return {
      totalUpgrades: new Decimal(0),
      multPerTickspeed: 0,
      tickspeedSoftcap: 0,
      timeShards: new Decimal(0),
      upgradeThreshold: new Decimal(0),
      shardsPerSecond: new Decimal(0),
      incomeType: "",
      areAutobuyersUnlocked: false,
      showLockedDimCostNote: true,
      hasCap: true
    };
  },
  computed: {
    costIncreases: () => TimeDimension(1).costIncreaseThresholds,
  },
  methods: {
    update() {
      this.showLockedDimCostNote = !TimeDimension(8).isUnlocked && player.realities.gte(1);
      this.totalUpgrades.copyFrom(player.totalTickGained);
      this.multPerTickspeed = FreeTickspeed.multToNext;
      this.tickspeedSoftcap = FreeTickspeed.softcap;
      this.timeShards.copyFrom(Currency.timeShards);
      this.upgradeThreshold.copyFrom(FreeTickspeed.fromShards(Currency.timeShards.value).nextShards);
      this.shardsPerSecond.copyFrom(TimeDimension(1).productionPerRealSecond);
      this.incomeType = EternityChallenge(7).isRunning ? "제8 무한 차원" : "시간 파편";
      this.areAutobuyersUnlocked = Autobuyer.timeDimension(1).isUnlocked;
      this.hasCap = Alpha.currentStage < 11 || player.disablePostReality;
    },
    maxAll() {
      tryUnlockTimeDimensions();
      maxAllTimeDimensions();
    },
    toggleAllAutobuyers() {
      toggleAllTimeDims();
    }
  }
};
</script>

<template>
  <div class="l-time-dim-tab l-centered-vertical-tab">
    <div class="c-subtab-option-container">
      <PrimaryButton
        class="o-primary-btn--subtab-option"
        @click="maxAll"
      >
        전체 구매
      </PrimaryButton>
      <PrimaryButton
        v-if="areAutobuyersUnlocked"
        class="o-primary-btn--subtab-option"
        @click="toggleAllAutobuyers"
      >
        모든 자동구매기 전환
      </PrimaryButton>
    </div>
    <div>
      <p>
        시간 파편으로 얻은 틱스피드 업그레이드가
        <span class="c-time-dim-description__accent">{{ formatHybridLarge(totalUpgrades, 3) }}</span>개이며, 보유한 시간 파편은
        <span class="c-time-dim-description__accent">{{ format(timeShards, 2, 1) }}</span>입니다.
      </p>
      <p>
        다음 틱스피드 업그레이드: 시간 파편
        <span class="c-time-dim-description__accent">{{ format(upgradeThreshold, 2, 1) }}</span>, 획득한 틱스피드
        업그레이드마다 요구량이 <span class="c-time-dim-description__accent">{{ formatX(multPerTickspeed, 2, 2) }}</span> 증가합니다.
      </p>
    </div>
    <div>
      틱스피드 업그레이드가 {{ formatHybridLarge(tickspeedSoftcap, 3) }}개를 넘으면
      추가 업그레이드의 요구량이 증가하기 시작합니다.
    </div>
    <div>
      초당 {{ format(shardsPerSecond, 2, 0) }} {{ incomeType }}을 획득합니다.
    </div>
    <div class="l-dimensions-container">
      <TimeDimensionRow
        v-for="tier in 8"
        :key="tier"
        :tier="tier"
        :are-autobuyers-unlocked="areAutobuyersUnlocked"
      />
    </div>
    <div>
      시간 차원 가격은 {{ format(costIncreases[0], 2, 2) }} EP와
      {{ format(costIncreases[1]) }} EP에서 크게 상승하며,
      <br>
      {{ format(costIncreases[2]) }} EP 이후에는 훨씬 빠르게 증가합니다.
      <br>
      <div v-if="showLockedDimCostNote">
        Shift 키를 누르면 잠긴 시간 차원의 영원 포인트 가격을 볼 수 있습니다.
      </div>
      <div v-if="hasCap">
        제8 시간 차원은 {{ format(1e8) }}개를 넘게 구매해도 배율이 더 증가하지 않습니다.
      </div>
    </div>
  </div>
</template>
