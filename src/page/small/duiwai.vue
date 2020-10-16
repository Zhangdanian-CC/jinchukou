<template>
  <div class="container">
    <!-- 头部 -->
    <div class="title-frame">
      <div class="title-left"></div>
      <div class="global-title">对外贸易</div>
      <div class="right-time"></div>
    </div>
    <!-- 左边 -->
    <div class="leftbox">
      <div class="lefttitle">时间维度贷款分析</div>
      <div class="left-box">
        <!-- <div class="leftoneyue">
          <div class="icon"></div>
          <div class="daikuanyuebox">
            <div class="daikuanyue">贷款余额</div>
            <div class="yibox">
              <div class="yizhi">10,765.28</div>
              <div class="yi">亿</div>
            </div>
          </div>
          <div class="xian"></div>
          <div class="binianchubox">
            <div class="binianchuhezi">
              <div class="binianchu">比年初</div>
              <div class="binianchuzhi">5444</div>
            </div>
            <div class="tongbibox">
              <div class="tongbi">同比</div>
              <div class="hezi">
                <div class="baifenbi">23.4%</div>
                <i class="shangsheng"></i>
              </div>
            </div>
          </div>
        </div> -->
        <duiwai-lineone></duiwai-lineone>
        <!-- <div class="lefttwoyue">
          <div class="icon2"></div>
          <div class="quanyueyuebox">
            <div class="qianyueyue">签约金额</div>
            <div class="yibox2">
              <div class="yizhi2">12,567.23</div>
              <div class="yi2">亿</div>
            </div>
          </div>
          <div class="xian2"></div>
          <div class="binianchubox2">
            <div class="binianchuhezi2">
              <div class="binianchu2">比年初</div>
              <div class="binianchuzhi2">5444</div>
            </div>
            <div class="tongbibox2">
              <div class="tongbi2">同比</div>
              <div class="hezi2">
                <div class="baifenbi2">23.4%</div>
                <i class="shangsheng2"></i>
              </div>
            </div>
          </div>
        </div> -->
        <duiwai-linetwo></duiwai-linetwo>
        <!-- <div class="leftthreeyue">
          <div class="icon3"></div>
          <div class="leijifafangyuebox">
            <div class="leijifafangyue">累计发放余额</div>
            <div class="yibox3">
              <div class="yizhi3">24,501.56</div>
              <div class="yi3">亿</div>
            </div>
          </div>
          <div class="xian3"></div>
          <div class="binianchubox3">
            <div class="binianchuhezi3">
              <div class="binianchu3">比年初</div>
              <div class="binianchuzhi3">5444</div>
            </div>
            <div class="tongbibox3">
              <div class="tongbi3">同比</div>
              <div class="hezi3">
                <div class="baifenbi3">23.4%</div>
                <i class="shangsheng3"></i>
              </div>
            </div>
          </div>
        </div> -->
        <duiwai-linethree></duiwai-linethree>
      </div>
    </div>

    <!-- 中间 -->
    <div class="centerbox">
      <div class="centertitle1">按项目分析</div>
      <duiwai-pieone></duiwai-pieone>
      <duiwai-pietwo></duiwai-pietwo>
      <!-- <div class="centertitle2">项目国别</div>
      <duiwai-huanone></duiwai-huanone>
      <duiwai-huantwo></duiwai-huantwo> -->
    </div>
    <!-- 右边 -->
    <div class="rightbox">
      <div class="righttitle">经营单位贷款分析</div>
      <div class="right-box">
        <div class="rightoneyue">
          <duiwai-rightone></duiwai-rightone>
          <duiwai-righttwo></duiwai-righttwo>
          <duiwai-rightthree></duiwai-rightthree>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DuiwaiLineone from "../../components/duiwai/duiwailineone";
import DuiwaiLinetwo from "../../components/duiwai/duiwailinetwo";
import DuiwaiLinethree from "../../components/duiwai/duiwailinethree";
import DuiwaiPieone from "../../components/duiwai/duiwaipieone";
import DuiwaiPietwo from "../../components/duiwai/duiwaipietwo";
// import DuiwaiHuanone from "../../components/duiwai/duiwaihuanone";
// import DuiwaiHuantwo from "../../components/duiwai/duiwaihuantwo";
import DuiwaiRightone from "../../components/duiwai/duiwairightone";
import DuiwaiRighttwo from "../../components/duiwai/duiwairighttwo";
import DuiwaiRightthree from "../../components/duiwai/duiwairightthree";

export default {
  mounted() {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  beforeDestroy() {},
  components: {
    DuiwaiLineone,
    DuiwaiLinetwo,
    DuiwaiLinethree,
    DuiwaiPieone,
    DuiwaiPietwo,
    // DuiwaiHuanone,
    // DuiwaiHuantwo,
    DuiwaiRightone,
    DuiwaiRighttwo,
    DuiwaiRightthree,
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
      .leftoneyue {
        width: 27.708vw;
        height: 3.75vw;
        position: absolute;
        margin-left: 0.425vw;
        margin-top: 0.625vw;
        background: url("../../assets/images/jinchukou/Rectangle 29 (2).png")
          no-repeat;
        background-size: 100% 100%;
        .icon {
          float: left;
          width: 2.9167vw;
          height: 2.9167vw;
          background: url("../../assets/images/jinchukou/icon100.png") no-repeat;
          background-size: 100% 100%;
          margin-left: 0.4167vw;
          margin-top: 0.4167vw;
        }
        .daikuanyuebox {
          float: left;
          height: 2.9167vw;
          width: 7vw;
          margin-left: 0.8333vw;
          .daikuanyue {
            font-size: 0.729vw;
            color: #b5bfce;
            font-weight: bold;
            margin-top: 0.625vw;
          }
          .yibox {
            .yizhi {
              display: inline-block;
              font-size: 1.25vw;
            }
            .yi {
              display: inline-block;
              font-size: 0.729vw;
              margin-left: 0.3vw;
            }
          }
        }
        .xian {
          float: left;
          width: 0.10417vw;
          height: 2.9167vw;
          background: url("../../assets/images/jinchukou/Frame 728.png")
            no-repeat;
          background-size: 100% 100%;
          margin-left: 3vw;
          margin-top: 0.4vw;
        }
        .binianchubox {
          float: left;
          height: 2.9167vw;
          width: 7vw;
          margin-left: 1.667vw;
          .binianchuhezi {
            .binianchu {
              display: inline-block;
              font-size: 0.625vw;
              color: #b5bfce;
              margin-top: 0.5vw;
            }
            .binianchuzhi {
              display: inline-block;
              font-size: 0.9375vw;
              margin-left: 0.7vw;
            }
          }
          .tongbibox {
            .tongbi {
              display: inline-block;
              font-size: 0.625vw;
              color: #b5bfce;
              margin-top: 0.4vw;
              letter-spacing: 0.7vw;
            }
            .hezi {
              display: inline-block;
              .baifenbi {
                display: inline-block;
                font-size: 0.9375vw;
              }
              .shangsheng {
                display: inline-block;
                position: absolute;
                width: 1.3vw;
                height: 1.4vw;
                background: url("../../assets/images/jinchukou/上升.png")
                  no-repeat;
                background-size: 100% 100%;
              }
            }
          }
        }
      }
      .lefttwoyue {
        width: 27.708vw;
        height: 3.75vw;
        position: absolute;
        margin-left: 0.425vw;
        margin-top: 16.5vw;
        background: url("../../assets/images/jinchukou/Rectangle 29 (2).png")
          no-repeat;
        background-size: 100% 100%;
         .icon2 {
          float: left;
          width: 2.9167vw;
          height: 2.9167vw;
          background: url("../../assets/images/jinchukou/icon100.png") no-repeat;
          background-size: 100% 100%;
          margin-left: 0.4167vw;
          margin-top: 0.4167vw;
        }
        .quanyueyuebox {
          float: left;
          height: 2.9167vw;
          width: 7vw;
          margin-left: 0.8333vw;
          .qianyueyue {
            font-size: 0.729vw;
            color: #b5bfce;
            font-weight: bold;
            margin-top: 0.625vw;
          }
          .yibox2 {
            .yizhi2 {
              display: inline-block;
              font-size: 1.25vw;
            }
            .yi2 {
              display: inline-block;
              font-size: 0.729vw;
              margin-left: 0.3vw;
            }
          }
        }
        .xian2 {
          float: left;
          width: 0.10417vw;
          height: 2.9167vw;
          background: url("../../assets/images/jinchukou/Frame 728.png")
            no-repeat;
          background-size: 100% 100%;
          margin-left: 3vw;
          margin-top: 0.4vw;
        }
        .binianchubox2 {
          float: left;
          height: 2.9167vw;
          width: 7vw;
          margin-left: 1.667vw;
          .binianchuhezi2 {
            .binianchu2 {
              display: inline-block;
              font-size: 0.625vw;
              color: #b5bfce;
              margin-top: 0.5vw;
            }
            .binianchuzhi2 {
              display: inline-block;
              font-size: 0.9375vw;
              margin-left: 0.7vw;
            }
          }
          .tongbibox2 {
            .tongbi2 {
              display: inline-block;
              font-size: 0.625vw;
              color: #b5bfce;
              margin-top: 0.4vw;
              letter-spacing: 0.7vw;
            }
            .hezi2 {
              display: inline-block;
              .baifenbi2 {
                display: inline-block;
                font-size: 0.9375vw;
              }
              .shangsheng2 {
                display: inline-block;
                position: absolute;
                width: 1.3vw;
                height: 1.4vw;
                background: url("../../assets/images/jinchukou/上升.png")
                  no-repeat;
                background-size: 100% 100%;
              }
            }
          }
        }
      }
      .leftthreeyue {
        width: 27.708vw;
        height: 3.75vw;
        position: absolute;
        margin-left: 0.425vw;
        margin-top: 32.1875vw;
        background: url("../../assets/images/jinchukou/Rectangle 29 (2).png")
          no-repeat;
        background-size: 100% 100%;
         .icon3 {
          float: left;
          width: 2.9167vw;
          height: 2.9167vw;
          background: url("../../assets/images/jinchukou/icon100.png") no-repeat;
          background-size: 100% 100%;
          margin-left: 0.4167vw;
          margin-top: 0.4167vw;
        }
        .leijifafangyuebox {
          float: left;
          height: 2.9167vw;
          width: 7vw;
          margin-left: 0.8333vw;
          .leijifafangyue {
            font-size: 0.729vw;
            color: #b5bfce;
            font-weight: bold;
            margin-top: 0.625vw;
          }
          .yibox3 {
            .yizhi3 {
              display: inline-block;
              font-size: 1.25vw;
            }
            .yi3 {
              display: inline-block;
              font-size: 0.729vw;
              margin-left: 0.3vw;
            }
          }
        }
        .xian3 {
          float: left;
          width: 0.10417vw;
          height: 2.9167vw;
          background: url("../../assets/images/jinchukou/Frame 728.png")
            no-repeat;
          background-size: 100% 100%;
          margin-left: 3vw;
          margin-top: 0.4vw;
        }
        .binianchubox3 {
          float: left;
          height: 2.9167vw;
          width: 7vw;
          margin-left: 1.667vw;
          .binianchuhezi3 {
            .binianchu3 {
              display: inline-block;
              font-size: 0.625vw;
              color: #b5bfce;
              margin-top: 0.5vw;
            }
            .binianchuzhi3 {
              display: inline-block;
              font-size: 0.9375vw;
              margin-left: 0.7vw;
            }
          }
          .tongbibox3 {
            .tongbi3 {
              display: inline-block;
              font-size: 0.625vw;
              color: #b5bfce;
              margin-top: 0.4vw;
              letter-spacing: 0.7vw;
            }
            .hezi3 {
              display: inline-block;
              .baifenbi3 {
                display: inline-block;
                font-size: 0.9375vw;
              }
              .shangsheng3 {
                display: inline-block;
                position: absolute;
                width: 1.3vw;
                height: 1.4vw;
                background: url("../../assets/images/jinchukou/上升.png")
                  no-repeat;
                background-size: 100% 100%;
              }
            }
          }
        }
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
    .centertitle1 {
      width: 35.625vw;
      height: 1.5625vw;
      background: url("../../assets/images/jinchukou/矩形5.png") no-repeat;
      background-size: 100% 100%;
      font-size: 0.9375vw;
      font-weight: bold;
      font-family: Noto Sans SC;
      position: absolute;
      margin-left: 1.25vw;
      margin-top: 0.8333vw;
      padding-left: 0.5vw;
    }
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
      margin-top: 30.448vw;
      padding-left: 0.5vw;
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
    }
  }
}
</style>