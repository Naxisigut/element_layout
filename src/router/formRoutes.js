
/* 表单布局相关路由表 */
const formLayoutRoutes = [
  {
    path: "form_item_layout_1",
    name: "form_item_layout_1",
    component: () => import("../views/form/form_item_layout_1.vue"),
    meta: {
      desc: "表单布局",
      title: "单行多表单项布局",
    },
  },
];

/* 表单样式相关路由表 */
const formStyleRoutes = [
  {
    path: "form_item_style_1",
    name: "form_item_style_1",
    component: () => import("../views/form/form_item_style_1.vue"),
    meta: {
      desc: " 表单样式",
      title: "表单label垂直居中",
    },
  },
];

/* 表单校验相关路由表 */
const formValidateRoutes = [
  {
    path: "form_item_validate_1",
    name: "form_item_validate_1",
    component: () => import("../views/form/form_item_validate_1.vue"),
    meta: {
      desc: "表单校验",
      title: "禁止表单项校验trigger",
    },
  },
  {
    path: "form_item_validate_2",
    name: "form_item_validate_2",
    component: () => import("../views/form/form_item_validate_2.vue"),
    meta: {
      desc: "表单校验",
      title: "动态表单的渲染和校验",
    },
  },
  {
    path: "form_item_validate_3",
    name: "form_item_validate_3",
    component: () => import("../views/form/form_item_validate_3.vue"),
    meta: {
      desc: "表单校验",
      title: "单个form-item的多Prop校验",
    },
  },
];

/* 最终form相关路由表 */
const formRoutes = {
  path: "/form",
  name: "Form",
  component: () => import("../views/layoutView.vue"),
  children: [
    {
      path: "intro",
      name: "form_intro",
      component: () => import("../views/form/form_intro.vue"),
      meta: {
        desc: "基本介绍",
        title: "基本介绍",
      },
    },
    ...formLayoutRoutes,
    ...formStyleRoutes,
    ...formValidateRoutes
  ],
};

export default formRoutes