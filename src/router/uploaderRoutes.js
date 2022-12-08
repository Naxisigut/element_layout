
/* 布局相关路由表 */
const uploaderLayoutRoutes = [
//   {
//     path: "uploader_layout_1",
//     name: "form_item_layout_1",
//     component: () => import("../views/form/form_item_layout_1.vue"),
//     meta: {
//       desc: "表单布局",
//       title: "单行多表单项布局",
//     },
//   },
];

/* 样式相关路由表 */
const uploaderStyleRoutes = [
//   {
//     path: "uploader_style_1",
//     name: "uploader_style_1",
//     component: () => import("../views/form/form_item_style_1.vue"),
//     meta: {
//       desc: " 表单样式",
//       title: "表单label垂直居中",
//     },
//   },
];

/* 功能相关路由表 */
const uploaderUseRoutes = [
  {
    path: "uploader_use_1",
    name: "uploader_use_1",
    component: () => import("../views/uploader/uploader_use_1.vue"),
    meta: {
      desc: "上传组件使用",
      title: "上传文件的生命周期",
    },
  },
  {
    path: "uploader_use_2",
    name: "uploader_use_2",
    component: () => import("../views/uploader/uploader_use_2.vue"),
    meta: {
      desc: "上传组件使用",
      title: "上传组件限制文件大小",
    },
  },
];

/* 最终uploader相关路由表 */
const uploaderRoutes = {
  path: "/uploader",
  name: "Uploader",
  component: () => import("../views/layoutView.vue"),
  children: [
    {
      path: "intro",
      name: "uploader_intro",
      component: () => import("../views/uploader/uploader_intro.vue"),
      meta: {
        desc: "基本介绍",
        title: "基本介绍",
      },
    },
    ...uploaderLayoutRoutes,
    ...uploaderStyleRoutes,
    ...uploaderUseRoutes
  ],
};

export default uploaderRoutes