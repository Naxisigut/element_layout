<template>
  <div class="page-container">
    <div class="container">
      <el-table
        v-bind="baseTableConfig"
        :data="tableData"
        row-key="id"
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
        lazy 
        :load="load"
      >
        <el-table-column v-bind="baseColConfig" prop="date" label="date"></el-table-column>
        <el-table-column v-bind="baseColConfig" prop="name" label="name"></el-table-column>
        <el-table-column v-bind="baseColConfig" prop="address" label="address"></el-table-column>
      </el-table>
    </div>
    <div class="h100"></div>
    <div class="container desc">
      <h2>说明</h2>
      <div class="h10"></div>
      <ul class="descList">
        <li>树形数据基本使用：
          <ol style="padding-left: 20px">
            <li>要求数据有唯一id字段和子数据字段</li>
            <li>el-table绑定row-key为数据的唯一id字段，tree-props的children字段可以配置子数据字段</li>
          </ol>
        </li>
        <li>树形数据-远程：
          <ol style="padding-left: 20px">
            <li>要求数据及异步返回的数据有唯一id字段，有子数据的数据对象需要有子数据存在与否的标志字段</li>
            <li>el-table绑定row-key为数据的唯一id字段，tree-props的hasChildren字段可以配置子数据存在与否的标志字段，load绑定异步返回数据的方法</li>
            <li>异步返回数据方法的使用说明见methods</li>
          </ol>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { baseColConfig, baseTableConfig } from "./tableData";
export default {
  data(){
    return {
      baseColConfig,
      baseTableConfig,
      tableData: [{
          id: 1,
          date: '2016-05-02',
          name: '王小',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: 2,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          children: [{
              id: 12,
              date: '2016-05-01',
              name: '王小虎1',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              id: 13,
              date: '2016-05-01',
              name: '王小虎2',
              address: '上海市普陀区金沙江路 1519 弄'
          }]
        }, {
          id: 3,
          date: '2016-05-01',
          name: '王小虎远程',
          address: '上海市普陀区金沙江路 1519 弄',
          hasChildren: true
        }
      ],
    }
  },
  methods:{
    load(tree, treeNode, resolve){
      setTimeout(() => {
          resolve([
            {
              id: 31,
              date: '2016-05-01',
              name: '王小虎远程1',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              id: 32,
              date: '2016-05-01',
              name: '王小虎远程2',
              address: '上海市普陀区金沙江路 1519 弄'
            }
          ])
        }, 1000)
      }
    }
  }
</script>

<style lang='less' scoped>
@import '@/style/tableStyle';
</style>