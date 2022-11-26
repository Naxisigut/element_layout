import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: ()=>import('../views/indexView.vue')
    },
    {
      path: '/form',
      name: 'Form',
      component: ()=>import('../views/layoutView.vue'),
      children: [
        {
          path:'intro',
          name: 'form_intro',
          component: ()=>import('../views/form/form_intro.vue'),
          meta:{
            desc: '基本介绍',
            title: '基本介绍'
          }
        },
        {
          path:'formItem_1',
          name: 'formItem_1',
          component: ()=>import('../views/form/formItem-1.vue'),
          meta:{
            desc: 'element-ui表单组件布局',
            title: '单行多表单项布局'
          }
        },
        {
          path:'custom_validate_1',
          name: 'custom_validate_1',
          component: ()=>import('../views/form/custom_validate_1.vue'),
          meta:{
            desc: '单个form-item的多Prop校验',
            title: '单个form-item的多Prop校验'
          }
        },
        {
          path:'form_item_label_1',
          name: 'form_item_label_1',
          component: ()=>import('../views/form/form_item_label_1.vue'),
          meta:{
            desc: ' 表单label垂直居中',
            title: '表单label垂直居中'
          }
        },
      ]
    },
]

const router = new VueRouter({
  routes
})

// indexCata: 在indexView page1上展示的菜单
export const getIndexCata = ()=>{
  const filterList = ['/', '/index']
  return routes.filter((item) => !filterList.includes(item.path))
}
// innerCata: 在indexView page2展示的菜单
export const getInnerCata = (outCataName)=>{
  return routes.find((item)=>item.name == outCataName).children
}

export default router