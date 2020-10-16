<template>
  <div class="xiaoyileftthree" id="xiaoyileftthree"></div>
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
        document.getElementById("xiaoyileftthree")
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
          // 柱状图位置
          x: (e / 1600) * 50,
          y: (e / 1600) * 60,
          x2: (e / 1600) * 25,
          y2: (e / 1600) * 40,
        },
        legend: {
          data: ["投资收入"],
          show: true,
          top: "8%",
          right: "5%",
          itemWidth: (e / 1600) * 8,
          itemHeight: (e / 1600) * 12,
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
              fontSize: (e / 1600) * 12,
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
              fontSize: (e / 1600) * 14,
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
            name: "投资收入",
            type: "bar",
            barWidth: (e / 1600) * 22,
            itemStyle: {
              color: "#59ecff",
            },
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#20F2FF" },
                { offset: 1, color: "#003FBE" },
              ]),
            },
            data: [14, 22, 27, 34, 38, 45, 52, 57, 63, 68, 72, 76],
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
};
</script>

<style lang="less" scoped>
.xiaoyileftthree {
  width: 48.07vw;
  height: 15.248vw;
}
</style>
