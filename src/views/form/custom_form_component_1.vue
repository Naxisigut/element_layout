<template>
  <div class="page-container">
    <div class="container">
        <MyForm :fieldList="fieldList" :data="formData"></MyForm>
    </div>
    <!-- <div class="h100"></div>
    <div class="container desc">
      <h2>说明</h2>
      <div class="h10"></div>
      <ul class="descList">
        <li>说明区</li>
      </ul>
    </div> -->

  </div>
</template>

<script>
import MyForm from "@/components/my-form";
export default {
  components:{
    MyForm
  },
  data() {
    return {
        formData:{
            name: '',
            gender: ''
        },
        fieldList:[
            /* 普通输入框 */
            {
                type: 'input', // 表单项类型
                show: true, // 是否显示；不传默认显示
                event: 'click', 
                value: 'name', // 表单项绑定的数据字段
                width: 100, // 输入框的宽度
                disabled: false, // 输入框是否禁用
            },
            {
                type: 'input',
                event: 'click',
                value: 'gender'
            }
        ]
    }
  },
  methods: {
  },
}
</script>

<style scoped lang='less'>
  @import '@/style/formStyle.less';
</style>
