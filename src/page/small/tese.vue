<template>
  <div class="container">
    <!-- 头部 -->
    <!-- <div class="title-frame">
      <div class="title-left"></div>
      <div class="global-title">特色业务分析</div>
      <div class="right-time"></div>
    </div>
    <router-link to="/tese/zhongxiaowei">
      <ZhongXiaoWei/>
    </router-link> -->
     <div
      v-for="item in 9"
      :key="item"
      :class="'control-div  jump' + item"
      @click="jump(item)"
    ></div>
  </div>
</template>

<script>
// import ZhongXiaoWei from '@/components/zhongxiaowei/zhongxiaowei';
export default {
  mounted() {},
  data() {
    return {};
  },
  computed: {},
  methods: {
     jump(key) {
      let temp = "";
      switch (key) {
        case 1:
          temp = "/zhengcexing";
          break;
        case 2:
          temp = "/zhizao";
          break;
        case 3:
          temp = "/yidaiyilu";
          break;
        case 4:
          temp = "/shengji";
          break;
        case 5:
          temp = "/duiwai";
          break;
        case 6:
          temp = "/lvse";
          break;
        case 7:
          temp = "/zouchuqu";
          break;
        case 8:
          temp = "/zhongxiaowei";
          break;
        case 9:
          temp = "/minying";
          break;
        default:
          temp = "/home";
          break;
      }
      this.$router.push("/manage" + temp);
    }
  },
  beforeDestroy() {},
  components: {
    // ZhongXiaoWei
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 100vw;
  height: 100vh;
  position: relative;

  background: url("../../assets/images/home/tese2.png") no-repeat;
  background-size: 100% 100%;
  font-size: 22px;
  color: #fff;
  overflow: hidden;
  font-family: Microsoft YaHei;

   .control-div {
    position: absolute;
    width: 25%;
    height: 13%;
    z-index: 2;
    cursor: pointer;
  }
  .jump1 {
    top: 15%;
    left: 10%;
  }
  .jump2 {
    top: 15%;
    right: 10%;
  }
  .jump3 {
    top: 33%;
    left: 5%;
  }
  .jump4 {
    top: 33%;
    right: 5%;
  }
  .jump5 {
    top: 51%;
    left: 5%;
  }
  .jump6 {
    top: 51%;
    right: 5%;
  }
  .jump7 {
    top: 69%;
    left: 10%;
  }
  .jump8 {
    top: 69%;
    right: 10%;
  }
  .jump9 {
    bottom: 5%;
    left: 38%;
  }
  // // 标题样式
  // .title-frame {
  //   width: 100%;
  //   height: 7%;
  //   background: url("../../assets/images/home/header.png") no-repeat;
  //   background-size: 100% 100%;
  //   display: flex;
  //   justify-content: space-between;
  //   padding: 0 1%;
  //   .title-left {
  //     width: 33%;
  //   }
  //   .global-title {
  //     text-align: center;
  //     width: 33%;
  //     // padding-top: 24px;
  //     font-size: 1.85vw;
  //     font-weight: bold;
  //     font-family: FZZhengHeiS-B-GB;
  //   }
  //   .right-time {
  //     width: 33%;
  //     text-align: right;
  //   }
  // }

}
</style>