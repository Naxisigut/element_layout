<template>
  <div class="page-container">
    <div class="container">
      <!-- action="#" -->
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        :auto-upload="false"
        :on-change="onChange"
        :limit="3"
        :on-exceed="onExceed"
      >
        <el-button size="small" type="primary">点击上传</el-button>
        <template #tip>
          <div class="upload_tip" >文件最多三个</div>
        </template>
      </el-upload>
      <!-- <input type="file" @change="change"> -->
    </div>
    <div class="h100"></div>
    <div class="container desc">
      <h2>说明</h2>
      <div class="h10"></div>
      <ul class="descList">
        <li> limit + on-exceed 来完成 </li>
        <li> limit的存在本身就限制了数量。on-exceed可用来进行提示。 </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    /**
     * 文件列表的添加/移除
     */
    onChange(file, fileList) {
      if(file.size > 100*1024){ // 单位是B，所以100KB为100*1024
        this.$message.warning('文件大于100KB')
        fileList.pop()
      }
    },
    onExceed(){
      this.$message.warning('文件最多3个')
    }
  },
};
</script>

<style lang="less" scoped>
@import "@/style/uploaderStyle";
</style>
