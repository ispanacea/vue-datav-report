<template>
  <div class="twoColLayout">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="box-card">
          <template slot="header">
            <span class="title">关键词搜索</span>
          </template>
          <div style="height: 397px;">
            <div class="searchInfo">
              <el-row :gutter="68">
                <el-col :span="12">
                  <div class="searchInfoTitle">搜索用户数</div>
                  <div class="searchInfoValue">122,125</div>
                  <div class="searchInfoChart">
                    <v-chart :options="getTotalOrdersCharts" />
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="searchInfoTitle">人均搜索次数</div>
                  <div class="searchInfoValue">1.7</div>
                  <div class="searchInfoChart">
                    <v-chart :options="getTotalOrdersCharts" />
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="tableInfo">
              <el-table
                :data="tableData.slice((currentPage - 1) * pagesize, currentPage * pagesize)"
                :header-cell-style="{ background: '#fafafa' }"
                style="width: 100%"
                size="mini"
              >
                <el-table-column prop="index" label="序号" width="90"> </el-table-column>
                <el-table-column prop="keyword" label="搜索关键字"> </el-table-column>
                <el-table-column prop="count" label="搜索量"> </el-table-column>
                <el-table-column prop="range" label="浮动"> </el-table-column>
              </el-table>
              <el-pagination
                background
                layout="prev, pager, next"
                :total="tableData.length"
                :page-size="pagesize"
                :current-page="currentPage"
                @current-change="onPageChange"
              >
              </el-pagination>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <template slot="header">
            <span class="title">分类销售排行</span>
            <el-radio-group v-model="typeRadio" size="small">
              <el-radio-button label="线上"></el-radio-button>
              <el-radio-button label="门店"></el-radio-button>
            </el-radio-group>
          </template>
          <div style="height: 397px;">
            <v-chart :options="getSalesRankCharts()" />
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
const searchData = []
for (let i = 0; i < 50; i += 1) {
  searchData.push({
    index: i + 1,
    keyword: `搜索关键词-${i}`,
    count: Math.floor(Math.random() * 1000),
    range: Math.floor(Math.random() * 100)
  })
}

export default {
  data() {
    return {
      getTotalOrdersCharts: {
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
            data: [100, 343, 234, 352, 345, 245, 235, 523, 123, 23, 89],
            type: 'line',
            smooth: true,
            areaStyle: {
              color: 'rgba(95, 187, 255, 0.5)'
            },
            lineStyle: {
              color: 'rgb(95, 187, 255)'
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
      },
      typeRadio: '线上',
      tableData: searchData,
      pagesize: 5,
      currentPage: 1
    }
  },
  methods: {
    onPageChange(val) {
      this.currentPage = val
    },
    getSalesRankCharts() {
      return {
        // 标题组件，包含主标题和副标题。
        title: [
          {
            text: '品类分布',
            textStyle: {
              fontSize: 14
            },
            top: 10,
            left: 10
          },
          {
            text: '累计订单量',
            subtext: '320',
            textAlign: 'center',
            left: '35%',
            top: '45%',
            textStyle: {
              fontSize: 14,
              color: 'rgba(0,0,0,0.45)'
            },
            subtextStyle: {
              fontSize: 25,
              color: 'rgba(0,0,0,0.65)'
            }
          }
        ],
        // 提示框组件。
        tooltip: {
          // 触发类型: 数据项图形触发
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c}'
        },
        legend: {
          orient: 'vertical',
          bottom: 150,
          right: 30,
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            data: [
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' },
              { value: 234, name: '联盟广告' },
              { value: 135, name: '视频广告' },
              { value: 1548, name: '搜索引擎' }
            ],
            label: {
              show: true,
              position: 'outside',
              formatter: '{b}: {d}' + '%'
            },
            center: ['35%', '50%'],
            radius: ['50%', '75%']
          }
        ]
      }
    }
  }
}
</script>

<style lang="less" scoped>
.twoColLayout {
  width: 100%;
  margin-top: 20px;
}
.box-card {
  .title {
    font-weight: 500;
    color: rgba(0, 0, 0, 0.85);
  }

  .searchInfo {
    margin-bottom: 20px;

    .searchInfoTitle {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.45);
    }
    .searchInfoValue {
      margin-top: 8px;
      font-size: 24px;
      letter-spacing: 1px;
    }
    .searchInfoChart {
      margin-top: 8px;
      width: 100%;
      height: 50px;
    }
  }
  .tableInfo {
    .el-pagination {
      display: flex;
      justify-content: flex-end;
      margin-top: 10px;
    }
  }

  /deep/ .el-card__header {
    display: flex;
    height: 59px;
    align-items: center;

    /deep/ .el-radio-group {
      flex: 1;
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
