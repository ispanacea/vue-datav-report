<template>
  <common-card title="累计订单量" value="2,157,420">
    <template v-slot:chart>
      <div id="total-orders-chart" :style="{ width: '100%', height: '100%' }"></div>
    </template>
    <template v-slot:total>
      <div>
        <span>昨日订单量</span>
        <span class="emphasis">1,008,600</span>
      </div>
    </template>
  </common-card>
</template>

<script>
import CommonCardMixin from '@/mixins/CommonCardMixin'
export default {
  mixins: [CommonCardMixin],
  mounted() {
    this.getCharts()
  },
  methods: {
    getCharts() {
      const chartDom = document.querySelector('#total-orders-chart')
      const chart = this.$echarts.init(chartDom)
      chart.setOption({
        xAxis: {
          type: 'category',
          show: false,
          boundaryGap: false
        },
        yAxis: {
          show: false
        },
        series: [
          {
            data: [348, 432, 201, 534, 290, 630, 520, 652, 356, 548, 455, 658, 452, 258],
            type: 'line',
            smooth: true,
            areaStyle: {
              color: 'purple'
            },
            lineStyle: {
              width: 0
            },
            itemStyle: {
              opacity: 0
            }
          }
        ],
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }
      })
    }
  }
}
</script>

<style></style>
