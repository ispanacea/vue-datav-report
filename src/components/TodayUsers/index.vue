<template>
  <common-card title="今日交易用户数" value="81,040">
    <template v-slot:total>
      <div>
        <span>退货率</span>
        <span class="emphasis">5.14%</span>
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

<style></style>
