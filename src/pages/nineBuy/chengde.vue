<template>
 	<div>
		<div class="index-img-container index-modules-caption">
			<img class="img-miaosha" src="https://s.qunarzz.com/piao_topic/image/touch/custom/2017/2322anniversary08/caption_1.jpg"/>
 		</div>
		<div class="index-modules-content">
			<ul class="index-list">
				<li class="index-item" v-for="(miaosha, index) in chengde" :text="miaosha.text">
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
	  export default {
	    name: 'center',
	    props:["chengde"],
	    data () {
	      return {}
	    }
  	}
</script>


<style scoped>
	@import "../../assets/css/base/reset.css";
	@import "../../assets/css/nineBuy/center.css"
</style>