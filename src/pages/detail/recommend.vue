<template>
<div>
    <div class="recommend-item border-top">
        <div class="recommend-main">
            <h6 class="recommend-main-title">长隆水上乐园夜场票(8.25-31可带1名1.5米以下儿童)</h6>
            <ul class="recommend-main-tip">
                <li class="tip-item">
                    <span class="tip-iconfont iconfont">&#xe67f;</span>
                    <span class="tip-txt">可定明日</span>
                </li>
                <li class="tip-item">
                    <span class="tip-iconfont iconfont">&#xe663;</span>
                    <span class="tip-txt">条件退</span>
                </li>
            </ul>
        </div>
        <div class="recommend-side">
            <a class="recommend-link">
                <strong class="recommend-price">
                    ￥<em class="recommend-price-num">190</em>
                </strong>
                <span class="recommend-ticke-cost">票面价￥
                    <em class="recommend-cost-num">195</em>
                </span>
                <em class="recommend-download">下载APP</em>
            </a>
        </div>
    </div>
    <div class="recommend-item">
        <div class="recommend-main">
            <h6 class="recommend-main-title">长隆水上乐园夜场票(8.25-31可带1名1.5米以下儿童)</h6>
            <ul class="recommend-main-tip">
                <li class="tip-item">
                    <span class="tip-iconfont iconfont">&#xe67f;</span>
                    <span class="tip-txt">可定明日</span>
                </li>
                <li class="tip-item">
                    <span class="tip-iconfont iconfont">&#xe663;</span>
                    <span class="tip-txt">条件退</span>
                </li>
            </ul>
        </div>
        <div class="recommend-side">
            <a  class="recommend-link">
                <strong class="recommend-price">
                    ￥<em class="recommend-price-num">190</em>
                </strong>
                <span class="recommend-ticke-cost">票面价￥
                    <em class="recommend-cost-num">195</em>
                </span>
                <router-link to="/productdetail">
                    <em class="recommend-order">查看</em>
                </router-link>
            </a>
        </div>
    </div> 
</div>   
</template>

<script>
    export default {
        data () {
            return {}
        }
    }
</script>

<style scoped>
    @import "../../assets/font/iconfont.css";
    .recommend-item{
        display: flex;
        width: 100%;
        z-index: 1;
        box-sizing: border-box;
        padding: .2rem .2rem .24rem .2rem;
    }
    .recommend-main{
        display: flex;
        flex-direction: column;
        flex: 2.92;  
        color: #212121;
        font-size: .28em;
    }
    .recommend-main-title{
        margin-right: .1rem;
        line-height: .52rem;
        padding: 0;
        font-size: .3rem;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;       
    }
    .recommend-main-tip{
        padding: .04rem 0 .08rem 0;
        overflow: hidden;
        margin-top: .1rem;
    }
    .tip-item{
        margin-right: .24rem;
        display: inline-block;
        color: #616161;
        font-size: .24rem;
        line-height: .32rem;
        white-space: nowrap;
    }
    .tip-iconfont{ 
        display: inline-block;
        margin-right: .08rem;
        color: #1ba9ba;
        font-size: .2rem;
    }
    .recommend-side{      
        display: flex; 
        flex-direction: column;
        align-items: center;
        width: .02rem;
        flex: 1;
        border-left: 1px solid #efefef;
    }
    .recommend-link{
        box-sizing: border-box;
        display: block;
        width: 100%;
        padding-left: .2rem;
        color: #00afc7;
        text-decoration: none;
        flex-direction: column;
    }
    .recommend-price{
        color: #ff9800;
        height: .4rem;
        display: block;
        overflow: hidden;
        font-size: .24rem;
        line-height: .4rem;
        text-align: center;
        font: .24rem "Microsoft yahei","Hiragino sans gb",Arial,sans-serif;
    }
    .recommend-price-num{
        margin-left: .04rem;
        color: #ff9800;
        font-size: .32rem;
        line-height: .3rem;
    }
    .recommend-ticke-cost{ 
        display: block;      
        width: 100%;
        color: rgb(158, 158, 158);
        transform-origin: 50% 50% 0px;
        transform: scale(0.8);
        height: 0.28rem;
        font-size: 0.24rem;
        line-height: 0.28rem;
        text-decoration: line-through;
        overflow: hidden;
    }
    .recommend-download{
        width: 1.6rem;
        background: #00bcd4;
        height: .6rem;
        color: #fff;
        font-size: .28rem;
        line-height: .6rem;
        border-radius: .06rem;
        display: block;
        overflow: hidden;
        text-align: center;
    }
    .recommend-order{
        width: 1.6rem;
        height: .6rem;
        color: #fff;
        font-size: .28rem;
        line-height: .6rem;
        border-radius: .06rem;
        display: block;
        overflow: hidden;
        text-align: center;
        background: #ff9800;
    }
</style>
