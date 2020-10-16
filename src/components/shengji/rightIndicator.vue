<template>
  <div class="column-box" :id="ids"></div>
</template>

<script>
export default {
  name: "",
  props: ["ids", "data", "title"],
  mounted() {
    this.initColumnChart(this.ids);
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    initColumnChart(id) {
      //   if (!data || JSON.stringify(data) == '"{}"') return;
      let myCharts = this.$echarts.init(document.getElementById(id));
      myCharts.setOption({
        
        tooltip: {
          //提示框组件
          trigger: "axis",
          // formatter: "{b}<br />{a}: {c}",
          axisPointer: {
            type: "shadow",
            label: {
              backgroundColor: "#6a7985"
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
            fontSize: 10
          },
          // formatter: "{b}<br/>{a}: {c}亿",
        },
        grid: {
          // 柱状图位置
          x2: 28,
          y:70,
          y2:30
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
              fontSize: 12 ,
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
          // {
          //   name:this.title,
          //   type: "bar",
          //   barWidth: '20%',
          //   itemStyle: {
          //     color: "rgba(0,0,0,0)",
          //   },
          //   barGap: "-100%",
          //   barCategoryGap: "40%",
          //   // data: dataShadow,
          //   animation: false,
          // },
          {
            name:this.title,
            type: "bar",
            barWidth: 18,
             barGap: "-100%",
            barCategoryGap: "40%",
            animation: false,
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                 {offset: 0, color: '#20F2FF'},
                 {offset: 1, color: '#003FBE'}
              ]),
            },
            emphasis: {
              itemStyle: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#2378f7" },
                  { offset: 0.7, color: "#2378f7" },
                  { offset: 1, color: "#83bff6" },
                ]),
              },
            },
            data: this.data,
          },
        ],
      });
      console.log(myCharts);
    },
  },
  components: {},
};
</script>

<style lang="less" scoped>
.column-box {
  width: 100%;
  height: 32.3%;
}
</style>
