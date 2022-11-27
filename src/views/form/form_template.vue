<template>
  <div class="page-container">
    <div class="container">
      <el-form ref="form" label-width="80px">
        <el-form-item label="username">
          <el-input></el-input>
        </el-form-item>
      </el-form>
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
