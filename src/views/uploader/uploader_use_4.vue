<template>
  <div class="page-container">
    <div class="container">
      <!-- action="#" -->
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        :auto-upload="false"
        :on-change="onChange"
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
        <li> 文件数量超过3个后，可继续上传，之前的文件移除，保持数量为3个 </li>
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
      console.log("fileList =", fileList)
      if(fileList.length > 3) fileList = fileList.slice(-3)
    },
  },
};
</script>

<style lang="less" scoped>
@import "@/style/uploaderStyle";
</style>
