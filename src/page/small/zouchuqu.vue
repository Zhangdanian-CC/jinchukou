<template>
  <div class="container">
    <!-- 头部 -->
    <div class="title-frame">
      <div class="title-left"></div>
      <div class="global-title">走出去</div>
      <div class="right-time"></div>
    </div>
    <!-- 左边 -->
    <div class="leftbox">
      <div class="lefttitle">项目国别分析</div>
      <div class="left-box">
        <div class="left-box">
          <div class="lefttitle1">贷款余额</div>
          <zouchuqu-leftone></zouchuqu-leftone>
          <div class="lefttitle2">签约余额</div>
          <zouchuqu-lefttwo></zouchuqu-lefttwo>

          <div class="lefttitle3">累计发放</div>
          <zouchuqu-leftthree></zouchuqu-leftthree>
        </div>
      </div>
    </div>

    <!-- 中间 -->
    <div class="centerbox">
      <zouchuqu-centerone></zouchuqu-centerone>
      <div class="centertitle2">合计</div>
      <div class="centertitle3">
        <div class="box1">
          <div class="daikuan">贷款余额</div>
          <div class="yuebox">
            <div class="yue">1340.42</div>
            <div class="yi1">亿</div>
          </div>
        </div>
        <div class="box2">
          <div class="sanqianbox">
            <div class="sanqian">3000</div>
            <div class="yi2">亿</div>
          </div>
          <div class="binianchubox">
            <div class="binianchu">比年初</div>
            <i class="shangsheng"></i>
          </div>
        </div>
      </div>
      <zouchuqu-lineone></zouchuqu-lineone>
    </div>
    <!-- 右边 -->
    <div class="rightbox">
      <div class="righttitle">经营单位分析</div>
      <div class="right-box">
        <div class="righttitle1">贷款余额</div>
        <zouchuqu-rightone></zouchuqu-rightone>
        <div class="righttitle2">签约余额</div>
        <zouchuqu-righttwo></zouchuqu-righttwo>

        <div class="righttitle3">累计发放</div>
        <zouchuqu-rightthree></zouchuqu-rightthree>
      </div>
    </div>
  </div>
</template>
<script>
import ZouchuquLeftone from "../../components/zouchuqu/zouchuquleftone";
import ZouchuquLefttwo from "../../components/zouchuqu/zouchuqulefttwo";
import ZouchuquLeftthree from "../../components/zouchuqu/zouchuquleftthree";
import ZouchuquCenterone from "../../components/zouchuqu/zouchuqucenterone";
import ZouchuquLineone from "../../components/zouchuqu/zouchuqulineone";
import ZouchuquRightone from "../../components/zouchuqu/zouchuqurightone";
import ZouchuquRighttwo from "../../components/zouchuqu/zouchuqurighttwo";
import ZouchuquRightthree from "../../components/zouchuqu/zouchuqurightthree";

export default {
  mounted() {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  beforeDestroy() {},
  components: {
    ZouchuquLeftone,
    ZouchuquLefttwo,
    ZouchuquLeftthree,
    ZouchuquCenterone,
    ZouchuquLineone,
    ZouchuquRightone,
    ZouchuquRighttwo,
    ZouchuquRightthree,
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
  // 左边样式
  .leftbox {
    width: 28.542vw;
    height: 50.417vw;
    position: absolute;
    top: 5vw;
    left: 0.8vw;
    .lefttitle {
      width: 28.542vw;
      height: 2.0833vw;
      background: url("../../assets/images/jinchukou/title2备份6.png") no-repeat;
      background-size: 100% 100%;
      font-size: 1.094vw;
      font-weight: bold;
      font-family: Noto Sans SC;
      padding-left: 2.1875vw;
      padding-top: 0.3625vw;
    }
    .left-box {
      width: 28.542vw;
      height: 48.0432vw;
      margin-top: 0.3125vw;
      background: url("../../assets/images/jinchukou/背景框-首屏11.png")
        no-repeat;
      background-size: 100% 100%;
      .lefttitle1 {
        width: 26.354vw;
        height: 1.5625vw;
        position: absolute;
        margin-top: 0.677vw;
        margin-left: 1.25vw;
        background: url("../../assets/images/jinchukou/矩形6.png") no-repeat;
        background-size: 100% 100%;
        font-size: 0.9375vw;
        font-weight: bold;
        padding-left: 0.833vw;
        padding-top: 0.1vw;
      }
      .lefttitle2 {
        width: 26.354vw;
        height: 1.5625vw;
        position: absolute;
        margin-top: 0.677vw;
        margin-left: 1.25vw;
        background: url("../../assets/images/jinchukou/矩形6.png") no-repeat;
        background-size: 100% 100%;
        font-size: 0.9375vw;
        font-weight: bold;
        padding-left: 0.833vw;
        padding-top: 0.1vw;
      }
      .lefttitle3 {
        width: 26.354vw;
        height: 1.5625vw;
        position: absolute;
        margin-top: 0.677vw;
        margin-left: 1.25vw;
        background: url("../../assets/images/jinchukou/矩形6.png") no-repeat;
        background-size: 100% 100%;
        font-size: 0.9375vw;
        font-weight: bold;
        padding-left: 0.833vw;
        padding-top: 0.1vw;
      }
    }
  }
  // 中间样式
  .centerbox {
    width: 38.125vw;
    height: 50.417vw;
    position: absolute;
    top: 5vw;
    left: 30.875vw;
    background: url("../../assets/images/jinchukou/矩形4.png") no-repeat;
    background-size: 100% 100%;

    .centertitle2 {
      width: 35.625vw;
      height: 1.5625vw;
      background: url("../../assets/images/jinchukou/矩形5.png") no-repeat;
      background-size: 100% 100%;
      font-size: 0.9375vw;
      font-weight: bold;
      font-family: Noto Sans SC;
      position: absolute;
      margin-left: 1.25vw;
      // margin-top: 0.448vw;
      padding-left: 0.5vw;
    }
    .centertitle3 {
      width: 34.896vw;
      height: 5.365vw;
      background: url("../../assets/images/jinchukou/Frame 1704.png") no-repeat;
      background-size: 100% 100%;
      margin-left: 1.25vw;
      margin-top: 3vw;
      .box1 {
        display: inline-block;
        width: 11.1458vw;
        height: 5.365vw;
        margin-left: 5.684vw;
        // margin-top: 0.729vw;
        .daikuan {
          font-size: 1.0417vw;
          font-weight: bold;
          color: #b3c3d5;
          position: absolute;
          margin-top: 0.729vw;
        }
        .yuebox {
          .yue {
            display: inline-block;
            font-size: 1.875vw;
            font-weight: bold;
            margin-top: 2.4vw;
          }
          .yi1 {
            display: inline-block;
            font-size: 0.833vw;
            margin-left: 0.833vw;
          }
        }
      }
      .box2 {
        display: inline-block;
        width: 11.1458vw;
        height: 5.365vw;
        position: absolute;
        margin-left: 1vw;
        .sanqianbox {
          display: inline-block;
          .sanqian {
            display: inline-block;
            font-weight: bold;
            font-size: 1.25vw;
            color: #ff3f2b;
            position: absolute;
            left: 7.5vw;
            top: 2vw;
          }
          .yi2 {
            display: inline-block;
            font-size: 0.833vw;
            color: #fff;
            position: absolute;
            top: 2.4vw;
            left: 10.6vw;
          }
        }
        .binianchubox {
          .binianchu {
            display: inline-block;
            font-size: 1.094vw;
            margin-top: 0.7vw;
            margin-left: 1.5vw;
            font-weight: bold;
            
          }
          .shangsheng {
            display: inline-block;
            position: absolute;
            width: 1.6vw;
            height: 1.7vw;
            background: url("../../assets/images/jinchukou/上升.png") no-repeat;
            background-size: 100% 100%;
            top: 2vw;
          }
        }
      }
    }
  }
  // 右边样式
  .rightbox {
    width: 28.542vw;
    height: 50.417vw;
    position: absolute;
    top: 5vw;
    left: 70.525vw;
    .righttitle {
      width: 28.542vw;
      height: 2.0833vw;
      background: url("../../assets/images/jinchukou/title2备份8.png") no-repeat;
      background-size: 100% 100%;
      font-size: 1.094vw;
      font-weight: bold;
      font-family: Noto Sans SC;
      padding-left: 2.1875vw;
      padding-top: 0.3625vw;
    }
    .right-box {
      width: 28.542vw;
      height: 48.0432vw;
      margin-top: 0.3125vw;
      background: url("../../assets/images/jinchukou/背景框-首屏11.png")
        no-repeat;
      background-size: 100% 100%;
      .righttitle1 {
        width: 26.354vw;
        height: 1.5625vw;
        position: absolute;
        margin-top: 0.677vw;
        margin-left: 1.25vw;
        background: url("../../assets/images/jinchukou/矩形6.png") no-repeat;
        background-size: 100% 100%;
        font-size: 0.9375vw;
        font-weight: bold;
        padding-left: 0.833vw;
        padding-top: 0.1vw;
      }
      .righttitle2 {
        width: 26.354vw;
        height: 1.5625vw;
        position: absolute;
        margin-top: 0.677vw;
        margin-left: 1.25vw;
        background: url("../../assets/images/jinchukou/矩形6.png") no-repeat;
        background-size: 100% 100%;
        font-size: 0.9375vw;
        font-weight: bold;
        padding-left: 0.833vw;
        padding-top: 0.1vw;
      }
      .righttitle3 {
        width: 26.354vw;
        height: 1.5625vw;
        position: absolute;
        margin-top: 0.677vw;
        margin-left: 1.25vw;
        background: url("../../assets/images/jinchukou/矩形6.png") no-repeat;
        background-size: 100% 100%;
        font-size: 0.9375vw;
        font-weight: bold;
        padding-left: 0.833vw;
        padding-top: 0.1vw;
      }
    }
  }
}
</style>