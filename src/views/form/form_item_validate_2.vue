<template>
  <div class="page-container">
    <div class="container">
      <el-form ref="form" :model="model" label-width="80px" :rules="rules">
        <el-form-item 
            label="uesrname"
            prop="username"
            key="username"
            v-if="formType == 'username'"
            :rules="{ required: true, trigger: 'blur', message: 'username is not valid'}"
        >
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item
            label="telephone"
            prop="telephone"
            key="telephone"
            v-if="formType == 'telephone'"
            :rules="{ required: true, trigger: 'blur', message: 'telephone is not valid'}"
        >
          <el-input v-model="model.telephone"></el-input>
        </el-form-item>
        <el-form-item
            label="password"
            prop="password"
            key="password"
            :rules="{ required: true, trigger: 'blur', message: 'password is not valid' }"
        >
          <el-input v-model="model.password"></el-input>
        </el-form-item>
      </el-form>
      <el-button @click="changeFormType" >表单项切换</el-button>
      <el-button @click="validate" >全表单校验</el-button>
    </div>
    <div class="h100"></div>
    <div class="container desc">
      <h2>说明</h2>
      <div class="h10"></div>
      <ul class="descList">
        <li>动态表单：表单在不同情况下渲染不同的表单项，进行不同表单项的校验，则为动态表单</li>
        <li>动态表单的条件渲染：可通过在form-item上加v-if来完成，注意每个form-item需要加上key，否则可能会出现渲染出错的情况</li>
        <li>动态表单的动态校验：建议通过在条件渲染的form-item上添加rule属性来完成。因为执行ref.xxx.validate时只会对已渲染的form-item进行校验，没有渲染的不会被校验。</li>
        <li>另一方面，在form上添加rules属性来一次性校验全局表单亦可，同样只校验已渲染的item。</li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
        formType: 'username',
        model: {
            username: '',
            password: '',
            telephone: '',
            test: ''
        },
        rules:{
            username:[
                {required: true, message: '1'}
            ],
            password:[
                {required: true, message: '2'}
            ],
            telephone:[
                {required: true, message: '3'}
            ],
            test:[
                {required: true, message: '4'}
            ],
        }
    }
  },
  methods: {
    changeFormType(){
        if(this.formType == 'username') return this.formType = 'telephone'
        if(this.formType == 'telephone') return this.formType = 'username'
    },
    validate(){
        this.$refs.form.validate()
    }
  },
}
</script>

<style scoped lang='less'>
  @import '@/style/formStyle.less';
</style>
