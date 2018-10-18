<template>
    <div id="container">
        <van-row class="row-container">
            <van-col span="8" offset="8"><h2 class="title">UNI CMS</h2></van-col>
            
            <van-col span="8" offset="8"><span class="tips">输入7位渠道编码登录</span></van-col>

            <van-col span="24">
            <van-cell-group>
                <van-field
                    v-model="username"
                    required
                    clearable
                    label="用户名"
                    icon="question"
                    placeholder="请输入用户名"
                />
                <van-field
                        v-model="password"
                        type="password"
                        label="密码"
                        placeholder="请输入密码"
                        required
                />
            </van-cell-group>
            </van-col>

            <van-col span="24" >
                    <van-button round type="default" class="clicklogin"
                    @click="signin($event)">登录</van-button>
            </van-col>
        </van-row>


<div class="concat_flag">
    <van-icon name="phone" size="24px" @click="concat"/>
</div>

    </div>
</template>

<script>
import Vue from 'vue'
import { Row, Col,Field ,Button,CellGroup,Toast} from 'vant';
Vue.use(Row).use(Col).use(Field).use(Button).use(CellGroup)
    .use(Toast);

import axios from 'axios';
import url from '../modules/js/api.js'


export default {
    name:'login',
    data(){
        return{
            username:'',
            password:''
        }
    },
    mounted(){
        console.log(url.signin)
        
    },
    methods:{
        concat(){
           Toast({message:'使用反馈18607201381',duration:3000,position:{bottom:'-10'}}) 
        },
        signin(event){
            let that=this
            event.preventDefault()
            if(!!this.username === false || !!this.password ===false){
                return Toast({message:'请完善账号密码',duration:1000});
                
            }
            let lastSigninDate=new Date()
            let userData=new FormData()
            userData.append('username',this.username)
            userData.append('password',this.password)
            userData.append('lastSigninDate',lastSigninDate)
            axios.post(url.signin,userData).then(res=>{
                if(res.data.statusCode===200){
            console.log(this.$router.push)
                    // this.$route()
                    this.$router.push({ path: '/index' })

                }
            })
        }
    }
}
</script>


<style>
.row-container{
    transform:translateY(50%)
}
.tips{
    font-size:12px;
    color:#ccc;
}

.clicklogin{
    margin-top:20px;
    width:350px;
    background-color:#4C55A2;
    color:#fff;
}

.concat_flag{
    position:fixed;
    bottom:0;
    right:10px;
}


</style>


