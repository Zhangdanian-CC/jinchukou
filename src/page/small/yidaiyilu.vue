<template>
  <div class="container">
    <!-- 头部 -->
    <div class="title-frame">
      <div class="title-left"></div>
      <div class="global-title">一带一路</div>
      <div class="right-time"></div>
    </div>
    <!-- 左边 -->
    <div class="leftbox">
      <div class="lefttitle">贷款余额</div>
      <div class="left-box">
        <div class="guobiefenlei">国别分类</div>
        <yidai-lineone></yidai-lineone>
        <div class="lingyufenlei">领域分类</div>
        <yidai-pieone></yidai-pieone>

      </div>
    </div>

    <!-- 中间 -->
    <div class="centerbox">
      <div class="centertitle">当年签约金额</div>
      <div class="center-box">
        <div class="guobiefenlei">国别分类</div>
        <yidai-linetwo></yidai-linetwo>
         <div class="lingyufenlei">领域分类</div>
         <yidai-pietwo></yidai-pietwo>
      </div>
    </div>
    <!-- 右边 -->
    <div class="rightbox">
      <div class="righttitle">当年累计发放金额</div>
      <div class="right-box">
        <div class="guobiefenlei">国别分类</div>
        <yidai-linethree></yidai-linethree>
         <div class="lingyufenlei">领域分类</div>
         <yidai-piethree></yidai-piethree>
      </div>
    </div>
  </div>
</template>

<script>
import YidaiLineone from "../../components/yidaiyilu/yidailineone";
import YidaiLinetwo from "../../components/yidaiyilu/yidailinetwo";
import YidaiLinethree from "../../components/yidaiyilu/yidailinethree";
import YidaiPieone from "../../components/yidaiyilu/yidaipieone";
import YidaiPietwo from "../../components/yidaiyilu/yidaipietwo";
import YidaiPiethree from "../../components/yidaiyilu/yidaipiethree";

export default {
  mounted() {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  beforeDestroy() {},
  components: {
    YidaiLineone,
    YidaiLinetwo,
    YidaiLinethree,
    YidaiPieone,
    YidaiPietwo,
    YidaiPiethree,
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
    width: 30.104vw;
    height: 50.417vw;
    position: absolute;
    top: 5vw;
    left: 0.8vw;
    .lefttitle {
      width: 30.104vw;
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
      width: 30.104vw;
      height: 48.0432vw;
      margin-top: 0.3125vw;
      background: url("../../assets/images/jinchukou/背景框-首屏11.png")
        no-repeat;
      background-size: 100% 100%;
      .guobiefenlei{
        width: 26.354vw;
        height: 1.5625vw;
        position: absolute;
        margin-left: 1.979vw;
        background: url("../../assets/images/jinchukou/背景框标题备份 6.png")
          no-repeat;
        background-size: 100% 100%;
        margin-top: 1.5vw;
        padding-left: 0.833vw;
        padding-top: 0.1vw;
        font-size: 0.9357vw;
        font-weight: bold;
      }
      .lingyufenlei {
        width: 26.354vw;
        height: 1.5625vw;
        margin-left: 1.979vw;
        background: url("../../assets/images/jinchukou/背景框标题备份 6.png")
          no-repeat;
        background-size: 100% 100%;
        margin-top: 4.5vw;
        padding-left: 0.833vw;
        padding-top: 0.1vw;
        font-size: 0.9357vw;
        font-weight: bold;
      }
    }
  }
  // 中间样式
  .centerbox {
    width: 35.625vw;
    height: 50.417vw;
    position: absolute;
    top: 5vw;
    left: 32.1875vw;
    .centertitle {
      width: 35.625vw;
      height: 2.0833vw;
      background: url("../../assets/images/jinchukou/title2备份7.png") no-repeat;
      background-size: 100% 100%;
      font-size: 1.094vw;
      font-weight: bold;
      font-family: Noto Sans SC;
      padding-left: 2.1875vw;
      padding-top: 0.3625vw;
    }
    .center-box {
      width: 35.625vw;
      height: 48.0432vw;
      margin-top: 0.3125vw;
      background: url("../../assets/images/jinchukou/背景框-首屏12.png")
        no-repeat;
      background-size: 100% 100%;
      .guobiefenlei{
        width: 26.354vw;
        height: 1.5625vw;
        position: absolute;
        margin-left: 1.979vw;
        background: url("../../assets/images/jinchukou/背景框标题备份 6.png")
          no-repeat;
        background-size: 100% 100%;
        margin-top: 1.5vw;
        padding-left: 0.833vw;
        padding-top: 0.1vw;
        font-size: 0.9357vw;
        font-weight: bold;
      }
      .lingyufenlei {
        width: 26.354vw;
        height: 1.5625vw;
        margin-left: 1.979vw;
        background: url("../../assets/images/jinchukou/背景框标题备份 6.png")
          no-repeat;
        background-size: 100% 100%;
        margin-top: 4.5vw;
        padding-left: 0.833vw;
        padding-top: 0.1vw;
        font-size: 0.9357vw;
        font-weight: bold;
      }
    }
  }

  // 右边样式
  .rightbox {
    width: 30.104vw;
    height: 50.417vw;
    position: absolute;
    top: 5vw;
    left: 69.0625vw;
    .righttitle {
      width: 30.104vw;
      height: 2.0833vw;
      background: url("../../assets/images/jinchukou/title2备份6.png") no-repeat;
      background-size: 100% 100%;
      font-size: 1.094vw;
      font-weight: bold;
      font-family: Noto Sans SC;
      padding-left: 2.1875vw;
      padding-top: 0.3625vw;
    }
    .right-box {
      width: 30.104vw;
      height: 48.0432vw;
      margin-top: 0.3125vw;
      background: url("../../assets/images/jinchukou/背景框-首屏11.png")
        no-repeat;
      background-size: 100% 100%;
      .guobiefenlei{
        width: 26.354vw;
        height: 1.5625vw;
        position: absolute;
        margin-left: 1.979vw;
        background: url("../../assets/images/jinchukou/背景框标题备份 6.png")
          no-repeat;
        background-size: 100% 100%;
        margin-top: 1.5vw;
        padding-left: 0.833vw;
        padding-top: 0.1vw;
        font-size: 0.9357vw;
        font-weight: bold;
      }
      .lingyufenlei {
        width: 26.354vw;
        height: 1.5625vw;
        margin-left: 1.979vw;
        background: url("../../assets/images/jinchukou/背景框标题备份 6.png")
          no-repeat;
        background-size: 100% 100%;
        margin-top: 4.5vw;
        padding-left: 0.833vw;
        padding-top: 0.1vw;
        font-size: 0.9357vw;
        font-weight: bold;
      }
    }
  }
}
</style>