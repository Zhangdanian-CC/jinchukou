<template>
  <div class="zhizaolefttwo" id="zhizaolefttwo"></div>
</template>
<script>
export default {
  name: "",
  props: ["chartData"],
  mounted() {
    this.initPie(this.chartData);
    let chart = this.$echarts.init(document.getElementById("zhizaolefttwo"));
    this.initPie(this.chartData);
    chart.on("legendselectchanged", (selected, name) => {
      let array1 = [];
      let array2 = [];
      let array3 = [];
      for (var i = 0; i <= 12; i++) {
        array1.push(Math.floor(Math.random() * 79));
        array2.push(Math.floor(Math.random() * 79));
        array3.push(Math.floor(Math.random() * 79));
      }
      console.log(selected);
      selected[name] = true;
      chart.setOption({ legend: { selected: selected[name] } });
      let myCharts = this.$echarts.init(
        document.getElementById("zhizaorighttwo")
      );
      myCharts.setOption({
        title: {
          text: selected.name,
        },
        series: [
          {
            data: array1,
          },
          {
            data: array2,
          },
          {
            data: array3,
          },
        ],
      });
    });
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    initPie(data) {
      const colorList = ["#9a59cc", "#1d83fa", "#5b4cff", "#b4a8ff"];
      let e = document.body.clientWidth;
      let chart = this.$echarts.init(document.getElementById("zhizaolefttwo"));
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
          formatter: "{b}<br />{d}%",
        },
        legend: {
          show: true,
          type: "scroll",
          orient: "vertical",
          top: e/1600*90,
          left: e/1600*50,
          itemGap: e/1600*30,
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
            name: "余额",
            type: "pie",
            radius: e/1600*110,
            center: ["47%", "50%"],
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
              //  ECharts v4.6.0 版本起，提供了 'labelLine' 与 'edge' 两种新的布局方式
              // margin: 30, // 布局为两端对称时候需要外边距防止图表变形 数值随意不要太大
              // distanceToLabelLine: 1, // label距离引导线距离
              // formatter: "{b}" + "\n" + "{a}: {c}亿" + "\n" + "({d}%)",
              // borderWidth: 0,
              // borderRadius: 1,
              // // padding: [0, -50],
              // // height: 40,
              // // fontSize: 12,
              // // align: "left",
              // // color: "#3494BD",
              // fontSize: 12,
              // lineHeight: 16,
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
                  { name: "总览", value: 0, per: "0%" },
                  { name: "装备出口贷款", value: 8861.78, per: "33.3%" },
                  { name: "境外投资贷款", value: 8861.78, per: "33.3%" },
                  { name: "工程承包贷款", value: 8861.78, per: "33.4%" },
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
.zhizaolefttwo {
  width: 41.875vw;
  height: 22.40625vw;
}
</style>
