<template>
  <div class="indicator-box">
    <div
      v-for="(item, index) in data"
      :key="index"
      class="single-indicator-box"
    >
      <span class="indicator-title">{{ item.name }}</span>
      <div class="indicator-content">
        <!-- <span class="hb">同比</span>
        <span class="sz">{{item.value1}}</span> -->
        <!-- <span class="dangqian">当前余额</span>
        <span class="zhi">{{ item.value3 }}亿</span> -->
        <span class="hb-1">比年初</span>
        <i class="shangsheng"></i>
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
  mounted() {},
  data() {
    return {
      data: [
        {
          name: "表内资产余额",
          value1: "24.3%",
          value2: "2458.08",
          value3: "2458.08",
        },
        {
          name: "表外资产余额",
          value1: "19.5%",
          value2: "1956.61",
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
    chartData: function (newVal) {},
  },
};
</script>

<style lang="less" scoped>
.single-indicator-box {
  width: 10.208vw;
  height: 4.323vw;
  background: url("../../assets/images/jinchukou/Frame-824@1x.png") no-repeat;
  background-size: 100% 100%;
  margin: 0 0.3125vw;
  padding: 0 0.26vw;
  display: inline-block;
  .indicator-title {
    display: block;
    height: 1.562vw;
    line-height: 1.562vw;
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
      font-size: 1.041vw;
      padding-left: 0.5208vw;
      font-family: Google Sans;
      .content-unit {
        font-size: 1.041vw;
      }
    }
    // .hb {
    //   position: absolute;
    //   left: 0.5208vw;
    //   width: 2.083vw;
    //   top: 0.2604vw;
    //   font-size: 1.041vw;
    //   transform: scale(0.7);
    //   color: rgba(255, 255, 255, 0.6);
    // }
    // .sz {
    //   position: absolute;
    //   left: 0.5208vw;
    //   width: 2.083vw;
    //   top: 1.1171vw;
    //   font-size: 1.041vw;
    //   transform: scale(0.8);
    // }
    // .dangqian {
    //   display: inline-block;
    //   position: absolute;
    //   left: 0.5vw;
    //   width: 3.625vw;
    //   top: 0.55vw;
    //   font-size: 1.041vw;
    //   transform: scale(0.7);
    //   color: rgba(255, 255, 255, 0.6);
    // }
    // .zhi {
    //   display: inline-block;
    //   position: absolute;
    //   left: 4.3vw;
    //   width: 5.5vw;
    //   top: 0.5vw;
    //   font-size: 1.041vw;
    //   transform: scale(0.8);
    //   color: #ff3f2b;
    //   font-weight: bold;
    // }
    .hb-1 {
      display: inline-block;
      position: absolute;
      left: 0.5vw;
      width: 3.125vw;
      top: 0.55vw;
      font-size: 1.041vw;
      transform: scale(0.7);
      color: rgba(255, 255, 255, 0.6);
    }
    .shangsheng {
      display: inline-block;
      position: absolute;
      width: 1.1vw;
      height: 1.2vw;
      background: url("../../assets/images/jinchukou/上升.png") no-repeat;
      background-size: 100% 100%;
      margin-top: 0.75vw;
      margin-left: 3.2vw;
    }
    .sz-1 {
      display: inline-block;
      position: absolute;
      left: 4.3vw;
      width: 5.5vw;
      top: 0.5vw;
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
