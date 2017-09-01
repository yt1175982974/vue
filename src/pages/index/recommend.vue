<template>
	<div class="recommend-container">
		<p class="recommend-title">热门推荐</p>
		<ul class="recommend-list" v-for="item in recommendInfo" key="item.id">
			<li class="recommend-item">
				<div class="item-img">
					<img :src="item.imgUrl">
				</div>
				<div class="item-msg">
					<p class="item-msg-title">{{item.itemTitle}}</p>
					<p class="item-msg-intro">{{item.itemIntro}}</p>
					<p class="item-msg-price-info">
						<span class="price-currency">&yen;</span><i class="price-num">{{item.itemPrice}}</i><span>起</span>
					</p>
				</div>
			</li>
		</ul>
		<p to="" class="watch-more">查看所有产品</p>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				recommendInfo: [{
					"id": "1",
					"imgUrl": "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg",
					"itemTitle": "故宫",
					"itemIntro": "东方宫殿建筑代表，世界宫殿建筑典范",
					"itemPrice": "20"
				},{
					"id": "2",
					"imgUrl": "http://img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_140x140_e20be8e0.jpg",
					"itemTitle": "颐和园",
					"itemIntro": "保存完整的一座皇家行宫御苑",
					"itemPrice": "65"
				},{
					"id": "3",
					"imgUrl": "http://img1.qunarzz.com/sight/p0/1604/1b/1b6778deafaf208f90.img.jpg_140x140_75f5d504.jpg",
					"itemTitle": "八达岭长城",
					"itemIntro": "不到长城非好汉",
					"itemPrice": "39.9"
				},{
					"id": "4",
					"imgUrl": "http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_140x140_b05eb1df.jpg",
					"itemTitle": "北京欢乐谷",
					"itemIntro": "七大主题园区带你畅享北京欢乐谷",
					"itemPrice": "29.5"
				},{
					"id": "5",
					"imgUrl": "http://img1.qunarzz.com/sight/p0/201306/13/bdf22f69fab0ee4ec8d65eac.jpg_140x140_355f4fb6.jpg",
					"itemTitle": "八达岭长城缆车",
					"itemIntro": "巍峨雄伟尽收眼底",
					"itemPrice": "155"
				}]
			}
		}
	}
</script>

<style scoped>
	.recommend-title {
		background: #f5f5f5;
		height: .8rem;
		font-size: .28rem;
		line-height: .8rem;
		padding-left: .26rem;
	}
	.recommend-item {
		overflow: hidden;
	}
	.item-img {
		float: left;
		width: 1.4rem;
		height: 1.4rem;
		padding: .2rem;
	}
	.item-img img {
		width: 100%;
		height: 100%;
	}
	.item-msg{
		float: left;	
		overflow: hidden;	
		padding-top: .2rem;		
		line-height: .4rem;	
	}
	.item-msg-title {	
		height: .4rem;				
	    color: #212121;
	    font-size: .3rem;
	}
	.item-msg-intro {
		overflow: hidden;
		height: .4rem;
		margin-bottom: .1rem;
		color: #9e9e9e;		
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.item-msg-price-info {
		height: .4rem;
		font-size: .24rem;
		color: #9e9e9e;
	}
	.price-currency {
		color: #ff8300;
	}
	.price-num {
		font-size: .36rem;
		padding: 0 .04rem;
		color: #ff8300;
	}
	.watch-more {
		height: .88rem;
		line-height: .88rem;
		font-size: .28rem;
		text-align: center;
		color: #00afc7;
	}
</style>