
/* 表格表头相关路由表 */
const tableHeaderRoutes = [
  {
    path: 'table_header_1',
    name: 'table_header_1',
    component: ()=>import('@/views/table/table_header_1.vue'),
    meta: {
      desc: '配置&数据',
      title: '多级表头'
    }
  }
];

/* 表格功能相关路由表 */
const tableFuncRoutes = [
  {
    path: 'table_func_1',
    name: 'table_func_1',
    component: ()=>import('@/views/table/table_func_1.vue'),
    meta: {
      desc: '表格功能',
      title: '树形数据基本使用'
    }
  }
];

/* 表格样式相关路由表 */
const tableStyleRoutes = [
    {
    path: 'table_style_1',
    name: 'table_style_1',
    component: ()=>import('@/views/table/table_style_1.vue'),
    meta: {
      desc: '表格样式',
      title: '表头和数据居中'
    }
  }
]

/* 表格样式相关路由表 */
const tableBugRoutes = [
    {
    path: 'table_bug_1',
    name: 'table_bug_1',
    component: ()=>import('@/views/table/table_bug_1.vue'),
    meta: {
      desc: '表格异常',
      title: 'flex:1中的el-table只伸不缩'
    }
  }
]

/* 最终table相关路由表 */
const tableRoutes = {
  path: "/table",
  name: "Table",
  component: () => import("../views/layoutView.vue"),
  children: [
    {
      path: "intro",
      name: "table_intro",
      component: () => import("../views/table/table_intro.vue"),
      meta: {
        desc: "基本介绍",
        title: "基本介绍",
      },
    },
    ...tableHeaderRoutes,
    ...tableFuncRoutes,
    ...tableStyleRoutes,
    ...tableBugRoutes
  ],
};

export default tableRoutes