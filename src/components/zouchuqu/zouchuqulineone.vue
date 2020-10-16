<template>
  <div class="zouchuqulineone" id="zouchuqulineone"></div>
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
        document.getElementById("zouchuqulineone")
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
          x: 60,
          y: 60,
          x2: 40,
          y2: 40,
        },
        legend: {
          data: ["贷款余额"],
          show: true,
          top: "8%",
          right: "8%",
          itemWidth: 8,
          itemHeight: 12,
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
          name: "贷款余额",
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
.zouchuqulineone {
  width: 38.125vw;
  height: 16.5626vw;
  // position: absolute;
  // margin-top: 1vw;
}
</style>
