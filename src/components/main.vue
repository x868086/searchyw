<template>
<div id="container">
        <van-row class="opt_wrap">
            <van-col span="12" class="icon_wrap">
                    <van-icon  name="sousuo" size="60px" color="#3A459D"
                    @click="getsearch"></van-icon>
                    <p class="icon_title">异网</p>
                    <p class="icon_tips">累计查询:{{queryCounts}}次</p>
            </van-col>
            <van-col span="12" class="icon_wrap">
                <van-icon name="zijinguanli" size="60px" color="#3A459D"></van-icon>
                <p class="icon_title">佣金</p>
                <p class="icon_tips">￥:{{totalsalary}}</p>
            </van-col>
            <van-col span="12" class="icon_wrap">
                <van-icon name="jiankanfuwu" size="60px" color="#3A459D"></van-icon>
                <p class="icon_title">指标</p>
                <p class="icon_tips">当日发展:{{devday}}</p>
            </van-col>
            <van-col span="12" class="icon_wrap">
                <van-icon name="meiziguanli" size="60px" color="#3A459D" />
                <p class="icon_title">资讯</p>
                <p class="icon_tips">待阅:{{msgcount}}</p>
            </van-col>
        </van-row>




    <van-tabbar v-model="active" class="tabbar_wrap">
        <van-tabbar-item info="3">
            <span>工具</span>
            <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon.active : icon.normal"
            >
        </van-tabbar-item>
        <van-tabbar-item icon="chat" v-show="concatshow">
            <span>通讯录</span>
            <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon.iconcontacts : icon.iconcontactso"
            >
        </van-tabbar-item>
        <van-tabbar-item icon="records">
            <span>我的</span>
            <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon.iconpro : icon.iconpros"
            >
        </van-tabbar-item>
    </van-tabbar>
</div>
</template>





<script>
import Vue from 'vue';
import { Tabbar, TabbarItem,Row, Col,Icon } from 'vant';
Vue.use(Tabbar).use(TabbarItem).use(Row).use(Col).use(Icon);
import axios from 'axios';

import url from '../modules/js/api.js';
import iconWork from '../assets/iconpng/icon-work.png';
import iconWorks from '../assets/iconpng/icon-works.png';
import iconPro from '../assets/iconpng/icon-pro.png';
import iconPros from '../assets/iconpng/icon-pros.png';
import iconContacts from '../assets/iconpng/icon-contacts.png';
import iconContactsO from '../assets/iconpng/icon-contacts-o.png';

export default {
    data(){
        return{
            active: 0,
            queryCounts:'',
            totalsalary:'',
            devday:'',
            msgcount:'',
            concatshow:'',
            icon:{
                normal: iconWork,
                active: iconWorks,
                iconpro: iconPro,
                iconpros: iconPros,
                iconcontacts:iconContacts,
                iconcontactso:iconContactsO
            }
        }
    },

    methods:{
        getsearch(){
            this.$router.push({path:'/searchyw'})
        }
    },

    created(){
        axios.post(url.userinfo,{userId:'admin123'}).then(res=>{
            this.queryCounts=res.data.queryCounts
            this.totalsalary=res.data.totalsalary
            this.devday=res.data.devday
            this.msgcount=res.data.msgcount
            this.concatshow=res.data.concatshow
        })
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

    div,p{
        margin: 0;
        padding: 0;
    }
 
    #container{
        padding-top:60px;
        background-color:#4C55A2;
    }

    
    .opt_wrap{
        border-top-left-radius:20%;
        border-top-right-radius:20%;
        background-color:#fff;
        padding-bottom:30px;
    }

    .icon_wrap{
        margin-top:25px;
    }
    .icon_title{
        font-family:pingfangcu;
        font-size:26px;
        position:relative;
        color:black;
        margin-top:5px;
    }
    .icon_tips{
        color:#666666;
    }
    
    
    .tabbar_wrap{
        height:60px;
    }
    .tabbar_wrap img{
        height:25px;
    }
    .tabbar_wrap span{
        font-size:16px;
    }

</style>


