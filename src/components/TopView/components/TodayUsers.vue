<template>
  <common-card title="今日交易用户数" value="81,040">
    <template v-slot:chart>
      <v-chart :options="getTodayUsersChart()" />
    </template>
    <template v-slot:total>
      <span>退货率</span>
      <span class="emphasis">5.14%</span>
    </template>
  </common-card>
</template>

<script>
import CommonCardMixin from '@/mixins/CommonCardMixin'
export default {
  mixins: [CommonCardMixin],
  methods: {
    getTodayUsersChart() {
      const seriesData = []
      for (let i = 0; i < 12; i++) {
        seriesData.push(Math.round(Math.random() * 1000) + 200)
      }
      return {
        color: ['#3398db'],
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          show: false,
          type: 'category',
          data: ['02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00']
        },
        yAxis: {
          show: false
        },
        series: [
          {
            type: 'bar',
            name: '用户数',
            data: seriesData
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
