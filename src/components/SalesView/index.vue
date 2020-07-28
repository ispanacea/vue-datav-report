<template>
  <div class="sales-view">
    <el-card>
      <template slot="header">
        <div class="menu-wrapper">
          <div class="menu-nav">
            <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
              <el-menu-item index="1">销售额</el-menu-item>
              <el-menu-item index="2">访问量</el-menu-item>
            </el-menu>
          </div>
          <div class="menu-radio-datepicker">
            <el-radio-group v-model="menuRadio" size="small">
              <el-radio-button label="今日"></el-radio-button>
              <el-radio-button label="本周"></el-radio-button>
              <el-radio-button label="本月"></el-radio-button>
              <el-radio-button label="本年"></el-radio-button>
            </el-radio-group>

            <el-date-picker
              v-model="datePicker"
              type="daterange"
              align="right"
              size="small"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions"
            >
            </el-date-picker>
          </div>
        </div>
      </template>
      <template v-if="activeFlag">
        <el-row>
          <el-col :span="16">
            <div style="height: 336px;">
              <v-chart :options="chartOptions()" />
            </div>
          </el-col>
          <el-col :span="8">
            <rank-list title="门店销售排行榜" :list="rankListData"></rank-list>
          </el-col>
        </el-row>
      </template>
      <template v-else>
        <el-row>
          <el-col :span="16">
            <div style="height: 336px;">
              <v-chart :options="chartOptions()" />
            </div>
          </el-col>
          <el-col :span="8">
            <rank-list title="门店销售排行榜" :list="rankListData"></rank-list>
          </el-col>
        </el-row>
      </template>
    </el-card>
  </div>
</template>

<script>
import RankList from '@/components/RankList'

const rankList = []
for (let i = 0; i < 7; i++) {
  rankList.push({
    name: '白鹭岛 ' + (i + 1) + ' 号店',
    total: 12345.6 - i * 100
  })
}

export default {
  components: { RankList },
  data() {
    return {
      activeIndex: '1',
      activeFlag: true,
      menuRadio: '今日',
      datePicker: '',
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一周',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      },
      rankListData: rankList
    }
  },
  methods: {
    chartOptions() {
      const barData = []
      const monthData = []
      for (let i = 0; i < 12; i += 1) {
        monthData.push(`${i + 1}月`)
        barData.push(Math.floor(Math.random() * 1000) + 200)
      }
      return {
        title: {
          text: '年度销售额',
          textStyle: {
            fontSize: 14,
            color: 'rgba(0,0,0,.85)'
          }
        },
        tooltip: {
          // trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          data: monthData,
          axisTick: {
            alignWithLabel: true,
            lineStyle: {
              color: '#999'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#999'
            }
          },
          axisLabel: {
            color: '#333'
          }
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            lineStyle: {
              type: 'dotted',
              color: '#eee'
            }
          }
        },
        series: [
          {
            type: 'bar',
            name: '销售额',
            barWidth: '35%',
            data: barData
          }
        ],
        grid: {
          top: 50,
          bottom: 50,
          left: 50,
          right: 0
        }
      }
    },
    handleSelect(key) {
      this.activeIndex = key
      if (key === '1') {
        this.activeFlag = true
      } else {
        this.activeFlag = false
      }
    }
  }
}
</script>

<style lang="less" scoped>
.sales-view {
  margin-top: 20px;

  /deep/ .el-card__header {
    border-bottom: none;
    padding: 0;
  }

  .menu-wrapper {
    position: relative;

    .el-menu {
      padding-left: 10px;

      .el-menu-item {
        height: 50px;
        line-height: 50px;
        margin: 0 20px;
      }
    }

    .menu-radio-datepicker {
      position: absolute;
      top: 0;
      right: 30px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .el-radio-group {
        margin-right: 20px;
      }
    }
  }
}
</style>
