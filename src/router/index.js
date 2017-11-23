import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//引入5个主页面
import Home from '../pages/home.vue'
import Kind from '../pages/kind.vue'
import Good from '../pages/good.vue'
import Buycar from '../pages/buycar.vue'
import Mine from '../pages/mine.vue'
import Mine2 from '../pages/mine2.vue'
import Searchin from '../pages/searchin.vue'
//引入good子页面
import Today from '../pages/good/today.vue'
import Before from '../pages/good/before.vue'
//引入kind详情子页面
import Detail from '../components/detail.vue'
import Zonghe from '../pages/kind/zonghe.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component:Home
    },
    {
      path:'/home',
      name:Home,
      component:Home
    },
    {
      path: '/kind',
      name: 'Kind',
      component:Kind
    },
    {
      path:'/kind/:id',
      name:'Detail',
      component:Detail
    },
    {
      path:'/zonghe',
      name:'Zonghe',
      component:Zonghe
    },
    {
      path: '/good',
      name: 'Good',
      component:Good,
      children:[
        {path:'',redirect:"today",component:Today},
        {path:'today',component:Today},
        {path:'before',component:Before}
      ]
    },
    {
      path: '/buycar',
      name: 'Buycar',
      component:Buycar
    },
    {
      path: '/mine',
      name: 'Mine',
      component:Mine
    },
    {
      path: '/mine2',
      component: Mine2
    },
    {
      path: '/searchin',
      component: Searchin
    }
  ]
})
