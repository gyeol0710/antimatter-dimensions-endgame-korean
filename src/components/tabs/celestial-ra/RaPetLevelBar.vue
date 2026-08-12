<script>
export default {
  name: "RaPetLevelBar",
  props: {
    petConfig: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isUnlocked: false,
      level: 0,
      memories: new Decimal(0),
      requiredMemories: new Decimal(0),
      nextLevelEstimate: "",
    };
  },
  computed: {
    pet() {
      return this.petConfig.pet;
    },
    displayName() {
      return {
        Teresa: "테레사",
        Effarig: "에파리그",
        Enslaved: "이름없는 자들",
        V: "V",
      }[this.pet.name] ?? this.pet.name;
    },
    shiftDown() {
      return ui.view.shiftDown;
    },
    unlocks() {
      return this.pet.unlocks;
    },
    importantLevels() {
      return this.unlocks.map(u => u.level);
    },
    barStyle() {
      return {
        width: `${100 * Decimal.min(1, this.memories.div(this.requiredMemories)).toNumber()}%`,
        background: this.pet.color
      };
    },
    petStyle() {
      return {
        "background-color": this.pet.color
      };
    },
    prevGoal() {
      const currentUpgrades = this.importantLevels.filter(goal => goal <= this.level);
      return Math.clampMax(currentUpgrades.max(), 15);
    },
    nextGoal() {
      const missingUpgrades = this.importantLevels.filter(goal => goal > this.level);
      return missingUpgrades.length === 0 ? 25 : missingUpgrades.min();
    },
    currentLevelGoal() {
      return this.level + 1;
    },
    classObject() {
      const available = this.memories.gte(this.requiredMemories);
      const pet = this.pet;
      return {
        "c-ra-level-up-btn": true,
        "c-ra-pet-btn--available": available,
        [`c-ra-pet-btn--${pet.id}`]: available
      };
    },
    nextUnlock() {
      const unlock = this.pet.unlocks.find(unl => unl.level === this.level + 1);
      return unlock ?? false;
    },
    showNextScalingUpgrade() {
      switch (this.pet.name) {
        case "Teresa":
          return Math.min(12, Math.floor(this.level / 2)) !== Math.min(12, Math.floor((this.level + 1) / 2));
        case "Effarig":
          return AlchemyResources.all.filter(res => res.unlockedAt === this.level + 1).length > 0;
        case "Enslaved":
          return true;
        case "V":
          return Math.min(Math.floor(this.level / 6), 4) !== Math.min(Math.floor((this.level + 1) / 6), 4);
        default:
          return false;
      }
    },
    nextScalingUpgrade() {
      const effarigAlchemyResource = AlchemyResources.all.filter(res => res.unlockedAt === this.level + 1)[0];
      switch (this.pet.name) {
        case "Teresa":
          return "무한 업그레이드를 하나 더 충전할 수 있습니다.";
        case "Effarig":
          return `글리프 연금술에서 ${effarigAlchemyResource.name} 자원을 해금합니다.
          ${effarigAlchemyResource.description}`;
        case "Enslaved":
          return `저장된 게임 시간에 ${formatX(20)}, 실제 시간을 한 시간 더 저장할 수 있습니다.`;
        case "V":
          return "삼원 연구를 하나 더 구매할 수 있습니다.";
        default:
          return "false";
      }
    },
    reward() {
      return (typeof this.nextUnlock.reward === "function") ? this.nextUnlock.reward() : this.nextUnlock.reward;
    }
  },
  methods: {
    update() {
      const pet = this.pet;
      this.isUnlocked = pet.isUnlocked;
      if (!this.isUnlocked) return;
      this.memories.copyFrom(pet.memories);
      this.level = pet.level;
      this.requiredMemories.copyFrom(pet.requiredMemories);
      this.nextLevelEstimate = Ra.timeToGoalString(this.pet, this.requiredMemories.sub(this.memories));
    },
    isImportant(level) {
      return this.importantLevels.includes(level);
    },
  },
};
</script>

<template>
  <div class="l-ra-bar-container">
    <div class="c-ra-exp-bar">
      <div
        class="c-ra-exp-bar-inner"
        :style="barStyle"
      />
    </div>
    <button
      :class="classObject"
      @click="pet.levelUp()"
    >
      <span class="fas fa-arrow-up" />
      <div class="c-ra-pet-upgrade__tooltip">
        <div class="c-ra-pet-upgrade__tooltip__name">
          {{ displayName }} 레벨을 {{ formatInt(level + 1) }}로 올리기
        </div>
        <div class="c-ra-pet-upgrade__tooltip__description">
          {{ reward }}
          <div
            v-if="showNextScalingUpgrade"
            :style="{ 'margin-top': nextUnlock.reward ? '0.6rem' : '0' }"
          >
            {{ nextScalingUpgrade }}
          </div>
        </div>
        <div class="c-ra-pet-upgrade__tooltip__footer">
          비용: 기억 {{ quantify("개", requiredMemories, 2, 2) }}
          <span v-if="memories.lte(requiredMemories)">{{ nextLevelEstimate }}</span>
        </div>
      </div>
    </button>
  </div>
</template>

<style scoped>
.c-ra-pet-upgrade__tooltip {
  font-family: Typewriter, serif;
  line-height: 1.5;
}
</style>
