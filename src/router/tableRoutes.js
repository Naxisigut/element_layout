
/* 表格嵌套相关路由表 */
const tableLayoutRoutes = [
];

/* 表格功能相关路由表 */
const tableFuncRoutes = [
];

/* 表格样式相关路由表 */
const tableStyleRoutes = []

/* 最终form相关路由表 */
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
    ...tableLayoutRoutes,
    ...tableFuncRoutes,
    ...tableStyleRoutes
  ],
};

export default tableRoutes