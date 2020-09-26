import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/lg/Home.vue'
import login from '../views/jun/login'
import reg1 from '../components/jun/Register1'
import reg2 from '../components/jun/Register2'
import reg3 from '../components/jun/Register3'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/About',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: login
  },
  {
    path: '/reg',
    name: 'reg',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/jun/reg'),
    children:[
      {                      //二级路由
        path:'/',            //二级的默认路由（此path指向上一级，即path:'/about'）
        name:'reg1',
        component:reg1
      },
      {                      //二级路由
        path:'/reg2',            //二级的默认路由（此path指向上一级，即path:'/about'）
        name:'reg2',
        component:reg2
      },
      {                      //二级路由
        path:'/reg3',            //二级的默认路由（此path指向上一级，即path:'/about'）
        name:'reg3',
        component:reg3
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
