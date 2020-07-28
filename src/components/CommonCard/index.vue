<template>
  <el-card shadow="hover" class="chartCard">
    <div class="chartTitle">{{ title }}</div>
    <div class="chartValue">{{ value }}</div>
    <div class="chartContent">
      <slot name="chart"></slot>
    </div>
    <div class="chartTotal">
      <slot name="total"></slot>
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
.emphasis {
  margin-left: 10px;
  font-weight: 700;
  font-size: 16px;
}

.increase {
  width: 0;
  height: 0;
  border-width: 4px;
  border-color: transparent transparent red transparent;
  border-style: solid;
  margin: 0 0 4px 5px;
}

.decrease {
  width: 0;
  height: 0;
  border-width: 4px;
  border-color: green transparent transparent transparent;
  border-style: solid;
  margin: 4px 0 0 5px;
}
</style>

<style lang="less" scoped>
.chartCard {
  font-size: 14px;
  padding: 20px 24px 8px;
  color: rgba(0, 0, 0, 0.65);

  /deep/ .el-card__body {
    padding: 0;
  }

  .chartTitle {
    color: rgba(0, 0, 0, 0.45);
  }

  .chartValue {
    font-size: 30px;
    font-weight: 700;
    letter-spacing: 1px;
    color: rgba(0, 0, 0, 0.85);
  }

  .chartContent {
    height: 50px;
  }

  .chartTotal {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid #eee;
  }
}
</style>
