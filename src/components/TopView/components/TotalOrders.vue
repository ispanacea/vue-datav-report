<template>
  <common-card title="累计订单量" value="2,157,420">
    <template v-slot:chart>
      <v-chart :options="getTotalOrdersCharts()" />
    </template>
    <template v-slot:total>
      <span>昨日订单量</span>
      <span class="emphasis">1,008,600</span>
    </template>
  </common-card>
</template>

<script>
import CommonCardMixin from '@/mixins/CommonCardMixin'
export default {
  mixins: [CommonCardMixin],
  methods: {
    getTotalOrdersCharts() {
      const seriesData = []
      for (let i = 0; i < 12; i++) {
        seriesData.push(Math.round(Math.random() * 1000) + 200)
      }
      return {
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
            data: seriesData,
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
      }
    }
  }
}
</script>
