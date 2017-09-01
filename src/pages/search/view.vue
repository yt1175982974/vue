<template>
	<div class="main-view">
		<ul class="view-list">
			<li class="list-item" v-for="item in contInfo" :key="item.id">
				<div class="item-content">
					<div class="item-content-id">
						<div class="content-id-img">
							<a href="#"><img :src="item.imgUrl"/></a>
							<span class="content-img-title" v-if="item.tody" >
								<span class="conten-img-text">可订今日</span>
							</span>
						</div>
						<div class="content-id-right">
							<a href=""><h3 class="content-right-name">{{item.title}}</h3></a>
							<span class="content-right-price">
								&yen;<em>{{item.price}}</em>
								<span class="price-text">起</span>
							</span>
							<div class="content-right-commonts">								
								<a href="">
									<span class="right-commonts-b iconfont">&#xe628;&#xe628;&#xe628;&#xe628;&#xe628;</span>
									<span class="right-commonts-a">{{item.comment}}评论</span>
								</a>
							</div>
							<div class="content-right-location">
								<span class="right-location-a">{{item.location}}</span>
							</div>
						</div>
					</div>
					<div class="item-content-ticket">
						<a href="#">
							<h4 class="item-content-text">{{item.ticketName1}}</h4>
							<span class="ticket-price">&yen;<em>{{item.ticketPrice1}}</em></span>
						</a>					
					</div>
					<div class="item-content-ticket">
						<a href="">
							<h4 class="item-content-text">{{item.ticketName2}}</h4>
							<span class="ticket-price">&yen;<em>{{item.ticketPrice1}}</em></span>
						</a>					
					</div>
					<div class="item-content-product">
						<a href="" class="product-a">
							查看全部{{item.number}}个产品
							<span class="content-product-right iconfont">&#xe649;</span>
						</a>					
					</div>
				</div>
			</li>					
		</ul>
	</div>
	
</template>

<script>
	export default {
		data() {
			return {
							
			}
		},
		props: ['contInfo']
		//接受父组件数据
	}
</script>

<style>
	@import url("../../assets/font/iconfont.css");
	
	.list-item {
		margin-bottom: .2rem;
    	background: #fff;
    	
	}
	.item-content {
		border-top: 1px solid #e4e6e6;
		border-bottom: 1px solid #e4e6e6;
	}
	.item-content-id {
		padding: 0.2rem;
	}
	.content-id-img {
		position: relative;
		float: left;
		width: 1.6rem;
		height: 1.6rem;
	}
	img {
		width: 100%;
	}
	.content-img-title {
		position: absolute;
	    left: -.04rem;
	    top: -.04rem;
	    padding: .02rem;
	    background: #fa8514;
	    color: #fff;
	    line-height: .24rem;
	}
	.content-img-title::after {
		content: "";
	    position: absolute;
	    top: 0;
	    right: -.1rem;
	    width: 0;
	    height: 0;
	    border-top: .14rem solid #fa8514;
	    border-bottom: .14rem solid #fa8514;
	    border-right: .1rem solid transparent;
	}
	.conten-img-text {
		display: block;
		font-size: .24rem;
	}
	.content-id-right {
		position: relative;
	    overflow: hidden;
	    padding-left: .2rem;
	    height: 1.6rem;
	}
	.content-right-name {
		overflow: hidden;
	    max-width: 60%;
	    color: #212121;
	    font-size: .32rem;
	    line-height: .36rem;
	    white-space: nowrap;
    	text-overflow: ellipsis    
	}
	.content-right-price {
	    position: absolute;
	    top: 0;
	    right: 0;
	    height: .36rem;
	    color: #ff8300;
	    font-size: .2rem;
	}
	.content-right-price em {
		font-size: .36rem;
	}
	.price-text {
		color: #9e9e9e;
		font-size: .2rem;
	}
	.content-right-commonts {
		margin-top: .38rem;
	    height: .64rem;
	    line-height: .64rem;
	}
	.right-commonts-a {
		position: relative;
	    top: -.03rem;
	    margin-left: .06rem;
	    color: #9e9e9e;
	    font-size: .26rem;
	}
	.right-commonts-b {
    	font-size: .3rem;
    	color: #00bcd4;
	}
	.content-right-location {
		position: absolute;
	    bottom: 0;
	    color: #9e9e9e;
	    font-size: 0;
	}
	.right-location-a {
		font-size: .24rem;
	}
	.item-content-ticket {
		position: relative;
	    height: .9rem;
	    margin: 0 .2rem;
	    border-top: 1px dashed #EAEAEA;
	}
	.item-content-text {
		overflow: hidden;
	    margin-right: 1.2rem;
	    color: #212121;
	    font-size: .28rem;
	    line-height: .9rem;
	    white-space: nowrap;
    	text-overflow: ellipsis;
	}
	.ticket-price {
		overflow: hidden;
	    position: absolute;
	    top: 0;
	    right: 0;
	    width: 1.2rem;
	    color: #ff8300;
	    font-size: .2rem;
	    line-height: .9rem;
	    text-align: right;
	}
	.ticket-price em {
		font-size: .36rem;
	}
	.item-content-product {
		height: .9rem;
	    padding: 0 .2rem;
	    color: #9e9e9e;
	    font-size: .28rem;
	    line-height: .9rem;
	    border-top: 1px solid #e4e6e6;;
	}
	.content-product-right {
		float: right;
		width: .24rem;
	    font-size: .35rem;
	    line-height: .9rem;
	}
	.product-a {
		color: #9e9e9e;
	}
</style>