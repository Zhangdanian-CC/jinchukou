<template>
  <div class="container">
    <!-- 头部 -->
    <div class="title-frame">
      <div class="title-left"></div>
      <div class="global-title">政 策 性</div>
      <div class="right-time"></div>
    </div>
    <!-- 左边 -->
    <div class="left-box">
      <div class="content-title-frame">业务余额</div>
      <div class="content-frame">
        <!-- <div class="yue">业务余额</div> -->
        <div class="rectangle">
          <div class="icon100"></div>
          <!-- <div class="rectangle-right">
            <div class="yuezhi">业务余额</div>
            <div>
              <div class="yueyi">2220.67</div>
              <div class="yi">亿</div>
            </div>
          </div> -->
          <div class="rectangle-right2">
            <div class="yuezhi2">表内业务余额</div>
            <div class="zhi">
              <div class="yueyi2">2220.67</div>
              <div class="yi2">亿</div>
            </div>
          </div>
        </div>
        <left-one class="leftone" />
        <left-two class="lefttwo" />
      </div>
    </div>
    <!-- 右边 -->
    <div class="right-box">
      <div class="tab_list">
        <ul>
          <li @click="changedata(1)">
            <div class="box1" :class="{ active: num == 1 }">
              <img src="../../assets/images/jinchukou/branch.png" alt />
              <div class="biaoti">新增业务额</div>
              <div>
                <span class="number">1872.72</span>
                <span class="danwei">亿</span>
              </div>
            </div>
          </li>
          <li @click="changedata(2)">
            <div class="box2" :class="{ active: num == 2 }">
              <img src="../../assets/images/jinchukou/buliangzichan.png" alt />
              <div class="biaoti">新发放业务额</div>
              <div>
                <span class="number">1478.23</span>
                <span class="danwei">亿</span>
              </div>
            </div>
          </li>
          <li @click="changedata(3)">
            <div class="box3" :class="{ active: num == 3 }">
              <img src="../../assets/images/jinchukou/icon04.png" alt />
              <div class="biaoti">占比</div>
              <part-pie class="partpie"></part-pie>
            </div>
          </li>
        </ul>
      </div>

      <div class="tab_con">
        <div class="item" style="display: block">
          <bottom-bar class="bottombar"></bottom-bar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftOne from "../../components/zhengcexing/leftone";
import LeftTwo from "../../components/zhengcexing/lefttwo";
import BottomBar from "../../components/zhengcexing/bottombar";
import PartPie from "../../components/zhengcexing/partpie";

export default {
  mounted() {},
  data() {
    return {
      num: 1,
    };
  },
  computed: {},
  methods: {
    changedata(data) {
      let myCharts = this.$echarts.init(document.getElementById("bottombar"));
      if (data === 1) {
        this.num = 1;
        myCharts.setOption({
          series: [
            {
              data: [80, 77, 67, 64, 58, 53, 47, 42, 38, 28, 24, 18],
              name: "新增业务额",
            },
          ],
        });
      } else if (data === 2) {
        this.num = 2;

        myCharts.setOption({
          series: [
            {
              data: [76, 69, 62, 57, 52, 48, 44, 40, 35, 31, 24, 18],
              name: "新发放业务额",
            },
          ],
        });
      } else if (data === 3) {
        this.num = 3;

        myCharts.setOption({
          series: [
            {
              data: [74, 65, 60, 54, 48, 43, 38, 30, 28, 20, 16, 8],
              name: "各经营单位",
            },
          ],
        });
      }
    },
  },
  beforeDestroy() {},
  components: {
    LeftOne,
    LeftTwo,
    BottomBar,
    PartPie,
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

  // 左边栏
  .left-box {
    width: 28.854vw;
    height: 50.467vw;
    position: absolute;
    top: 4.9vw;
    left: 0.8vw;
    .content-title-frame {
      background: url("../../assets/images/jinchukou/title2@1x.png") no-repeat;
      background-size: 100% 100%;
      padding: 0.6vw 2.8vw;
      width: 100%;
      color: rgba(255, 255, 255, 1);
      font-family: Noto Sans SC Bold;
      font-weight: regular;
      font-size: 1.09375vw;
      font-weight: bold;
      line-height: 1.5166vw;
      letter-spacing: 2px;
      text-align: left;
      height: 2.2vw;
      margin-bottom: 0.416vw;
    }

    .content-frame {
      background: url("../../assets/images/jinchukou/背景框-首屏1.png")
        no-repeat;
      // background: linear-gradient(
      //   97.93deg,
      //   rgba(4, 13, 35, 0.33) 1.29%,
      //   rgba(4, 13, 35, 0.27) 95.96%
      // );
      background-size: 100% 100%;
      width: 100%;
      height: 48.148vw;
      position: relative;
      // .yue {
      //   width: 26.354vw;
      //   padding-left: 1vw;
      //   position: absolute;
      //   top: 0.677vw;
      //   left: 1.25vw;
      //   font-size: 0.9375vw;
      //   font-family: Microsoft YaHei;
      //   letter-spacing: 1px;
      //   font-weight: bold;
      //   background: url("../../assets/images/jinchukou/矩形.png") no-repeat;
      //   background-size: 100% 100%;
      //   position: absolute;
      // }
      .rectangle {
        width: 26.5vw;
        height: 3.49vw;
        padding-left: 1vw;
        position: absolute;
        top: 2.865vw;
        left: 1.25vw;
        background: url("../../assets/images/jinchukou/Rectangle 29.png")
          no-repeat;
        background-size: 100% 100%;
        .icon100 {
          align-items: center;
          width: 2.6vw;
          height: 2.6vw;
          position: absolute;
          top: 0.417vw;
          left: 0.417vw;
          background: url("../../assets/images/jinchukou/icon100.png") no-repeat;
          background-size: 100% 100%;
        }
        /* .rectangle-right {
          display: inline-block;
          position: absolute;
          left: 5.167vw;
          .yuezhi {
            font-size: 0.729vw;
            height: 1.756vw;
            line-height: 1.756vw;
            color: #fff;
            opacity: 0.7;
            font-weight: bold;
            font-family: Microsoft YaHei;
          }
          .yueyi {
            display: inline-block;
            font-size: 1.25vw;
            font-family: Microsoft YaHei;
            height: 1.667vw;
            line-height: 1.458vw;
          }
          .yi {
            display: inline-block;
            font-size: 0.729vw;
            margin-left: 0.833vw;
          }
        } */
        .rectangle-right2 {
          display: inline-block;
          position: absolute;
          left: 6.167vw;
          .yuezhi2 {
            display: inline-block;
            font-size: 1.3vw;
            height: 1.756vw;
            line-height: 1.756vw;
            color: #fff;
            font-weight: bold;
            font-family: Microsoft YaHei;
            margin-top: 0.8vw;
          }
          .zhi {
            display: inline-block;
            margin-left: 1.5vw; 
            .yueyi2 {
              display: inline-block;
              font-size: 1.25vw;
              font-family: Microsoft YaHei;
              height: 1.667vw;
              line-height: 1.458vw;
            }
            .yi2 {
              display: inline-block;
              font-size: 0.729vw;
              margin-left: 0.833vw;
            }
          }
        }
      }
      .leftone {
        height: 20vw;
        width: 26.5vw;
        // padding: 0.9vw 1.8vw;
        // height: 20vw;
        // width: 13.646vw;
        position: absolute;
        top: 7.53vw;
        left: 1vw;
      }
      .lefttwo {
        height: 20vw;
        width: 26.5vw;
        // padding: 0.9vw 1.8vw;
        // height: 20vw;
        // width: 13.646vw;
        position: absolute;
        bottom: 0.5vw;
        left: 1vw;
      }
    }
  }
  // 右边栏
  .right-box {
    width: 68.23vw;
    height: 50.31vw;
    position: absolute;
    left: 30.94vw;
    right: 0.83vw;
    top: 5vw;
    bottom: 1.67vw;
    background: url("../../assets/images/jinchukou/矩形1.png") no-repeat;
    background-size: 100% 100%;

    li {
      list-style-type: none;
      .active {
        background-color: #1454a8;
      }
    }

    .item {
      display: none;
    }
    .box1,
    .box2,
    .box3 {
      float: left;
      width: 19.792vw;
      height: 18.7vw;
      background: url("../../assets/images/jinchukou/销户.png") no-repeat;
      background-size: 100% 100%;
      margin-left: 1.25vw;
      margin-top: 3vw;
      img {
        width: 1.667vw;
        height: 1.667vw;
        line-height: 1.667vw;
        margin-left: 2.479vw;
        margin-top: -0.4vw;
      }
      .biaoti {
        display: inline-block;
        font-size: 1.25vw;
        font-weight: bold;
        color: #b8cbe5;
        margin-left: 0.865vw;
        margin-top: 1.865vw;
      }
      .number {
        height: 2.8125vw;
        line-height: 12.3125vw;
        margin-left: 3.542vw;
        font-family: MicrosoftYaHei;
        font-size: 2.8125vw;
        color: #ffffff;
      }
      .danwei {
        font-size: 0.989vw;
        margin-left: 0.4167vw;
      }
    }
    .box1 {
      margin-left: 3vw;
    }
    .partpie {
      width: 16.667vw;
      height: 10.75vw;
      position: absolute;
      left: 46.5vw;
      top: 8.78vw;
    }
    .bottombar {
      width: 59.375vw;
      height: 21.927vw;
      position: absolute;
      bottom: 3.125vw;
      right: 4.167vw;
    }
  }
}
</style>