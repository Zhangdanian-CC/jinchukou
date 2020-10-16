<template>
  <div class="yidaipieone" id="yidaipieone"></div>
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
        "#9A59CC",
      ];
      let e = document.body.clientWidth;
      let chart = this.$echarts.init(document.getElementById("yidaipieone"));
      chart.setOption({
        tooltip: {
          show: true,
          icon: "roundRect",
          textStyle: {
            color: "rgba(255, 255, 255, 0.8)",
            fontStyle: "normal",
            fontFamily: "微软雅黑",
            fontSize: 14,
          },
          // formatter: "{b}<br />{d}%",
          formatter: "{b}:{d}%",
        },
        legend: {
          show: true,
          type: "scroll",
          orient: "vertical",
          top: e/1600*50,
          left: "45%",
          itemGap: e/1600*12,
          itemWidth: e/1600*8,
          itemHeight: e/1600*12,
          icon: "roundRect",
          color: "#59ecff",
          textStyle: {
            color: "#b3bfca",
          },
        },
        color: colorList,
        graphic: {
          elements: [
            {
              type: "image",
              style: {
                image: require("../../assets/images/jinchukou/Ellipse 7.png"),
                width: e/1600*80,
                height: e/1600*80,
              },
              left: e/1600*114,
              top:e/1600*136,
            },
            
          ],
        },
        series: [
          {
            name: "余额",
            type: "pie",
            radius: [e/1600*50, e/1600*100],
            center: ["23%", "49%"],
            startAngle: 60,
            avoidLabelOverlap: true,
            stillShowZeroSum: true,
            minShowLabelAngle: 10,
            label: {
              show: false,
              // position: "center",
              // formatter: function (params) {
              //   var res =
              //     '<img src="../../assets/images/jinchukou/Ellipse 7.png">';
              //   return res;
              // },
            },
            data: this.leftData
              ? this.leftData.map((item, index) => {
                  return {
                    name: this.type[index],
                    value: item,
                  };
                })
              : [
                  { name: "基础设施互联互通", value: 8861.78, per: "10%" },
                  { name: "经济合作", value: 8861.78, per: "8%" },
                  { name: "产业投资", value: 8861.78, per: "10%" },
                  { name: "能源资源合作", value: 10765.34, per: "10%" },
                  { name: "金融合作", value: 10765.34, per: "10%" },
                  { name: "人文交流", value: 10765.34, per: "21%" },
                  { name: "生态保护", value: 10765.34, per: "21%" },
                  { name: "海上合作", value: 10765.34, per: "21%" },
                  { name: "其他", value: 10765.34, per: "21%" },
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
.yidaipieone {
  width: 41.875vw;
  height: 22.40625vw;
  // background: url("../../assets/images/jinchukou/Ellipse 7.png") no-repeat;
  // background-size: 50% 50%;
}
</style>
