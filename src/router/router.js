import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        title:'登陆',
        path: '/',
        component: () => import('../components/login/LogIn.vue'),
    },
    {
        title:'登陆',
        path: '/login',
        component: () => import('../components/login/LogIn.vue'),
    },
    {
        title:'主页',
        path: '/home',
        component: () => import('../components/bigscreen/BigScreen.vue'),
    },
]

const router = new Router({
    routes,
  })

export default router