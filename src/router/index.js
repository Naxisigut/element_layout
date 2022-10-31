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
          path:'formItem',
          name: 'formItem-1',
          component: ()=>import('../views/form/formItem-1.vue'),
          meta:{
            desc: 'element-ui表单组件布局',
            title: '单行多表单项1'
          }
        }
      ]
    },
  ]
})

export default router