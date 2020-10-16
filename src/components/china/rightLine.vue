<template>
  <div class="line-box" :id="ids"></div>
</template>

<script>
export default {
  name: "",
  props: ["ids", "chartData"],
  mounted() {
    this.initColumnChart(this.ids, this.chartData);
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    initColumnChart(id, data, currentPro) {
      //   if (!data || JSON.stringify(data) == '"{}"') return;
      let e = document.body.clientWidth;
      let myCharts = this.$echarts.init(document.getElementById(id));
      myCharts.setOption({
        tooltip: {
          //提示框组件
          trigger: "axis",
          // formatter: "{b}<br />{a0}: {c0}<br />{a1}: {c1}",
          axisPointer: {
            type: "shadow",
            label: {
              backgroundColor: "#6a7985"
            }
          },
          backgroundColor: "rgba(70,130,180,0.8)",
          borderColor: "rgba(47,79,79,1)",
          borderWidth: e/1600*1,
          padding: [e/1600*6, e/1600*12],
          textStyle: {
            color: "rgba(255, 255, 255, 0.8)",
            fontStyle: "normal",
            fontFamily: "微软雅黑",
            fontSize: e/1600*10,
            lineHeight: (e / 1600) * 18,
          }
        },
        grid: {
          left: "0%",
          right: "0%",
          bottom: "0%",
          top: "20%",
          //	padding:'0 0 10 0',
          containLabel: true
        },
        legend: {
          //图例组件，颜色和名字
          right: "3%",
          top: "3%",
          itemGap: e/1600*16,
          itemWidth: e/1600*10,
          itemHeight: e/1600*8,
          data: [
            {
              name: data.y ? data.y[0].name : "不良贷款余额",
              icon: "rect"
              //icon:'image://../wwwroot/js/url2.png', //路径
            },
            // {
            //   name: data.y ? data.y[0].name : "利息支出"
            //   //icon:'image://../wwwroot/js/url2.png', //路径
            // },
            {
              name: data.y ? data.y[1].name : "不良率",
              icon: "rect"
            }
          ],
          textStyle: {
            color: "#a8aab0",
            fontStyle: "normal",
            fontFamily: "微软雅黑",
            fontSize: e/1600*10
          }
        },
        xAxis: [
          {
            type: "category",
            //	boundaryGap: true,//坐标轴两边留白
            data: data.x
              ? data.x[0].data
              : [
                  "1月",
                  "2月",
                  "3月",
                  "4月",
                  "5月",
                  "6月",
                  "7月",
                  "8月",
                  "9月",
                  "10月",
                  "11月",
                  "12月"
                ],
            axisLabel: {
              //坐标轴刻度标签的相关设置。
              interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
              //	margin:15,
              textStyle: {
                color: "rgba(255,255,255,.6)",
                fontStyle: "normal",
                fontFamily: "微软雅黑",
                fontSize: e/1600*6
              }
            },
            axisTick: {
              //坐标轴刻度相关设置。
              show: false
            },
            axisLine: {
              //坐标轴轴线相关设置
              lineStyle: {
                color: "#fff",
                opacity: 0.2
              }
            },
            splitLine: {
              //坐标轴在 grid 区域中的分隔线。
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "",
            min: 0,
            max: 100,
            axisLabel: {
              show: true,
              //   formatter: "{value}",
              textStyle: {
                color: "rgba(255, 255, 255, 0.7)",
                fontSize: e/1600*10
              }
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#FFF"
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: "dashed",
                width: 1,
                color: "rgba(255,255,255,0.2)"
              }
            }
          }
        ],
        series: [
          {
            name: data.y ? data.y[1].name : "不良贷款余额",
            type: "line",
            data: data.y
              ? data.y[1].data
              : [10, 15, 30, 45, 55, 60, 62, 80, 80, 62, 60, 14],
            yAxisIndex: 0,
            smooth: 0.5,
            symbolSize: 0,
            symbol: "circle",
            lineStyle: {
              normal: {
                width: e/1600*2,
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgba(13,100,255,1)"
                  },
                  {
                    offset: 1,
                    color: "rgba(13,100,255,1)"
                  }
                ])
              }
            },
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgba(13,100,255,1)"
                  },
                  {
                    offset: 1,
                    color: "rgba(13,100,255,1)"
                  }
                ]),
                borderColor: "#fff",
                borderWidth: e/1600*2
              }
            },
            label: {
              normal: {
                show: false
              }
            }
          },
          {
            name: data.y ? data.y[2].name : "不良率",
            type: "line",
            data: data.y
              ? data.y[1].data
              : [8, 5, 25, 30, 35, 55, 62, 78, 65, 55, 60, 92],
            yAxisIndex: 0,
            smooth: 0.5,
            symbolSize: 0,
            symbol: "circle",
            lineStyle: {
              normal: {
                width: e/1600*2,
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgba(89,236,255,1)"
                  },
                  {
                    offset: 1,
                    color: "rgba(89,236,255,1)"
                  }
                ])
              }
            },
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgba(89,236,255,1)"
                  },
                  {
                    offset: 1,
                    color: "rgba(89,236,255,1)"
                  }
                ]),
                borderColor: "#fff",
                borderWidth: e/1600*2
              }
            },
            label: {
              normal: {
                show: false
              }
            }
          }
        ]
      });
      //根据窗口的大小变动图表 
      window.onresize = function () {
        myCharts.resize();
        //myChart1.resize();    //若有多个图表变动，可多写
      };
    }
  },
  components: {},
  watch: {
    chartData: function(newVal) {
      this.initColumnChart(this.ids, newVal);
    }
  }
};
</script>

<style lang="less" scoped>
</style>
