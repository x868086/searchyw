<template>
<div id="container">
    <van-row>
        <van-col span="12">span: 8</van-col>
        <van-col span="12">span: 8</van-col>
        <van-col span="12">span: 8</van-col>
        <van-col span="12">span: 8</van-col>
    </van-row>

    <van-tabbar v-model="active">
        <van-tabbar-item icon="home">首页</van-tabbar-item>
        <van-tabbar-item icon="pending-orders" dot>资源</van-tabbar-item>
        <van-tabbar-item icon="like-o" info="20">我的</van-tabbar-item>
    </van-tabbar>
</div>
</template>





<script>
import Vue from 'vue';
import { Tabbar, TabbarItem,Row, Col } from 'vant';
Vue.use(Tabbar).use(TabbarItem).use(Row).use(Col);

export default {
    data(){
        return{
            active: 0
        }
    }
}
</script>




<style scoped>

</style>


