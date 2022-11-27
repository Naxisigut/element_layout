<template>
  <div class="page-container">
    <div class="container">
      <el-form ref="form" label-width="80px">
        <el-form-item label="name">
          <el-input></el-input>
        </el-form-item>
        <el-row type="flex" :gutter="20">
          <el-col :span="12">
            <el-form-item label="nickname">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="password">
              <el-input></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="h100"></div>
    <div class="container desc">
      <h2>说明</h2>
      <div class="h10"></div>
      <ul class="descList">
        <li>若想在一行内排列多个form-item, 可以使用el-row/col进行布局; el-row使用flex属性, 可以确保其中的元素在同一行</li>
        <li>正常模式下,form-item为块级, 宽度为100%; <br/> inline时则为行内块级, 宽度由内容决定; <br />而最常用的input在父元素没有设置宽度时, 默认宽度为200px(无边框), 所以form-item在inline时常常是200px宽</li>
        <li>所以, 不建议使用inline属性进行布局</li>
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
</style>
