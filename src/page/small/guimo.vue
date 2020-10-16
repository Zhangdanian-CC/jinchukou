<template>
  <div class="container">
    <!-- 头部 -->
    <div class="title-frame">
      <div class="title-left"></div>
      <div class="global-title">资产负债规模</div>
      <div class="right-time"></div>
    </div>
    <!-- 左边 -->
    <div class="left-box">
      <div class="image">信贷余额</div>
      <div class="shuju">
        <div class="box">
          <span class="sanwan">33752.59</span>
          <span class="yi">亿</span>
        </div>
        <div class="sanqian">
          <span class="shuzhi">3000</span>
          <span class="yi2">亿</span>
          <div>
            <div class="binianchu">比年初</div>
            <i class="shangsheng"></i>
          </div>
        </div>
      </div>
      <div class="zhexian">
        <zhexian-one></zhexian-one>
      </div>
      <!-- <div class="image image2">全行负债规模</div>
      <div class="shuju2">
        <div class="box">
          <span class="sanwan2">33752.59</span>
          <span class="yi">亿</span>
        </div>
        <div class="sanqianer">
          <span class="shuzhier">3000</span>
          <span class="yi2">亿</span>
          <div class="box1">
            <div class="binianchuer">比年初</div>
            <i class="shangshenger"></i>
          </div>
        </div>
      </div> 
      <div class="zhexian zhexian2">
        <zhexian-two></zhexian-two>
      </div> -->
      <div class="image image3">四大经济领域</div>
      <div class="pie">
        <zichan-pie></zichan-pie>
      </div>
      <div class="leftthree">
        <div class="sijiaobeijing">
          <div class="icon104"></div>
          <div class="zhaiquan">债券投资</div>
          <div class="yibai">
            <div class="zhaiquantouzie">2264.38</div>
            <div class="yi1">亿</div>
          </div>
        </div>
        <right-line></right-line>
      </div>
    </div>
    <!-- 右边 -->
    <div class="right-box">
      <div class="image">负债余额</div>
      <div class="shuju">
        <div class="box">
          <span class="sanwan">33752.59</span>
          <span class="yi">亿</span>
        </div>
        <div class="sanqian">
          <span class="shuzhi">3000</span>
          <span class="yi2">亿</span>
          <div>
            <div class="binianchu">比年初</div>
            <i class="shangsheng"></i>
          </div>
        </div>
      </div>
      <div class="zhexian">
        <zhexian-two></zhexian-two>
      </div>
      <div class="rightone">
        <div class="row1">
          <div class="faxing">发行债券余额</div>
          <div class="yiwan">18362.42</div>
          <div class="yi">亿</div>
        </div>
        <div class="row2">
          <div class="cny">CNY</div>
          <div class="yiwanyi">10321.41</div>
          <div class="yi">亿</div>
          <!-- <div class="tongbi2">
            <div class="persentage2">16.23%</div>
            <div>
              <div class="tongbizi2">同比</div>
              <i class="xiajiang"></i>
            </div>
          </div> -->
          <div class="sanqian2">
            <span class="shuzhi2">3000</span>
            <span class="yi5">亿</span>
            <div>
              <div class="binianchu2">比年初</div>
              <i class="shangsheng"></i>
            </div>
          </div>
        </div>
        <div class="row3">
          <div class="usd">USD</div>
          <div class="yiwanyi2">1132.53</div>
          <div class="yi3">亿</div>
          <!-- <div class="tongbi3">
            <div class="persentage3">16.23%</div>
            <div>
              <div class="tongbizi3">同比</div>
              <i class="xiajiang"></i>
            </div>
          </div> -->
          <div class="sanqian3">
            <span class="shuzhi3">3000</span>
            <span class="yi4">亿</span>
            <div>
              <div class="binianchu3">比年初</div>
              <i class="shangsheng"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="righttwo">
        <div class="col1">
          <div class="dacny">CNY</div>
          <div class="bennianfazhai">本年发债额</div>
          <div class="fazhai">
            <div class="sanqian4">3620.12</div>
            <div class="yi">亿</div>
          </div>
          <div class="bennianchangzhai">本年偿债额</div>
          <div class="leftchangzhai">
            <div class="sanqian4">2363.63</div>
            <div class="yi">亿</div>
          </div>
        </div>
        <div class="col2">
          <div class="dausd">USD</div>
          <div class="bennianfazhai2">本年发债额</div>
          <div class="fazhai2">
            <div class="sanqian5">21.12</div>
            <div class="yi">亿</div>
          </div>
          <div class="bennianchangzhai2">本年偿债额</div>
          <div class="leftchangzhai2">
            <div class="sanqian5">12.74</div>
            <div class="yi">亿</div>
          </div>
        </div>
        <div class="row6"></div>
      </div>
    </div>
  </div>
</template>

<script>
import ZichanPie from "../../components/guimo/zichanpie";
import ZhexianOne from "../../components/guimo/zhexianone";
import ZhexianTwo from "../../components/guimo/zhexiantwo";
// import GuimoRightpie from "../../components/guimo/guimorightpie";
import RightLine from "../../components/guimo/rightline";

export default {
  mounted() {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  beforeDestroy() {},
  components: {
    ZichanPie,
    ZhexianOne,
    ZhexianTwo,
    // GuimoRightpie,
    RightLine,
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
    .image {
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
    .shuju {
      width: 48.07vw;
      height: 4.6875vw;
      background: url("../../assets/images/jinchukou/shujubeijing.png")
        no-repeat;
      background-size: 100% 100%;
      margin-top: 0.3125vw;
      .box {
        float: left;
        height: 4.6875vw;
        line-height: 4.6875vw;
        .sanwan {
          display: inline-block;
          font-family: Microsoft YaHei;
          font-weight: bold;
          font-size: 1.875vw;
          margin-left: 3.344vw;
        }
        .yi {
          display: inline-block;
          font-size: 0.833vw;
          margin-left: 0.833vw;
        }
      }

      // .tongbi {
      //   float: left;
      //   margin-left: 15.1vw;
      //   font-family: Microsoft YaHei;
      //   font-weight: bold;
      //   .persentage {
      //     font-size: 1.25vw;
      //     color: #45dcff;
      //     margin-top: 1vw;
      //   }
      //   .tongbizi {
      //     display: inline-block;
      //     font-size: 0.729vw;
      //   }
      //   .shangsheng {
      //     display: inline-block;
      //     position: absolute;
      //     width: 1.3vw;
      //     height: 1.4vw;
      //     background: url("../../assets/images/jinchukou/上升.png") no-repeat;
      //     background-size: 100% 100%;
      //   }
      // }
      .sanqian {
        float: left;
        margin-left: 14.5vw;
        margin-top: 1vw;
        font-family: Microsoft YaHei;
        font-weight: bold;
        .shuzhi {
          font-size: 1.45vw;
          color: #ff3f2b;
          margin-top: 1vw;
          position: absolute;
          left: 35vw;
          top: 2.75vw;
        }
        .yi2 {
          display: inline-block;
          font-size: 0.833vw;
          // margin-left: 0.833vw;
          font-weight: normal;
          position: absolute;
          top: 4.3vw;
          left: 39.5vw;
        }
        .binianchu {
          font-size: 1.09375vw;
          display: inline-block;
          position: absolute;
          left: 27vw;
          top: 4vw;
        }
        .shangsheng {
          display: inline-block;
          position: absolute;
          width: 1.6vw;
          height: 1.7vw;
          background: url("../../assets/images/jinchukou/上升.png") no-repeat;
          background-size: 100% 100%;
          left: 30.4vw;
          top: 3.96vw;
        }
      }
    }
    .zhexian {
      width: 48.07vw;
      height: 9.452vw;
      background: url("../../assets/images/jinchukou/矩形2.png") no-repeat;
      background-size: 100% 100%;
      margin-top: 0.3125vw;
    }
    /* .image2 {
      margin-top: 0.808vw;
    }
    .shuju2 {
      position: relative;
      width: 48.07vw;
      height: 4.6875vw;
      background: url("../../assets/images/jinchukou/shujubeijing.png")
        no-repeat;
      background-size: 100% 100%;
      margin-top: 0.3125vw;
      .box {
        float: left;
        height: 4.6875vw;
        line-height: 4.6875vw;
        .sanwan2 {
          display: inline-block;
          font-family: Microsoft YaHei;
          font-weight: bold;
          font-size: 1.875vw;
          margin-left: 3.344vw;
        }
        .yi {
          display: inline-block;
          font-size: 0.833vw;
          margin-left: 0.833vw;
        }
      }
      .sanqianer {
        float: left;
        margin-left: 14.5vw;
        margin-top: 1vw;
        font-family: Microsoft YaHei;
        font-weight: bold;
        .shuzhier {
          font-size: 1.45vw;
          color: #ff3f2b;
          margin-top: 0.5vw;
          position: absolute;
          left: 35vw;
        }
        .yi2 {
          display: inline-block;
          font-size: 0.833vw;
          // margin-left: 0.833vw;
          font-weight: normal;
          position: absolute;
          top: 2vw;
          left: 39.5vw;
        }
        .box1 {
          // float: left;
          .binianchuer {
            font-size: 1.09375vw;
            display: inline-block;
            position: absolute;
            left: 27vw;
            top: 1.7vw;
          }
          .shangshenger {
            display: inline-block;
            position: absolute;
            width: 1.6vw;
            height: 1.7vw;
            background: url("../../assets/images/jinchukou/上升.png") no-repeat;
            background-size: 100% 100%;
            left: 30.4vw;
            top: 1.67vw;
          }
        }
      }
    } */
    .image3 {
      margin-top: 1.042vw;
    }
    .pie {
      width: 48.07vw;
      height: 14.533vw;
      background: url("../../assets/images/jinchukou/矩形3.png") no-repeat;
      background-size: 100% 100%;
      margin-top: 0.3125vw;
      // padding-left: 12vw;
    }
    .leftthree {
      width: 48.07vw;
      height: 14.447vw;
      background: url("../../assets/images/jinchukou/Group 127.png") no-repeat;
      background-size: 100% 100%;
      margin-top: 1.288vw;
      .sijiaobeijing {
        position: absolute;
        width: 10.521vw;
        height: 12.656vw;
        margin-top: 0.974vw;
        margin-left: 1.38vw;
        background: url("../../assets/images/jinchukou/sijiaobeijing.png")
          no-repeat;
        background-size: 100% 100%;
        .icon104 {
          // display: inline-block;
          float: left;
          width: 1.25vw;
          height: 1.25vw;
          margin-left: 1.25vw;
          margin-top: 2.1875vw;
          background: url("../../assets/images/jinchukou/icon104.png") no-repeat;
          background-size: 100% 100%;
          margin-right: 0.5vw;
        }
        .zhaiquan {
          // display: inline-block;
          float: left;
          font-size: 1.09375vw;
          font-weight: bold;
          margin-top: 2vw;
        }
        .yibai {
          width: 10vw;
          height: 2.083vw;
          margin-left: 1vw;
          margin-top: 6vw;
          .zhaiquantouzie {
            display: inline-block;
            font-size: 1.875vw;
            color: #ff8a5c;
            font-weight: bold;
          }
          .yi1 {
            display: inline-block;
            font-size: 0.626vw;
            margin-left: 0.6vw;
          }
        }
        // .tongbi4 {
        //   .tongbi5 {
        //     float: left;
        //     font-size: 0.729vw;
        //     font-weight: bold;
        //     margin-top: 1.875vw;
        //     margin-left: 1.5vw;
        //   }
        //   .shangsheng {
        //     display: inline-block;
        //     position: absolute;
        //     width: 1.3vw;
        //     height: 1.4vw;
        //     background: url("../../assets/images/jinchukou/上升.png") no-repeat;
        //     background-size: 100% 100%;
        //     margin-top: 1.8vw;
        //   }
        //   .shiliu {
        //     float: left;
        //     font-weight: bold;
        //     margin-top: 1.875vw;
        //     margin-left: 1.875vw;
        //     font-size: 0.833vw;
        //     color: #45dcff;
        //   }
        // }
        // .binianchu4 {
        //   .binianchu5 {
        //     float: left;
        //     font-size: 0.729vw;
        //     font-weight: bold;
        //     margin-top: 0.875vw;
        //     margin-left: 1.5vw;
        //   }
        //   .shangsheng {
        //     display: inline-block;
        //     position: absolute;
        //     width: 1.3vw;
        //     height: 1.4vw;
        //     background: url("../../assets/images/jinchukou/上升.png") no-repeat;
        //     background-size: 100% 100%;
        //     margin-top: 3.85vw;
        //     margin-left: -4.4vw;
        //   }
        //   .sanqianyi {
        //     float: left;
        //     font-weight: bold;
        //     margin-top: 0.875vw;
        //     margin-left: 1.1vw;
        //     font-size: 0.833vw;
        //     color: #b282ff;
        //   }
        // }
      }
      .rowone {
        .blockone {
          width: 12.8125vw;
          height: 3.75vw;
          position: absolute;
          margin-left: 13.255vw;
          margin-top: 2.796875vw;
          // background-color: pink;
          .icon101 {
            width: 2.917vw;
            height: 2.917vw;
            display: inline-block;
            background: url("../../assets/images/jinchukou/icon101.png")
              no-repeat;
            background-size: 100% 100%;
            margin-right: 0.5vw;
          }
          .jingwai {
            display: inline-block;
            .jingwaiyue {
              font-size: 1.09375vw;
              font-weight: bold;
            }
            .hezi {
              .sanbai {
                display: inline-block;
                font-size: 1.458vw;
                font-weight: bold;
              }
              .yi {
                display: inline-block;
                font-size: 0.833vw;
                margin-left: 0.833vw;
              }
            }
          }
        }
        .blocktwo {
          width: 17.8125vw;
          height: 3.75vw;
          position: absolute;
          margin-left: 29.255vw;
          margin-top: 2.796875vw;
          // background-color: pink;
          .icon102 {
            display: inline-block;
            width: 2.917vw;
            height: 2.917vw;
            background: url("../../assets/images/jinchukou/icon102.png")
              no-repeat;
            background-size: 100% 100%;
            margin-right: 0.5vw;
          }
          .jingnei {
            display: inline-block;
            .jingneiyue {
              font-size: 1.09375vw;
              font-weight: bold;
            }
            .hezi2 {
              .yiqian {
                display: inline-block;
                font-size: 1.458vw;
                font-weight: bold;
              }
              .yi {
                display: inline-block;
                font-size: 0.833vw;
                margin-left: 0.833vw;
              }
            }
          }
        }
      }
      .rowtwo {
        .blockthree {
          width: 18.8125vw;
          height: 3.75vw;
          position: absolute;
          margin-left: 13.255vw;
          margin-top: 8.796875vw;
          // background-color: pink;
          .icon103 {
            width: 2.917vw;
            height: 2.917vw;
            display: inline-block;
            background: url("../../assets/images/jinchukou/icon102.png")
              no-repeat;
            background-size: 100% 100%;
            margin-right: 0.5vw;
          }
          .jingneifei {
            display: inline-block;
            .jingneiyuefei {
              font-size: 1.09375vw;
              font-weight: bold;
            }
            .hezi3 {
              .yibailiu {
                display: inline-block;
                font-size: 1.458vw;
                font-weight: bold;
              }
              .yi {
                display: inline-block;
                font-size: 0.833vw;
                margin-left: 0.833vw;
              }
            }
          }
        }
      }
    }
  }
  // 右边父盒子
  .right-box {
    width: 48.125vw;
    height: 50.18vw;
    position: absolute;
    right: 0.833vw;
    top: 4.83vw;
    // background-color: pink;
    .image {
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
    .shuju {
      width: 48.07vw;
      height: 4.6875vw;
      background: url("../../assets/images/jinchukou/shujubeijing.png")
        no-repeat;
      background-size: 100% 100%;
      margin-top: 0.3125vw;
      .box {
        float: left;
        height: 4.6875vw;
        line-height: 4.6875vw;
        .sanwan {
          display: inline-block;
          font-family: Microsoft YaHei;
          font-weight: bold;
          font-size: 1.875vw;
          margin-left: 3.344vw;
        }
        .yi {
          display: inline-block;
          font-size: 0.833vw;
          margin-left: 0.833vw;
        }
      }

      // .tongbi {
      //   float: left;
      //   margin-left: 15.1vw;
      //   font-family: Microsoft YaHei;
      //   font-weight: bold;
      //   .persentage {
      //     font-size: 1.25vw;
      //     color: #45dcff;
      //     margin-top: 1vw;
      //   }
      //   .tongbizi {
      //     display: inline-block;
      //     font-size: 0.729vw;
      //   }
      //   .shangsheng {
      //     display: inline-block;
      //     position: absolute;
      //     width: 1.3vw;
      //     height: 1.4vw;
      //     background: url("../../assets/images/jinchukou/上升.png") no-repeat;
      //     background-size: 100% 100%;
      //   }
      // }
      .sanqian {
        float: left;
        margin-left: 14.5vw;
        margin-top: 1vw;
        font-family: Microsoft YaHei;
        font-weight: bold;
        .shuzhi {
          font-size: 1.45vw;
          color: #ff3f2b;
          margin-top: 1vw;
          position: absolute;
          left: 35vw;
          top: 2.75vw;
        }
        .yi2 {
          display: inline-block;
          font-size: 0.833vw;
          // margin-left: 0.833vw;
          font-weight: normal;
          position: absolute;
          top: 4.3vw;
          left: 39.5vw;
        }
        .binianchu {
          font-size: 1.09375vw;
          display: inline-block;
          position: absolute;
          left: 27vw;
          top: 4vw;
        }
        .shangsheng {
          display: inline-block;
          position: absolute;
          width: 1.6vw;
          height: 1.7vw;
          background: url("../../assets/images/jinchukou/上升.png") no-repeat;
          background-size: 100% 100%;
          left: 30.4vw;
          top: 3.96vw;
        }
      }
    }
    .zhexian {
      width: 48.07vw;
      height: 9.452vw;
      background: url("../../assets/images/jinchukou/矩形2.png") no-repeat;
      background-size: 100% 100%;
      margin-top: 0.3125vw;
    }
    .rightone {
      width: 48.07vw;
      height: 16.624vw;
      background: url("../../assets/images/jinchukou/Group 134.png") no-repeat;
      background-size: 100% 100%;
      margin-top: 1.242vw;
      .row1 {
        position: absolute;
        top: 17.858vw;
        left: 6.016vw;
        font-weight: bold;
        .faxing {
          float: left;
          font-size: 1.094vw;
          margin-top: 1vw;
        }
        .yiwan {
          float: left;
          font-size: 1.875vw;
          margin-left: 1.667vw;
          margin-top: 0.4vw;
        }
        .yi {
          float: left;
          font-size: 0.833vw;
          margin-left: 0.833vw;
          margin-top: 1.5vw;
          font-weight: normal;
        }
      }
      .row2 {
        position: absolute;
        top: 21.458vw;
        left: 6.016vw;
        .cny {
          font-size: 1.09375vw;
          font-weight: bold;
          margin-top: 1.09375vw;
        }
        .yiwanyi {
          float: left;
          font-size: 1.458vw;
          font-weight: bold;
          font-family: Microsoft YaHei;
        }
        .yi {
          float: left;
          font-size: 0.833vw;
          margin-left: 0.833vw;
          margin-top: 0.6vw;
          font-weight: normal;
        }
        /* .tongbi2 {
          float: left;
          margin-left: 3.1vw;
          margin-top: -1.7vw;
          font-family: Microsoft YaHei;
          font-weight: bold;
          .persentage2 {
            font-size: 0.9375vw;
            color: #45dcff;
            margin-top: 1vw;
          }
          .tongbizi2 {
            display: inline-block;
            font-size: 0.729vw;
          }
          .xiajiang {
            display: inline-block;
            position: absolute;
            width: 1.3vw;
            height: 1.4vw;
            background: url("../../assets/images/jinchukou/下降.png") no-repeat;
            background-size: 100% 100%;
          }
        } */
        .sanqian2 {
          float: left;
          margin-left: 3.1vw;
          margin-top: -0.6vw;
          font-family: Microsoft YaHei;
          font-weight: bold;
          .shuzhi2 {
            font-size: 1.458vw;
            color: #ff3f2b;
            position: absolute;
            top: 2.65vw;
            left: 21vw;
          }
          .yi5 {
            display: inline-block;
            font-size: 0.833vw;
            margin-left: 13.5vw;
            font-weight: normal;
            position: absolute;
            top: 3.2vw;
          }
          .binianchu2 {
            display: inline-block;
            font-size: 1.094vw;
            margin-top: 0.8vw;
            margin-left: 1vw;
          }
          .shangsheng {
            display: inline-block;
            position: absolute;
            width: 1.6vw;
            height: 1.7vw;
            background: url("../../assets/images/jinchukou/上升.png") no-repeat;
            background-size: 100% 100%;
            top: 2.9vw;
          }
        }
      }
      .row3 {
        position: absolute;
        top: 26.758vw;
        left: 6.016vw;
        .usd {
          font-size: 1.09375vw;
          font-weight: bold;
          margin-top: 1.09375vw;
        }
        .yiwanyi2 {
          float: left;
          font-size: 1.458vw;
          font-weight: bold;
          font-family: Microsoft YaHei;
          padding-left: 0.9vw;
        }
        .yi3 {
          float: left;
          font-size: 0.833vw;
          margin-left: 0.833vw;
          margin-top: 0.6vw;
          font-weight: normal;
        }
        .tongbi3 {
          float: left;
          margin-left: 3.1vw;
          margin-top: -1.7vw;
          font-family: Microsoft YaHei;
          font-weight: bold;
          .persentage3 {
            font-size: 0.9375vw;
            color: #45dcff;
            margin-top: 1vw;
          }
          .tongbizi3 {
            display: inline-block;
            font-size: 0.729vw;
          }
          .xiajiang {
            display: inline-block;
            position: absolute;
            width: 1.3vw;
            height: 1.4vw;
            background: url("../../assets/images/jinchukou/下降.png") no-repeat;
            background-size: 100% 100%;
          }
        }
        .sanqian3 {
          float: left;
          margin-left: 3.1vw;
          margin-top: -0.6vw;
          font-family: Microsoft YaHei;
          font-weight: bold;
          .shuzhi3 {
            font-size: 1.458vw;
            color: #ff3f2b;
            position: absolute;
            top: 2.65vw;
            left: 21vw;
          }
          .yi4 {
            display: inline-block;
            font-size: 0.833vw;
            margin-left: 13.5vw;
            font-weight: normal;
            position: absolute;
            top: 3.2vw;
          }
          .binianchu3 {
            font-size: 1.094vw;
            display: inline-block;
            margin-top: 0.8vw;
            margin-left: 1vw;
          }
          .shangsheng {
            display: inline-block;
            position: absolute;
            width: 1.6vw;
            height: 1.7vw;
            background: url("../../assets/images/jinchukou/上升.png") no-repeat;
            background-size: 100% 100%;
            top: 2.9vw;
          }
        }
      }
    }
    .righttwo {
      width: 48.07vw;
      height: 14.447vw;
      background: url("../../assets/images/jinchukou/Frame 846.png") no-repeat;
      background-size: 100% 100%;
      margin-top: 1.288vw;
      .col1 {
        position: absolute;
        margin-left: 12.302vw;
        margin-top: 0.4vw;
        .dacny {
          // font-size: 2.833vw;
          font-size: 2.033vw;
          font-family: Noto Sans SC;
          font-weight: bold;
        }
        .bennianfazhai {
          font-size: 1.094vw;
          font-weight: bold;
          margin-top: 0.9vw;
          letter-spacing: 2px;
        }
        .fazhai {
          .sanqian4 {
            display: inline-block;
            font-size: 1.875vw;
            font-weight: bold;
          }
          .yi {
            display: inline-block;
            font-size: 0.833vw;
            margin-left: 0.833vw;
          }
        }
        .bennianchangzhai {
          font-size: 1.094vw;
          font-weight: bold;
          margin-top: 0.9vw;
          letter-spacing: 2px;
        }
        .leftchangzhai {
          .sanqian4 {
            display: inline-block;
            font-size: 1.875vw;
            font-weight: bold;
          }
          .yi {
            display: inline-block;
            font-size: 0.833vw;
            margin-left: 0.833vw;
          }
        }
      }
      .col2 {
        position: absolute;
        margin-left: 34.4vw;
        margin-top: 0.4vw;
        .dausd {
          // font-size: 2.833vw;
          font-size: 2.033vw;
          font-family: Noto Sans SC;
          font-weight: bold;
        }
        .bennianfazhai2 {
          font-size: 1.094vw;
          font-weight: bold;
          margin-top: 0.9vw;
          letter-spacing: 2px;
        }
        .fazhai2 {
          .sanqian5 {
            display: inline-block;
            font-size: 1.875vw;
            font-weight: bold;
          }
          .yi {
            display: inline-block;
            font-size: 0.833vw;
            margin-left: 0.833vw;
          }
        }
        .bennianchangzhai2 {
          font-size: 1.094vw;
          font-weight: bold;
          margin-top: 0.9vw;
          letter-spacing: 2px;
        }
        .leftchangzhai2 {
          .sanqian5 {
            display: inline-block;
            font-size: 1.875vw;
            font-weight: bold;
          }
          .yi {
            display: inline-block;
            font-size: 0.833vw;
            margin-left: 0.833vw;
          }
        }
      }
    }
  }
}
</style>