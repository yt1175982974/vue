<template>
	<div class='weekend-products'>
		<h2 class="weekend-title">
			精选玩法
		</h2>
		 
			<ul class="weekend-list  " ref='weekendList'  >

				<li class="weekend-item"  ref='weekendItem' v-for='item in info' @click="handleClick">
					<router-link :to='{path:"/weekend/detail?title="+item.name+"&newPrice="+item.new+"&oldPrice="+item.old+"&src="+item.img+"&imgs="+item.imgs+"&id="+item.id}'>
						<div class="weekend-item-img">
							<img  :src='item.src'/>
						</div>
						<div class="weekend-item-text">
							<h5 class="weekend-item-text-name" >{{item.name}}</h5>
							<div class="weekend-item-address">
								<span>{{item.address}}</span>
							</div>
							<div class="weekend-item-price">
								<div class="weekend-item-price-content">
									<span class="weekend-item-newPrice">
									 <em class="weekend-price-num">{{item.new}}</em> /份
								</span>
									<span class="weekend-item-oldPrice"> &yen;{{item.old}}</span>
								</div>
							</div>
						</div>
					</router-link>
				</li>

			</ul>
			<div class="weekend-notice" v-if='isloading'>努力加载中...</div>
		 

	</div>
</template>

<script>
	export default {
		props:["info", "isloading"],
		data () {
	      return {}
	     },
		methods:{
			handleClick: function() {
				document.body.scrollTop = 0;
				document.documentElement.scrollTop = 0;
			}
		}
	}
</script>

<style scoped>
	.weekend-products{
		background: #fff;
	}
	.weekend-title {
		overflow: hidden;
		position: relative;
		height: .88rem;
		margin-left: .2rem;
		font-size: .28rem;
		line-height: .88rem;
		text-indent: .15rem;
	}
	
	.weekend-title::before {
		content: " ";
		overflow: hidden;
		position: absolute;
		top: .32rem;
		left: 0;
		height: .25rem;
		width: .06rem;
		background: #1ba9ba;
		border-radius: .04rem;
	}
	
	.weekend-item-img {
		overflow: hidden;
		height: 0;
		padding-bottom: 43.75%;
		background: url(http://simg3.qunarzz.com/piao/images/loading_camel.gif) no-repeat center;
	}
	
	.weekend-item-img img {
		width: 100%;
		vertical-align: top;
	}
	
	.weekend-item-text {
		position: relative;
		padding: 0.2rem;
	}
	
	.weekend-item-text-name {
		font-size: .32rem;
		line-height: .46rem;
		max-height: .92rem;
		overflow: hidden;
		margin-bottom: .2rem;
		color: #212121;
	}
	
	.weekend-item-address {
		color: #9e9e9e;
		font-size: .24rem;
	}
	
	.weekend-item-price {
		position: absolute;
		top: -.65rem;
		left: 0;
		height: .45rem;
		line-height: .45rem;
	}
	
	.weekend-item-price-content {
		font-size: .2rem;
		position: relative;
		float: left;
		height: .45rem;
		padding: 0 .1rem;
		background: #ff9800;
		color: #fff;
		line-height: .45rem;
	}
	
	.weekend-price-num {
		font-size: 0.28rem;
		font-weight: bold;
	}
	
	.weekend-item-oldPrice {
		text-decoration: line-through;
	}
	
	.weekend-item-price-content:after {
		content: " ";
		overflow: hidden;
		position: absolute;
		top: 0;
		right: -.14rem;
		width: 0;
		height: 0;
		border-top: .45rem solid #ff9800;
		border-right: .14rem solid transparent;
	}
	
	.weekend-notice {
		height: 30px;
		line-height: 30px;
		text-align: center;
		font-size: .24rem;
		color: #25a4bb;
		border-top: 1px solid #ccc;
	}
	
	 
</style>