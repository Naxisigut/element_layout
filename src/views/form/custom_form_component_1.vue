<template>
  <div class="page-container">
    <div class="container">
        <MyForm 
            ref="formPage"
            :fieldList="fieldList" 
            :data="formData"
            :rules="formRules" 
            @handleEvent="eventHandler" 
            @uploadFile="uploaderHandler"
        >
            <template #form-item-btn>
                <el-button @click="validateForm" >校验</el-button>
            </template>
        </MyForm>
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
        formRules: {
            name: {
                required: true,
                message: 'err',
                trigger: 'blur'
            },
            avatar:{
                validator: this.uploadValidator,
                message: 'avatar err',
                trigger: 'disabled'
            }
        },
        formData:{
            name: '',
            gender: '',
            avatar: ''
        },
        fieldList:[
            /* 普通输入框 */
            {
                label: 'name',
                labelAttach: '-', // label后缀字符
                type: 'input', // 表单项类型 同时是输入框类型
                show: true, // 表单项是否显示；不传默认显示
                event: 'I am fieldList event', // 输入框focus时监听handleEvent事件所触发的回调的第一个参数
                value: 'name', // 表单项绑定的数据校验字段, 同时是输入框vmodel的对象formData[value]
                // width: 100, // 输入框的宽度
                disabled: false, // 是否禁用
                clearable: false, // 是否可清空 不传默认可清空
            },
            {
                label: 'gender',
                type: 'input',
                event: 'click',
                value: 'gender'
            },
            /* 上传 */
            {
                label: 'avatar',
                type: 'file',
                value: 'avatar',
                notAutoUpload: true, // 是否自动上传
                disabled: false, // 是否禁用 禁用后整个表单项隐藏
                default: undefined, // 默认文件列表，不可传''和null
                // 事件：uploadFile
            },
            /* slot */
            {
                slot: true,
                value: 'btn'
            }
        ]
    }
  },
  mounted(){
  },
  methods: {
    eventHandler(fieldListEvent, params){
        // console.log("fieldListEvent =", fieldListEvent)
        // console.log("params =", params)
    },
    uploaderHandler(key, fileRaw, eventType, fileList){
        console.log("uploaderHandler")
        console.log("key =", key)
        console.log("fileRaw =", fileRaw)
        console.log("eventType =", eventType)
        console.log("fileList =", fileList)
    },
    validateForm(){
        this.$refs.formPage.$refs.form.validate()
    },
    uploadValidator(rule, value, cb){
        // 上传组件暂时无法校验
        // 若要校验，至少需要拿到el-upload的fileList，会非常麻烦
        cb()
    }
  },
}
</script>

<style scoped lang='less'>
  @import '@/style/formStyle.less';
</style>
