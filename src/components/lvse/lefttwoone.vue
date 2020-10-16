<template>
  <div class="line-box" id="lefttwoone"></div>
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
      let myCharts = this.$echarts.init(document.getElementById("lefttwoone"));
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
          x: 70,
          y: 18,
          x2: 50,
          y2: 20,
        },
        legend: {
          data: ["贷款余额", "不良余额"],
          show: true,
          top: "1%",
          right: "2%",
          itemWidth: 8,
          itemHeight: 12,
          // icon: "roundRect",
          color: "#59ecff",
          textStyle: {
            color: "#b3bfca",
          },
        },
        xAxis: {
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
            show: false,
            textStyle: {
              color: "#999",
            },
          },
          splitLine: {
            show: false,
            lineStyle: {
              type: "dashed",
              color: "#808079",
            },
          },
        },
        yAxis: {
          data: ["公司部", "广州", "上海", "北京", "厦门"],
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

        series: [
          {
            name: "不良余额",
            type: "bar",
            barWidth: 14,
            itemStyle: {
              color: "#59ecff",
            },
            label: {
              show: true,
              position: "right",
              color: "#b3bfca",
            },
            barGap: "-100%",
            data: [32, 36, 50, 74, 80],
          },
          {
            name: "贷款余额",
            type: "bar",
            barWidth: 14,
            itemStyle: {
              color: "#0975d9",
            },
            label: {
              // show: true,
              show:false,
              position: "insideRight",
               color: "#b3bfca",
            },
            z: 2,
            barGap: "-100%",
            data: [16, 18, 25, 37, 40],
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
  width: 41.875w;
  height: 11.40625vw;
}
</style>
