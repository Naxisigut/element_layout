<template>
  <div class="page-container">
    <div class="container">
      <!-- action="#" -->
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        :auto-upload="false"
        :file-list="fileList"
      >
        <!-- 
        :on-change="onChange"
        :before-remove="beforeRemove"
        :on-remove="onRemove"
        :before-upload="beforeUpload"
        :on-progress="onProgress"
        :on-success="onSuccess"
        :on-error="onErr" -->
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
        <el-button style="margin-top: 10px" size="small" type="primary" @click="clear" >清空文件</el-button>
        <el-button style="margin-top: 10px" size="small" type="primary" @click="init" >恢复初始状态</el-button>
    </div>
    <div class="h100"></div>
    <div class="container desc">
      <h2>说明</h2>
      <div class="h10"></div>
      <ul class="descList">
        <li>fileList可能有两种含义：1. el-upload所绑定的props file-list；2. 组件渲染出来的当前真实的fileList文件列表。这两者是不等同的。</li>
        <li>我们接下来讨论时，file-list表示props，fileList表示真实文件列表</li>
        <li>file-list是非必要的props，它可以不设置。</li>
        <li>在初始化时，file-list会被赋给fileList，即默认的文件列表</li>
        <li>在组件中添加/移除/上传等操作会影响fileList，但不会影响file-list</li>
        <li>file-list每次变化时，会重新赋值给fileList <br /></li>
        <li>总结：file-list只在初始化和变化时才会赋值给fileList，而fileList的变化不会影响file-list。两者关系是单向的。</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 默认列表
      fileList:  [
        {
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }
      ],
    };
  },
  methods: {
    clear(){
      this.fileList = []
    },
    init(){
      this.fileList =  [
        {
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }
      ]
    }
  },
};
</script>

<style lang="less" scoped>
@import "@/style/uploaderStyle";
</style>
