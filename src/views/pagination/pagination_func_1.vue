<template>
  <div class="page-container">
    <div class="container">
      <custom-pagination 
        :current.sync="pageParams.current"
        :size.sync="pageParams.size"
        :total="pageParams.total"
      ></custom-pagination>
    </div>
    <div class="h100"></div>
    <div class="container desc">
      <h2>说明</h2>
      <div class="h10"></div>
      <ul class="descList">
        <li>current和size在使用了.sync后，可以双向绑定数据：在组件上点击页码/每页数量后，绑定的数据会同步改变。</li>
      </ul>
    </div>
  </div>
</template>

<script>
import customPagination from '@/components/custom-pagination';
export default {
  components:{ customPagination },
  data(){
    return {
      pageParams: {
        current: 1,
        total: 1000, 
        size: 10
      }
    }
  }
}
</script>

<style lang='less' scoped>
@import '@/style/tableStyle';
</style>