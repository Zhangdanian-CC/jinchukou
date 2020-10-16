<template>
  <div class="container">
    <!-- 头部 -->
    <div class="title-frame">
      <div class="title-left"></div>
      <div class="global-title">民营企业</div>
      <div class="right-time"></div>
    </div>
    <!-- 左边 -->
    <div class="left">
      <div class="image">贷款余额分析</div>
      <div class="lefttwo">
        <div class="frame"></div>
        <div class="blocktwo">
          <div class="yue">贷款余额</div>
          <div class="yiqianwu">1568.12</div>
          <div class="wan">亿</div>
        </div>
        <div class="blockthree">
          <!-- <div class="yikuai">
            <div class="wushier">52.21%</div>
            <div>
              <div class="huanbi">环比</div>
              <i class="shangsheng"></i>
            </div>
          </div>
          <div class="erkuai">
            <div class="shiliu">16.23%</div>
            <div>
              <div class="tongbi">同比</div>
              <i class="shangsheng"></i>
            </div>
          </div> -->
          <div class="sankuai">
            <div class="sanqian">3000</div>
            <div class="yi">亿</div>
            <div class="box">
              <div class="binianchu">比年初</div>
              <i class="shangsheng"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="leftthree">
        <minying-leftone></minying-leftone>
        <minying-lefttwo></minying-lefttwo>
        <!-- <minying-leftthree></minying-leftthree> -->
      </div>
    </div>
    <!-- 右边 -->
    <div class="right">
      <div class="image2">签约贷款分析</div>
      <div class="rightone">
        <minying-rightone></minying-rightone>
        <minying-righttwo></minying-righttwo>
      </div>
      <div class="image3">发放贷款分析</div>
      <div class="righttwo">
        <minying-rightthree></minying-rightthree>
        <minying-rightfour></minying-rightfour>
      </div>
    </div>
  </div>
</template>

<script>
// import LeftOne from "@/components/zhongxiaowei/leftOne.vue";
import MinyingLeftone from "../../components/minying/minyingleftone";
import MinyingLefttwo from "../../components/minying/minyinglefttwo";
// import MinyingLeftthree from "../../components/minying/minyingleftthree";
import MinyingRightone from "../../components/minying/minyingrightone";
import MinyingRighttwo from "../../components/minying/minyingrighttwo";
import MinyingRightthree from "../../components/minying/minyingrightthree";
import MinyingRightfour from "../../components/minying/minyingrightfour";

export default {
  mounted() {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  beforeDestroy() {},
  components: {
    MinyingLeftone,
    MinyingLefttwo,
    // MinyingLeftthree,
    MinyingRightone,
    MinyingRighttwo,
    MinyingRightthree,
    MinyingRightfour,
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
  // 左边样式
  .left {
    // background-color: pink;
    height: 49vw;
    width: 48.125vw;
    position: absolute;
    margin-left: 1vw;
    margin-top: 1.315vw;
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
    .lefttwo {
      width: 48.07vw;
      height: 8.3125vw;
      margin-top: 1.3125vw;
      background: url("../../assets/images/jinchukou/Group 51.png") no-repeat;
      background-size: 100% 100%;
      font-family: Microsoft YaHei;
      .frame {
        float: left;
        width: 5.127vw;
        height: 5.127vw;
        margin-top: 1.6125vw;
        margin-left: 3vw;
        background: url("../../assets/images/jinchukou/Frame.png") no-repeat;
        background-size: 100% 100%;
      }
      .blocktwo {
        width: 8.65625vw;
        height: 2.083vw;
        float: left;
        margin-left: 3vw;
        margin-top: 2.09375vw;
        .yue {
          font-size: 1.458vw;
          font-weight: bold;
        }
        .yiqianwu {
          float: left;
          font-size: 1.667vw;
          font-weight: bold;
        }
        .wan {
          float: left;
          margin-left: 0.677vw;
          font-size: 0.833vw;
          margin-top: 0.8vw;
        }
      }
      .blockthree {
        float: left;
        width: 23.75vw;
        height: 4.6875vw;
        background-size: 100% 100%;
        margin-top: 2.4375vw;
        // margin-left: 6.2vw;
        /* .yikuai {
          float: left;
          width: 4.635vw;
          height: 2.8125vw;
          margin-left: 1.771vw;
          margin-top: 0.8vw;
          .wushier {
            font-size: 1.25vw;
            font-weight: bold;
            background-image: -webkit-linear-gradient(top, #ffdec7, #f08d6e);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .huanbi {
            float: left;
            font-size: 0.729vw;
            font-weight: bold;
          }
          .shangsheng {
            position: absolute;
            width: 1.3vw;
            height: 1.4vw;
            background: url("../../assets/images/jinchukou/上升.png") no-repeat;
            background-size: 100% 100%;
            margin-top: -0.15vw;
          }
        }
        .erkuai {
          float: left;
          width: 4.635vw;
          height: 2.8125vw;
          margin-left: 2.5vw;
          margin-top: 0.8vw;
          .shiliu {
            font-size: 1.25vw;
            font-weight: bold;
            background-image: -webkit-linear-gradient(top, #c7efff, #22d7ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .tongbi {
            float: left;
            font-size: 0.729vw;
            font-weight: bold;
          }
          .shangsheng {
            position: absolute;
            width: 1.3vw;
            height: 1.4vw;
            background: url("../../assets/images/jinchukou/上升.png") no-repeat;
            background-size: 100% 100%;
            margin-top: -0.15vw;
          }
        } */
        .sankuai {
          float: left;
          width: 10.635vw;
          height: 2.8125vw;
          margin-left: 2.8125vw;
          margin-top: 0.7vw;
          .sanqian {
            display: inline-block;
            font-size: 1.45vw;
            font-weight: bold;
            color: #ff3f2b;
            position: absolute;
            left: 33vw;
            top: 6.3vw;
          }
          .yi {
            display: inline-block;
            font-size: 0.833vw;
            color: #fff;
            position: absolute;
            left: 37vw;
            top: 6.9vw;
          }
          .box {
            display: inline-block;
            position: absolute;
            left: 26vw;
            .binianchu {
              float: left;
              font-size: 1.09375vw;
              font-weight: bold;
            }
            .shangsheng {
              position: absolute;
              width: 1.6vw;
              height: 1.7vw;
              background: url("../../assets/images/jinchukou/上升.png")
                no-repeat;
              background-size: 100% 100%;
              // margin-top: -0.15vw;
            }
          }
        }
      }
    }
    .leftthree {
      width: 48.07vw;
      height: 36.5vw;
      margin-top: 1.3125vw;
      background: url("../../assets/images/jinchukou/背景框-首屏4.png")
        no-repeat;
      background-size: 100% 100%;
    }
  }
  // 右边样式
  .right {
    // background-color: pink;
    width: 48.125vw;
    height: 49vw;
    position: absolute;
    margin-left: 51vw;
    margin-top: 1.315vw;
    .image2 {
      width: 48.125vw;
      height: 2.083vw;
      background: url("../../assets/images/jinchukou/title2.png") no-repeat;
      background-size: 100% 100%;
      font-size: 1.094vw;
      font-weight: bold;
      font-family: Noto Sans SC;
      padding-left: 2.1875vw;
      padding-top: 0.4vw;
    }
    .rightone {
      width: 48.07vw;
      height: 21.829vw;
      margin-top: 0.3125vw;
      background: url("../../assets/images/jinchukou/背景框-首屏5.png")
        no-repeat;
      background-size: 100% 100%;
    }
    .image3 {
      width: 48.125vw;
      height: 2.083vw;
      background: url("../../assets/images/jinchukou/title2.png") no-repeat;
      background-size: 100% 100%;
      font-size: 1.094vw;
      font-weight: bold;
      font-family: Noto Sans SC;
      padding-left: 2.1875vw;
      padding-top: 0.4vw;
      margin-top: 1vw;
    }
    .righttwo {
      width: 48.07vw;
      height: 21.829vw;
      margin-top: 0.3125vw;
      background: url("../../assets/images/jinchukou/背景框-首屏5.png")
        no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>