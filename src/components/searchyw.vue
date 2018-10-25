<template>
    <div id="container">
        <van-nav-bar title="异网信息查询" class="nav-bar">
            <van-icon name="arrow-left" slot="left" color="#fff"
            @click="onClickLeft"/>
            <van-icon name="info-o" slot="right" color="#fff"/>
        </van-nav-bar>

        <van-row class="search_wrap">
            <van-col span="24">
                <van-search
                    v-model="psptId"
                    placeholder="请输入搜索证件号"
                    show-action
                    v-on:click="isShow"
                    >
                    <div slot="action" @click="searchyw">搜索</div>
                </van-search>
            </van-col>
        </van-row>

        <van-row class="content_wrap">

            <p v-show="ywflag===true" v-bind:style="{color:!subNumbers? '#44BB00':'#ff4444'}">
                <van-icon name="zhihuizhongxin" size="30px" v-bind:color="!subNumbers? '#44BB00':'#ff4444'"/>
                {{psptId}}
            </p>
            <van-button round type="danger" size="small" v-show="!!subNumbers && ywflag===true">非异网</van-button>
            <van-button round type="primary" size="small" v-show="!subNumbers && ywflag===true">异网</van-button>
        </van-row>


    </div>
</template>



<script>
    import Vue from 'vue';
    import axios from 'axios';
    import url from '../modules/js/api.js';
    import { Row, Col,Search,Toast,NavBar,Panel,Icon  } from 'vant';
    Vue.use(Row).use(Col).use(Search).use(Toast)
    .use(NavBar).use(Icon);
    

    export default{
        name:'searchyw',
        data(){
            return{
                psptId:'',
                subNumbers:null,
                ywflag:false
            }
        },
        methods:{
            onClickLeft(){
                this.$router.push({ path: '/main' })
            },
            checkInput(){
                return (!!this.psptId===false || this.psptId.length < 18)
            },
            isShow(){
                this.ywflag=false;
                this.psptId=null;
            },
            searchyw(){
                if(this.checkInput()){
                    return Toast('请输入正确的证件信息')  
                }

                let data={psptId:this.psptId}
                axios.post(url.searchyw,data).then(res=>{
                    if(res.data.statusCode==='200'){
                        this.subNumbers=res.data.subnumber
                        this.ywflag=true
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
        color: #2c3e50;
        font-size: 20px;
        margin: 10px;
        font-family: pingfangcu;
        font-weight:600;
        /* background-color:#eee; */
        height: 40px;
        border-radius: 10px;
        line-height: 40px;
    }

    .search_wrap{
        padding:10px;
    }

    .content_wrap{
        margin-top:20px;
    }
    .nav-bar{
        background-color:#4C55A2;
        color:#fff;
        font-family:pingfangcu;
    }

    .van-icon {
        font-family: 'vant-icon', 'custom-iconfont' !important;
    }
    .van-icon-zhihuizhongxin:before { content: "\e660"; }
    .ywflag{
        color:red;
    }

</style>




