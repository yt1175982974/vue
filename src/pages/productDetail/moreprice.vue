<template>
	<div class="ticket-prddetail-group">
		<h3 class="ticket-prddetail-title">更多报价</h3>
		<div class="ticket-prddetail-content ">
			<div class="ticket-productlist-item border-top" v-for="item in morePrice" :key="item.id">
				<div class="ticket-productprice-info">
					<h3 class="ticket-productprice-name">{{item.sight}}</h3>
					<div class="ticket-productprice-supplier">{{item.supplier}}</div>
					<div class="ticket-product-tag">
						<span class="ticket-product-desctag">
							<span class="iconfont">&#xe63c;</span>
							条件退
						</span>
						<span class="ticket-product-desctag">
							<span class="iconfont">&#xe610;</span>
							17:00前可订今日
						</span>
					</div>
					<div class="ticket-productprices-disandprice">
						<span class="ticket-product-price">
							<span class="ticket-price">&yen;<em class="ticket-price-num">{{item.price}}</em></span>
						</span>
						<span class="iconfont ticket-product-arrow">&#xe649;</span>
						<br/>
						<span class="ticket-product-marketprice">
							票面价&yen;
							<span class="ticket-product-marketnum">{{item.marketPrice}}</span>
						</span>
					</div>
					<a href="#" class="ticket-linkarea"></a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
		    return {
		    	
		    }
		},
		props:["morePrice"]
	}
</script>

<style scoped>
    @import "../../assets/font/iconfont.css";

	.iconfont{
		speak: none;
		font-style: normal;
		font-weight: normal;
		font-variant: normal;
		text-transform: none;
		line-height: 1;
	}
	.ticket-prddetail-group{
		margin-top: .2rem;
		padding: .01rem 0;
		background: #fff;
	}
	.ticket-prddetail-title{
		position: relative;
		padding: 0 .2rem;
		height: .88rem;
		background: #fff;
		color: #333;
		font-size: .32rem;
		line-height: .88rem;
		text-indent: .15rem;
	}
	.ticket-prddetail-title::after{
		content: " ";
		position: absolute;
		top: .32rem;
		left: .2rem;
		width: .06rem;
		height: .27rem;
		background: #00bcd4;
		border-radius: .04rem;
	}
	.ticket-prddetail-content{
		color: #9e9e9e;
		font-size: .28rem;
		line-height: .44rem;
		overflow: hidden;
		padding: .15rem 0;
		margin: 0 .2rem;
	}
	.ticket-productlist-item{
		overflow: hidden;
		position: relative;
	}
	.ticket-productprice-info{
		overflow: hidden;
		padding: .24rem 1.6rem .24rem 0;
	}
	.ticket-productprice-name{
		overflow: hidden;
		margin-bottom: .04rem;
		color: #212121;
		font-size: .3rem;
		line-height: .42rem;
	}
	.ticket-productprice-supplier{
		margin-bottom: .04rem;
		color: #9e9e9e;
		font-size: .24rem;
		line-height: .34rem;
		overflow: hidden;
		width: 100%;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.ticket-product-tag{
		font-size: 0;
		line-height: 0;
	}
	.ticket-product-desctag{
		color: #616161;
		font-size: .24rem;
		line-height: .32rem;
		white-space: nowrap;
	}
	.ticket-product-desctag:not(:last-child){
		margin-right: .26rem;
	}
	.ticket-productprices-disandprice{
		position: absolute;
		top: 50%;
		right: 0;
		color: #9e9e9e;
		font-size: .22rem;
		line-height: .3rem;
		text-align: right;
		transform: translate(0, -50%);
	}
	.ticket-product-price{
		text-align: right;
	}
	.ticket-product-price, .ticket-price-num{
		margin: 0 .04rem 0 .06rem;
		font-size: .4rem;
	}
	.ticket-price{
		padding-right: .3rem;
		color: #ff8300;
		font-size: .18rem;
		vertical-align: -.02rem;
		font-size: .24rem;
	}
	.ticket-product-marketprice{
		color: #9e9e9e;
		padding-right: .4rem;
	}
	.ticket-product-marketnum{
		text-decoration: line-through;
	}
	.ticket-product-arrow{
		position: absolute;
		top: 50%;
		right: .06rem;
		transform: translate(0, -50%);
	}
	.ticket-linkarea{
		position: absolute;
		z-index: 2;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%；
	}
</style>
