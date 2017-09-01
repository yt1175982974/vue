<template>
 	<div>
 		<div class="index-img-container index-modules-caption">
			<img class="img-miaosha" src="https://s.qunarzz.com/piao_topic/image/touch/custom/2017/2322anniversary08/caption_1.jpg"/>
 		</div>
		<div class="index-modules-content">
			<ul class="index-list">
				<li class="index-item" v-for="(miaosha, index) in beijing" :text="miaosha.text">
					<a class="index-link">
	            		<div class="index-show index-img-container">
	                		<img class="index-topic-img" :alt="miaosha.alt" v-lazy="miaosha.imgUrl" />
	            		</div>
	            		<div class="index-title">
	               			<div class="index-ellipsis2">{{miaosha.ellipsis2}}
	               			</div>
	            		</div>
	           			<div class="index-price">
	                		<strong class="index-sale"><span class="index-price">¥<span class="index-price-num">{{miaosha.price}}</span></span></strong>
	                		<span class="index-cost">票面价<span class="index-price">¥<em class="index-price-num">{{miaosha.realPrice}}</em></span></span>
	            		</div>
	            		<div class="grid-btn">立即抢购</div>
            		</a>
    			</li>
			</ul>
			<ul class="index-card-list" >    
				<li class="index-card-item" v-for="(card, index) in cards">
        			<a class="index-card-link">
            			<div class="index-card-show index-img-container">
                			<img class="index-topic-img" :alt="card.alt" v-lazy="card.imgUrl" style="opacity: 1;" />
                				<em class="index-card-name">
                    				<span class="index-ellipsis2">{{card.ellipsis2}}</span>
                				</em>
            			</div>
            			<div class="index-card-price">
                			<strong class="index-card-sale"><span class="index-price">¥<span class="index-price-num">{{card.price}}</span></span></strong>
                			<span class="mp-card-cost">票面价<span class="index-price">¥<em class="index-price-num">{{card.realPrice}}</em></span></span>
            			</div>
            			<div class="index-card-btn">立即抢购</div>
        			</a>
   			 	</li>
			</ul>
			<div class="index-img-container index-module-caption">
				<img src="https://s.qunarzz.com/piao_topic/image/touch/custom/2017/2322anniversary08/caption_3.jpg" alt="暑假热玩" class="topic-img"/>
			</div>
			
			<div class="module-content">
				<ul class="index-grid-list">
					<li class="index-data-loading">网络异常，请检查网络后刷新
					</li>
				</ul>
				<a class="index-more">更多门票玩乐产品</a>
			</div>
		</div>
	</div>
</template>

<script>
	const cards = [{
		imgUrl: "https://img1.qunarzz.com/sight/p0/201403/07/d43a150292bca04bf13c59d24e096530.jpg",
		ellipsis2: "【爆款】北京八达岭长城+十三陵定陵含地宫鸟巢纯玩一日游【成人 不含餐 普通版不含缆车】",
		alt: "明十三陵",
		price: 139,
		realPrice: 269
	},{
		imgUrl: "https://img1.qunarzz.com/sight/p0/1604/1b/1b6778deafaf208f90.img.jpg",
		ellipsis2: "【7-11点任选】八达岭长城门票+往返直通车*承诺不满意全退【成人 10:00 含餐 不含缆车】",
		alt: "八达岭长城",
		price: 78,
		realPrice: 99
	}]
	
  	export default {
	    name: 'beijing',
	    props:["beijing"],
	    data () {
	      	return {
	      		cards: cards
	      	}
	    }
  	}
</script>


<style scoped>
	@import "../../assets/css/base/reset.css";
	@import "../../assets/css/nineBuy/center.css"
</style>