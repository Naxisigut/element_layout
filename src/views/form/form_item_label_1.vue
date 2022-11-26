<template>
  <div class="page-container">
    <div class="container">
      <el-form ref="form" label-width="80px">
        <el-form-item label="name" class="verCenterItem">
          <el-input></el-input>
          <el-input></el-input>
          <el-input></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="h100"></div>
    <div class="container desc">
      <h2>说明</h2>
      <div class="h10"></div>
      <ul>
        <li>需要样式穿透, 把label的行高设置为内容的高度</li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>

<style scoped lang='less'>
  @import '@/style/formStyle.less';
  /deep/ .verCenterItem .el-form-item__label{
        line-height: 120px;
  }
</style>
