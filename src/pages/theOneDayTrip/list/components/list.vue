<template>
	<div class="body-list" ref="theContentAdd" v-on:touchend="handleListEnd" @touchstart="handleTouch" @touchmove="handleEmitEvent">
	  	<ul class="container-list" ref="innerContent"  v-for="item in listContent" :key="item.id + (new Date()).getTime()" >
	  		<li class="list-img">
	  			<a><img class="list-title-img" :src="item.imgUrl"/></a>
	  			<div class="order-squ">
	  				<span class="order">可订明日</span>
	  			</div>
	  		</li>
	  		<li class="list-content">
	  			<h2 class="list-content-title" ref="title"><a>{{item.title}}</a></h2>
	  			<div>
	  				<span class="list-content-mask list-city">
	  					<a class="list-content-link">{{item.listMask}}</a>
	  				</span>
	  				<span class="list-content-mask">
	  					<a class="list-content-link">{{item.listMask2}}</a>
	  				</span>
	  				<span class="list-content-mask">
	  					<a class="list-content-link">{{item.listMask3}}</a>
	  				</span>
	  			</div>
	  			<div class="list-ticket">
	  				<span>已售<i>{{item.listTicket}}</i></span>	
		  		</div>
		  		<div class="list-price">
					<p class="list-price-content">
						<i class="now-price">&yen;{{item.listPrice}}</i>
						起
					</p>
		  			<p class="list-price-content">
		  				票面价
		  				<i class="pre-price">&yen;115</i>
		  			</p>
		  		</div>
	  		</li>
	  	</ul>	
</div>
</template>

<script>
  	export default {
  	props: ["listContent"],
    data () {
    	return{
    		screanY: 0,
    		ibool: true,
    		iScroll: false,
    		iHeight: 0,
    		wHeight: 0  		
    	}
    },
    created(){
    	let this_ = this;
    	window.addEventListener('scroll',()=>{
        	var diff = this_.iHeight - this_.wHeight;
        	if(diff - this.wHeight < 0){
        		this_.iScroll = true;
        	}else{
        		this_.iScroll = false;
        	}
    	});
    },
    updated(){

    	this.iHeight = this.$refs.theContentAdd.offsetHeight;
    	this.wHeight = window.innerHeight;		
    },
    methods: {
	  handleListEnd(){
	  	if(this.iScroll){
	  		this.$emit("addContent");
	  		this.iScroll = false;
	  	}
	  },
	  handleTouch(e){
	  	this.screanY = e.touches[0].screenY;
	  },
	  handleEmitEvent(e){
	  	let diffY = e.touches[0].screenY - this.screanY ;
	  	if(Math.floor(diffY) < 5){
		 	this.ibool = false;
	   		this.$emit("theMenuHide", this.ibool);
		}else{
		 	this.ibool = true;
	   		this.$emit("theMenuShow", this.ibool);
		}
	  }
  	}
  }
</script>


<style scoped>
	.body-list {
		position: absolute;
		top: 1.8rem;
		width: 100%;
		height: 100%;	
	}
	.container-list {
		margin-bottom: -2rem;
		width: 100%;
		overflow: hidden;
		position: relative;
		font-size: .28rem;	
	}
	.list-img {
		position: relative;
		width: 1.6rem;
		padding: .2rem;
	}
	.list-img .list-title-img {
		width: 80px;
		height: 80px;
	}
	.order {
		position: absolute;
		left: .14rem;
		top: .14rem;
		background: #00bcd4;
		color: #fff; 
		font-size: .24rem;
		line-height: .24rem;
		padding: .05rem;
		border-right: .01rem solid #ccc;
		z-index: 1;
	}
	.order-squ:after{
		position: absolute;
		top: .15rem;
		left: 1.10rem;
		content: "";
		border: .165rem solid #00bcd4;
		border-right-color: transparent ;
		z-index: 0;
	}
	.list-content {
		width: auto;
		position: relative;
		margin-left: 2rem;
		top: -2rem;
		height: 1.59rem;
		overflow: hidden;
		padding: .2rem .2rem .2rem 0;	
		border-bottom: .01rem solid #ccc;
	}
	.list-content .list-content-title{
		width: 100%;
		height: .72rem;
		line-height: .36rem;
		position: relative;
		overflow: hidden;
		text-overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		
	} 
	.list-content .list-content-title .list-content-link {
		display: block;
	}
	.list-content-mask {
		font-size: .20rem;
		margin: 0.1rem 0;
		padding:0  0.1rem;
		border-left: .01rem solid #ccc;
	}
	.list-city {
		border: none;
	}
	.list-city .list-content-link {
		color:#00bcd4;
	}
	.list-ticket {
		position: absolute;
		left: 0px;
		bottom: .2rem;
		color: #9e9e9e;
		font-size: .20rem;
	}
	.list-price {
		position: absolute;
		right: .22rem;
		bottom: .2rem;
		color: #9e9e9e;
		font-size: .24rem;
		text-align: right;
	}
	.list-price .list-price-content {
		padding-top: .1rem;
		letter-spacing: 1px;
	}
	.now-price {
		color: #ff8300;
		font-size: .30rem;
		font-weight: bold;
	}
	.pre-price {
		text-decoration: line-through;
	}
	.demo {
		width: 100%;
		height: 2rem;

	}
</style>
