<template>
  <div class="page-container">
    <div class="container">
        <el-button @click="show" >显示dialog</el-button>
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
import Modal from "./modal";
import dialogTestContent from "./dialogTestContent.vue";
export default {
  data(){
    return {
      dialogConfig:{
        title: 'JSX渲染模态框',
        modal: false
      }
    }
  },
  methods:{
    show(){
      Modal(dialogTestContent, this.dialogConfig)
    }
  }
}
</script>

<style lang='less' scoped>
@import '@/style/dialogStyle';
</style>