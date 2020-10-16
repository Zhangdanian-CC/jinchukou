<template>
  <div class="line-box" id="leftonetwo"></div>
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
      let myCharts = this.$echarts.init(document.getElementById("leftonetwo"));
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
          borderWidth: 1,
          padding: [6, 12],
          textStyle: {
            color: "rgba(255, 255, 255, 0.8)",
            fontStyle: "normal",
            fontFamily: "微软雅黑",
            fontSize: 10,
          },
        },
        grid: {
          // 柱状图位置
          x: 50,
          y: 25,
          x2: 25,
          y2: 50,
        },
        legend: {
          data: [ "债券投资余额", "银行承兑汇票余额", "信用证余额"],
          show: true,
          top: "1%",
          right: "2%",
          itemWidth: 16,
          itemHeight: 3,
          icon: "roundRect",
          color: "#59ecff",
          textStyle: {
            color: "#b3bfca",
          },
        },
        xAxis: {
          data: ["厦门", "北京", "上海", "广州", "公司部"],
          axisLabel: {
            interval: 0, //控制坐标是否全部显示
            inside: false,
            textStyle: {
              color: "#ccd7d7",
              fontSize: 12,
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
            name: "债券投资余额",
            symbol: "none", //去掉点
            type: "line",
            smooth:true,
            itemStyle: {
              color: "#0d64ff",
            },
            emphasis: {
              itemStyle: {
                color: "#59ecff",
              },
            },
            data: [48, 30, 29, 40, 27,],
          },
           {
            name: "银行承兑汇票余额",
            symbol: "none", //去掉点
            type: "line",
            smooth:true,
            itemStyle: {
              color: "#59ecff",
            },
            emphasis: {
              itemStyle: {
                color: "#59ecff",
              },
            },
            data: [30, 50, 40, 60, 45,],
          },
           {
            name: "信用证余额",
            symbol: "none", //去掉点
            type: "line",
            smooth:true,
            itemStyle: {
              color: "#f6b658",
            },
            emphasis: {
              itemStyle: {
                color: "#59ecff",
              },
            },
            data: [19, 16, 23, 17, 15,],
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
  width: 41.875w;
  height: 11.40625vw;
}
</style>
