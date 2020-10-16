<template>
  <div class="zouchuqurightthree" id="zouchuqurightthree"></div>
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
        document.getElementById("zouchuqurightthree")
      );
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
          y: 60,
          y2: 50,
        },
        legend: {
          data: ["累计发放余额"],
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
        xAxis: {
          data: [
            "厦门",
            "北京",
            "上海",
            "广州",
            "深圳",
            "宁波",
            "公司部",
            "天津",
            "重庆",
            "安徽",
          ],
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
            name: "累计发放余额",
            type: "bar",
            barWidth: 18,
            itemStyle: {
              color: "#59ecff",
            },
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#20F2FF" },
                { offset: 1, color: "#003FBE" },
              ]),
            },
            data:  [74, 65, 60, 55, 49, 42, 38, 31, 28, 21 ],
          },
        ],
      });
    },
  },
  components: {},
};
</script>

<style lang="less" scoped>
.zouchuqurightthree {
  width: 28.854vw;
  height: 16.0416vw;
}
</style>
