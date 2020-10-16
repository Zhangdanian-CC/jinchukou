<template>
  <div class="container">
    <!-- 头部 -->
    <div class="title-frame">
      <div class="title-left"></div>
      <div class="global-title">绿色</div>
      <div class="right-time"></div>
    </div>
    <!-- 第一栏 -->
    <div class="diyilan">
      <div class="title1">节能减排量</div>
      <div class="zuoyi">
        <lvse-leftone></lvse-leftone>
      </div>
      <div class="title2">全行绿色生产信贷</div>
      <div class="zuoer">
        <lvse-lefttwo></lvse-lefttwo>
      </div>
      <div class="title3">全行节能环保项目和服务信贷</div>
      <div class="zuosan">
        <lvse-leftthree></lvse-leftthree>
      </div>
    </div>
    <!-- 第二栏 -->
    <div class="dierlan">
      <div class="title4">全行境内支持低碳经济的信贷</div>
      <div class="zhongyi">
        <lvse-centerone></lvse-centerone>
      </div>
      <div class="title5">全行境内支持循环经济的信贷</div>
      <div class="zhonger">
        <lvse-centertwo></lvse-centertwo>
      </div>
    </div>

    <!-- 第三栏 -->
    <div class="disanlan">
      <div class="title6">全行境内支持生态经济的信贷</div>
      <div class="rightone">
        <lvse-rightone></lvse-rightone>
      </div>
      <div class="title7">全行绿色信贷</div>
      <div class="righttwo">
        <lvse-righttwo></lvse-righttwo>
      </div>
    </div>
  </div>
</template>

<script>
import LvseLeftone from "../../components/lvse/lvseleftone";
import LvseLefttwo from "../../components/lvse/lvselefttwo";
import LvseLeftthree from "../../components/lvse/lvseleftthree";

import LvseCenterone from "../../components/lvse/lvsecenterone";
import LvseCentertwo from "../../components/lvse/lvsecentertwo";
import LvseRightone from "../../components/lvse/lvserightone";
import LvseRighttwo from "../../components/lvse/lvserighttwo";

export default {
  mounted() {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  beforeDestroy() {},
  components: {
    LvseLeftone,
    LvseLefttwo,
    LvseLeftthree,
    LvseCenterone,
    LvseCentertwo,
    LvseRightone,
    LvseRighttwo,
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 100vw;
  height: 100vh;
  position: relative;
  background: url("../../assets/images/jinchukou/beijing.png") no-repeat;
  background-size: 100% 100%;
  font-size: 22px;
  color: #fff;
  overflow: hidden;
  font-family: Microsoft YaHei;

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
      font-family: HYLingXinJ;
    }
    .right-time {
      width: 33%;
      text-align: right;
    }
  }
  // 第一栏样式
  .diyilan {
    width: 32vw;
    height: 50.208vw;
    // background-color: violet;
    position: absolute;
    margin-left: 0.833vw;
    margin-top: 0.833vw;
    .title1 {
      width: 32vw;
      height: 2.0833vw;
      background: url("../../assets/images/jinchukou/title2备份7.png") no-repeat;
      background-size: 100% 100%;
      font-size: 1.094vw;
      font-weight: bold;
      font-family: Noto Sans SC;
      padding-left: 2.1875vw;
      padding-top: 0.3625vw;
    }
    .zuoyi {
      width: 32vw;
      height: 14.493vw;
      background: url("../../assets/images/jinchukou/背景框-首屏6.png")
        no-repeat;
      background-size: 100% 100%;
      margin-top: 0.3125vw;
    }
    .title2 {
      width: 32vw;
      height: 2.0833vw;
      background: url("../../assets/images/jinchukou/title2备份7.png") no-repeat;
      background-size: 100% 100%;
      font-size: 1.094vw;
      font-weight: bold;
      font-family: Noto Sans SC;
      padding-left: 2.1875vw;
      padding-top: 0.3625vw;
    }
    .zuoer {
      width: 32vw;
      height: 14.493vw;
      background: url("../../assets/images/jinchukou/背景框-首屏6.png")
        no-repeat;
      background-size: 100% 100%;
      margin-top: 0.3125vw;
    }
    .title3 {
      width: 32vw;
      height: 2.0833vw;
      background: url("../../assets/images/jinchukou/title2备份7.png") no-repeat;
      background-size: 100% 100%;
      font-size: 1.094vw;
      font-weight: bold;
      font-family: Noto Sans SC;
      padding-left: 2.1875vw;
      padding-top: 0.3625vw;
    }
    .zuosan {
      width: 32vw;
      height: 14.493vw;
      background: url("../../assets/images/jinchukou/背景框-首屏6.png")
        no-repeat;
      background-size: 100% 100%;
      margin-top: 0.3125vw;
    }
  }
  // 第二栏样式
  .dierlan {
    width: 32vw;
    height: 50.208vw;
    // background-color: violet;
    position: absolute;
    margin-left: 34vw;
    margin-top: 0.833vw;
    // .zhongyi {
    //   position: relative;
    //   width: 32vw;
    //   height: 8.333vw;
    //   background: url("../../assets/images/jinchukou/bj.png") no-repeat;
    //   background-size: 100% 100%;
    // }
    .title4 {
      width: 32vw;
      height: 2.0833vw;
      background: url("../../assets/images/jinchukou/title2备份7.png") no-repeat;
      background-size: 100% 100%;
      font-size: 1.094vw;
      font-weight: bold;
      font-family: Noto Sans SC;
      padding-left: 2.1875vw;
      padding-top: 0.3625vw;
    }
    .zhongyi {
      width: 32vw;
      height: 22.292vw;
      background: url("../../assets/images/jinchukou/背景框-首屏7.png")
        no-repeat;
      background-size: 100% 100%;
      margin-top: 0.3125vw;
    }
    .title5 {
      width: 32vw;
      height: 2.0833vw;
      background: url("../../assets/images/jinchukou/title2备份7.png") no-repeat;
      background-size: 100% 100%;
      font-size: 1.094vw;
      font-weight: bold;
      font-family: Noto Sans SC;
      padding-left: 2.1875vw;
      padding-top: 0.3625vw;
      margin-top: 1.3vw;
    }
    .zhonger {
      width: 32vw;
      height: 22.292vw;
      background: url("../../assets/images/jinchukou/背景框-首屏7.png")
        no-repeat;
      background-size: 100% 100%;
      margin-top: 0.3125vw;
    }
  }
  // 第三栏样式
  .disanlan {
    width: 32vw;
    height: 50.208vw;
    // background-color: violet;
    position: absolute;
    margin-left: 67.2vw;
    margin-top: 0.833vw;
    .title6 {
      width: 32vw;
      height: 2.0833vw;
      background: url("../../assets/images/jinchukou/title2备份7.png") no-repeat;
      background-size: 100% 100%;
      font-size: 1.094vw;
      font-weight: bold;
      font-family: Noto Sans SC;
      padding-left: 2.1875vw;
      padding-top: 0.3625vw;
    }
    .rightone {
      width: 32vw;
      height: 22.292vw;
      background: url("../../assets/images/jinchukou/背景框-首屏8.png")
        no-repeat;
      background-size: 100% 100%;
      margin-top: 0.3125vw;
    }
    .title7 {
      width: 32vw;
      height: 2.0833vw;
      background: url("../../assets/images/jinchukou/title2备份7.png") no-repeat;
      background-size: 100% 100%;
      font-size: 1.094vw;
      font-weight: bold;
      font-family: Noto Sans SC;
      padding-left: 2.1875vw;
      padding-top: 0.3625vw;
      margin-top: 1.3vw;
    }
    .righttwo {
      width: 32vw;
      height: 22.292vw;
      background: url("../../assets/images/jinchukou/背景框-首屏8.png")
        no-repeat;
      background-size: 100% 100%;
      margin-top: 0.3125vw;
    }
  }
}
</style>