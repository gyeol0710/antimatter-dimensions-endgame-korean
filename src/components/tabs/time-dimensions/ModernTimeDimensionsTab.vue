<script>
import NewTimeDimensionRow from "./ModernTimeDimensionRow";
import PrimaryButton from "@/components/PrimaryButton";

export default {
  name: "NewTimeDimensionsTab",
  components: {
    PrimaryButton,
    NewTimeDimensionRow
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
      isEndgameUnlocked: false,
      timeDimCompressionMagnitude: 0,
      timeDimOverflow: 0,
      timeDimStart: new Decimal(0),
      timeDimCompressionMagnitude2: 0,
      timeDimOverflow2: 0,
      timeDimStart2: new Decimal(0),
      hasSecond: false,
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
      this.shardsPerSecond.copyFrom(TimeDimension(1).productionPerSecond);
      this.incomeType = EternityChallenge(7).isRunning ? "제8 무한 차원" : "시간 파편";
      this.areAutobuyersUnlocked = Autobuyer.timeDimension(1).isUnlocked;
      this.isEndgameUnlocked = PlayerProgress.endgameUnlocked();
      this.timeDimCompressionMagnitude = TimeDimensions.compressionMagnitude;
      this.timeDimOverflow = 1 / this.timeDimCompressionMagnitude;
      this.timeDimStart = TimeDimensions.OVERFLOW;
      this.timeDimCompressionMagnitude2 = TimeDimensions.compressionMag2;
      this.timeDimOverflow2 = 1 / this.timeDimCompressionMagnitude2;
      this.timeDimStart2 = TimeDimensions.OVERFLOW_SQUARED;
      this.hasSecond = Currency.timeShards.gte(DC.ENUMMAX);
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
        최대 구매
      </PrimaryButton>
      <PrimaryButton
        v-if="areAutobuyersUnlocked"
        class="o-primary-btn--subtab-option"
        @click="toggleAllAutobuyers"
      >
        전체 자동구매기 토글
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
      <p>
        <span v-if="isEndgameUnlocked">
          시간 차원 압축 규모는
          <span class="c-time-dim-compression-description__accent">{{ format(timeDimCompressionMagnitude, 2, 3) }}</span>,
          모든 시간 차원 배율을
          <span class="c-time-dim-compression-description__accent">{{ format(timeDimOverflow, 2, 3) }}</span>
          제곱합니다(<span>{{ formatPostBreak(timeDimStart, 2, 1) }}</span> 이상).
        </span>
      </p>
    </div>
    <div>
      <p>
        <span v-if="hasSecond">
          시간 차원 압축^2 규모는
          <span class="c-time-dim-compression-description__accent">{{ format(timeDimCompressionMagnitude2, 2, 3) }}</span>,
          모든 시간 차원 배율을
          <span class="c-time-dim-compression-description__accent">{{ format(timeDimOverflow2, 2, 3) }}</span>
          제곱합니다(<span>{{ formatPostBreak(timeDimStart2, 2, 1) }}</span> 이상).
        </span>
      </p>
    </div>
    <div>
      틱스피드 업그레이드가 {{ formatHybridLarge(tickspeedSoftcap, 3) }}개를 넘으면
      추가 업그레이드의 요구량이 증가하기 시작합니다.
    </div>
    <div>초당 {{ format(shardsPerSecond, 2, 0) }} {{ incomeType }}을 획득합니다.</div>
    <div class="l-dimensions-container">
      <NewTimeDimensionRow
        v-for="tier in 8"
        :key="tier"
        :tier="tier"
        :are-autobuyers-unlocked="areAutobuyersUnlocked"
      />
    </div>
    <div>
      시간 차원의 가격은 {{ format(costIncreases[0], 2, 2) }} EP와
      {{ format(costIncreases[1]) }} EP에서 크게 상승합니다.
      <br>
      또한, {{ format(costIncreases[2]) }} EP 이상이 된다면 더욱 크게 상승하게 됩니다.
      <br>
      <div v-if="showLockedDimCostNote">
        쉬프트 키를 눌러 잠긴 차원의 가격을 확인할 수 있습니다.
      </div>
      <div v-if="hasCap">
        제8 시간 차원은 {{ format(1e8) }}개를 넘게 구매해도 배율이 더 증가하지 않습니다.
      </div>
    </div>
  </div>
</template>
