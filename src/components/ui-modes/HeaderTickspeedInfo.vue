<script>
import GameSpeedDisplay from "@/components/GameSpeedDisplay";

export default {
  name: "HeaderTickspeedInfo",
  components: {
    GameSpeedDisplay
  },
  data() {
    return {
      mult: new Decimal(0),
      tickspeed: new Decimal(0),
      galaxyCount: new Decimal(0),
      purchasedTickspeed: new Decimal(0),
      freeTickspeed: new Decimal(0),
    };
  },
  computed: {
    tickspeedDisplay() {
      return `총 틱스피드: ${format(this.tickspeed, 2, 3)} / 초`;
    },
    perUpgrade() {
      if (InfinityChallenge(3).isRunning) return `틱스피드 업그레이드가 모든 반물질 차원에
        ${formatX(this.galaxyCount.times(0.005).add(1.05), 3, 3)} 배율을 줍니다`;
      return `틱스피드 업그레이드당 반물질 차원에 ${formatX(this.mult.reciprocal(), 2, 3)} 배율을 줍니다.`;
    },
  },
  methods: {
    update() {
      this.mult.copyFrom(Tickspeed.multiplier);
      this.tickspeed.copyFrom(Tickspeed.perSecond);
      this.galaxyCount.copyFrom(player.galaxies);
      this.purchasedTickspeed.copyFrom(player.totalTickBought);
      this.freeTickspeed.copyFrom(FreeTickspeed.amount);
    },
  },
};
</script>

<template>
  <div>
    <br>
    {{ perUpgrade }}
    <br>
    {{ tickspeedDisplay }}
    <br>
    <GameSpeedDisplay />
  </div>
</template>

<style scoped>

</style>
