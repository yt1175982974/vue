<template>
	<div id="index">
		<div class="header">
			<a class="header-left" @click="handleClickReturn">
				<span class="iconfont leftArrow">
					&#xe615;
				</span>
			</a>
			<h1 class="header-caption">门票9元起</h1>
			<a class="header-right" @click="handleClickReturn">
				<span class="iconfont tiantan">
					&#xe607;
				</span>
				首页
			</a>
		</div>
		<div class="ban">
			<img src="https://s.qunarzz.com/piao_topic/image/touch/custom/2017/2322anniversary08/banner_v3.jpg"/>
			<div class="luotuo">
				<img src="https://s.qunarzz.com/piao_topic/image/touch/custom/2017/2322anniversary08/camel_normal.png"/>
				<img class="img1" src="https://s.qunarzz.com/piao_topic/image/touch/custom/2017/2322anniversary08/camel_eye.png"/>
			</div>
			<div class="star star1">
				<img src="https://s.qunarzz.com/piao_topic/image/touch/custom/2017/2322anniversary08/star.png"/>
			</div>
			<div class="star star2">
				<img src="https://s.qunarzz.com/piao_topic/image/touch/custom/2017/2322anniversary08/star.png"/>
			</div>
			<div class="star star3">
				<img src="https://s.qunarzz.com/piao_topic/image/touch/custom/2017/2322anniversary08/star.png"/>
			</div>
		</div>
		<div>
			<city :citys="citys"></city>
		</div>
		<div>
			<router-view  :beijing="beijing" :baoding="baoding" :chengde="chengde" :tianjin="tianjin"></router-view>
		</div>
		<div class="footer">
			<ul class="list">
				<li class="list-item" v-for="(nav,index) in navs" :text="nav.text" >
					<a href="" class="link">
						<span class="img-warp">
							<img class="img" :src="nav.url"/>
						</span>
						<br />
						{{nav.text}}
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import City from "./city.vue"
	export default {
    	name: 'nineBuy',
    	data () {
      		return {
      			navs : [],
      			citys : [],
      			beijing : [],
      			tianjin : [],
      			chengde : [],
      			baoding : []
      		}
    	},
    	created() {
	      	this.$http.get('/static/ninebuy.json').then(response => {
	        var data = response.body.data;
	        this.navs = data.navs;
	        this.citys = data.citys;
	        this.beijing = data.beijing;
	        this.tianjin = data.tianjin;
	        this.baoding = data.baoding;
	        this.chengde = data.chengde;
	    	},response => {
	        	console.log("ajax error");
	      	});
	    },
    	components:{
    		city : City,
    	},
    	methods:{
    		handleClickReturn(){
    			this.$router.push("/")
    		}
    	}
  	}
</script>

<style scoped>
	@import "../../assets/font/iconfont.css";
	.header{
		width:100%;
		line-height:.88rem;
		background:#1ba9ba;
		color: #fff;
		border-bottom: #1b7a8b .02rem solid;
	}
	.header a{
		position: absolute;
		z-index: 91;
	    color:#fff;
	    top: 0;
	    width: .88rem;
	    height: .88rem;
	    text-align: center;
	}
	.header-left{
		left:0;
		font-size: .32rem;
	}
	.header-right{
		right: 0;
    	font-size: .24rem;
    	line-height: .36rem;
	}
	.header-left .leftArrow{
		display: inline-block;
	    width: .88rem;
	    height: .88rem;
	    font-size: .36rem;
	    line-height: .88rem;
	    text-decoration: none;
	    color: #FFFFFF;
	}
	.header-right .tiantan{
	    display: block;
		height: auto;
		padding-top: .1rem;
		line-height: 1;
    	font-size: .4rem;
    	width:.88rem;
    	font-weight: 600;
    
	}
	.header-caption{
		overflow: hidden;
	    margin: 0 1rem;
	    font-weight: normal;
	    font-size: .32rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    text-align: center;
	}
	.ban{
		overflow: hidden;
    	width: 100%;
    	height: 0;
    	position: relative;
    	padding-bottom: 71.3%;
	}
	.ban img{
		width: 100%;
    	vertical-align: top;
	}
	.star{
		position: absolute;
	    font-size: 0;
	    line-height: 0;
	}
	.star1{
		top: 76.2%;
	    left: 5.2%;
	    width: 2%;
	    animation: starFlash 2s ease-in infinite;
	}
	.star2{
		top: 92.7%;
	    left: 75.6%;
	    width: 2%;
	    animation: starFlash 2.8s ease-in infinite;
	}
	.star3{
		top: 72%;
	    left: 88.8%;
	    width: 2.8%;
	    animation: starRotate 3s linear infinite;
	}
	@keyframes starRotate{
		0% {
		    transform: rotate(0);
		}
		100% {
		    transform: rotate(360deg);
		}
	}
	@keyframes starFlash{
		0% {
		    opacity: .5;
		    transform: scale(1);
		}
		50% {
		    opacity: 1;
		    transform: scale(1.5);
		}
		100% {
		    opacity: .5;
		    transform: scale(1);
		}
	}
	.luotuo{
		position: absolute;
	    font-size: 0;
	    line-height: 0;
	    top: 68.7%;
	    right: 2.1%;
	    width: 23.9%;
	    height: 1.6422rem;
	}
	.luoto img{
		width: 100%;
    	vertical-align: top;
    	position: absolute;
	}
	.img1{
		position: absolute;
		top: 0;
	    left: 0;
	    opacity: 0;
	    animation: camel 3s linear infinite;
	}
	@keyframes camel{
		0% {
		    opacity: 0;
		}
		
		32% {
		    opacity: 0;
		}
		
		33% {
		    opacity: 1;
		}
		
		100% {
		    opacity: 1;
		}
	}
	.footer{
	    position: fixed;
	    z-index: 10;
	    bottom: 0;
	    width: 100%;
	    height: 1rem;
	    padding: .06rem 0;
	    background: #fff;
	    font-size: .24rem;
	}
	.list{
		position: fixed;
	    z-index: 10;
	    bottom: 0;
	    width: 100%;
	    height: 1rem;
	    padding: .06rem 0;
	    background: #fff;
	    font-size: .24rem;
	    box-shadow: 0 0 0.2rem rgba(0,0,0,.3);
	}
	.list-item{
		float: left;
	    width: 33.33%;
	    height: 1rem;
	    text-align: center;
	}
	.list-item:nth-child(1) span {
        width: .78rem;
    }
	.link{
	    display: block;
	    width: 100%;
	    color: #862edc;
	    text-align: center;
	    line-height: .32rem;
	}
	.img-warp{
		display: inline-block;
		width: .58rem;
    	height: .58rem;
	}
	.img{
		display: block;
	    width: 100%;
	    height: auto;
	    vertical-align: middle;
	}

</style>