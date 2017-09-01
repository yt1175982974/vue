<template>
	<div class="body-list">
		<ul class="container-list" v-for="item in listContentStar" :key="item.id">
			<router-link :to="item.link + '?id=' + item.id">
				<li class="list-img">
					<a href="javascript:;"><img :src="item.imgUrl"/></a>
					<div class="order-squ">
						<span class="order">可订明日</span>
					</div>
				</li>
				<li class="list-content">
					<h2 ref="title"><a href="#">{{item.title}}</a></h2>
					<div>
						<span class="list-content-mask list-city"><a href="javascript:;" class="iconfont">&#xe65b;&#xe65b;&#xe65b;&#xe65b;&#xe65b;</a></span>
						<span class="list-content-mask list-city"><a href="javascript:;" class="evaluate">{{item.listMask2}}</a></span>
					</div>
					<div class="list-ticket">
						<span><i class="site">{{item.listTicket}}</i></span>	
					</div>
					<div class="list-price">
						<p ><i class="now-price">&yen;{{item.listPrice}}</i>起</p>
					</div>
				</li>
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default {
	data () {
		return{
			listContentStar: []
		}
	},
	created() {
		this.$http.get('/static/theOneDayTripindex.json').then(response => {
			var data = response.body.data;
			this.listContentStar = data.listContentStar;
		}, response => {
			console.log("ajax error");
		});
	},
	components:{},
	methods: {}
	}
</script>


<style scoped>
	@import "../../../../assets/font/iconfont.css";
	.body-list {
		height: 100%;
	}
	.site {
		color: #9e9e9e;
	}
	.evaluate {
		color: #9e9e9e;
	}
	.iconfont {
		color:#00bcd4;
		z-index: 2;
		width: 100%;
		letter-spacing: 3px;
	}
	.scroll-view {
		height: 100%;
		touch-action: none;
		position: relative;
		overflow: hidden;
	}
	.container-list {
		margin-bottom: -2rem;
		width: 100%;
		overflow: hidden;
		position: relative;
		font-size: .28rem;
	}
	.list-img {
		position: relative;
		padding: .2rem;
		border-bottom: .01rem solid #f5f5f5;
	}
	.list-img img {
		width: 80px;
		height: 80px;
	}
	.order {
		position: absolute;
		left: .14rem;
		top: .14rem;
		background: #00bcd4;
		color: #fff; 
		font-size: .24rem;
		line-height: .24rem;
		padding: .05rem;
		border-right: .01rem solid #ccc;
		z-index: 1;
	}
	.order-squ:after {
		position: absolute;
		top: .15rem;
		left: 1.10rem;
		content: "";
		border: .165rem solid #00bcd4;
		border-right-color: transparent ;
		z-index: 0;
	}
	.list-content {
		width: auto;
		position: relative;
		margin-left: 2rem;
		top: -2rem;
		height: 1.58rem;
		overflow: hidden;
		padding: .2rem .2rem .2rem 0;	
		border-bottom: .01rem solid #f5f5f5;
	}
	.list-content h2 {
		font-size: .32rem;
		line-height: .44rem;
		width: 100%;
		height: .9rem;
		line-height: .36rem;
		position: relative;
		overflow: hidden;
		text-overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	} 
	.list-content h2 a {
		display: block;
		color: #212121;
	}
	.list-content-mask {
		font-size: .20rem;
		margin: 0.1rem 0;
		border-left: .01rem solid #ddd;
	}
	.list-content-mask a{
		font-size: .24rem;
	}
	.list-city {
		border: none;
	}
	.list-ticket {
		position: absolute;
		left: 0px;
		bottom: .2rem;
		color: #616161;
		font-size: .24rem;
	}
	.list-price {
		position: absolute;
		right: .22rem;
		bottom: .2rem;
		color: #9e9e9e;
		font-size: .24rem;
		text-align: right;

	}
	.list-price p {
		padding-top: .1rem;
		letter-spacing: 1px;
	}
	.now-price {
		color: #ff8300;
		font-size: .30rem;
		font-weight: bold;
	}
	.pre-price {
		text-decoration: line-through;
	}
	
</style>