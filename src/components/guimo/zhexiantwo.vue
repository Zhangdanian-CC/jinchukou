<template>
  <div class="line-box" id="zhexian2"></div>
</template>

<script>
export default {
  name: "",
  props: ["chartData"],
  mounted() {
    this.initLineChart(this.chartData);
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    initLineChart(data) {
      //   if (!data || JSON.stringify(data) == '"{}"') return;
      let e = document.body.clientWidth;
      let myCharts = this.$echarts.init(document.getElementById("zhexian2"));
      myCharts.setOption({
        tooltip: {
          //提示框组件
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            label: {
              backgroundColor: "#6a7985",
            },
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
          },
        },
        grid: {
          // 柱状图位置
          x: e/1600*50,
          y: e/1600*30,
          x2: e/1600*25,
          y2: e/1600*33,
        },
        legend: {
          data: ["负债余额", "存款余额"],
          show: true,
          top: "3%",
          right: "5%",
          itemWidth: e/1600*8,
          itemHeight: e/1600*12,
          // icon: "roundRect",
          color: "#59ecff",
          textStyle: {
            color: "#b3bfca",
          },
        },
        xAxis: {
          data: [
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
            interval: 0, //控制坐标是否全部显示
            inside: false,
            textStyle: {
              color: "#ccd7d7",
              fontSize: e/1600*12,
            },
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              type: "solid",
              color: "#83aac4",
            },
          },
          z: 10,
        },
        yAxis: {
          splitNumber: 4,
          min: 0,
          max: 80,
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            textStyle: {
              color: "#999",
              fontSize: e/1600*14,
            },
          },
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "#808079",
            },
          },
        },

        series: [
          {
            name: "负债余额",
            type: "bar",
            barWidth: e/1600*12,
            itemStyle: {
              color: "#59ecff",
            },
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#20F2FF" },
                { offset: 1, color: "#003FBE" },
              ]),
            },
            data: [76, 75, 67, 60, 58, 53, 47, 44, 34, 20, 18, 8],
          },
          {
            name: "存款余额",
            type: "bar",
            barWidth: e/1600*12,
            itemStyle: {
              color: "#59ecff",
            },
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#FFBD5A" },
                { offset: 1, color: "rgba(255, 162, 76, 0.446951)" },
              ]),
            },
            data: [25, 30, 36, 41, 47, 53, 56, 59, 63, 68, 74, 77],
          },
        ],
      });
      //根据窗口的大小变动图表 --- 重点
      window.onresize = function () {
        myCharts.resize();
        //myChart1.resize();    //若有多个图表变动，可多写
      };
    },
  },
  components: {},
};
</script>

<style lang="less" scoped>
.line-box {
  width: 100%;
  height: 100%;
}
</style>
