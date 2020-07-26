<template>
  <common-card title="累计销售额" value="¥ 32,039,165">
    <template v-slot:chart>
      <div class="compare-warpper">
        <div class="compare">
          <span>日同比</span>
          <span class="emphasis">7.33%</span>
          <div class="increase"></div>
        </div>
        <div class="compare">
          <span>月同比</span>
          <span class="emphasis">38.79%</span>
          <div class="decrease"></div>
        </div>
      </div>
    </template>
    <template v-slot:total>
      <div>
        <span>昨日销售额</span>
        <span class="emphasis">¥12,088,063</span>
      </div>
    </template>
  </common-card>
</template>

<script>
import CommonCardMixin from '@/mixins/CommonCardMixin'
export default {
  mixins: [CommonCardMixin]
}
</script>

<style lang="less" scoped>
.compare-warpper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .compare {
    display: flex;
    align-items: center;
    height: 50%;
    color: #666;
  }
}
</style>
