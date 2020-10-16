<template>
  <div class="duiwaipieone" id="duiwaipieone"></div>
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
      const colorList = ["#00C2FF", "#B4A8FF", "#3166ED", "#9a59cc"];

      let chart = this.$echarts.init(document.getElementById("duiwaipieone"));
      chart.setOption({
        title: {
          text: "贷款余额",
          textStyle: {
            color: "#b3bfca",
            fontSize: 18,
          },
          top: '15%',
          left: '45%',
        },
        tooltip: {
          show: true,
          icon: "roundRect",
          textStyle: {
            color: "rgba(255, 255, 255, 0.8)",
            fontStyle: "normal",
            fontFamily: "微软雅黑",
            fontSize: 14,
          },
          formatter: "{b}<br />{d}%",
        },
        legend: {
          show: true,
          type: "scroll",
          orient: "vertical",
          top: "42%",
          left: "65%",
          itemGap: 20,
          itemWidth: 10,
          itemHeight: 15,
          icon: "roundRect",
          color: "#59ecff",
          textStyle: {
            color: "#b3bfca",
            fontSize:20
          },
        },
        color: colorList,
        series: [
          {
            name: "贷款余额",
            type: "pie",
            radius: 110,
            center: ["35%", "60%"],
            startAngle: 60,
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
                  { name: "出口货物贷款", value: 8861.78, per: "20%" },
                  { name: "进口货物贷款", value: 8861.78, per: "18%" },
                  { name: "出口服务贷款", value: 8861.78, per: "30%" },
                  { name: "进口服务贷款", value: 10765.34, per: "10%" }
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
.duiwaipieone {
  width: 38.125vw;
  height: 25vw;
}
</style>
