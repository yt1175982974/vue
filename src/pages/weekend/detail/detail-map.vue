<template>
	<div>
		<header class='header iconfont'>
			<router-link :to='{path:"/weekend/detail?title="+title+"&newPrice="+newPrice+"&oldPrice="+oldPrice+"&src="+src+"&imgs="+imgs+"&id="+id}'>
				<span class='header-return'>&#xe615;</span>
			</router-link>
			<span>景点地图</span>
		</header>
		<el-amap vid="amapDemo" class='map' :zoom="zoom" :center='center'>
		    <el-amap-marker key='1' v-for="marker in markers" :position="marker.position">
		    </el-amap-marker>
		</el-amap>
		<footer class='footer'>
			<p class='footer-title'>{{$route.query.title}}<span class='footer-view'>景点</span></p>
			<p class='footer-price'>￥{{$route.query.price}}起</p>
		</footer>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				markers: [],
				zoom: 15,
				center: [this.$route.query.y,this.$route.query.x],
				id: localStorage.id,
				title: localStorage.title,
            	src: localStorage.src,
            	newPrice: localStorage.newPrice,
            	oldPrice: localStorage.oldPrice,
            	imgs: localStorage.imgs.split(",")
			}
		},
		mounted() {
		    this.markers = [{
		      position: [this.$route.query.y,this.$route.query.x]
		     }];
		}	
	}
	
</script>
<style scoped>
	@import "../../../assets/font/iconfont.css";
	.map {
		width:100%;
		height:12.34rem;
		z-index:0;
		position:absolute;
		left:0;
		top:0;
	}
	.header {
		background:#00bcd4;
		line-height:.88rem;
		color:#fff;
		font-size:.32rem;
		text-align:center;
		position:fixed;
		left:0;
		top:0;
		width:100%;
		z-index:3;
	}
	.header-return {
		position:absolute;
		left:0;
		top:0;
		width:.8rem;
		text-align:center;
		font-size:.36rem;
		color:#fff;
	}
	.footer {
		position:fixed;
		bottom:.1rem;
		left:0;
		width:6.9rem;
		background:#fff;
		padding:.2rem;
		margin:0 .1rem;
		box-shadow:0 0 .1rem #aaa;
		z-index:3;
	}
	.footer-title {
		font-size:.32rem;
		font-weight:600;
		padding:.06rem 0;
	}
	.footer-view {
		background:#00bcd4;
		color:#fff;
		padding:.02rem .1rem;
		font-size:.24rem;
		margin-left:.1rem;
	}
	.footer-price {
		font-size:.28rem;
		line-height:.4rem;
	}
</style>