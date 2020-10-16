<template>
  <div class="zhizaoleftone" id="zhizaoleftone"></div>
</template>
<script>
export default {
  name: "",
  props: ["chartData"],
  mounted() {
    let chart = this.$echarts.init(document.getElementById("zhizaoleftone"));
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
        document.getElementById("zhizaorightone")
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
        "#5B59B8",
        "#598BCC",
        "#59CCC1",
      ];
      let e = document.body.clientWidth;
      let chart = this.$echarts.init(document.getElementById("zhizaoleftone"));
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
          type: "plain",
          orient: "vertical",
          // selectedMode:false,
          top: e/1600*40,
          left: e/1600*30,
          height: e/1600*270,
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
            center: ["50%", "45%"],
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
                  { name: "总览", value: 0, per: "0%" },
                  { name: "钢铁", value: 8861.78, per: "10%" },
                  { name: "有色", value: 8861.78, per: "8%" },
                  { name: "建材", value: 8861.78, per: "10%" },
                  { name: "铁路", value: 10765.34, per: "10%" },
                  { name: "电力", value: 10765.34, per: "10%" },
                  { name: "轻工", value: 10765.34, per: "21%" },
                 
                  { name: "轻纺", value: 10765.34, per: "21%" },
                  { name: "汽车", value: 10765.34, per: "21%" },
                  { name: "通信", value: 10765.34, per: "21%" },
                  { name: "工程机械", value: 10765.34, per: "21%" },
                  { name: "航空航天", value: 10765.34, per: "21%" },
                  {
                    name: "船舶和海洋工程装备",
                    value: 10765.34,
                    per: "21.89%",
                  },
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
.zhizaoleftone {
  width: 41.875vw;
  height: 22.40625vw;
}
</style>
