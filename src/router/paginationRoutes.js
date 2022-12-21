/* 分页功能相关路由表 */
const paginationFuncRoutes = [
  {
    path: 'pagination_func_1',
    name: 'pagination_func_1',
    component: ()=>import('@/views/pagination/pagination_func_1.vue'),
    meta: {
      desc: '分页功能',
      title: '分页组件封装'
    }
  }
];

/* 分页样式相关路由表 */
const paginationStyleRoutes = [
]

/* 最终pagination相关路由表 */
const paginationRoutes = {
  path: "/pagination",
  name: "Pagination",
  component: () => import("../views/layoutView.vue"),
  children: [
    {
      path: "intro",
      name: "pagination_intro",
      component: () => import("../views/pagination/pagination_intro.vue"),
      meta: {
        desc: "基本介绍",
        title: "基本介绍",
      },
    },
    ...paginationFuncRoutes,
    ...paginationStyleRoutes,
  ],
};

export default paginationRoutes