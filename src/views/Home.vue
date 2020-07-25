<template>
  <div class="home">
    <el-button>Button</el-button>
    <div id="echarts" ref="echarts" style="width: 600px;height:400px;"></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  mounted() {
    this.getEcgarts()
  },
  methods: {
    getEcgarts() {
      const myChart = this.$echarts.init(document.getElementById('echarts'))
      myChart.setOption({
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      })
    }
  }
}
</script>
