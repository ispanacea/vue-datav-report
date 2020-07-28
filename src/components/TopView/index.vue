<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <total-sales></total-sales>
    </el-col>
    <el-col :span="6">
      <total-orders></total-orders>
    </el-col>
    <el-col :span="6">
      <today-users></today-users>
    </el-col>
    <el-col :span="6">
      <total-users></total-users>
    </el-col>
  </el-row>
</template>

<script>
import { TotalSales, TotalOrders, TodayUsers, TotalUsers } from './components'
export default {
  components: {
    TotalSales,
    TotalOrders,
    TodayUsers,
    TotalUsers
  }
}
</script>
