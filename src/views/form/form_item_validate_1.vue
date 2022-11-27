<template>
  <div class="page-container">
    <div class="container">
      <el-form ref="form" :model="model" label-width="80px" :rules="rules">
        <el-form-item label="username" prop="username">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
      </el-form>
      <el-button @click="validate">校验</el-button>
    </div>
    <div class="h100"></div>
    <div class="container desc">
      <h2>说明</h2>
      <div class="h10"></div>
      <ul class="descList">
        <li>通常来说，一个表单的校验分作三种：
            <ol style="padding-left: 20px">
                <li>单表单项校验：根据该form-item的rules对其绑定的prop进行校验，一般在接收到item内的子元素的change/blur事件时触发，在rule的trigger设置触发方式</li>
                <li>ref.xxx.validate: 执行此函数时校验全部已渲染的表单项的prop</li>
                <li>ref.xxx.validateField: 执行此函数时校验部分prop</li>
            </ol>
        </li>
        <li>若想要在输入表单时不触发，可把该表单项rule的trigger设置为非change/非blur/非空，比如说'disable'，那么就不会触发单表单项校验。</li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
        model: {
            username: ''
        },
        rules: {
            username: [{ required: true, trigger: 'disable', message: 'err'}]
        }
    }
  },
  methods: {
    validate(){
        this.$refs.form.validate()
    }
  },
}
</script>

<style scoped lang='less'>
  @import '@/style/formStyle.less';
</style>
