<template>
  <div class="left-indicator">
    <!-- <div class="single-indicator">
      <img class="huan-img" :src="Huan" alt />
      <img class="huan-icon" :src="Icon5" alt />
      <div class="right">
        <div class="title">国别风险登记</div>
        <div class="value">高风险</div>
      </div>
    </div>-->
    <div v-for="item in data" :key="item.key" class="single-indicator">
      <img class="huan-img" src="../../assets/images/jinchukou/Frame 758.png" alt />
      <!-- <img class="huan-icon" :src="Icon1" alt /> -->
      <div class="right">
        <div class="title">{{item.name}}</div>
        <div class="value-num">{{item.value}}</div>
        <span class="unit">亿</span>
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
          name: "签约贷款金额",
          value: "1024.78",
          key: "dai1",
        },
        {
          name: "累计发放金额",
          value:"  783.49",
          key: "lei1",
        },
        {
          name: "信贷余额",
          value: "2001.73",
          key: "yu1",
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
  background: url("../../assets/images/jinchukou/Rectangle-54@1x.png") no-repeat;
  background-size: 100% 100%;
  padding: 2.5vw 2.031vw;
  .single-indicator {
    position: relative;
    height: 2.8125vw;
    width: 100%;
    margin-top: 1.09vw;
    .huan-img {
      margin-right: 0.7812vw;
      display: inline-block;
      width: 2.8125vw;
      height: 2.8125vw;
      vertical-align: top;
    }
    // .huan-icon {
    //   position: absolute;
    //   top: 0.7812vw;
    //   left: 0.7812vw;
    //   width: 1.25vw;
    //   height: 1.25vw;
    // }
    .right {
      // position: relative;
      display: inline-block;
  
      .title {
        color: rgba(255, 255, 255, 1);
        font-family: Microsoft YaHei;
        font-weight: regular;
        font-size: 1.09vw;
        line-height: normal;
        letter-spacing: 0px;
        text-align: left;
      }
      .value {
        color: rgba(255, 166, 101, 1);
        font-family: Microsoft YaHei;
        font-weight: bold;
        font-size: 1.09vw;
        line-height: normal;
        letter-spacing: 0px;
        text-align: left;
      }
      .value-num {
        display: inline-block;
        margin-right: 0.7812vw;
        color: rgba(123, 247, 255, 1);
        font-family: Microsoft YaHei;
        font-weight: bold;
        font-size: 1.562vw;
        line-height: normal;
        letter-spacing: 0px;
        width:2vw;
        text-align: right;
      }
      .value-num:nth-child(2){
        width:7vw;
        text-align: right;
      }
      .unit {
        display: inline-block;
        color: rgba(255, 255, 255, 1);
        font-family: Microsoft YaHei;
        font-weight: regular;
        font-size: 1.25vw;
        line-height: normal;
        letter-spacing: 0px;
        width:0.5vw;
        text-align: right;
      }
    }
  }
}
</style>
