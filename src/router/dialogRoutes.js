
/* 功能相关路由表 */
const dialogUseRoutes = [
  {
    path: 'dialog_use_1',
    name: 'dialog_use_1',
    component: ()=>import('@/views/dialog/dialog_use_1.vue'),
    meta: {
      desc: '对话框功能',
      title: '基本使用'
    }
  },
  {
    path: 'dialog_use_2',
    name: 'dialog_use_2',
    component: ()=>import('@/views/dialog/dialog_use_2.vue'),
    meta: {
      desc: '对话框功能',
      title: 'jsx渲染'
    }
  }
];

/* 最终dialog相关路由表 */
const dialogRoutes = {
  path: "/dialog",
  name: "Dialog",
  component: () => import("../views/layoutView.vue"),
  children: [
    // {
    //   path: "intro",
    //   name: "table_intro",
    //   component: () => import("../views/table/table_intro.vue"),
    //   meta: {
    //     desc: "基本介绍",
    //     title: "基本介绍",
    //   },
    // },
    ...dialogUseRoutes,
  ],
};

export default dialogRoutes