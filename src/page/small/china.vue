<template>
  <div class="container">
    <!-- 头部 -->
    <div class="title-frame">
      <div class="title-left"></div>
      <div class="global-title">中国进出口银行</div>
      <div class="right-time"></div>
    </div>
    <!-- <world-chart class="world-chart" /> -->
    <div class="side-div left-side">
      <div class="left-one">
        <div class="content-title-frame">贷款实时数据</div>
        <div class="content-frame">
          <left-indicator class="left-indicator" />
        </div>
      </div>
      <div class="left-two">
        <div class="content-title-frame">机构排名</div>
        <div class="content-frame">
          <column-box class="column-box" ids="left2" :chartData="[]" />
          <column-indicator class="column-indicator" :chartData="[]" />
        </div>
      </div>
      <div class="left-three">
        <div class="content-title-frame">每月走势图</div>
        <div class="content-frame">
          <column-line class="column-line" ids="left3" :chartData="[]" />
        </div>
      </div>
    </div>
    <img class="tese-img" :src="Tese" alt @click="jump" />
    <map-chart class="map-charts" />
    <div class="paris"></div>
    <div class="bottom-left-ind">
      <span class="ind-name">巴黎分行</span>
      <span class="ind-val">50亿</span>
    </div>
    <div class="bottom-side">
      <div class="bottom-title">两类业务分析</div>
      <div class="air-span"></div>
      <pie-chart class="pie-chart" ids="pieChart" :chartData="[]" />
      <img class="divisition" :src="Divisition" alt />
      <merge-column class="merge-chart" ids="mergeColumn" :chartData="[]" />
      <bottom-indicator class="bottom-indicator" />
    </div>
    <div class="side-div right-side">
      <div class="right-one">
        <div class="content-title-frame">资产效益</div>
        <div class="content-frame">
          <div class="indi-box">
            <div class="indi-single" v-for="item in rightIndi" :key="item.name">
              <img class="img-span" :src="item.img" alt />
              <div class="shouru-span">
                <span class="item-name">{{ item.name }}</span>
                <span class="item-value">{{ item.value }}</span>
                <span class="item-unit">亿</span>
              </div>
              <!-- <div class="right-span">
                <div>
                  <span class="right-name">同比</span>
                  <i class="shangsheng"></i>
                </div>
                <span class="right-perc">{{ item.perc }}</span>
              </div> -->
            </div>
          </div>
          <!-- <right-one-chart class="column-line" ids="right1" :chartData="[]" /> -->
        </div>
      </div>
      <!-- <div class="right-two">
        <div class="content-title-frame">利息净收入</div>
        <div class="content-frame">
          <right-two-chart class="column-line" ids="right2" :chartData="[]" />
        </div>
      </div>-->
      <div class="right-three">
        <div class="content-title-frame">资产质量</div>
        <div class="content-frame">
          <right-three-indicator class="right-ind" />
          <!-- <right-line class="right-line" ids="right3Line" :chartData="[]" /> -->
          <!-- <right-color-line
            class="right-color-line"
            ids="right3ColorLine"
            :chartData="[]"
          /> -->
        </div>
      </div>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">结构分析</div>
        <div class="swiper-slide">中小微</div>
        <div class="swiper-slide">民营企业</div>
        <div class="swiper-slide">制造升级</div>
        <div class="swiper-slide">绿色</div>
        <div class="swiper-slide">国际产能</div>
        <div class="swiper-slide">一带一路</div>
        <div class="swiper-slide">对外贸易</div>
        <div class="swiper-slide">走出去</div>
        <div class="swiper-slide">政策性</div>
      </div>
    </div>
  </div>
</template>

<script>
import Tese from "../../assets/images/jinchukou/Untitled-水波.png";
import Divisition from "../../assets/images/jinchukou/Rectangle-32@1x.png";

import Money from "../../assets/images/jinchukou/right1.png";
import Bill from "../../assets/images/jinchukou/right2.png";
import Trend from "../../assets/images/jinchukou/right3.png";

import LeftIndicator from "../../components/china/leftIndicator.vue";
import BottomIndicator from "../../components/china/bottomIndicator.vue";
import ColumnBox from "../../components/china/columnBox.vue";
import ColumnLine from "../../components/china/columnLine.vue";
import RightOneChart from "../../components/china/rightOneColumnLine.vue";
import RightLine from "../../components/china/rightLine.vue";
import RightColorLine from "../../components/china/rightColorLine.vue";
import RightTwoChart from "../../components/china/rightTwoColumnLine.vue";
import RightThreeIndicator from "../../components/china/rightThreeIndicator.vue";
import ColumnIndicator from "../../components/china/columnIndicator.vue";
import MapChart from "../../components/china/mapChart.vue";
import PieChart from "../../components/china/pieChart.vue";
import MergeColumn from "../../components/china/mergeColumnBox.vue";
import Swiper from "swiper";
import "swiper/swiper.less";
export default {
  data() {
    return {
      Tese: Tese,
      Divisition: Divisition,
      rightIndi: [
        {
          name: "营业收入",
          value: "608.53",
          perc: "23.2%",
          img: Money,
        },
        {
          name: "营业支出",
          value: "527.20",
          perc: "13.4%",
          img: Bill,
        },
        {
          name: "利润总额",
          value: "46.21",
          perc: "29.1%",
          img: Trend,
        },
      ],
      bannerList: [
        "../../assets/images/jinchukou/right1.png",
        "../../assets/images/jinchukou/right2.png",
        "../../assets/images/jinchukou/right3.png",
      ],
    };
  },
  computed: {},
  methods: {
    jump() {
      this.$router.push("/manage/tese");
    },
  },
  mounted: function () {
    document.getElementsByTagName("body")[0].className = "new-body";
    // 轮播
    var mySwiper = new Swiper(".swiper-container", {
      direction: "vertical", // 垂直切换选项
      loop: true, // 循环模式选项
      // notNextTick: true,
      autoplay: true,
      //  {
      //   disableOnInteraction: false, // 用户操作swiper之后，是否禁止autoplay （没有加入之前轮播图设置 autoplay：true无效）
      //   delay: 200, // 自动切换的时间间隔（单位ms）
      // },
    });
    // console.log(mySwiper);
  },

  beforeDestroy() {
    document.body.removeAttriyarnbute("class", "new-body");
  },
  components: {
    MapChart,
    LeftIndicator,
    BottomIndicator,
    ColumnBox,
    ColumnIndicator,
    ColumnLine,
    RightOneChart,
    RightTwoChart,
    RightThreeIndicator,
    RightLine,
    RightColorLine,
    PieChart,
    MergeColumn,
    Swiper,
  },
};
</script>

<style lang="less">
.new-body {
  // zoom: 1;
  // transform: scale(0.33333333);
  // transform-origin: 0 0;
  // font-size: 67.5%;
}
.container {
  // width: 3840px;
  // height: 2160px;
  width: 100vw;
  min-height: 100vh;
  position: relative;

  background: url("../../assets/images/jinchukou/bg@1x.png") no-repeat;
  background-size: 100% 100%;
  // font-size: 28px;
  color: #fff;
  overflow: hidden;
  font-family: Microsoft YaHei;

  -ms-text-size-adjust: auto;
  -webkit-text-size-adjust: auto;
  // 标题样式
  .title-frame {
    width: 100vw;
    height: 3.937vw;
    line-height: 3.237vw;
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

  .tese-img {
    height: 6.4vw;
    width: 6.4vw;
    position: absolute;
    top: 4.1625vw;
    left: 26vw;
    cursor: pointer;
    z-index: 10;
  }
  // 特色业务
  .swiper-container {
    position: absolute;
    left: 26.99vw;
    top: 6.28vw;
    width: 4.4vw;
    height: 2vw;
    font-size: 0.95vw;
    font-weight: bold;
    color: #22ecfd;
    line-height: 2vw;
    text-align: center;
    // z-index: 11;
  }
  // 特色业务
  .paris {
    position: absolute;
    left: 36vw;
    top: 32.6vw;
    width: 6.5vw;
    height: 7vw;
    background: url("../../assets/images/jinchukou/paris.png") no-repeat;
    background-size: 100% 100%;
  }
  .bottom-left-ind {
    position: absolute;
    left: 35vw;
    top: 40vw;
    .ind-name {
      display: inline-block;
      margin-right: 1vw;
      color: rgba(255, 255, 255, 0.8);
      font-family: Microsoft YaHei;
      font-weight: bold;
      font-size: 1.215vw;
      line-height: normal;
      letter-spacing: 0px;
      text-align: left;
    }
    .ind-val {
      display: inline-block;
      margin-right: 1vw;
      color: rgba(255, 171, 48, 1);
      font-family: Microsoft YaHei;
      font-weight: bold;
      font-size: 1.215vw;
      line-height: normal;
      letter-spacing: 0px;
      text-align: left;
    }
  }

  .map-charts {
    position: absolute;
    left: 13.7vw;
    top: 1.77vw;
    width: 73vw;
    height: 42.8vw;
  }

  .side-div {
    width: 23.75vw;
    height: 52vw;
    z-index: 10;
  }
  .left-side {
    position: absolute;
    top: 3.15vw;
    left: 0.8vw;
    .content-title-frame {
      background: url("../../assets/images/jinchukou/title2@1x.png") no-repeat;
      background-size: 100% 100%;
      padding: 0.6vw 2.3vw;
      width: 100%;
      color: rgba(255, 255, 255, 1);
      font-family: Noto Sans SC Bold;
      font-weight: bold;
      font-weight: regular;
      font-size: 0.8645vw;
      line-height: 1.2166vw;
      letter-spacing: 2px;
      text-align: left;
      height: 2vw;
      margin-bottom: 0.416vw;
    }
    .left-one {
      position: absolute;
      left: 0;
      top: 0;
      height: 11.5vw;
      width: 100%;
      .content-frame {
        background: url("../../assets/images/jinchukou/bj-@1x.png") no-repeat;
        background-size: 100% 100%;
        width: 100%;
        height: 13vw;
        .left-indicator {
          height: 100%;
          width: 100%;
          padding: 0.9vw 1.8vw;
        }
      }
    }
    .left-two {
      position: absolute;
      left: 0;
      top: 16vw;
      height: 19.58vw;
      width: 100%;
      .content-frame {
        background: url("../../assets/images/jinchukou/framebg2.png") no-repeat;
        background-size: 100% 100%;
        padding: 0.83vw;
        width: 100%;
        height: 17vw;
        .column-box {
          width: 21.5vw;
          height: 9.37vw;
        }
        .column-indicator {
          width: 100%;
          height: 4.32vw;
          margin-top: 0.88vw;
        }
      }
    }
    .left-three {
      position: absolute;
      left: 0;
      top: 36vw;
      height: 16.35vw;
      width: 100%;
      background-color: #fff;
      .content-frame {
        background: url("../../assets/images/jinchukou/framebg2.png") no-repeat;
        background-size: 100% 100%;
        width: 100%;
        height: 17vw;
        padding: 0.83vw;
        .column-line {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .bottom-side {
    position: absolute;
    width: 47.6vw;
    height: 13.56vw;
    top: 42vw;
    left: 26vw;
    background: url("../../assets/images/jinchukou/framebg2.png") no-repeat;
    background-size: 100% 100%;
    padding: 0.83vw 0.75vw;
    z-index: 10;
    background-color: #fff;
    .bottom-title {
      background: url("../../assets/images/jinchukou/title3@1x.png") no-repeat;
      background-size: 100% 100%;
      position: absolute;
      font-size: 0.8645vw;
      font-weight: bold;
      padding: 0.6vw 2.3vw;
      width: 98.5%;
      height: 2vw;
    }
    .air-span {
      width: 100%;
      height: 2.6vw;
    }
    .pie-chart {
      display: inline-block;
      width: 15.93vw;
      height: 9.63vw;
    }
    .merge-chart {
      display: inline-block;
      width: 19.23vw;
      height: 9.63vw;
      margin-left: 0.3vw;
    }
    .bottom-indicator {
      display: inline-block;
      width: 9vw;
      height: 9.63vw;
      vertical-align: top;
      margin-left: 0.3vw;
    }
    .divisition {
      display: inline-block;
      width: 0.2083vw;
      height: 9.48vw;
      vertical-align: top;
    }
  }
  .right-side {
    position: absolute;
    top: 3.15vw;
    right: 0.83vw;
    .content-title-frame {
      background: url("../../assets/images/jinchukou/title2@1x.png") no-repeat;
      background-size: 100% 100%;
      padding: 0.6vw 2.3vw;
      width: 100%;
      color: rgba(255, 255, 255, 1);
      font-family: Noto Sans SC Bold;
      font-weight: bold;
      font-weight: regular;
      font-size: 0.8645vw;
      line-height: 1.2166vw;
      letter-spacing: 2px;
      text-align: left;
      height: 2vw;
      margin-bottom: 0.4vw;
    }
    .right-one {
      position: absolute;
      left: 0;
      top: 0;
      height: 25.6vw;
      width: 100%;
      .content-frame {
        background: url("../../assets/images/jinchukou/framebg2.png") no-repeat;
        background-size: 100% 100%;
        width: 100%;
        padding: 0.83vw;
        height: 23vw;
        .indi-box {
          width: 100%;
          height: 50%;
          .indi-single {
            height: 30%;
            width: 100%;
            background: url("../../assets/images/jinchukou/xiaohu-frame.png")
              no-repeat;
            background-size: 100% 100%;
            margin-bottom: 0.52vw;
            display: flex;
            align-items: center;
            .img-span {
              display: inline-block;
              width: 2.5vw;
              height: 2.5vw;
              margin-left: 2.5vw;
            }
            .shouru-span {
              display: inline-block;
              width: 11.01vw;
              height: 100%;
              vertical-align: top;
              padding: 0 2.2vw;
              .item-name {
                display: inline-block;
                font-size: 1.041vw;
                position: absolute;
                margin-top: 0.95vw;
                margin-left: -0.5vw;
              }
              .item-unit {
                display: inline-block;
                font-size: 1.041vw;
                text-align: right;
                width: 0.5vw;
                text-align: right;
                position: absolute;
                margin-top: 0.95vw;
                margin-left: 9.3vw;
              }
              .item-value {
                display: inline-block;
                color: rgba(255, 166, 101, 1);
                font-size: 1.041vw;
                position: absolute;
                margin-top: 0.95vw;
                margin-left: 5vw;
                width: 4vw;
                text-align: right;
              }
              .item-value:nth-child(3) {
                width: 5vw;
                text-align: right;
              }
            }
            // .right-span {
            //   display: flex;
            //   width: 6.609vw;
            //   height: 100%;
            //   flex-flow: column;
            //   .right-name {
            //     display: inline-block;
            //     color: rgba(255, 255, 255, 0.7);
            //     margin-right: 0.52vw;
            //     font-size: 1.041vw;
            //     margin-top: 0.3vw;
            //   }
            //   .shangsheng {
            //     display: inline-block;
            //     position: absolute;
            //     width: 1.3vw;
            //     height: 1.4vw;
            //     background: url("../../assets/images/jinchukou/上升.png")
            //       no-repeat;
            //     background-size: 100% 100%;
            //     margin-top: 0.3vw;
            //     margin-left: -0.5vw;
            //   }
            //   .right-perc {
            //     display: inline-block;
            //     font-size: 1.041vw;
            //   }
            // }
          }
        }
        .column-line {
          width: 100%;
          height: 50%;
        }
      }
    }
    .right-two {
      position: absolute;
      left: 0;
      top: 13vw;
      height: 11.53vw;
      width: 100%;
      .content-frame {
        background: url("../../assets/images/jinchukou/framebg2.png") no-repeat;
        background-size: 100% 100%;
        width: 100%;
        height: 9.86vw;
        padding: 0.83vw;
        .column-line {
          width: 100%;
          height: 50%;
        }
      }
    }
    .right-three {
      position: absolute;
      left: 0;
      top: 26vw;
      height: 26.82vw;
      width: 100%;
      .content-frame {
        background: url("../../assets/images/jinchukou/framebg2.png") no-repeat;
        background-size: 100% 100%;
        width: 100%;
        height: 24.14vw;
        padding: 0.83vw;
        .right-ind {
          display: inline-block;
          width: 7.29vw;
          height: 9.166vw;
          vertical-align: top;
          margin-right: 0.625vw;
        }
        .right-line {
          display: inline-block;
          width: 13.95vw;
          height: 9.166vw;
        }
        .right-color-line {
          width: 100%;
          height: 12vw;
          margin-top: 0.8vw;
        }
      }
    }
  }
}
</style>