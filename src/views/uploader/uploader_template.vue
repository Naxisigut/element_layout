<template>
  <div class="page-container">
    <div class="container">
      <!-- action="#" -->
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        :auto-upload="false"
        :file-list="fileList"
        :on-change="onChange"
        :before-remove="beforeRemove"
        :on-remove="onRemove"
        :before-upload="beforeUpload"
        :on-progress="onProgress"
        :on-success="onSuccess"
        :on-error="onErr"
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
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
      // 默认列表
      fileList: [],
    };
  },
  methods: {
    /* 下面所有的fileList均为el-upload组件的upload子组件的fileList */
    /**
     * 文件列表的添加/移除
     */
    onChange(file, fileList) {
      /* 添加文件入文件列表时触发 */
      console.log(" ======= onChange ======= ");
      console.log("file =", file); // file added
      console.log("fileList =", fileList); // fileList after the file added
    },
    beforeRemove(file, fileList) {
      /* 从文件列表移除文件时(前)触发 */
      console.log(" ======= beforeRemove ======= ");
      console.log("file =", file); // file to be removed
      console.log("fileList =", fileList); // fileList before the file removed
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    onRemove(file, fileList) {
      /* 文件移除成功后触发 */
      console.log(" ======= onRemove ======= ");
      console.log("file =", file); // file removed
      console.log("fileList =", fileList); // fileList after the file removed
    },

    /**
     * 文件的上传
     */
    beforeUpload(fileRaw) {
      /* 文件开始上传前触发 */
      console.log(" ======= beforeUpload ======= ");
      console.log("fileRaw =", fileRaw); // raw data (js file object) of the file to be uploaded
    },
    onProgress(event, file, fileList) {
      /* 文件上传过程中触发 */
      console.log(" ======= onProgress ======= ");
      console.log("event =", event); // progress event type progress
      console.log("file =", file); // file uploading
      console.log("fileList =", fileList);
    },
    onSuccess(response, file, fileList) {
      /* 文件上传成功后触发 */
      console.log(" ======= onSuccess ======= ");
      console.log("response =", response); // response of the upload request
      console.log("file =", file); // file uploaded
      console.log("fileList =", fileList);
    },
    onErr(err, file, fileList) {
      /* 文件上传失败/错误时触发 */
      console.log(" ======= onErr ======= ");
      console.log("err =", err); // progress event: type error
      console.log("file =", file); // file uploaded err
      console.log("fileList =", fileList);
    },
  },
};
</script>

<style lang="less" scoped>
@import "@/style/uploaderStyle";
</style>
