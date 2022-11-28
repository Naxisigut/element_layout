<template>
    <div class="container">
      <div class="display">
        <div class="displayWrapper">
        <div class="page front" ref="firstPage">
          <el-row :gutter="100">
            <el-col :span="8" v-for="item in indexCata" :key="item.name">
              <div class="item" @click="inner(item.name)">{{ item.name }}</div>
            </el-col>
          </el-row>
        </div>

        <div class="page hide" ref="secondPage">
          <el-button @click="back" size="small" icon="el-icon-back"></el-button>
          <el-row :gutter="100">
            <el-col :span="8" v-for="item in innerCata" :key="item.name">
              <div class="item" @click="go(item.name)">
                <div style="color: red">{{ item.meta.desc }}</div>
                <div>{{ item.meta.title }}</div>
              </div>
            </el-col>
          </el-row>
        </div>
        </div>
      </div>
    </div>
</template>

<script>
import { getIndexCata, getInnerCata } from "@/router";
export default {
  name: 'indexView',
  data() {
    return {
      indexCata: getIndexCata(),
      innerCata: []
    }
  },
  methods:{
    inner(outerName){
      this.$refs.secondPage.classList.remove('hide')
      this.$refs.secondPage.classList.add('front')
      this.$refs.firstPage.classList.remove('front')
      this.$refs.firstPage.classList.add('hide')
      this.innerCata = getInnerCata(outerName)
    },
    back(){
      this.$refs.firstPage.classList.remove('hide')
      this.$refs.firstPage.classList.add('front')
      this.$refs.secondPage.classList.remove('front')
      this.$refs.secondPage.classList.add('hide')
      this.innerCata = []
    },
    go(name){
      this.$router.push({name})
    }
  }
}
</script>

<style scoped lang="less">
@import '@/style/indexStyle.less';
</style>