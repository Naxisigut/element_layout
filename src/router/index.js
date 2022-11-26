import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: ()=>import('../views/indexView.vue')
    },
    {
      path: '/display',
      component: ()=>import('../views/layoutView.vue'),
      children:[
        {
          path:'formItem_1',
          name: 'formItem_1',
          component: ()=>import('../views/form/formItem-1.vue'),
          meta:{
            desc: 'element-ui表单组件布局',
            title: '单行多表单项1'
          }
        },
        {
          path:'custom_validate_1',
          name: 'custom_validate_1',
          component: ()=>import('../views/form/custom_validate_1.vue'),
          meta:{
            desc: '单表单项校验多个Prop',
            title: '单表单项校验多个prop'
          }
        },
      ]
    },
  ]
})

export default router