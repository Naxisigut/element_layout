import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)

import formRoutes from "./formRoutes";

const routes = [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: ()=>import('../views/indexView.vue')
    },
    formRoutes
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