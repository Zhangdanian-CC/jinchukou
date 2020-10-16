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
      <div class="lefttwo"></div>
    </div>
    <!-- 第二栏 -->
    <div class="dierlan">
      <div class="title3">行业TOP10</div>
      <div class="centerone"></div>
      <div class="title4">境外国家地区不良TOP10</div>
      <div class="centertwo"></div>
    </div>

    <!-- 第三栏 -->
    <div class="disanlan">
      <div class="title5">各经营单位TOP10</div>
      <div class="rightone"></div>
      <div class="title6">经营单位TOP10</div>
      <div class="righttwo"></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {},
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
      //选择支付方式
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
    },
  },
  beforeDestroy() {},
  components: {},
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
      .select {
        .radioBox {
          position: absolute;
          top: 7vw;
          left:2vw;
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
            .xuanxiang{
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