<template>
  <div class="common-card">
    <div class="title">{{ title }}</div>
    <div class="value">{{ value }}</div>
    <div class="chart">
      <slot name="chart"></slot>
    </div>
    <div class="line"></div>
    <div class="total">
      <slot name="total"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    value: {
      type: String
    }
  }
}
</script>

<style lang="less">
.emphasis {
  margin-left: 10px;
  font-weight: 700;
  color: #333;
  font-size: 14px;
}

.increase {
  width: 0;
  height: 0;
  border-width: 5px;
  border-color: transparent transparent red transparent;
  border-style: solid;
  margin: 0 0 4px 5px;
}

.decrease {
  width: 0;
  height: 0;
  border-width: 5px;
  border-color: green transparent transparent transparent;
  border-style: solid;
  margin: 4px 0 0 5px;
}
</style>

<style lang="less" scoped>
.common-card {
  font-size: 12px;
  color: #000;

  .title {
    color: #999;
  }
  .value {
    font-size: 25px;
    font-weight: 700;
    margin: 5px 0;
    letter-spacing: 1px;
  }
  .chart {
    height: 50px;
    font-size: 12px;
  }
  .line {
    margin: 10px 0;
    border-top: 1px solid #eee;
  }
}
</style>
