<template>
  <div class="line-box" id="duiwailinetwo"></div>
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
      let myCharts = this.$echarts.init(
        document.getElementById("duiwailinetwo")
      );
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
          x: 40,
          y: 40,
          x2: 10,
          y2: 70,
        },
        legend: {
          data: ["签约金额"],
          show: true,
          top: "0%",
          right: "5%",
          itemWidth: 12,
          itemHeight: 3,
          icon: "roundRect",
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
              fontSize: 12,
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
            },
          },
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "#808079",
            },
          },
        },

        series: {
          name: "签约金额",
          symbol: "none", //去掉点
          type: "line",
          // smooth:true,
          itemStyle: {
            color: "#ffd18d",
          },
          areaStyle: {
            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgba(255, 209, 141,0.7)" },
              { offset: 0.8, color: "rgba(255, 209, 141,0)" },
            ]),
          },
          emphasis: {
            itemStyle: {
              color: "#59ecff",
            },
          },
          data: [50, 55, 64, 54, 38, 43, 67, 50, 40, 70,60,40],
        },
      });
    },
  },
  components: {},
};
</script>

<style lang="less" scoped>
.line-box {
  width: 28.0833vw;
  height: 16.479vw;
  position: absolute;
  margin-top: 16vw;
}
</style>
