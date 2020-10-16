<template>
  <div class="container">
    <!-- 头部 -->
    <div class="title-frame">
      <div class="title-left"></div>
      <div class="global-title">中国进出口银行</div>
      <div class="right-time"></div>
    </div>
    <world-chart />
    <left-indicator class="left-indicator" />
  </div>
</template>

<script>
import WorldChart from "@/components/world/worldChart.vue";
import LeftIndicator from "@/components/world/leftIndicator.vue";

export default {
  mounted() {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  beforeDestroy() {},
  components: {
    WorldChart,
    LeftIndicator
  },
 
};
</script>

<style lang="less" scoped>
.container {
  width: 100vw;
  height: 100vh;
  background: url("../../assets/images/jinchukou/bg@2x.png") no-repeat;
  background-size: 100% 100%;
  font-size: 22px;
  color: #fff;
  // overflow: hidden;
  font-family: Microsoft YaHei;
  position: relative;

  // 标题样式
  .title-frame {
    width: 100%;
    height: 7%;
    background: url("../../assets/images/home/header.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 1%;
    .title-left {
      width: 33%;
    }
    .global-title {
      text-align: center;
      width: 33%;
      // padding-top: 24px;
      font-size: 1.85vw;
      letter-spacing: 3px;
      font-weight: bold;
      font-family: FZZhengHeiS-B-GB;
    }
    .right-time {
      width: 33%;
      text-align: right;
    }
  }

  .left-indicator {
    position: fixed;
    left: 1.5625vw;
    top: 67.5625vh;
    width: 17.031vw;
  }
}
</style>