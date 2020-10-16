<template>
  <div class="container">
    <!--左侧参考资产规模 右侧参考中小微 -->
    <!-- 头部 -->
    <div class="title-frame">
      <div class="title-left"></div>
      <div class="global-title">资产效益</div>
      <div class="right-time"></div>
    </div>
    <!-- 左边 -->
    <div class="left-box">
      <div class="title">营业收入分析</div>
      <div class="leftone-box">
        <div class="lixi">利息收入</div>
        <xiaoyi-leftone></xiaoyi-leftone>
      </div>
      <div class="lefttwo-box">
        <div class="shouxufei">手续费</div>
        <xiaoyi-lefttwo></xiaoyi-lefttwo>
      </div>
      <div class="leftthree-box">
        <div class="touzi">投资收入</div>
        <xiaoyi-leftthree></xiaoyi-leftthree>
      </div>
    </div>
    <!-- 右边 -->
    <div class="right-box">
      <div class="title2">营业支出分析</div>
      <div class="rightone-box">
        <xiaoyi-rightone></xiaoyi-rightone>
      </div>
      <div class="title3">利润总额</div>
      <div class="righttwo-box">
        <xiaoyi-righttwo></xiaoyi-righttwo>
      </div>
    </div>
  </div>
</template>

<script>
import XiaoyiLeftone from "../../components/xiaoyi/xiaoyileftone";
import XiaoyiLefttwo from "../../components/xiaoyi/xiaoyilefttwo";
import XiaoyiLeftthree from "../../components/xiaoyi/xiaoyileftthree";
import XiaoyiRightone from "../../components/xiaoyi/xiaoyirightone";
import XiaoyiRighttwo from "../../components/xiaoyi/xiaoyirighttwo";

export default {
  mounted() {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  beforeDestroy() {},
  components: {
    XiaoyiLeftone,
    XiaoyiLefttwo,
    XiaoyiLeftthree,
    XiaoyiRightone,
    XiaoyiRighttwo,
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
  // font-size: 28px;
  color: #fff;
  overflow: hidden;
  font-family: Microsoft YaHei;
  letter-spacing: 1px;
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

  // 左边父盒子
  .left-box {
    width: 48.07vw;
    height: 50.18vw;
    position: absolute;
    left: 0.833vw;
    top: 4.83vw;
    // background-color: pink;
    .title {
      width: 48.07vw;
      height: 2.083vw;
      background: url("../../assets/images/jinchukou/title2.png") no-repeat;
      background-size: 100% 100%;
      font-size: 1.094vw;
      font-weight: bold;
      font-family: Noto Sans SC;
      padding-left: 2.1875vw;
      padding-top: 0.4vw;
    }
    .leftone-box {
      width: 48.07vw;
      height: 15.248vw;
      margin-top: 0.793vw;
      background: url("../../assets/images/jinchukou/资产效益-背景框1.png")
        no-repeat;
      background-size: 100% 100%;
      .lixi {
        width: 26.354vw;
        height: 1.51vw;
        font-size: 0.9375vw;
        font-weight: bold;
        font-family: Noto Sans SC;
        padding-left: 0.833vw;
        background: url("../../assets/images/jinchukou/矩形.png") no-repeat;
        background-size: 100% 100%;
        position: absolute;
        margin-top: 1.25vw;
        margin-left: 1.25vw;
      }
    }
    .lefttwo-box {
      width: 48.07vw;
      height: 15.248vw;
      margin-top: 0.793vw;
      background: url("../../assets/images/jinchukou/资产效益-背景框1.png")
        no-repeat;
      background-size: 100% 100%;
      .shouxufei {
        width: 26.354vw;
        height: 1.51vw;
        font-size: 0.9375vw;
        font-weight: bold;
        font-family: Noto Sans SC;
        padding-left: 0.833vw;
        background: url("../../assets/images/jinchukou/矩形.png") no-repeat;
        background-size: 100% 100%;
        position: absolute;
        margin-top: 1.25vw;
        margin-left: 1.25vw;
      }
    }
    .leftthree-box {
      width: 48.07vw;
      height: 15.248vw;
      margin-top: 0.793vw;
      background: url("../../assets/images/jinchukou/资产效益-背景框1.png")
        no-repeat;
      background-size: 100% 100%;
      .touzi {
        width: 26.354vw;
        height: 1.51vw;
        font-size: 0.9375vw;
        font-weight: bold;
        font-family: Noto Sans SC;
        padding-left: 0.833vw;
        background: url("../../assets/images/jinchukou/矩形.png") no-repeat;
        background-size: 100% 100%;
        position: absolute;
        margin-top: 1.25vw;
        margin-left: 1.25vw;
      }
    }
  }
  // 右边盒子
  .right-box {
    width: 48.125vw; //21.354
    height: 50.18vw;
    position: absolute;
    right: 0.833vw;
    top: 4.83vw;
    // background-color: pink;
    .title2 {
      width: 48.07vw;
      height: 2.083vw;
      background: url("../../assets/images/jinchukou/title2.png") no-repeat;
      background-size: 100% 100%;
      font-size: 1.094vw;
      font-weight: bold;
      font-family: Noto Sans SC;
      padding-left: 2.1875vw;
      padding-top: 0.4vw;
    }
    .rightone-box {
      width: 48.125vw;
      height: 21.354vw;
      margin-top: 0.793vw;
      background: url("../../assets/images/jinchukou/资产效益-背景框2.png")
        no-repeat;
      background-size: 100% 100%;
    }
    .title3 {
      width: 48.07vw;
      height: 2.083vw;
      background: url("../../assets/images/jinchukou/title2.png") no-repeat;
      background-size: 100% 100%;
      font-size: 1.094vw;
      font-weight: bold;
      font-family: Noto Sans SC;
      margin-top: 1.5vw;
      padding-left: 2.1875vw;
      padding-top: 0.4vw;
    }
    .righttwo-box {
      width: 48.125vw;
      height: 21.554vw;
      margin-top: 0.793vw;
      background: url("../../assets/images/jinchukou/资产效益-背景框2.png")
        no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>