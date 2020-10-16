<template>
  <div class="zichan-pie" id="zichanpie"></div>
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
      const colorList = ["#1d83fa", "#5dbafd", "#5b4cff", "#0048f1"];

      let chart = this.$echarts.init(document.getElementById("zichanpie"));
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
            radius: 60,
            center: ["55%", "40%"],
            startAngle: 60,
            labelLine: {
              normal: {
                length: 10,
                length2: 50,
                lineStyle: {
                  type: "solid",
                  width: 1,
                },
              },
            },
            avoidLabelOverlap: true,
            stillShowZeroSum: true,
            minShowLabelAngle: 10,
            label: {
              position: "outer",
              alignTo: "labelLine", // label两端对称布局
              //  ECharts v4.6.0 版本起，提供了 'labelLine' 与 'edge' 两种新的布局方式
              margin: 30, // 布局为两端对称时候需要外边距防止图表变形 数值随意不要太大
              distanceToLabelLine: 1, // label距离引导线距离
              // formatter: "{b}" + "\n" + "{a}: {c}亿" + "\n" + "({d}%)",
              formatter: "{b}" + "\n" +  "({d}%)",
              borderWidth: 0,
              borderRadius: 1,
              // padding: [0, -50],
              // height: 40,
              // fontSize: 12,
              // align: "left",
              // color: "#3494BD",
              fontSize: 12,
              lineHeight: 16,
              color: "#fff",
              padding: [12, 0, 25, 0],
              rich: {
                b: {
                  fontSize: 12,
                  lineHeight: 16,
                  color: "rgba(255,255,255,.7)",
                  padding: [12, 0, 25, 0],
                },
                c: {
                  fontSize: 12,
                  lineHeight: 16,
                  color: "#fff",
                  padding: [12, 0, 25, 0],
                },
                d: {
                  fontSize: 12,
                  lineHeight: 16,
                  color: "#fff",
                  padding: [12, 0, 25, 0],
                },
              },
            },
            data: this.leftData
              ? this.leftData.map((item, index) => {
                  return {
                    name: this.type[index],
                    value: item,
                  };
                })
              : [
                  { name: "对外投资贷款", value: 2726.65, per: "8.07%" },
                  {
                    name: "境内对外开发支持贷款",
                    value: 11389.88,
                    per: "33.77%",
                  },
                  { name: "对外合作贷款", value: 8861.78, per: "26.25%" },
                  { name: "对外贸易贷款", value: 10765.34, per: "31.89%" },
                ],
          },
        ],
      });
      chart.on("click", (params) => {
        this.$store.commit("newDialogData", params.name);
        this.$store.commit("newDialogVisible", true);
      });
      //根据窗口的大小变动图表 
      window.onresize = function () {
        myCharts.resize();
        //myChart1.resize();    //若有多个图表变动，可多写
      };
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
.zichan-pie {
  text-align: center;
  width: 100%;
  height: 130%;
  left: -3vw;
}
</style>
