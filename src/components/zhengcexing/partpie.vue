<template>
  <div class="pie-chart" id="partpie"></div>
</template>
<script>
export default {
  name: "",
  props: ["chartData"],
  mounted() {
    this.initPie(this.chartData);
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    initPie(data) {
      const colorList = [
        "rgba(0,87,248,1)",
        "rgba(30,147,255,1)",
        "rgba(0,247,255,1)",
        "#FBD444",
        "#7F6AAD",
        "#585247",
      ];
      let e = document.body.clientWidth;
      let chart = this.$echarts.init(document.getElementById("partpie"));
      chart.setOption({
        tooltip: {
          trigger: "item",
          backgroundColor: "rgba(70,130,180,0.8)",
          borderColor: "rgba(47,79,79,1)",
          borderWidth: 1,
          padding: [12, 20],
          axisPointer: {
            type: "shadow",
            label: {
              backgroundColor: "#6a7985",
            },
          },
          textStyle: {
            color: "rgba(255, 255, 255, 0.8)",
            fontStyle: "normal",
            fontFamily: "微软雅黑",
            fontSize: 14,
          },
          formatter: "{b}<br />({d}%)<br/>{a}: {c}亿",
        },
        color: colorList,
        series: [
          {
            name: "余额",
            type: "pie",
            radius: [e/1600*30, e/1600*65],
            center: ["50%", "50%"],
            labelLine: {
              normal: {
                length: e/1600*20,
                length2: e/1600*20,
                lineStyle: {
                  type: "solid",
                  width: e/1600*2,
                },
              },
            },
            avoidLabelOverlap: true,
            stillShowZeroSum: true,
            minShowLabelAngle: 10,
            label: {
              show: true,
              alignTo: "edge", // label两端对称布局
              //  ECharts v4.6.0 版本起，提供了 'labelLine' 与 'edge' 两种新的布局方式
              margin: e/1600*60, // 布局为两端对称时候需要外边距防止图表变形 数值随意不要太大
              distanceToLabelLine: 0, // label距离引导线距离
              formatter: "{b}\n{d}%",
              borderWidth: 0,
              borderRadius: e/1600*1,
              padding: [0, -e/1600*50],
              height: e/1600*40,
              fontSize: e/1600*18,
              align: "center",
              color: "#fff",
              // rich: {
              //   b: {
              //     fontSize: 12,
              //     lineHeight: 16,
              //     color: "rgba(255,255,255,.7)",
              //     padding: [12, 0, 25, 0]
              //   },
              //   c: {
              //     fontSize: 12,
              //     lineHeight: 16,
              //     color: "#fff",
              //     padding: [12, 0, 25, 0]
              //   }
              // }
            },

            data: this.leftData
              ? this.leftData.map((item, index) => {
                  return {
                    name: this.type[index],
                    value: item,
                  };
                })
              : [
                  { name: "自营性", value: 18005.46, per: "45%" },
                  { name: "政策性", value: 22006.67, per: "55%" },
                ],
          },
        ],
      });
      chart.on("click", (params) => {
        this.$store.commit("newDialogData", params.name);
        this.$store.commit("newDialogVisible", true);
      });
    },
  },
  components: {},
  watch: {
    chartData: function (newVal) {
      this.initPie(this.ids, newVal);
    },
  },
};
</script>

<style lang="less">
.pie-chart {
  width: 16.667vw;
  height: 10.75vw;
}
</style>
