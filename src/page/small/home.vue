<template>
  <div class="container">
    <!-- 头部 -->
    <div class="title-frame">
      <div class="title-left"></div>
      <div class="global-title">中国进出口银行</div>
      <div class="right-time"></div>
    </div>

    <div class="control-div">
      <div
        :class="'single-control ' + (item.top ? 'top-control' : '')"
        v-for="item in controlData"
        :key="item.name"
        @click="jump(item.path)"
      >
        <span class="control-name" :data-content="item.name">{{item.name}}</span>
        <img class="control-img" alt :src="item.img" />
      </div>
    </div>
  </div>
</template>

<script>
import I1 from "../../assets/images/home/01.png";
import I2 from "../../assets/images/home/02.png";
import I3 from "../../assets/images/home/03.png";
import I4 from "../../assets/images/home/04.png";
import I5 from "../../assets/images/home/05.png";
import I6 from "../../assets/images/home/06.png";
import I7 from "../../assets/images/home/07.png";
export default {
  mounted() {},
  data() {
    return {
      controlData: [
        {
          name: "世界地图",
          img: I1,
          top: true,
          path: "/world"
        },
        {
          name: "中国地图",
          img: I2,
          top: true,
          path: "/china"
        },
        {
          name: "特色业务分析",
          img: I7,
          top: true,
          path: "/tese"
        },
        {
          name: "资产规模",
          img: I4,
          path: "/guimo"
        },
        {
          name: "资产效益",
          img: I5,
          path: "/xiaoyi"
        },
        {
          name: "资产质量",
          img: I6,
          path: "/zhiliang"
        },
        {
          name: "视频监控",
          img: I3,
          path: "/monitor"
        }
      ]
    };
  },
  computed: {},
  methods: {
    jump(path) {
      this.$router.push("/manage" + path);
    }
  },
  beforeDestroy() {},
  components: {}
};
</script>

<style lang="less" scoped>
.container {
  width: 100vw;
  height: 100vh;
  position: relative;
  
  background: url("../../assets/images/home/yhbg.png") no-repeat;
  background-size: 100% 100%;
  // font-size: 28px;
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
      font-size: 1.875vw;
      letter-spacing: 3px;
      font-weight: bold;
      font-family: FZZhengHeiS-B-GB;
    }
    .right-time {
      width: 33%;
      text-align: right;
    }
  }

  .control-div {
    position: absolute;
    display: flex;
    left: 0;
    top: 8%;
    height: 85%;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    .single-control {
      text-align: center;
      width: 20%;
      margin: 0 2.5%;
    // height: 25%;
      cursor: pointer;
      position: relative;
      &:hover,
      &:focus {
        background: url("../../assets/images/home/border.png") no-repeat;
        background-size: 100% 100%;
      }
      .control-name {
        display: block;
        position: absolute;
        // top: 70px;
        width: 100%;
        text-align: center;
        // text-indent: 30px;
        // line-height: 80px;
        font-size: 1.406vw;
        font-weight: bolder;
        // position: relative;

        // 方法一
        background-image: -webkit-linear-gradient(bottom, #87cefa, #e0ffff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .control-img {
        width: 75%;
      }
    }
    .top-control {
    }
  }
}
</style>