<template>
  <div class="zhiliangcentertwo" id="zhiliangcentertwo"></div>
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
      let myCharts = this.$echarts.init(
        document.getElementById("zhiliangcentertwo")
      );
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
          borderWidth: (e / 1600) * 1,
          padding: [(e / 1600) * 6, (e / 1600) * 12],
          textStyle: {
            color: "rgba(255, 255, 255, 0.8)",
            fontStyle: "normal",
            fontFamily: "微软雅黑",
            fontSize: (e / 1600) * 10,
            lineHeight:(e / 1600) * 18
          },
        },
        grid: {
          // 柱状图位置
          x: (e / 1600) * 50,
          y: (e / 1600) * 50,
          x2: (e / 1600) * 30,
          y2: (e / 1600) * 50,
        },
        legend: {
          // data: ["正常"],
          show: true,
          top: "4%",
          right: "10%",
          itemWidth: (e / 1600) * 8,
          itemHeight: (e / 1600) * 12,
          // icon: "roundRect",
          color: "#59ecff",
          textStyle: {
            color: "#b3bfca",
          },
        },
        xAxis: {
          data: [
            "新加坡",
            "芬兰",
            "美国",
            "新西兰",
            "德国",
            "加拿大",
            "英国",
            "澳洲",
            "日本",
            "法国",
          ],
          axisLabel: {
            interval: 0, //控制坐标是否全部显示
            inside: false,
            textStyle: {
              color: "#ccd7d7",
              fontSize: (e / 1600) * 12,
            },
            margin: (e / 1600) * 10,
            // formatter: function (params) {
            //   var newParamsName = ""; // 最终拼接成的字符串
            //   var paramsNameNumber = params.length; // 实际标签的个数
            //   var provideNumber = 2; // 每行能显示的字的个数
            //   var rowNumber = Math.ceil(paramsNameNumber / provideNumber); // 换行的话，需要显示几行，向上取整
            //   /**
            //    * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
            //    */
            //   // 条件等同于rowNumber>1
            //   if (paramsNameNumber > provideNumber) {
            //     /** 循环每一行,p表示行 */
            //     for (var p = 0; p < rowNumber; p++) {
            //       var tempStr = ""; // 表示每一次截取的字符串
            //       var start = p * provideNumber; // 开始截取的位置
            //       var end = start + provideNumber; // 结束截取的位置
            //       // 此处特殊处理最后一行的索引值
            //       if (p == rowNumber - 1) {
            //         // 最后一次不换行
            //         tempStr = params.substring(start, paramsNameNumber);
            //       } else {
            //         // 每一次拼接字符串并换行
            //         tempStr = params.substring(start, end) + "\n";
            //       }
            //       newParamsName += tempStr; // 最终拼成的字符串
            //     }
            //   } else {
            //     // 将旧标签的值赋给新标签
            //     newParamsName = params;
            //   }
            //   //将最终的字符串返回
            //   return newParamsName;
            // },
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
              fontSize: e/1600*14,
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
            name: "不良贷款",
            type: "bar",
            barWidth: (e / 1600) * 18,
            itemStyle: {
              color: "#b4a8ff",
            },
            // itemStyle: {
            //   color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //     { offset: 0, color: "#20F2FF" },
            //     { offset: 1, color: "#003FBE" },
            //   ]),
            // },
            data: [76, 58, 56, 47, 37, 35, 20, 18, 16, 10],
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
};
</script>

<style lang="less" scoped>
.zhiliangcentertwo {
  width: 35.625vw;
  height: 16.292vw;
  top: 6vw;
}
</style>
