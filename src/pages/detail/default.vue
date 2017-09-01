<template>
<div>
    <div class="ticket-default">         
        <div class="ticket-default-item"  v-for="defaultItem in list" >
            <div class="ticket-main"  @click="handleOrderClick">
                <h6 class="ticket-main-title">{{defaultItem.itemTitle}}</h6>
                <ul class="ticket-main-tip">
                    <li class="tip-item">
                        <span class="tip-iconfont iconfont">&#xe67f;</span>
                        <span class="tip-txt">{{defaultItem.itemTip1}}</span>
                    </li>
                    <li class="tip-item">
                        <span class="tip-iconfont iconfont">&#xe663;</span>
                        <span class="tip-txt">{{defaultItem.itemTip2}}</span>
                    </li>
                </ul>
            </div>
            <div class="ticket-slid">
                <a class="ticket-link">
                    <strong class="ticket-price">
                        ￥<em class="ticket-price-num">{{defaultItem.itemNowprice}}</em>
                    </strong>
                    <span class="ticket-ticke-cost">票面价￥
                        <em class="ticket-cost-num">{{defaultItem.itemPreprice}}</em>
                    </span>
                    <em class="ticket-download" @click="handleOrderingClick">预定</em>
                </a>
            </div>
        </div>   
    </div>
    
</div> 
</template>

<script>  
    export default {
        props:["list"],
        data () {
            return {
            }
        },
        methods:{
            handleOrderClick:function() { 
                this.$store.commit("changeIsPop");
            },
            handleOrderingClick:function() {
                this.$store.commit("changeIsFadeIn");
                this.$store.commit("changeIsBlock");
            }
        }
}
</script>

<style scoped>
  @import "../../assets/font/iconfont.css";
  .ticket-default{ 
        background: #f5f5f5;
        box-sizing: border-box;
        /*display: flex;*/
        width: 100%;
        border-bottom: 1px solid #efefef;
        flex-direction: column;
        display: none;
    }
    .active{
        display: flex;
    }
    .ticket-default-item{
        background: #f5f5f5;
        box-sizing: border-box;
        padding: .2rem .2rem .24rem .2rem;
        display: flex;
        width: 100%;
        border-top: 1px solid #efefef;
    }
    .ticket-default-item:nth-child(1){
        border-top: 1px dashed #efefef;
    }
    .ticket-main{
        display: flex;
        flex-direction: column;
        flex: 2.92;  
        color: #212121;
        font-size: .28em;
    }
    .ticket-main-title{
        color: #888;
        font-size: .24rem;
        line-height: .36rem;
        margin-right: .1rem;
        padding: 0;
        overflow: hidden;
        text-overflow: ellipsis;       
    }
    .ticket-main-tip{
        padding: .04rem 0 .08rem 0;
        overflow: hidden;
        margin-top: .12rem;
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
    .ticket-slid{      
        display: flex; 
        flex-direction: column;
        align-items: center;
        width: .02rem;
        flex: 1;
        border-left: 1px solid #efefef;
    }
    .ticket-link{
        box-sizing: border-box;
        display: block;
        width: 100%;
        padding-left: .2rem;
        color: #00afc7;
        text-decoration: none;
        flex-direction: column;
    }
    .ticket-price{
        color: #ff9800;
        height: .4rem;
        display: block;
        overflow: hidden;
        font-size: .24rem;
        line-height: .4rem;
        text-align: center;
        font: .24rem "Microsoft yahei","Hiragino sans gb",Arial,sans-serif;
    }
    .ticket-price-num{
        margin-left: .04rem;
        color: #ff9800;
        font-size: .32rem;
        line-height: .3rem;
    }
    .ticket-ticke-cost{ 
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
    .ticket-download{
        width: 1.6rem;
        background: #ff9800;
        height: .6rem;
        color: #fff;
        font-size: .28rem;
        line-height: .6rem;
        border-radius: .06rem;
        display: block;
        overflow: hidden;
        text-align: center;
    }
</style>
