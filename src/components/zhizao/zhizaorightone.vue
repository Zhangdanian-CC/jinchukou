<template>
  <div class="line-box" id="zhizaorightone"></div>
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
      let myCharts = this.$echarts.init(
        document.getElementById("zhizaorightone")
      );
      myCharts.setOption({
        title: {
          text: "钢铁",
          textStyle: {
            color: "#fff",
            fontSize: e/1600*21,
          },
          x: e/1600*100,
        },
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
          borderWidth: 1,
          padding: [6, 12],
          textStyle: {
            color: "rgba(255, 255, 255, 0.8)",
            fontStyle: "normal",
            fontFamily: "微软雅黑",
            fontSize: 10,
          },
        },
        grid: {
          // 柱状图位置
          x: e/1600*70,
          y: e/1600*50,
          x2: e/1600*50,
          y2: e/1600*50,
        },
        legend: {
          data: ["贷款余额", "当年签约金额", "当年累计发放金额"],
          show: true,
          top: "3%",
          right: "8%",
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
              fontSize: e/1600*16,
            },
            margin: e/1600*18,
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
            name: "贷款余额",
            type: "bar",
            barWidth: e/1600*15,
            // itemStyle: {
            //   color: "#59ecff",
            // },
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#20F2FF" },
                { offset: 1, color: "#003FBE" },
              ]),
            },
            data: [37, 54, 28, 62, 30, 43, 32, 45, 56, 36, 20, 33],
          },
          {
            name: "当年签约金额",
            type: "bar",
            barWidth: e/1600*15,
            // itemStyle: {
            //   color: "#59ecff",
            // },
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#FFBD5A" },
                { offset: 1, color: "rgba(255, 162, 76, 0.446951)" },
              ]),
            },
            data: [32, 44, 23, 52, 25, 38, 27, 40, 51, 31, 15, 22],
          },
          {
            name: "当年累计发放金额",
            type: "bar",
            barWidth: e/1600*15,
            // itemStyle: {
            //   color: "#9a59cc",
            // },
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#b3a7ff" },
                { offset: 1, color: "#594af9" },
              ]),
            },
            data: [27, 34, 18, 42, 20, 33, 22, 35, 46, 26, 10, 17],
          },
        ],
      });
      
    },
  },
  components: {},
};
</script>

<style lang="less" scoped>
.line-box {
  width: 60.65625vw;
  height: 24.40625vw;
  top: 1vw;
}
</style>
