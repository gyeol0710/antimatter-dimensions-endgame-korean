<script>
import AutobuyerToggles from "./AutobuyerToggles";
import BigCrunchAutobuyerBox from "./BigCrunchAutobuyerBox";
import BulkSingularityAutobuyerBox from "./BulkSingularityAutobuyerBox";
import CelestialCrunchAutobuyerBox from "./CelestialCrunchAutobuyerBox";
import CelestialDimensionBoostAutobuyerBox from "./CelestialDimensionBoostAutobuyerBox";
import CelestialEternityAutobuyerBox from "./CelestialEternityAutobuyerBox";
import CelestialGalaxyAutobuyerBox from "./CelestialGalaxyAutobuyerBox";
import CelestialTickspeedAutobuyerBox from "./CelestialTickspeedAutobuyerBox";
import DimensionAutobuyerBox from "./DimensionAutobuyerBox";
import DimensionBoostAutobuyerBox from "./DimensionBoostAutobuyerBox";
import EndgameAutobuyerBox from "./EndgameAutobuyerBox";
import EternityAutobuyerBox from "./EternityAutobuyerBox";
import GalaxyAutobuyerBox from "./GalaxyAutobuyerBox";
import OpenModalHotkeysButton from "@/components/OpenModalHotkeysButton";
import RealityAutobuyerBox from "./RealityAutobuyerBox";
import SimpleAutobuyersMultiBox from "./SimpleAutobuyersMultiBox";
import TickspeedAutobuyerBox from "./TickspeedAutobuyerBox";

export default {
  name: "AutobuyersTab",
  components: {
    AutobuyerToggles,
    OpenModalHotkeysButton,
    EndgameAutobuyerBox,
    RealityAutobuyerBox,
    CelestialEternityAutobuyerBox,
    EternityAutobuyerBox,
    CelestialCrunchAutobuyerBox,
    BigCrunchAutobuyerBox,
    CelestialGalaxyAutobuyerBox,
    GalaxyAutobuyerBox,
    CelestialDimensionBoostAutobuyerBox,
    DimensionBoostAutobuyerBox,
    BulkSingularityAutobuyerBox,
    CelestialTickspeedAutobuyerBox,
    TickspeedAutobuyerBox,
    DimensionAutobuyerBox,
    SimpleAutobuyersMultiBox
  },
  data() {
    return {
      hasInfinity: false,
      hasContinuum: false,
      displayADAutobuyersIndividually: false,
      hasInstant: false,
    };
  },
  computed: {
    // It only makes sense to show this if the player has seen gamespeed-altering effects, but we should keep it there
    // permanently as soon as they have
    hasSeenGamespeedAlteringEffects() {
      return PlayerProgress.seenAlteredSpeed();
    },
    gameTickLength() {
      return `${formatInt(player.options.updateRate)} ms`;
    }
  },
  methods: {
    update() {
      this.hasInfinity = PlayerProgress.infinityUnlocked();
      this.hasContinuum = Laitela.continuumActive;
      this.checkADAutoStatus();
    },
    checkADAutoStatus() {
      const ad = Autobuyer.antimatterDimension;
      // Since you don't need to buy autobuyers in Doomed and unbought ones are hidden, we can check if only the
      // autobuyers you can see (ie, have unlocked) have been maxed.
      if (Pelle.isDoomed) {
        this.displayADAutobuyersIndividually = !ad.zeroIndexed.filter(x => x.isUnlocked)
          .every(x => x.hasUnlimitedBulk && x.hasMaxedInterval);
        return;
      }
      this.hasInstant = ad.hasInstant;
      this.displayADAutobuyersIndividually = !ad.collapseDisplay;
    },
  }
};
</script>

<template>
  <div class="l-autobuyers-tab">
    <AutobuyerToggles />
    <OpenModalHotkeysButton />
    <div v-if="hasSeenGamespeedAlteringEffects">
      자동 구매기의 간격과 시간 기반 설정은 항상 <b>실제 시간</b>을 기준으로 하므로
      <br>
      게임의 실행 속도를 변경할 수 있는 모든 요인에 영향을 받지 않습니다.
      <br>
      <br>
    </div>
    <div v-if="!hasInfinity">
      무한에 도달하면 자동 구매기 업그레이드 도전이 해금됩니다.
    </div>
    <b>대량 구매 개수가 표시되지 않은 자동구매기는 기본적으로 무제한으로 구매합니다.</b>
    <b>
      반물질 차원 자동 구매기는 간격이 {{ formatInt(100) }} ms 미만이면 대량 구매량을 업그레이드할 수 있습니다.
    </b>
    <b v-if="hasInstant">간격이 "즉시"인 자동 구매기는 매 게임 틱마다 작동합니다({{ gameTickLength }}).</b>
    <EndgameAutobuyerBox class="c-endgame-pos" />
    <RealityAutobuyerBox class="c-reality-pos" />
    <CelestialEternityAutobuyerBox class="c-celestial-eternity-pos" />
    <EternityAutobuyerBox class="c-eternity-pos" />
    <CelestialCrunchAutobuyerBox class="c-celestial-infinity-pos" />
    <BigCrunchAutobuyerBox class="c-infinity-pos" />
    <CelestialGalaxyAutobuyerBox />
    <GalaxyAutobuyerBox />
    <CelestialDimensionBoostAutobuyerBox />
    <DimensionBoostAutobuyerBox />
    <BulkSingularityAutobuyerBox />
    <CelestialTickspeedAutobuyerBox />
    <TickspeedAutobuyerBox v-if="!hasContinuum" />
    <template v-if="displayADAutobuyersIndividually">
      <DimensionAutobuyerBox
        v-for="tier in 8"
        :key="tier"
        :tier="tier"
      />
    </template>
    <SimpleAutobuyersMultiBox />
  </div>
</template>

<style scoped>
/* This is necessary for the ExpandingControlBox within these components to render in the right stacking order
when they're open. It looks slightly hacky but actually can't be done any other way; each AutobuyerBox creates
its own stacking context, which means that all z-indices specified within are essentially scoped and the
AutobuyerBox components will always render in page order regardless of internal z-indices without these. */
.c-endgame-pos {
  z-index: 6;
}

.c-reality-pos {
  z-index: 5;
}

.c-celestial-eternity-pos {
  z-index: 4;
}

.c-eternity-pos {
  z-index: 3;
}

.c-celestial-infinity-pos {
  z-index: 2;
}

.c-infinity-pos {
  z-index: 1;
}
</style>
