<template>
  <div class="duiwaihuanone" id="duiwaihuanone"></div>
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
      const colorList = ["#00C2FF", "#B4A8FF", "#1E93FF", "#FFE500", "#3166ED"];

      let chart = this.$echarts.init(document.getElementById("duiwaihuanone"));
      chart.setOption({
        title: {
          text: "贷款余额",
          textStyle: {
            color: "#b3bfca",
            fontSize: 14,
          },
          top: 30,
          left: 123,
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
          // formatter: "{b}<br />{d}%",
          formatter: "{b}<br/>{d}%<br/>{c}亿",
        },
        color: colorList,
        graphic: {
          elements: [
            {
              type: "image",
              style: {
                image: require("../../assets/images/jinchukou/Ellipse 7.png"),
                width: 60,
                height: 60,
              },
              left: "122",
              top: "142",
            },
          ],
        },
        series: [
          {
            name: "贷款余额",
            type: "pie",
            radius: [35, 65],
            center: ["50%", "60%"],
            startAngle: 60,
            avoidLabelOverlap: true,
            stillShowZeroSum: true,
            minShowLabelAngle: 10,
            label: {
              position: "outer",
              alignTo: "labelLine", // label两端对称布局
              //  ECharts v4.6.0 版本起，提供了 'labelLine' 与 'edge' 两种新的布局方式
              margin: 30, // 布局为两端对称时候需要外边距防止图表变形 数值随意不要太大
              distanceToLabelLine: 1, // label距离引导线距离
              formatter: "{b}" + "\n" + "{d}%" + "\n" + "{c}亿",
              borderWidth: 0,
              borderRadius: 1,
              fontSize: 12,
              lineHeight: 16,
              color: "#b3bfca",
              padding: [12, 0, 25, 0],
              rich: {
                b: {
                  fontSize: 12,
                  lineHeight: 16,
                  color: "#b3bfca",
                  padding: [12, 0, 25, 0],
                },
                c: {
                  fontSize: 12,
                  lineHeight: 16,
                  color: "#b3bfca",
                  padding: [12, 0, 25, 0],
                },
                d: {
                  fontSize: 12,
                  lineHeight: 16,
                  color: "#b3bfca",
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
                  { name: "欧洲", value: 3.43, per: "8%" },
                  { name: "南美洲", value: 3.43, per: "10%" },
                  { name: "非洲", value: 3.43, per: "10%" },
                  { name: "北美洲", value: 3.43, per: "10%" },
                  { name: "亚洲", value: 3.43, per: "10%" },
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
.duiwaihuanone {
  width: 19vw;
  height: 17.865vw;
  float: left;
  top: 3.5vw;
}
</style>
