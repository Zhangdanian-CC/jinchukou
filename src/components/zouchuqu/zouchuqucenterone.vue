<template>
  <div class="zouchuqucenterone" id="zouchuqucenterone"></div>
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
      const colorList = ["#b4a8ff", "#1e93ff", "#ffe500"];

      let chart = this.$echarts.init(
        document.getElementById("zouchuqucenterone")
      );
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
          formatter: "{b}<br />{d}%<br />{c}亿",
        },
        legend: {
          show: false,
          type: "scroll",
          orient: "vertical",
          top: "18%",
          left: "45%",
          itemGap: 12,
          itemWidth: 8,
          itemHeight: 12,
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
                width: 80,
                height: 80,
              },
              left: "43.5%",
              top: "40%",
            },
          ],
        },
        series: [
          {
            name: "余额",
            type: "pie",
            radius: [50, 100],
            center: ["50%", "50%"],
            startAngle: 60,
            labelLine: {
              normal: {
                length: 30,
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
              position: "outside",
              alignTo: "labelLine", // label两端对称布局
              formatter: "{b}" + "\n" + "{d}%" + "\n" + "{c}亿",
              borderWidth: 0,
              borderRadius: 1,
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
                  { name: "大型成套设备", value: 3.43, per: "12.66%" },
                  { name: "工程承包", value: 10.95, per: "40.41%" },
                  { name: "境外投资", value: 5.51, per: "20.34%" },
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
.zouchuqucenterone {
  width: 38.125vw;
  height: 25.3125vw;
  // background: url("../../assets/images/jinchukou/Ellipse 7.png") no-repeat;
  // background-size: 50% 50%;
}
</style>
