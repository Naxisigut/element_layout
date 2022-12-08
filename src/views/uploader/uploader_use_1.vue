<template>
  <div class="page-container">
    <div class="container">
      <!-- action="#" -->
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        :auto-upload="true"
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
        <!-- <div slot="tip" class="el-upload__tip">
          只能上传jpg/png文件，且不超过500kb
        </div> -->
      </el-upload>
    </div>
    <div class="h100"></div>
    <div class="container desc">
      <h2>说明: 上传组件文件的生命周期</h2>
      <div class="h10"></div>
      <ul class="descList">
        <li>
          我们可以将文件的上传过程分成两部分：从本地到组件和从组件到目标地址
        </li>
        <li>这两个部分分别可以简称为：操作文件列表和文件上传</li>
        <li>这两个部分都有相应的钩子，可以看作是生命周期</li>
        <li>
          <h4>操作文件列表</h4>
          <ol style="padding-left: 20px">
            <li>添加文件：on-change，可做添加文件的判断</li>
            <li>移除文件前: before-remove，可做重要性提示</li>
            <li>移除文件后: on-remove</li>
            <li>预览文件(不重要): on-preview，可自定义预览</li>
          </ol>
        </li>
        <li style="padding-left: 20px">
          <h4>文件上传</h4>
          <ol style="padding-left: 20px">
            <li>
              文件上传前: before-upload <br />
              可做大小/类型等判断
            </li>
            <li>
              文件上传中: on-progress<br />
              可做进度分析
            </li>
            <li>文件上传成功: on-success on-change</li>
            <li>
              文件上传失败/错误: on-err on-change<br />
              默认自动移除上传失败的文件，且不会触发on-remove和before-remove
            </li>
          </ol>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 默认列表
      fileList: [
        {
          name: "food.jpeg",
          url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
        {
          name: "food2.jpeg",
          url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
      ],
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
