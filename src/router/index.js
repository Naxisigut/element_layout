import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)

import formRoutes from "./formRoutes";
import tableRoutes from "./tableRoutes";
import uploaderRoutes from "./uploaderRoutes";
import dialogRoutes from "./dialogRoutes";
import paginationRoutes from "./paginationRoutes";

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
      path: '/test',
      name: 'test',
      component: ()=>import('@/components/testCpnt.vue')
    },
    formRoutes,
    tableRoutes,
    uploaderRoutes,
    dialogRoutes,
    paginationRoutes
]

const router = new VueRouter({
  routes
})

// indexCata: 在indexView page1上展示的菜单
export const getIndexCata = ()=>{
  const filterList = ['/', '/index', '/test']
  return routes.filter((item) => !filterList.includes(item.path))
}
// innerCata: 在indexView page2展示的菜单
export const getInnerCata = (outCataName)=>{
  return routes.find((item)=>item.name == outCataName).children
}

export default router