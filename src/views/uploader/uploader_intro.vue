<template>
  <div>
    <div>上传组件el-upload包含了两个子组件upload和el-upload-list</div>
    <div>upload是交互区，处理文件上传，添加，移除等操作</div>
    <div>el-upload-list负责展示文件列表</div>
    <div>el-upload本身的props file-list并不是响应式的，文件的添加/移除并不会对该对象产生影响，所以不传这个prop也没有任何问题 <br />
        其主要作用是生成默认文件列表，即在初始化的时候把其中的文件信息传给upload和el-upload-list组件。<br />
        这两个组件的props file-list才是响应式的，反应了真实的文件列表
    </div>
    <div>但是，el-upload的所有钩子，比如on-change，所传递的fileList是真实的fileList</div>
    <div>el-upload会对file-list中的file进行一层封装，file.raw才是原本的js file对象</div>
    <div>--------------------------------</div>
    <div>点击el-upload中的所有内容，默认都会打开文件选择框</div>


  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>