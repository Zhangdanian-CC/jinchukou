<template>
  <div class="zouchuquleftone" id="zouchuquleftone"></div>
</template>

<script>
export default {
  name: "",
  props: ["chartData"],
  mounted() {
    this.initColumnChart(this.chartData);
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    initColumnChart(data) {
      //   if (!data || JSON.stringify(data) == '"{}"') return;
      let myCharts = this.$echarts.init(
        document.getElementById("zouchuquleftone")
      );
      myCharts.setOption({
        tooltip: {
          //提示框组件
          trigger: "axis",
          // formatter: "{b}<br />{a0}: {c0}<br />{a1}: {c1}",
          formatter: "{b}<br/>{a}: {c}亿",
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
          x2: 28,
          x: 100,
          y: 60,
          y2: 20,
        },
        legend: {
          data: ["贷款余额"],
          show: false,
          z: 20,
          top: "5%",
          right: "5%",
          itemWidth: 8,
          itemHeight: 12,
          color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#20F2FF" },
            { offset: 1, color: "#003FBE" },
          ]),
          textStyle: {
            color: "#b3bfca",
          },
        },
        yAxis: {
          data: ["新加坡", "日本", "美国", "英国", "俄罗斯"],
          axisLabel: {
            interval: 0, //控制坐标是否全部显示
            inside: false,
            textStyle: {
              color: "#ccd7d7",
              fontSize: 12,
            },
            margin: 20,
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              show:false,
              type: "solid",
              color: "#83aac4",
            },
          },
          z: 10,
        },
        xAxis: {
          splitNumber: 4,
          min: 0,
          max: 550,
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
            show:false,
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
            barWidth: 18,
           itemStyle: {
              color: "#0975D9",
              normal: {
                color: "#0975D9",
                label: {
                  show: true,
                  position: "right",
                  formatter: "{c}亿",
                  textStyle: {
                    color: "#ccd1d7",
                    fontSize: 14,
                  },
                },
              },
            },
            data: [230, 240, 278, 365, 433],
          },
        ],
      });
    },
  },
  components: {},
};
</script>

<style lang="less" scoped>
.zouchuquleftone {
  width: 28.854vw;
  height: 16.0416vw;
}
</style>
