<template>
  <div class="right-indicator">
    <div v-for="item in data" :key="item.key" class="single-indicator">
      <img class="huan-img" :src="item.img" alt />
      <!-- <img class="huan-icon" :src="Icon1" alt /> -->
      <div class="right">
        <div class="title">{{ item.name }}</div>
        <div class="value">{{ item.value }}</div>
        <!-- <span class="unit">亿</span> -->
        <div class="fubox">
          <div class="huanbi">
            <span class="unit">比年初</span>
            <i class="shangsheng"></i>
            <div class="value-num">{{ item.num }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import huan from "../../assets/images/Untitled-huan1.png";
import icon5 from "../../assets/images/jinchukou/bulianglv.png";
import icon1 from "../../assets/images/jinchukou/buliangzichan.png";
export default {
  name: "",
  props: [],
  mounted() {},
  data() {
    return {
      Huan: huan,
      Icon5: icon5,
      Icon1: icon1,
      data: [
        {
          name: "不良贷款余额",
          value: "675.23亿",
          key: "dai1",
          num: "2.34%",
          img: icon1,
        },
        {
          name: "不良率",
          value: "16.35%",
          key: "lei1",
          num: "3.61%",
          img: icon5,
        },
      ],
    };
  },
  computed: {},
  methods: {},
  components: {},
};
</script>

<style lang="less" scoped>
.right-indicator {
  .single-indicator {
    position: relative;
    height: 4.375vw;
    width: 100%;
    margin-bottom: 0.4166vw;
    background: url("../../assets/images/jinchukou/xiaohu.png") no-repeat;
    background-size: 100% 100%;
    padding: 0.2125vw;
    display: flex;
    .huan-img {
      // margin-right: 0.1645vw;
      display: inline-block;
      width: 1.2166vw;
      height: 1.2166vw;
      vertical-align: top;
    }
    .right {
      // display: flex;
      // flex-flow: column;
      // justify-content: space-around;
      // align-items: flex-start;
      // padding: 0.35vw 0;
      // width: 70%;
      .title {
        color: rgba(255, 255, 255, 1);
        font-family: Microsoft YaHei;
        font-weight: regular;
        font-size: 0.941vw;
        transform: scale(0.85);
        line-height: normal;
        letter-spacing: 0px;
        text-align: left;
      }
      .value {
        display: inline-block;
        color: rgba(255, 166, 101, 1);
        font-family: Microsoft YaHei;
        font-weight: bold;
        font-size: 1.041vw;
        transform: scale(0.85);
        line-height: normal;
        letter-spacing: 0px;
        text-align: left;
        margin-right: 0.365vw;
      }

      .fubox {
        .huanbi {
          // display: inline-block;
          width: 6.5vw;
          margin-top: -0.3vw;
          .unit {
            display: inline-block;
            color: rgba(255, 255, 255, 0.7);
            font-family: Microsoft YaHei;
            font-weight: regular;
            font-size: 1.041vw;
            transform: scale(0.7);
            letter-spacing: 0px;
            text-align: left;
            margin-left: -1vw;
          }
          .shangsheng {
            display: inline-block;
            position: absolute;
            width: 1.1vw;
            height: 1.2vw;
            background: url("../../assets/images/jinchukou/上升.png") no-repeat;
            background-size: 100% 100%;
            margin-top: 0.2vw;
            margin-left: -0.5vw;
          }
          .value-num {
            display: inline-block;
            // margin-left: 0.3645vw;
            color: #ff3f2b;
            font-weight: bold;
            font-family: Microsoft YaHei;
            font-weight: bold;
            font-size: 1.041vw;
            transform: scale(0.7);
            line-height: normal;
            letter-spacing: 0px;
            text-align: left;
            margin-left: 0.3vw;
          }
        }
      }
    }
  }
}
</style>
