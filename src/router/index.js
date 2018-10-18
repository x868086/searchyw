import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import login from '../components/login.vue';
import index from '../components/index.vue';
import searchyw from '../components/searchyw.vue';

const routes=[
    {path: '/login',name: 'login',component: login},
    {path: '/index',name: 'index',component: index},
    {path:'/searchyw',name:'searchyw',component: searchyw}
]

const router = new VueRouter({routes}) //{routers:routers}

export default router