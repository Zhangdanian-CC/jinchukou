<template>
  <div class="line-box" :id="ids"></div>
</template>

<script>
export default {
  name: "",
  props: ["ids", "chartData"],
  mounted() {
    this.initColumnChart(this.ids, this.chartData);
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    initColumnChart(id, data, currentPro) {
      //   if (!data || JSON.stringify(data) == '"{}"') return;
      let e = document.body.clientWidth;
      let myCharts = this.$echarts.init(document.getElementById(id));
      myCharts.setOption({
        tooltip: {
          //提示框组件
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            label: {
              backgroundColor: "#6a7985",
            },
          },
          backgroundColor: "rgba(70,130,180,0.8)",
          borderColor: "rgba(47,79,79,1)",
          borderWidth: e/1600*1,
          padding: [e/1600*6, e/1600*12],
          textStyle: {
            color: "rgba(255, 255, 255, 0.8)",
            fontStyle: "normal",
            fontFamily: "微软雅黑",
            fontSize: e/1600*10,
            lineHeight: (e / 1600) * 18,
          },
        },
        grid: {
          // 柱状图位置
          x: e/1600*30,
          y: e/1600*30,
          x2: e/1600*10,
          y2: e/1600*20,
        },
        legend: {
          // data: ["正常"],
          show: true,
          top: "0%",
          right: "7%",
          itemWidth: e/1600*8,
          itemHeight: e/1600*12,
          // icon: "roundRect",
          color: "#59ecff",
          textStyle: {
            color: "#b3bfca",
          },
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
            "山东",
            "安徽",
          ],
          axisLabel: {
            interval: 0, //控制坐标是否全部显示
            inside: false,
            textStyle: {
              color: "#ccd7d7",
              fontSize: e/1600*12,
            },
            margin: e/1600*10,
            
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
              fontSize: e/1600*12,
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
            name: "正常",
            type: "bar",
            stack: "aa",
            barWidth: e/1600*12,
            itemStyle: {
              color: "#0975d9",
            },
            // itemStyle: {
            //   color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //     { offset: 0, color: "#20F2FF" },
            //     { offset: 1, color: "#003FBE" },
            //   ]),
            // },
            data: [40, 30, 26, 20, 22, 20, 22, 16, 15, 13],
          },
          {
            name: "不良",
            type: "bar",
            stack: "aa",
            barWidth: e/1600*12,
            itemStyle: {
              color: "#78e7ff",
            },
            // itemStyle: {
            //   color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //     { offset: 0, color: "#20F2FF" },
            //     { offset: 1, color: "#003FBE" },
            //   ]),
            // },
            data: [13, 14, 10, 17, 10, 8, 4, 9, 10, 5],
          },
          {
            name: "关注",
            type: "bar",
            stack: "aa",
            barWidth: e/1600*12,
            itemStyle: {
              color: "#b4a8ff",
            },
            // itemStyle: {
            //   color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //     { offset: 0, color: "#20F2FF" },
            //     { offset: 1, color: "#003FBE" },
            //   ]),
            // },
            data: [20, 24, 20, 12, 13, 16, 15, 14, 13, 12],
          },
        ],
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
      this.initColumnChart(this.ids, newVal);
    },
  },
};
</script>

<style lang="less" scoped>
</style>
