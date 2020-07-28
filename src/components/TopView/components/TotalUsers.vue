<template>
  <common-card title="运营活动效果" value="2,464,973">
    <template v-slot:chart>
      <div class="contentProgress">
        <el-progress :text-inside="true" :stroke-width="20" :percentage="percentageData" :status="statusData"></el-progress>
      </div>
    </template>
    <template v-slot:total>
      <div class="totalUsersFooter">
        <div class="contentTrend" style="margin-right: 16px;">
          <span>日同比</span>
          <span class="emphasis">8.73%</span>
          <div class="increase"></div>
        </div>
        <div class="contentTrend">
          <span>月同比</span>
          <span class="emphasis">35.91%</span>
          <div class="decrease"></div>
        </div>
      </div>
    </template>
  </common-card>
</template>

<script>
import CommonCardMixin from '@/mixins/CommonCardMixin'
export default {
  mixins: [CommonCardMixin],
  data() {
    return {
      percentageData: 0,
      statusData: null
    }
  },
  created() {
    this.getPercentage()
  },
  methods: {
    getPercentage() {
      const percentageData = Math.round(Math.random() * 100)
      this.percentageData = percentageData
      if (percentageData <= 50) {
        this.statusData = 'exception'
      } else if (percentageData > 50 && percentageData <= 80) {
        this.statusData = 'warning'
      } else {
        this.statusData = 'success'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.contentProgress {
  box-sizing: border-box;
  height: 100%;
  padding: 15px 0;
}

.totalUsersFooter,
.contentTrend {
  display: flex;
  align-items: center;
}
</style>
