
<template>
  <div class="world-chart" id="word-map" v-if="id"></div>
</template>

<script>
import "echarts-gl";
import region from "../../assets/json/world.json";

export default {
  name: "",
  props: [],
  mounted() {
    this.initChart(this.id);
  },
  data() {
    return {
      id: "worldChart",
    };
  },
  computed: {},
  methods: {
    initChart(id) {
      let e = document.body.clientWidth;
      let chart = this.$echarts.init(document.getElementById("word-map"));
      var option = {
        visualMap: {
          type: "piecewise",
          left: "4%",
          top: "35%",
          show: true,
          roam: true,
          min: 0,
          max: 15,
          pieces: [
            { gt: 200, label: "> 200亿" }, // (1500, Infinity]
            { gt: 100, lte: 200, label: "100 ～ 200亿" }, // (900, 1500]
            { gt: 50, lte: 100, label: "50 ～ 100亿" }, // (310, 1000]
            { gt: 0, lte: 50, label: "0 ～ 50亿" }, // (200, 300]
            { gt: 0, lte: 0.001, label: "0" }, // (10, 200]
          ],
          inRange: {
            // color: [
            //   "rgb(155,201,252)",
            //   "rgb(97,196,253)",
            //   "rgb(24,119,247)",
            //   "rgb(44,132,245)",
            //   "rgb(15,84,235)",
            //   "rgb(13,75,231)",
            // ],
            // color: ["#142997", "#004AE8", "#0E8CFC", "#5AC4FF", "#8FF2FF"],
            color: ["rgba(199,248,255,1)", "rgba(0,101,212,1)"],
          },
          textStyle: {
            color: "rgba(255, 255, 255, 0.7)",
            // fontSize: '0.73vw'
            fontSize: e/1600*16,
          },
          itemGap: e/1600*10,
          // itemSymbol: 10,
        },
        geo: {
          show: false,
          map: "world",
          roam: "scale",
          label: {
            normal: {
              show: false,
            },
            emphasis: {
              show: false,
            },
          },
          // center: [115.97, 29.71],
          aspectScale: 0.87,
          // roam: true,
          // scaleLimit: {
          //   min: 1,
          //   max: 3,
          // },
          zoom: 1.2,
          // itemStyle: {
          //   normal: {
          //     shadowBlur: 0,
          //     shadowColor: "rgb(155,201,252)",
          //     // shadowOffsetY: 10,
          //   },
          // },
        },
        series: [
          {
            type: "map",
            map: "world",
            zoom: 1.2,
            aspectScale: 0.87,
            roam: true,
            scaleLimit: {
              min: 1.2,
              max: 3,
            },
            itemStyle: {
              // 选中时颜色
              emphasis: {
                // 也是选中样式
                // borderWidth: 2,
                // borderColor: "#fff",
                areaColor: "#0e3973",
                label: {
                  show: true,
                  textStyle: {
                    color: "#fff",
                    fontSize: e/1600*18,
                    fontWeight: "bold",
                  },
                },
              },
            },
            postEffect: {
              enable: true,
              colorCorrection: {
                lookupTexture: "/asset/get/s/data-1497261115431-B1XrEJ2f-.jpg",
              },
            },
            light: {
              main: {
                intensity: 1,
                shadow: true,
                alpha: 150,
                beta: 70,
              },
              ambient: {
                intensity: 0,
              },
              ambientCubemap: {
                diffuseIntensity: 1,
                texture: "/asset/get/s/data-1497251035660-HkVJTnsMW.hdr",
              },
            },
            groundPlane: {
              show: true,
            },
            data: region.dataMap,
          },
          {
            type: "custom",
            coordinateSystem: "geo",
            // coordinateSystem: "worldChart",
            //自定义图片的 位置（lng, lat）
            data: [
              {
                name: "hehe",
                value: [47.97822265625001, 7.9970703125],
              },
            ],
            label: {
              normal: {
                show: true,
                position: "inside",
                formatter: function (a) {
                  return "23234";
                },
                color: "black",
              },
            },
          },
        ],
        tooltip: {
          trigger: "item",
          show: true,
          renderMode: "html",
          appendToBody: true,
          backgroundColor: "transparent",
          confine: true,
          formatter(params) {
            return `${
              params.data
                ? `
								<div class="echart-tooltip">
									<div class="top">
									<div class="branch-name">
										${(params.data && params.data.name) || "其他地区"}
									</div>
									<div class="branch-amount">
										${params.value ? params.value + "亿" : "无数据"}
									</div>
									<span class="status">
										${params.risk || "低风险"}
									</span>
									</div>
									
								</div>`
                : ``
            }
              
            `;
          },
          // <div class="line"></div>
          // <div class="bottom"></div>
          position: function (point, params, dom, rect, size) {
            // console.log(point, params, dom, rect, size)
            // console.log(params.data.cordinate);
            // const [x, y] = chart.convertToPixel(
            // { geoIndex: 0 },
            // params.data.cordinate
            // );
            // return [x - 116, y - 152];
            if (window.screen.width === 1600 && window.screen.height === 900) {
              // console.log(window.screen.width);
              return [point[0] - e/1600*116, point[1] - e/1600*148];
            } else {
              // console.log(window.screen.width);
              //  return [point[0] - 116, point[1] - 148];
            }
          },
        },
      };
      chart.setOption(option);
    },
    plusPosition(point) {},
  },
  components: {},
  distoryed() {
    let chart = this.$echarts.init(document.getElementById("word-map"));
    chart.restore();
    chart.clear();
  },
};
</script>

<style lang="less">
.world-chart {
  height: 93%;
  width: 100%;
  // margin-top: 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.echart-tooltip {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  .top {
    height: 6.8vw;
    // height: 14.5vh;
    width: 14.61vw;
    border-radius: 3.2px;
    // background-color: #060D1E;
    background-image: url(../../assets/images/jinchukou/mark_bg.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    box-shadow: 0px 0.7812vw 1.562vw 0px #040f29;
    position: relative;
    // padding-top: 1.25vw;
    padding-top: 1vw;
    padding-left: 0.7812vw;

    .branch-name {
      background: url(../../assets/images/jinchukou/branch.png) no-repeat;
      color: #ffffff;
      font-family: Microsoft YaHei;
      font-weight: bold;
      font-size: 1.393vw;
      line-height: normal;
      letter-spacing: 0px;
      text-align: left;
      // line-height: 1.875vw;
      // line-height: 3.75vh;
      margin-top: 0.3vw;
      letter-spacing: 0.1vw;
      padding-left: 2.5vw;
    }

    .branch-amount {
      display: inline-block;
      color: #ff9229;
      font-family: Oswald;
      font-weight: bold;
      font-size: 1.393vw;
      line-height: normal;
      letter-spacing: 0px;
      text-align: left;
      padding-left: 1.375vw;
      // line-height: 2.187vw;
      // line-height: 4.475vh;
      margin-top: 0.4vw;
    }
    .status {
      position: absolute;
      // top: 3.187vw;
      top: 3.45vw;
      right: 1.575vw;
      padding-left: 1.875vw;
      color: #ffffff;
      font-family: Microsoft YaHei;
      font-weight: bold;
      font-size: 1.393vw;
      line-height: normal;
      letter-spacing: 0px;
      text-align: left;
      // line-height: 1.875vw;
      // line-height: 4.475vh;
      margin-left: 0.3vw;
      display: inline-block;
      color: rgba(255, 166, 101, 1);
      // margin-top: 1vw;
      // margin-left: 1.3vw;
    }
  }

  // .line {
  //   border: 1px solid #f5b523;
  //   // height: 3.437vw;
  //   height: 6.437vh;
  //   position: relative;
  //   // bottom: 1vw;
  //   bottom: 2.5vh;
  //   left: -0.25vw;
  //   z-index: 2;
  // }

  // .bottom {
  //   width: 3.125vw;
  //   // height: 3.125vw;
  //   height: 5.625vh;
  //   position: absolute;
  //   background: url(./../../assets/images/jinchukou/mark.png) no-repeat;
  //   transform: rotateX(45deg);
  //   // bottom: -0.5vw;
  //   bottom: -1.2vh;
  //   // right: -1vw;
  //   z-index: 1;
  // }
}
</style>
