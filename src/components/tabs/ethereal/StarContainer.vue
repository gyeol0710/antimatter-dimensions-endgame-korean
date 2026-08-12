<script>
import PrimaryButton from "@/components/PrimaryButton";

export default {
  name: "StarContainer",
  components: {
    PrimaryButton
  },
  props: {
    getStar: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      isUnlocked: false,
      isHovering: false,
      amount: new Decimal(0),
      reward: new Decimal(0),
      pending: new Decimal(0)
    };
  },
  computed: {
    star() {
      return this.getStar();
    },
    config() {
      return this.star.config;
    },
    description() {
      return this.config.description(this.reward);
    },
    name() {
      const names = {
        red: "붉은",
        orange: "주황",
        yellow: "노란",
        green: "초록",
        blue: "파란",
        purple: "보라",
        white: "흰",
        black: "검은",
        gray: "회색"
      };
      return names[this.config.name] ?? this.config.name.capitalize();
    },
    canReset() {
      return Currency.etherealPower.value.gte(this.config.resetReq);
    },
    resetText() {
      if (!this.canReset) return `에테리얼 파워 ${format(this.config.resetReq, 2, 2)} 도달 필요`;
      return `에테리얼 파워를 응축하여 ${format(this.pending, 2, 2)}개의 ${this.name} 별 획득`;
    },
    rewardClassObject() {
      return {
        "o-star__container": true,
        [`o-star__container--${this.config.name}`]: true,
      };
    },
    showPending() {
      return this.isHovering && ui.view.shiftDown;
    },
    totalPending() {
      return this.amount.add(this.pending);
    },
    displayedAmount() {
      return this.showPending && this.canReset ? this.totalPending : this.amount;
    }
  },
  methods: {
    update() {
      this.isUnlocked = this.star.isUnlocked;
      this.amount.copyFrom(player.endgame.ethereal.stars[this.config.name]);
      this.reward.copyFrom(this.star.rewardForDisplay(this.displayedAmount));
      this.pending.copyFrom(Decimal.pow(Currency.etherealPower.value.div(
        this.config.resetReq), 0.5 - this.star.id / 20).times(Ethereal.allStarBoost));
    },
    starReset() {
      resetForStar(this.star.id);
    }
  }
};
</script>

<template>
  <div
    v-if="star.isUnlocked"
    class="l-star-container"
  >
    <button
      :class="rewardClassObject"
      @mouseover="isHovering = true"
      @mouseleave="isHovering = false"
    >
      <span>
        보유량: <span v-if="showPending && canReset">▲</span>{{ format(displayedAmount, 2, 2) }} {{ name }} 별
      </span>
      <br>
      <span>
        효과: <span v-if="showPending && canReset">▲</span>{{ description }}
      </span>
      <br>
      <br>
      <PrimaryButton
        :enabled="canReset"
        class="o-reset-btn"
        @click="starReset"
      >
        {{ resetText }}
      </PrimaryButton>
    </button>
  </div>
</template>

<style scoped>
.o-reset-btn {
  width: 32rem;
  font-size: 1rem;
}
</style>
