<template>
  <div class="pie-echarts" :id="ids"></div>
</template>
<script>
export default {
  name: "education",
  props: ["ids", "chartData"],
  mounted() {
    this.initPie(this.ids, this.chartData);
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    initPie(curId, chartData) {
      const colorList = [
        "rgba(0,87,248,1)",
        "rgba(30,147,255,1)",
        "rgba(0,247,255,1)",
        "#FBD444",
        "#7F6AAD",
        "#585247"
      ];

      if (!curId) return;
      let chart = this.$echarts.init(document.getElementById(curId));
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
              backgroundColor: "#6a7985"
            }
          },
          textStyle: {
            color: "rgba(255, 255, 255, 0.8)",
            fontStyle: "normal",
            fontFamily: "微软雅黑",
            fontSize: 14
          },
          formatter: "{b}<br />({d}%)<br/>{a}: {c}亿"
        },
        color: colorList,
        series: [
          {
            name: "余额",
            type: "pie",
            radius: [22, 40],
            center: ["50%", "50%"],
            labelLine: {
              normal: {
                length: 10,
                length2: 10,
                lineStyle: {
                  type: "solid",
                  width: 2
                }
              }
            },
            avoidLabelOverlap: true,
            stillShowZeroSum: true,
            minShowLabelAngle: 10,
            label: {
              alignTo: "edge", // label两端对称布局
              //  ECharts v4.6.0 版本起，提供了 'labelLine' 与 'edge' 两种新的布局方式
              margin: 60, // 布局为两端对称时候需要外边距防止图表变形 数值随意不要太大
              distanceToLabelLine: 0, // label距离引导线距离
              formatter: "{b}\n{d}%",
              borderWidth: 0,
              borderRadius: 1,
              padding: [0, -50],
              height: 40,
              fontSize: 12,
              align: "center",
              color: "#fff",
              // rich: {
              //   b: {
              //     fontSize: 12,
              //     lineHeight: 16,
              //     color: "rgba(255,255,255,.7)",
              //     padding: [12, 0, 25, 0]
              //   },
              //   d: {
              //     fontSize: 12,
              //     lineHeight: 16,
              //     color: "#fff",
              //     padding: [12, 0, 25, 0]
              //   }
              // }
            },
            itemStyle: {
              borderWidth: 2,
              borderColor: "#082b3a"
            },
            data: this.leftData
              ? this.leftData.map((item, index) => {
                  return {
                    name: this.type[index],
                    value: item
                  };
                })
              : [
                  { name: "政策性", value: 18005.46, per: '45%' },
                  { name: "自营性", value: 22006.67, per: '55%' }
                  // { name: "南京c", value: 100 }
                ]
          }
        ]
      });
      chart.on("click", params => {
        this.$store.commit("newDialogData", params.name);
        this.$store.commit("newDialogVisible", true);
      });
      //根据窗口的大小变动图表 
      window.onresize = function () {
        chart.resize();
        //myChart1.resize();    //若有多个图表变动，可多写
      };
    }
  },
  components: {},
  watch: {
    chartData: function(newVal) {
      this.initPie(this.ids, newVal);
    }
  }
};
</script>

<style lang="less">
</style>
