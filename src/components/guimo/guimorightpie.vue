<template>
  <div class="guimorightpie" id="guimorightpie"></div>
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
        "#00C2FF",
        "#B4A8FF",
        "#1E93FF",
        "#FFE500",
        "#3166ED",
        "#C76A26",
        "#0048F1",
        "#5B4CFF",       
      ];
      let e = document.body.clientWidth;
      let chart = this.$echarts.init(document.getElementById("guimorightpie"));
      chart.setOption({
        tooltip: {
          show: true,
          icon: "roundRect",
          textStyle: {
            color: "rgba(255, 255, 255, 0.8)",
            fontStyle: "normal",
            fontFamily: "微软雅黑",
            fontSize: e/1600*14,
          },
          formatter: "{b}<br />{d}%<br/>{a}: {c}亿",
        },
        legend: {
          show: true,
          type: "plain",
          orient: "vertical",
          top: e/1600*30,
          left: '70%',
          height:e/1600*180,
          itemGap: e/1600*20,
          itemWidth: e/1600*9,
          itemHeight: e/1600*12,
          icon: "roundRect",
          color: "#59ecff",
          textStyle: {
            color: "#b3bfca",
          },
        },
        color: colorList,
        series: [
          {
            name: "金额",
            type: "pie",
            radius: e/1600*80,
            center: ["50%", "50%"],
            startAngle: 60,
            labelLine: {
              normal: {
                length: e/1600*10,
                length2: e/1600*50,
                lineStyle: {
                  type: "solid",
                  width: e/1600*1,
                },
              },
            },
            avoidLabelOverlap: true,
            stillShowZeroSum: true,
            minShowLabelAngle: 10,
            label: {
              position: "inside",
              alignTo: "labelLine", // label两端对称布局
              formatter: "{d}%",
            },
            data: this.leftData
              ? this.leftData.map((item, index) => {
                  return {
                    name: this.type[index],
                    value: item,
                  };
                })
              : [
                  { name: "国债", value: 305.65, per: "13.49%" },
                  { name: "地方政府债", value: 212.32, per: "9.38%" },
                  { name: "政策性金融债", value: 421, per: "18.62%" },
                  { name: "政府机构债", value: 23.74, per: "1.02%" },
                  { name: "商业性金融债", value: 847.12, per: "37.46%" },
                  { name: "非金融企业债", value: 104.52, per: "4.6%" },
                  { name: "资产支持证券", value: 74.21, per: "3.27%" },
                  { name: "外国债券", value: 275.82, per: "12.16%" },
                  
                ],
          },
        ],
      });
      chart.on("click", (params) => {
        this.$store.commit("newDialogData", params.name);
        this.$store.commit("newDialogVisible", true);
      });
      //根据窗口的大小变动图表 --- 重点
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
.guimorightpie {
  width: 45.875vw;
  height: 14.40625vw;
}
</style>
