<template>
  <div class="page-container">
    <div class="container">
      <el-form :model="form" :rules="rules" ref="ruleForm" label-width="80px">
        <el-form-item label="复费率" prop="price">
          <el-input type="number" v-model="form.price1">
            <template slot="prepend">尖</template>
          </el-input>
          <el-input type="number" v-model="form.price2">
            <template slot="prepend">峰</template>
          </el-input>
          <el-input type="number" v-model="form.price3">
            <template slot="prepend">平</template>
          </el-input>
          <el-input type="number" v-model="form.price4">
            <template slot="prepend">谷</template>
          </el-input>
        </el-form-item>
      </el-form>
      <button @click="validate">校验</button>
    </div>
    <div class="h100"></div>
    <div class="container desc">
      <h2>说明</h2>
      <div class="h10"></div>
      <ul class="descList">
        <li>理论上一个form-item只对应一个prop, 所以若想要在一个form-item里绑定多个prop, 并进行校验, 需要使用自定义校验</li>
        <li>此时由于往往并没有对应的prop, 故可以给form-item绑定一个并不存在的prop, 真正需要校验的字段在自定义函数里通过其它方式去访问</li>
        <li>自定义校验函数的详细写法在注释中</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        price1: "",
        price2: "1",
        price3: "1",
        price4: "1",
      },
      rules: {
        price: [
          {
            validator: (rule, value, cb) => {
              // console.log("rule =", rule) // 该字段的校验信息
              // console.log("value =", value) // 该字段的值, 由于这种特殊情况下往往绑定一个不存在的字段, 故为undefinded
              if (this.form.price1 && this.form.price2 && this.form.price3 && this.form.price4) {
                return cb([]) // 返回无参数/空数组的cb(), 则表示校验成功
              }
              return cb(["err", 'err2']) // 返回有参数的cb(), 则表示校验失败 该参数会作为校验失败的字段被抛出
            },
            trigger: "change", // 将trigger设置为非空&&非change&&非blur的字符串，即可禁用自动校验
            message: "请完整填写价格",
          },
        ],
      },
    }
  },
  methods: {
    validate() {
      this.$refs.ruleForm.validate().catch(() => {})
    },
  },
}
</script>

<style scoped lang='less'>
@import '@/style/formStyle.less';
</style>
