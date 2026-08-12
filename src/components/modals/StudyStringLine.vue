<script>
export default {
  name: "StudyStringLine",
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
      return this.intoEmpty ? "빈 트리에" : "현재 트리에";
    }
  },
  methods: {
    formatTheoremCost(tt, st) {
      const strTT = `${formatWithCommas(tt)} TT`;
      const strST = `${formatWithCommas(st)} ST`;
      return st === 0 ? strTT : `${strTT} + ${strST}`;
    }
  },
};
</script>

<template>
  <div class="l-modal-import-tree__tree-info-line">
    <div v-if="tree.timeTheorems === 0 && tree.spaceTheorems === 0">
      <i>이 문자열을 {{ importDestString }} 가져와도 새 시간 연구를 구매하지 않습니다.</i>
    </div>
    <div v-else>
      {{ importDestString }} 가져오면 다음 시간 연구를 구매합니다.
      <br>
      {{ tree.newStudies }}
      (비용: {{ formatTheoremCost(tree.timeTheorems, tree.spaceTheorems) }})
    </div>
    <br>
  </div>
</template>
