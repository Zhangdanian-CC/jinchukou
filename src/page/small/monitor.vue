<template>
  <div class="container">
    <!-- 头部 -->
    <!-- <div class="title-frame">
      <div class="title-left"></div>
      <div class="global-title">中国进出口银行</div>
      <div class="right-time"></div>
    </div>-->
  </div>
</template>

<script>
export default {
  mounted() {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  beforeDestroy() {},
  components: {}
};
</script>

<style lang="less" scoped>
.container {
  width: 100vw;
  height: 100vh;
  position: relative;
  
  background: url("../../assets/images/home/monitor.png") no-repeat;
  background-size: 100% 100%;
  font-size: 28px;
  color: #fff;
  overflow: hidden;
  font-family: Microsoft YaHei;

  // 标题样式
  //   .title-frame {
  //     width: 100%;
  //     height: 7%;
  //     background: url("../../assets/images/home/header.png") no-repeat;
  //     background-size: 100% 100%;
  //     display: flex;
  //     justify-content: space-between;
  //     padding: 0 1%;
  //     .title-left {
  //       width: 33%;
  //     }
  //     .global-title {
  //       text-align: center;
  //       width: 33%;
  //       padding-top: 24px;
  //       font-size: 64px;
  //       font-weight: bold;
  //       font-family: FZZhengHeiS-B-GB;
  //     }
  //     .right-time {
  //       width: 33%;
  //       text-align: right;
  //     }
  //   }
}
</style>