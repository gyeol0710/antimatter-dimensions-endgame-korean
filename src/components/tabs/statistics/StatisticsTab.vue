<script>
import { MatterScale } from "./matter-scale";
import PrimaryButton from "@/components/PrimaryButton";

export default {
  name: "StatisticsTab",
  components: {
    PrimaryButton
  },
  data() {
    return {
      isDoomed: false,
      realTimeDoomed: TimeSpan.zero,
      totalAntimatter: new Decimal(0),
      totalAntimatterOutsideDoom: new Decimal(0),
      bestDoomedAntimatterThisDivinity: new Decimal(0),
      totalCelMatter: new Decimal(0),
      totalDivineMatter: new Decimal(0),
      hasSeenDivineDims: false,
      realTimePlayed: TimeSpan.zero,
      timeSinceCreation: 0,
      uniqueNews: 0,
      totalNews: 0,
      secretAchievementCount: 0,
      infinity: {
        isUnlocked: false,
        count: new Decimal(0),
        banked: new Decimal(0),
        projectedBanked: new Decimal(0),
        bankRate: new Decimal(0),
        totalInfinityAntimatter: new Decimal(0),
        hasBest: false,
        best: TimeSpan.zero,
        this: TimeSpan.zero,
        thisReal: TimeSpan.zero,
        bestRate: new Decimal(0),
      },
      eternity: {
        isUnlocked: false,
        count: new Decimal(0),
        totalEternityAntimatter: new Decimal(0),
        hasBest: false,
        best: TimeSpan.zero,
        this: TimeSpan.zero,
        thisReal: TimeSpan.zero,
        bestRate: new Decimal(0),
      },
      reality: {
        isUnlocked: false,
        count: new Decimal(0),
        totalRealityAntimatter: new Decimal(0),
        hasBest: false,
        best: TimeSpan.zero,
        bestReal: TimeSpan.zero,
        this: TimeSpan.zero,
        thisReal: TimeSpan.zero,
        totalTimePlayed: TimeSpan.zero,
        bestRate: new Decimal(0),
        bestRarity: 0,
      },
      endgame: {
        isUnlocked: false,
        count: 0,
        totalEndgameAntimatter: new Decimal(0),
        hasBest: false,
        best: TimeSpan.zero,
        bestReal: TimeSpan.zero,
        this: TimeSpan.zero,
        thisReal: TimeSpan.zero,
        bestRateCP: new Decimal(0),
        bestRateDP: new Decimal(0),
      },
      celestialInfinity: {
        isUnlocked: false,
        count: new Decimal(0),
        totalCelestialInfinityCelMatter: new Decimal(0),
        hasBest: false,
        best: TimeSpan.zero,
        bestReal: TimeSpan.zero,
        this: TimeSpan.zero,
        thisReal: TimeSpan.zero,
        bestRate: new Decimal(0),
      },
      celestialEternity: {
        isUnlocked: false,
        count: new Decimal(0),
        totalCelestialEternityCelMatter: new Decimal(0),
        hasBest: false,
        best: TimeSpan.zero,
        bestReal: TimeSpan.zero,
        this: TimeSpan.zero,
        thisReal: TimeSpan.zero,
        bestRate: new Decimal(0),
      },
      divinity: {
        isUnlocked: false,
        count: 0
      },
      condense: {
        isUnlocked: false,
        count: new Decimal(0),
        totalCondenseDivineMatter: new Decimal(0),
        hasBest: false,
        best: TimeSpan.zero,
        bestReal: TimeSpan.zero,
        this: TimeSpan.zero,
        thisReal: TimeSpan.zero,
        bestRate: new Decimal(0),
      },
      supernova: {
        isUnlocked: false,
        count: new Decimal(0),
        totalSupernovaDivineMatter: new Decimal(0),
        hasBest: false,
        best: TimeSpan.zero,
        bestReal: TimeSpan.zero,
        this: TimeSpan.zero,
        thisReal: TimeSpan.zero,
        bestRate: new Decimal(0),
      },
      matterScale: [],
      lastMatterTime: 0,
      paperclips: 0,
      fullTimePlayed: 0,
    };
  },
  computed: {
    // These are here to avoid extra spaces in-game pre-reality and to get around codefactor 120-char limits in the
    // HTML template due to the fact that adding a linebreak also adds a space
    infinityCountString() {
      const num = this.infinity.count;
      return num.gt(0)
        ? `${this.formatDecimalAmount(num)} ${pluralize("무한", num.floor())}`
        : "무한 없음";
    },
    eternityCountString() {
      const num = this.eternity.count;
      return num.gt(0)
        ? `${this.formatDecimalAmount(num)} ${pluralize("영원", num.floor())}`
        : "영원 없음";
    },
    realityCountString() {
      const num = new Decimal(this.reality.count);
      return num.gt(0)
        ? `${this.formatDecimalAmount(num)} ${pluralize("현실", num.floor())}`
        : "현실 없음";
    },
    endgameCountString() {
      const num = new Decimal(this.endgame.count);
      return num.gt(0)
        ? `${this.formatDecimalAmount(num)} ${pluralize("엔드게임", num.floor())}`
        : "엔드게임 없음";
    },
    celestialInfinityCountString() {
      const num = this.celestialInfinity.count;
      return num.gt(0)
        ? `${this.formatDecimalAmount(num)} ${pluralize("셀레스티얼 무한", num.floor())}`
        : "셀레스티얼 무한 없음";
    },
    celestialEternityCountString() {
      const num = this.celestialEternity.count;
      return num.gt(0)
        ? `${this.formatDecimalAmount(num)} ${pluralize("셀레스티얼 영원", num.floor())}`
        : "셀레스티얼 영원 없음";
    },
    divinityCountString() {
      const num = new Decimal(this.divinity.count);
      return num.gt(0)
        ? `${this.formatDecimalAmount(num)} ${pluralize("신성", num.floor())}`
        : "신성 없음";
    },
    condenseCountString() {
      const num = this.condense.count;
      return num.gt(0)
        ? `${this.formatDecimalAmount(num)} ${pluralize("응축", num.floor())}`
        : "응축 없음";
    },
    supernovaCountString() {
      const num = this.supernova.count;
      return num.gt(0)
        ? `${this.formatDecimalAmount(num)} ${pluralize("초신성", num.floor())}`
        : "초신성 없음";
    },
    fullGameCompletions() {
      return player.records.fullGameCompletions;
    },
    startDate() {
      return Time.toDateTimeString(player.records.gameCreatedTime);
    },
    saveAge() {
      return TimeSpan.fromMilliseconds(new Decimal(this.timeSinceCreation));
    },
  },
  methods: {
    update() {
      const records = player.records;
      this.totalAntimatter.copyFrom(records.totalAntimatter);
      this.totalAntimatterOutsideDoom.copyFrom(player.records.totalAntimatterOutsideDoom);
      this.bestDoomedAntimatterThisDivinity.copyFrom(player.records.bestDoomedAntimatterThisDivinity);
      this.totalCelMatter.copyFrom(records.totalCelMatter);
      this.totalDivineMatter.copyFrom(records.totalDivineMatter);
      this.hasSeenDivineDims = DivinityMilestone.divineDimensions.isReached;
      this.realTimePlayed.setFrom(new Decimal(records.realTimePlayed));
      this.fullTimePlayed = TimeSpan.fromMilliseconds(
        new Decimal(records.previousRunRealTime + records.realTimePlayed));
      this.uniqueNews = NewsHandler.uniqueTickersSeen;
      this.totalNews = player.news.totalSeen;
      this.secretAchievementCount = SecretAchievements.all.filter(a => a.isUnlocked).length;
      this.timeSinceCreation = Date.now() - player.records.gameCreatedTime;

      const progress = PlayerProgress.current;
      const isInfinityUnlocked = progress.isInfinityUnlocked;
      const infinity = this.infinity;
      const bestInfinity = records.bestInfinity;
      infinity.isUnlocked = isInfinityUnlocked;
      if (isInfinityUnlocked) {
        infinity.count.copyFrom(Currency.infinities);
        infinity.banked.copyFrom(Currency.infinitiesBanked);
        infinity.projectedBanked = new Decimal(0).plusEffectsOf(
          Achievement(131).effects.bankedInfinitiesGain,
          TimeStudy(191).effects.bankedInfinitiesGain,
        );
        infinity.bankRate = infinity.projectedBanked.div(Decimal.clampMin(33, records.thisEternity.time)).times(60000);
        infinity.totalInfinityAntimatter.copyFrom(records.totalInfinityAntimatter);
        infinity.hasBest = bestInfinity.time.lt(999999999999);
        infinity.best.setFrom(bestInfinity.time);
        infinity.this.setFrom(records.thisInfinity.time);
        infinity.bestRate.copyFrom(bestInfinity.bestIPminEternity);
      }

      const isEternityUnlocked = progress.isEternityUnlocked;
      const eternity = this.eternity;
      const bestEternity = records.bestEternity;
      eternity.isUnlocked = isEternityUnlocked;
      if (isEternityUnlocked) {
        eternity.count.copyFrom(Currency.eternities);
        eternity.totalEternityAntimatter.copyFrom(records.totalEternityAntimatter);
        eternity.hasBest = bestEternity.time.lt(999999999999);
        eternity.best.setFrom(bestEternity.time);
        eternity.this.setFrom(records.thisEternity.time);
        eternity.bestRate.copyFrom(bestEternity.bestEPminReality);
      }

      const isRealityUnlocked = progress.isRealityUnlocked;
      const reality = this.reality;
      const bestReality = records.bestReality;
      reality.isUnlocked = isRealityUnlocked;

      if (isRealityUnlocked) {
        reality.count.copyFrom(Decimal.floor(Currency.realities.value));
        reality.totalRealityAntimatter.copyFrom(records.totalRealityAntimatter);
        reality.hasBest = bestReality.time.lt(999999999999);
        reality.best.setFrom(bestReality.time);
        reality.bestReal.setFrom(new Decimal(bestReality.realTime));
        reality.this.setFrom(records.thisReality.time);
        reality.totalTimePlayed.setFrom(records.totalTimePlayed);
        // Real time tracking is only a thing once reality is unlocked:
        infinity.thisReal.setFrom(new Decimal(records.thisInfinity.realTime));
        infinity.bankRate = infinity.projectedBanked.div(Math.clampMin(33, records.thisEternity.realTime)).times(60000);
        eternity.thisReal.setFrom(new Decimal(records.thisEternity.realTime));
        reality.thisReal.setFrom(new Decimal(records.thisReality.realTime));
        reality.bestRate.copyFrom(bestReality.RMmin);
        reality.bestRarity = Math.max(strengthToRarity(bestReality.glyphStrength), 0);
      }

      const isEndgameUnlocked = progress.isEndgameUnlocked;
      const endgame = this.endgame;
      const bestEndgame = records.bestEndgame;
      endgame.isUnlocked = isEndgameUnlocked;
      
      if (isEndgameUnlocked) {
        endgame.count = Math.floor(player.endgames);
        endgame.totalEndgameAntimatter.copyFrom(records.totalEndgameAntimatter);
        endgame.hasBest = bestEndgame.realTime < 999999999999;
        endgame.best.setFrom(bestEndgame.time);
        endgame.bestReal.setFrom(new Decimal(bestEndgame.realTime));
        endgame.this.setFrom(records.thisEndgame.time);
        endgame.thisReal.setFrom(new Decimal(records.thisEndgame.realTime));
        endgame.bestRateCP.copyFrom(bestEndgame.bestCPmin);
        endgame.bestRateDP.copyFrom(bestEndgame.bestDPmin);
      }

      const isCelestialInfinityUnlocked = progress.isCelestialInfinityUnlocked;
      const celestialInfinity = this.celestialInfinity;
      const bestCelestialInfinity = records.bestCelestialInfinity;
      celestialInfinity.isUnlocked = isCelestialInfinityUnlocked;
      if (isCelestialInfinityUnlocked) {
        celestialInfinity.count.copyFrom(Currency.celestialInfinities);
        celestialInfinity.totalCelestialInfinityCelMatter.copyFrom(records.totalCelestialInfinityCelMatter);
        celestialInfinity.hasBest = bestCelestialInfinity.realTime < 999999999999;
        celestialInfinity.best.setFrom(bestCelestialInfinity.time);
        celestialInfinity.bestReal.setFrom(new Decimal(bestCelestialInfinity.realTime));
        celestialInfinity.this.setFrom(records.thisCelestialInfinity.time);
        celestialInfinity.thisReal.setFrom(new Decimal(records.thisCelestialInfinity.realTime));
        celestialInfinity.bestRate.copyFrom(bestCelestialInfinity.bestCIPminCelestialEternity);
      }

      const isCelestialEternityUnlocked = progress.isCelestialEternityUnlocked;
      const celestialEternity = this.celestialEternity;
      const bestCelestialEternity = records.bestCelestialEternity;
      celestialEternity.isUnlocked = isCelestialEternityUnlocked;
      if (isCelestialEternityUnlocked) {
        celestialEternity.count.copyFrom(Currency.celestialEternities);
        celestialEternity.totalCelestialEternityCelMatter.copyFrom(records.totalCelestialEternityCelMatter);
        celestialEternity.hasBest = bestCelestialEternity.realTime < 999999999999;
        celestialEternity.best.setFrom(bestCelestialEternity.time);
        celestialEternity.bestReal.setFrom(new Decimal(bestCelestialEternity.realTime));
        celestialEternity.this.setFrom(records.thisCelestialEternity.time);
        celestialEternity.thisReal.setFrom(new Decimal(records.thisCelestialEternity.realTime));
        celestialEternity.bestRate.copyFrom(bestCelestialEternity.bestCEPminCelestialReality);
      }

      const isDivinityUnlocked = progress.isDivinityUnlocked;
      const divinity = this.divinity;
      divinity.isUnlocked = isDivinityUnlocked;
      if (isDivinityUnlocked) {
        divinity.count = Math.floor(player.celestials.pelle.divinities);
      }

      const isCondenseUnlocked = progress.isCondenseUnlocked;
      const condense = this.condense;
      const bestCondense = records.bestCondense;
      condense.isUnlocked = isCondenseUnlocked;
      if (isCondenseUnlocked) {
        condense.count.copyFrom(Currency.condenses);
        condense.totalCondenseDivineMatter.copyFrom(records.totalCondenseDivineMatter);
        condense.hasBest = bestCondense.realTime < 999999999999;
        condense.best.setFrom(bestCondense.time);
        condense.bestReal.setFrom(new Decimal(bestCondense.realTime));
        condense.this.setFrom(records.thisCondense.time);
        condense.thisReal.setFrom(new Decimal(records.thisCondense.realTime));
        condense.bestRate.copyFrom(bestCondense.bestVSminSupernova);
      }

      const isSupernovaUnlocked = progress.isSupernovaUnlocked;
      const supernova = this.supernova;
      const bestSupernova = records.bestSupernova;
      supernova.isUnlocked = isSupernovaUnlocked;
      if (isSupernovaUnlocked) {
        supernova.count.copyFrom(Currency.supernovae);
        supernova.totalSupernovaDivineMatter.copyFrom(records.totalSupernovaDivineMatter);
        supernova.hasBest = bestSupernova.realTime < 999999999999;
        supernova.best.setFrom(bestSupernova.time);
        supernova.bestReal.setFrom(new Decimal(bestSupernova.realTime));
        supernova.this.setFrom(records.thisSupernova.time);
        supernova.thisReal.setFrom(new Decimal(records.thisSupernova.realTime));
        supernova.bestRate.copyFrom(bestSupernova.bestNebminTotal);
      }
      this.updateMatterScale();

      this.isDoomed = Pelle.isDoomed;
      this.realTimeDoomed.setFrom(new Decimal(player.records.realTimeDoomed));
      this.paperclips = player.news.specialTickerData.paperclips;
    },
    formatDecimalAmount(value) {
      return value.gt(1e9) ? format(value, 3) : formatInt(Math.floor(value.toNumber()));
    },
    // Only updates once per second to reduce jitter
    updateMatterScale() {
      if (Date.now() - this.lastMatterTime > 1000) {
        this.matterScale = MatterScale.estimate(Currency.antimatter.value);
        this.lastMatterTime = Date.now();
      }
    },
    realityClassObject() {
      return {
        "c-stats-tab-title": true,
        "c-stats-tab-reality": !this.isDoomed,
        "c-stats-tab-doomed": this.isDoomed,
      };
    }
  },
};
</script>

<template>
  <div class="c-stats-tab">
    <div>
      <PrimaryButton onclick="Modal.catchup.show(0)">
        콘텐츠 요약 확인하기
      </PrimaryButton>
      <div class="c-stats-tab-title c-stats-tab-general">
        일반
      </div>
      <div class="c-stats-tab-general">
        <div>총 {{ format(totalAntimatter, 2, 1) }} 반물질을 만들었습니다.</div>
        <div v-if="divinity.isUnlocked">
          이번 신성의 파멸에서 총 {{ format(bestDoomedAntimatterThisDivinity, 2, 1) }} 반물질을 생산했습니다.
        </div>
        <div v-if="endgame.isUnlocked">
          파멸 밖에서 총 {{ format(totalAntimatterOutsideDoom, 2, 1) }} 반물질을 생산했습니다.
        </div>
        <div v-if="endgame.isUnlocked">
          이번 엔드게임에서 총 {{ format(endgame.totalEndgameAntimatter, 2, 1) }} 반물질을 생산했습니다.
        </div>
        <div v-if="reality.isUnlocked" :class="{ 'c-stats-tab-doomed' : isDoomed }">
          총 {{ format(reality.totalRealityAntimatter, 2, 1) }} 반물질을
          이번 {{ isDoomed ? "아마겟돈" : "현실" }}에서 생산했습니다.
        </div>
        <div v-if="eternity.isUnlocked">
          이번 영원에서 총 {{ format(eternity.totalEternityAntimatter, 2, 1) }} 반물질을 생산했습니다.
        </div>
        <div v-if="infinity.isUnlocked">
          이번 무한에서 총 {{ format(infinity.totalInfinityAntimatter, 2, 1) }} 반물질을 생산했습니다.
        </div>
        <div v-if="endgame.isUnlocked" class="c-stats-tab-celestials">
          총 {{ format(totalCelMatter, 2, 1) }} 셀레스티얼 물질을 생산했습니다.
        </div>
        <div v-if="celestialEternity.isUnlocked" class="c-stats-tab-celestials">
          이번 셀레스티얼 영원에서 총
          {{ format(celestialEternity.totalCelestialEternityCelMatter, 2, 1) }} 셀레스티얼 물질을 생산했습니다.
        </div>
        <div v-if="celestialInfinity.isUnlocked" class="c-stats-tab-celestials">
          이번 셀레스티얼 무한에서 총
          {{ format(celestialInfinity.totalCelestialInfinityCelMatter, 2, 1) }} 셀레스티얼 물질을 생산했습니다.
        </div>
        <div v-if="hasSeenDivineDims" class="c-stats-tab-divinity">
          총 {{ format(totalDivineMatter, 2, 1) }} 신성 물질을 생산했습니다.
        </div>
        <div v-if="supernova.isUnlocked" class="c-stats-tab-divinity">
          이번 초신성에서 총 {{ format(supernova.totalSupernovaDivineMatter, 2, 1) }} 신성 물질을 생산했습니다.
        </div>
        <div v-if="condense.isUnlocked" class="c-stats-tab-divinity">
          이번 응축에서 총 {{ format(condense.totalCondenseDivineMatter, 2, 1) }} 신성 물질을 생산했습니다.
        </div>
        <div>실제 시간으로 {{ realTimePlayed }} 동안 플레이했습니다.</div>
        <div v-if="reality.isUnlocked">
          당신의 존재가 {{ reality.totalTimePlayed }} 전에 생성되었습니다. (게임 시간)
        </div>
        <div>
          저장 데이터 생성일: {{ startDate }} ({{ saveAge }} 전)
        </div>
        <br>
        <div>
          총 {{ quantifyHybridSmall("뉴스 메시지", totalNews) }}를 봤습니다.
        </div>
        <div>
          서로 다른 {{ quantifyInt("뉴스 메시지", uniqueNews) }}를 봤습니다.
        </div>
        <div>
          {{ quantifyInt("비밀 도전과제", secretAchievementCount) }}를 해금했습니다.
        </div>
        <div v-if="paperclips">
          {{ quantifyInt("쓸모없는 클립", paperclips) }}을 보유하고 있습니다.
        </div>
        <div v-if="fullGameCompletions">
          <br>
          <b>
            전체 게임을 {{ quantifyInt("회", fullGameCompletions) }} 완료했습니다.
            <br>
            모든 플레이를 합쳐 {{ fullTimePlayed }} 동안 플레이했습니다.
          </b>
        </div>
      </div>
      <div>
        <br>
        <div class="c-matter-scale-container c-stats-tab-general">
          <div
            v-for="(line, i) in matterScale"
            :key="i"
          >
            {{ line }}
          </div>
          <br v-if="matterScale.length < 2">
          <br v-if="matterScale.length < 3">
        </div>
      </div>
      <br>
    </div>
    <div
      v-if="infinity.isUnlocked"
      class="c-stats-tab-subheader c-stats-tab-general"
    >
      <div class="c-stats-tab-title c-stats-tab-infinity">
        무한
      </div>
      <div>
        {{ infinityCountString }}에 도달했습니다<span v-if="eternity.isUnlocked"> (이번 영원)</span>.
      </div>
      <div v-if="infinity.banked.gt(0)">
        {{ formatDecimalAmount(infinity.banked.floor()) }}
        {{ pluralize("저장된 무한", infinity.banked.floor()) }}을 보유하고 있습니다.
      </div>
      <div v-if="infinity.hasBest">
        가장 빠른 무한은 {{ infinity.best.toStringShort() }}입니다.
      </div>
      <div v-else>
        가장 빠른 무한 기록이 없습니다<span v-if="eternity.isUnlocked"> (이번 영원)</span>.
      </div>
      <div>
        이번 무한에서 {{ infinity.this.toStringShort() }} 동안 진행했습니다.
        <span v-if="reality.isUnlocked">
          ({{ infinity.thisReal.toStringShort() }} 현실 시간)
        </span>
      </div>
      <div>
        분당 최고 무한 포인트<span v-if="eternity.count.gt(0)"> (이번 영원)</span>:
        {{ format(infinity.bestRate, 2, 2) }}
      </div>
      <br>
    </div>
    <div
      v-if="eternity.isUnlocked"
      class="c-stats-tab-subheader c-stats-tab-general"
    >
      <div class="c-stats-tab-title c-stats-tab-eternity">
        영원
      </div>
      <div>
        {{ eternityCountString }}에 도달했습니다<span v-if="reality.isUnlocked"> (이번
        <span :class="{ 'c-stats-tab-doomed' : isDoomed }">{{ isDoomed ? "아마겟돈" : "현실" }}</span>)</span>.
      </div>
      <div v-if="infinity.projectedBanked.gt(0)">
        영원 시 {{ formatDecimalAmount(infinity.projectedBanked.floor()) }}
        {{ pluralize("저장된 무한", infinity.projectedBanked.floor()) }}을 얻습니다
        (분당 {{ formatDecimalAmount(infinity.bankRate) }}).
      </div>
      <div v-else-if="infinity.banked.gt(0)">
        영원 시 저장된 무한을 얻지 못합니다.
      </div>
      <div v-if="eternity.hasBest">
        가장 빠른 영원은 {{ eternity.best.toStringShort() }}입니다.
      </div>
      <div v-else>
        가장 빠른 영원 기록이 없습니다<span v-if="reality.isUnlocked"> (이번
        <span :class="{ 'c-stats-tab-doomed' : isDoomed }">{{ isDoomed ? "아마겟돈" : "현실" }}</span>)</span>.
      </div>
      <div>
        이번 영원에서 {{ eternity.this.toStringShort() }} 동안 진행했습니다.
        <span v-if="reality.isUnlocked">
          (실제 시간 {{ eternity.thisReal.toStringShort() }})
        </span>
      </div>
      <div>
        분당 최고 영원 포인트
        <span v-if="reality.isUnlocked">(이번
        <span :class="{ 'c-stats-tab-doomed' : isDoomed }">{{ isDoomed ? "아마겟돈" : "현실" }}</span>)</span>:
        {{ format(eternity.bestRate, 2, 2) }}
      </div>
      <br>
    </div>
    <div
      v-if="reality.isUnlocked"
      class="c-stats-tab-subheader c-stats-tab-general"
    >
      <div :class="realityClassObject()">
        {{ isDoomed ? "파멸한 현실" : "현실" }}
      </div>
      <div>
        {{ realityCountString }}에 도달했습니다<span v-if="endgame.isUnlocked"> (이번 엔드게임)</span>.
      </div>
      <div v-if="reality.hasBest">
        게임 시간 기준 가장 빠른 현실은 {{ reality.best.toStringShort() }}입니다.
        실제 시간 기준 가장 빠른 현실은 {{ reality.bestReal.toStringShort() }}입니다.
      </div>
      <div v-else>
        가장 빠른 현실 기록이 없습니다<span v-if="endgame.isUnlocked"> (이번 엔드게임)</span>.
      </div>
      <div :class="{ 'c-stats-tab-doomed' : isDoomed }">
        이번 {{ isDoomed ? "아마겟돈" : "현실" }}에서 {{ reality.this.toStringShort() }} 동안 진행했습니다.
        (실제 시간 {{ reality.thisReal.toStringShort() }})
      </div>
      <div
        v-if="isDoomed"
        class="c-stats-tab-doomed"
      >
        실제 시간으로 {{ realTimeDoomed.toStringShort() }} 동안 파멸한 상태였습니다.
      </div>
      <div>
        분당 최고 리얼리티 머신<span v-if="endgame.isUnlocked"> (이번 엔드게임)</span>:
        {{ format(reality.bestRate, 2, 2) }}
      </div>
      <div>
        최고 글리프 희귀도<span v-if="endgame.isUnlocked"> (이번 엔드게임)</span>:
        {{ formatRarity(reality.bestRarity) }}</div>
      <br>
    </div>
    <div
      v-if="endgame.isUnlocked"
      class="c-stats-tab-subheader c-stats-tab-general"
    >
      <div class="c-stats-tab-title c-stats-tab-endgame">
        엔드게임
      </div>
      <div>
        {{ endgameCountString }}에 도달했습니다.
      </div>
      <div v-if="endgame.hasBest">
        게임 시간 기준 가장 빠른 엔드게임은 {{ endgame.best.toStringShort() }}입니다.
        실제 시간 기준 가장 빠른 엔드게임은 {{ endgame.bestReal.toStringShort() }}입니다.
      </div>
      <div v-else>
        가장 빠른 엔드게임 기록이 없습니다.
      </div>
      <div>
        이번 엔드게임에서 {{ endgame.this.toStringShort() }} 동안 진행했습니다.
        (실제 시간 {{ endgame.thisReal.toStringShort() }})
      </div>
      <div>
        분당 최고 셀레스티얼 포인트: {{ format(endgame.bestRateCP, 2, 2) }}
      </div>
      <div>
        분당 최고 파멸 입자: {{ format(endgame.bestRateDP, 2, 2) }}
      </div>
      <br>
    </div>
    <div
      v-if="celestialInfinity.isUnlocked"
      class="c-stats-tab-subheader c-stats-tab-general"
    >
      <div class="c-stats-tab-title c-stats-tab-celestial-infinity">
        셀레스티얼 무한
      </div>
      <div>
        {{ celestialInfinityCountString }}에 도달했습니다<span v-if="celestialEternity.isUnlocked"> (이번 셀레스티얼 영원)</span>.
      </div>
      <div v-if="celestialInfinity.hasBest">
        게임 시간 기준 가장 빠른 셀레스티얼 무한은 {{ celestialInfinity.best.toStringShort() }}입니다.
        실제 시간 기준 가장 빠른 셀레스티얼 무한은 {{ celestialInfinity.bestReal.toStringShort() }}입니다.
      </div>
      <div v-else>
        가장 빠른 셀레스티얼 무한 기록이 없습니다<span v-if="celestialEternity.isUnlocked"> (이번 셀레스티얼 영원)</span>.
      </div>
      <div>
        이번 셀레스티얼 무한에서 {{ celestialInfinity.this.toStringShort() }} 동안 진행했습니다.
        (실제 시간 {{ celestialInfinity.thisReal.toStringShort() }})
      </div>
      <div>
        분당 최고 셀레스티얼 무한 포인트<span v-if="celestialEternity.isUnlocked"> (이번 셀레스티얼 영원)</span>:
        {{ format(celestialInfinity.bestRate, 2, 2) }}
      </div>
      <br>
    </div>
    <div
      v-if="celestialEternity.isUnlocked"
      class="c-stats-tab-subheader c-stats-tab-general"
    >
      <div class="c-stats-tab-title c-stats-tab-celestial-eternity">
        셀레스티얼 영원
      </div>
      <div>
        {{ celestialEternityCountString }}에 도달했습니다.
      </div>
      <div v-if="celestialEternity.hasBest">
        게임 시간 기준 가장 빠른 셀레스티얼 영원은 {{ celestialEternity.best.toStringShort() }}입니다.
        실제 시간 기준 가장 빠른 셀레스티얼 영원은 {{ celestialEternity.bestReal.toStringShort() }}입니다.
      </div>
      <div v-else>
        가장 빠른 셀레스티얼 영원 기록이 없습니다.
      </div>
      <div>
        이번 셀레스티얼 영원에서 {{ celestialEternity.this.toStringShort() }} 동안 진행했습니다.
        (실제 시간 {{ celestialEternity.thisReal.toStringShort() }})
      </div>
      <div>
        분당 최고 셀레스티얼 영원 포인트: {{ format(celestialEternity.bestRate, 2, 2) }}
      </div>
      <br>
    </div>
    <div
      v-if="divinity.isUnlocked"
      class="c-stats-tab-subheader c-stats-tab-general"
    >
      <div class="c-stats-tab-title c-stats-tab-divinity">
        신성
      </div>
      <div>
        {{ divinityCountString }}에 도달했습니다.
      </div>
      <br>
    </div>
    <div
      v-if="condense.isUnlocked"
      class="c-stats-tab-subheader c-stats-tab-general"
    >
      <div class="c-stats-tab-title c-stats-tab-condense">
        응축
      </div>
      <div>
        {{ condenseCountString }}에 도달했습니다<span v-if="supernova.isUnlocked"> (이번 초신성)</span>.
      </div>
      <div v-if="condense.hasBest">
        게임 시간 기준 가장 빠른 응축은 {{ condense.best.toStringShort() }}입니다.
        실제 시간 기준 가장 빠른 응축은 {{ condense.bestReal.toStringShort() }}입니다.
      </div>
      <div v-else>
        가장 빠른 응축 기록이 없습니다<span v-if="supernova.isUnlocked"> (이번 초신성)</span>.
      </div>
      <div>
        이번 응축에서 {{ condense.this.toStringShort() }} 동안 진행했습니다.
        (실제 시간 {{ condense.thisReal.toStringShort() }})
      </div>
      <div>
        분당 최고 신성한 별<span v-if="supernova.isUnlocked"> (이번 초신성)</span>:
        {{ format(condense.bestRate, 2, 2) }}
      </div>
      <br>
    </div>
    <div
      v-if="supernova.isUnlocked"
      class="c-stats-tab-subheader c-stats-tab-general"
    >
      <div class="c-stats-tab-title c-stats-tab-supernova">
        초신성
      </div>
      <div>
        {{ supernovaCountString }}에 도달했습니다.
      </div>
      <div v-if="supernova.hasBest">
        게임 시간 기준 가장 빠른 초신성은 {{ supernova.best.toStringShort() }}입니다.
        실제 시간 기준 가장 빠른 초신성은 {{ supernova.bestReal.toStringShort() }}입니다.
      </div>
      <div v-else>
        가장 빠른 초신성 기록이 없습니다.
      </div>
      <div>
        이번 초신성에서 {{ supernova.this.toStringShort() }} 동안 진행했습니다.
        (실제 시간 {{ supernova.thisReal.toStringShort() }})
      </div>
      <div>
        분당 최고 성운: {{ format(supernova.bestRate, 2, 2) }}
      </div>
      <br>
    </div>
  </div>
</template>

<style scoped>
.c-matter-scale-container {
  height: 5rem;
}

.c-stats-tab-general {
  color: var(--color-text);
}

.c-stats-tab-title {
  font-size: 2rem;
  font-weight: bold;
}

.c-stats-tab-subheader {
  height: 15rem;
}

.c-stats-tab-infinity {
  color: var(--color-infinity);
}

.c-stats-tab-eternity {
  color: var(--color-eternity);
}

.c-stats-tab-reality {
  color: var(--color-reality);
}

.c-stats-tab-doomed {
  color: var(--color-pelle--base);
}

.c-stats-tab-endgame {
  color: var(--color-endgame);
}

.c-stats-tab-celestials {
  color: var(--color-celestials);
}

.c-stats-tab-celestial-infinity {
  background: linear-gradient(var(--color-infinity), var(--color-celestials));
  background-clip: text;

  -webkit-text-fill-color: transparent;
}

.c-stats-tab-celestial-eternity {
  background: linear-gradient(var(--color-eternity), var(--color-celestials));
  background-clip: text;

  -webkit-text-fill-color: transparent;
}

.c-stats-tab-divinity {
  color: var(--color-pelle--base);
}

.c-stats-tab-condense {
  background: linear-gradient(red, yellow, cyan);
  background-clip: text;

  -webkit-text-fill-color: transparent;
}

.c-stats-tab-supernova {
  background: linear-gradient(cyan, blue, indigo, purple);
  background-clip: text;

  -webkit-text-fill-color: transparent;
}
</style>
