<template>
  <div class="home">
    <top-view></top-view>
    <sales-view></sales-view>
  </div>
</template>

<script>
import TopView from '@/components/TopView'
import SalesView from '@/components/SalesView'
export default {
  name: 'Home',
  components: {
    TopView,
    SalesView
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="less" scoped>
.home {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 20px;
  background: #eee;
}
</style>
