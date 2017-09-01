<template>
 	<div>
		<div class="index-img-container index-modules-caption">
			<img class="img-miaosha" src="https://s.qunarzz.com/piao_topic/image/touch/custom/2017/2322anniversary08/caption_1.jpg"/>
 		</div>
		<div class="index-modules-content">
			<ul class="index-list">
				<li class="index-item" v-for="(miaosha, index) in tianjin" :text="miaosha.text">
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
		imgUrl: "https://img1.qunarzz.com/sight/p86/201211/07/83ca149fd8b7af2193835fbb.jpg",
		ellipsis2: "天津眼+静园+瓷房子+古文化街+意风区+五大道+滨海新区塘沽【成人 08:30 市内六区接站10元/人】",
		alt: "瓷房子",
		price: 135,
		realPrice: 148
	},{
		imgUrl: "https://img1.qunarzz.com/sight/p0/201301/06/d7621081590c340393835fbb.jpg",
		ellipsis2: "<经典品质>天津意风区-静园-瓷房子-天津之眼-一日游【成人 8:10天津站南四出站口】",
		alt: "海河外滩公园",
		price: 188,
		realPrice: 198
	}]
	
  	export default {
	    name: 'tianjin',
	    props:["tianjin"],
	    data () {
		    return {
		    	cards : cards
		    }
	    }
  	}
</script>

<style scoped>
	@import "../../assets/css/base/reset.css";
	@import "../../assets/css/nineBuy/center.css"
</style>