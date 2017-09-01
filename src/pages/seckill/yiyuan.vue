<template>
	<div class="yiyuanGoods-box">
		<div class="yiyuanHeader">
			8.24-9.10，每天10点准时开抢！
		</div>

		<swiper :options="swiperOption" class="container">
		    <swiper-slide key="item.id" v-for="item in data.items" class="slide">

				<div class="itemImg"><img class="listSmallImg" :src="item.imgUrl"></div>
				<div class="itemText">{{item.text}}</div>
				<div class="itemPrice">
				    <span class="leftPrice">¥<span class="price">{{item.newPrice}}</span></span>
				    <span class="rightPrice">票面价¥{{item.oldPrice}}</span>
				</div>
				<div class="purchase-btn">立即抢购</div>

			</swiper-slide>
		</swiper>

	</div>
</template>

<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
	props:["data"],
	data () {
		return {
			swiperOption: {
				direction : 'horizontal',
				freeMode: true,
				slidesPerView: 2.5,
				spaceBetween: 10
			}
    	}
	},
	components:{
		"swiper": swiper,
		"swiper-slide": swiperSlide
	}
}
</script>

<style scoped>
  @import '~swiper/dist/css/swiper.css';

.yiyuanGoods-box {
	min-height: 2.36rem;
	background-image: linear-gradient(to bottom,#9003b7,#8e03ba);
    background-position: center 0;
    background-size: contain;
    background-repeat: no-repeat;
}
.yiyuanHeader {
	line-height:.26rem;
	text-align:center;
	font-size: .24rem;
	color: #e064ed;
	border-bottom:1px solid #f062ff;
	padding-bottom:.04rem;
}
.container {
	padding:.4rem .15rem .2rem .23rem;
}
.slide {
	background:#fff;
	padding-bottom:.16rem;
}
.itemImg {
	position: relative;
    padding-bottom: 61.76%;
    background-color: #f0f0f0;
    overflow: hidden;
    width: 100%;
    height: 0;
}

.listSmallImg {
	width: 100%;
    vertical-align: top;
}
.itemText {
	margin: .12rem .15rem 0;
	height: .72rem;
	color: #222;
	font-size: .28rem;
	line-height: .36rem;
	overflow: hidden;
	text-overflow: ellipsis;
}
.itemPrice {
	height: .76rem;
	line-height: .88rem;
	text-indent: .15rem;
	overflow: hidden;
}
.leftPrice {
	color: #ff5a00;
	font: .24rem "Microsoft yahei","Hiragino sans gb",Arial,sans-serif;
}
.price {
	font-size:.4rem;
}
.rightPrice {
	float: right;
	padding-right: .15rem;
	line-height: .88rem;
	color: #999;
	text-decoration: line-through;
}
.purchase-btn {
	margin: 0 .15rem;
	background: #ff5a00;
	color: #fff;
	font-size: .3rem;
	line-height: .6rem;
	text-align: center;
	border-radius: .08rem;
}

</style>
