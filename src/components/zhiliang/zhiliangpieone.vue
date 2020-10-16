<template>
  <div class="zhiliangpieone" id="zhiliangpieone"></div>
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
      const colorList = ["#1d83fa", "#b4a8ff", "#5b4cff"];
      let e = document.body.clientWidth;
      let chart = this.$echarts.init(document.getElementById("zhiliangpieone"));
      chart.setOption({
        tooltip: {
          show: true,
          icon: "roundRect",
          textStyle: {
            color: "rgba(255, 255, 255, 0.8)",
            fontStyle: "normal",
            fontFamily: "微软雅黑",
            fontSize: (e / 1600) * 14,
          },
          formatter: "{b}<br />{d}%",
        },
        legend: {
          show: false,
          type: "scroll",
          orient: "vertical",
          top: "42%",
          left: "65%",
          itemGap: (e / 1600) * 20,
          itemWidth: (e / 1600) * 10,
          itemHeight: (e / 1600) * 15,
          icon: "roundRect",
          color: "#59ecff",
          textStyle: {
            color: "#b3bfca",
            fontSize: (e / 1600) * 20,
          },
        },
        color: colorList,
        series: [
          {
            name: "四大经济领域",
            type: "pie",
            radius: (e / 1600) * 110,
            center: ["55%", "42%"],
            // startAngle: 60,
            // labelLine: {
            //   normal: {
            //     length: 10,
            //     length2: 50,
            //     lineStyle: {
            //       type: "solid",
            //       width: 1,
            //     },
            //   },
            // },
            avoidLabelOverlap: true,
            stillShowZeroSum: true,
            minShowLabelAngle: 10,
            label: {
              position: "inside",
              alignTo: "labelLine", // label两端对称布局
              formatter: "{b}:{d}%",
              fontSize:(e / 1600) * 14
            },
            data: this.leftData
              ? this.leftData.map((item, index) => {
                  return {
                    name: this.type[index],
                    value: item,
                  };
                })
              : [
                  { name: "关注", value: 20, per: "20%" },
                  { name: "不良", value: 33, per: "33%" },
                  { name: "正常", value: 47, per: "47%" },
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
.zhiliangpieone {
  width: 38.125vw;
  height: 25vw;
}
</style>
