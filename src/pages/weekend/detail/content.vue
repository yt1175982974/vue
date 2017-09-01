<template>
    <div class="weekend-content">
        <div class="weekend-detail">
            <h3 class="weekend-detail-title">亮点先知道</h3>
            <div class="weekend-detail-content" v-for="con in subcontInfo">
                <h4 class="weekend-detail-subtitle">{{con.subtitle}}</h4>
                <p class="weekend-detail-subcontent" v-html="con.subcontent"></p>
            </div>
            <div class="weekend-detail-entercon">
                <router-link to="/weekend/detail/sightintroduction">
                    <a href="#" class="detail-link"></a>
                </router-link>
                <h3 class="weekend-detail-entertitle">
                详情介绍
                  <span class="enter-iconfont iconfont">&#xe649;</span>
                </h3>
            </div>
        </div>
        
        <div class="weekend-detail">
            <h3 class="weekend-detail-title">套餐包含</h3>
            <div class="weekend-detail-content" v-for="cons in subcontsInfo">
                <p class="weekend-detail-subcontent" v-html="cons.subcontents"></p>
            </div>
            <div class="weekend-detail-entercon" @click="handlePopup">
                <h3 class="weekend-detail-entertitle">
                购买须知
                  <span class="enter-iconfont iconfont">&#xe649;</span>
                </h3>
            </div>
            <div class="weekend-detail-entercon">
                <router-link to="/weekend/detail/nearby">
                    <a href="#" class="detail-link"></a>
                </router-link>
                <h3 class="weekend-detail-entertitle">
                周边好玩
                  <span class="enter-iconfont iconfont">&#xe649;</span>
                </h3>
            </div>
        </div>

        <div class='popup iconfont' v-if="show">
            <div class='popup-header border-bottom'>
                <h2 class='popup-title'>{{title}}</h2>
                <span class='popup-close' @click='handleClosePopus'>&#xe63f;</span>
                <p class='popup-sell'><span class='popup-camel'>&#xe6c5;</span>去哪儿直销<span class='popup-tag'><span class='popup-icon'>&#xe72d;</span>入团保障</span><span class='popup-tag'><span class='popup-icon'>&#xe652;</span>21.50前可预订</span></p>
            </div>
            <div class='popup-content'>
                <iscroll-view ref="iscroll" class="scroll-view">
                    <div class='popup-retreat border-bottom'>
                        <div class='popup-retreat-tag'><span class='popup-icon'>&#xe72d;</span>随心退</div>
                        <div class='popup-retreat-content'>90天内支持随时退款，经核实如未取票，可免费取消</div>
                    </div>
                    <ul class='popup-purchase'>
                        <li class='popup-purchase-list' v-for='list in purchases'>
                            <h5 class='popup-purchase-title'>{{list.title}}</h5>
                            <p class='popup-purchase-content' v-html='list.content'></p>
                        </li>
                    </ul>
                </iscroll-view>
            </div>
            <div class='popup-footer'>
                <span class='popup-price'>在线支付<span class='popup-price-icon'>￥</span><span class='popup-price-num'>{{newPrice}}</span></span>
                <router-link to='/weekend/order'>
                    <span class='popup-reserve'>立即预订</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            subcontInfo:[],
            subcontsInfo:[],
            purchases:[],
            show:false,
            title: localStorage.title,
            newPrice: localStorage.newPrice
        }
    },
    created() {
        this.$http.get('/static/weekdetail.json').then(response => {
            this.data         = response.body.data;
            this.subcontInfo  = this.data.subcontInfo;
            this.subcontsInfo = this.data.subcontsInfo;
            this.purchases    = this.data.purchase; 
        },response => {
            console.log("ajax error");
        });
    },
    methods:{
        handlePopup(){
            this.show = true;
        },
        handleClosePopus(){
            this.show = false;
        }
    }
}
</script>
<style scoped>
    @import "../../../assets/font/iconfont.css";
    .weekend-detail {
        position: relative;
        margin-top: .2rem;
        padding: 0 .2rem;
        background-color: #fff;
    }
    .weekend-detail::before {
        content:"";
        position:absolute;
        top:0;
        left: 0;
        width: 100%;
        height: .02rem;
        background:#c8cccd;
    }
    .weekend-detail::after {
        content:"";
        position:absolute;
        bottom:0;
        left: 0;
        width: 100%;
        height: .02rem;
        background:#c8cccd;
    }
    .weekend-detail-title::before {
        content: " ";
        position: absolute;
        top: .33rem;
        left: 0;
        width: .06rem;
        height: .25rem;
        background: #00bcd4;
        border-radius: .04rem;
    }
    .weekend-detail-title{
        overflow: hidden;
        position: relative;
        height: .88rem;
        line-height: .88rem;
        color: #212121;
        font-size: .3rem;
        text-indent: .12rem;
    }
    .weekend-detail-subtitle{
        color: #212121;
    }
    .weekend-detail-subcontent{
        position: relative;
        line-height: .48rem;
        padding-bottom: .15rem;
        color: #616161;
    }
    .weekend-detail-entercon {
        position:relative;
    }
    .weekend-detail-entercon .detail-link{
        position:absolute;
        top:0;
        left:0;
        z-index:1;
        width:100%;
        height:100%;
    }
    .weekend-detail-entercon::before{
        content: ' ';
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 0;
        border-top: .02rem dashed #eee;
    }
    .weekend-detail-entertitle::before {
        content: " ";
        position: absolute;
        top: .33rem;
        left: 0;
        width: .06rem;
        height: .25rem;
        background: #00bcd4;
        border-radius: .04rem;
    }
    .weekend-detail-entertitle {
        width:100%;
        height:.88rem;
        line-height: .88rem;
        padding:0 .1rem;
        font-size:.3rem;
    }
    .enter-iconfont {
        display:block;
        position: absolute;
        top: 0;
        right: 0;
        width: .2rem;
        height: .9rem;
        line-height: .9rem;
        color: #9e9e9e;
        font-weight: bold;
        font-size:.4rem;
    }
     .popup-content{
        width:100%;
        height:9.2rem;
        background:#fff;
        overflow:hidden;
        position:relative;
    }
    .scroll-view {
        touch-action: none;
        position: absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
        overflow: hidden;
    }
    .popup{
        width:100%;
        height:100%;
        overflow:hidden;
        padding:.6rem .2rem;
        box-sizing:border-box;
        position:fixed;
        left:0;
        top:0;
        background:rgba(0,0,0,.4);
        z-index:3;
    }
    .popup-header{
        background:#fff;
        padding:.2rem;
    }
    .popup-header::after{
        content: "";
        position: absolute;
        width: 100%;
        height: .02rem;
        background: #e0e0e0;
        bottom: 0;
    }
    .popup-content{
        width:100%;
        height:9.2rem;
        background:#fff;
        overflow:auto;
    }
    ::-webkit-scrollbar {  
          width:.1rem;
          height:.1rem;
          position:absolute;
          top:0;
          right:0;
          background:#fff;
    }
    ::-webkit-scrollbar-thumb{
        border-radius:.1rem;
        background:#999;
    }
    .popup-purchase{
        background:#fff;
        padding:.28rem .2rem;
    }
    .popup-purchase-title{
        font-size:.28rem;
        margin-bottom:.2rem;
        font-weight:800;
    }
    .popup-purchase-content{
        color:#999;
        line-height:.36rem;
    }
    .popup-purchase-list{
        margin-bottom:.4rem;
    }
    .popup-sell{
        margin-top:.3rem;
        font-size:.24rem;
        line-height:.4rem;
        color:#999;
    }
    .popup-icon{
        color:#00bcd4;
        margin-right:.08rem;
    }
    .popup-tag{
        float:right;
        margin-left:.1rem;
        padding:.04rem;
        color:#333;
    }
    .popup-camel{
        margin:.04rem .06rem 0 0;
        background:#00bcd4;
        color:#fff;
        font-size:.32rem;
        vertical-align:top;
    }
    .popup-title{
        width:90%;
        font-size:.32rem;
        font-weight:600;
        box-sizing:border-box;
        line-height:.45rem;
    }
    .popup-close{
        display: inline-block;
        position: absolute;
        top: .8rem;
        right: .4rem;
        width: .4rem;
        height: .4rem;
        font-size: .45rem;
        color: #b5b5b5;
    }
    .popup-retreat{
        padding:.28rem .2rem;
        background:#fff;
        line-height:.28rem;
        height:.72rem;
    }
    .popup-retreat::after{
        border-color:#e0e0e0;
    }
    .popup-retreat-content{
        width:5.2rem;
        line-height:.36rem;
        font-size:.28rem;
        float:right;
    }
    .popup-retreat-tag{
        font-size:.24rem;
        margin-right:.14rem;
        float:left;
    }
    .popup-footer{
        height:1rem;
        background:#fff;
    }
    .popup-price{
        width:3.5rem;
        line-height:1rem;
        display:inline-block;
        font-size:.24rem;
        color:#999;
        text-align:center;
    }
    .popup-price-icon{
        color:#ff9800;
        margin:0 .04rem;
    }
    .popup-price-num{
        font-size:.48rem;
        color:#ff9800;
    }
    .popup-reserve{
        width:3.5rem;
        line-height:1rem;
        display:inline-block;
        color:#fff;
        background:#ff9800;
        font-size:.4rem;
        text-align:center;
    }
</style>
