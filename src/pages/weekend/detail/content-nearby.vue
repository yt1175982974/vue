<template>
    <div class="weekend-nearby">
        <div class="nearby-header">
            <router-link :to='{path:"/weekend/detail?title="+title+"&newPrice="+newPrice+"&oldPrice="+oldPrice+"&src="+src+"&imgs="+imgs+"&id="+id}'>
                <a class="nearby-header-return iconfont">&#xe720;</a>
            </router-link>
            <h1 class="nearby-header-title">周边好玩</h1>
        </div>
        <div class="nearby-content" v-for="ne in nearbies">
            <div class="nearby-item-box">
                <img class="nearby-item-img" :src="ne.nearimg"/>
            </div>
            <div class="nearby-item-right">
                <h3 class="nearby-item-title">{{ne.neartitle}}</h3>
                <div class="nearby-item-detail">
                    <span class="nearby-appraise-box">
                        <span class="nearby-item-appraise iconfont" v-html="ne.nearappraise"></span>
                    </span>
                    <span class="nearby-price-box">
                        <span class="nearby-item-price" v-html="ne.nearprice"></span>起
                    </span>
                </div>
                <div class="nearby-item-address">
                    <span class="address-iconfont iconfont">&#xe665;</span>
                    <span class="address-name">{{ne.nearaddress}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nearbies:[],
            id: localStorage.id,
            title: localStorage.title,
            src: localStorage.src,
            newPrice: localStorage.newPrice,
            oldPrice: localStorage.oldPrice,
            imgs: localStorage.imgs.split(",") 
        }
    },
    created() {
        this.$http.get('/static/weekdetail.json').then(response => {
            this.data = response.body.data;
            this.nearbies = this.data.nearbies;
        },response => {
            console.log("ajax error");
        });
    }
}
</script>
<style scoped>
   @import "../../../assets/font/iconfont.css";
   @import "../../../assets/css/common/border.css";
    .weekend-nearby {
        position:relative;
        width:100%;
        height:100%;
        background:#fff;
    }
    .nearby-header {
        position:relative;
        width:100%;
        height:.88rem;
        background:#00bcd4;
    }
    .nearby-header-return {
        position:absolute;
        top:.2rem;
        left:.1rem;
        font-size:.5rem;
        color:#fff;
    }
    .nearby-header-title {
        line-height: .88rem;
        margin:0 1rem;
        font-size:.32rem;
        text-align:center;
        color:#fff;
    }
    .nearby-content {
        overflow: hidden;
        position: relative;
        height: 2rem;
    }
    .nearby-item-box{
        float:left;
        width:1.6rem;
        height:1.6rem;
        padding:.2rem;
    }
    .nearby-item-img{
        width:100%;
        height:100%;
    }
    .nearby-item-right{
        position: relative;
        height: 1.6rem;
        margin-left: 2rem;
        padding: .2rem .2rem .2rem 0;
    }
    .nearby-item-right::after{
        content:" ";
        position:absolute;
        left:0;
        bottom:0;
        width:100%;
        height:.02rem;
        background:#eee; 
    }
    .nearby-item-detail{
        margin-top:.1rem;
    }
    .nearby-item-title{
        line-height: .4rem;
        max-height: .8rem;
        margin-top: -.06rem;
        font-size: .3rem;
    }
    .nearby-item-detail{
        height: .4rem;
        line-height: .4rem;
    }
    .nearby-appraise-box{
        position: relative;
        width: 1rem;
        line-height: .4rem;
        font-size:.2rem;
    }
    .nearby-item-appraise{
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        color:#00bcd4;
    }
    .nearby-price-box{
        float:right;
        font-size:.2rem;
        color:#aaa;
    }
    .nearby-item-price{
        margin-right:.05rem;
        color:#fc461e;
        font-size:.32rem;
    }
    .nearby-item-address{
        position: absolute;
        bottom: .2rem;
        left: 0;
        color: #999;
        vertical-align: middle;
    }
    .address-iconfont,.address-name{
        font-size:.2rem;
    }
</style>
