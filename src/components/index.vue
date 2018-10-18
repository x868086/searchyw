<template>
<div id="container">
        <van-row class="opt_wrap">
            <van-col span="12">
                    <van-icon class="icon_wrap" name="sousuo" size="60px"
                    @click="getsearch"></van-icon>
            </van-col>
            <van-col span="12">
                <van-icon class="icon_wrap" name="zijinguanli" size="60px"></van-icon>
            </van-col>
            <van-col span="12">
                <van-icon class="icon_wrap" name="jiankanfuwu" size="60px"></van-icon>
            </van-col>
            <van-col span="12">
                <van-icon class="icon_wrap" name="meiziguanli" size="60px"/>
            </van-col>
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
import { Tabbar, TabbarItem,Row, Col,Icon } from 'vant';
Vue.use(Tabbar).use(TabbarItem).use(Row).use(Col).use(Icon);

export default {
    data(){
        return{
            active: 0
        }
    },

    methods:{
        getsearch(){
            this.$router.push({path:'/searchyw'})
        }
    }
}
</script>




<style scoped>
    @font-face {
        font-family: 'custom-iconfont';
        src: url('../assets/iconfont/iconfont.ttf') format('truetype');
    }

    .van-icon {
        font-family: 'vant-icon', 'custom-iconfont' !important;
    }

    .van-icon-zhibofuwu:before { content: "\e658"; }

    .van-icon-xinwenzhongxin:before { content: "\e659"; }

    .van-icon-yonghuguanli:before { content: "\e65a"; }

    .van-icon-meiziguanli:before { content: "\e65d"; }

    .van-icon-jiankanfuwu:before { content: "\e65e"; }

    .van-icon-minganciku:before { content: "\e65f"; }

    .van-icon-zhihuizhongxin:before { content: "\e660"; }

    .van-icon-zijinguanli:before { content: "\e661"; }

    .van-icon-quanxianxitong:before { content: "\e662"; }

    .van-icon-dashuju:before { content: "\e666"; }

    .van-icon-yonghu:before { content: "\e667"; }

    .van-icon-xiaoxi:before { content: "\e668"; }

    .van-icon-shangcheng:before { content: "\e669"; }

    .van-icon-shezhi:before { content: "\e66a"; }

    .van-icon-yulan:before { content: "\e66b"; }

    .van-icon-sousuo:before { content: "\e66c"; }

    .van-icon-tianjia:before { content: "\e66d"; }

    .van-icon-dianhua:before { content: "\e66e"; }

    .van-icon-shoucang:before { content: "\e66f"; }

    .van-icon-home:before { content: "\e670"; }

    .van-icon-weizhi:before { content: "\e672"; }

    .van-icon-tupian:before { content: "\e674"; } 


    #container{
        padding-top:60px;
        background-color:#4C55A2;
    }
    .opt_wrap{
        padding:50px 20px;
        border-top-left-radius:20%;
        border-top-right-radius:20%;
        background-color:#fff;
    }
    .icon_wrap{
        padding:30px;
    }
</style>


