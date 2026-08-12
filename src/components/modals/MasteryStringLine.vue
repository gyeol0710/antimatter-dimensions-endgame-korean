<script>
export default {
  name: "MasteryStringLine",
  props: {
    tree: {
      type: Object,
      required: true,
    },
    intoEmpty: {
      type: Boolean,
      required: true,
    }
  },
  computed: {
    importDestString() {
      return this.intoEmpty ? "빈 트리에 가져오면" : "현재 트리에 가져오면";
    }
  },
  methods: {
    formatSkillCost(es) {
      const strES = `${formatWithCommas(es)} ES`;
      return strES;
    }
  },
};
</script>

<template>
  <div class="l-modal-import-tree__tree-info-line">
    <div v-if="tree.endgameSkills === 0">
      <i>이 문자열을 {{ importDestString }} 새로운 엔드게임 마스터리를 구매하지 않습니다.</i>
    </div>
    <div v-else>
      {{ importDestString }} 다음을 구매합니다:
      <br>
      {{ tree.newMasteries }}
      (비용: {{ formatSkillCost(tree.endgameMasteries) }})
    </div>
    <br>
  </div>
</template>
