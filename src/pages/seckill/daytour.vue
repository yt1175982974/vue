<template>
	<div class="goodsKill tour-price">
		<img class="tour-img" src="http://s.qunarzz.com/piao_topic/image/touch/custom/2017/2343grab08/caption_3.jpg" />
		<div class="tour-purchase">
			<ul class="tour-list">
				<li class="tour-items" v-for="item in daytourItems" key="item.id">
					<div class="tour-each">
						<div class="each-imgpro">
							<img class="each-img" :src="item.imgUrl" />
						</div>
						<div class="each-recommend">
							{{item.eachRecommend}}
						</div>
						<div class="each-price">
							<span class="each-price-icon">&yen;</span>
							<span class="each-price-num">{{item.eachPriceNum}}</span>
						</div>
						<div class="each-btn">立即抢购</div>
					</div>
				</li>
			</ul>
			<div class="footer">
				<p class="footer-foot">
					<span class="footer-icon iconfont">&#xe83f;票面价</span>是指通过景区指定窗口售卖的纸质门票上标注的价格
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default({
		props:["daytourItems"],
		data() {
			return {}
		}
	})
</script>

<style>
	.tour-purchase {
		height: 10rem;
		background: #71c148;
	}
	.tour-list {
		height: 10rem;
		background: #71c148;
	}
	.tour-img {
		width: 100%;
	}
	.tour-items {
		float: left;
		width:50%;
		height: 4.5rem;
		margin-bottom: .4rem;
		background: #71c148;
	}
	.tour-each{
		width: 86%;
		height: 4.5rem;
		margin:0 auto;
		padding-bottom: .15rem;
		background: #fff;
		color: #000;
	}
	.each-img {
		width: 100%;
	}
	.each-recommend {
		overflow: hidden;
		width: 90%;
		height: .72rem;
		margin: .12rem .15rem 0;
		line-height: .36rem;
		font-size: .28rem;
		text-overflow: ellipsis;
	}
	.each-price {
		padding-left: .15rem;
	}
	.each-price-icon {
		color: #ff5a00;
	}
	.each-price-num {
		line-height: .8rem;
		font-size: .32rem;
		color: #ff5a00;
	}
	.each-btn {
		width: 90%;
		line-height: .7rem;
		margin: 0 .15rem;
		text-align: center;
		border-radius: .1rem;
		background: #ff5a00;
		color: #fff;
	}
	.footer {
		position: relative;
		width:100%;
		background: #71c148;
	}
	.footer-foot {
		padding: .16rem .2rem;
		line-height: .32rem;
		background-color: rgba(0, 0, 0, .4);
		color: #fff;
		font-size: .24rem;
	}
	.footer-icon {
		font-size: .24rem;
		color: #ffcd00;
	}
</style>