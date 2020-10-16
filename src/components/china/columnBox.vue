<template>
  <div class="column-box" :id="ids"></div>
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
      let colorArr = ["rgba(13,139,255,1)", "rgba(255,189,90,1)"];
      myCharts.setOption({
        tooltip: {
          //提示框组件
          trigger: "axis",
          // formatter: "{b}<br />{a0}: {c0}<br />{a1}: {c1}",
          axisPointer: {
            type: "shadow",
            label: {
              backgroundColor: "#6a7985",
            },
          },
          backgroundColor: "rgba(70,130,180,0.8)",
          borderColor: "rgba(47,79,79,1)",
          borderWidth: (e / 1600) * 1,
          padding: [(e / 1600) * 6, (e / 1600) * 12],
          textStyle: {
            color: "rgba(255, 255, 255, 0.8)",
            fontStyle: "normal",
            fontFamily: "微软雅黑",
            fontSize: (e / 1600) * 10,
            lineHeight: (e / 1600) * 18,
          },
        },
        grid: {
          left: "3%",
          right: "3%",
          bottom: "1%",
          top: "20%",
          //	padding:'0 0 10 0',
          containLabel: true,
        },
        legend: {
          //图例组件，颜色和名字
          right: "3%",
          top: "3%",
          itemGap: (e / 1600) * 16,
          itemWidth: (e / 1600) * 10,
          itemHeight: (e / 1600) * 10,
          data: [
            {
              name: data.y ? data.y[0].name : "表内资产",
              //icon:'image://../wwwroot/js/url2.png', //路径
            },
            {
              name: data.y ? data.y[1].name : "表外资产",
            },
          ],
          textStyle: {
            color: "#a8aab0",
            fontStyle: "normal",
            fontFamily: "微软雅黑",
            fontSize: (e / 1600) * 10,
          },
        },
        xAxis: [
          {
            type: "category",
            //	boundaryGap: true,//坐标轴两边留白
            data: data.x
              ? data.x[0].data.map((item) => {
                  if (item === "直属单位") {
                    return "直属";
                  } else {
                    return item;
                  }
                })
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
                  "12月",
                ],
            axisLabel: {
              //坐标轴刻度标签的相关设置。
              interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
              //	margin:15,
              textStyle: {
                color: "rgba(255,255,255,.6)",
                fontStyle: "normal",
                fontFamily: "微软雅黑",
                fontSize: (e / 1600) * 10,
              },
            },
            axisTick: {
              //坐标轴刻度相关设置。
              show: false,
            },
            axisLine: {
              //坐标轴轴线相关设置
              lineStyle: {
                color: "#fff",
                opacity: 0.2,
              },
            },
            splitLine: {
              //坐标轴在 grid 区域中的分隔线。
              show: false,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            splitNumber: 5,
            min: 0,
            max: 100,
            axisLabel: {
              textStyle: {
                color: "#a8aab0",
                fontStyle: "normal",
                fontFamily: "微软雅黑",
                fontSize: (e / 1600) * 12,
              },
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "rgba(255,255,255,1)",
                width: (e / 1600) * 1,
                opacity: 0.2,
              },
            },
          },
        ],
        series: [
          {
            name: data.y ? data.y[0].name : "表内资产",
            type: "bar",
            data: data.y
              ? data.y[0].data
              : [10, 15, 30, 45, 55, 60, 62, 80, 82, 88, 90, 92],
            barWidth: (e / 1600) * 6,
            barGap: 0, //柱间距离
            itemStyle: {
              normal: {
                show: true,
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgba(32,242,255,1)",
                  },
                  {
                    offset: 1,
                    color: "rgba(0,63,190,1)",
                  },
                ]),
                barBorderRadius: [30, 30, 0, 0],
                borderWidth: 0,
              },
            },
          },
          {
            name: data.y ? data.y[1].name : "表外资产",
            type: "bar",
            data: data.y
              ? data.y[1].data
              : [8, 5, 25, 30, 35, 55, 60, 78, 80, 82, 84, 88],
            barWidth: (e / 1600) * 6,
            barGap: 0, //柱间距离
            itemStyle: {
              normal: {
                show: true,
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgba(255,189,90,1)",
                  },
                  {
                    offset: 1,
                    color: "rgba(255,162,76,0.45)",
                  },
                ]),
                barBorderRadius: [30, 30, 0, 0],
                borderWidth: 0,
              },
            },
          },
        ],
      });
      //根据窗口的大小变动图表
      window.onresize = function () {
        myCharts.resize();
        //myChart1.resize();    //若有多个图表变动，可多写
      };
    },
  },
  components: {},
  watch: {
    chartData: function (newVal) {
      this.initColumnChart(this.ids, newVal);
    },
  },
};
</script>

<style lang="less" scoped>
</style>
