<template>
  <div class="page-container">
    <div class="container">
        <el-button @click="show" >显示dialog</el-button>
        <el-dialog :visible.sync="visible"></el-dialog>
    </div>
    <div class="h100"></div>
    <div class="container desc">
      <h2>说明</h2>
      <div class="h10"></div>
      <ul class="descList">
        <li>说明区</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
        visible: false
    }
  },
  methods:{
    show(){
        this.visible = true
    },
  },
  mounted(){
  }
}
</script>

<style lang='less' scoped>
@import '@/style/dialogStyle';
</style>