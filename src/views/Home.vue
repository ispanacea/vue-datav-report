<template>
  <div class="home">
    <top-view></top-view>
  </div>
</template>

<script>
import TopView from '@/components/TopView'
export default {
  name: 'Home',
  components: { TopView },
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
