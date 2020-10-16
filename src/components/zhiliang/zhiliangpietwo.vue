<template>
  <div class="zhiliangpietwo" id="zhiliangpietwo"></div>
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
      const colorList = [ "#B4A8FF", "#1E93FF", "#FFE500", "#3166ED","#c76a26","#00C2FF",];
      let e = document.body.clientWidth;
      let chart = this.$echarts.init(document.getElementById("zhiliangpietwo"));
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
                width: (e / 1600) * 60,
                height: (e / 1600) * 60,
              },
              left: (e / 1600) * 211,
              top: (e / 1600) * 142,
            },
          ],
        },
        series: [
          {
            name: "境内不良贷款",
            type: "pie",
            radius: [(e / 1600) * 35, (e / 1600) * 65],
            center: ["50%", "60%"],
            // startAngle: 20,
            avoidLabelOverlap: true,
            stillShowZeroSum: true,
            minShowLabelAngle: 10,
            label: {
              position: "outer",
              // alignTo: "labelLine", // label两端对称布局
              alignTo: "none", //label line 的长度为固定值
              //  ECharts v4.6.0 版本起，提供了 'labelLine' 与 'edge' 两种新的布局方式
              margin: (e / 1600) * 30, // 布局为两端对称时候需要外边距防止图表变形 数值随意不要太大
              distanceToLabelLine: 1, // label距离引导线距离
              formatter: "{b}" + "\n" + "{d}%" + "\n" + "{c}亿",
              borderWidth: 0,
              borderRadius: (e / 1600) * 1,
              fontSize: (e / 1600) * 14,
              lineHeight: (e / 1600) * 16,
              color: "#b3bfca",
              padding: [(e / 1600) * 12, 0, (e / 1600) * 25, 0],
              rich: {
                b: {
                  fontSize: (e / 1600) * 12,
                  lineHeight: (e / 1600) * 16,
                  color: "#b3bfca",
                  padding: [(e / 1600) * 12, 0, (e / 1600) * 25, 0],
                },
                c: {
                  fontSize: (e / 1600) * 12,
                  lineHeight: (e / 1600) * 16,
                  color: "#b3bfca",
                  padding: [(e / 1600) * 12, 0, (e / 1600) * 25, 0],
                },
                d: {
                  fontSize: (e / 1600) * 12,
                  lineHeight: (e / 1600) * 16,
                  color: "#b3bfca",
                  padding: [(e / 1600) * 12, 0, (e / 1600) * 25, 0],
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
                  { name: "长江经济带", value: 3.34, per: "10%" },
                  { name: "东部", value: 3.34, per: "40%" },
                  { name: "中部", value: 3.34, per: "22%" },
                  { name: "西部", value: 3.34, per: "18%" },
                  { name: "东北部", value: 3.34, per: "10%" },
                  { name: "京津冀", value: 3.34, per: "20%" },

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
.zhiliangpietwo {
   width: 30.104vw;
  height: 17.865vw;
  float: left;
  top: 3.5vw;
}
</style>
