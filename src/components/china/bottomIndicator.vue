<template>
  <div class="indicator-box">
    <div
      v-for="(item, index) in data"
      :key="index"
      class="single-indicator-box"
    >
      <span class="indicator-title">{{ item.name }}</span>
      <div class="indicator-content">
        <span class="hb">比上期</span>
        <i class="shangsheng"></i>
        <span class="sz">{{ item.value1 }}</span>
        <span class="hb-1">比年初</span>
        <i class="shangsheng1"></i>
        <span class="sz-1">{{ item.value2 }} 亿</span>
        <!-- <span class="content-num">{{item.value2}}</span> -->
        <!-- <img class="hb-img" :src="imgYear[item.keyV]" alt /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: ["ids", "chartData"],
  mounted() {
    // for (let i in this.ids) {
    //   this.initData(this.ids[i], this.chartData, i);
    //   this.initIndicator(this.ids[i], this.leftIndicator, i);
    // }
  },
  data() {
    return {
      data: [
        {
          name: "政策性业务余额",
          value1: "22.35%",
          value2: "2102.47",
        },
        {
          name: "自营性业务余额",
          value1: "19.68%",
          value2: "2532.95",
        },
      ],

      indData: {
        plan: 0,
        actual: 0,
      },
      indicatorYear: {
        plan: 0,
        actual: 0,
      },
      imgYear: {
        plan: null,
        actual: null,
      },
    };
  },
  computed: {},
  methods: {},
  components: {},
  watch: {
    chartData: function (newVal) {
      //   for (let i in this.ids) {
      //     this.initData(this.ids[i], newVal, i);
      //     this.initIndicator(this.ids[i], this.leftIndicator, i);
      //   }
    },
  },
};
</script>

<style lang="less" scoped>
.single-indicator-box {
  width: 100%;
  height: 4.322vw;
  margin-bottom: 0.7812vw;
  background: url("../../assets/images/jinchukou/Frame-824@1x.png") no-repeat;
  background-size: 100% 100%;
  // margin: 00.3125vw;
  padding: 0 0.06vw;
  display: inline-block;
  .indicator-title {
    display: block;
    height: 1.562vw;
    line-height: 1.5625vw;
    opacity: 0.699999988079071;
    color: rgba(255, 255, 255, 1);
    font-family: Microsoft YaHei;
    font-weight: bold;
    font-size: 1.215vw;
    transform: scale(0.7);
    letter-spacing: 0px;
    text-align: left;
    margin-left: -0.5vw;
  }
  .indicator-content {
    height: 2.474vw;
    position: relative;
    color: rgba(255, 255, 255, 1);
    font-family: PingFang SC;
    font-weight: medium;
    font-size: 1.041vw;
    text-align: left;

    .content-num,
    .content-rate {
      display: inline-block;
    }
    .content-num {
      color: rgba(255, 179, 88, 1);
      font-size: 0.4166vw;
      padding-left: 0.5208vw;
      font-family: Google Sans;
      .content-unit {
        font-size: 1.041vw;
      }
    }
    .hb {
      position: absolute;
      left: 0.1208vw;
      width: 3.5vw;
      top: 0.26vw;
      font-size: 1.041vw;
      color: rgba(255, 255, 255, 0.6);
      transform: scale(0.7);
    }
    .shangsheng {
      display: inline-block;
      position: absolute;
      width: 1.1vw;
      height: 1.2vw;
      background: url("../../assets/images/jinchukou/上升.png") no-repeat;
      background-size: 100% 100%;
      margin-top: 0.45vw;
      margin-left: 2.8vw;
    }
    .sz {
      position: absolute;
      left: 0.3208vw;
      width: 2.0833vw;
      top: 1.171vw;
      font-size: 1.041vw;
      transform: scale(0.8);
      color: #ff3f2b;
      font-weight: bold;
    }
    .hb-1 {
      position: absolute;
      right: 1.208vw;
      width: 3.125vw;
      top: 0.26vw;
      font-size: 1.041vw;
      color: rgba(255, 255, 255, 0.6);
      transform: scale(0.7);
    }
    .shangsheng1 {
      display: inline-block;
      position: absolute;
      width: 1.1vw;
      height: 1.2vw;
      background: url("../../assets/images/jinchukou/上升.png") no-repeat;
      background-size: 100% 100%;
      margin-top: 0.45vw;
      margin-left: 7.1vw;
    }
    .sz-1 {
      position: absolute;
      right: -0.25vw;
      width: 5.5vw;
      top: 1.171vw;
      font-size: 1.041vw;
      transform: scale(0.8);
      color: #ff3f2b;
      font-weight: bold;
    }
    .hb-img {
      position: absolute;
      right: -1px;
      top: 1.536vw;
      font-size: 1.041vw;
    }
  }
}
</style>
