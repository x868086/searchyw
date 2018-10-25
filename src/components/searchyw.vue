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
                    >
                    <div slot="action" @click="searchyw">搜索</div>
                </van-search>
            </van-col>
        </van-row>

        <van-row class="content_wrap">
            <van-panel title="标题" status="状态" class="yw_content">
                <div slot="header">
                    <van-cell-group>
                        <van-cell v-bind:value="psptId" />
                        <van-tag round type="danger" size="large">非异网</van-tag>
                        <van-tag round type="success" size="large">异网</van-tag>
                    </van-cell-group>


                </div>
            </van-panel>
        </van-row>


    </div>
</template>



<script>
    import Vue from 'vue';
    import axios from 'axios';
    import url from '../modules/js/api.js';
    import { Row, Col,Search,Toast,Tag,NavBar,Panel,Cell, CellGroup  } from 'vant';
    Vue.use(Row).use(Col).use(Search).use(Toast).use(Tag)
        .use(NavBar).use(Panel).use(Cell).use(CellGroup);
    

    export default{
        name:'searchyw',
        data(){
            return{
                psptId:'',
                subNumbers:null
            }
        },
        methods:{
            onClickLeft(){
                this.$router.push({ path: '/main' })
            },
            checkInput(){
                return (!!this.psptId===false || this.psptId.length < 18)
            },
            searchyw(){
                if(this.checkInput()){
                    return Toast('请输入正确的证件信息')  
                }

                let data={psptId:this.psptId}
                axios.post(url.searchyw,data).then(res=>{
                    if(res.data.statusCode===200){
                        this.subNumbers.concat(res.data.subnumber)
 
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
        margin:10px;
        font-family:pingfangcu;
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

</style>




