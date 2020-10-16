<template>
  <div class="line-box" id="leftone"></div>
</template>

<script>
export default {
  name: "",
  props: ["chartData"],
  mounted() {
    this.initLineChart(this.chartData);
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    initLineChart(data) {
      //   if (!data || JSON.stringify(data) == '"{}"') return;
      let e = document.body.clientWidth;
     let myCharts = this.$echarts.init(document.getElementById("leftone"));
      myCharts.setOption({
       tooltip: {
          //提示框组件
          trigger: "axis",
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
          y:e/1600*50,
          x2: e/1600*20,
          y2:e/1600*40
        },
        legend: {
          show:true,
          top: "5%",
          right: "5%",
          itemWidth: e/1600*16,
          icon:'roundRect',
          itemHeight: e/1600*3,
          color:'#59ecff',
          textStyle: {
            color: "#b3bfca",
          },
        },
        xAxis: {
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月",
          ],
          axisLabel: {
            interval: 0, //控制坐标是否全部显示
            inside: false,
            textStyle: {
              color: "#ccd7d7",
              fontSize: e/1600*12,
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
            name: "业务余额",
            symbol: "none", //去掉点
            type: "line",
            smooth:true,
            itemStyle: {
              color: '#59ecff',
            },
            emphasis: {
              itemStyle: {
                color: '#59ecff',
              },
            },
            data: [34, 45, 67, 64, 58, 48, 54, 50, 38, 28, 24, 18],
          },
        ],
      });
    },
  },
  components: {},
};
</script>

<style lang="less" scoped>
.line-box {
  width: 100%;
  height: 100%;
}
</style>
