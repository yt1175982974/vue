<template>
	<div class="modules-content" >
		<div class="img-container">
			<img class="title-img" :src="data.titleImg" />
		</div>
		<ul class="purchase-list">
				<li class="purchase-item"v-for="item in data.items" key="item.id">
					<div class="purchase-item-img">
						<img class="each-img" :src="item.imgUrl" />
						<em class="item-name">{{item.name}}</em>
					</div>
					<div class="item-info">
						<div class="item-title">
							{{item.title}}
						</div>
						<div class="each-price">
							<span class="each-price-icon">&yen;</span>
							<span class="each-price-num">{{item.eachPriceNum}}</span>
							<span class="each-old-price">票面价&yen;<span class="old-price">{{item.oldPrice}}</span></span>
						</div>
						<div class="each-btn">立即抢购</div>
					</div>
				</li>
			</ul>
	</div>
</template>

<script>
	export default({
		props:["data"],
		data() {
			return {
			}
		},
        created(){
        }
	})
</script>

<style>
	.img-container{
		width: 100%;
		height:0;
		padding-bottom: 26.8%;
	}
	.title-img{
		width: 100%;
	}
	.item-info{
		width: 96%;
		padding:.2rem 2%;
	}
	.list1{
		background: #fa2d4b;
	}
	.list2{
		background: #0391ff;
	}
	.list3{
		background: #71c148;
	}
	.purchase-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
	}
	.purchase-item{
		list-style: none;
		width: 46%;
		margin: 0 2% .3rem;
		padding: 0;
		background: #fff
	}

	.purchase-item-img {
		position: relative;
		width: 100%;
		height: 0;
		padding-bottom: 61.76%;
		background-color: #f0f0f0;
	}
	.each-img {
		width: 100%;
	}
	.item-name{
		display: block;
		position: absolute;
		bottom: 0;
		width: 100%;
        box-sizing: border-box;
		padding-left: .1rem;
		background-color: rgba(0, 0, 0, .5);
		color: #fff;
	}
	.item-title {
		height: .72rem;
		color: #222;
		font-size: .28rem;
		line-height: .36rem;
		display: -webkit-box;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical;
	}
	.each-price {
		padding-left: .15rem;
		font: .28rem Tahoma,Helvetica,sans-serif;
	}
	.each-price-icon {
		color: #ff5a00;
	}
	.each-price-num {
		line-height: .8rem;
		font-size: .4rem;
		font-weight: bold;
		color: #ff5a00;
	}
	.each-old-price {
		font-size: .15rem;
	}
	.each-btn {
		width: 90%;
		line-height: .7rem;
		margin: 0 auto;
		text-align: center;
		border-radius: .1rem;
		background: #ff5a00;
		color: #fff;
	}
</style>
