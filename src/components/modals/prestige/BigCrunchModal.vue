<script>
import ResetModal from "@/components/modals/prestige/ResetModal";

export default {
  name: "BigCrunchModal",
  components: {
    ResetModal
  },
  data() {
    return {
      gainedInfinities: new Decimal(),
      gainedInfinityPoints: new Decimal(),
      startingBoosts: new Decimal(0),
      startingAM: 10,
      willStartWithGalaxy: false
    };
  },
  computed: {
    isFirstInfinity() {
      return !PlayerProgress.infinityUnlocked();
    },
    message() {
      const info = this.isFirstInfinity ? this.firstInfinityInfo : ``;
      return `무한에 도달한다면 모든 반물질, 반물질 차원, 차원 가속, 반물질 은하가 초기화됩니다. ${info}`;
    },
    firstInfinityInfo() {
      return `그 대신 무한 포인트(IP)를 하나 얻습니다. 무한 탭에서 여러 업그레이드를 구매할 수 있습니다.
        통계 탭에 표시되는 무한도 하나 얻습니다.`;
    },
    ipGainInfo() {
      return `${quantify("무한", this.gainedInfinities, 2, 0)} 및
        ${quantify("무한 포인트", this.gainedInfinityPoints, 2, 0)}를 얻습니다.`;
    },
    startingResources() {
      const gainedResources = [];
      if (this.startingAM.gte(10)) gainedResources.push(`${quantify("반물질", this.startingAM, 2, 1)}`);
      if (this.startingBoosts.gt(0)) gainedResources.push(`${quantify("차원 가속", this.startingBoosts)}`);
      if (this.willStartWithGalaxy) gainedResources.push(`${quantify("반물질 은하", 1)}`);

      return `당신은 다음 무한을 ${makeEnumeration(gainedResources)}를 보유한 상태로 시작하게 됩니다.`;
    }
  },
  methods: {
    update() {
      this.gainedInfinities = gainedInfinities().round();
      this.gainedInfinityPoints = gainedInfinityPoints().round();
      this.startingBoosts.copyFrom(DimBoost.startingDimensionBoosts);
      this.startingAM = Currency.antimatter.startingValue;
      this.willStartWithGalaxy = InfinityUpgrade.skipResetGalaxy.isBought;
    },
    handleYesClick() {
      bigCrunchResetRequest();
      EventHub.ui.offAll(this);
      if (this.isFirstInfinity) {
        setTimeout(() => Modal.message.show(`수동으로 무한에 도달할 때마다 이 애니메이션이 재생됩니다.
          비활성화하려면 설정 탭의 관련 설정을 사용하세요. 게임의 모든 시각 애니메이션 효과는
          처음 본 뒤 같은 방법으로 비활성화할 수 있습니다.`, {}, 3), 2000);
      }
    }
  },
};
</script>

<template>
  <ResetModal
    header="무한에 도달하려 합니다"
    :message="message"
    :gained-resources="ipGainInfo"
    :starting-resources="startingResources"
    :confirm-fn="handleYesClick"
    :alternate-condition="isFirstInfinity"
    :alternate-text="message"
    :confirm-option="isFirstInfinity ? undefined : 'bigCrunch'"
  />
</template>
