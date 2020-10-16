<template>
  <div class="container">
    <!-- 头部 -->
    <div class="title-frame">
      <div class="title-left"></div>
      <div class="global-title">资产质量</div>
      <div class="right-time"></div>
    </div>
    <!-- 第一栏 -->
    <div class="diyilan">
      <div class="title1">四大经济领域</div>
      <div class="leftone">
        <zhiliang-pieone></zhiliang-pieone>
        <section class="select">
          <ul class="radioBox active" id="radioBox">
            <li
              class="radio"
              v-for="(item, index) in radioList"
              @click="addImg(index, item)"
              :key="index"
            >
              <span
                class="chooseIcon"
                :class="radioIndex == index ? 'active' : ''"
              ></span>
              <span class="xuanxiang">{{ item }}</span>
            </li>
          </ul>
        </section>
      </div>
      <div class="title2">境内不良</div>
      <div class="lefttwo">
        <div class="lefttwobox">
          <span class="jingnei">境内不良贷款</span>
          <span class="zhi">450.23</span>
          <span class="yi">亿</span>
        </div>
        <zhiliang-pietwo></zhiliang-pietwo>
      </div>
    </div>
    <!-- 第二栏 -->
    <div class="dierlan">
      <div class="title3">行业TOP10</div>
      <div class="centerone">
        <zhiliang-centerone></zhiliang-centerone>
      </div>
      <div class="title4">境外国家地区不良TOP10</div>
      <div class="centertwo">
        <div class="centertwobox">
          <span class="jingwai">境外不良贷款</span>
          <span class="zhi2">256.23</span>
          <span class="yi2">亿</span>
        </div>
        <zhiliang-centertwo></zhiliang-centertwo>
      </div>
    </div>

    <!-- 第三栏 -->
    <div class="disanlan">
      <div class="title5">各经营单位TOP10</div>
      <div class="rightone">
        <zhiliang-rightone></zhiliang-rightone>
      </div>
      <div class="title6">不良处置金额</div>
      <div class="righttwo">
        <zhiliang-righttwo></zhiliang-righttwo>
      </div>
    </div>
  </div>
</template>

<script>
import ZhiliangPieone from "../../components/zhiliang/zhiliangpieone";
import ZhiliangPietwo from "../../components/zhiliang/zhiliangpietwo";
import ZhiliangCenterone from "../../components/zhiliang/zhiliangcenterone";
import ZhiliangCentertwo from "../../components/zhiliang/zhiliangcentertwo";
import ZhiliangRightone from "../../components/zhiliang/zhiliangrightone";
import ZhiliangRighttwo from "../../components/zhiliang/zhiliangrighttwo";

export default {
  mounted() {},
  components: {
    ZhiliangPieone,
    ZhiliangPietwo,
    ZhiliangCenterone,
    ZhiliangCentertwo,
    ZhiliangRightone,
    ZhiliangRighttwo,
  },
  data() {
    return {
      radioList: [
        "总览",
        "对外投资",
        "对外贸易贷款",
        "对外合作投资",
        "境内对外开发支持贷款",
      ],
      radioIndex: 0, //默认选择第一个
      isBlanced: true, //用于取消选中
    };
  },
  computed: {},
  methods: {
    addImg: function (index, item) {
      let _this = this;
      _this.isBlanced = !_this.isBlanced;
      if (_this.radioIndex == index) {
        if (!_this.isBlanced) {
          _this.radioIndex = -1;
        } else {
          _this.radioIndex = index;
        }
      } else {
        _this.radioIndex = index;
      }

      // 切换数据
      if (index === 0) {
        let chart1 = this.$echarts.init(
          document.getElementById("zhiliangpieone")
        );
        chart1.setOption({
          series: {
            name: "四大经济领域",
            data: [
              { name: "关注", value: 20, per: "20%" },
              { name: "不良", value: 33, per: "33%" },
              { name: "正常", value: 47, per: "47%" },
            ],
          },
        });
      } else if (index === 1) {
        let chart1 = this.$echarts.init(
          document.getElementById("zhiliangpieone")
        );
        chart1.setOption({
           series: {
            name: "四大经济领域",
            data: [
              { name: "关注", value: 30, per: "20%" },
              { name: "不良", value: 13, per: "33%" },
              { name: "正常", value: 57, per: "47%" },
            ],
          },
        });
      } else if (index === 2) {
        let chart1 = this.$echarts.init(
          document.getElementById("zhiliangpieone")
        );
        chart1.setOption({
           series: {
            name: "四大经济领域",
            data: [
              { name: "关注", value: 25, per: "20%" },
              { name: "不良", value: 15, per: "33%" },
              { name: "正常", value: 60, per: "47%" },
            ],
          },
        });
      } else if (index === 3) {
        let chart1 = this.$echarts.init(
          document.getElementById("zhiliangpieone")
        );
        chart1.setOption({
           series: {
            name: "四大经济领域",
            data: [
              { name: "关注", value: 40, per: "20%" },
              { name: "不良", value: 22, per: "33%" },
              { name: "正常", value: 38, per: "47%" },
            ],
          },
        });
      } else if (index === 4) {
        let chart1 = this.$echarts.init(
          document.getElementById("zhiliangpieone")
        );
        chart1.setOption({
           series: {
            name: "四大经济领域",
            data: [
              { name: "关注", value: 31, per: "20%" },
              { name: "不良", value: 19, per: "33%" },
              { name: "正常", value: 60, per: "47%" },
            ],
          },
        });
      }
    },
  },
  beforeDestroy() {},
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
  // 第一栏样式
  .diyilan {
    width: 30.104vw;
    height: 50.208vw;
    // background-color: violet;
    position: absolute;
    margin-left: 0.833vw;
    margin-top: 0.833vw;
    background-color: #fff;
    .title1 {
      width: 30.104vw;
      height: 2.0833vw;
      background: url("../../assets/images/jinchukou/title2备份7.png") no-repeat;
      background-size: 100% 100%;
      font-size: 1.094vw;
      font-weight: bold;
      font-family: Noto Sans SC;
      padding-left: 2.1875vw;
      padding-top: 0.3625vw;
    }
    .leftone {
      width: 30.104vw;
      height: 22.292vw;
      background: url("../../assets/images/jinchukou/背景框-首屏6.png")
        no-repeat;
      background-size: 100% 100%;
      margin-top: 0.3125vw;
      position: relative;
      .select {
        .radioBox {
          position: absolute;
          top: 5.5vw;
          left: 2vw;
          .radio {
            list-style-type: none;
            font-size: 0.833vw;
            font-weight: bold;
            color: #b3bac4;
            padding-top: 0.8vw;
            .chooseIcon {
              width: 1vw;
              height: 1vw;
              display: inline-block;
              background: url("../../assets/images/jinchukou/单选框 未选中.png")
                no-repeat;
              background-size: 100%;
            }

            .chooseIcon.active {
              width: 1vw;
              height: 1vw;
              display: inline-block;
              background: url("../../assets/images/jinchukou/单选框 选中.png")
                no-repeat;
              background-size: 100%;
            }
            .xuanxiang {
              padding-left: 0.5vw;
              padding-top: -0.2vw;
            }
          }
        }
      }
    }
    .title2 {
      width: 30.104vw;
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
    .lefttwo {
      width: 30.104vw;
      height: 22.292vw;
      background: url("../../assets/images/jinchukou/背景框-首屏6.png")
        no-repeat;
      background-size: 100% 100%;
      margin-top: 0.3125vw;
      .lefttwobox {
        width: 28.33vw;
        height: 4.6875vw;
        background: url("../../assets/images/jinchukou/Frame 1704.png")
          no-repeat;
        background-size: 100% 100%;
        position: absolute;
        margin-left: 0.833vw;
        margin-top: 0.833vw;
        .jingnei {
          font-size: 1.09375vw;
          font-weight: bold;
          font-family: Noto Sans SC;
          align-items: center;
          position: absolute;
          margin-top: 1.558vw;
          margin-left: 1.458vw;
        }
        .zhi {
          font-size: 1.875vw;
          font-weight: bold;
          position: absolute;
          margin-left: 13vw;
          margin-top: 1vw;
        }
        .yi {
          font-size: 0.833vw;
          position: absolute;
          margin-top: 2.15vw;
          margin-left: 20vw;
        }
      }
    }
  }
  // 第二栏样式
  .dierlan {
    width: 35.625vw;
    height: 50.208vw;
    // background-color: violet;
    position: absolute;
    margin-left: 32.1875vw;
    margin-top: 0.833vw;
    background-color: #fff;
    .title3 {
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
    .centerone {
      width: 35.625vw;
      height: 22.292vw;
      background: url("../../assets/images/jinchukou/背景框-首屏7.png")
        no-repeat;
      background-size: 100% 100%;
      margin-top: 0.3125vw;
    }
    .title4 {
      width: 35.625vw;
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
    .centertwo {
      width: 35.625vw;
      height: 22.292vw;
      background: url("../../assets/images/jinchukou/背景框-首屏7.png")
        no-repeat;
      background-size: 100% 100%;
      margin-top: 0.3125vw;
      .centertwobox {
        width: 32.65625vw;
        height: 4.6875vw;
        background: url("../../assets/images/jinchukou/Frame 1704.png")
          no-repeat;
        background-size: 100% 100%;
        position: absolute;
        margin-left: 1.615vw;
        margin-top: 0.9375vw;
        .jingwai {
          font-size: 1.09375vw;
          font-weight: bold;
          font-family: Noto Sans SC;
          align-items: center;
          position: absolute;
          margin-top: 1.558vw;
          margin-left: 1.458vw;
        }
        .zhi2 {
          font-size: 1.875vw;
          font-weight: bold;
          position: absolute;
          margin-left: 13vw;
          margin-top: 1vw;
        }
        .yi2 {
          font-size: 0.833vw;
          position: absolute;
          margin-top: 2.15vw;
          margin-left: 20vw;
        }
      }
    }
  }
  // 第三栏样式
  .disanlan {
    width: 30.104vw;
    height: 50.208vw;
    // background-color: violet;
    position: absolute;
    margin-left: 69.0625vw;
    margin-top: 0.833vw;
    background-color: #fff;
    .title5 {
      width: 30.104vw;
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
      width: 30.104vw;
      height: 22.292vw;
      background: url("../../assets/images/jinchukou/背景框-首屏8.png")
        no-repeat;
      background-size: 100% 100%;
      margin-top: 0.3125vw;
    }
    .title6 {
      width: 30.104vw;
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
      width: 30.104vw;
      height: 22.292vw;
      background: url("../../assets/images/jinchukou/背景框-首屏8.png")
        no-repeat;
      background-size: 100% 100%;
      margin-top: 0.3125vw;
    }
  }
}
</style>