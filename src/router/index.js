import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import index from '../components/index.vue';
import main from '../components/main.vue';
import searchyw from '../components/searchyw.vue';

const routes=[
    {path: '/',name: 'index',component: index},
    {path: '/main',name: 'main',component: main},
    {path:'/searchyw',name:'searchyw',component: searchyw}
]

const router = new VueRouter({routes}) //{routers:routers}

export default router