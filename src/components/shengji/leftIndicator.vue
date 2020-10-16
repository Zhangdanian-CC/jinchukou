<template>
  <div class="left-indicator">
    <div v-for="item in data" :key="item.key" class="single-indicator">
      <!-- <img class="huan-img" src="Huan" alt /> -->
      <img
        class="huan-icon"
        src="../../assets/images/jinchukou/Frame 848.png"
        alt
      />
      <div class="right">
        <div class="title">{{ item.name }}</div>
        <div class="value-num">{{ item.value }}</div>
        <span class="unit">亿</span>
        <!-- <div class="right-box">
          <div>
            <div class="tongbi">同比</div>
            <i class="shangsheng"></i>
          </div>
          <div class="persentage">{{item.num}}</div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import huan from "../../assets/images/Untitled-huan1.png";
import icon5 from "../../assets/images/jinchukou/icon05.png";
import icon1 from "../../assets/images/jinchukou/icon01.png";
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
          name: "贷款余额",
          value: "10391.15",
          key: "yue",
          num: "16.23%",
        },
        {
          name: "签约贷款金额",
          value: "12451.25",
          key: "dai1",
          num: "19.34%",
        },
        {
          name: "累计发放金额",
          value: "24513.76",
          key: "lei1",
          num: "18.27%",
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
.left-indicator {
  //  margin-left: 1.43vw;
  // margin-top: 3.423vw;
  .single-indicator {
    //     margin-left: 1.43vw;
    // margin-top: 3.423vw;
    position: relative;
    height: 2.916vw;
    // margin-left: 1.43vw;
    // margin-top: 3.423vw;
    width: 100%;
    margin-bottom: 1.19vw;
    .huan-img {
      margin-right: 0.88vw;
      display: inline-block;
      width: 2.86vw;
      height: 2.81vw;

      vertical-align: top;
    }
    .huan-icon {
      //   background: url(" ../../assets/images/jinchukou/Frame 848.png") no-repeat;
      // background-size: 100% 100%;

      position: absolute;
      left: 1vw;
      width: 2.5vw;
      height: 2.5vw;
    }
    .right {
      display: inline-block;
      position: absolute;
      margin-left: 5vw;
      .title {
        color: rgba(255, 255, 255, 1);
        font-family: Microsoft YaHei;
        font-weight: regular;
        font-size: 0.833vw;
        line-height: normal;
        letter-spacing: 0px;
        text-align: left;
      }
      .value {
        color: rgba(255, 166, 101, 1);
        font-family: Microsoft YaHei;
        font-weight: bold;
        font-size: 1.215vw;
        line-height: normal;
        letter-spacing: 0px;
        text-align: left;
      }
      .value-num {
        display: inline-block;
        margin-right: 0.625vw;
        color: #fff;
        font-family: Microsoft YaHei;
        font-weight: bold;
        font-size: 1.458vw;
        height: 1.927vw;
        line-height: 1.927vw;
        text-align: center;
        letter-spacing: 0px;
        text-align: left;
      }
      .unit {
        display: inline-block;
        color: rgba(255, 255, 255, 1);
        font-family: Microsoft YaHei;
        font-weight: regular;
        font-size: 0.833vw;
        line-height: normal;
        letter-spacing: 0px;
        text-align: left;
        margin-right: 1.82vw;
      }
      // .right-box {
      //   position: relative;
      //   float: right;
      //   width: 15.635vw;
      //   height: 11vw;
      //   top: -0.7vw;
      //   .persentage {
      //     display: block;
      //     top: 0.7vw;
      //     font-weight: bold;
      //     font-size: 0.938vw;
      //     height: 1.25vw;
      //     line-height: 1.25vw;
      //     color: #57dfff;
      //   }
      //   .tongbi {
      //     display: inline-block;
      //     font-size: 0.729vw;
      //     height: 0.9375vw;
      //     line-height: 0.9375vw;
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
    }
  }
}
</style>
