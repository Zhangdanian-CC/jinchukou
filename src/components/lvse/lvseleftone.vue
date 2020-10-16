<template>
  <div class="lvseleftone" id="lvseleftone"></div>
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
        "#b4a8ff",
        "#0048f1",
        "#FFE500",
        "#9a59cc",
      
      ];

      let chart = this.$echarts.init(document.getElementById("lvseleftone"));
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
          formatter: "{b}<br />{c}万吨",
        },
        legend: {
          show: true,
          type: "plain",
          orient: "vertical",
          top: 30,
          left: 35,
          height: 230,
          itemGap: 20,
          itemWidth: 9,
          itemHeight: 12,
          icon: "roundRect",
          color: "#59ecff",
          textStyle: {
            color: "#b3bfca",
          },
        },
        color: colorList,
        series: [
          {
            name: "余额",
            type: "pie",
            radius: 70,
            center: ["60%", "53%"],
            startAngle: 60,
            labelLine: {
              normal: {
                length: 10,
                length2: 10,
                lineStyle: {
                  type: "solid",
                  width: 1,
                },
              },
            },
            avoidLabelOverlap: true,
            stillShowZeroSum: true,
            // minShowLabelAngle: 10,
            label: {
              position: "outside",
              alignTo: "labelLine", // label两端对称布局
              formatter: "{b}: {c}万吨",//"\n" + + "{d}%"
              borderWidth: 0,
              borderRadius: 1,
              fontSize: 12,
              lineHeight: 16,
              // color: "#fff",
              // padding: [12, 0, 25, 0],
              // rich: {
              //   b: {
              //     fontSize: 12,
              //     lineHeight: 16,
              //     color: "rgba(255,255,255,.7)",
              //     padding: [12, 0, 25, 0],
              //   },
              //   c: {
              //     fontSize: 12,
              //     lineHeight: 16,
              //     color: "#fff",
              //     padding: [12, 0, 25, 0],
              //   },
              //   d: {
              //     fontSize: 12,
              //     lineHeight: 16,
              //     color: "#fff",
              //     padding: [12, 0, 25, 0],
              //   },
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
                  { name: "煤", value: 4146.26, per: "10%" },
                  { name: "二氧化硫", value: 14.61, per: "10%" },
                  { name: "二氧化碳", value: 7200.55, per: "8%" },
                  { name: "水", value: 628.67, per: "10%" },
                  { name: "氮氧化物", value: 4.04, per: "10%" },
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
.lvseleftone {
  width: 32vw;
  height: 14.493vw;
}
</style>
