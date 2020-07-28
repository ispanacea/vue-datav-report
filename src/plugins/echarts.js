import Vue from 'vue'
import ECharts from 'echarts'
import VCharts from 'v-charts'
import VueECharts from 'vue-echarts'

Vue.prototype.$echarts = ECharts
Vue.use(VCharts)
Vue.component('v-chart', VueECharts)
