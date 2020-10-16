
<template>
  <div class="world-search" id="word-map" v-if="id">搜索</div>
</template>

<script>
import "echarts-gl";
import region from "../../assets/json/world.json";

export default {
  name: "",
  props: [],
  mounted() {
    this.initChart(this.id);
  },
  data() {
    return {
      id: "worldChart",
    };
  },
  computed: {},
  methods: {
    initChart(id) {
      let chart = this.$echarts.init(document.getElementById("word-map"));
    },
  },
  components: {},
};
</script>

<style lang="less">
</style>
