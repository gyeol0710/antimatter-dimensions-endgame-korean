<script>
import ResetModal from "@/components/modals/prestige/ResetModal";

export default {
  name: "CelestialCrunchModal",
  components: {
    ResetModal
  },
  data() {
    return {
      gainedCelestialInfinities: new Decimal(),
      gainedCelestialInfinityPoints: new Decimal(),
      startingBoosts: new Decimal(0),
      startingCM: 0,
      willStartWithGalaxy: false
    };
  },
  computed: {
    isFirstCelInfinity() {
      return !player.endgame.celDimExpansion.celestialInfinities;
    },
    message() {
      const info = this.isFirstCelInfinity ? this.firstCelInfinityInfo : ``;
      return `셀레스티얼 무한 시 모든 셀레스티얼 차원, 셀레스티얼 차원 가속, 셀레스티얼 은하가 초기화됩니다. ${info}`;
    },
    firstCelInfinityInfo() {
      return `그 대신 셀레스티얼 무한 포인트(CIP)를 하나 얻습니다. 이 포인트로 셀레스티얼 무한 탭에 있는
        여러 업그레이드를 구매할 수 있습니다. 통계 탭에 표시되는 셀레스티얼 무한도 하나 얻습니다.`;
    },
    cipGainInfo() {
      return `${quantify("셀레스티얼 무한", this.gainedCelestialInfinities, 2, 0)} 및
        ${quantify("셀레스티얼 무한 포인트", this.gainedCelestialInfinityPoints, 2, 0)}를 얻습니다.`;
    },
    startingResources() {
      const gainedResources = [];
      if (this.startingCM.gte(0)) gainedResources.push(`${quantify("셀레스티얼 물질", this.startingCM, 2, 1)}`);
      if (this.startingBoosts.gt(0)) gainedResources.push(`${quantify("셀레스티얼 차원 가속", this.startingBoosts)}`);
      if (this.willStartWithGalaxy) gainedResources.push(`${quantify("셀레스티얼 은하", 1)}`);

      return `다음 셀레스티얼 무한을 ${makeEnumeration(gainedResources)}와 함께 시작합니다.`;
    }
  },
  methods: {
    update() {
      this.gainedCelestialInfinities = gainedCelestialInfinities().round();
      this.gainedCelestialInfinityPoints = gainedCelestialInfinityPoints().round();
      this.startingBoosts.copyFrom(CelestialDimBoost.startingDimensionBoosts);
      this.startingCM = Currency.celestialMatter.startingValue;
      this.willStartWithGalaxy = false;
    },
    handleYesClick() {
      celestialCrunchResetRequest();
      EventHub.ui.offAll(this);
    }
  },
};
</script>

<template>
  <ResetModal
    header="셀레스티얼 크런치를 진행하려 합니다"
    :message="message"
    :gained-resources="cipGainInfo"
    :starting-resources="startingResources"
    :confirm-fn="handleYesClick"
    :alternate-condition="isFirstCelInfinity"
    :alternate-text="message"
    :confirm-option="isFirstCelInfinity ? undefined : 'celestialCrunch'"
  />
</template>
