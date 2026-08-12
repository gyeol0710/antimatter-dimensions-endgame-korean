<script>
import ResetModal from "@/components/modals/prestige/ResetModal";

export default {
  name: "CelestialEternityModal",
  components: {
    ResetModal
  },
  data() {
    return {
      startingCIP: new Decimal(),
      gainedCelestialEternityPoints: new Decimal(),
      gainedCelestialEternities: new Decimal()
    };
  },
  computed: {
    message() {
      return PlayerProgress.celestialEternityUnlocked()
        ? `셀레스티얼 영원은 지금까지의 셀레스티얼 차원 관련 요소를 모두 초기화합니다.`
        : `셀레스티얼 영원은 지금까지의 셀레스티얼 차원 관련 요소를 모두 초기화합니다.
          셀레스티얼 영원 포인트도 하나 얻고 여러 업그레이드를 해금합니다.`;
    },
    gainedCEPOnCelestialEternity() {
      return `셀레스티얼 영원 시 ${quantify("셀레스티얼 영원", this.gainedCelestialEternities, 2)} 및
      ${quantify("셀레스티얼 영원 포인트", this.gainedCelestialEternityPoints, 2)}를 얻습니다.`;
    },
    startWithCIP() {
      return this.startingCIP.gt(0)
        ? `다음 셀레스티얼 영원을 ${quantify("셀레스티얼 무한 포인트", this.startingCIP, 2)}와 함께 시작합니다.`
        : ``;
    },
  },
  methods: {
    update() {
      this.startingCIP = Currency.celestialInfinityPoints.startingValue;
      this.gainedCelestialEternityPoints = gainedCelestialEternityPoints();
      this.gainedCelestialEternities = gainedCelestialEternities();
    },
    handleYesClick() {
      celestialEternity();
      EventHub.ui.offAll(this);
    }
  },
};
</script>

<template>
  <ResetModal
    :header="'셀레스티얼 영원을 진행하려 합니다'"
    :message="message"
    :gained-resources="gainedCEPOnCelestialEternity"
    :starting-resources="startWithCIP"
    :confirm-fn="handleYesClick"
    confirm-option="celestialEternity"
  />
</template>
