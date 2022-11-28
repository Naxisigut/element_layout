<template>
  <div class="page-container">
    <div class="container">
      <el-table v-bind="baseTableConfig" :data="tableData">
        <el-table-column v-bind="baseColConfig" prop="name" label="Name"></el-table-column>
        <el-table-column v-bind="baseColConfig" prop="gender" label="Gender"></el-table-column>
        <el-table-column v-bind="baseColConfig" prop="age" label="Age"></el-table-column>
        <el-table-column v-bind="baseColConfig" prop="scores" label="Scores">
          <el-table-column v-bind="baseColConfig" prop="math" label="Math"></el-table-column>
          <el-table-column v-bind="baseColConfig" prop="chinese" label="Chinese"></el-table-column>
          <el-table-column v-bind="baseColConfig" prop="english" label="English"></el-table-column>
        </el-table-column>
      </el-table>
    </div>
    <div class="h100"></div>
    <div class="container desc">
      <h2>说明</h2>
      <div class="h10"></div>
      <ul class="descList">
        <li>在table-column内嵌套table-column, 可以实现多级表头</li>
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