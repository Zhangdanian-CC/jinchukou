<template>
  <div class="container">
    <!-- 头部 -->
    <div class="title-frame">
      <div class="title-left"></div>
      <div class="global-title">国际产能和装备制造</div>
      <div class="right-time"></div>
    </div>
    <!-- 左边 -->
    <div class="left-box">
      <div class="lefttitleone">项目领域分析</div>
      <!-- <div v-for="index in 12" :key="index" :class="'box'+index" style="color:red;float:left;">1</div> -->
      <zhizao-leftone></zhizao-leftone>
      <div class="lefttitletwo">合作方式分析</div>
      <zhizao-lefttwo></zhizao-lefttwo>
    </div>
    <!-- 箭头 -->
    <div class="Union"></div>
    <div class="Union2"></div>
    <!-- 右边 -->
    <div class="right-box">
      <!-- <div class="righttitleone">按项目国别分析</div> -->
      <zhizao-rightone></zhizao-rightone>
      <!-- <div class="righttitletwo">按经营单位分析</div> -->
      <zhizao-righttwo></zhizao-righttwo>
    </div>
  </div>
</template>

<script>
import ZhizaoRightone from "../../components/zhizao/zhizaorightone";
import ZhizaoRighttwo from "../../components/zhizao/zhizaorighttwo";
import ZhizaoLeftone from "../../components/zhizao/zhizaoleftone";
import ZhizaoLefttwo from "../../components/zhizao/zhizaolefttwo";
export default {
  mounted() {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  beforeDestroy() {},
  components: {
    ZhizaoRightone,
    ZhizaoRighttwo,
    ZhizaoLeftone,
    ZhizaoLefttwo,
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
  // 左边
  .left-box {
    width: 30.104vw;
    height: 50.55vw;
    background: url("../../assets/images/jinchukou/背景框-首屏9.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 5vw;
    left: 0.8vw;
    .lefttitleone {
      width: 25.9375vw;
      height: 2.0833vw;
      background: url("../../assets/images/jinchukou/title2备份4.png") no-repeat;
      background-size: 100% 100%;
      margin-top: 1.25vw;
      margin-left: 2.0833vw;
      font-size: 1.094vw;
      font-weight: bold;
      font-family: Noto Sans SC;
      padding-left: 2.1875vw;
      padding-top: 0.3625vw;
    }
    // .box1{
    //   width: 1vw;
    //   height: 1vw;
    //   background-color: yellow;
    //   z-index:3
    // }
    .lefttitletwo {
      width: 25.9375vw;
      height: 2.0833vw;
      background: url("../../assets/images/jinchukou/title2备份4.png") no-repeat;
      background-size: 100% 100%;
      margin-top: 0vw;
      margin-left: 2.0833vw;
      font-size: 1.094vw;
      font-weight: bold;
      font-family: Noto Sans SC;
      padding-left: 2.1875vw;
      padding-top: 0.3625vw;
    }
  }
  // 箭头
  .Union {
    width: 4.25vw;
    height: 1.6vw;
    background: url("../../assets/images/jinchukou/Union.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 17.5vw;
    left: 32.6vw;
  }
  .Union2{
    width: 4.25vw;
    height: 1.6vw;
    background: url("../../assets/images/jinchukou/Union.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 42vw;
    left: 32.6vw;
  }
  // 右边
  .right-box {
    width: 60.729vw;
    height: 50.55vw;
    background: url("../../assets/images/jinchukou/背景框-首屏10.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 5vw;
    left: 38.4vw;
    .righttitleone {
      width: 56.5625vw;
      height: 2.0833vw;
      background: url("../../assets/images/jinchukou/title2备份5.png") no-repeat;
      background-size: 100% 100%;
      margin-top: 1.25vw;
      margin-left: 2.0833vw;
      font-size: 1.094vw;
      font-weight: bold;
      font-family: Noto Sans SC;
      padding-left: 2.1875vw;
      padding-top: 0.3625vw;
    }
    .righttitletwo {
      width: 56.5625vw;
      height: 2.0833vw;
      background: url("../../assets/images/jinchukou/title2备份5.png") no-repeat;
      background-size: 100% 100%;
      margin-top: 2.2vw;
      margin-left: 2.0833vw;
      font-size: 1.094vw;
      font-weight: bold;
      font-family: Noto Sans SC;
      padding-left: 2.1875vw;
      padding-top: 0.3625vw;
    }
  }
}
</style>