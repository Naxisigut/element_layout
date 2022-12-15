<template>
  <div class="page-container">
    <div class="flexBox">
      <div class="left flex1Box">
        <el-table :data="tableData">
          <el-table-column prop="name" label="Name"></el-table-column>
          <el-table-column prop="gender" label="Gender"></el-table-column>
          <el-table-column prop="age" label="Age"></el-table-column>
        </el-table>
      </div>
      <div class="middle flex1Box">
        <el-table :data="tableData">
          <el-table-column prop="name" label="Name"></el-table-column>
          <el-table-column prop="gender" label="Gender"></el-table-column>
          <el-table-column prop="age" label="Age"></el-table-column>
        </el-table>
      </div>
      <div class="right flex1Box"></div>
    </div>
    <div class="h100"></div>
    <div class="container desc">
      <h2>说明</h2>
      <div class="h10"></div>
      <ul class="descList">
        <li>可以明显看出左部和中部表格的差异：前者在视口变化时会自动调整宽度，后者不会，宽度只能变大，不能变小</li>
        <li>原因在于flex1的盒子的特性：其内部的子元素的宽度如果固定，则其基础宽度会是子元素宽度</li>
        <li>在el-table变大的过程中，其内部监听元素宽度变化，会自动设置table的宽度为父元素的即时宽度。此时再缩小窗口，flex1盒子的基准宽度已经被table撑大，所以不能再缩小</li>
        <li>这种现象不仅会发生在el-table上，拥有类似特性的组件都会有这个问题，比如设置了resize的echarts图表</li>
        <li>解决方案有两种，这里推荐其中一种就好：给flex1盒子设置overflowx:hidder属性，如左部盒子的css代码。此时flex1盒子的基准宽度就不再会是子元素的宽度</li>
        <li>缺陷是当盒子缩小到一定程度，会出现滚轴。</li>
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
.flexBox{
  width: 100%;
  display: flex;
}
.left{
  overflow-x: hidden;
}
.flex1Box{
    flex: 1;
    border: 1px solid black;
  }
</style>