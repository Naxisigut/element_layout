<template>
  <div class="page-container">
    <div class="container">
      <el-table v-bind="baseTableConfig" :data="tableData">
        <el-table-column prop="name" label="Name"></el-table-column>
        <el-table-column prop="gender" align="center" label="Gender"></el-table-column>
        <el-table-column prop="age" label="Age"></el-table-column>
      </el-table>
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
import { baseTableData, baseColConfig, baseTableConfig } from "./tableData";
export default {
  data(){
    return {
      baseColConfig,
      baseTableConfig,
      tableData: baseTableData,
    }
  }
}
</script>

<style lang='less' scoped>
@import '@/style/tableStyle';
</style>