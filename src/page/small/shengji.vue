<template>
  <div class="container">
    <!-- 头部 -->
    <div class="title-frame">
      <div class="title-left"></div>
      <div class="global-title">制造业转型升级</div>
      <div class="right-time"></div>
    </div>

    <map-chart class="map-charts" />
    <left-indicator class="left-indicator" />
    <div class="right">
      <!-- <div class="yunying">选择经营单位</div> -->
      <div class="title1">贷款余额TOP10</div>
      <div class="title2">签约贷款金额TOP10</div>
      <div class="title3">累计发放金额TOP10</div>
      <right-indicator
        class="right-indicator"
        :ids="item.id"
        :data="item.data"
        v-for="(item,index) in dataList"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import MapChart from "../../components/shengji/mapChart.vue";
import LeftIndicator from "../../components/shengji/leftIndicator.vue";
import RightIndicator from "../../components/shengji/rightIndicator.vue";

export default {
  mounted() {},
  data() {
    return {
      dataList: [
        {
          id: "diyi",
          data: [78, 67, 64, 58, 48, 43, 29, 28, 24, 18],
          title: '贷款余额TOP10',
        },
        {
          id: "dier",
          data: [70, 67, 58, 52, 45, 33, 29, 22,18, 10],
          title: '签约贷款金额TOP10',
        },
        {
          id: "disan",
          data: [78, 70, 64, 58, 50, 43, 39, 28, 24, 18],
          title: '累计发放金额TOP10',
        },
      ],
    };
  },
  computed: {},
  methods: {},
  beforeDestroy() {},
  components: {
    MapChart,
    LeftIndicator,
    RightIndicator,
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 100vw;
  height: 100vh;
  position: relative;
  background: url("../../assets/images/jinchukou/bg@1x.png") no-repeat;
  background-size: 100% 100%;
  // font-size: 28px;
  color: #fff;
  overflow: hidden;
  font-family: Microsoft YaHei;

  // 标题样式
  .title-frame {
    width: 100vw;
    height: 3.937vw;
    line-height: 3.937vw;
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

  .map-charts {
    position: absolute;
    left: -2.86vw;
    top: 7.5vw;
    width: 59.688vw;
    height: 44.79vw;

    // position: absolute;
    // width: 1146.67px;
    // height: 860px;
    // left: 106px;
    // top: 144px;
  }
  .left-indicator {
    height: 100%;
    width: 100%;
    padding: 1.43vw 1.423vw;
  }
  .right {
    height: 50.863vw;
    width: 30.1vw;
    position: absolute;
    top: 4.6875vw;
    right: 0.833vw;
    padding-top: 1vw;
    background: url("../../assets/images/jinchukou/背景框-首屏1.png") no-repeat;
    background-size: 100% 100%;
    // .yunying {
    //   margin-bottom: 1vw;
    //   margin-left: 1vw;
    //   font-size: 0.833vw;
    //   color: #b3bbc6;
    // }
    .title1,
    .title2,
    .title3 {
      width: 90%;
      margin-left: 1vw;
      padding-left: 1vw;
      top: 4%;
      font-size: 0.9375vw;
      letter-spacing: 1px;
      font-weight: bold;
      background: url("../../assets/images/jinchukou/矩形.png") no-repeat;
      background-size: 100% 100%;
      position: absolute;
    }
    .title2 {
      top: 36.3%;
    }
    .title3 {
      top: 67.6%;
    }
  }
}
</style>