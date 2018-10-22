<template>
    <div id="container">
        <van-row class="search_wrap">
            <van-col span="24"><p>异网标记查询</p></van-col>
            <van-col span="24">
                <van-search
                    v-model="psptId"
                    placeholder="请输入搜索证件号"
                    show-action
                    >
                    <div slot="action" @click="searchyw">搜索</div>
                </van-search>
            </van-col>
        </van-row>

        <van-row class="content_wrap">
            <van-collapse v-model="activeNames" v-show="!!userInfo.psptId">
            <van-collapse-item name="1">
                <div slot="title">证件号码:{{userInfo.psptId}}
                <van-tag round type="danger" v-show="userInfo.ywflag===false">非异网</van-tag>
                <van-tag round type="success" v-show="userInfo.ywflag===true">异网</van-tag>
                <van-icon name="aim" size="22px"/>累计查询次数{{queryCounts}}
                </div>
                <!-- <ul v-show="userInfo.deviceNumber instanceof Array"
                v-for="item in userInfo.deviceNumber">
                    <li>{{item}}</li>
                </ul> -->
            </van-collapse-item>
            </van-collapse>
        </van-row>


    </div>
</template>



<script>
    import Vue from 'vue';
    import axios from 'axios';
    import url from '../modules/js/api.js';
    import { Row, Col,Search,Toast,Collapse, CollapseItem,Tag } from 'vant';
    Vue.use(Row).use(Col).use(Search).use(Toast).use(Collapse).use(CollapseItem).use(Tag);
    
    import 'vant/lib/vant-css/icon-local.css';

    export default{
        name:'searchyw',
        data(){
            return{
                activeNames:['1'],
                userId:'admin001',
                queryCounts:'',
                userInfo:{
                    psptId:'',
                    deviceNumber:null,
                    ywflag:""
                }
            }
        },
        methods:{
            checkInput(){
                return (!!this.psptId===false || this.psptId.length < 18)
            },
            searchyw(){
                if(this.checkInput()){
                    return Toast('请输入正确的证件信息')  
                }

                let data={userId:this.userId,psptId:this.psptId}
                axios.post(url.searchyw,data).then(res=>{
                    if(res.data.statusCode===200){
                        this.userInfo=res.data.userInfo
                        this.queryCounts=res.data.queryCounts
                        this.userInfo.ywflag=!!!this.userInfo.deviceNumber
 
                    }else{
                        Toast('网络请求错误')
                    }

                })
            }
        }
    }
</script>


<style scoped>
    #container p{
        color:#2c3e50;
        font-size:22px;
        text-align:left;
        margin:10px;
        font-family:pingfangcu;
    }

    .search_wrap{
        padding:10px;
    }

    .content_wrap{
        margin-top:20px;
        border:1px solid black;
    }

</style>




