<template>
  <div class="testContainer">
    <div class="left">
      <div>left</div>
      <el-table :data="tableData">
        <el-table-column prop="name" label="Name"></el-table-column>
        <el-table-column prop="gender" align="center" label="Gender"></el-table-column>
        <el-table-column prop="age" label="Age"></el-table-column>
      </el-table>
    </div>
    <div class="middle">middle</div>
    <div class="right">right</div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      tableData:[
    {
        name: 'xiaoming',
        gender: 'male',
        age: 15,
        math: 99,
        chinese: 90,
        english: 96
    },
    {
        name: 'xiaohong',
        gender: 'female',
        age: 15,
        math: 89,
        chinese: 93,
        english: 95
    },
      ]
    }
  },
  watch:{
    $route(to){
      console.log("to.name =", to.name)
    }
  },
  mounted(){
    console.log("mounted =")
  },
  activated(){
    console.log("activated =")
  }
}
</script>

<style scoped lang="less">
.testContainer{
  display: flex;
  &>div{
    flex: 1;
    border: 1px solid black;
    height: 400px;
  }
}
.left{
  overflow-x: hidden;
}

</style>