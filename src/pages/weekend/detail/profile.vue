<template>
  	<div class="detail-profile">
	  	<div class="background-img" v-if="show" > 
		    <div class="close-mask iconfont" @click="handleCloseClick">&#xe63f;</div>
		    <swiper :options="swiperOption">
		        <swiper-slide v-for="item in imgs" :key="id">
		            <div class="img-container">
		                <img class="swiper-img" :src="item"/>
		            </div>
		        </swiper-slide>    
		    </swiper> 
		    
			<div class="imgswipe-bar">
			    <div class="swiper-container"> 
			    	<div class="imgswipe-note">
			    		<div class="swiper-pagination"></div>
			    	</div>
			    	<div class="imgswipe-turn imgswipe-prev">
			    		<div class="swiper-button-prev swiper-button-white"></div>
			    	</div>
			    	<div class="imgswipe-turn imgswipe-next">
			    		<div class="swiper-button-next swiper-button-white"></div>	
			    	</div>
			    </div>
			</div>
	    </div>

	  	<div class="imgavatar">
	  		<router-link to="/weekend/index">
	  			<a class="header-back iconfont">&#xe615;</a>
	  		</router-link>
	        <img class="imgavatar-img" :src="src" :alt="title" @click="handleImgClick">
	        <div class="imgavatar-info">
	            <span class="iconfont">&#xe636;</span>
	            <span>1</span>
	            <span>/</span>
	            <span>{{imgs.length}}</span>
	        </div>
	    </div>

	    <div class="prdcard-con">
	        <div class="prdcard-infocon prdcard-infocon-touch">
	            <h2 class="prdcard-name">{{title}}</h2>
	            <div class="prdcard-option"></div>
	        </div>
	        <div class="prdcard-pricecon">
	            <em class="prdcard-priceicon">¥</em>
	            <span class="prdcard-pricetext">{{newPrice}}</span>
	            <span class="prdcard-priceunit">起/张</span>
	                <span class="prdcard-marketprice">¥{{oldPrice}}/张</span>
	        </div>
	        <div class="prddetail-entercon">
	            <div class="comments-total">
	                <span class="starlevel">
	                    <span class="starlevel-gain iconfont" data-score="5.0" style="width:100%">&#xe628;&#xe628;&#xe628;&#xe628;&#xe628;</span>
	                </span>
	                <span class="comments-score">5.0分</span>
	                <span class="comments-totalnum">31评论</span>
	            </div>
	            <span class="go-arrow iconfont">&#xe649;</span>
	        </div>
	    </div>
  	</div>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
  	export default {
	  	beforeCreate(){
	  		try{
	  			localStorage.id = this.$route.query.id;
				localStorage.title = this.$route.query.title;
				localStorage.src = this.$route.query.src;
				localStorage.newPrice = this.$route.query.newPrice;
				localStorage.oldPrice = this.$route.query.oldPrice; 
				localStorage.imgs = this.$route.query.imgs;			
	  		}catch(e){}
	  	},
	    data () {
	      return {
	      	show:false,
            swiperOption: {
                direction : 'horizontal',
                paginationClickable :true,
                observeParents:true,
                nextButton: '.swiper-button-next',
		        prevButton: '.swiper-button-prev',
		        pagination: '.swiper-pagination',
		        paginationType: 'fraction'
            },
            id: localStorage.id,
	       	title: localStorage.title,
	       	src: localStorage.src,
	       	newPrice: localStorage.newPrice,
	       	oldPrice: localStorage.oldPrice,
	       	imgs: localStorage.imgs.split(",")
	      }
	    },
	    props: ["dayTriphead","dayTripswiper"],
	    methods:{ 
	        handleImgClick() {
	            this.show=true
	        },
	        handleCloseClick() {            
	            this.show=false     
	        }  
	    },
	    components:{
            "swiper": swiper,
            "swiper-slide": swiperSlide
        } 
  	}
  	
</script>
<style scoped>
	@import "../../../assets/font/iconfont.css";
	@import '~swiper/dist/css/swiper.css';
	.loading-container {
    	height: 2rem;
    	line-height: 2rem;
    	text-align: center;
    	color: #666;
	}
	.imgavatar {
    	overflow: hidden;
   		height: 0;
    	position: relative;
    	padding-bottom: 56.25%;
    	background: url(http://simg3.qunarzz.com/piao/images/loading_camel.gif) no-repeat center;
	}
	.header-back {
    	left: .1rem;
    	top: .1rem;
    	width: .72rem;
    	height: .72rem;
    	line-height: .72rem;
    	position: absolute;
    	font-size: .36rem;
    	color: #fff;
    	text-align: center;
	}
	.imgavatar-img {
    	width: 100%;
    	vertical-align: top;
    	
	}
	.imgavatar-info {
    	overflow: hidden;
    	position: absolute;
    	right: .2rem;
    	bottom: .3rem;
    	min-width: 1rem;
    	height: .4rem;
    	padding: 0 .15rem;
    	background: rgba(0,0,0,.3);
    	color: #fff;
    	font-size: .24rem;
    	line-height: .4rem;
    	text-align: center;
    	border-radius: .2rem;
	}

	.prdcard-con {
	    position: relative;
	    margin-top: -.1rem;
	    padding: .3rem .2rem 0 .2rem;
	    border-bottom: .02rem solid #ccc;
	    background: #fff;
	    border-radius: .1rem .1rem 0 0;
	}
	.prdcard-infocon-touch {
	    padding-right: .2rem;
	}
	.prdcard-infocon {
	    position: relative;
	}
	.prdcard-name {
	    font-size: .32rem;
	    line-height: .38rem;
	    word-break: break-all;
	    word-wrap: break-word;
	}
	.prdcard-option {
	    position: absolute;
	    top: 50%;
	    right: .1rem;
	    margin-top: -.4rem;
	    line-height: .4rem;
	    z-index: 0;
	}
	.prdcard-pricecon {
	    margin: .3rem 0 .1rem 0;
	}
	.prdcard-priceicon {
	    color: #ff8300;
	    font-size: .24rem;
	}
	.prdcard-pricetext {
    	color: #ff8300;
    	font-size: .36rem;
	}
	.prdcard-priceunit {
	    color: #9e9e9e;
	    font-size: .24rem;
	}
	.prdcard-marketprice {
	    color: #9e9e9e;
	    font-size: .24rem;
	    text-decoration: line-through;
	}
	.prddetail-entercon {
	    position: relative;
	    height: .9rem;
	    line-height: .9rem;
	}
	.prddetail-entercon::before {
	    content: ' ';
	    overflow: hidden;
	    position: absolute;
	    top: 0;
	    right: 0;
	    left: 0;
	    width: 100%;
	    height: 0;
	    border-top: .02rem dashed #ccc;
	    transform: scaleY(.5);
	}
	.starlevel {
	    display: inline-block;
	    position: relative;
	    width: 1.6rem;
	    height: .28rem;
	}
	.starlevel-gain{
	    overflow: hidden;
	    position: absolute;
	    top: 0;
	    left: 0;
	    z-index: 2;
	    color: #00bcd4;
	    line-height: 1;
	}
	.comments-score {
	    margin-left: .1rem;
	    color: #616161;
	}
	.comments-totalnum {
	    float: right;
	    padding-right: .3rem;
	    color: #616161;
	    font-size: .28rem;
	}
	.prddetail-entercon .go-arrow {
	    position: absolute;
	    top: 0;
	    right: 0;
	    width: .2rem;
    	height: .9rem;
    	line-height: .9rem;
    	color: #9e9e9e;
    	font-size:.4rem;
	}
	.img-container{
	    width: 100%;     
	}
	.swiper-container {
	    margin-top: 13%
	}
	.swiper-img{
	    margin-top: 50%;
	    width:100%;
	}
	.close-mask{
       	position: absolute;
	    z-index: 3;
	    top: .6rem;
	    right: .4rem;
	    width: .6rem;
	    height: .6rem;
	    padding: .2rem;
	    color: #fff;
	    speak: none;
	    font-style: normal;
	    font-weight: 700;
	    font-size: .7rem;
	    border-radius: .3rem;      
	}
	.background-img{
	    position: fixed;
	    top: 0;
	    left: 0;
	    width: 100%;
	    height: 100%;
	    background: rgba(0,0,0,1);
	    z-index: 100000;
	    overflow: hidden;     
	}
	.imgswipe-bar {
	    position: absolute;
	    z-index: 9;
	    right: 0;
	    bottom: .4rem;
	    left: 0;
	    color: #fff;
	}
	.imgswipe-note {
	    height: .8rem;
	    font-size: .24rem;
	    line-height: .8rem;
	    text-align: center;
	}
	.imgswipe-turn {
	    position: absolute;
	    top: 0;
	    width: .8rem;
	    height: .8rem;
	    font-size: .4rem;
	    text-align: center;
	    vertical-align: middle;
	    line-height: .8rem;
	    border-radius: 50%;
	}
	.imgswipe-prev {
	    left: .4rem;
	}
	.imgswipe-next {
	    right: .4rem;
	}
</style>