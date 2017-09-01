<template>
	<div class="prdcard" >
    	<div class="box">
    		<h3 class="prdcard-name">{{title}}</h3>
    		<div class="prdcard-pricecon">
            	<span class="prdcard-span1">&yen;</span>
	            <span class="prdcard-span2">{{newPrice}}</span>
	            <span class="prdcard-span3">起 /张</span>
        	</div> 
        	<div class="info-note" @click="handlePopup">预订须知</div>
    	</div>
       
        <div class="prdcard-tagcon">
	        <ol class="time">	
                <li class="prdcard-tagcon-li">
                    <span class="prdleft iconfont">&#xe627;</span>随心退
                </li>
	        </ol>
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
        </div>     
    </div>
</template>
<script>
	export default {
        data() {
            return {
            	show: false,
                title: localStorage.title,
                newPrice: localStorage.newPrice,
                purchases:[],
            }
        },
        created() {
	        this.$http.get('/static/weekdetail.json').then(response => {
	        	this.data = response.body.data;
	            this.purchases = this.data.purchase; 
	        },response => {
	            console.log("ajax error");
	        });
	    },
        methods: {
        	handlePopup(){
	            this.show = true;
	        },
        	handleClosePopus() {
        		this.show = false;
        	}
        }
    }
</script>

<style scoped>
	@import "../../../assets/font/iconfont.css";
	.prdcard {
	    position: relative;
	    overflow: hidden;
	    min-height: 1.1rem;
	    padding: .2rem .2rem .1rem .2rem;
	    background: #fff;
	}
	.box {
	    display: inline-block;
	    margin-right: 1.9rem;
	}
	.prdcard-name {
	    color: #212121;
	    font-size: .32rem;
	    line-height: .44rem;
	    margin-bottom: .04rem;
	    float:left;
	}
	.prdleft {
	    font-size: .2rem;
	    margin-right: .1rem;
	    color: #25a4bb;
	}
	.prdcard-tagcon-li {
	    float: left;
	    line-height: .44rem;
	    color: #616161;
	    font-size: .24rem;
	    margin-right: .1rem;
	}
	.time { 
	    width: 100%;
	    float: left;
	}
	.info {
	    float: left;
	}
	.money {
	    width: 30%;
	    float: right;
	}
	.prdcard-pricecon {
		position: absolute;
	    right: .2rem;
	    top: .05rem;
	    width: 1.8rem;
	    margin: .2rem 0;
	    float: right;
	    width: 30%;
	    text-align: right;
	}
	.prdcard-span1 {
	    color: #ff8300;
	    font-size: .24rem;
	}
	.prdcard-span2 {
	    color: #ff8300;
	    font-size: .4rem;
	} 
	.prdcard-span3 {
		font-size: .24rem;
	    color: #9e9e9e;
	}  
	.prdcard-tagcon .prdcard-tagcon-li{
	    float: left;
	    font-size: .24rem;
	}
	.info-note {
		position: absolute;
	    right: .2rem;
	    top: .7rem;
	    line-height: .32rem;
	    color: #00bcd4;
	    font-size: .28rem;
	    float: right;
	    text-align: right;
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