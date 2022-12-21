<template>
  <div class="custom-pagination">
    <el-pagination
      v-bind="pageConfig"
      :current-page="current" 
      :page-size="size" 
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: 'custom-pagination',
  props:{
    current: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 1000,
    },
    size: {
      type: Number,
      default: 10
    }
  },
  data(){
    return {
      pageConfig: {
        'layout':"prev, pager, next, sizes, jumper, total",
        'page-sizes': [10, 20],
      },
      pageParams: {
        current: 1,
        total: 1000, 
        size: 10
      }
    }
  },
  methods:{
    handleSizeChange(val){
      this.$emit('update:size', val) // sync
    },
    handleCurrentChange(val){
      this.$emit('update:current', val) // sync
    }
  }
}
   
</script>

<style lang="less" scoped>
</style>