let host="http://rap2api.taobao.org/app/mock/95149";

let url={
    signin:'/signin',
    userinfo:'/userinfo'
}

for(let key in url){
    if(url.hasOwnProperty(key)){
        url[key]=host+url[key]
    }
}

export default url