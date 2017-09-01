<template>
    <div class="header iconfont">
        <router-link :to='{path:"/weekend/detail?title="+title+"&newPrice="+newPrice+"&oldPrice="+oldPrice+"&src="+src+"&imgs="+imgs+"&id="+id}'>
            <div class="headerback">&#xe615;</div>
        </router-link>
        <div class="headertitle">订单填写</div>
        <div class="headerlogin">登录</div>            
    </div>
</template>
<script>
    export default {
        data() {
            return {
                id: localStorage.id,
                title: localStorage.title,
                src: localStorage.src,
                newPrice: localStorage.newPrice,
                oldPrice: localStorage.oldPrice,
                imgs: localStorage.imgs.split(",") 
            }
        }
    }
</script>

<style scoped>
    @import "../../../assets/font/iconfont.css";
    .header{
        height: .88rem;
        width: 100%;
        background: #00bcd4;
        color: white;

    }

    .headerback{
        height: .88rem;
        line-height: .88rem;
        width: 10%;
        text-align: center;
        float: left;
        color: white;
    }

    .headertitle{
        overflow: hidden;
        margin: 0 1rem;
        line-height: .88rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: .32rem;
        text-align: center;
        color: #fff;
    }

    .headerlogin{
        position: absolute;
        top: 0;
        right: 0;
        height: .88rem;
        line-height: .88rem;
        width: 1rem;
        text-align: center;
        font-size: .28rem;
        color: #fff;
    }
</style>