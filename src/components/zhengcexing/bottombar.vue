<template>
  <div class="column-box" id="bottombar"></div>
</template>

<script>
export default {
  name: "",
  props: ["chartData"],
  mounted() {
    this.initColumnChart(this.chartData);
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    initColumnChart(data) {
      //   if (!data || JSON.stringify(data) == '"{}"') return;
      let e = document.body.clientWidth;
      let myCharts = this.$echarts.init(document.getElementById("bottombar"));
      myCharts.setOption({
        tooltip: {
          //提示框组件
          trigger: "axis",
          // formatter: "{b}<br />{a0}: {c0}<br />{a1}: {c1}",
          axisPointer: {
            type: "shadow",
            label: {
              backgroundColor: "#6a7985"
            }
          },
          backgroundColor: "rgba(70,130,180,0.8)",
          borderColor: "rgba(47,79,79,1)",
          borderWidth: 1,
          padding: [6, 12],
          textStyle: {
            color: "rgba(255, 255, 255, 0.8)",
            fontStyle: "normal",
            fontFamily: "微软雅黑",
            fontSize: 10
          }
        },
        grid: {
          // 柱状图位置
         left:0,
         right:0,
         top:e/1600*10,
         bottom:e/1600*30,
        },
        xAxis: {
          data: [
            "厦门",
            "北京",
            "上海",
            "广州",
            "深圳",
            "宁波",
            "公司部",
            "天津",
            "重庆",
            "安徽",
          ],
          axisLabel: {
            interval: 0, //控制坐标是否全部显示
            inside: false,
            textStyle: {
              color: "#ccd7d7",
              fontSize: e/1600*18,
            },
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              type: "solid",
              color: "#83aac4",
            },
          },
          z: 10,
        },
        yAxis: {
          splitNumber: 4,
          min: 0,
          max: 80,
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            textStyle: {
              color: "#999",
              fontSize:e/1600*14
            },
          },
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "#808079",
            },
          },
        },

        series: [
          {
            name: "新增业务额",
            type: "bar",
            barWidth: e/1600*24,
            itemStyle: {
              color: '#59ecff',
            },
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#20F2FF" },
                { offset: 1, color: "#003FBE" },
              ]),
            },
            data: [80, 77, 67, 64, 58, 53, 47, 42, 38, 28, 24, 18],
          },
        ],
      });
    },
  },
  components: {},
};
</script>

<style lang="less" scoped>
.column-box {
  width: 100%;
  height: 100%;
}
</style>
