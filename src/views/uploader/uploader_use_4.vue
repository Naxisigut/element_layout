<template>
  <div class="page-container">
    <div class="container">
      <!-- action="#" -->
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        :auto-upload="false"
        :on-change="onChange"
        :file-list="fileList"
      >
        <el-button size="small" type="primary">点击上传</el-button>
        <template #tip>
          <div class="upload_tip" >文件最多一个</div>
        </template>
      </el-upload>
    </div>
    <div class="h100"></div>
    <div class="container desc">
      <h2>说明</h2>
      <div class="h10"></div>
      <ul class="descList">
        <li> 文件数量超过1个后，可继续上传，之前的文件移除，保持数量为1个 </li>
        <li> 绑定的fileList改变时，会把变化后的fileList重新赋给内部真正的fileList </li>
      </ul>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
    };
  },
  methods: {
    /**
     * 文件列表的添加/移除
     */
    onChange(file, fileList) {
      if(fileList.length > 1) {
        this.fileList = fileList.slice(-1) // 这里把包含真实fileList最后一个file的数组赋给this.fileList，更新fileList
      }
    }
  },
};
</script>

<style lang="less" scoped>
@import "@/style/uploaderStyle";
</style>
