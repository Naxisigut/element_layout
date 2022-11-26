<template>
  <div>
    <el-form :model="form" :rules="rules" ref="ruleForm" inline label-width="100px">
      <el-form-item label="单价" prop="price">
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
              if (this.form.price1 && this.form.price2 && this.form.price3 && this.form.price4) {
                cb()
                return
              }
              cb("err")
            },
            trigger: "disable", // 将trigger设置为非空&&非change&&非blur的字符串，即可禁用自动校验
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

<style></style>
