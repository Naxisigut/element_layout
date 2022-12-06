/* eslint-disable */
<template>
  <el-form ref="form" class="page-form" :class="[className, labelPosition === 'top' ? 'pageTopLabel' : '']"
    :model="data" :rules="rules" :size="size" :disabled="disabled" :label-width="labelWidth"
    :label-position="labelPosition">
    <el-form-item
      v-for="item in getConfigList()" :key="item.value"
      v-show="!item.hidden"
      :prop="item.value"
      :class="item.className" :style="item.style" :label-width="item.labelWidth"
      :label="item.label + (item.labelAttach ? item.labelAttach : labelAttach ? labelAttach : '')"
    >
    
      <!-- slot -->
      <template v-if="item.type === 'slot'">
        <slot :name="'form-' + item.value" />
      </template>

      <!-- slot -->
      <template v-if="item.slot">
        <slot :name="'form-item-' + item.value" />
      </template>

      <!-- 普通输入框 -->
      <el-input v-if="item.type === 'input' || item.type === 'password'" v-model.trim="data[item.value]"
        :style="{ width: item.width + 'px' }" :type="item.type" :title="data[item.value]" :disabled="item.disabled"
        :clearable="item.clearable || true" :placeholder="item.disabled ? '' : getPlaceholder(item)"
        @focus="handleEvent(item.event)" @change="handleEventChange(item.event, data[item.value])" />
      <el-link style="color:rgb(19, 125, 205)" class="text-ellipsis" :href="data[item.value]" target="_blank"
        v-if="item.type === 'link' && isURL(data[item.value])">
        {{ data[item.value] }}
      </el-link>
      <el-input v-else-if="item.type === 'link'" v-model.trim="data[item.value]" :style="{ width: item.width + 'px' }"
        :type="item.type" :title="data[item.value]" :disabled="item.disabled" :clearable="item.clearable || true"
        :placeholder="item.disabled ? '' : getPlaceholder(item)" @focus="handleEvent(item.event)"
        @change="handleEventChange(item.event, data[item.value])" />

      <!-- 点击文字预览图片 -->
      <div style="color:rgb(19, 125, 205)"
        v-if="item.type === 'imgLink' && /.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(data[item.value])"
        class="demo-image__preview" @click="htmlImage(data[item.value])">
        查看图片
        <el-image id="elImagess" style="width: 100px; height: 100px;display: none;"
          :src="data[item.value].split(',')[0]" :preview-src-list="data[item.value].split(',')">
        </el-image>
      </div>

      <div  style="color:rgb(19, 125, 205)"
        v-if="item.type === 'imgLink' && /.(mp4|avi|rmvb|mpeg|m4v|mov|flv|rm|wmv)$/.test(data[item.value])"
        class="demo-image__preview">
        <span @click="btnViedo(data[item.value])">
          播放视频
        </span>
        <el-dialog title="查看视频" :visible.sync="centerDialogVisible" width="30%" center>
          <video class="video-sp" @click="benA(index)" v-for="(item, index)  in data[item.value].split(',')" :key="item + index" :src="item">
            <a class="videoText-for" target="_blank" :href="item"></a>
          </video>
          <span slot="footer" class="dialog-footer">
            <el-button @click="centerDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
      </div>

      <!-- 文本输入框 -->
      <el-input v-if="item.type === 'textarea'" v-model.trim="data[item.value]" :type="item.type"
        :clearable="item.clearable || true" :style="{ width: item.width + 'px' }" :disabled="item.disabled"
        :title="data[item.value]" :placeholder="getPlaceholder(item)"
        :autosize="item.autosize || { minRows: 2, maxRows: 10 }" @focus="handleEvent(item.event)" />

      <!-- 单选框 -->
      <el-radio-group v-if="item.type === 'radio'" v-loading="item.loading" element-loading-text="加载中"
        element-loading-spinner="el-icon-loading" v-model="data[item.value]"
        @change="handleEvent(item.event, data[item.value])">
        <el-radio-button v-for="childItem in listTypeInfo[item.list]" :label="childItem.value" :key="childItem.value">
          {{ childItem.label }}
          <template v-if="Object.prototype.hasOwnProperty.call(childItem, 'number')">
            (<span class="labelnumber">{{ childItem.number }}</span>)
          </template>
        </el-radio-button>
      </el-radio-group>

      <!-- 计数器 -->
      <el-input-number
        v-if="item.type === 'inputNumber'"
        v-model="data[item.value]"
        size="small"
        :min="item.min || 1"
        :max="item.max"
        :step-strictly="item.stepStrictly"
        :controls-position="item.controlsPosition"
        @change="handleEvent(item.event)"
      />
      <!-- <my-input-number v-if="item.type === 'inputNumber'" :data="data" :item="item" @change="handleEvent(item.event)">
      </my-input-number> -->

      <!-- 选择框 -->
      <el-select v-if="item.type === 'select'" v-model="data[item.value]" :style="{ width: item.width + 'px' }"
        :disabled="item.disabled" :clearable="item.clearable || true" :filterable="item.filterable || true"
        :placeholder="getPlaceholder(item)" @change="handleEvent(item.event, data[item.value])">
        <el-option v-for="childItem in listTypeInfo[item.list]" :key="childItem.value" :label="childItem.label"
          :value="childItem.value" />
      </el-select>

      <!-- 可远程搜索选择框 -->
      <el-select v-if="item.type === 'remoteSelect'" v-model="data[item.value]" :style="{ width: item.width + 'px' }"
        :disabled="item.disabled" :clearable="item.clearable || true" :multiple="item.multiple" allow-create filterable
        remote :remote-method="(query) => remoteMethod(item.event, query, item, this)" :loading="item.loading"
        :placeholder="getPlaceholder(item)"
        @change="handleRemoteSelectEvent(item.value, data[item.value], item.dataObj)">
        <el-option v-for="childItem in listTypeInfo[item.list]" :key="childItem.value" :label="childItem.label"
          :value="childItem.value" />
      </el-select>

      <!-- 级联选择器 -->
      <el-cascader
        v-if="item.type === 'cascader' || item.type === 'tree'"
        v-model="data[item.value]"
        v-loading="item.loading"
        element-loading-text="加载中"
        element-loading-spinner="el-icon-loading"
        :style="{width: isNaN(item.width) ? item.width : item.width +'px'}"
        :options="listTypeInfo[item.list]"
        :props="item.props"
        :disabled="item.disabled"
        :filterable="item.filterable || true"
        :placeholder="getPlaceholder(item)"
        :clearable="item.clearable || true"
        @change="handleEvent(item.event, data[item.value])">
        <template slot-scope="{ data }">
          <span>{{ data.label || data.name }}</span>
          <span v-if="data.number"> ({{ data.number }}) </span>
        </template>
      </el-cascader>
      <!-- <my-cascader v-if="item.type === 'cascader' || item.type === 'tree'" :listTypeInfo="listTypeInfo[item.list]"
        :data="data" :item="item" :placeholder="getPlaceholder(item)" @handleEvent="handleEvent">
      </my-cascader> -->

      <!-- 日期选择框 -->
      <el-date-picker
        v-if="item.type === 'date' || item.type === 'daterange' || item.type === 'datetime' || item.type === 'datetimerange'"
        v-model="data[item.value]" :style="{ width: isNaN(item.width) ? item.width : item.width + 'px' }"
        :type="item.type" :format="item.type === 'datetime' ? 'yyyy 年 MM 月 dd 日 HH 时 mm 分 ss 秒' : 'yyyy 年 MM 月 dd 日'"
        :value-format="item.type === 'datetime' ? 'yyyy-MM-dd HH:mm:ss' : 'yyyy-MM-dd'"
        :picker-options="item.type === 'datetimerange' ? item.timePickerOptions || timePickerOptions : null"
        :clearable="item.clearable || true" :disabled="item.disabled"
        :start-placeholder="item.startPlaceholder || '开始日期'" :end-placeholder="item.endPlaceholder || '结束日期'"
        :placeholder="getPlaceholder(item)" @focus="handleEvent(item.event)"
        @change="handleEvent(item.event, data[item.value])" />
      <!-- 年 -->
      <el-date-picker v-if="item.type === 'year'" v-model="data[item.value]" type="year"
        :clearable="item.clearable || true" value-format="yyyy" format="yyyy" placeholder="选择年">
      </el-date-picker>

      <!-- 文件上传
        :file-list="fileList(item.default)"
        :list-type="item.disabled || disabled ? 'text' : 'picture'"
      -->
      <el-upload v-if="item.type === 'file'" :class="{ 'showFile': item.disabled || disabled }" :multiple="true"
        :auto-upload="false" action="#"
        :on-change="(file, fileList) => handleFileChange(file, fileList, item.value, item.notAutoUpload)"
        :on-remove="(file, fileList) => handleFileListRemove(file, fileList, item.value)"
        :on-preview="handleFileListPreview" :file-list="item.disabled || disabled ? [] : fileList(item.default)">
        <el-button size="small" type="primary">点击上传</el-button>
        <el-popover placement="top" width="400" trigger="click" @hide="fileSrcVal = ''">
          <div>
            <el-input v-model="fileSrcVal" type="textarea" :rows="4" placeholder="请输入文件资源链接，http://"></el-input>
            <div style="display:flex;justify-content: end;margin-top:10px;">
              <el-button type="primary" @click="addFile(item)">提交</el-button>
            </div>
          </div>
          <el-button v-if="!item.noHttpUpload" slot="reference" size="small" style="margin-left:10px" type="text"
            @click.stop="">资源链接</el-button>
        </el-popover>
        <!-- 查看 -->
        <div v-if="item.disabled || disabled" class="el-upload__tip" slot="tip">
          <div v-for="(item1, index1) in fileList(item.default)" :key="index1">
            <div v-if="item1.type === 'image'">
              <el-image style="width: 100px; height: 100px" :src="item1.url" :preview-src-list="[item1.url]">
              </el-image>
            </div>
            <div v-if="item1.type === 'video'">
              <video width="100%" height="200px" controls :src="item1.url"></video>
            </div>
            <div v-if="item1.type === 'file'" class="text-ellipsis" style="cursor: pointer;color: #137dcd"
              @click="openLinkHandle(item1.url)">
              <div><i class="el-icon-document"></i> {{ item1.name }}</div>
            </div>
          </div>
        </div>
      </el-upload>

      <!-- 信息展示框 -->
      <!-- <el-tag v-if="item.type === 'tag'">
        {{ $fn.getDataName({ dataList: listTypeInfo[item.list], value: 'value', label: 'key', data: data[item.value] })
            ||
            '-'
        }}
      </el-tag> -->

    </el-form-item>
  </el-form>
</template>

<script>
import dayjs from 'dayjs'
import debounce from 'lodash/debounce'
// import { uploadMulti } from '@/api/app'
import { isURL } from '@/utils/validate'
// import { isExternal, isPicForUrl, isVideoForUrl, isURL } from '@/utils/validate'
// import myCascader from './cascader-checkall1.vue'
// import myInputNumber from './input-number.vue'
export default {
  name: 'FormPage',
  props: {
    // 自定义类名
    className: {
      type: String
    },
    // 表单数据
    data: {
      type: Object
    },
    // 表单尺寸
    size: {
      type: String,
      default: 'small'
    },
    // 相关字段
    fieldList: {
      type: Array
    },
    // 验证规则
    rules: {
      type: Object
    },
    // 相关的列表
    listTypeInfo: {
      type: Object
    },
    // label宽度
    labelWidth: {
      type: String,
      default: '120px'
    },
    //
    labelPosition: {
      type: String,
      default: ''
    },
    // label附加字符
    labelAttach: {
      type: String,
      default: ':'
    },
    refObj: {
      type: Object
    },
    // 表单禁用
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      timePickerOptions: {
        shortcuts: [{
          text: '近一个月',
          onClick (picker) {
            const end = new Date()
            const start = dayjs().subtract(1, 'month').toDate()
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '近三个月',
          onClick (picker) {
            const end = new Date()
            const start = dayjs().subtract(3, 'month').toDate()
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '近一年',
          onClick (picker) {
            const end = new Date()
            const start = dayjs().subtract(1, 'year').toDate()
            picker.$emit('pick', [start, end])
          }
        }]
      },
      fileSrcVal: '',
      isURL,
      videos: 'https://govsz-plus.oss-cn-hangzhou.aliyuncs.com/evidence/20220908/20221121/IK国际美妆.mp4,https://govsz-plus.oss-cn-hangzhou.aliyuncs.com/evidence/20220908/20221121/IK国际美妆.mp4,https://govsz-plus.oss-cn-hangzhou.aliyuncs.com/evidence/20220908/20221121/IK国际美妆.mp4,https://govsz-plus.oss-cn-hangzhou.aliyuncs.com/evidence/20220908/20221121/IK国际美妆.mp4',
      a: null,
      centerDialogVisible: false
    }
  },
  // components: {
  //   myCascader,
  //   myInputNumber
  // },
  watch: {
    data: {
      handler: function (val) {
        // 将form实例返回到父级
        this.$emit('update:refObj', this.$refs.form)
        console.log(this.data)
      },
      deep: true // 深度监听
    }
  },
  mounted () {
    // 将form实例返回到父级
    this.$emit('update:refObj', this.$refs.form)
    console.log("debounce =", debounce)
    console.log("dayjs =", dayjs)
  },
  methods: {
    isPicForUrls (url) {
      const imgSrc = isPicForUrl(url)
      console.log(imgSrc)
      return imgSrc
    },
    htmlImage (val) {
      if (isPicForUrl(val)) {
        if (document.querySelector('#elImagess')) {
          document.querySelector('#elImagess').click()
        } else {
          this.$message.error('图片加载错误')
        }
      }
    },
    btnViedo (val) {
      if (isVideoForUrl(val)) {
        // console.log(a)
        this.centerDialogVisible = true
      } else {
        this.$message.error('视频加载错误')
      }
    },
    benA (index) {
      const a = document.querySelectorAll('.videoText-for')
      a[index].click()
    },
    // 获取字段列表
    getConfigList () {
      return this.fieldList.filter(item => !Object.prototype.hasOwnProperty.call(item, 'show') || (Object.prototype.hasOwnProperty.call(item, 'show') && item.show))
    },
    // 得到placeholder的显示
    getPlaceholder (row) {
      let placeholder
      if (row.type === 'input' || row.type === 'textarea') {
        placeholder = '请输入' + row.label
      } else if (row.type === 'select' || row.type === 'time' || row.type === 'date' || row.type === 'cascader') {
        placeholder = '请选择' + row.label
      } else if (row.type === 'remoteSelect') {
        placeholder = '请输入查询并选择' + row.label
      } else {
        placeholder = row.label
      }
      return placeholder
    },
    // 绑定的相关事件
    handleEvent (evnet, data) {
      // 是否选中全选
      if (evnet.hasSelectAll) {
        this.data[evnet.paramKey] = data
        this.$emit('handleEvent', evnet, data)
      }

      if (!evnet.hasSelectAll) {
        this.$emit('handleEvent', evnet, data)
      }
    },
    // 绑定的相关事件 inputChange
    handleEventChange (evnet, data) {
      this.$emit('handleEventChange', evnet, data)
    },
    // 绑定的相关事件 remoteSelect
    handleRemoteSelectEvent (key, value, obj) {
      this.$emit('handleRemoteSelectEvent', key, value, obj)
    },
    remoteMethod: debounce(function (event, query, item) {
      this.$emit('remoteMethod', event, query, item)
    }, 1000),
    // 文件上传
    handleFileChange (file, fileList, key, notAutoUpload) {
      var form = new FormData()
      fileList.forEach(item => {
        form.append('file', item.raw)
      })
      // lcc tempDisable
      // if (notAutoUpload) {
      //   this.$emit('uploadFile', key, file.raw, 'add', fileList)
      // } else {
      //   uploadMulti(form).then(res => {
      //     this.$emit('uploadFile', key, res, 'add')
      //   })
      // }
    },
    // 文件
    fileList (urlStr) {
      const fileList = []
      if (urlStr && !Array.isArray(urlStr)) {
        const _urlStr = urlStr.split(',')
        _urlStr.forEach(item => {
          fileList.push({
            name: item.split('/').slice(-1)[0],
            url: item,
            // lcc tempDisable
            // type: isExternal(item) ? isPicForUrl(item) ? 'image' : isVideoForUrl(item) ? 'video' : 'file' : ''
          })
        })
      } else {
        return urlStr
      }
      return fileList
    },
    handleFileListRemove (file, fileList, key) {
      console.log(file, fileList, key)
      let urlarr = []
      if (fileList.length) {
        urlarr = fileList.map(item => item.url)
      }
      const urls = urlarr.length ? urlarr.join(',') : ''
      this.$emit('uploadFile', key, urls, 'remove')
    },
    handleFileListPreview (file) {
      this.$downloadFiles(file.url)
    },
    // 新窗口打开链接
    openLinkHandle (url) {
      window.open(url)
    },
    // 加入
    addFile (scopeSelf) {
      if (this.fileSrcVal) {
        this.$emit('uploadFile', scopeSelf.paramKey, { src: this.fileSrcVal }, 'add')
        this.fileSrcVal = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// 自定义form相关
.page-form {
  .el-form-item {
    display: inline-block;
    width: 50%;
    vertical-align: top;

    ::v-deep .el-form-item__label {
      color: #797979;
    }

    .el-form-item__content {

      .el-input,
      .el-select,
      .el-textarea,
      .el-cascader,
      .el-range-editor.el-input__inner {
        width: 100%;
      }

      .el-input-number {
        .el-input {
          width: inherit;
        }
      }
    }
  }

  .el-form-block {
    display: block;
    width: 100%;

    .el-form-item__content {
      .el-textarea {
        width: 100%;
      }
    }
  }

  // 禁用表单样式
  ::v-deep .el-input.is-disabled {

    .el-input__inner,
    .el-textarea__inner {
      color: #333;
      border-color: transparent;
      cursor: inherit;
    }
  }

  ::v-deep .el-textarea.is-disabled {
    .el-textarea__inner {
      color: #333;
      border-color: transparent;
      cursor: inherit;
    }
  }

  ::v-deep .el-radio-group {
    min-width: 80px;

    .is-active.is-disabled {
      .el-radio-button__inner {
        color: #FFFFFF;
        background-color: #1890ff;
        border-color: #1890ff;
        cursor: inherit;
      }
    }

    .el-loading-mask+.el-radio-button .el-radio-button__inner {
      border-left: 1px solid #DCDFE6;
      border-radius: 4px 0 0 4px;
    }

    .el-loading-mask+.el-radio-button .el-radio-button__orig-radio:checked+.el-radio-button__inner {
      border-left: none;
    }
  }

  ::v-deep .el-loading-spinner {
    display: flex;
    line-height: 1;
    transform: translateY(-50%);
    margin-top: 0;
    align-items: center;

    .el-icon-loading {
      width: 14px;
      height: 14px;
      font-size: 14px;
      margin-right: 5px;
    }
  }
}

.page-form-block {
  .el-form-item {
    display: block;

    .el-form-item__content {

      .el-input,
      .el-select,
      .el-textarea {
        width: inherit;
      }

      .el-input-number {
        .el-input {
          width: inherit;
        }
      }
    }
  }

  .el-form-block {
    display: block;
    width: 100%;

    .el-form-item__content {
      .el-textarea {
        width: 100%;
      }
    }
  }
}

// 报告录入响应视布局

.main-card .form-batch-no .report-media-page-form {
  margin-bottom: 0;
}

.report-media-page-form {
  @media only screen and (min-width : 0px) {
    .el-form-item {
      display: inline-block;
      width: 100%;
    }
  }

  @media only screen and (min-width : 900px) {
    .el-form-item {
      display: inline-block;
      width: 50%;
    }
  }

  @media only screen and (min-width : 1250px) {
    .el-form-item {
      display: inline-block;
      width: 33.33%;
    }
  }

  @media only screen and (min-width : 1600px) {
    .el-form-item {
      display: inline-block;
      width: 25%;
    }
  }

  // @media only screen
  // and (min-width : 1600px) {
  //   .el-form-item{
  //     display: inline-block;
  //     width: 25%;
  //   }
  // }
  .el-form-block {
    display: block;
    width: 100%;

    .el-form-item__content {
      .el-textarea {
        width: 100%;
      }
    }
  }
}

.pageTopLabel.report-media-page-form {
  padding-left: 15px;

  @media only screen and (min-width : 0px) {
    .el-form-item {
      display: inline-block;
      width: 25%;
    }
  }

  @media only screen and (min-width : 1000px) {
    .el-form-item {
      display: inline-block;
      width: 25%
    }
  }

  @media only screen and (min-width : 1250px) {
    .el-form-item {
      display: inline-block;
      width: 25%
    }
  }

  @media only screen and (min-width : 1600px) {
    .el-form-item {
      display: inline-block;
      width: 25%;
    }
  }

  // @media only screen
  // and (min-width : 1600px) {
  //   .el-form-item{
  //     display: inline-block;
  //     width: 25%;
  //   }
  // }
  .el-form-block {
    display: block;
    width: 100%;

    .el-form-item__content {
      .el-textarea {
        width: 100%;
      }
    }
  }

  .el-form-item {
    padding: 0 8px;

    ::v-deep .el-form-item__label {
      line-height: 1;
      padding: 0 0 6px 0;
    }
  }

  .el-form-item--small.el-form-item {
    margin-bottom: 8px;
  }
}

.el-form {
  @media only screen and (min-device-width: 0) and (max-device-width: 600px) {
    .el-form-item {
      display: inline-block;
      width: 100%;

      ::v-deep .el-form-item__label {
        width: auto !important;
      }

      ::v-deep .el-form-item__content {
        margin-left: 0 !important;
      }
    }
  }
}

.labelnumber {
  font-weight: bold;
}

.page-form {
  ::v-deep .el-upload-list__item {
    transition: none
  }
}

.showFile {
  ::v-deep .el-upload {
    display: none;
  }

  ::v-deep .el-upload-list__item:first-child {
    margin-top: 5px;
  }

  ::v-deep .el-upload-list__item {
    transition: none
  }

  ::v-deep .el-upload-list__item-status-label {
    display: none;
  }

  ::v-deep .el-icon-close {
    display: none;
  }

  ::v-deep .el-icon-close-tip {
    display: none !important;
  }

  ::v-deep .el-upload-list__item-name {
    margin-right: 0;
  }
}

// 定义的视屏

.demo-image__preview {
  .video-sp {
  width: 50%;
  padding: 10px;
}
::v-deep .el-dialog__body {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
}
}
</style>
